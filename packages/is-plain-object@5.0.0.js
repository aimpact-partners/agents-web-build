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

// .beyond/uimport/is-plain-object.5.0.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9pcy1wbGFpbi1vYmplY3QuNS4wLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqZWN0L2Rpc3QvaXMtcGxhaW4tb2JqZWN0Lm1qcyJdLCJuYW1lcyI6WyJpc19wbGFpbl9vYmplY3RfNV8wXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiaXNQbGFpbk9iamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpc09iamVjdCIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJjdG9yIiwicHJvdCIsImNvbnN0cnVjdG9yIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDZCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNkJBQUE7RUFBQUUsYUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsNkJBQUE7OztBQ09BLFNBQVNNLFNBQVNDLENBQUEsRUFBRztFQUNuQixPQUFPQyxNQUFBLENBQU9DLFNBQUEsQ0FBVUMsUUFBQSxDQUFTQyxJQUFBLENBQUtKLENBQUMsTUFBTTtBQUMvQztBQUVBLFNBQVNMLGNBQWNLLENBQUEsRUFBRztFQUN4QixJQUFJSyxJQUFBLEVBQUtDLElBQUE7RUFFVCxJQUFJUCxRQUFBLENBQVNDLENBQUMsTUFBTSxPQUFPLE9BQU87RUFHbENLLElBQUEsR0FBT0wsQ0FBQSxDQUFFTyxXQUFBO0VBQ1QsSUFBSUYsSUFBQSxLQUFTLFFBQVcsT0FBTztFQUcvQkMsSUFBQSxHQUFPRCxJQUFBLENBQUtILFNBQUE7RUFDWixJQUFJSCxRQUFBLENBQVNPLElBQUksTUFBTSxPQUFPLE9BQU87RUFHckMsSUFBSUEsSUFBQSxDQUFLRSxjQUFBLENBQWUsZUFBZSxNQUFNLE9BQU87SUFDbEQsT0FBTztFQUNUO0VBR0EsT0FBTztBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=