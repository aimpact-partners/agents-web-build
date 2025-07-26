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

// .beyond/uimport/@radix-ui/react-use-size.1.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtdXNlLXNpemUuMS4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXVzZS1zaXplL3NyYy91c2Utc2l6ZS50c3giXSwibmFtZXMiOlsicmVhY3RfdXNlX3NpemVfMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwidXNlU2l6ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwiZWxlbWVudCIsInNpemUiLCJzZXRTaXplIiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJlbnRyeSIsImJvcmRlclNpemVFbnRyeSIsImJvcmRlclNpemUiLCJvYnNlcnZlIiwiYm94IiwidW5vYnNlcnZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw0QkFBQTtBQUFBQyxRQUFBLENBQUFELDRCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDRCQUFBOzs7QUNFQSxJQUFBTSxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMsOEJBQUEsR0FBZ0NELE9BQUE7QUFFaEMsU0FBU04sUUFBUVEsT0FBQSxFQUE2QjtFQUM1QyxNQUFNLENBQUNDLElBQUEsRUFBTUMsT0FBTyxJQUFVTixLQUFBLENBQUFPLFFBQUEsQ0FBd0QsTUFBUztFQUUvRixJQUFBSiw4QkFBQSxDQUFBSyxlQUFBLEVBQWdCLE1BQU07SUFDcEIsSUFBSUosT0FBQSxFQUFTO01BRVhFLE9BQUEsQ0FBUTtRQUFFRyxLQUFBLEVBQU9MLE9BQUEsQ0FBUU0sV0FBQTtRQUFhQyxNQUFBLEVBQVFQLE9BQUEsQ0FBUVE7TUFBYSxDQUFDO01BRXBFLE1BQU1DLGNBQUEsR0FBaUIsSUFBSUMsY0FBQSxDQUFnQkMsT0FBQSxJQUFZO1FBQ3JELElBQUksQ0FBQ0MsS0FBQSxDQUFNQyxPQUFBLENBQVFGLE9BQU8sR0FBRztVQUMzQjtRQUNGO1FBSUEsSUFBSSxDQUFDQSxPQUFBLENBQVFHLE1BQUEsRUFBUTtVQUNuQjtRQUNGO1FBRUEsTUFBTUMsS0FBQSxHQUFRSixPQUFBLENBQVE7UUFDdEIsSUFBSU4sS0FBQTtRQUNKLElBQUlFLE1BQUE7UUFFSixJQUFJLG1CQUFtQlEsS0FBQSxFQUFPO1VBQzVCLE1BQU1DLGVBQUEsR0FBa0JELEtBQUEsQ0FBTTtVQUU5QixNQUFNRSxVQUFBLEdBQWFMLEtBQUEsQ0FBTUMsT0FBQSxDQUFRRyxlQUFlLElBQUlBLGVBQUEsQ0FBZ0IsS0FBS0EsZUFBQTtVQUN6RVgsS0FBQSxHQUFRWSxVQUFBLENBQVc7VUFDbkJWLE1BQUEsR0FBU1UsVUFBQSxDQUFXO1FBQ3RCLE9BQU87VUFHTFosS0FBQSxHQUFRTCxPQUFBLENBQVFNLFdBQUE7VUFDaEJDLE1BQUEsR0FBU1AsT0FBQSxDQUFRUSxZQUFBO1FBQ25CO1FBRUFOLE9BQUEsQ0FBUTtVQUFFRyxLQUFBO1VBQU9FO1FBQU8sQ0FBQztNQUMzQixDQUFDO01BRURFLGNBQUEsQ0FBZVMsT0FBQSxDQUFRbEIsT0FBQSxFQUFTO1FBQUVtQixHQUFBLEVBQUs7TUFBYSxDQUFDO01BRXJELE9BQU8sTUFBTVYsY0FBQSxDQUFlVyxTQUFBLENBQVVwQixPQUFPO0lBQy9DLE9BQU87TUFHTEUsT0FBQSxDQUFRLE1BQVM7SUFDbkI7RUFDRixHQUFHLENBQUNGLE9BQU8sQ0FBQztFQUVaLE9BQU9DLElBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9