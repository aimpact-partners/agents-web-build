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

// .beyond/uimport/temp/unified.11.0.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdGVtcC91bmlmaWVkLjExLjAuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmovaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdHJvdWdoL2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdmZpbGUtbWVzc2FnZS9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL21pbnBhdGguYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvbWlucHJvYy5icm93c2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZmaWxlL2xpYi9taW51cmwuc2hhcmVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZmaWxlL2xpYi9taW51cmwuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pZmllZC9saWIvY2FsbGFibGUtaW5zdGFuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pZmllZC9saWIvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZV9leHRlbmQiLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJ0b1N0ciIsInRvU3RyaW5nIiwiZGVmaW5lUHJvcGVydHkiLCJnT1BEIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNBcnJheSIsImlzQXJyYXkyIiwiYXJyIiwiQXJyYXkiLCJjYWxsIiwiaXNQbGFpbk9iamVjdDIiLCJpc1BsYWluT2JqZWN0MyIsIm9iaiIsImhhc093bkNvbnN0cnVjdG9yIiwiaGFzSXNQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIiwia2V5Iiwic2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eTIiLCJ0YXJnZXQiLCJvcHRpb25zIiwibmFtZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ2YWx1ZSIsIm5ld1ZhbHVlIiwid3JpdGFibGUiLCJnZXRQcm9wZXJ0eSIsImdldFByb3BlcnR5MiIsImV4dGVuZDIiLCJzcmMiLCJjb3B5IiwiY29weUlzQXJyYXkiLCJjbG9uZSIsImFyZ3VtZW50cyIsImkiLCJsZW5ndGgiLCJkZWVwIiwidW5pZmllZF8xMV8wXzVfZXhwb3J0cyIsIl9fZXhwb3J0IiwidW5pZmllZCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImlzUGxhaW5PYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiaXRlcmF0b3IiLCJ0cm91Z2giLCJmbnMiLCJwaXBlbGluZSIsInJ1biIsInVzZSIsInZhbHVlcyIsIm1pZGRsZXdhcmVJbmRleCIsImNhbGxiYWNrIiwicG9wIiwiVHlwZUVycm9yIiwibmV4dCIsImVycm9yIiwib3V0cHV0IiwiZm4iLCJpbmRleDIiLCJ3cmFwIiwibWlkZGVsd2FyZSIsInB1c2giLCJtaWRkbGV3YXJlIiwiY2FsbGVkIiwid3JhcHBlZCIsInBhcmFtZXRlcnMiLCJmbkV4cGVjdHNDYWxsYmFjayIsInJlc3VsdCIsImRvbmUiLCJhcHBseSIsImV4Y2VwdGlvbiIsInRoZW4iLCJFcnJvciIsInN0cmluZ2lmeVBvc2l0aW9uIiwicG9zaXRpb24iLCJwb2ludCIsInBvaW50MiIsImluZGV4IiwibGluZSIsImNvbHVtbiIsInBvcyIsInN0YXJ0IiwiZW5kIiwiVkZpbGVNZXNzYWdlIiwiY2F1c2VPclJlYXNvbiIsIm9wdGlvbnNPclBhcmVudE9yUGxhY2UiLCJvcmlnaW4iLCJyZWFzb24iLCJsZWdhY3lDYXVzZSIsInBsYWNlIiwiYW5jZXN0b3JzIiwiY2F1c2UiLCJtZXNzYWdlIiwicnVsZUlkIiwic291cmNlIiwiaW5kZXhPZiIsInNsaWNlIiwicGFyZW50IiwiZmF0YWwiLCJmaWxlIiwic3RhY2siLCJhY3R1YWwiLCJleHBlY3RlZCIsIm5vdGUiLCJ1cmwiLCJtaW5wYXRoIiwiYmFzZW5hbWUiLCJkaXJuYW1lIiwiZXh0bmFtZSIsImpvaW4iLCJzZXAiLCJwYXRoIiwiZXh0bmFtZTIiLCJhc3NlcnRQYXRoIiwic2Vlbk5vblNsYXNoIiwiY29kZVBvaW50QXQiLCJmaXJzdE5vblNsYXNoRW5kIiwiZXh0bmFtZUluZGV4IiwidW5tYXRjaGVkU2xhc2giLCJzdGFydFBhcnQiLCJzdGFydERvdCIsInByZURvdFN0YXRlIiwiY29kZSIsInNlZ21lbnRzIiwiam9pbmVkIiwibm9ybWFsaXplIiwiYWJzb2x1dGUiLCJub3JtYWxpemVTdHJpbmciLCJhbGxvd0Fib3ZlUm9vdCIsImxhc3RTZWdtZW50TGVuZ3RoIiwibGFzdFNsYXNoIiwiZG90cyIsImxhc3RTbGFzaEluZGV4IiwibGFzdEluZGV4T2YiLCJKU09OIiwic3RyaW5naWZ5IiwibWlucHJvYyIsImN3ZCIsImlzVXJsIiwiZmlsZVVybE9yUGF0aCIsIkJvb2xlYW4iLCJocmVmIiwicHJvdG9jb2wiLCJhdXRoIiwidXJsVG9QYXRoIiwiVVJMIiwiZ2V0UGF0aEZyb21VUkxQb3NpeCIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJ0aGlyZCIsImRlY29kZVVSSUNvbXBvbmVudCIsIm9yZGVyIiwiVkZpbGUiLCJpc1VpbnQ4QXJyYXkiLCJkYXRhIiwiaGlzdG9yeSIsIm1lc3NhZ2VzIiwibWFwIiwic3RvcmVkIiwiZmllbGQyIiwiZmllbGQiLCJpbmNsdWRlcyIsImJhc2VuYW1lMiIsImFzc2VydE5vbkVtcHR5IiwiYXNzZXJ0UGFydCIsImRpcm5hbWUyIiwiYXNzZXJ0UGF0aDIiLCJzdGVtIiwiZmFpbCIsImluZm8iLCJlbmNvZGluZyIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsInBhcnQiLCJDYWxsYWJsZUluc3RhbmNlIiwicHJvcGVydHkiLCJzZWxmIiwiY29uc3RyIiwicHJvdG8iLCJzZXRQcm90b3R5cGVPZiIsImltcG9ydF9iYWlsIiwicmVxdWlyZSIsImltcG9ydF9leHRlbmQiLCJfX3RvRVNNIiwiaW1wb3J0X2RldmxvcCIsIm93biIsIlByb2Nlc3NvciIsIkNvbXBpbGVyIiwiUGFyc2VyIiwiYXR0YWNoZXJzIiwiY29tcGlsZXIiLCJmcmVlemVJbmRleCIsImZyb3plbiIsIm5hbWVzcGFjZSIsInBhcnNlciIsInRyYW5zZm9ybWVycyIsImRlc3RpbmF0aW9uIiwiYXR0YWNoZXIiLCJkZWZhdWx0IiwiYXNzZXJ0VW5mcm96ZW4iLCJmcmVlemUiLCJ0cmFuc2Zvcm1lciIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwicGFyc2UiLCJyZWFsRmlsZSIsInZmaWxlIiwiYXNzZXJ0UGFyc2VyIiwiU3RyaW5nIiwicHJvY2VzcyIsImFzc2VydENvbXBpbGVyIiwiZXhlY3V0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlVHJlZSIsInRyZWUiLCJmaWxlMiIsInJlYWxEb25lIiwiY29tcGlsZVRyZWUiLCJjb21waWxlUmVzdWx0IiwibG9va3NMaWtlQVZhbHVlIiwib2siLCJwcm9jZXNzU3luYyIsImNvbXBsZXRlIiwiYXNzZXJ0RG9uZSIsImJhaWwiLCJhc3NlcnROb2RlIiwib3V0cHV0VHJlZSIsInJlc3VsdGluZ1RyZWUiLCJydW5TeW5jIiwidHJlZTIiLCJhZGRQbHVnaW4iLCJhZGRMaXN0IiwiYWRkUHJlc2V0IiwiYWRkIiwidmFsdWUyIiwicGx1Z2luIiwicGFyYW1ldGVyczIiLCJwbHVnaW5zIiwic2V0dGluZ3MiLCJ0aGluZyIsImVudHJ5SW5kZXgiLCJwcmltYXJ5IiwicmVzdCIsImN1cnJlbnRQcmltYXJ5Iiwibm9kZSIsInR5cGUiLCJhc3luY05hbWUiLCJsb29rc0xpa2VBVkZpbGUiLCJpc1VpbnQ4QXJyYXkyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ekQ7QUFDRjtBQVVBLFNBQVNyQixXQUFXak4sSUFBQSxFQUFNd08sU0FBQSxFQUFXeEIsUUFBQSxFQUFVO0VBQzdDLElBQUksQ0FBQ0EsUUFBQSxFQUFVO0lBQ2IsTUFBTSxJQUFJekosS0FBQSxDQUNSLE1BQU12RCxJQUFBLEdBQU8sNEJBQTRCd08sU0FBQSxHQUFZLFdBQ3ZEO0VBQ0Y7QUFDRjtBQU1BLFNBQVMxQyxNQUFNM0wsS0FBQSxFQUFPO0VBQ3BCLE9BQU9zTyxlQUFBLENBQWdCdE8sS0FBSyxJQUFJQSxLQUFBLEdBQVEsSUFBSW9JLEtBQUEsQ0FBTXBJLEtBQUs7QUFDekQ7QUFNQSxTQUFTc08sZ0JBQWdCdE8sS0FBQSxFQUFPO0VBQzlCLE9BQU93SCxPQUFBLENBQ0x4SCxLQUFBLElBQ0UsT0FBT0EsS0FBQSxLQUFVLFlBQ2pCLGFBQWFBLEtBQUEsSUFDYixjQUFjQSxLQUNsQjtBQUNGO0FBTUEsU0FBUzBNLGdCQUFnQjFNLEtBQUEsRUFBTztFQUM5QixPQUFPLE9BQU9BLEtBQUEsS0FBVSxZQUFZdU8sYUFBQSxDQUFhdk8sS0FBSztBQUN4RDtBQVVBLFNBQVN1TyxjQUFhdk8sS0FBQSxFQUFPO0VBQzNCLE9BQU93SCxPQUFBLENBQ0x4SCxLQUFBLElBQ0UsT0FBT0EsS0FBQSxLQUFVLFlBQ2pCLGdCQUFnQkEsS0FBQSxJQUNoQixnQkFBZ0JBLEtBQ3BCO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==