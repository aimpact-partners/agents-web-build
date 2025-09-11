System.register(["@beyond-js/kernel@0.1.14/bundle","react@18.3.1","@beyond-js/kernel@0.1.14/core","@beyond-js/kernel@0.1.14/texts"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.14"],["react","18.3.1"],["@beyond-js/react-18-widgets","1.1.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.14/bundle', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/core', dep), dep => dependencies.set('@beyond-js/kernel@0.1.14/texts', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/hooks.1.1.6.js
var hooks_1_1_6_exports = {};
__export(hooks_1_1_6_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  useBinder: () => useBinder,
  useStore: () => useStore,
  useTexts: () => useTexts
});
module.exports = __toCommonJS(hooks_1_1_6_exports);

// node_modules/@beyond-js/react-18-widgets/hooks/hooks.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.14/bundle"), 0);
var dependency_1 = __toESM(require("react@18.3.1"), 0);
var dependency_2 = __toESM(require("@beyond-js/kernel@0.1.14/texts"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.5/hooks"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["react", dependency_1], ["@beyond-js/kernel/texts", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./index", {
  hash: 3517680304,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useBinder = useBinder2;
    var React = require2("react");
    function useBinder2(objects, onBinder, events = "change") {
      const bindEvents = typeof events === "string" ? [events] : events;
      React.useEffect(() => {
        const callback = (object, method) => {
          if (!object[method]) return;
          bindEvents.forEach(event => {
            object[method](event, onBinder);
          });
        };
        objects.forEach(object => callback(object, "on"));
        return () => objects.forEach(object => callback(object, "off"));
      }, []);
    }
  }
});
ims.set("./types", {
  hash: 1313278057,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});
ims.set("./use-store", {
  hash: 3728724269,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useStore = useStore2;
    var _react = require2("react");
    function useStore2(store, events = ["change"]) {
      if (!Array.isArray(events)) {
        throw new Error("The events parameter must be an array of strings");
      }
      const [, setVersion] = (0, _react.useState)(0);
      (0, _react.useEffect)(() => {
        const handler = () => setVersion(v => v + 1);
        events.forEach(event => store.on(event, handler));
        return () => {
          events.forEach(event => store.off(event, handler));
        };
      }, [store, events]);
      return store;
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
  "im": "./use-store",
  "from": "useStore",
  "name": "useStore"
}, {
  "im": "./use-texts",
  "from": "useTexts",
  "name": "useTexts"
}];
var useBinder, useStore, useTexts;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "useBinder") && (useBinder = require2 ? require2("./index").useBinder : value);
  (require2 || prop === "useStore") && (useStore = require2 ? require2("./use-store").useStore : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MuMS4xLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2hvb2tzL19fc291cmNlcy9ob29rcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvaG9va3MvX19zb3VyY2VzL2hvb2tzL3R5cGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9ob29rcy9fX3NvdXJjZXMvaG9va3MvdXNlLXN0b3JlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9ob29rcy9fX3NvdXJjZXMvaG9va3MvdXNlLXRleHRzLnRzIl0sIm5hbWVzIjpbImhvb2tzXzFfMV82X2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInVzZUJpbmRlciIsInVzZVN0b3JlIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJyZXF1aXJlMiIsInVzZUJpbmRlcjIiLCJvYmplY3RzIiwib25CaW5kZXIiLCJldmVudHMiLCJiaW5kRXZlbnRzIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJvYmplY3QiLCJtZXRob2QiLCJmb3JFYWNoIiwiZXZlbnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JlYWN0IiwidXNlU3RvcmUyIiwic3RvcmUiLCJBcnJheSIsImlzQXJyYXkiLCJFcnJvciIsInNldFZlcnNpb24iLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJ2Iiwib24iLCJvZmYiLCJfdGV4dHMiLCJ1c2VUZXh0czIiLCJzcGVjaWZpZXIiLCJrZXkiLCJyZWFkeSIsInNldFJlYWR5IiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwiaXNSZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsbUJBQUE7QUFBQUMsUUFBQSxDQUFBRCxtQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBLElBQUFVLEtBQUEsR0FBQUMsUUFBQTtJQVNpQixTQUNSQyxXQUFVQyxPQUFBLEVBQTBCQyxRQUFBLEVBQTRCQyxNQUFBLEdBQXVCLFVBQVE7TUFDdkcsTUFBTUMsVUFBQSxHQUF1QixPQUFPRCxNQUFBLEtBQVcsV0FBVyxDQUFDQSxNQUFNLElBQUlBLE1BQUE7TUFFckVMLEtBQUEsQ0FBTU8sU0FBQSxDQUFVLE1BQUs7UUFDcEIsTUFBTUMsUUFBQSxHQUFXQSxDQUFDQyxNQUFBLEVBQXVCQyxNQUFBLEtBQXdCO1VBQ2hFLElBQUksQ0FBQ0QsTUFBQSxDQUFPQyxNQUFBLEdBQVM7VUFDckJKLFVBQUEsQ0FBV0ssT0FBQSxDQUFRQyxLQUFBLElBQVE7WUFDMUJILE1BQUEsQ0FBT0MsTUFBQSxFQUFRRSxLQUFBLEVBQU9SLFFBQVE7VUFDL0IsQ0FBQztRQUNGO1FBQ0FELE9BQUEsQ0FBUVEsT0FBQSxDQUFRRixNQUFBLElBQVVELFFBQUEsQ0FBU0MsTUFBQSxFQUFRLElBQUksQ0FBQztRQUNoRCxPQUFPLE1BQU1OLE9BQUEsQ0FBUVEsT0FBQSxDQUFRRixNQUFBLElBQVVELFFBQUEsQ0FBU0MsTUFBQSxFQUFRLEtBQUssQ0FBQztNQUMvRCxHQUFHLEVBQUU7SUFDTjs7Ozs7O0lDdkJBOztJQUVBSSxNQUFBLENBQUFDLGNBQUEsQ0FBQWhCLE9BQUE7TUFDQWlCLEtBQUE7SUFDQTs7Ozs7Ozs7Ozs7O0lDSkEsSUFBQUMsTUFBQSxHQUFBZixRQUFBO0lBY2lCLFNBQVVnQixVQUFtQ0MsS0FBQSxFQUFVYixNQUFBLEdBQW1CLENBQUMsUUFBUSxHQUFDO01BQ3BHLElBQUksQ0FBQ2MsS0FBQSxDQUFNQyxPQUFBLENBQVFmLE1BQU0sR0FBRztRQUMzQixNQUFNLElBQUlnQixLQUFBLENBQU0sa0RBQWtEOztNQUduRSxNQUFNLEdBQUdDLFVBQVUsS0FBSSxHQUFBTixNQUFBLENBQUFPLFFBQUEsRUFBUyxDQUFDO01BRWpDLElBQUFQLE1BQUEsQ0FBQVQsU0FBQSxFQUFVLE1BQUs7UUFDZCxNQUFNaUIsT0FBQSxHQUFVQSxDQUFBLEtBQU1GLFVBQUEsQ0FBV0csQ0FBQSxJQUFLQSxDQUFBLEdBQUksQ0FBQztRQUUzQ3BCLE1BQUEsQ0FBT00sT0FBQSxDQUFRQyxLQUFBLElBQVNNLEtBQUEsQ0FBTVEsRUFBQSxDQUFHZCxLQUFBLEVBQU9ZLE9BQU8sQ0FBQztRQUVoRCxPQUFPLE1BQUs7VUFDWG5CLE1BQUEsQ0FBT00sT0FBQSxDQUFRQyxLQUFBLElBQVNNLEtBQUEsQ0FBTVMsR0FBQSxDQUFJZixLQUFBLEVBQU9ZLE9BQU8sQ0FBQztRQUNsRDtNQUNELEdBQUcsQ0FBQ04sS0FBQSxFQUFPYixNQUFNLENBQUM7TUFHbEIsT0FBT2EsS0FBQTtJQUNSOzs7Ozs7Ozs7Ozs7SUNqQ0EsSUFBQWxCLEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUEyQixNQUFBLEdBQUEzQixRQUFBO0lBRWlCLFNBQ1I0QixVQUFTQyxTQUFBLEVBQW1CQyxHQUFBLEVBQVk7TUFDaEQsTUFBTSxDQUFDQyxLQUFBLEVBQU9DLFFBQVEsSUFBSWpDLEtBQUEsQ0FBTXVCLFFBQUEsQ0FBUyxLQUFLO01BQzlDLE1BQU0sQ0FBQ1csS0FBQSxFQUFPQyxRQUFRLElBQUluQyxLQUFBLENBQU11QixRQUFBLENBQVMsRUFBRTtNQUUzQ3ZCLEtBQUEsQ0FBTU8sU0FBQSxDQUFVLE1BQUs7UUFDcEIsTUFBTTZCLFVBQUEsR0FBYSxJQUFJUixNQUFBLENBQUFTLFlBQUEsQ0FBYVAsU0FBUztRQUM3QyxNQUFNUSxZQUFBLEdBQWVBLENBQUEsS0FBSztVQUN6QixJQUFJdkIsS0FBQSxHQUFRcUIsVUFBQSxDQUFXckIsS0FBQTtVQUN2QixJQUFJcUIsVUFBQSxDQUFXSixLQUFBLElBQVNELEdBQUEsRUFBSztZQUM1QixJQUFJLENBQUNoQixLQUFBLENBQU13QixjQUFBLENBQWVSLEdBQUcsR0FBRztjQUMvQlMsT0FBQSxDQUFRQyxJQUFBLENBQ1AsMERBQTBEVixHQUFBLHVCQUEwQkQsU0FBQSxFQUFXOztZQUlqR2YsS0FBQSxHQUFRcUIsVUFBQSxDQUFXckIsS0FBQSxDQUFNZ0IsR0FBQTs7VUFFMUJJLFFBQUEsQ0FBU3BCLEtBQUs7VUFDZGtCLFFBQUEsQ0FBU0csVUFBQSxDQUFXSixLQUFLO1FBQzFCO1FBQ0FJLFVBQUEsQ0FBV1YsRUFBQSxDQUFHLFVBQVVZLFlBQVk7UUFDcENBLFlBQUEsQ0FBWTtRQUNaLE9BQU8sTUFBSztVQUNYRixVQUFBLENBQVdWLEVBQUEsQ0FBRyxVQUFVWSxZQUFZO1FBQ3JDO01BQ0QsR0FBRyxFQUFFO01BQ0wsTUFBTUksT0FBQSxHQUFVVixLQUFBLElBQVMsQ0FBQyxDQUFDRSxLQUFBO01BQzNCLE9BQU8sQ0FBQ1EsT0FBQSxFQUFTUixLQUFLO0lBQ3ZCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=