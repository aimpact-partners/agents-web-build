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

// .beyond/uimport/temp/use-callback-ref.1.3.3.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VzZS1jYWxsYmFjay1yZWYuMS4zLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9hc3NpZ25SZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS91c2VSZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9jcmVhdGVSZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvdXNlLWNhbGxiYWNrLXJlZi9kaXN0L2VzMjAxNS9tZXJnZVJlZi5qcyIsIi4uL25vZGVfbW9kdWxlcy91c2UtY2FsbGJhY2stcmVmL2Rpc3QvZXMyMDE1L3VzZU1lcmdlUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdXNlVHJhbnNmb3JtUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvdHJhbnNmb3JtUmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9lczIwMTUvcmVmVG9DYWxsYmFjay5qcyJdLCJuYW1lcyI6WyJ1c2VfY2FsbGJhY2tfcmVmXzFfM18zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImFzc2lnblJlZiIsImNyZWF0ZUNhbGxiYWNrUmVmIiwibWVyZ2VSZWZzIiwicmVmVG9DYWxsYmFjayIsInRyYW5zZm9ybVJlZiIsInVzZUNhbGxiYWNrUmVmIiwidXNlTWVyZ2VSZWZzIiwidXNlUmVmVG9DYWxsYmFjayIsInVzZVRyYW5zZm9ybVJlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJyZWYiLCJ2YWx1ZSIsImN1cnJlbnQiLCJpbXBvcnRfcmVhY3QiLCJyZXF1aXJlIiwiaW5pdGlhbFZhbHVlIiwiY2FsbGJhY2siLCJ1c2VTdGF0ZSIsImZhY2FkZSIsImxhc3QiLCJyZWZzIiwibmV3VmFsdWUiLCJmb3JFYWNoIiwiUmVhY3QiLCJfX3RvRVNNIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsIndpbmRvdyIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImN1cnJlbnRWYWx1ZXMiLCJXZWFrTWFwIiwiZGVmYXVsdFZhbHVlIiwiY2FsbGJhY2tSZWYiLCJvbGRWYWx1ZSIsImdldCIsInByZXZSZWZzXzEiLCJTZXQiLCJuZXh0UmVmc18xIiwiY3VycmVudF8xIiwiaGFzIiwic2V0IiwidHJhbnNmb3JtZXIiLCJudWxsQ2FsbGJhY2siLCJ3ZWFrTWVtIiwid2Vha01lbW9pemUiLCJ1c2VkUmVmIiwic3RvcmVkUmVmIiwiY2IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDhCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsOEJBQUE7RUFBQUUsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFiLDhCQUFBOzs7QUNhTyxTQUFTRSxVQUFVWSxHQUFBLEVBQUtDLEtBQUEsRUFBTztFQUNsQyxJQUFJLE9BQU9ELEdBQUEsS0FBUSxZQUFZO0lBQzNCQSxHQUFBLENBQUlDLEtBQUs7RUFDYixXQUNTRCxHQUFBLEVBQUs7SUFDVkEsR0FBQSxDQUFJ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QSxFQUFLO1FBQzlCLElBQUksQ0FBQ3lCLFVBQUEsQ0FBV0ksR0FBQSxDQUFJN0IsR0FBRyxHQUFHO1VBQ3RCWixTQUFBLENBQVVZLEdBQUEsRUFBSzRCLFNBQVM7UUFDNUI7TUFDSixDQUFDO0lBQ0w7SUFDQVQsYUFBQSxDQUFjVyxHQUFBLENBQUlSLFdBQUEsRUFBYVosSUFBSTtFQUN2QyxHQUFHLENBQUNBLElBQUksQ0FBQztFQUNULE9BQU9ZLFdBQUE7QUFDWDs7O0FDN0JPLFNBQVMxQixnQkFBZ0JJLEdBQUEsRUFBSytCLFdBQUEsRUFBYTtFQUM5QyxPQUFPdEMsY0FBQSxDQUFlLE1BQU0sVUFBVVEsS0FBQSxFQUFPO0lBQUUsT0FBT2IsU0FBQSxDQUFVWSxHQUFBLEVBQUsrQixXQUFBLENBQVk5QixLQUFLLENBQUM7RUFBRyxDQUFDO0FBQy9GOzs7QUNOTyxTQUFTVCxhQUFhUSxHQUFBLEVBQUsrQixXQUFBLEVBQWE7RUFDM0MsT0FBTzFDLGlCQUFBLENBQWtCLFVBQVVZLEtBQUEsRUFBTztJQUFFLE9BQU9iLFNBQUEsQ0FBVVksR0FBQSxFQUFLK0IsV0FBQSxDQUFZOUIsS0FBSyxDQUFDO0VBQUcsQ0FBQztBQUM1Rjs7O0FDUk8sU0FBU1YsY0FBY1MsR0FBQSxFQUFLO0VBQy9CLE9BQU8sVUFBVVcsUUFBQSxFQUFVO0lBQ3ZCLElBQUksT0FBT1gsR0FBQSxLQUFRLFlBQVk7TUFDM0JBLEdBQUEsQ0FBSVcsUUFBUTtJQUNoQixXQUNTWCxHQUFBLEVBQUs7TUFDVkEsR0FBQSxDQUFJRSxPQUFBLEdBQVVTLFFBQUE7SUFDbEI7RUFDSjtBQUNKO0FBQ0EsSUFBSXFCLFlBQUEsR0FBZSxTQUFBQSxDQUFBLEVBQVk7RUFBRSxPQUFPO0FBQU07QUFHOUMsSUFBSUMsT0FBQSxHQUFVLG1CQUFJYixPQUFBLENBQVE7QUFDMUIsSUFBSWMsV0FBQSxHQUFjLFNBQUFBLENBQVVsQyxHQUFBLEVBQUs7RUFDN0IsSUFBSW1DLE9BQUEsR0FBVW5DLEdBQUEsSUFBT2dDLFlBQUE7RUFDckIsSUFBSUksU0FBQSxHQUFZSCxPQUFBLENBQVFULEdBQUEsQ0FBSVcsT0FBTztFQUNuQyxJQUFJQyxTQUFBLEVBQVc7SUFDWCxPQUFPQSxTQUFBO0VBQ1g7RUFDQSxJQUFJQyxFQUFBLEdBQUs5QyxhQUFBLENBQWM0QyxPQUFPO0VBQzlCRixPQUFBLENBQVFILEdBQUEsQ0FBSUssT0FBQSxFQUFTRSxFQUFFO0VBQ3ZCLE9BQU9BLEVBQUE7QUFDWDtBQWlCTyxTQUFTMUMsaUJBQWlCSyxHQUFBLEVBQUs7RUFDbEMsT0FBT2tDLFdBQUEsQ0FBWWxDLEdBQUc7QUFDMUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==