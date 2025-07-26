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

// .beyond/uimport/temp/react-style-singleton.2.2.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi4yLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1zdHlsZS1zaW5nbGV0b24vZGlzdC9lczIwMTUvc2luZ2xldG9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9ob29rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9jb21wb25lbnQuanMiXSwibmFtZXMiOlsicmVhY3Rfc3R5bGVfc2luZ2xldG9uXzJfMl8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsInN0eWxlSG9va1NpbmdsZXRvbiIsInN0eWxlU2luZ2xldG9uIiwic3R5bGVzaGVldFNpbmdsZXRvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZ2V0X25vbmNlIiwicmVxdWlyZSIsIm1ha2VTdHlsZVRhZyIsImRvY3VtZW50IiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJub25jZSIsImdldE5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5qZWN0U3R5bGVzIiwiY3NzIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0U3R5bGVUYWciLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb3VudGVyIiwic3R5bGVzaGVldCIsImFkZCIsInN0eWxlIiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiUmVhY3QiLCJfX3RvRVNNIiwic2hlZXQiLCJzdHlsZXMiLCJpc0R5bmFtaWMiLCJ1c2VFZmZlY3QiLCJ1c2VTdHlsZSIsIlNoZWV0IiwiX2EiLCJkeW5hbWljIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFB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