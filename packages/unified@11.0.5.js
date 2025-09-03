System.register(["bail@2.0.2","devlop@1.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["bail","2.0.2"],["extend","3.0.2"],["devlop","1.1.0"],["is-plain-obj","4.1.0"],["trough","2.2.0"],["unist-util-stringify-position","4.0.0"],["vfile-message","4.0.2"],["vfile","6.0.3"],["unified","11.0.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('bail@2.0.2', dep), dep => dependencies.set('devlop@1.1.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// node_modules/extend/index.js
var require_extend = __commonJS({
  "node_modules/extend/index.js"(exports, module2) {
    "use strict";

    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var defineProperty = Object.defineProperty;
    var gOPD = Object.getOwnPropertyDescriptor;
    var isArray = function isArray2(arr) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(arr);
      }
      return toStr.call(arr) === "[object Array]";
    };
    var isPlainObject2 = function isPlainObject3(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      var hasOwnConstructor = hasOwn.call(obj, "constructor");
      var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      var key;
      for (key in obj) {}
      return typeof key === "undefined" || hasOwn.call(obj, key);
    };
    var setProperty = function setProperty2(target, options) {
      if (defineProperty && options.name === "__proto__") {
        defineProperty(target, options.name, {
          enumerable: true,
          configurable: true,
          value: options.newValue,
          writable: true
        });
      } else {
        target[options.name] = options.newValue;
      }
    };
    var getProperty = function getProperty2(obj, name) {
      if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) {
          return void 0;
        } else if (gOPD) {
          return gOPD(obj, name).value;
        }
      }
      return obj[name];
    };
    module2.exports = function extend2() {
      var options, name, src, copy, copyIsArray, clone;
      var target = arguments[0];
      var i = 1;
      var length = arguments.length;
      var deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        i = 2;
      }
      if (target == null || typeof target !== "object" && typeof target !== "function") {
        target = {};
      }
      for (; i < length; ++i) {
        options = arguments[i];
        if (options != null) {
          for (name in options) {
            src = getProperty(target, name);
            copy = getProperty(options, name);
            if (target !== copy) {
              if (deep && copy && (isPlainObject2(copy) || (copyIsArray = isArray(copy)))) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
                } else {
                  clone = src && isPlainObject2(src) ? src : {};
                }
                setProperty(target, {
                  name,
                  newValue: extend2(deep, clone, copy)
                });
              } else if (typeof copy !== "undefined") {
                setProperty(target, {
                  name,
                  newValue: copy
                });
              }
            }
          }
        }
      }
      return target;
    };
  }
});

// .beyond/uimport/unified.11.0.5.js
var unified_11_0_5_exports = {};
__export(unified_11_0_5_exports, {
  unified: () => unified
});
module.exports = __toCommonJS(unified_11_0_5_exports);

