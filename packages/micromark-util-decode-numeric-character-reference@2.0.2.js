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

// .beyond/uimport/micromark-util-decode-numeric-character-reference.2.0.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1kZWNvZGUtbnVtZXJpYy1jaGFyYWN0ZXItcmVmZXJlbmNlLjIuMC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1udW1lcmljLWNoYXJhY3Rlci1yZWZlcmVuY2UvaW5kZXguanMiXSwibmFtZXMiOlsibWljcm9tYXJrX3V0aWxfZGVjb2RlX251bWVyaWNfY2hhcmFjdGVyX3JlZmVyZW5jZV8yXzBfMl9leHBvcnRzIiwiX19leHBvcnQiLCJkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInZhbHVlIiwiYmFzZSIsImNvZGUiLCJOdW1iZXIiLCJwYXJzZUludCIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtEQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0RBQUE7RUFBQUUsK0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLCtEQUFBOzs7QUNjTyxTQUFTRSxnQ0FBZ0NJLEtBQUEsRUFBT0MsSUFBQSxFQUFNO0VBQzNELE1BQU1DLElBQUEsR0FBT0MsTUFBQSxDQUFPQyxRQUFBLENBQVNKLEtBQUEsRUFBT0MsSUFBSTtFQUN4QyxJQUVBQyxJQUFBLEdBQU8sS0FBS0EsSUFBQSxLQUFTLE1BQU1BLElBQUEsR0FBTyxNQUFNQSxJQUFBLEdBQU8sTUFFL0NBLElBQUEsR0FBTyxPQUFPQSxJQUFBLEdBQU8sT0FFckJBLElBQUEsR0FBTyxTQUFVQSxJQUFBLEdBQU8sU0FFeEJBLElBQUEsR0FBTyxTQUFVQSxJQUFBLEdBQU8sVUFDdkJBLElBQUEsR0FBTyxXQUFZLFVBQVdBLElBQUEsR0FBTyxXQUFZLFNBRWxEQSxJQUFBLEdBQU8sU0FBVztJQUNoQixPQUFPO0VBQ1Q7RUFDQSxPQUFPRyxNQUFBLENBQU9DLGFBQUEsQ0FBY0osSUFBSTtBQUNsQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9