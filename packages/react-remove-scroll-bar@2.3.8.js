System.register(["react@18.3.1","get-nonce@1.0.1","react-style-singleton@2.2.3"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["get-nonce","1.0.1"],["react-style-singleton","2.2.3"],["react-remove-scroll-bar","2.3.8"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('get-nonce@1.0.1', dep), dep => dependencies.set('react-style-singleton@2.2.3', dep)],
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

// .beyond/uimport/react-remove-scroll-bar.2.3.8.js
var react_remove_scroll_bar_2_3_8_exports = {};
__export(react_remove_scroll_bar_2_3_8_exports, {
  RemoveScrollBar: () => RemoveScrollBar,
  fullWidthClassName: () => fullWidthClassName,
  getGapWidth: () => getGapWidth,
  noScrollbarsClassName: () => noScrollbarsClassName,
  removedBarSizeVariable: () => removedBarSizeVariable,
  zeroRightClassName: () => zeroRightClassName
});
module.exports = __toCommonJS(react_remove_scroll_bar_2_3_8_exports);

// node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

// node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
};
var parse = function (x) {
  return parseInt(x || "", 10) || 0;
};
var getOffset = function (gapMode) {
  var cs = window.getComputedStyle(document.body);
  var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
  var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
  var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
  return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  if (typeof window === "undefined") {
    return zeroGap;
  }
  var offsets = getOffset(gapMode);
  var documentWidth = document.documentElement.clientWidth;
  var windowWidth = window.innerWidth;
  return {
    left: offsets[0],
    top: offsets[1],
    right: offsets[2],
    gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
  };
};

// node_modules/react-remove-scroll-bar/dist/es2015/component.js
var React = __toESM(require("react@18.3.1"));
var import_react_style_singleton = require("react-style-singleton@2.2.3");
var Style = (0, import_react_style_singleton.styleSingleton)();
var lockAttribute = "data-scroll-locked";
var getStyles = function (_a, allowRelative, gapMode, important) {
  var left = _a.left,
    top = _a.top,
    right = _a.right,
    gap = _a.gap;
  if (gapMode === void 0) {
    gapMode = "margin";
  }
  return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([allowRelative && "position: relative ".concat(important, ";"), gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "), gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function () {
  var counter = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
  return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function () {
  React.useEffect(function () {
    document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
    return function () {
      var newCounter = getCurrentUseCounter() - 1;
      if (newCounter <= 0) {
        document.body.removeAttribute(lockAttribute);
      } else {
        document.body.setAttribute(lockAttribute, newCounter.toString());
      }
    };
  }, []);
};
var RemoveScrollBar = function (_a) {
  var noRelative = _a.noRelative,
    noImportant = _a.noImportant,
    _b = _a.gapMode,
    gapMode = _b === void 0 ? "margin" : _b;
  useLockAttribute();
  var gap = React.useMemo(function () {
    return getGapWidth(gapMode);
  }, [gapMode]);
  return React.createElement(Style, {
    styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "")
  });
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci4yLjMuOC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvdXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXIvZGlzdC9lczIwMTUvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInJlYWN0X3JlbW92ZV9zY3JvbGxfYmFyXzJfM184X2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJlbW92ZVNjcm9sbEJhciIsImZ1bGxXaWR0aENsYXNzTmFtZSIsImdldEdhcFdpZHRoIiwibm9TY3JvbGxiYXJzQ2xhc3NOYW1lIiwicmVtb3ZlZEJhclNpemVWYXJpYWJsZSIsInplcm9SaWdodENsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ6ZXJvR2FwIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiZ2FwIiwicGFyc2UiLCJ4IiwicGFyc2VJbnQiLCJnZXRPZmZzZXQiLCJnYXBNb2RlIiwiY3MiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwib2Zmc2V0cyIsImRvY3VtZW50V2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsIk1hdGgiLCJtYXgiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X3N0eWxlX3NpbmdsZXRvbiIsIlN0eWxlIiwic3R5bGVTaW5nbGV0b24iLCJsb2NrQXR0cmlidXRlIiwiZ2V0U3R5bGVzIiwiX2EiLCJhbGxvd1JlbGF0aXZlIiwiaW1wb3J0YW50IiwiY29uY2F0IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJnZXRDdXJyZW50VXNlQ291bnRlciIsImNvdW50ZXIiLCJnZXRBdHRyaWJ1dGUiLCJpc0Zpbml0ZSIsInVzZUxvY2tBdHRyaWJ1dGUiLCJ1c2VFZmZlY3QiLCJzZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsIm5ld0NvdW50ZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJub1JlbGF0aXZlIiwibm9JbXBvcnRhbnQiLCJfYiIsInVzZU1lbW8iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQ0FBQTtBQUFBQyxRQUFBLENBQUFELHFDQUFBO0VBQUFFLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVixxQ0FBQTs7O0FDQU8sSUFBSU8sa0JBQUEsR0FBcUI7QUFDekIsSUFBSUosa0JBQUEsR0FBcUI7QUFDekIsSUFBSUUscUJBQUEsR0FBd0I7QUFLNUIsSUFBSUMsc0JBQUEsR0FBeUI7OztBQ1A3QixJQUFJSyxPQUFBLEdBQVU7RUFDakJDLElBQUEsRUFBTTtFQUNOQyxHQUFBLEVBQUs7RUFDTEMsS0FBQSxFQUFPO0VBQ1BDLEdBQUEsRUFBSztBQUNUO0FBQ0EsSUFBSUMsS0FBQSxHQUFRLFNBQUFBLENBQVVDLENBQUEsRUFBRztFQUFFLE9BQU9DLFFBQUEsQ0FBU0QsQ0FBQSxJQUFLLElBQUksRUFBRSxLQUFLO0FBQUc7QUFDOUQsSUFBSUUsU0FBQSxHQUFZLFNBQUFBLENBQVVDLE9BQUEsRUFBUztF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