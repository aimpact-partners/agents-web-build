System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["use-callback-ref","1.3.3"],["react","18.3.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
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

// .beyond/uimport/use-callback-ref.1.3.3.js
var use_callback_ref_1_3_3_exports = {};
__export(use_callback_ref_1_3_3_exports, {
  assignRef: () => assignRef,
  createCallbackRef: () => createCallbackRef,
  mergeRefs: () => mergeRefs,
  refToCallback: () => refToCallback,
  transformRef: () => transformRef,
  useCallbackRef: () => useCallbackRef,
  useMergeRefs: () => useMergeRefs,
  useRefToCallback: () => useRefToCallback,
  useTransformRef: () => useTransformRef
});
module.exports = __toCommonJS(use_callback_ref_1_3_3_exports);

// node_modules/use-callback-ref/dist/es2015/assignRef.js
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
  return ref;
}

// node_modules/use-callback-ref/dist/es2015/useRef.js
var import_react = require("react@18.3.1");
function useCallbackRef(initialValue, callback) {
  var ref = (0, import_react.useState)(function () {
    return {
      value: initialValue,
      callback,
      facade: {
        get current() {
          return ref.value;
        },
        set current(value) {
          var last = ref.value;
          if (last !== value) {
            ref.value = value;
            ref.callback(value, last);
          }
        }
      }
    };
  })[0];
  ref.callback = callback;
  return ref.facade;
}

// node_modules/use-callback-ref/dist/es2015/createRef.js
function createCallbackRef(callback) {
  var current = null;
  return {
    get current() {
      return current;
    },
    set current(value) {
      var last = current;
      if (last !== value) {
        current = value;
        callback(value, last);
      }
    }
  };
}

// node_modules/use-callback-ref/dist/es2015/mergeRef.js
function mergeRefs(refs) {
  return createCallbackRef(function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue);
    });
  });
}

// node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var React = __toESM(require("react@18.3.1"));
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
var currentValues = /* @__PURE__ */new WeakMap();
function useMergeRefs(refs, defaultValue) {
  var callbackRef = useCallbackRef(defaultValue || null, function (newValue) {
    return refs.forEach(function (ref) {
      return assignRef(ref, newValue);
    });
  });
  useIsomorphicLayoutEffect(function () {
    var oldValue = currentValues.get(callbackRef);
    if (oldValue) {
      var prevRefs_1 = new Set(oldValue);
      var nextRefs_1 = new Set(refs);
      var current_1 = callbackRef.current;
      prevRefs_1.forEach(function (ref) {
        if (!nextRefs_1.has(ref)) {
          assignRef(ref, null);
        }
      });
      nextRefs_1.forEach(function (ref) {
        if (!prevRefs_1.has(ref)) {
          assignRef(ref, current_1);
        }
      });
    }
    currentValues.set(callbackRef, refs);
  }, [refs]);
  return callbackRef;
}

// node_modules/use-callback-ref/dist/es2015/useTransformRef.js
function useTransformRef(ref, transformer) {
  return useCallbackRef(null, function (value) {
    return assignRef(ref, transformer(value));
  });
}

// node_modules/use-callback-ref/dist/es2015/transformRef.js
function transformRef(ref, transformer) {
  return createCallbackRef(function (value) {
    return assignRef(ref, transformer(value));
  });
}

