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

// .beyond/uimport/temp/micromark-util-character.2.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay11dGlsLWNoYXJhY3Rlci4yLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jaGFyYWN0ZXIvaW5kZXguanMiXSwibmFtZXMiOlsibWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyXzJfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImFzY2lpQWxwaGEiLCJhc2NpaUFscGhhbnVtZXJpYyIsImFzY2lpQXRleHQiLCJhc2NpaUNvbnRyb2wiLCJhc2NpaURpZ2l0IiwiYXNjaWlIZXhEaWdpdCIsImFzY2lpUHVuY3R1YXRpb24iLCJtYXJrZG93bkxpbmVFbmRpbmciLCJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwibWFya2Rvd25TcGFjZSIsInVuaWNvZGVQdW5jdHVhdGlvbiIsInVuaWNvZGVXaGl0ZXNwYWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlZ2V4Q2hlY2siLCJjb2RlIiwicmVnZXgiLCJjaGVjayIsInRlc3QiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0NBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBaEIsc0NBQUE7OztBQ3FCTyxJQUFNRSxVQUFBLEdBQWFlLFVBQUEsQ0FBVyxVQUFVO0FBY3hDLElBQU1kLGlCQUFBLEdBQW9CYyxVQUFBLENBQVcsWUFBWTtBQXVCakQsSUFBTWIsVUFBQSxHQUFhYSxVQUFBLENBQVcscUJBQXFCO0FBYW5ELFNBQVNaLGFBQWFhLElBQUEsRUFBTTtFQUNqQyxPQUdFQSxJQUFBLEtBQVMsU0FBU0EsSUFBQSxHQUFPLE1BQU1BLElBQUEsS0FBUztBQUU1QztBQWFPLElBQU1aLFVBQUEsR0FBYVcsVUFBQSxDQUFXLElBQUk7QUFvQmxDLElBQU1WLGFBQUEsR0FBZ0JVLFVBQUEsQ0FBVyxZQUFZO0FBZTdDLElBQU1ULGdCQUFBLEdBQW1CUyxVQUFBLENBQVcsZ0JBQWdCO0FBaUJwRCxTQUFTUixtQkFBbUJTLElBQUEsRUFBTTtFQUN2QyxPQUFPQSxJQUFBLEtBQVMsUUFBUUEsSUFBQSxHQUFPO0FBQ2pDO0FBV08sU0FBU1IsMEJBQTBCUSxJQUFBLEVBQU07RUFDOUMsT0FBT0EsSUFBQSxLQUFTLFNBQVNBLElBQUEsR0FBTyxLQUFLQSxJQUFBLEtBQVM7QUFDaEQ7QUFpQk8sU0FBU1AsY0FBY08sSUFBQSxFQUFNO0VBQ2xDLE9BQU9BLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTO0FBQ2hEO0FBdUJPLElBQU1OLGtCQUFBLEdBQXFCSyxVQUFBLENBQVcsY0FBYztBQXNCcEQsSUFBTUosaUJBQUEsR0FBb0JJLFVBQUEsQ0FBVyxJQUFJO0FBVWhELFNBQVNBLFdBQVdFLEtBQUEsRUFBTztFQUN6QixPQUFPQyxLQUFBO0VBVVAsU0FBU0EsTUFBTUYsSUFBQSxFQUFNO0lBQ25CLE9BQU9BLElBQUEsS0FBUyxRQUFRQSxJQUFBLEdBQU8sTUFBTUMsS0FBQSxDQUFNRSxJQUFBLENBQUtDLE1BQUEsQ0FBT0MsWUFBQSxDQUFhTCxJQUFJLENBQUM7RUFDM0U7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9