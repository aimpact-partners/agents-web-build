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

// .beyond/uimport/remark-parse.11.0.0.js
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

// .beyond/uimport/remark-parse.11.0.0.js
var remark_parse_11_0_0_default = remarkParse;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9yZW1hcmstcGFyc2UuMTEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvaW5kZXguanMiXSwibmFtZXMiOlsicmVtYXJrX3BhcnNlXzExXzBfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwicmVtYXJrX3BhcnNlXzExXzBfMF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9tZGFzdF91dGlsX2Zyb21fbWFya2Rvd24iLCJyZXF1aXJlIiwicmVtYXJrUGFyc2UiLCJvcHRpb25zIiwic2VsZiIsInBhcnNlciIsImRvYyIsImZyb21NYXJrZG93biIsImRhdGEiLCJleHRlbnNpb25zIiwibWRhc3RFeHRlbnNpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwyQkFBQTtBQUFBQyxRQUFBLENBQUFELDJCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDJCQUFBOzs7QUNXQSxJQUFBTywrQkFBQSxHQUEyQkMsT0FBQTtBQVVaLFNBQVJDLFlBQTZCQyxPQUFBLEVBQVM7RUFHM0MsTUFBTUMsSUFBQSxHQUFPO0VBRWJBLElBQUEsQ0FBS0MsTUFBQSxHQUFTQSxNQUFBO0VBS2QsU0FBU0EsT0FBT0MsR0FBQSxFQUFLO0lBQ25CLFdBQU9OLCtCQUFBLENBQUFPLFlBQUEsRUFBYUQsR0FBQSxFQUFLO01BQ3ZCLEdBQUdGLElBQUEsQ0FBS0ksSUFBQSxDQUFLLFVBQVU7TUFDdkIsR0FBR0wsT0FBQTtNQUlITSxVQUFBLEVBQVlMLElBQUEsQ0FBS0ksSUFBQSxDQUFLLHFCQUFxQixLQUFLLEVBQUM7TUFDakRFLGVBQUEsRUFBaUJOLElBQUEsQ0FBS0ksSUFBQSxDQUFLLHdCQUF3QixLQUFLO0lBQzFELENBQUM7RUFDSDtBQUNGOzs7QUR2Q0EsSUFBT1osMkJBQUEsR0FBUU0sV0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9