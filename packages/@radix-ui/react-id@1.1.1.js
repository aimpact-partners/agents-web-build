System.register(["react@18.3.1","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-id","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@radix-ui/react-id.1.1.1.js
var react_id_1_1_1_exports = {};
__export(react_id_1_1_1_exports, {
  useId: () => useId
});
module.exports = __toCommonJS(react_id_1_1_1_exports);

// node_modules/@radix-ui/react-id/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var useReactId = React[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React.useState(useReactId());
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (!deterministicId) setId(reactId => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1pZC4xLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtaWQvc3JjL2lkLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9pZF8xXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJ1c2VJZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwidXNlUmVhY3RJZCIsInRyaW0iLCJ0b1N0cmluZyIsImNvdW50IiwiZGV0ZXJtaW5pc3RpY0lkIiwiaWQiLCJzZXRJZCIsInVzZVN0YXRlIiwidXNlTGF5b3V0RWZmZWN0IiwicmVhY3RJZCIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxzQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxzQkFBQTs7O0FDQUEsSUFBQU0sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLDhCQUFBLEdBQWdDRCxPQUFBO0FBR2hDLElBQU1FLFVBQUEsR0FBY0osS0FBQSxDQUFjLFVBQVVLLElBQUEsQ0FBSyxFQUFFQyxRQUFBLENBQVMsT0FBTyxNQUFNO0FBQ3pFLElBQUlDLEtBQUEsR0FBUTtBQUVaLFNBQVNYLE1BQU1ZLGVBQUEsRUFBa0M7RUFDL0MsTUFBTSxDQUFDQyxFQUFBLEVBQUlDLEtBQUssSUFBVVYsS0FBQSxDQUFBVyxRQUFBLENBQTZCUCxVQUFBLENBQVcsQ0FBQztFQUVuRSxJQUFBRCw4QkFBQSxDQUFBUyxlQUFBLEVBQWdCLE1BQU07SUFDcEIsSUFBSSxDQUFDSixlQUFBLEVBQWlCRSxLQUFBLENBQU9HLE9BQUEsSUFBWUEsT0FBQSxJQUFXQyxNQUFBLENBQU9QLEtBQUEsRUFBTyxDQUFDO0VBQ3JFLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDO0VBQ3BCLE9BQU9BLGVBQUEsS0FBb0JDLEVBQUEsR0FBSyxTQUFTQSxFQUFBLEtBQU87QUFDbEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==