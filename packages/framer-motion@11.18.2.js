System.register(["react@18.3.1","react@18.3.1/jsx-runtime","motion-utils@11.18.1","motion-dom@11.18.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["framer-motion","11.18.2"],["motion-utils","11.18.1"],["@emotion/memoize","0.9.0"],["@emotion/is-prop-valid","1.3.1"],["motion-dom","11.18.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('motion-utils@11.18.1', dep), dep => dependencies.set('motion-dom@11.18.1', dep)],
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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

// node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js
var require_emotion_memoize_cjs_dev = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function memoize(fn) {
      var cache = /* @__PURE__ */Object.create(null);
      return function (arg) {
        if (cache[arg] === void 0) cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports["default"] = memoize;
  }
});

// node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = __commonJS({
  "node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module2) {
    "use strict";

    if (false) {
      module2.exports = null;
    } else {
      module2.exports = require_emotion_memoize_cjs_dev();
    }
  }
});

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js
var require_emotion_is_prop_valid_cjs = __commonJS({
  "node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var memoize = require_emotion_memoize_cjs();
    function _interopDefault(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    var memoize__default = /* @__PURE__ */_interopDefault(memoize);
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var isPropValid = /* @__PURE__ */memoize__default["default"](function (prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    exports["default"] = isPropValid;
  }
});

// .beyond/uimport/framer-motion.11.18.2.js
var framer_motion_11_18_2_exports = {};
__export(framer_motion_11_18_2_exports, {
  AcceleratedAnimation: () => AcceleratedAnimation,
  AnimatePresence: () => AnimatePresence,
  AnimateSharedLayout: () => AnimateSharedLayout,
  DeprecatedLayoutGroupContext: () => DeprecatedLayoutGroupContext,
  DragControls: () => DragControls,
  FlatTree: () => FlatTree,
  LayoutGroup: () => LayoutGroup,
  LayoutGroupContext: () => LayoutGroupContext,
  LazyMotion: () => LazyMotion,
  MotionConfig: () => MotionConfig,
  MotionConfigContext: () => MotionConfigContext,
  MotionContext: () => MotionContext,
  MotionGlobalConfig: () => MotionGlobalConfig,
  MotionValue: () => MotionValue,
  PresenceContext: () => PresenceContext,
  Reorder: () => namespace_exports,
  SwitchLayoutGroupContext: () => SwitchLayoutGroupContext,
  VisualElement: () => VisualElement,
  addPointerEvent: () => addPointerEvent,
  addPointerInfo: () => addPointerInfo,
  addScaleCorrector: () => addScaleCorrector,
  animate: () => animate,
  animateMini: () => animateMini,
  animateValue: () => animateValue,
  animateVisualElement: () => animateVisualElement,
  animationControls: () => animationControls,
  animations: () => animations,
  anticipate: () => anticipate,
  backIn: () => backIn,
  backInOut: () => backInOut,
  backOut: () => backOut,
  buildTransform: () => buildTransform,
  calcLength: () => calcLength,
  cancelFrame: () => cancelFrame,
  cancelSync: () => cancelSync,
  circIn: () => circIn,
  circInOut: () => circInOut,
  circOut: () => circOut,
  clamp: () => clamp,
  color: () => color,
  complex: () => complex,
  createBox: () => createBox,
  createRendererMotionComponent: () => createRendererMotionComponent,
  createScopedAnimate: () => createScopedAnimate,
  cubicBezier: () => cubicBezier,
  delay: () => delay,
  disableInstantTransitions: () => disableInstantTransitions,
  distance: () => distance,
  distance2D: () => distance2D,
  domAnimation: () => domAnimation,
  domMax: () => domMax,
  domMin: () => domMin,
  easeIn: () => easeIn,
  easeInOut: () => easeInOut,
  easeOut: () => easeOut,
  filterProps: () => filterProps,
  findSpring: () => findSpring,
  frame: () => frame,
  frameData: () => frameData,
  frameSteps: () => frameSteps,
  inView: () => inView,
  inertia: () => inertia,
  interpolate: () => interpolate,
  invariant: () => import_motion_utils39.invariant,
  isBrowser: () => isBrowser,
  isDragActive: () => import_motion_dom24.isDragActive,
  isMotionComponent: () => isMotionComponent,
  isMotionValue: () => isMotionValue,
  isValidMotionProp: () => isValidMotionProp,
  keyframes: () => keyframes,
  m: () => m,
  makeUseVisualState: () => makeUseVisualState,
  mirrorEasing: () => mirrorEasing,
  mix: () => mix,
  motion: () => motion,
  motionValue: () => motionValue,
  noop: () => import_motion_utils39.noop,
  optimizedAppearDataAttribute: () => optimizedAppearDataAttribute,
  pipe: () => pipe,
  progress: () => import_motion_utils39.progress,
  px: () => px,
  resolveMotionValue: () => resolveMotionValue,
  reverseEasing: () => reverseEasing,
  scroll: () => scroll,
  scrollInfo: () => scrollInfo,
  spring: () => spring,
  stagger: () => stagger,
  startOptimizedAppearAnimation: () => startOptimizedAppearAnimation,
  steps: () => steps,
  sync: () => sync,
  time: () => time,
  transform: () => transform,
  unwrapMotionComponent: () => unwrapMotionComponent,
  useAnimate: () => useAnimate,
  useAnimateMini: () => useAnimateMini,
  useAnimation: () => useAnimation,
  useAnimationControls: () => useAnimationControls,
  useAnimationFrame: () => useAnimationFrame,
  useCycle: () => useCycle,
  useDeprecatedAnimatedState: () => useAnimatedState,
  useDeprecatedInvertedScale: () => useInvertedScale,
  useDomEvent: () => useDomEvent,
  useDragControls: () => useDragControls,
  useElementScroll: () => useElementScroll,
  useForceUpdate: () => useForceUpdate,
  useInView: () => useInView,
  useInstantLayoutTransition: () => useInstantLayoutTransition,
  useInstantTransition: () => useInstantTransition,
  useIsPresent: () => useIsPresent,
  useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect,
  useMotionTemplate: () => useMotionTemplate,
  useMotionValue: () => useMotionValue,
  useMotionValueEvent: () => useMotionValueEvent,
  usePresence: () => usePresence,
  useReducedMotion: () => useReducedMotion,
  useReducedMotionConfig: () => useReducedMotionConfig,
  useResetProjection: () => useResetProjection,
  useScroll: () => useScroll,
  useSpring: () => useSpring,
  useTime: () => useTime,
  useTransform: () => useTransform,
  useUnmountEffect: () => useUnmountEffect,
  useVelocity: () => useVelocity,
  useViewportScroll: () => useViewportScroll,
  useWillChange: () => useWillChange,
  visualElementStore: () => visualElementStore,
  wrap: () => wrap
});
module.exports = __toCommonJS(framer_motion_11_18_2_exports);

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react = require("react@18.3.1");
"use client";
var LayoutGroupContext = (0, import_react.createContext)({});

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react2 = require("react@18.3.1");
function useConstant(init) {
  const ref = (0, import_react2.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react3 = require("react@18.3.1");
"use client";
var PresenceContext = (0, import_react3.createContext)(null);

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react4 = require("react@18.3.1");
"use client";
var MotionConfigContext = (0, import_react4.createContext)({
  transformPagePoint: p => p,
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
var React = __toESM(require("react@18.3.1"), 0);
var import_react5 = require("react@18.3.1");
"use client";
var PopChildMeasure = class extends React.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (element && prevProps.isPresent && !this.props.isPresent) {
      const size = this.props.sizeRef.current;
      size.height = element.offsetHeight || 0;
      size.width = element.offsetWidth || 0;
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function PopChild({
  children,
  isPresent: isPresent2
}) {
  const id4 = (0, import_react5.useId)();
  const ref = (0, import_react5.useRef)(null);
  const size = (0, import_react5.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  const {
    nonce
  } = (0, import_react5.useContext)(MotionConfigContext);
  (0, import_react5.useInsertionEffect)(() => {
    const {
      width,
      height,
      top,
      left
    } = size.current;
    if (isPresent2 || !ref.current || !width || !height) return;
    ref.current.dataset.motionPopId = id4;
    const style = document.createElement("style");
    if (nonce) style.nonce = nonce;
    document.head.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id4}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            top: ${top}px !important;
            left: ${left}px !important;
          }
        `);
    }
    return () => {
      document.head.removeChild(style);
    };
  }, [isPresent2]);
  return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
    isPresent: isPresent2,
    childRef: ref,
    sizeRef: size,
    children: React.cloneElement(children, {
      ref
    })
  });
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var import_jsx_runtime2 = require("react@18.3.1/jsx-runtime");
var React2 = __toESM(require("react@18.3.1"), 0);
var import_react6 = require("react@18.3.1");
"use client";
var PresenceChild = ({
  children,
  initial,
  isPresent: isPresent2,
  onExitComplete,
  custom,
  presenceAffectsLayout,
  mode
}) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id4 = (0, import_react6.useId)();
  const memoizedOnExitComplete = (0, import_react6.useCallback)(childId => {
    presenceChildren.set(childId, true);
    for (const isComplete of presenceChildren.values()) {
      if (!isComplete) return;
    }
    onExitComplete && onExitComplete();
  }, [presenceChildren, onExitComplete]);
  const context = (0, import_react6.useMemo)(() => ({
    id: id4,
    initial,
    isPresent: isPresent2,
    custom,
    onExitComplete: memoizedOnExitComplete,
    register: childId => {
      presenceChildren.set(childId, false);
      return () => presenceChildren.delete(childId);
    }
  }), presenceAffectsLayout ? [Math.random(), memoizedOnExitComplete] : [isPresent2, memoizedOnExitComplete]);
  (0, import_react6.useMemo)(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent2]);
  React2.useEffect(() => {
    !isPresent2 && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent2]);
  if (mode === "popLayout") {
    children = (0, import_jsx_runtime2.jsx)(PopChild, {
      isPresent: isPresent2,
      children
    });
  }
  return (0, import_jsx_runtime2.jsx)(PresenceContext.Provider, {
    value: context,
    children
  });
};
function newChildrenMap() {
  return /* @__PURE__ */new Map();
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react7 = require("react@18.3.1");
function usePresence(subscribe = true) {
  const context = (0, import_react7.useContext)(PresenceContext);
  if (context === null) return [true, null];
  const {
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  const id4 = (0, import_react7.useId)();
  (0, import_react7.useEffect)(() => {
    if (subscribe) register(id4);
  }, [subscribe]);
  const safeToRemove = (0, import_react7.useCallback)(() => subscribe && onExitComplete && onExitComplete(id4), [id4, onExitComplete, subscribe]);
  return !isPresent2 && onExitComplete ? [false, safeToRemove] : [true];
}
function useIsPresent() {
  return isPresent((0, import_react7.useContext)(PresenceContext));
}
function isPresent(context) {
  return context === null ? true : context.isPresent;
}

// node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var import_react8 = require("react@18.3.1");
var getChildKey = child => child.key || "";
function onlyElements(children) {
  const filtered = [];
  import_react8.Children.forEach(children, child => {
    if ((0, import_react8.isValidElement)(child)) filtered.push(child);
  });
  return filtered;
}

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof window !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react9 = require("react@18.3.1");
var useIsomorphicLayoutEffect = isBrowser ? import_react9.useLayoutEffect : import_react9.useEffect;

// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var import_jsx_runtime3 = require("react@18.3.1/jsx-runtime");
var import_react10 = require("react@18.3.1");
"use client";
var AnimatePresence = ({
  children,
  custom,
  initial = true,
  onExitComplete,
  presenceAffectsLayout = true,
  mode = "sync",
  propagate = false
}) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = (0, import_react10.useMemo)(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = (0, import_react10.useRef)(true);
  const pendingPresentChildren = (0, import_react10.useRef)(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */new Map());
  const [diffedChildren, setDiffedChildren] = (0, import_react10.useState)(presentChildren);
  const [renderedChildren, setRenderedChildren] = (0, import_react10.useState)(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return;
  }
  if (mode === "wait" && renderedChildren.length > 1) {
    console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  }
  const {
    forceRender
  } = (0, import_react10.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, {
    children: renderedChildren.map(child => {
      const key = getChildKey(child);
      const isPresent2 = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
      const onExit = () => {
        if (exitComplete.has(key)) {
          exitComplete.set(key, true);
        } else {
          return;
        }
        let isEveryExitComplete = true;
        exitComplete.forEach(isExitComplete => {
          if (!isExitComplete) isEveryExitComplete = false;
        });
        if (isEveryExitComplete) {
          forceRender === null || forceRender === void 0 ? void 0 : forceRender();
          setRenderedChildren(pendingPresentChildren.current);
          propagate && (safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove());
          onExitComplete && onExitComplete();
        }
      };
      return (0, import_jsx_runtime3.jsx)(PresenceChild, {
        isPresent: isPresent2,
        initial: !isInitialRender.current || initial ? void 0 : false,
        custom: isPresent2 ? void 0 : custom,
        presenceAffectsLayout,
        mode,
        onExitComplete: isPresent2 ? void 0 : onExit,
        children: child
      }, key);
    })
  });
};

// node_modules/framer-motion/dist/es/context/DeprecatedLayoutGroupContext.mjs
var import_react11 = require("react@18.3.1");
var DeprecatedLayoutGroupContext = (0, import_react11.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
var import_react12 = require("react@18.3.1");
function useIsMounted() {
  const isMounted = (0, import_react12.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

// node_modules/framer-motion/dist/es/utils/GlobalConfig.mjs
var MotionGlobalConfig = {
  skipAnimations: false,
  useManualTiming: false
};

// node_modules/framer-motion/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
  let thisFrame = /* @__PURE__ */new Set();
  let nextFrame = /* @__PURE__ */new Set();
  let isProcessing = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */new WeakSet();
  let latestFrameData = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function triggerCallback(callback) {
    if (toKeepAlive.has(callback)) {
      step.schedule(callback);
      runNextFrame();
    }
    callback(latestFrameData);
  }
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing;
      const queue = addToCurrentFrame ? thisFrame : nextFrame;
      if (keepAlive) toKeepAlive.add(callback);
      if (!queue.has(callback)) queue.add(callback);
      return callback;
    },
    cancel: callback => {
      nextFrame.delete(callback);
      toKeepAlive.delete(callback);
    },
    process: frameData2 => {
      latestFrameData = frameData2;
      if (isProcessing) {
        flushNextFrame = true;
        return;
      }
      isProcessing = true;
      [thisFrame, nextFrame] = [nextFrame, thisFrame];
      thisFrame.forEach(triggerCallback);
      thisFrame.clear();
      isProcessing = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData2);
      }
    }
  };
  return step;
}

// node_modules/framer-motion/dist/es/frameloop/batcher.mjs
var stepsOrder = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
  let runNextFrame = false;
  let useDefaultElapsed = true;
  const state2 = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  const flagRunNextFrame = () => runNextFrame = true;
  const steps2 = stepsOrder.reduce((acc, key) => {
    acc[key] = createRenderStep(flagRunNextFrame);
    return acc;
  }, {});
  const {
    read,
    resolveKeyframes,
    update,
    preRender,
    render,
    postRender
  } = steps2;
  const processBatch = () => {
    const timestamp = MotionGlobalConfig.useManualTiming ? state2.timestamp : performance.now();
    runNextFrame = false;
    state2.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state2.timestamp, maxElapsed), 1);
    state2.timestamp = timestamp;
    state2.isProcessing = true;
    read.process(state2);
    resolveKeyframes.process(state2);
    update.process(state2);
    preRender.process(state2);
    render.process(state2);
    postRender.process(state2);
    state2.isProcessing = false;
    if (runNextFrame && allowKeepAlive) {
      useDefaultElapsed = false;
      scheduleNextBatch(processBatch);
    }
  };
  const wake = () => {
    runNextFrame = true;
    useDefaultElapsed = true;
    if (!state2.isProcessing) {
      scheduleNextBatch(processBatch);
    }
  };
  const schedule = stepsOrder.reduce((acc, key) => {
    const step = steps2[key];
    acc[key] = (process2, keepAlive = false, immediate = false) => {
      if (!runNextFrame) wake();
      return step.schedule(process2, keepAlive, immediate);
    };
    return acc;
  }, {});
  const cancel = process2 => {
    for (let i = 0; i < stepsOrder.length; i++) {
      steps2[stepsOrder[i]].cancel(process2);
    }
  };
  return {
    schedule,
    cancel,
    state: state2,
    steps: steps2
  };
}

// node_modules/framer-motion/dist/es/frameloop/frame.mjs
var import_motion_utils = require("motion-utils@11.18.1");
var {
  schedule: frame,
  cancel: cancelFrame,
  state: frameData,
  steps: frameSteps
} = createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : import_motion_utils.noop, true);

// node_modules/framer-motion/dist/es/utils/use-force-update.mjs
var import_react13 = require("react@18.3.1");
function useForceUpdate() {
  const isMounted = useIsMounted();
  const [forcedRenderCount, setForcedRenderCount] = (0, import_react13.useState)(0);
  const forceRender = (0, import_react13.useCallback)(() => {
    isMounted.current && setForcedRenderCount(forcedRenderCount + 1);
  }, [forcedRenderCount]);
  const deferredForceRender = (0, import_react13.useCallback)(() => frame.postRender(forceRender), [forceRender]);
  return [deferredForceRender, forcedRenderCount];
}

// node_modules/framer-motion/dist/es/projection/node/group.mjs
var notify = node => !node.isLayoutDirty && node.willUpdate(false);
function nodeGroup() {
  const nodes = /* @__PURE__ */new Set();
  const subscriptions = /* @__PURE__ */new WeakMap();
  const dirtyAll = () => nodes.forEach(notify);
  return {
    add: node => {
      nodes.add(node);
      subscriptions.set(node, node.addEventListener("willUpdate", dirtyAll));
    },
    remove: node => {
      nodes.delete(node);
      const unsubscribe = subscriptions.get(node);
      if (unsubscribe) {
        unsubscribe();
        subscriptions.delete(node);
      }
      dirtyAll();
    },
    dirty: dirtyAll
  };
}

// node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var import_jsx_runtime4 = require("react@18.3.1/jsx-runtime");
var import_react14 = require("react@18.3.1");
"use client";
var shouldInheritGroup = inherit => inherit === true;
var shouldInheritId = inherit => shouldInheritGroup(inherit === true) || inherit === "id";
var LayoutGroup = ({
  children,
  id: id4,
  inherit = true
}) => {
  const layoutGroupContext = (0, import_react14.useContext)(LayoutGroupContext);
  const deprecatedLayoutGroupContext = (0, import_react14.useContext)(DeprecatedLayoutGroupContext);
  const [forceRender, key] = useForceUpdate();
  const context = (0, import_react14.useRef)(null);
  const upstreamId = layoutGroupContext.id || deprecatedLayoutGroupContext;
  if (context.current === null) {
    if (shouldInheritId(inherit) && upstreamId) {
      id4 = id4 ? upstreamId + "-" + id4 : upstreamId;
    }
    context.current = {
      id: id4,
      group: shouldInheritGroup(inherit) ? layoutGroupContext.group || nodeGroup() : nodeGroup()
    };
  }
  const memoizedContext = (0, import_react14.useMemo)(() => ({
    ...context.current,
    forceRender
  }), [key]);
  return (0, import_jsx_runtime4.jsx)(LayoutGroupContext.Provider, {
    value: memoizedContext,
    children
  });
};

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react15 = require("react@18.3.1");
"use client";
var LazyContext = (0, import_react15.createContext)({
  strict: false
});

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
  animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var featureDefinitions = {};
for (const key in featureProps) {
  featureDefinitions[key] = {
    isEnabled: props => featureProps[key].some(name => !!props[name])
  };
}

// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    featureDefinitions[key] = {
      ...featureDefinitions[key],
      ...features[key]
    };
  }
}

// node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
var import_jsx_runtime5 = require("react@18.3.1/jsx-runtime");
var import_react16 = require("react@18.3.1");
"use client";
function LazyMotion({
  children,
  features,
  strict = false
}) {
  const [, setIsLoaded] = (0, import_react16.useState)(!isLazyBundle(features));
  const loadedRenderer = (0, import_react16.useRef)(void 0);
  if (!isLazyBundle(features)) {
    const {
      renderer,
      ...loadedFeatures
    } = features;
    loadedRenderer.current = renderer;
    loadFeatures(loadedFeatures);
  }
  (0, import_react16.useEffect)(() => {
    if (isLazyBundle(features)) {
      features().then(({
        renderer,
        ...loadedFeatures
      }) => {
        loadFeatures(loadedFeatures);
        loadedRenderer.current = renderer;
        setIsLoaded(true);
      });
    }
  }, []);
  return (0, import_jsx_runtime5.jsx)(LazyContext.Provider, {
    value: {
      renderer: loadedRenderer.current,
      strict
    },
    children
  });
}
function isLazyBundle(features) {
  return typeof features === "function";
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function isValidMotionProp(key) {
  return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = key => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp) return;
  shouldForward = key => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp(require_emotion_is_prop_valid_cjs().default);
} catch (_a) {}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (key === "values" && typeof props.values === "object") continue;
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var import_jsx_runtime6 = require("react@18.3.1/jsx-runtime");
var import_react17 = require("react@18.3.1");
"use client";
function MotionConfig({
  children,
  isValidProp,
  ...config
}) {
  isValidProp && loadExternalIsValidProp(isValidProp);
  config = {
    ...(0, import_react17.useContext)(MotionConfigContext),
    ...config
  };
  config.isStatic = useConstant(() => config.isStatic);
  const context = (0, import_react17.useMemo)(() => config, [JSON.stringify(config.transition), config.transformPagePoint, config.reducedMotion]);
  return (0, import_jsx_runtime6.jsx)(MotionConfigContext.Provider, {
    value: context,
    children
  });
}

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message)) return;
  console.warn(message);
  if (element) console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createDOMMotionComponentProxy(componentFactory) {
  if (typeof Proxy === "undefined") {
    return componentFactory;
  }
  const componentCache = /* @__PURE__ */new Map();
  const deprecatedFactoryFunction = (...args) => {
    if (true) {
      warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
    }
    return componentFactory(...args);
  };
  return new Proxy(deprecatedFactoryFunction, {
    get: (_target, key) => {
      if (key === "create") return componentFactory;
      if (!componentCache.has(key)) {
        componentCache.set(key, componentFactory(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react18 = require("react@18.3.1");
"use client";
var MotionContext = (0, import_react18.createContext)({});

// node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return v !== null && typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"];
var variantProps = ["initial", ...variantPriorityOrder];

// node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some(name => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const {
      initial,
      animate: animate2
    } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react19 = require("react@18.3.1");
function useCreateMotionContext(props) {
  const {
    initial,
    animate: animate2
  } = getCurrentTreeVariants(props, (0, import_react19.useContext)(MotionContext));
  return (0, import_react19.useMemo)(() => ({
    initial,
    animate: animate2
  }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react20 = require("react@18.3.1");
function useMotionRef(visualState, visualElement, externalRef) {
  return (0, import_react20.useCallback)(instance => {
    if (instance) {
      visualState.onMount && visualState.onMount(instance);
    }
    if (visualElement) {
      if (instance) {
        visualElement.mount(instance);
      } else {
        visualElement.unmount();
      }
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance;
      }
    }
  }, [visualElement]);
}

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = str => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

// node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
var optimizedAppearDataId = "framerAppearId";
var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

// node_modules/framer-motion/dist/es/frameloop/microtask.mjs
var {
  schedule: microtask,
  cancel: cancelMicrotask
} = createRenderBatcher(queueMicrotask, false);

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react21 = require("react@18.3.1");
"use client";
var SwitchLayoutGroupContext = (0, import_react21.createContext)({});

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react22 = require("react@18.3.1");
function useVisualElement(Component3, visualState, props, createVisualElement, ProjectionNodeConstructor) {
  var _a, _b;
  const {
    visualElement: parent
  } = (0, import_react22.useContext)(MotionContext);
  const lazyContext = (0, import_react22.useContext)(LazyContext);
  const presenceContext = (0, import_react22.useContext)(PresenceContext);
  const reducedMotionConfig = (0, import_react22.useContext)(MotionConfigContext).reducedMotion;
  const visualElementRef = (0, import_react22.useRef)(null);
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component3, {
      visualState,
      parent,
      props,
      presenceContext,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  const initialLayoutGroupConfig = (0, import_react22.useContext)(SwitchLayoutGroupContext);
  if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
    createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
  }
  const isMounted = (0, import_react22.useRef)(false);
  (0, import_react22.useInsertionEffect)(() => {
    if (visualElement && isMounted.current) {
      visualElement.update(props, presenceContext);
    }
  });
  const optimisedAppearId = props[optimizedAppearDataAttribute];
  const wantsHandoff = (0, import_react22.useRef)(Boolean(optimisedAppearId) && !((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, optimisedAppearId)) && ((_b = window.MotionHasOptimisedAnimation) === null || _b === void 0 ? void 0 : _b.call(window, optimisedAppearId)));
  useIsomorphicLayoutEffect(() => {
    if (!visualElement) return;
    isMounted.current = true;
    window.MotionIsMounted = true;
    visualElement.updateFeatures();
    microtask.render(visualElement.render);
    if (wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  (0, import_react22.useEffect)(() => {
    if (!visualElement) return;
    if (!wantsHandoff.current && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
    if (wantsHandoff.current) {
      queueMicrotask(() => {
        var _a2;
        (_a2 = window.MotionHandoffMarkAsComplete) === null || _a2 === void 0 ? void 0 : _a2.call(window, optimisedAppearId);
      });
      wantsHandoff.current = false;
    }
  });
  return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
  const {
    layoutId,
    layout: layout2,
    drag: drag2,
    dragConstraints,
    layoutScroll,
    layoutRoot
  } = props;
  visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
  visualElement.projection.setOptions({
    layoutId,
    layout: layout2,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement,
    animationType: typeof layout2 === "string" ? layout2 : "both",
    initialPromotionConfig,
    layoutScroll,
    layoutRoot
  });
}
function getClosestProjectingNode(visualElement) {
  if (!visualElement) return void 0;
  return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

// node_modules/framer-motion/dist/es/motion/index.mjs
var import_jsx_runtime7 = require("react@18.3.1/jsx-runtime");
var import_motion_utils2 = require("motion-utils@11.18.1");
var import_react23 = require("react@18.3.1");
"use client";
function createRendererMotionComponent({
  preloadedFeatures,
  createVisualElement,
  useRender,
  useVisualState: useVisualState2,
  Component: Component3
}) {
  var _a, _b;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    let MeasureLayout2;
    const configAndProps = {
      ...(0, import_react23.useContext)(MotionConfigContext),
      ...props,
      layoutId: useLayoutId(props)
    };
    const {
      isStatic
    } = configAndProps;
    const context = useCreateMotionContext(props);
    const visualState = useVisualState2(props, isStatic);
    if (!isStatic && isBrowser) {
      useStrictMode(configAndProps, preloadedFeatures);
      const layoutProjection = getProjectionFunctionality(configAndProps);
      MeasureLayout2 = layoutProjection.MeasureLayout;
      context.visualElement = useVisualElement(Component3, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
    }
    return (0, import_jsx_runtime7.jsxs)(MotionContext.Provider, {
      value: context,
      children: [MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime7.jsx)(MeasureLayout2, {
        visualElement: context.visualElement,
        ...configAndProps
      }) : null, useRender(Component3, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement)]
    });
  }
  MotionComponent.displayName = `motion.${typeof Component3 === "string" ? Component3 : `create(${(_b = (_a = Component3.displayName) !== null && _a !== void 0 ? _a : Component3.name) !== null && _b !== void 0 ? _b : ""})`}`;
  const ForwardRefMotionComponent = (0, import_react23.forwardRef)(MotionComponent);
  ForwardRefMotionComponent[motionComponentSymbol] = Component3;
  return ForwardRefMotionComponent;
}
function useLayoutId({
  layoutId
}) {
  const layoutGroupId = (0, import_react23.useContext)(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
  const isStrict = (0, import_react23.useContext)(LazyContext).strict;
  if (preloadedFeatures && isStrict) {
    const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    configAndProps.ignoreStrict ? (0, import_motion_utils2.warning)(false, strictMessage) : (0, import_motion_utils2.invariant)(false, strictMessage);
  }
}
function getProjectionFunctionality(props) {
  const {
    drag: drag2,
    layout: layout2
  } = featureDefinitions;
  if (!drag2 && !layout2) return {};
  const combined = {
    ...drag2,
    ...layout2
  };
  return {
    MeasureLayout: (drag2 === null || drag2 === void 0 ? void 0 : drag2.isEnabled(props)) || (layout2 === null || layout2 === void 0 ? void 0 : layout2.isEnabled(props)) ? combined.MeasureLayout : void 0,
    ProjectionNode: combined.ProjectionNode
  };
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component3) {
  if (typeof Component3 !== "string" || Component3.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component3) > -1 || /[A-Z]/u.test(Component3)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
  const state2 = [{}, {}];
  visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
    state2[0][key] = value.get();
    state2[1][key] = value.getVelocity();
  });
  return state2;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    const [current, velocity] = getValueState(visualElement);
    definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
  }
  return definition;
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = v => {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = v => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = v => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = value => Boolean(value && value.getVelocity);

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react24 = require("react@18.3.1");
function makeState({
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3,
  createRenderState,
  onUpdate
}, props, context, presenceContext) {
  const state2 = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onUpdate) {
    state2.onMount = instance => onUpdate({
      props,
      current: instance,
      ...state2
    });
    state2.onUpdate = visualElement => onUpdate(visualElement);
  }
  return state2;
}
var makeUseVisualState = config => (props, isStatic) => {
  const context = (0, import_react24.useContext)(MotionContext);
  const presenceContext = (0, import_react24.useContext)(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props, {});
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let {
    initial,
    animate: animate2
  } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0) initial = context.initial;
    if (animate2 === void 0) animate2 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    for (let i = 0; i < list.length; i++) {
      const resolved = resolveVariantFromProps(props, list[i]);
      if (resolved) {
        const {
          transitionEnd,
          transition,
          ...target
        } = resolved;
        for (const key in target) {
          let valueTarget = target[key];
          if (Array.isArray(valueTarget)) {
            const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
            valueTarget = valueTarget[index];
          }
          if (valueTarget !== null) {
            values[key] = valueTarget;
          }
        }
        for (const key in transitionEnd) {
          values[key] = transitionEnd[key];
        }
      }
    }
  }
  return values;
}

// node_modules/framer-motion/dist/es/render/html/utils/keys-transform.mjs
var transformPropOrder = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"];
var transformProps = new Set(transformPropOrder);

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
var checkStringStartsWith = token => key => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /* @__PURE__ */checkStringStartsWith("--");
var startsAsVariableToken = /* @__PURE__ */checkStringStartsWith("var(--");
var isCSSVariableToken = value => {
  const startsWithToken = startsAsVariableToken(value);
  if (!startsWithToken) return false;
  return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/framer-motion/dist/es/utils/clamp.mjs
var clamp = (min, max, v) => {
  if (v > max) return max;
  if (v < min) return min;
  return v;
};

// node_modules/framer-motion/dist/es/value/types/numbers/index.mjs
var number = {
  test: v => typeof v === "number",
  parse: parseFloat,
  transform: v => v
};
var alpha = {
  ...number,
  transform: v => clamp(0, 1, v)
};
var scale = {
  ...number,
  default: 1
};

// node_modules/framer-motion/dist/es/value/types/numbers/units.mjs
var createUnitType = unit => ({
  test: v => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: v => `${v}${unit}`
});
var degrees = /* @__PURE__ */createUnitType("deg");
var percent = /* @__PURE__ */createUnitType("%");
var px = /* @__PURE__ */createUnitType("px");
var vh = /* @__PURE__ */createUnitType("vh");
var vw = /* @__PURE__ */createUnitType("vw");
var progressPercentage = {
  ...percent,
  parse: v => percent.parse(v) / 100,
  transform: v => percent.transform(v * 100)
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number-browser.mjs
var browserNumberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  backgroundPositionX: px,
  backgroundPositionY: px
};

// node_modules/framer-motion/dist/es/render/dom/value-types/transform.mjs
var transformValueTypes = {
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = {
  ...number,
  transform: Math.round
};

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  ...browserNumberValueTypes,
  ...transformValueTypes,
  zIndex: int,
  size: px,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
function buildTransform(latestValues, transform2, transformTemplate) {
  let transformString = "";
  let transformIsDefault = true;
  for (let i = 0; i < numTransforms; i++) {
    const key = transformPropOrder[i];
    const value = latestValues[key];
    if (value === void 0) continue;
    let valueIsDefault = true;
    if (typeof value === "number") {
      valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
    } else {
      valueIsDefault = parseFloat(value) === 0;
    }
    if (!valueIsDefault || transformTemplate) {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (!valueIsDefault) {
        transformIsDefault = false;
        const transformName = translateAlias[key] || key;
        transformString += `${transformName}(${valueAsType}) `;
      }
      if (transformTemplate) {
        transform2[key] = valueAsType;
      }
    }
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
  } else if (transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state2, latestValues, transformTemplate) {
  const {
    style,
    vars,
    transformOrigin
  } = state2;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (transformProps.has(key)) {
      hasTransform2 = true;
      continue;
    } else if (isCSSVariableName(key)) {
      vars[key] = value;
      continue;
    } else {
      const valueAsType = getValueAsType(value, numberValueTypes[key]);
      if (key.startsWith("origin")) {
        hasTransformOrigin = true;
        transformOrigin[key] = valueAsType;
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(latestValues, state2.transform, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const {
      originX = "50%",
      originY = "50%",
      originZ = 0
    } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state2, {
  attrX,
  attrY,
  attrScale,
  originX,
  originY,
  pathLength,
  pathSpacing = 1,
  pathOffset = 0,
  ...latest
}, isSVGTag2, transformTemplate) {
  buildHTMLStyles(state2, latest, transformTemplate);
  if (isSVGTag2) {
    if (state2.style.viewBox) {
      state2.attrs.viewBox = state2.style.viewBox;
    }
    return;
  }
  state2.attrs = state2.style;
  state2.style = {};
  const {
    attrs,
    style,
    dimensions
  } = state2;
  if (attrs.transform) {
    if (dimensions) style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0) attrs.x = attrX;
  if (attrY !== void 0) attrs.y = attrY;
  if (attrScale !== void 0) attrs.scale = attrScale;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
  ...createHtmlRenderState(),
  attrs: {}
});

// node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = tag => typeof tag === "string" && tag.toLowerCase() === "svg";

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, {
  style,
  vars
}, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, {
  layout: layout2,
  layoutId
}) {
  return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
  var _a;
  const {
    style
  } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== void 0) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
  const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
  for (const key in props) {
    if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
      const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
function updateSVGDimensions(instance, renderState) {
  try {
    renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
  } catch (e) {
    renderState.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
var layoutProps = ["x", "y", "width", "height", "cx", "cy", "r"];
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onUpdate: ({
      props,
      prevProps,
      current,
      renderState,
      latestValues
    }) => {
      if (!current) return;
      let hasTransform2 = !!props.drag;
      if (!hasTransform2) {
        for (const key in latestValues) {
          if (transformProps.has(key)) {
            hasTransform2 = true;
            break;
          }
        }
      }
      if (!hasTransform2) return;
      let needsMeasure = !prevProps;
      if (prevProps) {
        for (let i = 0; i < layoutProps.length; i++) {
          const key = layoutProps[i];
          if (props[key] !== prevProps[key]) {
            needsMeasure = true;
          }
        }
      }
      if (!needsMeasure) return;
      frame.read(() => {
        updateSVGDimensions(current, renderState);
        frame.render(() => {
          buildSVGAttrs(renderState, latestValues, isSVGTag(current.tagName), props.transformTemplate);
          renderSVG(current, renderState);
        });
      });
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react25 = require("react@18.3.1");
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({
  transformTemplate
}, visualState) {
  return (0, import_react25.useMemo)(() => {
    const state2 = createHtmlRenderState();
    buildHTMLStyles(state2, visualState, transformTemplate);
    return Object.assign({}, state2.vars, state2.style);
  }, [visualState]);
}
function useStyle(props, visualState) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState));
  return style;
}
function useHTMLProps(props, visualState) {
  const htmlProps = {};
  const style = useStyle(props, visualState);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
    htmlProps.tabIndex = 0;
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react26 = require("react@18.3.1");
function useSVGProps(props, visualState, _isStatic, Component3) {
  const visualProps = (0, import_react26.useMemo)(() => {
    const state2 = createSvgRenderState();
    buildSVGAttrs(state2, visualState, isSVGTag(Component3), props.transformTemplate);
    return {
      ...state2.attrs,
      style: {
        ...state2.style
      }
    };
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = {
      ...rawStyles,
      ...visualProps.style
    };
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react27 = require("react@18.3.1");
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component3, props, ref, {
    latestValues
  }, isStatic) => {
    const useVisualProps = isSVGComponent(Component3) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component3);
    const filteredProps = filterProps(props, typeof Component3 === "string", forwardMotionProps);
    const elementProps = Component3 !== import_react27.Fragment ? {
      ...filteredProps,
      ...visualProps,
      ref
    } : {};
    const {
      children
    } = props;
    const renderedChildren = (0, import_react27.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react27.createElement)(Component3, {
      ...elementProps,
      children: renderedChildren
    });
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/components/create-factory.mjs
function createMotionComponentFactory(preloadedFeatures, createVisualElement) {
  return function createMotionComponent2(Component3, {
    forwardMotionProps
  } = {
    forwardMotionProps: false
  }) {
    const baseConfig = isSVGComponent(Component3) ? svgMotionConfig : htmlMotionConfig;
    const config = {
      ...baseConfig,
      preloadedFeatures,
      useRender: createUseRender(forwardMotionProps),
      createVisualElement,
      Component: Component3
    };
    return createRendererMotionComponent(config);
  };
}

// node_modules/framer-motion/dist/es/render/components/m/create.mjs
var createMinimalMotionComponent = /* @__PURE__ */createMotionComponentFactory();

// node_modules/framer-motion/dist/es/render/components/m/proxy.mjs
var m = /* @__PURE__ */createDOMMotionComponentProxy(createMinimalMotionComponent);

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev)) return false;
  const prevLength = prev.length;
  if (prevLength !== next.length) return false;
  for (let i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i]) return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}

// node_modules/framer-motion/dist/es/render/html/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */new Set(["width", "height", "top", "left", "right", "bottom", ...transformPropOrder]);

// node_modules/framer-motion/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
  now = void 0;
}
var time = {
  now: () => {
    if (now === void 0) {
      time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
    }
    return now;
  },
  set: newTime => {
    now = newTime;
    queueMicrotask(clearTime);
  }
};

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}
function moveItem([...arr], fromIndex, toIndex) {
  const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  if (startIndex >= 0 && startIndex < arr.length) {
    const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
    const [item] = arr.splice(fromIndex, 1);
    arr.splice(endIndex, 0, item);
  }
  return arr;
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a, b, c) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions) return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a, b, c);
    } else {
      for (let i = 0; i < numSubscriptions; i++) {
        const handler = this.subscriptions[i];
        handler && handler(a, b, c);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/framer-motion/dist/es/value/index.mjs
var MAX_VELOCITY_DELTA = 30;
var isFloat = value => {
  return !isNaN(parseFloat(value));
};
var collectMotionValues = {
  current: void 0
};
var MotionValue = class {
  constructor(init, options = {}) {
    this.version = "11.18.2";
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = (v, render = true) => {
      const currentTime = time.now();
      if (this.updatedAt !== currentTime) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(v);
      if (this.current !== this.prev && this.events.change) {
        this.events.change.notify(this.current);
      }
      if (render && this.events.renderRequest) {
        this.events.renderRequest.notify(this.current);
      }
    };
    this.hasAnimated = false;
    this.setCurrent(init);
    this.owner = options.owner;
  }
  setCurrent(current) {
    this.current = current;
    this.updatedAt = time.now();
    if (this.canTrackVelocity === null && current !== void 0) {
      this.canTrackVelocity = isFloat(this.current);
    }
  }
  setPrevFrameValue(prevFrameValue = this.current) {
    this.prevFrameValue = prevFrameValue;
    this.prevUpdatedAt = this.updatedAt;
  }
  onChange(subscription) {
    if (true) {
      warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
    }
    return this.on("change", subscription);
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    const unsubscribe = this.events[eventName].add(callback);
    if (eventName === "change") {
      return () => {
        unsubscribe();
        frame.read(() => {
          if (!this.events.change.getSize()) {
            this.stop();
          }
        });
      };
    }
    return unsubscribe;
  }
  clearListeners() {
    for (const eventManagers in this.events) {
      this.events[eventManagers].clear();
    }
  }
  attach(passiveEffect, stopPassiveEffect) {
    this.passiveEffect = passiveEffect;
    this.stopPassiveEffect = stopPassiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  setWithVelocity(prev, current, delta) {
    this.set(current);
    this.prev = void 0;
    this.prevFrameValue = prev;
    this.prevUpdatedAt = this.updatedAt - delta;
  }
  jump(v, endAnimation = true) {
    this.updateAndNotify(v);
    this.prev = v;
    this.prevUpdatedAt = this.prevFrameValue = void 0;
    endAnimation && this.stop();
    if (this.stopPassiveEffect) this.stopPassiveEffect();
  }
  get() {
    if (collectMotionValues.current) {
      collectMotionValues.current.push(this);
    }
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const currentTime = time.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
      return 0;
    }
    const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
    return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
  }
  start(startAnimation) {
    this.stop();
    return new Promise(resolve => {
      this.hasAnimated = true;
      this.animation = startAnimation(resolve);
      if (this.events.animationStart) {
        this.events.animationStart.notify();
      }
    }).then(() => {
      if (this.events.animationComplete) {
        this.events.animationComplete.notify();
      }
      this.clearAnimation();
    });
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      if (this.events.animationCancel) {
        this.events.animationCancel.notify();
      }
    }
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners();
    this.stop();
    if (this.stopPassiveEffect) {
      this.stopPassiveEffect();
    }
  }
};
function motionValue(init, options) {
  return new MotionValue(init, options);
}

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let {
    transitionEnd = {},
    transition = {},
    ...target
  } = resolved || {};
  target = {
    ...target,
    ...transitionEnd
  };
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}

// node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
  const willChange = visualElement.getValue("willChange");
  if (isWillChangeMotionValue(willChange)) {
    return willChange.add(key);
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
  return visualElement.props[optimizedAppearDataAttribute];
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/easing/cubic-bezier.mjs
var import_motion_utils3 = require("motion-utils@11.18.1");
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = lowerBound + (upperBound - lowerBound) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - x;
    if (currentX > 0) {
      upperBound = currentT;
    } else {
      lowerBound = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2) return import_motion_utils3.noop;
  const getTForX = aX => binarySubdivide(aX, 0, 1, mX1, mX2);
  return t => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = easing => p => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

// node_modules/framer-motion/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = easing => p => 1 - easing(1 - p);

// node_modules/framer-motion/dist/es/easing/back.mjs
var backOut = /* @__PURE__ */cubicBezier(0.33, 1.53, 0.69, 0.99);
var backIn = /* @__PURE__ */reverseEasing(backOut);
var backInOut = /* @__PURE__ */mirrorEasing(backIn);

// node_modules/framer-motion/dist/es/easing/anticipate.mjs
var anticipate = p => (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

// node_modules/framer-motion/dist/es/easing/circ.mjs
var circIn = p => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circIn);

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = v => /^0[^.\s]+$/u.test(v);

// node_modules/framer-motion/dist/es/animation/utils/is-none.mjs
function isNone(value) {
  if (typeof value === "number") {
    return value === 0;
  } else if (value !== null) {
    return value === "none" || value === "0" || isZeroValueString(value);
  } else {
    return true;
  }
}

// node_modules/framer-motion/dist/es/value/types/utils/sanitize.mjs
var sanitize = v => Math.round(v * 1e5) / 1e5;

// node_modules/framer-motion/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

// node_modules/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
  return v == null;
}

// node_modules/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

// node_modules/framer-motion/dist/es/value/types/color/utils.mjs
var isColorString = (type, testProp) => v => {
  return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => v => {
  if (typeof v !== "string") return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/framer-motion/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = v => clamp(0, 255, v);
var rgbUnit = {
  ...number,
  transform: v => Math.round(clampRgbUnit(v))
};
var rgba = {
  test: /* @__PURE__ */isColorString("rgb", "red"),
  parse: /* @__PURE__ */splitColor("red", "green", "blue"),
  transform: ({
    red,
    green,
    blue,
    alpha: alpha$1 = 1
  }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/framer-motion/dist/es/value/types/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substring(1, 3);
    g = v.substring(3, 5);
    b = v.substring(5, 7);
    a = v.substring(7, 9);
  } else {
    r = v.substring(1, 2);
    g = v.substring(2, 3);
    b = v.substring(3, 4);
    a = v.substring(4, 5);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: /* @__PURE__ */isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/framer-motion/dist/es/value/types/color/hsla.mjs
var hsla = {
  test: /* @__PURE__ */isColorString("hsl", "hue"),
  parse: /* @__PURE__ */splitColor("hue", "saturation", "lightness"),
  transform: ({
    hue,
    saturation,
    lightness,
    alpha: alpha$1 = 1
  }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/framer-motion/dist/es/value/types/color/index.mjs
var color = {
  test: v => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: v => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: v => {
    return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/framer-motion/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

// node_modules/framer-motion/dist/es/value/types/complex/index.mjs
function test(v) {
  var _a, _b;
  return isNaN(v) && typeof v === "string" && (((_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match(colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
  const originalValue = value.toString();
  const values = [];
  const indexes = {
    color: [],
    number: [],
    var: []
  };
  const types = [];
  let i = 0;
  const tokenised = originalValue.replace(complexRegex, parsedValue => {
    if (color.test(parsedValue)) {
      indexes.color.push(i);
      types.push(COLOR_TOKEN);
      values.push(color.parse(parsedValue));
    } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
      indexes.var.push(i);
      types.push(VAR_TOKEN);
      values.push(parsedValue);
    } else {
      indexes.number.push(i);
      types.push(NUMBER_TOKEN);
      values.push(parseFloat(parsedValue));
    }
    ++i;
    return SPLIT_TOKEN;
  });
  const split = tokenised.split(SPLIT_TOKEN);
  return {
    values,
    split,
    indexes,
    types
  };
}
function parseComplexValue(v) {
  return analyseComplexValue(v).values;
}
function createTransformer(source) {
  const {
    split,
    types
  } = analyseComplexValue(source);
  const numSections = split.length;
  return v => {
    let output = "";
    for (let i = 0; i < numSections; i++) {
      output += split[i];
      if (v[i] !== void 0) {
        const type = types[i];
        if (type === NUMBER_TOKEN) {
          output += sanitize(v[i]);
        } else if (type === COLOR_TOKEN) {
          output += color.transform(v[i]);
        } else {
          output += v[i];
        }
      }
    }
    return output;
  };
}
var convertNumbersToZero = v => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parseComplexValue(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = {
  test,
  parse: parseComplexValue,
  createTransformer,
  getAnimatableNone
};

// node_modules/framer-motion/dist/es/value/types/complex/filter.mjs
var maxDefaults = /* @__PURE__ */new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  const [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow") return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2) return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value) defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
  ...complex,
  getAnimatableNone: v => {
    const functions = v.match(functionRegex);
    return functions ? functions.map(applyDefaultFilter).join(" ") : v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = {
  ...numberValueTypes,
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
};
var getDefaultValueType = key => defaultValueTypes[key];

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter) defaultValueType = complex;
  return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

// node_modules/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var invalidTemplates = /* @__PURE__ */new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
  let i = 0;
  let animatableTemplate = void 0;
  while (i < unresolvedKeyframes.length && !animatableTemplate) {
    const keyframe = unresolvedKeyframes[i];
    if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
      animatableTemplate = unresolvedKeyframes[i];
    }
    i++;
  }
  if (animatableTemplate && name) {
    for (const noneIndex of noneKeyframeIndexes) {
      unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
    }
  }
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var isNumOrPxType = v => v === number || v === px;
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, {
  transform: transform2
}) => {
  if (transform2 === "none" || !transform2) return 0;
  const matrix3d = transform2.match(/^matrix3d\((.+)\)$/u);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform2.match(/^matrix\((.+)\)$/u);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter(key => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach(key => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  return removedTransforms;
}
var positionalValues = {
  width: ({
    x
  }, {
    paddingLeft = "0",
    paddingRight = "0"
  }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({
    y
  }, {
    paddingTop = "0",
    paddingBottom = "0"
  }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, {
    top
  }) => parseFloat(top),
  left: (_bbox, {
    left
  }) => parseFloat(left),
  bottom: ({
    y
  }, {
    top
  }) => parseFloat(top) + (y.max - y.min),
  right: ({
    x
  }, {
    left
  }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

// node_modules/framer-motion/dist/es/render/utils/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
function measureAllKeyframes() {
  if (anyNeedsMeasurement) {
    const resolversToMeasure = Array.from(toResolve).filter(resolver => resolver.needsMeasurement);
    const elementsToMeasure = new Set(resolversToMeasure.map(resolver => resolver.element));
    const transformsToRestore = /* @__PURE__ */new Map();
    elementsToMeasure.forEach(element => {
      const removedTransforms = removeNonTranslationalTransform(element);
      if (!removedTransforms.length) return;
      transformsToRestore.set(element, removedTransforms);
      element.render();
    });
    resolversToMeasure.forEach(resolver => resolver.measureInitialState());
    elementsToMeasure.forEach(element => {
      element.render();
      const restore = transformsToRestore.get(element);
      if (restore) {
        restore.forEach(([key, value]) => {
          var _a;
          (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
        });
      }
    });
    resolversToMeasure.forEach(resolver => resolver.measureEndState());
    resolversToMeasure.forEach(resolver => {
      if (resolver.suspendedScrollY !== void 0) {
        window.scrollTo(0, resolver.suspendedScrollY);
      }
    });
  }
  anyNeedsMeasurement = false;
  isScheduled = false;
  toResolve.forEach(resolver => resolver.complete());
  toResolve.clear();
}
function readAllKeyframes() {
  toResolve.forEach(resolver => {
    resolver.readKeyframes();
    if (resolver.needsMeasurement) {
      anyNeedsMeasurement = true;
    }
  });
}
function flushKeyframeResolvers() {
  readAllKeyframes();
  measureAllKeyframes();
}
var KeyframeResolver = class {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
    this.isComplete = false;
    this.isAsync = false;
    this.needsMeasurement = false;
    this.isScheduled = false;
    this.unresolvedKeyframes = [...unresolvedKeyframes];
    this.onComplete = onComplete;
    this.name = name;
    this.motionValue = motionValue2;
    this.element = element;
    this.isAsync = isAsync;
  }
  scheduleResolve() {
    this.isScheduled = true;
    if (this.isAsync) {
      toResolve.add(this);
      if (!isScheduled) {
        isScheduled = true;
        frame.read(readAllKeyframes);
        frame.resolveKeyframes(measureAllKeyframes);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    const {
      unresolvedKeyframes,
      name,
      element,
      motionValue: motionValue2
    } = this;
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (unresolvedKeyframes[i] === null) {
        if (i === 0) {
          const currentValue = motionValue2 === null || motionValue2 === void 0 ? void 0 : motionValue2.get();
          const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
          if (currentValue !== void 0) {
            unresolvedKeyframes[0] = currentValue;
          } else if (element && name) {
            const valueAsRead = element.readValue(name, finalKeyframe);
            if (valueAsRead !== void 0 && valueAsRead !== null) {
              unresolvedKeyframes[0] = valueAsRead;
            }
          }
          if (unresolvedKeyframes[0] === void 0) {
            unresolvedKeyframes[0] = finalKeyframe;
          }
          if (motionValue2 && currentValue === void 0) {
            motionValue2.set(unresolvedKeyframes[0]);
          }
        } else {
          unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
      }
    }
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    this.isComplete = true;
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
    toResolve.delete(this);
  }
  cancel() {
    if (!this.isComplete) {
      this.isScheduled = false;
      toResolve.delete(this);
    }
  }
  resume() {
    if (!this.isComplete) this.scheduleResolve();
  }
};

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = v => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
var import_motion_utils4 = require("motion-utils@11.18.1");
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
  const match = splitCSSVariableRegex.exec(current);
  if (!match) return [,];
  const [, token1, token2, fallback] = match;
  return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  (0, import_motion_utils4.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token) return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    const trimmed = resolved.trim();
    return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
  }
  return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = v => type => type.test(v);

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: v => v === "auto",
  parse: v => v
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = v => dimensionValueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
  constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
    super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
  }
  readKeyframes() {
    const {
      unresolvedKeyframes,
      element,
      name
    } = this;
    if (!element || !element.current) return;
    super.readKeyframes();
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      let keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string") {
        keyframe = keyframe.trim();
        if (isCSSVariableToken(keyframe)) {
          const resolved = getVariableValue(keyframe, element.current);
          if (resolved !== void 0) {
            unresolvedKeyframes[i] = resolved;
          }
          if (i === unresolvedKeyframes.length - 1) {
            this.finalKeyframe = keyframe;
          }
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
      return;
    }
    const [origin, target] = unresolvedKeyframes;
    const originType = findDimensionValueType(origin);
    const targetType = findDimensionValueType(target);
    if (originType === targetType) return;
    if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        const value = unresolvedKeyframes[i];
        if (typeof value === "string") {
          unresolvedKeyframes[i] = parseFloat(value);
        }
      }
    } else {
      this.needsMeasurement = true;
    }
  }
  resolveNoneKeyframes() {
    const {
      unresolvedKeyframes,
      name
    } = this;
    const noneKeyframeIndexes = [];
    for (let i = 0; i < unresolvedKeyframes.length; i++) {
      if (isNone(unresolvedKeyframes[i])) {
        noneKeyframeIndexes.push(i);
      }
    }
    if (noneKeyframeIndexes.length) {
      makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
  }
  measureInitialState() {
    const {
      element,
      unresolvedKeyframes,
      name
    } = this;
    if (!element || !element.current) return;
    if (name === "height") {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    unresolvedKeyframes[0] = this.measuredOrigin;
    const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
    if (measureKeyframe !== void 0) {
      element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
  }
  measureEndState() {
    var _a;
    const {
      element,
      name,
      unresolvedKeyframes
    } = this;
    if (!element || !element.current) return;
    const value = element.getValue(name);
    value && value.jump(this.measuredOrigin, false);
    const finalKeyframeIndex = unresolvedKeyframes.length - 1;
    const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
    unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
    if (finalKeyframe !== null && this.finalKeyframe === void 0) {
      this.finalKeyframe = finalKeyframe;
    }
    if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
      this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
        element.getValue(unsetTransformName).set(unsetTransformValue);
      });
    }
    this.resolveNoneKeyframes();
  }
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (value, name) => {
  if (name === "zIndex") return false;
  if (typeof value === "number" || Array.isArray(value)) return true;
  if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
var import_motion_dom = require("motion-dom@11.18.1");
var import_motion_utils5 = require("motion-utils@11.18.1");
function hasKeyframesChanged(keyframes2) {
  const current = keyframes2[0];
  if (keyframes2.length === 1) return true;
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] !== current) return true;
  }
}
function canAnimate(keyframes2, name, type, velocity) {
  const originKeyframe = keyframes2[0];
  if (originKeyframe === null) return false;
  if (name === "display" || name === "visibility") return true;
  const targetKeyframe = keyframes2[keyframes2.length - 1];
  const isOriginAnimatable = isAnimatable(originKeyframe, name);
  const isTargetAnimatable = isAnimatable(targetKeyframe, name);
  (0, import_motion_utils5.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
  if (!isOriginAnimatable || !isTargetAnimatable) {
    return false;
  }
  return hasKeyframesChanged(keyframes2) || (type === "spring" || (0, import_motion_dom.isGenerator)(type)) && velocity;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var isNotNull = value => value !== null;
function getFinalKeyframe(keyframes2, {
  repeat,
  repeatType = "loop"
}, finalKeyframe) {
  const resolvedKeyframes = keyframes2.filter(isNotNull);
  const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
  return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}

// node_modules/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var MAX_RESOLVE_DELAY = 40;
var BaseAnimation = class {
  constructor({
    autoplay = true,
    delay: delay2 = 0,
    type = "keyframes",
    repeat = 0,
    repeatDelay = 0,
    repeatType = "loop",
    ...options
  }) {
    this.isStopped = false;
    this.hasAttemptedResolve = false;
    this.createdAt = time.now();
    this.options = {
      autoplay,
      delay: delay2,
      type,
      repeat,
      repeatDelay,
      repeatType,
      ...options
    };
    this.updateFinishedPromise();
  }
  calcStartTime() {
    if (!this.resolvedAt) return this.createdAt;
    return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
  }
  get resolved() {
    if (!this._resolved && !this.hasAttemptedResolve) {
      flushKeyframeResolvers();
    }
    return this._resolved;
  }
  onKeyframesResolved(keyframes2, finalKeyframe) {
    this.resolvedAt = time.now();
    this.hasAttemptedResolve = true;
    const {
      name,
      type,
      velocity,
      delay: delay2,
      onComplete,
      onUpdate,
      isGenerator: isGenerator6
    } = this.options;
    if (!isGenerator6 && !canAnimate(keyframes2, name, type, velocity)) {
      if (instantAnimationState.current || !delay2) {
        onUpdate && onUpdate(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.resolveFinishedPromise();
        return;
      } else {
        this.options.duration = 0;
      }
    }
    const resolvedAnimation = this.initPlayback(keyframes2, finalKeyframe);
    if (resolvedAnimation === false) return;
    this._resolved = {
      keyframes: keyframes2,
      finalKeyframe,
      ...resolvedAnimation
    };
    this.onPostResolved();
  }
  onPostResolved() {}
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  flatten() {
    this.options.type = "keyframes";
    this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(resolve => {
      this.resolveFinishedPromise = resolve;
    });
  }
};

// node_modules/framer-motion/dist/es/utils/mix/number.mjs
var mixNumber = (from, to, progress8) => {
  return from + (to - from) * progress8;
};

// node_modules/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({
  hue,
  saturation,
  lightness,
  alpha: alpha2
}) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/framer-motion/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
  return p => p > 0 ? b : a;
}

// node_modules/framer-motion/dist/es/utils/mix/color.mjs
var import_motion_utils6 = require("motion-utils@11.18.1");
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const expo = v * (to * to - fromExpo) + fromExpo;
  return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [hex, rgba, hsla];
var getColorType = v => colorTypes.find(type => type.test(v));
function asRGBA(color2) {
  const type = getColorType(color2);
  (0, import_motion_utils6.warning)(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`);
  if (!Boolean(type)) return false;
  let model = type.parse(color2);
  if (type === hsla) {
    model = hslaToRgba(model);
  }
  return model;
}
var mixColor = (from, to) => {
  const fromRGBA = asRGBA(from);
  const toRGBA = asRGBA(to);
  if (!fromRGBA || !toRGBA) {
    return mixImmediate(from, to);
  }
  const blended = {
    ...fromRGBA
  };
  return v => {
    blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
    blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
    blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
    blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
    return rgba.transform(blended);
  };
};

// node_modules/framer-motion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => v => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/framer-motion/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */new Set(["none", "hidden"]);
function mixVisibility(origin, target) {
  if (invisibleValues.has(origin)) {
    return p => p <= 0 ? origin : target;
  } else {
    return p => p >= 1 ? target : origin;
  }
}

// node_modules/framer-motion/dist/es/utils/mix/complex.mjs
var import_motion_utils7 = require("motion-utils@11.18.1");
function mixNumber2(a, b) {
  return p => mixNumber(a, b, p);
}
function getMixer(a) {
  if (typeof a === "number") {
    return mixNumber2;
  } else if (typeof a === "string") {
    return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
  } else if (Array.isArray(a)) {
    return mixArray;
  } else if (typeof a === "object") {
    return color.test(a) ? mixColor : mixObject;
  }
  return mixImmediate;
}
function mixArray(a, b) {
  const output = [...a];
  const numValues = output.length;
  const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
  return p => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](p);
    }
    return output;
  };
}
function mixObject(a, b) {
  const output = {
    ...a,
    ...b
  };
  const blendValue = {};
  for (const key in output) {
    if (a[key] !== void 0 && b[key] !== void 0) {
      blendValue[key] = getMixer(a[key])(a[key], b[key]);
    }
  }
  return v => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
}
function matchOrder(origin, target) {
  var _a;
  const orderedOrigin = [];
  const pointers = {
    color: 0,
    var: 0,
    number: 0
  };
  for (let i = 0; i < target.values.length; i++) {
    const type = target.types[i];
    const originIndex = origin.indexes[type][pointers[type]];
    const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
    orderedOrigin[i] = originValue;
    pointers[type]++;
  }
  return orderedOrigin;
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyseComplexValue(origin);
  const targetStats = analyseComplexValue(target);
  const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
  if (canInterpolate) {
    if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
      return mixVisibility(origin, target);
    }
    return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
  } else {
    (0, import_motion_utils7.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return mixImmediate(origin, target);
  }
};

// node_modules/framer-motion/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
  if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
    return mixNumber(from, to, p);
  }
  const mixer = getMixer(from);
  return mixer(from, to);
}

// node_modules/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
  const prevT = Math.max(t - velocitySampleDuration, 0);
  return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/defaults.mjs
var springDefaults = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1
};

// node_modules/framer-motion/dist/es/animation/generators/spring/find.mjs
var import_motion_utils8 = require("motion-utils@11.18.1");
var safeMin = 1e-3;
function findSpring({
  duration = springDefaults.duration,
  bounce = springDefaults.bounce,
  velocity = springDefaults.velocity,
  mass = springDefaults.mass
}) {
  let envelope;
  let derivative;
  (0, import_motion_utils8.warning)(duration <= (0, import_motion_utils8.secondsToMilliseconds)(springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
  duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, (0, import_motion_utils8.millisecondsToSeconds)(duration));
  if (dampingRatio < 1) {
    envelope = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = undampedFreq2 => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = undampedFreq2 => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = (0, import_motion_utils8.secondsToMilliseconds)(duration);
  if (isNaN(undampedFreq)) {
    return {
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/framer-motion/dist/es/animation/generators/spring/index.mjs
var import_motion_dom2 = require("motion-dom@11.18.1");
var import_motion_utils9 = require("motion-utils@11.18.1");
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some(key => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = {
    velocity: springDefaults.velocity,
    stiffness: springDefaults.stiffness,
    damping: springDefaults.damping,
    mass: springDefaults.mass,
    isResolvedFromDuration: false,
    ...options
  };
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    if (options.visualDuration) {
      const visualDuration = options.visualDuration;
      const root = 2 * Math.PI / (visualDuration * 1.2);
      const stiffness = root * root;
      const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
      springOptions = {
        ...springOptions,
        mass: springDefaults.mass,
        stiffness,
        damping
      };
    } else {
      const derived = findSpring(options);
      springOptions = {
        ...springOptions,
        ...derived,
        mass: springDefaults.mass
      };
      springOptions.isResolvedFromDuration = true;
    }
  }
  return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
  const options = typeof optionsOrVisualDuration !== "object" ? {
    visualDuration: optionsOrVisualDuration,
    keyframes: [0, 1],
    bounce
  } : optionsOrVisualDuration;
  let {
    restSpeed,
    restDelta
  } = options;
  const origin = options.keyframes[0];
  const target = options.keyframes[options.keyframes.length - 1];
  const state2 = {
    done: false,
    value: origin
  };
  const {
    stiffness,
    damping,
    mass,
    duration,
    velocity,
    isResolvedFromDuration
  } = getSpringOptions({
    ...options,
    velocity: -(0, import_motion_utils9.millisecondsToSeconds)(options.velocity || 0)
  });
  const initialVelocity = velocity || 0;
  const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
  const initialDelta = target - origin;
  const undampedAngularFreq = (0, import_motion_utils9.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
  const isGranularScale = Math.abs(initialDelta) < 5;
  restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
  restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
  let resolveSpring;
  if (dampingRatio < 1) {
    const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
    };
  } else if (dampingRatio === 1) {
    resolveSpring = t => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
  } else {
    const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
    resolveSpring = t => {
      const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
      const freqForT = Math.min(dampedAngularFreq * t, 300);
      return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
    };
  }
  const generator = {
    calculatedDuration: isResolvedFromDuration ? duration || null : null,
    next: t => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        let currentVelocity = 0;
        if (dampingRatio < 1) {
          currentVelocity = t === 0 ? (0, import_motion_utils9.secondsToMilliseconds)(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
        }
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
        state2.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state2.done = t >= duration;
      }
      state2.value = state2.done ? target : current;
      return state2;
    },
    toString: () => {
      const calculatedDuration = Math.min((0, import_motion_dom2.calcGeneratorDuration)(generator), import_motion_dom2.maxGeneratorDuration);
      const easing = (0, import_motion_dom2.generateLinearEasing)(progress8 => generator.next(calculatedDuration * progress8).value, calculatedDuration, 30);
      return calculatedDuration + "ms " + easing;
    }
  };
  return generator;
}

// node_modules/framer-motion/dist/es/animation/generators/inertia.mjs
function inertia({
  keyframes: keyframes2,
  velocity = 0,
  power = 0.8,
  timeConstant = 325,
  bounceDamping = 10,
  bounceStiffness = 500,
  modifyTarget,
  min,
  max,
  restDelta = 0.5,
  restSpeed
}) {
  const origin = keyframes2[0];
  const state2 = {
    done: false,
    value: origin
  };
  const isOutOfBounds = v => min !== void 0 && v < min || max !== void 0 && v > max;
  const nearestBoundary = v => {
    if (min === void 0) return max;
    if (max === void 0) return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  };
  let amplitude = power * velocity;
  const ideal = origin + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal) amplitude = target - origin;
  const calcDelta = t => -amplitude * Math.exp(-t / timeConstant);
  const calcLatest = t => target + calcDelta(t);
  const applyFriction = t => {
    const delta = calcDelta(t);
    const latest = calcLatest(t);
    state2.done = Math.abs(delta) <= restDelta;
    state2.value = state2.done ? target : latest;
  };
  let timeReachedBoundary;
  let spring$1;
  const checkCatchBoundary = t => {
    if (!isOutOfBounds(state2.value)) return;
    timeReachedBoundary = t;
    spring$1 = spring({
      keyframes: [state2.value, nearestBoundary(state2.value)],
      velocity: calcGeneratorVelocity(calcLatest, t, state2.value),
      damping: bounceDamping,
      stiffness: bounceStiffness,
      restDelta,
      restSpeed
    });
  };
  checkCatchBoundary(0);
  return {
    calculatedDuration: null,
    next: t => {
      let hasUpdatedFrame = false;
      if (!spring$1 && timeReachedBoundary === void 0) {
        hasUpdatedFrame = true;
        applyFriction(t);
        checkCatchBoundary(t);
      }
      if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
        return spring$1.next(t - timeReachedBoundary);
      } else {
        !hasUpdatedFrame && applyFriction(t);
        return state2;
      }
    }
  };
}

// node_modules/framer-motion/dist/es/easing/ease.mjs
var easeIn = /* @__PURE__ */cubicBezier(0.42, 0, 1, 1);
var easeOut = /* @__PURE__ */cubicBezier(0, 0, 0.58, 1);
var easeInOut = /* @__PURE__ */cubicBezier(0.42, 0, 0.58, 1);

// node_modules/framer-motion/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = ease2 => {
  return Array.isArray(ease2) && typeof ease2[0] !== "number";
};

// node_modules/framer-motion/dist/es/easing/utils/map.mjs
var import_motion_dom3 = require("motion-dom@11.18.1");
var import_motion_utils10 = require("motion-utils@11.18.1");
var easingLookup = {
  linear: import_motion_utils10.noop,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate
};
var easingDefinitionToFunction = definition => {
  if ((0, import_motion_dom3.isBezierDefinition)(definition)) {
    (0, import_motion_utils10.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    (0, import_motion_utils10.invariant)(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};

// node_modules/framer-motion/dist/es/utils/interpolate.mjs
var import_motion_utils11 = require("motion-utils@11.18.1");
function createMixers(output, ease2, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || mix;
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease2) {
      const easingFunction = Array.isArray(ease2) ? ease2[i] || import_motion_utils11.noop : ease2;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function interpolate(input, output, {
  clamp: isClamp = true,
  ease: ease2,
  mixer
} = {}) {
  const inputLength = input.length;
  (0, import_motion_utils11.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
  if (inputLength === 1) return () => output[0];
  if (inputLength === 2 && output[0] === output[1]) return () => output[1];
  const isZeroDeltaRange = input[0] === input[1];
  if (input[0] > input[inputLength - 1]) {
    input = [...input].reverse();
    output = [...output].reverse();
  }
  const mixers = createMixers(output, ease2, mixer);
  const numMixers = mixers.length;
  const interpolator = v => {
    if (isZeroDeltaRange && v < input[0]) return output[0];
    let i = 0;
    if (numMixers > 1) {
      for (; i < input.length - 2; i++) {
        if (v < input[i + 1]) break;
      }
    }
    const progressInRange = (0, import_motion_utils11.progress)(input[i], input[i + 1], v);
    return mixers[i](progressInRange);
  };
  return isClamp ? v => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/framer-motion/dist/es/utils/offsets/fill.mjs
var import_motion_utils12 = require("motion-utils@11.18.1");
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i = 1; i <= remaining; i++) {
    const offsetProgress = (0, import_motion_utils12.progress)(0, remaining, i);
    offset.push(mixNumber(min, 1, offsetProgress));
  }
}

// node_modules/framer-motion/dist/es/utils/offsets/default.mjs
function defaultOffset(arr) {
  const offset = [0];
  fillOffset(offset, arr.length - 1);
  return offset;
}

// node_modules/framer-motion/dist/es/utils/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
  return offset.map(o => o * duration);
}

// node_modules/framer-motion/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({
  duration = 300,
  keyframes: keyframeValues,
  times,
  ease: ease2 = "easeInOut"
}) {
  const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
  const state2 = {
    done: false,
    value: keyframeValues[0]
  };
  const absoluteTimes = convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
  const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
    ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
  });
  return {
    calculatedDuration: duration,
    next: t => {
      state2.value = mapTimeToKeyframe(t);
      state2.done = t >= duration;
      return state2;
    }
  };
}