// node_modules/use-callback-ref/dist/es2015/refToCallback.js
function refToCallback(ref) {
  return function (newValue) {
    if (typeof ref === "function") {
      ref(newValue);
    } else if (ref) {
      ref.current = newValue;
    }
  };
}
var nullCallback = function () {
  return null;
};
var weakMem = /* @__PURE__ */new WeakMap();
var weakMemoize = function (ref) {
  var usedRef = ref || nullCallback;
  var storedRef = weakMem.get(usedRef);
  if (storedRef) {
    return storedRef;
  }
  var cb = refToCallback(usedRef);
  weakMem.set(usedRef, cb);
  return cb;
};
function useRefToCallback(ref) {
  return weakMemoize(ref);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC91c2UtY2FsbGJhY2stcmVmLjEuMy4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvYXNzaWduUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvY3JlYXRlUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvbWVyZ2VSZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VNZXJnZVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZVRyYW5zZm9ybVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3RyYW5zZm9ybVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3JlZlRvQ2FsbGJhY2suanMiXSwibmFtZXMiOlsidXNlX2NhbGxiYWNrX3JlZl8xXzNfM19leHBvcnRzIiwiX19leHBvcnQiLCJhc3NpZ25SZWYiLCJjcmVhdGVDYWxsYmFja1JlZiIsIm1lcmdlUmVmcyIsInJlZlRvQ2FsbGJhY2siLCJ0cmFuc2Zvcm1SZWYiLCJ1c2VDYWxsYmFja1JlZiIsInVzZU1lcmdlUmVmcyIsInVzZVJlZlRvQ2FsbGJhY2siLCJ1c2VUcmFuc2Zvcm1SZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwicmVmIiwidmFsdWUiLCJjdXJyZW50IiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImluaXRpYWxWYWx1ZSIsImNhbGxiYWNrIiwidXNlU3RhdGUiLCJmYWNhZGUiLCJsYXN0IiwicmVmcyIsIm5ld1ZhbHVlIiwiZm9yRWFjaCIsIlJlYWN0IiwiX190b0VTTSIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ3aW5kb3ciLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJjdXJyZW50VmFsdWVzIiwiV2Vha01hcCIsImRlZmF1bHRWYWx1ZSIsImNhbGxiYWNrUmVmIiwib2xkVmFsdWUiLCJnZXQiLCJwcmV2UmVmc18xIiwiU2V0IiwibmV4dFJlZnNfMSIsImN1cnJlbnRfMSIsImhhcyIsInNldCIsInRyYW5zZm9ybWVyIiwibnVsbENhbGxiYWNrIiwid2Vha01lbSIsIndlYWtNZW1vaXplIiwidXNlZFJlZiIsInN0b3JlZFJlZiIsImNiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw4QkFBQTtBQUFBQyxRQUFBLENBQUFELDhCQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBYiw4QkFBQTs7O0FDYU8sU0FBU0UsVUFBVVksR0FBQSxFQUFLQyxLQUFBLEVBQU87RUFDbEMsSUFBSSxPQUFPRCxHQUFBLEtBQVEsWUFBWTtJQUMzQkEsR0FBQSxDQUFJQyxLQUFLO0VBQ2IsV0FDU0QsR0FBQSxFQUFLO0lBQ1ZBLEdBQUEsQ0FBSUUsT0FB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SztRQUM5QixJQUFJLENBQUN5QixVQUFBLENBQVdJLEdBQUEsQ0FBSTdCLEdBQUcsR0FBRztVQUN0QlosU0FBQSxDQUFVWSxHQUFBLEVBQUs0QixTQUFTO1FBQzVCO01BQ0osQ0FBQztJQUNMO0lBQ0FULGFBQUEsQ0FBY1csR0FBQSxDQUFJUixXQUFBLEVBQWFaLElBQUk7RUFDdkMsR0FBRyxDQUFDQSxJQUFJLENBQUM7RUFDVCxPQUFPWSxXQUFBO0FBQ1g7OztBQzdCTyxTQUFTMUIsZ0JBQWdCSSxHQUFBLEVBQUsrQixXQUFBLEVBQWE7RUFDOUMsT0FBT3RDLGNBQUEsQ0FBZSxNQUFNLFVBQVVRLEtBQUEsRUFBTztJQUFFLE9BQU9iLFNBQUEsQ0FBVVksR0FBQSxFQUFLK0IsV0FBQSxDQUFZOUIsS0FBSyxDQUFDO0VBQUcsQ0FBQztBQUMvRjs7O0FDTk8sU0FBU1QsYUFBYVEsR0FBQSxFQUFLK0IsV0FBQSxFQUFhO0VBQzNDLE9BQU8xQyxpQkFBQSxDQUFrQixVQUFVWSxLQUFBLEVBQU87SUFBRSxPQUFPYixTQUFBLENBQVVZLEdBQUEsRUFBSytCLFdBQUEsQ0FBWTlCLEtBQUssQ0FBQztFQUFHLENBQUM7QUFDNUY7OztBQ1JPLFNBQVNWLGNBQWNTLEdBQUEsRUFBSztFQUMvQixPQUFPLFVBQVVXLFFBQUEsRUFBVTtJQUN2QixJQUFJLE9BQU9YLEdBQUEsS0FBUSxZQUFZO01BQzNCQSxHQUFBLENBQUlXLFFBQVE7SUFDaEIsV0FDU1gsR0FBQSxFQUFLO01BQ1ZBLEdBQUEsQ0FBSUUsT0FBQSxHQUFVUyxRQUFBO0lBQ2xCO0VBQ0o7QUFDSjtBQUNBLElBQUlxQixZQUFBLEdBQWUsU0FBQUEsQ0FBQSxFQUFZO0VBQUUsT0FBTztBQUFNO0FBRzlDLElBQUlDLE9BQUEsR0FBVSxtQkFBSWIsT0FBQSxDQUFRO0FBQzFCLElBQUljLFdBQUEsR0FBYyxTQUFBQSxDQUFVbEMsR0FBQSxFQUFLO0VBQzdCLElBQUltQyxPQUFBLEdBQVVuQyxHQUFBLElBQU9nQyxZQUFBO0VBQ3JCLElBQUlJLFNBQUEsR0FBWUgsT0FBQSxDQUFRVCxHQUFBLENBQUlXLE9BQU87RUFDbkMsSUFBSUMsU0FBQSxFQUFXO0lBQ1gsT0FBT0EsU0FBQTtFQUNYO0VBQ0EsSUFBSUMsRUFBQSxHQUFLOUMsYUFBQSxDQUFjNEMsT0FBTztFQUM5QkYsT0FBQSxDQUFRSCxHQUFBLENBQUlLLE9BQUEsRUFBU0UsRUFBRTtFQUN2QixPQUFPQSxFQUFBO0FBQ1g7QUFpQk8sU0FBUzFDLGlCQUFpQkssR0FBQSxFQUFLO0VBQ2xDLE9BQU9rQyxXQUFBLENBQVlsQyxHQUFHO0FBQzFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==