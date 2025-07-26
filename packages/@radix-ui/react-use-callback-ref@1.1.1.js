System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-callback-ref","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
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

// .beyond/uimport/@radix-ui/react-use-callback-ref.1.1.1.js
var react_use_callback_ref_1_1_1_exports = {};
__export(react_use_callback_ref_1_1_1_exports, {
  useCallbackRef: () => useCallbackRef
});
module.exports = __toCommonJS(react_use_callback_ref_1_1_1_exports);

// node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
function useCallbackRef(callback) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZi4xLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZi9zcmMvdXNlLWNhbGxiYWNrLXJlZi50c3giXSwibmFtZXMiOlsicmVhY3RfdXNlX2NhbGxiYWNrX3JlZl8xXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJ1c2VDYWxsYmFja1JlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiY2FsbGJhY2siLCJjYWxsYmFja1JlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ1c2VNZW1vIiwiYXJncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQ0FBQTtFQUFBRSxjQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxvQ0FBQTs7O0FDQUEsSUFBQU0sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBTXZCLFNBQVNOLGVBQWtETyxRQUFBLEVBQTRCO0VBQ3JGLE1BQU1DLFdBQUEsR0FBb0JKLEtBQUEsQ0FBQUssTUFBQSxDQUFPRixRQUFRO0VBRW5DSCxLQUFBLENBQUFNLFNBQUEsQ0FBVSxNQUFNO0lBQ3BCRixXQUFBLENBQVlHLE9BQUEsR0FBVUosUUFBQTtFQUN4QixDQUFDO0VBR0QsT0FBYUgsS0FBQSxDQUFBUSxPQUFBLENBQVEsTUFBTyxJQUFJQyxJQUFBLEtBQVNMLFdBQUEsQ0FBWUcsT0FBQSxHQUFVLEdBQUdFLElBQUksR0FBUyxFQUFFO0FBQ25GIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=