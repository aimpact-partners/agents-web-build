System.register(["react@18.3.1","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-direction","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep)],
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

// .beyond/uimport/@radix-ui/react-direction.1.1.1.js
var react_direction_1_1_1_exports = {};
__export(react_direction_1_1_1_exports, {
  DirectionProvider: () => DirectionProvider,
  Provider: () => Provider,
  useDirection: () => useDirection
});
module.exports = __toCommonJS(react_direction_1_1_1_exports);

// node_modules/@radix-ui/react-direction/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var DirectionContext = React.createContext(void 0);
var DirectionProvider = props => {
  const {
    dir,
    children
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(DirectionContext.Provider, {
    value: dir,
    children
  });
};
function useDirection(localDir) {
  const globalDir = React.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtZGlyZWN0aW9uLjEuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1kaXJlY3Rpb24vc3JjL2RpcmVjdGlvbi50c3giXSwibmFtZXMiOlsicmVhY3RfZGlyZWN0aW9uXzFfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRpcmVjdGlvblByb3ZpZGVyIiwiUHJvdmlkZXIiLCJ1c2VEaXJlY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9qc3hfcnVudGltZSIsIkRpcmVjdGlvbkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwicHJvcHMiLCJkaXIiLCJjaGlsZHJlbiIsImpzeCIsInZhbHVlIiwibG9jYWxEaXIiLCJnbG9iYWxEaXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw2QkFBQTtBQUFBQyxRQUFBLENBQUFELDZCQUFBO0VBQUFFLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsNkJBQUE7OztBQ0FBLElBQUFRLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQWVkLElBQUFDLGtCQUFBLEdBQUFELE9BQUE7QUFaVCxJQUFNRSxnQkFBQSxHQUF5QkosS0FBQSxDQUFBSyxhQUFBLENBQXFDLE1BQVM7QUFVN0UsSUFBTVgsaUJBQUEsR0FBdURZLEtBQUEsSUFBVTtFQUNyRSxNQUFNO0lBQUVDLEdBQUE7SUFBS0M7RUFBUyxJQUFJRixLQUFBO0VBQzFCLE9BQU8sbUJBQUFILGtCQUFBLENBQUFNLEdBQUEsRUFBQ0wsZ0JBQUEsQ0FBaUJULFFBQUEsRUFBakI7SUFBMEJlLEtBQUEsRUFBT0gsR0FBQTtJQUFNQztFQUFBLENBQVM7QUFDMUQ7QUFJQSxTQUFTWixhQUFhZSxRQUFBLEVBQXNCO0VBQzFDLE1BQU1DLFNBQUEsR0FBa0JaLEtBQUEsQ0FBQWEsVUFBQSxDQUFXVCxnQkFBZ0I7RUFDbkQsT0FBT08sUUFBQSxJQUFZQyxTQUFBLElBQWE7QUFDbEM7QUFFQSxJQUFNakIsUUFBQSxHQUFXRCxpQkFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=