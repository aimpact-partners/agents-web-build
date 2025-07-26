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

// .beyond/uimport/temp/scroll-into-view-if-needed.3.1.0.js
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

// .beyond/uimport/temp/scroll-into-view-if-needed.3.1.0.js
var scroll_into_view_if_needed_3_1_0_default = e;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLjMuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJzY3JvbGxfaW50b192aWV3X2lmX25lZWRlZF8zXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0Iiwic2Nyb2xsX2ludG9fdmlld19pZl9uZWVkZWRfM18xXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJvIiwidDIiLCJibG9jayIsImlubGluZSIsInQzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImUiLCJlMiIsInIiLCJpc0Nvbm5lY3RlZCIsIm8yIiwicGFyZW50Tm9kZSIsImRvY3VtZW50IiwiU2hhZG93Um9vdCIsImhvc3QiLCJuIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRvcCIsInBhcnNlRmxvYXQiLCJzY3JvbGxNYXJnaW5Ub3AiLCJyaWdodCIsInNjcm9sbE1hcmdpblJpZ2h0IiwiYm90dG9tIiwic2Nyb2xsTWFyZ2luQm90dG9tIiwibGVmdCIsInNjcm9sbE1hcmdpbkxlZnQiLCJiZWhhdmlvciIsImltcG9ydF9jb21wdXRlX3Njcm9sbF9pbnRvX3ZpZXciLCJjb21wdXRlIiwibCIsImVsIiwiYSIsImkiLCJzIiwic2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3Q0FBQTtBQUFBQyxRQUFBLENBQUFELHdDQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHdDQUFBOzs7O0FDZ0RBLElBVU1PLENBQUEsR0FBY0MsRUFBQSxjQUVkQSxFQUFBLEdBQ0s7RUFBRUMsS0FBQSxFQUFPO0VBQU9DLE1BQUEsRUFBUTtBQUFBLEtBWmpDQyxFQUFBLElBRUFBLEVBQUEsS0FBWUMsTUFBQSxDQUFPRCxFQUFBLEtBQTRDLE1BQWhDQyxNQUFBLENBQU9DLElBQUEsQ0FBS0YsRUFBQSxFQUFTRyxNQUFBLEVBYXZCTixFQUFBLElBRXBCQSxFQUFBLEdBSUY7RUFBRUMsS0FBQSxFQUFPO0VBQVNDLE1BQUEsRUFBUTtBQUFBO0FBNERuQyxTQUFTSyxFQUNQQyxFQUFBLEVBQ0FDLENBQUE7RUFHQSxLQUFLRCxFQUFBLENBQU9FLFdBQUEsTUFqRFFWLEVBQUE7SUFDcEIsSUFBSVcsRUFBQSxHQUFpQlgsRUFBQTtJQUNkLE9BQUFXLEVBQUEsSUFBa0JBLEVBQUEsQ0FBZUMsVUFBQSxHQUFZO01BQzlDLElBQUFELEVBQUEsQ0FBZUMsVUFBQSxLQUFlQyxRQUFBLEVBQ3pCO01BRVBGLEVBQUEsR0FEU0EsRUFBQSxDQUFlQyxVQUFBLFlBQXNCRSxVQUFBLEdBQzVCSCxFQUFBLENBQWVDLFVBQUEsQ0FBMEJHLElBQUEsR0FFMUNKLEVBQUEsQ0FBZUMsVUFBQTtJQUVwQztJQUNPO0VBQUEsR0FzQ2tDSixFQUFBLEdBQ3ZDO0VBR0ksTUFBQVEsQ0FBQSxJQWxFa0JoQixFQUFBO0lBQ2xCLE1BQUFXLEVBQUEsR0FBZ0JNLE1BQUEsQ0FBT0MsZ0JBQUEsQ0FBaUJsQixFQUFBO0lBQ3ZDO01BQ0xtQixHQUFBLEVBQUtDLFVBQUEsQ0FBV1QsRUFBQSxDQUFjVSxlQUFBLEtBQW9CO01BQ2xEQyxLQUFBLEVBQU9GLFVBQUEsQ0FBV1QsRUFBQSxDQUFjWSxpQkFBQSxLQUFzQjtNQUN0REMsTUFBQSxFQUFRSixVQUFBLENBQVdULEVBQUEsQ0FBY2Msa0JBQUEsS0FBdUI7TUFDeERDLElBQUEsRUFBTU4sVUFBQSxDQUFXVCxFQUFBLENBQWNnQixnQkFBQSxLQUFxQjtJQUFBO0VBQ3RELEdBMkRpQ25CLEVBQUE7RUFFN0IsS0F2RkpSLEVBQUEsSUFFbUIsbUJBQVpBLEVBQUEsSUFBbUQscUJBQXJCQSxFQUFBLENBQVE0QixRQUFBLEVBcUZmbkIsQ0FBQSxHQUM1QixPQUFPQSxDQUFBLENBQVFtQixRQUFBLEtBQVNDLCtCQUFBLENBQUFDLE9BQUEsRUFBUXRCLEVBQUEsRUFBUUMsQ0FBQTtFQUcxQyxNQUFNc0IsQ0FBQSxHQUE4QixvQkFBWnRCLENBQUEsSUFBNkMsUUFBVEEsQ0FBQSxZQUFTQSxDQUFBLENBQUFtQixRQUFBO0VBRTFEO0lBQUFJLEVBQUEsRUFBRUMsQ0FBQTtJQUFJZCxHQUFBLEVBQUFlLENBQUE7SUFBQVIsSUFBQSxFQUFLUztFQUFBLFNBQVVOLCtCQUFBLENBQUFDLE9BQUEsRUFBUXRCLEVBQUEsRUFBUVQsQ0FBQSxDQUFXVSxDQUFBLElBQVc7SUFDcEUsTUFBTVQsRUFBQSxHQUFja0MsQ0FBQSxHQUFNbEIsQ0FBQSxDQUFRRyxHQUFBLEdBQU1ILENBQUEsQ0FBUVEsTUFBQTtNQUMxQ2IsRUFBQSxHQUFld0IsQ0FBQSxHQUFPbkIsQ0FBQSxDQUFRVSxJQUFBLEdBQU9WLENBQUEsQ0FBUU0sS0FBQTtJQUNuRFcsQ0FBQSxDQUFHRyxNQUFBLENBQU87TUFBRWpCLEdBQUEsRUFBS25CLEVBQUE7TUFBYTBCLElBQUEsRUFBTWYsRUFBQTtNQUFjaUIsUUFBQSxFQUFBRztJQUFBO0VBQ3BEO0FBQ0Y7OztBRHJKQSxJQUFPcEMsd0NBQUEsR0FBUVksQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9