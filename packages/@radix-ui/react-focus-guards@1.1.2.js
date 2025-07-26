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

// .beyond/uimport/temp/@radix-ui/react-focus-guards.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1mb2N1cy1ndWFyZHMuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWZvY3VzLWd1YXJkcy9zcmMvZm9jdXMtZ3VhcmRzLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9mb2N1c19ndWFyZHNfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRm9jdXNHdWFyZHMiLCJSb290IiwidXNlRm9jdXNHdWFyZHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImNvdW50IiwicHJvcHMiLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsImVkZ2VHdWFyZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5IiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiY3JlYXRlRm9jdXNHdWFyZCIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0YWJJbmRleCIsInN0eWxlIiwib3V0bGluZSIsIm9wYWNpdHkiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVAsZ0NBQUE7OztBQ0FBLElBQUFRLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTs7QUFHdkIsSUFBSUMsS0FBQSxHQUFRO0FBRVosU0FBU1QsWUFBWVUsS0FBQSxFQUFZO0VBQy9CUixjQUFBLENBQWU7RUFDZixPQUFPUSxLQUFBLENBQU1DLFFBQUE7QUFDZjtBQU1BLFNBQVNULGVBQUEsRUFBaUI7RUFDbEJJLEtBQUEsQ0FBQU0sU0FBQSxDQUFVLE1BQU07SUFDcEIsTUFBTUMsVUFBQSxHQUFhQyxRQUFBLENBQVNDLGdCQUFBLENBQWlCLDBCQUEwQjtJQUN2RUQsUUFBQSxDQUFTRSxJQUFBLENBQUtDLHFCQUFBLENBQXNCLGNBQWNKLFVBQUEsQ0FBVyxNQUFNSyxnQkFBQSxDQUFpQixDQUFDO0lBQ3JGSixRQUFBLENBQVNFLElBQUEsQ0FBS0MscUJBQUEsQ0FBc0IsYUFBYUosVUFBQSxDQUFXLE1BQU1LLGdCQUFBLENBQWlCLENBQUM7SUFDcEZULEtBQUE7SUFFQSxPQUFPLE1BQU07TUFDWCxJQUFJQSxLQUFBLEtBQVUsR0FBRztRQUNmSyxRQUFBLENBQVNDLGdCQUFBLENBQWlCLDBCQUEwQixFQUFFSSxPQUFBLENBQVNDLElBQUEsSUFBU0EsSUFBQSxDQUFLQyxNQUFBLENBQU8sQ0FBQztNQUN2RjtNQUNBWixLQUFBO0lBQ0Y7RUFDRixHQUFHLEVBQUU7QUFDUDtBQUVBLFNBQVNTLGlCQUFBLEVBQW1CO0VBQzFCLE1BQU1JLE9BQUEsR0FBVVIsUUFBQSxDQUFTUyxhQUFBLENBQWMsTUFBTTtFQUM3Q0QsT0FBQSxDQUFRRSxZQUFBLENBQWEsMEJBQTBCLEVBQUU7RUFDakRGLE9BQUEsQ0FBUUcsUUFBQSxHQUFXO0VBQ25CSCxPQUFBLENBQVFJLEtBQUEsQ0FBTUMsT0FBQSxHQUFVO0VBQ3hCTCxPQUFBLENBQVFJLEtBQUEsQ0FBTUUsT0FBQSxHQUFVO0VBQ3hCTixPQUFBLENBQVFJLEtBQUEsQ0FBTUcsUUFBQSxHQUFXO0VBQ3pCUCxPQUFBLENBQVFJLEtBQUEsQ0FBTUksYUFBQSxHQUFnQjtFQUM5QixPQUFPUixPQUFBO0FBQ1Q7QUFFQSxJQUFNckIsSUFBQSxHQUFPRCxXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=