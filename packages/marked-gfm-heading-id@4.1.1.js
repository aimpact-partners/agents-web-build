System.register(["github-slugger@2.0.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["github-slugger","2.0.0"],["marked-gfm-heading-id","4.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('github-slugger@2.0.0', dep)],
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

// .beyond/uimport/marked-gfm-heading-id.4.1.1.js
var marked_gfm_heading_id_4_1_1_exports = {};
__export(marked_gfm_heading_id_4_1_1_exports, {
  getHeadingList: () => getHeadingList,
  gfmHeadingId: () => gfmHeadingId,
  resetHeadings: () => resetHeadings,
  unescape: () => unescape
});
module.exports = __toCommonJS(marked_gfm_heading_id_4_1_1_exports);

// node_modules/marked-gfm-heading-id/src/index.js
var import_github_slugger = __toESM(require("github-slugger@2.0.0"), 0);
var slugger = new import_github_slugger.default();
var headings = [];
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
function gfmHeadingId({
  prefix = "",
  globalSlugs = false
} = {}) {
  return {
    headerIds: false,
    hooks: {
      preprocess(src) {
        if (!globalSlugs) {
          resetHeadings();
        }
        return src;
      }
    },
    useNewRenderer: true,
    renderer: {
      heading({
        tokens,
        depth
      }) {
        const text = this.parser.parseInline(tokens);
        const raw = unescape(text).trim().replace(/<[!\/a-z].*?>/gi, "");
        const level = depth;
        const id = `${prefix}${slugger.slug(raw.toLowerCase())}`;
        const heading = {
          level,
          text,
          id,
          raw
        };
        headings.push(heading);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
    }
  };
}
function getHeadingList() {
  return headings;
}
function resetHeadings() {
  headings = [];
  slugger = new import_github_slugger.default();
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQtZ2ZtLWhlYWRpbmctaWQuNC4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkLWdmbS1oZWFkaW5nLWlkL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXJrZWRfZ2ZtX2hlYWRpbmdfaWRfNF8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZ2V0SGVhZGluZ0xpc3QiLCJnZm1IZWFkaW5nSWQiLCJyZXNldEhlYWRpbmdzIiwidW5lc2NhcGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2dpdGh1Yl9zbHVnZ2VyIiwiX190b0VTTSIsInJlcXVpcmUiLCJzbHVnZ2VyIiwiZGVmYXVsdCIsImhlYWRpbmdzIiwidW5lc2NhcGVUZXN0IiwiaHRtbCIsInJlcGxhY2UiLCJfIiwibiIsInRvTG93ZXJDYXNlIiwiY2hhckF0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJwcmVmaXgiLCJnbG9iYWxTbHVncyIsImhlYWRlcklkcyIsImhvb2tzIiwicHJlcHJvY2VzcyIsInNyYyIsInVzZU5ld1JlbmRlcmVyIiwicmVuZGVyZXIiLCJoZWFkaW5nIiwidG9rZW5zIiwiZGVwdGgiLCJ0ZXh0IiwicGFyc2VyIiwicGFyc2VJbmxpbmUiLCJyYXciLCJ0cmltIiwibGV2ZWwiLCJpZCIsInNsdWciLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxtQ0FBQTtBQUFBQyxRQUFBLENBQUFELG1DQUFBO0VBQUFFLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLG1DQUFBOzs7QUNBQSxJQUFBUyxxQkFBQSxHQUEwQkMsT0FBQSxDQUFBQyxPQUFBO0FBQzFCLElBQUlDLE9BQUEsR0FBVSxJQUFJSCxxQkFBQSxDQUFBSSxPQUFBLENBQWM7QUFFaEMsSUFBSUMsUUFBQSxHQUFXLEVBQUM7QUFHaEIsSUFBTUMsWUFBQSxHQUFlO0FBRWQsU0FBU1YsU0FBU1csSUFBQSxFQUFNO0VBRTdCLE9BQU9BLElBQUEsQ0FBS0MsT0FBQSxDQUFRRixZQUFBLEVBQWMsQ0FBQ0csQ0FBQSxFQUFHQyxDQUFBLEtBQU07SUFDMUNBLENBQUEsR0FBSUEsQ0FBQSxDQUFFQyxXQUFBLENBQVk7SUFDbEIsSUFBSUQsQ0FBQSxLQUFNLFNBQVMsT0FBTztJQUMxQixJQUFJQSxDQUFBLENBQUVFLE1BQUEsQ0FBTyxDQUFDLE1BQU0sS0FBSztNQUN2QixPQUFPRixDQUFBLENBQUVFLE1BQUEsQ0FBTyxDQUFDLE1BQU0sTUFDbkJDLE1BQUEsQ0FBT0MsWUFBQSxDQUFhQyxRQUFBLENBQVNMLENBQUEsQ0FBRU0sU0FBQSxDQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFDaERILE1BQUEsQ0FBT0MsWUFBQSxDQUFhLENBQUNKLENBQUEsQ0FBRU0sU0FBQSxDQUFVLENBQUMsQ0FBQztJQUN6QztJQUNBLE9BQU87RUFDVCxDQUFDO0FBQ0g7QUFFTyxTQUFTdEIsYUFBYTtFQUFFdUIsTUFBQSxHQUFTO0VBQUlDLFdBQUEsR0FBYztBQUFNLElBQUksQ0FBQyxHQUFHO0VBQ3RFLE9BQU87SUFDTEMsU0FBQSxFQUFXO0lBQ1hDLEtBQUEsRUFBTztNQUNMQyxXQUFXQyxHQUFBLEVBQUs7UUFDZCxJQUFJLENBQUNKLFdBQUEsRUFBYTtVQUNoQnZCLGFBQUEsQ0FBYztRQUNoQjtRQUNBLE9BQU8yQixHQUFBO01BQ1Q7SUFDRjtJQUNBQyxjQUFBLEVBQWdCO0lBQ2hCQyxRQUFBLEVBQVU7TUFDUkMsUUFBUTtRQUFFQyxNQUFBO1FBQVFDO01BQU0sR0FBRztRQUN6QixNQUFNQyxJQUFBLEdBQU8sS0FBS0MsTUFBQSxDQUFPQyxXQUFBLENBQVlKLE1BQU07UUFDM0MsTUFBTUssR0FBQSxHQUFNbkMsUUFBQSxDQUFTZ0MsSUFBSSxFQUN0QkksSUFBQSxDQUFLLEVBQ0x4QixPQUFBLENBQVEsbUJBQW1CLEVBQUU7UUFDaEMsTUFBTXlCLEtBQUEsR0FBUU4sS0FBQTtRQUNkLE1BQU1PLEVBQUEsR0FBSyxHQUFHakIsTUFBQSxHQUFTZCxPQUFBLENBQVFnQyxJQUFBLENBQUtKLEdBQUEsQ0FBSXBCLFdBQUEsQ0FBWSxDQUFDO1FBQ3JELE1BQU1jLE9BQUEsR0FBVTtVQUFFUSxLQUFBO1VBQU9MLElBQUE7VUFBTU0sRUFBQTtVQUFJSDtRQUFJO1FBQ3ZDMUIsUUFBQSxDQUFTK0IsSUFBQSxDQUFLWCxPQUFPO1FBRXJCLE9BQU8sS0FBS1EsS0FBQSxRQUFhQyxFQUFBLEtBQU9OLElBQUEsTUFBVUssS0FBQTtBQUFBO01BQzVDO0lBQ0Y7RUFDRjtBQUNGO0FBRU8sU0FBU3hDLGVBQUEsRUFBaUI7RUFDL0IsT0FBT1ksUUFBQTtBQUNUO0FBRU8sU0FBU1YsY0FBQSxFQUFnQjtFQUM5QlUsUUFBQSxHQUFXLEVBQUM7RUFDWkYsT0FBQSxHQUFVLElBQUlILHFCQUFBLENBQUFJLE9BQUEsQ0FBYztBQUM5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=