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

// .beyond/uimport/micromark-factory-title.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstZmFjdG9yeS10aXRsZS4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS10aXRsZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfZmFjdG9yeV90aXRsZV8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJmYWN0b3J5VGl0bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3NwYWNlIiwicmVxdWlyZSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXIiLCJlZmZlY3RzIiwib2siLCJub2siLCJ0eXBlIiwibWFya2VyVHlwZSIsInN0cmluZ1R5cGUiLCJtYXJrZXIiLCJzdGFydCIsImNvZGUiLCJlbnRlciIsImNvbnN1bWUiLCJleGl0IiwiYmVnaW4iLCJhdEJyZWFrIiwibWFya2Rvd25MaW5lRW5kaW5nIiwiZmFjdG9yeVNwYWNlIiwiY29udGVudFR5cGUiLCJpbnNpZGUiLCJlc2NhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFDQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUNBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwscUNBQUE7OztBQ1NBLElBQUFNLDhCQUFBLEdBQTZCQyxPQUFBO0FBQzdCLElBQUFDLCtCQUFBLEdBQW1DRCxPQUFBO0FBZ0M1QixTQUFTTCxhQUFhTyxPQUFBLEVBQVNDLEVBQUEsRUFBSUMsR0FBQSxFQUFLQyxJQUFBLEVBQU1DLFVBQUEsRUFBWUMsVUFBQSxFQUFZO0VBRTNFLElBQUlDLE1BQUE7RUFDSixPQUFPQyxLQUFBO0VBWVAsU0FBU0EsTUFBTUMsSUFBQSxFQUFNO0lBQ25CLElBQUlBLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLElBQUk7TUFDN0NSLE9BQUEsQ0FBUVMsS0FBQSxDQUFNTixJQUFJO01BQ2xCSCxPQUFBLENBQVFTLEtBQUEsQ0FBTUwsVUFBVTtNQUN4QkosT0FBQSxDQUFRVSxPQUFBLENBQVFGLElBQUk7TUFDcEJSLE9BQUEsQ0FBUVcsSUFBQSxDQUFLUCxVQUFVO01BQ3ZCRSxNQUFBLEdBQVNFLElBQUEsS0FBUyxLQUFLLEtBQUtBLElBQUE7TUFDNUIsT0FBT0ksS0FBQTtJQUNUO0lBQ0EsT0FBT1YsR0FBQSxDQUFJTSxJQUFJO0VBQ2pCO0VBY0EsU0FBU0ksTUFBTUosSUFBQSxFQUFNO0lBQ25CLElBQUlBLElBQUEsS0FBU0YsTUFBQSxFQUFRO01BQ25CTixPQUFBLENBQVFTLEtBQUEsQ0FBTUwsVUFBVTtNQUN4QkosT0FBQSxDQUFRVSxPQUFBLENBQVFGLElBQUk7TUFDcEJSLE9BQUEsQ0FBUVcsSUFBQSxDQUFLUCxVQUFVO01BQ3ZCSixPQUFBLENBQVFXLElBQUEsQ0FBS1IsSUFBSTtNQUNqQixPQUFPRixFQUFBO0lBQ1Q7SUFDQUQsT0FBQSxDQUFRUyxLQUFBLENBQU1KLFVBQVU7SUFDeEIsT0FBT1EsT0FBQSxDQUFRTCxJQUFJO0VBQ3JCO0VBWUEsU0FBU0ssUUFBUUwsSUFBQSxFQUFNO0lBQ3JCLElBQUlBLElBQUEsS0FBU0YsTUFBQSxFQUFRO01BQ25CTixPQUFBLENBQVFXLElBQUEsQ0FBS04sVUFBVTtNQUN2QixPQUFPTyxLQUFBLENBQU1OLE1BQU07SUFDckI7SUFDQSxJQUFJRSxJQUFBLEtBQVMsTUFBTTtNQUNqQixPQUFPTixHQUFBLENBQUlNLElBQUk7SUFDakI7SUFHQSxRQUFJVCwrQkFBQSxDQUFBZSxrQkFBQSxFQUFtQk4sSUFBSSxHQUFHO01BRTVCUixPQUFBLENBQVFTLEtBQUEsQ0FBTSxZQUFZO01BQzFCVCxPQUFBLENBQVFVLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQlIsT0FBQSxDQUFRVyxJQUFBLENBQUssWUFBWTtNQUN6QixXQUFPZCw4QkFBQSxDQUFBa0IsWUFBQSxFQUFhZixPQUFBLEVBQVNhLE9BQUEsRUFBUyxZQUFZO0lBQ3BEO0lBQ0FiLE9BQUEsQ0FBUVMsS0FBQSxDQUFNLGVBQWU7TUFDM0JPLFdBQUEsRUFBYTtJQUNmLENBQUM7SUFDRCxPQUFPQyxNQUFBLENBQU9ULElBQUk7RUFDcEI7RUFPQSxTQUFTUyxPQUFPVCxJQUFBLEVBQU07SUFDcEIsSUFBSUEsSUFBQSxLQUFTRixNQUFBLElBQVVFLElBQUEsS0FBUyxZQUFRVCwrQkFBQSxDQUFBZSxrQkFBQSxFQUFtQk4sSUFBSSxHQUFHO01BQ2hFUixPQUFBLENBQVFXLElBQUEsQ0FBSyxhQUFhO01BQzFCLE9BQU9FLE9BQUEsQ0FBUUwsSUFBSTtJQUNyQjtJQUNBUixPQUFBLENBQVFVLE9BQUEsQ0FBUUYsSUFBSTtJQUNwQixPQUFPQSxJQUFBLEtBQVMsS0FBS1UsTUFBQSxHQUFTRCxNQUFBO0VBQ2hDO0VBWUEsU0FBU0MsT0FBT1YsSUFBQSxFQUFNO0lBQ3BCLElBQUlBLElBQUEsS0FBU0YsTUFBQSxJQUFVRSxJQUFBLEtBQVMsSUFBSTtNQUNsQ1IsT0FBQSxDQUFRVSxPQUFBLENBQVFGLElBQUk7TUFDcEIsT0FBT1MsTUFBQTtJQUNUO0lBQ0EsT0FBT0EsTUFBQSxDQUFPVCxJQUFJO0VBQ3BCO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==