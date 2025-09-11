System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zod","3.25.76"]]);
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

// .beyond/uimport/zod.3.25.76.js
var zod_3_25_76_exports = {};
__export(zod_3_25_76_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  default: () => zod_3_25_76_default,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType,
  z: () => external_exports
});
module.exports = __toCommonJS(zod_3_25_76_exports);

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/zod/v3/helpers/util.js
var util;
(function (util2) {
  util2.assertEqual = _ => {};
  function assertIs(_arg) {}
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = items => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = obj => {
    const validKeys = util2.objectKeys(obj).filter(k => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = obj => {
    return util2.objectKeys(obj).map(function (e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? obj => Object.keys(obj) : object => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item)) return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? val => Number.isInteger(val) : val => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map(val => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function (objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var getParsedType = data => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var quotelessJson = obj => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = sub => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function (issue) {
      return issue.message;
    };
    const fieldErrors = {
      _errors: []
    };
    const processError = error => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || {
                _errors: []
              };
            } else {
              curr[el] = curr[el] || {
                _errors: []
              };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = issue => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return {
      formErrors,
      fieldErrors
    };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = issues => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;else if (issue.type === "bigint") message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array") message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;else if (issue.type === "string") message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;else if (issue.type === "number") message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "bigint") message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;else if (issue.type === "date") message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;else message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return {
    message
  };
};
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = params => {
  const {
    data,
    path,
    errorMaps,
    issueData
  } = params;
  const fullPath = [...path, ...(issueData.path || [])];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter(m => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, {
      data,
      defaultError: errorMessage
    }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, overrideMap, overrideMap === en_default ? void 0 : en_default].filter(x => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted") return INVALID;
      if (s.status === "dirty") status.dirty();
      arrayValue.push(s.value);
    }
    return {
      status: status.value,
      value: arrayValue
    };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const {
        key,
        value
      } = pair;
      if (key.status === "aborted") return INVALID;
      if (value.status === "aborted") return INVALID;
      if (key.status === "dirty") status.dirty();
      if (value.status === "dirty") status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return {
      status: status.value,
      value: finalObject
    };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = value => ({
  status: "dirty",
  value
});
var OK = value => ({
  status: "valid",
  value
});
var isAborted = x => x.status === "aborted";
var isDirty = x => x.status === "dirty";
var isValid = x => x.status === "valid";
var isAsync = x => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function (errorUtil2) {
  errorUtil2.errToObj = message => typeof message === "string" ? {
    message
  } : message || {};
  errorUtil2.toString = message => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return {
      success: true,
      data: result.value
    };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params) return {};
  const {
    errorMap: errorMap2,
    invalid_type_error,
    required_error,
    description
  } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2) return {
    errorMap: errorMap2,
    description
  };
  const customMap = (iss, ctx) => {
    const {
      message
    } = params;
    if (iss.code === "invalid_enum_value") {
      return {
        message: message ?? ctx.defaultError
      };
    }
    if (typeof ctx.data === "undefined") {
      return {
        message: message ?? required_error ?? ctx.defaultError
      };
    }
    if (iss.code !== "invalid_type") return {
      message: ctx.defaultError
    };
    return {
      message: message ?? invalid_type_error ?? ctx.defaultError
    };
  };
  return {
    errorMap: customMap,
    description
  };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({
      data,
      path: ctx.path,
      parent: ctx
    });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({
          data,
          path: [],
          parent: ctx
        });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({
      data,
      path: [],
      parent: ctx
    }).then(result => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success) return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = val => {
      if (typeof message === "string" || typeof message === "undefined") {
        return {
          message
        };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(data => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "refinement",
        refinement
      }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: data => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: "transform",
        transform
      }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt)) return false;
  try {
    const [header] = jwt.split(".");
    if (!header) return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null) return false;
    if ("typ" in decoded && decoded?.typ !== "JWT") return false;
    if (!decoded.alg) return false;
    if (alg && decoded.alg !== alg) return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              includes: check.value,
              position: check.position
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              startsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: {
              endsWith: check.value
            },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  _regex(regex, validation, message) {
    return this.refinement(data => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({
      kind: "email",
      ...errorUtil.errToObj(message)
    });
  }
  url(message) {
    return this._addCheck({
      kind: "url",
      ...errorUtil.errToObj(message)
    });
  }
  emoji(message) {
    return this._addCheck({
      kind: "emoji",
      ...errorUtil.errToObj(message)
    });
  }
  uuid(message) {
    return this._addCheck({
      kind: "uuid",
      ...errorUtil.errToObj(message)
    });
  }
  nanoid(message) {
    return this._addCheck({
      kind: "nanoid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid(message) {
    return this._addCheck({
      kind: "cuid",
      ...errorUtil.errToObj(message)
    });
  }
  cuid2(message) {
    return this._addCheck({
      kind: "cuid2",
      ...errorUtil.errToObj(message)
    });
  }
  ulid(message) {
    return this._addCheck({
      kind: "ulid",
      ...errorUtil.errToObj(message)
    });
  }
  base64(message) {
    return this._addCheck({
      kind: "base64",
      ...errorUtil.errToObj(message)
    });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({
      kind: "jwt",
      ...errorUtil.errToObj(options)
    });
  }
  ip(options) {
    return this._addCheck({
      kind: "ip",
      ...errorUtil.errToObj(options)
    });
  }
  cidr(options) {
    return this._addCheck({
      kind: "cidr",
      ...errorUtil.errToObj(options)
    });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({
      kind: "date",
      message
    });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({
      kind: "duration",
      ...errorUtil.errToObj(message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(ch => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find(ch => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find(ch => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find(ch => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find(ch => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(ch => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(ch => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(ch => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find(ch => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find(ch => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(ch => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(ch => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(ch => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find(ch => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find(ch => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find(ch => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = params => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find(ch => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = params => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: input.data
    };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, {
        kind,
        value,
        inclusive,
        message: errorUtil.toString(message)
      }]
    });
  }
  _addCheck(check) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = params => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = params => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = params => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = params => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = params => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = params => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = params => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = params => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = params => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = params => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const {
      ctx,
      status
    } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then(result2 => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: {
        value: minLength,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: {
        value: maxLength,
        message: errorUtil.toString(message)
      }
    });
  }
  length(len, message) {
    return new ZodArray({
      ...this._def,
      exactLength: {
        value: len,
        message: errorUtil.toString(message)
      }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map(item => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = {
      shape,
      keys
    };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const {
      shape,
      keys: shapeKeys
    } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: {
          status: "valid",
          value: key
        },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: {
              status: "valid",
              value: key
            },
            value: {
              status: "valid",
              value: ctx.data[key]
            }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {} else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: {
            status: "valid",
            value: key
          },
          value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then(syncPairs => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...(message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys") return {
            message: errorUtil.errToObj(message).message ?? defaultError
          };
          return {
            message: defaultError
          };
        }
      } : {})
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(augmentation) {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  setKey(key, schema) {
    return this.augment({
      [key]: schema
    });
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map(result => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async option => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = {
            result,
            ctx: childCtx
          };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map(issues2 => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = type => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return {
      valid: true,
      data: a
    };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter(key => bKeys.indexOf(key) !== -1);
    const newObj = {
      ...a,
      ...b
    };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newObj[key] = sharedValue.data;
    }
    return {
      valid: true,
      data: newObj
    };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return {
        valid: false
      };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false
        };
      }
      newArray.push(sharedValue.data);
    }
    return {
      valid: true,
      data: newArray
    };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return {
      valid: true,
      data: a
    };
  } else {
    return {
      valid: false
    };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return {
        status: status.value,
        value: merged.data
      };
    };
    if (ctx.common.async) {
      return Promise.all([this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema) return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter(x => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then(results => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return {
          status: status.value,
          value: finalMap
        };
      });
    } else {
      const finalMap = /* @__PURE__ */new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return {
        status: status.value,
        value: finalMap
      };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */new Set();
      for (const element of elements2) {
        if (element.status === "aborted") return INVALID;
        if (element.status === "dirty") status.dirty();
        parsedSet.add(element.value);
      }
      return {
        status: status.value,
        value: parsedSet
      };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then(elements2 => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: {
        value: minSize,
        message: errorUtil.toString(message)
      }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: {
        value: maxSize,
        message: errorUtil.toString(message)
      }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter(x => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = {
      errorMap: ctx.common.contextualErrorMap
    };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function (...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch(e => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch(e => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function (...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return ZodEnum.create(this.options.filter(opt => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then(data => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: arg => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async processed2 => {
          if (status.value === "aborted") return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted") return INVALID;
          if (result.status === "dirty") return DIRTY(result.value);
          if (status.value === "dirty") return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted") return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted") return INVALID;
        if (result.status === "dirty") return DIRTY(result.value);
        if (status.value === "dirty") return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = acc => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted") return INVALID;
        if (inner.status === "dirty") status.dirty();
        executeRefinement(inner.value);
        return {
          status: status.value,
          value: inner.value
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(inner => {
          if (inner.status === "aborted") return INVALID;
          if (inner.status === "dirty") status.dirty();
          return executeRefinement(inner.value).then(() => {
            return {
              status: status.value,
              value: inner.value
            };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base)) return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return {
          status: status.value,
          value: result
        };
      } else {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }).then(base => {
          if (!isValid(base)) return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then(result => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: {
      type: "preprocess",
      transform: preprocess
    },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then(result2 => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: input.data
    };
  }
};
ZodNaN.create = params => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const {
      ctx
    } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class extends ZodType {
  _parse(input) {
    const {
      status,
      ctx
    } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted") return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted") return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = data => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then(data => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? {
    message: params
  } : params;
  const p2 = typeof p === "string" ? {
    message: p
  } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check) return ZodAny.create().superRefine((data, ctx) => {
    const r = check(data);
    if (r instanceof Promise) {
      return r.then(r2 => {
        if (!r2) {
          const params = cleanParams(_params, data);
          const _fatal = params.fatal ?? fatal ?? true;
          ctx.addIssue({
            code: "custom",
            ...params,
            fatal: _fatal
          });
        }
      });
    }
    if (!r) {
      const params = cleanParams(_params, data);
      const _fatal = params.fatal ?? fatal ?? true;
      ctx.addIssue({
        code: "custom",
        ...params,
        fatal: _fatal
      });
    }
    return;
  });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var Class = class {
  constructor(..._) {}
};
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom(data => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: arg => ZodString.create({
    ...arg,
    coerce: true
  }),
  number: arg => ZodNumber.create({
    ...arg,
    coerce: true
  }),
  boolean: arg => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: arg => ZodBigInt.create({
    ...arg,
    coerce: true
  }),
  date: arg => ZodDate.create({
    ...arg,
    coerce: true
  })
};
var NEVER = INVALID;

// node_modules/zod/index.js
var zod_default = external_exports;

// .beyond/uimport/zod.3.25.76.js
var zod_3_25_76_default = zod_default;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96b2QuMy4yNS43Ni5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvdjMvZXh0ZXJuYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvdjMvWm9kRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL3YzL2xvY2FsZXMvZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL3YzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvdjMvaGVscGVycy9wYXJzZVV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvem9kL3YzL2hlbHBlcnMvZXJyb3JVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3pvZC92My90eXBlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy96b2QvaW5kZXguanMiXSwibmFtZXMiOlsiem9kXzNfMjVfNzZfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQlJBTkQiLCJESVJUWSIsIkVNUFRZX1BBVEgiLCJJTlZBTElEIiwiTkVWRVIiLCJPSyIsIlBhcnNlU3RhdHVzIiwiU2NoZW1hIiwiWm9kVHlwZSIsIlpvZEFueSIsIlpvZEFycmF5IiwiWm9kQmlnSW50IiwiWm9kQm9vbGVhbiIsIlpvZEJyYW5kZWQiLCJab2RDYXRjaCIsIlpvZERhdGUiLCJab2REZWZhdWx0IiwiWm9kRGlzY3JpbWluYXRlZFVuaW9uIiwiWm9kRWZmZWN0cyIsIlpvZEVudW0iLCJab2RFcnJvciIsIlpvZEZpcnN0UGFydHlUeXBlS2luZCIsIlpvZEZ1bmN0aW9uIiwiWm9kSW50ZXJzZWN0aW9uIiwiWm9kSXNzdWVDb2RlIiwiWm9kTGF6eSIsIlpvZExpdGVyYWwiLCJab2RNYXAiLCJab2ROYU4iLCJab2ROYXRpdmVFbnVtIiwiWm9kTmV2ZXIiLCJab2ROdWxsIiwiWm9kTnVsbGFibGUiLCJab2ROdW1iZXIiLCJab2RPYmplY3QiLCJab2RPcHRpb25hbCIsIlpvZFBhcnNlZFR5cGUiLCJab2RQaXBlbGluZSIsIlpvZFByb21pc2UiLCJab2RSZWFkb25seSIsIlpvZFJlY29yZCIsIlpvZFNjaGVtYSIsIlpvZFNldCIsIlpvZFN0cmluZyIsIlpvZFN5bWJvbCIsIlpvZFRyYW5zZm9ybWVyIiwiWm9kVHVwbGUiLCJab2RVbmRlZmluZWQiLCJab2RVbmlvbiIsIlpvZFVua25vd24iLCJab2RWb2lkIiwiYWRkSXNzdWVUb0NvbnRleHQiLCJhbnkiLCJhbnlUeXBlIiwiYXJyYXkiLCJhcnJheVR5cGUiLCJiaWdpbnQiLCJiaWdJbnRUeXBlIiwiYm9vbGVhbiIsImJvb2xlYW5UeXBlIiwiY29lcmNlIiwiY3VzdG9tIiwiZGF0ZSIsImRhdGVUeXBlIiwiZGF0ZXRpbWVSZWdleCIsImRlZmF1bHQiLCJ6b2RfM18yNV83Nl9kZWZhdWx0IiwiZGVmYXVsdEVycm9yTWFwIiwiZW5fZGVmYXVsdCIsImRpc2NyaW1pbmF0ZWRVbmlvbiIsImRpc2NyaW1pbmF0ZWRVbmlvblR5cGUiLCJlZmZlY3QiLCJlZmZlY3RzVHlwZSIsImVudW0iLCJlbnVtVHlwZSIsImZ1bmN0aW9uIiwiZnVuY3Rpb25UeXBlIiwiZ2V0RXJyb3JNYXAiLCJnZXRQYXJzZWRUeXBlIiwiaW5zdGFuY2VvZiIsImluc3RhbmNlT2ZUeXBlIiwiaW50ZXJzZWN0aW9uIiwiaW50ZXJzZWN0aW9uVHlwZSIsImlzQWJvcnRlZCIsImlzQXN5bmMiLCJpc0RpcnR5IiwiaXNWYWxpZCIsImxhdGUiLCJsYXp5IiwibGF6eVR5cGUiLCJsaXRlcmFsIiwibGl0ZXJhbFR5cGUiLCJtYWtlSXNzdWUiLCJtYXAiLCJtYXBUeXBlIiwibmFuIiwibmFuVHlwZSIsIm5hdGl2ZUVudW0iLCJuYXRpdmVFbnVtVHlwZSIsIm5ldmVyIiwibmV2ZXJUeXBlIiwibnVsbCIsIm51bGxUeXBlIiwibnVsbGFibGUiLCJudWxsYWJsZVR5cGUiLCJudW1iZXIiLCJudW1iZXJUeXBlIiwib2JqZWN0Iiwib2JqZWN0VHlwZSIsIm9iamVjdFV0aWwiLCJvYm9vbGVhbiIsIm9udW1iZXIiLCJvcHRpb25hbCIsIm9wdGlvbmFsVHlwZSIsIm9zdHJpbmciLCJwaXBlbGluZSIsInBpcGVsaW5lVHlwZSIsInByZXByb2Nlc3MiLCJwcmVwcm9jZXNzVHlwZSIsInByb21pc2UiLCJwcm9taXNlVHlwZSIsInF1b3RlbGVzc0pzb24iLCJyZWNvcmQiLCJyZWNvcmRUeXBlIiwic2V0Iiwic2V0VHlwZSIsInNldEVycm9yTWFwIiwic3RyaWN0T2JqZWN0Iiwic3RyaWN0T2JqZWN0VHlwZSIsInN0cmluZyIsInN0cmluZ1R5cGUiLCJzeW1ib2wiLCJzeW1ib2xUeXBlIiwidHJhbnNmb3JtZXIiLCJ0dXBsZSIsInR1cGxlVHlwZSIsInVuZGVmaW5lZCIsInVuZGVmaW5lZFR5cGUiLCJ1bmlvbiIsInVuaW9uVHlwZSIsInVua25vd24iLCJ1bmtub3duVHlwZSIsInV0aWwiLCJ2b2lkIiwidm9pZFR5cGUiLCJ6IiwiZXh0ZXJuYWxfZXhwb3J0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ1dGlsMiIsImFzc2VydEVxdWFsIiwiXyIsImFzc2VydElzIiwiX2FyZyIsImFzc2VydE5ldmVyIiwiX3giLCJFcnJvciIsImFycmF5VG9FbnVtIiwiaXRlbXMiLCJvYmoiLCJpdGVtIiwiZ2V0VmFsaWRFbnVtVmFsdWVzIiwidmFsaWRLZXlzIiwib2JqZWN0S2V5cyIsImZpbHRlciIsImsiLCJmaWx0ZXJlZCIsIm9iamVjdFZhbHVlcyIsImUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicHVzaCIsImZpbmQiLCJhcnIiLCJjaGVja2VyIiwiaXNJbnRlZ2VyIiwiTnVtYmVyIiwidmFsIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJqb2luVmFsdWVzIiwic2VwYXJhdG9yIiwiam9pbiIsImpzb25TdHJpbmdpZnlSZXBsYWNlciIsInZhbHVlIiwidG9TdHJpbmciLCJvYmplY3RVdGlsMiIsIm1lcmdlU2hhcGVzIiwiZmlyc3QiLCJzZWNvbmQiLCJkYXRhIiwidCIsImlzTmFOIiwiQXJyYXkiLCJpc0FycmF5IiwidGhlbiIsImNhdGNoIiwiTWFwIiwiU2V0IiwiRGF0ZSIsImpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImVycm9ycyIsImlzc3VlcyIsImNvbnN0cnVjdG9yIiwiYWRkSXNzdWUiLCJzdWIiLCJhZGRJc3N1ZXMiLCJzdWJzIiwiYWN0dWFsUHJvdG8iLCJuZXciLCJ0YXJnZXQiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIm5hbWUiLCJmb3JtYXQiLCJfbWFwcGVyIiwibWFwcGVyIiwiaXNzdWUiLCJtZXNzYWdlIiwiZmllbGRFcnJvcnMiLCJfZXJyb3JzIiwicHJvY2Vzc0Vycm9yIiwiZXJyb3IiLCJjb2RlIiwidW5pb25FcnJvcnMiLCJyZXR1cm5UeXBlRXJyb3IiLCJhcmd1bWVudHNFcnJvciIsInBhdGgiLCJsZW5ndGgiLCJjdXJyIiwiaSIsImVsIiwidGVybWluYWwiLCJhc3NlcnQiLCJpc0VtcHR5IiwiZmxhdHRlbiIsImZvcm1FcnJvcnMiLCJmaXJzdEVsIiwiY3JlYXRlIiwiZXJyb3JNYXAiLCJfY3R4IiwiaW52YWxpZF90eXBlIiwicmVjZWl2ZWQiLCJleHBlY3RlZCIsImludmFsaWRfbGl0ZXJhbCIsInVucmVjb2duaXplZF9rZXlzIiwiaW52YWxpZF91bmlvbiIsImludmFsaWRfdW5pb25fZGlzY3JpbWluYXRvciIsIm9wdGlvbnMiLCJpbnZhbGlkX2VudW1fdmFsdWUiLCJpbnZhbGlkX2FyZ3VtZW50cyIsImludmFsaWRfcmV0dXJuX3R5cGUiLCJpbnZhbGlkX2RhdGUiLCJpbnZhbGlkX3N0cmluZyIsInZhbGlkYXRpb24iLCJpbmNsdWRlcyIsInBvc2l0aW9uIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidG9vX3NtYWxsIiwidHlwZSIsImV4YWN0IiwiaW5jbHVzaXZlIiwibWluaW11bSIsInRvb19iaWciLCJtYXhpbXVtIiwiaW52YWxpZF9pbnRlcnNlY3Rpb25fdHlwZXMiLCJub3RfbXVsdGlwbGVfb2YiLCJtdWx0aXBsZU9mIiwibm90X2Zpbml0ZSIsImRlZmF1bHRFcnJvciIsIm92ZXJyaWRlRXJyb3JNYXAiLCJwYXJhbXMiLCJlcnJvck1hcHMiLCJpc3N1ZURhdGEiLCJmdWxsUGF0aCIsImZ1bGxJc3N1ZSIsImVycm9yTWVzc2FnZSIsIm1hcHMiLCJtIiwic2xpY2UiLCJyZXZlcnNlIiwiY3R4Iiwib3ZlcnJpZGVNYXAiLCJjb21tb24iLCJjb250ZXh0dWFsRXJyb3JNYXAiLCJzY2hlbWFFcnJvck1hcCIsIngiLCJkaXJ0eSIsImFib3J0IiwibWVyZ2VBcnJheSIsInN0YXR1cyIsInJlc3VsdHMiLCJhcnJheVZhbHVlIiwicyIsIm1lcmdlT2JqZWN0QXN5bmMiLCJwYWlycyIsInN5bmNQYWlycyIsInBhaXIiLCJtZXJnZU9iamVjdFN5bmMiLCJmaW5hbE9iamVjdCIsImFsd2F5c1NldCIsImZyZWV6ZSIsIlByb21pc2UiLCJlcnJvclV0aWwiLCJlcnJvclV0aWwyIiwiZXJyVG9PYmoiLCJQYXJzZUlucHV0TGF6eVBhdGgiLCJwYXJlbnQiLCJfY2FjaGVkUGF0aCIsIl9wYXRoIiwiX2tleSIsImhhbmRsZVJlc3VsdCIsInJlc3VsdCIsInN1Y2Nlc3MiLCJfZXJyb3IiLCJwcm9jZXNzQ3JlYXRlUGFyYW1zIiwiZXJyb3JNYXAyIiwiaW52YWxpZF90eXBlX2Vycm9yIiwicmVxdWlyZWRfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImN1c3RvbU1hcCIsImlzcyIsIl9kZWYiLCJfZ2V0VHlwZSIsImlucHV0IiwiX2dldE9yUmV0dXJuQ3R4IiwicGFyc2VkVHlwZSIsIl9wcm9jZXNzSW5wdXRQYXJhbXMiLCJfcGFyc2VTeW5jIiwiX3BhcnNlIiwiX3BhcnNlQXN5bmMiLCJyZXNvbHZlIiwicGFyc2UiLCJzYWZlUGFyc2UiLCJhc3luYyIsIn52YWxpZGF0ZSIsImVyciIsInRvTG93ZXJDYXNlIiwicGFyc2VBc3luYyIsInNhZmVQYXJzZUFzeW5jIiwibWF5YmVBc3luY1Jlc3VsdCIsInJlZmluZSIsImNoZWNrIiwiZ2V0SXNzdWVQcm9wZXJ0aWVzIiwiX3JlZmluZW1lbnQiLCJzZXRFcnJvciIsInJlZmluZW1lbnQiLCJyZWZpbmVtZW50RGF0YSIsInNjaGVtYSIsInR5cGVOYW1lIiwic3VwZXJSZWZpbmUiLCJkZWYiLCJzcGEiLCJiaW5kIiwibnVsbGlzaCIsIm9yIiwiYW5kIiwidHJhbnNmb3JtIiwiYnJhbmQiLCJkZXNjcmliZSIsInBpcGUiLCJyZWFkb25seSIsImlzTnVsbGFibGUiLCJpc09wdGlvbmFsIiwidmVyc2lvbiIsInZlbmRvciIsInZhbGlkYXRlIiwib3B0aW9uIiwiaW5jb21pbmciLCJkZWZhdWx0VmFsdWVGdW5jIiwiaW5uZXJUeXBlIiwiZGVmYXVsdFZhbHVlIiwiY2F0Y2hWYWx1ZUZ1bmMiLCJjYXRjaFZhbHVlIiwiVGhpcyIsImN1aWRSZWdleCIsImN1aWQyUmVnZXgiLCJ1bGlkUmVnZXgiLCJ1dWlkUmVnZXgiLCJuYW5vaWRSZWdleCIsImp3dFJlZ2V4IiwiZHVyYXRpb25SZWdleCIsImVtYWlsUmVnZXgiLCJfZW1vamlSZWdleCIsImVtb2ppUmVnZXgiLCJpcHY0UmVnZXgiLCJpcHY0Q2lkclJlZ2V4IiwiaXB2NlJlZ2V4IiwiaXB2NkNpZHJSZWdleCIsImJhc2U2NFJlZ2V4IiwiYmFzZTY0dXJsUmVnZXgiLCJkYXRlUmVnZXhTb3VyY2UiLCJkYXRlUmVnZXgiLCJSZWdFeHAiLCJ0aW1lUmVnZXhTb3VyY2UiLCJhcmdzIiwic2Vjb25kc1JlZ2V4U291cmNlIiwicHJlY2lzaW9uIiwic2Vjb25kc1F1YW50aWZpZXIiLCJ0aW1lUmVnZXgiLCJyZWdleCIsIm9wdHMiLCJsb2NhbCIsIm9mZnNldCIsImlzVmFsaWRJUCIsImlwIiwidGVzdCIsImlzVmFsaWRKV1QiLCJqd3QiLCJhbGciLCJoZWFkZXIiLCJzcGxpdCIsImJhc2U2NCIsInBhZEVuZCIsImRlY29kZWQiLCJhdG9iIiwidHlwIiwiaXNWYWxpZENpZHIiLCJTdHJpbmciLCJjdHgyIiwiY2hlY2tzIiwia2luZCIsInRvb0JpZyIsInRvb1NtYWxsIiwiVVJMIiwibGFzdEluZGV4IiwidGVzdFJlc3VsdCIsInRyaW0iLCJ0b1VwcGVyQ2FzZSIsIl9yZWdleCIsIl9hZGRDaGVjayIsImVtYWlsIiwidXJsIiwiZW1vamkiLCJ1dWlkIiwibmFub2lkIiwiY3VpZCIsImN1aWQyIiwidWxpZCIsImJhc2U2NHVybCIsImNpZHIiLCJkYXRldGltZSIsInRpbWUiLCJkdXJhdGlvbiIsIm1pbiIsIm1pbkxlbmd0aCIsIm1heCIsIm1heExlbmd0aCIsImxlbiIsIm5vbmVtcHR5IiwiaXNEYXRldGltZSIsImNoIiwiaXNEYXRlIiwiaXNUaW1lIiwiaXNEdXJhdGlvbiIsImlzRW1haWwiLCJpc1VSTCIsImlzRW1vamkiLCJpc1VVSUQiLCJpc05BTk9JRCIsImlzQ1VJRCIsImlzQ1VJRDIiLCJpc1VMSUQiLCJpc0lQIiwiaXNDSURSIiwiaXNCYXNlNjQiLCJpc0Jhc2U2NHVybCIsImZsb2F0U2FmZVJlbWFpbmRlciIsInN0ZXAiLCJ2YWxEZWNDb3VudCIsInN0ZXBEZWNDb3VudCIsImRlY0NvdW50IiwidmFsSW50IiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwic3RlcEludCIsImFyZ3VtZW50cyIsImd0ZSIsImx0ZSIsInNldExpbWl0IiwiZ3QiLCJsdCIsImludCIsInBvc2l0aXZlIiwibmVnYXRpdmUiLCJub25wb3NpdGl2ZSIsIm5vbm5lZ2F0aXZlIiwiZmluaXRlIiwic2FmZSIsIk1JTl9TQUZFX0lOVEVHRVIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzSW50IiwiQmlnSW50IiwiX2dldEludmFsaWRJbnB1dCIsIkJvb2xlYW4iLCJnZXRUaW1lIiwibWluRGF0ZSIsIm1heERhdGUiLCJfYW55IiwiX3Vua25vd24iLCJleGFjdExlbmd0aCIsImFsbCIsInJlc3VsdDIiLCJlbGVtZW50IiwiZGVlcFBhcnRpYWxpZnkiLCJuZXdTaGFwZSIsInNoYXBlIiwiZmllbGRTY2hlbWEiLCJ1bndyYXAiLCJfY2FjaGVkIiwibm9uc3RyaWN0IiwicGFzc3Rocm91Z2giLCJhdWdtZW50IiwiZXh0ZW5kIiwiX2dldENhY2hlZCIsInNoYXBlS2V5cyIsImV4dHJhS2V5cyIsImNhdGNoYWxsIiwidW5rbm93bktleXMiLCJrZXlWYWxpZGF0b3IiLCJzdHJpY3QiLCJzdHJpcCIsImF1Z21lbnRhdGlvbiIsIm1lcmdlIiwibWVyZ2luZyIsIm1lcmdlZCIsInNldEtleSIsImluZGV4IiwicGljayIsIm1hc2siLCJvbWl0IiwiZGVlcFBhcnRpYWwiLCJwYXJ0aWFsIiwicmVxdWlyZWQiLCJuZXdGaWVsZCIsImtleW9mIiwiY3JlYXRlWm9kRW51bSIsInN0cmljdENyZWF0ZSIsImxhenljcmVhdGUiLCJoYW5kbGVSZXN1bHRzIiwiY2hpbGRDdHgiLCJpc3N1ZXMyIiwidHlwZXMiLCJnZXREaXNjcmltaW5hdG9yIiwiZGlzY3JpbWluYXRvciIsImRpc2NyaW1pbmF0b3JWYWx1ZSIsIm9wdGlvbnNNYXAiLCJnZXQiLCJmcm9tIiwiZGlzY3JpbWluYXRvclZhbHVlcyIsImhhcyIsIm1lcmdlVmFsdWVzIiwiYSIsImIiLCJhVHlwZSIsImJUeXBlIiwidmFsaWQiLCJiS2V5cyIsInNoYXJlZEtleXMiLCJpbmRleE9mIiwibmV3T2JqIiwic2hhcmVkVmFsdWUiLCJuZXdBcnJheSIsIml0ZW1BIiwiaXRlbUIiLCJoYW5kbGVQYXJzZWQiLCJwYXJzZWRMZWZ0IiwicGFyc2VkUmlnaHQiLCJsZWZ0IiwicmlnaHQiLCJyZXN0IiwiaXRlbUluZGV4Iiwic2NoZW1hcyIsImtleVNjaGVtYSIsImtleVR5cGUiLCJ2YWx1ZVNjaGVtYSIsInZhbHVlVHlwZSIsInRoaXJkIiwiZW50cmllcyIsImZpbmFsTWFwIiwibWluU2l6ZSIsInNpemUiLCJtYXhTaXplIiwiZmluYWxpemVTZXQiLCJlbGVtZW50czIiLCJwYXJzZWRTZXQiLCJhZGQiLCJlbGVtZW50cyIsInZhbHVlcyIsImltcGxlbWVudCIsIm1ha2VBcmdzSXNzdWUiLCJtYWtlUmV0dXJuc0lzc3VlIiwicmV0dXJucyIsImZuIiwibWUiLCJwYXJzZWRBcmdzIiwiUmVmbGVjdCIsImFwcGx5IiwicGFyc2VkUmV0dXJucyIsInBhcmFtZXRlcnMiLCJyZXR1cm5UeXBlIiwiZnVuYyIsInZhbGlkYXRlZEZ1bmMiLCJzdHJpY3RJbXBsZW1lbnQiLCJnZXR0ZXIiLCJsYXp5U2NoZW1hIiwiZXhwZWN0ZWRWYWx1ZXMiLCJfY2FjaGUiLCJlbnVtVmFsdWVzIiwiVmFsdWVzIiwiRW51bSIsImV4dHJhY3QiLCJuZXdEZWYiLCJleGNsdWRlIiwib3B0IiwibmF0aXZlRW51bVZhbHVlcyIsInByb21pc2lmaWVkIiwic291cmNlVHlwZSIsImNoZWNrQ3R4IiwiYXJnIiwiZmF0YWwiLCJwcm9jZXNzZWQiLCJwcm9jZXNzZWQyIiwiZXhlY3V0ZVJlZmluZW1lbnQiLCJhY2MiLCJpbm5lciIsImJhc2UiLCJjcmVhdGVXaXRoUHJlcHJvY2VzcyIsInJlbW92ZURlZmF1bHQiLCJuZXdDdHgiLCJyZW1vdmVDYXRjaCIsIlN5bWJvbCIsImhhbmRsZUFzeW5jIiwiaW5SZXN1bHQiLCJpbiIsIm91dCIsImNsZWFuUGFyYW1zIiwicCIsInAyIiwiX3BhcmFtcyIsInIiLCJyMiIsIl9mYXRhbCIsIlpvZEZpcnN0UGFydHlUeXBlS2luZDIiLCJDbGFzcyIsImNscyIsInpvZF9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQkFBQTtBQUFBQyxRQUFBLENBQUFELG1CQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxtQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFDLHNCQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUMsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsY0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsZ0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUE3RCxXQUFBO0VBQUE4RCxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUMsYUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUMsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUMsUUFBQTtFQUFBQyxDQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBdkosbUJBQUE7OztBQ0FBLElBQUFvSixnQkFBQTtBQUFBbkosUUFBQSxDQUFBbUosZ0JBQUE7RUFBQWxKLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxFQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQWpDLE9BQUE7RUFBQWtDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBM0IsVUFBQTtFQUFBNEIsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQXRDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUF1QyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFHLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUMsc0JBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGdCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQyxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQyxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxnQkFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUMsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQTdELFdBQUE7RUFBQThELEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQyxhQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBOzs7QUNBTyxJQUFJRixJQUFBO0FBQUEsQ0FDVixVQUFVUSxLQUFBLEVBQU07RUFDYkEsS0FBQSxDQUFLQyxXQUFBLEdBQWVDLENBQUEsSUFBTSxDQUFFO0VBQzVCLFNBQVNDLFNBQVNDLElBQUEsRUFBTSxDQUFFO0VBQzFCSixLQUFBLENB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QUEsQ0FBVXNOLE1BQUEsQ0FBTztJQUFFLEdBQUdnWSxHQUFBO0lBQUszakIsTUFBQSxFQUFRO0VBQUssQ0FBQztFQUMzREYsT0FBQSxFQUFXNmpCLEdBQUEsSUFBUTNtQixVQUFBLENBQVcyTyxNQUFBLENBQU87SUFDakMsR0FBR2dZLEdBQUE7SUFDSDNqQixNQUFBLEVBQVE7RUFDWixDQUFDO0VBQ0RKLE1BQUEsRUFBVStqQixHQUFBLElBQVE1bUIsU0FBQSxDQUFVNE8sTUFBQSxDQUFPO0lBQUUsR0FBR2dZLEdBQUE7SUFBSzNqQixNQUFBLEVBQVE7RUFBSyxDQUFDO0VBQzNERSxJQUFBLEVBQVF5akIsR0FBQSxJQUFReG1CLE9BQUEsQ0FBUXdPLE1BQUEsQ0FBTztJQUFFLEdBQUdnWSxHQUFBO0lBQUszakIsTUFBQSxFQUFRO0VBQUssQ0FBQztBQUMzRDtBQUVPLElBQU14RCxLQUFBLEdBQVFELE9BQUE7OztBQ3ptSHJCLElBQU8rb0IsV0FBQSxHQUFRaGdCLGdCQUFBOzs7QVRBZixJQUFPaEYsbUJBQUEsR0FBUWdsQixXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=