// node_modules/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var frameloopDriver = update => {
  const passTimestamp = ({
    timestamp
  }) => update(timestamp);
  return {
    start: () => frame.update(passTimestamp, true),
    stop: () => cancelFrame(passTimestamp),
    now: () => frameData.isProcessing ? frameData.timestamp : time.now()
  };
};

// node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs
var import_motion_dom4 = require("motion-dom@11.18.1");
var import_motion_utils13 = require("motion-utils@11.18.1");
var generators = {
  decay: inertia,
  inertia,
  tween: keyframes,
  keyframes,
  spring
};
var percentToProgress = percent2 => percent2 / 100;
var MainThreadAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    this.holdTime = null;
    this.cancelTime = null;
    this.currentTime = 0;
    this.playbackSpeed = 1;
    this.pendingPlayState = "running";
    this.startTime = null;
    this.state = "idle";
    this.stop = () => {
      this.resolver.cancel();
      this.isStopped = true;
      if (this.state === "idle") return;
      this.teardown();
      const {
        onStop
      } = this.options;
      onStop && onStop();
    };
    const {
      name,
      motionValue: motionValue2,
      element,
      keyframes: keyframes2
    } = this.options;
    const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || KeyframeResolver;
    const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
    this.resolver = new KeyframeResolver$1(keyframes2, onResolved, name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten();
    if (this._resolved) {
      Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
  }
  initPlayback(keyframes$1) {
    const {
      type = "keyframes",
      repeat = 0,
      repeatDelay = 0,
      repeatType,
      velocity = 0
    } = this.options;
    const generatorFactory = (0, import_motion_dom4.isGenerator)(type) ? type : generators[type] || keyframes;
    let mapPercentToKeyframes;
    let mirroredGenerator;
    if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
      if (true) {
        (0, import_motion_utils13.invariant)(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
      }
      mapPercentToKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
      keyframes$1 = [0, 100];
    }
    const generator = generatorFactory({
      ...this.options,
      keyframes: keyframes$1
    });
    if (repeatType === "mirror") {
      mirroredGenerator = generatorFactory({
        ...this.options,
        keyframes: [...keyframes$1].reverse(),
        velocity: -velocity
      });
    }
    if (generator.calculatedDuration === null) {
      generator.calculatedDuration = (0, import_motion_dom4.calcGeneratorDuration)(generator);
    }
    const {
      calculatedDuration
    } = generator;
    const resolvedDuration = calculatedDuration + repeatDelay;
    const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
    return {
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      calculatedDuration,
      resolvedDuration,
      totalDuration
    };
  }
  onPostResolved() {
    const {
      autoplay = true
    } = this.options;
    this.play();
    if (this.pendingPlayState === "paused" || !autoplay) {
      this.pause();
    } else {
      this.state = this.pendingPlayState;
    }
  }
  tick(timestamp, sample = false) {
    const {
      resolved
    } = this;
    if (!resolved) {
      const {
        keyframes: keyframes3
      } = this.options;
      return {
        done: true,
        value: keyframes3[keyframes3.length - 1]
      };
    }
    const {
      finalKeyframe,
      generator,
      mirroredGenerator,
      mapPercentToKeyframes,
      keyframes: keyframes2,
      calculatedDuration,
      totalDuration,
      resolvedDuration
    } = resolved;
    if (this.startTime === null) return generator.next(0);
    const {
      delay: delay2,
      repeat,
      repeatType,
      repeatDelay,
      onUpdate
    } = this.options;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, timestamp);
    } else if (this.speed < 0) {
      this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
    }
    if (sample) {
      this.currentTime = timestamp;
    } else if (this.holdTime !== null) {
      this.currentTime = this.holdTime;
    } else {
      this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
    }
    const timeWithoutDelay = this.currentTime - delay2 * (this.speed >= 0 ? 1 : -1);
    const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
    this.currentTime = Math.max(timeWithoutDelay, 0);
    if (this.state === "finished" && this.holdTime === null) {
      this.currentTime = totalDuration;
    }
    let elapsed = this.currentTime;
    let frameGenerator = generator;
    if (repeat) {
      const progress8 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
      let currentIteration = Math.floor(progress8);
      let iterationProgress = progress8 % 1;
      if (!iterationProgress && progress8 >= 1) {
        iterationProgress = 1;
      }
      iterationProgress === 1 && currentIteration--;
      currentIteration = Math.min(currentIteration, repeat + 1);
      const isOddIteration = Boolean(currentIteration % 2);
      if (isOddIteration) {
        if (repeatType === "reverse") {
          iterationProgress = 1 - iterationProgress;
          if (repeatDelay) {
            iterationProgress -= repeatDelay / resolvedDuration;
          }
        } else if (repeatType === "mirror") {
          frameGenerator = mirroredGenerator;
        }
      }
      elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
    }
    const state2 = isInDelayPhase ? {
      done: false,
      value: keyframes2[0]
    } : frameGenerator.next(elapsed);
    if (mapPercentToKeyframes) {
      state2.value = mapPercentToKeyframes(state2.value);
    }
    let {
      done
    } = state2;
    if (!isInDelayPhase && calculatedDuration !== null) {
      done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
    }
    const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
    if (isAnimationFinished && finalKeyframe !== void 0) {
      state2.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe);
    }
    if (onUpdate) {
      onUpdate(state2.value);
    }
    if (isAnimationFinished) {
      this.finish();
    }
    return state2;
  }
  get duration() {
    const {
      resolved
    } = this;
    return resolved ? (0, import_motion_utils13.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
  }
  get time() {
    return (0, import_motion_utils13.millisecondsToSeconds)(this.currentTime);
  }
  set time(newTime) {
    newTime = (0, import_motion_utils13.secondsToMilliseconds)(newTime);
    this.currentTime = newTime;
    if (this.holdTime !== null || this.speed === 0) {
      this.holdTime = newTime;
    } else if (this.driver) {
      this.startTime = this.driver.now() - newTime / this.speed;
    }
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(newSpeed) {
    const hasChanged = this.playbackSpeed !== newSpeed;
    this.playbackSpeed = newSpeed;
    if (hasChanged) {
      this.time = (0, import_motion_utils13.millisecondsToSeconds)(this.currentTime);
    }
  }
  play() {
    if (!this.resolver.isScheduled) {
      this.resolver.resume();
    }
    if (!this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const {
      driver = frameloopDriver,
      onPlay,
      startTime
    } = this.options;
    if (!this.driver) {
      this.driver = driver(timestamp => this.tick(timestamp));
    }
    onPlay && onPlay();
    const now2 = this.driver.now();
    if (this.holdTime !== null) {
      this.startTime = now2 - this.holdTime;
    } else if (!this.startTime) {
      this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    } else if (this.state === "finished") {
      this.startTime = now2;
    }
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    this.cancelTime = this.startTime;
    this.holdTime = null;
    this.state = "running";
    this.driver.start();
  }
  pause() {
    var _a;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused";
    this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
  }
  complete() {
    if (this.state !== "running") {
      this.play();
    }
    this.pendingPlayState = this.state = "finished";
    this.holdTime = null;
  }
  finish() {
    this.teardown();
    this.state = "finished";
    const {
      onComplete
    } = this.options;
    onComplete && onComplete();
  }
  cancel() {
    if (this.cancelTime !== null) {
      this.tick(this.cancelTime);
    }
    this.teardown();
    this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle";
    this.stopDriver();
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    this.startTime = this.cancelTime = null;
    this.resolver.cancel();
  }
  stopDriver() {
    if (!this.driver) return;
    this.driver.stop();
    this.driver = void 0;
  }
  sample(time2) {
    this.startTime = 0;
    return this.tick(time2, true);
  }
};
function animateValue(options) {
  return new MainThreadAnimation(options);
}

// node_modules/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs
var acceleratedValues = /* @__PURE__ */new Set(["opacity", "clipPath", "filter", "transform"]);

// node_modules/framer-motion/dist/es/animation/animators/waapi/index.mjs
var import_motion_dom5 = require("motion-dom@11.18.1");
function startWaapiAnimation(element, valueName, keyframes2, {
  delay: delay2 = 0,
  duration = 300,
  repeat = 0,
  repeatType = "loop",
  ease: ease2 = "easeInOut",
  times
} = {}) {
  const keyframeOptions = {
    [valueName]: keyframes2
  };
  if (times) keyframeOptions.offset = times;
  const easing = (0, import_motion_dom5.mapEasingToNativeEasing)(ease2, duration);
  if (Array.isArray(easing)) keyframeOptions.easing = easing;
  return element.animate(keyframeOptions, {
    delay: delay2,
    duration,
    easing: !Array.isArray(easing) ? easing : "linear",
    fill: "both",
    iterations: repeat + 1,
    direction: repeatType === "reverse" ? "alternate" : "normal"
  });
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var import_motion_utils14 = require("motion-utils@11.18.1");
var supportsWaapi = /* @__PURE__ */(0, import_motion_utils14.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

// node_modules/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs
var import_motion_dom6 = require("motion-dom@11.18.1");
var import_motion_utils15 = require("motion-utils@11.18.1");
var sampleDelta = 10;
var maxDuration = 2e4;
function requiresPregeneratedKeyframes(options) {
  return (0, import_motion_dom6.isGenerator)(options.type) || options.type === "spring" || !(0, import_motion_dom6.isWaapiSupportedEasing)(options.ease);
}
function pregenerateKeyframes(keyframes2, options) {
  const sampleAnimation = new MainThreadAnimation({
    ...options,
    keyframes: keyframes2,
    repeat: 0,
    delay: 0,
    isGenerator: true
  });
  let state2 = {
    done: false,
    value: keyframes2[0]
  };
  const pregeneratedKeyframes = [];
  let t = 0;
  while (!state2.done && t < maxDuration) {
    state2 = sampleAnimation.sample(t);
    pregeneratedKeyframes.push(state2.value);
    t += sampleDelta;
  }
  return {
    times: void 0,
    keyframes: pregeneratedKeyframes,
    duration: t - sampleDelta,
    ease: "linear"
  };
}
var unsupportedEasingFunctions = {
  anticipate,
  backInOut,
  circInOut
};
function isUnsupportedEase(key) {
  return key in unsupportedEasingFunctions;
}
var AcceleratedAnimation = class extends BaseAnimation {
  constructor(options) {
    super(options);
    const {
      name,
      motionValue: motionValue2,
      element,
      keyframes: keyframes2
    } = this.options;
    this.resolver = new DOMKeyframesResolver(keyframes2, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue2, element);
    this.resolver.scheduleResolve();
  }
  initPlayback(keyframes2, finalKeyframe) {
    let {
      duration = 300,
      times,
      ease: ease2,
      type,
      motionValue: motionValue2,
      name,
      startTime
    } = this.options;
    if (!motionValue2.owner || !motionValue2.owner.current) {
      return false;
    }
    if (typeof ease2 === "string" && (0, import_motion_dom6.supportsLinearEasing)() && isUnsupportedEase(ease2)) {
      ease2 = unsupportedEasingFunctions[ease2];
    }
    if (requiresPregeneratedKeyframes(this.options)) {
      const {
        onComplete,
        onUpdate,
        motionValue: motionValue3,
        element,
        ...options
      } = this.options;
      const pregeneratedAnimation = pregenerateKeyframes(keyframes2, options);
      keyframes2 = pregeneratedAnimation.keyframes;
      if (keyframes2.length === 1) {
        keyframes2[1] = keyframes2[0];
      }
      duration = pregeneratedAnimation.duration;
      times = pregeneratedAnimation.times;
      ease2 = pregeneratedAnimation.ease;
      type = "keyframes";
    }
    const animation = startWaapiAnimation(motionValue2.owner.current, name, keyframes2, {
      ...this.options,
      duration,
      times,
      ease: ease2
    });
    animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
    if (this.pendingTimeline) {
      (0, import_motion_dom6.attachTimeline)(animation, this.pendingTimeline);
      this.pendingTimeline = void 0;
    } else {
      animation.onfinish = () => {
        const {
          onComplete
        } = this.options;
        motionValue2.set(getFinalKeyframe(keyframes2, this.options, finalKeyframe));
        onComplete && onComplete();
        this.cancel();
        this.resolveFinishedPromise();
      };
    }
    return {
      animation,
      duration,
      times,
      type,
      ease: ease2,
      keyframes: keyframes2
    };
  }
  get duration() {
    const {
      resolved
    } = this;
    if (!resolved) return 0;
    const {
      duration
    } = resolved;
    return (0, import_motion_utils15.millisecondsToSeconds)(duration);
  }
  get time() {
    const {
      resolved
    } = this;
    if (!resolved) return 0;
    const {
      animation
    } = resolved;
    return (0, import_motion_utils15.millisecondsToSeconds)(animation.currentTime || 0);
  }
  set time(newTime) {
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    animation.currentTime = (0, import_motion_utils15.secondsToMilliseconds)(newTime);
  }
  get speed() {
    const {
      resolved
    } = this;
    if (!resolved) return 1;
    const {
      animation
    } = resolved;
    return animation.playbackRate;
  }
  set speed(newSpeed) {
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    animation.playbackRate = newSpeed;
  }
  get state() {
    const {
      resolved
    } = this;
    if (!resolved) return "idle";
    const {
      animation
    } = resolved;
    return animation.playState;
  }
  get startTime() {
    const {
      resolved
    } = this;
    if (!resolved) return null;
    const {
      animation
    } = resolved;
    return animation.startTime;
  }
  attachTimeline(timeline) {
    if (!this._resolved) {
      this.pendingTimeline = timeline;
    } else {
      const {
        resolved
      } = this;
      if (!resolved) return import_motion_utils15.noop;
      const {
        animation
      } = resolved;
      (0, import_motion_dom6.attachTimeline)(animation, timeline);
    }
    return import_motion_utils15.noop;
  }
  play() {
    if (this.isStopped) return;
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    if (animation.playState === "finished") {
      this.updateFinishedPromise();
    }
    animation.play();
  }
  pause() {
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation
    } = resolved;
    animation.pause();
  }
  stop() {
    this.resolver.cancel();
    this.isStopped = true;
    if (this.state === "idle") return;
    this.resolveFinishedPromise();
    this.updateFinishedPromise();
    const {
      resolved
    } = this;
    if (!resolved) return;
    const {
      animation,
      keyframes: keyframes2,
      duration,
      type,
      ease: ease2,
      times
    } = resolved;
    if (animation.playState === "idle" || animation.playState === "finished") {
      return;
    }
    if (this.time) {
      const {
        motionValue: motionValue2,
        onUpdate,
        onComplete,
        element,
        ...options
      } = this.options;
      const sampleAnimation = new MainThreadAnimation({
        ...options,
        keyframes: keyframes2,
        duration,
        type,
        ease: ease2,
        times,
        isGenerator: true
      });
      const sampleTime = (0, import_motion_utils15.secondsToMilliseconds)(this.time);
      motionValue2.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
    }
    const {
      onStop
    } = this.options;
    onStop && onStop();
    this.cancel();
  }
  complete() {
    const {
      resolved
    } = this;
    if (!resolved) return;
    resolved.animation.finish();
  }
  cancel() {
    const {
      resolved
    } = this;
    if (!resolved) return;
    resolved.animation.cancel();
  }
  static supports(options) {
    const {
      motionValue: motionValue2,
      name,
      repeatDelay,
      repeatType,
      damping,
      type
    } = options;
    if (!motionValue2 || !motionValue2.owner || !(motionValue2.owner.current instanceof HTMLElement)) {
      return false;
    }
    const {
      onUpdate,
      transformTemplate
    } = motionValue2.owner.getProps();
    return supportsWaapi() && name && acceleratedValues.has(name) && !onUpdate && !transformTemplate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }
};

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var criticallyDampedSpring = target => ({
  type: "spring",
  stiffness: 550,
  damping: target === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var keyframesTransition = {
  type: "keyframes",
  duration: 0.8
};
var ease = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var getDefaultTransition = (valueKey, {
  keyframes: keyframes2
}) => {
  if (keyframes2.length > 2) {
    return keyframesTransition;
  } else if (transformProps.has(valueKey)) {
    return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
  }
  return ease;
};

// node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function isTransitionDefined({
  when,
  delay: _delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  repeat,
  repeatType,
  repeatDelay,
  from,
  elapsed,
  ...transition
}) {
  return !!Object.keys(transition).length;
}

// node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var import_motion_dom7 = require("motion-dom@11.18.1");
var import_motion_utils16 = require("motion-utils@11.18.1");
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => onComplete => {
  const valueTransition = (0, import_motion_dom7.getValueTransition)(transition, name) || {};
  const delay2 = valueTransition.delay || transition.delay || 0;
  let {
    elapsed = 0
  } = transition;
  elapsed = elapsed - (0, import_motion_utils16.secondsToMilliseconds)(delay2);
  let options = {
    keyframes: Array.isArray(target) ? target : [null, target],
    ease: "easeOut",
    velocity: value.getVelocity(),
    ...valueTransition,
    delay: -elapsed,
    onUpdate: v => {
      value.set(v);
      valueTransition.onUpdate && valueTransition.onUpdate(v);
    },
    onComplete: () => {
      onComplete();
      valueTransition.onComplete && valueTransition.onComplete();
    },
    name,
    motionValue: value,
    element: isHandoff ? void 0 : element
  };
  if (!isTransitionDefined(valueTransition)) {
    options = {
      ...options,
      ...getDefaultTransition(name, options)
    };
  }
  if (options.duration) {
    options.duration = (0, import_motion_utils16.secondsToMilliseconds)(options.duration);
  }
  if (options.repeatDelay) {
    options.repeatDelay = (0, import_motion_utils16.secondsToMilliseconds)(options.repeatDelay);
  }
  if (options.from !== void 0) {
    options.keyframes[0] = options.from;
  }
  let shouldSkip = false;
  if (options.type === false || options.duration === 0 && !options.repeatDelay) {
    options.duration = 0;
    if (options.delay === 0) {
      shouldSkip = true;
    }
  }
  if (instantAnimationState.current || MotionGlobalConfig.skipAnimations) {
    shouldSkip = true;
    options.duration = 0;
    options.delay = 0;
  }
  if (shouldSkip && !isHandoff && value.get() !== void 0) {
    const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
    if (finalKeyframe !== void 0) {
      frame.update(() => {
        options.onUpdate(finalKeyframe);
        options.onComplete();
      });
      return new import_motion_dom7.GroupPlaybackControls([]);
    }
  }
  if (!isHandoff && AcceleratedAnimation.supports(options)) {
    return new AcceleratedAnimation(options);
  } else {
    return new MainThreadAnimation(options);
  }
};

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
var import_motion_dom8 = require("motion-dom@11.18.1");
function shouldBlockAnimation({
  protectedKeys,
  needsAnimating
}, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, {
  delay: delay2 = 0,
  transitionOverride,
  type
} = {}) {
  var _a;
  let {
    transition = visualElement.getDefaultTransition(),
    transitionEnd,
    ...target
  } = targetAndTransition;
  if (transitionOverride) transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
  for (const key in target) {
    const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
    const valueTarget = target[key];
    if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    const valueTransition = {
      delay: delay2,
      ...(0, import_motion_dom8.getValueTransition)(transition || {}, key)
    };
    let isHandoff = false;
    if (window.MotionHandoffAnimation) {
      const appearId = getOptimisedAppearId(visualElement);
      if (appearId) {
        const startTime = window.MotionHandoffAnimation(appearId, key, frame);
        if (startTime !== null) {
          valueTransition.startTime = startTime;
          isHandoff = true;
        }
      }
    }
    addValueToWillChange(visualElement, key);
    value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? {
      type: false
    } : valueTransition, visualElement, isHandoff));
    const animation = value.animation;
    if (animation) {
      animations2.push(animation);
    }
  }
  if (transitionEnd) {
    Promise.all(animations2).then(() => {
      frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
    });
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
  let {
    transition = visualElement.getDefaultTransition() || {}
  } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
  const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
    const {
      delayChildren = 0,
      staggerChildren,
      staggerDirection
    } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const {
    when
  } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
    return first().then(() => last());
  } else {
    return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
  }
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i = 0) => i * staggerChildren : (i = 0) => maxStaggerDuration - i * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i) => {
    child.notify("AnimationStart", variant);
    animations2.push(animateVariant(child, variant, {
      ...options,
      delay: delayChildren + generateStaggerDuration(i)
    }).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a, b) {
  return a.sortNodePosition(b);
}

// node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map(variant => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
  }
  return animation.then(() => {
    visualElement.notify("AnimationComplete", definition);
  });
}

