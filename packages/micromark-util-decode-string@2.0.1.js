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

// .beyond/uimport/temp/micromark-util-decode-string.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay11dGlsLWRlY29kZS1zdHJpbmcuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLXN0cmluZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfdXRpbF9kZWNvZGVfc3RyaW5nXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlY29kZVN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZGVjb2RlX25hbWVkX2NoYXJhY3Rlcl9yZWZlcmVuY2UiLCJyZXF1aXJlIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2RlY29kZV9udW1lcmljX2NoYXJhY3Rlcl9yZWZlcmVuY2UiLCJjaGFyYWN0ZXJFc2NhcGVPclJlZmVyZW5jZSIsInZhbHVlIiwicmVwbGFjZSIsImRlY29kZSIsIiQwIiwiJDEiLCIkMiIsImhlYWQiLCJjaGFyQ29kZUF0IiwiaGVhZDIiLCJoZXgiLCJkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlIiwic2xpY2UiLCJkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMENBQUE7QUFBQUMsUUFBQSxDQUFBRCwwQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCwwQ0FBQTs7O0FDQUEsSUFBQU0sdUNBQUEsR0FBOENDLE9BQUE7QUFDOUMsSUFBQUMsd0RBQUEsR0FBZ0RELE9BQUE7QUFDaEQsSUFBTUUsMEJBQUEsR0FBNkI7QUFjNUIsU0FBU1AsYUFBYVEsS0FBQSxFQUFPO0VBQ2xDLE9BQU9BLEtBQUEsQ0FBTUMsT0FBQSxDQUFRRiwwQkFBQSxFQUE0QkcsTUFBTTtBQUN6RDtBQVlBLFNBQVNBLE9BQU9DLEVBQUEsRUFBSUMsRUFBQSxFQUFJQyxFQUFBLEVBQUk7RUFDMUIsSUFBSUQsRUFBQSxFQUFJO0lBRU4sT0FBT0EsRUFBQTtFQUNUO0VBR0EsTUFBTUUsSUFBQSxHQUFPRCxFQUFBLENBQUdFLFVBQUEsQ0FBVyxDQUFDO0VBQzVCLElBQUlELElBQUEsS0FBUyxJQUFJO0lBQ2YsTUFBTUUsS0FBQSxHQUFPSCxFQUFBLENBQUdFLFVBQUEsQ0FBVyxDQUFDO0lBQzVCLE1BQU1FLEdBQUEsR0FBTUQsS0FBQSxLQUFTLE9BQU9BLEtBQUEsS0FBUztJQUNyQyxXQUFPVix3REFBQSxDQUFBWSwrQkFBQSxFQUFnQ0wsRUFBQSxDQUFHTSxLQUFBLENBQU1GLEdBQUEsR0FBTSxJQUFJLENBQUMsR0FBR0EsR0FBQSxHQUFNLEtBQUssRUFBRTtFQUM3RTtFQUNBLFdBQU9iLHVDQUFBLENBQUFnQiw2QkFBQSxFQUE4QlAsRUFBRSxLQUFLRixFQUFBO0FBQzlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=