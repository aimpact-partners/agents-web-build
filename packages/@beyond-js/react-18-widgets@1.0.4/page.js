System.register(["@beyond-js/kernel@0.1.12/bundle","react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","react-dom@18.3.1/client","@beyond-js/kernel@0.1.12/core","@beyond-js/widgets@0.1.6/render","@beyond-js/kernel@0.1.12/styles","@beyond-js/widgets@0.1.6/controller","@beyond-js/react-18-widgets@1.0.4/base","@beyond-js/kernel@0.1.12/routing","@beyond-js/widgets@0.1.6/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@beyond-js/widgets","0.1.6"],["@beyond-js/react-18-widgets","1.0.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('react-dom@18.3.1/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.6/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/styles', dep), dep => dependencies.set('@beyond-js/widgets@0.1.6/controller', dep), dep => dependencies.set('@beyond-js/react-18-widgets@1.0.4/base', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/routing', dep), dep => dependencies.set('@beyond-js/widgets@0.1.6/routing', dep)],
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

// .beyond/uimport/temp/@beyond-js/react-18-widgets/page.1.0.4.js
var page_1_0_4_exports = {};
__export(page_1_0_4_exports, {
  PageReactWidgetController: () => PageReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(page_1_0_4_exports);

// node_modules/@beyond-js/react-18-widgets/page/page.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/react-18-widgets@1.0.4/base"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.6/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.0.4/page"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/react-18-widgets/base", dependency_1], ["@beyond-js/widgets/routing", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./page", {
  hash: 3741393941,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageReactWidgetController = void 0;
    var _base = require2("@beyond-js/react-18-widgets/base");
    var _routing = require2("@beyond-js/widgets/routing");
    class PageReactWidgetController2 extends _base.ReactWidgetController {
      #uri;
      get uri() {
        return this.#uri;
      }
      mount() {
        return super.mount({
          uri: this.#uri
        });
      }
      async initialise() {
        this.#uri = new _routing.PageURI({
          widget: this.widget
        });
        await super.initialise();
      }
    }
    exports.PageReactWidgetController = PageReactWidgetController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./page",
  "from": "PageReactWidgetController",
  "name": "PageReactWidgetController"
}];
var PageReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "PageReactWidgetController") && (PageReactWidgetController = require2 ? require2("./page").PageReactWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9wYWdlLjEuMC40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9wYWdlL19fc291cmNlcy9wYWdlL3BhZ2UudHMiXSwibmFtZXMiOlsicGFnZV8xXzBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9iYXNlIiwicmVxdWlyZTIiLCJfcm91dGluZyIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwidXJpIiwibW91bnQiLCJpbml0aWFsaXNlIiwiUGFnZVVSSSIsIndpZGdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLGtCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUEsSUFBQVEsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsUUFBQSxHQUFBRCxRQUFBO0lBRWlCLE1BQ0ZFLDBCQUFBLFNBQWtDSCxLQUFBLENBQUFJLHFCQUFBLENBQXFCO01BQ3JFLENBQUFDLEdBQUE7TUFDQSxJQUFJQSxJQUFBLEVBQUc7UUFDTixPQUFPLEtBQUssQ0FBQUEsR0FBQTtNQUNiO01BRUFDLE1BQUEsRUFBSztRQUNKLE9BQU8sTUFBTUEsS0FBQSxDQUFNO1VBQUVELEdBQUEsRUFBSyxLQUFLLENBQUFBO1FBQUksQ0FBRTtNQUN0QztNQUVBLE1BQU1FLFdBQUEsRUFBVTtRQUNmLEtBQUssQ0FBQUYsR0FBQSxHQUFPLElBQUlILFFBQUEsQ0FBQU0sT0FBQSxDQUFRO1VBQUVDLE1BQUEsRUFBYSxLQUFLQTtRQUFNLENBQUU7UUFDcEQsTUFBTSxNQUFNRixVQUFBLENBQVU7TUFDdkI7O0lBQ0FULE9BQUEsQ0FBQUoseUJBQUEsR0FBQVMsMEJBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==