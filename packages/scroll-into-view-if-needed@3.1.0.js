System.register(["compute-scroll-into-view@3.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["compute-scroll-into-view","3.1.1"],["scroll-into-view-if-needed","3.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('compute-scroll-into-view@3.1.1', dep)],
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

// .beyond/uimport/scroll-into-view-if-needed.3.1.0.js
var scroll_into_view_if_needed_3_1_0_exports = {};
__export(scroll_into_view_if_needed_3_1_0_exports, {
  default: () => scroll_into_view_if_needed_3_1_0_default
});
module.exports = __toCommonJS(scroll_into_view_if_needed_3_1_0_exports);

// node_modules/scroll-into-view-if-needed/dist/index.js
var import_compute_scroll_into_view = require("compute-scroll-into-view@3.1.1");
var o = t2 => false === t2 ? {
  block: "end",
  inline: "nearest"
} : (t3 => t3 === Object(t3) && 0 !== Object.keys(t3).length)(t2) ? t2 : {
  block: "start",
  inline: "nearest"
};
function e(e2, r) {
  if (!e2.isConnected || !(t2 => {
    let o2 = t2;
    for (; o2 && o2.parentNode;) {
      if (o2.parentNode === document) return true;
      o2 = o2.parentNode instanceof ShadowRoot ? o2.parentNode.host : o2.parentNode;
    }
    return false;
  })(e2)) return;
  const n = (t2 => {
    const o2 = window.getComputedStyle(t2);
    return {
      top: parseFloat(o2.scrollMarginTop) || 0,
      right: parseFloat(o2.scrollMarginRight) || 0,
      bottom: parseFloat(o2.scrollMarginBottom) || 0,
      left: parseFloat(o2.scrollMarginLeft) || 0
    };
  })(e2);
  if ((t2 => "object" == typeof t2 && "function" == typeof t2.behavior)(r)) return r.behavior((0, import_compute_scroll_into_view.compute)(e2, r));
  const l = "boolean" == typeof r || null == r ? void 0 : r.behavior;
  for (const {
    el: a,
    top: i,
    left: s
  } of (0, import_compute_scroll_into_view.compute)(e2, o(r))) {
    const t2 = i - n.top + n.bottom,
      o2 = s - n.left + n.right;
    a.scroll({
      top: t2,
      left: o2,
      behavior: l
    });
  }
}

// .beyond/uimport/scroll-into-view-if-needed.3.1.0.js
var scroll_into_view_if_needed_3_1_0_default = e;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZC4zLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZC9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsic2Nyb2xsX2ludG9fdmlld19pZl9uZWVkZWRfM18xXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsInNjcm9sbF9pbnRvX3ZpZXdfaWZfbmVlZGVkXzNfMV8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwibyIsInQyIiwiYmxvY2siLCJpbmxpbmUiLCJ0MyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJlIiwiZTIiLCJyIiwiaXNDb25uZWN0ZWQiLCJvMiIsInBhcmVudE5vZGUiLCJkb2N1bWVudCIsIlNoYWRvd1Jvb3QiLCJob3N0IiwibiIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJ0b3AiLCJwYXJzZUZsb2F0Iiwic2Nyb2xsTWFyZ2luVG9wIiwicmlnaHQiLCJzY3JvbGxNYXJnaW5SaWdodCIsImJvdHRvbSIsInNjcm9sbE1hcmdpbkJvdHRvbSIsImxlZnQiLCJzY3JvbGxNYXJnaW5MZWZ0IiwiYmVoYXZpb3IiLCJpbXBvcnRfY29tcHV0ZV9zY3JvbGxfaW50b192aWV3IiwiY29tcHV0ZSIsImwiLCJlbCIsImEiLCJpIiwicyIsInNjcm9sbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0NBQUE7QUFBQUMsUUFBQSxDQUFBRCx3Q0FBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTix3Q0FBQTs7OztBQ2dEQSxJQVVNTyxDQUFBLEdBQWNDLEVBQUEsY0FFZEEsRUFBQSxHQUNLO0VBQUVDLEtBQUEsRUFBTztFQUFPQyxNQUFBLEVBQVE7QUFBQSxLQVpqQ0MsRUFBQSxJQUVBQSxFQUFBLEtBQVlDLE1BQUEsQ0FBT0QsRUFBQSxLQUE0QyxNQUFoQ0MsTUFBQSxDQUFPQyxJQUFBLENBQUtGLEVBQUEsRUFBU0csTUFBQSxFQWF2Qk4sRUFBQSxJQUVwQkEsRUFBQSxHQUlGO0VBQUVDLEtBQUEsRUFBTztFQUFTQyxNQUFBLEVBQVE7QUFBQTtBQTREbkMsU0FBU0ssRUFDUEMsRUFBQSxFQUNBQyxDQUFBO0VBR0EsS0FBS0QsRUFBQSxDQUFPRSxXQUFBLE1BakRRVixFQUFBO0lBQ3BCLElBQUlXLEVBQUEsR0FBaUJYLEVBQUE7SUFDZCxPQUFBVyxFQUFBLElBQWtCQSxFQUFBLENBQWVDLFVBQUEsR0FBWTtNQUM5QyxJQUFBRCxFQUFBLENBQWVDLFVBQUEsS0FBZUMsUUFBQSxFQUN6QjtNQUVQRixFQUFBLEdBRFNBLEVBQUEsQ0FBZUMsVUFBQSxZQUFzQkUsVUFBQSxHQUM1QkgsRUFBQSxDQUFlQyxVQUFBLENBQTBCRyxJQUFBLEdBRTFDSixFQUFBLENBQWVDLFVBQUE7SUFFcEM7SUFDTztFQUFBLEdBc0NrQ0osRUFBQSxHQUN2QztFQUdJLE1BQUFRLENBQUEsSUFsRWtCaEIsRUFBQTtJQUNsQixNQUFBVyxFQUFBLEdBQWdCTSxNQUFBLENBQU9DLGdCQUFBLENBQWlCbEIsRUFBQTtJQUN2QztNQUNMbUIsR0FBQSxFQUFLQyxVQUFBLENBQVdULEVBQUEsQ0FBY1UsZUFBQSxLQUFvQjtNQUNsREMsS0FBQSxFQUFPRixVQUFBLENBQVdULEVBQUEsQ0FBY1ksaUJBQUEsS0FBc0I7TUFDdERDLE1BQUEsRUFBUUosVUFBQSxDQUFXVCxFQUFBLENBQWNjLGtCQUFBLEtBQXVCO01BQ3hEQyxJQUFBLEVBQU1OLFVBQUEsQ0FBV1QsRUFBQSxDQUFjZ0IsZ0JBQUEsS0FBcUI7SUFBQTtFQUN0RCxHQTJEaUNuQixFQUFBO0VBRTdCLEtBdkZKUixFQUFBLElBRW1CLG1CQUFaQSxFQUFBLElBQW1ELHFCQUFyQkEsRUFBQSxDQUFRNEIsUUFBQSxFQXFGZm5CLENBQUEsR0FDNUIsT0FBT0EsQ0FBQSxDQUFRbUIsUUFBQSxLQUFTQywrQkFBQSxDQUFBQyxPQUFBLEVBQVF0QixFQUFBLEVBQVFDLENBQUE7RUFHMUMsTUFBTXNCLENBQUEsR0FBOEIsb0JBQVp0QixDQUFBLElBQTZDLFFBQVRBLENBQUEsWUFBU0EsQ0FBQSxDQUFBbUIsUUFBQTtFQUUxRDtJQUFBSSxFQUFBLEVBQUVDLENBQUE7SUFBSWQsR0FBQSxFQUFBZSxDQUFBO0lBQUFSLElBQUEsRUFBS1M7RUFBQSxTQUFVTiwrQkFBQSxDQUFBQyxPQUFBLEVBQVF0QixFQUFBLEVBQVFULENBQUEsQ0FBV1UsQ0FBQSxJQUFXO0lBQ3BFLE1BQU1ULEVBQUEsR0FBY2tDLENBQUEsR0FBTWxCLENBQUEsQ0FBUUcsR0FBQSxHQUFNSCxDQUFBLENBQVFRLE1BQUE7TUFDMUNiLEVBQUEsR0FBZXdCLENBQUEsR0FBT25CLENBQUEsQ0FBUVUsSUFBQSxHQUFPVixDQUFBLENBQVFNLEtBQUE7SUFDbkRXLENBQUEsQ0FBR0csTUFBQSxDQUFPO01BQUVqQixHQUFBLEVBQUtuQixFQUFBO01BQWEwQixJQUFBLEVBQU1mLEVBQUE7TUFBY2lCLFFBQUEsRUFBQUc7SUFBQTtFQUNwRDtBQUNGOzs7QURySkEsSUFBT3BDLHdDQUFBLEdBQVFZLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==