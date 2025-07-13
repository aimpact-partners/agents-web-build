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

// .beyond/uimport/@radix-ui/primitive.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcHJpbWl0aXZlLjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9wcmltaXRpdmUvc3JjL3ByaW1pdGl2ZS50c3giXSwibmFtZXMiOlsicHJpbWl0aXZlXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNvbXBvc2VFdmVudEhhbmRsZXJzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIm9yaWdpbmFsRXZlbnRIYW5kbGVyIiwib3VyRXZlbnRIYW5kbGVyIiwiY2hlY2tGb3JEZWZhdWx0UHJldmVudGVkIiwiaGFuZGxlRXZlbnQiLCJldmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUJBQUE7RUFBQUUsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLHVCQUFBOzs7QUNBQSxTQUFTRSxxQkFDUEksb0JBQUEsRUFDQUMsZUFBQSxFQUNBO0VBQUVDLHdCQUFBLEdBQTJCO0FBQUssSUFBSSxDQUFDLEdBQ3ZDO0VBQ0EsT0FBTyxTQUFTQyxZQUFZQyxLQUFBLEVBQVU7SUFDcENKLG9CQUFBLEdBQXVCSSxLQUFLO0lBRTVCLElBQUlGLHdCQUFBLEtBQTZCLFNBQVMsQ0FBQ0UsS0FBQSxDQUFNQyxnQkFBQSxFQUFrQjtNQUNqRSxPQUFPSixlQUFBLEdBQWtCRyxLQUFLO0lBQ2hDO0VBQ0Y7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=