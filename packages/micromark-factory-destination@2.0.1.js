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

// .beyond/uimport/temp/micromark-factory-destination.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LWRlc3RpbmF0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya19mYWN0b3J5X2Rlc3RpbmF0aW9uXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImZhY3RvcnlEZXN0aW5hdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyIiwicmVxdWlyZSIsImVmZmVjdHMiLCJvayIsIm5vayIsInR5cGUiLCJsaXRlcmFsVHlwZSIsImxpdGVyYWxNYXJrZXJUeXBlIiwicmF3VHlwZSIsInN0cmluZ1R5cGUiLCJtYXgiLCJsaW1pdCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiYmFsYW5jZSIsInN0YXJ0IiwiY29kZSIsImVudGVyIiwiY29uc3VtZSIsImV4aXQiLCJlbmNsb3NlZEJlZm9yZSIsImFzY2lpQ29udHJvbCIsImNvbnRlbnRUeXBlIiwicmF3IiwiZW5jbG9zZWQiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJlbmNsb3NlZEVzY2FwZSIsIm1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UiLCJyYXdFc2NhcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDJDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMkNBQUE7RUFBQUUsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLDJDQUFBOzs7QUNJQSxJQUFBTSwrQkFBQSxHQUE0RUMsT0FBQTtBQXNDckUsU0FBU0wsbUJBQW1CTSxPQUFBLEVBQVNDLEVBQUEsRUFBSUMsR0FBQSxFQUFLQyxJQUFBLEVBQU1D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