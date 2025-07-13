System.register(["micromark-util-character@2.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-character","2.1.1"],["micromark-util-encode","2.0.1"],["micromark-util-sanitize-uri","2.0.1"]]);
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

// .beyond/uimport/micromark-util-sanitize-uri.2.0.1.js
var micromark_util_sanitize_uri_2_0_1_exports = {};
__export(micromark_util_sanitize_uri_2_0_1_exports, {
  normalizeUri: () => normalizeUri,
  sanitizeUri: () => sanitizeUri
});
module.exports = __toCommonJS(micromark_util_sanitize_uri_2_0_1_exports);

// node_modules/micromark-util-encode/index.js
var characterReferences = {
  '"': "quot",
  "&": "amp",
  "<": "lt",
  ">": "gt"
};
function encode(value) {
  return value.replace(/["&<>]/g, replace);
  function replace(value2) {
    return "&" + characterReferences[value2] + ";";
  }
}

// node_modules/micromark-util-sanitize-uri/index.js
var import_micromark_util_character = require("micromark-util-character@2.1.1");
function sanitizeUri(url, protocol) {
  const value = encode(normalizeUri(url || ""));
  if (!protocol) {
    return value;
  }
  const colon = value.indexOf(":");
  const questionMark = value.indexOf("?");
  const numberSign = value.indexOf("#");
  const slash = value.indexOf("/");
  if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) {
    return value;
  }
  return "";
}
function normalizeUri(value) {
  const result = [];
  let index = -1;
  let start = 0;
  let skip = 0;
  while (++index < value.length) {
    const code = value.charCodeAt(index);
    let replace = "";
    if (code === 37 && (0, import_micromark_util_character.asciiAlphanumeric)(value.charCodeAt(index + 1)) && (0, import_micromark_util_character.asciiAlphanumeric)(value.charCodeAt(index + 2))) {
      skip = 2;
    } else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code);
      }
    } else if (code > 55295 && code < 57344) {
      const next = value.charCodeAt(index + 1);
      if (code < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code, next);
        skip = 1;
      } else {
        replace = "\uFFFD";
      }
    } else {
      replace = String.fromCharCode(code);
    }
    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace));
      start = index + skip + 1;
      replace = "";
    }
    if (skip) {
      index += skip;
      skip = 0;
    }
  }
  return result.join("") + value.slice(start);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstdXRpbC1zYW5pdGl6ZS11cmkuMi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZW5jb2RlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXNhbml0aXplLXVyaS9pbmRleC5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfdXRpbF9zYW5pdGl6ZV91cmlfMl8wXzFfZXhwb3J0cyIsIl9fZXhwb3J0Iiwibm9ybWFsaXplVXJpIiwic2FuaXRpemVVcmkiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiY2hhcmFjdGVyUmVmZXJlbmNlcyIsImVuY29kZSIsInZhbHVlIiwicmVwbGFjZSIsInZhbHVlMiIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXIiLCJyZXF1aXJlIiwidXJsIiwicHJvdG9jb2wiLCJjb2xvbiIsImluZGV4T2YiLCJxdWVzdGlvbk1hcmsiLCJudW1iZXJTaWduIiwic2xhc2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXN1bHQiLCJpbmRleCIsInN0YXJ0Iiwic2tpcCIsImxlbmd0aCIsImNvZGUiLCJjaGFyQ29kZUF0IiwiYXNjaWlBbHBoYW51bWVyaWMiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJuZXh0IiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlDQUFBO0FBQUFDLFFBQUEsQ0FBQUQseUNBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4seUNBQUE7OztBQ0FBLElBQU1PLG1CQUFBLEdBQXNCO0VBQUMsS0FBSztFQUFRLEtBQUs7RUFBTyxLQUFLO0VBQU0sS0FBSztBQUFJO0FBY25FLFNBQVNDLE9BQU9DLEtBQUEsRUFBTztFQUM1QixPQUFPQSxLQUFBLENBQU1DLE9BQUEsQ0FBUSxXQUFXQSxPQUFPO0VBUXZDLFNBQVNBLFFBQVFDLE1BQUEsRUFBTztJQUN0QixPQUNFLE1BQ0FKLG1CQUFBLENBQ21ESSxNQUFBLElBRW5EO0VBRUo7QUFDRjs7O0FDaENBLElBQUFDLCtCQUFBLEdBQWtDQyxPQUFBO0FBd0IzQixTQUFTVixZQUFZVyxHQUFBLEVBQUtDLFFBQUEsRUFBVTtFQUN6QyxNQUFNTixLQUFBLEdBQVFELE1BQUEsQ0FBT04sWUFBQSxDQUFhWSxHQUFBLElBQU8sRUFBRSxDQUFDO0VBQzVDLElBQUksQ0FBQ0MsUUFBQSxFQUFVO0lBQ2IsT0FBT04sS0FBQTtFQUNUO0VBQ0EsTUFBTU8sS0FBQSxHQUFRUCxLQUFBLENBQU1RLE9BQUEsQ0FBUSxHQUFHO0VBQy9CLE1BQU1DLFlBQUEsR0FBZVQsS0FBQSxDQUFNUSxPQUFBLENBQVEsR0FBRztFQUN0QyxNQUFNRSxVQUFBLEdBQWFWLEtBQUEsQ0FBTVEsT0FBQSxDQUFRLEdBQUc7RUFDcEMsTUFBTUcsS0FBQSxHQUFRWCxLQUFBLENBQU1RLE9BQUEsQ0FBUSxHQUFHO0VBQy9CLElBRUFELEtBQUEsR0FBUSxLQUVSSSxLQUFBLEdBQVEsTUFBTUosS0FBQSxHQUFRSSxLQUFBLElBQVNGLFlBQUEsR0FBZSxNQUFNRixLQUFBLEdBQVFFLFlBQUEsSUFBZ0JDLFVBQUEsR0FBYSxNQUFNSCxLQUFBLEdBQVFHLFVBQUEsSUFFdkdKLFFBQUEsQ0FBU00sSUFBQSxDQUFLWixLQUFBLENBQU1hLEtBQUEsQ0FBTSxHQUFHTixLQUFLLENBQUMsR0FBRztJQUNwQyxPQUFPUCxLQUFBO0VBQ1Q7RUFDQSxPQUFPO0FBQ1Q7QUFhTyxTQUFTUCxhQUFhTyxLQUFBLEVBQU87RUFFbEMsTUFBTWMsTUFBQSxHQUFTLEVBQUM7RUFDaEIsSUFBSUMsS0FBQSxHQUFRO0VBQ1osSUFBSUMsS0FBQSxHQUFRO0VBQ1osSUFBSUMsSUFBQSxHQUFPO0VBQ1gsT0FBTyxFQUFFRixLQUFBLEdBQVFmLEtBQUEsQ0FBTWtCLE1BQUEsRUFBUTtJQUM3QixNQUFNQyxJQUFBLEdBQU9uQixLQUFBLENBQU1vQixVQUFBLENBQVdMLEtBQUs7SUFFbkMsSUFBSWQsT0FBQSxHQUFVO0lBR2QsSUFBSWtCLElBQUEsS0FBUyxVQUFNaEIsK0JBQUEsQ0FBQWtCLGlCQUFBLEVBQWtCckIsS0FBQSxDQUFNb0IsVUFBQSxDQUFXTCxLQUFBLEdBQVEsQ0FBQyxDQUFDLFNBQUtaLCtCQUFBLENBQUFrQixpQkFBQSxFQUFrQnJCLEtBQUEsQ0FBTW9CLFVBQUEsQ0FBV0wsS0FBQSxHQUFRLENBQUMsQ0FBQyxHQUFHO01BQ25IRSxJQUFBLEdBQU87SUFDVCxXQUVTRSxJQUFBLEdBQU8sS0FBSztNQUNuQixJQUFJLENBQUMsb0JBQW9CUCxJQUFBLENBQUtVLE1BQUEsQ0FBT0MsWUFBQSxDQUFhSixJQUFJLENBQUMsR0FBRztRQUN4RGxCLE9BQUEsR0FBVXFCLE1BQUEsQ0FBT0MsWUFBQSxDQUFhSixJQUFJO01BQ3BDO0lBQ0YsV0FFU0EsSUFBQSxHQUFPLFNBQVVBLElBQUEsR0FBTyxPQUFRO01BQ3ZDLE1BQU1LLElBQUEsR0FBT3hCLEtBQUEsQ0FBTW9CLFVBQUEsQ0FBV0wsS0FBQSxHQUFRLENBQUM7TUFHdkMsSUFBSUksSUFBQSxHQUFPLFNBQVVLLElBQUEsR0FBTyxTQUFVQSxJQUFBLEdBQU8sT0FBUTtRQUNuRHZCLE9BQUEsR0FBVXFCLE1BQUEsQ0FBT0MsWUFBQSxDQUFhSixJQUFBLEVBQU1LLElBQUk7UUFDeENQLElBQUEsR0FBTztNQUNULE9BRUs7UUFDSGhCLE9BQUEsR0FBVTtNQUNaO0lBQ0YsT0FFSztNQUNIQSxPQUFBLEdBQVVxQixNQUFBLENBQU9DLFlBQUEsQ0FBYUosSUFBSTtJQUNwQztJQUNBLElBQUlsQixPQUFBLEVBQVM7TUFDWGEsTUFBQSxDQUFPVyxJQUFBLENBQUt6QixLQUFBLENBQU1hLEtBQUEsQ0FBTUcsS0FBQSxFQUFPRCxLQUFLLEdBQUdXLGtCQUFBLENBQW1CekIsT0FBTyxDQUFDO01BQ2xFZSxLQUFBLEdBQVFELEtBQUEsR0FBUUUsSUFBQSxHQUFPO01BQ3ZCaEIsT0FBQSxHQUFVO0lBQ1o7SUFDQSxJQUFJZ0IsSUFBQSxFQUFNO01BQ1JGLEtBQUEsSUFBU0UsSUFBQTtNQUNUQSxJQUFBLEdBQU87SUFDVDtFQUNGO0VBQ0EsT0FBT0gsTUFBQSxDQUFPYSxJQUFBLENBQUssRUFBRSxJQUFJM0IsS0FBQSxDQUFNYSxLQUFBLENBQU1HLEtBQUs7QUFDNUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9