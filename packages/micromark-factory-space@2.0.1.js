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

// .beyond/uimport/micromark-factory-space.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstZmFjdG9yeS1zcGFjZS4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1zcGFjZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfZmFjdG9yeV9zcGFjZV8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJmYWN0b3J5U3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlciIsInJlcXVpcmUiLCJlZmZlY3RzIiwib2siLCJ0eXBlIiwibWF4IiwibGltaXQiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsInNpemUiLCJzdGFydCIsImNvZGUiLCJtYXJrZG93blNwYWNlIiwiZW50ZXIiLCJwcmVmaXgiLCJjb25zdW1lIiwiZXhpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUNBQUE7QUFBQUMsUUFBQSxDQUFBRCxxQ0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxxQ0FBQTs7O0FDSUEsSUFBQU0sK0JBQUEsR0FBOEJDLE9BQUE7QUFvQ3ZCLFNBQVNMLGFBQWFNLE9BQUEsRUFBU0MsRUFBQSxFQUFJQyxJQUFBLEVBQU1DLEdBQUEsRUFBSztFQUNuRCxNQUFNQyxLQUFBLEdBQVFELEdBQUEsR0FBTUEsR0FBQSxHQUFNLElBQUlFLE1BQUEsQ0FBT0MsaUJBQUE7RUFDckMsSUFBSUMsSUFBQSxHQUFPO0VBQ1gsT0FBT0MsS0FBQTtFQUdQLFNBQVNBLE1BQU1DLElBQUEsRUFBTTtJQUNuQixRQUFJWCwrQkFBQSxDQUFBWSxhQUFBLEVBQWNELElBQUksR0FBRztNQUN2QlQsT0FBQSxDQUFRVyxLQUFBLENBQU1ULElBQUk7TUFDbEIsT0FBT1UsTUFBQSxDQUFPSCxJQUFJO0lBQ3BCO0lBQ0EsT0FBT1IsRUFBQSxDQUFHUSxJQUFJO0VBQ2hCO0VBR0EsU0FBU0csT0FBT0gsSUFBQSxFQUFNO0lBQ3BCLFFBQUlYLCtCQUFBLENBQUFZLGFBQUEsRUFBY0QsSUFBSSxLQUFLRixJQUFBLEtBQVNILEtBQUEsRUFBTztNQUN6Q0osT0FBQSxDQUFRYSxPQUFBLENBQVFKLElBQUk7TUFDcEIsT0FBT0csTUFBQTtJQUNUO0lBQ0FaLE9BQUEsQ0FBUWMsSUFBQSxDQUFLWixJQUFJO0lBQ2pCLE9BQU9ELEVBQUEsQ0FBR1EsSUFBSTtFQUNoQjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==