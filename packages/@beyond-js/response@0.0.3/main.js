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

// .beyond/uimport/temp/@beyond-js/response/main.0.0.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVzcG9uc2UvbWFpbi4wLjAuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3Jlc3BvbnNlL21haW4vX19zb3VyY2VzL21haW4vZXJyb3ItbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3Jlc3BvbnNlL21haW4vX19zb3VyY2VzL21haW4vcmVzcG9uc2UudHMiXSwibmFtZXMiOlsibWFpbl8wXzBfM19leHBvcnRzIiwiX19leHBvcnQiLCJFcnJvck1hbmFnZXIiLCJSZXNwb25zZSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJFcnJvck1hbmFnZXIyIiwiY29kZSIsInRleHQiLCJjb25zdHJ1Y3RvciIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInRvSlNPTiIsIlJlc3BvbnNlMiIsImRhdGEiLCJzdGF0dXMiLCJwYXJhbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsa0JBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQWlCLE1BQU9TLGFBQUEsQ0FBWTtNQUNuQyxDQUFBQyxJQUFBO01BQ0EsSUFBSUEsS0FBQSxFQUFJO1FBQ1AsT0FBTyxLQUFLLENBQUFBLElBQUE7TUFDYjtNQUVBLENBQUFDLElBQUE7TUFDQSxJQUFJQSxLQUFBLEVBQUk7UUFDUCxPQUFPLEtBQUssQ0FBQUEsSUFBQTtNQUNiO01BRUFDLFlBQVlGLElBQUEsRUFBY0MsSUFBQSxFQUFjRSxHQUFBLEVBQVc7UUFDbEQsS0FBSyxDQUFBSCxJQUFBLEdBQVFBLElBQUE7UUFDYixLQUFLLENBQUFDLElBQUEsR0FBUUEsSUFBQTtRQUViRSxHQUFBLElBQU9DLE9BQUEsQ0FBUUMsS0FBQSxDQUFNRixHQUFHO01BQ3pCO01BRUFHLE9BQUEsRUFBTTtRQUNMLE9BQU87VUFBRUwsSUFBQSxFQUFNLEtBQUtBLElBQUE7VUFBTUQsSUFBQSxFQUFNLEtBQUtBO1FBQUk7TUFDMUM7O0lBQ0FILE9BQUEsQ0FBQUwsWUFBQSxHQUFBTyxhQUFBOzs7Ozs7Ozs7Ozs7SUNuQmdCLE1BQU9RLFNBQUEsQ0FBUTtNQUMvQixDQUFBRixLQUFBO01BQ0EsSUFBSUEsTUFBQSxFQUFLO1FBQ1IsT0FBTyxLQUFLLENBQUFBLEtBQUE7TUFDYjtNQUVBLENBQUFHLElBQUE7TUFDQSxJQUFJQSxLQUFBLEVBQUk7UUFDUCxPQUFPLEtBQUssQ0FBQUEsSUFBQTtNQUNiO01BRUEsSUFBSUMsT0FBQSxFQUFNO1FBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQUosS0FBQTtNQUNkO01BRUFILFlBQVlRLE1BQUEsRUFBc0M7UUFDakQsTUFBTTtVQUFFTCxLQUFBO1VBQU9HO1FBQUksSUFBS0UsTUFBQTtRQUN4QixLQUFLLENBQUFMLEtBQUEsR0FBU0EsS0FBQTtRQUNkLEtBQUssQ0FBQUcsSUFBQSxHQUFRQSxJQUFBO01BQ2Q7TUFFQUYsT0FBQSxFQUFNO1FBQ0wsTUFBTTtVQUFFRyxNQUFBO1VBQVFKLEtBQUE7VUFBT0c7UUFBSSxJQUFLO1FBQ2hDLE9BQU87VUFBRUMsTUFBQTtVQUFRSixLQUFBLEVBQU9BLEtBQUEsR0FBUUEsS0FBQSxFQUFPQyxNQUFBLENBQU0sSUFBS0QsS0FBQTtVQUFPRztRQUFJO01BQzlEOztJQUNBWCxPQUFBLENBQUFKLFFBQUEsR0FBQWMsU0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9