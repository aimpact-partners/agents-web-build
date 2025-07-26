System.register(["micromark-util-character@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-util-classify-character","2.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('micromark-util-character@2.1.1', dep)],
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

// .beyond/uimport/temp/micromark-util-classify-character.2.0.1.js
var micromark_util_classify_character_2_0_1_exports = {};
__export(micromark_util_classify_character_2_0_1_exports, {
  classifyCharacter: () => classifyCharacter
});
module.exports = __toCommonJS(micromark_util_classify_character_2_0_1_exports);

// node_modules/micromark-util-classify-character/index.js
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function classifyCharacter(code) {
  if (code === null || (0, import_micromark_util_character.markdownLineEndingOrSpace)(code) || (0, import_micromark_util_character.unicodeWhitespace)(code)) {
    return 1;
  }
  if ((0, import_micromark_util_character.unicodePunctuation)(code)) {
    return 2;
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay11dGlsLWNsYXNzaWZ5LWNoYXJhY3Rlci4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXIvaW5kZXguanMiXSwibmFtZXMiOlsibWljcm9tYXJrX3V0aWxfY2xhc3NpZnlfY2hhcmFjdGVyXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNsYXNzaWZ5Q2hhcmFjdGVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXIiLCJyZXF1aXJlIiwiY29kZSIsIm1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UiLCJ1bmljb2RlV2hpdGVzcGFjZSIsInVuaWNvZGVQdW5jdHVhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsK0NBQUE7QUFBQUMsUUFBQSxDQUFBRCwrQ0FBQTtFQUFBRSxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsK0NBQUE7OztBQ0lBLElBQUFNLCtCQUFBLEdBQWlGQyxPQUFBO0FBZTFFLFNBQVNMLGtCQUFrQk0sSUFBQSxFQUFNO0VBQ3RDLElBQUlBLElBQUEsS0FBUyxZQUFRRiwrQkFBQSxDQUFBRyx5QkFBQSxFQUEwQkQsSUFBSSxTQUFLRiwrQkFBQSxDQUFBSSxpQkFBQSxFQUFrQkYsSUFBSSxHQUFHO0lBQy9FLE9BQU87RUFDVDtFQUNBLFFBQUlGLCtCQUFBLENBQUFLLGtCQUFBLEVBQW1CSCxJQUFJLEdBQUc7SUFDNUIsT0FBTztFQUNUO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==