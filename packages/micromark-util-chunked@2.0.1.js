System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-chunked","2.0.1"]]);
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

// .beyond/uimport/micromark-util-chunked.2.0.1.js
var micromark_util_chunked_2_0_1_exports = {};
__export(micromark_util_chunked_2_0_1_exports, {
  push: () => push,
  splice: () => splice
});
module.exports = __toCommonJS(micromark_util_chunked_2_0_1_exports);

// node_modules/micromark-util-chunked/index.js
function splice(list, start, remove, items) {
  const end = list.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end ? 0 : end + start;
  } else {
    start = start > end ? end : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list.splice(...parameters);
  } else {
    if (remove) list.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list, items) {
  if (list.length > 0) {
    splice(list, list.length, 0, items);
    return list;
  }
  return items;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1jaHVua2VkLjIuMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNodW5rZWQvaW5kZXguanMiXSwibmFtZXMiOlsibWljcm9tYXJrX3V0aWxfY2h1bmtlZF8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJwdXNoIiwic3BsaWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImxpc3QiLCJzdGFydCIsInJlbW92ZSIsIml0ZW1zIiwiZW5kIiwibGVuZ3RoIiwiY2h1bmtTdGFydCIsInBhcmFtZXRlcnMiLCJBcnJheSIsImZyb20iLCJ1bnNoaWZ0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9DQUFBO0FBQUFDLFFBQUEsQ0FBQUQsb0NBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sb0NBQUE7OztBQ3NCTyxTQUFTRyxPQUFPSSxJQUFBLEVBQU1DLEtBQUEsRUFBT0MsTUFBQSxFQUFRQyxLQUFBLEVBQU87RUFDakQsTUFBTUMsR0FBQSxHQUFNSixJQUFBLENBQUtLLE1BQUE7RUFDakIsSUFBSUMsVUFBQSxHQUFhO0VBRWpCLElBQUlDLFVBQUE7RUFHSixJQUFJTixLQUFBLEdBQVEsR0FBRztJQUNiQSxLQUFBLEdBQVEsQ0FBQ0EsS0FBQSxHQUFRRyxHQUFBLEdBQU0sSUFBSUEsR0FBQSxHQUFNSCxLQUFBO0VBQ25DLE9BQU87SUFDTEEsS0FBQSxHQUFRQSxLQUFBLEdBQVFHLEdBQUEsR0FBTUEsR0FBQSxHQUFNSCxLQUFBO0VBQzlCO0VBQ0FDLE1BQUEsR0FBU0EsTUFBQSxHQUFTLElBQUlBLE1BQUEsR0FBUztFQUcvQixJQUFJQyxLQUFBLENBQU1FLE1BQUEsR0FBUyxLQUFPO0lBQ3hCRSxVQUFBLEdBQWFDLEtBQUEsQ0FBTUMsSUFBQSxDQUFLTixLQUFLO0lBQzdCSSxVQUFBLENBQVdHLE9BQUEsQ0FBUVQsS0FBQSxFQUFPQyxNQUFNO0lBRWhDRixJQUFBLENBQUtKLE1BQUEsQ0FBTyxHQUFHVyxVQUFVO0VBQzNCLE9BQU87SUFFTCxJQUFJTCxNQUFBLEVBQVFGLElBQUEsQ0FBS0osTUFBQSxDQUFPSyxLQUFBLEVBQU9DLE1BQU07SUFHckMsT0FBT0ksVUFBQSxHQUFhSCxLQUFBLENBQU1FLE1BQUEsRUFBUTtNQUNoQ0UsVUFBQSxHQUFhSixLQUFBLENBQU1RLEtBQUEsQ0FBTUwsVUFBQSxFQUFZQSxVQUFBLEdBQWEsR0FBSztNQUN2REMsVUFBQSxDQUFXRyxPQUFBLENBQVFULEtBQUEsRUFBTyxDQUFDO01BRTNCRCxJQUFBLENBQUtKLE1BQUEsQ0FBTyxHQUFHVyxVQUFVO01BQ3pCRCxVQUFBLElBQWM7TUFDZEwsS0FBQSxJQUFTO0lBQ1g7RUFDRjtBQUNGO0FBa0JPLFNBQVNOLEtBQUtLLElBQUEsRUFBTUcsS0FBQSxFQUFPO0VBQ2hDLElBQUlILElBQUEsQ0FBS0ssTUFBQSxHQUFTLEdBQUc7SUFDbkJULE1BQUEsQ0FBT0ksSUFBQSxFQUFNQSxJQUFBLENBQUtLLE1BQUEsRUFBUSxHQUFHRixLQUFLO0lBQ2xDLE9BQU9ILElBQUE7RUFDVDtFQUNBLE9BQU9HLEtBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9