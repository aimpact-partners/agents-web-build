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

// .beyond/uimport/temp/marked-gfm-heading-id.4.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC1nZm0taGVhZGluZy1pZC40LjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQtZ2ZtLWhlYWRpbmctaWQvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1hcmtlZF9nZm1faGVhZGluZ19pZF80XzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJnZXRIZWFkaW5nTGlzdCIsImdmbUhlYWRpbmdJZCIsInJlc2V0SGVhZGluZ3MiLCJ1bmVzY2FwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZ2l0aHViX3NsdWdnZXIiLCJfX3RvRVNNIiwicmVxdWlyZSIsInNsdWdnZXIiLCJkZWZhdWx0IiwiaGVhZGluZ3MiLCJ1bmVzY2FwZVRlc3QiLCJodG1sIiwicmVwbGFjZSIsIl8iLCJuIiwidG9Mb3dlckNhc2UiLCJjaGFyQXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInN1YnN0cmluZyIsInByZWZpeCIsImdsb2JhbFNsdWdzIiwiaGVhZGVySWRzIiwiaG9va3MiLCJwcmVwcm9jZXNzIiwic3JjIiwidXNlTmV3UmVuZGVyZXIiLCJyZW5kZXJlciIsImhlYWRpbmciLCJ0b2tlbnMiLCJkZXB0aCIsInRleHQiLCJwYXJzZXIiLCJwYXJzZUlubGluZSIsInJhdyIsInRyaW0iLCJsZXZlbCIsImlkIiwic2x1ZyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUNBQUE7RUFBQUUsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsbUNBQUE7OztBQ0FBLElBQUFTLHFCQUFBLEdBQTBCQyxPQUFBLENBQUFDLE9BQUE7QUFDMUIsSUFBSUMsT0FBQSxHQUFVLElBQUlILHFCQUFBLENBQUFJLE9BQUEsQ0FBYztBQUVoQyxJQUFJQyxRQUFBLEdBQVcsRUFBQztBQUdoQixJQUFNQyxZQUFBLEdBQWU7QUFFZCxTQUFTVixTQUFTVyxJQUFBLEVBQU07RUFFN0IsT0FBT0EsSUFBQSxDQUFLQyxPQUFBLENBQVFGLFlBQUEsRUFBYyxDQUFDRyxDQUFBLEVBQUdDLENBQUEsS0FBTTtJQUMxQ0EsQ0FBQSxHQUFJQSxDQUFBLENBQUVDLFdBQUEsQ0FBWTtJQUNsQixJQUFJRCxDQUFBLEtBQU0sU0FBUyxPQUFPO0lBQzFCLElBQUlBLENBQUEsQ0FBRUUsTUFBQSxDQUFPLENBQUMsTUFBTSxLQUFLO01BQ3ZCLE9BQU9GLENBQUEsQ0FBRUUsTUFBQSxDQUFPLENBQUMsTUFBTSxNQUNuQkMsTUFBQSxDQUFPQyxZQUFBLENBQWFDLFFBQUEsQ0FBU0wsQ0FBQSxDQUFFTSxTQUFBLENBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUNoREgsTUFBQSxDQUFPQyxZQUFBLENBQWEsQ0FBQ0osQ0FBQSxDQUFFTSxTQUFBLENBQVUsQ0FBQyxDQUFDO0lBQ3pDO0lBQ0EsT0FBTztFQUNULENBQUM7QUFDSDtBQUVPLFNBQVN0QixhQUFhO0VBQUV1QixNQUFBLEdBQVM7RUFBSUMsV0FBQSxHQUFjO0FBQU0sSUFBSSxDQUFDLEdBQUc7RUFDdEUsT0FBTztJQUNMQyxTQUFBLEVBQVc7SUFDWEMsS0FBQSxFQUFPO01BQ0xDLFdBQVdDLEdBQUEsRUFBSztRQUNkLElBQUksQ0FBQ0osV0FBQSxFQUFhO1VBQ2hCdkIsYUFBQSxDQUFjO1FBQ2hCO1FBQ0EsT0FBTzJCLEdBQUE7TUFDVDtJQUNGO0lBQ0FDLGNBQUEsRUFBZ0I7SUFDaEJDLFFBQUEsRUFBVTtNQUNSQyxRQUFRO1FBQUVDLE1BQUE7UUFBUUM7TUFBTSxHQUFHO1FBQ3pCLE1BQU1DLElBQUEsR0FBTyxLQUFLQyxNQUFBLENBQU9DLFdBQUEsQ0FBWUosTUFBTTtRQUMzQyxNQUFNSyxHQUFBLEdBQU1uQyxRQUFBLENBQVNnQyxJQUFJLEVBQ3RCSSxJQUFBLENBQUssRUFDTHhCLE9BQUEsQ0FBUSxtQkFBbUIsRUFBRTtRQUNoQyxNQUFNeUIsS0FBQSxHQUFRTixLQUFBO1FBQ2QsTUFBTU8sRUFBQSxHQUFLLEdBQUdqQixNQUFBLEdBQVNkLE9BQUEsQ0FBUWdDLElBQUEsQ0FBS0osR0FBQSxDQUFJcEIsV0FBQSxDQUFZLENBQUM7UUFDckQsTUFBTWMsT0FBQSxHQUFVO1VBQUVRLEtBQUE7VUFBT0wsSUFBQTtVQUFNTSxFQUFBO1VBQUlIO1FBQUk7UUFDdkMxQixRQUFBLENBQVMrQixJQUFBLENBQUtYLE9BQU87UUFFckIsT0FBTyxLQUFLUSxLQUFBLFFBQWFDLEVBQUEsS0FBT04sSUFBQSxNQUFVSyxLQUFBO0FBQUE7TUFDNUM7SUFDRjtFQUNGO0FBQ0Y7QUFFTyxTQUFTeEMsZUFBQSxFQUFpQjtFQUMvQixPQUFPWSxRQUFBO0FBQ1Q7QUFFTyxTQUFTVixjQUFBLEVBQWdCO0VBQzlCVSxRQUFBLEdBQVcsRUFBQztFQUNaRixPQUFBLEdBQVUsSUFBSUgscUJBQUEsQ0FBQUksT0FBQSxDQUFjO0FBQzlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=