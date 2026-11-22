import{createRequire as __cr}from "node:module";const require=__cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && (typeof params.client_max_window_bits === "number" ? opts.clientMaxWindowBits > params.client_max_window_bits : !params.client_max_window_bits)) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable } = __require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxBufferedChunks = options.maxBufferedChunks | 0;
        this._maxFragments = options.maxFragments | 0;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._numFragments = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
          cb(
            this.createError(
              RangeError,
              "Too many buffered chunks",
              false,
              1008,
              "WS_ERR_TOO_MANY_BUFFERED_PARTS"
            )
          );
          return;
        }
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
          const error = this.createError(
            RangeError,
            "Too many message fragments",
            false,
            1008,
            "WS_ERR_TOO_MANY_BUFFERED_PARTS"
          );
          cb(error);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._numFragments = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var {
      types: { isUint8Array }
    } = __require("util");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else if (isUint8Array(data)) {
            buf.set(data, 2);
          } else {
            throw new TypeError("Second argument must be a string or a Uint8Array");
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse2(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse: parse2 };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http = __require("http");
    var net = __require("net");
    var tls = __require("tls");
    var { randomBytes: randomBytes3, createHash: createHash6 } = __require("crypto");
    var { Duplex, Readable } = __require("stream");
    var { URL: URL2 } = __require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse: parse2 } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._autoPong = options.autoPong;
          this._closeTimeout = options.closeTimeout;
          this._isServer = true;
        }
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxBufferedChunks: options.maxBufferedChunks,
          maxFragments: options.maxFragments,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = _WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxBufferedChunks: 256 * 1024,
        maxFragments: 16 * 1024,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      websocket._autoPong = opts.autoPong;
      websocket._closeTimeout = opts.closeTimeout;
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes3(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash6("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse2(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxBufferedChunks: opts.maxBufferedChunks,
          maxFragments: opts.maxFragments,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open3() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open3() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse2(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse: parse2 };
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http = __require("http");
    var { Duplex } = __require("stream");
    var { createHash: createHash6 } = __require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxBufferedChunks=262144] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=16384] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxBufferedChunks: 256 * 1024,
          maxFragments: 16 * 1024,
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info3 = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info3, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info3)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash6("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxBufferedChunks: this.options.maxBufferedChunks,
          maxFragments: this.options.maxFragments,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server, map) {
      for (const event of Object.keys(map)) server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message, headers) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// server/src/workspaceState.ts
import { linkSync, lstatSync, mkdirSync, unlinkSync } from "node:fs";
import { basename, join } from "node:path";
var WORKSPACE_DATA_DIR = ".orca-dag";
var WORKSPACE_STATE_FILES = {
  config: ".orca-dag/config.json",
  activity: ".orca-dag/activity.jsonl",
  launches: ".orca-dag/launches.jsonl",
  requests: ".orca-dag/requests.jsonl",
  sessions: ".orca-dag/sessions.json"
};
var WORKSPACE_ENDPOINT_FILE = ".orca-dag/endpoint.json";
function legacyWorkspaceStatePath(workspace, file) {
  return join(workspace, `${WORKSPACE_DATA_DIR}.${basename(file)}`);
}
function info(path) {
  try {
    return lstatSync(path);
  } catch (err) {
    if (err.code === "ENOENT") return void 0;
    throw err;
  }
}
function assertWorkspaceStateDirectory(workspace) {
  const dir = join(workspace, WORKSPACE_DATA_DIR);
  const stat2 = info(dir);
  if (stat2 && (!stat2.isDirectory() || stat2.isSymbolicLink())) {
    throw new Error(`${dir} must be a real directory; left untouched`);
  }
}
function ensureDirectory(workspace) {
  assertWorkspaceStateDirectory(workspace);
  const dir = join(workspace, WORKSPACE_DATA_DIR);
  if (!info(dir)) {
    try {
      mkdirSync(dir, { mode: 448 });
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
    }
  }
  assertWorkspaceStateDirectory(workspace);
}
function prepareWorkspaceStateFile(workspace, file, forWrite = false) {
  assertWorkspaceStateDirectory(workspace);
  const path = join(workspace, file);
  const legacyPath = legacyWorkspaceStatePath(workspace, file);
  const current = info(path);
  const legacy = info(legacyPath);
  if (current) {
    if (!current.isFile() || current.isSymbolicLink()) throw new Error(`${path} must be a regular file; left untouched`);
    return { path, legacyPath, status: legacy ? "conflict" : "present" };
  }
  if (legacy) {
    if (!legacy.isFile() || legacy.isSymbolicLink()) throw new Error(`${legacyPath} must be a regular file; left untouched`);
    ensureDirectory(workspace);
    try {
      linkSync(legacyPath, path);
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
      return prepareWorkspaceStateFile(workspace, file, forWrite);
    }
    unlinkSync(legacyPath);
    return { path, legacyPath, status: "migrated" };
  }
  if (forWrite) ensureDirectory(workspace);
  return { path, legacyPath, status: "missing" };
}
function workspaceStateReadPath(workspace, file) {
  try {
    return prepareWorkspaceStateFile(workspace, file).path;
  } catch (err) {
    const legacyPath = legacyWorkspaceStatePath(workspace, file);
    const legacy = info(legacyPath);
    if (legacy?.isFile() && !legacy.isSymbolicLink()) return legacyPath;
    throw err;
  }
}
function initializeWorkspaceState(workspace) {
  const report = [`Workspace state: ${WORKSPACE_DATA_DIR}/{config.json,activity.jsonl,launches.jsonl,requests.jsonl,sessions.json}.`];
  for (const file of Object.values(WORKSPACE_STATE_FILES)) {
    try {
      const result = prepareWorkspaceStateFile(workspace, file);
      if (result.status === "migrated") report.push(`Moved workspace state: ${result.legacyPath} \u2192 ${result.path}.`);
      else if (result.status === "conflict") {
        report.push(`WARNING: both ${result.path} and ${result.legacyPath} exist; using the new location and retaining the legacy file. Reconcile manually after stopping old viewers.`);
      }
    } catch (err) {
      report.push(`WARNING: workspace state ${file}: ${String(err.message ?? err)}.`);
    }
  }
  return report;
}

// server/src/security.ts
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";

// server/src/config.ts
import { readFile, rename, unlink, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { join as join2 } from "node:path";
var OPEN_CODE_UIS = ["auto", "mini", "tui"];
function isOpenCodeUi(value) {
  return typeof value === "string" && OPEN_CODE_UIS.includes(value);
}
var CONFIG_FILE = WORKSPACE_STATE_FILES.config;
var SETUP_POLICIES = /* @__PURE__ */ new Set([
  "run",
  "skip",
  "inherit"
]);
var PLACEMENT_NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
var BASE_BRANCH_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._/-]{0,127}$/;
var DISPLAY_NAME_MAX = 120;
var COMMENT_MAX = 500;
function sanitizeBoundedText(v, maxLen) {
  if (v === void 0 || v === null) return void 0;
  if (typeof v !== "string") return void 0;
  const t = v.trim();
  if (!t || t.length > maxLen) return void 0;
  if (/[\u0000-\u0008\u000b-\u001f\u007f]/.test(t)) return void 0;
  return t;
}
function sanitizeCreationOptions(r) {
  const out = {
    setup: typeof r.setup === "string" && SETUP_POLICIES.has(r.setup) ? r.setup : "run"
  };
  if (typeof r.name === "string" && PLACEMENT_NAME_PATTERN.test(r.name.trim())) {
    out.name = r.name.trim();
  }
  if (typeof r.baseBranch === "string") {
    const branch = r.baseBranch.trim();
    if (BASE_BRANCH_PATTERN.test(branch) && !branch.includes("..") && !branch.endsWith("/") && !branch.endsWith(".")) {
      out.baseBranch = branch;
    }
  }
  const displayName = sanitizeBoundedText(r.displayName, DISPLAY_NAME_MAX);
  if (displayName !== void 0) out.displayName = displayName;
  const comment = sanitizeBoundedText(r.comment, COMMENT_MAX);
  if (comment !== void 0) out.comment = comment;
  return out;
}
function sanitizePlacementSpec(v) {
  if (!v || typeof v !== "object" || Array.isArray(v)) return null;
  const r = v;
  const kind = typeof r.kind === "string" ? r.kind : null;
  if (kind === "current") return { kind: "current" };
  if (kind === "existing" && typeof r.selector === "string" && r.selector.trim()) {
    return { kind: "existing", selector: r.selector.trim() };
  }
  if (kind === "new-child") {
    const creation = sanitizeCreationOptions(r);
    const repo = typeof r.repo === "string" && r.repo.trim() ? r.repo.trim() : void 0;
    return repo ? { kind: "new-child", repo, ...creation } : { kind: "new-child", ...creation };
  }
  if (kind === "new-top-level" && typeof r.repo === "string" && r.repo.trim()) {
    const creation = sanitizeCreationOptions(r);
    return { kind: "new-top-level", repo: r.repo.trim(), ...creation };
  }
  return null;
}
function sanitizeWorktreeLaneSpec(v) {
  if (!v || typeof v !== "object" || Array.isArray(v)) return null;
  const r = v;
  const placement = sanitizePlacementSpec(r.placement);
  if (!placement || placement.kind === "current") return null;
  return { placement };
}
function configPath(workspaceDir) {
  return join2(workspaceDir, CONFIG_FILE);
}
async function loadConfig(workspaceDir) {
  try {
    const raw = JSON.parse(await readFile(workspaceStateReadPath(workspaceDir, CONFIG_FILE), "utf8"));
    return sanitize(raw);
  } catch {
    return {};
  }
}
async function saveConfig(workspaceDir, patch) {
  const previous = await loadConfig(workspaceDir);
  const next = { ...previous, ...sanitize(patch, previous) };
  prepareWorkspaceStateFile(workspaceDir, CONFIG_FILE, true);
  const file = configPath(workspaceDir);
  const tmp = `${file}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await writeFile(tmp, JSON.stringify(next, null, 2) + "\n", { encoding: "utf8", flag: "wx", mode: 384 });
    await rename(tmp, file);
  } catch (err) {
    await unlink(tmp).catch(() => {
    });
    throw err;
  }
  return next;
}
function sanitize(raw, previous) {
  if (!raw || typeof raw !== "object") return {};
  const r = raw;
  const out = {};
  if (isOpenCodeUi(r.defaultOpenCodeUi)) out.defaultOpenCodeUi = r.defaultOpenCodeUi;
  if (r.openCodeUiByTask && typeof r.openCodeUiByTask === "object" && !Array.isArray(r.openCodeUiByTask)) {
    out.openCodeUiByTask = Object.fromEntries(Object.entries(r.openCodeUiByTask).filter(([, v]) => isOpenCodeUi(v)));
  }
  if (typeof r.defaultHarness === "string" && r.defaultHarness.trim()) {
    out.defaultHarness = r.defaultHarness.trim();
  }
  if (r.harnessByTask && typeof r.harnessByTask === "object" && !Array.isArray(r.harnessByTask)) {
    const map = {};
    for (const [k, v] of Object.entries(r.harnessByTask)) {
      if (typeof v === "string" && v.trim()) map[k] = v.trim();
    }
    out.harnessByTask = map;
  }
  const harnessForTask = (key) => (out.harnessByTask ?? previous?.harnessByTask)?.[key] ?? out.defaultHarness ?? previous?.defaultHarness;
  if (r.modelByTask && typeof r.modelByTask === "object" && !Array.isArray(r.modelByTask)) {
    const map = {};
    for (const [k, v] of Object.entries(r.modelByTask)) {
      const harness = harnessForTask(k);
      if (typeof v === "string" && v.trim()) map[k] = harness === "omp" || harness === "antigravity" ? v : v.trim();
    }
    out.modelByTask = map;
  }
  if (r.effortByTask && typeof r.effortByTask === "object" && !Array.isArray(r.effortByTask)) {
    const map = {};
    for (const [k, v] of Object.entries(r.effortByTask)) {
      const harness = harnessForTask(k);
      if (harness === "omp" || harness === "antigravity") {
        if (typeof v === "string" && v !== "") map[k] = v;
      } else if (typeof v === "string" && v.trim()) map[k] = v.trim();
    }
    out.effortByTask = map;
  }
  if (r.environmentByTask && typeof r.environmentByTask === "object" && !Array.isArray(r.environmentByTask)) {
    const map = {};
    for (const [k, v] of Object.entries(r.environmentByTask)) {
      if (typeof v === "string" && v.trim()) map[k] = v.trim();
    }
    out.environmentByTask = map;
  }
  if (r.placementByTask && typeof r.placementByTask === "object" && !Array.isArray(r.placementByTask)) {
    const map = {};
    for (const [k, v] of Object.entries(r.placementByTask)) {
      const spec = sanitizePlacementSpec(v);
      if (spec) map[k] = spec;
    }
    out.placementByTask = map;
  }
  if (r.worktreeLanes && typeof r.worktreeLanes === "object" && !Array.isArray(r.worktreeLanes)) {
    const map = {};
    for (const [laneId, v] of Object.entries(r.worktreeLanes)) {
      const lane = sanitizeWorktreeLaneSpec(v);
      if (lane && laneId.trim()) map[laneId.trim()] = lane;
    }
    out.worktreeLanes = map;
  }
  if (r.laneByTask && typeof r.laneByTask === "object" && !Array.isArray(r.laneByTask)) {
    const map = {};
    for (const [taskId, laneId] of Object.entries(r.laneByTask)) {
      if (taskId.trim() && typeof laneId === "string" && laneId.trim()) {
        map[taskId.trim()] = laneId.trim();
      }
    }
    out.laneByTask = map;
  }
  if (typeof r.maxConcurrency === "number" && Number.isFinite(r.maxConcurrency)) {
    out.maxConcurrency = Math.max(1, Math.min(16, Math.round(r.maxConcurrency)));
  }
  if (r.retainByTask && typeof r.retainByTask === "object" && !Array.isArray(r.retainByTask)) {
    const map = {};
    for (const [k, v] of Object.entries(r.retainByTask)) {
      if (typeof v === "boolean") map[k] = v;
    }
    out.retainByTask = map;
  }
  if (typeof r.layout === "string" && r.layout.trim()) {
    const layout = r.layout.trim();
    out.layout = layout === "force" ? "layered-lr" : layout;
  }
  if (typeof r.runId === "string") {
    out.runId = r.runId.trim();
  }
  if (r.leadTaskByRun && typeof r.leadTaskByRun === "object" && !Array.isArray(r.leadTaskByRun)) {
    const map = {};
    for (const [runId, taskId] of Object.entries(r.leadTaskByRun)) {
      if (runId.trim() && typeof taskId === "string" && taskId.trim()) {
        map[runId.trim()] = taskId.trim();
      }
    }
    out.leadTaskByRun = map;
  }
  return out;
}

// server/src/security.ts
function createSecurityPolicy(env = process.env) {
  return {
    // 32 random bytes → 256 bits, base64url so it survives HTTP headers and
    // shell copy-paste without escaping. Fresh every process start: nothing to
    // persist, nothing to leak from an old install.
    token: randomBytes(32).toString("base64url"),
    allowCustomCommands: env.ORCA_DAG_ALLOW_CUSTOM_COMMANDS === "1"
  };
}
function tokensMatch(presented, expected) {
  const a = createHash("sha256").update(presented).digest();
  const b = createHash("sha256").update(expected).digest();
  return timingSafeEqual(a, b);
}
function requireToken(policy) {
  return (req, res, next) => {
    const presented = req.header("X-Orca-Dag-Token");
    if (typeof presented !== "string" || !tokensMatch(presented, policy.token)) {
      res.status(403).json({
        error: "Mutation rejected: missing or invalid X-Orca-Dag-Token. Fetch it from GET /api/session (same origin only \u2014 the server sets no CORS).",
        code: "invalid_token"
      });
      return;
    }
    next();
  };
}
var ValidationError = class extends Error {
  code;
  constructor(message, code = "invalid_input") {
    super(message);
    this.name = "ValidationError";
    this.code = code;
  }
};
function validateOpenCodeUi(value) {
  if (!isOpenCodeUi(value)) throw new ValidationError("OpenCode UI must be auto, mini, or tui");
  return value;
}
function validateOpenCodeUiTaskMap(raw) {
  if (raw === void 0) return null;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new ValidationError("openCodeUiByTask must be an object");
  for (const value of Object.values(raw)) validateOpenCodeUi(value);
  return validateTaskValueMap(raw, "openCodeUiByTask", { maxKeys: 500, valueKind: "OpenCode UI" }, validateOpenCodeUi);
}
function assertOpenCodeUiPlacement(ui, environment, lane, placement, platform = process.platform) {
  if (ui !== "auto" && (platform !== "linux" || environment || lane || placement && !["current", "existing"].includes(placement.kind))) {
    throw new ValidationError("Explicit OpenCode UI supports only local Linux current/existing non-lane workspaces", "invalid_placement");
  }
}
var ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/;
var UNVERIFIED_HARNESSES = {
  gemini: true,
  grok: true,
  cursor: true,
  droid: true,
  kimi: true
};
var KNOWN_HARNESSES = /* @__PURE__ */ new Set([
  "claude",
  "codex",
  "opencode",
  "omp",
  "antigravity"
]);
function isNativeFreshPreset(harness) {
  return harness === "omp" || harness === "antigravity";
}
function assertNativePresetConstraints(harness, opts, platform = process.platform) {
  if (!isNativeFreshPreset(harness)) return;
  if (opts.effort !== void 0 && opts.effort !== null && opts.effort !== "") {
    if (harness === "antigravity") {
      throw new ValidationError(`${harness} does not support a nonempty effort override in this viewer`, "unsupported_effort");
    }
    if (typeof opts.model !== "string" || !opts.model.trim() || !EFFORT_PATTERN.test(opts.effort)) {
      throw new ValidationError(`${harness} effort requires an explicit model and a valid effort level`, "unsupported_effort");
    }
  }
  const placement = opts.placement ?? { kind: "current" };
  const exactExisting = placement.kind === "existing" && typeof placement.selector === "string" && /^(?:path:\/|(?:id:)?[^:]+::\/)/.test(placement.selector);
  const creating = placement.kind === "new-child" || placement.kind === "new-top-level";
  const exactRepoPattern = /^(?:id:[A-Za-z0-9][A-Za-z0-9._:-]*$|path:\/)/;
  const exactRepo = placement.kind === "new-top-level" ? typeof placement.repo === "string" && exactRepoPattern.test(placement.repo) : placement.kind === "new-child" && placement.repo !== void 0 ? typeof placement.repo === "string" && exactRepoPattern.test(placement.repo) : true;
  if (platform !== "linux" || opts.environment || opts.terminal || !exactRepo || opts.lane && placement.kind === "current" || placement.kind !== "current" && !exactExisting && !creating) {
    throw new ValidationError(
      `${harness} requires fresh native workers on local Linux with current, exact-existing or new Git worktrees; lanes must supply their non-current seed`,
      "invalid_placement"
    );
  }
}
function isUnverifiedHarness(harness) {
  return UNVERIFIED_HARNESSES[harness] === true;
}
var OPENCODE_MODEL_PATTERN = /^[A-Za-z0-9._-]{1,128}\/[A-Za-z0-9][A-Za-z0-9._:/-]{0,511}(?:#[A-Za-z0-9._-]{1,128})?$/;
var PLAIN_MODEL_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._+/-]{0,127}$/;
function validateId(raw, field) {
  if (raw === void 0 || raw === null) return null;
  const v = String(raw).trim();
  if (!v) return null;
  if (!ID_PATTERN.test(v)) {
    throw new ValidationError(`${field} must look like an Orca id (got ${JSON.stringify(v.slice(0, 32))})`);
  }
  return v;
}
function validateText(raw, field, maxLen) {
  if (raw === void 0 || raw === null || raw === "") return null;
  const v = String(raw).trim();
  if (!v) return null;
  if (v.length > maxLen) {
    throw new ValidationError(`${field} is too long (max ${maxLen} characters)`);
  }
  if (/[\u0000-\u0008\u000b-\u001f\u007f]/.test(v)) {
    throw new ValidationError(`${field} contains control characters`);
  }
  return v;
}
function validateHarness(raw, policy) {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError("harness value must not be empty");
  if (isUnverifiedHarness(v)) {
    throw new ValidationError(`"${v}" is an unverified harness and cannot be launched by Orca viewer`, "unverified_harness");
  }
  if (KNOWN_HARNESSES.has(v)) return v;
  if (!policy.allowCustomCommands) {
    throw new ValidationError(
      `"${v.slice(0, 64)}" is not a known Orca agent id, so it runs as a custom shell command. Custom commands are disabled by default; set ORCA_DAG_ALLOW_CUSTOM_COMMANDS=1 to allow them.`,
      "custom_commands_disabled"
    );
  }
  if (v.length > 256) throw new ValidationError("custom harness command is too long (max 256 characters)");
  if (/[\u0000-\u001f\u007f]/.test(v)) {
    throw new ValidationError("custom harness command must be a single line without control characters");
  }
  if (v.startsWith("-")) throw new ValidationError("custom harness command must not start with '-'");
  return v;
}
function validateModel(raw, harness) {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError("model value must not be empty");
  if (isNativeFreshPreset(harness)) {
    const opaque = String(raw);
    if (opaque.length > 512 || /[\u0000-\u001f\u007f]/.test(opaque)) {
      throw new ValidationError("native model selector must be a bounded single line without control characters", "invalid_model");
    }
    return opaque;
  }
  if (harness === "opencode") {
    if (!OPENCODE_MODEL_PATTERN.test(v)) {
      throw new ValidationError(
        `opencode model "${v.slice(0, 64)}" must be a provider/model pair with an optional single #variant suffix (e.g. zai-coding-plan/glm-5.3-flash or zai-coding-plan/glm-5.3-flash#high)`,
        "invalid_model"
      );
    }
    return v;
  }
  if (!PLAIN_MODEL_PATTERN.test(v)) {
    throw new ValidationError(`model "${v.slice(0, 64)}" contains unsupported characters`, "invalid_model");
  }
  return v;
}
var EFFORT_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,31}$/;
function validateEffort(raw) {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError("effort value must not be empty");
  if (!EFFORT_PATTERN.test(v)) {
    throw new ValidationError(`effort "${v.slice(0, 64)}" contains unsupported characters`, "invalid_effort");
  }
  return v;
}
function validateTaskValueMap(raw, field, limits, validateValue) {
  if (raw === void 0 || raw === null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ValidationError(`${field} must be an object of { taskId: ${limits.valueKind} }`);
  }
  const entries = Object.entries(raw);
  if (entries.length > limits.maxKeys) {
    throw new ValidationError(`${field} has too many entries (max ${limits.maxKeys})`);
  }
  const out = {};
  for (const [key, value] of entries) {
    if (!ID_PATTERN.test(key)) {
      throw new ValidationError(`${field} has an invalid task id key: ${JSON.stringify(key.slice(0, 64))}`);
    }
    if (value === void 0 || value === null || value === "") continue;
    out[key] = validateValue(value, key);
  }
  return out;
}
function validateConcurrency(raw, fallback = 4) {
  if (raw === void 0 || raw === null || raw === "") return fallback;
  const n = typeof raw === "number" ? raw : Number(String(raw).trim());
  if (!Number.isInteger(n) || n < 1 || n > 16) {
    throw new ValidationError("maxConcurrency must be an integer between 1 and 16");
  }
  return n;
}
function validateBooleanTaskMap(raw, field) {
  if (raw === void 0 || raw === null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ValidationError(`${field} must be an object of { taskId: boolean }`);
  }
  const entries = Object.entries(raw);
  if (entries.length > 500) {
    throw new ValidationError(`${field} has too many entries (max 500)`);
  }
  const out = {};
  for (const [key, value] of entries) {
    if (!ID_PATTERN.test(key)) {
      throw new ValidationError(`${field} has an invalid task id key: ${JSON.stringify(key.slice(0, 64))}`);
    }
    if (typeof value !== "boolean") {
      throw new ValidationError(`${field}.${key} must be a boolean`);
    }
    if (value) out[key] = true;
  }
  return Object.keys(out).length > 0 ? out : null;
}
function validateEnvironmentSelector(raw, field = "environment") {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError(`${field} selector must not be empty`, "invalid_environment");
  if (!ID_PATTERN.test(v)) {
    throw new ValidationError(
      `${field} selector must be a plain saved-environment id or name (got ${JSON.stringify(v.slice(0, 64))})`,
      "invalid_environment"
    );
  }
  return v;
}
var SELECTOR_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:@/\\-]{0,255}$/;
function validateSelector(raw, field) {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError(`${field} must not be empty`, "invalid_selector");
  if (!SELECTOR_PATTERN.test(v)) {
    throw new ValidationError(
      `${field} must look like an Orca selector (got ${JSON.stringify(v.slice(0, 64))})`,
      "invalid_selector"
    );
  }
  return v;
}
function validatePlacementName(raw, field) {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError(`${field} must not be empty`, "invalid_placement");
  if (!PLACEMENT_NAME_PATTERN.test(v)) {
    throw new ValidationError(
      `${field} must be a short name (letters, digits, . _ - \u2014 got ${JSON.stringify(v.slice(0, 64))})`,
      "invalid_placement"
    );
  }
  return v;
}
function creationFieldPresent(r, key) {
  const v = r[key];
  return v !== void 0 && v !== null && v !== "";
}
var CREATION_FIELDS = ["repo", "name", "baseBranch", "displayName", "comment", "setup"];
function validateSetupPolicy(raw, field = "setup") {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError(`${field} must not be empty`, "invalid_setup");
  if (!SETUP_POLICIES.has(v)) {
    throw new ValidationError(
      `${field} "${v.slice(0, 32)}" is not a setup policy (run, skip or inherit)`,
      "invalid_setup"
    );
  }
  return v;
}
function validateBaseBranch(raw, field = "baseBranch") {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError(`${field} must not be empty`, "invalid_base_branch");
  if (v.length > 128 || !BASE_BRANCH_PATTERN.test(v) || v.includes("..") || v.endsWith("/") || v.endsWith(".")) {
    throw new ValidationError(
      `${field} ${JSON.stringify(v.slice(0, 64))} is not a usable git ref (letters, digits, . _ / -; no "..", no trailing "/" or ".")`,
      "invalid_base_branch"
    );
  }
  return v;
}
function validateCreationOptions(raw, field) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new ValidationError(`${field} must be an object of creation fields`, "invalid_placement");
  }
  const r = raw;
  const out = {
    setup: creationFieldPresent(r, "setup") ? validateSetupPolicy(r.setup, `${field}.setup`) : "run"
  };
  if (creationFieldPresent(r, "name")) out.name = validatePlacementName(r.name, `${field}.name`);
  if (creationFieldPresent(r, "baseBranch")) {
    out.baseBranch = validateBaseBranch(r.baseBranch, `${field}.baseBranch`);
  }
  if (creationFieldPresent(r, "displayName")) {
    const dn = validateText(r.displayName, `${field}.displayName`, DISPLAY_NAME_MAX);
    if (dn !== null) out.displayName = dn;
  }
  if (creationFieldPresent(r, "comment")) {
    const comment = validateText(r.comment, `${field}.comment`, COMMENT_MAX);
    if (comment !== null) out.comment = comment;
  }
  return out;
}
function childPlacement(creation, repo) {
  return repo ? { kind: "new-child", repo, ...creation } : { kind: "new-child", ...creation };
}
function topLevelPlacement(repo, creation) {
  return { kind: "new-top-level", repo, ...creation };
}
function validatePlacementSpec(raw, field, opts = {}) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new ValidationError(
      `${field} must be an object like {"kind":"existing","selector":"\u2026"}, {"kind":"new-child","name":"\u2026"}, or {"kind":"new-top-level","repo":"\u2026","name":"\u2026"}`,
      "invalid_placement"
    );
  }
  const r = raw;
  const kind = typeof r.kind === "string" ? r.kind : "";
  if (kind === "current") {
    const conflicting = CREATION_FIELDS.filter((f) => creationFieldPresent(r, f));
    if (conflicting.length > 0) {
      throw new ValidationError(
        `${field} (current) rejects creation fields (${conflicting.join(", ")}) \u2014 the current workspace is never created and never reruns setup`,
        "invalid_placement"
      );
    }
    if (opts.remote) {
      throw new ValidationError(
        `${field}: remote placement "current" is ambiguous across servers \u2014 choose an exact existing workspace selector discovered on the target environment, or new-top-level with an explicit repo and name.`,
        "invalid_placement"
      );
    }
    return { kind: "current" };
  }
  if (kind === "existing") {
    const selector = validateSelector(r.selector, `${field}.selector`);
    const conflicting = CREATION_FIELDS.filter((f) => creationFieldPresent(r, f));
    if (conflicting.length > 0) {
      throw new ValidationError(
        `${field} (existing) rejects creation fields (${conflicting.join(", ")}) \u2014 an exact existing workspace is never created and never reruns setup`,
        "invalid_placement"
      );
    }
    return { kind: "existing", selector };
  }
  if (kind === "new-child") {
    const repo = creationFieldPresent(r, "repo") ? validateSelector(r.repo, `${field}.repo`) : void 0;
    const creation = validateCreationOptions(r, field);
    if (opts.remote && (!repo || !creation.name)) {
      throw new ValidationError(
        `${field}: remote placement "new-child" is invalid without an exact repo selector and explicit name.`,
        "invalid_placement"
      );
    }
    return childPlacement(creation, repo);
  }
  if (kind === "new-top-level") {
    const repo = validateSelector(r.repo, `${field}.repo`);
    const creation = validateCreationOptions(r, field);
    if (opts.remote && !creation.name) {
      throw new ValidationError(
        `${field}: remote new-top-level requires an explicit name \u2014 the execution host cannot derive one`,
        "invalid_placement"
      );
    }
    return topLevelPlacement(repo, creation);
  }
  throw new ValidationError(
    `${field}.kind must be "current", "existing", "new-child", or "new-top-level" \u2014 "${String(r.kind).slice(0, 32)}" is not a supported placement`,
    "invalid_placement"
  );
}
function validatePlacementTaskMap(raw, field, opts = {}) {
  if (raw === void 0 || raw === null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ValidationError(`${field} must be an object of { taskId: placementSpec }`);
  }
  const entries = Object.entries(raw);
  if (entries.length > 500) {
    throw new ValidationError(`${field} has too many entries (max 500)`);
  }
  const out = {};
  for (const [key, value] of entries) {
    if (!ID_PATTERN.test(key)) {
      throw new ValidationError(`${field} has an invalid task id key: ${JSON.stringify(key.slice(0, 64))}`);
    }
    if (value === void 0 || value === null) continue;
    out[key] = validatePlacementSpec(value, `${field}.${key}`, opts);
  }
  return Object.keys(out).length > 0 ? out : null;
}
function validateWorktreeLaneMap(raw, field) {
  if (raw === void 0 || raw === null) return null;
  if (typeof raw !== "object" || Array.isArray(raw)) {
    throw new ValidationError(`${field} must be an object of { laneId: { placement } }`);
  }
  const entries = Object.entries(raw);
  if (entries.length > 200) {
    throw new ValidationError(`${field} has too many entries (max 200)`);
  }
  const out = {};
  for (const [laneId, value] of entries) {
    const id = laneId.trim();
    if (!ID_PATTERN.test(id)) {
      throw new ValidationError(`${field} has an invalid lane id key: ${JSON.stringify(laneId.slice(0, 64))}`);
    }
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      throw new ValidationError(`${field}.${id} must be an object with a "placement"`);
    }
    const placement = validatePlacementSpec(
      value.placement,
      `${field}.${id}.placement`
    );
    if (placement.kind === "current") {
      throw new ValidationError(
        `${field}.${id}.placement must not be "current" \u2014 a lane seeds from an exact existing workspace or a new worktree`,
        "invalid_placement"
      );
    }
    out[id] = { placement };
  }
  return Object.keys(out).length > 0 ? out : null;
}
function validateLaneTaskMap(raw, field) {
  return validateTaskValueMap(raw, field, { maxKeys: 500, valueKind: "lane id" }, (v, key) => {
    const laneId = validateId(v, `${field}.${key}`);
    if (!laneId) throw new ValidationError(`${field}.${key} must not be empty`, "invalid_lane");
    return laneId;
  });
}
function assertLaneReferences(laneByTask, worktreeLanes) {
  if (!laneByTask) return;
  for (const [taskId, laneId] of Object.entries(laneByTask)) {
    if (!worktreeLanes?.[laneId]) {
      throw new ValidationError(
        `laneByTask.${taskId} references lane "${laneId}", which has no worktreeLanes entry`,
        "unknown_lane"
      );
    }
  }
}
function assertLanePlacementDisjoint(placementByTask, laneByTask) {
  if (!placementByTask || !laneByTask) return;
  for (const taskId of Object.keys(placementByTask)) {
    if (laneByTask[taskId]) {
      throw new ValidationError(
        `task ${taskId} has both a placementByTask entry and a laneByTask membership ("${laneByTask[taskId]}") \u2014 a task is placed directly OR by its lane, never both`,
        "conflicting_placement"
      );
    }
  }
}
function assertEnvironmentPlacementCompatibility(environmentByTask, placementByTask) {
  if (!environmentByTask || !placementByTask) return;
  for (const taskId of Object.keys(environmentByTask)) {
    const placement = placementByTask[taskId];
    if (!placement) continue;
    validatePlacementSpec(placement, `placementByTask.${taskId}`, { remote: true });
  }
}
function validateEnvironmentTaskMap(raw, field) {
  return validateTaskValueMap(
    raw,
    field,
    { maxKeys: 500, valueKind: "environment selector" },
    (v) => validateEnvironmentSelector(v, field)
  );
}
var RUN_GROUP_AUDIENCES = /* @__PURE__ */ new Set(["@all", "@idle"]);
var WORKTREE_AUDIENCE_PREFIX = "@worktree:";
function validateGroupAudience(raw) {
  const v = String(raw ?? "").trim();
  if (!v) throw new ValidationError("audience must not be empty", "invalid_audience");
  if (v.length > 200) {
    throw new ValidationError("audience is too long (max 200 characters)", "invalid_audience");
  }
  if (!v.startsWith("@")) {
    throw new ValidationError(
      `audience must be an Orca group address starting with "@" (got ${JSON.stringify(v.slice(0, 64))})`,
      "invalid_audience"
    );
  }
  if (RUN_GROUP_AUDIENCES.has(v)) return v;
  if (v.startsWith(WORKTREE_AUDIENCE_PREFIX)) {
    const id = v.slice(WORKTREE_AUDIENCE_PREFIX.length);
    if (!id) {
      throw new ValidationError(
        "worktree audience must name a discovered worktree id (@worktree:<id>)",
        "invalid_audience"
      );
    }
    return v;
  }
  if (KNOWN_HARNESSES.has(v.slice(1))) return v;
  throw new ValidationError(
    `audience ${JSON.stringify(v.slice(0, 64))} is not a supported group (@all, @idle, a known harness group, or @worktree:<discovered id>)`,
    "invalid_audience"
  );
}
async function assertDiscoveredWorktreeAudience(audience, discoverWorktreeIds) {
  if (!audience.startsWith(WORKTREE_AUDIENCE_PREFIX)) return;
  const id = audience.slice(WORKTREE_AUDIENCE_PREFIX.length);
  if (!(await discoverWorktreeIds()).has(id)) {
    throw new ValidationError(
      `worktree audience ${JSON.stringify(audience.slice(0, 80))} is not one of this Run's discovered worktree identities; pick an audience from the composer's discovered list`,
      "unknown_audience"
    );
  }
}
var GROUP_MESSAGE_TYPES = /* @__PURE__ */ new Set(["status", "question"]);
var LIFECYCLE_GROUP_TYPES = /* @__PURE__ */ new Set(["worker_done", "heartbeat"]);
function validateGroupMessageType(raw) {
  const v = String(raw ?? "status").trim().toLowerCase();
  if (GROUP_MESSAGE_TYPES.has(v)) return v;
  if (LIFECYCLE_GROUP_TYPES.has(v)) {
    throw new ValidationError(
      `"${v}" is a per-Dispatch lifecycle signal and can never be sent to a group`,
      "forbidden_group_type"
    );
  }
  throw new ValidationError(
    `group message type "${v.slice(0, 32)}" is not supported (status or question only)`,
    "invalid_message_type"
  );
}
var GROUP_PRIORITIES = /* @__PURE__ */ new Set(["low", "normal", "high", "urgent"]);
function validateGroupMessagePriority(raw) {
  if (raw === void 0 || raw === null || raw === "") return null;
  const v = String(raw).trim().toLowerCase();
  if (GROUP_PRIORITIES.has(v)) return v;
  throw new ValidationError(
    `priority "${String(raw).slice(0, 32)}" is not supported (low, normal, high or urgent)`,
    "invalid_priority"
  );
}

// server/src/orca.ts
import { execFile as execFile3 } from "node:child_process";
import { promisify as promisify3 } from "node:util";
import { writeFile as writeFile2 } from "node:fs/promises";
import { setTimeout as delay2 } from "node:timers/promises";
import { realpathSync as realpathSync2, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join as join6 } from "node:path";
import { createHash as createHash3, randomBytes as randomBytes2, randomUUID as randomUUID3 } from "node:crypto";

