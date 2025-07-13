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

// .beyond/uimport/@radix-ui/react-use-previous.1.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtdXNlLXByZXZpb3VzLjEuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtcHJldmlvdXMvc3JjL3VzZS1wcmV2aW91cy50c3giXSwibmFtZXMiOlsicmVhY3RfdXNlX3ByZXZpb3VzXzFfMV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsInVzZVByZXZpb3VzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJ2YWx1ZSIsInJlZiIsInVzZVJlZiIsInByZXZpb3VzIiwidXNlTWVtbyIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsZ0NBQUE7OztBQ0FBLElBQUFNLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUV2QixTQUFTTixZQUFlTyxLQUFBLEVBQVU7RUFDaEMsTUFBTUMsR0FBQSxHQUFZSixLQUFBLENBQUFLLE1BQUEsQ0FBTztJQUFFRixLQUFBO0lBQU9HLFFBQUEsRUFBVUg7RUFBTSxDQUFDO0VBS25ELE9BQWFILEtBQUEsQ0FBQU8sT0FBQSxDQUFRLE1BQU07SUFDekIsSUFBSUgsR0FBQSxDQUFJSSxPQUFBLENBQVFMLEtBQUEsS0FBVUEsS0FBQSxFQUFPO01BQy9CQyxHQUFBLENBQUlJLE9BQUEsQ0FBUUYsUUFBQSxHQUFXRixHQUFBLENBQUlJLE9BQUEsQ0FBUUwsS0FBQTtNQUNuQ0MsR0FBQSxDQUFJSSxPQUFBLENBQVFMLEtBQUEsR0FBUUEsS0FBQTtJQUN0QjtJQUNBLE9BQU9DLEdBQUEsQ0FBSUksT0FBQSxDQUFRRixRQUFBO0VBQ3JCLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDO0FBQ1oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9