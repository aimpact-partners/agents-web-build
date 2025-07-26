System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-previous","1.1.1"]]);
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

// .beyond/uimport/temp/@radix-ui/react-use-previous.1.1.1.js
var react_use_previous_1_1_1_exports = {};
__export(react_use_previous_1_1_1_exports, {
  usePrevious: () => usePrevious
});
module.exports = __toCommonJS(react_use_previous_1_1_1_exports);

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
function usePrevious(value) {
  const ref = React.useRef({
    value,
    previous: value
  });
  return React.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtcHJldmlvdXMuMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1wcmV2aW91cy9zcmMvdXNlLXByZXZpb3VzLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfcHJldmlvdXNfMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwidXNlUHJldmlvdXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsInZhbHVlIiwicmVmIiwidXNlUmVmIiwicHJldmlvdXMiLCJ1c2VNZW1vIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxnQ0FBQTs7O0FDQUEsSUFBQU0sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBRXZCLFNBQVNOLFlBQWVPLEtBQUEsRUFBVTtFQUNoQyxNQUFNQyxHQUFBLEdBQVlKLEtBQUEsQ0FBQUssTUFBQSxDQUFPO0lBQUVGLEtBQUE7SUFBT0csUUFBQSxFQUFVSDtFQUFNLENBQUM7RUFLbkQsT0FBYUgsS0FBQSxDQUFBTyxPQUFBLENBQVEsTUFBTTtJQUN6QixJQUFJSCxHQUFBLENBQUlJLE9BQUEsQ0FBUUwsS0FBQSxLQUFVQSxLQUFBLEVBQU87TUFDL0JDLEdBQUEsQ0FBSUksT0FBQSxDQUFRRixRQUFBLEdBQVdGLEdBQUEsQ0FBSUksT0FBQSxDQUFRTCxLQUFBO01BQ25DQyxHQUFBLENBQUlJLE9BQUEsQ0FBUUwsS0FBQSxHQUFRQSxLQUFBO0lBQ3RCO0lBQ0EsT0FBT0MsR0FBQSxDQUFJSSxPQUFBLENBQVFGLFFBQUE7RUFDckIsR0FBRyxDQUFDSCxLQUFLLENBQUM7QUFDWiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9