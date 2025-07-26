System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["is-plain-object","5.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/temp/is-plain-object.5.0.0.js
var is_plain_object_5_0_0_exports = {};
__export(is_plain_object_5_0_0_exports, {
  isPlainObject: () => isPlainObject
});
module.exports = __toCommonJS(is_plain_object_5_0_0_exports);

// node_modules/is-plain-object/dist/is-plain-object.mjs
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false) return false;
  ctor = o.constructor;
  if (ctor === void 0) return true;
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2lzLXBsYWluLW9iamVjdC41LjAuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9pcy1wbGFpbi1vYmplY3QvZGlzdC9pcy1wbGFpbi1vYmplY3QubWpzIl0sIm5hbWVzIjpbImlzX3BsYWluX29iamVjdF81XzBfMF9leHBvcnRzIiwiX19leHBvcnQiLCJpc1BsYWluT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImlzT2JqZWN0IiwibyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImN0b3IiLCJwcm90IiwiY29uc3RydWN0b3IiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNkJBQUE7QUFBQUMsUUFBQSxDQUFBRCw2QkFBQTtFQUFBRSxhQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCw2QkFBQTs7O0FDT0EsU0FBU00sU0FBU0MsQ0FBQSxFQUFHO0VBQ25CLE9BQU9DLE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxRQUFBLENBQVNDLElBQUEsQ0FBS0osQ0FBQyxNQUFNO0FBQy9DO0FBRUEsU0FBU0wsY0FBY0ssQ0FBQSxFQUFHO0VBQ3hCLElBQUlLLElBQUEsRUFBS0MsSUFBQTtFQUVULElBQUlQLFFBQUEsQ0FBU0MsQ0FBQyxNQUFNLE9BQU8sT0FBTztFQUdsQ0ssSUFBQSxHQUFPTCxDQUFBLENBQUVPLFdBQUE7RUFDVCxJQUFJRixJQUFBLEtBQVMsUUFBVyxPQUFPO0VBRy9CQyxJQUFBLEdBQU9ELElBQUEsQ0FBS0gsU0FBQTtFQUNaLElBQUlILFFBQUEsQ0FBU08sSUFBSSxNQUFNLE9BQU8sT0FBTztFQUdyQyxJQUFJQSxJQUFBLENBQUtFLGNBQUEsQ0FBZSxlQUFlLE1BQU0sT0FBTztJQUNsRCxPQUFPO0VBQ1Q7RUFHQSxPQUFPO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==