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

// .beyond/uimport/@floating-ui/react-dom.2.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmxvYXRpbmctdWkvcmVhY3QtZG9tLjIuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmbG9hdGluZy11aS9yZWFjdC1kb20vZGlzdC9mbG9hdGluZy11aS5yZWFjdC1kb20ubWpzIl0sIm5hbWVzIjpbInJlYWN0X2RvbV8yXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJhcnJvdyIsImF1dG9QbGFjZW1lbnQiLCJhdXRvVXBkYXRlIiwiaW1wb3J0X2RvbTIiLCJjb21wdXRlUG9zaXRpb24iLCJkZXRlY3RPdmVyZmxvdyIsImZsaXAiLCJnZXRPdmVyZmxvd0FuY2VzdG9ycyIsImhpZGUiLCJpbmxpbmUiLCJsaW1pdFNoaWZ0Iiwib2Zmc2V0IiwicGxhdGZvcm0iLCJzaGlmdCIsInNpemUiLCJ1c2VGbG9hdGluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfZG9tIiwicmVxdWlyZSIsIlJlYWN0IiwiX190b0VTTSIsImltcG9ydF9yZWFjdCIsIlJlYWN0RE9NIiwiaW5kZXgiLCJkb2N1bWVudCIsInVzZUxheW91dEVmZmVjdCIsInVzZUVmZmVjdCIsImRlZXBFcXVhbCIsImEiLCJiIiwidG9TdHJpbmciLCJsZW5ndGgiLCJpIiwia2V5cyIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImtleSIsIiQkdHlwZW9mIiwiZ2V0RFBSIiwiZWxlbWVudCIsIndpbmRvdyIsIndpbiIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImRldmljZVBpeGVsUmF0aW8iLCJyb3VuZEJ5RFBSIiwidmFsdWUiLCJkcHIiLCJNYXRoIiwicm91bmQiLCJ1c2VMYXRlc3RSZWYiLCJyZWYiLCJ1c2VSZWYiLCJjdXJyZW50Iiwib3B0aW9ucyIsInBsYWNlbWVudCIsInN0cmF0ZWd5IiwibWlkZGxld2FyZSIsInBsYXRmb3JtMiIsImVsZW1lbnRzIiwicmVmZXJlbmNlIiwiZXh0ZXJuYWxSZWZlcmVuY2UiLCJmbG9hdGluZyIsImV4dGVybmFsRmxvYXRpbmciLCJ0cmFuc2Zvcm0iLCJ3aGlsZUVsZW1lbnRzTW91bnRlZCIsIm9wZW4iLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwieCIsInkiLCJtaWRkbGV3YXJlRGF0YSIsImlzUG9zaXRpb25lZCIsImxhdGVzdE1pZGRsZXdhcmUiLCJzZXRMYXRlc3RNaWRkbGV3YXJlIiwiX3JlZmVyZW5jZSIsIl9zZXRSZWZlcmVuY2UiLCJfZmxvYXRpbmciLCJfc2V0RmxvYXRpbmciLCJzZXRSZWZlcmVuY2UiLCJ1c2VDYWxsYmFjayIsIm5vZGUiLCJyZWZlcmVuY2VSZWYiLCJzZXRGbG9hdGluZyIsImZsb2F0aW5nUmVmIiwicmVmZXJlbmNlRWwiLCJmbG9hdGluZ0VsIiwiZGF0YVJlZiIsImhhc1doaWxlRWxlbWVudHNNb3VudGVkIiwid2hpbGVFbGVtZW50c01vdW50ZWRSZWYiLCJwbGF0Zm9ybVJlZiIsIm9wZW5SZWYiLCJ1cGRhdGUiLCJjb25maWciLCJ0aGVuIiwiZGF0YTIiLCJmdWxsRGF0YSIsImlzTW91bnRlZFJlZiIsImZsdXNoU3luYyIsInJlZnMiLCJ1c2VNZW1vIiwiZmxvYXRpbmdTdHlsZXMiLCJpbml0aWFsU3R5bGVzIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwid2lsbENoYW5nZSIsImFycm93JDEiLCJpc1JlZiIsIm5hbWUiLCJmbiIsInN0YXRlIiwicGFkZGluZyIsImRlcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHVCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsdUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFDLFdBQUEsQ0FBQUQsVUFBQTtFQUFBRSxlQUFBLEVBQUFBLENBQUEs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eEMsT0FBR3BHLFVBQUEsQ0FBQWxCLGFBQUEsRUFBZ0IwRCxPQUFPO0VBQzFCQSxPQUFBLEVBQVMsQ0FBQ0EsT0FBQSxFQUFTNEQsSUFBSTtBQUN6QjtBQU9BLElBQU0vRyxJQUFBLEdBQU9BLENBQUNtRCxPQUFBLEVBQVM0RCxJQUFBLE1BQVU7RUFDL0IsT0FBR3BHLFVBQUEsQ0FBQVgsSUFBQSxFQUFPbUQsT0FBTztFQUNqQkEsT0FBQSxFQUFTLENBQUNBLE9BQUEsRUFBUzRELElBQUk7QUFDekI7QUFPQSxJQUFNOUcsTUFBQSxHQUFTQSxDQUFDa0QsT0FBQSxFQUFTNEQsSUFBQSxNQUFVO0VBQ2pDLE9BQUdwRyxVQUFBLENBQUFWLE1BQUEsRUFBU2tELE9BQU87RUFDbkJBLE9BQUEsRUFBUyxDQUFDQSxPQUFBLEVBQVM0RCxJQUFJO0FBQ3pCO0FBUUEsSUFBTXZILEtBQUEsR0FBUUEsQ0FBQzJELE9BQUEsRUFBUzRELElBQUEsTUFBVTtFQUNoQyxHQUFHTixPQUFBLENBQVF0RCxPQUFPO0VBQ2xCQSxPQUFBLEVBQVMsQ0FBQ0EsT0FBQSxFQUFTNEQsSUFBSTtBQUN6QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=