System.register(["react@18.3.1","get-nonce@1.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["get-nonce","1.0.1"],["react-style-singleton","2.2.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('get-nonce@1.0.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/react-style-singleton.2.2.3.js
var react_style_singleton_2_2_3_exports = {};
__export(react_style_singleton_2_2_3_exports, {
  styleHookSingleton: () => styleHookSingleton,
  styleSingleton: () => styleSingleton,
  stylesheetSingleton: () => stylesheetSingleton
});
module.exports = __toCommonJS(react_style_singleton_2_2_3_exports);

// node_modules/react-style-singleton/dist/es2015/singleton.js
var import_get_nonce = require("get-nonce@1.0.1");
function makeStyleTag() {
  if (!document) return null;
  var tag = document.createElement("style");
  tag.type = "text/css";
  var nonce = (0, import_get_nonce.getNonce)();
  if (nonce) {
    tag.setAttribute("nonce", nonce);
  }
  return tag;
}
function injectStyles(tag, css) {
  if (tag.styleSheet) {
    tag.styleSheet.cssText = css;
  } else {
    tag.appendChild(document.createTextNode(css));
  }
}
function insertStyleTag(tag) {
  var head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(tag);
}
var stylesheetSingleton = function () {
  var counter = 0;
  var stylesheet = null;
  return {
    add: function (style) {
      if (counter == 0) {
        if (stylesheet = makeStyleTag()) {
          injectStyles(stylesheet, style);
          insertStyleTag(stylesheet);
        }
      }
      counter++;
    },
    remove: function () {
      counter--;
      if (!counter && stylesheet) {
        stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
        stylesheet = null;
      }
    }
  };
};

// node_modules/react-style-singleton/dist/es2015/hook.js
var React = __toESM(require("react@18.3.1"));
var styleHookSingleton = function () {
  var sheet = stylesheetSingleton();
  return function (styles, isDynamic) {
    React.useEffect(function () {
      sheet.add(styles);
      return function () {
        sheet.remove();
      };
    }, [styles && isDynamic]);
  };
};

// node_modules/react-style-singleton/dist/es2015/component.js
var styleSingleton = function () {
  var useStyle = styleHookSingleton();
  var Sheet = function (_a) {
    var styles = _a.styles,
      dynamic = _a.dynamic;
    useStyle(styles, dynamic);
    return null;
  };
  return Sheet;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9yZWFjdC1zdHlsZS1zaW5nbGV0b24uMi4yLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L3NpbmdsZXRvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczIwMTUvaG9vay5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczIwMTUvY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbInJlYWN0X3N0eWxlX3NpbmdsZXRvbl8yXzJfM19leHBvcnRzIiwiX19leHBvcnQiLCJzdHlsZUhvb2tTaW5nbGV0b24iLCJzdHlsZVNpbmdsZXRvbiIsInN0eWxlc2hlZXRTaW5nbGV0b24iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X2dldF9ub25jZSIsInJlcXVpcmUiLCJtYWtlU3R5bGVUYWciLCJkb2N1bWVudCIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwibm9uY2UiLCJnZXROb25jZSIsInNldEF0dHJpYnV0ZSIsImluamVjdFN0eWxlcyIsImNzcyIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydFN0eWxlVGFnIiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY291bnRlciIsInN0eWxlc2hlZXQiLCJhZGQiLCJzdHlsZSIsInJlbW92ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIlJlYWN0IiwiX190b0VTTSIsInNoZWV0Iiwic3R5bGVzIiwiaXNEeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3R5bGUiLCJTaGVldCIsIl9hIiwiZHluYW1pYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUNB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