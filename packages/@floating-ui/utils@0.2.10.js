System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.10"]]);
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

// .beyond/uimport/@floating-ui/utils.0.2.10.js
var utils_0_2_10_exports = {};
__export(utils_0_2_10_exports, {
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
module.exports = __toCommonJS(utils_0_2_10_exports);

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
var yAxisSides = /* @__PURE__ */new Set(["top", "bottom"]);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? "y" : "x";
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
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvdXRpbHMuMC4yLjEwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS91dGlscy9kaXN0L2Zsb2F0aW5nLXVpLnV0aWxzLm1qcyJdLCJuYW1lcyI6WyJ1dGlsc18wXzJfMTBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiYWxpZ25tZW50cyIsImNsYW1wIiwiY3JlYXRlQ29vcmRzIiwiZXZhbHVhdGUiLCJleHBhbmRQYWRkaW5nT2JqZWN0IiwiZmxvb3IiLCJnZXRBbGlnbm1lbnQiLCJnZXRBbGlnbm1lbnRBeGlzIiwiZ2V0QWxpZ25tZW50U2lkZXMiLCJnZXRBeGlzTGVuZ3RoIiwiZ2V0RXhwYW5kZWRQbGFjZW1lbnRzIiwiZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQiLCJnZXRPcHBvc2l0ZUF4aXMiLCJnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJnZXRQYWRkaW5nT2JqZWN0IiwiZ2V0U2lkZSIsImdldFNpZGVBeGlzIiwibWF4IiwibWluIiwicGxhY2VtZW50cyIsInJlY3RUb0NsaWVudFJlY3QiLCJyb3VuZCIsInNpZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlZHVjZSIsImFjYyIsInNpZGUiLCJjb25jYXQiLCJNYXRoIiwidiIsIngiLCJ5Iiwib3Bwb3NpdGVTaWRlTWFwIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwib3Bwb3NpdGVBbGlnbm1lbnRNYXAiLCJzdGFydCIsImVuZCIsInZhbHVlIiwicGFyYW0iLCJwbGFjZW1lbnQiLCJzcGxpdCIsImF4aXMiLCJ5QXhpc1NpZGVzIiwiU2V0IiwiaGFzIiwicmVjdHMiLCJydGwiLCJhbGlnbm1lbnQiLCJhbGlnbm1lbnRBeGlzIiwibGVuZ3RoIiwibWFpbkFsaWdubWVudFNpZGUiLCJyZWZlcmVuY2UiLCJmbG9hdGluZyIsIm9wcG9zaXRlUGxhY2VtZW50IiwicmVwbGFjZSIsImxyUGxhY2VtZW50IiwicmxQbGFjZW1lbnQiLCJ0YlBsYWNlbWVudCIsImJ0UGxhY2VtZW50IiwiZ2V0U2lkZUxpc3QiLCJpc1N0YXJ0IiwiZmxpcEFsaWdubWVudCIsImRpcmVjdGlvbiIsImxpc3QiLCJtYXAiLCJwYWRkaW5nIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsNkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw2QkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEs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QkFBQSxDQUFvQm1FLE9BQU8sSUFBSTtJQUNsRWhDLEdBQUEsRUFBS2dDLE9BQUE7SUFDTGxDLEtBQUEsRUFBT2tDLE9BQUE7SUFDUGpDLE1BQUEsRUFBUWlDLE9BQUE7SUFDUm5DLElBQUEsRUFBTW1DO0VBQ1I7QUFDRjtBQUNBLFNBQVNsRCxpQkFBaUJtRCxJQUFBLEVBQU07RUFDOUIsTUFBTTtJQUNKdkMsQ0FBQTtJQUNBQyxDQUFBO0lBQ0F1QyxLQUFBO0lBQ0FDO0VBQ0YsSUFBSUYsSUFBQTtFQUNKLE9BQU87SUFDTEMsS0FBQTtJQUNBQyxNQUFBO0lBQ0FuQyxHQUFBLEVBQUtMLENBQUE7SUFDTEUsSUFBQSxFQUFNSCxDQUFBO0lBQ05JLEtBQUEsRUFBT0osQ0FBQSxHQUFJd0MsS0FBQTtJQUNYbkMsTUFBQSxFQUFRSixDQUFBLEdBQUl3QyxNQUFBO0lBQ1p6QyxDQUFBO0lBQ0FDO0VBQ0Y7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9