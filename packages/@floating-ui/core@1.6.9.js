System.register(["@floating-ui/utils@0.2.9"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.9"],["@floating-ui/core","1.6.9"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.9', dep)],
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

// .beyond/uimport/@floating-ui/core.1.6.9.js
var core_1_6_9_exports = {};
__export(core_1_6_9_exports, {
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
module.exports = __toCommonJS(core_1_6_9_exports);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var import_utils = require("@floating-ui/utils@0.2.9");
var import_utils2 = require("@floating-ui/utils@0.2.9");
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
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
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
        const isOriginSide = ["top", "left"].includes((0, import_utils.getSide)(placement));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvY29yZS4xLjYuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvY29yZS9kaXN0L2Zsb2F0aW5nLXVpLmNvcmUubWpzIl0sIm5hbWVzIjpbImNvcmVfMV82XzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiYXJyb3ciLCJhdXRvUGxhY2VtZW50IiwiY29tcHV0ZVBvc2l0aW9uIiwiZGV0ZWN0T3ZlcmZsb3ciLCJmbGlwIiwiaGlkZSIsImlubGluZSIsImxpbWl0U2hpZnQiLCJvZmZzZXQiLCJyZWN0VG9DbGllbnRSZWN0IiwiaW1wb3J0X3V0aWxzMiIsInNoaWZ0Iiwic2l6ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfdXRpbHMiLCJyZXF1aXJlIiwiY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQiLCJfcmVmIiwicGxhY2VtZW50IiwicnRsIiwicmVmZXJlbmNlIiwiZmxvYXRpbmciLCJzaWRlQXhpcyIsImdldFNpZGVBeGlzIiwiYWxpZ25tZW50QXhpcyIsImdldEFsaWdubWVudEF4aXMiLCJhbGlnbkxlbmd0aCIsImdldEF4aXNMZW5ndGgiLCJzaWRlIiwiZ2V0U2lkZSIsImlzVmVydGljYWwiLCJjb21tb25YIiwieCIsIndpZHRoIiwiY29tbW9uWSIsInkiLCJoZWlnaHQiLCJjb21tb25BbGlnbiIsImNvb3JkcyIsImdldEFsaWdubWVudCIsImNvbmZpZyIsInN0cmF0ZWd5IiwibWlkZGxld2FyZSIsInBsYXRmb3JtIiwidmFsaWRNaWRkbGV3YXJlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImlzUlRMIiwicmVjdHMiLCJnZXRFbGVtZW50UmVjdHMiLCJzdGF0ZWZ1bFBsYWNlbWVudCIsIm1pZGRsZXdhcmVEYXRhIiwicmVzZXRDb3VudCIsImkiLCJsZW5ndGgiLCJuYW1lIiwiZm4iLCJuZXh0WCIsIm5leHRZIiwiZGF0YSIsInJlc2V0IiwiaW5pdGlhbFBsYWNlbWVudCIsImVsZW1lbnRzIiwic3RhdGUiLCJvcHRpb25zIiwiX2F3YWl0JHBsYXRmb3JtJGlzRWxlIiwiYm91bmRhcnkiLCJyb290Qm91bmRhcnkiLCJlbGVtZW50Q29udGV4dCIsImFsdEJvdW5kYXJ5IiwicGFkZGluZyIsImV2YWx1YXRlIiwicGFkZGluZ09iamVjdCIsImdldFBhZGRpbmdPYmplY3QiLCJhbHRDb250ZXh0IiwiZWxlbWVudCIsImNsaXBwaW5nQ2xpZW50UmVjdCIsImdldENsaXBwaW5nUmVjdCIsImlzRWxlbWVudCIsImNvbnRleHRFbGVtZW50IiwiZ2V0RG9jdW1lbnRFbGVtZW50IiwicmVjdCIsIm9mZnNldFBhcmVudCIsImdldE9mZnNldFBhcmVudCIsIm9mZnNldFNjYWxlIiwiZ2V0U2NhbGUiLCJlbGVtZW50Q2xpZW50UmVjdCIsImNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiYXhpcyIsImFycm93RGltZW5zaW9ucyIsImdldERpbWVuc2lvbnMiLCJpc1lBeGlzIiwibWluUHJvcCIsIm1heFByb3AiLCJjbGllbnRQcm9wIiwiZW5kRGlmZiIsInN0YXJ0RGlmZiIsImFycm93T2Zmc2V0UGFyZW50IiwiY2xpZW50U2l6ZSIsImNlbnRlclRvUmVmZXJlbmNlIiwibGFyZ2VzdFBvc3NpYmxlUGFkZGluZyIsIm1pblBhZGRpbmciLCJtaW4iLCJtYXhQYWRkaW5nIiwibWluJDEiLCJtYXgyIiwiY2VudGVyIiwib2Zmc2V0MiIsImNsYW1wIiwic2hvdWxkQWRkT2Zmc2V0IiwiYWxpZ25tZW50T2Zmc2V0IiwiY2VudGVyT2Zmc2V0IiwiZ2V0UGxhY2VtZW50TGlzdCIsImFsaWdubWVudCIsImF1dG9BbGlnbm1lbnQiLCJhbGxvd2VkUGxhY2VtZW50cyIsImFsbG93ZWRQbGFjZW1lbnRzU29ydGVkQnlBbGlnbm1lbnQiLCJnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudCIsIl9taWRkbGV3YXJlRGF0YSRhdXRvUCIsIl9taWRkbGV3YXJlRGF0YSRhdXRvUDIiLCJfcGxhY2VtZW50c1RoYXRGaXRPbkUiLCJjcm9zc0F4aXMiLCJwbGFjZW1lbnRzIiwiZGV0ZWN0T3ZlcmZsb3dPcHRpb25zIiwicGxhY2VtZW50cyQxIiwib3ZlcmZsb3ciLCJjdXJyZW50SW5kZXgiLCJpbmRleCIsImN1cnJlbnRQbGFjZW1lbnQiLCJhbGlnbm1lbnRTaWRlcyIsImdldEFsaWdubWVudFNpZGVzIiwiY3VycmVudE92ZXJmbG93cyIsImFsbE92ZXJmbG93cyIsIm92ZXJmbG93cyIsIm5leHRQbGFjZW1lbnQiLCJwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2UiLCJtYXAiLCJkIiwiYWxpZ25tZW50MiIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwidiIsInNvcnQiLCJhIiwiYiIsInBsYWNlbWVudHNUaGF0Rml0T25FYWNoU2lkZSIsImV2ZXJ5IiwicmVzZXRQbGFjZW1lbnQiLCJfbWlkZGxld2FyZURhdGEkYXJyb3ciLCJfbWlkZGxld2FyZURhdGEkZmxpcCIsIm1haW5BeGlzIiwiY2hlY2tNYWluQXhpcyIsImNoZWNrQ3Jvc3NBeGlzIiwiZmFsbGJhY2tQbGFjZW1lbnRzIiwic3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIiwiZmFsbGJhY2tTdHJhdGVneSIsImZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24iLCJmbGlwQWxpZ25tZW50IiwiaW5pdGlhbFNpZGVBeGlzIiwiaXNCYXNlUGxhY2VtZW50IiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJnZXRFeHBhbmRlZFBsYWNlbWVudHMiLCJoYXNGYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uIiwicHVzaCIsImdldE9wcG9zaXRlQXhpc1BsYWNlbWVudHMiLCJwbGFjZW1lbnRzMiIsIm92ZXJmbG93c0RhdGEiLCJzaWRlczIiLCJzaWRlMiIsIl9taWRkbGV3YXJlRGF0YSRmbGlwMiIsIl9vdmVyZmxvd3NEYXRhJGZpbHRlciIsIm5leHRJbmRleCIsIl9vdmVyZmxvd3NEYXRhJGZpbHRlcjIiLCJwbGFjZW1lbnQyIiwiY3VycmVudFNpZGVBeGlzIiwib3ZlcmZsb3cyIiwiZ2V0U2lkZU9mZnNldHMiLCJpc0FueVNpZGVGdWxseUNsaXBwZWQiLCJzaWRlcyIsInNvbWUiLCJvZmZzZXRzIiwicmVmZXJlbmNlSGlkZGVuT2Zmc2V0cyIsInJlZmVyZW5jZUhpZGRlbiIsImVzY2FwZWRPZmZzZXRzIiwiZXNjYXBlZCIsImdldEJvdW5kaW5nUmVjdCIsIm1pblgiLCJtaW5ZIiwibWF4WCIsIm1heCIsIm1heFkiLCJnZXRSZWN0c0J5TGluZSIsInNvcnRlZFJlY3RzIiwiZ3JvdXBzIiwicHJldlJlY3QiLCJuYXRpdmVDbGllbnRSZWN0cyIsIkFycmF5IiwiZnJvbSIsImdldENsaWVudFJlY3RzIiwiY2xpZW50UmVjdHMiLCJmYWxsYmFjayIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZpbmQiLCJmaXJzdFJlY3QiLCJsYXN0UmVjdCIsImlzVG9wIiwidG9wMiIsImJvdHRvbTIiLCJsZWZ0MiIsInJpZ2h0MiIsIndpZHRoMiIsImhlaWdodDIiLCJpc0xlZnRTaWRlIiwibWF4UmlnaHQiLCJtaW5MZWZ0IiwibWVhc3VyZVJlY3RzIiwicmVzZXRSZWN0cyIsImNvbnZlcnRWYWx1ZVRvQ29vcmRzIiwibWFpbkF4aXNNdWx0aSIsImluY2x1ZGVzIiwiY3Jvc3NBeGlzTXVsdGkiLCJyYXdWYWx1ZSIsIl9taWRkbGV3YXJlRGF0YSRvZmZzZSIsImRpZmZDb29yZHMiLCJsaW1pdGVyIiwieDIiLCJ5MiIsImdldE9wcG9zaXRlQXhpcyIsIm1haW5BeGlzQ29vcmQiLCJjcm9zc0F4aXNDb29yZCIsIm1pblNpZGUiLCJtYXhTaWRlIiwibWluMiIsImxpbWl0ZWRDb29yZHMiLCJlbmFibGVkIiwicmF3T2Zmc2V0IiwiY29tcHV0ZWRPZmZzZXQiLCJsZW4iLCJsaW1pdE1pbiIsImxpbWl0TWF4IiwiX21pZGRsZXdhcmVEYXRhJG9mZnNlMiIsImlzT3JpZ2luU2lkZSIsIl9zdGF0ZSRtaWRkbGV3YXJlRGF0YSIsIl9zdGF0ZSRtaWRkbGV3YXJlRGF0YTIiLCJhcHBseSIsImhlaWdodFNpZGUiLCJ3aWR0aFNpZGUiLCJtYXhpbXVtQ2xpcHBpbmdIZWlnaHQiLCJtYXhpbXVtQ2xpcHBpbmdXaWR0aCIsIm92ZXJmbG93QXZhaWxhYmxlSGVpZ2h0Iiwib3ZlcmZsb3dBdmFpbGFibGVXaWR0aCIsIm5vU2hpZnQiLCJhdmFpbGFibGVIZWlnaHQiLCJhdmFpbGFibGVXaWR0aCIsInhNaW4iLCJ4TWF4IiwieU1pbiIsInlNYXgiLCJuZXh0RGltZW5zaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFDLGFBQUEsQ0FBQUQsZ0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWpCLGtCQUFBOzs7QUNBQSxJQUFBa0IsWUFBQSxHQUFpVEMsT0FBQTtBQUNqVCxJQUFBUCxhQUFBLEdBQWlDTyxPQUFBO0FBRWpDLFNBQVNDLDJCQUEyQkMs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O01BQ0EsS0FBS0wsc0JBQUEsR0FBeUJ6TCxLQUFBLENBQU1aLGNBQUEsQ0FBZTFDLEtBQUEsS0FBVSxRQUFRK08sc0JBQUEsQ0FBdUJULE9BQUEsQ0FBUTVNLENBQUEsRUFBRztRQUNyRzhOLGVBQUEsR0FBa0JMLHFCQUFBO01BQ3BCO01BQ0EsSUFBSUksT0FBQSxJQUFXLENBQUMzSSxTQUFBLEVBQVc7UUFDekIsTUFBTThJLElBQUEsT0FBT3JQLFlBQUEsQ0FBQW9MLEdBQUEsRUFBSWpFLFFBQUEsQ0FBU3ZDLElBQUEsRUFBTSxDQUFDO1FBQ2pDLE1BQU0wSyxJQUFBLE9BQU90UCxZQUFBLENBQUFvTCxHQUFBLEVBQUlqRSxRQUFBLENBQVN0QyxLQUFBLEVBQU8sQ0FBQztRQUNsQyxNQUFNMEssSUFBQSxPQUFPdlAsWUFBQSxDQUFBb0wsR0FBQSxFQUFJakUsUUFBQSxDQUFTekMsR0FBQSxFQUFLLENBQUM7UUFDaEMsTUFBTThLLElBQUEsT0FBT3hQLFlBQUEsQ0FBQW9MLEdBQUEsRUFBSWpFLFFBQUEsQ0FBU3hDLE1BQUEsRUFBUSxDQUFDO1FBQ25DLElBQUlNLE9BQUEsRUFBUztVQUNYbUssY0FBQSxHQUFpQmpPLEtBQUEsR0FBUSxLQUFLa08sSUFBQSxLQUFTLEtBQUtDLElBQUEsS0FBUyxJQUFJRCxJQUFBLEdBQU9DLElBQUEsT0FBT3RQLFlBQUEsQ0FBQW9MLEdBQUEsRUFBSWpFLFFBQUEsQ0FBU3ZDLElBQUEsRUFBTXVDLFFBQUEsQ0FBU3RDLEtBQUs7UUFDMUcsT0FBTztVQUNMc0ssZUFBQSxHQUFrQjdOLE1BQUEsR0FBUyxLQUFLaU8sSUFBQSxLQUFTLEtBQUtDLElBQUEsS0FBUyxJQUFJRCxJQUFBLEdBQU9DLElBQUEsT0FBT3hQLFlBQUEsQ0FBQW9MLEdBQUEsRUFBSWpFLFFBQUEsQ0FBU3pDLEdBQUEsRUFBS3lDLFFBQUEsQ0FBU3hDLE1BQU07UUFDNUc7TUFDRjtNQUNBLE1BQU1nSyxLQUFBLENBQU07UUFDVixHQUFHMUwsS0FBQTtRQUNIbU0sY0FBQTtRQUNBRDtNQUNGLENBQUM7TUFDRCxNQUFNTSxjQUFBLEdBQWlCLE1BQU01TixRQUFBLENBQVNtRCxhQUFBLENBQWNoQyxRQUFBLENBQVN6QyxRQUFRO01BQ3JFLElBQUlZLEtBQUEsS0FBVXNPLGNBQUEsQ0FBZXRPLEtBQUEsSUFBU0csTUFBQSxLQUFXbU8sY0FBQSxDQUFlbk8sTUFBQSxFQUFRO1FBQ3RFLE9BQU87VUFDTHdCLEtBQUEsRUFBTztZQUNMWixLQUFBLEVBQU87VUFDVDtRQUNGO01BQ0Y7TUFDQSxPQUFPLENBQUM7SUFDVjtFQUNGO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9