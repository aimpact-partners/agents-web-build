System.register(["react@18.3.1","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-use-size","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-use-size.1.1.1.js
var react_use_size_1_1_1_exports = {};
__export(react_use_size_1_1_1_exports, {
  useSize: () => useSize
});
module.exports = __toCommonJS(react_use_size_1_1_1_exports);

// node_modules/@radix-ui/react-use-size/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
function useSize(element) {
  const [size, setSize] = React.useState(void 0);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (element) {
      setSize({
        width: element.offsetWidth,
        height: element.offsetHeight
      });
      const resizeObserver = new ResizeObserver(entries => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({
          width,
          height
        });
      });
      resizeObserver.observe(element, {
        box: "border-box"
      });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2Utc2l6ZS4xLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLXNpemUvc3JjL3VzZS1zaXplLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2Vfc2l6ZV8xXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJ1c2VTaXplIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3RfdXNlX2xheW91dF9lZmZlY3QiLCJlbGVtZW50Iiwic2l6ZSIsInNldFNpemUiLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImVudHJ5IiwiYm9yZGVyU2l6ZUVudHJ5IiwiYm9yZGVyU2l6ZSIsIm9ic2VydmUiLCJib3giLCJ1bm9ic2VydmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsNEJBQUE7OztBQ0VBLElBQUFNLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyw4QkFBQSxHQUFnQ0QsT0FBQTtBQUVoQyxTQUFTTixRQUFRUSxPQUFBLEVBQTZCO0VBQzVDLE1BQU0sQ0FBQ0MsSUFBQSxFQUFNQyxPQUFPLElBQVVOLEtBQUEsQ0FBQU8sUUFBQSxDQUF3RCxNQUFTO0VBRS9GLElBQUFKLDhCQUFBLENBQUFLLGVBQUEsRUFBZ0IsTUFBTTtJQUNwQixJQUFJSixPQUFBLEVBQVM7TUFFWEUsT0FBQSxDQUFRO1FBQUVHLEtBQUEsRUFBT0wsT0FBQSxDQUFRTSxXQUFBO1FBQWFDLE1BQUEsRUFBUVAsT0FBQSxDQUFRUTtNQUFhLENBQUM7TUFFcEUsTUFBTUMsY0FBQSxHQUFpQixJQUFJQyxjQUFBLENBQWdCQyxPQUFBLElBQVk7UUFDckQsSUFBSSxDQUFDQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsT0FBTyxHQUFHO1VBQzNCO1FBQ0Y7UUFJQSxJQUFJLENBQUNBLE9BQUEsQ0FBUUcsTUFBQSxFQUFRO1VBQ25CO1FBQ0Y7UUFFQSxNQUFNQyxLQUFBLEdBQVFKLE9BQUEsQ0FBUTtRQUN0QixJQUFJTixLQUFBO1FBQ0osSUFBSUUsTUFBQTtRQUVKLElBQUksbUJBQW1CUSxLQUFBLEVBQU87VUFDNUIsTUFBTUMsZUFBQSxHQUFrQkQsS0FBQSxDQUFNO1VBRTlCLE1BQU1FLFVBQUEsR0FBYUwsS0FBQSxDQUFNQyxPQUFBLENBQVFHLGVBQWUsSUFBSUEsZUFBQSxDQUFnQixLQUFLQSxlQUFBO1VBQ3pFWCxLQUFBLEdBQVFZLFVBQUEsQ0FBVztVQUNuQlYsTUFBQSxHQUFTVSxVQUFBLENBQVc7UUFDdEIsT0FBTztVQUdMWixLQUFBLEdBQVFMLE9BQUEsQ0FBUU0sV0FBQTtVQUNoQkMsTUFBQSxHQUFTUCxPQUFBLENBQVFRLFlBQUE7UUFDbkI7UUFFQU4sT0FBQSxDQUFRO1VBQUVHLEtBQUE7VUFBT0U7UUFBTyxDQUFDO01BQzNCLENBQUM7TUFFREUsY0FBQSxDQUFlUyxPQUFBLENBQVFsQixPQUFBLEVBQVM7UUFBRW1CLEdBQUEsRUFBSztNQUFhLENBQUM7TUFFckQsT0FBTyxNQUFNVixjQUFBLENBQWVXLFNBQUEsQ0FBVXBCLE9BQU87SUFDL0MsT0FBTztNQUdMRSxPQUFBLENBQVEsTUFBUztJQUNuQjtFQUNGLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO0VBRVosT0FBT0MsSUFBQTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=