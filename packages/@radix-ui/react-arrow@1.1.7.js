System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-slot@1.2.3","@radix-ui/react-primitive@2.1.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"],["@radix-ui/react-primitive","2.1.3"],["@radix-ui/react-arrow","1.1.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.3', dep), dep => dependencies.set('@radix-ui/react-primitive@2.1.3', dep)],
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

// .beyond/uimport/@radix-ui/react-arrow.1.1.7.js
var react_arrow_1_1_7_exports = {};
__export(react_arrow_1_1_7_exports, {
  Arrow: () => Arrow,
  Root: () => Root
});
module.exports = __toCommonJS(react_arrow_1_1_7_exports);

// node_modules/@radix-ui/react-arrow/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_primitive = require("@radix-ui/react-primitive@2.1.3");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var NAME = "Arrow";
var Arrow = React.forwardRef((props, forwardedRef) => {
  const {
    children,
    width = 10,
    height = 5,
    ...arrowProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.svg, {
    ...arrowProps,
    ref: forwardedRef,
    width,
    height,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none",
    children: props.asChild ? children : /* @__PURE__ */(0, import_jsx_runtime.jsx)("polygon", {
      points: "0,0 30,0 15,10"
    })
  });
});
Arrow.displayName = NAME;
var Root = Arrow;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtYXJyb3cuMS4xLjcuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWFycm93L3NyYy9hcnJvdy50c3giXSwibmFtZXMiOlsicmVhY3RfYXJyb3dfMV8xXzdfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQXJyb3ciLCJSb290IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3RfcHJpbWl0aXZlIiwiaW1wb3J0X2pzeF9ydW50aW1lIiwiTkFNRSIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImNoaWxkcmVuIiwid2lkdGgiLCJoZWlnaHQiLCJhcnJvd1Byb3BzIiwianN4IiwiUHJpbWl0aXZlIiwic3ZnIiwicmVmIiwidmlld0JveCIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJhc0NoaWxkIiwicG9pbnRzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlCQUFBO0FBQUFDLFFBQUEsQ0FBQUQseUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4seUJBQUE7OztBQ0FBLElBQUFPLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyxzQkFBQSxHQUEwQkQsT0FBQTtBQXdCUSxJQUFBRSxrQkFBQSxHQUFBRixPQUFBO0FBbEJsQyxJQUFNRyxJQUFBLEdBQU87QUFNYixJQUFNVixLQUFBLEdBQWNLLEtBQUEsQ0FBQU0sVUFBQSxDQUFxQyxDQUFDQyxLQUFBLEVBQU9DLFlBQUEsS0FBaUI7RUFDaEYsTUFBTTtJQUFFQyxRQUFBO0lBQVVDLEtBQUEsR0FBUTtJQUFJQyxNQUFBLEdBQVM7SUFBQSxHQUFNQztFQUFXLElBQUlMLEtBQUE7RUFDNUQsT0FDRSxtQkFBQUgsa0JBQUEsQ0FBQVMsR0FBQSxFQUFDVixzQkFBQSxDQUFBVyxTQUFBLENBQVVDLEdBQUEsRUFBVjtJQUNFLEdBQUdILFVBQUE7SUFDSkksR0FBQSxFQUFLUixZQUFBO0lBQ0xFLEtBQUE7SUFDQUMsTUFBQTtJQUNBTSxPQUFBLEVBQVE7SUFDUkMsbUJBQUEsRUFBb0I7SUFHbkJULFFBQUEsRUFBQUYsS0FBQSxDQUFNWSxPQUFBLEdBQVVWLFFBQUEsR0FBVyxtQkFBQUwsa0JBQUEsQ0FBQVMsR0FBQSxFQUFDO01BQVFPLE1BQUEsRUFBTztJQUFBLENBQWlCO0VBQUEsQ0FDL0Q7QUFFSixDQUFDO0FBRUR6QixLQUFBLENBQU0wQixXQUFBLEdBQWNoQixJQUFBO0FBSXBCLElBQU1ULElBQUEsR0FBT0QsS0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9