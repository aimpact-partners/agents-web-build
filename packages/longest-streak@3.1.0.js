System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["longest-streak","3.1.0"]]);
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

// .beyond/uimport/longest-streak.3.1.0.js
var longest_streak_3_1_0_exports = {};
__export(longest_streak_3_1_0_exports, {
  longestStreak: () => longestStreak
});
module.exports = __toCommonJS(longest_streak_3_1_0_exports);

// node_modules/longest-streak/index.js
function longestStreak(value, substring) {
  const source = String(value);
  let index = source.indexOf(substring);
  let expected = index;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index !== -1) {
    if (index === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index + substring.length;
    index = source.indexOf(substring, expected);
  }
  return max;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9sb25nZXN0LXN0cmVhay4zLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb25nZXN0LXN0cmVhay9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb25nZXN0X3N0cmVha18zXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJsb25nZXN0U3RyZWFrIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInZhbHVlIiwic3Vic3RyaW5nIiwic291cmNlIiwiU3RyaW5nIiwiaW5kZXgiLCJpbmRleE9mIiwiZXhwZWN0ZWQiLCJjb3VudCIsIm1heCIsIlR5cGVFcnJvciIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxhQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw0QkFBQTs7O0FDVU8sU0FBU0UsY0FBY0ksS0FBQSxFQUFPQyxTQUFBLEVBQVc7RUFDOUMsTUFBTUMsTUFBQSxHQUFTQyxNQUFBLENBQU9ILEtBQUs7RUFDM0IsSUFBSUksS0FBQSxHQUFRRixNQUFBLENBQU9HLE9BQUEsQ0FBUUosU0FBUztFQUNwQyxJQUFJSyxRQUFBLEdBQVdGLEtBQUE7RUFDZixJQUFJRyxLQUFBLEdBQVE7RUFDWixJQUFJQyxHQUFBLEdBQU07RUFFVixJQUFJLE9BQU9QLFNBQUEsS0FBYyxVQUFVO0lBQ2pDLE1BQU0sSUFBSVEsU0FBQSxDQUFVLG9CQUFvQjtFQUMxQztFQUVBLE9BQU9MLEtBQUEsS0FBVSxJQUFJO0lBQ25CLElBQUlBLEtBQUEsS0FBVUUsUUFBQSxFQUFVO01BQ3RCLElBQUksRUFBRUMsS0FBQSxHQUFRQyxHQUFBLEVBQUs7UUFDakJBLEdBQUEsR0FBTUQsS0FBQTtNQUNSO0lBQ0YsT0FBTztNQUNMQSxLQUFBLEdBQVE7SUFDVjtJQUVBRCxRQUFBLEdBQVdGLEtBQUEsR0FBUUgsU0FBQSxDQUFVUyxNQUFBO0lBQzdCTixLQUFBLEdBQVFGLE1BQUEsQ0FBT0csT0FBQSxDQUFRSixTQUFBLEVBQVdLLFFBQVE7RUFDNUM7RUFFQSxPQUFPRSxHQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9