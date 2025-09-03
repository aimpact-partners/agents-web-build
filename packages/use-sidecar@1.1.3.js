System.register(["tslib@2.8.1","react@18.3.1","detect-node-es@1.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["tslib","2.8.1"],["react","18.3.1"],["detect-node-es","1.1.0"],["use-sidecar","1.1.3"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('tslib@2.8.1', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('detect-node-es@1.1.0', dep)],
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

// .beyond/uimport/use-sidecar.1.1.3.js
var use_sidecar_1_1_3_exports = {};
__export(use_sidecar_1_1_3_exports, {
  createMedium: () => createMedium,
  createSidecarMedium: () => createSidecarMedium,
  exportSidecar: () => exportSidecar,
  renderCar: () => renderCar,
  setConfig: () => setConfig,
  sidecar: () => sidecar,
  useSidecar: () => useSidecar
});
module.exports = __toCommonJS(use_sidecar_1_1_3_exports);

// node_modules/use-sidecar/dist/es2015/env.js
var import_detect_node_es = require("detect-node-es@1.1.0");
var env = {
  isNode: import_detect_node_es.isNode,
  forceCache: false
};

// node_modules/use-sidecar/dist/es2015/hook.js
var import_react = require("react@18.3.1");
var cache = /* @__PURE__ */new WeakMap();
var NO_OPTIONS = {};
function useSidecar(importer, effect) {
  var options = effect && effect.options || NO_OPTIONS;
  if (env.isNode && !options.ssr) {
    return [null, null];
  }
  return useRealSidecar(importer, effect);
}
function useRealSidecar(importer, effect) {
  var options = effect && effect.options || NO_OPTIONS;
  var couldUseCache = env.forceCache || env.isNode && !!options.ssr || !options.async;
  var _a = (0, import_react.useState)(couldUseCache ? function () {
      return cache.get(importer);
    } : void 0),
    Car = _a[0],
    setCar = _a[1];
  var _b = (0, import_react.useState)(null),
    error = _b[0],
    setError = _b[1];
  (0, import_react.useEffect)(function () {
    if (!Car) {
      importer().then(function (car) {
        var resolved = effect ? effect.read() : car.default || car;
        if (!resolved) {
          console.error("Sidecar error: with importer", importer);
          var error_1;
          if (effect) {
            console.error("Sidecar error: with medium", effect);
            error_1 = new Error("Sidecar medium was not found");
          } else {
            error_1 = new Error("Sidecar was not found in exports");
          }
          setError(function () {
            return error_1;
          });
          throw error_1;
        }
        cache.set(importer, resolved);
        setCar(function () {
          return resolved;
        });
      }, function (e) {
        return setError(function () {
          return e;
        });
      });
    }
  }, []);
  return [Car, error];
}

// node_modules/use-sidecar/dist/es2015/hoc.js
var import_tslib = require("tslib@2.8.1");
var React = __toESM(require("react@18.3.1"));
function sidecar(importer, errorComponent) {
  var ErrorCase = function () {
    return errorComponent;
  };
  return function Sidecar(props) {
    var _a = useSidecar(importer, props.sideCar),
      Car = _a[0],
      error = _a[1];
    if (error && errorComponent) {
      return ErrorCase;
    }
    return Car ? React.createElement(Car, (0, import_tslib.__assign)({}, props)) : null;
  };
}

// node_modules/use-sidecar/dist/es2015/config.js
var config = {
  onError: function (e) {
    return console.error(e);
  }
};
var setConfig = function (conf) {
  Object.assign(config, conf);
};

// node_modules/use-sidecar/dist/es2015/medium.js
var import_tslib2 = require("tslib@2.8.1");
function ItoI(a) {
  return a;
}
function innerCreateMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  var buffer = [];
  var assigned = false;
  var medium = {
    read: function () {
      if (assigned) {
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      }
      if (buffer.length) {
        return buffer[buffer.length - 1];
      }
      return defaults;
    },
    useMedium: function (data) {
      var item = middleware(data, assigned);
      buffer.push(item);
      return function () {
        buffer = buffer.filter(function (x) {
          return x !== item;
        });
      };
    },
    assignSyncMedium: function (cb) {
      assigned = true;
      while (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
      }
      buffer = {
        push: function (x) {
          return cb(x);
        },
        filter: function () {
          return buffer;
        }
      };
    },
    assignMedium: function (cb) {
      assigned = true;
      var pendingQueue = [];
      if (buffer.length) {
        var cbs = buffer;
        buffer = [];
        cbs.forEach(cb);
        pendingQueue = buffer;
      }
      var executeQueue = function () {
        var cbs2 = pendingQueue;
        pendingQueue = [];
        cbs2.forEach(cb);
      };
      var cycle = function () {
        return Promise.resolve().then(executeQueue);
      };
      cycle();
      buffer = {
        push: function (x) {
          pendingQueue.push(x);
          cycle();
        },
        filter: function (filter) {
          pendingQueue = pendingQueue.filter(filter);
          return buffer;
        }
      };
    }
  };
  return medium;
}
function createMedium(defaults, middleware) {
  if (middleware === void 0) {
    middleware = ItoI;
  }
  return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
  if (options === void 0) {
    options = {};
  }
  var medium = innerCreateMedium(null);
  medium.options = (0, import_tslib2.__assign)({
    async: true,
    ssr: false
  }, options);
  return medium;
}

// node_modules/use-sidecar/dist/es2015/renderProp.js
var import_tslib3 = require("tslib@2.8.1");
var React2 = __toESM(require("react@18.3.1"));
var import_react2 = require("react@18.3.1");
function renderCar(WrappedComponent, defaults) {
  function State(_a) {
    var stateRef = _a.stateRef,
      props = _a.props;
    var renderTarget = (0, import_react2.useCallback)(function SideTarget() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      (0, import_react2.useLayoutEffect)(function () {
        stateRef.current(args);
      });
      return null;
    }, []);
    return React2.createElement(WrappedComponent, (0, import_tslib3.__assign)({}, props, {
      children: renderTarget
    }));
  }
  var Children = React2.memo(function (_a) {
    var stateRef = _a.stateRef,
      defaultState = _a.defaultState,
      children = _a.children;
    var _b = (0, import_react2.useState)(defaultState.current),
      state = _b[0],
      setState = _b[1];
    (0, import_react2.useEffect)(function () {
      stateRef.current = setState;
    }, []);
    return children.apply(void 0, state);
  }, function () {
    return true;
  });
  return function Combiner(props) {
    var defaultState = React2.useRef(defaults(props));
    var ref = React2.useRef(function (state) {
      return defaultState.current = state;
    });
    return React2.createElement(React2.Fragment, null, React2.createElement(State, {
      stateRef: ref,
      props
    }), React2.createElement(Children, {
      stateRef: ref,
      defaultState,
      children: props.children
    }));
  };
}

