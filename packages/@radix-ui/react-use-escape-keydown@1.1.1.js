System.register(["react@18.3.1","@radix-ui/react-use-callback-ref@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-callback-ref","1.1.1"],["@radix-ui/react-use-escape-keydown","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-callback-ref@1.1.1', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-use-escape-keydown.1.1.1.js
var react_use_escape_keydown_1_1_1_exports = {};
__export(react_use_escape_keydown_1_1_1_exports, {
  useEscapeKeydown: () => useEscapeKeydown
});
module.exports = __toCommonJS(react_use_escape_keydown_1_1_1_exports);

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_use_callback_ref = require("@radix-ui/react-use-callback-ref@1.1.1");
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = (0, import_react_use_callback_ref.useCallbackRef)(onEscapeKeyDownProp);
  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, {
      capture: true
    });
  }, [onEscapeKeyDown, ownerDocument]);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtZXNjYXBlLWtleWRvd24uMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1lc2NhcGUta2V5ZG93bi9zcmMvdXNlLWVzY2FwZS1rZXlkb3duLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfZXNjYXBlX2tleWRvd25fMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwidXNlRXNjYXBlS2V5ZG93biIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X3VzZV9jYWxsYmFja19yZWYiLCJvbkVzY2FwZUtleURvd25Qcm9wIiwib3duZXJEb2N1bWVudCIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsIm9uRXNjYXBlS2V5RG93biIsInVzZUNhbGxiYWNrUmVmIiwidXNlRWZmZWN0IiwiaGFuZGxlS2V5RG93biIsImV2ZW50Iiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQ0FBQTtBQUFBQyxRQUFBLENBQUFELHNDQUFBO0VBQUFFLGdCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxzQ0FBQTs7O0FDQUEsSUFBQU0sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLDZCQUFBLEdBQStCRCxPQUFBO0FBSy9CLFNBQVNOLGlCQUNQUSxtQkFBQSxFQUNBQyxhQUFBLEdBQTBCQyxVQUFBLEVBQVlDLFFBQUEsRUFDdEM7RUFDQSxNQUFNQyxlQUFBLE9BQWtCTCw2QkFBQSxDQUFBTSxjQUFBLEVBQWVMLG1CQUFtQjtFQUVwREosS0FBQSxDQUFBVSxTQUFBLENBQVUsTUFBTTtJQUNwQixNQUFNQyxhQUFBLEdBQWlCQyxLQUFBLElBQXlCO01BQzlDLElBQUlBLEtBQUEsQ0FBTUMsR0FBQSxLQUFRLFVBQVU7UUFDMUJMLGVBQUEsQ0FBZ0JJLEtBQUs7TUFDdkI7SUFDRjtJQUNBUCxhQUFBLENBQWNTLGdCQUFBLENBQWlCLFdBQVdILGFBQUEsRUFBZTtNQUFFSSxPQUFBLEVBQVM7SUFBSyxDQUFDO0lBQzFFLE9BQU8sTUFBTVYsYUFBQSxDQUFjVyxtQkFBQSxDQUFvQixXQUFXTCxhQUFBLEVBQWU7TUFBRUksT0FBQSxFQUFTO0lBQUssQ0FBQztFQUM1RixHQUFHLENBQUNQLGVBQUEsRUFBaUJILGFBQWEsQ0FBQztBQUNyQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9