System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-slot@1.2.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.2"],["@radix-ui/react-primitive","2.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.2', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-primitive.2.1.2.js
var react_primitive_2_1_2_exports = {};
__export(react_primitive_2_1_2_exports, {
  Primitive: () => Primitive,
  Root: () => Root,
  dispatchDiscreteCustomEvent: () => dispatchDiscreteCustomEvent
});
module.exports = __toCommonJS(react_primitive_2_1_2_exports);

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var ReactDOM = __toESM(require("react-dom@18.3.1"), 0);
var import_react_slot = require("@radix-ui/react-slot@1.2.2");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var NODES = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = (0, import_react_slot.createSlot)(`Primitive.${node}`);
  const Node = React.forwardRef((props, forwardedRef) => {
    const {
      asChild,
      ...primitiveProps
    } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Comp, {
      ...primitiveProps,
      ref: forwardedRef
    });
  });
  Node.displayName = `Primitive.${node}`;
  return {
    ...primitive,
    [node]: Node
  };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) ReactDOM.flushSync(() => target.dispatchEvent(event));
}
var Root = Primitive;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUuMi4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZS9zcmMvcHJpbWl0aXZlLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9wcmltaXRpdmVfMl8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUHJpbWl0aXZlIiwiUm9vdCIsImRpc3BhdGNoRGlzY3JldGVDdXN0b21FdmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiUmVhY3RET00iLCJpbXBvcnRfcmVhY3Rfc2xvdCIsImltcG9ydF9qc3hfcnVudGltZSIsIk5PREVTIiwicmVkdWNlIiwicHJpbWl0aXZlIiwibm9kZSIsIlNsb3QiLCJjcmVhdGVTbG90IiwiTm9kZSIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImFzQ2hpbGQiLCJwcmltaXRpdmVQcm9wcyIsIkNvbXAiLCJ3aW5kb3ciLCJTeW1ib2wiLCJmb3IiLCJqc3giLCJyZWYiLCJkaXNwbGF5TmFtZSIsInRhcmdldCIsImV2ZW50IiwiZmx1c2hTeW5jIiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNkJBQUE7QUFBQUMsUUFBQSxDQUFBRCw2QkFBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQywyQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsNkJBQUE7OztBQ0FBLElBQUFRLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyxRQUFBLEdBQTBCRixPQUFBLENBQUFDLE9BQUE7QUFDMUIsSUFBQUUsaUJBQUEsR0FBMkJGLE9BQUE7QUE0Q2hCLElBQUFHLGtCQUFBLEdBQUFILE9BQUE7QUExQ1gsSUFBTUksS0FBQSxHQUFRLENBQ1osS0FDQSxVQUNBLE9BQ0EsUUFDQSxNQUNBLE1BQ0EsT0FDQSxTQUNBLFNBQ0EsTUFDQSxPQUNBLE1BQ0EsS0FDQSxVQUNBLFFBQ0EsT0FDQSxLQUNGO0FBY0EsSUFBTVosU0FBQSxHQUFZWSxLQUFBLENBQU1DLE1BQUEsQ0FBTyxDQUFDQyxTQUFBLEVBQVdDLElBQUEsS0FBUztFQUNsRCxNQUFNQyxJQUFBLE9BQU9OLGlCQUFBLENBQUFPLFVBQUEsRUFBVyxhQUFhRixJQUFBLEVBQU07RUFDM0MsTUFBTUcsSUFBQSxHQUFhWixLQUFBLENBQUFhLFVBQUEsQ0FBVyxDQUFDQyxLQUFBLEVBQTJDQyxZQUFBLEtBQXNCO0lBQzlGLE1BQU07TUFBRUMsT0FBQTtNQUFBLEdBQVlDO0lBQWUsSUFBSUgsS0FBQTtJQUN2QyxNQUFNSSxJQUFBLEdBQVlGLE9BQUEsR0FBVU4sSUFBQSxHQUFPRCxJQUFBO0lBRW5DLElBQUksT0FBT1UsTUFBQSxLQUFXLGFBQWE7TUFDaENBLE1BQUEsQ0FBZUMsTUFBQSxDQUFPQyxHQUFBLENBQUksVUFBVSxLQUFLO0lBQzVDO0lBRUEsT0FBTyxtQkFBQWhCLGtCQUFBLENBQUFpQixHQUFBLEVBQUNKLElBQUE7TUFBTSxHQUFHRCxjQUFBO01BQWdCTSxHQUFBLEVBQUtSO0lBQUEsQ0FBYztFQUN0RCxDQUFDO0VBRURILElBQUEsQ0FBS1ksV0FBQSxHQUFjLGFBQWFmLElBQUE7RUFFaEMsT0FBTztJQUFFLEdBQUdELFNBQUE7SUFBVyxDQUFDQyxJQUFBLEdBQU9HO0VBQUs7QUFDdEMsR0FBRyxDQUFDLENBQWU7QUEyQ25CLFNBQVNoQiw0QkFBbUQ2QixNQUFBLEVBQXFCQyxLQUFBLEVBQVU7RUFDekYsSUFBSUQsTUFBQSxFQUFpQnRCLFFBQUEsQ0FBQXdCLFNBQUEsQ0FBVSxNQUFNRixNQUFBLENBQU9HLGFBQUEsQ0FBY0YsS0FBSyxDQUFDO0FBQ2xFO0FBSUEsSUFBTS9CLElBQUEsR0FBT0QsU0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9