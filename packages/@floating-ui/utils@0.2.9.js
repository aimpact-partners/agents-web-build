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

// .beyond/uimport/@floating-ui/utils.0.2.9.js
var utils_0_2_9_exports = {};
__export(utils_0_2_9_exports, {
  alignments: () => alignments,
  clamp: () => clamp,
  createCoords: () => createCoords,
  evaluate: () => evaluate,
  expandPaddingObject: () => expandPaddingObject,
  floor: () => floor,
  getAlignment: () => getAlignment,
  getAlignmentAxis: () => getAlignmentAxis,
  getAlignmentSides: () => getAlignmentSides,
  getAxisLength: () => getAxisLength,
  getExpandedPlacements: () => getExpandedPlacements,
  getOppositeAlignmentPlacement: () => getOppositeAlignmentPlacement,
  getOppositeAxis: () => getOppositeAxis,
  getOppositeAxisPlacements: () => getOppositeAxisPlacements,
  getOppositePlacement: () => getOppositePlacement,
  getPaddingObject: () => getPaddingObject,
  getSide: () => getSide,
  getSideAxis: () => getSideAxis,
  max: () => max,
  min: () => min,
  placements: () => placements,
  rectToClientRect: () => rectToClientRect,
  round: () => round,
  sides: () => sides
});
module.exports = __toCommonJS(utils_0_2_9_exports);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = /* @__PURE__ */sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = v => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvdXRpbHMuMC4yLjkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3V0aWxzL2Rpc3QvZmxvYXRpbmctdWkudXRpbHMubWpzIl0sIm5hbWVzIjpbInV0aWxzXzBfMl85X2V4cG9ydHMiLCJfX2V4cG9ydCIsImFsaWdubWVudHMiLCJjbGFtcCIsImNyZWF0ZUNvb3JkcyIsImV2YWx1YXRlIiwiZXhwYW5kUGFkZGluZ09iamVjdCIsImZsb29yIiwiZ2V0QWxpZ25tZW50IiwiZ2V0QWxpZ25tZW50QXhpcyIsImdldEFsaWdubWVudFNpZGVzIiwiZ2V0QXhpc0xlbmd0aCIsImdldEV4cGFuZGVkUGxhY2VtZW50cyIsImdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50IiwiZ2V0T3Bwb3NpdGVBeGlzIiwiZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiZ2V0UGFkZGluZ09iamVjdCIsImdldFNpZGUiLCJnZXRTaWRlQXhpcyIsIm1heCIsIm1pbiIsInBsYWNlbWVudHMiLCJyZWN0VG9DbGllbnRSZWN0Iiwicm91bmQiLCJzaWRlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJyZWR1Y2UiLCJhY2MiLCJzaWRlIiwiY29uY2F0IiwiTWF0aCIsInYiLCJ4IiwieSIsIm9wcG9zaXRlU2lkZU1hcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcCIsIm9wcG9zaXRlQWxpZ25tZW50TWFwIiwic3RhcnQiLCJlbmQiLCJ2YWx1ZSIsInBhcmFtIiwicGxhY2VtZW50Iiwic3BsaXQiLCJheGlzIiwiaW5jbHVkZXMiLCJyZWN0cyIsInJ0bCIsImFsaWdubWVudCIsImFsaWdubWVudEF4aXMiLCJsZW5ndGgiLCJtYWluQWxpZ25tZW50U2lkZSIsInJlZmVyZW5jZSIsImZsb2F0aW5nIiwib3Bwb3NpdGVQbGFjZW1lbnQiLCJyZXBsYWNlIiwiZ2V0U2lkZUxpc3QiLCJpc1N0YXJ0IiwibHIiLCJybCIsInRiIiwiYnQiLCJmbGlwQWxpZ25tZW50IiwiZGlyZWN0aW9uIiwibGlzdCIsIm1hcCIsInBhZGRpbmciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyw2QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDZCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLHlCQUFBLEVBQUFBLENBQUEsS0FBQUEseUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFVB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QUNBO01BQ0gsT0FBT0YsT0FBQSxHQUFVRyxFQUFBLEdBQUtDLEVBQUE7SUFBQTtNQUV0QixPQUFPLEVBQUM7RUFBQTtBQUVkO0FBQ0EsU0FBU25ELDBCQUEwQmdDLFNBQUEsRUFBV29CLGFBQUEsRUFBZUMsU0FBQSxFQUFXaEIsR0FBQSxFQUFLO0VBQzNFLE1BQU1DLFNBQUEsR0FBWTdDLFlBQUEsQ0FBYXVDLFNBQVM7RUFDeEMsSUFBSXNCLElBQUEsR0FBT1IsV0FBQSxDQUFZM0MsT0FBQSxDQUFRNkIsU0FBUyxHQUFHcUIsU0FBQSxLQUFjLFNBQVNoQixHQUFHO0VBQ3JFLElBQUlDLFNBQUEsRUFBVztJQUNiZ0IsSUFBQSxHQUFPQSxJQUFBLENBQUtDLEdBQUEsQ0FBSXZDLElBQUEsSUFBUUEsSUFBQSxHQUFPLE1BQU1zQixTQUFTO0lBQzlDLElBQUljLGFBQUEsRUFBZTtNQUNqQkUsSUFBQSxHQUFPQSxJQUFBLENBQUtyQyxNQUFBLENBQU9xQyxJQUFBLENBQUtDLEdBQUEsQ0FBSXpELDZCQUE2QixDQUFDO0lBQzVEO0VBQ0Y7RUFDQSxPQUFPd0QsSUFBQTtBQUNUO0FBQ0EsU0FBU3JELHFCQUFxQitCLFNBQUEsRUFBVztFQUN2QyxPQUFPQSxTQUFBLENBQVVhLE9BQUEsQ0FBUSwwQkFBMEI3QixJQUFBLElBQVFNLGVBQUEsQ0FBZ0JOLElBQUEsQ0FBSztBQUNsRjtBQUNBLFNBQVN6QixvQkFBb0JpRSxPQUFBLEVBQVM7RUFDcEMsT0FBTztJQUNMOUIsR0FBQSxFQUFLO0lBQ0xGLEtBQUEsRUFBTztJQUNQQyxNQUFBLEVBQVE7SUFDUkYsSUFBQSxFQUFNO0lBQ04sR0FBR2lDO0VBQ0w7QUFDRjtBQUNBLFNBQVN0RCxpQkFBaUJzRCxPQUFBLEVBQVM7RUFDakMsT0FBTyxPQUFPQSxPQUFBLEtBQVksV0FBV2pFLG1CQUFBLENBQW9CaUUsT0FBTyxJQUFJO0lBQ2xFOUIsR0FBQSxFQUFLOEIsT0FBQTtJQUNMaEMsS0FBQSxFQUFPZ0MsT0FBQTtJQUNQL0IsTUFBQSxFQUFRK0IsT0FBQTtJQUNSakMsSUFBQSxFQUFNaUM7RUFDUjtBQUNGO0FBQ0EsU0FBU2hELGlCQUFpQmlELElBQUEsRUFBTTtFQUM5QixNQUFNO0lBQ0pyQyxDQUFBO0lBQ0FDLENBQUE7SUFDQXFDLEtBQUE7SUFDQUM7RUFDRixJQUFJRixJQUFBO0VBQ0osT0FBTztJQUNMQyxLQUFBO0lBQ0FDLE1BQUE7SUFDQWpDLEdBQUEsRUFBS0wsQ0FBQTtJQUNMRSxJQUFBLEVBQU1ILENBQUE7SUFDTkksS0FBQSxFQUFPSixDQUFBLEdBQUlzQyxLQUFBO0lBQ1hqQyxNQUFBLEVBQVFKLENBQUEsR0FBSXNDLE1BQUE7SUFDWnZDLENBQUE7SUFDQUM7RUFDRjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=