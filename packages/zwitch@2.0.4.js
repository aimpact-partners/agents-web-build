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

// .beyond/uimport/zwitch.2.0.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC96d2l0Y2guMi4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvendpdGNoL2luZGV4LmpzIl0sIm5hbWVzIjpbInp3aXRjaF8yXzBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJ6d2l0Y2giLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwib3duIiwiaGFzT3duUHJvcGVydHkiLCJrZXkiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJvbmUiLCJ2YWx1ZSIsInBhcmFtZXRlcnMiLCJmbiIsImludmFsaWQiLCJoYW5kbGVycyIsImNhbGwiLCJpZCIsIlN0cmluZyIsInVua25vd24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0JBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQUwsb0JBQUE7OztBQ2lEQSxJQUFNTSxHQUFBLEdBQU0sQ0FBQyxFQUFFQyxjQUFBO0FBY1IsU0FBU0wsT0FBT00sR0FBQSxFQUFLQyxPQUFBLEVBQVM7RUFDbkMsTUFBTUMsUUFBQSxHQUFXRCxPQUFBLElBQVcsQ0FBQztFQThCN0IsU0FBU0UsSUFBSUMsS0FBQSxLQUFVQyxVQUFBLEVBQVk7SUFFakMsSUFBSUMsRUFBQSxHQUFLSCxHQUFBLENBQUlJLE9BQUE7SUFDYixNQUFNQyxRQUFBLEdBQVdMLEdBQUEsQ0FBSUssUUFBQTtJQUVyQixJQUFJSixLQUFBLElBQVNOLEdBQUEsQ0FBSVcsSUFBQSxDQUFLTCxLQUFBLEVBQU9KLEdBQUcsR0FBRztNQUVqQyxNQUFNVSxFQUFBLEdBQUtDLE1BQUEsQ0FBT1AsS0FBQSxDQUFNSixHQUFBLENBQUk7TUFFNUJNLEVBQUEsR0FBS1IsR0FBQSxDQUFJVyxJQUFBLENBQUtELFFBQUEsRUFBVUUsRUFBRSxJQUFJRixRQUFBLENBQVNFLEVBQUEsSUFBTVAsR0FBQSxDQUFJUyxPQUFBO0lBQ25EO0lBRUEsSUFBSU4sRUFBQSxFQUFJO01BQ04sT0FBT0EsRUFBQSxDQUFHRyxJQUFBLENBQUssTUFBTUwsS0FBQSxFQUFPLEdBQUdDLFVBQVU7SUFDM0M7RUFDRjtFQUVBRixHQUFBLENBQUlLLFFBQUEsR0FBV04sUUFBQSxDQUFTTSxRQUFBLElBQVksQ0FBQztFQUNyQ0wsR0FBQSxDQUFJSSxPQUFBLEdBQVVMLFFBQUEsQ0FBU0ssT0FBQTtFQUN2QkosR0FBQSxDQUFJUyxPQUFBLEdBQVVWLFFBQUEsQ0FBU1UsT0FBQTtFQUd2QixPQUFPVCxHQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==