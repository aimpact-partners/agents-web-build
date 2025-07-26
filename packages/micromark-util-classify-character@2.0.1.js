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

// .beyond/uimport/micromark-util-classify-character.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1jbGFzc2lmeS1jaGFyYWN0ZXIuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2xhc3NpZnktY2hhcmFjdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya191dGlsX2NsYXNzaWZ5X2NoYXJhY3Rlcl8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJjbGFzc2lmeUNoYXJhY3RlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyIiwicmVxdWlyZSIsImNvZGUiLCJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwidW5pY29kZVdoaXRlc3BhY2UiLCJ1bmljb2RlUHVuY3R1YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsK0NBQUE7RUFBQUUsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLCtDQUFBOzs7QUNJQSxJQUFBTSwrQkFBQSxHQUFpRkMsT0FBQTtBQWUxRSxTQUFTTCxrQkFBa0JNLElBQUEsRUFBTTtFQUN0QyxJQUFJQSxJQUFBLEtBQVMsWUFBUUYsK0JBQUEsQ0FBQUcseUJBQUEsRUFBMEJELElBQUksU0FBS0YsK0JBQUEsQ0FBQUksaUJBQUEsRUFBa0JGLElBQUksR0FBRztJQUMvRSxPQUFPO0VBQ1Q7RUFDQSxRQUFJRiwrQkFBQSxDQUFBSyxrQkFBQSxFQUFtQkgsSUFBSSxHQUFHO0lBQzVCLE9BQU87RUFDVDtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=