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

// .beyond/uimport/temp/react-remove-scroll-bar.2.3.8.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyLjIuMy44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2NvbnN0YW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS91dGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb21wb25lbnQuanMiXSwibmFtZXMiOlsicmVhY3RfcmVtb3ZlX3Njcm9sbF9iYXJfMl8zXzhfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUmVtb3ZlU2Nyb2xsQmFyIiwiZnVsbFdpZHRoQ2xhc3NOYW1lIiwiZ2V0R2FwV2lkdGgiLCJub1Njcm9sbGJhcnNDbGFzc05hbWUiLCJyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIiwiemVyb1JpZ2h0Q2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInplcm9HYXAiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJnYXAiLCJwYXJzZSIsIngiLCJwYXJzZUludCIsImdldE9mZnNldCIsImdhcE1vZGUiLCJjcyIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImJvZHkiLCJvZmZzZXRzIiwiZG9jdW1lbnRXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiTWF0aCIsIm1heCIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3Rfc3R5bGVfc2luZ2xldG9uIiwiU3R5bGUiLCJzdHlsZVNpbmdsZXRvbiIsImxvY2tBdHRyaWJ1dGUiLCJnZXRTdHlsZXMiLCJfYSIsImFsbG93UmVsYXRpdmUiLCJpbXBvcnRhbnQiLCJjb25jYXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImdldEN1cnJlbnRVc2VDb3VudGVyIiwiY291bnRlciIsImdldEF0dHJpYnV0ZSIsImlzRmluaXRlIiwidXNlTG9ja0F0dHJpYnV0ZSIsInVzZUVmZmVjdCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwibmV3Q291bnRlciIsInJlbW92ZUF0dHJpYnV0ZSIsIm5vUmVsYXRpdmUiLCJub0ltcG9ydGFudCIsIl9iIiwidXNlTWVtbyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFDQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUNBQUE7RUFBQUUsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLHNCQUFBLEVBQUFBLENBQUEsS0FBQUEsc0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFWLHFDQUFBOzs7QUNBTyxJQUFJTyxrQkFBQSxHQUFxQjtBQUN6QixJQUFJSixrQkFBQSxHQUFxQjtBQUN6QixJQUFJRSxxQkFBQSxHQUF3QjtBQUs1QixJQUFJQyxzQkFBQSxHQUF5Qjs7O0FDUDdCLElBQUlLLE9BQUEsR0FBVTtFQUNqQkMsSUFBQSxFQUFNO0VBQ05DLEdBQUEsRUFBSztFQUNMQyxLQUFBLEVBQU87RUFDUEMsR0FBQSxFQUFLO0FBQ1Q7QUFDQSxJQUFJQyxLQUFBLEdBQVEsU0FBQUEsQ0FBVUMsQ0FBQSxFQUFHO0VBQUUsT0FBT0MsUUFBQSxDQUFTRCxDQUFBLElBQUssSUFBSSxFQUFFLEtBQUs7QUFBRztBQUM5RCxJQUFJRSxTQUFBLEdBQVksU0FBQUEsQ0FBVUMsT0FBQSxF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