System.register(["decode-named-character-reference@1.1.0","micromark-util-decode-numeric-character-reference@2.0.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["decode-named-character-reference","1.1.0"],["micromark-util-decode-numeric-character-reference","2.0.2"],["micromark-util-decode-string","2.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('decode-named-character-reference@1.1.0', dep), dep => dependencies.set('micromark-util-decode-numeric-character-reference@2.0.2', dep)],
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

// .beyond/uimport/micromark-util-decode-string.2.0.1.js
var micromark_util_decode_string_2_0_1_exports = {};
__export(micromark_util_decode_string_2_0_1_exports, {
  decodeString: () => decodeString
});
module.exports = __toCommonJS(micromark_util_decode_string_2_0_1_exports);

// node_modules/micromark-util-decode-string/index.js
var import_decode_named_character_reference = require("decode-named-character-reference@1.1.0");
var import_micromark_util_decode_numeric_character_reference = require("micromark-util-decode-numeric-character-reference@2.0.2");
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === 35) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === 120 || head2 === 88;
    return (0, import_micromark_util_decode_numeric_character_reference.decodeNumericCharacterReference)($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return (0, import_decode_named_character_reference.decodeNamedCharacterReference)($2) || $0;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1kZWNvZGUtc3RyaW5nLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmcvaW5kZXguanMiXSwibmFtZXMiOlsibWljcm9tYXJrX3V0aWxfZGVjb2RlX3N0cmluZ18yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJkZWNvZGVTdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2RlY29kZV9uYW1lZF9jaGFyYWN0ZXJfcmVmZXJlbmNlIiwicmVxdWlyZSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9kZWNvZGVfbnVtZXJpY19jaGFyYWN0ZXJfcmVmZXJlbmNlIiwiY2hhcmFjdGVyRXNjYXBlT3JSZWZlcmVuY2UiLCJ2YWx1ZSIsInJlcGxhY2UiLCJkZWNvZGUiLCIkMCIsIiQxIiwiJDIiLCJoZWFkIiwiY2hhckNvZGVBdCIsImhlYWQyIiwiaGV4IiwiZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZSIsInNsaWNlIiwiZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDBDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMENBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsMENBQUE7OztBQ0FBLElBQUFNLHVDQUFBLEdBQThDQyxPQUFBO0FBQzlDLElBQUFDLHdEQUFBLEdBQWdERCxPQUFBO0FBQ2hELElBQU1FLDBCQUFBLEdBQTZCO0FBYzVCLFNBQVNQLGFBQWFRLEtBQUEsRUFBTztFQUNsQyxPQUFPQSxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsMEJBQUEsRUFBNEJHLE1BQU07QUFDekQ7QUFZQSxTQUFTQSxPQUFPQyxFQUFBLEVBQUlDLEVBQUEsRUFBSUMsRUFBQSxFQUFJO0VBQzFCLElBQUlELEVBQUEsRUFBSTtJQUVOLE9BQU9BLEVBQUE7RUFDVDtFQUdBLE1BQU1FLElBQUEsR0FBT0QsRUFBQSxDQUFHRSxVQUFBLENBQVcsQ0FBQztFQUM1QixJQUFJRCxJQUFBLEtBQVMsSUFBSTtJQUNmLE1BQU1FLEtBQUEsR0FBT0gsRUFBQSxDQUFHRSxVQUFBLENBQVcsQ0FBQztJQUM1QixNQUFNRSxHQUFBLEdBQU1ELEtBQUEsS0FBUyxPQUFPQSxLQUFBLEtBQVM7SUFDckMsV0FBT1Ysd0RBQUEsQ0FBQVksK0JBQUEsRUFBZ0NMLEVBQUEsQ0FBR00sS0FBQSxDQUFNRixHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUdBLEdBQUEsR0FBTSxLQUFLLEVBQUU7RUFDN0U7RUFDQSxXQUFPYix1Q0FBQSxDQUFBZ0IsNkJBQUEsRUFBOEJQLEVBQUUsS0FBS0YsRUFBQTtBQUM5QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=