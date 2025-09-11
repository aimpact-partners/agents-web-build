System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["openai","4.104.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/openai.4.104.0.js
var openai_4_104_0_exports = {};
__export(openai_4_104_0_exports, {
  APIConnectionError: () => APIConnectionError,
  APIConnectionTimeoutError: () => APIConnectionTimeoutError,
  APIError: () => APIError,
  APIUserAbortError: () => APIUserAbortError,
  AuthenticationError: () => AuthenticationError,
  AzureOpenAI: () => AzureOpenAI,
  BadRequestError: () => BadRequestError,
  ConflictError: () => ConflictError,
  InternalServerError: () => InternalServerError,
  NotFoundError: () => NotFoundError,
  OpenAI: () => OpenAI,
  OpenAIError: () => OpenAIError,
  PermissionDeniedError: () => PermissionDeniedError,
  RateLimitError: () => RateLimitError,
  UnprocessableEntityError: () => UnprocessableEntityError,
  default: () => openai_4_104_0_default,
  fileFromPath: () => fileFromPath,
  toFile: () => toFile
});
module.exports = __toCommonJS(openai_4_104_0_exports);

// node_modules/openai/internal/qs/formats.mjs
var default_format = "RFC3986";
var formatters = {
  RFC1738: v => String(v).replace(/%20/g, "+"),
  RFC3986: v => String(v)
};
var RFC1738 = "RFC1738";
var RFC3986 = "RFC3986";

// node_modules/openai/internal/qs/utils.mjs
var has = Object.prototype.hasOwnProperty;
var is_array = Array.isArray;
var hex_table = (() => {
  const array = [];
  for (let i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
})();
function compact_queue(queue) {
  while (queue.length > 1) {
    const item = queue.pop();
    if (!item) continue;
    const obj = item.obj[item.prop];
    if (is_array(obj)) {
      const compacted = [];
      for (let j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
}
function array_to_object(source, options) {
  const obj = options && options.plainObjects ? /* @__PURE__ */Object.create(null) : {};
  for (let i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
}
function merge(target, source, options = {}) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object") {
    if (is_array(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  let mergeTarget = target;
  if (is_array(target) && !is_array(source)) {
    mergeTarget = array_to_object(target, options);
  }
  if (is_array(target) && is_array(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        const targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function (acc, key) {
    const value = source[key];
    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
}
function assign_single_source(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
}
function decode(str2, _, charset) {
  const strWithoutPlus = str2.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
}
var limit = 1024;
var encode = (str2, _defaultEncoder, charset, _kind, format) => {
  if (str2.length === 0) {
    return str2;
  }
  let string = str2;
  if (typeof str2 === "symbol") {
    string = Symbol.prototype.toString.call(str2);
  } else if (typeof str2 !== "string") {
    string = String(str2);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  let out = "";
  for (let j = 0; j < string.length; j += limit) {
    const segment = string.length >= limit ? string.slice(j, j + limit) : string;
    const arr = [];
    for (let i = 0; i < segment.length; ++i) {
      let c = segment.charCodeAt(i);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === RFC1738 && (c === 40 || c === 41)) {
        arr[arr.length] = segment.charAt(i);
        continue;
      }
      if (c < 128) {
        arr[arr.length] = hex_table[c];
        continue;
      }
      if (c < 2048) {
        arr[arr.length] = hex_table[192 | c >> 6] + hex_table[128 | c & 63];
        continue;
      }
      if (c < 55296 || c >= 57344) {
        arr[arr.length] = hex_table[224 | c >> 12] + hex_table[128 | c >> 6 & 63] + hex_table[128 | c & 63];
        continue;
      }
      i += 1;
      c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
      arr[arr.length] = hex_table[240 | c >> 18] + hex_table[128 | c >> 12 & 63] + hex_table[128 | c >> 6 & 63] + hex_table[128 | c & 63];
    }
    out += arr.join("");
  }
  return out;
};
function compact(value) {
  const queue = [{
    obj: {
      o: value
    },
    prop: "o"
  }];
  const refs = [];
  for (let i = 0; i < queue.length; ++i) {
    const item = queue[i];
    const obj = item.obj[item.prop];
    const keys = Object.keys(obj);
    for (let j = 0; j < keys.length; ++j) {
      const key = keys[j];
      const val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }
  compact_queue(queue);
  return value;
}
function is_regexp(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
}
function is_buffer(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
}
function combine(a, b) {
  return [].concat(a, b);
}
function maybe_map(val, fn) {
  if (is_array(val)) {
    const mapped = [];
    for (let i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
}

// node_modules/openai/internal/qs/stringify.mjs
var has2 = Object.prototype.hasOwnProperty;
var array_prefix_generators = {
  brackets(prefix) {
    return String(prefix) + "[]";
  },
  comma: "comma",
  indices(prefix, key) {
    return String(prefix) + "[" + key + "]";
  },
  repeat(prefix) {
    return String(prefix);
  }
};
var is_array2 = Array.isArray;
var push = Array.prototype.push;
var push_to_array = function (arr, value_or_array) {
  push.apply(arr, is_array2(value_or_array) ? value_or_array : [value_or_array]);
};
var to_ISO = Date.prototype.toISOString;
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: encode,
  encodeValuesOnly: false,
  format: default_format,
  formatter: formatters[default_format],
  indices: false,
  serializeDate(date) {
    return to_ISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
function is_non_nullish_primitive(v) {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
}
var sentinel = {};
function inner_stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
  let obj = object;
  let tmp_sc = sideChannel;
  let step = 0;
  let find_flag = false;
  while ((tmp_sc = tmp_sc.get(sentinel)) !== void 0 && !find_flag) {
    const pos = tmp_sc.get(object);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        find_flag = true;
      }
    }
    if (typeof tmp_sc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate?.(obj);
  } else if (generateArrayPrefix === "comma" && is_array2(obj)) {
    obj = maybe_map(obj, function (value) {
      if (value instanceof Date) {
        return serializeDate?.(value);
      }
      return value;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
    }
    obj = "";
  }
  if (is_non_nullish_primitive(obj) || is_buffer(obj)) {
    if (encoder) {
      const key_value = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
      return [formatter?.(key_value) + "=" + formatter?.(encoder(obj, defaults.encoder, charset, "value", format))];
    }
    return [formatter?.(prefix) + "=" + formatter?.(String(obj))];
  }
  const values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  let obj_keys;
  if (generateArrayPrefix === "comma" && is_array2(obj)) {
    if (encodeValuesOnly && encoder) {
      obj = maybe_map(obj, encoder);
    }
    obj_keys = [{
      value: obj.length > 0 ? obj.join(",") || null : void 0
    }];
  } else if (is_array2(filter)) {
    obj_keys = filter;
  } else {
    const keys = Object.keys(obj);
    obj_keys = sort ? keys.sort(sort) : keys;
  }
  const encoded_prefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
  const adjusted_prefix = commaRoundTrip && is_array2(obj) && obj.length === 1 ? encoded_prefix + "[]" : encoded_prefix;
  if (allowEmptyArrays && is_array2(obj) && obj.length === 0) {
    return adjusted_prefix + "[]";
  }
  for (let j = 0; j < obj_keys.length; ++j) {
    const key = obj_keys[j];
    const value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    const encoded_key = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
    const key_prefix = is_array2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjusted_prefix, encoded_key) : adjusted_prefix : adjusted_prefix + (allowDots ? "." + encoded_key : "[" + encoded_key + "]");
    sideChannel.set(object, step);
    const valueSideChannel = /* @__PURE__ */new WeakMap();
    valueSideChannel.set(sentinel, sideChannel);
    push_to_array(values, inner_stringify(value, key_prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, generateArrayPrefix === "comma" && encodeValuesOnly && is_array2(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
  }
  return values;
}
function normalize_stringify_options(opts = defaults) {
  if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  const charset = opts.charset || defaults.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  let format = default_format;
  if (typeof opts.format !== "undefined") {
    if (!has2.call(formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format = opts.format;
  }
  const formatter = formatters[format];
  let filter = defaults.filter;
  if (typeof opts.filter === "function" || is_array2(opts.filter)) {
    filter = opts.filter;
  }
  let arrayFormat;
  if (opts.arrayFormat && opts.arrayFormat in array_prefix_generators) {
    arrayFormat = opts.arrayFormat;
  } else if ("indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = defaults.arrayFormat;
  }
  if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  const allowDots = typeof opts.allowDots === "undefined" ? !!opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
    allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
    arrayFormat,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    commaRoundTrip: !!opts.commaRoundTrip,
    delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
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
}
function stringify(object, opts = {}) {
  let obj = object;
  const options = normalize_stringify_options(opts);
  let obj_keys;
  let filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (is_array2(options.filter)) {
    filter = options.filter;
    obj_keys = filter;
  }
  const keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  const generateArrayPrefix = array_prefix_generators[options.arrayFormat];
  const commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
  if (!obj_keys) {
    obj_keys = Object.keys(obj);
  }
  if (options.sort) {
    obj_keys.sort(options.sort);
  }
  const sideChannel = /* @__PURE__ */new WeakMap();
  for (let i = 0; i < obj_keys.length; ++i) {
    const key = obj_keys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    push_to_array(keys, inner_stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
  }
  const joined = keys.join(options.delimiter);
  let prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
}

// node_modules/openai/internal/qs/index.mjs
var formats = {
  formatters,
  RFC1738,
  RFC3986,
  default: default_format
};

// node_modules/openai/version.mjs
var VERSION = "4.104.0";

// node_modules/openai/_shims/registry.mjs
var auto = false;
var kind = void 0;
var fetch2 = void 0;
var Request2 = void 0;
var Response2 = void 0;
var Headers2 = void 0;
var FormData2 = void 0;
var Blob2 = void 0;
var File2 = void 0;
var ReadableStream2 = void 0;
var getMultipartRequestOptions = void 0;
var getDefaultAgent = void 0;
var fileFromPath = void 0;
var isFsReadStream = void 0;
function setShims(shims, options = {
  auto: false
}) {
  if (auto) {
    throw new Error(`you must \`import 'openai/shims/${shims.kind}'\` before importing anything else from openai`);
  }
  if (kind) {
    throw new Error(`can't \`import 'openai/shims/${shims.kind}'\` after \`import 'openai/shims/${kind}'\``);
  }
  auto = options.auto;
  kind = shims.kind;
  fetch2 = shims.fetch;
  Request2 = shims.Request;
  Response2 = shims.Response;
  Headers2 = shims.Headers;
  FormData2 = shims.FormData;
  Blob2 = shims.Blob;
  File2 = shims.File;
  ReadableStream2 = shims.ReadableStream;
  getMultipartRequestOptions = shims.getMultipartRequestOptions;
  getDefaultAgent = shims.getDefaultAgent;
  fileFromPath = shims.fileFromPath;
  isFsReadStream = shims.isFsReadStream;
}

// node_modules/openai/_shims/MultipartBody.mjs
var MultipartBody = class {
  constructor(body) {
    this.body = body;
  }
  get [Symbol.toStringTag]() {
    return "MultipartBody";
  }
};

// node_modules/openai/_shims/web-runtime.mjs
function getRuntime({
  manuallyImported
} = {}) {
  const recommendation = manuallyImported ? `You may need to use polyfills` : `Add one of these imports before your first \`import \u2026 from 'openai'\`:
- \`import 'openai/shims/node'\` (if you're running on Node)
- \`import 'openai/shims/web'\` (otherwise)
`;
  let _fetch, _Request, _Response, _Headers;
  try {
    _fetch = fetch;
    _Request = Request;
    _Response = Response;
    _Headers = Headers;
  } catch (error) {
    throw new Error(`this environment is missing the following Web Fetch API type: ${error.message}. ${recommendation}`);
  }
  return {
    kind: "web",
    fetch: _fetch,
    Request: _Request,
    Response: _Response,
    Headers: _Headers,
    FormData: typeof FormData !== "undefined" ? FormData : class FormData {
      constructor() {
        throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${recommendation}`);
      }
    },
    Blob: typeof Blob !== "undefined" ? Blob : class Blob {
      constructor() {
        throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${recommendation}`);
      }
    },
    File: typeof File !== "undefined" ? File : class File {
      constructor() {
        throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${recommendation}`);
      }
    },
    ReadableStream: typeof ReadableStream !== "undefined" ? ReadableStream : class ReadableStream {
      constructor() {
        throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${recommendation}`);
      }
    },
    getMultipartRequestOptions: async (form, opts) => ({
      ...opts,
      body: new MultipartBody(form)
    }),
    getDefaultAgent: url => void 0,
    fileFromPath: () => {
      throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads");
    },
    isFsReadStream: value => false
  };
}

// node_modules/openai/_shims/index.mjs
var init = () => {
  if (!kind) setShims(getRuntime(), {
    auto: true
  });
};
init();

// node_modules/openai/error.mjs
var OpenAIError = class extends Error {};
var APIError = class extends OpenAIError {
  constructor(status, error, message, headers) {
    super(`${APIError.makeMessage(status, error, message)}`);
    this.status = status;
    this.headers = headers;
    this.request_id = headers?.["x-request-id"];
    this.error = error;
    const data = error;
    this.code = data?.["code"];
    this.param = data?.["param"];
    this.type = data?.["type"];
  }
  static makeMessage(status, error, message) {
    const msg = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
    if (status && msg) {
      return `${status} ${msg}`;
    }
    if (status) {
      return `${status} status code (no body)`;
    }
    if (msg) {
      return msg;
    }
    return "(no status code or body)";
  }
  static generate(status, errorResponse, message, headers) {
    if (!status || !headers) {
      return new APIConnectionError({
        message,
        cause: castToError(errorResponse)
      });
    }
    const error = errorResponse?.["error"];
    if (status === 400) {
      return new BadRequestError(status, error, message, headers);
    }
    if (status === 401) {
      return new AuthenticationError(status, error, message, headers);
    }
    if (status === 403) {
      return new PermissionDeniedError(status, error, message, headers);
    }
    if (status === 404) {
      return new NotFoundError(status, error, message, headers);
    }
    if (status === 409) {
      return new ConflictError(status, error, message, headers);
    }
    if (status === 422) {
      return new UnprocessableEntityError(status, error, message, headers);
    }
    if (status === 429) {
      return new RateLimitError(status, error, message, headers);
    }
    if (status >= 500) {
      return new InternalServerError(status, error, message, headers);
    }
    return new APIError(status, error, message, headers);
  }
};
var APIUserAbortError = class extends APIError {
  constructor({
    message
  } = {}) {
    super(void 0, void 0, message || "Request was aborted.", void 0);
  }
};
var APIConnectionError = class extends APIError {
  constructor({
    message,
    cause
  }) {
    super(void 0, void 0, message || "Connection error.", void 0);
    if (cause) this.cause = cause;
  }
};
var APIConnectionTimeoutError = class extends APIConnectionError {
  constructor({
    message
  } = {}) {
    super({
      message: message ?? "Request timed out."
    });
  }
};
var BadRequestError = class extends APIError {};
var AuthenticationError = class extends APIError {};
var PermissionDeniedError = class extends APIError {};
var NotFoundError = class extends APIError {};
var ConflictError = class extends APIError {};
var UnprocessableEntityError = class extends APIError {};
var RateLimitError = class extends APIError {};
var InternalServerError = class extends APIError {};
var LengthFinishReasonError = class extends OpenAIError {
  constructor() {
    super(`Could not parse response content as the length limit was reached`);
  }
};
var ContentFilterFinishReasonError = class extends OpenAIError {
  constructor() {
    super(`Could not parse response content as the request was rejected by the content filter`);
  }
};

// node_modules/openai/internal/decoders/line.mjs
var __classPrivateFieldSet = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LineDecoder_carriageReturnIndex;
var LineDecoder = class {
  constructor() {
    _LineDecoder_carriageReturnIndex.set(this, void 0);
    this.buffer = new Uint8Array();
    __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
  }
  decode(chunk) {
    if (chunk == null) {
      return [];
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? new TextEncoder().encode(chunk) : chunk;
    let newData = new Uint8Array(this.buffer.length + binaryChunk.length);
    newData.set(this.buffer);
    newData.set(binaryChunk, this.buffer.length);
    this.buffer = newData;
    const lines = [];
    let patternIndex;
    while ((patternIndex = findNewlineIndex(this.buffer, __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f"))) != null) {
      if (patternIndex.carriage && __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") == null) {
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, patternIndex.index, "f");
        continue;
      }
      if (__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") != null && (patternIndex.index !== __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") + 1 || patternIndex.carriage)) {
        lines.push(this.decodeText(this.buffer.slice(0, __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") - 1)));
        this.buffer = this.buffer.slice(__classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f"));
        __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
        continue;
      }
      const endIndex = __classPrivateFieldGet(this, _LineDecoder_carriageReturnIndex, "f") !== null ? patternIndex.preceding - 1 : patternIndex.preceding;
      const line = this.decodeText(this.buffer.slice(0, endIndex));
      lines.push(line);
      this.buffer = this.buffer.slice(patternIndex.index);
      __classPrivateFieldSet(this, _LineDecoder_carriageReturnIndex, null, "f");
    }
    return lines;
  }
  decodeText(bytes) {
    if (bytes == null) return "";
    if (typeof bytes === "string") return bytes;
    if (typeof Buffer !== "undefined") {
      if (bytes instanceof Buffer) {
        return bytes.toString();
      }
      if (bytes instanceof Uint8Array) {
        return Buffer.from(bytes).toString();
      }
      throw new OpenAIError(`Unexpected: received non-Uint8Array (${bytes.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`);
    }
    if (typeof TextDecoder !== "undefined") {
      if (bytes instanceof Uint8Array || bytes instanceof ArrayBuffer) {
        this.textDecoder ?? (this.textDecoder = new TextDecoder("utf8"));
        return this.textDecoder.decode(bytes);
      }
      throw new OpenAIError(`Unexpected: received non-Uint8Array/ArrayBuffer (${bytes.constructor.name}) in a web platform. Please report this error.`);
    }
    throw new OpenAIError(`Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.`);
  }
  flush() {
    if (!this.buffer.length) {
      return [];
    }
    return this.decode("\n");
  }
};
_LineDecoder_carriageReturnIndex = /* @__PURE__ */new WeakMap();
LineDecoder.NEWLINE_CHARS = /* @__PURE__ */new Set(["\n", "\r"]);
LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function findNewlineIndex(buffer, startIndex) {
  const newline = 10;
  const carriage = 13;
  for (let i = startIndex ?? 0; i < buffer.length; i++) {
    if (buffer[i] === newline) {
      return {
        preceding: i,
        index: i + 1,
        carriage: false
      };
    }
    if (buffer[i] === carriage) {
      return {
        preceding: i,
        index: i + 1,
        carriage: true
      };
    }
  }
  return null;
}
function findDoubleNewlineIndex(buffer) {
  const newline = 10;
  const carriage = 13;
  for (let i = 0; i < buffer.length - 1; i++) {
    if (buffer[i] === newline && buffer[i + 1] === newline) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === carriage) {
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === newline && i + 3 < buffer.length && buffer[i + 2] === carriage && buffer[i + 3] === newline) {
      return i + 4;
    }
  }
  return -1;
}

// node_modules/openai/internal/stream-utils.mjs
function ReadableStreamToAsyncIterable(stream) {
  if (stream[Symbol.asyncIterator]) return stream;
  const reader = stream.getReader();
  return {
    async next() {
      try {
        const result = await reader.read();
        if (result?.done) reader.releaseLock();
        return result;
      } catch (e) {
        reader.releaseLock();
        throw e;
      }
    },
    async return() {
      const cancelPromise = reader.cancel();
      reader.releaseLock();
      await cancelPromise;
      return {
        done: true,
        value: void 0
      };
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}

// node_modules/openai/streaming.mjs
var Stream = class {
  constructor(iterator, controller) {
    this.iterator = iterator;
    this.controller = controller;
  }
  static fromSSEResponse(response, controller) {
    let consumed = false;
    async function* iterator() {
      if (consumed) {
        throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      }
      consumed = true;
      let done = false;
      try {
        for await (const sse of _iterSSEMessages(response, controller)) {
          if (done) continue;
          if (sse.data.startsWith("[DONE]")) {
            done = true;
            continue;
          }
          if (sse.event === null || sse.event.startsWith("response.") || sse.event.startsWith("transcript.")) {
            let data;
            try {
              data = JSON.parse(sse.data);
            } catch (e) {
              console.error(`Could not parse message into JSON:`, sse.data);
              console.error(`From chunk:`, sse.raw);
              throw e;
            }
            if (data && data.error) {
              throw new APIError(void 0, data.error, void 0, createResponseHeaders(response.headers));
            }
            yield data;
          } else {
            let data;
            try {
              data = JSON.parse(sse.data);
            } catch (e) {
              console.error(`Could not parse message into JSON:`, sse.data);
              console.error(`From chunk:`, sse.raw);
              throw e;
            }
            if (sse.event == "error") {
              throw new APIError(void 0, data.error, data.message, void 0);
            }
            yield {
              event: sse.event,
              data
            };
          }
        }
        done = true;
      } catch (e) {
        if (e instanceof Error && e.name === "AbortError") return;
        throw e;
      } finally {
        if (!done) controller.abort();
      }
    }
    return new Stream(iterator, controller);
  }
  static fromReadableStream(readableStream, controller) {
    let consumed = false;
    async function* iterLines() {
      const lineDecoder = new LineDecoder();
      const iter = ReadableStreamToAsyncIterable(readableStream);
      for await (const chunk of iter) {
        for (const line of lineDecoder.decode(chunk)) {
          yield line;
        }
      }
      for (const line of lineDecoder.flush()) {
        yield line;
      }
    }
    async function* iterator() {
      if (consumed) {
        throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      }
      consumed = true;
      let done = false;
      try {
        for await (const line of iterLines()) {
          if (done) continue;
          if (line) yield JSON.parse(line);
        }
        done = true;
      } catch (e) {
        if (e instanceof Error && e.name === "AbortError") return;
        throw e;
      } finally {
        if (!done) controller.abort();
      }
    }
    return new Stream(iterator, controller);
  }
  [Symbol.asyncIterator]() {
    return this.iterator();
  }
  tee() {
    const left = [];
    const right = [];
    const iterator = this.iterator();
    const teeIterator = queue => {
      return {
        next: () => {
          if (queue.length === 0) {
            const result = iterator.next();
            left.push(result);
            right.push(result);
          }
          return queue.shift();
        }
      };
    };
    return [new Stream(() => teeIterator(left), this.controller), new Stream(() => teeIterator(right), this.controller)];
  }
  toReadableStream() {
    const self = this;
    let iter;
    const encoder = new TextEncoder();
    return new ReadableStream2({
      async start() {
        iter = self[Symbol.asyncIterator]();
      },
      async pull(ctrl) {
        try {
          const {
            value,
            done
          } = await iter.next();
          if (done) return ctrl.close();
          const bytes = encoder.encode(JSON.stringify(value) + "\n");
          ctrl.enqueue(bytes);
        } catch (err) {
          ctrl.error(err);
        }
      },
      async cancel() {
        await iter.return?.();
      }
    });
  }
};
async function* _iterSSEMessages(response, controller) {
  if (!response.body) {
    controller.abort();
    throw new OpenAIError(`Attempted to iterate over a response with no body`);
  }
  const sseDecoder = new SSEDecoder();
  const lineDecoder = new LineDecoder();
  const iter = ReadableStreamToAsyncIterable(response.body);
  for await (const sseChunk of iterSSEChunks(iter)) {
    for (const line of lineDecoder.decode(sseChunk)) {
      const sse = sseDecoder.decode(line);
      if (sse) yield sse;
    }
  }
  for (const line of lineDecoder.flush()) {
    const sse = sseDecoder.decode(line);
    if (sse) yield sse;
  }
}
async function* iterSSEChunks(iterator) {
  let data = new Uint8Array();
  for await (const chunk of iterator) {
    if (chunk == null) {
      continue;
    }
    const binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === "string" ? new TextEncoder().encode(chunk) : chunk;
    let newData = new Uint8Array(data.length + binaryChunk.length);
    newData.set(data);
    newData.set(binaryChunk, data.length);
    data = newData;
    let patternIndex;
    while ((patternIndex = findDoubleNewlineIndex(data)) !== -1) {
      yield data.slice(0, patternIndex);
      data = data.slice(patternIndex);
    }
  }
  if (data.length > 0) {
    yield data;
  }
}
var SSEDecoder = class {
  constructor() {
    this.event = null;
    this.data = [];
    this.chunks = [];
  }
  decode(line) {
    if (line.endsWith("\r")) {
      line = line.substring(0, line.length - 1);
    }
    if (!line) {
      if (!this.event && !this.data.length) return null;
      const sse = {
        event: this.event,
        data: this.data.join("\n"),
        raw: this.chunks
      };
      this.event = null;
      this.data = [];
      this.chunks = [];
      return sse;
    }
    this.chunks.push(line);
    if (line.startsWith(":")) {
      return null;
    }
    let [fieldname, _, value] = partition(line, ":");
    if (value.startsWith(" ")) {
      value = value.substring(1);
    }
    if (fieldname === "event") {
      this.event = value;
    } else if (fieldname === "data") {
      this.data.push(value);
    }
    return null;
  }
};
function partition(str2, delimiter) {
  const index = str2.indexOf(delimiter);
  if (index !== -1) {
    return [str2.substring(0, index), delimiter, str2.substring(index + delimiter.length)];
  }
  return [str2, "", ""];
}

// node_modules/openai/uploads.mjs
var isResponseLike = value => value != null && typeof value === "object" && typeof value.url === "string" && typeof value.blob === "function";
var isFileLike = value => value != null && typeof value === "object" && typeof value.name === "string" && typeof value.lastModified === "number" && isBlobLike(value);
var isBlobLike = value => value != null && typeof value === "object" && typeof value.size === "number" && typeof value.type === "string" && typeof value.text === "function" && typeof value.slice === "function" && typeof value.arrayBuffer === "function";
var isUploadable = value => {
  return isFileLike(value) || isResponseLike(value) || isFsReadStream(value);
};
async function toFile(value, name, options) {
  value = await value;
  if (isFileLike(value)) {
    return value;
  }
  if (isResponseLike(value)) {
    const blob = await value.blob();
    name || (name = new URL(value.url).pathname.split(/[\\/]/).pop() ?? "unknown_file");
    const data = isBlobLike(blob) ? [await blob.arrayBuffer()] : [blob];
    return new File2(data, name, options);
  }
  const bits = await getBytes(value);
  name || (name = getName(value) ?? "unknown_file");
  if (!options?.type) {
    const type = bits[0]?.type;
    if (typeof type === "string") {
      options = {
        ...options,
        type
      };
    }
  }
  return new File2(bits, name, options);
}
async function getBytes(value) {
  let parts = [];
  if (typeof value === "string" || ArrayBuffer.isView(value) || value instanceof ArrayBuffer) {
    parts.push(value);
  } else if (isBlobLike(value)) {
    parts.push(await value.arrayBuffer());
  } else if (isAsyncIterableIterator(value)) {
    for await (const chunk of value) {
      parts.push(chunk);
    }
  } else {
    throw new Error(`Unexpected data type: ${typeof value}; constructor: ${value?.constructor?.name}; props: ${propsForError(value)}`);
  }
  return parts;
}
function propsForError(value) {
  const props = Object.getOwnPropertyNames(value);
  return `[${props.map(p => `"${p}"`).join(", ")}]`;
}
function getName(value) {
  return getStringFromMaybeBuffer(value.name) || getStringFromMaybeBuffer(value.filename) || getStringFromMaybeBuffer(value.path)?.split(/[\\/]/).pop();
}
var getStringFromMaybeBuffer = x => {
  if (typeof x === "string") return x;
  if (typeof Buffer !== "undefined" && x instanceof Buffer) return String(x);
  return void 0;
};
var isAsyncIterableIterator = value => value != null && typeof value === "object" && typeof value[Symbol.asyncIterator] === "function";
var isMultipartBody = body => body && typeof body === "object" && body.body && body[Symbol.toStringTag] === "MultipartBody";
var maybeMultipartFormRequestOptions = async opts => {
  if (!hasUploadableValue(opts.body)) return opts;
  const form = await createForm(opts.body);
  return getMultipartRequestOptions(form, opts);
};
var multipartFormRequestOptions = async opts => {
  const form = await createForm(opts.body);
  return getMultipartRequestOptions(form, opts);
};
var createForm = async body => {
  const form = new FormData2();
  await Promise.all(Object.entries(body || {}).map(([key, value]) => addFormValue(form, key, value)));
  return form;
};
var hasUploadableValue = value => {
  if (isUploadable(value)) return true;
  if (Array.isArray(value)) return value.some(hasUploadableValue);
  if (value && typeof value === "object") {
    for (const k in value) {
      if (hasUploadableValue(value[k])) return true;
    }
  }
  return false;
};
var addFormValue = async (form, key, value) => {
  if (value === void 0) return;
  if (value == null) {
    throw new TypeError(`Received null for "${key}"; to pass null in FormData, you must use the string 'null'`);
  }
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    form.append(key, String(value));
  } else if (isUploadable(value)) {
    const file = await toFile(value);
    form.append(key, file);
  } else if (Array.isArray(value)) {
    await Promise.all(value.map(entry => addFormValue(form, key + "[]", entry)));
  } else if (typeof value === "object") {
    await Promise.all(Object.entries(value).map(([name, prop]) => addFormValue(form, `${key}[${name}]`, prop)));
  } else {
    throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${value} instead`);
  }
};

// node_modules/openai/core.mjs
var __classPrivateFieldSet2 = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractPage_client;
init();
async function defaultParseResponse(props) {
  const {
    response
  } = props;
  if (props.options.stream) {
    debug("response", response.status, response.url, response.headers, response.body);
    if (props.options.__streamClass) {
      return props.options.__streamClass.fromSSEResponse(response, props.controller);
    }
    return Stream.fromSSEResponse(response, props.controller);
  }
  if (response.status === 204) {
    return null;
  }
  if (props.options.__binaryResponse) {
    return response;
  }
  const contentType = response.headers.get("content-type");
  const mediaType = contentType?.split(";")[0]?.trim();
  const isJSON = mediaType?.includes("application/json") || mediaType?.endsWith("+json");
  if (isJSON) {
    const json = await response.json();
    debug("response", response.status, response.url, response.headers, json);
    return _addRequestID(json, response);
  }
  const text = await response.text();
  debug("response", response.status, response.url, response.headers, text);
  return text;
}
function _addRequestID(value, response) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  return Object.defineProperty(value, "_request_id", {
    value: response.headers.get("x-request-id"),
    enumerable: false
  });
}
var APIPromise = class extends Promise {
  constructor(responsePromise, parseResponse2 = defaultParseResponse) {
    super(resolve => {
      resolve(null);
    });
    this.responsePromise = responsePromise;
    this.parseResponse = parseResponse2;
  }
  _thenUnwrap(transform) {
    return new APIPromise(this.responsePromise, async props => _addRequestID(transform(await this.parseResponse(props), props), props.response));
  }
  asResponse() {
    return this.responsePromise.then(p => p.response);
  }
  async withResponse() {
    const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
    return {
      data,
      response,
      request_id: response.headers.get("x-request-id")
    };
  }
  parse() {
    if (!this.parsedPromise) {
      this.parsedPromise = this.responsePromise.then(this.parseResponse);
    }
    return this.parsedPromise;
  }
  then(onfulfilled, onrejected) {
    return this.parse().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.parse().catch(onrejected);
  }
  finally(onfinally) {
    return this.parse().finally(onfinally);
  }
};
var APIClient = class {
  constructor({
    baseURL,
    maxRetries = 2,
    timeout = 6e5,
    httpAgent,
    fetch: overriddenFetch
  }) {
    this.baseURL = baseURL;
    this.maxRetries = validatePositiveInteger("maxRetries", maxRetries);
    this.timeout = validatePositiveInteger("timeout", timeout);
    this.httpAgent = httpAgent;
    this.fetch = overriddenFetch ?? fetch2;
  }
  authHeaders(opts) {
    return {};
  }
  defaultHeaders(opts) {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "User-Agent": this.getUserAgent(),
      ...getPlatformHeaders(),
      ...this.authHeaders(opts)
    };
  }
  validateHeaders(headers, customHeaders) {}
  defaultIdempotencyKey() {
    return `stainless-node-retry-${uuid4()}`;
  }
  get(path, opts) {
    return this.methodRequest("get", path, opts);
  }
  post(path, opts) {
    return this.methodRequest("post", path, opts);
  }
  patch(path, opts) {
    return this.methodRequest("patch", path, opts);
  }
  put(path, opts) {
    return this.methodRequest("put", path, opts);
  }
  delete(path, opts) {
    return this.methodRequest("delete", path, opts);
  }
  methodRequest(method, path, opts) {
    return this.request(Promise.resolve(opts).then(async opts2 => {
      const body = opts2 && isBlobLike(opts2?.body) ? new DataView(await opts2.body.arrayBuffer()) : opts2?.body instanceof DataView ? opts2.body : opts2?.body instanceof ArrayBuffer ? new DataView(opts2.body) : opts2 && ArrayBuffer.isView(opts2?.body) ? new DataView(opts2.body.buffer) : opts2?.body;
      return {
        method,
        path,
        ...opts2,
        body
      };
    }));
  }
  getAPIList(path, Page2, opts) {
    return this.requestAPIList(Page2, {
      method: "get",
      path,
      ...opts
    });
  }
  calculateContentLength(body) {
    if (typeof body === "string") {
      if (typeof Buffer !== "undefined") {
        return Buffer.byteLength(body, "utf8").toString();
      }
      if (typeof TextEncoder !== "undefined") {
        const encoder = new TextEncoder();
        const encoded = encoder.encode(body);
        return encoded.length.toString();
      }
    } else if (ArrayBuffer.isView(body)) {
      return body.byteLength.toString();
    }
    return null;
  }
  buildRequest(inputOptions, {
    retryCount = 0
  } = {}) {
    const options = {
      ...inputOptions
    };
    const {
      method,
      path,
      query,
      headers = {}
    } = options;
    const body = ArrayBuffer.isView(options.body) || options.__binaryRequest && typeof options.body === "string" ? options.body : isMultipartBody(options.body) ? options.body.body : options.body ? JSON.stringify(options.body, null, 2) : null;
    const contentLength = this.calculateContentLength(body);
    const url = this.buildURL(path, query);
    if ("timeout" in options) validatePositiveInteger("timeout", options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const httpAgent = options.httpAgent ?? this.httpAgent ?? getDefaultAgent(url);
    const minAgentTimeout = options.timeout + 1e3;
    if (typeof httpAgent?.options?.timeout === "number" && minAgentTimeout > (httpAgent.options.timeout ?? 0)) {
      httpAgent.options.timeout = minAgentTimeout;
    }
    if (this.idempotencyHeader && method !== "get") {
      if (!inputOptions.idempotencyKey) inputOptions.idempotencyKey = this.defaultIdempotencyKey();
      headers[this.idempotencyHeader] = inputOptions.idempotencyKey;
    }
    const reqHeaders = this.buildHeaders({
      options,
      headers,
      contentLength,
      retryCount
    });
    const req = {
      method,
      ...(body && {
        body
      }),
      headers: reqHeaders,
      ...(httpAgent && {
        agent: httpAgent
      }),
      signal: options.signal ?? null
    };
    return {
      req,
      url,
      timeout: options.timeout
    };
  }
  buildHeaders({
    options,
    headers,
    contentLength,
    retryCount
  }) {
    const reqHeaders = {};
    if (contentLength) {
      reqHeaders["content-length"] = contentLength;
    }
    const defaultHeaders = this.defaultHeaders(options);
    applyHeadersMut(reqHeaders, defaultHeaders);
    applyHeadersMut(reqHeaders, headers);
    if (isMultipartBody(options.body) && kind !== "node") {
      delete reqHeaders["content-type"];
    }
    if (getHeader(defaultHeaders, "x-stainless-retry-count") === void 0 && getHeader(headers, "x-stainless-retry-count") === void 0) {
      reqHeaders["x-stainless-retry-count"] = String(retryCount);
    }
    if (getHeader(defaultHeaders, "x-stainless-timeout") === void 0 && getHeader(headers, "x-stainless-timeout") === void 0 && options.timeout) {
      reqHeaders["x-stainless-timeout"] = String(Math.trunc(options.timeout / 1e3));
    }
    this.validateHeaders(reqHeaders, headers);
    return reqHeaders;
  }
  async prepareOptions(options) {}
  async prepareRequest(request, {
    url,
    options
  }) {}
  parseHeaders(headers) {
    return !headers ? {} : Symbol.iterator in headers ? Object.fromEntries(Array.from(headers).map(header => [...header])) : {
      ...headers
    };
  }
  makeStatusError(status, error, message, headers) {
    return APIError.generate(status, error, message, headers);
  }
  request(options, remainingRetries = null) {
    return new APIPromise(this.makeRequest(options, remainingRetries));
  }
  async makeRequest(optionsInput, retriesRemaining) {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }
    await this.prepareOptions(options);
    const {
      req,
      url,
      timeout
    } = this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining
    });
    await this.prepareRequest(req, {
      url,
      options
    });
    debug("request", url, options, req.headers);
    if (options.signal?.aborted) {
      throw new APIUserAbortError();
    }
    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    if (response instanceof Error) {
      if (options.signal?.aborted) {
        throw new APIUserAbortError();
      }
      if (retriesRemaining) {
        return this.retryRequest(options, retriesRemaining);
      }
      if (response.name === "AbortError") {
        throw new APIConnectionTimeoutError();
      }
      throw new APIConnectionError({
        cause: response
      });
    }
    const responseHeaders = createResponseHeaders(response.headers);
    if (!response.ok) {
      if (retriesRemaining && this.shouldRetry(response)) {
        const retryMessage2 = `retrying, ${retriesRemaining} attempts remaining`;
        debug(`response (error; ${retryMessage2})`, response.status, url, responseHeaders);
        return this.retryRequest(options, retriesRemaining, responseHeaders);
      }
      const errText = await response.text().catch(e => castToError(e).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? void 0 : errText;
      const retryMessage = retriesRemaining ? `(error; no more retries left)` : `(error; not retryable)`;
      debug(`response (error; ${retryMessage})`, response.status, url, responseHeaders, errMessage);
      const err = this.makeStatusError(response.status, errJSON, errMessage, responseHeaders);
      throw err;
    }
    return {
      response,
      options,
      controller
    };
  }
  requestAPIList(Page2, options) {
    const request = this.makeRequest(options, null);
    return new PagePromise(this, request, Page2);
  }
  buildURL(path, query) {
    const url = isAbsoluteURL(path) ? new URL(path) : new URL(this.baseURL + (this.baseURL.endsWith("/") && path.startsWith("/") ? path.slice(1) : path));
    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = {
        ...defaultQuery,
        ...query
      };
    }
    if (typeof query === "object" && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }
    return url.toString();
  }
  stringifyQuery(query) {
    return Object.entries(query).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
      if (value === null) {
        return `${encodeURIComponent(key)}=`;
      }
      throw new OpenAIError(`Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`);
    }).join("&");
  }
  async fetchWithTimeout(url, init2, ms, controller) {
    const {
      signal,
      ...options
    } = init2 || {};
    if (signal) signal.addEventListener("abort", () => controller.abort());
    const timeout = setTimeout(() => controller.abort(), ms);
    const fetchOptions = {
      signal: controller.signal,
      ...options
    };
    if (fetchOptions.method) {
      fetchOptions.method = fetchOptions.method.toUpperCase();
    }
    return this.fetch.call(void 0, url, fetchOptions).finally(() => {
      clearTimeout(timeout);
    });
  }
  shouldRetry(response) {
    const shouldRetryHeader = response.headers.get("x-should-retry");
    if (shouldRetryHeader === "true") return true;
    if (shouldRetryHeader === "false") return false;
    if (response.status === 408) return true;
    if (response.status === 409) return true;
    if (response.status === 429) return true;
    if (response.status >= 500) return true;
    return false;
  }
  async retryRequest(options, retriesRemaining, responseHeaders) {
    let timeoutMillis;
    const retryAfterMillisHeader = responseHeaders?.["retry-after-ms"];
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }
    const retryAfterHeader = responseHeaders?.["retry-after"];
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1e3;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1e3)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);
    return this.makeRequest(options, retriesRemaining - 1);
  }
  calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8;
    const numRetries = maxRetries - retriesRemaining;
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
    const jitter = 1 - Math.random() * 0.25;
    return sleepSeconds * jitter * 1e3;
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${VERSION}`;
  }
};
var AbstractPage = class {
  constructor(client, response, body, options) {
    _AbstractPage_client.set(this, void 0);
    __classPrivateFieldSet2(this, _AbstractPage_client, client, "f");
    this.options = options;
    this.response = response;
    this.body = body;
  }
  hasNextPage() {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageInfo() != null;
  }
  async getNextPage() {
    const nextInfo = this.nextPageInfo();
    if (!nextInfo) {
      throw new OpenAIError("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    }
    const nextOptions = {
      ...this.options
    };
    if ("params" in nextInfo && typeof nextOptions.query === "object") {
      nextOptions.query = {
        ...nextOptions.query,
        ...nextInfo.params
      };
    } else if ("url" in nextInfo) {
      const params = [...Object.entries(nextOptions.query || {}), ...nextInfo.url.searchParams.entries()];
      for (const [key, value] of params) {
        nextInfo.url.searchParams.set(key, value);
      }
      nextOptions.query = void 0;
      nextOptions.path = nextInfo.url.toString();
    }
    return await __classPrivateFieldGet2(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
  }
  async *iterPages() {
    let page = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }
  async *[(_AbstractPage_client = /* @__PURE__ */new WeakMap(), Symbol.asyncIterator)]() {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
};
var PagePromise = class extends APIPromise {
  constructor(client, request, Page2) {
    super(request, async props => new Page2(client, props.response, await defaultParseResponse(props), props.options));
  }
  async *[Symbol.asyncIterator]() {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
};
var createResponseHeaders = headers => {
  return new Proxy(Object.fromEntries(headers.entries()), {
    get(target, name) {
      const key = name.toString();
      return target[key.toLowerCase()] || target[key];
    }
  });
};
var requestOptionsKeys = {
  method: true,
  path: true,
  query: true,
  body: true,
  headers: true,
  maxRetries: true,
  stream: true,
  timeout: true,
  httpAgent: true,
  signal: true,
  idempotencyKey: true,
  __metadata: true,
  __binaryRequest: true,
  __binaryResponse: true,
  __streamClass: true
};
var isRequestOptions = obj => {
  return typeof obj === "object" && obj !== null && !isEmptyObj(obj) && Object.keys(obj).every(k => hasOwn(requestOptionsKeys, k));
};
var getPlatformProperties = () => {
  if (typeof Deno !== "undefined" && Deno.build != null) {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(Deno.build.os),
      "X-Stainless-Arch": normalizeArch(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
    };
  }
  if (typeof EdgeRuntime !== "undefined") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": process.version
    };
  }
  if (Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]") {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": normalizePlatform(process.platform),
      "X-Stainless-Arch": normalizeArch(process.arch),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": process.version
    };
  }
  const browserInfo = getBrowserInfo();
  if (browserInfo) {
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${browserInfo.browser}`,
      "X-Stainless-Runtime-Version": browserInfo.version
    };
  }
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": VERSION,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown"
  };
};
function getBrowserInfo() {
  if (typeof navigator === "undefined" || !navigator) {
    return null;
  }
  const browserPatterns = [{
    key: "edge",
    pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "ie",
    pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "chrome",
    pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "firefox",
    pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: "safari",
    pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
  }];
  for (const {
    key,
    pattern
  } of browserPatterns) {
    const match = pattern.exec(navigator.userAgent);
    if (match) {
      const major = match[1] || 0;
      const minor = match[2] || 0;
      const patch = match[3] || 0;
      return {
        browser: key,
        version: `${major}.${minor}.${patch}`
      };
    }
  }
  return null;
}
var normalizeArch = arch => {
  if (arch === "x32") return "x32";
  if (arch === "x86_64" || arch === "x64") return "x64";
  if (arch === "arm") return "arm";
  if (arch === "aarch64" || arch === "arm64") return "arm64";
  if (arch) return `other:${arch}`;
  return "unknown";
};
var normalizePlatform = platform => {
  platform = platform.toLowerCase();
  if (platform.includes("ios")) return "iOS";
  if (platform === "android") return "Android";
  if (platform === "darwin") return "MacOS";
  if (platform === "win32") return "Windows";
  if (platform === "freebsd") return "FreeBSD";
  if (platform === "openbsd") return "OpenBSD";
  if (platform === "linux") return "Linux";
  if (platform) return `Other:${platform}`;
  return "Unknown";
};
var _platformHeaders;
var getPlatformHeaders = () => {
  return _platformHeaders ?? (_platformHeaders = getPlatformProperties());
};
var safeJSON = text => {
  try {
    return JSON.parse(text);
  } catch (err) {
    return void 0;
  }
};
var startsWithSchemeRegexp = /^[a-z][a-z0-9+.-]*:/i;
var isAbsoluteURL = url => {
  return startsWithSchemeRegexp.test(url);
};
var sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
var validatePositiveInteger = (name, n) => {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    throw new OpenAIError(`${name} must be an integer`);
  }
  if (n < 0) {
    throw new OpenAIError(`${name} must be a positive integer`);
  }
  return n;
};
var castToError = err => {
  if (err instanceof Error) return err;
  if (typeof err === "object" && err !== null) {
    try {
      return new Error(JSON.stringify(err));
    } catch {}
  }
  return new Error(err);
};
var ensurePresent = value => {
  if (value == null) throw new OpenAIError(`Expected a value to be given but received ${value} instead.`);
  return value;
};
var readEnv = env => {
  if (typeof process !== "undefined") {
    return process.env?.[env]?.trim() ?? void 0;
  }
  if (typeof Deno !== "undefined") {
    return Deno.env?.get?.(env)?.trim();
  }
  return void 0;
};
var coerceInteger = value => {
  if (typeof value === "number") return Math.round(value);
  if (typeof value === "string") return parseInt(value, 10);
  throw new OpenAIError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
var coerceFloat = value => {
  if (typeof value === "number") return value;
  if (typeof value === "string") return parseFloat(value);
  throw new OpenAIError(`Could not coerce ${value} (type: ${typeof value}) into a number`);
};
var coerceBoolean = value => {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") return value === "true";
  return Boolean(value);
};
var maybeCoerceInteger = value => {
  if (value === void 0) {
    return void 0;
  }
  return coerceInteger(value);
};
var maybeCoerceFloat = value => {
  if (value === void 0) {
    return void 0;
  }
  return coerceFloat(value);
};
var maybeCoerceBoolean = value => {
  if (value === void 0) {
    return void 0;
  }
  return coerceBoolean(value);
};
function isEmptyObj(obj) {
  if (!obj) return true;
  for (const _k in obj) return false;
  return true;
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function applyHeadersMut(targetHeaders, newHeaders) {
  for (const k in newHeaders) {
    if (!hasOwn(newHeaders, k)) continue;
    const lowerKey = k.toLowerCase();
    if (!lowerKey) continue;
    const val = newHeaders[k];
    if (val === null) {
      delete targetHeaders[lowerKey];
    } else if (val !== void 0) {
      targetHeaders[lowerKey] = val;
    }
  }
}
var SENSITIVE_HEADERS = /* @__PURE__ */new Set(["authorization", "api-key"]);
function debug(action, ...args) {
  if (typeof process !== "undefined" && process?.env?.["DEBUG"] === "true") {
    const modifiedArgs = args.map(arg => {
      if (!arg) {
        return arg;
      }
      if (arg["headers"]) {
        const modifiedArg2 = {
          ...arg,
          headers: {
            ...arg["headers"]
          }
        };
        for (const header in arg["headers"]) {
          if (SENSITIVE_HEADERS.has(header.toLowerCase())) {
            modifiedArg2["headers"][header] = "REDACTED";
          }
        }
        return modifiedArg2;
      }
      let modifiedArg = null;
      for (const header in arg) {
        if (SENSITIVE_HEADERS.has(header.toLowerCase())) {
          modifiedArg ?? (modifiedArg = {
            ...arg
          });
          modifiedArg[header] = "REDACTED";
        }
      }
      return modifiedArg ?? arg;
    });
    console.log(`OpenAI:DEBUG:${action}`, ...modifiedArgs);
  }
}
var uuid4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
};
var isRunningInBrowser = () => {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof navigator !== "undefined";
};
var isHeadersProtocol = headers => {
  return typeof headers?.get === "function";
};
var getRequiredHeader = (headers, header) => {
  const foundHeader = getHeader(headers, header);
  if (foundHeader === void 0) {
    throw new Error(`Could not find ${header} header`);
  }
  return foundHeader;
};
var getHeader = (headers, header) => {
  const lowerCasedHeader = header.toLowerCase();
  if (isHeadersProtocol(headers)) {
    const intercapsHeader = header[0]?.toUpperCase() + header.substring(1).replace(/([^\w])(\w)/g, (_m, g1, g2) => g1 + g2.toUpperCase());
    for (const key of [header, lowerCasedHeader, header.toUpperCase(), intercapsHeader]) {
      const value = headers.get(key);
      if (value) {
        return value;
      }
    }
  }
  for (const [key, value] of Object.entries(headers)) {
    if (key.toLowerCase() === lowerCasedHeader) {
      if (Array.isArray(value)) {
        if (value.length <= 1) return value[0];
        console.warn(`Received ${value.length} entries for the ${header} header, using the first entry.`);
        return value[0];
      }
      return value;
    }
  }
  return void 0;
};
var toBase64 = str2 => {
  if (!str2) return "";
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str2).toString("base64");
  }
  if (typeof btoa !== "undefined") {
    return btoa(str2);
  }
  throw new OpenAIError("Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined");
};
var toFloat32Array = base64Str => {
  if (typeof Buffer !== "undefined") {
    const buf = Buffer.from(base64Str, "base64");
    return Array.from(new Float32Array(buf.buffer, buf.byteOffset, buf.length / Float32Array.BYTES_PER_ELEMENT));
  } else {
    const binaryStr = atob(base64Str);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryStr.charCodeAt(i);
    }
    return Array.from(new Float32Array(bytes.buffer));
  }
};
function isObj(obj) {
  return obj != null && typeof obj === "object" && !Array.isArray(obj);
}

// node_modules/openai/pagination.mjs
var Page = class extends AbstractPage {
  constructor(client, response, body, options) {
    super(client, response, body, options);
    this.data = body.data || [];
    this.object = body.object;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  nextPageParams() {
    return null;
  }
  nextPageInfo() {
    return null;
  }
};
var CursorPage = class extends AbstractPage {
  constructor(client, response, body, options) {
    super(client, response, body, options);
    this.data = body.data || [];
    this.has_more = body.has_more || false;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    if (this.has_more === false) {
      return false;
    }
    return super.hasNextPage();
  }
  nextPageParams() {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ("params" in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }
  nextPageInfo() {
    const data = this.getPaginatedItems();
    if (!data.length) {
      return null;
    }
    const id = data[data.length - 1]?.id;
    if (!id) {
      return null;
    }
    return {
      params: {
        after: id
      }
    };
  }
};

// node_modules/openai/resource.mjs
var APIResource = class {
  constructor(client) {
    this._client = client;
  }
};

// node_modules/openai/resources/chat/completions/messages.mjs
var Messages = class extends APIResource {
  list(completionId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(completionId, {}, query);
    }
    return this._client.getAPIList(`/chat/completions/${completionId}/messages`, ChatCompletionStoreMessagesPage, {
      query,
      ...options
    });
  }
};

// node_modules/openai/resources/chat/completions/completions.mjs
var Completions = class extends APIResource {
  constructor() {
    super(...arguments);
    this.messages = new Messages(this._client);
  }
  create(body, options) {
    return this._client.post("/chat/completions", {
      body,
      ...options,
      stream: body.stream ?? false
    });
  }
  retrieve(completionId, options) {
    return this._client.get(`/chat/completions/${completionId}`, options);
  }
  update(completionId, body, options) {
    return this._client.post(`/chat/completions/${completionId}`, {
      body,
      ...options
    });
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/chat/completions", ChatCompletionsPage, {
      query,
      ...options
    });
  }
  del(completionId, options) {
    return this._client.delete(`/chat/completions/${completionId}`, options);
  }
};
var ChatCompletionsPage = class extends CursorPage {};
var ChatCompletionStoreMessagesPage = class extends CursorPage {};
Completions.ChatCompletionsPage = ChatCompletionsPage;
Completions.Messages = Messages;

// node_modules/openai/resources/chat/chat.mjs
var Chat = class extends APIResource {
  constructor() {
    super(...arguments);
    this.completions = new Completions(this._client);
  }
};
Chat.Completions = Completions;
Chat.ChatCompletionsPage = ChatCompletionsPage;

// node_modules/openai/resources/audio/speech.mjs
var Speech = class extends APIResource {
  create(body, options) {
    return this._client.post("/audio/speech", {
      body,
      ...options,
      headers: {
        Accept: "application/octet-stream",
        ...options?.headers
      },
      __binaryResponse: true
    });
  }
};

// node_modules/openai/resources/audio/transcriptions.mjs
var Transcriptions = class extends APIResource {
  create(body, options) {
    return this._client.post("/audio/transcriptions", multipartFormRequestOptions({
      body,
      ...options,
      stream: body.stream ?? false,
      __metadata: {
        model: body.model
      }
    }));
  }
};

// node_modules/openai/resources/audio/translations.mjs
var Translations = class extends APIResource {
  create(body, options) {
    return this._client.post("/audio/translations", multipartFormRequestOptions({
      body,
      ...options,
      __metadata: {
        model: body.model
      }
    }));
  }
};

// node_modules/openai/resources/audio/audio.mjs
var Audio = class extends APIResource {
  constructor() {
    super(...arguments);
    this.transcriptions = new Transcriptions(this._client);
    this.translations = new Translations(this._client);
    this.speech = new Speech(this._client);
  }
};
Audio.Transcriptions = Transcriptions;
Audio.Translations = Translations;
Audio.Speech = Speech;

// node_modules/openai/resources/batches.mjs
var Batches = class extends APIResource {
  create(body, options) {
    return this._client.post("/batches", {
      body,
      ...options
    });
  }
  retrieve(batchId, options) {
    return this._client.get(`/batches/${batchId}`, options);
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/batches", BatchesPage, {
      query,
      ...options
    });
  }
  cancel(batchId, options) {
    return this._client.post(`/batches/${batchId}/cancel`, options);
  }
};
var BatchesPage = class extends CursorPage {};
Batches.BatchesPage = BatchesPage;

// node_modules/openai/lib/EventStream.mjs
var __classPrivateFieldSet3 = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet3 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventStream_instances, _EventStream_connectedPromise, _EventStream_resolveConnectedPromise, _EventStream_rejectConnectedPromise, _EventStream_endPromise, _EventStream_resolveEndPromise, _EventStream_rejectEndPromise, _EventStream_listeners, _EventStream_ended, _EventStream_errored, _EventStream_aborted, _EventStream_catchingPromiseCreated, _EventStream_handleError;
var EventStream = class {
  constructor() {
    _EventStream_instances.add(this);
    this.controller = new AbortController();
    _EventStream_connectedPromise.set(this, void 0);
    _EventStream_resolveConnectedPromise.set(this, () => {});
    _EventStream_rejectConnectedPromise.set(this, () => {});
    _EventStream_endPromise.set(this, void 0);
    _EventStream_resolveEndPromise.set(this, () => {});
    _EventStream_rejectEndPromise.set(this, () => {});
    _EventStream_listeners.set(this, {});
    _EventStream_ended.set(this, false);
    _EventStream_errored.set(this, false);
    _EventStream_aborted.set(this, false);
    _EventStream_catchingPromiseCreated.set(this, false);
    __classPrivateFieldSet3(this, _EventStream_connectedPromise, new Promise((resolve, reject) => {
      __classPrivateFieldSet3(this, _EventStream_resolveConnectedPromise, resolve, "f");
      __classPrivateFieldSet3(this, _EventStream_rejectConnectedPromise, reject, "f");
    }), "f");
    __classPrivateFieldSet3(this, _EventStream_endPromise, new Promise((resolve, reject) => {
      __classPrivateFieldSet3(this, _EventStream_resolveEndPromise, resolve, "f");
      __classPrivateFieldSet3(this, _EventStream_rejectEndPromise, reject, "f");
    }), "f");
    __classPrivateFieldGet3(this, _EventStream_connectedPromise, "f").catch(() => {});
    __classPrivateFieldGet3(this, _EventStream_endPromise, "f").catch(() => {});
  }
  _run(executor) {
    setTimeout(() => {
      executor().then(() => {
        this._emitFinal();
        this._emit("end");
      }, __classPrivateFieldGet3(this, _EventStream_instances, "m", _EventStream_handleError).bind(this));
    }, 0);
  }
  _connected() {
    if (this.ended) return;
    __classPrivateFieldGet3(this, _EventStream_resolveConnectedPromise, "f").call(this);
    this._emit("connect");
  }
  get ended() {
    return __classPrivateFieldGet3(this, _EventStream_ended, "f");
  }
  get errored() {
    return __classPrivateFieldGet3(this, _EventStream_errored, "f");
  }
  get aborted() {
    return __classPrivateFieldGet3(this, _EventStream_aborted, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(event, listener) {
    const listeners = __classPrivateFieldGet3(this, _EventStream_listeners, "f")[event] || (__classPrivateFieldGet3(this, _EventStream_listeners, "f")[event] = []);
    listeners.push({
      listener
    });
    return this;
  }
  off(event, listener) {
    const listeners = __classPrivateFieldGet3(this, _EventStream_listeners, "f")[event];
    if (!listeners) return this;
    const index = listeners.findIndex(l => l.listener === listener);
    if (index >= 0) listeners.splice(index, 1);
    return this;
  }
  once(event, listener) {
    const listeners = __classPrivateFieldGet3(this, _EventStream_listeners, "f")[event] || (__classPrivateFieldGet3(this, _EventStream_listeners, "f")[event] = []);
    listeners.push({
      listener,
      once: true
    });
    return this;
  }
  emitted(event) {
    return new Promise((resolve, reject) => {
      __classPrivateFieldSet3(this, _EventStream_catchingPromiseCreated, true, "f");
      if (event !== "error") this.once("error", reject);
      this.once(event, resolve);
    });
  }
  async done() {
    __classPrivateFieldSet3(this, _EventStream_catchingPromiseCreated, true, "f");
    await __classPrivateFieldGet3(this, _EventStream_endPromise, "f");
  }
  _emit(event, ...args) {
    if (__classPrivateFieldGet3(this, _EventStream_ended, "f")) {
      return;
    }
    if (event === "end") {
      __classPrivateFieldSet3(this, _EventStream_ended, true, "f");
      __classPrivateFieldGet3(this, _EventStream_resolveEndPromise, "f").call(this);
    }
    const listeners = __classPrivateFieldGet3(this, _EventStream_listeners, "f")[event];
    if (listeners) {
      __classPrivateFieldGet3(this, _EventStream_listeners, "f")[event] = listeners.filter(l => !l.once);
      listeners.forEach(({
        listener
      }) => listener(...args));
    }
    if (event === "abort") {
      const error = args[0];
      if (!__classPrivateFieldGet3(this, _EventStream_catchingPromiseCreated, "f") && !listeners?.length) {
        Promise.reject(error);
      }
      __classPrivateFieldGet3(this, _EventStream_rejectConnectedPromise, "f").call(this, error);
      __classPrivateFieldGet3(this, _EventStream_rejectEndPromise, "f").call(this, error);
      this._emit("end");
      return;
    }
    if (event === "error") {
      const error = args[0];
      if (!__classPrivateFieldGet3(this, _EventStream_catchingPromiseCreated, "f") && !listeners?.length) {
        Promise.reject(error);
      }
      __classPrivateFieldGet3(this, _EventStream_rejectConnectedPromise, "f").call(this, error);
      __classPrivateFieldGet3(this, _EventStream_rejectEndPromise, "f").call(this, error);
      this._emit("end");
    }
  }
  _emitFinal() {}
};
_EventStream_connectedPromise = /* @__PURE__ */new WeakMap(), _EventStream_resolveConnectedPromise = /* @__PURE__ */new WeakMap(), _EventStream_rejectConnectedPromise = /* @__PURE__ */new WeakMap(), _EventStream_endPromise = /* @__PURE__ */new WeakMap(), _EventStream_resolveEndPromise = /* @__PURE__ */new WeakMap(), _EventStream_rejectEndPromise = /* @__PURE__ */new WeakMap(), _EventStream_listeners = /* @__PURE__ */new WeakMap(), _EventStream_ended = /* @__PURE__ */new WeakMap(), _EventStream_errored = /* @__PURE__ */new WeakMap(), _EventStream_aborted = /* @__PURE__ */new WeakMap(), _EventStream_catchingPromiseCreated = /* @__PURE__ */new WeakMap(), _EventStream_instances = /* @__PURE__ */new WeakSet(), _EventStream_handleError = function _EventStream_handleError2(error) {
  __classPrivateFieldSet3(this, _EventStream_errored, true, "f");
  if (error instanceof Error && error.name === "AbortError") {
    error = new APIUserAbortError();
  }
  if (error instanceof APIUserAbortError) {
    __classPrivateFieldSet3(this, _EventStream_aborted, true, "f");
    return this._emit("abort", error);
  }
  if (error instanceof OpenAIError) {
    return this._emit("error", error);
  }
  if (error instanceof Error) {
    const openAIError = new OpenAIError(error.message);
    openAIError.cause = error;
    return this._emit("error", openAIError);
  }
  return this._emit("error", new OpenAIError(String(error)));
};

// node_modules/openai/lib/AssistantStream.mjs
var __classPrivateFieldGet4 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet4 = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AssistantStream_instances, _AssistantStream_events, _AssistantStream_runStepSnapshots, _AssistantStream_messageSnapshots, _AssistantStream_messageSnapshot, _AssistantStream_finalRun, _AssistantStream_currentContentIndex, _AssistantStream_currentContent, _AssistantStream_currentToolCallIndex, _AssistantStream_currentToolCall, _AssistantStream_currentEvent, _AssistantStream_currentRunSnapshot, _AssistantStream_currentRunStepSnapshot, _AssistantStream_addEvent, _AssistantStream_endRequest, _AssistantStream_handleMessage, _AssistantStream_handleRunStep, _AssistantStream_handleEvent, _AssistantStream_accumulateRunStep, _AssistantStream_accumulateMessage, _AssistantStream_accumulateContent, _AssistantStream_handleRun;
var AssistantStream = class extends EventStream {
  constructor() {
    super(...arguments);
    _AssistantStream_instances.add(this);
    _AssistantStream_events.set(this, []);
    _AssistantStream_runStepSnapshots.set(this, {});
    _AssistantStream_messageSnapshots.set(this, {});
    _AssistantStream_messageSnapshot.set(this, void 0);
    _AssistantStream_finalRun.set(this, void 0);
    _AssistantStream_currentContentIndex.set(this, void 0);
    _AssistantStream_currentContent.set(this, void 0);
    _AssistantStream_currentToolCallIndex.set(this, void 0);
    _AssistantStream_currentToolCall.set(this, void 0);
    _AssistantStream_currentEvent.set(this, void 0);
    _AssistantStream_currentRunSnapshot.set(this, void 0);
    _AssistantStream_currentRunStepSnapshot.set(this, void 0);
  }
  [(_AssistantStream_events = /* @__PURE__ */new WeakMap(), _AssistantStream_runStepSnapshots = /* @__PURE__ */new WeakMap(), _AssistantStream_messageSnapshots = /* @__PURE__ */new WeakMap(), _AssistantStream_messageSnapshot = /* @__PURE__ */new WeakMap(), _AssistantStream_finalRun = /* @__PURE__ */new WeakMap(), _AssistantStream_currentContentIndex = /* @__PURE__ */new WeakMap(), _AssistantStream_currentContent = /* @__PURE__ */new WeakMap(), _AssistantStream_currentToolCallIndex = /* @__PURE__ */new WeakMap(), _AssistantStream_currentToolCall = /* @__PURE__ */new WeakMap(), _AssistantStream_currentEvent = /* @__PURE__ */new WeakMap(), _AssistantStream_currentRunSnapshot = /* @__PURE__ */new WeakMap(), _AssistantStream_currentRunStepSnapshot = /* @__PURE__ */new WeakMap(), _AssistantStream_instances = /* @__PURE__ */new WeakSet(), Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("event", event => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(event);
      } else {
        pushQueue.push(event);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", err => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", err => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return {
              value: void 0,
              done: true
            };
          }
          return new Promise((resolve, reject) => readQueue.push({
            resolve,
            reject
          })).then(chunk2 => chunk2 ? {
            value: chunk2,
            done: false
          } : {
            value: void 0,
            done: true
          });
        }
        const chunk = pushQueue.shift();
        return {
          value: chunk,
          done: false
        };
      },
      return: async () => {
        this.abort();
        return {
          value: void 0,
          done: true
        };
      }
    };
  }
  static fromReadableStream(stream) {
    const runner = new AssistantStream();
    runner._run(() => runner._fromReadableStream(stream));
    return runner;
  }
  async _fromReadableStream(readableStream, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    this._connected();
    const stream = Stream.fromReadableStream(readableStream, this.controller);
    for await (const event of stream) {
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  toReadableStream() {
    const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
    return stream.toReadableStream();
  }
  static createToolAssistantStream(threadId, runId, runs, params, options) {
    const runner = new AssistantStream();
    runner._run(() => runner._runToolAssistantStream(threadId, runId, runs, params, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    }));
    return runner;
  }
  async _createToolAssistantStream(run, threadId, runId, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    const body = {
      ...params,
      stream: true
    };
    const stream = await run.submitToolOutputs(threadId, runId, body, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const event of stream) {
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  static createThreadAssistantStream(params, thread, options) {
    const runner = new AssistantStream();
    runner._run(() => runner._threadAssistantStream(params, thread, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    }));
    return runner;
  }
  static createAssistantStream(threadId, runs, params, options) {
    const runner = new AssistantStream();
    runner._run(() => runner._runAssistantStream(threadId, runs, params, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    }));
    return runner;
  }
  currentEvent() {
    return __classPrivateFieldGet4(this, _AssistantStream_currentEvent, "f");
  }
  currentRun() {
    return __classPrivateFieldGet4(this, _AssistantStream_currentRunSnapshot, "f");
  }
  currentMessageSnapshot() {
    return __classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f");
  }
  currentRunStepSnapshot() {
    return __classPrivateFieldGet4(this, _AssistantStream_currentRunStepSnapshot, "f");
  }
  async finalRunSteps() {
    await this.done();
    return Object.values(__classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f"));
  }
  async finalMessages() {
    await this.done();
    return Object.values(__classPrivateFieldGet4(this, _AssistantStream_messageSnapshots, "f"));
  }
  async finalRun() {
    await this.done();
    if (!__classPrivateFieldGet4(this, _AssistantStream_finalRun, "f")) throw Error("Final run was not received.");
    return __classPrivateFieldGet4(this, _AssistantStream_finalRun, "f");
  }
  async _createThreadAssistantStream(thread, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    const body = {
      ...params,
      stream: true
    };
    const stream = await thread.createAndRun(body, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const event of stream) {
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  async _createAssistantStream(run, threadId, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    const body = {
      ...params,
      stream: true
    };
    const stream = await run.create(threadId, body, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const event of stream) {
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
  }
  static accumulateDelta(acc, delta) {
    for (const [key, deltaValue] of Object.entries(delta)) {
      if (!acc.hasOwnProperty(key)) {
        acc[key] = deltaValue;
        continue;
      }
      let accValue = acc[key];
      if (accValue === null || accValue === void 0) {
        acc[key] = deltaValue;
        continue;
      }
      if (key === "index" || key === "type") {
        acc[key] = deltaValue;
        continue;
      }
      if (typeof accValue === "string" && typeof deltaValue === "string") {
        accValue += deltaValue;
      } else if (typeof accValue === "number" && typeof deltaValue === "number") {
        accValue += deltaValue;
      } else if (isObj(accValue) && isObj(deltaValue)) {
        accValue = this.accumulateDelta(accValue, deltaValue);
      } else if (Array.isArray(accValue) && Array.isArray(deltaValue)) {
        if (accValue.every(x => typeof x === "string" || typeof x === "number")) {
          accValue.push(...deltaValue);
          continue;
        }
        for (const deltaEntry of deltaValue) {
          if (!isObj(deltaEntry)) {
            throw new Error(`Expected array delta entry to be an object but got: ${deltaEntry}`);
          }
          const index = deltaEntry["index"];
          if (index == null) {
            console.error(deltaEntry);
            throw new Error("Expected array delta entry to have an `index` property");
          }
          if (typeof index !== "number") {
            throw new Error(`Expected array delta entry \`index\` property to be a number but got ${index}`);
          }
          const accEntry = accValue[index];
          if (accEntry == null) {
            accValue.push(deltaEntry);
          } else {
            accValue[index] = this.accumulateDelta(accEntry, deltaEntry);
          }
        }
        continue;
      } else {
        throw Error(`Unhandled record type: ${key}, deltaValue: ${deltaValue}, accValue: ${accValue}`);
      }
      acc[key] = accValue;
    }
    return acc;
  }
  _addRun(run) {
    return run;
  }
  async _threadAssistantStream(params, thread, options) {
    return await this._createThreadAssistantStream(thread, params, options);
  }
  async _runAssistantStream(threadId, runs, params, options) {
    return await this._createAssistantStream(runs, threadId, params, options);
  }
  async _runToolAssistantStream(threadId, runId, runs, params, options) {
    return await this._createToolAssistantStream(runs, threadId, runId, params, options);
  }
};
_AssistantStream_addEvent = function _AssistantStream_addEvent2(event) {
  if (this.ended) return;
  __classPrivateFieldSet4(this, _AssistantStream_currentEvent, event, "f");
  __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_handleEvent).call(this, event);
  switch (event.event) {
    case "thread.created":
      break;
    case "thread.run.created":
    case "thread.run.queued":
    case "thread.run.in_progress":
    case "thread.run.requires_action":
    case "thread.run.completed":
    case "thread.run.incomplete":
    case "thread.run.failed":
    case "thread.run.cancelling":
    case "thread.run.cancelled":
    case "thread.run.expired":
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_handleRun).call(this, event);
      break;
    case "thread.run.step.created":
    case "thread.run.step.in_progress":
    case "thread.run.step.delta":
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_handleRunStep).call(this, event);
      break;
    case "thread.message.created":
    case "thread.message.in_progress":
    case "thread.message.delta":
    case "thread.message.completed":
    case "thread.message.incomplete":
      __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_handleMessage).call(this, event);
      break;
    case "error":
      throw new Error("Encountered an error event in event processing - errors should be processed earlier");
    default:
      assertNever(event);
  }
}, _AssistantStream_endRequest = function _AssistantStream_endRequest2() {
  if (this.ended) {
    throw new OpenAIError(`stream has ended, this shouldn't happen`);
  }
  if (!__classPrivateFieldGet4(this, _AssistantStream_finalRun, "f")) throw Error("Final run has not been received");
  return __classPrivateFieldGet4(this, _AssistantStream_finalRun, "f");
}, _AssistantStream_handleMessage = function _AssistantStream_handleMessage2(event) {
  const [accumulatedMessage, newContent] = __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_accumulateMessage).call(this, event, __classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f"));
  __classPrivateFieldSet4(this, _AssistantStream_messageSnapshot, accumulatedMessage, "f");
  __classPrivateFieldGet4(this, _AssistantStream_messageSnapshots, "f")[accumulatedMessage.id] = accumulatedMessage;
  for (const content of newContent) {
    const snapshotContent = accumulatedMessage.content[content.index];
    if (snapshotContent?.type == "text") {
      this._emit("textCreated", snapshotContent.text);
    }
  }
  switch (event.event) {
    case "thread.message.created":
      this._emit("messageCreated", event.data);
      break;
    case "thread.message.in_progress":
      break;
    case "thread.message.delta":
      this._emit("messageDelta", event.data.delta, accumulatedMessage);
      if (event.data.delta.content) {
        for (const content of event.data.delta.content) {
          if (content.type == "text" && content.text) {
            let textDelta = content.text;
            let snapshot = accumulatedMessage.content[content.index];
            if (snapshot && snapshot.type == "text") {
              this._emit("textDelta", textDelta, snapshot.text);
            } else {
              throw Error("The snapshot associated with this text delta is not text or missing");
            }
          }
          if (content.index != __classPrivateFieldGet4(this, _AssistantStream_currentContentIndex, "f")) {
            if (__classPrivateFieldGet4(this, _AssistantStream_currentContent, "f")) {
              switch (__classPrivateFieldGet4(this, _AssistantStream_currentContent, "f").type) {
                case "text":
                  this._emit("textDone", __classPrivateFieldGet4(this, _AssistantStream_currentContent, "f").text, __classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f"));
                  break;
                case "image_file":
                  this._emit("imageFileDone", __classPrivateFieldGet4(this, _AssistantStream_currentContent, "f").image_file, __classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f"));
                  break;
              }
            }
            __classPrivateFieldSet4(this, _AssistantStream_currentContentIndex, content.index, "f");
          }
          __classPrivateFieldSet4(this, _AssistantStream_currentContent, accumulatedMessage.content[content.index], "f");
        }
      }
      break;
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (__classPrivateFieldGet4(this, _AssistantStream_currentContentIndex, "f") !== void 0) {
        const currentContent = event.data.content[__classPrivateFieldGet4(this, _AssistantStream_currentContentIndex, "f")];
        if (currentContent) {
          switch (currentContent.type) {
            case "image_file":
              this._emit("imageFileDone", currentContent.image_file, __classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f"));
              break;
            case "text":
              this._emit("textDone", currentContent.text, __classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f"));
              break;
          }
        }
      }
      if (__classPrivateFieldGet4(this, _AssistantStream_messageSnapshot, "f")) {
        this._emit("messageDone", event.data);
      }
      __classPrivateFieldSet4(this, _AssistantStream_messageSnapshot, void 0, "f");
  }
}, _AssistantStream_handleRunStep = function _AssistantStream_handleRunStep2(event) {
  const accumulatedRunStep = __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_accumulateRunStep).call(this, event);
  __classPrivateFieldSet4(this, _AssistantStream_currentRunStepSnapshot, accumulatedRunStep, "f");
  switch (event.event) {
    case "thread.run.step.created":
      this._emit("runStepCreated", event.data);
      break;
    case "thread.run.step.delta":
      const delta = event.data.delta;
      if (delta.step_details && delta.step_details.type == "tool_calls" && delta.step_details.tool_calls && accumulatedRunStep.step_details.type == "tool_calls") {
        for (const toolCall of delta.step_details.tool_calls) {
          if (toolCall.index == __classPrivateFieldGet4(this, _AssistantStream_currentToolCallIndex, "f")) {
            this._emit("toolCallDelta", toolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index]);
          } else {
            if (__classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f")) {
              this._emit("toolCallDone", __classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f"));
            }
            __classPrivateFieldSet4(this, _AssistantStream_currentToolCallIndex, toolCall.index, "f");
            __classPrivateFieldSet4(this, _AssistantStream_currentToolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index], "f");
            if (__classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f")) this._emit("toolCallCreated", __classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f"));
          }
        }
      }
      this._emit("runStepDelta", event.data.delta, accumulatedRunStep);
      break;
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      __classPrivateFieldSet4(this, _AssistantStream_currentRunStepSnapshot, void 0, "f");
      const details = event.data.step_details;
      if (details.type == "tool_calls") {
        if (__classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f")) {
          this._emit("toolCallDone", __classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f"));
          __classPrivateFieldSet4(this, _AssistantStream_currentToolCall, void 0, "f");
        }
      }
      this._emit("runStepDone", event.data, accumulatedRunStep);
      break;
    case "thread.run.step.in_progress":
      break;
  }
}, _AssistantStream_handleEvent = function _AssistantStream_handleEvent2(event) {
  __classPrivateFieldGet4(this, _AssistantStream_events, "f").push(event);
  this._emit("event", event);
}, _AssistantStream_accumulateRunStep = function _AssistantStream_accumulateRunStep2(event) {
  switch (event.event) {
    case "thread.run.step.created":
      __classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      return event.data;
    case "thread.run.step.delta":
      let snapshot = __classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
      if (!snapshot) {
        throw Error("Received a RunStepDelta before creation of a snapshot");
      }
      let data = event.data;
      if (data.delta) {
        const accumulated = AssistantStream.accumulateDelta(snapshot, data.delta);
        __classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = accumulated;
      }
      return __classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
    case "thread.run.step.in_progress":
      __classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      break;
  }
  if (__classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id]) return __classPrivateFieldGet4(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
  throw new Error("No snapshot available");
}, _AssistantStream_accumulateMessage = function _AssistantStream_accumulateMessage2(event, snapshot) {
  let newContent = [];
  switch (event.event) {
    case "thread.message.created":
      return [event.data, newContent];
    case "thread.message.delta":
      if (!snapshot) {
        throw Error("Received a delta with no existing snapshot (there should be one from message creation)");
      }
      let data = event.data;
      if (data.delta.content) {
        for (const contentElement of data.delta.content) {
          if (contentElement.index in snapshot.content) {
            let currentContent = snapshot.content[contentElement.index];
            snapshot.content[contentElement.index] = __classPrivateFieldGet4(this, _AssistantStream_instances, "m", _AssistantStream_accumulateContent).call(this, contentElement, currentContent);
          } else {
            snapshot.content[contentElement.index] = contentElement;
            newContent.push(contentElement);
          }
        }
      }
      return [snapshot, newContent];
    case "thread.message.in_progress":
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (snapshot) {
        return [snapshot, newContent];
      } else {
        throw Error("Received thread message event with no existing snapshot");
      }
  }
  throw Error("Tried to accumulate a non-message event");
}, _AssistantStream_accumulateContent = function _AssistantStream_accumulateContent2(contentElement, currentContent) {
  return AssistantStream.accumulateDelta(currentContent, contentElement);
}, _AssistantStream_handleRun = function _AssistantStream_handleRun2(event) {
  __classPrivateFieldSet4(this, _AssistantStream_currentRunSnapshot, event.data, "f");
  switch (event.event) {
    case "thread.run.created":
      break;
    case "thread.run.queued":
      break;
    case "thread.run.in_progress":
      break;
    case "thread.run.requires_action":
    case "thread.run.cancelled":
    case "thread.run.failed":
    case "thread.run.completed":
    case "thread.run.expired":
      __classPrivateFieldSet4(this, _AssistantStream_finalRun, event.data, "f");
      if (__classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f")) {
        this._emit("toolCallDone", __classPrivateFieldGet4(this, _AssistantStream_currentToolCall, "f"));
        __classPrivateFieldSet4(this, _AssistantStream_currentToolCall, void 0, "f");
      }
      break;
    case "thread.run.cancelling":
      break;
  }
};
function assertNever(_x) {}

// node_modules/openai/resources/beta/assistants.mjs
var Assistants = class extends APIResource {
  create(body, options) {
    return this._client.post("/assistants", {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  retrieve(assistantId, options) {
    return this._client.get(`/assistants/${assistantId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  update(assistantId, body, options) {
    return this._client.post(`/assistants/${assistantId}`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/assistants", AssistantsPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  del(assistantId, options) {
    return this._client.delete(`/assistants/${assistantId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};
var AssistantsPage = class extends CursorPage {};
Assistants.AssistantsPage = AssistantsPage;

// node_modules/openai/lib/RunnableFunction.mjs
function isRunnableFunctionWithParse(fn) {
  return typeof fn.parse === "function";
}
var ParsingFunction = class {
  constructor(input) {
    this.function = input.function;
    this.parse = input.parse;
    this.parameters = input.parameters;
    this.description = input.description;
    this.name = input.name;
  }
};
var ParsingToolFunction = class {
  constructor(input) {
    this.type = "function";
    this.function = input;
  }
};

// node_modules/openai/lib/chatCompletionUtils.mjs
var isAssistantMessage = message => {
  return message?.role === "assistant";
};
var isFunctionMessage = message => {
  return message?.role === "function";
};
var isToolMessage = message => {
  return message?.role === "tool";
};
function isPresent(obj) {
  return obj != null;
}

// node_modules/openai/lib/parser.mjs
function makeParseableResponseFormat(response_format, parser) {
  const obj = {
    ...response_format
  };
  Object.defineProperties(obj, {
    $brand: {
      value: "auto-parseable-response-format",
      enumerable: false
    },
    $parseRaw: {
      value: parser,
      enumerable: false
    }
  });
  return obj;
}
function makeParseableTextFormat(response_format, parser) {
  const obj = {
    ...response_format
  };
  Object.defineProperties(obj, {
    $brand: {
      value: "auto-parseable-response-format",
      enumerable: false
    },
    $parseRaw: {
      value: parser,
      enumerable: false
    }
  });
  return obj;
}
function isAutoParsableResponseFormat(response_format) {
  return response_format?.["$brand"] === "auto-parseable-response-format";
}
function makeParseableTool(tool, {
  parser,
  callback
}) {
  const obj = {
    ...tool
  };
  Object.defineProperties(obj, {
    $brand: {
      value: "auto-parseable-tool",
      enumerable: false
    },
    $parseRaw: {
      value: parser,
      enumerable: false
    },
    $callback: {
      value: callback,
      enumerable: false
    }
  });
  return obj;
}
function isAutoParsableTool(tool) {
  return tool?.["$brand"] === "auto-parseable-tool";
}
function maybeParseChatCompletion(completion, params) {
  if (!params || !hasAutoParseableInput(params)) {
    return {
      ...completion,
      choices: completion.choices.map(choice => ({
        ...choice,
        message: {
          ...choice.message,
          parsed: null,
          ...(choice.message.tool_calls ? {
            tool_calls: choice.message.tool_calls
          } : void 0)
        }
      }))
    };
  }
  return parseChatCompletion(completion, params);
}
function parseChatCompletion(completion, params) {
  const choices = completion.choices.map(choice => {
    if (choice.finish_reason === "length") {
      throw new LengthFinishReasonError();
    }
    if (choice.finish_reason === "content_filter") {
      throw new ContentFilterFinishReasonError();
    }
    return {
      ...choice,
      message: {
        ...choice.message,
        ...(choice.message.tool_calls ? {
          tool_calls: choice.message.tool_calls?.map(toolCall => parseToolCall(params, toolCall)) ?? void 0
        } : void 0),
        parsed: choice.message.content && !choice.message.refusal ? parseResponseFormat(params, choice.message.content) : null
      }
    };
  });
  return {
    ...completion,
    choices
  };
}
function parseResponseFormat(params, content) {
  if (params.response_format?.type !== "json_schema") {
    return null;
  }
  if (params.response_format?.type === "json_schema") {
    if ("$parseRaw" in params.response_format) {
      const response_format = params.response_format;
      return response_format.$parseRaw(content);
    }
    return JSON.parse(content);
  }
  return null;
}
function parseToolCall(params, toolCall) {
  const inputTool = params.tools?.find(inputTool2 => inputTool2.function?.name === toolCall.function.name);
  return {
    ...toolCall,
    function: {
      ...toolCall.function,
      parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCall.function.arguments) : inputTool?.function.strict ? JSON.parse(toolCall.function.arguments) : null
    }
  };
}
function shouldParseToolCall(params, toolCall) {
  if (!params) {
    return false;
  }
  const inputTool = params.tools?.find(inputTool2 => inputTool2.function?.name === toolCall.function.name);
  return isAutoParsableTool(inputTool) || inputTool?.function.strict || false;
}
function hasAutoParseableInput(params) {
  if (isAutoParsableResponseFormat(params.response_format)) {
    return true;
  }
  return params.tools?.some(t => isAutoParsableTool(t) || t.type === "function" && t.function.strict === true) ?? false;
}
function validateInputTools(tools) {
  for (const tool of tools ?? []) {
    if (tool.type !== "function") {
      throw new OpenAIError(`Currently only \`function\` tool types support auto-parsing; Received \`${tool.type}\``);
    }
    if (tool.function.strict !== true) {
      throw new OpenAIError(`The \`${tool.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`);
    }
  }
}

// node_modules/openai/lib/AbstractChatCompletionRunner.mjs
var __classPrivateFieldGet5 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractChatCompletionRunner_instances, _AbstractChatCompletionRunner_getFinalContent, _AbstractChatCompletionRunner_getFinalMessage, _AbstractChatCompletionRunner_getFinalFunctionCall, _AbstractChatCompletionRunner_getFinalFunctionCallResult, _AbstractChatCompletionRunner_calculateTotalUsage, _AbstractChatCompletionRunner_validateParams, _AbstractChatCompletionRunner_stringifyFunctionCallResult;
var DEFAULT_MAX_CHAT_COMPLETIONS = 10;
var AbstractChatCompletionRunner = class extends EventStream {
  constructor() {
    super(...arguments);
    _AbstractChatCompletionRunner_instances.add(this);
    this._chatCompletions = [];
    this.messages = [];
  }
  _addChatCompletion(chatCompletion) {
    this._chatCompletions.push(chatCompletion);
    this._emit("chatCompletion", chatCompletion);
    const message = chatCompletion.choices[0]?.message;
    if (message) this._addMessage(message);
    return chatCompletion;
  }
  _addMessage(message, emit = true) {
    if (!("content" in message)) message.content = null;
    this.messages.push(message);
    if (emit) {
      this._emit("message", message);
      if ((isFunctionMessage(message) || isToolMessage(message)) && message.content) {
        this._emit("functionCallResult", message.content);
      } else if (isAssistantMessage(message) && message.function_call) {
        this._emit("functionCall", message.function_call);
      } else if (isAssistantMessage(message) && message.tool_calls) {
        for (const tool_call of message.tool_calls) {
          if (tool_call.type === "function") {
            this._emit("functionCall", tool_call.function);
          }
        }
      }
    }
  }
  async finalChatCompletion() {
    await this.done();
    const completion = this._chatCompletions[this._chatCompletions.length - 1];
    if (!completion) throw new OpenAIError("stream ended without producing a ChatCompletion");
    return completion;
  }
  async finalContent() {
    await this.done();
    return __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
  }
  async finalMessage() {
    await this.done();
    return __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
  }
  async finalFunctionCall() {
    await this.done();
    return __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
  }
  async finalFunctionCallResult() {
    await this.done();
    return __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
  }
  async totalUsage() {
    await this.done();
    return __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const completion = this._chatCompletions[this._chatCompletions.length - 1];
    if (completion) this._emit("finalChatCompletion", completion);
    const finalMessage = __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
    if (finalMessage) this._emit("finalMessage", finalMessage);
    const finalContent = __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
    if (finalContent) this._emit("finalContent", finalContent);
    const finalFunctionCall = __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
    if (finalFunctionCall) this._emit("finalFunctionCall", finalFunctionCall);
    const finalFunctionCallResult = __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
    if (finalFunctionCallResult != null) this._emit("finalFunctionCallResult", finalFunctionCallResult);
    if (this._chatCompletions.some(c => c.usage)) {
      this._emit("totalUsage", __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this));
    }
  }
  async _createChatCompletion(client, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_validateParams).call(this, params);
    const chatCompletion = await client.chat.completions.create({
      ...params,
      stream: false
    }, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    return this._addChatCompletion(parseChatCompletion(chatCompletion, params));
  }
  async _runChatCompletion(client, params, options) {
    for (const message of params.messages) {
      this._addMessage(message, false);
    }
    return await this._createChatCompletion(client, params, options);
  }
  async _runFunctions(client, params, options) {
    const role = "function";
    const {
      function_call = "auto",
      stream,
      ...restParams
    } = params;
    const singleFunctionToCall = typeof function_call !== "string" && function_call?.name;
    const {
      maxChatCompletions = DEFAULT_MAX_CHAT_COMPLETIONS
    } = options || {};
    const functionsByName = {};
    for (const f of params.functions) {
      functionsByName[f.name || f.function.name] = f;
    }
    const functions = params.functions.map(f => ({
      name: f.name || f.function.name,
      parameters: f.parameters,
      description: f.description
    }));
    for (const message of params.messages) {
      this._addMessage(message, false);
    }
    for (let i = 0; i < maxChatCompletions; ++i) {
      const chatCompletion = await this._createChatCompletion(client, {
        ...restParams,
        function_call,
        functions,
        messages: [...this.messages]
      }, options);
      const message = chatCompletion.choices[0]?.message;
      if (!message) {
        throw new OpenAIError(`missing message in ChatCompletion response`);
      }
      if (!message.function_call) return;
      const {
        name,
        arguments: args
      } = message.function_call;
      const fn = functionsByName[name];
      if (!fn) {
        const content2 = `Invalid function_call: ${JSON.stringify(name)}. Available options are: ${functions.map(f => JSON.stringify(f.name)).join(", ")}. Please try again`;
        this._addMessage({
          role,
          name,
          content: content2
        });
        continue;
      } else if (singleFunctionToCall && singleFunctionToCall !== name) {
        const content2 = `Invalid function_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
        this._addMessage({
          role,
          name,
          content: content2
        });
        continue;
      }
      let parsed;
      try {
        parsed = isRunnableFunctionWithParse(fn) ? await fn.parse(args) : args;
      } catch (error) {
        this._addMessage({
          role,
          name,
          content: error instanceof Error ? error.message : String(error)
        });
        continue;
      }
      const rawContent = await fn.function(parsed, this);
      const content = __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
      this._addMessage({
        role,
        name,
        content
      });
      if (singleFunctionToCall) return;
    }
  }
  async _runTools(client, params, options) {
    const role = "tool";
    const {
      tool_choice = "auto",
      stream,
      ...restParams
    } = params;
    const singleFunctionToCall = typeof tool_choice !== "string" && tool_choice?.function?.name;
    const {
      maxChatCompletions = DEFAULT_MAX_CHAT_COMPLETIONS
    } = options || {};
    const inputTools = params.tools.map(tool => {
      if (isAutoParsableTool(tool)) {
        if (!tool.$callback) {
          throw new OpenAIError("Tool given to `.runTools()` that does not have an associated function");
        }
        return {
          type: "function",
          function: {
            function: tool.$callback,
            name: tool.function.name,
            description: tool.function.description || "",
            parameters: tool.function.parameters,
            parse: tool.$parseRaw,
            strict: true
          }
        };
      }
      return tool;
    });
    const functionsByName = {};
    for (const f of inputTools) {
      if (f.type === "function") {
        functionsByName[f.function.name || f.function.function.name] = f.function;
      }
    }
    const tools = "tools" in params ? inputTools.map(t => t.type === "function" ? {
      type: "function",
      function: {
        name: t.function.name || t.function.function.name,
        parameters: t.function.parameters,
        description: t.function.description,
        strict: t.function.strict
      }
    } : t) : void 0;
    for (const message of params.messages) {
      this._addMessage(message, false);
    }
    for (let i = 0; i < maxChatCompletions; ++i) {
      const chatCompletion = await this._createChatCompletion(client, {
        ...restParams,
        tool_choice,
        tools,
        messages: [...this.messages]
      }, options);
      const message = chatCompletion.choices[0]?.message;
      if (!message) {
        throw new OpenAIError(`missing message in ChatCompletion response`);
      }
      if (!message.tool_calls?.length) {
        return;
      }
      for (const tool_call of message.tool_calls) {
        if (tool_call.type !== "function") continue;
        const tool_call_id = tool_call.id;
        const {
          name,
          arguments: args
        } = tool_call.function;
        const fn = functionsByName[name];
        if (!fn) {
          const content2 = `Invalid tool_call: ${JSON.stringify(name)}. Available options are: ${Object.keys(functionsByName).map(name2 => JSON.stringify(name2)).join(", ")}. Please try again`;
          this._addMessage({
            role,
            tool_call_id,
            content: content2
          });
          continue;
        } else if (singleFunctionToCall && singleFunctionToCall !== name) {
          const content2 = `Invalid tool_call: ${JSON.stringify(name)}. ${JSON.stringify(singleFunctionToCall)} requested. Please try again`;
          this._addMessage({
            role,
            tool_call_id,
            content: content2
          });
          continue;
        }
        let parsed;
        try {
          parsed = isRunnableFunctionWithParse(fn) ? await fn.parse(args) : args;
        } catch (error) {
          const content2 = error instanceof Error ? error.message : String(error);
          this._addMessage({
            role,
            tool_call_id,
            content: content2
          });
          continue;
        }
        const rawContent = await fn.function(parsed, this);
        const content = __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
        this._addMessage({
          role,
          tool_call_id,
          content
        });
        if (singleFunctionToCall) {
          return;
        }
      }
    }
    return;
  }
};
_AbstractChatCompletionRunner_instances = /* @__PURE__ */new WeakSet(), _AbstractChatCompletionRunner_getFinalContent = function _AbstractChatCompletionRunner_getFinalContent2() {
  return __classPrivateFieldGet5(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this).content ?? null;
}, _AbstractChatCompletionRunner_getFinalMessage = function _AbstractChatCompletionRunner_getFinalMessage2() {
  let i = this.messages.length;
  while (i-- > 0) {
    const message = this.messages[i];
    if (isAssistantMessage(message)) {
      const {
        function_call,
        ...rest
      } = message;
      const ret = {
        ...rest,
        content: message.content ?? null,
        refusal: message.refusal ?? null
      };
      if (function_call) {
        ret.function_call = function_call;
      }
      return ret;
    }
  }
  throw new OpenAIError("stream ended without producing a ChatCompletionMessage with role=assistant");
}, _AbstractChatCompletionRunner_getFinalFunctionCall = function _AbstractChatCompletionRunner_getFinalFunctionCall2() {
  for (let i = this.messages.length - 1; i >= 0; i--) {
    const message = this.messages[i];
    if (isAssistantMessage(message) && message?.function_call) {
      return message.function_call;
    }
    if (isAssistantMessage(message) && message?.tool_calls?.length) {
      return message.tool_calls.at(-1)?.function;
    }
  }
  return;
}, _AbstractChatCompletionRunner_getFinalFunctionCallResult = function _AbstractChatCompletionRunner_getFinalFunctionCallResult2() {
  for (let i = this.messages.length - 1; i >= 0; i--) {
    const message = this.messages[i];
    if (isFunctionMessage(message) && message.content != null) {
      return message.content;
    }
    if (isToolMessage(message) && message.content != null && typeof message.content === "string" && this.messages.some(x => x.role === "assistant" && x.tool_calls?.some(y => y.type === "function" && y.id === message.tool_call_id))) {
      return message.content;
    }
  }
  return;
}, _AbstractChatCompletionRunner_calculateTotalUsage = function _AbstractChatCompletionRunner_calculateTotalUsage2() {
  const total = {
    completion_tokens: 0,
    prompt_tokens: 0,
    total_tokens: 0
  };
  for (const {
    usage
  } of this._chatCompletions) {
    if (usage) {
      total.completion_tokens += usage.completion_tokens;
      total.prompt_tokens += usage.prompt_tokens;
      total.total_tokens += usage.total_tokens;
    }
  }
  return total;
}, _AbstractChatCompletionRunner_validateParams = function _AbstractChatCompletionRunner_validateParams2(params) {
  if (params.n != null && params.n > 1) {
    throw new OpenAIError("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.");
  }
}, _AbstractChatCompletionRunner_stringifyFunctionCallResult = function _AbstractChatCompletionRunner_stringifyFunctionCallResult2(rawContent) {
  return typeof rawContent === "string" ? rawContent : rawContent === void 0 ? "undefined" : JSON.stringify(rawContent);
};

// node_modules/openai/lib/ChatCompletionRunner.mjs
var ChatCompletionRunner = class extends AbstractChatCompletionRunner {
  static runFunctions(client, params, options) {
    const runner = new ChatCompletionRunner();
    const opts = {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "runFunctions"
      }
    };
    runner._run(() => runner._runFunctions(client, params, opts));
    return runner;
  }
  static runTools(client, params, options) {
    const runner = new ChatCompletionRunner();
    const opts = {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "runTools"
      }
    };
    runner._run(() => runner._runTools(client, params, opts));
    return runner;
  }
  _addMessage(message, emit = true) {
    super._addMessage(message, emit);
    if (isAssistantMessage(message) && message.content) {
      this._emit("content", message.content);
    }
  }
};

// node_modules/openai/_vendor/partial-json-parser/parser.mjs
var STR = 1;
var NUM = 2;
var ARR = 4;
var OBJ = 8;
var NULL = 16;
var BOOL = 32;
var NAN = 64;
var INFINITY = 128;
var MINUS_INFINITY = 256;
var INF = INFINITY | MINUS_INFINITY;
var SPECIAL = NULL | BOOL | INF | NAN;
var ATOM = STR | NUM | SPECIAL;
var COLLECTION = ARR | OBJ;
var ALL = ATOM | COLLECTION;
var Allow = {
  STR,
  NUM,
  ARR,
  OBJ,
  NULL,
  BOOL,
  NAN,
  INFINITY,
  MINUS_INFINITY,
  INF,
  SPECIAL,
  ATOM,
  COLLECTION,
  ALL
};
var PartialJSON = class extends Error {};
var MalformedJSON = class extends Error {};
function parseJSON(jsonString, allowPartial = Allow.ALL) {
  if (typeof jsonString !== "string") {
    throw new TypeError(`expecting str, got ${typeof jsonString}`);
  }
  if (!jsonString.trim()) {
    throw new Error(`${jsonString} is empty`);
  }
  return _parseJSON(jsonString.trim(), allowPartial);
}
var _parseJSON = (jsonString, allow) => {
  const length = jsonString.length;
  let index = 0;
  const markPartialJSON = msg => {
    throw new PartialJSON(`${msg} at position ${index}`);
  };
  const throwMalformedError = msg => {
    throw new MalformedJSON(`${msg} at position ${index}`);
  };
  const parseAny = () => {
    skipBlank();
    if (index >= length) markPartialJSON("Unexpected end of input");
    if (jsonString[index] === '"') return parseStr();
    if (jsonString[index] === "{") return parseObj();
    if (jsonString[index] === "[") return parseArr();
    if (jsonString.substring(index, index + 4) === "null" || Allow.NULL & allow && length - index < 4 && "null".startsWith(jsonString.substring(index))) {
      index += 4;
      return null;
    }
    if (jsonString.substring(index, index + 4) === "true" || Allow.BOOL & allow && length - index < 4 && "true".startsWith(jsonString.substring(index))) {
      index += 4;
      return true;
    }
    if (jsonString.substring(index, index + 5) === "false" || Allow.BOOL & allow && length - index < 5 && "false".startsWith(jsonString.substring(index))) {
      index += 5;
      return false;
    }
    if (jsonString.substring(index, index + 8) === "Infinity" || Allow.INFINITY & allow && length - index < 8 && "Infinity".startsWith(jsonString.substring(index))) {
      index += 8;
      return Infinity;
    }
    if (jsonString.substring(index, index + 9) === "-Infinity" || Allow.MINUS_INFINITY & allow && 1 < length - index && length - index < 9 && "-Infinity".startsWith(jsonString.substring(index))) {
      index += 9;
      return -Infinity;
    }
    if (jsonString.substring(index, index + 3) === "NaN" || Allow.NAN & allow && length - index < 3 && "NaN".startsWith(jsonString.substring(index))) {
      index += 3;
      return NaN;
    }
    return parseNum();
  };
  const parseStr = () => {
    const start = index;
    let escape2 = false;
    index++;
    while (index < length && (jsonString[index] !== '"' || escape2 && jsonString[index - 1] === "\\")) {
      escape2 = jsonString[index] === "\\" ? !escape2 : false;
      index++;
    }
    if (jsonString.charAt(index) == '"') {
      try {
        return JSON.parse(jsonString.substring(start, ++index - Number(escape2)));
      } catch (e) {
        throwMalformedError(String(e));
      }
    } else if (Allow.STR & allow) {
      try {
        return JSON.parse(jsonString.substring(start, index - Number(escape2)) + '"');
      } catch (e) {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf("\\")) + '"');
      }
    }
    markPartialJSON("Unterminated string literal");
  };
  const parseObj = () => {
    index++;
    skipBlank();
    const obj = {};
    try {
      while (jsonString[index] !== "}") {
        skipBlank();
        if (index >= length && Allow.OBJ & allow) return obj;
        const key = parseStr();
        skipBlank();
        index++;
        try {
          const value = parseAny();
          Object.defineProperty(obj, key, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        } catch (e) {
          if (Allow.OBJ & allow) return obj;else throw e;
        }
        skipBlank();
        if (jsonString[index] === ",") index++;
      }
    } catch (e) {
      if (Allow.OBJ & allow) return obj;else markPartialJSON("Expected '}' at end of object");
    }
    index++;
    return obj;
  };
  const parseArr = () => {
    index++;
    const arr = [];
    try {
      while (jsonString[index] !== "]") {
        arr.push(parseAny());
        skipBlank();
        if (jsonString[index] === ",") {
          index++;
        }
      }
    } catch (e) {
      if (Allow.ARR & allow) {
        return arr;
      }
      markPartialJSON("Expected ']' at end of array");
    }
    index++;
    return arr;
  };
  const parseNum = () => {
    if (index === 0) {
      if (jsonString === "-" && Allow.NUM & allow) markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString);
      } catch (e) {
        if (Allow.NUM & allow) {
          try {
            if ("." === jsonString[jsonString.length - 1]) return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf(".")));
            return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf("e")));
          } catch (e2) {}
        }
        throwMalformedError(String(e));
      }
    }
    const start = index;
    if (jsonString[index] === "-") index++;
    while (jsonString[index] && !",]}".includes(jsonString[index])) index++;
    if (index == length && !(Allow.NUM & allow)) markPartialJSON("Unterminated number literal");
    try {
      return JSON.parse(jsonString.substring(start, index));
    } catch (e) {
      if (jsonString.substring(start, index) === "-" && Allow.NUM & allow) markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf("e")));
      } catch (e2) {
        throwMalformedError(String(e2));
      }
    }
  };
  const skipBlank = () => {
    while (index < length && " \n\r	".includes(jsonString[index])) {
      index++;
    }
  };
  return parseAny();
};
var partialParse = input => parseJSON(input, Allow.ALL ^ Allow.NUM);

// node_modules/openai/lib/ChatCompletionStream.mjs
var __classPrivateFieldSet5 = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet6 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChatCompletionStream_instances, _ChatCompletionStream_params, _ChatCompletionStream_choiceEventStates, _ChatCompletionStream_currentChatCompletionSnapshot, _ChatCompletionStream_beginRequest, _ChatCompletionStream_getChoiceEventState, _ChatCompletionStream_addChunk, _ChatCompletionStream_emitToolCallDoneEvent, _ChatCompletionStream_emitContentDoneEvents, _ChatCompletionStream_endRequest, _ChatCompletionStream_getAutoParseableResponseFormat, _ChatCompletionStream_accumulateChatCompletion;
var ChatCompletionStream = class extends AbstractChatCompletionRunner {
  constructor(params) {
    super();
    _ChatCompletionStream_instances.add(this);
    _ChatCompletionStream_params.set(this, void 0);
    _ChatCompletionStream_choiceEventStates.set(this, void 0);
    _ChatCompletionStream_currentChatCompletionSnapshot.set(this, void 0);
    __classPrivateFieldSet5(this, _ChatCompletionStream_params, params, "f");
    __classPrivateFieldSet5(this, _ChatCompletionStream_choiceEventStates, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return __classPrivateFieldGet6(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
  }
  static fromReadableStream(stream) {
    const runner = new ChatCompletionStream(null);
    runner._run(() => runner._fromReadableStream(stream));
    return runner;
  }
  static createChatCompletion(client, params, options) {
    const runner = new ChatCompletionStream(params);
    runner._run(() => runner._runChatCompletion(client, {
      ...params,
      stream: true
    }, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    }));
    return runner;
  }
  async _createChatCompletion(client, params, options) {
    super._createChatCompletion;
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
    const stream = await client.chat.completions.create({
      ...params,
      stream: true
    }, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const chunk of stream) {
      __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
  }
  async _fromReadableStream(readableStream, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
    this._connected();
    const stream = Stream.fromReadableStream(readableStream, this.controller);
    let chatId;
    for await (const chunk of stream) {
      if (chatId && chatId !== chunk.id) {
        this._addChatCompletion(__classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
      }
      __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
      chatId = chunk.id;
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
  }
  [(_ChatCompletionStream_params = /* @__PURE__ */new WeakMap(), _ChatCompletionStream_choiceEventStates = /* @__PURE__ */new WeakMap(), _ChatCompletionStream_currentChatCompletionSnapshot = /* @__PURE__ */new WeakMap(), _ChatCompletionStream_instances = /* @__PURE__ */new WeakSet(), _ChatCompletionStream_beginRequest = function _ChatCompletionStream_beginRequest2() {
    if (this.ended) return;
    __classPrivateFieldSet5(this, _ChatCompletionStream_currentChatCompletionSnapshot, void 0, "f");
  }, _ChatCompletionStream_getChoiceEventState = function _ChatCompletionStream_getChoiceEventState2(choice) {
    let state = __classPrivateFieldGet6(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index];
    if (state) {
      return state;
    }
    state = {
      content_done: false,
      refusal_done: false,
      logprobs_content_done: false,
      logprobs_refusal_done: false,
      done_tool_calls: /* @__PURE__ */new Set(),
      current_tool_call_index: null
    };
    __classPrivateFieldGet6(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index] = state;
    return state;
  }, _ChatCompletionStream_addChunk = function _ChatCompletionStream_addChunk2(chunk) {
    if (this.ended) return;
    const completion = __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_accumulateChatCompletion).call(this, chunk);
    this._emit("chunk", chunk, completion);
    for (const choice of chunk.choices) {
      const choiceSnapshot = completion.choices[choice.index];
      if (choice.delta.content != null && choiceSnapshot.message?.role === "assistant" && choiceSnapshot.message?.content) {
        this._emit("content", choice.delta.content, choiceSnapshot.message.content);
        this._emit("content.delta", {
          delta: choice.delta.content,
          snapshot: choiceSnapshot.message.content,
          parsed: choiceSnapshot.message.parsed
        });
      }
      if (choice.delta.refusal != null && choiceSnapshot.message?.role === "assistant" && choiceSnapshot.message?.refusal) {
        this._emit("refusal.delta", {
          delta: choice.delta.refusal,
          snapshot: choiceSnapshot.message.refusal
        });
      }
      if (choice.logprobs?.content != null && choiceSnapshot.message?.role === "assistant") {
        this._emit("logprobs.content.delta", {
          content: choice.logprobs?.content,
          snapshot: choiceSnapshot.logprobs?.content ?? []
        });
      }
      if (choice.logprobs?.refusal != null && choiceSnapshot.message?.role === "assistant") {
        this._emit("logprobs.refusal.delta", {
          refusal: choice.logprobs?.refusal,
          snapshot: choiceSnapshot.logprobs?.refusal ?? []
        });
      }
      const state = __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
      if (choiceSnapshot.finish_reason) {
        __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
        if (state.current_tool_call_index != null) {
          __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
        }
      }
      for (const toolCall of choice.delta.tool_calls ?? []) {
        if (state.current_tool_call_index !== toolCall.index) {
          __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
          if (state.current_tool_call_index != null) {
            __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
          }
        }
        state.current_tool_call_index = toolCall.index;
      }
      for (const toolCallDelta of choice.delta.tool_calls ?? []) {
        const toolCallSnapshot = choiceSnapshot.message.tool_calls?.[toolCallDelta.index];
        if (!toolCallSnapshot?.type) {
          continue;
        }
        if (toolCallSnapshot?.type === "function") {
          this._emit("tool_calls.function.arguments.delta", {
            name: toolCallSnapshot.function?.name,
            index: toolCallDelta.index,
            arguments: toolCallSnapshot.function.arguments,
            parsed_arguments: toolCallSnapshot.function.parsed_arguments,
            arguments_delta: toolCallDelta.function?.arguments ?? ""
          });
        } else {
          assertNever2(toolCallSnapshot?.type);
        }
      }
    }
  }, _ChatCompletionStream_emitToolCallDoneEvent = function _ChatCompletionStream_emitToolCallDoneEvent2(choiceSnapshot, toolCallIndex) {
    const state = __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
    if (state.done_tool_calls.has(toolCallIndex)) {
      return;
    }
    const toolCallSnapshot = choiceSnapshot.message.tool_calls?.[toolCallIndex];
    if (!toolCallSnapshot) {
      throw new Error("no tool call snapshot");
    }
    if (!toolCallSnapshot.type) {
      throw new Error("tool call snapshot missing `type`");
    }
    if (toolCallSnapshot.type === "function") {
      const inputTool = __classPrivateFieldGet6(this, _ChatCompletionStream_params, "f")?.tools?.find(tool => tool.type === "function" && tool.function.name === toolCallSnapshot.function.name);
      this._emit("tool_calls.function.arguments.done", {
        name: toolCallSnapshot.function.name,
        index: toolCallIndex,
        arguments: toolCallSnapshot.function.arguments,
        parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCallSnapshot.function.arguments) : inputTool?.function.strict ? JSON.parse(toolCallSnapshot.function.arguments) : null
      });
    } else {
      assertNever2(toolCallSnapshot.type);
    }
  }, _ChatCompletionStream_emitContentDoneEvents = function _ChatCompletionStream_emitContentDoneEvents2(choiceSnapshot) {
    const state = __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
    if (choiceSnapshot.message.content && !state.content_done) {
      state.content_done = true;
      const responseFormat = __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this);
      this._emit("content.done", {
        content: choiceSnapshot.message.content,
        parsed: responseFormat ? responseFormat.$parseRaw(choiceSnapshot.message.content) : null
      });
    }
    if (choiceSnapshot.message.refusal && !state.refusal_done) {
      state.refusal_done = true;
      this._emit("refusal.done", {
        refusal: choiceSnapshot.message.refusal
      });
    }
    if (choiceSnapshot.logprobs?.content && !state.logprobs_content_done) {
      state.logprobs_content_done = true;
      this._emit("logprobs.content.done", {
        content: choiceSnapshot.logprobs.content
      });
    }
    if (choiceSnapshot.logprobs?.refusal && !state.logprobs_refusal_done) {
      state.logprobs_refusal_done = true;
      this._emit("logprobs.refusal.done", {
        refusal: choiceSnapshot.logprobs.refusal
      });
    }
  }, _ChatCompletionStream_endRequest = function _ChatCompletionStream_endRequest2() {
    if (this.ended) {
      throw new OpenAIError(`stream has ended, this shouldn't happen`);
    }
    const snapshot = __classPrivateFieldGet6(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    if (!snapshot) {
      throw new OpenAIError(`request ended without sending any chunks`);
    }
    __classPrivateFieldSet5(this, _ChatCompletionStream_currentChatCompletionSnapshot, void 0, "f");
    __classPrivateFieldSet5(this, _ChatCompletionStream_choiceEventStates, [], "f");
    return finalizeChatCompletion(snapshot, __classPrivateFieldGet6(this, _ChatCompletionStream_params, "f"));
  }, _ChatCompletionStream_getAutoParseableResponseFormat = function _ChatCompletionStream_getAutoParseableResponseFormat2() {
    const responseFormat = __classPrivateFieldGet6(this, _ChatCompletionStream_params, "f")?.response_format;
    if (isAutoParsableResponseFormat(responseFormat)) {
      return responseFormat;
    }
    return null;
  }, _ChatCompletionStream_accumulateChatCompletion = function _ChatCompletionStream_accumulateChatCompletion2(chunk) {
    var _a2, _b, _c, _d;
    let snapshot = __classPrivateFieldGet6(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    const {
      choices,
      ...rest
    } = chunk;
    if (!snapshot) {
      snapshot = __classPrivateFieldSet5(this, _ChatCompletionStream_currentChatCompletionSnapshot, {
        ...rest,
        choices: []
      }, "f");
    } else {
      Object.assign(snapshot, rest);
    }
    for (const {
      delta,
      finish_reason,
      index,
      logprobs = null,
      ...other
    } of chunk.choices) {
      let choice = snapshot.choices[index];
      if (!choice) {
        choice = snapshot.choices[index] = {
          finish_reason,
          index,
          message: {},
          logprobs,
          ...other
        };
      }
      if (logprobs) {
        if (!choice.logprobs) {
          choice.logprobs = Object.assign({}, logprobs);
        } else {
          const {
            content: content2,
            refusal: refusal2,
            ...rest3
          } = logprobs;
          assertIsEmpty(rest3);
          Object.assign(choice.logprobs, rest3);
          if (content2) {
            (_a2 = choice.logprobs).content ?? (_a2.content = []);
            choice.logprobs.content.push(...content2);
          }
          if (refusal2) {
            (_b = choice.logprobs).refusal ?? (_b.refusal = []);
            choice.logprobs.refusal.push(...refusal2);
          }
        }
      }
      if (finish_reason) {
        choice.finish_reason = finish_reason;
        if (__classPrivateFieldGet6(this, _ChatCompletionStream_params, "f") && hasAutoParseableInput(__classPrivateFieldGet6(this, _ChatCompletionStream_params, "f"))) {
          if (finish_reason === "length") {
            throw new LengthFinishReasonError();
          }
          if (finish_reason === "content_filter") {
            throw new ContentFilterFinishReasonError();
          }
        }
      }
      Object.assign(choice, other);
      if (!delta) continue;
      const {
        content,
        refusal,
        function_call,
        role,
        tool_calls,
        ...rest2
      } = delta;
      assertIsEmpty(rest2);
      Object.assign(choice.message, rest2);
      if (refusal) {
        choice.message.refusal = (choice.message.refusal || "") + refusal;
      }
      if (role) choice.message.role = role;
      if (function_call) {
        if (!choice.message.function_call) {
          choice.message.function_call = function_call;
        } else {
          if (function_call.name) choice.message.function_call.name = function_call.name;
          if (function_call.arguments) {
            (_c = choice.message.function_call).arguments ?? (_c.arguments = "");
            choice.message.function_call.arguments += function_call.arguments;
          }
        }
      }
      if (content) {
        choice.message.content = (choice.message.content || "") + content;
        if (!choice.message.refusal && __classPrivateFieldGet6(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this)) {
          choice.message.parsed = partialParse(choice.message.content);
        }
      }
      if (tool_calls) {
        if (!choice.message.tool_calls) choice.message.tool_calls = [];
        for (const {
          index: index2,
          id,
          type,
          function: fn,
          ...rest3
        } of tool_calls) {
          const tool_call = (_d = choice.message.tool_calls)[index2] ?? (_d[index2] = {});
          Object.assign(tool_call, rest3);
          if (id) tool_call.id = id;
          if (type) tool_call.type = type;
          if (fn) tool_call.function ?? (tool_call.function = {
            name: fn.name ?? "",
            arguments: ""
          });
          if (fn?.name) tool_call.function.name = fn.name;
          if (fn?.arguments) {
            tool_call.function.arguments += fn.arguments;
            if (shouldParseToolCall(__classPrivateFieldGet6(this, _ChatCompletionStream_params, "f"), tool_call)) {
              tool_call.function.parsed_arguments = partialParse(tool_call.function.arguments);
            }
          }
        }
      }
    }
    return snapshot;
  }, Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("chunk", chunk => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(chunk);
      } else {
        pushQueue.push(chunk);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", err => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", err => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return {
              value: void 0,
              done: true
            };
          }
          return new Promise((resolve, reject) => readQueue.push({
            resolve,
            reject
          })).then(chunk2 => chunk2 ? {
            value: chunk2,
            done: false
          } : {
            value: void 0,
            done: true
          });
        }
        const chunk = pushQueue.shift();
        return {
          value: chunk,
          done: false
        };
      },
      return: async () => {
        this.abort();
        return {
          value: void 0,
          done: true
        };
      }
    };
  }
  toReadableStream() {
    const stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
    return stream.toReadableStream();
  }
};
function finalizeChatCompletion(snapshot, params) {
  const {
    id,
    choices,
    created,
    model,
    system_fingerprint,
    ...rest
  } = snapshot;
  const completion = {
    ...rest,
    id,
    choices: choices.map(({
      message,
      finish_reason,
      index,
      logprobs,
      ...choiceRest
    }) => {
      if (!finish_reason) {
        throw new OpenAIError(`missing finish_reason for choice ${index}`);
      }
      const {
        content = null,
        function_call,
        tool_calls,
        ...messageRest
      } = message;
      const role = message.role;
      if (!role) {
        throw new OpenAIError(`missing role for choice ${index}`);
      }
      if (function_call) {
        const {
          arguments: args,
          name
        } = function_call;
        if (args == null) {
          throw new OpenAIError(`missing function_call.arguments for choice ${index}`);
        }
        if (!name) {
          throw new OpenAIError(`missing function_call.name for choice ${index}`);
        }
        return {
          ...choiceRest,
          message: {
            content,
            function_call: {
              arguments: args,
              name
            },
            role,
            refusal: message.refusal ?? null
          },
          finish_reason,
          index,
          logprobs
        };
      }
      if (tool_calls) {
        return {
          ...choiceRest,
          index,
          finish_reason,
          logprobs,
          message: {
            ...messageRest,
            role,
            content,
            refusal: message.refusal ?? null,
            tool_calls: tool_calls.map((tool_call, i) => {
              const {
                function: fn,
                type,
                id: id2,
                ...toolRest
              } = tool_call;
              const {
                arguments: args,
                name,
                ...fnRest
              } = fn || {};
              if (id2 == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].id
${str(snapshot)}`);
              }
              if (type == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].type
${str(snapshot)}`);
              }
              if (name == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].function.name
${str(snapshot)}`);
              }
              if (args == null) {
                throw new OpenAIError(`missing choices[${index}].tool_calls[${i}].function.arguments
${str(snapshot)}`);
              }
              return {
                ...toolRest,
                id: id2,
                type,
                function: {
                  ...fnRest,
                  name,
                  arguments: args
                }
              };
            })
          }
        };
      }
      return {
        ...choiceRest,
        message: {
          ...messageRest,
          content,
          role,
          refusal: message.refusal ?? null
        },
        finish_reason,
        index,
        logprobs
      };
    }),
    created,
    model,
    object: "chat.completion",
    ...(system_fingerprint ? {
      system_fingerprint
    } : {})
  };
  return maybeParseChatCompletion(completion, params);
}
function str(x) {
  return JSON.stringify(x);
}
function assertIsEmpty(obj) {
  return;
}
function assertNever2(_x) {}

// node_modules/openai/lib/ChatCompletionStreamingRunner.mjs
var ChatCompletionStreamingRunner = class extends ChatCompletionStream {
  static fromReadableStream(stream) {
    const runner = new ChatCompletionStreamingRunner(null);
    runner._run(() => runner._fromReadableStream(stream));
    return runner;
  }
  static runFunctions(client, params, options) {
    const runner = new ChatCompletionStreamingRunner(null);
    const opts = {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "runFunctions"
      }
    };
    runner._run(() => runner._runFunctions(client, params, opts));
    return runner;
  }
  static runTools(client, params, options) {
    const runner = new ChatCompletionStreamingRunner(params);
    const opts = {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "runTools"
      }
    };
    runner._run(() => runner._runTools(client, params, opts));
    return runner;
  }
};

// node_modules/openai/resources/beta/chat/completions.mjs
var Completions2 = class extends APIResource {
  parse(body, options) {
    validateInputTools(body.tools);
    return this._client.chat.completions.create(body, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "beta.chat.completions.parse"
      }
    })._thenUnwrap(completion => parseChatCompletion(completion, body));
  }
  runFunctions(body, options) {
    if (body.stream) {
      return ChatCompletionStreamingRunner.runFunctions(this._client, body, options);
    }
    return ChatCompletionRunner.runFunctions(this._client, body, options);
  }
  runTools(body, options) {
    if (body.stream) {
      return ChatCompletionStreamingRunner.runTools(this._client, body, options);
    }
    return ChatCompletionRunner.runTools(this._client, body, options);
  }
  stream(body, options) {
    return ChatCompletionStream.createChatCompletion(this._client, body, options);
  }
};

// node_modules/openai/resources/beta/chat/chat.mjs
var Chat2 = class extends APIResource {
  constructor() {
    super(...arguments);
    this.completions = new Completions2(this._client);
  }
};
(function (Chat3) {
  Chat3.Completions = Completions2;
})(Chat2 || (Chat2 = {}));

// node_modules/openai/resources/beta/realtime/sessions.mjs
var Sessions = class extends APIResource {
  create(body, options) {
    return this._client.post("/realtime/sessions", {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};

// node_modules/openai/resources/beta/realtime/transcription-sessions.mjs
var TranscriptionSessions = class extends APIResource {
  create(body, options) {
    return this._client.post("/realtime/transcription_sessions", {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};

// node_modules/openai/resources/beta/realtime/realtime.mjs
var Realtime = class extends APIResource {
  constructor() {
    super(...arguments);
    this.sessions = new Sessions(this._client);
    this.transcriptionSessions = new TranscriptionSessions(this._client);
  }
};
Realtime.Sessions = Sessions;
Realtime.TranscriptionSessions = TranscriptionSessions;

// node_modules/openai/resources/beta/threads/messages.mjs
var Messages2 = class extends APIResource {
  create(threadId, body, options) {
    return this._client.post(`/threads/${threadId}/messages`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  retrieve(threadId, messageId, options) {
    return this._client.get(`/threads/${threadId}/messages/${messageId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  update(threadId, messageId, body, options) {
    return this._client.post(`/threads/${threadId}/messages/${messageId}`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  list(threadId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(threadId, {}, query);
    }
    return this._client.getAPIList(`/threads/${threadId}/messages`, MessagesPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  del(threadId, messageId, options) {
    return this._client.delete(`/threads/${threadId}/messages/${messageId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};
var MessagesPage = class extends CursorPage {};
Messages2.MessagesPage = MessagesPage;

// node_modules/openai/resources/beta/threads/runs/steps.mjs
var Steps = class extends APIResource {
  retrieve(threadId, runId, stepId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.retrieve(threadId, runId, stepId, {}, query);
    }
    return this._client.get(`/threads/${threadId}/runs/${runId}/steps/${stepId}`, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  list(threadId, runId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(threadId, runId, {}, query);
    }
    return this._client.getAPIList(`/threads/${threadId}/runs/${runId}/steps`, RunStepsPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};
var RunStepsPage = class extends CursorPage {};
Steps.RunStepsPage = RunStepsPage;

// node_modules/openai/resources/beta/threads/runs/runs.mjs
var Runs = class extends APIResource {
  constructor() {
    super(...arguments);
    this.steps = new Steps(this._client);
  }
  create(threadId, params, options) {
    const {
      include,
      ...body
    } = params;
    return this._client.post(`/threads/${threadId}/runs`, {
      query: {
        include
      },
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      },
      stream: params.stream ?? false
    });
  }
  retrieve(threadId, runId, options) {
    return this._client.get(`/threads/${threadId}/runs/${runId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  update(threadId, runId, body, options) {
    return this._client.post(`/threads/${threadId}/runs/${runId}`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  list(threadId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(threadId, {}, query);
    }
    return this._client.getAPIList(`/threads/${threadId}/runs`, RunsPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  cancel(threadId, runId, options) {
    return this._client.post(`/threads/${threadId}/runs/${runId}/cancel`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  async createAndPoll(threadId, body, options) {
    const run = await this.create(threadId, body, options);
    return await this.poll(threadId, run.id, options);
  }
  createAndStream(threadId, body, options) {
    return AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
  }
  async poll(threadId, runId, options) {
    const headers = {
      ...options?.headers,
      "X-Stainless-Poll-Helper": "true"
    };
    if (options?.pollIntervalMs) {
      headers["X-Stainless-Custom-Poll-Interval"] = options.pollIntervalMs.toString();
    }
    while (true) {
      const {
        data: run,
        response
      } = await this.retrieve(threadId, runId, {
        ...options,
        headers: {
          ...options?.headers,
          ...headers
        }
      }).withResponse();
      switch (run.status) {
        case "queued":
        case "in_progress":
        case "cancelling":
          let sleepInterval = 5e3;
          if (options?.pollIntervalMs) {
            sleepInterval = options.pollIntervalMs;
          } else {
            const headerInterval = response.headers.get("openai-poll-after-ms");
            if (headerInterval) {
              const headerIntervalMs = parseInt(headerInterval);
              if (!isNaN(headerIntervalMs)) {
                sleepInterval = headerIntervalMs;
              }
            }
          }
          await sleep(sleepInterval);
          break;
        case "requires_action":
        case "incomplete":
        case "cancelled":
        case "completed":
        case "failed":
        case "expired":
          return run;
      }
    }
  }
  stream(threadId, body, options) {
    return AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
  }
  submitToolOutputs(threadId, runId, body, options) {
    return this._client.post(`/threads/${threadId}/runs/${runId}/submit_tool_outputs`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      },
      stream: body.stream ?? false
    });
  }
  async submitToolOutputsAndPoll(threadId, runId, body, options) {
    const run = await this.submitToolOutputs(threadId, runId, body, options);
    return await this.poll(threadId, run.id, options);
  }
  submitToolOutputsStream(threadId, runId, body, options) {
    return AssistantStream.createToolAssistantStream(threadId, runId, this._client.beta.threads.runs, body, options);
  }
};
var RunsPage = class extends CursorPage {};
Runs.RunsPage = RunsPage;
Runs.Steps = Steps;
Runs.RunStepsPage = RunStepsPage;

// node_modules/openai/resources/beta/threads/threads.mjs
var Threads = class extends APIResource {
  constructor() {
    super(...arguments);
    this.runs = new Runs(this._client);
    this.messages = new Messages2(this._client);
  }
  create(body = {}, options) {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post("/threads", {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  retrieve(threadId, options) {
    return this._client.get(`/threads/${threadId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  update(threadId, body, options) {
    return this._client.post(`/threads/${threadId}`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  del(threadId, options) {
    return this._client.delete(`/threads/${threadId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  createAndRun(body, options) {
    return this._client.post("/threads/runs", {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      },
      stream: body.stream ?? false
    });
  }
  async createAndRunPoll(body, options) {
    const run = await this.createAndRun(body, options);
    return await this.runs.poll(run.thread_id, run.id, options);
  }
  createAndRunStream(body, options) {
    return AssistantStream.createThreadAssistantStream(body, this._client.beta.threads, options);
  }
};
Threads.Runs = Runs;
Threads.RunsPage = RunsPage;
Threads.Messages = Messages2;
Threads.MessagesPage = MessagesPage;

// node_modules/openai/resources/beta/beta.mjs
var Beta = class extends APIResource {
  constructor() {
    super(...arguments);
    this.realtime = new Realtime(this._client);
    this.chat = new Chat2(this._client);
    this.assistants = new Assistants(this._client);
    this.threads = new Threads(this._client);
  }
};
Beta.Realtime = Realtime;
Beta.Assistants = Assistants;
Beta.AssistantsPage = AssistantsPage;
Beta.Threads = Threads;

// node_modules/openai/resources/completions.mjs
var Completions3 = class extends APIResource {
  create(body, options) {
    return this._client.post("/completions", {
      body,
      ...options,
      stream: body.stream ?? false
    });
  }
};

// node_modules/openai/resources/containers/files/content.mjs
var Content = class extends APIResource {
  retrieve(containerId, fileId, options) {
    return this._client.get(`/containers/${containerId}/files/${fileId}/content`, {
      ...options,
      headers: {
        Accept: "application/binary",
        ...options?.headers
      },
      __binaryResponse: true
    });
  }
};

// node_modules/openai/resources/containers/files/files.mjs
var Files = class extends APIResource {
  constructor() {
    super(...arguments);
    this.content = new Content(this._client);
  }
  create(containerId, body, options) {
    return this._client.post(`/containers/${containerId}/files`, multipartFormRequestOptions({
      body,
      ...options
    }));
  }
  retrieve(containerId, fileId, options) {
    return this._client.get(`/containers/${containerId}/files/${fileId}`, options);
  }
  list(containerId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(containerId, {}, query);
    }
    return this._client.getAPIList(`/containers/${containerId}/files`, FileListResponsesPage, {
      query,
      ...options
    });
  }
  del(containerId, fileId, options) {
    return this._client.delete(`/containers/${containerId}/files/${fileId}`, {
      ...options,
      headers: {
        Accept: "*/*",
        ...options?.headers
      }
    });
  }
};
var FileListResponsesPage = class extends CursorPage {};
Files.FileListResponsesPage = FileListResponsesPage;
Files.Content = Content;

// node_modules/openai/resources/containers/containers.mjs
var Containers = class extends APIResource {
  constructor() {
    super(...arguments);
    this.files = new Files(this._client);
  }
  create(body, options) {
    return this._client.post("/containers", {
      body,
      ...options
    });
  }
  retrieve(containerId, options) {
    return this._client.get(`/containers/${containerId}`, options);
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/containers", ContainerListResponsesPage, {
      query,
      ...options
    });
  }
  del(containerId, options) {
    return this._client.delete(`/containers/${containerId}`, {
      ...options,
      headers: {
        Accept: "*/*",
        ...options?.headers
      }
    });
  }
};
var ContainerListResponsesPage = class extends CursorPage {};
Containers.ContainerListResponsesPage = ContainerListResponsesPage;
Containers.Files = Files;
Containers.FileListResponsesPage = FileListResponsesPage;

// node_modules/openai/resources/embeddings.mjs
var Embeddings = class extends APIResource {
  create(body, options) {
    const hasUserProvidedEncodingFormat = !!body.encoding_format;
    let encoding_format = hasUserProvidedEncodingFormat ? body.encoding_format : "base64";
    if (hasUserProvidedEncodingFormat) {
      debug("Request", "User defined encoding_format:", body.encoding_format);
    }
    const response = this._client.post("/embeddings", {
      body: {
        ...body,
        encoding_format
      },
      ...options
    });
    if (hasUserProvidedEncodingFormat) {
      return response;
    }
    debug("response", "Decoding base64 embeddings to float32 array");
    return response._thenUnwrap(response2 => {
      if (response2 && response2.data) {
        response2.data.forEach(embeddingBase64Obj => {
          const embeddingBase64Str = embeddingBase64Obj.embedding;
          embeddingBase64Obj.embedding = toFloat32Array(embeddingBase64Str);
        });
      }
      return response2;
    });
  }
};

// node_modules/openai/resources/evals/runs/output-items.mjs
var OutputItems = class extends APIResource {
  retrieve(evalId, runId, outputItemId, options) {
    return this._client.get(`/evals/${evalId}/runs/${runId}/output_items/${outputItemId}`, options);
  }
  list(evalId, runId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(evalId, runId, {}, query);
    }
    return this._client.getAPIList(`/evals/${evalId}/runs/${runId}/output_items`, OutputItemListResponsesPage, {
      query,
      ...options
    });
  }
};
var OutputItemListResponsesPage = class extends CursorPage {};
OutputItems.OutputItemListResponsesPage = OutputItemListResponsesPage;

// node_modules/openai/resources/evals/runs/runs.mjs
var Runs2 = class extends APIResource {
  constructor() {
    super(...arguments);
    this.outputItems = new OutputItems(this._client);
  }
  create(evalId, body, options) {
    return this._client.post(`/evals/${evalId}/runs`, {
      body,
      ...options
    });
  }
  retrieve(evalId, runId, options) {
    return this._client.get(`/evals/${evalId}/runs/${runId}`, options);
  }
  list(evalId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(evalId, {}, query);
    }
    return this._client.getAPIList(`/evals/${evalId}/runs`, RunListResponsesPage, {
      query,
      ...options
    });
  }
  del(evalId, runId, options) {
    return this._client.delete(`/evals/${evalId}/runs/${runId}`, options);
  }
  cancel(evalId, runId, options) {
    return this._client.post(`/evals/${evalId}/runs/${runId}`, options);
  }
};
var RunListResponsesPage = class extends CursorPage {};
Runs2.RunListResponsesPage = RunListResponsesPage;
Runs2.OutputItems = OutputItems;
Runs2.OutputItemListResponsesPage = OutputItemListResponsesPage;

// node_modules/openai/resources/evals/evals.mjs
var Evals = class extends APIResource {
  constructor() {
    super(...arguments);
    this.runs = new Runs2(this._client);
  }
  create(body, options) {
    return this._client.post("/evals", {
      body,
      ...options
    });
  }
  retrieve(evalId, options) {
    return this._client.get(`/evals/${evalId}`, options);
  }
  update(evalId, body, options) {
    return this._client.post(`/evals/${evalId}`, {
      body,
      ...options
    });
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/evals", EvalListResponsesPage, {
      query,
      ...options
    });
  }
  del(evalId, options) {
    return this._client.delete(`/evals/${evalId}`, options);
  }
};
var EvalListResponsesPage = class extends CursorPage {};
Evals.EvalListResponsesPage = EvalListResponsesPage;
Evals.Runs = Runs2;
Evals.RunListResponsesPage = RunListResponsesPage;

// node_modules/openai/resources/files.mjs
var Files2 = class extends APIResource {
  create(body, options) {
    return this._client.post("/files", multipartFormRequestOptions({
      body,
      ...options
    }));
  }
  retrieve(fileId, options) {
    return this._client.get(`/files/${fileId}`, options);
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/files", FileObjectsPage, {
      query,
      ...options
    });
  }
  del(fileId, options) {
    return this._client.delete(`/files/${fileId}`, options);
  }
  content(fileId, options) {
    return this._client.get(`/files/${fileId}/content`, {
      ...options,
      headers: {
        Accept: "application/binary",
        ...options?.headers
      },
      __binaryResponse: true
    });
  }
  retrieveContent(fileId, options) {
    return this._client.get(`/files/${fileId}/content`, options);
  }
  async waitForProcessing(id, {
    pollInterval = 5e3,
    maxWait = 30 * 60 * 1e3
  } = {}) {
    const TERMINAL_STATES = /* @__PURE__ */new Set(["processed", "error", "deleted"]);
    const start = Date.now();
    let file = await this.retrieve(id);
    while (!file.status || !TERMINAL_STATES.has(file.status)) {
      await sleep(pollInterval);
      file = await this.retrieve(id);
      if (Date.now() - start > maxWait) {
        throw new APIConnectionTimeoutError({
          message: `Giving up on waiting for file ${id} to finish processing after ${maxWait} milliseconds.`
        });
      }
    }
    return file;
  }
};
var FileObjectsPage = class extends CursorPage {};
Files2.FileObjectsPage = FileObjectsPage;

// node_modules/openai/resources/fine-tuning/methods.mjs
var Methods = class extends APIResource {};

// node_modules/openai/resources/fine-tuning/alpha/graders.mjs
var Graders = class extends APIResource {
  run(body, options) {
    return this._client.post("/fine_tuning/alpha/graders/run", {
      body,
      ...options
    });
  }
  validate(body, options) {
    return this._client.post("/fine_tuning/alpha/graders/validate", {
      body,
      ...options
    });
  }
};

// node_modules/openai/resources/fine-tuning/alpha/alpha.mjs
var Alpha = class extends APIResource {
  constructor() {
    super(...arguments);
    this.graders = new Graders(this._client);
  }
};
Alpha.Graders = Graders;

// node_modules/openai/resources/fine-tuning/checkpoints/permissions.mjs
var Permissions = class extends APIResource {
  create(fineTunedModelCheckpoint, body, options) {
    return this._client.getAPIList(`/fine_tuning/checkpoints/${fineTunedModelCheckpoint}/permissions`, PermissionCreateResponsesPage, {
      body,
      method: "post",
      ...options
    });
  }
  retrieve(fineTunedModelCheckpoint, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.retrieve(fineTunedModelCheckpoint, {}, query);
    }
    return this._client.get(`/fine_tuning/checkpoints/${fineTunedModelCheckpoint}/permissions`, {
      query,
      ...options
    });
  }
  del(fineTunedModelCheckpoint, permissionId, options) {
    return this._client.delete(`/fine_tuning/checkpoints/${fineTunedModelCheckpoint}/permissions/${permissionId}`, options);
  }
};
var PermissionCreateResponsesPage = class extends Page {};
Permissions.PermissionCreateResponsesPage = PermissionCreateResponsesPage;

// node_modules/openai/resources/fine-tuning/checkpoints/checkpoints.mjs
var Checkpoints = class extends APIResource {
  constructor() {
    super(...arguments);
    this.permissions = new Permissions(this._client);
  }
};
Checkpoints.Permissions = Permissions;
Checkpoints.PermissionCreateResponsesPage = PermissionCreateResponsesPage;

// node_modules/openai/resources/fine-tuning/jobs/checkpoints.mjs
var Checkpoints2 = class extends APIResource {
  list(fineTuningJobId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(fineTuningJobId, {}, query);
    }
    return this._client.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/checkpoints`, FineTuningJobCheckpointsPage, {
      query,
      ...options
    });
  }
};
var FineTuningJobCheckpointsPage = class extends CursorPage {};
Checkpoints2.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;

// node_modules/openai/resources/fine-tuning/jobs/jobs.mjs
var Jobs = class extends APIResource {
  constructor() {
    super(...arguments);
    this.checkpoints = new Checkpoints2(this._client);
  }
  create(body, options) {
    return this._client.post("/fine_tuning/jobs", {
      body,
      ...options
    });
  }
  retrieve(fineTuningJobId, options) {
    return this._client.get(`/fine_tuning/jobs/${fineTuningJobId}`, options);
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/fine_tuning/jobs", FineTuningJobsPage, {
      query,
      ...options
    });
  }
  cancel(fineTuningJobId, options) {
    return this._client.post(`/fine_tuning/jobs/${fineTuningJobId}/cancel`, options);
  }
  listEvents(fineTuningJobId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.listEvents(fineTuningJobId, {}, query);
    }
    return this._client.getAPIList(`/fine_tuning/jobs/${fineTuningJobId}/events`, FineTuningJobEventsPage, {
      query,
      ...options
    });
  }
  pause(fineTuningJobId, options) {
    return this._client.post(`/fine_tuning/jobs/${fineTuningJobId}/pause`, options);
  }
  resume(fineTuningJobId, options) {
    return this._client.post(`/fine_tuning/jobs/${fineTuningJobId}/resume`, options);
  }
};
var FineTuningJobsPage = class extends CursorPage {};
var FineTuningJobEventsPage = class extends CursorPage {};
Jobs.FineTuningJobsPage = FineTuningJobsPage;
Jobs.FineTuningJobEventsPage = FineTuningJobEventsPage;
Jobs.Checkpoints = Checkpoints2;
Jobs.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;

// node_modules/openai/resources/fine-tuning/fine-tuning.mjs
var FineTuning = class extends APIResource {
  constructor() {
    super(...arguments);
    this.methods = new Methods(this._client);
    this.jobs = new Jobs(this._client);
    this.checkpoints = new Checkpoints(this._client);
    this.alpha = new Alpha(this._client);
  }
};
FineTuning.Methods = Methods;
FineTuning.Jobs = Jobs;
FineTuning.FineTuningJobsPage = FineTuningJobsPage;
FineTuning.FineTuningJobEventsPage = FineTuningJobEventsPage;
FineTuning.Checkpoints = Checkpoints;
FineTuning.Alpha = Alpha;

// node_modules/openai/resources/graders/grader-models.mjs
var GraderModels = class extends APIResource {};

// node_modules/openai/resources/graders/graders.mjs
var Graders2 = class extends APIResource {
  constructor() {
    super(...arguments);
    this.graderModels = new GraderModels(this._client);
  }
};
Graders2.GraderModels = GraderModels;

// node_modules/openai/resources/images.mjs
var Images = class extends APIResource {
  createVariation(body, options) {
    return this._client.post("/images/variations", multipartFormRequestOptions({
      body,
      ...options
    }));
  }
  edit(body, options) {
    return this._client.post("/images/edits", multipartFormRequestOptions({
      body,
      ...options
    }));
  }
  generate(body, options) {
    return this._client.post("/images/generations", {
      body,
      ...options
    });
  }
};

// node_modules/openai/resources/models.mjs
var Models = class extends APIResource {
  retrieve(model, options) {
    return this._client.get(`/models/${model}`, options);
  }
  list(options) {
    return this._client.getAPIList("/models", ModelsPage, options);
  }
  del(model, options) {
    return this._client.delete(`/models/${model}`, options);
  }
};
var ModelsPage = class extends Page {};
Models.ModelsPage = ModelsPage;

// node_modules/openai/resources/moderations.mjs
var Moderations = class extends APIResource {
  create(body, options) {
    return this._client.post("/moderations", {
      body,
      ...options
    });
  }
};

// node_modules/openai/lib/ResponsesParser.mjs
function maybeParseResponse(response, params) {
  if (!params || !hasAutoParseableInput2(params)) {
    return {
      ...response,
      output_parsed: null,
      output: response.output.map(item => {
        if (item.type === "function_call") {
          return {
            ...item,
            parsed_arguments: null
          };
        }
        if (item.type === "message") {
          return {
            ...item,
            content: item.content.map(content => ({
              ...content,
              parsed: null
            }))
          };
        } else {
          return item;
        }
      })
    };
  }
  return parseResponse(response, params);
}
function parseResponse(response, params) {
  const output = response.output.map(item => {
    if (item.type === "function_call") {
      return {
        ...item,
        parsed_arguments: parseToolCall2(params, item)
      };
    }
    if (item.type === "message") {
      const content = item.content.map(content2 => {
        if (content2.type === "output_text") {
          return {
            ...content2,
            parsed: parseTextFormat(params, content2.text)
          };
        }
        return content2;
      });
      return {
        ...item,
        content
      };
    }
    return item;
  });
  const parsed = Object.assign({}, response, {
    output
  });
  if (!Object.getOwnPropertyDescriptor(response, "output_text")) {
    addOutputText(parsed);
  }
  Object.defineProperty(parsed, "output_parsed", {
    enumerable: true,
    get() {
      for (const output2 of parsed.output) {
        if (output2.type !== "message") {
          continue;
        }
        for (const content of output2.content) {
          if (content.type === "output_text" && content.parsed !== null) {
            return content.parsed;
          }
        }
      }
      return null;
    }
  });
  return parsed;
}
function parseTextFormat(params, content) {
  if (params.text?.format?.type !== "json_schema") {
    return null;
  }
  if ("$parseRaw" in params.text?.format) {
    const text_format = params.text?.format;
    return text_format.$parseRaw(content);
  }
  return JSON.parse(content);
}
function hasAutoParseableInput2(params) {
  if (isAutoParsableResponseFormat(params.text?.format)) {
    return true;
  }
  return false;
}
function makeParseableResponseTool(tool, {
  parser,
  callback
}) {
  const obj = {
    ...tool
  };
  Object.defineProperties(obj, {
    $brand: {
      value: "auto-parseable-tool",
      enumerable: false
    },
    $parseRaw: {
      value: parser,
      enumerable: false
    },
    $callback: {
      value: callback,
      enumerable: false
    }
  });
  return obj;
}
function isAutoParsableTool2(tool) {
  return tool?.["$brand"] === "auto-parseable-tool";
}
function getInputToolByName(input_tools, name) {
  return input_tools.find(tool => tool.type === "function" && tool.name === name);
}
function parseToolCall2(params, toolCall) {
  const inputTool = getInputToolByName(params.tools ?? [], toolCall.name);
  return {
    ...toolCall,
    ...toolCall,
    parsed_arguments: isAutoParsableTool2(inputTool) ? inputTool.$parseRaw(toolCall.arguments) : inputTool?.strict ? JSON.parse(toolCall.arguments) : null
  };
}
function shouldParseToolCall2(params, toolCall) {
  if (!params) {
    return false;
  }
  const inputTool = getInputToolByName(params.tools ?? [], toolCall.name);
  return isAutoParsableTool2(inputTool) || inputTool?.strict || false;
}
function validateInputTools2(tools) {
  for (const tool of tools ?? []) {
    if (tool.type !== "function") {
      throw new OpenAIError(`Currently only \`function\` tool types support auto-parsing; Received \`${tool.type}\``);
    }
    if (tool.function.strict !== true) {
      throw new OpenAIError(`The \`${tool.function.name}\` tool is not marked with \`strict: true\`. Only strict function tools can be auto-parsed`);
    }
  }
}
function addOutputText(rsp) {
  const texts = [];
  for (const output of rsp.output) {
    if (output.type !== "message") {
      continue;
    }
    for (const content of output.content) {
      if (content.type === "output_text") {
        texts.push(content.text);
      }
    }
  }
  rsp.output_text = texts.join("");
}

// node_modules/openai/resources/responses/input-items.mjs
var InputItems = class extends APIResource {
  list(responseId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(responseId, {}, query);
    }
    return this._client.getAPIList(`/responses/${responseId}/input_items`, ResponseItemsPage, {
      query,
      ...options
    });
  }
};

// node_modules/openai/lib/responses/ResponseStream.mjs
var __classPrivateFieldSet6 = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet7 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ResponseStream_instances, _ResponseStream_params, _ResponseStream_currentResponseSnapshot, _ResponseStream_finalResponse, _ResponseStream_beginRequest, _ResponseStream_addEvent, _ResponseStream_endRequest, _ResponseStream_accumulateResponse;
var ResponseStream = class extends EventStream {
  constructor(params) {
    super();
    _ResponseStream_instances.add(this);
    _ResponseStream_params.set(this, void 0);
    _ResponseStream_currentResponseSnapshot.set(this, void 0);
    _ResponseStream_finalResponse.set(this, void 0);
    __classPrivateFieldSet6(this, _ResponseStream_params, params, "f");
  }
  static createResponse(client, params, options) {
    const runner = new ResponseStream(params);
    runner._run(() => runner._createOrRetrieveResponse(client, params, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    }));
    return runner;
  }
  async _createOrRetrieveResponse(client, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_beginRequest).call(this);
    let stream;
    let starting_after = null;
    if ("response_id" in params) {
      stream = await client.responses.retrieve(params.response_id, {
        stream: true
      }, {
        ...options,
        signal: this.controller.signal,
        stream: true
      });
      starting_after = params.starting_after ?? null;
    } else {
      stream = await client.responses.create({
        ...params,
        stream: true
      }, {
        ...options,
        signal: this.controller.signal
      });
    }
    this._connected();
    for await (const event of stream) {
      __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_addEvent).call(this, event, starting_after);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_endRequest).call(this);
  }
  [(_ResponseStream_params = /* @__PURE__ */new WeakMap(), _ResponseStream_currentResponseSnapshot = /* @__PURE__ */new WeakMap(), _ResponseStream_finalResponse = /* @__PURE__ */new WeakMap(), _ResponseStream_instances = /* @__PURE__ */new WeakSet(), _ResponseStream_beginRequest = function _ResponseStream_beginRequest2() {
    if (this.ended) return;
    __classPrivateFieldSet6(this, _ResponseStream_currentResponseSnapshot, void 0, "f");
  }, _ResponseStream_addEvent = function _ResponseStream_addEvent2(event, starting_after) {
    if (this.ended) return;
    const maybeEmit = (name, event2) => {
      if (starting_after == null || event2.sequence_number > starting_after) {
        this._emit(name, event2);
      }
    };
    const response = __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_accumulateResponse).call(this, event);
    maybeEmit("event", event);
    switch (event.type) {
      case "response.output_text.delta":
        {
          const output = response.output[event.output_index];
          if (!output) {
            throw new OpenAIError(`missing output at index ${event.output_index}`);
          }
          if (output.type === "message") {
            const content = output.content[event.content_index];
            if (!content) {
              throw new OpenAIError(`missing content at index ${event.content_index}`);
            }
            if (content.type !== "output_text") {
              throw new OpenAIError(`expected content to be 'output_text', got ${content.type}`);
            }
            maybeEmit("response.output_text.delta", {
              ...event,
              snapshot: content.text
            });
          }
          break;
        }
      case "response.function_call_arguments.delta":
        {
          const output = response.output[event.output_index];
          if (!output) {
            throw new OpenAIError(`missing output at index ${event.output_index}`);
          }
          if (output.type === "function_call") {
            maybeEmit("response.function_call_arguments.delta", {
              ...event,
              snapshot: output.arguments
            });
          }
          break;
        }
      default:
        maybeEmit(event.type, event);
        break;
    }
  }, _ResponseStream_endRequest = function _ResponseStream_endRequest2() {
    if (this.ended) {
      throw new OpenAIError(`stream has ended, this shouldn't happen`);
    }
    const snapshot = __classPrivateFieldGet7(this, _ResponseStream_currentResponseSnapshot, "f");
    if (!snapshot) {
      throw new OpenAIError(`request ended without sending any events`);
    }
    __classPrivateFieldSet6(this, _ResponseStream_currentResponseSnapshot, void 0, "f");
    const parsedResponse = finalizeResponse(snapshot, __classPrivateFieldGet7(this, _ResponseStream_params, "f"));
    __classPrivateFieldSet6(this, _ResponseStream_finalResponse, parsedResponse, "f");
    return parsedResponse;
  }, _ResponseStream_accumulateResponse = function _ResponseStream_accumulateResponse2(event) {
    let snapshot = __classPrivateFieldGet7(this, _ResponseStream_currentResponseSnapshot, "f");
    if (!snapshot) {
      if (event.type !== "response.created") {
        throw new OpenAIError(`When snapshot hasn't been set yet, expected 'response.created' event, got ${event.type}`);
      }
      snapshot = __classPrivateFieldSet6(this, _ResponseStream_currentResponseSnapshot, event.response, "f");
      return snapshot;
    }
    switch (event.type) {
      case "response.output_item.added":
        {
          snapshot.output.push(event.item);
          break;
        }
      case "response.content_part.added":
        {
          const output = snapshot.output[event.output_index];
          if (!output) {
            throw new OpenAIError(`missing output at index ${event.output_index}`);
          }
          if (output.type === "message") {
            output.content.push(event.part);
          }
          break;
        }
      case "response.output_text.delta":
        {
          const output = snapshot.output[event.output_index];
          if (!output) {
            throw new OpenAIError(`missing output at index ${event.output_index}`);
          }
          if (output.type === "message") {
            const content = output.content[event.content_index];
            if (!content) {
              throw new OpenAIError(`missing content at index ${event.content_index}`);
            }
            if (content.type !== "output_text") {
              throw new OpenAIError(`expected content to be 'output_text', got ${content.type}`);
            }
            content.text += event.delta;
          }
          break;
        }
      case "response.function_call_arguments.delta":
        {
          const output = snapshot.output[event.output_index];
          if (!output) {
            throw new OpenAIError(`missing output at index ${event.output_index}`);
          }
          if (output.type === "function_call") {
            output.arguments += event.delta;
          }
          break;
        }
      case "response.completed":
        {
          __classPrivateFieldSet6(this, _ResponseStream_currentResponseSnapshot, event.response, "f");
          break;
        }
    }
    return snapshot;
  }, Symbol.asyncIterator)]() {
    const pushQueue = [];
    const readQueue = [];
    let done = false;
    this.on("event", event => {
      const reader = readQueue.shift();
      if (reader) {
        reader.resolve(event);
      } else {
        pushQueue.push(event);
      }
    });
    this.on("end", () => {
      done = true;
      for (const reader of readQueue) {
        reader.resolve(void 0);
      }
      readQueue.length = 0;
    });
    this.on("abort", err => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    this.on("error", err => {
      done = true;
      for (const reader of readQueue) {
        reader.reject(err);
      }
      readQueue.length = 0;
    });
    return {
      next: async () => {
        if (!pushQueue.length) {
          if (done) {
            return {
              value: void 0,
              done: true
            };
          }
          return new Promise((resolve, reject) => readQueue.push({
            resolve,
            reject
          })).then(event2 => event2 ? {
            value: event2,
            done: false
          } : {
            value: void 0,
            done: true
          });
        }
        const event = pushQueue.shift();
        return {
          value: event,
          done: false
        };
      },
      return: async () => {
        this.abort();
        return {
          value: void 0,
          done: true
        };
      }
    };
  }
  async finalResponse() {
    await this.done();
    const response = __classPrivateFieldGet7(this, _ResponseStream_finalResponse, "f");
    if (!response) throw new OpenAIError("stream ended without producing a ChatCompletion");
    return response;
  }
};
function finalizeResponse(snapshot, params) {
  return maybeParseResponse(snapshot, params);
}

// node_modules/openai/resources/responses/responses.mjs
var Responses = class extends APIResource {
  constructor() {
    super(...arguments);
    this.inputItems = new InputItems(this._client);
  }
  create(body, options) {
    return this._client.post("/responses", {
      body,
      ...options,
      stream: body.stream ?? false
    })._thenUnwrap(rsp => {
      if ("object" in rsp && rsp.object === "response") {
        addOutputText(rsp);
      }
      return rsp;
    });
  }
  retrieve(responseId, query = {}, options) {
    return this._client.get(`/responses/${responseId}`, {
      query,
      ...options,
      stream: query?.stream ?? false
    });
  }
  del(responseId, options) {
    return this._client.delete(`/responses/${responseId}`, {
      ...options,
      headers: {
        Accept: "*/*",
        ...options?.headers
      }
    });
  }
  parse(body, options) {
    return this._client.responses.create(body, options)._thenUnwrap(response => parseResponse(response, body));
  }
  stream(body, options) {
    return ResponseStream.createResponse(this._client, body, options);
  }
  cancel(responseId, options) {
    return this._client.post(`/responses/${responseId}/cancel`, {
      ...options,
      headers: {
        Accept: "*/*",
        ...options?.headers
      }
    });
  }
};
var ResponseItemsPage = class extends CursorPage {};
Responses.InputItems = InputItems;

// node_modules/openai/resources/uploads/parts.mjs
var Parts = class extends APIResource {
  create(uploadId, body, options) {
    return this._client.post(`/uploads/${uploadId}/parts`, multipartFormRequestOptions({
      body,
      ...options
    }));
  }
};

// node_modules/openai/resources/uploads/uploads.mjs
var Uploads = class extends APIResource {
  constructor() {
    super(...arguments);
    this.parts = new Parts(this._client);
  }
  create(body, options) {
    return this._client.post("/uploads", {
      body,
      ...options
    });
  }
  cancel(uploadId, options) {
    return this._client.post(`/uploads/${uploadId}/cancel`, options);
  }
  complete(uploadId, body, options) {
    return this._client.post(`/uploads/${uploadId}/complete`, {
      body,
      ...options
    });
  }
};
Uploads.Parts = Parts;

// node_modules/openai/lib/Util.mjs
var allSettledWithThrow = async promises => {
  const results = await Promise.allSettled(promises);
  const rejected = results.filter(result => result.status === "rejected");
  if (rejected.length) {
    for (const result of rejected) {
      console.error(result.reason);
    }
    throw new Error(`${rejected.length} promise(s) failed - see the above errors`);
  }
  const values = [];
  for (const result of results) {
    if (result.status === "fulfilled") {
      values.push(result.value);
    }
  }
  return values;
};

// node_modules/openai/resources/vector-stores/files.mjs
var Files3 = class extends APIResource {
  create(vectorStoreId, body, options) {
    return this._client.post(`/vector_stores/${vectorStoreId}/files`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  retrieve(vectorStoreId, fileId, options) {
    return this._client.get(`/vector_stores/${vectorStoreId}/files/${fileId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  update(vectorStoreId, fileId, body, options) {
    return this._client.post(`/vector_stores/${vectorStoreId}/files/${fileId}`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  list(vectorStoreId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list(vectorStoreId, {}, query);
    }
    return this._client.getAPIList(`/vector_stores/${vectorStoreId}/files`, VectorStoreFilesPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  del(vectorStoreId, fileId, options) {
    return this._client.delete(`/vector_stores/${vectorStoreId}/files/${fileId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  async createAndPoll(vectorStoreId, body, options) {
    const file = await this.create(vectorStoreId, body, options);
    return await this.poll(vectorStoreId, file.id, options);
  }
  async poll(vectorStoreId, fileId, options) {
    const headers = {
      ...options?.headers,
      "X-Stainless-Poll-Helper": "true"
    };
    if (options?.pollIntervalMs) {
      headers["X-Stainless-Custom-Poll-Interval"] = options.pollIntervalMs.toString();
    }
    while (true) {
      const fileResponse = await this.retrieve(vectorStoreId, fileId, {
        ...options,
        headers
      }).withResponse();
      const file = fileResponse.data;
      switch (file.status) {
        case "in_progress":
          let sleepInterval = 5e3;
          if (options?.pollIntervalMs) {
            sleepInterval = options.pollIntervalMs;
          } else {
            const headerInterval = fileResponse.response.headers.get("openai-poll-after-ms");
            if (headerInterval) {
              const headerIntervalMs = parseInt(headerInterval);
              if (!isNaN(headerIntervalMs)) {
                sleepInterval = headerIntervalMs;
              }
            }
          }
          await sleep(sleepInterval);
          break;
        case "failed":
        case "completed":
          return file;
      }
    }
  }
  async upload(vectorStoreId, file, options) {
    const fileInfo = await this._client.files.create({
      file,
      purpose: "assistants"
    }, options);
    return this.create(vectorStoreId, {
      file_id: fileInfo.id
    }, options);
  }
  async uploadAndPoll(vectorStoreId, file, options) {
    const fileInfo = await this.upload(vectorStoreId, file, options);
    return await this.poll(vectorStoreId, fileInfo.id, options);
  }
  content(vectorStoreId, fileId, options) {
    return this._client.getAPIList(`/vector_stores/${vectorStoreId}/files/${fileId}/content`, FileContentResponsesPage, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};
var VectorStoreFilesPage = class extends CursorPage {};
var FileContentResponsesPage = class extends Page {};
Files3.VectorStoreFilesPage = VectorStoreFilesPage;
Files3.FileContentResponsesPage = FileContentResponsesPage;

// node_modules/openai/resources/vector-stores/file-batches.mjs
var FileBatches = class extends APIResource {
  create(vectorStoreId, body, options) {
    return this._client.post(`/vector_stores/${vectorStoreId}/file_batches`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  retrieve(vectorStoreId, batchId, options) {
    return this._client.get(`/vector_stores/${vectorStoreId}/file_batches/${batchId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  cancel(vectorStoreId, batchId, options) {
    return this._client.post(`/vector_stores/${vectorStoreId}/file_batches/${batchId}/cancel`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  async createAndPoll(vectorStoreId, body, options) {
    const batch = await this.create(vectorStoreId, body);
    return await this.poll(vectorStoreId, batch.id, options);
  }
  listFiles(vectorStoreId, batchId, query = {}, options) {
    if (isRequestOptions(query)) {
      return this.listFiles(vectorStoreId, batchId, {}, query);
    }
    return this._client.getAPIList(`/vector_stores/${vectorStoreId}/file_batches/${batchId}/files`, VectorStoreFilesPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  async poll(vectorStoreId, batchId, options) {
    const headers = {
      ...options?.headers,
      "X-Stainless-Poll-Helper": "true"
    };
    if (options?.pollIntervalMs) {
      headers["X-Stainless-Custom-Poll-Interval"] = options.pollIntervalMs.toString();
    }
    while (true) {
      const {
        data: batch,
        response
      } = await this.retrieve(vectorStoreId, batchId, {
        ...options,
        headers
      }).withResponse();
      switch (batch.status) {
        case "in_progress":
          let sleepInterval = 5e3;
          if (options?.pollIntervalMs) {
            sleepInterval = options.pollIntervalMs;
          } else {
            const headerInterval = response.headers.get("openai-poll-after-ms");
            if (headerInterval) {
              const headerIntervalMs = parseInt(headerInterval);
              if (!isNaN(headerIntervalMs)) {
                sleepInterval = headerIntervalMs;
              }
            }
          }
          await sleep(sleepInterval);
          break;
        case "failed":
        case "cancelled":
        case "completed":
          return batch;
      }
    }
  }
  async uploadAndPoll(vectorStoreId, {
    files,
    fileIds = []
  }, options) {
    if (files == null || files.length == 0) {
      throw new Error(`No \`files\` provided to process. If you've already uploaded files you should use \`.createAndPoll()\` instead`);
    }
    const configuredConcurrency = options?.maxConcurrency ?? 5;
    const concurrencyLimit = Math.min(configuredConcurrency, files.length);
    const client = this._client;
    const fileIterator = files.values();
    const allFileIds = [...fileIds];
    async function processFiles(iterator) {
      for (let item of iterator) {
        const fileObj = await client.files.create({
          file: item,
          purpose: "assistants"
        }, options);
        allFileIds.push(fileObj.id);
      }
    }
    const workers = Array(concurrencyLimit).fill(fileIterator).map(processFiles);
    await allSettledWithThrow(workers);
    return await this.createAndPoll(vectorStoreId, {
      file_ids: allFileIds
    });
  }
};

// node_modules/openai/resources/vector-stores/vector-stores.mjs
var VectorStores = class extends APIResource {
  constructor() {
    super(...arguments);
    this.files = new Files3(this._client);
    this.fileBatches = new FileBatches(this._client);
  }
  create(body, options) {
    return this._client.post("/vector_stores", {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  retrieve(vectorStoreId, options) {
    return this._client.get(`/vector_stores/${vectorStoreId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  update(vectorStoreId, body, options) {
    return this._client.post(`/vector_stores/${vectorStoreId}`, {
      body,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  list(query = {}, options) {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList("/vector_stores", VectorStoresPage, {
      query,
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  del(vectorStoreId, options) {
    return this._client.delete(`/vector_stores/${vectorStoreId}`, {
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
  search(vectorStoreId, body, options) {
    return this._client.getAPIList(`/vector_stores/${vectorStoreId}/search`, VectorStoreSearchResponsesPage, {
      body,
      method: "post",
      ...options,
      headers: {
        "OpenAI-Beta": "assistants=v2",
        ...options?.headers
      }
    });
  }
};
var VectorStoresPage = class extends CursorPage {};
var VectorStoreSearchResponsesPage = class extends Page {};
VectorStores.VectorStoresPage = VectorStoresPage;
VectorStores.VectorStoreSearchResponsesPage = VectorStoreSearchResponsesPage;
VectorStores.Files = Files3;
VectorStores.VectorStoreFilesPage = VectorStoreFilesPage;
VectorStores.FileContentResponsesPage = FileContentResponsesPage;
VectorStores.FileBatches = FileBatches;

// node_modules/openai/index.mjs
var _a;
var OpenAI = class extends APIClient {
  constructor({
    baseURL = readEnv("OPENAI_BASE_URL"),
    apiKey = readEnv("OPENAI_API_KEY"),
    organization = readEnv("OPENAI_ORG_ID") ?? null,
    project = readEnv("OPENAI_PROJECT_ID") ?? null,
    ...opts
  } = {}) {
    if (apiKey === void 0) {
      throw new OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
    }
    const options = {
      apiKey,
      organization,
      project,
      ...opts,
      baseURL: baseURL || `https://api.openai.com/v1`
    };
    if (!options.dangerouslyAllowBrowser && isRunningInBrowser()) {
      throw new OpenAIError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
    }
    super({
      baseURL: options.baseURL,
      timeout: options.timeout ?? 6e5,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch
    });
    this.completions = new Completions3(this);
    this.chat = new Chat(this);
    this.embeddings = new Embeddings(this);
    this.files = new Files2(this);
    this.images = new Images(this);
    this.audio = new Audio(this);
    this.moderations = new Moderations(this);
    this.models = new Models(this);
    this.fineTuning = new FineTuning(this);
    this.graders = new Graders2(this);
    this.vectorStores = new VectorStores(this);
    this.beta = new Beta(this);
    this.batches = new Batches(this);
    this.uploads = new Uploads(this);
    this.responses = new Responses(this);
    this.evals = new Evals(this);
    this.containers = new Containers(this);
    this._options = options;
    this.apiKey = apiKey;
    this.organization = organization;
    this.project = project;
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  defaultHeaders(opts) {
    return {
      ...super.defaultHeaders(opts),
      "OpenAI-Organization": this.organization,
      "OpenAI-Project": this.project,
      ...this._options.defaultHeaders
    };
  }
  authHeaders(opts) {
    return {
      Authorization: `Bearer ${this.apiKey}`
    };
  }
  stringifyQuery(query) {
    return stringify(query, {
      arrayFormat: "brackets"
    });
  }
};
_a = OpenAI;
OpenAI.OpenAI = _a;
OpenAI.DEFAULT_TIMEOUT = 6e5;
OpenAI.OpenAIError = OpenAIError;
OpenAI.APIError = APIError;
OpenAI.APIConnectionError = APIConnectionError;
OpenAI.APIConnectionTimeoutError = APIConnectionTimeoutError;
OpenAI.APIUserAbortError = APIUserAbortError;
OpenAI.NotFoundError = NotFoundError;
OpenAI.ConflictError = ConflictError;
OpenAI.RateLimitError = RateLimitError;
OpenAI.BadRequestError = BadRequestError;
OpenAI.AuthenticationError = AuthenticationError;
OpenAI.InternalServerError = InternalServerError;
OpenAI.PermissionDeniedError = PermissionDeniedError;
OpenAI.UnprocessableEntityError = UnprocessableEntityError;
OpenAI.toFile = toFile;
OpenAI.fileFromPath = fileFromPath;
OpenAI.Completions = Completions3;
OpenAI.Chat = Chat;
OpenAI.ChatCompletionsPage = ChatCompletionsPage;
OpenAI.Embeddings = Embeddings;
OpenAI.Files = Files2;
OpenAI.FileObjectsPage = FileObjectsPage;
OpenAI.Images = Images;
OpenAI.Audio = Audio;
OpenAI.Moderations = Moderations;
OpenAI.Models = Models;
OpenAI.ModelsPage = ModelsPage;
OpenAI.FineTuning = FineTuning;
OpenAI.Graders = Graders2;
OpenAI.VectorStores = VectorStores;
OpenAI.VectorStoresPage = VectorStoresPage;
OpenAI.VectorStoreSearchResponsesPage = VectorStoreSearchResponsesPage;
OpenAI.Beta = Beta;
OpenAI.Batches = Batches;
OpenAI.BatchesPage = BatchesPage;
OpenAI.Uploads = Uploads;
OpenAI.Responses = Responses;
OpenAI.Evals = Evals;
OpenAI.EvalListResponsesPage = EvalListResponsesPage;
OpenAI.Containers = Containers;
OpenAI.ContainerListResponsesPage = ContainerListResponsesPage;
var AzureOpenAI = class extends OpenAI {
  constructor({
    baseURL = readEnv("OPENAI_BASE_URL"),
    apiKey = readEnv("AZURE_OPENAI_API_KEY"),
    apiVersion = readEnv("OPENAI_API_VERSION"),
    endpoint,
    deployment,
    azureADTokenProvider,
    dangerouslyAllowBrowser,
    ...opts
  } = {}) {
    if (!apiVersion) {
      throw new OpenAIError("The OPENAI_API_VERSION environment variable is missing or empty; either provide it, or instantiate the AzureOpenAI client with an apiVersion option, like new AzureOpenAI({ apiVersion: 'My API Version' }).");
    }
    if (typeof azureADTokenProvider === "function") {
      dangerouslyAllowBrowser = true;
    }
    if (!azureADTokenProvider && !apiKey) {
      throw new OpenAIError("Missing credentials. Please pass one of `apiKey` and `azureADTokenProvider`, or set the `AZURE_OPENAI_API_KEY` environment variable.");
    }
    if (azureADTokenProvider && apiKey) {
      throw new OpenAIError("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
    }
    apiKey ?? (apiKey = API_KEY_SENTINEL);
    opts.defaultQuery = {
      ...opts.defaultQuery,
      "api-version": apiVersion
    };
    if (!baseURL) {
      if (!endpoint) {
        endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
      }
      if (!endpoint) {
        throw new OpenAIError("Must provide one of the `baseURL` or `endpoint` arguments, or the `AZURE_OPENAI_ENDPOINT` environment variable");
      }
      baseURL = `${endpoint}/openai`;
    } else {
      if (endpoint) {
        throw new OpenAIError("baseURL and endpoint are mutually exclusive");
      }
    }
    super({
      apiKey,
      baseURL,
      ...opts,
      ...(dangerouslyAllowBrowser !== void 0 ? {
        dangerouslyAllowBrowser
      } : {})
    });
    this.apiVersion = "";
    this._azureADTokenProvider = azureADTokenProvider;
    this.apiVersion = apiVersion;
    this.deploymentName = deployment;
  }
  buildRequest(options, props = {}) {
    if (_deployments_endpoints.has(options.path) && options.method === "post" && options.body !== void 0) {
      if (!isObj(options.body)) {
        throw new Error("Expected request body to be an object");
      }
      const model = this.deploymentName || options.body["model"] || options.__metadata?.["model"];
      if (model !== void 0 && !this.baseURL.includes("/deployments")) {
        options.path = `/deployments/${model}${options.path}`;
      }
    }
    return super.buildRequest(options, props);
  }
  async _getAzureADToken() {
    if (typeof this._azureADTokenProvider === "function") {
      const token = await this._azureADTokenProvider();
      if (!token || typeof token !== "string") {
        throw new OpenAIError(`Expected 'azureADTokenProvider' argument to return a string but it returned ${token}`);
      }
      return token;
    }
    return void 0;
  }
  authHeaders(opts) {
    return {};
  }
  async prepareOptions(opts) {
    if (opts.headers?.["api-key"]) {
      return super.prepareOptions(opts);
    }
    const token = await this._getAzureADToken();
    opts.headers ?? (opts.headers = {});
    if (token) {
      opts.headers["Authorization"] = `Bearer ${token}`;
    } else if (this.apiKey !== API_KEY_SENTINEL) {
      opts.headers["api-key"] = this.apiKey;
    } else {
      throw new OpenAIError("Unable to handle auth");
    }
    return super.prepareOptions(opts);
  }
};
var _deployments_endpoints = /* @__PURE__ */new Set(["/completions", "/chat/completions", "/embeddings", "/audio/transcriptions", "/audio/translations", "/audio/speech", "/images/generations", "/images/edits"]);
var API_KEY_SENTINEL = "<Missing Key>";
var openai_default = OpenAI;

// .beyond/uimport/openai.4.104.0.js
var openai_4_104_0_default = openai_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9vcGVuYWkuNC4xMDQuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2ludGVybmFsL3FzL2Zvcm1hdHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbnRlcm5hbC9xcy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2ludGVybmFsL3FzL3N0cmluZ2lmeS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2ludGVybmFsL3FzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL19zaGltcy9yZWdpc3RyeS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL19zaGltcy9NdWx0aXBhcnRCb2R5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvX3NoaW1zL3dlYi1ydW50aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9fc2hpbXMvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbnRlcm5hbC9kZWNvZGVycy9saW5lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvaW50ZXJuYWwvc3RyZWFtLXV0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvc3RyZWFtaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvdXBsb2Fkcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2NvcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9wYWdpbmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvY2hhdC9jb21wbGV0aW9ucy9tZXNzYWdlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9jaGF0L2NvbXBsZXRpb25zL2NvbXBsZXRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2NoYXQvY2hhdC50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9hdWRpby9zcGVlY2gudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYXVkaW8vdHJhbnNjcmlwdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYXVkaW8vdHJhbnNsYXRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2F1ZGlvL2F1ZGlvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JhdGNoZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvRXZlbnRTdHJlYW0udHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvQXNzaXN0YW50U3RyZWFtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvYXNzaXN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9SdW5uYWJsZUZ1bmN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL2NoYXRDb21wbGV0aW9uVXRpbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvcGFyc2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvQ2hhdENvbXBsZXRpb25SdW5uZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9fdmVuZG9yL3BhcnRpYWwtanNvbi1wYXJzZXIvcGFyc2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0NoYXRDb21wbGV0aW9uU3RyZWFtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0NoYXRDb21wbGV0aW9uU3RyZWFtaW5nUnVubmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvY2hhdC9jb21wbGV0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL2NoYXQvY2hhdC50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3JlYWx0aW1lL3Nlc3Npb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvcmVhbHRpbWUvdHJhbnNjcmlwdGlvbi1zZXNzaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvdGhyZWFkcy9tZXNzYWdlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3RocmVhZHMvcnVucy9zdGVwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3RocmVhZHMvcnVucy9ydW5zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvdGhyZWFkcy90aHJlYWRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvYmV0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9jb21wbGV0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9jb250YWluZXJzL2ZpbGVzL2NvbnRlbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvY29udGFpbmVycy9maWxlcy9maWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9jb250YWluZXJzL2NvbnRhaW5lcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZW1iZWRkaW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9ldmFscy9ydW5zL291dHB1dC1pdGVtcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9ldmFscy9ydW5zL3J1bnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZXZhbHMvZXZhbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZmlsZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZmluZS10dW5pbmcvbWV0aG9kcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9maW5lLXR1bmluZy9hbHBoYS9ncmFkZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2ZpbmUtdHVuaW5nL2FscGhhL2FscGhhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2ZpbmUtdHVuaW5nL2NoZWNrcG9pbnRzL3Blcm1pc3Npb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2ZpbmUtdHVuaW5nL2NoZWNrcG9pbnRzL2NoZWNrcG9pbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2ZpbmUtdHVuaW5nL2pvYnMvY2hlY2twb2ludHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZmluZS10dW5pbmcvam9icy9qb2JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2ZpbmUtdHVuaW5nL2ZpbmUtdHVuaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2dyYWRlcnMvZ3JhZGVyLW1vZGVscy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9ncmFkZXJzL2dyYWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvaW1hZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL21vZGVscy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9tb2RlcmF0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9SZXNwb25zZXNQYXJzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvcmVzcG9uc2VzL2lucHV0LWl0ZW1zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL3Jlc3BvbnNlcy9SZXNwb25zZVN0cmVhbS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9yZXNwb25zZXMvcmVzcG9uc2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL3VwbG9hZHMvcGFydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvdXBsb2Fkcy91cGxvYWRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL1V0aWwudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvdmVjdG9yLXN0b3Jlcy9maWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy92ZWN0b3Itc3RvcmVzL2ZpbGUtYmF0Y2hlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy92ZWN0b3Itc3RvcmVzL3ZlY3Rvci1zdG9yZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJvcGVuYWlfNF8xMDRfMF9leHBvcnRzIiwiX19leHBvcnQiLCJBUElDb25uZWN0aW9uRXJyb3IiLCJBUElDb25uZWN0aW9uVGltZW91dEVycm9yIiwiQVBJRXJyb3IiLCJBUElVc2VyQWJvcnRFcnJvciIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJBenVyZU9wZW5BSSIsIkJhZFJlcXVlc3RFcnJvciIsIkNvbmZsaWN0RXJyb3IiLCJJbnRlcm5hbFNlcnZlckVycm9yIiwiTm90Rm91bmRFcnJvciIsIk9wZW5BSSIsIk9wZW5BSUVycm9yIiwiUGVybWlzc2lvbkRlbmllZEVycm9yIiwiUmF0ZUxpbWl0RXJyb3IiLCJVbnByb2Nlc3NhYmxlRW50aXR5RXJyb3IiLCJkZWZhdWx0Iiwib3BlbmFpXzRfMTA0XzBfZGVmYXVsdCIsImZpbGVGcm9tUGF0aCIsInRvRmlsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJkZWZhdWx0X2Zvcm1hdCIsImZvcm1hdHRlcnMiLCJSRkMxNzM4IiwidiIsIlN0cmluZyIsInJlcGxhY2UiLCJSRkMzOTg2IiwiaGFzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJpc19hcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImhleF90YWJsZSIsImFycmF5IiwiaSIsInB1c2giLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcGFjdF9xdWV1ZSIsInF1ZXVlIiwibGVuZ3RoIiwiaXRlbSIsInBvcCIsIm9iaiIsInByb3AiLCJjb21wYWN0ZWQiLCJqIiwiYXJyYXlfdG9fb2JqZWN0Iiwic291cmNlIiwib3B0aW9ucyIsInBsYWluT2JqZWN0cyIsImNyZWF0ZSIsIm1lcmdlIiwidGFyZ2V0IiwiYWxsb3dQcm90b3R5cGVzIiwiY2FsbCIsImNvbmNhdCIsIm1lcmdlVGFyZ2V0IiwiZm9yRWFjaCIsInRhcmdldEl0ZW0iLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwidmFsdWUiLCJhc3NpZ25fc2luZ2xlX3NvdXJjZSIsImRlY29kZSIsInN0cjIiLCJfIiwiY2hhcnNldCIsInN0cldpdGhvdXRQbHVzIiwidW5lc2NhcGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlIiwibGltaXQiLCJlbmNvZGUiLCJfZGVmYXVsdEVuY29kZXIiLCJfa2luZCIsImZvcm1hdCIsInN0cmluZyIsIlN5bWJvbCIsImVzY2FwZSIsIiQwIiwicGFyc2VJbnQiLCJzbGljZSIsIm91dCIsInNlZ21lbnQiLCJhcnIiLCJjIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImpvaW4iLCJjb21wYWN0IiwibyIsInJlZnMiLCJ2YWwiLCJpbmRleE9mIiwiaXNfcmVnZXhwIiwiaXNfYnVmZmVyIiwiY29uc3RydWN0b3IiLCJpc0J1ZmZlciIsImNvbWJpbmUiLCJhIiwiYiIsIm1heWJlX21hcCIsImZuIiwibWFwcGVkIiwiaGFzMiIsImFycmF5X3ByZWZpeF9nZW5lcmF0b3JzIiwiYnJhY2tldHMiLCJwcmVmaXgiLCJjb21tYSIsImluZGljZXMiLCJyZXBlYXQiLCJpc19hcnJheTIiLCJwdXNoX3RvX2FycmF5IiwidmFsdWVfb3JfYXJyYXkiLCJhcHBseSIsInRvX0lTTyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRlZmF1bHRzIiwiYWRkUXVlcnlQcmVmaXgiLCJhbGxvd0RvdHMiLCJhbGxvd0VtcHR5QXJyYXlzIiwiYXJyYXlGb3JtYXQiLCJjaGFyc2V0U2VudGluZWwiLCJkZWxpbWl0ZXIiLCJlbmNvZGVEb3RJbktleXMiLCJlbmNvZGVyIiwiZW5jb2RlVmFsdWVzT25seSIsImZvcm1hdHRlciIsInNlcmlhbGl6ZURhdGUiLCJkYXRlIiwic2tpcE51bGxzIiwic3RyaWN0TnVsbEhhbmRsaW5nIiwiaXNfbm9uX251bGxpc2hfcHJpbWl0aXZlIiwic2VudGluZWwiLCJpbm5lcl9zdHJpbmdpZnkiLCJvYmplY3QiLCJnZW5lcmF0ZUFycmF5UHJlZml4IiwiY29tbWFSb3VuZFRyaXAiLCJmaWx0ZXIiLCJzb3J0Iiwic2lkZUNoYW5uZWwiLCJ0bXBfc2MiLCJzdGVwIiwiZmluZF9mbGFnIiwiZ2V0IiwicG9zIiwiUmFuZ2VFcnJvciIsImtleV92YWx1ZSIsInZhbHVlcyIsIm9ial9rZXlzIiwiZW5jb2RlZF9wcmVmaXgiLCJhZGp1c3RlZF9wcmVmaXgiLCJlbmNvZGVkX2tleSIsImtleV9wcmVmaXgiLCJzZXQiLCJ2YWx1ZVNpZGVDaGFubmVsIiwiV2Vha01hcCIsIm5vcm1hbGl6ZV9zdHJpbmdpZnlfb3B0aW9ucyIsIm9wdHMiLCJUeXBlRXJyb3IiLCJzdHJpbmdpZnkiLCJqb2luZWQiLCJmb3JtYXRzIiwiVkVSU0lPTiIsImF1dG8iLCJraW5kIiwiZmV0Y2gyIiwiUmVxdWVzdDIiLCJSZXNwb25zZTIiLCJIZWFkZXJzMiIsIkZvcm1EYXRhMiIsIkJsb2IyIiwiRmlsZTIiLCJSZWFkYWJsZVN0cmVhbTIiLCJnZXRNdWx0aXBhcnRSZXF1ZXN0T3B0aW9ucyIsImdldERlZmF1bHRBZ2VudCIsImlzRnNSZWFkU3RyZWFtIiwic2V0U2hpbXMiLCJzaGltcyIsIkVycm9yIiwiZmV0Y2giLCJSZXF1ZXN0IiwiUmVzcG9uc2UiLCJIZWFkZXJzIiwiRm9ybURhdGEiLCJCbG9iIiwiRmlsZSIsIlJlYWRhYmxlU3RyZWFtIiwiTXVsdGlwYXJ0Qm9keSIsImJvZHkiLCJ0b1N0cmluZ1RhZyIsImdldFJ1bnRpbWUiLCJtYW51YWxseUltcG9ydGVkIiwicmVjb21tZW5kYXRpb24iLCJfZmV0Y2giLCJfUmVxdWVzdCIsIl9SZXNwb25zZSIsIl9IZWFkZXJzIiwiZXJyb3IiLCJtZXNzYWdlIiwiZm9ybSIsInVybCIsImluaXQiLCJzdGF0dXMiLCJoZWFkZXJzIiwibWFrZU1lc3NhZ2UiLCJyZXF1ZXN0X2lkIiwiZGF0YSIsImNvZGUiLCJwYXJhbSIsInR5cGUiLCJtc2ciLCJKU09OIiwiZ2VuZXJhdGUiLCJlcnJvclJlc3BvbnNlIiwiY2F1c2UiLCJjYXN0VG9FcnJvciIsIkxlbmd0aEZpbmlzaFJlYXNvbkVycm9yIiwiQ29udGVudEZpbHRlckZpbmlzaFJlYXNvbkVycm9yIiwiTGluZURlY29kZXIiLCJfTGluZURlY29kZXJfY2FycmlhZ2VSZXR1cm5JbmRleCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2h1bmsiLCJiaW5hcnlDaHVuayIsIkFycmF5QnVmZmVyIiwiVGV4dEVuY29kZXIiLCJuZXdEYXRhIiwibGluZXMiLCJwYXR0ZXJuSW5kZXgiLCJmaW5kTmV3bGluZUluZGV4IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsImNhcnJpYWdlIiwiaW5kZXgiLCJkZWNvZGVUZXh0IiwiZW5kSW5kZXgiLCJwcmVjZWRpbmciLCJsaW5lIiwiYnl0ZXMiLCJCdWZmZXIiLCJmcm9tIiwibmFtZSIsIlRleHREZWNvZGVyIiwidGV4dERlY29kZXIiLCJmbHVzaCIsIk5FV0xJTkVfQ0hBUlMiLCJTZXQiLCJORVdMSU5FX1JFR0VYUCIsInN0YXJ0SW5kZXgiLCJuZXdsaW5lIiwiZmluZERvdWJsZU5ld2xpbmVJbmRleCIsIlJlYWRhYmxlU3RyZWFtVG9Bc3luY0l0ZXJhYmxlIiwic3RyZWFtIiwiYXN5bmNJdGVyYXRvciIsInJlYWRlciIsImdldFJlYWRlciIsIm5leHQiLCJyZXN1bHQiLCJyZWFkIiwiZG9uZSIsInJlbGVhc2VMb2NrIiwicmV0dXJuIiwiY2FuY2VsUHJvbWlzZSIsImNhbmNlbCIsIlN0cmVhbSIsIml0ZXJhdG9yIiwiY29udHJvbGxlciIsImZyb21TU0VSZXNwb25zZSIsInJlc3BvbnNlIiwiY29uc3VtZWQiLCJzc2UiLCJfaXRlclNTRU1lc3NhZ2VzIiwic3RhcnRzV2l0aCIsImV2ZW50IiwicGFyc2UiLCJjb25zb2xlIiwicmF3IiwiY3JlYXRlUmVzcG9uc2VIZWFkZXJzIiwiYWJvcnQiLCJmcm9tUmVhZGFibGVTdHJlYW0iLCJyZWFkYWJsZVN0cmVhbSIsIml0ZXJMaW5lcyIsImxpbmVEZWNvZGVyIiwiaXRlciIsInRlZSIsImxlZnQiLCJyaWdodCIsInRlZUl0ZXJhdG9yIiwic2hpZnQiLCJ0b1JlYWRhYmxlU3RyZWFtIiwic2VsZiIsInN0YXJ0IiwicHVsbCIsImN0cmwiLCJjbG9zZSIsImVucXVldWUiLCJlcnIiLCJzc2VEZWNvZGVyIiwiU1NFRGVjb2RlciIsInNzZUNodW5rIiwiaXRlclNTRUNodW5rcyIsImNodW5rcyIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwiZmllbGRuYW1lIiwicGFydGl0aW9uIiwiaXNSZXNwb25zZUxpa2UiLCJibG9iIiwiaXNGaWxlTGlrZSIsImxhc3RNb2RpZmllZCIsImlzQmxvYkxpa2UiLCJzaXplIiwidGV4dCIsImFycmF5QnVmZmVyIiwiaXNVcGxvYWRhYmxlIiwiVVJMIiwicGF0aG5hbWUiLCJzcGxpdCIsImJpdHMiLCJnZXRCeXRlcyIsImdldE5hbWUiLCJwYXJ0cyIsImlzVmlldyIsImlzQXN5bmNJdGVyYWJsZUl0ZXJhdG9yIiwicHJvcHNGb3JFcnJvciIsInByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm1hcCIsInAiLCJnZXRTdHJpbmdGcm9tTWF5YmVCdWZmZXIiLCJmaWxlbmFtZSIsInBhdGgiLCJ4IiwiaXNNdWx0aXBhcnRCb2R5IiwibWF5YmVNdWx0aXBhcnRGb3JtUmVxdWVzdE9wdGlvbnMiLCJoYXNVcGxvYWRhYmxlVmFsdWUiLCJjcmVhdGVGb3JtIiwibXVsdGlwYXJ0Rm9ybVJlcXVlc3RPcHRpb25zIiwiUHJvbWlzZSIsImFsbCIsImVudHJpZXMiLCJhZGRGb3JtVmFsdWUiLCJzb21lIiwiayIsImFwcGVuZCIsImZpbGUiLCJlbnRyeSIsImRlZmF1bHRQYXJzZVJlc3BvbnNlIiwiZGVidWciLCJfX3N0cmVhbUNsYXNzIiwiX19iaW5hcnlSZXNwb25zZSIsImNvbnRlbnRUeXBlIiwibWVkaWFUeXBlIiwidHJpbSIsImlzSlNPTiIsImluY2x1ZGVzIiwianNvbiIsIl9hZGRSZXF1ZXN0SUQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJBUElQcm9taXNlIiwicmVzcG9uc2VQcm9taXNlIiwicGFyc2VSZXNwb25zZTIiLCJyZXNvbHZlIiwicGFyc2VSZXNwb25zZSIsIl90aGVuVW53cmFwIiwidHJhbnNmb3JtIiwiYXNSZXNwb25zZSIsInRoZW4iLCJ3aXRoUmVzcG9uc2UiLCJwYXJzZWRQcm9taXNlIiwib25mdWxmaWxsZWQiLCJvbnJlamVjdGVkIiwiY2F0Y2giLCJmaW5hbGx5Iiwib25maW5hbGx5IiwiQVBJQ2xpZW50IiwiYmFzZVVSTCIsIm1heFJldHJpZXMiLCJ0aW1lb3V0IiwiaHR0cEFnZW50Iiwib3ZlcnJpZGRlbkZldGNoIiwidmFsaWRhdGVQb3NpdGl2ZUludGVnZXIiLCJhdXRoSGVhZGVycyIsImRlZmF1bHRIZWFkZXJzIiwiQWNjZXB0IiwiZ2V0VXNlckFnZW50IiwiZ2V0UGxhdGZvcm1IZWFkZXJzIiwidmFsaWRhdGVIZWFkZXJzIiwiY3VzdG9tSGVhZGVycyIsImRlZmF1bHRJZGVtcG90ZW5jeUtleSIsInV1aWQ0IiwibWV0aG9kUmVxdWVzdCIsInBvc3QiLCJwYXRjaCIsInB1dCIsImRlbGV0ZSIsIm1ldGhvZCIsInJlcXVlc3QiLCJvcHRzMiIsIkRhdGFWaWV3IiwiZ2V0QVBJTGlzdCIsIlBhZ2UyIiwicmVxdWVzdEFQSUxpc3QiLCJjYWxjdWxhdGVDb250ZW50TGVuZ3RoIiwiYnl0ZUxlbmd0aCIsImVuY29kZWQiLCJidWlsZFJlcXVlc3QiLCJpbnB1dE9wdGlvbnMiLCJyZXRyeUNvdW50IiwicXVlcnkiLCJfX2JpbmFyeVJlcXVlc3QiLCJjb250ZW50TGVuZ3RoIiwiYnVpbGRVUkwiLCJtaW5BZ2VudFRpbWVvdXQiLCJpZGVtcG90ZW5jeUhlYWRlciIsImlkZW1wb3RlbmN5S2V5IiwicmVxSGVhZGVycyIsImJ1aWxkSGVhZGVycyIsInJlcSIsImFnZW50Iiwic2lnbmFsIiwiYXBwbHlIZWFkZXJzTXV0IiwiZ2V0SGVhZGVyIiwiTWF0aCIsInRydW5jIiwicHJlcGFyZU9wdGlvbnMiLCJwcmVwYXJlUmVxdWVzdCIsInBhcnNlSGVhZGVycyIsImZyb21FbnRyaWVzIiwiaGVhZGVyIiwibWFrZVN0YXR1c0Vycm9yIiwicmVtYWluaW5nUmV0cmllcyIsIm1ha2VSZXF1ZXN0Iiwib3B0aW9uc0lucHV0IiwicmV0cmllc1JlbWFpbmluZyIsImFib3J0ZWQiLCJBYm9ydENvbnRyb2xsZXIiLCJmZXRjaFdpdGhUaW1lb3V0IiwicmV0cnlSZXF1ZXN0IiwicmVzcG9uc2VIZWFkZXJzIiwib2siLCJzaG91bGRSZXRyeSIsInJldHJ5TWVzc2FnZTIiLCJlcnJUZXh0IiwiZXJySlNPTiIsInNhZmVKU09OIiwiZXJyTWVzc2FnZSIsInJldHJ5TWVzc2FnZSIsIlBhZ2VQcm9taXNlIiwiaXNBYnNvbHV0ZVVSTCIsImRlZmF1bHRRdWVyeSIsImlzRW1wdHlPYmoiLCJzZWFyY2giLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsImluaXQyIiwibXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImZldGNoT3B0aW9ucyIsImNsZWFyVGltZW91dCIsInNob3VsZFJldHJ5SGVhZGVyIiwidGltZW91dE1pbGxpcyIsInJldHJ5QWZ0ZXJNaWxsaXNIZWFkZXIiLCJ0aW1lb3V0TXMiLCJwYXJzZUZsb2F0IiwiTnVtYmVyIiwiaXNOYU4iLCJyZXRyeUFmdGVySGVhZGVyIiwidGltZW91dFNlY29uZHMiLCJub3ciLCJjYWxjdWxhdGVEZWZhdWx0UmV0cnlUaW1lb3V0TWlsbGlzIiwic2xlZXAiLCJpbml0aWFsUmV0cnlEZWxheSIsIm1heFJldHJ5RGVsYXkiLCJudW1SZXRyaWVzIiwic2xlZXBTZWNvbmRzIiwibWluIiwicG93Iiwiaml0dGVyIiwicmFuZG9tIiwiQWJzdHJhY3RQYWdlIiwiY2xpZW50IiwiX0Fic3RyYWN0UGFnZV9jbGllbnQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0MiIsImhhc05leHRQYWdlIiwiaXRlbXMiLCJnZXRQYWdpbmF0ZWRJdGVtcyIsIm5leHRQYWdlSW5mbyIsImdldE5leHRQYWdlIiwibmV4dEluZm8iLCJuZXh0T3B0aW9ucyIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQyIiwiaXRlclBhZ2VzIiwicGFnZSIsIlByb3h5IiwidG9Mb3dlckNhc2UiLCJyZXF1ZXN0T3B0aW9uc0tleXMiLCJfX21ldGFkYXRhIiwiaXNSZXF1ZXN0T3B0aW9ucyIsImV2ZXJ5IiwiaGFzT3duIiwiZ2V0UGxhdGZvcm1Qcm9wZXJ0aWVzIiwiRGVubyIsImJ1aWxkIiwibm9ybWFsaXplUGxhdGZvcm0iLCJvcyIsIm5vcm1hbGl6ZUFyY2giLCJhcmNoIiwidmVyc2lvbiIsImRlbm8iLCJFZGdlUnVudGltZSIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsImJyb3dzZXJJbmZvIiwiZ2V0QnJvd3NlckluZm8iLCJicm93c2VyIiwibmF2aWdhdG9yIiwiYnJvd3NlclBhdHRlcm5zIiwicGF0dGVybiIsIm1hdGNoIiwiZXhlYyIsInVzZXJBZ2VudCIsIm1ham9yIiwibWlub3IiLCJfcGxhdGZvcm1IZWFkZXJzIiwic3RhcnRzV2l0aFNjaGVtZVJlZ2V4cCIsInRlc3QiLCJuIiwiaXNJbnRlZ2VyIiwiZW5zdXJlUHJlc2VudCIsInJlYWRFbnYiLCJlbnYiLCJjb2VyY2VJbnRlZ2VyIiwicm91bmQiLCJjb2VyY2VGbG9hdCIsImNvZXJjZUJvb2xlYW4iLCJCb29sZWFuIiwibWF5YmVDb2VyY2VJbnRlZ2VyIiwibWF5YmVDb2VyY2VGbG9hdCIsIm1heWJlQ29lcmNlQm9vbGVhbiIsIl9rIiwidGFyZ2V0SGVhZGVycyIsIm5ld0hlYWRlcnMiLCJsb3dlcktleSIsIlNFTlNJVElWRV9IRUFERVJTIiwiYWN0aW9uIiwiYXJncyIsIm1vZGlmaWVkQXJncyIsImFyZyIsIm1vZGlmaWVkQXJnMiIsIm1vZGlmaWVkQXJnIiwibG9nIiwiciIsImlzUnVubmluZ0luQnJvd3NlciIsIndpbmRvdyIsImRvY3VtZW50IiwiaXNIZWFkZXJzUHJvdG9jb2wiLCJnZXRSZXF1aXJlZEhlYWRlciIsImZvdW5kSGVhZGVyIiwibG93ZXJDYXNlZEhlYWRlciIsImludGVyY2Fwc0hlYWRlciIsIl9tIiwiZzEiLCJnMiIsIndhcm4iLCJ0b0Jhc2U2NCIsImJ0b2EiLCJ0b0Zsb2F0MzJBcnJheSIsImJhc2U2NFN0ciIsImJ1ZiIsIkZsb2F0MzJBcnJheSIsImJ5dGVPZmZzZXQiLCJCWVRFU19QRVJfRUxFTUVOVCIsImJpbmFyeVN0ciIsImF0b2IiLCJsZW4iLCJpc09iaiIsIlBhZ2UiLCJuZXh0UGFnZVBhcmFtcyIsIkN1cnNvclBhZ2UiLCJoYXNfbW9yZSIsImluZm8iLCJpZCIsImFmdGVyIiwiQVBJUmVzb3VyY2UiLCJfY2xpZW50IiwiTWVzc2FnZXMiLCJsaXN0IiwiY29tcGxldGlvbklkIiwiQ2hhdENvbXBsZXRpb25TdG9yZU1lc3NhZ2VzUGFnZSIsIkNvbXBsZXRpb25zIiwibWVzc2FnZXMiLCJyZXRyaWV2ZSIsInVwZGF0ZSIsIkNoYXRDb21wbGV0aW9uc1BhZ2UiLCJkZWwiLCJDaGF0IiwiY29tcGxldGlvbnMiLCJTcGVlY2giLCJUcmFuc2NyaXB0aW9ucyIsIm1vZGVsIiwiVHJhbnNsYXRpb25zIiwiQXVkaW8iLCJ0cmFuc2NyaXB0aW9ucyIsInRyYW5zbGF0aW9ucyIsInNwZWVjaCIsIkJhdGNoZXMiLCJiYXRjaElkIiwiQmF0Y2hlc1BhZ2UiLCJFdmVudFN0cmVhbSIsIl9FdmVudFN0cmVhbV9jb25uZWN0ZWRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX3Jlc29sdmVDb25uZWN0ZWRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX3JlamVjdENvbm5lY3RlZFByb21pc2UiLCJfRXZlbnRTdHJlYW1fZW5kUHJvbWlzZSIsIl9FdmVudFN0cmVhbV9yZXNvbHZlRW5kUHJvbWlzZSIsIl9FdmVudFN0cmVhbV9yZWplY3RFbmRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX2xpc3RlbmVycyIsIl9FdmVudFN0cmVhbV9lbmRlZCIsIl9FdmVudFN0cmVhbV9lcnJvcmVkIiwiX0V2ZW50U3RyZWFtX2Fib3J0ZWQiLCJfRXZlbnRTdHJlYW1fY2F0Y2hpbmdQcm9taXNlQ3JlYXRlZCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQzIiwicmVqZWN0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDMiLCJfcnVuIiwiZXhlY3V0b3IiLCJfZW1pdEZpbmFsIiwiX2VtaXQiLCJfRXZlbnRTdHJlYW1faW5zdGFuY2VzIiwiX0V2ZW50U3RyZWFtX2hhbmRsZUVycm9yIiwiYmluZCIsIl9jb25uZWN0ZWQiLCJlbmRlZCIsImVycm9yZWQiLCJvbiIsImxpc3RlbmVyIiwibGlzdGVuZXJzIiwib2ZmIiwiZmluZEluZGV4IiwibCIsInNwbGljZSIsIm9uY2UiLCJlbWl0dGVkIiwib3BlbkFJRXJyb3IiLCJBc3Npc3RhbnRTdHJlYW0iLCJfQXNzaXN0YW50U3RyZWFtX2V2ZW50cyIsIl9Bc3Npc3RhbnRTdHJlYW1fcnVuU3RlcFNuYXBzaG90cyIsIl9Bc3Npc3RhbnRTdHJlYW1fbWVzc2FnZVNuYXBzaG90cyIsIl9Bc3Npc3RhbnRTdHJlYW1fbWVzc2FnZVNuYXBzaG90IiwiX0Fzc2lzdGFudFN0cmVhbV9maW5hbFJ1biIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudENvbnRlbnRJbmRleCIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudENvbnRlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRUb29sQ2FsbEluZGV4IiwiX0Fzc2lzdGFudFN0cmVhbV9jdXJyZW50VG9vbENhbGwiLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRFdmVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudFJ1blNuYXBzaG90IiwiX0Fzc2lzdGFudFN0cmVhbV9jdXJyZW50UnVuU3RlcFNuYXBzaG90IiwiX0Fzc2lzdGFudFN0cmVhbV9pbnN0YW5jZXMiLCJXZWFrU2V0IiwicHVzaFF1ZXVlIiwicmVhZFF1ZXVlIiwiY2h1bmsyIiwicnVubmVyIiwiX2Zyb21SZWFkYWJsZVN0cmVhbSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQ0IiwiX0Fzc2lzdGFudFN0cmVhbV9hZGRFdmVudCIsIl9hZGRSdW4iLCJfQXNzaXN0YW50U3RyZWFtX2VuZFJlcXVlc3QiLCJjcmVhdGVUb29sQXNzaXN0YW50U3RyZWFtIiwidGhyZWFkSWQiLCJydW5JZCIsInJ1bnMiLCJfcnVuVG9vbEFzc2lzdGFudFN0cmVhbSIsIl9jcmVhdGVUb29sQXNzaXN0YW50U3RyZWFtIiwicnVuIiwic3VibWl0VG9vbE91dHB1dHMiLCJjcmVhdGVUaHJlYWRBc3Npc3RhbnRTdHJlYW0iLCJ0aHJlYWQiLCJfdGhyZWFkQXNzaXN0YW50U3RyZWFtIiwiY3JlYXRlQXNzaXN0YW50U3RyZWFtIiwiX3J1bkFzc2lzdGFudFN0cmVhbSIsImN1cnJlbnRFdmVudCIsImN1cnJlbnRSdW4iLCJjdXJyZW50TWVzc2FnZVNuYXBzaG90IiwiY3VycmVudFJ1blN0ZXBTbmFwc2hvdCIsImZpbmFsUnVuU3RlcHMiLCJmaW5hbE1lc3NhZ2VzIiwiZmluYWxSdW4iLCJfY3JlYXRlVGhyZWFkQXNzaXN0YW50U3RyZWFtIiwiY3JlYXRlQW5kUnVuIiwiX2NyZWF0ZUFzc2lzdGFudFN0cmVhbSIsImFjY3VtdWxhdGVEZWx0YSIsImRlbHRhIiwiZGVsdGFWYWx1ZSIsImFjY1ZhbHVlIiwiZGVsdGFFbnRyeSIsImFjY0VudHJ5IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldDQiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZUV2ZW50IiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVSdW4iLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZVJ1blN0ZXAiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZU1lc3NhZ2UiLCJhc3NlcnROZXZlciIsIl9Bc3Npc3RhbnRTdHJlYW1fZW5kUmVxdWVzdDIiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZU1lc3NhZ2UyIiwiYWNjdW11bGF0ZWRNZXNzYWdlIiwibmV3Q29udGVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZU1lc3NhZ2UiLCJjb250ZW50Iiwic25hcHNob3RDb250ZW50IiwidGV4dERlbHRhIiwic25hcHNob3QiLCJpbWFnZV9maWxlIiwiY3VycmVudENvbnRlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZVJ1blN0ZXAyIiwiYWNjdW11bGF0ZWRSdW5TdGVwIiwiX0Fzc2lzdGFudFN0cmVhbV9hY2N1bXVsYXRlUnVuU3RlcCIsInN0ZXBfZGV0YWlscyIsInRvb2xfY2FsbHMiLCJ0b29sQ2FsbCIsImRldGFpbHMiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZUV2ZW50MiIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZVJ1blN0ZXAyIiwiYWNjdW11bGF0ZWQiLCJfQXNzaXN0YW50U3RyZWFtX2FjY3VtdWxhdGVNZXNzYWdlMiIsImNvbnRlbnRFbGVtZW50IiwiX0Fzc2lzdGFudFN0cmVhbV9hY2N1bXVsYXRlQ29udGVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZUNvbnRlbnQyIiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVSdW4yIiwiX3giLCJBc3Npc3RhbnRzIiwiYXNzaXN0YW50SWQiLCJBc3Npc3RhbnRzUGFnZSIsImlzUnVubmFibGVGdW5jdGlvbldpdGhQYXJzZSIsIlBhcnNpbmdGdW5jdGlvbiIsImlucHV0IiwiZnVuY3Rpb24iLCJwYXJhbWV0ZXJzIiwiZGVzY3JpcHRpb24iLCJQYXJzaW5nVG9vbEZ1bmN0aW9uIiwiaXNBc3Npc3RhbnRNZXNzYWdlIiwicm9sZSIsImlzRnVuY3Rpb25NZXNzYWdlIiwiaXNUb29sTWVzc2FnZSIsImlzUHJlc2VudCIsIm1ha2VQYXJzZWFibGVSZXNwb25zZUZvcm1hdCIsInJlc3BvbnNlX2Zvcm1hdCIsInBhcnNlciIsImRlZmluZVByb3BlcnRpZXMiLCIkYnJhbmQiLCIkcGFyc2VSYXciLCJtYWtlUGFyc2VhYmxlVGV4dEZvcm1hdCIsImlzQXV0b1BhcnNhYmxlUmVzcG9uc2VGb3JtYXQiLCJtYWtlUGFyc2VhYmxlVG9vbCIsInRvb2wiLCJjYWxsYmFjayIsIiRjYWxsYmFjayIsImlzQXV0b1BhcnNhYmxlVG9vbCIsIm1heWJlUGFyc2VDaGF0Q29tcGxldGlvbiIsImNvbXBsZXRpb24iLCJoYXNBdXRvUGFyc2VhYmxlSW5wdXQiLCJjaG9pY2VzIiwiY2hvaWNlIiwicGFyc2VkIiwicGFyc2VDaGF0Q29tcGxldGlvbiIsImZpbmlzaF9yZWFzb24iLCJwYXJzZVRvb2xDYWxsIiwicmVmdXNhbCIsInBhcnNlUmVzcG9uc2VGb3JtYXQiLCJpbnB1dFRvb2wiLCJ0b29scyIsImZpbmQiLCJpbnB1dFRvb2wyIiwicGFyc2VkX2FyZ3VtZW50cyIsImFyZ3VtZW50cyIsInN0cmljdCIsInNob3VsZFBhcnNlVG9vbENhbGwiLCJ0IiwidmFsaWRhdGVJbnB1dFRvb2xzIiwiREVGQVVMVF9NQVhfQ0hBVF9DT01QTEVUSU9OUyIsIkFic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXIiLCJfY2hhdENvbXBsZXRpb25zIiwiX2FkZENoYXRDb21wbGV0aW9uIiwiY2hhdENvbXBsZXRpb24iLCJfYWRkTWVzc2FnZSIsImVtaXQiLCJmdW5jdGlvbl9jYWxsIiwidG9vbF9jYWxsIiwiZmluYWxDaGF0Q29tcGxldGlvbiIsImZpbmFsQ29udGVudCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQ1IiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfaW5zdGFuY2VzIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxDb250ZW50IiwiZmluYWxNZXNzYWdlIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxNZXNzYWdlIiwiZmluYWxGdW5jdGlvbkNhbGwiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbEZ1bmN0aW9uQ2FsbCIsImZpbmFsRnVuY3Rpb25DYWxsUmVzdWx0IiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxGdW5jdGlvbkNhbGxSZXN1bHQiLCJ0b3RhbFVzYWdlIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfY2FsY3VsYXRlVG90YWxVc2FnZSIsImFsbENoYXRDb21wbGV0aW9ucyIsInVzYWdlIiwiX2NyZWF0ZUNoYXRDb21wbGV0aW9uIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfdmFsaWRhdGVQYXJhbXMiLCJjaGF0IiwiX3J1bkNoYXRDb21wbGV0aW9uIiwiX3J1bkZ1bmN0aW9ucyIsInJlc3RQYXJhbXMiLCJzaW5nbGVGdW5jdGlvblRvQ2FsbCIsIm1heENoYXRDb21wbGV0aW9ucyIsImZ1bmN0aW9uc0J5TmFtZSIsImYiLCJmdW5jdGlvbnMiLCJjb250ZW50MiIsInJhd0NvbnRlbnQiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9zdHJpbmdpZnlGdW5jdGlvbkNhbGxSZXN1bHQiLCJfcnVuVG9vbHMiLCJ0b29sX2Nob2ljZSIsImlucHV0VG9vbHMiLCJ0b29sX2NhbGxfaWQiLCJuYW1lMiIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsTWVzc2FnZTIiLCJyZXN0IiwicmV0IiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxGdW5jdGlvbkNhbGwyIiwiYXQiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbEZ1bmN0aW9uQ2FsbFJlc3VsdDIiLCJ5IiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfY2FsY3VsYXRlVG90YWxVc2FnZTIiLCJ0b3RhbCIsImNvbXBsZXRpb25fdG9rZW5zIiwicHJvbXB0X3Rva2VucyIsInRvdGFsX3Rva2VucyIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX3ZhbGlkYXRlUGFyYW1zMiIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX3N0cmluZ2lmeUZ1bmN0aW9uQ2FsbFJlc3VsdDIiLCJDaGF0Q29tcGxldGlvblJ1bm5lciIsInJ1bkZ1bmN0aW9ucyIsInJ1blRvb2xzIiwiU1RSIiwiTlVNIiwiQVJSIiwiT0JKIiwiTlVMTCIsIkJPT0wiLCJOQU4iLCJJTkZJTklUWSIsIk1JTlVTX0lORklOSVRZIiwiSU5GIiwiU1BFQ0lBTCIsIkFUT00iLCJDT0xMRUNUSU9OIiwiQUxMIiwiQWxsb3ciLCJQYXJ0aWFsSlNPTiIsIk1hbGZvcm1lZEpTT04iLCJwYXJzZUpTT04iLCJqc29uU3RyaW5nIiwiYWxsb3dQYXJ0aWFsIiwiX3BhcnNlSlNPTiIsImFsbG93IiwibWFya1BhcnRpYWxKU09OIiwidGhyb3dNYWxmb3JtZWRFcnJvciIsInBhcnNlQW55Iiwic2tpcEJsYW5rIiwicGFyc2VTdHIiLCJwYXJzZU9iaiIsInBhcnNlQXJyIiwiSW5maW5pdHkiLCJOYU4iLCJwYXJzZU51bSIsImVzY2FwZTIiLCJsYXN0SW5kZXhPZiIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZTIiLCJwYXJ0aWFsUGFyc2UiLCJDaGF0Q29tcGxldGlvblN0cmVhbSIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9wYXJhbXMiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fY2hvaWNlRXZlbnRTdGF0ZXMiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fY3VycmVudENoYXRDb21wbGV0aW9uU25hcHNob3QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0NSIsImN1cnJlbnRDaGF0Q29tcGxldGlvblNuYXBzaG90IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDYiLCJjcmVhdGVDaGF0Q29tcGxldGlvbiIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9pbnN0YW5jZXMiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYmVnaW5SZXF1ZXN0IiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2FkZENodW5rIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2VuZFJlcXVlc3QiLCJjaGF0SWQiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYmVnaW5SZXF1ZXN0MiIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9nZXRDaG9pY2VFdmVudFN0YXRlIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2dldENob2ljZUV2ZW50U3RhdGUyIiwic3RhdGUiLCJjb250ZW50X2RvbmUiLCJyZWZ1c2FsX2RvbmUiLCJsb2dwcm9ic19jb250ZW50X2RvbmUiLCJsb2dwcm9ic19yZWZ1c2FsX2RvbmUiLCJkb25lX3Rvb2xfY2FsbHMiLCJjdXJyZW50X3Rvb2xfY2FsbF9pbmRleCIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9hZGRDaHVuazIiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYWNjdW11bGF0ZUNoYXRDb21wbGV0aW9uIiwiY2hvaWNlU25hcHNob3QiLCJsb2dwcm9icyIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9lbWl0Q29udGVudERvbmVFdmVudHMiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW1pdFRvb2xDYWxsRG9uZUV2ZW50IiwidG9vbENhbGxEZWx0YSIsInRvb2xDYWxsU25hcHNob3QiLCJhcmd1bWVudHNfZGVsdGEiLCJhc3NlcnROZXZlcjIiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW1pdFRvb2xDYWxsRG9uZUV2ZW50MiIsInRvb2xDYWxsSW5kZXgiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW1pdENvbnRlbnREb25lRXZlbnRzMiIsInJlc3BvbnNlRm9ybWF0IiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2dldEF1dG9QYXJzZWFibGVSZXNwb25zZUZvcm1hdCIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9lbmRSZXF1ZXN0MiIsImZpbmFsaXplQ2hhdENvbXBsZXRpb24iLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZ2V0QXV0b1BhcnNlYWJsZVJlc3BvbnNlRm9ybWF0MiIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9hY2N1bXVsYXRlQ2hhdENvbXBsZXRpb24yIiwiYXNzaWduIiwib3RoZXIiLCJyZWZ1c2FsMiIsInJlc3QzIiwiYXNzZXJ0SXNFbXB0eSIsIl9hMiIsIl9iIiwicmVzdDIiLCJfYyIsImluZGV4MiIsIl9kIiwiY3JlYXRlZCIsInN5c3RlbV9maW5nZXJwcmludCIsImNob2ljZVJlc3QiLCJtZXNzYWdlUmVzdCIsImlkMiIsInRvb2xSZXN0IiwiZm5SZXN0Iiwic3RyIiwiQ2hhdENvbXBsZXRpb25TdHJlYW1pbmdSdW5uZXIiLCJDb21wbGV0aW9uczIiLCJDaGF0MiIsIkNoYXQzIiwiU2Vzc2lvbnMiLCJUcmFuc2NyaXB0aW9uU2Vzc2lvbnMiLCJSZWFsdGltZSIsInNlc3Npb25zIiwidHJhbnNjcmlwdGlvblNlc3Npb25zIiwiTWVzc2FnZXMyIiwibWVzc2FnZUlkIiwiTWVzc2FnZXNQYWdlIiwiU3RlcHMiLCJzdGVwSWQiLCJSdW5TdGVwc1BhZ2UiLCJSdW5zIiwic3RlcHMiLCJpbmNsdWRlIiwiUnVuc1BhZ2UiLCJjcmVhdGVBbmRQb2xsIiwicG9sbCIsImNyZWF0ZUFuZFN0cmVhbSIsImJldGEiLCJ0aHJlYWRzIiwicG9sbEludGVydmFsTXMiLCJzbGVlcEludGVydmFsIiwiaGVhZGVySW50ZXJ2YWwiLCJoZWFkZXJJbnRlcnZhbE1zIiwic3VibWl0VG9vbE91dHB1dHNBbmRQb2xsIiwic3VibWl0VG9vbE91dHB1dHNTdHJlYW0iLCJUaHJlYWRzIiwiY3JlYXRlQW5kUnVuUG9sbCIsInRocmVhZF9pZCIsImNyZWF0ZUFuZFJ1blN0cmVhbSIsIkJldGEiLCJyZWFsdGltZSIsImFzc2lzdGFudHMiLCJDb21wbGV0aW9uczMiLCJDb250ZW50IiwiY29udGFpbmVySWQiLCJmaWxlSWQiLCJGaWxlcyIsIkZpbGVMaXN0UmVzcG9uc2VzUGFnZSIsIkNvbnRhaW5lcnMiLCJmaWxlcyIsIkNvbnRhaW5lckxpc3RSZXNwb25zZXNQYWdlIiwiRW1iZWRkaW5ncyIsImhhc1VzZXJQcm92aWRlZEVuY29kaW5nRm9ybWF0IiwiZW5jb2RpbmdfZm9ybWF0IiwicmVzcG9uc2UyIiwiZW1iZWRkaW5nQmFzZTY0T2JqIiwiZW1iZWRkaW5nQmFzZTY0U3RyIiwiZW1iZWRkaW5nIiwiT3V0cHV0SXRlbXMiLCJldmFsSWQiLCJvdXRwdXRJdGVtSWQiLCJPdXRwdXRJdGVtTGlzdFJlc3BvbnNlc1BhZ2UiLCJSdW5zMiIsIm91dHB1dEl0ZW1zIiwiUnVuTGlzdFJlc3BvbnNlc1BhZ2UiLCJFdmFscyIsIkV2YWxMaXN0UmVzcG9uc2VzUGFnZSIsIkZpbGVzMiIsIkZpbGVPYmplY3RzUGFnZSIsInJldHJpZXZlQ29udGVudCIsIndhaXRGb3JQcm9jZXNzaW5nIiwicG9sbEludGVydmFsIiwibWF4V2FpdCIsIlRFUk1JTkFMX1NUQVRFUyIsIk1ldGhvZHMiLCJHcmFkZXJzIiwidmFsaWRhdGUiLCJBbHBoYSIsImdyYWRlcnMiLCJQZXJtaXNzaW9ucyIsImZpbmVUdW5lZE1vZGVsQ2hlY2twb2ludCIsIlBlcm1pc3Npb25DcmVhdGVSZXNwb25zZXNQYWdlIiwicGVybWlzc2lvbklkIiwiQ2hlY2twb2ludHMiLCJwZXJtaXNzaW9ucyIsIkNoZWNrcG9pbnRzMiIsImZpbmVUdW5pbmdKb2JJZCIsIkZpbmVUdW5pbmdKb2JDaGVja3BvaW50c1BhZ2UiLCJKb2JzIiwiY2hlY2twb2ludHMiLCJGaW5lVHVuaW5nSm9ic1BhZ2UiLCJsaXN0RXZlbnRzIiwiRmluZVR1bmluZ0pvYkV2ZW50c1BhZ2UiLCJwYXVzZSIsInJlc3VtZSIsIkZpbmVUdW5pbmciLCJtZXRob2RzIiwiam9icyIsImFscGhhIiwiR3JhZGVyTW9kZWxzIiwiR3JhZGVyczIiLCJncmFkZXJNb2RlbHMiLCJJbWFnZXMiLCJjcmVhdGVWYXJpYXRpb24iLCJlZGl0IiwiTW9kZWxzIiwiTW9kZWxzUGFnZSIsIk1vZGVyYXRpb25zIiwibWF5YmVQYXJzZVJlc3BvbnNlIiwiaGFzQXV0b1BhcnNlYWJsZUlucHV0MiIsIm91dHB1dF9wYXJzZWQiLCJvdXRwdXQiLCJwYXJzZVRvb2xDYWxsMiIsInBhcnNlVGV4dEZvcm1hdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImFkZE91dHB1dFRleHQiLCJvdXRwdXQyIiwidGV4dF9mb3JtYXQiLCJtYWtlUGFyc2VhYmxlUmVzcG9uc2VUb29sIiwiaXNBdXRvUGFyc2FibGVUb29sMiIsImdldElucHV0VG9vbEJ5TmFtZSIsImlucHV0X3Rvb2xzIiwic2hvdWxkUGFyc2VUb29sQ2FsbDIiLCJ2YWxpZGF0ZUlucHV0VG9vbHMyIiwicnNwIiwidGV4dHMiLCJvdXRwdXRfdGV4dCIsIklucHV0SXRlbXMiLCJyZXNwb25zZUlkIiwiUmVzcG9uc2VJdGVtc1BhZ2UiLCJSZXNwb25zZVN0cmVhbSIsIl9SZXNwb25zZVN0cmVhbV9wYXJhbXMiLCJfUmVzcG9uc2VTdHJlYW1fY3VycmVudFJlc3BvbnNlU25hcHNob3QiLCJfUmVzcG9uc2VTdHJlYW1fZmluYWxSZXNwb25zZSIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQ2IiwiY3JlYXRlUmVzcG9uc2UiLCJfY3JlYXRlT3JSZXRyaWV2ZVJlc3BvbnNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDciLCJfUmVzcG9uc2VTdHJlYW1faW5zdGFuY2VzIiwiX1Jlc3BvbnNlU3RyZWFtX2JlZ2luUmVxdWVzdCIsInN0YXJ0aW5nX2FmdGVyIiwicmVzcG9uc2VzIiwicmVzcG9uc2VfaWQiLCJfUmVzcG9uc2VTdHJlYW1fYWRkRXZlbnQiLCJfUmVzcG9uc2VTdHJlYW1fZW5kUmVxdWVzdCIsIl9SZXNwb25zZVN0cmVhbV9iZWdpblJlcXVlc3QyIiwiX1Jlc3BvbnNlU3RyZWFtX2FkZEV2ZW50MiIsIm1heWJlRW1pdCIsImV2ZW50MiIsInNlcXVlbmNlX251bWJlciIsIl9SZXNwb25zZVN0cmVhbV9hY2N1bXVsYXRlUmVzcG9uc2UiLCJvdXRwdXRfaW5kZXgiLCJjb250ZW50X2luZGV4IiwiX1Jlc3BvbnNlU3RyZWFtX2VuZFJlcXVlc3QyIiwicGFyc2VkUmVzcG9uc2UiLCJmaW5hbGl6ZVJlc3BvbnNlIiwiX1Jlc3BvbnNlU3RyZWFtX2FjY3VtdWxhdGVSZXNwb25zZTIiLCJwYXJ0IiwiZmluYWxSZXNwb25zZSIsIlJlc3BvbnNlcyIsImlucHV0SXRlbXMiLCJQYXJ0cyIsInVwbG9hZElkIiwiVXBsb2FkcyIsImNvbXBsZXRlIiwiYWxsU2V0dGxlZFdpdGhUaHJvdyIsInByb21pc2VzIiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJyZWplY3RlZCIsInJlYXNvbiIsIkZpbGVzMyIsInZlY3RvclN0b3JlSWQiLCJWZWN0b3JTdG9yZUZpbGVzUGFnZSIsImZpbGVSZXNwb25zZSIsInVwbG9hZCIsImZpbGVJbmZvIiwicHVycG9zZSIsImZpbGVfaWQiLCJ1cGxvYWRBbmRQb2xsIiwiRmlsZUNvbnRlbnRSZXNwb25zZXNQYWdlIiwiRmlsZUJhdGNoZXMiLCJiYXRjaCIsImxpc3RGaWxlcyIsImZpbGVJZHMiLCJjb25maWd1cmVkQ29uY3VycmVuY3kiLCJtYXhDb25jdXJyZW5jeSIsImNvbmN1cnJlbmN5TGltaXQiLCJmaWxlSXRlcmF0b3IiLCJhbGxGaWxlSWRzIiwicHJvY2Vzc0ZpbGVzIiwiZmlsZU9iaiIsIndvcmtlcnMiLCJmaWxsIiwiZmlsZV9pZHMiLCJWZWN0b3JTdG9yZXMiLCJmaWxlQmF0Y2hlcyIsIlZlY3RvclN0b3Jlc1BhZ2UiLCJWZWN0b3JTdG9yZVNlYXJjaFJlc3BvbnNlc1BhZ2UiLCJhcGlLZXkiLCJvcmdhbml6YXRpb24iLCJwcm9qZWN0IiwiZGFuZ2Vyb3VzbHlBbGxvd0Jyb3dzZXIiLCJlbWJlZGRpbmdzIiwiaW1hZ2VzIiwiYXVkaW8iLCJtb2RlcmF0aW9ucyIsIm1vZGVscyIsImZpbmVUdW5pbmciLCJ2ZWN0b3JTdG9yZXMiLCJiYXRjaGVzIiwidXBsb2FkcyIsImV2YWxzIiwiY29udGFpbmVycyIsIl9vcHRpb25zIiwiQXV0aG9yaXphdGlvbiIsIl9hIiwiREVGQVVMVF9USU1FT1VUIiwiYXBpVmVyc2lvbiIsImVuZHBvaW50IiwiZGVwbG95bWVudCIsImF6dXJlQURUb2tlblByb3ZpZGVyIiwiQVBJX0tFWV9TRU5USU5FTCIsIl9henVyZUFEVG9rZW5Qcm92aWRlciIsImRlcGxveW1lbnROYW1lIiwiX2RlcGxveW1lbnRzX2VuZHBvaW50cyIsIl9nZXRBenVyZUFEVG9rZW4iLCJ0b2tlbiIsIm9wZW5haV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUlWLEtBQUEsQ0FBTSx1Q0FBdUM7O01BRXpELE1BQU0wYSxLQUFBLEdBQVEsS0FBSzZpQixjQUFBLElBQWtCN2xDLE9BQUEsQ0FBUWdKLElBQUEsQ0FBSyxZQUFZaEosT0FBQSxDQUFReWMsVUFBQSxHQUFhO01BQ25GLElBQUl1RyxLQUFBLEtBQVUsVUFBYSxDQUFDLEtBQUtuTyxPQUFBLENBQVF0QixRQUFBLENBQVMsY0FBYyxHQUFHO1FBQ2pFdlQsT0FBQSxDQUFRK1IsSUFBQSxHQUFPLGdCQUFnQmlSLEtBQUEsR0FBUWhqQixPQUFBLENBQVErUixJQUFBOzs7SUFHbkQsT0FBTyxNQUFNNEUsWUFBQSxDQUFhM1csT0FBQSxFQUFTeVIsS0FBSztFQUMxQztFQUVBLE1BQU1zMEIsaUJBQUEsRUFBZ0I7SUFDcEIsSUFBSSxPQUFPLEtBQUtILHFCQUFBLEtBQTBCLFlBQVk7TUFDcEQsTUFBTUksS0FBQSxHQUFRLE1BQU0sS0FBS0oscUJBQUEsQ0FBcUI7TUFDOUMsSUFBSSxDQUFDSSxLQUFBLElBQVMsT0FBT0EsS0FBQSxLQUFVLFVBQVU7UUFDdkMsTUFBTSxJQUFXMW9DLFdBQUEsQ0FDZiwrRUFBK0Uwb0MsS0FBQSxFQUFPOztNQUcxRixPQUFPQSxLQUFBOztJQUVULE9BQU87RUFDVDtFQUVtQjd3QixZQUFZbE8sSUFBQSxFQUE4QjtJQUMzRCxPQUFPO0VBQ1Q7RUFFbUIsTUFBTTZRLGVBQWU3USxJQUFBLEVBQXVDO0lBTzdFLElBQUlBLElBQUEsQ0FBSzhDLE9BQUEsR0FBVSxZQUFZO01BQzdCLE9BQU8sTUFBTStOLGNBQUEsQ0FBZTdRLElBQUk7O0lBRWxDLE1BQU0rK0IsS0FBQSxHQUFRLE1BQU0sS0FBS0QsZ0JBQUEsQ0FBZ0I7SUFDekM5K0IsSUFBQSxDQUFLOEMsT0FBQSxLQUFMOUMsSUFBQSxDQUFLOEMsT0FBQSxHQUFZO0lBQ2pCLElBQUlpOEIsS0FBQSxFQUFPO01BQ1QvK0IsSUFBQSxDQUFLOEMsT0FBQSxDQUFRLG1CQUFtQixVQUFVaThCLEtBQUE7ZUFDakMsS0FBSzVCLE1BQUEsS0FBV3VCLGdCQUFBLEVBQWtCO01BQzNDMStCLElBQUEsQ0FBSzhDLE9BQUEsQ0FBUSxhQUFhLEtBQUtxNkIsTUFBQTtXQUMxQjtNQUNMLE1BQU0sSUFBVzltQyxXQUFBLENBQVksdUJBQXVCOztJQUV0RCxPQUFPLE1BQU13YSxjQUFBLENBQWU3USxJQUFJO0VBQ2xDOztBQUdGLElBQU02K0Isc0JBQUEsR0FBeUIsbUJBQUlwNUIsR0FBQSxDQUFJLENBQ3JDLGdCQUNBLHFCQUNBLGVBQ0EseUJBQ0EsdUJBQ0EsaUJBQ0EsdUJBQ0EsZ0JBQ0Q7QUFFRCxJQUFNaTVCLGdCQUFBLEdBQW1CO0FBcUJ6QixJQUFBTSxjQUFBLEdBQWU1b0MsTUFBQTs7O0EvRTN4QmYsSUFBT00sc0JBQUEsR0FBUXNvQyxjQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=