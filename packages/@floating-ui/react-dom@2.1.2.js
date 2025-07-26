System.register(["@floating-ui/utils@0.2.9","@floating-ui/core@1.6.9","@floating-ui/utils@0.2.9/dom","@floating-ui/dom@1.6.13","react@18.3.1","scheduler@0.23.2","react-dom@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@floating-ui/utils","0.2.9"],["@floating-ui/core","1.6.9"],["@floating-ui/dom","1.6.13"],["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@floating-ui/react-dom","2.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@floating-ui/utils@0.2.9', dep), dep => dependencies.set('@floating-ui/core@1.6.9', dep), dep => dependencies.set('@floating-ui/utils@0.2.9/dom', dep), dep => dependencies.set('@floating-ui/dom@1.6.13', dep), dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep)],
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

// .beyond/uimport/temp/@floating-ui/react-dom.2.1.2.js
var react_dom_2_1_2_exports = {};
__export(react_dom_2_1_2_exports, {
  arrow: () => arrow,
  autoPlacement: () => autoPlacement,
  autoUpdate: () => import_dom2.autoUpdate,
  computePosition: () => import_dom2.computePosition,
  detectOverflow: () => import_dom2.detectOverflow,
  flip: () => flip,
  getOverflowAncestors: () => import_dom2.getOverflowAncestors,
  hide: () => hide,
  inline: () => inline,
  limitShift: () => limitShift,
  offset: () => offset,
  platform: () => import_dom2.platform,
  shift: () => shift,
  size: () => size,
  useFloating: () => useFloating
});
module.exports = __toCommonJS(react_dom_2_1_2_exports);

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var import_dom = require("@floating-ui/dom@1.6.13");
var import_dom2 = require("@floating-ui/dom@1.6.13");
var React = __toESM(require("react@18.3.1"), 0);
var import_react = require("react@18.3.1");
var ReactDOM = __toESM(require("react-dom@18.3.1"), 0);
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    (0, import_dom.computePosition)(referenceRef.current, floatingRef.current, config).then(data2 => {
      const fullData = {
        ...data2,
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data2 => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = options => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return (0, import_dom.arrow)({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return (0, import_dom.arrow)({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset = (options, deps) => ({
  ...(0, import_dom.offset)(options),
  options: [options, deps]
});
var shift = (options, deps) => ({
  ...(0, import_dom.shift)(options),
  options: [options, deps]
});
var limitShift = (options, deps) => ({
  ...(0, import_dom.limitShift)(options),
  options: [options, deps]
});
var flip = (options, deps) => ({
  ...(0, import_dom.flip)(options),
  options: [options, deps]
});
var size = (options, deps) => ({
  ...(0, import_dom.size)(options),
  options: [options, deps]
});
var autoPlacement = (options, deps) => ({
  ...(0, import_dom.autoPlacement)(options),
  options: [options, deps]
});
var hide = (options, deps) => ({
  ...(0, import_dom.hide)(options),
  options: [options, deps]
});
var inline = (options, deps) => ({
  ...(0, import_dom.inline)(options),
  options: [options, deps]
});
var arrow = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmbG9hdGluZy11aS9yZWFjdC1kb20uMi4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZsb2F0aW5nLXVpL3JlYWN0LWRvbS9kaXN0L2Zsb2F0aW5nLXVpLnJlYWN0LWRvbS5tanMiXSwibmFtZXMiOlsicmVhY3RfZG9tXzJfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImFycm93IiwiYXV0b1BsYWNlbWVudCIsImF1dG9VcGRhdGUiLCJpbXBvcnRfZG9tMiIsImNvbXB1dGVQb3NpdGlvbiIsImRldGVjdE92ZXJmbG93IiwiZmxpcCIsImdldE92ZXJmbG93QW5jZXN0b3JzIiwiaGlkZSIsImlubGluZSIsImxpbWl0U2hpZnQiLCJvZmZzZXQiLCJwbGF0Zm9ybSIsInNoaWZ0Iiwic2l6ZSIsInVzZUZsb2F0aW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9kb20iLCJyZXF1aXJlIiwiUmVhY3QiLCJfX3RvRVNNIiwiaW1wb3J0X3JlYWN0IiwiUmVhY3RET00iLCJpbmRleCIsImRvY3VtZW50IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiZGVlcEVxdWFsIiwiYSIsImIiLCJ0b1N0cmluZyIsImxlbmd0aCIsImkiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwia2V5IiwiJCR0eXBlb2YiLCJnZXREUFIiLCJlbGVtZW50Iiwid2luZG93Iiwid2luIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInJvdW5kQnlEUFIiLCJ2YWx1ZSIsImRwciIsIk1hdGgiLCJyb3VuZCIsInVzZUxhdGVzdFJlZiIsInJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJvcHRpb25zIiwicGxhY2VtZW50Iiwic3RyYXRlZ3kiLCJtaWRkbGV3YXJlIiwicGxhdGZvcm0yIiwiZWxlbWVudHMiLCJyZWZlcmVuY2UiLCJleHRlcm5hbFJlZmVyZW5jZSIsImZsb2F0aW5nIiwiZXh0ZXJuYWxGbG9hdGluZyIsInRyYW5zZm9ybSIsIndoaWxlRWxlbWVudHNNb3VudGVkIiwib3BlbiIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ4IiwieSIsIm1pZGRsZXdhcmVEYXRhIiwiaXNQb3NpdGlvbmVkIiwibGF0ZXN0TWlkZGxld2FyZSIsInNldExhdGVzdE1pZGRsZXdhcmUiLCJfcmVmZXJlbmNlIiwiX3NldFJlZmVyZW5jZSIsIl9mbG9hdGluZyIsIl9zZXRGbG9hdGluZyIsInNldFJlZmVyZW5jZSIsInVzZUNhbGxiYWNrIiwibm9kZSIsInJlZmVyZW5jZVJlZiIsInNldEZsb2F0aW5nIiwiZmxvYXRpbmdSZWYiLCJyZWZlcmVuY2VFbCIsImZsb2F0aW5nRWwiLCJkYXRhUmVmIiwiaGFzV2hpbGVFbGVtZW50c01vdW50ZWQiLCJ3aGlsZUVsZW1lbnRzTW91bnRlZFJlZiIsInBsYXRmb3JtUmVmIiwib3BlblJlZiIsInVwZGF0ZSIsImNvbmZpZyIsInRoZW4iLCJkYXRhMiIsImZ1bGxEYXRhIiwiaXNNb3VudGVkUmVmIiwiZmx1c2hTeW5jIiwicmVmcyIsInVzZU1lbW8iLCJmbG9hdGluZ1N0eWxlcyIsImluaXRpYWxTdHlsZXMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ3aWxsQ2hhbmdlIiwiYXJyb3ckMSIsImlzUmVmIiwibmFtZSIsImZuIiwic3RhdGUiLCJwYWRkaW5nIiwiZGVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUMsV0FBQSxDQUFBRCxVQUFBO0VBQUFFLGVBQUEsRUFBQUEs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VTtFQUN4QyxPQUFHcEcsVUFBQSxDQUFBbEIsYUFBQSxFQUFnQjBELE9BQU87RUFDMUJBLE9BQUEsRUFBUyxDQUFDQSxPQUFBLEVBQVM0RCxJQUFJO0FBQ3pCO0FBT0EsSUFBTS9HLElBQUEsR0FBT0EsQ0FBQ21ELE9BQUEsRUFBUzRELElBQUEsTUFBVTtFQUMvQixPQUFHcEcsVUFBQSxDQUFBWCxJQUFBLEVBQU9tRCxPQUFPO0VBQ2pCQSxPQUFBLEVBQVMsQ0FBQ0EsT0FBQSxFQUFTNEQsSUFBSTtBQUN6QjtBQU9BLElBQU05RyxNQUFBLEdBQVNBLENBQUNrRCxPQUFBLEVBQVM0RCxJQUFBLE1BQVU7RUFDakMsT0FBR3BHLFVBQUEsQ0FBQVYsTUFBQSxFQUFTa0QsT0FBTztFQUNuQkEsT0FBQSxFQUFTLENBQUNBLE9BQUEsRUFBUzRELElBQUk7QUFDekI7QUFRQSxJQUFNdkgsS0FBQSxHQUFRQSxDQUFDMkQsT0FBQSxFQUFTNEQsSUFBQSxNQUFVO0VBQ2hDLEdBQUdOLE9BQUEsQ0FBUXRELE9BQU87RUFDbEJBLE9BQUEsRUFBUyxDQUFDQSxPQUFBLEVBQVM0RCxJQUFJO0FBQ3pCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=