System.register(["@floating-ui/utils@0.2.10"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"],["@floating-ui/core","1.7.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.10', dep)],
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

// .beyond/uimport/@floating-ui/core.1.7.3.js
var core_1_7_3_exports = {};
__export(core_1_7_3_exports, {
  arrow: () => arrow,
  autoPlacement: () => autoPlacement,
  computePosition: () => computePosition,
  detectOverflow: () => detectOverflow,
  flip: () => flip,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  rectToClientRect: () => import_utils2.rectToClientRect,
  shift: () => shift,
  size: () => size
});
module.exports = __toCommonJS(core_1_7_3_exports);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var import_utils = require("@floating-ui/utils@0.2.10");
var import_utils2 = require("@floating-ui/utils@0.2.10");
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = (0, import_utils.getSideAxis)(placement);
  const alignmentAxis = (0, import_utils.getAlignmentAxis)(placement);
  const alignLength = (0, import_utils.getAxisLength)(alignmentAxis);
  const side = (0, import_utils.getSide)(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch ((0, import_utils.getAlignment)(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = (0, import_utils.evaluate)(options, state);
  const paddingObject = (0, import_utils.getPaddingObject)(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = (0, import_utils.rectToClientRect)(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = (0, import_utils.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = options => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = (0, import_utils.evaluate)(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = (0, import_utils.getPaddingObject)(padding);
    const coords = {
      x,
      y
    };
    const axis = (0, import_utils.getAlignmentAxis)(placement);
    const length = (0, import_utils.getAxisLength)(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = (0, import_utils.min)(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = (0, import_utils.min)(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = (0, import_utils.clamp)(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && (0, import_utils.getAlignment)(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => (0, import_utils.getAlignment)(placement) === alignment), ...allowedPlacements.filter(placement => (0, import_utils.getAlignment)(placement) !== alignment)] : allowedPlacements.filter(placement => (0, import_utils.getSide)(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return (0, import_utils.getAlignment)(placement) === alignment || (autoAlignment ? (0, import_utils.getOppositeAlignmentPlacement)(placement) !== placement : false);
    }
    return true;
  });
}
var autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = import_utils.placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === import_utils.placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = (0, import_utils.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[(0, import_utils.getSide)(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment2 = (0, import_utils.getAlignment)(d.placement);
        return [d.placement, alignment2 && crossAxis ? d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) : d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0, (0, import_utils.getAlignment)(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
var flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = (0, import_utils.getSide)(placement);
      const initialSideAxis = (0, import_utils.getSideAxis)(initialPlacement);
      const isBasePlacement = (0, import_utils.getSide)(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [(0, import_utils.getOppositePlacement)(initialPlacement)] : (0, import_utils.getExpandedPlacements)(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...(0, import_utils.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = (0, import_utils.getAlignmentSides)(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every(side2 => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== (0, import_utils.getSideAxis)(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || overflowsData.every(d => (0, import_utils.getSideAxis)(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit":
              {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = (0, import_utils.getSideAxis)(d.placement);
                    return currentSideAxis === initialSideAxis || currentSideAxis === "y";
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow2 => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return import_utils.sides.some(side => overflow[side] >= 0);
}
var hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      switch (strategy) {
        case "referenceHidden":
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: "reference"
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case "escaped":
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};
function getBoundingRect(rects) {
  const minX = (0, import_utils.min)(...rects.map(rect => rect.left));
  const minY = (0, import_utils.min)(...rects.map(rect => rect.top));
  const maxX = (0, import_utils.max)(...rects.map(rect => rect.right));
  const maxY = (0, import_utils.max)(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => (0, import_utils.rectToClientRect)(getBoundingRect(rect)));
}
var inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "inline",
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      const {
        padding = 2,
        x,
        y
      } = (0, import_utils.evaluate)(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = (0, import_utils.rectToClientRect)(getBoundingRect(nativeClientRects));
      const paddingObject = (0, import_utils.getPaddingObject)(padding);
      function getBoundingClientRect() {
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }
        if (clientRects.length >= 2) {
          if ((0, import_utils.getSideAxis)(placement) === "y") {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = (0, import_utils.getSide)(placement) === "top";
            const top2 = firstRect.top;
            const bottom2 = lastRect.bottom;
            const left2 = isTop ? firstRect.left : lastRect.left;
            const right2 = isTop ? firstRect.right : lastRect.right;
            const width2 = right2 - left2;
            const height2 = bottom2 - top2;
            return {
              top: top2,
              bottom: bottom2,
              left: left2,
              right: right2,
              width: width2,
              height: height2,
              x: left2,
              y: top2
            };
          }
          const isLeftSide = (0, import_utils.getSide)(placement) === "left";
          const maxRight = (0, import_utils.max)(...clientRects.map(rect => rect.right));
          const minLeft = (0, import_utils.min)(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};
var originSides = /* @__PURE__ */new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = (0, import_utils.getSide)(placement);
  const alignment = (0, import_utils.getAlignment)(placement);
  const isVertical = (0, import_utils.getSideAxis)(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = (0, import_utils.evaluate)(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = (0, import_utils.getSideAxis)((0, import_utils.getSide)(placement));
      const mainAxis = (0, import_utils.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = (0, import_utils.clamp)(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = (0, import_utils.clamp)(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = (0, import_utils.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = (0, import_utils.getSideAxis)(placement);
      const mainAxis = (0, import_utils.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = (0, import_utils.evaluate)(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has((0, import_utils.getSide)(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = (0, import_utils.evaluate)(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = (0, import_utils.getSide)(placement);
      const alignment = (0, import_utils.getAlignment)(placement);
      const isYAxis = (0, import_utils.getSideAxis)(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = (0, import_utils.min)(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = (0, import_utils.min)(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = (0, import_utils.max)(overflow.left, 0);
        const xMax = (0, import_utils.max)(overflow.right, 0);
        const yMin = (0, import_utils.max)(overflow.top, 0);
        const yMax = (0, import_utils.max)(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, import_utils.max)(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, import_utils.max)(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvY29yZS4xLjcuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvY29yZS9kaXN0L2Zsb2F0aW5nLXVpLmNvcmUubWpzIl0sIm5hbWVzIjpbImNvcmVfMV83XzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiYXJyb3ciLCJhdXRvUGxhY2VtZW50IiwiY29tcHV0ZVBvc2l0aW9uIiwiZGV0ZWN0T3ZlcmZsb3ciLCJmbGlwIiwiaGlkZSIsImlubGluZSIsImxpbWl0U2hpZnQiLCJvZmZzZXQiLCJyZWN0VG9DbGllbnRSZWN0IiwiaW1wb3J0X3V0aWxzMiIsInNoaWZ0Iiwic2l6ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfdXRpbHMiLCJyZXF1aXJlIiwiY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQiLCJfcmVmIiwicGxhY2VtZW50IiwicnRsIiwicmVmZXJlbmNlIiwiZmxvYXRpbmciLCJzaWRlQXhpcyIsImdldFNpZGVBeGlzIiwiYWxpZ25tZW50QXhpcyIsImdldEFsaWdubWVudEF4aXMiLCJhbGlnbkxlbmd0aCIsImdldEF4aXNMZW5ndGgiLCJzaWRlIiwiZ2V0U2lkZSIsImlzVmVydGljYWwiLCJjb21tb25YIiwieCIsIndpZHRoIiwiY29tbW9uWSIsInkiLCJoZWlnaHQiLCJjb21tb25BbGlnbiIsImNvb3JkcyIsImdldEFsaWdubWVudCIsImNvbmZpZyIsInN0cmF0ZWd5IiwibWlkZGxld2FyZSIsInBsYXRmb3JtIiwidmFsaWRNaWRkbGV3YXJlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImlzUlRMIiwicmVjdHMiLCJnZXRFbGVtZW50UmVjdHMiLCJzdGF0ZWZ1bFBsYWNlbWVudCIsIm1pZGRsZXdhcmVEYXRhIiwicmVzZXRDb3VudCIsImkiLCJsZW5ndGgiLCJuYW1lIiwiZm4iLCJuZXh0WCIsIm5leHRZIiwiZGF0YSIsInJlc2V0IiwiaW5pdGlhbFBsYWNlbWVudCIsImVsZW1lbnRzIiwic3RhdGUiLCJvcHRpb25zIiwiX2F3YWl0JHBsYXRmb3JtJGlzRWxlIiwiYm91bmRhcnkiLCJyb290Qm91bmRhcnkiLCJlbGVtZW50Q29udGV4dCIsImFsdEJvdW5kYXJ5IiwicGFkZGluZyIsImV2YWx1YXRlIiwicGFkZGluZ09iamVjdCIsImdldFBhZGRpbmdPYmplY3QiLCJhbHRDb250ZXh0IiwiZWxlbWVudCIsImNsaXBwaW5nQ2xpZW50UmVjdCIsImdldENsaXBwaW5nUmVjdCIsImlzRWxlbWVudCIsImNvbnRleHRFbGVtZW50IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwicmVjdCIsIm9mZnNldFBhcmVudCIsImdldE9mZnNldFBhcmVudCIsIm9mZnNldFNjYWxlIiwiZ2V0U2NhbGUiLCJlbGVtZW50Q2xpZW50UmVjdCIsImNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiYXhpcyIsImFycm93RGltZW5zaW9ucyIsImdldERpbWVuc2lvbnMiLCJpc1lBeGlzIiwibWluUHJvcCIsIm1heFByb3AiLCJjbGllbnRQcm9wIiwiZW5kRGlmZiIsInN0YXJ0RGlmZiIsImFycm93T2Zmc2V0UGFyZW50IiwiY2xpZW50U2l6ZSIsImNlbnRlclRvUmVmZXJlbmNlIiwibGFyZ2VzdFBvc3NpYmxlUGFkZGluZyIsIm1pblBhZGRpbmciLCJtaW4iLCJtYXhQYWRkaW5nIiwibWluJDEiLCJtYXgyIiwiY2VudGVyIiwib2Zmc2V0MiIsImNsYW1wIiwic2hvdWxkQWRkT2Zmc2V0IiwiYWxpZ25tZW50T2Zmc2V0IiwiY2VudGVyT2Zmc2V0IiwiZ2V0UGxhY2VtZW50TGlzdCIsImFsaWdubWVudCIsImF1dG9BbGlnbm1lbnQiLCJhbGxvd2VkUGxhY2VtZW50cyIsImFsbG93ZWRQbGFjZW1lbnRzU29ydGVkQnlBbGlnbm1lbnQiLCJnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudCIsIl9taWRkbGV3YXJlRGF0YSRhdXRvUCIsIl9taWRkbGV3YXJlRGF0YSRhdXRvUDIiLCJfcGxhY2VtZW50c1RoYXRGaXRPbkUiLCJjcm9zc0F4aXMiLCJwbGFjZW1lbnRzIiwiZGV0ZWN0T3ZlcmZsb3dPcHRpb25zIiwicGxhY2VtZW50cyQxIiwib3ZlcmZsb3ciLCJjdXJyZW50SW5kZXgiLCJpbmRleCIsImN1cnJlbnRQbGFjZW1lbnQiLCJhbGlnbm1lbnRTaWRlcyIsImdldEFsaWdubWVudFNpZGVzIiwiY3VycmVudE92ZXJmbG93cyIsImFsbE92ZXJmbG93cyIsIm92ZXJmbG93cyIsIm5leHRQbGFjZW1lbnQiLCJwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2UiLCJtYXAiLCJkIiwiYWxpZ25tZW50MiIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwidiIsInNvcnQiLCJhIiwiYiIsInBsYWNlbWVudHNUaGF0Rml0T25FYWNoU2lkZSIsImV2ZXJ5IiwicmVzZXRQbGFjZW1lbnQiLCJfbWlkZGxld2FyZURhdGEkYXJyb3ciLCJfbWlkZGxld2FyZURhdGEkZmxpcCIsIm1haW5BeGlzIiwiY2hlY2tNYWluQXhpcyIsImNoZWNrQ3Jvc3NBeGlzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwic3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIiwiZmFsbGJhY2tTdHJhdGVneSIsImZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24iLCJmbGlwQWxpZ25tZW50IiwiaW5pdGlhbFNpZGVBeGlzIiwiaXNCYXNlUGxhY2VtZW50IiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJnZXRFeHBhbmRlZFBsYWNlbWVudHMiLCJoYXNGYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uIiwicHVzaCIsImdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMiLCJwbGFjZW1lbnRzMiIsIm92ZXJmbG93c0RhdGEiLCJzaWRlczIiLCJzaWRlMiIsIl9taWRkbGV3YXJlRGF0YSRmbGlwMiIsIl9vdmVyZmxvd3NEYXRhJGZpbHRlciIsIm5leHRJbmRleCIsImlnbm9yZUNyb3NzQXhpc092ZXJmbG93IiwiX292ZXJmbG93c0RhdGEkZmlsdGVyMiIsInBsYWNlbWVudDIiLCJjdXJyZW50U2lkZUF4aXMiLCJvdmVyZmxvdzIiLCJnZXRTaWRlT2Zmc2V0cyIsImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsInNpZGVzIiwic29tZSIsIm9mZnNldHMiLCJyZWZlcmVuY2VIaWRkZW5PZmZzZXRzIiwicmVmZXJlbmNlSGlkZGVuIiwiZXNjYXBlZE9mZnNldHMiLCJlc2NhcGVkIiwiZ2V0Qm91bmRpbmdSZWN0IiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4IiwibWF4WSIsImdldFJlY3RzQnlMaW5lIiwic29ydGVkUmVjdHMiLCJncm91cHMiLCJwcmV2UmVjdCIsIm5hdGl2ZUNsaWVudFJlY3RzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0Q2xpZW50UmVjdHMiLCJjbGllbnRSZWN0cyIsImZhbGxiYWNrIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZmluZCIsImZpcnN0UmVjdCIsImxhc3RSZWN0IiwiaXNUb3AiLCJ0b3AyIiwiYm90dG9tMiIsImxlZnQyIiwicmlnaHQyIiwid2lkdGgyIiwiaGVpZ2h0MiIsImlzTGVmdFNpZGUiLCJtYXhSaWdodCIsIm1pbkxlZnQiLCJtZWFzdXJlUmVjdHMiLCJyZXNldFJlY3RzIiwib3JpZ2luU2lkZXMiLCJTZXQiLCJjb252ZXJ0VmFsdWVUb0Nvb3JkcyIsIm1haW5BeGlzTXVsdGkiLCJoYXMiLCJjcm9zc0F4aXNNdWx0aSIsInJhd1ZhbHVlIiwiX21pZGRsZXdhcmVEYXRhJG9mZnNlIiwiZGlmZkNvb3JkcyIsImxpbWl0ZXIiLCJ4MiIsInkyIiwiZ2V0T3Bwb3NpdGVBeGlzIiwibWFpbkF4aXNDb29yZCIsImNyb3NzQXhpc0Nvb3JkIiwibWluU2lkZSIsIm1heFNpZGUiLCJtaW4yIiwibGltaXRlZENvb3JkcyIsImVuYWJsZWQiLCJyYXdPZmZzZXQiLCJjb21wdXRlZE9mZnNldCIsImxlbiIsImxpbWl0TWluIiwibGltaXRNYXgiLCJfbWlkZGxld2FyZURhdGEkb2Zmc2UyIiwiaXNPcmlnaW5TaWRlIiwiX3N0YXRlJG1pZGRsZXdhcmVEYXRhIiwiX3N0YXRlJG1pZGRsZXdhcmVEYXRhMiIsImFwcGx5IiwiaGVpZ2h0U2lkZSIsIndpZHRoU2lkZSIsIm1heGltdW1DbGlwcGluZ0hlaWdodCIsIm1heGltdW1DbGlwcGluZ1dpZHRoIiwib3ZlcmZsb3dBdmFpbGFibGVIZWlnaHQiLCJvdmVyZmxvd0F2YWlsYWJsZVdpZHRoIiwibm9TaGlmdCIsImF2YWlsYWJsZUhlaWdodCIsImF2YWlsYWJsZVdpZHRoIiwieE1pbiIsInhNYXgiLCJ5TWluIiwieU1heCIsIm5leHREaW1lbnNpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUMsYUFBQSxDQUFBRCxnQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBakIsa0JBQUE7OztBQ0FBLElBQUFrQixZQUFBLEdBQWlUQyxPQUFBO0FBQ2pULElB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QSxLQUFTLElBQUlELElBQUEsR0FBT0MsSUFBQSxPQUFPelAsWUFBQSxDQUFBcUwsR0FBQSxFQUFJbEUsUUFBQSxDQUFTdkMsSUFBQSxFQUFNdUMsUUFBQSxDQUFTdEMsS0FBSztRQUMxRyxPQUFPO1VBQ0x5SyxlQUFBLEdBQWtCaE8sTUFBQSxHQUFTLEtBQUtvTyxJQUFBLEtBQVMsS0FBS0MsSUFBQSxLQUFTLElBQUlELElBQUEsR0FBT0MsSUFBQSxPQUFPM1AsWUFBQSxDQUFBcUwsR0FBQSxFQUFJbEUsUUFBQSxDQUFTekMsR0FBQSxFQUFLeUMsUUFBQSxDQUFTeEMsTUFBTTtRQUM1RztNQUNGO01BQ0EsTUFBTW1LLEtBQUEsQ0FBTTtRQUNWLEdBQUc3TCxLQUFBO1FBQ0hzTSxjQUFBO1FBQ0FEO01BQ0YsQ0FBQztNQUNELE1BQU1NLGNBQUEsR0FBaUIsTUFBTS9OLFFBQUEsQ0FBU21ELGFBQUEsQ0FBY2hDLFFBQUEsQ0FBU3pDLFFBQVE7TUFDckUsSUFBSVksS0FBQSxLQUFVeU8sY0FBQSxDQUFlek8sS0FBQSxJQUFTRyxNQUFBLEtBQVdzTyxjQUFBLENBQWV0TyxNQUFBLEVBQVE7UUFDdEUsT0FBTztVQUNMd0IsS0FBQSxFQUFPO1lBQ0xaLEtBQUEsRUFBTztVQUNUO1FBQ0Y7TUFDRjtNQUNBLE9BQU8sQ0FBQztJQUNWO0VBQ0Y7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9