System.register(["micromark-util-character@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-factory-label","2.0.1"]]);
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

// .beyond/uimport/micromark-factory-label.2.0.1.js
var micromark_factory_label_2_0_1_exports = {};
__export(micromark_factory_label_2_0_1_exports, {
  factoryLabel: () => factoryLabel
});
module.exports = __toCommonJS(micromark_factory_label_2_0_1_exports);

// node_modules/micromark-factory-label/index.js
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function factoryLabel(effects, ok, nok, type, markerType, stringType) {
  const self = this;
  let size = 0;
  let seen;
  return start;
  function start(code) {
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    effects.enter(stringType);
    return atBreak;
  }
  function atBreak(code) {
    if (size > 999 || code === null || code === 91 || code === 93 && !seen || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs) {
      return nok(code);
    }
    if (code === 93) {
      effects.exit(stringType);
      effects.enter(markerType);
      effects.consume(code);
      effects.exit(markerType);
      effects.exit(type);
      return ok;
    }
    if ((0, import_micromark_util_character.markdownLineEnding)(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return atBreak;
    }
    effects.enter("chunkString", {
      contentType: "string"
    });
    return labelInside(code);
  }
  function labelInside(code) {
    if (code === null || code === 91 || code === 93 || (0, import_micromark_util_character.markdownLineEnding)(code) || size++ > 999) {
      effects.exit("chunkString");
      return atBreak(code);
    }
    effects.consume(code);
    if (!seen) seen = !(0, import_micromark_util_character.markdownSpace)(code);
    return code === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code);
      size++;
      return labelInside;
    }
    return labelInside(code);
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstZmFjdG9yeS1sYWJlbC4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1sYWJlbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfZmFjdG9yeV9sYWJlbF8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJmYWN0b3J5TGFiZWwiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlciIsInJlcXVpcmUiLCJlZmZlY3RzIiwib2siLCJub2siLCJ0eXBlIiwibWFya2VyVHlwZSIsInN0cmluZ1R5cGUiLCJzZWxmIiwic2l6ZSIsInNlZW4iLCJzdGFydCIsImNvZGUiLCJlbnRlciIsImNvbnN1bWUiLCJleGl0IiwiYXRCcmVhayIsInBhcnNlciIsImNvbnN0cnVjdHMiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJjb250ZW50VHlwZSIsImxhYmVsSW5zaWRlIiwibWFya2Rvd25TcGFjZSIsImxhYmVsRXNjYXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQ0FBQTtBQUFBQyxRQUFBLENBQUFELHFDQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLHFDQUFBOzs7QUNTQSxJQUFBTSwrQkFBQSxHQUFrREMsT0FBQTtBQWdDM0MsU0FBU0wsYUFBYU0sT0FBQSxFQUFTQyxFQUFBLEVBQUlDLEdBQUEsRUFBS0MsSUFBQSxFQUFNQyxVQUFBLEVBQVlDLFVBQUEsRUFBWTtFQUMzRSxNQUFNQyxJQUFBLEdBQU87RUFDYixJQUFJQyxJQUFBLEdBQU87RUFFWCxJQUFJQyxJQUFBO0VBQ0osT0FBT0MsS0FBQTtFQVlQLFNBQVNBLE1BQU1DLElBQUEsRUFBTTtJQUNuQlYsT0FBQSxDQUFRVyxLQUFBLENBQU1SLElBQUk7SUFDbEJILE9BQUEsQ0FBUVcsS0FBQSxDQUFNUCxVQUFVO0lBQ3hCSixPQUFBLENBQVFZLE9BQUEsQ0FBUUYsSUFBSTtJQUNwQlYsT0FBQSxDQUFRYSxJQUFBLENBQUtULFVBQVU7SUFDdkJKLE9BQUEsQ0FBUVcsS0FBQSxDQUFNTixVQUFVO0lBQ3hCLE9BQU9TLE9BQUE7RUFDVDtFQVlBLFNBQVNBLFFBQVFKLElBQUEsRUFBTTtJQUNyQixJQUFJSCxJQUFBLEdBQU8sT0FBT0csSUFBQSxLQUFTLFFBQVFBLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsTUFBTSxDQUFDRixJQUFBLElBTWxFRSxJQUFBLEtBQVMsTUFBTSxDQUFDSCxJQUFBLElBQVEsNEJBQTRCRCxJQUFBLENBQUtTLE1BQUEsQ0FBT0MsVUFBQSxFQUFZO01BQzFFLE9BQU9kLEdBQUEsQ0FBSVEsSUFBSTtJQUNqQjtJQUNBLElBQUlBLElBQUEsS0FBUyxJQUFJO01BQ2ZWLE9BQUEsQ0FBUWEsSUFBQSxDQUFLUixVQUFVO01BQ3ZCTCxPQUFBLENBQVFXLEtBQUEsQ0FBTVAsVUFBVTtNQUN4QkosT0FBQSxDQUFRWSxPQUFBLENBQVFGLElBQUk7TUFDcEJWLE9BQUEsQ0FBUWEsSUFBQSxDQUFLVCxVQUFVO01BQ3ZCSixPQUFBLENBQVFhLElBQUEsQ0FBS1YsSUFBSTtNQUNqQixPQUFPRixFQUFBO0lBQ1Q7SUFHQSxRQUFJSCwrQkFBQSxDQUFBbUIsa0JBQUEsRUFBbUJQLElBQUksR0FBRztNQUM1QlYsT0FBQSxDQUFRVyxLQUFBLENBQU0sWUFBWTtNQUMxQlgsT0FBQSxDQUFRWSxPQUFBLENBQVFGLElBQUk7TUFDcEJWLE9BQUEsQ0FBUWEsSUFBQSxDQUFLLFlBQVk7TUFDekIsT0FBT0MsT0FBQTtJQUNUO0lBQ0FkLE9BQUEsQ0FBUVcsS0FBQSxDQUFNLGVBQWU7TUFDM0JPLFdBQUEsRUFBYTtJQUNmLENBQUM7SUFDRCxPQUFPQyxXQUFBLENBQVlULElBQUk7RUFDekI7RUFZQSxTQUFTUyxZQUFZVCxJQUFBLEVBQU07SUFDekIsSUFBSUEsSUFBQSxLQUFTLFFBQVFBLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsVUFBTVosK0JBQUEsQ0FBQW1CLGtCQUFBLEVBQW1CUCxJQUFJLEtBQUtILElBQUEsS0FBUyxLQUFLO01BQzNGUCxPQUFBLENBQVFhLElBQUEsQ0FBSyxhQUFhO01BQzFCLE9BQU9DLE9BQUEsQ0FBUUosSUFBSTtJQUNyQjtJQUNBVixPQUFBLENBQVFZLE9BQUEsQ0FBUUYsSUFBSTtJQUNwQixJQUFJLENBQUNGLElBQUEsRUFBTUEsSUFBQSxHQUFPLEtBQUNWLCtCQUFBLENBQUFzQixhQUFBLEVBQWNWLElBQUk7SUFDckMsT0FBT0EsSUFBQSxLQUFTLEtBQUtXLFdBQUEsR0FBY0YsV0FBQTtFQUNyQztFQVlBLFNBQVNFLFlBQVlYLElBQUEsRUFBTTtJQUN6QixJQUFJQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLE1BQU1BLElBQUEsS0FBUyxJQUFJO01BQzdDVixPQUFBLENBQVFZLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQkgsSUFBQTtNQUNBLE9BQU9ZLFdBQUE7SUFDVDtJQUNBLE9BQU9BLFdBQUEsQ0FBWVQsSUFBSTtFQUN6QjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==