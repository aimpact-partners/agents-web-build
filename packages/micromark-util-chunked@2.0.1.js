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

// .beyond/uimport/temp/micromark-util-chunked.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay11dGlsLWNodW5rZWQuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2h1bmtlZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfdXRpbF9jaHVua2VkXzJfMF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsInB1c2giLCJzcGxpY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwibGlzdCIsInN0YXJ0IiwicmVtb3ZlIiwiaXRlbXMiLCJlbmQiLCJsZW5ndGgiLCJjaHVua1N0YXJ0IiwicGFyYW1ldGVycyIsIkFycmF5IiwiZnJvbSIsInVuc2hpZnQiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQ0FBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixvQ0FBQTs7O0FDc0JPLFNBQVNHLE9BQU9JLElBQUEsRUFBTUMsS0FBQSxFQUFPQyxNQUFBLEVBQVFDLEtBQUEsRUFBTztFQUNqRCxNQUFNQyxHQUFBLEdBQU1KLElBQUEsQ0FBS0ssTUFBQTtFQUNqQixJQUFJQyxVQUFBLEdBQWE7RUFFakIsSUFBSUMsVUFBQTtFQUdKLElBQUlOLEtBQUEsR0FBUSxHQUFHO0lBQ2JBLEtBQUEsR0FBUSxDQUFDQSxLQUFBLEdBQVFHLEdBQUEsR0FBTSxJQUFJQSxHQUFBLEdBQU1ILEtBQUE7RUFDbkMsT0FBTztJQUNMQSxLQUFBLEdBQVFBLEtBQUEsR0FBUUcsR0FBQSxHQUFNQSxHQUFBLEdBQU1ILEtBQUE7RUFDOUI7RUFDQUMsTUFBQSxHQUFTQSxNQUFBLEdBQVMsSUFBSUEsTUFBQSxHQUFTO0VBRy9CLElBQUlDLEtBQUEsQ0FBTUUsTUFBQSxHQUFTLEtBQU87SUFDeEJFLFVBQUEsR0FBYUMsS0FBQSxDQUFNQyxJQUFBLENBQUtOLEtBQUs7SUFDN0JJLFVBQUEsQ0FBV0csT0FBQSxDQUFRVCxLQUFBLEVBQU9DLE1BQU07SUFFaENGLElBQUEsQ0FBS0osTUFBQSxDQUFPLEdBQUdXLFVBQVU7RUFDM0IsT0FBTztJQUVMLElBQUlMLE1BQUEsRUFBUUYsSUFBQSxDQUFLSixNQUFBLENBQU9LLEtBQUEsRUFBT0MsTUFBTTtJQUdyQyxPQUFPSSxVQUFBLEdBQWFILEtBQUEsQ0FBTUUsTUFBQSxFQUFRO01BQ2hDRSxVQUFBLEdBQWFKLEtBQUEsQ0FBTVEsS0FBQSxDQUFNTCxVQUFBLEVBQVlBLFVBQUEsR0FBYSxHQUFLO01BQ3ZEQyxVQUFBLENBQVdHLE9BQUEsQ0FBUVQsS0FBQSxFQUFPLENBQUM7TUFFM0JELElBQUEsQ0FBS0osTUFBQSxDQUFPLEdBQUdXLFVBQVU7TUFDekJELFVBQUEsSUFBYztNQUNkTCxLQUFBLElBQVM7SUFDWDtFQUNGO0FBQ0Y7QUFrQk8sU0FBU04sS0FBS0ssSUFBQSxFQUFNRyxLQUFBLEVBQU87RUFDaEMsSUFBSUgsSUFBQSxDQUFLSyxNQUFBLEdBQVMsR0FBRztJQUNuQlQsTUFBQSxDQUFPSSxJQUFBLEVBQU1BLElBQUEsQ0FBS0ssTUFBQSxFQUFRLEdBQUdGLEtBQUs7SUFDbEMsT0FBT0gsSUFBQTtFQUNUO0VBQ0EsT0FBT0csS0FBQTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=