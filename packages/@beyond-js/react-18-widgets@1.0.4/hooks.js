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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.0.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4wLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2hvb2tzL19fc291cmNlcy9ob29rcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL3VzZS10ZXh0cy50cyJdLCJuYW1lcyI6WyJob29rc18xXzBfNF9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJ1c2VCaW5kZXIiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVhY3QiLCJyZXF1aXJlMiIsInVzZUJpbmRlcjIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwiZGVmYXVsdCIsInVzZUVmZmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJvbiIsImV2ZW50Iiwib2ZmIiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0czIiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsInRyaWdnZXJFdmVudCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJjb25zb2xlIiwid2FybiIsImlzUmVhZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBO0FBQUFDLFFBQUEsQ0FBQUQsbUJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVIsbUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQSxJQUFBUyxNQUFBLEdBQUFDLFFBQUE7SUFRa0IsU0FDUkMsV0FBVUMsT0FBQSxFQUFnQkMsUUFBQSxFQUFzQkMsTUFBQSxHQUE0QixVQUFRO01BQzNGLE1BQU1DLFVBQUEsR0FBd0IsT0FBT0QsTUFBQSxLQUFXLFdBQVcsQ0FBQ0EsTUFBTSxJQUFJQSxNQUFBO01BQ3JFTCxNQUFBLENBQUFPLE9BQUEsQ0FBTUMsU0FBQSxDQUFVLE1BQUs7UUFDakJMLE9BQUEsQ0FBUU0sT0FBQSxDQUFRQyxNQUFBLElBQVM7VUFDckIsSUFBRyxDQUFDQSxNQUFBLEVBQVFDLEVBQUEsRUFBSTtVQUNoQkwsVUFBQSxDQUFXRyxPQUFBLENBQVFHLEtBQUEsSUFBU0YsTUFBQSxDQUFPQyxFQUFBLENBQUdDLEtBQUEsRUFBT1IsUUFBUSxDQUFDO1FBQzFELENBQUM7UUFFRCxPQUFPLE1BQU1ELE9BQUEsQ0FBUU0sT0FBQSxDQUFRQyxNQUFBLElBQVM7VUFDbEMsSUFBRyxDQUFDQSxNQUFBLEVBQVFHLEdBQUEsRUFBSztVQUNqQlAsVUFBQSxDQUFXRyxPQUFBLENBQVFHLEtBQUEsSUFBU0YsTUFBQSxDQUFPRyxHQUFBLENBQUlELEtBQUEsRUFBT1IsUUFBUSxDQUFDO1FBQzNELENBQUM7TUFDTCxHQUFHLEVBQUU7SUFDVDs7Ozs7Ozs7Ozs7O0lDdEJBLElBQUFVLEtBQUEsR0FBQWIsUUFBQTtJQUNBLElBQUFjLE1BQUEsR0FBQWQsUUFBQTtJQUVpQixTQUNSZSxVQUFTQyxTQUFBLEVBQW1CQyxHQUFBLEVBQVk7TUFDaEQsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLFFBQVEsSUFBSU4sS0FBQSxDQUFNTyxRQUFBLENBQVMsS0FBSztNQUM5QyxNQUFNLENBQUNDLEtBQUEsRUFBT0MsUUFBUSxJQUFJVCxLQUFBLENBQU1PLFFBQUEsQ0FBUyxFQUFFO01BRTNDUCxLQUFBLENBQU1OLFNBQUEsQ0FBVSxNQUFLO1FBQ3BCLE1BQU1nQixVQUFBLEdBQWEsSUFBSVQsTUFBQSxDQUFBVSxZQUFBLENBQWFSLFNBQVM7UUFDN0MsTUFBTVMsWUFBQSxHQUFlQSxDQUFBLEtBQUs7VUFDekIsSUFBSUMsS0FBQSxHQUFRSCxVQUFBLENBQVdHLEtBQUE7VUFDdkIsSUFBSUgsVUFBQSxDQUFXTCxLQUFBLElBQVNELEdBQUEsRUFBSztZQUM1QixJQUFJLENBQUNTLEtBQUEsQ0FBTUMsY0FBQSxDQUFlVixHQUFHLEdBQUc7Y0FDL0JXLE9BQUEsQ0FBUUMsSUFBQSxDQUNQLDBEQUEwRFosR0FBQSx1QkFBMEJELFNBQUEsRUFBVzs7WUFJakdVLEtBQUEsR0FBUUgsVUFBQSxDQUFXRyxLQUFBLENBQU1ULEdBQUE7O1VBRTFCSyxRQUFBLENBQVNJLEtBQUs7VUFDZFAsUUFBQSxDQUFTSSxVQUFBLENBQVdMLEtBQUs7UUFDMUI7UUFDQUssVUFBQSxDQUFXYixFQUFBLENBQUcsVUFBVWUsWUFBWTtRQUNwQ0EsWUFBQSxDQUFZO1FBQ1osT0FBTyxNQUFLO1VBQ1hGLFVBQUEsQ0FBV2IsRUFBQSxDQUFHLFVBQVVlLFlBQVk7UUFDckM7TUFDRCxHQUFHLEVBQUU7TUFDTCxNQUFNSyxPQUFBLEdBQVVaLEtBQUEsSUFBUyxDQUFDLENBQUNHLEtBQUE7TUFDM0IsT0FBTyxDQUFDUyxPQUFBLEVBQVNULEtBQUs7SUFDdkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vc3JjL291dCJ9