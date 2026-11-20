// plugin/src/worker.ts
import { execFile, spawn } from "node:child_process";
import { randomBytes, timingSafeEqual } from "node:crypto";
import { existsSync } from "node:fs";
import { dirname, join as join2 } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

// plugin/src/endpoint.ts
import { createHash, createHmac } from "node:crypto";
import { lstatSync, mkdirSync, readFileSync, realpathSync } from "node:fs";
import { homedir } from "node:os";
import { join, resolve } from "node:path";
function pluginEndpointPath(workspace, create = false) {
  let canonical;
  try {
    canonical = realpathSync(workspace);
  } catch (err) {
    if (err.code !== "ENOENT" || create) throw err;
    canonical = resolve(workspace);
  }
  const directory = join(homedir(), ".orca-dag-viewers");
  if (create) {
    try {
      mkdirSync(directory, { mode: 448 });
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
    }
  }
  const stat = lstatSync(directory);
  if (!stat.isDirectory() || process.getuid && (stat.uid !== process.getuid() || (stat.mode & 63) !== 0)) {
    throw new Error(`${directory} must be a private, user-owned directory`);
  }
  const key = createHash("sha256").update(canonical).digest("hex");
  return join(directory, `${key}.json`);
}
function checkPluginEndpointFile(path) {
  const stat = lstatSync(path);
  if (!stat.isFile() || stat.nlink !== 1 || stat.size > 16384 || process.getuid && (stat.uid !== process.getuid() || (stat.mode & 63) !== 0)) {
    throw new Error(`${path} must be a private, user-owned endpoint file`);
  }
}
function readPluginEndpointFile(workspace) {
  try {
    const path = pluginEndpointPath(workspace);
    checkPluginEndpointFile(path);
    const row = JSON.parse(readFileSync(path, "utf8"));
    return row?.version === 2 && row.workspace === realpathSync(workspace) && typeof row.port === "number" && Number.isInteger(row.port) && row.port > 0 && row.port <= 65535 && typeof row.pid === "number" && Number.isSafeInteger(row.pid) && row.pid > 0 && typeof row.instanceId === "string" && /^[A-Za-z0-9_-]{1,128}$/.test(row.instanceId) && typeof row.pluginToken === "string" && /^[A-Za-z0-9_-]{32}$/.test(row.pluginToken) ? row : null;
  } catch {
    return null;
  }
}
function pluginRequestToken(key) {
  return createHmac("sha256", key).update("orca-dag:plugin-request:v2").digest("base64url");
}
function signPluginReply(key, kind, nonce, body) {
  return createHmac("sha256", key).update(`orca-dag:plugin-reply:v2:${kind}:${nonce}:`).update(body).digest("base64url");
}

