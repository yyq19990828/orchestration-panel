import{createRequire as __cr}from "node:module";const require=__cr(import.meta.url);
import {
  COORDINATOR_TITLE,
  LEGACY_PLANNING_DIR,
  PLANNING_DIR,
  SKILL_NAME,
  USER_PREFERENCES_FILE,
  WORKSPACE_ENDPOINT_FILE,
  WORKSPACE_STATE_FILES,
  assertWorkspaceStateDirectory,
  checkPluginEndpointFile,
  closeTerminal,
  isSafeSkillPath,
  legacyWorkspaceStatePath,
  listTerminals,
  parseCoordinatorTitle,
  pluginEndpointPath,
  removePlanningIgnore,
  resolveAgentSkillDirs,
  stageGitStoreDir
} from "./chunk-FZ4H6WUQ.mjs";

// server/src/uninstall.ts
import { existsSync, lstatSync, rmSync, rmdirSync, unlinkSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
var tilde = (p) => p.replace(homedir(), "~");
var act = (verb) => `  ${verb.padEnd(13)}`;
function removeSkills(dryRun, purge, log) {
  let removed = 0;
  for (const { agent, skills, safeRoot } of resolveAgentSkillDirs()) {
    const dir = join(skills, SKILL_NAME);
    if (!isSafeSkillPath(dir, true, safeRoot)) continue;
    let info;
    try {
      info = lstatSync(dir);
    } catch {
      continue;
    }
    const link = info.isSymbolicLink();
    if (!link && !info.isDirectory()) {
      log(`${act("skipped")}${tilde(dir)} \u2014 not a skill directory; left untouched`);
      continue;
    }
    try {
      if (link) {
        if (!dryRun) unlinkSync(dir);
        log(`${act(dryRun ? "would remove" : "removed")}${agent}: ${tilde(dir)} (symlink only \u2014 your checkout is untouched)`);
        removed++;
        continue;
      }
      const prefsPath = join(dir, USER_PREFERENCES_FILE);
      let hasUserPrefs = false;
      try {
        const prefsInfo = lstatSync(prefsPath);
        hasUserPrefs = prefsInfo.isFile() && !prefsInfo.isSymbolicLink();
      } catch {
        hasUserPrefs = false;
      }
      if (hasUserPrefs && !purge) {
        let managedCount = 0;
        const skillFile = join(dir, "SKILL.md");
        if (isSafeSkillPath(skillFile, false, safeRoot)) {
          try {
            const fInfo = lstatSync(skillFile);
            if (fInfo.isFile() && !fInfo.isSymbolicLink()) {
              if (!dryRun) unlinkSync(skillFile);
              managedCount++;
            }
          } catch {
          }
        }
        const refsDir = join(dir, "references");
        if (isSafeSkillPath(refsDir, false, safeRoot)) {
          try {
            const rInfo = lstatSync(refsDir);
            if (rInfo.isDirectory() && !rInfo.isSymbolicLink()) {
              if (!dryRun) rmSync(refsDir, { recursive: true, force: true });
              managedCount++;
            }
          } catch {
          }
        }
        if (managedCount > 0) {
          log(`${act(dryRun ? "would remove" : "removed")}${agent}: ${tilde(dir)} (managed skill files only)`);
          removed++;
        }
        log(`${act("kept")}${tilde(prefsPath)} \u2014 user skill preferences (delete with --purge)`);
      } else {
        if (!dryRun) rmSync(dir, { recursive: true, force: true });
        log(`${act(dryRun ? "would remove" : "removed")}${agent}: ${tilde(dir)}`);
        removed++;
      }
    } catch (err) {
      log(`${act("failed")}${tilde(dir)}: ${String(err?.message ?? err)}`);
    }
  }
  return removed;
}
function isBrokenLink(path) {
  try {
    return lstatSync(path).isSymbolicLink();
  } catch {
    return false;
  }
}
async function closeCoordinatorTerminals(dryRun, log) {
  let terminals;
  try {
    terminals = await listTerminals();
  } catch {
    return 0;
  }
  const ours = terminals.filter((t) => t.title.startsWith(COORDINATOR_TITLE));
  for (const t of ours) {
    const info = parseCoordinatorTitle(t.title);
    const scope = info === null ? "unrecognized title \u2014 closing anyway (prefix matched)" : info.kind === "legacy" ? "pre-workspace-scoped orca-dag" : `workspace ${info.hash} (${t.worktreePath || "unknown path"})`;
    if (!dryRun) await closeTerminal(t.handle);
    log(`${act(dryRun ? "would close" : "closed")}Orca terminal "${t.title}" (${t.handle}) \u2014 ${scope}`);
  }
  return ours.length;
}
async function runUninstall(opts) {
  const lines = [];
  const log = (line) => lines.push(line);
  console.log(opts.dryRun ? "orca-dag uninstall (dry run \u2014 nothing will change)\n" : "orca-dag uninstall\n");
  const skills = removeSkills(opts.dryRun, opts.purge, log);
  const terminals = await closeCoordinatorTerminals(opts.dryRun, log);
  const ignore = removePlanningIgnore(opts.workspace, opts.dryRun);
  if (ignore.reason) {
    log(`${act("skipped")}${ignore.path} \u2014 ${ignore.reason}`);
  } else if (ignore.removed) {
    log(`${act(opts.dryRun ? "would remove" : "removed")}${ignore.path} \u2014 managed planning ignore block(s) only`);
  }
  for (const name of [PLANNING_DIR, LEGACY_PLANNING_DIR]) {
    const planningDir = join(opts.workspace, name);
    if (existsSync(planningDir) || isBrokenLink(planningDir)) {
      log(`${act("kept")}${planningDir} \u2014 planning documents (even with --purge); add ${name}/ to .gitignore yourself to keep them ignored`);
    }
  }
  let workspaceFiles = 0;
  const labels = {
    config: "harness/model/layout choices",
    activity: "viewer activity history",
    requests: "mutation-request audit ledger",
    sessions: "bound harness session identities",
    launches: "historical Dispatch launch identities"
  };
  let safeStateDir = true;
  try {
    assertWorkspaceStateDirectory(opts.workspace);
  } catch (err) {
    safeStateDir = false;
    log(`${act("skipped")}${String(err.message ?? err)}`);
  }
  const persisted = Object.entries(WORKSPACE_STATE_FILES).flatMap(([key, file]) => [
    ...safeStateDir ? [{ path: join(opts.workspace, file), label: labels[key] }] : [],
    { path: legacyWorkspaceStatePath(opts.workspace, file), label: `${labels[key]} (legacy location)` }
  ]);
  for (const item of persisted) {
    if (!existsSync(item.path) && !isBrokenLink(item.path)) continue;
    try {
      const info = lstatSync(item.path);
      if (!info.isFile() && !info.isSymbolicLink()) {
        log(`${act("skipped")}${item.path} \u2014 not a state file; left untouched`);
        continue;
      }
      if (opts.purge) {
        if (!opts.dryRun) rmSync(item.path);
        log(`${act(opts.dryRun ? "would remove" : "removed")}${item.path}`);
        workspaceFiles++;
      } else {
        log(`${act("kept")}${item.path} \u2014 ${item.label} (delete with --purge)`);
      }
    } catch (err) {
      log(`${act("failed")}${item.path}: ${String(err?.message ?? err)}`);
    }
  }
  try {
    const endpoint = pluginEndpointPath(opts.workspace);
    checkPluginEndpointFile(endpoint);
    if (!opts.dryRun) {
      unlinkSync(endpoint);
      try {
        rmdirSync(dirname(endpoint));
      } catch {
      }
    }
    log(`${act(opts.dryRun ? "would remove" : "removed")}${endpoint} \u2014 private plugin discovery endpoint`);
    workspaceFiles++;
  } catch (err) {
    if (err.code !== "ENOENT") {
      log(`${act("skipped")}${String(err.message ?? err)}`);
    }
  }
  if (safeStateDir) {
    const endpointPath = join(opts.workspace, WORKSPACE_ENDPOINT_FILE);
    if (existsSync(endpointPath) || isBrokenLink(endpointPath)) {
      try {
        const info = lstatSync(endpointPath);
        if (!info.isFile() && !info.isSymbolicLink()) {
          log(`${act("skipped")}${endpointPath} \u2014 not a runtime endpoint file; left untouched`);
        } else {
          if (!opts.dryRun) rmSync(endpointPath);
          log(`${act(opts.dryRun ? "would remove" : "removed")}${endpointPath} \u2014 plugin discovery endpoint`);
          workspaceFiles++;
        }
      } catch (err) {
        log(`${act("failed")}${endpointPath}: ${String(err?.message ?? err)}`);
      }
    }
  }
  try {
    const dir = stageGitStoreDir(opts.workspace);
    if (existsSync(dir)) {
      if (opts.purge) {
        if (!opts.dryRun) rmSync(dir, { recursive: true, force: true });
        log(`${act(opts.dryRun ? "would remove" : "removed")}${dir}`);
        workspaceFiles++;
      } else {
        log(`${act("kept")}${dir} \u2014 committed Stage evidence (delete with --purge)`);
      }
    }
  } catch {
  }
  if (lines.length === 0) console.log("  Nothing to remove \u2014 orca-dag left no traces on this machine.");
  else for (const line of lines) console.log(line);
  console.log(
    `
${opts.dryRun ? "Would remove" : "Removed"}: ${skills} skill install(s), ${terminals} Orca terminal(s)` + (ignore.removed ? `, ${ignore.removed} managed ignore block(s)` : "") + (workspaceFiles ? `, ${workspaceFiles} workspace file(s)` : "") + "."
  );
  console.log("\nThe program itself is not removed by this command:");
  console.log("  installed with npm i -g   \u2192  npm rm -g orca-orchestration-launcher");
  console.log("  run through npx           \u2192  npx clear-npx-cache   (or just let the cache expire)");
  console.log("  downloaded binary         \u2192  rm $(which orca-dag)");
}
export {
  closeCoordinatorTerminals,
  runUninstall
};
