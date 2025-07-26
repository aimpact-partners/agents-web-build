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

// .beyond/uimport/temp/longest-streak.3.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2xvbmdlc3Qtc3RyZWFrLjMuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvbmdlc3Qtc3RyZWFrL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvbmdlc3Rfc3RyZWFrXzNfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImxvbmdlc3RTdHJlYWsiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidmFsdWUiLCJzdWJzdHJpbmciLCJzb3VyY2UiLCJTdHJpbmciLCJpbmRleCIsImluZGV4T2YiLCJleHBlY3RlZCIsImNvdW50IiwibWF4IiwiVHlwZUVycm9yIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw0QkFBQTtBQUFBQyxRQUFBLENBQUFELDRCQUFBO0VBQUFFLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDRCQUFBOzs7QUNVTyxTQUFTRSxjQUFjSSxLQUFBLEVBQU9DLFNBQUEsRUFBVztFQUM5QyxNQUFNQyxNQUFBLEdBQVNDLE1BQUEsQ0FBT0gsS0FBSztFQUMzQixJQUFJSSxLQUFBLEdBQVFGLE1BQUEsQ0FBT0csT0FBQSxDQUFRSixTQUFTO0VBQ3BDLElBQUlLLFFBQUEsR0FBV0YsS0FBQTtFQUNmLElBQUlHLEtBQUEsR0FBUTtFQUNaLElBQUlDLEdBQUEsR0FBTTtFQUVWLElBQUksT0FBT1AsU0FBQSxLQUFjLFVBQVU7SUFDakMsTUFBTSxJQUFJUSxTQUFBLENBQVUsb0JBQW9CO0VBQzFDO0VBRUEsT0FBT0wsS0FBQSxLQUFVLElBQUk7SUFDbkIsSUFBSUEsS0FBQSxLQUFVRSxRQUFBLEVBQVU7TUFDdEIsSUFBSSxFQUFFQyxLQUFBLEdBQVFDLEdBQUEsRUFBSztRQUNqQkEsR0FBQSxHQUFNRCxLQUFBO01BQ1I7SUFDRixPQUFPO01BQ0xBLEtBQUEsR0FBUTtJQUNWO0lBRUFELFFBQUEsR0FBV0YsS0FBQSxHQUFRSCxTQUFBLENBQVVTLE1BQUE7SUFDN0JOLEtBQUEsR0FBUUYsTUFBQSxDQUFPRyxPQUFBLENBQVFKLFNBQUEsRUFBV0ssUUFBUTtFQUM1QztFQUVBLE9BQU9FLEdBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9