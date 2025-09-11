System.register(["bail@2.0.2","devlop@1.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["bail","2.0.2"],["extend","3.0.2"],["devlop","1.1.0"],["is-plain-obj","4.1.0"],["trough","2.2.0"],["unist-util-stringify-position","4.0.0"],["vfile-message","4.0.3"],["vfile","6.0.3"],["unified","11.0.5"]]);
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
    this.file = "";
    this.message = reason;
    this.line = start ? start.line : void 0;
    this.name = stringifyPosition(options.place) || "1:1";
    this.place = options.place || void 0;
    this.reason = this.message;
    this.ruleId = options.ruleId || void 0;
    this.source = options.source || void 0;
    this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
    this.actual = void 0;
    this.expected = void 0;
    this.note = void 0;
    this.url = void 0;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdW5pZmllZC4xMS4wLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Ryb3VnaC9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZmaWxlL2xpYi9taW5wYXRoLmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL21pbnByb2MuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvbWludXJsLnNoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy92ZmlsZS9saWIvbWludXJsLmJyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvdmZpbGUvbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbGliL2NhbGxhYmxlLWluc3RhbmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VuaWZpZWQvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmVfZXh0ZW5kIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9leHRlbmQvaW5kZXguanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImhhc093biIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwidG9TdHIiLCJ0b1N0cmluZyIsImRlZmluZVByb3BlcnR5IiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImlzQXJyYXkiLCJpc0FycmF5MiIsImFyciIsIkFycmF5IiwiY2FsbCIsImlzUGxhaW5PYmplY3QyIiwiaXNQbGFpbk9iamVjdDMiLCJvYmoiLCJoYXNPd25Db25zdHJ1Y3RvciIsImhhc0lzUHJvdG90eXBlT2YiLCJjb25zdHJ1Y3RvciIsImtleSIsInNldFByb3BlcnR5Iiwic2V0UHJvcGVydHkyIiwidGFyZ2V0Iiwib3B0aW9ucyIsIm5hbWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJuZXdWYWx1ZSIsIndyaXRhYmxlIiwiZ2V0UHJvcGVydHkiLCJnZXRQcm9wZXJ0eTIiLCJleHRlbmQyIiwic3JjIiwiY29weSIsImNvcHlJc0FycmF5IiwiY2xvbmUiLCJhcmd1bWVudHMiLCJpIiwibGVuZ3RoIiwiZGVlcCIsInVuaWZpZWRfMTFfMF81X2V4cG9ydHMiLCJfX2V4cG9ydCIsInVuaWZpZWQiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJpc1BsYWluT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIml0ZXJhdG9yIiwidHJvdWdoIiwiZm5zIiwicGlwZWxpbmUiLCJydW4iLCJ1c2UiLCJ2YWx1ZXMiLCJtaWRkbGV3YXJlSW5kZXgiLCJjYWxsYmFjayIsInBvcCIsIlR5cGVFcnJvciIsIm5leHQiLCJlcnJvciIsIm91dHB1dCIsImZuIiwiaW5kZXgyIiwid3JhcCIsIm1pZGRlbHdhcmUiLCJwdXNoIiwibWlkZGxld2FyZSIsImNhbGxlZCIsIndyYXBwZWQiLCJwYXJhbWV0ZXJzIiwiZm5FeHBlY3RzQ2FsbGJhY2siLCJyZXN1bHQiLCJkb25lIiwiYXBwbHkiLCJleGNlcHRpb24iLCJ0aGVuIiwiRXJyb3IiLCJzdHJpbmdpZnlQb3NpdGlvbiIsInBvc2l0aW9uIiwicG9pbnQiLCJwb2ludDIiLCJpbmRleCIsImxpbmUiLCJjb2x1bW4iLCJwb3MiLCJzdGFydCIsImVuZCIsIlZGaWxlTWVzc2FnZSIsImNhdXNlT3JSZWFzb24iLCJvcHRpb25zT3JQYXJlbnRPclBsYWNlIiwib3JpZ2luIiwicmVhc29uIiwibGVnYWN5Q2F1c2UiLCJwbGFjZSIsImFuY2VzdG9ycyIsImNhdXNlIiwibWVzc2FnZSIsInJ1bGVJZCIsInNvdXJjZSIsImluZGV4T2YiLCJzbGljZSIsInBhcmVudCIsImZhdGFsIiwiZmlsZSIsInN0YWNrIiwiYWN0dWFsIiwiZXhwZWN0ZWQiLCJub3RlIiwidXJsIiwibWlucGF0aCIsImJhc2VuYW1lIiwiZGlybmFtZSIsImV4dG5hbWUiLCJqb2luIiwic2VwIiwicGF0aCIsImV4dG5hbWUyIiwiYXNzZXJ0UGF0aCIsInNlZW5Ob25TbGFzaCIsImNvZGVQb2ludEF0IiwiZmlyc3ROb25TbGFzaEVuZCIsImV4dG5hbWVJbmRleCIsInVubWF0Y2hlZFNsYXNoIiwic3RhcnRQYXJ0Iiwic3RhcnREb3QiLCJwcmVEb3RTdGF0ZSIsImNvZGUiLCJzZWdtZW50cyIsImpvaW5lZCIsIm5vcm1hbGl6ZSIsImFic29sdXRlIiwibm9ybWFsaXplU3RyaW5nIiwiYWxsb3dBYm92ZVJvb3QiLCJsYXN0U2VnbWVudExlbmd0aCIsImxhc3RTbGFzaCIsImRvdHMiLCJsYXN0U2xhc2hJbmRleCIsImxhc3RJbmRleE9mIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1pbnByb2MiLCJjd2QiLCJpc1VybCIsImZpbGVVcmxPclBhdGgiLCJCb29sZWFuIiwiaHJlZiIsInByb3RvY29sIiwiYXV0aCIsInVybFRvUGF0aCIsIlVSTCIsImdldFBhdGhGcm9tVVJMUG9zaXgiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidGhpcmQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJvcmRlciIsIlZGaWxlIiwiaXNVaW50OEFycmF5IiwiZGF0YSIsImhpc3RvcnkiLCJtZXNzYWdlcyIsIm1hcCIsInN0b3JlZCIsImZpZWxkMiIsImZpZWxkIiwiaW5jbHVkZXMiLCJiYXNlbmFtZTIiLCJhc3NlcnROb25FbXB0eSIsImFzc2VydFBhcnQiLCJkaXJuYW1lMiIsImFzc2VydFBhdGgyIiwic3RlbSIsImZhaWwiLCJpbmZvIiwiZW5jb2RpbmciLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJwYXJ0IiwiQ2FsbGFibGVJbnN0YW5jZSIsInByb3BlcnR5Iiwic2VsZiIsImNvbnN0ciIsInByb3RvIiwic2V0UHJvdG90eXBlT2YiLCJpbXBvcnRfYmFpbCIsInJlcXVpcmUiLCJpbXBvcnRfZXh0ZW5kIiwiX190b0VTTSIsImltcG9ydF9kZXZsb3AiLCJvd24iLCJQcm9jZXNzb3IiLCJDb21waWxlciIsIlBhcnNlciIsImF0dGFjaGVycyIsImNvbXBpbGVyIiwiZnJlZXplSW5kZXgiLCJmcm96ZW4iLCJuYW1lc3BhY2UiLCJwYXJzZXIiLCJ0cmFuc2Zvcm1lcnMiLCJkZXN0aW5hdGlvbiIsImF0dGFjaGVyIiwiZGVmYXVsdCIsImFzc2VydFVuZnJvemVuIiwiZnJlZXplIiwidHJhbnNmb3JtZXIiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInBhcnNlIiwicmVhbEZpbGUiLCJ2ZmlsZSIsImFzc2VydFBhcnNlciIsIlN0cmluZyIsInByb2Nlc3MiLCJhc3NlcnRDb21waWxlciIsImV4ZWN1dG9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZVRyZWUiLCJ0cmVlIiwiZmlsZTIiLCJyZWFsRG9uZSIsImNvbXBpbGVUcmVlIiwiY29tcGlsZVJlc3VsdCIsImxvb2tzTGlrZUFWYWx1ZSIsIm9rIiwicHJvY2Vzc1N5bmMiLCJjb21wbGV0ZSIsImFzc2VydERvbmUiLCJiYWlsIiwiYXNzZXJ0Tm9kZSIsIm91dHB1dFRyZWUiLCJyZXN1bHRpbmdUcmVlIiwicnVuU3luYyIsInRyZWUyIiwiYWRkUGx1Z2luIiwiYWRkTGlzdCIsImFkZFByZXNldCIsImFkZCIsInZhbHVlMiIsInBsdWdpbiIsInBhcmFtZXRlcnMyIiwicGx1Z2lucyIsInNldHRpbmdzIiwidGhpbmciLCJlbnRyeUluZGV4IiwicHJpbWFyeSIsInJlc3QiLCJjdXJyZW50UHJpbWFyeSIsIm5vZGUiLCJ0eXBlIiwiYXN5bmNOYW1lIiwibG9va3NMaWtlQVZGaWxlIiwiaXNVaW50OEFycmF5MiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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a00sSUFBQSxHQUFPLEdBQUc7RUFFekQ7QUFDRjtBQVVBLFNBQVNyQixXQUFXak4sSUFBQSxFQUFNd08sU0FBQSxFQUFXeEIsUUFBQSxFQUFVO0VBQzdDLElBQUksQ0FBQ0EsUUFBQSxFQUFVO0lBQ2IsTUFBTSxJQUFJekosS0FBQSxDQUNSLE1BQU12RCxJQUFBLEdBQU8sNEJBQTRCd08sU0FBQSxHQUFZLFdBQ3ZEO0VBQ0Y7QUFDRjtBQU1BLFNBQVMxQyxNQUFNM0wsS0FBQSxFQUFPO0VBQ3BCLE9BQU9zTyxlQUFBLENBQWdCdE8sS0FBSyxJQUFJQSxLQUFBLEdBQVEsSUFBSW9JLEtBQUEsQ0FBTXBJLEtBQUs7QUFDekQ7QUFNQSxTQUFTc08sZ0JBQWdCdE8sS0FBQSxFQUFPO0VBQzlCLE9BQU93SCxPQUFBLENBQ0x4SCxLQUFBLElBQ0UsT0FBT0EsS0FBQSxLQUFVLFlBQ2pCLGFBQWFBLEtBQUEsSUFDYixjQUFjQSxLQUNsQjtBQUNGO0FBTUEsU0FBUzBNLGdCQUFnQjFNLEtBQUEsRUFBTztFQUM5QixPQUFPLE9BQU9BLEtBQUEsS0FBVSxZQUFZdU8sYUFBQSxDQUFhdk8sS0FBSztBQUN4RDtBQVVBLFNBQVN1TyxjQUFhdk8sS0FBQSxFQUFPO0VBQzNCLE9BQU93SCxPQUFBLENBQ0x4SCxLQUFBLElBQ0UsT0FBT0EsS0FBQSxLQUFVLFlBQ2pCLGdCQUFnQkEsS0FBQSxJQUNoQixnQkFBZ0JBLEtBQ3BCO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==