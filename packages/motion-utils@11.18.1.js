System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["motion-utils","11.18.1"]]);
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

// .beyond/uimport/temp/motion-utils.11.18.1.js
var motion_utils_11_18_1_exports = {};
__export(motion_utils_11_18_1_exports, {
  invariant: () => invariant,
  memo: () => memo,
  millisecondsToSeconds: () => millisecondsToSeconds,
  noop: () => noop,
  progress: () => progress,
  secondsToMilliseconds: () => secondsToMilliseconds,
  warning: () => warning
});
module.exports = __toCommonJS(motion_utils_11_18_1_exports);

// node_modules/motion-utils/dist/es/noop.mjs
var noop = any => any;

// node_modules/motion-utils/dist/es/errors.mjs
var warning = noop;
var invariant = noop;
if (true) {
  warning = (check, message) => {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = (check, message) => {
    if (!check) {
      throw new Error(message);
    }
  };
}

// node_modules/motion-utils/dist/es/memo.mjs
function memo(callback) {
  let result;
  return () => {
    if (result === void 0) result = callback();
    return result;
  };
}

// node_modules/motion-utils/dist/es/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/motion-utils/dist/es/time-conversion.mjs
var secondsToMilliseconds = seconds => seconds * 1e3;
var millisecondsToSeconds = milliseconds => milliseconds / 1e3;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21vdGlvbi11dGlscy4xMS4xOC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi11dGlscy9kaXN0L2VzL25vb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi11dGlscy9kaXN0L2VzL2Vycm9ycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLXV0aWxzL2Rpc3QvZXMvbWVtby5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLXV0aWxzL2Rpc3QvZXMvcHJvZ3Jlc3MubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi11dGlscy9kaXN0L2VzL3RpbWUtY29udmVyc2lvbi5tanMiXSwibmFtZXMiOlsibW90aW9uX3V0aWxzXzExXzE4XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiaW52YXJpYW50IiwibWVtbyIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsIm5vb3AiLCJwcm9ncmVzcyIsInNlY29uZHNUb01pbGxpc2Vjb25kcyIsIndhcm5pbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiYW55IiwiY2hlY2siLCJtZXNzYWdlIiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsImNhbGxiYWNrIiwicmVzdWx0IiwiZnJvbSIsInRvIiwidmFsdWUiLCJ0b0Zyb21EaWZmZXJlbmNlIiwic2Vjb25kcyIsIm1pbGxpc2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVgsNEJBQUE7OztBQ0NBLElBQU1LLElBQUEsR0FBUU8sR0FBQSxJQUFRQSxHQUFBOzs7QUNDdEIsSUFBSUosT0FBQSxHQUFVSCxJQUFBO0FBQ2QsSUFBSUgsU0FBQSxHQUFZRyxJQUFBO0FBQ2hCLElBQUksTUFBdUM7RUFDdkNHLE9BQUEsR0FBVUEsQ0FBQ0ssS0FBQSxFQUFPQyxPQUFBLEtBQVk7SUFDMUIsSUFBSSxDQUFDRCxLQUFBLElBQVMsT0FBT0UsT0FBQSxLQUFZLGFBQWE7TUFDMUNBLE9BQUEsQ0FBUUMsSUFBQSxDQUFLRixPQUFPO0lBQ3hCO0VBQ0o7RUFDQVosU0FBQSxHQUFZQSxDQUFDVyxLQUFBLEVBQU9DLE9BQUEsS0FBWTtJQUM1QixJQUFJLENBQUNELEtBQUEsRUFBTztNQUNSLE1BQU0sSUFBSUksS0FBQSxDQUFNSCxPQUFPO0lBQzNCO0VBQ0o7QUFDSjs7O0FDZEEsU0FBU1gsS0FBS2UsUUFBQSxFQUFVO0VBQ3BCLElBQUlDLE1BQUE7RUFDSixPQUFPLE1BQU07SUFDVCxJQUFJQSxNQUFBLEtBQVcsUUFDWEEsTUFBQSxHQUFTRCxRQUFBLENBQVM7SUFDdEIsT0FBT0MsTUFBQTtFQUNYO0FBQ0o7OztBQ0tBLElBQU1iLFFBQUEsR0FBV0EsQ0FBQ2MsSUFBQSxFQUFNQyxFQUFBLEVBQUlDLEtBQUEsS0FBVTtFQUNsQyxNQUFNQyxnQkFBQSxHQUFtQkYsRUFBQSxHQUFLRCxJQUFBO0VBQzlCLE9BQU9HLGdCQUFBLEtBQXFCLElBQUksS0FBS0QsS0FBQSxHQUFRRixJQUFBLElBQVFHLGdCQUFBO0FBQ3pEOzs7QUNUQSxJQUFNaEIscUJBQUEsR0FBeUJpQixPQUFBLElBQVlBLE9BQUEsR0FBVTtBQUVyRCxJQUFNcEIscUJBQUEsR0FBeUJxQixZQUFBLElBQWlCQSxZQUFBLEdBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==