// server/src/openCode.ts
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { realpath } from "node:fs/promises";
var execute = promisify(execFile);
var TOKEN = /^[A-Za-z0-9._-]{1,128}$/;
var MODEL_ID = /^[A-Za-z0-9][A-Za-z0-9._:/-]{0,511}$/;
var ID = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/;
function openCodeTuiTitle(requestId) {
  return `odag:${requestId.replaceAll("-", "")}`;
}
async function verifyOpenCodeVersion(workspace) {
  try {
    const { stdout } = await execute("opencode", ["--version"], {
      cwd: workspace,
      shell: false,
      timeout: 3e3,
      maxBuffer: 4096,
      encoding: "utf8"
    });
    const match = /^(?:opencode v?|v)?(\d+)\.(\d+)\.(\d+)$/.exec(stdout.trim());
    if (match) {
      const [, major, minor, patch] = match.map(Number);
      if (major > 2 || major === 2 && (minor > 1 || minor === 1 && patch >= 2)) return;
    }
  } catch {
  }
  throw new Error("Explicit OpenCode UI requires a verified OpenCode >= 2.1.2 in the worker workspace");
}
function assertOpenCodeModelSelection(requested, selected) {
  if (requested && (requested.providerID !== selected.providerID || requested.id !== selected.id || requested.variant !== void 0 && requested.variant !== selected.variant)) {
    throw new Error("OpenCode did not preserve the requested session model/variant");
  }
}
function record(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function validateOpenCodeModel(value) {
  const row = record(value);
  if (typeof row.providerID !== "string" || !TOKEN.test(row.providerID) || typeof row.id !== "string" || !MODEL_ID.test(row.id) || row.variant !== void 0 && (typeof row.variant !== "string" || !TOKEN.test(row.variant)) || Object.keys(row).some((key) => !["providerID", "id", "variant"].includes(key))) {
    throw new Error("Invalid OpenCode Model.Ref");
  }
  return { providerID: row.providerID, id: row.id, ...row.variant ? { variant: row.variant } : {} };
}
function sameOpenCodeModel(value, expected) {
  const actual = validateOpenCodeModel(value);
  return actual.providerID === expected.providerID && actual.id === expected.id && (actual.variant ?? "default") === (expected.variant ?? "default");
}
function parseOpenCodeModel(value, effort) {
  const match = /^([A-Za-z0-9._-]+)\/([A-Za-z0-9][A-Za-z0-9._:/-]*)(?:#([A-Za-z0-9._-]+))?$/.exec(value);
  if (!match) throw new Error("OpenCode model must be provider/model[#variant]");
  if (effort && match[3] && effort !== match[3]) throw new Error("OpenCode effort conflicts with the model variant");
  return validateOpenCodeModel({ providerID: match[1], id: match[2], ...effort || match[3] ? { variant: effort || match[3] } : {} });
}
async function openCodeApi(workspace, method, path, body) {
  try {
    const { stdout } = await execute("opencode", [
      "api",
      method,
      path,
      ...body === void 0 ? [] : ["--data", JSON.stringify(body)]
    ], {
      cwd: workspace,
      shell: false,
      encoding: "utf8",
      timeout: 1e4,
      maxBuffer: 2 * 1024 * 1024,
      windowsHide: true
    });
    return JSON.parse(stdout);
  } catch {
    throw new Error(`OpenCode API ${method} ${path.split("?")[0]} unavailable or invalid`);
  }
}
async function readOpenCodeDefaultModel(workspace) {
  const response = record(await openCodeApi(workspace, "GET", `/api/model/default?location[directory]=${encodeURIComponent(workspace)}`));
  const selected = record(response.data);
  if (selected.enabled !== true) throw new Error("OpenCode default model is unavailable in this workspace");
  return validateOpenCodeModel({
    providerID: selected.providerID,
    id: selected.id,
    ...selected.variant === void 0 ? {} : { variant: selected.variant }
  });
}
async function verifyOpenCodeModel(workspace, model, resolved = false) {
  const response = record(await openCodeApi(workspace, "GET", `/api/model?location[directory]=${encodeURIComponent(workspace)}`));
  const rows = Array.isArray(response.data) ? response.data.map(record) : [];
  const matches = rows.filter((row) => row.providerID === model.providerID && row.id === model.id && row.enabled === true);
  if (matches.length !== 1 || model.variant && !(resolved && model.variant === "default") && (!Array.isArray(matches[0].variants) || !matches[0].variants.some((v) => record(v).id === model.variant))) {
    throw new Error("The requested OpenCode model/variant is not uniquely available in this workspace");
  }
}
async function verifyOpenCodeSession(launch) {
  const data = record(record(await openCodeApi(launch.workspace, "GET", `/api/session/${encodeURIComponent(launch.sessionId)}`)).data);
  const directory = record(data.location).directory;
  if (data.id !== launch.sessionId || typeof directory !== "string" || await realpath(directory) !== launch.workspace) {
    throw new Error("OpenCode session identity/workspace mismatch");
  }
  return data;
}
function marker(text, id) {
  return new RegExp(`(^|[^A-Za-z0-9_])${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^A-Za-z0-9_]|$)`).test(text);
}
function safeToolInput(value, depth = 0) {
  if (depth > 5) return "[depth limited]";
  if (Array.isArray(value)) return value.slice(0, 40).map((item) => safeToolInput(item, depth + 1));
  if (!value || typeof value !== "object") return typeof value === "string" ? value.slice(0, 2e3) : value;
  const result = {};
  for (const [key, item] of Object.entries(value).slice(0, 40)) {
    if (/auth|token|secret|password|credential|api.?key|setting/i.test(key)) continue;
    result[key] = safeToolInput(item, depth + 1);
  }
  return result;
}
async function readOpenCodeBoundSession(binding) {
  const title = `orca-dag:${binding.runId}:${binding.taskId}:${binding.dispatchId}`;
  const workspace = await realpath(binding.workspace).catch(() => null);
  if (binding.harness !== "opencode" || binding.host !== "local:local" || workspace !== binding.workspace) {
    throw new Error("Bound OpenCode session is not on this canonical local workspace.");
  }
  const session = record(record(await openCodeApi(workspace, "GET", `/api/session/${encodeURIComponent(binding.sessionId)}`)).data);
  const directory = record(session.location).directory;
  if (session.id !== binding.sessionId || session.title !== title || typeof directory !== "string" || await realpath(directory).catch(() => null) !== workspace) {
    throw new Error("OpenCode session identity, title, or workspace did not match its durable binding.");
  }
  const messages = [];
  const seen = /* @__PURE__ */ new Set();
  const deadline = Date.now() + 8e3;
  let cursor = null;
  let complete = false;
  for (let page = 0; page < 160 && Date.now() < deadline; page++) {
    const path = `/api/session/${encodeURIComponent(binding.sessionId)}/message?limit=5` + (cursor ? `&cursor=${encodeURIComponent(cursor)}` : "&order=asc");
    const response = record(await openCodeApi(workspace, "GET", path));
    if (!Array.isArray(response.data) || !response.cursor || typeof response.cursor !== "object") {
      throw new Error("OpenCode returned a malformed message page.");
    }
    messages.push(...response.data.map(record));
    const next = record(response.cursor).next;
    if (next === null) {
      complete = true;
      break;
    }
    if (typeof next !== "string" || seen.has(next)) throw new Error("OpenCode returned an invalid message cursor.");
    seen.add(next);
    cursor = next;
  }
  const users = messages.filter((message) => message.type === "user");
  const assigned = users.filter((message) => typeof message.text === "string" && marker(message.text, binding.taskId) && marker(message.text, binding.dispatchId));
  if (assigned.length !== 1) throw new Error("OpenCode history did not prove exactly one assigned Task/Dispatch preamble.");
  const assignedIndex = messages.indexOf(assigned[0]);
  const laterUser = messages.findIndex((message, index) => index > assignedIndex && message.type === "user");
  const userOwned = laterUser >= 0 || users.length > 1;
  const scoped = messages.slice(assignedIndex + 1, laterUser < 0 ? void 0 : laterUser);
  const assistant = scoped.find((message) => message.type === "assistant" && message.model);
  let model = null;
  let modelSource = null;
  if (assistant) {
    try {
      model = validateOpenCodeModel(assistant.model);
      modelSource = "assistant-message";
    } catch {
    }
  }
  if (!model && session.model) {
    try {
      model = validateOpenCodeModel(session.model);
      modelSource = "session";
    } catch {
    }
  }
  const activeResponse = record(await openCodeApi(workspace, "GET", "/api/session/active"));
  if (!activeResponse.data || typeof activeResponse.data !== "object" || Array.isArray(activeResponse.data)) {
    throw new Error("OpenCode returned a malformed active-session map.");
  }
  const active = record(record(activeResponse.data)[binding.sessionId]);
  let status = "unknown";
  let statusDetail = "OpenCode returned no conclusive state for this exact session.";
  const activeState = typeof active.type === "string" ? active.type.toLowerCase() : typeof active.status === "string" ? active.status.toLowerCase() : "";
  if (["running", "busy", "retry"].includes(activeState)) {
    status = "active";
    statusDetail = `OpenCode reports the exact session as ${activeState}.`;
  } else if (activeState === "idle") {
    status = "idle";
    statusDetail = "OpenCode reports this exact session as idle; Task outcome remains separate.";
  } else if (complete && !Object.keys(active).length && ["succeeded", "failed", "interrupted", "cancelled"].includes(String(session.outcome).toLowerCase())) {
    status = "exited";
    statusDetail = `OpenCode reports this exact session execution as ${String(session.outcome).toLowerCase()}.`;
  }
  return { status, statusDetail, model, modelSource, messages: scoped, complete, userOwned };
}
function validateOpenCodeLaunch(value) {
  const row = record(value);
  const keys = ["requestId", "runId", "taskId", "sessionId", "workspace", "model", "frontend", "requestedModel", "terminal", "terminalTitle", "dispatchId", "state"];
  if (Object.keys(row).some((key) => !keys.includes(key))) throw new Error("Unknown OpenCode launch fields");
  for (const key of ["requestId", "runId", "taskId", "sessionId"]) {
    if (typeof row[key] !== "string" || !ID.test(row[key])) throw new Error(`Invalid OpenCode launch ${key}`);
  }
  for (const key of ["terminal", "dispatchId"]) {
    if (row[key] !== null && (typeof row[key] !== "string" || !ID.test(row[key]))) throw new Error(`Invalid OpenCode launch ${key}`);
  }
  if (typeof row.workspace !== "string" || !row.workspace.startsWith("/") || row.workspace.length > 4096 || row.workspace.includes("\0") || ![openCodeTuiTitle(String(row.requestId)), `orca-dag OpenCode TUI \xB7 ${row.requestId}`].includes(String(row.terminalTitle)) || !["prepared", "bound", "closed", "retained"].includes(String(row.state)) || row.state === "bound" && (!row.terminal || !row.dispatchId)) throw new Error("Invalid OpenCode launch identity/state");
  if (row.frontend !== void 0 && row.frontend !== "mini" && row.frontend !== "tui") throw new Error("Invalid OpenCode frontend");
  if (row.model === null && (row.terminal !== null || row.dispatchId !== null)) throw new Error("OpenCode terminal requires a resolved model");
  const model = row.model === null ? null : validateOpenCodeModel(row.model);
  const requestedModel = row.requestedModel === void 0 ? model : row.requestedModel === null ? null : validateOpenCodeModel(row.requestedModel);
  return { ...row, frontend: row.frontend ?? "tui", requestedModel, model };
}
async function readOpenCodeExecution(launch) {
  const session = await verifyOpenCodeSession(launch);
  const messages = [];
  const seen = /* @__PURE__ */ new Set();
  let cursor = null;
  let complete = false;
  const deadline = Date.now() + 15e3;
  for (let page = 0; page < 10 && Date.now() < deadline; page++) {
    const path = `/api/session/${encodeURIComponent(launch.sessionId)}/message?limit=100` + (cursor ? `&cursor=${encodeURIComponent(cursor)}` : "&order=asc");
    const response = record(await openCodeApi(launch.workspace, "GET", path));
    if (!Array.isArray(response.data) || !response.cursor || typeof response.cursor !== "object") throw new Error("Invalid OpenCode message page");
    messages.push(...response.data.map(record));
    const next = record(response.cursor).next;
    if (next === null) {
      complete = true;
      break;
    }
    if (typeof next !== "string" || seen.has(next)) throw new Error("Invalid OpenCode message cursor");
    seen.add(next);
    cursor = next;
  }
  const users = messages.filter((m) => m.type === "user");
  const assigned = users.filter((m) => typeof m.text === "string" && launch.dispatchId && // The live preamble contains Task + Dispatch, but no Run ID on 1.4.222.
  // Run scope comes from the saved creation identity and exact Orca binding,
  // not from a third marker the runtime never injects.
  [launch.taskId, launch.dispatchId].every((id) => marker(m.text, id)));
  const user = assigned.length === 1 ? assigned[0] : null;
  const start = user ? messages.indexOf(user) : -1;
  const userOwned = users.length > 1 || users.length === 1 && !user;
  const scoped = start >= 0 ? messages.slice(start + 1, messages.findIndex((m, i) => i > start && m.type === "user") < 0 ? void 0 : messages.findIndex((m, i) => i > start && m.type === "user")) : [];
  const assistant = scoped.find((m) => m.type === "assistant" && typeof m.id === "string");
  const evidence = {
    source: "opencode-api",
    sessionId: launch.sessionId,
    state: assistant ? "turn_started" : user ? "input_accepted" : "input_unproven",
    userMessageId: typeof user?.id === "string" ? user.id : null,
    assistantMessageId: typeof assistant?.id === "string" ? assistant.id : null,
    model: assistant ? validateOpenCodeModel(assistant.model) : null,
    userOwned
  };
  const activeData = record(await openCodeApi(launch.workspace, "GET", "/api/session/active")).data;
  if (!activeData || typeof activeData !== "object" || Array.isArray(activeData)) throw new Error("Invalid OpenCode active-session map");
  const active = record(activeData);
  const exited = complete && !active[launch.sessionId] && ["succeeded", "failed", "interrupted", "cancelled"].includes(String(session.outcome));
  return { evidence, messages: scoped, complete, exited };
}
async function interruptOpenCodeExecution(launch) {
  const before = await readOpenCodeExecution(launch);
  if (!before.complete || before.evidence.userOwned || before.evidence.state === "input_unproven") {
    throw new Error("OpenCode execution ownership is unproven or user-owned; refusing interruption");
  }
  if (before.exited) return;
  const result = record(await openCodeApi(launch.workspace, "POST", `/api/session/${encodeURIComponent(launch.sessionId)}/interrupt?resume=false`));
  if (typeof result.interrupted !== "boolean") throw new Error("OpenCode did not confirm the interrupt request");
  for (let i = 0; i < 8; i++) {
    const after = await readOpenCodeExecution(launch);
    if (after.evidence.userOwned) throw new Error("OpenCode session became user-owned during Stop");
    if (after.exited) return;
    await new Promise((resolve6) => setTimeout(resolve6, 250));
  }
  throw new Error("OpenCode execution exit is not confirmed; Orca stop was not attempted");
}

// server/src/providerSessions.ts
import { execFile as execFile2 } from "node:child_process";
import { constants as fsConstants } from "node:fs";
import { homedir } from "node:os";
import { isAbsolute, join as join4, normalize, relative, resolve, sep } from "node:path";
import { promisify as promisify2 } from "node:util";
import { lstat, open, readFile as readFile2, realpath as realpath2, rename as rename2, stat, unlink as unlink2 } from "node:fs/promises";

// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);
var wrapper_default = import_websocket.default;

// server/src/providerSessionLock.ts
import { randomInt, randomUUID as randomUUID2 } from "node:crypto";
import { lstatSync as lstatSync2, mkdirSync as mkdirSync2, readdirSync, rmdirSync, unlinkSync as unlinkSync2 } from "node:fs";
import { basename as basename2, dirname, join as join3 } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
var WAIT_MS = 5e3;
var OWNER = /^([1-9]\d{0,9})\.[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/;
function info2(path) {
  try {
    return lstatSync2(path, { bigint: true });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
function realDirectory(path, found = info2(path)) {
  if (!found?.isDirectory()) throw new Error(`${path} must be a real directory; left untouched`);
  return found;
}
function assertSameDirectory(path, expected) {
  const current = realDirectory(path);
  if (current.dev !== expected.dev || current.ino !== expected.ino) {
    throw new Error(`Session journal lock directory changed: ${path}`);
  }
}
function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (error.code === "ESRCH") return false;
    if (error.code === "EPERM") return true;
    throw error;
  }
}
function removeIfPresent(remove, path) {
  try {
    remove(path);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
async function withSessionJournalLock(path, operation) {
  const directory = dirname(path);
  const initial = realDirectory(directory);
  const prefix = `${basename2(path)}.lock.`;
  const assertDirectory = () => assertSameDirectory(directory, initial);
  const deadline = performance.now() + WAIT_MS;
  do {
    const name = `${prefix}${process.pid}.${randomUUID2()}`;
    const claim = join3(directory, name);
    assertDirectory();
    mkdirSync2(claim, { mode: 448 });
    const identity = realDirectory(claim);
    const assertHeld = () => {
      assertDirectory();
      assertSameDirectory(claim, identity);
    };
    try {
      let occupied = false;
      for (const entry of readdirSync(directory)) {
        if (entry === name || !entry.startsWith(prefix)) continue;
        const owner = OWNER.exec(entry.slice(prefix.length));
        if (!owner) continue;
        assertDirectory();
        const other = join3(directory, entry);
        const found = info2(other);
        if (!found) continue;
        realDirectory(other, found);
        const pid = Number(owner[1]);
        if (pid > 2147483647) throw new Error(`Invalid session journal lock owner: ${entry}`);
        if (isAlive(pid)) {
          occupied = true;
          break;
        }
        const staged = `${other}.tmp`;
        const temporary = info2(staged);
        if (temporary && !temporary.isFile()) throw new Error(`${staged} must be a regular file; left untouched`);
        assertDirectory();
        if (temporary) removeIfPresent(unlinkSync2, staged);
        removeIfPresent(rmdirSync, other);
      }
      if (!occupied) {
        assertHeld();
        return await operation({ temporary: `${claim}.tmp`, assertHeld });
      }
    } finally {
      assertHeld();
      rmdirSync(claim);
    }
    const remaining = deadline - performance.now();
    if (remaining <= 0) break;
    await delay(Math.min(randomInt(15, 40), remaining));
  } while (performance.now() < deadline);
  throw new Error("Timed out acquiring the session journal write lock; another viewer may still be writing");
}

// server/src/providerSessions.ts
var pExecFile = promisify2(execFile2);
var SESSIONS_FILE = WORKSPACE_STATE_FILES.sessions;
var STORE_VERSION = 1;
var MAX_STORE_BYTES = 2 * 1024 * 1024;
var MAX_BINDINGS = 1e4;
var MAX_PROVIDER_RESPONSE_BYTES = 1024 * 1024;
var PROBE_TIMEOUT_MS = 1500;
var ID_PATTERN2 = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/;
var HOST_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/;
var fileQueues = /* @__PURE__ */ new Map();
function now() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function assertId(value, name) {
  if (typeof value !== "string" || !ID_PATTERN2.test(value)) {
    throw new Error(`${name} must be a non-empty identifier`);
  }
}
function assertHost(value) {
  if (typeof value !== "string" || !HOST_PATTERN.test(value)) {
    throw new Error("host must be a non-empty identifier");
  }
}
function assertWorkspace(value) {
  if (typeof value !== "string" || !isAbsolute(value) || normalize(value) !== value || resolve(value) !== value || value.includes("\0")) {
    throw new Error("workspace must be a normalized absolute path");
  }
}
function assertHarness(value) {
  if (value !== "claude" && value !== "codex" && value !== "opencode") {
    throw new Error("harness must be claude, codex, or opencode");
  }
}
function assertSource(value) {
  if (value !== "manual" && value !== "launch-receipt" && value !== "provider-evidence") {
    throw new Error("source must be manual, launch-receipt, or provider-evidence");
  }
}
function validateBinding(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("session binding must be an object");
  }
  const row = value;
  const allowed = /* @__PURE__ */ new Set([
    "runId",
    "taskId",
    "dispatchId",
    "harness",
    "sessionId",
    "workspace",
    "host",
    "source",
    "createdAt",
    "updatedAt"
  ]);
  if (Object.keys(row).some((key) => !allowed.has(key))) {
    throw new Error("session binding contains unknown fields");
  }
  assertId(row.runId, "runId");
  assertId(row.taskId, "taskId");
  assertId(row.dispatchId, "dispatchId");
  assertHarness(row.harness);
  assertId(row.sessionId, "sessionId");
  assertWorkspace(row.workspace);
  assertHost(row.host);
  assertSource(row.source);
  if (!isIsoDate(row.createdAt) || !isIsoDate(row.updatedAt)) {
    throw new Error("session binding timestamps must be valid ISO dates");
  }
  return {
    runId: row.runId,
    taskId: row.taskId,
    dispatchId: row.dispatchId,
    harness: row.harness,
    sessionId: row.sessionId,
    workspace: row.workspace,
    host: row.host,
    source: row.source,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  };
}
function isIsoDate(value) {
  if (typeof value !== "string") return false;
  const timestamp = Date.parse(value);
  return !Number.isNaN(timestamp) && new Date(timestamp).toISOString() === value;
}
function recordValue(value, name) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(`Invalid ${name}`);
  return value;
}
function validateMailboxCheck(value) {
  const row = recordValue(value, "mailbox checkpoint");
  assertId(row.requestId, "requestId");
  assertId(row.runId, "runId");
  assertId(row.from, "from");
  if (row.ack !== null) assertId(row.ack, "ack");
  if (row.drain !== void 0 && typeof row.drain !== "boolean") throw new Error("Invalid mailbox drain flag");
  if (!["prepared", "received", "pending_input", "completed", "unknown"].includes(String(row.state))) throw new Error("Invalid mailbox checkpoint state");
  if (!isIsoDate(row.createdAt) || !isIsoDate(row.updatedAt)) throw new Error("Invalid mailbox checkpoint timestamps");
  if (row.error !== null && typeof row.error !== "string") throw new Error("Invalid mailbox checkpoint error");
  for (const key of ["processedMessageIds", "pendingQuestionIds"]) {
    if (!Array.isArray(row[key])) throw new Error(`Invalid mailbox ${key}`);
    for (const id of row[key]) assertId(id, key);
    if (new Set(row[key]).size !== row[key].length) throw new Error(`Duplicate mailbox ${key}`);
  }
  if (row.replyRequests !== void 0) {
    const replies = recordValue(row.replyRequests, "mailbox reply requests");
    for (const [id, raw] of Object.entries(replies)) {
      assertId(id, "reply message id");
      const reply = recordValue(raw, "mailbox reply request");
      assertId(reply.requestId, "reply requestId");
      assertId(reply.from, "reply from");
      if (typeof reply.bodyHash !== "string" || !/^[a-f0-9]{64}$/.test(reply.bodyHash) || !["prepared", "unknown", "completed"].includes(String(reply.state))) throw new Error("Invalid mailbox reply request");
    }
  }
  if (row.resolvedStopEvents !== void 0) {
    for (const [id, raw] of Object.entries(recordValue(row.resolvedStopEvents, "resolved stop events"))) {
      assertId(id, "stop event id");
      const resolution = recordValue(raw, "stop event resolution");
      assertId(resolution.dispatchId, "stop event dispatchId");
      if (typeof resolution.evidence !== "string" || !resolution.evidence) throw new Error("Invalid stop event evidence");
    }
  }
  if (row.resolvedPermissionPrompts !== void 0) {
    for (const [id, raw] of Object.entries(recordValue(row.resolvedPermissionPrompts, "resolved permission prompts"))) {
      assertId(id, "permission prompt message id");
      const resolution = recordValue(raw, "permission prompt resolution");
      assertId(resolution.dispatchId, "permission prompt dispatchId");
      assertId(resolution.promptId, "permission prompt promptId");
      assertId(resolution.requestId, "permission prompt requestId");
      if (resolution.decision !== "approve" && resolution.decision !== "deny") throw new Error("Invalid permission prompt decision");
    }
  }
  if (row.delivery !== null) {
    const delivery = recordValue(row.delivery, "mailbox delivery");
    if (delivery.runId !== row.runId || !Array.isArray(delivery.messages)) throw new Error("Mailbox delivery Run or messages invalid");
    if (delivery.deliveryId !== null) assertId(delivery.deliveryId, "deliveryId");
    for (const raw of delivery.messages) {
      const message = recordValue(raw, "mailbox message");
      assertId(message.id, "message id");
      if (typeof message.run_id !== "string" || typeof message.type !== "string" || typeof message.subject !== "string" || typeof message.body !== "string" || typeof message.from_handle !== "string") throw new Error("Invalid mailbox message identity or body");
    }
  }
  if ((row.state === "received" || row.state === "pending_input") && row.delivery === null) throw new Error("Received mailbox checkpoint needs its delivery");
  return row;
}
function validateGuidanceSend(value) {
  const row = recordValue(value, "guidance checkpoint");
  for (const key of ["requestId", "runId", "requestedTaskId", "requestedDispatchId", "from"]) assertId(row[key], key);
  if (!["prepared", "unknown", "enqueued", "follow_up", "refused"].includes(String(row.state))) throw new Error("Invalid guidance checkpoint state");
  if (!isIsoDate(row.createdAt) || !isIsoDate(row.updatedAt) || typeof row.creationProven !== "boolean" || row.error !== null && typeof row.error !== "string") throw new Error("Invalid guidance checkpoint metadata");
  if (row.receipt !== null) {
    const receipt = recordValue(row.receipt, "guidance receipt");
    if (receipt.runId !== row.runId || receipt.requestedTaskId !== row.requestedTaskId || receipt.requestedDispatchId !== row.requestedDispatchId || !["enqueued", "follow_up", "recipient_run_bound_redirect"].includes(String(receipt.kind))) throw new Error("Guidance receipt lineage mismatch");
    assertId(receipt.taskId, "receipt taskId");
    assertId(receipt.dispatchId, "receipt dispatchId");
    if (receipt.kind === "recipient_run_bound_redirect") {
      assertId(receipt.destinationRunId, "destinationRunId");
      if (receipt.destinationRunId === row.runId || receipt.taskId !== row.requestedTaskId || receipt.dispatchId !== row.requestedDispatchId) throw new Error("Invalid redirect lineage");
    } else if (receipt.destinationRunId != null) throw new Error("Unexpected redirect destination");
    if (receipt.followUpOf !== null) assertId(receipt.followUpOf, "followUpOf");
    if (receipt.requestId !== null && receipt.requestId !== row.requestId) throw new Error("Guidance request identity mismatch");
  }
  if (row.startEvidence !== void 0) {
    const evidence = recordValue(row.startEvidence, "guidance start evidence");
    if (evidence.status !== null && typeof evidence.status !== "string") throw new Error("Invalid guidance start state");
    if (evidence.launchMode !== void 0 && evidence.launchMode !== null) {
      const mode = recordValue(evidence.launchMode, "guidance launch mode");
      if (typeof mode.mode !== "string" || !["preferred", "reason", "detail"].every((key) => mode[key] === null || typeof mode[key] === "string")) throw new Error("Invalid guidance launch mode");
    }
  }
  if ((row.state === "enqueued" || row.state === "follow_up") && (!row.receipt || row.receipt.kind !== row.state && !(row.state === "enqueued" && row.receipt.kind === "recipient_run_bound_redirect"))) throw new Error("Guidance outcome requires its matching receipt");
  if (row.creationProven && (!row.receipt || row.receipt.kind !== "follow_up")) throw new Error("Guidance creation proof requires follow-up receipt");
  return row;
}
function validateOperatorMessage(value) {
  const row = recordValue(value, "operator message checkpoint");
  for (const key of ["requestId", "runId", "from"]) assertId(row[key], key);
  if (row.operation === "reply") assertId(row.target, "reply target");
  else if (row.operation === "group") {
    if (typeof row.target !== "string" || validateGroupAudience(row.target) !== row.target) throw new Error("Invalid operator message target");
  }
  if (row.sourceThreadId != null) assertId(row.sourceThreadId, "source thread id");
  if (!["reply", "group"].includes(String(row.operation)) || !["prepared", "unknown", "completed", "refused"].includes(String(row.state)) || typeof row.bodyHash !== "string" || !/^[a-f0-9]{64}$/.test(row.bodyHash) || !isIsoDate(row.createdAt) || !isIsoDate(row.updatedAt)) throw new Error("Invalid operator message checkpoint");
  if (row.outcome !== null) recordValue(row.outcome, "operator message outcome");
  if (row.state === "completed" && row.outcome === null) throw new Error("Completed operator message requires its receipt");
  return row;
}
function validateInput(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("session binding must be an object");
  }
  const row = value;
  const allowed = /* @__PURE__ */ new Set([
    "runId",
    "taskId",
    "dispatchId",
    "harness",
    "sessionId",
    "workspace",
    "host",
    "source"
  ]);
  if (Object.keys(row).some((key) => !allowed.has(key))) {
    throw new Error("session binding contains unknown fields");
  }
  assertId(row.runId, "runId");
  assertId(row.taskId, "taskId");
  assertId(row.dispatchId, "dispatchId");
  assertHarness(row.harness);
  assertId(row.sessionId, "sessionId");
  assertWorkspace(row.workspace);
  assertHost(row.host);
  assertSource(row.source);
  return {
    runId: row.runId,
    taskId: row.taskId,
    dispatchId: row.dispatchId,
    harness: row.harness,
    sessionId: row.sessionId,
    workspace: row.workspace,
    host: row.host,
    source: row.source
  };
}
function keyOf(key) {
  assertId(key.runId, "runId");
  assertId(key.taskId, "taskId");
  assertId(key.dispatchId, "dispatchId");
  return JSON.stringify([key.runId, key.taskId, key.dispatchId]);
}
function sameBindingIdentity(existing, incoming) {
  return existing.runId === incoming.runId && existing.taskId === incoming.taskId && existing.dispatchId === incoming.dispatchId && existing.harness === incoming.harness && existing.sessionId === incoming.sessionId && existing.workspace === incoming.workspace && existing.host === incoming.host;
}
function enqueueWrite(path, operation) {
  const previous = fileQueues.get(path) ?? Promise.resolve();
  const current = previous.then(operation, operation);
  const settled = current.then(
    () => void 0,
    () => void 0
  );
  fileQueues.set(path, settled);
  void settled.then(() => {
    if (fileQueues.get(path) === settled) fileQueues.delete(path);
  });
  return current;
}
async function readStore(path) {
  let handle;
  try {
    const info3 = await lstat(path);
    if (!info3.isFile() || info3.isSymbolicLink()) {
      throw new Error("session binding store must be a regular file");
    }
    if (info3.size > MAX_STORE_BYTES) throw new Error("session binding store is too large");
    handle = await open(path, fsConstants.O_RDONLY | fsConstants.O_NOFOLLOW);
  } catch (error) {
    if (error.code === "ENOENT") {
      return { version: STORE_VERSION, bindings: [] };
    }
    throw error;
  }
  let text;
  try {
    text = await handle.readFile("utf8");
  } finally {
    await handle.close();
  }
  if (Buffer.byteLength(text, "utf8") > MAX_STORE_BYTES) {
    throw new Error("session binding store is too large");
  }
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error("session binding store contains invalid JSON");
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed) || parsed.version !== STORE_VERSION || !Array.isArray(parsed.bindings)) {
    throw new Error("session binding store has an unsupported format");
  }
  if (Object.keys(parsed).some((key) => !["version", "bindings", "openCodeLaunches", "mailboxChecks", "guidanceSends", "operatorMessages", "resumeAttempts"].includes(key))) {
    throw new Error("session binding store contains unknown fields");
  }
  const bindings = parsed.bindings.map(validateBinding);
  if (bindings.length > MAX_BINDINGS) throw new Error("session binding store has too many entries");
  const seen = /* @__PURE__ */ new Set();
  for (const binding of bindings) {
    const key = keyOf(binding);
    if (seen.has(key)) throw new Error("session binding store contains duplicate identities");
    seen.add(key);
  }
  const launches = parsed.openCodeLaunches;
  if (launches !== void 0 && (!Array.isArray(launches) || launches.length > MAX_BINDINGS)) {
    throw new Error("Invalid OpenCode launch inventory");
  }
  const openCodeLaunches = launches?.map(validateOpenCodeLaunch);
  if (openCodeLaunches && new Set(openCodeLaunches.map((row) => row.requestId)).size !== openCodeLaunches.length) {
    throw new Error("Duplicate OpenCode launch request identities");
  }
  const inventories = parsed;
  if (inventories.mailboxChecks !== void 0 && !Array.isArray(inventories.mailboxChecks)) throw new Error("Invalid mailbox checkpoint inventory");
  if (inventories.guidanceSends !== void 0 && !Array.isArray(inventories.guidanceSends)) throw new Error("Invalid guidance checkpoint inventory");
  if (inventories.operatorMessages !== void 0 && !Array.isArray(inventories.operatorMessages)) throw new Error("Invalid operator message inventory");
  if (inventories.resumeAttempts !== void 0 && !Array.isArray(inventories.resumeAttempts)) throw new Error("Invalid resume attempt inventory");
  const mailboxChecks = inventories.mailboxChecks?.map(validateMailboxCheck);
  const guidanceSends = inventories.guidanceSends?.map(validateGuidanceSend);
  const operatorMessages = inventories.operatorMessages?.map(validateOperatorMessage);
  const resumeAttempts = inventories.resumeAttempts?.map(validateResumeAttempt);
  for (const rows of [mailboxChecks, guidanceSends, operatorMessages, resumeAttempts]) {
    if (rows && (rows.length > MAX_BINDINGS || new Set(rows.map((row) => row.requestId)).size !== rows.length)) throw new Error("Invalid duplicate or oversized critical checkpoint inventory");
  }
  return {
    version: STORE_VERSION,
    bindings,
    ...openCodeLaunches ? { openCodeLaunches } : {},
    ...mailboxChecks ? { mailboxChecks } : {},
    ...guidanceSends ? { guidanceSends } : {},
    ...operatorMessages ? { operatorMessages } : {},
    ...resumeAttempts ? { resumeAttempts } : {}
  };
}
function validateResumeAttempt(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Resume attempt checkpoint must be an object");
  }
  const row = value;
  const allowed = /* @__PURE__ */ new Set([
    "requestId",
    "runId",
    "taskId",
    "originalDispatchId",
    "harness",
    "sessionId",
    "workspaceId",
    "resumedTerminalId",
    "newDispatchId",
    "state",
    "error",
    "createdAt",
    "updatedAt"
  ]);
  if (Object.keys(row).some((k) => !allowed.has(k))) {
    throw new Error("Resume attempt checkpoint contains unknown fields");
  }
  assertId(row.requestId, "requestId");
  assertId(row.runId, "runId");
  assertId(row.taskId, "taskId");
  assertId(row.originalDispatchId, "originalDispatchId");
  if (typeof row.harness !== "string" || !/^[A-Za-z0-9._-]{1,64}$/.test(row.harness)) {
    throw new Error("Resume attempt harness is invalid");
  }
  assertId(row.sessionId, "sessionId");
  if (typeof row.workspaceId !== "string" || !row.workspaceId.trim() || row.workspaceId.length > 512) {
    throw new Error("Resume attempt workspaceId is invalid");
  }
  if (row.resumedTerminalId !== null && (typeof row.resumedTerminalId !== "string" || !ID_PATTERN2.test(row.resumedTerminalId))) {
    throw new Error("Resume attempt resumedTerminalId is invalid");
  }
  if (row.newDispatchId !== null && (typeof row.newDispatchId !== "string" || !ID_PATTERN2.test(row.newDispatchId))) {
    throw new Error("Resume attempt newDispatchId is invalid");
  }
  if (typeof row.state !== "string" || !["prepared", "resumed_terminal", "bound", "unknown", "refused"].includes(row.state)) {
    throw new Error("Resume attempt state is invalid");
  }
  if (row.error !== null && typeof row.error !== "string") {
    throw new Error("Resume attempt error must be string or null");
  }
  if (typeof row.createdAt !== "string" || typeof row.updatedAt !== "string") {
    throw new Error("Resume attempt timestamps must be strings");
  }
  return {
    requestId: row.requestId,
    runId: row.runId,
    taskId: row.taskId,
    originalDispatchId: row.originalDispatchId,
    harness: row.harness,
    sessionId: row.sessionId,
    workspaceId: row.workspaceId,
    resumedTerminalId: row.resumedTerminalId,
    newDispatchId: row.newDispatchId,
    state: row.state,
    error: row.error ? row.error.slice(0, 512) : null,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  };
}
async function writeStore(path, file, temporary, assertHeld) {
  const completed = (file.mailboxChecks ?? []).filter((row) => row.state === "completed").slice(-100);
  const settledGuidance = (file.guidanceSends ?? []).filter((row) => row.state === "enqueued" || row.state === "refused").slice(-100);
  const settledOperator = (file.operatorMessages ?? []).filter((row) => row.state === "completed" || row.state === "refused").slice(-100);
  const settledResumes = (file.resumeAttempts ?? []).filter((row) => row.state === "bound" || row.state === "refused").slice(-100);
  const keptChecks = new Set(completed.map((row) => row.requestId));
  const keptGuidance = new Set(settledGuidance.map((row) => row.requestId));
  const keptOperator = new Set(settledOperator.map((row) => row.requestId));
  const keptResumes = new Set(settledResumes.map((row) => row.requestId));
  const neededByMailbox = (row) => row.operation === "reply" && (file.mailboxChecks ?? []).some((check) => check.runId === row.runId && check.pendingQuestionIds.includes(row.target));
  const compact = {
    ...file,
    ...file.mailboxChecks ? { mailboxChecks: file.mailboxChecks.filter((row) => row.state !== "completed" || keptChecks.has(row.requestId)) } : {},
    ...file.guidanceSends ? { guidanceSends: file.guidanceSends.filter((row) => !["enqueued", "refused"].includes(row.state) || keptGuidance.has(row.requestId)) } : {},
    ...file.operatorMessages ? { operatorMessages: file.operatorMessages.filter((row) => !["completed", "refused"].includes(row.state) || keptOperator.has(row.requestId) || neededByMailbox(row)) } : {},
    ...file.resumeAttempts ? { resumeAttempts: file.resumeAttempts.filter((row) => !["bound", "refused"].includes(row.state) || keptResumes.has(row.requestId)) } : {}
  };
  let encoded = `${JSON.stringify(compact, null, 2)}
`;
  if (Buffer.byteLength(encoded) > MAX_STORE_BYTES) {
    if (compact.mailboxChecks) compact.mailboxChecks = compact.mailboxChecks.filter((row) => row.state !== "completed");
    if (compact.guidanceSends) compact.guidanceSends = compact.guidanceSends.filter((row) => !["enqueued", "refused"].includes(row.state));
    if (compact.operatorMessages) compact.operatorMessages = compact.operatorMessages.filter((row) => !["completed", "refused"].includes(row.state) || neededByMailbox(row));
    if (compact.resumeAttempts) compact.resumeAttempts = compact.resumeAttempts.filter((row) => !["bound", "refused"].includes(row.state));
    encoded = `${JSON.stringify(compact, null, 2)}
`;
  }
  if (Buffer.byteLength(encoded) > MAX_STORE_BYTES) throw new Error("session binding store is full");
  assertHeld();
  try {
    const info3 = await lstat(path);
    if (!info3.isFile() || info3.isSymbolicLink()) {
      throw new Error("session binding store must be a regular file");
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  assertHeld();
  const handle = await open(temporary, "wx", 384);
  try {
    try {
      await handle.writeFile(encoded, "utf8");
      await handle.sync();
    } finally {
      await handle.close();
    }
    assertHeld();
    await rename2(temporary, path);
  } catch (error) {
    assertHeld();
    await unlink2(temporary).catch(() => {
    });
    throw error;
  }
}
var ProviderSessionStore = class {
  constructor(workspaceDir) {
    this.workspaceDir = workspaceDir;
    if (!isAbsolute(workspaceDir)) throw new Error("workspaceDir must be absolute");
    this.path = join4(resolve(workspaceDir), SESSIONS_FILE);
  }
  path;
  mutate(operation) {
    return enqueueWrite(this.path, () => {
      prepareWorkspaceStateFile(this.workspaceDir, SESSIONS_FILE, true);
      return withSessionJournalLock(this.path, async ({ temporary, assertHeld }) => {
        const file = await readStore(this.path);
        return operation(file, (next) => writeStore(this.path, next, temporary, assertHeld));
      });
    });
  }
  async list(runId) {
    if (runId !== void 0) assertId(runId, "runId");
    const { bindings } = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return runId === void 0 ? bindings : bindings.filter((binding) => binding.runId === runId);
  }
  async get(key) {
    const identity = keyOf(key);
    const { bindings } = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return bindings.find((binding) => keyOf(binding) === identity) ?? null;
  }
  async bind(input) {
    const normalized = validateInput(input);
    const identity = keyOf(normalized);
    return this.mutate(async (file, write) => {
      const current = file.bindings.find((binding2) => keyOf(binding2) === identity);
      if (current) {
        if (!sameBindingIdentity(current, normalized)) {
          throw new Error("this Run/Task/Dispatch is already bound to a different provider session");
        }
        return current;
      }
      if (file.bindings.length >= MAX_BINDINGS) {
        throw new Error("session binding store is full");
      }
      const timestamp = now();
      const binding = validateBinding({
        ...normalized,
        createdAt: timestamp,
        updatedAt: timestamp
      });
      await write({
        ...file,
        version: STORE_VERSION,
        bindings: [...file.bindings, binding]
      });
      return binding;
    });
  }
  async listOpenCodeLaunches(runId) {
    if (runId !== void 0) assertId(runId, "runId");
    const file = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return (file.openCodeLaunches ?? []).filter((row) => !runId || row.runId === runId);
  }
  /** Critical identity journal: unlike presentational history this fails closed. */
  async recordOpenCodeLaunch(input) {
    const row = validateOpenCodeLaunch(input);
    assertWorkspace(row.workspace);
    await this.mutate(async (file, write) => {
      const launches = file.openCodeLaunches ?? [];
      const existing = launches.find((v) => v.requestId === row.requestId);
      if (existing) {
        for (const key of ["runId", "taskId", "sessionId", "workspace", "terminalTitle", "frontend", "requestedModel"]) {
          if (JSON.stringify(existing[key]) !== JSON.stringify(row[key])) throw new Error("OpenCode launch identity cannot change");
        }
        if (JSON.stringify(existing.model) !== JSON.stringify(row.model) && !(existing.model === null && row.model !== null && existing.state === "prepared" && !existing.terminal && !existing.dispatchId && !row.terminal && !row.dispatchId && row.state === "prepared")) {
          throw new Error("OpenCode launch identity cannot change");
        }
        if (existing.terminal && existing.terminal !== row.terminal || existing.dispatchId && existing.dispatchId !== row.dispatchId || existing.state === "closed" && row.state !== "closed" || existing.state === "retained" && !["retained", "closed"].includes(row.state)) {
          throw new Error("OpenCode launch ownership cannot be replaced");
        }
      } else {
        if (launches.length >= MAX_BINDINGS) throw new Error("OpenCode launch inventory is full");
        if (launches.some((v) => v.runId === row.runId && v.taskId === row.taskId && ["prepared", "bound"].includes(v.state))) {
          throw new Error("An unresolved OpenCode preparation already exists for this Task");
        }
      }
      await write({ ...file, openCodeLaunches: [...launches.filter((v) => v.requestId !== row.requestId), row] });
    });
  }
  async listMailboxChecks(runId) {
    if (runId !== void 0) assertId(runId, "runId");
    const file = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return (file.mailboxChecks ?? []).filter((row) => runId === void 0 || row.runId === runId);
  }
  async recordMailboxCheck(input) {
    const row = validateMailboxCheck(input);
    await this.mutate(async (file, write) => {
      const rows = file.mailboxChecks ?? [];
      const existing = rows.find((item) => item.requestId === row.requestId);
      if (existing) {
        if (existing.runId !== row.runId || existing.from !== row.from || existing.ack !== row.ack || existing.drain !== row.drain || existing.createdAt !== row.createdAt || existing.state === "completed" && row.state !== "completed" || existing.processedMessageIds.some((id) => !row.processedMessageIds.includes(id)) || existing.delivery && JSON.stringify(existing.delivery) !== JSON.stringify(row.delivery)) {
          throw new Error("Mailbox checkpoint identity or processed evidence cannot change");
        }
        const resolvedPermissions = row.resolvedPermissionPrompts;
        if (existing.pendingQuestionIds.some((id) => !row.pendingQuestionIds.includes(id) && row.replyRequests?.[id]?.state !== "completed" && !(row.resolvedStopEvents && Object.hasOwn(row.resolvedStopEvents, id)) && !(resolvedPermissions && Object.hasOwn(resolvedPermissions, id)))) {
          throw new Error("Pending input cannot be cleared without durable resolution");
        }
        for (const [id, old] of Object.entries(existing.resolvedStopEvents ?? {})) {
          if (JSON.stringify(row.resolvedStopEvents?.[id]) !== JSON.stringify(old)) throw new Error("Stop event resolution cannot change");
        }
        for (const [id, old] of Object.entries(existing.resolvedPermissionPrompts ?? {})) {
          const next = resolvedPermissions && Object.hasOwn(resolvedPermissions, id) ? resolvedPermissions[id] : null;
          if (!next || next.dispatchId !== old.dispatchId || next.promptId !== old.promptId || next.decision !== old.decision || next.requestId !== old.requestId) throw new Error("Permission prompt resolution cannot change");
        }
        for (const [id, old] of Object.entries(existing.replyRequests ?? {})) {
          const next = row.replyRequests?.[id];
          if (!next || next.requestId !== old.requestId || next.from !== old.from || next.bodyHash !== old.bodyHash || old.state === "completed" && next.state !== "completed") throw new Error("Mailbox reply identity cannot change");
        }
      } else if (rows.length >= MAX_BINDINGS) throw new Error("Mailbox checkpoint inventory is full");
      await write({ ...file, mailboxChecks: [...rows.filter((item) => item.requestId !== row.requestId), row] });
    });
  }
  async listGuidanceSends(runId) {
    if (runId !== void 0) assertId(runId, "runId");
    const file = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return (file.guidanceSends ?? []).filter((row) => runId === void 0 || row.runId === runId);
  }
  async recordGuidanceSend(input) {
    const row = validateGuidanceSend(input);
    await this.mutate(async (file, write) => {
      const rows = file.guidanceSends ?? [];
      const existing = rows.find((item) => item.requestId === row.requestId);
      if (existing) {
        if (existing.runId !== row.runId || existing.from !== row.from || existing.requestedTaskId !== row.requestedTaskId || existing.requestedDispatchId !== row.requestedDispatchId || existing.createdAt !== row.createdAt || existing.startEvidence && JSON.stringify(existing.startEvidence) !== JSON.stringify(row.startEvidence) || existing.creationProven && !row.creationProven || existing.receipt && (!row.receipt || existing.receipt.kind !== row.receipt.kind || existing.receipt.runId !== row.receipt.runId || existing.receipt.taskId !== row.receipt.taskId || existing.receipt.dispatchId !== row.receipt.dispatchId || (existing.receipt.destinationRunId ?? null) !== (row.receipt.destinationRunId ?? null) || existing.receipt.followUpOf !== null && existing.receipt.followUpOf !== row.receipt.followUpOf || existing.receipt.requestId !== null && existing.receipt.requestId !== row.receipt.requestId) || ["enqueued", "follow_up", "refused"].includes(existing.state) && existing.state !== row.state) {
          throw new Error("Guidance checkpoint identity or accepted outcome cannot change");
        }
      } else if (rows.length >= MAX_BINDINGS) throw new Error("Guidance checkpoint inventory is full");
      await write({ ...file, guidanceSends: [...rows.filter((item) => item.requestId !== row.requestId), row] });
    });
  }
  async listOperatorMessages(runId) {
    if (runId !== void 0) assertId(runId, "runId");
    const file = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return (file.operatorMessages ?? []).filter((row) => runId === void 0 || row.runId === runId);
  }
  async recordOperatorMessage(input) {
    const row = validateOperatorMessage(input);
    await this.mutate(async (file, write) => {
      const rows = file.operatorMessages ?? [];
      const existing = rows.find((item) => item.requestId === row.requestId);
      if (existing) {
        if (existing.operation !== row.operation || existing.runId !== row.runId || existing.target !== row.target || existing.from !== row.from || existing.bodyHash !== row.bodyHash || existing.sourceThreadId !== row.sourceThreadId || existing.createdAt !== row.createdAt || ["completed", "refused"].includes(existing.state) && JSON.stringify(existing) !== JSON.stringify(row)) {
          throw new Error("Operator message identity or settled outcome cannot change");
        }
      } else {
        if (rows.length >= MAX_BINDINGS) throw new Error("Operator message inventory is full");
        if (rows.some((item) => item.runId === row.runId && item.operation === row.operation && item.target === row.target && ["prepared", "unknown"].includes(item.state))) {
          throw new Error("An operator message to this target remains unresolved");
        }
      }
      await write({ ...file, operatorMessages: [...rows.filter((item) => item.requestId !== row.requestId), row] });
    });
  }
  async listResumeAttempts(runId) {
    if (runId !== void 0) assertId(runId, "runId");
    const file = await readStore(workspaceStateReadPath(this.workspaceDir, SESSIONS_FILE));
    return (file.resumeAttempts ?? []).filter((row) => runId === void 0 || row.runId === runId);
  }
  async recordResumeAttempt(input) {
    const row = validateResumeAttempt(input);
    await this.mutate(async (file, write) => {
      const rows = file.resumeAttempts ?? [];
      const existing = rows.find((item) => item.requestId === row.requestId);
      if (existing) {
        if (existing.runId !== row.runId || existing.taskId !== row.taskId || existing.originalDispatchId !== row.originalDispatchId || existing.sessionId !== row.sessionId || existing.createdAt !== row.createdAt || ["bound", "refused"].includes(existing.state) && existing.state !== row.state) {
          throw new Error("Resume attempt identity or settled outcome cannot change");
        }
      } else {
        if (rows.length >= MAX_BINDINGS) throw new Error("Resume attempt inventory is full");
        if (rows.some((item) => item.runId === row.runId && item.taskId === row.taskId && ["prepared", "resumed_terminal", "unknown"].includes(item.state))) {
          throw new Error("A native resume attempt for this Stage remains unresolved");
        }
      }
      await write({ ...file, resumeAttempts: [...rows.filter((item) => item.requestId !== row.requestId), row] });
    });
  }
  async probe(binding) {
    const validated = validateBinding(binding);
    const stored = await this.get(validated);
    if (!stored || !sameBindingIdentity(stored, validated)) {
      return observation("unknown", "No matching stored binding exists for this Run/Task/Dispatch.");
    }
    return probeRecoverySession(validated);
  }
};
function observation(status, detail) {
  return { status, detail, observedAt: now() };
}
function isLocalHost(host) {
  return host === "local:local";
}
async function localWorkspace(input) {
  try {
    assertId(input.taskId, "taskId");
    assertId(input.dispatchId, "dispatchId");
    assertId(input.sessionId, "sessionId");
    assertHarness(input.harness);
    assertHost(input.host);
    assertWorkspace(input.workspace);
    if (!isLocalHost(input.host)) return null;
    return await realpath2(input.workspace);
  } catch {
    return null;
  }
}
async function probeRecoverySession(input) {
  const workspace = await localWorkspace(input);
  if (!workspace) {
    return observation(
      "unavailable",
      "The worker workspace is missing or the bound host is not this local machine."
    );
  }
  if (input.harness === "claude") return probeClaude(input, workspace);
  if (input.harness === "opencode") return probeOpenCode(input, workspace);
  return probeCodex(input, workspace);
}
async function codexRequest(method, params) {
  const codexHome = process.env.CODEX_HOME && isAbsolute(process.env.CODEX_HOME) ? process.env.CODEX_HOME : join4(homedir(), ".codex");
  const socket = join4(codexHome, "app-server-control", "app-server-control.sock");
  const info3 = await stat(socket);
  if (!info3.isSocket()) throw new Error("Codex App Server endpoint is not a socket");
  return new Promise((resolveRequest, rejectRequest) => {
    const ws = new wrapper_default(`ws+unix:${socket}:/`, { maxPayload: MAX_PROVIDER_RESPONSE_BYTES });
    const timer = setTimeout(() => finish(new Error("Codex App Server timed out")), PROBE_TIMEOUT_MS);
    let settled = false;
    function finish(value, success = false) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      ws.close();
      if (success) resolveRequest(value);
      else rejectRequest(value);
    }
    ws.on("open", () => ws.send(JSON.stringify({
      id: 1,
      method: "initialize",
      params: { clientInfo: { name: "orca-dag", version: "0.1.0" }, capabilities: { experimentalApi: true } }
    })));
    ws.on("message", (bytes) => {
      let message;
      try {
        message = asRecord(JSON.parse(String(bytes)));
      } catch {
        finish(new Error("Codex App Server returned invalid JSON"));
        return;
      }
      if (!message) return;
      if (message.id === 1) {
        if (message.error) {
          finish(new Error("Codex App Server initialization failed"));
          return;
        }
        ws.send(JSON.stringify({ method: "initialized" }));
        ws.send(JSON.stringify({ id: 2, method, params }));
      } else if (message.id === 2) {
        if (message.error) finish(new Error("Codex App Server rejected the session query"));
        else finish(message.result, true);
      }
    });
    ws.on("error", () => finish(new Error("Codex App Server is unavailable")));
    ws.on("close", () => finish(new Error("Codex App Server closed the session query")));
  });
}
async function probeCodex(input, workspace) {
  let response;
  try {
    response = await codexRequest("thread/read", { threadId: input.sessionId, includeTurns: false });
  } catch {
    return observation("unavailable", "The shared local Codex App Server could not read this exact thread.");
  }
  const thread = asRecord(asRecord(response)?.thread);
  if (thread?.id !== input.sessionId || typeof thread.cwd !== "string") {
    return observation("unknown", "Codex did not confirm the exact thread ID and workspace.");
  }
  try {
    if (await realpath2(thread.cwd) !== workspace) {
      return observation("unknown", "Codex reports this thread under a different workspace.");
    }
  } catch {
    return observation("unknown", "Codex's reported thread workspace no longer exists locally.");
  }
  const status = asRecord(thread.status)?.type;
  if (status === "active") return observation("active", "Codex reports this exact loaded thread as active.");
  if (status === "idle") return observation("idle", "Codex reports this exact loaded thread as idle; the Orca Task remains separate.");
  if (status === "notLoaded") return observation("unknown", "This Codex App Server has not loaded the thread; that does not prove its process exited.");
  return observation("unknown", "Codex did not provide a conclusive state for this exact thread.");
}
async function discoverProviderSession(input) {
  try {
    assertId(input.runId, "runId");
    assertId(input.taskId, "taskId");
    assertId(input.dispatchId, "dispatchId");
    assertHarness(input.harness);
    assertHost(input.host);
    assertWorkspace(input.workspace);
    if (!isLocalHost(input.host)) return null;
    const workspace = await realpath2(input.workspace);
    if (input.harness === "codex") return discoverCodex(input, workspace);
    if (input.harness === "opencode") return discoverOpenCode(input, workspace);
    return discoverClaude(input, workspace);
  } catch {
    return null;
  }
}
function openCodeSessionTitle(runId, taskId, dispatchId) {
  assertId(runId, "runId");
  assertId(taskId, "taskId");
  assertId(dispatchId, "dispatchId");
  return `orca-dag:${runId}:${taskId}:${dispatchId}`;
}
async function discoverOpenCode(input, workspace) {
  const title = openCodeSessionTitle(input.runId, input.taskId, input.dispatchId);
  const matches = /* @__PURE__ */ new Set();
  const seen = /* @__PURE__ */ new Set();
  let cursor = null;
  const deadline = Date.now() + 4e3;
  for (let page = 0; page < 20; page++) {
    if (Date.now() > deadline) return null;
    const path = cursor ? `/api/session?cursor=${encodeURIComponent(cursor)}` : "/api/session";
    const result = await runOpenCodeApi(workspace, path);
    if (!result.ok) return null;
    const body = asRecord(result.body);
    if (!Array.isArray(body?.data)) return null;
    for (const value of body.data) {
      const row = asRecord(value);
      const location = asRecord(row?.location);
      if (row?.title === title && location?.directory === workspace && typeof row.id === "string" && ID_PATTERN2.test(row.id)) matches.add(row.id);
    }
    const next = asRecord(body.cursor)?.next;
    if (next === null || next === void 0) return matches.size === 1 ? [...matches][0] : null;
    if (typeof next !== "string" || seen.has(next)) return null;
    seen.add(next);
    cursor = next;
  }
  return null;
}
async function discoverCodex(input, workspace) {
  const matches = /* @__PURE__ */ new Set();
  const seen = /* @__PURE__ */ new Set();
  let cursor = null;
  const deadline = Date.now() + 4e3;
  for (let page = 0; page < 20; page++) {
    if (Date.now() > deadline) return null;
    const response = asRecord(await codexRequest("thread/list", {
      cwd: workspace,
      cursor,
      limit: 100
    }));
    if (!Array.isArray(response?.data)) return null;
    for (const value of response.data) {
      const thread = asRecord(value);
      const preview = thread?.preview;
      if (thread?.cwd === workspace && typeof thread.id === "string" && ID_PATTERN2.test(thread.id) && typeof preview === "string" && hasExactMarker(preview, input.taskId) && hasExactMarker(preview, input.dispatchId)) {
        matches.add(thread.id);
      }
    }
    if (response.nextCursor === null || response.nextCursor === void 0) {
      return matches.size === 1 ? [...matches][0] : null;
    }
    if (typeof response.nextCursor !== "string" || seen.has(response.nextCursor)) return null;
    seen.add(response.nextCursor);
    cursor = response.nextCursor;
  }
  return null;
}
function hasExactMarker(text, id) {
  let index = text.indexOf(id);
  while (index >= 0) {
    const before = index === 0 ? "" : text[index - 1];
    const after = text[index + id.length] ?? "";
    if (!/[A-Za-z0-9_]/.test(before) && !/[A-Za-z0-9_]/.test(after)) return true;
    index = text.indexOf(id, index + 1);
  }
  return false;
}
async function discoverClaude(input, workspace) {
  if (!input.workerHandle || !ID_PATTERN2.test(input.workerHandle) || process.platform !== "linux") return null;
  const { stdout } = await pExecFile("claude", ["agents", "--cwd", workspace, "--json", "--all"], {
    cwd: workspace,
    encoding: "utf8",
    timeout: PROBE_TIMEOUT_MS,
    maxBuffer: MAX_PROVIDER_RESPONSE_BYTES,
    windowsHide: true
  });
  const rows = claudeRows(JSON.parse(stdout));
  if (!rows) return null;
  const matches = /* @__PURE__ */ new Set();
  for (const row of rows) {
    if (row.cwd !== workspace || typeof row.sessionId !== "string" || !ID_PATTERN2.test(row.sessionId) || !Number.isSafeInteger(row.pid) || row.pid <= 0) continue;
    try {
      const env = await readFile2(`/proc/${row.pid}/environ`);
      if (env.length > MAX_PROVIDER_RESPONSE_BYTES) continue;
      const handle = env.toString("utf8").split("\0").find((entry) => entry.startsWith("ORCA_TERMINAL_HANDLE="))?.slice("ORCA_TERMINAL_HANDLE=".length);
      if (handle === input.workerHandle) matches.add(row.sessionId);
    } catch {
    }
  }
  return matches.size === 1 ? [...matches][0] : null;
}
function asRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value) ? value : null;
}
function claudeRows(data) {
  if (Array.isArray(data)) return data.filter((row) => asRecord(row) !== null);
  const record2 = asRecord(data);
  if (!record2) return null;
  for (const key of ["agents", "backgroundAgents", "items"]) {
    if (Array.isArray(record2[key])) {
      return record2[key].filter((row) => asRecord(row) !== null);
    }
  }
  return null;
}
async function probeClaude(input, workspace) {
  let stdout;
  try {
    ({ stdout } = await pExecFile("claude", ["agents", "--cwd", workspace, "--json", "--all"], {
      cwd: workspace,
      encoding: "utf8",
      timeout: PROBE_TIMEOUT_MS,
      maxBuffer: MAX_PROVIDER_RESPONSE_BYTES,
      windowsHide: true
    }));
  } catch (error) {
    if (error.code === "ENOENT") {
      return observation("unavailable", "The Claude CLI is not installed or is not on PATH.");
    }
    if (error.code === "ETIMEDOUT") {
      return observation("unknown", "The Claude agent listing timed out; no liveness conclusion was made.");
    }
    return observation("unavailable", "The Claude CLI could not provide its public agent listing.");
  }
  let data;
  try {
    data = JSON.parse(stdout);
  } catch {
    return observation("unknown", "The Claude agent listing was not valid JSON.");
  }
  const rows = claudeRows(data);
  if (!rows) return observation("unknown", "The Claude agent listing used an unrecognized JSON shape.");
  const matches = rows.filter((row2) => row2.sessionId === input.sessionId);
  if (matches.length === 0) {
    return observation("unknown", "The exact session ID was absent from the agent listing; absence does not prove exit.");
  }
  if (matches.length !== 1) {
    return observation("unknown", "The agent listing returned duplicate rows for this session ID.");
  }
  const row = matches[0];
  const reportedWorkspace = row.cwd ?? row.directory ?? row.workingDirectory ?? row.worktreePath;
  if (reportedWorkspace !== void 0) {
    if (typeof reportedWorkspace !== "string" || !isAbsolute(reportedWorkspace)) {
      return observation("unknown", "Claude returned a malformed workspace for the exact session.");
    }
    try {
      const sessionWorkspace = await realpath2(reportedWorkspace);
      const withinWorkspace = relative(workspace, sessionWorkspace);
      if (withinWorkspace !== "" && (withinWorkspace === ".." || withinWorkspace.startsWith(`..${sep}`) || isAbsolute(withinWorkspace))) {
        return observation("unknown", "Claude reports this session outside the Dispatch workspace.");
      }
    } catch {
      return observation("unknown", "Claude's reported session workspace no longer exists locally.");
    }
  }
  const state = typeof row.state === "string" ? row.state.toLowerCase() : "";
  const status = typeof row.status === "string" ? row.status.toLowerCase() : "";
  if (state === "stopped" || state === "failed") {
    return observation("exited", `Claude reports the exact background session as ${state}.`);
  }
  if (status === "busy") {
    return observation("active", "Claude reports the exact session process as busy.");
  }
  if (status === "idle" || state === "done") {
    return observation("idle", "Claude reports the exact session as idle; this does not settle the Orca Task.");
  }
  return observation(
    "unknown",
    "Claude listed the exact session but its state does not prove that it is active or exited."
  );
}
async function runOpenCodeApi(workspace, path) {
  let stdout;
  try {
    ({ stdout } = await pExecFile("opencode", ["api", "GET", path], {
      cwd: workspace,
      encoding: "utf8",
      timeout: PROBE_TIMEOUT_MS,
      maxBuffer: MAX_PROVIDER_RESPONSE_BYTES,
      windowsHide: true
    }));
  } catch (error) {
    if (error.code === "ENOENT") {
      return { ok: false, detail: "The OpenCode CLI is not installed or is not on PATH." };
    }
    if (error.code === "ETIMEDOUT") {
      return { ok: false, detail: "The OpenCode background service query timed out." };
    }
    return { ok: false, detail: "The OpenCode background service did not provide the requested API response." };
  }
  try {
    return { ok: true, body: JSON.parse(stdout) };
  } catch {
    return { ok: false, detail: "The OpenCode API response was not valid JSON." };
  }
}
async function probeOpenCode(input, workspace) {
  const session = await runOpenCodeApi(
    workspace,
    `/api/session/${encodeURIComponent(input.sessionId)}`
  );
  if (!session.ok) return observation("unavailable", session.detail);
  const sessionRecord = asRecord(asRecord(session.body)?.data);
  if (!sessionRecord) {
    return observation("unknown", "OpenCode returned an unrecognized session response.");
  }
  const location = asRecord(sessionRecord.location);
  if (sessionRecord.id !== input.sessionId || typeof location?.directory !== "string") {
    return observation("unknown", "OpenCode did not confirm both the exact session ID and its workspace.");
  }
  try {
    if (await realpath2(location.directory) !== workspace) {
      return observation("unknown", "OpenCode reports this session under a different workspace.");
    }
  } catch {
    return observation("unknown", "OpenCode's reported session workspace no longer exists locally.");
  }
  const statuses = await runOpenCodeApi(workspace, "/api/session/active");
  if (!statuses.ok) return observation("unavailable", statuses.detail);
  const statusMap = asRecord(asRecord(statuses.body)?.data);
  if (!statusMap) {
    return observation("unknown", "OpenCode returned an unrecognized status response.");
  }
  const row = asRecord(statusMap[input.sessionId]);
  if (!row) {
    const outcome = typeof sessionRecord.outcome === "string" ? sessionRecord.outcome.toLowerCase() : "";
    if (outcome === "succeeded" || outcome === "failed" || outcome === "cancelled" || outcome === "interrupted") {
      return observation("exited", `OpenCode reports the exact session execution as ${outcome}.`);
    }
    return observation(
      "unknown",
      "OpenCode returned no active entry or terminal outcome for the exact session; absence is not proof of exit."
    );
  }
  const state = typeof row?.type === "string" ? row.type.toLowerCase() : typeof row?.status === "string" ? row.status.toLowerCase() : "";
  if (state === "running" || state === "busy" || state === "retry") {
    return observation("active", `OpenCode reports the exact session as ${state}.`);
  }
  if (state === "idle") {
    return observation("idle", "OpenCode reports the exact session as idle; this does not settle the Orca Task.");
  }
  return observation("unknown", "OpenCode returned an unrecognized status for the exact session.");
}

