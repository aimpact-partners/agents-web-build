System.register(["decode-named-character-reference@1.1.0","micromark-util-chunked@2.0.1","micromark-util-decode-numeric-character-reference@2.0.2","micromark-util-normalize-identifier@2.0.1","micromark-util-character@2.1.1","micromark-util-sanitize-uri@2.0.1","micromark-factory-space@2.0.1","micromark-util-classify-character@2.0.1","micromark-util-subtokenize@2.1.0","micromark-factory-destination@2.0.1","micromark-factory-label@2.0.1","micromark-factory-title@2.0.1","micromark-factory-whitespace@2.0.1","micromark-core-commonmark@2.0.3","micromark@4.0.2","micromark-util-decode-string@2.0.1","mdast-util-from-markdown@2.0.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["mdast-util-to-string","4.0.0"],["decode-named-character-reference","1.1.0"],["micromark-util-chunked","2.0.1"],["micromark-util-combine-extensions","2.0.1"],["micromark-util-decode-numeric-character-reference","2.0.2"],["micromark-util-encode","2.0.1"],["micromark-util-normalize-identifier","2.0.1"],["micromark-util-character","2.1.1"],["micromark-util-sanitize-uri","2.0.1"],["micromark","4.0.2"],["micromark-factory-space","2.0.1"],["micromark-util-classify-character","2.0.1"],["micromark-util-resolve-all","2.0.1"],["micromark-core-commonmark","2.0.3"],["micromark-util-subtokenize","2.1.0"],["micromark-factory-destination","2.0.1"],["micromark-factory-label","2.0.1"],["micromark-factory-title","2.0.1"],["micromark-factory-whitespace","2.0.1"],["micromark-util-html-tag-name","2.0.1"],["micromark-util-decode-string","2.0.1"],["unist-util-stringify-position","4.0.0"],["mdast-util-from-markdown","2.0.2"],["remark-parse","11.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('decode-named-character-reference@1.1.0', dep), dep => dependencies.set('micromark-util-chunked@2.0.1', dep), dep => dependencies.set('micromark-util-decode-numeric-character-reference@2.0.2', dep), dep => dependencies.set('micromark-util-normalize-identifier@2.0.1', dep), dep => dependencies.set('micromark-util-character@2.1.1', dep), dep => dependencies.set('micromark-util-sanitize-uri@2.0.1', dep), dep => dependencies.set('micromark-factory-space@2.0.1', dep), dep => dependencies.set('micromark-util-classify-character@2.0.1', dep), dep => dependencies.set('micromark-util-subtokenize@2.1.0', dep), dep => dependencies.set('micromark-factory-destination@2.0.1', dep), dep => dependencies.set('micromark-factory-label@2.0.1', dep), dep => dependencies.set('micromark-factory-title@2.0.1', dep), dep => dependencies.set('micromark-factory-whitespace@2.0.1', dep), dep => dependencies.set('micromark-core-commonmark@2.0.3', dep), dep => dependencies.set('micromark@4.0.2', dep), dep => dependencies.set('micromark-util-decode-string@2.0.1', dep), dep => dependencies.set('mdast-util-from-markdown@2.0.2', dep)],
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

// .beyond/uimport/temp/remark-parse.11.0.0.js
var remark_parse_11_0_0_exports = {};
__export(remark_parse_11_0_0_exports, {
  default: () => remark_parse_11_0_0_default
});
module.exports = __toCommonJS(remark_parse_11_0_0_exports);

// node_modules/remark-parse/lib/index.js
var import_mdast_util_from_markdown = require("mdast-util-from-markdown@2.0.2");
function remarkParse(options) {
  const self = this;
  self.parser = parser;
  function parser(doc) {
    return (0, import_mdast_util_from_markdown.fromMarkdown)(doc, {
      ...self.data("settings"),
      ...options,
      extensions: self.data("micromarkExtensions") || [],
      mdastExtensions: self.data("fromMarkdownExtensions") || []
    });
  }
}

// .beyond/uimport/temp/remark-parse.11.0.0.js
var remark_parse_11_0_0_default = remarkParse;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3JlbWFyay1wYXJzZS4xMS4wLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW1hcmtfcGFyc2VfMTFfMF8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsImRlZmF1bHQiLCJyZW1hcmtfcGFyc2VfMTFfMF8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X21kYXN0X3V0aWxfZnJvbV9tYXJrZG93biIsInJlcXVpcmUiLCJyZW1hcmtQYXJzZSIsIm9wdGlvbnMiLCJzZWxmIiwicGFyc2VyIiwiZG9jIiwiZnJvbU1hcmtkb3duIiwiZGF0YSIsImV4dGVuc2lvbnMiLCJtZGFzdEV4dGVuc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkJBQUE7RUFBQUUsT0FBQSxFQUFBQSxDQUFBLEtBQUFDO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sMkJBQUE7OztBQ1dBLElBQUFPLCtCQUFBLEdBQTJCQyxPQUFBO0FBVVosU0FBUkMsWUFBNkJDLE9BQUEsRUFBUztFQUczQyxNQUFNQyxJQUFBLEdBQU87RUFFYkEsSUFBQSxDQUFLQyxNQUFBLEdBQVNBLE1BQUE7RUFLZCxTQUFTQSxPQUFPQyxHQUFBLEVBQUs7SUFDbkIsV0FBT04sK0JBQUEsQ0FBQU8sWUFBQSxFQUFhRCxHQUFBLEVBQUs7TUFDdkIsR0FBR0YsSUFBQSxDQUFLSSxJQUFBLENBQUssVUFBVTtNQUN2QixHQUFHTCxPQUFBO01BSUhNLFVBQUEsRUFBWUwsSUFBQSxDQUFLSSxJQUFBLENBQUsscUJBQXFCLEtBQUssRUFBQztNQUNqREUsZUFBQSxFQUFpQk4sSUFBQSxDQUFLSSxJQUFBLENBQUssd0JBQXdCLEtBQUs7SUFDMUQsQ0FBQztFQUNIO0FBQ0Y7OztBRHZDQSxJQUFPWiwyQkFBQSxHQUFRTSxXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=