// node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
  if (!visualElement) return void 0;
  if (!visualElement.isControllingVariants) {
    const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
    if (visualElement.props.initial !== void 0) {
      context2.initial = visualElement.props.initial;
    }
    return context2;
  }
  const context = {};
  for (let i = 0; i < numVariantProps; i++) {
    const name = variantProps[i];
    const prop = visualElement.props[name];
    if (isVariantLabel(prop) || prop === false) {
      context[name] = prop;
    }
  }
  return context;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return animations2 => Promise.all(animations2.map(({
    animation,
    options
  }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate2 = animateList(visualElement);
  let state2 = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = type => (acc, definition) => {
    var _a;
    const resolved = resolveVariant(visualElement, definition, type === "exit" ? (_a = visualElement.presenceContext) === null || _a === void 0 ? void 0 : _a.custom : void 0);
    if (resolved) {
      const {
        transition,
        transitionEnd,
        ...target
      } = resolved;
      acc = {
        ...acc,
        ...target,
        ...transitionEnd
      };
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement);
  }
  function animateChanges(changedActiveType) {
    const {
      props
    } = visualElement;
    const context = getVariantContext(visualElement.parent) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i = 0; i < numAnimationTypes; i++) {
      const type = reversePriorityOrder[i];
      const typeState = state2[type];
      const prop = props[type] !== void 0 ? props[type] : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false) removedVariantIndex = i;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = {
        ...encounteredKeys
      };
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
      let handledRemovedValues = false;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
      if (activeDelta === false) resolvedValues = {};
      const {
        prevResolvedValues = {}
      } = typeState;
      const allKeys = {
        ...prevResolvedValues,
        ...resolvedValues
      };
      const markToAnimate = key => {
        shouldAnimateType = true;
        if (removedKeys.has(key)) {
          handledRemovedValues = true;
          removedKeys.delete(key);
        }
        typeState.needsAnimating[key] = true;
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2) motionValue2.liveStyle = false;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key)) continue;
        let valueHasChanged = false;
        if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
          valueHasChanged = !shallowCompare(next, prev);
        } else {
          valueHasChanged = next !== prev;
        }
        if (valueHasChanged) {
          if (next !== void 0 && next !== null) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = {
          ...encounteredKeys,
          ...resolvedValues
        };
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      const willAnimateViaParent = isInherited && variantDidChange;
      const needsAnimating = !willAnimateViaParent || handledRemovedValues;
      if (shouldAnimateType && needsAnimating) {
        animations2.push(...definitionList.map(animation => ({
          animation,
          options: {
            type
          }
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach(key => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        const motionValue2 = visualElement.getValue(key);
        if (motionValue2) motionValue2.liveStyle = true;
        fallbackAnimation[key] = fallbackTarget !== null && fallbackTarget !== void 0 ? fallbackTarget : null;
      });
      animations2.push({
        animation: fallbackAnimation
      });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive) {
    var _a;
    if (state2[type].isActive === isActive) return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(child => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state2[type].isActive = isActive;
    const animations2 = animateChanges(type);
    for (const key in state2) {
      state2[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state2,
    reset: () => {
      state2 = createState();
      isInitialRender = true;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    animate: createTypeState(true),
    whileInView: createTypeState(),
    whileHover: createTypeState(),
    whileTap: createTypeState(),
    whileDrag: createTypeState(),
    whileFocus: createTypeState(),
    exit: createTypeState()
  };
}

// node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
  constructor(node) {
    this.isMounted = false;
    this.node = node;
  }
  update() {}
};

// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
  constructor(node) {
    super(node);
    node.animationState || (node.animationState = createAnimationState(node));
  }
  updateAnimationControlsSubscription() {
    const {
      animate: animate2
    } = this.node.getProps();
    if (isAnimationControls(animate2)) {
      this.unmountControls = animate2.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const {
      animate: animate2
    } = this.node.getProps();
    const {
      animate: prevAnimate
    } = this.node.prevProps || {};
    if (animate2 !== prevAnimate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    var _a;
    this.node.animationState.reset();
    (_a = this.unmountControls) === null || _a === void 0 ? void 0 : _a.call(this);
  }
};

// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.id = id++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
      isPresent: isPresent2,
      onExitComplete
    } = this.node.presenceContext;
    const {
      isPresent: prevIsPresent
    } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || isPresent2 === prevIsPresent) {
      return;
    }
    const exitAnimation = this.node.animationState.setActive("exit", !isPresent2);
    if (onExitComplete && !isPresent2) {
      exitAnimation.then(() => onExitComplete(this.id));
    }
  }
  mount() {
    const {
      register
    } = this.node.presenceContext || {};
    if (register) {
      this.unmount = register(this.id);
    }
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: {
    Feature: AnimationFeature
  },
  exit: {
    Feature: ExitAnimationFeature
  }
};

// node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = {
  passive: true
}) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}

// node_modules/framer-motion/dist/es/events/event-info.mjs
var import_motion_dom9 = require("motion-dom@11.18.1");
function extractEventInfo(event) {
  return {
    point: {
      x: event.pageX,
      y: event.pageY
    }
  };
}
var addPointerInfo = handler => {
  return event => (0, import_motion_dom9.isPrimaryPointer)(event) && handler(event, extractEventInfo(event));
};

// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, eventName, addPointerInfo(handler), options);
}

// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
  const xDelta = distance(a.x, b.x);
  const yDelta = distance(a.y, b.y);
  return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var import_motion_dom10 = require("motion-dom@11.18.1");
