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

// .beyond/uimport/temp/decode-named-character-reference.1.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2RlY29kZS1uYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlLjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RlY29kZS1uYW1lZC1jaGFyYWN0ZXItcmVmZXJlbmNlL2luZGV4LmRvbS5qcyJdLCJuYW1lcyI6WyJkZWNvZGVfbmFtZWRfY2hhcmFjdGVyX3JlZmVyZW5jZV8xXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWNvZGVOYW1lZENoYXJhY3RlclJlZmVyZW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJjaGFyYWN0ZXJSZWZlcmVuY2UiLCJpbm5lckhUTUwiLCJjaGFyYWN0ZXIiLCJ0ZXh0Q29udGVudCIsImNoYXJDb2RlQXQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOENBQUE7RUFBQUUsNkJBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDhDQUFBOzs7QUNJQSxJQUFNTSxPQUFBLEdBQVVDLFFBQUEsQ0FBU0MsYUFBQSxDQUFjLEdBQUc7QUFNbkMsU0FBU04sOEJBQThCTyxLQUFBLEVBQU87RUFDbkQsTUFBTUMsa0JBQUEsR0FBcUIsTUFBTUQsS0FBQSxHQUFRO0VBQ3pDSCxPQUFBLENBQVFLLFNBQUEsR0FBWUQsa0JBQUE7RUFDcEIsTUFBTUUsU0FBQSxHQUFZTixPQUFBLENBQVFPLFdBQUE7RUFRMUIsSUFHRUQsU0FBQSxDQUFVRSxVQUFBLENBQVdGLFNBQUEsQ0FBVUcsTUFBQSxHQUFTLENBQUMsTUFBTSxNQUMvQ04sS0FBQSxLQUFVLFFBQ1Y7SUFDQSxPQUFPO0VBQ1Q7RUFNQSxPQUFPRyxTQUFBLEtBQWNGLGtCQUFBLEdBQXFCLFFBQVFFLFNBQUE7QUFDcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==