// plugin/src/worker.ts
var PLUGIN_ID = "orchestration-panel";
var PLUGIN_VERSION = "0.1.0";
var MAX_STATUS_EVENTS = 50;
var DISCOVERY_INTERVAL_MS = 1e4;
var FLUSH_DEBOUNCE_MS = 100;
var INBOX_WAIT_MS = 1e4;
var MAX_PANEL_POST_BYTES = 220 * 1024;
var MANAGED_START_TIMEOUT_MS = 8e3;
var MANAGED_POLL_INTERVAL_MS = 80;
var execFileAsync = promisify(execFile);
function resolveBundledAssets() {
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    for (const root of [here, dirname(here)]) {
      const serverEntry = join2(root, "server", "index.mjs");
      if (existsSync(serverEntry)) {
        const panelDir = join2(root, "panel");
        return {
          serverEntry,
          panelDir: existsSync(join2(panelDir, "index.html")) ? panelDir : null
        };
      }
    }
  } catch {
  }
  return null;
}
function buildManagedServerEnv(workspacePath, panelDir) {
  const env = { ...process.env };
  for (const key of Object.keys(env)) {
    if (key === "PORT" || key === "ORCA_DAG_WEB_URL" || key === "ORCA_DAG_WEB_DIR" || key === "ORCA_WORKTREE" || key === "ORCA_ENVIRONMENT" || key === "ORCA_PAIRING_CODE" || key === "ORCA_TERMINAL_HANDLE" || key === "ORCA_PANE_KEY" || key === "ORCA_TAB_ID" || key === "ORCA_AGENT_PANE" || key.startsWith("ORCA_AGENT_LAUNCH") || key.startsWith("ORCA_AGENT_HOOK_") || key === "ORCA_OPENCODE_AGENT") {
      delete env[key];
    }
  }
  env.WORKSPACE_DIR = workspacePath;
  env.PORT = "0";
  env.NO_OPEN = "1";
  env.ORCA_DAG_NO_SKILL = "1";
  env.ORCA_DAG_NO_WORKSPACE_INIT = "1";
  if (panelDir) env.ORCA_DAG_WEB_DIR = panelDir;
  return env;
}
function panelApiPath(url) {
  if (!url.startsWith("/api/") || /[\s\\#\u0000-\u001f\u007f]/.test(url)) return false;
  const pathname = url.split("?", 1)[0];
  try {
    const segments = pathname.slice(5).split("/").map(decodeURIComponent);
    return segments.every((segment) => segment && segment !== "." && segment !== ".." && !/[\s/\\%?#\u0000-\u001f\u007f]/.test(segment)) && segments[0].toLowerCase() !== "plugin" && segments.at(-1)?.toLowerCase() !== "stream";
  } catch {
    return false;
  }
}
async function verifiedPluginReply(res, key, kind, nonce) {
  const proof = res.headers.get("x-orca-plugin-proof");
  if (!res.ok || !proof || !/^[A-Za-z0-9_-]{43}$/.test(proof)) {
    await res.body?.cancel();
    throw new Error("Viewer did not provide an authenticated reply");
  }
  const body = await res.text();
  if (!timingSafeEqual(Buffer.from(proof), Buffer.from(signPluginReply(key, kind, nonce, body)))) {
    throw new Error("Viewer reply did not match this connection");
  }
  return JSON.parse(body);
}
var activeShutdown = null;
function pushRing(buf, item, max) {
  buf.push(item);
  if (buf.length > max) buf.splice(0, buf.length - max);
}
function activate(orca) {
  activeShutdown?.();
  let disposed = false;
  const connections = /* @__PURE__ */ new Map();
  const managedServers = /* @__PURE__ */ new Map();
  const startingServers = /* @__PURE__ */ new Map();
  const activityStreams = /* @__PURE__ */ new Map();
  const outputStreams = /* @__PURE__ */ new Map();
  let focusedWorkspaceId = null;
  const bundledAssets = resolveBundledAssets();
  let skillInstall;
  let skillUninstall;
  const state = {
    activatedAt: Date.now(),
    statusCount: 0,
    toolCount: 0,
    promptCount: 0,
    workspaceCount: 0,
    forwardedBatches: 0,
    recentStatus: []
  };
  let toolStreamEnabled = true;
  let notifyEnabled = true;
  async function loadSettings() {
    if (!orca.host.has("settings.get")) return;
    try {
      const { settings } = await orca.host.call("settings.get", {});
      if (typeof settings.toolStream === "boolean") toolStreamEnabled = settings.toolStream;
      if (typeof settings.notify === "boolean") notifyEnabled = settings.notify;
    } catch {
    }
  }
  function updateStatusBar(summary) {
    if (disposed || !orca.host.has("statusBar.update")) return;
    void orca.host.call("statusBar.update", {
      id: "run",
      text: summary.text,
      tone: summary.tone ?? "neutral",
      tooltip: summary.tooltip ?? "Orchestration Panel companion plugin",
      visible: true
    }).catch(() => {
    });
  }
  function viewerHeaders(conn) {
    return {
      "content-type": "application/json",
      "x-orca-plugin-token": conn.requestToken
    };
  }
  function disconnectViewer(key) {
    const conn = connections.get(key);
    if (!conn) return;
    connections.delete(key);
    conn.connected = false;
    if (conn.flushTimer) clearTimeout(conn.flushTimer);
    conn.abort.abort();
    if (connections.size === 0) {
      updateStatusBar({
        text: "Orchestration",
        tone: "neutral",
        tooltip: "Orchestration Panel (no local viewer connected)"
      });
    }
  }
  async function postJson(conn, path, body, timeoutMs = 3e3) {
    if (conn.abort.signal.aborted) return false;
    const controller = new AbortController();
    const onParentAbort = () => controller.abort();
    conn.abort.signal.addEventListener("abort", onParentAbort, { once: true });
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    timer.unref?.();
    try {
      const res = await fetch(`http://127.0.0.1:${conn.endpoint.port}${path}`, {
        method: "POST",
        headers: viewerHeaders(conn),
        body: JSON.stringify(body),
        redirect: "error",
        signal: controller.signal
      });
      await res.body?.cancel();
      return res.ok;
    } catch {
      return false;
    } finally {
      clearTimeout(timer);
      conn.abort.signal.removeEventListener("abort", onParentAbort);
    }
  }
  async function flushViewer(conn) {
    conn.flushTimer = null;
    if (disposed || !conn.connected) return;
    const statusEvents = conn.queuedStatus.splice(0);
    const toolEvents = conn.queuedTools.splice(0);
    const promptEvents = conn.queuedPrompts.splice(0);
    if (statusEvents.length === 0 && toolEvents.length === 0 && promptEvents.length === 0) return;
    const ok = await postJson(conn, "/api/plugin/events", { statusEvents, toolEvents, promptEvents });
    if (ok) {
      conn.lastSyncAt = Date.now();
      state.forwardedBatches += 1;
    } else if (conn.connected) {
      disconnectViewer(conn.workspacePath);
    }
  }
  function scheduleFlush(conn) {
    if (conn.flushTimer || !conn.connected || disposed) return;
    conn.flushTimer = setTimeout(() => {
      void flushViewer(conn);
    }, FLUSH_DEBOUNCE_MS);
    conn.flushTimer.unref?.();
  }
  function matchingConnections(workspaceId, workspaceListId) {
    return [...connections.values()].filter((conn) => conn.connected && (workspaceListId ? conn.workspaceListId === workspaceListId : workspaceId !== null && (workspaceId === conn.workspaceListId || workspaceId === conn.workspacePath)));
  }
  async function executeInboxCommand(conn, cmd) {
    if (!conn.connected || conn.abort.signal.aborted) return;
    const params = cmd.params ?? {};
    let receipt;
    try {
      if (cmd.kind === "agent.resume") {
        if (!orca.host.has("agent.resume")) {
          receipt = { ok: false, code: "unsupported", error: "agent.resume unavailable on this Orca host" };
        } else {
          const res = await orca.host.call("agent.resume", {
            workspaceId: String(params.workspaceId ?? ""),
            agent: String(params.agent ?? ""),
            sessionId: String(params.sessionId ?? "")
          });
          receipt = { ok: true, ...res };
        }
      } else if (cmd.kind === "agent.listSessions") {
        if (!orca.host.has("agent.listSessions")) {
          receipt = { ok: false, code: "unsupported", error: "agent.listSessions unavailable" };
        } else {
          const req = {};
          if (typeof params.workspaceId === "string") req.workspaceId = params.workspaceId;
          if (typeof params.limit === "number") req.limit = params.limit;
          receipt = { ok: true, ...await orca.host.call("agent.listSessions", req) };
        }
      } else if (cmd.kind === "workspace.list") {
        if (!orca.host.has("workspace.list")) {
          receipt = { ok: false, code: "unsupported", error: "workspace.list unavailable" };
        } else {
          const req = params.includeStatus === true ? { includeStatus: true } : {};
          receipt = { ok: true, ...await orca.host.call("workspace.list", req) };
        }
      } else {
        receipt = { ok: false, code: "unknown_command", error: `Unsupported command ${cmd.kind}` };
      }
    } catch (err) {
      const e = err;
      receipt = {
        ok: false,
        code: typeof e?.code === "string" ? e.code : "action_failed",
        error: String(e?.message ?? err)
      };
    }
    await postJson(conn, `/api/plugin/receipts/${encodeURIComponent(cmd.id)}`, receipt);
  }
  async function runInboxLoop(conn) {
    while (!disposed && conn.connected && !conn.abort.signal.aborted) {
      try {
        const nonce = randomBytes(16).toString("base64url");
        const res = await fetch(`http://127.0.0.1:${conn.endpoint.port}/api/plugin/inbox?waitMs=${INBOX_WAIT_MS}`, {
          headers: { "x-orca-plugin-token": conn.requestToken, "x-orca-plugin-nonce": nonce },
          redirect: "error",
          signal: AbortSignal.any([conn.abort.signal, AbortSignal.timeout(INBOX_WAIT_MS + 5e3)])
        });
        const data = await verifiedPluginReply(res, conn.endpoint.pluginToken, "inbox", nonce);
        if (conn.abort.signal.aborted) return;
        conn.lastSyncAt = Date.now();
        if (data.statusBar) {
          updateStatusBar(data.statusBar);
        }
        if (notifyEnabled && Array.isArray(data.notifications) && orca.host.has("notifications.show")) {
          for (const note of data.notifications) {
            void orca.host.call("notifications.show", { title: note.title, body: note.body }).catch(() => {
            });
          }
        }
        if (Array.isArray(data.commands)) {
          for (const cmd of data.commands) {
            void executeInboxCommand(conn, cmd);
          }
        }
      } catch {
        if (!disposed && conn.connected) disconnectViewer(conn.workspacePath);
        return;
      }
    }
  }
  async function connectViewer(workspacePath, workspaceListId, endpoint) {
    const existing = connections.get(workspacePath);
    if (existing && existing.connected && existing.endpoint.instanceId === endpoint.instanceId && existing.endpoint.port === endpoint.port && existing.endpoint.pluginToken === endpoint.pluginToken) {
      existing.workspaceListId = workspaceListId ?? existing.workspaceListId;
      return;
    }
    if (existing) disconnectViewer(workspacePath);
    const conn = {
      workspacePath,
      workspaceListId,
      endpoint,
      requestToken: pluginRequestToken(endpoint.pluginToken),
      abort: new AbortController(),
      connected: false,
      lastSyncAt: 0,
      mutationToken: null,
      queuedStatus: [],
      queuedTools: [],
      queuedPrompts: [],
      flushTimer: null
    };
    connections.set(workspacePath, conn);
    try {
      const nonce = randomBytes(16).toString("base64url");
      const res = await fetch(`http://127.0.0.1:${endpoint.port}/api/plugin/hello`, {
        method: "POST",
        headers: { ...viewerHeaders(conn), "x-orca-plugin-nonce": nonce },
        body: JSON.stringify({
          pluginId: PLUGIN_ID,
          version: PLUGIN_VERSION,
          hostApiMinor: orca.api.minor,
          grantedCapabilities: [...orca.grantedCapabilities]
        }),
        redirect: "error",
        signal: AbortSignal.any([conn.abort.signal, AbortSignal.timeout(3e3)])
      });
      const reply = await verifiedPluginReply(res, endpoint.pluginToken, "hello", nonce);
      if (reply?.ok !== true || reply.workspaceDir !== endpoint.workspace) throw new Error("Viewer workspace mismatch");
    } catch {
      if (connections.get(workspacePath) === conn) disconnectViewer(workspacePath);
      return;
    }
    if (disposed || conn.abort.signal.aborted) return;
    conn.connected = true;
    conn.lastSyncAt = Date.now();
    orca.log(`connected to viewer at 127.0.0.1:${endpoint.port} (${workspacePath})`);
    void runInboxLoop(conn);
  }
  let discoveryPromise = null;
  async function discoverViewers() {
    if (disposed || !orca.host.has("workspace.list")) return;
    if (discoveryPromise) return await discoveryPromise;
    discoveryPromise = (async () => {
      try {
        const { workspaces } = await orca.host.call("workspace.list", {});
        const seenPaths = /* @__PURE__ */ new Set();
        for (const ws of workspaces) {
          if (disposed) return;
          if (ws.hostId !== "local" && ws.hostId !== null) continue;
          if (!ws.path) continue;
          seenPaths.add(ws.path);
          const endpoint = readPluginEndpointFile(ws.path);
          if (endpoint) {
            await connectViewer(ws.path, ws.id, endpoint);
          } else if (connections.has(ws.path)) {
            disconnectViewer(ws.path);
          }
        }
        for (const path of [...connections.keys()]) {
          if (!seenPaths.has(path)) disconnectViewer(path);
        }
      } catch {
      }
    })().finally(() => {
      discoveryPromise = null;
    });
    return await discoveryPromise;
  }
  void loadSettings();
  orca.settings.onDidChange(() => {
    void loadSettings();
  });
  updateStatusBar({
    text: "Orchestration",
    tone: "neutral",
    tooltip: "Orchestration Panel companion plugin ready"
  });
  const discoveryTimer = setInterval(() => {
    void discoverViewers();
  }, DISCOVERY_INTERVAL_MS);
  discoveryTimer.unref?.();
  void discoverViewers();
  orca.events.on("agent.status.changed", (payload) => {
    state.statusCount += 1;
    const item = {
      workspaceId: payload.workspaceId,
      workspaceListId: payload.workspaceListId ?? null,
      terminalId: payload.terminalId ?? null
    };
    pushRing(state.recentStatus, item, MAX_STATUS_EVENTS);
    for (const conn of matchingConnections(payload.workspaceId, payload.workspaceListId ?? null)) {
      if (item.terminalId) pushRing(conn.queuedStatus, { terminalId: item.terminalId }, MAX_STATUS_EVENTS);
      scheduleFlush(conn);
    }
  });
  orca.events.on("workspace.changed", (payload) => {
    state.workspaceCount += 1;
    focusedWorkspaceId = payload.context?.workspaceId ?? null;
    void discoverViewers();
  });
  function stopManagedServer(workspacePath) {
    const entry = managedServers.get(workspacePath);
    if (!entry) return;
    managedServers.delete(workspacePath);
    if (!entry.exited && entry.child.pid) {
      try {
        entry.child.kill("SIGTERM");
      } catch {
      }
    }
  }
  async function ensureManagedViewer(workspacePath, workspaceListId) {
    if (disposed || !bundledAssets) return null;
    const already = connections.get(workspacePath);
    if (already?.connected) return already;
    const existingEp = readPluginEndpointFile(workspacePath);
    if (existingEp) {
      await connectViewer(workspacePath, workspaceListId, existingEp);
      const connected = connections.get(workspacePath);
      if (connected?.connected) return connected;
    }
    const inFlight = startingServers.get(workspacePath);
    if (inFlight) return await inFlight;
    const promise = (async () => {
      if (disposed) return null;
      const prev = managedServers.get(workspacePath);
      if (prev && !prev.exited) {
        stopManagedServer(workspacePath);
      }
      orca.log(`starting embedded viewer server for ${workspacePath}`);
      const child = spawn(process.execPath, [bundledAssets.serverEntry], {
        cwd: workspacePath,
        env: buildManagedServerEnv(workspacePath, bundledAssets.panelDir),
        stdio: ["ignore", "ignore", "pipe"]
      });
      const entry = {
        child,
        workspacePath,
        startedAt: Date.now(),
        exited: false,
        lastStderr: ""
      };
      managedServers.set(workspacePath, entry);
      child.stderr?.on("data", (chunk) => {
        entry.lastStderr = (entry.lastStderr + chunk.toString("utf8")).slice(-512);
      });
      child.once("exit", (code, signal) => {
        entry.exited = true;
        if (managedServers.get(workspacePath) === entry) {
          managedServers.delete(workspacePath);
        }
        if (!disposed) {
          orca.log(
            `embedded viewer exited for ${workspacePath} (code=${String(code)}, signal=${String(signal)})${entry.lastStderr.trim() ? `: ${entry.lastStderr.trim()}` : ""}`
          );
        }
      });
      const deadline = Date.now() + MANAGED_START_TIMEOUT_MS;
      while (!disposed && !entry.exited && Date.now() < deadline) {
        const ep = readPluginEndpointFile(workspacePath);
        if (ep && ep.pid === child.pid) {
          await connectViewer(workspacePath, workspaceListId, ep);
          const conn = connections.get(workspacePath);
          if (conn?.connected) return conn;
        }
        await new Promise((r) => setTimeout(r, MANAGED_POLL_INTERVAL_MS));
      }
      if (!entry.exited) stopManagedServer(workspacePath);
      return null;
    })().finally(() => {
      startingServers.delete(workspacePath);
    });
    startingServers.set(workspacePath, promise);
    return await promise;
  }
  orca.events.on("workspace.removed", (payload) => {
    state.workspaceCount += 1;
    if (payload.path) {
      if (connections.has(payload.path)) disconnectViewer(payload.path);
      stopManagedServer(payload.path);
    }
    orca.log(`workspace.removed ${payload.workspaceId}`);
  });
  orca.hooks.on("agent.tool.after", (event) => {
    if (!toolStreamEnabled) return;
    state.toolCount += 1;
    const status = latestStatus(event.terminalId, event.workspaceId);
    const targets = matchingConnections(event.workspaceId, status?.workspaceListId);
    if (!event.terminalId) return;
    const item = { terminalId: event.terminalId };
    for (const conn of targets) {
      pushRing(conn.queuedTools, item, MAX_STATUS_EVENTS);
      scheduleFlush(conn);
    }
  });
  function latestStatus(terminalId, workspaceId) {
    if (!terminalId) return void 0;
    for (let i = state.recentStatus.length - 1; i >= 0; i--) {
      const status = state.recentStatus[i];
      if (status.terminalId !== terminalId) continue;
      if (workspaceId !== void 0 && status.workspaceId !== workspaceId) return void 0;
      return {
        workspaceId: typeof status.workspaceId === "string" ? status.workspaceId : null,
        workspaceListId: typeof status.workspaceListId === "string" ? status.workspaceListId : null
      };
    }
    return void 0;
  }
  orca.hooks.on("agent.prompt.before", (event) => {
    state.promptCount += 1;
    const item = { terminalId: event.terminalId };
    const status = latestStatus(event.terminalId);
    for (const conn of matchingConnections(status?.workspaceId ?? null, status?.workspaceListId)) {
      pushRing(conn.queuedPrompts, item, MAX_STATUS_EVENTS);
      scheduleFlush(conn);
    }
  });
  function connectionSummary() {
    return [...connections.values()].map((c) => ({
      workspacePath: c.workspacePath,
      workspaceListId: c.workspaceListId,
      port: c.endpoint.port,
      instanceId: c.endpoint.instanceId,
      connected: c.connected,
      lastSyncAt: c.lastSyncAt
    }));
  }
  orca.commands.register("orchestration-panel.openTab", async (rawArgs) => {
    const conn = await resolveActiveViewer();
    if (!conn) {
      if (notifyEnabled && orca.host.has("notifications.show")) {
        void orca.host.call("notifications.show", {
          title: "Orchestration Panel",
          body: "No local Orca DAG viewer is running for this workspace. Start it with `npx orca-orchestration-launcher`."
        }).catch(() => {
        });
      }
      return { ok: false, code: "viewer_not_connected" };
    }
    const hash = rawArgs && typeof rawArgs === "object" && typeof rawArgs.hash === "string" ? rawArgs.hash : "";
    const postOpenTab = async (forceRefresh) => {
      const token = await ensureMutationToken(conn, forceRefresh);
      const headers = { "content-type": "application/json" };
      if (token) headers["x-orca-dag-token"] = token;
      const res = await fetch(`http://127.0.0.1:${conn.endpoint.port}/api/open-tab`, {
        method: "POST",
        headers,
        body: JSON.stringify(hash ? { hash } : {}),
        redirect: "error",
        signal: AbortSignal.any([conn.abort.signal, AbortSignal.timeout(1e4)])
      });
      const body = await res.json().catch(() => ({}));
      return { status: res.status, ok: res.ok, body };
    };
    try {
      let result = await postOpenTab(false);
      if (result.status === 403 && result.body.code === "invalid_token") {
        result = await postOpenTab(true);
      }
      return result.ok ? { ok: true, ...result.body } : { ok: false, status: result.status, ...result.body };
    } catch (err) {
      return { ok: false, code: "open_tab_failed", error: String(err?.message ?? err) };
    }
  });
  orca.commands.register("orchestration-panel.status", async () => ({
    plugin: PLUGIN_ID,
    version: PLUGIN_VERSION,
    activatedAt: state.activatedAt,
    uptimeMs: Date.now() - state.activatedAt,
    pluginApi: orca.api,
    grantedCapabilities: [...orca.grantedCapabilities],
    viewers: connectionSummary(),
    managedServers: [...managedServers.values()].map((m) => ({
      workspacePath: m.workspacePath,
      pid: m.child.pid ?? null,
      startedAt: m.startedAt
    })),
    counts: {
      status: state.statusCount,
      tools: state.toolCount,
      prompts: state.promptCount,
      workspaces: state.workspaceCount,
      forwardedBatches: state.forwardedBatches
    }
  }));
  orca.commands.register("orchestration-panel.reconnect", async () => {
    for (const key of [...connections.keys()]) disconnectViewer(key);
    await discoverViewers();
    return { ok: true, viewers: connectionSummary() };
  });
  function runSkillTool(serverEntry, flag) {
    return execFileAsync(process.execPath, [serverEntry, flag], {
      cwd: dirname(serverEntry),
      timeout: 15e3,
      maxBuffer: 4096
    }).then(({ stdout }) => JSON.parse(stdout));
  }
  function installBundledSkill() {
    if (!bundledAssets) return { ok: false, code: "bundle_unavailable" };
    if (skillUninstall) return { ok: false, code: "skill_busy" };
    return skillInstall ??= runSkillTool(bundledAssets.serverEntry, "--install-plugin-skill").catch(() => ({ ok: false, code: "install_failed" })).finally(() => {
      skillInstall = void 0;
    });
  }
  orca.commands.register("orchestration-panel.installSkill", async (_args, { signal }) => {
    if (signal.aborted) return "Agent skill installation cancelled.";
    const result = await installBundledSkill();
    if (!result.ok) {
      if (result.code === "skill_busy") return "Skill removal is in progress. Try installing again after it finishes.";
      return result.code === "bundle_unavailable" ? "The orca-dag skill is missing from this plugin bundle." : "Could not confirm the orca-dag skill installation. Check the plugin bundle and local permissions.";
    }
    if (result.installed === 0 && result.upToDate === 0) {
      return "No writable, supported Agent skill directory could be confirmed.";
    }
    return `orca-dag skill directories installed or updated: ${result.installed}. Already current: ${result.upToDate}.`;
  });
  orca.commands.register("orchestration-panel.uninstallSkill", async (_args, { signal }) => {
    if (signal.aborted) return "Agent skill removal cancelled.";
    if (!bundledAssets) return "The orca-dag skill is missing from this plugin bundle.";
    if (skillInstall) return "Skill installation is in progress. Try uninstalling again after it finishes.";
    skillUninstall ??= runSkillTool(bundledAssets.serverEntry, "--uninstall-plugin-skill").catch(() => ({ ok: false, code: "uninstall_failed" })).finally(() => {
      skillUninstall = void 0;
    });
    const result = await skillUninstall;
    if (!result.ok) {
      return result.code === "bundle_unavailable" ? "The orca-dag skill is missing from this plugin bundle." : "Could not confirm orca-dag skill removal. Check the plugin bundle and local permissions.";
    }
    if (result.failed > 0) {
      return `Removed orca-dag skill files from ${result.removed} directories. Could not finish removal in ${result.failed}; check directory permissions.`;
    }
    if (result.removed === 0) return "No managed orca-dag skill files were removed.";
    return `Removed managed orca-dag skill files from ${result.removed} directories. User preferences were kept.`;
  });
  orca.panels.handle("orchestration-panel.probe", async (rawInput) => {
    const input = rawInput ?? { action: "ping" };
    switch (input.action) {
      case "ping":
        return {
          ok: true,
          plugin: PLUGIN_ID,
          version: PLUGIN_VERSION,
          pluginApi: orca.api,
          activatedAt: state.activatedAt,
          uptimeMs: Date.now() - state.activatedAt,
          grantedCapabilities: [...orca.grantedCapabilities],
          viewers: connectionSummary(),
          counts: {
            status: state.statusCount,
            tools: state.toolCount,
            prompts: state.promptCount,
            workspaces: state.workspaceCount,
            forwardedBatches: state.forwardedBatches
          }
        };
      case "events":
        return {
          activatedAt: state.activatedAt,
          uptimeMs: Date.now() - state.activatedAt,
          viewers: connectionSummary(),
          counts: {
            status: state.statusCount,
            tools: state.toolCount,
            prompts: state.promptCount,
            workspaces: state.workspaceCount,
            forwardedBatches: state.forwardedBatches
          }
        };
      default:
        return { ok: false, error: `unknown action: ${String(input.action)}` };
    }
  });
  async function resolveActiveViewer() {
    if (!orca.host.has("workspace.list")) return null;
    await discoverViewers();
    if (disposed) return null;
    const inventory = await orca.host.call("workspace.list", {}).catch(() => null);
    if (!inventory) return null;
    const workspaceId = focusedWorkspaceId ?? (orca.host.has("workspace.readContext") ? (await orca.host.call("workspace.readContext", {}).catch(() => null))?.workspaceId : null);
    const locals = inventory.workspaces.filter((ws) => (ws.hostId === "local" || ws.hostId === null) && Boolean(ws.path));
    const target = workspaceId ? locals.find((ws) => ws.id === workspaceId) : locals.length === 1 ? locals[0] : void 0;
    if (!target) return null;
    const conn = connections.get(target.path);
    return conn?.connected ? conn : ensureManagedViewer(target.path, target.id);
  }
  async function ensureMutationToken(conn, forceRefresh = false) {
    if (!forceRefresh && conn.mutationToken) return conn.mutationToken;
    try {
      const res = await fetch(`http://127.0.0.1:${conn.endpoint.port}/api/session`, {
        redirect: "error",
        signal: conn.abort.signal
      });
      if (!res.ok) return null;
      const json = await res.json();
      if (typeof json.token === "string" && json.token) {
        conn.mutationToken = json.token;
        return json.token;
      }
      return null;
    } catch {
      return null;
    }
  }
  async function consumeSse(url, signal, onFrame) {
    const res = await fetch(url, {
      headers: { accept: "text/event-stream" },
      redirect: "error",
      signal
    });
    if (!res.ok || !res.body) throw new Error(`SSE HTTP ${res.status}`);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    try {
      while (!signal.aborted) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx = buffer.indexOf("\n\n");
        while (idx >= 0) {
          const block = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 2);
          let eventName = "message";
          const dataLines = [];
          for (const line of block.split("\n")) {
            if (line.startsWith("event:")) eventName = line.slice(6).trim();
            else if (line.startsWith("data:")) dataLines.push(line.slice(5).trimStart());
          }
          if (dataLines.length > 0) {
            try {
              onFrame(eventName, JSON.parse(dataLines.join("\n")));
            } catch {
            }
          }
          idx = buffer.indexOf("\n\n");
        }
      }
    } finally {
      try {
        await reader.cancel();
      } catch {
      }
    }
  }
  function safePostToPanel(panelId, event, payload) {
    try {
      const encoded = JSON.stringify(payload);
      if (Buffer.byteLength(encoded, "utf8") > MAX_PANEL_POST_BYTES) {
        if (event === "orca-dag.output" && payload && typeof payload === "object") {
          const p = payload;
          const out = p.data?.output;
          if (out) {
            const trimmed = {
              ...p,
              data: {
                ...p.data,
                output: {
                  ...out,
                  lines: Array.isArray(out.lines) ? out.lines.slice(-160) : [],
                  ...Array.isArray(out.messages) ? { messages: out.messages.slice(-60) } : {}
                }
              }
            };
            if (Buffer.byteLength(JSON.stringify(trimmed), "utf8") <= MAX_PANEL_POST_BYTES) {
              orca.panels.post(event, trimmed, { panel: panelId });
              return;
            }
          }
        }
        if (event === "orca-dag.activity" && payload && typeof payload === "object") {
          const snap = payload;
          if (Array.isArray(snap.events)) {
            const trimmed = { ...snap, events: snap.events.slice(0, 60) };
            if (Buffer.byteLength(JSON.stringify(trimmed), "utf8") <= MAX_PANEL_POST_BYTES) {
              orca.panels.post(event, trimmed, { panel: panelId });
              return;
            }
          }
        }
        return;
      }
      orca.panels.post(event, payload, { panel: panelId });
    } catch {
    }
  }
  orca.panels.handle("orca-dag.skill.install", (input, { panel, signal }) => {
    if (panel.surface !== "panel" || panel.contributionId !== "orchestration" || input?.confirmed !== true || signal.aborted) {
      return { ok: false, code: "confirmation_required" };
    }
    return installBundledSkill();
  });
  orca.panels.handle("orca-dag.api", async (rawInput, ctx) => {
    const req = rawInput ?? {};
    const method = req.method === "POST" || req.method === "PUT" ? req.method : "GET";
    const url = typeof req.url === "string" ? req.url : "";
    if (!panelApiPath(url)) {
      return { status: 400, ok: false, body: { error: "Invalid API path", code: "invalid_path" } };
    }
    const conn = await resolveActiveViewer();
    if (!conn) {
      return {
        status: 503,
        ok: false,
        body: {
          error: "No local Orca DAG viewer is running for this workspace.",
          code: "viewer_not_connected"
        }
      };
    }
    const execute = async (target, forceTokenRefresh) => {
      const headers = {};
      if (method !== "GET") {
        headers["content-type"] = "application/json";
        const token = await ensureMutationToken(target, forceTokenRefresh);
        if (token) headers["x-orca-dag-token"] = token;
      }
      const res = await fetch(`http://127.0.0.1:${target.endpoint.port}${url}`, {
        method,
        headers,
        body: method !== "GET" && req.body !== void 0 ? JSON.stringify(req.body) : void 0,
        redirect: "error",
        signal: AbortSignal.any([target.abort.signal, ctx.signal, AbortSignal.timeout(3e4)])
      });
      const text = await res.text();
      let body;
      try {
        const parsed = JSON.parse(text);
        body = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : { data: parsed };
      } catch {
        body = { raw: text.slice(0, 4096) };
      }
      return { status: res.status, ok: res.ok, body };
    };
    try {
      const first = await execute(conn, false);
      if (method !== "GET" && first.status === 403 && first.body.code === "invalid_token") {
        return await execute(conn, true);
      }
      return first;
    } catch (err) {
      const causeCode = err?.cause?.code;
      if (!ctx.signal.aborted) {
        if (connections.get(conn.workspacePath) === conn) disconnectViewer(conn.workspacePath);
        const recovered = await resolveActiveViewer();
        if (recovered?.workspacePath === conn.workspacePath && (method === "GET" || causeCode === "ECONNREFUSED")) {
          try {
            return await execute(recovered, false);
          } catch {
          }
        }
      }
      return {
        status: 502,
        ok: false,
        body: { error: String(err?.message ?? err), code: "viewer_unreachable" }
      };
    }
  });
  orca.panels.handle("orca-dag.activity.subscribe", async (rawInput, ctx) => {
    const req = rawInput ?? {};
    const runId = typeof req.runId === "string" ? req.runId.trim() : "";
    if (!runId) return { ok: false };
    const key = ctx.panel.id;
    activityStreams.get(key)?.abort();
    activityStreams.delete(key);
    const conn = await resolveActiveViewer();
    if (!conn) return { ok: false };
    const controller = new AbortController();
    activityStreams.set(key, controller);
    const url = `http://127.0.0.1:${conn.endpoint.port}/api/activity/stream?run=${encodeURIComponent(runId)}`;
    void consumeSse(url, AbortSignal.any([conn.abort.signal, controller.signal]), (event, data) => {
      if (event === "message") safePostToPanel(key, "orca-dag.activity", data);
    }).catch(() => {
    }).finally(() => {
      if (activityStreams.get(key) === controller) activityStreams.delete(key);
    });
    return { ok: true };
  });
  orca.panels.handle("orca-dag.activity.unsubscribe", async (_rawInput, ctx) => {
    const key = ctx.panel.id;
    activityStreams.get(key)?.abort();
    activityStreams.delete(key);
    return { ok: true };
  });
  orca.panels.handle("orca-dag.output.subscribe", async (rawInput, ctx) => {
    const req = rawInput ?? {};
    const subId = typeof req.subId === "string" ? req.subId.trim() : "";
    const runId = typeof req.runId === "string" ? req.runId.trim() : "";
    const dispatchId = typeof req.dispatchId === "string" ? req.dispatchId.trim() : "";
    const source = req.source === "terminal" || req.source === "transcript" ? req.source : "auto";
    if (!subId || !runId || !dispatchId) return { ok: false };
    const key = `${ctx.panel.id}\0${subId}`;
    outputStreams.get(key)?.abort();
    outputStreams.delete(key);
    const conn = await resolveActiveViewer();
    if (!conn) return { ok: false };
    const controller = new AbortController();
    outputStreams.set(key, controller);
    const params = new URLSearchParams({ run: runId });
    if (source !== "auto") params.set("source", source);
    const url = `http://127.0.0.1:${conn.endpoint.port}/api/workers/${encodeURIComponent(dispatchId)}/output/stream?${params.toString()}`;
    const panelId = ctx.panel.id;
    void consumeSse(url, AbortSignal.any([conn.abort.signal, controller.signal]), (event, data) => {
      safePostToPanel(panelId, "orca-dag.output", { subId, event, data });
    }).catch((err) => {
      if (!controller.signal.aborted) {
        safePostToPanel(panelId, "orca-dag.output", {
          subId,
          event: "streamError",
          data: { error: String(err?.message ?? err) }
        });
      }
    }).finally(() => {
      if (outputStreams.get(key) === controller) outputStreams.delete(key);
    });
    return { ok: true };
  });
  orca.panels.handle("orca-dag.output.unsubscribe", async (rawInput, ctx) => {
    const req = rawInput ?? {};
    const subId = typeof req.subId === "string" ? req.subId.trim() : "";
    if (subId) {
      const key = `${ctx.panel.id}\0${subId}`;
      outputStreams.get(key)?.abort();
      outputStreams.delete(key);
    }
    return { ok: true };
  });
  activeShutdown = () => {
    disposed = true;
    clearInterval(discoveryTimer);
    for (const c of activityStreams.values()) c.abort();
    activityStreams.clear();
    for (const c of outputStreams.values()) c.abort();
    outputStreams.clear();
    for (const key of [...connections.keys()]) disconnectViewer(key);
    for (const path of [...managedServers.keys()]) stopManagedServer(path);
  };
  orca.log("orchestration-panel worker activated");
}
function deactivate() {
  activeShutdown?.();
  activeShutdown = null;
}
export {
  deactivate,
  activate as default
};
