System.register(["@beyond-js/kernel@0.1.12/bundle"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["@beyond-js/response","0.0.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep)],
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

// .beyond/uimport/@beyond-js/response/main.0.0.3.js
var main_0_0_3_exports = {};
__export(main_0_0_3_exports, {
  ErrorManager: () => ErrorManager,
  Response: () => Response,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(main_0_0_3_exports);

// node_modules/@beyond-js/response/main/main.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/response@0.0.3/main"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([]);
var ims = /* @__PURE__ */new Map();
ims.set("./error-manager", {
  hash: 2620100195,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ErrorManager = void 0;
    class ErrorManager2 {
      #code;
      get code() {
        return this.#code;
      }
      #text;
      get text() {
        return this.#text;
      }
      constructor(code, text, exc) {
        this.#code = code;
        this.#text = text;
        exc && console.error(exc);
      }
      toJSON() {
        return {
          text: this.text,
          code: this.code
        };
      }
    }
    exports.ErrorManager = ErrorManager2;
  }
});
ims.set("./response", {
  hash: 2282302849,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Response = void 0;
    class Response2 {
      #error;
      get error() {
        return this.#error;
      }
      #data;
      get data() {
        return this.#data;
      }
      get status() {
        return !this.#error;
      }
      constructor(params) {
        const {
          error,
          data
        } = params;
        this.#error = error;
        this.#data = data;
      }
      toJSON() {
        const {
          status,
          error,
          data
        } = this;
        return {
          status,
          error: error ? error?.toJSON() : error,
          data
        };
      }
    }
    exports.Response = Response2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./error-manager",
  "from": "ErrorManager",
  "name": "ErrorManager"
}, {
  "im": "./response",
  "from": "Response",
  "name": "Response"
}];
var ErrorManager, Response;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ErrorManager") && (ErrorManager = require2 ? require2("./error-manager").ErrorManager : value);
  (require2 || prop === "Response") && (Response = require2 ? require2("./response").Response : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3Jlc3BvbnNlL21haW4uMC4wLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZXNwb25zZS9tYWluL19fc291cmNlcy9tYWluL2Vycm9yLW1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZXNwb25zZS9tYWluL19fc291cmNlcy9tYWluL3Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbIm1haW5fMF8wXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRXJyb3JNYW5hZ2VyIiwiUmVzcG9uc2UiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiRXJyb3JNYW5hZ2VyMiIsImNvZGUiLCJ0ZXh0IiwiY29uc3RydWN0b3IiLCJleGMiLCJjb25zb2xlIiwiZXJyb3IiLCJ0b0pTT04iLCJSZXNwb25zZTIiLCJkYXRhIiwic3RhdHVzIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFSLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FpQixNQUFPUyxhQUFBLENBQVk7TUFDbkMsQ0FBQUMsSUFBQTtNQUNBLElBQUlBLEtBQUEsRUFBSTtRQUNQLE9BQU8sS0FBSyxDQUFBQSxJQUFBO01BQ2I7TUFFQSxDQUFBQyxJQUFBO01BQ0EsSUFBSUEsS0FBQSxFQUFJO1FBQ1AsT0FBTyxLQUFLLENBQUFBLElBQUE7TUFDYjtNQUVBQyxZQUFZRixJQUFBLEVBQWNDLElBQUEsRUFBY0UsR0FBQSxFQUFXO1FBQ2xELEtBQUssQ0FBQUgsSUFBQSxHQUFRQSxJQUFBO1FBQ2IsS0FBSyxDQUFBQyxJQUFBLEdBQVFBLElBQUE7UUFFYkUsR0FBQSxJQUFPQyxPQUFBLENBQVFDLEtBQUEsQ0FBTUYsR0FBRztNQUN6QjtNQUVBRyxPQUFBLEVBQU07UUFDTCxPQUFPO1VBQUVMLElBQUEsRUFBTSxLQUFLQSxJQUFBO1VBQU1ELElBQUEsRUFBTSxLQUFLQTtRQUFJO01BQzFDOztJQUNBSCxPQUFBLENBQUFMLFlBQUEsR0FBQU8sYUFBQTs7Ozs7Ozs7Ozs7O0lDbkJnQixNQUFPUSxTQUFBLENBQVE7TUFDL0IsQ0FBQUYsS0FBQTtNQUNBLElBQUlBLE1BQUEsRUFBSztRQUNSLE9BQU8sS0FBSyxDQUFBQSxLQUFBO01BQ2I7TUFFQSxDQUFBRyxJQUFBO01BQ0EsSUFBSUEsS0FBQSxFQUFJO1FBQ1AsT0FBTyxLQUFLLENBQUFBLElBQUE7TUFDYjtNQUVBLElBQUlDLE9BQUEsRUFBTTtRQUNULE9BQU8sQ0FBQyxLQUFLLENBQUFKLEtBQUE7TUFDZDtNQUVBSCxZQUFZUSxNQUFBLEVBQXNDO1FBQ2pELE1BQU07VUFBRUwsS0FBQTtVQUFPRztRQUFJLElBQUtFLE1BQUE7UUFDeEIsS0FBSyxDQUFBTCxLQUFBLEdBQVNBLEtBQUE7UUFDZCxLQUFLLENBQUFHLElBQUEsR0FBUUEsSUFBQTtNQUNkO01BRUFGLE9BQUEsRUFBTTtRQUNMLE1BQU07VUFBRUcsTUFBQTtVQUFRSixLQUFBO1VBQU9HO1FBQUksSUFBSztRQUNoQyxPQUFPO1VBQUVDLE1BQUE7VUFBUUosS0FBQSxFQUFPQSxLQUFBLEdBQVFBLEtBQUEsRUFBT0MsTUFBQSxDQUFNLElBQUtELEtBQUE7VUFBT0c7UUFBSTtNQUM5RDs7SUFDQVgsT0FBQSxDQUFBSixRQUFBLEdBQUFjLFNBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9