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

// .beyond/uimport/temp/use-sidecar.1.1.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VzZS1zaWRlY2FyLjEuMS4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2Vudi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9ob29rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L2hvYy5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2Utc2lkZWNhci9kaXN0L2VzMjAxNS9jb25maWcuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvbWVkaXVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1zaWRlY2FyL2Rpc3QvZXMyMDE1L3JlbmRlclByb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLXNpZGVjYXIvZGlzdC9lczIwMTUvZXhwb3J0cy5qcyJdLCJuYW1lcyI6WyJ1c2Vfc2lkZWNhcl8xXzFfM19leHBvcnRzIiwiX19leHBvcnQiLCJjcmVhdGVNZWRpdW0iLCJjcmVhdGVTaWRlY2FyTWVkaXVtIiwiZXhwb3J0U2lkZWNhciIsInJlbmRlckNhciIsInNldENvbmZpZyIsInNpZGVjYXIiLCJ1c2VTaWRlY2FyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9kZXRlY3Rfbm9kZV9lcyIsInJlcXVpcmUiLCJlbnYiLCJpc05vZGUiLCJmb3JjZUNhY2hlIiwiaW1wb3J0X3JlYWN0IiwiY2FjaGUiLCJXZWFrTWFwIiwiTk9fT1BUSU9OUyIsImltcG9ydGVyIiwiZWZmZWN0Iiwib3B0aW9ucyIsInNzciIsInVzZVJlYWxTaWRlY2FyIiwiY291bGRVc2VDYWNoZSIsImFzeW5jIiwiX2EiLCJ1c2VTdGF0ZSIsImdldCIsIkNhciIsInNldENhciIsIl9iIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsInRoZW4iLCJjYXIiLCJyZXNvbHZlZCIsInJlYWQiLCJkZWZhdWx0IiwiY29uc29sZSIsImVycm9yXzEiLCJFcnJvciIsInNldCIsImUiLCJpbXBvcnRfdHNsaWIiLCJSZWFjdCIsIl9fdG9FU00iLCJlcnJvckNvbXBvbmVudCIsIkVycm9yQ2FzZSIsIlNpZGVjYXIiLCJwcm9wcyIsInNpZGVDYXIiLCJjcmVhdGVFbGVtZW50IiwiX19hc3NpZ24iLCJjb25maWciLCJvbkVycm9yIiwiY29uZiIsIk9iamVjdCIsImFzc2lnbiIsImltcG9ydF90c2xpYjIiLCJJdG9JIiwiYSIsImlubmVyQ3JlYXRlTWVkaXVtIiwiZGVmYXVsdHMiLCJtaWRkbGV3YXJlIiwiYnVmZmVyIiwiYXNzaWduZWQiLCJtZWRpdW0iLCJsZW5ndGgiLCJ1c2VNZWRpdW0iLCJkYXRhIiwiaXRlbSIsInB1c2giLCJmaWx0ZXIiLCJ4IiwiYXNzaWduU3luY01lZGl1bSIsImNiIiwiY2JzIiwiZm9yRWFjaCIsImFzc2lnbk1lZGl1bSIsInBlbmRpbmdRdWV1ZSIsImV4ZWN1dGVRdWV1ZSIsImNiczIiLCJjeWNsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1wb3J0X3RzbGliMyIsIlJlYWN0MiIsImltcG9ydF9yZWFjdDIiLCJXcmFwcGVkQ29tcG9uZW50IiwiU3RhdGUiLCJzdGF0ZVJlZiIsInJlbmRlclRhcmdldCIsInVzZUNhbGxiYWNrIiwiU2lkZVRhcmdldCIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsInVzZUxheW91dEVmZmVjdCIsImN1cnJlbnQiLCJjaGlsZHJlbiIsIkNoaWxkcmVuIiwibWVtbyIsImRlZmF1bHRTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhcHBseSIsIkNvbWJpbmVyIiwidXNlUmVmIiwicmVmIiwiRnJhZ21lbnQiLCJpbXBvcnRfdHNsaWI0IiwiUmVhY3QzIiwiU2lkZUNhciIsInJlc3QiLCJfX3Jlc3QiLCJUYXJnZXQiLCJpc1NpZGVDYXJFeHBvcnQiLCJleHBvcnRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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