import{createRequire as __cr}from "node:module";const require=__cr(import.meta.url);
import {
  FLEET_CAPABILITY_GAP_REASONS,
  KNOWN_HARNESSES,
  MERGE_INPUTS_V3_MARKER,
  MERGE_PREP_MARKER,
  MIN_NATIVE_CODEX_VERSION,
  MIN_NATIVE_OPENCODE_MODEL_VERSION,
  MIN_NATIVE_OPENCODE_VERSION,
  OrcaCliError,
  PLUGIN_NONCE,
  ProviderSessionStore,
  RESPONSE_LOST,
  StageGit,
  ValidationError,
  WORKSPACE_STATE_FILES,
  WORKTREE_ARCHIVE_HOOK_FAILED,
  __commonJS,
  __require,
  __toESM,
  abandonWorkerReceipt,
  assertDiscoveredWorktreeAudience,
  assertEnvironmentPlacementCompatibility,
  assertLanePlacementDisjoint,
  assertLaneReferences,
  assertNativePresetConstraints,
  assertNativePresetSupport,
  assertOpenCodeUiPlacement,
  bindRun,
  buildMergeInputs,
  canUseNativeCodexFreshWorktree,
  checkInbox,
  checkPluginEndpointFile,
  checkReadiness,
  closeReleasedOpenCodeTui,
  closeTerminal,
  closeTerminalStrict,
  compareVersions,
  createLocalCodexWorktree,
  createRun,
  createSecurityPolicy,
  createTempCoordinatorTerminal,
  decideWorkerPermissionPrompt,
  deriveWorktreeName,
  describePlanningSetup,
  describeRuntimeCapabilities,
  describeSkillInstall,
  discoverProviderSession,
  ensureCoordinatorTerminal,
  explainReadiness,
  extractPermissionPrompt,
  findOpenCodeTuiLaunch,
  focusTerminal,
  followableNextAction,
  formatCommand,
  getOrcaRuntime,
  initOrcaRuntime,
  initializeWorkspaceState,
  inspectOpenCodeTui,
  installSkill,
  isArchiveHookFailure,
  isChatSessionHandle,
  isMergeInputsQuestion,
  isNativeFreshPreset,
  isStopEventReason,
  isUnverifiedHarness,
  listAgentAccounts,
  listEnvironments,
  listGates,
  listModels,
  listProjects,
  listRemovedWork,
  listRepos,
  listRunMessagePage,
  listRunMessages,
  listTasks,
  listTerminals,
  listWorkers,
  listWorkspaceRuns,
  listWorktrees,
  loadConfig,
  loadEmbeddedAssets,
  newRequestId,
  normalizeLiveness,
  normalizeTerminalReceipt,
  openOrcaViewerTab,
  openWorkspaceChangedFiles,
  openWorkspaceFile,
  openWorkspaceFileDiff,
  ordinaryGateApproved,
  parseCoordinatorTitle,
  parseOpenCodeModel,
  parsePeerCapabilities,
  parseWorkerDonePayload,
  parseWorkerStartReceipt,
  pluginEndpointPath,
  pluginRequestToken,
  prepareCodexTerminal,
  prepareWorkspaceStateFile,
  presentWorkerLiveness,
  previewRunAudiences,
  readLocalRuntimeCapabilities,
  readPluginEndpointFile,
  readWorkerOutput,
  recoverOpenCodeTuiBindings,
  releaseWorker,
  removeWorktree,
  replyToMessage,
  requireToken,
  resolveGate,
  retainOpenCodeTui,
  retainWorker,
  runNextAction,
  runOrca,
  saveConfig,
  sendCoordinatorGroupMessage,
  sendCoordinatorMessage,
  setupPlanningWorkspace,
  showEnvironment,
  showRequest,
  showRun,
  showWorkerDetail,
  showWorktree,
  signPluginReply,
  startLegacyWorker,
  startOpenCodeInteractiveWorker,
  startOpenCodeTuiWorker,
  startSupervisedWorker,
  stopWorkerReceipt,
  taskUpdate,
  tasksToDag,
  uninstallBundledSkill,
  validateBooleanTaskMap,
  validateConcurrency,
  validateEffort,
  validateEnvironmentSelector,
  validateEnvironmentTaskMap,
  validateGroupAudience,
  validateGroupMessagePriority,
  validateGroupMessageType,
  validateHarness,
  validateId,
  validateLaneTaskMap,
  validateMergeInputProtocol,
  validateModel,
  validateOpenCodeUi,
  validateOpenCodeUiTaskMap,
  validatePlacementTaskMap,
  validateSelector,
  validateStagePlan,
  validateTaskValueMap,
  validateText,
  validateWorktreeLaneMap,
  verifyOpenCodeSession,
  verifyOpenCodeTuiTerminal,
  workerStopOperation,
  workerSupervision,
  workspaceStateReadPath
} from "./chunk-FZ4H6WUQ.mjs";

// node_modules/depd/index.js
var require_depd = __commonJS({
  "node_modules/depd/index.js"(exports, module) {
    "use strict";
    var relative = __require("path").relative;
    module.exports = depd;
    var basePath = process.cwd();
    function containsNamespace(str, namespace) {
      var vals = str.split(/[ ,]+/);
      var ns = String(namespace).toLowerCase();
      for (var i = 0; i < vals.length; i++) {
        var val = vals[i];
        if (val && (val === "*" || val.toLowerCase() === ns)) {
          return true;
        }
      }
      return false;
    }
    function convertDataDescriptorToAccessor(obj, prop, message) {
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      var value = descriptor.value;
      descriptor.get = function getter() {
        return value;
      };
      if (descriptor.writable) {
        descriptor.set = function setter(val) {
          return value = val;
        };
      }
      delete descriptor.value;
      delete descriptor.writable;
      Object.defineProperty(obj, prop, descriptor);
      return descriptor;
    }
    function createArgumentsString(arity) {
      var str = "";
      for (var i = 0; i < arity; i++) {
        str += ", arg" + i;
      }
      return str.substr(2);
    }
    function createStackString(stack) {
      var str = this.name + ": " + this.namespace;
      if (this.message) {
        str += " deprecated " + this.message;
      }
      for (var i = 0; i < stack.length; i++) {
        str += "\n    at " + stack[i].toString();
      }
      return str;
    }
    function depd(namespace) {
      if (!namespace) {
        throw new TypeError("argument namespace is required");
      }
      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      var file = site[0];
      function deprecate(message) {
        log.call(deprecate, message);
      }
      deprecate._file = file;
      deprecate._ignored = isignored(namespace);
      deprecate._namespace = namespace;
      deprecate._traced = istraced(namespace);
      deprecate._warned = /* @__PURE__ */ Object.create(null);
      deprecate.function = wrapfunction;
      deprecate.property = wrapproperty;
      return deprecate;
    }
    function eehaslisteners(emitter, type) {
      var count = typeof emitter.listenerCount !== "function" ? emitter.listeners(type).length : emitter.listenerCount(type);
      return count > 0;
    }
    function isignored(namespace) {
      if (process.noDeprecation) {
        return true;
      }
      var str = process.env.NO_DEPRECATION || "";
      return containsNamespace(str, namespace);
    }
    function istraced(namespace) {
      if (process.traceDeprecation) {
        return true;
      }
      var str = process.env.TRACE_DEPRECATION || "";
      return containsNamespace(str, namespace);
    }
    function log(message, site) {
      var haslisteners = eehaslisteners(process, "deprecation");
      if (!haslisteners && this._ignored) {
        return;
      }
      var caller;
      var callFile;
      var callSite;
      var depSite;
      var i = 0;
      var seen = false;
      var stack = getStack();
      var file = this._file;
      if (site) {
        depSite = site;
        callSite = callSiteLocation(stack[1]);
        callSite.name = depSite.name;
        file = callSite[0];
      } else {
        i = 2;
        depSite = callSiteLocation(stack[i]);
        callSite = depSite;
      }
      for (; i < stack.length; i++) {
        caller = callSiteLocation(stack[i]);
        callFile = caller[0];
        if (callFile === file) {
          seen = true;
        } else if (callFile === this._file) {
          file = this._file;
        } else if (seen) {
          break;
        }
      }
      var key = caller ? depSite.join(":") + "__" + caller.join(":") : void 0;
      if (key !== void 0 && key in this._warned) {
        return;
      }
      this._warned[key] = true;
      var msg = message;
      if (!msg) {
        msg = callSite === depSite || !callSite.name ? defaultMessage(depSite) : defaultMessage(callSite);
      }
      if (haslisteners) {
        var err = DeprecationError(this._namespace, msg, stack.slice(i));
        process.emit("deprecation", err);
        return;
      }
      var format = process.stderr.isTTY ? formatColor : formatPlain;
      var output = format.call(this, msg, caller, stack.slice(i));
      process.stderr.write(output + "\n", "utf8");
    }
    function callSiteLocation(callSite) {
      var file = callSite.getFileName() || "<anonymous>";
      var line = callSite.getLineNumber();
      var colm = callSite.getColumnNumber();
      if (callSite.isEval()) {
        file = callSite.getEvalOrigin() + ", " + file;
      }
      var site = [file, line, colm];
      site.callSite = callSite;
      site.name = callSite.getFunctionName();
      return site;
    }
    function defaultMessage(site) {
      var callSite = site.callSite;
      var funcName = site.name;
      if (!funcName) {
        funcName = "<anonymous@" + formatLocation(site) + ">";
      }
      var context = callSite.getThis();
      var typeName = context && callSite.getTypeName();
      if (typeName === "Object") {
        typeName = void 0;
      }
      if (typeName === "Function") {
        typeName = context.name || typeName;
      }
      return typeName && callSite.getMethodName() ? typeName + "." + funcName : funcName;
    }
    function formatPlain(msg, caller, stack) {
      var timestamp = (/* @__PURE__ */ new Date()).toUTCString();
      var formatted = timestamp + " " + this._namespace + " deprecated " + msg;
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += "\n    at " + stack[i].toString();
        }
        return formatted;
      }
      if (caller) {
        formatted += " at " + formatLocation(caller);
      }
      return formatted;
    }
    function formatColor(msg, caller, stack) {
      var formatted = "\x1B[36;1m" + this._namespace + "\x1B[22;39m \x1B[33;1mdeprecated\x1B[22;39m \x1B[0m" + msg + "\x1B[39m";
      if (this._traced) {
        for (var i = 0; i < stack.length; i++) {
          formatted += "\n    \x1B[36mat " + stack[i].toString() + "\x1B[39m";
        }
        return formatted;
      }
      if (caller) {
        formatted += " \x1B[36m" + formatLocation(caller) + "\x1B[39m";
      }
      return formatted;
    }
    function formatLocation(callSite) {
      return relative(basePath, callSite[0]) + ":" + callSite[1] + ":" + callSite[2];
    }
    function getStack() {
      var limit = Error.stackTraceLimit;
      var obj = {};
      var prep = Error.prepareStackTrace;
      Error.prepareStackTrace = prepareObjectStackTrace;
      Error.stackTraceLimit = Math.max(10, limit);
      Error.captureStackTrace(obj);
      var stack = obj.stack.slice(1);
      Error.prepareStackTrace = prep;
      Error.stackTraceLimit = limit;
      return stack;
    }
    function prepareObjectStackTrace(obj, stack) {
      return stack;
    }
    function wrapfunction(fn, message) {
      if (typeof fn !== "function") {
        throw new TypeError("argument fn must be a function");
      }
      var args = createArgumentsString(fn.length);
      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      site.name = fn.name;
      var deprecatedfn = new Function(
        "fn",
        "log",
        "deprecate",
        "message",
        "site",
        '"use strict"\nreturn function (' + args + ") {log.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n}"
      )(fn, log, this, message, site);
      return deprecatedfn;
    }
    function wrapproperty(obj, prop, message) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new TypeError("argument obj must be object");
      }
      var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
      if (!descriptor) {
        throw new TypeError("must call property on owner object");
      }
      if (!descriptor.configurable) {
        throw new TypeError("property must be configurable");
      }
      var deprecate = this;
      var stack = getStack();
      var site = callSiteLocation(stack[1]);
      site.name = prop;
      if ("value" in descriptor) {
        descriptor = convertDataDescriptorToAccessor(obj, prop, message);
      }
      var get = descriptor.get;
      var set = descriptor.set;
      if (typeof get === "function") {
        descriptor.get = function getter() {
          log.call(deprecate, message, site);
          return get.apply(this, arguments);
        };
      }
      if (typeof set === "function") {
        descriptor.set = function setter() {
          log.call(deprecate, message, site);
          return set.apply(this, arguments);
        };
      }
      Object.defineProperty(obj, prop, descriptor);
    }
    function DeprecationError(namespace, message, stack) {
      var error = new Error();
      var stackString;
      Object.defineProperty(error, "constructor", {
        value: DeprecationError
      });
      Object.defineProperty(error, "message", {
        configurable: true,
        enumerable: false,
        value: message,
        writable: true
      });
      Object.defineProperty(error, "name", {
        enumerable: false,
        configurable: true,
        value: "DeprecationError",
        writable: true
      });
      Object.defineProperty(error, "namespace", {
        configurable: true,
        enumerable: false,
        value: namespace,
        writable: true
      });
      Object.defineProperty(error, "stack", {
        configurable: true,
        enumerable: false,
        get: function() {
          if (stackString !== void 0) {
            return stackString;
          }
          return stackString = createStackString.call(this, stack);
        },
        set: function setter(val) {
          stackString = val;
        }
      });
      return error;
    }
  }
});

// node_modules/bytes/index.js
var require_bytes = __commonJS({
  "node_modules/bytes/index.js"(exports, module) {
    "use strict";
    module.exports = bytes;
    module.exports.format = format;
    module.exports.parse = parse;
    var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;
    var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;
    var map = {
      b: 1,
      kb: 1 << 10,
      mb: 1 << 20,
      gb: 1 << 30,
      tb: Math.pow(1024, 4),
      pb: Math.pow(1024, 5)
    };
    var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;
    function bytes(value, options) {
      if (typeof value === "string") {
        return parse(value);
      }
      if (typeof value === "number") {
        return format(value, options);
      }
      return null;
    }
    function format(value, options) {
      if (!Number.isFinite(value)) {
        return null;
      }
      var mag = Math.abs(value);
      var thousandsSeparator = options && options.thousandsSeparator || "";
      var unitSeparator = options && options.unitSeparator || "";
      var decimalPlaces = options && options.decimalPlaces !== void 0 ? options.decimalPlaces : 2;
      var fixedDecimals = Boolean(options && options.fixedDecimals);
      var unit = options && options.unit || "";
      if (!unit || !map[unit.toLowerCase()]) {
        if (mag >= map.pb) {
          unit = "PB";
        } else if (mag >= map.tb) {
          unit = "TB";
        } else if (mag >= map.gb) {
          unit = "GB";
        } else if (mag >= map.mb) {
          unit = "MB";
        } else if (mag >= map.kb) {
          unit = "KB";
        } else {
          unit = "B";
        }
      }
      var val = value / map[unit.toLowerCase()];
      var str = val.toFixed(decimalPlaces);
      if (!fixedDecimals) {
        str = str.replace(formatDecimalsRegExp, "$1");
      }
      if (thousandsSeparator) {
        str = str.split(".").map(function(s, i) {
          return i === 0 ? s.replace(formatThousandsRegExp, thousandsSeparator) : s;
        }).join(".");
      }
      return str + unitSeparator + unit;
    }
    function parse(val) {
      if (typeof val === "number" && !isNaN(val)) {
        return val;
      }
      if (typeof val !== "string") {
        return null;
      }
      var results = parseRegExp.exec(val);
      var floatValue;
      var unit = "b";
      if (!results) {
        floatValue = parseInt(val, 10);
        unit = "b";
      } else {
        floatValue = parseFloat(results[1]);
        unit = results[4].toLowerCase();
      }
      if (isNaN(floatValue)) {
        return null;
      }
      return Math.floor(map[unit] * floatValue);
    }
  }
});

// node_modules/content-type/index.js
var require_content_type = __commonJS({
  "node_modules/content-type/index.js"(exports) {
    "use strict";
    var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
    var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/;
    var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;
    var QUOTE_REGEXP = /([\\"])/g;
    var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    exports.format = format;
    exports.parse = parse;
    function format(obj) {
      if (!obj || typeof obj !== "object") {
        throw new TypeError("argument obj is required");
      }
      var parameters = obj.parameters;
      var type = obj.type;
      if (!type || !TYPE_REGEXP.test(type)) {
        throw new TypeError("invalid type");
      }
      var string = type;
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          if (!TOKEN_REGEXP.test(param)) {
            throw new TypeError("invalid parameter name");
          }
          string += "; " + param + "=" + qstring(parameters[param]);
        }
      }
      return string;
    }
    function parse(string) {
      if (!string) {
        throw new TypeError("argument string is required");
      }
      var header = typeof string === "object" ? getcontenttype(string) : string;
      if (typeof header !== "string") {
        throw new TypeError("argument string is required to be a string");
      }
      var index = header.indexOf(";");
      var type = index !== -1 ? header.slice(0, index).trim() : header.trim();
      if (!TYPE_REGEXP.test(type)) {
        throw new TypeError("invalid media type");
      }
      var obj = new ContentType(type.toLowerCase());
      if (index !== -1) {
        var key;
        var match;
        var value;
        PARAM_REGEXP.lastIndex = index;
        while (match = PARAM_REGEXP.exec(header)) {
          if (match.index !== index) {
            throw new TypeError("invalid parameter format");
          }
          index += match[0].length;
          key = match[1].toLowerCase();
          value = match[2];
          if (value.charCodeAt(0) === 34) {
            value = value.slice(1, -1);
            if (value.indexOf("\\") !== -1) {
              value = value.replace(QESC_REGEXP, "$1");
            }
          }
          obj.parameters[key] = value;
        }
        if (index !== header.length) {
          throw new TypeError("invalid parameter format");
        }
      }
      return obj;
    }
    function getcontenttype(obj) {
      var header;
      if (typeof obj.getHeader === "function") {
        header = obj.getHeader("content-type");
      } else if (typeof obj.headers === "object") {
        header = obj.headers && obj.headers["content-type"];
      }
      if (typeof header !== "string") {
        throw new TypeError("content-type header is missing from object");
      }
      return header;
    }
    function qstring(val) {
      var str = String(val);
      if (TOKEN_REGEXP.test(str)) {
        return str;
      }
      if (str.length > 0 && !TEXT_REGEXP.test(str)) {
        throw new TypeError("invalid parameter value");
      }
      return '"' + str.replace(QUOTE_REGEXP, "\\$1") + '"';
    }
    function ContentType(type) {
      this.parameters = /* @__PURE__ */ Object.create(null);
      this.type = type;
    }
  }
});

// node_modules/setprototypeof/index.js
var require_setprototypeof = __commonJS({
  "node_modules/setprototypeof/index.js"(exports, module) {
    "use strict";
    module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
    function setProtoOf(obj, proto) {
      obj.__proto__ = proto;
      return obj;
    }
    function mixinProperties(obj, proto) {
      for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
          obj[prop] = proto[prop];
        }
      }
      return obj;
    }
  }
});

// node_modules/statuses/codes.json
var require_codes = __commonJS({
  "node_modules/statuses/codes.json"(exports, module) {
    module.exports = {
      "100": "Continue",
      "101": "Switching Protocols",
      "102": "Processing",
      "103": "Early Hints",
      "200": "OK",
      "201": "Created",
      "202": "Accepted",
      "203": "Non-Authoritative Information",
      "204": "No Content",
      "205": "Reset Content",
      "206": "Partial Content",
      "207": "Multi-Status",
      "208": "Already Reported",
      "226": "IM Used",
      "300": "Multiple Choices",
      "301": "Moved Permanently",
      "302": "Found",
      "303": "See Other",
      "304": "Not Modified",
      "305": "Use Proxy",
      "307": "Temporary Redirect",
      "308": "Permanent Redirect",
      "400": "Bad Request",
      "401": "Unauthorized",
      "402": "Payment Required",
      "403": "Forbidden",
      "404": "Not Found",
      "405": "Method Not Allowed",
      "406": "Not Acceptable",
      "407": "Proxy Authentication Required",
      "408": "Request Timeout",
      "409": "Conflict",
      "410": "Gone",
      "411": "Length Required",
      "412": "Precondition Failed",
      "413": "Payload Too Large",
      "414": "URI Too Long",
      "415": "Unsupported Media Type",
      "416": "Range Not Satisfiable",
      "417": "Expectation Failed",
      "418": "I'm a Teapot",
      "421": "Misdirected Request",
      "422": "Unprocessable Entity",
      "423": "Locked",
      "424": "Failed Dependency",
      "425": "Too Early",
      "426": "Upgrade Required",
      "428": "Precondition Required",
      "429": "Too Many Requests",
      "431": "Request Header Fields Too Large",
      "451": "Unavailable For Legal Reasons",
      "500": "Internal Server Error",
      "501": "Not Implemented",
      "502": "Bad Gateway",
      "503": "Service Unavailable",
      "504": "Gateway Timeout",
      "505": "HTTP Version Not Supported",
      "506": "Variant Also Negotiates",
      "507": "Insufficient Storage",
      "508": "Loop Detected",
      "509": "Bandwidth Limit Exceeded",
      "510": "Not Extended",
      "511": "Network Authentication Required"
    };
  }
});

// node_modules/statuses/index.js
var require_statuses = __commonJS({
  "node_modules/statuses/index.js"(exports, module) {
    "use strict";
    var codes = require_codes();
    module.exports = status;
    status.message = codes;
    status.code = createMessageToStatusCodeMap(codes);
    status.codes = createStatusCodeList(codes);
    status.redirect = {
      300: true,
      301: true,
      302: true,
      303: true,
      305: true,
      307: true,
      308: true
    };
    status.empty = {
      204: true,
      205: true,
      304: true
    };
    status.retry = {
      502: true,
      503: true,
      504: true
    };
    function createMessageToStatusCodeMap(codes2) {
      var map = {};
      Object.keys(codes2).forEach(function forEachCode(code) {
        var message = codes2[code];
        var status2 = Number(code);
        map[message.toLowerCase()] = status2;
      });
      return map;
    }
    function createStatusCodeList(codes2) {
      return Object.keys(codes2).map(function mapCode(code) {
        return Number(code);
      });
    }
    function getStatusCode(message) {
      var msg = message.toLowerCase();
      if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
        throw new Error('invalid status message: "' + message + '"');
      }
      return status.code[msg];
    }
    function getStatusMessage(code) {
      if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
        throw new Error("invalid status code: " + code);
      }
      return status.message[code];
    }
    function status(code) {
      if (typeof code === "number") {
        return getStatusMessage(code);
      }
      if (typeof code !== "string") {
        throw new TypeError("code must be a number or string");
      }
      var n = parseInt(code, 10);
      if (!isNaN(n)) {
        return getStatusMessage(n);
      }
      return getStatusCode(code);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module) {
    "use strict";
    if (typeof Object.create === "function") {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module) {
    "use strict";
    try {
      util = __require("util");
      if (typeof util.inherits !== "function") throw "";
      module.exports = util.inherits;
    } catch (e) {
      module.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/toidentifier/index.js
var require_toidentifier = __commonJS({
  "node_modules/toidentifier/index.js"(exports, module) {
    "use strict";
    module.exports = toIdentifier;
    function toIdentifier(str) {
      return str.split(" ").map(function(token) {
        return token.slice(0, 1).toUpperCase() + token.slice(1);
      }).join("").replace(/[^ _0-9a-z]/gi, "");
    }
  }
});

// node_modules/http-errors/index.js
var require_http_errors = __commonJS({
  "node_modules/http-errors/index.js"(exports, module) {
    "use strict";
    var deprecate = require_depd()("http-errors");
    var setPrototypeOf = require_setprototypeof();
    var statuses = require_statuses();
    var inherits = require_inherits();
    var toIdentifier = require_toidentifier();
    module.exports = createError;
    module.exports.HttpError = createHttpErrorConstructor();
    module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError);
    populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError);
    function codeClass(status) {
      return Number(String(status).charAt(0) + "00");
    }
    function createError() {
      var err;
      var msg;
      var status = 500;
      var props = {};
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        var type = typeof arg;
        if (type === "object" && arg instanceof Error) {
          err = arg;
          status = err.status || err.statusCode || status;
        } else if (type === "number" && i === 0) {
          status = arg;
        } else if (type === "string") {
          msg = arg;
        } else if (type === "object") {
          props = arg;
        } else {
          throw new TypeError("argument #" + (i + 1) + " unsupported type " + type);
        }
      }
      if (typeof status === "number" && (status < 400 || status >= 600)) {
        deprecate("non-error status code; use only 4xx or 5xx status codes");
      }
      if (typeof status !== "number" || !statuses.message[status] && (status < 400 || status >= 600)) {
        status = 500;
      }
      var HttpError = createError[status] || createError[codeClass(status)];
      if (!err) {
        err = HttpError ? new HttpError(msg) : new Error(msg || statuses.message[status]);
        Error.captureStackTrace(err, createError);
      }
      if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
        err.expose = status < 500;
        err.status = err.statusCode = status;
      }
      for (var key in props) {
        if (key !== "status" && key !== "statusCode") {
          err[key] = props[key];
        }
      }
      return err;
    }
    function createHttpErrorConstructor() {
      function HttpError() {
        throw new TypeError("cannot construct abstract class");
      }
      inherits(HttpError, Error);
      return HttpError;
    }
    function createClientErrorConstructor(HttpError, name, code) {
      var className = toClassName(name);
      function ClientError(message) {
        var msg = message != null ? message : statuses.message[code];
        var err = new Error(msg);
        Error.captureStackTrace(err, ClientError);
        setPrototypeOf(err, ClientError.prototype);
        Object.defineProperty(err, "message", {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });
        Object.defineProperty(err, "name", {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });
        return err;
      }
      inherits(ClientError, HttpError);
      nameFunc(ClientError, className);
      ClientError.prototype.status = code;
      ClientError.prototype.statusCode = code;
      ClientError.prototype.expose = true;
      return ClientError;
    }
    function createIsHttpErrorFunction(HttpError) {
      return function isHttpError(val) {
        if (!val || typeof val !== "object") {
          return false;
        }
        if (val instanceof HttpError) {
          return true;
        }
        return val instanceof Error && typeof val.expose === "boolean" && typeof val.statusCode === "number" && val.status === val.statusCode;
      };
    }
    function createServerErrorConstructor(HttpError, name, code) {
      var className = toClassName(name);
      function ServerError(message) {
        var msg = message != null ? message : statuses.message[code];
        var err = new Error(msg);
        Error.captureStackTrace(err, ServerError);
        setPrototypeOf(err, ServerError.prototype);
        Object.defineProperty(err, "message", {
          enumerable: true,
          configurable: true,
          value: msg,
          writable: true
        });
        Object.defineProperty(err, "name", {
          enumerable: false,
          configurable: true,
          value: className,
          writable: true
        });
        return err;
      }
      inherits(ServerError, HttpError);
      nameFunc(ServerError, className);
      ServerError.prototype.status = code;
      ServerError.prototype.statusCode = code;
      ServerError.prototype.expose = false;
      return ServerError;
    }
    function nameFunc(func, name) {
      var desc = Object.getOwnPropertyDescriptor(func, "name");
      if (desc && desc.configurable) {
        desc.value = name;
        Object.defineProperty(func, "name", desc);
      }
    }
    function populateConstructorExports(exports2, codes, HttpError) {
      codes.forEach(function forEachCode(code) {
        var CodeError;
        var name = toIdentifier(statuses.message[code]);
        switch (codeClass(code)) {
          case 400:
            CodeError = createClientErrorConstructor(HttpError, name, code);
            break;
          case 500:
            CodeError = createServerErrorConstructor(HttpError, name, code);
            break;
        }
        if (CodeError) {
          exports2[code] = CodeError;
          exports2[name] = CodeError;
        }
      });
    }
    function toClassName(name) {
      return name.slice(-5) === "Error" ? name : name + "Error";
    }
  }
});

// node_modules/body-parser/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/body-parser/node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/body-parser/node_modules/debug/src/debug.js
var require_debug = __commonJS({
  "node_modules/body-parser/node_modules/debug/src/debug.js"(exports, module) {
    "use strict";
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/body-parser/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/body-parser/node_modules/debug/src/browser.js"(exports, module) {
    "use strict";
    exports = module.exports = require_debug();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/body-parser/node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/body-parser/node_modules/debug/src/node.js"(exports, module) {
    "use strict";
    var tty = __require("tty");
    var util = __require("util");
    exports = module.exports = require_debug();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = __require("fs");
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = __require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load());
  }
});

// node_modules/body-parser/node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/body-parser/node_modules/debug/src/index.js"(exports, module) {
    "use strict";
    if (typeof process !== "undefined" && process.type === "renderer") {
      module.exports = require_browser();
    } else {
      module.exports = require_node();
    }
  }
});

// node_modules/destroy/index.js
var require_destroy = __commonJS({
  "node_modules/destroy/index.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events").EventEmitter;
    var ReadStream = __require("fs").ReadStream;
    var Stream = __require("stream");
    var Zlib = __require("zlib");
    module.exports = destroy;
    function destroy(stream, suppress) {
      if (isFsReadStream(stream)) {
        destroyReadStream(stream);
      } else if (isZlibStream(stream)) {
        destroyZlibStream(stream);
      } else if (hasDestroy(stream)) {
        stream.destroy();
      }
      if (isEventEmitter(stream) && suppress) {
        stream.removeAllListeners("error");
        stream.addListener("error", noop);
      }
      return stream;
    }
    function destroyReadStream(stream) {
      stream.destroy();
      if (typeof stream.close === "function") {
        stream.on("open", onOpenClose);
      }
    }
    function closeZlibStream(stream) {
      if (stream._hadError === true) {
        var prop = stream._binding === null ? "_binding" : "_handle";
        stream[prop] = {
          close: function() {
            this[prop] = null;
          }
        };
      }
      stream.close();
    }
    function destroyZlibStream(stream) {
      if (typeof stream.destroy === "function") {
        if (stream._binding) {
          stream.destroy();
          if (stream._processing) {
            stream._needDrain = true;
            stream.once("drain", onDrainClearBinding);
          } else {
            stream._binding.clear();
          }
        } else if (stream._destroy && stream._destroy !== Stream.Transform.prototype._destroy) {
          stream.destroy();
        } else if (stream._destroy && typeof stream.close === "function") {
          stream.destroyed = true;
          stream.close();
        } else {
          stream.destroy();
        }
      } else if (typeof stream.close === "function") {
        closeZlibStream(stream);
      }
    }
    function hasDestroy(stream) {
      return stream instanceof Stream && typeof stream.destroy === "function";
    }
    function isEventEmitter(val) {
      return val instanceof EventEmitter;
    }
    function isFsReadStream(stream) {
      return stream instanceof ReadStream;
    }
    function isZlibStream(stream) {
      return stream instanceof Zlib.Gzip || stream instanceof Zlib.Gunzip || stream instanceof Zlib.Deflate || stream instanceof Zlib.DeflateRaw || stream instanceof Zlib.Inflate || stream instanceof Zlib.InflateRaw || stream instanceof Zlib.Unzip;
    }
    function noop() {
    }
    function onDrainClearBinding() {
      this._binding.clear();
    }
    function onOpenClose() {
      if (typeof this.fd === "number") {
        this.close();
      }
    }
  }
});

// orca-plugin-shim:iconv-lite
var require_iconv_lite = __commonJS({
  "orca-plugin-shim:iconv-lite"(exports) {
    "use strict";
    var { StringDecoder } = __require("node:string_decoder");
    function normalizeEncoding(encoding) {
      const key = String(encoding || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      if (key === "utf8") return "utf8";
      if (key === "ascii") return "ascii";
      if (key === "latin1" || key === "iso88591" || key === "binary") return "latin1";
      if (key === "utf16le" || key === "ucs2") return "utf16le";
      return null;
    }
    exports.encodingExists = function encodingExists(encoding) {
      return normalizeEncoding(encoding) !== null;
    };
    exports.getDecoder = function getDecoder(encoding, options) {
      const normalized = normalizeEncoding(encoding);
      if (!normalized) {
        throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + encoding + "')");
      }
      const decoder = new StringDecoder(normalized);
      let stripBom = normalized === "utf8" && !(options && options.stripBOM === false);
      return {
        write(chunk) {
          let out = decoder.write(chunk);
          if (stripBom && out.length > 0) {
            stripBom = false;
            if (out.charCodeAt(0) === 65279) out = out.slice(1);
          }
          return out;
        },
        end() {
          let out = decoder.end();
          if (stripBom && out.length > 0) {
            stripBom = false;
            if (out.charCodeAt(0) === 65279) out = out.slice(1);
          }
          return out;
        }
      };
    };
    exports.decode = function decode(buf, encoding, options) {
      const decoder = exports.getDecoder(encoding, options);
      const input = Buffer.isBuffer(buf) ? buf : Buffer.from(buf);
      return decoder.write(input) + decoder.end();
    };
  }
});

// node_modules/unpipe/index.js
var require_unpipe = __commonJS({
  "node_modules/unpipe/index.js"(exports, module) {
    "use strict";
    module.exports = unpipe;
    function hasPipeDataListeners(stream) {
      var listeners = stream.listeners("data");
      for (var i = 0; i < listeners.length; i++) {
        if (listeners[i].name === "ondata") {
          return true;
        }
      }
      return false;
    }
    function unpipe(stream) {
      if (!stream) {
        throw new TypeError("argument stream is required");
      }
      if (typeof stream.unpipe === "function") {
        stream.unpipe();
        return;
      }
      if (!hasPipeDataListeners(stream)) {
        return;
      }
      var listener;
      var listeners = stream.listeners("close");
      for (var i = 0; i < listeners.length; i++) {
        listener = listeners[i];
        if (listener.name !== "cleanup" && listener.name !== "onclose") {
          continue;
        }
        listener.call(stream);
      }
    }
  }
});

// node_modules/body-parser/node_modules/raw-body/index.js
var require_raw_body = __commonJS({
  "node_modules/body-parser/node_modules/raw-body/index.js"(exports, module) {
    "use strict";
    var asyncHooks = tryRequireAsyncHooks();
    var bytes = require_bytes();
    var createError = require_http_errors();
    var iconv = require_iconv_lite();
    var unpipe = require_unpipe();
    module.exports = getRawBody;
    var ICONV_ENCODING_MESSAGE_REGEXP = /^Encoding not recognized: /;
    function getDecoder(encoding) {
      if (!encoding) return null;
      try {
        return iconv.getDecoder(encoding);
      } catch (e) {
        if (!ICONV_ENCODING_MESSAGE_REGEXP.test(e.message)) throw e;
        throw createError(415, "specified encoding unsupported", {
          encoding,
          type: "encoding.unsupported"
        });
      }
    }
    function getRawBody(stream, options, callback) {
      var done = callback;
      var opts = options || {};
      if (stream === void 0) {
        throw new TypeError("argument stream is required");
      } else if (typeof stream !== "object" || stream === null || typeof stream.on !== "function") {
        throw new TypeError("argument stream must be a stream");
      }
      if (options === true || typeof options === "string") {
        opts = {
          encoding: options
        };
      }
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      if (done !== void 0 && typeof done !== "function") {
        throw new TypeError("argument callback must be a function");
      }
      if (!done && !global.Promise) {
        throw new TypeError("argument callback is required");
      }
      var encoding = opts.encoding !== true ? opts.encoding : "utf-8";
      var limit = bytes.parse(opts.limit);
      var length = opts.length != null && !isNaN(opts.length) ? parseInt(opts.length, 10) : null;
      if (done) {
        return readStream(stream, encoding, length, limit, wrap(done));
      }
      return new Promise(function executor(resolve, reject) {
        readStream(stream, encoding, length, limit, function onRead(err, buf) {
          if (err) return reject(err);
          resolve(buf);
        });
      });
    }
    function halt(stream) {
      unpipe(stream);
      if (typeof stream.pause === "function") {
        stream.pause();
      }
    }
    function readStream(stream, encoding, length, limit, callback) {
      var complete = false;
      var sync = true;
      if (limit !== null && length !== null && length > limit) {
        return done(createError(413, "request entity too large", {
          expected: length,
          length,
          limit,
          type: "entity.too.large"
        }));
      }
      var state2 = stream._readableState;
      if (stream._decoder || state2 && (state2.encoding || state2.decoder)) {
        return done(createError(500, "stream encoding should not be set", {
          type: "stream.encoding.set"
        }));
      }
      if (typeof stream.readable !== "undefined" && !stream.readable) {
        return done(createError(500, "stream is not readable", {
          type: "stream.not.readable"
        }));
      }
      var received = 0;
      var decoder;
      try {
        decoder = getDecoder(encoding);
      } catch (err) {
        return done(err);
      }
      var buffer = decoder ? "" : [];
      stream.on("aborted", onAborted);
      stream.on("close", cleanup);
      stream.on("data", onData);
      stream.on("end", onEnd);
      stream.on("error", onEnd);
      sync = false;
      function done() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        complete = true;
        if (sync) {
          process.nextTick(invokeCallback);
        } else {
          invokeCallback();
        }
        function invokeCallback() {
          cleanup();
          if (args[0]) {
            halt(stream);
          }
          callback.apply(null, args);
        }
      }
      function onAborted() {
        if (complete) return;
        done(createError(400, "request aborted", {
          code: "ECONNABORTED",
          expected: length,
          length,
          received,
          type: "request.aborted"
        }));
      }
      function onData(chunk) {
        if (complete) return;
        received += chunk.length;
        if (limit !== null && received > limit) {
          done(createError(413, "request entity too large", {
            limit,
            received,
            type: "entity.too.large"
          }));
        } else if (decoder) {
          buffer += decoder.write(chunk);
        } else {
          buffer.push(chunk);
        }
      }
      function onEnd(err) {
        if (complete) return;
        if (err) return done(err);
        if (length !== null && received !== length) {
          done(createError(400, "request size did not match content length", {
            expected: length,
            length,
            received,
            type: "request.size.invalid"
          }));
        } else {
          var string = decoder ? buffer + (decoder.end() || "") : Buffer.concat(buffer);
          done(null, string);
        }
      }
      function cleanup() {
        buffer = null;
        stream.removeListener("aborted", onAborted);
        stream.removeListener("data", onData);
        stream.removeListener("end", onEnd);
        stream.removeListener("error", onEnd);
        stream.removeListener("close", cleanup);
      }
    }
    function tryRequireAsyncHooks() {
      try {
        return __require("async_hooks");
      } catch (e) {
        return {};
      }
    }
    function wrap(fn) {
      var res;
      if (asyncHooks.AsyncResource) {
        res = new asyncHooks.AsyncResource(fn.name || "bound-anonymous-fn");
      }
      if (!res || !res.runInAsyncScope) {
        return fn;
      }
      return res.runInAsyncScope.bind(res, fn, null);
    }
  }
});

// node_modules/ee-first/index.js
var require_ee_first = __commonJS({
  "node_modules/ee-first/index.js"(exports, module) {
    "use strict";
    module.exports = first;
    function first(stuff, done) {
      if (!Array.isArray(stuff))
        throw new TypeError("arg must be an array of [ee, events...] arrays");
      var cleanups = [];
      for (var i = 0; i < stuff.length; i++) {
        var arr = stuff[i];
        if (!Array.isArray(arr) || arr.length < 2)
          throw new TypeError("each array member must be [ee, events...]");
        var ee = arr[0];
        for (var j = 1; j < arr.length; j++) {
          var event = arr[j];
          var fn = listener(event, callback);
          ee.on(event, fn);
          cleanups.push({
            ee,
            event,
            fn
          });
        }
      }
      function callback() {
        cleanup();
        done.apply(null, arguments);
      }
      function cleanup() {
        var x;
        for (var i2 = 0; i2 < cleanups.length; i2++) {
          x = cleanups[i2];
          x.ee.removeListener(x.event, x.fn);
        }
      }
      function thunk(fn2) {
        done = fn2;
      }
      thunk.cancel = cleanup;
      return thunk;
    }
    function listener(event, done) {
      return function onevent(arg1) {
        var args = new Array(arguments.length);
        var ee = this;
        var err = event === "error" ? arg1 : null;
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        done(err, ee, event, args);
      };
    }
  }
});

// node_modules/on-finished/index.js
var require_on_finished = __commonJS({
  "node_modules/on-finished/index.js"(exports, module) {
    "use strict";
    module.exports = onFinished;
    module.exports.isFinished = isFinished;
    var asyncHooks = tryRequireAsyncHooks();
    var first = require_ee_first();
    var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
      process.nextTick(fn.bind.apply(fn, arguments));
    };
    function onFinished(msg, listener) {
      if (isFinished(msg) !== false) {
        defer(listener, null, msg);
        return msg;
      }
      attachListener(msg, wrap(listener));
      return msg;
    }
    function isFinished(msg) {
      var socket = msg.socket;
      if (typeof msg.finished === "boolean") {
        return Boolean(msg.finished || socket && !socket.writable);
      }
      if (typeof msg.complete === "boolean") {
        return Boolean(msg.upgrade || !socket || !socket.readable || msg.complete && !msg.readable);
      }
      return void 0;
    }
    function attachFinishedListener(msg, callback) {
      var eeMsg;
      var eeSocket;
      var finished = false;
      function onFinish(error) {
        eeMsg.cancel();
        eeSocket.cancel();
        finished = true;
        callback(error);
      }
      eeMsg = eeSocket = first([[msg, "end", "finish"]], onFinish);
      function onSocket(socket) {
        msg.removeListener("socket", onSocket);
        if (finished) return;
        if (eeMsg !== eeSocket) return;
        eeSocket = first([[socket, "error", "close"]], onFinish);
      }
      if (msg.socket) {
        onSocket(msg.socket);
        return;
      }
      msg.on("socket", onSocket);
      if (msg.socket === void 0) {
        patchAssignSocket(msg, onSocket);
      }
    }
    function attachListener(msg, listener) {
      var attached = msg.__onFinished;
      if (!attached || !attached.queue) {
        attached = msg.__onFinished = createListener(msg);
        attachFinishedListener(msg, attached);
      }
      attached.queue.push(listener);
    }
    function createListener(msg) {
      function listener(err) {
        if (msg.__onFinished === listener) msg.__onFinished = null;
        if (!listener.queue) return;
        var queue = listener.queue;
        listener.queue = null;
        for (var i = 0; i < queue.length; i++) {
          queue[i](err, msg);
        }
      }
      listener.queue = [];
      return listener;
    }
    function patchAssignSocket(res, callback) {
      var assignSocket = res.assignSocket;
      if (typeof assignSocket !== "function") return;
      res.assignSocket = function _assignSocket(socket) {
        assignSocket.call(this, socket);
        callback(socket);
      };
    }
    function tryRequireAsyncHooks() {
      try {
        return __require("async_hooks");
      } catch (e) {
        return {};
      }
    }
    function wrap(fn) {
      var res;
      if (asyncHooks.AsyncResource) {
        res = new asyncHooks.AsyncResource(fn.name || "bound-anonymous-fn");
      }
      if (!res || !res.runInAsyncScope) {
        return fn;
      }
      return res.runInAsyncScope.bind(res, fn, null);
    }
  }
});

// node_modules/body-parser/lib/read.js
var require_read = __commonJS({
  "node_modules/body-parser/lib/read.js"(exports, module) {
    "use strict";
    var createError = require_http_errors();
    var destroy = require_destroy();
    var getBody = require_raw_body();
    var iconv = require_iconv_lite();
    var onFinished = require_on_finished();
    var unpipe = require_unpipe();
    var zlib = __require("zlib");
    module.exports = read;
    function read(req, res, next, parse, debug, options) {
      var length;
      var opts = options;
      var stream;
      req._body = true;
      var encoding = opts.encoding !== null ? opts.encoding : null;
      var verify = opts.verify;
      if (verify && encoding !== null && !iconv.encodingExists(encoding)) {
        return next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
          charset: encoding.toLowerCase(),
          type: "charset.unsupported"
        }));
      }
      try {
        stream = contentstream(req, debug, opts.inflate);
        length = stream.length;
        stream.length = void 0;
      } catch (err) {
        return next(err);
      }
      opts.length = length;
      opts.encoding = verify ? null : encoding;
      debug("read body");
      getBody(stream, opts, function(error, body) {
        if (error) {
          var _error;
          if (error.type === "encoding.unsupported") {
            _error = createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
              charset: encoding.toLowerCase(),
              type: "charset.unsupported"
            });
          } else {
            _error = createError(400, error);
          }
          if (stream !== req) {
            unpipe(req);
            destroy(stream, true);
          }
          dump(req, function onfinished() {
            next(createError(400, _error));
          });
          return;
        }
        if (stream !== req) {
          if (typeof req.unpipe === "function") {
            req.unpipe(stream);
          } else {
            unpipe(req);
          }
          stream.on("error", function() {
          });
          destroy(stream, true);
          req.resume();
        }
        if (verify) {
          try {
            debug("verify body");
            verify(req, res, body, encoding);
          } catch (err) {
            next(createError(403, err, {
              body,
              type: err.type || "entity.verify.failed"
            }));
            return;
          }
        }
        var str = body;
        try {
          debug("parse body");
          str = typeof body !== "string" && encoding !== null ? iconv.decode(body, encoding) : body;
          req.body = parse(str);
        } catch (err) {
          next(createError(400, err, {
            body: str,
            type: err.type || "entity.parse.failed"
          }));
          return;
        }
        next();
      });
    }
    function contentstream(req, debug, inflate) {
      var encoding = (req.headers["content-encoding"] || "identity").toLowerCase();
      var length = req.headers["content-length"];
      var stream;
      debug('content-encoding "%s"', encoding);
      if (inflate === false && encoding !== "identity") {
        throw createError(415, "content encoding unsupported", {
          encoding,
          type: "encoding.unsupported"
        });
      }
      switch (encoding) {
        case "deflate":
          stream = zlib.createInflate();
          debug("inflate body");
          req.pipe(stream);
          break;
        case "gzip":
          stream = zlib.createGunzip();
          debug("gunzip body");
          req.pipe(stream);
          break;
        case "identity":
          stream = req;
          stream.length = length;
          break;
        default:
          throw createError(415, 'unsupported content encoding "' + encoding + '"', {
            encoding,
            type: "encoding.unsupported"
          });
      }
      return stream;
    }
    function dump(req, callback) {
      if (onFinished.isFinished(req)) {
        callback(null);
      } else {
        onFinished(req, callback);
        req.resume();
      }
    }
  }
});

// node_modules/media-typer/index.js
var require_media_typer = __commonJS({
  "node_modules/media-typer/index.js"(exports) {
    "use strict";
    var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
    var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/;
    var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/;
    var qescRegExp = /\\([\u0000-\u007f])/g;
    var quoteRegExp = /([\\"])/g;
    var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/;
    var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/;
    var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
    exports.format = format;
    exports.parse = parse;
    function format(obj) {
      if (!obj || typeof obj !== "object") {
        throw new TypeError("argument obj is required");
      }
      var parameters = obj.parameters;
      var subtype = obj.subtype;
      var suffix = obj.suffix;
      var type = obj.type;
      if (!type || !typeNameRegExp.test(type)) {
        throw new TypeError("invalid type");
      }
      if (!subtype || !subtypeNameRegExp.test(subtype)) {
        throw new TypeError("invalid subtype");
      }
      var string = type + "/" + subtype;
      if (suffix) {
        if (!typeNameRegExp.test(suffix)) {
          throw new TypeError("invalid suffix");
        }
        string += "+" + suffix;
      }
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          if (!tokenRegExp.test(param)) {
            throw new TypeError("invalid parameter name");
          }
          string += "; " + param + "=" + qstring(parameters[param]);
        }
      }
      return string;
    }
    function parse(string) {
      if (!string) {
        throw new TypeError("argument string is required");
      }
      if (typeof string === "object") {
        string = getcontenttype(string);
      }
      if (typeof string !== "string") {
        throw new TypeError("argument string is required to be a string");
      }
      var index = string.indexOf(";");
      var type = index !== -1 ? string.substr(0, index) : string;
      var key;
      var match;
      var obj = splitType(type);
      var params = {};
      var value;
      paramRegExp.lastIndex = index;
      while (match = paramRegExp.exec(string)) {
        if (match.index !== index) {
          throw new TypeError("invalid parameter format");
        }
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (value[0] === '"') {
          value = value.substr(1, value.length - 2).replace(qescRegExp, "$1");
        }
        params[key] = value;
      }
      if (index !== -1 && index !== string.length) {
        throw new TypeError("invalid parameter format");
      }
      obj.parameters = params;
      return obj;
    }
    function getcontenttype(obj) {
      if (typeof obj.getHeader === "function") {
        return obj.getHeader("content-type");
      }
      if (typeof obj.headers === "object") {
        return obj.headers && obj.headers["content-type"];
      }
    }
    function qstring(val) {
      var str = String(val);
      if (tokenRegExp.test(str)) {
        return str;
      }
      if (str.length > 0 && !textRegExp.test(str)) {
        throw new TypeError("invalid parameter value");
      }
      return '"' + str.replace(quoteRegExp, "\\$1") + '"';
    }
    function splitType(string) {
      var match = typeRegExp.exec(string.toLowerCase());
      if (!match) {
        throw new TypeError("invalid media type");
      }
      var type = match[1];
      var subtype = match[2];
      var suffix;
      var index = subtype.lastIndexOf("+");
      if (index !== -1) {
        suffix = subtype.substr(index + 1);
        subtype = subtype.substr(0, index);
      }
      var obj = {
        type,
        subtype,
        suffix
      };
      return obj;
    }
  }
});

// orca-plugin-shim:mime-db
var require_mime_db = __commonJS({
  "orca-plugin-shim:mime-db"(exports, module) {
    module.exports = { "text/html": { extensions: ["html", "htm"], charset: "UTF-8", compressible: true }, "text/css": { extensions: ["css"], charset: "UTF-8", compressible: true }, "application/javascript": { extensions: ["js", "mjs"], charset: "UTF-8", compressible: true }, "text/javascript": { extensions: ["js", "mjs"], charset: "UTF-8", compressible: true }, "application/json": { extensions: ["json", "map"], charset: "UTF-8", compressible: true }, "text/plain": { extensions: ["txt", "log"], charset: "UTF-8", compressible: true }, "text/markdown": { extensions: ["md"], charset: "UTF-8", compressible: true }, "text/csv": { extensions: ["csv"], charset: "UTF-8", compressible: true }, "text/event-stream": { charset: "UTF-8", compressible: true }, "image/svg+xml": { extensions: ["svg"], charset: "UTF-8", compressible: true }, "image/png": { extensions: ["png"] }, "image/jpeg": { extensions: ["jpeg", "jpg"] }, "image/webp": { extensions: ["webp"] }, "image/gif": { extensions: ["gif"] }, "image/avif": { extensions: ["avif"] }, "image/x-icon": { extensions: ["ico"] }, "font/woff": { extensions: ["woff"] }, "font/woff2": { extensions: ["woff2"] }, "application/xml": { extensions: ["xml"], charset: "UTF-8", compressible: true }, "application/wasm": { extensions: ["wasm"] }, "application/octet-stream": { extensions: ["bin"] }, "application/x-www-form-urlencoded": {}, "multipart/form-data": {} };
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports) {
    "use strict";
    var db = require_mime_db();
    var extname2 = __require("path").extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = /* @__PURE__ */ Object.create(null);
    exports.lookup = lookup;
    exports.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports.extensions, exports.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports.charset(mime);
        if (charset2) mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    function lookup(path) {
      if (!path || typeof path !== "string") {
        return false;
      }
      var extension2 = extname2("x." + path).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports.types[extension2] || false;
    }
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      });
    }
  }
});

// node_modules/type-is/index.js
var require_type_is = __commonJS({
  "node_modules/type-is/index.js"(exports, module) {
    "use strict";
    var typer = require_media_typer();
    var mime = require_mime_types();
    module.exports = typeofrequest;
    module.exports.is = typeis;
    module.exports.hasBody = hasbody;
    module.exports.normalize = normalize3;
    module.exports.match = mimeMatch;
    function typeis(value, types_) {
      var i;
      var types = types_;
      var val = tryNormalizeType(value);
      if (!val) {
        return false;
      }
      if (types && !Array.isArray(types)) {
        types = new Array(arguments.length - 1);
        for (i = 0; i < types.length; i++) {
          types[i] = arguments[i + 1];
        }
      }
      if (!types || !types.length) {
        return val;
      }
      var type;
      for (i = 0; i < types.length; i++) {
        if (mimeMatch(normalize3(type = types[i]), val)) {
          return type[0] === "+" || type.indexOf("*") !== -1 ? val : type;
        }
      }
      return false;
    }
    function hasbody(req) {
      return req.headers["transfer-encoding"] !== void 0 || !isNaN(req.headers["content-length"]);
    }
    function typeofrequest(req, types_) {
      var types = types_;
      if (!hasbody(req)) {
        return null;
      }
      if (arguments.length > 2) {
        types = new Array(arguments.length - 1);
        for (var i = 0; i < types.length; i++) {
          types[i] = arguments[i + 1];
        }
      }
      var value = req.headers["content-type"];
      return typeis(value, types);
    }
    function normalize3(type) {
      if (typeof type !== "string") {
        return false;
      }
      switch (type) {
        case "urlencoded":
          return "application/x-www-form-urlencoded";
        case "multipart":
          return "multipart/*";
      }
      if (type[0] === "+") {
        return "*/*" + type;
      }
      return type.indexOf("/") === -1 ? mime.lookup(type) : type;
    }
    function mimeMatch(expected, actual) {
      if (expected === false) {
        return false;
      }
      var actualParts = actual.split("/");
      var expectedParts = expected.split("/");
      if (actualParts.length !== 2 || expectedParts.length !== 2) {
        return false;
      }
      if (expectedParts[0] !== "*" && expectedParts[0] !== actualParts[0]) {
        return false;
      }
      if (expectedParts[1].substr(0, 2) === "*+") {
        return expectedParts[1].length <= actualParts[1].length + 1 && expectedParts[1].substr(1) === actualParts[1].substr(1 - expectedParts[1].length);
      }
      if (expectedParts[1] !== "*" && expectedParts[1] !== actualParts[1]) {
        return false;
      }
      return true;
    }
    function normalizeType(value) {
      var type = typer.parse(value);
      type.parameters = void 0;
      return typer.format(type);
    }
    function tryNormalizeType(value) {
      if (!value) {
        return null;
      }
      try {
        return normalizeType(value);
      } catch (err) {
        return null;
      }
    }
  }
});

// node_modules/body-parser/lib/types/json.js
var require_json = __commonJS({
  "node_modules/body-parser/lib/types/json.js"(exports, module) {
    "use strict";
    var bytes = require_bytes();
    var contentType = require_content_type();
    var createError = require_http_errors();
    var debug = require_src()("body-parser:json");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = json;
    var FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*([^\x20\x09\x0a\x0d])/;
    var JSON_SYNTAX_CHAR = "#";
    var JSON_SYNTAX_REGEXP = /#+/g;
    function json(options) {
      var opts = options || {};
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var inflate = opts.inflate !== false;
      var reviver = opts.reviver;
      var strict = opts.strict !== false;
      var type = opts.type || "application/json";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(body) {
        if (body.length === 0) {
          return {};
        }
        if (strict) {
          var first = firstchar(body);
          if (first !== "{" && first !== "[") {
            debug("strict violation");
            throw createStrictSyntaxError(body, first);
          }
        }
        try {
          debug("parse json");
          return JSON.parse(body, reviver);
        } catch (e) {
          throw normalizeJsonSyntaxError(e, {
            message: e.message,
            stack: e.stack
          });
        }
      }
      return function jsonParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        var charset = getCharset(req) || "utf-8";
        if (charset.slice(0, 4) !== "utf-") {
          debug("invalid charset");
          next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
            charset,
            type: "charset.unsupported"
          }));
          return;
        }
        read(req, res, next, parse, debug, {
          encoding: charset,
          inflate,
          limit,
          verify
        });
      };
    }
    function createStrictSyntaxError(str, char) {
      var index = str.indexOf(char);
      var partial = "";
      if (index !== -1) {
        partial = str.substring(0, index) + new Array(str.length - index + 1).join(JSON_SYNTAX_CHAR);
      }
      try {
        JSON.parse(partial);
        throw new SyntaxError("strict violation");
      } catch (e) {
        return normalizeJsonSyntaxError(e, {
          message: e.message.replace(JSON_SYNTAX_REGEXP, function(placeholder) {
            return str.substring(index, index + placeholder.length);
          }),
          stack: e.stack
        });
      }
    }
    function firstchar(str) {
      var match = FIRST_CHAR_REGEXP.exec(str);
      return match ? match[1] : void 0;
    }
    function getCharset(req) {
      try {
        return (contentType.parse(req).parameters.charset || "").toLowerCase();
      } catch (e) {
        return void 0;
      }
    }
    function normalizeJsonSyntaxError(error, obj) {
      var keys = Object.getOwnPropertyNames(error);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (key !== "stack" && key !== "message") {
          delete error[key];
        }
      }
      error.stack = obj.stack.replace(error.message, obj.message);
      error.message = obj.message;
      return error;
    }
    function typeChecker(type) {
      return function checkType(req) {
        return Boolean(typeis(req, type));
      };
    }
  }
});

// node_modules/body-parser/lib/types/raw.js
var require_raw = __commonJS({
  "node_modules/body-parser/lib/types/raw.js"(exports, module) {
    "use strict";
    var bytes = require_bytes();
    var debug = require_src()("body-parser:raw");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = raw;
    function raw(options) {
      var opts = options || {};
      var inflate = opts.inflate !== false;
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var type = opts.type || "application/octet-stream";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(buf) {
        return buf;
      }
      return function rawParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        read(req, res, next, parse, debug, {
          encoding: null,
          inflate,
          limit,
          verify
        });
      };
    }
    function typeChecker(type) {
      return function checkType(req) {
        return Boolean(typeis(req, type));
      };
    }
  }
});

// node_modules/body-parser/lib/types/text.js
var require_text = __commonJS({
  "node_modules/body-parser/lib/types/text.js"(exports, module) {
    "use strict";
    var bytes = require_bytes();
    var contentType = require_content_type();
    var debug = require_src()("body-parser:text");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = text2;
    function text2(options) {
      var opts = options || {};
      var defaultCharset = opts.defaultCharset || "utf-8";
      var inflate = opts.inflate !== false;
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var type = opts.type || "text/plain";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(buf) {
        return buf;
      }
      return function textParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        var charset = getCharset(req) || defaultCharset;
        read(req, res, next, parse, debug, {
          encoding: charset,
          inflate,
          limit,
          verify
        });
      };
    }
    function getCharset(req) {
      try {
        return (contentType.parse(req).parameters.charset || "").toLowerCase();
      } catch (e) {
        return void 0;
      }
    }
    function typeChecker(type) {
      return function checkType(req) {
        return Boolean(typeis(req, type));
      };
    }
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports, module) {
    "use strict";
    module.exports = TypeError;
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports, module) {
    "use strict";
    module.exports = __require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module) {
    "use strict";
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "node_modules/side-channel-list/index.js"(exports, module) {
    "use strict";
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    };
    var listDelete = function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    };
    module.exports = function getSideChannelList() {
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          var deletedNode = listDelete($o, key);
          if (deletedNode && $o && !$o.next) {
            $o = void 0;
          }
          return !!deletedNode;
        },
        get: function(key) {
          return listGet($o, key);
        },
        has: function(key) {
          return listHas($o, key);
        },
        set: function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet(
            /** @type {NonNullable<typeof $o>} */
            $o,
            key,
            value
          );
        }
      };
      return channel;
    };
  }
});

// node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "node_modules/es-object-atoms/index.js"(exports, module) {
    "use strict";
    module.exports = Object;
  }
});

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports, module) {
    "use strict";
    module.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports, module) {
    "use strict";
    module.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports, module) {
    "use strict";
    module.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports, module) {
    "use strict";
    module.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports, module) {
    "use strict";
    module.exports = SyntaxError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports, module) {
    "use strict";
    module.exports = URIError;
  }
});

// node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "node_modules/math-intrinsics/abs.js"(exports, module) {
    "use strict";
    module.exports = Math.abs;
  }
});

// node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "node_modules/math-intrinsics/floor.js"(exports, module) {
    "use strict";
    module.exports = Math.floor;
  }
});

// node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "node_modules/math-intrinsics/max.js"(exports, module) {
    "use strict";
    module.exports = Math.max;
  }
});

// node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "node_modules/math-intrinsics/min.js"(exports, module) {
    "use strict";
    module.exports = Math.min;
  }
});

// node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "node_modules/math-intrinsics/pow.js"(exports, module) {
    "use strict";
    module.exports = Math.pow;
  }
});

// node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "node_modules/math-intrinsics/round.js"(exports, module) {
    "use strict";
    module.exports = Math.round;
  }
});

// node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/math-intrinsics/isNaN.js"(exports, module) {
    "use strict";
    module.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "node_modules/math-intrinsics/sign.js"(exports, module) {
    "use strict";
    var $isNaN = require_isNaN();
    module.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "node_modules/gopd/gOPD.js"(exports, module) {
    "use strict";
    module.exports = Object.getOwnPropertyDescriptor;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports, module) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module.exports = $gOPD;
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports, module) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module.exports = $defineProperty;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
    "use strict";
    var $Object = require_es_object_atoms();
    module.exports = $Object.getPrototypeOf || null;
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    var implementation = require_implementation();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.call;
  }
});

// node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
    "use strict";
    module.exports = Function.prototype.apply;
  }
});

// node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
    "use strict";
    module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module.exports = $reflectApply || bind.call($call, $apply);
  }
});

// node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "node_modules/call-bind-apply-helpers/index.js"(exports, module) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "node_modules/dunder-proto/get.js"(exports, module) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "node_modules/get-proto/index.js"(exports, module) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports, module) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void undefined2;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "node_modules/call-bound/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "node_modules/side-channel-map/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
    function getSideChannelMap() {
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        },
        get: function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        },
        has: function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        },
        set: function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "node_modules/side-channel-weakmap/index.js"(exports, module) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module.exports = $WeakMap ? (
      /** @type {Exclude<import('.'), false>} */
      function getSideChannelWeakMap() {
        var $wm;
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapDelete($wm, key);
              }
            } else if (getSideChannelMap) {
              if ($m) {
                return $m["delete"](key);
              }
            }
            return false;
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            }
            return $m && $m.get(key);
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            }
            return !!$m && $m.has(key);
          },
          set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
              if (!$m) {
                $m = getSideChannelMap();
              }
              $m.set(key, value);
            }
          }
        };
        return channel;
      }
    ) : getSideChannelMap;
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module) {
    "use strict";
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module.exports = function getSideChannel() {
      var $channelData;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            var keyDesc = key && Object(key) === key ? "the given object key" : inspect(key);
            throw new $TypeError("Side channel does not contain " + keyDesc);
          }
        },
        "delete": function(key) {
          return !!$channelData && $channelData["delete"](key);
        },
        get: function(key) {
          return $channelData && $channelData.get(key);
        },
        has: function(key) {
          return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module) {
    "use strict";
    var formats = require_formats();
    var getSideChannel = require_side_channel();
    var defineProperty = require_es_define_property();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var overflowChannel = getSideChannel();
    var markOverflow = function markOverflow2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
      return obj;
    };
    var isOverflow = function isOverflow2(obj) {
      return overflowChannel.has(obj);
    };
    var getMaxIndex = function getMaxIndex2(obj) {
      return overflowChannel.get(obj);
    };
    var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
      overflowChannel.set(obj, maxIndex);
    };
    var conflictChannel = getSideChannel();
    var markConflict = function markConflict2(obj, maxIndex) {
      conflictChannel.set(obj, maxIndex);
      return obj;
    };
    var isConflict = function isConflict2(obj) {
      return conflictChannel.has(obj);
    };
    var getConflictIndex = function getConflictIndex2(obj) {
      return conflictChannel.get(obj);
    };
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted[compacted.length] = obj[j];
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? { __proto__: null } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var setProperty = function setProperty2(obj, key, value) {
      if (key === "__proto__" && defineProperty) {
        defineProperty(obj, key, {
          configurable: true,
          enumerable: true,
          value,
          writable: true
        });
      } else {
        obj[key] = value;
      }
    };
    var maxNumericIndex = function maxNumericIndex2(obj, min) {
      var max = min;
      var keys = Object.keys(obj);
      for (var i = 0; i < keys.length; ++i) {
        var num = parseInt(keys[i], 10);
        if (String(num) === keys[i] && num > max) {
          max = num;
        }
      }
      return max;
    };
    var limitedPair = function limitedPair2(first, second, options) {
      var pair = [first, second];
      if (options && typeof options.arrayLimit === "number" && pair.length > options.arrayLimit) {
        if (options.throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return markOverflow(arrayToObject(pair, options), 1);
      }
      return pair;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          var nextIndex = target.length;
          if (options && typeof options.arrayLimit === "number" && nextIndex >= options.arrayLimit) {
            if (options.throwOnLimitExceeded) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            return markOverflow(arrayToObject(target.concat(source), options), nextIndex);
          }
          target[nextIndex] = source;
        } else if (target && typeof target === "object") {
          if (isOverflow(target)) {
            var newIndex = getMaxIndex(target) + 1;
            target[newIndex] = source;
            setMaxIndex(target, newIndex);
          } else if (options && options.strictMerge && isConflict(target)) {
            var nextConflict = getConflictIndex(target) + 1;
            if (options.throwOnLimitExceeded && typeof options.arrayLimit === "number" && nextConflict >= options.arrayLimit) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            target[nextConflict] = source;
            markConflict(target, nextConflict);
          } else if (options && options.strictMerge) {
            var conflict = limitedPair(target, source, options);
            return isArray(conflict) ? markConflict(conflict, 1) : conflict;
          } else if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return limitedPair(target, source, options);
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        if (isOverflow(source)) {
          var sourceKeys = Object.keys(source);
          var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
          for (var m = 0; m < sourceKeys.length; m++) {
            var oldKey = parseInt(sourceKeys[m], 10);
            result[oldKey + 1] = source[sourceKeys[m]];
          }
          return markOverflow(result, getMaxIndex(source) + 1);
        }
        var combined = [target].concat(source);
        if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
          if (options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return markOverflow(arrayToObject(combined, options), combined.length - 1);
        }
        return combined;
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
        if (isConflict(target)) {
          markConflict(mergeTarget, target.length - 1);
        }
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target[target.length] = item;
            }
          } else {
            target[i] = item;
          }
        });
        if (options && typeof options.arrayLimit === "number" && target.length > options.arrayLimit) {
          if (options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          }
          return markOverflow(arrayToObject(target, options), target.length - 1);
        }
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          setProperty(acc, key, merge2(acc[key], value, options));
        } else {
          setProperty(acc, key, value);
        }
        if (isOverflow(source) && !isOverflow(acc)) {
          markOverflow(acc, maxNumericIndex(acc, getMaxIndex(source)));
        }
        if (isOverflow(acc)) {
          var keyNum = parseInt(key, 10);
          if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
            setMaxIndex(acc, keyNum);
          }
        }
        if (isConflict(acc)) {
          var conflictKey = parseInt(key, 10);
          if (String(conflictKey) === key && conflictKey > getConflictIndex(acc)) {
            markConflict(acc, conflictKey);
          }
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        setProperty(acc, key, source[key]);
        return acc;
      }, target);
    };
    var decode = function(str, defaultDecoder, charset) {
      if (typeof str === "string" && str.indexOf("%") === -1) {
        return str.indexOf("+") === -1 ? str : str.replace(/\+/g, " ");
      }
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var hasToPrimitive = typeof Symbol === "function" && typeof Symbol.toPrimitive === "symbol";
    var arrayJoin = Array.prototype.join;
    var arrayToString = Array.prototype.toString;
    var objectToString = Object.prototype.toString;
    var toCoercible = function toCoercible2(value, joining) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return value;
      }
      if (hasToPrimitive && value[Symbol.toPrimitive] != null) {
        return value;
      }
      if (isArray(value) && value.toString === arrayToString && value.join === arrayJoin) {
        var ancestors = joining || getSideChannel();
        if (ancestors.has(value)) {
          return "";
        }
        ancestors.set(value, true);
        var copy;
        for (var i = 0; i < value.length; i += 1) {
          var item = value[i];
          var coerced = toCoercible2(item, ancestors);
          if (!copy && coerced !== item) {
            copy = [];
            for (var j = 0; j < i; j += 1) {
              copy[j] = value[j];
            }
          }
          if (copy) {
            copy[i] = coerced;
          }
        }
        ancestors["delete"](value);
        return copy || value;
      }
      if (typeof value.toString === "function") {
        return value;
      }
      var valueOf = value.valueOf;
      if (typeof valueOf === "function") {
        var primitive = valueOf.call(value);
        if (!primitive || typeof primitive !== "object" && typeof primitive !== "function") {
          return String(primitive);
        }
      }
      return objectToString.call(value);
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(toCoercible(str));
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        }).replace(/\+/g, "%2B");
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        if (j + limit < string.length) {
          var last = segment.charCodeAt(segment.length - 1);
          if (last >= 55296 && last <= 56319) {
            segment = segment.slice(0, -1);
            j -= 1;
          }
        }
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = getSideChannel();
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && !refs.has(val)) {
            queue[queue.length] = { obj, prop: key };
            refs.set(val, true);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b, arrayLimit, plainObjects, throwOnLimitExceeded) {
      if (isOverflow(a)) {
        if (throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + arrayLimit + " element" + (arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        var bValues = isArray(b) ? b : [b];
        var newIndex = getMaxIndex(a);
        for (var i = 0; i < bValues.length; ++i) {
          newIndex += 1;
          a[newIndex] = bValues[i];
        }
        setMaxIndex(a, newIndex);
        return a;
      }
      var result = [].concat(a, b);
      if (result.length > arrayLimit) {
        if (throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + arrayLimit + " element" + (arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        return markOverflow(arrayToObject(result, { plainObjects }), result.length - 1);
      }
      return result;
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped[mapped.length] = fn(val[i]);
        }
        return mapped;
      }
      return fn(val);
    };
    module.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isOverflow,
      isRegExp,
      markOverflow,
      maybeMap,
      merge,
      toCoercible
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      depth: Infinity,
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel, depth, currentDepth) {
      var obj = object;
      if (currentDepth > depth) {
        throw new RangeError("Input depth exceeded depth option of " + depth);
      }
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      obj = typeof filter === "function" ? filter(prefix, obj) : obj;
      if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return formatter(encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix);
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, function(v) {
            return v == null ? v : encoder(v, defaults.encoder, charset, "value", format);
          });
        }
        objKeys = [{ value: obj.length > 0 ? utils.toCoercible(obj).join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0 && Object.keys(obj).length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel,
          depth,
          currentDepth + 1
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (has.call(arrayPrefixGenerators, opts.arrayFormat)) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        depth: typeof opts.depth === "number" ? opts.depth : defaults.depth,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (typeof key === "undefined" || key === null) {
          continue;
        }
        var value = obj[key];
        if (options.skipNulls && value === null) {
          continue;
        }
        var encodedKey = options.encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        pushToArray(keys, stringify(
          value,
          encodedKey,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel,
          options.depth,
          0
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B" + options.delimiter;
        } else {
          prefix += "utf8=%E2%9C%93" + options.delimiter;
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var isPlainContainer = function isPlainContainer2(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (isArray(value)) {
        return true;
      }
      var proto = getPrototypeOf(value);
      return proto === Object.prototype || proto === null;
    };
    var emptyCopyOf = function emptyCopyOf2(value) {
      if (isArray(value)) {
        var arr = [];
        arr.length = value.length;
        return arr;
      }
      return getPrototypeOf(value) === null ? { __proto__: null } : {};
    };
    var copyInput = function copyInput2(input) {
      var copies = getSideChannel();
      var result = {};
      var queue = [{ source: input, target: result }];
      for (var i = 0; i < queue.length; ++i) {
        var source = queue[i].source;
        var target = queue[i].target;
        var keys = Object.keys(source);
        for (var j = 0; j < keys.length; ++j) {
          var value = source[keys[j]];
          if (isPlainContainer(value)) {
            if (!copies.has(value)) {
              var copy = emptyCopyOf(value);
              copies.set(value, copy);
              queue[queue.length] = { source: value, target: copy };
            }
            target[keys[j]] = copies.get(value);
          } else {
            target[keys[j]] = value;
          }
        }
      }
      return result;
    };
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictMerge: true,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options, currentArrayLength) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        if (options.throwOnLimitExceeded) {
          var commaCount = 0;
          var commaIndex = val.indexOf(",");
          while (commaIndex > -1) {
            commaCount += 1;
            if (commaCount >= options.arrayLimit) {
              throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
            }
            commaIndex = val.indexOf(",", commaIndex + 1);
          }
        }
        return val.split(",");
      }
      if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(
        options.delimiter,
        options.throwOnLimitExceeded && typeof limit !== "undefined" ? limit + 1 : limit
      );
      if (options.throwOnLimitExceeded && typeof limit !== "undefined" && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var isEmptyBracketKey = pos > 1 && part.slice(pos - 2, pos) === "[]";
        var key;
        var val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          if (key !== null) {
            val = utils.maybeMap(
              parseArrayValue(
                part.slice(pos + 1),
                options,
                isArray(obj[key]) ? obj[key].length : 0
              ),
              function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
              }
            );
          }
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (isEmptyBracketKey) {
          val = isArray(val) ? [val] : val;
        }
        if (options.comma && isArray(val) && val.length > options.arrayLimit) {
          val = utils.combine([], val, options.arrayLimit, options.plainObjects, options.throwOnLimitExceeded);
        }
        if (key !== null) {
          var existing = has.call(obj, key);
          if (existing && (options.duplicates === "combine" || isEmptyBracketKey)) {
            obj[key] = utils.combine(
              obj[key],
              val,
              options.arrayLimit,
              options.plainObjects,
              options.throwOnLimitExceeded
            );
          } else if (!existing || options.duplicates === "last") {
            obj[key] = val;
          }
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          if (utils.isOverflow(leaf)) {
            obj = leaf;
          } else {
            obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine(
              [],
              leaf,
              options.arrayLimit,
              options.plainObjects,
              options.throwOnLimitExceeded
            );
          }
        } else {
          obj = options.plainObjects ? { __proto__: null } : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          var isValidArrayIndex = !isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (isValidArrayIndex && index < options.arrayLimit) {
            obj = [];
            obj[index] = leaf;
          } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
            throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          } else if (isValidArrayIndex) {
            obj[index] = leaf;
            utils.markOverflow(obj, index);
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var topLevelDotsToBrackets = function topLevelDotsToBrackets2(key) {
      var result = "";
      var depth = 0;
      for (var i = 0; i < key.length; i += 1) {
        var cu = key.charCodeAt(i);
        if (cu === 91) {
          depth += 1;
          result += "[";
        } else if (cu === 93) {
          if (depth > 0) {
            depth -= 1;
          }
          result += "]";
        } else if (cu === 46 && depth === 0 && i + 1 < key.length && key.charCodeAt(i + 1) !== 46 && key.charCodeAt(i + 1) !== 91) {
          var start = i + 1;
          var j = start;
          while (j < key.length && key.charCodeAt(j) !== 46 && key.charCodeAt(j) !== 91) {
            j += 1;
          }
          result += "[" + key.slice(start, j) + "]";
          i = j - 1;
        } else {
          result += key.charAt(i);
        }
      }
      return result;
    };
    var splitKeyIntoSegments = function splitKeyIntoSegments2(originalKey, options) {
      var key = options.allowDots ? topLevelDotsToBrackets(originalKey) : originalKey;
      if (options.depth <= 0) {
        if (!options.plainObjects && has.call(Object.prototype, key)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        return [key];
      }
      var segments = [];
      var first = key.indexOf("[");
      var parent = first >= 0 ? key.slice(0, first) : key;
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        segments[segments.length] = parent;
      }
      var n = key.length;
      var open = first;
      var collected = 0;
      while (open >= 0 && collected < options.depth) {
        var level = 1;
        var i = open + 1;
        var close = -1;
        while (i < n && close < 0) {
          var cu = key.charCodeAt(i);
          if (cu === 91) {
            level += 1;
          } else if (cu === 93) {
            level -= 1;
            if (level === 0) {
              close = i;
            }
          }
          i += 1;
        }
        if (close < 0) {
          segments[segments.length] = "[" + key.slice(open) + "]";
          return segments;
        }
        var seg = key.slice(open, close + 1);
        var content = seg.slice(1, -1);
        if (!options.plainObjects && has.call(Object.prototype, content) && !options.allowPrototypes) {
          return;
        }
        segments[segments.length] = seg;
        collected += 1;
        open = key.indexOf("[", close + 1);
      }
      if (open >= 0) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        segments[segments.length] = "[" + key.slice(open) + "]";
      }
      return segments;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var keys = splitKeyIntoSegments(givenKey, options);
      if (!keys) {
        return;
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults.strictMerge,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    };
    module.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? { __proto__: null } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : copyInput(str);
      var obj = options.plainObjects ? { __proto__: null } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// node_modules/body-parser/lib/types/urlencoded.js
var require_urlencoded = __commonJS({
  "node_modules/body-parser/lib/types/urlencoded.js"(exports, module) {
    "use strict";
    var bytes = require_bytes();
    var contentType = require_content_type();
    var createError = require_http_errors();
    var debug = require_src()("body-parser:urlencoded");
    var deprecate = require_depd()("body-parser");
    var read = require_read();
    var typeis = require_type_is();
    module.exports = urlencoded;
    var parsers = /* @__PURE__ */ Object.create(null);
    function urlencoded(options) {
      var opts = options || {};
      if (opts.extended === void 0) {
        deprecate("undefined extended: provide extended option");
      }
      var extended = opts.extended !== false;
      var inflate = opts.inflate !== false;
      var limit = typeof opts.limit === "undefined" || opts.limit === null ? 102400 : bytes.parse(opts.limit);
      var type = opts.type || "application/x-www-form-urlencoded";
      var verify = opts.verify || false;
      if (limit === null) {
        throw new TypeError('option limit "' + String(opts.limit) + '" is invalid');
      }
      if (verify !== false && typeof verify !== "function") {
        throw new TypeError("option verify must be function");
      }
      var queryparse = extended ? extendedparser(opts) : simpleparser(opts);
      var shouldParse = typeof type !== "function" ? typeChecker(type) : type;
      function parse(body) {
        return body.length ? queryparse(body) : {};
      }
      return function urlencodedParser(req, res, next) {
        if (req._body) {
          debug("body already parsed");
          next();
          return;
        }
        req.body = req.body || {};
        if (!typeis.hasBody(req)) {
          debug("skip empty body");
          next();
          return;
        }
        debug("content-type %j", req.headers["content-type"]);
        if (!shouldParse(req)) {
          debug("skip parsing");
          next();
          return;
        }
        var charset = getCharset(req) || "utf-8";
        if (charset !== "utf-8") {
          debug("invalid charset");
          next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
            charset,
            type: "charset.unsupported"
          }));
          return;
        }
        read(req, res, next, parse, debug, {
          debug,
          encoding: charset,
          inflate,
          limit,
          verify
        });
      };
    }
    function extendedparser(options) {
      var parameterLimit = options.parameterLimit !== void 0 ? options.parameterLimit : 1e3;
      var depth = options.depth !== void 0 ? options.depth : 32;
      var parse = parser("qs");
      if (isNaN(parameterLimit) || parameterLimit < 1) {
        throw new TypeError("option parameterLimit must be a positive number");
      }
      if (isNaN(depth) || depth < 0) {
        throw new TypeError("option depth must be a zero or a positive number");
      }
      if (isFinite(parameterLimit)) {
        parameterLimit = parameterLimit | 0;
      }
      return function queryparse(body) {
        var paramCount = parameterCount(body, parameterLimit);
        if (paramCount === void 0) {
          debug("too many parameters");
          throw createError(413, "too many parameters", {
            type: "parameters.too.many"
          });
        }
        var arrayLimit = Math.max(100, paramCount);
        debug("parse extended urlencoding");
        try {
          return parse(body, {
            allowPrototypes: true,
            arrayLimit,
            depth,
            strictDepth: true,
            parameterLimit
          });
        } catch (err) {
          if (err instanceof RangeError) {
            throw createError(400, "The input exceeded the depth", {
              type: "querystring.parse.rangeError"
            });
          } else {
            throw err;
          }
        }
      };
    }
    function getCharset(req) {
      try {
        return (contentType.parse(req).parameters.charset || "").toLowerCase();
      } catch (e) {
        return void 0;
      }
    }
    function parameterCount(body, limit) {
      var count = 0;
      var index = -1;
      do {
        count++;
        if (count > limit) {
          return void 0;
        }
        index = body.indexOf("&", index + 1);
      } while (index !== -1);
      return count;
    }
    function parser(name) {
      var mod = parsers[name];
      if (mod !== void 0) {
        return mod.parse;
      }
      switch (name) {
        case "qs":
          mod = require_lib();
          break;
        case "querystring":
          mod = __require("querystring");
          break;
      }
      parsers[name] = mod;
      return mod.parse;
    }
    function simpleparser(options) {
      var parameterLimit = options.parameterLimit !== void 0 ? options.parameterLimit : 1e3;
      var parse = parser("querystring");
      if (isNaN(parameterLimit) || parameterLimit < 1) {
        throw new TypeError("option parameterLimit must be a positive number");
      }
      if (isFinite(parameterLimit)) {
        parameterLimit = parameterLimit | 0;
      }
      return function queryparse(body) {
        var paramCount = parameterCount(body, parameterLimit);
        if (paramCount === void 0) {
          debug("too many parameters");
          throw createError(413, "too many parameters", {
            type: "parameters.too.many"
          });
        }
        debug("parse urlencoding");
        return parse(body, void 0, void 0, { maxKeys: parameterLimit });
      };
    }
    function typeChecker(type) {
      return function checkType(req) {
        return Boolean(typeis(req, type));
      };
    }
  }
});

// node_modules/body-parser/index.js
var require_body_parser = __commonJS({
  "node_modules/body-parser/index.js"(exports, module) {
    "use strict";
    var deprecate = require_depd()("body-parser");
    var parsers = /* @__PURE__ */ Object.create(null);
    exports = module.exports = deprecate.function(
      bodyParser,
      "bodyParser: use individual json/urlencoded middlewares"
    );
    Object.defineProperty(exports, "json", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("json")
    });
    Object.defineProperty(exports, "raw", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("raw")
    });
    Object.defineProperty(exports, "text", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("text")
    });
    Object.defineProperty(exports, "urlencoded", {
      configurable: true,
      enumerable: true,
      get: createParserGetter("urlencoded")
    });
    function bodyParser(options) {
      var opts = Object.create(options || null, {
        type: {
          configurable: true,
          enumerable: true,
          value: void 0,
          writable: true
        }
      });
      var _urlencoded = exports.urlencoded(opts);
      var _json = exports.json(opts);
      return function bodyParser2(req, res, next) {
        _json(req, res, function(err) {
          if (err) return next(err);
          _urlencoded(req, res, next);
        });
      };
    }
    function createParserGetter(name) {
      return function get() {
        return loadParser(name);
      };
    }
    function loadParser(parserName) {
      var parser = parsers[parserName];
      if (parser !== void 0) {
        return parser;
      }
      switch (parserName) {
        case "json":
          parser = require_json();
          break;
        case "raw":
          parser = require_raw();
          break;
        case "text":
          parser = require_text();
          break;
        case "urlencoded":
          parser = require_urlencoded();
          break;
      }
      return parsers[parserName] = parser;
    }
  }
});

// node_modules/merge-descriptors/index.js
var require_merge_descriptors = __commonJS({
  "node_modules/merge-descriptors/index.js"(exports, module) {
    "use strict";
    module.exports = merge;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function merge(dest, src, redefine) {
      if (!dest) {
        throw new TypeError("argument dest is required");
      }
      if (!src) {
        throw new TypeError("argument src is required");
      }
      if (redefine === void 0) {
        redefine = true;
      }
      Object.getOwnPropertyNames(src).forEach(function forEachOwnPropertyName(name) {
        if (!redefine && hasOwnProperty.call(dest, name)) {
          return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(src, name);
        Object.defineProperty(dest, name, descriptor);
      });
      return dest;
    }
  }
});

// node_modules/finalhandler/node_modules/ms/index.js
var require_ms2 = __commonJS({
  "node_modules/finalhandler/node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/finalhandler/node_modules/debug/src/debug.js
var require_debug2 = __commonJS({
  "node_modules/finalhandler/node_modules/debug/src/debug.js"(exports, module) {
    "use strict";
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms2();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/finalhandler/node_modules/debug/src/browser.js
var require_browser2 = __commonJS({
  "node_modules/finalhandler/node_modules/debug/src/browser.js"(exports, module) {
    "use strict";
    exports = module.exports = require_debug2();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/finalhandler/node_modules/debug/src/node.js
var require_node2 = __commonJS({
  "node_modules/finalhandler/node_modules/debug/src/node.js"(exports, module) {
    "use strict";
    var tty = __require("tty");
    var util = __require("util");
    exports = module.exports = require_debug2();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = __require("fs");
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = __require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load());
  }
});

// node_modules/finalhandler/node_modules/debug/src/index.js
var require_src2 = __commonJS({
  "node_modules/finalhandler/node_modules/debug/src/index.js"(exports, module) {
    "use strict";
    if (typeof process !== "undefined" && process.type === "renderer") {
      module.exports = require_browser2();
    } else {
      module.exports = require_node2();
    }
  }
});

// node_modules/encodeurl/index.js
var require_encodeurl = __commonJS({
  "node_modules/encodeurl/index.js"(exports, module) {
    "use strict";
    module.exports = encodeUrl;
    var ENCODE_CHARS_REGEXP = /(?:[^\x21\x23-\x3B\x3D\x3F-\x5F\x61-\x7A\x7C\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g;
    var UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;
    var UNMATCHED_SURROGATE_PAIR_REPLACE = "$1\uFFFD$2";
    function encodeUrl(url2) {
      return String(url2).replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE).replace(ENCODE_CHARS_REGEXP, encodeURI);
    }
  }
});

// node_modules/escape-html/index.js
var require_escape_html = __commonJS({
  "node_modules/escape-html/index.js"(exports, module) {
    "use strict";
    var matchHtmlRegExp = /["'&<>]/;
    module.exports = escapeHtml;
    function escapeHtml(string) {
      var str = "" + string;
      var match = matchHtmlRegExp.exec(str);
      if (!match) {
        return str;
      }
      var escape2;
      var html = "";
      var index = 0;
      var lastIndex = 0;
      for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
          case 34:
            escape2 = "&quot;";
            break;
          case 38:
            escape2 = "&amp;";
            break;
          case 39:
            escape2 = "&#39;";
            break;
          case 60:
            escape2 = "&lt;";
            break;
          case 62:
            escape2 = "&gt;";
            break;
          default:
            continue;
        }
        if (lastIndex !== index) {
          html += str.substring(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escape2;
      }
      return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
    }
  }
});

// node_modules/parseurl/index.js
var require_parseurl = __commonJS({
  "node_modules/parseurl/index.js"(exports, module) {
    "use strict";
    var url2 = __require("url");
    var parse = url2.parse;
    var Url = url2.Url;
    module.exports = parseurl;
    module.exports.original = originalurl;
    function parseurl(req) {
      var url3 = req.url;
      if (url3 === void 0) {
        return void 0;
      }
      var parsed = req._parsedUrl;
      if (fresh(url3, parsed)) {
        return parsed;
      }
      parsed = fastparse(url3);
      parsed._raw = url3;
      return req._parsedUrl = parsed;
    }
    function originalurl(req) {
      var url3 = req.originalUrl;
      if (typeof url3 !== "string") {
        return parseurl(req);
      }
      var parsed = req._parsedOriginalUrl;
      if (fresh(url3, parsed)) {
        return parsed;
      }
      parsed = fastparse(url3);
      parsed._raw = url3;
      return req._parsedOriginalUrl = parsed;
    }
    function fastparse(str) {
      if (typeof str !== "string" || str.charCodeAt(0) !== 47) {
        return parse(str);
      }
      var pathname = str;
      var query = null;
      var search = null;
      for (var i = 1; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
          case 63:
            if (search === null) {
              pathname = str.substring(0, i);
              query = str.substring(i + 1);
              search = str.substring(i);
            }
            break;
          case 9:
          /* \t */
          case 10:
          /* \n */
          case 12:
          /* \f */
          case 13:
          /* \r */
          case 32:
          /*    */
          case 35:
          /* #  */
          case 160:
          case 65279:
            return parse(str);
        }
      }
      var url3 = Url !== void 0 ? new Url() : {};
      url3.path = str;
      url3.href = str;
      url3.pathname = pathname;
      if (search !== null) {
        url3.query = query;
        url3.search = search;
      }
      return url3;
    }
    function fresh(url3, parsedUrl) {
      return typeof parsedUrl === "object" && parsedUrl !== null && (Url === void 0 || parsedUrl instanceof Url) && parsedUrl._raw === url3;
    }
  }
});

// node_modules/finalhandler/index.js
var require_finalhandler = __commonJS({
  "node_modules/finalhandler/index.js"(exports, module) {
    "use strict";
    var debug = require_src2()("finalhandler");
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var onFinished = require_on_finished();
    var parseUrl = require_parseurl();
    var statuses = require_statuses();
    var unpipe = require_unpipe();
    var DOUBLE_SPACE_REGEXP = /\x20{2}/g;
    var NEWLINE_REGEXP = /\n/g;
    var defer = typeof setImmediate === "function" ? setImmediate : function(fn) {
      process.nextTick(fn.bind.apply(fn, arguments));
    };
    var isFinished = onFinished.isFinished;
    function createHtmlDocument(message) {
      var body = escapeHtml(message).replace(NEWLINE_REGEXP, "<br>").replace(DOUBLE_SPACE_REGEXP, " &nbsp;");
      return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>' + body + "</pre>\n</body>\n</html>\n";
    }
    module.exports = finalhandler;
    function finalhandler(req, res, options) {
      var opts = options || {};
      var env = opts.env || process.env.NODE_ENV || "development";
      var onerror = opts.onerror;
      return function(err) {
        var headers;
        var msg;
        var status;
        if (!err && headersSent(res)) {
          debug("cannot 404 after headers sent");
          return;
        }
        if (err) {
          status = getErrorStatusCode(err);
          if (status === void 0) {
            status = getResponseStatusCode(res);
          } else {
            headers = getErrorHeaders(err);
          }
          msg = getErrorMessage(err, status, env);
        } else {
          status = 404;
          msg = "Cannot " + req.method + " " + encodeUrl(getResourceName(req));
        }
        debug("default %s", status);
        if (err && onerror) {
          defer(onerror, err, req, res);
        }
        if (headersSent(res)) {
          debug("cannot %d after headers sent", status);
          if (req.socket) {
            req.socket.destroy();
          }
          return;
        }
        send(req, res, status, headers, msg);
      };
    }
    function getErrorHeaders(err) {
      if (!err.headers || typeof err.headers !== "object") {
        return void 0;
      }
      var headers = /* @__PURE__ */ Object.create(null);
      var keys = Object.keys(err.headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        headers[key] = err.headers[key];
      }
      return headers;
    }
    function getErrorMessage(err, status, env) {
      var msg;
      if (env !== "production") {
        msg = err.stack;
        if (!msg && typeof err.toString === "function") {
          msg = err.toString();
        }
      }
      return msg || statuses.message[status];
    }
    function getErrorStatusCode(err) {
      if (typeof err.status === "number" && err.status >= 400 && err.status < 600) {
        return err.status;
      }
      if (typeof err.statusCode === "number" && err.statusCode >= 400 && err.statusCode < 600) {
        return err.statusCode;
      }
      return void 0;
    }
    function getResourceName(req) {
      try {
        return parseUrl.original(req).pathname;
      } catch (e) {
        return "resource";
      }
    }
    function getResponseStatusCode(res) {
      var status = res.statusCode;
      if (typeof status !== "number" || status < 400 || status > 599) {
        status = 500;
      }
      return status;
    }
    function headersSent(res) {
      return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
    }
    function send(req, res, status, headers, message) {
      function write() {
        var body = createHtmlDocument(message);
        res.statusCode = status;
        if (req.httpVersionMajor < 2) {
          res.statusMessage = statuses.message[status];
        }
        res.removeHeader("Content-Encoding");
        res.removeHeader("Content-Language");
        res.removeHeader("Content-Range");
        setHeaders(res, headers);
        res.setHeader("Content-Security-Policy", "default-src 'none'");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.setHeader("Content-Length", Buffer.byteLength(body, "utf8"));
        if (req.method === "HEAD") {
          res.end();
          return;
        }
        res.end(body, "utf8");
      }
      if (isFinished(req)) {
        write();
        return;
      }
      unpipe(req);
      onFinished(req, write);
      req.resume();
    }
    function setHeaders(res, headers) {
      if (!headers) {
        return;
      }
      var keys = Object.keys(headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        res.setHeader(key, headers[key]);
      }
    }
  }
});

// node_modules/express/node_modules/ms/index.js
var require_ms3 = __commonJS({
  "node_modules/express/node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/express/node_modules/debug/src/debug.js
var require_debug3 = __commonJS({
  "node_modules/express/node_modules/debug/src/debug.js"(exports, module) {
    "use strict";
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms3();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/express/node_modules/debug/src/browser.js
var require_browser3 = __commonJS({
  "node_modules/express/node_modules/debug/src/browser.js"(exports, module) {
    "use strict";
    exports = module.exports = require_debug3();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/express/node_modules/debug/src/node.js
var require_node3 = __commonJS({
  "node_modules/express/node_modules/debug/src/node.js"(exports, module) {
    "use strict";
    var tty = __require("tty");
    var util = __require("util");
    exports = module.exports = require_debug3();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = __require("fs");
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = __require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load());
  }
});

// node_modules/express/node_modules/debug/src/index.js
var require_src3 = __commonJS({
  "node_modules/express/node_modules/debug/src/index.js"(exports, module) {
    "use strict";
    if (typeof process !== "undefined" && process.type === "renderer") {
      module.exports = require_browser3();
    } else {
      module.exports = require_node3();
    }
  }
});

// node_modules/array-flatten/array-flatten.js
var require_array_flatten = __commonJS({
  "node_modules/array-flatten/array-flatten.js"(exports, module) {
    "use strict";
    module.exports = arrayFlatten;
    function flattenWithDepth(array, result, depth) {
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (depth > 0 && Array.isArray(value)) {
          flattenWithDepth(value, result, depth - 1);
        } else {
          result.push(value);
        }
      }
      return result;
    }
    function flattenForever(array, result) {
      for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (Array.isArray(value)) {
          flattenForever(value, result);
        } else {
          result.push(value);
        }
      }
      return result;
    }
    function arrayFlatten(array, depth) {
      if (depth == null) {
        return flattenForever(array, []);
      }
      return flattenWithDepth(array, [], depth);
    }
  }
});

// node_modules/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "node_modules/path-to-regexp/index.js"(exports, module) {
    "use strict";
    module.exports = pathToRegexp;
    var MATCHING_GROUP_REGEXP = /\\.|\((?:\?<(.*?)>)?(?!\?)/g;
    function pathToRegexp(path, keys, options) {
      options = options || {};
      keys = keys || [];
      var strict = options.strict;
      var end = options.end !== false;
      var flags = options.sensitive ? "" : "i";
      var lookahead = options.lookahead !== false;
      var extraOffset = 0;
      var keysOffset = keys.length;
      var i = 0;
      var name = 0;
      var pos = 0;
      var backtrack = "";
      var m;
      if (path instanceof RegExp) {
        while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {
          if (m[0][0] === "\\") continue;
          keys.push({
            name: m[1] || name++,
            optional: false,
            offset: m.index
          });
        }
        return path;
      }
      if (Array.isArray(path)) {
        path = path.map(function(value) {
          return pathToRegexp(value, keys, options).source;
        });
        return new RegExp(path.join("|"), flags);
      }
      if (typeof path !== "string") {
        throw new TypeError("path must be a string, array of strings, or regular expression");
      }
      path = path.replace(
        /\\.|(\/)?(\.)?:(\w+)(\(.*?\))?(\*)?(\?)?|[.*]|\/\(/g,
        function(match, slash, format, key, capture, star, optional, offset) {
          if (match[0] === "\\") {
            backtrack += match;
            pos += 2;
            return match;
          }
          if (match === ".") {
            backtrack += "\\.";
            extraOffset += 1;
            pos += 1;
            return "\\.";
          }
          if (slash || format) {
            backtrack = "";
          } else {
            backtrack += path.slice(pos, offset);
          }
          pos = offset + match.length;
          if (match === "*") {
            backtrack = "";
            extraOffset += 3;
            return "(.*)";
          }
          if (match === "/(") {
            backtrack += "/";
            extraOffset += 2;
            return "/(?:";
          }
          slash = slash || "";
          format = format ? "\\." : "";
          optional = optional || "";
          capture = capture ? capture.replace(/\\.|\*/, function(m2) {
            return m2 === "*" ? "(.*)" : m2;
          }) : backtrack ? "((?:(?!/|" + backtrack + ").)+?)" : "([^/" + format + "]+?)";
          keys.push({
            name: key,
            optional: !!optional,
            offset: offset + extraOffset
          });
          var result = "(?:" + format + slash + capture + (star ? "((?:[/" + format + "].+?)?)" : "") + ")" + optional;
          backtrack = "";
          extraOffset += result.length - match.length;
          return result;
        }
      );
      while (m = MATCHING_GROUP_REGEXP.exec(path)) {
        if (m[0][0] === "\\") continue;
        if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {
          keys.splice(keysOffset + i, 0, {
            name: name++,
            // Unnamed matching groups must be consistently linear.
            optional: false,
            offset: m.index
          });
        }
        i++;
      }
      path += strict ? "" : path[path.length - 1] === "/" ? "?" : "/?";
      if (end) {
        path += "$";
      } else if (path[path.length - 1] !== "/") {
        path += lookahead ? "(?=/|$)" : "(?:/|$)";
      }
      return new RegExp("^" + path, flags);
    }
  }
});

// node_modules/express/lib/router/layer.js
var require_layer = __commonJS({
  "node_modules/express/lib/router/layer.js"(exports, module) {
    "use strict";
    var pathRegexp = require_path_to_regexp();
    var debug = require_src3()("express:router:layer");
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    module.exports = Layer;
    function Layer(path, options, fn) {
      if (!(this instanceof Layer)) {
        return new Layer(path, options, fn);
      }
      debug("new %o", path);
      var opts = options || {};
      this.handle = fn;
      this.name = fn.name || "<anonymous>";
      this.params = void 0;
      this.path = void 0;
      this.regexp = pathRegexp(path, this.keys = [], opts);
      this.regexp.fast_star = path === "*";
      this.regexp.fast_slash = path === "/" && opts.end === false;
    }
    Layer.prototype.handle_error = function handle_error(error, req, res, next) {
      var fn = this.handle;
      if (fn.length !== 4) {
        return next(error);
      }
      try {
        fn(error, req, res, next);
      } catch (err) {
        next(err);
      }
    };
    Layer.prototype.handle_request = function handle(req, res, next) {
      var fn = this.handle;
      if (fn.length > 3) {
        return next();
      }
      try {
        fn(req, res, next);
      } catch (err) {
        next(err);
      }
    };
    Layer.prototype.match = function match(path) {
      var match2;
      if (path != null) {
        if (this.regexp.fast_slash) {
          this.params = {};
          this.path = "";
          return true;
        }
        if (this.regexp.fast_star) {
          this.params = { "0": decode_param(path) };
          this.path = path;
          return true;
        }
        match2 = this.regexp.exec(path);
      }
      if (!match2) {
        this.params = void 0;
        this.path = void 0;
        return false;
      }
      this.params = {};
      this.path = match2[0];
      var keys = this.keys;
      var params = this.params;
      for (var i = 1; i < match2.length; i++) {
        var key = keys[i - 1];
        var prop = key.name;
        var val = decode_param(match2[i]);
        if (val !== void 0 || !hasOwnProperty.call(params, prop)) {
          params[prop] = val;
        }
      }
      return true;
    };
    function decode_param(val) {
      if (typeof val !== "string" || val.length === 0) {
        return val;
      }
      try {
        return decodeURIComponent(val);
      } catch (err) {
        if (err instanceof URIError) {
          err.message = "Failed to decode param '" + val + "'";
          err.status = err.statusCode = 400;
        }
        throw err;
      }
    }
  }
});

// node_modules/methods/index.js
var require_methods = __commonJS({
  "node_modules/methods/index.js"(exports, module) {
    "use strict";
    var http = __require("http");
    module.exports = getCurrentNodeMethods() || getBasicNodeMethods();
    function getCurrentNodeMethods() {
      return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {
        return method.toLowerCase();
      });
    }
    function getBasicNodeMethods() {
      return [
        "get",
        "post",
        "put",
        "head",
        "delete",
        "options",
        "trace",
        "copy",
        "lock",
        "mkcol",
        "move",
        "purge",
        "propfind",
        "proppatch",
        "unlock",
        "report",
        "mkactivity",
        "checkout",
        "merge",
        "m-search",
        "notify",
        "subscribe",
        "unsubscribe",
        "patch",
        "search",
        "connect"
      ];
    }
  }
});

// node_modules/express/lib/router/route.js
var require_route = __commonJS({
  "node_modules/express/lib/router/route.js"(exports, module) {
    "use strict";
    var debug = require_src3()("express:router:route");
    var flatten = require_array_flatten();
    var Layer = require_layer();
    var methods = require_methods();
    var slice = Array.prototype.slice;
    var toString = Object.prototype.toString;
    module.exports = Route;
    function Route(path) {
      this.path = path;
      this.stack = [];
      debug("new %o", path);
      this.methods = {};
    }
    Route.prototype._handles_method = function _handles_method(method) {
      if (this.methods._all) {
        return true;
      }
      var name = typeof method === "string" ? method.toLowerCase() : method;
      if (name === "head" && !this.methods["head"]) {
        name = "get";
      }
      return Boolean(this.methods[name]);
    };
    Route.prototype._options = function _options() {
      var methods2 = Object.keys(this.methods);
      if (this.methods.get && !this.methods.head) {
        methods2.push("head");
      }
      for (var i = 0; i < methods2.length; i++) {
        methods2[i] = methods2[i].toUpperCase();
      }
      return methods2;
    };
    Route.prototype.dispatch = function dispatch(req, res, done) {
      var idx = 0;
      var stack = this.stack;
      var sync = 0;
      if (stack.length === 0) {
        return done();
      }
      var method = typeof req.method === "string" ? req.method.toLowerCase() : req.method;
      if (method === "head" && !this.methods["head"]) {
        method = "get";
      }
      req.route = this;
      next();
      function next(err) {
        if (err && err === "route") {
          return done();
        }
        if (err && err === "router") {
          return done(err);
        }
        if (++sync > 100) {
          return setImmediate(next, err);
        }
        var layer = stack[idx++];
        if (!layer) {
          return done(err);
        }
        if (layer.method && layer.method !== method) {
          next(err);
        } else if (err) {
          layer.handle_error(err, req, res, next);
        } else {
          layer.handle_request(req, res, next);
        }
        sync = 0;
      }
    };
    Route.prototype.all = function all() {
      var handles = flatten(slice.call(arguments));
      for (var i = 0; i < handles.length; i++) {
        var handle = handles[i];
        if (typeof handle !== "function") {
          var type = toString.call(handle);
          var msg = "Route.all() requires a callback function but got a " + type;
          throw new TypeError(msg);
        }
        var layer = Layer("/", {}, handle);
        layer.method = void 0;
        this.methods._all = true;
        this.stack.push(layer);
      }
      return this;
    };
    methods.forEach(function(method) {
      Route.prototype[method] = function() {
        var handles = flatten(slice.call(arguments));
        for (var i = 0; i < handles.length; i++) {
          var handle = handles[i];
          if (typeof handle !== "function") {
            var type = toString.call(handle);
            var msg = "Route." + method + "() requires a callback function but got a " + type;
            throw new Error(msg);
          }
          debug("%s %o", method, this.path);
          var layer = Layer("/", {}, handle);
          layer.method = method;
          this.methods[method] = true;
          this.stack.push(layer);
        }
        return this;
      };
    });
  }
});

// node_modules/utils-merge/index.js
var require_utils_merge = __commonJS({
  "node_modules/utils-merge/index.js"(exports, module) {
    "use strict";
    exports = module.exports = function(a, b) {
      if (a && b) {
        for (var key in b) {
          a[key] = b[key];
        }
      }
      return a;
    };
  }
});

// node_modules/express/lib/router/index.js
var require_router = __commonJS({
  "node_modules/express/lib/router/index.js"(exports, module) {
    "use strict";
    var Route = require_route();
    var Layer = require_layer();
    var methods = require_methods();
    var mixin = require_utils_merge();
    var debug = require_src3()("express:router");
    var deprecate = require_depd()("express");
    var flatten = require_array_flatten();
    var parseUrl = require_parseurl();
    var setPrototypeOf = require_setprototypeof();
    var objectRegExp = /^\[object (\S+)\]$/;
    var slice = Array.prototype.slice;
    var toString = Object.prototype.toString;
    var proto = module.exports = function(options) {
      var opts = options || {};
      function router(req, res, next) {
        router.handle(req, res, next);
      }
      setPrototypeOf(router, proto);
      router.params = {};
      router._params = [];
      router.caseSensitive = opts.caseSensitive;
      router.mergeParams = opts.mergeParams;
      router.strict = opts.strict;
      router.stack = [];
      return router;
    };
    proto.param = function param(name, fn) {
      if (typeof name === "function") {
        deprecate("router.param(fn): Refactor to use path params");
        this._params.push(name);
        return;
      }
      var params = this._params;
      var len = params.length;
      var ret;
      if (name[0] === ":") {
        deprecate("router.param(" + JSON.stringify(name) + ", fn): Use router.param(" + JSON.stringify(name.slice(1)) + ", fn) instead");
        name = name.slice(1);
      }
      for (var i = 0; i < len; ++i) {
        if (ret = params[i](name, fn)) {
          fn = ret;
        }
      }
      if ("function" !== typeof fn) {
        throw new Error("invalid param() call for " + name + ", got " + fn);
      }
      (this.params[name] = this.params[name] || []).push(fn);
      return this;
    };
    proto.handle = function handle(req, res, out) {
      var self = this;
      debug("dispatching %s %s", req.method, req.url);
      var idx = 0;
      var protohost = getProtohost(req.url) || "";
      var removed = "";
      var slashAdded = false;
      var sync = 0;
      var paramcalled = {};
      var options = [];
      var stack = self.stack;
      var parentParams = req.params;
      var parentUrl = req.baseUrl || "";
      var done = restore(out, req, "baseUrl", "next", "params");
      req.next = next;
      if (req.method === "OPTIONS") {
        done = wrap(done, function(old, err) {
          if (err || options.length === 0) return old(err);
          sendOptionsResponse(res, options, old);
        });
      }
      req.baseUrl = parentUrl;
      req.originalUrl = req.originalUrl || req.url;
      next();
      function next(err) {
        var layerError = err === "route" ? null : err;
        if (slashAdded) {
          req.url = req.url.slice(1);
          slashAdded = false;
        }
        if (removed.length !== 0) {
          req.baseUrl = parentUrl;
          req.url = protohost + removed + req.url.slice(protohost.length);
          removed = "";
        }
        if (layerError === "router") {
          setImmediate(done, null);
          return;
        }
        if (idx >= stack.length) {
          setImmediate(done, layerError);
          return;
        }
        if (++sync > 100) {
          return setImmediate(next, err);
        }
        var path = getPathname(req);
        if (path == null) {
          return done(layerError);
        }
        var layer;
        var match;
        var route2;
        while (match !== true && idx < stack.length) {
          layer = stack[idx++];
          match = matchLayer(layer, path);
          route2 = layer.route;
          if (typeof match !== "boolean") {
            layerError = layerError || match;
          }
          if (match !== true) {
            continue;
          }
          if (!route2) {
            continue;
          }
          if (layerError) {
            match = false;
            continue;
          }
          var method = req.method;
          var has_method = route2._handles_method(method);
          if (!has_method && method === "OPTIONS") {
            appendMethods(options, route2._options());
          }
          if (!has_method && method !== "HEAD") {
            match = false;
          }
        }
        if (match !== true) {
          return done(layerError);
        }
        if (route2) {
          req.route = route2;
        }
        req.params = self.mergeParams ? mergeParams(layer.params, parentParams) : layer.params;
        var layerPath = layer.path;
        self.process_params(layer, paramcalled, req, res, function(err2) {
          if (err2) {
            next(layerError || err2);
          } else if (route2) {
            layer.handle_request(req, res, next);
          } else {
            trim_prefix(layer, layerError, layerPath, path);
          }
          sync = 0;
        });
      }
      function trim_prefix(layer, layerError, layerPath, path) {
        if (layerPath.length !== 0) {
          if (layerPath !== path.slice(0, layerPath.length)) {
            next(layerError);
            return;
          }
          var c = path[layerPath.length];
          if (c && c !== "/" && c !== ".") return next(layerError);
          debug("trim prefix (%s) from url %s", layerPath, req.url);
          removed = layerPath;
          req.url = protohost + req.url.slice(protohost.length + removed.length);
          if (!protohost && req.url[0] !== "/") {
            req.url = "/" + req.url;
            slashAdded = true;
          }
          req.baseUrl = parentUrl + (removed[removed.length - 1] === "/" ? removed.substring(0, removed.length - 1) : removed);
        }
        debug("%s %s : %s", layer.name, layerPath, req.originalUrl);
        if (layerError) {
          layer.handle_error(layerError, req, res, next);
        } else {
          layer.handle_request(req, res, next);
        }
      }
    };
    proto.process_params = function process_params(layer, called, req, res, done) {
      var params = this.params;
      var keys = layer.keys;
      if (!keys || keys.length === 0) {
        return done();
      }
      var i = 0;
      var name;
      var paramIndex = 0;
      var key;
      var paramVal;
      var paramCallbacks;
      var paramCalled;
      function param(err) {
        if (err) {
          return done(err);
        }
        if (i >= keys.length) {
          return done();
        }
        paramIndex = 0;
        key = keys[i++];
        name = key.name;
        paramVal = req.params[name];
        paramCallbacks = params[name];
        paramCalled = called[name];
        if (paramVal === void 0 || !paramCallbacks) {
          return param();
        }
        if (paramCalled && (paramCalled.match === paramVal || paramCalled.error && paramCalled.error !== "route")) {
          req.params[name] = paramCalled.value;
          return param(paramCalled.error);
        }
        called[name] = paramCalled = {
          error: null,
          match: paramVal,
          value: paramVal
        };
        paramCallback();
      }
      function paramCallback(err) {
        var fn = paramCallbacks[paramIndex++];
        paramCalled.value = req.params[key.name];
        if (err) {
          paramCalled.error = err;
          param(err);
          return;
        }
        if (!fn) return param();
        try {
          fn(req, res, paramCallback, paramVal, key.name);
        } catch (e) {
          paramCallback(e);
        }
      }
      param();
    };
    proto.use = function use(fn) {
      var offset = 0;
      var path = "/";
      if (typeof fn !== "function") {
        var arg = fn;
        while (Array.isArray(arg) && arg.length !== 0) {
          arg = arg[0];
        }
        if (typeof arg !== "function") {
          offset = 1;
          path = fn;
        }
      }
      var callbacks = flatten(slice.call(arguments, offset));
      if (callbacks.length === 0) {
        throw new TypeError("Router.use() requires a middleware function");
      }
      for (var i = 0; i < callbacks.length; i++) {
        var fn = callbacks[i];
        if (typeof fn !== "function") {
          throw new TypeError("Router.use() requires a middleware function but got a " + gettype(fn));
        }
        debug("use %o %s", path, fn.name || "<anonymous>");
        var layer = new Layer(path, {
          sensitive: this.caseSensitive,
          strict: false,
          end: false
        }, fn);
        layer.route = void 0;
        this.stack.push(layer);
      }
      return this;
    };
    proto.route = function route2(path) {
      var route3 = new Route(path);
      var layer = new Layer(path, {
        sensitive: this.caseSensitive,
        strict: this.strict,
        end: true
      }, route3.dispatch.bind(route3));
      layer.route = route3;
      this.stack.push(layer);
      return route3;
    };
    methods.concat("all").forEach(function(method) {
      proto[method] = function(path) {
        var route2 = this.route(path);
        route2[method].apply(route2, slice.call(arguments, 1));
        return this;
      };
    });
    function appendMethods(list, addition) {
      for (var i = 0; i < addition.length; i++) {
        var method = addition[i];
        if (list.indexOf(method) === -1) {
          list.push(method);
        }
      }
    }
    function getPathname(req) {
      try {
        return parseUrl(req).pathname;
      } catch (err) {
        return void 0;
      }
    }
    function getProtohost(url2) {
      if (typeof url2 !== "string" || url2.length === 0 || url2[0] === "/") {
        return void 0;
      }
      var searchIndex = url2.indexOf("?");
      var pathLength = searchIndex !== -1 ? searchIndex : url2.length;
      var fqdnIndex = url2.slice(0, pathLength).indexOf("://");
      return fqdnIndex !== -1 ? url2.substring(0, url2.indexOf("/", 3 + fqdnIndex)) : void 0;
    }
    function gettype(obj) {
      var type = typeof obj;
      if (type !== "object") {
        return type;
      }
      return toString.call(obj).replace(objectRegExp, "$1");
    }
    function matchLayer(layer, path) {
      try {
        return layer.match(path);
      } catch (err) {
        return err;
      }
    }
    function mergeParams(params, parent) {
      if (typeof parent !== "object" || !parent) {
        return params;
      }
      var obj = mixin({}, parent);
      if (!(0 in params) || !(0 in parent)) {
        return mixin(obj, params);
      }
      var i = 0;
      var o = 0;
      while (i in params) {
        i++;
      }
      while (o in parent) {
        o++;
      }
      for (i--; i >= 0; i--) {
        params[i + o] = params[i];
        if (i < o) {
          delete params[i];
        }
      }
      return mixin(obj, params);
    }
    function restore(fn, obj) {
      var props = new Array(arguments.length - 2);
      var vals = new Array(arguments.length - 2);
      for (var i = 0; i < props.length; i++) {
        props[i] = arguments[i + 2];
        vals[i] = obj[props[i]];
      }
      return function() {
        for (var i2 = 0; i2 < props.length; i2++) {
          obj[props[i2]] = vals[i2];
        }
        return fn.apply(this, arguments);
      };
    }
    function sendOptionsResponse(res, options, next) {
      try {
        var body = options.join(",");
        res.set("Allow", body);
        res.send(body);
      } catch (err) {
        next(err);
      }
    }
    function wrap(old, fn) {
      return function proxy() {
        var args = new Array(arguments.length + 1);
        args[0] = old;
        for (var i = 0, len = arguments.length; i < len; i++) {
          args[i + 1] = arguments[i];
        }
        fn.apply(this, args);
      };
    }
  }
});

// node_modules/express/lib/middleware/init.js
var require_init = __commonJS({
  "node_modules/express/lib/middleware/init.js"(exports) {
    "use strict";
    var setPrototypeOf = require_setprototypeof();
    exports.init = function(app2) {
      return function expressInit(req, res, next) {
        if (app2.enabled("x-powered-by")) res.setHeader("X-Powered-By", "Express");
        req.res = res;
        res.req = req;
        req.next = next;
        setPrototypeOf(req, app2.request);
        setPrototypeOf(res, app2.response);
        res.locals = res.locals || /* @__PURE__ */ Object.create(null);
        next();
      };
    };
  }
});

// node_modules/express/lib/middleware/query.js
var require_query = __commonJS({
  "node_modules/express/lib/middleware/query.js"(exports, module) {
    "use strict";
    var merge = require_utils_merge();
    var parseUrl = require_parseurl();
    var qs = require_lib();
    module.exports = function query(options) {
      var opts = merge({}, options);
      var queryparse = qs.parse;
      if (typeof options === "function") {
        queryparse = options;
        opts = void 0;
      }
      if (opts !== void 0 && opts.allowPrototypes === void 0) {
        opts.allowPrototypes = true;
      }
      return function query2(req, res, next) {
        if (!req.query) {
          var val = parseUrl(req).query;
          req.query = queryparse(val, opts);
        }
        next();
      };
    };
  }
});

// node_modules/express/lib/view.js
var require_view = __commonJS({
  "node_modules/express/lib/view.js"(exports, module) {
    "use strict";
    var debug = require_src3()("express:view");
    var path = __require("path");
    var fs = __require("fs");
    var dirname3 = path.dirname;
    var basename2 = path.basename;
    var extname2 = path.extname;
    var join6 = path.join;
    var resolve = path.resolve;
    module.exports = View;
    function View(name, options) {
      var opts = options || {};
      this.defaultEngine = opts.defaultEngine;
      this.ext = extname2(name);
      this.name = name;
      this.root = opts.root;
      if (!this.ext && !this.defaultEngine) {
        throw new Error("No default engine was specified and no extension was provided.");
      }
      var fileName = name;
      if (!this.ext) {
        this.ext = this.defaultEngine[0] !== "." ? "." + this.defaultEngine : this.defaultEngine;
        fileName += this.ext;
      }
      if (!opts.engines[this.ext]) {
        var mod = this.ext.slice(1);
        debug('require "%s"', mod);
        var fn = __require(mod).__express;
        if (typeof fn !== "function") {
          throw new Error('Module "' + mod + '" does not provide a view engine.');
        }
        opts.engines[this.ext] = fn;
      }
      this.engine = opts.engines[this.ext];
      this.path = this.lookup(fileName);
    }
    View.prototype.lookup = function lookup(name) {
      var path2;
      var roots = [].concat(this.root);
      debug('lookup "%s"', name);
      for (var i = 0; i < roots.length && !path2; i++) {
        var root = roots[i];
        var loc = resolve(root, name);
        var dir = dirname3(loc);
        var file = basename2(loc);
        path2 = this.resolve(dir, file);
      }
      return path2;
    };
    View.prototype.render = function render(options, callback) {
      debug('render "%s"', this.path);
      this.engine(this.path, options, callback);
    };
    View.prototype.resolve = function resolve2(dir, file) {
      var ext = this.ext;
      var path2 = join6(dir, file);
      var stat4 = tryStat(path2);
      if (stat4 && stat4.isFile()) {
        return path2;
      }
      path2 = join6(dir, basename2(file, ext), "index" + ext);
      stat4 = tryStat(path2);
      if (stat4 && stat4.isFile()) {
        return path2;
      }
    };
    function tryStat(path2) {
      debug('stat "%s"', path2);
      try {
        return fs.statSync(path2);
      } catch (e) {
        return void 0;
      }
    }
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module) {
    "use strict";
    var buffer = __require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/content-disposition/index.js
var require_content_disposition = __commonJS({
  "node_modules/content-disposition/index.js"(exports, module) {
    "use strict";
    module.exports = contentDisposition;
    module.exports.parse = parse;
    var basename2 = __require("path").basename;
    var Buffer2 = require_safe_buffer().Buffer;
    var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g;
    var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/;
    var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g;
    var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g;
    var QESC_REGEXP = /\\([\u0000-\u007f])/g;
    var QUOTE_REGEXP = /([\\"])/g;
    var PARAM_REGEXP = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g;
    var TEXT_REGEXP = /^[\x20-\x7e\x80-\xff]+$/;
    var TOKEN_REGEXP = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/;
    var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/;
    var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/;
    function contentDisposition(filename, options) {
      var opts = options || {};
      var type = opts.type || "attachment";
      var params = createparams(filename, opts.fallback);
      return format(new ContentDisposition(type, params));
    }
    function createparams(filename, fallback) {
      if (filename === void 0) {
        return;
      }
      var params = {};
      if (typeof filename !== "string") {
        throw new TypeError("filename must be a string");
      }
      if (fallback === void 0) {
        fallback = true;
      }
      if (typeof fallback !== "string" && typeof fallback !== "boolean") {
        throw new TypeError("fallback must be a string or boolean");
      }
      if (typeof fallback === "string" && NON_LATIN1_REGEXP.test(fallback)) {
        throw new TypeError("fallback must be ISO-8859-1 string");
      }
      var name = basename2(filename);
      var isQuotedString = TEXT_REGEXP.test(name);
      var fallbackName = typeof fallback !== "string" ? fallback && getlatin1(name) : basename2(fallback);
      var hasFallback = typeof fallbackName === "string" && fallbackName !== name;
      if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
        params["filename*"] = name;
      }
      if (isQuotedString || hasFallback) {
        params.filename = hasFallback ? fallbackName : name;
      }
      return params;
    }
    function format(obj) {
      var parameters = obj.parameters;
      var type = obj.type;
      if (!type || typeof type !== "string" || !TOKEN_REGEXP.test(type)) {
        throw new TypeError("invalid type");
      }
      var string = String(type).toLowerCase();
      if (parameters && typeof parameters === "object") {
        var param;
        var params = Object.keys(parameters).sort();
        for (var i = 0; i < params.length; i++) {
          param = params[i];
          var val = param.substr(-1) === "*" ? ustring(parameters[param]) : qstring(parameters[param]);
          string += "; " + param + "=" + val;
        }
      }
      return string;
    }
    function decodefield(str) {
      var match = EXT_VALUE_REGEXP.exec(str);
      if (!match) {
        throw new TypeError("invalid extended field value");
      }
      var charset = match[1].toLowerCase();
      var encoded = match[2];
      var value;
      var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode);
      switch (charset) {
        case "iso-8859-1":
          value = getlatin1(binary);
          break;
        case "utf-8":
          value = Buffer2.from(binary, "binary").toString("utf8");
          break;
        default:
          throw new TypeError("unsupported charset in extended field");
      }
      return value;
    }
    function getlatin1(val) {
      return String(val).replace(NON_LATIN1_REGEXP, "?");
    }
    function parse(string) {
      if (!string || typeof string !== "string") {
        throw new TypeError("argument string is required");
      }
      var match = DISPOSITION_TYPE_REGEXP.exec(string);
      if (!match) {
        throw new TypeError("invalid type format");
      }
      var index = match[0].length;
      var type = match[1].toLowerCase();
      var key;
      var names = [];
      var params = {};
      var value;
      index = PARAM_REGEXP.lastIndex = match[0].substr(-1) === ";" ? index - 1 : index;
      while (match = PARAM_REGEXP.exec(string)) {
        if (match.index !== index) {
          throw new TypeError("invalid parameter format");
        }
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (names.indexOf(key) !== -1) {
          throw new TypeError("invalid duplicate parameter");
        }
        names.push(key);
        if (key.indexOf("*") + 1 === key.length) {
          key = key.slice(0, -1);
          value = decodefield(value);
          params[key] = value;
          continue;
        }
        if (typeof params[key] === "string") {
          continue;
        }
        if (value[0] === '"') {
          value = value.substr(1, value.length - 2).replace(QESC_REGEXP, "$1");
        }
        params[key] = value;
      }
      if (index !== -1 && index !== string.length) {
        throw new TypeError("invalid parameter format");
      }
      return new ContentDisposition(type, params);
    }
    function pdecode(str, hex) {
      return String.fromCharCode(parseInt(hex, 16));
    }
    function pencode(char) {
      return "%" + String(char).charCodeAt(0).toString(16).toUpperCase();
    }
    function qstring(val) {
      var str = String(val);
      return '"' + str.replace(QUOTE_REGEXP, "\\$1") + '"';
    }
    function ustring(val) {
      var str = String(val);
      var encoded = encodeURIComponent(str).replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode);
      return "UTF-8''" + encoded;
    }
    function ContentDisposition(type, parameters) {
      this.type = type;
      this.parameters = parameters;
    }
  }
});

// node_modules/send/node_modules/debug/node_modules/ms/index.js
var require_ms4 = __commonJS({
  "node_modules/send/node_modules/debug/node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isNaN(val) === false) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      if (ms >= d) {
        return Math.round(ms / d) + "d";
      }
      if (ms >= h) {
        return Math.round(ms / h) + "h";
      }
      if (ms >= m) {
        return Math.round(ms / m) + "m";
      }
      if (ms >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
    }
    function plural(ms, n, name) {
      if (ms < n) {
        return;
      }
      if (ms < n * 1.5) {
        return Math.floor(ms / n) + " " + name;
      }
      return Math.ceil(ms / n) + " " + name + "s";
    }
  }
});

// node_modules/send/node_modules/debug/src/debug.js
var require_debug4 = __commonJS({
  "node_modules/send/node_modules/debug/src/debug.js"(exports, module) {
    "use strict";
    exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
    exports.coerce = coerce;
    exports.disable = disable;
    exports.enable = enable;
    exports.enabled = enabled;
    exports.humanize = require_ms4();
    exports.names = [];
    exports.skips = [];
    exports.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0, i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports.colors[Math.abs(hash) % exports.colors.length];
    }
    function createDebug(namespace) {
      function debug() {
        if (!debug.enabled) return;
        var self = debug;
        var curr = +/* @__PURE__ */ new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.enabled = exports.enabled(namespace);
      debug.useColors = exports.useColors();
      debug.color = selectColor(namespace);
      if ("function" === typeof exports.init) {
        exports.init(debug);
      }
      return debug;
    }
    function enable(namespaces) {
      exports.save(namespaces);
      exports.names = [];
      exports.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports.skips.length; i < len; i++) {
        if (exports.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports.names.length; i < len; i++) {
        if (exports.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  }
});

// node_modules/send/node_modules/debug/src/browser.js
var require_browser4 = __commonJS({
  "node_modules/send/node_modules/debug/src/browser.js"(exports, module) {
    "use strict";
    exports = module.exports = require_debug4();
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
    exports.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
        return true;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    exports.formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports.storage.removeItem("debug");
        } else {
          exports.storage.debug = namespaces;
        }
      } catch (e) {
      }
    }
    function load() {
      var r;
      try {
        r = exports.storage.debug;
      } catch (e) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {
      }
    }
  }
});

// node_modules/send/node_modules/debug/src/node.js
var require_node4 = __commonJS({
  "node_modules/send/node_modules/debug/src/node.js"(exports, module) {
    "use strict";
    var tty = __require("tty");
    var util = __require("util");
    exports = module.exports = require_debug4();
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.colors = [6, 2, 3, 4, 5, 1];
    exports.inspectOpts = Object.keys(process.env).filter(function(key) {
      return /^debug_/i.test(key);
    }).reduce(function(obj, key) {
      var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
        return k.toUpperCase();
      });
      var val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
      else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
      else if (val === "null") val = null;
      else val = Number(val);
      obj[prop] = val;
      return obj;
    }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(function() {
      }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
    }
    var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
    }
    exports.formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
        return str.trim();
      }).join(" ");
    };
    exports.formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push("\x1B[3" + c + "m+" + exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = (/* @__PURE__ */ new Date()).toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream2;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream2 = new tty.WriteStream(fd2);
          stream2._type = "tty";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        case "FILE":
          var fs = __require("fs");
          stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
          stream2._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = __require("net");
          stream2 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true
          });
          stream2.readable = false;
          stream2.read = null;
          stream2._type = "pipe";
          if (stream2._handle && stream2._handle.unref) {
            stream2._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream2.fd = fd2;
      stream2._isStdio = true;
      return stream2;
    }
    function init(debug) {
      debug.inspectOpts = {};
      var keys = Object.keys(exports.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    exports.enable(load());
  }
});

// node_modules/send/node_modules/debug/src/index.js
var require_src4 = __commonJS({
  "node_modules/send/node_modules/debug/src/index.js"(exports, module) {
    "use strict";
    if (typeof process !== "undefined" && process.type === "renderer") {
      module.exports = require_browser4();
    } else {
      module.exports = require_node4();
    }
  }
});

// node_modules/etag/index.js
var require_etag = __commonJS({
  "node_modules/etag/index.js"(exports, module) {
    "use strict";
    module.exports = etag;
    var crypto = __require("crypto");
    var Stats = __require("fs").Stats;
    var toString = Object.prototype.toString;
    function entitytag(entity) {
      if (entity.length === 0) {
        return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
      }
      var hash = crypto.createHash("sha1").update(entity, "utf8").digest("base64").substring(0, 27);
      var len = typeof entity === "string" ? Buffer.byteLength(entity, "utf8") : entity.length;
      return '"' + len.toString(16) + "-" + hash + '"';
    }
    function etag(entity, options) {
      if (entity == null) {
        throw new TypeError("argument entity is required");
      }
      var isStats = isstats(entity);
      var weak = options && typeof options.weak === "boolean" ? options.weak : isStats;
      if (!isStats && typeof entity !== "string" && !Buffer.isBuffer(entity)) {
        throw new TypeError("argument entity must be string, Buffer, or fs.Stats");
      }
      var tag = isStats ? stattag(entity) : entitytag(entity);
      return weak ? "W/" + tag : tag;
    }
    function isstats(obj) {
      if (typeof Stats === "function" && obj instanceof Stats) {
        return true;
      }
      return obj && typeof obj === "object" && "ctime" in obj && toString.call(obj.ctime) === "[object Date]" && "mtime" in obj && toString.call(obj.mtime) === "[object Date]" && "ino" in obj && typeof obj.ino === "number" && "size" in obj && typeof obj.size === "number";
    }
    function stattag(stat4) {
      var mtime = stat4.mtime.getTime().toString(16);
      var size = stat4.size.toString(16);
      return '"' + size + "-" + mtime + '"';
    }
  }
});

// node_modules/fresh/index.js
var require_fresh = __commonJS({
  "node_modules/fresh/index.js"(exports, module) {
    "use strict";
    var CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
    module.exports = fresh;
    function fresh(reqHeaders, resHeaders) {
      var modifiedSince = reqHeaders["if-modified-since"];
      var noneMatch = reqHeaders["if-none-match"];
      if (!modifiedSince && !noneMatch) {
        return false;
      }
      var cacheControl = reqHeaders["cache-control"];
      if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {
        return false;
      }
      if (noneMatch && noneMatch !== "*") {
        var etag = resHeaders["etag"];
        if (!etag) {
          return false;
        }
        var etagStale = true;
        var matches = parseTokenList(noneMatch);
        for (var i = 0; i < matches.length; i++) {
          var match = matches[i];
          if (match === etag || match === "W/" + etag || "W/" + match === etag) {
            etagStale = false;
            break;
          }
        }
        if (etagStale) {
          return false;
        }
      }
      if (modifiedSince) {
        var lastModified = resHeaders["last-modified"];
        var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince));
        if (modifiedStale) {
          return false;
        }
      }
      return true;
    }
    function parseHttpDate(date) {
      var timestamp = date && Date.parse(date);
      return typeof timestamp === "number" ? timestamp : NaN;
    }
    function parseTokenList(str) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = str.length; i < len; i++) {
        switch (str.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            list.push(str.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      list.push(str.substring(start, end));
      return list;
    }
  }
});

// orca-plugin-shim:mime-types-json
var require_mime_types_json = __commonJS({
  "orca-plugin-shim:mime-types-json"(exports, module) {
    module.exports = { "text/html": ["html", "htm"], "text/css": ["css"], "application/javascript": ["js", "mjs"], "text/javascript": ["js", "mjs"], "application/json": ["json", "map"], "text/plain": ["txt", "log"], "text/markdown": ["md"], "text/csv": ["csv"], "text/event-stream": [], "image/svg+xml": ["svg"], "image/png": ["png"], "image/jpeg": ["jpeg", "jpg"], "image/webp": ["webp"], "image/gif": ["gif"], "image/avif": ["avif"], "image/x-icon": ["ico"], "font/woff": ["woff"], "font/woff2": ["woff2"], "application/xml": ["xml"], "application/wasm": ["wasm"], "application/octet-stream": ["bin"], "application/x-www-form-urlencoded": [], "multipart/form-data": [] };
  }
});

// node_modules/mime/mime.js
var require_mime = __commonJS({
  "node_modules/mime/mime.js"(exports, module) {
    "use strict";
    var path = __require("path");
    var fs = __require("fs");
    function Mime() {
      this.types = /* @__PURE__ */ Object.create(null);
      this.extensions = /* @__PURE__ */ Object.create(null);
    }
    Mime.prototype.define = function(map) {
      for (var type in map) {
        var exts = map[type];
        for (var i = 0; i < exts.length; i++) {
          if (process.env.DEBUG_MIME && this.types[exts[i]]) {
            console.warn((this._loading || "define()").replace(/.*\//, ""), 'changes "' + exts[i] + '" extension type from ' + this.types[exts[i]] + " to " + type);
          }
          this.types[exts[i]] = type;
        }
        if (!this.extensions[type]) {
          this.extensions[type] = exts[0];
        }
      }
    };
    Mime.prototype.load = function(file) {
      this._loading = file;
      var map = {}, content = fs.readFileSync(file, "ascii"), lines = content.split(/[\r\n]+/);
      lines.forEach(function(line) {
        var fields = line.replace(/\s*#.*|^\s*|\s*$/g, "").split(/\s+/);
        map[fields.shift()] = fields;
      });
      this.define(map);
      this._loading = null;
    };
    Mime.prototype.lookup = function(path2, fallback) {
      var ext = path2.replace(/^.*[\.\/\\]/, "").toLowerCase();
      return this.types[ext] || fallback || this.default_type;
    };
    Mime.prototype.extension = function(mimeType) {
      var type = mimeType.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();
      return this.extensions[type];
    };
    var mime = new Mime();
    mime.define(require_mime_types_json());
    mime.default_type = mime.lookup("bin");
    mime.Mime = Mime;
    mime.charsets = {
      lookup: function(mimeType, fallback) {
        return /^text\/|^application\/(javascript|json)/.test(mimeType) ? "UTF-8" : fallback;
      }
    };
    module.exports = mime;
  }
});

// node_modules/ms/index.js
var require_ms5 = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/range-parser/index.js
var require_range_parser = __commonJS({
  "node_modules/range-parser/index.js"(exports, module) {
    "use strict";
    module.exports = rangeParser;
    function rangeParser(size, str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var index = str.indexOf("=");
      if (index === -1) {
        return -2;
      }
      var arr = str.slice(index + 1).split(",");
      var ranges = [];
      ranges.type = str.slice(0, index);
      for (var i = 0; i < arr.length; i++) {
        var range = arr[i].split("-");
        var start = parseInt(range[0], 10);
        var end = parseInt(range[1], 10);
        if (isNaN(start)) {
          start = size - end;
          end = size - 1;
        } else if (isNaN(end)) {
          end = size - 1;
        }
        if (end > size - 1) {
          end = size - 1;
        }
        if (isNaN(start) || isNaN(end) || start > end || start < 0) {
          continue;
        }
        ranges.push({
          start,
          end
        });
      }
      if (ranges.length < 1) {
        return -1;
      }
      return options && options.combine ? combineRanges(ranges) : ranges;
    }
    function combineRanges(ranges) {
      var ordered = ranges.map(mapWithIndex).sort(sortByRangeStart);
      for (var j = 0, i = 1; i < ordered.length; i++) {
        var range = ordered[i];
        var current = ordered[j];
        if (range.start > current.end + 1) {
          ordered[++j] = range;
        } else if (range.end > current.end) {
          current.end = range.end;
          current.index = Math.min(current.index, range.index);
        }
      }
      ordered.length = j + 1;
      var combined = ordered.sort(sortByRangeIndex).map(mapWithoutIndex);
      combined.type = ranges.type;
      return combined;
    }
    function mapWithIndex(range, index) {
      return {
        start: range.start,
        end: range.end,
        index
      };
    }
    function mapWithoutIndex(range) {
      return {
        start: range.start,
        end: range.end
      };
    }
    function sortByRangeIndex(a, b) {
      return a.index - b.index;
    }
    function sortByRangeStart(a, b) {
      return a.start - b.start;
    }
  }
});

// node_modules/send/index.js
var require_send = __commonJS({
  "node_modules/send/index.js"(exports, module) {
    "use strict";
    var createError = require_http_errors();
    var debug = require_src4()("send");
    var deprecate = require_depd()("send");
    var destroy = require_destroy();
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var etag = require_etag();
    var fresh = require_fresh();
    var fs = __require("fs");
    var mime = require_mime();
    var ms = require_ms5();
    var onFinished = require_on_finished();
    var parseRange = require_range_parser();
    var path = __require("path");
    var statuses = require_statuses();
    var Stream = __require("stream");
    var util = __require("util");
    var extname2 = path.extname;
    var join6 = path.join;
    var normalize3 = path.normalize;
    var resolve = path.resolve;
    var sep = path.sep;
    var BYTES_RANGE_REGEXP = /^ *bytes=/;
    var MAX_MAXAGE = 60 * 60 * 24 * 365 * 1e3;
    var UP_PATH_REGEXP = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
    module.exports = send;
    module.exports.mime = mime;
    function send(req, path2, options) {
      return new SendStream(req, path2, options);
    }
    function SendStream(req, path2, options) {
      Stream.call(this);
      var opts = options || {};
      this.options = opts;
      this.path = path2;
      this.req = req;
      this._acceptRanges = opts.acceptRanges !== void 0 ? Boolean(opts.acceptRanges) : true;
      this._cacheControl = opts.cacheControl !== void 0 ? Boolean(opts.cacheControl) : true;
      this._etag = opts.etag !== void 0 ? Boolean(opts.etag) : true;
      this._dotfiles = opts.dotfiles !== void 0 ? opts.dotfiles : "ignore";
      if (this._dotfiles !== "ignore" && this._dotfiles !== "allow" && this._dotfiles !== "deny") {
        throw new TypeError('dotfiles option must be "allow", "deny", or "ignore"');
      }
      this._hidden = Boolean(opts.hidden);
      if (opts.hidden !== void 0) {
        deprecate("hidden: use dotfiles: '" + (this._hidden ? "allow" : "ignore") + "' instead");
      }
      if (opts.dotfiles === void 0) {
        this._dotfiles = void 0;
      }
      this._extensions = opts.extensions !== void 0 ? normalizeList(opts.extensions, "extensions option") : [];
      this._immutable = opts.immutable !== void 0 ? Boolean(opts.immutable) : false;
      this._index = opts.index !== void 0 ? normalizeList(opts.index, "index option") : ["index.html"];
      this._lastModified = opts.lastModified !== void 0 ? Boolean(opts.lastModified) : true;
      this._maxage = opts.maxAge || opts.maxage;
      this._maxage = typeof this._maxage === "string" ? ms(this._maxage) : Number(this._maxage);
      this._maxage = !isNaN(this._maxage) ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE) : 0;
      this._root = opts.root ? resolve(opts.root) : null;
      if (!this._root && opts.from) {
        this.from(opts.from);
      }
    }
    util.inherits(SendStream, Stream);
    SendStream.prototype.etag = deprecate.function(function etag2(val) {
      this._etag = Boolean(val);
      debug("etag %s", this._etag);
      return this;
    }, "send.etag: pass etag as option");
    SendStream.prototype.hidden = deprecate.function(function hidden(val) {
      this._hidden = Boolean(val);
      this._dotfiles = void 0;
      debug("hidden %s", this._hidden);
      return this;
    }, "send.hidden: use dotfiles option");
    SendStream.prototype.index = deprecate.function(function index(paths) {
      var index2 = !paths ? [] : normalizeList(paths, "paths argument");
      debug("index %o", paths);
      this._index = index2;
      return this;
    }, "send.index: pass index as option");
    SendStream.prototype.root = function root(path2) {
      this._root = resolve(String(path2));
      debug("root %s", this._root);
      return this;
    };
    SendStream.prototype.from = deprecate.function(
      SendStream.prototype.root,
      "send.from: pass root as option"
    );
    SendStream.prototype.root = deprecate.function(
      SendStream.prototype.root,
      "send.root: pass root as option"
    );
    SendStream.prototype.maxage = deprecate.function(function maxage(maxAge) {
      this._maxage = typeof maxAge === "string" ? ms(maxAge) : Number(maxAge);
      this._maxage = !isNaN(this._maxage) ? Math.min(Math.max(0, this._maxage), MAX_MAXAGE) : 0;
      debug("max-age %d", this._maxage);
      return this;
    }, "send.maxage: pass maxAge as option");
    SendStream.prototype.error = function error(status, err) {
      if (hasListeners(this, "error")) {
        return this.emit("error", createHttpError(status, err));
      }
      var res = this.res;
      var msg = statuses.message[status] || String(status);
      var doc = createHtmlDocument("Error", escapeHtml(msg));
      clearHeaders(res);
      if (err && err.headers) {
        setHeaders(res, err.headers);
      }
      res.statusCode = status;
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.setHeader("Content-Length", Buffer.byteLength(doc));
      res.setHeader("Content-Security-Policy", "default-src 'none'");
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.end(doc);
    };
    SendStream.prototype.hasTrailingSlash = function hasTrailingSlash() {
      return this.path[this.path.length - 1] === "/";
    };
    SendStream.prototype.isConditionalGET = function isConditionalGET() {
      return this.req.headers["if-match"] || this.req.headers["if-unmodified-since"] || this.req.headers["if-none-match"] || this.req.headers["if-modified-since"];
    };
    SendStream.prototype.isPreconditionFailure = function isPreconditionFailure() {
      var req = this.req;
      var res = this.res;
      var match = req.headers["if-match"];
      if (match) {
        var etag2 = res.getHeader("ETag");
        return !etag2 || match !== "*" && parseTokenList(match).every(function(match2) {
          return match2 !== etag2 && match2 !== "W/" + etag2 && "W/" + match2 !== etag2;
        });
      }
      var unmodifiedSince = parseHttpDate(req.headers["if-unmodified-since"]);
      if (!isNaN(unmodifiedSince)) {
        var lastModified = parseHttpDate(res.getHeader("Last-Modified"));
        return isNaN(lastModified) || lastModified > unmodifiedSince;
      }
      return false;
    };
    SendStream.prototype.removeContentHeaderFields = function removeContentHeaderFields() {
      var res = this.res;
      res.removeHeader("Content-Encoding");
      res.removeHeader("Content-Language");
      res.removeHeader("Content-Length");
      res.removeHeader("Content-Range");
      res.removeHeader("Content-Type");
    };
    SendStream.prototype.notModified = function notModified() {
      var res = this.res;
      debug("not modified");
      this.removeContentHeaderFields();
      res.statusCode = 304;
      res.end();
    };
    SendStream.prototype.headersAlreadySent = function headersAlreadySent() {
      var err = new Error("Can't set headers after they are sent.");
      debug("headers already sent");
      this.error(500, err);
    };
    SendStream.prototype.isCachable = function isCachable() {
      var statusCode = this.res.statusCode;
      return statusCode >= 200 && statusCode < 300 || statusCode === 304;
    };
    SendStream.prototype.onStatError = function onStatError(error) {
      switch (error.code) {
        case "ENAMETOOLONG":
        case "ENOENT":
        case "ENOTDIR":
          this.error(404, error);
          break;
        default:
          this.error(500, error);
          break;
      }
    };
    SendStream.prototype.isFresh = function isFresh() {
      return fresh(this.req.headers, {
        etag: this.res.getHeader("ETag"),
        "last-modified": this.res.getHeader("Last-Modified")
      });
    };
    SendStream.prototype.isRangeFresh = function isRangeFresh() {
      var ifRange = this.req.headers["if-range"];
      if (!ifRange) {
        return true;
      }
      if (ifRange.indexOf('"') !== -1) {
        var etag2 = this.res.getHeader("ETag");
        return Boolean(etag2 && ifRange.indexOf(etag2) !== -1);
      }
      var lastModified = this.res.getHeader("Last-Modified");
      return parseHttpDate(lastModified) <= parseHttpDate(ifRange);
    };
    SendStream.prototype.redirect = function redirect(path2) {
      var res = this.res;
      if (hasListeners(this, "directory")) {
        this.emit("directory", res, path2);
        return;
      }
      if (this.hasTrailingSlash()) {
        this.error(403);
        return;
      }
      var loc = encodeUrl(collapseLeadingSlashes(this.path + "/"));
      var doc = createHtmlDocument("Redirecting", "Redirecting to " + escapeHtml(loc));
      res.statusCode = 301;
      res.setHeader("Content-Type", "text/html; charset=UTF-8");
      res.setHeader("Content-Length", Buffer.byteLength(doc));
      res.setHeader("Content-Security-Policy", "default-src 'none'");
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("Location", loc);
      res.end(doc);
    };
    SendStream.prototype.pipe = function pipe(res) {
      var root = this._root;
      this.res = res;
      var path2 = decode(this.path);
      if (path2 === -1) {
        this.error(400);
        return res;
      }
      if (~path2.indexOf("\0")) {
        this.error(400);
        return res;
      }
      var parts;
      if (root !== null) {
        if (path2) {
          path2 = normalize3("." + sep + path2);
        }
        if (UP_PATH_REGEXP.test(path2)) {
          debug('malicious path "%s"', path2);
          this.error(403);
          return res;
        }
        parts = path2.split(sep);
        path2 = normalize3(join6(root, path2));
      } else {
        if (UP_PATH_REGEXP.test(path2)) {
          debug('malicious path "%s"', path2);
          this.error(403);
          return res;
        }
        parts = normalize3(path2).split(sep);
        path2 = resolve(path2);
      }
      if (containsDotFile(parts)) {
        var access = this._dotfiles;
        if (access === void 0) {
          access = parts[parts.length - 1][0] === "." ? this._hidden ? "allow" : "ignore" : "allow";
        }
        debug('%s dotfile "%s"', access, path2);
        switch (access) {
          case "allow":
            break;
          case "deny":
            this.error(403);
            return res;
          case "ignore":
          default:
            this.error(404);
            return res;
        }
      }
      if (this._index.length && this.hasTrailingSlash()) {
        this.sendIndex(path2);
        return res;
      }
      this.sendFile(path2);
      return res;
    };
    SendStream.prototype.send = function send2(path2, stat4) {
      var len = stat4.size;
      var options = this.options;
      var opts = {};
      var res = this.res;
      var req = this.req;
      var ranges = req.headers.range;
      var offset = options.start || 0;
      if (headersSent(res)) {
        this.headersAlreadySent();
        return;
      }
      debug('pipe "%s"', path2);
      this.setHeader(path2, stat4);
      this.type(path2);
      if (this.isConditionalGET()) {
        if (this.isPreconditionFailure()) {
          this.error(412);
          return;
        }
        if (this.isCachable() && this.isFresh()) {
          this.notModified();
          return;
        }
      }
      len = Math.max(0, len - offset);
      if (options.end !== void 0) {
        var bytes = options.end - offset + 1;
        if (len > bytes) len = bytes;
      }
      if (this._acceptRanges && BYTES_RANGE_REGEXP.test(ranges)) {
        ranges = parseRange(len, ranges, {
          combine: true
        });
        if (!this.isRangeFresh()) {
          debug("range stale");
          ranges = -2;
        }
        if (ranges === -1) {
          debug("range unsatisfiable");
          res.setHeader("Content-Range", contentRange("bytes", len));
          return this.error(416, {
            headers: { "Content-Range": res.getHeader("Content-Range") }
          });
        }
        if (ranges !== -2 && ranges.length === 1) {
          debug("range %j", ranges);
          res.statusCode = 206;
          res.setHeader("Content-Range", contentRange("bytes", len, ranges[0]));
          offset += ranges[0].start;
          len = ranges[0].end - ranges[0].start + 1;
        }
      }
      for (var prop in options) {
        opts[prop] = options[prop];
      }
      opts.start = offset;
      opts.end = Math.max(offset, offset + len - 1);
      res.setHeader("Content-Length", len);
      if (req.method === "HEAD") {
        res.end();
        return;
      }
      this.stream(path2, opts);
    };
    SendStream.prototype.sendFile = function sendFile(path2) {
      var i = 0;
      var self = this;
      debug('stat "%s"', path2);
      fs.stat(path2, function onstat(err, stat4) {
        if (err && err.code === "ENOENT" && !extname2(path2) && path2[path2.length - 1] !== sep) {
          return next(err);
        }
        if (err) return self.onStatError(err);
        if (stat4.isDirectory()) return self.redirect(path2);
        self.emit("file", path2, stat4);
        self.send(path2, stat4);
      });
      function next(err) {
        if (self._extensions.length <= i) {
          return err ? self.onStatError(err) : self.error(404);
        }
        var p = path2 + "." + self._extensions[i++];
        debug('stat "%s"', p);
        fs.stat(p, function(err2, stat4) {
          if (err2) return next(err2);
          if (stat4.isDirectory()) return next();
          self.emit("file", p, stat4);
          self.send(p, stat4);
        });
      }
    };
    SendStream.prototype.sendIndex = function sendIndex(path2) {
      var i = -1;
      var self = this;
      function next(err) {
        if (++i >= self._index.length) {
          if (err) return self.onStatError(err);
          return self.error(404);
        }
        var p = join6(path2, self._index[i]);
        debug('stat "%s"', p);
        fs.stat(p, function(err2, stat4) {
          if (err2) return next(err2);
          if (stat4.isDirectory()) return next();
          self.emit("file", p, stat4);
          self.send(p, stat4);
        });
      }
      next();
    };
    SendStream.prototype.stream = function stream(path2, options) {
      var self = this;
      var res = this.res;
      var stream2 = fs.createReadStream(path2, options);
      this.emit("stream", stream2);
      stream2.pipe(res);
      function cleanup() {
        destroy(stream2, true);
      }
      onFinished(res, cleanup);
      stream2.on("error", function onerror(err) {
        cleanup();
        self.onStatError(err);
      });
      stream2.on("end", function onend() {
        self.emit("end");
      });
    };
    SendStream.prototype.type = function type(path2) {
      var res = this.res;
      if (res.getHeader("Content-Type")) return;
      var type2 = mime.lookup(path2);
      if (!type2) {
        debug("no content-type");
        return;
      }
      var charset = mime.charsets.lookup(type2);
      debug("content-type %s", type2);
      res.setHeader("Content-Type", type2 + (charset ? "; charset=" + charset : ""));
    };
    SendStream.prototype.setHeader = function setHeader(path2, stat4) {
      var res = this.res;
      this.emit("headers", res, path2, stat4);
      if (this._acceptRanges && !res.getHeader("Accept-Ranges")) {
        debug("accept ranges");
        res.setHeader("Accept-Ranges", "bytes");
      }
      if (this._cacheControl && !res.getHeader("Cache-Control")) {
        var cacheControl = "public, max-age=" + Math.floor(this._maxage / 1e3);
        if (this._immutable) {
          cacheControl += ", immutable";
        }
        debug("cache-control %s", cacheControl);
        res.setHeader("Cache-Control", cacheControl);
      }
      if (this._lastModified && !res.getHeader("Last-Modified")) {
        var modified = stat4.mtime.toUTCString();
        debug("modified %s", modified);
        res.setHeader("Last-Modified", modified);
      }
      if (this._etag && !res.getHeader("ETag")) {
        var val = etag(stat4);
        debug("etag %s", val);
        res.setHeader("ETag", val);
      }
    };
    function clearHeaders(res) {
      var headers = getHeaderNames(res);
      for (var i = 0; i < headers.length; i++) {
        res.removeHeader(headers[i]);
      }
    }
    function collapseLeadingSlashes(str) {
      for (var i = 0; i < str.length; i++) {
        if (str[i] !== "/") {
          break;
        }
      }
      return i > 1 ? "/" + str.substr(i) : str;
    }
    function containsDotFile(parts) {
      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        if (part.length > 1 && part[0] === ".") {
          return true;
        }
      }
      return false;
    }
    function contentRange(type, size, range) {
      return type + " " + (range ? range.start + "-" + range.end : "*") + "/" + size;
    }
    function createHtmlDocument(title, body) {
      return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>' + title + "</title>\n</head>\n<body>\n<pre>" + body + "</pre>\n</body>\n</html>\n";
    }
    function createHttpError(status, err) {
      if (!err) {
        return createError(status);
      }
      return err instanceof Error ? createError(status, err, { expose: false }) : createError(status, err);
    }
    function decode(path2) {
      try {
        return decodeURIComponent(path2);
      } catch (err) {
        return -1;
      }
    }
    function getHeaderNames(res) {
      return typeof res.getHeaderNames !== "function" ? Object.keys(res._headers || {}) : res.getHeaderNames();
    }
    function hasListeners(emitter, type) {
      var count = typeof emitter.listenerCount !== "function" ? emitter.listeners(type).length : emitter.listenerCount(type);
      return count > 0;
    }
    function headersSent(res) {
      return typeof res.headersSent !== "boolean" ? Boolean(res._header) : res.headersSent;
    }
    function normalizeList(val, name) {
      var list = [].concat(val || []);
      for (var i = 0; i < list.length; i++) {
        if (typeof list[i] !== "string") {
          throw new TypeError(name + " must be array of strings or false");
        }
      }
      return list;
    }
    function parseHttpDate(date) {
      var timestamp = date && Date.parse(date);
      return typeof timestamp === "number" ? timestamp : NaN;
    }
    function parseTokenList(str) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = str.length; i < len; i++) {
        switch (str.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            if (start !== end) {
              list.push(str.substring(start, end));
            }
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      if (start !== end) {
        list.push(str.substring(start, end));
      }
      return list;
    }
    function setHeaders(res, headers) {
      var keys = Object.keys(headers);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        res.setHeader(key, headers[key]);
      }
    }
  }
});

// node_modules/forwarded/index.js
var require_forwarded = __commonJS({
  "node_modules/forwarded/index.js"(exports, module) {
    "use strict";
    module.exports = forwarded;
    function forwarded(req) {
      if (!req) {
        throw new TypeError("argument req is required");
      }
      var proxyAddrs = parse(req.headers["x-forwarded-for"] || "");
      var socketAddr = getSocketAddr(req);
      var addrs = [socketAddr].concat(proxyAddrs);
      return addrs;
    }
    function getSocketAddr(req) {
      return req.socket ? req.socket.remoteAddress : req.connection.remoteAddress;
    }
    function parse(header) {
      var end = header.length;
      var list = [];
      var start = header.length;
      for (var i = header.length - 1; i >= 0; i--) {
        switch (header.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i;
            }
            break;
          case 44:
            if (start !== end) {
              list.push(header.substring(start, end));
            }
            start = end = i;
            break;
          default:
            start = i;
            break;
        }
      }
      if (start !== end) {
        list.push(header.substring(start, end));
      }
      return list;
    }
  }
});

// node_modules/ipaddr.js/lib/ipaddr.js
var require_ipaddr = __commonJS({
  "node_modules/ipaddr.js/lib/ipaddr.js"(exports, module) {
    "use strict";
    (function() {
      var expandIPv6, ipaddr, ipv4Part, ipv4Regexes, ipv6Part, ipv6Regexes, matchCIDR, root, zoneIndex;
      ipaddr = {};
      root = this;
      if (typeof module !== "undefined" && module !== null && module.exports) {
        module.exports = ipaddr;
      } else {
        root["ipaddr"] = ipaddr;
      }
      matchCIDR = function(first, second, partSize, cidrBits) {
        var part, shift;
        if (first.length !== second.length) {
          throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
        }
        part = 0;
        while (cidrBits > 0) {
          shift = partSize - cidrBits;
          if (shift < 0) {
            shift = 0;
          }
          if (first[part] >> shift !== second[part] >> shift) {
            return false;
          }
          cidrBits -= partSize;
          part += 1;
        }
        return true;
      };
      ipaddr.subnetMatch = function(address, rangeList, defaultName) {
        var k, len, rangeName, rangeSubnets, subnet;
        if (defaultName == null) {
          defaultName = "unicast";
        }
        for (rangeName in rangeList) {
          rangeSubnets = rangeList[rangeName];
          if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) {
            rangeSubnets = [rangeSubnets];
          }
          for (k = 0, len = rangeSubnets.length; k < len; k++) {
            subnet = rangeSubnets[k];
            if (address.kind() === subnet[0].kind()) {
              if (address.match.apply(address, subnet)) {
                return rangeName;
              }
            }
          }
        }
        return defaultName;
      };
      ipaddr.IPv4 = function() {
        function IPv4(octets) {
          var k, len, octet;
          if (octets.length !== 4) {
            throw new Error("ipaddr: ipv4 octet count should be 4");
          }
          for (k = 0, len = octets.length; k < len; k++) {
            octet = octets[k];
            if (!(0 <= octet && octet <= 255)) {
              throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
            }
          }
          this.octets = octets;
        }
        IPv4.prototype.kind = function() {
          return "ipv4";
        };
        IPv4.prototype.toString = function() {
          return this.octets.join(".");
        };
        IPv4.prototype.toNormalizedString = function() {
          return this.toString();
        };
        IPv4.prototype.toByteArray = function() {
          return this.octets.slice(0);
        };
        IPv4.prototype.match = function(other, cidrRange) {
          var ref;
          if (cidrRange === void 0) {
            ref = other, other = ref[0], cidrRange = ref[1];
          }
          if (other.kind() !== "ipv4") {
            throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
          }
          return matchCIDR(this.octets, other.octets, 8, cidrRange);
        };
        IPv4.prototype.SpecialRanges = {
          unspecified: [[new IPv4([0, 0, 0, 0]), 8]],
          broadcast: [[new IPv4([255, 255, 255, 255]), 32]],
          multicast: [[new IPv4([224, 0, 0, 0]), 4]],
          linkLocal: [[new IPv4([169, 254, 0, 0]), 16]],
          loopback: [[new IPv4([127, 0, 0, 0]), 8]],
          carrierGradeNat: [[new IPv4([100, 64, 0, 0]), 10]],
          "private": [[new IPv4([10, 0, 0, 0]), 8], [new IPv4([172, 16, 0, 0]), 12], [new IPv4([192, 168, 0, 0]), 16]],
          reserved: [[new IPv4([192, 0, 0, 0]), 24], [new IPv4([192, 0, 2, 0]), 24], [new IPv4([192, 88, 99, 0]), 24], [new IPv4([198, 51, 100, 0]), 24], [new IPv4([203, 0, 113, 0]), 24], [new IPv4([240, 0, 0, 0]), 4]]
        };
        IPv4.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv4.prototype.toIPv4MappedAddress = function() {
          return ipaddr.IPv6.parse("::ffff:" + this.toString());
        };
        IPv4.prototype.prefixLengthFromSubnetMask = function() {
          var cidr, i, k, octet, stop, zeros, zerotable;
          zerotable = {
            0: 8,
            128: 7,
            192: 6,
            224: 5,
            240: 4,
            248: 3,
            252: 2,
            254: 1,
            255: 0
          };
          cidr = 0;
          stop = false;
          for (i = k = 3; k >= 0; i = k += -1) {
            octet = this.octets[i];
            if (octet in zerotable) {
              zeros = zerotable[octet];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 8) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 32 - cidr;
        };
        return IPv4;
      }();
      ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
      ipv4Regexes = {
        fourOctet: new RegExp("^" + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "$", "i"),
        longValue: new RegExp("^" + ipv4Part + "$", "i")
      };
      ipaddr.IPv4.parser = function(string) {
        var match, parseIntAuto, part, shift, value;
        parseIntAuto = function(string2) {
          if (string2[0] === "0" && string2[1] !== "x") {
            return parseInt(string2, 8);
          } else {
            return parseInt(string2);
          }
        };
        if (match = string.match(ipv4Regexes.fourOctet)) {
          return function() {
            var k, len, ref, results;
            ref = match.slice(1, 6);
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              part = ref[k];
              results.push(parseIntAuto(part));
            }
            return results;
          }();
        } else if (match = string.match(ipv4Regexes.longValue)) {
          value = parseIntAuto(match[1]);
          if (value > 4294967295 || value < 0) {
            throw new Error("ipaddr: address outside defined range");
          }
          return function() {
            var k, results;
            results = [];
            for (shift = k = 0; k <= 24; shift = k += 8) {
              results.push(value >> shift & 255);
            }
            return results;
          }().reverse();
        } else {
          return null;
        }
      };
      ipaddr.IPv6 = function() {
        function IPv6(parts, zoneId) {
          var i, k, l, len, part, ref;
          if (parts.length === 16) {
            this.parts = [];
            for (i = k = 0; k <= 14; i = k += 2) {
              this.parts.push(parts[i] << 8 | parts[i + 1]);
            }
          } else if (parts.length === 8) {
            this.parts = parts;
          } else {
            throw new Error("ipaddr: ipv6 part count should be 8 or 16");
          }
          ref = this.parts;
          for (l = 0, len = ref.length; l < len; l++) {
            part = ref[l];
            if (!(0 <= part && part <= 65535)) {
              throw new Error("ipaddr: ipv6 part should fit in 16 bits");
            }
          }
          if (zoneId) {
            this.zoneId = zoneId;
          }
        }
        IPv6.prototype.kind = function() {
          return "ipv6";
        };
        IPv6.prototype.toString = function() {
          return this.toNormalizedString().replace(/((^|:)(0(:|$))+)/, "::");
        };
        IPv6.prototype.toRFC5952String = function() {
          var bestMatchIndex, bestMatchLength, match, regex, string;
          regex = /((^|:)(0(:|$)){2,})/g;
          string = this.toNormalizedString();
          bestMatchIndex = 0;
          bestMatchLength = -1;
          while (match = regex.exec(string)) {
            if (match[0].length > bestMatchLength) {
              bestMatchIndex = match.index;
              bestMatchLength = match[0].length;
            }
          }
          if (bestMatchLength < 0) {
            return string;
          }
          return string.substring(0, bestMatchIndex) + "::" + string.substring(bestMatchIndex + bestMatchLength);
        };
        IPv6.prototype.toByteArray = function() {
          var bytes, k, len, part, ref;
          bytes = [];
          ref = this.parts;
          for (k = 0, len = ref.length; k < len; k++) {
            part = ref[k];
            bytes.push(part >> 8);
            bytes.push(part & 255);
          }
          return bytes;
        };
        IPv6.prototype.toNormalizedString = function() {
          var addr2, part, suffix;
          addr2 = function() {
            var k, len, ref, results;
            ref = this.parts;
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              part = ref[k];
              results.push(part.toString(16));
            }
            return results;
          }.call(this).join(":");
          suffix = "";
          if (this.zoneId) {
            suffix = "%" + this.zoneId;
          }
          return addr2 + suffix;
        };
        IPv6.prototype.toFixedLengthString = function() {
          var addr2, part, suffix;
          addr2 = function() {
            var k, len, ref, results;
            ref = this.parts;
            results = [];
            for (k = 0, len = ref.length; k < len; k++) {
              part = ref[k];
              results.push(part.toString(16).padStart(4, "0"));
            }
            return results;
          }.call(this).join(":");
          suffix = "";
          if (this.zoneId) {
            suffix = "%" + this.zoneId;
          }
          return addr2 + suffix;
        };
        IPv6.prototype.match = function(other, cidrRange) {
          var ref;
          if (cidrRange === void 0) {
            ref = other, other = ref[0], cidrRange = ref[1];
          }
          if (other.kind() !== "ipv6") {
            throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
          }
          return matchCIDR(this.parts, other.parts, 16, cidrRange);
        };
        IPv6.prototype.SpecialRanges = {
          unspecified: [new IPv6([0, 0, 0, 0, 0, 0, 0, 0]), 128],
          linkLocal: [new IPv6([65152, 0, 0, 0, 0, 0, 0, 0]), 10],
          multicast: [new IPv6([65280, 0, 0, 0, 0, 0, 0, 0]), 8],
          loopback: [new IPv6([0, 0, 0, 0, 0, 0, 0, 1]), 128],
          uniqueLocal: [new IPv6([64512, 0, 0, 0, 0, 0, 0, 0]), 7],
          ipv4Mapped: [new IPv6([0, 0, 0, 0, 0, 65535, 0, 0]), 96],
          rfc6145: [new IPv6([0, 0, 0, 0, 65535, 0, 0, 0]), 96],
          rfc6052: [new IPv6([100, 65435, 0, 0, 0, 0, 0, 0]), 96],
          "6to4": [new IPv6([8194, 0, 0, 0, 0, 0, 0, 0]), 16],
          teredo: [new IPv6([8193, 0, 0, 0, 0, 0, 0, 0]), 32],
          reserved: [[new IPv6([8193, 3512, 0, 0, 0, 0, 0, 0]), 32]]
        };
        IPv6.prototype.range = function() {
          return ipaddr.subnetMatch(this, this.SpecialRanges);
        };
        IPv6.prototype.isIPv4MappedAddress = function() {
          return this.range() === "ipv4Mapped";
        };
        IPv6.prototype.toIPv4Address = function() {
          var high, low, ref;
          if (!this.isIPv4MappedAddress()) {
            throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
          }
          ref = this.parts.slice(-2), high = ref[0], low = ref[1];
          return new ipaddr.IPv4([high >> 8, high & 255, low >> 8, low & 255]);
        };
        IPv6.prototype.prefixLengthFromSubnetMask = function() {
          var cidr, i, k, part, stop, zeros, zerotable;
          zerotable = {
            0: 16,
            32768: 15,
            49152: 14,
            57344: 13,
            61440: 12,
            63488: 11,
            64512: 10,
            65024: 9,
            65280: 8,
            65408: 7,
            65472: 6,
            65504: 5,
            65520: 4,
            65528: 3,
            65532: 2,
            65534: 1,
            65535: 0
          };
          cidr = 0;
          stop = false;
          for (i = k = 7; k >= 0; i = k += -1) {
            part = this.parts[i];
            if (part in zerotable) {
              zeros = zerotable[part];
              if (stop && zeros !== 0) {
                return null;
              }
              if (zeros !== 16) {
                stop = true;
              }
              cidr += zeros;
            } else {
              return null;
            }
          }
          return 128 - cidr;
        };
        return IPv6;
      }();
      ipv6Part = "(?:[0-9a-f]+::?)+";
      zoneIndex = "%[0-9a-z]{1,}";
      ipv6Regexes = {
        zoneIndex: new RegExp(zoneIndex, "i"),
        "native": new RegExp("^(::)?(" + ipv6Part + ")?([0-9a-f]+)?(::)?(" + zoneIndex + ")?$", "i"),
        transitional: new RegExp("^((?:" + ipv6Part + ")|(?:::)(?:" + ipv6Part + ")?)" + (ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part + "\\." + ipv4Part) + ("(" + zoneIndex + ")?$"), "i")
      };
      expandIPv6 = function(string, parts) {
        var colonCount, lastColon, part, replacement, replacementCount, zoneId;
        if (string.indexOf("::") !== string.lastIndexOf("::")) {
          return null;
        }
        zoneId = (string.match(ipv6Regexes["zoneIndex"]) || [])[0];
        if (zoneId) {
          zoneId = zoneId.substring(1);
          string = string.replace(/%.+$/, "");
        }
        colonCount = 0;
        lastColon = -1;
        while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) {
          colonCount++;
        }
        if (string.substr(0, 2) === "::") {
          colonCount--;
        }
        if (string.substr(-2, 2) === "::") {
          colonCount--;
        }
        if (colonCount > parts) {
          return null;
        }
        replacementCount = parts - colonCount;
        replacement = ":";
        while (replacementCount--) {
          replacement += "0:";
        }
        string = string.replace("::", replacement);
        if (string[0] === ":") {
          string = string.slice(1);
        }
        if (string[string.length - 1] === ":") {
          string = string.slice(0, -1);
        }
        parts = function() {
          var k, len, ref, results;
          ref = string.split(":");
          results = [];
          for (k = 0, len = ref.length; k < len; k++) {
            part = ref[k];
            results.push(parseInt(part, 16));
          }
          return results;
        }();
        return {
          parts,
          zoneId
        };
      };
      ipaddr.IPv6.parser = function(string) {
        var addr2, k, len, match, octet, octets, zoneId;
        if (ipv6Regexes["native"].test(string)) {
          return expandIPv6(string, 8);
        } else if (match = string.match(ipv6Regexes["transitional"])) {
          zoneId = match[6] || "";
          addr2 = expandIPv6(match[1].slice(0, -1) + zoneId, 6);
          if (addr2.parts) {
            octets = [parseInt(match[2]), parseInt(match[3]), parseInt(match[4]), parseInt(match[5])];
            for (k = 0, len = octets.length; k < len; k++) {
              octet = octets[k];
              if (!(0 <= octet && octet <= 255)) {
                return null;
              }
            }
            addr2.parts.push(octets[0] << 8 | octets[1]);
            addr2.parts.push(octets[2] << 8 | octets[3]);
            return {
              parts: addr2.parts,
              zoneId: addr2.zoneId
            };
          }
        }
        return null;
      };
      ipaddr.IPv4.isIPv4 = ipaddr.IPv6.isIPv6 = function(string) {
        return this.parser(string) !== null;
      };
      ipaddr.IPv4.isValid = function(string) {
        var e;
        try {
          new this(this.parser(string));
          return true;
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      ipaddr.IPv4.isValidFourPartDecimal = function(string) {
        if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) {
          return true;
        } else {
          return false;
        }
      };
      ipaddr.IPv6.isValid = function(string) {
        var addr2, e;
        if (typeof string === "string" && string.indexOf(":") === -1) {
          return false;
        }
        try {
          addr2 = this.parser(string);
          new this(addr2.parts, addr2.zoneId);
          return true;
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      ipaddr.IPv4.parse = function(string) {
        var parts;
        parts = this.parser(string);
        if (parts === null) {
          throw new Error("ipaddr: string is not formatted like ip address");
        }
        return new this(parts);
      };
      ipaddr.IPv6.parse = function(string) {
        var addr2;
        addr2 = this.parser(string);
        if (addr2.parts === null) {
          throw new Error("ipaddr: string is not formatted like ip address");
        }
        return new this(addr2.parts, addr2.zoneId);
      };
      ipaddr.IPv4.parseCIDR = function(string) {
        var maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 32) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: function() {
                return this.join("/");
              }
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
      };
      ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
        var filledOctetCount, j, octets;
        prefix = parseInt(prefix);
        if (prefix < 0 || prefix > 32) {
          throw new Error("ipaddr: invalid IPv4 prefix length");
        }
        octets = [0, 0, 0, 0];
        j = 0;
        filledOctetCount = Math.floor(prefix / 8);
        while (j < filledOctetCount) {
          octets[j] = 255;
          j++;
        }
        if (filledOctetCount < 4) {
          octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
        }
        return new this(octets);
      };
      ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
        var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i = 0;
          while (i < 4) {
            octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
            i++;
          }
          return new this(octets);
        } catch (error1) {
          error = error1;
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv4.networkAddressFromCIDR = function(string) {
        var cidr, error, i, ipInterfaceOctets, octets, subnetMaskOctets;
        try {
          cidr = this.parseCIDR(string);
          ipInterfaceOctets = cidr[0].toByteArray();
          subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
          octets = [];
          i = 0;
          while (i < 4) {
            octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
            i++;
          }
          return new this(octets);
        } catch (error1) {
          error = error1;
          throw new Error("ipaddr: the address does not have IPv4 CIDR format");
        }
      };
      ipaddr.IPv6.parseCIDR = function(string) {
        var maskLength, match, parsed;
        if (match = string.match(/^(.+)\/(\d+)$/)) {
          maskLength = parseInt(match[2]);
          if (maskLength >= 0 && maskLength <= 128) {
            parsed = [this.parse(match[1]), maskLength];
            Object.defineProperty(parsed, "toString", {
              value: function() {
                return this.join("/");
              }
            });
            return parsed;
          }
        }
        throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
      };
      ipaddr.isValid = function(string) {
        return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
      };
      ipaddr.parse = function(string) {
        if (ipaddr.IPv6.isValid(string)) {
          return ipaddr.IPv6.parse(string);
        } else if (ipaddr.IPv4.isValid(string)) {
          return ipaddr.IPv4.parse(string);
        } else {
          throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
        }
      };
      ipaddr.parseCIDR = function(string) {
        var e;
        try {
          return ipaddr.IPv6.parseCIDR(string);
        } catch (error1) {
          e = error1;
          try {
            return ipaddr.IPv4.parseCIDR(string);
          } catch (error12) {
            e = error12;
            throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
          }
        }
      };
      ipaddr.fromByteArray = function(bytes) {
        var length;
        length = bytes.length;
        if (length === 4) {
          return new ipaddr.IPv4(bytes);
        } else if (length === 16) {
          return new ipaddr.IPv6(bytes);
        } else {
          throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
        }
      };
      ipaddr.process = function(string) {
        var addr2;
        addr2 = this.parse(string);
        if (addr2.kind() === "ipv6" && addr2.isIPv4MappedAddress()) {
          return addr2.toIPv4Address();
        } else {
          return addr2;
        }
      };
    }).call(exports);
  }
});

// node_modules/proxy-addr/index.js
var require_proxy_addr = __commonJS({
  "node_modules/proxy-addr/index.js"(exports, module) {
    "use strict";
    module.exports = proxyaddr;
    module.exports.all = alladdrs;
    module.exports.compile = compile;
    var forwarded = require_forwarded();
    var ipaddr = require_ipaddr();
    var DIGIT_REGEXP = /^[0-9]+$/;
    var isip = ipaddr.isValid;
    var parseip = ipaddr.parse;
    var IP_RANGES = {
      linklocal: ["169.254.0.0/16", "fe80::/10"],
      loopback: ["127.0.0.1/8", "::1/128"],
      uniquelocal: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "fc00::/7"]
    };
    function alladdrs(req, trust) {
      var addrs = forwarded(req);
      if (!trust) {
        return addrs;
      }
      if (typeof trust !== "function") {
        trust = compile(trust);
      }
      for (var i = 0; i < addrs.length - 1; i++) {
        if (trust(addrs[i], i)) continue;
        addrs.length = i + 1;
      }
      return addrs;
    }
    function compile(val) {
      if (!val) {
        throw new TypeError("argument is required");
      }
      var trust;
      if (typeof val === "string") {
        trust = [val];
      } else if (Array.isArray(val)) {
        trust = val.slice();
      } else {
        throw new TypeError("unsupported trust argument");
      }
      for (var i = 0; i < trust.length; i++) {
        val = trust[i];
        if (!Object.prototype.hasOwnProperty.call(IP_RANGES, val)) {
          continue;
        }
        val = IP_RANGES[val];
        trust.splice.apply(trust, [i, 1].concat(val));
        i += val.length - 1;
      }
      return compileTrust(compileRangeSubnets(trust));
    }
    function compileRangeSubnets(arr) {
      var rangeSubnets = new Array(arr.length);
      for (var i = 0; i < arr.length; i++) {
        rangeSubnets[i] = parseipNotation(arr[i]);
      }
      return rangeSubnets;
    }
    function compileTrust(rangeSubnets) {
      var len = rangeSubnets.length;
      return len === 0 ? trustNone : len === 1 ? trustSingle(rangeSubnets[0]) : trustMulti(rangeSubnets);
    }
    function parseipNotation(note) {
      var pos = note.lastIndexOf("/");
      var str = pos !== -1 ? note.substring(0, pos) : note;
      if (!isip(str)) {
        throw new TypeError("invalid IP address: " + str);
      }
      var ip = parseip(str);
      if (pos === -1 && ip.kind() === "ipv6" && ip.isIPv4MappedAddress()) {
        ip = ip.toIPv4Address();
      }
      var max = ip.kind() === "ipv6" ? 128 : 32;
      var range = pos !== -1 ? note.substring(pos + 1, note.length) : null;
      if (range === null) {
        range = max;
      } else if (DIGIT_REGEXP.test(range)) {
        range = parseInt(range, 10);
      } else if (ip.kind() === "ipv4" && isip(range)) {
        range = parseNetmask(range);
      } else {
        range = null;
      }
      if (range <= 0 || range > max) {
        throw new TypeError("invalid range on address: " + note);
      }
      return [ip, range];
    }
    function parseNetmask(netmask) {
      var ip = parseip(netmask);
      var kind = ip.kind();
      return kind === "ipv4" ? ip.prefixLengthFromSubnetMask() : null;
    }
    function proxyaddr(req, trust) {
      if (!req) {
        throw new TypeError("req argument is required");
      }
      if (!trust) {
        throw new TypeError("trust argument is required");
      }
      var addrs = alladdrs(req, trust);
      var addr2 = addrs[addrs.length - 1];
      return addr2;
    }
    function trustNone() {
      return false;
    }
    function trustMulti(subnets) {
      return function trust(addr2) {
        if (!isip(addr2)) return false;
        var ip = parseip(addr2);
        if (ip.kind() === "ipv6" && ip.isIPv4MappedAddress()) {
          ip = ip.toIPv4Address();
        }
        var ipconv;
        var kind = ip.kind();
        for (var i = 0; i < subnets.length; i++) {
          var subnet = subnets[i];
          var subnetip = subnet[0];
          var subnetkind = subnetip.kind();
          var subnetrange = subnet[1];
          var trusted = ip;
          if (kind !== subnetkind) {
            if (subnetkind === "ipv4" && !ip.isIPv4MappedAddress()) {
              continue;
            }
            if (subnetkind !== "ipv4" && !(subnetrange >= 96 && subnetip.isIPv4MappedAddress())) {
              continue;
            }
            if (!ipconv) {
              ipconv = subnetkind === "ipv4" ? ip.toIPv4Address() : ip.toIPv4MappedAddress();
            }
            trusted = ipconv;
          } else if (kind === "ipv6" && subnetip.isIPv4MappedAddress()) {
            continue;
          }
          if (trusted.match(subnetip, subnetrange)) {
            return true;
          }
        }
        return false;
      };
    }
    function trustSingle(subnet) {
      var subnetip = subnet[0];
      var subnetkind = subnetip.kind();
      var subnetisipv4 = subnetkind === "ipv4";
      var subnetrange = subnet[1];
      return function trust(addr2) {
        if (!isip(addr2)) return false;
        var ip = parseip(addr2);
        if (ip.kind() === "ipv6" && ip.isIPv4MappedAddress()) {
          ip = ip.toIPv4Address();
        }
        var kind = ip.kind();
        if (kind !== subnetkind) {
          if (subnetisipv4 && !ip.isIPv4MappedAddress()) {
            return false;
          }
          if (!subnetisipv4 && !(subnetrange >= 96 && subnetip.isIPv4MappedAddress())) {
            return false;
          }
          ip = subnetisipv4 ? ip.toIPv4Address() : ip.toIPv4MappedAddress();
        } else if (kind === "ipv6" && subnetip.isIPv4MappedAddress()) {
          return false;
        }
        return ip.match(subnetip, subnetrange);
      };
    }
  }
});

// node_modules/express/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/express/lib/utils.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var contentDisposition = require_content_disposition();
    var contentType = require_content_type();
    var deprecate = require_depd()("express");
    var flatten = require_array_flatten();
    var mime = require_send().mime;
    var etag = require_etag();
    var proxyaddr = require_proxy_addr();
    var qs = require_lib();
    var querystring = __require("querystring");
    exports.etag = createETagGenerator({ weak: false });
    exports.wetag = createETagGenerator({ weak: true });
    exports.isAbsolute = function(path) {
      if ("/" === path[0]) return true;
      if (":" === path[1] && ("\\" === path[2] || "/" === path[2])) return true;
      if ("\\\\" === path.substring(0, 2)) return true;
    };
    exports.flatten = deprecate.function(
      flatten,
      "utils.flatten: use array-flatten npm module instead"
    );
    exports.normalizeType = function(type) {
      return ~type.indexOf("/") ? acceptParams(type) : { value: mime.lookup(type), params: {} };
    };
    exports.normalizeTypes = function(types) {
      var ret = [];
      for (var i = 0; i < types.length; ++i) {
        ret.push(exports.normalizeType(types[i]));
      }
      return ret;
    };
    exports.contentDisposition = deprecate.function(
      contentDisposition,
      "utils.contentDisposition: use content-disposition npm module instead"
    );
    function acceptParams(str) {
      var parts = str.split(/ *; */);
      var ret = { value: parts[0], quality: 1, params: {} };
      for (var i = 1; i < parts.length; ++i) {
        var pms = parts[i].split(/ *= */);
        if ("q" === pms[0]) {
          ret.quality = parseFloat(pms[1]);
        } else {
          ret.params[pms[0]] = pms[1];
        }
      }
      return ret;
    }
    exports.compileETag = function(val) {
      var fn;
      if (typeof val === "function") {
        return val;
      }
      switch (val) {
        case true:
        case "weak":
          fn = exports.wetag;
          break;
        case false:
          break;
        case "strong":
          fn = exports.etag;
          break;
        default:
          throw new TypeError("unknown value for etag function: " + val);
      }
      return fn;
    };
    exports.compileQueryParser = function compileQueryParser(val) {
      var fn;
      if (typeof val === "function") {
        return val;
      }
      switch (val) {
        case true:
        case "simple":
          fn = querystring.parse;
          break;
        case false:
          fn = newObject;
          break;
        case "extended":
          fn = parseExtendedQueryString;
          break;
        default:
          throw new TypeError("unknown value for query parser function: " + val);
      }
      return fn;
    };
    exports.compileTrust = function(val) {
      if (typeof val === "function") return val;
      if (val === true) {
        return function() {
          return true;
        };
      }
      if (typeof val === "number") {
        return function(a, i) {
          return i < val;
        };
      }
      if (typeof val === "string") {
        val = val.split(",").map(function(v) {
          return v.trim();
        });
      }
      return proxyaddr.compile(val || []);
    };
    exports.setCharset = function setCharset(type, charset) {
      if (!type || !charset) {
        return type;
      }
      var parsed = contentType.parse(type);
      parsed.parameters.charset = charset;
      return contentType.format(parsed);
    };
    function createETagGenerator(options) {
      return function generateETag(body, encoding) {
        var buf = !Buffer2.isBuffer(body) ? Buffer2.from(body, encoding) : body;
        return etag(buf, options);
      };
    }
    function parseExtendedQueryString(str) {
      return qs.parse(str, {
        allowPrototypes: true,
        arrayLimit: 1e3
      });
    }
    function newObject() {
      return {};
    }
  }
});

// node_modules/express/lib/application.js
var require_application = __commonJS({
  "node_modules/express/lib/application.js"(exports, module) {
    "use strict";
    var finalhandler = require_finalhandler();
    var Router = require_router();
    var methods = require_methods();
    var middleware = require_init();
    var query = require_query();
    var debug = require_src3()("express:application");
    var View = require_view();
    var http = __require("http");
    var compileETag = require_utils2().compileETag;
    var compileQueryParser = require_utils2().compileQueryParser;
    var compileTrust = require_utils2().compileTrust;
    var deprecate = require_depd()("express");
    var flatten = require_array_flatten();
    var merge = require_utils_merge();
    var resolve = __require("path").resolve;
    var setPrototypeOf = require_setprototypeof();
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var slice = Array.prototype.slice;
    var app2 = exports = module.exports = {};
    var trustProxyDefaultSymbol = "@@symbol:trust_proxy_default";
    app2.init = function init() {
      this.cache = {};
      this.engines = {};
      this.settings = {};
      this.defaultConfiguration();
    };
    app2.defaultConfiguration = function defaultConfiguration() {
      var env = process.env.NODE_ENV || "development";
      this.enable("x-powered-by");
      this.set("etag", "weak");
      this.set("env", env);
      this.set("query parser", "extended");
      this.set("subdomain offset", 2);
      this.set("trust proxy", false);
      Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
        configurable: true,
        value: true
      });
      debug("booting in %s mode", env);
      this.on("mount", function onmount(parent) {
        if (this.settings[trustProxyDefaultSymbol] === true && typeof parent.settings["trust proxy fn"] === "function") {
          delete this.settings["trust proxy"];
          delete this.settings["trust proxy fn"];
        }
        setPrototypeOf(this.request, parent.request);
        setPrototypeOf(this.response, parent.response);
        setPrototypeOf(this.engines, parent.engines);
        setPrototypeOf(this.settings, parent.settings);
      });
      this.locals = /* @__PURE__ */ Object.create(null);
      this.mountpath = "/";
      this.locals.settings = this.settings;
      this.set("view", View);
      this.set("views", resolve("views"));
      this.set("jsonp callback name", "callback");
      if (env === "production") {
        this.enable("view cache");
      }
      Object.defineProperty(this, "router", {
        get: function() {
          throw new Error("'app.router' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.");
        }
      });
    };
    app2.lazyrouter = function lazyrouter() {
      if (!this._router) {
        this._router = new Router({
          caseSensitive: this.enabled("case sensitive routing"),
          strict: this.enabled("strict routing")
        });
        this._router.use(query(this.get("query parser fn")));
        this._router.use(middleware.init(this));
      }
    };
    app2.handle = function handle(req, res, callback) {
      var router = this._router;
      var done = callback || finalhandler(req, res, {
        env: this.get("env"),
        onerror: logerror.bind(this)
      });
      if (!router) {
        debug("no routes defined on app");
        done();
        return;
      }
      router.handle(req, res, done);
    };
    app2.use = function use(fn) {
      var offset = 0;
      var path = "/";
      if (typeof fn !== "function") {
        var arg = fn;
        while (Array.isArray(arg) && arg.length !== 0) {
          arg = arg[0];
        }
        if (typeof arg !== "function") {
          offset = 1;
          path = fn;
        }
      }
      var fns = flatten(slice.call(arguments, offset));
      if (fns.length === 0) {
        throw new TypeError("app.use() requires a middleware function");
      }
      this.lazyrouter();
      var router = this._router;
      fns.forEach(function(fn2) {
        if (!fn2 || !fn2.handle || !fn2.set) {
          return router.use(path, fn2);
        }
        debug(".use app under %s", path);
        fn2.mountpath = path;
        fn2.parent = this;
        router.use(path, function mounted_app(req, res, next) {
          var orig = req.app;
          fn2.handle(req, res, function(err) {
            setPrototypeOf(req, orig.request);
            setPrototypeOf(res, orig.response);
            next(err);
          });
        });
        fn2.emit("mount", this);
      }, this);
      return this;
    };
    app2.route = function route2(path) {
      this.lazyrouter();
      return this._router.route(path);
    };
    app2.engine = function engine(ext, fn) {
      if (typeof fn !== "function") {
        throw new Error("callback function required");
      }
      var extension = ext[0] !== "." ? "." + ext : ext;
      this.engines[extension] = fn;
      return this;
    };
    app2.param = function param(name, fn) {
      this.lazyrouter();
      if (Array.isArray(name)) {
        for (var i = 0; i < name.length; i++) {
          this.param(name[i], fn);
        }
        return this;
      }
      this._router.param(name, fn);
      return this;
    };
    app2.set = function set(setting, val) {
      if (arguments.length === 1) {
        var settings = this.settings;
        while (settings && settings !== Object.prototype) {
          if (hasOwnProperty.call(settings, setting)) {
            return settings[setting];
          }
          settings = Object.getPrototypeOf(settings);
        }
        return void 0;
      }
      debug('set "%s" to %o', setting, val);
      this.settings[setting] = val;
      switch (setting) {
        case "etag":
          this.set("etag fn", compileETag(val));
          break;
        case "query parser":
          this.set("query parser fn", compileQueryParser(val));
          break;
        case "trust proxy":
          this.set("trust proxy fn", compileTrust(val));
          Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
            configurable: true,
            value: false
          });
          break;
      }
      return this;
    };
    app2.path = function path() {
      return this.parent ? this.parent.path() + this.mountpath : "";
    };
    app2.enabled = function enabled(setting) {
      return Boolean(this.set(setting));
    };
    app2.disabled = function disabled(setting) {
      return !this.set(setting);
    };
    app2.enable = function enable(setting) {
      return this.set(setting, true);
    };
    app2.disable = function disable(setting) {
      return this.set(setting, false);
    };
    methods.forEach(function(method) {
      app2[method] = function(path) {
        if (method === "get" && arguments.length === 1) {
          return this.set(path);
        }
        this.lazyrouter();
        var route2 = this._router.route(path);
        route2[method].apply(route2, slice.call(arguments, 1));
        return this;
      };
    });
    app2.all = function all(path) {
      this.lazyrouter();
      var route2 = this._router.route(path);
      var args = slice.call(arguments, 1);
      for (var i = 0; i < methods.length; i++) {
        route2[methods[i]].apply(route2, args);
      }
      return this;
    };
    app2.del = deprecate.function(app2.delete, "app.del: Use app.delete instead");
    app2.render = function render(name, options, callback) {
      var cache = this.cache;
      var done = callback;
      var engines = this.engines;
      var opts = options;
      var renderOptions = {};
      var view;
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      merge(renderOptions, this.locals);
      if (opts._locals) {
        merge(renderOptions, opts._locals);
      }
      merge(renderOptions, opts);
      if (renderOptions.cache == null) {
        renderOptions.cache = this.enabled("view cache");
      }
      if (renderOptions.cache) {
        view = cache[name];
      }
      if (!view) {
        var View2 = this.get("view");
        view = new View2(name, {
          defaultEngine: this.get("view engine"),
          root: this.get("views"),
          engines
        });
        if (!view.path) {
          var dirs = Array.isArray(view.root) && view.root.length > 1 ? 'directories "' + view.root.slice(0, -1).join('", "') + '" or "' + view.root[view.root.length - 1] + '"' : 'directory "' + view.root + '"';
          var err = new Error('Failed to lookup view "' + name + '" in views ' + dirs);
          err.view = view;
          return done(err);
        }
        if (renderOptions.cache) {
          cache[name] = view;
        }
      }
      tryRender(view, renderOptions, done);
    };
    app2.listen = function listen() {
      var server2 = http.createServer(this);
      return server2.listen.apply(server2, arguments);
    };
    function logerror(err) {
      if (this.get("env") !== "test") console.error(err.stack || err.toString());
    }
    function tryRender(view, options, callback) {
      try {
        view.render(options, callback);
      } catch (err) {
        callback(err);
      }
    }
  }
});

// node_modules/negotiator/lib/charset.js
var require_charset = __commonJS({
  "node_modules/negotiator/lib/charset.js"(exports, module) {
    "use strict";
    module.exports = preferredCharsets;
    module.exports.preferredCharsets = preferredCharsets;
    var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
    function parseAcceptCharset(accept) {
      var accepts = accept.split(",");
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var charset = parseCharset(accepts[i].trim(), i);
        if (charset) {
          accepts[j++] = charset;
        }
      }
      accepts.length = j;
      return accepts;
    }
    function parseCharset(str, i) {
      var match = simpleCharsetRegExp.exec(str);
      if (!match) return null;
      var charset = match[1];
      var q = 1;
      if (match[2]) {
        var params = match[2].split(";");
        for (var j = 0; j < params.length; j++) {
          var p = params[j].trim().split("=");
          if (p[0] === "q") {
            q = parseFloat(p[1]);
            break;
          }
        }
      }
      return {
        charset,
        q,
        i
      };
    }
    function getCharsetPriority(charset, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(charset, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    function specify(charset, spec, index) {
      var s = 0;
      if (spec.charset.toLowerCase() === charset.toLowerCase()) {
        s |= 1;
      } else if (spec.charset !== "*") {
        return null;
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    function preferredCharsets(accept, provided) {
      var accepts = parseAcceptCharset(accept === void 0 ? "*" : accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
      }
      var priorities = provided.map(function getPriority(type, index) {
        return getCharsetPriority(type, accepts, index);
      });
      return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    function getFullCharset(spec) {
      return spec.charset;
    }
    function isQuality(spec) {
      return spec.q > 0;
    }
  }
});

// node_modules/negotiator/lib/encoding.js
var require_encoding = __commonJS({
  "node_modules/negotiator/lib/encoding.js"(exports, module) {
    "use strict";
    module.exports = preferredEncodings;
    module.exports.preferredEncodings = preferredEncodings;
    var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
    function parseAcceptEncoding(accept) {
      var accepts = accept.split(",");
      var hasIdentity = false;
      var minQuality = 1;
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var encoding = parseEncoding(accepts[i].trim(), i);
        if (encoding) {
          accepts[j++] = encoding;
          hasIdentity = hasIdentity || specify("identity", encoding);
          minQuality = Math.min(minQuality, encoding.q || 1);
        }
      }
      if (!hasIdentity) {
        accepts[j++] = {
          encoding: "identity",
          q: minQuality,
          i
        };
      }
      accepts.length = j;
      return accepts;
    }
    function parseEncoding(str, i) {
      var match = simpleEncodingRegExp.exec(str);
      if (!match) return null;
      var encoding = match[1];
      var q = 1;
      if (match[2]) {
        var params = match[2].split(";");
        for (var j = 0; j < params.length; j++) {
          var p = params[j].trim().split("=");
          if (p[0] === "q") {
            q = parseFloat(p[1]);
            break;
          }
        }
      }
      return {
        encoding,
        q,
        i
      };
    }
    function getEncodingPriority(encoding, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(encoding, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    function specify(encoding, spec, index) {
      var s = 0;
      if (spec.encoding.toLowerCase() === encoding.toLowerCase()) {
        s |= 1;
      } else if (spec.encoding !== "*") {
        return null;
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    function preferredEncodings(accept, provided) {
      var accepts = parseAcceptEncoding(accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullEncoding);
      }
      var priorities = provided.map(function getPriority(type, index) {
        return getEncodingPriority(type, accepts, index);
      });
      return priorities.filter(isQuality).sort(compareSpecs).map(function getEncoding(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    function getFullEncoding(spec) {
      return spec.encoding;
    }
    function isQuality(spec) {
      return spec.q > 0;
    }
  }
});

// node_modules/negotiator/lib/language.js
var require_language = __commonJS({
  "node_modules/negotiator/lib/language.js"(exports, module) {
    "use strict";
    module.exports = preferredLanguages;
    module.exports.preferredLanguages = preferredLanguages;
    var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
    function parseAcceptLanguage(accept) {
      var accepts = accept.split(",");
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var language = parseLanguage(accepts[i].trim(), i);
        if (language) {
          accepts[j++] = language;
        }
      }
      accepts.length = j;
      return accepts;
    }
    function parseLanguage(str, i) {
      var match = simpleLanguageRegExp.exec(str);
      if (!match) return null;
      var prefix = match[1];
      var suffix = match[2];
      var full = prefix;
      if (suffix) full += "-" + suffix;
      var q = 1;
      if (match[3]) {
        var params = match[3].split(";");
        for (var j = 0; j < params.length; j++) {
          var p = params[j].split("=");
          if (p[0] === "q") q = parseFloat(p[1]);
        }
      }
      return {
        prefix,
        suffix,
        q,
        i,
        full
      };
    }
    function getLanguagePriority(language, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(language, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    function specify(language, spec, index) {
      var p = parseLanguage(language);
      if (!p) return null;
      var s = 0;
      if (spec.full.toLowerCase() === p.full.toLowerCase()) {
        s |= 4;
      } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
        s |= 2;
      } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
        s |= 1;
      } else if (spec.full !== "*") {
        return null;
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    function preferredLanguages(accept, provided) {
      var accepts = parseAcceptLanguage(accept === void 0 ? "*" : accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
      }
      var priorities = provided.map(function getPriority(type, index) {
        return getLanguagePriority(type, accepts, index);
      });
      return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    function getFullLanguage(spec) {
      return spec.full;
    }
    function isQuality(spec) {
      return spec.q > 0;
    }
  }
});

// node_modules/negotiator/lib/mediaType.js
var require_mediaType = __commonJS({
  "node_modules/negotiator/lib/mediaType.js"(exports, module) {
    "use strict";
    module.exports = preferredMediaTypes;
    module.exports.preferredMediaTypes = preferredMediaTypes;
    var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
    function parseAccept(accept) {
      var accepts = splitMediaTypes(accept);
      for (var i = 0, j = 0; i < accepts.length; i++) {
        var mediaType = parseMediaType(accepts[i].trim(), i);
        if (mediaType) {
          accepts[j++] = mediaType;
        }
      }
      accepts.length = j;
      return accepts;
    }
    function parseMediaType(str, i) {
      var match = simpleMediaTypeRegExp.exec(str);
      if (!match) return null;
      var params = /* @__PURE__ */ Object.create(null);
      var q = 1;
      var subtype = match[2];
      var type = match[1];
      if (match[3]) {
        var kvps = splitParameters(match[3]).map(splitKeyValuePair);
        for (var j = 0; j < kvps.length; j++) {
          var pair = kvps[j];
          var key = pair[0].toLowerCase();
          var val = pair[1];
          var value = val && val[0] === '"' && val[val.length - 1] === '"' ? val.substr(1, val.length - 2) : val;
          if (key === "q") {
            q = parseFloat(value);
            break;
          }
          params[key] = value;
        }
      }
      return {
        type,
        subtype,
        params,
        q,
        i
      };
    }
    function getMediaTypePriority(type, accepted, index) {
      var priority = { o: -1, q: 0, s: 0 };
      for (var i = 0; i < accepted.length; i++) {
        var spec = specify(type, accepted[i], index);
        if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
          priority = spec;
        }
      }
      return priority;
    }
    function specify(type, spec, index) {
      var p = parseMediaType(type);
      var s = 0;
      if (!p) {
        return null;
      }
      if (spec.type.toLowerCase() == p.type.toLowerCase()) {
        s |= 4;
      } else if (spec.type != "*") {
        return null;
      }
      if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
        s |= 2;
      } else if (spec.subtype != "*") {
        return null;
      }
      var keys = Object.keys(spec.params);
      if (keys.length > 0) {
        if (keys.every(function(k) {
          return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
        })) {
          s |= 1;
        } else {
          return null;
        }
      }
      return {
        i: index,
        o: spec.i,
        q: spec.q,
        s
      };
    }
    function preferredMediaTypes(accept, provided) {
      var accepts = parseAccept(accept === void 0 ? "*/*" : accept || "");
      if (!provided) {
        return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
      }
      var priorities = provided.map(function getPriority(type, index) {
        return getMediaTypePriority(type, accepts, index);
      });
      return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
        return provided[priorities.indexOf(priority)];
      });
    }
    function compareSpecs(a, b) {
      return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
    }
    function getFullType(spec) {
      return spec.type + "/" + spec.subtype;
    }
    function isQuality(spec) {
      return spec.q > 0;
    }
    function quoteCount(string) {
      var count = 0;
      var index = 0;
      while ((index = string.indexOf('"', index)) !== -1) {
        count++;
        index++;
      }
      return count;
    }
    function splitKeyValuePair(str) {
      var index = str.indexOf("=");
      var key;
      var val;
      if (index === -1) {
        key = str;
      } else {
        key = str.substr(0, index);
        val = str.substr(index + 1);
      }
      return [key, val];
    }
    function splitMediaTypes(accept) {
      var accepts = accept.split(",");
      for (var i = 1, j = 0; i < accepts.length; i++) {
        if (quoteCount(accepts[j]) % 2 == 0) {
          accepts[++j] = accepts[i];
        } else {
          accepts[j] += "," + accepts[i];
        }
      }
      accepts.length = j + 1;
      return accepts;
    }
    function splitParameters(str) {
      var parameters = str.split(";");
      for (var i = 1, j = 0; i < parameters.length; i++) {
        if (quoteCount(parameters[j]) % 2 == 0) {
          parameters[++j] = parameters[i];
        } else {
          parameters[j] += ";" + parameters[i];
        }
      }
      parameters.length = j + 1;
      for (var i = 0; i < parameters.length; i++) {
        parameters[i] = parameters[i].trim();
      }
      return parameters;
    }
  }
});

// node_modules/negotiator/index.js
var require_negotiator = __commonJS({
  "node_modules/negotiator/index.js"(exports, module) {
    "use strict";
    var preferredCharsets = require_charset();
    var preferredEncodings = require_encoding();
    var preferredLanguages = require_language();
    var preferredMediaTypes = require_mediaType();
    module.exports = Negotiator;
    module.exports.Negotiator = Negotiator;
    function Negotiator(request) {
      if (!(this instanceof Negotiator)) {
        return new Negotiator(request);
      }
      this.request = request;
    }
    Negotiator.prototype.charset = function charset(available) {
      var set = this.charsets(available);
      return set && set[0];
    };
    Negotiator.prototype.charsets = function charsets(available) {
      return preferredCharsets(this.request.headers["accept-charset"], available);
    };
    Negotiator.prototype.encoding = function encoding(available) {
      var set = this.encodings(available);
      return set && set[0];
    };
    Negotiator.prototype.encodings = function encodings(available) {
      return preferredEncodings(this.request.headers["accept-encoding"], available);
    };
    Negotiator.prototype.language = function language(available) {
      var set = this.languages(available);
      return set && set[0];
    };
    Negotiator.prototype.languages = function languages(available) {
      return preferredLanguages(this.request.headers["accept-language"], available);
    };
    Negotiator.prototype.mediaType = function mediaType(available) {
      var set = this.mediaTypes(available);
      return set && set[0];
    };
    Negotiator.prototype.mediaTypes = function mediaTypes(available) {
      return preferredMediaTypes(this.request.headers.accept, available);
    };
    Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
    Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
    Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
    Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
    Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
    Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
    Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
    Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
  }
});

// node_modules/accepts/index.js
var require_accepts = __commonJS({
  "node_modules/accepts/index.js"(exports, module) {
    "use strict";
    var Negotiator = require_negotiator();
    var mime = require_mime_types();
    module.exports = Accepts;
    function Accepts(req) {
      if (!(this instanceof Accepts)) {
        return new Accepts(req);
      }
      this.headers = req.headers;
      this.negotiator = new Negotiator(req);
    }
    Accepts.prototype.type = Accepts.prototype.types = function(types_) {
      var types = types_;
      if (types && !Array.isArray(types)) {
        types = new Array(arguments.length);
        for (var i = 0; i < types.length; i++) {
          types[i] = arguments[i];
        }
      }
      if (!types || types.length === 0) {
        return this.negotiator.mediaTypes();
      }
      if (!this.headers.accept) {
        return types[0];
      }
      var mimes = types.map(extToMime);
      var accepts = this.negotiator.mediaTypes(mimes.filter(validMime));
      var first = accepts[0];
      return first ? types[mimes.indexOf(first)] : false;
    };
    Accepts.prototype.encoding = Accepts.prototype.encodings = function(encodings_) {
      var encodings = encodings_;
      if (encodings && !Array.isArray(encodings)) {
        encodings = new Array(arguments.length);
        for (var i = 0; i < encodings.length; i++) {
          encodings[i] = arguments[i];
        }
      }
      if (!encodings || encodings.length === 0) {
        return this.negotiator.encodings();
      }
      return this.negotiator.encodings(encodings)[0] || false;
    };
    Accepts.prototype.charset = Accepts.prototype.charsets = function(charsets_) {
      var charsets = charsets_;
      if (charsets && !Array.isArray(charsets)) {
        charsets = new Array(arguments.length);
        for (var i = 0; i < charsets.length; i++) {
          charsets[i] = arguments[i];
        }
      }
      if (!charsets || charsets.length === 0) {
        return this.negotiator.charsets();
      }
      return this.negotiator.charsets(charsets)[0] || false;
    };
    Accepts.prototype.lang = Accepts.prototype.langs = Accepts.prototype.language = Accepts.prototype.languages = function(languages_) {
      var languages = languages_;
      if (languages && !Array.isArray(languages)) {
        languages = new Array(arguments.length);
        for (var i = 0; i < languages.length; i++) {
          languages[i] = arguments[i];
        }
      }
      if (!languages || languages.length === 0) {
        return this.negotiator.languages();
      }
      return this.negotiator.languages(languages)[0] || false;
    };
    function extToMime(type) {
      return type.indexOf("/") === -1 ? mime.lookup(type) : type;
    }
    function validMime(type) {
      return typeof type === "string";
    }
  }
});

// node_modules/express/lib/request.js
var require_request = __commonJS({
  "node_modules/express/lib/request.js"(exports, module) {
    "use strict";
    var accepts = require_accepts();
    var deprecate = require_depd()("express");
    var isIP = __require("net").isIP;
    var typeis = require_type_is();
    var http = __require("http");
    var fresh = require_fresh();
    var parseRange = require_range_parser();
    var parse = require_parseurl();
    var proxyaddr = require_proxy_addr();
    var req = Object.create(http.IncomingMessage.prototype);
    module.exports = req;
    req.get = req.header = function header(name) {
      if (!name) {
        throw new TypeError("name argument is required to req.get");
      }
      if (typeof name !== "string") {
        throw new TypeError("name must be a string to req.get");
      }
      var lc = name.toLowerCase();
      switch (lc) {
        case "referer":
        case "referrer":
          return this.headers.referrer || this.headers.referer;
        default:
          return this.headers[lc];
      }
    };
    req.accepts = function() {
      var accept = accepts(this);
      return accept.types.apply(accept, arguments);
    };
    req.acceptsEncodings = function() {
      var accept = accepts(this);
      return accept.encodings.apply(accept, arguments);
    };
    req.acceptsEncoding = deprecate.function(
      req.acceptsEncodings,
      "req.acceptsEncoding: Use acceptsEncodings instead"
    );
    req.acceptsCharsets = function() {
      var accept = accepts(this);
      return accept.charsets.apply(accept, arguments);
    };
    req.acceptsCharset = deprecate.function(
      req.acceptsCharsets,
      "req.acceptsCharset: Use acceptsCharsets instead"
    );
    req.acceptsLanguages = function() {
      var accept = accepts(this);
      return accept.languages.apply(accept, arguments);
    };
    req.acceptsLanguage = deprecate.function(
      req.acceptsLanguages,
      "req.acceptsLanguage: Use acceptsLanguages instead"
    );
    req.range = function range(size, options) {
      var range2 = this.get("Range");
      if (!range2) return;
      return parseRange(size, range2, options);
    };
    req.param = function param(name, defaultValue) {
      var params = this.params || {};
      var body = this.body || {};
      var query = this.query || {};
      var args = arguments.length === 1 ? "name" : "name, default";
      deprecate("req.param(" + args + "): Use req.params, req.body, or req.query instead");
      if (null != params[name] && params.hasOwnProperty(name)) return params[name];
      if (null != body[name]) return body[name];
      if (null != query[name]) return query[name];
      return defaultValue;
    };
    req.is = function is(types) {
      var arr = types;
      if (!Array.isArray(types)) {
        arr = new Array(arguments.length);
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arguments[i];
        }
      }
      return typeis(this, arr);
    };
    defineGetter(req, "protocol", function protocol() {
      var proto = this.connection.encrypted ? "https" : "http";
      var trust = this.app.get("trust proxy fn");
      if (!trust(this.connection.remoteAddress, 0)) {
        return proto;
      }
      var header = this.get("X-Forwarded-Proto") || proto;
      var index = header.indexOf(",");
      return index !== -1 ? header.substring(0, index).trim() : header.trim();
    });
    defineGetter(req, "secure", function secure() {
      return this.protocol === "https";
    });
    defineGetter(req, "ip", function ip() {
      var trust = this.app.get("trust proxy fn");
      return proxyaddr(this, trust);
    });
    defineGetter(req, "ips", function ips() {
      var trust = this.app.get("trust proxy fn");
      var addrs = proxyaddr.all(this, trust);
      addrs.reverse().pop();
      return addrs;
    });
    defineGetter(req, "subdomains", function subdomains() {
      var hostname = this.hostname;
      if (!hostname) return [];
      var offset = this.app.get("subdomain offset");
      var subdomains2 = !isIP(hostname) ? hostname.split(".").reverse() : [hostname];
      return subdomains2.slice(offset);
    });
    defineGetter(req, "path", function path() {
      return parse(this).pathname;
    });
    defineGetter(req, "hostname", function hostname() {
      var trust = this.app.get("trust proxy fn");
      var host = this.get("X-Forwarded-Host");
      if (!host || !trust(this.connection.remoteAddress, 0)) {
        host = this.get("Host");
      } else if (host.indexOf(",") !== -1) {
        host = host.substring(0, host.indexOf(",")).trimRight();
      }
      if (!host) return;
      var offset = host[0] === "[" ? host.indexOf("]") + 1 : 0;
      var index = host.indexOf(":", offset);
      return index !== -1 ? host.substring(0, index) : host;
    });
    defineGetter(req, "host", deprecate.function(function host() {
      return this.hostname;
    }, "req.host: Use req.hostname instead"));
    defineGetter(req, "fresh", function() {
      var method = this.method;
      var res = this.res;
      var status = res.statusCode;
      if ("GET" !== method && "HEAD" !== method && "QUERY" !== method) return false;
      if (status >= 200 && status < 300 || 304 === status) {
        return fresh(this.headers, {
          "etag": res.get("ETag"),
          "last-modified": res.get("Last-Modified")
        });
      }
      return false;
    });
    defineGetter(req, "stale", function stale() {
      return !this.fresh;
    });
    defineGetter(req, "xhr", function xhr() {
      var val = this.get("X-Requested-With") || "";
      return val.toLowerCase() === "xmlhttprequest";
    });
    function defineGetter(obj, name, getter) {
      Object.defineProperty(obj, name, {
        configurable: true,
        enumerable: true,
        get: getter
      });
    }
  }
});

// node_modules/cookie-signature/index.js
var require_cookie_signature = __commonJS({
  "node_modules/cookie-signature/index.js"(exports) {
    "use strict";
    var crypto = __require("crypto");
    exports.sign = function(val, secret) {
      if ("string" !== typeof val) throw new TypeError("Cookie value must be provided as a string.");
      if (null == secret) throw new TypeError("Secret key must be provided.");
      return val + "." + crypto.createHmac("sha256", secret).update(val).digest("base64").replace(/\=+$/, "");
    };
    exports.unsign = function(val, secret) {
      if ("string" !== typeof val) throw new TypeError("Signed cookie string must be provided.");
      if (null == secret) throw new TypeError("Secret key must be provided.");
      var str = val.slice(0, val.lastIndexOf(".")), mac = exports.sign(str, secret);
      return sha1(mac) == sha1(val) ? str : false;
    };
    function sha1(str) {
      return crypto.createHash("sha1").update(str).digest("hex");
    }
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var __hasOwnProperty = Object.prototype.hasOwnProperty;
    var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    function parse(str, opt) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var len = str.length;
      if (len < 2) return obj;
      var dec = opt && opt.decode || decode;
      var index = 0;
      var eqIdx = 0;
      var endIdx = 0;
      do {
        eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break;
        endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = len;
        } else if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var keyStartIdx = startIndex(str, index, eqIdx);
        var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        var key = str.slice(keyStartIdx, keyEndIdx);
        if (!__hasOwnProperty.call(obj, key)) {
          var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          var valEndIdx = endIndex(str, endIdx, valStartIdx);
          if (str.charCodeAt(valStartIdx) === 34 && str.charCodeAt(valEndIdx - 1) === 34) {
            valStartIdx++;
            valEndIdx--;
          }
          var val = str.slice(valStartIdx, valEndIdx);
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        var code = str.charCodeAt(index);
        if (code !== 32 && code !== 9) return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        var code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9) return index + 1;
      }
      return min;
    }
    function serialize(name, val, opt) {
      var enc = opt && opt.encode || encodeURIComponent;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (!opt) return str;
      if (null != opt.maxAge) {
        var maxAge = Math.floor(opt.maxAge);
        if (!isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + maxAge;
      }
      if (opt.domain) {
        if (!domainValueRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!pathValueRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/vary/index.js
var require_vary = __commonJS({
  "node_modules/vary/index.js"(exports, module) {
    "use strict";
    module.exports = vary;
    module.exports.append = append;
    var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function append(header, field) {
      if (typeof header !== "string") {
        throw new TypeError("header argument is required");
      }
      if (!field) {
        throw new TypeError("field argument is required");
      }
      var fields = !Array.isArray(field) ? parse(String(field)) : field;
      for (var j = 0; j < fields.length; j++) {
        if (!FIELD_NAME_REGEXP.test(fields[j])) {
          throw new TypeError("field argument contains an invalid header name");
        }
      }
      if (header === "*") {
        return header;
      }
      var val = header;
      var vals = parse(header.toLowerCase());
      if (fields.indexOf("*") !== -1 || vals.indexOf("*") !== -1) {
        return "*";
      }
      for (var i = 0; i < fields.length; i++) {
        var fld = fields[i].toLowerCase();
        if (vals.indexOf(fld) === -1) {
          vals.push(fld);
          val = val ? val + ", " + fields[i] : fields[i];
        }
      }
      return val;
    }
    function parse(header) {
      var end = 0;
      var list = [];
      var start = 0;
      for (var i = 0, len = header.length; i < len; i++) {
        switch (header.charCodeAt(i)) {
          case 32:
            if (start === end) {
              start = end = i + 1;
            }
            break;
          case 44:
            list.push(header.substring(start, end));
            start = end = i + 1;
            break;
          default:
            end = i + 1;
            break;
        }
      }
      list.push(header.substring(start, end));
      return list;
    }
    function vary(res, field) {
      if (!res || !res.getHeader || !res.setHeader) {
        throw new TypeError("res argument is required");
      }
      var val = res.getHeader("Vary") || "";
      var header = Array.isArray(val) ? val.join(", ") : String(val);
      if (val = append(header, field)) {
        res.setHeader("Vary", val);
      }
    }
  }
});

// node_modules/express/lib/response.js
var require_response = __commonJS({
  "node_modules/express/lib/response.js"(exports, module) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var contentDisposition = require_content_disposition();
    var createError = require_http_errors();
    var deprecate = require_depd()("express");
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var http = __require("http");
    var isAbsolute3 = require_utils2().isAbsolute;
    var onFinished = require_on_finished();
    var path = __require("path");
    var statuses = require_statuses();
    var merge = require_utils_merge();
    var sign = require_cookie_signature().sign;
    var normalizeType = require_utils2().normalizeType;
    var normalizeTypes = require_utils2().normalizeTypes;
    var setCharset = require_utils2().setCharset;
    var cookie = require_cookie();
    var send = require_send();
    var extname2 = path.extname;
    var mime = send.mime;
    var resolve = path.resolve;
    var vary = require_vary();
    var res = Object.create(http.ServerResponse.prototype);
    module.exports = res;
    var charsetRegExp = /;\s*charset\s*=/;
    res.status = function status(code) {
      if ((typeof code === "string" || Math.floor(code) !== code) && code > 99 && code < 1e3) {
        deprecate("res.status(" + JSON.stringify(code) + "): use res.status(" + Math.floor(code) + ") instead");
      }
      this.statusCode = code;
      return this;
    };
    res.links = function(links) {
      var link = this.get("Link") || "";
      if (link) link += ", ";
      return this.set("Link", link + Object.keys(links).map(function(rel) {
        return "<" + links[rel] + '>; rel="' + rel + '"';
      }).join(", "));
    };
    res.send = function send2(body) {
      var chunk = body;
      var encoding;
      var req = this.req;
      var type;
      var app2 = this.app;
      if (arguments.length === 2) {
        if (typeof arguments[0] !== "number" && typeof arguments[1] === "number") {
          deprecate("res.send(body, status): Use res.status(status).send(body) instead");
          this.statusCode = arguments[1];
        } else {
          deprecate("res.send(status, body): Use res.status(status).send(body) instead");
          this.statusCode = arguments[0];
          chunk = arguments[1];
        }
      }
      if (typeof chunk === "number" && arguments.length === 1) {
        if (!this.get("Content-Type")) {
          this.type("txt");
        }
        deprecate("res.send(status): Use res.sendStatus(status) instead");
        this.statusCode = chunk;
        chunk = statuses.message[chunk];
      }
      switch (typeof chunk) {
        // string defaulting to html
        case "string":
          if (!this.get("Content-Type")) {
            this.type("html");
          }
          break;
        case "boolean":
        case "number":
        case "object":
          if (chunk === null) {
            chunk = "";
          } else if (Buffer2.isBuffer(chunk)) {
            if (!this.get("Content-Type")) {
              this.type("bin");
            }
          } else {
            return this.json(chunk);
          }
          break;
      }
      if (typeof chunk === "string") {
        encoding = "utf8";
        type = this.get("Content-Type");
        if (typeof type === "string") {
          this.set("Content-Type", setCharset(type, "utf-8"));
        }
      }
      var etagFn = app2.get("etag fn");
      var generateETag = !this.get("ETag") && typeof etagFn === "function";
      var len;
      if (chunk !== void 0) {
        if (Buffer2.isBuffer(chunk)) {
          len = chunk.length;
        } else if (!generateETag && chunk.length < 1e3) {
          len = Buffer2.byteLength(chunk, encoding);
        } else {
          chunk = Buffer2.from(chunk, encoding);
          encoding = void 0;
          len = chunk.length;
        }
        this.set("Content-Length", len);
      }
      var etag;
      if (generateETag && len !== void 0) {
        if (etag = etagFn(chunk, encoding)) {
          this.set("ETag", etag);
        }
      }
      if (req.fresh) this.statusCode = 304;
      if (204 === this.statusCode || 304 === this.statusCode) {
        this.removeHeader("Content-Type");
        this.removeHeader("Content-Length");
        this.removeHeader("Transfer-Encoding");
        chunk = "";
      }
      if (this.statusCode === 205) {
        this.set("Content-Length", "0");
        this.removeHeader("Transfer-Encoding");
        chunk = "";
      }
      if (req.method === "HEAD") {
        this.end();
      } else {
        this.end(chunk, encoding);
      }
      return this;
    };
    res.json = function json(obj) {
      var val = obj;
      if (arguments.length === 2) {
        if (typeof arguments[1] === "number") {
          deprecate("res.json(obj, status): Use res.status(status).json(obj) instead");
          this.statusCode = arguments[1];
        } else {
          deprecate("res.json(status, obj): Use res.status(status).json(obj) instead");
          this.statusCode = arguments[0];
          val = arguments[1];
        }
      }
      var app2 = this.app;
      var escape2 = app2.get("json escape");
      var replacer = app2.get("json replacer");
      var spaces = app2.get("json spaces");
      var body = stringify(val, replacer, spaces, escape2);
      if (!this.get("Content-Type")) {
        this.set("Content-Type", "application/json");
      }
      return this.send(body);
    };
    res.jsonp = function jsonp(obj) {
      var val = obj;
      if (arguments.length === 2) {
        if (typeof arguments[1] === "number") {
          deprecate("res.jsonp(obj, status): Use res.status(status).jsonp(obj) instead");
          this.statusCode = arguments[1];
        } else {
          deprecate("res.jsonp(status, obj): Use res.status(status).jsonp(obj) instead");
          this.statusCode = arguments[0];
          val = arguments[1];
        }
      }
      var app2 = this.app;
      var escape2 = app2.get("json escape");
      var replacer = app2.get("json replacer");
      var spaces = app2.get("json spaces");
      var body = stringify(val, replacer, spaces, escape2);
      var callback = this.req.query[app2.get("jsonp callback name")];
      if (!this.get("Content-Type")) {
        this.set("X-Content-Type-Options", "nosniff");
        this.set("Content-Type", "application/json");
      }
      if (Array.isArray(callback)) {
        callback = callback[0];
      }
      if (typeof callback === "string" && callback.length !== 0) {
        this.set("X-Content-Type-Options", "nosniff");
        this.set("Content-Type", "text/javascript");
        callback = callback.replace(/[^\[\]\w$.]/g, "");
        if (body === void 0) {
          body = "";
        } else if (typeof body === "string") {
          body = body.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        }
        body = "/**/ typeof " + callback + " === 'function' && " + callback + "(" + body + ");";
      }
      return this.send(body);
    };
    res.sendStatus = function sendStatus(statusCode) {
      var body = statuses.message[statusCode] || String(statusCode);
      this.statusCode = statusCode;
      this.type("txt");
      return this.send(body);
    };
    res.sendFile = function sendFile(path2, options, callback) {
      var done = callback;
      var req = this.req;
      var res2 = this;
      var next = req.next;
      var opts = options || {};
      if (!path2) {
        throw new TypeError("path argument is required to res.sendFile");
      }
      if (typeof path2 !== "string") {
        throw new TypeError("path must be a string to res.sendFile");
      }
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      if (!opts.root && !isAbsolute3(path2)) {
        throw new TypeError("path must be absolute or specify root to res.sendFile");
      }
      var pathname = encodeURI(path2);
      var file = send(req, pathname, opts);
      sendfile(res2, file, opts, function(err) {
        if (done) return done(err);
        if (err && err.code === "EISDIR") return next();
        if (err && err.code !== "ECONNABORTED" && err.syscall !== "write") {
          next(err);
        }
      });
    };
    res.sendfile = function(path2, options, callback) {
      var done = callback;
      var req = this.req;
      var res2 = this;
      var next = req.next;
      var opts = options || {};
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      var file = send(req, path2, opts);
      sendfile(res2, file, opts, function(err) {
        if (done) return done(err);
        if (err && err.code === "EISDIR") return next();
        if (err && err.code !== "ECONNABORTED" && err.syscall !== "write") {
          next(err);
        }
      });
    };
    res.sendfile = deprecate.function(
      res.sendfile,
      "res.sendfile: Use res.sendFile instead"
    );
    res.download = function download(path2, filename, options, callback) {
      var done = callback;
      var name = filename;
      var opts = options || null;
      if (typeof filename === "function") {
        done = filename;
        name = null;
        opts = null;
      } else if (typeof options === "function") {
        done = options;
        opts = null;
      }
      if (typeof filename === "object" && (typeof options === "function" || options === void 0)) {
        name = null;
        opts = filename;
      }
      var headers = {
        "Content-Disposition": contentDisposition(name || path2)
      };
      if (opts && opts.headers) {
        var keys = Object.keys(opts.headers);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key.toLowerCase() !== "content-disposition") {
            headers[key] = opts.headers[key];
          }
        }
      }
      opts = Object.create(opts);
      opts.headers = headers;
      var fullPath = !opts.root ? resolve(path2) : path2;
      return this.sendFile(fullPath, opts, done);
    };
    res.contentType = res.type = function contentType(type) {
      var ct = type.indexOf("/") === -1 ? mime.lookup(type) : type;
      return this.set("Content-Type", ct);
    };
    res.format = function(obj) {
      var req = this.req;
      var next = req.next;
      var keys = Object.keys(obj).filter(function(v) {
        return v !== "default";
      });
      var key = keys.length > 0 ? req.accepts(keys) : false;
      this.vary("Accept");
      if (key) {
        this.set("Content-Type", normalizeType(key).value);
        obj[key](req, this, next);
      } else if (obj.default) {
        obj.default(req, this, next);
      } else {
        next(createError(406, {
          types: normalizeTypes(keys).map(function(o) {
            return o.value;
          })
        }));
      }
      return this;
    };
    res.attachment = function attachment(filename) {
      if (filename) {
        this.type(extname2(filename));
      }
      this.set("Content-Disposition", contentDisposition(filename));
      return this;
    };
    res.append = function append(field, val) {
      var prev = this.get(field);
      var value = val;
      if (prev) {
        value = Array.isArray(prev) ? prev.concat(val) : Array.isArray(val) ? [prev].concat(val) : [prev, val];
      }
      return this.set(field, value);
    };
    res.set = res.header = function header(field, val) {
      if (arguments.length === 2) {
        var value = Array.isArray(val) ? val.map(String) : String(val);
        if (field.toLowerCase() === "content-type") {
          if (Array.isArray(value)) {
            throw new TypeError("Content-Type cannot be set to an Array");
          }
          if (!charsetRegExp.test(value)) {
            var charset = mime.charsets.lookup(value.split(";")[0]);
            if (charset) value += "; charset=" + charset.toLowerCase();
          }
        }
        this.setHeader(field, value);
      } else {
        for (var key in field) {
          this.set(key, field[key]);
        }
      }
      return this;
    };
    res.get = function(field) {
      return this.getHeader(field);
    };
    res.clearCookie = function clearCookie(name, options) {
      if (options) {
        if (options.maxAge) {
          deprecate('res.clearCookie: Passing "options.maxAge" is deprecated. In v5.0.0 of Express, this option will be ignored, as res.clearCookie will automatically set cookies to expire immediately. Please update your code to omit this option.');
        }
        if (options.expires) {
          deprecate('res.clearCookie: Passing "options.expires" is deprecated. In v5.0.0 of Express, this option will be ignored, as res.clearCookie will automatically set cookies to expire immediately. Please update your code to omit this option.');
        }
      }
      var opts = merge({ expires: /* @__PURE__ */ new Date(1), path: "/" }, options);
      return this.cookie(name, "", opts);
    };
    res.cookie = function(name, value, options) {
      var opts = merge({}, options);
      var secret = this.req.secret;
      var signed = opts.signed;
      if (signed && !secret) {
        throw new Error('cookieParser("secret") required for signed cookies');
      }
      var val = typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);
      if (signed) {
        val = "s:" + sign(val, secret);
      }
      if (opts.maxAge != null) {
        var maxAge = opts.maxAge - 0;
        if (!isNaN(maxAge)) {
          opts.expires = new Date(Date.now() + maxAge);
          opts.maxAge = Math.floor(maxAge / 1e3);
        }
      }
      if (opts.path == null) {
        opts.path = "/";
      }
      this.append("Set-Cookie", cookie.serialize(name, String(val), opts));
      return this;
    };
    res.location = function location(url2) {
      var loc;
      if (url2 === "back") {
        deprecate('res.location("back"): use res.location(req.get("Referrer") || "/") and refer to https://dub.sh/security-redirect for best practices');
        loc = this.req.get("Referrer") || "/";
      } else {
        loc = String(url2);
      }
      return this.set("Location", encodeUrl(loc));
    };
    res.redirect = function redirect(url2) {
      var address = url2;
      var body;
      var status = 302;
      if (arguments.length === 2) {
        if (typeof arguments[0] === "number") {
          status = arguments[0];
          address = arguments[1];
        } else {
          deprecate("res.redirect(url, status): Use res.redirect(status, url) instead");
          status = arguments[1];
        }
      }
      address = this.location(address).get("Location");
      this.format({
        text: function() {
          body = statuses.message[status] + ". Redirecting to " + address;
        },
        html: function() {
          var u = escapeHtml(address);
          body = "<p>" + statuses.message[status] + ". Redirecting to " + u + "</p>";
        },
        default: function() {
          body = "";
        }
      });
      this.statusCode = status;
      this.set("Content-Length", Buffer2.byteLength(body));
      if (this.req.method === "HEAD") {
        this.end();
      } else {
        this.end(body);
      }
    };
    res.vary = function(field) {
      if (!field || Array.isArray(field) && !field.length) {
        deprecate("res.vary(): Provide a field name");
        return this;
      }
      vary(this, field);
      return this;
    };
    res.render = function render(view, options, callback) {
      var app2 = this.req.app;
      var done = callback;
      var opts = options || {};
      var req = this.req;
      var self = this;
      if (typeof options === "function") {
        done = options;
        opts = {};
      }
      opts._locals = self.locals;
      done = done || function(err, str) {
        if (err) return req.next(err);
        self.send(str);
      };
      app2.render(view, opts, done);
    };
    function sendfile(res2, file, options, callback) {
      var done = false;
      var streaming;
      function onaborted() {
        if (done) return;
        done = true;
        var err = new Error("Request aborted");
        err.code = "ECONNABORTED";
        callback(err);
      }
      function ondirectory() {
        if (done) return;
        done = true;
        var err = new Error("EISDIR, read");
        err.code = "EISDIR";
        callback(err);
      }
      function onerror(err) {
        if (done) return;
        done = true;
        callback(err);
      }
      function onend() {
        if (done) return;
        done = true;
        callback();
      }
      function onfile() {
        streaming = false;
      }
      function onfinish(err) {
        if (err && err.code === "ECONNRESET") return onaborted();
        if (err) return onerror(err);
        if (done) return;
        setImmediate(function() {
          if (streaming !== false && !done) {
            onaborted();
            return;
          }
          if (done) return;
          done = true;
          callback();
        });
      }
      function onstream() {
        streaming = true;
      }
      file.on("directory", ondirectory);
      file.on("end", onend);
      file.on("error", onerror);
      file.on("file", onfile);
      file.on("stream", onstream);
      onFinished(res2, onfinish);
      if (options.headers) {
        file.on("headers", function headers(res3) {
          var obj = options.headers;
          var keys = Object.keys(obj);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            res3.setHeader(k, obj[k]);
          }
        });
      }
      file.pipe(res2);
    }
    function stringify(value, replacer, spaces, escape2) {
      var json = replacer || spaces ? JSON.stringify(value, replacer, spaces) : JSON.stringify(value);
      if (escape2 && typeof json === "string") {
        json = json.replace(/[<>&]/g, function(c) {
          switch (c.charCodeAt(0)) {
            case 60:
              return "\\u003c";
            case 62:
              return "\\u003e";
            case 38:
              return "\\u0026";
            /* istanbul ignore next: unreachable default */
            default:
              return c;
          }
        });
      }
      return json;
    }
  }
});

// node_modules/serve-static/index.js
var require_serve_static = __commonJS({
  "node_modules/serve-static/index.js"(exports, module) {
    "use strict";
    var encodeUrl = require_encodeurl();
    var escapeHtml = require_escape_html();
    var parseUrl = require_parseurl();
    var resolve = __require("path").resolve;
    var send = require_send();
    var url2 = __require("url");
    module.exports = serveStatic;
    module.exports.mime = send.mime;
    function serveStatic(root, options) {
      if (!root) {
        throw new TypeError("root path required");
      }
      if (typeof root !== "string") {
        throw new TypeError("root path must be a string");
      }
      var opts = Object.create(options || null);
      var fallthrough = opts.fallthrough !== false;
      var redirect = opts.redirect !== false;
      var setHeaders = opts.setHeaders;
      if (setHeaders && typeof setHeaders !== "function") {
        throw new TypeError("option setHeaders must be function");
      }
      opts.maxage = opts.maxage || opts.maxAge || 0;
      opts.root = resolve(root);
      var onDirectory = redirect ? createRedirectDirectoryListener() : createNotFoundDirectoryListener();
      return function serveStatic2(req, res, next) {
        if (req.method !== "GET" && req.method !== "HEAD") {
          if (fallthrough) {
            return next();
          }
          res.statusCode = 405;
          res.setHeader("Allow", "GET, HEAD");
          res.setHeader("Content-Length", "0");
          res.end();
          return;
        }
        var forwardError = !fallthrough;
        var originalUrl = parseUrl.original(req);
        var path = parseUrl(req).pathname;
        if (path === "/" && originalUrl.pathname.substr(-1) !== "/") {
          path = "";
        }
        var stream = send(req, path, opts);
        stream.on("directory", onDirectory);
        if (setHeaders) {
          stream.on("headers", setHeaders);
        }
        if (fallthrough) {
          stream.on("file", function onFile() {
            forwardError = true;
          });
        }
        stream.on("error", function error(err) {
          if (forwardError || !(err.statusCode < 500)) {
            next(err);
            return;
          }
          next();
        });
        stream.pipe(res);
      };
    }
    function collapseLeadingSlashes(str) {
      for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== 47) {
          break;
        }
      }
      return i > 1 ? "/" + str.substr(i) : str;
    }
    function createHtmlDocument(title, body) {
      return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>' + title + "</title>\n</head>\n<body>\n<pre>" + body + "</pre>\n</body>\n</html>\n";
    }
    function createNotFoundDirectoryListener() {
      return function notFound() {
        this.error(404);
      };
    }
    function createRedirectDirectoryListener() {
      return function redirect(res) {
        if (this.hasTrailingSlash()) {
          this.error(404);
          return;
        }
        var originalUrl = parseUrl.original(this.req);
        originalUrl.path = null;
        originalUrl.pathname = collapseLeadingSlashes(originalUrl.pathname + "/");
        var loc = encodeUrl(url2.format(originalUrl));
        var doc = createHtmlDocument("Redirecting", "Redirecting to " + escapeHtml(loc));
        res.statusCode = 301;
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.setHeader("Content-Length", Buffer.byteLength(doc));
        res.setHeader("Content-Security-Policy", "default-src 'none'");
        res.setHeader("X-Content-Type-Options", "nosniff");
        res.setHeader("Location", loc);
        res.end(doc);
      };
    }
  }
});

// node_modules/express/lib/express.js
var require_express = __commonJS({
  "node_modules/express/lib/express.js"(exports, module) {
    "use strict";
    var bodyParser = require_body_parser();
    var EventEmitter = __require("events").EventEmitter;
    var mixin = require_merge_descriptors();
    var proto = require_application();
    var Route = require_route();
    var Router = require_router();
    var req = require_request();
    var res = require_response();
    exports = module.exports = createApplication;
    function createApplication() {
      var app2 = function(req2, res2, next) {
        app2.handle(req2, res2, next);
      };
      mixin(app2, EventEmitter.prototype, false);
      mixin(app2, proto, false);
      app2.request = Object.create(req, {
        app: { configurable: true, enumerable: true, writable: true, value: app2 }
      });
      app2.response = Object.create(res, {
        app: { configurable: true, enumerable: true, writable: true, value: app2 }
      });
      app2.init();
      return app2;
    }
    exports.application = proto;
    exports.request = req;
    exports.response = res;
    exports.Route = Route;
    exports.Router = Router;
    exports.json = bodyParser.json;
    exports.query = require_query();
    exports.raw = bodyParser.raw;
    exports.static = require_serve_static();
    exports.text = bodyParser.text;
    exports.urlencoded = bodyParser.urlencoded;
    var removedMiddlewares = [
      "bodyParser",
      "compress",
      "cookieSession",
      "session",
      "logger",
      "cookieParser",
      "favicon",
      "responseTime",
      "errorHandler",
      "timeout",
      "methodOverride",
      "vhost",
      "csrf",
      "directory",
      "limit",
      "multipart",
      "staticCache"
    ];
    removedMiddlewares.forEach(function(name) {
      Object.defineProperty(exports, name, {
        get: function() {
          throw new Error("Most middleware (like " + name + ") is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.");
        },
        configurable: true
      });
    });
  }
});

// node_modules/express/index.js
var require_express2 = __commonJS({
  "node_modules/express/index.js"(exports, module) {
    "use strict";
    module.exports = require_express();
  }
});

// server/src/index.ts
import { spawn } from "node:child_process";
import { writeSync } from "node:fs";
import { fileURLToPath as fileURLToPath2 } from "node:url";
import { dirname as dirname2, join as join5 } from "node:path";

// server/src/app.ts
var import_express = __toESM(require_express2(), 1);
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { basename, dirname, extname, isAbsolute as isAbsolute2, join as join4, normalize as normalize2 } from "node:path";

// server/src/operatorMessages.ts
import { createHash } from "node:crypto";
function record(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function replyReceiptMatches(value, runId, messageId, sourceThreadId) {
  const outcome = record(value);
  const question = record(outcome.question);
  const message = record(outcome.message);
  if (Object.keys(question).length) return question.message_id === messageId && question.run_id === runId;
  if (message.run_id === runId) return true;
  return !!sourceThreadId && typeof message.id === "string" && message.thread_id === sourceThreadId && typeof message.run_id === "string" && message.to_handle === `run:${message.run_id}`;
}
function receiptMatches(row, value) {
  const outcome = record(value);
  if (row.operation === "reply") {
    return replyReceiptMatches(outcome, row.runId, row.target, row.sourceThreadId);
  }
  if (!Array.isArray(outcome.messages) || typeof outcome.recipients !== "number" || outcome.recipients !== outcome.messages.length) return false;
  return outcome.messages.every((raw) => {
    const message = record(raw);
    if (row.target.toLowerCase().startsWith("@worktree:")) {
      return typeof message.id === "string" && typeof message.to_handle === "string" && (typeof message.run_id === "string" || message.run_id === null);
    }
    if (message.run_id === row.runId) return true;
    return typeof message.id === "string" && typeof message.run_id === "string" && message.to_handle === `run:${message.run_id}`;
  });
}
async function recoverOperatorMessage(row, deps) {
  let probe;
  try {
    probe = await (deps.showRequest ?? showRequest)(row.requestId);
  } catch {
    probe = null;
  }
  if (!probe || probe.requestId !== row.requestId || probe.state !== "completed" || probe.raw.method !== (row.operation === "reply" ? "orchestration.reply" : "orchestration.send") || !receiptMatches(row, probe.outcome)) {
    throw Object.assign(new OrcaCliError(`Operator request ${row.requestId} remains unresolved; inspect it before retrying`, "operator_message_unknown"), { requestId: row.requestId });
  }
  await deps.store.recordOperatorMessage({ ...row, state: "completed", outcome: probe.outcome, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  return { requestId: row.requestId, outcome: probe.outcome };
}
async function preflightOperatorMessage(input, deps) {
  const target = input.operation === "reply" ? input.messageId : input.audience;
  if (input.operation === "reply") {
    const checkpoint = (await deps.store.listMailboxChecks(input.runId)).find((row) => row.pendingQuestionIds.includes(target));
    const event = checkpoint?.delivery?.messages.find((message) => message.id === target);
    if (event?.type === "escalation" && event.payload) {
      let payload = {};
      try {
        payload = record(JSON.parse(event.payload));
      } catch {
      }
      if (isStopEventReason(payload.stopReason)) {
        throw new OrcaCliError("A worker stop event is not a replyable question", "stop_event_not_question");
      }
    }
    const previous = checkpoint?.replyRequests?.[target];
    if (previous) return performOperatorReply({ ...input, from: previous.from }, deps);
  }
  const rows = await deps.store.listOperatorMessages(input.runId);
  const prior = rows.find((row) => row.operation === input.operation && row.target === target && ["prepared", "unknown"].includes(row.state));
  if (!prior) {
    if (input.operation === "reply") {
      const pending = (await deps.store.listMailboxChecks(input.runId)).some((row) => row.pendingQuestionIds.includes(target));
      const completed = pending && rows.find((row) => row.operation === "reply" && row.target === target && row.state === "completed" && row.outcome);
      if (completed) return performOperatorReply({ ...input, from: completed.from }, deps);
    }
    return null;
  }
  const result = await recoverOperatorMessage(prior, deps);
  const bodyHash = createHash("sha256").update(input.operation === "reply" ? input.body : JSON.stringify([input.body, input.subject, input.type, input.priority ?? null])).digest("hex");
  if (input.operation === "reply") {
    await settleMailboxReply({ ...input, from: prior.from }, deps, prior.requestId, prior.from, prior.bodyHash);
  }
  if (prior.bodyHash !== bodyHash) throw Object.assign(new OrcaCliError(`Previous operator request ${prior.requestId} was reconciled; submit the new message again`, "operator_message_reconciled"), { requestId: prior.requestId });
  return result;
}
async function perform(operation, input, deps) {
  const target = operation === "reply" ? input.messageId : input.audience;
  const hashInput = operation === "reply" ? input.body : JSON.stringify([input.body, input.subject, input.type, input.priority ?? null]);
  const bodyHash = createHash("sha256").update(hashInput).digest("hex");
  const prior = (await deps.store.listOperatorMessages(input.runId)).find((row2) => row2.operation === operation && row2.target === target && ["prepared", "unknown"].includes(row2.state));
  if (prior) {
    const result = await recoverOperatorMessage(prior, deps);
    if (prior.bodyHash === bodyHash && prior.from === input.from) return result;
    throw Object.assign(new OrcaCliError(`Previous operator request ${prior.requestId} was reconciled; submit the new message again`, "operator_message_reconciled"), { requestId: prior.requestId });
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  let row = { requestId: (deps.newRequestId ?? newRequestId)(), operation, runId: input.runId, target, from: input.from, ...operation === "reply" ? { sourceThreadId: input.sourceThreadId ?? null } : {}, bodyHash, state: "prepared", outcome: null, createdAt: now, updatedAt: now };
  await deps.store.recordOperatorMessage(row);
  let outcome;
  try {
    outcome = operation === "reply" ? await (deps.reply ?? replyToMessage)(target, input.body, input.from, row.requestId) : await (deps.sendGroup ?? sendCoordinatorGroupMessage)({ ...input, requestId: row.requestId });
  } catch (error) {
    const data = record(record(record(error.payload).error).data);
    row = { ...row, state: data.effectsApplied === false ? "refused" : "unknown", updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
    await deps.store.recordOperatorMessage(row);
    throw Object.assign(error instanceof Error ? error : new Error(String(error)), { requestId: row.requestId });
  }
  if (!receiptMatches(row, outcome)) {
    await deps.store.recordOperatorMessage({ ...row, state: "unknown", updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
    throw Object.assign(new OrcaCliError(`Operator request ${row.requestId} has an unverified receipt`, "operator_message_unknown"), { requestId: row.requestId });
  }
  await deps.store.recordOperatorMessage({ ...row, state: "completed", outcome, updatedAt: (/* @__PURE__ */ new Date()).toISOString() });
  return { requestId: row.requestId, outcome };
}
async function performOperatorReply(input, deps) {
  const checkpoints = await deps.store.listMailboxChecks(input.runId);
  const checkpoint = checkpoints.find((row) => row.pendingQuestionIds.includes(input.messageId));
  const previous = checkpoint?.replyRequests?.[input.messageId];
  const event = checkpoint?.delivery?.messages.find((message) => message.id === input.messageId);
  if (event?.type === "escalation" && event.payload) {
    try {
      const payload = record(JSON.parse(event.payload));
      if (isStopEventReason(payload.stopReason)) {
        throw new OrcaCliError("A worker stop event is not a replyable question", "stop_event_not_question");
      }
    } catch (error) {
      if (error instanceof OrcaCliError) throw error;
    }
  }
  if (checkpoint && previous) {
    const bodyHash = createHash("sha256").update(input.body).digest("hex");
    const probe = await (deps.showRequest ?? showRequest)(previous.requestId).catch(() => null);
    const outcome = record(probe?.outcome);
    const original = checkpoint.delivery?.messages.find((message) => message.id === input.messageId);
    if (!probe || probe.requestId !== previous.requestId || probe.state !== "completed" || probe.raw.method !== "orchestration.reply" || !replyReceiptMatches(outcome, input.runId, input.messageId, original ? original.thread_id ?? original.id : input.sourceThreadId)) {
      throw Object.assign(new OrcaCliError(`Reply request ${previous.requestId} remains unresolved`, "operator_message_unknown"), { requestId: previous.requestId });
    }
    await settleMailboxReply(input, deps, previous.requestId, previous.from, previous.bodyHash);
    if (bodyHash !== previous.bodyHash) throw Object.assign(new OrcaCliError(`Previous reply ${previous.requestId} was reconciled; submit the new reply again`, "operator_message_reconciled"), { requestId: previous.requestId });
    return { requestId: previous.requestId, outcome };
  }
  if (checkpoint) {
    const hash = createHash("sha256").update(input.body).digest("hex");
    const completed = (await deps.store.listOperatorMessages(input.runId)).find((row) => row.operation === "reply" && row.target === input.messageId && row.state === "completed" && row.outcome);
    if (completed?.outcome) {
      await settleMailboxReply(input, deps, completed.requestId, completed.from, completed.bodyHash);
      if (completed.bodyHash !== hash) throw Object.assign(new OrcaCliError(`Previous reply ${completed.requestId} was reconciled; submit the new reply again`, "operator_message_reconciled"), { requestId: completed.requestId });
      return { requestId: completed.requestId, outcome: completed.outcome };
    }
  }
  const result = await perform("reply", input, deps);
  if (checkpoint) await settleMailboxReply(input, deps, result.requestId, input.from, createHash("sha256").update(input.body).digest("hex"));
  return result;
}
async function settleMailboxReply(input, deps, requestId, from, bodyHash) {
  const checkpoint = (await deps.store.listMailboxChecks(input.runId)).find((row) => row.pendingQuestionIds.includes(input.messageId));
  if (!checkpoint) return;
  const pendingQuestionIds = checkpoint.pendingQuestionIds.filter((id) => id !== input.messageId);
  await deps.store.recordMailboxCheck({
    ...checkpoint,
    pendingQuestionIds,
    state: checkpoint.state !== "received" && checkpoint.delivery?.deliveryAcknowledged === true && !pendingQuestionIds.length && checkpoint.processedMessageIds.length === checkpoint.delivery.messages.length ? "completed" : checkpoint.state,
    replyRequests: { ...checkpoint.replyRequests, [input.messageId]: { requestId, from, bodyHash, state: "completed" } },
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  });
}
function performOperatorGroupSend(input, deps) {
  return perform("group", input, deps);
}

// server/src/runHealth.ts
function isChatCoordinatorHandle(handle) {
  if (typeof handle !== "string") return false;
  const trimmed = handle.trim();
  return trimmed.startsWith("orca_session_id:") || trimmed.startsWith("session:") || trimmed.startsWith("chat:");
}
function evaluateRunOwnership(run, viewer) {
  if (!run) {
    return {
      state: "unverifiable",
      coordinatorKind: "unknown",
      coordinationMode: "unknown",
      detail: "The Run record could not be read (unknown id, or the run-show read failed). Ownership is unknown; mutation stays unavailable."
    };
  }
  const bound = typeof run.coordinator_handle === "string" ? run.coordinator_handle.trim() : "";
  if (!bound) {
    return {
      state: "unbound",
      coordinatorKind: "none",
      coordinationMode: "unbound",
      detail: "No coordinator is bound to this Run. This viewer may start it; the start will bind its own coordinator terminal."
    };
  }
  const ourHandle = viewer.coordinatorHandle?.trim() ?? "";
  if (viewer.running && ourHandle && bound === ourHandle) {
    if (viewer.runId === run.id) {
      return {
        state: "viewer_coordinator",
        coordinatorKind: "viewer_loop",
        coordinationMode: "human_panel",
        detail: "This viewer's live coordinator is bound to this Run and owns its scheduling."
      };
    }
    return {
      state: "viewer_coordinator_other_run",
      coordinatorKind: "viewer_loop",
      coordinationMode: "panel_mismatch",
      detail: `This viewer's coordinator terminal is bound here, but the loop reports Run ${viewer.runId ?? "unknown"} \u2014 the two disagree, which needs attention before starting anything.`
    };
  }
  const elsewhere = viewer.running && viewer.runId && viewer.runId !== run.id ? " This viewer's coordinator is currently bound to another Run." : "";
  const chat = isChatCoordinatorHandle(bound);
  return {
    state: "external_coordinator",
    coordinatorKind: chat ? "native_chat" : "external_terminal",
    coordinationMode: chat ? "agent_native_chat" : "agent_terminal",
    detail: `${chat ? "Native chat" : "Terminal"} ${bound} is bound as this Run's coordinator. This viewer cannot mutate the Run until it takes over, which would fence that ${chat ? "chat" : "terminal"}.` + elsewhere
  };
}
function summarizeIds(ids, max = 3) {
  if (ids.length <= max) return ids.join(", ");
  return `${ids.slice(0, max).join(", ")} +${ids.length - max} more`;
}
function taskFromWorkspace(task, workspaceDir) {
  const incarnation = task.created_by_process_incarnation;
  return typeof incarnation === "string" && incarnation.includes(`::${workspaceDir}@@`);
}
function buildRunHealth(opts) {
  const { runId, run, viewer, evidence } = opts;
  const ownership = evaluateRunOwnership(run, viewer);
  const warnings = [];
  if (evidence.tasks !== null && evidence.messages !== null && evidence.tasks.length === 0 && evidence.messages.length > 0) {
    warnings.push({
      code: "messages_without_tasks",
      severity: "info",
      message: `This Run has ${evidence.messages.length} message${evidence.messages.length === 1 ? "" : "s"} but no tasks \u2014 an empty graph with retained history, not a rendering failure.`
    });
  }
  if (evidence.tasks !== null && evidence.workers !== null) {
    const dispatched = evidence.tasks.filter((t) => t.status === "dispatched");
    const orphaned = dispatched.filter(
      (task) => !evidence.workers.some(
        (row) => typeof task.dispatch_id === "string" ? row.dispatchId === task.dispatch_id : row.taskId === task.id
      )
    );
    if (orphaned.length > 0) {
      warnings.push({
        code: "dispatched_task_without_worker",
        severity: "warning",
        message: `${orphaned.length} dispatched task${orphaned.length === 1 ? "" : "s"} have no worker in the fleet accounting (${summarizeIds(orphaned.map((t) => t.id))}) \u2014 the attempt may have died without settling.`
      });
    }
  }
  if (evidence.workers !== null) {
    const reclaimable = evidence.workers.filter((row) => row.terminalState === "reclaimable");
    if (reclaimable.length > 0) {
      warnings.push({
        code: "reclaimable_workers",
        severity: "warning",
        message: `${reclaimable.length} worker terminal${reclaimable.length === 1 ? " is" : "s are"} reclaimable \u2014 left behind by an earlier start; release or reclaim them to settle ownership.`
      });
    }
  }
  if (evidence.gates !== null) {
    const pending = evidence.gates.filter((g) => g.status === "pending");
    if (pending.length > 0) {
      warnings.push({
        code: "pending_gates",
        severity: "info",
        message: `${pending.length} decision gate${pending.length === 1 ? " is" : "s are"} waiting for a human resolution; the gated tasks stay blocked until then.`
      });
    }
  }
  const failures = [
    evidence.taskError && "tasks",
    evidence.gateError && "gates",
    evidence.messageError && "messages",
    evidence.workerError && "workers"
  ].filter((x) => Boolean(x));
  if (failures.length > 0) {
    warnings.push({
      code: "evidence_incomplete",
      severity: "warning",
      message: `The ${failures.join(" and ")} read${failures.length === 1 ? "" : "s"} failed, so those counts are unknown (shown as \u201C\u2014\u201D) rather than zero.`
    });
  }
  if (opts.workspaceDir && evidence.tasks !== null && evidence.tasks.length > 0) {
    const anyLocal = evidence.tasks.some((t) => taskFromWorkspace(t, opts.workspaceDir));
    if (!anyLocal) {
      warnings.push({
        code: "foreign_workspace",
        severity: "warning",
        message: "This Run's tasks were created from a different workspace; it is visible only because it was selected or persisted explicitly."
      });
    }
  }
  return {
    runId,
    ownership: ownership.state,
    coordinatorKind: ownership.coordinatorKind,
    coordinationMode: ownership.coordinationMode,
    ownershipDetail: ownership.detail,
    coordinatorHandle: run && typeof run.coordinator_handle === "string" && run.coordinator_handle.trim() ? run.coordinator_handle : null,
    consumerGeneration: run && typeof run.consumer_generation === "number" ? run.consumer_generation : null,
    viewerCoordinator: {
      running: viewer.running,
      runId: viewer.runId,
      coordinatorHandle: viewer.coordinatorHandle
    },
    counts: {
      tasks: evidence.tasks ? evidence.tasks.length : null,
      messages: evidence.messages ? evidence.messages.length : null,
      workers: evidence.workers ? evidence.workers.length : null,
      gates: evidence.gates ? evidence.gates.length : null,
      pendingGates: evidence.gates ? evidence.gates.filter((g) => g.status === "pending").length : null
    },
    evidenceComplete: evidence.tasks !== null && evidence.gates !== null && evidence.messages !== null && evidence.workers !== null && !evidence.workerError,
    removedWork: opts.removedWork ?? null,
    warnings
  };
}

// server/src/requestLedger.ts
import { appendFile, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
var REQUESTS_FILE = WORKSPACE_STATE_FILES.requests;
var JOURNAL_MAX_BYTES = 5 * 1024 * 1024;
var JOURNAL_KEEP_BYTES = 2 * 1024 * 1024;
var MAX_RECORDS = 200;
var MAX_NOTE = 300;
var MAX_ID = 128;
var MAX_TARGET = 256;
function clampId(value) {
  if (typeof value !== "string") return null;
  const v = value.trim();
  return v ? v.slice(0, MAX_ID) : null;
}
function clampTarget(value) {
  if (typeof value !== "string") return null;
  const v = value.trim();
  return v ? v.slice(0, MAX_TARGET) : null;
}
function clampNote(value) {
  if (typeof value !== "string") return null;
  const v = value.replace(/\s+/g, " ").trim();
  if (!v) return null;
  return v.length > MAX_NOTE ? `${v.slice(0, MAX_NOTE - 3)}...` : v;
}
var RequestLedger = class {
  constructor(workspaceDir) {
    this.workspaceDir = workspaceDir;
    this.path = join(workspaceDir, REQUESTS_FILE);
  }
  path;
  /** Serialize append+rotation so concurrent mutations cannot race a rotate. */
  appendChain = Promise.resolve();
  /**
   * Append one observation for a request id. Appending the SAME id again is
   * the update mechanism: the first line fixes `createdAt`, the last line
   * wins for everything else. Never throws out of the caller's mutation path
   * — callers still wrap this best-effort, but a ledger failure must not be
   * what turns a live mutation ambiguous.
   */
  async record(meta) {
    const requestId = clampId(meta.requestId);
    if (!requestId) return;
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const record3 = {
      recordType: "mutation_request",
      requestId,
      operation: clampId(meta.operation) ?? "unknown",
      runId: clampId(meta.runId),
      taskId: clampId(meta.taskId),
      dispatchId: clampId(meta.dispatchId),
      target: clampTarget(meta.target),
      note: clampNote(meta.note),
      settledLocally: typeof meta.settledLocally === "boolean" ? meta.settledLocally : null,
      createdAt: now,
      updatedAt: now
    };
    const write = this.appendChain.then(async () => {
      prepareWorkspaceStateFile(this.workspaceDir, REQUESTS_FILE, true);
      await this.rotateIfNeeded();
      await appendFile(this.path, `${JSON.stringify(record3)}
`, "utf8");
    });
    this.appendChain = write.catch(() => {
    });
    await write;
  }
  /**
   * Deduplicated rows, newest request first: the FIRST occurrence of an id
   * fixes `createdAt`, the LAST wins for every other field. A torn final
   * line (crash mid-append) is skipped, exactly like the activity journal.
   */
  async list() {
    let text2;
    try {
      text2 = await readFile(workspaceStateReadPath(this.workspaceDir, REQUESTS_FILE), "utf8");
    } catch (err) {
      if (err.code === "ENOENT") return [];
      throw err;
    }
    const byId = /* @__PURE__ */ new Map();
    for (const line of text2.split("\n")) {
      if (!line.trim()) continue;
      try {
        const parsed = JSON.parse(line);
        if (!parsed || parsed.recordType !== "mutation_request") continue;
        const requestId = clampId(parsed.requestId);
        if (!requestId) continue;
        const existing = byId.get(requestId);
        const record3 = {
          recordType: "mutation_request",
          requestId,
          operation: clampId(parsed.operation) ?? existing?.operation ?? "unknown",
          runId: clampId(parsed.runId) ?? existing?.runId ?? null,
          taskId: clampId(parsed.taskId) ?? existing?.taskId ?? null,
          dispatchId: clampId(parsed.dispatchId) ?? existing?.dispatchId ?? null,
          target: clampTarget(parsed.target) ?? existing?.target ?? null,
          note: clampNote(parsed.note) ?? existing?.note ?? null,
          settledLocally: typeof parsed.settledLocally === "boolean" ? parsed.settledLocally : existing?.settledLocally ?? null,
          createdAt: existing?.createdAt ?? (typeof parsed.createdAt === "string" ? parsed.createdAt : ""),
          updatedAt: typeof parsed.updatedAt === "string" && parsed.updatedAt ? parsed.updatedAt : existing?.updatedAt ?? ""
        };
        byId.set(requestId, record3);
      } catch {
      }
    }
    return [...byId.values()].sort((a, b) => a.updatedAt < b.updatedAt ? 1 : a.updatedAt > b.updatedAt ? -1 : 0).slice(0, MAX_RECORDS);
  }
  async rotateIfNeeded() {
    let size = 0;
    try {
      size = (await stat(this.path)).size;
    } catch (err) {
      if (err.code === "ENOENT") return;
      throw err;
    }
    if (size < JOURNAL_MAX_BYTES) return;
    const data = await readFile(this.path);
    const start = Math.max(0, data.length - JOURNAL_KEEP_BYTES);
    const firstNewline = data.indexOf(10, start);
    const kept = firstNewline >= 0 ? data.subarray(firstNewline + 1) : data.subarray(start);
    await writeFile(this.path, kept);
  }
};

// server/src/launchHistory.ts
import { appendFile as appendFile2, readFile as readFile2, stat as stat2, writeFile as writeFile2 } from "node:fs/promises";
import { join as join2 } from "node:path";
var LAUNCHES_FILE = WORKSPACE_STATE_FILES.launches;
var MAX_BYTES = 5 * 1024 * 1024;
var KEEP_BYTES = 3 * 1024 * 1024;
var MAX_RECORDS2 = 1e4;
var ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;
var HARNESS = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
var queues = /* @__PURE__ */ new Map();
function validOptionalText(value, maxLength) {
  if (value === void 0 || value === null) return true;
  if (typeof value !== "string") return false;
  if (value.length === 0 || value.length > maxLength) return false;
  return !/[\x00-\x1f\x7f]/.test(value);
}
function normalizeOptionalText(value, maxLength) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength || /[\x00-\x1f\x7f]/.test(trimmed)) return null;
  return trimmed;
}
function valid(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const row = value;
  return typeof row.runId === "string" && ID.test(row.runId) && typeof row.taskId === "string" && ID.test(row.taskId) && typeof row.dispatchId === "string" && ID.test(row.dispatchId) && typeof row.harness === "string" && HARNESS.test(row.harness) && validOptionalText(row.model, 512) && validOptionalText(row.effort, 64) && validOptionalText(row.worktree, 1024) && validOptionalText(row.worktreeName, 256) && validOptionalText(row.branch, 256) && (row.source === "viewer-launch" || row.source === "worker-show");
}
function mergeRecord(previous, next) {
  const normalizedNext = {
    runId: next.runId,
    taskId: next.taskId,
    dispatchId: next.dispatchId,
    harness: next.harness,
    model: normalizeOptionalText(next.model, 512),
    effort: normalizeOptionalText(next.effort, 64),
    worktree: normalizeOptionalText(next.worktree, 1024),
    worktreeName: normalizeOptionalText(next.worktreeName, 256),
    branch: normalizeOptionalText(next.branch, 256),
    source: next.source
  };
  if (!previous) return normalizedNext;
  const authoritativeNext = previous.source !== "worker-show" || normalizedNext.source === "worker-show";
  const pick = (field) => authoritativeNext ? normalizedNext[field] ?? previous[field] ?? null : previous[field] ?? normalizedNext[field] ?? null;
  return {
    runId: normalizedNext.runId,
    taskId: authoritativeNext ? normalizedNext.taskId : previous.taskId,
    dispatchId: normalizedNext.dispatchId,
    harness: authoritativeNext ? normalizedNext.harness : previous.harness,
    model: pick("model"),
    effort: pick("effort"),
    worktree: pick("worktree"),
    worktreeName: pick("worktreeName"),
    branch: pick("branch"),
    source: previous.source === "worker-show" ? "worker-show" : normalizedNext.source
  };
}
var LaunchHistory = class {
  constructor(workspaceDir) {
    this.workspaceDir = workspaceDir;
    this.path = join2(workspaceDir, LAUNCHES_FILE);
  }
  path;
  /** Append one positively identified launch. Repeated observations are safe. */
  async record(row) {
    if (!valid(row)) return;
    const previous = queues.get(this.path) ?? Promise.resolve();
    const write = previous.then(async () => {
      prepareWorkspaceStateFile(this.workspaceDir, LAUNCHES_FILE, true);
      await this.rotateIfNeeded();
      await appendFile2(this.path, `${JSON.stringify(row)}
`, "utf8");
    });
    queues.set(this.path, write.catch(() => {
    }));
    await write;
  }
  /** Last valid observation per Dispatch, scoped to exactly one Run. */
  async list(runId) {
    if (!ID.test(runId)) return /* @__PURE__ */ new Map();
    let content;
    try {
      content = await readFile2(workspaceStateReadPath(this.workspaceDir, LAUNCHES_FILE), "utf8");
    } catch (err) {
      if (err.code === "ENOENT") return /* @__PURE__ */ new Map();
      throw err;
    }
    const records = /* @__PURE__ */ new Map();
    for (const line of content.split("\n")) {
      if (!line) continue;
      try {
        const row = JSON.parse(line);
        if (valid(row) && row.runId === runId) {
          records.set(row.dispatchId, mergeRecord(records.get(row.dispatchId), row));
        }
      } catch {
      }
    }
    return new Map([...records].slice(-MAX_RECORDS2));
  }
  async rotateIfNeeded() {
    let bytes;
    try {
      bytes = (await stat2(this.path)).size;
    } catch (err) {
      if (err.code === "ENOENT") return;
      throw err;
    }
    if (bytes < MAX_BYTES) return;
    const content = await readFile2(this.path);
    const from = Math.max(0, content.length - KEEP_BYTES);
    const newline = content.indexOf(10, from);
    await writeFile2(this.path, content.subarray(newline < 0 ? from : newline + 1));
  }
};

// server/src/taskGuidance.ts
function record2(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function text(value) {
  return typeof value === "string" && value.length > 0 ? value : null;
}
function exactWorkerDispatch(detail, runId, taskId, dispatchId) {
  return detail?.dispatch?.id === dispatchId && detail.dispatch.runId === runId && detail.dispatch.taskId === taskId;
}
async function normalizeTaskMessageReceipt(raw, input, requestId, showWorker = showWorkerDetail) {
  const row = record2(raw);
  const started = ["follow_up", "reopened", "started_fresh"].includes(String(row.delivery)) && !!text(row.followUpOf);
  if (row.ok === false || row.delivery !== void 0 && !started) throw new Error("Unrecognized native send receipt");
  const mutation = record2(row.mutation);
  if (row.requestId !== void 0 && row.requestId !== requestId || mutation.requestId !== void 0 && mutation.requestId !== requestId) {
    throw new Error("Send receipt request identity mismatched");
  }
  let dispatchId;
  let taskId;
  let startReceipt;
  let createdWorker;
  let destinationRunId = null;
  if (started) {
    if (row.runId !== input.runId) throw new Error("Follow-up receipt Run identity is missing or mismatched");
    dispatchId = text(row.dispatchId);
    taskId = text(row.taskId);
    if (!taskId || !dispatchId || dispatchId === input.dispatchId || dispatchId === row.followUpOf) {
      throw new Error("Follow-up receipt lacks a distinct Task/Dispatch identity");
    }
    const worker = await showWorker(dispatchId);
    if (!exactWorkerDispatch(worker, input.runId, taskId, dispatchId) || worker.dispatch.creatorDispatchId != null || worker.dispatch.followUpOf != null && worker.dispatch.followUpOf !== row.followUpOf) {
      throw new Error("Follow-up creation could not be verified against the exact native Dispatch record");
    }
    createdWorker = worker;
    startReceipt = parseWorkerStartReceipt(row, true);
    startReceipt.requestId ??= requestId;
  } else {
    const message = record2(row.message);
    const destination = text(message.to_handle) ?? text(message.to);
    const messageRun = text(message.run_id);
    const redirect = messageRun && messageRun !== input.runId && destination === `run:${messageRun}` && Array.isArray(row.warnings) && row.warnings.some((value) => {
      const warning = record2(value);
      return warning.code === "recipient_run_bound_redirect" && warning.recipient === `dispatch:${input.dispatchId}`;
    });
    if (redirect) {
      destinationRunId = messageRun;
      dispatchId = input.dispatchId;
      taskId = input.taskId;
    } else {
      if (messageRun !== input.runId) throw new Error("Message receipt Run identity is missing or mismatched");
      dispatchId = destination?.startsWith("dispatch:") ? destination.slice("dispatch:".length) : null;
      taskId = dispatchId === input.dispatchId ? input.taskId : null;
    }
    if (dispatchId && !taskId) {
      const detail = await showWorker(dispatchId);
      if (!detail || detail.dispatchId !== dispatchId || detail.runId !== input.runId || !detail.taskId) {
        throw new Error("Routed follow-up identity could not be verified in the requested Run");
      }
      taskId = detail.taskId;
    }
  }
  if (!dispatchId || !taskId) throw new Error("Send receipt lacks authoritative Task/Dispatch identity");
  const receipt = {
    kind: destinationRunId ? "recipient_run_bound_redirect" : dispatchId === input.dispatchId && !started ? "enqueued" : "follow_up",
    runId: input.runId,
    taskId,
    dispatchId,
    requestedTaskId: input.taskId,
    requestedDispatchId: input.dispatchId,
    followUpOf: started ? text(row.followUpOf) : null,
    requestId,
    destinationRunId
  };
  return { receipt, creationProven: started, ...startReceipt ? { startReceipt, createdWorker } : {} };
}
async function saveCheckpoint(deps, row) {
  await deps.store.recordGuidanceSend(row);
  if (deps.audit) await deps.audit(row).catch(() => {
  });
}
async function acceptReceipt(raw, row, deps) {
  try {
    const result = await normalizeTaskMessageReceipt(raw, {
      runId: row.runId,
      taskId: row.requestedTaskId,
      dispatchId: row.requestedDispatchId
    }, row.requestId, deps.showWorker);
    if (row.receipt && (row.receipt.kind !== result.receipt.kind || row.receipt.runId !== result.receipt.runId || row.receipt.taskId !== result.receipt.taskId || row.receipt.dispatchId !== result.receipt.dispatchId || row.receipt.followUpOf !== result.receipt.followUpOf || row.receipt.destinationRunId !== result.receipt.destinationRunId || row.creationProven !== result.creationProven)) {
      throw new Error("Recovered guidance identity conflicts with the accepted receipt");
    }
    if (row.state === "enqueued" || row.state === "follow_up") return { checkpoint: row, result };
    const ready = (!result.startReceipt || result.startReceipt.status === "ready") && (!row.startEvidence || row.startEvidence.status === "ready");
    row = {
      ...row,
      state: ready ? result.receipt.kind === "recipient_run_bound_redirect" ? "enqueued" : result.receipt.kind : "unknown",
      receipt: result.receipt,
      creationProven: result.creationProven,
      ...result.startReceipt && !row.startEvidence ? { startEvidence: { status: result.startReceipt.status, launchMode: result.startReceipt.launchMode } } : {},
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      error: ready ? null : "follow_up_start_unconfirmed"
    };
    await saveCheckpoint(deps, row);
    return { checkpoint: row, result };
  } catch (error) {
    if (row.state === "prepared") {
      await saveCheckpoint(deps, { ...row, state: "unknown", updatedAt: (/* @__PURE__ */ new Date()).toISOString(), error: "receipt_unresolved" });
    }
    throw new OrcaCliError(`Guidance request ${row.requestId} could not be verified: ${String(error.message ?? error)}`, "guidance_unknown");
  }
}
async function recoverTaskGuidance(row, deps) {
  let probe;
  try {
    probe = await (deps.showRequest ?? showRequest)(row.requestId);
  } catch {
    throw new OrcaCliError(`Guidance request ${row.requestId} remains unresolved; inspect it before another send`, "guidance_unknown");
  }
  if (!probe || probe.requestId !== row.requestId || probe.raw.requestId !== row.requestId || probe.state !== "completed" || probe.raw.method !== "orchestration.send" || !probe.outcome) {
    throw new OrcaCliError(`Guidance request ${row.requestId} remains unresolved; inspect it before another send`, "guidance_unknown");
  }
  return acceptReceipt(probe.outcome, row, deps);
}
async function performTaskGuidance(input, deps) {
  const prior = (await deps.store.listGuidanceSends(input.runId)).find((row2) => row2.requestedTaskId === input.taskId && row2.requestedDispatchId === input.dispatchId && (row2.state === "prepared" || row2.state === "unknown"));
  if (prior) {
    const priorResult = await recoverTaskGuidance(prior, deps);
    if (priorResult.checkpoint.state === "unknown") {
      throw new OrcaCliError(`Follow-up request ${prior.requestId} has unconfirmed readiness; inspect its Dispatch`, "guidance_unknown");
    }
    throw new OrcaCliError(`Previous guidance request ${prior.requestId} was reconciled; submit the new guidance again`, "guidance_reconciled");
  }
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  let row = {
    requestId: (deps.newRequestId ?? newRequestId)(),
    runId: input.runId,
    requestedTaskId: input.taskId,
    requestedDispatchId: input.dispatchId,
    from: input.from,
    state: "prepared",
    receipt: null,
    creationProven: false,
    createdAt: timestamp,
    updatedAt: timestamp,
    error: null
  };
  await saveCheckpoint(deps, row);
  let raw;
  try {
    raw = await (deps.send ?? sendCoordinatorMessage)({ ...input, requestId: row.requestId });
  } catch (error) {
    const e = error;
    const data = record2(record2(record2(e.payload).error).data);
    const refused = data.effectsApplied === false;
    row = { ...row, state: refused ? "refused" : "unknown", updatedAt: (/* @__PURE__ */ new Date()).toISOString(), error: e.code ?? "unknown" };
    await saveCheckpoint(deps, row);
    throw error;
  }
  const accepted = await acceptReceipt(raw, row, deps);
  if (accepted.checkpoint.state === "unknown") {
    throw new OrcaCliError(`Follow-up request ${row.requestId} has unconfirmed readiness; inspect its Dispatch`, "guidance_unknown");
  }
  return accepted.result;
}

// server/src/workerOwnership.ts
var CREATOR_RECHECK_MS = 1e4;
var SETTLED_DISPATCH = {
  completed: true,
  succeeded: true,
  failed: true,
  stopped: true,
  abandoned: true,
  circuit_broken: true
};
async function readWorkerOwnership(runId, tasks, rows, cache) {
  const result = {
    heldTaskIds: /* @__PURE__ */ new Set(),
    heldDispatchIds: /* @__PURE__ */ new Set(),
    handedBack: []
  };
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const rowById = new Map(rows.map((row) => [row.dispatchId, row]));
  const details = /* @__PURE__ */ new Map();
  const detail = (id) => {
    let pending2 = details.get(id);
    if (!pending2) {
      pending2 = showWorkerDetail(id).catch(() => null);
      details.set(id, pending2);
    }
    return pending2;
  };
  const relevant = rows.filter((row) => row.runId === runId && !(SETTLED_DISPATCH[row.dispatchStatus] === true && ["released", "retained"].includes(row.terminalState)));
  for (const evidence of cache.values()) evidence.historical = false;
  for (const row of relevant) {
    let evidence = cache.get(row.dispatchId);
    if (!evidence || evidence.creatorId === void 0 && Date.now() - evidence.checkedAt >= CREATOR_RECHECK_MS) {
      const exact = await detail(row.dispatchId);
      const matches = exact?.dispatch?.id === row.dispatchId && exact.dispatch.runId === runId && exact.dispatch.taskId === row.taskId;
      evidence = {
        checkedAt: Date.now(),
        creatorId: matches ? exact.dispatch.creatorDispatchId ?? (exact.dispatch.creatorDispatchId === null || exact.dispatch.depth === 1 ? null : void 0) : void 0
      };
      cache.set(row.dispatchId, evidence);
    }
    if (evidence.creatorId === void 0 && !taskById.get(row.taskId)?.parent_id && !row.projection?.parent) continue;
    if (evidence.creatorId === null) continue;
    let settled = false;
    if (evidence.creatorId) {
      const creator = rowById.get(evidence.creatorId);
      if (creator?.runId === runId) {
        settled = SETTLED_DISPATCH[creator.dispatchStatus] === true;
      } else {
        const exact = await detail(evidence.creatorId);
        settled = exact?.dispatch?.id === evidence.creatorId && exact.dispatch.runId === runId && SETTLED_DISPATCH[exact.dispatch.status ?? ""] === true;
      }
    }
    if (settled) result.handedBack.push(row);
    else {
      result.heldTaskIds.add(row.taskId);
      result.heldDispatchIds.add(row.dispatchId);
    }
  }
  const visited = /* @__PURE__ */ new Set();
  const pending = relevant.map((row) => cache.get(row.dispatchId)?.creatorId).filter((id) => !!id);
  while (pending.length) {
    const id = pending.pop();
    if (visited.has(id)) continue;
    visited.add(id);
    const row = rowById.get(id);
    if (row && (row.runId !== runId || SETTLED_DISPATCH[row.dispatchStatus] !== true || !["released", "retained"].includes(row.terminalState))) continue;
    const exact = await detail(id);
    if (exact?.dispatch?.id !== id || exact.dispatch.runId !== runId || row && exact.dispatch.taskId !== row.taskId) continue;
    if (!row && (SETTLED_DISPATCH[exact.dispatch.status ?? ""] !== true || !["released", "retained"].includes(exact.fleet?.terminalState ?? ""))) continue;
    const creatorId = exact.dispatch.creatorDispatchId ?? (exact.dispatch.creatorDispatchId === null || exact.dispatch.depth === 1 ? null : void 0);
    cache.set(id, { checkedAt: Date.now(), creatorId, historical: true });
    if (creatorId) pending.push(creatorId);
  }
  const keep = /* @__PURE__ */ new Set([...relevant.map((row) => row.dispatchId), ...visited]);
  for (const id of cache.keys()) if (!keep.has(id)) cache.delete(id);
  return result;
}

// server/src/coordinator.ts
import { realpath } from "node:fs/promises";
import { createHash as createHash2 } from "node:crypto";

// server/src/openCodeRoute.ts
var MIN_OPENCODE_API_TUI_VERSION = "1.4.222";
function compareVersions2(a, b) {
  const left = a.split(".").map((part) => Number.parseInt(part, 10) || 0);
  const right = b.split(".").map((part) => Number.parseInt(part, 10) || 0);
  for (let index = 0; index < Math.max(left.length, right.length); index++) {
    const difference = (left[index] ?? 0) - (right[index] ?? 0);
    if (difference !== 0) return difference;
  }
  return 0;
}
function resolveOpenCodeRoute(input) {
  const { ui, model, effort, environment, lane, placement, reuseTerminal, platform, runtimeVersion, capabilities } = input;
  try {
    if (effort && !model) throw new Error("OpenCode effort requires an explicit model.");
    if (model) parseOpenCodeModel(model, effort);
  } catch (err) {
    return { route: "unsupported", reason: String(err.message ?? err), reasonCode: "invalidModel", limitations: ["noFallback"] };
  }
  const versionKnown = typeof runtimeVersion === "string" && /^\d+\.\d+\.\d+$/.test(runtimeVersion);
  const versionAtLeast = (required) => versionKnown && compareVersions2(runtimeVersion, required) >= 0;
  const explicitUi = ui !== "auto";
  const apiRequested = explicitUi || !!model && input.tuiOptIn;
  const apiCompatible = versionAtLeast(MIN_OPENCODE_API_TUI_VERSION);
  const apiPlacement = !environment && !lane && !reuseTerminal && (explicitUi ? platform === "linux" : platform !== "win32") && (placement.kind === "current" || placement.kind === "existing");
  if (apiRequested) {
    if (!apiPlacement || !apiCompatible) {
      const placementUnsupported = !apiPlacement;
      return {
        route: "unsupported",
        reason: placementUnsupported ? explicitUi ? "Explicit OpenCode UI supports only local Linux current/existing non-lane placements without terminal reuse." : "OpenCode API TUI supports only local POSIX current/existing non-lane placements without terminal reuse." : `OpenCode API TUI requires running Orca >= ${MIN_OPENCODE_API_TUI_VERSION}.`,
        reasonCode: placementUnsupported ? "apiUnsupportedPlacement" : "apiRuntimeTooOld",
        limitations: ["noFallback"]
      };
    }
    return {
      route: ui === "mini" ? "api-mini" : "api-tui",
      reason: explicitUi ? "Explicit OpenCode UI uses the viewer-managed API TUI." : "OpenCode TUI opt-in uses the viewer-managed API TUI.",
      reasonCode: "apiTui",
      limitations: ["apiNeedsPreparedRuntime"]
    };
  }
  const nativeModelEligible = !!model && !model.includes("#") && !effort && !environment && !lane && !reuseTerminal && platform !== "win32" && (placement.kind === "current" || placement.kind === "existing");
  if (!model && versionAtLeast(input.nativeDefaultVersion)) {
    return { route: "native-default", reason: "Default OpenCode uses Orca's opencode2 native launcher.", reasonCode: "nativeDefault", limitations: [] };
  }
  if (nativeModelEligible && versionAtLeast(input.nativeModelVersion) && capabilities.includes("orchestration.worker-launch-preferences.v1")) {
    return { route: "native-model", reason: "Explicit model is eligible for Orca's native OpenCode launcher.", reasonCode: "nativeModel", limitations: [] };
  }
  let reason = "OpenCode uses the CLI run compatibility path.";
  let reasonCode = "cliCompatibility";
  if (!versionKnown) {
    reason = "Runtime version is unknown; OpenCode uses CLI run compatibility.";
    reasonCode = "runtimeUnknown";
  } else if (!versionAtLeast(input.nativeDefaultVersion)) {
    reason = "Runtime is older than native OpenCode support; using CLI run compatibility.";
    reasonCode = "runtimeOld";
  } else if (model?.includes("#")) {
    reason = "Model variant cannot be passed to the native launcher; exact variant is preserved through CLI run.";
    reasonCode = "variantCli";
  } else if (effort) {
    reason = "Effort requires the CLI run compatibility path.";
    reasonCode = "effortCli";
  } else if (nativeModelEligible && versionAtLeast(input.nativeModelVersion)) {
    reason = "Runtime lacks worker-launch-preferences.v1; explicit model uses CLI run compatibility.";
    reasonCode = "capabilityMissing";
  }
  if (environment || lane || placement.kind !== "current") {
    return {
      route: "unsupported",
      reason: "The CLI run compatibility launcher cannot honor the selected worker placement.",
      reasonCode: "placementUnsupported",
      limitations: ["noFallback"]
    };
  }
  return {
    route: "cli-run",
    reason,
    reasonCode,
    limitations: ["cliNoFleetHooks", "providerEvidenceSeparate"]
  };
}

// server/src/coordinator.ts
async function listCompleteWorkers(...args) {
  const inventory = await listWorkers(...args);
  if (inventory.partialHostErrors.length) {
    throw new OrcaCliError("Worker inventory is incomplete because one or more hosts could not be observed", "worker_inventory_incomplete");
  }
  return inventory.workers;
}
var INTEGRATION_GATE_MARKER = "[orca-dag:integration]";
var INTEGRATION_RESOLUTION = "integrated";
var RESERVED_WORKTREE_ECHOES = /* @__PURE__ */ new Set(["current", "new-child", "new-top-level", "active"]);
function taskDeps(task) {
  try {
    const parsed = JSON.parse(task.deps || "[]");
    return Array.isArray(parsed) ? parsed.filter((d) => typeof d === "string") : [];
  } catch {
    return [];
  }
}
function laneOfTask(taskId, laneByTask) {
  return laneByTask?.[taskId] ?? null;
}
function isCrossLaneJoin(task, laneByTask) {
  const own = laneOfTask(task.id, laneByTask);
  return taskDeps(task).some((dep) => laneOfTask(dep, laneByTask) !== own);
}
function validateLaneTotalOrder(tasks, laneByTask) {
  const issues = [];
  if (!laneByTask) return issues;
  const byId = new Map(tasks.map((t) => [t.id, t]));
  const members = /* @__PURE__ */ new Map();
  for (const [taskId, laneId] of Object.entries(laneByTask)) {
    if (!members.has(laneId)) members.set(laneId, []);
    members.get(laneId).push(taskId);
  }
  const directDeps = /* @__PURE__ */ new Map();
  for (const t of tasks) directDeps.set(t.id, taskDeps(t));
  const reaches = (from, to) => {
    const seen = /* @__PURE__ */ new Set([from]);
    const stack = [...directDeps.get(from) ?? []];
    while (stack.length) {
      const cur = stack.pop();
      if (cur === to) return true;
      if (seen.has(cur)) continue;
      seen.add(cur);
      stack.push(...directDeps.get(cur) ?? []);
    }
    return false;
  };
  for (const [laneId, taskIds] of members) {
    for (const taskId of taskIds) {
      if (!byId.has(taskId)) {
        issues.push({
          laneId,
          kind: "unknown_task",
          taskIds: [taskId],
          detail: `laneByTask.${taskId} names task ${taskId}, which does not exist in this Run`
        });
      }
    }
    const known = taskIds.filter((id) => byId.has(id));
    for (let i = 0; i < known.length; i++) {
      for (let j = i + 1; j < known.length; j++) {
        const a = known[i];
        const b = known[j];
        if (reaches(a, b) || reaches(b, a)) continue;
        issues.push({
          laneId,
          kind: "unordered_pair",
          taskIds: [a, b],
          detail: `lane "${laneId}" members ${a} and ${b} are not ordered by any dependency path \u2014 one lane runs one task at a time, so unordered work must live in different lanes`
        });
      }
    }
  }
  return issues;
}
function integrationGateQuestion(taskId) {
  return `${INTEGRATION_GATE_MARKER} Cross-lane integration for task ${taskId}: this task joins work from another workspace lane. Integrate the lane workspaces yourself (Orca-dag never merges, rebases, commits, pushes, or deletes branches), then resolve "integrated".`;
}
function isIntegrationGate(gate) {
  return gate.question.includes(INTEGRATION_GATE_MARKER);
}
function gateIntegrated(gate) {
  return !!gate && gate.status === "resolved" && gate.resolution === INTEGRATION_RESOLUTION;
}
var CHECK_WAIT_MS = 3e3;
var RELEASE_RETRY_MAX = 40;
var WAKE_TYPES = ["worker_done", "escalation", "question"];
var TERMINAL_TASK_STATUS = /* @__PURE__ */ new Set(["completed", "failed"]);
var RECENT_MESSAGES_MAX = 30;
var PROCESSED_MESSAGES_MAX = 2e3;
var START_RECEIPTS_MAX = 5;
var CHECK_RECEIPTS_MAX = 60;
var CHECK_MESSAGES_MAX = 20;
var PROVIDER_SESSION_PROBE_TTL_MS = 1e4;
var state = {
  running: false,
  phase: "idle",
  runId: null,
  coordinatorHandle: null,
  opts: null,
  attempts: /* @__PURE__ */ new Map(),
  retryCandidates: /* @__PURE__ */ new Map(),
  workerCreators: /* @__PURE__ */ new Map(),
  delegatedTaskIds: /* @__PURE__ */ new Set(),
  delegatedDispatchIds: /* @__PURE__ */ new Set(),
  startedAt: 0,
  lastTick: 0,
  lastReconciledAt: 0,
  completedAt: null,
  error: null,
  pendingDeliveryId: null,
  queuedDelivery: null,
  inbox: [],
  processedMessages: /* @__PURE__ */ new Set(),
  pendingOwnership: /* @__PURE__ */ new Set(),
  recentMessages: [],
  lastAckedDeliveryId: null,
  cleanupDebt: [],
  lastStopReport: null,
  unownedDispatches: [],
  recovery: null,
  recoverySessions: [],
  providerSessionStore: null,
  requestLedger: null,
  mailboxChecks: /* @__PURE__ */ new Map(),
  guidanceSends: /* @__PURE__ */ new Map(),
  nativeResumes: /* @__PURE__ */ new Map(),
  resumeHolds: /* @__PURE__ */ new Map(),
  ownedDispatchIds: /* @__PURE__ */ new Set(),
  unknownStartRequests: /* @__PURE__ */ new Map(),
  mailboxNeedsDrain: false,
  providerSessionProbeCache: /* @__PURE__ */ new Map(),
  providerSessionDiscoveryAt: /* @__PURE__ */ new Map(),
  retryOfByTask: /* @__PURE__ */ new Map(),
  lanes: /* @__PURE__ */ new Map(),
  integrationParked: /* @__PURE__ */ new Set(),
  stageGit: null,
  stageGitErrors: /* @__PURE__ */ new Map(),
  checks: [],
  checkSequence: 0
};
var LAUNCH_META_CACHE_MAX = 5e3;
var recordedLaunchMeta = /* @__PURE__ */ new Map();
async function recordLaunchEvidenceIfChanged(record3) {
  if (!record3.dispatchId || !record3.harness) return;
  const worktree = positiveSelector(record3.worktree) ? record3.worktree : null;
  const model = record3.model?.trim() || null;
  const effort = record3.effort?.trim() || null;
  const fingerprint = JSON.stringify([record3.harness, model, effort, worktree, record3.source]);
  const key = `${record3.runId}:${record3.taskId}:${record3.dispatchId}`;
  if (recordedLaunchMeta.get(key) === fingerprint) return;
  try {
    await new LaunchHistory(getOrcaRuntime().workspace.dir).record({
      runId: record3.runId,
      taskId: record3.taskId,
      dispatchId: record3.dispatchId,
      harness: record3.harness,
      model,
      effort,
      worktree,
      source: record3.source
    });
    if (recordedLaunchMeta.size >= LAUNCH_META_CACHE_MAX) recordedLaunchMeta.clear();
    recordedLaunchMeta.set(key, fingerprint);
  } catch {
  }
}
function coordinatorStatus() {
  let recovery = state.recovery;
  if (recovery && state.resumeHolds.size) {
    const retryBlocked = [...recovery.retryBlocked];
    const retryBlockedDetails = [...recovery.retryBlockedDetails];
    for (const resume of state.resumeHolds.values()) {
      retryBlocked.push(resume.originalDispatchId);
      retryBlockedDetails.push({
        taskId: resume.taskId,
        dispatchId: resume.originalDispatchId,
        reason: `Native resume ${resume.requestId} is unresolved; inspect the exact request before replacing this worker.`
      });
    }
    recovery = { ...recovery, retryBlocked, retryBlockedDetails };
  }
  return {
    running: state.running,
    phase: stopInFlight ? "stopping" : state.phase,
    runId: state.runId,
    coordinatorHandle: state.coordinatorHandle,
    error: state.error,
    startedAt: state.startedAt,
    lastTick: state.lastTick,
    lastReconciledAt: state.lastReconciledAt,
    completedAt: state.completedAt,
    attempts: [...state.attempts.values()].map((a) => ({
      taskId: a.taskId,
      harness: a.harness,
      mode: a.mode,
      dispatchId: a.dispatchId,
      launchMode: a.launchMode ?? a.startReceipts.at(-1)?.launchMode ?? null,
      guidanceStartEvidence: a.guidanceStartEvidence ?? null,
      handle: a.handle,
      startedAt: a.startedAt,
      failureCount: a.failureCount,
      dispatchStatus: a.dispatchStatus,
      lastHeartbeatAt: a.lastHeartbeatAt,
      liveness: a.liveness,
      // Phase 5 fleet projection: verdict reason, attention, agent-wait
      // stage, terminal accounting, and the launch-preference pair.
      livenessReason: a.livenessReason,
      attention: a.attention,
      stage: a.stage,
      fleetTerminalState: a.fleetTerminalState,
      agentTerminalHandle: a.agentTerminalHandle,
      /** Execution host the fleet last reported (Phase 6) — local or environment. */
      host: a.host,
      providerSession: a.providerSession ? { ...a.providerSession } : null,
      openCodeEvidence: a.openCodeEvidence ?? null,
      openCodeUiRequested: a.openCodeUiRequested ?? null,
      openCodeUiLaunched: a.openCodeUiLaunched ?? null,
      requested: a.requested,
      effective: a.effective,
      reuseOf: a.reuseOf,
      settled: a.settled,
      outcome: a.outcome,
      settledVia: a.settledVia,
      settledAt: a.settledAt,
      terminalDecision: a.terminalDecision,
      terminalDetail: a.terminalDetail,
      /** Bounded release-archive facts from the last terminal receipt (Phase 5). */
      terminalArchive: a.terminalArchive,
      adopted: a.adopted,
      retriedFrom: a.retriedFrom,
      startRequestId: a.startRequestId,
      /** Latest receipt only — the full history is bounded coordinator-side. */
      startReceipt: a.startReceipts.length ? a.startReceipts[a.startReceipts.length - 1] : null,
      nextAction: a.nextAction,
      output: a.output ? {
        source: a.output.source,
        lines: a.output.lines.slice(-8),
        contentComplete: a.output.contentComplete,
        clipped: a.output.clipped,
        cursor: a.output.cursor,
        warnings: a.output.warnings,
        sourceChanged: a.output.sourceChanged,
        ...a.output.fallbackReason !== void 0 ? { fallbackReason: a.output.fallbackReason } : {},
        ...a.output.sourceExact !== void 0 ? { sourceExact: a.output.sourceExact } : {},
        ...a.output.archived !== void 0 ? { archived: a.output.archived } : {},
        ...a.output.provider !== void 0 ? { provider: a.output.provider } : {},
        ...a.output.sourceIdentity !== void 0 ? { sourceIdentity: a.output.sourceIdentity } : {}
      } : null
    })),
    busy: [...state.attempts.values()].filter((a) => !a.settled).length + [...state.retryCandidates.values()].filter((r) => !r.attempt.settled).length + state.unownedDispatches.length + [...state.unknownStartRequests.values()].filter((taskId) => !state.attempts.has(taskId)).length + [...state.guidanceSends.values()].filter((row) => (row.state === "prepared" || row.state === "unknown") && (!row.receipt || ![...state.attempts.values()].some((a) => !a.settled && a.dispatchId === row.receipt.dispatchId) && !state.unownedDispatches.some((value) => value.endsWith(` (${row.receipt.dispatchId})`)))).length,
    /**
     * The configured worker-slot budget (Phase 4 scheduler surface). null while
     * no coordinator is running: capacity is then UNKNOWN, never zero — the
     * DAG readiness projection keys off exactly this distinction.
     */
    maxConcurrency: state.opts?.maxConcurrency ?? null,
    inbox: {
      pending: [...state.inbox],
      pendingDeliveryId: state.pendingDeliveryId,
      recent: [...state.recentMessages],
      lastAckedDeliveryId: state.lastAckedDeliveryId
    },
    cleanupDebt: [...state.cleanupDebt],
    lastStopReport: state.lastStopReport,
    unownedDispatches: [...state.unownedDispatches],
    recovery,
    recoverySessions: state.recoverySessions.map((session) => ({ ...session })),
    /** Workspace-lane projections (worktree-lanes epic): identity + lifecycle. */
    worktreeLanes: laneViews(),
    stageGit: state.stageGit ? {
      base: state.stageGit.base,
      artifactFile: state.stageGit.artifactFile,
      errors: Object.fromEntries(state.stageGitErrors)
    } : null,
    checks: state.checks.map((receipt) => ({
      ...receipt,
      messageTypes: [...receipt.messageTypes],
      agents: receipt.agents.map((agent) => ({ ...agent, attention: [...agent.attention] }))
    }))
  };
}
async function startCoordinator(opts) {
  assertCoordinatorNotStopping();
  return withLifecycleMutation(() => {
    assertCoordinatorNotStopping();
    return startCoordinatorLocked(opts);
  });
}
function assertCoordinatorNotStopping() {
  if (stopInFlight) {
    throw new OrcaCliError("Wait for the current coordinator Stop to finish before starting a Run.", "coordinator_conflict");
  }
}
async function startCoordinatorLocked(opts) {
  const unverified = [opts.defaultHarness, ...Object.values(opts.harnessByTask ?? {})].find(isUnverifiedHarness);
  if (unverified) {
    throw new OrcaCliError(
      `"${unverified}" is an unverified harness and cannot be launched by Orca viewer.`,
      "unverified_harness"
    );
  }
  if (state.running) return;
  state.running = true;
  const myLoop = ++coordinatorLoopGeneration;
  state.phase = "binding";
  opts = { ...opts, openCodeUiByTask: { ...opts.openCodeUiByTask } };
  state.opts = opts;
  state.attempts = /* @__PURE__ */ new Map();
  state.retryCandidates = /* @__PURE__ */ new Map();
  state.workerCreators = /* @__PURE__ */ new Map();
  state.delegatedTaskIds = /* @__PURE__ */ new Set();
  state.delegatedDispatchIds = /* @__PURE__ */ new Set();
  state.error = null;
  state.runId = null;
  state.completedAt = null;
  state.pendingDeliveryId = null;
  state.queuedDelivery = null;
  state.inbox = [];
  state.processedMessages = /* @__PURE__ */ new Set();
  state.pendingOwnership = /* @__PURE__ */ new Set();
  state.recentMessages = [];
  state.lastAckedDeliveryId = null;
  state.cleanupDebt = [];
  state.unownedDispatches = [];
  state.recovery = null;
  state.recoverySessions = [];
  state.providerSessionStore = new ProviderSessionStore(getOrcaRuntime().workspace.dir);
  state.requestLedger = new RequestLedger(getOrcaRuntime().workspace.dir);
  state.mailboxChecks = /* @__PURE__ */ new Map();
  state.guidanceSends = /* @__PURE__ */ new Map();
  state.nativeResumes = /* @__PURE__ */ new Map();
  state.resumeHolds = /* @__PURE__ */ new Map();
  state.ownedDispatchIds = /* @__PURE__ */ new Set();
  state.unknownStartRequests = /* @__PURE__ */ new Map();
  state.mailboxNeedsDrain = true;
  state.providerSessionProbeCache = /* @__PURE__ */ new Map();
  state.providerSessionDiscoveryAt = /* @__PURE__ */ new Map();
  state.retryOfByTask = /* @__PURE__ */ new Map();
  state.lanes = /* @__PURE__ */ new Map();
  state.integrationParked = /* @__PURE__ */ new Set();
  state.stageGit = null;
  state.stageGitErrors = /* @__PURE__ */ new Map();
  state.checks = [];
  state.checkSequence = 0;
  state.startedAt = Date.now();
  let provisionalHandle = null;
  try {
    const planTasks = await listTasks(opts.runId);
    const nativeCandidates = planTasks.filter((task) => !["completed", "failed", "dispatched"].includes(task.status) && isNativeFreshPreset(opts.harnessByTask[task.id] ?? opts.defaultHarness));
    const nativeFleet = nativeCandidates.length ? await listCompleteWorkers(opts.runId, { includeRemote: true }) : [];
    const nativeLaunchTasks = nativeCandidates.filter((task) => !nativeFleet.some((row) => row.runId === opts.runId && row.taskId === task.id && activeDispatch(row)));
    const nativeReadiness = nativeLaunchTasks.length ? await checkReadiness(true) : void 0;
    for (const task of nativeLaunchTasks) {
      await assertNativePresetSupport(opts.harnessByTask[task.id] ?? opts.defaultHarness, {
        model: opts.modelByTask?.[task.id],
        effort: opts.effortByTask?.[task.id],
        environment: opts.environmentByTask?.[task.id],
        lane: opts.laneByTask?.[task.id],
        placement: opts.laneByTask?.[task.id] ? opts.worktreeLanes?.[opts.laneByTask[task.id]]?.placement : opts.placementByTask?.[task.id]
      }, nativeReadiness);
    }
    if (opts.laneByTask && Object.keys(opts.laneByTask).length > 0) {
      const laneTasks = planTasks;
      const laneIssues = validateLaneTotalOrder(laneTasks, opts.laneByTask);
      if (laneIssues.length > 0) {
        const first = laneIssues[0];
        throw new OrcaCliError(
          `Invalid workspace lane plan: ${first.detail}`,
          "invalid_lane"
        );
      }
    }
    if (planTasks.some((task) => task.spec?.includes(MERGE_PREP_MARKER))) {
      if (Object.keys(opts.environmentByTask ?? {}).length) {
        throw new OrcaCliError("Committed Stage Git verification requires local worktrees", "stage_remote_unsupported");
      }
      const resolvedKeys = {};
      for (const task of planTasks) {
        const laneId = opts.laneByTask?.[task.id];
        const placement = laneId ? opts.worktreeLanes?.[laneId]?.placement : opts.placementByTask?.[task.id];
        if (laneId && !placement) throw new OrcaCliError(
          `Committed Stage task ${task.id} names unknown lane ${laneId}`,
          "unknown_lane"
        );
        if (!placement || placement.kind === "current") {
          resolvedKeys[task.id] = `path:${getOrcaRuntime().workspace.dir}`;
        } else if (placement.kind === "existing") {
          const row = await showWorktree(placement.selector);
          if (!row?.path) throw new OrcaCliError(
            `Committed Stage workspace ${placement.selector} has no verified local path`,
            "workspace_unverifiable"
          );
          resolvedKeys[task.id] = `path:${await realpath(row.path)}`;
        } else {
          const name = placement.name ?? deriveWorktreeName(opts.runId, laneId ?? task.id);
          resolvedKeys[task.id] = `create:${name}`;
        }
      }
      const issues = validateStagePlan(planTasks, opts.laneByTask, opts.placementByTask, resolvedKeys);
      if (issues.length) throw new OrcaCliError(`Invalid committed Stage plan: ${issues[0]}`, "invalid_stage_plan");
      for (const placement of [
        ...Object.values(opts.placementByTask ?? {}),
        ...Object.values(opts.worktreeLanes ?? {}).map((lane) => lane.placement)
      ]) {
        if ((placement.kind === "new-child" || placement.kind === "new-top-level") && placement.baseBranch) {
          throw new OrcaCliError(
            "Committed Stage worktrees use the Run's captured base commit; remove the configured base branch",
            "stage_base_conflict"
          );
        }
      }
      state.stageGit = await StageGit.open(getOrcaRuntime().workspace.dir, opts.runId, planTasks);
    }
    buildLaneRuntimes(opts);
    await adoptDeadCoordinatorTerminal(opts.runId);
    const handle = await ensureCoordinatorTerminal(opts.worktree);
    provisionalHandle = handle;
    if (!state.running) {
      state.coordinatorHandle = handle;
      return;
    }
    await bindRun(opts.runId, handle);
    if (!state.running) {
      state.coordinatorHandle = handle;
      return;
    }
    state.coordinatorHandle = handle;
    state.runId = opts.runId;
    state.phase = "recovering";
    await recoverGuidanceSends(opts.runId, false);
    await recoverState(opts);
    if (!stillMyTurn(myLoop) || state.coordinatorHandle !== handle || state.runId !== opts.runId) return;
    await restoreMailboxChecks(opts.runId);
    await recoverPendingReplies();
    await recoverPermissionPromptDecisions(opts.runId);
    if (!stillMyTurn(myLoop) || state.coordinatorHandle !== handle || state.runId !== opts.runId) return;
    state.phase = "running";
    provisionalHandle = null;
  } catch (err) {
    state.running = false;
    state.phase = "error";
    state.error = String(err.message ?? err);
    if (stopInFlight && provisionalHandle) {
      state.coordinatorHandle = provisionalHandle;
    } else if (provisionalHandle) {
      await closeTerminal(provisionalHandle);
      if (state.coordinatorHandle === provisionalHandle) state.coordinatorHandle = null;
    }
    throw err;
  }
  void loop(myLoop);
}
async function adoptDeadCoordinatorTerminal(runId) {
  const run = await showRun(runId);
  const stale = run?.run.coordinator_handle;
  if (!stale) return;
  const terminals = await listTerminals();
  const found = terminals.find((t) => t.handle === stale);
  if (!found || !found.connected) return;
  const info = parseCoordinatorTitle(found.title);
  if (!info || info.kind !== "main" || info.hash !== getWorkspaceHash()) return;
  await closeTerminalStrict(stale);
}
function getWorkspaceHash() {
  return getOrcaRuntime().workspace.hash;
}
function buildLaneRuntimes(opts) {
  state.lanes = /* @__PURE__ */ new Map();
  for (const [laneId, spec] of Object.entries(opts.worktreeLanes ?? {})) {
    state.lanes.set(laneId, {
      laneId,
      seed: spec.placement,
      taskIds: Object.entries(opts.laneByTask ?? {}).filter(([, id]) => id === laneId).map(([taskId]) => taskId),
      selector: null,
      worktreeId: null,
      path: null,
      branch: null,
      head: null,
      creationDispatchId: null,
      source: null,
      identityMissing: false,
      warnings: []
    });
  }
}
function positiveSelector(value) {
  return typeof value === "string" && value.trim().length > 0 && !RESERVED_WORKTREE_ECHOES.has(value);
}
function laneWorktreeName(opts, lane) {
  const explicit = lane.seed.kind === "new-child" || lane.seed.kind === "new-top-level" ? lane.seed.name : void 0;
  return explicit ?? deriveWorktreeName(opts.runId, lane.laneId);
}
function adoptLaneSelector(lane, selector, source, extra = {}) {
  if (lane.selector && lane.selector !== selector) {
    const warning = `conflicting workspace identity evidence: "${selector}" (${source}) vs adopted "${lane.selector}"`;
    if (!lane.warnings.includes(warning)) lane.warnings.push(warning);
    return;
  }
  if (lane.selector) return;
  lane.selector = selector;
  lane.worktreeId = extra.worktreeId ?? selector;
  lane.path = extra.path ?? null;
  lane.branch = extra.branch ?? null;
  lane.source = source;
  lane.identityMissing = false;
}
async function recoverLaneIdentity(opts, rows) {
  if (state.lanes.size === 0) return;
  for (const lane of state.lanes.values()) {
    const memberTaskIds = new Set(lane.taskIds);
    const echoes = /* @__PURE__ */ new Set();
    for (const row of rows) {
      if (!memberTaskIds.has(row.taskId)) continue;
      const echo = row.projection?.launch?.worktree ?? null;
      if (positiveSelector(echo)) echoes.add(echo);
    }
    if (echoes.size === 1) {
      adoptLaneSelector(lane, [...echoes][0], "worker_list");
      continue;
    }
    if (echoes.size > 1) {
      lane.warnings.push(
        `worker-list reports conflicting workspaces for this lane: ${[...echoes].join(", ")} \u2014 no selector is adopted until the conflict is resolved`
      );
      continue;
    }
    await discoverLaneIdentity(opts, lane);
    const everDispatched = rows.some((r) => memberTaskIds.has(r.taskId));
    if (everDispatched && lane.seed.kind !== "existing" && !lane.selector) {
      lane.identityMissing = true;
      lane.warnings.push(
        "Orca rows show this lane's work ran, but none names its workspace \u2014 identity is unverifiable, so further lane starts are refused until positive evidence exists"
      );
    }
  }
}
async function discoverLaneIdentity(opts, lane) {
  if (lane.seed.kind === "existing") return;
  const name = laneWorktreeName(opts, lane);
  let rows;
  try {
    rows = await listWorktrees();
  } catch (err) {
    lane.warnings.push(
      `worktree discovery failed: ${String(err.message ?? err)} \u2014 identity stays unproven`
    );
    return;
  }
  const matches = rows.filter((r) => r.displayName === name || r.path?.endsWith(`/${name}`));
  if (matches.length === 1) {
    const row = matches[0];
    adoptLaneSelector(lane, row.id, "worktree_show", {
      worktreeId: row.id,
      path: row.path,
      branch: row.branch
    });
  } else if (matches.length > 1) {
    lane.warnings.push(
      `worktree discovery found ${matches.length} workspaces named "${name}" \u2014 ambiguous, nothing adopted`
    );
  }
}
function laneViews() {
  const opts = state.opts;
  if (!opts || state.lanes.size === 0) return [];
  const views = [];
  for (const lane of state.lanes.values()) {
    const attempts = lane.taskIds.map((taskId) => state.attempts.get(taskId)).filter((a) => !!a);
    const anyUnsettled = attempts.some((a) => !a.settled);
    const anyParked = lane.taskIds.some((taskId) => state.integrationParked.has(taskId));
    let derived;
    if (anyParked) {
      derived = "integration_required";
    } else if (lane.identityMissing || lane.seed.kind !== "existing" && !lane.selector && lane.creationDispatchId) {
      derived = "unverifiable";
    } else if (anyUnsettled && !lane.selector && lane.seed.kind !== "existing") {
      derived = "creating";
    } else if (attempts.length === 0) {
      derived = "planned";
    } else if (anyUnsettled || attempts.length < lane.taskIds.length) {
      derived = "active";
    } else {
      derived = "settled";
    }
    views.push({
      laneId: lane.laneId,
      taskIds: [...lane.taskIds],
      state: derived,
      selector: lane.selector,
      worktreeId: lane.worktreeId,
      path: lane.path,
      branch: lane.branch,
      head: lane.head,
      creationDispatchId: lane.creationDispatchId,
      activeDispatchIds: attempts.filter((a) => !a.settled && a.dispatchId).map((a) => a.dispatchId),
      source: lane.source,
      warnings: [...lane.warnings]
    });
  }
  return views.sort((a, b) => a.laneId < b.laneId ? -1 : 1);
}
async function createIntegrationGate(task) {
  const from = state.coordinatorHandle;
  try {
    await runOrca([
      "orchestration",
      "gate-create",
      "--task",
      task.id,
      "--question",
      integrationGateQuestion(task.id),
      "--options",
      JSON.stringify([INTEGRATION_RESOLUTION]),
      "--from",
      from
    ]);
  } catch (err) {
    const detail = String(err.message ?? err);
    state.error = `Failed to create integration gate for task ${task.id}: ${detail}`;
  }
}
function isProviderSessionStatus(value) {
  return value === "active" || value === "idle" || value === "exited" || value === "unknown" || value === "unavailable";
}
function sessionView(binding, observation, decision) {
  return {
    taskId: binding.taskId,
    dispatchId: binding.dispatchId,
    harness: binding.harness,
    sessionId: binding.sessionId,
    status: isProviderSessionStatus(observation.status) ? observation.status : "unknown",
    decision,
    detail: observation.detail ?? null,
    observedAt: observation.observedAt ?? null,
    source: binding.source,
    host: binding.host ?? null,
    workspace: binding.workspace
  };
}
async function readProviderSession(binding, force = false) {
  const cached = state.providerSessionProbeCache.get(binding.dispatchId);
  if (!force && cached?.sessionId === binding.sessionId && Date.now() - cached.checkedAt < PROVIDER_SESSION_PROBE_TTL_MS) {
    return cached.observation;
  }
  let result;
  try {
    if (!state.providerSessionStore) throw new Error("provider session store is not initialized");
    result = await state.providerSessionStore.probe(binding);
  } catch (err) {
    result = {
      ...binding,
      status: "unknown",
      detail: `provider session could not be observed: ${String(err?.message ?? err)}`,
      observedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  state.providerSessionProbeCache.set(binding.dispatchId, {
    sessionId: binding.sessionId,
    checkedAt: Date.now(),
    observation: result
  });
  return result;
}
async function listProviderSessions(runId) {
  try {
    return await state.providerSessionStore?.list(runId) ?? [];
  } catch {
    return [];
  }
}
async function captureProviderSessions(runId, tasks, rows) {
  const store = state.providerSessionStore;
  if (!store) return;
  await recoverOpenCodeTuiBindings(runId, rows).catch(() => {
  });
  const known = new Set((await listProviderSessions(runId)).map((binding) => binding.dispatchId));
  const taskIds = new Set(tasks.map((task) => task.id));
  for (const row of rows) {
    if (row.runId !== runId || !taskIds.has(row.taskId) || known.has(row.dispatchId)) continue;
    if (row.projection?.host?.kind !== "local" || row.projection.host.id !== "local") continue;
    const hint = row.projection.provider?.id ?? row.projection.launch?.agent ?? state.attempts.get(row.taskId)?.harness ?? state.opts?.harnessByTask?.[row.taskId] ?? null;
    if (hint !== "claude" && hint !== "codex" && hint !== "opencode") continue;
    if (Date.now() - (state.providerSessionDiscoveryAt.get(row.dispatchId) ?? 0) < 1e4) continue;
    state.providerSessionDiscoveryAt.set(row.dispatchId, Date.now());
    try {
      const detail = await showWorkerDetail(row.dispatchId);
      const attempt = state.attempts.get(row.taskId);
      if (attempt?.dispatchId === row.dispatchId) applyAttemptDispatchDetail(attempt, runId, detail);
      if (detail?.runId !== runId || detail.taskId !== row.taskId || detail.observation?.exactWorker !== true || !detail.terminal?.worktreePath) continue;
      const reported = [
        detail.terminal.agentIdentity,
        row.projection.provider?.id,
        row.projection.launch?.agent
      ].filter((value) => value === "claude" || value === "codex" || value === "opencode");
      if (new Set(reported).size > 1) continue;
      const candidate = reported[0] ?? state.attempts.get(row.taskId)?.harness ?? state.opts?.harnessByTask?.[row.taskId] ?? null;
      if (candidate !== "claude" && candidate !== "codex" && candidate !== "opencode") continue;
      const sessionId = await discoverProviderSession({
        runId,
        taskId: row.taskId,
        dispatchId: row.dispatchId,
        harness: candidate,
        workspace: detail.terminal.worktreePath,
        host: "local:local",
        workerHandle: detail.terminal.handle
      });
      if (!sessionId) continue;
      await store.bind({
        runId,
        taskId: row.taskId,
        dispatchId: row.dispatchId,
        harness: candidate,
        sessionId,
        workspace: detail.terminal.worktreePath,
        host: "local:local",
        source: "provider-evidence"
      });
      known.add(row.dispatchId);
    } catch {
    }
  }
}
async function refreshRecoverySessions(runId, tasks, rows, force = false) {
  await captureProviderSessions(runId, tasks, rows);
  const taskById = new Map(tasks.map((task) => [task.id, task]));
  const rowByDispatch = new Map(rows.map((row) => [row.dispatchId, row]));
  const stopIds = new Set(state.opts?.resumeStoppedDispatchIds ?? []);
  const views = [];
  for (const binding of await listProviderSessions(runId)) {
    if (binding.runId !== runId || binding.dispatchId.length === 0) continue;
    const task = taskById.get(binding.taskId);
    if (!task) continue;
    const row = rowByDispatch.get(binding.dispatchId);
    const isCurrentDispatch = taskDispatchEvidence(task, rows, runId).row?.dispatchId === binding.dispatchId;
    const isRequestedStop = stopIds.has(binding.dispatchId);
    const isDispatched = task.status === "dispatched" && isCurrentDispatch;
    if (!isCurrentDispatch && !isRequestedStop && (!row || !activeDispatch(row))) continue;
    const observation = force ? await readProviderSession(binding, true) : await readProviderSession(binding);
    let decision;
    if (row?.dispatchStatus === "pending") {
      decision = "retry_blocked";
    } else if (isDispatched) {
      decision = observation.status === "active" ? "adopted" : "held";
    } else if ((isRequestedStop || task.status === "blocked") && (observation.status !== "exited" || workerSupervision(row) !== "supervised")) {
      decision = "retry_blocked";
    } else {
      decision = "reconcile";
    }
    const view = sessionView(binding, observation, decision);
    views.push(view);
    const attempt = state.attempts.get(binding.taskId);
    if (attempt?.dispatchId === binding.dispatchId) attempt.providerSession = view;
  }
  state.recoverySessions = views;
  if (state.recovery) {
    state.recovery.providerSessions = views.map((view) => ({ ...view }));
  }
  return views;
}
async function recoverNativeResumes(runId) {
  const store = state.providerSessionStore;
  if (!store) return;
  const holds = /* @__PURE__ */ new Map();
  for (const checkpoint of await store.listResumeAttempts(runId)) {
    if (checkpoint.state === "refused") continue;
    const { requestId, taskId, originalDispatchId, resumedTerminalId, newDispatchId } = checkpoint;
    if (newDispatchId && state.nativeResumes.get(newDispatchId)?.checkpoint.requestId === requestId) continue;
    holds.set(requestId, checkpoint);
    if (!resumedTerminalId) continue;
    const request = await showRequest(requestId);
    if (request?.requestId !== requestId || request.raw.requestId !== requestId || request.state !== "completed" || request.raw.method !== "orchestration.workerStart") continue;
    const receipt = parseWorkerStartReceipt(request.outcome, true);
    const dispatchId = receipt.dispatchId;
    if (!receipt.ok || receipt.raw.ok === false || receipt.status !== "ready" || receipt.raw.runId !== runId || receipt.taskId !== taskId || !dispatchId || dispatchId === originalDispatchId || newDispatchId !== null && newDispatchId !== dispatchId || checkpoint.state === "bound" && !newDispatchId || receipt.requestId !== null && receipt.requestId !== requestId) continue;
    const mutation = receipt.raw.mutation;
    if (mutation && typeof mutation === "object" && "requestId" in mutation && mutation.requestId !== requestId) continue;
    const detail = await showWorkerDetail(dispatchId).catch(() => null);
    if (!exactWorkerDispatch(detail, runId, taskId, dispatchId) || detail.dispatch.retryOfDispatchId !== originalDispatchId || detail.dispatch.creatorDispatchId != null) continue;
    const terminal = detail.terminal?.handle ?? detail.fleet?.agentTerminalHandle ?? receipt.effective.terminal;
    if (terminal !== resumedTerminalId) continue;
    const bound = checkpoint.state === "bound" ? checkpoint : {
      ...checkpoint,
      state: "bound",
      newDispatchId: dispatchId,
      error: null,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    if (checkpoint.state !== "bound") await store.recordResumeAttempt(bound);
    state.nativeResumes.set(dispatchId, { checkpoint: bound, receipt });
    state.ownedDispatchIds.add(dispatchId);
    holds.delete(requestId);
  }
  state.resumeHolds = holds;
}
function seedNativeResume(attempt, resume) {
  const { checkpoint, receipt } = resume;
  attempt.harness = checkpoint.harness;
  attempt.retriedFrom = checkpoint.originalDispatchId;
  attempt.requested = {
    agent: checkpoint.harness,
    model: null,
    effort: null,
    worktree: null,
    terminal: checkpoint.resumedTerminalId,
    on: null
  };
  attempt.agentTerminalHandle = checkpoint.resumedTerminalId;
  attempt.startReceipts.push(receipt);
  if (receipt.launchMode !== void 0) attempt.launchMode = receipt.launchMode;
}
async function recoverState(opts) {
  const runId = opts.runId;
  const generation = coordinatorLoopGeneration;
  const coordinator = state.coordinatorHandle;
  const [tasks, rows] = await Promise.all([listTasks(runId), listCompleteWorkers(runId, { includeRemote: true })]);
  const [launches, requests] = await Promise.all([
    new LaunchHistory(getOrcaRuntime().workspace.dir).list(runId),
    new RequestLedger(getOrcaRuntime().workspace.dir).list()
  ]);
  for (const row of rows) {
    if (row.runId !== runId) continue;
    const launch = launches.get(row.dispatchId);
    const recordedStart = requests.some((request) => request.operation === "worker-start" && request.runId === runId && request.taskId === row.taskId && request.dispatchId === row.dispatchId);
    const explicit = opts.resumeBlocked?.dispatchId === row.dispatchId || opts.resumeStoppedDispatchIds?.includes(row.dispatchId);
    if (launch?.source === "viewer-launch" && launch.taskId === row.taskId || recordedStart || explicit) {
      state.ownedDispatchIds.add(row.dispatchId);
    }
  }
  for (const request of requests) {
    if (request.operation === "worker-start" && request.runId === runId && request.taskId && !request.dispatchId && request.settledLocally !== true) {
      state.unknownStartRequests.set(request.requestId, request.taskId);
    }
  }
  await recoverNativeResumes(runId);
  const ownership = await readWorkerOwnership(runId, tasks, rows, state.workerCreators);
  if (!stillMyTurn(generation) || state.runId !== runId || state.coordinatorHandle !== coordinator) return;
  registerHandedBackOwnership(ownership);
  state.delegatedTaskIds = ownership.heldTaskIds;
  state.delegatedDispatchIds = ownership.heldDispatchIds;
  await captureProviderSessions(runId, tasks, rows);
  const rowByDispatch = new Map(rows.map((r) => [r.dispatchId, r]));
  const bindings = await listProviderSessions(runId);
  const tuiLaunches = await state.providerSessionStore?.listOpenCodeLaunches(runId) ?? [];
  for (const launch of tuiLaunches) {
    if (launch.dispatchId && rows.some((row) => row.runId === runId && row.taskId === launch.taskId && row.dispatchId === launch.dispatchId)) state.ownedDispatchIds.add(launch.dispatchId);
  }
  registerHandedBackOwnership(ownership);
  const tuiByDispatch = new Map(tuiLaunches.filter((row) => row.dispatchId).map((row) => [row.dispatchId, row]));
  const bindingByDispatch = new Map(
    bindings.filter((binding) => binding.runId === runId && binding.dispatchId.length > 0).map((binding) => [binding.dispatchId, binding])
  );
  const observationByDispatch = /* @__PURE__ */ new Map();
  const observeBinding = async (binding) => {
    const cached = observationByDispatch.get(binding.dispatchId);
    if (cached) return cached;
    const observation = await readProviderSession(binding);
    observationByDispatch.set(binding.dispatchId, observation);
    return observation;
  };
  const summary = {
    at: Date.now(),
    activeAdopted: [],
    settledAdopted: [],
    unverifiable: [],
    leftDecided: 0,
    providerSessions: [],
    retryBlocked: [],
    retryBlockedDetails: []
  };
  const stoppedByViewer = new Set(opts.resumeStoppedDispatchIds ?? []);
  const explicitResume = opts.resumeBlocked;
  let selectedRequeued = false;
  const activeTaskIds = new Set(
    rows.filter((row) => row.runId === runId && activeDispatch(row)).map((row) => row.taskId)
  );
  const resumeHeldTasks = new Set([...state.resumeHolds.values()].map((row) => row.taskId));
  for (const task of tasks) {
    if (state.delegatedTaskIds.has(task.id)) continue;
    if (task.status !== "blocked" || activeTaskIds.has(task.id)) continue;
    if (resumeHeldTasks.has(task.id)) continue;
    const stopped = rows.find(
      (row) => row.taskId === task.id && (stoppedByViewer.has(row.dispatchId) || explicitResume?.dispatchId === row.dispatchId) && projectionOutcome(row) === "failed"
    );
    if (!stopped) continue;
    const selectedByOperator = explicitResume?.dispatchId === stopped.dispatchId;
    if (selectedByOperator) {
      const detail = await showWorkerDetail(stopped.dispatchId);
      const exactTerminalExited = detail?.runId === runId && detail.taskId === task.id && detail.observation?.exactWorker === true && detail.observation.status === "exited" && Boolean(stopped.agentTerminalHandle) && detail.terminal?.handle === stopped.agentTerminalHandle && detail.terminal.connected === false;
      const gapExit = stopped.projection?.liveness?.verdict === "unverifiable" && FLEET_CAPABILITY_GAP_REASONS.has(stopped.projection.liveness.reason ?? "") && detail?.liveness.verdict === "unverifiable" && FLEET_CAPABILITY_GAP_REASONS.has(detail.liveness.fleetReason ?? "") && exactTerminalExited;
      if (stopped.projection?.liveness?.verdict !== "exited" && !gapExit) {
        throw new OrcaCliError("The selected Dispatch has no positive exact exit evidence.", "resume_not_allowed");
      }
      const gates = await listGates(runId);
      if (gates.some((gate) => gate.taskId === task.id && gate.status === "pending")) {
        throw new OrcaCliError("The selected Stage still has an unresolved gate.", "resume_not_allowed");
      }
      const launch = detail?.launch;
      if (detail?.runId !== runId || detail.taskId !== task.id || !launch?.agent || !launch.resolvedWorktreeId) {
        throw new OrcaCliError("The selected Dispatch has no exact historical launch identity.", "resume_not_allowed");
      }
      const selectedAt = Date.parse(detail.dispatch?.dispatchedAt ?? "");
      const siblingDetails = await Promise.all(
        rows.filter((row) => row.taskId === task.id && row.dispatchId !== stopped.dispatchId).map((row) => showWorkerDetail(row.dispatchId))
      );
      if (!Number.isFinite(selectedAt) || siblingDetails.some(
        (sibling) => !sibling?.dispatch?.dispatchedAt || !Number.isFinite(Date.parse(sibling.dispatch.dispatchedAt)) || Date.parse(sibling.dispatch.dispatchedAt) >= selectedAt
      )) {
        throw new OrcaCliError("A newer or unverifiable Dispatch exists for this Stage.", "resume_not_allowed");
      }
      if (stopped.projection?.host?.kind !== "local") {
        throw new OrcaCliError("Recovery of a remote Dispatch needs exact saved-environment replay.", "resume_not_allowed");
      }
      const selector = `id:${launch.resolvedWorktreeId}`;
      if (!await showWorktree(selector)) {
        throw new OrcaCliError("The original worker workspace is no longer registered.", "resume_not_allowed");
      }
      opts.harnessByTask = { ...opts.harnessByTask, [task.id]: launch.agent };
      opts.modelByTask = { ...opts.modelByTask };
      opts.effortByTask = { ...opts.effortByTask };
      opts.environmentByTask = { ...opts.environmentByTask };
      if (launch.model) opts.modelByTask[task.id] = launch.model;
      else delete opts.modelByTask[task.id];
      if (launch.effort) opts.effortByTask[task.id] = launch.effort;
      else delete opts.effortByTask[task.id];
      delete opts.environmentByTask[task.id];
      opts.placementByTask = { ...opts.placementByTask, [task.id]: { kind: "existing", selector } };
      if (opts.laneByTask?.[task.id]) {
        throw new OrcaCliError("Remove this Stage from its configured lane before retrying the historical workspace.", "resume_not_allowed");
      }
    }
    const binding = bindingByDispatch.get(stopped.dispatchId);
    if (binding) {
      const observation = await observeBinding(binding);
      const operatorAcceptedUnknown = selectedByOperator && explicitResume?.allowUnknownProvider && (observation.status === "unknown" || observation.status === "unavailable");
      if (observation.status !== "exited" && !operatorAcceptedUnknown) {
        summary.retryBlocked.push(stopped.dispatchId);
        summary.retryBlockedDetails.push({
          taskId: task.id,
          dispatchId: stopped.dispatchId,
          reason: `provider session is ${observation.status}; retry requires positive exit or an explicit decision about unknown status`
        });
        continue;
      }
    } else if (!(selectedByOperator && explicitResume?.allowUnknownProvider)) {
      summary.retryBlocked.push(stopped.dispatchId);
      summary.retryBlockedDetails.push({
        taskId: task.id,
        dispatchId: stopped.dispatchId,
        reason: "no exact provider session binding; terminal stop does not prove detached background work exited"
      });
      continue;
    }
    state.retryOfByTask.set(task.id, stopped.dispatchId);
    if (selectedByOperator) selectedRequeued = true;
  }
  if (explicitResume && !selectedRequeued) {
    throw new OrcaCliError("The selected blocked Stage was not requeued; refresh its Dispatch and session evidence.", "resume_not_allowed");
  }
  const freshAttempt = (task, harness, mode = "supervised") => ({
    taskId: task.id,
    harness,
    mode,
    dispatchId: task.dispatch_id ?? null,
    handle: null,
    startedAt: Date.now(),
    failureCount: null,
    dispatchStatus: null,
    lastHeartbeatAt: null,
    liveness: null,
    livenessReason: null,
    attention: null,
    stage: null,
    settled: false,
    outcome: null,
    settledVia: null,
    settledAt: null,
    terminalDecision: "pending",
    terminalDetail: null,
    releaseAttempts: 0,
    output: null,
    adopted: true,
    startRequestId: null,
    startReceipts: [],
    nextAction: null,
    releaseRequestId: null,
    terminalArchive: null,
    retriedFrom: null,
    requested: { agent: harness, model: null, effort: null, worktree: null, terminal: null, on: null },
    effective: null,
    reuseOf: null,
    agentTerminalHandle: null,
    fleetTerminalState: null,
    host: null,
    providerSession: null
  });
  const seedFromRow = (attempt, row) => {
    const resumed = state.nativeResumes.get(row.dispatchId);
    if (resumed) seedNativeResume(attempt, resumed);
    const guidance = [...state.guidanceSends.values()].find((send) => send.creationProven && send.receipt?.dispatchId === row.dispatchId);
    if (guidance) attempt.guidanceStartEvidence = guidance.startEvidence;
    const tui = tuiByDispatch.get(row.dispatchId);
    if (tui) {
      attempt.openCodeTui = true;
      attempt.harness = "opencode";
      attempt.handle = tui.terminal;
      const requested = tui.requestedModel;
      attempt.requested = {
        agent: "opencode",
        model: requested ? `${requested.providerID}/${requested.id}` : null,
        effort: requested?.variant ?? null,
        worktree: `path:${tui.workspace}`,
        terminal: tui.terminal,
        on: null
      };
      attempt.openCodeUiLaunched = tui.frontend ?? "tui";
      if (tui.state === "closed" || tui.state === "retained") attempt.terminalDecision = tui.state;
    }
    attempt.fleetTerminalState = row.terminalState;
    attempt.dispatchStatus = row.dispatchStatus === "unknown" ? null : row.dispatchStatus;
    attempt.agentTerminalHandle = row.agentTerminalHandle ?? attempt.agentTerminalHandle;
    attempt.liveness = normalizeLiveness(row.projection?.liveness?.verdict ?? null);
    attempt.livenessReason = row.projection?.liveness?.reason ?? null;
    attempt.attention = row.projection?.attention ?? null;
    attempt.stage = row.projection?.stage ?? null;
    attempt.nextAction = row.projection?.nextAction ?? null;
    attempt.host = row.projection?.host ?? null;
    const l = row.projection?.launch;
    if (l) {
      attempt.effective = {
        agent: l.agent ?? null,
        model: l.model ?? null,
        effort: l.effort ?? null,
        worktree: l.worktree ?? null,
        terminal: l.terminal ?? null,
        on: l.on ?? null
      };
    }
  };
  for (const task of tasks) {
    if (state.delegatedTaskIds.has(task.id)) {
      summary.unverifiable.push(task.id);
      continue;
    }
    const evidence = taskDispatchEvidence(task, rows, runId);
    const row = evidence.row;
    if (row && !state.ownedDispatchIds.has(row.dispatchId)) {
      summary.unverifiable.push(task.id);
      continue;
    }
    if (task.status === "dispatched" || evidence.active.length > 0) {
      if (!row || evidence.uncertain || workerSupervision(row) !== "supervised") {
        const binding = row && !evidence.uncertain && workerSupervision(row) === "unsupervised" ? bindingByDispatch.get(row.dispatchId) : void 0;
        if (binding && row) {
          const observation = await observeBinding(binding);
          const view = sessionView(binding, observation, observation.status === "active" ? "adopted" : "held");
          const attempt = freshAttempt(task, binding.harness, "legacy");
          attempt.dispatchId = row.dispatchId;
          attempt.providerSession = view;
          if (row) seedFromRow(attempt, row);
          state.attempts.set(task.id, attempt);
          summary.activeAdopted.push(task.id);
          summary.providerSessions.push(view);
        } else {
          summary.unverifiable.push(task.id);
          if (evidence.active.length > 0) {
            summary.retryBlocked.push(...evidence.active.map((candidate) => candidate.dispatchId));
            summary.retryBlockedDetails.push({
              taskId: task.id,
              dispatchId: row?.dispatchId ?? evidence.active[0].dispatchId,
              reason: evidence.uncertain ? "multiple active Dispatches have no unique current Task association; held without choosing latest" : "active Dispatch has no proven supervision or exact provider binding; held without cleanup or retry"
            });
          }
        }
        continue;
      }
      const outcome = row.dispatchStatus === "pending" ? null : projectionOutcome(row);
      if (outcome !== null) {
        const attempt = freshAttempt(task, opts.harnessByTask[task.id] || opts.defaultHarness);
        attempt.dispatchId = row.dispatchId;
        settleAttempt(attempt, outcome, "task_status");
        seedInheritedTerminalState(attempt, row);
        seedFromRow(attempt, row);
        const binding = bindingByDispatch.get(row.dispatchId);
        if (binding) {
          const observation = await observeBinding(binding);
          const view = sessionView(binding, observation, "reconcile");
          attempt.providerSession = view;
          summary.providerSessions.push(view);
        }
        state.attempts.set(task.id, attempt);
        summary.settledAdopted.push(task.id);
      } else {
        const attempt = freshAttempt(task, opts.harnessByTask[task.id] || opts.defaultHarness);
        attempt.dispatchId = row.dispatchId;
        seedFromRow(attempt, row);
        const binding = bindingByDispatch.get(row.dispatchId);
        if (binding) {
          const observation = await observeBinding(binding);
          const view = sessionView(binding, observation, "adopted");
          attempt.providerSession = view;
          summary.providerSessions.push(view);
        }
        state.attempts.set(task.id, attempt);
        summary.activeAdopted.push(task.id);
      }
    } else if (task.status === "completed" || task.status === "failed") {
      if (!row || workerSupervision(row) !== "supervised") continue;
      const tui = tuiByDispatch.get(row.dispatchId);
      if (["released", "retained"].includes(row.terminalState) && (!tui || ["closed", "retained"].includes(tui.state))) {
        summary.leftDecided += 1;
        continue;
      }
      const attempt = freshAttempt(task, opts.harnessByTask[task.id] || opts.defaultHarness);
      attempt.dispatchId = row.dispatchId;
      settleAttempt(
        attempt,
        task.status === "completed" ? "succeeded" : "failed",
        "task_status"
      );
      seedInheritedTerminalState(attempt, row);
      seedFromRow(attempt, row);
      state.attempts.set(task.id, attempt);
      summary.settledAdopted.push(task.id);
    }
  }
  for (const launch of tuiLaunches) {
    if (state.delegatedTaskIds.has(launch.taskId)) continue;
    if (!["prepared", "bound"].includes(launch.state)) continue;
    const task = tasks.find((candidate) => candidate.id === launch.taskId);
    const row = launch.dispatchId ? rowByDispatch.get(launch.dispatchId) : void 0;
    const inherited = state.attempts.get(launch.taskId);
    const outcome = row ? projectionOutcome(row) : null;
    const settled = task && row?.dispatchStatus !== "pending" && (TERMINAL_TASK_STATUS.has(task.status) || task.status === "blocked") && outcome !== null;
    const active = task && !TERMINAL_TASK_STATUS.has(task.status) && row && activeDispatch(row);
    if (row && task && row.taskId === task.id && row.runId === runId && row.agentTerminalHandle === launch.terminal && (settled || active) && (!inherited || inherited.dispatchId === row.dispatchId)) {
      if (!inherited) {
        const attempt = freshAttempt(task, "opencode");
        attempt.dispatchId = row.dispatchId;
        if (settled) {
          settleAttempt(attempt, outcome, "task_status");
          seedInheritedTerminalState(attempt, row);
        }
        seedFromRow(attempt, row);
        state.attempts.set(task.id, attempt);
        (settled ? summary.settledAdopted : summary.activeAdopted).push(task.id);
      } else {
        inherited.mode = "supervised";
      }
      continue;
    }
    if (inherited?.dispatchId && inherited.dispatchId === launch.dispatchId) continue;
    state.cleanupDebt.push({
      key: `opencode-preparation:${launch.requestId}`,
      kind: "release_unknown",
      dispatchId: launch.dispatchId,
      handle: launch.terminal,
      detail: "Unresolved OpenCode preparation has no exact adopted Dispatch; inspect its saved request/session/terminal before retry or cleanup"
    });
  }
  for (const binding of bindings) {
    if (summary.providerSessions.some((session) => session.dispatchId === binding.dispatchId)) continue;
    const task = tasks.find((candidate) => candidate.id === binding.taskId);
    if (!task || !stoppedByViewer.has(binding.dispatchId) && task.dispatch_id !== binding.dispatchId) continue;
    const observation = await observeBinding(binding);
    const blocked = summary.retryBlocked.includes(binding.dispatchId);
    summary.providerSessions.push(
      sessionView(
        binding,
        observation,
        blocked ? "retry_blocked" : task.status === "dispatched" ? "held" : "reconcile"
      )
    );
  }
  await recoverLaneIdentity(opts, rows);
  await Promise.all(
    [...state.attempts.values()].filter((attempt) => attempt.dispatchId).map((attempt) => refreshAttemptDispatchDetail(attempt, runId))
  );
  state.recovery = summary;
  state.recoverySessions = summary.providerSessions.map((session) => ({ ...session }));
}
function seedInheritedTerminalState(attempt, row) {
  if (row.terminalState === "release_unknown") {
    attempt.terminalDecision = "release_unknown";
    attempt.terminalDetail = "inherited release_unknown from the previous coordinator";
    recordDebt(attempt, "release_unknown", attempt.terminalDetail);
  } else if (row.terminalState === "release_pending") {
    attempt.terminalDecision = "release_pending";
    attempt.terminalDetail = "inherited release_pending from the previous coordinator";
  }
}
function activeDispatch(row) {
  return row.dispatchStatus === "pending" || row.dispatchStatus === "dispatched";
}
function taskDispatchEvidence(task, rows, runId) {
  const exact = rows.filter((row) => row.runId === runId && row.taskId === task.id);
  const active = exact.filter(activeDispatch);
  const pointed = task.dispatch_id ? exact.find((row) => row.dispatchId === task.dispatch_id) ?? null : null;
  if (pointed && (active.length === 0 || active.every((row) => row.dispatchId === pointed.dispatchId))) {
    return { row: pointed, active, uncertain: false };
  }
  if (!task.dispatch_id && active.length === 1) return { row: active[0], active, uncertain: false };
  if (!task.dispatch_id && active.length === 0 && exact.length === 1 && TERMINAL_TASK_STATUS.has(task.status) && projectionOutcome(exact[0]) === (task.status === "completed" ? "succeeded" : "failed")) {
    return { row: exact[0], active, uncertain: false };
  }
  return { row: null, active, uncertain: active.length > 0 };
}
function projectionOutcome(row) {
  const o = row.projection?.outcome ?? null;
  if (o === "completed" || o === "succeeded") return "succeeded";
  if (o === "failed" || o === "stopped") return "failed";
  return null;
}
function stopCoordinator() {
  if (stopInFlight) return stopInFlight;
  const runId = state.runId;
  const coordinator = state.coordinatorHandle;
  const generation = coordinatorLoopGeneration;
  state.running = false;
  state.phase = "stopping";
  stopInFlight = finishStop(runId, coordinator, generation).finally(() => {
    stopInFlight = null;
    if (state.phase === "stopping") state.phase = "idle";
  });
  return stopInFlight;
}
async function finishStop(runId, coordinator, generation) {
  await waitForMailboxChecksAtStop();
  await mailboxMutationChain;
  return withLifecycleMutation(() => {
    if (generation !== coordinatorLoopGeneration) throw new OrcaCliError("Coordinator changed while Stop was draining.", "coordinator_conflict");
    return stopCoordinatorLocked(runId, coordinator ?? state.coordinatorHandle);
  });
}
async function stopCoordinatorLocked(runIdAtStop, coordinator) {
  if (runIdAtStop) {
    await recoverGuidanceSends(runIdAtStop);
    await recoverNativeResumes(runIdAtStop);
  }
  for (const row of [...state.mailboxChecks.values()]) {
    const delivery = row.delivery;
    if (row.state === "received" && !row.ack && delivery && !delivery.deliveryId && delivery.messages.length === 0 && delivery.count === 0 && !delivery.acknowledged && !delivery.cancelled && !delivery.connectionLost) {
      await saveMailbox({ ...row, state: "completed" });
    }
  }
  const attempts = [
    ...state.attempts.values(),
    ...[...state.retryCandidates.values()].map((reservation) => reservation.attempt)
  ];
  const results = [];
  for (const resume of state.resumeHolds.values()) {
    results.push({
      target: resume.requestId,
      kind: "supervised",
      result: "unknown",
      detail: `Native resume for ${resume.taskId} is not verified; inspect the exact request before replacing or stopping it.`
    });
  }
  for (const [requestId, taskId] of state.unknownStartRequests) {
    results.push({
      target: requestId,
      kind: "supervised",
      result: "unknown",
      detail: `Viewer start for ${taskId} has no resolved Dispatch; inspect its exact request before declaring Stop clean.`
    });
  }
  for (const row of state.guidanceSends.values()) {
    if (row.state === "prepared" || row.state === "unknown") {
      results.push({
        target: row.requestId,
        kind: "supervised",
        result: "unknown",
        detail: "Guidance outcome remains unresolved; inspect the exact request before declaring Stop clean."
      });
    }
  }
  const unresolvedMail = [...state.mailboxChecks.values()].filter((row) => row.state === "prepared" || row.state === "unknown" || row.state === "received" || row.state === "pending_input" && (row.delivery?.deliveryAcknowledged !== true || Object.values(row.replyRequests ?? {}).some((reply) => reply.state !== "completed")));
  if (unresolvedMail.length && coordinator) {
    results.push({
      target: coordinator,
      kind: "coordinator_terminal",
      result: "unknown",
      detail: `Mailbox recovery remains pending for request(s): ${unresolvedMail.map((row) => row.requestId).join(", ")}`
    });
  }
  let stopOwnership = null;
  let stopCustodyError = null;
  const readStopOwnership = async () => {
    if (!runIdAtStop) return null;
    try {
      const [tasks, workers] = await Promise.all([
        listTasks(runIdAtStop),
        listCompleteWorkers(runIdAtStop, { includeRemote: true })
      ]);
      const snapshot = await readWorkerOwnership(runIdAtStop, tasks, workers, state.workerCreators);
      registerHandedBackOwnership(snapshot);
      return snapshot;
    } catch (err) {
      stopCustodyError = String(err.message ?? err);
      return null;
    }
  };
  stopOwnership = await readStopOwnership();
  const heldAtStop = stopOwnership?.heldDispatchIds ?? state.delegatedDispatchIds;
  const recoveredRoots = /* @__PURE__ */ new Map();
  for (const [id, resume] of state.nativeResumes) recoveredRoots.set(id, resume.checkpoint.taskId);
  for (const row of state.guidanceSends.values()) {
    if (row.creationProven && row.receipt) recoveredRoots.set(row.receipt.dispatchId, row.receipt.taskId);
  }
  const stopWithAudit = async (taskId, dispatchId) => {
    if (!runIdAtStop || !state.ownedDispatchIds.has(dispatchId)) {
      throw new OrcaCliError("Viewer ownership is unverified; no Stop was sent.", "stop_unknown");
    }
    if (recoveredRoots.has(dispatchId)) {
      const detail = await showWorkerDetail(dispatchId);
      if (!exactWorkerDispatch(detail, runIdAtStop, taskId, dispatchId)) {
        throw new OrcaCliError("Exact recovered Dispatch identity is unverified; no Stop was sent.", "stop_unknown");
      }
    }
    const requestId = newRequestId();
    const operation = await workerStopOperation(dispatchId);
    await noteRequest({
      requestId,
      operation,
      runId: runIdAtStop,
      taskId,
      dispatchId
    });
    try {
      const receipt = await stopWorkerReceipt(dispatchId, { retryRequestId: requestId });
      await noteRequest({
        requestId,
        operation,
        runId: runIdAtStop,
        taskId,
        dispatchId,
        settledLocally: receipt.state === "stopped" || receipt.alreadySettled || operation === "worker-abandon" && receipt.providerExecutionExited === true,
        note: receipt.providerExecutionExited ? `viewer-observed OpenCode provider stop state: ${receipt.state}` : `viewer-observed stop state: ${receipt.state}`
      });
      return receipt;
    } catch (err) {
      await noteRequest({
        requestId,
        operation,
        runId: runIdAtStop,
        taskId,
        dispatchId,
        settledLocally: false,
        note: `stop failed: ${String(err?.message ?? err)}`
      }).catch(() => {
      });
      throw err;
    }
  };
  const attemptedDispatches = /* @__PURE__ */ new Set();
  const attemptDispatches = new Set(attempts.map((a) => a.dispatchId).filter((id) => !!id));
  for (const [dispatchId, taskId] of recoveredRoots) {
    if (attemptDispatches.has(dispatchId) || attemptedDispatches.has(dispatchId) || heldAtStop.has(dispatchId)) continue;
    if (!stopOwnership) {
      results.push({ target: dispatchId, kind: "supervised", result: "unknown", detail: "Helper custody could not be refreshed." });
      continue;
    }
    attemptedDispatches.add(dispatchId);
    try {
      const stopped = await stopWithAudit(taskId, dispatchId);
      const confirmed = stopped.state === "stopped" || stopped.alreadySettled;
      results.push({
        target: dispatchId,
        kind: "supervised",
        result: confirmed ? stopped.alreadySettled ? "already_settled" : "stopped" : "unknown",
        detail: confirmed ? "Recovered native worker custody verified" : `Recovered worker Stop returned ${stopped.state}`
      });
    } catch (err) {
      results.push({
        target: dispatchId,
        kind: "supervised",
        result: "unknown",
        detail: `Recovered worker Stop failed: ${String(err.message ?? err)}`
      });
    }
  }
  for (const a of attempts) {
    if (a.dispatchId && heldAtStop.has(a.dispatchId)) continue;
    if (a.dispatchId && !stopOwnership) {
      results.push({ target: a.dispatchId, kind: "supervised", result: "unknown", detail: "Helper custody could not be refreshed." });
      continue;
    }
    if (a.dispatchId) attemptedDispatches.add(a.dispatchId);
    if (a.openCodeTui && !a.dispatchId && (a.handle || !a.settled || a.startReceipts.at(-1)?.failedStage === "response_lost")) {
      results.push({
        target: a.handle ?? a.taskId,
        kind: "supervised",
        result: "unknown",
        detail: "OpenCode preparation is in flight; Stop cancels it before binding when possible. Inspect the durable preparation before retrying."
      });
    }
    if (a.dispatchId && a.mode === "supervised") {
      try {
        let paneProofError = null;
        if (a.openCodeTui && state.opts?.retainByTask?.[a.taskId]) {
          try {
            await verifyPreparedOpenCodePane(a);
          } catch (err) {
            paneProofError = String(err.message ?? err);
          }
        }
        const receipt = await stopWithAudit(a.taskId, a.dispatchId);
        let cleanupDetail = null;
        const stopConfirmed = receipt.state === "stopped" || receipt.alreadySettled || a.openCodeTui && receipt.providerExecutionExited === true;
        if (a.openCodeTui && stopConfirmed) {
          if (state.opts?.retainByTask?.[a.taskId]) {
            await retainOpenCodeTui(a.dispatchId);
            cleanupDetail = paneProofError ? `Caller-owned OpenCode pane left open; identity was not confirmed: ${paneProofError}` : "Verified caller-owned OpenCode pane retained; native resource state is separate.";
          } else {
            const released = await performRelease(a);
            if (released.state === "retained" && released.reason === "identity_unproven") {
              await retainOpenCodeTui(a.dispatchId);
              cleanupDetail = "TUI retained for inspection: Orca release reports identity_unproven after cancellation fencing.";
            } else if (released.state !== "retained" || released.reason !== "external_terminal") {
              throw new OrcaCliError("OpenCode Stop cleanup release is unconfirmed; no terminal close attempted", "release_unknown");
            } else {
              await closeReleasedOpenCodeTui(a.dispatchId);
            }
          }
        }
        results.push({
          target: a.dispatchId,
          kind: "supervised",
          result: !stopConfirmed || paneProofError ? "unknown" : receipt.alreadySettled ? "already_settled" : a.openCodeTui && receipt.providerExecutionExited ? "provider_stopped_accounting_abandoned" : "stopped",
          detail: cleanupDetail ?? receipt.warning ?? receipt.state
        });
        if (stopConfirmed && receipt.helpers) {
          for (const helper of receipt.helpers) {
            if (!helper.dispatchId || attemptedDispatches.has(helper.dispatchId)) continue;
            const helperSettled = helper.state === "stopped" || helper.alreadySettled;
            if (!helperSettled) continue;
            attemptedDispatches.add(helper.dispatchId);
            results.push({
              target: helper.dispatchId,
              kind: "supervised",
              result: helper.alreadySettled ? "already_settled" : "stopped",
              detail: "Cascaded by Orca worker-stop-helpers.v1"
            });
          }
        }
      } catch (err) {
        results.push({
          target: a.dispatchId,
          kind: "supervised",
          result: "unknown",
          detail: String(err.message ?? err)
        });
      }
    }
    if (a.dispatchId && a.mode === "legacy") {
      try {
        const receipt = await stopWithAudit(a.taskId, a.dispatchId);
        results.push({
          target: a.dispatchId,
          kind: "tracking_dispatch",
          result: receipt.alreadySettled ? "already_settled" : receipt.state === "stopped" ? "fenced" : "unknown",
          detail: receipt.warning ?? receipt.state
        });
      } catch (err) {
        results.push({
          target: a.dispatchId,
          kind: "tracking_dispatch",
          result: "unknown",
          detail: String(err.message ?? err)
        });
      }
    }
    if (a.handle && !a.openCodeTui && a.mode === "legacy" && !a.adopted && !a.startRequestId) {
      try {
        await closeTerminalStrict(a.handle);
        results.push({ target: a.handle, kind: "legacy_terminal", result: "closed", detail: null });
      } catch (err) {
        results.push({
          target: a.handle,
          kind: "legacy_terminal",
          result: "unknown",
          detail: String(err.message ?? err)
        });
      }
    }
  }
  if (runIdAtStop) {
    for (; ; ) {
      stopOwnership = await readStopOwnership();
      if (!stopOwnership) break;
      const handedBack = stopOwnership.handedBack.filter((row) => state.ownedDispatchIds.has(row.dispatchId) && !attemptedDispatches.has(row.dispatchId));
      if (!handedBack.length) break;
      for (const row of handedBack) {
        attemptedDispatches.add(row.dispatchId);
        try {
          const receipt = await stopWithAudit(row.taskId, row.dispatchId);
          const confirmed = receipt.state === "stopped" || receipt.alreadySettled;
          results.push({
            target: row.dispatchId,
            kind: "supervised",
            result: confirmed ? receipt.alreadySettled ? "already_settled" : "stopped" : "unknown",
            detail: confirmed ? "Creator settled; exact helper custody returned to this Run" : receipt.warning ?? receipt.state
          });
        } catch (err) {
          results.push({
            target: row.dispatchId,
            kind: "supervised",
            result: "unknown",
            detail: `Handed-back helper Stop failed: ${String(err.message ?? err)}`
          });
        }
      }
    }
    const stillHeld = stopOwnership?.heldDispatchIds ?? heldAtStop;
    for (const dispatchId of stillHeld) {
      results.push({
        target: dispatchId,
        kind: "supervised",
        result: "unknown",
        detail: "Helper custody belongs to its active or unverified creator; no Stop was sent."
      });
    }
    for (const row of stopOwnership?.handedBack ?? []) {
      if (!state.ownedDispatchIds.has(row.dispatchId)) {
        results.push({
          target: row.dispatchId,
          kind: "supervised",
          result: "unknown",
          detail: "The exact creator lineage does not establish viewer custody; no Stop was sent."
        });
      }
    }
    if (stopCustodyError) results.push({
      target: coordinator ?? runIdAtStop,
      kind: "coordinator_terminal",
      result: "unknown",
      detail: `Could not completely refresh helper custody during Stop: ${stopCustodyError}`
    });
  }
  if (runIdAtStop && state.providerSessionStore) {
    try {
      await recoverGuidanceSends(runIdAtStop);
      for (let index = results.length - 1; index >= 0; index--) {
        const result = results[index];
        const row = state.guidanceSends.get(result.target);
        if (!row || result.result !== "unknown" || row.state === "prepared" || row.state === "unknown") continue;
        if (row.receipt?.kind === "follow_up" && row.creationProven && !results.some((entry) => entry.target === row.receipt.dispatchId && entry.result !== "unknown")) continue;
        results.splice(index, 1);
      }
    } catch (err) {
      results.push({
        target: coordinator ?? runIdAtStop,
        kind: "coordinator_terminal",
        result: "unknown",
        detail: `Guidance custody recovery failed after Stop: ${String(err.message ?? err)}`
      });
    }
  }
  if (coordinator) {
    try {
      await closeTerminalStrict(coordinator);
      results.push({
        target: coordinator,
        kind: "coordinator_terminal",
        result: "closed",
        detail: null
      });
    } catch (err) {
      results.push({
        target: coordinator,
        kind: "coordinator_terminal",
        result: "unknown",
        detail: String(err.message ?? err)
      });
    }
  }
  if (runIdAtStop) {
    try {
      const [tasks, rows] = await Promise.all([
        listTasks(runIdAtStop),
        listCompleteWorkers(runIdAtStop, { includeRemote: true })
      ]);
      await refreshRecoverySessions(runIdAtStop, tasks, rows, true);
    } catch {
    }
  }
  state.attempts = /* @__PURE__ */ new Map();
  state.retryCandidates = /* @__PURE__ */ new Map();
  state.coordinatorHandle = null;
  state.pendingDeliveryId = null;
  state.queuedDelivery = null;
  state.inbox = [];
  state.pendingOwnership = /* @__PURE__ */ new Set();
  state.lanes = /* @__PURE__ */ new Map();
  state.integrationParked = /* @__PURE__ */ new Set();
  const stoppedDispatches = new Set(
    results.filter((r) => (r.kind === "supervised" || r.kind === "tracking_dispatch") && r.result !== "unknown").map((r) => r.target)
  );
  state.cleanupDebt = state.cleanupDebt.filter(
    (debt) => !(debt.kind === "stop_unknown" && debt.dispatchId && stoppedDispatches.has(debt.dispatchId))
  );
  state.lastStopReport = {
    results,
    clean: results.every((r) => r.result !== "unknown")
  };
  state.phase = "idle";
  if (!state.lastStopReport.clean) {
    const stopDebts = results.filter((r) => r.result === "unknown").map((r, i) => ({
      key: `stop-${r.target}-${i}`,
      kind: "stop_unknown",
      dispatchId: r.kind === "supervised" || r.kind === "tracking_dispatch" ? r.target : null,
      handle: r.kind === "legacy_terminal" || r.kind === "coordinator_terminal" ? r.target : null,
      detail: r.detail
    }));
    const byKey = new Map(state.cleanupDebt.map((debt) => [debt.key, debt]));
    for (const debt of stopDebts) byKey.set(debt.key, debt);
    state.cleanupDebt = [...byKey.values()];
  }
  return state.lastStopReport;
}
async function answerInboxItem(messageId, body) {
  await withMailboxMutation(() => answerInboxItemLocked(messageId, body));
  await acknowledgePendingDeliveryIfResolved();
}
async function answerInboxItemLocked(messageId, body) {
  const item = state.inbox.find((i) => i.messageId === messageId);
  if (!item) {
    throw new OrcaCliError(
      `No pending question or escalation with id ${messageId} in this coordinator's inbox.`,
      "inbox_item_not_found"
    );
  }
  if (item.kind === "stop_event") throw new OrcaCliError("A worker stop event is not a question; steer or settle its exact Dispatch", "stop_event_not_question");
  const from = state.coordinatorHandle;
  if (!from || !state.running) {
    throw new OrcaCliError("Coordinator is not running; cannot reply from its terminal.", "not_running");
  }
  const checkpoint = [...state.mailboxChecks.values()].find((row) => row.pendingQuestionIds.includes(messageId));
  if (!checkpoint) throw new OrcaCliError("The question has no durable mailbox checkpoint", "mailbox_recovery_unknown");
  const generation = coordinatorLoopGeneration;
  await verifyMailboxAuthority(checkpoint.runId, from, generation);
  const bodyHash = createHash2("sha256").update(body).digest("hex");
  const previous = checkpoint.replyRequests?.[messageId];
  if (previous && previous.bodyHash !== bodyHash) throw new OrcaCliError("The previous reply outcome is unknown; retry the same reply text", "reply_unknown");
  const request = previous ?? { requestId: newRequestId(), from, bodyHash, state: "prepared" };
  await saveMailbox({ ...checkpoint, replyRequests: { ...checkpoint.replyRequests, [messageId]: request } });
  await noteRequest({ requestId: request.requestId, operation: "reply", runId: checkpoint.runId, taskId: item.taskId, dispatchId: item.dispatchId ?? null });
  await verifyMailboxAuthority(checkpoint.runId, from, generation);
  try {
    if (previous) {
      const result = await showRequest(request.requestId);
      const original = checkpoint.delivery?.messages.find((message) => message.id === messageId);
      if (result?.requestId !== request.requestId || result.state !== "completed" || result.raw.method !== "orchestration.reply" || !replyReceiptMatches(result.outcome, checkpoint.runId, messageId, original ? original.thread_id ?? original.id : null)) {
        throw new OrcaCliError(`Reply request ${request.requestId} remains unresolved`, "reply_unknown");
      }
    } else {
      await replyToMessage(messageId, body, from, request.requestId);
    }
  } catch (err) {
    const current2 = state.mailboxChecks.get(checkpoint.requestId);
    await saveMailbox({ ...current2, replyRequests: { ...current2.replyRequests, [messageId]: { ...request, state: "unknown" } } });
    throw err;
  }
  const current = state.mailboxChecks.get(checkpoint.requestId);
  const pendingQuestionIds = current.pendingQuestionIds.filter((id) => id !== messageId);
  await saveMailbox({
    ...current,
    pendingQuestionIds,
    state: current.state !== "received" && current.delivery?.deliveryAcknowledged === true && pendingQuestionIds.length === 0 && current.processedMessageIds.length === current.delivery.messages.length ? "completed" : current.state,
    replyRequests: { ...current.replyRequests, [messageId]: { ...request, state: "completed" } }
  });
  state.inbox = state.inbox.filter((i) => i.messageId !== messageId);
}
async function recoverPendingReplies() {
  for (const row of [...state.mailboxChecks.values()]) {
    for (const id of row.pendingQuestionIds) {
      const request = state.mailboxChecks.get(row.requestId)?.replyRequests?.[id];
      if (!request || request.state === "completed") continue;
      try {
        const result = await showRequest(request.requestId);
        const original = row.delivery?.messages.find((message) => message.id === id);
        if (result?.requestId !== request.requestId || result.state !== "completed" || result.raw.method !== "orchestration.reply" || !replyReceiptMatches(result.outcome, row.runId, id, original ? original.thread_id ?? original.id : null)) continue;
        const current = state.mailboxChecks.get(row.requestId);
        if (!current) continue;
        const pendingQuestionIds = current.pendingQuestionIds.filter((value) => value !== id);
        await saveMailbox({
          ...current,
          pendingQuestionIds,
          state: current.state !== "received" && current.delivery?.deliveryAcknowledged === true && !pendingQuestionIds.length ? "completed" : current.state,
          replyRequests: { ...current.replyRequests, [id]: { ...request, state: "completed" } }
        });
        state.inbox = state.inbox.filter((item) => item.messageId !== id);
      } catch {
      }
    }
  }
}
async function answerMergeQuestion(message) {
  if (!state.stageGit || !state.runId || !isMergeInputsQuestion(message) || message.run_id !== state.runId) return;
  const payload = parseWorkerDonePayload(message);
  if (!payload?.taskId || !payload.dispatchId || message.from_handle !== `dispatch:${payload.dispatchId}`) return;
  const attempt = state.attempts.get(payload.taskId);
  if (!attempt || attempt.settled || attempt.dispatchId !== payload.dispatchId || !state.ownedDispatchIds.has(payload.dispatchId)) return;
  const [tasks, gates, workers] = await Promise.all([
    listTasks(state.runId),
    listGates(state.runId),
    listCompleteWorkers(state.runId, { includeRemote: true })
  ]);
  const task = tasks.find((item) => item.id === payload.taskId && item.run_id === state.runId);
  if (!task || task.status !== "dispatched" || task.dispatch_id !== payload.dispatchId || !task.spec?.includes(MERGE_PREP_MARKER) || !task.spec.includes(MERGE_INPUTS_V3_MARKER) || !taskDeps(task).every((id) => tasks.some((dep) => dep.id === id && dep.run_id === state.runId && dep.status === "completed")) || gates.some((gate) => !!gate.taskId && (gate.taskId === task.id || taskDeps(task).includes(gate.taskId)) && !(isIntegrationGate(gate) ? gateIntegrated(gate) : ordinaryGateApproved(gate))) || !workers.some((row) => row.runId === state.runId && row.taskId === task.id && row.dispatchId === payload.dispatchId && activeDispatch(row))) return;
  const body = await buildMergeInputs(state.stageGit, task, await stageWorkerPath(attempt));
  if (!state.running || state.runId !== message.run_id || state.attempts.get(task.id) !== attempt || attempt.settled || attempt.dispatchId !== payload.dispatchId) return;
  await answerInboxItemLocked(message.id, body);
}
function noteManualRelease(dispatchId, receiptState) {
  const resolved = receiptState === "released" || receiptState === "already_released" || receiptState === "retained" || receiptState === "closed";
  for (const a of state.attempts.values()) {
    if (a.dispatchId !== dispatchId) continue;
    if (resolved) {
      a.terminalDecision = receiptState === "closed" ? "closed" : receiptState === "retained" ? "retained" : "released";
      a.terminalDetail = "resolved manually via the viewer";
    } else if (receiptState === "release_pending" && a.terminalDecision === "release_unknown") {
      a.terminalDecision = "release_pending";
      a.terminalDetail = "manual release deferred by Orca";
    }
  }
  if (!resolved) return false;
  state.cleanupDebt = state.cleanupDebt.filter((d) => d.dispatchId !== dispatchId);
  return true;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function briefTaskSpec(spec) {
  const normalized = spec.replace(/\s+/g, " ").trim();
  if (!normalized) return "The coordinator assigned this stage without an additional brief.";
  const sentence = normalized.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() ?? normalized;
  return sentence.length > 220 ? `${sentence.slice(0, 217).trimEnd()}...` : sentence;
}
async function emitCoordinatorActivity(event) {
  const sink = state.opts?.onActivity;
  if (!sink) return;
  try {
    await sink(event);
  } catch {
  }
}
async function emitCoordinatorCheck(receipt) {
  const sink = state.opts?.onCheck;
  if (!sink) return;
  try {
    await sink(receipt);
  } catch {
  }
}
async function noteRequest(meta) {
  const fallback = state.requestLedger;
  const sink = state.opts?.onRequestRecord ?? (fallback ? (row) => fallback.record(row) : null);
  if (!sink) return;
  try {
    await sink(meta);
  } catch {
  }
}
function archiveSummary(archive) {
  if (!archive || typeof archive !== "object") return null;
  try {
    const json = JSON.stringify(archive);
    return json.length > 400 ? `${json.slice(0, 397)}...` : json;
  } catch {
    return null;
  }
}
function checkAgentState(receipt) {
  return JSON.stringify(
    receipt.agents.map((agent) => ({
      taskId: agent.taskId,
      dispatchId: agent.dispatchId,
      liveness: agent.liveness,
      activity: agent.activity,
      detail: agent.detail,
      attention: agent.attention,
      agent: agent.agent,
      model: agent.model,
      effort: agent.effort,
      outcome: agent.outcome
    }))
  );
}
function shouldPersistCoordinatorCheck(receipt, previous) {
  if (!previous) return true;
  if (receipt.messageCount > 0) return true;
  if (receipt.error !== previous.error) return true;
  return checkAgentState(receipt) !== checkAgentState(previous);
}
var coordinatorLoopGeneration = 0;
var mailboxMutationChain = Promise.resolve();
var lifecycleMutationChain = Promise.resolve();
var stopInFlight = null;
var inFlightMailboxChecks = /* @__PURE__ */ new Set();
var STOP_MAILBOX_WAIT_MS = 5e3;
function trackMailboxCheck(work) {
  const result = work();
  inFlightMailboxChecks.add(result);
  void result.then(() => inFlightMailboxChecks.delete(result), () => inFlightMailboxChecks.delete(result));
  return result;
}
async function waitForMailboxChecksAtStop() {
  const pending = [...inFlightMailboxChecks];
  if (!pending.length) return;
  let timer;
  try {
    await Promise.race([
      Promise.allSettled(pending),
      new Promise((resolve) => {
        timer = setTimeout(resolve, STOP_MAILBOX_WAIT_MS);
      })
    ]);
  } finally {
    clearTimeout(timer);
  }
}
function withLifecycleMutation(work) {
  const result = lifecycleMutationChain.then(work, work);
  lifecycleMutationChain = result.then(() => void 0, () => void 0);
  return result;
}
function withMailboxMutation(work) {
  const result = mailboxMutationChain.then(work, work);
  mailboxMutationChain = result.then(() => void 0, () => void 0);
  return result;
}
async function recoverGuidanceSends(runId, adopt = true) {
  const store = state.providerSessionStore;
  if (!store) return;
  for (const journal of await store.listGuidanceSends(runId)) {
    let row = state.guidanceSends.get(journal.requestId);
    let detail;
    let startReceipt;
    if (!row?.receipt) {
      row = journal;
      if (journal.state !== "refused") {
        try {
          const recovered = await recoverTaskGuidance(journal, { store });
          const { result } = recovered;
          detail = result.createdWorker;
          startReceipt = result.startReceipt;
          row = { ...recovered.checkpoint, receipt: result.receipt, creationProven: result.creationProven };
        } catch {
          row = { ...journal, state: "unknown", receipt: null, creationProven: false };
        }
      }
      state.guidanceSends.set(row.requestId, row);
    }
    const receipt = row.receipt;
    if (!row.creationProven || !receipt) continue;
    state.ownedDispatchIds.add(receipt.dispatchId);
    const canAdopt = adopt && state.running && state.runId === runId && state.opts && !state.attempts.has(receipt.taskId) && !state.delegatedDispatchIds.has(receipt.dispatchId);
    if (row.state !== "unknown" && !canAdopt) continue;
    try {
      detail ??= await showWorkerDetail(receipt.dispatchId);
      if (!exactWorkerDispatch(detail, runId, receipt.taskId, receipt.dispatchId)) continue;
      const status = detail.dispatch.status;
      const settled = status === "succeeded" || status === "completed" || status === "failed" || status === "stopped" || status === "abandoned";
      if (row.state === "unknown" && settled) {
        const resolved = {
          ...row,
          state: "follow_up",
          updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
          error: "start readiness remained unknown; exact Dispatch later settled"
        };
        await store.recordGuidanceSend(resolved);
        state.guidanceSends.set(row.requestId, resolved);
      }
      if (!canAdopt || !state.running || !state.opts) continue;
      const source = state.attempts.get(row.requestedTaskId);
      const attempt = reserveAttempt({ id: receipt.taskId }, source?.harness ?? state.opts.defaultHarness);
      attempt.adopted = true;
      attempt.dispatchId = receipt.dispatchId;
      attempt.guidanceStartEvidence = row.startEvidence;
      if (startReceipt) attempt.startReceipts.push(startReceipt);
      applyAttemptDispatchDetail(attempt, runId, detail);
      if (settled) {
        settleAttempt(attempt, status === "succeeded" || status === "completed" ? "succeeded" : "failed", "task_status");
        if (detail.fleet) seedInheritedTerminalState(attempt, detail.fleet);
      }
      state.attempts.set(receipt.taskId, attempt);
    } catch {
    }
  }
}
async function resolveGuidanceStopEvents(runId) {
  if (!state.running || state.runId !== runId || !state.inbox.some((item) => item.kind === "stop_event")) return;
  for (const row of state.guidanceSends.values()) {
    const receipt = row.receipt;
    if (row.runId === runId && row.state === "enqueued" && receipt?.kind === "enqueued" && receipt.dispatchId === row.requestedDispatchId && receipt.taskId === row.requestedTaskId) {
      await resolveStopEvents(receipt.dispatchId, `guidance:${row.requestId}`, row.createdAt);
    }
  }
}
async function sendTaskGuidance(input) {
  const receipt = await withLifecycleMutation(async () => {
    const { runId, taskId } = input;
    const from = state.coordinatorHandle;
    const store = state.providerSessionStore;
    const opts = state.opts;
    if (!state.running || state.runId !== runId || !from || !store || !opts) {
      throw new OrcaCliError("The requested Run is not controlled by this coordinator", "not_running");
    }
    const binding = await showRun(runId).catch(() => null);
    if (!binding || binding.run.id !== runId || binding.run.coordinator_handle !== from || !state.running || state.runId !== runId || state.coordinatorHandle !== from) {
      throw new OrcaCliError("The coordinator's current Run binding cannot be verified; inspect the Run before sending", "coordinator_control_required");
    }
    const requestedDispatchId = state.attempts.get(taskId)?.dispatchId;
    const pendingForTarget = (row) => row.requestedTaskId === taskId && row.requestedDispatchId === requestedDispatchId && (row.state === "prepared" || row.state === "unknown");
    const wasUnknown = [...state.guidanceSends.values()].some(pendingForTarget);
    await recoverGuidanceSends(runId);
    if ([...state.guidanceSends.values()].some(pendingForTarget)) {
      throw new OrcaCliError("A prior guidance request remains unresolved; inspect its request before sending again", "guidance_unknown");
    }
    if (wasUnknown) {
      throw new OrcaCliError("The prior guidance request was reconciled; submit the new guidance again", "guidance_reconciled");
    }
    const attempt = state.attempts.get(taskId);
    if (!attempt || attempt.settled || !attempt.dispatchId || !state.ownedDispatchIds.has(attempt.dispatchId) || isUnverifiedHarness(attempt.harness) || state.delegatedDispatchIds.has(attempt.dispatchId)) {
      throw new OrcaCliError("Guidance requires an active viewer-owned attempt", "active_dispatch_required");
    }
    const dispatchId = attempt.dispatchId;
    const [tasks, workers, detail] = await Promise.all([
      listTasks(runId),
      listCompleteWorkers(runId, { includeRemote: true }),
      showWorkerDetail(dispatchId)
    ]);
    const task = tasks.find((row) => row.id === taskId && row.run_id === runId);
    const worker = workers.find((row) => row.runId === runId && row.taskId === taskId && row.dispatchId === dispatchId);
    if (!state.running || state.runId !== runId || state.coordinatorHandle !== from || state.attempts.get(taskId) !== attempt || attempt.settled || attempt.dispatchId !== dispatchId || !task || task.status !== "dispatched" || task.dispatch_id !== dispatchId || !worker || !activeDispatch(worker) || !detail?.dispatch || detail.dispatch.id !== dispatchId || detail.dispatch.runId !== runId || detail.dispatch.taskId !== taskId || detail.dispatch.status !== "dispatched") {
      throw new OrcaCliError("The exact owned attempt is no longer active", "active_dispatch_required");
    }
    const fleetVerdict = normalizeLiveness(worker.projection?.liveness?.verdict ?? null);
    const fleetReason = worker.projection?.liveness?.reason ?? null;
    const qualifiedGap = fleetVerdict === "unverifiable" && !!fleetReason && FLEET_CAPABILITY_GAP_REASONS.has(fleetReason) && detail.observation?.status === "live" && detail.observation.exactWorker === true;
    if (fleetVerdict !== "live" && !qualifiedGap) {
      throw new OrcaCliError("The exact active Dispatch is not positively live", "active_dispatch_required");
    }
    const occupied = new Set(workers.filter((row) => row.runId === runId && activeDispatch(row) && row.dispatchId !== dispatchId).map((row) => row.dispatchId));
    const unbound = [...state.attempts.values()].filter((row) => !row.settled && !row.dispatchId).length + [...state.retryCandidates.values()].filter((row) => !row.attempt.settled && !row.attempt.dispatchId).length;
    const unknown = [...state.guidanceSends.values()].filter((row) => (row.state === "prepared" || row.state === "unknown") && (!row.receipt || !occupied.has(row.receipt.dispatchId))).length;
    const unknownStarts = [...state.unknownStartRequests.values()].filter((id) => !state.attempts.has(id)).length;
    if (occupied.size + unbound + unknown + unknownStarts >= opts.maxConcurrency) {
      throw new OrcaCliError("No fleet capacity remains for a possible guidance follow-up", "guidance_capacity");
    }
    const freshBinding = await showRun(runId).catch(() => null);
    if (!freshBinding || freshBinding.run.id !== runId || freshBinding.run.coordinator_handle !== from || !state.running || state.runId !== runId || state.coordinatorHandle !== from) {
      throw new OrcaCliError("The coordinator's current Run binding changed; inspect the Run before sending", "coordinator_control_required");
    }
    try {
      const result = await performTaskGuidance({ ...input, dispatchId, from }, {
        store,
        audit: (row) => noteRequest({
          requestId: row.requestId,
          operation: "send",
          runId: row.runId,
          taskId: row.requestedTaskId,
          dispatchId: row.requestedDispatchId,
          settledLocally: row.state === "enqueued" || row.state === "follow_up"
        })
      });
      return result.receipt;
    } finally {
      await recoverGuidanceSends(runId);
    }
  });
  await withMailboxMutation(() => resolveGuidanceStopEvents(input.runId));
  return receipt;
}
async function saveMailbox(row, generation = coordinatorLoopGeneration, store = state.providerSessionStore) {
  if (!store) throw new Error("Mailbox checkpoint store is unavailable");
  const updated = { ...row, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
  await store.recordMailboxCheck(updated);
  if (generation === coordinatorLoopGeneration && state.runId === row.runId) {
    if (updated.state === "completed") state.mailboxChecks.delete(updated.requestId);
    else state.mailboxChecks.set(updated.requestId, updated);
  }
  return updated;
}
function stopEventReason(message) {
  if (message.type !== "escalation" || !message.payload) return null;
  try {
    const payload = JSON.parse(message.payload);
    return typeof payload.dispatchId === "string" && isStopEventReason(payload.stopReason) ? payload.stopReason : null;
  } catch {
    return null;
  }
}
async function resolveStopEvents(dispatchId, evidence, after, onlyMessageId) {
  for (const row of [...state.mailboxChecks.values()]) {
    const matches = (row.delivery?.messages ?? []).filter((message) => message.run_id === row.runId && row.pendingQuestionIds.includes(message.id) && (!onlyMessageId || message.id === onlyMessageId) && stopEventReason(message) && parseWorkerDonePayload(message)?.dispatchId === dispatchId && (!after || Number.isFinite(Date.parse(message.created_at)) && Date.parse(message.created_at) <= Date.parse(after)));
    if (!matches.length) continue;
    const ids = new Set(matches.map((message) => message.id));
    const pendingQuestionIds = row.pendingQuestionIds.filter((id) => !ids.has(id));
    const resolvedStopEvents = { ...row.resolvedStopEvents };
    for (const message of matches) resolvedStopEvents[message.id] = { dispatchId, evidence };
    await saveMailbox({
      ...row,
      pendingQuestionIds,
      resolvedStopEvents,
      state: row.state !== "received" && row.delivery?.deliveryAcknowledged === true && !pendingQuestionIds.length && row.processedMessageIds.length === row.delivery.messages.length ? "completed" : row.state
    });
    state.inbox = state.inbox.filter((item) => !ids.has(item.messageId));
  }
}
async function verifyMailboxAuthority(runId, from, generation) {
  const binding = await showRun(runId).catch(() => null);
  if (!binding || binding.run.id !== runId || binding.run.coordinator_handle !== from || !state.running || state.runId !== runId || state.coordinatorHandle !== from || generation !== coordinatorLoopGeneration) {
    throw new OrcaCliError("The coordinator's Run binding cannot be verified; inspect the Run before acting", "coordinator_control_required");
  }
}
async function acknowledgeStopEvent(runId, messageId, dispatchId) {
  await withMailboxMutation(async () => {
    if (!state.running || state.runId !== runId) throw new OrcaCliError("The requested Run is not controlled by this coordinator", "not_running");
    const from = state.coordinatorHandle;
    if (!from) throw new OrcaCliError("The requested Run has no coordinator handle", "not_running");
    const generation = coordinatorLoopGeneration;
    await verifyMailboxAuthority(runId, from, generation);
    const event = [...state.mailboxChecks.values()].flatMap((row) => row.delivery?.messages ?? []).find((message) => message.id === messageId && message.run_id === runId && stopEventReason(message) && parseWorkerDonePayload(message)?.dispatchId === dispatchId);
    if (!event || !state.inbox.some((item) => item.messageId === messageId && item.kind === "stop_event")) {
      throw new OrcaCliError("The exact stop event is no longer pending", "stop_event_not_found");
    }
    await resolveStopEvents(dispatchId, "operator_acknowledged", void 0, messageId);
  });
  await acknowledgePendingDeliveryIfResolved();
}
async function resolvePermissionPromptInboxItems(runId, dispatchId, promptId, decision, requestId) {
  await withMailboxMutation(() => recordPermissionPromptDecision(runId, { dispatchId, promptId, decision, requestId }));
  await acknowledgePendingDeliveryIfResolved();
}
async function recordPermissionPromptDecision(runId, resolution, taskId) {
  const { dispatchId, promptId } = resolution;
  if (!state.running || state.runId !== runId || !state.inbox.some((item) => item.dispatchId === dispatchId && item.permissionPrompt?.id === promptId)) return;
  const detail = await showWorkerDetail(dispatchId).catch(() => null);
  const workerTask = detail?.dispatch?.taskId;
  if (!workerTask || taskId && workerTask !== taskId || !exactWorkerDispatch(detail, runId, workerTask, dispatchId)) return;
  const terminal = detail.terminal?.handle ?? detail.fleet?.agentTerminalHandle;
  for (const row of [...state.mailboxChecks.values()]) {
    if (row.runId !== runId) continue;
    const matches = (row.delivery?.messages ?? []).filter((message) => {
      if (message.run_id !== runId || message.type !== "escalation" || !row.pendingQuestionIds.includes(message.id) || stopEventReason(message) || message.from_handle !== `dispatch:${dispatchId}` && (!terminal || message.from_handle !== terminal)) return false;
      const payload = parseWorkerDonePayload(message);
      return payload?.dispatchId === dispatchId && (!payload.taskId || payload.taskId === workerTask) && extractPermissionPrompt(payload)?.id === promptId;
    });
    if (!matches.length) continue;
    const ids = new Set(matches.map((message) => message.id));
    const pendingQuestionIds = row.pendingQuestionIds.filter((id) => !ids.has(id));
    const resolvedPermissionPrompts = { ...row.resolvedPermissionPrompts };
    for (const id of ids) resolvedPermissionPrompts[id] = resolution;
    await saveMailbox({
      ...row,
      pendingQuestionIds,
      resolvedPermissionPrompts,
      state: row.state !== "received" && row.delivery?.deliveryAcknowledged === true && !pendingQuestionIds.length && row.processedMessageIds.length === row.delivery.messages.length ? "completed" : row.state
    });
    state.inbox = state.inbox.filter((item) => !ids.has(item.messageId));
  }
}
async function recoverPermissionPromptDecisions(runId) {
  if (!state.running || state.runId !== runId || !state.requestLedger || !state.inbox.some((item) => item.permissionPrompt)) return;
  const ledger = await state.requestLedger.list();
  for (const entry of ledger) {
    if (entry.runId !== runId || !entry.dispatchId || !entry.taskId || !entry.target || entry.operation !== "worker-approve" && entry.operation !== "worker-deny") continue;
    const { requestId, dispatchId } = entry;
    const promptId = entry.target;
    if (!state.inbox.some((item) => item.dispatchId === dispatchId && item.permissionPrompt?.id === promptId)) continue;
    const request = await showRequest(requestId);
    if (request?.requestId !== requestId || request.raw.requestId !== requestId || request.state !== "completed" || request.raw.method !== "orchestration.approvalAnswer") continue;
    const decision = entry.operation === "worker-approve" ? "approve" : "deny";
    const outcome = request.outcome;
    if (!outcome || typeof outcome !== "object") continue;
    const receipt = outcome;
    if (receipt.ok === false || receipt.approvalId !== promptId || receipt.dispatchId !== dispatchId || receipt.decision !== (decision === "approve" ? "allow" : "deny")) continue;
    const mutation = receipt.mutation;
    if (mutation && typeof mutation === "object" && "requestId" in mutation && mutation.requestId !== requestId) continue;
    await recordPermissionPromptDecision(runId, { dispatchId, promptId, decision, requestId }, entry.taskId);
  }
}
function mailboxQuestion(message) {
  if (message.type !== "question" && message.type !== "escalation") throw new Error("Invalid pending mailbox question");
  const payload = parseWorkerDonePayload(message);
  let rawPayload = null;
  if (message.payload) {
    try {
      const parsed = JSON.parse(message.payload);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) rawPayload = parsed;
    } catch {
      rawPayload = null;
    }
  }
  const payloadTaskId = payload?.taskId ?? null;
  const payloadDispatchId = payload?.dispatchId ?? null;
  const relatedAttempt = [...state.attempts.values()].find((attempt) => (!payloadTaskId || attempt.taskId === payloadTaskId) && (!payloadDispatchId || attempt.dispatchId === payloadDispatchId) && !!message.from_handle && (message.from_handle === attempt.handle || message.from_handle === attempt.agentTerminalHandle || !!attempt.dispatchId && message.from_handle === `dispatch:${attempt.dispatchId}`));
  const stopReason = stopEventReason(message);
  const stopAttempt = stopReason && payloadDispatchId ? [...state.attempts.values()].find((attempt) => attempt.dispatchId === payloadDispatchId) : void 0;
  const resolvedDispatchId = relatedAttempt?.dispatchId ?? stopAttempt?.dispatchId ?? payloadDispatchId;
  const permissionPrompt = message.type === "escalation" && !stopReason && resolvedDispatchId ? extractPermissionPrompt(rawPayload) : null;
  state.inbox = [...state.inbox.filter((item) => item.messageId !== message.id), {
    messageId: message.id,
    kind: stopReason ? "stop_event" : message.type,
    from: message.from_handle,
    subject: message.subject,
    body: message.body,
    createdAt: message.created_at,
    taskId: relatedAttempt?.taskId ?? stopAttempt?.taskId ?? null,
    dispatchId: resolvedDispatchId,
    ...stopReason ? { stopReason } : {},
    ...permissionPrompt ? { permissionPrompt } : {}
  }];
}
async function restoreMailboxChecks(runId) {
  const rows = await state.providerSessionStore.listMailboxChecks(runId);
  for (const row of rows) {
    if (row.state === "completed") continue;
    state.mailboxChecks.set(row.requestId, row);
    if (row.delivery?.deliveryAcknowledged === true) state.mailboxNeedsDrain = true;
    for (const id of row.processedMessageIds) state.processedMessages.add(id);
    for (const message of row.delivery?.messages ?? []) {
      if (row.pendingQuestionIds.includes(message.id)) mailboxQuestion(message);
    }
    if (row.delivery?.deliveryId && row.delivery.deliveryAcknowledged !== true) {
      state.pendingDeliveryId = row.delivery.deliveryId;
    }
  }
}
async function prepareMailboxCheck(ack, drain = false) {
  const generation = coordinatorLoopGeneration;
  const store = state.providerSessionStore;
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const row = {
    requestId: newRequestId(),
    runId: state.runId,
    from: state.coordinatorHandle,
    ack,
    drain,
    state: "prepared",
    delivery: null,
    processedMessageIds: [],
    pendingQuestionIds: [],
    createdAt: timestamp,
    updatedAt: timestamp,
    error: null
  };
  await saveMailbox(row, generation, store);
  try {
    await noteRequest({ requestId: row.requestId, operation: "check", runId: row.runId, taskId: null, dispatchId: null });
  } catch (err) {
    await saveMailbox({ ...row, state: "completed" }, generation, store);
    throw err;
  }
  return row;
}
async function receiveMailboxCheck(row, waitMs) {
  const generation = coordinatorLoopGeneration;
  const store = state.providerSessionStore;
  const coordinator = state.coordinatorHandle;
  let delivery;
  try {
    if (row.from !== coordinator) {
      const receipt = await showRequest(row.requestId);
      const outcome = receipt?.requestId === row.requestId && receipt.state === "completed" && receipt.raw.method === "orchestration.check" ? receipt.outcome : null;
      const candidate = outcome && typeof outcome === "object" && !Array.isArray(outcome) ? outcome : null;
      const value = candidate?.result && typeof candidate.result === "object" ? candidate.result : candidate;
      if (!value || typeof value !== "object" || value.runId !== row.runId || !Array.isArray(value.messages)) {
        throw new Error(`Mailbox request ${row.requestId} cannot be recovered from its original terminal; inspect request-show`);
      }
      delivery = value;
    } else {
      delivery = await checkInbox({ from: row.from, ...row.ack ? { ack: row.ack } : row.drain ? {} : { types: WAKE_TYPES, waitMs }, requestId: row.requestId });
    }
    if (delivery.runId !== row.runId) throw new Error(`Mailbox request ${row.requestId} returned a foreign Run`);
    const received = { ...row, state: "received", delivery, error: null };
    return await saveMailbox(received, generation, store);
  } catch (err) {
    const detail = String(err.message ?? err);
    await saveMailbox({ ...row, state: "unknown", error: detail }, generation, store);
    throw err;
  }
}
async function loop(myLoop) {
  const waitMs = state.opts?.tickWaitMs ?? CHECK_WAIT_MS;
  while (state.running && myLoop === coordinatorLoopGeneration) {
    const iterStart = Date.now();
    let delivery = null;
    let passError = null;
    let processingFailed = false;
    try {
      await withMailboxMutation(async () => {
        if (!stillMyTurn(myLoop)) return;
        await recoverPendingReplies();
        await recoverPermissionPromptDecisions(state.runId);
        await resolveGuidanceStopEvents(state.runId);
        for (const row of [...state.mailboxChecks.values()]) {
          for (const message of row.delivery?.messages ?? []) {
            if (row.pendingQuestionIds.includes(message.id) && isMergeInputsQuestion(message)) {
              await withLifecycleMutation(() => stillMyTurn(myLoop) ? answerMergeQuestion(message) : Promise.resolve());
            }
          }
        }
      });
      if (!stillMyTurn(myLoop)) break;
      const checkpoint = await trackMailboxCheck(async () => {
        const store = state.providerSessionStore;
        let row = [...state.mailboxChecks.values()].find((item) => item.state === "prepared" || item.state === "unknown") ?? [...state.mailboxChecks.values()].find((item) => item.state === "received");
        const fresh = !row && !state.pendingDeliveryId;
        if (fresh) row = await prepareMailboxCheck(null, state.mailboxNeedsDrain);
        if (!stillMyTurn(myLoop)) {
          if (fresh && row) await saveMailbox({ ...row, state: "completed" }, myLoop, store);
          return row;
        }
        if (row && (row.state === "prepared" || row.state === "unknown")) {
          row = await receiveMailboxCheck(row, waitMs);
        }
        return row;
      });
      delivery = checkpoint?.delivery ?? null;
      if (!stillMyTurn(myLoop)) break;
      if (checkpoint && delivery) {
        const batch = delivery;
        if (checkpoint.ack) await finishAcknowledgedCheckpoint(checkpoint);
        await withMailboxMutation(() => processDelivery(batch, { checkpoint }));
        if (!checkpoint.ack) {
          if (delivery.deliveryAcknowledged === true && delivery.deliveryId) state.mailboxNeedsDrain = true;
          else state.mailboxNeedsDrain = false;
        }
      }
    } catch (e) {
      processingFailed = true;
      passError = String(e.message ?? e);
      if (stillMyTurn(myLoop)) state.error = passError;
    }
    if (!stillMyTurn(myLoop)) break;
    try {
      await withLifecycleMutation(() => stillMyTurn(myLoop) ? reconcile() : Promise.resolve());
    } catch (e) {
      const detail = String(e.message ?? e);
      passError = passError ? `${passError}; reconcile: ${detail}` : detail;
      if (stillMyTurn(myLoop)) state.error = detail;
    }
    if (!stillMyTurn(myLoop)) break;
    try {
      if (!processingFailed) await acknowledgePendingDeliveryIfResolved();
    } catch (e) {
      const detail = String(e.message ?? e);
      passError = passError ? `${passError}; acknowledge: ${detail}` : detail;
      if (stillMyTurn(myLoop)) state.error = detail;
    }
    if (!stillMyTurn(myLoop)) break;
    const check = recordCheckReceipt(delivery, iterStart, passError);
    if (check.persist) await emitCoordinatorCheck(check.receipt);
    if (!stillMyTurn(myLoop)) break;
    if (!passError && (state.mailboxNeedsDrain && !state.pendingDeliveryId || [...state.mailboxChecks.values()].some((row) => row.state === "received"))) continue;
    const elapsed = Date.now() - iterStart;
    if (elapsed < waitMs) await sleep(waitMs - elapsed);
  }
}
function stillMyTurn(myLoop) {
  return state.running && myLoop === coordinatorLoopGeneration;
}
function recordCheckReceipt(delivery, startedAt, error) {
  const previous = state.checks.at(-1);
  const checkedAt = Date.now();
  const receipt = {
    sequence: ++state.checkSequence,
    checkedAt,
    durationMs: Math.max(0, checkedAt - startedAt),
    deliveryId: delivery?.deliveryId ?? null,
    messageCount: delivery?.messages.length ?? 0,
    messageTypes: [...new Set((delivery?.messages ?? []).map((message) => message.type))],
    messages: (delivery?.messages ?? []).slice(0, CHECK_MESSAGES_MAX).map((message) => ({
      id: message.id,
      type: message.type,
      from: message.from_handle,
      subject: message.subject,
      createdAt: message.created_at
    })),
    replayed: delivery?.replayed ?? false,
    timedOut: delivery?.timedOut ?? false,
    error,
    source: "viewer_loop",
    evidence: null,
    agents: [...state.attempts.values()].map((attempt) => ({
      taskId: attempt.taskId,
      dispatchId: attempt.dispatchId,
      liveness: normalizeLiveness(attempt.liveness),
      activity: attempt.stage?.activity ?? null,
      detail: attempt.stage?.detail ?? null,
      attention: [...attempt.attention?.categories ?? []],
      agent: attempt.effective?.agent ?? attempt.harness,
      model: attempt.effective?.model ?? null,
      effort: attempt.effective?.effort ?? null,
      outcome: attempt.outcome,
      observedAt: attempt.lastHeartbeatAt
    }))
  };
  state.checks = [...state.checks, receipt].slice(-CHECK_RECEIPTS_MAX);
  return { receipt, persist: shouldPersistCoordinatorCheck(receipt, previous) };
}
function markProcessed(id) {
  if (state.processedMessages.has(id)) return true;
  state.processedMessages.add(id);
  if (state.processedMessages.size > PROCESSED_MESSAGES_MAX) {
    const keep = [...state.processedMessages].slice(-PROCESSED_MESSAGES_MAX / 2);
    state.processedMessages = new Set(keep);
  }
  return false;
}
async function processDelivery(delivery, opts = {}) {
  const generation = coordinatorLoopGeneration;
  const runId = state.runId;
  const v3 = opts.checkpoint?.delivery?.deliveryAcknowledged === true;
  if (delivery.deliveryId && !v3) {
    state.pendingDeliveryId = delivery.deliveryId;
  } else if (state.pendingDeliveryId && state.pendingDeliveryId === state.lastAckedDeliveryId) {
    state.pendingDeliveryId = null;
  }
  const tasks = delivery.messages.some((message) => message.type === "worker_done") && state.runId ? await listTasks(state.runId) : [];
  if (!stillMyTurn(generation) || state.runId !== runId) return;
  if (delivery.deliveryId && !v3) state.pendingDeliveryId = delivery.deliveryId;
  for (const message of delivery.messages) {
    if (state.processedMessages.has(message.id)) continue;
    if (message.run_id !== runId) {
      noteRecent(message, "mail row belongs to another Run \u2014 ignored");
    } else switch (message.type) {
      case "worker_done": {
        const settledTaskId = await handleWorkerDone(message, tasks);
        const settledDispatch = parseWorkerDonePayload(message)?.dispatchId;
        if (settledTaskId && settledDispatch) await resolveStopEvents(settledDispatch, `worker_done:${message.id}`);
        if (settledTaskId && delivery.deliveryId) {
          state.pendingOwnership.add(settledTaskId);
        }
        break;
      }
      case "question":
      case "escalation": {
        mailboxQuestion(message);
        break;
      }
      case "heartbeat":
        noteHeartbeat(message);
        break;
      default:
        state.recentMessages = [
          {
            id: message.id,
            type: message.type,
            from: message.from_handle,
            subject: message.subject,
            createdAt: message.created_at
          },
          ...state.recentMessages
        ].slice(0, RECENT_MESSAGES_MAX);
        break;
    }
    if (opts.checkpoint) {
      const current = state.mailboxChecks.get(opts.checkpoint.requestId);
      await saveMailbox({
        ...current,
        processedMessageIds: [...current.processedMessageIds, message.id],
        pendingQuestionIds: message.run_id === runId && (message.type === "question" || message.type === "escalation") ? [.../* @__PURE__ */ new Set([...current.pendingQuestionIds, message.id])] : current.pendingQuestionIds
      });
    }
    markProcessed(message.id);
  }
  if (opts.checkpoint) {
    const current = state.mailboxChecks.get(opts.checkpoint.requestId);
    for (const message of delivery.messages) {
      if (current?.pendingQuestionIds.includes(message.id) && isMergeInputsQuestion(message)) {
        await withLifecycleMutation(() => stillMyTurn(generation) ? answerMergeQuestion(message) : Promise.resolve());
      }
    }
  }
  if (opts.checkpoint) {
    const current = state.mailboxChecks.get(opts.checkpoint.requestId);
    await saveMailbox({ ...current, state: current.pendingQuestionIds.length || delivery.deliveryId && !v3 ? "pending_input" : "completed" });
  } else if (opts.acknowledge !== false) await acknowledgePendingDeliveryIfResolved();
}
var ackChain = Promise.resolve();
async function finishAcknowledgedCheckpoint(checkpoint) {
  if (!checkpoint.ack || !checkpoint.delivery) return;
  if (checkpoint.delivery.acknowledged !== checkpoint.ack) {
    throw new Error(`Mailbox ACK request ${checkpoint.requestId} did not confirm delivery ${checkpoint.ack}`);
  }
  for (const row of state.mailboxChecks.values()) {
    if (row.requestId !== checkpoint.requestId && row.delivery?.deliveryId === checkpoint.ack && row.state !== "completed") {
      await saveMailbox({ ...row, state: "completed", pendingQuestionIds: [] });
    }
  }
  if (state.pendingDeliveryId === checkpoint.ack) state.pendingDeliveryId = null;
  state.lastAckedDeliveryId = checkpoint.ack;
  state.mailboxNeedsDrain = !checkpoint.delivery.deliveryId;
  state.pendingOwnership.clear();
}
async function runAck() {
  if (!state.running) return;
  const deliveryId = state.pendingDeliveryId;
  if (!deliveryId) return;
  const original = [...state.mailboxChecks.values()].find((row) => row.delivery?.deliveryId === deliveryId && row.state !== "completed");
  if (!original || original.pendingQuestionIds.length > 0) return;
  if ([...state.mailboxChecks.values()].some((row) => row.ack !== deliveryId && (row.state === "prepared" || row.state === "unknown"))) return;
  if (deliveryId === state.lastAckedDeliveryId) return;
  for (const taskId of [...state.pendingOwnership]) {
    const attempt = state.attempts.get(taskId);
    if (!attempt) {
      state.pendingOwnership.delete(taskId);
    } else if (attempt.terminalDecision === "pending") {
      return;
    }
  }
  const generation = coordinatorLoopGeneration;
  const coordinator = state.coordinatorHandle;
  const store = state.providerSessionStore;
  const checkpoint = await trackMailboxCheck(async () => {
    let row = [...state.mailboxChecks.values()].find((item) => item.ack === deliveryId && item.state !== "completed");
    const fresh = !row;
    if (!row) row = await prepareMailboxCheck(deliveryId);
    if (!stillMyTurn(generation) || state.coordinatorHandle !== coordinator) {
      if (fresh) await saveMailbox({ ...row, state: "completed" }, generation, store);
      return row;
    }
    if (row.state === "prepared" || row.state === "unknown") row = await receiveMailboxCheck(row, 0);
    return row;
  });
  if (!stillMyTurn(generation) || state.coordinatorHandle !== coordinator) return;
  await finishAcknowledgedCheckpoint(checkpoint);
}
function acknowledgePendingDeliveryIfResolved() {
  const run = ackChain.then(runAck, runAck);
  ackChain = run;
  return run;
}
async function handleWorkerDone(message, tasks) {
  const payload = parseWorkerDonePayload(message);
  const payloadTask = payload?.taskId ?? null;
  const payloadDispatch = payload?.dispatchId ?? null;
  const outcome = payload?.outcome ?? null;
  let attempt = null;
  if (payloadDispatch) {
    attempt = [...state.attempts.values()].find((a) => a.dispatchId === payloadDispatch) ?? null;
  }
  if (!attempt && payloadTask) attempt = state.attempts.get(payloadTask) ?? null;
  if (!attempt && !payloadTask && !payloadDispatch) {
    attempt = [...state.attempts.values()].find((a) => a.handle && a.handle === message.from_handle) ?? null;
  }
  if (!attempt) {
    noteRecent(message, "worker_done for an unknown Dispatch \u2014 not settling anything");
    return null;
  }
  if (payloadTask && payloadTask !== attempt.taskId || payloadDispatch && payloadDispatch !== attempt.dispatchId) {
    noteRecent(message, "worker_done payload identities disagree with the owned attempt \u2014 ignored");
    return null;
  }
  if (message.subject?.startsWith("Rejected worker_done") || payload?._orcaLifecycleRejection) {
    noteRecent(message, "worker_done was rejected by Orca \u2014 ignored");
    return null;
  }
  if (outcome !== "succeeded" && outcome !== "failed") {
    noteRecent(message, "worker_done without a verifiable outcome \u2014 not treated as completion");
    return null;
  }
  const dispatchSender = attempt.dispatchId && message.from_handle === `dispatch:${attempt.dispatchId}`;
  let terminalSender = !!message.from_handle && (message.from_handle === attempt.handle || message.from_handle === attempt.agentTerminalHandle);
  if (!dispatchSender && !terminalSender && attempt.dispatchId && state.runId) {
    const detail = await showWorkerDetail(attempt.dispatchId);
    if (!detail?.dispatch || detail.dispatch.id !== attempt.dispatchId || detail.dispatch.runId !== state.runId || detail.dispatch.taskId !== attempt.taskId) {
      noteRecent(message, "worker_done sender has no exact Dispatch evidence \u2014 ignored");
      return null;
    }
    terminalSender = !!detail.terminal?.handle && detail.terminal.handle === message.from_handle;
  }
  if (!dispatchSender && !terminalSender) {
    noteRecent(message, "worker_done sender does not match the exact owned Dispatch \u2014 ignored");
    return null;
  }
  if (attempt.settled && attempt.settledVia === "start_failed") {
    const runtimeTask2 = tasks.find((task) => task.id === attempt.taskId);
    const exactLateSuccess = attempt.outcome === "failed" && attempt.dispatchId !== null && outcome === "succeeded" && payloadTask === attempt.taskId && payloadDispatch === attempt.dispatchId && state.runId !== null && message.run_id === state.runId && !message.subject?.startsWith("Rejected worker_done") && !payload?._orcaLifecycleRejection && runtimeTask2?.id === attempt.taskId && runtimeTask2.run_id === state.runId && runtimeTask2.status === "completed" && runtimeTask2.dispatch_id === attempt.dispatchId;
    if (exactLateSuccess && correctStartFailedOutcome(attempt, "worker_done")) {
      noteRecent(message, "Orca corrected the provisional failed start to succeeded");
      return attempt.taskId;
    }
    noteRecent(message, "worker_done for an already settled Dispatch \u2014 ignored");
    return null;
  }
  if (payloadDispatch && attempt.dispatchId && payloadDispatch !== attempt.dispatchId) {
    noteRecent(message, "worker_done dispatch id does not match the active Dispatch \u2014 ignored");
    return null;
  }
  if (outcome !== "succeeded" && outcome !== "failed") {
    noteRecent(message, "worker_done without a verifiable outcome \u2014 not treated as completion");
    return null;
  }
  const runtimeTask = tasks.find((task) => task.id === attempt.taskId);
  const expectedStatus = outcome === "succeeded" ? "completed" : "failed";
  if (message.subject?.startsWith("Rejected worker_done") || !runtimeTask || runtimeTask.status !== expectedStatus || runtimeTask.dispatch_id && runtimeTask.dispatch_id !== attempt.dispatchId) {
    noteRecent(message, "worker_done was not accepted by Orca \u2014 Task remains unsettled");
    return null;
  }
  if (attempt.settled) {
    noteRecent(message, "duplicate worker_done for an already settled Dispatch \u2014 ignored");
    return attempt.terminalDecision === "pending" ? attempt.taskId : null;
  }
  settleAttempt(attempt, outcome, "worker_done");
  if (outcome === "failed" && state.runId) {
    await refreshAttemptDispatchDetail(attempt, state.runId);
  }
  return attempt.taskId;
}
function noteHeartbeat(message) {
  const payload = parseWorkerDonePayload(message);
  const dispatchId = payload?.dispatchId ?? null;
  for (const a of state.attempts.values()) {
    if (a.settled) continue;
    if (dispatchId ? a.dispatchId === dispatchId : a.handle === message.from_handle) {
      a.lastHeartbeatAt = message.created_at;
    }
  }
}
function noteRecent(message, note) {
  state.recentMessages = [
    {
      id: message.id,
      type: `${message.type} \xB7 ${note}`,
      from: message.from_handle,
      subject: message.subject,
      createdAt: message.created_at
    },
    ...state.recentMessages
  ].slice(0, RECENT_MESSAGES_MAX);
}
function settleAttempt(attempt, outcome, via) {
  attempt.settled = true;
  attempt.outcome = outcome;
  attempt.settledVia = via;
  attempt.settledAt = Date.now();
  attempt.terminalDecision = "pending";
  const requestId = attempt.startRequestId;
  attempt.startRequestId = null;
  if (requestId) {
    void noteRequest({
      requestId,
      operation: "worker-start",
      runId: state.runId,
      taskId: attempt.taskId,
      dispatchId: attempt.dispatchId,
      settledLocally: true,
      note: `Exact Dispatch settlement confirmed ${outcome}`
    });
  }
}
function correctStartFailedOutcome(attempt, via) {
  if (attempt.settledVia !== "start_failed" || attempt.outcome !== "failed") return false;
  attempt.outcome = "succeeded";
  attempt.settledVia = via;
  attempt.settledAt = Date.now();
  return true;
}
function bindAttemptDispatch(attempt, dispatchId) {
  if (attempt.dispatchId !== dispatchId) {
    attempt.failureCount = null;
    attempt.dispatchStatus = null;
    attempt.dispatchId = dispatchId;
  }
}
function applyAttemptDispatchDetail(attempt, runId, detail) {
  const dispatchId = attempt.dispatchId;
  const dispatch = detail?.dispatch;
  if (!dispatchId || !detail || !dispatch || state.runId !== runId || detail.dispatchId !== dispatchId || dispatch.id !== dispatchId || dispatch.runId !== runId || dispatch.taskId !== attempt.taskId || attempt.dispatchId !== dispatchId) return false;
  const count = dispatch.failureCount;
  if (typeof count === "number" && Number.isFinite(count) && Number.isInteger(count) && count >= 0) {
    attempt.failureCount = count;
  }
  if (typeof dispatch.status === "string" && dispatch.status.trim()) {
    attempt.dispatchStatus = dispatch.status;
  }
  if (detail.launchMode !== void 0) attempt.launchMode = detail.launchMode;
  return true;
}
async function refreshAttemptDispatchDetail(attempt, runId) {
  const dispatchId = attempt.dispatchId;
  if (!dispatchId) return null;
  try {
    const detail = await showWorkerDetail(dispatchId);
    return applyAttemptDispatchDetail(attempt, runId, detail) ? detail : null;
  } catch {
    return null;
  }
}
async function stageWorkerPath(attempt) {
  if (!attempt.dispatchId) throw new Error(`Task ${attempt.taskId} has no exact Dispatch identity`);
  const detail = await showWorkerDetail(attempt.dispatchId);
  applyAttemptDispatchDetail(attempt, state.runId ?? "", detail);
  if (detail?.terminal?.worktreePath) return detail.terminal.worktreePath;
  const selector = detail?.launch?.resolvedWorktreeId ?? attempt.effective?.worktree;
  if (selector && !RESERVED_WORKTREE_ECHOES.has(selector)) {
    const row = await showWorktree(selector);
    if (row?.path) return row.path;
  }
  if (!attempt.adopted && attempt.requested.worktree === "current") {
    return getOrcaRuntime().workspace.dir;
  }
  throw new Error(`Task ${attempt.taskId} has no positively observed Git worktree path`);
}
async function stageStartPath(worktree) {
  if (!worktree || worktree === "current") return getOrcaRuntime().workspace.dir;
  if (worktree === "new-child" || worktree === "new-top-level") return null;
  const row = await showWorktree(worktree);
  if (!row?.path) throw new Error(`Cannot inspect exact Stage workspace ${worktree}`);
  return row.path;
}
function reserveAttempt(task, harness) {
  return {
    taskId: task.id,
    harness,
    mode: "supervised",
    dispatchId: null,
    handle: null,
    startedAt: Date.now(),
    failureCount: null,
    dispatchStatus: null,
    lastHeartbeatAt: null,
    liveness: null,
    livenessReason: null,
    attention: null,
    stage: null,
    settled: false,
    outcome: null,
    settledVia: null,
    settledAt: null,
    terminalDecision: "pending",
    terminalDetail: null,
    releaseAttempts: 0,
    output: null,
    adopted: false,
    startRequestId: null,
    startReceipts: [],
    nextAction: null,
    releaseRequestId: null,
    terminalArchive: null,
    retriedFrom: null,
    requested: { agent: harness, model: null, effort: null, worktree: null, terminal: null, on: null },
    effective: null,
    reuseOf: null,
    agentTerminalHandle: null,
    fleetTerminalState: null,
    host: null,
    providerSession: null
  };
}
function registerHandedBackOwnership(snapshot) {
  let changed;
  do {
    changed = false;
    for (const [dispatchId, evidence] of state.workerCreators) {
      if (evidence.historical && evidence.creatorId && state.ownedDispatchIds.has(evidence.creatorId) && !state.ownedDispatchIds.has(dispatchId)) {
        state.ownedDispatchIds.add(dispatchId);
        changed = true;
      }
    }
    for (const row of snapshot.handedBack) {
      const creator = state.workerCreators.get(row.dispatchId)?.creatorId;
      if (creator && state.ownedDispatchIds.has(creator) && !state.ownedDispatchIds.has(row.dispatchId)) {
        state.ownedDispatchIds.add(row.dispatchId);
        changed = true;
      }
    }
  } while (changed);
}
async function refreshHelperOwnership(runId, tasks, rows) {
  const generation = coordinatorLoopGeneration;
  const coordinator = state.coordinatorHandle;
  const isCurrent = () => stillMyTurn(generation) && state.runId === runId && state.coordinatorHandle === coordinator;
  const ownership = await readWorkerOwnership(runId, tasks, rows, state.workerCreators);
  if (!isCurrent()) return false;
  registerHandedBackOwnership(ownership);
  state.delegatedTaskIds = ownership.heldTaskIds;
  state.delegatedDispatchIds = ownership.heldDispatchIds;
  for (const row of ownership.handedBack) {
    if (!state.ownedDispatchIds.has(row.dispatchId)) continue;
    const task = tasks.find((candidate) => candidate.id === row.taskId);
    if (!task || state.attempts.has(task.id) || workerSupervision(row) !== "supervised") continue;
    const evidence = taskDispatchEvidence(task, rows, runId);
    if (evidence.uncertain || evidence.row?.dispatchId !== row.dispatchId) continue;
    if (!activeDispatch(row) && task.status !== "completed" && task.status !== "failed") continue;
    const reported = row.projection?.provider?.id ?? row.projection?.launch?.agent;
    const harness = reported === "opencode2" ? "opencode" : reported ?? state.opts.harnessByTask[task.id] ?? state.opts.defaultHarness;
    const attempt = reserveAttempt(task, harness);
    attempt.adopted = true;
    attempt.dispatchId = row.dispatchId;
    attempt.agentTerminalHandle = row.agentTerminalHandle;
    attempt.requested.worktree = row.projection?.launch?.worktree ?? null;
    attempt.requested.on = row.projection?.host?.kind === "local" ? null : row.projection?.host?.id ?? "unverified";
    const outcome = projectionOutcome(row);
    if (outcome && row.dispatchStatus !== "pending") {
      settleAttempt(attempt, outcome, "task_status");
      seedInheritedTerminalState(attempt, row);
    }
    state.attempts.set(task.id, attempt);
    await refreshAttemptDispatchDetail(attempt, runId);
    if (!isCurrent()) return false;
  }
  return true;
}
async function reconcile() {
  if (state.runId) {
    await recoverGuidanceSends(state.runId);
    await recoverNativeResumes(state.runId);
  }
  const opts = state.opts;
  const runId = state.runId;
  const generation = coordinatorLoopGeneration;
  state.lastTick = Date.now();
  if ([...state.mailboxChecks.values()].some((row) => ["prepared", "received", "unknown"].includes(row.state))) {
    state.phase = "recovering";
    return;
  }
  let [tasks, workerRows] = await Promise.all([
    listTasks(runId),
    listCompleteWorkers(runId, { includeRemote: true })
  ]);
  if (!stillMyTurn(generation) || state.runId !== runId) return;
  const stoppedDispatches = new Set([...state.mailboxChecks.values()].flatMap((row) => (row.delivery?.messages ?? []).filter((message) => row.pendingQuestionIds.includes(message.id) && stopEventReason(message)).map((message) => parseWorkerDonePayload(message)?.dispatchId).filter((id) => !!id)));
  for (const dispatchId of stoppedDispatches) {
    const detail = await showWorkerDetail(dispatchId).catch(() => null);
    const dispatch = detail?.dispatch;
    if (dispatch?.id === dispatchId && dispatch.runId === runId && dispatch.status !== null && ["succeeded", "completed", "failed", "stopped", "abandoned"].includes(dispatch.status)) {
      await resolveStopEvents(dispatchId, `dispatch_settled:${dispatch.status}`);
    }
  }
  const byId = new Map(tasks.map((t) => [t.id, t]));
  const dependenciesCompleted = (task) => taskDeps(task).every((id) => byId.get(id)?.status === "completed");
  if (!await refreshHelperOwnership(runId, tasks, workerRows)) return;
  for (const [dispatchId, resumed] of state.nativeResumes) {
    const task = byId.get(resumed.checkpoint.taskId);
    if (!task) continue;
    const current = state.attempts.get(task.id);
    if (current && !current.settled || state.delegatedTaskIds.has(task.id)) continue;
    const { row, uncertain } = taskDispatchEvidence(task, workerRows, runId);
    if (!row || row.dispatchId !== dispatchId || uncertain || !activeDispatch(row) || workerSupervision(row) !== "supervised" || current && current.dispatchId !== resumed.checkpoint.originalDispatchId) continue;
    const attempt = reserveAttempt(task, resumed.checkpoint.harness);
    attempt.adopted = true;
    attempt.dispatchId = row.dispatchId;
    seedNativeResume(attempt, resumed);
    state.attempts.set(task.id, attempt);
    await refreshAttemptDispatchDetail(attempt, runId);
  }
  const resumeHeldTasks = new Set([...state.resumeHolds.values()].map((row) => row.taskId));
  const occupiedTaskIds = new Set(
    workerRows.filter((row) => row.runId === runId && activeDispatch(row)).map((row) => row.taskId)
  );
  const blocked = tasks.filter((t) => t.status === "blocked");
  const readyJoins = state.stageGit ? [] : tasks.filter(
    (t) => t.status === "ready" && dependenciesCompleted(t) && isCrossLaneJoin(t, opts.laneByTask)
  );
  const gates = await listGates(runId);
  const gateApprovalByTask = /* @__PURE__ */ new Map();
  for (const gate of gates) {
    if (!gate.taskId) continue;
    const approved = isIntegrationGate(gate) ? gateIntegrated(gate) : ordinaryGateApproved(gate);
    gateApprovalByTask.set(gate.taskId, approved && (gateApprovalByTask.get(gate.taskId) ?? true));
  }
  if (blocked.length > 0) {
    const toRelease = blocked.filter((task) => gateApprovalByTask.get(task.id) === true && dependenciesCompleted(task) && !occupiedTaskIds.has(task.id));
    if (toRelease.length > 0) {
      await Promise.all(
        toRelease.map((t) => taskUpdate(t.id, "ready", runId, state.coordinatorHandle))
      );
      tasks = await listTasks(runId);
      for (const t of tasks) byId.set(t.id, t);
    }
  }
  state.integrationParked = /* @__PURE__ */ new Set();
  for (const task of state.stageGit ? [] : [...readyJoins, ...blocked]) {
    const gate = gates.find((g) => g.taskId === task.id && isIntegrationGate(g)) ?? null;
    if (!gate) {
      if (task.status !== "ready") continue;
      await createIntegrationGate(task);
    }
    if (!gateIntegrated(gate)) state.integrationParked.add(task.id);
  }
  const rowsByDispatch = new Map(workerRows.map((r) => [r.dispatchId, r]));
  await refreshRecoverySessions(runId, tasks, workerRows);
  state.unownedDispatches = tasks.flatMap((task) => {
    const attempt = state.attempts.get(task.id);
    const evidence = taskDispatchEvidence(task, workerRows, runId);
    const unowned = evidence.active.filter((row) => !attempt || attempt.settled || attempt.dispatchId !== row.dispatchId);
    if (unowned.length > 0) return unowned.map((row) => `${task.id} (${row.dispatchId})`);
    if (task.status === "dispatched" && !attempt) {
      return [`${task.id}${task.dispatch_id ? ` (${task.dispatch_id})` : ""}`];
    }
    return [];
  });
  const unownedCount = state.unownedDispatches.length;
  for (const attempt of [...state.attempts.values()]) {
    const task = byId.get(attempt.taskId);
    if (!attempt.dispatchId && !attempt.startRequestId && task?.dispatch_id) {
      bindAttemptDispatch(attempt, task.dispatch_id);
      await refreshAttemptDispatchDetail(attempt, runId);
    }
    const candidateRow = attempt.dispatchId ? rowsByDispatch.get(attempt.dispatchId) : void 0;
    const row = candidateRow && candidateRow.runId === runId && candidateRow.taskId === attempt.taskId && candidateRow.dispatchId === attempt.dispatchId ? candidateRow : void 0;
    if (row) {
      if (row.dispatchStatus !== "unknown") attempt.dispatchStatus = row.dispatchStatus;
      if (attempt.settled && attempt.dispatchStatus === "circuit_broken" && attempt.failureCount !== 3) {
        await refreshAttemptDispatchDetail(attempt, runId);
      }
      if (!attempt.openCodeTui && await findOpenCodeTuiLaunch(row.dispatchId)) attempt.openCodeTui = true;
      attempt.fleetTerminalState = row.terminalState;
      attempt.agentTerminalHandle = row.agentTerminalHandle ?? attempt.agentTerminalHandle;
      attempt.liveness = normalizeLiveness(row.projection?.liveness?.verdict ?? null);
      attempt.livenessReason = row.projection?.liveness?.reason ?? null;
      attempt.attention = row.projection?.attention ?? null;
      attempt.stage = row.projection?.stage ?? null;
      attempt.host = row.projection?.host ?? attempt.host;
      const launch = row.projection?.launch;
      const provider = row.projection?.provider;
      const rawWs = row.projection?.workspace;
      const wsId = typeof rawWs === "string" ? rawWs : rawWs && typeof rawWs === "object" && typeof rawWs.id === "string" ? rawWs.id : null;
      const positiveWs = positiveSelector(launch?.worktree) ? launch.worktree : positiveSelector(wsId) ? wsId : null;
      if (launch || provider?.model || positiveWs) {
        attempt.effective = {
          agent: launch?.agent ?? provider?.id ?? attempt.effective?.agent ?? null,
          model: launch?.model ?? provider?.model ?? attempt.effective?.model ?? null,
          effort: launch?.effort ?? attempt.effective?.effort ?? null,
          worktree: positiveWs ?? attempt.effective?.worktree ?? null,
          terminal: launch?.terminal ?? attempt.effective?.terminal ?? null,
          on: launch?.on ?? attempt.effective?.on ?? null
        };
      }
      const observedAgent = attempt.effective?.agent ?? (!attempt.adopted ? attempt.harness : null);
      if (attempt.dispatchId && observedAgent && (attempt.effective?.model || attempt.effective?.effort || positiveSelector(attempt.effective?.worktree))) {
        void recordLaunchEvidenceIfChanged({
          runId,
          taskId: attempt.taskId,
          dispatchId: attempt.dispatchId,
          harness: observedAgent,
          model: attempt.effective?.model ?? null,
          effort: attempt.effective?.effort ?? null,
          worktree: positiveSelector(attempt.effective?.worktree) ? attempt.effective.worktree : null,
          source: "viewer-launch"
        });
      }
    } else if (attempt.requested.on) {
      attempt.liveness = "unverifiable";
      attempt.livenessReason = `execution host ${attempt.requested.on} has not reported this dispatch`;
      attempt.nextAction = null;
    }
    attempt.nextAction = row?.projection?.nextAction ?? null;
    if (attempt.openCodeTui && attempt.dispatchId && Date.now() - (attempt.openCodeCheckedAt ?? 0) > 1e4) {
      attempt.openCodeCheckedAt = Date.now();
      attempt.openCodeEvidence = await inspectOpenCodeTui(attempt.dispatchId).catch(() => null);
    }
    if (attempt.settled && attempt.settledVia === "start_failed") {
      const exactLateSuccess = attempt.outcome === "failed" && attempt.dispatchId !== null && attempt.dispatchId !== attempt.retriedFrom && task?.id === attempt.taskId && task.run_id === runId && task.status === "completed" && task.dispatch_id === attempt.dispatchId && row?.dispatchStatus !== "pending";
      if (exactLateSuccess) correctStartFailedOutcome(attempt, "task_status");
    } else if (!attempt.settled) {
      const outcome = task?.status === "completed" ? "succeeded" : "failed";
      const currentDispatchProvesOutcome = row !== void 0 && row.dispatchId !== attempt.retriedFrom && projectionOutcome(row) === outcome;
      if (task && TERMINAL_TASK_STATUS.has(task.status) && row?.dispatchStatus !== "pending" && (!attempt.startRequestId || currentDispatchProvesOutcome)) {
        settleAttempt(attempt, outcome, "task_status");
        if (task.status === "failed") await refreshAttemptDispatchDetail(attempt, runId);
      }
    }
    if (attempt.settled) {
      const transferRecipient = findProvenReuseTransferRecipient(attempt, row, runId, workerRows);
      if (transferRecipient) {
        attempt.terminalDecision = "reused";
        attempt.terminalDetail = `terminal transfer confirmed to dispatch ${transferRecipient.dispatchId} (task ${transferRecipient.taskId})`;
        clearAttemptDebt(attempt);
      }
      if (state.stageGit && attempt.outcome === "succeeded" && attempt.dispatchId && task && !state.stageGit.artifact(task.id)) {
        try {
          const path = await stageWorkerPath(attempt);
          if (task.spec?.includes(MERGE_PREP_MARKER)) {
            await state.stageGit.verifyDependencies(task, path);
          }
          await state.stageGit.snapshot(task.id, attempt.dispatchId, path);
          state.stageGitErrors.delete(task.id);
        } catch (err) {
          state.stageGitErrors.set(task.id, String(err.message ?? err));
        }
      }
      await decideTerminalOwnership(
        attempt,
        opts,
        // Terminal reuse can start a follow-up immediately, before this
        // pass's Stage artifact checks and parking have run. In committed
        // Stage mode, release the settled terminal first; the later dispatch
        // batch is the only path that may start verified downstream work.
        state.stageGit ? [] : tasks.filter((t) => t.status === "ready" && !resumeHeldTasks.has(t.id) && dependenciesCompleted(t) && gateApprovalByTask.get(t.id) !== false && !occupiedTaskIds.has(t.id))
      );
    }
  }
  if (state.stageGit) {
    for (const task of tasks) {
      if (task.status !== "ready" && task.status !== "blocked") continue;
      if (taskDeps(task).some((id) => !state.stageGit.artifact(id))) {
        state.integrationParked.add(task.id);
      }
    }
  }
  state.lastReconciledAt = Date.now();
  const ready = tasks.filter((t) => dependenciesCompleted(t) && !resumeHeldTasks.has(t.id) && (t.status === "ready" || t.status === "blocked" && state.retryOfByTask.has(t.id)));
  const activeAttempts = [...state.attempts.values()].filter((a) => !a.settled).length + [...state.retryCandidates.values()].filter((r) => !r.attempt.settled).length;
  const occupiedDispatches = new Set(workerRows.filter((row) => row.runId === runId && activeDispatch(row)).map((row) => row.dispatchId));
  for (const attempt of state.attempts.values()) if (!attempt.settled && attempt.dispatchId) occupiedDispatches.add(attempt.dispatchId);
  const guidanceUnknown = [...state.guidanceSends.values()].filter((row) => (row.state === "prepared" || row.state === "unknown") && (!row.receipt || !occupiedDispatches.has(row.receipt.dispatchId))).length;
  const unknownStarts = [...state.unknownStartRequests.values()].filter((id) => !state.attempts.has(id)).length;
  const budget = Math.max(0, opts.maxConcurrency - activeAttempts - unownedCount - guidanceUnknown - unknownStarts);
  const busyLanes = /* @__PURE__ */ new Set();
  for (const [taskId, laneId] of Object.entries(opts.laneByTask ?? {})) {
    const attempt = state.attempts.get(taskId);
    const retry = state.retryCandidates.get(taskId)?.attempt;
    const taskRow = byId.get(taskId);
    if (attempt && !attempt.settled || retry && !retry.settled || occupiedTaskIds.has(taskId) || !attempt && taskRow?.status === "dispatched") {
      busyLanes.add(laneId);
    }
  }
  const batch = ready.filter((t) => ![...state.unknownStartRequests.values()].includes(t.id)).filter((t) => !state.attempts.has(t.id)).filter((t) => !occupiedTaskIds.has(t.id)).filter((t) => !state.delegatedTaskIds.has(t.id)).filter((t) => gateApprovalByTask.get(t.id) !== false).filter((t) => !state.integrationParked.has(t.id)).filter((t) => {
    const laneId = laneOfTask(t.id, opts.laneByTask);
    return laneId === null || !busyLanes.has(laneId);
  }).slice(0, budget);
  if (batch.length === 0) {
    await evaluateCompletionBoundary(tasks, gates);
    return;
  }
  const reserved = batch.map((task) => {
    const attempt = reserveAttempt(task, opts.harnessByTask[task.id] || opts.defaultHarness);
    state.attempts.set(task.id, attempt);
    const retryOf = state.retryOfByTask.get(task.id) ?? null;
    state.retryOfByTask.delete(task.id);
    return { task, attempt, retryOf };
  });
  await Promise.all(
    reserved.map(({ task, attempt, retryOf }) => startOne(task, attempt, opts, runId, retryOf))
  );
}
async function verifyPreparedOpenCodePane(attempt) {
  if (!attempt.dispatchId || !state.runId) throw new Error("OpenCode retention has no exact Dispatch or Run");
  const launch = await findOpenCodeTuiLaunch(attempt.dispatchId);
  if (!launch || launch.state === "closed" || !launch.terminal || launch.runId !== state.runId || launch.taskId !== attempt.taskId || launch.dispatchId !== attempt.dispatchId) {
    throw new Error("OpenCode retention lacks an exact caller-owned pane/session journal");
  }
  await verifyOpenCodeTuiTerminal(launch);
  await verifyOpenCodeSession(launch);
}
async function decideTerminalOwnership(attempt, opts, readyTasks = []) {
  if (attempt.openCodeTui && attempt.dispatchId && ["pending", "release_pending"].includes(attempt.terminalDecision)) {
    if (opts.retainByTask?.[attempt.taskId]) {
      const receipt2 = await retainWorker(attempt.dispatchId);
      try {
        await verifyPreparedOpenCodePane(attempt);
        await retainOpenCodeTui(attempt.dispatchId);
      } catch (err) {
        attempt.terminalDecision = "release_unknown";
        attempt.terminalDetail = `Caller-owned OpenCode pane retained without closing; identity is unconfirmed: ${String(err.message ?? err)}`;
        recordDebt(attempt, "release_unknown", attempt.terminalDetail);
        return;
      }
      if (receipt2.state === "retained" || receipt2.state === "released" || receipt2.state === "already_released") {
        attempt.terminalDecision = "retained";
        attempt.terminalDetail = `Caller-owned OpenCode pane retained; native resource: ${receipt2.state}${receipt2.reason ? ` (${receipt2.reason})` : ""}`;
        clearAttemptDebt(attempt);
      } else {
        attempt.terminalDecision = "release_unknown";
        attempt.terminalDetail = `Caller-owned OpenCode pane retained; native retain returned ${receipt2.state}: ${receipt2.reason ?? "resource state unresolved"}`;
        recordDebt(attempt, "release_unknown", attempt.terminalDetail);
      }
      return;
    }
    if (!await findOpenCodeTuiLaunch(attempt.dispatchId)) {
      attempt.terminalDecision = "release_unknown";
      attempt.terminalDetail = "OpenCode Dispatch/session correlation is missing; inspect the durable preparation before cleanup";
      recordDebt(attempt, "release_unknown", attempt.terminalDetail);
      return;
    }
    const receipt = await performRelease(attempt);
    applyReleaseReceipt(attempt, receipt);
    if (receipt.state === "retained" && receipt.reason === "identity_unproven") {
      await retainOpenCodeTui(attempt.dispatchId);
      return;
    }
    if (receipt.state !== "retained" || receipt.reason !== "external_terminal") return;
    try {
      attempt.output = await readWorkerOutput(attempt.dispatchId, { limit: 40 });
      const decision = await closeReleasedOpenCodeTui(attempt.dispatchId);
      attempt.terminalDecision = decision ?? "retained";
      attempt.terminalDetail = decision === "closed" ? "Viewer-owned TUI closed; history remains in OpenCode API; Orca resource is retained/external" : "TUI retained for user-owned work";
      clearAttemptDebt(attempt);
    } catch (err) {
      attempt.releaseAttempts++;
      attempt.terminalDetail = String(err.message ?? err);
      attempt.terminalDecision = attempt.releaseAttempts <= RELEASE_RETRY_MAX ? "release_pending" : "release_unknown";
      if (attempt.terminalDecision === "release_unknown") recordDebt(attempt, "release_unknown", attempt.terminalDetail);
    }
    return;
  }
  if (attempt.terminalDecision === "release_pending") {
    attempt.releaseAttempts += 1;
    if (attempt.releaseAttempts > RELEASE_RETRY_MAX) {
      recordDebt(attempt, "release_pending", "release did not settle after repeated retries");
      return;
    }
    applyReleaseReceipt(attempt, await performRelease(attempt));
    return;
  }
  if (attempt.terminalDecision !== "pending") return;
  if (attempt.settledVia === "start_failed") {
    const receipt = attempt.startReceipts[attempt.startReceipts.length - 1] ?? null;
    if (attempt.dispatchId) {
      applyReleaseReceipt(attempt, await performRelease(attempt));
      return;
    }
    if (receipt && receipt.residualResources) {
      attempt.terminalDecision = "release_unknown";
      attempt.terminalDetail = (receipt.failedStage ? `failed at ${receipt.failedStage}; ` : "") + "start left residual resources without an addressable Dispatch" + (receipt.recoveryCommands.length ? ` \u2014 prescribed: ${receipt.recoveryCommands.join("; ")}` : "");
      recordDebt(attempt, "release_unknown", attempt.terminalDetail);
      return;
    }
    attempt.terminalDecision = "not_needed";
    const cleanupDetail = receipt?.failedStage ? `start failed at ${receipt.failedStage}; nothing was created` : "start never created a resource";
    attempt.terminalDetail = attempt.terminalDetail ? `${attempt.terminalDetail} ${cleanupDetail}.` : cleanupDetail;
    return;
  }
  if (!attempt.output) {
    try {
      attempt.output = await readWorkerOutput(attempt.dispatchId ?? attempt.handle ?? "", { limit: 40 });
    } catch (err) {
      attempt.terminalDetail = `output read failed: ${String(err.message ?? err)}`;
    }
  }
  if (attempt.mode === "supervised" && !attempt.dispatchId) {
    attempt.terminalDecision = "release_unknown";
    attempt.terminalDetail = "worker-start receipt carried no dispatch id; ownership cannot be decided";
    recordDebt(attempt, "release_unknown", attempt.terminalDetail);
    return;
  }
  if (attempt.mode === "legacy") {
    if (attempt.adopted && !attempt.handle) {
      attempt.terminalDecision = "release_unknown";
      attempt.terminalDetail = "recovered legacy Dispatch has no terminal owned by this coordinator; provider session status is observational only";
      recordDebt(attempt, "release_unknown", attempt.terminalDetail);
      return;
    }
    if (attempt.dispatchId) {
      const receipt = await releaseWorker(attempt.dispatchId);
      if (receipt.state !== "retained" && receipt.state !== "released" && receipt.state !== "already_released") {
        attempt.terminalDetail = `tracking dispatch release reported ${receipt.state}` + (receipt.reason ? `: ${receipt.reason}` : "");
      }
    }
    if (opts.retainByTask?.[attempt.taskId] && attempt.handle) {
      try {
        const terminal = (await listTerminals()).find((row) => row.handle === attempt.handle && row.connected);
        attempt.terminalDecision = terminal ? "retained" : "not_needed";
        attempt.terminalDetail = terminal ? "Viewer-created legacy terminal kept open by request" : "Legacy terminal is no longer connected; no retained pane is confirmed";
      } catch (err) {
        attempt.terminalDecision = "release_unknown";
        attempt.terminalDetail = `Cannot verify the legacy terminal: ${String(err.message ?? err)}`;
        recordDebt(attempt, "release_unknown", attempt.terminalDetail);
      }
      return;
    }
    try {
      await closeTerminalStrict(attempt.handle);
      attempt.terminalDecision = "closed";
    } catch (err) {
      attempt.terminalDecision = "close_failed";
      attempt.terminalDetail = `terminal close refused: ${String(err.message ?? err)}`;
      recordDebt(attempt, "close_failed", attempt.terminalDetail);
    }
    return;
  }
  if (opts.retainByTask?.[attempt.taskId]) {
    const receipt = await retainWorker(attempt.dispatchId);
    if (receipt.state === "retained" && receipt.reason === "no_owned_resource") {
      attempt.terminalDecision = "not_needed";
      attempt.terminalDetail = "Orca reports no owned resource; no retained pane is confirmed";
    } else if (receipt.state === "retained") {
      attempt.terminalDecision = "retained";
      attempt.terminalDetail = receipt.warning ?? receipt.reason;
    } else if (receipt.state === "already_released" || receipt.state === "released") {
      attempt.terminalDecision = "released";
      attempt.terminalDetail = "The resource was already released; retain could not keep it open";
    } else {
      attempt.terminalDecision = "release_unknown";
      attempt.terminalDetail = `Retain returned ${receipt.state}: ${receipt.reason ?? "resource state unresolved"}`;
      recordDebt(attempt, "release_unknown", attempt.terminalDetail);
    }
    return;
  }
  const handle = attempt.agentTerminalHandle;
  const placementCurrent = (attempt.requested?.worktree ?? "current") === "current";
  const settledLocal = !attempt.requested?.on;
  if (handle && placementCurrent && settledLocal && attempt.harness !== "opencode" && !isNativeFreshPreset(attempt.harness)) {
    const candidate = readyTasks.find((t) => {
      if (state.attempts.has(t.id)) return false;
      if (state.delegatedTaskIds.has(t.id)) return false;
      const harness = opts.harnessByTask[t.id] || opts.defaultHarness;
      if (harness !== attempt.harness) return false;
      if (opts.modelByTask[t.id]) return false;
      if (opts.environmentByTask?.[t.id]) return false;
      if (laneOfTask(t.id, opts.laneByTask)) return false;
      if (state.integrationParked.has(t.id)) return false;
      const candidatePlacement = opts.placementByTask?.[t.id] ?? { kind: "current" };
      if (candidatePlacement.kind !== "current") return false;
      return true;
    });
    const exact = candidate ? await refreshAttemptDispatchDetail(attempt, state.runId) : null;
    const terminal = exact?.terminal;
    const autoReleaseAtMs = exact?.autoReleaseAt ? Date.parse(exact.autoReleaseAt) : NaN;
    const autoReleaseImminent = Number.isFinite(autoReleaseAtMs) && autoReleaseAtMs - Date.now() < 15e3;
    const reusable = !autoReleaseImminent && exact?.observation?.exactWorker === true && exact.observation.status === "live" && terminal?.handle === handle && terminal.connected === true && terminal.orphaned === false && terminal.worktreePath === getOrcaRuntime().workspace.dir && terminal.agentIdentity === attempt.harness;
    if (candidate && reusable) {
      const next = reserveAttempt(candidate, attempt.harness);
      next.reuseOf = attempt.dispatchId;
      next.agentTerminalHandle = handle;
      state.attempts.set(candidate.id, next);
      const startResult = await startOne(candidate, next, opts, state.runId, null, handle);
      if (startResult.kind === "unknown" || startResult.kind === "failed") {
        attempt.terminalDecision = "release_unknown";
        attempt.terminalDetail = `reuse start ${startResult.kind === "unknown" ? "outcome is unknown" : `created Dispatch ${startResult.dispatchId} before failing`} \u2014 the terminal may belong to the new Dispatch; resolve manually`;
        recordDebt(attempt, "release_unknown", attempt.terminalDetail);
      } else if (startResult.kind === "started") {
        attempt.terminalDecision = "reused";
        attempt.terminalDetail = `terminal transferred to dispatch ${next.dispatchId ?? "?"} (task ${candidate.id}) before delivery ack`;
      } else {
        applyReleaseReceipt(attempt, await performRelease(attempt));
      }
      return;
    }
  }
  applyReleaseReceipt(attempt, await performRelease(attempt));
}
async function performRelease(attempt) {
  const argv2 = followableNextAction(attempt.nextAction);
  if (argv2 && argv2[1] === "worker-release" && argv2.includes("--dispatch")) {
    try {
      const result = await runNextAction(argv2);
      if (result && typeof result === "object") {
        return normalizeTerminalReceipt(result, attempt.releaseRequestId);
      }
    } catch {
    }
  }
  if (!attempt.dispatchId) {
    return {
      dispatchId: "",
      state: "release_unknown",
      reason: "no dispatch id to release",
      processAction: null,
      warning: null,
      archive: null,
      requestId: attempt.releaseRequestId
    };
  }
  if (!attempt.releaseRequestId) attempt.releaseRequestId = newRequestId();
  await noteRequest({
    requestId: attempt.releaseRequestId,
    operation: "worker-release",
    runId: state.runId,
    taskId: attempt.taskId,
    dispatchId: attempt.dispatchId
  });
  const receipt = await releaseWorker(attempt.dispatchId, {
    retryRequestId: attempt.releaseRequestId
  });
  attempt.releaseRequestId = receipt.requestId ?? attempt.releaseRequestId;
  await noteRequest({
    requestId: attempt.releaseRequestId,
    operation: "worker-release",
    runId: state.runId,
    taskId: attempt.taskId,
    dispatchId: attempt.dispatchId,
    settledLocally: receipt.state !== "release_unknown",
    note: `viewer-observed terminal state: ${receipt.state}`
  });
  return receipt;
}
function applyReleaseReceipt(attempt, receipt) {
  attempt.terminalArchive = archiveSummary(receipt.archive) ?? attempt.terminalArchive;
  switch (receipt.state) {
    case "released":
    case "already_released":
      attempt.terminalDecision = "released";
      attempt.terminalDetail = null;
      clearAttemptDebt(attempt);
      break;
    case "retained":
      attempt.terminalDecision = receipt.reason === "no_owned_resource" ? "not_needed" : "retained";
      attempt.terminalDetail = receipt.reason === "no_owned_resource" ? "Orca reports no owned resource; no retained pane is confirmed" : receipt.reason;
      clearAttemptDebt(attempt);
      break;
    case "release_pending":
      attempt.terminalDecision = "release_pending";
      attempt.terminalDetail = receipt.reason;
      break;
    case "release_unknown":
    default:
      attempt.terminalDecision = "release_unknown";
      attempt.terminalDetail = receipt.reason;
      recordDebt(attempt, "release_unknown", receipt.reason);
      break;
  }
}
function findProvenReuseTransferRecipient(attempt, donorRow, runId, workerRows) {
  if (!attempt.settled || !attempt.dispatchId || attempt.terminalDecision !== "release_unknown" || !attempt.terminalDetail?.startsWith("reuse start ")) {
    return null;
  }
  if (!donorRow || donorRow.runId !== runId || donorRow.dispatchId !== attempt.dispatchId) {
    return null;
  }
  if (donorRow.resource?.ownerDispatchId === attempt.dispatchId) {
    return null;
  }
  const donorResourceState = donorRow.resource?.ownershipState ?? null;
  const donorNoLongerOwns = donorResourceState === "absent" || donorRow.terminalState === "released" && (donorResourceState === null || donorResourceState === "absent" || donorResourceState === "released");
  if (!donorNoLongerOwns) return null;
  const donorHandle = attempt.agentTerminalHandle ?? donorRow.agentTerminalHandle ?? null;
  for (const candidate of workerRows) {
    if (candidate.runId !== runId || candidate.dispatchId === attempt.dispatchId) continue;
    const res = candidate.resource;
    if (!res) continue;
    if (res.originDispatchId !== attempt.dispatchId) continue;
    if (!res.ownerDispatchId || res.ownerDispatchId === attempt.dispatchId) continue;
    const candidateHandle = res.terminalHandle ?? candidate.agentTerminalHandle ?? null;
    if (donorHandle && candidateHandle !== donorHandle) continue;
    return candidate;
  }
  return null;
}
function clearAttemptDebt(attempt) {
  state.cleanupDebt = state.cleanupDebt.filter((d) => d.dispatchId !== attempt.dispatchId);
}
function recordDebt(attempt, kind, detail) {
  const key = `${kind}:${attempt.dispatchId ?? attempt.handle}`;
  state.cleanupDebt = [
    ...state.cleanupDebt.filter((d) => d.key !== key),
    {
      key,
      kind,
      dispatchId: attempt.dispatchId,
      handle: attempt.handle,
      detail
    }
  ];
}
async function evaluateCompletionBoundary(tasks, gates) {
  const runId = state.runId;
  const unsettled = [
    ...[...state.attempts.values()].filter((a) => !a.settled),
    ...[...state.retryCandidates.values()].map((reservation) => reservation.attempt).filter((a) => !a.settled)
  ];
  const undecided = [...state.attempts.values()].filter(
    (a) => a.settled && !["released", "retained", "closed", "not_needed", "reused"].includes(a.terminalDecision)
  );
  const parked = new Set(
    [...state.attempts.values()].filter((a) => a.settledVia === "start_failed").map((a) => a.taskId)
  );
  const pendingGateTaskIds = /* @__PURE__ */ new Set();
  let hasPendingGates = false;
  for (const gate of gates) {
    if (gate.status !== "pending") continue;
    hasPendingGates = true;
    if (gate.taskId) pendingGateTaskIds.add(gate.taskId);
  }
  const readyOrDispatched = tasks.filter(
    (t) => (t.status === "dispatched" || t.status === "ready" && !pendingGateTaskIds.has(t.id)) && !parked.has(t.id) && // A join parked behind its integration gate is neither ready work nor
    // finished work — it is human-owed work, handled by its own clause below.
    !state.integrationParked.has(t.id)
  );
  if ([...state.guidanceSends.values()].some((row) => row.state === "prepared" || row.state === "unknown")) {
    state.phase = "awaiting_input";
    return;
  }
  if (state.unknownStartRequests.size || state.resumeHolds.size) {
    state.phase = "awaiting_input";
    return;
  }
  if (state.inbox.length > 0 || state.pendingDeliveryId || state.mailboxNeedsDrain || [...state.mailboxChecks.values()].some((row) => row.state !== "completed")) {
    state.phase = "awaiting_input";
    return;
  }
  if (state.delegatedDispatchIds.size > 0) {
    state.phase = unsettled.length > 0 ? "running" : "awaiting_input";
    return;
  }
  let reclaimableRows = null;
  if (state.cleanupDebt.some((debt) => debt.kind === "reclaimable")) {
    try {
      reclaimableRows = await listCompleteWorkers(runId, { terminalState: "reclaimable", includeRemote: true });
      const reclaimableIds = new Set(reclaimableRows.map((row) => row.dispatchId));
      state.cleanupDebt = state.cleanupDebt.filter(
        (debt) => debt.kind !== "reclaimable" || debt.dispatchId !== null && reclaimableIds.has(debt.dispatchId)
      );
      if (reclaimableRows.length > 0) {
        state.phase = "awaiting_input";
        state.cleanupDebt = [
          ...state.cleanupDebt,
          ...reclaimableRows.filter((row) => !state.cleanupDebt.some((debt) => debt.dispatchId === row.dispatchId)).map((row) => ({
            key: `reclaimable:${row.dispatchId}`,
            kind: "reclaimable",
            dispatchId: row.dispatchId,
            handle: null,
            detail: `worker-list still reports reclaimable (state: ${row.terminalState})`
          }))
        ];
        return;
      }
    } catch (err) {
      state.error = `reclaimable worker check failed: ${String(err.message ?? err)}`;
      state.phase = "awaiting_input";
      return;
    }
  }
  if (state.cleanupDebt.length > 0 || undecided.length > 0) {
    state.phase = "awaiting_input";
    return;
  }
  if (parked.size > 0) {
    state.phase = "awaiting_input";
    return;
  }
  if (state.stageGit && (state.stageGitErrors.size > 0 || tasks.some((task) => task.status === "completed" && !state.stageGit.artifact(task.id)))) {
    state.phase = "awaiting_input";
    return;
  }
  if (readyOrDispatched.length > 0 || unsettled.length > 0 || state.unownedDispatches.length > 0) {
    state.phase = "running";
    return;
  }
  if (state.integrationParked.size > 0) {
    state.phase = "awaiting_input";
    return;
  }
  if (hasPendingGates) {
    state.phase = "awaiting_input";
    return;
  }
  try {
    const reclaimable = reclaimableRows ?? await listCompleteWorkers(runId, { terminalState: "reclaimable", includeRemote: true });
    const reclaimableIds = new Set(reclaimable.map((r) => r.dispatchId));
    state.cleanupDebt = state.cleanupDebt.filter(
      (d) => d.kind !== "reclaimable" || d.dispatchId !== null && reclaimableIds.has(d.dispatchId)
    );
    if (reclaimable.length > 0) {
      state.phase = "awaiting_input";
      state.cleanupDebt = [
        ...state.cleanupDebt,
        ...reclaimable.filter((r) => !state.cleanupDebt.some((d) => d.dispatchId === r.dispatchId)).map((r) => ({
          key: `reclaimable:${r.dispatchId}`,
          kind: "reclaimable",
          dispatchId: r.dispatchId,
          handle: null,
          detail: `worker-list still reports reclaimable (state: ${r.terminalState})`
        }))
      ];
      return;
    }
  } catch (err) {
    state.error = `reclaimable worker check failed: ${String(err.message ?? err)}`;
    state.phase = "awaiting_input";
    return;
  }
  if (state.queuedDelivery) {
    state.phase = "running";
    return;
  }
  state.phase = "completed";
  state.completedAt = Date.now();
  state.running = false;
  const coordinator = state.coordinatorHandle;
  state.coordinatorHandle = null;
  if (coordinator) {
    try {
      await closeTerminalStrict(coordinator);
    } catch (err) {
      state.cleanupDebt = [
        ...state.cleanupDebt,
        {
          key: `coordinator-close:${coordinator}`,
          kind: "coordinator_close_failed",
          dispatchId: null,
          handle: coordinator,
          detail: String(err.message ?? err)
        }
      ];
    }
  }
}
async function startOne(task, attempt, opts, runId, retryOf = null, reuseTerminal) {
  const from = state.coordinatorHandle;
  const startGeneration = coordinatorLoopGeneration;
  const isCurrent = () => state.running && state.runId === runId && state.coordinatorHandle === from && coordinatorLoopGeneration === startGeneration;
  const startRequestId = newRequestId();
  attempt.startRequestId = startRequestId;
  attempt.retriedFrom = retryOf;
  await noteRequest({
    requestId: startRequestId,
    operation: "worker-start",
    runId,
    taskId: task.id,
    dispatchId: null
  });
  if (!isCurrent()) {
    attempt.startRequestId = null;
    await noteRequest({
      requestId: startRequestId,
      operation: "worker-start",
      runId,
      taskId: task.id,
      dispatchId: null,
      settledLocally: true,
      note: "not issued because the coordinator stopped before worker-start"
    });
    const error = new OrcaCliError("Coordinator stopped before worker-start was issued.", "not_running");
    return { kind: "rejected", dispatchId: null, requestId: startRequestId, code: error.code, receipt: null, error };
  }
  const environment = opts.environmentByTask?.[task.id] ?? null;
  const laneId = laneOfTask(task.id, opts.laneByTask);
  const lane = laneId ? state.lanes.get(laneId) ?? null : null;
  const placement = lane ? lane.seed : opts.placementByTask?.[task.id] ?? { kind: "current" };
  const customCommand = !KNOWN_HARNESSES.has(attempt.harness);
  const model = opts.modelByTask[task.id] ?? null;
  attempt.requested = {
    agent: attempt.harness,
    model,
    effort: model || isNativeFreshPreset(attempt.harness) ? opts.effortByTask?.[task.id] ?? null : null,
    worktree: lane?.selector ?? (placement.kind === "existing" ? placement.selector : placement.kind === "new-child" ? "new-child" : placement.kind === "new-top-level" ? "new-top-level" : "current"),
    terminal: reuseTerminal ?? null,
    on: environment
  };
  try {
    if (isUnverifiedHarness(attempt.harness)) {
      throw new OrcaCliError(
        `"${attempt.harness}" is an unverified harness and cannot be launched by Orca viewer.`,
        "unverified_harness"
      );
    }
    await assertNativePresetSupport(attempt.harness, {
      model,
      effort: opts.effortByTask?.[task.id],
      environment,
      lane: laneId,
      placement,
      terminal: reuseTerminal
    });
    const preparations = await state.providerSessionStore?.listOpenCodeLaunches(runId) ?? [];
    if (preparations.some((row) => row.taskId === task.id && ["prepared", "bound"].includes(row.state))) {
      throw new OrcaCliError("This Task has an unresolved OpenCode TUI preparation; inspect it before any replacement", "start_unknown");
    }
    let nativeOpenCode = false;
    let nativeOpenCodeModel = false;
    const ui = attempt.harness === "opencode" ? validateOpenCodeUi(opts.openCodeUiByTask?.[task.id] ?? opts.defaultOpenCodeUi ?? "auto") : "auto";
    attempt.openCodeUiRequested = attempt.harness === "opencode" ? ui : null;
    if (attempt.harness === "opencode") {
      assertOpenCodeUiPlacement(ui, environment, laneId, placement);
      if (ui !== "auto" && reuseTerminal) throw new OrcaCliError("Explicit OpenCode UI cannot reuse a generic terminal", "invalid_placement");
    }
    const explicitOpenCode = attempt.harness === "opencode" && ui !== "auto";
    const apiRequested = explicitOpenCode || attempt.harness === "opencode" && Boolean(model) && process.env.ORCA_DAG_OPENCODE_TUI === "1";
    const runtimeStatus = attempt.harness === "opencode" && (!model || apiRequested || !!model && !model.includes("#") && !attempt.requested.effort && !environment && !laneId && !reuseTerminal && process.platform !== "win32" && (placement.kind === "current" || placement.kind === "existing")) ? await runOrca(["status"]) : null;
    const openCodeRoute = attempt.harness === "opencode" ? resolveOpenCodeRoute({
      ui,
      model,
      effort: attempt.requested.effort,
      environment,
      lane: Boolean(laneId),
      placement,
      reuseTerminal: reuseTerminal ?? null,
      platform: process.platform,
      runtimeVersion: runtimeStatus?.runtime?.appVersion ?? null,
      nativeDefaultVersion: MIN_NATIVE_OPENCODE_VERSION,
      nativeModelVersion: MIN_NATIVE_OPENCODE_MODEL_VERSION,
      capabilities: runtimeStatus?.runtime?.capabilities ?? [],
      tuiOptIn: process.env.ORCA_DAG_OPENCODE_TUI === "1"
    }) : null;
    const apiOpenCode = openCodeRoute?.route === "api-mini" || openCodeRoute?.route === "api-tui";
    nativeOpenCode = openCodeRoute?.route === "native-default" || openCodeRoute?.route === "api-mini" || openCodeRoute?.route === "api-tui";
    nativeOpenCodeModel = openCodeRoute?.route === "native-model";
    attempt.openCodeTui = openCodeRoute?.route === "api-mini" || openCodeRoute?.route === "api-tui";
    if (openCodeRoute?.route === "unsupported") {
      throw new OrcaCliError(openCodeRoute.reason, apiOpenCode ? "execution_disabled" : "invalid_placement");
    }
    if (laneId && !lane) {
      throw new OrcaCliError(
        `Cannot start task ${task.id}: laneByTask assigns it to lane "${laneId}", which has no worktreeLanes entry in this coordinator's plan.`,
        "unknown_lane"
      );
    }
    if (state.integrationParked.has(task.id)) {
      throw new OrcaCliError(
        `Cannot start task ${task.id}: its cross-lane integration gate is not resolved "${INTEGRATION_RESOLUTION}" yet. Integrate the lane workspaces and resolve the gate first.`,
        "integration_gate_pending"
      );
    }
    if (lane && (attempt.harness === "opencode" && !nativeOpenCode || customCommand)) {
      throw new OrcaCliError(
        `Cannot start task ${task.id} in lane "${laneId}": the ${attempt.harness} harness runs through the viewer's local legacy path and cannot honor non-current placement. Pick a supervised harness (claude/codex/\u2026) for lane nodes.`,
        "lane_legacy_unsupported"
      );
    }
    if (lane && environment && placement.kind === "new-child" && (!placement.repo || !placement.name)) {
      throw new OrcaCliError(
        `Cannot start task ${task.id} in lane "${laneId}" on environment "${environment}": remote new-child placement requires an exact repo selector and explicit name.`,
        "invalid_placement"
      );
    }
    let wt = {};
    if (lane) {
      if (lane.selector) {
        wt = { worktree: lane.selector };
      } else if (placement.kind === "existing") {
        let row = null;
        try {
          row = await showWorktree(placement.selector);
        } catch (err) {
          throw new OrcaCliError(
            `Cannot start task ${task.id} in lane "${laneId}": the workspace selector could not be verified (${String(err.message ?? err)}). Refusing to start without positive identity.`,
            "workspace_unverifiable"
          );
        }
        if (!row) {
          throw new OrcaCliError(
            `Cannot start task ${task.id} in lane "${laneId}": Orca reports no workspace for selector "${placement.selector}". Recover the workspace or re-point the lane; this viewer never substitutes a different one.`,
            "workspace_not_found"
          );
        }
        adoptLaneSelector(lane, row.id, "worktree_show", {
          worktreeId: row.id,
          path: row.path,
          branch: row.branch
        });
        wt = { worktree: row.id };
      } else {
        if (lane.identityMissing) {
          throw new OrcaCliError(
            `Cannot start task ${task.id} in lane "${laneId}": the lane's workspace identity is unverifiable \u2014 Orca evidence names no exact workspace for this lane's earlier creation. Recover the workspace through Orca first; this viewer never creates a replacement.`,
            "lane_identity_unverifiable"
          );
        }
        await discoverLaneIdentity(opts, lane);
        if (lane.selector) wt = { worktree: lane.selector };
      }
    }
    if (!wt.worktree && placement.kind === "existing") {
      wt = { worktree: placement.selector };
    } else if (!wt.worktree && placement.kind === "new-child") {
      wt = {
        worktree: "new-child",
        repo: placement.repo,
        // A lane derives its deterministic fallback name from the LANE id so
        // every creation attempt for the lane targets the same identity;
        // direct placements keep the adapter's task-derived default.
        name: placement.name ?? (lane ? deriveWorktreeName(opts.runId, laneId) : void 0),
        baseBranch: placement.baseBranch,
        displayName: placement.displayName,
        comment: placement.comment,
        setup: placement.setup
      };
    } else if (!wt.worktree && placement.kind === "new-top-level") {
      wt = {
        worktree: "new-top-level",
        repo: placement.repo,
        name: placement.name ?? (lane ? deriveWorktreeName(opts.runId, laneId) : void 0),
        baseBranch: placement.baseBranch,
        displayName: placement.displayName,
        comment: placement.comment,
        setup: placement.setup
      };
    }
    if (state.stageGit) {
      if (wt.worktree === "new-child" || wt.worktree === "new-top-level") {
        wt.baseBranch = state.stageGit.base;
      }
      const target = await stageStartPath(wt.worktree);
      const prep = task.spec?.includes(MERGE_PREP_MARKER) ?? false;
      if (prep) state.stageGit.mergeInputs(task);
      if (target) {
        if (prep) await state.stageGit.verifyRepository(target);
        else if (taskDeps(task).length) await state.stageGit.verifyDependencies(task, target);
        else await state.stageGit.verifyBase(target);
      }
    }
    attempt.requested = { ...attempt.requested, worktree: wt.worktree ?? "current" };
    if (environment) {
      let caps = null;
      try {
        caps = parsePeerCapabilities((await showEnvironment(environment))?.capabilities ?? null);
      } catch (err) {
        throw new OrcaCliError(
          `Cannot start task ${task.id} on environment "${environment}": the environment could not be inspected (${String(err.message ?? err)}). Capabilities are unproven \u2014 no local fallback is attempted.`,
          "environment_unavailable"
        );
      }
      if (!caps) {
        throw new OrcaCliError(
          `Cannot start task ${task.id} on environment "${environment}": the environment is not saved on this server. Re-discover it (orca environment list) or clear the node's environment.`,
          "environment_unknown"
        );
      }
      if (!caps.modelEffort && model) {
        throw new OrcaCliError(
          `Cannot start task ${task.id} on environment "${environment}": the peer does not advertise the model/effort capability (advertised: ${caps.raw?.join(", ") || "nothing"}). Remove the model/effort override for this node or update the remote Orca.`,
          "capability_not_advertised"
        );
      }
    }
    let started;
    if (!isCurrent()) {
      throw new OrcaCliError("Coordinator stopped before worker-start was issued.", "not_running");
    }
    if (customCommand) {
      if (environment) {
        throw new OrcaCliError(
          `Cannot start task ${task.id} on environment "${environment}": custom commands run through the viewer's local legacy path and cannot honor remote placement.`,
          "remote_legacy_unsupported"
        );
      }
      if (!isCurrent()) {
        throw new OrcaCliError("Coordinator stopped before the legacy worker could start.", "not_running");
      }
      started = await startLegacyWorker({
        taskId: task.id,
        harness: attempt.harness,
        runId,
        from,
        worktree: opts.worktree,
        model,
        keepOpen: opts.retainByTask?.[task.id] === true,
        onHandle: (handle) => {
          attempt.handle = handle;
        }
      });
    } else if (apiOpenCode) {
      const start = explicitOpenCode ? (args) => startOpenCodeInteractiveWorker({ ...args, frontend: ui === "mini" ? "mini" : "tui" }) : startOpenCodeTuiWorker;
      started = await start({
        taskId: task.id,
        runId,
        from,
        worktree: wt.worktree ?? opts.worktree,
        model,
        effort: attempt.requested.effort,
        keepOpen: opts.retainByTask?.[task.id] === true,
        retryRequestId: startRequestId,
        retryOf: retryOf ?? void 0,
        onHandle: (handle) => {
          attempt.handle = handle;
        },
        isCancelled: () => !isCurrent()
      });
      attempt.requested = { ...attempt.requested, terminal: started.handle };
      attempt.openCodeUiLaunched = started.openCodeLaunch?.frontend ?? null;
    } else if (attempt.harness === "opencode" && openCodeRoute?.route === "cli-run") {
      if (environment) {
        throw new OrcaCliError(
          `Cannot start task ${task.id} on environment "${environment}": the ${attempt.harness} harness runs through the viewer's local legacy path and cannot honor remote placement. Pick a supervised harness (claude/codex/\u2026) for remote nodes.`,
          "remote_legacy_unsupported"
        );
      }
      if (!isCurrent()) {
        throw new OrcaCliError("Coordinator stopped before the legacy worker could start.", "not_running");
      }
      started = await startLegacyWorker({
        taskId: task.id,
        harness: attempt.harness,
        runId,
        from,
        worktree: opts.worktree,
        model,
        effort: attempt.requested.effort ?? void 0,
        keepOpen: opts.retainByTask?.[task.id] === true,
        // Record the terminal the moment it exists so a later failed step can
        // still close the pane we provably created (no orphaned resources).
        onHandle: (handle) => {
          attempt.handle = handle;
        }
      });
    } else {
      let codexStartupTerminal = null;
      const creatingLocalCodex = attempt.harness === "codex" && !environment && !reuseTerminal && process.platform !== "win32" && (wt.worktree === "new-child" || wt.worktree === "new-top-level");
      const nativeFreshCodex = creatingLocalCodex && process.platform === "linux" && await canUseNativeCodexFreshWorktree();
      if (creatingLocalCodex && !nativeFreshCodex) {
        const created = await createLocalCodexWorktree({
          kind: wt.worktree,
          name: wt.name ?? deriveWorktreeName(runId, laneId ?? task.id),
          repo: wt.repo,
          parentWorktree: opts.worktree,
          baseBranch: wt.baseBranch,
          displayName: wt.displayName,
          comment: wt.comment,
          setup: wt.setup
        });
        codexStartupTerminal = created.terminal;
        attempt.handle = created.terminal;
        if (state.stageGit) await state.stageGit.verifyBase(created.path);
        if (lane) adoptLaneSelector(lane, created.selector, "worktree_show", { path: created.path });
        wt = { worktree: created.selector };
      }
      let preparedCodexHandle = null;
      const canPrepareCodex = attempt.harness === "codex" && !environment && !reuseTerminal && process.platform !== "win32" && wt.worktree !== "new-child" && wt.worktree !== "new-top-level";
      let nativeCodex = nativeFreshCodex;
      if (canPrepareCodex && !creatingLocalCodex) {
        const status = await runOrca(["status"]);
        const version = status.runtime?.appVersion;
        nativeCodex = typeof version === "string" && /^\d+\.\d+\.\d+$/.test(version) && compareVersions(version, MIN_NATIVE_CODEX_VERSION) >= 0;
      }
      if (canPrepareCodex && !nativeCodex) {
        preparedCodexHandle = await prepareCodexTerminal({
          worktree: wt.worktree ?? "current",
          model: model ?? void 0,
          effort: attempt.requested.effort ?? void 0,
          terminal: codexStartupTerminal ?? void 0,
          onHandle: (handle) => {
            attempt.handle = handle;
          }
        });
        attempt.requested = { ...attempt.requested, terminal: preparedCodexHandle };
      }
      if (!isCurrent()) {
        throw new OrcaCliError("Coordinator stopped before worker-start was issued.", "not_running");
      }
      started = await startSupervisedWorker({
        taskId: task.id,
        keepOpen: opts.retainByTask?.[task.id] === true,
        agent: nativeOpenCode ? "opencode2" : attempt.harness,
        runId,
        from,
        // Exact placement (lane-recovered selector, existing selector, or a
        // creation mode with its creation fields) rides to the adapter,
        // which re-validates the remote current/new-child refusal as the
        // last gate before the CLI.
        worktree: wt.worktree,
        repo: wt.repo,
        name: wt.name,
        baseBranch: wt.baseBranch,
        displayName: wt.displayName,
        comment: wt.comment,
        setup: wt.setup,
        on: environment ?? void 0,
        model: preparedCodexHandle ? void 0 : model ?? void 0,
        // Phase 5: per-task effort (model-gated) and terminal reuse are
        // mutually exclusive by the CLI's own contract — the adapter
        // refuses the combination, and the reuse candidate filter above
        // already excludes model-carrying follow-ups.
        effort: preparedCodexHandle ? void 0 : attempt.requested.effort ?? void 0,
        terminal: reuseTerminal ?? preparedCodexHandle ?? void 0,
        retryRequestId: startRequestId,
        retryOf: retryOf ?? void 0
      });
    }
    attempt.mode = started.mode;
    if (attempt.harness === "opencode" && !apiOpenCode && started.dispatchId) {
      attempt.openCodeUiLaunched = nativeOpenCode || nativeOpenCodeModel ? "native" : "oneshot";
    }
    if (started.dispatchId) {
      bindAttemptDispatch(attempt, started.dispatchId);
      state.ownedDispatchIds.add(started.dispatchId);
    }
    attempt.handle = started.handle ?? attempt.handle;
    if (started.sessionBindingWarning && isCurrent()) state.error = started.sessionBindingWarning;
    const successReceipt = started.receipt ? { ...started.receipt, requestId: started.receipt.requestId ?? startRequestId } : null;
    if (successReceipt) {
      if (successReceipt.launchMode !== void 0) attempt.launchMode = successReceipt.launchMode;
      attempt.startReceipts.push(successReceipt);
      if (successReceipt.keepOpen && successReceipt.keepOpen !== "retained") {
        attempt.terminalDetail = `Worker started; early keep-open: ${successReceipt.keepOpen}`;
      }
      if (attempt.startReceipts.length > START_RECEIPTS_MAX) {
        attempt.startReceipts = attempt.startReceipts.slice(-START_RECEIPTS_MAX);
      }
      const e = successReceipt.effective;
      attempt.effective = {
        agent: e.agent,
        model: e.model,
        effort: e.effort,
        worktree: e.worktree,
        terminal: e.terminal,
        on: e.on
      };
    }
    if (!started.dispatchId) {
      attempt.startRequestId = startRequestId;
      state.unknownStartRequests.set(startRequestId, task.id);
      await noteRequest({
        requestId: startRequestId,
        operation: "worker-start",
        runId,
        taskId: task.id,
        dispatchId: null,
        settledLocally: false,
        note: "worker-start returned without a Dispatch id \u2014 outcome unresolved; inspect with request-show"
      });
      if (isCurrent()) {
        state.recentMessages = [
          {
            id: `start_unknown:${attempt.taskId}:${Date.now()}`,
            type: "start_unknown \xB7 receipt retained, no auto-retry",
            from: "coordinator",
            subject: `worker-start for ${task.id} returned without a Dispatch id; inspect request ${startRequestId}`,
            createdAt: (/* @__PURE__ */ new Date()).toISOString()
          },
          ...state.recentMessages
        ].slice(0, RECENT_MESSAGES_MAX);
      }
      const error = new OrcaCliError(
        `worker-start for task ${task.id} returned without a Dispatch id; outcome is unresolved.`,
        RESPONSE_LOST
      );
      return {
        kind: "unknown",
        dispatchId: null,
        requestId: startRequestId,
        code: error.code,
        receipt: successReceipt,
        error
      };
    }
    const launchedAgent = attempt.effective?.agent ?? (reuseTerminal ? null : attempt.harness);
    const launchedModel = attempt.effective?.model ?? (reuseTerminal ? null : attempt.requested.model ?? null);
    const launchedEffort = attempt.effective?.effort ?? (reuseTerminal ? null : attempt.requested.effort ?? null);
    const initialWorktree = positiveSelector(attempt.effective?.worktree) ? attempt.effective.worktree : !reuseTerminal && positiveSelector(attempt.requested.worktree) ? attempt.requested.worktree : null;
    if (started.dispatchId && launchedAgent) {
      await recordLaunchEvidenceIfChanged({
        runId,
        taskId: task.id,
        dispatchId: started.dispatchId,
        harness: launchedAgent,
        model: launchedModel,
        effort: launchedEffort,
        worktree: initialWorktree,
        source: "viewer-launch"
      });
    }
    if (lane && isCurrent()) {
      const creationStart = wt.worktree === "new-child" || wt.worktree === "new-top-level";
      if (creationStart) lane.creationDispatchId = started.dispatchId ?? lane.creationDispatchId;
      const echo = successReceipt?.effective?.worktree ?? null;
      if (positiveSelector(echo)) {
        adoptLaneSelector(lane, echo, "worker_start_receipt");
      } else if (!lane.selector && lane.seed.kind !== "existing") {
        await discoverLaneIdentity(opts, lane);
        if (!lane.selector) {
          lane.identityMissing = true;
          lane.warnings.push(
            `creation dispatch ${started.dispatchId ?? "?"} landed without positive workspace identity \u2014 later lane tasks refuse to start until Orca evidence names the workspace`
          );
        }
      }
      if (lane.selector && positiveSelector(lane.selector) && started.dispatchId && launchedAgent && lane.selector !== initialWorktree) {
        await recordLaunchEvidenceIfChanged({
          runId,
          taskId: task.id,
          dispatchId: started.dispatchId,
          harness: launchedAgent,
          model: launchedModel,
          effort: launchedEffort,
          worktree: lane.selector,
          source: "viewer-launch"
        });
      }
    }
    attempt.startRequestId = null;
    await noteRequest({
      requestId: startRequestId,
      operation: "worker-start",
      runId,
      taskId: task.id,
      dispatchId: started.dispatchId,
      settledLocally: true,
      note: attempt.dispatchId ? `landed as dispatch ${attempt.dispatchId}` : "start outcome recorded without a dispatch id"
    });
    if (isCurrent() && attempt.dispatchId) {
      const taskSpec = typeof task.spec === "string" ? task.spec : "";
      await emitCoordinatorActivity({
        kind: "dispatch_started",
        runId,
        taskId: task.id,
        dispatchId: attempt.dispatchId,
        title: "Assigned this stage",
        summary: briefTaskSpec(taskSpec),
        detail: taskSpec
      });
    }
    if (started.dispatchId) await refreshAttemptDispatchDetail(attempt, runId);
    return {
      kind: "started",
      dispatchId: started.dispatchId,
      requestId: startRequestId,
      receipt: successReceipt
    };
  } catch (err) {
    const alreadyStartedReceipt = attempt.startReceipts.at(-1) ?? null;
    if (attempt.dispatchId && (alreadyStartedReceipt?.ok || attempt.mode === "legacy")) {
      attempt.startRequestId = null;
      await noteRequest({
        requestId: startRequestId,
        operation: "worker-start",
        runId,
        taskId: task.id,
        dispatchId: attempt.dispatchId,
        settledLocally: true,
        note: `landed as dispatch ${attempt.dispatchId}`
      });
      if (isCurrent()) {
        const taskSpec = typeof task.spec === "string" ? task.spec : "";
        await emitCoordinatorActivity({
          kind: "dispatch_started",
          runId,
          taskId: task.id,
          dispatchId: attempt.dispatchId,
          title: "Assigned this stage",
          summary: briefTaskSpec(taskSpec),
          detail: taskSpec
        });
      }
      return {
        kind: "started",
        dispatchId: attempt.dispatchId,
        requestId: startRequestId,
        receipt: alreadyStartedReceipt
      };
    }
    const startErr = err;
    let failureDetail = startErr.message ?? String(err);
    if (attempt.harness === "opencode" && startErr.code === "agent_unconfigured" && failureDetail.includes("Agent launcher opencode2 is disabled or unavailable")) {
      failureDetail += " In Orca Settings \u2192 Agents on the execution host, enable OpenCode 2, then Stop and Run again, or explicitly retry this task. An installed opencode2 command alone does not enable the Orca launcher. No automatic retry or replacement worker was started.";
    }
    const receipt = startErr.receipt ? { ...startErr.receipt, requestId: startErr.receipt.requestId ?? startRequestId } : null;
    if (receipt) {
      attempt.startReceipts.push(receipt);
      if (attempt.startReceipts.length > START_RECEIPTS_MAX) {
        attempt.startReceipts = attempt.startReceipts.slice(-START_RECEIPTS_MAX);
      }
      if (receipt.dispatchId && !attempt.dispatchId) bindAttemptDispatch(attempt, receipt.dispatchId);
    }
    const responseLost = receipt?.failedStage === "response_lost" || receipt?.status === "outcome_unknown" || receipt?.status === "start_unknown" || startErr.code === RESPONSE_LOST || startErr.code === "start_unknown";
    const dispatchId = attempt.dispatchId ?? receipt?.dispatchId ?? null;
    if (dispatchId) state.ownedDispatchIds.add(dispatchId);
    else if (responseLost) state.unknownStartRequests.set(startRequestId, task.id);
    if (dispatchId && attempt.dispatchId !== dispatchId) bindAttemptDispatch(attempt, dispatchId);
    const kind = responseLost ? "unknown" : dispatchId ? "failed" : "rejected";
    attempt.startRequestId = responseLost ? startRequestId : null;
    attempt.settled = !responseLost;
    attempt.outcome = responseLost ? null : "failed";
    attempt.settledVia = responseLost ? null : "start_failed";
    attempt.settledAt = responseLost ? null : Date.now();
    attempt.terminalDecision = "pending";
    attempt.terminalDetail = failureDetail;
    if (dispatchId) await refreshAttemptDispatchDetail(attempt, runId);
    await noteRequest({
      requestId: startRequestId,
      operation: "worker-start",
      runId,
      taskId: task.id,
      dispatchId,
      settledLocally: !responseLost,
      note: responseLost ? "response lost \u2014 outcome unresolved; inspect with request-show" : `failed before ready${receipt?.failedStage ? ` at ${receipt.failedStage}` : ""} \u2014 receipt retained`
    });
    if (attempt.handle && !responseLost && !dispatchId) {
      try {
        await closeTerminalStrict(attempt.handle);
        attempt.terminalDecision = "not_needed";
      } catch (closeErr) {
        attempt.terminalDecision = "close_failed";
        attempt.terminalDetail = `terminal close refused after failed start: ${String(
          closeErr.message ?? closeErr
        )}`;
        recordDebt(attempt, "close_failed", attempt.terminalDetail);
      }
    }
    if (isCurrent()) {
      state.recentMessages = [
        {
          id: `${kind}:${attempt.taskId}:${Date.now()}`,
          type: kind === "unknown" ? "start_unknown \xB7 receipt retained, no auto-retry" : "start_failed \xB7 receipt retained, no auto-retry",
          from: "coordinator",
          subject: failureDetail,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        },
        ...state.recentMessages
      ].slice(0, RECENT_MESSAGES_MAX);
    }
    if (!receipt && isCurrent()) {
      state.error = `Failed to start task ${task.id}: ${failureDetail}`;
    }
    const failure = {
      requestId: receipt?.requestId ?? startRequestId,
      code: startErr.code ?? null,
      receipt,
      error: err
    };
    if (kind === "unknown") return { kind, dispatchId, ...failure };
    if (kind === "failed") return { kind, dispatchId, ...failure };
    return { kind, dispatchId: null, ...failure };
  }
}
function retryReservationIsCurrent(reservation) {
  return state.running && state.runId === reservation.runId && state.coordinatorHandle === reservation.coordinatorHandle && coordinatorLoopGeneration === reservation.generation && state.attempts.get(reservation.original.taskId) === reservation.original && state.retryCandidates.get(reservation.original.taskId) === reservation;
}
function appendRetryDiagnostic(attempt, detail) {
  const combined = [attempt.terminalDetail, detail].filter(Boolean).join("\n");
  attempt.terminalDetail = combined.length <= 1200 ? combined : combined.slice(-1200);
}
function recordLateRetryOutcome(reservation, result) {
  if (result.kind === "rejected") return;
  const dispatchId = result.dispatchId;
  const stopConfirmed = dispatchId && state.lastStopReport?.results.some(
    (row) => row.target === dispatchId && row.result !== "unknown"
  );
  if (stopConfirmed) return;
  const key = `retry-stop-unknown:${reservation.runId}:${result.requestId}`;
  state.cleanupDebt = [
    ...state.cleanupDebt.filter((debt) => debt.key !== key),
    {
      key,
      kind: "stop_unknown",
      dispatchId,
      handle: reservation.attempt.handle,
      detail: dispatchId ? `Retry for stopped Run ${reservation.runId} returned Dispatch ${dispatchId} after Stop; inspect its ownership before acting.` : `Retry for stopped Run ${reservation.runId} has unresolved request ${result.requestId}; inspect with request-show before retrying.`
    }
  ];
}
async function retryWorker(idOrTask) {
  return withLifecycleMutation(() => retryWorkerLocked(idOrTask));
}
async function retryWorkerLocked(idOrTask) {
  if (!state.running || !state.coordinatorHandle || !state.opts || !state.runId) {
    throw new OrcaCliError(
      "Coordinator is not running \u2014 start the Run before retrying an attempt.",
      "not_running"
    );
  }
  const opts = state.opts;
  const runId = state.runId;
  await recoverNativeResumes(runId);
  const hold = [...state.resumeHolds.values()].find((row) => row.taskId === idOrTask || row.originalDispatchId === idOrTask || row.newDispatchId === idOrTask);
  if (hold) {
    throw new OrcaCliError(`Native resume ${hold.requestId} is unresolved; inspect the exact request before replacing this worker.`, "resume_unknown");
  }
  let attempt = [...state.attempts.values()].find(
    (a) => a.dispatchId === idOrTask || a.startReceipts.some((r) => r.dispatchId === idOrTask) || a.retriedFrom === idOrTask
  );
  if (!attempt && state.attempts.has(idOrTask)) attempt = state.attempts.get(idOrTask);
  if (!attempt) {
    throw new OrcaCliError(
      `No attempt matching ${idOrTask} in this coordinator's projection.`,
      "retry_target_not_found"
    );
  }
  if (isUnverifiedHarness(attempt.harness)) {
    throw new OrcaCliError(
      `"${attempt.harness}" is an unverified harness and cannot be launched by Orca viewer.`,
      "unverified_harness"
    );
  }
  if (state.retryCandidates.has(attempt.taskId)) {
    throw new OrcaCliError(
      `Refusing to retry ${attempt.taskId}: another retry request is already in progress.`,
      "retry_not_allowed"
    );
  }
  if (!attempt.settled || attempt.outcome !== "failed") {
    throw new OrcaCliError(
      `Refusing to retry ${attempt.taskId}: the attempt is not positively failed (settled=${attempt.settled}, outcome=${attempt.outcome ?? "none"}). Stop it explicitly first if it is still running.`,
      "retry_not_allowed"
    );
  }
  if (attempt.liveness === "unverifiable") {
    throw new OrcaCliError(
      `Refusing to retry ${attempt.taskId}: worker liveness is unverifiable. Resolve the worker's state through Orca first.`,
      "retry_not_allowed"
    );
  }
  if (state.cleanupDebt.some((d) => d.dispatchId && d.dispatchId === attempt.dispatchId)) {
    throw new OrcaCliError(
      `Refusing to retry ${attempt.taskId}: cleanup debt is open for its Dispatch. Resolve the terminal ownership (release/retain) first.`,
      "retry_not_allowed"
    );
  }
  const retryOf = attempt.dispatchId;
  const coordinatorHandle = state.coordinatorHandle;
  const candidate = reserveAttempt({ id: attempt.taskId }, attempt.harness);
  candidate.startReceipts = attempt.startReceipts.slice();
  candidate.retriedFrom = retryOf;
  const reservation = {
    original: attempt,
    attempt: candidate,
    runId,
    coordinatorHandle,
    generation: coordinatorLoopGeneration
  };
  state.retryCandidates.set(attempt.taskId, reservation);
  try {
    const exactDetail = await refreshAttemptDispatchDetail(attempt, runId);
    if (!retryReservationIsCurrent(reservation)) {
      throw new OrcaCliError("Coordinator stopped or changed while retry was being verified.", "not_running");
    }
    if (exactDetail?.dispatch?.status === "circuit_broken") {
      throw new OrcaCliError(
        `Refusing to retry ${attempt.taskId}: Orca reports Dispatch ${attempt.dispatchId} as circuit_broken.`,
        "task_not_startable"
      );
    }
    const rows = await listCompleteWorkers(runId, { includeRemote: true });
    if (!retryReservationIsCurrent(reservation)) {
      throw new OrcaCliError("Coordinator stopped or changed while retry was being verified.", "not_running");
    }
    const liveRow = rows.find(
      (r) => r.runId === runId && r.taskId === attempt.taskId && activeDispatch(r)
    );
    if (liveRow) {
      throw new OrcaCliError(
        `Refusing to retry ${attempt.taskId}: worker-list reports a live Dispatch (${liveRow.dispatchId}) for the task.`,
        "retry_not_allowed"
      );
    }
    const tasks = await listTasks(runId);
    if (!retryReservationIsCurrent(reservation)) {
      throw new OrcaCliError("Coordinator stopped or changed while retry was being verified.", "not_running");
    }
    const task = tasks.find((t) => t.id === attempt.taskId);
    if (!task) {
      throw new OrcaCliError(`Task ${attempt.taskId} no longer exists in Run ${runId}.`, "task_not_found");
    }
    if (task.status === "dispatched") {
      throw new OrcaCliError(
        `Refusing to retry ${attempt.taskId}: Orca reports the task as dispatched.`,
        "retry_not_allowed"
      );
    }
    if (taskDeps(task).some((id) => !tasks.some((dependency) => dependency.id === id && dependency.status === "completed"))) {
      throw new OrcaCliError(
        `Refusing to retry ${attempt.taskId}: its dependencies are not completed in Run ${runId}.`,
        "retry_not_allowed"
      );
    }
    const result = await startOne(task, candidate, opts, runId, retryOf);
    const current = retryReservationIsCurrent(reservation);
    if (!current) {
      recordLateRetryOutcome(reservation, result);
      throw new OrcaCliError(
        `Retry for ${attempt.taskId} returned after its Run stopped or changed; inspect the recorded request before acting.`,
        "not_running"
      );
    }
    if (result.kind === "rejected") {
      attempt.startReceipts = candidate.startReceipts.slice(-START_RECEIPTS_MAX);
      const code = result.code ?? "start_rejected";
      const message = result.error instanceof Error ? result.error.message : String(result.error);
      appendRetryDiagnostic(attempt, `Retry rejected (${code}): ${message}`);
      throw result.error;
    }
    state.attempts.set(attempt.taskId, candidate);
    if (result.kind === "failed" || result.kind === "unknown") throw result.error;
    return { taskId: attempt.taskId, dispatchId: result.dispatchId, retriedFrom: retryOf };
  } finally {
    if (state.retryCandidates.get(attempt.taskId) === reservation && !stopInFlight) {
      state.retryCandidates.delete(attempt.taskId);
    }
  }
}
function recordResumedWorker(runId, meta, started) {
  const receipt = started.receipt;
  if (!state.running && !stopInFlight || state.runId !== runId || !state.coordinatorHandle || started.mode !== "supervised" || started.adopted || !started.dispatchId || !receipt?.ok || receipt.status !== "ready" || receipt.raw.runId !== runId || receipt.taskId !== meta.taskId || receipt.dispatchId !== started.dispatchId) return;
  const attempt = reserveAttempt({ id: meta.taskId }, meta.harness);
  attempt.dispatchId = started.dispatchId;
  attempt.handle = started.handle;
  attempt.agentTerminalHandle = started.handle ?? meta.terminalId;
  attempt.retriedFrom = meta.retriedFrom;
  attempt.startReceipts.push(receipt);
  if (receipt.launchMode !== void 0) attempt.launchMode = receipt.launchMode;
  attempt.requested = {
    agent: meta.harness,
    model: null,
    effort: null,
    worktree: null,
    terminal: meta.terminalId,
    on: null
  };
  state.ownedDispatchIds.add(started.dispatchId);
  state.attempts.set(meta.taskId, attempt);
}

// server/src/activity.ts
import { appendFile as appendFile3, readFile as readFile3, stat as stat3, writeFile as writeFile3 } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { join as join3 } from "node:path";
var ACTIVITY_FILE = WORKSPACE_STATE_FILES.activity;
var JOURNAL_MAX_BYTES2 = 5 * 1024 * 1024;
var JOURNAL_KEEP_BYTES2 = 2 * 1024 * 1024;
var MAX_HISTORY_MESSAGES = 500;
function payloadOf(message) {
  if (!message.payload) return {};
  try {
    const parsed = JSON.parse(message.payload);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}
function taskLabel(task, taskId) {
  return task?.display_name?.trim() || task?.task_title?.trim() || (taskId ? taskId : "Worker");
}
function meaningfulSubject(subject) {
  const normalized = subject.trim().toLowerCase();
  return Boolean(normalized) && !["alive", "question", "status", "heartbeat"].includes(normalized);
}
function firstSentence(body) {
  const normalized = body.replace(/\s+/g, " ").trim();
  if (!normalized) return "No additional detail was provided.";
  const match = normalized.match(/^.*?[.!?](?:\s|$)/);
  return (match?.[0] ?? normalized).trim();
}
function workerFor(workers, taskId, dispatchId, terminalHandle) {
  return workers.find(
    (worker) => dispatchId !== null && worker.dispatchId === dispatchId || dispatchId === null && taskId !== null && worker.taskId === taskId || dispatchId === null && taskId === null && worker.agentTerminalHandle === terminalHandle
  );
}
function normalizeMessage(message, taskMap, workers, leadTaskId, pendingIds, pendingStopIds) {
  const subject = typeof message.subject === "string" ? message.subject : "";
  const body = typeof message.body === "string" ? message.body : "";
  const messageType = typeof message.type === "string" ? message.type : "unknown";
  const terminalHandle = typeof message.from_handle === "string" ? message.from_handle : "unknown";
  const toHandle = typeof message.to_handle === "string" ? message.to_handle : "";
  const addressedDispatchId = toHandle.startsWith("dispatch:") ? toHandle.slice("dispatch:".length) || null : null;
  const audience = toHandle.startsWith("@") ? toHandle : null;
  const outbound = addressedDispatchId !== null || audience !== null;
  const createdAt = typeof message.created_at === "string" && !Number.isNaN(Date.parse(message.created_at)) ? message.created_at : (/* @__PURE__ */ new Date(0)).toISOString();
  const payload = payloadOf(message);
  const payloadTaskId = typeof payload.taskId === "string" ? payload.taskId : null;
  const payloadDispatchId = typeof payload.dispatchId === "string" ? payload.dispatchId : null;
  const resolvedDispatchId = payloadDispatchId ?? addressedDispatchId;
  const threadId = typeof message.thread_id === "string" && message.thread_id.trim() ? message.thread_id : null;
  const priority = typeof message.priority === "string" && message.priority.trim() ? message.priority.trim() : null;
  const read = message.read === 1 || message.read === true ? true : message.read === 0 || message.read === false ? false : null;
  const worker = workerFor(workers, payloadTaskId, resolvedDispatchId, terminalHandle);
  const dispatchTask = resolvedDispatchId ? [...taskMap.values()].find((candidate) => candidate.dispatch_id === resolvedDispatchId) : void 0;
  const taskId = payloadTaskId ?? worker?.taskId ?? dispatchTask?.id ?? null;
  const dispatchId = resolvedDispatchId ?? worker?.dispatchId ?? null;
  const task = taskId ? taskMap.get(taskId) : void 0;
  const harness = worker?.projection?.launch?.agent ?? worker?.projection?.provider?.id ?? worker?.launchEvidence?.agent ?? null;
  const model = worker?.projection?.launch?.model ?? worker?.projection?.provider?.model ?? worker?.launchEvidence?.model ?? null;
  const label = taskLabel(task, taskId);
  const rejected = Boolean(payload._orcaLifecycleRejection) || /^Rejected\s/i.test(subject);
  const eventId = typeof message.id === "string" && message.id ? message.id : `malformed:${createdAt}:${dispatchId ?? taskId ?? "unknown"}`;
  const base = {
    id: eventId,
    runId: message.run_id,
    taskId,
    dispatchId,
    threadId,
    priority,
    audience,
    read,
    direction: outbound ? "coordinator_to_agent" : "agent_to_coordinator",
    actor: outbound ? { role: "coordinator", label: "Coordinator", harness: null, model: null } : {
      role: taskId && taskId === leadTaskId ? "lead" : "worker",
      label,
      harness,
      model
    },
    createdAt,
    groupedCount: 1,
    technical: {
      messageId: typeof message.id === "string" ? message.id : void 0,
      terminalHandle,
      payload,
      provenance: "orca_message"
    }
  };
  if (rejected) {
    return {
      ...base,
      kind: "unknown",
      severity: "warning",
      title: "Orca rejected a stale lifecycle signal",
      summary: payload._orcaLifecycleRejection?.reason || firstSentence(body || subject),
      detail: body || null,
      actionable: null
    };
  }
  if (outbound) {
    if (messageType === "question") {
      return {
        ...base,
        kind: "question",
        severity: "warning",
        title: audience ? `Coordinator asked ${audience}` : "Coordinator asks",
        summary: body || subject || "The coordinator asked the worker a question.",
        detail: null,
        actionable: null
      };
    }
    if (messageType === "status") {
      const reply = /^Re:\s*/i.test(subject);
      return {
        ...base,
        kind: reply ? "reply" : "status",
        severity: "info",
        title: reply ? "Coordinator replied to a worker" : audience ? `Coordinator messaged ${audience}` : subject.trim().toLowerCase() === "coordinator guidance" ? "Coordinator sent guidance" : meaningfulSubject(subject) ? subject : "Coordinator sent guidance",
        summary: body || subject || "No additional detail was provided.",
        detail: null,
        actionable: null
      };
    }
    return {
      ...base,
      kind: "status",
      severity: "info",
      title: meaningfulSubject(subject) ? subject : "Coordinator sent a message",
      summary: body || subject || "No additional detail was provided.",
      detail: null,
      actionable: null
    };
  }
  switch (messageType) {
    case "heartbeat": {
      const phase = typeof payload.phase === "string" && payload.phase.trim() ? payload.phase.trim() : "working";
      return {
        ...base,
        kind: "heartbeat",
        severity: "info",
        title: `${label} is working`,
        summary: phase,
        detail: body || null,
        actionable: null
      };
    }
    case "status":
      return {
        ...base,
        kind: "status",
        severity: "info",
        title: meaningfulSubject(subject) ? subject : `${label} reported progress`,
        summary: firstSentence(body),
        detail: body || null,
        actionable: null
      };
    case "question":
      return {
        ...base,
        kind: "question",
        severity: "warning",
        title: `${label} asks`,
        summary: body || subject || "A worker is waiting for an answer.",
        detail: null,
        actionable: pendingIds.has(eventId) ? { kind: "reply", targetId: eventId } : null
      };
    case "escalation": {
      const stopEvent = typeof payload.dispatchId === "string" && isStopEventReason(payload.stopReason);
      const permissionPrompt = !stopEvent && dispatchId ? extractPermissionPrompt(payload) : null;
      return {
        ...base,
        kind: stopEvent ? "stop_event" : "escalation",
        severity: "error",
        title: stopEvent ? `${label} reported a stop event` : `${label} needs attention`,
        summary: firstSentence(body || subject),
        detail: body || null,
        actionable: stopEvent ? pendingStopIds.has(eventId) && dispatchId ? { kind: "acknowledge_stop", targetId: eventId } : null : pendingIds.has(eventId) ? { kind: "reply", targetId: eventId } : null,
        ...permissionPrompt ? { permissionPrompt } : {}
      };
    }
    case "worker_done": {
      const succeeded = payload.outcome === "succeeded";
      const failed = payload.outcome === "failed";
      return {
        ...base,
        kind: "worker_done",
        severity: succeeded ? "success" : failed ? "error" : "warning",
        title: `${label} ${succeeded ? "completed" : failed ? "reported failure" : "reported an outcome"}`,
        summary: meaningfulSubject(subject) ? subject : firstSentence(body),
        detail: body || null,
        actionable: null
      };
    }
    case "decision_gate":
      return {
        ...base,
        kind: "gate",
        severity: "warning",
        title: `Decision needed for ${label}`,
        summary: body || subject,
        detail: null,
        actionable: null
      };
    default:
      return {
        ...base,
        kind: "unknown",
        severity: "info",
        title: meaningfulSubject(subject) ? subject : "Unrecognized orchestration event",
        summary: firstSentence(body),
        detail: body || null,
        actionable: null
      };
  }
}
function debtEvent(runId, debt, createdAt) {
  return {
    id: `debt:${debt.key}`,
    runId,
    taskId: null,
    dispatchId: debt.dispatchId,
    threadId: null,
    priority: null,
    audience: null,
    read: null,
    direction: "system",
    actor: { role: "system", label: "Orca", harness: null, model: null },
    kind: "cleanup_debt",
    severity: "warning",
    title: "Worker cleanup needs a decision",
    summary: debt.detail || debt.kind.replaceAll("_", " "),
    detail: null,
    createdAt,
    groupedCount: 1,
    actionable: debt.dispatchId ? { kind: "release", targetId: debt.dispatchId } : null,
    technical: { provenance: "coordinator" }
  };
}
function coalesceHeartbeats(events) {
  const result = [];
  for (const event of events) {
    const previous = result[result.length - 1];
    if (event.kind === "heartbeat" && previous?.kind === "heartbeat" && event.runId === previous.runId && event.dispatchId === previous.dispatchId && event.summary === previous.summary) {
      previous.groupedCount += event.groupedCount;
      previous.createdAt = event.createdAt;
      previous.id = event.id;
      continue;
    }
    result.push({ ...event });
  }
  return result;
}
function removeJournalMessageDuplicates(journal, normalized) {
  const durableOutgoing = normalized.filter(
    (event) => event.direction === "coordinator_to_agent" && event.technical.provenance === "orca_message"
  );
  return journal.filter((candidate) => {
    if (candidate.technical.provenance !== "viewer_journal" || candidate.direction !== "coordinator_to_agent" || candidate.kind !== "reply" && candidate.kind !== "status" && candidate.kind !== "question") {
      return true;
    }
    const candidateAt = Date.parse(candidate.createdAt);
    if (!Number.isFinite(candidateAt)) return true;
    if (candidate.audience !== null) {
      return !durableOutgoing.some((durable) => {
        const durableAt = Date.parse(durable.createdAt);
        return durable.audience === candidate.audience && durable.summary.trim() === candidate.summary.trim() && Number.isFinite(durableAt) && Math.abs(durableAt - candidateAt) <= 15e3;
      });
    }
    if (candidate.taskId === null || candidate.dispatchId === null) return true;
    return !durableOutgoing.some((durable) => {
      const durableAt = Date.parse(durable.createdAt);
      return durable.taskId === candidate.taskId && durable.dispatchId === candidate.dispatchId && durable.summary.trim() === candidate.summary.trim() && Number.isFinite(durableAt) && Math.abs(durableAt - candidateAt) <= 15e3;
    });
  });
}
function hydrateEvent(row) {
  return {
    ...row,
    threadId: typeof row.threadId === "string" && row.threadId.trim() ? row.threadId : null,
    priority: typeof row.priority === "string" && row.priority.trim() ? row.priority : null,
    // Journal rows written before Phase 6 lack the field; normalize to an
    // explicit "not a group message" rather than leaking undefined.
    audience: typeof row.audience === "string" && row.audience.trim() ? row.audience : null,
    read: typeof row.read === "boolean" ? row.read : null
  };
}
function messageWasRead(message) {
  return message.read === 1 || message.read === true;
}
function messageDispatchId(message, workers) {
  const payload = payloadOf(message);
  if (typeof payload.dispatchId === "string" && payload.dispatchId) return payload.dispatchId;
  const destination = typeof message.to_handle === "string" ? message.to_handle : "";
  if (destination.startsWith("dispatch:")) return destination.slice("dispatch:".length) || null;
  return workerFor(
    workers,
    typeof payload.taskId === "string" ? payload.taskId : null,
    null,
    typeof message.from_handle === "string" ? message.from_handle : ""
  )?.dispatchId ?? null;
}
function inferredAgentSummary(dispatchId, batch, workers, completion) {
  const worker = workers.find((candidate) => candidate.dispatchId === dispatchId);
  const last = batch.at(-1);
  const payload = last ? payloadOf(last) : {};
  const taskId = typeof payload.taskId === "string" && payload.taskId || worker?.taskId || null;
  if (!taskId) return null;
  const outcome = payload.outcome === "succeeded" || payload.outcome === "failed" ? payload.outcome : null;
  const verdict = worker?.projection?.liveness?.verdict;
  const liveness = completion && (verdict === "live" || verdict === "exited") ? verdict : "unverifiable";
  return {
    taskId,
    dispatchId,
    liveness,
    activity: completion ? "completion processed" : "coordinator replied",
    detail: completion ? "A settled worker record proves the completion batch was checked." : "A durable coordinator reply proves the preceding inbox batch was checked.",
    attention: completion ? ["root_completion"] : batch.some((message) => message.type === "question") ? ["input"] : [],
    agent: worker?.projection?.launch?.agent ?? worker?.projection?.provider?.id ?? worker?.launchEvidence?.agent ?? "unknown agent",
    model: worker?.projection?.launch?.model ?? worker?.projection?.provider?.model ?? worker?.launchEvidence?.model ?? null,
    effort: worker?.projection?.launch?.effort ?? worker?.launchEvidence?.effort ?? null,
    outcome,
    observedAt: null
  };
}
function inferExternalCoordinatorChecks(runId, messages, workers) {
  const scopedWorkers = workers.filter((worker) => worker.runId === runId);
  const pendingByDispatch = /* @__PURE__ */ new Map();
  const inferred = [];
  const sorted = messages.filter((message) => message.run_id === runId).sort((a, b) => a.created_at.localeCompare(b.created_at));
  const append = (dispatchId, batch, checkedAt, boundaryId, completion) => {
    if (batch.length === 0 || !Number.isFinite(checkedAt)) return;
    const agent = inferredAgentSummary(dispatchId, batch, scopedWorkers, completion);
    const types = [...new Set(batch.map((message) => message.type).filter(Boolean))];
    inferred.push({
      sequence: inferred.length + 1,
      checkedAt,
      durationMs: 0,
      deliveryId: `inferred:${boundaryId}`,
      messageCount: batch.length,
      messageTypes: types,
      // Same bounded digest as a native receipt, so an inferred "N messages"
      // row can be expanded into the rows behind it just like a live one.
      messages: batch.slice(0, 20).map((message) => ({
        id: message.id,
        type: message.type,
        from: message.from_handle,
        subject: message.subject,
        createdAt: message.created_at
      })),
      replayed: false,
      timedOut: false,
      error: null,
      agents: agent ? [agent] : [],
      source: "external_inferred",
      evidence: completion ? "Inferred from Orca's read marker plus settled worker accounting; exact check duration and Delivery ID are unavailable." : "Inferred from Orca's read marker plus the coordinator's durable reply; exact check duration and Delivery ID are unavailable."
    });
  };
  for (const message of sorted) {
    const dispatchId = messageDispatchId(message, scopedWorkers);
    if (!dispatchId) continue;
    const inbound = message.to_handle === `run:${runId}`;
    if (inbound && messageWasRead(message)) {
      const pending2 = pendingByDispatch.get(dispatchId) ?? [];
      pending2.push(message);
      pendingByDispatch.set(dispatchId, pending2);
      continue;
    }
    const outboundReply = message.to_handle === `dispatch:${dispatchId}` && message.type === "status" && /^Re:\s*/i.test(message.subject ?? "");
    if (!outboundReply) continue;
    const pending = pendingByDispatch.get(dispatchId) ?? [];
    if (pending.length === 0) continue;
    append(dispatchId, pending, Date.parse(message.created_at) - 1, message.id, false);
    pendingByDispatch.delete(dispatchId);
  }
  for (const [dispatchId, pending] of pendingByDispatch) {
    const lastDone = [...pending].reverse().find((message) => message.type === "worker_done");
    if (!lastDone) continue;
    const worker = scopedWorkers.find((candidate) => candidate.dispatchId === dispatchId);
    const settled = worker && (worker.dispatchStatus === "completed" || worker.dispatchStatus === "failed" || worker.terminalState !== "active");
    if (!settled) continue;
    append(dispatchId, pending, Date.parse(lastDone.created_at) + 1, lastDone.id, true);
  }
  return inferred;
}
function buildActivitySnapshot(input) {
  const { runId } = input;
  const now = input.now ?? Date.now();
  const taskMap = new Map(input.tasks.filter((task) => task.run_id === runId).map((task) => [task.id, task]));
  const workers = input.workers.filter((worker) => worker.runId === runId);
  const scopedStatus = input.status?.runId === runId ? input.status : null;
  const pendingIds = new Set(scopedStatus?.inbox.pending.filter((item) => item.kind !== "stop_event").map((item) => item.messageId) ?? []);
  const pendingStopIds = new Set(scopedStatus?.inbox.pending.filter((item) => item.kind === "stop_event").map((item) => item.messageId) ?? []);
  const scopedMessages = input.messages.filter((message) => message.run_id === runId);
  const truncated = scopedMessages.length > MAX_HISTORY_MESSAGES;
  const normalized = scopedMessages.sort((a, b) => a.created_at.localeCompare(b.created_at)).slice(-MAX_HISTORY_MESSAGES).map((message) => normalizeMessage(message, taskMap, workers, input.leadTaskId ?? null, pendingIds, pendingStopIds));
  const debts = (scopedStatus?.cleanupDebt ?? []).map(
    (debt) => debtEvent(runId, debt, new Date(scopedStatus?.lastReconciledAt || now).toISOString())
  );
  const journal = removeJournalMessageDuplicates(
    (input.journal ?? []).filter((event) => event.runId === runId),
    normalized
  );
  const events = coalesceHeartbeats([...normalized, ...journal, ...debts].sort((a, b) => a.createdAt.localeCompare(b.createdAt))).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const seenTasks = /* @__PURE__ */ new Set();
  const presence = [];
  const attempts = scopedStatus?.attempts ?? [];
  const presenceFrom = (taskId, dispatchId, projection, attempt, launchEvidence = null) => {
    const stage = projection?.stage ?? attempt?.stage ?? null;
    const verdict = projection?.liveness?.verdict ?? attempt?.liveness ?? null;
    const livenessReason = projection?.liveness?.reason ?? null;
    const liveness = presentWorkerLiveness({
      fleetVerdict: verdict,
      fleetReason: livenessReason,
      observation: dispatchId ? input.observations?.get(dispatchId) : null
    });
    return {
      taskId,
      dispatchId,
      liveness: liveness.verdict,
      livenessReason,
      qualifiedWorking: liveness.qualifiedWorking,
      activity: stage?.activity ?? null,
      detail: stage?.detail ?? null,
      outcome: projection?.outcome ?? attempt?.outcome ?? null,
      attention: projection?.attention?.categories ?? attempt?.attention?.categories ?? [],
      agent: projection?.launch?.agent ?? projection?.provider?.id ?? launchEvidence?.agent ?? attempt?.effective?.agent ?? null,
      model: projection?.launch?.model ?? projection?.provider?.model ?? launchEvidence?.model ?? attempt?.effective?.model ?? null,
      effort: projection?.launch?.effort ?? launchEvidence?.effort ?? attempt?.effective?.effort ?? null,
      observedAt: attempt?.lastHeartbeatAt ?? null
    };
  };
  for (const worker of workers) {
    if (seenTasks.has(worker.taskId)) continue;
    seenTasks.add(worker.taskId);
    const attempt = attempts.find(
      (candidate) => candidate.dispatchId === worker.dispatchId || candidate.taskId === worker.taskId
    );
    presence.push(presenceFrom(worker.taskId, worker.dispatchId, worker.projection, attempt, worker.launchEvidence ?? null));
  }
  for (const attempt of attempts) {
    if (!attempt.dispatchId || seenTasks.has(attempt.taskId)) continue;
    seenTasks.add(attempt.taskId);
    presence.push(presenceFrom(attempt.taskId, attempt.dispatchId, null, attempt));
  }
  const checkMap = /* @__PURE__ */ new Map();
  for (const receipt of [...input.persistedChecks ?? [], ...scopedStatus?.checks ?? []]) {
    const key = [receipt.checkedAt, receipt.deliveryId ?? "", receipt.messageCount, receipt.error ?? ""].join(":");
    checkMap.set(key, {
      ...receipt,
      messageTypes: [...receipt.messageTypes],
      messages: receipt.messages?.map((message) => ({ ...message })) ?? [],
      agents: receipt.agents.map((agent) => ({ ...agent, attention: [...agent.attention] }))
    });
  }
  for (const receipt of inferExternalCoordinatorChecks(runId, scopedMessages, workers)) {
    const nativeOverlap = [...checkMap.values()].some(
      (candidate) => candidate.source !== "external_inferred" && candidate.messageCount === receipt.messageCount && Math.abs(candidate.checkedAt - receipt.checkedAt) <= 3e4 && receipt.messageTypes.every((type) => candidate.messageTypes.includes(type))
    );
    if (nativeOverlap) continue;
    checkMap.set(receipt.deliveryId, receipt);
  }
  const checks = [...checkMap.values()].sort((a, b) => a.checkedAt - b.checkedAt);
  return {
    runId,
    events,
    presence,
    checks,
    pendingCount: pendingIds.size,
    truncated,
    inboxWindow: input.inboxWindow ?? null,
    generatedAt: now
  };
}
function createViewerActivity(input) {
  const createdAt = (/* @__PURE__ */ new Date()).toISOString();
  return {
    id: `viewer:${Date.now()}:${randomUUID()}`,
    runId: input.runId,
    taskId: input.taskId ?? null,
    dispatchId: input.dispatchId ?? null,
    // One-to-one journal rows carry no durable read marker or Orca priority —
    // both stay unknown rather than being defaulted to a value the viewer
    // never saw. A group send records the priority it REQUESTED (input above);
    // the authoritative Orca row later carries whatever Orca actually stored.
    threadId: input.threadId ?? null,
    audience: input.audience ?? null,
    priority: input.priority ?? null,
    read: null,
    direction: "coordinator_to_agent",
    actor: { role: "coordinator", label: "Coordinator", harness: null, model: null },
    kind: input.kind,
    severity: input.severity ?? "info",
    title: input.title,
    summary: input.summary,
    detail: input.detail ?? null,
    createdAt,
    groupedCount: 1,
    actionable: input.actionable ?? null,
    technical: {
      argv: input.argv,
      payload: input.payload,
      requestId: input.requestId ?? void 0,
      provenance: "viewer_journal"
    }
  };
}
var ActivityJournal = class {
  constructor(workspaceDir) {
    this.workspaceDir = workspaceDir;
    this.path = join3(workspaceDir, ACTIVITY_FILE);
  }
  path;
  /** Serialize append+rotation so parallel worker starts cannot race a rotate. */
  appendChain = Promise.resolve();
  async append(event) {
    await this.appendRecord(event);
  }
  async appendCheck(runId, receipt) {
    const record3 = {
      recordType: "coordinator_check",
      id: `check:${receipt.checkedAt}:${randomUUID()}`,
      runId,
      createdAt: new Date(receipt.checkedAt).toISOString(),
      receipt
    };
    await this.appendRecord(record3);
  }
  async appendRecord(record3) {
    const write = this.appendChain.then(async () => {
      prepareWorkspaceStateFile(this.workspaceDir, ACTIVITY_FILE, true);
      await this.rotateIfNeeded();
      await appendFile3(this.path, `${JSON.stringify(record3)}
`, "utf8");
    });
    this.appendChain = write.catch(() => {
    });
    await write;
  }
  async list(runId) {
    return (await this.listHistory(runId)).events;
  }
  async listHistory(runId) {
    let text2;
    try {
      text2 = await readFile3(workspaceStateReadPath(this.workspaceDir, ACTIVITY_FILE), "utf8");
    } catch (err) {
      if (err.code === "ENOENT") return { events: [], checks: [] };
      throw err;
    }
    const events = [];
    const checks = [];
    for (const line of text2.split("\n")) {
      if (!line.trim()) continue;
      try {
        const record3 = JSON.parse(line);
        if (!record3 || record3.runId !== runId || typeof record3.id !== "string") continue;
        if (record3.recordType === "coordinator_check") {
          const receipt = record3.receipt;
          if (receipt && typeof receipt.checkedAt === "number" && Array.isArray(receipt.messageTypes) && Array.isArray(receipt.agents)) {
            checks.push(receipt);
          }
          continue;
        }
        events.push(hydrateEvent(record3));
      } catch {
      }
    }
    return {
      events: events.slice(-MAX_HISTORY_MESSAGES),
      checks: checks.slice(-MAX_HISTORY_MESSAGES)
    };
  }
  async rotateIfNeeded() {
    let size = 0;
    try {
      size = (await stat3(this.path)).size;
    } catch (err) {
      if (err.code === "ENOENT") return;
      throw err;
    }
    if (size < JOURNAL_MAX_BYTES2) return;
    const data = await readFile3(this.path);
    const start = Math.max(0, data.length - JOURNAL_KEEP_BYTES2);
    const firstNewline = data.indexOf(10, start);
    const kept = firstNewline >= 0 ? data.subarray(firstNewline + 1) : data.subarray(start);
    await writeFile3(this.path, kept);
  }
};

// server/src/pluginBridge.ts
import { randomBytes, randomUUID as randomUUID2, timingSafeEqual } from "node:crypto";
import { renameSync, unlinkSync, writeFileSync } from "node:fs";
var PLUGIN_CONNECTED_TTL_MS = 25e3;
var MAX_PENDING_NOTIFICATIONS = 20;
var MAX_PENDING_COMMANDS = 16;
function createPluginToken() {
  return randomBytes(24).toString("base64url");
}
function tokenMatches(expected, provided) {
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(provided, "utf8");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
function requirePluginToken(expectedToken) {
  return (req, res, next) => {
    const provided = req.header("x-orca-plugin-token");
    if (typeof provided !== "string" || !provided || !tokenMatches(expectedToken, provided)) {
      res.status(403).json({
        error: "Invalid or missing Orca plugin token.",
        code: "invalid_plugin_token"
      });
      return;
    }
    next();
  };
}
function writePluginEndpointFile(workspaceDir, record3) {
  const target = pluginEndpointPath(workspaceDir, true);
  const tmp = `${target}.${process.pid}.${randomBytes(4).toString("hex")}.tmp`;
  writeFileSync(tmp, `${JSON.stringify(record3, null, 2)}
`, { mode: 384, flag: "wx" });
  try {
    try {
      checkPluginEndpointFile(target);
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
    renameSync(tmp, target);
  } catch (err) {
    try {
      unlinkSync(tmp);
    } catch {
    }
    throw err;
  }
  return target;
}
function removePluginEndpointFile(workspaceDir, instanceId) {
  try {
    if (readPluginEndpointFile(workspaceDir)?.instanceId !== instanceId) return false;
    unlinkSync(pluginEndpointPath(workspaceDir));
    return true;
  } catch {
    return false;
  }
}
function boundedString(value, max) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}
var PluginBridge = class {
  pluginId = null;
  version = null;
  hostApiMinor = null;
  grantedCapabilities = [];
  lastSeenMs = 0;
  wakeListeners = /* @__PURE__ */ new Set();
  pendingNotifications = [];
  pendingCommands = [];
  receiptWaiters = /* @__PURE__ */ new Map();
  inboxWaiters = /* @__PURE__ */ new Set();
  statusSummaryProvider = null;
  lastDeliveredStatusSig = "";
  closed = false;
  setStatusSummaryProvider(provider) {
    this.statusSummaryProvider = provider;
  }
  touch() {
    this.lastSeenMs = Date.now();
  }
  notifyInboxWaiters() {
    for (const wake of [...this.inboxWaiters]) {
      this.inboxWaiters.delete(wake);
      wake();
    }
  }
  emitWake(event) {
    for (const listener of [...this.wakeListeners]) {
      try {
        listener(event);
      } catch {
      }
    }
  }
  onWake(listener) {
    this.wakeListeners.add(listener);
    return () => {
      this.wakeListeners.delete(listener);
    };
  }
  hello(input) {
    const rec = input && typeof input === "object" && !Array.isArray(input) ? input : {};
    this.pluginId = boundedString(rec.pluginId, 64) ?? "orchestration-panel";
    this.version = boundedString(rec.version, 32) ?? "0.0.0";
    this.hostApiMinor = typeof rec.hostApiMinor === "number" && Number.isFinite(rec.hostApiMinor) ? Math.max(0, Math.min(999, Math.round(rec.hostApiMinor))) : null;
    this.grantedCapabilities = Array.isArray(rec.grantedCapabilities) ? rec.grantedCapabilities.filter((c) => typeof c === "string").map((c) => c.slice(0, 64)).slice(0, 32) : [];
    this.touch();
    return this.status();
  }
  status(now = Date.now()) {
    const connected = !this.closed && this.lastSeenMs > 0 && now - this.lastSeenMs <= PLUGIN_CONNECTED_TTL_MS;
    return {
      connected,
      pluginId: this.pluginId,
      version: this.version,
      hostApiMinor: this.hostApiMinor,
      grantedCapabilities: [...this.grantedCapabilities],
      transport: this.lastSeenMs > 0 ? "loopback-http" : null,
      lastSeenAt: this.lastSeenMs > 0 ? new Date(this.lastSeenMs).toISOString() : null
    };
  }
  ingestEvents(payload) {
    this.touch();
    const rec = payload && typeof payload === "object" && !Array.isArray(payload) ? payload : {};
    let acceptedStatus = 0;
    let acceptedTools = 0;
    let acceptedPrompts = 0;
    const batches = [
      { kind: "status", rows: rec.statusEvents },
      { kind: "tool", rows: rec.toolEvents },
      { kind: "prompt", rows: rec.promptEvents }
    ];
    for (const { kind, rows } of batches) {
      if (!Array.isArray(rows)) continue;
      for (const raw of rows.slice(0, 100)) {
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) continue;
        const terminalId = raw.terminalId;
        if (typeof terminalId !== "string" || !terminalId || terminalId.length > 128) continue;
        if (kind === "status") acceptedStatus++;
        else if (kind === "tool") acceptedTools++;
        else acceptedPrompts++;
        this.emitWake({ kind, terminalId });
      }
    }
    return { acceptedStatus, acceptedTools, acceptedPrompts };
  }
  enqueueNotification(title, body) {
    if (this.closed) return;
    this.pendingNotifications.push({
      id: `pnote_${randomUUID2()}`,
      title: title.slice(0, 120),
      ...body ? { body: body.slice(0, 400) } : {}
    });
    if (this.pendingNotifications.length > MAX_PENDING_NOTIFICATIONS) {
      this.pendingNotifications.splice(0, this.pendingNotifications.length - MAX_PENDING_NOTIFICATIONS);
    }
    this.notifyInboxWaiters();
  }
  notifyStatusChanged() {
    this.notifyInboxWaiters();
  }
  /** Queue a command for the companion plugin and await its receipt (used in M3 resume). */
  enqueueCommand(kind, params, timeoutMs = 2e4) {
    if (this.closed || !this.status().connected) {
      return Promise.reject(new Error("Companion Orca plugin is not connected."));
    }
    if (this.receiptWaiters.size >= MAX_PENDING_COMMANDS) {
      return Promise.reject(new Error("Companion plugin command queue is full."));
    }
    const id = `pcmd_${randomUUID2()}`;
    const envelope = { id, kind, params, createdAt: Date.now() };
    this.pendingCommands.push(envelope);
    const promise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        this.receiptWaiters.delete(id);
        const pending = this.pendingCommands.indexOf(envelope);
        if (pending !== -1) this.pendingCommands.splice(pending, 1);
        reject(new Error(`Companion plugin command ${kind} timed out after ${timeoutMs}ms.`));
      }, timeoutMs);
      this.receiptWaiters.set(id, { resolve, reject, timer });
    });
    this.notifyInboxWaiters();
    return promise;
  }
  submitReceipt(commandId, receipt) {
    this.touch();
    const waiter = this.receiptWaiters.get(commandId);
    if (!waiter) return false;
    clearTimeout(waiter.timer);
    this.receiptWaiters.delete(commandId);
    waiter.resolve(receipt);
    return true;
  }
  /**
   * Long-poll inbox for the companion plugin worker. Resolves immediately when
   * commands, notifications, or a new status bar summary are ready.
   */
  async pullInbox(waitMs = 1e4, signal) {
    this.touch();
    const clampWait = Math.max(0, Math.min(15e3, Math.round(waitMs)));
    const readStatus = () => {
      const summary2 = this.statusSummaryProvider ? this.statusSummaryProvider() : null;
      const sig = summary2 ? JSON.stringify(summary2) : "";
      const changed2 = sig !== this.lastDeliveredStatusSig;
      return { summary: summary2, changed: changed2 };
    };
    const hasImmediate = () => this.closed || this.pendingCommands.length > 0 || this.pendingNotifications.length > 0 || readStatus().changed;
    if (!hasImmediate() && clampWait > 0 && !signal?.aborted) {
      await new Promise((resolve) => {
        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          clearTimeout(timer);
          this.inboxWaiters.delete(finish);
          signal?.removeEventListener("abort", finish);
          resolve();
        };
        const timer = setTimeout(finish, clampWait);
        this.inboxWaiters.add(finish);
        signal?.addEventListener("abort", finish, { once: true });
      });
    }
    if (this.closed || signal?.aborted) return { commands: [], notifications: [], statusBar: null };
    const commands = this.pendingCommands.splice(0, this.pendingCommands.length);
    const notifications = this.pendingNotifications.splice(0, this.pendingNotifications.length);
    const { summary, changed } = readStatus();
    if (changed) this.lastDeliveredStatusSig = summary ? JSON.stringify(summary) : "";
    return {
      commands,
      notifications,
      statusBar: changed ? summary : null
    };
  }
  close() {
    this.closed = true;
    this.notifyInboxWaiters();
    for (const [id, waiter] of this.receiptWaiters) {
      clearTimeout(waiter.timer);
      waiter.reject(new Error("Viewer server shutting down."));
      this.receiptWaiters.delete(id);
    }
    this.wakeListeners.clear();
  }
};

// server/src/outputTail.ts
var PAGE_LIMIT = 120;
var DRAIN_INTERVAL_MS = 250;
var ACTIVE_INTERVAL_MS = 1500;
var IDLE_INTERVAL_MS = 4e3;
var ERROR_INTERVAL_MS = 1e4;
var WAKE_DEBOUNCE_MS = 150;
var SUBSCRIBER_GRACE_MS = 1e4;
var KEEPALIVE_MS = 25e3;
var MAX_LINES = 5e3;
var MAX_MESSAGES = 1e3;
function sseFrame(event, data) {
  return `event: ${event}
data: ${JSON.stringify(data)}

`;
}
function tailFrame(entry, output) {
  return {
    output,
    trimmedLines: entry.trimmedLines,
    trimmedMessages: entry.trimmedMessages,
    streamingState: entry.streamingState
  };
}
function appendTail(previous, page, limit) {
  if (page.length === 0) return previous;
  if (previous.length === 0 || page.length === limit) return page;
  const merged = previous.slice(Math.max(0, previous.length + page.length - limit));
  merged.push(...page);
  return merged;
}
var OutputTailManager = class {
  tails = /* @__PURE__ */ new Map();
  readFn;
  unsubscribeWake;
  closed = false;
  constructor(opts = {}) {
    this.readFn = opts.readOutput ?? readWorkerOutput;
    this.unsubscribeWake = opts.pluginBridge?.onWake(({ terminalId }) => {
      this.handlePluginWake(terminalId);
    }) ?? null;
  }
  subscribe(opts) {
    const { res } = opts;
    if (res.destroyed || res.writableEnded) return () => {
    };
    if (this.closed) {
      res.end();
      return () => {
      };
    }
    const key = JSON.stringify([opts.runId, opts.dispatchId, opts.source]);
    let entry = this.tails.get(key);
    if (!entry) {
      entry = {
        key,
        dispatchId: opts.dispatchId,
        source: opts.source,
        terminalId: opts.terminalId,
        subscribers: /* @__PURE__ */ new Set(),
        output: null,
        trimmedLines: 0,
        trimmedMessages: 0,
        streamingState: "live",
        inFlight: false,
        pendingWake: false,
        idlePolls: 0,
        poll: null,
        graceTimer: null,
        keepaliveTimer: null
      };
      this.tails.set(key, entry);
    } else {
      if (opts.terminalId && !entry.terminalId) entry.terminalId = opts.terminalId;
      if (entry.graceTimer) {
        clearTimeout(entry.graceTimer);
        entry.graceTimer = null;
      }
    }
    const tail = entry;
    const sub = {
      res,
      onDrain: null,
      missedOutput: false,
      unsubscribe: () => this.removeSubscriber(tail, sub)
    };
    tail.subscribers.add(sub);
    res.once("close", sub.unsubscribe);
    if (!tail.keepaliveTimer) {
      tail.keepaliveTimer = setInterval(() => {
        for (const subscriber of tail.subscribers) this.writeFrame(tail, subscriber, ": keepalive\n\n");
      }, KEEPALIVE_MS);
    }
    if (tail.output) this.writeFrame(tail, sub, sseFrame("init", tailFrame(tail, tail.output)));
    if (!tail.inFlight && !tail.poll) this.schedulePoll(tail, 0);
    return sub.unsubscribe;
  }
  removeSubscriber(entry, sub) {
    if (!entry.subscribers.delete(sub)) return;
    sub.res.off("close", sub.unsubscribe);
    if (sub.onDrain) sub.res.off("drain", sub.onDrain);
    if (this.closed || entry.subscribers.size > 0) return;
    if (entry.poll) {
      clearTimeout(entry.poll.timer);
      entry.poll = null;
    }
    if (entry.keepaliveTimer) {
      clearInterval(entry.keepaliveTimer);
      entry.keepaliveTimer = null;
    }
    entry.graceTimer = setTimeout(() => this.disposeEntry(entry), SUBSCRIBER_GRACE_MS);
  }
  writeFrame(entry, sub, frame) {
    if (sub.onDrain || sub.res.writableEnded || sub.res.destroyed) return;
    try {
      if (sub.res.write(frame)) return;
    } catch {
      sub.unsubscribe();
      sub.res.destroy();
      return;
    }
    if (!entry.subscribers.has(sub)) return;
    sub.onDrain = () => {
      sub.onDrain = null;
      if (!sub.missedOutput || !entry.output || !entry.subscribers.has(sub)) return;
      sub.missedOutput = false;
      this.writeFrame(entry, sub, sseFrame("reset", tailFrame(entry, entry.output)));
    };
    sub.res.once("drain", sub.onDrain);
  }
  publish(entry, event, data) {
    let frame;
    for (const sub of entry.subscribers) {
      if (sub.onDrain) {
        if (event !== "streamError") sub.missedOutput = true;
        continue;
      }
      this.writeFrame(entry, sub, frame ??= sseFrame(event, data));
    }
  }
  handlePluginWake(terminalId) {
    if (this.closed) return;
    for (const entry of this.tails.values()) {
      if (!entry.terminalId || entry.terminalId !== terminalId) continue;
      if (entry.subscribers.size === 0) continue;
      entry.idlePolls = 0;
      if (entry.inFlight) {
        entry.pendingWake = true;
      } else {
        this.schedulePoll(entry, WAKE_DEBOUNCE_MS);
      }
    }
  }
  schedulePoll(entry, delayMs) {
    if (this.closed || entry.subscribers.size === 0) return;
    const dueAt = performance.now() + delayMs;
    if (entry.poll) {
      if (entry.poll.dueAt <= dueAt) return;
      clearTimeout(entry.poll.timer);
    }
    const timer = setTimeout(() => {
      entry.poll = null;
      void this.pollOnce(entry);
    }, delayMs);
    entry.poll = { timer, dueAt };
  }
  async pollOnce(entry) {
    if (this.closed || entry.subscribers.size === 0 || entry.inFlight) return;
    entry.inFlight = true;
    entry.pendingWake = false;
    const beforePoll = entry.output;
    const cursor = beforePoll?.cursor ?? void 0;
    try {
      const receipt = await this.readFn(entry.dispatchId, {
        source: entry.source === "auto" ? void 0 : entry.source,
        cursor,
        limit: PAGE_LIMIT
      });
      if (this.closed || this.tails.get(entry.key) !== entry) return;
      if (receipt.dispatchId !== entry.dispatchId) {
        throw new Error("worker-read returned output for a different Dispatch");
      }
      const previous = cursor && !receipt.sourceChanged ? beforePoll : null;
      const newLinesCount = receipt.lines.length;
      const newMessagesCount = receipt.messages?.length ?? 0;
      const page = newLinesCount > MAX_LINES || newMessagesCount > MAX_MESSAGES ? {
        ...receipt,
        lines: newLinesCount > MAX_LINES ? receipt.lines.slice(-MAX_LINES) : receipt.lines,
        ...receipt.messages && newMessagesCount > MAX_MESSAGES ? { messages: receipt.messages.slice(-MAX_MESSAGES) } : {}
      } : receipt;
      entry.trimmedLines = (previous ? entry.trimmedLines : 0) + Math.max(0, (previous?.lines.length ?? 0) + newLinesCount - MAX_LINES);
      entry.trimmedMessages = (previous ? entry.trimmedMessages : 0) + Math.max(0, (previous?.messages?.length ?? 0) + newMessagesCount - MAX_MESSAGES);
      const wasDrained = entry.streamingState === "drained";
      const drained = page.status?.liveness === "exited" && newLinesCount === 0 && newMessagesCount === 0;
      entry.streamingState = drained ? "drained" : "live";
      if (!previous) {
        entry.output = page;
        this.publish(entry, beforePoll ? "reset" : "init", tailFrame(entry, page));
      } else {
        const messages = page.messages?.length ? appendTail(previous.messages ?? [], page.messages, MAX_MESSAGES) : previous.messages ?? page.messages;
        entry.output = {
          ...page,
          lines: appendTail(previous.lines, page.lines, MAX_LINES),
          ...messages !== void 0 ? { messages } : {}
        };
        if (newLinesCount > 0 || newMessagesCount > 0 || drained || wasDrained || page.warnings.join("|") !== previous.warnings.join("|")) {
          this.publish(entry, "append", tailFrame(entry, page));
        }
      }
      if (newLinesCount === 0 && newMessagesCount === 0) entry.idlePolls += 1;
      else entry.idlePolls = 0;
      if (!drained && entry.subscribers.size > 0) {
        const nextDelay = entry.pendingWake ? WAKE_DEBOUNCE_MS : newLinesCount >= PAGE_LIMIT || newMessagesCount >= PAGE_LIMIT ? DRAIN_INTERVAL_MS : entry.idlePolls >= 3 ? IDLE_INTERVAL_MS : ACTIVE_INTERVAL_MS;
        this.schedulePoll(entry, nextDelay);
      }
    } catch (err) {
      if (this.closed || this.tails.get(entry.key) !== entry) return;
      const message = String(err?.message ?? err);
      this.publish(entry, "streamError", { error: message });
      if (entry.subscribers.size > 0) {
        this.schedulePoll(entry, ERROR_INTERVAL_MS);
      }
    } finally {
      entry.inFlight = false;
      if (entry.pendingWake && !this.closed && entry.subscribers.size > 0 && !entry.poll) {
        this.schedulePoll(entry, WAKE_DEBOUNCE_MS);
      }
    }
  }
  disposeEntry(entry) {
    if (entry.poll) clearTimeout(entry.poll.timer);
    if (entry.graceTimer) clearTimeout(entry.graceTimer);
    if (entry.keepaliveTimer) clearInterval(entry.keepaliveTimer);
    this.tails.delete(entry.key);
  }
  closeAll() {
    this.closed = true;
    this.unsubscribeWake?.();
    for (const entry of this.tails.values()) {
      for (const sub of entry.subscribers) {
        sub.unsubscribe();
        try {
          sub.res.end();
        } catch {
        }
      }
      this.disposeEntry(entry);
    }
  }
};

// server/src/nativeResume.ts
import { isAbsolute, normalize } from "node:path";
var RESUMABLE_HARNESSES = ["claude", "codex", "opencode", "opencode2"];
var FAILED_DISPATCH_STATES = /* @__PURE__ */ new Set(["failed", "stopped", "abandoned", "errored", "cancelled", "timed_out"]);
var SESSION_ID_RE = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/;
function parseTaskDeps(task) {
  if (typeof task.deps === "string") {
    try {
      const parsed = JSON.parse(task.deps);
      if (Array.isArray(parsed)) return parsed.filter((d) => typeof d === "string");
    } catch {
      return [];
    }
  }
  return [];
}
function extractWorktreePath(detail, row) {
  const projWs = row.projection?.workspace;
  const candidates = [
    detail.terminal?.worktreePath,
    detail.launch?.resolvedWorktreeId,
    typeof projWs === "string" ? projWs : projWs?.id,
    detail.terminalResource?.worktreeId,
    row.resource?.worktreeId
  ];
  let workspace = null;
  for (const raw of candidates) {
    if (typeof raw !== "string" || !raw.trim()) continue;
    const idx = raw.indexOf("::");
    const pathPart = idx >= 0 ? raw.slice(idx + 2) : raw.startsWith("path:") ? raw.slice(5) : raw;
    if (!isAbsolute(pathPart)) continue;
    const path = normalize(pathPart);
    if (workspace && workspace !== path) return null;
    workspace = path;
  }
  return workspace;
}
function normalizeHarness(raw) {
  if (!raw || typeof raw !== "string") return null;
  const cleaned = raw.trim().toLowerCase();
  if (!cleaned) return null;
  return cleaned;
}
function isFailedSettledWorker(row) {
  const ds = (row.dispatchStatus ?? "").toLowerCase();
  const ws = (row.workerState ?? "").toLowerCase();
  const outcome = (row.projection?.outcome ?? "").toLowerCase();
  if (ds === "completed" || ws === "succeeded" || outcome === "succeeded") return false;
  return FAILED_DISPATCH_STATES.has(ds) || FAILED_DISPATCH_STATES.has(ws) || FAILED_DISPATCH_STATES.has(outcome);
}
async function defaultWaitForTuiIdle(terminalHandle, timeoutMs) {
  try {
    await runOrca([
      "terminal",
      "wait",
      "--terminal",
      terminalHandle,
      "--for",
      "tui-idle",
      "--timeout-ms",
      String(timeoutMs)
    ]);
  } catch {
  }
}
async function resolvePluginWorkspaceId(pluginBridge2, workspacePath) {
  if (!workspacePath || !isAbsolute(workspacePath) || !pluginBridge2.status().connected) return null;
  try {
    const res = await pluginBridge2.enqueueCommand("workspace.list", {}, 5e3);
    if (res.ok !== true || res.truncated === true || !Array.isArray(res.workspaces)) return null;
    const matches = res.workspaces.filter((w) => {
      if (!w || typeof w !== "object") return false;
      const rec = w;
      return (rec.hostId === "local" || rec.hostId === null) && typeof rec.path === "string" && isAbsolute(rec.path) && normalize(rec.path) === workspacePath;
    });
    if (matches.length !== 1) return null;
    const id = matches[0].id;
    return typeof id === "string" && id.trim() && id.length <= 512 && !id.includes("\0") ? id : null;
  } catch {
    return null;
  }
}
async function fetchCandidateSessions(pluginBridge2, workspaceId, harness) {
  const st = pluginBridge2.status();
  if (!st.connected || !st.grantedCapabilities.includes("history:read")) return [];
  try {
    const res = await pluginBridge2.enqueueCommand("agent.listSessions", { workspaceId, limit: 40 }, 5e3);
    if (res.ok !== true || !Array.isArray(res.sessions)) return [];
    const candidates = [];
    for (const raw of res.sessions) {
      if (!raw || typeof raw !== "object") continue;
      const item = raw;
      if (item.workspaceId !== workspaceId || item.hostId !== "local" || typeof item.running !== "boolean" || typeof item.sessionId !== "string" || !SESSION_ID_RE.test(item.sessionId) || typeof item.agent !== "string" || !sameResumeHarness(item.agent, harness)) continue;
      candidates.push({
        sessionId: item.sessionId,
        agent: item.agent,
        title: typeof item.title === "string" ? item.title.slice(0, 120) : "",
        updatedAt: typeof item.updatedAt === "number" ? item.updatedAt : 0,
        running: item.running
      });
    }
    return candidates;
  } catch {
    return [];
  }
}
function sameResumeHarness(a, b) {
  return a === b || a === "opencode" && b === "opencode2" || a === "opencode2" && b === "opencode";
}
async function previewNativeResume(opts, deps) {
  return inspectNativeResume(opts, deps);
}
async function inspectNativeResume(opts, deps, settlements) {
  const showDetailFn = deps.showWorkerDetail ?? showWorkerDetail;
  const listWorkersFn = deps.listWorkers ?? listWorkers;
  const listTasksFn = deps.listTasks ?? listTasks;
  const listGatesFn = deps.listGates ?? listGates;
  const showRequestFn = deps.showRequest ?? showRequest;
  const pluginStatus = deps.pluginBridge.status();
  const pluginConnected = pluginStatus.connected;
  const hasLaunchCapability = pluginStatus.grantedCapabilities.includes("agent:launch");
  const base = {
    eligible: false,
    reason: null,
    code: null,
    runId: opts.runId,
    taskId: null,
    dispatchId: opts.dispatchId,
    harness: null,
    sessionId: null,
    sessionSource: null,
    workspaceId: null,
    workspacePath: null,
    hostKind: null,
    pluginConnected,
    hasLaunchCapability,
    candidateSessions: [],
    unresolvedRequestId: null
  };
  const fail2 = (code, reason) => ({ ...base, eligible: false, code, reason });
  const [detail, inventory, tasks, gates, bindings, resumeHistory] = await Promise.all([
    showDetailFn(opts.dispatchId),
    listWorkersFn(opts.runId, { includeRemote: true }),
    listTasksFn(opts.runId),
    listGatesFn(opts.runId),
    deps.providerSessions.list(opts.runId),
    deps.providerSessions.listResumeAttempts(opts.runId)
  ]);
  if (inventory.partialHostErrors.length > 0) {
    return fail2("inventory_incomplete", "Worker inventory has partial host errors; cannot prove no active worker exists.");
  }
  if (!detail || detail.runId !== opts.runId || !detail.taskId) {
    return fail2("worker_not_found", "Dispatch does not belong to this Run.");
  }
  base.taskId = detail.taskId;
  const row = inventory.workers.find((w) => w.runId === opts.runId && w.taskId === detail.taskId && w.dispatchId === opts.dispatchId);
  if (!row) {
    return fail2("worker_not_found", "Dispatch is missing from Orca worker inventory.");
  }
  const hostKind = row.projection?.host?.kind ?? null;
  base.hostKind = hostKind;
  base.workspacePath = extractWorktreePath(detail, row);
  const binding = bindings.find((b) => b.dispatchId === opts.dispatchId && b.taskId === detail.taskId) ?? null;
  const harness = normalizeHarness(
    detail.launch?.agent ?? detail.requestedLaunch?.agent ?? binding?.harness ?? null
  );
  base.harness = harness;
  if (!harness) {
    return fail2("resume_not_allowed", "Cannot prove which agent harness ran this Dispatch.");
  }
  if (isUnverifiedHarness(harness)) {
    return fail2("unverified_harness", `"${harness}" is an unverified harness and cannot be resumed by Orca viewer.`);
  }
  if (!RESUMABLE_HARNESSES.includes(harness)) {
    return fail2("resume_not_allowed", `Harness "${harness}" does not support native session resume.`);
  }
  if (detail.dispatch?.status === "circuit_broken") {
    return fail2("task_not_startable", "Orca reports this Dispatch as circuit_broken.");
  }
  if (row.projection?.liveness?.verdict !== "exited" || !isFailedSettledWorker(row)) {
    return fail2("resume_not_allowed", "Only an exited, failed or stopped Dispatch can be resumed.");
  }
  const activeSibling = inventory.workers.find(
    (w) => w.runId === opts.runId && w.taskId === detail.taskId && (w.dispatchStatus === "dispatched" || w.dispatchStatus === "pending")
  );
  if (activeSibling) {
    return fail2("resume_not_allowed", `Task already has an active Dispatch (${activeSibling.dispatchId}).`);
  }
  const task = tasks.find((t) => t.run_id === opts.runId && t.id === detail.taskId);
  if (!task) return fail2("task_not_found", `Task ${detail.taskId} no longer exists in Run ${opts.runId}.`);
  if (task.status === "dispatched" || task.status === "completed") {
    return fail2("resume_not_allowed", `Task is currently "${task.status}" and cannot be resumed.`);
  }
  if (task.dispatch_id && task.dispatch_id !== opts.dispatchId) {
    return fail2("resume_not_allowed", "The Task points at a different Dispatch.");
  }
  if (parseTaskDeps(task).some((depId) => !tasks.some((t) => t.run_id === opts.runId && t.id === depId && t.status === "completed"))) {
    return fail2("resume_not_allowed", "Upstream dependencies are not completed.");
  }
  if (gates.some((gate) => gate.taskId === detail.taskId && !(gate.question.includes(INTEGRATION_GATE_MARKER) ? gate.status === "resolved" && gate.resolution === INTEGRATION_RESOLUTION : ordinaryGateApproved(gate)))) {
    return fail2("resume_not_allowed", "An approval gate is not approved for this Task.");
  }
  for (const unresolved of resumeHistory) {
    if (unresolved.taskId !== detail.taskId || !["prepared", "resumed_terminal", "unknown"].includes(unresolved.state)) continue;
    let settlement = null;
    try {
      const reqReceipt = await showRequestFn(unresolved.requestId);
      const outcomeRec = reqReceipt?.outcome && typeof reqReceipt.outcome === "object" && !Array.isArray(reqReceipt.outcome) ? reqReceipt.outcome : null;
      if (reqReceipt?.raw.requestId === unresolved.requestId && reqReceipt.raw.method === "orchestration.workerStart") {
        if (reqReceipt.state === "failed" || reqReceipt.state === "rejected") {
          settlement = { ...unresolved, state: "refused", error: reqReceipt.interpretation, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
        } else if (reqReceipt.state === "completed" && outcomeRec?.runId === opts.runId && outcomeRec.taskId === detail.taskId && outcomeRec.state === "ready" && typeof outcomeRec.dispatchId === "string" && unresolved.resumedTerminalId) {
          const recovered = await showDetailFn(outcomeRec.dispatchId);
          if (recovered?.runId === opts.runId && recovered.taskId === detail.taskId && recovered.dispatchId === outcomeRec.dispatchId && recovered.dispatch?.retryOfDispatchId === unresolved.originalDispatchId && (recovered.terminal?.handle ?? recovered.fleet?.agentTerminalHandle) === unresolved.resumedTerminalId) {
            settlement = { ...unresolved, state: "bound", newDispatchId: recovered.dispatchId, error: null, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
          }
        }
      }
    } catch {
    }
    if (!settlement) {
      base.unresolvedRequestId = unresolved.requestId;
      return fail2(
        "resume_unknown",
        `An earlier resume request (${unresolved.requestId}) is unresolved; inspect via request-show before retrying.`
      );
    }
    settlements?.push(settlement);
  }
  if (hostKind !== "local" || row.projection?.host?.id !== "local" || detail.terminal?.executionHostId && detail.terminal.executionHostId !== "local") {
    return fail2(
      "resume_not_allowed",
      "Only a positively identified local worker can be resumed. Paired remote (--on) workers must use Safe Retry."
    );
  }
  if (!pluginConnected) {
    return fail2(
      "plugin_not_connected",
      "Companion Orca plugin (orchestration-panel) is not connected; native resume requires it."
    );
  }
  if (!hasLaunchCapability) {
    return fail2(
      "plugin_capability_missing",
      "Companion Orca plugin has not been granted agent:launch permission."
    );
  }
  const workspaceId = await resolvePluginWorkspaceId(deps.pluginBridge, base.workspacePath);
  base.workspaceId = workspaceId;
  if (!workspaceId) {
    return fail2(
      "resume_workspace_missing",
      "Original worktree workspace could not be found on this Orca host; use fresh retry instead."
    );
  }
  const candidateSessions = await fetchCandidateSessions(deps.pluginBridge, workspaceId, harness);
  const bound = binding && binding.host === "local:local" && normalize(binding.workspace) === base.workspacePath && sameResumeHarness(binding.harness, harness) ? binding : null;
  if (binding && !bound) return fail2("resume_not_allowed", "The saved session binding does not match this worker workspace and harness.");
  if (opts.sessionId && opts.sessionId.trim()) {
    const trimmed = opts.sessionId.trim();
    if (!SESSION_ID_RE.test(trimmed)) {
      return fail2("invalid_session_id", "sessionId must be a single provider-issued token without whitespace.");
    }
    if (bound && bound.sessionId !== trimmed) {
      return fail2("resume_not_allowed", "Choose the session already bound to this Dispatch.");
    }
    base.sessionId = trimmed;
    base.sessionSource = "explicit";
  } else if (bound) {
    base.sessionId = bound.sessionId;
    base.sessionSource = "binding";
  } else {
    base.candidateSessions = candidateSessions.slice(0, 15);
    return fail2(
      "session_id_required",
      candidateSessions.length > 0 ? "No exact session binding was recorded for this Dispatch; pick one of the workspace sessions below to confirm." : "No exact session ID is known for this Dispatch; supply one or use Safe Retry."
    );
  }
  const matchingSessions = candidateSessions.filter((s) => s.sessionId === base.sessionId);
  if (matchingSessions.length !== 1) {
    return fail2("resume_not_allowed", "Orca could not verify this session in the original local workspace.");
  }
  if (matchingSessions[0].running) {
    return fail2(
      "resume_session_active",
      `Session ${base.sessionId} is currently running in an Orca terminal; refusing to double-attach.`
    );
  }
  if (bound) {
    const obs = await deps.providerSessions.probe(bound);
    if (obs.status === "active") {
      return fail2(
        "resume_session_active",
        `Provider reports bound session ${base.sessionId} is still active; resolve it first.`
      );
    }
  }
  return { ...base, eligible: true, code: null, reason: null };
}
async function executeNativeResume(opts, deps) {
  const settlements = [];
  const preview = await inspectNativeResume(opts, deps, settlements);
  if (!preview.eligible || !preview.taskId || !preview.harness || !preview.sessionId || !preview.workspaceId) {
    throw new OrcaCliError(
      preview.reason ?? "Native session resume is not allowed for this Dispatch.",
      preview.code ?? "resume_not_allowed"
    );
  }
  const { taskId, harness, sessionId, workspaceId, workspacePath } = preview;
  return opts.runAsCoordinator(async (from) => {
    for (const row of settlements) await deps.providerSessions.recordResumeAttempt(row);
    return resumeAuthorized({
      from,
      runId: opts.runId,
      dispatchId: opts.dispatchId,
      taskId,
      harness,
      sessionId,
      workspaceId,
      workspacePath,
      onStarted: opts.onStarted
    }, deps);
  });
}
async function resumeAuthorized(opts, deps) {
  const listWorkersFn = deps.listWorkers ?? listWorkers;
  const listTerminalsFn = deps.listTerminals ?? listTerminals;
  const startWorkerFn = deps.startSupervisedWorker ?? startSupervisedWorker;
  const waitIdleFn = deps.waitForTuiIdle ?? defaultWaitForTuiIdle;
  const requestId = newRequestId();
  const createdAt = (/* @__PURE__ */ new Date()).toISOString();
  let checkpoint = {
    requestId,
    runId: opts.runId,
    taskId: opts.taskId,
    originalDispatchId: opts.dispatchId,
    harness: opts.harness,
    sessionId: opts.sessionId,
    workspaceId: opts.workspaceId,
    resumedTerminalId: null,
    newDispatchId: null,
    state: "prepared",
    error: null,
    createdAt,
    updatedAt: createdAt
  };
  await deps.providerSessions.recordResumeAttempt(checkpoint);
  if (deps.noteRequest) {
    await deps.noteRequest({
      requestId,
      operation: "worker-resume",
      runId: opts.runId,
      taskId: opts.taskId,
      dispatchId: opts.dispatchId
    });
  }
  const persist = async (patch) => {
    checkpoint = { ...checkpoint, ...patch, updatedAt: (/* @__PURE__ */ new Date()).toISOString() };
    await deps.providerSessions.recordResumeAttempt(checkpoint);
  };
  let resumedTerminalId;
  let startedNewPane = false;
  try {
    const resumeReceipt = await deps.pluginBridge.enqueueCommand(
      "agent.resume",
      {
        workspaceId: opts.workspaceId,
        agent: opts.harness,
        sessionId: opts.sessionId
      },
      25e3
    );
    if (resumeReceipt.ok === false && resumeReceipt.code !== "action_failed") {
      const msg = typeof resumeReceipt.error === "string" ? resumeReceipt.error : "agent.resume refused";
      await persist({ state: "refused", error: msg });
      throw new OrcaCliError(`Native resume failed: ${msg}`, "resume_failed");
    }
    if (resumeReceipt.ok !== true || typeof resumeReceipt.terminalId !== "string" || !SESSION_ID_RE.test(resumeReceipt.terminalId) || typeof resumeReceipt.started !== "boolean") {
      throw new Error("agent.resume returned no positive pane evidence");
    }
    resumedTerminalId = resumeReceipt.terminalId;
    startedNewPane = resumeReceipt.started;
  } catch (err) {
    if (checkpoint.state === "prepared") {
      await persist({ state: "unknown", error: String(err?.message ?? err) });
      throw new OrcaCliError("Native session resume outcome is unknown. Inspect the Orca session before retrying.", "resume_unknown");
    }
    throw err;
  }
  if (!startedNewPane) {
    await persist({ state: "refused", resumedTerminalId, error: "The session is already open in a pre-existing pane." });
    throw new OrcaCliError("Cannot bind a pre-existing session pane; close it explicitly before retrying.", "resume_session_active");
  }
  await persist({ state: "resumed_terminal", resumedTerminalId });
  await waitIdleFn(resumedTerminalId, 45e3);
  const liveTerminals = await listTerminalsFn();
  if (!opts.workspacePath || !liveTerminals.some((t) => t.handle === resumedTerminalId && t.connected === true && t.worktreePath && normalize(t.worktreePath) === opts.workspacePath)) {
    await persist({
      state: "refused",
      error: `Could not verify resumed terminal ${resumedTerminalId} in the original workspace.`
    });
    throw new OrcaCliError(
      `Could not verify resumed terminal ${resumedTerminalId} in the original workspace.`,
      "resume_terminal_lost"
    );
  }
  const globalFleet = await listWorkersFn(void 0, { includeRemote: true });
  if (globalFleet.partialHostErrors.length) {
    throw new OrcaCliError("Global worker inventory is incomplete; cannot verify terminal custody.", "inventory_incomplete");
  }
  if (globalFleet.workers.some((row) => (row.dispatchStatus === "pending" || row.dispatchStatus === "dispatched") && (row.agentTerminalHandle === resumedTerminalId || row.runId === opts.runId && row.taskId === opts.taskId))) {
    throw new OrcaCliError("The resumed terminal or Task already belongs to a live Dispatch.", "resume_session_active");
  }
  let started;
  try {
    started = await startWorkerFn({
      taskId: opts.taskId,
      agent: opts.harness,
      runId: opts.runId,
      from: opts.from,
      terminal: resumedTerminalId,
      retryRequestId: requestId,
      retryOf: opts.dispatchId
    });
  } catch (err) {
    await persist({ state: "unknown", error: String(err?.message ?? err) });
    throw err;
  }
  const newDispatchId = started.dispatchId;
  if (!newDispatchId) {
    await persist({
      state: "unknown",
      error: `worker-start returned no dispatchId (requestId: ${requestId}); inspect via request-show.`
    });
    throw new OrcaCliError(
      `Resumed worker-start returned no dispatchId (requestId: ${requestId}).`,
      "resume_unknown"
    );
  }
  opts.onStarted?.({ taskId: opts.taskId, harness: opts.harness, retriedFrom: opts.dispatchId, terminalId: resumedTerminalId }, started);
  await persist({
    state: "bound",
    newDispatchId,
    error: null
  });
  const bindHarness = opts.harness === "claude" || opts.harness === "codex" ? opts.harness : opts.harness === "opencode" || opts.harness === "opencode2" ? "opencode" : null;
  if (bindHarness && opts.workspacePath) {
    try {
      await deps.providerSessions.bind({
        runId: opts.runId,
        taskId: opts.taskId,
        dispatchId: newDispatchId,
        harness: bindHarness,
        sessionId: opts.sessionId,
        workspace: opts.workspacePath,
        host: "local:local",
        source: "provider-evidence"
      });
    } catch {
    }
  }
  return {
    requestId,
    taskId: opts.taskId,
    dispatchId: newDispatchId,
    retriedFrom: opts.dispatchId,
    harness: opts.harness,
    sessionId: opts.sessionId,
    workspaceId: opts.workspaceId,
    resumedTerminalId,
    startedNewPane
  };
}

// server/src/app.ts
function fail(res, err) {
  if (err instanceof ValidationError) {
    const status2 = err.code === "execution_disabled" ? 503 : 400;
    res.status(status2).json({ error: err.message, code: err.code });
    return;
  }
  const e = err;
  const code = e?.code ?? null;
  const status = code === "execution_disabled" ? 503 : code === "unverified_harness" || code === "invalid_placement" || code === "unsupported_effort" || code === "invalid_stage_plan" ? 400 : code === "run_required" || code === "run_not_found" ? 409 : code === "coordinator_conflict" || code === "coordinator_control_required" || code === "inventory_incomplete" || code === "gate_not_eligible" || code === "stop_event_not_found" ? 409 : code === WORKTREE_ARCHIVE_HOOK_FAILED || code === "abandon_refused" || code === "focus_unavailable" || code === "worktree_in_use" || code === "main_worktree_protected" || code === "current_workspace_protected" ? 409 : code === "not_running" || code === "lane_not_found" || code === "lane_not_settled" || code === "lane_unverifiable" || code === "active_dispatch_required" || code === "guidance_capacity" || code === "guidance_unknown" || code === "guidance_reconciled" || code === "reply_unknown" || code === "operator_message_unknown" || code === "operator_message_reconciled" || code === "dispatch_not_active" || code === "inbox_item_not_found" || code === "message_not_found" || code === "task_not_startable" || code === "retry_not_allowed" || code === "retry_target_not_found" || code === "session_binding_mismatch" || code === "session_location_unverifiable" || code === "session_location_mismatch" || code === "resume_not_allowed" || code === "resume_unknown" || code === "resume_session_active" || code === "resume_failed" || code === "resume_workspace_missing" || code === "resume_terminal_lost" || code === "plugin_not_connected" || code === "plugin_capability_missing" || code === "session_id_required" ? 409 : code === "invalid_session_id" ? 400 : 500;
  const recovery = e?.recoveryCommand ?? null;
  const message = recovery ? `${e.message}

Unblock with: ${recovery}` : String(e?.message ?? err);
  const requestId = err && typeof err === "object" && "requestId" in err ? err.requestId : void 0;
  res.status(status).json({ error: message, code, recoveryCommand: recovery, ...typeof requestId === "string" ? { requestId } : {} });
}
function route(h) {
  return (req, res) => {
    h(req, res).catch((err) => {
      if (!res.headersSent) fail(res, err);
    });
  };
}
async function asCoordinator(runId, worktree, fn, control, lifecycleLocked = false) {
  const work = async () => {
    let run;
    try {
      run = (await showRun(runId))?.run;
    } catch {
      run = null;
    }
    if (!run || run.id !== runId || typeof run.consumer_generation !== "number" || !(run.coordinator_handle === null || typeof run.coordinator_handle === "string")) {
      throw new OrcaCliError("Run binding cannot be verified; inspect the Run before taking control.", "coordinator_control_required");
    }
    const live = coordinatorStatus();
    if (live.phase === "stopping") {
      throw new OrcaCliError("Wait for Stop to finish before taking coordinator control.", "coordinator_conflict");
    }
    if (live.running && live.runId === runId && live.coordinatorHandle && run.coordinator_handle === live.coordinatorHandle) return fn(live.coordinatorHandle);
    const consent = control && typeof control === "object" ? control : null;
    if (live.running || consent?.confirmed !== true || consent.coordinatorHandle !== run.coordinator_handle || consent.consumerGeneration !== run.consumer_generation) {
      throw new OrcaCliError("Explicit control confirmation matching the current Run binding is required; taking control fences its current coordinator.", "coordinator_control_required");
    }
    const handle = await createTempCoordinatorTerminal(worktree);
    try {
      const fresh = (await showRun(runId))?.run;
      const current = coordinatorStatus();
      if (!fresh || fresh.id !== runId || fresh.coordinator_handle !== run.coordinator_handle || fresh.consumer_generation !== run.consumer_generation || current.running || current.phase === "stopping") {
        throw new OrcaCliError("Run binding changed; inspect it and confirm control again.", "coordinator_control_required");
      }
      await bindRun(runId, handle);
      return await fn(handle);
    } finally {
      await closeTerminal(handle);
    }
  };
  return lifecycleLocked ? work() : withLifecycleMutation(work);
}
async function resolveReplyIdentity(runId, messageId, seed) {
  let taskId = seed?.taskId ?? null;
  let dispatchId = seed?.dispatchId ?? null;
  let source = null;
  if (!seed || !taskId || !dispatchId) {
    try {
      source = (await listRunMessages(runId)).find((message) => message.id === messageId) ?? null;
    } catch (error) {
      if (!seed) throw error;
    }
    if (!source && !seed) {
      throw new OrcaCliError(
        `Message ${messageId} does not belong to Run ${runId} or is no longer available.`,
        "message_not_found"
      );
    }
  }
  if (source) {
    const payload = parseWorkerDonePayload(source);
    taskId ??= payload?.taskId ?? null;
    dispatchId ??= payload?.dispatchId ?? null;
  }
  if (!taskId || !dispatchId) {
    const inventory = await listWorkers(runId, { includeRemote: true }).catch(() => null);
    const row = inventory?.workers.find(
      (candidate) => dispatchId !== null && candidate.dispatchId === dispatchId || taskId !== null && candidate.taskId === taskId || taskId === null && dispatchId === null && source?.from_handle === candidate.agentTerminalHandle
    );
    taskId ??= row?.taskId ?? null;
    dispatchId ??= row?.dispatchId ?? null;
  }
  return { taskId, dispatchId, sourceThreadId: source ? source.thread_id ?? source.id : null };
}
function validateWorkspacePath(raw, field = "path") {
  const v = String(raw ?? "").trim();
  if (!v) {
    throw new ValidationError(`${field} must not be empty`, "invalid_path");
  }
  if (v.length > 1024) {
    throw new ValidationError(`${field} is too long (max 1024 characters)`, "invalid_path");
  }
  if (v.includes("\\")) {
    throw new ValidationError(
      `${field} must use "/" separators \u2014 a backslash is never part of a workspace path`,
      "invalid_path"
    );
  }
  if (v.split("/").includes("..")) {
    throw new ValidationError(
      `${field} must stay inside the selected worktree \u2014 ".." segments are refused`,
      "invalid_path"
    );
  }
  if (v.startsWith("~")) {
    throw new ValidationError(`${field} must not start with "~"`, "invalid_path");
  }
  if (/^[A-Za-z]:/.test(v)) {
    throw new ValidationError(`${field} must not be a drive-letter path`, "invalid_path");
  }
  for (const ch of v) {
    if (ch < " " || ch === "\x7F") {
      throw new ValidationError(
        `${field} contains a control character`,
        "invalid_path"
      );
    }
  }
  return v;
}
function pickReceiptString(raw, ...keys) {
  for (const key of keys) {
    const value = raw?.[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return null;
}
function assertWorktreeRemovalPreconditions(row, selector, opts) {
  if (row.isMainWorktree === true) {
    throw new OrcaCliError(
      `${selector} is a repository's main worktree \u2014 the viewer removes only secondary workspaces.`,
      "main_worktree_protected"
    );
  }
  for (const owned of opts.ownedSelectors) {
    if (owned && owned === selector) {
      throw new OrcaCliError(
        `${selector} is this viewer's own workspace \u2014 removal would pull the coordinator out from under the Run.`,
        "current_workspace_protected"
      );
    }
  }
  for (const active of opts.activeSelectors) {
    if (active && active === selector) {
      throw new OrcaCliError(
        `${selector} hosts an active worker or an unsettled lane of this viewer's coordinator \u2014 stop them first.`,
        "worktree_in_use"
      );
    }
  }
}
function createApp(opts) {
  const { workspaceDir, worktree, policy: policy2 } = opts;
  const readiness = opts.readiness ?? checkReadiness;
  const pluginBridge2 = opts.pluginBridge ?? new PluginBridge();
  const pluginToken2 = opts.pluginToken ?? createPluginToken();
  const outputTails2 = new OutputTailManager({
    pluginBridge: pluginBridge2,
    readOutput: opts.readWorkerOutputFn ?? readWorkerOutput
  });
  const viewerCreatedRunIds = /* @__PURE__ */ new Set();
  const activityJournal = new ActivityJournal(workspaceDir);
  const activityCache = /* @__PURE__ */ new Map();
  const activitySubscribers = /* @__PURE__ */ new Map();
  const notifyActivitySubscribers = (runId) => {
    const listeners = activitySubscribers.get(runId);
    if (!listeners || listeners.size === 0) return;
    for (const wake of [...listeners]) {
      try {
        wake();
      } catch {
      }
    }
  };
  const presentationReads = /* @__PURE__ */ new Map();
  const sharePresentationRead = (key, read) => {
    const pending = presentationReads.get(key);
    if (pending) return pending;
    const value = read();
    presentationReads.set(key, value);
    void value.then(
      () => {
        if (presentationReads.get(key) === value) presentationReads.delete(key);
      },
      () => {
        if (presentationReads.get(key) === value) presentationReads.delete(key);
      }
    );
    return value;
  };
  const presentationTasks = (runId) => sharePresentationRead(JSON.stringify(["task-list", runId]), () => listTasks(runId));
  const presentationGates = (runId) => sharePresentationRead(JSON.stringify(["gate-list", runId]), () => listGates(runId));
  const presentationWorkers = (runId, options) => sharePresentationRead(JSON.stringify(["worker-list", runId, options]), () => listWorkers(runId, options));
  const requestLedger = new RequestLedger(workspaceDir);
  const providerSessions = new ProviderSessionStore(workspaceDir);
  const launchHistory = new LaunchHistory(workspaceDir);
  const launchLookups = /* @__PURE__ */ new Map();
  const observedDispatchMeta = /* @__PURE__ */ new Map();
  let worktreeCatalogCache = null;
  const RESERVED_WORKTREE_MODES = /* @__PURE__ */ new Set(["current", "new-child", "new-top-level", "active"]);
  const nonReservedWorktree = (value) => {
    if (typeof value !== "string") return null;
    const trimmed = value.trim();
    return trimmed && !RESERVED_WORKTREE_MODES.has(trimmed) ? trimmed : null;
  };
  const rawWorkspaceId = (ws) => {
    if (typeof ws === "string") return nonReservedWorktree(ws);
    if (ws && typeof ws === "object" && "id" in ws) {
      return nonReservedWorktree(ws.id);
    }
    return null;
  };
  const stripWorktreeSelectorPrefix = (raw) => {
    const withoutPath = raw.startsWith("path:") ? raw.slice(5) : raw;
    const sepIndex = withoutPath.lastIndexOf("::/");
    return sepIndex >= 0 ? withoutPath.slice(sepIndex + 2) : withoutPath;
  };
  const worktreeBasename = (raw) => {
    if (!raw || RESERVED_WORKTREE_MODES.has(raw)) return null;
    const pathPart = stripWorktreeSelectorPrefix(raw).replace(/\/+$/, "");
    if (!pathPart) return null;
    const base = basename(pathPart);
    return base || pathPart;
  };
  const mergeDispatchMeta = (base, incoming) => ({
    agent: incoming?.agent ?? base.agent,
    model: incoming?.model ?? base.model,
    effort: incoming?.effort ?? base.effort,
    worktree: incoming?.worktree ?? base.worktree,
    branch: incoming?.branch ?? base.branch
  });
  const cachedWorktreeCatalog = () => {
    if (worktreeCatalogCache && Date.now() - worktreeCatalogCache.at < 15e3) {
      return worktreeCatalogCache.value;
    }
    const value = listWorktrees().catch(() => []);
    worktreeCatalogCache = { at: Date.now(), value };
    return value;
  };
  const enrichWorkerLaunchEvidence = async (runId, workers, opts2) => {
    const [saved, openCodeLaunches] = await Promise.all([
      launchHistory.list(runId).catch(() => /* @__PURE__ */ new Map()),
      providerSessions.listOpenCodeLaunches(runId).catch(() => [])
    ]);
    const openCodeByDispatch = /* @__PURE__ */ new Map();
    for (const launch of openCodeLaunches) {
      if (launch.runId !== runId || !launch.dispatchId || !launch.model) continue;
      const modelId = `${launch.model.providerID}/${launch.model.id}${launch.model.variant ? `#${launch.model.variant}` : ""}`;
      openCodeByDispatch.set(launch.dispatchId, {
        taskId: launch.taskId,
        model: modelId,
        workspace: launch.workspace
      });
    }
    const states = workers.map((row) => {
      const key = `${runId}:${row.taskId}:${row.dispatchId}`;
      const fleetAgent = row.projection?.launch?.agent ?? row.projection?.provider?.id ?? null;
      const fleetModel = row.projection?.launch?.model ?? row.projection?.provider?.model ?? null;
      const fleetEffort = row.projection?.launch?.effort ?? null;
      const fleetWorktree = rawWorkspaceId(row.projection?.workspace) ?? nonReservedWorktree(row.projection?.launch?.worktree) ?? nonReservedWorktree(row.resource?.worktreeId) ?? null;
      if (row.dispatchId && row.taskId && (fleetAgent || fleetModel || fleetEffort || fleetWorktree)) {
        const prevObs = observedDispatchMeta.get(key) ?? { agent: null, model: null, effort: null, worktree: null, branch: null };
        if (observedDispatchMeta.size >= 2e3 && !observedDispatchMeta.has(key)) observedDispatchMeta.clear();
        observedDispatchMeta.set(key, mergeDispatchMeta(prevObs, {
          agent: fleetAgent,
          model: fleetModel,
          effort: fleetEffort,
          worktree: fleetWorktree
        }));
      }
      const observed = row.dispatchId && row.taskId ? observedDispatchMeta.get(key) : void 0;
      const recorded = saved.get(row.dispatchId);
      const scopedRecord = recorded?.taskId === row.taskId ? recorded : null;
      const openCodeRecord = openCodeByDispatch.get(row.dispatchId);
      const scopedOpenCode = openCodeRecord?.taskId === row.taskId ? openCodeRecord : null;
      let meta = { agent: null, model: null, effort: null, worktree: null, branch: null };
      if (scopedOpenCode) {
        meta = mergeDispatchMeta(meta, { model: scopedOpenCode.model, worktree: nonReservedWorktree(scopedOpenCode.workspace) });
      }
      if (scopedRecord) {
        meta = mergeDispatchMeta(meta, {
          agent: scopedRecord.harness,
          model: scopedRecord.model ?? null,
          effort: scopedRecord.effort ?? null,
          worktree: nonReservedWorktree(scopedRecord.worktree),
          branch: scopedRecord.branch ?? null
        });
      }
      if (observed) meta = mergeDispatchMeta(meta, observed);
      meta = mergeDispatchMeta(meta, {
        agent: fleetAgent,
        model: fleetModel,
        effort: fleetEffort,
        worktree: fleetWorktree
      });
      return {
        row: { ...row },
        key,
        meta,
        hasFleetCore: Boolean(fleetAgent),
        hasWorkerShowCore: scopedRecord?.source === "worker-show",
        scopedSource: scopedRecord?.source ?? null,
        scopedWorktreeName: scopedRecord?.worktreeName ?? null,
        scopedBranch: scopedRecord?.branch ?? null
      };
    });
    const needsDetail = states.filter((entry) => {
      const { row, meta } = entry;
      if (!row.dispatchId || workerSupervision(row) !== "supervised") return false;
      return !meta.agent || !meta.model || !meta.worktree;
    });
    for (let i = 0; i < needsDetail.length; i += 6) {
      await Promise.all(needsDetail.slice(i, i + 6).map(async (entry) => {
        const { row, key } = entry;
        let cached = launchLookups.get(key);
        if (!cached || !cached.confirmed && Date.now() - cached.at > 6e4) {
          const isActive = row.dispatchStatus === "dispatched";
          const value = showWorkerDetail(row.dispatchId).then((detail) => {
            if (!detail || detail.runId !== runId || detail.taskId !== row.taskId) return null;
            const showMeta = {
              agent: detail.launch?.agent ?? detail.fleet?.projection?.launch?.agent ?? detail.fleet?.projection?.provider?.id ?? null,
              model: detail.launch?.model ?? detail.fleet?.projection?.launch?.model ?? detail.fleet?.projection?.provider?.model ?? null,
              effort: detail.launch?.effort ?? detail.fleet?.projection?.launch?.effort ?? null,
              worktree: nonReservedWorktree(detail.terminal?.worktreePath) ?? nonReservedWorktree(detail.launch?.resolvedWorktreeId) ?? rawWorkspaceId(detail.fleet?.projection?.workspace) ?? nonReservedWorktree(detail.terminalResource?.worktreeId) ?? null,
              branch: detail.terminal?.branch?.trim() || null
            };
            const complete = Boolean(showMeta.agent && showMeta.model && showMeta.worktree);
            return { verified: !isActive || complete, meta: showMeta };
          }).catch(() => null);
          cached = { at: Date.now(), value, confirmed: false };
          const cacheEntry = cached;
          void value.then((result) => {
            if (result?.verified) cacheEntry.confirmed = true;
          });
          launchLookups.set(key, cached);
          if (launchLookups.size > 2e3) launchLookups.clear();
        }
        const observed = await cached.value;
        if (!observed) return;
        const m = observed.meta;
        if (m.agent || m.model || m.effort || m.worktree || m.branch) {
          const prevObs = observedDispatchMeta.get(key) ?? { agent: null, model: null, effort: null, worktree: null, branch: null };
          if (observedDispatchMeta.size >= 2e3 && !observedDispatchMeta.has(key)) observedDispatchMeta.clear();
          observedDispatchMeta.set(key, mergeDispatchMeta(prevObs, m));
          entry.meta = mergeDispatchMeta(m, entry.meta);
          entry.hasWorkerShowCore = true;
        }
      }));
    }
    const byWorktreeLookup = /* @__PURE__ */ new Map();
    if (opts2?.resolveWorktrees && states.some((entry) => Boolean(entry.meta.worktree || !entry.scopedWorktreeName))) {
      const worktrees = await cachedWorktreeCatalog();
      for (const wt of worktrees) {
        byWorktreeLookup.set(wt.id, wt);
        if (wt.path) {
          const norm = wt.path.replace(/\/+$/, "");
          byWorktreeLookup.set(norm, wt);
          byWorktreeLookup.set(`path:${norm}`, wt);
        }
      }
    }
    return states.map((entry) => {
      const { row, meta, hasFleetCore, hasWorkerShowCore, scopedSource, scopedWorktreeName } = entry;
      let matchedWt;
      if (meta.worktree && byWorktreeLookup.size > 0) {
        const cleaned = meta.worktree.replace(/\/+$/, "");
        matchedWt = byWorktreeLookup.get(meta.worktree) ?? byWorktreeLookup.get(cleaned) ?? byWorktreeLookup.get(stripWorktreeSelectorPrefix(cleaned).replace(/\/+$/, ""));
      }
      const worktreeName = matchedWt?.displayName?.trim() || (matchedWt?.path ? worktreeBasename(matchedWt.path) : null) || scopedWorktreeName || worktreeBasename(meta.worktree) || null;
      const branch = meta.branch ?? matchedWt?.branch?.trim() ?? null;
      const hasAny = Boolean(meta.agent || meta.model || meta.effort || meta.worktree || worktreeName || branch);
      const source = hasWorkerShowCore ? "worker-show" : hasFleetCore ? "fleet" : scopedSource ?? "viewer-launch";
      return {
        ...row,
        launchEvidence: hasAny ? {
          agent: meta.agent,
          ...meta.model ? { model: meta.model } : {},
          ...meta.effort ? { effort: meta.effort } : {},
          ...meta.worktree ? { worktree: meta.worktree } : {},
          ...worktreeName ? { worktreeName } : {},
          ...branch ? { branch } : {},
          source
        } : null
      };
    });
  };
  const coordinatorStatus2 = opts.coordinatorStatus ?? coordinatorStatus;
  const loadActivity = (runId, force = false) => {
    const cached = activityCache.get(runId);
    if (!force && cached && Date.now() - cached.at < 1200) return cached.value;
    const value = (async () => {
      const status = coordinatorStatus2();
      const [tasks, page, workers, config, history] = await Promise.all([
        presentationTasks(runId),
        listRunMessagePage(runId).catch(() => ({ messages: [], window: null })),
        presentationWorkers(runId, { includeRemote: true }).then((result) => enrichWorkerLaunchEvidence(runId, result.workers)).catch(() => []),
        loadConfig(workspaceDir),
        activityJournal.listHistory(runId)
      ]);
      const gapRows = workers.filter(
        (worker) => worker.projection?.liveness?.verdict === "unverifiable" && worker.projection.liveness.reason != null && FLEET_CAPABILITY_GAP_REASONS.has(worker.projection.liveness.reason)
      ).slice(0, 6);
      const observations = /* @__PURE__ */ new Map();
      if (gapRows.length > 0) {
        const probes = await Promise.allSettled(
          gapRows.map(async (worker) => [worker.dispatchId, await showWorkerDetail(worker.dispatchId)])
        );
        for (const probe of probes) {
          if (probe.status !== "fulfilled" || !probe.value[1]?.observation) continue;
          observations.set(probe.value[0], probe.value[1].observation);
        }
      }
      return buildActivitySnapshot({
        runId,
        tasks,
        messages: page.messages,
        inboxWindow: page.window,
        workers,
        leadTaskId: config.leadTaskByRun?.[runId] ?? null,
        status,
        journal: history.events,
        persistedChecks: history.checks,
        observations
      });
    })();
    activityCache.set(runId, { at: Date.now(), value });
    value.catch(() => {
      if (activityCache.get(runId)?.value === value) activityCache.delete(runId);
    });
    return value;
  };
  const recordActivity = async (event) => {
    try {
      await activityJournal.append(event);
    } catch {
    } finally {
      activityCache.delete(event.runId);
      notifyActivitySubscribers(event.runId);
    }
  };
  const requireExecutionEnabled = async () => {
    const r = await readiness();
    if (!r.executionEnabled) {
      throw new ValidationError(r.reason ?? "Orca execution is unavailable.", "execution_disabled");
    }
  };
  const terminalMutationWithLedger = async (operation, dispatchId, run, evidence) => {
    let runId = evidence?.runId ?? null;
    let taskId = evidence?.taskId ?? null;
    if (!evidence) {
      const live = coordinatorStatus2();
      const attempt = live.running && live.runId ? live.attempts.find((a) => a.dispatchId === dispatchId) : void 0;
      runId = attempt ? live.runId : null;
      taskId = attempt?.taskId ?? null;
    }
    const requestId = newRequestId();
    await requestLedger.record({ requestId, operation, runId, taskId, dispatchId }).catch(() => {
    });
    try {
      const receipt = await run(requestId);
      const settledLocally = receipt.state === "release_unknown" ? false : true;
      await requestLedger.record({
        requestId,
        operation,
        runId,
        taskId,
        dispatchId,
        settledLocally,
        // The stop note mirrors stopCoordinator's format exactly: the
        // resume path (`resumeStoppedDispatchIds`) admits only dispatches
        // with a positively-observed `stopped` state, whichever surface
        // performed the stop.
        note: operation === "worker-abandon" && receipt.providerExecutionExited ? `viewer-observed OpenCode provider stop state: ${receipt.state}` : operation === "worker-stop" ? `viewer-observed stop state: ${receipt.state}` : `viewer-observed terminal state: ${receipt.state}`
      }).catch(() => {
      });
      return {
        requestId,
        // The receipt ECHOES the durable id: current runtimes replay the
        // `--retry-request` value back, and the viewer guarantees that echo
        // even when an older receipt omits it — the id a client (or a human)
        // cites for request-show recovery is always visible where the
        // receipt is.
        receipt: { ...receipt, requestId }
      };
    } catch (err) {
      const lost = err instanceof OrcaCliError && err.code === RESPONSE_LOST;
      await requestLedger.record({
        requestId,
        operation,
        runId,
        taskId,
        dispatchId,
        // A lost response is precisely NOT settled locally — the ledger
        // keeps the id inspectable via `request-show` instead of guessing.
        settledLocally: false,
        note: lost ? "response lost; resolve with request-show / --retry-request" : `mutation failed: ${String(err?.message ?? err)}`
      }).catch(() => {
      });
      try {
        err.requestId = requestId;
      } catch {
      }
      throw err;
    }
  };
  const viewerMutationWithLedger = async (operation, target, run, describe, scope) => {
    const requestId = newRequestId();
    await requestLedger.record({
      requestId,
      operation,
      runId: scope?.runId ?? null,
      taskId: scope?.taskId ?? null,
      dispatchId: scope?.dispatchId ?? null,
      target
    }).catch(() => {
    });
    try {
      const receipt = await run(requestId);
      const { settled, note } = describe(receipt);
      await requestLedger.record({
        requestId,
        operation,
        runId: scope?.runId ?? null,
        taskId: scope?.taskId ?? null,
        dispatchId: scope?.dispatchId ?? null,
        target,
        settledLocally: settled,
        note
      }).catch(() => {
      });
      return { requestId, receipt };
    } catch (err) {
      await requestLedger.record({
        requestId,
        operation,
        runId: scope?.runId ?? null,
        taskId: scope?.taskId ?? null,
        dispatchId: scope?.dispatchId ?? null,
        target,
        settledLocally: false,
        // An archive-hook block is not a generic mutation failure: the note
        // carries the stable "archive hook failed" marker (plus the verbatim
        // CLI message) because this row is the durable waiver evidence a
        // later `allowFailedArchiveHook` attempt must cite — and nothing
        // else may ever match that marker.
        note: isArchiveHookFailure(err) ? `archive hook failed \u2014 removal blocked, nothing was removed (${String(err?.message ?? err)})` : `mutation failed: ${String(err?.message ?? err)}`
      }).catch(() => {
      });
      try {
        err.requestId = requestId;
      } catch {
      }
      throw err;
    }
  };
  const laneRunScopeFor = (selector, status) => {
    if (!status.running || !status.runId) return null;
    return status.worktreeLanes.some((lane) => lane.selector === selector) ? status.runId : null;
  };
  const revalidateWorkerForMutation = async (dispatchId, runId) => {
    const detail = await showWorkerDetail(dispatchId);
    if (!detail) {
      return {
        ok: false,
        status: 404,
        body: { error: "no such worker dispatch", code: "worker_not_found" }
      };
    }
    if (!detail.runId || detail.runId !== runId) {
      return {
        ok: false,
        status: 404,
        body: {
          error: "worker belongs to a different Run",
          code: "worker_run_mismatch"
        }
      };
    }
    return { ok: true, detail };
  };
  const app2 = (0, import_express.default)();
  app2.use((req, res, next) => {
    if (!/^(?:localhost|127\.0\.0\.1)(?::[0-9]{1,5})?$/i.test(req.get("host") ?? "")) {
      res.status(403).json({ error: "Viewer requires a loopback Host header.", code: "invalid_host" });
      return;
    }
    res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
    res.setHeader("X-Frame-Options", "DENY");
    next();
  });
  app2.use(import_express.default.json({ limit: "2mb" }));
  app2.get("/api/session", (_req, res) => {
    res.setHeader("Cache-Control", "no-store");
    res.json({ token: policy2.token, allowCustomCommands: policy2.allowCustomCommands, platform: process.platform });
  });
  app2.get("/api/health", (_req, res) => {
    res.json({ ok: true, workspace: workspaceDir, worktree });
  });
  app2.get(
    "/api/readiness",
    route(async (_req, res) => {
      res.json(await readiness());
    })
  );
  app2.get(
    "/api/runs",
    route(async (_req, res) => {
      const configuredRunId = (await loadConfig(workspaceDir)).runId;
      const explicitIds = configuredRunId ? [...viewerCreatedRunIds, configuredRunId] : [...viewerCreatedRunIds];
      res.json({ runs: await listWorkspaceRuns(workspaceDir, explicitIds) });
    })
  );
  app2.post(
    "/api/runs",
    requireToken(policy2),
    route(async (req, res) => {
      const objective = validateText(req.body?.objective, "objective", 2e4);
      if (!objective) {
        res.status(400).json({ error: "objective required" });
        return;
      }
      await requireExecutionEnabled();
      const handle = await createTempCoordinatorTerminal(worktree);
      try {
        const run = await createRun(objective, handle);
        viewerCreatedRunIds.add(run.id);
        res.json({ run });
      } finally {
        await closeTerminal(handle);
      }
    })
  );
  app2.get(
    "/api/dag",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const [tasks, gates] = await Promise.all([presentationTasks(runId), presentationGates(runId)]);
      const { nodes, edges, hierarchy } = tasksToDag(tasks);
      const coord = coordinatorStatus2();
      const occupancy = coord.running && coord.runId === runId && coord.maxConcurrency !== null ? { busy: coord.busy, maxConcurrency: coord.maxConcurrency } : null;
      const { readyWave, readiness: readiness2 } = explainReadiness(tasks, gates, occupancy);
      res.json({
        runId,
        nodes,
        edges,
        hierarchy,
        gates,
        readyWave,
        readiness: readiness2,
        generatedAt: Date.now()
      });
    })
  );
  app2.get(
    "/api/terminals",
    route(async (_req, res) => {
      res.json({ terminals: await listTerminals() });
    })
  );
  app2.get(
    "/api/environments",
    route(async (_req, res) => {
      const environments = (await listEnvironments()).map((env) => ({
        ...env,
        peer: parsePeerCapabilities(env.capabilities),
        // Canonical projection of the same advertisement (epic O1): the UI's
        // readable matrix, while `peer` keeps gating the remote controls.
        runtimeCapabilities: describeRuntimeCapabilities(env.capabilities)
      }));
      res.json({ environments });
    })
  );
  app2.get(
    "/api/environments/:envId/worktrees",
    route(async (req, res) => {
      const envId = validateEnvironmentSelector(req.params.envId, "environment");
      const repo = req.query.repo ? validateSelector(req.query.repo, "repo") : void 0;
      res.json({ worktrees: await listWorktrees(envId, { repo, limit: 100 }) });
    })
  );
  app2.get(
    "/api/environments/:envId/repos",
    route(async (req, res) => {
      const envId = validateEnvironmentSelector(req.params.envId, "environment");
      res.json({ repos: await listRepos(envId) });
    })
  );
  app2.get(
    "/api/environments/:envId/projects",
    route(async (req, res) => {
      const envId = validateEnvironmentSelector(req.params.envId, "environment");
      res.json({ projects: await listProjects(envId) });
    })
  );
  const discoveryRead = async (read) => {
    try {
      return await read();
    } catch (err) {
      const code = err instanceof OrcaCliError && typeof err.code === "string" ? err.code : "discovery_failed";
      throw new OrcaCliError(`${code}: ${String(err?.message ?? err)}`, code);
    }
  };
  app2.get(
    "/api/worktrees",
    route(async (_req, res) => {
      res.json({ worktrees: await discoveryRead(() => listWorktrees()) });
    })
  );
  app2.get(
    "/api/repos",
    route(async (_req, res) => {
      res.json({ repos: await discoveryRead(() => listRepos()) });
    })
  );
  app2.get(
    "/api/worktrees/:worktreeId",
    route(async (req, res) => {
      const selector = validateSelector(req.params.worktreeId, "worktree");
      const row = await showWorktree(selector);
      if (!row) {
        res.status(404).json({ error: "no such worktree", code: "worktree_not_found" });
        return;
      }
      res.json({ worktree: row });
    })
  );
  app2.get(
    "/api/runs/page",
    route(async (req, res) => {
      const cursor = validateText(req.query.cursor, "cursor", 512);
      const configuredRunId = (await loadConfig(workspaceDir)).runId;
      const limitValue = req.query.limit === void 0 ? 100 : Number(req.query.limit);
      if (!Number.isInteger(limitValue) || limitValue < 1 || limitValue > 100) throw new ValidationError("limit must be an integer from 1 to 100", "invalid_pagination");
      const args = ["orchestration", "run-list", "--limit", String(limitValue)];
      if (cursor) args.push("--cursor", cursor);
      const receipt = await runOrca(args);
      if (!Array.isArray(receipt.runs)) {
        throw new OrcaCliError("run-list returned an invalid receipt: runs must be an array", "invalid_pagination");
      }
      const rawNext = receipt.nextCursor;
      if (rawNext !== null && rawNext !== void 0 && typeof rawNext !== "string") {
        throw new OrcaCliError("run-list returned an invalid cursor", "invalid_pagination");
      }
      const nextCursor = typeof rawNext === "string" && rawNext.length ? rawNext : null;
      const candidates = receipt.runs.filter((r) => r && typeof r.id === "string" && r.legacy !== 1);
      const marker = `::${workspaceDir}@@`;
      const owned = new Array(candidates.length).fill(false);
      let nextIndex = 0;
      await Promise.all(Array.from({ length: Math.min(8, candidates.length) }, async () => {
        while (nextIndex < candidates.length) {
          const index = nextIndex++;
          const run = candidates[index];
          if (viewerCreatedRunIds.has(run.id) || configuredRunId === run.id) {
            owned[index] = true;
            continue;
          }
          try {
            owned[index] = (await listTasks(run.id, { brief: true })).some((task) => typeof task.created_by_process_incarnation === "string" && task.created_by_process_incarnation.includes(marker));
          } catch {
          }
        }
      }));
      res.json({ runs: candidates.filter((_run, index) => owned[index]), nextCursor });
    })
  );
  app2.get(
    "/api/runs/:runId",
    route(async (req, res) => {
      const runId = validateId(req.params.runId, "run id");
      if (!runId) {
        res.status(400).json({ error: "run id required" });
        return;
      }
      const runResult = await showRun(runId);
      const run = runResult?.run;
      if (!run) {
        res.status(404).json({ error: "no such run", code: "run_not_found" });
        return;
      }
      const configuredRunId = (await loadConfig(workspaceDir)).runId;
      const marker = `::${workspaceDir}@@`;
      let taskEvidence = "none";
      try {
        const tasks = await listTasks(runId, { brief: true });
        taskEvidence = tasks.some(
          (task) => typeof task.created_by_process_incarnation === "string" && task.created_by_process_incarnation.includes(marker)
        ) ? "creator_marker" : tasks.length > 0 ? "none" : (
          // An empty Run has no tasks to prove anything — the explicit
          // inclusions below are the only local evidence available.
          "none"
        );
      } catch {
        taskEvidence = "unreadable";
      }
      const owned = taskEvidence === "creator_marker" || viewerCreatedRunIds.has(runId) || configuredRunId === runId;
      res.json({
        run,
        workspace: {
          // True only on positive evidence; an unreadable Task read keeps
          // ownership UNKNOWN (false here, with the reason spelled out).
          owned,
          evidence: taskEvidence === "creator_marker" ? "task creator marker" : viewerCreatedRunIds.has(runId) ? "created by this viewer" : configuredRunId === runId ? "named in workspace config" : taskEvidence === "unreadable" ? "task evidence unreadable" : "no task in this Run was created from this workspace"
        }
      });
    })
  );
  app2.post(
    "/api/launch-preview",
    requireToken(policy2),
    route(async (req, res) => {
      const runId = validateId(req.body?.runId, "runId");
      if (!runId) throw new ValidationError("runId required", "run_required");
      const saved = await loadConfig(workspaceDir);
      const defaultHarness = req.body?.defaultHarness === void 0 ? validateHarness(saved.defaultHarness || "claude", policy2) : validateHarness(req.body.defaultHarness, policy2);
      const defaultOpenCodeUi = req.body?.defaultOpenCodeUi === void 0 ? saved.defaultOpenCodeUi ?? "auto" : validateOpenCodeUi(req.body.defaultOpenCodeUi);
      const openCodeUiByTask = validateOpenCodeUiTaskMap(req.body?.openCodeUiByTask) ?? saved.openCodeUiByTask ?? {};
      const harnessByTask = validateTaskValueMap(
        req.body?.harnessByTask ?? saved.harnessByTask,
        "harnessByTask",
        { maxKeys: 500, valueKind: "harness" },
        (value) => validateHarness(value, policy2)
      ) ?? {};
      const modelByTask = validateTaskValueMap(
        req.body?.modelByTask ?? saved.modelByTask,
        "modelByTask",
        { maxKeys: 500, valueKind: "model" },
        (value, key) => validateModel(value, harnessByTask[key] ?? defaultHarness)
      ) ?? {};
      const effortByTask = validateTaskValueMap(
        req.body?.effortByTask ?? saved.effortByTask,
        "effortByTask",
        { maxKeys: 500, valueKind: "effort" },
        (value, key) => {
          assertNativePresetConstraints(harnessByTask[key] ?? defaultHarness, {
            model: modelByTask[key],
            effort: String(value)
          });
          return validateEffort(value);
        }
      ) ?? {};
      for (const taskId of Object.keys(effortByTask)) {
        if (!modelByTask[taskId]) throw new ValidationError(
          `effortByTask["${taskId}"] requires a model for the same task`,
          "effort_requires_model"
        );
      }
      const environmentByTask = validateEnvironmentTaskMap(req.body?.environmentByTask ?? saved.environmentByTask, "environmentByTask") ?? {};
      const placementByTask = validatePlacementTaskMap(req.body?.placementByTask ?? saved.placementByTask, "placementByTask") ?? {};
      const worktreeLanes = validateWorktreeLaneMap(req.body?.worktreeLanes ?? saved.worktreeLanes, "worktreeLanes") ?? {};
      const laneByTask = validateLaneTaskMap(req.body?.laneByTask ?? saved.laneByTask, "laneByTask") ?? {};
      assertLaneReferences(laneByTask, worktreeLanes);
      assertLanePlacementDisjoint(placementByTask, laneByTask);
      assertEnvironmentPlacementCompatibility(environmentByTask, placementByTask);
      const tasks = await listTasks(runId);
      for (const task of tasks) {
        const issue = validateMergeInputProtocol(task);
        if (issue) throw new OrcaCliError(`Invalid committed Stage plan: ${issue}`, "invalid_stage_plan");
      }
      const nativeCandidates = tasks.filter((task) => !["completed", "failed", "dispatched"].includes(task.status) && isNativeFreshPreset(harnessByTask[task.id] ?? defaultHarness));
      const nativeInventory = nativeCandidates.length ? await listWorkers(runId, { includeRemote: true }) : { workers: [], partialHostErrors: [] };
      if (nativeInventory.partialHostErrors.length) throw new OrcaCliError("Worker inventory is incomplete", "inventory_incomplete");
      const nativeFleet = nativeInventory.workers;
      const nativeTasks = nativeCandidates.filter((task) => !nativeFleet.some((row) => row.runId === runId && row.taskId === task.id && (row.dispatchStatus === "pending" || row.dispatchStatus === "dispatched")));
      const nativeReadiness = nativeTasks.length ? await checkReadiness(true) : void 0;
      for (const task of nativeTasks) {
        await assertNativePresetSupport(harnessByTask[task.id] ?? defaultHarness, {
          model: modelByTask[task.id],
          effort: effortByTask[task.id],
          environment: environmentByTask[task.id],
          lane: laneByTask[task.id],
          placement: laneByTask[task.id] ? worktreeLanes[laneByTask[task.id]]?.placement : placementByTask[task.id]
        }, nativeReadiness);
      }
      for (const [taskId, ui] of Object.entries(openCodeUiByTask)) {
        const task = tasks.find((candidate) => candidate.id === taskId);
        if (!task || ["completed", "failed", "dispatched"].includes(task.status)) continue;
        if ((harnessByTask[taskId] ?? defaultHarness) === "opencode" && ui !== "auto") {
          assertOpenCodeUiPlacement(ui, environmentByTask[taskId], laneByTask[taskId], placementByTask[taskId]);
        }
      }
      if ((defaultHarness === "opencode" || Object.values(harnessByTask).includes("opencode")) && (defaultOpenCodeUi !== "auto" || Object.values(openCodeUiByTask).some((value) => value !== "auto"))) {
        for (const task of tasks) {
          if (["completed", "failed", "dispatched"].includes(task.status)) continue;
          if ((harnessByTask[task.id] ?? defaultHarness) === "opencode") {
            assertOpenCodeUiPlacement(
              openCodeUiByTask[task.id] ?? defaultOpenCodeUi,
              environmentByTask[task.id],
              laneByTask[task.id],
              placementByTask[task.id]
            );
          }
        }
      }
      const runtimeNeeded = tasks.some(
        (task) => (harnessByTask[task.id] ?? defaultHarness) === "opencode"
      );
      const runtimeStatus = runtimeNeeded ? await runOrca(["status"]) : null;
      const runtimeVersion = runtimeStatus?.runtime?.appVersion ?? null;
      const capabilities = runtimeStatus?.runtime?.capabilities ?? [];
      const codexFreshCandidate = process.platform === "linux" && tasks.some((task) => {
        const laneId = laneByTask[task.id];
        const placement = laneId ? worktreeLanes[laneId]?.placement : placementByTask[task.id];
        return (harnessByTask[task.id] ?? defaultHarness) === "codex" && !environmentByTask[task.id] && (placement?.kind === "new-child" || placement?.kind === "new-top-level");
      });
      const certifiedCodexFresh = codexFreshCandidate && await canUseNativeCodexFreshWorktree();
      const entries = tasks.map((task) => {
        const harness = harnessByTask[task.id] ?? defaultHarness;
        const model = modelByTask[task.id] ?? null;
        const effort = effortByTask[task.id] ?? null;
        const laneId = laneByTask[task.id] ?? null;
        const placement = laneId ? worktreeLanes[laneId].placement : placementByTask[task.id] ?? { kind: "current" };
        const environment = environmentByTask[task.id] ?? null;
        const ui = openCodeUiByTask[task.id] ?? defaultOpenCodeUi;
        const route2 = harness === "opencode" ? resolveOpenCodeRoute({
          ui,
          model,
          effort,
          environment,
          lane: Boolean(laneId),
          placement,
          reuseTerminal: null,
          platform: process.platform,
          runtimeVersion,
          nativeDefaultVersion: MIN_NATIVE_OPENCODE_VERSION,
          nativeModelVersion: MIN_NATIVE_OPENCODE_MODEL_VERSION,
          capabilities,
          tuiOptIn: process.env.ORCA_DAG_OPENCODE_TUI === "1"
        }) : KNOWN_HARNESSES.has(harness) ? {
          route: "supervised",
          reason: harness === "codex" && certifiedCodexFresh && !environment && (placement.kind === "new-child" || placement.kind === "new-top-level") ? "Certified local Codex new-worktree launches use Orca's native supervised worker path; for a lane this applies to its seed. Readiness is rechecked at launch." : "The selected harness uses the supervised worker path; compatibility depends on its Orca launcher.",
          reasonCode: "supervisedCaveat",
          limitations: []
        } : environment || laneId || placement.kind !== "current" ? {
          route: "unsupported",
          reason: "Custom commands use the local legacy path and cannot honor this worker placement.",
          reasonCode: "customCommandPlacementUnsupported",
          limitations: ["noFallback"]
        } : {
          route: "custom-command",
          reason: "Custom command uses the viewer's local legacy terminal path.",
          reasonCode: "customCommandCaveat",
          limitations: []
        };
        return {
          taskId: task.id,
          status: task.status,
          harness,
          model,
          effort,
          placement: {
            environment,
            laneId,
            kind: placement.kind,
            selector: placement.kind === "existing" ? placement.selector : null
          },
          route: route2.route,
          reason: route2.reason,
          reasonCode: route2.reasonCode,
          limitations: route2.limitations
        };
      });
      const unsupported = entries.find(
        (entry) => !["completed", "failed", "dispatched"].includes(entry.status) && entry.route === "unsupported"
      );
      if (unsupported) {
        throw new ValidationError(
          `Task ${unsupported.taskId} cannot honor the selected launch route: ${unsupported.reason}`,
          "invalid_placement"
        );
      }
      res.json({
        runId,
        tasks: entries,
        caveat: "Read-only plan preview; it is not proof of model availability or successful startup. External test runtimes/accounts/resources are operator or preparation-Task prerequisites, not worker-placement fields."
      });
    })
  );
  app2.post(
    "/api/run",
    requireToken(policy2),
    route(async (req, res) => {
      if (coordinatorStatus().phase === "stopping") {
        throw new OrcaCliError("Wait for Stop to finish before starting a Run.", "coordinator_conflict");
      }
      const runId = validateId(req.body?.runId, "runId");
      if (!runId) {
        res.status(400).json({ error: "runId required", code: "run_required" });
        return;
      }
      const resumeInput = req.body?.resumeBlocked;
      let resumeBlocked;
      if (resumeInput !== void 0) {
        if (!resumeInput || typeof resumeInput !== "object" || Array.isArray(resumeInput) || Object.keys(resumeInput).some((key) => key !== "dispatchId" && key !== "allowUnknownProvider") || typeof resumeInput.allowUnknownProvider !== "boolean") {
          throw new ValidationError("resumeBlocked requires an exact dispatchId and explicit provider decision");
        }
        const dispatchId = validateId(resumeInput.dispatchId, "dispatchId");
        if (!dispatchId) throw new ValidationError("resumeBlocked.dispatchId is required");
        resumeBlocked = { dispatchId, allowUnknownProvider: resumeInput.allowUnknownProvider };
      }
      if (resumeBlocked && coordinatorStatus().running) {
        throw new OrcaCliError("Stop the current viewer coordinator before retrying a blocked Stage.", "resume_not_allowed");
      }
      const storedConfig = await loadConfig(workspaceDir);
      const defaultHarness = validateHarness(req.body?.defaultHarness ?? storedConfig.defaultHarness ?? "claude", policy2);
      const defaultOpenCodeUi = req.body?.defaultOpenCodeUi === void 0 ? storedConfig.defaultOpenCodeUi ?? "auto" : validateOpenCodeUi(req.body.defaultOpenCodeUi);
      const openCodeUiByTask = validateOpenCodeUiTaskMap(req.body?.openCodeUiByTask) ?? storedConfig.openCodeUiByTask ?? {};
      const harnessByTask = validateTaskValueMap(
        req.body?.harnessByTask ?? storedConfig.harnessByTask,
        "harnessByTask",
        { maxKeys: 500, valueKind: "harness" },
        (v) => validateHarness(v, policy2)
      );
      const modelByTask = validateTaskValueMap(
        req.body?.modelByTask ?? storedConfig.modelByTask,
        "modelByTask",
        { maxKeys: 500, valueKind: "model" },
        (v, key) => validateModel(v, harnessByTask?.[key] ?? defaultHarness)
      );
      const effortByTask = validateTaskValueMap(
        req.body?.effortByTask ?? storedConfig.effortByTask,
        "effortByTask",
        { maxKeys: 500, valueKind: "effort" },
        (v, key) => {
          assertNativePresetConstraints(harnessByTask?.[key] ?? defaultHarness, {
            model: modelByTask?.[key],
            effort: String(v)
          });
          return validateEffort(v);
        }
      );
      if (effortByTask) {
        const models = modelByTask ?? {};
        for (const taskId of Object.keys(effortByTask)) {
          if (!models[taskId]) {
            throw new ValidationError(
              `effortByTask["${taskId}"] requires a model for the same task \u2014 per-task effort applies only to a selected model.`,
              "effort_requires_model"
            );
          }
        }
      }
      const maxConcurrency = validateConcurrency(req.body?.maxConcurrency);
      const environmentByTask = validateEnvironmentTaskMap(req.body?.environmentByTask ?? storedConfig.environmentByTask, "environmentByTask");
      const placementByTask = validatePlacementTaskMap(req.body?.placementByTask ?? storedConfig.placementByTask, "placementByTask");
      const worktreeLanes = validateWorktreeLaneMap(req.body?.worktreeLanes ?? storedConfig.worktreeLanes, "worktreeLanes");
      const laneByTask = validateLaneTaskMap(req.body?.laneByTask ?? storedConfig.laneByTask, "laneByTask");
      assertLaneReferences(laneByTask, worktreeLanes);
      assertLanePlacementDisjoint(placementByTask, laneByTask);
      assertEnvironmentPlacementCompatibility(environmentByTask, placementByTask);
      if ((defaultHarness === "opencode" || Object.values(harnessByTask ?? {}).includes("opencode")) && (defaultOpenCodeUi !== "auto" || Object.values(openCodeUiByTask).some((v) => v !== "auto"))) {
        for (const task of await listTasks(runId)) {
          if (["completed", "failed", "dispatched"].includes(task.status)) continue;
          if ((harnessByTask?.[task.id] ?? defaultHarness) === "opencode") {
            assertOpenCodeUiPlacement(
              openCodeUiByTask[task.id] ?? defaultOpenCodeUi,
              environmentByTask?.[task.id],
              laneByTask?.[task.id],
              placementByTask?.[task.id]
            );
          }
        }
      }
      const retainByTask = validateBooleanTaskMap(req.body?.retainByTask, "retainByTask") ?? (await loadConfig(workspaceDir)).retainByTask;
      await requireExecutionEnabled();
      const resumeStoppedDispatchIds = (resumeBlocked ? [] : await requestLedger.list().catch(() => [])).filter(
        (record3) => (record3.operation === "worker-stop" && record3.note === "viewer-observed stop state: stopped" || record3.operation === "worker-abandon" && record3.note === "viewer-observed OpenCode provider stop state: abandoned") && record3.runId === runId && record3.settledLocally === true && record3.dispatchId
      ).map((record3) => record3.dispatchId);
      await startCoordinator({
        runId,
        harnessByTask: harnessByTask ?? {},
        modelByTask: modelByTask ?? {},
        effortByTask: effortByTask ?? {},
        defaultHarness,
        defaultOpenCodeUi,
        openCodeUiByTask,
        maxConcurrency,
        worktree,
        retainByTask: retainByTask ?? void 0,
        environmentByTask: environmentByTask ?? void 0,
        placementByTask: placementByTask ?? void 0,
        worktreeLanes: worktreeLanes ?? void 0,
        laneByTask: laneByTask ?? void 0,
        resumeStoppedDispatchIds,
        resumeBlocked,
        onActivity: async (event) => {
          await recordActivity(
            createViewerActivity({
              runId: event.runId,
              kind: event.kind,
              title: event.title,
              summary: event.summary,
              detail: event.detail,
              taskId: event.taskId,
              dispatchId: event.dispatchId
            })
          );
        },
        onCheck: async (receipt) => {
          await activityJournal.appendCheck(runId, receipt);
          activityCache.delete(runId);
          notifyActivitySubscribers(runId);
        },
        // Phase 5: the coordinator's mutation requests (worker-start/release/
        // retain/stop) land in the durable ledger — best-effort, metadata
        // only, so every `--retry-request` id stays inspectable via
        // `request-show` even after a response loss or viewer restart.
        onRequestRecord: (meta) => requestLedger.record(meta)
      });
      await recordActivity(
        createViewerActivity({
          runId,
          kind: "dispatch_started",
          title: "Coordinator started this Run",
          summary: `Scheduling ready stages with up to ${maxConcurrency} worker${maxConcurrency === 1 ? "" : "s"}.`
        })
      );
      res.json({ ok: true, ...coordinatorStatus2() });
    })
  );
  app2.post(
    "/api/run-stop",
    requireToken(policy2),
    route(async (_req, res) => {
      const before = coordinatorStatus2();
      const report = await stopCoordinator();
      if (before.runId) {
        await recordActivity(
          createViewerActivity({
            runId: before.runId,
            kind: "status",
            title: "Coordinator stopped this Run",
            summary: report.clean ? "Every worker and coordinator resource reached a known state." : "Some cleanup outcomes remain unknown.",
            severity: report.clean ? "info" : "warning"
          })
        );
      }
      res.json({ ok: true, clean: report.clean, results: report.results });
    })
  );
  app2.get("/api/run-status", (_req, res) => {
    res.json(coordinatorStatus2());
  });
  const exactSessionScope = async (runId, taskId, dispatchId) => {
    const [tasks, inventory] = await Promise.all([
      listTasks(runId),
      listWorkers(runId, { includeRemote: true })
    ]);
    if (inventory.partialHostErrors.length) throw new OrcaCliError("Worker inventory is incomplete", "inventory_incomplete");
    const workers = inventory.workers;
    const task = tasks.find((candidate) => candidate.id === taskId && candidate.run_id === runId);
    const row = workers.find(
      (candidate) => candidate.runId === runId && candidate.taskId === taskId && candidate.dispatchId === dispatchId
    );
    if (!task || !row) {
      throw new OrcaCliError(
        "The Run, Task and Dispatch binding was not found together in Orca's worker history.",
        "session_binding_mismatch"
      );
    }
    let workspace = typeof row.projection?.workspace === "string" ? row.projection.workspace : null;
    let host = row.projection?.host ? `${row.projection.host.kind}:${row.projection.host.id}` : null;
    if (!workspace || !isAbsolute2(workspace) || !host) {
      const detail = await showWorkerDetail(dispatchId).catch(() => null);
      if (detail?.runId === runId && detail.taskId === taskId && detail.observation?.exactWorker === true) {
        if (!workspace || !isAbsolute2(workspace)) workspace = detail.terminal?.worktreePath ?? null;
        if (!host) {
          const observedHost = detail.terminal?.executionHostId ?? null;
          host = observedHost === "local" ? "local:local" : observedHost;
        }
      }
    }
    if (!workspace || !isAbsolute2(workspace) || !host) {
      throw new OrcaCliError(
        "Orca has not reported the exact workspace and execution host for this Dispatch; session binding is held until that evidence is available.",
        "session_location_unverifiable"
      );
    }
    return { row, workspace: normalize2(workspace), host };
  };
  app2.get(
    "/api/session-bindings",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      res.json({ bindings: await providerSessions.list(runId) });
    })
  );
  app2.put(
    "/api/session-bindings/:dispatchId",
    requireToken(policy2),
    route(async (req, res) => {
      const runId = validateId(req.body?.runId, "runId");
      const taskId = validateId(req.body?.taskId, "taskId");
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      const harness = validateText(req.body?.harness, "harness", 32);
      const sessionId = validateText(req.body?.sessionId, "sessionId", 256);
      if (!runId || !taskId || !dispatchId || !sessionId || harness !== "claude" && harness !== "codex" && harness !== "opencode") {
        throw new ValidationError("runId, taskId, dispatchId, supported harness, and exact sessionId are required");
      }
      if (!/^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/.test(sessionId)) {
        throw new ValidationError("sessionId must be one provider-issued token without whitespace");
      }
      const { row, workspace, host } = await exactSessionScope(runId, taskId, dispatchId);
      const observedHarness = row.projection?.provider?.id ?? row.projection?.launch?.agent ?? null;
      if (observedHarness && ["claude", "codex", "opencode"].includes(observedHarness) && observedHarness !== harness) {
        throw new OrcaCliError("The selected harness disagrees with Orca's Dispatch record.", "session_binding_mismatch");
      }
      const proposed = {
        runId,
        taskId,
        dispatchId,
        harness,
        sessionId,
        workspace,
        host,
        source: "manual"
      };
      const existing = await providerSessions.get({ runId, taskId, dispatchId });
      if (existing && (existing.harness !== harness || existing.sessionId !== sessionId || existing.workspace !== workspace || existing.host !== host)) {
        throw new OrcaCliError(
          "This Dispatch is already bound to another provider identity; a verified handoff is required before changing it.",
          "session_binding_mismatch"
        );
      }
      const binding = await providerSessions.bind(proposed);
      res.json({ binding });
    })
  );
  app2.post(
    "/api/session-bindings/:dispatchId/probe",
    requireToken(policy2),
    route(async (req, res) => {
      const runId = validateId(req.body?.runId, "runId");
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!runId || !dispatchId) throw new ValidationError("runId and dispatchId are required");
      const binding = (await providerSessions.list(runId)).find((entry) => entry.dispatchId === dispatchId);
      if (!binding) {
        res.status(404).json({ error: "no session binding for this Dispatch", code: "session_binding_not_found" });
        return;
      }
      const { workspace, host } = await exactSessionScope(runId, binding.taskId, dispatchId);
      if (binding.workspace !== workspace || binding.host !== host) {
        throw new OrcaCliError(
          "The Dispatch execution location changed since its session was bound; probe refused.",
          "session_location_mismatch"
        );
      }
      res.json({ observation: await providerSessions.probe(binding) });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/resolve-blocked",
    requireToken(policy2),
    route(async (req, res) => {
      await requireExecutionEnabled();
      const runId = validateId(req.body?.runId, "runId");
      const dispatchId = validateId(req.params.dispatchId, "dispatchId");
      const result = validateText(req.body?.result, "result", 2e3);
      if (!runId || !dispatchId || !result || result.trim().length < 8 || req.body?.acknowledgeUnknownProvider !== true) {
        throw new ValidationError("runId, reviewed result, and explicit provider-risk acknowledgement are required");
      }
      const live = coordinatorStatus();
      if (live.running) {
        throw new OrcaCliError("Stop the viewer coordinator before manually resolving a blocked Stage.", "resume_not_allowed");
      }
      const [tasks, inventory, gates, bindings] = await Promise.all([
        listTasks(runId),
        listWorkers(runId, { includeRemote: true }),
        listGates(runId),
        providerSessions.list(runId)
      ]);
      if (inventory.partialHostErrors.length) throw new OrcaCliError("Worker inventory is incomplete", "inventory_incomplete");
      const rows = inventory.workers;
      const row = rows.find((item) => item.runId === runId && item.dispatchId === dispatchId);
      const task = tasks.find((item) => item.id === row?.taskId && item.run_id === runId);
      if (!row || !task || task.status !== "blocked" || row.dispatchStatus !== "failed" || row.projection?.liveness?.verdict !== "exited" || rows.some((item) => item.taskId === task.id && item.dispatchStatus === "dispatched") || gates.some((gate) => gate.taskId === task.id && gate.status === "pending")) {
        throw new OrcaCliError("The selected Stage is not a settled, gate-free blocked Task.", "resume_not_allowed");
      }
      const detail = await showWorkerDetail(dispatchId);
      const selectedAt = Date.parse(detail?.dispatch?.dispatchedAt ?? "");
      const siblingDetails = await Promise.all(
        rows.filter((item) => item.taskId === task.id && item.dispatchId !== dispatchId).map((item) => showWorkerDetail(item.dispatchId))
      );
      if (detail?.runId !== runId || detail.taskId !== task.id || !Number.isFinite(selectedAt) || siblingDetails.some(
        (sibling) => !sibling?.dispatch?.dispatchedAt || !Number.isFinite(Date.parse(sibling.dispatch.dispatchedAt)) || Date.parse(sibling.dispatch.dispatchedAt) >= selectedAt
      )) {
        throw new OrcaCliError("A newer or unverifiable Dispatch exists for this Stage.", "resume_not_allowed");
      }
      const binding = bindings.find((item) => item.dispatchId === dispatchId && item.taskId === task.id);
      if (binding) {
        const observation = await providerSessions.probe(binding);
        if (observation.status === "active" || observation.status === "idle") {
          throw new OrcaCliError("The exact provider session is still active or idle; resolve its work first.", "resume_not_allowed");
        }
      }
      await asCoordinator(
        runId,
        worktree,
        async (from) => {
          const [freshTasks, freshInventory, freshGates] = await Promise.all([
            listTasks(runId),
            listWorkers(runId, { includeRemote: true }),
            listGates(runId)
          ]);
          const freshTask = freshTasks.find((item) => item.id === task.id && item.run_id === runId);
          const freshRow = freshInventory.workers.find((item) => item.dispatchId === dispatchId);
          const previousIds = new Set(rows.filter((item) => item.taskId === task.id).map((item) => item.dispatchId));
          if (freshInventory.partialHostErrors.length || freshTask?.status !== "blocked" || freshRow?.taskId !== task.id || freshRow.dispatchStatus !== "failed" || freshRow.projection?.liveness?.verdict !== "exited" || freshInventory.workers.some((item) => item.taskId === task.id && (!previousIds.has(item.dispatchId) || item.dispatchStatus === "dispatched" || item.dispatchStatus === "pending")) || freshGates.some((gate) => gate.taskId === task.id && gate.status === "pending")) {
            throw new OrcaCliError("Stage evidence changed while taking control.", "resume_not_allowed");
          }
          if (binding) {
            const observation = await providerSessions.probe(binding);
            if (observation.status === "active" || observation.status === "idle") {
              throw new OrcaCliError("The exact provider session is still active or idle.", "resume_not_allowed");
            }
          }
          return taskUpdate(task.id, "completed", runId, from, JSON.stringify(result.trim()));
        },
        req.body?.coordinatorControl
      );
      await recordActivity(createViewerActivity({
        runId,
        kind: "recovery",
        title: "Blocked Stage completed by operator",
        summary: `Reviewed result recorded for ${task.id}; historical Dispatch ${dispatchId} remains failed.`,
        taskId: task.id,
        dispatchId
      })).catch(() => {
      });
      res.json({ taskId: task.id, dispatchId, status: "completed" });
    })
  );
  app2.get(
    "/api/worktree-lanes",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const status = coordinatorStatus2();
      const scoped = status.running && status.runId === runId;
      res.json({
        runId,
        running: scoped,
        lanes: scoped ? status.worktreeLanes : []
      });
    })
  );
  const requireLiveLane = (laneId) => {
    if (!laneId) {
      throw new ValidationError("lane id required", "invalid_input");
    }
    const status = coordinatorStatus2();
    if (!status.running || !status.runId) {
      throw new OrcaCliError(
        "Coordinator is not running \u2014 workspace lanes exist only while this viewer coordinates a Run.",
        "not_running"
      );
    }
    const lane = status.worktreeLanes.find((candidate) => candidate.laneId === laneId);
    if (!lane) {
      throw new OrcaCliError(
        `No lane ${laneId} is tracked for the live Run ${status.runId}.`,
        "lane_not_found"
      );
    }
    return { status, runId: status.runId, lane };
  };
  const laneReviewSelector = (lane) => {
    if (lane.selector) return lane.selector;
    if (lane.path) return `path:${lane.path}`;
    throw new OrcaCliError(
      `Lane ${lane.laneId} has no positively identified workspace \u2014 nothing will be opened in a guessed one.`,
      "lane_unverifiable"
    );
  };
  app2.post(
    "/api/worktree-lanes/:laneId/open-changed",
    requireToken(policy2),
    route(async (req, res) => {
      const laneId = validateId(req.params.laneId, "lane id");
      const modeRaw = validateText(req.body?.mode, "mode", 8);
      if (modeRaw !== "files" && modeRaw !== "diff") {
        throw new ValidationError(
          `mode must be "files" or "diff" (got ${JSON.stringify(modeRaw)})`,
          "invalid_mode"
        );
      }
      const mode = modeRaw === "diff" ? "diff" : "edit";
      const { runId, lane } = requireLiveLane(laneId);
      const selector = validateSelector(laneReviewSelector(lane), "selector");
      const { requestId } = await viewerMutationWithLedger(
        "file-open-changed",
        selector,
        () => openWorkspaceChangedFiles({ mode, worktree: selector }),
        () => ({ settled: true, note: `opened changed files (mode: ${mode})` }),
        { runId }
      );
      await recordActivity(
        createViewerActivity({
          runId,
          kind: "file_review",
          title: `Opened the lane's ${modeRaw === "diff" ? "diff" : "changed files"}`,
          summary: `Lane ${laneId} \u2192 ${selector} (mode: ${mode}).`,
          requestId
        })
      );
      res.json({ ok: true, requestId, receipt: { laneId, workspace: selector, note: null, requestId } });
    })
  );
  app2.post(
    "/api/worktree-lanes/:laneId/remove",
    requireToken(policy2),
    route(async (req, res) => {
      const laneId = validateId(req.params.laneId, "lane id");
      const confirm = typeof req.body?.confirm === "string" ? req.body.confirm : "";
      const { runId, lane } = requireLiveLane(laneId);
      if (lane.state !== "settled") {
        throw new OrcaCliError(
          `Lane ${laneId} is ${lane.state} \u2014 removal needs settled ownership (every task in the lane settled, no active dispatch).`,
          "lane_not_settled"
        );
      }
      if (!lane.selector) {
        throw new OrcaCliError(
          `Lane ${laneId} has no positively identified workspace \u2014 nothing will be removed by a guess.`,
          "lane_unverifiable"
        );
      }
      const selector = validateSelector(lane.selector, "selector");
      const expectedToken = lane.worktreeId ?? lane.path?.split("/").filter(Boolean).pop() ?? lane.laneId;
      if (confirm !== expectedToken) {
        throw new ValidationError(
          "The confirmation text did not match the lane worktree's identity \u2014 nothing was removed.",
          "confirm_mismatch"
        );
      }
      const result = await removeWorktreeThroughOrca(selector, {
        runHooks: false,
        force: false,
        allowFailedArchiveHook: false,
        evidenceRequestId: null,
        runId
      });
      if (!result.ok) {
        res.status(result.status).json(result.body);
        return;
      }
      const { requestId, receipt } = result;
      res.json({
        ok: true,
        requestId,
        receipt: {
          laneId,
          worktreeId: receipt.worktree,
          state: pickReceiptString(receipt.raw, "state") ?? "removed",
          reason: pickReceiptString(receipt.raw, "reason", "detail", "warning") ?? (receipt.archiveHookOverride != null ? "removed past an explicitly waived archive-hook failure" : null),
          requestId
        }
      });
    })
  );
  app2.get(
    "/api/capabilities",
    route(async (_req, res) => {
      const [r, advertised] = await Promise.all([readiness(), readLocalRuntimeCapabilities()]);
      const projection = describeRuntimeCapabilities(advertised);
      res.json({
        runtime: {
          cli: r.cli,
          cliVersion: r.cliVersion,
          version: r.version,
          runtimeState: r.runtimeState,
          executionEnabled: r.executionEnabled,
          reason: r.reason
        },
        /** Verbatim local advertisement; null means the status receipt omitted it. */
        advertised,
        advertisedSource: "local-runtime-status",
        ...projection,
        // Status also lists browser, terminal, and other unrelated namespaces.
        // Keep the full advertisement above for inspection, but only call out
        // unknown orchestration ids here. The two family-wide umbrella ids
        // are known informational markers, not unknown actionable features.
        unknownAdvertised: projection.unknownAdvertised.filter(
          (id) => id.startsWith("orchestration.") && id !== "orchestration.contract.v1" && id !== "orchestration.federation.v1"
        ),
        plugin: pluginBridge2.status()
      });
    })
  );
  pluginBridge2.setStatusSummaryProvider(() => {
    const live = coordinatorStatus2();
    if (!live.running) {
      return {
        text: "Orchestration",
        tone: "neutral",
        tooltip: "Orca DAG viewer connected (coordinator idle)"
      };
    }
    const active = live.attempts.filter((a) => !a.settled).length;
    const failed = live.attempts.filter((a) => a.outcome === "failed").length;
    const pendingInbox = live.inbox.pending.length;
    const parts = [];
    if (active > 0) parts.push(`${active} active`);
    if (pendingInbox > 0) parts.push(`${pendingInbox} inbox`);
    if (failed > 0) parts.push(`${failed} failed`);
    const text2 = parts.length > 0 ? `DAG \xB7 ${parts.join(" \xB7 ")}` : "DAG \xB7 running";
    const tone = failed > 0 ? "danger" : pendingInbox > 0 ? "warning" : active > 0 ? "accent" : "success";
    return {
      text: text2,
      tone,
      tooltip: `Orca DAG Run ${live.runId ?? ""} (${text2})`.trim()
    };
  });
  const pluginAuth = requirePluginToken(pluginRequestToken(pluginToken2));
  const pluginNonce = (req, res, next) => {
    if (!PLUGIN_NONCE.test(req.get("x-orca-plugin-nonce") ?? "")) {
      res.status(400).json({ error: "Plugin challenge required.", code: "invalid_plugin_nonce" });
      return;
    }
    next();
  };
  const signedPluginReply = (req, res, kind, payload) => {
    const body = JSON.stringify(payload);
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("x-orca-plugin-proof", signPluginReply(pluginToken2, kind, req.get("x-orca-plugin-nonce"), body));
    res.type("json").send(body);
  };
  app2.post("/api/plugin/hello", pluginAuth, pluginNonce, (req, res) => {
    const status = pluginBridge2.hello(req.body);
    signedPluginReply(req, res, "hello", { ok: true, workspaceDir, worktree, status });
  });
  app2.post("/api/plugin/events", pluginAuth, (req, res) => {
    const accepted = pluginBridge2.ingestEvents(req.body);
    res.json({ ok: true, ...accepted });
  });
  app2.get("/api/plugin/inbox", pluginAuth, pluginNonce, async (req, res) => {
    const waitRaw = req.query.waitMs === void 0 ? 1e4 : Number(req.query.waitMs);
    const waitMs = Number.isFinite(waitRaw) ? Math.max(0, Math.min(15e3, Math.round(waitRaw))) : 1e4;
    const controller = new AbortController();
    res.once("close", () => controller.abort());
    try {
      const inbox = await pluginBridge2.pullInbox(waitMs, controller.signal);
      if (!res.destroyed) signedPluginReply(req, res, "inbox", { ok: true, ...inbox });
    } catch (err) {
      if (!res.writableEnded) fail(res, err);
    }
  });
  app2.post("/api/plugin/receipts/:commandId", pluginAuth, (req, res) => {
    const commandId = validateId(req.params.commandId, "command id");
    if (!commandId) {
      res.status(400).json({ error: "command id required" });
      return;
    }
    const body = req.body && typeof req.body === "object" && !Array.isArray(req.body) ? req.body : {};
    const matched = pluginBridge2.submitReceipt(commandId, body);
    res.json({ ok: true, matched });
  });
  const openTabFn = opts.openViewerTabFn ?? openOrcaViewerTab;
  const TAB_HASH_RE = /^#[A-Za-z0-9._~:/?&=%-]{0,512}$/;
  app2.post(
    "/api/open-tab",
    requireToken(policy2),
    route(async (req, res) => {
      const rawHash = req.body?.hash;
      let hash = "";
      if (rawHash !== void 0 && rawHash !== null && rawHash !== "") {
        if (typeof rawHash !== "string" || !TAB_HASH_RE.test(rawHash) || rawHash.includes("..")) {
          throw new ValidationError("hash must be a valid relative fragment starting with '#'", "invalid_hash");
        }
        hash = rawHash;
      }
      let baseUrl = opts.getViewerUrl?.() ?? process.env.ORCA_DAG_WEB_URL?.trim() ?? null;
      if (!baseUrl) {
        const host = typeof req.headers.host === "string" ? req.headers.host.trim() : "";
        if (/^(localhost|127\.0\.0\.1)(:\d{1,5})?$/i.test(host)) {
          baseUrl = `http://${host}`;
        }
      }
      if (!baseUrl) {
        res.status(503).json({ error: "Viewer loopback URL is not available.", code: "viewer_url_unavailable" });
        return;
      }
      const result = await openTabFn({ baseUrl, hash, worktree });
      res.json(result);
    })
  );
  const runHealthCache = /* @__PURE__ */ new Map();
  const RUN_HEALTH_CACHE_MS = 1500;
  const loadRunHealth = (runId) => {
    const cached = runHealthCache.get(runId);
    if (cached && Date.now() - cached.at < RUN_HEALTH_CACHE_MS) return cached.value;
    const value = (async () => {
      const viewer = coordinatorStatus2();
      const [runRes, taskRes, gateRes, messageRes, workerRes] = await Promise.allSettled([
        showRun(runId),
        presentationTasks(runId),
        presentationGates(runId),
        listRunMessages(runId),
        presentationWorkers(runId, { includeRemote: true })
      ]);
      const valueOf = (r) => r.status === "fulfilled" ? { value: r.value, error: null } : { value: null, error: String(r.reason?.message ?? r.reason).slice(0, 300) };
      const run = valueOf(runRes);
      const tasks = valueOf(taskRes);
      const gates = valueOf(gateRes);
      const messages = valueOf(messageRes);
      const workers = valueOf(workerRes);
      return buildRunHealth({
        runId,
        // showRun resolves null only for a definite absence; a failed read is
        // caught as unknown evidence below, so contact loss never becomes
        // "no Run" and ownership remains unverifiable.
        run: run.value?.run ?? null,
        removedWork: run.value?.removedWork ?? null,
        viewer: {
          running: viewer.running,
          runId: viewer.runId,
          coordinatorHandle: viewer.coordinatorHandle
        },
        evidence: {
          tasks: tasks.value,
          taskError: tasks.error,
          gates: gates.value,
          gateError: gates.error,
          messages: messages.value,
          messageError: messages.error,
          workers: workers.value?.workers ?? null,
          workerError: workers.error ?? (workers.value?.partialHostErrors.length ? "Worker inventory has partial host errors" : null)
        },
        workspaceDir
      });
    })();
    runHealthCache.set(runId, { at: Date.now(), value });
    value.catch(() => {
      if (runHealthCache.get(runId)?.value === value) runHealthCache.delete(runId);
    });
    return value;
  };
  app2.get(
    "/api/run-health",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      res.json({ health: await loadRunHealth(runId) });
    })
  );
  app2.get(
    "/api/runs/:runId/removed-work",
    route(async (req, res) => {
      const runId = validateId(req.params.runId, "run id");
      if (!runId) {
        res.status(400).json({ error: "run id required", code: "run_required" });
        return;
      }
      const cursor = req.query.cursor;
      if (cursor !== void 0 && (typeof cursor !== "string" || cursor.length === 0 || cursor.length > 2048)) {
        res.status(400).json({ error: "invalid removed-work cursor", code: "invalid_cursor" });
        return;
      }
      const run = await showRun(runId);
      if (!run) {
        res.status(404).json({ error: "no such run", code: "run_not_found" });
        return;
      }
      const page = await listRemovedWork(runId, cursor);
      if (page.page.hasMore && (!page.page.nextCursor || page.page.nextCursor === cursor)) {
        res.status(502).json({ error: "removed-work page cursor did not advance", code: "invalid_page_cursor" });
        return;
      }
      res.json({ page });
    })
  );
  app2.get(
    "/api/workers",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const inventory = await presentationWorkers(runId, { includeRemote: true });
      const workers = await enrichWorkerLaunchEvidence(runId, inventory.workers, { resolveWorktrees: true });
      res.json({ workers, partialHostErrors: inventory.partialHostErrors });
    })
  );
  app2.get(
    "/api/workers/:dispatchId",
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const detail = await showWorkerDetail(dispatchId, { includeProviderSession: true });
      if (!detail) {
        res.status(404).json({ error: "no such worker dispatch", code: "worker_not_found" });
        return;
      }
      if (detail.runId !== runId) {
        res.status(404).json({
          error: "worker belongs to a different Run",
          code: "worker_run_mismatch"
        });
        return;
      }
      if (!detail.launchMode && detail.taskId) {
        const sends = await providerSessions.listGuidanceSends(runId).catch(() => []);
        const saved = sends.find((row) => row.creationProven && row.receipt?.runId === runId && row.receipt.taskId === detail.taskId && row.receipt.dispatchId === dispatchId && row.startEvidence?.launchMode);
        detail.launchMode = saved?.startEvidence?.launchMode ?? null;
      }
      res.json({ detail: { ...detail, stopOperation: await workerStopOperation(dispatchId) } });
    })
  );
  app2.get(
    "/api/workers/:dispatchId/output",
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      const runId = validateId(req.query.run, "run");
      if (!runId) throw new ValidationError("run query parameter required", "run_required");
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      const source = validateText(req.query.source, "source", 16);
      if (source && !["auto", "terminal", "transcript"].includes(source)) {
        throw new ValidationError(
          `source must be auto, terminal, or transcript (got "${source}")`,
          "invalid_source"
        );
      }
      const cursor = validateText(req.query.cursor, "cursor", 512);
      const limitRaw = req.query.limit === void 0 ? NaN : Number(req.query.limit);
      const limit = Number.isFinite(limitRaw) ? Math.max(1, Math.min(200, Math.round(limitRaw))) : 40;
      res.json({ output: await readWorkerOutput(dispatchId, { source: source ?? void 0, cursor: cursor ?? void 0, limit }) });
    })
  );
  app2.get("/api/workers/:dispatchId/output/stream", async (req, res) => {
    let dispatchId;
    let runId;
    let source = "auto";
    try {
      dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      runId = validateId(req.query.run, "run");
      if (!runId) throw new ValidationError("run query parameter required", "run_required");
      const rawSource = validateText(req.query.source, "source", 16);
      if (rawSource) {
        if (!["auto", "terminal", "transcript"].includes(rawSource)) {
          throw new ValidationError(
            `source must be auto, terminal, or transcript (got "${rawSource}")`,
            "invalid_source"
          );
        }
        source = rawSource;
      }
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      const terminalId = evidence.detail.terminal?.handle ?? evidence.detail.fleet?.agentTerminalHandle ?? evidence.detail.terminalResource?.terminalHandle ?? null;
      res.status(200);
      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache, no-transform");
      res.setHeader("Connection", "keep-alive");
      res.flushHeaders();
      outputTails2.subscribe({
        runId,
        dispatchId,
        source,
        terminalId,
        res
      });
    } catch (err) {
      if (!res.headersSent) fail(res, err);
    }
  });
  app2.get(
    "/api/requests",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const all = await requestLedger.list();
      const requests = all.filter((row) => row.runId === runId || row.runId === null);
      res.json({
        runId,
        requests,
        /** Rows that positively name ANOTHER Run — excluded, but counted. */
        otherRunCount: all.filter((row) => row.runId !== null && row.runId !== runId).length,
        generatedAt: Date.now()
      });
    })
  );
  app2.get(
    "/api/requests/:requestId",
    route(async (req, res) => {
      const requestId = validateId(req.params.requestId, "request id");
      const runId = validateId(req.query.run, "run");
      if (!requestId || !runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const request = (await requestLedger.list()).find((row) => row.requestId === requestId);
      if (!request) {
        res.status(404).json({ error: "no such recorded request", code: "request_not_found" });
        return;
      }
      if (request.runId !== null && request.runId !== runId) {
        res.status(404).json({
          error: "request belongs to a different Run",
          code: "request_run_mismatch"
        });
        return;
      }
      const on = req.query.on ? validateEnvironmentSelector(req.query.on, "on") : null;
      const receipt = await showRequest(requestId, { on });
      res.json({
        request,
        receipt: receipt ? {
          state: receipt.state,
          interpretation: receipt.interpretation,
          outcome: receipt.outcome,
          probe: "orca",
          probedAt: (/* @__PURE__ */ new Date()).toISOString()
        } : {
          // The probe itself failed (transport trouble, missing CLI).
          // The mutation's outcome stays UNRESOLVED — reporting it as
          // anything else would be inventing a lifecycle fact.
          state: "unknown",
          interpretation: null,
          outcome: null,
          probe: "failed",
          probedAt: (/* @__PURE__ */ new Date()).toISOString()
        }
      });
    })
  );
  app2.get("/api/inbox", (req, res) => {
    const runId = validateId(req.query.run, "run");
    if (!runId) {
      res.status(400).json({ error: "run query parameter required", code: "run_required" });
      return;
    }
    const status = coordinatorStatus2();
    if (status.runId !== runId) {
      res.json({
        runId,
        inbox: { pending: [], pendingDeliveryId: null, recent: [], lastAckedDeliveryId: null },
        cleanupDebt: [],
        phase: "idle"
      });
      return;
    }
    res.json({ runId, inbox: status.inbox, cleanupDebt: status.cleanupDebt, phase: status.phase });
  });
  app2.get(
    "/api/activity",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const rawLimit = typeof req.query.limit === "string" ? Number(req.query.limit) : 200;
      const limit = Number.isInteger(rawLimit) ? Math.max(1, Math.min(500, rawLimit)) : 200;
      const after = typeof req.query.after === "string" ? req.query.after : null;
      const snapshot = await loadActivity(runId);
      let events = snapshot.events;
      let reset = false;
      if (after) {
        const index = events.findIndex((event) => event.id === after);
        if (index >= 0) events = events.slice(0, index);
        else reset = true;
      }
      res.json({
        ...snapshot,
        events: events.slice(0, limit),
        nextCursor: snapshot.events[0]?.id ?? after,
        hasMore: events.length > limit,
        reset
      });
    })
  );
  app2.get("/api/activity/stream", (req, res) => {
    let runId;
    try {
      runId = validateId(req.query.run, "run");
    } catch (err) {
      fail(res, err);
      return;
    }
    if (!runId) {
      res.status(400).json({ error: "run query parameter required", code: "run_required" });
      return;
    }
    res.status(200);
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();
    let closed = false;
    let lastSignature = "";
    let inFlight = false;
    let pendingFlush = false;
    const send = async () => {
      if (closed) return;
      if (inFlight) {
        pendingFlush = true;
        return;
      }
      inFlight = true;
      try {
        do {
          pendingFlush = false;
          const snapshot = await loadActivity(runId);
          const signature = JSON.stringify([
            snapshot.events[0]?.id ?? "empty",
            snapshot.events.length,
            snapshot.pendingCount,
            snapshot.checks.length,
            snapshot.checks[0]?.sequence ?? null,
            snapshot.events.slice(0, 20).map((event) => [event.id, event.createdAt, event.groupedCount])
          ]);
          if (signature !== lastSignature && !closed) {
            lastSignature = signature;
            res.write(`id: ${snapshot.events[0]?.id ?? snapshot.generatedAt}
`);
            res.write(`data: ${JSON.stringify(snapshot)}

`);
          }
        } while (pendingFlush && !closed);
      } catch (err) {
        if (!closed) res.write(`event: error
data: ${JSON.stringify({ error: String(err.message ?? err) })}

`);
      } finally {
        inFlight = false;
      }
    };
    const wake = () => {
      void send();
    };
    let listeners = activitySubscribers.get(runId);
    if (!listeners) {
      listeners = /* @__PURE__ */ new Set();
      activitySubscribers.set(runId, listeners);
    }
    listeners.add(wake);
    void send();
    const timer = setInterval(wake, 2e3);
    req.on("close", () => {
      closed = true;
      clearInterval(timer);
      const current = activitySubscribers.get(runId);
      if (current) {
        current.delete(wake);
        if (current.size === 0) activitySubscribers.delete(runId);
      }
    });
  });
  app2.post(
    "/api/messages/:id/reply",
    requireToken(policy2),
    route(async (req, res) => {
      const messageId = validateId(req.params.id, "message id");
      const runId = validateId(req.body?.runId, "runId");
      const body = validateText(req.body?.body, "body", 2e4);
      if (!messageId || !body || !runId) {
        res.status(400).json({ error: "body and runId required" });
        return;
      }
      const live = coordinatorStatus2();
      if (live.running && live.runId === runId && live.coordinatorHandle) {
        await requireExecutionEnabled();
        const pending = live.inbox.pending.find((item) => item.messageId === messageId);
        const identity2 = await resolveReplyIdentity(runId, messageId, pending);
        await answerInboxItem(messageId, body);
        await recordActivity(
          createViewerActivity({
            runId,
            kind: "reply",
            title: "Coordinator replied to a worker",
            summary: body,
            taskId: identity2.taskId,
            dispatchId: identity2.dispatchId,
            // The durable reply Orca serializes for this message carries
            // thread_id = messageId; mirror that on the optimistic row so its
            // reply context survives until the inbox row supersedes it.
            threadId: messageId
          })
        );
        res.json({ ok: true, via: "coordinator" });
        return;
      }
      const recovered = await preflightOperatorMessage({ operation: "reply", runId, messageId, body }, { store: providerSessions });
      if (recovered) {
        res.json({ ok: true, via: "adhoc", requestId: recovered.requestId, receipt: recovered.outcome });
        return;
      }
      await requireExecutionEnabled();
      const identity = await resolveReplyIdentity(runId, messageId);
      const { requestId, outcome } = await asCoordinator(runId, worktree, (from) => performOperatorReply({ runId, messageId, body, from, sourceThreadId: identity.sourceThreadId }, { store: providerSessions }), req.body?.coordinatorControl);
      await recordActivity(
        createViewerActivity({
          runId,
          kind: "reply",
          title: "Coordinator replied to a worker",
          summary: body,
          taskId: identity.taskId,
          dispatchId: identity.dispatchId,
          threadId: identity.sourceThreadId
        })
      );
      res.json({ ok: true, via: "adhoc", requestId, receipt: outcome });
    })
  );
  app2.post("/api/messages/:id/acknowledge-stop-event", requireToken(policy2), route(async (req, res) => {
    const runId = validateId(req.body?.runId, "runId");
    const messageId = validateId(req.params.id, "message id");
    const dispatchId = validateId(req.body?.dispatchId, "dispatchId");
    if (!runId || !messageId || !dispatchId) throw new ValidationError("runId, messageId and dispatchId required");
    await requireExecutionEnabled();
    const live = coordinatorStatus();
    if (!live.running || live.runId !== runId || !live.coordinatorHandle) {
      throw new OrcaCliError("This viewer does not control the selected Run.", "not_running");
    }
    await acknowledgeStopEvent(runId, messageId, dispatchId);
    res.json({ ok: true });
  }));
  app2.post(
    "/api/tasks/:taskId/messages",
    requireToken(policy2),
    route(async (req, res) => {
      const taskId = validateId(req.params.taskId, "task id");
      const runId = validateId(req.body?.runId, "runId");
      const body = validateText(req.body?.body, "body", 2e4);
      if (!taskId || !runId || !body) {
        res.status(400).json({ error: "body and runId required" });
        return;
      }
      await requireExecutionEnabled();
      const live = coordinatorStatus2();
      if (!live.running || live.runId !== runId || !live.coordinatorHandle) {
        throw new OrcaCliError(
          "This viewer is not the live coordinator for the selected Run; it cannot send worker guidance.",
          "not_running"
        );
      }
      const subject = validateText(req.body?.subject, "subject", 200) ?? "Coordinator guidance";
      const threadId = validateId(req.body?.threadId, "threadId") ?? void 0;
      const receipt = await sendTaskGuidance({ runId, taskId, subject, body, threadId });
      await recordActivity(
        createViewerActivity({
          runId: receipt.runId,
          kind: "status",
          title: receipt.kind === "follow_up" ? "Coordinator guidance created or steered follow-up work" : "Coordinator sent guidance",
          summary: body,
          taskId: receipt.taskId,
          dispatchId: receipt.dispatchId,
          threadId,
          requestId: receipt.requestId,
          payload: receipt
        })
      );
      res.json({ ok: true, ...receipt });
    })
  );
  app2.get(
    "/api/audiences",
    route(async (req, res) => {
      const runId = validateId(req.query.run, "run");
      if (!runId) {
        res.status(400).json({ error: "run query parameter required", code: "run_required" });
        return;
      }
      const live = coordinatorStatus2();
      const coordinatorActive = live.running && live.runId === runId && Boolean(live.coordinatorHandle);
      const [workersResult, worktreesResult] = await Promise.allSettled([
        listWorkers(runId, { includeRemote: true }),
        listWorktrees()
      ]);
      const workers = workersResult.status === "fulfilled" ? workersResult.value.workers : null;
      const worktrees = worktreesResult.status === "fulfilled" ? worktreesResult.value : null;
      res.json({
        runId,
        coordinatorActive,
        audiences: workers && worktrees ? previewRunAudiences({ workers, worktrees }) : [],
        workersError: workersResult.status === "rejected" ? String(workersResult.reason?.message ?? workersResult.reason).slice(0, 300) : workersResult.value.partialHostErrors.length ? "Worker inventory has partial host errors" : null,
        worktreesError: worktreesResult.status === "rejected" ? String(worktreesResult.reason?.message ?? worktreesResult.reason).slice(0, 300) : null
      });
    })
  );
  app2.post(
    "/api/messages/group",
    requireToken(policy2),
    route(async (req, res) => {
      const runId = validateId(req.body?.runId, "runId");
      const body = validateText(req.body?.body, "body", 2e4);
      const subject = validateText(req.body?.subject, "subject", 200) ?? "Coordinator broadcast";
      const type = validateGroupMessageType(req.body?.type);
      const priority = validateGroupMessagePriority(req.body?.priority);
      const audience = validateGroupAudience(req.body?.audience);
      if (!runId || !body) {
        res.status(400).json({ error: "body and runId required" });
        return;
      }
      const recovered = await preflightOperatorMessage({ operation: "group", runId, audience, subject, body, type, priority }, { store: providerSessions });
      if (recovered) {
        res.json({ ok: true, audience, type, priority, requestId: recovered.requestId, receipt: recovered.outcome });
        return;
      }
      await assertDiscoveredWorktreeAudience(audience, async () => {
        try {
          return new Set((await listWorktrees()).map((worktree2) => worktree2.id));
        } catch (err) {
          throw new ValidationError(
            `Worktree audiences cannot be verified right now (worktree discovery failed: ${String(err?.message ?? err).slice(0, 200)}).`,
            "unknown_audience"
          );
        }
      });
      await requireExecutionEnabled();
      const live = coordinatorStatus2();
      if (!live.running || live.runId !== runId || !live.coordinatorHandle) {
        throw new OrcaCliError(
          "This viewer is not the live coordinator for the selected Run; it cannot send group messages.",
          "not_running"
        );
      }
      const { requestId, outcome: receipt } = await asCoordinator(runId, worktree, (from) => performOperatorGroupSend({ runId, audience, subject, body, type, priority, from }, { store: providerSessions }));
      await recordActivity(
        createViewerActivity({
          runId,
          kind: type === "question" ? "question" : "status",
          title: type === "question" ? `Coordinator asked ${audience}` : `Coordinator messaged ${audience}`,
          summary: body,
          detail: subject === "Coordinator broadcast" ? null : `Subject: ${subject}`,
          audience,
          priority,
          // The enqueue receipt itself is the durable evidence this row
          // journals; the UI never re-interprets it as a read receipt.
          payload: receipt
        })
      );
      res.json({ ok: true, audience, type, priority, requestId, receipt });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/stop",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      const runId = validateId(req.body?.runId, "runId");
      if (!dispatchId || !runId) {
        res.status(400).json({ error: "runId required" });
        return;
      }
      await requireExecutionEnabled();
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      const detail = evidence.detail;
      try {
        const { requestId, receipt } = await terminalMutationWithLedger(
          await workerStopOperation(dispatchId),
          dispatchId,
          (rid) => stopWorkerReceipt(dispatchId, { retryRequestId: rid }),
          { runId: detail.runId, taskId: detail.taskId }
        );
        await recordActivity(
          createViewerActivity({
            runId: detail.runId,
            kind: "stop",
            taskId: detail.taskId,
            dispatchId,
            title: receipt.alreadySettled ? "Stop found the Dispatch already settled" : receipt.state === "stopped" ? "Coordinator stopped a worker" : "Worker Stop is unconfirmed",
            summary: `Stop state: ${receipt.state}.`,
            detail: receipt.warning ?? null,
            severity: receipt.state === "stopped" || receipt.alreadySettled ? "info" : "warning",
            requestId,
            payload: {
              state: receipt.state,
              processAction: receipt.processAction,
              supervision: detail.fleet?.supervision ?? "unknown",
              terminalResource: detail.terminalResource
            }
          })
        );
        res.json({
          ok: true,
          requestId,
          receipt,
          // The fresh evidence this action was authorized by — the same
          // read that gated it, returned so the UI can show its basis.
          evidence: {
            liveness: detail.liveness,
            supervision: detail.fleet?.supervision ?? "unknown",
            terminalResource: detail.terminalResource,
            agentWait: detail.observation?.agentWait ?? null,
            workspace: detail.terminal ? { worktreePath: detail.terminal.worktreePath, branch: detail.terminal.branch } : null
          }
        });
      } catch (err) {
        if (err instanceof OrcaCliError && err.code === RESPONSE_LOST) {
          res.status(502).json({
            error: String(err.message),
            code: RESPONSE_LOST,
            requestId: err.requestId ?? null
          });
          return;
        }
        throw err;
      }
    })
  );
  app2.post(
    "/api/workers/:dispatchId/abandon",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      const runId = validateId(req.body?.runId, "runId");
      if (!dispatchId || !runId) {
        res.status(400).json({ error: "runId required" });
        return;
      }
      await requireExecutionEnabled();
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      const detail = evidence.detail;
      if (normalizeLiveness(detail.liveness?.verdict) === "live" && (detail.dispatch?.status ?? null) === "dispatched") {
        res.status(409).json({
          error: "Orca proves this Dispatch live \u2014 abandoning it would fence a working agent. Stop it instead.",
          code: "abandon_refused"
        });
        return;
      }
      try {
        const { requestId, receipt } = await terminalMutationWithLedger(
          "worker-abandon",
          dispatchId,
          (rid) => abandonWorkerReceipt(dispatchId, { retryRequestId: rid }),
          { runId: detail.runId, taskId: detail.taskId }
        );
        await recordActivity(
          createViewerActivity({
            runId: detail.runId,
            kind: "abandon",
            taskId: detail.taskId,
            dispatchId,
            title: receipt.alreadySettled ? "Abandon found the Dispatch already settled" : "Coordinator abandoned a worker",
            summary: `Abandon state: ${receipt.state}. The worker is fenced from orchestration; its process was not touched.`,
            detail: receipt.warning ?? null,
            severity: receipt.alreadySettled ? "info" : "warning",
            requestId
          })
        );
        res.json({
          ok: true,
          requestId,
          receipt,
          evidence: {
            liveness: detail.liveness,
            agentWait: detail.observation?.agentWait ?? null,
            workspace: detail.terminal ? { worktreePath: detail.terminal.worktreePath, branch: detail.terminal.branch } : null
          }
        });
      } catch (err) {
        if (err instanceof OrcaCliError && err.code === RESPONSE_LOST) {
          res.status(502).json({
            error: String(err.message),
            code: RESPONSE_LOST,
            requestId: err.requestId ?? null
          });
          return;
        }
        throw err;
      }
    })
  );
  app2.post(
    "/api/workers/:dispatchId/focus",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      const runId = validateId(req.body?.runId, "runId");
      if (!dispatchId || !runId) {
        res.status(400).json({ error: "runId required" });
        return;
      }
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      const detail = evidence.detail;
      const handle = detail.terminal?.handle ?? null;
      if (!handle || isChatSessionHandle(handle) || detail.launchMode?.mode === "structured" && !handle.startsWith("term_")) {
        res.status(409).json({
          error: isChatSessionHandle(handle) || detail.launchMode?.mode === "structured" ? "This worker runs in an Orca native chat session and has no PTY terminal to focus." : "This worker has no terminal this viewer can focus (remote or archived).",
          code: "focus_unavailable"
        });
        return;
      }
      const { requestId, receipt } = await viewerMutationWithLedger(
        "terminal-focus",
        handle,
        () => focusTerminal(handle),
        () => ({ settled: true, note: `focused terminal ${handle}` }),
        { runId: detail.runId, taskId: detail.taskId, dispatchId }
      );
      await recordActivity(
        createViewerActivity({
          runId: detail.runId,
          kind: "focus",
          taskId: detail.taskId,
          dispatchId,
          title: "Focused a worker terminal",
          summary: `Terminal ${handle} is now the focused pane.`,
          requestId
        })
      );
      res.json({ ok: true, requestId, receipt });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/release",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      const runId = validateId(req.body?.runId, "runId");
      if (!runId) throw new ValidationError("runId required", "run_required");
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      await requireExecutionEnabled();
      const { requestId, receipt } = await terminalMutationWithLedger(
        "worker-release",
        dispatchId,
        (r) => releaseWorker(dispatchId, { retryRequestId: r }),
        { runId, taskId: evidence.detail.taskId }
      );
      const tuiDecision = receipt.state === "retained" && receipt.reason === "external_terminal" ? await closeReleasedOpenCodeTui(dispatchId) : null;
      if (receipt.state === "retained" && receipt.reason === "identity_unproven") {
        await retainOpenCodeTui(dispatchId);
      }
      noteManualRelease(dispatchId, tuiDecision ?? receipt.state);
      if (evidence.detail.runId) {
        await recordActivity(
          createViewerActivity({
            runId,
            kind: "release",
            dispatchId,
            title: "Coordinator released a worker",
            summary: `Terminal ownership is ${receipt.state}.`,
            severity: receipt.state === "released" || receipt.state === "already_released" ? "success" : "warning",
            requestId
          })
        );
      }
      res.json({ ok: true, requestId, receipt });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/retain",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      const runId = validateId(req.body?.runId, "runId");
      if (!runId) throw new ValidationError("runId required", "run_required");
      const evidence = await revalidateWorkerForMutation(dispatchId, runId);
      if (!evidence.ok) {
        res.status(evidence.status).json(evidence.body);
        return;
      }
      await requireExecutionEnabled();
      const { requestId, receipt } = await terminalMutationWithLedger(
        "worker-retain",
        dispatchId,
        (r) => retainWorker(dispatchId, { retryRequestId: r }),
        { runId, taskId: evidence.detail.taskId }
      );
      if (receipt.state === "retained") await retainOpenCodeTui(dispatchId);
      noteManualRelease(dispatchId, receipt.state);
      if (evidence.detail.runId) {
        await recordActivity(
          createViewerActivity({
            runId,
            kind: "release",
            dispatchId,
            title: "Coordinator retained a worker",
            summary: "The terminal remains available for debugging.",
            requestId
          })
        );
      }
      res.json({ ok: true, requestId, receipt });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/permission",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      const runId = validateId(req.body?.runId, "runId");
      const promptId = validateId(req.body?.promptId, "promptId");
      const decisionRaw = validateText(req.body?.decision, "decision", 16);
      const reason = validateText(req.body?.reason, "reason", 2e3);
      if (!dispatchId || !runId || !promptId || !reason) {
        throw new ValidationError("runId, promptId, decision and reason are required");
      }
      if (decisionRaw !== "approve" && decisionRaw !== "deny") {
        throw new ValidationError('decision must be "approve" or "deny"', "invalid_decision");
      }
      await requireExecutionEnabled();
      const operation = decisionRaw === "approve" ? "worker-approve" : "worker-deny";
      const result = await withLifecycleMutation(async () => {
        const evidence = await revalidateWorkerForMutation(dispatchId, runId);
        if (!evidence.ok) return evidence;
        const taskId2 = evidence.detail.taskId;
        const requestId2 = newRequestId();
        const key = { requestId: requestId2, operation, runId, taskId: taskId2, dispatchId, target: promptId };
        const receipt2 = await asCoordinator(runId, worktree, async (from) => {
          await requestLedger.record(key);
          return decideWorkerPermissionPrompt({
            dispatchId,
            promptId,
            decision: decisionRaw,
            reason,
            from,
            retryRequestId: requestId2
          });
        }, req.body?.coordinatorControl, true);
        await requestLedger.record({ ...key, settledLocally: true, note: `${decisionRaw} prompt ${promptId}` });
        return { ok: true, taskId: taskId2, requestId: requestId2, receipt: receipt2 };
      });
      if (!result.ok) {
        res.status(result.status).json(result.body);
        return;
      }
      const { taskId, requestId, receipt } = result;
      await resolvePermissionPromptInboxItems(runId, dispatchId, promptId, decisionRaw, requestId);
      await recordActivity(
        createViewerActivity({
          runId,
          kind: "reply",
          taskId,
          dispatchId,
          title: decisionRaw === "approve" ? "Approved worker permission prompt (once)" : "Denied worker permission prompt",
          summary: reason,
          requestId
        })
      );
      res.json({ ok: true, requestId, receipt });
    })
  );
  app2.post(
    "/api/files/open",
    requireToken(policy2),
    route(async (req, res) => {
      const path = validateWorkspacePath(req.body?.path);
      const worktree2 = req.body?.worktree ? validateSelector(req.body.worktree, "worktree") : void 0;
      const runId = req.body?.runId ? validateId(req.body.runId, "runId") : null;
      const { requestId, receipt } = await viewerMutationWithLedger(
        "file-open",
        path,
        () => openWorkspaceFile(path, { worktree: worktree2 }),
        () => ({ settled: true, note: `opened ${path}` }),
        { runId }
      );
      if (runId) {
        await recordActivity(
          createViewerActivity({
            runId,
            kind: "file_review",
            title: "Opened a workspace file for review",
            summary: path,
            detail: worktree2 ? `Worktree: ${worktree2}` : null,
            requestId
          })
        );
      }
      res.json({ ok: true, requestId, receipt });
    })
  );
  app2.post(
    "/api/files/diff",
    requireToken(policy2),
    route(async (req, res) => {
      const path = validateWorkspacePath(req.body?.path);
      const staged = req.body?.staged === true;
      const worktree2 = req.body?.worktree ? validateSelector(req.body.worktree, "worktree") : void 0;
      const runId = req.body?.runId ? validateId(req.body.runId, "runId") : null;
      const { requestId, receipt } = await viewerMutationWithLedger(
        "file-diff",
        path,
        () => openWorkspaceFileDiff(path, { staged, worktree: worktree2 }),
        () => ({ settled: true, note: `opened ${staged ? "staged " : ""}diff for ${path}` }),
        { runId }
      );
      if (runId) {
        await recordActivity(
          createViewerActivity({
            runId,
            kind: "file_review",
            title: `Opened a ${staged ? "staged " : ""}diff for review`,
            summary: path,
            detail: worktree2 ? `Worktree: ${worktree2}` : null,
            requestId
          })
        );
      }
      res.json({ ok: true, requestId, receipt });
    })
  );
  app2.post(
    "/api/files/open-changed",
    requireToken(policy2),
    route(async (req, res) => {
      const modeRaw = validateText(req.body?.mode, "mode", 8);
      if (modeRaw && !["edit", "diff", "both"].includes(modeRaw)) {
        throw new ValidationError(
          `mode must be one of edit|diff|both (got ${JSON.stringify(modeRaw)})`,
          "invalid_mode"
        );
      }
      const mode = modeRaw || void 0;
      const worktree2 = req.body?.worktree ? validateSelector(req.body.worktree, "worktree") : void 0;
      const runId = req.body?.runId ? validateId(req.body.runId, "runId") : null;
      const { requestId, receipt } = await viewerMutationWithLedger(
        "file-open-changed",
        worktree2 ?? workspaceDir,
        () => openWorkspaceChangedFiles({ mode, worktree: worktree2 }),
        () => ({ settled: true, note: `opened changed files (mode: ${mode ?? "both"})` }),
        { runId }
      );
      if (runId) {
        await recordActivity(
          createViewerActivity({
            runId,
            kind: "file_review",
            title: "Opened the workspace's changed files",
            summary: `Mode: ${mode ?? "both"}.`,
            requestId
          })
        );
      }
      res.json({ ok: true, requestId, receipt });
    })
  );
  const removeWorktreeThroughOrca = async (selector, flags) => {
    await requireExecutionEnabled();
    for (const owned of /* @__PURE__ */ new Set([worktree, `path:${workspaceDir}`])) {
      if (owned && owned === selector) {
        throw new OrcaCliError(
          `${selector} is this viewer's own workspace \u2014 removal would pull the coordinator out from under the Run.`,
          "current_workspace_protected"
        );
      }
    }
    const row = await showWorktree(selector);
    if (!row) {
      return {
        ok: false,
        status: 404,
        body: { error: "no such worktree", code: "worktree_not_found" }
      };
    }
    const activeSelectors = /* @__PURE__ */ new Set();
    const status = coordinatorStatus2();
    if (status.running) {
      for (const attempt of status.attempts) {
        if (attempt.settled) continue;
        for (const prefs of [attempt.requested, attempt.effective]) {
          if (prefs?.worktree) activeSelectors.add(prefs.worktree);
        }
      }
      for (const lane of status.worktreeLanes) {
        if (lane.selector && lane.state !== "settled" && lane.state !== "removed") {
          activeSelectors.add(lane.selector);
        }
      }
    }
    assertWorktreeRemovalPreconditions(row, selector, {
      ownedSelectors: /* @__PURE__ */ new Set([worktree, `path:${workspaceDir}`]),
      activeSelectors
    });
    const custodyRunId = flags.runId ?? laneRunScopeFor(selector, status);
    if (!custodyRunId || !row.path || row.isMainWorktree !== false || row.path === workspaceDir) {
      throw new OrcaCliError("Worktree identity, Run scope, or non-main status is not proven.", "worktree_in_use");
    }
    const [terminals, inventory] = await Promise.all([
      // A workspace can host workers from other Runs, including Native Chat
      // sessions absent from terminal-list. Selected Run scopes the receipt,
      // not the safety inventory for destroying the shared workspace.
      listTerminals(),
      listWorkers(void 0, { includeRemote: true })
    ]);
    const possibleOccupants = inventory.workers.filter((worker) => worker.terminalState !== "released" || !["completed", "failed", "stopped", "abandoned", "cancelled", "canceled"].includes(worker.dispatchStatus));
    const unknownWorkers = possibleOccupants.filter((worker) => !worker.resource?.worktreeId);
    const occupyingWorkers = possibleOccupants.filter((worker) => worker.resource?.worktreeId === row.id);
    const occupyingTerminals = terminals.filter((terminal) => terminal.worktreeId === row.id || terminal.worktreePath === row.path);
    if (inventory.partialHostErrors.length || unknownWorkers.length || occupyingWorkers.length || occupyingTerminals.length) {
      const reasons = [
        ...inventory.partialHostErrors.length ? ["Some execution hosts could not be observed."] : [],
        ...unknownWorkers.length ? [`Workers may still hold an unknown workspace: ${unknownWorkers.slice(0, 8).map((worker) => worker.dispatchId).join(", ")}.`] : [],
        ...occupyingWorkers.length ? [`Inspect worker custody before removal: ${occupyingWorkers.slice(0, 8).map((worker) => worker.dispatchId).join(", ")}.`] : [],
        ...occupyingTerminals.length ? [`Close these terminals explicitly in Orca first: ${occupyingTerminals.slice(0, 8).map((terminal) => terminal.handle).join(", ")}.`] : []
      ];
      throw new OrcaCliError(`Cannot remove worktree. ${reasons.join(" ")}`, "worktree_in_use");
    }
    if (flags.allowFailedArchiveHook && flags.evidenceRequestId) {
      const rows = await requestLedger.list();
      const evidence = rows.find(
        (candidate) => candidate.requestId === flags.evidenceRequestId && candidate.operation === "worktree-remove" && candidate.target === selector && (candidate.note ?? "").includes("archive hook failed")
      );
      if (!evidence) {
        return {
          ok: false,
          status: 403,
          body: {
            error: "No durable evidence that this worktree's removal was blocked by a failed archive hook \u2014 waiving the hook requires the ledger id of that blocked attempt.",
            code: "removal_evidence_required"
          }
        };
      }
    }
    try {
      const scopeRunId = flags.runId ?? laneRunScopeFor(selector, status);
      const { requestId, receipt } = await viewerMutationWithLedger(
        "worktree-remove",
        selector,
        () => removeWorktree(selector, {
          runHooks: flags.runHooks,
          force: flags.force,
          deleteBranch: flags.deleteBranch,
          allowFailedArchiveHook: flags.allowFailedArchiveHook
        }),
        (r) => ({
          settled: true,
          note: r.archiveHookOverride != null ? "removed with waived archive-hook failure" : "removed"
        }),
        { runId: scopeRunId }
      );
      if (scopeRunId) {
        await recordActivity(
          createViewerActivity({
            runId: scopeRunId,
            kind: "worktree",
            title: "Removed a worktree",
            summary: `${selector} was removed from Orca and git.`,
            detail: receipt.archiveHookOverride != null ? "Removal proceeded past an explicitly waived archive-hook failure." : null,
            severity: receipt.archiveHookOverride != null ? "warning" : "info",
            requestId
          })
        );
      }
      return { ok: true, requestId, receipt };
    } catch (err) {
      if (isArchiveHookFailure(err)) {
        return {
          ok: false,
          status: 409,
          body: {
            error: String(err.message),
            code: WORKTREE_ARCHIVE_HOOK_FAILED,
            requestId: err.requestId ?? null,
            hint: "Retry with runHooks + allowFailedArchiveHook + evidenceRequestId=<this requestId> to waive."
          }
        };
      }
      throw err;
    }
  };
  app2.post(
    "/api/worktrees/remove",
    requireToken(policy2),
    route(async (req, res) => {
      const selector = validateSelector(req.body?.worktree, "worktree");
      const runHooks = req.body?.runHooks === true;
      const force = req.body?.force === true;
      const allowFailedArchiveHook = req.body?.allowFailedArchiveHook === true;
      const evidenceRequestId = req.body?.evidenceRequestId ? validateId(req.body.evidenceRequestId, "evidenceRequestId") : null;
      const runId = req.body?.runId ? validateId(req.body.runId, "runId") : null;
      if (allowFailedArchiveHook && !evidenceRequestId) {
        throw new ValidationError(
          "allowFailedArchiveHook requires evidenceRequestId \u2014 the ledger id of the blocked removal this waiver resolves",
          "removal_evidence_required"
        );
      }
      const result = await removeWorktreeThroughOrca(selector, {
        runHooks,
        force,
        deleteBranch: req.body?.deleteBranch === true,
        allowFailedArchiveHook,
        evidenceRequestId,
        runId
      });
      if (!result.ok) {
        res.status(result.status).json(result.body);
        return;
      }
      res.json({ ok: true, requestId: result.requestId, receipt: result.receipt });
    })
  );
  app2.post(
    "/api/workers/:id/retry",
    requireToken(policy2),
    route(async (req, res) => {
      const id = validateId(req.params.id, "dispatch or task id");
      if (!id) {
        res.status(400).json({ error: "dispatch or task id required" });
        return;
      }
      await requireExecutionEnabled();
      const result = await retryWorker(id);
      const live = coordinatorStatus2();
      if (live.runId) {
        await recordActivity(
          createViewerActivity({
            runId: live.runId,
            kind: "dispatch_started",
            taskId: result.taskId,
            dispatchId: result.dispatchId,
            title: "Coordinator retried a failed stage",
            summary: `Retry of ${result.retriedFrom ?? id}.`
          })
        );
      }
      res.json({ ok: true, ...result });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/resume-preview",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      const runId = validateId(req.body?.runId, "runId");
      if (!runId) throw new ValidationError("runId is required", "run_required");
      const sessionId = validateText(req.body?.sessionId, "sessionId", 256);
      const preview = await previewNativeResume(
        { runId, dispatchId, sessionId: sessionId ?? null },
        { pluginBridge: pluginBridge2, providerSessions }
      );
      res.json({ preview });
    })
  );
  app2.post(
    "/api/workers/:dispatchId/resume",
    requireToken(policy2),
    route(async (req, res) => {
      const dispatchId = validateId(req.params.dispatchId, "dispatch id");
      if (!dispatchId) {
        res.status(400).json({ error: "dispatch id required" });
        return;
      }
      const runId = validateId(req.body?.runId, "runId");
      if (!runId) throw new ValidationError("runId is required", "run_required");
      const sessionId = validateText(req.body?.sessionId, "sessionId", 256);
      await requireExecutionEnabled();
      const live = coordinatorStatus2();
      if (live.running && live.runId && live.runId !== runId) {
        throw new OrcaCliError(
          `Viewer coordinator is running another Run (${live.runId}); stop it before resuming a Stage in ${runId}.`,
          "coordinator_conflict"
        );
      }
      const result = await withLifecycleMutation(() => executeNativeResume(
        {
          runId,
          dispatchId,
          sessionId: sessionId ?? null,
          runAsCoordinator: (fn) => asCoordinator(runId, worktree, fn, req.body?.coordinatorControl, true),
          onStarted: (meta, started) => recordResumedWorker(runId, meta, started)
        },
        {
          pluginBridge: pluginBridge2,
          providerSessions,
          noteRequest: async (row) => {
            await requestLedger.record({
              requestId: row.requestId,
              operation: "worker-start",
              runId: row.runId,
              taskId: row.taskId,
              dispatchId: row.dispatchId,
              target: row.taskId ?? row.dispatchId,
              settledLocally: false,
              note: "native session resume"
            }).catch(() => {
            });
          }
        }
      ));
      await recordActivity(
        createViewerActivity({
          runId,
          kind: "dispatch_started",
          taskId: result.taskId,
          dispatchId: result.dispatchId,
          title: "Coordinator resumed a failed stage session",
          summary: `Native resume of ${result.retriedFrom} (${result.harness} session ${result.sessionId}) on ${result.resumedTerminalId}.`
        })
      );
      res.json({ ok: true, ...result });
    })
  );
  app2.post(
    "/api/gates",
    requireToken(policy2),
    route(async (req, res) => {
      const runId = validateId(req.body?.runId, "runId");
      const taskId = validateId(req.body?.taskId, "taskId");
      const question = validateText(req.body?.question, "question", 2e3);
      if (!runId || !taskId || !question) throw new ValidationError("runId, taskId and question required");
      await requireExecutionEnabled();
      const result = await withLifecycleMutation(async () => {
        const assertEligible = async () => {
          const [tasks, inventory, gates] = await Promise.all([
            listTasks(runId),
            listWorkers(runId, { includeRemote: true }),
            listGates(runId)
          ]);
          const task = tasks.find((item) => item.id === taskId && item.run_id === runId);
          if (!task || task.dispatch_id || ["dispatched", "completed", "failed"].includes(task.status) || inventory.partialHostErrors.length || inventory.workers.some((row) => row.taskId === taskId) || gates.some((gate) => gate.taskId === taskId && gate.status === "pending")) {
            throw new OrcaCliError("Task is dispatched, gated, absent, or its dispatch history is incomplete.", "gate_not_eligible");
          }
        };
        await assertEligible();
        const requestId = newRequestId();
        await requestLedger.record({ requestId, operation: "gate-create", runId, taskId, dispatchId: null, target: taskId });
        const receipt = await asCoordinator(runId, worktree, async (from) => {
          await assertEligible();
          return runOrca([
            "orchestration",
            "gate-create",
            "--task",
            taskId,
            "--question",
            question,
            "--options",
            JSON.stringify(["approved", "rejected"]),
            "--from",
            from
          ]);
        }, req.body?.coordinatorControl, true);
        await requestLedger.record({
          requestId,
          operation: "gate-create",
          runId,
          taskId,
          dispatchId: null,
          target: taskId,
          settledLocally: true,
          note: "gate created"
        });
        return { requestId, receipt };
      });
      res.json({ ok: true, ...result });
    })
  );
  app2.post(
    "/api/gates/:id/resolve",
    requireToken(policy2),
    route(async (req, res) => {
      const gateId = validateId(req.params.id, "gate id");
      const runId = validateId(req.body?.runId, "runId");
      const resolution = validateText(req.body?.resolution, "resolution", 128);
      if (!gateId || !resolution || !runId) {
        res.status(400).json({ error: "resolution and runId required" });
        return;
      }
      await requireExecutionEnabled();
      if (!(await listGates(runId)).some((gate) => gate.id === gateId)) {
        throw new OrcaCliError("Gate does not belong to the selected Run.", "gate_not_eligible");
      }
      await asCoordinator(runId, worktree, (from) => resolveGate(gateId, resolution, from), req.body?.coordinatorControl);
      res.json({ ok: true });
    })
  );
  app2.get(
    "/api/config",
    route(async (_req, res) => {
      res.json(await loadConfig(workspaceDir));
    })
  );
  app2.put(
    "/api/config",
    requireToken(policy2),
    route(async (req, res) => {
      const body = req.body;
      if (body === void 0 || body === null || typeof body !== "object" || Array.isArray(body)) {
        res.status(400).json({ error: "config body must be a JSON object", code: "invalid_input" });
        return;
      }
      if (body.defaultOpenCodeUi !== void 0) validateOpenCodeUi(body.defaultOpenCodeUi);
      validateOpenCodeUiTaskMap(body.openCodeUiByTask);
      validateTaskValueMap(
        body.harnessByTask,
        "harnessByTask",
        { maxKeys: 500, valueKind: "harness" },
        (v) => String(v)
      );
      validateTaskValueMap(
        body.modelByTask,
        "modelByTask",
        { maxKeys: 500, valueKind: "model" },
        (v) => String(v)
      );
      validateTaskValueMap(
        body.effortByTask,
        "effortByTask",
        { maxKeys: 500, valueKind: "effort" },
        (v) => validateEffort(v)
      );
      const configEnvironmentByTask = validateEnvironmentTaskMap(body.environmentByTask, "environmentByTask");
      const configPlacementByTask = validatePlacementTaskMap(body.placementByTask, "placementByTask");
      const configWorktreeLanes = validateWorktreeLaneMap(body.worktreeLanes, "worktreeLanes");
      const configLaneByTask = validateLaneTaskMap(body.laneByTask, "laneByTask");
      if (["environmentByTask", "placementByTask", "worktreeLanes", "laneByTask"].some((key) => key in body)) {
        const stored = await loadConfig(workspaceDir);
        const environmentByTask = configEnvironmentByTask ?? stored.environmentByTask ?? null;
        const placementByTask = configPlacementByTask ?? stored.placementByTask ?? null;
        const worktreeLanes = configWorktreeLanes ?? stored.worktreeLanes ?? null;
        const laneByTask = configLaneByTask ?? stored.laneByTask ?? null;
        assertLaneReferences(laneByTask, worktreeLanes);
        assertLanePlacementDisjoint(placementByTask, laneByTask);
        assertEnvironmentPlacementCompatibility(environmentByTask, placementByTask);
      }
      validateTaskValueMap(
        body.leadTaskByRun,
        "leadTaskByRun",
        { maxKeys: 500, valueKind: "task id" },
        (v) => {
          if (typeof v !== "string") {
            throw new ValidationError("leadTaskByRun task id must be a string");
          }
          const taskId = validateId(v, "leadTaskByRun task id");
          if (!taskId) throw new ValidationError("leadTaskByRun task id must not be empty");
          return taskId;
        }
      );
      res.json(await saveConfig(workspaceDir, body));
    })
  );
  app2.get(
    "/api/accounts",
    route(async (_req, res) => {
      res.json({ accounts: await listAgentAccounts() });
    })
  );
  app2.get(
    "/api/models/:harness",
    route(async (req, res) => {
      const harness = String(req.params.harness ?? "").trim().toLowerCase();
      res.json({ harness, ...await listModels(harness) });
    })
  );
  app2.use("/api", (_req, res) => {
    res.status(404).json({ error: "not found", code: "not_found" });
  });
  let servingUI2 = false;
  const embedded2 = opts.embeddedAssets;
  if (embedded2 && embedded2.size > 0) {
    const indexHtml = embedded2.get("index.html");
    app2.use((req, res, next) => {
      if (req.method !== "GET" || req.path.startsWith("/api/")) return next();
      const key = req.path.replace(/^\/+/, "") || "index.html";
      const hit = embedded2.get(key) ?? (extname(key) ? void 0 : indexHtml);
      if (!hit) return next();
      res.setHeader("Content-Type", hit.type);
      res.setHeader("Cache-Control", key === "index.html" ? "no-cache" : "public, max-age=31536000, immutable");
      res.end(hit.body);
    });
    servingUI2 = true;
  } else {
    const here = dirname(fileURLToPath(import.meta.url));
    const explicitWebDir = opts.webDistDir?.trim() || process.env.ORCA_DAG_WEB_DIR?.trim() || "";
    const distDir = explicitWebDir || join4(here, "..", "..", "web", "dist");
    if (existsSync(join4(distDir, "index.html"))) {
      app2.use(import_express.default.static(distDir));
      app2.get("*", (_req, res) => res.sendFile(join4(distDir, "index.html")));
      servingUI2 = true;
    }
  }
  return { app: app2, servingUI: servingUI2, pluginBridge: pluginBridge2, pluginToken: pluginToken2, outputTails: outputTails2 };
}
function listenLoopback(app2, port2) {
  return new Promise((resolve, reject) => {
    const server2 = app2.listen(port2, "127.0.0.1", () => resolve(server2));
    server2.once("error", reject);
  });
}

// server/src/index.ts
var __dirname = dirname2(fileURLToPath2(import.meta.url));
var RAW_WORKSPACE_DIR = process.env.WORKSPACE_DIR ?? (process.env.INIT_CWD && !process.env.npm_lifecycle_event?.startsWith("test") ? process.env.INIT_CWD : process.cwd());
var argv = process.argv.slice(2);
if (argv.includes("--help") || argv.includes("-h")) {
  console.log(`orca-dag \u2014 visualize and run an Orca orchestration task DAG

Usage:
  orca-dag                 install the skill, initialize planning ignores, then serve the viewer
  orca-dag uninstall       remove the skill, managed ignore rule, and leftover Orca terminals
  orca-dag --help          show this

Options:
  --no-skill               don't touch the agent skill directories on startup
  --no-workspace-init      don't add .orca-dag/ to the workspace's .gitignore
  --purge                  (uninstall) also delete viewer history; planning docs are always kept
  --dry-run                (uninstall) report what would be removed, change nothing

Environment:
  PORT=8787                port to serve on (always bound to loopback 127.0.0.1)
  NO_OPEN=1                don't open a browser tab
  ORCA_DAG_NO_SKILL=1      same as --no-skill
  ORCA_DAG_NO_WORKSPACE_INIT=1
                            same as --no-workspace-init
  WORKSPACE_DIR=<path>     workspace to use instead of the current directory
                           (must exist; used verbatim as the Orca worktree)
  ORCA_WORKTREE=<selector> explicit Orca worktree selector; default is the
                           exact workspace as path:<WORKSPACE_DIR>
  ORCA_CLI_COMMAND="<cmd>" exact Orca CLI to run, quoted argv, no shell
                            (default: orca, or orca-ide on Linux outside Orca)
  ORCA_DAG_OPENCODE_TUI=1   experimental API-preselected full TUI for explicit
                            OpenCode models; running Orca >= 1.4.222, local
                            POSIX current/existing non-lane workspaces only
  ORCA_DAG_ALLOW_CUSTOM_COMMANDS=1
                           allow arbitrary custom harness commands (they run as
                           shell lines inside worker terminals; the known agent
                           ids \u2014 claude, codex, opencode, \u2026 \u2014 never need this)

Planning documents:
  .orca-dag/<UTC timestamp>/PRD.md and TECH_SPEC.md (one directory per plan).
Workspace state:
  .orca-dag/{config.json,activity.jsonl,launches.jsonl,requests.jsonl,sessions.json}.
  Legacy root .orca-dag.* files move here without overwriting existing files.
  Stop old viewers before upgrading; uninstall --purge removes only state files.
  Startup adds a marked .orca-dag/ rule to .gitignore by default. Uninstall
  removes only managed rules (including legacy .orca/ blocks), never your
  planning documents or your own ignore rules.`);
  process.exit(0);
}
if (argv.includes("uninstall")) {
  const { runUninstall } = await import("./uninstall-OZMDIQ3D.mjs");
  await runUninstall({
    dryRun: argv.includes("--dry-run"),
    purge: argv.includes("--purge"),
    workspace: RAW_WORKSPACE_DIR
  });
  process.exit(0);
}
if (argv[0] === "--install-plugin-skill") {
  const result = await installSkill(__dirname, true, join5(__dirname, "skill"));
  const receipt = result.skipped === null ? { ok: true, installed: result.installed.length, upToDate: result.upToDate.length } : { ok: false, code: "bundle_unavailable" };
  writeSync(1, JSON.stringify(receipt) + "\n");
  process.exit(0);
}
if (argv[0] === "--uninstall-plugin-skill") {
  const result = await uninstallBundledSkill(__dirname);
  writeSync(1, JSON.stringify(result ? { ok: true, ...result } : { ok: false, code: "bundle_unavailable" }) + "\n");
  process.exit(0);
}
try {
  initOrcaRuntime();
} catch (err) {
  console.error(`orca-dag: ${String(err.message ?? err)}`);
  process.exit(1);
}
var runtime = getOrcaRuntime();
var policy = createSecurityPolicy();
var viewerBaseUrl = process.env.ORCA_DAG_WEB_URL?.trim() || null;
var embedded = await loadEmbeddedAssets();
var { app, servingUI, pluginBridge, pluginToken, outputTails } = createApp({
  workspaceDir: runtime.workspace.dir,
  worktree: runtime.worktree,
  policy,
  embeddedAssets: embedded,
  getViewerUrl: () => viewerBaseUrl
});
var skillReport = describeSkillInstall(
  await installSkill(__dirname, !argv.includes("--no-skill") && process.env.ORCA_DAG_NO_SKILL !== "1")
);
var planningReport = describePlanningSetup(setupPlanningWorkspace(
  runtime.workspace.dir,
  !argv.includes("--no-workspace-init") && process.env.ORCA_DAG_NO_WORKSPACE_INIT !== "1"
));
if (skillReport) console.log(skillReport);
console.log(planningReport);
var server = await listenLoopback(app, Number(process.env.PORT ?? 8787));
for (const line of initializeWorkspaceState(runtime.workspace.dir)) console.log(line);
var addr = server.address();
var port = typeof addr === "object" && addr ? addr.port : Number(process.env.PORT ?? 8787);
if (!viewerBaseUrl) viewerBaseUrl = `http://localhost:${port}`;
try {
  writePluginEndpointFile(runtime.workspace.dir, {
    version: 2,
    port,
    pid: process.pid,
    instanceId: runtime.workspace.instanceId,
    pluginToken,
    workspace: runtime.workspace.dir
  });
} catch (err) {
  console.warn(`WARNING: could not publish plugin discovery endpoint: ${String(err?.message ?? err)}`);
}
var cleanedUp = false;
var cleanupRuntime = () => {
  if (cleanedUp) return;
  cleanedUp = true;
  pluginBridge.close();
  outputTails.closeAll();
  removePluginEndpointFile(runtime.workspace.dir, runtime.workspace.instanceId);
};
process.once("exit", cleanupRuntime);
process.once("SIGINT", () => {
  cleanupRuntime();
  process.exit(0);
});
process.once("SIGTERM", () => {
  cleanupRuntime();
  process.exit(0);
});
var url = `http://localhost:${port}`;
console.log(`Orca DAG viewer \u2192 ${url} (bound to 127.0.0.1)`);
console.log(
  `Orca CLI: ${formatCommand(runtime.command)} \xB7 workspace: ${runtime.workspace.dir} (worktree: ${runtime.worktree}, id: ${runtime.workspace.hash}/${runtime.workspace.instanceId})`
);
void checkReadiness().then((r) => {
  if (r.executionEnabled) console.log(`Orca runtime ${r.version} (CLI ${r.cliVersion}) \u2014 execution enabled.`);
  else console.log(`View-only: ${r.reason}`);
});
if (servingUI && process.env.NO_OPEN !== "1") void openBrowser(url);
async function openBrowser(url2) {
  try {
    const created = await runOrca(["tab", "create", "--url", url2]);
    const pageId = created?.browserPageId;
    if (pageId) {
      try {
        await runOrca(["tab", "switch", "--page", pageId, "--focus"]);
      } catch {
      }
    }
    return;
  } catch {
  }
  const cmd = process.platform === "darwin" ? "open" : process.platform === "win32" ? "cmd" : "xdg-open";
  const args = process.platform === "win32" ? ["/c", "start", "", url2] : [url2];
  try {
    spawn(cmd, args, { stdio: "ignore", detached: true }).unref();
  } catch {
  }
}
