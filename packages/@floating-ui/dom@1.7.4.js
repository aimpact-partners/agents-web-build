System.register(["@floating-ui/utils@0.2.10","@floating-ui/core@1.7.3","@floating-ui/utils@0.2.10/dom"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"],["@floating-ui/core","1.7.3"],["@floating-ui/dom","1.7.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.10', dep), dep => dependencies.set('@floating-ui/core@1.7.3', dep), dep => dependencies.set('@floating-ui/utils@0.2.10/dom', dep)],
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

// .beyond/uimport/@floating-ui/dom.1.7.4.js
var dom_1_7_4_exports = {};
__export(dom_1_7_4_exports, {
  arrow: () => arrow,
  autoPlacement: () => autoPlacement,
  autoUpdate: () => autoUpdate,
  computePosition: () => computePosition,
  detectOverflow: () => detectOverflow,
  flip: () => flip,
  getOverflowAncestors: () => import_dom2.getOverflowAncestors,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  platform: () => platform,
  shift: () => shift,
  size: () => size
});
module.exports = __toCommonJS(dom_1_7_4_exports);

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
var import_core = require("@floating-ui/core@1.7.3");
var import_utils = require("@floating-ui/utils@0.2.10");
var import_dom = require("@floating-ui/utils@0.2.10/dom");
var import_dom2 = require("@floating-ui/utils@0.2.10/dom");
function getCssDimensions(element) {
  const css = (0, import_dom.getComputedStyle)(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = (0, import_dom.isHTMLElement)(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = (0, import_utils.round)(width) !== offsetWidth || (0, import_utils.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !(0, import_dom.isElement)(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!(0, import_dom.isHTMLElement)(domElement)) {
    return (0, import_utils.createCoords)(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? (0, import_utils.round)(rect.width) : rect.width) / width;
  let y = ($ ? (0, import_utils.round)(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */(0, import_utils.createCoords)(0);
function getVisualOffsets(element) {
  const win = (0, import_dom.getWindow)(element);
  if (!(0, import_dom.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, import_dom.getWindow)(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = (0, import_utils.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0, import_dom.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, import_utils.createCoords)(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = (0, import_dom.getWindow)(domElement);
    const offsetWin = offsetParent && (0, import_dom.isElement)(offsetParent) ? (0, import_dom.getWindow)(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = (0, import_dom.getFrameElement)(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = (0, import_dom.getComputedStyle)(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0, import_dom.getWindow)(currentIFrame);
      currentIFrame = (0, import_dom.getFrameElement)(currentWin);
    }
  }
  return (0, import_core.rectToClientRect)({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = (0, import_dom.getNodeScroll)(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect((0, import_dom.getDocumentElement)(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = (0, import_dom.getDocumentElement)(offsetParent);
  const topLayer = elements ? (0, import_dom.isTopLayer)(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = (0, import_utils.createCoords)(1);
  const offsets = (0, import_utils.createCoords)(0);
  const isOffsetParentAnElement = (0, import_dom.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, import_dom.getNodeName)(offsetParent) !== "body" || (0, import_dom.isOverflowElement)(documentElement)) {
      scroll = (0, import_dom.getNodeScroll)(offsetParent);
    }
    if ((0, import_dom.isHTMLElement)(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, import_utils.createCoords)(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = (0, import_dom.getDocumentElement)(element);
  const scroll = (0, import_dom.getNodeScroll)(element);
  const body = element.ownerDocument.body;
  const width = (0, import_utils.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = (0, import_utils.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if ((0, import_dom.getComputedStyle)(body).direction === "rtl") {
    x += (0, import_utils.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = (0, import_dom.getWindow)(element);
  const html = (0, import_dom.getDocumentElement)(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = (0, import_dom.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}
var absoluteOrFixed = /* @__PURE__ */new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = (0, import_dom.isHTMLElement)(element) ? getScale(element) : (0, import_utils.createCoords)(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect((0, import_dom.getDocumentElement)(element));
  } else if ((0, import_dom.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return (0, import_core.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = (0, import_dom.getParentNode)(element);
  if (parentNode === stopNode || !(0, import_dom.isElement)(parentNode) || (0, import_dom.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0, import_dom.getComputedStyle)(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = (0, import_dom.getOverflowAncestors)(element, [], false).filter(el => (0, import_dom.isElement)(el) && (0, import_dom.getNodeName)(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = (0, import_dom.getComputedStyle)(element).position === "fixed";
  let currentNode = elementIsFixed ? (0, import_dom.getParentNode)(element) : element;
  while ((0, import_dom.isElement)(currentNode) && !(0, import_dom.isLastTraversableNode)(currentNode)) {
    const computedStyle = (0, import_dom.getComputedStyle)(currentNode);
    const currentNodeIsContaining = (0, import_dom.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || (0, import_dom.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0, import_dom.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? (0, import_dom.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0, import_utils.max)(rect.top, accRect.top);
    accRect.right = (0, import_utils.min)(rect.right, accRect.right);
    accRect.bottom = (0, import_utils.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, import_utils.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = (0, import_dom.isHTMLElement)(offsetParent);
  const documentElement = (0, import_dom.getDocumentElement)(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = (0, import_utils.createCoords)(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, import_dom.getNodeName)(offsetParent) !== "body" || (0, import_dom.isOverflowElement)(documentElement)) {
      scroll = (0, import_dom.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, import_utils.createCoords)(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return (0, import_dom.getComputedStyle)(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!(0, import_dom.isHTMLElement)(element) || (0, import_dom.getComputedStyle)(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if ((0, import_dom.getDocumentElement)(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = (0, import_dom.getWindow)(element);
  if ((0, import_dom.isTopLayer)(element)) {
    return win;
  }
  if (!(0, import_dom.isHTMLElement)(element)) {
    let svgOffsetParent = (0, import_dom.getParentNode)(element);
    while (svgOffsetParent && !(0, import_dom.isLastTraversableNode)(svgOffsetParent)) {
      if ((0, import_dom.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = (0, import_dom.getParentNode)(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0, import_dom.isTableElement)(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (0, import_dom.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0, import_dom.isContainingBlock)(offsetParent)) {
    return win;
  }
  return offsetParent || (0, import_dom.getContainingBlock)(element) || win;
}
var getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return (0, import_dom.getComputedStyle)(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: import_dom.getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: import_dom.isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = (0, import_dom.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = (0, import_utils.floor)(top);
    const insetRight = (0, import_utils.floor)(root.clientWidth - (left + width));
    const insetBottom = (0, import_utils.floor)(root.clientHeight - (top + height));
    const insetLeft = (0, import_utils.floor)(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: (0, import_utils.max)(0, (0, import_utils.min)(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? (0, import_dom.getOverflowAncestors)(referenceEl) : []), ...(0, import_dom.getOverflowAncestors)(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow = import_core.detectOverflow;
var offset = import_core.offset;
var autoPlacement = import_core.autoPlacement;
var shift = import_core.shift;
var flip = import_core.flip;
var size = import_core.size;
var hide = import_core.hide;
var arrow = import_core.arrow;
var inline = import_core.inline;
var limitShift = import_core.limitShift;
var computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return (0, import_core.computePosition)(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvZG9tLjEuNy40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9kb20vZGlzdC9mbG9hdGluZy11aS5kb20ubWpzIl0sIm5hbWVzIjpbImRvbV8xXzdfNF9leHBvcnRzIiwiX19leHBvcnQiLCJhcnJvdyIsImF1dG9QbGFjZW1lbnQiLCJhdXRvVXBkYXRlIiwiY29tcHV0ZVBvc2l0aW9uIiwiZGV0ZWN0T3ZlcmZsb3ciLCJmbGlwIiwiZ2V0T3ZlcmZsb3dBbmNlc3RvcnMiLCJpbXBvcnRfZG9tMiIsImhpZGUiLCJpbmxpbmUiLCJsaW1pdFNoaWZ0Iiwib2Zmc2V0IiwicGxhdGZvcm0iLCJzaGlmdCIsInNpemUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2NvcmUiLCJyZXF1aXJlIiwiaW1wb3J0X3V0aWxzIiwiaW1wb3J0X2RvbSIsImdldENzc0RpbWVuc2lvbnMiLCJlbGVtZW50IiwiY3NzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwicGFyc2VGbG9hdCIsImhlaWdodCIsImhhc09mZnNldCIsImlzSFRNTEVsZW1lbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInNob3VsZEZhbGxiYWNrIiwicm91bmQiLCIkIiwidW53cmFwRWxlbWVudCIsImlzRWxlbWVudCIsImNvbnRleHRFbGVtZW50IiwiZ2V0U2NhbGUiLCJkb21FbGVtZW50IiwiY3JlYXRlQ29vcmRzIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJub09mZnNldHMiLCJnZXRWaXN1YWxPZmZzZXRzIiwid2luIiwiZ2V0V2luZG93IiwiaXNXZWJLaXQiLCJ2aXN1YWxWaWV3cG9ydCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJzaG91bGRBZGRWaXN1YWxPZmZzZXRzIiwiaXNGaXhlZCIsImZsb2F0aW5nT2Zmc2V0UGFyZW50IiwiaW5jbHVkZVNjYWxlIiwiaXNGaXhlZFN0cmF0ZWd5Iiwib2Zmc2V0UGFyZW50IiwiY2xpZW50UmVjdCIsInNjYWxlIiwidmlzdWFsT2Zmc2V0cyIsImxlZnQiLCJ0b3AiLCJvZmZzZXRXaW4iLCJjdXJyZW50V2luIiwiY3VycmVudElGcmFtZSIsImdldEZyYW1lRWxlbWVudCIsImlmcmFtZVNjYWxlIiwiaWZyYW1lUmVjdCIsImNsaWVudExlZnQiLCJwYWRkaW5nTGVmdCIsImNsaWVudFRvcCIsInBhZGRpbmdUb3AiLCJyZWN0VG9DbGllbnRSZWN0IiwiZ2V0V2luZG93U2Nyb2xsQmFyWCIsImxlZnRTY3JvbGwiLCJnZXROb2RlU2Nyb2xsIiwic2Nyb2xsTGVmdCIsImdldERvY3VtZW50RWxlbWVudCIsImdldEhUTUxPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGwiLCJodG1sUmVjdCIsInNjcm9sbFRvcCIsImNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0IiwiX3JlZiIsImVsZW1lbnRzIiwic3RyYXRlZ3kiLCJ0b3BMYXllciIsImlzVG9wTGF5ZXIiLCJmbG9hdGluZyIsIm9mZnNldHMiLCJpc09mZnNldFBhcmVudEFuRWxlbWVudCIsImdldE5vZGVOYW1lIiwiaXNPdmVyZmxvd0VsZW1lbnQiLCJvZmZzZXRSZWN0IiwiaHRtbE9mZnNldCIsImdldENsaWVudFJlY3RzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RG9jdW1lbnRSZWN0IiwiaHRtbCIsImJvZHkiLCJvd25lckRvY3VtZW50IiwibWF4Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImRpcmVjdGlvbiIsIlNDUk9MTEJBUl9NQVgiLCJnZXRWaWV3cG9ydFJlY3QiLCJ2aXN1YWxWaWV3cG9ydEJhc2VkIiwid2luZG93U2Nyb2xsYmFyWCIsImRvYyIsImJvZHlTdHlsZXMiLCJib2R5TWFyZ2luSW5saW5lIiwiY29tcGF0TW9kZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImNsaXBwaW5nU3RhYmxlU2Nyb2xsYmFyV2lkdGgiLCJNYXRoIiwiYWJzIiwiYWJzb2x1dGVPckZpeGVkIiwiU2V0IiwiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDbGllbnRSZWN0RnJvbUNsaXBwaW5nQW5jZXN0b3IiLCJjbGlwcGluZ0FuY2VzdG9yIiwiaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yIiwic3RvcE5vZGUiLCJwYXJlbnROb2RlIiwiZ2V0UGFyZW50Tm9kZSIsImlzTGFzdFRyYXZlcnNhYmxlTm9kZSIsInBvc2l0aW9uIiwiZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzIiwiY2FjaGUiLCJjYWNoZWRSZXN1bHQiLCJnZXQiLCJyZXN1bHQiLCJmaWx0ZXIiLCJlbCIsImN1cnJlbnRDb250YWluaW5nQmxvY2tDb21wdXRlZFN0eWxlIiwiZWxlbWVudElzRml4ZWQiLCJjdXJyZW50Tm9kZSIsImNvbXB1dGVkU3R5bGUiLCJjdXJyZW50Tm9kZUlzQ29udGFpbmluZyIsImlzQ29udGFpbmluZ0Jsb2NrIiwic2hvdWxkRHJvcEN1cnJlbnROb2RlIiwiaGFzIiwiYW5jZXN0b3IiLCJzZXQiLCJnZXRDbGlwcGluZ1JlY3QiLCJib3VuZGFyeSIsInJvb3RCb3VuZGFyeSIsImVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycyIsIl9jIiwiY29uY2F0IiwiY2xpcHBpbmdBbmNlc3RvcnMiLCJmaXJzdENsaXBwaW5nQW5jZXN0b3IiLCJjbGlwcGluZ1JlY3QiLCJyZWR1Y2UiLCJhY2NSZWN0IiwicmlnaHQiLCJtaW4iLCJib3R0b20iLCJnZXREaW1lbnNpb25zIiwiZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQiLCJzZXRMZWZ0UlRMU2Nyb2xsYmFyT2Zmc2V0IiwiaXNTdGF0aWNQb3NpdGlvbmVkIiwiZ2V0VHJ1ZU9mZnNldFBhcmVudCIsInBvbHlmaWxsIiwicmF3T2Zmc2V0UGFyZW50IiwiZ2V0T2Zmc2V0UGFyZW50Iiwic3ZnT2Zmc2V0UGFyZW50IiwiaXNUYWJsZUVsZW1lbnQiLCJnZXRDb250YWluaW5nQmxvY2siLCJnZXRFbGVtZW50UmVjdHMiLCJkYXRhIiwiZ2V0T2Zmc2V0UGFyZW50Rm4iLCJnZXREaW1lbnNpb25zRm4iLCJmbG9hdGluZ0RpbWVuc2lvbnMiLCJyZWZlcmVuY2UiLCJpc1JUTCIsInJlY3RzQXJlRXF1YWwiLCJhIiwiYiIsIm9ic2VydmVNb3ZlIiwib25Nb3ZlIiwiaW8iLCJ0aW1lb3V0SWQiLCJyb290IiwiY2xlYW51cCIsIl9pbyIsImNsZWFyVGltZW91dCIsImRpc2Nvbm5lY3QiLCJyZWZyZXNoIiwic2tpcCIsInRocmVzaG9sZCIsImVsZW1lbnRSZWN0Rm9yUm9vdE1hcmdpbiIsImluc2V0VG9wIiwiZmxvb3IiLCJpbnNldFJpZ2h0IiwiaW5zZXRCb3R0b20iLCJpbnNldExlZnQiLCJyb290TWFyZ2luIiwib3B0aW9ucyIsImlzRmlyc3RVcGRhdGUiLCJoYW5kbGVPYnNlcnZlIiwiZW50cmllcyIsInJhdGlvIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJzZXRUaW1lb3V0IiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJfZSIsIm9ic2VydmUiLCJ1cGRhdGUiLCJhbmNlc3RvclNjcm9sbCIsImFuY2VzdG9yUmVzaXplIiwiZWxlbWVudFJlc2l6ZSIsIlJlc2l6ZU9ic2VydmVyIiwibGF5b3V0U2hpZnQiLCJhbmltYXRpb25GcmFtZSIsInJlZmVyZW5jZUVsIiwiYW5jZXN0b3JzIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiY2xlYW51cElvIiwicmVvYnNlcnZlRnJhbWUiLCJyZXNpemVPYnNlcnZlciIsImZpcnN0RW50cnkiLCJ0YXJnZXQiLCJ1bm9ic2VydmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9yZXNpemVPYnNlcnZlciIsImZyYW1lSWQiLCJwcmV2UmVmUmVjdCIsImZyYW1lTG9vcCIsIm5leHRSZWZSZWN0IiwiX3Jlc2l6ZU9ic2VydmVyMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJNYXAiLCJtZXJnZWRPcHRpb25zIiwicGxhdGZvcm1XaXRoQ2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGlCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsaUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQyxXQUFBLENBQUFELG9CQUFBO0VBQUFFLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFuQixpQkFBQTs7O0FDQUEsSUFBQW9CLFdBQUEsR0FBcVNDLE9BQUE7QUFDclMsSUFBQUMsWUFBQSxHQUFxREQsT0FBQTtBQUNyRCxJQUFBRSxVQUFBLEdBQXlURixPQUFBO0FBQ3pULElBQUFaLFdBQUEsR0FBcUNZLE9BQUE7QUFFckMsU0FBU0csaUJBQWlCQyxPQUFBLEVBQVM7RUFDakMsTUFBTUMsR0FBQSxPQUFNSCxVQUFBLENBQUFJLGdCQUFBLEVBQW1C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QixXQUFBLENBQUFsQixLQUFBO0FBT2QsSUFBTVMsTUFBQSxHQUFTUyxXQUFBLENBQUFULE1BQUE7QUFLZixJQUFNQyxVQUFBLEdBQWFRLFdBQUEsQ0FBQVIsVUFBQTtBQU1uQixJQUFNUCxlQUFBLEdBQWtCQSxDQUFDc0wsU0FBQSxFQUFXM0YsUUFBQSxFQUFVbUgsT0FBQSxLQUFZO0VBSXhELE1BQU10RSxLQUFBLEdBQVEsbUJBQUkyRyxHQUFBLENBQUk7RUFDdEIsTUFBTUMsYUFBQSxHQUFnQjtJQUNwQjNPLFFBQUE7SUFDQSxHQUFHcU07RUFDTDtFQUNBLE1BQU11QyxpQkFBQSxHQUFvQjtJQUN4QixHQUFHRCxhQUFBLENBQWMzTyxRQUFBO0lBQ2pCbUosRUFBQSxFQUFJcEI7RUFDTjtFQUNBLFdBQU96SCxXQUFBLENBQUFmLGVBQUEsRUFBa0JzTCxTQUFBLEVBQVczRixRQUFBLEVBQVU7SUFDNUMsR0FBR3lKLGFBQUE7SUFDSDNPLFFBQUEsRUFBVTRPO0VBQ1osQ0FBQztBQUNIIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=