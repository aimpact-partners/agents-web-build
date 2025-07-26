System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zwitch","2.0.4"]]);
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

// .beyond/uimport/temp/zwitch.2.0.4.js
var zwitch_2_0_4_exports = {};
__export(zwitch_2_0_4_exports, {
  zwitch: () => zwitch
});
module.exports = __toCommonJS(zwitch_2_0_4_exports);

// node_modules/zwitch/index.js
var own = {}.hasOwnProperty;
function zwitch(key, options) {
  const settings = options || {};
  function one(value, ...parameters) {
    let fn = one.invalid;
    const handlers = one.handlers;
    if (value && own.call(value, key)) {
      const id = String(value[key]);
      fn = own.call(handlers, id) ? handlers[id] : one.unknown;
    }
    if (fn) {
      return fn.call(this, value, ...parameters);
    }
  }
  one.handlers = settings.handlers || {};
  one.invalid = settings.invalid;
  one.unknown = settings.unknown;
  return one;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3p3aXRjaC4yLjAuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy96d2l0Y2gvaW5kZXguanMiXSwibmFtZXMiOlsiendpdGNoXzJfMF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsInp3aXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJvd24iLCJoYXNPd25Qcm9wZXJ0eSIsImtleSIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsIm9uZSIsInZhbHVlIiwicGFyYW1ldGVycyIsImZuIiwiaW52YWxpZCIsImhhbmRsZXJzIiwiY2FsbCIsImlkIiwiU3RyaW5nIiwidW5rbm93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxNQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTCxvQkFBQTs7O0FDaURBLElBQU1NLEdBQUEsR0FBTSxDQUFDLEVBQUVDLGNBQUE7QUFjUixTQUFTTCxPQUFPTSxHQUFBLEVBQUtDLE9BQUEsRUFBUztFQUNuQyxNQUFNQyxRQUFBLEdBQVdELE9BQUEsSUFBVyxDQUFDO0VBOEI3QixTQUFTRSxJQUFJQyxLQUFBLEtBQVVDLFVBQUEsRUFBWTtJQUVqQyxJQUFJQyxFQUFBLEdBQUtILEdBQUEsQ0FBSUksT0FBQTtJQUNiLE1BQU1DLFFBQUEsR0FBV0wsR0FBQSxDQUFJSyxRQUFBO0lBRXJCLElBQUlKLEtBQUEsSUFBU04sR0FBQSxDQUFJVyxJQUFBLENBQUtMLEtBQUEsRUFBT0osR0FBRyxHQUFHO01BRWpDLE1BQU1VLEVBQUEsR0FBS0MsTUFBQSxDQUFPUCxLQUFBLENBQU1KLEdBQUEsQ0FBSTtNQUU1Qk0sRUFBQSxHQUFLUixHQUFBLENBQUlXLElBQUEsQ0FBS0QsUUFBQSxFQUFVRSxFQUFFLElBQUlGLFFBQUEsQ0FBU0UsRUFBQSxJQUFNUCxHQUFBLENBQUlTLE9BQUE7SUFDbkQ7SUFFQSxJQUFJTixFQUFBLEVBQUk7TUFDTixPQUFPQSxFQUFBLENBQUdHLElBQUEsQ0FBSyxNQUFNTCxLQUFBLEVBQU8sR0FBR0MsVUFBVTtJQUMzQztFQUNGO0VBRUFGLEdBQUEsQ0FBSUssUUFBQSxHQUFXTixRQUFBLENBQVNNLFFBQUEsSUFBWSxDQUFDO0VBQ3JDTCxHQUFBLENBQUlJLE9BQUEsR0FBVUwsUUFBQSxDQUFTSyxPQUFBO0VBQ3ZCSixHQUFBLENBQUlTLE9BQUEsR0FBVVYsUUFBQSxDQUFTVSxPQUFBO0VBR3ZCLE9BQU9ULEdBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9