// node_modules/use-sidecar/dist/es2015/exports.js
var import_tslib4 = require("tslib@2.8.1");
var React3 = __toESM(require("react@18.3.1"));
var SideCar = function (_a) {
  var sideCar = _a.sideCar,
    rest = (0, import_tslib4.__rest)(_a, ["sideCar"]);
  if (!sideCar) {
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  }
  var Target = sideCar.read();
  if (!Target) {
    throw new Error("Sidecar medium not found");
  }
  return React3.createElement(Target, (0, import_tslib4.__assign)({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
  medium.useMedium(exported);
  return SideCar;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC91c2Utc2lkZWNhci4xLjEuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9lbnYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvaG9vay5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9ob2MuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvY29uZmlnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L21lZGl1bS5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9yZW5kZXJQcm9wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2V4cG9ydHMuanMiXSwibmFtZXMiOlsidXNlX3NpZGVjYXJfMV8xXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY3JlYXRlTWVkaXVtIiwiY3JlYXRlU2lkZWNhck1lZGl1bSIsImV4cG9ydFNpZGVjYXIiLCJyZW5kZXJDYXIiLCJzZXRDb25maWciLCJzaWRlY2FyIiwidXNlU2lkZWNhciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZGV0ZWN0X25vZGVfZXMiLCJyZXF1aXJlIiwiZW52IiwiaXNOb2RlIiwiZm9yY2VDYWNoZSIsImltcG9ydF9yZWFjdCIsImNhY2hlIiwiV2Vha01hcCIsIk5PX09QVElPTlMiLCJpbXBvcnRlciIsImVmZmVjdCIsIm9wdGlvbnMiLCJzc3IiLCJ1c2VSZWFsU2lkZWNhciIsImNvdWxkVXNlQ2FjaGUiLCJhc3luYyIsIl9hIiwidXNlU3RhdGUiLCJnZXQiLCJDYXIiLCJzZXRDYXIiLCJfYiIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwiY2FyIiwicmVzb2x2ZWQiLCJyZWFkIiwiZGVmYXVsdCIsImNvbnNvbGUiLCJlcnJvcl8xIiwiRXJyb3IiLCJzZXQiLCJlIiwiaW1wb3J0X3RzbGliIiwiUmVhY3QiLCJfX3RvRVNNIiwiZXJyb3JDb21wb25lbnQiLCJFcnJvckNhc2UiLCJTaWRlY2FyIiwicHJvcHMiLCJzaWRlQ2FyIiwiY3JlYXRlRWxlbWVudCIsIl9fYXNzaWduIiwiY29uZmlnIiwib25FcnJvciIsImNvbmYiLCJPYmplY3QiLCJhc3NpZ24iLCJpbXBvcnRfdHNsaWIyIiwiSXRvSSIsImEiLCJpbm5lckNyZWF0ZU1lZGl1bSIsImRlZmF1bHRzIiwibWlkZGxld2FyZSIsImJ1ZmZlciIsImFzc2lnbmVkIiwibWVkaXVtIiwibGVuZ3RoIiwidXNlTWVkaXVtIiwiZGF0YSIsIml0ZW0iLCJwdXNoIiwiZmlsdGVyIiwieCIsImFzc2lnblN5bmNNZWRpdW0iLCJjYiIsImNicyIsImZvckVhY2giLCJhc3NpZ25NZWRpdW0iLCJwZW5kaW5nUXVldWUiLCJleGVjdXRlUXVldWUiLCJjYnMyIiwiY3ljbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltcG9ydF90c2xpYjMiLCJSZWFjdDIiLCJpbXBvcnRfcmVhY3QyIiwiV3JhcHBlZENvbXBvbmVudCIsIlN0YXRlIiwic3RhdGVSZWYiLCJyZW5kZXJUYXJnZXQiLCJ1c2VDYWxsYmFjayIsIlNpZGVUYXJnZXQiLCJhcmdzIiwiX2kiLCJhcmd1bWVudHMiLCJ1c2VMYXlvdXRFZmZlY3QiLCJjdXJyZW50IiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsIm1lbW8iLCJkZWZhdWx0U3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiYXBwbHkiLCJDb21iaW5lciIsInVzZVJlZiIsInJlZiIsIkZyYWdtZW50IiwiaW1wb3J0X3RzbGliNCIsIlJlYWN0MyIsIlNpZGVDYXIiLCJyZXN0IiwiX19yZXN0IiwiVGFyZ2V0IiwiaXNTaWRlQ2FyRXhwb3J0IiwiZXhwb3J0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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