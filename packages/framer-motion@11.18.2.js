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

// .beyond/uimport/temp/framer-motion.11.18.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmNqcy5kZXYuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L2Vtb3Rpb24tbWVtb2l6ZS5janMuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2Vtb3Rpb24taXMtcHJvcC12YWxpZC5janMuanMiLCIuLi8uYmV5b25kL3VpbXBvcnQvdGVtcC9mcmFtZXItbW90aW9uLjExLjE4LjIuanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9QcmVzZW5jZUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L01vdGlvbkNvbmZpZ0NvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9Qb3BDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1ByZXNlbmNlQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91c2UtcHJlc2VuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLWJyb3dzZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXNvbW9ycGhpYy1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvRGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pcy1tb3VudGVkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvR2xvYmFsQ29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3JlbmRlci1zdGVwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2JhdGNoZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtZm9yY2UtdXBkYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXlvdXRHcm91cC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF6eUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZGVmaW5pdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbG9hZC1mZWF0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTGF6eU1vdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy92YWxpZC1wcm9wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9maWx0ZXItcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL01vdGlvbkNvbmZpZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3dhcm4tb25jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9jb21wb25lbnRzL2NyZWF0ZS1wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy12YXJpYW50LWxhYmVsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy92YXJpYW50LXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2lzLWNvbnRyb2xsaW5nLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9zeW1ib2wubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1yZWYtb2JqZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS1tb3Rpb24tcmVmLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jYW1lbC10by1kYXNoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvZGF0YS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9taWNyb3Rhc2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1N3aXRjaExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2xvd2VyY2FzZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtc3ZnLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWtleWZyYW1lcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZXNvbHZlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvaXMtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvcmVzb2x2ZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2tleXMtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1jc3MtdmFyaWFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2dldC1hcy10eXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvY2xhbXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy91bml0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvbnVtYmVyLWJyb3dzZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1pbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXN0eWxlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvcGF0aC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvdHJhbnNmb3JtLW9yaWdpbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvYnVpbGQtYXR0cnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9pcy1zdmctdGFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jYW1lbC1jYXNlLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1jb3JyZWN0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLWZvcmNlZC1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvc2NyYXBlLW1vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXNlLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3VzZS1yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvY29tcG9uZW50cy9jcmVhdGUtZmFjdG9yeS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9jb21wb25lbnRzL20vY3JlYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2NvbXBvbmVudHMvbS9wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3NoYWxsb3ctY29tcGFyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLWR5bmFtaWMtdmFyaWFudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9rZXlzLXBvc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3N5bmMtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2FycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc3Vic2NyaXB0aW9uLW1hbmFnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy92ZWxvY2l0eS1wZXItc2Vjb25kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvc2V0dGVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9pcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9hZGQtd2lsbC1jaGFuZ2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9nZXQtYXBwZWFyLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluc3RhbnQtdHJhbnNpdGlvbi1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jdWJpYy1iZXppZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL21pcnJvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9tb2RpZmllcnMvcmV2ZXJzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9iYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2FudGljaXBhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY2lyYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXplcm8tdmFsdWUtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLW5vbmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy91dGlscy9zYW5pdGl6ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL2Zsb2F0LXJlZ2V4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMvaXMtbnVsbGlzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL3NpbmdsZS1jb2xvci1yZWdleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvcmdiYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2hleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2hzbGEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL2NvbG9yLXJlZ2V4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29tcGxleC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvZmlsdGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kZWZhdWx0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvYW5pbWF0YWJsZS1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvbWFrZS1ub25lLWFuaW1hdGFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3VuaXQtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9LZXlmcmFtZXNSZXNvbHZlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLW51bWVyaWNhbC1zdHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2Nzcy12YXJpYWJsZXMtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdGVzdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1hdXRvLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kaW1lbnNpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01LZXlmcmFtZXNSZXNvbHZlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1hbmltYXRhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy91dGlscy9jYW4tYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvdXRpbHMvZ2V0LWZpbmFsLWtleWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9CYXNlQW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2hzbGEtdG8tcmdiYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC9pbW1lZGlhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvY29sb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9waXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L3Zpc2liaWxpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvY29tcGxleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL3ZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2RlZmF1bHRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9zcHJpbmcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9pbmVydGlhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2Vhc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtZWFzaW5nLWFycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL21hcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2ludGVycG9sYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9maWxsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9kZWZhdWx0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy90aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9kcml2ZXJzL2RyaXZlci1mcmFtZWxvb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL01haW5UaHJlYWRBbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3V0aWxzL2FjY2VsZXJhdGVkLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL3N1cHBvcnRzLXdhYXBpLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9BY2NlbGVyYXRlZEFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9kZWZhdWx0LXRyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLXRyYW5zaXRpb24tZGVmaW5lZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL21vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXZhcmlhbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9nZXQtdmFyaWFudC1jb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2FuaW1hdGlvbi1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9GZWF0dXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb24vZXhpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2FkZC1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvZXZlbnQtaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy9hZGQtcG9pbnRlci1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2Rpc3RhbmNlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcGFuL1BhblNlc3Npb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWNhbGMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3V0aWxzL2NvbnN0cmFpbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9tb2RlbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2VhY2gtYXhpcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvaGFzLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtYXBwbHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL21lYXN1cmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9nZXQtY29udGV4dC13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL1Zpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcGFuL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtYm9yZGVyLXJhZGl1cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJveC1zaGFkb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbGF5b3V0L01lYXN1cmVMYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9zaW5nbGUtdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2NvbXBhcmUtYnktZGVwdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZmxhdC10cmVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGVsYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2FuaW1hdGlvbi9taXgtdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9jb3B5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1yZW1vdmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zaGFyZWQvc3RhY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvY3JlYXRlLXByb2plY3Rpb24tbm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9Eb2N1bWVudFByb2plY3Rpb25Ob2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL0hUTUxQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9kcmFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvaG92ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9mb2N1cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L29ic2VydmVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9nZXN0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL21vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vRE9NVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL0hUTUxWaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy9TVkdWaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvY29tcG9uZW50cy9tb3Rpb24vY3JlYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2NvbXBvbmVudHMvbW90aW9uL3Byb3h5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9mZWF0dXJlcy1hbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLW1heC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtbWluLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLW1vdGlvbi12YWx1ZS1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29ic2VydmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9lZGdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9vZmZzZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL3ByZXNldHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb24tc2Nyb2xsLWhhbmRsZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC90cmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3Njcm9sbC91c2UtZWxlbWVudC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLXZpZXdwb3J0LXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tYmluZS12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtbW90aW9uLXRlbXBsYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNwcmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1hbmltYXRpb24tZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21wdXRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdmVsb2NpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvZ2V0LXdpbGwtY2hhbmdlLW5hbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvV2lsbENoYW5nZU1vdGlvblZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vdXNlLXJlZHVjZWQtbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vdXNlLXJlZHVjZWQtbW90aW9uLWNvbmZpZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy9hbmltYXRpb24tY29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtdW5tb3VudC1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93cmFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2dldC1lYXNpbmctZm9yLXNlZ21lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtZG9tLWtleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlL3Jlc29sdmUtc3ViamVjdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy1yZXBlYXQtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy10aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2VkaXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvbm9ybWFsaXplLXRpbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL3NvcnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvY3JlYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL29iamVjdC9PYmplY3RWaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlL3N1YmplY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9zZXF1ZW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS91dGlscy9zdHlsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvdXRpbHMvc3VwcG9ydHMtcGFydGlhbC1rZXlmcmFtZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL05hdGl2ZUFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvYW5pbWF0ZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvYW5pbWF0ZS1zdHlsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS1zdHlsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL3VzZS1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3VzZS1kcmFnLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdW53cmFwLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3VzZS1pbnN0YW50LWxheW91dC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91c2UtcmVzZXQtcHJvamVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1jeWNsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmlld3BvcnQvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW4tdmlldy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvaGFuZG9mZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlZC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVNoYXJlZExheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1pbnZlcnRlZC1zY2FsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9uYW1lc3BhY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1Jlb3JkZXJDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL3V0aWxzL2NoZWNrLXJlb3JkZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvR3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvSXRlbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9zdGFnZ2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2luZGV4LWxlZ2FjeS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9zdGVwcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2luZGV4Lm1qcyJdLCJuYW1lcyI6WyJyZXF1aXJlX2Vtb3Rpb25fbWVtb2l6ZV9janNfZGV2IiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmNqcy5kZXYuanMiLCJleHBvcnRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm1lbW9pemUiLCJmbiIsImNhY2hlIiwiY3JlYXRlIiwiYXJnIiwicmVxdWlyZV9lbW90aW9uX21lbW9pemVfY2pzIiwibm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuY2pzLmpzIiwibW9kdWxlMiIsInJlcXVpcmVfZW1vdGlvbl9pc19wcm9wX3ZhbGlkX2NqcyIsIm5vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmNqcy5qcyIsIl9pbnRlcm9wRGVmYXVsdCIsImUiLCJfX2VzTW9kdWxlIiwibWVtb2l6ZV9fZGVmYXVsdCIsInJlYWN0UHJvcHNSZWdleCIsImlzUHJvcFZhbGlkIiwicHJvcCIsInRlc3QiLCJjaGFyQ29kZUF0IiwiZnJhbWVyX21vdGlvbl8xMV8xOF8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjY2VsZXJhdGVkQW5pbWF0aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkRlcHJlY2F0ZWRMYXlvdXRHcm91cENvbnRleHQiLCJEcmFnQ29udHJvbHMiLCJGbGF0VHJlZSIsIkxheW91dEdyb3VwIiwiTGF5b3V0R3JvdXBDb250ZXh0IiwiTGF6eU1vdGlvbiIsIk1vdGlvbkNvbmZpZyIsIk1vdGlvbkNvbmZpZ0NvbnRleHQiLCJNb3Rpb25Db250ZXh0IiwiTW90aW9uR2xvYmFsQ29uZmlnIiwiTW90aW9uVmFsdWUiLCJQcmVzZW5jZUNvbnRleHQiLCJSZW9yZGVyIiwibmFtZXNwYWNlX2V4cG9ydHMiLCJTd2l0Y2hMYXlvdXRHcm91cENvbnRleHQiLCJWaXN1YWxFbGVtZW50IiwiYWRkUG9pbnRlckV2ZW50IiwiYWRkUG9pbnRlckluZm8iLCJhZGRTY2FsZUNvcnJlY3RvciIsImFuaW1hdGUiLCJhbmltYXRlTWluaSIsImFuaW1hdGVWYWx1ZSIsImFuaW1hdGVWaXN1YWxFbGVtZW50IiwiYW5pbWF0aW9uQ29udHJvbHMiLCJhbmltYXRpb25zIiwiYW50aWNpcGF0ZSIsImJhY2tJbiIsImJhY2tJbk91dCIsImJhY2tPdXQiLCJidWlsZFRyYW5zZm9ybSIsImNhbGNMZW5ndGgiLCJjYW5jZWxGcmFtZSIsImNhbmNlbFN5bmMiLCJjaXJjSW4iLCJjaXJjSW5PdXQiLCJjaXJjT3V0IiwiY2xhbXAiLCJjb2xvciIsImNvbXBsZXgiLCJjcmVhdGVCb3giLCJjcmVhdGVSZW5kZXJlck1vdGlvbkNvbXBvbmVudCIsImNyZWF0ZVNjb3BlZEFuaW1hdGUiLCJjdWJpY0JlemllciIsImRlbGF5IiwiZGlzYWJsZUluc3RhbnRUcmFuc2l0aW9ucyIsImRpc3RhbmNlIiwiZGlzdGFuY2UyRCIsImRvbUFuaW1hdGlvbiIsImRvbU1heCIsImRvbU1pbiIsImVhc2VJbiIsImVhc2VJbk91dCIsImVhc2VPdXQiLCJmaWx0ZXJQcm9wcyIsImZpbmRTcHJpbmciLCJmcmFtZSIsImZyYW1lRGF0YSIsImZyYW1lU3RlcHMiLCJpblZpZXciLCJpbmVydGlhIiwiaW50ZXJwb2xhdGUiLCJpbnZhcmlhbnQiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzkiLCJpc0Jyb3dzZXIiLCJpc0RyYWdBY3RpdmUiLCJpbXBvcnRfbW90aW9uX2RvbTI0IiwiaXNNb3Rpb25Db21wb25lbnQiLCJpc01vdGlvblZhbHVlIiwiaXNWYWxpZE1vdGlvblByb3AiLCJrZXlmcmFtZXMiLCJtIiwibWFrZVVzZVZpc3VhbFN0YXRlIiwibWlycm9yRWFzaW5nIiwibWl4IiwibW90aW9uIiwibW90aW9uVmFsdWUiLCJub29wIiwib3B0aW1pemVkQXBwZWFyRGF0YUF0dHJpYnV0ZSIsInBpcGUiLCJwcm9ncmVzcyIsInB4IiwicmVzb2x2ZU1vdGlvblZhbHVlIiwicmV2ZXJzZUVhc2luZyIsInNjcm9sbCIsInNjcm9sbEluZm8iLCJzcHJpbmciLCJzdGFnZ2VyIiwic3RhcnRPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJzdGVwcyIsInN5bmMiLCJ0aW1lIiwidHJhbnNmb3JtIiwidW53cmFwTW90aW9uQ29tcG9uZW50IiwidXNlQW5pbWF0ZSIsInVzZUFuaW1hdGVNaW5pIiwidXNlQW5pbWF0aW9uIiwidXNlQW5pbWF0aW9uQ29udHJvbHMiLCJ1c2VBbmltYXRpb25GcmFtZSIsInVzZUN5Y2xlIiwidXNlRGVwcmVjYXRlZEFuaW1hdGVkU3RhdGUiLCJ1c2VBbmltYXRlZFN0YXRlIiwidXNlRGVwcmVjYXRlZEludmVydGVkU2NhbGUiLCJ1c2VJbnZlcnRlZFNjYWxlIiwidXNlRG9tRXZlbnQiLCJ1c2VEcmFnQ29udHJvbHMiLCJ1c2VFbGVtZW50U2Nyb2xsIiwidXNlRm9yY2VVcGRhdGUiLCJ1c2VJblZpZXciLCJ1c2VJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVzZUluc3RhbnRUcmFuc2l0aW9uIiwidXNlSXNQcmVzZW50IiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsInVzZU1vdGlvblRlbXBsYXRlIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VNb3Rpb25WYWx1ZUV2ZW50IiwidXNlUHJlc2VuY2UiLCJ1c2VSZWR1Y2VkTW90aW9uIiwidXNlUmVkdWNlZE1vdGlvbkNvbmZpZyIsInVzZVJlc2V0UHJvamVjdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsInVzZVRpbWUiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VVbm1vdW50RWZmZWN0IiwidXNlVmVsb2NpdHkiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVdpbGxDaGFuZ2UiLCJ2aXN1YWxFbGVtZW50U3RvcmUiLCJ3cmFwIiwibW9kdWxlIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImNyZWF0ZUNvbnRleHQiLCJpbXBvcnRfcmVhY3QyIiwidXNlQ29uc3RhbnQiLCJpbml0IiwicmVmIiwidXNlUmVmIiwiY3VycmVudCIsImltcG9ydF9yZWFjdDMiLCJpbXBvcnRfcmVhY3Q0IiwidHJhbnNmb3JtUGFnZVBvaW50IiwicCIsImlzU3RhdGljIiwicmVkdWNlZE1vdGlvbiIsImltcG9ydF9qc3hfcnVudGltZSIsIlJlYWN0IiwiX190b0VTTSIsImltcG9ydF9yZWFjdDUiLCJQb3BDaGlsZE1lYXN1cmUiLCJDb21wb25lbnQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJwcm9wcyIsImNoaWxkUmVmIiwiaXNQcmVzZW50Iiwic2l6ZSIsInNpemVSZWYiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIlBvcENoaWxkIiwiaXNQcmVzZW50MiIsImlkNCIsInVzZUlkIiwibm9uY2UiLCJ1c2VDb250ZXh0IiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwiZGF0YXNldCIsIm1vdGlvblBvcElkIiwic3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZW1vdmVDaGlsZCIsImpzeCIsImNsb25lRWxlbWVudCIsImltcG9ydF9qc3hfcnVudGltZTIiLCJSZWFjdDIiLCJpbXBvcnRfcmVhY3Q2IiwiUHJlc2VuY2VDaGlsZCIsImluaXRpYWwiLCJvbkV4aXRDb21wbGV0ZSIsImN1c3RvbSIsInByZXNlbmNlQWZmZWN0c0xheW91dCIsIm1vZGUiLCJwcmVzZW5jZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW5NYXAiLCJtZW1vaXplZE9uRXhpdENvbXBsZXRlIiwidXNlQ2FsbGJhY2siLCJjaGlsZElkIiwic2V0IiwiaXNDb21wbGV0ZSIsInZhbHVlcyIsImNvbnRleHQiLCJ1c2VNZW1vIiwiaWQiLCJyZWdpc3RlciIsImRlbGV0ZSIsIk1hdGgiLCJyYW5kb20iLCJmb3JFYWNoIiwiXyIsImtleSIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwiTWFwIiwiaW1wb3J0X3JlYWN0NyIsInN1YnNjcmliZSIsInNhZmVUb1JlbW92ZSIsImltcG9ydF9yZWFjdDgiLCJnZXRDaGlsZEtleSIsImNoaWxkIiwib25seUVsZW1lbnRzIiwiZmlsdGVyZWQiLCJDaGlsZHJlbiIsImlzVmFsaWRFbGVtZW50IiwicHVzaCIsIndpbmRvdyIsImltcG9ydF9yZWFjdDkiLCJ1c2VMYXlvdXRFZmZlY3QiLCJpbXBvcnRfanN4X3J1bnRpbWUzIiwiaW1wb3J0X3JlYWN0MTAiLCJwcm9wYWdhdGUiLCJpc1BhcmVudFByZXNlbnQiLCJwcmVzZW50Q2hpbGRyZW4iLCJwcmVzZW50S2V5cyIsIm1hcCIsImlzSW5pdGlhbFJlbmRlciIsInBlbmRpbmdQcmVzZW50Q2hpbGRyZW4iLCJleGl0Q29tcGxldGUiLCJkaWZmZWRDaGlsZHJlbiIsInNldERpZmZlZENoaWxkcmVuIiwidXNlU3RhdGUiLCJyZW5kZXJlZENoaWxkcmVuIiwic2V0UmVuZGVyZWRDaGlsZHJlbiIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImdldCIsImpvaW4iLCJleGl0aW5nQ2hpbGRyZW4iLCJuZXh0Q2hpbGRyZW4iLCJzcGxpY2UiLCJjb25zb2xlIiwid2FybiIsImZvcmNlUmVuZGVyIiwiRnJhZ21lbnQiLCJvbkV4aXQiLCJoYXMiLCJpc0V2ZXJ5RXhpdENvbXBsZXRlIiwiaXNFeGl0Q29tcGxldGUiLCJpbXBvcnRfcmVhY3QxMSIsImltcG9ydF9yZWFjdDEyIiwidXNlSXNNb3VudGVkIiwiaXNNb3VudGVkIiwic2tpcEFuaW1hdGlvbnMiLCJ1c2VNYW51YWxUaW1pbmciLCJjcmVhdGVSZW5kZXJTdGVwIiwicnVuTmV4dEZyYW1lIiwidGhpc0ZyYW1lIiwiU2V0IiwibmV4dEZyYW1lIiwiaXNQcm9jZXNzaW5nIiwiZmx1c2hOZXh0RnJhbWUiLCJ0b0tlZXBBbGl2ZSIsIldlYWtTZXQiLCJsYXRlc3RGcmFtZURhdGEiLCJkZWx0YSIsInRpbWVzdGFtcCIsInRyaWdnZXJDYWxsYmFjayIsImNhbGxiYWNrIiwic3RlcCIsInNjaGVkdWxlIiwia2VlcEFsaXZlIiwiaW1tZWRpYXRlIiwiYWRkVG9DdXJyZW50RnJhbWUiLCJxdWV1ZSIsImFkZCIsImNhbmNlbCIsInByb2Nlc3MiLCJmcmFtZURhdGEyIiwiY2xlYXIiLCJzdGVwc09yZGVyIiwibWF4RWxhcHNlZCIsImNyZWF0ZVJlbmRlckJhdGNoZXIiLCJzY2hlZHVsZU5leHRCYXRjaCIsImFsbG93S2VlcEFsaXZlIiwidXNlRGVmYXVsdEVsYXBzZWQiLCJzdGF0ZTIiLCJmbGFnUnVuTmV4dEZyYW1lIiwic3RlcHMyIiwicmVkdWNlIiwiYWNjIiwicmVhZCIsInJlc29sdmVLZXlmcmFtZXMiLCJ1cGRhdGUiLCJwcmVSZW5kZXIiLCJwb3N0UmVuZGVyIiwicHJvY2Vzc0JhdGNoIiwicGVyZm9ybWFuY2UiLCJub3ciLCJtYXgiLCJtaW4iLCJ3YWtlIiwicHJvY2VzczIiLCJzdGF0ZSIsImltcG9ydF9tb3Rpb25fdXRpbHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbXBvcnRfcmVhY3QxMyIsImZvcmNlZFJlbmRlckNvdW50Iiwic2V0Rm9yY2VkUmVuZGVyQ291bnQiLCJkZWZlcnJlZEZvcmNlUmVuZGVyIiwibm90aWZ5Iiwibm9kZSIsImlzTGF5b3V0RGlydHkiLCJ3aWxsVXBkYXRlIiwibm9kZUdyb3VwIiwibm9kZXMiLCJzdWJzY3JpcHRpb25zIiwiV2Vha01hcCIsImRpcnR5QWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsInVuc3Vic2NyaWJlIiwiZGlydHkiLCJpbXBvcnRfanN4X3J1bnRpbWU0IiwiaW1wb3J0X3JlYWN0MTQiLCJzaG91bGRJbmhlcml0R3JvdXAiLCJpbmhlcml0Iiwic2hvdWxkSW5oZXJpdElkIiwibGF5b3V0R3JvdXBDb250ZXh0IiwiZGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dCIsInVwc3RyZWFtSWQiLCJncm91cCIsIm1lbW9pemVkQ29udGV4dCIsImltcG9ydF9yZWFjdDE1IiwiTGF6eUNvbnRleHQiLCJzdHJpY3QiLCJmZWF0dXJlUHJvcHMiLCJhbmltYXRpb24iLCJleGl0IiwiZHJhZyIsImZvY3VzIiwiaG92ZXIiLCJ0YXAiLCJwYW4iLCJsYXlvdXQiLCJmZWF0dXJlRGVmaW5pdGlvbnMiLCJpc0VuYWJsZWQiLCJzb21lIiwibmFtZSIsImxvYWRGZWF0dXJlcyIsImZlYXR1cmVzIiwiaW1wb3J0X2pzeF9ydW50aW1lNSIsImltcG9ydF9yZWFjdDE2Iiwic2V0SXNMb2FkZWQiLCJpc0xhenlCdW5kbGUiLCJsb2FkZWRSZW5kZXJlciIsInJlbmRlcmVyIiwibG9hZGVkRmVhdHVyZXMiLCJ0aGVuIiwidmFsaWRNb3Rpb25Qcm9wcyIsInN0YXJ0c1dpdGgiLCJzaG91bGRGb3J3YXJkIiwibG9hZEV4dGVybmFsSXNWYWxpZFByb3AiLCJpc1ZhbGlkUHJvcCIsImRlZmF1bHQiLCJfYSIsImlzRG9tIiwiZm9yd2FyZE1vdGlvblByb3BzIiwiZmlsdGVyZWRQcm9wcyIsImltcG9ydF9qc3hfcnVudGltZTYiLCJpbXBvcnRfcmVhY3QxNyIsImNvbmZpZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2l0aW9uIiwid2FybmVkIiwid2Fybk9uY2UiLCJjb25kaXRpb24iLCJtZXNzYWdlIiwiY3JlYXRlRE9NTW90aW9uQ29tcG9uZW50UHJveHkiLCJjb21wb25lbnRGYWN0b3J5IiwiUHJveHkiLCJjb21wb25lbnRDYWNoZSIsImRlcHJlY2F0ZWRGYWN0b3J5RnVuY3Rpb24iLCJhcmdzIiwiX3RhcmdldCIsImltcG9ydF9yZWFjdDE4IiwiaXNWYXJpYW50TGFiZWwiLCJ2IiwiQXJyYXkiLCJpc0FycmF5IiwiaXNBbmltYXRpb25Db250cm9scyIsInN0YXJ0IiwidmFyaWFudFByaW9yaXR5T3JkZXIiLCJ2YXJpYW50UHJvcHMiLCJpc0NvbnRyb2xsaW5nVmFyaWFudHMiLCJpc1ZhcmlhbnROb2RlIiwiQm9vbGVhbiIsInZhcmlhbnRzIiwiZ2V0Q3VycmVudFRyZWVWYXJpYW50cyIsImFuaW1hdGUyIiwiaW1wb3J0X3JlYWN0MTkiLCJ1c2VDcmVhdGVNb3Rpb25Db250ZXh0IiwidmFyaWFudExhYmVsc0FzRGVwZW5kZW5jeSIsIm1vdGlvbkNvbXBvbmVudFN5bWJvbCIsIlN5bWJvbCIsImZvciIsImlzUmVmT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW1wb3J0X3JlYWN0MjAiLCJ1c2VNb3Rpb25SZWYiLCJ2aXN1YWxTdGF0ZSIsInZpc3VhbEVsZW1lbnQiLCJleHRlcm5hbFJlZiIsImluc3RhbmNlIiwib25Nb3VudCIsIm1vdW50IiwidW5tb3VudCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwib3B0aW1pemVkQXBwZWFyRGF0YUlkIiwibWljcm90YXNrIiwiY2FuY2VsTWljcm90YXNrIiwicXVldWVNaWNyb3Rhc2siLCJpbXBvcnRfcmVhY3QyMSIsImltcG9ydF9yZWFjdDIyIiwidXNlVmlzdWFsRWxlbWVudCIsIkNvbXBvbmVudDMiLCJjcmVhdGVWaXN1YWxFbGVtZW50IiwiUHJvamVjdGlvbk5vZGVDb25zdHJ1Y3RvciIsIl9iIiwicGFyZW50IiwibGF6eUNvbnRleHQiLCJwcmVzZW5jZUNvbnRleHQiLCJyZWR1Y2VkTW90aW9uQ29uZmlnIiwidmlzdWFsRWxlbWVudFJlZiIsImJsb2NrSW5pdGlhbEFuaW1hdGlvbiIsImluaXRpYWxMYXlvdXRHcm91cENvbmZpZyIsInByb2plY3Rpb24iLCJ0eXBlIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUiLCJvcHRpbWlzZWRBcHBlYXJJZCIsIndhbnRzSGFuZG9mZiIsIk1vdGlvbkhhbmRvZmZJc0NvbXBsZXRlIiwiTW90aW9uSGFzT3B0aW1pc2VkQW5pbWF0aW9uIiwiTW90aW9uSXNNb3VudGVkIiwidXBkYXRlRmVhdHVyZXMiLCJhbmltYXRpb25TdGF0ZSIsImFuaW1hdGVDaGFuZ2VzIiwiX2EyIiwiTW90aW9uSGFuZG9mZk1hcmtBc0NvbXBsZXRlIiwiaW5pdGlhbFByb21vdGlvbkNvbmZpZyIsImxheW91dElkIiwibGF5b3V0MiIsImRyYWcyIiwiZHJhZ0NvbnN0cmFpbnRzIiwibGF5b3V0U2Nyb2xsIiwibGF5b3V0Um9vdCIsImxhdGVzdFZhbHVlcyIsImdldENsb3Nlc3RQcm9qZWN0aW5nTm9kZSIsInNldE9wdGlvbnMiLCJhbHdheXNNZWFzdXJlTGF5b3V0IiwiYW5pbWF0aW9uVHlwZSIsIm9wdGlvbnMiLCJhbGxvd1Byb2plY3Rpb24iLCJpbXBvcnRfanN4X3J1bnRpbWU3IiwiaW1wb3J0X21vdGlvbl91dGlsczIiLCJpbXBvcnRfcmVhY3QyMyIsInByZWxvYWRlZEZlYXR1cmVzIiwidXNlUmVuZGVyIiwidXNlVmlzdWFsU3RhdGUiLCJ1c2VWaXN1YWxTdGF0ZTIiLCJNb3Rpb25Db21wb25lbnQiLCJNZWFzdXJlTGF5b3V0MiIsImNvbmZpZ0FuZFByb3BzIiwidXNlTGF5b3V0SWQiLCJ1c2VTdHJpY3RNb2RlIiwibGF5b3V0UHJvamVjdGlvbiIsImdldFByb2plY3Rpb25GdW5jdGlvbmFsaXR5IiwiTWVhc3VyZUxheW91dCIsIlByb2plY3Rpb25Ob2RlIiwianN4cyIsImRpc3BsYXlOYW1lIiwiRm9yd2FyZFJlZk1vdGlvbkNvbXBvbmVudCIsImZvcndhcmRSZWYiLCJsYXlvdXRHcm91cElkIiwiaXNTdHJpY3QiLCJzdHJpY3RNZXNzYWdlIiwiaWdub3JlU3RyaWN0Iiwid2FybmluZyIsImNvbWJpbmVkIiwibG93ZXJjYXNlU1ZHRWxlbWVudHMiLCJpc1NWR0NvbXBvbmVudCIsImluZGV4T2YiLCJnZXRWYWx1ZVN0YXRlIiwiZ2V0VmVsb2NpdHkiLCJyZXNvbHZlVmFyaWFudEZyb21Qcm9wcyIsImRlZmluaXRpb24iLCJ2ZWxvY2l0eSIsImlzS2V5ZnJhbWVzVGFyZ2V0IiwiaXNDdXN0b21WYWx1ZSIsInRvVmFsdWUiLCJyZXNvbHZlRmluYWxWYWx1ZUluS2V5ZnJhbWVzIiwidW53cmFwcGVkVmFsdWUiLCJpbXBvcnRfcmVhY3QyNCIsIm1ha2VTdGF0ZSIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wcyIsInNjcmFwZU1vdGlvblZhbHVlc0Zyb21Qcm9wczMiLCJjcmVhdGVSZW5kZXJTdGF0ZSIsIm9uVXBkYXRlIiwibWFrZUxhdGVzdFZhbHVlcyIsInJlbmRlclN0YXRlIiwibWFrZSIsInNjcmFwZU1vdGlvblZhbHVlcyIsIm1vdGlvblZhbHVlcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyQxIiwiaXNWYXJpYW50Tm9kZSQxIiwiaXNJbml0aWFsQW5pbWF0aW9uQmxvY2tlZCIsInZhcmlhbnRUb1NldCIsImxpc3QiLCJyZXNvbHZlZCIsInRyYW5zaXRpb25FbmQiLCJ0YXJnZXQiLCJ2YWx1ZVRhcmdldCIsImluZGV4IiwidHJhbnNmb3JtUHJvcE9yZGVyIiwidHJhbnNmb3JtUHJvcHMiLCJjaGVja1N0cmluZ1N0YXJ0c1dpdGgiLCJ0b2tlbiIsImlzQ1NTVmFyaWFibGVOYW1lIiwic3RhcnRzQXNWYXJpYWJsZVRva2VuIiwiaXNDU1NWYXJpYWJsZVRva2VuIiwic3RhcnRzV2l0aFRva2VuIiwic2luZ2xlQ3NzVmFyaWFibGVSZWdleCIsInNwbGl0IiwidHJpbSIsImdldFZhbHVlQXNUeXBlIiwibnVtYmVyIiwicGFyc2UiLCJwYXJzZUZsb2F0IiwiYWxwaGEiLCJzY2FsZSIsImNyZWF0ZVVuaXRUeXBlIiwidW5pdCIsImVuZHNXaXRoIiwiZGVncmVlcyIsInBlcmNlbnQiLCJ2aCIsInZ3IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwiYnJvd3Nlck51bWJlclZhbHVlVHlwZXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicmFkaXVzIiwiYm9yZGVyVG9wTGVmdFJhZGl1cyIsImJvcmRlclRvcFJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZFBvc2l0aW9uWCIsImJhY2tncm91bmRQb3NpdGlvblkiLCJ0cmFuc2Zvcm1WYWx1ZVR5cGVzIiwicm90YXRlIiwicm90YXRlWCIsInJvdGF0ZVkiLCJyb3RhdGVaIiwic2NhbGVYIiwic2NhbGVZIiwic2NhbGVaIiwic2tldyIsInNrZXdYIiwic2tld1kiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInRyYW5zbGF0ZVoiLCJ4IiwieSIsInoiLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVBlcnNwZWN0aXZlIiwib3BhY2l0eSIsIm9yaWdpblgiLCJvcmlnaW5ZIiwib3JpZ2luWiIsImludCIsInJvdW5kIiwibnVtYmVyVmFsdWVUeXBlcyIsInpJbmRleCIsImZpbGxPcGFjaXR5Iiwic3Ryb2tlT3BhY2l0eSIsIm51bU9jdGF2ZXMiLCJ0cmFuc2xhdGVBbGlhcyIsIm51bVRyYW5zZm9ybXMiLCJ0cmFuc2Zvcm0yIiwidHJhbnNmb3JtVGVtcGxhdGUiLCJ0cmFuc2Zvcm1TdHJpbmciLCJ0cmFuc2Zvcm1Jc0RlZmF1bHQiLCJ2YWx1ZUlzRGVmYXVsdCIsInZhbHVlQXNUeXBlIiwidHJhbnNmb3JtTmFtZSIsImJ1aWxkSFRNTFN0eWxlcyIsInZhcnMiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJoYXNUcmFuc2Zvcm0yIiwiaGFzVHJhbnNmb3JtT3JpZ2luIiwiZGFzaEtleXMiLCJvZmZzZXQiLCJhcnJheSIsImNhbWVsS2V5cyIsImJ1aWxkU1ZHUGF0aCIsImF0dHJzIiwic3BhY2luZyIsInVzZURhc2hDYXNlIiwicGF0aExlbmd0aCIsImtleXMyIiwicGF0aFNwYWNpbmciLCJjYWxjT3JpZ2luIiwib3JpZ2luIiwiY2FsY1NWR1RyYW5zZm9ybU9yaWdpbiIsImRpbWVuc2lvbnMiLCJweE9yaWdpblgiLCJweE9yaWdpblkiLCJidWlsZFNWR0F0dHJzIiwiYXR0clgiLCJhdHRyWSIsImF0dHJTY2FsZSIsInBhdGhPZmZzZXQiLCJsYXRlc3QiLCJpc1NWR1RhZzIiLCJ2aWV3Qm94IiwiY3JlYXRlSHRtbFJlbmRlclN0YXRlIiwiY3JlYXRlU3ZnUmVuZGVyU3RhdGUiLCJpc1NWR1RhZyIsInRhZyIsInJlbmRlckhUTUwiLCJzdHlsZVByb3AiLCJhc3NpZ24iLCJnZXRQcm9qZWN0aW9uU3R5bGVzIiwic2V0UHJvcGVydHkiLCJjYW1lbENhc2VBdHRyaWJ1dGVzIiwicmVuZGVyU1ZHIiwiX3N0eWxlUHJvcCIsInNldEF0dHJpYnV0ZSIsInNjYWxlQ29ycmVjdG9ycyIsImNvcnJlY3RvcnMiLCJpc0ZvcmNlZE1vdGlvblZhbHVlIiwibmV3VmFsdWVzIiwiZ2V0VmFsdWUiLCJsaXZlU3R5bGUiLCJzY3JhcGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMyIiwidGFyZ2V0S2V5IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJ1cGRhdGVTVkdEaW1lbnNpb25zIiwiZ2V0QkJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxheW91dFByb3BzIiwic3ZnTW90aW9uQ29uZmlnIiwibmVlZHNNZWFzdXJlIiwidGFnTmFtZSIsImh0bWxNb3Rpb25Db25maWciLCJpbXBvcnRfcmVhY3QyNSIsImNvcHlSYXdWYWx1ZXNPbmx5Iiwic291cmNlIiwidXNlSW5pdGlhbE1vdGlvblZhbHVlcyIsInVzZVN0eWxlIiwidXNlSFRNTFByb3BzIiwiaHRtbFByb3BzIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ2dhYmxlIiwidXNlclNlbGVjdCIsIldlYmtpdFVzZXJTZWxlY3QiLCJXZWJraXRUb3VjaENhbGxvdXQiLCJ0b3VjaEFjdGlvbiIsInRhYkluZGV4Iiwib25UYXAiLCJvblRhcFN0YXJ0Iiwid2hpbGVUYXAiLCJpbXBvcnRfcmVhY3QyNiIsInVzZVNWR1Byb3BzIiwiX2lzU3RhdGljIiwidmlzdWFsUHJvcHMiLCJyYXdTdHlsZXMiLCJpbXBvcnRfcmVhY3QyNyIsImNyZWF0ZVVzZVJlbmRlciIsInVzZVZpc3VhbFByb3BzIiwiZWxlbWVudFByb3BzIiwiY3JlYXRlTW90aW9uQ29tcG9uZW50RmFjdG9yeSIsImNyZWF0ZU1vdGlvbkNvbXBvbmVudDIiLCJiYXNlQ29uZmlnIiwiY3JlYXRlTWluaW1hbE1vdGlvbkNvbXBvbmVudCIsInNoYWxsb3dDb21wYXJlIiwibmV4dCIsInByZXYiLCJwcmV2TGVuZ3RoIiwicmVzb2x2ZVZhcmlhbnQiLCJnZXRQcm9wcyIsInBvc2l0aW9uYWxLZXlzIiwiY2xlYXJUaW1lIiwibmV3VGltZSIsImFkZFVuaXF1ZUl0ZW0iLCJhcnIiLCJpdGVtIiwicmVtb3ZlSXRlbSIsIm1vdmVJdGVtIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlN1YnNjcmlwdGlvbk1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsImhhbmRsZXIiLCJhIiwiYiIsImMiLCJudW1TdWJzY3JpcHRpb25zIiwiZ2V0U2l6ZSIsInZlbG9jaXR5UGVyU2Vjb25kIiwiZnJhbWVEdXJhdGlvbiIsIk1BWF9WRUxPQ0lUWV9ERUxUQSIsImlzRmxvYXQiLCJpc05hTiIsImNvbGxlY3RNb3Rpb25WYWx1ZXMiLCJ2ZXJzaW9uIiwiY2FuVHJhY2tWZWxvY2l0eSIsImV2ZW50cyIsInVwZGF0ZUFuZE5vdGlmeSIsImN1cnJlbnRUaW1lIiwidXBkYXRlZEF0Iiwic2V0UHJldkZyYW1lVmFsdWUiLCJzZXRDdXJyZW50IiwiY2hhbmdlIiwicmVuZGVyUmVxdWVzdCIsImhhc0FuaW1hdGVkIiwib3duZXIiLCJwcmV2RnJhbWVWYWx1ZSIsInByZXZVcGRhdGVkQXQiLCJvbkNoYW5nZSIsInN1YnNjcmlwdGlvbiIsIm9uIiwiZXZlbnROYW1lIiwic3RvcCIsImNsZWFyTGlzdGVuZXJzIiwiZXZlbnRNYW5hZ2VycyIsImF0dGFjaCIsInBhc3NpdmVFZmZlY3QiLCJzdG9wUGFzc2l2ZUVmZmVjdCIsInNldFdpdGhWZWxvY2l0eSIsImp1bXAiLCJlbmRBbmltYXRpb24iLCJnZXRQcmV2aW91cyIsInN0YXJ0QW5pbWF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25TdGFydCIsImFuaW1hdGlvbkNvbXBsZXRlIiwiY2xlYXJBbmltYXRpb24iLCJhbmltYXRpb25DYW5jZWwiLCJpc0FuaW1hdGluZyIsImRlc3Ryb3kiLCJzZXRNb3Rpb25WYWx1ZSIsImhhc1ZhbHVlIiwiYWRkVmFsdWUiLCJzZXRUYXJnZXQiLCJpc1dpbGxDaGFuZ2VNb3Rpb25WYWx1ZSIsImFkZFZhbHVlVG9XaWxsQ2hhbmdlIiwid2lsbENoYW5nZSIsImdldE9wdGltaXNlZEFwcGVhcklkIiwiaW5zdGFudEFuaW1hdGlvblN0YXRlIiwiaW1wb3J0X21vdGlvbl91dGlsczMiLCJjYWxjQmV6aWVyIiwidCIsImExIiwiYTIiLCJzdWJkaXZpc2lvblByZWNpc2lvbiIsInN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyIsImJpbmFyeVN1YmRpdmlkZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsImFicyIsIm1ZMSIsIm1ZMiIsImdldFRGb3JYIiwiYVgiLCJlYXNpbmciLCJwb3ciLCJzaW4iLCJhY29zIiwiaXNaZXJvVmFsdWVTdHJpbmciLCJpc05vbmUiLCJzYW5pdGl6ZSIsImZsb2F0UmVnZXgiLCJpc051bGxpc2giLCJzaW5nbGVDb2xvclJlZ2V4IiwiaXNDb2xvclN0cmluZyIsInRlc3RQcm9wIiwic3BsaXRDb2xvciIsImFOYW1lIiwiYk5hbWUiLCJjTmFtZSIsImFscGhhMiIsIm1hdGNoIiwiY2xhbXBSZ2JVbml0IiwicmdiVW5pdCIsInJnYmEiLCJyZWQiLCJncmVlbiIsImJsdWUiLCJhbHBoYSQxIiwicGFyc2VIZXgiLCJyIiwiZyIsInBhcnNlSW50IiwiaGV4IiwiaHNsYSIsImh1ZSIsInNhdHVyYXRpb24iLCJsaWdodG5lc3MiLCJjb2xvclJlZ2V4IiwiTlVNQkVSX1RPS0VOIiwiQ09MT1JfVE9LRU4iLCJWQVJfVE9LRU4iLCJWQVJfRlVOQ1RJT05fVE9LRU4iLCJTUExJVF9UT0tFTiIsImNvbXBsZXhSZWdleCIsImFuYWx5c2VDb21wbGV4VmFsdWUiLCJvcmlnaW5hbFZhbHVlIiwidG9TdHJpbmciLCJpbmRleGVzIiwidmFyIiwidHlwZXMiLCJ0b2tlbmlzZWQiLCJwYXJzZWRWYWx1ZSIsInBhcnNlQ29tcGxleFZhbHVlIiwiY3JlYXRlVHJhbnNmb3JtZXIiLCJudW1TZWN0aW9ucyIsIm91dHB1dCIsImNvbnZlcnROdW1iZXJzVG9aZXJvIiwiZ2V0QW5pbWF0YWJsZU5vbmUiLCJwYXJzZWQiLCJ0cmFuc2Zvcm1lciIsIm1heERlZmF1bHRzIiwiYXBwbHlEZWZhdWx0RmlsdGVyIiwic2xpY2UiLCJudW1iZXIyIiwiZGVmYXVsdFZhbHVlIiwiZnVuY3Rpb25SZWdleCIsImZpbHRlciIsImZ1bmN0aW9ucyIsImRlZmF1bHRWYWx1ZVR5cGVzIiwiYmFja2dyb3VuZENvbG9yIiwib3V0bGluZUNvbG9yIiwiZmlsbCIsInN0cm9rZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wQ29sb3IiLCJib3JkZXJSaWdodENvbG9yIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJib3JkZXJMZWZ0Q29sb3IiLCJXZWJraXRGaWx0ZXIiLCJnZXREZWZhdWx0VmFsdWVUeXBlIiwiZ2V0QW5pbWF0YWJsZU5vbmUyIiwiZGVmYXVsdFZhbHVlVHlwZSIsImludmFsaWRUZW1wbGF0ZXMiLCJtYWtlTm9uZUtleWZyYW1lc0FuaW1hdGFibGUiLCJ1bnJlc29sdmVkS2V5ZnJhbWVzIiwibm9uZUtleWZyYW1lSW5kZXhlcyIsImFuaW1hdGFibGVUZW1wbGF0ZSIsImtleWZyYW1lIiwibm9uZUluZGV4IiwiaXNOdW1PclB4VHlwZSIsImdldFBvc0Zyb21NYXRyaXgiLCJtYXRyaXgiLCJwb3MiLCJnZXRUcmFuc2xhdGVGcm9tTWF0cml4IiwicG9zMiIsInBvczMiLCJfYmJveCIsIm1hdHJpeDNkIiwidHJhbnNmb3JtS2V5cyIsIm5vblRyYW5zbGF0aW9uYWxUcmFuc2Zvcm1LZXlzIiwicmVtb3ZlTm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybSIsInJlbW92ZWRUcmFuc2Zvcm1zIiwicG9zaXRpb25hbFZhbHVlcyIsInRvUmVzb2x2ZSIsImlzU2NoZWR1bGVkIiwiYW55TmVlZHNNZWFzdXJlbWVudCIsIm1lYXN1cmVBbGxLZXlmcmFtZXMiLCJyZXNvbHZlcnNUb01lYXN1cmUiLCJmcm9tIiwicmVzb2x2ZXIiLCJuZWVkc01lYXN1cmVtZW50IiwiZWxlbWVudHNUb01lYXN1cmUiLCJ0cmFuc2Zvcm1zVG9SZXN0b3JlIiwibWVhc3VyZUluaXRpYWxTdGF0ZSIsInJlc3RvcmUiLCJtZWFzdXJlRW5kU3RhdGUiLCJzdXNwZW5kZWRTY3JvbGxZIiwic2Nyb2xsVG8iLCJjb21wbGV0ZSIsInJlYWRBbGxLZXlmcmFtZXMiLCJyZWFkS2V5ZnJhbWVzIiwiZmx1c2hLZXlmcmFtZVJlc29sdmVycyIsIktleWZyYW1lUmVzb2x2ZXIiLCJvbkNvbXBsZXRlIiwibW90aW9uVmFsdWUyIiwiaXNBc3luYyIsInNjaGVkdWxlUmVzb2x2ZSIsImN1cnJlbnRWYWx1ZSIsImZpbmFsS2V5ZnJhbWUiLCJ2YWx1ZUFzUmVhZCIsInJlYWRWYWx1ZSIsInNldEZpbmFsS2V5ZnJhbWUiLCJyZW5kZXJFbmRTdHlsZXMiLCJyZXN1bWUiLCJpc051bWVyaWNhbFN0cmluZyIsImltcG9ydF9tb3Rpb25fdXRpbHM0Iiwic3BsaXRDU1NWYXJpYWJsZVJlZ2V4IiwicGFyc2VDU1NWYXJpYWJsZSIsImV4ZWMiLCJ0b2tlbjEiLCJ0b2tlbjIiLCJmYWxsYmFjayIsIm1heERlcHRoIiwiZ2V0VmFyaWFibGVWYWx1ZSIsImRlcHRoIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltbWVkIiwidGVzdFZhbHVlVHlwZSIsImF1dG8iLCJkaW1lbnNpb25WYWx1ZVR5cGVzIiwiZmluZERpbWVuc2lvblZhbHVlVHlwZSIsImZpbmQiLCJET01LZXlmcmFtZXNSZXNvbHZlciIsInJlc29sdmVOb25lS2V5ZnJhbWVzIiwib3JpZ2luVHlwZSIsInRhcmdldFR5cGUiLCJwYWdlWU9mZnNldCIsIm1lYXN1cmVkT3JpZ2luIiwibWVhc3VyZVZpZXdwb3J0Qm94IiwibWVhc3VyZUtleWZyYW1lIiwiZmluYWxLZXlmcmFtZUluZGV4IiwidW5zZXRUcmFuc2Zvcm1OYW1lIiwidW5zZXRUcmFuc2Zvcm1WYWx1ZSIsImlzQW5pbWF0YWJsZSIsImltcG9ydF9tb3Rpb25fZG9tIiwiaW1wb3J0X21vdGlvbl91dGlsczUiLCJoYXNLZXlmcmFtZXNDaGFuZ2VkIiwia2V5ZnJhbWVzMiIsImNhbkFuaW1hdGUiLCJvcmlnaW5LZXlmcmFtZSIsInRhcmdldEtleWZyYW1lIiwiaXNPcmlnaW5BbmltYXRhYmxlIiwiaXNUYXJnZXRBbmltYXRhYmxlIiwiaXNHZW5lcmF0b3IiLCJpc05vdE51bGwiLCJnZXRGaW5hbEtleWZyYW1lIiwicmVwZWF0IiwicmVwZWF0VHlwZSIsInJlc29sdmVkS2V5ZnJhbWVzIiwiTUFYX1JFU09MVkVfREVMQVkiLCJCYXNlQW5pbWF0aW9uIiwiYXV0b3BsYXkiLCJkZWxheTIiLCJyZXBlYXREZWxheSIsImlzU3RvcHBlZCIsImhhc0F0dGVtcHRlZFJlc29sdmUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVGaW5pc2hlZFByb21pc2UiLCJjYWxjU3RhcnRUaW1lIiwicmVzb2x2ZWRBdCIsIl9yZXNvbHZlZCIsIm9uS2V5ZnJhbWVzUmVzb2x2ZWQiLCJpc0dlbmVyYXRvcjYiLCJyZXNvbHZlRmluaXNoZWRQcm9taXNlIiwiZHVyYXRpb24iLCJyZXNvbHZlZEFuaW1hdGlvbiIsImluaXRQbGF5YmFjayIsIm9uUG9zdFJlc29sdmVkIiwicmVqZWN0IiwiY3VycmVudEZpbmlzaGVkUHJvbWlzZSIsImZsYXR0ZW4iLCJlYXNlIiwibWl4TnVtYmVyIiwidG8iLCJwcm9ncmVzczgiLCJodWVUb1JnYiIsInEiLCJoc2xhVG9SZ2JhIiwibWl4SW1tZWRpYXRlIiwiaW1wb3J0X21vdGlvbl91dGlsczYiLCJtaXhMaW5lYXJDb2xvciIsImZyb21FeHBvIiwiZXhwbyIsInNxcnQiLCJjb2xvclR5cGVzIiwiZ2V0Q29sb3JUeXBlIiwiYXNSR0JBIiwiY29sb3IyIiwibW9kZWwiLCJtaXhDb2xvciIsImZyb21SR0JBIiwidG9SR0JBIiwiYmxlbmRlZCIsImNvbWJpbmVGdW5jdGlvbnMiLCJ0cmFuc2Zvcm1lcnMiLCJpbnZpc2libGVWYWx1ZXMiLCJtaXhWaXNpYmlsaXR5IiwiaW1wb3J0X21vdGlvbl91dGlsczciLCJtaXhOdW1iZXIyIiwiZ2V0TWl4ZXIiLCJtaXhDb21wbGV4IiwibWl4QXJyYXkiLCJtaXhPYmplY3QiLCJudW1WYWx1ZXMiLCJibGVuZFZhbHVlIiwibWF0Y2hPcmRlciIsIm9yZGVyZWRPcmlnaW4iLCJwb2ludGVycyIsIm9yaWdpbkluZGV4Iiwib3JpZ2luVmFsdWUiLCJ0ZW1wbGF0ZSIsIm9yaWdpblN0YXRzIiwidGFyZ2V0U3RhdHMiLCJjYW5JbnRlcnBvbGF0ZSIsIm1peGVyIiwidmVsb2NpdHlTYW1wbGVEdXJhdGlvbiIsImNhbGNHZW5lcmF0b3JWZWxvY2l0eSIsInJlc29sdmVWYWx1ZSIsInByZXZUIiwic3ByaW5nRGVmYXVsdHMiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwibWFzcyIsImJvdW5jZSIsInZpc3VhbER1cmF0aW9uIiwicmVzdFNwZWVkIiwiZ3JhbnVsYXIiLCJyZXN0RGVsdGEiLCJtaW5EdXJhdGlvbiIsIm1heER1cmF0aW9uIiwibWluRGFtcGluZyIsIm1heERhbXBpbmciLCJpbXBvcnRfbW90aW9uX3V0aWxzOCIsInNhZmVNaW4iLCJlbnZlbG9wZSIsImRlcml2YXRpdmUiLCJzZWNvbmRzVG9NaWxsaXNlY29uZHMiLCJkYW1waW5nUmF0aW8iLCJtaWxsaXNlY29uZHNUb1NlY29uZHMiLCJ1bmRhbXBlZEZyZXEyIiwiZXhwb25lbnRpYWxEZWNheSIsImNhbGNBbmd1bGFyRnJlcSIsImV4cCIsImQiLCJmIiwiZmFjdG9yIiwiaW5pdGlhbEd1ZXNzIiwidW5kYW1wZWRGcmVxIiwiYXBwcm94aW1hdGVSb290Iiwicm9vdEl0ZXJhdGlvbnMiLCJyZXN1bHQiLCJpbXBvcnRfbW90aW9uX2RvbTIiLCJpbXBvcnRfbW90aW9uX3V0aWxzOSIsImR1cmF0aW9uS2V5cyIsInBoeXNpY3NLZXlzIiwiaXNTcHJpbmdUeXBlIiwiZ2V0U3ByaW5nT3B0aW9ucyIsInNwcmluZ09wdGlvbnMiLCJpc1Jlc29sdmVkRnJvbUR1cmF0aW9uIiwicm9vdCIsIlBJIiwiZGVyaXZlZCIsIm9wdGlvbnNPclZpc3VhbER1cmF0aW9uIiwiZG9uZSIsImluaXRpYWxWZWxvY2l0eSIsImluaXRpYWxEZWx0YSIsInVuZGFtcGVkQW5ndWxhckZyZXEiLCJpc0dyYW51bGFyU2NhbGUiLCJyZXNvbHZlU3ByaW5nIiwiYW5ndWxhckZyZXEiLCJjb3MiLCJkYW1wZWRBbmd1bGFyRnJlcSIsImZyZXFGb3JUIiwic2luaCIsImNvc2giLCJnZW5lcmF0b3IiLCJjYWxjdWxhdGVkRHVyYXRpb24iLCJjdXJyZW50VmVsb2NpdHkiLCJpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQiLCJpc0JlbG93RGlzcGxhY2VtZW50VGhyZXNob2xkIiwiY2FsY0dlbmVyYXRvckR1cmF0aW9uIiwibWF4R2VuZXJhdG9yRHVyYXRpb24iLCJnZW5lcmF0ZUxpbmVhckVhc2luZyIsInBvd2VyIiwidGltZUNvbnN0YW50IiwiYm91bmNlRGFtcGluZyIsImJvdW5jZVN0aWZmbmVzcyIsIm1vZGlmeVRhcmdldCIsImlzT3V0T2ZCb3VuZHMiLCJuZWFyZXN0Qm91bmRhcnkiLCJhbXBsaXR1ZGUiLCJpZGVhbCIsImNhbGNEZWx0YSIsImNhbGNMYXRlc3QiLCJhcHBseUZyaWN0aW9uIiwidGltZVJlYWNoZWRCb3VuZGFyeSIsInNwcmluZyQxIiwiY2hlY2tDYXRjaEJvdW5kYXJ5IiwiaGFzVXBkYXRlZEZyYW1lIiwiaXNFYXNpbmdBcnJheSIsImVhc2UyIiwiaW1wb3J0X21vdGlvbl9kb20zIiwiaW1wb3J0X21vdGlvbl91dGlsczEwIiwiZWFzaW5nTG9va3VwIiwibGluZWFyIiwiZWFzaW5nRGVmaW5pdGlvblRvRnVuY3Rpb24iLCJpc0JlemllckRlZmluaXRpb24iLCJ4MSIsInkxIiwieDIiLCJ5MiIsImltcG9ydF9tb3Rpb25fdXRpbHMxMSIsImNyZWF0ZU1peGVycyIsImN1c3RvbU1peGVyIiwibWl4ZXJzIiwibWl4ZXJGYWN0b3J5IiwibnVtTWl4ZXJzIiwiZWFzaW5nRnVuY3Rpb24iLCJpbnB1dCIsImlzQ2xhbXAiLCJpbnB1dExlbmd0aCIsImlzWmVyb0RlbHRhUmFuZ2UiLCJyZXZlcnNlIiwiaW50ZXJwb2xhdG9yIiwicHJvZ3Jlc3NJblJhbmdlIiwiaW1wb3J0X21vdGlvbl91dGlsczEyIiwiZmlsbE9mZnNldCIsInJlbWFpbmluZyIsIm9mZnNldFByb2dyZXNzIiwiZGVmYXVsdE9mZnNldCIsImNvbnZlcnRPZmZzZXRUb1RpbWVzIiwibyIsImRlZmF1bHRFYXNpbmciLCJrZXlmcmFtZVZhbHVlcyIsInRpbWVzIiwiZWFzaW5nRnVuY3Rpb25zIiwiYWJzb2x1dGVUaW1lcyIsIm1hcFRpbWVUb0tleWZyYW1lIiwiZnJhbWVsb29wRHJpdmVyIiwicGFzc1RpbWVzdGFtcCIsImltcG9ydF9tb3Rpb25fZG9tNCIsImltcG9ydF9tb3Rpb25fdXRpbHMxMyIsImdlbmVyYXRvcnMiLCJkZWNheSIsInR3ZWVuIiwicGVyY2VudFRvUHJvZ3Jlc3MiLCJwZXJjZW50MiIsIk1haW5UaHJlYWRBbmltYXRpb24iLCJob2xkVGltZSIsImNhbmNlbFRpbWUiLCJwbGF5YmFja1NwZWVkIiwicGVuZGluZ1BsYXlTdGF0ZSIsInN0YXJ0VGltZSIsInRlYXJkb3duIiwib25TdG9wIiwiS2V5ZnJhbWVSZXNvbHZlciQxIiwib25SZXNvbHZlZCIsImtleWZyYW1lcyQxIiwiZ2VuZXJhdG9yRmFjdG9yeSIsIm1hcFBlcmNlbnRUb0tleWZyYW1lcyIsIm1pcnJvcmVkR2VuZXJhdG9yIiwicmVzb2x2ZWREdXJhdGlvbiIsInRvdGFsRHVyYXRpb24iLCJwbGF5IiwicGF1c2UiLCJ0aWNrIiwic2FtcGxlIiwia2V5ZnJhbWVzMyIsInNwZWVkIiwidGltZVdpdGhvdXREZWxheSIsImlzSW5EZWxheVBoYXNlIiwiZWxhcHNlZCIsImZyYW1lR2VuZXJhdG9yIiwiY3VycmVudEl0ZXJhdGlvbiIsImZsb29yIiwiaXRlcmF0aW9uUHJvZ3Jlc3MiLCJpc09kZEl0ZXJhdGlvbiIsImlzQW5pbWF0aW9uRmluaXNoZWQiLCJmaW5pc2giLCJkcml2ZXIiLCJuZXdTcGVlZCIsImhhc0NoYW5nZWQiLCJvblBsYXkiLCJub3cyIiwic3RvcERyaXZlciIsInRpbWUyIiwiYWNjZWxlcmF0ZWRWYWx1ZXMiLCJpbXBvcnRfbW90aW9uX2RvbTUiLCJzdGFydFdhYXBpQW5pbWF0aW9uIiwidmFsdWVOYW1lIiwia2V5ZnJhbWVPcHRpb25zIiwibWFwRWFzaW5nVG9OYXRpdmVFYXNpbmciLCJpdGVyYXRpb25zIiwiZGlyZWN0aW9uIiwiaW1wb3J0X21vdGlvbl91dGlsczE0Iiwic3VwcG9ydHNXYWFwaSIsIm1lbW8iLCJFbGVtZW50IiwiaW1wb3J0X21vdGlvbl9kb202IiwiaW1wb3J0X21vdGlvbl91dGlsczE1Iiwic2FtcGxlRGVsdGEiLCJyZXF1aXJlc1ByZWdlbmVyYXRlZEtleWZyYW1lcyIsImlzV2FhcGlTdXBwb3J0ZWRFYXNpbmciLCJwcmVnZW5lcmF0ZUtleWZyYW1lcyIsInNhbXBsZUFuaW1hdGlvbiIsInByZWdlbmVyYXRlZEtleWZyYW1lcyIsInVuc3VwcG9ydGVkRWFzaW5nRnVuY3Rpb25zIiwiaXNVbnN1cHBvcnRlZEVhc2UiLCJzdXBwb3J0c0xpbmVhckVhc2luZyIsIm1vdGlvblZhbHVlMyIsInByZWdlbmVyYXRlZEFuaW1hdGlvbiIsInBlbmRpbmdUaW1lbGluZSIsImF0dGFjaFRpbWVsaW5lIiwib25maW5pc2giLCJwbGF5YmFja1JhdGUiLCJwbGF5U3RhdGUiLCJ0aW1lbGluZSIsInNhbXBsZVRpbWUiLCJzdXBwb3J0cyIsIkhUTUxFbGVtZW50IiwidW5kZXJEYW1wZWRTcHJpbmciLCJjcml0aWNhbGx5RGFtcGVkU3ByaW5nIiwia2V5ZnJhbWVzVHJhbnNpdGlvbiIsImdldERlZmF1bHRUcmFuc2l0aW9uIiwidmFsdWVLZXkiLCJpc1RyYW5zaXRpb25EZWZpbmVkIiwid2hlbiIsIl9kZWxheSIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwia2V5cyIsImltcG9ydF9tb3Rpb25fZG9tNyIsImltcG9ydF9tb3Rpb25fdXRpbHMxNiIsImFuaW1hdGVNb3Rpb25WYWx1ZSIsImlzSGFuZG9mZiIsInZhbHVlVHJhbnNpdGlvbiIsImdldFZhbHVlVHJhbnNpdGlvbiIsInNob3VsZFNraXAiLCJHcm91cFBsYXliYWNrQ29udHJvbHMiLCJpbXBvcnRfbW90aW9uX2RvbTgiLCJzaG91bGRCbG9ja0FuaW1hdGlvbiIsInByb3RlY3RlZEtleXMiLCJuZWVkc0FuaW1hdGluZyIsInNob3VsZEJsb2NrIiwiYW5pbWF0ZVRhcmdldCIsInRhcmdldEFuZFRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uT3ZlcnJpZGUiLCJhbmltYXRpb25zMiIsImFuaW1hdGlvblR5cGVTdGF0ZSIsImdldFN0YXRlIiwiTW90aW9uSGFuZG9mZkFuaW1hdGlvbiIsImFwcGVhcklkIiwic2hvdWxkUmVkdWNlTW90aW9uIiwiYWxsIiwiYW5pbWF0ZVZhcmlhbnQiLCJ2YXJpYW50IiwiZ2V0QW5pbWF0aW9uIiwiZ2V0Q2hpbGRBbmltYXRpb25zIiwidmFyaWFudENoaWxkcmVuIiwiZm9yd2FyZERlbGF5IiwiYW5pbWF0ZUNoaWxkcmVuIiwiZmlyc3QiLCJsYXN0IiwibWF4U3RhZ2dlckR1cmF0aW9uIiwiZ2VuZXJhdGVTdGFnZ2VyRHVyYXRpb24iLCJzb3J0Iiwic29ydEJ5VHJlZU9yZGVyIiwic29ydE5vZGVQb3NpdGlvbiIsInJlc29sdmVkRGVmaW5pdGlvbiIsIm51bVZhcmlhbnRQcm9wcyIsImdldFZhcmlhbnRDb250ZXh0IiwiY29udGV4dDIiLCJyZXZlcnNlUHJpb3JpdHlPcmRlciIsIm51bUFuaW1hdGlvblR5cGVzIiwiYW5pbWF0ZUxpc3QiLCJjcmVhdGVBbmltYXRpb25TdGF0ZSIsImNyZWF0ZVN0YXRlIiwiYnVpbGRSZXNvbHZlZFR5cGVWYWx1ZXMiLCJzZXRBbmltYXRlRnVuY3Rpb24iLCJtYWtlQW5pbWF0b3IiLCJjaGFuZ2VkQWN0aXZlVHlwZSIsInJlbW92ZWRLZXlzIiwiZW5jb3VudGVyZWRLZXlzIiwicmVtb3ZlZFZhcmlhbnRJbmRleCIsIkluZmluaXR5IiwidHlwZVN0YXRlIiwicHJvcElzVmFyaWFudCIsImFjdGl2ZURlbHRhIiwiaXNBY3RpdmUiLCJpc0luaGVyaXRlZCIsIm1hbnVhbGx5QW5pbWF0ZU9uTW91bnQiLCJwcmV2UHJvcCIsInZhcmlhbnREaWRDaGFuZ2UiLCJjaGVja1ZhcmlhbnRzRGlkQ2hhbmdlIiwic2hvdWxkQW5pbWF0ZVR5cGUiLCJoYW5kbGVkUmVtb3ZlZFZhbHVlcyIsImRlZmluaXRpb25MaXN0IiwicmVzb2x2ZWRWYWx1ZXMiLCJwcmV2UmVzb2x2ZWRWYWx1ZXMiLCJhbGxLZXlzIiwibWFya1RvQW5pbWF0ZSIsInZhbHVlSGFzQ2hhbmdlZCIsIndpbGxBbmltYXRlVmlhUGFyZW50IiwiZmFsbGJhY2tBbmltYXRpb24iLCJmYWxsYmFja1RhcmdldCIsImdldEJhc2VUYXJnZXQiLCJzaG91bGRBbmltYXRlIiwic2V0QWN0aXZlIiwicmVzZXQiLCJjcmVhdGVUeXBlU3RhdGUiLCJ3aGlsZUluVmlldyIsIndoaWxlSG92ZXIiLCJ3aGlsZURyYWciLCJ3aGlsZUZvY3VzIiwiRmVhdHVyZSIsIkFuaW1hdGlvbkZlYXR1cmUiLCJ1cGRhdGVBbmltYXRpb25Db250cm9sc1N1YnNjcmlwdGlvbiIsInVubW91bnRDb250cm9scyIsInByZXZBbmltYXRlIiwiRXhpdEFuaW1hdGlvbkZlYXR1cmUiLCJhcmd1bWVudHMiLCJwcmV2SXNQcmVzZW50IiwicHJldlByZXNlbmNlQ29udGV4dCIsImV4aXRBbmltYXRpb24iLCJhZGREb21FdmVudCIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1wb3J0X21vdGlvbl9kb205IiwiZXh0cmFjdEV2ZW50SW5mbyIsImV2ZW50IiwicG9pbnQiLCJwYWdlWCIsInBhZ2VZIiwiaXNQcmltYXJ5UG9pbnRlciIsInhEZWx0YSIsInlEZWx0YSIsImltcG9ydF9tb3Rpb25fZG9tMTAiLCJpbXBvcnRfbW90aW9uX3V0aWxzMTciLCJQYW5TZXNzaW9uIiwiaGFuZGxlcnMiLCJjb250ZXh0V2luZG93IiwiZHJhZ1NuYXBUb09yaWdpbiIsInN0YXJ0RXZlbnQiLCJsYXN0TW92ZUV2ZW50IiwibGFzdE1vdmVFdmVudEluZm8iLCJ1cGRhdGVQb2ludCIsImluZm8yIiwiZ2V0UGFuSW5mbyIsImhpc3RvcnkiLCJpc1BhblN0YXJ0ZWQiLCJpc0Rpc3RhbmNlUGFzdFRocmVzaG9sZCIsInBvaW50MyIsInRpbWVzdGFtcDIiLCJvblN0YXJ0Iiwib25Nb3ZlIiwiaGFuZGxlUG9pbnRlck1vdmUiLCJldmVudDIiLCJ0cmFuc2Zvcm1Qb2ludCIsImhhbmRsZVBvaW50ZXJVcCIsImVuZCIsIm9uRW5kIiwib25TZXNzaW9uRW5kIiwicmVzdW1lQW5pbWF0aW9uIiwicGFuSW5mbyIsImluZm8iLCJpbml0aWFsSW5mbyIsInBvaW50MiIsIm9uU2Vzc2lvblN0YXJ0IiwicmVtb3ZlTGlzdGVuZXJzIiwidXBkYXRlSGFuZGxlcnMiLCJzdWJ0cmFjdFBvaW50IiwibGFzdERldmljZVBvaW50Iiwic3RhcnREZXZpY2VQb2ludCIsInRpbWVEZWx0YSIsInRpbWVzdGFtcGVkUG9pbnQiLCJsYXN0UG9pbnQiLCJTQ0FMRV9QUkVDSVNJT04iLCJTQ0FMRV9NSU4iLCJTQ0FMRV9NQVgiLCJUUkFOU0xBVEVfUFJFQ0lTSU9OIiwiVFJBTlNMQVRFX01JTiIsIlRSQU5TTEFURV9NQVgiLCJheGlzIiwiaXNOZWFyIiwibWF4RGlzdGFuY2UiLCJjYWxjQXhpc0RlbHRhIiwib3JpZ2luUG9pbnQiLCJ0cmFuc2xhdGUiLCJjYWxjQm94RGVsdGEiLCJjYWxjUmVsYXRpdmVBeGlzIiwicmVsYXRpdmUiLCJjYWxjUmVsYXRpdmVCb3giLCJjYWxjUmVsYXRpdmVBeGlzUG9zaXRpb24iLCJjYWxjUmVsYXRpdmVQb3NpdGlvbiIsImltcG9ydF9tb3Rpb25fdXRpbHMxOCIsImFwcGx5Q29uc3RyYWludHMiLCJlbGFzdGljIiwiY2FsY1JlbGF0aXZlQXhpc0NvbnN0cmFpbnRzIiwiY2FsY1JlbGF0aXZlQ29uc3RyYWludHMiLCJsYXlvdXRCb3giLCJjYWxjVmlld3BvcnRBeGlzQ29uc3RyYWludHMiLCJsYXlvdXRBeGlzIiwiY29uc3RyYWludHNBeGlzIiwiY2FsY1ZpZXdwb3J0Q29uc3RyYWludHMiLCJjb25zdHJhaW50c0JveCIsImNhbGNPcmlnaW4yIiwic291cmNlTGVuZ3RoIiwidGFyZ2V0TGVuZ3RoIiwicmViYXNlQXhpc0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHMiLCJyZWxhdGl2ZUNvbnN0cmFpbnRzIiwiZGVmYXVsdEVsYXN0aWMiLCJyZXNvbHZlRHJhZ0VsYXN0aWMiLCJkcmFnRWxhc3RpYyIsInJlc29sdmVBeGlzRWxhc3RpYyIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJyZXNvbHZlUG9pbnRFbGFzdGljIiwibGFiZWwiLCJjcmVhdGVBeGlzRGVsdGEiLCJjcmVhdGVEZWx0YSIsImNyZWF0ZUF4aXMiLCJlYWNoQXhpcyIsImNvbnZlcnRCb3VuZGluZ0JveFRvQm94IiwiY29udmVydEJveFRvQm91bmRpbmdCb3giLCJ0cmFuc2Zvcm1Cb3hQb2ludHMiLCJ0cmFuc2Zvcm1Qb2ludDIiLCJ0b3BMZWZ0IiwiYm90dG9tUmlnaHQiLCJpc0lkZW50aXR5U2NhbGUiLCJzY2FsZTIiLCJoYXNTY2FsZSIsImhhc1RyYW5zZm9ybSIsImhhczJEVHJhbnNsYXRlIiwiaXMyRFRyYW5zbGF0ZSIsInNjYWxlUG9pbnQiLCJkaXN0YW5jZUZyb21PcmlnaW4iLCJzY2FsZWQiLCJhcHBseVBvaW50RGVsdGEiLCJib3hTY2FsZSIsImFwcGx5QXhpc0RlbHRhIiwiYXBwbHlCb3hEZWx0YSIsImJveCIsIlRSRUVfU0NBTEVfU05BUF9NSU4iLCJUUkVFX1NDQUxFX1NOQVBfTUFYIiwiYXBwbHlUcmVlRGVsdGFzIiwidHJlZVNjYWxlIiwidHJlZVBhdGgiLCJpc1NoYXJlZFRyYW5zaXRpb24iLCJ0cmVlTGVuZ3RoIiwicHJvamVjdGlvbkRlbHRhIiwiZGlzcGxheSIsInRyYW5zZm9ybUJveCIsInRyYW5zbGF0ZUF4aXMiLCJkaXN0YW5jZTIiLCJ0cmFuc2Zvcm1BeGlzIiwiYXhpc1RyYW5zbGF0ZSIsImF4aXNTY2FsZSIsImF4aXNPcmlnaW4iLCJtZWFzdXJlUGFnZUJveCIsInJvb3RQcm9qZWN0aW9uTm9kZTIiLCJ2aWV3cG9ydEJveCIsInNjcm9sbDIiLCJnZXRDb250ZXh0V2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiaW1wb3J0X21vdGlvbl91dGlsczE5IiwiaW1wb3J0X21vdGlvbl9kb20xMSIsImVsZW1lbnREcmFnQ29udHJvbHMiLCJWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzIiwib3BlbkRyYWdMb2NrIiwiaXNEcmFnZ2luZyIsImN1cnJlbnREaXJlY3Rpb24iLCJoYXNNdXRhdGVkQ29uc3RyYWludHMiLCJvcmlnaW5FdmVudCIsInNuYXBUb0N1cnNvciIsImRyYWdTbmFwVG9PcmlnaW4yIiwicGF1c2VBbmltYXRpb24iLCJzdG9wQW5pbWF0aW9uIiwiZHJhZ1Byb3BhZ2F0aW9uIiwib25EcmFnU3RhcnQiLCJzZXREcmFnTG9jayIsInJlc29sdmVDb25zdHJhaW50cyIsImlzQW5pbWF0aW9uQmxvY2tlZCIsImdldEF4aXNNb3Rpb25WYWx1ZSIsIm1lYXN1cmVkQXhpcyIsImRyYWdEaXJlY3Rpb25Mb2NrIiwib25EaXJlY3Rpb25Mb2NrIiwib25EcmFnIiwiZ2V0Q3VycmVudERpcmVjdGlvbiIsInVwZGF0ZUF4aXMiLCJnZXRBbmltYXRpb25TdGF0ZSIsInBhblNlc3Npb24iLCJnZXRUcmFuc2Zvcm1QYWdlUG9pbnQiLCJvbkRyYWdFbmQiLCJfcG9pbnQiLCJzaG91bGREcmFnIiwiYXhpc1ZhbHVlIiwibWVhc3VyZSIsInByZXZDb25zdHJhaW50cyIsInJlc29sdmVSZWZDb25zdHJhaW50cyIsIm9uTWVhc3VyZURyYWdDb25zdHJhaW50cyIsImNvbnN0cmFpbnRzRWxlbWVudCIsIm1lYXN1cmVkQ29uc3RyYWludHMiLCJ1c2VyQ29uc3RyYWludHMiLCJkcmFnTW9tZW50dW0iLCJkcmFnVHJhbnNpdGlvbiIsIm9uRHJhZ1RyYW5zaXRpb25FbmQiLCJtb21lbnR1bUFuaW1hdGlvbnMiLCJpbmVydGlhMiIsInN0YXJ0QXhpc1ZhbHVlQW5pbWF0aW9uIiwiZHJhZ0tleSIsImV4dGVybmFsTW90aW9uVmFsdWUiLCJzY2FsZVBvc2l0aW9uV2l0aGluQ29uc3RyYWludHMiLCJib3hQcm9ncmVzcyIsInVwZGF0ZVNjcm9sbCIsInVwZGF0ZUxheW91dCIsImFkZExpc3RlbmVycyIsInN0b3BQb2ludGVyTGlzdGVuZXIiLCJtZWFzdXJlRHJhZ0NvbnN0cmFpbnRzIiwic3RvcE1lYXN1cmVMYXlvdXRMaXN0ZW5lciIsInN0b3BSZXNpemVMaXN0ZW5lciIsInN0b3BMYXlvdXRVcGRhdGVMaXN0ZW5lciIsImhhc0xheW91dENoYW5nZWQiLCJsb2NrVGhyZXNob2xkIiwiaW1wb3J0X21vdGlvbl91dGlsczIwIiwiRHJhZ0dlc3R1cmUiLCJyZW1vdmVHcm91cENvbnRyb2xzIiwiY29udHJvbHMiLCJkcmFnQ29udHJvbHMiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjEiLCJhc3luY0hhbmRsZXIiLCJQYW5HZXN0dXJlIiwicmVtb3ZlUG9pbnRlckRvd25MaXN0ZW5lciIsIm9uUG9pbnRlckRvd24iLCJwb2ludGVyRG93bkV2ZW50Iiwic2Vzc2lvbiIsImNyZWF0ZVBhbkhhbmRsZXJzIiwib25QYW5TZXNzaW9uU3RhcnQiLCJvblBhblN0YXJ0Iiwib25QYW4iLCJvblBhbkVuZCIsImdsb2JhbFByb2plY3Rpb25TdGF0ZSIsImhhc0FuaW1hdGVkU2luY2VSZXNpemUiLCJoYXNFdmVyVXBkYXRlZCIsInBpeGVsc1RvUGVyY2VudCIsInBpeGVscyIsImNvcnJlY3RCb3JkZXJSYWRpdXMiLCJjb3JyZWN0IiwiY29ycmVjdEJveFNoYWRvdyIsIm9yaWdpbmFsIiwic2hhZG93IiwieFNjYWxlIiwieVNjYWxlIiwiYXZlcmFnZVNjYWxlIiwiaW1wb3J0X2pzeF9ydW50aW1lOCIsImltcG9ydF9yZWFjdDI4IiwiTWVhc3VyZUxheW91dFdpdGhDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJsYXlvdXRHcm91cCIsInN3aXRjaExheW91dEdyb3VwIiwiZGVmYXVsdFNjYWxlQ29ycmVjdG9ycyIsImRpZFVwZGF0ZSIsImxheW91dERlcGVuZGVuY3kiLCJwcm9tb3RlIiwicmVsZWdhdGUiLCJzdGFjayIsImdldFN0YWNrIiwibWVtYmVycyIsImN1cnJlbnRBbmltYXRpb24iLCJpc0xlYWQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInByb21vdGVDb250ZXh0Iiwic2NoZWR1bGVDaGVja0FmdGVyVW5tb3VudCIsImRlcmVnaXN0ZXIiLCJhcHBseVRvIiwiYm94U2hhZG93IiwiYW5pbWF0ZVNpbmdsZVZhbHVlIiwibW90aW9uVmFsdWUkMSIsImlzU1ZHRWxlbWVudCIsIlNWR0VsZW1lbnQiLCJjb21wYXJlQnlEZXB0aCIsImlzRGlydHkiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjIiLCJ0aW1lb3V0IiwiY2hlY2tFbGFwc2VkIiwiZGVsYXlJblNlY29uZHMiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjMiLCJib3JkZXJzIiwibnVtQm9yZGVycyIsImFzTnVtYmVyIiwiaXNQeCIsIm1peFZhbHVlcyIsImZvbGxvdyIsImxlYWQiLCJzaG91bGRDcm9zc2ZhZGVPcGFjaXR5IiwiaXNPbmx5TWVtYmVyIiwiZWFzZUNyb3NzZmFkZUluIiwib3BhY2l0eUV4aXQiLCJlYXNlQ3Jvc3NmYWRlT3V0IiwiYm9yZGVyTGFiZWwiLCJmb2xsb3dSYWRpdXMiLCJnZXRSYWRpdXMiLCJsZWFkUmFkaXVzIiwiY2FuTWl4IiwicmFkaXVzTmFtZSIsImNvbXByZXNzIiwiY29weUF4aXNJbnRvIiwib3JpZ2luQXhpcyIsImNvcHlCb3hJbnRvIiwib3JpZ2luQm94IiwiY29weUF4aXNEZWx0YUludG8iLCJvcmlnaW5EZWx0YSIsInJlbW92ZVBvaW50RGVsdGEiLCJyZW1vdmVBeGlzRGVsdGEiLCJzb3VyY2VBeGlzIiwicmVsYXRpdmVQcm9ncmVzcyIsInJlbW92ZUF4aXNUcmFuc2Zvcm1zIiwidHJhbnNmb3JtcyIsInNjYWxlS2V5Iiwib3JpZ2luS2V5IiwieEtleXMiLCJ5S2V5cyIsInJlbW92ZUJveFRyYW5zZm9ybXMiLCJzb3VyY2VCb3giLCJpc0F4aXNEZWx0YVplcm8iLCJpc0RlbHRhWmVybyIsImF4aXNFcXVhbHMiLCJib3hFcXVhbHMiLCJheGlzRXF1YWxzUm91bmRlZCIsImJveEVxdWFsc1JvdW5kZWQiLCJhc3BlY3RSYXRpbyIsImF4aXNEZWx0YUVxdWFscyIsIk5vZGVTdGFjayIsInNjaGVkdWxlUmVuZGVyIiwicHJldkxlYWQiLCJpbmRleE9mTm9kZSIsImZpbmRJbmRleCIsIm1lbWJlciIsInByZXNlcnZlRm9sbG93T3BhY2l0eSIsInNob3ciLCJyZXN1bWVGcm9tIiwicHJlc2VydmVPcGFjaXR5Iiwic25hcHNob3QiLCJhbmltYXRpb25WYWx1ZXMiLCJpc1VwZGF0aW5nIiwiY3Jvc3NmYWRlIiwiaGlkZSIsImV4aXRBbmltYXRpb25Db21wbGV0ZSIsInJlc3VtaW5nRnJvbSIsInJlbW92ZUxlYWRTbmFwc2hvdCIsImJ1aWxkUHJvamVjdGlvblRyYW5zZm9ybSIsImxhdGVzdFRyYW5zZm9ybSIsInhUcmFuc2xhdGUiLCJ5VHJhbnNsYXRlIiwielRyYW5zbGF0ZSIsImVsZW1lbnRTY2FsZVgiLCJlbGVtZW50U2NhbGVZIiwiaW1wb3J0X21vdGlvbl9kb20xMiIsImltcG9ydF9tb3Rpb25fdXRpbHMyNCIsIm1ldHJpY3MiLCJ0b3RhbE5vZGVzIiwicmVzb2x2ZWRUYXJnZXREZWx0YXMiLCJyZWNhbGN1bGF0ZWRQcm9qZWN0aW9uIiwiaXNEZWJ1ZyIsIk1vdGlvbkRlYnVnIiwidHJhbnNmb3JtQXhlcyIsImhpZGRlblZpc2liaWxpdHkiLCJ2aXNpYmlsaXR5IiwiYW5pbWF0aW9uVGFyZ2V0IiwiaWQyIiwicmVzZXREaXN0b3J0aW5nVHJhbnNmb3JtIiwic2hhcmVkQW5pbWF0aW9uVmFsdWVzIiwic2V0U3RhdGljVmFsdWUiLCJjYW5jZWxUcmVlT3B0aW1pc2VkVHJhbnNmb3JtQW5pbWF0aW9ucyIsInByb2plY3Rpb25Ob2RlIiwiaGFzQ2hlY2tlZE9wdGltaXNlZEFwcGVhciIsIk1vdGlvbkNhbmNlbE9wdGltaXNlZEFuaW1hdGlvbiIsImNyZWF0ZVByb2plY3Rpb25Ob2RlMiIsImF0dGFjaFJlc2l6ZUxpc3RlbmVyIiwiZGVmYXVsdFBhcmVudCIsIm1lYXN1cmVTY3JvbGwiLCJjaGVja0lzU2Nyb2xsUm9vdCIsInJlc2V0VHJhbnNmb3JtIiwiYW5pbWF0aW9uSWQiLCJpc1RyZWVBbmltYXRpbmciLCJpc1Byb2plY3Rpb25EaXJ0eSIsImlzU2hhcmVkUHJvamVjdGlvbkRpcnR5IiwiaXNUcmFuc2Zvcm1EaXJ0eSIsInVwZGF0ZU1hbnVhbGx5QmxvY2tlZCIsInVwZGF0ZUJsb2NrZWRCeVJlc2l6ZSIsImlzU1ZHIiwibmVlZHNSZXNldCIsInNob3VsZFJlc2V0VHJhbnNmb3JtIiwiZXZlbnRIYW5kbGVycyIsImhhc1RyZWVBbmltYXRlZCIsInVwZGF0ZVNjaGVkdWxlZCIsInNjaGVkdWxlVXBkYXRlIiwicHJvamVjdGlvblVwZGF0ZVNjaGVkdWxlZCIsImNoZWNrVXBkYXRlRmFpbGVkIiwiY2xlYXJBbGxTbmFwc2hvdHMiLCJ1cGRhdGVQcm9qZWN0aW9uIiwicHJvcGFnYXRlRGlydHlOb2RlcyIsInJlc29sdmVUYXJnZXREZWx0YSIsImNhbGNQcm9qZWN0aW9uIiwiY2xlYW5EaXJ0eU5vZGVzIiwicmVjb3JkIiwicmVzb2x2ZWRSZWxhdGl2ZVRhcmdldEF0IiwiaGFzUHJvamVjdGVkIiwiaXNWaXNpYmxlIiwiYW5pbWF0aW9uUHJvZ3Jlc3MiLCJzaGFyZWROb2RlcyIsInBhdGgiLCJub3RpZnlMaXN0ZW5lcnMiLCJzdWJzY3JpcHRpb25NYW5hZ2VyIiwiaGFzTGlzdGVuZXJzIiwiY2FuY2VsRGVsYXkiLCJyZXNpemVVbmJsb2NrVXBkYXRlIiwiZmluaXNoQW5pbWF0aW9uIiwicmVnaXN0ZXJTaGFyZWROb2RlIiwiaGFzUmVsYXRpdmVUYXJnZXRDaGFuZ2VkIiwibmV3TGF5b3V0IiwiaXNUcmVlQW5pbWF0aW9uQmxvY2tlZCIsInJlbGF0aXZlVGFyZ2V0IiwibGF5b3V0VHJhbnNpdGlvbiIsImRlZmF1bHRMYXlvdXRUcmFuc2l0aW9uIiwib25MYXlvdXRBbmltYXRpb25TdGFydCIsIm9uTGF5b3V0QW5pbWF0aW9uQ29tcGxldGUiLCJ0YXJnZXRDaGFuZ2VkIiwidGFyZ2V0TGF5b3V0IiwiaGFzT25seVJlbGF0aXZlVGFyZ2V0Q2hhbmdlZCIsInNldEFuaW1hdGlvbk9yaWdpbiIsImFuaW1hdGlvbk9wdGlvbnMiLCJibG9ja1VwZGF0ZSIsInVuYmxvY2tVcGRhdGUiLCJpc1VwZGF0ZUJsb2NrZWQiLCJzdGFydFVwZGF0ZSIsInJlc2V0U2tld0FuZFJvdGF0aW9uIiwiZ2V0VHJhbnNmb3JtVGVtcGxhdGUiLCJzaG91bGROb3RpZnlMaXN0ZW5lcnMiLCJwcmV2VHJhbnNmb3JtVGVtcGxhdGVWYWx1ZSIsInVwZGF0ZVNuYXBzaG90IiwidXBkYXRlV2FzQmxvY2tlZCIsImNsZWFyTWVhc3VyZW1lbnRzIiwiY2xlYXJJc0xheW91dERpcnR5IiwicmVzZXRUcmFuc2Zvcm1TdHlsZSIsIm5vdGlmeUxheW91dFVwZGF0ZSIsImNsZWFyU25hcHNob3QiLCJyZW1vdmVMZWFkU25hcHNob3RzIiwic2NoZWR1bGVVcGRhdGVQcm9qZWN0aW9uIiwicHJldkxheW91dCIsImxheW91dENvcnJlY3RlZCIsInBoYXNlIiwiaXNSb290Iiwid2FzUm9vdCIsImlzUmVzZXRSZXF1ZXN0ZWQiLCJoYXNQcm9qZWN0aW9uIiwidHJhbnNmb3JtVGVtcGxhdGVWYWx1ZSIsInRyYW5zZm9ybVRlbXBsYXRlSGFzQ2hhbmdlZCIsInJlbW92ZVRyYW5zZm9ybSIsInBhZ2VCb3giLCJyZW1vdmVFbGVtZW50U2Nyb2xsIiwicm91bmRCb3giLCJtZWFzdXJlZEJveCIsIndhc0luU2Nyb2xsUm9vdCIsImNoZWNrTm9kZVdhc1Njcm9sbFJvb3QiLCJib3hXaXRob3V0U2Nyb2xsIiwiYXBwbHlUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm1Pbmx5Iiwid2l0aFRyYW5zZm9ybXMiLCJib3hXaXRob3V0VHJhbnNmb3JtIiwibm9kZUJveCIsInNldFRhcmdldERlbHRhIiwidGFyZ2V0RGVsdGEiLCJmb3JjZVJlbGF0aXZlUGFyZW50VG9SZXNvbHZlVGFyZ2V0IiwicmVsYXRpdmVQYXJlbnQiLCJmb3JjZVJlY2FsY3VsYXRpb24iLCJnZXRMZWFkIiwiaXNTaGFyZWQiLCJjYW5Ta2lwIiwiYXR0ZW1wdFRvUmVzb2x2ZVJlbGF0aXZlVGFyZ2V0IiwiZ2V0Q2xvc2VzdFByb2plY3RpbmdQYXJlbnQiLCJyZWxhdGl2ZVRhcmdldE9yaWdpbiIsInRhcmdldFdpdGhUcmFuc2Zvcm1zIiwiaXNQcm9qZWN0aW5nIiwicGVuZGluZ0FuaW1hdGlvbiIsInByZXZUcmVlU2NhbGVYIiwicHJldlRyZWVTY2FsZVkiLCJwcmV2UHJvamVjdGlvbkRlbHRhIiwiY3JlYXRlUHJvamVjdGlvbkRlbHRhcyIsIm5vdGlmeUFsbDIiLCJwcm9qZWN0aW9uRGVsdGFXaXRoVHJhbnNmb3JtIiwic25hcHNob3RMYXRlc3RWYWx1ZXMiLCJtaXhlZFZhbHVlcyIsInJlbGF0aXZlTGF5b3V0Iiwic25hcHNob3RTb3VyY2UiLCJsYXlvdXRTb3VyY2UiLCJpc1NoYXJlZExheW91dEFuaW1hdGlvbiIsImhhc09wYWNpdHlDcm9zc2ZhZGUiLCJwcmV2UmVsYXRpdmVUYXJnZXQiLCJtaXhUYXJnZXREZWx0YSIsIm1peEF4aXNEZWx0YSIsIm1peEJveCIsImNvbXBsZXRlQW5pbWF0aW9uIiwiYXBwbHlUcmFuc2Zvcm1zVG9UYXJnZXQiLCJzaG91bGRBbmltYXRlUG9zaXRpb25Pbmx5IiwieExlbmd0aCIsInlMZW5ndGgiLCJzaG91bGRQcmVzZXJ2ZUZvbGxvd09wYWNpdHkiLCJnZXRQcmV2TGVhZCIsImhhc0Rpc3RvcnRpbmdUcmFuc2Zvcm0iLCJyZXNldFZhbHVlcyIsInN0eWxlcyIsInBvaW50ZXJFdmVudHMiLCJlbXB0eVN0eWxlcyIsInZhbHVlc1RvUmVuZGVyIiwiY29ycmVjdGVkIiwibnVtIiwicmVzZXRUcmVlIiwibWVhc3VyZWRMYXlvdXQiLCJheGlzU25hcHNob3QiLCJsYXlvdXREZWx0YSIsInZpc3VhbERlbHRhIiwicGFyZW50U25hcHNob3QiLCJwYXJlbnRMYXlvdXQiLCJyZWxhdGl2ZVNuYXBzaG90Iiwib25CZWZvcmVMYXlvdXRNZWFzdXJlIiwibWl4QXhpcyIsInVzZXJBZ2VudENvbnRhaW5zIiwic3RyaW5nIiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwicm91bmRQb2ludCIsInJvdW5kQXhpcyIsIkRvY3VtZW50UHJvamVjdGlvbk5vZGUiLCJub3RpZnkyIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsTGVmdCIsImJvZHkiLCJzY3JvbGxUb3AiLCJyb290UHJvamVjdGlvbk5vZGUiLCJIVE1MUHJvamVjdGlvbk5vZGUiLCJkb2N1bWVudE5vZGUiLCJwb3NpdGlvbiIsImltcG9ydF9tb3Rpb25fZG9tMTMiLCJoYW5kbGVIb3ZlckV2ZW50IiwibGlmZWN5Y2xlIiwiSG92ZXJHZXN0dXJlIiwiZW5kRXZlbnQiLCJGb2N1c0dlc3R1cmUiLCJvbkZvY3VzIiwiaXNGb2N1c1Zpc2libGUiLCJtYXRjaGVzIiwib25CbHVyIiwiaW1wb3J0X21vdGlvbl9kb20xNCIsImhhbmRsZVByZXNzRXZlbnQiLCJQcmVzc0dlc3R1cmUiLCJwcmVzcyIsInN1Y2Nlc3MiLCJ1c2VHbG9iYWxUYXJnZXQiLCJnbG9iYWxUYXBUYXJnZXQiLCJvYnNlcnZlckNhbGxiYWNrcyIsIm9ic2VydmVycyIsImZpcmVPYnNlcnZlckNhbGxiYWNrIiwiZW50cnkiLCJmaXJlQWxsT2JzZXJ2ZXJDYWxsYmFja3MiLCJlbnRyaWVzIiwiaW5pdEludGVyc2VjdGlvbk9ic2VydmVyIiwibG9va3VwUm9vdCIsInJvb3RPYnNlcnZlcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmVJbnRlcnNlY3Rpb24iLCJyb290SW50ZXJlc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsInRocmVzaG9sZE5hbWVzIiwiSW5WaWV3RmVhdHVyZSIsImhhc0VudGVyZWRWaWV3IiwiaXNJblZpZXciLCJzdGFydE9ic2VydmVyIiwidmlld3BvcnQiLCJyb290TWFyZ2luIiwiYW1vdW50Iiwib25jZSIsInRocmVzaG9sZCIsIm9uSW50ZXJzZWN0aW9uVXBkYXRlIiwiaXNJbnRlcnNlY3RpbmciLCJvblZpZXdwb3J0RW50ZXIiLCJvblZpZXdwb3J0TGVhdmUiLCJoYXNPcHRpb25zQ2hhbmdlZCIsImhhc1ZpZXdwb3J0T3B0aW9uQ2hhbmdlZCIsInByZXZWaWV3cG9ydCIsImdlc3R1cmVBbmltYXRpb25zIiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJoYXNSZWR1Y2VkTW90aW9uTGlzdGVuZXIiLCJpbml0UHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJtYXRjaE1lZGlhIiwibW90aW9uTWVkaWFRdWVyeSIsInNldFJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlcyIsImFkZExpc3RlbmVyIiwidmFsdWVUeXBlcyIsImZpbmRWYWx1ZVR5cGUiLCJ1cGRhdGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJuZXh0VmFsdWUiLCJwcmV2VmFsdWUiLCJleGlzdGluZ1ZhbHVlIiwibGF0ZXN0VmFsdWUiLCJnZXRTdGF0aWNWYWx1ZSIsInJlbW92ZVZhbHVlIiwicHJvcEV2ZW50SGFuZGxlcnMiLCJfcHJvcHMiLCJfcHJldlByb3BzIiwiX3Zpc3VhbEVsZW1lbnQiLCJ2YWx1ZVN1YnNjcmlwdGlvbnMiLCJwcmV2TW90aW9uVmFsdWVzIiwicHJvcEV2ZW50U3Vic2NyaXB0aW9ucyIsIm5vdGlmeVVwZGF0ZSIsInRyaWdnZXJCdWlsZCIsInJlbmRlckluc3RhbmNlIiwicmVuZGVyU2NoZWR1bGVkQXQiLCJiYXNlVGFyZ2V0IiwiaW5pdGlhbFZhbHVlcyIsImluaXRpYWxNb3Rpb25WYWx1ZXMiLCJyZW1vdmVGcm9tVmFyaWFudFRyZWUiLCJhZGRWYXJpYW50Q2hpbGQiLCJiaW5kVG9Nb3Rpb25WYWx1ZSIsImZlYXR1cmUiLCJ2YWx1ZUlzVHJhbnNmb3JtIiwicmVtb3ZlT25DaGFuZ2UiLCJyZW1vdmVPblJlbmRlclJlcXVlc3QiLCJyZW1vdmVTeW5jQ2hlY2siLCJNb3Rpb25DaGVja0FwcGVhclN5bmMiLCJvdGhlciIsInNvcnRJbnN0YW5jZU5vZGVQb3NpdGlvbiIsImZlYXR1cmVEZWZpbml0aW9uIiwiRmVhdHVyZUNvbnN0cnVjdG9yIiwiYnVpbGQiLCJtZWFzdXJlSW5zdGFuY2VWaWV3cG9ydEJveCIsImxpc3RlbmVyTmFtZSIsImxpc3RlbmVyIiwiaGFuZGxlQ2hpbGRNb3Rpb25WYWx1ZSIsImdldFZhcmlhbnQiLCJnZXRDbG9zZXN0VmFyaWFudE5vZGUiLCJjbG9zZXN0VmFyaWFudE5vZGUiLCJyZW1vdmVWYWx1ZUZyb21SZW5kZXJTdGF0ZSIsImdldEJhc2VUYXJnZXRGcm9tUHJvcHMiLCJyZWFkVmFsdWVGcm9tSW5zdGFuY2UiLCJzZXRCYXNlVGFyZ2V0IiwidmFsdWVGcm9tSW5pdGlhbCIsIkRPTVZpc3VhbEVsZW1lbnQiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNoaWxkU3Vic2NyaXB0aW9uIiwidGV4dENvbnRlbnQiLCJnZXRDb21wdXRlZFN0eWxlMiIsIkhUTUxWaXN1YWxFbGVtZW50IiwiZGVmYXVsdFR5cGUiLCJjb21wdXRlZFN0eWxlIiwiU1ZHVmlzdWFsRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImltcG9ydF9yZWFjdDI5IiwiY3JlYXRlRG9tVmlzdWFsRWxlbWVudCIsImNyZWF0ZU1vdGlvbkNvbXBvbmVudCIsImltcG9ydF9yZWFjdDMwIiwib2JzZXJ2ZVRpbWVsaW5lIiwicHJldlByb2dyZXNzIiwib25GcmFtZSIsInBlcmNlbnRhZ2UiLCJpbXBvcnRfbW90aW9uX2RvbTE1IiwicmVzaXplSGFuZGxlcnMiLCJvYnNlcnZlciIsImdldEVsZW1lbnRTaXplIiwiYm9yZGVyQm94U2l6ZSIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJub3RpZnlUYXJnZXQiLCJjb250ZW50UmVjdCIsImNvbnRlbnRTaXplIiwibm90aWZ5QWxsIiwiY3JlYXRlUmVzaXplT2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsInJlc2l6ZUVsZW1lbnQiLCJlbGVtZW50cyIsInJlc29sdmVFbGVtZW50cyIsImVsZW1lbnRIYW5kbGVycyIsIndpbmRvd0NhbGxiYWNrcyIsIndpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJjcmVhdGVXaW5kb3dSZXNpemVIYW5kbGVyIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVzaXplV2luZG93IiwicmVzaXplIiwiaW1wb3J0X21vdGlvbl91dGlsczI1IiwibWF4RWxhcHNlZDIiLCJjcmVhdGVBeGlzSW5mbyIsInNjcm9sbExlbmd0aCIsInRhcmdldE9mZnNldCIsImNvbnRhaW5lckxlbmd0aCIsImNyZWF0ZVNjcm9sbEluZm8iLCJ1cGRhdGVBeGlzSW5mbyIsImF4aXNOYW1lIiwicHJldlRpbWUiLCJ1cGRhdGVTY3JvbGxJbmZvIiwiY2FsY0luc2V0IiwiY29udGFpbmVyIiwiaW5zZXQiLCJvZmZzZXRQYXJlbnQiLCJzdmdCb3VuZGluZ0JveCIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnRCb3VuZGluZ0JveCIsIlNWR0dyYXBoaWNzRWxlbWVudCIsInN2ZyIsInBhcmVudE5vZGUiLCJuYW1lZEVkZ2VzIiwiY2VudGVyIiwicmVzb2x2ZUVkZ2UiLCJlZGdlIiwiYXNOdW1iZXIyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJkZWZhdWx0T2Zmc2V0MiIsInJlc29sdmVPZmZzZXQiLCJ0YXJnZXRJbnNldCIsIm9mZnNldERlZmluaXRpb24iLCJ0YXJnZXRQb2ludCIsImNvbnRhaW5lclBvaW50IiwiU2Nyb2xsT2Zmc2V0IiwiRW50ZXIiLCJFeGl0IiwiQW55IiwiQWxsIiwiZ2V0VGFyZ2V0U2l6ZSIsInJlc29sdmVPZmZzZXRzIiwibGVuZ3RoTGFiZWwiLCJ0YXJnZXRTaXplIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGxIZWlnaHQiLCJjb250YWluZXJTaXplIiwibnVtT2Zmc2V0cyIsImludGVycG9sYXRvck9mZnNldHMiLCJjcmVhdGVPblNjcm9sbEhhbmRsZXIiLCJvblNjcm9sbCIsInNjcm9sbExpc3RlbmVycyIsInJlc2l6ZUxpc3RlbmVycyIsIm9uU2Nyb2xsSGFuZGxlcnMiLCJnZXRFdmVudFRhcmdldCIsImNvbnRhaW5lckhhbmRsZXJzIiwiY29udGFpbmVySGFuZGxlciIsIm1lYXN1cmVBbGwiLCJ1cGRhdGVBbGwiLCJsaXN0ZW5lcjIiLCJjdXJyZW50SGFuZGxlcnMiLCJzY3JvbGxMaXN0ZW5lciIsImltcG9ydF9tb3Rpb25fZG9tMTYiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjYiLCJzY3JvbGxUaW1lbGluZUZhbGxiYWNrIiwidGltZWxpbmVDYWNoZSIsImdldFRpbWVsaW5lIiwiZWxlbWVudENhY2hlIiwic3VwcG9ydHNTY3JvbGxUaW1lbGluZSIsIlNjcm9sbFRpbWVsaW5lIiwiaXNPblNjcm9sbFdpdGhJbmZvIiwibmVlZHNFbGVtZW50VHJhY2tpbmciLCJzY3JvbGxGdW5jdGlvbiIsInNjcm9sbEFuaW1hdGlvbiIsInZhbHVlQW5pbWF0aW9uIiwib3B0aW9uc1dpdGhEZWZhdWx0cyIsImltcG9ydF9yZWFjdDMxIiwiaW1wb3J0X21vdGlvbl91dGlsczI3IiwicmVmV2FybmluZyIsImNyZWF0ZVNjcm9sbE1vdGlvblZhbHVlcyIsInNjcm9sbFgiLCJzY3JvbGxZIiwic2Nyb2xsWFByb2dyZXNzIiwic2Nyb2xsWVByb2dyZXNzIiwibGF5b3V0RWZmZWN0IiwidXNlTGlmZWN5Y2xlRWZmZWN0IiwiX3Byb2dyZXNzIiwiaW1wb3J0X3JlYWN0MzIiLCJzZXRMYXRlc3QiLCJ1c2VDb21iaW5lTW90aW9uVmFsdWVzIiwiY29tYmluZVZhbHVlcyIsInVwZGF0ZVZhbHVlIiwiZnJhZ21lbnRzIiwibnVtRnJhZ21lbnRzIiwiYnVpbGRWYWx1ZSIsImltcG9ydF9yZWFjdDMzIiwidG9OdW1iZXIiLCJhY3RpdmVTcHJpbmdBbmltYXRpb24iLCJsYXRlc3RTZXR0ZXIiLCJzdG9wQW5pbWF0aW9uMiIsImltcG9ydF9yZWFjdDM0IiwiaW5pdGlhbFRpbWVzdGFtcCIsInByb3ZpZGVUaW1lU2luY2VTdGFydCIsImlzQ3VzdG9tVmFsdWVUeXBlIiwiZ2V0TWl4ZXIyIiwidXNlSW1tZWRpYXRlIiwiYXJnT2Zmc2V0IiwiaW5wdXRWYWx1ZSIsImlucHV0UmFuZ2UiLCJvdXRwdXRSYW5nZSIsInVzZUNvbXB1dGVkIiwiY29tcHV0ZSIsImlucHV0UmFuZ2VPclRyYW5zZm9ybWVyIiwidXNlTGlzdFRyYW5zZm9ybSIsInVwZGF0ZVZlbG9jaXR5IiwiZ2V0V2lsbENoYW5nZU5hbWUiLCJXaWxsQ2hhbmdlTW90aW9uVmFsdWUiLCJzdHlsZU5hbWUiLCJpbXBvcnRfcmVhY3QzNSIsImltcG9ydF9yZWFjdDM2IiwicmVkdWNlZE1vdGlvblByZWZlcmVuY2UiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjgiLCJzZXRWYXJpYW50cyIsInZhcmlhbnRMYWJlbHMiLCJyZXZlcnNlZExhYmVscyIsInNldFZhbHVlcyIsImhhc01vdW50ZWQiLCJzdWJzY3JpYmVycyIsImltcG9ydF9yZWFjdDM3IiwicmFuZ2VTaXplIiwiZ2V0RWFzaW5nRm9yU2VnbWVudCIsImlzRE9NS2V5ZnJhbWVzIiwiaW1wb3J0X21vdGlvbl9kb20xNyIsInJlc29sdmVTdWJqZWN0cyIsInN1YmplY3QiLCJzY29wZSIsInNlbGVjdG9yQ2FjaGUiLCJOb2RlTGlzdCIsImNhbGN1bGF0ZVJlcGVhdER1cmF0aW9uIiwiX3JlcGVhdERlbGF5IiwiY2FsY05leHRUaW1lIiwibGFiZWxzIiwiZXJhc2VLZXlmcmFtZXMiLCJzZXF1ZW5jZSIsImVuZFRpbWUiLCJhdCIsImFkZEtleWZyYW1lcyIsIm5vcm1hbGl6ZVRpbWVzIiwiY29tcGFyZUJ5VGltZSIsImltcG9ydF9tb3Rpb25fZG9tMTgiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjkiLCJkZWZhdWx0U2VnbWVudEVhc2luZyIsIk1BWF9SRVBFQVQiLCJjcmVhdGVBbmltYXRpb25zRnJvbVNlcXVlbmNlIiwiZGVmYXVsdFRyYW5zaXRpb24iLCJzZXF1ZW5jZVRyYW5zaXRpb24iLCJnZW5lcmF0b3JzMiIsImRlZmF1bHREdXJhdGlvbiIsImFuaW1hdGlvbkRlZmluaXRpb25zIiwic2VxdWVuY2VzIiwidGltZUxhYmVscyIsInNlZ21lbnQiLCJtYXhEdXJhdGlvbjIiLCJyZXNvbHZlVmFsdWVTZXF1ZW5jZSIsInZhbHVlS2V5ZnJhbWVzIiwidmFsdWVTZXF1ZW5jZSIsImVsZW1lbnRJbmRleCIsIm51bVN1YmplY3RzIiwidmFsdWVLZXlmcmFtZXNBc0xpc3QiLCJrZXlmcmFtZXNBc0xpc3QiLCJyZW1haW5pbmdUcmFuc2l0aW9uIiwiY2FsY3VsYXRlZERlbGF5IiwibnVtS2V5ZnJhbWVzIiwiY3JlYXRlR2VuZXJhdG9yIiwiYWJzb2x1dGVEZWx0YSIsImlzTnVtYmVyS2V5ZnJhbWVzQXJyYXkiLCJzcHJpbmdUcmFuc2l0aW9uIiwic3ByaW5nRWFzaW5nIiwiY3JlYXRlR2VuZXJhdG9yRWFzaW5nIiwicmVtYWluZGVyIiwidW5zaGlmdCIsIm9yaWdpbmFsS2V5ZnJhbWVzIiwib3JpZ2luYWxUaW1lcyIsIm9yaWdpbmFsRWFzZSIsInJlcGVhdEluZGV4Iiwia2V5ZnJhbWVJbmRleCIsInRhcmdldFRpbWUiLCJzdWJqZWN0U2VxdWVuY2UiLCJnZXRTdWJqZWN0U2VxdWVuY2UiLCJnZXRWYWx1ZVNlcXVlbmNlIiwic3ViamVjdHMiLCJzdWJqZWN0SW5kZXgiLCJ0aGlzU3ViamVjdCIsImdldFZhbHVlVHJhbnNpdGlvbjQiLCJ2YWx1ZVNlcXVlbmNlcyIsInZhbHVlT2Zmc2V0IiwidmFsdWVFYXNpbmciLCJpc051bWJlciIsImV2ZXJ5IiwiaXNPYmplY3RLZXkiLCJvYmplY3QiLCJPYmplY3RWaXN1YWxFbGVtZW50IiwiY3JlYXRlRE9NVmlzdWFsRWxlbWVudCIsImNyZWF0ZU9iamVjdFZpc3VhbEVsZW1lbnQiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzAiLCJpc1NpbmdsZVZhbHVlIiwiYW5pbWF0ZVN1YmplY3QiLCJhbmltYXRlU2VxdWVuY2UiLCJpbXBvcnRfbW90aW9uX2RvbTE5IiwiaXNTZXF1ZW5jZSIsInNjb3BlZEFuaW1hdGUiLCJzdWJqZWN0T3JTZXF1ZW5jZSIsIm9wdGlvbnNPcktleWZyYW1lcyIsInNldENTU1ZhciIsInNldFN0eWxlIiwiaW1wb3J0X21vdGlvbl91dGlsczMxIiwic3VwcG9ydHNQYXJ0aWFsS2V5ZnJhbWVzIiwiaW1wb3J0X21vdGlvbl9kb20yMCIsImltcG9ydF9tb3Rpb25fdXRpbHMzMiIsImh5ZHJhdGVLZXlmcmFtZXMiLCJkZWZhdWx0RWFzaW5nMiIsImdldEVsZW1lbnRBbmltYXRpb25TdGF0ZSIsIk5hdGl2ZUFuaW1hdGlvbiIsIk5hdGl2ZUFuaW1hdGlvbkNvbnRyb2xzIiwiaXNDU1NWYXIiLCJleGlzdGluZ0FuaW1hdGlvbiIsInJlYWRJbml0aWFsS2V5ZnJhbWUiLCJnZW5lcmF0b3JPcHRpb25zIiwib25GaW5pc2giLCJzZXRWYWx1ZSIsInJlbW92ZUFuaW1hdGlvbiIsImVsZW1lbnRTdGF0ZSIsImltcG9ydF9tb3Rpb25fZG9tMjEiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzMiLCJhbmltYXRlRWxlbWVudHMiLCJlbGVtZW50T3JTZWxlY3RvciIsIm51bUVsZW1lbnRzIiwiZWxlbWVudFRyYW5zaXRpb24iLCJ2YWx1ZU9wdGlvbnMiLCJpbXBvcnRfbW90aW9uX2RvbTIyIiwiY3JlYXRlU2NvcGVkV2FhcGlBbmltYXRlIiwiaW1wb3J0X3JlYWN0MzgiLCJjb21wb25lbnRDb250cm9scyIsIm5hdGl2ZUV2ZW50IiwiY3JlYXRlRHJhZ0NvbnRyb2xzIiwiY29tcG9uZW50Iiwic3RhcnRUcmFuc2l0aW9uIiwiaW1wb3J0X3JlYWN0MzkiLCJpbXBvcnRfcmVhY3Q0MCIsIml0ZW1zIiwic2V0SXRlbSIsInJ1bkN5Y2xlIiwiaW1wb3J0X21vdGlvbl9kb20yMyIsInRocmVzaG9sZHMiLCJhY3RpdmVJbnRlcnNlY3Rpb25zIiwib25JbnRlcnNlY3Rpb25DaGFuZ2UiLCJuZXdPbkVuZCIsIm9ic2VydmVyMiIsImRpc2Nvbm5lY3QiLCJpbXBvcnRfcmVhY3Q0MSIsInNldEluVmlldyIsIm9uRW50ZXIiLCJpbXBvcnRfcmVhY3Q0MiIsImZvcmNlVXBkYXRlIiwic3RhcnRJbnN0YW50TGF5b3V0VHJhbnNpdGlvbiIsInVubG9ja09uRnJhbWVSZWYiLCJhcHBlYXJTdG9yZUlkIiwiZWxlbWVudElkIiwiYXBwZWFyQW5pbWF0aW9uU3RvcmUiLCJhcHBlYXJDb21wbGV0ZSIsImhhbmRvZmZPcHRpbWl6ZWRBcHBlYXJBbmltYXRpb24iLCJmcmFtZTIiLCJzdG9yZUlkIiwib3B0aW1pc2VkQW5pbWF0aW9uIiwiY2FuY2VsQW5pbWF0aW9uIiwiaW1wb3J0X21vdGlvbl91dGlsczM0Iiwic3RhcnRGcmFtZVRpbWUiLCJyZWFkeUFuaW1hdGlvbiIsInN1c3BlbmRlZEFuaW1hdGlvbnMiLCJyZXN1bWVTdXNwZW5kZWRBbmltYXRpb25zIiwiZGF0YSIsIm9uUmVhZHkiLCJjYW5SZXN1bWUiLCJ2YWx1ZUlzT3B0aW1pc2VkIiwiZXh0ZXJuYWxBbmltYXRpb25WYWx1ZSIsImFwcGVhckFuaW1hdGlvbiIsInJlYWR5IiwiY2F0Y2giLCJpbXBvcnRfcmVhY3Q0MyIsImNyZWF0ZU9iamVjdCIsIlN0YXRlVmlzdWFsRWxlbWVudCIsInJlc3RvcmVUcmFuc2Zvcm0iLCJfc3RhdGUiLCJpbml0aWFsU3RhdGUiLCJzZXRBbmltYXRpb25TdGF0ZSIsImFuaW1hdGlvbkRlZmluaXRpb24iLCJpbXBvcnRfanN4X3J1bnRpbWU5IiwiaW1wb3J0X21vdGlvbl91dGlsczM1IiwiUmVhY3QzIiwiaWQzIiwiaW1wb3J0X21vdGlvbl91dGlsczM2IiwiaW1wb3J0X3JlYWN0NDQiLCJtYXhTY2FsZSIsImludmVydFNjYWxlIiwiaGFzV2FybmVkIiwicGFyZW50U2NhbGVYIiwicGFyZW50U2NhbGVZIiwiR3JvdXAiLCJSZW9yZGVyR3JvdXAiLCJJdGVtIiwiUmVvcmRlckl0ZW0iLCJpbXBvcnRfcmVhY3Q0NSIsIlJlb3JkZXJDb250ZXh0IiwiY2hlY2tSZW9yZGVyIiwib3JkZXIiLCJpdGVtMiIsIm5leHRPZmZzZXQiLCJuZXh0SXRlbSIsIm5leHRMYXlvdXQiLCJuZXh0SXRlbUNlbnRlciIsImltcG9ydF9qc3hfcnVudGltZTEwIiwiaW1wb3J0X21vdGlvbl91dGlsczM3IiwiaW1wb3J0X3JlYWN0NDYiLCJSZW9yZGVyR3JvdXBDb21wb25lbnQiLCJhcyIsIm9uUmVvcmRlciIsImlzUmVvcmRlcmluZyIsInJlZ2lzdGVySXRlbSIsImlkeCIsImNvbXBhcmVNaW4iLCJ1cGRhdGVPcmRlciIsIm5ld09yZGVyIiwiaW1wb3J0X2pzeF9ydW50aW1lMTEiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzgiLCJpbXBvcnRfcmVhY3Q0NyIsInVzZURlZmF1bHRNb3Rpb25WYWx1ZSIsIlJlb3JkZXJJdGVtQ29tcG9uZW50IiwibGF0ZXN0WCIsImxhdGVzdFkiLCJnZXN0dXJlUG9pbnQiLCJvbkxheW91dE1lYXN1cmUiLCJtZWFzdXJlZCIsImdldE9yaWdpbkluZGV4IiwidG90YWwiLCJsYXN0SW5kZXgiLCJzdGFydERlbGF5IiwibWF4RGVsYXkiLCJudW1TdGVwcyIsImV4cGFuZGVkIiwicm91bmRlZCIsImNlaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsK0JBQUEsR0FBQUMsVUFBQTtFQUFBLCtEQUFBQyxDQUFBQyxPQUFBO0lBQUE7O0lBRUFDLE1BQUEsQ0FBT0MsY0FBQSxDQUFlRixPQUFBLEVBQVMsY0FBYztNQUFFRyxLQUFBLEVBQU87SUFBSyxDQUFDO0lBRTVELFNBQVNDLFFBQVFDLEVBQUEsRUFBSTtNQUNuQixJQUFJQyxLQUFBLEdBQVEsZUFBQUwsTUFBQSxDQUFPTSxNQUFBLENBQU8sSUFBSTtNQUM5QixPQUFPLFVBQVVDLEdBQUEsRUFB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QSxLQUFBQSxvQkFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLDZCQUFBLEVBQUFBLENBQUEsS0FBQUEsNkJBQUE7RUFBQUMsbUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxtQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQyxxQkFBQSxDQUFBRCxTQUFBO0VBQUFFLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxtQkFBQSxDQUFBRCxZQUFBO0VBQUFFLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxDQUFBLEVBQUFBLENBQUEsS0FBQUEsQ0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBZCxxQkFBQSxDQUFBYyxJQUFBO0VBQUFDLDRCQUFBLEVBQUFBLENB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R0FBV2p4QyxJQUFBLENBQUtpbUIsR0FBQSxDQUFJOUUsU0FBQSxHQUFZOWUsQ0FBQztJQUN2QyxJQUFJcXZCLE1BQUEsR0FBUVksUUFBQSxHQUFXMmUsU0FBQTtJQUN2QixJQUFJblcsS0FBQSxFQUFNO01BQ04sTUFBTXF0QyxRQUFBLEdBQVdILEtBQUEsR0FBUTExQyxRQUFBO01BQ3pCLE1BQU15SixjQUFBLEdBQWlCWiwwQkFBQSxDQUEyQkwsS0FBSTtNQUN0RHBKLE1BQUEsR0FBUXFLLGNBQUEsQ0FBZXJLLE1BQUEsR0FBUXkyQyxRQUFRLElBQUlBLFFBQUE7SUFDL0M7SUFDQSxPQUFPRCxVQUFBLEdBQWF4MkMsTUFBQTtFQUN4QjtBQUNKOzs7QUNmQSxJQUFNcjVCLElBQUEsR0FBT2xDLEtBQUE7QUFNYixJQUFNdkIsVUFBQSxHQUFhd1EsVUFBQSxDQUFXUyxNQUFBLENBQU8sQ0FBQ0MsR0FBQSxFQUFLMUYsR0FBQSxLQUFRO0VBQy9DMEYsR0FBQSxDQUFJMUYsR0FBQSxJQUFRc0csUUFBQSxJQUFZL1IsV0FBQSxDQUFZK1IsUUFBTztFQUMzQyxPQUFPWixHQUFBO0FBQ1gsR0FBRyxDQUFDLENBQUM7OztBQ2ZMLFNBQVMxTixNQUFNZ3dFLFFBQUEsRUFBVXpuQyxTQUFBLEdBQVksT0FBTztFQUN4QyxPQUFRM04sU0FBQSxJQUFhO0lBQ2pCQSxTQUFBLEdBQ0kyTixTQUFBLEtBQWMsUUFDUjNnQyxJQUFBLENBQUt3RyxHQUFBLENBQUl3c0IsU0FBQSxFQUFVLEtBQUssSUFDeEJoekIsSUFBQSxDQUFLdUcsR0FBQSxDQUFJeXNCLFNBQUEsRUFBVSxJQUFLO0lBQ2xDLE1BQU1xMUMsUUFBQSxHQUFXcjFDLFNBQUEsR0FBV28xQyxRQUFBO0lBQzVCLE1BQU1FLE9BQUEsR0FBVTNuQyxTQUFBLEtBQWMsUUFBUTNnQyxJQUFBLENBQUt3L0IsS0FBQSxDQUFNNm9DLFFBQVEsSUFBSXJvRSxJQUFBLENBQUt1b0UsSUFBQSxDQUFLRixRQUFRO0lBQy9FLE9BQU9yekUsS0FBQSxDQUFNLEdBQUcsR0FBR3N6RSxPQUFBLEdBQVVGLFFBQVE7RUFDekM7QUFDSjs7O0FDeURBLElBQUF2eEUsbUJBQUEsR0FBNkJtRSxPQUFBO0FBQzdCLElBQUF0RSxxQkFBQSxHQUEwQ3NFLE9BQUE7QUF0RTFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=