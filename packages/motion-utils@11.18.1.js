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

// .beyond/uimport/motion-utils.11.18.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tb3Rpb24tdXRpbHMuMTEuMTguMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tdXRpbHMvZGlzdC9lcy9ub29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tdXRpbHMvZGlzdC9lcy9lcnJvcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi11dGlscy9kaXN0L2VzL21lbW8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi11dGlscy9kaXN0L2VzL3Byb2dyZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tdXRpbHMvZGlzdC9lcy90aW1lLWNvbnZlcnNpb24ubWpzIl0sIm5hbWVzIjpbIm1vdGlvbl91dGlsc18xMV8xOF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImludmFyaWFudCIsIm1lbW8iLCJtaWxsaXNlY29uZHNUb1NlY29uZHMiLCJub29wIiwicHJvZ3Jlc3MiLCJzZWNvbmRzVG9NaWxsaXNlY29uZHMiLCJ3YXJuaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImFueSIsImNoZWNrIiwibWVzc2FnZSIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJjYWxsYmFjayIsInJlc3VsdCIsImZyb20iLCJ0byIsInZhbHVlIiwidG9Gcm9tRGlmZmVyZW5jZSIsInNlY29uZHMiLCJtaWxsaXNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFYLDRCQUFBOzs7QUNDQSxJQUFNSyxJQUFBLEdBQVFPLEdBQUEsSUFBUUEsR0FBQTs7O0FDQ3RCLElBQUlKLE9BQUEsR0FBVUgsSUFBQTtBQUNkLElBQUlILFNBQUEsR0FBWUcsSUFBQTtBQUNoQixJQUFJLE1BQXVDO0VBQ3ZDRyxPQUFBLEdBQVVBLENBQUNLLEtBQUEsRUFBT0MsT0FBQSxLQUFZO0lBQzFCLElBQUksQ0FBQ0QsS0FBQSxJQUFTLE9BQU9FLE9BQUEsS0FBWSxhQUFhO01BQzFDQSxPQUFBLENBQVFDLElBQUEsQ0FBS0YsT0FBTztJQUN4QjtFQUNKO0VBQ0FaLFNBQUEsR0FBWUEsQ0FBQ1csS0FBQSxFQUFPQyxPQUFBLEtBQVk7SUFDNUIsSUFBSSxDQUFDRCxLQUFBLEVBQU87TUFDUixNQUFNLElBQUlJLEtBQUEsQ0FBTUgsT0FBTztJQUMzQjtFQUNKO0FBQ0o7OztBQ2RBLFNBQVNYLEtBQUtlLFFBQUEsRUFBVTtFQUNwQixJQUFJQyxNQUFBO0VBQ0osT0FBTyxNQUFNO0lBQ1QsSUFBSUEsTUFBQSxLQUFXLFFBQ1hBLE1BQUEsR0FBU0QsUUFBQSxDQUFTO0lBQ3RCLE9BQU9DLE1BQUE7RUFDWDtBQUNKOzs7QUNLQSxJQUFNYixRQUFBLEdBQVdBLENBQUNjLElBQUEsRUFBTUMsRUFBQSxFQUFJQyxLQUFBLEtBQVU7RUFDbEMsTUFBTUMsZ0JBQUEsR0FBbUJGLEVBQUEsR0FBS0QsSUFBQTtFQUM5QixPQUFPRyxnQkFBQSxLQUFxQixJQUFJLEtBQUtELEtBQUEsR0FBUUYsSUFBQSxJQUFRRyxnQkFBQTtBQUN6RDs7O0FDVEEsSUFBTWhCLHFCQUFBLEdBQXlCaUIsT0FBQSxJQUFZQSxPQUFBLEdBQVU7QUFFckQsSUFBTXBCLHFCQUFBLEdBQXlCcUIsWUFBQSxJQUFpQkEsWUFBQSxHQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=