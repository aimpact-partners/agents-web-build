System.register(["micromark-util-character@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-factory-destination","2.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('micromark-util-character@2.1.1', dep)],
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

// .beyond/uimport/micromark-factory-destination.2.0.1.js
var micromark_factory_destination_2_0_1_exports = {};
__export(micromark_factory_destination_2_0_1_exports, {
  factoryDestination: () => factoryDestination
});
module.exports = __toCommonJS(micromark_factory_destination_2_0_1_exports);

// node_modules/micromark-factory-destination/index.js
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  const limit = max || Number.POSITIVE_INFINITY;
  let balance = 0;
  return start;
  function start(code) {
    if (code === 60) {
      effects.enter(type);
      effects.enter(literalType);
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      return enclosedBefore;
    }
    if (code === null || code === 32 || code === 41 || (0, import_micromark_util_character.asciiControl)(code)) {
      return nok(code);
    }
    effects.enter(type);
    effects.enter(rawType);
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return raw(code);
  }
  function enclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType);
      effects.consume(code);
      effects.exit(literalMarkerType);
      effects.exit(literalType);
      effects.exit(type);
      return ok;
    }
    effects.enter(stringType);
    effects.enter("chunkString", {
      contentType: "string"
    });
    return enclosed(code);
  }
  function enclosed(code) {
    if (code === 62) {
      effects.exit("chunkString");
      effects.exit(stringType);
      return enclosedBefore(code);
    }
    if (code === null || code === 60 || (0, import_micromark_util_character.markdownLineEnding)(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === 92 ? enclosedEscape : enclosed;
  }
  function enclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code);
      return enclosed;
    }
    return enclosed(code);
  }
  function raw(code) {
    if (!balance && (code === null || code === 41 || (0, import_micromark_util_character.markdownLineEndingOrSpace)(code))) {
      effects.exit("chunkString");
      effects.exit(stringType);
      effects.exit(rawType);
      effects.exit(type);
      return ok(code);
    }
    if (balance < limit && code === 40) {
      effects.consume(code);
      balance++;
      return raw;
    }
    if (code === 41) {
      effects.consume(code);
      balance--;
      return raw;
    }
    if (code === null || code === 32 || code === 40 || (0, import_micromark_util_character.asciiControl)(code)) {
      return nok(code);
    }
    effects.consume(code);
    return code === 92 ? rawEscape : raw;
  }
  function rawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code);
      return raw;
    }
    return raw(code);
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstZmFjdG9yeS1kZXN0aW5hdGlvbi4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1kZXN0aW5hdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfZmFjdG9yeV9kZXN0aW5hdGlvbl8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJmYWN0b3J5RGVzdGluYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlciIsInJlcXVpcmUiLCJlZmZlY3RzIiwib2siLCJub2siLCJ0eXBlIiwibGl0ZXJhbFR5cGUiLCJsaXRlcmFsTWFya2VyVHlwZSIsInJhd1R5cGUiLCJzdHJpbmdUeXBlIiwibWF4IiwibGltaXQiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsImJhbGFuY2UiLCJzdGFydCIsImNvZGUiLCJlbnRlciIsImNvbnN1bWUiLCJleGl0IiwiZW5jbG9zZWRCZWZvcmUiLCJhc2NpaUNvbnRyb2wiLCJjb250ZW50VHlwZSIsInJhdyIsImVuY2xvc2VkIiwibWFya2Rvd25MaW5lRW5kaW5nIiwiZW5jbG9zZWRFc2NhcGUiLCJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwicmF3RXNjYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwyQ0FBQTtBQUFBQyxRQUFBLENBQUFELDJDQUFBO0VBQUFFLGtCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCwyQ0FBQTs7O0FDSUEsSUFBQU0sK0JBQUEsR0FBNEVDLE9BQUE7QUFzQ3JFLFNBQVNMLG1CQUFtQk0sT0FBQSxFQUFTQyxFQUFBLEVBQUlDLEdBQUEsRUFBS0MsSUFBQSxFQUFNQyxXQUFBLEVBQWFDLGlCQUFBLEVBQW1CQyxPQUFBLEVBQVNDLFVBQUEsRUFBWUMsR0FBQSxFQUFLO0VBQ25ILE1BQU1DLEtBQUEsR0FBUUQsR0FBQSxJQUFPRSxNQUFBLENBQU9DLGlCQUFBO0VBQzVCLElBQUlDLE9BQUEsR0FBVTtFQUNkLE9BQU9DLEtBQUE7RUFjUCxTQUFTQSxNQUFNQyxJQUFBLEVBQU07SUFDbkIsSUFBSUEsSUFBQSxLQUFTLElBQUk7TUFDZmQsT0FBQSxDQUFRZSxLQUFBLENBQU1aLElBQUk7TUFDbEJILE9BQUEsQ0FBUWUsS0FBQSxDQUFNWCxXQUFXO01BQ3pCSixPQUFBLENBQVFlLEtBQUEsQ0FBTVYsaUJBQWlCO01BQy9CTCxPQUFBLENBQVFnQixPQUFBLENBQVFGLElBQUk7TUFDcEJkLE9BQUEsQ0FBUWlCLElBQUEsQ0FBS1osaUJBQWlCO01BQzlCLE9BQU9hLGNBQUE7SUFDVDtJQUdBLElBQUlKLElBQUEsS0FBUyxRQUFRQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLFVBQU1oQiwrQkFBQSxDQUFBcUIsWUFBQSxFQUFhTCxJQUFJLEdBQUc7TUFDckUsT0FBT1osR0FBQSxDQUFJWSxJQUFJO0lBQ2pCO0lBQ0FkLE9BQUEsQ0FBUWUsS0FBQSxDQUFNWixJQUFJO0lBQ2xCSCxPQUFBLENBQVFlLEtBQUEsQ0FBTVQsT0FBTztJQUNyQk4sT0FBQSxDQUFRZSxLQUFBLENBQU1SLFVBQVU7SUFDeEJQLE9BQUEsQ0FBUWUsS0FBQSxDQUFNLGVBQWU7TUFDM0JLLFdBQUEsRUFBYTtJQUNmLENBQUM7SUFDRCxPQUFPQyxHQUFBLENBQUlQLElBQUk7RUFDakI7RUFZQSxTQUFTSSxlQUFlSixJQUFBLEVBQU07SUFDNUIsSUFBSUEsSUFBQSxLQUFTLElBQUk7TUFDZmQsT0FBQSxDQUFRZSxLQUFBLENBQU1WLGlCQUFpQjtNQUMvQkwsT0FBQSxDQUFRZ0IsT0FBQSxDQUFRRixJQUFJO01BQ3BCZCxPQUFBLENBQVFpQixJQUFBLENBQUtaLGlCQUFpQjtNQUM5QkwsT0FBQSxDQUFRaUIsSUFBQSxDQUFLYixXQUFXO01BQ3hCSixPQUFBLENBQVFpQixJQUFBLENBQUtkLElBQUk7TUFDakIsT0FBT0YsRUFBQTtJQUNUO0lBQ0FELE9BQUEsQ0FBUWUsS0FBQSxDQUFNUixVQUFVO0lBQ3hCUCxPQUFBLENBQVFlLEtBQUEsQ0FBTSxlQUFlO01BQzNCSyxXQUFBLEVBQWE7SUFDZixDQUFDO0lBQ0QsT0FBT0UsUUFBQSxDQUFTUixJQUFJO0VBQ3RCO0VBWUEsU0FBU1EsU0FBU1IsSUFBQSxFQUFNO0lBQ3RCLElBQUlBLElBQUEsS0FBUyxJQUFJO01BQ2ZkLE9BQUEsQ0FBUWlCLElBQUEsQ0FBSyxhQUFhO01BQzFCakIsT0FBQSxDQUFRaUIsSUFBQSxDQUFLVixVQUFVO01BQ3ZCLE9BQU9XLGNBQUEsQ0FBZUosSUFBSTtJQUM1QjtJQUNBLElBQUlBLElBQUEsS0FBUyxRQUFRQSxJQUFBLEtBQVMsVUFBTWhCLCtCQUFBLENBQUF5QixrQkFBQSxFQUFtQlQsSUFBSSxHQUFHO01BQzVELE9BQU9aLEdBQUEsQ0FBSVksSUFBSTtJQUNqQjtJQUNBZCxPQUFBLENBQVFnQixPQUFBLENBQVFGLElBQUk7SUFDcEIsT0FBT0EsSUFBQSxLQUFTLEtBQUtVLGNBQUEsR0FBaUJGLFFBQUE7RUFDeEM7RUFZQSxTQUFTRSxlQUFlVixJQUFBLEVBQU07SUFDNUIsSUFBSUEsSUFBQSxLQUFTLE1BQU1BLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsSUFBSTtNQUM3Q2QsT0FBQSxDQUFRZ0IsT0FBQSxDQUFRRixJQUFJO01BQ3BCLE9BQU9RLFFBQUE7SUFDVDtJQUNBLE9BQU9BLFFBQUEsQ0FBU1IsSUFBSTtFQUN0QjtFQVlBLFNBQVNPLElBQUlQLElBQUEsRUFBTTtJQUNqQixJQUFJLENBQUNGLE9BQUEsS0FBWUUsSUFBQSxLQUFTLFFBQVFBLElBQUEsS0FBUyxVQUFNaEIsK0JBQUEsQ0FBQTJCLHlCQUFBLEVBQTBCWCxJQUFJLElBQUk7TUFDakZkLE9BQUEsQ0FBUWlCLElBQUEsQ0FBSyxhQUFhO01BQzFCakIsT0FBQSxDQUFRaUIsSUFBQSxDQUFLVixVQUFVO01BQ3ZCUCxPQUFBLENBQVFpQixJQUFBLENBQUtYLE9BQU87TUFDcEJOLE9BQUEsQ0FBUWlCLElBQUEsQ0FBS2QsSUFBSTtNQUNqQixPQUFPRixFQUFBLENBQUdhLElBQUk7SUFDaEI7SUFDQSxJQUFJRixPQUFBLEdBQVVILEtBQUEsSUFBU0ssSUFBQSxLQUFTLElBQUk7TUFDbENkLE9BQUEsQ0FBUWdCLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQkYsT0FBQTtNQUNBLE9BQU9TLEdBQUE7SUFDVDtJQUNBLElBQUlQLElBQUEsS0FBUyxJQUFJO01BQ2ZkLE9BQUEsQ0FBUWdCLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQkYsT0FBQTtNQUNBLE9BQU9TLEdBQUE7SUFDVDtJQUtBLElBQUlQLElBQUEsS0FBUyxRQUFRQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLFVBQU1oQiwrQkFBQSxDQUFBcUIsWUFBQSxFQUFhTCxJQUFJLEdBQUc7TUFDckUsT0FBT1osR0FBQSxDQUFJWSxJQUFJO0lBQ2pCO0lBQ0FkLE9BQUEsQ0FBUWdCLE9BQUEsQ0FBUUYsSUFBSTtJQUNwQixPQUFPQSxJQUFBLEtBQVMsS0FBS1ksU0FBQSxHQUFZTCxHQUFBO0VBQ25DO0VBWUEsU0FBU0ssVUFBVVosSUFBQSxFQUFNO0lBQ3ZCLElBQUlBLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLElBQUk7TUFDN0NkLE9BQUEsQ0FBUWdCLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQixPQUFPTyxHQUFBO0lBQ1Q7SUFDQSxPQUFPQSxHQUFBLENBQUlQLElBQUk7RUFDakI7QUFDRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=