// node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// node_modules/trough/lib/index.js
function trough() {
  const fns = [];
  const pipeline = {
    run,
    use
  };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1;
    const callback = values.pop();
    if (typeof callback !== "function") {
      throw new TypeError("Expected function as last argument, not " + callback);
    }
    next(null, ...values);
    function next(error, ...output) {
      const fn = fns[++middlewareIndex];
      let index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      while (++index2 < values.length) {
        if (output[index2] === null || output[index2] === void 0) {
          output[index2] = values[index2];
        }
      }
      values = output;
      if (fn) {
        wrap(fn, next)(...output);
      } else {
        callback(null, ...output);
      }
    }
  }
  function use(middelware) {
    if (typeof middelware !== "function") {
      throw new TypeError("Expected `middelware` to be a function, not " + middelware);
    }
    fns.push(middelware);
    return pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    const fnExpectsCallback = middleware.length > parameters.length;
    let result;
    if (fnExpectsCallback) {
      parameters.push(done);
    }
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      const exception = error;
      if (fnExpectsCallback && called) {
        throw exception;
      }
      return done(exception);
    }
    if (!fnExpectsCallback) {
      if (result && result.then && typeof result.then === "function") {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }
  function done(error, ...output) {
    if (!called) {
      called = true;
      callback(error, ...output);
    }
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point2) {
  return index(point2 && point2.line) + ":" + index(point2 && point2.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/vfile-message/lib/index.js
var VFileMessage = class extends Error {
  constructor(causeOrReason, optionsOrParentOrPlace, origin) {
    super();
    if (typeof optionsOrParentOrPlace === "string") {
      origin = optionsOrParentOrPlace;
      optionsOrParentOrPlace = void 0;
    }
    let reason = "";
    let options = {};
    let legacyCause = false;
    if (optionsOrParentOrPlace) {
      if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) {
        options = {
          place: optionsOrParentOrPlace
        };
      } else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) {
        options = {
          place: optionsOrParentOrPlace
        };
      } else if ("type" in optionsOrParentOrPlace) {
        options = {
          ancestors: [optionsOrParentOrPlace],
          place: optionsOrParentOrPlace.position
        };
      } else {
        options = {
          ...optionsOrParentOrPlace
        };
      }
    }
    if (typeof causeOrReason === "string") {
      reason = causeOrReason;
    } else if (!options.cause && causeOrReason) {
      legacyCause = true;
      reason = causeOrReason.message;
      options.cause = causeOrReason;
    }
    if (!options.ruleId && !options.source && typeof origin === "string") {
      const index2 = origin.indexOf(":");
      if (index2 === -1) {
        options.ruleId = origin;
      } else {
        options.source = origin.slice(0, index2);
        options.ruleId = origin.slice(index2 + 1);
      }
    }
    if (!options.place && options.ancestors && options.ancestors) {
      const parent = options.ancestors[options.ancestors.length - 1];
      if (parent) {
        options.place = parent.position;
      }
    }
    const start = options.place && "start" in options.place ? options.place.start : options.place;
    this.ancestors = options.ancestors || void 0;
    this.cause = options.cause || void 0;
    this.column = start ? start.column : void 0;
    this.fatal = void 0;
    this.file;
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual;
    this.expected;
    this.note;
    this.url;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;

// node_modules/vfile/lib/minpath.browser.js
var minpath = {
  basename,
  dirname,
  extname,
  join,
  sep: "/"
};
function basename(path, extname2) {
  if (extname2 !== void 0 && typeof extname2 !== "string") {
    throw new TypeError('"ext" argument must be a string');
  }
  assertPath(path);
  let start = 0;
  let end = -1;
  let index2 = path.length;
  let seenNonSlash;
  if (extname2 === void 0 || extname2.length === 0 || extname2.length > path.length) {
    while (index2--) {
      if (path.codePointAt(index2) === 47) {
        if (seenNonSlash) {
          start = index2 + 1;
          break;
        }
      } else if (end < 0) {
        seenNonSlash = true;
        end = index2 + 1;
      }
    }
    return end < 0 ? "" : path.slice(start, end);
  }
  if (extname2 === path) {
    return "";
  }
  let firstNonSlashEnd = -1;
  let extnameIndex = extname2.length - 1;
  while (index2--) {
    if (path.codePointAt(index2) === 47) {
      if (seenNonSlash) {
        start = index2 + 1;
        break;
      }
    } else {
      if (firstNonSlashEnd < 0) {
        seenNonSlash = true;
        firstNonSlashEnd = index2 + 1;
      }
      if (extnameIndex > -1) {
        if (path.codePointAt(index2) === extname2.codePointAt(extnameIndex--)) {
          if (extnameIndex < 0) {
            end = index2;
          }
        } else {
          extnameIndex = -1;
          end = firstNonSlashEnd;
        }
      }
    }
  }
  if (start === end) {
    end = firstNonSlashEnd;
  } else if (end < 0) {
    end = path.length;
  }
  return path.slice(start, end);
}
function dirname(path) {
  assertPath(path);
  if (path.length === 0) {
    return ".";
  }
  let end = -1;
  let index2 = path.length;
  let unmatchedSlash;
  while (--index2) {
    if (path.codePointAt(index2) === 47) {
      if (unmatchedSlash) {
        end = index2;
        break;
      }
    } else if (!unmatchedSlash) {
      unmatchedSlash = true;
    }
  }
  return end < 0 ? path.codePointAt(0) === 47 ? "/" : "." : end === 1 && path.codePointAt(0) === 47 ? "//" : path.slice(0, end);
}
function extname(path) {
  assertPath(path);
  let index2 = path.length;
  let end = -1;
  let startPart = 0;
  let startDot = -1;
  let preDotState = 0;
  let unmatchedSlash;
  while (index2--) {
    const code = path.codePointAt(index2);
    if (code === 47) {
      if (unmatchedSlash) {
        startPart = index2 + 1;
        break;
      }
      continue;
    }
    if (end < 0) {
      unmatchedSlash = true;
      end = index2 + 1;
    }
    if (code === 46) {
      if (startDot < 0) {
        startDot = index2;
      } else if (preDotState !== 1) {
        preDotState = 1;
      }
    } else if (startDot > -1) {
      preDotState = -1;
    }
  }
  if (startDot < 0 || end < 0 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function join(...segments) {
  let index2 = -1;
  let joined;
  while (++index2 < segments.length) {
    assertPath(segments[index2]);
    if (segments[index2]) {
      joined = joined === void 0 ? segments[index2] : joined + "/" + segments[index2];
    }
  }
  return joined === void 0 ? "." : normalize(joined);
}
function normalize(path) {
  assertPath(path);
  const absolute = path.codePointAt(0) === 47;
  let value = normalizeString(path, !absolute);
  if (value.length === 0 && !absolute) {
    value = ".";
  }
  if (value.length > 0 && path.codePointAt(path.length - 1) === 47) {
    value += "/";
  }
  return absolute ? "/" + value : value;
}
function normalizeString(path, allowAboveRoot) {
  let result = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let index2 = -1;
  let code;
  let lastSlashIndex;
  while (++index2 <= path.length) {
    if (index2 < path.length) {
      code = path.codePointAt(index2);
    } else if (code === 47) {
      break;
    } else {
      code = 47;
    }
    if (code === 47) {
      if (lastSlash === index2 - 1 || dots === 1) {} else if (lastSlash !== index2 - 1 && dots === 2) {
        if (result.length < 2 || lastSegmentLength !== 2 || result.codePointAt(result.length - 1) !== 46 || result.codePointAt(result.length - 2) !== 46) {
          if (result.length > 2) {
            lastSlashIndex = result.lastIndexOf("/");
            if (lastSlashIndex !== result.length - 1) {
              if (lastSlashIndex < 0) {
                result = "";
                lastSegmentLength = 0;
              } else {
                result = result.slice(0, lastSlashIndex);
                lastSegmentLength = result.length - 1 - result.lastIndexOf("/");
              }
              lastSlash = index2;
              dots = 0;
              continue;
            }
          } else if (result.length > 0) {
            result = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          result = result.length > 0 ? result + "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (result.length > 0) {
          result += "/" + path.slice(lastSlash + 1, index2);
        } else {
          result = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (code === 46 && dots > -1) {
      dots++;
    } else {
      dots = -1;
    }
  }
  return result;
}
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}

// node_modules/vfile/lib/minproc.browser.js
var minproc = {
  cwd
};
function cwd() {
  return "/";
}

// node_modules/vfile/lib/minurl.shared.js
function isUrl(fileUrlOrPath) {
  return Boolean(fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && fileUrlOrPath.auth === void 0);
}

// node_modules/vfile/lib/minurl.browser.js
function urlToPath(path) {
  if (typeof path === "string") {
    path = new URL(path);
  } else if (!isUrl(path)) {
    const error = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + path + "`");
    error.code = "ERR_INVALID_ARG_TYPE";
    throw error;
  }
  if (path.protocol !== "file:") {
    const error = new TypeError("The URL must be of scheme file");
    error.code = "ERR_INVALID_URL_SCHEME";
    throw error;
  }
  return getPathFromURLPosix(path);
}
function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    const error = new TypeError('File URL host must be "localhost" or empty on darwin');
    error.code = "ERR_INVALID_FILE_URL_HOST";
    throw error;
  }
  const pathname = url.pathname;
  let index2 = -1;
  while (++index2 < pathname.length) {
    if (pathname.codePointAt(index2) === 37 && pathname.codePointAt(index2 + 1) === 50) {
      const third = pathname.codePointAt(index2 + 2);
      if (third === 70 || third === 102) {
        const error = new TypeError("File URL path must not include encoded / characters");
        error.code = "ERR_INVALID_FILE_URL_PATH";
        throw error;
      }
    }
  }
  return decodeURIComponent(pathname);
}

// node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"];
var VFile = class {
  constructor(value) {
    let options;
    if (!value) {
      options = {};
    } else if (isUrl(value)) {
      options = {
        path: value
      };
    } else if (typeof value === "string" || isUint8Array(value)) {
      options = {
        value
      };
    } else {
      options = value;
    }
    this.cwd = "cwd" in options ? "" : minproc.cwd();
    this.data = {};
    this.history = [];
    this.messages = [];
    this.value;
    this.map;
    this.result;
    this.stored;
    let index2 = -1;
    while (++index2 < order.length) {
      const field2 = order[index2];
      if (field2 in options && options[field2] !== void 0 && options[field2] !== null) {
        this[field2] = field2 === "history" ? [...options[field2]] : options[field2];
      }
    }
    let field;
    for (field in options) {
      if (!order.includes(field)) {
        this[field] = options[field];
      }
    }
  }
  get basename() {
    return typeof this.path === "string" ? minpath.basename(this.path) : void 0;
  }
  set basename(basename2) {
    assertNonEmpty(basename2, "basename");
    assertPart(basename2, "basename");
    this.path = minpath.join(this.dirname || "", basename2);
  }
  get dirname() {
    return typeof this.path === "string" ? minpath.dirname(this.path) : void 0;
  }
  set dirname(dirname2) {
    assertPath2(this.basename, "dirname");
    this.path = minpath.join(dirname2 || "", this.basename);
  }
  get extname() {
    return typeof this.path === "string" ? minpath.extname(this.path) : void 0;
  }
  set extname(extname2) {
    assertPart(extname2, "extname");
    assertPath2(this.dirname, "extname");
    if (extname2) {
      if (extname2.codePointAt(0) !== 46) {
        throw new Error("`extname` must start with `.`");
      }
      if (extname2.includes(".", 1)) {
        throw new Error("`extname` cannot contain multiple dots");
      }
    }
    this.path = minpath.join(this.dirname, this.stem + (extname2 || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path) {
    if (isUrl(path)) {
      path = urlToPath(path);
    }
    assertNonEmpty(path, "path");
    if (this.path !== path) {
      this.history.push(path);
    }
  }
  get stem() {
    return typeof this.path === "string" ? minpath.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem");
    assertPart(stem, "stem");
    this.path = minpath.join(this.dirname || "", stem + (this.extname || ""));
  }
  fail(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = true;
    throw message;
  }
  info(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
    message.fatal = void 0;
    return message;
  }
  message(causeOrReason, optionsOrParentOrPlace, origin) {
    const message = new VFileMessage(causeOrReason, optionsOrParentOrPlace, origin);
    if (this.path) {
      message.name = this.path + ":" + message.name;
      message.file = this.path;
    }
    message.fatal = false;
    this.messages.push(message);
    return message;
  }
  toString(encoding) {
    if (this.value === void 0) {
      return "";
    }
    if (typeof this.value === "string") {
      return this.value;
    }
    const decoder = new TextDecoder(encoding || void 0);
    return decoder.decode(this.value);
  }
};
function assertPart(part, name) {
  if (part && part.includes(minpath.sep)) {
    throw new Error("`" + name + "` cannot be a path: did not expect `" + minpath.sep + "`");
  }
}
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error("`" + name + "` cannot be empty");
  }
}
function assertPath2(path, name) {
  if (!path) {
    throw new Error("Setting `" + name + "` requires `path` to be set too");
  }
}
function isUint8Array(value) {
  return Boolean(value && typeof value === "object" && "byteLength" in value && "byteOffset" in value);
}

// node_modules/unified/lib/callable-instance.js
var CallableInstance = function (property) {
  const self = this;
  const constr = self.constructor;
  const proto = constr.prototype;
  const value = proto[property];
  const apply = function () {
    return value.apply(apply, arguments);
  };
  Object.setPrototypeOf(apply, proto);
  return apply;
};

// node_modules/unified/lib/index.js
var import_bail = require("bail@2.0.2");
var import_extend = __toESM(require_extend(), 1);
var import_devlop = require("devlop@1.1.0");
var own = {}.hasOwnProperty;
var Processor = class extends CallableInstance {
  constructor() {
    super("copy");
    this.Compiler = void 0;
    this.Parser = void 0;
    this.attachers = [];
    this.compiler = void 0;
    this.freezeIndex = -1;
    this.frozen = void 0;
    this.namespace = {};
    this.parser = void 0;
    this.transformers = trough();
  }
  copy() {
    const destination = new Processor();
    let index2 = -1;
    while (++index2 < this.attachers.length) {
      const attacher = this.attachers[index2];
      destination.use(...attacher);
    }
    destination.data((0, import_extend.default)(true, {}, this.namespace));
    return destination;
  }
  data(key, value) {
    if (typeof key === "string") {
      if (arguments.length === 2) {
        assertUnfrozen("data", this.frozen);
        this.namespace[key] = value;
        return this;
      }
      return own.call(this.namespace, key) && this.namespace[key] || void 0;
    }
    if (key) {
      assertUnfrozen("data", this.frozen);
      this.namespace = key;
      return this;
    }
    return this.namespace;
  }
  freeze() {
    if (this.frozen) {
      return this;
    }
    const self = this;
    while (++this.freezeIndex < this.attachers.length) {
      const [attacher, ...options] = this.attachers[this.freezeIndex];
      if (options[0] === false) {
        continue;
      }
      if (options[0] === true) {
        options[0] = void 0;
      }
      const transformer = attacher.call(self, ...options);
      if (typeof transformer === "function") {
        this.transformers.use(transformer);
      }
    }
    this.frozen = true;
    this.freezeIndex = Number.POSITIVE_INFINITY;
    return this;
  }
  parse(file) {
    this.freeze();
    const realFile = vfile(file);
    const parser = this.parser || this.Parser;
    assertParser("parse", parser);
    return parser(String(realFile), realFile);
  }
  process(file, done) {
    const self = this;
    this.freeze();
    assertParser("process", this.parser || this.Parser);
    assertCompiler("process", this.compiler || this.Compiler);
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      const realFile = vfile(file);
      const parseTree = self.parse(realFile);
      self.run(parseTree, realFile, function (error, tree, file2) {
        if (error || !tree || !file2) {
          return realDone(error);
        }
        const compileTree = tree;
        const compileResult = self.stringify(compileTree, file2);
        if (looksLikeAValue(compileResult)) {
          file2.value = compileResult;
        } else {
          file2.result = compileResult;
        }
        realDone(error, file2);
      });
      function realDone(error, file2) {
        if (error || !file2) {
          reject(error);
        } else if (resolve) {
          resolve(file2);
        } else {
          (0, import_devlop.ok)(done, "`done` is defined if `resolve` is not");
          done(void 0, file2);
        }
      }
    }
  }
  processSync(file) {
    let complete = false;
    let result;
    this.freeze();
    assertParser("processSync", this.parser || this.Parser);
    assertCompiler("processSync", this.compiler || this.Compiler);
    this.process(file, realDone);
    assertDone("processSync", "process", complete);
    (0, import_devlop.ok)(result, "we either bailed on an error or have a tree");
    return result;
    function realDone(error, file2) {
      complete = true;
      (0, import_bail.bail)(error);
      result = file2;
    }
  }
  run(tree, file, done) {
    assertNode(tree);
    this.freeze();
    const transformers = this.transformers;
    if (!done && typeof file === "function") {
      done = file;
      file = void 0;
    }
    return done ? executor(void 0, done) : new Promise(executor);
    function executor(resolve, reject) {
      (0, import_devlop.ok)(typeof file !== "function", "`file` can\u2019t be a `done` anymore, we checked");
      const realFile = vfile(file);
      transformers.run(tree, realFile, realDone);
      function realDone(error, outputTree, file2) {
        const resultingTree = outputTree || tree;
        if (error) {
          reject(error);
        } else if (resolve) {
          resolve(resultingTree);
        } else {
          (0, import_devlop.ok)(done, "`done` is defined if `resolve` is not");
          done(void 0, resultingTree, file2);
        }
      }
    }
  }
  runSync(tree, file) {
    let complete = false;
    let result;
    this.run(tree, file, realDone);
    assertDone("runSync", "run", complete);
    (0, import_devlop.ok)(result, "we either bailed on an error or have a tree");
    return result;
    function realDone(error, tree2) {
      (0, import_bail.bail)(error);
      result = tree2;
      complete = true;
    }
  }
  stringify(tree, file) {
    this.freeze();
    const realFile = vfile(file);
    const compiler = this.compiler || this.Compiler;
    assertCompiler("stringify", compiler);
    assertNode(tree);
    return compiler(tree, realFile);
  }
  use(value, ...parameters) {
    const attachers = this.attachers;
    const namespace = this.namespace;
    assertUnfrozen("use", this.frozen);
    if (value === null || value === void 0) {} else if (typeof value === "function") {
      addPlugin(value, parameters);
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new TypeError("Expected usable value, not `" + value + "`");
    }
    return this;
    function add(value2) {
      if (typeof value2 === "function") {
        addPlugin(value2, []);
      } else if (typeof value2 === "object") {
        if (Array.isArray(value2)) {
          const [plugin, ...parameters2] = value2;
          addPlugin(plugin, parameters2);
        } else {
          addPreset(value2);
        }
      } else {
        throw new TypeError("Expected usable value, not `" + value2 + "`");
      }
    }
    function addPreset(result) {
      if (!("plugins" in result) && !("settings" in result)) {
        throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
      }
      addList(result.plugins);
      if (result.settings) {
        namespace.settings = (0, import_extend.default)(true, namespace.settings, result.settings);
      }
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins === null || plugins === void 0) {} else if (Array.isArray(plugins)) {
        while (++index2 < plugins.length) {
          const thing = plugins[index2];
          add(thing);
        }
      } else {
        throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
      }
    }
    function addPlugin(plugin, parameters2) {
      let index2 = -1;
      let entryIndex = -1;
      while (++index2 < attachers.length) {
        if (attachers[index2][0] === plugin) {
          entryIndex = index2;
          break;
        }
      }
      if (entryIndex === -1) {
        attachers.push([plugin, ...parameters2]);
      } else if (parameters2.length > 0) {
        let [primary, ...rest] = parameters2;
        const currentPrimary = attachers[entryIndex][1];
        if (isPlainObject(currentPrimary) && isPlainObject(primary)) {
          primary = (0, import_extend.default)(true, currentPrimary, primary);
        }
        attachers[entryIndex] = [plugin, primary, ...rest];
      }
    }
  }
};
var unified = new Processor().freeze();
function assertParser(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `parser`");
  }
}
function assertCompiler(name, value) {
  if (typeof value !== "function") {
    throw new TypeError("Cannot `" + name + "` without `compiler`");
  }
}
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error("Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
}
function assertNode(node) {
  if (!isPlainObject(node) || typeof node.type !== "string") {
    throw new TypeError("Expected node, got `" + node + "`");
  }
}
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error("`" + name + "` finished async. Use `" + asyncName + "` instead");
  }
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(value && typeof value === "object" && "message" in value && "messages" in value);
}
function looksLikeAValue(value) {
  return typeof value === "string" || isUint8Array2(value);
}
function isUint8Array2(value) {
  return Boolean(value && typeof value === "object" && "byteLength" in value && "byteOffset" in value);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdW5pZmllZC4xMS4wLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Ryb3VnaC9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZmaWxlL2xpYi9taW5wYXRoLmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL21pbnByb2MuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvbWludXJsLnNoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvbWludXJsLmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbGliL2NhbGxhYmxlLWluc3RhbmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfZXh0ZW5kIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImhhc093biIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwidG9TdHIiLCJ0b1N0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzQXJyYXkiLCJpc0FycmF5MiIsImFyciIsIkFycmF5IiwiY2FsbCIsImlzUGxhaW5PYmplY3QyIiwiaXNQbGFpbk9iamVjdDMiLCJvYmoiLCJoYXNPd25Db25zdHJ1Y3RvciIsImhhc0lzUHJvdG90eXBlT2YiLCJjb25zdHJ1Y3RvciIsImtleSIsInNldFByb3BlcnR5Iiwic2V0UHJvcGVydHkyIiwidGFyZ2V0Iiwib3B0aW9ucyIsIm5hbWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJuZXdWYWx1ZSIsIndyaXRhYmxlIiwiZ2V0UHJvcGVydHkiLCJnZXRQcm9wZXJ0eTIiLCJleHRlbmQyIiwic3JjIiwiY29weSIsImNvcHlJc0FycmF5IiwiY2xvbmUiLCJhcmd1bWVudHMiLCJpIiwibGVuZ3RoIiwiZGVlcCIsInVuaWZpZWRfMTFfMF81X2V4cG9ydHMiLCJfX2V4cG9ydCIsInVuaWZpZWQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJpc1BsYWluT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIml0ZXJhdG9yIiwidHJvdWdoIiwiZm5zIiwicGlwZWxpbmUiLCJydW4iLCJ1c2UiLCJ2YWx1ZXMiLCJtaWRkbGV3YXJlSW5kZXgiLCJjYWxsYmFjayIsInBvcCIsIlR5cGVFcnJvciIsIm5leHQiLCJlcnJvciIsIm91dHB1dCIsImZuIiwiaW5kZXgyIiwid3JhcCIsIm1pZGRlbHdhcmUiLCJwdXNoIiwibWlkZGxld2FyZSIsImNhbGxlZCIsIndyYXBwZWQiLCJwYXJhbWV0ZXJzIiwiZm5FeHBlY3RzQ2FsbGJhY2siLCJyZXN1bHQiLCJkb25lIiwiYXBwbHkiLCJleGNlcHRpb24iLCJ0aGVuIiwiRXJyb3IiLCJzdHJpbmdpZnlQb3NpdGlvbiIsInBvc2l0aW9uIiwicG9pbnQiLCJwb2ludDIiLCJpbmRleCIsImxpbmUiLCJjb2x1bW4iLCJwb3MiLCJzdGFydCIsImVuZCIsIlZGaWxlTWVzc2FnZSIsImNhdXNlT3JSZWFzb24iLCJvcHRpb25zT3JQYXJlbnRPclBsYWNlIiwib3JpZ2luIiwicmVhc29uIiwibGVnYWN5Q2F1c2UiLCJwbGFjZSIsImFuY2VzdG9ycyIsImNhdXNlIiwibWVzc2FnZSIsInJ1bGVJZCIsInNvdXJjZSIsImluZGV4T2YiLCJzbGljZSIsInBhcmVudCIsImZhdGFsIiwiZmlsZSIsInN0YWNrIiwiYWN0dWFsIiwiZXhwZWN0ZWQiLCJub3RlIiwidXJsIiwibWlucGF0aCIsImJhc2VuYW1lIiwiZGlybmFtZSIsImV4dG5hbWUiLCJqb2luIiwic2VwIiwicGF0aCIsImV4dG5hbWUyIiwiYXNzZXJ0UGF0aCIsInNlZW5Ob25TbGFzaCIsImNvZGVQb2ludEF0IiwiZmlyc3ROb25TbGFzaEVuZCIsImV4dG5hbWVJbmRleCIsInVubWF0Y2hlZFNsYXNoIiwic3RhcnRQYXJ0Iiwic3RhcnREb3QiLCJwcmVEb3RTdGF0ZSIsImNvZGUiLCJzZWdtZW50cyIsImpvaW5lZCIsIm5vcm1hbGl6ZSIsImFic29sdXRlIiwibm9ybWFsaXplU3RyaW5nIiwiYWxsb3dBYm92ZVJvb3QiLCJsYXN0U2VnbWVudExlbmd0aCIsImxhc3RTbGFzaCIsImRvdHMiLCJsYXN0U2xhc2hJbmRleCIsImxhc3RJbmRleE9mIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1pbnByb2MiLCJjd2QiLCJpc1VybCIsImZpbGVVcmxPclBhdGgiLCJCb29sZWFuIiwiaHJlZiIsInByb3RvY29sIiwiYXV0aCIsInVybFRvUGF0aCIsIlVSTCIsImdldFBhdGhGcm9tVVJMUG9zaXgiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidGhpcmQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJvcmRlciIsIlZGaWxlIiwiaXNVaW50OEFycmF5IiwiZGF0YSIsImhpc3RvcnkiLCJtZXNzYWdlcyIsIm1hcCIsInN0b3JlZCIsImZpZWxkMiIsImZpZWxkIiwiaW5jbHVkZXMiLCJiYXNlbmFtZTIiLCJhc3NlcnROb25FbXB0eSIsImFzc2VydFBhcnQiLCJkaXJuYW1lMiIsImFzc2VydFBhdGgyIiwic3RlbSIsImZhaWwiLCJpbmZvIiwiZW5jb2RpbmciLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJwYXJ0IiwiQ2FsbGFibGVJbnN0YW5jZSIsInByb3BlcnR5Iiwic2VsZiIsImNvbnN0ciIsInByb3RvIiwic2V0UHJvdG90eXBlT2YiLCJpbXBvcnRfYmFpbCIsInJlcXVpcmUiLCJpbXBvcnRfZXh0ZW5kIiwiX190b0VTTSIsImltcG9ydF9kZXZsb3AiLCJvd24iLCJQcm9jZXNzb3IiLCJDb21waWxlciIsIlBhcnNlciIsImF0dGFjaGVycyIsImNvbXBpbGVyIiwiZnJlZXplSW5kZXgiLCJmcm96ZW4iLCJuYW1lc3BhY2UiLCJwYXJzZXIiLCJ0cmFuc2Zvcm1lcnMiLCJkZXN0aW5hdGlvbiIsImF0dGFjaGVyIiwiZGVmYXVsdCIsImFzc2VydFVuZnJvemVuIiwiZnJlZXplIiwidHJhbnNmb3JtZXIiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInBhcnNlIiwicmVhbEZpbGUiLCJ2ZmlsZSIsImFzc2VydFBhcnNlciIsIlN0cmluZyIsInByb2Nlc3MiLCJhc3NlcnRDb21waWxlciIsImV4ZWN1dG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZVRyZWUiLCJ0cmVlIiwiZmlsZTIiLCJyZWFsRG9uZSIsImNvbXBpbGVUcmVlIiwiY29tcGlsZVJlc3VsdCIsImxvb2tzTGlrZUFWYWx1ZSIsIm9rIiwicHJvY2Vzc1N5bmMiLCJjb21wbGV0ZSIsImFzc2VydERvbmUiLCJiYWlsIiwiYXNzZXJ0Tm9kZSIsIm91dHB1dFRyZWUiLCJyZXN1bHRpbmdUcmVlIiwicnVuU3luYyIsInRyZWUyIiwiYWRkUGx1Z2luIiwiYWRkTGlzdCIsImFkZFByZXNldCIsImFkZCIsInZhbHVlMiIsInBsdWdpbiIsInBhcmFtZXRlcnMyIiwicGx1Z2lucyIsInNldHRpbmdzIiwidGhpbmciLCJlbnRyeUluZGV4IiwicHJpbWFyeSIsInJlc3QiLCJjdXJyZW50UHJpbWFyeSIsIm5vZGUiLCJ0eXBlIiwiYXN5bmNOYW1lIiwibG9va3NMaWtlQVZGaWxlIiwiaXNVaW50OEFycmF5MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0Y7QUFVQSxTQUFTckIsV0FBV2pOLElBQUEsRUFBTXdPLFNBQUEsRUFBV3hCLFFBQUEsRUFBVTtFQUM3QyxJQUFJLENBQUNBLFFBQUEsRUFBVTtJQUNiLE1BQU0sSUFBSXpKLEtBQUEsQ0FDUixNQUFNdkQsSUFBQSxHQUFPLDRCQUE0QndPLFNBQUEsR0FBWSxXQUN2RDtFQUNGO0FBQ0Y7QUFNQSxTQUFTMUMsTUFBTTNMLEtBQUEsRUFBTztFQUNwQixPQUFPc08sZUFBQSxDQUFnQnRPLEtBQUssSUFBSUEsS0FBQSxHQUFRLElBQUlvSSxLQUFBLENBQU1wSSxLQUFLO0FBQ3pEO0FBTUEsU0FBU3NPLGdCQUFnQnRPLEtBQUEsRUFBTztFQUM5QixPQUFPd0gsT0FBQSxDQUNMeEgsS0FBQSxJQUNFLE9BQU9BLEtBQUEsS0FBVSxZQUNqQixhQUFhQSxLQUFBLElBQ2IsY0FBY0EsS0FDbEI7QUFDRjtBQU1BLFNBQVMwTSxnQkFBZ0IxTSxLQUFBLEVBQU87RUFDOUIsT0FBTyxPQUFPQSxLQUFBLEtBQVUsWUFBWXVPLGFBQUEsQ0FBYXZPLEtBQUs7QUFDeEQ7QUFVQSxTQUFTdU8sY0FBYXZPLEtBQUEsRUFBTztFQUMzQixPQUFPd0gsT0FBQSxDQUNMeEgsS0FBQSxJQUNFLE9BQU9BLEtBQUEsS0FBVSxZQUNqQixnQkFBZ0JBLEtBQUEsSUFDaEIsZ0JBQWdCQSxLQUNwQjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=