var import_motion_utils17 = require("motion-utils@11.18.1");
var PanSession = class {
  constructor(event, handlers, {
    transformPagePoint,
    contextWindow,
    dragSnapToOrigin = false
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance2D(info2.offset, {
        x: 0,
        y: 0
      }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold) return;
      const {
        point: point3
      } = info2;
      const {
        timestamp: timestamp2
      } = frameData;
      this.history.push({
        ...point3,
        timestamp: timestamp2
      });
      const {
        onStart,
        onMove
      } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      frame.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const {
        onEnd,
        onSessionEnd,
        resumeAnimation
      } = this.handlers;
      if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (!(0, import_motion_dom10.isPrimaryPointer)(event)) return;
    this.dragSnapToOrigin = dragSnapToOrigin;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    this.contextWindow = contextWindow || window;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const {
      point: point2
    } = initialInfo;
    const {
      timestamp
    } = frameData;
    this.history = [{
      ...point2,
      timestamp
    }];
    const {
      onSessionStart
    } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelFrame(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? {
    point: transformPagePoint(info.point)
  } : info;
}
function subtractPoint(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function getPanInfo({
  point: point2
}, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let i = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > (0, import_motion_utils17.secondsToMilliseconds)(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return {
      x: 0,
      y: 0
    };
  }
  const time2 = (0, import_motion_utils17.millisecondsToSeconds)(lastPoint.timestamp - timestampedPoint.timestamp);
  if (time2 === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time2,
    y: (lastPoint.y - timestampedPoint.y) / time2
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var SCALE_PRECISION = 1e-4;
var SCALE_MIN = 1 - SCALE_PRECISION;
var SCALE_MAX = 1 + SCALE_PRECISION;
var TRANSLATE_PRECISION = 0.01;
var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mixNumber(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
  if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
    delta.scale = 1;
  }
  if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
    delta.translate = 0;
  }
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
  calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout2, parent) {
  target.min = layout2.min - parent.min;
  target.max = target.min + calcLength(layout2);
}
function calcRelativePosition(target, layout2, parent) {
  calcRelativeAxisPosition(target.x, layout2.x, parent.x);
  calcRelativeAxisPosition(target.y, layout2.y, parent.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
var import_motion_utils18 = require("motion-utils@11.18.1");
function applyConstraints(point2, {
  min,
  max
}, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mixNumber(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mixNumber(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, {
  top,
  left,
  bottom,
  right
}) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return {
    min,
    max
  };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = (0, import_motion_utils18.progress)(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = (0, import_motion_utils18.progress)(source.min, source.max - targetLength, target.min);
  }
  return clamp(0, 1, origin);
}
function rebaseAxisConstraints(layout2, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout2.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout2.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({
  min: 0,
  max: 0
});
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({
  top,
  left,
  right,
  bottom
}) {
  return {
    x: {
      min: left,
      max: right
    },
    y: {
      min: top,
      max: bottom
    }
  };
}
function convertBoxToBoundingBox({
  x,
  y
}) {
  return {
    top: y.min,
    right: x.max,
    bottom: y.max,
    left: x.min
  };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2) return point2;
  const topLeft = transformPoint2({
    x: point2.left,
    y: point2.top
  });
  const bottomRight = transformPoint2({
    x: point2.right,
    y: point2.bottom
  });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({
  scale: scale2,
  scaleX,
  scaleY
}) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, {
  x,
  y
}) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = 0.999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  const treeLength = treePath.length;
  if (!treeLength) return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    const {
      visualElement
    } = node.options;
    if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
      continue;
    }
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, {
        x: -node.scroll.offset.x,
        y: -node.scroll.offset.y
      });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
  if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
    treeScale.x = 1;
  }
  if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
    treeScale.y = 1;
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
  const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
function transformBox(box, transform2) {
  transformAxis(box.x, transform2.x, transform2.scaleX, transform2.scale, transform2.originX);
  transformAxis(box.y, transform2.y, transform2.scaleY, transform2.scale, transform2.originY);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const {
    scroll: scroll2
  } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.offset.x);
    translateAxis(viewportBox.y, scroll2.offset.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({
  current
}) => {
  return current ? current.ownerDocument.defaultView : null;
};

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var import_motion_utils19 = require("motion-utils@11.18.1");
var import_motion_dom11 = require("motion-dom@11.18.1");
var elementDragControls = /* @__PURE__ */new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, {
    snapToCursor = false
  } = {}) {
    const {
      presenceContext
    } = this.visualElement;
    if (presenceContext && presenceContext.isPresent === false) return;
    const onSessionStart = event => {
      const {
        dragSnapToOrigin: dragSnapToOrigin2
      } = this.getProps();
      dragSnapToOrigin2 ? this.pauseAnimation() : this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event).point);
      }
    };
    const onStart = (event, info) => {
      const {
        drag: drag2,
        dragPropagation,
        onDragStart
      } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openDragLock) this.openDragLock();
        this.openDragLock = (0, import_motion_dom11.setDragLock)(drag2);
        if (!this.openDragLock) return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis(axis => {
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const {
            projection
          } = this.visualElement;
          if (projection && projection.layout) {
            const measuredAxis = projection.layout.layoutBox[axis];
            if (measuredAxis) {
              const length = calcLength(measuredAxis);
              current = length * (parseFloat(current) / 100);
            }
          }
        }
        this.originPoint[axis] = current;
      });
      if (onDragStart) {
        frame.postRender(() => onDragStart(event, info));
      }
      addValueToWillChange(this.visualElement, "transform");
      const {
        animationState
      } = this.visualElement;
      animationState && animationState.setActive("whileDrag", true);
    };
    const onMove = (event, info) => {
      const {
        dragPropagation,
        dragDirectionLock,
        onDirectionLock,
        onDrag
      } = this.getProps();
      if (!dragPropagation && !this.openDragLock) return;
      const {
        offset
      } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock && onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag && onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    const resumeAnimation = () => eachAxis(axis => {
      var _a;
      return this.getAnimationState(axis) === "paused" && ((_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.play());
    });
    const {
      dragSnapToOrigin
    } = this.getProps();
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd,
      resumeAnimation
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin,
      contextWindow: getContextWindow(this.visualElement)
    });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging) return;
    const {
      velocity
    } = info;
    this.startAnimation(velocity);
    const {
      onDragEnd
    } = this.getProps();
    if (onDragEnd) {
      frame.postRender(() => onDragEnd(event, info));
    }
  }
  cancel() {
    this.isDragging = false;
    const {
      projection,
      animationState
    } = this.visualElement;
    if (projection) {
      projection.isAnimationBlocked = false;
    }
    this.panSession && this.panSession.end();
    this.panSession = void 0;
    const {
      dragPropagation
    } = this.getProps();
    if (!dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    animationState && animationState.setActive("whileDrag", false);
  }
  updateAxis(axis, _point, offset) {
    const {
      drag: drag2
    } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection)) return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    var _a;
    const {
      dragConstraints,
      dragElastic
    } = this.getProps();
    const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a = this.visualElement.projection) === null || _a === void 0 ? void 0 : _a.layout;
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout2) {
        this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout2 && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(axis => {
        if (this.constraints !== false && this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const {
      dragConstraints: constraints,
      onMeasureDragConstraints
    } = this.getProps();
    if (!constraints || !isRefObject(constraints)) return false;
    const constraintsElement = constraints.current;
    (0, import_motion_utils19.invariant)(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const {
      projection
    } = this.visualElement;
    if (!projection || !projection.layout) return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const {
      drag: drag2,
      dragMomentum,
      dragElastic,
      dragTransition,
      dragSnapToOrigin,
      onDragTransitionEnd
    } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis(axis => {
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = constraints && constraints[axis] || {};
      if (dragSnapToOrigin) transition = {
        min: 0,
        max: 0
      };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = {
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...transition
      };
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    addValueToWillChange(this.visualElement, axis);
    return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
  }
  stopAnimation() {
    eachAxis(axis => this.getAxisMotionValue(axis).stop());
  }
  pauseAnimation() {
    eachAxis(axis => {
      var _a;
      return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.pause();
    });
  }
  getAnimationState(axis) {
    var _a;
    return (_a = this.getAxisMotionValue(axis).animation) === null || _a === void 0 ? void 0 : _a.state;
  }
  getAxisMotionValue(axis) {
    const dragKey = `_drag${axis.toUpperCase()}`;
    const props = this.visualElement.getProps();
    const externalMotionValue = props[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
  }
  snapToCursor(point2) {
    eachAxis(axis => {
      const {
        drag: drag2
      } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection)) return;
      const {
        projection
      } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const {
          min,
          max
        } = projection.layout.layoutBox[axis];
        axisValue.set(point2[axis] - mixNumber(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const {
      drag: drag2,
      dragConstraints
    } = this.getProps();
    const {
      projection
    } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
    this.stopAnimation();
    const boxProgress = {
      x: 0,
      y: 0
    };
    eachAxis(axis => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue && this.constraints !== false) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({
          min: latest,
          max: latest
        }, this.constraints[axis]);
      }
    });
    const {
      transformTemplate
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root && projection.root.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(axis => {
      if (!shouldDrag(axis, drag2, null)) return;
      const axisValue = this.getAxisMotionValue(axis);
      const {
        min,
        max
      } = this.constraints[axis];
      axisValue.set(mixNumber(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", event => {
      const {
        drag: drag2,
        dragListener = true
      } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const {
        dragConstraints
      } = this.getProps();
      if (isRefObject(dragConstraints) && dragConstraints.current) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const {
      projection
    } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
    }
    frame.read(measureDragConstraints);
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({
      delta,
      hasLayoutChanged
    }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis(axis => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2) return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener && stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const {
      drag: drag2 = false,
      dragDirectionLock = false,
      dragPropagation = false,
      dragConstraints = false,
      dragElastic = defaultElastic,
      dragMomentum = true
    } = props;
    return {
      ...props,
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var import_motion_utils20 = require("motion-utils@11.18.1");
var DragGesture = class extends Feature {
  constructor(node) {
    super(node);
    this.removeGroupControls = import_motion_utils20.noop;
    this.removeListeners = import_motion_utils20.noop;
    this.controls = new VisualElementDragControls(node);
  }
  mount() {
    const {
      dragControls
    } = this.node.getProps();
    if (dragControls) {
      this.removeGroupControls = dragControls.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || import_motion_utils20.noop;
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
  }
};

// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var import_motion_utils21 = require("motion-utils@11.18.1");
var asyncHandler = handler => (event, info) => {
  if (handler) {
    frame.postRender(() => handler(event, info));
  }
};
var PanGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = import_motion_utils21.noop;
  }
  onPointerDown(pointerDownEvent) {
    this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: getContextWindow(this.node)
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart,
      onPanStart,
      onPan,
      onPanEnd
    } = this.node.getProps();
    return {
      onSessionStart: asyncHandler(onPanSessionStart),
      onStart: asyncHandler(onPanStart),
      onMove: onPan,
      onEnd: (event, info) => {
        delete this.session;
        if (onPanEnd) {
          frame.postRender(() => onPanEnd(event, info));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", event => this.onPointerDown(event));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session && this.session.end();
  }
};

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min) return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target) return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = {
  correct: (latest, {
    treeScale,
    projectionDelta
  }) => {
    const original = latest;
    const shadow = complex.parse(latest);
    if (shadow.length > 5) return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mixNumber(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
    return template(shadow);
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_jsx_runtime8 = require("react@18.3.1/jsx-runtime");
var import_react28 = require("react@18.3.1");
"use client";
var MeasureLayoutWithContext = class extends import_react28.Component {
  componentDidMount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup,
      layoutId
    } = this.props;
    const {
      projection
    } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group) layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions({
        ...projection.options,
        onExitComplete: () => this.safeToRemove()
      });
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const {
      layoutDependency,
      visualElement,
      drag: drag2,
      isPresent: isPresent2
    } = this.props;
    const projection = visualElement.projection;
    if (!projection) return null;
    projection.isPresent = isPresent2;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent2) {
      if (isPresent2) {
        projection.promote();
      } else if (!projection.relegate()) {
        frame.postRender(() => {
          const stack = projection.getStack();
          if (!stack || !stack.members.length) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const {
      projection
    } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      microtask.postRender(() => {
        if (!projection.currentAnimation && projection.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    const {
      visualElement,
      layoutGroup,
      switchLayoutGroup: promoteContext
    } = this.props;
    const {
      projection
    } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
      if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const {
      safeToRemove
    } = this.props;
    safeToRemove && safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent2, safeToRemove] = usePresence();
  const layoutGroup = (0, import_react28.useContext)(LayoutGroupContext);
  return (0, import_jsx_runtime8.jsx)(MeasureLayoutWithContext, {
    ...props,
    layoutGroup,
    switchLayoutGroup: (0, import_react28.useContext)(SwitchLayoutGroupContext),
    isPresent: isPresent2,
    safeToRemove
  });
}
var defaultScaleCorrectors = {
  borderRadius: {
    ...correctBorderRadius,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes2, options) {
  const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
  motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
  return motionValue$1.animation;
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function isSVGElement(element) {
  return element instanceof SVGElement && element.tagName !== "svg";
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// node_modules/framer-motion/dist/es/utils/delay.mjs
var import_motion_utils22 = require("motion-utils@11.18.1");
function delay(callback, timeout) {
  const start = time.now();
  const checkElapsed = ({
    timestamp
  }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelFrame(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  frame.read(checkElapsed, true);
  return () => cancelFrame(checkElapsed);
}
function delayInSeconds(callback, timeout) {
  return delay(callback, (0, import_motion_utils22.secondsToMilliseconds)(timeout));
}

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var import_motion_utils23 = require("motion-utils@11.18.1");
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = value => typeof value === "string" ? parseFloat(value) : value;
var isPx = value => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress8, shouldCrossfadeOpacity, isOnlyMember) {
  if (shouldCrossfadeOpacity) {
    target.opacity = mixNumber(0, lead.opacity !== void 0 ? lead.opacity : 1, easeCrossfadeIn(progress8));
    target.opacityExit = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, 0, easeCrossfadeOut(progress8));
  } else if (isOnlyMember) {
    target.opacity = mixNumber(follow.opacity !== void 0 ? follow.opacity : 1, lead.opacity !== void 0 ? lead.opacity : 1, progress8);
  }
  for (let i = 0; i < numBorders; i++) {
    const borderLabel = `border${borders[i]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0) continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress8), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress8);
  }
}
function getRadius(values, radiusName) {
  return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /* @__PURE__ */compress(0, 0.5, circOut);
var easeCrossfadeOut = /* @__PURE__ */compress(0.5, 0.95, import_motion_utils23.noop);
function compress(min, max, easing) {
  return p => {
    if (p < min) return 0;
    if (p > max) return 1;
    return easing((0, import_motion_utils23.progress)(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}
function copyAxisDeltaInto(delta, originDelta) {
  delta.translate = originDelta.translate;
  delta.scale = originDelta.scale;
  delta.originPoint = originDelta.originPoint;
  delta.origin = originDelta.origin;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number") return;
  let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
  if (axis === originAxis) originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
  removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
  return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
  return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
  return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
  return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
  return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex(member => node === member);
    if (indexOfNode === 0) return false;
    let prevLead;
    for (let i = indexOfNode; i >= 0; i--) {
      const member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    const prevLead = this.lead;
    if (node === prevLead) return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
      }
      if (node.root && node.root.isUpdating) {
        node.isLayoutDirty = true;
      }
      const {
        crossfade
      } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(node => {
      const {
        options,
        resumingFrom
      } = node;
      options.onExitComplete && options.onExitComplete();
      if (resumingFrom) {
        resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
      }
    });
  }
  scheduleRender() {
    this.members.forEach(node => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
  let transform2 = "";
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  const zTranslate = (latestTransform === null || latestTransform === void 0 ? void 0 : latestTransform.z) || 0;
  if (xTranslate || yTranslate || zTranslate) {
    transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
  }
  if (treeScale.x !== 1 || treeScale.y !== 1) {
    transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  }
  if (latestTransform) {
    const {
      transformPerspective,
      rotate,
      rotateX,
      rotateY,
      skewX,
      skewY
    } = latestTransform;
    if (transformPerspective) transform2 = `perspective(${transformPerspective}px) ${transform2}`;
    if (rotate) transform2 += `rotate(${rotate}deg) `;
    if (rotateX) transform2 += `rotateX(${rotateX}deg) `;
    if (rotateY) transform2 += `rotateY(${rotateY}deg) `;
    if (skewX) transform2 += `skewX(${skewX}deg) `;
    if (skewY) transform2 += `skewY(${skewY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  if (elementScaleX !== 1 || elementScaleY !== 1) {
    transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
  }
  return transform2 || "none";
}

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var import_motion_dom12 = require("motion-dom@11.18.1");
var import_motion_utils24 = require("motion-utils@11.18.1");
var metrics = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
var isDebug = typeof window !== "undefined" && window.MotionDebug !== void 0;
var transformAxes = ["", "X", "Y", "Z"];
var hiddenVisibility = {
  visibility: "hidden"
};
var animationTarget = 1e3;
var id2 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
  const {
    latestValues
  } = visualElement;
  if (latestValues[key]) {
    values[key] = latestValues[key];
    visualElement.setStaticValue(key, 0);
    if (sharedAnimationValues) {
      sharedAnimationValues[key] = 0;
    }
  }
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
  projectionNode.hasCheckedOptimisedAppear = true;
  if (projectionNode.root === projectionNode) return;
  const {
    visualElement
  } = projectionNode.options;
  if (!visualElement) return;
  const appearId = getOptimisedAppearId(visualElement);
  if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
    const {
      layout: layout2,
      layoutId
    } = projectionNode.options;
    window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
  }
  const {
    parent
  } = projectionNode;
  if (parent && !parent.hasCheckedOptimisedAppear) {
    cancelTreeOptimisedTransformAnimations(parent);
  }
}
function createProjectionNode2({
  attachResizeListener,
  defaultParent,
  measureScroll,
  checkIsScrollRoot,
  resetTransform
}) {
  return class ProjectionNode {
    constructor(latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.id = id2++;
      this.animationId = 0;
      this.children = /* @__PURE__ */new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = /* @__PURE__ */new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        if (isDebug) {
          metrics.totalNodes = metrics.resolvedTargetDeltas = metrics.recalculatedProjection = 0;
        }
        this.nodes.forEach(propagateDirtyNodes);
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
        this.nodes.forEach(cleanDirtyNodes);
        if (isDebug) {
          window.MotionDebug.record(metrics);
        }
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */new Map();
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      for (let i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this) this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager && subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    mount(instance, isLayoutDirty = this.root.hasTreeAnimated) {
      if (this.instance) return;
      this.isSVG = isSVGElement(instance);
      this.instance = instance;
      const {
        layoutId,
        layout: layout2,
        visualElement
      } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      this.parent && this.parent.children.add(this);
      if (isLayoutDirty && (layout2 || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
        this.addEventListener("didUpdate", ({
          delta,
          hasLayoutChanged,
          hasRelativeTargetChanged,
          layout: newLayout
        }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
          const {
            onLayoutAnimationStart,
            onLayoutAnimationComplete
          } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = {
              ...(0, import_motion_dom12.getValueTransition)(layoutTransition, "layout"),
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            };
            if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged) {
              finishAnimation(this);
            }
            if (this.isLead() && this.options.onExitComplete) {
              this.options.onExitComplete();
            }
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      const stack = this.getStack();
      stack && stack.remove(this);
      this.parent && this.parent.children.delete(this);
      this.instance = void 0;
      cancelFrame(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      if (this.isUpdateBlocked()) return;
      this.isUpdating = true;
      this.nodes && this.nodes.forEach(resetSkewAndRotation);
      this.animationId++;
    }
    getTransformTemplate() {
      const {
        visualElement
      } = this.options;
      return visualElement && visualElement.getProps().transformTemplate;
    }
    willUpdate(shouldNotifyListeners = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        cancelTreeOptimisedTransformAnimations(this);
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll("snapshot");
        if (node.options.layoutRoot) {
          node.willUpdate(false);
        }
      }
      const {
        layoutId,
        layout: layout2
      } = this.options;
      if (layoutId === void 0 && !layout2) return;
      const transformTemplate = this.getTransformTemplate();
      this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    update() {
      this.updateScheduled = false;
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating) {
        this.nodes.forEach(clearIsLayoutDirty);
      }
      this.isUpdating = false;
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      const now2 = time.now();
      frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
      frameData.timestamp = now2;
      frameData.isProcessing = true;
      frameSteps.update.process(frameData);
      frameSteps.preRender.process(frameData);
      frameSteps.render.process(frameData);
      frameData.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        microtask.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        frame.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      frame.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance) return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      if (!this.instance) return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      const {
        visualElement
      } = this.options;
      visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
    }
    updateScroll(phase = "measure") {
      let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
        needsMeasurement = false;
      }
      if (needsMeasurement) {
        const isRoot = checkIsScrollRoot(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase,
          isRoot,
          offset: measureScroll(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : isRoot
        };
      }
    }
    resetTransform() {
      if (!resetTransform) return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = this.getTransformTemplate();
      const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        animationId: this.root.animationId,
        measuredBox: pageBox,
        layoutBox,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var _a;
      const {
        visualElement
      } = this.options;
      if (!visualElement) return createBox();
      const box = visualElement.measureViewportBox();
      const wasInScrollRoot = ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) || this.path.some(checkNodeWasScrollRoot);
      if (!wasInScrollRoot) {
        const {
          scroll: scroll2
        } = this.root;
        if (scroll2) {
          translateAxis(box.x, scroll2.offset.x);
          translateAxis(box.y, scroll2.offset.y);
        }
      }
      return box;
    }
    removeElementScroll(box) {
      var _a;
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      if ((_a = this.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot) {
        return boxWithoutScroll;
      }
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        const {
          scroll: scroll2,
          options
        } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (scroll2.wasRoot) {
            copyBoxInto(boxWithoutScroll, box);
          }
          translateAxis(boxWithoutScroll.x, scroll2.offset.x);
          translateAxis(boxWithoutScroll.y, scroll2.offset.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
          });
        }
        if (!hasTransform(node.latestValues)) continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i = 0; i < this.path.length; i++) {
        const node = this.path[i];
        if (!node.instance) continue;
        if (!hasTransform(node.latestValues)) continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(options) {
      this.options = {
        ...this.options,
        ...options,
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (!this.relativeParent) return;
      if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(forceRecalculation = false) {
      var _a;
      const lead = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
      this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
      this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      if (!this.layout || !(layout2 || layoutId)) return;
      this.resolvedRelativeTargetAt = frameData.timestamp;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta) return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
        this.forceRelativeParentToResolveTarget();
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
          this.relativeParent = relativeParent;
          this.forceRelativeParentToResolveTarget();
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (isDebug) {
        metrics.resolvedTargetDeltas++;
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
        return void 0;
      }
      if (this.parent.isProjecting()) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _a;
      const lead = this.getLead();
      const isShared = Boolean(this.resumingFrom) || this !== lead;
      let canSkip = true;
      if (this.isProjectionDirty || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isProjectionDirty)) {
        canSkip = false;
      }
      if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        canSkip = false;
      }
      if (this.resolvedRelativeTargetAt === frameData.timestamp) {
        canSkip = false;
      }
      if (canSkip) return;
      const {
        layout: layout2,
        layoutId
      } = this.options;
      this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout2 || layoutId)) return;
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
      if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        lead.target = lead.layout.layoutBox;
        lead.targetWithTransforms = createBox();
      }
      const {
        target
      } = lead;
      if (!target) {
        if (this.prevProjectionDelta) {
          this.createProjectionDeltas();
          this.scheduleRender();
        }
        return;
      }
      if (!this.projectionDelta || !this.prevProjectionDelta) {
        this.createProjectionDeltas();
      } else {
        copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
        copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
      }
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
      if (isDebug) {
        metrics.recalculatedProjection++;
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      var _a;
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.scheduleRender();
      if (notifyAll2) {
        const stack = this.getStack();
        stack && stack.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = createDelta();
      this.projectionDelta = createDelta();
      this.projectionDeltaWithTransform = createDelta();
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      const snapshot = this.snapshot;
      const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
      const mixedValues = {
        ...this.latestValues
      };
      const targetDelta = createDelta();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = void 0;
      }
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const snapshotSource = snapshot ? snapshot.source : void 0;
      const layoutSource = this.layout ? this.layout.source : void 0;
      const isSharedLayoutAnimation = snapshotSource !== layoutSource;
      const stack = this.getStack();
      const isOnlyMember = !stack || stack.members.length <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      let prevRelativeTarget;
      this.mixTargetDelta = latest => {
        const progress8 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress8);
        mixAxisDelta(targetDelta.y, delta.y, progress8);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress8);
          if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
            this.isProjectionDirty = false;
          }
          if (!prevRelativeTarget) prevRelativeTarget = createBox();
          copyBoxInto(prevRelativeTarget, this.relativeTarget);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress8, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress8;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(options) {
      this.notifyListeners("animationStart");
      this.currentAnimation && this.currentAnimation.stop();
      if (this.resumingFrom && this.resumingFrom.currentAnimation) {
        this.resumingFrom.currentAnimation.stop();
      }
      if (this.pendingAnimation) {
        cancelFrame(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = frame.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animateSingleValue(0, animationTarget, {
          ...options,
          onUpdate: latest => {
            this.mixTargetDelta(latest);
            options.onUpdate && options.onUpdate(latest);
          },
          onComplete: () => {
            options.onComplete && options.onComplete();
            this.completeAnimation();
          }
        });
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      const stack = this.getStack();
      stack && stack.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.mixTargetDelta && this.mixTargetDelta(animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let {
        targetWithTransforms,
        target,
        layout: layout2,
        latestValues
      } = lead;
      if (!targetWithTransforms || !target || !layout2) return;
      if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      const config = node.options.initialPromotionConfig;
      node.promote({
        transition: config ? config.transition : void 0,
        preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const {
        layoutId
      } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const {
        layoutId
      } = this.options;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    }
    promote({
      needsReset,
      transition,
      preserveFollowOpacity
    } = {}) {
      const stack = this.getStack();
      if (stack) stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition) this.setOptions({
        transition
      });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetSkewAndRotation() {
      const {
        visualElement
      } = this.options;
      if (!visualElement) return;
      let hasDistortingTransform = false;
      const {
        latestValues
      } = visualElement;
      if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
        hasDistortingTransform = true;
      }
      if (!hasDistortingTransform) return;
      const resetValues = {};
      if (latestValues.z) {
        resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
      }
      for (let i = 0; i < transformAxes.length; i++) {
        resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
      }
      visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
        if (this.animationValues) {
          this.animationValues[key] = resetValues[key];
        }
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp) {
      var _a, _b;
      if (!this.instance || this.isSVG) return void 0;
      if (!this.isVisible) {
        return hiddenVisibility;
      }
      const styles = {
        visibility: ""
      };
      const transformTemplate = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const {
        x,
        y
      } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_b = (_a = valuesToRender.opacity) !== null && _a !== void 0 ? _a : this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0) continue;
        const {
          correct,
          applyTo
        } = scaleCorrectors[key];
        const corrected = styles.transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp === null || styleProp === void 0 ? void 0 : styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(node => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const {
      layoutBox: layout2,
      measuredBox: measuredLayout
    } = node.layout;
    const {
      animationType
    } = node.options;
    const isShared = snapshot.source !== node.layout.source;
    if (animationType === "size") {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout2[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
      eachAxis(axis => {
        const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout2[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
        if (node.relativeTarget && !node.currentAnimation) {
          node.isProjectionDirty = true;
          node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
        }
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const {
          snapshot: parentSnapshot,
          layout: parentLayout
        } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox);
          if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
          if (relativeParent.options.layoutRoot) {
            node.relativeTarget = relativeLayout;
            node.relativeTargetOrigin = relativeSnapshot;
            node.relativeParent = relativeParent;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout2,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    const {
      onExitComplete
    } = node.options;
    onExitComplete && onExitComplete();
  }
  node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
  if (isDebug) {
    metrics.totalNodes++;
  }
  if (!node.parent) return;
  if (!node.isProjecting()) {
    node.isProjectionDirty = node.parent.isProjectionDirty;
  }
  node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
  node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
  node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
  node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
  const {
    visualElement
  } = node.options;
  if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
  node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetSkewAndRotation(node) {
  node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mixNumber(delta.translate, 0, p);
  output.scale = mixNumber(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
  output.min = mixNumber(from.min, to.min, p);
  output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
  mixAxis(output.x, from.x, to.x, p);
  mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
var userAgentContains = string => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : import_motion_utils24.noop;
function roundAxis(axis) {
  axis.min = roundPoint(axis.min);
  axis.max = roundPoint(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
  return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
}
function checkNodeWasScrollRoot(node) {
  var _a;
  return node !== node.root && ((_a = node.scroll) === null || _a === void 0 ? void 0 : _a.wasRoot);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode2({
  attachResizeListener: (ref, notify2) => addDomEvent(ref, "resize", notify2),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode2({
  measureScroll: instance => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode({});
      documentNode.mount(window);
      documentNode.setOptions({
        layoutScroll: true
      });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: instance => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: {
    Feature: PanGesture
  },
  drag: {
    Feature: DragGesture,
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/gestures/hover.mjs
var import_motion_dom13 = require("motion-dom@11.18.1");
function handleHoverEvent(node, event, lifecycle) {
  const {
    props
  } = node;
  if (node.animationState && props.whileHover) {
    node.animationState.setActive("whileHover", lifecycle === "Start");
  }
  const eventName = "onHover" + lifecycle;
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var HoverGesture = class extends Feature {
  mount() {
    const {
      current
    } = this.node;
    if (!current) return;
    this.unmount = (0, import_motion_dom13.hover)(current, startEvent => {
      handleHoverEvent(this.node, startEvent, "Start");
      return endEvent => handleHoverEvent(this.node, endEvent, "End");
    });
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let isFocusVisible = false;
    try {
      isFocusVisible = this.node.current.matches(":focus-visible");
    } catch (e) {
      isFocusVisible = true;
    }
    if (!isFocusVisible || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", true);
    this.isActive = true;
  }
  onBlur() {
    if (!this.isActive || !this.node.animationState) return;
    this.node.animationState.setActive("whileFocus", false);
    this.isActive = false;
  }
  mount() {
    this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/gestures/press.mjs
var import_motion_dom14 = require("motion-dom@11.18.1");
function handlePressEvent(node, event, lifecycle) {
  const {
    props
  } = node;
  if (node.animationState && props.whileTap) {
    node.animationState.setActive("whileTap", lifecycle === "Start");
  }
  const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
  const callback = props[eventName];
  if (callback) {
    frame.postRender(() => callback(event, extractEventInfo(event)));
  }
}
var PressGesture = class extends Feature {
  mount() {
    const {
      current
    } = this.node;
    if (!current) return;
    this.unmount = (0, import_motion_dom14.press)(current, startEvent => {
      handlePressEvent(this.node, startEvent, "Start");
      return (endEvent, {
        success
      }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
    }, {
      useGlobalTarget: this.node.props.globalTapTarget
    });
  }
  unmount() {}
};

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */new WeakMap();
var observers = /* @__PURE__ */new WeakMap();
var fireObserverCallback = entry => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = entries => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({
  root,
  ...options
}) {
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
      root,
      ...options
    });
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
  some: 0,
  all: 1
};
var InViewFeature = class extends Feature {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const {
      viewport = {}
    } = this.node.getProps();
    const {
      root,
      margin: rootMargin,
      amount = "some",
      once
    } = viewport;
    const options = {
      root: root ? root.current : void 0,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const onIntersectionUpdate = entry => {
      const {
        isIntersecting
      } = entry;
      if (this.isInView === isIntersecting) return;
      this.isInView = isIntersecting;
      if (once && !isIntersecting && this.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive("whileInView", isIntersecting);
      }
      const {
        onViewportEnter,
        onViewportLeave
      } = this.node.getProps();
      const callback = isIntersecting ? onViewportEnter : onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(this.node.current, options, onIntersectionUpdate);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver === "undefined") return;
    const {
      props,
      prevProps
    } = this.node;
    const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
    if (hasOptionsChanged) {
      this.startObserver();
    }
  }
  unmount() {}
};
function hasViewportOptionChanged({
  viewport = {}
}, {
  viewport: prevViewport = {}
} = {}) {
  return name => viewport[name] !== prevViewport[name];
}

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: {
    Feature: InViewFeature
  },
  tap: {
    Feature: PressGesture
  },
  focus: {
    Feature: FocusGesture
  },
  hover: {
    Feature: HoverGesture
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = {
  layout: {
    ProjectionNode: HTMLProjectionNode,
    MeasureLayout
  }
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = {
  current: null
};
var hasReducedMotionListener = {
  current: false
};

// node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser) return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = v => valueTypes.find(testValueType(v));

// node_modules/framer-motion/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */new WeakMap();

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (true) {
        warnOnce(nextValue.version === "11.18.2", `Attempting to mix Motion versions ${nextValue.version} with 11.18.2 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue, {
        owner: element
      }));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        if (existingValue.liveStyle === true) {
          existingValue.jump(nextValue);
        } else if (!existingValue.hasAnimated) {
          existingValue.set(nextValue);
        }
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, {
          owner: element
        }));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0) element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/VisualElement.mjs
var propEventHandlers = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
var VisualElement = class {
  scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
    return {};
  }
  constructor({
    parent,
    props,
    presenceContext,
    reducedMotionConfig,
    blockInitialAnimation,
    visualState
  }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */new Map();
    this.KeyframeResolver = KeyframeResolver;
    this.features = {};
    this.valueSubscriptions = /* @__PURE__ */new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current) return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      const now2 = time.now();
      if (this.renderScheduledAt < now2) {
        this.renderScheduledAt = now2;
        frame.render(this.render, false, true);
      }
    };
    const {
      latestValues,
      renderState,
      onUpdate
    } = visualState;
    this.onUpdate = onUpdate;
    this.latestValues = latestValues;
    this.baseTarget = {
      ...latestValues
    };
    this.initialValues = props.initial ? {
      ...latestValues
    } : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.presenceContext = presenceContext;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.blockInitialAnimation = Boolean(blockInitialAnimation);
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const {
      willChange,
      ...initialMotionValues
    } = this.scrapeMotionValuesFromProps(props, {}, this);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
  }
  mount(instance) {
    this.current = instance;
    visualElementStore.set(instance, this);
    if (this.projection && !this.projection.instance) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = this.parent.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (true) {
      warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
    }
    if (this.parent) this.parent.children.add(this);
    this.update(this.props, this.presenceContext);
  }
  unmount() {
    visualElementStore.delete(this.current);
    this.projection && this.projection.unmount();
    cancelFrame(this.notifyUpdate);
    cancelFrame(this.render);
    this.valueSubscriptions.forEach(remove => remove());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree && this.removeFromVariantTree();
    this.parent && this.parent.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    for (const key in this.features) {
      const feature = this.features[key];
      if (feature) {
        feature.unmount();
        feature.isMounted = false;
      }
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    if (this.valueSubscriptions.has(key)) {
      this.valueSubscriptions.get(key)();
    }
    const valueIsTransform = transformProps.has(key);
    const removeOnChange = value.on("change", latestValue => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && frame.preRender(this.notifyUpdate);
      if (valueIsTransform && this.projection) {
        this.projection.isTransformDirty = true;
      }
    });
    const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
    let removeSyncCheck;
    if (window.MotionCheckAppearSync) {
      removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
    }
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
      if (removeSyncCheck) removeSyncCheck();
      if (value.owner) value.stop();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
      return 0;
    }
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  updateFeatures() {
    let key = "animation";
    for (key in featureDefinitions) {
      const featureDefinition = featureDefinitions[key];
      if (!featureDefinition) continue;
      const {
        isEnabled,
        Feature: FeatureConstructor
      } = featureDefinition;
      if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
        this.features[key] = new FeatureConstructor(this);
      }
      if (this.features[key]) {
        const feature = this.features[key];
        if (feature.isMounted) {
          feature.update();
        } else {
          feature.mount();
          feature.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  update(props, presenceContext) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.prevProps = this.props;
    this.props = props;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = presenceContext;
    for (let i = 0; i < propEventHandlers.length; i++) {
      const key = propEventHandlers[i];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listenerName = "on" + key;
      const listener = props[listenerName];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
    if (this.handleChildMotionValue) {
      this.handleChildMotionValue();
    }
    this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    return this.props.variants ? this.props.variants[name] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(child) {
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    const existingValue = this.values.get(key);
    if (value !== existingValue) {
      if (existingValue) this.removeValue(key);
      this.bindToMotionValue(key, value);
      this.values.set(key, value);
      this.latestValues[key] = value.get();
    }
  }
  removeValue(key) {
    this.values.delete(key);
    const unsubscribe = this.valueSubscriptions.get(key);
    if (unsubscribe) {
      unsubscribe();
      this.valueSubscriptions.delete(key);
    }
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue === null ? void 0 : defaultValue, {
        owner: this
      });
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key, target) {
    var _a;
    let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
    if (value !== void 0 && value !== null) {
      if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
        value = parseFloat(value);
      } else if (!findValueType(value) && complex.test(target)) {
        value = getAnimatableNone2(key, target);
      }
      this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
    }
    return isMotionValue(value) ? value.get() : value;
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    var _a;
    const {
      initial
    } = this.props;
    let valueFromInitial;
    if (typeof initial === "string" || typeof initial === "object") {
      const variant = resolveVariantFromProps(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
      if (variant) {
        valueFromInitial = variant[key];
      }
    }
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target)) return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].notify(...args);
    }
  }
};

// node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = DOMKeyframesResolver;
  }
  sortInstanceNodePosition(a, b) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    return props.style ? props.style[key] : void 0;
  }
  removeValueFromRenderState(key, {
    vars,
    style
  }) {
    delete vars[key];
    delete style[key];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    const {
      children
    } = this.props;
    if (isMotionValue(children)) {
      this.childSubscription = children.on("change", latest => {
        if (this.current) {
          this.current.textContent = `${latest}`;
        }
      });
    }
  }
};

// node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "html";
    this.renderInstance = renderHTML;
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, {
    transformPagePoint
  }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, props) {
    buildHTMLStyles(renderState, latestValues, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps(props, prevProps, visualElement);
  }
};

// node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  constructor() {
    super(...arguments);
    this.type = "svg";
    this.isSVGTag = false;
    this.measureInstanceViewportBox = createBox;
  }
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
  }
  build(renderState, latestValues, props) {
    buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
  mount(instance) {
    this.isSVGTag = isSVGTag(instance.tagName);
    super.mount(instance);
  }
};

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var import_react29 = require("react@18.3.1");
var createDomVisualElement = (Component3, options) => {
  return isSVGComponent(Component3) ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
    allowProjection: Component3 !== import_react29.Fragment
  });
};

// node_modules/framer-motion/dist/es/render/components/motion/create.mjs
var createMotionComponent = /* @__PURE__ */createMotionComponentFactory({
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layout
}, createDomVisualElement);

// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /* @__PURE__ */createDOMMotionComponentProxy(createMotionComponent);

// node_modules/framer-motion/dist/es/render/dom/features-animation.mjs
var domAnimation = {
  renderer: createDomVisualElement,
  ...animations,
  ...gestureAnimations
};

// node_modules/framer-motion/dist/es/render/dom/features-max.mjs
var domMax = {
  ...domAnimation,
  ...drag,
  ...layout
};

// node_modules/framer-motion/dist/es/render/dom/features-min.mjs
var domMin = {
  renderer: createDomVisualElement,
  ...animations
};

// node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var import_react30 = require("react@18.3.1");
function useMotionValueEvent(value, event, callback) {
  (0, import_react30.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/observe.mjs
function observeTimeline(update, timeline) {
  let prevProgress;
  const onFrame = () => {
    const {
      currentTime
    } = timeline;
    const percentage = currentTime === null ? 0 : currentTime.value;
    const progress8 = percentage / 100;
    if (prevProgress !== progress8) {
      update(progress8);
    }
    prevProgress = progress8;
  };
  frame.update(onFrame, true);
  return () => cancelFrame(onFrame);
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs
var import_motion_dom15 = require("motion-dom@11.18.1");
var resizeHandlers = /* @__PURE__ */new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const {
      inlineSize,
      blockSize
    } = borderBoxSize[0];
    return {
      width: inlineSize,
      height: blockSize
    };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({
  target,
  contentRect,
  borderBoxSize
}) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach(handler => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined") return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer) createResizeObserver();
  const elements = (0, import_motion_dom15.resolveElements)(target);
  elements.forEach(element => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach(element => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach(callback => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler) createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/resize/index.mjs
function resize(a, b) {
  return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}

// node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
var import_motion_utils25 = require("motion-utils@11.18.1");
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time2) {
  const axis = info[axisName];
  const {
    length,
    position
  } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element[`scroll${position}`];
  axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = (0, import_motion_utils25.progress)(0, axis.scrollLength, axis.current);
  const elapsed = time2 - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time2) {
  updateAxisInfo(element, "x", info, time2);
  updateAxisInfo(element, "y", info, time2);
  info.time = time2;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
  const inset = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current.tagName === "svg") {
      const svgBoundingBox = current.getBoundingClientRect();
      current = current.parentElement;
      const parentBoundingBox = current.getBoundingClientRect();
      inset.x += svgBoundingBox.left - parentBoundingBox.left;
      inset.y += svgBoundingBox.top - parentBoundingBox.top;
    } else if (current instanceof SVGGraphicsElement) {
      const {
        x,
        y
      } = current.getBBox();
      inset.x += x;
      inset.y += y;
      let svg = null;
      let parent = current.parentNode;
      while (!svg) {
        if (parent.tagName === "svg") {
          svg = parent;
        }
        parent = current.parentNode;
      }
      current = svg;
    } else {
      break;
    }
  }
  return inset;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (edge in namedEdges) {
    edge = namedEdges[edge];
  }
  if (typeof edge === "string") {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (typeof edge === "number") {
    delta = length * edge;
  }
  return inset + delta;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
var defaultOffset2 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset2;
  let targetPoint = 0;
  let containerPoint = 0;
  if (typeof offset === "number") {
    offsetDefinition = [offset, offset];
  } else if (typeof offset === "string") {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
var ScrollOffset = {
  Enter: [[0, 1], [1, 1]],
  Exit: [[0, 0], [1, 0]],
  Any: [[1, 0], [0, 1]],
  All: [[0, 0], [1, 1]]
};

// node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
var point = {
  x: 0,
  y: 0
};
function getTargetSize(target) {
  return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : {
    width: target.clientWidth,
    height: target.clientHeight
  };
}
function resolveOffsets(container, info, options) {
  const {
    offset: offsetDefinition = ScrollOffset.All
  } = options;
  const {
    target = container,
    axis = "y"
  } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? {
    width: container.scrollWidth,
    height: container.scrollHeight
  } : getTargetSize(target);
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i = 0; i < numOffsets; i++) {
    const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
      hasChanged = true;
    }
    info[axis].offset[i] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate(info[axis].offset, defaultOffset(offsetDefinition), {
      clamp: false
    });
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
}

// node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node !== container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
  if (true) {
    if (container && target && target !== container) {
      warnOnce(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
    }
  }
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  return {
    measure: () => measure(element, options.target, info),
    update: time2 => {
      updateScrollInfo(element, info, time2);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: () => onScroll(info)
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
var scrollListeners = /* @__PURE__ */new WeakMap();
var resizeListeners = /* @__PURE__ */new WeakMap();
var onScrollHandlers = /* @__PURE__ */new WeakMap();
var getEventTarget = element => element === document.documentElement ? window : element;
function scrollInfo(onScroll, {
  container = document.documentElement,
  ...options
} = {}) {
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const measureAll = () => {
      for (const handler of containerHandlers) handler.measure();
    };
    const updateAll = () => {
      for (const handler of containerHandlers) {
        handler.update(frameData.timestamp);
      }
    };
    const notifyAll2 = () => {
      for (const handler of containerHandlers) handler.notify();
    };
    const listener2 = () => {
      frame.read(measureAll, false, true);
      frame.read(updateAll, false, true);
      frame.update(notifyAll2, false, true);
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, {
      passive: true
    });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, {
      passive: true
    });
  }
  const listener = scrollListeners.get(container);
  frame.read(listener, false, true);
  return () => {
    var _a;
    cancelFrame(listener);
    const currentHandlers = onScrollHandlers.get(container);
    if (!currentHandlers) return;
    currentHandlers.delete(containerHandler);
    if (currentHandlers.size) return;
    const scrollListener = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (scrollListener) {
      getEventTarget(container).removeEventListener("scroll", scrollListener);
      (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
      window.removeEventListener("resize", scrollListener);
    }
  };
}

// node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
var import_motion_dom16 = require("motion-dom@11.18.1");
var import_motion_utils26 = require("motion-utils@11.18.1");
function scrollTimelineFallback({
  source,
  container,
  axis = "y"
}) {
  if (source) container = source;
  const currentTime = {
    value: 0
  };
  const cancel = scrollInfo(info => {
    currentTime.value = info[axis].progress * 100;
  }, {
    container,
    axis
  });
  return {
    currentTime,
    cancel
  };
}
var timelineCache = /* @__PURE__ */new Map();
function getTimeline({
  source,
  container = document.documentElement,
  axis = "y"
} = {}) {
  if (source) container = source;
  if (!timelineCache.has(container)) {
    timelineCache.set(container, {});
  }
  const elementCache = timelineCache.get(container);
  if (!elementCache[axis]) {
    elementCache[axis] = (0, import_motion_dom16.supportsScrollTimeline)() ? new ScrollTimeline({
      source: container,
      axis
    }) : scrollTimelineFallback({
      source: container,
      axis
    });
  }
  return elementCache[axis];
}
function isOnScrollWithInfo(onScroll) {
  return onScroll.length === 2;
}
function needsElementTracking(options) {
  return options && (options.target || options.offset);
}
function scrollFunction(onScroll, options) {
  if (isOnScrollWithInfo(onScroll) || needsElementTracking(options)) {
    return scrollInfo(info => {
      onScroll(info[options.axis].progress, info);
    }, options);
  } else {
    return observeTimeline(onScroll, getTimeline(options));
  }
}
function scrollAnimation(animation, options) {
  animation.flatten();
  if (needsElementTracking(options)) {
    animation.pause();
    return scrollInfo(info => {
      animation.time = animation.duration * info[options.axis].progress;
    }, options);
  } else {
    const timeline = getTimeline(options);
    if (animation.attachTimeline) {
      return animation.attachTimeline(timeline, valueAnimation => {
        valueAnimation.pause();
        return observeTimeline(progress8 => {
          valueAnimation.time = valueAnimation.duration * progress8;
        }, timeline);
      });
    } else {
      return import_motion_utils26.noop;
    }
  }
}
function scroll(onScroll, {
  axis = "y",
  ...options
} = {}) {
  const optionsWithDefaults = {
    axis,
    ...options
  };
  return typeof onScroll === "function" ? scrollFunction(onScroll, optionsWithDefaults) : scrollAnimation(onScroll, optionsWithDefaults);
}

// node_modules/framer-motion/dist/es/value/use-scroll.mjs
var import_react31 = require("react@18.3.1");
var import_motion_utils27 = require("motion-utils@11.18.1");
function refWarning(name, ref) {
  (0, import_motion_utils27.warning)(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll({
  container,
  target,
  layoutEffect = true,
  ...options
} = {}) {
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : import_react31.useEffect;
  useLifecycleEffect(() => {
    refWarning("target", target);
    refWarning("container", container);
    return scroll((_progress, {
      x,
      y
    }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, {
      ...options,
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    });
  }, [container, target, JSON.stringify(options.offset)]);
  return values;
}

// node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.mjs
function useElementScroll(ref) {
  if (true) {
    warnOnce(false, "useElementScroll is deprecated. Convert to useScroll({ container: ref }).");
  }
  return useScroll({
    container: ref
  });
}

// node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs
function useViewportScroll() {
  if (true) {
    warnOnce(false, "useViewportScroll is deprecated. Convert to useScroll().");
  }
  return useScroll();
}

// node_modules/framer-motion/dist/es/value/use-motion-value.mjs
var import_react32 = require("react@18.3.1");
function useMotionValue(initial) {
  const value = useConstant(() => motionValue(initial));
  const {
    isStatic
  } = (0, import_react32.useContext)(MotionConfigContext);
  if (isStatic) {
    const [, setLatest] = (0, import_react32.useState)(initial);
    (0, import_react32.useEffect)(() => value.on("change", setLatest), []);
  }
  return value;
}

// node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function useCombineMotionValues(values, combineValues) {
  const value = useMotionValue(combineValues());
  const updateValue = () => value.set(combineValues());
  updateValue();
  useIsomorphicLayoutEffect(() => {
    const scheduleUpdate = () => frame.preRender(updateValue, false, true);
    const subscriptions = values.map(v => v.on("change", scheduleUpdate));
    return () => {
      subscriptions.forEach(unsubscribe => unsubscribe());
      cancelFrame(updateValue);
    };
  });
  return value;
}

// node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function useMotionTemplate(fragments, ...values) {
  const numFragments = fragments.length;
  function buildValue() {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value = values[i];
      if (value) {
        output += isMotionValue(value) ? value.get() : value;
      }
    }
    return output;
  }
  return useCombineMotionValues(values.filter(isMotionValue), buildValue);
}

// node_modules/framer-motion/dist/es/value/use-spring.mjs
var import_react33 = require("react@18.3.1");
function toNumber(v) {
  if (typeof v === "number") return v;
  return parseFloat(v);
}
function useSpring(source, config = {}) {
  const {
    isStatic
  } = (0, import_react33.useContext)(MotionConfigContext);
  const activeSpringAnimation = (0, import_react33.useRef)(null);
  const value = useMotionValue(isMotionValue(source) ? toNumber(source.get()) : source);
  const latestValue = (0, import_react33.useRef)(value.get());
  const latestSetter = (0, import_react33.useRef)(() => {});
  const startAnimation = () => {
    const animation = activeSpringAnimation.current;
    if (animation && animation.time === 0) {
      animation.sample(frameData.delta);
    }
    stopAnimation2();
    activeSpringAnimation.current = animateValue({
      keyframes: [value.get(), latestValue.current],
      velocity: value.getVelocity(),
      type: "spring",
      restDelta: 1e-3,
      restSpeed: 0.01,
      ...config,
      onUpdate: latestSetter.current
    });
  };
  const stopAnimation2 = () => {
    if (activeSpringAnimation.current) {
      activeSpringAnimation.current.stop();
    }
  };
  (0, import_react33.useInsertionEffect)(() => {
    return value.attach((v, set) => {
      if (isStatic) return set(v);
      latestValue.current = v;
      latestSetter.current = set;
      frame.update(startAnimation);
      return value.get();
    }, stopAnimation2);
  }, [JSON.stringify(config)]);
  useIsomorphicLayoutEffect(() => {
    if (isMotionValue(source)) {
      return source.on("change", v => value.set(toNumber(v)));
    }
  }, [value]);
  return value;
}

// node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
var import_react34 = require("react@18.3.1");
function useAnimationFrame(callback) {
  const initialTimestamp = (0, import_react34.useRef)(0);
  const {
    isStatic
  } = (0, import_react34.useContext)(MotionConfigContext);
  (0, import_react34.useEffect)(() => {
    if (isStatic) return;
    const provideTimeSinceStart = ({
      timestamp,
      delta
    }) => {
      if (!initialTimestamp.current) initialTimestamp.current = timestamp;
      callback(timestamp - initialTimestamp.current, delta);
    };
    frame.update(provideTimeSinceStart, true);
    return () => cancelFrame(provideTimeSinceStart);
  }, [callback]);
}

// node_modules/framer-motion/dist/es/value/use-time.mjs
function useTime() {
  const time2 = useMotionValue(0);
  useAnimationFrame(t => time2.set(t));
  return time2;
}

// node_modules/framer-motion/dist/es/utils/transform.mjs
var isCustomValueType = v => {
  return v && typeof v === "object" && v.mix;
};
var getMixer2 = v => isCustomValueType(v) ? v.mix : void 0;
function transform(...args) {
  const useImmediate = !Array.isArray(args[0]);
  const argOffset = useImmediate ? 0 : -1;
  const inputValue = args[0 + argOffset];
  const inputRange = args[1 + argOffset];
  const outputRange = args[2 + argOffset];
  const options = args[3 + argOffset];
  const interpolator = interpolate(inputRange, outputRange, {
    mixer: getMixer2(outputRange[0]),
    ...options
  });
  return useImmediate ? interpolator(inputValue) : interpolator;
}

// node_modules/framer-motion/dist/es/value/use-computed.mjs
function useComputed(compute) {
  collectMotionValues.current = [];
  compute();
  const value = useCombineMotionValues(collectMotionValues.current, compute);
  collectMotionValues.current = void 0;
  return value;
}

// node_modules/framer-motion/dist/es/value/use-transform.mjs
function useTransform(input, inputRangeOrTransformer, outputRange, options) {
  if (typeof input === "function") {
    return useComputed(input);
  }
  const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
  return Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
  const latest = useConstant(() => []);
  return useCombineMotionValues(values, () => {
    latest.length = 0;
    const numValues = values.length;
    for (let i = 0; i < numValues; i++) {
      latest[i] = values[i].get();
    }
    return transformer(latest);
  });
}

// node_modules/framer-motion/dist/es/value/use-velocity.mjs
function useVelocity(value) {
  const velocity = useMotionValue(value.getVelocity());
  const updateVelocity = () => {
    const latest = value.getVelocity();
    velocity.set(latest);
    if (latest) frame.update(updateVelocity);
  };
  useMotionValueEvent(value, "change", () => {
    frame.update(updateVelocity, false, true);
  });
  return velocity;
}

// node_modules/framer-motion/dist/es/value/use-will-change/get-will-change-name.mjs
function getWillChangeName(name) {
  if (transformProps.has(name)) {
    return "transform";
  } else if (acceleratedValues.has(name)) {
    return camelToDash(name);
  }
}

// node_modules/framer-motion/dist/es/value/use-will-change/WillChangeMotionValue.mjs
var WillChangeMotionValue = class extends MotionValue {
  constructor() {
    super(...arguments);
    this.values = [];
  }
  add(name) {
    const styleName = getWillChangeName(name);
    if (styleName) {
      addUniqueItem(this.values, styleName);
      this.update();
    }
  }
  update() {
    this.set(this.values.length ? this.values.join(", ") : "auto");
  }
};

// node_modules/framer-motion/dist/es/value/use-will-change/index.mjs
function useWillChange() {
  return useConstant(() => new WillChangeMotionValue("auto"));
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var import_react35 = require("react@18.3.1");
function useReducedMotion() {
  !hasReducedMotionListener.current && initPrefersReducedMotion();
  const [shouldReduceMotion] = (0, import_react35.useState)(prefersReducedMotion.current);
  if (true) {
    warnOnce(shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
  }
  return shouldReduceMotion;
}

// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion-config.mjs
var import_react36 = require("react@18.3.1");
function useReducedMotionConfig() {
  const reducedMotionPreference = useReducedMotion();
  const {
    reducedMotion
  } = (0, import_react36.useContext)(MotionConfigContext);
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/animation-controls.mjs
var import_motion_utils28 = require("motion-utils@11.18.1");
function stopAnimation(visualElement) {
  visualElement.values.forEach(value => value.stop());
}
function setVariants(visualElement, variantLabels) {
  const reversedLabels = [...variantLabels].reverse();
  reversedLabels.forEach(key => {
    const variant = visualElement.getVariant(key);
    variant && setTarget(visualElement, variant);
    if (visualElement.variantChildren) {
      visualElement.variantChildren.forEach(child => {
        setVariants(child, variantLabels);
      });
    }
  });
}
function setValues(visualElement, definition) {
  if (Array.isArray(definition)) {
    return setVariants(visualElement, definition);
  } else if (typeof definition === "string") {
    return setVariants(visualElement, [definition]);
  } else {
    setTarget(visualElement, definition);
  }
}
function animationControls() {
  let hasMounted = false;
  const subscribers = /* @__PURE__ */new Set();
  const controls = {
    subscribe(visualElement) {
      subscribers.add(visualElement);
      return () => void subscribers.delete(visualElement);
    },
    start(definition, transitionOverride) {
      (0, import_motion_utils28.invariant)(hasMounted, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      const animations2 = [];
      subscribers.forEach(visualElement => {
        animations2.push(animateVisualElement(visualElement, definition, {
          transitionOverride
        }));
      });
      return Promise.all(animations2);
    },
    set(definition) {
      (0, import_motion_utils28.invariant)(hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
      return subscribers.forEach(visualElement => {
        setValues(visualElement, definition);
      });
    },
    stop() {
      subscribers.forEach(visualElement => {
        stopAnimation(visualElement);
      });
    },
    mount() {
      hasMounted = true;
      return () => {
        hasMounted = false;
        controls.stop();
      };
    }
  };
  return controls;
}

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react37 = require("react@18.3.1");
function useUnmountEffect(callback) {
  return (0, import_react37.useEffect)(() => () => callback(), []);
}

// node_modules/framer-motion/dist/es/utils/wrap.mjs
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// node_modules/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs
function getEasingForSegment(easing, i) {
  return isEasingArray(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

// node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function isDOMKeyframes(keyframes2) {
  return typeof keyframes2 === "object" && !Array.isArray(keyframes2);
}

// node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
var import_motion_dom17 = require("motion-dom@11.18.1");
function resolveSubjects(subject, keyframes2, scope, selectorCache) {
  if (typeof subject === "string" && isDOMKeyframes(keyframes2)) {
    return (0, import_motion_dom17.resolveElements)(subject, scope, selectorCache);
  } else if (subject instanceof NodeList) {
    return Array.from(subject);
  } else if (Array.isArray(subject)) {
    return subject;
  } else {
    return [subject];
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
  return duration * (repeat + 1);
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function calcNextTime(current, next, prev, labels) {
  var _a;
  if (typeof next === "number") {
    return next;
  } else if (next.startsWith("-") || next.startsWith("+")) {
    return Math.max(0, current + parseFloat(next));
  } else if (next === "<") {
    return prev;
  } else {
    return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function eraseKeyframes(sequence, startTime, endTime) {
  for (let i = 0; i < sequence.length; i++) {
    const keyframe = sequence[i];
    if (keyframe.at > startTime && keyframe.at < endTime) {
      removeItem(sequence, keyframe);
      i--;
    }
  }
}
function addKeyframes(sequence, keyframes2, easing, offset, startTime, endTime) {
  eraseKeyframes(sequence, startTime, endTime);
  for (let i = 0; i < keyframes2.length; i++) {
    sequence.push({
      value: keyframes2[i],
      at: mixNumber(startTime, endTime, offset[i]),
      easing: getEasingForSegment(easing, i)
    });
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function normalizeTimes(times, repeat) {
  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] / (repeat + 1);
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function compareByTime(a, b) {
  if (a.at === b.at) {
    if (a.value === null) return 1;
    if (b.value === null) return -1;
    return 0;
  } else {
    return a.at - b.at;
  }
}

// node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var import_motion_dom18 = require("motion-dom@11.18.1");
var import_motion_utils29 = require("motion-utils@11.18.1");
var defaultSegmentEasing = "easeInOut";
var MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, {
  defaultTransition = {},
  ...sequenceTransition
} = {}, scope, generators2) {
  const defaultDuration = defaultTransition.duration || 0.3;
  const animationDefinitions = /* @__PURE__ */new Map();
  const sequences = /* @__PURE__ */new Map();
  const elementCache = {};
  const timeLabels = /* @__PURE__ */new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  for (let i = 0; i < sequence.length; i++) {
    const segment = sequence[i];
    if (typeof segment === "string") {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(segment.name, calcNextTime(currentTime, segment.at, prevTime, timeLabels));
      continue;
    }
    let [subject, keyframes2, transition = {}] = segment;
    if (transition.at !== void 0) {
      currentTime = calcNextTime(currentTime, transition.at, prevTime, timeLabels);
    }
    let maxDuration2 = 0;
    const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
      const valueKeyframesAsList = keyframesAsList(valueKeyframes);
      const {
        delay: delay2 = 0,
        times = defaultOffset(valueKeyframesAsList),
        type = "keyframes",
        repeat,
        repeatType,
        repeatDelay = 0,
        ...remainingTransition
      } = valueTransition;
      let {
        ease: ease2 = defaultTransition.ease || "easeOut",
        duration
      } = valueTransition;
      const calculatedDelay = typeof delay2 === "function" ? delay2(elementIndex, numSubjects) : delay2;
      const numKeyframes = valueKeyframesAsList.length;
      const createGenerator = (0, import_motion_dom18.isGenerator)(type) ? type : generators2 === null || generators2 === void 0 ? void 0 : generators2[type];
      if (numKeyframes <= 2 && createGenerator) {
        let absoluteDelta = 100;
        if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
          const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
          absoluteDelta = Math.abs(delta);
        }
        const springTransition = {
          ...remainingTransition
        };
        if (duration !== void 0) {
          springTransition.duration = (0, import_motion_utils29.secondsToMilliseconds)(duration);
        }
        const springEasing = (0, import_motion_dom18.createGeneratorEasing)(springTransition, absoluteDelta, createGenerator);
        ease2 = springEasing.ease;
        duration = springEasing.duration;
      }
      duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
      const startTime = currentTime + calculatedDelay;
      if (times.length === 1 && times[0] === 0) {
        times[1] = 1;
      }
      const remainder = times.length - valueKeyframesAsList.length;
      remainder > 0 && fillOffset(times, remainder);
      valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
      if (repeat) {
        (0, import_motion_utils29.invariant)(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
        duration = calculateRepeatDuration(duration, repeat);
        const originalKeyframes = [...valueKeyframesAsList];
        const originalTimes = [...times];
        ease2 = Array.isArray(ease2) ? [...ease2] : [ease2];
        const originalEase = [...ease2];
        for (let repeatIndex = 0; repeatIndex < repeat; repeatIndex++) {
          valueKeyframesAsList.push(...originalKeyframes);
          for (let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++) {
            times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
            ease2.push(keyframeIndex === 0 ? "linear" : getEasingForSegment(originalEase, keyframeIndex - 1));
          }
        }
        normalizeTimes(times, repeat);
      }
      const targetTime = startTime + duration;
      addKeyframes(valueSequence, valueKeyframesAsList, ease2, times, startTime, targetTime);
      maxDuration2 = Math.max(calculatedDelay + duration, maxDuration2);
      totalDuration = Math.max(targetTime, totalDuration);
    };
    if (isMotionValue(subject)) {
      const subjectSequence = getSubjectSequence(subject, sequences);
      resolveValueSequence(keyframes2, transition, getValueSequence("default", subjectSequence));
    } else {
      const subjects = resolveSubjects(subject, keyframes2, scope, elementCache);
      const numSubjects = subjects.length;
      for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
        keyframes2 = keyframes2;
        transition = transition;
        const thisSubject = subjects[subjectIndex];
        const subjectSequence = getSubjectSequence(thisSubject, sequences);
        for (const key in keyframes2) {
          resolveValueSequence(keyframes2[key], getValueTransition4(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
        }
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration2;
  }
  sequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      valueSequence.sort(compareByTime);
      const keyframes2 = [];
      const valueOffset = [];
      const valueEasing = [];
      for (let i = 0; i < valueSequence.length; i++) {
        const {
          at,
          value,
          easing
        } = valueSequence[i];
        keyframes2.push(value);
        valueOffset.push((0, import_motion_utils29.progress)(0, totalDuration, at));
        valueEasing.push(easing || "easeOut");
      }
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes2.unshift(keyframes2[0]);
        valueEasing.unshift(defaultSegmentEasing);
      }
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes2.push(null);
      }
      if (!animationDefinitions.has(element)) {
        animationDefinitions.set(element, {
          keyframes: {},
          transition: {}
        });
      }
      const definition = animationDefinitions.get(element);
      definition.keyframes[key] = keyframes2;
      definition.transition[key] = {
        ...defaultTransition,
        duration: totalDuration,
        ease: valueEasing,
        times: valueOffset,
        ...sequenceTransition
      };
    }
  });
  return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
  !sequences.has(subject) && sequences.set(subject, {});
  return sequences.get(subject);
}
function getValueSequence(name, sequences) {
  if (!sequences[name]) sequences[name] = [];
  return sequences[name];
}
function keyframesAsList(keyframes2) {
  return Array.isArray(keyframes2) ? keyframes2 : [keyframes2];
}
function getValueTransition4(transition, key) {
  return transition && transition[key] ? {
    ...transition,
    ...transition[key]
  } : {
    ...transition
  };
}
var isNumber = keyframe => typeof keyframe === "number";
var isNumberKeyframesArray = keyframes2 => keyframes2.every(isNumber);

// node_modules/framer-motion/dist/es/render/object/ObjectVisualElement.mjs
function isObjectKey(key, object) {
  return key in object;
}
var ObjectVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.type = "object";
  }
  readValueFromInstance(instance, key) {
    if (isObjectKey(key, instance)) {
      const value = instance[key];
      if (typeof value === "string" || typeof value === "number") {
        return value;
      }
    }
    return void 0;
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  removeValueFromRenderState(key, renderState) {
    delete renderState.output[key];
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  build(renderState, latestValues) {
    Object.assign(renderState.output, latestValues);
  }
  renderInstance(instance, {
    output
  }) {
    Object.assign(instance, output);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};

// node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function createDOMVisualElement(element) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  };
  const node = isSVGElement(element) ? new SVGVisualElement(options) : new HTMLVisualElement(options);
  node.mount(element);
  visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
  const options = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        output: {}
      },
      latestValues: {}
    }
  };
  const node = new ObjectVisualElement(options);
  node.mount(subject);
  visualElementStore.set(subject, node);
}

// node_modules/framer-motion/dist/es/animation/animate/subject.mjs
var import_motion_utils30 = require("motion-utils@11.18.1");
function isSingleValue(subject, keyframes2) {
  return isMotionValue(subject) || typeof subject === "number" || typeof subject === "string" && !isDOMKeyframes(keyframes2);
}
function animateSubject(subject, keyframes2, options, scope) {
  const animations2 = [];
  if (isSingleValue(subject, keyframes2)) {
    animations2.push(animateSingleValue(subject, isDOMKeyframes(keyframes2) ? keyframes2.default || keyframes2 : keyframes2, options ? options.default || options : options));
  } else {
    const subjects = resolveSubjects(subject, keyframes2, scope);
    const numSubjects = subjects.length;
    (0, import_motion_utils30.invariant)(Boolean(numSubjects), "No valid elements provided.");
    for (let i = 0; i < numSubjects; i++) {
      const thisSubject = subjects[i];
      const createVisualElement = thisSubject instanceof Element ? createDOMVisualElement : createObjectVisualElement;
      if (!visualElementStore.has(thisSubject)) {
        createVisualElement(thisSubject);
      }
      const visualElement = visualElementStore.get(thisSubject);
      const transition = {
        ...options
      };
      if ("delay" in transition && typeof transition.delay === "function") {
        transition.delay = transition.delay(i, numSubjects);
      }
      animations2.push(...animateTarget(visualElement, {
        ...keyframes2,
        transition
      }, {}));
    }
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function animateSequence(sequence, options, scope) {
  const animations2 = [];
  const animationDefinitions = createAnimationsFromSequence(sequence, options, scope, {
    spring
  });
  animationDefinitions.forEach(({
    keyframes: keyframes2,
    transition
  }, subject) => {
    animations2.push(...animateSubject(subject, keyframes2, transition));
  });
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animate/index.mjs
var import_motion_dom19 = require("motion-dom@11.18.1");
function isSequence(value) {
  return Array.isArray(value) && value.some(Array.isArray);
}
function createScopedAnimate(scope) {
  function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
    let animations2 = [];
    if (isSequence(subjectOrSequence)) {
      animations2 = animateSequence(subjectOrSequence, optionsOrKeyframes, scope);
    } else {
      animations2 = animateSubject(subjectOrSequence, optionsOrKeyframes, options, scope);
    }
    const animation = new import_motion_dom19.GroupPlaybackControls(animations2);
    if (scope) {
      scope.animations.push(animation);
    }
    return animation;
  }
  return scopedAnimate;
}
var animate = createScopedAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate.mjs
function useAnimate() {
  const scope = useConstant(() => ({
    current: null,
    animations: []
  }));
  const animate2 = useConstant(() => createScopedAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach(animation => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/style.mjs
function setCSSVar(element, name, value) {
  element.style.setProperty(`--${name}`, value);
}
function setStyle(element, name, value) {
  element.style[name] = value;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/utils/supports-partial-keyframes.mjs
var import_motion_utils31 = require("motion-utils@11.18.1");
var supportsPartialKeyframes = /* @__PURE__ */(0, import_motion_utils31.memo)(() => {
  try {
    document.createElement("div").animate({
      opacity: [1]
    });
  } catch (e) {
    return false;
  }
  return true;
});

// node_modules/framer-motion/dist/es/animation/animators/waapi/NativeAnimation.mjs
var import_motion_dom20 = require("motion-dom@11.18.1");
var import_motion_utils32 = require("motion-utils@11.18.1");
var state = /* @__PURE__ */new WeakMap();
function hydrateKeyframes(valueName, keyframes2, read) {
  for (let i = 0; i < keyframes2.length; i++) {
    if (keyframes2[i] === null) {
      keyframes2[i] = i === 0 ? read() : keyframes2[i - 1];
    }
    if (typeof keyframes2[i] === "number" && browserNumberValueTypes[valueName]) {
      keyframes2[i] = browserNumberValueTypes[valueName].transform(keyframes2[i]);
    }
  }
  if (!supportsPartialKeyframes() && keyframes2.length < 2) {
    keyframes2.unshift(read());
  }
}
var defaultEasing2 = "easeOut";
function getElementAnimationState(element) {
  const animationState = state.get(element) || /* @__PURE__ */new Map();
  state.set(element, animationState);
  return state.get(element);
}
var NativeAnimation = class extends import_motion_dom20.NativeAnimationControls {
  constructor(element, valueName, valueKeyframes, options) {
    const isCSSVar = valueName.startsWith("--");
    (0, import_motion_utils32.invariant)(typeof options.type !== "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "framer-motion"?`);
    const existingAnimation = getElementAnimationState(element).get(valueName);
    existingAnimation && existingAnimation.stop();
    const readInitialKeyframe = () => {
      return valueName.startsWith("--") ? element.style.getPropertyValue(valueName) : window.getComputedStyle(element)[valueName];
    };
    if (!Array.isArray(valueKeyframes)) {
      valueKeyframes = [valueKeyframes];
    }
    hydrateKeyframes(valueName, valueKeyframes, readInitialKeyframe);
    if ((0, import_motion_dom20.isGenerator)(options.type)) {
      const generatorOptions = (0, import_motion_dom20.createGeneratorEasing)(options, 100, options.type);
      options.ease = (0, import_motion_dom20.supportsLinearEasing)() ? generatorOptions.ease : defaultEasing2;
      options.duration = (0, import_motion_utils32.secondsToMilliseconds)(generatorOptions.duration);
      options.type = "keyframes";
    } else {
      options.ease = options.ease || defaultEasing2;
    }
    const onFinish = () => {
      this.setValue(element, valueName, getFinalKeyframe(valueKeyframes, options));
      this.cancel();
      this.resolveFinishedPromise();
    };
    const init = () => {
      this.setValue = isCSSVar ? setCSSVar : setStyle;
      this.options = options;
      this.updateFinishedPromise();
      this.removeAnimation = () => {
        const elementState = state.get(element);
        elementState && elementState.delete(valueName);
      };
    };
    if (!supportsWaapi()) {
      super();
      init();
      onFinish();
    } else {
      super(startWaapiAnimation(element, valueName, valueKeyframes, options));
      init();
      if (options.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = onFinish;
      getElementAnimationState(element).set(valueName, this);
    }
  }
  then(resolve, reject) {
    return this.currentFinishedPromise.then(resolve, reject);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise(resolve => {
      this.resolveFinishedPromise = resolve;
    });
  }
  play() {
    if (this.state === "finished") {
      this.updateFinishedPromise();
    }
    super.play();
  }
  cancel() {
    this.removeAnimation();
    super.cancel();
  }
};

// node_modules/framer-motion/dist/es/animation/animators/waapi/animate-elements.mjs
var import_motion_dom21 = require("motion-dom@11.18.1");
var import_motion_utils33 = require("motion-utils@11.18.1");
function animateElements(elementOrSelector, keyframes2, options, scope) {
  const elements = (0, import_motion_dom21.resolveElements)(elementOrSelector, scope);
  const numElements = elements.length;
  (0, import_motion_utils33.invariant)(Boolean(numElements), "No valid element provided.");
  const animations2 = [];
  for (let i = 0; i < numElements; i++) {
    const element = elements[i];
    const elementTransition = {
      ...options
    };
    if (typeof elementTransition.delay === "function") {
      elementTransition.delay = elementTransition.delay(i, numElements);
    }
    for (const valueName in keyframes2) {
      const valueKeyframes = keyframes2[valueName];
      const valueOptions = {
        ...(0, import_motion_dom21.getValueTransition)(elementTransition, valueName)
      };
      valueOptions.duration = valueOptions.duration ? (0, import_motion_utils33.secondsToMilliseconds)(valueOptions.duration) : valueOptions.duration;
      valueOptions.delay = (0, import_motion_utils33.secondsToMilliseconds)(valueOptions.delay || 0);
      animations2.push(new NativeAnimation(element, valueName, valueKeyframes, valueOptions));
    }
  }
  return animations2;
}

// node_modules/framer-motion/dist/es/animation/animators/waapi/animate-style.mjs
var import_motion_dom22 = require("motion-dom@11.18.1");
var createScopedWaapiAnimate = scope => {
  function scopedAnimate(elementOrSelector, keyframes2, options) {
    return new import_motion_dom22.GroupPlaybackControls(animateElements(elementOrSelector, keyframes2, options, scope));
  }
  return scopedAnimate;
};
var animateMini = /* @__PURE__ */createScopedWaapiAnimate();

// node_modules/framer-motion/dist/es/animation/hooks/use-animate-style.mjs
function useAnimateMini() {
  const scope = useConstant(() => ({
    current: null,
    animations: []
  }));
  const animate2 = useConstant(() => createScopedWaapiAnimate(scope));
  useUnmountEffect(() => {
    scope.animations.forEach(animation => animation.stop());
  });
  return [scope, animate2];
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs
function useAnimationControls() {
  const controls = useConstant(animationControls);
  useIsomorphicLayoutEffect(controls.mount, []);
  return controls;
}
var useAnimation = useAnimationControls;

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react38 = require("react@18.3.1");
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react38.useEffect)(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs
var DragControls = class {
  constructor() {
    this.componentControls = /* @__PURE__ */new Set();
  }
  subscribe(controls) {
    this.componentControls.add(controls);
    return () => this.componentControls.delete(controls);
  }
  start(event, options) {
    this.componentControls.forEach(controls => {
      controls.start(event.nativeEvent || event, options);
    });
  }
};
var createDragControls = () => new DragControls();
function useDragControls() {
  return useConstant(createDragControls);
}

// node_modules/framer-motion/dist/es/motion/utils/is-motion-component.mjs
function isMotionComponent(component) {
  return component !== null && typeof component === "object" && motionComponentSymbol in component;
}

// node_modules/framer-motion/dist/es/motion/utils/unwrap-motion-component.mjs
function unwrapMotionComponent(component) {
  if (isMotionComponent(component)) {
    return component[motionComponentSymbol];
  }
  return void 0;
}

// node_modules/framer-motion/dist/es/projection/use-instant-layout-transition.mjs
function useInstantLayoutTransition() {
  return startTransition;
}
function startTransition(callback) {
  if (!rootProjectionNode.current) return;
  rootProjectionNode.current.isUpdating = false;
  rootProjectionNode.current.blockUpdate();
  callback && callback();
}

// node_modules/framer-motion/dist/es/projection/use-reset-projection.mjs
var import_react39 = require("react@18.3.1");
function useResetProjection() {
  const reset = (0, import_react39.useCallback)(() => {
    const root = rootProjectionNode.current;
    if (!root) return;
    root.resetTree();
  }, []);
  return reset;
}

// node_modules/framer-motion/dist/es/utils/use-cycle.mjs
var import_react40 = require("react@18.3.1");
function useCycle(...items) {
  const index = (0, import_react40.useRef)(0);
  const [item, setItem] = (0, import_react40.useState)(items[index.current]);
  const runCycle = (0, import_react40.useCallback)(next => {
    index.current = typeof next !== "number" ? wrap(0, items.length, index.current + 1) : next;
    setItem(items[index.current]);
  }, [items.length, ...items]);
  return [item, runCycle];
}

// node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs
var import_motion_dom23 = require("motion-dom@11.18.1");
var thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, {
  root,
  margin: rootMargin,
  amount = "some"
} = {}) {
  const elements = (0, import_motion_dom23.resolveElements)(elementOrSelector);
  const activeIntersections = /* @__PURE__ */new WeakMap();
  const onIntersectionChange = entries => {
    entries.forEach(entry => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd)) return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer2.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer2 = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach(element => observer2.observe(element));
  return () => observer2.disconnect();
}

// node_modules/framer-motion/dist/es/utils/use-in-view.mjs
var import_react41 = require("react@18.3.1");
function useInView(ref, {
  root,
  margin,
  amount,
  once = false
} = {}) {
  const [isInView, setInView] = (0, import_react41.useState)(false);
  (0, import_react41.useEffect)(() => {
    if (!ref.current || once && isInView) return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition.mjs
var import_react42 = require("react@18.3.1");
function useInstantTransition() {
  const [forceUpdate, forcedRenderCount] = useForceUpdate();
  const startInstantLayoutTransition = useInstantLayoutTransition();
  const unlockOnFrameRef = (0, import_react42.useRef)(-1);
  (0, import_react42.useEffect)(() => {
    frame.postRender(() => frame.postRender(() => {
      if (forcedRenderCount !== unlockOnFrameRef.current) return;
      instantAnimationState.current = false;
    }));
  }, [forcedRenderCount]);
  return callback => {
    startInstantLayoutTransition(() => {
      instantAnimationState.current = true;
      forceUpdate();
      callback();
      unlockOnFrameRef.current = forcedRenderCount + 1;
    });
  };
}
function disableInstantTransitions() {
  instantAnimationState.current = false;
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/store-id.mjs
var appearStoreId = (elementId, valueName) => {
  const key = transformProps.has(valueName) ? "transform" : valueName;
  return `${elementId}: ${key}`;
};

// node_modules/framer-motion/dist/es/animation/optimized-appear/store.mjs
var appearAnimationStore = /* @__PURE__ */new Map();
var appearComplete = /* @__PURE__ */new Map();

// node_modules/framer-motion/dist/es/animation/optimized-appear/handoff.mjs
function handoffOptimizedAppearAnimation(elementId, valueName, frame2) {
  var _a;
  const storeId = appearStoreId(elementId, valueName);
  const optimisedAnimation = appearAnimationStore.get(storeId);
  if (!optimisedAnimation) {
    return null;
  }
  const {
    animation,
    startTime
  } = optimisedAnimation;
  function cancelAnimation() {
    var _a2;
    (_a2 = window.MotionCancelOptimisedAnimation) === null || _a2 === void 0 ? void 0 : _a2.call(window, elementId, valueName, frame2);
  }
  animation.onfinish = cancelAnimation;
  if (startTime === null || ((_a = window.MotionHandoffIsComplete) === null || _a === void 0 ? void 0 : _a.call(window, elementId))) {
    cancelAnimation();
    return null;
  } else {
    return startTime;
  }
}

// node_modules/framer-motion/dist/es/animation/optimized-appear/start.mjs
var import_motion_utils34 = require("motion-utils@11.18.1");
var startFrameTime;
var readyAnimation;
var suspendedAnimations = /* @__PURE__ */new Set();
function resumeSuspendedAnimations() {
  suspendedAnimations.forEach(data => {
    data.animation.play();
    data.animation.startTime = data.startTime;
  });
  suspendedAnimations.clear();
}
function startOptimizedAppearAnimation(element, name, keyframes2, options, onReady) {
  if (window.MotionIsMounted) {
    return;
  }
  const id4 = element.dataset[optimizedAppearDataId];
  if (!id4) return;
  window.MotionHandoffAnimation = handoffOptimizedAppearAnimation;
  const storeId = appearStoreId(id4, name);
  if (!readyAnimation) {
    readyAnimation = startWaapiAnimation(element, name, [keyframes2[0], keyframes2[0]], {
      duration: 1e4,
      ease: "linear"
    });
    appearAnimationStore.set(storeId, {
      animation: readyAnimation,
      startTime: null
    });
    window.MotionHandoffAnimation = handoffOptimizedAppearAnimation;
    window.MotionHasOptimisedAnimation = (elementId, valueName) => {
      if (!elementId) return false;
      if (!valueName) {
        return appearComplete.has(elementId);
      }
      const animationId = appearStoreId(elementId, valueName);
      return Boolean(appearAnimationStore.get(animationId));
    };
    window.MotionHandoffMarkAsComplete = elementId => {
      if (appearComplete.has(elementId)) {
        appearComplete.set(elementId, true);
      }
    };
    window.MotionHandoffIsComplete = elementId => {
      return appearComplete.get(elementId) === true;
    };
    window.MotionCancelOptimisedAnimation = (elementId, valueName, frame2, canResume) => {
      const animationId = appearStoreId(elementId, valueName);
      const data = appearAnimationStore.get(animationId);
      if (!data) return;
      if (frame2 && canResume === void 0) {
        frame2.postRender(() => {
          frame2.postRender(() => {
            data.animation.cancel();
          });
        });
      } else {
        data.animation.cancel();
      }
      if (frame2 && canResume) {
        suspendedAnimations.add(data);
        frame2.render(resumeSuspendedAnimations);
      } else {
        appearAnimationStore.delete(animationId);
        if (!appearAnimationStore.size) {
          window.MotionCancelOptimisedAnimation = void 0;
        }
      }
    };
    window.MotionCheckAppearSync = (visualElement, valueName, value) => {
      var _a, _b;
      const appearId = getOptimisedAppearId(visualElement);
      if (!appearId) return;
      const valueIsOptimised = (_a = window.MotionHasOptimisedAnimation) === null || _a === void 0 ? void 0 : _a.call(window, appearId, valueName);
      const externalAnimationValue = (_b = visualElement.props.values) === null || _b === void 0 ? void 0 : _b[valueName];
      if (!valueIsOptimised || !externalAnimationValue) return;
      const removeSyncCheck = value.on("change", latestValue => {
        var _a2;
        if (externalAnimationValue.get() !== latestValue) {
          (_a2 = window.MotionCancelOptimisedAnimation) === null || _a2 === void 0 ? void 0 : _a2.call(window, appearId, valueName);
          removeSyncCheck();
        }
      });
      return removeSyncCheck;
    };
  }
  const startAnimation = () => {
    readyAnimation.cancel();
    const appearAnimation = startWaapiAnimation(element, name, keyframes2, options);
    if (startFrameTime === void 0) {
      startFrameTime = performance.now();
    }
    appearAnimation.startTime = startFrameTime;
    appearAnimationStore.set(storeId, {
      animation: appearAnimation,
      startTime: startFrameTime
    });
    if (onReady) onReady(appearAnimation);
  };
  appearComplete.set(id4, false);
  if (readyAnimation.ready) {
    readyAnimation.ready.then(startAnimation).catch(import_motion_utils34.noop);
  } else {
    startAnimation();
  }
}

// node_modules/framer-motion/dist/es/animation/hooks/use-animated-state.mjs
var import_react43 = require("react@18.3.1");
var createObject = () => ({});
var StateVisualElement = class extends VisualElement {
  constructor() {
    super(...arguments);
    this.measureInstanceViewportBox = createBox;
  }
  build() {}
  resetTransform() {}
  restoreTransform() {}
  removeValueFromRenderState() {}
  renderInstance() {}
  scrapeMotionValuesFromProps() {
    return createObject();
  }
  getBaseTargetFromProps() {
    return void 0;
  }
  readValueFromInstance(_state, key, options) {
    return options.initialState[key] || 0;
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
var useVisualState = makeUseVisualState({
  scrapeMotionValuesFromProps: createObject,
  createRenderState: createObject
});
function useAnimatedState(initialState) {
  const [animationState, setAnimationState] = (0, import_react43.useState)(initialState);
  const visualState = useVisualState({}, false);
  const element = useConstant(() => {
    return new StateVisualElement({
      props: {
        onUpdate: v => {
          setAnimationState({
            ...v
          });
        }
      },
      visualState,
      presenceContext: null
    }, {
      initialState
    });
  });
  (0, import_react43.useLayoutEffect)(() => {
    element.mount({});
    return () => element.unmount();
  }, [element]);
  const startAnimation = useConstant(() => animationDefinition => {
    return animateVisualElement(element, animationDefinition);
  });
  return [animationState, startAnimation];
}

// node_modules/framer-motion/dist/es/components/AnimateSharedLayout.mjs
var import_jsx_runtime9 = require("react@18.3.1/jsx-runtime");
var import_motion_utils35 = require("motion-utils@11.18.1");
var React3 = __toESM(require("react@18.3.1"), 0);
var id3 = 0;
var AnimateSharedLayout = ({
  children
}) => {
  React3.useEffect(() => {
    (0, import_motion_utils35.invariant)(false, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations");
  }, []);
  return (0, import_jsx_runtime9.jsx)(LayoutGroup, {
    id: useConstant(() => `asl-${id3++}`),
    children
  });
};

// node_modules/framer-motion/dist/es/value/use-inverted-scale.mjs
var import_motion_utils36 = require("motion-utils@11.18.1");
var import_react44 = require("react@18.3.1");
var maxScale = 1e5;
var invertScale = scale2 => scale2 > 1e-3 ? 1 / scale2 : maxScale;
var hasWarned = false;
function useInvertedScale(scale2) {
  let parentScaleX = useMotionValue(1);
  let parentScaleY = useMotionValue(1);
  const {
    visualElement
  } = (0, import_react44.useContext)(MotionContext);
  (0, import_motion_utils36.invariant)(!!(scale2 || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
  (0, import_motion_utils36.warning)(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
  hasWarned = true;
  if (scale2) {
    parentScaleX = scale2.scaleX || parentScaleX;
    parentScaleY = scale2.scaleY || parentScaleY;
  } else if (visualElement) {
    parentScaleX = visualElement.getValue("scaleX", 1);
    parentScaleY = visualElement.getValue("scaleY", 1);
  }
  const scaleX = useTransform(parentScaleX, invertScale);
  const scaleY = useTransform(parentScaleY, invertScale);
  return {
    scaleX,
    scaleY
  };
}

// node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs
var namespace_exports = {};
__export(namespace_exports, {
  Group: () => ReorderGroup,
  Item: () => ReorderItem
});

// node_modules/framer-motion/dist/es/context/ReorderContext.mjs
var import_react45 = require("react@18.3.1");
"use client";
var ReorderContext = (0, import_react45.createContext)(null);

// node_modules/framer-motion/dist/es/components/Reorder/utils/check-reorder.mjs
function checkReorder(order, value, offset, velocity) {
  if (!velocity) return order;
  const index = order.findIndex(item2 => item2.value === value);
  if (index === -1) return order;
  const nextOffset = velocity > 0 ? 1 : -1;
  const nextItem = order[index + nextOffset];
  if (!nextItem) return order;
  const item = order[index];
  const nextLayout = nextItem.layout;
  const nextItemCenter = mixNumber(nextLayout.min, nextLayout.max, 0.5);
  if (nextOffset === 1 && item.layout.max + offset > nextItemCenter || nextOffset === -1 && item.layout.min + offset < nextItemCenter) {
    return moveItem(order, index, index + nextOffset);
  }
  return order;
}

// node_modules/framer-motion/dist/es/components/Reorder/Group.mjs
var import_jsx_runtime10 = require("react@18.3.1/jsx-runtime");
var import_motion_utils37 = require("motion-utils@11.18.1");
var import_react46 = require("react@18.3.1");
"use client";
function ReorderGroupComponent({
  children,
  as = "ul",
  axis = "y",
  onReorder,
  values,
  ...props
}, externalRef) {
  const Component3 = useConstant(() => motion[as]);
  const order = [];
  const isReordering = (0, import_react46.useRef)(false);
  (0, import_motion_utils37.invariant)(Boolean(values), "Reorder.Group must be provided a values prop");
  const context = {
    axis,
    registerItem: (value, layout2) => {
      const idx = order.findIndex(entry => value === entry.value);
      if (idx !== -1) {
        order[idx].layout = layout2[axis];
      } else {
        order.push({
          value,
          layout: layout2[axis]
        });
      }
      order.sort(compareMin);
    },
    updateOrder: (item, offset, velocity) => {
      if (isReordering.current) return;
      const newOrder = checkReorder(order, item, offset, velocity);
      if (order !== newOrder) {
        isReordering.current = true;
        onReorder(newOrder.map(getValue).filter(value => values.indexOf(value) !== -1));
      }
    }
  };
  (0, import_react46.useEffect)(() => {
    isReordering.current = false;
  });
  return (0, import_jsx_runtime10.jsx)(Component3, {
    ...props,
    ref: externalRef,
    ignoreStrict: true,
    children: (0, import_jsx_runtime10.jsx)(ReorderContext.Provider, {
      value: context,
      children
    })
  });
}
var ReorderGroup = /* @__PURE__ */(0, import_react46.forwardRef)(ReorderGroupComponent);
function getValue(item) {
  return item.value;
}
function compareMin(a, b) {
  return a.layout.min - b.layout.min;
}

// node_modules/framer-motion/dist/es/components/Reorder/Item.mjs
var import_jsx_runtime11 = require("react@18.3.1/jsx-runtime");
var import_motion_utils38 = require("motion-utils@11.18.1");
var import_react47 = require("react@18.3.1");
"use client";
function useDefaultMotionValue(value, defaultValue = 0) {
  return isMotionValue(value) ? value : useMotionValue(defaultValue);
}
function ReorderItemComponent({
  children,
  style = {},
  value,
  as = "li",
  onDrag,
  layout: layout2 = true,
  ...props
}, externalRef) {
  const Component3 = useConstant(() => motion[as]);
  const context = (0, import_react47.useContext)(ReorderContext);
  const point2 = {
    x: useDefaultMotionValue(style.x),
    y: useDefaultMotionValue(style.y)
  };
  const zIndex = useTransform([point2.x, point2.y], ([latestX, latestY]) => latestX || latestY ? 1 : "unset");
  (0, import_motion_utils38.invariant)(Boolean(context), "Reorder.Item must be a child of Reorder.Group");
  const {
    axis,
    registerItem,
    updateOrder
  } = context;
  return (0, import_jsx_runtime11.jsx)(Component3, {
    drag: axis,
    ...props,
    dragSnapToOrigin: true,
    style: {
      ...style,
      x: point2.x,
      y: point2.y,
      zIndex
    },
    layout: layout2,
    onDrag: (event, gesturePoint) => {
      const {
        velocity
      } = gesturePoint;
      velocity[axis] && updateOrder(value, point2[axis].get(), velocity[axis]);
      onDrag && onDrag(event, gesturePoint);
    },
    onLayoutMeasure: measured => registerItem(value, measured),
    ref: externalRef,
    ignoreStrict: true,
    children
  });
}
var ReorderItem = /* @__PURE__ */(0, import_react47.forwardRef)(ReorderItemComponent);

// node_modules/framer-motion/dist/es/animation/utils/stagger.mjs
function getOriginIndex(from, total) {
  if (from === "first") {
    return 0;
  } else {
    const lastIndex = total - 1;
    return from === "last" ? lastIndex : lastIndex / 2;
  }
}
function stagger(duration = 0.1, {
  startDelay = 0,
  from = 0,
  ease: ease2
} = {}) {
  return (i, total) => {
    const fromIndex = typeof from === "number" ? from : getOriginIndex(from, total);
    const distance2 = Math.abs(fromIndex - i);
    let delay2 = duration * distance2;
    if (ease2) {
      const maxDelay = total * duration;
      const easingFunction = easingDefinitionToFunction(ease2);
      delay2 = easingFunction(delay2 / maxDelay) * maxDelay;
    }
    return startDelay + delay2;
  };
}

// node_modules/framer-motion/dist/es/frameloop/index-legacy.mjs
var sync = frame;
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = process2 => cancelFrame(process2);
  return acc;
}, {});

// node_modules/framer-motion/dist/es/easing/steps.mjs
function steps(numSteps, direction = "end") {
  return progress8 => {
    progress8 = direction === "end" ? Math.min(progress8, 0.999) : Math.max(progress8, 1e-3);
    const expanded = progress8 * numSteps;
    const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
    return clamp(0, 1, rounded / numSteps);
  };
}

// node_modules/framer-motion/dist/es/index.mjs
var import_motion_dom24 = require("motion-dom@11.18.1");
var import_motion_utils39 = require("motion-utils@11.18.1");
"use client";
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmNqcy5kZXYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5janMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5janMuanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvZnJhbWVyLW1vdGlvbi4xMS4xOC4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L0xheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1jb25zdGFudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvUHJlc2VuY2VDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db25maWdDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvUG9wQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9QcmVzZW5jZUNoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvdXNlLXByZXNlbmNlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvdXRpbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1icm93c2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWlzb21vcnBoaWMtZWZmZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9BbmltYXRlUHJlc2VuY2UvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L0RlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXMtbW91bnRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL0dsb2JhbENvbmZpZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9yZW5kZXItc3RlcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9iYXRjaGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2ZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWZvcmNlLXVwZGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9ncm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTGF5b3V0R3JvdXAvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L0xhenlDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2RlZmluaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xvYWQtZmVhdHVyZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0xhenlNb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdmFsaWQtcHJvcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvZmlsdGVyLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9Nb3Rpb25Db25maWcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93YXJuLW9uY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvY29tcG9uZW50cy9jcmVhdGUtcHJveHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L01vdGlvbkNvbnRleHQvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvaXMtdmFyaWFudC1sYWJlbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1hbmltYXRpb24tY29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvdmFyaWFudC1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy1jb250cm9sbGluZy12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9jcmVhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvc3ltYm9sLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvaXMtcmVmLW9iamVjdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtbW90aW9uLXJlZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvY2FtZWwtdG8tZGFzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL2RhdGEtaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvbWljcm90YXNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Td2l0Y2hMYXlvdXRHcm91cENvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy9sb3dlcmNhc2UtZWxlbWVudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvcmVzb2x2ZS12YXJpYW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1rZXlmcmFtZXMtdGFyZ2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVzb2x2ZS12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL2lzLW1vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3V0aWxzL3Jlc29sdmUtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS12aXN1YWwtc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9rZXlzLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtY3NzLXZhcmlhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9nZXQtYXMtdHlwZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2NsYW1wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL251bWJlcnMvdW5pdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL251bWJlci1icm93c2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3R5cGUtaW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9udW1iZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9idWlsZC10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9idWlsZC1zdHlsZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3BhdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3RyYW5zZm9ybS1vcmlnaW4ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL2J1aWxkLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvY3JlYXRlLXJlbmRlci1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvaXMtc3ZnLXRhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL3JlbmRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvY2FtZWwtY2FzZS1hdHRycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtY29ycmVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9pcy1mb3JjZWQtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvc2NyYXBlLW1vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL3V0aWxzL3NjcmFwZS1tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvY29uZmlnLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3VzZS1wcm9wcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXNlLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91c2UtcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2NvbXBvbmVudHMvY3JlYXRlLWZhY3RvcnkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvY29tcG9uZW50cy9tL2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9jb21wb25lbnRzL20vcHJveHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9zaGFsbG93LWNvbXBhcmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvcmVzb2x2ZS1keW5hbWljLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMva2V5cy1wb3NpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9zeW5jLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9hcnJheS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3N1YnNjcmlwdGlvbi1tYW5hZ2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdmVsb2NpdHktcGVyLXNlY29uZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL3NldHRlcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvaXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvYWRkLXdpbGwtY2hhbmdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvZ2V0LWFwcGVhci1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY3ViaWMtYmV6aWVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL21vZGlmaWVycy9taXJyb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL3JldmVyc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvYmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9hbnRpY2lwYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2NpcmMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy16ZXJvLXZhbHVlLXN0cmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMvc2FuaXRpemUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy91dGlscy9mbG9hdC1yZWdleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL2lzLW51bGxpc2gubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy91dGlscy9zaW5nbGUtY29sb3ItcmVnZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3JnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9oc2xhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy91dGlscy9jb2xvci1yZWdleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb21wbGV4L2ZpbHRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGVmYXVsdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2FuaW1hdGFibGUtbm9uZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL21ha2Utbm9uZS1hbmltYXRhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy91bml0LWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvS2V5ZnJhbWVzUmVzb2x2ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1udW1lcmljYWwtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jc3MtdmFyaWFibGVzLWNvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3Rlc3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3R5cGUtYXV0by5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vRE9NS2V5ZnJhbWVzUmVzb2x2ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtYW5pbWF0YWJsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvdXRpbHMvY2FuLWFuaW1hdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL2dldC1maW5hbC1rZXlmcmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvQmFzZUFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC9udW1iZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9oc2xhLXRvLXJnYmEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvaW1tZWRpYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L2NvbG9yLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcGlwZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC92aXNpYmlsaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L2NvbXBsZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy92ZWxvY2l0eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3NwcmluZy9kZWZhdWx0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3NwcmluZy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvaW5lcnRpYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9lYXNlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2lzLWVhc2luZy1hcnJheS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9tYXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pbnRlcnBvbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZmlsbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvZGVmYXVsdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL29mZnNldHMvdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL2tleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvZHJpdmVycy9kcml2ZXItZnJhbWVsb29wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9NYWluVGhyZWFkQW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy91dGlscy9hY2NlbGVyYXRlZC12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS91dGlscy9zdXBwb3J0cy13YWFwaS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvQWNjZWxlcmF0ZWRBbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvZGVmYXVsdC10cmFuc2l0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy10cmFuc2l0aW9uLWRlZmluZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy9tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC12YXJpYW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2ludGVyZmFjZXMvdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZ2V0LXZhcmlhbnQtY29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9hbmltYXRpb24tc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvRmVhdHVyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvYW5pbWF0aW9uL2V4aXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvYW5pbWF0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy9hZGQtZG9tLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2V2ZW50LWluZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvYWRkLXBvaW50ZXItZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9kaXN0YW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9QYW5TZXNzaW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1jYWxjLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91dGlscy9jb25zdHJhaW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvbW9kZWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9lYWNoLWF4aXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2NvbnZlcnNpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2hhcy10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWFwcGx5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91dGlscy9tZWFzdXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZ2V0LWNvbnRleHQtd2luZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9WaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3Bhbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJvcmRlci1yYWRpdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1ib3gtc2hhZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2xheW91dC9NZWFzdXJlTGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdGUvc2luZ2xlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1zdmctZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9jb21wYXJlLWJ5LWRlcHRoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2ZsYXQtdHJlZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2RlbGF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9hbmltYXRpb24vbWl4LXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29weS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtcmVtb3ZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc2hhcmVkL3N0YWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2NyZWF0ZS1wcm9qZWN0aW9uLW5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvRG9jdW1lbnRQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9IVE1MUHJvamVjdGlvbk5vZGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZHJhZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL2hvdmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZm9jdXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9wcmVzcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9vYnNlcnZlcnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvdmlld3BvcnQvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZ2VzdHVyZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbGF5b3V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvZmluZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdG9yZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9tb3Rpb24tdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL1Zpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL0RPTVZpc3VhbEVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9IVE1MVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvU1ZHVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vY3JlYXRlLXZpc3VhbC1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2NvbXBvbmVudHMvbW90aW9uL2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9jb21wb25lbnRzL21vdGlvbi9wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9mZWF0dXJlcy1tYXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLW1pbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1tb3Rpb24tdmFsdWUtZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vYnNlcnZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9yZXNpemUvaGFuZGxlLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtd2luZG93Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9yZXNpemUvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9pbmZvLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9pbnNldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvZWRnZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29mZnNldHMvb2Zmc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9wcmVzZXRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29uLXNjcm9sbC1oYW5kbGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvdHJhY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLWVsZW1lbnQtc2Nyb2xsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvc2Nyb2xsL3VzZS12aWV3cG9ydC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLWNvbWJpbmUtdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLW1vdGlvbi10ZW1wbGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1zcHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtYW5pbWF0aW9uLWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXRpbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tcHV0ZWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL2dldC13aWxsLWNoYW5nZS1uYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL1dpbGxDaGFuZ2VNb3Rpb25WYWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL3VzZS1yZWR1Y2VkLW1vdGlvbi1jb25maWcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvYW5pbWF0aW9uLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLXVubW91bnQtZWZmZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvd3JhcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy91dGlscy9nZXQtZWFzaW5nLWZvci1zZWdtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWRvbS1rZXlmcmFtZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9yZXNvbHZlLXN1YmplY3RzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2NhbGMtcmVwZWF0LWR1cmF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2NhbGMtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9lZGl0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL25vcm1hbGl6ZS10aW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9zZXF1ZW5jZS91dGlscy9zb3J0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9vYmplY3QvT2JqZWN0VmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9zdWJqZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdGUvc2VxdWVuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvdXRpbHMvc3R5bGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL3N1cHBvcnRzLXBhcnRpYWwta2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS9OYXRpdmVBbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2FuaW1hdGUtZWxlbWVudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL2FuaW1hdGUtc3R5bGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvdXNlLWFuaW1hdGUtc3R5bGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaG9va3MvdXNlLWFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy91c2UtZG9tLWV2ZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy91c2UtZHJhZy1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9pcy1tb3Rpb24tY29tcG9uZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3Vud3JhcC1tb3Rpb24tY29tcG9uZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91c2UtaW5zdGFudC1sYXlvdXQtdHJhbnNpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXNlLXJlc2V0LXByb2plY3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtY3ljbGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZpZXdwb3J0L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluLXZpZXcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW5zdGFudC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvc3RvcmUtaWQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL2hhbmRvZmYubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdGFydC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZWQtc3RhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVTaGFyZWRMYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtaW52ZXJ0ZWQtc2NhbGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvbmFtZXNwYWNlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9SZW9yZGVyQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci91dGlscy9jaGVjay1yZW9yZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL0l0ZW0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvc3RhZ2dlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9pbmRleC1sZWdhY3kubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvc3RlcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9pbmRleC5tanMiXSwibmFtZXMiOlsicmVxdWlyZV9lbW90aW9uX21lbW9pemVfY2pzX2RldiIsIl9fY29tbW9uSlMiLCJub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5janMuZGV2LmpzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJtZW1vaXplIiwiZm4iLCJjYWNoZSIsImNyZWF0ZSIsImFyZyIsInJlcXVpcmVfZW1vdGlvbl9tZW1vaXplX2NqcyIsIm5vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmNqcy5qcyIsIm1vZHVsZTIiLCJyZXF1aXJlX2Vtb3Rpb25faXNfcHJvcF92YWxpZF9janMiLCJub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5janMuanMiLCJfaW50ZXJvcERlZmF1bHQiLCJlIiwiX19lc01vZHVsZSIsIm1lbW9pemVfX2RlZmF1bHQiLCJyZWFjdFByb3BzUmVnZXgiLCJpc1Byb3BWYWxpZCIsInByb3AiLCJ0ZXN0IiwiY2hhckNvZGVBdCIsImZyYW1lcl9tb3Rpb25fMTFfMThfMl9leHBvcnRzIiwiX19leHBvcnQiLCJBY2NlbGVyYXRlZEFuaW1hdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkFuaW1hdGVTaGFyZWRMYXlvdXQiLCJEZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwiRHJhZ0NvbnRyb2xzIiwiRmxhdFRyZWUiLCJMYXlvdXRHcm91cCIsIkxheW91dEdyb3VwQ29udGV4dCIsIkxhenlNb3Rpb24iLCJNb3Rpb25Db25maWciLCJNb3Rpb25Db25maWdDb250ZXh0IiwiTW90aW9uQ29udGV4dCIsIk1vdGlvbkdsb2JhbENvbmZpZyIsIk1vdGlvblZhbHVlIiwiUHJlc2VuY2VDb250ZXh0IiwiUmVvcmRlciIsIm5hbWVzcGFjZV9leHBvcnRzIiwiU3dpdGNoTGF5b3V0R3JvdXBDb250ZXh0IiwiVmlzdWFsRWxlbWVudCIsImFkZFBvaW50ZXJFdmVudCIsImFkZFBvaW50ZXJJbmZvIiwiYWRkU2NhbGVDb3JyZWN0b3IiLCJhbmltYXRlIiwiYW5pbWF0ZU1pbmkiLCJhbmltYXRlVmFsdWUiLCJhbmltYXRlVmlzdWFsRWxlbWVudCIsImFuaW1hdGlvbkNvbnRyb2xzIiwiYW5pbWF0aW9ucyIsImFudGljaXBhdGUiLCJiYWNrSW4iLCJiYWNrSW5PdXQiLCJiYWNrT3V0IiwiYnVpbGRUcmFuc2Zvcm0iLCJjYWxjTGVuZ3RoIiwiY2FuY2VsRnJhbWUiLCJjYW5jZWxTeW5jIiwiY2lyY0luIiwiY2lyY0luT3V0IiwiY2lyY091dCIsImNsYW1wIiwiY29sb3IiLCJjb21wbGV4IiwiY3JlYXRlQm94IiwiY3JlYXRlUmVuZGVyZXJNb3Rpb25Db21wb25lbnQiLCJjcmVhdGVTY29wZWRBbmltYXRlIiwiY3ViaWNCZXppZXIiLCJkZWxheSIsImRpc2FibGVJbnN0YW50VHJhbnNpdGlvbnMiLCJkaXN0YW5jZSIsImRpc3RhbmNlMkQiLCJkb21BbmltYXRpb24iLCJkb21NYXgiLCJkb21NaW4iLCJlYXNlSW4iLCJlYXNlSW5PdXQiLCJlYXNlT3V0IiwiZmlsdGVyUHJvcHMiLCJmaW5kU3ByaW5nIiwiZnJhbWUiLCJmcmFtZURhdGEiLCJmcmFtZVN0ZXBzIiwiaW5WaWV3IiwiaW5lcnRpYSIsImludGVycG9sYXRlIiwiaW52YXJpYW50IiwiaW1wb3J0X21vdGlvbl91dGlsczM5IiwiaXNCcm93c2VyIiwiaXNEcmFnQWN0aXZlIiwiaW1wb3J0X21vdGlvbl9kb20yNCIsImlzTW90aW9uQ29tcG9uZW50IiwiaXNNb3Rpb25WYWx1ZSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwia2V5ZnJhbWVzIiwibSIsIm1ha2VVc2VWaXN1YWxTdGF0ZSIsIm1pcnJvckVhc2luZyIsIm1peCIsIm1vdGlvbiIsIm1vdGlvblZhbHVlIiwibm9vcCIsIm9wdGltaXplZEFwcGVhckRhdGFBdHRyaWJ1dGUiLCJwaXBlIiwicHJvZ3Jlc3MiLCJweCIsInJlc29sdmVNb3Rpb25WYWx1ZSIsInJldmVyc2VFYXNpbmciLCJzY3JvbGwiLCJzY3JvbGxJbmZvIiwic3ByaW5nIiwic3RhZ2dlciIsInN0YXJ0T3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwic3RlcHMiLCJzeW5jIiwidGltZSIsInRyYW5zZm9ybSIsInVud3JhcE1vdGlvbkNvbXBvbmVudCIsInVzZUFuaW1hdGUiLCJ1c2VBbmltYXRlTWluaSIsInVzZUFuaW1hdGlvbiIsInVzZUFuaW1hdGlvbkNvbnRyb2xzIiwidXNlQW5pbWF0aW9uRnJhbWUiLCJ1c2VDeWNsZSIsInVzZURlcHJlY2F0ZWRBbmltYXRlZFN0YXRlIiwidXNlQW5pbWF0ZWRTdGF0ZSIsInVzZURlcHJlY2F0ZWRJbnZlcnRlZFNjYWxlIiwidXNlSW52ZXJ0ZWRTY2FsZSIsInVzZURvbUV2ZW50IiwidXNlRHJhZ0NvbnRyb2xzIiwidXNlRWxlbWVudFNjcm9sbCIsInVzZUZvcmNlVXBkYXRlIiwidXNlSW5WaWV3IiwidXNlSW5zdGFudExheW91dFRyYW5zaXRpb24iLCJ1c2VJbnN0YW50VHJhbnNpdGlvbiIsInVzZUlzUHJlc2VudCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJ1c2VNb3Rpb25UZW1wbGF0ZSIsInVzZU1vdGlvblZhbHVlIiwidXNlTW90aW9uVmFsdWVFdmVudCIsInVzZVByZXNlbmNlIiwidXNlUmVkdWNlZE1vdGlvbiIsInVzZVJlZHVjZWRNb3Rpb25Db25maWciLCJ1c2VSZXNldFByb2plY3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJ1c2VUaW1lIiwidXNlVHJhbnNmb3JtIiwidXNlVW5tb3VudEVmZmVjdCIsInVzZVZlbG9jaXR5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VXaWxsQ2hhbmdlIiwidmlzdWFsRWxlbWVudFN0b3JlIiwid3JhcCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsImltcG9ydF9yZWFjdCIsInJlcXVpcmUiLCJjcmVhdGVDb250ZXh0IiwiaW1wb3J0X3JlYWN0MiIsInVzZUNvbnN0YW50IiwiaW5pdCIsInJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJpbXBvcnRfcmVhY3QzIiwiaW1wb3J0X3JlYWN0NCIsInRyYW5zZm9ybVBhZ2VQb2ludCIsInAiLCJpc1N0YXRpYyIsInJlZHVjZWRNb3Rpb24iLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJSZWFjdCIsIl9fdG9FU00iLCJpbXBvcnRfcmVhY3Q1IiwiUG9wQ2hpbGRNZWFzdXJlIiwiQ29tcG9uZW50IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJwcmV2UHJvcHMiLCJlbGVtZW50IiwicHJvcHMiLCJjaGlsZFJlZiIsImlzUHJlc2VudCIsInNpemUiLCJzaXplUmVmIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsIm9mZnNldFRvcCIsImxlZnQiLCJvZmZzZXRMZWZ0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJQb3BDaGlsZCIsImlzUHJlc2VudDIiLCJpZDQiLCJ1c2VJZCIsIm5vbmNlIiwidXNlQ29udGV4dCIsInVzZUluc2VydGlvbkVmZmVjdCIsImRhdGFzZXQiLCJtb3Rpb25Qb3BJZCIsInN0eWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicmVtb3ZlQ2hpbGQiLCJqc3giLCJjbG9uZUVsZW1lbnQiLCJpbXBvcnRfanN4X3J1bnRpbWUyIiwiUmVhY3QyIiwiaW1wb3J0X3JlYWN0NiIsIlByZXNlbmNlQ2hpbGQiLCJpbml0aWFsIiwib25FeGl0Q29tcGxldGUiLCJjdXN0b20iLCJwcmVzZW5jZUFmZmVjdHNMYXlvdXQiLCJtb2RlIiwicHJlc2VuY2VDaGlsZHJlbiIsIm5ld0NoaWxkcmVuTWFwIiwibWVtb2l6ZWRPbkV4aXRDb21wbGV0ZSIsInVzZUNhbGxiYWNrIiwiY2hpbGRJZCIsInNldCIsImlzQ29tcGxldGUiLCJ2YWx1ZXMiLCJjb250ZXh0IiwidXNlTWVtbyIsImlkIiwicmVnaXN0ZXIiLCJkZWxldGUiLCJNYXRoIiwicmFuZG9tIiwiZm9yRWFjaCIsIl8iLCJrZXkiLCJ1c2VFZmZlY3QiLCJQcm92aWRlciIsIk1hcCIsImltcG9ydF9yZWFjdDciLCJzdWJzY3JpYmUiLCJzYWZlVG9SZW1vdmUiLCJpbXBvcnRfcmVhY3Q4IiwiZ2V0Q2hpbGRLZXkiLCJjaGlsZCIsIm9ubHlFbGVtZW50cyIsImZpbHRlcmVkIiwiQ2hpbGRyZW4iLCJpc1ZhbGlkRWxlbWVudCIsInB1c2giLCJ3aW5kb3ciLCJpbXBvcnRfcmVhY3Q5IiwidXNlTGF5b3V0RWZmZWN0IiwiaW1wb3J0X2pzeF9ydW50aW1lMyIsImltcG9ydF9yZWFjdDEwIiwicHJvcGFnYXRlIiwiaXNQYXJlbnRQcmVzZW50IiwicHJlc2VudENoaWxkcmVuIiwicHJlc2VudEtleXMiLCJtYXAiLCJpc0luaXRpYWxSZW5kZXIiLCJwZW5kaW5nUHJlc2VudENoaWxkcmVuIiwiZXhpdENvbXBsZXRlIiwiZGlmZmVkQ2hpbGRyZW4iLCJzZXREaWZmZWRDaGlsZHJlbiIsInVzZVN0YXRlIiwicmVuZGVyZWRDaGlsZHJlbiIsInNldFJlbmRlcmVkQ2hpbGRyZW4iLCJpIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJnZXQiLCJqb2luIiwiZXhpdGluZ0NoaWxkcmVuIiwibmV4dENoaWxkcmVuIiwic3BsaWNlIiwiY29uc29sZSIsIndhcm4iLCJmb3JjZVJlbmRlciIsIkZyYWdtZW50Iiwib25FeGl0IiwiaGFzIiwiaXNFdmVyeUV4aXRDb21wbGV0ZSIsImlzRXhpdENvbXBsZXRlIiwiaW1wb3J0X3JlYWN0MTEiLCJpbXBvcnRfcmVhY3QxMiIsInVzZUlzTW91bnRlZCIsImlzTW91bnRlZCIsInNraXBBbmltYXRpb25zIiwidXNlTWFudWFsVGltaW5nIiwiY3JlYXRlUmVuZGVyU3RlcCIsInJ1bk5leHRGcmFtZSIsInRoaXNGcmFtZSIsIlNldCIsIm5leHRGcmFtZSIsImlzUHJvY2Vzc2luZyIsImZsdXNoTmV4dEZyYW1lIiwidG9LZWVwQWxpdmUiLCJXZWFrU2V0IiwibGF0ZXN0RnJhbWVEYXRhIiwiZGVsdGEiLCJ0aW1lc3RhbXAiLCJ0cmlnZ2VyQ2FsbGJhY2siLCJjYWxsYmFjayIsInN0ZXAiLCJzY2hlZHVsZSIsImtlZXBBbGl2ZSIsImltbWVkaWF0ZSIsImFkZFRvQ3VycmVudEZyYW1lIiwicXVldWUiLCJhZGQiLCJjYW5jZWwiLCJwcm9jZXNzIiwiZnJhbWVEYXRhMiIsImNsZWFyIiwic3RlcHNPcmRlciIsIm1heEVsYXBzZWQiLCJjcmVhdGVSZW5kZXJCYXRjaGVyIiwic2NoZWR1bGVOZXh0QmF0Y2giLCJhbGxvd0tlZXBBbGl2ZSIsInVzZURlZmF1bHRFbGFwc2VkIiwic3RhdGUyIiwiZmxhZ1J1bk5leHRGcmFtZSIsInN0ZXBzMiIsInJlZHVjZSIsImFjYyIsInJlYWQiLCJyZXNvbHZlS2V5ZnJhbWVzIiwidXBkYXRlIiwicHJlUmVuZGVyIiwicG9zdFJlbmRlciIsInByb2Nlc3NCYXRjaCIsInBlcmZvcm1hbmNlIiwibm93IiwibWF4IiwibWluIiwid2FrZSIsInByb2Nlc3MyIiwic3RhdGUiLCJpbXBvcnRfbW90aW9uX3V0aWxzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW1wb3J0X3JlYWN0MTMiLCJmb3JjZWRSZW5kZXJDb3VudCIsInNldEZvcmNlZFJlbmRlckNvdW50IiwiZGVmZXJyZWRGb3JjZVJlbmRlciIsIm5vdGlmeSIsIm5vZGUiLCJpc0xheW91dERpcnR5Iiwid2lsbFVwZGF0ZSIsIm5vZGVHcm91cCIsIm5vZGVzIiwic3Vic2NyaXB0aW9ucyIsIldlYWtNYXAiLCJkaXJ0eUFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsImRpcnR5IiwiaW1wb3J0X2pzeF9ydW50aW1lNCIsImltcG9ydF9yZWFjdDE0Iiwic2hvdWxkSW5oZXJpdEdyb3VwIiwiaW5oZXJpdCIsInNob3VsZEluaGVyaXRJZCIsImxheW91dEdyb3VwQ29udGV4dCIsImRlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQiLCJ1cHN0cmVhbUlkIiwiZ3JvdXAiLCJtZW1vaXplZENvbnRleHQiLCJpbXBvcnRfcmVhY3QxNSIsIkxhenlDb250ZXh0Iiwic3RyaWN0IiwiZmVhdHVyZVByb3BzIiwiYW5pbWF0aW9uIiwiZXhpdCIsImRyYWciLCJmb2N1cyIsImhvdmVyIiwidGFwIiwicGFuIiwibGF5b3V0IiwiZmVhdHVyZURlZmluaXRpb25zIiwiaXNFbmFibGVkIiwic29tZSIsIm5hbWUiLCJsb2FkRmVhdHVyZXMiLCJmZWF0dXJlcyIsImltcG9ydF9qc3hfcnVudGltZTUiLCJpbXBvcnRfcmVhY3QxNiIsInNldElzTG9hZGVkIiwiaXNMYXp5QnVuZGxlIiwibG9hZGVkUmVuZGVyZXIiLCJyZW5kZXJlciIsImxvYWRlZEZlYXR1cmVzIiwidGhlbiIsInZhbGlkTW90aW9uUHJvcHMiLCJzdGFydHNXaXRoIiwic2hvdWxkRm9yd2FyZCIsImxvYWRFeHRlcm5hbElzVmFsaWRQcm9wIiwiaXNWYWxpZFByb3AiLCJkZWZhdWx0IiwiX2EiLCJpc0RvbSIsImZvcndhcmRNb3Rpb25Qcm9wcyIsImZpbHRlcmVkUHJvcHMiLCJpbXBvcnRfanN4X3J1bnRpbWU2IiwiaW1wb3J0X3JlYWN0MTciLCJjb25maWciLCJKU09OIiwic3RyaW5naWZ5IiwidHJhbnNpdGlvbiIsIndhcm5lZCIsIndhcm5PbmNlIiwiY29uZGl0aW9uIiwibWVzc2FnZSIsImNyZWF0ZURPTU1vdGlvbkNvbXBvbmVudFByb3h5IiwiY29tcG9uZW50RmFjdG9yeSIsIlByb3h5IiwiY29tcG9uZW50Q2FjaGUiLCJkZXByZWNhdGVkRmFjdG9yeUZ1bmN0aW9uIiwiYXJncyIsIl90YXJnZXQiLCJpbXBvcnRfcmVhY3QxOCIsImlzVmFyaWFudExhYmVsIiwidiIsIkFycmF5IiwiaXNBcnJheSIsImlzQW5pbWF0aW9uQ29udHJvbHMiLCJzdGFydCIsInZhcmlhbnRQcmlvcml0eU9yZGVyIiwidmFyaWFudFByb3BzIiwiaXNDb250cm9sbGluZ1ZhcmlhbnRzIiwiaXNWYXJpYW50Tm9kZSIsIkJvb2xlYW4iLCJ2YXJpYW50cyIsImdldEN1cnJlbnRUcmVlVmFyaWFudHMiLCJhbmltYXRlMiIsImltcG9ydF9yZWFjdDE5IiwidXNlQ3JlYXRlTW90aW9uQ29udGV4dCIsInZhcmlhbnRMYWJlbHNBc0RlcGVuZGVuY3kiLCJtb3Rpb25Db21wb25lbnRTeW1ib2wiLCJTeW1ib2wiLCJmb3IiLCJpc1JlZk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImltcG9ydF9yZWFjdDIwIiwidXNlTW90aW9uUmVmIiwidmlzdWFsU3RhdGUiLCJ2aXN1YWxFbGVtZW50IiwiZXh0ZXJuYWxSZWYiLCJpbnN0YW5jZSIsIm9uTW91bnQiLCJtb3VudCIsInVubW91bnQiLCJjYW1lbFRvRGFzaCIsInN0ciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIm9wdGltaXplZEFwcGVhckRhdGFJZCIsIm1pY3JvdGFzayIsImNhbmNlbE1pY3JvdGFzayIsInF1ZXVlTWljcm90YXNrIiwiaW1wb3J0X3JlYWN0MjEiLCJpbXBvcnRfcmVhY3QyMiIsInVzZVZpc3VhbEVsZW1lbnQiLCJDb21wb25lbnQzIiwiY3JlYXRlVmlzdWFsRWxlbWVudCIsIlByb2plY3Rpb25Ob2RlQ29uc3RydWN0b3IiLCJfYiIsInBhcmVudCIsImxhenlDb250ZXh0IiwicHJlc2VuY2VDb250ZXh0IiwicmVkdWNlZE1vdGlvbkNvbmZpZyIsInZpc3VhbEVsZW1lbnRSZWYiLCJibG9ja0luaXRpYWxBbmltYXRpb24iLCJpbml0aWFsTGF5b3V0R3JvdXBDb25maWciLCJwcm9qZWN0aW9uIiwidHlwZSIsImNyZWF0ZVByb2plY3Rpb25Ob2RlIiwib3B0aW1pc2VkQXBwZWFySWQiLCJ3YW50c0hhbmRvZmYiLCJNb3Rpb25IYW5kb2ZmSXNDb21wbGV0ZSIsIk1vdGlvbkhhc09wdGltaXNlZEFuaW1hdGlvbiIsIk1vdGlvbklzTW91bnRlZCIsInVwZGF0ZUZlYXR1cmVzIiwiYW5pbWF0aW9uU3RhdGUiLCJhbmltYXRlQ2hhbmdlcyIsIl9hMiIsIk1vdGlvbkhhbmRvZmZNYXJrQXNDb21wbGV0ZSIsImluaXRpYWxQcm9tb3Rpb25Db25maWciLCJsYXlvdXRJZCIsImxheW91dDIiLCJkcmFnMiIsImRyYWdDb25zdHJhaW50cyIsImxheW91dFNjcm9sbCIsImxheW91dFJvb3QiLCJsYXRlc3RWYWx1ZXMiLCJnZXRDbG9zZXN0UHJvamVjdGluZ05vZGUiLCJzZXRPcHRpb25zIiwiYWx3YXlzTWVhc3VyZUxheW91dCIsImFuaW1hdGlvblR5cGUiLCJvcHRpb25zIiwiYWxsb3dQcm9qZWN0aW9uIiwiaW1wb3J0X2pzeF9ydW50aW1lNyIsImltcG9ydF9tb3Rpb25fdXRpbHMyIiwiaW1wb3J0X3JlYWN0MjMiLCJwcmVsb2FkZWRGZWF0dXJlcyIsInVzZVJlbmRlciIsInVzZVZpc3VhbFN0YXRlIiwidXNlVmlzdWFsU3RhdGUyIiwiTW90aW9uQ29tcG9uZW50IiwiTWVhc3VyZUxheW91dDIiLCJjb25maWdBbmRQcm9wcyIsInVzZUxheW91dElkIiwidXNlU3RyaWN0TW9kZSIsImxheW91dFByb2plY3Rpb24iLCJnZXRQcm9qZWN0aW9uRnVuY3Rpb25hbGl0eSIsIk1lYXN1cmVMYXlvdXQiLCJQcm9qZWN0aW9uTm9kZSIsImpzeHMiLCJkaXNwbGF5TmFtZSIsIkZvcndhcmRSZWZNb3Rpb25Db21wb25lbnQiLCJmb3J3YXJkUmVmIiwibGF5b3V0R3JvdXBJZCIsImlzU3RyaWN0Iiwic3RyaWN0TWVzc2FnZSIsImlnbm9yZVN0cmljdCIsIndhcm5pbmciLCJjb21iaW5lZCIsImxvd2VyY2FzZVNWR0VsZW1lbnRzIiwiaXNTVkdDb21wb25lbnQiLCJpbmRleE9mIiwiZ2V0VmFsdWVTdGF0ZSIsImdldFZlbG9jaXR5IiwicmVzb2x2ZVZhcmlhbnRGcm9tUHJvcHMiLCJkZWZpbml0aW9uIiwidmVsb2NpdHkiLCJpc0tleWZyYW1lc1RhcmdldCIsImlzQ3VzdG9tVmFsdWUiLCJ0b1ZhbHVlIiwicmVzb2x2ZUZpbmFsVmFsdWVJbktleWZyYW1lcyIsInVud3JhcHBlZFZhbHVlIiwiaW1wb3J0X3JlYWN0MjQiLCJtYWtlU3RhdGUiLCJzY3JhcGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJzY3JhcGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMzIiwiY3JlYXRlUmVuZGVyU3RhdGUiLCJvblVwZGF0ZSIsIm1ha2VMYXRlc3RWYWx1ZXMiLCJyZW5kZXJTdGF0ZSIsIm1ha2UiLCJzY3JhcGVNb3Rpb25WYWx1ZXMiLCJtb3Rpb25WYWx1ZXMiLCJpc0NvbnRyb2xsaW5nVmFyaWFudHMkMSIsImlzVmFyaWFudE5vZGUkMSIsImlzSW5pdGlhbEFuaW1hdGlvbkJsb2NrZWQiLCJ2YXJpYW50VG9TZXQiLCJsaXN0IiwicmVzb2x2ZWQiLCJ0cmFuc2l0aW9uRW5kIiwidGFyZ2V0IiwidmFsdWVUYXJnZXQiLCJpbmRleCIsInRyYW5zZm9ybVByb3BPcmRlciIsInRyYW5zZm9ybVByb3BzIiwiY2hlY2tTdHJpbmdTdGFydHNXaXRoIiwidG9rZW4iLCJpc0NTU1ZhcmlhYmxlTmFtZSIsInN0YXJ0c0FzVmFyaWFibGVUb2tlbiIsImlzQ1NTVmFyaWFibGVUb2tlbiIsInN0YXJ0c1dpdGhUb2tlbiIsInNpbmdsZUNzc1ZhcmlhYmxlUmVnZXgiLCJzcGxpdCIsInRyaW0iLCJnZXRWYWx1ZUFzVHlwZSIsIm51bWJlciIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwic2NhbGUiLCJjcmVhdGVVbml0VHlwZSIsInVuaXQiLCJlbmRzV2l0aCIsImRlZ3JlZXMiLCJwZXJjZW50IiwidmgiLCJ2dyIsInByb2dyZXNzUGVyY2VudGFnZSIsImJyb3dzZXJOdW1iZXJWYWx1ZVR5cGVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRQb3NpdGlvblgiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwidHJhbnNmb3JtVmFsdWVUeXBlcyIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXciLCJza2V3WCIsInNrZXdZIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwieCIsInkiLCJ6IiwicGVyc3BlY3RpdmUiLCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZSIsIm9wYWNpdHkiLCJvcmlnaW5YIiwib3JpZ2luWSIsIm9yaWdpbloiLCJpbnQiLCJyb3VuZCIsIm51bWJlclZhbHVlVHlwZXMiLCJ6SW5kZXgiLCJmaWxsT3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiLCJudW1PY3RhdmVzIiwidHJhbnNsYXRlQWxpYXMiLCJudW1UcmFuc2Zvcm1zIiwidHJhbnNmb3JtMiIsInRyYW5zZm9ybVRlbXBsYXRlIiwidHJhbnNmb3JtU3RyaW5nIiwidHJhbnNmb3JtSXNEZWZhdWx0IiwidmFsdWVJc0RlZmF1bHQiLCJ2YWx1ZUFzVHlwZSIsInRyYW5zZm9ybU5hbWUiLCJidWlsZEhUTUxTdHlsZXMiLCJ2YXJzIiwidHJhbnNmb3JtT3JpZ2luIiwiaGFzVHJhbnNmb3JtMiIsImhhc1RyYW5zZm9ybU9yaWdpbiIsImRhc2hLZXlzIiwib2Zmc2V0IiwiYXJyYXkiLCJjYW1lbEtleXMiLCJidWlsZFNWR1BhdGgiLCJhdHRycyIsInNwYWNpbmciLCJ1c2VEYXNoQ2FzZSIsInBhdGhMZW5ndGgiLCJrZXlzMiIsInBhdGhTcGFjaW5nIiwiY2FsY09yaWdpbiIsIm9yaWdpbiIsImNhbGNTVkdUcmFuc2Zvcm1PcmlnaW4iLCJkaW1lbnNpb25zIiwicHhPcmlnaW5YIiwicHhPcmlnaW5ZIiwiYnVpbGRTVkdBdHRycyIsImF0dHJYIiwiYXR0clkiLCJhdHRyU2NhbGUiLCJwYXRoT2Zmc2V0IiwibGF0ZXN0IiwiaXNTVkdUYWcyIiwidmlld0JveCIsImNyZWF0ZUh0bWxSZW5kZXJTdGF0ZSIsImNyZWF0ZVN2Z1JlbmRlclN0YXRlIiwiaXNTVkdUYWciLCJ0YWciLCJyZW5kZXJIVE1MIiwic3R5bGVQcm9wIiwiYXNzaWduIiwiZ2V0UHJvamVjdGlvblN0eWxlcyIsInNldFByb3BlcnR5IiwiY2FtZWxDYXNlQXR0cmlidXRlcyIsInJlbmRlclNWRyIsIl9zdHlsZVByb3AiLCJzZXRBdHRyaWJ1dGUiLCJzY2FsZUNvcnJlY3RvcnMiLCJjb3JyZWN0b3JzIiwiaXNGb3JjZWRNb3Rpb25WYWx1ZSIsIm5ld1ZhbHVlcyIsImdldFZhbHVlIiwibGl2ZVN0eWxlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMiIsInRhcmdldEtleSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwidXBkYXRlU1ZHRGltZW5zaW9ucyIsImdldEJCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXlvdXRQcm9wcyIsInN2Z01vdGlvbkNvbmZpZyIsIm5lZWRzTWVhc3VyZSIsInRhZ05hbWUiLCJodG1sTW90aW9uQ29uZmlnIiwiaW1wb3J0X3JlYWN0MjUiLCJjb3B5UmF3VmFsdWVzT25seSIsInNvdXJjZSIsInVzZUluaXRpYWxNb3Rpb25WYWx1ZXMiLCJ1c2VTdHlsZSIsInVzZUhUTUxQcm9wcyIsImh0bWxQcm9wcyIsImRyYWdMaXN0ZW5lciIsImRyYWdnYWJsZSIsInVzZXJTZWxlY3QiLCJXZWJraXRVc2VyU2VsZWN0IiwiV2Via2l0VG91Y2hDYWxsb3V0IiwidG91Y2hBY3Rpb24iLCJ0YWJJbmRleCIsIm9uVGFwIiwib25UYXBTdGFydCIsIndoaWxlVGFwIiwiaW1wb3J0X3JlYWN0MjYiLCJ1c2VTVkdQcm9wcyIsIl9pc1N0YXRpYyIsInZpc3VhbFByb3BzIiwicmF3U3R5bGVzIiwiaW1wb3J0X3JlYWN0MjciLCJjcmVhdGVVc2VSZW5kZXIiLCJ1c2VWaXN1YWxQcm9wcyIsImVsZW1lbnRQcm9wcyIsImNyZWF0ZU1vdGlvbkNvbXBvbmVudEZhY3RvcnkiLCJjcmVhdGVNb3Rpb25Db21wb25lbnQyIiwiYmFzZUNvbmZpZyIsImNyZWF0ZU1pbmltYWxNb3Rpb25Db21wb25lbnQiLCJzaGFsbG93Q29tcGFyZSIsIm5leHQiLCJwcmV2IiwicHJldkxlbmd0aCIsInJlc29sdmVWYXJpYW50IiwiZ2V0UHJvcHMiLCJwb3NpdGlvbmFsS2V5cyIsImNsZWFyVGltZSIsIm5ld1RpbWUiLCJhZGRVbmlxdWVJdGVtIiwiYXJyIiwiaXRlbSIsInJlbW92ZUl0ZW0iLCJtb3ZlSXRlbSIsImZyb21JbmRleCIsInRvSW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJTdWJzY3JpcHRpb25NYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJoYW5kbGVyIiwiYSIsImIiLCJjIiwibnVtU3Vic2NyaXB0aW9ucyIsImdldFNpemUiLCJ2ZWxvY2l0eVBlclNlY29uZCIsImZyYW1lRHVyYXRpb24iLCJNQVhfVkVMT0NJVFlfREVMVEEiLCJpc0Zsb2F0IiwiaXNOYU4iLCJjb2xsZWN0TW90aW9uVmFsdWVzIiwidmVyc2lvbiIsImNhblRyYWNrVmVsb2NpdHkiLCJldmVudHMiLCJ1cGRhdGVBbmROb3RpZnkiLCJjdXJyZW50VGltZSIsInVwZGF0ZWRBdCIsInNldFByZXZGcmFtZVZhbHVlIiwic2V0Q3VycmVudCIsImNoYW5nZSIsInJlbmRlclJlcXVlc3QiLCJoYXNBbmltYXRlZCIsIm93bmVyIiwicHJldkZyYW1lVmFsdWUiLCJwcmV2VXBkYXRlZEF0Iiwib25DaGFuZ2UiLCJzdWJzY3JpcHRpb24iLCJvbiIsImV2ZW50TmFtZSIsInN0b3AiLCJjbGVhckxpc3RlbmVycyIsImV2ZW50TWFuYWdlcnMiLCJhdHRhY2giLCJwYXNzaXZlRWZmZWN0Iiwic3RvcFBhc3NpdmVFZmZlY3QiLCJzZXRXaXRoVmVsb2NpdHkiLCJqdW1wIiwiZW5kQW5pbWF0aW9uIiwiZ2V0UHJldmlvdXMiLCJzdGFydEFuaW1hdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uU3RhcnQiLCJhbmltYXRpb25Db21wbGV0ZSIsImNsZWFyQW5pbWF0aW9uIiwiYW5pbWF0aW9uQ2FuY2VsIiwiaXNBbmltYXRpbmciLCJkZXN0cm95Iiwic2V0TW90aW9uVmFsdWUiLCJoYXNWYWx1ZSIsImFkZFZhbHVlIiwic2V0VGFyZ2V0IiwiaXNXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJhZGRWYWx1ZVRvV2lsbENoYW5nZSIsIndpbGxDaGFuZ2UiLCJnZXRPcHRpbWlzZWRBcHBlYXJJZCIsImluc3RhbnRBbmltYXRpb25TdGF0ZSIsImltcG9ydF9tb3Rpb25fdXRpbHMzIiwiY2FsY0JlemllciIsInQiLCJhMSIsImEyIiwic3ViZGl2aXNpb25QcmVjaXNpb24iLCJzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMiLCJiaW5hcnlTdWJkaXZpZGUiLCJsb3dlckJvdW5kIiwidXBwZXJCb3VuZCIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJhYnMiLCJtWTEiLCJtWTIiLCJnZXRURm9yWCIsImFYIiwiZWFzaW5nIiwicG93Iiwic2luIiwiYWNvcyIsImlzWmVyb1ZhbHVlU3RyaW5nIiwiaXNOb25lIiwic2FuaXRpemUiLCJmbG9hdFJlZ2V4IiwiaXNOdWxsaXNoIiwic2luZ2xlQ29sb3JSZWdleCIsImlzQ29sb3JTdHJpbmciLCJ0ZXN0UHJvcCIsInNwbGl0Q29sb3IiLCJhTmFtZSIsImJOYW1lIiwiY05hbWUiLCJhbHBoYTIiLCJtYXRjaCIsImNsYW1wUmdiVW5pdCIsInJnYlVuaXQiLCJyZ2JhIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEkMSIsInBhcnNlSGV4IiwiciIsImciLCJwYXJzZUludCIsImhleCIsImhzbGEiLCJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiY29sb3JSZWdleCIsIk5VTUJFUl9UT0tFTiIsIkNPTE9SX1RPS0VOIiwiVkFSX1RPS0VOIiwiVkFSX0ZVTkNUSU9OX1RPS0VOIiwiU1BMSVRfVE9LRU4iLCJjb21wbGV4UmVnZXgiLCJhbmFseXNlQ29tcGxleFZhbHVlIiwib3JpZ2luYWxWYWx1ZSIsInRvU3RyaW5nIiwiaW5kZXhlcyIsInZhciIsInR5cGVzIiwidG9rZW5pc2VkIiwicGFyc2VkVmFsdWUiLCJwYXJzZUNvbXBsZXhWYWx1ZSIsImNyZWF0ZVRyYW5zZm9ybWVyIiwibnVtU2VjdGlvbnMiLCJvdXRwdXQiLCJjb252ZXJ0TnVtYmVyc1RvWmVybyIsImdldEFuaW1hdGFibGVOb25lIiwicGFyc2VkIiwidHJhbnNmb3JtZXIiLCJtYXhEZWZhdWx0cyIsImFwcGx5RGVmYXVsdEZpbHRlciIsInNsaWNlIiwibnVtYmVyMiIsImRlZmF1bHRWYWx1ZSIsImZ1bmN0aW9uUmVnZXgiLCJmaWx0ZXIiLCJmdW5jdGlvbnMiLCJkZWZhdWx0VmFsdWVUeXBlcyIsImJhY2tncm91bmRDb2xvciIsIm91dGxpbmVDb2xvciIsImZpbGwiLCJzdHJva2UiLCJib3JkZXJDb2xvciIsImJvcmRlclRvcENvbG9yIiwiYm9yZGVyUmlnaHRDb2xvciIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyTGVmdENvbG9yIiwiV2Via2l0RmlsdGVyIiwiZ2V0RGVmYXVsdFZhbHVlVHlwZSIsImdldEFuaW1hdGFibGVOb25lMiIsImRlZmF1bHRWYWx1ZVR5cGUiLCJpbnZhbGlkVGVtcGxhdGVzIiwibWFrZU5vbmVLZXlmcmFtZXNBbmltYXRhYmxlIiwidW5yZXNvbHZlZEtleWZyYW1lcyIsIm5vbmVLZXlmcmFtZUluZGV4ZXMiLCJhbmltYXRhYmxlVGVtcGxhdGUiLCJrZXlmcmFtZSIsIm5vbmVJbmRleCIsImlzTnVtT3JQeFR5cGUiLCJnZXRQb3NGcm9tTWF0cml4IiwibWF0cml4IiwicG9zIiwiZ2V0VHJhbnNsYXRlRnJvbU1hdHJpeCIsInBvczIiLCJwb3MzIiwiX2Jib3giLCJtYXRyaXgzZCIsInRyYW5zZm9ybUtleXMiLCJub25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtS2V5cyIsInJlbW92ZU5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm0iLCJyZW1vdmVkVHJhbnNmb3JtcyIsInBvc2l0aW9uYWxWYWx1ZXMiLCJ0b1Jlc29sdmUiLCJpc1NjaGVkdWxlZCIsImFueU5lZWRzTWVhc3VyZW1lbnQiLCJtZWFzdXJlQWxsS2V5ZnJhbWVzIiwicmVzb2x2ZXJzVG9NZWFzdXJlIiwiZnJvbSIsInJlc29sdmVyIiwibmVlZHNNZWFzdXJlbWVudCIsImVsZW1lbnRzVG9NZWFzdXJlIiwidHJhbnNmb3Jtc1RvUmVzdG9yZSIsIm1lYXN1cmVJbml0aWFsU3RhdGUiLCJyZXN0b3JlIiwibWVhc3VyZUVuZFN0YXRlIiwic3VzcGVuZGVkU2Nyb2xsWSIsInNjcm9sbFRvIiwiY29tcGxldGUiLCJyZWFkQWxsS2V5ZnJhbWVzIiwicmVhZEtleWZyYW1lcyIsImZsdXNoS2V5ZnJhbWVSZXNvbHZlcnMiLCJLZXlmcmFtZVJlc29sdmVyIiwib25Db21wbGV0ZSIsIm1vdGlvblZhbHVlMiIsImlzQXN5bmMiLCJzY2hlZHVsZVJlc29sdmUiLCJjdXJyZW50VmFsdWUiLCJmaW5hbEtleWZyYW1lIiwidmFsdWVBc1JlYWQiLCJyZWFkVmFsdWUiLCJzZXRGaW5hbEtleWZyYW1lIiwicmVuZGVyRW5kU3R5bGVzIiwicmVzdW1lIiwiaXNOdW1lcmljYWxTdHJpbmciLCJpbXBvcnRfbW90aW9uX3V0aWxzNCIsInNwbGl0Q1NTVmFyaWFibGVSZWdleCIsInBhcnNlQ1NTVmFyaWFibGUiLCJleGVjIiwidG9rZW4xIiwidG9rZW4yIiwiZmFsbGJhY2siLCJtYXhEZXB0aCIsImdldFZhcmlhYmxlVmFsdWUiLCJkZXB0aCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJpbW1lZCIsInRlc3RWYWx1ZVR5cGUiLCJhdXRvIiwiZGltZW5zaW9uVmFsdWVUeXBlcyIsImZpbmREaW1lbnNpb25WYWx1ZVR5cGUiLCJmaW5kIiwiRE9NS2V5ZnJhbWVzUmVzb2x2ZXIiLCJyZXNvbHZlTm9uZUtleWZyYW1lcyIsIm9yaWdpblR5cGUiLCJ0YXJnZXRUeXBlIiwicGFnZVlPZmZzZXQiLCJtZWFzdXJlZE9yaWdpbiIsIm1lYXN1cmVWaWV3cG9ydEJveCIsIm1lYXN1cmVLZXlmcmFtZSIsImZpbmFsS2V5ZnJhbWVJbmRleCIsInVuc2V0VHJhbnNmb3JtTmFtZSIsInVuc2V0VHJhbnNmb3JtVmFsdWUiLCJpc0FuaW1hdGFibGUiLCJpbXBvcnRfbW90aW9uX2RvbSIsImltcG9ydF9tb3Rpb25fdXRpbHM1IiwiaGFzS2V5ZnJhbWVzQ2hhbmdlZCIsImtleWZyYW1lczIiLCJjYW5BbmltYXRlIiwib3JpZ2luS2V5ZnJhbWUiLCJ0YXJnZXRLZXlmcmFtZSIsImlzT3JpZ2luQW5pbWF0YWJsZSIsImlzVGFyZ2V0QW5pbWF0YWJsZSIsImlzR2VuZXJhdG9yIiwiaXNOb3ROdWxsIiwiZ2V0RmluYWxLZXlmcmFtZSIsInJlcGVhdCIsInJlcGVhdFR5cGUiLCJyZXNvbHZlZEtleWZyYW1lcyIsIk1BWF9SRVNPTFZFX0RFTEFZIiwiQmFzZUFuaW1hdGlvbiIsImF1dG9wbGF5IiwiZGVsYXkyIiwicmVwZWF0RGVsYXkiLCJpc1N0b3BwZWQiLCJoYXNBdHRlbXB0ZWRSZXNvbHZlIiwiY3JlYXRlZEF0IiwidXBkYXRlRmluaXNoZWRQcm9taXNlIiwiY2FsY1N0YXJ0VGltZSIsInJlc29sdmVkQXQiLCJfcmVzb2x2ZWQiLCJvbktleWZyYW1lc1Jlc29sdmVkIiwiaXNHZW5lcmF0b3I2IiwicmVzb2x2ZUZpbmlzaGVkUHJvbWlzZSIsImR1cmF0aW9uIiwicmVzb2x2ZWRBbmltYXRpb24iLCJpbml0UGxheWJhY2siLCJvblBvc3RSZXNvbHZlZCIsInJlamVjdCIsImN1cnJlbnRGaW5pc2hlZFByb21pc2UiLCJmbGF0dGVuIiwiZWFzZSIsIm1peE51bWJlciIsInRvIiwicHJvZ3Jlc3M4IiwiaHVlVG9SZ2IiLCJxIiwiaHNsYVRvUmdiYSIsIm1peEltbWVkaWF0ZSIsImltcG9ydF9tb3Rpb25fdXRpbHM2IiwibWl4TGluZWFyQ29sb3IiLCJmcm9tRXhwbyIsImV4cG8iLCJzcXJ0IiwiY29sb3JUeXBlcyIsImdldENvbG9yVHlwZSIsImFzUkdCQSIsImNvbG9yMiIsIm1vZGVsIiwibWl4Q29sb3IiLCJmcm9tUkdCQSIsInRvUkdCQSIsImJsZW5kZWQiLCJjb21iaW5lRnVuY3Rpb25zIiwidHJhbnNmb3JtZXJzIiwiaW52aXNpYmxlVmFsdWVzIiwibWl4VmlzaWJpbGl0eSIsImltcG9ydF9tb3Rpb25fdXRpbHM3IiwibWl4TnVtYmVyMiIsImdldE1peGVyIiwibWl4Q29tcGxleCIsIm1peEFycmF5IiwibWl4T2JqZWN0IiwibnVtVmFsdWVzIiwiYmxlbmRWYWx1ZSIsIm1hdGNoT3JkZXIiLCJvcmRlcmVkT3JpZ2luIiwicG9pbnRlcnMiLCJvcmlnaW5JbmRleCIsIm9yaWdpblZhbHVlIiwidGVtcGxhdGUiLCJvcmlnaW5TdGF0cyIsInRhcmdldFN0YXRzIiwiY2FuSW50ZXJwb2xhdGUiLCJtaXhlciIsInZlbG9jaXR5U2FtcGxlRHVyYXRpb24iLCJjYWxjR2VuZXJhdG9yVmVsb2NpdHkiLCJyZXNvbHZlVmFsdWUiLCJwcmV2VCIsInNwcmluZ0RlZmF1bHRzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1hc3MiLCJib3VuY2UiLCJ2aXN1YWxEdXJhdGlvbiIsInJlc3RTcGVlZCIsImdyYW51bGFyIiwicmVzdERlbHRhIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsIm1pbkRhbXBpbmciLCJtYXhEYW1waW5nIiwiaW1wb3J0X21vdGlvbl91dGlsczgiLCJzYWZlTWluIiwiZW52ZWxvcGUiLCJkZXJpdmF0aXZlIiwic2Vjb25kc1RvTWlsbGlzZWNvbmRzIiwiZGFtcGluZ1JhdGlvIiwibWlsbGlzZWNvbmRzVG9TZWNvbmRzIiwidW5kYW1wZWRGcmVxMiIsImV4cG9uZW50aWFsRGVjYXkiLCJjYWxjQW5ndWxhckZyZXEiLCJleHAiLCJkIiwiZiIsImZhY3RvciIsImluaXRpYWxHdWVzcyIsInVuZGFtcGVkRnJlcSIsImFwcHJveGltYXRlUm9vdCIsInJvb3RJdGVyYXRpb25zIiwicmVzdWx0IiwiaW1wb3J0X21vdGlvbl9kb20yIiwiaW1wb3J0X21vdGlvbl91dGlsczkiLCJkdXJhdGlvbktleXMiLCJwaHlzaWNzS2V5cyIsImlzU3ByaW5nVHlwZSIsImdldFNwcmluZ09wdGlvbnMiLCJzcHJpbmdPcHRpb25zIiwiaXNSZXNvbHZlZEZyb21EdXJhdGlvbiIsInJvb3QiLCJQSSIsImRlcml2ZWQiLCJvcHRpb25zT3JWaXN1YWxEdXJhdGlvbiIsImRvbmUiLCJpbml0aWFsVmVsb2NpdHkiLCJpbml0aWFsRGVsdGEiLCJ1bmRhbXBlZEFuZ3VsYXJGcmVxIiwiaXNHcmFudWxhclNjYWxlIiwicmVzb2x2ZVNwcmluZyIsImFuZ3VsYXJGcmVxIiwiY29zIiwiZGFtcGVkQW5ndWxhckZyZXEiLCJmcmVxRm9yVCIsInNpbmgiLCJjb3NoIiwiZ2VuZXJhdG9yIiwiY2FsY3VsYXRlZER1cmF0aW9uIiwiY3VycmVudFZlbG9jaXR5IiwiaXNCZWxvd1ZlbG9jaXR5VGhyZXNob2xkIiwiaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZCIsImNhbGNHZW5lcmF0b3JEdXJhdGlvbiIsIm1heEdlbmVyYXRvckR1cmF0aW9uIiwiZ2VuZXJhdGVMaW5lYXJFYXNpbmciLCJwb3dlciIsInRpbWVDb25zdGFudCIsImJvdW5jZURhbXBpbmciLCJib3VuY2VTdGlmZm5lc3MiLCJtb2RpZnlUYXJnZXQiLCJpc091dE9mQm91bmRzIiwibmVhcmVzdEJvdW5kYXJ5IiwiYW1wbGl0dWRlIiwiaWRlYWwiLCJjYWxjRGVsdGEiLCJjYWxjTGF0ZXN0IiwiYXBwbHlGcmljdGlvbiIsInRpbWVSZWFjaGVkQm91bmRhcnkiLCJzcHJpbmckMSIsImNoZWNrQ2F0Y2hCb3VuZGFyeSIsImhhc1VwZGF0ZWRGcmFtZSIsImlzRWFzaW5nQXJyYXkiLCJlYXNlMiIsImltcG9ydF9tb3Rpb25fZG9tMyIsImltcG9ydF9tb3Rpb25fdXRpbHMxMCIsImVhc2luZ0xvb2t1cCIsImxpbmVhciIsImVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uIiwiaXNCZXppZXJEZWZpbml0aW9uIiwieDEiLCJ5MSIsIngyIiwieTIiLCJpbXBvcnRfbW90aW9uX3V0aWxzMTEiLCJjcmVhdGVNaXhlcnMiLCJjdXN0b21NaXhlciIsIm1peGVycyIsIm1peGVyRmFjdG9yeSIsIm51bU1peGVycyIsImVhc2luZ0Z1bmN0aW9uIiwiaW5wdXQiLCJpc0NsYW1wIiwiaW5wdXRMZW5ndGgiLCJpc1plcm9EZWx0YVJhbmdlIiwicmV2ZXJzZSIsImludGVycG9sYXRvciIsInByb2dyZXNzSW5SYW5nZSIsImltcG9ydF9tb3Rpb25fdXRpbHMxMiIsImZpbGxPZmZzZXQiLCJyZW1haW5pbmciLCJvZmZzZXRQcm9ncmVzcyIsImRlZmF1bHRPZmZzZXQiLCJjb252ZXJ0T2Zmc2V0VG9UaW1lcyIsIm8iLCJkZWZhdWx0RWFzaW5nIiwia2V5ZnJhbWVWYWx1ZXMiLCJ0aW1lcyIsImVhc2luZ0Z1bmN0aW9ucyIsImFic29sdXRlVGltZXMiLCJtYXBUaW1lVG9LZXlmcmFtZSIsImZyYW1lbG9vcERyaXZlciIsInBhc3NUaW1lc3RhbXAiLCJpbXBvcnRfbW90aW9uX2RvbTQiLCJpbXBvcnRfbW90aW9uX3V0aWxzMTMiLCJnZW5lcmF0b3JzIiwiZGVjYXkiLCJ0d2VlbiIsInBlcmNlbnRUb1Byb2dyZXNzIiwicGVyY2VudDIiLCJNYWluVGhyZWFkQW5pbWF0aW9uIiwiaG9sZFRpbWUiLCJjYW5jZWxUaW1lIiwicGxheWJhY2tTcGVlZCIsInBlbmRpbmdQbGF5U3RhdGUiLCJzdGFydFRpbWUiLCJ0ZWFyZG93biIsIm9uU3RvcCIsIktleWZyYW1lUmVzb2x2ZXIkMSIsIm9uUmVzb2x2ZWQiLCJrZXlmcmFtZXMkMSIsImdlbmVyYXRvckZhY3RvcnkiLCJtYXBQZXJjZW50VG9LZXlmcmFtZXMiLCJtaXJyb3JlZEdlbmVyYXRvciIsInJlc29sdmVkRHVyYXRpb24iLCJ0b3RhbER1cmF0aW9uIiwicGxheSIsInBhdXNlIiwidGljayIsInNhbXBsZSIsImtleWZyYW1lczMiLCJzcGVlZCIsInRpbWVXaXRob3V0RGVsYXkiLCJpc0luRGVsYXlQaGFzZSIsImVsYXBzZWQiLCJmcmFtZUdlbmVyYXRvciIsImN1cnJlbnRJdGVyYXRpb24iLCJmbG9vciIsIml0ZXJhdGlvblByb2dyZXNzIiwiaXNPZGRJdGVyYXRpb24iLCJpc0FuaW1hdGlvbkZpbmlzaGVkIiwiZmluaXNoIiwiZHJpdmVyIiwibmV3U3BlZWQiLCJoYXNDaGFuZ2VkIiwib25QbGF5Iiwibm93MiIsInN0b3BEcml2ZXIiLCJ0aW1lMiIsImFjY2VsZXJhdGVkVmFsdWVzIiwiaW1wb3J0X21vdGlvbl9kb201Iiwic3RhcnRXYWFwaUFuaW1hdGlvbiIsInZhbHVlTmFtZSIsImtleWZyYW1lT3B0aW9ucyIsIm1hcEVhc2luZ1RvTmF0aXZlRWFzaW5nIiwiaXRlcmF0aW9ucyIsImRpcmVjdGlvbiIsImltcG9ydF9tb3Rpb25fdXRpbHMxNCIsInN1cHBvcnRzV2FhcGkiLCJtZW1vIiwiRWxlbWVudCIsImltcG9ydF9tb3Rpb25fZG9tNiIsImltcG9ydF9tb3Rpb25fdXRpbHMxNSIsInNhbXBsZURlbHRhIiwicmVxdWlyZXNQcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJpc1dhYXBpU3VwcG9ydGVkRWFzaW5nIiwicHJlZ2VuZXJhdGVLZXlmcmFtZXMiLCJzYW1wbGVBbmltYXRpb24iLCJwcmVnZW5lcmF0ZWRLZXlmcmFtZXMiLCJ1bnN1cHBvcnRlZEVhc2luZ0Z1bmN0aW9ucyIsImlzVW5zdXBwb3J0ZWRFYXNlIiwic3VwcG9ydHNMaW5lYXJFYXNpbmciLCJtb3Rpb25WYWx1ZTMiLCJwcmVnZW5lcmF0ZWRBbmltYXRpb24iLCJwZW5kaW5nVGltZWxpbmUiLCJhdHRhY2hUaW1lbGluZSIsIm9uZmluaXNoIiwicGxheWJhY2tSYXRlIiwicGxheVN0YXRlIiwidGltZWxpbmUiLCJzYW1wbGVUaW1lIiwic3VwcG9ydHMiLCJIVE1MRWxlbWVudCIsInVuZGVyRGFtcGVkU3ByaW5nIiwiY3JpdGljYWxseURhbXBlZFNwcmluZyIsImtleWZyYW1lc1RyYW5zaXRpb24iLCJnZXREZWZhdWx0VHJhbnNpdGlvbiIsInZhbHVlS2V5IiwiaXNUcmFuc2l0aW9uRGVmaW5lZCIsIndoZW4iLCJfZGVsYXkiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwic3RhZ2dlckRpcmVjdGlvbiIsImtleXMiLCJpbXBvcnRfbW90aW9uX2RvbTciLCJpbXBvcnRfbW90aW9uX3V0aWxzMTYiLCJhbmltYXRlTW90aW9uVmFsdWUiLCJpc0hhbmRvZmYiLCJ2YWx1ZVRyYW5zaXRpb24iLCJnZXRWYWx1ZVRyYW5zaXRpb24iLCJzaG91bGRTa2lwIiwiR3JvdXBQbGF5YmFja0NvbnRyb2xzIiwiaW1wb3J0X21vdGlvbl9kb204Iiwic2hvdWxkQmxvY2tBbmltYXRpb24iLCJwcm90ZWN0ZWRLZXlzIiwibmVlZHNBbmltYXRpbmciLCJzaG91bGRCbG9jayIsImFuaW1hdGVUYXJnZXQiLCJ0YXJnZXRBbmRUcmFuc2l0aW9uIiwidHJhbnNpdGlvbk92ZXJyaWRlIiwiYW5pbWF0aW9uczIiLCJhbmltYXRpb25UeXBlU3RhdGUiLCJnZXRTdGF0ZSIsIk1vdGlvbkhhbmRvZmZBbmltYXRpb24iLCJhcHBlYXJJZCIsInNob3VsZFJlZHVjZU1vdGlvbiIsImFsbCIsImFuaW1hdGVWYXJpYW50IiwidmFyaWFudCIsImdldEFuaW1hdGlvbiIsImdldENoaWxkQW5pbWF0aW9ucyIsInZhcmlhbnRDaGlsZHJlbiIsImZvcndhcmREZWxheSIsImFuaW1hdGVDaGlsZHJlbiIsImZpcnN0IiwibGFzdCIsIm1heFN0YWdnZXJEdXJhdGlvbiIsImdlbmVyYXRlU3RhZ2dlckR1cmF0aW9uIiwic29ydCIsInNvcnRCeVRyZWVPcmRlciIsInNvcnROb2RlUG9zaXRpb24iLCJyZXNvbHZlZERlZmluaXRpb24iLCJudW1WYXJpYW50UHJvcHMiLCJnZXRWYXJpYW50Q29udGV4dCIsImNvbnRleHQyIiwicmV2ZXJzZVByaW9yaXR5T3JkZXIiLCJudW1BbmltYXRpb25UeXBlcyIsImFuaW1hdGVMaXN0IiwiY3JlYXRlQW5pbWF0aW9uU3RhdGUiLCJjcmVhdGVTdGF0ZSIsImJ1aWxkUmVzb2x2ZWRUeXBlVmFsdWVzIiwic2V0QW5pbWF0ZUZ1bmN0aW9uIiwibWFrZUFuaW1hdG9yIiwiY2hhbmdlZEFjdGl2ZVR5cGUiLCJyZW1vdmVkS2V5cyIsImVuY291bnRlcmVkS2V5cyIsInJlbW92ZWRWYXJpYW50SW5kZXgiLCJJbmZpbml0eSIsInR5cGVTdGF0ZSIsInByb3BJc1ZhcmlhbnQiLCJhY3RpdmVEZWx0YSIsImlzQWN0aXZlIiwiaXNJbmhlcml0ZWQiLCJtYW51YWxseUFuaW1hdGVPbk1vdW50IiwicHJldlByb3AiLCJ2YXJpYW50RGlkQ2hhbmdlIiwiY2hlY2tWYXJpYW50c0RpZENoYW5nZSIsInNob3VsZEFuaW1hdGVUeXBlIiwiaGFuZGxlZFJlbW92ZWRWYWx1ZXMiLCJkZWZpbml0aW9uTGlzdCIsInJlc29sdmVkVmFsdWVzIiwicHJldlJlc29sdmVkVmFsdWVzIiwiYWxsS2V5cyIsIm1hcmtUb0FuaW1hdGUiLCJ2YWx1ZUhhc0NoYW5nZWQiLCJ3aWxsQW5pbWF0ZVZpYVBhcmVudCIsImZhbGxiYWNrQW5pbWF0aW9uIiwiZmFsbGJhY2tUYXJnZXQiLCJnZXRCYXNlVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZSIsInNldEFjdGl2ZSIsInJlc2V0IiwiY3JlYXRlVHlwZVN0YXRlIiwid2hpbGVJblZpZXciLCJ3aGlsZUhvdmVyIiwid2hpbGVEcmFnIiwid2hpbGVGb2N1cyIsIkZlYXR1cmUiLCJBbmltYXRpb25GZWF0dXJlIiwidXBkYXRlQW5pbWF0aW9uQ29udHJvbHNTdWJzY3JpcHRpb24iLCJ1bm1vdW50Q29udHJvbHMiLCJwcmV2QW5pbWF0ZSIsIkV4aXRBbmltYXRpb25GZWF0dXJlIiwiYXJndW1lbnRzIiwicHJldklzUHJlc2VudCIsInByZXZQcmVzZW5jZUNvbnRleHQiLCJleGl0QW5pbWF0aW9uIiwiYWRkRG9tRXZlbnQiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImltcG9ydF9tb3Rpb25fZG9tOSIsImV4dHJhY3RFdmVudEluZm8iLCJldmVudCIsInBvaW50IiwicGFnZVgiLCJwYWdlWSIsImlzUHJpbWFyeVBvaW50ZXIiLCJ4RGVsdGEiLCJ5RGVsdGEiLCJpbXBvcnRfbW90aW9uX2RvbTEwIiwiaW1wb3J0X21vdGlvbl91dGlsczE3IiwiUGFuU2Vzc2lvbiIsImhhbmRsZXJzIiwiY29udGV4dFdpbmRvdyIsImRyYWdTbmFwVG9PcmlnaW4iLCJzdGFydEV2ZW50IiwibGFzdE1vdmVFdmVudCIsImxhc3RNb3ZlRXZlbnRJbmZvIiwidXBkYXRlUG9pbnQiLCJpbmZvMiIsImdldFBhbkluZm8iLCJoaXN0b3J5IiwiaXNQYW5TdGFydGVkIiwiaXNEaXN0YW5jZVBhc3RUaHJlc2hvbGQiLCJwb2ludDMiLCJ0aW1lc3RhbXAyIiwib25TdGFydCIsIm9uTW92ZSIsImhhbmRsZVBvaW50ZXJNb3ZlIiwiZXZlbnQyIiwidHJhbnNmb3JtUG9pbnQiLCJoYW5kbGVQb2ludGVyVXAiLCJlbmQiLCJvbkVuZCIsIm9uU2Vzc2lvbkVuZCIsInJlc3VtZUFuaW1hdGlvbiIsInBhbkluZm8iLCJpbmZvIiwiaW5pdGlhbEluZm8iLCJwb2ludDIiLCJvblNlc3Npb25TdGFydCIsInJlbW92ZUxpc3RlbmVycyIsInVwZGF0ZUhhbmRsZXJzIiwic3VidHJhY3RQb2ludCIsImxhc3REZXZpY2VQb2ludCIsInN0YXJ0RGV2aWNlUG9pbnQiLCJ0aW1lRGVsdGEiLCJ0aW1lc3RhbXBlZFBvaW50IiwibGFzdFBvaW50IiwiU0NBTEVfUFJFQ0lTSU9OIiwiU0NBTEVfTUlOIiwiU0NBTEVfTUFYIiwiVFJBTlNMQVRFX1BSRUNJU0lPTiIsIlRSQU5TTEFURV9NSU4iLCJUUkFOU0xBVEVfTUFYIiwiYXhpcyIsImlzTmVhciIsIm1heERpc3RhbmNlIiwiY2FsY0F4aXNEZWx0YSIsIm9yaWdpblBvaW50IiwidHJhbnNsYXRlIiwiY2FsY0JveERlbHRhIiwiY2FsY1JlbGF0aXZlQXhpcyIsInJlbGF0aXZlIiwiY2FsY1JlbGF0aXZlQm94IiwiY2FsY1JlbGF0aXZlQXhpc1Bvc2l0aW9uIiwiY2FsY1JlbGF0aXZlUG9zaXRpb24iLCJpbXBvcnRfbW90aW9uX3V0aWxzMTgiLCJhcHBseUNvbnN0cmFpbnRzIiwiZWxhc3RpYyIsImNhbGNSZWxhdGl2ZUF4aXNDb25zdHJhaW50cyIsImNhbGNSZWxhdGl2ZUNvbnN0cmFpbnRzIiwibGF5b3V0Qm94IiwiY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzIiwibGF5b3V0QXhpcyIsImNvbnN0cmFpbnRzQXhpcyIsImNhbGNWaWV3cG9ydENvbnN0cmFpbnRzIiwiY29uc3RyYWludHNCb3giLCJjYWxjT3JpZ2luMiIsInNvdXJjZUxlbmd0aCIsInRhcmdldExlbmd0aCIsInJlYmFzZUF4aXNDb25zdHJhaW50cyIsImNvbnN0cmFpbnRzIiwicmVsYXRpdmVDb25zdHJhaW50cyIsImRlZmF1bHRFbGFzdGljIiwicmVzb2x2ZURyYWdFbGFzdGljIiwiZHJhZ0VsYXN0aWMiLCJyZXNvbHZlQXhpc0VsYXN0aWMiLCJtaW5MYWJlbCIsIm1heExhYmVsIiwicmVzb2x2ZVBvaW50RWxhc3RpYyIsImxhYmVsIiwiY3JlYXRlQXhpc0RlbHRhIiwiY3JlYXRlRGVsdGEiLCJjcmVhdGVBeGlzIiwiZWFjaEF4aXMiLCJjb252ZXJ0Qm91bmRpbmdCb3hUb0JveCIsImNvbnZlcnRCb3hUb0JvdW5kaW5nQm94IiwidHJhbnNmb3JtQm94UG9pbnRzIiwidHJhbnNmb3JtUG9pbnQyIiwidG9wTGVmdCIsImJvdHRvbVJpZ2h0IiwiaXNJZGVudGl0eVNjYWxlIiwic2NhbGUyIiwiaGFzU2NhbGUiLCJoYXNUcmFuc2Zvcm0iLCJoYXMyRFRyYW5zbGF0ZSIsImlzMkRUcmFuc2xhdGUiLCJzY2FsZVBvaW50IiwiZGlzdGFuY2VGcm9tT3JpZ2luIiwic2NhbGVkIiwiYXBwbHlQb2ludERlbHRhIiwiYm94U2NhbGUiLCJhcHBseUF4aXNEZWx0YSIsImFwcGx5Qm94RGVsdGEiLCJib3giLCJUUkVFX1NDQUxFX1NOQVBfTUlOIiwiVFJFRV9TQ0FMRV9TTkFQX01BWCIsImFwcGx5VHJlZURlbHRhcyIsInRyZWVTY2FsZSIsInRyZWVQYXRoIiwiaXNTaGFyZWRUcmFuc2l0aW9uIiwidHJlZUxlbmd0aCIsInByb2plY3Rpb25EZWx0YSIsImRpc3BsYXkiLCJ0cmFuc2Zvcm1Cb3giLCJ0cmFuc2xhdGVBeGlzIiwiZGlzdGFuY2UyIiwidHJhbnNmb3JtQXhpcyIsImF4aXNUcmFuc2xhdGUiLCJheGlzU2NhbGUiLCJheGlzT3JpZ2luIiwibWVhc3VyZVBhZ2VCb3giLCJyb290UHJvamVjdGlvbk5vZGUyIiwidmlld3BvcnRCb3giLCJzY3JvbGwyIiwiZ2V0Q29udGV4dFdpbmRvdyIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImltcG9ydF9tb3Rpb25fdXRpbHMxOSIsImltcG9ydF9tb3Rpb25fZG9tMTEiLCJlbGVtZW50RHJhZ0NvbnRyb2xzIiwiVmlzdWFsRWxlbWVudERyYWdDb250cm9scyIsIm9wZW5EcmFnTG9jayIsImlzRHJhZ2dpbmciLCJjdXJyZW50RGlyZWN0aW9uIiwiaGFzTXV0YXRlZENvbnN0cmFpbnRzIiwib3JpZ2luRXZlbnQiLCJzbmFwVG9DdXJzb3IiLCJkcmFnU25hcFRvT3JpZ2luMiIsInBhdXNlQW5pbWF0aW9uIiwic3RvcEFuaW1hdGlvbiIsImRyYWdQcm9wYWdhdGlvbiIsIm9uRHJhZ1N0YXJ0Iiwic2V0RHJhZ0xvY2siLCJyZXNvbHZlQ29uc3RyYWludHMiLCJpc0FuaW1hdGlvbkJsb2NrZWQiLCJnZXRBeGlzTW90aW9uVmFsdWUiLCJtZWFzdXJlZEF4aXMiLCJkcmFnRGlyZWN0aW9uTG9jayIsIm9uRGlyZWN0aW9uTG9jayIsIm9uRHJhZyIsImdldEN1cnJlbnREaXJlY3Rpb24iLCJ1cGRhdGVBeGlzIiwiZ2V0QW5pbWF0aW9uU3RhdGUiLCJwYW5TZXNzaW9uIiwiZ2V0VHJhbnNmb3JtUGFnZVBvaW50Iiwib25EcmFnRW5kIiwiX3BvaW50Iiwic2hvdWxkRHJhZyIsImF4aXNWYWx1ZSIsIm1lYXN1cmUiLCJwcmV2Q29uc3RyYWludHMiLCJyZXNvbHZlUmVmQ29uc3RyYWludHMiLCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJjb25zdHJhaW50c0VsZW1lbnQiLCJtZWFzdXJlZENvbnN0cmFpbnRzIiwidXNlckNvbnN0cmFpbnRzIiwiZHJhZ01vbWVudHVtIiwiZHJhZ1RyYW5zaXRpb24iLCJvbkRyYWdUcmFuc2l0aW9uRW5kIiwibW9tZW50dW1BbmltYXRpb25zIiwiaW5lcnRpYTIiLCJzdGFydEF4aXNWYWx1ZUFuaW1hdGlvbiIsImRyYWdLZXkiLCJleHRlcm5hbE1vdGlvblZhbHVlIiwic2NhbGVQb3NpdGlvbldpdGhpbkNvbnN0cmFpbnRzIiwiYm94UHJvZ3Jlc3MiLCJ1cGRhdGVTY3JvbGwiLCJ1cGRhdGVMYXlvdXQiLCJhZGRMaXN0ZW5lcnMiLCJzdG9wUG9pbnRlckxpc3RlbmVyIiwibWVhc3VyZURyYWdDb25zdHJhaW50cyIsInN0b3BNZWFzdXJlTGF5b3V0TGlzdGVuZXIiLCJzdG9wUmVzaXplTGlzdGVuZXIiLCJzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIiLCJoYXNMYXlvdXRDaGFuZ2VkIiwibG9ja1RocmVzaG9sZCIsImltcG9ydF9tb3Rpb25fdXRpbHMyMCIsIkRyYWdHZXN0dXJlIiwicmVtb3ZlR3JvdXBDb250cm9scyIsImNvbnRyb2xzIiwiZHJhZ0NvbnRyb2xzIiwiaW1wb3J0X21vdGlvbl91dGlsczIxIiwiYXN5bmNIYW5kbGVyIiwiUGFuR2VzdHVyZSIsInJlbW92ZVBvaW50ZXJEb3duTGlzdGVuZXIiLCJvblBvaW50ZXJEb3duIiwicG9pbnRlckRvd25FdmVudCIsInNlc3Npb24iLCJjcmVhdGVQYW5IYW5kbGVycyIsIm9uUGFuU2Vzc2lvblN0YXJ0Iiwib25QYW5TdGFydCIsIm9uUGFuIiwib25QYW5FbmQiLCJnbG9iYWxQcm9qZWN0aW9uU3RhdGUiLCJoYXNBbmltYXRlZFNpbmNlUmVzaXplIiwiaGFzRXZlclVwZGF0ZWQiLCJwaXhlbHNUb1BlcmNlbnQiLCJwaXhlbHMiLCJjb3JyZWN0Qm9yZGVyUmFkaXVzIiwiY29ycmVjdCIsImNvcnJlY3RCb3hTaGFkb3ciLCJvcmlnaW5hbCIsInNoYWRvdyIsInhTY2FsZSIsInlTY2FsZSIsImF2ZXJhZ2VTY2FsZSIsImltcG9ydF9qc3hfcnVudGltZTgiLCJpbXBvcnRfcmVhY3QyOCIsIk1lYXN1cmVMYXlvdXRXaXRoQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwibGF5b3V0R3JvdXAiLCJzd2l0Y2hMYXlvdXRHcm91cCIsImRlZmF1bHRTY2FsZUNvcnJlY3RvcnMiLCJkaWRVcGRhdGUiLCJsYXlvdXREZXBlbmRlbmN5IiwicHJvbW90ZSIsInJlbGVnYXRlIiwic3RhY2siLCJnZXRTdGFjayIsIm1lbWJlcnMiLCJjdXJyZW50QW5pbWF0aW9uIiwiaXNMZWFkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJwcm9tb3RlQ29udGV4dCIsInNjaGVkdWxlQ2hlY2tBZnRlclVubW91bnQiLCJkZXJlZ2lzdGVyIiwiYXBwbHlUbyIsImJveFNoYWRvdyIsImFuaW1hdGVTaW5nbGVWYWx1ZSIsIm1vdGlvblZhbHVlJDEiLCJpc1NWR0VsZW1lbnQiLCJTVkdFbGVtZW50IiwiY29tcGFyZUJ5RGVwdGgiLCJpc0RpcnR5IiwiaW1wb3J0X21vdGlvbl91dGlsczIyIiwidGltZW91dCIsImNoZWNrRWxhcHNlZCIsImRlbGF5SW5TZWNvbmRzIiwiaW1wb3J0X21vdGlvbl91dGlsczIzIiwiYm9yZGVycyIsIm51bUJvcmRlcnMiLCJhc051bWJlciIsImlzUHgiLCJtaXhWYWx1ZXMiLCJmb2xsb3ciLCJsZWFkIiwic2hvdWxkQ3Jvc3NmYWRlT3BhY2l0eSIsImlzT25seU1lbWJlciIsImVhc2VDcm9zc2ZhZGVJbiIsIm9wYWNpdHlFeGl0IiwiZWFzZUNyb3NzZmFkZU91dCIsImJvcmRlckxhYmVsIiwiZm9sbG93UmFkaXVzIiwiZ2V0UmFkaXVzIiwibGVhZFJhZGl1cyIsImNhbk1peCIsInJhZGl1c05hbWUiLCJjb21wcmVzcyIsImNvcHlBeGlzSW50byIsIm9yaWdpbkF4aXMiLCJjb3B5Qm94SW50byIsIm9yaWdpbkJveCIsImNvcHlBeGlzRGVsdGFJbnRvIiwib3JpZ2luRGVsdGEiLCJyZW1vdmVQb2ludERlbHRhIiwicmVtb3ZlQXhpc0RlbHRhIiwic291cmNlQXhpcyIsInJlbGF0aXZlUHJvZ3Jlc3MiLCJyZW1vdmVBeGlzVHJhbnNmb3JtcyIsInRyYW5zZm9ybXMiLCJzY2FsZUtleSIsIm9yaWdpbktleSIsInhLZXlzIiwieUtleXMiLCJyZW1vdmVCb3hUcmFuc2Zvcm1zIiwic291cmNlQm94IiwiaXNBeGlzRGVsdGFaZXJvIiwiaXNEZWx0YVplcm8iLCJheGlzRXF1YWxzIiwiYm94RXF1YWxzIiwiYXhpc0VxdWFsc1JvdW5kZWQiLCJib3hFcXVhbHNSb3VuZGVkIiwiYXNwZWN0UmF0aW8iLCJheGlzRGVsdGFFcXVhbHMiLCJOb2RlU3RhY2siLCJzY2hlZHVsZVJlbmRlciIsInByZXZMZWFkIiwiaW5kZXhPZk5vZGUiLCJmaW5kSW5kZXgiLCJtZW1iZXIiLCJwcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJzaG93IiwicmVzdW1lRnJvbSIsInByZXNlcnZlT3BhY2l0eSIsInNuYXBzaG90IiwiYW5pbWF0aW9uVmFsdWVzIiwiaXNVcGRhdGluZyIsImNyb3NzZmFkZSIsImhpZGUiLCJleGl0QW5pbWF0aW9uQ29tcGxldGUiLCJyZXN1bWluZ0Zyb20iLCJyZW1vdmVMZWFkU25hcHNob3QiLCJidWlsZFByb2plY3Rpb25UcmFuc2Zvcm0iLCJsYXRlc3RUcmFuc2Zvcm0iLCJ4VHJhbnNsYXRlIiwieVRyYW5zbGF0ZSIsInpUcmFuc2xhdGUiLCJlbGVtZW50U2NhbGVYIiwiZWxlbWVudFNjYWxlWSIsImltcG9ydF9tb3Rpb25fZG9tMTIiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjQiLCJtZXRyaWNzIiwidG90YWxOb2RlcyIsInJlc29sdmVkVGFyZ2V0RGVsdGFzIiwicmVjYWxjdWxhdGVkUHJvamVjdGlvbiIsImlzRGVidWciLCJNb3Rpb25EZWJ1ZyIsInRyYW5zZm9ybUF4ZXMiLCJoaWRkZW5WaXNpYmlsaXR5IiwidmlzaWJpbGl0eSIsImFuaW1hdGlvblRhcmdldCIsImlkMiIsInJlc2V0RGlzdG9ydGluZ1RyYW5zZm9ybSIsInNoYXJlZEFuaW1hdGlvblZhbHVlcyIsInNldFN0YXRpY1ZhbHVlIiwiY2FuY2VsVHJlZU9wdGltaXNlZFRyYW5zZm9ybUFuaW1hdGlvbnMiLCJwcm9qZWN0aW9uTm9kZSIsImhhc0NoZWNrZWRPcHRpbWlzZWRBcHBlYXIiLCJNb3Rpb25DYW5jZWxPcHRpbWlzZWRBbmltYXRpb24iLCJjcmVhdGVQcm9qZWN0aW9uTm9kZTIiLCJhdHRhY2hSZXNpemVMaXN0ZW5lciIsImRlZmF1bHRQYXJlbnQiLCJtZWFzdXJlU2Nyb2xsIiwiY2hlY2tJc1Njcm9sbFJvb3QiLCJyZXNldFRyYW5zZm9ybSIsImFuaW1hdGlvbklkIiwiaXNUcmVlQW5pbWF0aW5nIiwiaXNQcm9qZWN0aW9uRGlydHkiLCJpc1NoYXJlZFByb2plY3Rpb25EaXJ0eSIsImlzVHJhbnNmb3JtRGlydHkiLCJ1cGRhdGVNYW51YWxseUJsb2NrZWQiLCJ1cGRhdGVCbG9ja2VkQnlSZXNpemUiLCJpc1NWRyIsIm5lZWRzUmVzZXQiLCJzaG91bGRSZXNldFRyYW5zZm9ybSIsImV2ZW50SGFuZGxlcnMiLCJoYXNUcmVlQW5pbWF0ZWQiLCJ1cGRhdGVTY2hlZHVsZWQiLCJzY2hlZHVsZVVwZGF0ZSIsInByb2plY3Rpb25VcGRhdGVTY2hlZHVsZWQiLCJjaGVja1VwZGF0ZUZhaWxlZCIsImNsZWFyQWxsU25hcHNob3RzIiwidXBkYXRlUHJvamVjdGlvbiIsInByb3BhZ2F0ZURpcnR5Tm9kZXMiLCJyZXNvbHZlVGFyZ2V0RGVsdGEiLCJjYWxjUHJvamVjdGlvbiIsImNsZWFuRGlydHlOb2RlcyIsInJlY29yZCIsInJlc29sdmVkUmVsYXRpdmVUYXJnZXRBdCIsImhhc1Byb2plY3RlZCIsImlzVmlzaWJsZSIsImFuaW1hdGlvblByb2dyZXNzIiwic2hhcmVkTm9kZXMiLCJwYXRoIiwibm90aWZ5TGlzdGVuZXJzIiwic3Vic2NyaXB0aW9uTWFuYWdlciIsImhhc0xpc3RlbmVycyIsImNhbmNlbERlbGF5IiwicmVzaXplVW5ibG9ja1VwZGF0ZSIsImZpbmlzaEFuaW1hdGlvbiIsInJlZ2lzdGVyU2hhcmVkTm9kZSIsImhhc1JlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsIm5ld0xheW91dCIsImlzVHJlZUFuaW1hdGlvbkJsb2NrZWQiLCJyZWxhdGl2ZVRhcmdldCIsImxheW91dFRyYW5zaXRpb24iLCJkZWZhdWx0TGF5b3V0VHJhbnNpdGlvbiIsIm9uTGF5b3V0QW5pbWF0aW9uU3RhcnQiLCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlIiwidGFyZ2V0Q2hhbmdlZCIsInRhcmdldExheW91dCIsImhhc09ubHlSZWxhdGl2ZVRhcmdldENoYW5nZWQiLCJzZXRBbmltYXRpb25PcmlnaW4iLCJhbmltYXRpb25PcHRpb25zIiwiYmxvY2tVcGRhdGUiLCJ1bmJsb2NrVXBkYXRlIiwiaXNVcGRhdGVCbG9ja2VkIiwic3RhcnRVcGRhdGUiLCJyZXNldFNrZXdBbmRSb3RhdGlvbiIsImdldFRyYW5zZm9ybVRlbXBsYXRlIiwic2hvdWxkTm90aWZ5TGlzdGVuZXJzIiwicHJldlRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ1cGRhdGVTbmFwc2hvdCIsInVwZGF0ZVdhc0Jsb2NrZWQiLCJjbGVhck1lYXN1cmVtZW50cyIsImNsZWFySXNMYXlvdXREaXJ0eSIsInJlc2V0VHJhbnNmb3JtU3R5bGUiLCJub3RpZnlMYXlvdXRVcGRhdGUiLCJjbGVhclNuYXBzaG90IiwicmVtb3ZlTGVhZFNuYXBzaG90cyIsInNjaGVkdWxlVXBkYXRlUHJvamVjdGlvbiIsInByZXZMYXlvdXQiLCJsYXlvdXRDb3JyZWN0ZWQiLCJwaGFzZSIsImlzUm9vdCIsIndhc1Jvb3QiLCJpc1Jlc2V0UmVxdWVzdGVkIiwiaGFzUHJvamVjdGlvbiIsInRyYW5zZm9ybVRlbXBsYXRlVmFsdWUiLCJ0cmFuc2Zvcm1UZW1wbGF0ZUhhc0NoYW5nZWQiLCJyZW1vdmVUcmFuc2Zvcm0iLCJwYWdlQm94IiwicmVtb3ZlRWxlbWVudFNjcm9sbCIsInJvdW5kQm94IiwibWVhc3VyZWRCb3giLCJ3YXNJblNjcm9sbFJvb3QiLCJjaGVja05vZGVXYXNTY3JvbGxSb290IiwiYm94V2l0aG91dFNjcm9sbCIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtT25seSIsIndpdGhUcmFuc2Zvcm1zIiwiYm94V2l0aG91dFRyYW5zZm9ybSIsIm5vZGVCb3giLCJzZXRUYXJnZXREZWx0YSIsInRhcmdldERlbHRhIiwiZm9yY2VSZWxhdGl2ZVBhcmVudFRvUmVzb2x2ZVRhcmdldCIsInJlbGF0aXZlUGFyZW50IiwiZm9yY2VSZWNhbGN1bGF0aW9uIiwiZ2V0TGVhZCIsImlzU2hhcmVkIiwiY2FuU2tpcCIsImF0dGVtcHRUb1Jlc29sdmVSZWxhdGl2ZVRhcmdldCIsImdldENsb3Nlc3RQcm9qZWN0aW5nUGFyZW50IiwicmVsYXRpdmVUYXJnZXRPcmlnaW4iLCJ0YXJnZXRXaXRoVHJhbnNmb3JtcyIsImlzUHJvamVjdGluZyIsInBlbmRpbmdBbmltYXRpb24iLCJwcmV2VHJlZVNjYWxlWCIsInByZXZUcmVlU2NhbGVZIiwicHJldlByb2plY3Rpb25EZWx0YSIsImNyZWF0ZVByb2plY3Rpb25EZWx0YXMiLCJub3RpZnlBbGwyIiwicHJvamVjdGlvbkRlbHRhV2l0aFRyYW5zZm9ybSIsInNuYXBzaG90TGF0ZXN0VmFsdWVzIiwibWl4ZWRWYWx1ZXMiLCJyZWxhdGl2ZUxheW91dCIsInNuYXBzaG90U291cmNlIiwibGF5b3V0U291cmNlIiwiaXNTaGFyZWRMYXlvdXRBbmltYXRpb24iLCJoYXNPcGFjaXR5Q3Jvc3NmYWRlIiwicHJldlJlbGF0aXZlVGFyZ2V0IiwibWl4VGFyZ2V0RGVsdGEiLCJtaXhBeGlzRGVsdGEiLCJtaXhCb3giLCJjb21wbGV0ZUFuaW1hdGlvbiIsImFwcGx5VHJhbnNmb3Jtc1RvVGFyZ2V0Iiwic2hvdWxkQW5pbWF0ZVBvc2l0aW9uT25seSIsInhMZW5ndGgiLCJ5TGVuZ3RoIiwic2hvdWxkUHJlc2VydmVGb2xsb3dPcGFjaXR5IiwiZ2V0UHJldkxlYWQiLCJoYXNEaXN0b3J0aW5nVHJhbnNmb3JtIiwicmVzZXRWYWx1ZXMiLCJzdHlsZXMiLCJwb2ludGVyRXZlbnRzIiwiZW1wdHlTdHlsZXMiLCJ2YWx1ZXNUb1JlbmRlciIsImNvcnJlY3RlZCIsIm51bSIsInJlc2V0VHJlZSIsIm1lYXN1cmVkTGF5b3V0IiwiYXhpc1NuYXBzaG90IiwibGF5b3V0RGVsdGEiLCJ2aXN1YWxEZWx0YSIsInBhcmVudFNuYXBzaG90IiwicGFyZW50TGF5b3V0IiwicmVsYXRpdmVTbmFwc2hvdCIsIm9uQmVmb3JlTGF5b3V0TWVhc3VyZSIsIm1peEF4aXMiLCJ1c2VyQWdlbnRDb250YWlucyIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJvdW5kUG9pbnQiLCJyb3VuZEF4aXMiLCJEb2N1bWVudFByb2plY3Rpb25Ob2RlIiwibm90aWZ5MiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbExlZnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwicm9vdFByb2plY3Rpb25Ob2RlIiwiSFRNTFByb2plY3Rpb25Ob2RlIiwiZG9jdW1lbnROb2RlIiwicG9zaXRpb24iLCJpbXBvcnRfbW90aW9uX2RvbTEzIiwiaGFuZGxlSG92ZXJFdmVudCIsImxpZmVjeWNsZSIsIkhvdmVyR2VzdHVyZSIsImVuZEV2ZW50IiwiRm9jdXNHZXN0dXJlIiwib25Gb2N1cyIsImlzRm9jdXNWaXNpYmxlIiwibWF0Y2hlcyIsIm9uQmx1ciIsImltcG9ydF9tb3Rpb25fZG9tMTQiLCJoYW5kbGVQcmVzc0V2ZW50IiwiUHJlc3NHZXN0dXJlIiwicHJlc3MiLCJzdWNjZXNzIiwidXNlR2xvYmFsVGFyZ2V0IiwiZ2xvYmFsVGFwVGFyZ2V0Iiwib2JzZXJ2ZXJDYWxsYmFja3MiLCJvYnNlcnZlcnMiLCJmaXJlT2JzZXJ2ZXJDYWxsYmFjayIsImVudHJ5IiwiZmlyZUFsbE9ic2VydmVyQ2FsbGJhY2tzIiwiZW50cmllcyIsImluaXRJbnRlcnNlY3Rpb25PYnNlcnZlciIsImxvb2t1cFJvb3QiLCJyb290T2JzZXJ2ZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlSW50ZXJzZWN0aW9uIiwicm9vdEludGVyZXNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGROYW1lcyIsIkluVmlld0ZlYXR1cmUiLCJoYXNFbnRlcmVkVmlldyIsImlzSW5WaWV3Iiwic3RhcnRPYnNlcnZlciIsInZpZXdwb3J0Iiwicm9vdE1hcmdpbiIsImFtb3VudCIsIm9uY2UiLCJ0aHJlc2hvbGQiLCJvbkludGVyc2VjdGlvblVwZGF0ZSIsImlzSW50ZXJzZWN0aW5nIiwib25WaWV3cG9ydEVudGVyIiwib25WaWV3cG9ydExlYXZlIiwiaGFzT3B0aW9uc0NoYW5nZWQiLCJoYXNWaWV3cG9ydE9wdGlvbkNoYW5nZWQiLCJwcmV2Vmlld3BvcnQiLCJnZXN0dXJlQW5pbWF0aW9ucyIsInByZWZlcnNSZWR1Y2VkTW90aW9uIiwiaGFzUmVkdWNlZE1vdGlvbkxpc3RlbmVyIiwiaW5pdFByZWZlcnNSZWR1Y2VkTW90aW9uIiwibWF0Y2hNZWRpYSIsIm1vdGlvbk1lZGlhUXVlcnkiLCJzZXRSZWR1Y2VkTW90aW9uUHJlZmVyZW5jZXMiLCJhZGRMaXN0ZW5lciIsInZhbHVlVHlwZXMiLCJmaW5kVmFsdWVUeXBlIiwidXBkYXRlTW90aW9uVmFsdWVzRnJvbVByb3BzIiwibmV4dFZhbHVlIiwicHJldlZhbHVlIiwiZXhpc3RpbmdWYWx1ZSIsImxhdGVzdFZhbHVlIiwiZ2V0U3RhdGljVmFsdWUiLCJyZW1vdmVWYWx1ZSIsInByb3BFdmVudEhhbmRsZXJzIiwiX3Byb3BzIiwiX3ByZXZQcm9wcyIsIl92aXN1YWxFbGVtZW50IiwidmFsdWVTdWJzY3JpcHRpb25zIiwicHJldk1vdGlvblZhbHVlcyIsInByb3BFdmVudFN1YnNjcmlwdGlvbnMiLCJub3RpZnlVcGRhdGUiLCJ0cmlnZ2VyQnVpbGQiLCJyZW5kZXJJbnN0YW5jZSIsInJlbmRlclNjaGVkdWxlZEF0IiwiYmFzZVRhcmdldCIsImluaXRpYWxWYWx1ZXMiLCJpbml0aWFsTW90aW9uVmFsdWVzIiwicmVtb3ZlRnJvbVZhcmlhbnRUcmVlIiwiYWRkVmFyaWFudENoaWxkIiwiYmluZFRvTW90aW9uVmFsdWUiLCJmZWF0dXJlIiwidmFsdWVJc1RyYW5zZm9ybSIsInJlbW92ZU9uQ2hhbmdlIiwicmVtb3ZlT25SZW5kZXJSZXF1ZXN0IiwicmVtb3ZlU3luY0NoZWNrIiwiTW90aW9uQ2hlY2tBcHBlYXJTeW5jIiwib3RoZXIiLCJzb3J0SW5zdGFuY2VOb2RlUG9zaXRpb24iLCJmZWF0dXJlRGVmaW5pdGlvbiIsIkZlYXR1cmVDb25zdHJ1Y3RvciIsImJ1aWxkIiwibWVhc3VyZUluc3RhbmNlVmlld3BvcnRCb3giLCJsaXN0ZW5lck5hbWUiLCJsaXN0ZW5lciIsImhhbmRsZUNoaWxkTW90aW9uVmFsdWUiLCJnZXRWYXJpYW50IiwiZ2V0Q2xvc2VzdFZhcmlhbnROb2RlIiwiY2xvc2VzdFZhcmlhbnROb2RlIiwicmVtb3ZlVmFsdWVGcm9tUmVuZGVyU3RhdGUiLCJnZXRCYXNlVGFyZ2V0RnJvbVByb3BzIiwicmVhZFZhbHVlRnJvbUluc3RhbmNlIiwic2V0QmFzZVRhcmdldCIsInZhbHVlRnJvbUluaXRpYWwiLCJET01WaXN1YWxFbGVtZW50IiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJjaGlsZFN1YnNjcmlwdGlvbiIsInRleHRDb250ZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZTIiLCJIVE1MVmlzdWFsRWxlbWVudCIsImRlZmF1bHRUeXBlIiwiY29tcHV0ZWRTdHlsZSIsIlNWR1Zpc3VhbEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpbXBvcnRfcmVhY3QyOSIsImNyZWF0ZURvbVZpc3VhbEVsZW1lbnQiLCJjcmVhdGVNb3Rpb25Db21wb25lbnQiLCJpbXBvcnRfcmVhY3QzMCIsIm9ic2VydmVUaW1lbGluZSIsInByZXZQcm9ncmVzcyIsIm9uRnJhbWUiLCJwZXJjZW50YWdlIiwiaW1wb3J0X21vdGlvbl9kb20xNSIsInJlc2l6ZUhhbmRsZXJzIiwib2JzZXJ2ZXIiLCJnZXRFbGVtZW50U2l6ZSIsImJvcmRlckJveFNpemUiLCJpbmxpbmVTaXplIiwiYmxvY2tTaXplIiwibm90aWZ5VGFyZ2V0IiwiY29udGVudFJlY3QiLCJjb250ZW50U2l6ZSIsIm5vdGlmeUFsbCIsImNyZWF0ZVJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJyZXNpemVFbGVtZW50IiwiZWxlbWVudHMiLCJyZXNvbHZlRWxlbWVudHMiLCJlbGVtZW50SGFuZGxlcnMiLCJ3aW5kb3dDYWxsYmFja3MiLCJ3aW5kb3dSZXNpemVIYW5kbGVyIiwiY3JlYXRlV2luZG93UmVzaXplSGFuZGxlciIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlc2l6ZVdpbmRvdyIsInJlc2l6ZSIsImltcG9ydF9tb3Rpb25fdXRpbHMyNSIsIm1heEVsYXBzZWQyIiwiY3JlYXRlQXhpc0luZm8iLCJzY3JvbGxMZW5ndGgiLCJ0YXJnZXRPZmZzZXQiLCJjb250YWluZXJMZW5ndGgiLCJjcmVhdGVTY3JvbGxJbmZvIiwidXBkYXRlQXhpc0luZm8iLCJheGlzTmFtZSIsInByZXZUaW1lIiwidXBkYXRlU2Nyb2xsSW5mbyIsImNhbGNJbnNldCIsImNvbnRhaW5lciIsImluc2V0Iiwib2Zmc2V0UGFyZW50Iiwic3ZnQm91bmRpbmdCb3giLCJwYXJlbnRFbGVtZW50IiwicGFyZW50Qm91bmRpbmdCb3giLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJzdmciLCJwYXJlbnROb2RlIiwibmFtZWRFZGdlcyIsImNlbnRlciIsInJlc29sdmVFZGdlIiwiZWRnZSIsImFzTnVtYmVyMiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZGVmYXVsdE9mZnNldDIiLCJyZXNvbHZlT2Zmc2V0IiwidGFyZ2V0SW5zZXQiLCJvZmZzZXREZWZpbml0aW9uIiwidGFyZ2V0UG9pbnQiLCJjb250YWluZXJQb2ludCIsIlNjcm9sbE9mZnNldCIsIkVudGVyIiwiRXhpdCIsIkFueSIsIkFsbCIsImdldFRhcmdldFNpemUiLCJyZXNvbHZlT2Zmc2V0cyIsImxlbmd0aExhYmVsIiwidGFyZ2V0U2l6ZSIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0IiwiY29udGFpbmVyU2l6ZSIsIm51bU9mZnNldHMiLCJpbnRlcnBvbGF0b3JPZmZzZXRzIiwiY3JlYXRlT25TY3JvbGxIYW5kbGVyIiwib25TY3JvbGwiLCJzY3JvbGxMaXN0ZW5lcnMiLCJyZXNpemVMaXN0ZW5lcnMiLCJvblNjcm9sbEhhbmRsZXJzIiwiZ2V0RXZlbnRUYXJnZXQiLCJjb250YWluZXJIYW5kbGVycyIsImNvbnRhaW5lckhhbmRsZXIiLCJtZWFzdXJlQWxsIiwidXBkYXRlQWxsIiwibGlzdGVuZXIyIiwiY3VycmVudEhhbmRsZXJzIiwic2Nyb2xsTGlzdGVuZXIiLCJpbXBvcnRfbW90aW9uX2RvbTE2IiwiaW1wb3J0X21vdGlvbl91dGlsczI2Iiwic2Nyb2xsVGltZWxpbmVGYWxsYmFjayIsInRpbWVsaW5lQ2FjaGUiLCJnZXRUaW1lbGluZSIsImVsZW1lbnRDYWNoZSIsInN1cHBvcnRzU2Nyb2xsVGltZWxpbmUiLCJTY3JvbGxUaW1lbGluZSIsImlzT25TY3JvbGxXaXRoSW5mbyIsIm5lZWRzRWxlbWVudFRyYWNraW5nIiwic2Nyb2xsRnVuY3Rpb24iLCJzY3JvbGxBbmltYXRpb24iLCJ2YWx1ZUFuaW1hdGlvbiIsIm9wdGlvbnNXaXRoRGVmYXVsdHMiLCJpbXBvcnRfcmVhY3QzMSIsImltcG9ydF9tb3Rpb25fdXRpbHMyNyIsInJlZldhcm5pbmciLCJjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMiLCJzY3JvbGxYIiwic2Nyb2xsWSIsInNjcm9sbFhQcm9ncmVzcyIsInNjcm9sbFlQcm9ncmVzcyIsImxheW91dEVmZmVjdCIsInVzZUxpZmVjeWNsZUVmZmVjdCIsIl9wcm9ncmVzcyIsImltcG9ydF9yZWFjdDMyIiwic2V0TGF0ZXN0IiwidXNlQ29tYmluZU1vdGlvblZhbHVlcyIsImNvbWJpbmVWYWx1ZXMiLCJ1cGRhdGVWYWx1ZSIsImZyYWdtZW50cyIsIm51bUZyYWdtZW50cyIsImJ1aWxkVmFsdWUiLCJpbXBvcnRfcmVhY3QzMyIsInRvTnVtYmVyIiwiYWN0aXZlU3ByaW5nQW5pbWF0aW9uIiwibGF0ZXN0U2V0dGVyIiwic3RvcEFuaW1hdGlvbjIiLCJpbXBvcnRfcmVhY3QzNCIsImluaXRpYWxUaW1lc3RhbXAiLCJwcm92aWRlVGltZVNpbmNlU3RhcnQiLCJpc0N1c3RvbVZhbHVlVHlwZSIsImdldE1peGVyMiIsInVzZUltbWVkaWF0ZSIsImFyZ09mZnNldCIsImlucHV0VmFsdWUiLCJpbnB1dFJhbmdlIiwib3V0cHV0UmFuZ2UiLCJ1c2VDb21wdXRlZCIsImNvbXB1dGUiLCJpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciIsInVzZUxpc3RUcmFuc2Zvcm0iLCJ1cGRhdGVWZWxvY2l0eSIsImdldFdpbGxDaGFuZ2VOYW1lIiwiV2lsbENoYW5nZU1vdGlvblZhbHVlIiwic3R5bGVOYW1lIiwiaW1wb3J0X3JlYWN0MzUiLCJpbXBvcnRfcmVhY3QzNiIsInJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlIiwiaW1wb3J0X21vdGlvbl91dGlsczI4Iiwic2V0VmFyaWFudHMiLCJ2YXJpYW50TGFiZWxzIiwicmV2ZXJzZWRMYWJlbHMiLCJzZXRWYWx1ZXMiLCJoYXNNb3VudGVkIiwic3Vic2NyaWJlcnMiLCJpbXBvcnRfcmVhY3QzNyIsInJhbmdlU2l6ZSIsImdldEVhc2luZ0ZvclNlZ21lbnQiLCJpc0RPTUtleWZyYW1lcyIsImltcG9ydF9tb3Rpb25fZG9tMTciLCJyZXNvbHZlU3ViamVjdHMiLCJzdWJqZWN0Iiwic2NvcGUiLCJzZWxlY3RvckNhY2hlIiwiTm9kZUxpc3QiLCJjYWxjdWxhdGVSZXBlYXREdXJhdGlvbiIsIl9yZXBlYXREZWxheSIsImNhbGNOZXh0VGltZSIsImxhYmVscyIsImVyYXNlS2V5ZnJhbWVzIiwic2VxdWVuY2UiLCJlbmRUaW1lIiwiYXQiLCJhZGRLZXlmcmFtZXMiLCJub3JtYWxpemVUaW1lcyIsImNvbXBhcmVCeVRpbWUiLCJpbXBvcnRfbW90aW9uX2RvbTE4IiwiaW1wb3J0X21vdGlvbl91dGlsczI5IiwiZGVmYXVsdFNlZ21lbnRFYXNpbmciLCJNQVhfUkVQRUFUIiwiY3JlYXRlQW5pbWF0aW9uc0Zyb21TZXF1ZW5jZSIsImRlZmF1bHRUcmFuc2l0aW9uIiwic2VxdWVuY2VUcmFuc2l0aW9uIiwiZ2VuZXJhdG9yczIiLCJkZWZhdWx0RHVyYXRpb24iLCJhbmltYXRpb25EZWZpbml0aW9ucyIsInNlcXVlbmNlcyIsInRpbWVMYWJlbHMiLCJzZWdtZW50IiwibWF4RHVyYXRpb24yIiwicmVzb2x2ZVZhbHVlU2VxdWVuY2UiLCJ2YWx1ZUtleWZyYW1lcyIsInZhbHVlU2VxdWVuY2UiLCJlbGVtZW50SW5kZXgiLCJudW1TdWJqZWN0cyIsInZhbHVlS2V5ZnJhbWVzQXNMaXN0Iiwia2V5ZnJhbWVzQXNMaXN0IiwicmVtYWluaW5nVHJhbnNpdGlvbiIsImNhbGN1bGF0ZWREZWxheSIsIm51bUtleWZyYW1lcyIsImNyZWF0ZUdlbmVyYXRvciIsImFic29sdXRlRGVsdGEiLCJpc051bWJlcktleWZyYW1lc0FycmF5Iiwic3ByaW5nVHJhbnNpdGlvbiIsInNwcmluZ0Vhc2luZyIsImNyZWF0ZUdlbmVyYXRvckVhc2luZyIsInJlbWFpbmRlciIsInVuc2hpZnQiLCJvcmlnaW5hbEtleWZyYW1lcyIsIm9yaWdpbmFsVGltZXMiLCJvcmlnaW5hbEVhc2UiLCJyZXBlYXRJbmRleCIsImtleWZyYW1lSW5kZXgiLCJ0YXJnZXRUaW1lIiwic3ViamVjdFNlcXVlbmNlIiwiZ2V0U3ViamVjdFNlcXVlbmNlIiwiZ2V0VmFsdWVTZXF1ZW5jZSIsInN1YmplY3RzIiwic3ViamVjdEluZGV4IiwidGhpc1N1YmplY3QiLCJnZXRWYWx1ZVRyYW5zaXRpb240IiwidmFsdWVTZXF1ZW5jZXMiLCJ2YWx1ZU9mZnNldCIsInZhbHVlRWFzaW5nIiwiaXNOdW1iZXIiLCJldmVyeSIsImlzT2JqZWN0S2V5Iiwib2JqZWN0IiwiT2JqZWN0VmlzdWFsRWxlbWVudCIsImNyZWF0ZURPTVZpc3VhbEVsZW1lbnQiLCJjcmVhdGVPYmplY3RWaXN1YWxFbGVtZW50IiwiaW1wb3J0X21vdGlvbl91dGlsczMwIiwiaXNTaW5nbGVWYWx1ZSIsImFuaW1hdGVTdWJqZWN0IiwiYW5pbWF0ZVNlcXVlbmNlIiwiaW1wb3J0X21vdGlvbl9kb20xOSIsImlzU2VxdWVuY2UiLCJzY29wZWRBbmltYXRlIiwic3ViamVjdE9yU2VxdWVuY2UiLCJvcHRpb25zT3JLZXlmcmFtZXMiLCJzZXRDU1NWYXIiLCJzZXRTdHlsZSIsImltcG9ydF9tb3Rpb25fdXRpbHMzMSIsInN1cHBvcnRzUGFydGlhbEtleWZyYW1lcyIsImltcG9ydF9tb3Rpb25fZG9tMjAiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzIiLCJoeWRyYXRlS2V5ZnJhbWVzIiwiZGVmYXVsdEVhc2luZzIiLCJnZXRFbGVtZW50QW5pbWF0aW9uU3RhdGUiLCJOYXRpdmVBbmltYXRpb24iLCJOYXRpdmVBbmltYXRpb25Db250cm9scyIsImlzQ1NTVmFyIiwiZXhpc3RpbmdBbmltYXRpb24iLCJyZWFkSW5pdGlhbEtleWZyYW1lIiwiZ2VuZXJhdG9yT3B0aW9ucyIsIm9uRmluaXNoIiwic2V0VmFsdWUiLCJyZW1vdmVBbmltYXRpb24iLCJlbGVtZW50U3RhdGUiLCJpbXBvcnRfbW90aW9uX2RvbTIxIiwiaW1wb3J0X21vdGlvbl91dGlsczMzIiwiYW5pbWF0ZUVsZW1lbnRzIiwiZWxlbWVudE9yU2VsZWN0b3IiLCJudW1FbGVtZW50cyIsImVsZW1lbnRUcmFuc2l0aW9uIiwidmFsdWVPcHRpb25zIiwiaW1wb3J0X21vdGlvbl9kb20yMiIsImNyZWF0ZVNjb3BlZFdhYXBpQW5pbWF0ZSIsImltcG9ydF9yZWFjdDM4IiwiY29tcG9uZW50Q29udHJvbHMiLCJuYXRpdmVFdmVudCIsImNyZWF0ZURyYWdDb250cm9scyIsImNvbXBvbmVudCIsInN0YXJ0VHJhbnNpdGlvbiIsImltcG9ydF9yZWFjdDM5IiwiaW1wb3J0X3JlYWN0NDAiLCJpdGVtcyIsInNldEl0ZW0iLCJydW5DeWNsZSIsImltcG9ydF9tb3Rpb25fZG9tMjMiLCJ0aHJlc2hvbGRzIiwiYWN0aXZlSW50ZXJzZWN0aW9ucyIsIm9uSW50ZXJzZWN0aW9uQ2hhbmdlIiwibmV3T25FbmQiLCJvYnNlcnZlcjIiLCJkaXNjb25uZWN0IiwiaW1wb3J0X3JlYWN0NDEiLCJzZXRJblZpZXciLCJvbkVudGVyIiwiaW1wb3J0X3JlYWN0NDIiLCJmb3JjZVVwZGF0ZSIsInN0YXJ0SW5zdGFudExheW91dFRyYW5zaXRpb24iLCJ1bmxvY2tPbkZyYW1lUmVmIiwiYXBwZWFyU3RvcmVJZCIsImVsZW1lbnRJZCIsImFwcGVhckFuaW1hdGlvblN0b3JlIiwiYXBwZWFyQ29tcGxldGUiLCJoYW5kb2ZmT3B0aW1pemVkQXBwZWFyQW5pbWF0aW9uIiwiZnJhbWUyIiwic3RvcmVJZCIsIm9wdGltaXNlZEFuaW1hdGlvbiIsImNhbmNlbEFuaW1hdGlvbiIsImltcG9ydF9tb3Rpb25fdXRpbHMzNCIsInN0YXJ0RnJhbWVUaW1lIiwicmVhZHlBbmltYXRpb24iLCJzdXNwZW5kZWRBbmltYXRpb25zIiwicmVzdW1lU3VzcGVuZGVkQW5pbWF0aW9ucyIsImRhdGEiLCJvblJlYWR5IiwiY2FuUmVzdW1lIiwidmFsdWVJc09wdGltaXNlZCIsImV4dGVybmFsQW5pbWF0aW9uVmFsdWUiLCJhcHBlYXJBbmltYXRpb24iLCJyZWFkeSIsImNhdGNoIiwiaW1wb3J0X3JlYWN0NDMiLCJjcmVhdGVPYmplY3QiLCJTdGF0ZVZpc3VhbEVsZW1lbnQiLCJyZXN0b3JlVHJhbnNmb3JtIiwiX3N0YXRlIiwiaW5pdGlhbFN0YXRlIiwic2V0QW5pbWF0aW9uU3RhdGUiLCJhbmltYXRpb25EZWZpbml0aW9uIiwiaW1wb3J0X2pzeF9ydW50aW1lOSIsImltcG9ydF9tb3Rpb25fdXRpbHMzNSIsIlJlYWN0MyIsImlkMyIsImltcG9ydF9tb3Rpb25fdXRpbHMzNiIsImltcG9ydF9yZWFjdDQ0IiwibWF4U2NhbGUiLCJpbnZlcnRTY2FsZSIsImhhc1dhcm5lZCIsInBhcmVudFNjYWxlWCIsInBhcmVudFNjYWxlWSIsIkdyb3VwIiwiUmVvcmRlckdyb3VwIiwiSXRlbSIsIlJlb3JkZXJJdGVtIiwiaW1wb3J0X3JlYWN0NDUiLCJSZW9yZGVyQ29udGV4dCIsImNoZWNrUmVvcmRlciIsIm9yZGVyIiwiaXRlbTIiLCJuZXh0T2Zmc2V0IiwibmV4dEl0ZW0iLCJuZXh0TGF5b3V0IiwibmV4dEl0ZW1DZW50ZXIiLCJpbXBvcnRfanN4X3J1bnRpbWUxMCIsImltcG9ydF9tb3Rpb25fdXRpbHMzNyIsImltcG9ydF9yZWFjdDQ2IiwiUmVvcmRlckdyb3VwQ29tcG9uZW50IiwiYXMiLCJvblJlb3JkZXIiLCJpc1Jlb3JkZXJpbmciLCJyZWdpc3Rlckl0ZW0iLCJpZHgiLCJjb21wYXJlTWluIiwidXBkYXRlT3JkZXIiLCJuZXdPcmRlciIsImltcG9ydF9qc3hfcnVudGltZTExIiwiaW1wb3J0X21vdGlvbl91dGlsczM4IiwiaW1wb3J0X3JlYWN0NDciLCJ1c2VEZWZhdWx0TW90aW9uVmFsdWUiLCJSZW9yZGVySXRlbUNvbXBvbmVudCIsImxhdGVzdFgiLCJsYXRlc3RZIiwiZ2VzdHVyZVBvaW50Iiwib25MYXlvdXRNZWFzdXJlIiwibWVhc3VyZWQiLCJnZXRPcmlnaW5JbmRleCIsInRvdGFsIiwibGFzdEluZGV4Iiwic3RhcnREZWxheSIsIm1heERlbGF5IiwibnVtU3RlcHMiLCJleHBhbmRlZCIsInJvdW5kZWQiLCJjZWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLCtCQUFBLEdBQUFDLFVBQUE7RUFBQSwrREFBQUMsQ0FBQUMsT0FBQTtJQUFBOztJQUVBQyxNQUFBLENBQU9DLGNBQUEsQ0FBZUYsT0FBQSxFQUFTLGNBQWM7TUFBRUcsS0FBQSxFQUFPO0lBQUssQ0FBQztJQUU1RCxTQUFTQyxRQUFRQyxFQUFBLEVBQUk7TUFDbkIsSUFBSUMsS0FBQSxHQUFRLGVBQUFMLE1BQUEsQ0FBT00sTUFBQSxDQUFPLElBQUk7TUFDOUIsT0FBTyxVQUFVQyxHQUFBLEVBQUs7UUFD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QUEsb0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyw2QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDZCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUMscUJBQUEsQ0FBQUQsU0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsbUJBQUEsQ0FBQUQsWUFBQTtFQUFBRSxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQWQscUJBQUEsQ0FBQWMsSUFBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtB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eEMsSUFBQSxDQUFLaW1CLEdBQUEsQ0FBSTlFLFNBQUEsR0FBWTllLENBQUM7SUFDdkMsSUFBSXF2QixNQUFBLEdBQVFZLFFBQUEsR0FBVzJlLFNBQUE7SUFDdkIsSUFBSW5XLEtBQUEsRUFBTTtNQUNOLE1BQU1xdEMsUUFBQSxHQUFXSCxLQUFBLEdBQVExMUMsUUFBQTtNQUN6QixNQUFNeUosY0FBQSxHQUFpQlosMEJBQUEsQ0FBMkJMLEtBQUk7TUFDdERwSixNQUFBLEdBQVFxSyxjQUFBLENBQWVySyxNQUFBLEdBQVF5MkMsUUFBUSxJQUFJQSxRQUFBO0lBQy9DO0lBQ0EsT0FBT0QsVUFBQSxHQUFheDJDLE1BQUE7RUFDeEI7QUFDSjs7O0FDZkEsSUFBTXI1QixJQUFBLEdBQU9sQyxLQUFBO0FBTWIsSUFBTXZCLFVBQUEsR0FBYXdRLFVBQUEsQ0FBV1MsTUFBQSxDQUFPLENBQUNDLEdBQUEsRUFBSzFGLEdBQUEsS0FBUTtFQUMvQzBGLEdBQUEsQ0FBSTFGLEdBQUEsSUFBUXNHLFFBQUEsSUFBWS9SLFdBQUEsQ0FBWStSLFFBQU87RUFDM0MsT0FBT1osR0FBQTtBQUNYLEdBQUcsQ0FBQyxDQUFDOzs7QUNmTCxTQUFTMU4sTUFBTWd3RSxRQUFBLEVBQVV6bkMsU0FBQSxHQUFZLE9BQU87RUFDeEMsT0FBUTNOLFNBQUEsSUFBYTtJQUNqQkEsU0FBQSxHQUNJMk4sU0FBQSxLQUFjLFFBQ1IzZ0MsSUFBQSxDQUFLd0csR0FBQSxDQUFJd3NCLFNBQUEsRUFBVSxLQUFLLElBQ3hCaHpCLElBQUEsQ0FBS3VHLEdBQUEsQ0FBSXlzQixTQUFBLEVBQVUsSUFBSztJQUNsQyxNQUFNcTFDLFFBQUEsR0FBV3IxQyxTQUFBLEdBQVdvMUMsUUFBQTtJQUM1QixNQUFNRSxPQUFBLEdBQVUzbkMsU0FBQSxLQUFjLFFBQVEzZ0MsSUFBQSxDQUFLdy9CLEtBQUEsQ0FBTTZvQyxRQUFRLElBQUlyb0UsSUFBQSxDQUFLdW9FLElBQUEsQ0FBS0YsUUFBUTtJQUMvRSxPQUFPcnpFLEtBQUEsQ0FBTSxHQUFHLEdBQUdzekUsT0FBQSxHQUFVRixRQUFRO0VBQ3pDO0FBQ0o7OztBQ3lEQSxJQUFBdnhFLG1CQUFBLEdBQTZCbUUsT0FBQTtBQUM3QixJQUFBdEUscUJBQUEsR0FBMENzRSxPQUFBO0FBdEUxQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9