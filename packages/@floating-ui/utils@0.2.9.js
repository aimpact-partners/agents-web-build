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

// .beyond/uimport/temp/@floating-ui/utils.0.2.9.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmbG9hdGluZy11aS91dGlscy4wLjIuOS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanMiXSwibmFtZXMiOlsidXRpbHNfMF8yXzlfZXhwb3J0cyIsIl9fZXhwb3J0IiwiYWxpZ25tZW50cyIsImNsYW1wIiwiY3JlYXRlQ29vcmRzIiwiZXZhbHVhdGUiLCJleHBhbmRQYWRkaW5nT2JqZWN0IiwiZmxvb3IiLCJnZXRBbGlnbm1lbnQiLCJnZXRBbGlnbm1lbnRBeGlzIiwiZ2V0QWxpZ25tZW50U2lkZXMiLCJnZXRBeGlzTGVuZ3RoIiwiZ2V0RXhwYW5kZWRQbGFjZW1lbnRzIiwiZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQiLCJnZXRPcHBvc2l0ZUF4aXMiLCJnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJnZXRQYWRkaW5nT2JqZWN0IiwiZ2V0U2lkZSIsImdldFNpZGVBeGlzIiwibWF4IiwibWluIiwicGxhY2VtZW50cyIsInJlY3RUb0NsaWVudFJlY3QiLCJyb3VuZCIsInNpZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlZHVjZSIsImFjYyIsInNpZGUiLCJjb25jYXQiLCJNYXRoIiwidiIsIngiLCJ5Iiwib3Bwb3NpdGVTaWRlTWFwIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidG9wIiwib3Bwb3NpdGVBbGlnbm1lbnRNYXAiLCJzdGFydCIsImVuZCIsInZhbHVlIiwicGFyYW0iLCJwbGFjZW1lbnQiLCJzcGxpdCIsImF4aXMiLCJpbmNsdWRlcyIsInJlY3RzIiwicnRsIiwiYWxpZ25tZW50IiwiYWxpZ25tZW50QXhpcyIsImxlbmd0aCIsIm1haW5BbGlnbm1lbnRTaWRlIiwicmVmZXJlbmNlIiwiZmxvYXRpbmciLCJvcHBvc2l0ZVBsYWNlbWVudCIsInJlcGxhY2UiLCJnZXRTaWRlTGlzdCIsImlzU3RhcnQiLCJsciIsInJsIiwidGIiLCJidCIsImZsaXBBbGlnbm1lbnQiLCJkaXJlY3Rpb24iLCJsaXN0IiwibWFwIiwicGFkZGluZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLDZCQUFBLEVBQUFBLENBQUEsS0FBQUEsNkJBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFB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QUFBLEtBQ0E7TUFDSCxPQUFPRixPQUFBLEdBQVVHLEVBQUEsR0FBS0MsRUFBQTtJQUFBO01BRXRCLE9BQU8sRUFBQztFQUFBO0FBRWQ7QUFDQSxTQUFTbkQsMEJBQTBCZ0MsU0FBQSxFQUFXb0IsYUFBQSxFQUFlQyxTQUFBLEVBQVdoQixHQUFBLEVBQUs7RUFDM0UsTUFBTUMsU0FBQSxHQUFZN0MsWUFBQSxDQUFhdUMsU0FBUztFQUN4QyxJQUFJc0IsSUFBQSxHQUFPUixXQUFBLENBQVkzQyxPQUFBLENBQVE2QixTQUFTLEdBQUdxQixTQUFBLEtBQWMsU0FBU2hCLEdBQUc7RUFDckUsSUFBSUMsU0FBQSxFQUFXO0lBQ2JnQixJQUFBLEdBQU9BLElBQUEsQ0FBS0MsR0FBQSxDQUFJdkMsSUFBQSxJQUFRQSxJQUFBLEdBQU8sTUFBTXNCLFNBQVM7SUFDOUMsSUFBSWMsYUFBQSxFQUFlO01BQ2pCRSxJQUFBLEdBQU9BLElBQUEsQ0FBS3JDLE1BQUEsQ0FBT3FDLElBQUEsQ0FBS0MsR0FBQSxDQUFJekQsNkJBQTZCLENBQUM7SUFDNUQ7RUFDRjtFQUNBLE9BQU93RCxJQUFBO0FBQ1Q7QUFDQSxTQUFTckQscUJBQXFCK0IsU0FBQSxFQUFXO0VBQ3ZDLE9BQU9BLFNBQUEsQ0FBVWEsT0FBQSxDQUFRLDBCQUEwQjdCLElBQUEsSUFBUU0sZUFBQSxDQUFnQk4sSUFBQSxDQUFLO0FBQ2xGO0FBQ0EsU0FBU3pCLG9CQUFvQmlFLE9BQUEsRUFBUztFQUNwQyxPQUFPO0lBQ0w5QixHQUFBLEVBQUs7SUFDTEYsS0FBQSxFQUFPO0lBQ1BDLE1BQUEsRUFBUTtJQUNSRixJQUFBLEVBQU07SUFDTixHQUFHaUM7RUFDTDtBQUNGO0FBQ0EsU0FBU3RELGlCQUFpQnNELE9BQUEsRUFBUztFQUNqQyxPQUFPLE9BQU9BLE9BQUEsS0FBWSxXQUFXakUsbUJBQUEsQ0FBb0JpRSxPQUFPLElBQUk7SUFDbEU5QixHQUFBLEVBQUs4QixPQUFBO0lBQ0xoQyxLQUFBLEVBQU9nQyxPQUFBO0lBQ1AvQixNQUFBLEVBQVErQixPQUFBO0lBQ1JqQyxJQUFBLEVBQU1pQztFQUNSO0FBQ0Y7QUFDQSxTQUFTaEQsaUJBQWlCaUQsSUFBQSxFQUFNO0VBQzlCLE1BQU07SUFDSnJDLENBQUE7SUFDQUMsQ0FBQTtJQUNBcUMsS0FBQTtJQUNBQztFQUNGLElBQUlGLElBQUE7RUFDSixPQUFPO0lBQ0xDLEtBQUE7SUFDQUMsTUFBQTtJQUNBakMsR0FBQSxFQUFLTCxDQUFBO0lBQ0xFLElBQUEsRUFBTUgsQ0FBQTtJQUNOSSxLQUFBLEVBQU9KLENBQUEsR0FBSXNDLEtBQUE7SUFDWGpDLE1BQUEsRUFBUUosQ0FBQSxHQUFJc0MsTUFBQTtJQUNadkMsQ0FBQTtJQUNBQztFQUNGO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==