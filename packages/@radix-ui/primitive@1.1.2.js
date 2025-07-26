System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@radix-ui/primitive","1.1.2"]]);
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

// .beyond/uimport/temp/@radix-ui/primitive.1.1.2.js
var primitive_1_1_2_exports = {};
__export(primitive_1_1_2_exports, {
  composeEventHandlers: () => composeEventHandlers
});
module.exports = __toCommonJS(primitive_1_1_2_exports);

// node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, {
  checkForDefaultPrevented = true
} = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9wcmltaXRpdmUuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3ByaW1pdGl2ZS9zcmMvcHJpbWl0aXZlLnRzeCJdLCJuYW1lcyI6WyJwcmltaXRpdmVfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY29tcG9zZUV2ZW50SGFuZGxlcnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3JpZ2luYWxFdmVudEhhbmRsZXIiLCJvdXJFdmVudEhhbmRsZXIiLCJjaGVja0ZvckRlZmF1bHRQcmV2ZW50ZWQiLCJoYW5kbGVFdmVudCIsImV2ZW50IiwiZGVmYXVsdFByZXZlbnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsdUJBQUE7OztBQ0FBLFNBQVNFLHFCQUNQSSxvQkFBQSxFQUNBQyxlQUFBLEVBQ0E7RUFBRUMsd0JBQUEsR0FBMkI7QUFBSyxJQUFJLENBQUMsR0FDdkM7RUFDQSxPQUFPLFNBQVNDLFlBQVlDLEtBQUEsRUFBVTtJQUNwQ0osb0JBQUEsR0FBdUJJLEtBQUs7SUFFNUIsSUFBSUYsd0JBQUEsS0FBNkIsU0FBUyxDQUFDRSxLQUFBLENBQU1DLGdCQUFBLEVBQWtCO01BQ2pFLE9BQU9KLGVBQUEsR0FBa0JHLEtBQUs7SUFDaEM7RUFDRjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=