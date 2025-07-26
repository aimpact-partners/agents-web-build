System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-normalize-identifier","2.0.1"]]);
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

// .beyond/uimport/micromark-util-normalize-identifier.2.0.1.js
var micromark_util_normalize_identifier_2_0_1_exports = {};
__export(micromark_util_normalize_identifier_2_0_1_exports, {
  normalizeIdentifier: () => normalizeIdentifier
});
module.exports = __toCommonJS(micromark_util_normalize_identifier_2_0_1_exports);

// node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllci4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1ub3JtYWxpemUtaWRlbnRpZmllci9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfdXRpbF9ub3JtYWxpemVfaWRlbnRpZmllcl8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJub3JtYWxpemVJZGVudGlmaWVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInZhbHVlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGlEQUFBO0FBQUFDLFFBQUEsQ0FBQUQsaURBQUE7RUFBQUUsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLGlEQUFBOzs7QUNtQk8sU0FBU0Usb0JBQW9CSSxLQUFBLEVBQU87RUFDekMsT0FBT0EsS0FBQSxDQUVOQyxPQUFBLENBQVEsZUFBZSxHQUFHLEVBRTFCQSxPQUFBLENBQVEsVUFBVSxFQUFFLEVBT3BCQyxXQUFBLENBQVksRUFBRUMsV0FBQSxDQUFZO0FBQzdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=