// server/src/codexSession.ts
import { createHash as createHash2 } from "node:crypto";
import { constants as fsConstants2, realpathSync } from "node:fs";
import { open as open2, readdir, lstat as lstat2, realpath as realpath3 } from "node:fs/promises";
import { homedir as homedir2 } from "node:os";
import { isAbsolute as isAbsolute2, join as join5, resolve as resolve2 } from "node:path";
var SAFE_SESSION_ID = /^[A-Za-z0-9][A-Za-z0-9._-]{7,127}$/;
var ROLLOUT_NAME_PREFIX = /^rollout-\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}$/;
var MAX_SEARCH_DEPTH = 5;
var MAX_FILE_BYTES = 16 * 1024 * 1024;
var MAX_TOTAL_CHARS = 16e4;
var MAX_BLOCK_CHARS = 16e3;
var MAX_LINES = 1e4;
var MAX_MESSAGES = 1e3;
var DISPATCH_HEADER = "You are working inside Orca, a multi-agent IDE. You are a dispatched worker.";
var DISPATCH_LEAD = "Please carry out this task from my Orca coordinator by following the brief I pasted below.";
function asRecord2(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}
function resolveCodexHome(override) {
  if (override && isAbsolute2(override)) return override;
  if (process.env.CODEX_HOME && isAbsolute2(process.env.CODEX_HOME)) return process.env.CODEX_HOME;
  return join5(homedir2(), ".codex");
}
function prefixHash(lines, end) {
  const hash = createHash2("sha256");
  for (let i = 0; i < end; i++) hash.update(lines[i]).update("\n");
  return hash.digest("hex").slice(0, 16);
}
function parseTimestampMs(raw) {
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "string" && raw.trim()) {
    const parsed = Date.parse(raw);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}
function extractTextParts(content) {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  const parts = [];
  for (const item of content) {
    if (typeof item === "string") {
      parts.push(item);
      continue;
    }
    const rec = asRecord2(item);
    if (typeof rec.text === "string" && rec.text.length > 0) {
      parts.push(rec.text);
    }
  }
  return parts.join("\n");
}
function singleTextPart(content, type) {
  if (!Array.isArray(content) || content.length !== 1) return null;
  const part = asRecord2(content[0]);
  return part.type === type && typeof part.text === "string" ? part.text.trim() : null;
}
function isExactDispatchPreamble(text, taskId, dispatchId) {
  if (!text.startsWith(DISPATCH_HEADER) && !text.startsWith(DISPATCH_LEAD)) return false;
  const taskBoundary = /\r?\n=== TASK ===(?:\r?\n|$)/.exec(text);
  if (!taskBoundary) return false;
  const lines = text.slice(0, taskBoundary.index).split(/\r?\n/);
  const header = lines[0] !== DISPATCH_LEAD ? 0 : lines[1] === "" ? 2 : 1;
  if (!/^(?:Your coordinator's (?:terminal handle|Orca session ID)|You are coordinated from .+\. Your coordinator's address here) is: \S+$/.test(lines[header + 1] ?? "")) return false;
  if (lines[header] !== DISPATCH_HEADER || lines[header + 2] !== `Your task ID is: ${taskId}`) return false;
  const commands = lines.indexOf("=== CLI COMMANDS ===", header + 3);
  if (commands < 0 || lines[commands + 1] !== "" || lines[commands + 2] !== "```sh") return false;
  const end = lines.indexOf("```", commands + 3);
  if (end < 0 || lines[end + 2] !== "=== AFTER YOU SEND worker_done ===") return false;
  let sender;
  let escalation = false;
  let done = false;
  const identity = `--task-id ${taskId} --dispatch-id ${dispatchId}`;
  for (let i = commands + 3; i < end; i++) {
    const recipe = /^  (orca(?:-dev|-ide)? orchestration send --from \S+) --type (escalation|worker_done) (.+)$/.exec(lines[i]);
    if (!recipe) continue;
    if (sender !== void 0 && sender !== recipe[1]) return false;
    sender = recipe[1];
    if (recipe[2] === "escalation") {
      if (escalation || recipe[3] !== `--subject "Blocked: <reason>" --body "<details>" ${identity}`) return false;
      escalation = true;
    } else {
      if (done || recipe[3] !== `--subject "<short status>" --body "<3-sentence summary: what you did, what you found, what's left>" ${identity} --outcome succeeded`) return false;
      done = true;
    }
  }
  return escalation && done;
}
async function findCodexSessionFile(sessionId, codexHomeOverride) {
  if (!SAFE_SESSION_ID.test(sessionId)) return null;
  const home = await realpath3(resolveCodexHome(codexHomeOverride)).catch(() => null);
  if (!home) return null;
  const sessionsDir = join5(home, "sessions");
  const info3 = await lstat2(sessionsDir).catch(() => null);
  if (!info3?.isDirectory()) return null;
  const exactName = `${sessionId}.jsonl`;
  const suffix = `-${sessionId}.jsonl`;
  const matches = [];
  async function walk(dir, depth) {
    if (depth > MAX_SEARCH_DEPTH || matches.length > 1) return;
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (matches.length > 1) return;
      if (entry.isSymbolicLink()) continue;
      const fullPath = join5(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath, depth + 1);
      } else if (entry.isFile() && (entry.name === exactName || entry.name.endsWith(suffix) && ROLLOUT_NAME_PREFIX.test(entry.name.slice(0, -suffix.length)))) {
        matches.push(fullPath);
      }
    }
  }
  try {
    await walk(sessionsDir, 0);
    return matches.length === 1 && await realpath3(matches[0]) === matches[0] ? matches[0] : null;
  } catch {
    return null;
  }
}
function parseCodexSessionJsonl(raw, opts) {
  if (!SAFE_SESSION_ID.test(opts.sessionId) || !opts.taskId || !opts.dispatchId || !isAbsolute2(opts.workspace)) return null;
  const norm = opts.normalizeWorkspace ?? ((p) => resolve2(p));
  const expectedWorkspace = norm(opts.workspace);
  if (!expectedWorkspace) return null;
  const rawLines = raw.split(/\r?\n/);
  let metaVerified = false;
  let currentWorkspace2 = expectedWorkspace;
  let launchText = null;
  let launchTurnId;
  let launchEchoPending = false;
  let scopeEnded = false;
  let currentModel = null;
  const items = [];
  let clipped = false;
  let budget = MAX_TOTAL_CHARS;
  const clipText = (value) => {
    const allowed = Math.min(MAX_BLOCK_CHARS, Math.max(0, budget));
    if (value.length > allowed) clipped = true;
    const out = value.slice(0, allowed);
    budget -= out.length;
    return out;
  };
  for (let lineIndex = 0; lineIndex < rawLines.length; lineIndex++) {
    const line = rawLines[lineIndex];
    if (!line.trim()) continue;
    let obj;
    try {
      obj = asRecord2(JSON.parse(line));
    } catch {
      if (lineIndex !== rawLines.length - 1) return null;
      clipped = true;
      break;
    }
    const type = obj.type;
    const payload = asRecord2(obj.payload);
    const ts = parseTimestampMs(obj.timestamp);
    if (type === "session_meta") {
      const { id: id2, session_id: sessionId, cwd } = payload;
      if (metaVerified || id2 === void 0 && sessionId === void 0 || id2 !== void 0 && id2 !== opts.sessionId || sessionId !== void 0 && sessionId !== opts.sessionId || typeof cwd !== "string" || !isAbsolute2(cwd) || norm(cwd) !== expectedWorkspace) return null;
      metaVerified = true;
      continue;
    }
    if (!metaVerified || typeof type !== "string") return null;
    if (type === "event_msg") {
      if (payload.type === "thread_settings_applied") {
        const settings = asRecord2(payload.thread_settings);
        if (typeof settings.model === "string" && settings.model.trim()) currentModel = settings.model.trim();
      }
      if (launchText !== null && !scopeEnded) {
        const item = asRecord2(payload.item);
        if (payload.type === "task_started" || payload.type === "turn_started") {
          scopeEnded = true;
        } else if (payload.type === "user_message" || payload.type === "item_completed" && item.type === "UserMessage") {
          const echo = payload.type === "user_message" ? typeof payload.message === "string" ? payload.message.trim() : null : singleTextPart(item.content, "text");
          if (!launchEchoPending || echo !== launchText || typeof launchTurnId === "string" && typeof payload.turn_id === "string" && payload.turn_id !== launchTurnId) {
            scopeEnded = true;
          }
          launchEchoPending = false;
        }
      }
      continue;
    }
    if (type === "turn_context") {
      if (typeof payload.model === "string" && payload.model.trim()) currentModel = payload.model.trim();
      if (payload.cwd !== void 0) {
        currentWorkspace2 = typeof payload.cwd === "string" && isAbsolute2(payload.cwd) ? norm(payload.cwd) : null;
        if (launchText !== null && currentWorkspace2 !== expectedWorkspace) scopeEnded = true;
      }
      continue;
    }
    if (type !== "response_item") continue;
    const pType = payload.type;
    const id = typeof payload.id === "string" ? payload.id : null;
    if (pType === "message" && payload.role === "user") {
      const text = singleTextPart(payload.content, "input_text");
      if (text !== null && isExactDispatchPreamble(text, opts.taskId, opts.dispatchId)) {
        if (launchText !== null || currentWorkspace2 !== expectedWorkspace) return null;
        launchText = text;
        launchTurnId = asRecord2(payload.internal_chat_message_metadata_passthrough).turn_id;
        launchEchoPending = true;
        items.push({
          id,
          role: "user",
          timestamp: ts,
          model: null,
          blocks: [{ type: "text", text }],
          lines: [`[user] ${text}`]
        });
      } else if (launchText !== null) {
        scopeEnded = true;
      }
      continue;
    }
    if (launchText === null || scopeEnded) continue;
    launchEchoPending = false;
    if (pType === "message") {
      if (payload.role !== "assistant") continue;
      const fullText = extractTextParts(payload.content).trim();
      if (!fullText) continue;
      items.push({
        id,
        role: "assistant",
        timestamp: ts,
        model: currentModel,
        blocks: [{ type: "text", text: fullText }],
        lines: [`[assistant] ${fullText}`]
      });
      continue;
    }
    if (pType === "custom_tool_call" || pType === "function_call") {
      const name = typeof payload.name === "string" && payload.name.trim() ? payload.name.trim() : "tool";
      const callId = typeof payload.call_id === "string" ? payload.call_id : null;
      const status = typeof payload.status === "string" ? payload.status : null;
      const rawInput = typeof payload.input === "string" ? payload.input : typeof payload.arguments === "string" ? payload.arguments : payload.input !== void 0 ? JSON.stringify(payload.input) : "";
      items.push({
        id,
        role: "assistant",
        timestamp: ts,
        model: currentModel,
        blocks: [{ type: "tool-call", name, input: rawInput, callId, status }],
        lines: [`[tool ${name}]${status ? ` ${status}` : ""}${rawInput ? ` ${rawInput}` : ""}`]
      });
      continue;
    }
    if (pType === "custom_tool_call_output" || pType === "function_call_output") {
      const callId = typeof payload.call_id === "string" ? payload.call_id : null;
      const output = extractTextParts(payload.output).trim();
      const isError = payload.is_error === true;
      items.push({
        id,
        role: "tool",
        timestamp: ts,
        model: null,
        blocks: [{ type: "tool-result", output, callId, isError }],
        lines: [`[tool result] ${output}`]
      });
    }
  }
  if (launchText === null) return null;
  const lines = [];
  const structured = [];
  for (const item of items) {
    if (budget <= 0 || lines.length >= MAX_LINES) {
      clipped = true;
      break;
    }
    const startLine = lines.length;
    const boundedBlocks = [];
    for (const block of item.blocks) {
      if (block.type === "text") {
        const text = clipText(block.text);
        if (text) boundedBlocks.push({ type: "text", text });
      } else if (block.type === "tool-call") {
        boundedBlocks.push({ ...block, input: clipText(block.input) });
      } else if (block.type === "tool-result") {
        boundedBlocks.push({ ...block, output: clipText(block.output) });
      }
    }
    for (const rawLine of item.lines) {
      const sliced = rawLine.slice(0, MAX_BLOCK_CHARS);
      if (rawLine.length > MAX_BLOCK_CHARS) clipped = true;
      const chunks = sliced.split("\n");
      const remaining = MAX_LINES - lines.length;
      lines.push(...chunks.slice(0, remaining));
      if (chunks.length > remaining) clipped = true;
    }
    if (boundedBlocks.length > 0 && structured.length < MAX_MESSAGES) {
      structured.push({
        startLine,
        message: {
          id: item.id,
          role: item.role,
          timestamp: item.timestamp,
          ...item.model ? { model: item.model } : {},
          source: "codex-session",
          blocks: boundedBlocks
        }
      });
    }
  }
  return { lines, structured, clipped, scopeEnded };
}
async function readFileBounded(filePath) {
  const before = await lstat2(filePath, { bigint: true }).catch(() => null);
  if (!before?.isFile()) return null;
  const fh = await open2(filePath, fsConstants2.O_RDONLY | fsConstants2.O_NOFOLLOW | fsConstants2.O_NONBLOCK).catch(() => null);
  if (!fh) return null;
  try {
    const info3 = await fh.stat({ bigint: true });
    if (!info3.isFile() || info3.dev !== before.dev || info3.ino !== before.ino) return null;
    const fileClipped = info3.size > BigInt(MAX_FILE_BYTES);
    const toRead = fileClipped ? MAX_FILE_BYTES : Number(info3.size);
    const buf = Buffer.allocUnsafe(toRead);
    let offset = 0;
    while (offset < toRead) {
      const { bytesRead } = await fh.read(buf, offset, toRead - offset, offset);
      if (bytesRead <= 0) break;
      offset += bytesRead;
    }
    const after = await lstat2(filePath, { bigint: true });
    if (offset !== toRead || !after.isFile() || after.dev !== info3.dev || after.ino !== info3.ino || after.size < info3.size || after.size === info3.size && after.mtimeNs !== info3.mtimeNs || await realpath3(filePath) !== filePath) return null;
    return { text: buf.toString("utf8"), fileClipped };
  } catch {
    return null;
  } finally {
    await fh.close().catch(() => {
    });
  }
}
async function readBoundCodexSessionOutput(opts) {
  if (!isAbsolute2(opts.workspace)) return null;
  const resolvedWorkspace = await realpath3(opts.workspace).catch(() => null);
  if (!resolvedWorkspace) return null;
  const filePath = await findCodexSessionFile(opts.sessionId, opts.codexHome);
  if (!filePath) return null;
  const file = await readFileBounded(filePath);
  if (!file) return null;
  const parsed = parseCodexSessionJsonl(file.text, {
    dispatchId: opts.dispatchId,
    taskId: opts.taskId,
    sessionId: opts.sessionId,
    workspace: resolvedWorkspace,
    normalizeWorkspace: (p) => {
      if (p === resolvedWorkspace) return p;
      try {
        return realpathSync(p);
      } catch {
        return null;
      }
    }
  });
  if (!parsed || parsed.structured.length === 0) return null;
  const { lines, structured } = parsed;
  const budgetClipped = parsed.clipped || file.fileClipped;
  const prefix = `codex1:${opts.dispatchId}:${opts.sessionId}:`;
  let sourceChanged = Boolean(opts.cursor && !opts.cursor.startsWith(prefix));
  let offset = 0;
  if (opts.cursor && !sourceChanged) {
    const match = /^(\d+):([a-f0-9]{16})$/.exec(opts.cursor.slice(prefix.length));
    if (!match || !Number.isSafeInteger(Number(match[1]))) {
      sourceChanged = true;
      offset = 0;
    } else {
      offset = Number(match[1]);
      if (offset > lines.length || prefixHash(lines, offset) !== match[2]) {
        sourceChanged = true;
        offset = 0;
      }
    }
  }
  const limit = Math.max(1, Math.min(200, opts.limit ?? 40));
  const page = lines.slice(offset, offset + limit);
  const pageMessages = structured.filter((entry) => entry.startLine >= offset && entry.startLine < offset + page.length).map((entry) => entry.message);
  const endOffset = offset + page.length;
  const clipped = budgetClipped || endOffset < lines.length;
  const exited = opts.status?.liveness === "exited";
  return {
    dispatchId: opts.dispatchId,
    source: "codex-session",
    provider: "codex",
    sourceExact: true,
    sourceIdentity: opts.sessionId,
    cursor: `${prefix}${endOffset}:${prefixHash(lines, endOffset)}`,
    lines: page,
    messages: pageMessages,
    contentComplete: !clipped && !parsed.scopeEnded && exited,
    clipped,
    sourceChanged,
    warnings: [
      "Local Codex session transcript (Orca worker-read reported session_not_reported).",
      ...budgetClipped ? ["Codex session output reached the viewer read budget; this page is not a complete transcript."] : [],
      ...parsed.scopeEnded ? ["Later session output is not proven to belong to this Dispatch; only the initial Dispatch turn is shown."] : []
    ],
    ...opts.status ? { status: opts.status } : {}
  };
}

