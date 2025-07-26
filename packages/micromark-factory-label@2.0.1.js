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

// .beyond/uimport/temp/micromark-factory-label.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay1mYWN0b3J5LWxhYmVsLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWxhYmVsL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya19mYWN0b3J5X2xhYmVsXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImZhY3RvcnlMYWJlbCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyIiwicmVxdWlyZSIsImVmZmVjdHMiLCJvayIsIm5vayIsInR5cGUiLCJtYXJrZXJUeXBlIiwic3RyaW5nVHlwZSIsInNlbGYiLCJzaXplIiwic2VlbiIsInN0YXJ0IiwiY29kZSIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJhdEJyZWFrIiwicGFyc2VyIiwiY29uc3RydWN0cyIsIm1hcmtkb3duTGluZUVuZGluZyIsImNvbnRlbnRUeXBlIiwibGFiZWxJbnNpZGUiLCJtYXJrZG93blNwYWNlIiwibGFiZWxFc2NhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFDQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUNBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwscUNBQUE7OztBQ1NBLElBQUFNLCtCQUFBLEdBQWtEQyxPQUFBO0FBZ0MzQyxTQUFTTCxhQUFhTSxPQUFBLEVBQVNDLEVBQUEsRUFBSUMsR0FBQSxFQUFLQyxJQUFBLEVBQU1DLFVBQUEsRUFBWUMsVUFBQSxFQUFZO0VBQzNFLE1BQU1DLElBQUEsR0FBTztFQUNiLElBQUlDLElBQUEsR0FBTztFQUVYLElBQUlDLElBQUE7RUFDSixPQUFPQyxLQUFBO0VBWVAsU0FBU0EsTUFBTUMsSUFBQSxFQUFNO0lBQ25CVixPQUFBLENBQVFXLEtBQUEsQ0FBTVIsSUFBSTtJQUNsQkgsT0FBQSxDQUFRVyxLQUFBLENBQU1QLFVBQVU7SUFDeEJKLE9BQUEsQ0FBUVksT0FBQSxDQUFRRixJQUFJO0lBQ3BCVixPQUFBLENBQVFhLElBQUEsQ0FBS1QsVUFBVTtJQUN2QkosT0FBQSxDQUFRVyxLQUFBLENBQU1OLFVBQVU7SUFDeEIsT0FBT1MsT0FBQTtFQUNUO0VBWUEsU0FBU0EsUUFBUUosSUFBQSxFQUFNO0lBQ3JCLElBQUlILElBQUEsR0FBTyxPQUFPRyxJQUFBLEtBQVMsUUFBUUEsSUFBQSxLQUFTLE1BQU1BLElBQUEsS0FBUyxNQUFNLENBQUNGLElBQUEsSUFNbEVFLElBQUEsS0FBUyxNQUFNLENBQUNILElBQUEsSUFBUSw0QkFBNEJELElBQUEsQ0FBS1MsTUFBQSxDQUFPQyxVQUFBLEVBQVk7TUFDMUUsT0FBT2QsR0FBQSxDQUFJUSxJQUFJO0lBQ2pCO0lBQ0EsSUFBSUEsSUFBQSxLQUFTLElBQUk7TUFDZlYsT0FBQSxDQUFRYSxJQUFBLENBQUtSLFVBQVU7TUFDdkJMLE9BQUEsQ0FBUVcsS0FBQSxDQUFNUCxVQUFVO01BQ3hCSixPQUFBLENBQVFZLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQlYsT0FBQSxDQUFRYSxJQUFBLENBQUtULFVBQVU7TUFDdkJKLE9BQUEsQ0FBUWEsSUFBQSxDQUFLVixJQUFJO01BQ2pCLE9BQU9GLEVBQUE7SUFDVDtJQUdBLFFBQUlILCtCQUFBLENBQUFtQixrQkFBQSxFQUFtQlAsSUFBSSxHQUFHO01BQzVCVixPQUFBLENBQVFXLEtBQUEsQ0FBTSxZQUFZO01BQzFCWCxPQUFBLENBQVFZLE9BQUEsQ0FBUUYsSUFBSTtNQUNwQlYsT0FBQSxDQUFRYSxJQUFBLENBQUssWUFBWTtNQUN6QixPQUFPQyxPQUFBO0lBQ1Q7SUFDQWQsT0FBQSxDQUFRVyxLQUFBLENBQU0sZUFBZTtNQUMzQk8sV0FBQSxFQUFhO0lBQ2YsQ0FBQztJQUNELE9BQU9DLFdBQUEsQ0FBWVQsSUFBSTtFQUN6QjtFQVlBLFNBQVNTLFlBQVlULElBQUEsRUFBTTtJQUN6QixJQUFJQSxJQUFBLEtBQVMsUUFBUUEsSUFBQSxLQUFTLE1BQU1BLElBQUEsS0FBUyxVQUFNWiwrQkFBQSxDQUFBbUIsa0JBQUEsRUFBbUJQLElBQUksS0FBS0gsSUFBQSxLQUFTLEtBQUs7TUFDM0ZQLE9BQUEsQ0FBUWEsSUFBQSxDQUFLLGFBQWE7TUFDMUIsT0FBT0MsT0FBQSxDQUFRSixJQUFJO0lBQ3JCO0lBQ0FWLE9BQUEsQ0FBUVksT0FBQSxDQUFRRixJQUFJO0lBQ3BCLElBQUksQ0FBQ0YsSUFBQSxFQUFNQSxJQUFBLEdBQU8sS0FBQ1YsK0JBQUEsQ0FBQXNCLGFBQUEsRUFBY1YsSUFBSTtJQUNyQyxPQUFPQSxJQUFBLEtBQVMsS0FBS1csV0FBQSxHQUFjRixXQUFBO0VBQ3JDO0VBWUEsU0FBU0UsWUFBWVgsSUFBQSxFQUFNO0lBQ3pCLElBQUlBLElBQUEsS0FBUyxNQUFNQSxJQUFBLEtBQVMsTUFBTUEsSUFBQSxLQUFTLElBQUk7TUFDN0NWLE9BQUEsQ0FBUVksT0FBQSxDQUFRRixJQUFJO01BQ3BCSCxJQUFBO01BQ0EsT0FBT1ksV0FBQTtJQUNUO0lBQ0EsT0FBT0EsV0FBQSxDQUFZVCxJQUFJO0VBQ3pCO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==