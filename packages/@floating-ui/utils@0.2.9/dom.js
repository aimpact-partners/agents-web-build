System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@floating-ui/utils/dom.0.2.9.js
var dom_0_2_9_exports = {};
__export(dom_0_2_9_exports, {
  getComputedStyle: () => getComputedStyle,
  getContainingBlock: () => getContainingBlock,
  getDocumentElement: () => getDocumentElement,
  getFrameElement: () => getFrameElement,
  getNearestOverflowAncestor: () => getNearestOverflowAncestor,
  getNodeName: () => getNodeName,
  getNodeScroll: () => getNodeScroll,
  getOverflowAncestors: () => getOverflowAncestors,
  getParentNode: () => getParentNode,
  getWindow: () => getWindow,
  isContainingBlock: () => isContainingBlock,
  isElement: () => isElement,
  isHTMLElement: () => isHTMLElement,
  isLastTraversableNode: () => isLastTraversableNode,
  isNode: () => isNode,
  isOverflowElement: () => isOverflowElement,
  isShadowRoot: () => isShadowRoot,
  isTableElement: () => isTableElement,
  isTopLayer: () => isTopLayer,
  isWebKit: () => isWebKit
});
module.exports = __toCommonJS(dom_0_2_9_exports);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some(value => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(value => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some(value => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmbG9hdGluZy11aS91dGlscy9kb20uMC4yLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMuZG9tLm1qcyJdLCJuYW1lcyI6WyJkb21fMF8yXzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldENvbnRhaW5pbmdCbG9jayIsImdldERvY3VtZW50RWxlbWVudCIsImdldEZyYW1lRWxlbWVudCIsImdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yIiwiZ2V0Tm9kZU5hbWUiLCJnZXROb2RlU2Nyb2xsIiwiZ2V0T3ZlcmZsb3dBbmNlc3RvcnMiLCJnZXRQYXJlbnROb2RlIiwiZ2V0V2luZG93IiwiaXNDb250YWluaW5nQmxvY2siLCJpc0VsZW1lbnQiLCJpc0hUTUxFbGVtZW50IiwiaXNMYXN0VHJhdmVyc2FibGVOb2RlIiwiaXNOb2RlIiwiaXNPdmVyZmxvd0VsZW1lbnQiLCJpc1NoYWRvd1Jvb3QiLCJpc1RhYmxlRWxlbWVudCIsImlzVG9wTGF5ZXIiLCJpc1dlYktpdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJoYXNXaW5kb3ciLCJ3aW5kb3ciLCJub2RlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsIl9ub2RlJG93bmVyRG9jdW1lbnQiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJfcmVmIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2YWx1ZSIsIk5vZGUiLCJFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJTaGFkb3dSb290IiwiZWxlbWVudCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZGlzcGxheSIsInRlc3QiLCJpbmNsdWRlcyIsInNvbWUiLCJzZWxlY3RvciIsIm1hdGNoZXMiLCJlIiwiZWxlbWVudE9yQ3NzIiwid2Via2l0IiwiY3NzIiwiY29udGFpbmVyVHlwZSIsImJhY2tkcm9wRmlsdGVyIiwiZmlsdGVyIiwid2lsbENoYW5nZSIsImNvbnRhaW4iLCJjdXJyZW50Tm9kZSIsIkNTUyIsInN1cHBvcnRzIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsInNjcm9sbFgiLCJzY3JvbGxZIiwicmVzdWx0IiwiYXNzaWduZWRTbG90IiwicGFyZW50Tm9kZSIsImhvc3QiLCJib2R5IiwibGlzdCIsInRyYXZlcnNlSWZyYW1lcyIsIl9ub2RlJG93bmVyRG9jdW1lbnQyIiwic2Nyb2xsYWJsZUFuY2VzdG9yIiwiaXNCb2R5Iiwid2luIiwiZnJhbWVFbGVtZW50IiwiY29uY2F0IiwidmlzdWFsVmlld3BvcnQiLCJwYXJlbnQiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxpQkFBQTtFQUFBRSxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQywwQkFBQSxFQUFBQSxDQUFBLEtBQUFBLDBCQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxxQkFBQSxF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QU1NLEdBQUEsR0FBTWxFLFNBQUEsQ0FBVWdFLGtCQUFrQjtFQUN4QyxJQUFJQyxNQUFBLEVBQVE7SUFDVixNQUFNRSxZQUFBLEdBQWV6RSxlQUFBLENBQWdCd0UsR0FBRztJQUN4QyxPQUFPTCxJQUFBLENBQUtPLE1BQUEsQ0FBT0YsR0FBQSxFQUFLQSxHQUFBLENBQUlHLGNBQUEsSUFBa0IsRUFBQyxFQUFHL0QsaUJBQUEsQ0FBa0IwRCxrQkFBa0IsSUFBSUEsa0JBQUEsR0FBcUIsRUFBQyxFQUFHRyxZQUFBLElBQWdCTCxlQUFBLEdBQWtCaEUsb0JBQUEsQ0FBcUJxRSxZQUFZLElBQUksRUFBRTtFQUM5TDtFQUNBLE9BQU9OLElBQUEsQ0FBS08sTUFBQSxDQUFPSixrQkFBQSxFQUFvQmxFLG9CQUFBLENBQXFCa0Usa0JBQUEsRUFBb0IsRUFBQyxFQUFHRixlQUFlLENBQUM7QUFDdEc7QUFDQSxTQUFTcEUsZ0JBQWdCd0UsR0FBQSxFQUFLO0VBQzVCLE9BQU9BLEdBQUEsQ0FBSUksTUFBQSxJQUFVQyxNQUFBLENBQU9DLGNBQUEsQ0FBZU4sR0FBQSxDQUFJSSxNQUFNLElBQUlKLEdBQUEsQ0FBSUMsWUFBQSxHQUFlO0FBQzlFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=