System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-focus-guards","1.1.2"]]);
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

// .beyond/uimport/@radix-ui/react-focus-guards.1.1.2.js
var react_focus_guards_1_1_2_exports = {};
__export(react_focus_guards_1_1_2_exports, {
  FocusGuards: () => FocusGuards,
  Root: () => Root,
  useFocusGuards: () => useFocusGuards
});
module.exports = __toCommonJS(react_focus_guards_1_1_2_exports);

// node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
"use client";
var count = 0;
function FocusGuards(props) {
  useFocusGuards();
  return props.children;
}
function useFocusGuards() {
  React.useEffect(() => {
    const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
    document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
    count++;
    return () => {
      if (count === 1) {
        document.querySelectorAll("[data-radix-focus-guard]").forEach(node => node.remove());
      }
      count--;
    };
  }, []);
}
function createFocusGuard() {
  const element = document.createElement("span");
  element.setAttribute("data-radix-focus-guard", "");
  element.tabIndex = 0;
  element.style.outline = "none";
  element.style.opacity = "0";
  element.style.position = "fixed";
  element.style.pointerEvents = "none";
  return element;
}
var Root = FocusGuards;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtZm9jdXMtZ3VhcmRzLjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1mb2N1cy1ndWFyZHMvc3JjL2ZvY3VzLWd1YXJkcy50c3giXSwibmFtZXMiOlsicmVhY3RfZm9jdXNfZ3VhcmRzXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkZvY3VzR3VhcmRzIiwiUm9vdCIsInVzZUZvY3VzR3VhcmRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJjb3VudCIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJlZGdlR3VhcmRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImNyZWF0ZUZvY3VzR3VhcmQiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZSIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGFiSW5kZXgiLCJzdHlsZSIsIm91dGxpbmUiLCJvcGFjaXR5IiwicG9zaXRpb24iLCJwb2ludGVyRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxnQ0FBQTtBQUFBQyxRQUFBLENBQUFELGdDQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGdDQUFBOzs7QUNBQSxJQUFBUSxLQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7O0FBR3ZCLElBQUlDLEtBQUEsR0FBUTtBQUVaLFNBQVNULFlBQVlVLEtBQUEsRUFBWTtFQUMvQlIsY0FBQSxDQUFlO0VBQ2YsT0FBT1EsS0FBQSxDQUFNQyxRQUFBO0FBQ2Y7QUFNQSxTQUFTVCxlQUFBLEVBQWlCO0VBQ2xCSSxLQUFBLENBQUFNLFNBQUEsQ0FBVSxNQUFNO0lBQ3BCLE1BQU1DLFVBQUEsR0FBYUMsUUFBQSxDQUFTQyxnQkFBQSxDQUFpQiwwQkFBMEI7SUFDdkVELFFBQUEsQ0FBU0UsSUFBQSxDQUFLQyxxQkFBQSxDQUFzQixjQUFjSixVQUFBLENBQVcsTUFBTUssZ0JBQUEsQ0FBaUIsQ0FBQztJQUNyRkosUUFBQSxDQUFTRSxJQUFBLENBQUtDLHFCQUFBLENBQXNCLGFBQWFKLFVBQUEsQ0FBVyxNQUFNSyxnQkFBQSxDQUFpQixDQUFDO0lBQ3BGVCxLQUFBO0lBRUEsT0FBTyxNQUFNO01BQ1gsSUFBSUEsS0FBQSxLQUFVLEdBQUc7UUFDZkssUUFBQSxDQUFTQyxnQkFBQSxDQUFpQiwwQkFBMEIsRUFBRUksT0FBQSxDQUFTQyxJQUFBLElBQVNBLElBQUEsQ0FBS0MsTUFBQSxDQUFPLENBQUM7TUFDdkY7TUFDQVosS0FBQTtJQUNGO0VBQ0YsR0FBRyxFQUFFO0FBQ1A7QUFFQSxTQUFTUyxpQkFBQSxFQUFtQjtFQUMxQixNQUFNSSxPQUFBLEdBQVVSLFFBQUEsQ0FBU1MsYUFBQSxDQUFjLE1BQU07RUFDN0NELE9BQUEsQ0FBUUUsWUFBQSxDQUFhLDBCQUEwQixFQUFFO0VBQ2pERixPQUFBLENBQVFHLFFBQUEsR0FBVztFQUNuQkgsT0FBQSxDQUFRSSxLQUFBLENBQU1DLE9BQUEsR0FBVTtFQUN4QkwsT0FBQSxDQUFRSSxLQUFBLENBQU1FLE9BQUEsR0FBVTtFQUN4Qk4sT0FBQSxDQUFRSSxLQUFBLENBQU1HLFFBQUEsR0FBVztFQUN6QlAsT0FBQSxDQUFRSSxLQUFBLENBQU1JLGFBQUEsR0FBZ0I7RUFDOUIsT0FBT1IsT0FBQTtBQUNUO0FBRUEsSUFBTXJCLElBQUEsR0FBT0QsV0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9