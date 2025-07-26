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

// .beyond/uimport/temp/micromark-util-sanitize-uri.2.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21pY3JvbWFyay11dGlsLXNhbml0aXplLXVyaS4yLjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1lbmNvZGUvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pY3JvbWFya191dGlsX3Nhbml0aXplX3VyaV8yXzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJub3JtYWxpemVVcmkiLCJzYW5pdGl6ZVVyaSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJjaGFyYWN0ZXJSZWZlcmVuY2VzIiwiZW5jb2RlIiwidmFsdWUiLCJyZXBsYWNlIiwidmFsdWUyIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlciIsInJlcXVpcmUiLCJ1cmwiLCJwcm90b2NvbCIsImNvbG9uIiwiaW5kZXhPZiIsInF1ZXN0aW9uTWFyayIsIm51bWJlclNpZ24iLCJzbGFzaCIsInRlc3QiLCJzbGljZSIsInJlc3VsdCIsImluZGV4Iiwic3RhcnQiLCJza2lwIiwibGVuZ3RoIiwiY29kZSIsImNoYXJDb2RlQXQiLCJhc2NpaUFscGhhbnVtZXJpYyIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm5leHQiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUNBQUE7QUFBQUMsUUFBQSxDQUFBRCx5Q0FBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTix5Q0FBQTs7O0FDQUEsSUFBTU8sbUJBQUEsR0FBc0I7RUFBQyxLQUFLO0VBQVEsS0FBSztFQUFPLEtBQUs7RUFBTSxLQUFLO0FBQUk7QUFjbkUsU0FBU0MsT0FBT0MsS0FBQSxFQUFPO0VBQzVCLE9BQU9BLEtBQUEsQ0FBTUMsT0FBQSxDQUFRLFdBQVdBLE9BQU87RUFRdkMsU0FBU0EsUUFBUUMsTUFBQSxFQUFPO0lBQ3RCLE9BQ0UsTUFDQUosbUJBQUEsQ0FDbURJLE1BQUEsSUFFbkQ7RUFFSjtBQUNGOzs7QUNoQ0EsSUFBQUMsK0JBQUEsR0FBa0NDLE9BQUE7QUF3QjNCLFNBQVNWLFlBQVlXLEdBQUEsRUFBS0MsUUFBQSxFQUFVO0VBQ3pDLE1BQU1OLEtBQUEsR0FBUUQsTUFBQSxDQUFPTixZQUFBLENBQWFZLEdBQUEsSUFBTyxFQUFFLENBQUM7RUFDNUMsSUFBSSxDQUFDQyxRQUFBLEVBQVU7SUFDYixPQUFPTixLQUFBO0VBQ1Q7RUFDQSxNQUFNTyxLQUFBLEdBQVFQLEtBQUEsQ0FBTVEsT0FBQSxDQUFRLEdBQUc7RUFDL0IsTUFBTUMsWUFBQSxHQUFlVCxLQUFBLENBQU1RLE9BQUEsQ0FBUSxHQUFHO0VBQ3RDLE1BQU1FLFVBQUEsR0FBYVYsS0FBQSxDQUFNUSxPQUFBLENBQVEsR0FBRztFQUNwQyxNQUFNRyxLQUFBLEdBQVFYLEtBQUEsQ0FBTVEsT0FBQSxDQUFRLEdBQUc7RUFDL0IsSUFFQUQsS0FBQSxHQUFRLEtBRVJJLEtBQUEsR0FBUSxNQUFNSixLQUFBLEdBQVFJLEtBQUEsSUFBU0YsWUFBQSxHQUFlLE1BQU1GLEtBQUEsR0FBUUUsWUFBQSxJQUFnQkMsVUFBQSxHQUFhLE1BQU1ILEtBQUEsR0FBUUcsVUFBQSxJQUV2R0osUUFBQSxDQUFTTSxJQUFBLENBQUtaLEtBQUEsQ0FBTWEsS0FBQSxDQUFNLEdBQUdOLEtBQUssQ0FBQyxHQUFHO0lBQ3BDLE9BQU9QLEtBQUE7RUFDVDtFQUNBLE9BQU87QUFDVDtBQWFPLFNBQVNQLGFBQWFPLEtBQUEsRUFBTztFQUVsQyxNQUFNYyxNQUFBLEdBQVMsRUFBQztFQUNoQixJQUFJQyxLQUFBLEdBQVE7RUFDWixJQUFJQyxLQUFBLEdBQVE7RUFDWixJQUFJQyxJQUFBLEdBQU87RUFDWCxPQUFPLEVBQUVGLEtBQUEsR0FBUWYsS0FBQSxDQUFNa0IsTUFBQSxFQUFRO0lBQzdCLE1BQU1DLElBQUEsR0FBT25CLEtBQUEsQ0FBTW9CLFVBQUEsQ0FBV0wsS0FBSztJQUVuQyxJQUFJZCxPQUFBLEdBQVU7SUFHZCxJQUFJa0IsSUFBQSxLQUFTLFVBQU1oQiwrQkFBQSxDQUFBa0IsaUJBQUEsRUFBa0JyQixLQUFBLENBQU1vQixVQUFBLENBQVdMLEtBQUEsR0FBUSxDQUFDLENBQUMsU0FBS1osK0JBQUEsQ0FBQWtCLGlCQUFBLEVBQWtCckIsS0FBQSxDQUFNb0IsVUFBQSxDQUFXTCxLQUFBLEdBQVEsQ0FBQyxDQUFDLEdBQUc7TUFDbkhFLElBQUEsR0FBTztJQUNULFdBRVNFLElBQUEsR0FBTyxLQUFLO01BQ25CLElBQUksQ0FBQyxvQkFBb0JQLElBQUEsQ0FBS1UsTUFBQSxDQUFPQyxZQUFBLENBQWFKLElBQUksQ0FBQyxHQUFHO1FBQ3hEbEIsT0FBQSxHQUFVcUIsTUFBQSxDQUFPQyxZQUFBLENBQWFKLElBQUk7TUFDcEM7SUFDRixXQUVTQSxJQUFBLEdBQU8sU0FBVUEsSUFBQSxHQUFPLE9BQVE7TUFDdkMsTUFBTUssSUFBQSxHQUFPeEIsS0FBQSxDQUFNb0IsVUFBQSxDQUFXTCxLQUFBLEdBQVEsQ0FBQztNQUd2QyxJQUFJSSxJQUFBLEdBQU8sU0FBVUssSUFBQSxHQUFPLFNBQVVBLElBQUEsR0FBTyxPQUFRO1FBQ25EdkIsT0FBQSxHQUFVcUIsTUFBQSxDQUFPQyxZQUFBLENBQWFKLElBQUEsRUFBTUssSUFBSTtRQUN4Q1AsSUFBQSxHQUFPO01BQ1QsT0FFSztRQUNIaEIsT0FBQSxHQUFVO01BQ1o7SUFDRixPQUVLO01BQ0hBLE9BQUEsR0FBVXFCLE1BQUEsQ0FBT0MsWUFBQSxDQUFhSixJQUFJO0lBQ3BDO0lBQ0EsSUFBSWxCLE9BQUEsRUFBUztNQUNYYSxNQUFBLENBQU9XLElBQUEsQ0FBS3pCLEtBQUEsQ0FBTWEsS0FBQSxDQUFNRyxLQUFBLEVBQU9ELEtBQUssR0FBR1csa0JBQUEsQ0FBbUJ6QixPQUFPLENBQUM7TUFDbEVlLEtBQUEsR0FBUUQsS0FBQSxHQUFRRSxJQUFBLEdBQU87TUFDdkJoQixPQUFBLEdBQVU7SUFDWjtJQUNBLElBQUlnQixJQUFBLEVBQU07TUFDUkYsS0FBQSxJQUFTRSxJQUFBO01BQ1RBLElBQUEsR0FBTztJQUNUO0VBQ0Y7RUFDQSxPQUFPSCxNQUFBLENBQU9hLElBQUEsQ0FBSyxFQUFFLElBQUkzQixLQUFBLENBQU1hLEtBQUEsQ0FBTUcsS0FBSztBQUM1QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9