// server/src/orca.ts
var pExecFile2 = promisify3(execFile3);
function parseCliCommand(spec) {
  const trimmed = spec.trim();
  if (!trimmed) throw new Error('ORCA_CLI_COMMAND is empty \u2014 name the Orca CLI to run, e.g. "/opt/orca/orca-ide"');
  const argv = [];
  let cur = "";
  let hasWord = false;
  let quote = null;
  const operators = /* @__PURE__ */ new Set(["|", ";", "&", "<", ">", "(", ")", "`", "$"]);
  const flush = () => {
    if (hasWord) argv.push(cur);
    cur = "";
    hasWord = false;
  };
  for (const ch of trimmed) {
    if (ch === "\n" || ch === "\r") {
      throw new Error(`ORCA_CLI_COMMAND must be a single line (got ${JSON.stringify(spec.slice(0, 64))})`);
    }
    if (quote) {
      if (ch === quote) quote = null;
      else {
        cur += ch;
        hasWord = true;
      }
      continue;
    }
    if (ch === '"' || ch === "'") {
      quote = ch;
      hasWord = true;
      continue;
    }
    if (ch === " " || ch === "	") {
      flush();
      continue;
    }
    if (operators.has(ch)) {
      throw new Error(
        `ORCA_CLI_COMMAND must be a plain executable and arguments, not a shell line \u2014 the character ${JSON.stringify(ch)} (pipes, redirection, substitution, \u2026) is not supported. Got ${JSON.stringify(spec.slice(0, 64))}`
      );
    }
    cur += ch;
    hasWord = true;
  }
  if (quote) throw new Error(`ORCA_CLI_COMMAND has an unclosed ${quote} quote: ${JSON.stringify(spec.slice(0, 64))}`);
  flush();
  if (argv.length === 0) throw new Error("ORCA_CLI_COMMAND names no executable");
  const [executable, ...prefixArgs] = argv;
  return { executable, prefixArgs };
}
var ATTESTATION_ENV_KEYS = /* @__PURE__ */ new Set([
  "ORCA_TERMINAL_HANDLE",
  "ORCA_PANE_KEY",
  "ORCA_TAB_ID",
  "ORCA_AGENT_PANE",
  "ORCA_AGENT_LAUNCH",
  "ORCA_AGENT_LAUNCH_TOKEN",
  "ORCA_OPENCODE_AGENT"
]);
function sanitizedOrcaChildEnv(env = process.env) {
  const out = {};
  for (const [key, value] of Object.entries(env)) {
    if (ATTESTATION_ENV_KEYS.has(key) || key.startsWith("ORCA_AGENT_HOOK_")) continue;
    out[key] = value;
  }
  return out;
}
function isInsideManagedOrcaTerminal(env) {
  return Boolean(env.ORCA_TERMINAL_HANDLE?.trim());
}
function resolveOrcaCommand(env, ctx) {
  const override = env.ORCA_CLI_COMMAND?.trim();
  if (override) return parseCliCommand(override);
  if (env.ORCA_DEV_REPO_ROOT?.trim()) return { executable: "orca-dev", prefixArgs: [] };
  if (ctx.platform === "linux" && !ctx.insideManagedTerminal) {
    return { executable: "orca-ide", prefixArgs: [] };
  }
  return { executable: "orca", prefixArgs: [] };
}
function workspaceHash(dir) {
  return createHash3("sha256").update(dir).digest("hex").slice(0, 8);
}
function resolveWorkspace(env = process.env, cwd = process.cwd()) {
  const raw = env.WORKSPACE_DIR?.trim() || (env.INIT_CWD?.trim() && !env.npm_lifecycle_event?.startsWith("test") ? env.INIT_CWD.trim() : "") || cwd;
  let dir;
  try {
    dir = realpathSync2(raw);
  } catch {
    throw new Error(
      `Workspace directory does not exist: ${raw}` + (env.WORKSPACE_DIR ? " (from WORKSPACE_DIR)" : " (the current directory)") + ". Create it, cd into it, or fix WORKSPACE_DIR."
    );
  }
  if (!statSync(dir).isDirectory()) {
    throw new Error(`Workspace path is not a directory: ${dir}`);
  }
  return { dir, hash: workspaceHash(dir), instanceId: randomBytes2(4).toString("hex") };
}
function resolveWorktreeSelector(env, ws) {
  const explicit = env.ORCA_WORKTREE?.trim();
  return explicit || `path:${ws.dir}`;
}
var runtime = null;
function resetReadinessCacheForTests() {
  readinessCache = null;
  readinessRuntime = null;
}
function initOrcaRuntime(opts = {}) {
  resetReadinessCacheForTests();
  const env = opts.env ?? process.env;
  const workspace = resolveWorkspace(env, opts.cwd);
  runtime = {
    command: resolveOrcaCommand(env, {
      platform: process.platform,
      insideManagedTerminal: isInsideManagedOrcaTerminal(env)
    }),
    workspace,
    worktree: resolveWorktreeSelector(env, workspace)
  };
  return runtime;
}
function getOrcaRuntime() {
  return runtime ?? initOrcaRuntime();
}
function currentWorkspace() {
  return getOrcaRuntime().workspace;
}
function formatCommand(cmd) {
  return [cmd.executable, ...cmd.prefixArgs].join(" ");
}
var OrcaCliError = class extends Error {
  code;
  recoveryCommand;
  payload;
  constructor(message, code = null, recoveryCommand = null, payload = void 0) {
    super(message);
    this.name = "OrcaCliError";
    this.code = code;
    this.recoveryCommand = recoveryCommand;
    this.payload = payload;
  }
};
var RESPONSE_LOST = "response_lost";
async function runOrca(args, opts = {}) {
  const { command, workspace } = getOrcaRuntime();
  let fullArgs = args.includes("--json") ? args : [...args, "--json"];
  if (args[0] === "orchestration" && !args.includes("--full")) {
    const { cliVersion } = await checkReadiness();
    if (cliVersion && compareVersions(cliVersion, "1.4.246") >= 0) fullArgs = [...fullArgs, "--full"];
  }
  let stdout;
  let keepOpenFailure = null;
  try {
    const res = await pExecFile2(command.executable, [...command.prefixArgs, ...fullArgs], {
      cwd: workspace.dir,
      env: sanitizedOrcaChildEnv(),
      // The whole point of the resolved argv spec: nothing is ever re-parsed
      // or expanded by a shell. execFile defaults to this; spelled out so a
      // future "convenient" refactor doesn't flip it.
      shell: false,
      maxBuffer: 32 * 1024 * 1024,
      timeout: opts.timeoutMs ?? 18e4
    });
    stdout = res.stdout;
  } catch (err) {
    const e = err;
    if (e.stdout && e.stdout.trim().startsWith("{")) {
      stdout = e.stdout;
      if (args[1] === "worker-start" && args.includes("--keep-open")) {
        keepOpenFailure = /started but was not kept open \(([a-z_]+)\)/.exec(e.stderr ?? "")?.[1] ?? null;
      }
    } else if (e.killed) {
      throw new OrcaCliError(
        `orca ${fullArgs.join(" ")} timed out before its response was read \u2014 whether it took effect is unknown (resolve with request-show / --retry-request).`,
        RESPONSE_LOST
      );
    } else if (typeof e.code === "number") {
      throw new OrcaCliError(
        `orca ${fullArgs.join(" ")} exited ${e.code} without a readable JSON receipt: ${(e.stderr || e.message || e.stdout || "no output").slice(0, 300)}`,
        RESPONSE_LOST
      );
    } else {
      const detail = e.stderr || e.message || "unknown error";
      const hint = e.code === "ENOENT" ? ` \u2014 the resolved Orca CLI "${formatCommand(command)}" is not on PATH. Install Orca, adjust PATH, or set ORCA_CLI_COMMAND.` : "";
      throw new OrcaCliError(
        `orca ${fullArgs.join(" ")} failed: ${detail}${hint}`,
        e.code === "ENOENT" ? "cli_not_found" : e.code ? `spawn_${e.code}` : "spawn_failed"
      );
    }
  }
  let parsed;
  try {
    parsed = JSON.parse(stdout);
  } catch {
    throw new OrcaCliError(
      `orca ${fullArgs.join(" ")} returned non-JSON: ${stdout.slice(0, 500)}`,
      RESPONSE_LOST
    );
  }
  if (!parsed.ok) {
    const code = parsed.error?.code ?? null;
    const message = parsed.error?.message ?? JSON.stringify(parsed.error ?? parsed);
    const recovery = parsed.error?.data?.recoveryCommand ?? null;
    throw new OrcaCliError(
      `orca ${args[0]} ${args[1] ?? ""}: ${message}`.trim(),
      code,
      recovery,
      parsed
      // full envelope — failed mutations carry receipts in here
    );
  }
  if (keepOpenFailure && parsed.result && typeof parsed.result === "object" && !Array.isArray(parsed.result)) {
    return { ...parsed.result, keepOpenFailure };
  }
  return parsed.result;
}
function parseDeps(deps) {
  if (!deps) return [];
  try {
    const arr = JSON.parse(deps);
    return Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}
async function listRuns() {
  const runs = [];
  const seenCursors = /* @__PURE__ */ new Set();
  let cursor = null;
  const invalidReceipt = (message) => {
    throw new OrcaCliError(`run-list returned an invalid receipt: ${message}`, "invalid_pagination");
  };
  for (let pageNumber = 0; pageNumber < 1e4; pageNumber += 1) {
    const args = ["orchestration", "run-list", "--limit", "100"];
    if (cursor) args.push("--cursor", cursor);
    const result = await runOrca(args);
    if (!result || typeof result !== "object" || Array.isArray(result)) {
      invalidReceipt("result must be an object");
    }
    const receipt = result;
    if (!Array.isArray(receipt.runs)) {
      invalidReceipt("runs must be an array");
    }
    runs.push(...receipt.runs);
    const rawNext = receipt.nextCursor;
    if (rawNext !== void 0 && rawNext !== null && typeof rawNext !== "string") {
      invalidReceipt("nextCursor must be a string or null");
    }
    const nextCursor = typeof rawNext === "string" && rawNext.length > 0 ? rawNext : null;
    if (nextCursor === null) break;
    if (seenCursors.has(nextCursor)) {
      throw new OrcaCliError(
        "run-list repeated nextCursor; refusing an infinite pagination loop.",
        "invalid_pagination"
      );
    }
    seenCursors.add(nextCursor);
    cursor = nextCursor;
  }
  return runs.filter((r) => r.legacy !== 1).sort((a, b) => a.created_at < b.created_at ? 1 : -1);
}
async function listWorkspaceRuns(workspaceDir, includeRunIds = []) {
  const runs = await listRuns();
  const included = new Set([...includeRunIds].filter(Boolean));
  const belongs = new Set(included);
  const marker2 = `::${workspaceDir}@@`;
  let nextIndex = 0;
  const inspect2 = async () => {
    while (nextIndex < runs.length) {
      const run = runs[nextIndex++];
      if (included.has(run.id)) continue;
      try {
        const tasks = await listTasks(run.id, { brief: true });
        if (tasks.some(
          (task) => typeof task.created_by_process_incarnation === "string" && task.created_by_process_incarnation.includes(marker2)
        )) {
          belongs.add(run.id);
        }
      } catch {
      }
    }
  };
  await Promise.all(
    Array.from({ length: Math.min(8, runs.length) }, () => inspect2())
  );
  return runs.filter((run) => belongs.has(run.id));
}
async function createRun(objective, from) {
  const result = await runOrca([
    "orchestration",
    "run-create",
    "--objective",
    objective,
    "--from",
    from
  ]);
  return result.run;
}
async function bindRun(runId, from) {
  const result = await runOrca([
    "orchestration",
    "run-use",
    "--id",
    runId,
    "--from",
    from
  ]);
  return result.run;
}
function parseRemovedWorkSummary(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const raw = value;
  if (raw.coverage !== "complete" && raw.coverage !== "partial" || typeof raw.recordedSince !== "string" || !["tasks", "dispatches", "workers", "terminals", "activeWorkersAtRemoval"].every(
    (key) => typeof raw[key] === "number" && Number.isFinite(raw[key]) && raw[key] >= 0
  ) || !(raw.lastRemovedAt === null || typeof raw.lastRemovedAt === "string")) return null;
  return {
    coverage: raw.coverage,
    recordedSince: raw.recordedSince,
    tasks: raw.tasks,
    dispatches: raw.dispatches,
    workers: raw.workers,
    terminals: raw.terminals,
    activeWorkersAtRemoval: raw.activeWorkersAtRemoval,
    lastRemovedAt: raw.lastRemovedAt
  };
}
var REMOVED_WORK_KINDS = {
  task: true,
  dispatch: true,
  worker: true,
  terminal: true,
  remote_worker: true,
  federated_worker: true
};
function parseRemovedWorkPage(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Malformed removed-work page");
  const raw = value;
  if (!Array.isArray(raw.entries) || !raw.page || typeof raw.page !== "object") throw new Error("Malformed removed-work page");
  const page = raw.page;
  if (typeof page.hasMore !== "boolean" || !(page.nextCursor === null || typeof page.nextCursor === "string")) {
    throw new Error("Malformed removed-work page cursor");
  }
  if (raw.entries.length > 200) throw new Error("Removed-work page exceeds the official page limit");
  const entries = raw.entries.map((item) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) throw new Error("Malformed removed-work entry");
    const entry = item;
    if (typeof entry.seq !== "number" || !Number.isFinite(entry.seq) || typeof entry.id !== "string" || typeof entry.removedAt !== "string" || typeof entry.kind !== "string") {
      throw new Error("Malformed removed-work entry");
    }
    if (!Object.hasOwn(REMOVED_WORK_KINDS, entry.kind)) return { seq: entry.seq, id: entry.id, removedAt: entry.removedAt, kind: entry.kind, unreadable: true };
    return entry;
  });
  return { entries, page: { hasMore: page.hasMore, nextCursor: page.nextCursor } };
}
async function showRun(runId) {
  let result;
  try {
    result = await runOrca(["orchestration", "run-show", "--id", runId]);
  } catch (err) {
    if (err instanceof OrcaCliError && err.code === "run_not_found") return null;
    throw err;
  }
  return result.run ? { run: result.run, removedWork: parseRemovedWorkSummary(result.removedWork) } : null;
}
async function listRemovedWork(runId, cursor) {
  const args = ["orchestration", "run-show", "--id", runId, "--removed"];
  if (cursor !== void 0) args.push("--cursor", cursor);
  const result = await runOrca(args);
  return parseRemovedWorkPage(result.removedWork);
}
async function listTasks(runId, opts = {}) {
  const args = [
    "orchestration",
    "task-list",
    "--run",
    runId
  ];
  if (opts.brief) args.push("--brief");
  const result = await runOrca(args);
  if (!Array.isArray(result.tasks)) throw new OrcaCliError("task-list returned incomplete inventory", "inventory_incomplete");
  return result.tasks;
}
async function listGates(runId) {
  const result = await runOrca([
    "orchestration",
    "gate-list",
    "--run",
    runId
  ]);
  if (!Array.isArray(result.gates)) throw new OrcaCliError("gate-list returned incomplete inventory", "inventory_incomplete");
  const raw = result.gates;
  return raw.map((g) => normalizeGate(g));
}
function normalizeGate(g) {
  let options = [];
  const rawOptions = g.options;
  if (Array.isArray(rawOptions)) {
    options = rawOptions.map(String);
  } else if (typeof rawOptions === "string") {
    try {
      const parsed = JSON.parse(rawOptions);
      if (Array.isArray(parsed)) options = parsed.map(String);
    } catch {
      options = rawOptions ? [rawOptions] : [];
    }
  }
  return {
    id: String(g.id ?? g.gate_id ?? ""),
    taskId: g.task_id ?? g.taskId ?? null,
    question: String(g.question ?? ""),
    options: options.length ? options : ["approved", "rejected"],
    status: String(g.status ?? "pending"),
    resolution: g.resolution ?? null,
    raw: g
  };
}
async function resolveGate(gateId, resolution, from) {
  await runOrca([
    "orchestration",
    "gate-resolve",
    "--id",
    gateId,
    "--resolution",
    resolution,
    "--from",
    from
  ]);
}
async function taskUpdate(taskId, status, runId, from, result) {
  const args = [
    "orchestration",
    "task-update",
    "--id",
    taskId,
    "--status",
    status,
    "--run",
    runId,
    "--from",
    from
  ];
  if (result !== void 0) args.push("--result", result);
  await runOrca(args);
}
async function listTerminals() {
  const result = await runOrca(["terminal", "list"]);
  if (!Array.isArray(result.terminals)) throw new OrcaCliError("terminal-list returned incomplete inventory", "inventory_incomplete");
  return result.terminals.map((t) => ({
    handle: String(t.handle ?? ""),
    worktreePath: String(t.worktreePath ?? ""),
    worktreeId: String(t.worktreeId ?? ""),
    branch: String(t.branch ?? "").replace(/^refs\/heads\//, ""),
    title: String(t.title ?? "").trim(),
    connected: Boolean(t.connected),
    writable: Boolean(t.writable)
  }));
}
var COORDINATOR_TITLE = "orca-dag coordinator";
var TITLE_SEP = " \xB7 ";
function coordinatorTitle(ws) {
  return `${COORDINATOR_TITLE}${TITLE_SEP}${ws.hash}${TITLE_SEP}${ws.instanceId}`;
}
var HASH_RE = /^[0-9a-f]{8}$/;
function coordinatorTerminalCommand(title, backendPid = process.pid) {
  return `printf '\\033]0;%s\\007' '${title}' && exec sh -c 'while kill -0 ${backendPid} 2>/dev/null; do sleep 2; done'`;
}
function parseCoordinatorTitle(title) {
  if (!title.startsWith(COORDINATOR_TITLE)) return null;
  const rest = title.slice(COORDINATOR_TITLE.length);
  if (rest === "") return { kind: "legacy" };
  if (!rest.startsWith(TITLE_SEP)) return null;
  const parts = rest.slice(TITLE_SEP.length).split(TITLE_SEP);
  if (parts.length === 2 && HASH_RE.test(parts[0]) && HASH_RE.test(parts[1])) {
    return { kind: "main", hash: parts[0], instanceId: parts[1] };
  }
  if (parts.length === 3 && HASH_RE.test(parts[0]) && HASH_RE.test(parts[1]) && /^adhoc-\d+$/.test(parts[2])) {
    return { kind: "adhoc", hash: parts[0], instanceId: parts[1] };
  }
  return null;
}
async function ensureCoordinatorTerminal(worktree, ws = currentWorkspace()) {
  const title = coordinatorTitle(ws);
  const connected = (await listTerminals()).filter((t) => t.connected);
  const parsed = connected.map((t) => ({ terminal: t, info: parseCoordinatorTitle(t.title) })).filter((x) => x.info !== null);
  if (parsed.some((x) => x.info.kind === "main" && x.info.hash === ws.hash && x.info.instanceId === ws.instanceId)) {
    const mine = connected.find((t) => t.title === title);
    if (mine) return mine.handle;
  }
  const foreign = parsed.find(
    (x) => x.info.kind === "main" && x.info.hash === ws.hash && x.info.instanceId !== ws.instanceId
  );
  if (foreign) {
    const otherInstance = foreign.info.instanceId;
    throw new OrcaCliError(
      `Another orca-dag viewer (instance ${otherInstance}) is already coordinating this workspace (${ws.dir}) \u2014 its coordinator terminal is "${foreign.terminal.title}" (${foreign.terminal.handle}). Close that viewer first, or start this one against a different workspace.`,
      "coordinator_conflict"
    );
  }
  const legacy = parsed.find((x) => x.info.kind === "legacy");
  if (legacy) {
    throw new OrcaCliError(
      `An unscoped "orca-dag coordinator" terminal from an older orca-dag is still connected (${legacy.terminal.handle}). It predates workspace scoping, so this viewer can't tell whether it belongs to this workspace. Close it (or run \`npx orca-orchestration-launcher uninstall\` to clean up leftover coordinators) and start again.`,
      "coordinator_conflict"
    );
  }
  const created = await runOrca([
    "terminal",
    "create",
    "--worktree",
    worktree ?? getOrcaRuntime().worktree,
    "--title",
    title,
    // Park with our title instead of an interactive shell — see
    // coordinatorTerminalCommand for why the title has to defend itself.
    "--command",
    coordinatorTerminalCommand(title)
  ]);
  const handle = created.terminal?.handle;
  if (!handle) throw new OrcaCliError("orca terminal create returned no coordinator handle");
  return handle;
}
var tempSeq = 0;
async function createTempCoordinatorTerminal(worktree, ws = currentWorkspace()) {
  const title = `${COORDINATOR_TITLE}${TITLE_SEP}${ws.hash}${TITLE_SEP}${ws.instanceId}${TITLE_SEP}adhoc-${++tempSeq}`;
  const created = await runOrca([
    "terminal",
    "create",
    "--worktree",
    worktree ?? getOrcaRuntime().worktree,
    "--title",
    title,
    // Same parked-title trick as the main coordinator — adhoc terminals are
    // also identity-only, and if one leaks (crash mid-request) uninstall must
    // still find it by title.
    "--command",
    coordinatorTerminalCommand(title)
  ]);
  const handle = created.terminal?.handle;
  if (!handle) throw new OrcaCliError("orca terminal create returned no adhoc handle");
  return handle;
}
async function closeTerminal(handle) {
  try {
    await runOrca(["terminal", "close", "--terminal", handle]);
  } catch {
  }
}
async function closeTerminalStrict(handle) {
  await runOrca(["terminal", "close", "--terminal", handle]);
}
function isChatSessionHandle(handle) {
  if (typeof handle !== "string") return false;
  const trimmed = handle.trim();
  return trimmed.startsWith("orca_session_id:") || trimmed.startsWith("chat:");
}
async function focusTerminal(handle) {
  const trimmed = handle.trim();
  if (!trimmed) {
    throw new OrcaCliError(
      "terminal switch requires the exact runtime-issued terminal handle",
      "invalid_argument"
    );
  }
  if (isChatSessionHandle(trimmed)) {
    throw new OrcaCliError(
      "Native chat workers have no PTY terminal to focus",
      "chat_session_not_terminal"
    );
  }
  const result = await runOrca(["terminal", "switch", "--terminal", handle]);
  return { handle, raw: asRecord3(result) };
}
var MIN_EXECUTION_VERSION = "1.4.205";
var MIN_NATIVE_CODEX_VERSION = "1.4.217";
var MIN_NATIVE_OPENCODE_VERSION = "1.4.220";
var MIN_NATIVE_OPENCODE_MODEL_VERSION = "1.4.241";
var MIN_NATIVE_FRESH_PRESET_VERSION = "1.4.245";
var MIN_NATIVE_FRESH_PLACEMENT_VERSION = "1.4.246";
var MIN_OMP_EFFORT_VERSION = "1.4.263";
var MIN_VIEW_VERSION = "1.4.160";
function compareVersions(a, b) {
  const pa = a.split(".").map((s) => Number.parseInt(s, 10) || 0);
  const pb = b.split(".").map((s) => Number.parseInt(s, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
}
function evaluateReadiness(version, probeError) {
  if (probeError || version === null || !/^\d+\.\d+\.\d+$/.test(version)) {
    const detail = probeError ?? "Its status did not report a stable x.y.z runtime appVersion.";
    return {
      executionEnabled: false,
      reason: `Orca runtime is not ready for execution. ${detail} Start or reconnect the selected Orca ${MIN_EXECUTION_VERSION}+ runtime, or check ORCA_CLI_COMMAND and the selected environment. The viewer stays open in view-only mode.`
    };
  }
  if (compareVersions(version, MIN_EXECUTION_VERSION) < 0) {
    if (compareVersions(version, MIN_VIEW_VERSION) < 0) {
      return {
        executionEnabled: false,
        reason: `Orca ${version} is too old for this viewer: viewing needs ${MIN_VIEW_VERSION}+ and execution needs ${MIN_EXECUTION_VERSION}+. Upgrade Orca to enable Run/gate/worker controls.`
      };
    }
    return {
      executionEnabled: false,
      reason: `Orca ${version} is view-only here: execution needs the supervised-worker contract from Orca ${MIN_EXECUTION_VERSION}+. Browsing Runs, tasks and gates still works; upgrade Orca to enable Run/gate/worker controls.`
    };
  }
  return { executionEnabled: true, reason: null };
}
var READINESS_TTL_MS = 3e4;
var readinessCache = null;
var readinessRuntime = null;
async function runOrcaPlain(args, timeoutMs) {
  const { command, workspace } = getOrcaRuntime();
  const res = await pExecFile2(command.executable, [...command.prefixArgs, ...args], {
    cwd: workspace.dir,
    env: sanitizedOrcaChildEnv(),
    shell: false,
    timeout: timeoutMs,
    maxBuffer: 1024 * 1024
  });
  return res.stdout;
}
async function checkReadiness(force = false) {
  const current = getOrcaRuntime();
  if (!force && readinessRuntime === current && readinessCache?.checkedAt && Date.now() - readinessCache.checkedAt < READINESS_TTL_MS) {
    return readinessCache;
  }
  const { command, workspace, worktree } = current;
  let cliVersion = null;
  let version = null;
  let runtimeState = null;
  let probeError = null;
  try {
    const stdout = await runOrcaPlain(["--version"], 15e3);
    const match = stdout.match(/(\d+\.\d+\.\d+)/);
    cliVersion = match ? match[1] : null;
    if (!cliVersion) probeError = "The selected CLI did not report a recognizable --version.";
  } catch (err) {
    const e = err;
    probeError = e.code === "ENOENT" ? `no executable "${formatCommand(command)}" on PATH` : String(e.message ?? err).slice(0, 300);
  }
  if (cliVersion) {
    try {
      const status = await runOrca(
        ["status"],
        { timeoutMs: 15e3 }
      );
      version = typeof status.runtime?.appVersion === "string" ? status.runtime.appVersion : null;
      runtimeState = typeof status.runtime?.state === "string" ? status.runtime.state : null;
      if (runtimeState !== "ready" || status.runtime?.reachable === false) {
        probeError = `The selected runtime is ${runtimeState ?? "unreported"}${status.runtime?.reachable === false ? " and unreachable" : ""}.`;
      }
    } catch (err) {
      probeError = String(err.message ?? err).slice(0, 300);
    }
  }
  if (!probeError && cliVersion && compareVersions(cliVersion, MIN_EXECUTION_VERSION) < 0) {
    probeError = `The resolved CLI ${cliVersion} is too old; install CLI ${MIN_EXECUTION_VERSION}+ for supervised-worker commands.`;
  }
  const verdict = evaluateReadiness(version, probeError);
  readinessRuntime = current;
  readinessCache = {
    cli: formatCommand(command),
    workspace: workspace.dir,
    worktree,
    cliVersion,
    version,
    runtimeState,
    checkedAt: Date.now(),
    ...verdict
  };
  return readinessCache;
}
async function canUseNativeCodexFreshWorktree(readiness) {
  const probe = readiness ?? await checkReadiness(true);
  if (!probe.executionEnabled || probe.runtimeState !== "ready" || !probe.version || !/^\d+\.\d+\.\d+$/.test(probe.version) || !probe.cliVersion || !/^\d+\.\d+\.\d+$/.test(probe.cliVersion) || compareVersions(probe.version, "1.4.247") < 0 || compareVersions(probe.cliVersion, "1.4.247") < 0) return false;
  try {
    const { stdout } = await pExecFile2("codex", ["--version"], {
      cwd: currentWorkspace().dir,
      shell: false,
      timeout: 15e3,
      maxBuffer: 1024 * 1024
    });
    const match = /^codex-cli (\d+\.\d+\.\d+)\s*$/.exec(stdout);
    return Boolean(match && compareVersions(match[1], "0.166.0") >= 0);
  } catch {
    return false;
  }
}
async function assertNativePresetSupport(harness, opts, readiness) {
  assertNativePresetConstraints(harness, opts);
  if (!isNativeFreshPreset(harness)) return;
  const creating = opts.placement?.kind === "new-child" || opts.placement?.kind === "new-top-level";
  const required = creating || opts.lane ? MIN_NATIVE_FRESH_PLACEMENT_VERSION : MIN_NATIVE_FRESH_PRESET_VERSION;
  const probe = readiness ?? await checkReadiness(true);
  if (harness === "omp" && opts.effort) {
    if (!probe.executionEnabled || probe.runtimeState !== "ready" || !probe.version || !/^\d+\.\d+\.\d+$/.test(probe.version) || !probe.cliVersion || !/^\d+\.\d+\.\d+$/.test(probe.cliVersion) || compareVersions(probe.version, MIN_OMP_EFFORT_VERSION) < 0 || compareVersions(probe.cliVersion, MIN_OMP_EFFORT_VERSION) < 0) {
      throw new OrcaCliError(
        `omp effort override requires the resolved CLI and ready running Orca runtime >= ${MIN_OMP_EFFORT_VERSION} (CLI ${probe.cliVersion ?? "unknown"}, runtime ${probe.version ?? "unknown"}).`,
        "unsupported_effort"
      );
    }
  }
  if (!probe.executionEnabled || probe.runtimeState !== "ready" || !probe.version || !/^\d+\.\d+\.\d+$/.test(probe.version) || !probe.cliVersion || !/^\d+\.\d+\.\d+$/.test(probe.cliVersion) || compareVersions(probe.version, required) < 0 || compareVersions(probe.cliVersion, required) < 0) {
    throw new OrcaCliError(
      `${harness} requires the resolved CLI and a ready running Orca runtime >= ${required} (CLI ${probe.cliVersion ?? "unknown"}, runtime ${probe.version ?? "unknown"}, state ${probe.runtimeState ?? "unknown"}).`,
      "execution_disabled"
    );
  }
  if (opts.placement?.kind === "existing" && opts.placement.selector || creating) {
    let row;
    let repo = null;
    try {
      row = opts.placement?.kind === "new-top-level" || opts.placement?.kind === "new-child" && opts.placement.repo ? await showRepo(opts.placement.repo) : await showWorktree(opts.placement?.kind === "existing" ? opts.placement.selector : getOrcaRuntime().worktree);
      if (creating && row) {
        repo = "kind" in row ? row : row.repoId ? await showRepo(`id:${row.repoId}`) : null;
      }
    } catch {
      throw new OrcaCliError(`${harness} workspace/repository could not be verified; no replacement is started`, "workspace_unverifiable");
    }
    if (!row) throw new OrcaCliError(`${harness} workspace/repository was not found`, "workspace_not_found");
    if (!row.path?.startsWith("/") || row.hostId && row.hostId !== "local" || creating && (!repo || repo.kind !== "git" || !repo.path?.startsWith("/") || repo.hostId && repo.hostId !== "local")) {
      throw new OrcaCliError(`${harness} target has no verified local Linux ${creating ? "Git repository" : "workspace"}`, "workspace_unverifiable");
    }
  }
}
var STOP_EVENT_REASONS = /* @__PURE__ */ new Set([
  "finished",
  "errored",
  "needs-input",
  "exited",
  "lost"
]);
function isStopEventReason(value) {
  return typeof value === "string" && STOP_EVENT_REASONS.has(value);
}
function extractPermissionPrompt(payload) {
  if (!payload) return null;
  if (payload.approval !== void 0) {
    const approval = asRecordOrNull(payload.approval);
    const worker = asRecordOrNull(approval?.worker);
    if (approval?.state !== "open" || typeof approval.approvalId !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(approval.approvalId) || typeof payload.dispatchId !== "string" || worker?.dispatchId !== payload.dispatchId || !Array.isArray(approval.allowedActions)) return null;
    return { id: approval.approvalId, allowSupported: approval.allowedActions.includes("allow") };
  }
  const rawId = payload.approvalId ?? payload.promptId ?? payload.prompt ?? payload.approval_id ?? payload.prompt_id;
  if (typeof rawId !== "string" || !rawId.trim()) return null;
  const allowSupported = typeof payload.allowSupported === "boolean" ? payload.allowSupported : typeof payload.canApprove === "boolean" ? payload.canApprove : void 0;
  return {
    id: rawId.trim(),
    ...allowSupported !== void 0 ? { allowSupported } : {}
  };
}
function parseWorkerDonePayload(message) {
  if (!message.payload) return null;
  try {
    const parsed = JSON.parse(message.payload);
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}
var ORCHESTRATION_INBOX_LIMIT = 5e3;
async function listRunMessagePage(runId, opts) {
  const limit = opts?.limit ?? ORCHESTRATION_INBOX_LIMIT;
  const { cliVersion } = await checkReadiness();
  const runScoped = Boolean(cliVersion && compareVersions(cliVersion, "1.4.263") >= 0);
  const result = await runOrca([
    "orchestration",
    "inbox",
    "--limit",
    String(limit),
    ...runScoped ? ["--run", runId] : []
  ]);
  if (!Array.isArray(result.messages)) {
    throw new OrcaCliError("inbox returned an invalid messages receipt", "invalid_message_history");
  }
  const observed = result.messages.length;
  const messages = result.messages.filter(
    (row) => Boolean(row) && typeof row === "object" && !Array.isArray(row) && row.run_id === runId
  );
  return { messages, window: { limit, observed, saturated: observed >= limit } };
}
async function listRunMessages(runId) {
  return (await listRunMessagePage(runId)).messages;
}
function checkInbox(opts) {
  const args = ["orchestration", "check", "--terminal", opts.from];
  if (opts.ack) args.push("--ack", opts.ack);
  if (opts.requestId) args.push("--retry-request", opts.requestId);
  if (opts.waitMs && opts.waitMs > 0) {
    args.push("--wait", "--timeout-ms", String(Math.round(opts.waitMs)));
  }
  if (opts.types?.length) args.push("--types", opts.types.join(","));
  return runOrca(args, { timeoutMs: (opts.waitMs ?? 0) + 6e4 });
}
async function replyToMessage(messageId, body, from, requestId) {
  const args = ["orchestration", "reply", "--id", messageId, "--body", body, "--from", from];
  if (requestId) args.push("--retry-request", requestId);
  return runOrca(args);
}
async function sendCoordinatorMessage(opts) {
  const args = [
    "orchestration",
    "send",
    "--to",
    `dispatch:${opts.dispatchId}`,
    "--run",
    opts.runId,
    "--from",
    opts.from,
    "--subject",
    opts.subject,
    "--body",
    opts.body,
    "--type",
    "status",
    "--task-id",
    opts.taskId,
    "--dispatch-id",
    opts.dispatchId
  ];
  if (opts.threadId) args.push("--thread-id", opts.threadId);
  if (opts.requestId) args.push("--retry-request", opts.requestId);
  return runOrca(args);
}
async function sendCoordinatorGroupMessage(opts) {
  const args = [
    "orchestration",
    "send",
    "--to",
    opts.audience,
    "--run",
    opts.runId,
    "--from",
    opts.from,
    "--subject",
    opts.subject,
    "--body",
    opts.body,
    "--type",
    opts.type
  ];
  if (opts.priority) args.push("--priority", opts.priority);
  if (opts.requestId) args.push("--retry-request", opts.requestId);
  return runOrca(args);
}
function recipientOf(worker) {
  return {
    taskId: worker.taskId,
    dispatchId: worker.dispatchId,
    label: worker.projection?.launch?.worktree?.trim() || worker.projection?.workspace?.trim() || worker.projection?.provider?.id?.trim() || null,
    harness: worker.projection?.launch?.agent ?? worker.projection?.provider?.id ?? null
  };
}
function previewRunAudiences(input) {
  const active = input.workers.filter((worker) => worker.dispatchStatus === "dispatched");
  const all = active.map(recipientOf);
  const idleSignal = (worker) => {
    const activity = `${worker.projection?.stage?.activity ?? ""} ${worker.projection?.stage?.detail ?? ""}`.toLowerCase();
    const waiting = worker.projection?.attention?.categories?.includes("input") ?? false;
    return waiting || /\bidle\b|\bwaiting\b/.test(activity);
  };
  const idle = active.filter(idleSignal).map(recipientOf);
  const byHarness = (harness) => active.filter(
    (worker) => (worker.projection?.launch?.agent ?? worker.projection?.provider?.id ?? null) === harness
  ).map(recipientOf);
  const byWorktree = (id) => active.filter(
    (worker) => worker.projection?.workspace === id || worker.projection?.launch?.worktree === id
  ).map(recipientOf);
  const options = [
    {
      address: "@all",
      kind: "run",
      label: "All active workers",
      estimatedRecipients: all,
      exact: false
    },
    {
      address: "@idle",
      kind: "run",
      label: "Idle workers",
      estimatedRecipients: idle,
      exact: false
    }
  ];
  for (const harness of KNOWN_HARNESSES) {
    const recipients = byHarness(harness);
    if (recipients.length === 0) continue;
    options.push({
      address: `@${harness}`,
      kind: "harness",
      label: `${harness} workers`,
      estimatedRecipients: recipients,
      exact: false
    });
  }
  for (const worktree of input.worktrees) {
    options.push({
      address: `${WORKTREE_AUDIENCE_PREFIX}${worktree.id}`,
      kind: "worktree",
      label: worktree.displayName || worktree.id,
      estimatedRecipients: byWorktree(worktree.id),
      exact: false
    });
  }
  return options;
}
function workerSupervision(row) {
  switch (row?.workerState) {
    case "supervised":
    // Supported older runtime receipt.
    case "starting":
    case "ready":
    case "start_unknown":
    case "failed":
    case "succeeded":
    case "stopping":
    case "stop_unknown":
    case "stopped":
    case "abandoned":
      return "supervised";
    case "unsupervised":
      return "unsupervised";
    default:
      return "unknown";
  }
}
function normalizeLiveness(verdict) {
  return verdict === "live" || verdict === "exited" ? verdict : "unverifiable";
}
var FLEET_CAPABILITY_GAP_REASONS = /* @__PURE__ */ new Set([
  "missing_status",
  "capability_unsupported"
]);
function presentWorkerLiveness(input) {
  const verdict = normalizeLiveness(input.fleetVerdict);
  const fleetReason = typeof input.fleetReason === "string" ? input.fleetReason : null;
  const observationStatus = typeof input.observation?.status === "string" ? input.observation.status : null;
  const base = {
    verdict,
    fleetReason,
    qualifiedWorking: false,
    qualifiedReason: null,
    observationStatus
  };
  if (!fleetReason || !FLEET_CAPABILITY_GAP_REASONS.has(fleetReason)) return base;
  if (observationStatus !== "live") return base;
  if (input.observation?.exactWorker !== true) return base;
  return { ...base, qualifiedWorking: true, qualifiedReason: fleetReason };
}
function asRecordOrNull(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : null;
}
function stringOrNull(value) {
  return typeof value === "string" ? value : null;
}
function numberOrNull(value) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}
function nonNegativeIntegerOrNull(value) {
  return typeof value === "number" && Number.isFinite(value) && Number.isInteger(value) && value >= 0 ? value : null;
}
function booleanOrNull(value) {
  return typeof value === "boolean" ? value : null;
}
function parseTerminalResource(value) {
  const resource = asRecordOrNull(value);
  if (!resource) return null;
  return {
    id: stringOrNull(resource.id),
    ownershipState: stringOrNull(resource.ownershipState) ?? stringOrNull(resource.state),
    releaseState: stringOrNull(resource.releaseState),
    retainedReason: stringOrNull(resource.retainedReason) ?? stringOrNull(resource.reason),
    terminalHandle: stringOrNull(resource.terminalHandle),
    worktreeId: stringOrNull(resource.worktreeId),
    endpointId: stringOrNull(resource.endpointId),
    endpointIncarnation: stringOrNull(resource.endpointIncarnation),
    originDispatchId: stringOrNull(resource.originDispatchId),
    ownerDispatchId: stringOrNull(resource.ownerDispatchId),
    releaseRequestedAt: stringOrNull(resource.releaseRequestedAt),
    releaseCompletedAt: stringOrNull(resource.releaseCompletedAt),
    releaseError: stringOrNull(resource.releaseError),
    recoveryAttemptCount: numberOrNull(resource.recoveryAttemptCount),
    lastRecoveryAt: stringOrNull(resource.lastRecoveryAt),
    autoReleaseAt: stringOrNull(resource.autoReleaseAt)
  };
}
function parseAgentWait(raw) {
  if (raw === void 0) return void 0;
  if (raw === null) return null;
  const record2 = asRecordOrNull(raw);
  if (!record2) return null;
  return {
    kind: stringOrNull(record2.kind) ?? stringOrNull(record2.evidence) ?? stringOrNull(record2.source) ?? stringOrNull(record2.via),
    detail: stringOrNull(record2.detail) ?? stringOrNull(record2.message) ?? stringOrNull(record2.promptText) ?? stringOrNull(record2.reason) ?? stringOrNull(record2.title),
    raw: record2
  };
}
async function exactOpenCodeBinding(detail) {
  if (!detail.runId || !detail.taskId) return null;
  const projection = detail.fleet?.projection;
  const host = projection?.host;
  const workspace = detail.terminal?.worktreePath ?? projection?.workspace;
  if (host?.kind !== "local" || host.id !== "local" || typeof workspace !== "string" || !workspace.startsWith("/")) return null;
  const binding = await new ProviderSessionStore(currentWorkspace().dir).get({
    runId: detail.runId,
    taskId: detail.taskId,
    dispatchId: detail.dispatchId
  }).catch(() => null);
  if (!binding || binding.harness !== "opencode" || binding.host !== "local:local" || binding.workspace !== workspace || realpathSyncSafe(binding.workspace) !== binding.workspace) return null;
  return binding;
}
function extractLocalWorkspacePath(detail) {
  const projection = detail.fleet?.projection;
  const rawWorkspace = projection?.workspace;
  const candidates = [
    detail.terminal?.worktreePath,
    typeof rawWorkspace === "string" ? rawWorkspace : asRecord3(rawWorkspace).id,
    detail.fleet?.resource?.worktreeId
  ];
  let workspace = null;
  for (const raw of candidates) {
    if (typeof raw !== "string") continue;
    const separator = raw.lastIndexOf("::/");
    const path = separator >= 0 ? raw.slice(separator + 2) : raw;
    if (!path.startsWith("/")) continue;
    const canonical = realpathSyncSafe(path);
    if (!canonical || workspace && workspace !== canonical) return null;
    workspace = canonical;
  }
  return workspace;
}
async function exactCodexBinding(detail) {
  if (!detail.runId || !detail.taskId) return null;
  const host = detail.fleet?.projection?.host;
  const workspace = extractLocalWorkspacePath(detail);
  if (host?.kind !== "local" || host.id !== "local" || !workspace || detail.terminal?.executionHostId && detail.terminal.executionHostId !== "local") return null;
  const binding = await new ProviderSessionStore(currentWorkspace().dir).get({
    runId: detail.runId,
    taskId: detail.taskId,
    dispatchId: detail.dispatchId
  }).catch(() => null);
  const resolvedBinding = binding ? realpathSyncSafe(binding.workspace) : null;
  if (!binding || binding.harness !== "codex" || binding.host !== "local:local" || resolvedBinding !== workspace) return null;
  return binding;
}
function realpathSyncSafe(path) {
  try {
    return realpathSync2(path);
  } catch {
    return null;
  }
}
async function showWorkerDetail(dispatchId, opts = {}) {
  let result;
  try {
    result = await runOrca([
      "orchestration",
      "worker-show",
      "--dispatch",
      dispatchId
    ]);
  } catch (err) {
    const e = err;
    if (e instanceof OrcaCliError) {
      if (e.code === "dispatch_not_found" || e.code === "worker_not_found") return null;
      if (e.code === null && /not found/i.test(e.message)) return null;
    }
    throw e;
  }
  const dispatch = asRecordOrNull(result.dispatch) ?? {};
  const worker = asRecordOrNull(result.worker) ?? {};
  const startOptions = asRecordOrNull(worker.startOptions);
  const launchOptions = asRecordOrNull(startOptions?.launch);
  const effectiveLaunch = asRecordOrNull(launchOptions?.effective);
  const requestedLaunch = asRecordOrNull(launchOptions?.requested);
  const terminal = asRecordOrNull(result.terminal);
  const observationRaw = asRecordOrNull(result.observation);
  const fleet = asRecordOrNull(result.projection);
  const receiptDispatchId = stringOrNull(dispatch.id);
  const fleetDispatchId = stringOrNull(fleet?.dispatchId);
  const receiptRunId = stringOrNull(dispatch.runId) ?? stringOrNull(dispatch.run_id);
  const fleetRunId = stringOrNull(fleet?.runId);
  const receiptTaskId = stringOrNull(dispatch.taskId) ?? stringOrNull(dispatch.task_id);
  const fleetTaskId = stringOrNull(fleet?.taskId);
  if (receiptDispatchId && receiptDispatchId !== dispatchId || fleetDispatchId && fleetDispatchId !== dispatchId || receiptRunId && fleetRunId && receiptRunId !== fleetRunId || receiptTaskId && fleetTaskId && receiptTaskId !== fleetTaskId) {
    throw new OrcaCliError("worker-show returned conflicting worker identity", "invalid_worker_reply");
  }
  const terminalResource = parseTerminalResource(result.terminalResource) ?? parseTerminalResource(fleet?.resource);
  const workerState = stringOrNull(worker.state) ?? "unknown";
  const observation2 = observationRaw ? {
    status: stringOrNull(observationRaw.status),
    exactWorker: booleanOrNull(observationRaw.exactWorker),
    // Preserve the tri-state ON the object: an absent key must stay absent
    // (undefined assigned explicitly would still own the property).
    ...observationRaw.agentWait === void 0 ? {} : { agentWait: parseAgentWait(observationRaw.agentWait) }
  } : null;
  const normalizedFleet = fleet ? {
    dispatchId,
    taskId: fleetTaskId ?? receiptTaskId ?? "",
    runId: fleetRunId ?? receiptRunId ?? "",
    workerState,
    supervision: workerSupervision({ workerState }),
    dispatchStatus: stringOrNull(dispatch.status) ?? "unknown",
    agentTerminalHandle: stringOrNull(fleet.agentTerminalHandle) ?? stringOrNull(worker.agentTerminalHandle) ?? stringOrNull(terminal?.handle) ?? null,
    // worker-list has a top-level terminalState; worker-show's normalized
    // projection keeps it under resource on current runtimes. Preserve the
    // same authority instead of treating every real external row unknown.
    terminalState: stringOrNull(fleet.terminalState) ?? stringOrNull(asRecordOrNull(fleet.resource)?.terminalState) ?? "unknown",
    resource: terminalResource,
    projection: fleet
  } : null;
  const liveness = presentWorkerLiveness({
    fleetVerdict: stringOrNull(asRecordOrNull(fleet?.liveness)?.verdict),
    fleetReason: stringOrNull(asRecordOrNull(fleet?.liveness)?.reason),
    observation: observation2
  });
  const detail = {
    dispatchId,
    runId: fleetRunId ?? receiptRunId,
    taskId: fleetTaskId ?? receiptTaskId,
    launchMode: parseNativeLaunchMode(result.mode ?? worker.mode),
    launch: startOptions ? {
      agent: stringOrNull(effectiveLaunch?.agent),
      model: stringOrNull(effectiveLaunch?.model),
      effort: stringOrNull(effectiveLaunch?.effort),
      resolvedWorktreeId: stringOrNull(startOptions?.resolvedWorktreeId)
    } : null,
    requestedLaunch: requestedLaunch || startOptions?.agent ? {
      agent: stringOrNull(requestedLaunch?.agent) ?? stringOrNull(startOptions?.agent),
      model: stringOrNull(requestedLaunch?.model),
      effort: stringOrNull(requestedLaunch?.effort)
    } : null,
    terminalResource,
    autoReleaseAt: stringOrNull(result.autoReleaseAt) ?? terminalResource?.autoReleaseAt ?? null,
    fleet: normalizedFleet,
    dispatch: {
      id: stringOrNull(dispatch.id),
      runId: stringOrNull(dispatch.runId) ?? stringOrNull(dispatch.run_id),
      taskId: stringOrNull(dispatch.taskId) ?? stringOrNull(dispatch.task_id),
      status: stringOrNull(dispatch.status),
      failureCount: nonNegativeIntegerOrNull(dispatch.failureCount),
      lastFailure: stringOrNull(dispatch.lastFailure),
      terminationReason: stringOrNull(dispatch.terminationReason),
      dispatchedAt: stringOrNull(dispatch.dispatchedAt),
      completedAt: stringOrNull(dispatch.completedAt),
      lastHeartbeatAt: stringOrNull(dispatch.lastHeartbeatAt),
      retryOfDispatchId: stringOrNull(dispatch.retryOfDispatchId),
      followUpOf: stringOrNull(dispatch.followUpOf) ?? stringOrNull(dispatch.follow_up_of),
      depth: numberOrNull(dispatch.depth),
      ...dispatch.creatorDispatchId === null || typeof dispatch.creatorDispatchId === "string" ? { creatorDispatchId: dispatch.creatorDispatchId } : {}
    },
    worker: {
      state: stringOrNull(worker.state),
      stage: stringOrNull(worker.stage),
      setupState: stringOrNull(worker.setupState),
      lastError: stringOrNull(worker.lastError),
      createdAt: stringOrNull(worker.createdAt),
      updatedAt: stringOrNull(worker.updatedAt)
    },
    terminal: terminal ? {
      handle: stringOrNull(terminal.handle),
      title: stringOrNull(terminal.title),
      connected: booleanOrNull(terminal.connected),
      orphaned: booleanOrNull(terminal.orphaned),
      worktreePath: stringOrNull(terminal.worktreePath),
      branch: stringOrNull(terminal.branch),
      executionHostId: stringOrNull(terminal.executionHostId),
      agentIdentity: stringOrNull(terminal.agentIdentity),
      lastOutputAt: numberOrNull(terminal.lastOutputAt),
      preview: stringOrNull(terminal.preview)
    } : null,
    observation: observation2,
    liveness,
    providerSession: null
  };
  if (!opts.includeProviderSession) return detail;
  try {
    if (await findOpenCodeTuiLaunch(dispatchId)) return detail;
  } catch {
    return detail;
  }
  const binding = await exactOpenCodeBinding(detail);
  if (!binding) return detail;
  const observedAt = (/* @__PURE__ */ new Date()).toISOString();
  try {
    const read = await readOpenCodeBoundSession(binding);
    detail.providerSession = {
      harness: "opencode",
      sessionId: binding.sessionId,
      status: read.status,
      statusSource: "opencode-api",
      statusDetail: read.statusDetail,
      model: read.model,
      modelSource: read.modelSource,
      observedAt
    };
  } catch {
    detail.providerSession = {
      harness: "opencode",
      sessionId: binding.sessionId,
      status: "unavailable",
      statusSource: "opencode-api",
      statusDetail: "The exact bound OpenCode session could not be read or validated.",
      model: null,
      modelSource: null,
      observedAt
    };
  }
  return detail;
}
async function listWorkers(runId, opts = {}) {
  const workers = [];
  const partialHostErrors = [];
  const seenCursors = /* @__PURE__ */ new Set();
  let cursor = null;
  const invalidReceipt = (message) => {
    throw new OrcaCliError(`worker-list returned an invalid receipt: ${message}`, "invalid_pagination");
  };
  for (let pageNumber = 0; pageNumber < 1e4; pageNumber += 1) {
    const args = ["orchestration", "worker-list"];
    if (runId !== void 0) args.push("--run", runId);
    if (opts.terminalState) args.push("--terminal-state", opts.terminalState);
    if (opts.includeRemote) args.push("--include-remote");
    args.push("--limit", "100");
    if (cursor) args.push("--cursor", cursor);
    const result = await runOrca(args);
    if (!result || typeof result !== "object" || Array.isArray(result)) {
      invalidReceipt("result must be an object");
    }
    const receipt = result;
    if (!Array.isArray(receipt.workers)) {
      invalidReceipt("workers must be an array");
    }
    const page = receipt.page;
    if (!page || typeof page !== "object" || Array.isArray(page)) {
      invalidReceipt("page must be an object");
    }
    const pageObject = page;
    if (typeof pageObject.hasMore !== "boolean") {
      invalidReceipt("page.hasMore must be a boolean");
    }
    if (!Object.prototype.hasOwnProperty.call(pageObject, "nextCursor")) {
      invalidReceipt("page.nextCursor is required");
    }
    const hasMore = pageObject.hasMore;
    const rawNext = pageObject.nextCursor;
    if (rawNext !== null && typeof rawNext !== "string") {
      invalidReceipt("page.nextCursor must be a string or null");
    }
    const nextCursor = typeof rawNext === "string" && rawNext.length > 0 ? rawNext : null;
    if (hasMore && !nextCursor) {
      invalidReceipt(
        "page.hasMore=true reported more pages without a usable page.nextCursor; refusing to return truncated accounting."
      );
    }
    if (!hasMore && rawNext !== null) {
      invalidReceipt("page.hasMore=false with a nextCursor is inconsistent; refusing to return an ambiguous page.");
    }
    if (receipt.partialHostErrors !== void 0) {
      if (!Array.isArray(receipt.partialHostErrors)) invalidReceipt("partialHostErrors must be an array");
      partialHostErrors.push(...receipt.partialHostErrors);
    }
    const workerRows = receipt.workers;
    for (const [index, rawWorker] of workerRows.entries()) {
      if (!rawWorker || typeof rawWorker !== "object" || Array.isArray(rawWorker)) {
        invalidReceipt(`workers[${index}] must be an object`);
      }
      const worker = rawWorker;
      for (const field of ["dispatchId", "taskId", "runId"]) {
        if (typeof worker[field] !== "string" || worker[field].trim().length === 0) {
          invalidReceipt(`workers[${index}].${field} must be a non-empty string`);
        }
      }
      if (runId !== void 0 && worker.runId !== runId) {
        invalidReceipt(`workers[${index}].runId ${JSON.stringify(worker.runId)} does not match ${JSON.stringify(runId)}`);
      }
      const row = worker;
      workers.push({
        ...row,
        supervision: workerSupervision(row),
        resource: parseTerminalResource(worker.resource) ?? parseTerminalResource(asRecordOrNull(worker.projection)?.resource)
      });
    }
    if (!hasMore) {
      return { workers, partialHostErrors };
    }
    if (nextCursor === null) {
      invalidReceipt(
        "page.hasMore=true reported more pages without a usable page.nextCursor; refusing to return truncated accounting."
      );
    }
    const pageCursor = nextCursor;
    if (seenCursors.has(pageCursor)) {
      throw new OrcaCliError(
        "worker-list repeated page.nextCursor; refusing an infinite pagination loop.",
        "invalid_pagination"
      );
    }
    seenCursors.add(pageCursor);
    cursor = pageCursor;
  }
  throw new OrcaCliError(
    "worker-list exceeded the defensive 10,000-page limit; refusing to return truncated accounting.",
    "invalid_pagination"
  );
}
function normalizeTerminalReceipt(result, requestId) {
  return {
    dispatchId: String(result.dispatchId ?? ""),
    state: String(result.state ?? "release_unknown"),
    reason: result.reason ?? null,
    processAction: result.processAction ?? null,
    warning: result.warning ?? null,
    archive: result.archive ?? null,
    requestId
  };
}
async function runTerminalMutation(args, requestId, unknownState) {
  const normalize2 = (result) => ({
    ...normalizeTerminalReceipt(result, requestId),
    state: String(result.state ?? unknownState)
  });
  try {
    return normalize2(await runOrca(args));
  } catch (err) {
    const e = err;
    if (e instanceof OrcaCliError && e.code === "cli_not_found") throw e;
    if (e instanceof OrcaCliError && e.code === RESPONSE_LOST) {
      const probe = await showRequest(requestId);
      if (probe && (probe.state === "completed" || probe.state === "pending")) {
        try {
          return normalize2(await runOrca(args));
        } catch (retryErr) {
          const r = retryErr;
          if (r instanceof OrcaCliError && r.code === RESPONSE_LOST) {
          } else if (r instanceof OrcaCliError && r.code === "cli_not_found") {
            throw r;
          } else {
            return normalize2({});
          }
        }
      }
    }
    return {
      dispatchId: "",
      state: unknownState,
      reason: String(e.message ?? err),
      processAction: null,
      warning: null,
      archive: null,
      requestId
    };
  }
}
function releaseWorker(dispatchId, opts = {}) {
  const requestId = opts.retryRequestId ?? newRequestId();
  return runTerminalMutation(
    [
      "orchestration",
      "worker-release",
      "--dispatch",
      dispatchId,
      "--retry-request",
      requestId
    ],
    requestId,
    "release_unknown"
  );
}
function retainWorker(dispatchId, opts = {}) {
  const requestId = opts.retryRequestId ?? newRequestId();
  return runTerminalMutation(
    [
      "orchestration",
      "worker-retain",
      "--dispatch",
      dispatchId,
      "--retry-request",
      requestId
    ],
    requestId,
    "release_unknown"
  );
}
function openCodeOutputPrefixHash(lines, end) {
  const hash = createHash3("sha256");
  for (let i = 0; i < end; i++) hash.update(lines[i]).update("\n");
  return hash.digest("hex").slice(0, 16);
}
function formatOpenCodeOutput(messages) {
  const lines = [];
  const structured = [];
  let clipped = false;
  let budget = 16e4;
  const clipText = (text) => {
    const count = Math.min(16e3, Math.max(0, budget));
    if (text.length > count) clipped = true;
    return text.slice(0, count);
  };
  const push = (text) => {
    if (budget <= 0 || lines.length >= 1e4) {
      clipped = true;
      return;
    }
    const count = Math.min(16e3, budget);
    if (text.length > count) clipped = true;
    const value = text.slice(0, count);
    budget -= value.length;
    const chunks = value.split("\n");
    const remaining = 1e4 - lines.length;
    lines.push(...chunks.slice(0, remaining));
    if (chunks.length > remaining) clipped = true;
  };
  const result = (tool, value, blocks, isError = false, callId) => {
    if (/auth|settings|config/i.test(tool) || value === void 0) return;
    if (typeof value === "string") {
      blocks.push({ type: "tool-result", output: clipText(value), isError, callId: callId ?? null });
      push(`[tool result] ${value}`);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        const part = asRecord3(item);
        if (part.type === "text" && typeof part.text === "string") {
          blocks.push({ type: "tool-result", output: clipText(part.text), isError, callId: callId ?? null });
          push(`[tool result] ${part.text}`);
        }
      }
    } else {
      const rendered = JSON.stringify(safeToolInput(value));
      blocks.push({ type: "tool-result", output: clipText(rendered), isError, callId: callId ?? null });
      push(`[tool result] ${rendered}`);
    }
  };
  let lastErrorText = null;
  const formatErrorText = (rawError) => {
    if (typeof rawError === "string" && rawError.trim()) return rawError.trim();
    if (!rawError || typeof rawError !== "object") return null;
    const rec = asRecord3(rawError);
    const errType = typeof rec.type === "string" && rec.type.trim() ? rec.type.trim() : null;
    const errMsg = typeof rec.message === "string" && rec.message.trim() ? rec.message.trim() : null;
    if (errType && errMsg) return `[error: ${errType}] ${errMsg}`;
    if (errMsg) return `[error] ${errMsg}`;
    if (errType) return `[error: ${errType}]`;
    const safe = safeToolInput(rawError);
    return safe !== void 0 ? `[error] ${JSON.stringify(safe)}` : null;
  };
  for (const message of messages) {
    if (budget <= 0 || lines.length >= 1e4) {
      clipped = true;
      break;
    }
    const startLine = lines.length;
    const role = typeof message.type === "string" ? message.type : "unknown";
    const model = asRecord3(message.model);
    const modelLabel = (role === "assistant" || role === "model-switched") && model.providerID && model.id ? `${String(model.providerID)}/${String(model.id)}${model.variant ? `#${String(model.variant)}` : ""}` : null;
    const tag = role === "assistant" && modelLabel ? ` \xB7 ${modelLabel}` : "";
    const blocks = [];
    if (typeof message.text === "string") {
      blocks.push({ type: "text", text: clipText(message.text) });
      push(`[${role}] ${message.text}`);
    }
    for (const raw of Array.isArray(message.content) ? message.content : []) {
      if (budget <= 0 || lines.length >= 1e4) {
        clipped = true;
        break;
      }
      const part = asRecord3(raw);
      if (part.type === "text" && typeof part.text === "string") {
        blocks.push({ type: "text", text: clipText(part.text) });
        push(`[${role}${tag}] ${part.text}`);
      } else if (part.type === "tool" || part.type === "tool-call") {
        const tool = typeof part.name === "string" ? part.name : typeof part.tool === "string" ? part.tool : "unknown";
        const state = asRecord3(part.state);
        const callId = typeof part.callID === "string" ? part.callID : typeof part.callId === "string" ? part.callId : typeof part.id === "string" ? part.id : null;
        let input = "";
        let rawInput = "";
        try {
          const value = safeToolInput(part.input ?? state.input);
          rawInput = value === void 0 ? "" : JSON.stringify(value);
          input = rawInput ? ` ${rawInput}` : "";
        } catch {
          rawInput = "[tool input omitted]";
          input = " [tool input omitted]";
        }
        const status = typeof state.status === "string" ? state.status : null;
        blocks.push({ type: "tool-call", name: tool, input: clipText(rawInput), callId, status });
        push(`[tool ${tool}]${status ? ` ${status}` : ""}${input}`);
        result(tool, state.output ?? state.content, blocks, false, callId);
        if (state.error !== void 0) result(tool, state.error, blocks, true, callId);
      } else if (part.type === "tool-result") {
        const callId = typeof part.callID === "string" ? part.callID : typeof part.callId === "string" ? part.callId : null;
        result(typeof part.tool === "string" ? part.tool : "unknown", part.output ?? part.text ?? part.content, blocks, part.isError === true, callId);
      }
    }
    if ((role === "assistant" || role === "idle") && message.error !== void 0 && message.error !== null) {
      const errorText = formatErrorText(message.error);
      if (errorText && (role === "assistant" || errorText !== lastErrorText)) {
        lastErrorText = errorText;
        blocks.push({ type: "text", text: clipText(errorText) });
        push(`[${role}${tag}] ${errorText}`);
      }
    } else if (role === "model-switched" && modelLabel) {
      const switchedText = `Switched model to ${modelLabel}`;
      blocks.push({ type: "text", text: clipText(switchedText) });
      push(`[system] ${switchedText}`);
    }
    const timeRec = asRecord3(message.time);
    const timestamp = typeof message.timestamp === "number" && Number.isFinite(message.timestamp) ? message.timestamp : typeof timeRec.created === "number" && Number.isFinite(timeRec.created) ? timeRec.created : null;
    if (blocks.length > 0 && structured.length < 1e3) {
      structured.push({
        startLine,
        message: {
          id: typeof message.id === "string" ? message.id : null,
          role: role === "model-switched" ? "system" : role,
          timestamp,
          ...role === "assistant" && modelLabel ? { model: modelLabel } : {},
          source: "opencode-api",
          blocks
        }
      });
    }
  }
  return { lines, structured, clipped };
}
async function readWorkerOutput(dispatchId, opts = {}) {
  const launch = opts.source !== "terminal" ? await findOpenCodeTuiLaunch(dispatchId) : null;
  if (launch) {
    const execution = await readOpenCodeExecution(launch);
    const { lines, structured, clipped: budgetClipped } = formatOpenCodeOutput(execution.messages);
    const prefix = `ocapi2:${dispatchId}:${launch.sessionId}:`;
    let sourceChanged = Boolean(opts.cursor && !opts.cursor.startsWith(prefix));
    let offset = 0;
    if (opts.cursor && !sourceChanged) {
      const match = /^(\d+):([a-f0-9]{16})$/.exec(opts.cursor.slice(prefix.length));
      if (!match || !Number.isSafeInteger(Number(match[1]))) throw new OrcaCliError("Invalid OpenCode API cursor", "invalid_cursor");
      offset = Number(match[1]);
      if (offset > lines.length || openCodeOutputPrefixHash(lines, offset) !== match[2]) {
        sourceChanged = true;
        offset = 0;
      }
    }
    if (!Number.isSafeInteger(offset) || offset < 0) throw new OrcaCliError("Invalid OpenCode API cursor", "invalid_cursor");
    const limit = Math.max(1, Math.min(200, opts.limit ?? 40));
    const page = lines.slice(offset, offset + limit);
    const pageMessages = structured.filter((entry) => entry.startLine >= offset && entry.startLine < offset + page.length).map((entry) => entry.message);
    return {
      dispatchId,
      source: "opencode-api",
      cursor: `${prefix}${offset + page.length}:${openCodeOutputPrefixHash(lines, offset + page.length)}`,
      lines: page,
      messages: pageMessages,
      contentComplete: !budgetClipped && execution.complete && execution.exited && !execution.evidence.userOwned && offset + page.length >= lines.length,
      clipped: budgetClipped || !execution.complete || offset + page.length < lines.length,
      sourceChanged,
      ...execution.exited ? { status: { worker: null, terminal: null, liveness: "exited" } } : {},
      warnings: [
        `OpenCode API: ${execution.evidence.state}; model evidence comes from assistant turns, not Orca launch.effective`,
        ...!execution.complete ? ["OpenCode history reached the bounded read budget; absence is not proof"] : [],
        ...budgetClipped ? ["OpenCode output reached the viewer text budget; this page is not a complete transcript"] : [],
        ...execution.evidence.userOwned ? ["Later user-owned work is excluded; automatic terminal cleanup is disabled"] : []
      ]
    };
  }
  let workerDetail = null;
  let codexBinding = null;
  if (opts.source !== "terminal") {
    workerDetail = await showWorkerDetail(dispatchId);
    if (workerDetail) {
      const binding = await exactOpenCodeBinding(workerDetail);
      if (binding) {
        const read = await readOpenCodeBoundSession(binding);
        const { lines, structured, clipped: textClipped } = formatOpenCodeOutput(read.messages);
        const outputLines = lines;
        const prefix = `ocapi2:${dispatchId}:${binding.sessionId}:`;
        let sourceChanged = Boolean(opts.cursor && !opts.cursor.startsWith(prefix));
        let offset = 0;
        if (opts.cursor && !sourceChanged) {
          const match = /^(\d+):([a-f0-9]{16})$/.exec(opts.cursor.slice(prefix.length));
          if (!match || !Number.isSafeInteger(Number(match[1]))) {
            throw new OrcaCliError("Invalid OpenCode API cursor", "invalid_cursor");
          }
          offset = Number(match[1]);
          if (offset > outputLines.length || openCodeOutputPrefixHash(outputLines, offset) !== match[2]) {
            sourceChanged = true;
            offset = 0;
          }
        }
        const limit = Math.max(1, Math.min(200, opts.limit ?? 40));
        const page = outputLines.slice(offset, offset + limit);
        const pageMessages = structured.filter((entry) => entry.startLine >= offset && entry.startLine < offset + page.length).map((entry) => entry.message);
        const clipped = textClipped || !read.complete || offset + page.length < outputLines.length;
        return {
          dispatchId,
          source: "opencode-api",
          cursor: `${prefix}${offset + page.length}:${openCodeOutputPrefixHash(outputLines, offset + page.length)}`,
          lines: page,
          messages: pageMessages,
          contentComplete: !clipped && read.status === "exited" && !read.userOwned,
          clipped,
          sourceChanged,
          ...read.status === "exited" ? { status: { worker: null, terminal: null, liveness: "exited" } } : {},
          warnings: [
            `OpenCode API exact bound session: ${read.status}; provider state is separate from Orca fleet liveness and Task outcome.`,
            ...read.status !== "exited" ? ["OpenCode has not positively confirmed execution exit; transcript is not complete."] : [],
            ...!read.complete ? ["OpenCode history reached the bounded read budget; absence is not proof."] : [],
            ...textClipped ? ["OpenCode output reached the viewer text budget; transcript is partial."] : [],
            ...read.userOwned ? ["Additional user-owned prompts exist; only the original Dispatch turn is shown."] : []
          ]
        };
      }
      codexBinding = await exactCodexBinding(workerDetail);
      if (codexBinding && opts.cursor?.startsWith(`codex1:${dispatchId}:`)) {
        const workerState = workerDetail.fleet?.workerState ?? null;
        const workerSettled = workerState === "succeeded" || workerState === "failed" || workerState === "stopped";
        const terminalDisconnected = workerDetail.terminal?.connected === false;
        const rawLiveness = workerDetail.liveness?.verdict ?? null;
        const liveness = rawLiveness === "exited" || workerSettled && terminalDisconnected ? "exited" : rawLiveness;
        const codexPage = await readBoundCodexSessionOutput({
          dispatchId,
          taskId: codexBinding.taskId,
          sessionId: codexBinding.sessionId,
          workspace: codexBinding.workspace,
          cursor: opts.cursor,
          limit: opts.limit,
          status: {
            worker: workerState,
            terminal: terminalDisconnected ? "exited" : null,
            liveness
          }
        });
        if (codexPage) return codexPage;
      }
    }
  }
  const buildArgs = (cursor) => {
    const args = ["orchestration", "worker-read", "--dispatch", dispatchId];
    if (opts.source) args.push("--source", opts.source);
    if (cursor) args.push("--cursor", cursor);
    if (opts.limit) args.push("--limit", String(opts.limit));
    return args;
  };
  const parse2 = (result) => {
    if (result.dispatchId !== void 0 && result.dispatchId !== dispatchId) {
      throw new OrcaCliError("worker-read returned output for another Dispatch", "invalid_worker_reply");
    }
    let textClipped = false;
    const transcriptMessages = [];
    const transcriptLines = (result.transcript?.messages ?? []).flatMap((rawMessage) => {
      const message = asRecord3(rawMessage);
      const role = typeof message.role === "string" ? message.role : "unknown";
      const blocks = Array.isArray(message.blocks) ? message.blocks : [];
      const structuredBlocks = [];
      let blockBudget = 16e3;
      const clipBlock = (value) => {
        if (blockBudget <= 0) {
          textClipped = true;
          return "";
        }
        if (value.length > blockBudget) textClipped = true;
        const out = value.slice(0, blockBudget);
        blockBudget -= out.length;
        return out;
      };
      const rendered = blocks.flatMap((rawBlock) => {
        const block = asRecord3(rawBlock);
        switch (block.type) {
          case "text": {
            const textVal = typeof block.text === "string" ? block.text : "[malformed text block]";
            structuredBlocks.push({ type: "text", text: clipBlock(textVal) });
            return [textVal];
          }
          case "tool-call": {
            let input;
            try {
              input = JSON.stringify(block.input) ?? "null";
            } catch {
              input = "[unserializable input]";
            }
            const name = typeof block.name === "string" ? block.name : "unknown";
            const callId = typeof block.callId === "string" ? block.callId : null;
            structuredBlocks.push({ type: "tool-call", name, input: clipBlock(input), callId });
            return [`[tool ${name}] ${input}`];
          }
          case "tool-result": {
            const outputVal = typeof block.output === "string" ? block.output : "[malformed output]";
            const isError = block.isError === true;
            const callId = typeof block.callId === "string" ? block.callId : null;
            structuredBlocks.push({ type: "tool-result", output: clipBlock(outputVal), isError, callId });
            return [`[tool result${isError ? " error" : ""}] ${outputVal}`];
          }
          case "image-ref": {
            const reference = typeof block.url === "string" ? block.url : typeof block.path === "string" ? block.path : null;
            structuredBlocks.push({ type: "image-ref", reference });
            return [reference ? `[image] ${reference}` : "[image omitted]"];
          }
          case "subagent": {
            const label = typeof block.label === "string" ? block.label : typeof block.id === "string" ? block.id : "unknown";
            const state = typeof block.state === "string" ? block.state : "unknown";
            structuredBlocks.push({ type: "subagent", label, state });
            return [`[subagent ${label} \xB7 ${state}]`];
          }
          case "subagent-group": {
            const count = Array.isArray(block.agents) ? block.agents.length : null;
            structuredBlocks.push({ type: "subagent-group", count });
            return [`[subagents] ${count !== null ? `${count} agents` : "unknown"}`];
          }
          case "background-task": {
            const label = typeof block.label === "string" ? block.label : "unknown";
            const state = typeof block.state === "string" ? block.state : "unknown";
            structuredBlocks.push({ type: "background-task", label, state });
            return [`[background task ${label} \xB7 ${state}]`];
          }
          default: {
            const blockType = typeof block.type === "string" ? block.type : null;
            structuredBlocks.push({ type: "unsupported", blockType });
            return [`[unsupported block${blockType ? `: ${blockType}` : ""}]`];
          }
        }
      });
      if (transcriptMessages.length < 500) {
        transcriptMessages.push({
          id: typeof message.id === "string" ? message.id : null,
          role,
          timestamp: typeof message.timestamp === "number" && Number.isFinite(message.timestamp) ? message.timestamp : null,
          source: "transcript",
          blocks: structuredBlocks
        });
      }
      const text = `[${role}]${rendered.length ? ` ${rendered.join("\n")}` : ""}`;
      if (text.length > 16e3) textClipped = true;
      return text.slice(0, 16e3).split("\n");
    });
    const terminalLines = result.terminal?.tail ?? [];
    const sourceLines = result.source === "transcript" ? transcriptLines : terminalLines;
    const lines = sourceLines.slice(0, 1e4);
    const budgetClipped = textClipped || sourceLines.length > lines.length;
    return {
      dispatchId,
      source: String(result.source ?? "auto"),
      cursor: result.cursor ?? null,
      lines,
      ...result.source === "transcript" ? { messages: transcriptMessages } : {},
      contentComplete: Boolean(result.contentComplete) && !budgetClipped && !result.transcript?.limited,
      clipped: Boolean(result.terminal?.truncated || result.terminal?.limited || result.transcript?.limited) || budgetClipped || (result.clipping ?? []).length > 0,
      warnings: (result.warnings ?? []).map(String),
      sourceChanged: false,
      ...result.fallbackReason === null || typeof result.fallbackReason === "string" ? { fallbackReason: typeof result.fallbackReason === "string" ? result.fallbackReason.slice(0, 256) : null } : {},
      ...result.sourceExact === null || typeof result.sourceExact === "boolean" ? { sourceExact: result.sourceExact } : {},
      ...result.archived === null || typeof result.archived === "boolean" ? { archived: result.archived } : {},
      ...result.provider === null || typeof result.provider === "string" ? { provider: typeof result.provider === "string" ? result.provider.slice(0, 256) : null } : {},
      ...result.sourceIdentity === null || typeof result.sourceIdentity === "string" ? { sourceIdentity: typeof result.sourceIdentity === "string" ? result.sourceIdentity.slice(0, 1024) : null } : {},
      ...(() => {
        const status = asRecord3(result.status);
        if (!result.status || typeof result.status !== "object") return {};
        const field = (value) => typeof value === "string" ? value.slice(0, 64) : null;
        return { status: { worker: field(status.worker), terminal: field(status.terminal), liveness: field(status.liveness) } };
      })()
    };
  };
  const tryCodexFallback = async (fallbackStatus) => {
    if (opts.source === "terminal" || !codexBinding) return null;
    const status = fallbackStatus ?? (workerDetail ? { worker: workerDetail.fleet?.workerState ?? null, terminal: null, liveness: workerDetail.liveness?.verdict ?? null } : void 0);
    return readBoundCodexSessionOutput({
      dispatchId,
      taskId: codexBinding.taskId,
      sessionId: codexBinding.sessionId,
      workspace: codexBinding.workspace,
      cursor: opts.cursor,
      limit: opts.limit,
      status
    }).catch(() => null);
  };
  try {
    const receipt = parse2(await runOrca(buildArgs(opts.cursor)));
    if (opts.source !== "terminal" && receipt.source !== "transcript" && receipt.fallbackReason === "session_not_reported") {
      const codexReceipt = await tryCodexFallback(receipt.status);
      if (codexReceipt) return codexReceipt;
    }
    return receipt;
  } catch (err) {
    const e = err;
    if (e?.code === "source_changed") {
      const receipt = parse2(await runOrca(buildArgs(void 0)));
      receipt.sourceChanged = true;
      receipt.warnings = [
        ...receipt.warnings,
        "output source changed; the read restarted from the beginning of the new source"
      ];
      return receipt;
    }
    if (opts.source === "transcript" && codexBinding && (e?.code === "session_not_reported" || e?.code === "archive_unavailable" || e?.code === "transcript_unavailable" || /session_not_reported|no transcript/i.test(String(e?.message ?? "")))) {
      const codexReceipt = await tryCodexFallback();
      if (codexReceipt) return codexReceipt;
    }
    throw err;
  }
}
async function workerStopOperation(dispatchId) {
  return await findOpenCodeTuiLaunch(dispatchId) ? "worker-abandon" : "worker-stop";
}
async function stopWorkerReceipt(dispatchId, opts = {}) {
  const launch = await findOpenCodeTuiLaunch(dispatchId);
  let providerExecutionExited = false;
  if (launch?.state === "retained") {
    const detail = await showWorkerDetail(dispatchId);
    if (detail?.dispatch?.status === "dispatched") {
      throw new OrcaCliError("The OpenCode session is retained/user-owned; refusing automatic Stop", "session_binding_mismatch");
    }
  }
  if (launch && launch.state === "bound") {
    await verifyOpenCodeTuiTerminal(launch);
    await interruptOpenCodeExecution(launch);
    providerExecutionExited = true;
  }
  const requestId = opts.retryRequestId ?? newRequestId();
  const result = await runOrca([
    "orchestration",
    // 1.4.222 worker-stop cannot stop external terminals: it revokes the
    // capability but leaves the Dispatch dispatched/stop_unknown. Choose this
    // adapter's accounting BEFORE acting, never as fallback on unknown stop.
    // Provider exit above is positive; abandon then fences ONLY orchestration.
    // Orca still owns the cancellation outcome; API evidence never settles it.
    launch ? "worker-abandon" : "worker-stop",
    "--dispatch",
    dispatchId,
    "--retry-request",
    requestId
  ]);
  if (launch) {
    const after = await showWorkerDetail(dispatchId);
    if (after?.runId !== launch.runId || after.taskId !== launch.taskId || !["completed", "failed", "stopped"].includes(after.dispatch?.status ?? "")) {
      throw new OrcaCliError("OpenCode provider was interrupted but Orca cancellation settlement is unknown; no cleanup attempted", "stop_unknown");
    }
  }
  const rawHelpers = result.helpers;
  const helpers = Array.isArray(rawHelpers) ? rawHelpers.filter((item) => Boolean(item) && typeof item === "object" && !Array.isArray(item)).map((item) => ({
    dispatchId: String(item.dispatchId ?? ""),
    state: String(item.state ?? "unknown"),
    alreadySettled: Boolean(item.alreadySettled)
  })).filter((item) => Boolean(item.dispatchId)) : void 0;
  return {
    dispatchId: String(result.dispatchId ?? dispatchId),
    state: String(result.state ?? "unknown"),
    alreadySettled: Boolean(result.alreadySettled),
    processAction: result.processAction ?? null,
    warning: result.warning ?? (providerExecutionExited ? "OpenCode provider exit confirmed; Orca accounting fenced through worker-abandon (no Orca process action)." : launch ? "Previously decided OpenCode session; Orca-only accounting inspected without provider interruption." : null),
    ...helpers ? { helpers } : {},
    ...providerExecutionExited ? { providerExecutionExited: true } : {}
  };
}
async function decideWorkerPermissionPrompt(opts) {
  const requestId = opts.retryRequestId ?? newRequestId();
  const result = await runOrca([
    "orchestration",
    opts.decision,
    "--dispatch",
    opts.dispatchId,
    "--prompt",
    opts.promptId,
    "--reason",
    opts.reason,
    "--from",
    opts.from,
    "--retry-request",
    requestId
  ]);
  const raw = asRecord3(result);
  if (raw.dispatchId !== opts.dispatchId || raw.approvalId !== opts.promptId || raw.decision !== (opts.decision === "approve" ? "allow" : "deny")) {
    throw new OrcaCliError(`Orca could not confirm the exact permission decision (request ${requestId}).`, RESPONSE_LOST);
  }
  return {
    dispatchId: opts.dispatchId,
    promptId: opts.promptId,
    decision: opts.decision,
    requestId,
    raw
  };
}
async function abandonWorkerReceipt(dispatchId, opts = {}) {
  const requestId = opts.retryRequestId ?? newRequestId();
  const result = await runOrca([
    "orchestration",
    "worker-abandon",
    "--dispatch",
    dispatchId,
    "--retry-request",
    requestId
  ]);
  return {
    dispatchId: String(result.dispatchId ?? dispatchId),
    state: String(result.state ?? "unknown"),
    alreadySettled: Boolean(result.alreadySettled),
    processAction: result.processAction ?? null,
    warning: result.warning ?? null,
    requestId,
    raw: asRecord3(result)
  };
}
var FOLLOWABLE_VERBS = /* @__PURE__ */ new Set([
  "worker-release",
  "worker-retain",
  "worker-abandon",
  "worker-read",
  "request-show",
  "worker-list"
]);
function followableNextAction(nextAction) {
  if (!nextAction || !Array.isArray(nextAction.argv)) return null;
  if (nextAction.argv.length === 0) return null;
  const [ns, verb] = nextAction.argv;
  if (ns !== "orchestration" || typeof verb !== "string" || !FOLLOWABLE_VERBS.has(verb)) {
    return null;
  }
  return nextAction.argv.map(String);
}
function runNextAction(argv) {
  if (!followableNextAction({ kind: "nextAction", argv })) {
    return Promise.resolve(null);
  }
  return runOrca(argv);
}
function newRequestId() {
  return randomUUID3();
}
async function showRequest(requestId, opts) {
  let result;
  try {
    const targetOn = typeof opts?.on === "string" && opts.on.trim() ? opts.on.trim() : null;
    const { cliVersion } = targetOn ? await checkReadiness() : { cliVersion: null };
    const passOn = Boolean(targetOn && cliVersion && compareVersions(cliVersion, "1.4.263") >= 0);
    result = await runOrca([
      "orchestration",
      "request-show",
      "--request",
      requestId,
      ...passOn ? ["--on", targetOn] : []
    ]);
  } catch {
    return null;
  }
  return {
    requestId: String(result.requestId ?? requestId),
    state: String(result.state ?? "absent"),
    interpretation: typeof result.interpretation === "string" ? result.interpretation : null,
    outcome: result.receipt ?? result.outcome ?? null,
    raw: result
  };
}
function pickString(obj, ...keys) {
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return v.trim();
  }
  return null;
}
function asRecord3(v) {
  return v && typeof v === "object" && !Array.isArray(v) ? v : {};
}
function parseNativeLaunchMode(value) {
  const mode = asRecord3(value);
  const actual = pickString(mode, "mode");
  return actual ? { mode: actual, preferred: pickString(mode, "preferred"), reason: pickString(mode, "reason"), detail: pickString(mode, "detail") } : null;
}
function parseWorkerStartReceipt(payload, ok) {
  const raw = payload && typeof payload === "object" && !Array.isArray(payload) ? payload : {};
  const errDataRecord = asRecord3(asRecord3(raw.error).data);
  const nested = {
    ...errDataRecord,
    ...asRecord3(errDataRecord.receipt),
    ...asRecord3(raw.receipt),
    ...asRecord3(raw.worker),
    ...asRecord3(raw.dispatch),
    ...raw
  };
  const recovery = nested.recoveryCommands ?? nested.recovery_commands ?? nested.recovery;
  const launchRecord = {
    ...asRecord3(nested.effects),
    ...asRecord3(nested.launch),
    ...nested
  };
  const launch = asRecord3(nested.launch);
  const structuredLaunch = Object.prototype.hasOwnProperty.call(launch, "effective") || Object.prototype.hasOwnProperty.call(launch, "requested");
  const preferences = structuredLaunch ? asRecord3(launch.effective) : launchRecord;
  const state = pickString(nested, "state");
  const workerOutcome = pickString(nested, "workerOutcome", "worker_outcome");
  return {
    ok: ok && (state === null || state === "ready"),
    taskId: pickString(nested, "taskId", "task_id"),
    dispatchId: readDispatchId(nested),
    requestId: pickString(nested, "requestId", "request_id", "retryRequestId", "retry_request"),
    status: state ?? pickString(nested, "status", "workerStatus"),
    workerOutcome: workerOutcome === "succeeded" || workerOutcome === "failed" ? workerOutcome : null,
    stage: pickString(nested, "stage", "workerStage"),
    failedStage: pickString(nested, "failedStage", "failed_stage"),
    setup: pickString(nested, "setup", "setupResult", "setup_result"),
    effects: nested.effects ?? null,
    residualResources: nested.residualResources ?? nested.residual_resources ?? null,
    recoveryCommands: Array.isArray(recovery) ? recovery.map(String) : [],
    launchMode: parseNativeLaunchMode(nested.mode),
    ...nested.keptOpen === true ? { keepOpen: "retained" } : typeof nested.keepOpenFailure === "string" ? { keepOpen: nested.keepOpenFailure } : {},
    effective: {
      agent: pickString(preferences, "agent", "agentId", "agent_id"),
      model: pickString(preferences, "model"),
      effort: pickString(preferences, "effort"),
      worktree: pickString(launchRecord, "worktree", "worktreeSelector", "worktree_selector"),
      terminal: pickString(launchRecord, "terminal", "terminalHandle", "terminal_handle"),
      // Phase 6: which execution server the receipt names ("on", an
      // environment id, or the runtime's server label). A local start usually
      // leaves this unechoed — null, i.e. "unknown", never assumed local.
      on: pickString(
        launchRecord,
        "on",
        "environment",
        "environmentId",
        "environment_id",
        "serverName",
        "server_name"
      ),
      // Creation metadata the receipt echoes back for a creating start.
      // Same rule as every effective field: only a present, non-empty echo
      // counts; absence stays null and the UI reports "unknown".
      name: pickString(launchRecord, "name", "worktreeName", "worktree_name"),
      baseBranch: pickString(launchRecord, "baseBranch", "base_branch", "baseRef"),
      displayName: pickString(launchRecord, "displayName", "display_name")
    },
    raw
  };
}
function requireReadyWorkerStartReceipt(payload, requestId, keepOpen = false) {
  const receipt = parseWorkerStartReceipt(payload, true);
  receipt.requestId ??= requestId;
  if (keepOpen && !receipt.keepOpen) receipt.keepOpen = "unknown";
  if (!receipt.ok) {
    const unknown = receipt.status === "outcome_unknown" || receipt.status === "start_unknown";
    throw new WorkerStartError(
      receipt,
      pickString(receipt.raw, "lastError") ?? `worker-start did not reach ready (${receipt.status ?? "unknown state"})`,
      unknown ? "start_unknown" : receipt.status ?? "start_failed"
    );
  }
  return receipt;
}
var WorkerStartError = class extends OrcaCliError {
  receipt;
  constructor(receipt, message, code) {
    super(message, code);
    this.name = "WorkerStartError";
    this.receipt = receipt;
  }
};
function collectCapabilityNames(input, out) {
  if (typeof input === "string") {
    if (input.trim()) out.push(input.trim());
    return;
  }
  if (Array.isArray(input)) {
    for (const item of input) {
      if (typeof item === "string") {
        if (item.trim()) out.push(item.trim());
        continue;
      }
      const rec2 = asRecord3(item);
      const name = pickString(rec2, "name", "capability", "id", "kind");
      if (name) out.push(name);
    }
    return;
  }
  const rec = asRecord3(input);
  for (const [key, value] of Object.entries(rec)) {
    if (value === false) continue;
    if (value === true) {
      out.push(key);
      continue;
    }
    if (value && typeof value === "object") out.push(key);
  }
}
function parseEnvironmentRow(raw) {
  const r = asRecord3(raw);
  const id = pickString(r, "id", "environmentId", "environment_id");
  if (!id) return null;
  let connected = null;
  for (const key of ["connected", "online", "reachable"]) {
    if (typeof r[key] === "boolean") {
      connected = r[key];
      break;
    }
  }
  if (connected === null) {
    const status = pickString(r, "state", "status", "connection");
    if (status === "connected" || status === "online" || status === "ready") connected = true;
    else if (status === "disconnected" || status === "offline") connected = false;
  }
  const caps = [];
  let capsPresent = false;
  for (const key of ["capabilities", "peerCapabilities", "serverCapabilities"]) {
    if (r[key] !== void 0) {
      capsPresent = true;
      collectCapabilityNames(r[key], caps);
      break;
    }
  }
  return {
    id,
    name: pickString(r, "name", "displayName", "display_name", "label") ?? id,
    connected,
    // null = the row carries no capability field at all (mixed-version peer
    // or older runtime): gate everything off. [] = advertised nothing.
    capabilities: capsPresent ? caps : null,
    version: pickString(r, "version", "protocolVersion", "runtimeVersion"),
    raw: r
  };
}
function parseAdvertisedCapabilities(raw) {
  if (raw === void 0 || raw === null) return null;
  const caps = [];
  collectCapabilityNames(raw, caps);
  return caps;
}
async function readLocalRuntimeCapabilities() {
  const status = asRecord3(await runOrca(["status"]));
  return parseAdvertisedCapabilities(asRecord3(status.runtime).capabilities);
}
var CANONICAL_RUNTIME_CAPABILITIES = [
  {
    canonicalId: "orchestration.worker-launch-preferences.v1",
    label: "Worker launch preferences",
    scope: "peer",
    explanation: "Forwards per-worker --model/--effort launch preferences through a remote worker-start.",
    aliases: ["model.effort", "model", "launch.model.effort", "launch.model", "launch"],
    gates: ["modelEffort"]
  },
  {
    canonicalId: "orchestration.federation-structured-read.v1",
    label: "Structured worker reads",
    scope: "peer",
    explanation: "Serves structured transcript reads (`worker-read --source transcript`) from a connected runtime.",
    aliases: ["worker.read.transcript", "transcript.read", "transcript", "structured.read", "worker.read"],
    gates: ["transcriptRead"]
  },
  {
    canonicalId: "orchestration.federation-fleet-snapshot.v1",
    label: "Fleet snapshot",
    scope: "peer",
    explanation: "Includes remote workers in `worker-list --include-remote` fleet accounting.",
    aliases: ["fleet.snapshot", "fleet", "worker.list.remote", "include.remote"],
    gates: ["fleetSnapshot"]
  },
  {
    canonicalId: "orchestration.federation-control-mail.v1",
    label: "Federation control mail",
    scope: "peer",
    explanation: "Routes coordinator control mail (guidance, questions) to workers on a connected runtime.",
    aliases: []
  },
  {
    canonicalId: "orchestration.federation-lifecycle-settlement.v1",
    label: "Lifecycle settlement",
    scope: "peer",
    explanation: "Settles worker_done / task completion through the connected runtime's lifecycle contract.",
    aliases: []
  },
  {
    canonicalId: "orchestration.federation-release-archive.v1",
    label: "Release archive",
    scope: "peer",
    explanation: "Archives worker terminal ownership decisions (release/retain) on the connected runtime.",
    aliases: []
  },
  {
    canonicalId: "orchestration.worker-stop-verdict.v1",
    label: "Worker stop verdict",
    scope: "runtime",
    explanation: "worker-stop receipts carry an explicit per-worker verdict instead of an ambiguous exit.",
    aliases: []
  },
  { canonicalId: "orchestration.worker-auto-release.v1", label: "Worker auto release", scope: "runtime", explanation: "Advertises automatic release of eligible worker resources.", aliases: [] },
  { canonicalId: "orchestration.worker-keep-open.v1", label: "Worker keep open", scope: "runtime", explanation: "Advertises explicit worker resource retention.", aliases: [] },
  { canonicalId: "orchestration.worker-start-implicit-run.v1", label: "Implicit Run start", scope: "runtime", explanation: "Advertises implicit Run support; the viewer still requires explicit Run authority.", aliases: [] },
  { canonicalId: "orchestration.retained-run-bindings.v1", label: "Retained Run bindings", scope: "runtime", explanation: "Advertises retained worker Run bindings.", aliases: [] },
  { canonicalId: "orchestration.worker-turn-stop-reports.v1", label: "Worker turn stop reports", scope: "runtime", explanation: "Advertises worker turn stop reporting.", aliases: [] },
  { canonicalId: "orchestration.ask-returns-at-once.v1", label: "Immediate ask receipt", scope: "runtime", explanation: "Advertises immediate question receipts.", aliases: [] },
  { canonicalId: "orchestration.worker-stop-helpers.v1", label: "Cascading helper stop", scope: "runtime", explanation: "worker-stop automatically stops child helpers started by the target Dispatch and reports them under helpers.", aliases: [] },
  { canonicalId: "orchestration.peer-mail.v1", label: "Direct peer mail", scope: "peer", explanation: "Supports orchestration send --on <server> across paired Orca servers.", aliases: [] },
  { canonicalId: "orchestration.remote-owned-workers.v1", label: "Remote-owned workers", scope: "peer", explanation: "Stores remote worker receipts and paginated worker-list inventory on the paired execution server.", aliases: [] }
];
function normalizeCapabilityName(name) {
  return name.toLowerCase().replace(/[._-]+/g, ".");
}
function describeRuntimeCapabilities(advertised) {
  const have = /* @__PURE__ */ new Map();
  for (const name of advertised ?? []) {
    have.set(normalizeCapabilityName(name), name);
  }
  const known = /* @__PURE__ */ new Set();
  const capabilities = CANONICAL_RUNTIME_CAPABILITIES.map((spec) => {
    const canonicalKey = normalizeCapabilityName(spec.canonicalId);
    known.add(canonicalKey);
    for (const alias of spec.aliases) known.add(normalizeCapabilityName(alias));
    if (have.has(canonicalKey)) {
      return {
        id: spec.canonicalId,
        label: spec.label,
        scope: spec.scope,
        state: "supported",
        supported: true,
        matchedName: have.get(canonicalKey) ?? spec.canonicalId,
        explanation: spec.explanation
      };
    }
    const aliasHit = spec.aliases.find((alias) => have.has(normalizeCapabilityName(alias)));
    if (aliasHit) {
      return {
        id: spec.canonicalId,
        label: spec.label,
        scope: spec.scope,
        state: "alias",
        supported: true,
        matchedName: have.get(normalizeCapabilityName(aliasHit)) ?? aliasHit,
        explanation: spec.explanation
      };
    }
    return {
      id: spec.canonicalId,
      label: spec.label,
      scope: spec.scope,
      state: "absent",
      supported: false,
      matchedName: null,
      explanation: spec.explanation
    };
  });
  const unknownAdvertised = (advertised ?? []).filter((name) => !known.has(normalizeCapabilityName(name)));
  return { capabilities, unknownAdvertised };
}
function canonicalCapabilitySupported(advertised, canonicalId) {
  return describeRuntimeCapabilities(advertised).capabilities.some(
    (view) => view.id === canonicalId && view.supported
  );
}
var CAPABILITY_LOOKUPS = (() => {
  const lookups = {
    modelEffort: [],
    transcriptRead: [],
    fleetSnapshot: []
  };
  for (const spec of CANONICAL_RUNTIME_CAPABILITIES) {
    for (const gate of spec.gates ?? []) {
      lookups[gate].push(spec.canonicalId, ...spec.aliases);
    }
  }
  return lookups;
})();
function parsePeerCapabilities(advertised) {
  const have = new Set((advertised ?? []).map(normalizeCapabilityName));
  const matches = (names) => names.some((n) => have.has(normalizeCapabilityName(n)));
  return {
    modelEffort: advertised !== null && matches(CAPABILITY_LOOKUPS.modelEffort),
    transcriptRead: advertised !== null && matches(CAPABILITY_LOOKUPS.transcriptRead),
    fleetSnapshot: advertised !== null && matches(CAPABILITY_LOOKUPS.fleetSnapshot),
    raw: advertised
  };
}
async function listEnvironments() {
  const result = await runOrca(["environment", "list"]);
  return (result.environments ?? []).map(parseEnvironmentRow).filter((e) => e !== null);
}
async function showEnvironment(environmentId) {
  let result;
  try {
    result = await runOrca([
      "environment",
      "show",
      "--environment",
      environmentId
    ]);
  } catch (err) {
    const e = err;
    if (e instanceof OrcaCliError && (e.code === "invalid_argument" || e.code === "not_found")) {
      return null;
    }
    throw err;
  }
  const body = asRecord3(result.environment ?? result);
  return parseEnvironmentRow({ ...body, id: pickString(body, "id", "environmentId") ?? environmentId });
}
function environmentArgs(environmentId) {
  return environmentId ? ["--environment", environmentId] : [];
}
async function listRepos(environmentId) {
  const result = await runOrca(["repo", "list", ...environmentArgs(environmentId)]);
  return (result.repos ?? []).map(parseRepoRow).filter((r) => r !== null);
}
function parseRepoRow(raw) {
  const r = asRecord3(raw);
  const id = pickString(r, "id");
  if (!id) return null;
  return {
    id,
    path: pickString(r, "path"),
    displayName: pickString(r, "displayName", "display_name", "name"),
    kind: pickString(r, "kind"),
    hostId: pickString(r, "executionHostId", "execution_host_id", "hostId", "host_id")
  };
}
async function listWorktrees(environmentId, opts = {}) {
  const args = [
    "worktree",
    "list",
    ...environmentArgs(environmentId),
    ...opts.repo ? ["--repo", opts.repo] : [],
    ...opts.limit ? ["--limit", String(opts.limit)] : []
  ];
  const result = await runOrca(args);
  return (result.worktrees ?? []).map(parseWorktreeRow).filter((r) => r !== null);
}
function parseWorktreeRow(raw) {
  const r = asRecord3(raw);
  const id = pickString(r, "id");
  if (!id) return null;
  return {
    id,
    repoId: pickString(r, "repoId", "repo_id"),
    path: pickString(r, "path"),
    displayName: pickString(r, "displayName", "display_name", "name"),
    branch: pickString(r, "branch"),
    hostId: pickString(r, "hostId", "host_id"),
    parentWorktreeId: pickString(r, "parentWorktreeId", "parent_worktree_id"),
    isMainWorktree: typeof r.isMainWorktree === "boolean" ? r.isMainWorktree : null
  };
}
async function showWorktree(selector, environmentId) {
  let result;
  try {
    result = await runOrca([
      "worktree",
      "show",
      "--worktree",
      selector,
      ...environmentArgs(environmentId)
    ]);
  } catch (err) {
    if (err instanceof OrcaCliError && (err.code === "selector_not_found" || err.code === "not_found")) {
      return null;
    }
    throw err;
  }
  const body = asRecord3(result.worktree ?? result);
  return parseWorktreeRow({ ...body, id: pickString(body, "id") ?? selector });
}
async function showRepo(repoSelector, environmentId) {
  let result;
  try {
    result = await runOrca([
      "repo",
      "show",
      "--repo",
      repoSelector,
      ...environmentArgs(environmentId)
    ]);
  } catch (err) {
    if (err instanceof OrcaCliError && (err.code === "repo_not_found" || err.code === "not_found")) {
      return null;
    }
    throw err;
  }
  const body = asRecord3(result.repo ?? result);
  return parseRepoRow({ ...body, id: pickString(body, "id") ?? repoSelector });
}
async function listProjects(environmentId) {
  const result = await runOrca(["project", "list", ...environmentArgs(environmentId)]);
  return (result.projects ?? []).map((raw) => {
    const r = asRecord3(raw);
    const id = pickString(r, "id");
    if (!id) return null;
    const repoIds = Array.isArray(r.sourceRepoIds) ? r.sourceRepoIds.filter((x) => typeof x === "string") : [];
    return {
      id,
      displayName: pickString(r, "displayName", "display_name", "name"),
      kind: pickString(r, "kind"),
      repoIds
    };
  }).filter((r) => r !== null);
}
function parseWorkspaceFileReceipt(result) {
  const body = asRecord3(result);
  return {
    path: pickString(body, "path", "filePath", "file_path"),
    worktree: pickString(body, "worktree", "worktreeId", "worktree_id"),
    raw: body
  };
}
async function openWorkspaceFile(path, opts = {}) {
  if (!path.trim()) {
    throw new OrcaCliError("file open requires a non-empty path", "invalid_argument");
  }
  const result = await runOrca([
    "file",
    "open",
    path,
    ...opts.worktree ? ["--worktree", opts.worktree] : [],
    ...environmentArgs(opts.environmentId)
  ]);
  return parseWorkspaceFileReceipt(result);
}
async function openWorkspaceFileDiff(path, opts = {}) {
  if (!path.trim()) {
    throw new OrcaCliError("file diff requires a non-empty path", "invalid_argument");
  }
  const result = await runOrca([
    "file",
    "diff",
    path,
    ...opts.staged ? ["--staged"] : [],
    ...opts.worktree ? ["--worktree", opts.worktree] : [],
    ...environmentArgs(opts.environmentId)
  ]);
  return parseWorkspaceFileReceipt(result);
}
async function openWorkspaceChangedFiles(opts = {}) {
  if (opts.mode && !["edit", "diff", "both"].includes(opts.mode)) {
    throw new OrcaCliError(
      `file open-changed mode must be one of edit|diff|both, got ${JSON.stringify(opts.mode)}`,
      "invalid_argument"
    );
  }
  const result = await runOrca([
    "file",
    "open-changed",
    ...opts.mode ? ["--mode", opts.mode] : [],
    ...opts.worktree ? ["--worktree", opts.worktree] : [],
    ...environmentArgs(opts.environmentId)
  ]);
  return parseWorkspaceFileReceipt(result);
}
var WORKTREE_ARCHIVE_HOOK_FAILED = "worktree_archive_hook_failed";
function isArchiveHookFailure(err) {
  return err instanceof OrcaCliError && err.code === WORKTREE_ARCHIVE_HOOK_FAILED;
}
async function removeWorktree(selector, opts = {}) {
  if (!selector.trim()) {
    throw new OrcaCliError(
      "worktree rm requires an exact non-empty worktree selector",
      "invalid_argument"
    );
  }
  if (opts.allowFailedArchiveHook && !opts.runHooks) {
    throw new OrcaCliError(
      "--allow-failed-archive-hook requires --run-hooks (there is no failure to waive without running hooks)",
      "invalid_argument"
    );
  }
  const result = await runOrca([
    "worktree",
    "rm",
    "--worktree",
    selector,
    ...opts.force ? ["--force"] : [],
    ...opts.deleteBranch ? ["--delete-branch"] : [],
    ...opts.runHooks ? ["--run-hooks"] : [],
    ...opts.allowFailedArchiveHook ? ["--allow-failed-archive-hook"] : [],
    ...environmentArgs(opts.environmentId)
  ]);
  return {
    worktree: pickString(result, "worktree", "worktreeId", "worktree_id") ?? selector,
    archiveHookOverride: result.archiveHookOverride ?? null,
    preservedBranch: result.preservedBranch ?? null,
    raw: result
  };
}
var HARNESS_LAUNCH = {
  claude: "claude --dangerously-skip-permissions"
};
function harnessCommand(harness) {
  return HARNESS_LAUNCH[harness] ?? harness;
}
function quoteLocalShellArg(value) {
  return `'${value.replaceAll("'", "'\\''")}'`;
}
async function prepareCodexTerminal(opts) {
  const command = [
    "codex",
    "--enable hooks",
    "--dangerously-bypass-approvals-and-sandbox",
    "--no-alt-screen",
    ...opts.model ? ["-m", quoteLocalShellArg(opts.model)] : [],
    ...opts.effort ? ["-c", quoteLocalShellArg(`model_reasoning_effort=${JSON.stringify(opts.effort)}`)] : []
  ].join(" ");
  const created = opts.terminal ? null : await runOrca([
    "terminal",
    "create",
    "--worktree",
    opts.worktree,
    "--command",
    command
  ]);
  const handle = opts.terminal ?? created?.terminal?.handle;
  if (!handle) throw new OrcaCliError("orca terminal create returned no Codex handle");
  opts.onHandle(handle);
  if (opts.terminal) {
    await runOrca(["terminal", "send", "--terminal", handle, "--text", command, "--enter"]);
  }
  const waited = await runOrca([
    "terminal",
    "wait",
    "--terminal",
    handle,
    "--for",
    "tui-idle",
    "--timeout-ms",
    "90000"
  ]);
  if (!waited.wait?.satisfied) {
    throw new OrcaCliError(`Codex terminal ${handle} did not become idle before dispatch`, "codex_not_ready");
  }
  let readyFrames = 0;
  for (let i = 0; i < 40; i++) {
    const read = await runOrca([
      "terminal",
      "read",
      "--terminal",
      handle,
      "--screen"
    ]);
    const screen = read.terminal;
    const lines = screen?.source === "screen" && Array.isArray(screen.tail) ? screen.tail : [];
    const composerReady = lines.some((line) => /^\s*›\s*Ask Codex to do anything\s*$/.test(line));
    const modelLoading = lines.some((line) => /model:\s*loading\b/i.test(line));
    readyFrames = composerReady && !modelLoading ? readyFrames + 1 : 0;
    if (readyFrames >= 2) return handle;
    await sleep(750);
  }
  throw new OrcaCliError(`Codex terminal ${handle} never showed a stable ready composer`, "codex_not_ready");
}
async function createLocalCodexWorktree(opts) {
  assertValidWorkerStart({
    agent: "codex",
    worktree: opts.kind,
    name: opts.name,
    repo: opts.repo,
    baseBranch: opts.baseBranch,
    displayName: opts.displayName,
    comment: opts.comment,
    setup: opts.setup
  });
  const before = new Set((await listTerminals()).map((terminal) => terminal.handle));
  const result = await runOrca([
    "worktree",
    "create",
    "--name",
    opts.name,
    ...opts.kind === "new-child" ? ["--parent-worktree", opts.parentWorktree] : [...opts.repo ? ["--repo", opts.repo] : [], "--no-parent"],
    ...opts.baseBranch ? ["--base-branch", opts.baseBranch] : [],
    ...opts.comment ? ["--comment", opts.comment] : [],
    ...opts.setup ? ["--setup", opts.setup] : []
  ]);
  const id = pickString(asRecord3(result.worktree), "id");
  if (!id) throw new OrcaCliError("worktree create returned no exact worktree id", "workspace_unverifiable");
  const selector = id.startsWith("id:") ? id : `id:${id}`;
  const row = await showWorktree(selector);
  if (!row || row.id !== id || !row.path) {
    throw new OrcaCliError(`Created Codex worktree ${selector} could not be verified`, "workspace_unverifiable");
  }
  if (opts.displayName) {
    await runOrca(["worktree", "set", "--worktree", selector, "--display-name", opts.displayName]);
  }
  let candidates = [];
  for (let i = 0; i < 20; i++) {
    candidates = (await listTerminals()).filter((terminal) => terminal.connected && terminal.worktreeId === id && !before.has(terminal.handle));
    if (candidates.length) break;
    await sleep(250);
  }
  if (candidates.length !== 1) {
    throw new OrcaCliError(
      `Created Codex worktree ${selector}, but its startup terminal is ${candidates.length ? "ambiguous" : "unreported"}; recover it through Orca`,
      "workspace_unverifiable"
    );
  }
  return { selector, path: row.path, terminal: candidates[0].handle };
}
async function findOpenCodeTuiLaunch(dispatchId) {
  const rows = await new ProviderSessionStore(currentWorkspace().dir).listOpenCodeLaunches();
  const matches = rows.filter((row) => row.dispatchId === dispatchId);
  if (matches.length > 1) throw new OrcaCliError("Ambiguous OpenCode launch identity", "session_binding_mismatch");
  return matches[0] ?? null;
}
async function recoverOpenCodeTuiBindings(runId, rows) {
  const store = new ProviderSessionStore(currentWorkspace().dir);
  for (const saved of await store.listOpenCodeLaunches(runId)) {
    if (!saved.terminal || saved.state === "closed") continue;
    if (saved.dispatchId && await store.get({ runId, taskId: saved.taskId, dispatchId: saved.dispatchId })) continue;
    const candidates = rows.filter((row) => row.taskId === saved.taskId && row.runId === saved.runId && row.agentTerminalHandle === saved.terminal && (!saved.dispatchId || row.dispatchId === saved.dispatchId));
    if (candidates.length !== 1) continue;
    const launch = {
      ...saved,
      dispatchId: candidates[0].dispatchId,
      state: saved.state === "retained" ? "retained" : "bound"
    };
    await verifyOpenCodeTuiTerminal(launch);
    await verifyOpenCodeSession(launch);
    await store.recordOpenCodeLaunch(launch);
    await store.bind({
      runId,
      taskId: launch.taskId,
      dispatchId: launch.dispatchId,
      harness: "opencode",
      sessionId: launch.sessionId,
      workspace: launch.workspace,
      host: "local:local",
      source: "launch-receipt"
    });
  }
}
async function verifyOpenCodeTuiTerminal(launch) {
  const terminals = await listTerminals();
  const terminal = terminals.find((row) => row.handle === launch.terminal);
  if (!terminal || terminal.worktreePath !== launch.workspace || ![launch.terminalTitle, `OC | ${launch.terminalTitle}`].includes(terminal.title)) {
    throw new OrcaCliError("OpenCode terminal identity changed or is unavailable; inspect manually", "session_binding_mismatch");
  }
  if (launch.dispatchId) {
    const detail = await showWorkerDetail(launch.dispatchId);
    if (detail?.runId !== launch.runId || detail.taskId !== launch.taskId || detail.terminal?.handle !== launch.terminal || detail.observation?.exactWorker !== true || detail.terminal.worktreePath !== launch.workspace) {
      throw new OrcaCliError("OpenCode Dispatch no longer owns the exact prepared terminal", "session_binding_mismatch");
    }
    const inventory = await listWorkers(launch.runId, { includeRemote: true });
    if (inventory.partialHostErrors.length) throw new OrcaCliError("Worker inventory is incomplete", "inventory_incomplete");
    if (inventory.workers.some((row) => row.dispatchId !== launch.dispatchId && row.agentTerminalHandle === launch.terminal && row.dispatchStatus === "dispatched")) {
      throw new OrcaCliError("OpenCode terminal was transferred to another Dispatch", "session_binding_mismatch");
    }
  }
}
async function inspectOpenCodeTui(dispatchId) {
  const launch = await findOpenCodeTuiLaunch(dispatchId);
  return launch ? (await readOpenCodeExecution(launch)).evidence : null;
}
async function closeReleasedOpenCodeTui(dispatchId) {
  const launch = await findOpenCodeTuiLaunch(dispatchId);
  if (!launch) return null;
  if (launch.state === "closed" || launch.state === "retained") return launch.state;
  const detail = await showWorkerDetail(dispatchId);
  if (!["completed", "failed"].includes(detail?.dispatch?.status ?? "") || detail?.fleet?.terminalState !== "retained") {
    throw new OrcaCliError("OpenCode cleanup requires a settled Dispatch and confirmed external release", "release_unknown");
  }
  await verifyOpenCodeTuiTerminal(launch);
  const execution = await readOpenCodeExecution(launch);
  if (execution.evidence.userOwned) {
    await new ProviderSessionStore(currentWorkspace().dir).recordOpenCodeLaunch({ ...launch, state: "retained" });
    return "retained";
  }
  if (!execution.complete || !execution.exited || execution.evidence.state === "input_unproven") {
    throw new OrcaCliError("OpenCode execution exit/ownership not confirmed; terminal retained for inspection", "release_unknown");
  }
  await closeTerminalStrict(launch.terminal);
  await new ProviderSessionStore(currentWorkspace().dir).recordOpenCodeLaunch({ ...launch, state: "closed" });
  return "closed";
}
async function retainOpenCodeTui(dispatchId) {
  const launch = await findOpenCodeTuiLaunch(dispatchId);
  if (launch && launch.state !== "closed") {
    await new ProviderSessionStore(currentWorkspace().dir).recordOpenCodeLaunch({ ...launch, state: "retained" });
  }
}
async function startOpenCodeTuiWorker(opts) {
  return startOpenCodeSessionWorker({ ...opts, frontend: "tui" }, false);
}
async function startOpenCodeInteractiveWorker(opts) {
  return startOpenCodeSessionWorker(opts, true);
}
async function startOpenCodeSessionWorker(opts, explicit) {
  if (explicit && process.platform !== "linux") {
    throw new OrcaCliError("Explicit OpenCode UI supports only local Linux existing workspaces", "invalid_placement");
  }
  if (process.platform === "win32" || ["new-child", "new-top-level"].includes(opts.worktree)) {
    throw new OrcaCliError("OpenCode TUI supports only local POSIX existing workspaces", "invalid_placement");
  }
  const row = await showWorktree(opts.worktree);
  if (!row?.path || row.hostId && row.hostId !== "local") {
    throw new OrcaCliError("OpenCode TUI workspace must be positively local and registered", "workspace_unverifiable");
  }
  const workspace = realpathSync2(row.path);
  if (explicit) {
    const status = await runOrca(["status"]);
    const version = status.runtime?.appVersion;
    if (!version || !/^\d+\.\d+\.\d+$/.test(version) || compareVersions(version, "1.4.222") < 0) {
      throw new OrcaCliError("Explicit OpenCode UI requires running Orca >= 1.4.222", "execution_disabled");
    }
    await verifyOpenCodeVersion(workspace);
  }
  if (!opts.model && opts.effort) throw new OrcaCliError("OpenCode effort requires an explicit model", "invalid_input");
  const requestedModel = opts.model ? parseOpenCodeModel(opts.model, opts.effort) : null;
  const creationModel = requestedModel ?? await readOpenCodeDefaultModel(workspace);
  await verifyOpenCodeModel(workspace, creationModel, requestedModel === null);
  const store = new ProviderSessionStore(currentWorkspace().dir);
  const previous = await store.listOpenCodeLaunches(opts.runId);
  if (previous.some((v) => v.taskId === opts.taskId && ["prepared", "bound"].includes(v.state))) {
    throw new OrcaCliError("An unresolved OpenCode preparation already exists for this Task; inspect it before replacement", "start_unknown");
  }
  let launch = {
    requestId: opts.retryRequestId,
    runId: opts.runId,
    taskId: opts.taskId,
    // V2 session.create accepts an explicit id. Journal it BEFORE POST so a
    // lost create response cannot result in another session on retry/restart.
    sessionId: `ses_${randomUUID3().replaceAll("-", "")}`,
    workspace,
    frontend: opts.frontend,
    requestedModel,
    model: null,
    terminal: null,
    terminalTitle: openCodeTuiTitle(opts.retryRequestId),
    dispatchId: null,
    state: "prepared"
  };
  await store.recordOpenCodeLaunch(launch);
  let started = null;
  let createAttempted = false;
  let createConfirmed = false;
  let terminalAttempted = false;
  const checkCancellation = () => {
    if (opts.isCancelled?.()) throw new OrcaCliError("OpenCode TUI start cancelled before Dispatch input", "start_cancelled");
  };
  try {
    checkCancellation();
    createAttempted = true;
    const created = asRecord3(await openCodeApi(workspace, "POST", "/api/session", {
      id: launch.sessionId,
      title: launch.terminalTitle,
      agent: "build",
      model: creationModel,
      location: { directory: workspace }
    }));
    if (asRecord3(created.data).id !== launch.sessionId) throw new Error("OpenCode did not confirm the journaled session ID");
    createConfirmed = true;
    const session = await verifyOpenCodeSession(launch);
    const model = validateOpenCodeModel(session.model);
    assertOpenCodeModelSelection(creationModel, model);
    await verifyOpenCodeModel(workspace, model, true);
    if (!sameOpenCodeModel(model, creationModel)) {
      throw new Error("OpenCode did not preserve the requested session model/variant");
    }
    launch = { ...launch, model };
    await store.recordOpenCodeLaunch(launch);
    checkCancellation();
    terminalAttempted = true;
    const terminal = await runOrca([
      "terminal",
      "create",
      "--worktree",
      `path:${workspace}`,
      "--title",
      launch.terminalTitle,
      // Tab restoration is shared by default and can select another session
      // despite --session. A request-local TUI channel isolates only UI state;
      // backend discovery and provider/model configuration stay unchanged.
      // Orca identifies the live foreground OpenCode agent after it starts.
      // Keep `opencode` as the actual command and preserve the selected frontend.
      "--command",
      `OPENCODE_TUI_CHANNEL=${quoteLocalShellArg(`orca-dag-${opts.retryRequestId}`)} opencode ${opts.frontend === "mini" ? "mini" : "--auto"} --session ${quoteLocalShellArg(launch.sessionId)}`
    ]);
    if (!terminal.terminal?.handle) throw new Error("OpenCode terminal creation returned no handle");
    launch = { ...launch, terminal: terminal.terminal.handle };
    opts.onHandle(launch.terminal);
    await store.recordOpenCodeLaunch(launch);
    const readyDeadline = Date.now() + 6e4;
    for (; ; ) {
      checkCancellation();
      const pane = (await listTerminals()).find((row2) => row2.handle === launch.terminal);
      if (!pane || pane.worktreePath !== workspace) {
        throw new OrcaCliError("OpenCode startup terminal identity changed", "session_binding_mismatch");
      }
      if (pane.title === `OC | ${launch.terminalTitle}`) break;
      if (Date.now() >= readyDeadline) {
        throw new OrcaCliError("OpenCode session title did not become ready; no Task input was sent", "opencode_not_ready");
      }
      await delay2(250);
    }
    const wait = await runOrca([
      "terminal",
      "wait",
      "--terminal",
      launch.terminal,
      "--for",
      "tui-idle",
      "--timeout-ms",
      String(Math.max(1, readyDeadline - Date.now()))
    ]);
    if (wait.wait?.satisfied !== true) throw new OrcaCliError("OpenCode TUI did not become ready; no Task input was sent", "opencode_not_ready");
    checkCancellation();
    await verifyOpenCodeTuiTerminal(launch);
    const beforeInput = await readOpenCodeExecution(launch);
    if (beforeInput.evidence.userOwned || !beforeInput.complete) {
      await store.recordOpenCodeLaunch({ ...launch, state: "retained" });
      opts.onHandle(null);
      throw new OrcaCliError("Prepared OpenCode session has user-owned or unproven work; no Task input was sent", "preparation_retained");
    }
    const current = await verifyOpenCodeSession(launch);
    if (!sameOpenCodeModel(current.model, model)) {
      await store.recordOpenCodeLaunch({ ...launch, state: "retained" });
      opts.onHandle(null);
      throw new OrcaCliError("Prepared OpenCode model changed before binding; terminal retained, no input sent", "preparation_retained");
    }
    checkCancellation();
    started = await startSupervisedWorker({
      taskId: opts.taskId,
      runId: opts.runId,
      from: opts.from,
      agent: "opencode",
      worktree: `path:${workspace}`,
      terminal: launch.terminal,
      retryRequestId: opts.retryRequestId,
      retryOf: opts.retryOf,
      keepOpen: opts.keepOpen
    });
    if (!started.dispatchId) throw new Error("OpenCode start carried no Dispatch ID; do not retry");
    launch = { ...launch, dispatchId: started.dispatchId, state: "bound" };
    await store.recordOpenCodeLaunch(launch);
    await store.bind({
      runId: opts.runId,
      taskId: opts.taskId,
      dispatchId: started.dispatchId,
      harness: "opencode",
      sessionId: launch.sessionId,
      workspace,
      host: "local:local",
      source: "launch-receipt"
    });
    return { ...started, handle: launch.terminal, openCodeLaunch: launch };
  } catch (error) {
    const err = error;
    if (started?.dispatchId) {
      return {
        ...started,
        handle: launch.terminal,
        openCodeLaunch: launch,
        sessionBindingWarning: "OpenCode Dispatch started but session binding persistence failed; inspect the saved preparation"
      };
    }
    if (started) throw new WorkerStartError(
      { ...started.receipt, failedStage: "response_lost", residualResources: true },
      "OpenCode start accepted input without a Dispatch identity; inspect before cleanup or retry",
      RESPONSE_LOST
    );
    if (err.code === "preparation_retained") throw error;
    if (err.receipt?.dispatchId || err.receipt?.failedStage === "response_lost") throw error;
    if (createAttempted && !createConfirmed || terminalAttempted && !launch.terminal || error instanceof OrcaCliError && error.code === RESPONSE_LOST) {
      throw new WorkerStartError(
        { ...parseWorkerStartReceipt(void 0, false), failedStage: "response_lost", residualResources: true },
        "OpenCode preparation outcome is unknown; no replacement was started",
        RESPONSE_LOST
      );
    }
    if (launch.terminal) {
      try {
        await verifyOpenCodeTuiTerminal(launch);
        const execution = await readOpenCodeExecution(launch);
        if (execution.evidence.userOwned || !execution.complete) {
          await store.recordOpenCodeLaunch({ ...launch, state: "retained" });
          opts.onHandle(null);
          throw error;
        }
      } catch (inspectionError) {
        if (inspectionError === error) throw error;
        throw new WorkerStartError(
          { ...parseWorkerStartReceipt(void 0, false), failedStage: "response_lost", residualResources: true },
          "OpenCode preparation ownership is unproven; terminal retained for inspection",
          RESPONSE_LOST
        );
      }
      await closeTerminalStrict(launch.terminal);
      opts.onHandle(null);
    }
    await store.recordOpenCodeLaunch({ ...launch, state: "closed" });
    throw error;
  }
}
function readDispatchId(result) {
  const r = result ?? {};
  const direct = r.dispatchId ?? r.dispatch_id;
  if (typeof direct === "string" && direct) return direct;
  for (const key of ["dispatch", "worker"]) {
    const nested = r[key];
    const id = nested?.id ?? nested?.dispatchId ?? nested?.dispatch_id;
    if (typeof id === "string" && id) return id;
  }
  return null;
}
function nativePresetPlacement(opts) {
  const kind = opts.worktree ?? "current";
  if (kind === "current") return { kind };
  if (kind === "new-child") return opts.repo ? { kind, repo: opts.repo } : { kind };
  if (kind === "new-top-level") return { kind, repo: opts.repo };
  return { kind: "existing", selector: kind };
}
function assertValidWorkerStart(opts) {
  assertNativePresetConstraints(opts.agent ?? "", {
    model: opts.model,
    effort: opts.effort,
    environment: opts.on,
    terminal: opts.terminal,
    placement: nativePresetPlacement(opts)
  });
  if (opts.terminal && (opts.model || opts.effort)) {
    throw new OrcaCliError(
      "worker-start: --model/--effort cannot combine with --terminal (a reused terminal keeps its original launch).",
      "invalid_argument"
    );
  }
  if (opts.effort && !opts.model) {
    throw new OrcaCliError(
      "worker-start: --effort requires --model (per-task effort only applies to a selected model).",
      "invalid_argument"
    );
  }
  if (opts.on && opts.terminal) {
    throw new OrcaCliError(
      "worker-start: --on cannot combine with --terminal (a remote worker is addressed by Dispatch ID; this viewer never substitutes a remote terminal handle).",
      "invalid_argument"
    );
  }
  const worktree = opts.worktree ?? "current";
  const creating = worktree === "new-top-level" || worktree === "new-child";
  if (opts.on) {
    if (worktree === "current" || worktree === "active") {
      throw new OrcaCliError(
        `worker-start: remote placement "current" is ambiguous across servers \u2014 choose an exact existing workspace selector discovered on the target environment, or new-top-level.`,
        "invalid_argument"
      );
    }
    if (worktree === "new-child") {
      if (!opts.repo || !opts.name) {
        throw new OrcaCliError(
          `worker-start: remote placement "new-child" is invalid without an exact --repo selector and explicit --name.`,
          "invalid_argument"
        );
      }
    }
    if (worktree === "new-top-level") {
      if (!opts.repo) {
        throw new OrcaCliError(
          "worker-start: remote new-top-level requires an exact --repo selector discovered on the target environment.",
          "invalid_argument"
        );
      }
      if (!opts.name) {
        throw new OrcaCliError(
          "worker-start: remote new-top-level requires an explicit --name for the new worktree.",
          "invalid_argument"
        );
      }
    }
  }
  if (!creating && (opts.repo || opts.name || opts.baseBranch || opts.displayName || opts.comment || opts.setup)) {
    throw new OrcaCliError(
      "worker-start: creation flags (--repo, --name, --base-branch, --display-name, --comment, --setup) only apply to new-top-level (or new-child) worktrees.",
      "invalid_argument"
    );
  }
  if (opts.name && !PLACEMENT_NAME_PATTERN.test(opts.name)) {
    throw new OrcaCliError(
      `worker-start: --name ${JSON.stringify(opts.name.slice(0, 64))} must be a short name (letters, digits, . _ -).`,
      "invalid_argument"
    );
  }
  if (opts.baseBranch) {
    const branch = opts.baseBranch;
    if (branch.length > 128 || !BASE_BRANCH_PATTERN.test(branch) || branch.includes("..") || branch.endsWith("/") || branch.endsWith(".")) {
      throw new OrcaCliError(
        `worker-start: --base-branch ${JSON.stringify(branch.slice(0, 64))} is not a usable git ref.`,
        "invalid_argument"
      );
    }
  }
  for (const [flag, value, max] of [
    ["--display-name", opts.displayName, DISPLAY_NAME_MAX],
    ["--comment", opts.comment, COMMENT_MAX]
  ]) {
    if (!value) continue;
    if (value.length > max || /[\u0000-\u0008\u000b-\u001f\u007f]/.test(value)) {
      throw new OrcaCliError(
        `worker-start: ${flag} must be bounded free text without control characters (max ${max}).`,
        "invalid_argument"
      );
    }
  }
  if (opts.setup && !SETUP_POLICIES.has(opts.setup)) {
    throw new OrcaCliError(
      `worker-start: --setup ${JSON.stringify(opts.setup.slice(0, 32))} must be run, skip or inherit.`,
      "invalid_argument"
    );
  }
  if (creating && !opts.name) {
    throw new OrcaCliError(
      `worker-start: ${worktree} creates a worktree and requires an explicit --name (local starts get one derived via withDerivedCreationDefaults before this gate).`,
      "invalid_argument"
    );
  }
}
function deriveWorktreeName(runId, scopeId) {
  const digest = createHash3("sha256").update(`${runId}\0${scopeId}`).digest("hex").slice(0, 8);
  const base = scopeId.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^[-.]+|[-.]+$/g, "").slice(0, 40) || "wt";
  return `${base}-${digest}`;
}
function withDerivedCreationDefaults(opts) {
  const worktree = opts.worktree ?? "current";
  if (worktree !== "new-child" && worktree !== "new-top-level") return opts;
  if (opts.name || opts.on || !opts.taskId || !opts.runId) return opts;
  return { ...opts, name: deriveWorktreeName(opts.runId, opts.taskId) };
}
function buildWorkerStartArgv(opts, requestId) {
  const omitWorktree = Boolean(opts.terminal && opts.worktree === void 0 && opts.omitWorktreeOnTerminalReuse);
  const args = [
    "orchestration",
    "worker-start",
    "--task",
    opts.taskId,
    // Reuse passes the terminal handle instead of an agent id — the handle
    // IS the agent's terminal; Orca transfers it to the new Dispatch.
    ...opts.terminal ? ["--terminal", opts.terminal] : ["--agent", opts.agent],
    ...omitWorktree ? [] : ["--worktree", opts.worktree ?? "current"],
    "--run",
    opts.runId,
    "--from",
    opts.from,
    // Durable idempotency key — see resolveAmbiguousStart below.
    "--retry-request",
    requestId
  ];
  if (opts.retryOf) args.push("--retry-of", opts.retryOf);
  if (opts.keepOpen) args.push("--keep-open");
  if (opts.model) args.push("--model", opts.model);
  if (opts.model && opts.effort) args.push("--effort", opts.effort);
  if (opts.on) args.push("--on", opts.on);
  if (opts.worktree === "new-top-level" || opts.worktree === "new-child") {
    if (opts.repo) args.push("--repo", opts.repo);
    if (opts.name) args.push("--name", opts.name);
    if (opts.baseBranch) args.push("--base-branch", opts.baseBranch);
    if (opts.displayName) args.push("--display-name", opts.displayName);
    if (opts.comment) args.push("--comment", opts.comment);
    if (opts.setup) args.push("--setup", opts.setup);
  }
  return args;
}
async function startSupervisedWorker(opts) {
  const readiness = opts.keepOpen ? await checkReadiness() : null;
  const supportsKeepOpen = Boolean(readiness?.cliVersion && readiness.version && readiness.runtimeState === "ready" && /^\d+\.\d+\.\d+$/.test(readiness.cliVersion) && /^\d+\.\d+\.\d+$/.test(readiness.version) && compareVersions(readiness.cliVersion, "1.4.246") >= 0 && compareVersions(readiness.version, "1.4.246") >= 0 && canonicalCapabilitySupported(await readLocalRuntimeCapabilities().catch(() => null), "orchestration.worker-keep-open.v1"));
  if (opts.keepOpen && !supportsKeepOpen && !(readiness?.runtimeState === "ready" && readiness.version && /^\d+\.\d+\.\d+$/.test(readiness.version) && compareVersions(readiness.version, "1.4.246") < 0)) {
    throw new OrcaCliError("Cannot prove native keep-open support; no worker was started", "keep_open_unavailable");
  }
  const request = withDerivedCreationDefaults({ ...opts, keepOpen: supportsKeepOpen });
  assertValidWorkerStart(request);
  await assertNativePresetSupport(request.agent, {
    model: request.model,
    effort: request.effort,
    environment: request.on,
    terminal: request.terminal,
    placement: nativePresetPlacement(request)
  });
  const reuseProbe = request.terminal && request.worktree === void 0 ? readiness ?? await checkReadiness() : null;
  const omitWorktreeOnTerminalReuse = Boolean(
    reuseProbe?.cliVersion && compareVersions(reuseProbe.cliVersion, "1.4.263") >= 0
  );
  const requestId = opts.retryRequestId ?? newRequestId();
  const buildArgs = () => buildWorkerStartArgv({ ...request, omitWorktreeOnTerminalReuse }, requestId);
  let result;
  try {
    result = await runOrca(buildArgs());
  } catch (err) {
    const e = err;
    if (e instanceof OrcaCliError && e.code !== RESPONSE_LOST && e.payload !== void 0) {
      const receipt2 = parseWorkerStartReceipt(e.payload, false);
      throw new WorkerStartError(receipt2, e.message, e.code);
    }
    if (e instanceof OrcaCliError && e.code === RESPONSE_LOST) {
      return resolveAmbiguousStart(request, requestId, buildArgs, e);
    }
    throw new WorkerStartError(
      parseWorkerStartReceipt(void 0, false),
      e.message,
      e.code ?? null
    );
  }
  const receipt = requireReadyWorkerStartReceipt(result, requestId, supportsKeepOpen);
  return {
    mode: "supervised",
    dispatchId: receipt.dispatchId ?? readDispatchId(result),
    handle: null,
    // The caller MINTED this id and sent it — it is the durable id even when a
    // runtime version forgets to echo it back in the receipt.
    receipt,
    replayed: false,
    adopted: false
  };
}
async function resolveAmbiguousStart(opts, requestId, buildArgs, original) {
  let probe = null;
  try {
    probe = await showRequest(requestId, { on: opts.on });
  } catch {
    probe = null;
  }
  if (probe && (probe.state === "completed" || probe.state === "pending")) {
    try {
      const result = await runOrca(buildArgs());
      const receipt = requireReadyWorkerStartReceipt(result, requestId, opts.keepOpen);
      return {
        mode: "supervised",
        dispatchId: receipt.dispatchId ?? readDispatchId(result),
        handle: null,
        // Same stamping rule as the direct path: the minted id is authoritative.
        receipt: { ...receipt, requestId: receipt.requestId ?? requestId },
        replayed: true,
        adopted: false
      };
    } catch (err) {
      if (err instanceof WorkerStartError) throw err;
      const e = err;
      if (e instanceof OrcaCliError && e.code === RESPONSE_LOST) throw original;
      if (e.payload !== void 0) {
        const receipt = parseWorkerStartReceipt(e.payload, false);
        throw new WorkerStartError(receipt, e.message, e.code);
      }
      throw original;
    }
  }
  try {
    const { workers: rows } = await listWorkers(opts.runId, { includeRemote: true });
    const candidate = rows.find(
      (r) => r.taskId === opts.taskId && r.dispatchStatus === "dispatched"
    );
    if (candidate) {
      return {
        mode: "supervised",
        dispatchId: candidate.dispatchId,
        handle: null,
        receipt: {
          ...parseWorkerStartReceipt(void 0, true),
          dispatchId: candidate.dispatchId,
          requestId,
          status: "adopted"
        },
        replayed: false,
        adopted: true
      };
    }
  } catch {
  }
  throw new WorkerStartError(
    {
      ...parseWorkerStartReceipt(void 0, false),
      ok: false,
      requestId,
      failedStage: "response_lost",
      raw: {
        interpretation: probe?.interpretation ?? "worker-start response was lost and Orca holds no receipt for it; no active Dispatch for the task was found either."
      }
    },
    original.message,
    RESPONSE_LOST
  );
}
async function listModels(harness, opts) {
  const timeoutMs = opts?.timeoutMs ?? 2e4;
  if (harness === "omp") {
    try {
      const { stdout } = await pExecFile2("omp", ["models", "--json"], {
        cwd: currentWorkspace().dir,
        shell: false,
        timeout: timeoutMs,
        maxBuffer: 16 * 1024 * 1024
      });
      const parsed = JSON.parse(stdout);
      const rows = Array.isArray(parsed.models) ? parsed.models : [];
      const effortsByModel = {};
      const seen = /* @__PURE__ */ new Set(["@default", "@smol", "@slow", "@plan"]);
      for (const row of rows) {
        if (!row || typeof row !== "object" || Array.isArray(row)) continue;
        const r = row;
        const selector = typeof r.selector === "string" ? r.selector.trim() : "";
        if (!selector || selector.length > 512 || /[\u0000-\u001f\u007f]/.test(selector)) continue;
        seen.add(selector);
        if (Array.isArray(r.thinking)) {
          const levels = r.thinking.filter((lvl) => typeof lvl === "string" && /^[A-Za-z0-9._-]{1,32}$/.test(lvl));
          if (levels.length > 0) effortsByModel[selector] = levels;
        }
      }
      return {
        status: "available",
        models: [...seen],
        effortsByModel,
        diagnostic: null,
        scope: "local-workspace"
      };
    } catch (error) {
      const failure = error;
      const diagnostic = failure.code === "ENOENT" ? "OMP CLI was not found" : failure.killed || failure.signal === "SIGTERM" ? "OMP model discovery timed out after 20 seconds" : typeof failure.code === "number" ? `OMP model command failed (exit code ${failure.code})` : "OMP model discovery failed";
      return { status: "unavailable", models: [], diagnostic, scope: "local-workspace" };
    }
  }
  if (harness !== "opencode") {
    return { status: "available", models: [], diagnostic: null, scope: "local-workspace" };
  }
  try {
    const { stdout } = await pExecFile2("opencode", ["models"], {
      cwd: currentWorkspace().dir,
      timeout: timeoutMs
    });
    const models = stdout.split("\n").map((line) => line.trim()).filter((line) => OPENCODE_MODEL_PATTERN.test(line));
    return { status: "available", models, diagnostic: null, scope: "local-workspace" };
  } catch (error) {
    const failure = error;
    const diagnostic = failure.code === "ENOENT" ? "OpenCode CLI was not found" : failure.killed || failure.signal === "SIGTERM" ? "OpenCode model discovery timed out after 20 seconds" : typeof failure.code === "number" ? `OpenCode model command failed (exit code ${failure.code})` : "OpenCode model discovery failed";
    return {
      status: "unavailable",
      models: [],
      diagnostic,
      scope: "local-workspace"
    };
  }
}
async function listAgentAccounts() {
  try {
    const result = await runOrca(["account", "list"], { timeoutMs: 15e3 });
    const rateLimits = asRecordOrNull(result.rateLimits);
    if (!rateLimits) return [];
    const out = [];
    for (const harness of ["claude", "codex", "antigravity"]) {
      const entry = asRecordOrNull(rateLimits[harness]);
      if (!entry) continue;
      const session = asRecordOrNull(entry.session);
      const weekly = asRecordOrNull(entry.weekly);
      const meta = asRecordOrNull(entry.usageMetadata);
      const statusRaw = stringOrNull(entry.status);
      out.push({
        harness,
        status: statusRaw === "ok" || statusRaw === "unavailable" ? statusRaw : "unknown",
        failureKind: stringOrNull(meta?.failureKind),
        error: stringOrNull(entry.error),
        sessionUsedPercent: numberOrNull(session?.usedPercent),
        weeklyUsedPercent: numberOrNull(weekly?.usedPercent)
      });
    }
    return out;
  } catch {
    return [];
  }
}
async function startOpencodeWorker(opts) {
  if (opts.effort && !opts.model) throw new OrcaCliError("OpenCode effort requires an explicit model", "invalid_model");
  const selected = opts.model ? parseOpenCodeModel(opts.model, opts.effort) : null;
  const selector = selected ? `${selected.providerID}/${selected.id}${selected.variant ? `#${selected.variant}` : ""}` : null;
  const created = await runOrca([
    "terminal",
    "create",
    "--worktree",
    opts.worktree ?? "active",
    "--command",
    "/bin/zsh"
  ]);
  const handle = created.terminal?.handle;
  if (!handle) throw new OrcaCliError("orca terminal create returned no worker handle (opencode)");
  opts.onHandle?.(handle);
  const tracking = await runOrca([
    "orchestration",
    "dispatch",
    "--task",
    opts.taskId,
    "--to",
    handle,
    "--run",
    opts.runId,
    "--from",
    opts.from
  ]);
  const dispatchId = readDispatchId(tracking);
  if (!dispatchId) throw new OrcaCliError("orca dispatch returned no dispatch ID (opencode)");
  const shown = await runOrca([
    "orchestration",
    "dispatch-show",
    "--task",
    opts.taskId,
    "--preamble",
    "--from",
    opts.from
  ]);
  if (!shown.preamble) throw new OrcaCliError("orca dispatch-show returned no preamble (opencode)");
  const preambleFile = join6(tmpdir(), `orca-preamble-${opts.taskId}.txt`);
  await writeFile2(preambleFile, shown.preamble);
  const modelArg = selector ? ` -m "${selector}"` : "";
  const titleArg = ` --title "${openCodeSessionTitle(opts.runId, opts.taskId, dispatchId)}"`;
  const cmd = `exec opencode run --auto${modelArg}${titleArg} "$(cat ${preambleFile})"`;
  await runOrca(["terminal", "send", "--terminal", handle, "--text", cmd, "--enter"]);
  return { mode: "legacy", dispatchId, handle, receipt: null, replayed: false, adopted: false };
}
async function startLegacyWorker(opts) {
  if (opts.harness === "opencode") {
    return startOpencodeWorker(opts);
  }
  const created = await runOrca([
    "terminal",
    "create",
    "--worktree",
    opts.worktree ?? "active",
    "--command",
    harnessCommand(opts.harness)
  ]);
  const handle = created.terminal?.handle;
  if (!handle) throw new OrcaCliError("orca terminal create returned no worker handle");
  opts.onHandle?.(handle);
  let dispatchId = null;
  try {
    await runOrca([
      "terminal",
      "wait",
      "--terminal",
      handle,
      "--for",
      "tui-idle",
      "--timeout-ms",
      "45000"
    ]);
  } catch {
  }
  const base = [
    "orchestration",
    "dispatch",
    "--task",
    opts.taskId,
    "--to",
    handle,
    "--run",
    opts.runId,
    "--from",
    opts.from
  ];
  try {
    const dispatched = await runOrca([...base, "--inject"]);
    dispatchId = readDispatchId(dispatched);
    await sleep(2e3);
    await runOrca(["terminal", "send", "--terminal", handle, "--enter"]).catch(() => {
    });
  } catch (err) {
    if (err.code !== "agent_unconfigured") throw err;
    const dispatched = await runOrca(base);
    dispatchId = readDispatchId(dispatched);
    const shown = await runOrca([
      "orchestration",
      "dispatch-show",
      "--task",
      opts.taskId,
      "--preamble",
      "--from",
      opts.from
    ]);
    if (shown.preamble) {
      await runOrca([
        "terminal",
        "send",
        "--terminal",
        handle,
        "--text",
        shown.preamble,
        "--enter"
      ]);
    }
  }
  return { mode: "legacy", dispatchId, handle, receipt: null, replayed: false, adopted: false };
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function tasksToDag(tasks) {
  const idSet = new Set(tasks.map((t) => t.id));
  const nodes = tasks.map((t) => ({
    id: t.id,
    label: (t.display_name || t.task_title || t.spec || t.id).trim(),
    status: t.status,
    spec: t.spec,
    result: t.result,
    createdAt: t.created_at,
    completedAt: t.completed_at,
    dispatchId: t.dispatch_id ?? null,
    assigneeHandle: t.assignee_handle ?? null,
    // Preserved verbatim even when dangling: it is Orca's fact about the Task,
    // and the node detail can say "parent not in this Run" instead of hiding it.
    parentId: t.parent_id ?? null
  }));
  const edges = [];
  for (const t of tasks) {
    for (const dep of parseDeps(t.deps)) {
      if (idSet.has(dep)) {
        edges.push({ id: `${dep}__${t.id}`, source: dep, target: t.id });
      }
    }
  }
  const hierarchy = [];
  for (const t of tasks) {
    if (t.parent_id && idSet.has(t.parent_id)) {
      hierarchy.push({ id: `${t.parent_id}__hier__${t.id}`, parent: t.parent_id, child: t.id });
    }
  }
  return { nodes, edges, hierarchy };
}
function gateIsOpen(g) {
  return g.status === "pending" || g.status === "open" || !g.resolution;
}
function ordinaryGateApproved(gate) {
  return gate.status === "resolved" && (gate.resolution === "approve" || gate.resolution === "approved");
}
function explainReadiness(tasks, gates, occupancy) {
  const byId = new Map(tasks.map((t) => [t.id, t]));
  const openGatesByTask = /* @__PURE__ */ new Map();
  for (const g of gates) {
    if (!g.taskId || !gateIsOpen(g) || !byId.has(g.taskId)) continue;
    const list = openGatesByTask.get(g.taskId) ?? [];
    list.push(g);
    openGatesByTask.set(g.taskId, list);
  }
  const freeSlots = occupancy && occupancy.maxConcurrency > 0 ? Math.max(0, occupancy.maxConcurrency - occupancy.busy) : occupancy ? 0 : null;
  const statusWord = (id) => byId.get(id)?.status ?? "missing";
  const depSentence = (ids) => ids.map((id) => `${id} (${statusWord(id)})`).join(", ");
  const readyWave = {
    taskIds: tasks.filter((t) => {
      if (t.status !== "ready" || openGatesByTask.has(t.id)) return false;
      return parseDeps(t.deps).every((dep) => byId.get(dep)?.status === "completed");
    }).map((t) => t.id).sort(),
    freeSlots
  };
  const readiness = {};
  for (const t of tasks) {
    const unmetDeps = parseDeps(t.deps).filter((dep) => {
      const depTask = byId.get(dep);
      return !depTask || depTask.status !== "completed";
    });
    const openGates = openGatesByTask.get(t.id) ?? [];
    const codes = [];
    const reasons = [];
    switch (t.status) {
      case "ready": {
        if (unmetDeps.length > 0) {
          codes.push("unmet_dependencies");
          reasons.push(
            `Waiting on ${unmetDeps.length} unmet ${unmetDeps.length === 1 ? "dependency" : "dependencies"}: ${depSentence(unmetDeps)}.`
          );
        }
        if (openGates.length > 0) {
          codes.push("pending_gate");
          reasons.push(
            `Waiting on a decision gate: ${openGates.map((g) => `\u201C${g.question || g.id}\u201D (${g.id})`).join("; ")}.`
          );
        }
        if (codes.length === 0 && freeSlots !== null && freeSlots <= 0) {
          codes.push("waiting_for_capacity");
          reasons.push(
            `Ready now \u2014 every coordinator worker slot is busy (${occupancy?.busy ?? 0}/${occupancy?.maxConcurrency ?? 0} running); it is dispatched when a slot frees.`
          );
        }
        break;
      }
      case "dispatched": {
        codes.push("in_flight");
        reasons.push(
          t.dispatch_id ? `A worker is running this task (dispatch ${t.dispatch_id}).` : "A worker is running this task right now."
        );
        break;
      }
      case "completed":
      case "failed": {
        codes.push("already_finished");
        reasons.push(`This task has already ${t.status === "completed" ? "completed" : "failed"} \u2014 nothing left to schedule.`);
        break;
      }
      case "pending":
      case "blocked": {
        if (unmetDeps.length > 0) {
          codes.push("unmet_dependencies");
          reasons.push(
            `Waiting on ${unmetDeps.length} unmet ${unmetDeps.length === 1 ? "dependency" : "dependencies"}: ${depSentence(unmetDeps)}.`
          );
        }
        if (openGates.length > 0) {
          codes.push("pending_gate");
          reasons.push(
            `Waiting on a decision gate: ${openGates.map((g) => `\u201C${g.question || g.id}\u201D (${g.id})`).join("; ")}.`
          );
        }
        if (codes.length === 0) {
          codes.push("unknown");
          reasons.push(
            t.status === "blocked" ? "Orca reports blocked, but no open gate is bound to this task in this Run \u2014 state not explainable from the current task/gate facts." : "No unmet dependency and no open gate is visible, but Orca still reports pending \u2014 the coordinator nudges such tasks to ready when it runs."
          );
        }
        break;
      }
      default: {
        codes.push("unknown");
        reasons.push(
          `Orca reports an unrecognized task status (${String(t.status)}) \u2014 refresh, or check the connected runtime.`
        );
        break;
      }
    }
    readiness[t.id] = {
      runnable: t.status === "ready" && unmetDeps.length === 0 && openGates.length === 0,
      codes,
      reasons,
      unmetDependencyIds: unmetDeps,
      pendingGateIds: openGates.map((g) => g.id)
    };
  }
  return { readyWave, readiness };
}
function isLoopbackHost(hostname) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1" || hostname === "[::1]";
}
async function isLoopbackOriginAlive(origin) {
  try {
    const res = await fetch(`${origin}/api/health`, { signal: AbortSignal.timeout(400) });
    return res.ok;
  } catch {
    return false;
  }
}
async function openOrcaViewerTab(opts) {
  const execOrca = opts.runOrcaFn ?? runOrca;
  const checkOriginAlive = opts.isOriginAliveFn ?? isLoopbackOriginAlive;
  const targetOrigin = new URL(opts.baseUrl).origin;
  const targetPort = new URL(opts.baseUrl).port;
  const normalizedBase = opts.baseUrl.replace(/\/+$/, "");
  const hash = opts.hash ?? "";
  const defaultUrl = hash ? `${normalizedBase}/${hash}` : `${normalizedBase}/`;
  let tabs = [];
  try {
    const listArgs = opts.worktree ? ["tab", "list", "--worktree", opts.worktree] : ["tab", "list"];
    const listed = await execOrca(listArgs);
    if (Array.isArray(listed?.tabs)) tabs = listed.tabs;
  } catch {
    try {
      const listed = await execOrca(["tab", "list"]);
      if (Array.isArray(listed?.tabs)) tabs = listed.tabs;
    } catch {
      tabs = [];
    }
  }
  const findExisting = () => {
    let fallbackMatch = null;
    for (const tab of tabs) {
      const pageId2 = typeof tab.browserPageId === "string" && tab.browserPageId || typeof tab.pageId === "string" && tab.pageId || typeof tab.id === "string" && tab.id || "";
      if (!pageId2 || typeof tab.url !== "string") continue;
      let parsed;
      try {
        parsed = new URL(tab.url);
      } catch {
        continue;
      }
      if (!isLoopbackHost(parsed.hostname)) continue;
      const hasErr = Boolean(tab.loadError);
      if (parsed.origin === targetOrigin || targetPort && parsed.port === targetPort) {
        return { pageId: pageId2, origin: parsed.origin, url: tab.url, sameOrigin: true, loadError: hasErr };
      }
      const title = typeof tab.title === "string" ? tab.title.trim() : "";
      if (!fallbackMatch && (title === "Orchestration Panel" || title === "Orca DAG Viewer")) {
        fallbackMatch = { pageId: pageId2, origin: parsed.origin, url: tab.url, sameOrigin: false, loadError: hasErr };
      }
    }
    return fallbackMatch;
  };
  const existing = findExisting();
  if (existing) {
    let activeOrigin = existing.origin;
    let forceNavigate = false;
    if (!existing.sameOrigin) {
      const alive = !existing.loadError && await checkOriginAlive(existing.origin);
      if (!alive) {
        activeOrigin = normalizedBase;
        forceNavigate = true;
      }
    }
    const targetUrl = hash ? `${activeOrigin}/${hash}` : forceNavigate ? defaultUrl : existing.url;
    if (forceNavigate || hash && existing.url !== targetUrl) {
      try {
        await execOrca(["goto", "--page", existing.pageId, "--url", targetUrl]);
      } catch {
      }
    }
    await execOrca(["tab", "switch", "--page", existing.pageId, "--focus"]);
    return { ok: true, reused: true, pageId: existing.pageId, url: targetUrl };
  }
  let created = null;
  try {
    const createArgs = opts.worktree ? ["tab", "create", "--worktree", opts.worktree, "--url", defaultUrl] : ["tab", "create", "--url", defaultUrl];
    created = await execOrca(createArgs);
  } catch {
    created = await execOrca(["tab", "create", "--url", defaultUrl]);
  }
  const pageId = typeof created?.browserPageId === "string" && created.browserPageId || typeof created?.pageId === "string" && created.pageId || null;
  if (pageId) {
    try {
      await execOrca(["tab", "switch", "--page", pageId, "--focus"]);
    } catch {
    }
  }
  return { ok: true, reused: false, pageId, url: defaultUrl };
}

