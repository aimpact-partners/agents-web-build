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

// .beyond/uimport/openai.4.92.1.js
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

// .beyond/uimport/openai.4.92.1.js
var openai_4_92_1_default = openai_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9vcGVuYWkuNC45Mi4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvaW50ZXJuYWwvcXMvZm9ybWF0cy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2ludGVybmFsL3FzL3V0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvaW50ZXJuYWwvcXMvc3RyaW5naWZ5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvaW50ZXJuYWwvcXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvX3NoaW1zL3JlZ2lzdHJ5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvX3NoaW1zL011bHRpcGFydEJvZHkudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9fc2hpbXMvd2ViLXJ1bnRpbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL19zaGltcy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2ludGVybmFsL2RlY29kZXJzL2xpbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbnRlcm5hbC9zdHJlYW0tdXRpbHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9zdHJlYW1pbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy91cGxvYWRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvY29yZS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3BhZ2luYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9jaGF0L2NvbXBsZXRpb25zL21lc3NhZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2NoYXQvY29tcGxldGlvbnMvY29tcGxldGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvY2hhdC9jaGF0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2F1ZGlvL3NwZWVjaC50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9hdWRpby90cmFuc2NyaXB0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9hdWRpby90cmFuc2xhdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYXVkaW8vYXVkaW8udHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmF0Y2hlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL2Fzc2lzdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9saWIvUnVubmFibGVGdW5jdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9jaGF0Q29tcGxldGlvblV0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0V2ZW50U3RyZWFtLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL3BhcnNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL0NoYXRDb21wbGV0aW9uUnVubmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvX3ZlbmRvci9wYXJ0aWFsLWpzb24tcGFyc2VyL3BhcnNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9DaGF0Q29tcGxldGlvblN0cmVhbS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9DaGF0Q29tcGxldGlvblN0cmVhbWluZ1J1bm5lci50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL2NoYXQvY29tcGxldGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS9jaGF0L2NoYXQudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS9yZWFsdGltZS9zZXNzaW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9iZXRhL3JlYWx0aW1lL3RyYW5zY3JpcHRpb24tc2Vzc2lvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS9yZWFsdGltZS9yZWFsdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9Bc3Npc3RhbnRTdHJlYW0udHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS90aHJlYWRzL21lc3NhZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvdGhyZWFkcy9ydW5zL3N0ZXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2JldGEvdGhyZWFkcy9ydW5zL3J1bnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS90aHJlYWRzL3RocmVhZHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvYmV0YS9iZXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2NvbXBsZXRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL2VtYmVkZGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZmlsZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZmluZS10dW5pbmcvam9icy9jaGVja3BvaW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9maW5lLXR1bmluZy9qb2JzL2pvYnMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvZmluZS10dW5pbmcvZmluZS10dW5pbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvaW1hZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL21vZGVscy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9tb2RlcmF0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL2xpYi9SZXNwb25zZXNQYXJzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvcmVzcG9uc2VzL2lucHV0LWl0ZW1zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL3Jlc3BvbnNlcy9SZXNwb25zZVN0cmVhbS50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy9yZXNwb25zZXMvcmVzcG9uc2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvcmVzb3VyY2VzL3VwbG9hZHMvcGFydHMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvdXBsb2Fkcy91cGxvYWRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29wZW5haS9zcmMvbGliL1V0aWwudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9yZXNvdXJjZXMvdmVjdG9yLXN0b3Jlcy9maWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy92ZWN0b3Itc3RvcmVzL2ZpbGUtYmF0Y2hlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9vcGVuYWkvc3JjL3Jlc291cmNlcy92ZWN0b3Itc3RvcmVzL3ZlY3Rvci1zdG9yZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvb3BlbmFpL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJvcGVuYWlfNF85Ml8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFQSUNvbm5lY3Rpb25FcnJvciIsIkFQSUNvbm5lY3Rpb25UaW1lb3V0RXJyb3IiLCJBUElFcnJvciIsIkFQSVVzZXJBYm9ydEVycm9yIiwiQXV0aGVudGljYXRpb25FcnJvciIsIkF6dXJlT3BlbkFJIiwiQmFkUmVxdWVzdEVycm9yIiwiQ29uZmxpY3RFcnJvciIsIkludGVybmFsU2VydmVyRXJyb3IiLCJOb3RGb3VuZEVycm9yIiwiT3BlbkFJIiwiT3BlbkFJRXJyb3IiLCJQZXJtaXNzaW9uRGVuaWVkRXJyb3IiLCJSYXRlTGltaXRFcnJvciIsIlVucHJvY2Vzc2FibGVFbnRpdHlFcnJvciIsImRlZmF1bHQiLCJvcGVuYWlfNF85Ml8xX2RlZmF1bHQiLCJmaWxlRnJvbVBhdGgiLCJ0b0ZpbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZGVmYXVsdF9mb3JtYXQiLCJmb3JtYXR0ZXJzIiwiUkZDMTczOCIsInYiLCJTdHJpbmciLCJyZXBsYWNlIiwiUkZDMzk4NiIsImhhcyIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiaXNfYXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJoZXhfdGFibGUiLCJhcnJheSIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImNvbXBhY3RfcXVldWUiLCJxdWV1ZSIsImxlbmd0aCIsIml0ZW0iLCJwb3AiLCJvYmoiLCJwcm9wIiwiY29tcGFjdGVkIiwiaiIsImFycmF5X3RvX29iamVjdCIsInNvdXJjZSIsIm9wdGlvbnMiLCJwbGFpbk9iamVjdHMiLCJjcmVhdGUiLCJtZXJnZSIsInRhcmdldCIsImFsbG93UHJvdG90eXBlcyIsImNhbGwiLCJjb25jYXQiLCJtZXJnZVRhcmdldCIsImZvckVhY2giLCJ0YXJnZXRJdGVtIiwia2V5cyIsInJlZHVjZSIsImFjYyIsImtleSIsInZhbHVlIiwiYXNzaWduX3NpbmdsZV9zb3VyY2UiLCJkZWNvZGUiLCJzdHIyIiwiXyIsImNoYXJzZXQiLCJzdHJXaXRob3V0UGx1cyIsInVuZXNjYXBlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZSIsImxpbWl0IiwiZW5jb2RlIiwiX2RlZmF1bHRFbmNvZGVyIiwiX2tpbmQiLCJmb3JtYXQiLCJzdHJpbmciLCJTeW1ib2wiLCJlc2NhcGUiLCIkMCIsInBhcnNlSW50Iiwic2xpY2UiLCJvdXQiLCJzZWdtZW50IiwiYXJyIiwiYyIsImNoYXJDb2RlQXQiLCJjaGFyQXQiLCJqb2luIiwiY29tcGFjdCIsIm8iLCJyZWZzIiwidmFsIiwiaW5kZXhPZiIsImlzX3JlZ2V4cCIsImlzX2J1ZmZlciIsImNvbnN0cnVjdG9yIiwiaXNCdWZmZXIiLCJjb21iaW5lIiwiYSIsImIiLCJtYXliZV9tYXAiLCJmbiIsIm1hcHBlZCIsImhhczIiLCJhcnJheV9wcmVmaXhfZ2VuZXJhdG9ycyIsImJyYWNrZXRzIiwicHJlZml4IiwiY29tbWEiLCJpbmRpY2VzIiwicmVwZWF0IiwiaXNfYXJyYXkyIiwicHVzaF90b19hcnJheSIsInZhbHVlX29yX2FycmF5IiwiYXBwbHkiLCJ0b19JU08iLCJEYXRlIiwidG9JU09TdHJpbmciLCJkZWZhdWx0cyIsImFkZFF1ZXJ5UHJlZml4IiwiYWxsb3dEb3RzIiwiYWxsb3dFbXB0eUFycmF5cyIsImFycmF5Rm9ybWF0IiwiY2hhcnNldFNlbnRpbmVsIiwiZGVsaW1pdGVyIiwiZW5jb2RlRG90SW5LZXlzIiwiZW5jb2RlciIsImVuY29kZVZhbHVlc09ubHkiLCJmb3JtYXR0ZXIiLCJzZXJpYWxpemVEYXRlIiwiZGF0ZSIsInNraXBOdWxscyIsInN0cmljdE51bGxIYW5kbGluZyIsImlzX25vbl9udWxsaXNoX3ByaW1pdGl2ZSIsInNlbnRpbmVsIiwiaW5uZXJfc3RyaW5naWZ5Iiwib2JqZWN0IiwiZ2VuZXJhdGVBcnJheVByZWZpeCIsImNvbW1hUm91bmRUcmlwIiwiZmlsdGVyIiwic29ydCIsInNpZGVDaGFubmVsIiwidG1wX3NjIiwic3RlcCIsImZpbmRfZmxhZyIsImdldCIsInBvcyIsIlJhbmdlRXJyb3IiLCJrZXlfdmFsdWUiLCJ2YWx1ZXMiLCJvYmpfa2V5cyIsImVuY29kZWRfcHJlZml4IiwiYWRqdXN0ZWRfcHJlZml4IiwiZW5jb2RlZF9rZXkiLCJrZXlfcHJlZml4Iiwic2V0IiwidmFsdWVTaWRlQ2hhbm5lbCIsIldlYWtNYXAiLCJub3JtYWxpemVfc3RyaW5naWZ5X29wdGlvbnMiLCJvcHRzIiwiVHlwZUVycm9yIiwic3RyaW5naWZ5Iiwiam9pbmVkIiwiZm9ybWF0cyIsIlZFUlNJT04iLCJhdXRvIiwia2luZCIsImZldGNoMiIsIlJlcXVlc3QyIiwiUmVzcG9uc2UyIiwiSGVhZGVyczIiLCJGb3JtRGF0YTIiLCJCbG9iMiIsIkZpbGUyIiwiUmVhZGFibGVTdHJlYW0yIiwiZ2V0TXVsdGlwYXJ0UmVxdWVzdE9wdGlvbnMiLCJnZXREZWZhdWx0QWdlbnQiLCJpc0ZzUmVhZFN0cmVhbSIsInNldFNoaW1zIiwic2hpbXMiLCJFcnJvciIsImZldGNoIiwiUmVxdWVzdCIsIlJlc3BvbnNlIiwiSGVhZGVycyIsIkZvcm1EYXRhIiwiQmxvYiIsIkZpbGUiLCJSZWFkYWJsZVN0cmVhbSIsIk11bHRpcGFydEJvZHkiLCJib2R5IiwidG9TdHJpbmdUYWciLCJnZXRSdW50aW1lIiwibWFudWFsbHlJbXBvcnRlZCIsInJlY29tbWVuZGF0aW9uIiwiX2ZldGNoIiwiX1JlcXVlc3QiLCJfUmVzcG9uc2UiLCJfSGVhZGVycyIsImVycm9yIiwibWVzc2FnZSIsImZvcm0iLCJ1cmwiLCJpbml0Iiwic3RhdHVzIiwiaGVhZGVycyIsIm1ha2VNZXNzYWdlIiwicmVxdWVzdF9pZCIsImRhdGEiLCJjb2RlIiwicGFyYW0iLCJ0eXBlIiwibXNnIiwiSlNPTiIsImdlbmVyYXRlIiwiZXJyb3JSZXNwb25zZSIsImNhdXNlIiwiY2FzdFRvRXJyb3IiLCJMZW5ndGhGaW5pc2hSZWFzb25FcnJvciIsIkNvbnRlbnRGaWx0ZXJGaW5pc2hSZWFzb25FcnJvciIsIkxpbmVEZWNvZGVyIiwiX0xpbmVEZWNvZGVyX2NhcnJpYWdlUmV0dXJuSW5kZXgiLCJidWZmZXIiLCJVaW50OEFycmF5IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsImNodW5rIiwiYmluYXJ5Q2h1bmsiLCJBcnJheUJ1ZmZlciIsIlRleHRFbmNvZGVyIiwibmV3RGF0YSIsImxpbmVzIiwicGF0dGVybkluZGV4IiwiZmluZE5ld2xpbmVJbmRleCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJjYXJyaWFnZSIsImluZGV4IiwiZGVjb2RlVGV4dCIsImVuZEluZGV4IiwicHJlY2VkaW5nIiwibGluZSIsImJ5dGVzIiwiQnVmZmVyIiwiZnJvbSIsIm5hbWUiLCJUZXh0RGVjb2RlciIsInRleHREZWNvZGVyIiwiZmx1c2giLCJORVdMSU5FX0NIQVJTIiwiU2V0IiwiTkVXTElORV9SRUdFWFAiLCJzdGFydEluZGV4IiwibmV3bGluZSIsImZpbmREb3VibGVOZXdsaW5lSW5kZXgiLCJSZWFkYWJsZVN0cmVhbVRvQXN5bmNJdGVyYWJsZSIsInN0cmVhbSIsImFzeW5jSXRlcmF0b3IiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJuZXh0IiwicmVzdWx0IiwicmVhZCIsImRvbmUiLCJyZWxlYXNlTG9jayIsInJldHVybiIsImNhbmNlbFByb21pc2UiLCJjYW5jZWwiLCJTdHJlYW0iLCJpdGVyYXRvciIsImNvbnRyb2xsZXIiLCJmcm9tU1NFUmVzcG9uc2UiLCJyZXNwb25zZSIsImNvbnN1bWVkIiwic3NlIiwiX2l0ZXJTU0VNZXNzYWdlcyIsInN0YXJ0c1dpdGgiLCJldmVudCIsInBhcnNlIiwiY29uc29sZSIsInJhdyIsImNyZWF0ZVJlc3BvbnNlSGVhZGVycyIsImFib3J0IiwiZnJvbVJlYWRhYmxlU3RyZWFtIiwicmVhZGFibGVTdHJlYW0iLCJpdGVyTGluZXMiLCJsaW5lRGVjb2RlciIsIml0ZXIiLCJ0ZWUiLCJsZWZ0IiwicmlnaHQiLCJ0ZWVJdGVyYXRvciIsInNoaWZ0IiwidG9SZWFkYWJsZVN0cmVhbSIsInNlbGYiLCJzdGFydCIsInB1bGwiLCJjdHJsIiwiY2xvc2UiLCJlbnF1ZXVlIiwiZXJyIiwic3NlRGVjb2RlciIsIlNTRURlY29kZXIiLCJzc2VDaHVuayIsIml0ZXJTU0VDaHVua3MiLCJjaHVua3MiLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsImZpZWxkbmFtZSIsInBhcnRpdGlvbiIsImlzUmVzcG9uc2VMaWtlIiwiYmxvYiIsImlzRmlsZUxpa2UiLCJsYXN0TW9kaWZpZWQiLCJpc0Jsb2JMaWtlIiwic2l6ZSIsInRleHQiLCJhcnJheUJ1ZmZlciIsImlzVXBsb2FkYWJsZSIsIlVSTCIsInBhdGhuYW1lIiwic3BsaXQiLCJiaXRzIiwiZ2V0Qnl0ZXMiLCJnZXROYW1lIiwicGFydHMiLCJpc1ZpZXciLCJpc0FzeW5jSXRlcmFibGVJdGVyYXRvciIsInByb3BzRm9yRXJyb3IiLCJwcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJtYXAiLCJwIiwiZ2V0U3RyaW5nRnJvbU1heWJlQnVmZmVyIiwiZmlsZW5hbWUiLCJwYXRoIiwieCIsImlzTXVsdGlwYXJ0Qm9keSIsIm1heWJlTXVsdGlwYXJ0Rm9ybVJlcXVlc3RPcHRpb25zIiwiaGFzVXBsb2FkYWJsZVZhbHVlIiwiY3JlYXRlRm9ybSIsIm11bHRpcGFydEZvcm1SZXF1ZXN0T3B0aW9ucyIsIlByb21pc2UiLCJhbGwiLCJlbnRyaWVzIiwiYWRkRm9ybVZhbHVlIiwic29tZSIsImsiLCJhcHBlbmQiLCJmaWxlIiwiZW50cnkiLCJkZWZhdWx0UGFyc2VSZXNwb25zZSIsImRlYnVnIiwiX19zdHJlYW1DbGFzcyIsIl9fYmluYXJ5UmVzcG9uc2UiLCJjb250ZW50VHlwZSIsIm1lZGlhVHlwZSIsInRyaW0iLCJpc0pTT04iLCJpbmNsdWRlcyIsImpzb24iLCJfYWRkUmVxdWVzdElEIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiQVBJUHJvbWlzZSIsInJlc3BvbnNlUHJvbWlzZSIsInBhcnNlUmVzcG9uc2UyIiwicmVzb2x2ZSIsInBhcnNlUmVzcG9uc2UiLCJfdGhlblVud3JhcCIsInRyYW5zZm9ybSIsImFzUmVzcG9uc2UiLCJ0aGVuIiwid2l0aFJlc3BvbnNlIiwicGFyc2VkUHJvbWlzZSIsIm9uZnVsZmlsbGVkIiwib25yZWplY3RlZCIsImNhdGNoIiwiZmluYWxseSIsIm9uZmluYWxseSIsIkFQSUNsaWVudCIsImJhc2VVUkwiLCJtYXhSZXRyaWVzIiwidGltZW91dCIsImh0dHBBZ2VudCIsIm92ZXJyaWRkZW5GZXRjaCIsInZhbGlkYXRlUG9zaXRpdmVJbnRlZ2VyIiwiYXV0aEhlYWRlcnMiLCJkZWZhdWx0SGVhZGVycyIsIkFjY2VwdCIsImdldFVzZXJBZ2VudCIsImdldFBsYXRmb3JtSGVhZGVycyIsInZhbGlkYXRlSGVhZGVycyIsImN1c3RvbUhlYWRlcnMiLCJkZWZhdWx0SWRlbXBvdGVuY3lLZXkiLCJ1dWlkNCIsIm1ldGhvZFJlcXVlc3QiLCJwb3N0IiwicGF0Y2giLCJwdXQiLCJkZWxldGUiLCJtZXRob2QiLCJyZXF1ZXN0Iiwib3B0czIiLCJEYXRhVmlldyIsImdldEFQSUxpc3QiLCJQYWdlMiIsInJlcXVlc3RBUElMaXN0IiwiY2FsY3VsYXRlQ29udGVudExlbmd0aCIsImJ5dGVMZW5ndGgiLCJlbmNvZGVkIiwiYnVpbGRSZXF1ZXN0IiwicmV0cnlDb3VudCIsInF1ZXJ5IiwiX19iaW5hcnlSZXF1ZXN0IiwiY29udGVudExlbmd0aCIsImJ1aWxkVVJMIiwibWluQWdlbnRUaW1lb3V0IiwiaWRlbXBvdGVuY3lIZWFkZXIiLCJpZGVtcG90ZW5jeUtleSIsInJlcUhlYWRlcnMiLCJidWlsZEhlYWRlcnMiLCJyZXEiLCJhZ2VudCIsInNpZ25hbCIsImFwcGx5SGVhZGVyc011dCIsImdldEhlYWRlciIsIk1hdGgiLCJ0cnVuYyIsInByZXBhcmVPcHRpb25zIiwicHJlcGFyZVJlcXVlc3QiLCJwYXJzZUhlYWRlcnMiLCJmcm9tRW50cmllcyIsImhlYWRlciIsIm1ha2VTdGF0dXNFcnJvciIsInJlbWFpbmluZ1JldHJpZXMiLCJtYWtlUmVxdWVzdCIsIm9wdGlvbnNJbnB1dCIsInJldHJpZXNSZW1haW5pbmciLCJhYm9ydGVkIiwiQWJvcnRDb250cm9sbGVyIiwiZmV0Y2hXaXRoVGltZW91dCIsInJldHJ5UmVxdWVzdCIsInJlc3BvbnNlSGVhZGVycyIsIm9rIiwic2hvdWxkUmV0cnkiLCJyZXRyeU1lc3NhZ2UyIiwiZXJyVGV4dCIsImVyckpTT04iLCJzYWZlSlNPTiIsImVyck1lc3NhZ2UiLCJyZXRyeU1lc3NhZ2UiLCJQYWdlUHJvbWlzZSIsImlzQWJzb2x1dGVVUkwiLCJkZWZhdWx0UXVlcnkiLCJpc0VtcHR5T2JqIiwic2VhcmNoIiwic3RyaW5naWZ5UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpbml0MiIsIm1zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJmZXRjaE9wdGlvbnMiLCJjbGVhclRpbWVvdXQiLCJzaG91bGRSZXRyeUhlYWRlciIsInRpbWVvdXRNaWxsaXMiLCJyZXRyeUFmdGVyTWlsbGlzSGVhZGVyIiwidGltZW91dE1zIiwicGFyc2VGbG9hdCIsIk51bWJlciIsImlzTmFOIiwicmV0cnlBZnRlckhlYWRlciIsInRpbWVvdXRTZWNvbmRzIiwibm93IiwiY2FsY3VsYXRlRGVmYXVsdFJldHJ5VGltZW91dE1pbGxpcyIsInNsZWVwIiwiaW5pdGlhbFJldHJ5RGVsYXkiLCJtYXhSZXRyeURlbGF5IiwibnVtUmV0cmllcyIsInNsZWVwU2Vjb25kcyIsIm1pbiIsInBvdyIsImppdHRlciIsInJhbmRvbSIsIkFic3RyYWN0UGFnZSIsImNsaWVudCIsIl9BYnN0cmFjdFBhZ2VfY2xpZW50IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldDIiLCJoYXNOZXh0UGFnZSIsIml0ZW1zIiwiZ2V0UGFnaW5hdGVkSXRlbXMiLCJuZXh0UGFnZUluZm8iLCJnZXROZXh0UGFnZSIsIm5leHRJbmZvIiwibmV4dE9wdGlvbnMiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0MiIsIml0ZXJQYWdlcyIsInBhZ2UiLCJQcm94eSIsInRvTG93ZXJDYXNlIiwicmVxdWVzdE9wdGlvbnNLZXlzIiwiX19tZXRhZGF0YSIsImlzUmVxdWVzdE9wdGlvbnMiLCJldmVyeSIsImhhc093biIsImdldFBsYXRmb3JtUHJvcGVydGllcyIsIkRlbm8iLCJidWlsZCIsIm5vcm1hbGl6ZVBsYXRmb3JtIiwib3MiLCJub3JtYWxpemVBcmNoIiwiYXJjaCIsInZlcnNpb24iLCJkZW5vIiwiRWRnZVJ1bnRpbWUiLCJwcm9jZXNzIiwicGxhdGZvcm0iLCJicm93c2VySW5mbyIsImdldEJyb3dzZXJJbmZvIiwiYnJvd3NlciIsIm5hdmlnYXRvciIsImJyb3dzZXJQYXR0ZXJucyIsInBhdHRlcm4iLCJtYXRjaCIsImV4ZWMiLCJ1c2VyQWdlbnQiLCJtYWpvciIsIm1pbm9yIiwiX3BsYXRmb3JtSGVhZGVycyIsInN0YXJ0c1dpdGhTY2hlbWVSZWdleHAiLCJ0ZXN0IiwibiIsImlzSW50ZWdlciIsImVuc3VyZVByZXNlbnQiLCJyZWFkRW52IiwiZW52IiwiY29lcmNlSW50ZWdlciIsInJvdW5kIiwiY29lcmNlRmxvYXQiLCJjb2VyY2VCb29sZWFuIiwiQm9vbGVhbiIsIm1heWJlQ29lcmNlSW50ZWdlciIsIm1heWJlQ29lcmNlRmxvYXQiLCJtYXliZUNvZXJjZUJvb2xlYW4iLCJfayIsInRhcmdldEhlYWRlcnMiLCJuZXdIZWFkZXJzIiwibG93ZXJLZXkiLCJTRU5TSVRJVkVfSEVBREVSUyIsImFjdGlvbiIsImFyZ3MiLCJtb2RpZmllZEFyZ3MiLCJhcmciLCJtb2RpZmllZEFyZzIiLCJtb2RpZmllZEFyZyIsImxvZyIsInIiLCJpc1J1bm5pbmdJbkJyb3dzZXIiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImlzSGVhZGVyc1Byb3RvY29sIiwiZ2V0UmVxdWlyZWRIZWFkZXIiLCJmb3VuZEhlYWRlciIsImxvd2VyQ2FzZWRIZWFkZXIiLCJpbnRlcmNhcHNIZWFkZXIiLCJfbSIsImcxIiwiZzIiLCJ3YXJuIiwidG9CYXNlNjQiLCJidG9hIiwidG9GbG9hdDMyQXJyYXkiLCJiYXNlNjRTdHIiLCJidWYiLCJGbG9hdDMyQXJyYXkiLCJieXRlT2Zmc2V0IiwiQllURVNfUEVSX0VMRU1FTlQiLCJiaW5hcnlTdHIiLCJhdG9iIiwibGVuIiwiaXNPYmoiLCJQYWdlIiwibmV4dFBhZ2VQYXJhbXMiLCJDdXJzb3JQYWdlIiwiaGFzX21vcmUiLCJpbmZvIiwiaWQiLCJhZnRlciIsIkFQSVJlc291cmNlIiwiX2NsaWVudCIsIk1lc3NhZ2VzIiwibGlzdCIsImNvbXBsZXRpb25JZCIsIkNoYXRDb21wbGV0aW9uU3RvcmVNZXNzYWdlc1BhZ2UiLCJDb21wbGV0aW9ucyIsIm1lc3NhZ2VzIiwicmV0cmlldmUiLCJ1cGRhdGUiLCJDaGF0Q29tcGxldGlvbnNQYWdlIiwiZGVsIiwiQ2hhdCIsImNvbXBsZXRpb25zIiwiU3BlZWNoIiwiVHJhbnNjcmlwdGlvbnMiLCJtb2RlbCIsIlRyYW5zbGF0aW9ucyIsIkF1ZGlvIiwidHJhbnNjcmlwdGlvbnMiLCJ0cmFuc2xhdGlvbnMiLCJzcGVlY2giLCJCYXRjaGVzIiwiYmF0Y2hJZCIsIkJhdGNoZXNQYWdlIiwiQXNzaXN0YW50cyIsImFzc2lzdGFudElkIiwiQXNzaXN0YW50c1BhZ2UiLCJpc1J1bm5hYmxlRnVuY3Rpb25XaXRoUGFyc2UiLCJQYXJzaW5nRnVuY3Rpb24iLCJpbnB1dCIsImZ1bmN0aW9uIiwicGFyYW1ldGVycyIsImRlc2NyaXB0aW9uIiwiUGFyc2luZ1Rvb2xGdW5jdGlvbiIsImlzQXNzaXN0YW50TWVzc2FnZSIsInJvbGUiLCJpc0Z1bmN0aW9uTWVzc2FnZSIsImlzVG9vbE1lc3NhZ2UiLCJpc1ByZXNlbnQiLCJFdmVudFN0cmVhbSIsIl9FdmVudFN0cmVhbV9jb25uZWN0ZWRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX3Jlc29sdmVDb25uZWN0ZWRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX3JlamVjdENvbm5lY3RlZFByb21pc2UiLCJfRXZlbnRTdHJlYW1fZW5kUHJvbWlzZSIsIl9FdmVudFN0cmVhbV9yZXNvbHZlRW5kUHJvbWlzZSIsIl9FdmVudFN0cmVhbV9yZWplY3RFbmRQcm9taXNlIiwiX0V2ZW50U3RyZWFtX2xpc3RlbmVycyIsIl9FdmVudFN0cmVhbV9lbmRlZCIsIl9FdmVudFN0cmVhbV9lcnJvcmVkIiwiX0V2ZW50U3RyZWFtX2Fib3J0ZWQiLCJfRXZlbnRTdHJlYW1fY2F0Y2hpbmdQcm9taXNlQ3JlYXRlZCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQzIiwicmVqZWN0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDMiLCJfcnVuIiwiZXhlY3V0b3IiLCJfZW1pdEZpbmFsIiwiX2VtaXQiLCJfRXZlbnRTdHJlYW1faW5zdGFuY2VzIiwiX0V2ZW50U3RyZWFtX2hhbmRsZUVycm9yIiwiYmluZCIsIl9jb25uZWN0ZWQiLCJlbmRlZCIsImVycm9yZWQiLCJvbiIsImxpc3RlbmVyIiwibGlzdGVuZXJzIiwib2ZmIiwiZmluZEluZGV4IiwibCIsInNwbGljZSIsIm9uY2UiLCJlbWl0dGVkIiwib3BlbkFJRXJyb3IiLCJtYWtlUGFyc2VhYmxlUmVzcG9uc2VGb3JtYXQiLCJyZXNwb25zZV9mb3JtYXQiLCJwYXJzZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiJGJyYW5kIiwiJHBhcnNlUmF3IiwibWFrZVBhcnNlYWJsZVRleHRGb3JtYXQiLCJpc0F1dG9QYXJzYWJsZVJlc3BvbnNlRm9ybWF0IiwibWFrZVBhcnNlYWJsZVRvb2wiLCJ0b29sIiwiY2FsbGJhY2siLCIkY2FsbGJhY2siLCJpc0F1dG9QYXJzYWJsZVRvb2wiLCJtYXliZVBhcnNlQ2hhdENvbXBsZXRpb24iLCJjb21wbGV0aW9uIiwiaGFzQXV0b1BhcnNlYWJsZUlucHV0IiwiY2hvaWNlcyIsImNob2ljZSIsInBhcnNlZCIsInRvb2xfY2FsbHMiLCJwYXJzZUNoYXRDb21wbGV0aW9uIiwiZmluaXNoX3JlYXNvbiIsInRvb2xDYWxsIiwicGFyc2VUb29sQ2FsbCIsImNvbnRlbnQiLCJyZWZ1c2FsIiwicGFyc2VSZXNwb25zZUZvcm1hdCIsImlucHV0VG9vbCIsInRvb2xzIiwiZmluZCIsImlucHV0VG9vbDIiLCJwYXJzZWRfYXJndW1lbnRzIiwiYXJndW1lbnRzIiwic3RyaWN0Iiwic2hvdWxkUGFyc2VUb29sQ2FsbCIsInQiLCJ2YWxpZGF0ZUlucHV0VG9vbHMiLCJERUZBVUxUX01BWF9DSEFUX0NPTVBMRVRJT05TIiwiQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lciIsIl9jaGF0Q29tcGxldGlvbnMiLCJfYWRkQ2hhdENvbXBsZXRpb24iLCJjaGF0Q29tcGxldGlvbiIsIl9hZGRNZXNzYWdlIiwiZW1pdCIsImZ1bmN0aW9uX2NhbGwiLCJ0b29sX2NhbGwiLCJmaW5hbENoYXRDb21wbGV0aW9uIiwiZmluYWxDb250ZW50IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDQiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9pbnN0YW5jZXMiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbENvbnRlbnQiLCJmaW5hbE1lc3NhZ2UiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbE1lc3NhZ2UiLCJmaW5hbEZ1bmN0aW9uQ2FsbCIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsRnVuY3Rpb25DYWxsIiwiZmluYWxGdW5jdGlvbkNhbGxSZXN1bHQiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbEZ1bmN0aW9uQ2FsbFJlc3VsdCIsInRvdGFsVXNhZ2UiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9jYWxjdWxhdGVUb3RhbFVzYWdlIiwiYWxsQ2hhdENvbXBsZXRpb25zIiwidXNhZ2UiLCJfY3JlYXRlQ2hhdENvbXBsZXRpb24iLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl92YWxpZGF0ZVBhcmFtcyIsImNoYXQiLCJfcnVuQ2hhdENvbXBsZXRpb24iLCJfcnVuRnVuY3Rpb25zIiwicmVzdFBhcmFtcyIsInNpbmdsZUZ1bmN0aW9uVG9DYWxsIiwibWF4Q2hhdENvbXBsZXRpb25zIiwiZnVuY3Rpb25zQnlOYW1lIiwiZiIsImZ1bmN0aW9ucyIsImNvbnRlbnQyIiwicmF3Q29udGVudCIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX3N0cmluZ2lmeUZ1bmN0aW9uQ2FsbFJlc3VsdCIsIl9ydW5Ub29scyIsInRvb2xfY2hvaWNlIiwiaW5wdXRUb29scyIsInRvb2xfY2FsbF9pZCIsIm5hbWUyIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfZ2V0RmluYWxNZXNzYWdlMiIsInJlc3QiLCJyZXQiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9nZXRGaW5hbEZ1bmN0aW9uQ2FsbDIiLCJhdCIsIl9BYnN0cmFjdENoYXRDb21wbGV0aW9uUnVubmVyX2dldEZpbmFsRnVuY3Rpb25DYWxsUmVzdWx0MiIsInkiLCJfQWJzdHJhY3RDaGF0Q29tcGxldGlvblJ1bm5lcl9jYWxjdWxhdGVUb3RhbFVzYWdlMiIsInRvdGFsIiwiY29tcGxldGlvbl90b2tlbnMiLCJwcm9tcHRfdG9rZW5zIiwidG90YWxfdG9rZW5zIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfdmFsaWRhdGVQYXJhbXMyIiwiX0Fic3RyYWN0Q2hhdENvbXBsZXRpb25SdW5uZXJfc3RyaW5naWZ5RnVuY3Rpb25DYWxsUmVzdWx0MiIsIkNoYXRDb21wbGV0aW9uUnVubmVyIiwicnVuRnVuY3Rpb25zIiwicnVubmVyIiwicnVuVG9vbHMiLCJTVFIiLCJOVU0iLCJBUlIiLCJPQkoiLCJOVUxMIiwiQk9PTCIsIk5BTiIsIklORklOSVRZIiwiTUlOVVNfSU5GSU5JVFkiLCJJTkYiLCJTUEVDSUFMIiwiQVRPTSIsIkNPTExFQ1RJT04iLCJBTEwiLCJBbGxvdyIsIlBhcnRpYWxKU09OIiwiTWFsZm9ybWVkSlNPTiIsInBhcnNlSlNPTiIsImpzb25TdHJpbmciLCJhbGxvd1BhcnRpYWwiLCJfcGFyc2VKU09OIiwiYWxsb3ciLCJtYXJrUGFydGlhbEpTT04iLCJ0aHJvd01hbGZvcm1lZEVycm9yIiwicGFyc2VBbnkiLCJza2lwQmxhbmsiLCJwYXJzZVN0ciIsInBhcnNlT2JqIiwicGFyc2VBcnIiLCJJbmZpbml0eSIsIk5hTiIsInBhcnNlTnVtIiwiZXNjYXBlMiIsImxhc3RJbmRleE9mIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJlMiIsInBhcnRpYWxQYXJzZSIsIkNoYXRDb21wbGV0aW9uU3RyZWFtIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX3BhcmFtcyIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9jaG9pY2VFdmVudFN0YXRlcyIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9jdXJyZW50Q2hhdENvbXBsZXRpb25TbmFwc2hvdCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQ0IiwiY3VycmVudENoYXRDb21wbGV0aW9uU25hcHNob3QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0NSIsIl9mcm9tUmVhZGFibGVTdHJlYW0iLCJjcmVhdGVDaGF0Q29tcGxldGlvbiIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9pbnN0YW5jZXMiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYmVnaW5SZXF1ZXN0IiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2FkZENodW5rIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2VuZFJlcXVlc3QiLCJjaGF0SWQiLCJXZWFrU2V0IiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2JlZ2luUmVxdWVzdDIiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZ2V0Q2hvaWNlRXZlbnRTdGF0ZSIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9nZXRDaG9pY2VFdmVudFN0YXRlMiIsInN0YXRlIiwiY29udGVudF9kb25lIiwicmVmdXNhbF9kb25lIiwibG9ncHJvYnNfY29udGVudF9kb25lIiwibG9ncHJvYnNfcmVmdXNhbF9kb25lIiwiZG9uZV90b29sX2NhbGxzIiwiY3VycmVudF90b29sX2NhbGxfaW5kZXgiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYWRkQ2h1bmsyIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2FjY3VtdWxhdGVDaGF0Q29tcGxldGlvbiIsImNob2ljZVNuYXBzaG90IiwiZGVsdGEiLCJzbmFwc2hvdCIsImxvZ3Byb2JzIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2VtaXRDb250ZW50RG9uZUV2ZW50cyIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9lbWl0VG9vbENhbGxEb25lRXZlbnQiLCJ0b29sQ2FsbERlbHRhIiwidG9vbENhbGxTbmFwc2hvdCIsImFyZ3VtZW50c19kZWx0YSIsImFzc2VydE5ldmVyIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2VtaXRUb29sQ2FsbERvbmVFdmVudDIiLCJ0b29sQ2FsbEluZGV4IiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2VtaXRDb250ZW50RG9uZUV2ZW50czIiLCJyZXNwb25zZUZvcm1hdCIsIl9DaGF0Q29tcGxldGlvblN0cmVhbV9nZXRBdXRvUGFyc2VhYmxlUmVzcG9uc2VGb3JtYXQiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fZW5kUmVxdWVzdDIiLCJmaW5hbGl6ZUNoYXRDb21wbGV0aW9uIiwiX0NoYXRDb21wbGV0aW9uU3RyZWFtX2dldEF1dG9QYXJzZWFibGVSZXNwb25zZUZvcm1hdDIiLCJfQ2hhdENvbXBsZXRpb25TdHJlYW1fYWNjdW11bGF0ZUNoYXRDb21wbGV0aW9uMiIsImFzc2lnbiIsIm90aGVyIiwicmVmdXNhbDIiLCJyZXN0MyIsImFzc2VydElzRW1wdHkiLCJfYTIiLCJfYiIsInJlc3QyIiwiX2MiLCJpbmRleDIiLCJfZCIsInB1c2hRdWV1ZSIsInJlYWRRdWV1ZSIsImNodW5rMiIsImNyZWF0ZWQiLCJzeXN0ZW1fZmluZ2VycHJpbnQiLCJjaG9pY2VSZXN0IiwibWVzc2FnZVJlc3QiLCJpZDIiLCJ0b29sUmVzdCIsImZuUmVzdCIsInN0ciIsIl94IiwiQ2hhdENvbXBsZXRpb25TdHJlYW1pbmdSdW5uZXIiLCJDb21wbGV0aW9uczIiLCJDaGF0MiIsIkNoYXQzIiwiU2Vzc2lvbnMiLCJUcmFuc2NyaXB0aW9uU2Vzc2lvbnMiLCJSZWFsdGltZSIsInNlc3Npb25zIiwidHJhbnNjcmlwdGlvblNlc3Npb25zIiwiQXNzaXN0YW50U3RyZWFtIiwiX0Fzc2lzdGFudFN0cmVhbV9ldmVudHMiLCJfQXNzaXN0YW50U3RyZWFtX3J1blN0ZXBTbmFwc2hvdHMiLCJfQXNzaXN0YW50U3RyZWFtX21lc3NhZ2VTbmFwc2hvdHMiLCJfQXNzaXN0YW50U3RyZWFtX21lc3NhZ2VTbmFwc2hvdCIsIl9Bc3Npc3RhbnRTdHJlYW1fZmluYWxSdW4iLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRDb250ZW50SW5kZXgiLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRDb250ZW50IiwiX0Fzc2lzdGFudFN0cmVhbV9jdXJyZW50VG9vbENhbGxJbmRleCIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudFRvb2xDYWxsIiwiX0Fzc2lzdGFudFN0cmVhbV9jdXJyZW50RXZlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2N1cnJlbnRSdW5TbmFwc2hvdCIsIl9Bc3Npc3RhbnRTdHJlYW1fY3VycmVudFJ1blN0ZXBTbmFwc2hvdCIsIl9Bc3Npc3RhbnRTdHJlYW1faW5zdGFuY2VzIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldDYiLCJfQXNzaXN0YW50U3RyZWFtX2FkZEV2ZW50IiwiX2FkZFJ1biIsIl9Bc3Npc3RhbnRTdHJlYW1fZW5kUmVxdWVzdCIsImNyZWF0ZVRvb2xBc3Npc3RhbnRTdHJlYW0iLCJ0aHJlYWRJZCIsInJ1bklkIiwicnVucyIsIl9ydW5Ub29sQXNzaXN0YW50U3RyZWFtIiwiX2NyZWF0ZVRvb2xBc3Npc3RhbnRTdHJlYW0iLCJydW4iLCJzdWJtaXRUb29sT3V0cHV0cyIsImNyZWF0ZVRocmVhZEFzc2lzdGFudFN0cmVhbSIsInRocmVhZCIsIl90aHJlYWRBc3Npc3RhbnRTdHJlYW0iLCJjcmVhdGVBc3Npc3RhbnRTdHJlYW0iLCJfcnVuQXNzaXN0YW50U3RyZWFtIiwiY3VycmVudEV2ZW50IiwiY3VycmVudFJ1biIsImN1cnJlbnRNZXNzYWdlU25hcHNob3QiLCJjdXJyZW50UnVuU3RlcFNuYXBzaG90IiwiZmluYWxSdW5TdGVwcyIsImZpbmFsTWVzc2FnZXMiLCJmaW5hbFJ1biIsIl9jcmVhdGVUaHJlYWRBc3Npc3RhbnRTdHJlYW0iLCJjcmVhdGVBbmRSdW4iLCJfY3JlYXRlQXNzaXN0YW50U3RyZWFtIiwiYWNjdW11bGF0ZURlbHRhIiwiZGVsdGFWYWx1ZSIsImFjY1ZhbHVlIiwiZGVsdGFFbnRyeSIsImFjY0VudHJ5IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldDUiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZUV2ZW50IiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVSdW4iLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZVJ1blN0ZXAiLCJfQXNzaXN0YW50U3RyZWFtX2hhbmRsZU1lc3NhZ2UiLCJhc3NlcnROZXZlcjIiLCJfQXNzaXN0YW50U3RyZWFtX2VuZFJlcXVlc3QyIiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVNZXNzYWdlMiIsImFjY3VtdWxhdGVkTWVzc2FnZSIsIm5ld0NvbnRlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2FjY3VtdWxhdGVNZXNzYWdlIiwic25hcHNob3RDb250ZW50IiwidGV4dERlbHRhIiwiaW1hZ2VfZmlsZSIsImN1cnJlbnRDb250ZW50IiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVSdW5TdGVwMiIsImFjY3VtdWxhdGVkUnVuU3RlcCIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZVJ1blN0ZXAiLCJzdGVwX2RldGFpbHMiLCJkZXRhaWxzIiwiX0Fzc2lzdGFudFN0cmVhbV9oYW5kbGVFdmVudDIiLCJfQXNzaXN0YW50U3RyZWFtX2FjY3VtdWxhdGVSdW5TdGVwMiIsImFjY3VtdWxhdGVkIiwiX0Fzc2lzdGFudFN0cmVhbV9hY2N1bXVsYXRlTWVzc2FnZTIiLCJjb250ZW50RWxlbWVudCIsIl9Bc3Npc3RhbnRTdHJlYW1fYWNjdW11bGF0ZUNvbnRlbnQiLCJfQXNzaXN0YW50U3RyZWFtX2FjY3VtdWxhdGVDb250ZW50MiIsIl9Bc3Npc3RhbnRTdHJlYW1faGFuZGxlUnVuMiIsIk1lc3NhZ2VzMiIsIm1lc3NhZ2VJZCIsIk1lc3NhZ2VzUGFnZSIsIlN0ZXBzIiwic3RlcElkIiwiUnVuU3RlcHNQYWdlIiwiUnVucyIsInN0ZXBzIiwiaW5jbHVkZSIsIlJ1bnNQYWdlIiwiY3JlYXRlQW5kUG9sbCIsInBvbGwiLCJjcmVhdGVBbmRTdHJlYW0iLCJiZXRhIiwidGhyZWFkcyIsInBvbGxJbnRlcnZhbE1zIiwic2xlZXBJbnRlcnZhbCIsImhlYWRlckludGVydmFsIiwiaGVhZGVySW50ZXJ2YWxNcyIsInN1Ym1pdFRvb2xPdXRwdXRzQW5kUG9sbCIsInN1Ym1pdFRvb2xPdXRwdXRzU3RyZWFtIiwiVGhyZWFkcyIsImNyZWF0ZUFuZFJ1blBvbGwiLCJ0aHJlYWRfaWQiLCJjcmVhdGVBbmRSdW5TdHJlYW0iLCJCZXRhIiwicmVhbHRpbWUiLCJhc3Npc3RhbnRzIiwiQ29tcGxldGlvbnMzIiwiRW1iZWRkaW5ncyIsImhhc1VzZXJQcm92aWRlZEVuY29kaW5nRm9ybWF0IiwiZW5jb2RpbmdfZm9ybWF0IiwicmVzcG9uc2UyIiwiZW1iZWRkaW5nQmFzZTY0T2JqIiwiZW1iZWRkaW5nQmFzZTY0U3RyIiwiZW1iZWRkaW5nIiwiRmlsZXMiLCJmaWxlSWQiLCJGaWxlT2JqZWN0c1BhZ2UiLCJyZXRyaWV2ZUNvbnRlbnQiLCJ3YWl0Rm9yUHJvY2Vzc2luZyIsInBvbGxJbnRlcnZhbCIsIm1heFdhaXQiLCJURVJNSU5BTF9TVEFURVMiLCJDaGVja3BvaW50cyIsImZpbmVUdW5pbmdKb2JJZCIsIkZpbmVUdW5pbmdKb2JDaGVja3BvaW50c1BhZ2UiLCJKb2JzIiwiY2hlY2twb2ludHMiLCJGaW5lVHVuaW5nSm9ic1BhZ2UiLCJsaXN0RXZlbnRzIiwiRmluZVR1bmluZ0pvYkV2ZW50c1BhZ2UiLCJGaW5lVHVuaW5nIiwiam9icyIsIkltYWdlcyIsImNyZWF0ZVZhcmlhdGlvbiIsImVkaXQiLCJNb2RlbHMiLCJNb2RlbHNQYWdlIiwiTW9kZXJhdGlvbnMiLCJtYXliZVBhcnNlUmVzcG9uc2UiLCJoYXNBdXRvUGFyc2VhYmxlSW5wdXQyIiwib3V0cHV0X3BhcnNlZCIsIm91dHB1dCIsInBhcnNlVG9vbENhbGwyIiwicGFyc2VUZXh0Rm9ybWF0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkT3V0cHV0VGV4dCIsIm91dHB1dDIiLCJ0ZXh0X2Zvcm1hdCIsIm1ha2VQYXJzZWFibGVSZXNwb25zZVRvb2wiLCJpc0F1dG9QYXJzYWJsZVRvb2wyIiwiZ2V0SW5wdXRUb29sQnlOYW1lIiwiaW5wdXRfdG9vbHMiLCJzaG91bGRQYXJzZVRvb2xDYWxsMiIsInZhbGlkYXRlSW5wdXRUb29sczIiLCJyc3AiLCJ0ZXh0cyIsIm91dHB1dF90ZXh0IiwiSW5wdXRJdGVtcyIsInJlc3BvbnNlSWQiLCJSZXNwb25zZUl0ZW1zUGFnZSIsIlJlc3BvbnNlU3RyZWFtIiwiX1Jlc3BvbnNlU3RyZWFtX3BhcmFtcyIsIl9SZXNwb25zZVN0cmVhbV9jdXJyZW50UmVzcG9uc2VTbmFwc2hvdCIsIl9SZXNwb25zZVN0cmVhbV9maW5hbFJlc3BvbnNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldDYiLCJjcmVhdGVSZXNwb25zZSIsIl9jcmVhdGVSZXNwb25zZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQ3IiwiX1Jlc3BvbnNlU3RyZWFtX2luc3RhbmNlcyIsIl9SZXNwb25zZVN0cmVhbV9iZWdpblJlcXVlc3QiLCJyZXNwb25zZXMiLCJfUmVzcG9uc2VTdHJlYW1fYWRkRXZlbnQiLCJfUmVzcG9uc2VTdHJlYW1fZW5kUmVxdWVzdCIsIl9SZXNwb25zZVN0cmVhbV9iZWdpblJlcXVlc3QyIiwiX1Jlc3BvbnNlU3RyZWFtX2FkZEV2ZW50MiIsIl9SZXNwb25zZVN0cmVhbV9hY2N1bXVsYXRlUmVzcG9uc2UiLCJvdXRwdXRfaW5kZXgiLCJjb250ZW50X2luZGV4IiwiX1Jlc3BvbnNlU3RyZWFtX2VuZFJlcXVlc3QyIiwicGFyc2VkUmVzcG9uc2UiLCJmaW5hbGl6ZVJlc3BvbnNlIiwiX1Jlc3BvbnNlU3RyZWFtX2FjY3VtdWxhdGVSZXNwb25zZTIiLCJwYXJ0IiwiZXZlbnQyIiwiZmluYWxSZXNwb25zZSIsIlJlc3BvbnNlcyIsImlucHV0SXRlbXMiLCJQYXJ0cyIsInVwbG9hZElkIiwiVXBsb2FkcyIsImNvbXBsZXRlIiwiYWxsU2V0dGxlZFdpdGhUaHJvdyIsInByb21pc2VzIiwicmVzdWx0cyIsImFsbFNldHRsZWQiLCJyZWplY3RlZCIsInJlYXNvbiIsIkZpbGVzMiIsInZlY3RvclN0b3JlSWQiLCJWZWN0b3JTdG9yZUZpbGVzUGFnZSIsImZpbGVSZXNwb25zZSIsInVwbG9hZCIsImZpbGVJbmZvIiwiZmlsZXMiLCJwdXJwb3NlIiwiZmlsZV9pZCIsInVwbG9hZEFuZFBvbGwiLCJGaWxlQ29udGVudFJlc3BvbnNlc1BhZ2UiLCJGaWxlQmF0Y2hlcyIsImJhdGNoIiwibGlzdEZpbGVzIiwiZmlsZUlkcyIsImNvbmZpZ3VyZWRDb25jdXJyZW5jeSIsIm1heENvbmN1cnJlbmN5IiwiY29uY3VycmVuY3lMaW1pdCIsImZpbGVJdGVyYXRvciIsImFsbEZpbGVJZHMiLCJwcm9jZXNzRmlsZXMiLCJmaWxlT2JqIiwid29ya2VycyIsImZpbGwiLCJmaWxlX2lkcyIsIlZlY3RvclN0b3JlcyIsImZpbGVCYXRjaGVzIiwiVmVjdG9yU3RvcmVzUGFnZSIsIlZlY3RvclN0b3JlU2VhcmNoUmVzcG9uc2VzUGFnZSIsImFwaUtleSIsIm9yZ2FuaXphdGlvbiIsInByb2plY3QiLCJkYW5nZXJvdXNseUFsbG93QnJvd3NlciIsImVtYmVkZGluZ3MiLCJpbWFnZXMiLCJhdWRpbyIsIm1vZGVyYXRpb25zIiwibW9kZWxzIiwiZmluZVR1bmluZyIsInZlY3RvclN0b3JlcyIsImJhdGNoZXMiLCJ1cGxvYWRzIiwiX29wdGlvbnMiLCJBdXRob3JpemF0aW9uIiwiX2EiLCJERUZBVUxUX1RJTUVPVVQiLCJhcGlWZXJzaW9uIiwiZW5kcG9pbnQiLCJkZXBsb3ltZW50IiwiYXp1cmVBRFRva2VuUHJvdmlkZXIiLCJBUElfS0VZX1NFTlRJTkVMIiwiX2F6dXJlQURUb2tlblByb3ZpZGVyIiwiZGVwbG95bWVudE5hbWUiLCJfZGVwbG95bWVudHNfZW5kcG9pbnRzIiwiX2dldEF6dXJlQURUb2tlbiIsInRva2VuIiwib3BlbmFpX2RlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsd0JBQUEsRUFB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