System.register(["micromark-util-character@2.1.1","micromark-factory-space@2.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-factory-space","2.0.1"],["micromark-factory-title","2.0.1"]]);
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

// .beyond/uimport/temp/micromark-factory-title.2.0.1.js
var micromark_factory_title_2_0_1_exports = {};
__export(micromark_factory_title_2_0_1_exports, {
  factoryTitle: () => factoryTitle
});
module.exports = __toCommonJS(micromark_factory_title_2_0_1_exports);

// node_modules/micromark-factory-title/index.js
var import_micromark_factory_space = require("micromark-factory-space@2.0.1");
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function factoryTitle(effects, ok, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code) {
    if (code === 34 || code === 39 || code === 40) {
      effects.enter(type);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      marker = code === 40 ? 41 : code;
      return begin;
    }
    return nok(code);
  }
  function begin(code) {
    if (code === marker) {
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === marker) {
      effects.exit(stringType);
      return begin(marker);
    }
    if (code === null) {
      return nok(code);
    }
    if ((0, import_micromark_util_character.markdownLineEnding)(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return (0, import_micromark_factory_space.factorySpace)(effects, atBreak, "linePrefix");
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return inside(code);
  }
  function inside(code) {
    if (code === marker || code === null || (0, import_micromark_util_character.markdownLineEnding)(code)) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    return code === 92 ? escape : inside;
  }
  function escape(code) {
    if (code === marker || code === 92) {
      effects.consume(code);
      return inside;
    }
    return inside(code);
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXRpdGxlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya19mYWN0b3J5X3RpdGxlXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImZhY3RvcnlUaXRsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2UiLCJyZXF1aXJlIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlciIsImVmZmVjdHMiLCJvayIsIm5vayIsInR5cGUiLCJtYXJrZXJUeXBlIiwic3RyaW5nVHlwZSIsIm1hcmtlciIsInN0YXJ0IiwiY29kZSIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJiZWdpbiIsImF0QnJlYWsiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJmYWN0b3J5U3BhY2UiLCJjb250ZW50VHlwZSIsImluc2lkZSIsImVzY2FwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxxQ0FBQTs7O0FDU0EsSUFBQU0sOEJBQUEsR0FBNkJDLE9BQUE7QUFDN0IsSUFBQUMsK0JBQUEsR0FBbUNELE9BQUE7QUFnQzVCLFNBQVNMLGFBQWFPLE9BQUEsRUFBU0MsRUFBQSxFQUFJQyxHQUFBLEVBQUtDLElBQUEsRUFBTUMsVUFBQSxFQUFZQyxVQUFBLEVBQVk7RUFFM0UsSUFBSUMsTUFBQTtFQUNKLE9BQU9DLEtBQUE7RUFZUCxTQUFTQSxNQUFNQyxJQUFBLEVBQU07SUFDbkIsSUFBSUEsSUFBQSxLQUFTLE1BQU1BLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsSUFBSTtNQUM3Q1IsT0FBQSxDQUFRUyxLQUFBLENBQU1OLElBQUk7TUFDbEJILE9BQUEsQ0FBUVMsS0FBQSxDQUFNTCxVQUFVO01BQ3hCSixPQUFBLENBQVFVLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQlIsT0FBQSxDQUFRVyxJQUFBLENBQUtQLFVBQVU7TUFDdkJFLE1BQUEsR0FBU0UsSUFBQSxLQUFTLEtBQUssS0FBS0EsSUFBQTtNQUM1QixPQUFPSSxLQUFBO0lBQ1Q7SUFDQSxPQUFPVixHQUFBLENBQUlNLElBQUk7RUFDakI7RUFjQSxTQUFTSSxNQUFNSixJQUFBLEVBQU07SUFDbkIsSUFBSUEsSUFBQSxLQUFTRixNQUFBLEVBQVE7TUFDbkJOLE9BQUEsQ0FBUVMsS0FBQSxDQUFNTCxVQUFVO01BQ3hCSixPQUFBLENBQVFVLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQlIsT0FBQSxDQUFRVyxJQUFBLENBQUtQLFVBQVU7TUFDdkJKLE9BQUEsQ0FBUVcsSUFBQSxDQUFLUixJQUFJO01BQ2pCLE9BQU9GLEVBQUE7SUFDVDtJQUNBRCxPQUFBLENBQVFTLEtBQUEsQ0FBTUosVUFBVTtJQUN4QixPQUFPUSxPQUFBLENBQVFMLElBQUk7RUFDckI7RUFZQSxTQUFTSyxRQUFRTCxJQUFBLEVBQU07SUFDckIsSUFBSUEsSUFBQSxLQUFTRixNQUFBLEVBQVE7TUFDbkJOLE9BQUEsQ0FBUVcsSUFBQSxDQUFLTixVQUFVO01BQ3ZCLE9BQU9PLEtBQUEsQ0FBTU4sTUFBTTtJQUNyQjtJQUNBLElBQUlFLElBQUEsS0FBUyxNQUFNO01BQ2pCLE9BQU9OLEdBQUEsQ0FBSU0sSUFBSTtJQUNqQjtJQUdBLFFBQUlULCtCQUFBLENBQUFlLGtCQUFBLEVBQW1CTixJQUFJLEdBQUc7TUFFNUJSLE9BQUEsQ0FBUVMsS0FBQSxDQUFNLFlBQVk7TUFDMUJULE9BQUEsQ0FBUVUsT0FBQSxDQUFRRixJQUFJO01BQ3BCUixPQUFBLENBQVFXLElBQUEsQ0FBSyxZQUFZO01BQ3pCLFdBQU9kLDhCQUFBLENBQUFrQixZQUFBLEVBQWFmLE9BQUEsRUFBU2EsT0FBQSxFQUFTLFlBQVk7SUFDcEQ7SUFDQWIsT0FBQSxDQUFRUyxLQUFBLENBQU0sZUFBZTtNQUMzQk8sV0FBQSxFQUFhO0lBQ2YsQ0FBQztJQUNELE9BQU9DLE1BQUEsQ0FBT1QsSUFBSTtFQUNwQjtFQU9BLFNBQVNTLE9BQU9ULElBQUEsRUFBTTtJQUNwQixJQUFJQSxJQUFBLEtBQVNGLE1BQUEsSUFBVUUsSUFBQSxLQUFTLFlBQVFULCtCQUFBLENBQUFlLGtCQUFBLEVBQW1CTixJQUFJLEdBQUc7TUFDaEVSLE9BQUEsQ0FBUVcsSUFBQSxDQUFLLGFBQWE7TUFDMUIsT0FBT0UsT0FBQSxDQUFRTCxJQUFJO0lBQ3JCO0lBQ0FSLE9BQUEsQ0FBUVUsT0FBQSxDQUFRRixJQUFJO0lBQ3BCLE9BQU9BLElBQUEsS0FBUyxLQUFLVSxNQUFBLEdBQVNELE1BQUE7RUFDaEM7RUFZQSxTQUFTQyxPQUFPVixJQUFBLEVBQU07SUFDcEIsSUFBSUEsSUFBQSxLQUFTRixNQUFBLElBQVVFLElBQUEsS0FBUyxJQUFJO01BQ2xDUixPQUFBLENBQVFVLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQixPQUFPUyxNQUFBO0lBQ1Q7SUFDQSxPQUFPQSxNQUFBLENBQU9ULElBQUk7RUFDcEI7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9