System.register(["micromark-util-character@2.1.1","micromark-factory-space@2.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-factory-space","2.0.1"],["micromark-factory-whitespace","2.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('micromark-util-character@2.1.1', dep), dep => dependencies.set('micromark-factory-space@2.0.1', dep)],
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

// .beyond/uimport/micromark-factory-whitespace.2.0.1.js
var micromark_factory_whitespace_2_0_1_exports = {};
__export(micromark_factory_whitespace_2_0_1_exports, {
  factoryWhitespace: () => factoryWhitespace
});
module.exports = __toCommonJS(micromark_factory_whitespace_2_0_1_exports);

// node_modules/micromark-factory-whitespace/index.js
var import_micromark_factory_space = require("micromark-factory-space@2.0.1");
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function factoryWhitespace(effects, ok) {
  let seen;
  return start;
  function start(code) {
    if ((0, import_micromark_util_character.markdownLineEnding)(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      seen = true;
      return start;
    }
    if ((0, import_micromark_util_character.markdownSpace)(code)) {
      return (0, import_micromark_factory_space.factorySpace)(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
    }
    return ok(code);
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstZmFjdG9yeS13aGl0ZXNwYWNlLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2UvaW5kZXguanMiXSwibmFtZXMiOlsibWljcm9tYXJrX2ZhY3Rvcnlfd2hpdGVzcGFjZV8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJmYWN0b3J5V2hpdGVzcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2UiLCJyZXF1aXJlIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlciIsImVmZmVjdHMiLCJvayIsInNlZW4iLCJzdGFydCIsImNvZGUiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJlbnRlciIsImNvbnN1bWUiLCJleGl0IiwibWFya2Rvd25TcGFjZSIsImZhY3RvcnlTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMENBQUE7QUFBQUMsUUFBQSxDQUFBRCwwQ0FBQTtFQUFBRSxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsMENBQUE7OztBQ0lBLElBQUFNLDhCQUFBLEdBQTZCQyxPQUFBO0FBQzdCLElBQUFDLCtCQUFBLEdBQWtERCxPQUFBO0FBbUIzQyxTQUFTTCxrQkFBa0JPLE9BQUEsRUFBU0MsRUFBQSxFQUFJO0VBRTdDLElBQUlDLElBQUE7RUFDSixPQUFPQyxLQUFBO0VBR1AsU0FBU0EsTUFBTUMsSUFBQSxFQUFNO0lBQ25CLFFBQUlMLCtCQUFBLENBQUFNLGtCQUFBLEVBQW1CRCxJQUFJLEdBQUc7TUFDNUJKLE9BQUEsQ0FBUU0sS0FBQSxDQUFNLFlBQVk7TUFDMUJOLE9BQUEsQ0FBUU8sT0FBQSxDQUFRSCxJQUFJO01BQ3BCSixPQUFBLENBQVFRLElBQUEsQ0FBSyxZQUFZO01BQ3pCTixJQUFBLEdBQU87TUFDUCxPQUFPQyxLQUFBO0lBQ1Q7SUFDQSxRQUFJSiwrQkFBQSxDQUFBVSxhQUFBLEVBQWNMLElBQUksR0FBRztNQUN2QixXQUFPUCw4QkFBQSxDQUFBYSxZQUFBLEVBQWFWLE9BQUEsRUFBU0csS0FBQSxFQUFPRCxJQUFBLEdBQU8sZUFBZSxZQUFZLEVBQUVFLElBQUk7SUFDOUU7SUFDQSxPQUFPSCxFQUFBLENBQUdHLElBQUk7RUFDaEI7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9