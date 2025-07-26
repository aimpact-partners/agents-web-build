System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["openai","4.92.1"]]);
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

// .beyond/uimport/temp/openai.4.92.1.js
var openai_4_92_1_exports = {};
__export(openai_4_92_1_exports, {
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
  default: () => openai_4_92_1_default,
  fileFromPath: () => fileFromPath,
  toFile: () => toFile
});
module.exports = __toCommonJS(openai_4_92_1_exports);

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
var VERSION = "4.92.1";

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
  buildRequest(options, {
    retryCount = 0
  } = {}) {
    options = {
      ...options
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
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      headers[this.idempotencyHeader] = options.idempotencyKey;
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
var __classPrivateFieldGet4 = function (receiver, state, kind2, f) {
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
    return __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
  }
  async finalMessage() {
    await this.done();
    return __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
  }
  async finalFunctionCall() {
    await this.done();
    return __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
  }
  async finalFunctionCallResult() {
    await this.done();
    return __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
  }
  async totalUsage() {
    await this.done();
    return __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this);
  }
  allChatCompletions() {
    return [...this._chatCompletions];
  }
  _emitFinal() {
    const completion = this._chatCompletions[this._chatCompletions.length - 1];
    if (completion) this._emit("finalChatCompletion", completion);
    const finalMessage = __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
    if (finalMessage) this._emit("finalMessage", finalMessage);
    const finalContent = __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
    if (finalContent) this._emit("finalContent", finalContent);
    const finalFunctionCall = __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
    if (finalFunctionCall) this._emit("finalFunctionCall", finalFunctionCall);
    const finalFunctionCallResult = __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
    if (finalFunctionCallResult != null) this._emit("finalFunctionCallResult", finalFunctionCallResult);
    if (this._chatCompletions.some(c => c.usage)) {
      this._emit("totalUsage", __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this));
    }
  }
  async _createChatCompletion(client, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_validateParams).call(this, params);
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
      const content = __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
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
        const content = __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
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
  return __classPrivateFieldGet4(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this).content ?? null;
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
var __classPrivateFieldSet4 = function (receiver, state, value, kind2, f) {
  if (kind2 === "m") throw new TypeError("Private method is not writable");
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind2 === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet5 = function (receiver, state, kind2, f) {
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
    __classPrivateFieldSet4(this, _ChatCompletionStream_params, params, "f");
    __classPrivateFieldSet4(this, _ChatCompletionStream_choiceEventStates, [], "f");
  }
  get currentChatCompletionSnapshot() {
    return __classPrivateFieldGet5(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
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
    __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
    const stream = await client.chat.completions.create({
      ...params,
      stream: true
    }, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const chunk of stream) {
      __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
  }
  async _fromReadableStream(readableStream, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
    this._connected();
    const stream = Stream.fromReadableStream(readableStream, this.controller);
    let chatId;
    for await (const chunk of stream) {
      if (chatId && chatId !== chunk.id) {
        this._addChatCompletion(__classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
      }
      __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
      chatId = chunk.id;
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addChatCompletion(__classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
  }
  [(_ChatCompletionStream_params = /* @__PURE__ */new WeakMap(), _ChatCompletionStream_choiceEventStates = /* @__PURE__ */new WeakMap(), _ChatCompletionStream_currentChatCompletionSnapshot = /* @__PURE__ */new WeakMap(), _ChatCompletionStream_instances = /* @__PURE__ */new WeakSet(), _ChatCompletionStream_beginRequest = function _ChatCompletionStream_beginRequest2() {
    if (this.ended) return;
    __classPrivateFieldSet4(this, _ChatCompletionStream_currentChatCompletionSnapshot, void 0, "f");
  }, _ChatCompletionStream_getChoiceEventState = function _ChatCompletionStream_getChoiceEventState2(choice) {
    let state = __classPrivateFieldGet5(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index];
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
    __classPrivateFieldGet5(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index] = state;
    return state;
  }, _ChatCompletionStream_addChunk = function _ChatCompletionStream_addChunk2(chunk) {
    if (this.ended) return;
    const completion = __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_accumulateChatCompletion).call(this, chunk);
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
      const state = __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
      if (choiceSnapshot.finish_reason) {
        __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
        if (state.current_tool_call_index != null) {
          __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
        }
      }
      for (const toolCall of choice.delta.tool_calls ?? []) {
        if (state.current_tool_call_index !== toolCall.index) {
          __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
          if (state.current_tool_call_index != null) {
            __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
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
          assertNever(toolCallSnapshot?.type);
        }
      }
    }
  }, _ChatCompletionStream_emitToolCallDoneEvent = function _ChatCompletionStream_emitToolCallDoneEvent2(choiceSnapshot, toolCallIndex) {
    const state = __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
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
      const inputTool = __classPrivateFieldGet5(this, _ChatCompletionStream_params, "f")?.tools?.find(tool => tool.type === "function" && tool.function.name === toolCallSnapshot.function.name);
      this._emit("tool_calls.function.arguments.done", {
        name: toolCallSnapshot.function.name,
        index: toolCallIndex,
        arguments: toolCallSnapshot.function.arguments,
        parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCallSnapshot.function.arguments) : inputTool?.function.strict ? JSON.parse(toolCallSnapshot.function.arguments) : null
      });
    } else {
      assertNever(toolCallSnapshot.type);
    }
  }, _ChatCompletionStream_emitContentDoneEvents = function _ChatCompletionStream_emitContentDoneEvents2(choiceSnapshot) {
    const state = __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
    if (choiceSnapshot.message.content && !state.content_done) {
      state.content_done = true;
      const responseFormat = __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this);
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
    const snapshot = __classPrivateFieldGet5(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    if (!snapshot) {
      throw new OpenAIError(`request ended without sending any chunks`);
    }
    __classPrivateFieldSet4(this, _ChatCompletionStream_currentChatCompletionSnapshot, void 0, "f");
    __classPrivateFieldSet4(this, _ChatCompletionStream_choiceEventStates, [], "f");
    return finalizeChatCompletion(snapshot, __classPrivateFieldGet5(this, _ChatCompletionStream_params, "f"));
  }, _ChatCompletionStream_getAutoParseableResponseFormat = function _ChatCompletionStream_getAutoParseableResponseFormat2() {
    const responseFormat = __classPrivateFieldGet5(this, _ChatCompletionStream_params, "f")?.response_format;
    if (isAutoParsableResponseFormat(responseFormat)) {
      return responseFormat;
    }
    return null;
  }, _ChatCompletionStream_accumulateChatCompletion = function _ChatCompletionStream_accumulateChatCompletion2(chunk) {
    var _a2, _b, _c, _d;
    let snapshot = __classPrivateFieldGet5(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    const {
      choices,
      ...rest
    } = chunk;
    if (!snapshot) {
      snapshot = __classPrivateFieldSet4(this, _ChatCompletionStream_currentChatCompletionSnapshot, {
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
        if (__classPrivateFieldGet5(this, _ChatCompletionStream_params, "f") && hasAutoParseableInput(__classPrivateFieldGet5(this, _ChatCompletionStream_params, "f"))) {
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
        if (!choice.message.refusal && __classPrivateFieldGet5(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this)) {
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
            if (shouldParseToolCall(__classPrivateFieldGet5(this, _ChatCompletionStream_params, "f"), tool_call)) {
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
function assertNever(_x) {}

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

// node_modules/openai/lib/AssistantStream.mjs
var __classPrivateFieldGet6 = function (receiver, state, kind2, f) {
  if (kind2 === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind2 === "m" ? f : kind2 === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet5 = function (receiver, state, value, kind2, f) {
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
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
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
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
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
    return __classPrivateFieldGet6(this, _AssistantStream_currentEvent, "f");
  }
  currentRun() {
    return __classPrivateFieldGet6(this, _AssistantStream_currentRunSnapshot, "f");
  }
  currentMessageSnapshot() {
    return __classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f");
  }
  currentRunStepSnapshot() {
    return __classPrivateFieldGet6(this, _AssistantStream_currentRunStepSnapshot, "f");
  }
  async finalRunSteps() {
    await this.done();
    return Object.values(__classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f"));
  }
  async finalMessages() {
    await this.done();
    return Object.values(__classPrivateFieldGet6(this, _AssistantStream_messageSnapshots, "f"));
  }
  async finalRun() {
    await this.done();
    if (!__classPrivateFieldGet6(this, _AssistantStream_finalRun, "f")) throw Error("Final run was not received.");
    return __classPrivateFieldGet6(this, _AssistantStream_finalRun, "f");
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
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
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
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return this._addRun(__classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this));
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
  __classPrivateFieldSet5(this, _AssistantStream_currentEvent, event, "f");
  __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_handleEvent).call(this, event);
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
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_handleRun).call(this, event);
      break;
    case "thread.run.step.created":
    case "thread.run.step.in_progress":
    case "thread.run.step.delta":
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_handleRunStep).call(this, event);
      break;
    case "thread.message.created":
    case "thread.message.in_progress":
    case "thread.message.delta":
    case "thread.message.completed":
    case "thread.message.incomplete":
      __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_handleMessage).call(this, event);
      break;
    case "error":
      throw new Error("Encountered an error event in event processing - errors should be processed earlier");
    default:
      assertNever2(event);
  }
}, _AssistantStream_endRequest = function _AssistantStream_endRequest2() {
  if (this.ended) {
    throw new OpenAIError(`stream has ended, this shouldn't happen`);
  }
  if (!__classPrivateFieldGet6(this, _AssistantStream_finalRun, "f")) throw Error("Final run has not been received");
  return __classPrivateFieldGet6(this, _AssistantStream_finalRun, "f");
}, _AssistantStream_handleMessage = function _AssistantStream_handleMessage2(event) {
  const [accumulatedMessage, newContent] = __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_accumulateMessage).call(this, event, __classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f"));
  __classPrivateFieldSet5(this, _AssistantStream_messageSnapshot, accumulatedMessage, "f");
  __classPrivateFieldGet6(this, _AssistantStream_messageSnapshots, "f")[accumulatedMessage.id] = accumulatedMessage;
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
          if (content.index != __classPrivateFieldGet6(this, _AssistantStream_currentContentIndex, "f")) {
            if (__classPrivateFieldGet6(this, _AssistantStream_currentContent, "f")) {
              switch (__classPrivateFieldGet6(this, _AssistantStream_currentContent, "f").type) {
                case "text":
                  this._emit("textDone", __classPrivateFieldGet6(this, _AssistantStream_currentContent, "f").text, __classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f"));
                  break;
                case "image_file":
                  this._emit("imageFileDone", __classPrivateFieldGet6(this, _AssistantStream_currentContent, "f").image_file, __classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f"));
                  break;
              }
            }
            __classPrivateFieldSet5(this, _AssistantStream_currentContentIndex, content.index, "f");
          }
          __classPrivateFieldSet5(this, _AssistantStream_currentContent, accumulatedMessage.content[content.index], "f");
        }
      }
      break;
    case "thread.message.completed":
    case "thread.message.incomplete":
      if (__classPrivateFieldGet6(this, _AssistantStream_currentContentIndex, "f") !== void 0) {
        const currentContent = event.data.content[__classPrivateFieldGet6(this, _AssistantStream_currentContentIndex, "f")];
        if (currentContent) {
          switch (currentContent.type) {
            case "image_file":
              this._emit("imageFileDone", currentContent.image_file, __classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f"));
              break;
            case "text":
              this._emit("textDone", currentContent.text, __classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f"));
              break;
          }
        }
      }
      if (__classPrivateFieldGet6(this, _AssistantStream_messageSnapshot, "f")) {
        this._emit("messageDone", event.data);
      }
      __classPrivateFieldSet5(this, _AssistantStream_messageSnapshot, void 0, "f");
  }
}, _AssistantStream_handleRunStep = function _AssistantStream_handleRunStep2(event) {
  const accumulatedRunStep = __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_accumulateRunStep).call(this, event);
  __classPrivateFieldSet5(this, _AssistantStream_currentRunStepSnapshot, accumulatedRunStep, "f");
  switch (event.event) {
    case "thread.run.step.created":
      this._emit("runStepCreated", event.data);
      break;
    case "thread.run.step.delta":
      const delta = event.data.delta;
      if (delta.step_details && delta.step_details.type == "tool_calls" && delta.step_details.tool_calls && accumulatedRunStep.step_details.type == "tool_calls") {
        for (const toolCall of delta.step_details.tool_calls) {
          if (toolCall.index == __classPrivateFieldGet6(this, _AssistantStream_currentToolCallIndex, "f")) {
            this._emit("toolCallDelta", toolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index]);
          } else {
            if (__classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f")) {
              this._emit("toolCallDone", __classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f"));
            }
            __classPrivateFieldSet5(this, _AssistantStream_currentToolCallIndex, toolCall.index, "f");
            __classPrivateFieldSet5(this, _AssistantStream_currentToolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index], "f");
            if (__classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f")) this._emit("toolCallCreated", __classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f"));
          }
        }
      }
      this._emit("runStepDelta", event.data.delta, accumulatedRunStep);
      break;
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
      __classPrivateFieldSet5(this, _AssistantStream_currentRunStepSnapshot, void 0, "f");
      const details = event.data.step_details;
      if (details.type == "tool_calls") {
        if (__classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f")) {
          this._emit("toolCallDone", __classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f"));
          __classPrivateFieldSet5(this, _AssistantStream_currentToolCall, void 0, "f");
        }
      }
      this._emit("runStepDone", event.data, accumulatedRunStep);
      break;
    case "thread.run.step.in_progress":
      break;
  }
}, _AssistantStream_handleEvent = function _AssistantStream_handleEvent2(event) {
  __classPrivateFieldGet6(this, _AssistantStream_events, "f").push(event);
  this._emit("event", event);
}, _AssistantStream_accumulateRunStep = function _AssistantStream_accumulateRunStep2(event) {
  switch (event.event) {
    case "thread.run.step.created":
      __classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      return event.data;
    case "thread.run.step.delta":
      let snapshot = __classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
      if (!snapshot) {
        throw Error("Received a RunStepDelta before creation of a snapshot");
      }
      let data = event.data;
      if (data.delta) {
        const accumulated = AssistantStream.accumulateDelta(snapshot, data.delta);
        __classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = accumulated;
      }
      return __classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
    case "thread.run.step.completed":
    case "thread.run.step.failed":
    case "thread.run.step.cancelled":
    case "thread.run.step.expired":
    case "thread.run.step.in_progress":
      __classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      break;
  }
  if (__classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id]) return __classPrivateFieldGet6(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
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
            snapshot.content[contentElement.index] = __classPrivateFieldGet6(this, _AssistantStream_instances, "m", _AssistantStream_accumulateContent).call(this, contentElement, currentContent);
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
  __classPrivateFieldSet5(this, _AssistantStream_currentRunSnapshot, event.data, "f");
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
      __classPrivateFieldSet5(this, _AssistantStream_finalRun, event.data, "f");
      if (__classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f")) {
        this._emit("toolCallDone", __classPrivateFieldGet6(this, _AssistantStream_currentToolCall, "f"));
        __classPrivateFieldSet5(this, _AssistantStream_currentToolCall, void 0, "f");
      }
      break;
    case "thread.run.cancelling":
      break;
  }
};
function assertNever2(_x) {}

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

// node_modules/openai/resources/files.mjs
var Files = class extends APIResource {
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
Files.FileObjectsPage = FileObjectsPage;

// node_modules/openai/resources/fine-tuning/jobs/checkpoints.mjs
var Checkpoints = class extends APIResource {
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
Checkpoints.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;

// node_modules/openai/resources/fine-tuning/jobs/jobs.mjs
var Jobs = class extends APIResource {
  constructor() {
    super(...arguments);
    this.checkpoints = new Checkpoints(this._client);
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
};
var FineTuningJobsPage = class extends CursorPage {};
var FineTuningJobEventsPage = class extends CursorPage {};
Jobs.FineTuningJobsPage = FineTuningJobsPage;
Jobs.FineTuningJobEventsPage = FineTuningJobEventsPage;
Jobs.Checkpoints = Checkpoints;
Jobs.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;

// node_modules/openai/resources/fine-tuning/fine-tuning.mjs
var FineTuning = class extends APIResource {
  constructor() {
    super(...arguments);
    this.jobs = new Jobs(this._client);
  }
};
FineTuning.Jobs = Jobs;
FineTuning.FineTuningJobsPage = FineTuningJobsPage;
FineTuning.FineTuningJobEventsPage = FineTuningJobEventsPage;

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
    runner._run(() => runner._createResponse(client, params, {
      ...options,
      headers: {
        ...options?.headers,
        "X-Stainless-Helper-Method": "stream"
      }
    }));
    return runner;
  }
  async _createResponse(client, params, options) {
    const signal = options?.signal;
    if (signal) {
      if (signal.aborted) this.controller.abort();
      signal.addEventListener("abort", () => this.controller.abort());
    }
    __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_beginRequest).call(this);
    const stream = await client.responses.create({
      ...params,
      stream: true
    }, {
      ...options,
      signal: this.controller.signal
    });
    this._connected();
    for await (const event of stream) {
      __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_addEvent).call(this, event);
    }
    if (stream.controller.signal?.aborted) {
      throw new APIUserAbortError();
    }
    return __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_endRequest).call(this);
  }
  [(_ResponseStream_params = /* @__PURE__ */new WeakMap(), _ResponseStream_currentResponseSnapshot = /* @__PURE__ */new WeakMap(), _ResponseStream_finalResponse = /* @__PURE__ */new WeakMap(), _ResponseStream_instances = /* @__PURE__ */new WeakSet(), _ResponseStream_beginRequest = function _ResponseStream_beginRequest2() {
    if (this.ended) return;
    __classPrivateFieldSet6(this, _ResponseStream_currentResponseSnapshot, void 0, "f");
  }, _ResponseStream_addEvent = function _ResponseStream_addEvent2(event) {
    if (this.ended) return;
    const response = __classPrivateFieldGet7(this, _ResponseStream_instances, "m", _ResponseStream_accumulateResponse).call(this, event);
    this._emit("event", event);
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
            this._emit("response.output_text.delta", {
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
            this._emit("response.function_call_arguments.delta", {
              ...event,
              snapshot: output.arguments
            });
          }
          break;
        }
      default:
        this._emit(event.type, event);
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
    if (isRequestOptions(query)) {
      return this.retrieve(responseId, {}, query);
    }
    return this._client.get(`/responses/${responseId}`, {
      query,
      ...options
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
var Files2 = class extends APIResource {
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
Files2.VectorStoreFilesPage = VectorStoreFilesPage;
Files2.FileContentResponsesPage = FileContentResponsesPage;

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
    this.files = new Files2(this._client);
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
VectorStores.Files = Files2;
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
    this.files = new Files(this);
    this.images = new Images(this);
    this.audio = new Audio(this);
    this.moderations = new Moderations(this);
    this.models = new Models(this);
    this.fineTuning = new FineTuning(this);
    this.vectorStores = new VectorStores(this);
    this.beta = new Beta(this);
    this.batches = new Batches(this);
    this.uploads = new Uploads(this);
    this.responses = new Responses(this);
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
OpenAI.Files = Files;
OpenAI.FileObjectsPage = FileObjectsPage;
OpenAI.Images = Images;
OpenAI.Audio = Audio;
OpenAI.Moderations = Moderations;
OpenAI.Models = Models;
OpenAI.ModelsPage = ModelsPage;
OpenAI.FineTuning = FineTuning;
OpenAI.VectorStores = VectorStores;
OpenAI.VectorStoresPage = VectorStoresPage;
OpenAI.VectorStoreSearchResponsesPage = VectorStoreSearchResponsesPage;
OpenAI.Beta = Beta;
OpenAI.Batches = Batches;
OpenAI.BatchesPage = BatchesPage;
OpenAI.Uploads = Uploads;
OpenAI.Responses = Responses;
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
var _deployments_endpoints = /* @__PURE__ */new Set(["/completions", "/chat/completions", "/embeddings", "/audio/transcriptions", "/audio/translations", "/audio/speech", "/images/generations"]);
var API_KEY_SENTINEL = "<Missing Key>";
var openai_default = OpenAI;

// .beyond/uimport/temp/openai.4.92.1.js
var openai_4_92_1_default = openai_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL29wZW5haS40LjkyLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbnRlcm5hbC9xcy9mb3JtYXRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvaW50ZXJuYWwvcXMvdXRpbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbnRlcm5hbC9xcy9zdHJpbmdpZnkudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbnRlcm5hbC9xcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9fc2hpbXMvcmVnaXN0cnkudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9fc2hpbXMvTXVsdGlwYXJ0Qm9keS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL19zaGltcy93ZWItcnVudGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvX3NoaW1zL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2Vycm9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvaW50ZXJuYWwvZGVjb2RlcnMvbGluZS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2ludGVybmFsL3N0cmVhbS11dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3N0cmVhbWluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3VwbG9hZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9jb3JlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcGFnaW5hdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2NoYXQvY29tcGxldGlvbnMvbWVzc2FnZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvY2hhdC9jb21wbGV0aW9ucy9jb21wbGV0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9jaGF0L2NoYXQudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYXVkaW8vc3BlZWNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2F1ZGlvL3RyYW5zY3JpcHRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2F1ZGlvL3RyYW5zbGF0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9hdWRpby9hdWRpby50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iYXRjaGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvYXNzaXN0YW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9SdW5uYWJsZUZ1bmN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL2NoYXRDb21wbGV0aW9uVXRpbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvRXZlbnRTdHJlYW0udHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvcGFyc2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvQ2hhdENvbXBsZXRpb25SdW5uZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9fdmVuZG9yL3BhcnRpYWwtanNvbi1wYXJzZXIvcGFyc2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0NoYXRDb21wbGV0aW9uU3RyZWFtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0NoYXRDb21wbGV0aW9uU3RyZWFtaW5nUnVubmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvY2hhdC9jb21wbGV0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL2NoYXQvY2hhdC50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3JlYWx0aW1lL3Nlc3Npb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvcmVhbHRpbWUvdHJhbnNjcmlwdGlvbi1zZXNzaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3JlYWx0aW1lL3JlYWx0aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0Fzc2lzdGFudFN0cmVhbS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3RocmVhZHMvbWVzc2FnZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS90aHJlYWRzL3J1bnMvc3RlcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS90aHJlYWRzL3J1bnMvcnVucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3RocmVhZHMvdGhyZWFkcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL2JldGEudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvY29tcGxldGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZW1iZWRkaW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9maWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9maW5lLXR1bmluZy9qb2JzL2NoZWNrcG9pbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2ZpbmUtdHVuaW5nL2pvYnMvam9icy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9maW5lLXR1bmluZy9maW5lLXR1bmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9pbWFnZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvbW9kZWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL21vZGVyYXRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL1Jlc3BvbnNlc1BhcnNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9yZXNwb25zZXMvaW5wdXQtaXRlbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvcmVzcG9uc2VzL1Jlc3BvbnNlU3RyZWFtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL3Jlc3BvbnNlcy9yZXNwb25zZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvdXBsb2Fkcy9wYXJ0cy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy91cGxvYWRzL3VwbG9hZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvVXRpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy92ZWN0b3Itc3RvcmVzL2ZpbGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL3ZlY3Rvci1zdG9yZXMvZmlsZS1iYXRjaGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL3ZlY3Rvci1zdG9yZXMvdmVjdG9yLXN0b3Jlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIm9wZW5haV80XzkyXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQVBJQ29ubmVjdGlvbkVycm9yIiwiQVBJQ29ubmVjdGlvblRpbWVvdXRFcnJvciIsIkFQSUVycm9yIiwiQVBJVXNlckFib3J0RXJyb3IiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiQXp1cmVPcGVuQUkiLCJCYWRSZXF1ZXN0RXJyb3IiLCJDb25mbGljdEVycm9yIiwiSW50ZXJuYWxTZXJ2ZXJFcnJvciIsIk5vdEZvdW5kRXJyb3IiLCJPcGVuQUkiLCJPcGVuQUlFcnJvciIsIlBlcm1pc3Npb25EZW5pZWRFcnJvciIsIlJhdGVMaW1pdEVycm9yIiwiVW5wcm9jZXNzYWJsZUVudGl0eUVycm9yIiwiZGVmYXVsdCIsIm9wZW5haV80XzkyXzFfZGVmYXVsdCIsImZpbGVGcm9tUGF0aCIsInRvRmlsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJkZWZhdWx0X2Zvcm1hdCIsImZvcm1hdHRlcnMiLCJSRkMxNzM4IiwidiIsIlN0cmluZyIsInJlcGxhY2UiLCJSRkMzOTg2IiwiaGFzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJpc19hcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImhleF90YWJsZSIsImFycmF5IiwiaSIsInB1c2giLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcGFjdF9xdWV1ZSIsInF1ZXVlIiwibGVuZ3RoIiwiaXRlbSIsInBvcCIsIm9iaiIsInByb3AiLCJjb21wYWN0ZWQiLCJqIiwiYXJyYXlfdG9fb2JqZWN0Iiwic291cmNlIiwib3B0aW9ucyIsInBsYWluT2JqZWN0cyIsImNyZWF0ZSIsIm1lcmdlIiwidGFyZ2V0IiwiYWxsb3dQcm90b3R5cGVzIiwiY2FsbCIsImNvbmNhdCIsIm1lcmdlVGFyZ2V0IiwiZm9yRWFjaCIsInRhcmdldEl0ZW0iLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwidmFsdWUiLCJhc3NpZ25fc2luZ2xlX3NvdXJjZSIsImRlY29kZSIsInN0cjIiLCJfIiwiY2hhcnNldCIsInN0cldpdGhvdXRQbHVzIiwidW5lc2NhcGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlIiwibGltaXQiLCJlbmNvZGUiLCJfZGVmYXVsdEVuY29kZXIiLCJfa2luZCIsImZvcm1hdCIsInN0cmluZyIsIlN5bWJvbCIsImVzY2FwZSIsIiQwIiwicGFyc2VJbnQiLCJzbGljZSIsIm91dCIsInNlZ21lbnQiLCJhcnIiLCJjIiwiY2hhckNvZGVBdCIsImNoYXJBdCIsImpvaW4iLCJjb21wYWN0IiwibyIsInJlZnMiLCJ2YWwiLCJpbmRleE9mIiwiaXNfcmVnZXhwIiwiaXNfYnVmZmVyIiwiY29uc3RydWN0b3IiLCJpc0J1ZmZlciIsImNvbWJpbmUiLCJhIiwiYiIsIm1heWJlX21hcCIsImZuIiwibWFwcGVkIiwiaGFzMiIsImFycmF5X3ByZWZpeF9nZW5lcmF0b3JzIiwiYnJhY2tldHMiLCJwcmVmaXgiLCJjb21tYSIsImluZGljZXMiLCJyZXBlYXQiLCJpc19hcnJheTIiLCJwdXNoX3RvX2FycmF5IiwidmFsdWVfb3JfYXJyYXkiLCJhcHBseSIsInRvX0lTTyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRlZmF1bHRzIiwiYWRkUXVlcnlQcmVmaXgiLCJhbGxvd0RvdHMiLCJhbGxvd0VtcHR5QXJyYXlzIiwiYXJyYXlGb3JtYXQiLCJjaGFyc2V0U2VudGluZWwiLCJkZWxpbWl0ZXIiLCJlbmNvZGVEb3RJbktleXMiLCJlbmNvZGVyIiwiZW5jb2RlVmFsdWVzT25seSIsImZvcm1hdHRlciIsInNlcmlhbGl6ZURhdGUiLCJkYXRlIiwic2tpcE51bGxzIiwic3RyaWN0TnVsbEhhbmRsaW5nIiwiaXNfbm9uX251bGxpc2hfcHJpbWl0aXZlIiwic2VudGluZWwiLCJpbm5lcl9zdHJpbmdpZnkiLCJvYmplY3QiLCJnZW5lcmF0ZUFycmF5UHJlZml4IiwiY29tbWFSb3VuZFRyaXAiLCJmaWx0ZXIiLCJzb3J0Iiwic2lkZUNoYW5uZWwiLCJ0bXBfc2MiLCJzdGVwIiwiZmluZF9mbGFnIiwiZ2V0IiwicG9zIiwiUmFuZ2VFcnJvciIsImtleV92YWx1ZSIsInZhbHVlcyIsIm9ial9rZXlzIiwiZW5jb2RlZF9wcmVmaXgiLCJhZGp1c3RlZF9wcmVmaXgiLCJlbmNvZGVkX2tleSIsImtleV9wcmVmaXgiLCJzZXQiLCJ2YWx1ZVNpZGVDaGFubmVsIiwiV2Vha01hcCIsIm5vcm1hbGl6ZV9zdHJpbmdpZnlfb3B0aW9ucyIsIm9wdHMiLCJUeXBlRXJyb3IiLCJzdHJpbmdpZnkiLCJqb2luZWQiLCJmb3JtYXRzIiwiVkVSU0lPTiIsImF1dG8iLCJraW5kIiwiZmV0Y2gyIiwiUmVxdWVzdDIiLCJSZXNwb25zZTIiLCJIZWFkZXJzMiIsIkZvcm1EYXRhMiIsIkJsb2IyIiwiRmlsZTIiLCJSZWFkYWJsZVN0cmVhbTIiLCJnZXRNdWx0aXBhcnRSZXF1ZXN0T3B0aW9ucyIsImdldERlZmF1bHRBZ2VudCIsImlzRnNSZWFkU3RyZWFtIiwic2V0U2hpbXMiLCJzaGltcyIsIkVycm9yIiwiZmV0Y2giLCJSZXF1ZXN0IiwiUmVzcG9uc2UiLCJIZWFkZXJzIiwiRm9ybURhdGEiLCJCbG9iIiwiRmlsZSIsIlJlYWRhYmxlU3RyZWFtIiwiTXVsdGlwYXJ0Qm9keSIsImJvZHkiLCJ0b1N0cmluZ1RhZyIsImdldFJ1bnRpbWUiLCJtYW51YWxseUltcG9ydGVkIiwicmVjb21tZW5kYXRpb24iLCJfZmV0Y2giLCJfUmVxdWVzdCIsIl9SZXNwb25zZSIsIl9IZWFkZXJzIiwiZXJyb3IiLCJtZXNzYWdlIiwiZm9ybSIsInVybCIsImluaXQiLCJzdGF0dXMiLCJoZWFkZXJzIiwibWFrZU1lc3NhZ2UiLCJyZXF1ZXN0X2lkIiwiZGF0YSIsImNvZGUiLCJwYXJhbSIsInR5cGUiLCJtc2ciLCJKU09OIiwiZ2VuZXJhdGUiLCJlcnJvclJlc3BvbnNlIiwiY2F1c2UiLCJjYXN0VG9FcnJvciIsIkxlbmd0aEZpbmlzaFJlYXNvbkVycm9yIiwiQ29udGVudEZpbHRlckZpbmlzaFJlYXNvbkVycm9yIiwiTGluZURlY29kZXIiLCJfTGluZURlY29kZXJfY2FycmlhZ2VSZXR1cm5JbmRleCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiY2h1bmsiLCJiaW5hcnlDaHVuayIsIkFycmF5QnVmZmVyIiwiVGV4dEVuY29kZXIiLCJuZXdEYXRhIiwibGluZXMiLCJwYXR0ZXJuSW5kZXgiLCJmaW5kTmV3bGluZUluZGV4IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsImNhcnJpYWdlIiwiaW5kZXgiLCJkZWNvZGVUZXh0IiwiZW5kSW5kZXgiLCJwcmVjZWRpbmciLCJsaW5lIiwiYnl0ZXMiLCJCdWZmZXIiLCJmcm9tIiwibmFtZSIsIlRleHREZWNvZGVyIiwidGV4dERlY29kZXIiLCJmbHVzaCIsIk5FV0xJTkVfQ0hBUlMiLCJTZXQiLCJORVdMSU5FX1JFR0VYUCIsInN0YXJ0SW5kZXgiLCJuZXdsaW5lIiwiZmluZERvdWJsZU5ld2xpbmVJbmRleCIsIlJlYWRhYmxlU3RyZWFtVG9Bc3luY0l0ZXJhYmxlIiwic3RyZWFtIiwiYXN5bmNJdGVyYXRvciIsInJlYWRlciIsImdldFJlYWRlciIsIm5leHQiLCJyZXN1bHQiLCJyZWFkIiwiZG9uZSIsInJlbGVhc2VMb2NrIiwicmV0dXJuIiwiY2FuY2VsUHJvbWlzZSIsImNhbmNlbCIsIlN0cmVhbSIsIml0ZXJhdG9yIiwiY29udHJvbGxlciIsImZyb21TU0VSZXNwb25zZSIsInJlc3BvbnNlIiwiY29uc3VtZWQiLCJzc2UiLCJfaXRlclNTRU1lc3NhZ2VzIiwic3RhcnRzV2l0aCIsImV2ZW50IiwicGFyc2UiLCJjb25zb2xlIiwicmF3IiwiY3JlYXRlUmVzcG9uc2VIZWFkZXJzIiwiYWJvcnQiLCJmcm9tUmVhZGFibGVTdHJlYW0iLCJyZWFkYWJsZVN0cmVhbSIsIml0ZXJMaW5lcyIsImxpbmVEZWNvZGVyIiwiaXRlciIsInRlZSIsImxlZnQiLCJyaWdodCIsInRlZUl0ZXJhdG9yIiwic2hpZnQiLCJ0b1JlYWRhYmxlU3RyZWFtIiwic2VsZiIsInN0YXJ0IiwicHVsbCIsImN0cmwiLCJjbG9zZSIsImVucXVldWUiLCJlcnIiLCJzc2VEZWNvZGVyIiwiU1NFRGVjb2RlciIsInNzZUNodW5rIiwiaXRlclNTRUNodW5rcyIsImNodW5rcyIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwiZmllbGRuYW1lIiwicGFydGl0aW9uIiwiaXNSZXNwb25zZUxpa2UiLCJibG9iIiwiaXNGaWxlTGlrZSIsImxhc3RNb2RpZmllZCIsImlzQmxvYkxpa2UiLCJzaXplIiwidGV4dCIsImFycmF5QnVmZmVyIiwiaXNVcGxvYWRhYmxlIiwiVVJMIiwicGF0aG5hbWUiLCJzcGxpdCIsImJpdHMiLCJnZXRCeXRlcyIsImdldE5hbWUiLCJwYXJ0cyIsImlzVmlldyIsImlzQXN5bmNJdGVyYWJsZUl0ZXJhdG9yIiwicHJvcHNGb3JFcnJvciIsInByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIm1hcCIsInAiLCJnZXRTdHJpbmdGcm9tTWF5YmVCdWZmZXIiLCJmaWxlbmFtZSIsInBhdGgiLCJ4IiwiaXNNdWx0aXBhcnRCb2R5IiwibWF5YmVNdWx0aXBhcnRGb3JtUmVxdWVzdE9wdGlvbnMiLCJoYXNVcGxvYWRhYmxlVmFsdWUiLCJjcmVhdGVGb3JtIiwibXVsdGlwYXJ0Rm9ybVJlcXVlc3RPcHRpb25zIiwiUHJvbWlzZSIsImFsbCIsImVudHJpZXMiLCJhZGRGb3JtVmFsdWUiLCJzb21lIiwiayIsImFwcGVuZCIsImZpbGUiLCJlbnRyeSIsImRlZmF1bHRQYXJzZVJlc3BvbnNlIiwiZGVidWciLCJfX3N0cmVhbUNsYXNzIiwiX19iaW5hcnlSZXNwb25zZSIsImNvbnRlbnRUeXBlIiwibWVkaWFUeXBlIiwidHJpbSIsImlzSlNPTiIsImluY2x1ZGVzIiwianNvbiIsIl9hZGRSZXF1ZXN0SUQiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJBUElQcm9taXNlIiwicmVzcG9uc2VQcm9taXNlIiwicGFyc2VSZXNwb25zZTIiLCJyZXNvbHZlIiwicGFyc2VSZXNwb25zZSIsIl90aGVuVW53cmFwIiwidHJhbnNmb3JtIiwiYXNSZXNwb25zZSIsInRoZW4iLCJ3aXRoUmVzcG9uc2UiLCJwYXJzZWRQcm9taXNlIiwib25mdWxmaWxsZWQiLCJvbnJlamVjdGVkIiwiY2F0Y2giLCJmaW5hbGx5Iiwib25maW5hbGx5IiwiQVBJQ2xpZW50IiwiYmFzZVVSTCIsIm1heFJldHJpZXMiLCJ0aW1lb3V0IiwiaHR0cEFnZW50Iiwib3ZlcnJpZGRlbkZldGNoIiwidmFsaWRhdGVQb3NpdGl2ZUludGVnZXIiLCJhdXRoSGVhZGVycyIsImRlZmF1bHRIZWFkZXJzIiwiQWNjZXB0IiwiZ2V0VXNlckFnZW50IiwiZ2V0UGxhdGZvcm1IZWFkZXJzIiwidmFsaWRhdGVIZWFkZXJzIiwiY3VzdG9tSGVhZGVycyIsImRlZmF1bHRJZGVtcG90ZW5jeUtleSIsInV1aWQ0IiwibWV0aG9kUmVxdWVzdCIsInBvc3QiLCJwYXRjaCIsInB1dCIsImRlbGV0ZSIsIm1ldGhvZCIsInJlcXVlc3QiLCJvcHRzMiIsIkRhdGFWaWV3IiwiZ2V0QVBJTGlzdCIsIlBhZ2UyIiwicmVxdWVzdEFQSUxpc3QiLCJjYWxjdWxhdGVDb250ZW50TGVuZ3RoIiwiYnl0ZUxlbmd0aCIsImVuY29kZWQiLCJidWlsZFJlcXVlc3QiLCJyZXRyeUNvdW50IiwicXVlcnkiLCJfX2JpbmFyeVJlcXVlc3QiLCJjb250ZW50TGVuZ3RoIiwiYnVpbGRVUkwiLCJtaW5BZ2VudFRpbWVvdXQiLCJpZGVtcG90ZW5jeUhlYWRlciIsImlkZW1wb3RlbmN5S2V5IiwicmVxSGVhZGVycyIsImJ1aWxkSGVhZGVycyIsInJlcSIsImFnZW50Iiwic2lnbmFsIiwiYXBwbHlIZWFkZXJzTXV0IiwiZ2V0SGVhZGVyIiwiTWF0aCIsInRydW5jIiwicHJlcGFyZU9wdGlvbnMiLCJwcmVwYXJlUmVxdWVzdCIsInBhcnNlSGVhZGVycyIsImZyb21FbnRyaWVzIiwiaGVhZGVyIiwibWFrZVN0YXR1c0Vycm9yIiwicmVtYWluaW5nUmV0cmllcyIsIm1ha2VSZXF1ZXN0Iiwib3B0aW9uc0lucHV0IiwicmV0cmllc1JlbWFpbmluZyIsImFib3J0ZWQiLCJBYm9ydENvbnRyb2xsZXIiLCJmZXRjaFdpdGhUaW1lb3V0IiwicmV0cnlSZXF1ZXN0IiwicmVzcG9uc2VIZWFkZXJzIiwib2siLCJzaG91bGRSZXRyeSIsInJldHJ5TWVzc2FnZTIiLCJlcnJUZXh0IiwiZXJySlNPTiIsInNhZmVKU09OIiwiZXJyTWVzc2FnZSIsInJldHJ5TWVzc2FnZSIsIlBhZ2VQcm9taXNlIiwiaXNBYnNvbHV0ZVVSTCIsImRlZmF1bHRRdWVyeSIsImlzRW1wdHlPYmoiLCJzZWFyY2giLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsImluaXQyIiwibXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsImZldGNoT3B0aW9ucyIsImNsZWFyVGltZW91dCIsInNob3VsZFJldHJ5SGVhZGVyIiwidGltZW91dE1pbGxpcyIsInJldHJ5QWZ0ZXJNaWxsaXNIZWFkZXIiLCJ0aW1lb3V0TXMiLCJwYXJzZUZsb2F0IiwiTnVtYmVyIiwiaXNOYU4iLCJyZXRyeUFmdGVySGVhZGVyIiwidGltZW91dFNlY29uZHMiLCJub3ciLCJjYWxjdWxhdGVEZWZhdWx0UmV0cnlUaW1lb3V0TWlsbGlzIiwic2xlZXAiLCJpbml0aWFsUmV0cnlEZWxheSIsIm1heFJldHJ5RGVsYXkiLCJudW1SZXRyaWVzIiwic2xlZXBTZWNvbmRzIiwibWluIiwicG93Iiwiaml0dGVyIiwicmFuZG9tIiwiQWJzdHJhY3RQYWdlIiwiY2xpZW50IiwiX0Fic3RyYWN0UGFnZV9jbGllbnQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0MiIsImhhc05leHRQYWdlIiwiaXRlbXMiLCJnZXRQYWdpbmF0ZWRJdGVtcyIsIm5leHRQYWdlSW5mbyIsImdldE5leHRQYWdlIiwibmV4dEluZm8iLCJuZXh0T3B0aW9ucyIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQyIiwiaXRlclBhZ2VzIiwicGFnZSIsIlByb3h5IiwidG9Mb3dlckNhc2UiLCJyZXF1ZXN0T3B0aW9uc0tleXMiLCJfX21ldGFkYXRhIiwiaXNSZXF1ZXN0T3B0aW9ucyIsImV2ZXJ5IiwiaGFzT3duIiwiZ2V0UGxhdGZvcm1Qcm9wZXJ0aWVzIiwiRGVubyIsImJ1aWxkIiwibm9ybWFsaXplUGxhdGZvcm0iLCJvcyIsIm5vcm1hbGl6ZUFyY2giLCJhcmNoIiwidmVyc2lvbiIsImRlbm8iLCJFZGdlUnVudGltZSIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsImJyb3dzZXJJbmZvIiwiZ2V0QnJvd3NlckluZm8iLCJicm93c2VyIiwibmF2aWdhdG9yIiwiYnJvd3NlclBhdHRlcm5zIiwicGF0dGVybiIsIm1hdGNoIiwiZXhlYyIsInVzZXJBZ2VudCIsIm1ham9yIiwibWlub3IiLCJfcGxhdGZvcm1IZWFkZXJzIiwic3RhcnRzV2l0aFNjaGVtZVJlZ2V4cCIsInRlc3QiLCJuIiwiaXNJbnRlZ2VyIiwiZW5zdXJlUHJlc2VudCIsInJlYWRFbnYiLCJlbnYiLCJjb2VyY2VJbnRlZ2VyIiwicm91bmQiLCJjb2VyY2VGbG9hdCIsImNvZXJjZUJvb2xlYW4iLCJCb29sZWFuIiwibWF5YmVDb2VyY2VJbnRlZ2VyIiwibWF5YmVDb2VyY2VGbG9hdCIsIm1heWJlQ29lcmNlQm9vbGVhbiIsIl9rIiwidGFyZ2V0SGVhZGVycyIsIm5ld0hlYWRlcnMiLCJsb3dlcktleSIsIlNFTlNJVElWRV9IRUFERVJTIiwiYWN0aW9uIiwiYXJncyIsIm1vZGlmaWVkQXJncyIsImFyZyIsIm1vZGlmaWVkQXJnMiIsIm1vZGlmaWVkQXJnIiwibG9nIiwiciIsImlzUnVubmluZ0luQnJvd3NlciIsIndpbmRvdyIsImRvY3VtZW50IiwiaXNIZWFkZXJzUHJvdG9jb2wiLCJnZXRSZXF1aXJlZEhlYWRlciIsImZvdW5kSGVhZGVyIiwibG93ZXJDYXNlZEhlYWRlciIsImludGVyY2Fwc0hlYWRlciIsIl9tIiwiZzEiLCJnMiIsIndhcm4iLCJ0b0Jhc2U2NCIsImJ0b2EiLCJ0b0Zsb2F0MzJBcnJheSIsImJhc2U2NFN0ciIsImJ1ZiIsIkZsb2F0MzJBcnJheSIsImJ5dGVPZmZzZXQiLCJCWVRFU19QRVJfRUxFTUVOVCIsImJpbmFyeVN0ciIsImF0b2IiLCJsZW4iLCJpc09iaiIsIlBhZ2UiLCJuZXh0UGFnZVBhcmFtcyIsIkN1cnNvclBhZ2UiLCJoYXNfbW9yZSIsImluZm8iLCJpZCIsImFmdGVyIiwiQVBJUmVzb3VyY2UiLCJfY2xpZW50IiwiTWVzc2FnZXMiLCJsaXN0IiwiY29tcGxldGlvbklkIiwiQ2hhdENvbXBsZXRpb25TdG9yZU1lc3NhZ2VzUGFnZSIsIkNvbXBsZXRpb25zIiwibWVzc2FnZXMiLCJyZXRyaWV2ZSIsInVwZGF0ZSIsIkNoYXRDb21wbGV0aW9uc1BhZ2UiLCJkZWwiLCJDaGF0IiwiY29tcGxldGlvbnMiLCJTcGVlY2giLCJUcmFuc2NyaXB0aW9ucyIsIm1vZGVsIiwiVHJhbnNsYXRpb25zIiwiQXVkaW8iLCJ0cmFuc2NyaXB0aW9ucyIsInRyYW5zbGF0aW9ucyIsInNwZWVjaCIsIkJhdGNoZXMiLCJiYXRjaElkIiwiQmF0Y2hlc1BhZ2UiLCJBc3Npc3RhbnRzIiwiYXNzaXN0YW50SWQiLCJBc3Npc3RhbnRzUGFnZSIsImlzUnVubmFibGVGdW5jdGlvbldpdGhQYXJzZSIsIlBhcnNpbmdGdW5jdGlvbiIsImlucHV0IiwiZnVuY3Rpb24iLCJwYXJhbWV0ZXJzIiwiZGVzY3JpcHRpb24iLCJQYXJzaW5nVG9vbEZ1bmN0aW9uIiwiaXNBc3Npc3RhbnRNZXNzYWdlIiwicm9sZSIsImlzRnVuY3Rpb25NZXNzYWdlIiwiaXNUb29sTWVzc2FnZSIsImlzUHJlc2VudCIsIkV2ZW50U3RyZWFtIiwiX0V2ZW50U3RyZWFtX2Nvbm5lY3RlZFByb21pc2UiLCJfRXZlbnRTdHJlYW1fcmVzb2x2ZUNvbm5lY3RlZFByb21pc2UiLCJfRXZlbnRTdHJlYW1fcmVqZWN0Q29ubmVjdGVkUHJvbWlzZSIsIl9FdmVudFN0cmVhbV9lbmRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX3Jlc29sdmVFbmRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX3JlamVjdEVuZFByb21pc2UiLCJfRXZlbnRTdHJlYW1fbGlzdGVuZXJzIiwiX0V2ZW50U3RyZWFtX2VuZGVkIiwiX0V2ZW50U3RyZWFtX2Vycm9yZWQiLCJfRXZlbnRTdHJlYW1fYWJvcnRlZCIsIl9FdmVudFN0cmVhbV9jYXRjaGluZ1Byb21pc2VDcmVhdGVkIiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldDMiLCJyZWplY3QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0MyIsIl9ydW4iLCJleGVjdXRvciIsIl9lbWl0RmluYWwiLCJfZW1pdCIsIl9FdmVudFN0cmVhbV9pbnN0YW5jZXMiLCJfRXZlbnRTdHJlYW1faGFuZGxlRXJyb3IiLCJiaW5kIiwiX2Nvbm5lY3RlZCIsImVuZGVkIiwiZXJyb3JlZCIsIm9uIiwibGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJvZmYiLCJmaW5kSW5kZXgiLCJsIiwic3BsaWNlIiwib25jZSIsImVtaXR0ZWQiLCJvcGVuQUlFcnJvciIsIm1ha2VQYXJzZWFibGVSZXNwb25zZUZvcm1hdCIsInJlc3BvbnNlX2Zvcm1hdCIsInBhcnNlciIsImRlZmluZVByb3BlcnRpZXMiLCIkYnJhbmQiLCIkcGFyc2VSYXciLCJtYWtlUGFyc2VhYmxlVGV4dEZvcm1hdCIsImlzQXV0b1BhcnNhYmxlUmVzcG9uc2VGb3JtYXQiLCJtYWtlUGFyc2VhYmxlVG9vbCIsInRvb2wiLCJjYWxsYmFjayIsIiRjYWxsYmFjayIsImlzQXV0b1BhcnNhYmxlVG9vbCIsIm1heWJlUGFyc2VDaGF0Q29tcGxldGlvbiIsImNvbXBsZXRpb24iLCJoYXNBdXRvUGFyc2VhYmxlSW5wdXQiLCJjaG9pY2VzIiwiY2hvaWNlIiwicGFyc2VkIiwidG9vbF9jYWxscyIsInBhcnNlQ2hhdENvbXBsZXRpb24iLCJmaW5pc2hfcmVhc29uIiwidG9vbENhbGwiLCJwYXJzZVRvb2xDYWxsIiwiY29udGVudCIsInJlZnVzYWwiLCJwYXJzZVJlc3BvbnNlRm9ybWF0IiwiaW5wdXRUb29sIiwidG9vbHMiLCJmaW5kIiwiaW5wdXRUb29sMiIsInBhcnNlZF9hcmd1bWVudHMiLCJhcmd1bWVudHMiLCJzdHJpY3QiLCJzaG91bGRQYXJzZVRvb2xDYWxsIiwidCIsInZhbGlkYXRlSW5wdXRUb29scyIsIkRFRkFVTFRfTUFYX0NIQVRfQ09NUExFVElPTlMiLCJBYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyIiwiX2NoYXRDb21wbGV0aW9ucyIsIl9hZGRDaGF0Q29tcGxldGlvbiIsImNoYXRDb21wbGV0aW9uIiwiX2FkZE1lc3NhZ2UiLCJlbWl0IiwiZnVuY3Rpb25fY2FsbCIsInRvb2xfY2FsbCIsImZpbmFsQ2hhdENvbXBsZXRpb24iLCJmaW5hbENvbnRlbnQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0NCIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2luc3RhbmNlcyIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsQ29udGVudCIsImZpbmFsTWVzc2FnZSIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsTWVzc2FnZSIsImZpbmFsRnVuY3Rpb25DYWxsIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxGdW5jdGlvbkNhbGwiLCJmaW5hbEZ1bmN0aW9uQ2FsbFJlc3VsdCIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsRnVuY3Rpb25DYWxsUmVzdWx0IiwidG90YWxVc2FnZSIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2NhbGN1bGF0ZVRvdGFsVXNhZ2UiLCJhbGxDaGF0Q29tcGxldGlvbnMiLCJ1c2FnZSIsIl9jcmVhdGVDaGF0Q29tcGxldGlvbiIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX3ZhbGlkYXRlUGFyYW1zIiwiY2hhdCIsIl9ydW5DaGF0Q29tcGxldGlvbiIsIl9ydW5GdW5jdGlvbnMiLCJyZXN0UGFyYW1zIiwic2luZ2xlRnVuY3Rpb25Ub0NhbGwiLCJtYXhDaGF0Q29tcGxldGlvbnMiLCJmdW5jdGlvbnNCeU5hbWUiLCJmIiwiZnVuY3Rpb25zIiwiY29udGVudDIiLCJyYXdDb250ZW50IiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfc3RyaW5naWZ5RnVuY3Rpb25DYWxsUmVzdWx0IiwiX3J1blRvb2xzIiwidG9vbF9jaG9pY2UiLCJpbnB1dFRvb2xzIiwidG9vbF9jYWxsX2lkIiwibmFtZTIiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbE1lc3NhZ2UyIiwicmVzdCIsInJldCIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsRnVuY3Rpb25DYWxsMiIsImF0IiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxGdW5jdGlvbkNhbGxSZXN1bHQyIiwieSIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2NhbGN1bGF0ZVRvdGFsVXNhZ2UyIiwidG90YWwiLCJjb21wbGV0aW9uX3Rva2VucyIsInByb21wdF90b2tlbnMiLCJ0b3RhbF90b2tlbnMiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl92YWxpZGF0ZVBhcmFtczIiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9zdHJpbmdpZnlGdW5jdGlvbkNhbGxSZXN1bHQyIiwiQ2hhdENvbXBsZXRpb25SdW5uZXIiLCJydW5GdW5jdGlvbnMiLCJydW5uZXIiLCJydW5Ub29scyIsIlNUUiIsIk5VTSIsIkFSUiIsIk9CSiIsIk5VTEwiLCJCT09MIiwiTkFOIiwiSU5GSU5JVFkiLCJNSU5VU19JTkZJTklUWSIsIklORiIsIlNQRUNJQUwiLCJBVE9NIiwiQ09MTEVDVElPTiIsIkFMTCIsIkFsbG93IiwiUGFydGlhbEpTT04iLCJNYWxmb3JtZWRKU09OIiwicGFyc2VKU09OIiwianNvblN0cmluZyIsImFsbG93UGFydGlhbCIsIl9wYXJzZUpTT04iLCJhbGxvdyIsIm1hcmtQYXJ0aWFsSlNPTiIsInRocm93TWFsZm9ybWVkRXJyb3IiLCJwYXJzZUFueSIsInNraXBCbGFuayIsInBhcnNlU3RyIiwicGFyc2VPYmoiLCJwYXJzZUFyciIsIkluZmluaXR5IiwiTmFOIiwicGFyc2VOdW0iLCJlc2NhcGUyIiwibGFzdEluZGV4T2YiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImUyIiwicGFydGlhbFBhcnNlIiwiQ2hhdENvbXBsZXRpb25TdHJlYW0iLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fcGFyYW1zIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2Nob2ljZUV2ZW50U3RhdGVzIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2N1cnJlbnRDaGF0Q29tcGxldGlvblNuYXBzaG90IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldDQiLCJjdXJyZW50Q2hhdENvbXBsZXRpb25TbmFwc2hvdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQ1IiwiX2Zyb21SZWFkYWJsZVN0cmVhbSIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2luc3RhbmNlcyIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9iZWdpblJlcXVlc3QiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYWRkQ2h1bmsiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW5kUmVxdWVzdCIsImNoYXRJZCIsIldlYWtTZXQiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYmVnaW5SZXF1ZXN0MiIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9nZXRDaG9pY2VFdmVudFN0YXRlIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2dldENob2ljZUV2ZW50U3RhdGUyIiwic3RhdGUiLCJjb250ZW50X2RvbmUiLCJyZWZ1c2FsX2RvbmUiLCJsb2dwcm9ic19jb250ZW50X2RvbmUiLCJsb2dwcm9ic19yZWZ1c2FsX2RvbmUiLCJkb25lX3Rvb2xfY2FsbHMiLCJjdXJyZW50X3Rvb2xfY2FsbF9pbmRleCIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9hZGRDaHVuazIiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYWNjdW11bGF0ZUNoYXRDb21wbGV0aW9uIiwiY2hvaWNlU25hcHNob3QiLCJkZWx0YSIsInNuYXBzaG90IiwibG9ncHJvYnMiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW1pdENvbnRlbnREb25lRXZlbnRzIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2VtaXRUb29sQ2FsbERvbmVFdmVudCIsInRvb2xDYWxsRGVsdGEiLCJ0b29sQ2FsbFNuYXBzaG90IiwiYXJndW1lbnRzX2RlbHRhIiwiYXNzZXJ0TmV2ZXIiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW1pdFRvb2xDYWxsRG9uZUV2ZW50MiIsInRvb2xDYWxsSW5kZXgiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW1pdENvbnRlbnREb25lRXZlbnRzMiIsInJlc3BvbnNlRm9ybWF0IiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2dldEF1dG9QYXJzZWFibGVSZXNwb25zZUZvcm1hdCIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9lbmRSZXF1ZXN0MiIsImZpbmFsaXplQ2hhdENvbXBsZXRpb24iLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZ2V0QXV0b1BhcnNlYWJsZVJlc3BvbnNlRm9ybWF0MiIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9hY2N1bXVsYXRlQ2hhdENvbXBsZXRpb24yIiwiYXNzaWduIiwib3RoZXIiLCJyZWZ1c2FsMiIsInJlc3QzIiwiYXNzZXJ0SXNFbXB0eSIsIl9hMiIsIl9iIiwicmVzdDIiLCJfYyIsImluZGV4MiIsIl9kIiwicHVzaFF1ZXVlIiwicmVhZFF1ZXVlIiwiY2h1bmsyIiwiY3JlYXRlZCIsInN5c3RlbV9maW5nZXJwcmludCIsImNob2ljZVJlc3QiLCJtZXNzYWdlUmVzdCIsImlkMiIsInRvb2xSZXN0IiwiZm5SZXN0Iiwic3RyIiwiX3giLCJDaGF0Q29tcGxldGlvblN0cmVhbWluZ1J1bm5lciIsIkNvbXBsZXRpb25zMiIsIkNoYXQyIiwiQ2hhdDMiLCJTZXNzaW9ucyIsIlRyYW5zY3JpcHRpb25TZXNzaW9ucyIsIlJlYWx0aW1lIiwic2Vzc2lvbnMiLCJ0cmFuc2NyaXB0aW9uU2Vzc2lvbnMiLCJBc3Npc3RhbnRTdHJlYW0iLCJfQXNzaXN0YW50U3RyZWFtX2V2ZW50cyIsIl9Bc3Npc3RhbnRTdHJlYW1fcnVuU3RlcFNuYXBzaG90cyIsIl9Bc3Npc3RhbnRTdHJlYW1fbWVzc2FnZVNuYXBzaG90cyIsIl9Bc3Npc3RhbnRTdHJlYW1fbWVzc2FnZVNuYXBzaG90IiwiX0Fzc2lzdGFudFN0cmVhbV9maW5hbFJ1biIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudENvbnRlbnRJbmRleCIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudENvbnRlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRUb29sQ2FsbEluZGV4IiwiX0Fzc2lzdGFudFN0cmVhbV9jdXJyZW50VG9vbENhbGwiLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRFdmVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudFJ1blNuYXBzaG90IiwiX0Fzc2lzdGFudFN0cmVhbV9jdXJyZW50UnVuU3RlcFNuYXBzaG90IiwiX0Fzc2lzdGFudFN0cmVhbV9pbnN0YW5jZXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0NiIsIl9Bc3Npc3RhbnRTdHJlYW1fYWRkRXZlbnQiLCJfYWRkUnVuIiwiX0Fzc2lzdGFudFN0cmVhbV9lbmRSZXF1ZXN0IiwiY3JlYXRlVG9vbEFzc2lzdGFudFN0cmVhbSIsInRocmVhZElkIiwicnVuSWQiLCJydW5zIiwiX3J1blRvb2xBc3Npc3RhbnRTdHJlYW0iLCJfY3JlYXRlVG9vbEFzc2lzdGFudFN0cmVhbSIsInJ1biIsInN1Ym1pdFRvb2xPdXRwdXRzIiwiY3JlYXRlVGhyZWFkQXNzaXN0YW50U3RyZWFtIiwidGhyZWFkIiwiX3RocmVhZEFzc2lzdGFudFN0cmVhbSIsImNyZWF0ZUFzc2lzdGFudFN0cmVhbSIsIl9ydW5Bc3Npc3RhbnRTdHJlYW0iLCJjdXJyZW50RXZlbnQiLCJjdXJyZW50UnVuIiwiY3VycmVudE1lc3NhZ2VTbmFwc2hvdCIsImN1cnJlbnRSdW5TdGVwU25hcHNob3QiLCJmaW5hbFJ1blN0ZXBzIiwiZmluYWxNZXNzYWdlcyIsImZpbmFsUnVuIiwiX2NyZWF0ZVRocmVhZEFzc2lzdGFudFN0cmVhbSIsImNyZWF0ZUFuZFJ1biIsIl9jcmVhdGVBc3Npc3RhbnRTdHJlYW0iLCJhY2N1bXVsYXRlRGVsdGEiLCJkZWx0YVZhbHVlIiwiYWNjVmFsdWUiLCJkZWx0YUVudHJ5IiwiYWNjRW50cnkiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0NSIsIl9Bc3Npc3RhbnRTdHJlYW1faGFuZGxlRXZlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZVJ1biIsIl9Bc3Npc3RhbnRTdHJlYW1faGFuZGxlUnVuU3RlcCIsIl9Bc3Npc3RhbnRTdHJlYW1faGFuZGxlTWVzc2FnZSIsImFzc2VydE5ldmVyMiIsIl9Bc3Npc3RhbnRTdHJlYW1fZW5kUmVxdWVzdDIiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZU1lc3NhZ2UyIiwiYWNjdW11bGF0ZWRNZXNzYWdlIiwibmV3Q29udGVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZU1lc3NhZ2UiLCJzbmFwc2hvdENvbnRlbnQiLCJ0ZXh0RGVsdGEiLCJpbWFnZV9maWxlIiwiY3VycmVudENvbnRlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZVJ1blN0ZXAyIiwiYWNjdW11bGF0ZWRSdW5TdGVwIiwiX0Fzc2lzdGFudFN0cmVhbV9hY2N1bXVsYXRlUnVuU3RlcCIsInN0ZXBfZGV0YWlscyIsImRldGFpbHMiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZUV2ZW50MiIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZVJ1blN0ZXAyIiwiYWNjdW11bGF0ZWQiLCJfQXNzaXN0YW50U3RyZWFtX2FjY3VtdWxhdGVNZXNzYWdlMiIsImNvbnRlbnRFbGVtZW50IiwiX0Fzc2lzdGFudFN0cmVhbV9hY2N1bXVsYXRlQ29udGVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZUNvbnRlbnQyIiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVSdW4yIiwiTWVzc2FnZXMyIiwibWVzc2FnZUlkIiwiTWVzc2FnZXNQYWdlIiwiU3RlcHMiLCJzdGVwSWQiLCJSdW5TdGVwc1BhZ2UiLCJSdW5zIiwic3RlcHMiLCJpbmNsdWRlIiwiUnVuc1BhZ2UiLCJjcmVhdGVBbmRQb2xsIiwicG9sbCIsImNyZWF0ZUFuZFN0cmVhbSIsImJldGEiLCJ0aHJlYWRzIiwicG9sbEludGVydmFsTXMiLCJzbGVlcEludGVydmFsIiwiaGVhZGVySW50ZXJ2YWwiLCJoZWFkZXJJbnRlcnZhbE1zIiwic3VibWl0VG9vbE91dHB1dHNBbmRQb2xsIiwic3VibWl0VG9vbE91dHB1dHNTdHJlYW0iLCJUaHJlYWRzIiwiY3JlYXRlQW5kUnVuUG9sbCIsInRocmVhZF9pZCIsImNyZWF0ZUFuZFJ1blN0cmVhbSIsIkJldGEiLCJyZWFsdGltZSIsImFzc2lzdGFudHMiLCJDb21wbGV0aW9uczMiLCJFbWJlZGRpbmdzIiwiaGFzVXNlclByb3ZpZGVkRW5jb2RpbmdGb3JtYXQiLCJlbmNvZGluZ19mb3JtYXQiLCJyZXNwb25zZTIiLCJlbWJlZGRpbmdCYXNlNjRPYmoiLCJlbWJlZGRpbmdCYXNlNjRTdHIiLCJlbWJlZGRpbmciLCJGaWxlcyIsImZpbGVJZCIsIkZpbGVPYmplY3RzUGFnZSIsInJldHJpZXZlQ29udGVudCIsIndhaXRGb3JQcm9jZXNzaW5nIiwicG9sbEludGVydmFsIiwibWF4V2FpdCIsIlRFUk1JTkFMX1NUQVRFUyIsIkNoZWNrcG9pbnRzIiwiZmluZVR1bmluZ0pvYklkIiwiRmluZVR1bmluZ0pvYkNoZWNrcG9pbnRzUGFnZSIsIkpvYnMiLCJjaGVja3BvaW50cyIsIkZpbmVUdW5pbmdKb2JzUGFnZSIsImxpc3RFdmVudHMiLCJGaW5lVHVuaW5nSm9iRXZlbnRzUGFnZSIsIkZpbmVUdW5pbmciLCJqb2JzIiwiSW1hZ2VzIiwiY3JlYXRlVmFyaWF0aW9uIiwiZWRpdCIsIk1vZGVscyIsIk1vZGVsc1BhZ2UiLCJNb2RlcmF0aW9ucyIsIm1heWJlUGFyc2VSZXNwb25zZSIsImhhc0F1dG9QYXJzZWFibGVJbnB1dDIiLCJvdXRwdXRfcGFyc2VkIiwib3V0cHV0IiwicGFyc2VUb29sQ2FsbDIiLCJwYXJzZVRleHRGb3JtYXQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhZGRPdXRwdXRUZXh0Iiwib3V0cHV0MiIsInRleHRfZm9ybWF0IiwibWFrZVBhcnNlYWJsZVJlc3BvbnNlVG9vbCIsImlzQXV0b1BhcnNhYmxlVG9vbDIiLCJnZXRJbnB1dFRvb2xCeU5hbWUiLCJpbnB1dF90b29scyIsInNob3VsZFBhcnNlVG9vbENhbGwyIiwidmFsaWRhdGVJbnB1dFRvb2xzMiIsInJzcCIsInRleHRzIiwib3V0cHV0X3RleHQiLCJJbnB1dEl0ZW1zIiwicmVzcG9uc2VJZCIsIlJlc3BvbnNlSXRlbXNQYWdlIiwiUmVzcG9uc2VTdHJlYW0iLCJfUmVzcG9uc2VTdHJlYW1fcGFyYW1zIiwiX1Jlc3BvbnNlU3RyZWFtX2N1cnJlbnRSZXNwb25zZVNuYXBzaG90IiwiX1Jlc3BvbnNlU3RyZWFtX2ZpbmFsUmVzcG9uc2UiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0NiIsImNyZWF0ZVJlc3BvbnNlIiwiX2NyZWF0ZVJlc3BvbnNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDciLCJfUmVzcG9uc2VTdHJlYW1faW5zdGFuY2VzIiwiX1Jlc3BvbnNlU3RyZWFtX2JlZ2luUmVxdWVzdCIsInJlc3BvbnNlcyIsIl9SZXNwb25zZVN0cmVhbV9hZGRFdmVudCIsIl9SZXNwb25zZVN0cmVhbV9lbmRSZXF1ZXN0IiwiX1Jlc3BvbnNlU3RyZWFtX2JlZ2luUmVxdWVzdDIiLCJfUmVzcG9uc2VTdHJlYW1fYWRkRXZlbnQyIiwiX1Jlc3BvbnNlU3RyZWFtX2FjY3VtdWxhdGVSZXNwb25zZSIsIm91dHB1dF9pbmRleCIsImNvbnRlbnRfaW5kZXgiLCJfUmVzcG9uc2VTdHJlYW1fZW5kUmVxdWVzdDIiLCJwYXJzZWRSZXNwb25zZSIsImZpbmFsaXplUmVzcG9uc2UiLCJfUmVzcG9uc2VTdHJlYW1fYWNjdW11bGF0ZVJlc3BvbnNlMiIsInBhcnQiLCJldmVudDIiLCJmaW5hbFJlc3BvbnNlIiwiUmVzcG9uc2VzIiwiaW5wdXRJdGVtcyIsIlBhcnRzIiwidXBsb2FkSWQiLCJVcGxvYWRzIiwiY29tcGxldGUiLCJhbGxTZXR0bGVkV2l0aFRocm93IiwicHJvbWlzZXMiLCJyZXN1bHRzIiwiYWxsU2V0dGxlZCIsInJlamVjdGVkIiwicmVhc29uIiwiRmlsZXMyIiwidmVjdG9yU3RvcmVJZCIsIlZlY3RvclN0b3JlRmlsZXNQYWdlIiwiZmlsZVJlc3BvbnNlIiwidXBsb2FkIiwiZmlsZUluZm8iLCJmaWxlcyIsInB1cnBvc2UiLCJmaWxlX2lkIiwidXBsb2FkQW5kUG9sbCIsIkZpbGVDb250ZW50UmVzcG9uc2VzUGFnZSIsIkZpbGVCYXRjaGVzIiwiYmF0Y2giLCJsaXN0RmlsZXMiLCJmaWxlSWRzIiwiY29uZmlndXJlZENvbmN1cnJlbmN5IiwibWF4Q29uY3VycmVuY3kiLCJjb25jdXJyZW5jeUxpbWl0IiwiZmlsZUl0ZXJhdG9yIiwiYWxsRmlsZUlkcyIsInByb2Nlc3NGaWxlcyIsImZpbGVPYmoiLCJ3b3JrZXJzIiwiZmlsbCIsImZpbGVfaWRzIiwiVmVjdG9yU3RvcmVzIiwiZmlsZUJhdGNoZXMiLCJWZWN0b3JTdG9yZXNQYWdlIiwiVmVjdG9yU3RvcmVTZWFyY2hSZXNwb25zZXNQYWdlIiwiYXBpS2V5Iiwib3JnYW5pemF0aW9uIiwicHJvamVjdCIsImRhbmdlcm91c2x5QWxsb3dCcm93c2VyIiwiZW1iZWRkaW5ncyIsImltYWdlcyIsImF1ZGlvIiwibW9kZXJhdGlvbnMiLCJtb2RlbHMiLCJmaW5lVHVuaW5nIiwidmVjdG9yU3RvcmVzIiwiYmF0Y2hlcyIsInVwbG9hZHMiLCJfb3B0aW9ucyIsIkF1dGhvcml6YXRpb24iLCJfYSIsIkRFRkFVTFRfVElNRU9VVCIsImFwaVZlcnNpb24iLCJlbmRwb2ludCIsImRlcGxveW1lbnQiLCJhenVyZUFEVG9rZW5Qcm92aWRlciIsIkFQSV9LRVlfU0VOVElORUwiLCJfYXp1cmVBRFRva2VuUHJvdmlkZXIiLCJkZXBsb3ltZW50TmFtZSIsIl9kZXBsb3ltZW50c19lbmRwb2ludHMiLCJfZ2V0QXp1cmVBRFRva2VuIiwidG9rZW4iLCJvcGVuYWlfZGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQkFBQTtFQUFBRSxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyx3QkFB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QUNUO0VBRW1CcnVCLFlBQVlsTyxJQUFBLEVBQThCO0lBQzNELE9BQU87RUFDVDtFQUVtQixNQUFNNFEsZUFBZTVRLElBQUEsRUFBdUM7SUFPN0UsSUFBSUEsSUFBQSxDQUFLOEMsT0FBQSxHQUFVLFlBQVk7TUFDN0IsT0FBTyxNQUFNOE4sY0FBQSxDQUFlNVEsSUFBSTs7SUFFbEMsTUFBTXU4QixLQUFBLEdBQVEsTUFBTSxLQUFLRCxnQkFBQSxDQUFnQjtJQUN6Q3Q4QixJQUFBLENBQUs4QyxPQUFBLEtBQUw5QyxJQUFBLENBQUs4QyxPQUFBLEdBQVk7SUFDakIsSUFBSXk1QixLQUFBLEVBQU87TUFDVHY4QixJQUFBLENBQUs4QyxPQUFBLENBQVEsbUJBQW1CLFVBQVV5NUIsS0FBQTtlQUNqQyxLQUFLMUIsTUFBQSxLQUFXcUIsZ0JBQUEsRUFBa0I7TUFDM0NsOEIsSUFBQSxDQUFLOEMsT0FBQSxDQUFRLGFBQWEsS0FBSyszQixNQUFBO1dBQzFCO01BQ0wsTUFBTSxJQUFXeGtDLFdBQUEsQ0FBWSx1QkFBdUI7O0lBRXRELE9BQU8sTUFBTXVhLGNBQUEsQ0FBZTVRLElBQUk7RUFDbEM7O0FBR0YsSUFBTXE4QixzQkFBQSxHQUF5QixtQkFBSTUyQixHQUFBLENBQUksQ0FDckMsZ0JBQ0EscUJBQ0EsZUFDQSx5QkFDQSx1QkFDQSxpQkFDQSxzQkFDRDtBQUVELElBQU15MkIsZ0JBQUEsR0FBbUI7QUFxQnpCLElBQUFNLGNBQUEsR0FBZXBtQyxNQUFBOzs7QWxFL3RCZixJQUFPTSxxQkFBQSxHQUFROGxDLGNBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==