System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"]]);
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

// .beyond/uimport/micromark-util-character.2.1.1.js
var micromark_util_character_2_1_1_exports = {};
__export(micromark_util_character_2_1_1_exports, {
  asciiAlpha: () => asciiAlpha,
  asciiAlphanumeric: () => asciiAlphanumeric,
  asciiAtext: () => asciiAtext,
  asciiControl: () => asciiControl,
  asciiDigit: () => asciiDigit,
  asciiHexDigit: () => asciiHexDigit,
  asciiPunctuation: () => asciiPunctuation,
  markdownLineEnding: () => markdownLineEnding,
  markdownLineEndingOrSpace: () => markdownLineEndingOrSpace,
  markdownSpace: () => markdownSpace,
  unicodePunctuation: () => unicodePunctuation,
  unicodeWhitespace: () => unicodeWhitespace
});
module.exports = __toCommonJS(micromark_util_character_2_1_1_exports);

// node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/);
var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code) {
  return code !== null && (code < 32 || code === 127);
}
var asciiDigit = regexCheck(/\d/);
var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code) {
  return code !== null && code < -2;
}
function markdownLineEndingOrSpace(code) {
  return code !== null && (code < 0 || code === 32);
}
function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32;
}
var unicodePunctuation = regexCheck(/\p{P}|\p{S}/u);
var unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex) {
  return check;
  function check(code) {
    return code !== null && code > -1 && regex.test(String.fromCharCode(code));
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1jaGFyYWN0ZXIuMi4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya191dGlsX2NoYXJhY3Rlcl8yXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJhc2NpaUFscGhhIiwiYXNjaWlBbHBoYW51bWVyaWMiLCJhc2NpaUF0ZXh0IiwiYXNjaWlDb250cm9sIiwiYXNjaWlEaWdpdCIsImFzY2lpSGV4RGlnaXQiLCJhc2NpaVB1bmN0dWF0aW9uIiwibWFya2Rvd25MaW5lRW5kaW5nIiwibWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSIsIm1hcmtkb3duU3BhY2UiLCJ1bmljb2RlUHVuY3R1YXRpb24iLCJ1bmljb2RlV2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJyZWdleENoZWNrIiwiY29kZSIsInJlZ2V4IiwiY2hlY2siLCJ0ZXN0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQ0FBQTtBQUFBQyxRQUFBLENBQUFELHNDQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWhCLHNDQUFBOzs7QUNxQk8sSUFBTUUsVUFBQSxHQUFhZSxVQUFBLENBQVcsVUFBVTtBQWN4QyxJQUFNZCxpQkFBQSxHQUFvQmMsVUFBQSxDQUFXLFlBQVk7QUF1QmpELElBQU1iLFVBQUEsR0FBYWEsVUFBQSxDQUFXLHFCQUFxQjtBQWFuRCxTQUFTWixhQUFhYSxJQUFBLEVBQU07RUFDakMsT0FHRUEsSUFBQSxLQUFTLFNBQVNBLElBQUEsR0FBTyxNQUFNQSxJQUFBLEtBQVM7QUFFNUM7QUFhTyxJQUFNWixVQUFBLEdBQWFXLFVBQUEsQ0FBVyxJQUFJO0FBb0JsQyxJQUFNVixhQUFBLEdBQWdCVSxVQUFBLENBQVcsWUFBWTtBQWU3QyxJQUFNVCxnQkFBQSxHQUFtQlMsVUFBQSxDQUFXLGdCQUFnQjtBQWlCcEQsU0FBU1IsbUJBQW1CUyxJQUFBLEVBQU07RUFDdkMsT0FBT0EsSUFBQSxLQUFTLFFBQVFBLElBQUEsR0FBTztBQUNqQztBQVdPLFNBQVNSLDBCQUEwQlEsSUFBQSxFQUFNO0VBQzlDLE9BQU9BLElBQUEsS0FBUyxTQUFTQSxJQUFBLEdBQU8sS0FBS0EsSUFBQSxLQUFTO0FBQ2hEO0FBaUJPLFNBQVNQLGNBQWNPLElBQUEsRUFBTTtFQUNsQyxPQUFPQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLE1BQU1BLElBQUEsS0FBUztBQUNoRDtBQXVCTyxJQUFNTixrQkFBQSxHQUFxQkssVUFBQSxDQUFXLGNBQWM7QUFzQnBELElBQU1KLGlCQUFBLEdBQW9CSSxVQUFBLENBQVcsSUFBSTtBQVVoRCxTQUFTQSxXQUFXRSxLQUFBLEVBQU87RUFDekIsT0FBT0MsS0FBQTtFQVVQLFNBQVNBLE1BQU1GLElBQUEsRUFBTTtJQUNuQixPQUFPQSxJQUFBLEtBQVMsUUFBUUEsSUFBQSxHQUFPLE1BQU1DLEtBQUEsQ0FBTUUsSUFBQSxDQUFLQyxNQUFBLENBQU9DLFlBQUEsQ0FBYUwsSUFBSSxDQUFDO0VBQzNFO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9