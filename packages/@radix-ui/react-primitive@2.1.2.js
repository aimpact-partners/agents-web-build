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

// .beyond/uimport/@radix-ui/react-primitive.2.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlLjIuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1wcmltaXRpdmUvc3JjL3ByaW1pdGl2ZS50c3giXSwibmFtZXMiOlsicmVhY3RfcHJpbWl0aXZlXzJfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlByaW1pdGl2ZSIsIlJvb3QiLCJkaXNwYXRjaERpc2NyZXRlQ3VzdG9tRXZlbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiaW1wb3J0X3JlYWN0X3Nsb3QiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJOT0RFUyIsInJlZHVjZSIsInByaW1pdGl2ZSIsIm5vZGUiLCJTbG90IiwiY3JlYXRlU2xvdCIsIk5vZGUiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJmb3J3YXJkZWRSZWYiLCJhc0NoaWxkIiwicHJpbWl0aXZlUHJvcHMiLCJDb21wIiwid2luZG93IiwiU3ltYm9sIiwiZm9yIiwianN4IiwicmVmIiwiZGlzcGxheU5hbWUiLCJ0YXJnZXQiLCJldmVudCIsImZsdXNoU3luYyIsImRpc3BhdGNoRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDZCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNkJBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLDZCQUFBOzs7QUNBQSxJQUFBUSxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMsUUFBQSxHQUEwQkYsT0FBQSxDQUFBQyxPQUFBO0FBQzFCLElBQUFFLGlCQUFBLEdBQTJCRixPQUFBO0FBNENoQixJQUFBRyxrQkFBQSxHQUFBSCxPQUFBO0FBMUNYLElBQU1JLEtBQUEsR0FBUSxDQUNaLEtBQ0EsVUFDQSxPQUNBLFFBQ0EsTUFDQSxNQUNBLE9BQ0EsU0FDQSxTQUNBLE1BQ0EsT0FDQSxNQUNBLEtBQ0EsVUFDQSxRQUNBLE9BQ0EsS0FDRjtBQWNBLElBQU1aLFNBQUEsR0FBWVksS0FBQSxDQUFNQyxNQUFBLENBQU8sQ0FBQ0MsU0FBQSxFQUFXQyxJQUFBLEtBQVM7RUFDbEQsTUFBTUMsSUFBQSxPQUFPTixpQkFBQSxDQUFBTyxVQUFBLEVBQVcsYUFBYUYsSUFBQSxFQUFNO0VBQzNDLE1BQU1HLElBQUEsR0FBYVosS0FBQSxDQUFBYSxVQUFBLENBQVcsQ0FBQ0MsS0FBQSxFQUEyQ0MsWUFBQSxLQUFzQjtJQUM5RixNQUFNO01BQUVDLE9BQUE7TUFBQSxHQUFZQztJQUFlLElBQUlILEtBQUE7SUFDdkMsTUFBTUksSUFBQSxHQUFZRixPQUFBLEdBQVVOLElBQUEsR0FBT0QsSUFBQTtJQUVuQyxJQUFJLE9BQU9VLE1BQUEsS0FBVyxhQUFhO01BQ2hDQSxNQUFBLENBQWVDLE1BQUEsQ0FBT0MsR0FBQSxDQUFJLFVBQVUsS0FBSztJQUM1QztJQUVBLE9BQU8sbUJBQUFoQixrQkFBQSxDQUFBaUIsR0FBQSxFQUFDSixJQUFBO01BQU0sR0FBR0QsY0FBQTtNQUFnQk0sR0FBQSxFQUFLUjtJQUFBLENBQWM7RUFDdEQsQ0FBQztFQUVESCxJQUFBLENBQUtZLFdBQUEsR0FBYyxhQUFhZixJQUFBO0VBRWhDLE9BQU87SUFBRSxHQUFHRCxTQUFBO0lBQVcsQ0FBQ0MsSUFBQSxHQUFPRztFQUFLO0FBQ3RDLEdBQUcsQ0FBQyxDQUFlO0FBMkNuQixTQUFTaEIsNEJBQW1ENkIsTUFBQSxFQUFxQkMsS0FBQSxFQUFVO0VBQ3pGLElBQUlELE1BQUEsRUFBaUJ0QixRQUFBLENBQUF3QixTQUFBLENBQVUsTUFBTUYsTUFBQSxDQUFPRyxhQUFBLENBQWNGLEtBQUssQ0FBQztBQUNsRTtBQUlBLElBQU0vQixJQUFBLEdBQU9ELFNBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==