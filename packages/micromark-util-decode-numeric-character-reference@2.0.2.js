System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-decode-numeric-character-reference","2.0.2"]]);
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

// .beyond/uimport/temp/micromark-util-decode-numeric-character-reference.2.0.2.js
var micromark_util_decode_numeric_character_reference_2_0_2_exports = {};
__export(micromark_util_decode_numeric_character_reference_2_0_2_exports, {
  decodeNumericCharacterReference: () => decodeNumericCharacterReference
});
module.exports = __toCommonJS(micromark_util_decode_numeric_character_reference_2_0_2_exports);

// node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);
  if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) {
    return "\uFFFD";
  }
  return String.fromCodePoint(code);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay11dGlsLWRlY29kZS1udW1lcmljLWNoYXJhY3Rlci1yZWZlcmVuY2UuMi4wLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfdXRpbF9kZWNvZGVfbnVtZXJpY19jaGFyYWN0ZXJfcmVmZXJlbmNlXzJfMF8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlY29kZU51bWVyaWNDaGFyYWN0ZXJSZWZlcmVuY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidmFsdWUiLCJiYXNlIiwiY29kZSIsIk51bWJlciIsInBhcnNlSW50IiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsK0RBQUE7QUFBQUMsUUFBQSxDQUFBRCwrREFBQTtFQUFBRSwrQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsK0RBQUE7OztBQ2NPLFNBQVNFLGdDQUFnQ0ksS0FBQSxFQUFPQyxJQUFBLEVBQU07RUFDM0QsTUFBTUMsSUFBQSxHQUFPQyxNQUFBLENBQU9DLFFBQUEsQ0FBU0osS0FBQSxFQUFPQyxJQUFJO0VBQ3hDLElBRUFDLElBQUEsR0FBTyxLQUFLQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxHQUFPLE1BQU1BLElBQUEsR0FBTyxNQUUvQ0EsSUFBQSxHQUFPLE9BQU9BLElBQUEsR0FBTyxPQUVyQkEsSUFBQSxHQUFPLFNBQVVBLElBQUEsR0FBTyxTQUV4QkEsSUFBQSxHQUFPLFNBQVVBLElBQUEsR0FBTyxVQUN2QkEsSUFBQSxHQUFPLFdBQVksVUFBV0EsSUFBQSxHQUFPLFdBQVksU0FFbERBLElBQUEsR0FBTyxTQUFXO0lBQ2hCLE9BQU87RUFDVDtFQUNBLE9BQU9HLE1BQUEsQ0FBT0MsYUFBQSxDQUFjSixJQUFJO0FBQ2xDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=