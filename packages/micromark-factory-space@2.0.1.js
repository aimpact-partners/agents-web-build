System.register(["micromark-util-character@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-factory-space","2.0.1"]]);
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

// .beyond/uimport/temp/micromark-factory-space.2.0.1.js
var micromark_factory_space_2_0_1_exports = {};
__export(micromark_factory_space_2_0_1_exports, {
  factorySpace: () => factorySpace
});
module.exports = __toCommonJS(micromark_factory_space_2_0_1_exports);

// node_modules/micromark-factory-space/index.js
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function factorySpace(effects, ok, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code) {
    if ((0, import_micromark_util_character.markdownSpace)(code)) {
      effects.enter(type);
      return prefix(code);
    }
    return ok(code);
  }
  function prefix(code) {
    if ((0, import_micromark_util_character.markdownSpace)(code) && size++ < limit) {
      effects.consume(code);
      return prefix;
    }
    effects.exit(type);
    return ok(code);
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya19mYWN0b3J5X3NwYWNlXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsImZhY3RvcnlTcGFjZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyIiwicmVxdWlyZSIsImVmZmVjdHMiLCJvayIsInR5cGUiLCJtYXgiLCJsaW1pdCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwic2l6ZSIsInN0YXJ0IiwiY29kZSIsIm1hcmtkb3duU3BhY2UiLCJlbnRlciIsInByZWZpeCIsImNvbnN1bWUiLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQ0FBQTtBQUFBQyxRQUFBLENBQUFELHFDQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLHFDQUFBOzs7QUNJQSxJQUFBTSwrQkFBQSxHQUE4QkMsT0FBQTtBQW9DdkIsU0FBU0wsYUFBYU0sT0FBQSxFQUFTQyxFQUFBLEVBQUlDLElBQUEsRUFBTUMsR0FBQSxFQUFLO0VBQ25ELE1BQU1DLEtBQUEsR0FBUUQsR0FBQSxHQUFNQSxHQUFBLEdBQU0sSUFBSUUsTUFBQSxDQUFPQyxpQkFBQTtFQUNyQyxJQUFJQyxJQUFBLEdBQU87RUFDWCxPQUFPQyxLQUFBO0VBR1AsU0FBU0EsTUFBTUMsSUFBQSxFQUFNO0lBQ25CLFFBQUlYLCtCQUFBLENBQUFZLGFBQUEsRUFBY0QsSUFBSSxHQUFHO01BQ3ZCVCxPQUFBLENBQVFXLEtBQUEsQ0FBTVQsSUFBSTtNQUNsQixPQUFPVSxNQUFBLENBQU9ILElBQUk7SUFDcEI7SUFDQSxPQUFPUixFQUFBLENBQUdRLElBQUk7RUFDaEI7RUFHQSxTQUFTRyxPQUFPSCxJQUFBLEVBQU07SUFDcEIsUUFBSVgsK0JBQUEsQ0FBQVksYUFBQSxFQUFjRCxJQUFJLEtBQUtGLElBQUEsS0FBU0gsS0FBQSxFQUFPO01BQ3pDSixPQUFBLENBQVFhLE9BQUEsQ0FBUUosSUFBSTtNQUNwQixPQUFPRyxNQUFBO0lBQ1Q7SUFDQVosT0FBQSxDQUFRYyxJQUFBLENBQUtaLElBQUk7SUFDakIsT0FBT0QsRUFBQSxDQUFHUSxJQUFJO0VBQ2hCO0FBQ0YiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==