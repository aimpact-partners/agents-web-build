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

// .beyond/uimport/temp/micromark-factory-whitespace.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay1mYWN0b3J5LXdoaXRlc3BhY2UuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfZmFjdG9yeV93aGl0ZXNwYWNlXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImZhY3RvcnlXaGl0ZXNwYWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9taWNyb21hcmtfZmFjdG9yeV9zcGFjZSIsInJlcXVpcmUiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyIiwiZWZmZWN0cyIsIm9rIiwic2VlbiIsInN0YXJ0IiwiY29kZSIsIm1hcmtkb3duTGluZUVuZGluZyIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJtYXJrZG93blNwYWNlIiwiZmFjdG9yeVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQ0FBQTtBQUFBQyxRQUFBLENBQUFELDBDQUFBO0VBQUFFLGlCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCwwQ0FBQTs7O0FDSUEsSUFBQU0sOEJBQUEsR0FBNkJDLE9BQUE7QUFDN0IsSUFBQUMsK0JBQUEsR0FBa0RELE9BQUE7QUFtQjNDLFNBQVNMLGtCQUFrQk8sT0FBQSxFQUFTQyxFQUFBLEVBQUk7RUFFN0MsSUFBSUMsSUFBQTtFQUNKLE9BQU9DLEtBQUE7RUFHUCxTQUFTQSxNQUFNQyxJQUFBLEVBQU07SUFDbkIsUUFBSUwsK0JBQUEsQ0FBQU0sa0JBQUEsRUFBbUJELElBQUksR0FBRztNQUM1QkosT0FBQSxDQUFRTSxLQUFBLENBQU0sWUFBWTtNQUMxQk4sT0FBQSxDQUFRTyxPQUFBLENBQVFILElBQUk7TUFDcEJKLE9BQUEsQ0FBUVEsSUFBQSxDQUFLLFlBQVk7TUFDekJOLElBQUEsR0FBTztNQUNQLE9BQU9DLEtBQUE7SUFDVDtJQUNBLFFBQUlKLCtCQUFBLENBQUFVLGFBQUEsRUFBY0wsSUFBSSxHQUFHO01BQ3ZCLFdBQU9QLDhCQUFBLENBQUFhLFlBQUEsRUFBYVYsT0FBQSxFQUFTRyxLQUFBLEVBQU9ELElBQUEsR0FBTyxlQUFlLFlBQVksRUFBRUUsSUFBSTtJQUM5RTtJQUNBLE9BQU9ILEVBQUEsQ0FBR0csSUFBSTtFQUNoQjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=