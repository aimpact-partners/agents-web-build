System.register(["@beyond-js/kernel@0.1.12/bundle","react@18.3.1","@beyond-js/kernel@0.1.12/core","@beyond-js/kernel@0.1.12/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["react","18.3.1"],["@beyond-js/react-18-widgets","1.0.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/texts', dep)],
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

// .beyond/uimport/temp/@beyond-js/react-18-widgets/hooks.1.0.4.js
var hooks_1_0_4_exports = {};
__export(hooks_1_0_4_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_0_4_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("react@18.3.1"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.12/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.0.4/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 2896174166,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var _react = require2("react");
    function useBinder2(objects, onBinder, events = "change") {
      const bindEvents = typeof events === "string" ? [events] : events;
      _react.default.useEffect(() => {
        objects.forEach(object => {
          if (!object?.on) return;
          bindEvents.forEach(event => object.on(event, onBinder));
        });
        return () => objects.forEach(object => {
          if (!object?.off) return;
          bindEvents.forEach(event => object.off(event, onBinder));
        });
      }, []);
    }
  }
});
ims.set("./use-texts", {
  hash: 2200528805,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useTexts = useTexts2;
    var React = require2("react");
    var _texts = require2("@beyond-js/kernel/texts");
    function useTexts2(specifier, key) {
      const [ready, setReady] = React.useState(false);
      const [texts, setTexts] = React.useState({});
      React.useEffect(() => {
        const modelTexts = new _texts.CurrentTexts(specifier);
        const triggerEvent = () => {
          let value = modelTexts.value;
          if (modelTexts.ready && key) {
            if (!value.hasOwnProperty(key)) {
              console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
            }
            value = modelTexts.value[key];
          }
          setTexts(value);
          setReady(modelTexts.ready);
        };
        modelTexts.on("change", triggerEvent);
        triggerEvent();
        return () => {
          modelTexts.on("change", triggerEvent);
        };
      }, []);
      const isReady = ready && !!texts;
      return [isReady, texts];
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "useBinder",
  "name": "useBinder"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./index").useBinder : value);
  (require2 || prop === "useTexts") && (useTexts = require2 ? require2("./use-texts").useTexts : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9ob29rcy4xLjAuNC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9ob29rcy9fX3NvdXJjZXMvaG9va3MvdXNlLXRleHRzLnRzIl0sIm5hbWVzIjpbImhvb2tzXzFfMF80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInVzZUJpbmRlciIsInVzZVRleHRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9yZWFjdCIsInJlcXVpcmUyIiwidXNlQmluZGVyMiIsIm9iamVjdHMiLCJvbkJpbmRlciIsImV2ZW50cyIsImJpbmRFdmVudHMiLCJkZWZhdWx0IiwidXNlRWZmZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsIm9uIiwiZXZlbnQiLCJvZmYiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzMiIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzIiwic2V0VGV4dHMiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwidHJpZ2dlckV2ZW50IiwidmFsdWUiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwiaXNSZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUixtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFTLE1BQUEsR0FBQUMsUUFBQTtJQVFrQixTQUNSQyxXQUFVQyxPQUFBLEVBQWdCQyxRQUFBLEVBQXNCQyxNQUFBLEdBQTRCLFVBQVE7TUFDM0YsTUFBTUMsVUFBQSxHQUF3QixPQUFPRCxNQUFBLEtBQVcsV0FBVyxDQUFDQSxNQUFNLElBQUlBLE1BQUE7TUFDckVMLE1BQUEsQ0FBQU8sT0FBQSxDQUFNQyxTQUFBLENBQVUsTUFBSztRQUNqQkwsT0FBQSxDQUFRTSxPQUFBLENBQVFDLE1BQUEsSUFBUztVQUNyQixJQUFHLENBQUNBLE1BQUEsRUFBUUMsRUFBQSxFQUFJO1VBQ2hCTCxVQUFBLENBQVdHLE9BQUEsQ0FBUUcsS0FBQSxJQUFTRixNQUFBLENBQU9DLEVBQUEsQ0FBR0MsS0FBQSxFQUFPUixRQUFRLENBQUM7UUFDMUQsQ0FBQztRQUVELE9BQU8sTUFBTUQsT0FBQSxDQUFRTSxPQUFBLENBQVFDLE1BQUEsSUFBUztVQUNsQyxJQUFHLENBQUNBLE1BQUEsRUFBUUcsR0FBQSxFQUFLO1VBQ2pCUCxVQUFBLENBQVdHLE9BQUEsQ0FBUUcsS0FBQSxJQUFTRixNQUFBLENBQU9HLEdBQUEsQ0FBSUQsS0FBQSxFQUFPUixRQUFRLENBQUM7UUFDM0QsQ0FBQztNQUNMLEdBQUcsRUFBRTtJQUNUOzs7Ozs7Ozs7Ozs7SUN0QkEsSUFBQVUsS0FBQSxHQUFBYixRQUFBO0lBQ0EsSUFBQWMsTUFBQSxHQUFBZCxRQUFBO0lBRWlCLFNBQ1JlLFVBQVNDLFNBQUEsRUFBbUJDLEdBQUEsRUFBWTtNQUNoRCxNQUFNLENBQUNDLEtBQUEsRUFBT0MsUUFBUSxJQUFJTixLQUFBLENBQU1PLFFBQUEsQ0FBUyxLQUFLO01BQzlDLE1BQU0sQ0FBQ0MsS0FBQSxFQUFPQyxRQUFRLElBQUlULEtBQUEsQ0FBTU8sUUFBQSxDQUFTLEVBQUU7TUFFM0NQLEtBQUEsQ0FBTU4sU0FBQSxDQUFVLE1BQUs7UUFDcEIsTUFBTWdCLFVBQUEsR0FBYSxJQUFJVCxNQUFBLENBQUFVLFlBQUEsQ0FBYVIsU0FBUztRQUM3QyxNQUFNUyxZQUFBLEdBQWVBLENBQUEsS0FBSztVQUN6QixJQUFJQyxLQUFBLEdBQVFILFVBQUEsQ0FBV0csS0FBQTtVQUN2QixJQUFJSCxVQUFBLENBQVdMLEtBQUEsSUFBU0QsR0FBQSxFQUFLO1lBQzVCLElBQUksQ0FBQ1MsS0FBQSxDQUFNQyxjQUFBLENBQWVWLEdBQUcsR0FBRztjQUMvQlcsT0FBQSxDQUFRQyxJQUFBLENBQ1AsMERBQTBEWixHQUFBLHVCQUEwQkQsU0FBQSxFQUFXOztZQUlqR1UsS0FBQSxHQUFRSCxVQUFBLENBQVdHLEtBQUEsQ0FBTVQsR0FBQTs7VUFFMUJLLFFBQUEsQ0FBU0ksS0FBSztVQUNkUCxRQUFBLENBQVNJLFVBQUEsQ0FBV0wsS0FBSztRQUMxQjtRQUNBSyxVQUFBLENBQVdiLEVBQUEsQ0FBRyxVQUFVZSxZQUFZO1FBQ3BDQSxZQUFBLENBQVk7UUFDWixPQUFPLE1BQUs7VUFDWEYsVUFBQSxDQUFXYixFQUFBLENBQUcsVUFBVWUsWUFBWTtRQUNyQztNQUNELEdBQUcsRUFBRTtNQUNMLE1BQU1LLE9BQUEsR0FBVVosS0FBQSxJQUFTLENBQUMsQ0FBQ0csS0FBQTtNQUMzQixPQUFPLENBQUNTLE9BQUEsRUFBU1QsS0FBSztJQUN2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9