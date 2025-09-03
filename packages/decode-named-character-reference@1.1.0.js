System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["decode-named-character-reference","1.1.0"]]);
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

// .beyond/uimport/decode-named-character-reference.1.1.0.js
var decode_named_character_reference_1_1_0_exports = {};
__export(decode_named_character_reference_1_1_0_exports, {
  decodeNamedCharacterReference: () => decodeNamedCharacterReference
});
module.exports = __toCommonJS(decode_named_character_reference_1_1_0_exports);

// node_modules/decode-named-character-reference/index.dom.js
var element = document.createElement("i");
function decodeNamedCharacterReference(value) {
  const characterReference = "&" + value + ";";
  element.innerHTML = characterReference;
  const character = element.textContent;
  if (character.charCodeAt(character.length - 1) === 59 && value !== "semi") {
    return false;
  }
  return character === characterReference ? false : character;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZS4xLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZWNvZGUtbmFtZWQtY2hhcmFjdGVyLXJlZmVyZW5jZS9pbmRleC5kb20uanMiXSwibmFtZXMiOlsiZGVjb2RlX25hbWVkX2NoYXJhY3Rlcl9yZWZlcmVuY2VfMV8xXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwiY2hhcmFjdGVyUmVmZXJlbmNlIiwiaW5uZXJIVE1MIiwiY2hhcmFjdGVyIiwidGV4dENvbnRlbnQiLCJjaGFyQ29kZUF0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4Q0FBQTtBQUFBQyxRQUFBLENBQUFELDhDQUFBO0VBQUFFLDZCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw4Q0FBQTs7O0FDSUEsSUFBTU0sT0FBQSxHQUFVQyxRQUFBLENBQVNDLGFBQUEsQ0FBYyxHQUFHO0FBTW5DLFNBQVNOLDhCQUE4Qk8sS0FBQSxFQUFPO0VBQ25ELE1BQU1DLGtCQUFBLEdBQXFCLE1BQU1ELEtBQUEsR0FBUTtFQUN6Q0gsT0FBQSxDQUFRSyxTQUFBLEdBQVlELGtCQUFBO0VBQ3BCLE1BQU1FLFNBQUEsR0FBWU4sT0FBQSxDQUFRTyxXQUFBO0VBUTFCLElBR0VELFNBQUEsQ0FBVUUsVUFBQSxDQUFXRixTQUFBLENBQVVHLE1BQUEsR0FBUyxDQUFDLE1BQU0sTUFDL0NOLEtBQUEsS0FBVSxRQUNWO0lBQ0EsT0FBTztFQUNUO0VBTUEsT0FBT0csU0FBQSxLQUFjRixrQkFBQSxHQUFxQixRQUFRRSxTQUFBO0FBQ3BEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=