// server/src/webAssets.ts
async function loadEmbeddedAssets() {
  const map = /* @__PURE__ */ new Map();
  try {
    const mod = await import("./generated/webAssets");
    for (const [path, asset] of Object.entries(mod.WEB_ASSETS)) {
      map.set(path, { type: asset.type, body: Buffer.from(asset.body, "base64") });
    }
  } catch {
  }
  return map;
}
async function loadEmbeddedSkillFiles() {
  try {
    const mod = await import("./generated/webAssets");
    if (mod.SKILL_FILES && typeof mod.SKILL_FILES["SKILL.md"] === "string") return mod.SKILL_FILES;
    return typeof mod.SKILL_MD === "string" ? { "SKILL.md": mod.SKILL_MD } : null;
  } catch {
    return null;
  }
}

// server/src/skill.ts
import { existsSync, lstatSync as lstatSync3, mkdirSync as mkdirSync3, readdirSync as readdirSync2, readFileSync, renameSync, rmdirSync as rmdirSync2, unlinkSync as unlinkSync3, writeFileSync } from "node:fs";
import { dirname as dirname2, isAbsolute as isAbsolute3, join as join7, parse, relative as relative2, resolve as resolve3, sep as sep2 } from "node:path";
import { homedir as homedir3 } from "node:os";
var SKILL_NAME = "orca-dag";
var USER_PREFERENCES_FILE = "USER_PREFERENCES.md";
var AGENT_SKILL_DIRS = [
  { agent: "Claude Code", parent: ".claude", skills: ".claude/skills", env: "CLAUDE_CONFIG_DIR" },
  { agent: "Cursor", parent: ".cursor", skills: ".cursor/skills" },
  { agent: "Gemini CLI", parent: ".gemini", skills: ".gemini/skills" },
  { agent: "Droid", parent: ".factory", skills: ".factory/skills" },
  { agent: "Grok Build", parent: ".grok", skills: ".grok/skills", env: "GROK_HOME" },
  { agent: "Kiro CLI", parent: ".kiro", skills: ".kiro/skills", env: "KIRO_HOME" },
  { agent: "Qoder", parent: ".qoder", skills: ".qoder/skills" },
  { agent: "CodeBuddy", parent: ".codebuddy", skills: ".codebuddy/skills" },
  {
    agent: "Codex/OpenCode/Pi/OMP/Kimi",
    parent: ".agents",
    skills: ".agents/skills",
    sharedParents: [
      { agent: "Codex", parent: ".codex", env: "CODEX_HOME" },
      { agent: "OpenCode", parent: ".config/opencode" },
      { agent: "Pi", parent: ".pi" },
      { agent: "OMP", parent: ".omp" },
      { agent: "Kimi", parent: ".kimi" },
      { agent: "Kimi", parent: ".kimi-code" }
    ],
    // These were direct destinations in older viewer versions.
    legacySkills: [".codex/skills", ".config/opencode/skills"]
  }
];
function configuredRoot(home, parent, envName, env) {
  const override = envName ? env[envName]?.trim() : void 0;
  if (override && isAbsolute3(override)) {
    const root = resolve3(override);
    if (!isInside(root, home)) return root;
  }
  return join7(home, parent);
}
function isInside(base, path) {
  const pathFromBase = relative2(resolve3(base), resolve3(path));
  return pathFromBase === "" || pathFromBase !== ".." && !pathFromBase.startsWith(`..${sep2}`) && !isAbsolute3(pathFromBase);
}
function safetyRoot(home, path) {
  return isInside(home, path) ? home : parse(resolve3(path)).root;
}
function isExistingRealDirectory(path, boundary) {
  if (!isSafeSkillPath(path, false, boundary)) return false;
  try {
    return lstatSync3(path).isDirectory();
  } catch {
    return false;
  }
}
function isSafeSkillPath(path, allowFinalSymlink = false, boundary = homedir3()) {
  const absolute = resolve3(path);
  const normalizedBoundary = resolve3(boundary);
  const insideBoundary = isInside(normalizedBoundary, absolute);
  const currentBase = insideBoundary ? normalizedBoundary : parse(absolute).root;
  const relativePath = insideBoundary ? relative2(normalizedBoundary, absolute) : absolute.slice(currentBase.length);
  const parts = relativePath.split(sep2).filter(Boolean);
  let current = currentBase;
  let baseInfo;
  try {
    baseInfo = lstatSync3(current);
  } catch {
    return false;
  }
  if (baseInfo.isSymbolicLink() || !baseInfo.isDirectory()) return false;
  for (let i = 0; i < parts.length; i++) {
    current = join7(current, parts[i]);
    let info3;
    try {
      info3 = lstatSync3(current);
    } catch (err) {
      return err.code === "ENOENT";
    }
    if (info3.isSymbolicLink()) return allowFinalSymlink && i === parts.length - 1;
    if (i < parts.length - 1 && !info3.isDirectory()) return false;
  }
  return true;
}
function resolveAgentSkillDirs(home = homedir3(), env = process.env) {
  const locations = [];
  const add = (agent, skills, install, migrateFrom = [], safeRoot = home) => {
    const path = resolve3(skills);
    const existing = locations.find((location) => location.skills === path);
    if (existing) {
      existing.install ||= install;
      existing.migrateFrom = [.../* @__PURE__ */ new Set([...existing.migrateFrom, ...migrateFrom.map((source) => resolve3(source))])];
      if (isInside(home, path)) existing.safeRoot = resolve3(home);
    } else {
      locations.push({
        agent,
        skills: path,
        install,
        migrateFrom: [...new Set(migrateFrom.map((source) => resolve3(source)))],
        safeRoot: resolve3(safeRoot)
      });
    }
  };
  for (const entry of AGENT_SKILL_DIRS) {
    if (entry.sharedParents) {
      const sharedSkills = join7(home, entry.skills);
      const parents = [
        { path: join7(home, entry.parent), safeRoot: home },
        ...entry.sharedParents.map((parent) => {
          const path = configuredRoot(home, parent.parent, parent.env, env);
          return { path, safeRoot: safetyRoot(home, path) };
        })
      ];
      const install = parents.some(({ path, safeRoot: safeRoot2 }) => isExistingRealDirectory(path, safeRoot2));
      const migrateFrom = (entry.legacySkills ?? []).map((skills2) => join7(home, skills2)).map((skills2) => join7(skills2, SKILL_NAME));
      const relocatedCodex = entry.sharedParents.find((parent) => parent.agent === "Codex");
      if (relocatedCodex) {
        const codexRoot = configuredRoot(home, relocatedCodex.parent, relocatedCodex.env, env);
        const defaultCodexSkills = join7(home, relocatedCodex.parent, "skills");
        const configuredCodexSkills = join7(codexRoot, "skills");
        if (resolve3(defaultCodexSkills) !== resolve3(configuredCodexSkills)) {
          add("Codex (legacy)", defaultCodexSkills, false);
          add("Codex", configuredCodexSkills, false, [], safetyRoot(home, codexRoot));
        }
      }
      add(entry.agent, sharedSkills, install, migrateFrom, home);
      for (let i = 0; i < (entry.legacySkills ?? []).length; i++) {
        const legacySkills = join7(home, entry.legacySkills[i]);
        add(i === 0 ? "Codex (legacy)" : "OpenCode (legacy)", legacySkills, false);
      }
      continue;
    }
    const defaultSkills = join7(home, entry.skills);
    const root = configuredRoot(home, entry.parent, entry.env, env);
    const safeRoot = safetyRoot(home, root);
    const skills = entry.env ? join7(root, "skills") : defaultSkills;
    const relocated = resolve3(skills) !== resolve3(defaultSkills);
    add(entry.agent, skills, isExistingRealDirectory(root, safeRoot), relocated ? [join7(defaultSkills, SKILL_NAME)] : [], safeRoot);
    if (relocated) add(`${entry.agent} (legacy)`, defaultSkills, false);
  }
  return locations;
}
function lstatIfPresent(path) {
  try {
    return lstatSync3(path);
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}
function migrateLegacySkillDir(sources, destination, destinationBoundary) {
  if (!isSafeSkillPath(destination, false, destinationBoundary) || lstatIfPresent(destination)) return;
  for (const source of sources) {
    if (!isSafeSkillPath(source)) continue;
    try {
      const info3 = lstatSync3(source);
      if (!info3.isDirectory() || info3.isSymbolicLink()) continue;
      const entries = readdirSync2(source);
      if (entries.length !== 1 || entries[0] !== "SKILL.md") continue;
      const skillFile = lstatSync3(join7(source, "SKILL.md"));
      if (!skillFile.isFile() || skillFile.isSymbolicLink()) continue;
      const parent = dirname2(destination);
      if (!isSafeSkillPath(parent, false, destinationBoundary)) continue;
      mkdirSync3(parent, { recursive: true });
      if (!isSafeSkillPath(destination, false, destinationBoundary) || lstatIfPresent(destination)) continue;
      renameSync(source, destination);
      return;
    } catch {
    }
  }
}
async function readSkillFiles(here, bundledSkillRoot) {
  try {
    const embedded = bundledSkillRoot ? null : await loadEmbeddedSkillFiles();
    if (embedded && typeof embedded["SKILL.md"] === "string") {
      const files = /* @__PURE__ */ new Map();
      files.set("SKILL.md", embedded["SKILL.md"]);
      for (const [rel, text] of Object.entries(embedded)) {
        if (rel === "SKILL.md") continue;
        if (rel.startsWith("references/") && rel.endsWith(".md") && typeof text === "string") {
          files.set(rel, text);
        }
      }
      return files;
    }
  } catch {
  }
  const roots = bundledSkillRoot ? [bundledSkillRoot] : [join7(here, "..", "..", "skill"), join7(here, "..", "..", "..", "skill")];
  for (const skillRoot of roots) {
    try {
      if (bundledSkillRoot && !lstatIfPresent(skillRoot)?.isDirectory()) continue;
      const entryPath = join7(skillRoot, "SKILL.md");
      if (!existsSync(entryPath)) continue;
      const entryStat = lstatSync3(entryPath);
      if (!entryStat.isFile() || entryStat.isSymbolicLink()) continue;
      const files = /* @__PURE__ */ new Map();
      files.set("SKILL.md", readFileSync(entryPath, "utf8"));
      const refsDir = join7(skillRoot, "references");
      const refsStat = lstatIfPresent(refsDir);
      if (refsStat && refsStat.isDirectory() && !refsStat.isSymbolicLink()) {
        for (const name of readdirSync2(refsDir).sort()) {
          if (!name.endsWith(".md") || name === USER_PREFERENCES_FILE) continue;
          const refPath = join7(refsDir, name);
          const refStat = lstatIfPresent(refPath);
          if (refStat && refStat.isFile() && !refStat.isSymbolicLink()) {
            files.set(`references/${name}`, readFileSync(refPath, "utf8"));
          }
        }
      }
      return files;
    } catch {
    }
  }
  return null;
}
async function installSkill(moduleDir, enabled, bundledSkillRoot) {
  const result = { installed: [], upToDate: [], skipped: null };
  if (!enabled) {
    result.skipped = "disabled";
    return result;
  }
  const skillFiles = await readSkillFiles(moduleDir, bundledSkillRoot);
  if (!skillFiles) {
    result.skipped = "not-found";
    return result;
  }
  for (const location of resolveAgentSkillDirs()) {
    if (!location.install) continue;
    const dir = join7(location.skills, SKILL_NAME);
    const entryTarget = join7(dir, "SKILL.md");
    try {
      if (!isSafeSkillPath(dir, false, location.safeRoot) || !isSafeSkillPath(entryTarget, false, location.safeRoot)) continue;
      let dirInfo = lstatIfPresent(dir);
      if (dirInfo && (!dirInfo.isDirectory() || dirInfo.isSymbolicLink())) continue;
      const entryInfo = lstatIfPresent(entryTarget);
      if (entryInfo && (!entryInfo.isFile() || entryInfo.isSymbolicLink())) continue;
      if (!dirInfo && location.migrateFrom.length > 0) {
        migrateLegacySkillDir(location.migrateFrom, dir, location.safeRoot);
        dirInfo = lstatIfPresent(dir);
        if (dirInfo && (!dirInfo.isDirectory() || dirInfo.isSymbolicLink())) continue;
        const migratedEntry = lstatIfPresent(entryTarget);
        if (migratedEntry && (!migratedEntry.isFile() || migratedEntry.isSymbolicLink())) continue;
      }
      let anyChanged = false;
      let entryUpToDate = false;
      let unsafeEntry = false;
      for (const [relPath, text] of skillFiles) {
        const target = join7(dir, relPath);
        if (!isSafeSkillPath(target, false, location.safeRoot)) {
          if (relPath === "SKILL.md") {
            unsafeEntry = true;
            break;
          }
          continue;
        }
        let targetInfo = lstatIfPresent(target);
        if (targetInfo && (!targetInfo.isFile() || targetInfo.isSymbolicLink())) {
          if (relPath === "SKILL.md") {
            unsafeEntry = true;
            break;
          }
          continue;
        }
        if (targetInfo && readFileSync(target, "utf8") === text) {
          if (relPath === "SKILL.md") entryUpToDate = true;
          continue;
        }
        const parentDir = dirname2(target);
        if (!isSafeSkillPath(parentDir, false, location.safeRoot)) continue;
        const parentInfo = lstatIfPresent(parentDir);
        if (parentInfo && (!parentInfo.isDirectory() || parentInfo.isSymbolicLink())) continue;
        mkdirSync3(parentDir, { recursive: true });
        if (!isSafeSkillPath(dir, false, location.safeRoot) || !isSafeSkillPath(target, false, location.safeRoot)) continue;
        targetInfo = lstatIfPresent(target);
        if (targetInfo && (!targetInfo.isFile() || targetInfo.isSymbolicLink())) continue;
        writeFileSync(target, text);
        anyChanged = true;
      }
      if (unsafeEntry) continue;
      if (anyChanged) result.installed.push(entryTarget);
      else if (entryUpToDate) result.upToDate.push(entryTarget);
    } catch {
    }
  }
  return result;
}
async function uninstallBundledSkill(moduleDir) {
  const files = await readSkillFiles(moduleDir, join7(moduleDir, "skill"));
  if (!files) return null;
  let removed = 0;
  let failed = 0;
  for (const { skills, safeRoot } of resolveAgentSkillDirs()) {
    const dir = join7(skills, SKILL_NAME);
    if (!isSafeSkillPath(dir, false, safeRoot)) continue;
    let changed = false;
    let incomplete = false;
    for (const name of files.keys()) {
      const target = join7(dir, name);
      if (!isSafeSkillPath(target, false, safeRoot)) continue;
      try {
        if (!lstatIfPresent(target)?.isFile()) continue;
        unlinkSync3(target);
        changed = true;
      } catch {
        incomplete = true;
      }
    }
    if (changed) {
      removed++;
      for (const target of [join7(dir, "references"), dir]) {
        if (!isSafeSkillPath(target, false, safeRoot)) continue;
        try {
          if (lstatIfPresent(target)?.isDirectory()) rmdirSync2(target);
        } catch (err) {
          const code = err.code;
          if (code !== "ENOTEMPTY" && code !== "EEXIST" && code !== "ENOENT") incomplete = true;
        }
      }
    }
    if (incomplete) failed++;
  }
  return { removed, failed };
}
function describeSkillInstall(result) {
  if (result.skipped === "not-found") return `Skill "${SKILL_NAME}" not found in this install \u2014 skipped.`;
  if (result.skipped) return null;
  if (result.installed.length > 0) {
    return `Skill "${SKILL_NAME}" installed for ${result.installed.length} agent(s): ${result.installed.map((p) => p.replace(homedir3(), "~")).join(", ")}`;
  }
  if (result.upToDate.length > 0) return `Skill "${SKILL_NAME}" already up to date (${result.upToDate.length} agent(s)).`;
  return `No coding agent found to install the skill "${SKILL_NAME}" into \u2014 see the README to place it by hand.`;
}

// server/src/stageGit.ts
import { execFile as execFile4, execFileSync } from "node:child_process";
import { promisify as promisify4 } from "node:util";
import { mkdir, readFile as readFile3, rename as rename3, writeFile as writeFile3, realpath as realpath4 } from "node:fs/promises";
import { isAbsolute as isAbsolute4, join as join8, resolve as resolve4 } from "node:path";
import { createHash as createHash4 } from "node:crypto";
import { realpathSync as realpathSync3 } from "node:fs";
var exec = promisify4(execFile4);
var MERGE_PREP_MARKER = "[orca-dag:merge-prep]";
var MERGE_INPUTS_V3_MARKER = "[orca-dag:merge-inputs-v3]";
var MERGE_INPUTS_SUBJECT = "orca-dag:merge-inputs";
var STAGE_GIT_DIR = "orca-dag/stage-git";
var SHA = /^[0-9a-f]{40,64}$/;
function stageGitStoreDir(workspace) {
  const actual = realpathSync3(workspace);
  const common = execFileSync("git", ["-C", workspace, "rev-parse", "--git-common-dir"], {
    encoding: "utf8",
    env: gitEnv(),
    timeout: 15e3
  }).trim();
  const scope = createHash4("sha256").update(actual).digest("hex").slice(0, 16);
  return join8(isAbsolute4(common) ? common : resolve4(actual, common), STAGE_GIT_DIR, scope);
}
function gitEnv() {
  const env = { ...process.env };
  for (const name of ["GIT_DIR", "GIT_WORK_TREE", "GIT_INDEX_FILE", "GIT_COMMON_DIR", "GIT_PREFIX"]) {
    delete env[name];
  }
  return env;
}
async function git(path, ...args) {
  const { stdout } = await exec("git", ["-C", path, ...args], {
    env: gitEnv(),
    timeout: 15e3,
    maxBuffer: 1024 * 1024
  });
  return stdout.trim();
}
async function inspect(path) {
  const actual = await realpath4(path);
  const top = await realpath4(await git(actual, "rev-parse", "--show-toplevel"));
  if (top !== actual) throw new Error(`Stage workspace ${actual} is not the Git worktree root ${top}`);
  const dirty = await git(actual, "status", "--porcelain=v1", "--untracked-files=all");
  if (dirty) throw new Error(`Stage workspace ${actual} has uncommitted changes; commit or clean it before proceeding`);
  const common = await git(actual, "rev-parse", "--git-common-dir");
  const commonDir = await realpath4(isAbsolute4(common) ? common : resolve4(actual, common));
  return {
    path: actual,
    sha: await git(actual, "rev-parse", "HEAD"),
    branch: await git(actual, "branch", "--show-current"),
    commonDir
  };
}
async function ancestor(path, sha) {
  try {
    await git(path, "merge-base", "--is-ancestor", sha, "HEAD");
    return true;
  } catch (err) {
    if (err.code === 1) return false;
    throw err;
  }
}
function stageWorkspaceKey(taskId, laneByTask, placementByTask) {
  const lane = laneByTask?.[taskId];
  if (lane) return `lane:${lane}`;
  const placement = placementByTask?.[taskId];
  if (!placement || placement.kind === "current") return "current";
  if (placement.kind === "existing") return `existing:${placement.selector}`;
  return `new:${taskId}`;
}
function validateMergeInputProtocol(task) {
  if (task.spec?.includes(MERGE_PREP_MARKER) && task.status !== "completed" && !task.spec.includes(MERGE_INPUTS_V3_MARKER)) {
    return `${task.id} uses unsafe legacy merge input delivery; replan with ${MERGE_INPUTS_V3_MARKER}`;
  }
  return null;
}
function validateStagePlan(tasks, laneByTask, placementByTask, resolvedWorkspaceKeys) {
  if (!tasks.some((task) => task.spec?.includes(MERGE_PREP_MARKER))) return [];
  const byId = new Map(tasks.map((task) => [task.id, task]));
  const deps = (task) => {
    try {
      const raw = JSON.parse(task.deps || "[]");
      return Array.isArray(raw) ? raw.filter((item) => typeof item === "string") : [];
    } catch {
      return [];
    }
  };
  const reaches = (from, target, seen = /* @__PURE__ */ new Set()) => {
    if (from === target) return true;
    if (seen.has(from)) return false;
    seen.add(from);
    return deps(byId.get(from)).some((dep) => byId.has(dep) && reaches(dep, target, seen));
  };
  const issues = [];
  const key = (id) => resolvedWorkspaceKeys?.[id] ?? stageWorkspaceKey(id, laneByTask, placementByTask);
  for (const task of tasks) {
    const cross = deps(task).filter(
      (dep) => key(dep) !== key(task.id)
    );
    const prep = task.spec?.includes(MERGE_PREP_MARKER) ?? false;
    const protocolIssue = validateMergeInputProtocol(task);
    if (protocolIssue) issues.push(protocolIssue);
    if (cross.length && !prep) issues.push(`${task.id} consumes another workspace without ${MERGE_PREP_MARKER}`);
    if (prep && !cross.length) issues.push(`${task.id} is a merge-prep Task but has no cross-workspace dependency`);
    if (prep && !tasks.some((next) => !next.spec?.includes(MERGE_PREP_MARKER) && deps(next).includes(task.id) && key(next.id) === key(task.id))) {
      issues.push(`${task.id} is a merge-prep Task with no dependent development Task in the same worktree`);
    }
  }
  for (let i = 0; i < tasks.length; i++) {
    for (let j = i + 1; j < tasks.length; j++) {
      const a = tasks[i], b = tasks[j];
      if (key(a.id) !== key(b.id)) continue;
      if (!reaches(a.id, b.id) && !reaches(b.id, a.id)) {
        issues.push(`${a.id} and ${b.id} share a worktree but are not dependency-ordered`);
      }
    }
  }
  return issues;
}
function isMergeInputsQuestion(message) {
  if (message.type !== "question") return false;
  if (message.subject === MERGE_INPUTS_SUBJECT || message.subject === MERGE_INPUTS_V3_MARKER) return true;
  if (!message.payload) return false;
  try {
    const value = JSON.parse(message.payload);
    return !!value && typeof value === "object" && !Array.isArray(value) && Object.values(value).some((item) => item === MERGE_INPUTS_V3_MARKER);
  } catch {
    return false;
  }
}
async function buildMergeInputs(store, task, path) {
  if (!task.spec?.includes(MERGE_PREP_MARKER) || !task.spec.includes(MERGE_INPUTS_V3_MARKER)) {
    throw new Error("Task does not declare the merge-inputs-v3 protocol");
  }
  await store.verifyRepository(path);
  const artifacts = store.mergeInputs(task);
  if (!artifacts.length) throw new Error("Merge Task has no captured dependencies");
  for (const artifact of artifacts) {
    if (!SHA.test(artifact.sha)) throw new Error(`Invalid captured commit for ${artifact.taskId}`);
    await git(path, "cat-file", "-e", `${artifact.sha}^{commit}`);
  }
  return [
    "Immutable merge inputs (merge these exact commits, not moving branch tips):",
    ...artifacts.map((a) => `Task ${JSON.stringify(a.taskId)}; branch ${JSON.stringify(a.branch)}; commit ${a.sha}`),
    "Preserve history, resolve conflicts, and commit the merge in the assigned worktree before reporting completion."
  ].join("\n");
}
var StageGit = class _StageGit {
  constructor(file, runId, records) {
    this.file = file;
    this.runId = runId;
    this.records = records;
  }
  static async open(workspace, runId, tasks) {
    const dir = stageGitStoreDir(workspace);
    const file = join8(dir, `${createHash4("sha256").update(runId).digest("hex")}.json`);
    let records = {};
    try {
      records = JSON.parse(await readFile3(file, "utf8"));
    } catch (err) {
      if (err.code !== "ENOENT") throw err;
    }
    if (!records || typeof records !== "object" || Array.isArray(records)) {
      throw new Error(`Stage Git evidence for Run ${runId} is malformed`);
    }
    const store = new _StageGit(file, runId, records);
    if (!records[runId]) {
      if (tasks.some((task) => task.status === "completed" || task.status === "dispatched")) {
        throw new Error(`Stage Git evidence for Run ${runId} is missing; cannot reconstruct historical commit tips`);
      }
      const base = await inspect(workspace);
      records[runId] = { base: base.sha, commonDir: base.commonDir, artifacts: {} };
      await mkdir(dir, { recursive: true });
      await store.save();
    } else if (!SHA.test(records[runId]?.base) || !records[runId]?.commonDir || !records[runId]?.artifacts || typeof records[runId].artifacts !== "object" || Array.isArray(records[runId].artifacts) || Object.values(records[runId].artifacts).some((artifact) => !artifact || !SHA.test(artifact.sha) || !artifact.path || !artifact.dispatchId)) {
      throw new Error(`Stage Git evidence for Run ${runId} is malformed`);
    }
    return store;
  }
  get base() {
    return this.record.base;
  }
  get artifactFile() {
    return this.file;
  }
  artifact(taskId) {
    return this.record.artifacts[taskId];
  }
  get record() {
    return this.records[this.runId];
  }
  async save() {
    const tmp = `${this.file}.${process.pid}.tmp`;
    await writeFile3(tmp, JSON.stringify(this.records, null, 2) + "\n", "utf8");
    await rename3(tmp, this.file);
  }
  async snapshot(taskId, dispatchId, path) {
    const old = this.artifact(taskId);
    if (old) {
      if (old.dispatchId !== dispatchId) throw new Error(`Task ${taskId} has a different recorded Dispatch`);
      return old;
    }
    const current = await inspect(path);
    if (current.commonDir !== this.record.commonDir) throw new Error(`${path} belongs to another Git repository`);
    if (!await ancestor(current.path, this.base)) throw new Error(`${path} does not descend from Run base ${this.base}`);
    if (current.sha === this.base) {
      throw new Error(`Stage ${taskId} left its assigned worktree ${path} at Run base ${this.base}; commit the result in this worktree`);
    }
    const artifact = { taskId, dispatchId, path: current.path, branch: current.branch, sha: current.sha };
    this.record.artifacts[taskId] = artifact;
    await this.save();
    return artifact;
  }
  async verifyDependencies(task, path) {
    const current = await inspect(path);
    if (current.commonDir !== this.record.commonDir) throw new Error(`${path} belongs to another Git repository`);
    const ids = JSON.parse(task.deps || "[]");
    for (const id of ids) {
      const dep = this.artifact(id);
      if (!dep) throw new Error(`Dependency ${id} has no recorded committed Stage artifact`);
      if (!await ancestor(current.path, dep.sha)) {
        throw new Error(`Dependency ${id} commit ${dep.sha} is not an ancestor of ${current.path} HEAD`);
      }
    }
  }
  async verifyBase(path) {
    const current = await inspect(path);
    if (current.commonDir !== this.record.commonDir || current.sha !== this.base) {
      throw new Error(`New Stage workspace ${path} must start at Run base ${this.base}`);
    }
  }
  async verifyRepository(path) {
    const current = await inspect(path);
    if (current.commonDir !== this.record.commonDir || !await ancestor(current.path, this.base)) {
      throw new Error(`Stage workspace ${path} does not descend from Run base ${this.base}`);
    }
  }
  mergeInputs(task) {
    const ids = JSON.parse(task.deps || "[]");
    return ids.map((id) => {
      const artifact = this.artifact(id);
      if (!artifact) throw new Error(`Dependency ${id} has no recorded committed Stage artifact`);
      return artifact;
    });
  }
};

// plugin/src/endpoint.ts
import { createHash as createHash5, createHmac } from "node:crypto";
import { lstatSync as lstatSync4, mkdirSync as mkdirSync4, readFileSync as readFileSync2, realpathSync as realpathSync4 } from "node:fs";
import { homedir as homedir4 } from "node:os";
import { join as join9, resolve as resolve5 } from "node:path";
function pluginEndpointPath(workspace, create = false) {
  let canonical;
  try {
    canonical = realpathSync4(workspace);
  } catch (err) {
    if (err.code !== "ENOENT" || create) throw err;
    canonical = resolve5(workspace);
  }
  const directory = join9(homedir4(), ".orca-dag-viewers");
  if (create) {
    try {
      mkdirSync4(directory, { mode: 448 });
    } catch (err) {
      if (err.code !== "EEXIST") throw err;
    }
  }
  const stat2 = lstatSync4(directory);
  if (!stat2.isDirectory() || process.getuid && (stat2.uid !== process.getuid() || (stat2.mode & 63) !== 0)) {
    throw new Error(`${directory} must be a private, user-owned directory`);
  }
  const key = createHash5("sha256").update(canonical).digest("hex");
  return join9(directory, `${key}.json`);
}
function checkPluginEndpointFile(path) {
  const stat2 = lstatSync4(path);
  if (!stat2.isFile() || stat2.nlink !== 1 || stat2.size > 16384 || process.getuid && (stat2.uid !== process.getuid() || (stat2.mode & 63) !== 0)) {
    throw new Error(`${path} must be a private, user-owned endpoint file`);
  }
}
function readPluginEndpointFile(workspace) {
  try {
    const path = pluginEndpointPath(workspace);
    checkPluginEndpointFile(path);
    const row = JSON.parse(readFileSync2(path, "utf8"));
    return row?.version === 2 && row.workspace === realpathSync4(workspace) && typeof row.port === "number" && Number.isInteger(row.port) && row.port > 0 && row.port <= 65535 && typeof row.pid === "number" && Number.isSafeInteger(row.pid) && row.pid > 0 && typeof row.instanceId === "string" && /^[A-Za-z0-9_-]{1,128}$/.test(row.instanceId) && typeof row.pluginToken === "string" && /^[A-Za-z0-9_-]{32}$/.test(row.pluginToken) ? row : null;
  } catch {
    return null;
  }
}
function pluginRequestToken(key) {
  return createHmac("sha256", key).update("orca-dag:plugin-request:v2").digest("base64url");
}
var PLUGIN_NONCE = /^[A-Za-z0-9_-]{22}$/;
function signPluginReply(key, kind, nonce, body) {
  return createHmac("sha256", key).update(`orca-dag:plugin-reply:v2:${kind}:${nonce}:`).update(body).digest("base64url");
}

// server/src/planning.ts
import { closeSync, constants, lstatSync as lstatSync5, openSync, readFileSync as readFileSync3, writeFileSync as writeFileSync2 } from "node:fs";
import { join as join10 } from "node:path";
var PLANNING_DIR = WORKSPACE_DATA_DIR;
var LEGACY_PLANNING_DIR = ".orca";
var BEGIN = "# >>> orca-dag planning artifacts (managed)";
var END = "# <<< orca-dag planning artifacts (managed)";
var RULE = `${PLANNING_DIR}/`;
var MANAGED_RULES = /* @__PURE__ */ new Set([RULE, `${LEGACY_PLANNING_DIR}/`]);
function readIgnore(path) {
  try {
    const stat2 = lstatSync5(path);
    if (!stat2.isFile() || stat2.isSymbolicLink()) {
      throw new Error(".gitignore is not a regular file; left untouched");
    }
    const fd = openSync(path, constants.O_RDONLY | constants.O_NOFOLLOW);
    try {
      return readFileSync3(fd, "utf8");
    } finally {
      closeSync(fd);
    }
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}
function writeIgnore(path, text) {
  const fd = openSync(path, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | constants.O_NOFOLLOW);
  try {
    writeFileSync2(fd, text);
  } finally {
    closeSync(fd);
  }
}
function setupPlanningWorkspace(workspace, enabled = true) {
  const path = join10(workspace, ".gitignore");
  if (!enabled) return { status: "disabled", path };
  try {
    const text = readIgnore(path) ?? "";
    const lines = text.split(/\r?\n/);
    const rules = /* @__PURE__ */ new Set([RULE, `/${RULE}`, PLANNING_DIR, `/${PLANNING_DIR}`, `${RULE}**`, `/${RULE}**`]);
    let lastRule = -1;
    lines.forEach((line, i) => {
      if (rules.has(line.trimEnd())) lastRule = i;
    });
    if (lastRule >= 0 && !lines.slice(lastRule + 1).some((line) => line.startsWith("!"))) {
      return { status: "present", path };
    }
    const eol = text.includes("\r\n") ? "\r\n" : "\n";
    const separator = text && !text.endsWith("\n") ? eol : "";
    writeIgnore(path, `${text}${separator}${BEGIN}${eol}${RULE}${eol}${END}${eol}`);
    return { status: "added", path };
  } catch (err) {
    return { status: "skipped", path, reason: String(err.message ?? err) };
  }
}
function describePlanningSetup(result) {
  const location = `Planning docs: ${PLANNING_DIR}/<UTC timestamp>/{PRD.md,TECH_SPEC.md} (one directory per plan).`;
  if (result.status === "added") return `${location} Added ${RULE} to ${result.path} (managed; uninstall removes it).`;
  if (result.status === "present") return `${location} ${RULE} is already listed in ${result.path}.`;
  if (result.status === "disabled") return `${location} Workspace initialization disabled; add ${RULE} to .gitignore yourself.`;
  return `${location} WARNING: could not initialize ${result.path}: ${result.reason}. Add ${RULE} manually before planning.`;
}
function removePlanningIgnore(workspace, dryRun) {
  const path = join10(workspace, ".gitignore");
  try {
    const text = readIgnore(path);
    if (text === null) return { path, removed: 0 };
    const lines = text.split(/(?<=\n)/);
    const value = (line) => line?.replace(/\r?\n$/, "");
    const kept = [];
    let removed = 0;
    for (let i = 0; i < lines.length; i++) {
      if (value(lines[i]) === BEGIN && MANAGED_RULES.has(value(lines[i + 1]) ?? "") && value(lines[i + 2]) === END) {
        removed++;
        i += 2;
      } else {
        kept.push(lines[i]);
      }
    }
    if (removed && !dryRun) writeIgnore(path, kept.join(""));
    return { path, removed };
  } catch (err) {
    return { path, removed: 0, reason: String(err.message ?? err) };
  }
}

export {
  __require,
  __commonJS,
  __toESM,
  parseOpenCodeModel,
  verifyOpenCodeSession,
  WORKSPACE_STATE_FILES,
  WORKSPACE_ENDPOINT_FILE,
  legacyWorkspaceStatePath,
  assertWorkspaceStateDirectory,
  prepareWorkspaceStateFile,
  workspaceStateReadPath,
  initializeWorkspaceState,
  loadConfig,
  saveConfig,
  createSecurityPolicy,
  requireToken,
  ValidationError,
  validateOpenCodeUi,
  validateOpenCodeUiTaskMap,
  assertOpenCodeUiPlacement,
  KNOWN_HARNESSES,
  isNativeFreshPreset,
  assertNativePresetConstraints,
  isUnverifiedHarness,
  validateId,
  validateText,
  validateHarness,
  validateModel,
  validateEffort,
  validateTaskValueMap,
  validateConcurrency,
  validateBooleanTaskMap,
  validateEnvironmentSelector,
  validateSelector,
  validatePlacementTaskMap,
  validateWorktreeLaneMap,
  validateLaneTaskMap,
  assertLaneReferences,
  assertLanePlacementDisjoint,
  assertEnvironmentPlacementCompatibility,
  validateEnvironmentTaskMap,
  validateGroupAudience,
  assertDiscoveredWorktreeAudience,
  validateGroupMessageType,
  validateGroupMessagePriority,
  ProviderSessionStore,
  discoverProviderSession,
  initOrcaRuntime,
  getOrcaRuntime,
  formatCommand,
  OrcaCliError,
  RESPONSE_LOST,
  runOrca,
  listWorkspaceRuns,
  createRun,
  bindRun,
  showRun,
  listRemovedWork,
  listTasks,
  listGates,
  resolveGate,
  taskUpdate,
  listTerminals,
  COORDINATOR_TITLE,
  parseCoordinatorTitle,
  ensureCoordinatorTerminal,
  createTempCoordinatorTerminal,
  closeTerminal,
  closeTerminalStrict,
  isChatSessionHandle,
  focusTerminal,
  MIN_NATIVE_CODEX_VERSION,
  MIN_NATIVE_OPENCODE_VERSION,
  MIN_NATIVE_OPENCODE_MODEL_VERSION,
  compareVersions,
  checkReadiness,
  canUseNativeCodexFreshWorktree,
  assertNativePresetSupport,
  isStopEventReason,
  extractPermissionPrompt,
  parseWorkerDonePayload,
  listRunMessagePage,
  listRunMessages,
  checkInbox,
  replyToMessage,
  sendCoordinatorMessage,
  sendCoordinatorGroupMessage,
  previewRunAudiences,
  workerSupervision,
  normalizeLiveness,
  FLEET_CAPABILITY_GAP_REASONS,
  presentWorkerLiveness,
  showWorkerDetail,
  listWorkers,
  normalizeTerminalReceipt,
  releaseWorker,
  retainWorker,
  readWorkerOutput,
  workerStopOperation,
  stopWorkerReceipt,
  decideWorkerPermissionPrompt,
  abandonWorkerReceipt,
  followableNextAction,
  runNextAction,
  newRequestId,
  showRequest,
  parseWorkerStartReceipt,
  readLocalRuntimeCapabilities,
  describeRuntimeCapabilities,
  parsePeerCapabilities,
  listEnvironments,
  showEnvironment,
  listRepos,
  listWorktrees,
  showWorktree,
  listProjects,
  openWorkspaceFile,
  openWorkspaceFileDiff,
  openWorkspaceChangedFiles,
  WORKTREE_ARCHIVE_HOOK_FAILED,
  isArchiveHookFailure,
  removeWorktree,
  prepareCodexTerminal,
  createLocalCodexWorktree,
  findOpenCodeTuiLaunch,
  recoverOpenCodeTuiBindings,
  verifyOpenCodeTuiTerminal,
  inspectOpenCodeTui,
  closeReleasedOpenCodeTui,
  retainOpenCodeTui,
  startOpenCodeTuiWorker,
  startOpenCodeInteractiveWorker,
  deriveWorktreeName,
  startSupervisedWorker,
  listModels,
  listAgentAccounts,
  startLegacyWorker,
  tasksToDag,
  ordinaryGateApproved,
  explainReadiness,
  openOrcaViewerTab,
  loadEmbeddedAssets,
  SKILL_NAME,
  USER_PREFERENCES_FILE,
  isSafeSkillPath,
  resolveAgentSkillDirs,
  installSkill,
  uninstallBundledSkill,
  describeSkillInstall,
  MERGE_PREP_MARKER,
  MERGE_INPUTS_V3_MARKER,
  stageGitStoreDir,
  validateMergeInputProtocol,
  validateStagePlan,
  isMergeInputsQuestion,
  buildMergeInputs,
  StageGit,
  pluginEndpointPath,
  checkPluginEndpointFile,
  readPluginEndpointFile,
  pluginRequestToken,
  PLUGIN_NONCE,
  signPluginReply,
  PLANNING_DIR,
  LEGACY_PLANNING_DIR,
  setupPlanningWorkspace,
  describePlanningSetup,
  removePlanningIgnore
};
