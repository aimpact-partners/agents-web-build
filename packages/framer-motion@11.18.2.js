System.register(["react@18.3.1","react@18.3.1/jsx-runtime","motion-utils@11.18.1","motion-dom@11.18.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["framer-motion","11.18.2"],["motion-utils","11.18.1"],["motion-dom","11.18.1"]]);
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
  loadExternalIsValidProp(require("@emotion/is-prop-valid").default);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9mcmFtZXItbW90aW9uLjExLjE4LjIuanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF5b3V0R3JvdXBDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWNvbnN0YW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9QcmVzZW5jZUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L01vdGlvbkNvbmZpZ0NvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9Qb3BDaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVByZXNlbmNlL1ByZXNlbmNlQ2hpbGQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91c2UtcHJlc2VuY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS91dGlscy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLWJyb3dzZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaXNvbW9ycGhpYy1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL0FuaW1hdGVQcmVzZW5jZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvRGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pcy1tb3VudGVkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvR2xvYmFsQ29uZmlnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3JlbmRlci1zdGVwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2JhdGNoZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9mcmFtZWxvb3AvZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtZm9yY2UtdXBkYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL2dyb3VwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9MYXlvdXRHcm91cC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTGF6eUNvbnRleHQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvZGVmaW5pdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbG9hZC1mZWF0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvTGF6eU1vdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy92YWxpZC1wcm9wLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9maWx0ZXItcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL01vdGlvbkNvbmZpZy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3dhcm4tb25jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9jb21wb25lbnRzL2NyZWF0ZS1wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbnRleHQvTW90aW9uQ29udGV4dC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9pcy12YXJpYW50LWxhYmVsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWFuaW1hdGlvbi1jb250cm9scy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy92YXJpYW50LXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2lzLWNvbnRyb2xsaW5nLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29udGV4dC9Nb3Rpb25Db250ZXh0L2NyZWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy9zeW1ib2wubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9pcy1yZWYtb2JqZWN0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL3VzZS1tb3Rpb24tcmVmLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9jYW1lbC10by1kYXNoLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvZGF0YS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2ZyYW1lbG9vcC9taWNyb3Rhc2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1N3aXRjaExheW91dEdyb3VwQ29udGV4dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi91dGlscy91c2UtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2xvd2VyY2FzZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdXRpbHMvaXMtc3ZnLWNvbXBvbmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLXZhcmlhbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLWtleWZyYW1lcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZXNvbHZlLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvaXMtbW90aW9uLXZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXRpbHMvcmVzb2x2ZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdXNlLXZpc3VhbC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2tleXMtdHJhbnNmb3JtLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS91dGlscy9pcy1jc3MtdmFyaWFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL2dldC1hcy10eXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvY2xhbXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9udW1iZXJzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvbnVtYmVycy91bml0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvbnVtYmVyLWJyb3dzZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1pbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3ZhbHVlLXR5cGVzL251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL3V0aWxzL2J1aWxkLXN0eWxlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvcGF0aC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvdHJhbnNmb3JtLW9yaWdpbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvYnVpbGQtYXR0cnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jcmVhdGUtcmVuZGVyLXN0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9pcy1zdmctdGFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvcmVuZGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9jYW1lbC1jYXNlLWF0dHJzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91dGlscy9yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy9zY2FsZS1jb3JyZWN0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLWZvcmNlZC1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9zY3JhcGUtbW90aW9uLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9zdmcvdXRpbHMvc2NyYXBlLW1vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvc3ZnL2NvbmZpZy1tb3Rpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC9jb25maWctbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXNlLXByb3BzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy91c2UtcHJvcHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3VzZS1yZW5kZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvY29tcG9uZW50cy9jcmVhdGUtZmFjdG9yeS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9jb21wb25lbnRzL20vY3JlYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2NvbXBvbmVudHMvbS9wcm94eS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3NoYWxsb3ctY29tcGFyZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9yZXNvbHZlLWR5bmFtaWMtdmFyaWFudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvaHRtbC91dGlscy9rZXlzLXBvc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL3N5bmMtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2FycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvc3Vic2NyaXB0aW9uLW1hbmFnZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy92ZWxvY2l0eS1wZXItc2Vjb25kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvc2V0dGVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9pcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS13aWxsLWNoYW5nZS9hZGQtd2lsbC1jaGFuZ2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9nZXQtYXBwZWFyLWlkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLWluc3RhbnQtdHJhbnNpdGlvbi1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9jdWJpYy1iZXppZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvbW9kaWZpZXJzL21pcnJvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9tb2RpZmllcnMvcmV2ZXJzZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9iYWNrLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2FudGljaXBhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvY2lyYy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLXplcm8tdmFsdWUtc3RyaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLW5vbmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy91dGlscy9zYW5pdGl6ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL2Zsb2F0LXJlZ2V4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvdXRpbHMvaXMtbnVsbGlzaC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL3NpbmdsZS1jb2xvci1yZWdleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29sb3IvcmdiYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2hleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbG9yL2hzbGEubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS90eXBlcy9jb2xvci9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL3V0aWxzL2NvbG9yLXJlZ2V4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdHlwZXMvY29tcGxleC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3R5cGVzL2NvbXBsZXgvZmlsdGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kZWZhdWx0cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvYW5pbWF0YWJsZS1ub25lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2h0bWwvdXRpbHMvbWFrZS1ub25lLWFuaW1hdGFibGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL3VuaXQtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9LZXlmcmFtZXNSZXNvbHZlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2lzLW51bWVyaWNhbC1zdHJpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2Nzcy12YXJpYWJsZXMtY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdGVzdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmFsdWUtdHlwZXMvdHlwZS1hdXRvLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9kaW1lbnNpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9ET01LZXlmcmFtZXNSZXNvbHZlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9pcy1hbmltYXRhYmxlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy91dGlscy9jYW4tYW5pbWF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvdXRpbHMvZ2V0LWZpbmFsLWtleWZyYW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9CYXNlQW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L251bWJlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2hzbGEtdG8tcmdiYS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC9pbW1lZGlhdGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvY29sb3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9waXBlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvbWl4L3Zpc2liaWxpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9taXgvY29tcGxleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL21peC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL3ZlbG9jaXR5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2RlZmF1bHRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvc3ByaW5nL2ZpbmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9zcHJpbmcvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy9pbmVydGlhLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL2Vhc2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9lYXNpbmcvdXRpbHMvaXMtZWFzaW5nLWFycmF5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL21hcC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2ludGVycG9sYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9maWxsLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy9kZWZhdWx0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvb2Zmc2V0cy90aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMva2V5ZnJhbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9kcml2ZXJzL2RyaXZlci1mcmFtZWxvb3AubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL01haW5UaHJlYWRBbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3V0aWxzL2FjY2VsZXJhdGVkLXZhbHVlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL3V0aWxzL3N1cHBvcnRzLXdhYXBpLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy9BY2NlbGVyYXRlZEFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9kZWZhdWx0LXRyYW5zaXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2lzLXRyYW5zaXRpb24tZGVmaW5lZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL21vdGlvbi12YWx1ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9pbnRlcmZhY2VzL3Zpc3VhbC1lbGVtZW50LXZhcmlhbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vaW50ZXJmYWNlcy92aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci91dGlscy9nZXQtdmFyaWFudC1jb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2FuaW1hdGlvbi1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9GZWF0dXJlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL2FuaW1hdGlvbi9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb24vZXhpdC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9hbmltYXRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL2FkZC1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9ldmVudHMvZXZlbnQtaW5mby5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2V2ZW50cy9hZGQtcG9pbnRlci1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL2Rpc3RhbmNlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcGFuL1BhblNlc3Npb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L2RlbHRhLWNhbGMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3V0aWxzL2NvbnN0cmFpbnRzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9tb2RlbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL2VhY2gtYXhpcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvY29udmVyc2lvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vdXRpbHMvaGFzLXRyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vZ2VvbWV0cnkvZGVsdGEtYXBwbHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3V0aWxzL21lYXN1cmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9nZXQtY29udGV4dC13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL1Zpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvcGFuL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zdHlsZXMvc2NhbGUtYm9yZGVyLXJhZGl1cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vc3R5bGVzL3NjYWxlLWJveC1zaGFkb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vZmVhdHVyZXMvbGF5b3V0L01lYXN1cmVMYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9zaW5nbGUtdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3V0aWxzL2lzLXN2Zy1lbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL2NvbXBhcmUtYnktZGVwdGgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvdXRpbHMvZmxhdC10cmVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvZGVsYXkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2FuaW1hdGlvbi9taXgtdmFsdWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9jb3B5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9nZW9tZXRyeS9kZWx0YS1yZW1vdmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL2dlb21ldHJ5L3V0aWxzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9zaGFyZWQvc3RhY2subWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3N0eWxlcy90cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL25vZGUvY3JlYXRlLXByb2plY3Rpb24tbm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3Byb2plY3Rpb24vbm9kZS9Eb2N1bWVudFByb2plY3Rpb25Ob2RlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi9ub2RlL0hUTUxQcm9qZWN0aW9uTm9kZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9kcmFnLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZ2VzdHVyZXMvaG92ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9mb2N1cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL2ZlYXR1cmVzL3ZpZXdwb3J0L29ic2VydmVycy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy92aWV3cG9ydC9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9nZXN0dXJlcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL21vdGlvbi9mZWF0dXJlcy9sYXlvdXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy9yZWR1Y2VkLW1vdGlvbi9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3JlZHVjZWQtbW90aW9uL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS92YWx1ZS10eXBlcy9maW5kLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3V0aWxzL21vdGlvbi12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vRE9NVmlzdWFsRWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9odG1sL0hUTUxWaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL3N2Zy9TVkdWaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9jcmVhdGUtdmlzdWFsLWVsZW1lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvY29tcG9uZW50cy9tb3Rpb24vY3JlYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2NvbXBvbmVudHMvbW90aW9uL3Byb3h5Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9mZWF0dXJlcy1hbmltYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL2ZlYXR1cmVzLW1heC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vZmVhdHVyZXMtbWluLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvdXNlLW1vdGlvbi12YWx1ZS1ldmVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL29ic2VydmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9oYW5kbGUtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vcmVzaXplL2hhbmRsZS13aW5kb3cubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Jlc2l6ZS9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZm8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luc2V0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9lZGdlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb2Zmc2V0cy9vZmZzZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL3ByZXNldHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC9vZmZzZXRzL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL2RvbS9zY3JvbGwvb24tc2Nyb2xsLWhhbmRsZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9yZW5kZXIvZG9tL3Njcm9sbC90cmFjay5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vc2Nyb2xsL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3Njcm9sbC91c2UtZWxlbWVudC1zY3JvbGwubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS9zY3JvbGwvdXNlLXZpZXdwb3J0LXNjcm9sbC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1tb3Rpb24tdmFsdWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtY29tYmluZS12YWx1ZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtbW90aW9uLXRlbXBsYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXNwcmluZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1hbmltYXRpb24tZnJhbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdGltZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3RyYW5zZm9ybS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1jb21wdXRlZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS10cmFuc2Zvcm0ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2UtdmVsb2NpdHkubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvZ2V0LXdpbGwtY2hhbmdlLW5hbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy92YWx1ZS91c2Utd2lsbC1jaGFuZ2UvV2lsbENoYW5nZU1vdGlvblZhbHVlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdmFsdWUvdXNlLXdpbGwtY2hhbmdlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vdXNlLXJlZHVjZWQtbW90aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvdXRpbHMvcmVkdWNlZC1tb3Rpb24vdXNlLXJlZHVjZWQtbW90aW9uLWNvbmZpZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy9hbmltYXRpb24tY29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtdW5tb3VudC1lZmZlY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy93cmFwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZWFzaW5nL3V0aWxzL2dldC1lYXNpbmctZm9yLXNlZ21lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvaXMtZG9tLWtleWZyYW1lcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlL3Jlc29sdmUtc3ViamVjdHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy1yZXBlYXQtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvY2FsYy10aW1lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL2VkaXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvdXRpbHMvbm9ybWFsaXplLXRpbWVzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3NlcXVlbmNlL3V0aWxzL3NvcnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vc2VxdWVuY2UvY3JlYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcmVuZGVyL29iamVjdC9PYmplY3RWaXN1YWxFbGVtZW50Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL3V0aWxzL2NyZWF0ZS12aXN1YWwtZWxlbWVudC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlL3N1YmplY3QubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0ZS9zZXF1ZW5jZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRlL2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2FuaW1hdG9ycy93YWFwaS91dGlscy9zdHlsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvdXRpbHMvc3VwcG9ydHMtcGFydGlhbC1rZXlmcmFtZXMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vYW5pbWF0b3JzL3dhYXBpL05hdGl2ZUFuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvYW5pbWF0ZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9hbmltYXRvcnMvd2FhcGkvYW5pbWF0ZS1zdHlsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0ZS1zdHlsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9ob29rcy91c2UtYW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZXZlbnRzL3VzZS1kb20tZXZlbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3VzZS1kcmFnLWNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvbW90aW9uL3V0aWxzL2lzLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9tb3Rpb24vdXRpbHMvdW53cmFwLW1vdGlvbi1jb21wb25lbnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9wcm9qZWN0aW9uL3VzZS1pbnN0YW50LWxheW91dC10cmFuc2l0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvcHJvamVjdGlvbi91c2UtcmVzZXQtcHJvamVjdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1jeWNsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3JlbmRlci9kb20vdmlld3BvcnQvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy91dGlscy91c2UtaW4tdmlldy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3V0aWxzL3VzZS1pbnN0YW50LXRyYW5zaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9hbmltYXRpb24vb3B0aW1pemVkLWFwcGVhci9zdG9yZS1pZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0b3JlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL29wdGltaXplZC1hcHBlYXIvaGFuZG9mZi5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi9vcHRpbWl6ZWQtYXBwZWFyL3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvYW5pbWF0aW9uL2hvb2tzL3VzZS1hbmltYXRlZC1zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvQW5pbWF0ZVNoYXJlZExheW91dC5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL3ZhbHVlL3VzZS1pbnZlcnRlZC1zY2FsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2NvbXBvbmVudHMvUmVvcmRlci9uYW1lc3BhY2UubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb250ZXh0L1Jlb3JkZXJDb250ZXh0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvY29tcG9uZW50cy9SZW9yZGVyL3V0aWxzL2NoZWNrLXJlb3JkZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvR3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9lcy9jb21wb25lbnRzL1Jlb3JkZXIvSXRlbS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9zdGFnZ2VyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9mcmFtZXItbW90aW9uL2Rpc3QvZXMvZnJhbWVsb29wL2luZGV4LWxlZ2FjeS5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2Vhc2luZy9zdGVwcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvZnJhbWVyLW1vdGlvbi9kaXN0L2VzL2luZGV4Lm1qcyJdLCJuYW1lcyI6WyJmcmFtZXJfbW90aW9uXzExXzE4XzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQWNjZWxlcmF0ZWRBbmltYXRpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJBbmltYXRlU2hhcmVkTGF5b3V0IiwiRGVwcmVjYXRlZExheW91dEdyb3VwQ29udGV4dCIsIkRyYWdDb250cm9scyIsIkZsYXRUcmVlIiwiTGF5b3V0R3JvdXAiLCJMYXlvdXRHcm91cENvbnRleHQiLCJMYXp5TW90aW9uIiwiTW90aW9uQ29uZmlnIiwiTW90aW9uQ29uZmlnQ29udGV4dCIsIk1vdGlvbkNvbnRleHQiLCJNb3Rpb25HbG9iYWxDb25maWciLCJNb3Rpb25WYWx1ZSIsIlByZXNlbmNlQ29udGV4dCIsIlJlb3JkZXIiLCJuYW1lc3BhY2VfZXhwb3J0cyIsIlN3aXRjaExheW91dEdyb3VwQ29udGV4dCIsIlZpc3VhbEVsZW1lbnQiLCJhZGRQb2ludGVyRXZlbnQiLCJhZGRQb2ludGVySW5mbyIsImFkZFNjYWxlQ29ycmVjdG9yIiwiYW5pbWF0ZSIsImFuaW1hdGVNaW5pIiwiYW5pbWF0ZVZhbHVlIiwiYW5pbWF0ZVZpc3VhbEVsZW1lbnQiLCJhbmltYXRpb25Db250cm9scyIsImFuaW1hdGlvbnMiLCJhbnRpY2lwYXRlIiwiYmFja0luIiwiYmFja0luT3V0IiwiYmFja091dCIsImJ1aWxkVHJhbnNmb3JtIiwiY2FsY0xlbmd0aCIsImNhbmNlbEZyYW1lIiwiY2FuY2VsU3luYyIsImNpcmNJbiIsImNpcmNJbk91dCIsImNpcmNPdXQiLCJjbGFtcCIsImNvbG9yIiwiY29tcGxleCIsImNyZWF0ZUJveCIsImNyZWF0ZVJlbmRlcmVyTW90aW9uQ29tcG9uZW50IiwiY3JlYXRlU2NvcGVkQW5pbWF0ZSIsImN1YmljQmV6aWVyIiwiZGVsYXkiLCJkaXNhYmxlSW5zdGFudFRyYW5zaXRpb25zIiwiZGlzdGFuY2UiLCJkaXN0YW5jZTJEIiwiZG9tQW5pbWF0aW9uIiwiZG9tTWF4IiwiZG9tTWluIiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImZpbHRlclByb3BzIiwiZmluZFNwcmluZyIsImZyYW1lIiwiZnJhbWVEYXRhIiwiZnJhbWVTdGVwcyIsImluVmlldyIsImluZXJ0aWEiLCJpbnRlcnBvbGF0ZSIsImludmFyaWFudCIsImltcG9ydF9tb3Rpb25fdXRpbHMzOSIsImlzQnJvd3NlciIsImlzRHJhZ0FjdGl2ZSIsImltcG9ydF9tb3Rpb25fZG9tMjQiLCJpc01vdGlvbkNvbXBvbmVudCIsImlzTW90aW9uVmFsdWUiLCJpc1ZhbGlkTW90aW9uUHJvcCIsImtleWZyYW1lcyIsIm0iLCJtYWtlVXNlVmlzdWFsU3RhdGUiLCJtaXJyb3JFYXNpbmciLCJtaXgiLCJtb3Rpb24iLCJtb3Rpb25WYWx1ZSIsIm5vb3AiLCJvcHRpbWl6ZWRBcHBlYXJEYXRhQXR0cmlidXRlIiwicGlwZSIsInByb2dyZXNzIiwicHgiLCJyZXNvbHZlTW90aW9uVmFsdWUiLCJyZXZlcnNlRWFzaW5nIiwic2Nyb2xsIiwic2Nyb2xsSW5mbyIsInNwcmluZyIsInN0YWdnZXIiLCJzdGFydE9wdGltaXplZEFwcGVhckFuaW1hdGlvbiIsInN0ZXBzIiwic3luYyIsInRpbWUiLCJ0cmFuc2Zvcm0iLCJ1bndyYXBNb3Rpb25Db21wb25lbnQiLCJ1c2VBbmltYXRlIiwidXNlQW5pbWF0ZU1pbmkiLCJ1c2VBbmltYXRpb24iLCJ1c2VBbmltYXRpb25Db250cm9scyIsInVzZUFuaW1hdGlvbkZyYW1lIiwidXNlQ3ljbGUiLCJ1c2VEZXByZWNhdGVkQW5pbWF0ZWRTdGF0ZSIsInVzZUFuaW1hdGVkU3RhdGUiLCJ1c2VEZXByZWNhdGVkSW52ZXJ0ZWRTY2FsZSIsInVzZUludmVydGVkU2NhbGUiLCJ1c2VEb21FdmVudCIsInVzZURyYWdDb250cm9scyIsInVzZUVsZW1lbnRTY3JvbGwiLCJ1c2VGb3JjZVVwZGF0ZSIsInVzZUluVmlldyIsInVzZUluc3RhbnRMYXlvdXRUcmFuc2l0aW9uIiwidXNlSW5zdGFudFRyYW5zaXRpb24iLCJ1c2VJc1ByZXNlbnQiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IiwidXNlTW90aW9uVGVtcGxhdGUiLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZU1vdGlvblZhbHVlRXZlbnQiLCJ1c2VQcmVzZW5jZSIsInVzZVJlZHVjZWRNb3Rpb24iLCJ1c2VSZWR1Y2VkTW90aW9uQ29uZmlnIiwidXNlUmVzZXRQcm9qZWN0aW9uIiwidXNlU2Nyb2xsIiwidXNlU3ByaW5nIiwidXNlVGltZSIsInVzZVRyYW5zZm9ybSIsInVzZVVubW91bnRFZmZlY3QiLCJ1c2VWZWxvY2l0eSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwidXNlV2lsbENoYW5nZSIsInZpc3VhbEVsZW1lbnRTdG9yZSIsIndyYXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImNyZWF0ZUNvbnRleHQiLCJpbXBvcnRfcmVhY3QyIiwidXNlQ29uc3RhbnQiLCJpbml0IiwicmVmIiwidXNlUmVmIiwiY3VycmVudCIsImltcG9ydF9yZWFjdDMiLCJpbXBvcnRfcmVhY3Q0IiwidHJhbnNmb3JtUGFnZVBvaW50IiwicCIsImlzU3RhdGljIiwicmVkdWNlZE1vdGlvbiIsImltcG9ydF9qc3hfcnVudGltZSIsIlJlYWN0IiwiX190b0VTTSIsImltcG9ydF9yZWFjdDUiLCJQb3BDaGlsZE1lYXN1cmUiLCJDb21wb25lbnQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJwcm9wcyIsImNoaWxkUmVmIiwiaXNQcmVzZW50Iiwic2l6ZSIsInNpemVSZWYiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJyZW5kZXIiLCJjaGlsZHJlbiIsIlBvcENoaWxkIiwiaXNQcmVzZW50MiIsImlkNCIsInVzZUlkIiwibm9uY2UiLCJ1c2VDb250ZXh0IiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwiZGF0YXNldCIsIm1vdGlvblBvcElkIiwic3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJzaGVldCIsImluc2VydFJ1bGUiLCJyZW1vdmVDaGlsZCIsImpzeCIsImNsb25lRWxlbWVudCIsImltcG9ydF9qc3hfcnVudGltZTIiLCJSZWFjdDIiLCJpbXBvcnRfcmVhY3Q2IiwiUHJlc2VuY2VDaGlsZCIsImluaXRpYWwiLCJvbkV4aXRDb21wbGV0ZSIsImN1c3RvbSIsInByZXNlbmNlQWZmZWN0c0xheW91dCIsIm1vZGUiLCJwcmVzZW5jZUNoaWxkcmVuIiwibmV3Q2hpbGRyZW5NYXAiLCJtZW1vaXplZE9uRXhpdENvbXBsZXRlIiwidXNlQ2FsbGJhY2siLCJjaGlsZElkIiwic2V0IiwiaXNDb21wbGV0ZSIsInZhbHVlcyIsImNvbnRleHQiLCJ1c2VNZW1vIiwiaWQiLCJyZWdpc3RlciIsImRlbGV0ZSIsIk1hdGgiLCJyYW5kb20iLCJmb3JFYWNoIiwiXyIsImtleSIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwidmFsdWUiLCJNYXAiLCJpbXBvcnRfcmVhY3Q3Iiwic3Vic2NyaWJlIiwic2FmZVRvUmVtb3ZlIiwiaW1wb3J0X3JlYWN0OCIsImdldENoaWxkS2V5IiwiY2hpbGQiLCJvbmx5RWxlbWVudHMiLCJmaWx0ZXJlZCIsIkNoaWxkcmVuIiwiaXNWYWxpZEVsZW1lbnQiLCJwdXNoIiwid2luZG93IiwiaW1wb3J0X3JlYWN0OSIsInVzZUxheW91dEVmZmVjdCIsImltcG9ydF9qc3hfcnVudGltZTMiLCJpbXBvcnRfcmVhY3QxMCIsInByb3BhZ2F0ZSIsImlzUGFyZW50UHJlc2VudCIsInByZXNlbnRDaGlsZHJlbiIsInByZXNlbnRLZXlzIiwibWFwIiwiaXNJbml0aWFsUmVuZGVyIiwicGVuZGluZ1ByZXNlbnRDaGlsZHJlbiIsImV4aXRDb21wbGV0ZSIsImRpZmZlZENoaWxkcmVuIiwic2V0RGlmZmVkQ2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInJlbmRlcmVkQ2hpbGRyZW4iLCJzZXRSZW5kZXJlZENoaWxkcmVuIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwiZ2V0Iiwiam9pbiIsImV4aXRpbmdDaGlsZHJlbiIsIm5leHRDaGlsZHJlbiIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiZm9yY2VSZW5kZXIiLCJGcmFnbWVudCIsIm9uRXhpdCIsImhhcyIsImlzRXZlcnlFeGl0Q29tcGxldGUiLCJpc0V4aXRDb21wbGV0ZSIsImltcG9ydF9yZWFjdDExIiwiaW1wb3J0X3JlYWN0MTIiLCJ1c2VJc01vdW50ZWQiLCJpc01vdW50ZWQiLCJza2lwQW5pbWF0aW9ucyIsInVzZU1hbnVhbFRpbWluZyIsImNyZWF0ZVJlbmRlclN0ZXAiLCJydW5OZXh0RnJhbWUiLCJ0aGlzRnJhbWUiLCJTZXQiLCJuZXh0RnJhbWUiLCJpc1Byb2Nlc3NpbmciLCJmbHVzaE5leHRGcmFtZSIsInRvS2VlcEFsaXZlIiwiV2Vha1NldCIsImxhdGVzdEZyYW1lRGF0YSIsImRlbHRhIiwidGltZXN0YW1wIiwidHJpZ2dlckNhbGxiYWNrIiwiY2FsbGJhY2siLCJzdGVwIiwic2NoZWR1bGUiLCJrZWVwQWxpdmUiLCJpbW1lZGlhdGUiLCJhZGRUb0N1cnJlbnRGcmFtZSIsInF1ZXVlIiwiYWRkIiwiY2FuY2VsIiwicHJvY2VzcyIsImZyYW1lRGF0YTIiLCJjbGVhciIsInN0ZXBzT3JkZXIiLCJtYXhFbGFwc2VkIiwiY3JlYXRlUmVuZGVyQmF0Y2hlciIsInNjaGVkdWxlTmV4dEJhdGNoIiwiYWxsb3dLZWVwQWxpdmUiLCJ1c2VEZWZhdWx0RWxhcHNlZCIsInN0YXRlMiIsImZsYWdSdW5OZXh0RnJhbWUiLCJzdGVwczIiLCJyZWR1Y2UiLCJhY2MiLCJyZWFkIiwicmVzb2x2ZUtleWZyYW1lcyIsInVwZGF0ZSIsInByZVJlbmRlciIsInBvc3RSZW5kZXIiLCJwcm9jZXNzQmF0Y2giLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm1heCIsIm1pbiIsIndha2UiLCJwcm9jZXNzMiIsInN0YXRlIiwiaW1wb3J0X21vdGlvbl91dGlscyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImltcG9ydF9yZWFjdDEzIiwiZm9yY2VkUmVuZGVyQ291bnQiLCJzZXRGb3JjZWRSZW5kZXJDb3VudCIsImRlZmVycmVkRm9yY2VSZW5kZXIiLCJub3RpZnkiLCJub2RlIiwiaXNMYXlvdXREaXJ0eSIsIndpbGxVcGRhdGUiLCJub2RlR3JvdXAiLCJub2RlcyIsInN1YnNjcmlwdGlvbnMiLCJXZWFrTWFwIiwiZGlydHlBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwidW5zdWJzY3JpYmUiLCJkaXJ0eSIsImltcG9ydF9qc3hfcnVudGltZTQiLCJpbXBvcnRfcmVhY3QxNCIsInNob3VsZEluaGVyaXRHcm91cCIsImluaGVyaXQiLCJzaG91bGRJbmhlcml0SWQiLCJsYXlvdXRHcm91cENvbnRleHQiLCJkZXByZWNhdGVkTGF5b3V0R3JvdXBDb250ZXh0IiwidXBzdHJlYW1JZCIsImdyb3VwIiwibWVtb2l6ZWRDb250ZXh0IiwiaW1wb3J0X3JlYWN0MTUiLCJMYXp5Q29udGV4dCIsInN0cmljdCIsImZlYXR1cmVQcm9wcyIsImFuaW1hdGlvbiIsImV4aXQiLCJkcmFnIiwiZm9jdXMiLCJob3ZlciIsInRhcCIsInBhbiIsImxheW91dCIsImZlYXR1cmVEZWZpbml0aW9ucyIsImlzRW5hYmxlZCIsInNvbWUiLCJuYW1lIiwibG9hZEZlYXR1cmVzIiwiZmVhdHVyZXMiLCJpbXBvcnRfanN4X3J1bnRpbWU1IiwiaW1wb3J0X3JlYWN0MTYiLCJzZXRJc0xvYWRlZCIsImlzTGF6eUJ1bmRsZSIsImxvYWRlZFJlbmRlcmVyIiwicmVuZGVyZXIiLCJsb2FkZWRGZWF0dXJlcyIsInRoZW4iLCJ2YWxpZE1vdGlvblByb3BzIiwic3RhcnRzV2l0aCIsInNob3VsZEZvcndhcmQiLCJsb2FkRXh0ZXJuYWxJc1ZhbGlkUHJvcCIsImlzVmFsaWRQcm9wIiwiZGVmYXVsdCIsIl9hIiwiaXNEb20iLCJmb3J3YXJkTW90aW9uUHJvcHMiLCJmaWx0ZXJlZFByb3BzIiwiaW1wb3J0X2pzeF9ydW50aW1lNiIsImltcG9ydF9yZWFjdDE3IiwiY29uZmlnIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zaXRpb24iLCJ3YXJuZWQiLCJ3YXJuT25jZSIsImNvbmRpdGlvbiIsIm1lc3NhZ2UiLCJjcmVhdGVET01Nb3Rpb25Db21wb25lbnRQcm94eSIsImNvbXBvbmVudEZhY3RvcnkiLCJQcm94eSIsImNvbXBvbmVudENhY2hlIiwiZGVwcmVjYXRlZEZhY3RvcnlGdW5jdGlvbiIsImFyZ3MiLCJfdGFyZ2V0IiwiaW1wb3J0X3JlYWN0MTgiLCJpc1ZhcmlhbnRMYWJlbCIsInYiLCJBcnJheSIsImlzQXJyYXkiLCJpc0FuaW1hdGlvbkNvbnRyb2xzIiwic3RhcnQiLCJ2YXJpYW50UHJpb3JpdHlPcmRlciIsInZhcmlhbnRQcm9wcyIsImlzQ29udHJvbGxpbmdWYXJpYW50cyIsImlzVmFyaWFudE5vZGUiLCJCb29sZWFuIiwidmFyaWFudHMiLCJnZXRDdXJyZW50VHJlZVZhcmlhbnRzIiwiYW5pbWF0ZTIiLCJpbXBvcnRfcmVhY3QxOSIsInVzZUNyZWF0ZU1vdGlvbkNvbnRleHQiLCJ2YXJpYW50TGFiZWxzQXNEZXBlbmRlbmN5IiwicHJvcCIsIm1vdGlvbkNvbXBvbmVudFN5bWJvbCIsIlN5bWJvbCIsImZvciIsImlzUmVmT2JqZWN0IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW1wb3J0X3JlYWN0MjAiLCJ1c2VNb3Rpb25SZWYiLCJ2aXN1YWxTdGF0ZSIsInZpc3VhbEVsZW1lbnQiLCJleHRlcm5hbFJlZiIsImluc3RhbmNlIiwib25Nb3VudCIsIm1vdW50IiwidW5tb3VudCIsImNhbWVsVG9EYXNoIiwic3RyIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwib3B0aW1pemVkQXBwZWFyRGF0YUlkIiwibWljcm90YXNrIiwiY2FuY2VsTWljcm90YXNrIiwicXVldWVNaWNyb3Rhc2siLCJpbXBvcnRfcmVhY3QyMSIsImltcG9ydF9yZWFjdDIyIiwidXNlVmlzdWFsRWxlbWVudCIsIkNvbXBvbmVudDMiLCJjcmVhdGVWaXN1YWxFbGVtZW50IiwiUHJvamVjdGlvbk5vZGVDb25zdHJ1Y3RvciIsIl9iIiwicGFyZW50IiwibGF6eUNvbnRleHQiLCJwcmVzZW5jZUNvbnRleHQiLCJyZWR1Y2VkTW90aW9uQ29uZmlnIiwidmlzdWFsRWxlbWVudFJlZiIsImJsb2NrSW5pdGlhbEFuaW1hdGlvbiIsImluaXRpYWxMYXlvdXRHcm91cENvbmZpZyIsInByb2plY3Rpb24iLCJ0eXBlIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUiLCJvcHRpbWlzZWRBcHBlYXJJZCIsIndhbnRzSGFuZG9mZiIsIk1vdGlvbkhhbmRvZmZJc0NvbXBsZXRlIiwiTW90aW9uSGFzT3B0aW1pc2VkQW5pbWF0aW9uIiwiTW90aW9uSXNNb3VudGVkIiwidXBkYXRlRmVhdHVyZXMiLCJhbmltYXRpb25TdGF0ZSIsImFuaW1hdGVDaGFuZ2VzIiwiX2EyIiwiTW90aW9uSGFuZG9mZk1hcmtBc0NvbXBsZXRlIiwiaW5pdGlhbFByb21vdGlvbkNvbmZpZyIsImxheW91dElkIiwibGF5b3V0MiIsImRyYWcyIiwiZHJhZ0NvbnN0cmFpbnRzIiwibGF5b3V0U2Nyb2xsIiwibGF5b3V0Um9vdCIsImxhdGVzdFZhbHVlcyIsImdldENsb3Nlc3RQcm9qZWN0aW5nTm9kZSIsInNldE9wdGlvbnMiLCJhbHdheXNNZWFzdXJlTGF5b3V0IiwiYW5pbWF0aW9uVHlwZSIsIm9wdGlvbnMiLCJhbGxvd1Byb2plY3Rpb24iLCJpbXBvcnRfanN4X3J1bnRpbWU3IiwiaW1wb3J0X21vdGlvbl91dGlsczIiLCJpbXBvcnRfcmVhY3QyMyIsInByZWxvYWRlZEZlYXR1cmVzIiwidXNlUmVuZGVyIiwidXNlVmlzdWFsU3RhdGUiLCJ1c2VWaXN1YWxTdGF0ZTIiLCJNb3Rpb25Db21wb25lbnQiLCJNZWFzdXJlTGF5b3V0MiIsImNvbmZpZ0FuZFByb3BzIiwidXNlTGF5b3V0SWQiLCJ1c2VTdHJpY3RNb2RlIiwibGF5b3V0UHJvamVjdGlvbiIsImdldFByb2plY3Rpb25GdW5jdGlvbmFsaXR5IiwiTWVhc3VyZUxheW91dCIsIlByb2plY3Rpb25Ob2RlIiwianN4cyIsImRpc3BsYXlOYW1lIiwiRm9yd2FyZFJlZk1vdGlvbkNvbXBvbmVudCIsImZvcndhcmRSZWYiLCJsYXlvdXRHcm91cElkIiwiaXNTdHJpY3QiLCJzdHJpY3RNZXNzYWdlIiwiaWdub3JlU3RyaWN0Iiwid2FybmluZyIsImNvbWJpbmVkIiwibG93ZXJjYXNlU1ZHRWxlbWVudHMiLCJpc1NWR0NvbXBvbmVudCIsImluZGV4T2YiLCJ0ZXN0IiwiZ2V0VmFsdWVTdGF0ZSIsImdldFZlbG9jaXR5IiwicmVzb2x2ZVZhcmlhbnRGcm9tUHJvcHMiLCJkZWZpbml0aW9uIiwidmVsb2NpdHkiLCJpc0tleWZyYW1lc1RhcmdldCIsImlzQ3VzdG9tVmFsdWUiLCJ0b1ZhbHVlIiwicmVzb2x2ZUZpbmFsVmFsdWVJbktleWZyYW1lcyIsInVud3JhcHBlZFZhbHVlIiwiaW1wb3J0X3JlYWN0MjQiLCJtYWtlU3RhdGUiLCJzY3JhcGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMiLCJzY3JhcGVNb3Rpb25WYWx1ZXNGcm9tUHJvcHMzIiwiY3JlYXRlUmVuZGVyU3RhdGUiLCJvblVwZGF0ZSIsIm1ha2VMYXRlc3RWYWx1ZXMiLCJyZW5kZXJTdGF0ZSIsIm1ha2UiLCJzY3JhcGVNb3Rpb25WYWx1ZXMiLCJtb3Rpb25WYWx1ZXMiLCJpc0NvbnRyb2xsaW5nVmFyaWFudHMkMSIsImlzVmFyaWFudE5vZGUkMSIsImlzSW5pdGlhbEFuaW1hdGlvbkJsb2NrZWQiLCJ2YXJpYW50VG9TZXQiLCJsaXN0IiwicmVzb2x2ZWQiLCJ0cmFuc2l0aW9uRW5kIiwidGFyZ2V0IiwidmFsdWVUYXJnZXQiLCJpbmRleCIsInRyYW5zZm9ybVByb3BPcmRlciIsInRyYW5zZm9ybVByb3BzIiwiY2hlY2tTdHJpbmdTdGFydHNXaXRoIiwidG9rZW4iLCJpc0NTU1ZhcmlhYmxlTmFtZSIsInN0YXJ0c0FzVmFyaWFibGVUb2tlbiIsImlzQ1NTVmFyaWFibGVUb2tlbiIsInN0YXJ0c1dpdGhUb2tlbiIsInNpbmdsZUNzc1ZhcmlhYmxlUmVnZXgiLCJzcGxpdCIsInRyaW0iLCJnZXRWYWx1ZUFzVHlwZSIsIm51bWJlciIsInBhcnNlIiwicGFyc2VGbG9hdCIsImFscGhhIiwic2NhbGUiLCJjcmVhdGVVbml0VHlwZSIsInVuaXQiLCJlbmRzV2l0aCIsImRlZ3JlZXMiLCJwZXJjZW50IiwidmgiLCJ2dyIsInByb2dyZXNzUGVyY2VudGFnZSIsImJyb3dzZXJOdW1iZXJWYWx1ZVR5cGVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJpZ2h0V2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsImJvcmRlclJhZGl1cyIsInJhZGl1cyIsImJvcmRlclRvcExlZnRSYWRpdXMiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRQb3NpdGlvblgiLCJiYWNrZ3JvdW5kUG9zaXRpb25ZIiwidHJhbnNmb3JtVmFsdWVUeXBlcyIsInJvdGF0ZSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwicm90YXRlWiIsInNjYWxlWCIsInNjYWxlWSIsInNjYWxlWiIsInNrZXciLCJza2V3WCIsInNrZXdZIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJ0cmFuc2xhdGVaIiwieCIsInkiLCJ6IiwicGVyc3BlY3RpdmUiLCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZSIsIm9wYWNpdHkiLCJvcmlnaW5YIiwib3JpZ2luWSIsIm9yaWdpbloiLCJpbnQiLCJyb3VuZCIsIm51bWJlclZhbHVlVHlwZXMiLCJ6SW5kZXgiLCJmaWxsT3BhY2l0eSIsInN0cm9rZU9wYWNpdHkiLCJudW1PY3RhdmVzIiwidHJhbnNsYXRlQWxpYXMiLCJudW1UcmFuc2Zvcm1zIiwidHJhbnNmb3JtMiIsInRyYW5zZm9ybVRlbXBsYXRlIiwidHJhbnNmb3JtU3RyaW5nIiwidHJhbnNmb3JtSXNEZWZhdWx0IiwidmFsdWVJc0RlZmF1bHQiLCJ2YWx1ZUFzVHlwZSIsInRyYW5zZm9ybU5hbWUiLCJidWlsZEhUTUxTdHlsZXMiLCJ2YXJzIiwidHJhbnNmb3JtT3JpZ2luIiwiaGFzVHJhbnNmb3JtMiIsImhhc1RyYW5zZm9ybU9yaWdpbiIsImRhc2hLZXlzIiwib2Zmc2V0IiwiYXJyYXkiLCJjYW1lbEtleXMiLCJidWlsZFNWR1BhdGgiLCJhdHRycyIsInNwYWNpbmciLCJ1c2VEYXNoQ2FzZSIsInBhdGhMZW5ndGgiLCJrZXlzMiIsInBhdGhTcGFjaW5nIiwiY2FsY09yaWdpbiIsIm9yaWdpbiIsImNhbGNTVkdUcmFuc2Zvcm1PcmlnaW4iLCJkaW1lbnNpb25zIiwicHhPcmlnaW5YIiwicHhPcmlnaW5ZIiwiYnVpbGRTVkdBdHRycyIsImF0dHJYIiwiYXR0clkiLCJhdHRyU2NhbGUiLCJwYXRoT2Zmc2V0IiwibGF0ZXN0IiwiaXNTVkdUYWcyIiwidmlld0JveCIsImNyZWF0ZUh0bWxSZW5kZXJTdGF0ZSIsImNyZWF0ZVN2Z1JlbmRlclN0YXRlIiwiaXNTVkdUYWciLCJ0YWciLCJyZW5kZXJIVE1MIiwic3R5bGVQcm9wIiwiYXNzaWduIiwiZ2V0UHJvamVjdGlvblN0eWxlcyIsInNldFByb3BlcnR5IiwiY2FtZWxDYXNlQXR0cmlidXRlcyIsInJlbmRlclNWRyIsIl9zdHlsZVByb3AiLCJzZXRBdHRyaWJ1dGUiLCJzY2FsZUNvcnJlY3RvcnMiLCJjb3JyZWN0b3JzIiwiaXNGb3JjZWRNb3Rpb25WYWx1ZSIsIm5ld1ZhbHVlcyIsImdldFZhbHVlIiwibGl2ZVN0eWxlIiwic2NyYXBlTW90aW9uVmFsdWVzRnJvbVByb3BzMiIsInRhcmdldEtleSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwidXBkYXRlU1ZHRGltZW5zaW9ucyIsImdldEJCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlIiwibGF5b3V0UHJvcHMiLCJzdmdNb3Rpb25Db25maWciLCJuZWVkc01lYXN1cmUiLCJ0YWdOYW1lIiwiaHRtbE1vdGlvbkNvbmZpZyIsImltcG9ydF9yZWFjdDI1IiwiY29weVJhd1ZhbHVlc09ubHkiLCJzb3VyY2UiLCJ1c2VJbml0aWFsTW90aW9uVmFsdWVzIiwidXNlU3R5bGUiLCJ1c2VIVE1MUHJvcHMiLCJodG1sUHJvcHMiLCJkcmFnTGlzdGVuZXIiLCJkcmFnZ2FibGUiLCJ1c2VyU2VsZWN0IiwiV2Via2l0VXNlclNlbGVjdCIsIldlYmtpdFRvdWNoQ2FsbG91dCIsInRvdWNoQWN0aW9uIiwidGFiSW5kZXgiLCJvblRhcCIsIm9uVGFwU3RhcnQiLCJ3aGlsZVRhcCIsImltcG9ydF9yZWFjdDI2IiwidXNlU1ZHUHJvcHMiLCJfaXNTdGF0aWMiLCJ2aXN1YWxQcm9wcyIsInJhd1N0eWxlcyIsImltcG9ydF9yZWFjdDI3IiwiY3JlYXRlVXNlUmVuZGVyIiwidXNlVmlzdWFsUHJvcHMiLCJlbGVtZW50UHJvcHMiLCJjcmVhdGVNb3Rpb25Db21wb25lbnRGYWN0b3J5IiwiY3JlYXRlTW90aW9uQ29tcG9uZW50MiIsImJhc2VDb25maWciLCJjcmVhdGVNaW5pbWFsTW90aW9uQ29tcG9uZW50Iiwic2hhbGxvd0NvbXBhcmUiLCJuZXh0IiwicHJldiIsInByZXZMZW5ndGgiLCJyZXNvbHZlVmFyaWFudCIsImdldFByb3BzIiwicG9zaXRpb25hbEtleXMiLCJjbGVhclRpbWUiLCJuZXdUaW1lIiwiYWRkVW5pcXVlSXRlbSIsImFyciIsIml0ZW0iLCJyZW1vdmVJdGVtIiwibW92ZUl0ZW0iLCJmcm9tSW5kZXgiLCJ0b0luZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiU3Vic2NyaXB0aW9uTWFuYWdlciIsImNvbnN0cnVjdG9yIiwiaGFuZGxlciIsImEiLCJiIiwiYyIsIm51bVN1YnNjcmlwdGlvbnMiLCJnZXRTaXplIiwidmVsb2NpdHlQZXJTZWNvbmQiLCJmcmFtZUR1cmF0aW9uIiwiTUFYX1ZFTE9DSVRZX0RFTFRBIiwiaXNGbG9hdCIsImlzTmFOIiwiY29sbGVjdE1vdGlvblZhbHVlcyIsInZlcnNpb24iLCJjYW5UcmFja1ZlbG9jaXR5IiwiZXZlbnRzIiwidXBkYXRlQW5kTm90aWZ5IiwiY3VycmVudFRpbWUiLCJ1cGRhdGVkQXQiLCJzZXRQcmV2RnJhbWVWYWx1ZSIsInNldEN1cnJlbnQiLCJjaGFuZ2UiLCJyZW5kZXJSZXF1ZXN0IiwiaGFzQW5pbWF0ZWQiLCJvd25lciIsInByZXZGcmFtZVZhbHVlIiwicHJldlVwZGF0ZWRBdCIsIm9uQ2hhbmdlIiwic3Vic2NyaXB0aW9uIiwib24iLCJldmVudE5hbWUiLCJzdG9wIiwiY2xlYXJMaXN0ZW5lcnMiLCJldmVudE1hbmFnZXJzIiwiYXR0YWNoIiwicGFzc2l2ZUVmZmVjdCIsInN0b3BQYXNzaXZlRWZmZWN0Iiwic2V0V2l0aFZlbG9jaXR5IiwianVtcCIsImVuZEFuaW1hdGlvbiIsImdldFByZXZpb3VzIiwic3RhcnRBbmltYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvblN0YXJ0IiwiYW5pbWF0aW9uQ29tcGxldGUiLCJjbGVhckFuaW1hdGlvbiIsImFuaW1hdGlvbkNhbmNlbCIsImlzQW5pbWF0aW5nIiwiZGVzdHJveSIsInNldE1vdGlvblZhbHVlIiwiaGFzVmFsdWUiLCJhZGRWYWx1ZSIsInNldFRhcmdldCIsImlzV2lsbENoYW5nZU1vdGlvblZhbHVlIiwiYWRkVmFsdWVUb1dpbGxDaGFuZ2UiLCJ3aWxsQ2hhbmdlIiwiZ2V0T3B0aW1pc2VkQXBwZWFySWQiLCJpbnN0YW50QW5pbWF0aW9uU3RhdGUiLCJpbXBvcnRfbW90aW9uX3V0aWxzMyIsImNhbGNCZXppZXIiLCJ0IiwiYTEiLCJhMiIsInN1YmRpdmlzaW9uUHJlY2lzaW9uIiwic3ViZGl2aXNpb25NYXhJdGVyYXRpb25zIiwiYmluYXJ5U3ViZGl2aWRlIiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiYWJzIiwibVkxIiwibVkyIiwiZ2V0VEZvclgiLCJhWCIsImVhc2luZyIsInBvdyIsInNpbiIsImFjb3MiLCJpc1plcm9WYWx1ZVN0cmluZyIsImlzTm9uZSIsInNhbml0aXplIiwiZmxvYXRSZWdleCIsImlzTnVsbGlzaCIsInNpbmdsZUNvbG9yUmVnZXgiLCJpc0NvbG9yU3RyaW5nIiwidGVzdFByb3AiLCJzcGxpdENvbG9yIiwiYU5hbWUiLCJiTmFtZSIsImNOYW1lIiwiYWxwaGEyIiwibWF0Y2giLCJjbGFtcFJnYlVuaXQiLCJyZ2JVbml0IiwicmdiYSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhJDEiLCJwYXJzZUhleCIsInIiLCJnIiwicGFyc2VJbnQiLCJoZXgiLCJoc2xhIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbG9yUmVnZXgiLCJOVU1CRVJfVE9LRU4iLCJDT0xPUl9UT0tFTiIsIlZBUl9UT0tFTiIsIlZBUl9GVU5DVElPTl9UT0tFTiIsIlNQTElUX1RPS0VOIiwiY29tcGxleFJlZ2V4IiwiYW5hbHlzZUNvbXBsZXhWYWx1ZSIsIm9yaWdpbmFsVmFsdWUiLCJ0b1N0cmluZyIsImluZGV4ZXMiLCJ2YXIiLCJ0eXBlcyIsInRva2VuaXNlZCIsInBhcnNlZFZhbHVlIiwicGFyc2VDb21wbGV4VmFsdWUiLCJjcmVhdGVUcmFuc2Zvcm1lciIsIm51bVNlY3Rpb25zIiwib3V0cHV0IiwiY29udmVydE51bWJlcnNUb1plcm8iLCJnZXRBbmltYXRhYmxlTm9uZSIsInBhcnNlZCIsInRyYW5zZm9ybWVyIiwibWF4RGVmYXVsdHMiLCJhcHBseURlZmF1bHRGaWx0ZXIiLCJzbGljZSIsIm51bWJlcjIiLCJkZWZhdWx0VmFsdWUiLCJmdW5jdGlvblJlZ2V4IiwiZmlsdGVyIiwiZnVuY3Rpb25zIiwiZGVmYXVsdFZhbHVlVHlwZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lQ29sb3IiLCJmaWxsIiwic3Ryb2tlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BDb2xvciIsImJvcmRlclJpZ2h0Q29sb3IiLCJib3JkZXJCb3R0b21Db2xvciIsImJvcmRlckxlZnRDb2xvciIsIldlYmtpdEZpbHRlciIsImdldERlZmF1bHRWYWx1ZVR5cGUiLCJnZXRBbmltYXRhYmxlTm9uZTIiLCJkZWZhdWx0VmFsdWVUeXBlIiwiaW52YWxpZFRlbXBsYXRlcyIsIm1ha2VOb25lS2V5ZnJhbWVzQW5pbWF0YWJsZSIsInVucmVzb2x2ZWRLZXlmcmFtZXMiLCJub25lS2V5ZnJhbWVJbmRleGVzIiwiYW5pbWF0YWJsZVRlbXBsYXRlIiwia2V5ZnJhbWUiLCJub25lSW5kZXgiLCJpc051bU9yUHhUeXBlIiwiZ2V0UG9zRnJvbU1hdHJpeCIsIm1hdHJpeCIsInBvcyIsImdldFRyYW5zbGF0ZUZyb21NYXRyaXgiLCJwb3MyIiwicG9zMyIsIl9iYm94IiwibWF0cml4M2QiLCJ0cmFuc2Zvcm1LZXlzIiwibm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybUtleXMiLCJyZW1vdmVOb25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtIiwicmVtb3ZlZFRyYW5zZm9ybXMiLCJwb3NpdGlvbmFsVmFsdWVzIiwidG9SZXNvbHZlIiwiaXNTY2hlZHVsZWQiLCJhbnlOZWVkc01lYXN1cmVtZW50IiwibWVhc3VyZUFsbEtleWZyYW1lcyIsInJlc29sdmVyc1RvTWVhc3VyZSIsImZyb20iLCJyZXNvbHZlciIsIm5lZWRzTWVhc3VyZW1lbnQiLCJlbGVtZW50c1RvTWVhc3VyZSIsInRyYW5zZm9ybXNUb1Jlc3RvcmUiLCJtZWFzdXJlSW5pdGlhbFN0YXRlIiwicmVzdG9yZSIsIm1lYXN1cmVFbmRTdGF0ZSIsInN1c3BlbmRlZFNjcm9sbFkiLCJzY3JvbGxUbyIsImNvbXBsZXRlIiwicmVhZEFsbEtleWZyYW1lcyIsInJlYWRLZXlmcmFtZXMiLCJmbHVzaEtleWZyYW1lUmVzb2x2ZXJzIiwiS2V5ZnJhbWVSZXNvbHZlciIsIm9uQ29tcGxldGUiLCJtb3Rpb25WYWx1ZTIiLCJpc0FzeW5jIiwic2NoZWR1bGVSZXNvbHZlIiwiY3VycmVudFZhbHVlIiwiZmluYWxLZXlmcmFtZSIsInZhbHVlQXNSZWFkIiwicmVhZFZhbHVlIiwic2V0RmluYWxLZXlmcmFtZSIsInJlbmRlckVuZFN0eWxlcyIsInJlc3VtZSIsImlzTnVtZXJpY2FsU3RyaW5nIiwiaW1wb3J0X21vdGlvbl91dGlsczQiLCJzcGxpdENTU1ZhcmlhYmxlUmVnZXgiLCJwYXJzZUNTU1ZhcmlhYmxlIiwiZXhlYyIsInRva2VuMSIsInRva2VuMiIsImZhbGxiYWNrIiwibWF4RGVwdGgiLCJnZXRWYXJpYWJsZVZhbHVlIiwiZGVwdGgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInRyaW1tZWQiLCJ0ZXN0VmFsdWVUeXBlIiwiYXV0byIsImRpbWVuc2lvblZhbHVlVHlwZXMiLCJmaW5kRGltZW5zaW9uVmFsdWVUeXBlIiwiZmluZCIsIkRPTUtleWZyYW1lc1Jlc29sdmVyIiwicmVzb2x2ZU5vbmVLZXlmcmFtZXMiLCJvcmlnaW5UeXBlIiwidGFyZ2V0VHlwZSIsInBhZ2VZT2Zmc2V0IiwibWVhc3VyZWRPcmlnaW4iLCJtZWFzdXJlVmlld3BvcnRCb3giLCJtZWFzdXJlS2V5ZnJhbWUiLCJmaW5hbEtleWZyYW1lSW5kZXgiLCJ1bnNldFRyYW5zZm9ybU5hbWUiLCJ1bnNldFRyYW5zZm9ybVZhbHVlIiwiaXNBbmltYXRhYmxlIiwiaW1wb3J0X21vdGlvbl9kb20iLCJpbXBvcnRfbW90aW9uX3V0aWxzNSIsImhhc0tleWZyYW1lc0NoYW5nZWQiLCJrZXlmcmFtZXMyIiwiY2FuQW5pbWF0ZSIsIm9yaWdpbktleWZyYW1lIiwidGFyZ2V0S2V5ZnJhbWUiLCJpc09yaWdpbkFuaW1hdGFibGUiLCJpc1RhcmdldEFuaW1hdGFibGUiLCJpc0dlbmVyYXRvciIsImlzTm90TnVsbCIsImdldEZpbmFsS2V5ZnJhbWUiLCJyZXBlYXQiLCJyZXBlYXRUeXBlIiwicmVzb2x2ZWRLZXlmcmFtZXMiLCJNQVhfUkVTT0xWRV9ERUxBWSIsIkJhc2VBbmltYXRpb24iLCJhdXRvcGxheSIsImRlbGF5MiIsInJlcGVhdERlbGF5IiwiaXNTdG9wcGVkIiwiaGFzQXR0ZW1wdGVkUmVzb2x2ZSIsImNyZWF0ZWRBdCIsInVwZGF0ZUZpbmlzaGVkUHJvbWlzZSIsImNhbGNTdGFydFRpbWUiLCJyZXNvbHZlZEF0IiwiX3Jlc29sdmVkIiwib25LZXlmcmFtZXNSZXNvbHZlZCIsImlzR2VuZXJhdG9yNiIsInJlc29sdmVGaW5pc2hlZFByb21pc2UiLCJkdXJhdGlvbiIsInJlc29sdmVkQW5pbWF0aW9uIiwiaW5pdFBsYXliYWNrIiwib25Qb3N0UmVzb2x2ZWQiLCJyZWplY3QiLCJjdXJyZW50RmluaXNoZWRQcm9taXNlIiwiZmxhdHRlbiIsImVhc2UiLCJtaXhOdW1iZXIiLCJ0byIsInByb2dyZXNzOCIsImh1ZVRvUmdiIiwicSIsImhzbGFUb1JnYmEiLCJtaXhJbW1lZGlhdGUiLCJpbXBvcnRfbW90aW9uX3V0aWxzNiIsIm1peExpbmVhckNvbG9yIiwiZnJvbUV4cG8iLCJleHBvIiwic3FydCIsImNvbG9yVHlwZXMiLCJnZXRDb2xvclR5cGUiLCJhc1JHQkEiLCJjb2xvcjIiLCJtb2RlbCIsIm1peENvbG9yIiwiZnJvbVJHQkEiLCJ0b1JHQkEiLCJibGVuZGVkIiwiY29tYmluZUZ1bmN0aW9ucyIsInRyYW5zZm9ybWVycyIsImludmlzaWJsZVZhbHVlcyIsIm1peFZpc2liaWxpdHkiLCJpbXBvcnRfbW90aW9uX3V0aWxzNyIsIm1peE51bWJlcjIiLCJnZXRNaXhlciIsIm1peENvbXBsZXgiLCJtaXhBcnJheSIsIm1peE9iamVjdCIsIm51bVZhbHVlcyIsImJsZW5kVmFsdWUiLCJtYXRjaE9yZGVyIiwib3JkZXJlZE9yaWdpbiIsInBvaW50ZXJzIiwib3JpZ2luSW5kZXgiLCJvcmlnaW5WYWx1ZSIsInRlbXBsYXRlIiwib3JpZ2luU3RhdHMiLCJ0YXJnZXRTdGF0cyIsImNhbkludGVycG9sYXRlIiwibWl4ZXIiLCJ2ZWxvY2l0eVNhbXBsZUR1cmF0aW9uIiwiY2FsY0dlbmVyYXRvclZlbG9jaXR5IiwicmVzb2x2ZVZhbHVlIiwicHJldlQiLCJzcHJpbmdEZWZhdWx0cyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXNzIiwiYm91bmNlIiwidmlzdWFsRHVyYXRpb24iLCJyZXN0U3BlZWQiLCJncmFudWxhciIsInJlc3REZWx0YSIsIm1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJtaW5EYW1waW5nIiwibWF4RGFtcGluZyIsImltcG9ydF9tb3Rpb25fdXRpbHM4Iiwic2FmZU1pbiIsImVudmVsb3BlIiwiZGVyaXZhdGl2ZSIsInNlY29uZHNUb01pbGxpc2Vjb25kcyIsImRhbXBpbmdSYXRpbyIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsInVuZGFtcGVkRnJlcTIiLCJleHBvbmVudGlhbERlY2F5IiwiY2FsY0FuZ3VsYXJGcmVxIiwiZXhwIiwiZCIsImYiLCJmYWN0b3IiLCJpbml0aWFsR3Vlc3MiLCJ1bmRhbXBlZEZyZXEiLCJhcHByb3hpbWF0ZVJvb3QiLCJyb290SXRlcmF0aW9ucyIsInJlc3VsdCIsImltcG9ydF9tb3Rpb25fZG9tMiIsImltcG9ydF9tb3Rpb25fdXRpbHM5IiwiZHVyYXRpb25LZXlzIiwicGh5c2ljc0tleXMiLCJpc1NwcmluZ1R5cGUiLCJnZXRTcHJpbmdPcHRpb25zIiwic3ByaW5nT3B0aW9ucyIsImlzUmVzb2x2ZWRGcm9tRHVyYXRpb24iLCJyb290IiwiUEkiLCJkZXJpdmVkIiwib3B0aW9uc09yVmlzdWFsRHVyYXRpb24iLCJkb25lIiwiaW5pdGlhbFZlbG9jaXR5IiwiaW5pdGlhbERlbHRhIiwidW5kYW1wZWRBbmd1bGFyRnJlcSIsImlzR3JhbnVsYXJTY2FsZSIsInJlc29sdmVTcHJpbmciLCJhbmd1bGFyRnJlcSIsImNvcyIsImRhbXBlZEFuZ3VsYXJGcmVxIiwiZnJlcUZvclQiLCJzaW5oIiwiY29zaCIsImdlbmVyYXRvciIsImNhbGN1bGF0ZWREdXJhdGlvbiIsImN1cnJlbnRWZWxvY2l0eSIsImlzQmVsb3dWZWxvY2l0eVRocmVzaG9sZCIsImlzQmVsb3dEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJjYWxjR2VuZXJhdG9yRHVyYXRpb24iLCJtYXhHZW5lcmF0b3JEdXJhdGlvbiIsImdlbmVyYXRlTGluZWFyRWFzaW5nIiwicG93ZXIiLCJ0aW1lQ29uc3RhbnQiLCJib3VuY2VEYW1waW5nIiwiYm91bmNlU3RpZmZuZXNzIiwibW9kaWZ5VGFyZ2V0IiwiaXNPdXRPZkJvdW5kcyIsIm5lYXJlc3RCb3VuZGFyeSIsImFtcGxpdHVkZSIsImlkZWFsIiwiY2FsY0RlbHRhIiwiY2FsY0xhdGVzdCIsImFwcGx5RnJpY3Rpb24iLCJ0aW1lUmVhY2hlZEJvdW5kYXJ5Iiwic3ByaW5nJDEiLCJjaGVja0NhdGNoQm91bmRhcnkiLCJoYXNVcGRhdGVkRnJhbWUiLCJpc0Vhc2luZ0FycmF5IiwiZWFzZTIiLCJpbXBvcnRfbW90aW9uX2RvbTMiLCJpbXBvcnRfbW90aW9uX3V0aWxzMTAiLCJlYXNpbmdMb29rdXAiLCJsaW5lYXIiLCJlYXNpbmdEZWZpbml0aW9uVG9GdW5jdGlvbiIsImlzQmV6aWVyRGVmaW5pdGlvbiIsIngxIiwieTEiLCJ4MiIsInkyIiwiaW1wb3J0X21vdGlvbl91dGlsczExIiwiY3JlYXRlTWl4ZXJzIiwiY3VzdG9tTWl4ZXIiLCJtaXhlcnMiLCJtaXhlckZhY3RvcnkiLCJudW1NaXhlcnMiLCJlYXNpbmdGdW5jdGlvbiIsImlucHV0IiwiaXNDbGFtcCIsImlucHV0TGVuZ3RoIiwiaXNaZXJvRGVsdGFSYW5nZSIsInJldmVyc2UiLCJpbnRlcnBvbGF0b3IiLCJwcm9ncmVzc0luUmFuZ2UiLCJpbXBvcnRfbW90aW9uX3V0aWxzMTIiLCJmaWxsT2Zmc2V0IiwicmVtYWluaW5nIiwib2Zmc2V0UHJvZ3Jlc3MiLCJkZWZhdWx0T2Zmc2V0IiwiY29udmVydE9mZnNldFRvVGltZXMiLCJvIiwiZGVmYXVsdEVhc2luZyIsImtleWZyYW1lVmFsdWVzIiwidGltZXMiLCJlYXNpbmdGdW5jdGlvbnMiLCJhYnNvbHV0ZVRpbWVzIiwibWFwVGltZVRvS2V5ZnJhbWUiLCJmcmFtZWxvb3BEcml2ZXIiLCJwYXNzVGltZXN0YW1wIiwiaW1wb3J0X21vdGlvbl9kb200IiwiaW1wb3J0X21vdGlvbl91dGlsczEzIiwiZ2VuZXJhdG9ycyIsImRlY2F5IiwidHdlZW4iLCJwZXJjZW50VG9Qcm9ncmVzcyIsInBlcmNlbnQyIiwiTWFpblRocmVhZEFuaW1hdGlvbiIsImhvbGRUaW1lIiwiY2FuY2VsVGltZSIsInBsYXliYWNrU3BlZWQiLCJwZW5kaW5nUGxheVN0YXRlIiwic3RhcnRUaW1lIiwidGVhcmRvd24iLCJvblN0b3AiLCJLZXlmcmFtZVJlc29sdmVyJDEiLCJvblJlc29sdmVkIiwia2V5ZnJhbWVzJDEiLCJnZW5lcmF0b3JGYWN0b3J5IiwibWFwUGVyY2VudFRvS2V5ZnJhbWVzIiwibWlycm9yZWRHZW5lcmF0b3IiLCJyZXNvbHZlZER1cmF0aW9uIiwidG90YWxEdXJhdGlvbiIsInBsYXkiLCJwYXVzZSIsInRpY2siLCJzYW1wbGUiLCJrZXlmcmFtZXMzIiwic3BlZWQiLCJ0aW1lV2l0aG91dERlbGF5IiwiaXNJbkRlbGF5UGhhc2UiLCJlbGFwc2VkIiwiZnJhbWVHZW5lcmF0b3IiLCJjdXJyZW50SXRlcmF0aW9uIiwiZmxvb3IiLCJpdGVyYXRpb25Qcm9ncmVzcyIsImlzT2RkSXRlcmF0aW9uIiwiaXNBbmltYXRpb25GaW5pc2hlZCIsImZpbmlzaCIsImRyaXZlciIsIm5ld1NwZWVkIiwiaGFzQ2hhbmdlZCIsIm9uUGxheSIsIm5vdzIiLCJzdG9wRHJpdmVyIiwidGltZTIiLCJhY2NlbGVyYXRlZFZhbHVlcyIsImltcG9ydF9tb3Rpb25fZG9tNSIsInN0YXJ0V2FhcGlBbmltYXRpb24iLCJ2YWx1ZU5hbWUiLCJrZXlmcmFtZU9wdGlvbnMiLCJtYXBFYXNpbmdUb05hdGl2ZUVhc2luZyIsIml0ZXJhdGlvbnMiLCJkaXJlY3Rpb24iLCJpbXBvcnRfbW90aW9uX3V0aWxzMTQiLCJzdXBwb3J0c1dhYXBpIiwibWVtbyIsIkVsZW1lbnQiLCJpbXBvcnRfbW90aW9uX2RvbTYiLCJpbXBvcnRfbW90aW9uX3V0aWxzMTUiLCJzYW1wbGVEZWx0YSIsInJlcXVpcmVzUHJlZ2VuZXJhdGVkS2V5ZnJhbWVzIiwiaXNXYWFwaVN1cHBvcnRlZEVhc2luZyIsInByZWdlbmVyYXRlS2V5ZnJhbWVzIiwic2FtcGxlQW5pbWF0aW9uIiwicHJlZ2VuZXJhdGVkS2V5ZnJhbWVzIiwidW5zdXBwb3J0ZWRFYXNpbmdGdW5jdGlvbnMiLCJpc1Vuc3VwcG9ydGVkRWFzZSIsInN1cHBvcnRzTGluZWFyRWFzaW5nIiwibW90aW9uVmFsdWUzIiwicHJlZ2VuZXJhdGVkQW5pbWF0aW9uIiwicGVuZGluZ1RpbWVsaW5lIiwiYXR0YWNoVGltZWxpbmUiLCJvbmZpbmlzaCIsInBsYXliYWNrUmF0ZSIsInBsYXlTdGF0ZSIsInRpbWVsaW5lIiwic2FtcGxlVGltZSIsInN1cHBvcnRzIiwiSFRNTEVsZW1lbnQiLCJ1bmRlckRhbXBlZFNwcmluZyIsImNyaXRpY2FsbHlEYW1wZWRTcHJpbmciLCJrZXlmcmFtZXNUcmFuc2l0aW9uIiwiZ2V0RGVmYXVsdFRyYW5zaXRpb24iLCJ2YWx1ZUtleSIsImlzVHJhbnNpdGlvbkRlZmluZWQiLCJ3aGVuIiwiX2RlbGF5IiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJrZXlzIiwiaW1wb3J0X21vdGlvbl9kb203IiwiaW1wb3J0X21vdGlvbl91dGlsczE2IiwiYW5pbWF0ZU1vdGlvblZhbHVlIiwiaXNIYW5kb2ZmIiwidmFsdWVUcmFuc2l0aW9uIiwiZ2V0VmFsdWVUcmFuc2l0aW9uIiwic2hvdWxkU2tpcCIsIkdyb3VwUGxheWJhY2tDb250cm9scyIsImltcG9ydF9tb3Rpb25fZG9tOCIsInNob3VsZEJsb2NrQW5pbWF0aW9uIiwicHJvdGVjdGVkS2V5cyIsIm5lZWRzQW5pbWF0aW5nIiwic2hvdWxkQmxvY2siLCJhbmltYXRlVGFyZ2V0IiwidGFyZ2V0QW5kVHJhbnNpdGlvbiIsInRyYW5zaXRpb25PdmVycmlkZSIsImFuaW1hdGlvbnMyIiwiYW5pbWF0aW9uVHlwZVN0YXRlIiwiZ2V0U3RhdGUiLCJNb3Rpb25IYW5kb2ZmQW5pbWF0aW9uIiwiYXBwZWFySWQiLCJzaG91bGRSZWR1Y2VNb3Rpb24iLCJhbGwiLCJhbmltYXRlVmFyaWFudCIsInZhcmlhbnQiLCJnZXRBbmltYXRpb24iLCJnZXRDaGlsZEFuaW1hdGlvbnMiLCJ2YXJpYW50Q2hpbGRyZW4iLCJmb3J3YXJkRGVsYXkiLCJhbmltYXRlQ2hpbGRyZW4iLCJmaXJzdCIsImxhc3QiLCJtYXhTdGFnZ2VyRHVyYXRpb24iLCJnZW5lcmF0ZVN0YWdnZXJEdXJhdGlvbiIsInNvcnQiLCJzb3J0QnlUcmVlT3JkZXIiLCJzb3J0Tm9kZVBvc2l0aW9uIiwicmVzb2x2ZWREZWZpbml0aW9uIiwibnVtVmFyaWFudFByb3BzIiwiZ2V0VmFyaWFudENvbnRleHQiLCJjb250ZXh0MiIsInJldmVyc2VQcmlvcml0eU9yZGVyIiwibnVtQW5pbWF0aW9uVHlwZXMiLCJhbmltYXRlTGlzdCIsImNyZWF0ZUFuaW1hdGlvblN0YXRlIiwiY3JlYXRlU3RhdGUiLCJidWlsZFJlc29sdmVkVHlwZVZhbHVlcyIsInNldEFuaW1hdGVGdW5jdGlvbiIsIm1ha2VBbmltYXRvciIsImNoYW5nZWRBY3RpdmVUeXBlIiwicmVtb3ZlZEtleXMiLCJlbmNvdW50ZXJlZEtleXMiLCJyZW1vdmVkVmFyaWFudEluZGV4IiwiSW5maW5pdHkiLCJ0eXBlU3RhdGUiLCJwcm9wSXNWYXJpYW50IiwiYWN0aXZlRGVsdGEiLCJpc0FjdGl2ZSIsImlzSW5oZXJpdGVkIiwibWFudWFsbHlBbmltYXRlT25Nb3VudCIsInByZXZQcm9wIiwidmFyaWFudERpZENoYW5nZSIsImNoZWNrVmFyaWFudHNEaWRDaGFuZ2UiLCJzaG91bGRBbmltYXRlVHlwZSIsImhhbmRsZWRSZW1vdmVkVmFsdWVzIiwiZGVmaW5pdGlvbkxpc3QiLCJyZXNvbHZlZFZhbHVlcyIsInByZXZSZXNvbHZlZFZhbHVlcyIsImFsbEtleXMiLCJtYXJrVG9BbmltYXRlIiwidmFsdWVIYXNDaGFuZ2VkIiwid2lsbEFuaW1hdGVWaWFQYXJlbnQiLCJmYWxsYmFja0FuaW1hdGlvbiIsImZhbGxiYWNrVGFyZ2V0IiwiZ2V0QmFzZVRhcmdldCIsInNob3VsZEFuaW1hdGUiLCJzZXRBY3RpdmUiLCJyZXNldCIsImNyZWF0ZVR5cGVTdGF0ZSIsIndoaWxlSW5WaWV3Iiwid2hpbGVIb3ZlciIsIndoaWxlRHJhZyIsIndoaWxlRm9jdXMiLCJGZWF0dXJlIiwiQW5pbWF0aW9uRmVhdHVyZSIsInVwZGF0ZUFuaW1hdGlvbkNvbnRyb2xzU3Vic2NyaXB0aW9uIiwidW5tb3VudENvbnRyb2xzIiwicHJldkFuaW1hdGUiLCJFeGl0QW5pbWF0aW9uRmVhdHVyZSIsImFyZ3VtZW50cyIsInByZXZJc1ByZXNlbnQiLCJwcmV2UHJlc2VuY2VDb250ZXh0IiwiZXhpdEFuaW1hdGlvbiIsImFkZERvbUV2ZW50IiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbXBvcnRfbW90aW9uX2RvbTkiLCJleHRyYWN0RXZlbnRJbmZvIiwiZXZlbnQiLCJwb2ludCIsInBhZ2VYIiwicGFnZVkiLCJpc1ByaW1hcnlQb2ludGVyIiwieERlbHRhIiwieURlbHRhIiwiaW1wb3J0X21vdGlvbl9kb20xMCIsImltcG9ydF9tb3Rpb25fdXRpbHMxNyIsIlBhblNlc3Npb24iLCJoYW5kbGVycyIsImNvbnRleHRXaW5kb3ciLCJkcmFnU25hcFRvT3JpZ2luIiwic3RhcnRFdmVudCIsImxhc3RNb3ZlRXZlbnQiLCJsYXN0TW92ZUV2ZW50SW5mbyIsInVwZGF0ZVBvaW50IiwiaW5mbzIiLCJnZXRQYW5JbmZvIiwiaGlzdG9yeSIsImlzUGFuU3RhcnRlZCIsImlzRGlzdGFuY2VQYXN0VGhyZXNob2xkIiwicG9pbnQzIiwidGltZXN0YW1wMiIsIm9uU3RhcnQiLCJvbk1vdmUiLCJoYW5kbGVQb2ludGVyTW92ZSIsImV2ZW50MiIsInRyYW5zZm9ybVBvaW50IiwiaGFuZGxlUG9pbnRlclVwIiwiZW5kIiwib25FbmQiLCJvblNlc3Npb25FbmQiLCJyZXN1bWVBbmltYXRpb24iLCJwYW5JbmZvIiwiaW5mbyIsImluaXRpYWxJbmZvIiwicG9pbnQyIiwib25TZXNzaW9uU3RhcnQiLCJyZW1vdmVMaXN0ZW5lcnMiLCJ1cGRhdGVIYW5kbGVycyIsInN1YnRyYWN0UG9pbnQiLCJsYXN0RGV2aWNlUG9pbnQiLCJzdGFydERldmljZVBvaW50IiwidGltZURlbHRhIiwidGltZXN0YW1wZWRQb2ludCIsImxhc3RQb2ludCIsIlNDQUxFX1BSRUNJU0lPTiIsIlNDQUxFX01JTiIsIlNDQUxFX01BWCIsIlRSQU5TTEFURV9QUkVDSVNJT04iLCJUUkFOU0xBVEVfTUlOIiwiVFJBTlNMQVRFX01BWCIsImF4aXMiLCJpc05lYXIiLCJtYXhEaXN0YW5jZSIsImNhbGNBeGlzRGVsdGEiLCJvcmlnaW5Qb2ludCIsInRyYW5zbGF0ZSIsImNhbGNCb3hEZWx0YSIsImNhbGNSZWxhdGl2ZUF4aXMiLCJyZWxhdGl2ZSIsImNhbGNSZWxhdGl2ZUJveCIsImNhbGNSZWxhdGl2ZUF4aXNQb3NpdGlvbiIsImNhbGNSZWxhdGl2ZVBvc2l0aW9uIiwiaW1wb3J0X21vdGlvbl91dGlsczE4IiwiYXBwbHlDb25zdHJhaW50cyIsImVsYXN0aWMiLCJjYWxjUmVsYXRpdmVBeGlzQ29uc3RyYWludHMiLCJjYWxjUmVsYXRpdmVDb25zdHJhaW50cyIsImxheW91dEJveCIsImNhbGNWaWV3cG9ydEF4aXNDb25zdHJhaW50cyIsImxheW91dEF4aXMiLCJjb25zdHJhaW50c0F4aXMiLCJjYWxjVmlld3BvcnRDb25zdHJhaW50cyIsImNvbnN0cmFpbnRzQm94IiwiY2FsY09yaWdpbjIiLCJzb3VyY2VMZW5ndGgiLCJ0YXJnZXRMZW5ndGgiLCJyZWJhc2VBeGlzQ29uc3RyYWludHMiLCJjb25zdHJhaW50cyIsInJlbGF0aXZlQ29uc3RyYWludHMiLCJkZWZhdWx0RWxhc3RpYyIsInJlc29sdmVEcmFnRWxhc3RpYyIsImRyYWdFbGFzdGljIiwicmVzb2x2ZUF4aXNFbGFzdGljIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsInJlc29sdmVQb2ludEVsYXN0aWMiLCJsYWJlbCIsImNyZWF0ZUF4aXNEZWx0YSIsImNyZWF0ZURlbHRhIiwiY3JlYXRlQXhpcyIsImVhY2hBeGlzIiwiY29udmVydEJvdW5kaW5nQm94VG9Cb3giLCJjb252ZXJ0Qm94VG9Cb3VuZGluZ0JveCIsInRyYW5zZm9ybUJveFBvaW50cyIsInRyYW5zZm9ybVBvaW50MiIsInRvcExlZnQiLCJib3R0b21SaWdodCIsImlzSWRlbnRpdHlTY2FsZSIsInNjYWxlMiIsImhhc1NjYWxlIiwiaGFzVHJhbnNmb3JtIiwiaGFzMkRUcmFuc2xhdGUiLCJpczJEVHJhbnNsYXRlIiwic2NhbGVQb2ludCIsImRpc3RhbmNlRnJvbU9yaWdpbiIsInNjYWxlZCIsImFwcGx5UG9pbnREZWx0YSIsImJveFNjYWxlIiwiYXBwbHlBeGlzRGVsdGEiLCJhcHBseUJveERlbHRhIiwiYm94IiwiVFJFRV9TQ0FMRV9TTkFQX01JTiIsIlRSRUVfU0NBTEVfU05BUF9NQVgiLCJhcHBseVRyZWVEZWx0YXMiLCJ0cmVlU2NhbGUiLCJ0cmVlUGF0aCIsImlzU2hhcmVkVHJhbnNpdGlvbiIsInRyZWVMZW5ndGgiLCJwcm9qZWN0aW9uRGVsdGEiLCJkaXNwbGF5IiwidHJhbnNmb3JtQm94IiwidHJhbnNsYXRlQXhpcyIsImRpc3RhbmNlMiIsInRyYW5zZm9ybUF4aXMiLCJheGlzVHJhbnNsYXRlIiwiYXhpc1NjYWxlIiwiYXhpc09yaWdpbiIsIm1lYXN1cmVQYWdlQm94Iiwicm9vdFByb2plY3Rpb25Ob2RlMiIsInZpZXdwb3J0Qm94Iiwic2Nyb2xsMiIsImdldENvbnRleHRXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJpbXBvcnRfbW90aW9uX3V0aWxzMTkiLCJpbXBvcnRfbW90aW9uX2RvbTExIiwiZWxlbWVudERyYWdDb250cm9scyIsIlZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMiLCJvcGVuRHJhZ0xvY2siLCJpc0RyYWdnaW5nIiwiY3VycmVudERpcmVjdGlvbiIsImhhc011dGF0ZWRDb25zdHJhaW50cyIsIm9yaWdpbkV2ZW50Iiwic25hcFRvQ3Vyc29yIiwiZHJhZ1NuYXBUb09yaWdpbjIiLCJwYXVzZUFuaW1hdGlvbiIsInN0b3BBbmltYXRpb24iLCJkcmFnUHJvcGFnYXRpb24iLCJvbkRyYWdTdGFydCIsInNldERyYWdMb2NrIiwicmVzb2x2ZUNvbnN0cmFpbnRzIiwiaXNBbmltYXRpb25CbG9ja2VkIiwiZ2V0QXhpc01vdGlvblZhbHVlIiwibWVhc3VyZWRBeGlzIiwiZHJhZ0RpcmVjdGlvbkxvY2siLCJvbkRpcmVjdGlvbkxvY2siLCJvbkRyYWciLCJnZXRDdXJyZW50RGlyZWN0aW9uIiwidXBkYXRlQXhpcyIsImdldEFuaW1hdGlvblN0YXRlIiwicGFuU2Vzc2lvbiIsImdldFRyYW5zZm9ybVBhZ2VQb2ludCIsIm9uRHJhZ0VuZCIsIl9wb2ludCIsInNob3VsZERyYWciLCJheGlzVmFsdWUiLCJtZWFzdXJlIiwicHJldkNvbnN0cmFpbnRzIiwicmVzb2x2ZVJlZkNvbnN0cmFpbnRzIiwib25NZWFzdXJlRHJhZ0NvbnN0cmFpbnRzIiwiY29uc3RyYWludHNFbGVtZW50IiwibWVhc3VyZWRDb25zdHJhaW50cyIsInVzZXJDb25zdHJhaW50cyIsImRyYWdNb21lbnR1bSIsImRyYWdUcmFuc2l0aW9uIiwib25EcmFnVHJhbnNpdGlvbkVuZCIsIm1vbWVudHVtQW5pbWF0aW9ucyIsImluZXJ0aWEyIiwic3RhcnRBeGlzVmFsdWVBbmltYXRpb24iLCJkcmFnS2V5IiwiZXh0ZXJuYWxNb3Rpb25WYWx1ZSIsInNjYWxlUG9zaXRpb25XaXRoaW5Db25zdHJhaW50cyIsImJveFByb2dyZXNzIiwidXBkYXRlU2Nyb2xsIiwidXBkYXRlTGF5b3V0IiwiYWRkTGlzdGVuZXJzIiwic3RvcFBvaW50ZXJMaXN0ZW5lciIsIm1lYXN1cmVEcmFnQ29uc3RyYWludHMiLCJzdG9wTWVhc3VyZUxheW91dExpc3RlbmVyIiwic3RvcFJlc2l6ZUxpc3RlbmVyIiwic3RvcExheW91dFVwZGF0ZUxpc3RlbmVyIiwiaGFzTGF5b3V0Q2hhbmdlZCIsImxvY2tUaHJlc2hvbGQiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjAiLCJEcmFnR2VzdHVyZSIsInJlbW92ZUdyb3VwQ29udHJvbHMiLCJjb250cm9scyIsImRyYWdDb250cm9scyIsImltcG9ydF9tb3Rpb25fdXRpbHMyMSIsImFzeW5jSGFuZGxlciIsIlBhbkdlc3R1cmUiLCJyZW1vdmVQb2ludGVyRG93bkxpc3RlbmVyIiwib25Qb2ludGVyRG93biIsInBvaW50ZXJEb3duRXZlbnQiLCJzZXNzaW9uIiwiY3JlYXRlUGFuSGFuZGxlcnMiLCJvblBhblNlc3Npb25TdGFydCIsIm9uUGFuU3RhcnQiLCJvblBhbiIsIm9uUGFuRW5kIiwiZ2xvYmFsUHJvamVjdGlvblN0YXRlIiwiaGFzQW5pbWF0ZWRTaW5jZVJlc2l6ZSIsImhhc0V2ZXJVcGRhdGVkIiwicGl4ZWxzVG9QZXJjZW50IiwicGl4ZWxzIiwiY29ycmVjdEJvcmRlclJhZGl1cyIsImNvcnJlY3QiLCJjb3JyZWN0Qm94U2hhZG93Iiwib3JpZ2luYWwiLCJzaGFkb3ciLCJ4U2NhbGUiLCJ5U2NhbGUiLCJhdmVyYWdlU2NhbGUiLCJpbXBvcnRfanN4X3J1bnRpbWU4IiwiaW1wb3J0X3JlYWN0MjgiLCJNZWFzdXJlTGF5b3V0V2l0aENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImxheW91dEdyb3VwIiwic3dpdGNoTGF5b3V0R3JvdXAiLCJkZWZhdWx0U2NhbGVDb3JyZWN0b3JzIiwiZGlkVXBkYXRlIiwibGF5b3V0RGVwZW5kZW5jeSIsInByb21vdGUiLCJyZWxlZ2F0ZSIsInN0YWNrIiwiZ2V0U3RhY2siLCJtZW1iZXJzIiwiY3VycmVudEFuaW1hdGlvbiIsImlzTGVhZCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicHJvbW90ZUNvbnRleHQiLCJzY2hlZHVsZUNoZWNrQWZ0ZXJVbm1vdW50IiwiZGVyZWdpc3RlciIsImFwcGx5VG8iLCJib3hTaGFkb3ciLCJhbmltYXRlU2luZ2xlVmFsdWUiLCJtb3Rpb25WYWx1ZSQxIiwiaXNTVkdFbGVtZW50IiwiU1ZHRWxlbWVudCIsImNvbXBhcmVCeURlcHRoIiwiaXNEaXJ0eSIsImltcG9ydF9tb3Rpb25fdXRpbHMyMiIsInRpbWVvdXQiLCJjaGVja0VsYXBzZWQiLCJkZWxheUluU2Vjb25kcyIsImltcG9ydF9tb3Rpb25fdXRpbHMyMyIsImJvcmRlcnMiLCJudW1Cb3JkZXJzIiwiYXNOdW1iZXIiLCJpc1B4IiwibWl4VmFsdWVzIiwiZm9sbG93IiwibGVhZCIsInNob3VsZENyb3NzZmFkZU9wYWNpdHkiLCJpc09ubHlNZW1iZXIiLCJlYXNlQ3Jvc3NmYWRlSW4iLCJvcGFjaXR5RXhpdCIsImVhc2VDcm9zc2ZhZGVPdXQiLCJib3JkZXJMYWJlbCIsImZvbGxvd1JhZGl1cyIsImdldFJhZGl1cyIsImxlYWRSYWRpdXMiLCJjYW5NaXgiLCJyYWRpdXNOYW1lIiwiY29tcHJlc3MiLCJjb3B5QXhpc0ludG8iLCJvcmlnaW5BeGlzIiwiY29weUJveEludG8iLCJvcmlnaW5Cb3giLCJjb3B5QXhpc0RlbHRhSW50byIsIm9yaWdpbkRlbHRhIiwicmVtb3ZlUG9pbnREZWx0YSIsInJlbW92ZUF4aXNEZWx0YSIsInNvdXJjZUF4aXMiLCJyZWxhdGl2ZVByb2dyZXNzIiwicmVtb3ZlQXhpc1RyYW5zZm9ybXMiLCJ0cmFuc2Zvcm1zIiwic2NhbGVLZXkiLCJvcmlnaW5LZXkiLCJ4S2V5cyIsInlLZXlzIiwicmVtb3ZlQm94VHJhbnNmb3JtcyIsInNvdXJjZUJveCIsImlzQXhpc0RlbHRhWmVybyIsImlzRGVsdGFaZXJvIiwiYXhpc0VxdWFscyIsImJveEVxdWFscyIsImF4aXNFcXVhbHNSb3VuZGVkIiwiYm94RXF1YWxzUm91bmRlZCIsImFzcGVjdFJhdGlvIiwiYXhpc0RlbHRhRXF1YWxzIiwiTm9kZVN0YWNrIiwic2NoZWR1bGVSZW5kZXIiLCJwcmV2TGVhZCIsImluZGV4T2ZOb2RlIiwiZmluZEluZGV4IiwibWVtYmVyIiwicHJlc2VydmVGb2xsb3dPcGFjaXR5Iiwic2hvdyIsInJlc3VtZUZyb20iLCJwcmVzZXJ2ZU9wYWNpdHkiLCJzbmFwc2hvdCIsImFuaW1hdGlvblZhbHVlcyIsImlzVXBkYXRpbmciLCJjcm9zc2ZhZGUiLCJoaWRlIiwiZXhpdEFuaW1hdGlvbkNvbXBsZXRlIiwicmVzdW1pbmdGcm9tIiwicmVtb3ZlTGVhZFNuYXBzaG90IiwiYnVpbGRQcm9qZWN0aW9uVHJhbnNmb3JtIiwibGF0ZXN0VHJhbnNmb3JtIiwieFRyYW5zbGF0ZSIsInlUcmFuc2xhdGUiLCJ6VHJhbnNsYXRlIiwiZWxlbWVudFNjYWxlWCIsImVsZW1lbnRTY2FsZVkiLCJpbXBvcnRfbW90aW9uX2RvbTEyIiwiaW1wb3J0X21vdGlvbl91dGlsczI0IiwibWV0cmljcyIsInRvdGFsTm9kZXMiLCJyZXNvbHZlZFRhcmdldERlbHRhcyIsInJlY2FsY3VsYXRlZFByb2plY3Rpb24iLCJpc0RlYnVnIiwiTW90aW9uRGVidWciLCJ0cmFuc2Zvcm1BeGVzIiwiaGlkZGVuVmlzaWJpbGl0eSIsInZpc2liaWxpdHkiLCJhbmltYXRpb25UYXJnZXQiLCJpZDIiLCJyZXNldERpc3RvcnRpbmdUcmFuc2Zvcm0iLCJzaGFyZWRBbmltYXRpb25WYWx1ZXMiLCJzZXRTdGF0aWNWYWx1ZSIsImNhbmNlbFRyZWVPcHRpbWlzZWRUcmFuc2Zvcm1BbmltYXRpb25zIiwicHJvamVjdGlvbk5vZGUiLCJoYXNDaGVja2VkT3B0aW1pc2VkQXBwZWFyIiwiTW90aW9uQ2FuY2VsT3B0aW1pc2VkQW5pbWF0aW9uIiwiY3JlYXRlUHJvamVjdGlvbk5vZGUyIiwiYXR0YWNoUmVzaXplTGlzdGVuZXIiLCJkZWZhdWx0UGFyZW50IiwibWVhc3VyZVNjcm9sbCIsImNoZWNrSXNTY3JvbGxSb290IiwicmVzZXRUcmFuc2Zvcm0iLCJhbmltYXRpb25JZCIsImlzVHJlZUFuaW1hdGluZyIsImlzUHJvamVjdGlvbkRpcnR5IiwiaXNTaGFyZWRQcm9qZWN0aW9uRGlydHkiLCJpc1RyYW5zZm9ybURpcnR5IiwidXBkYXRlTWFudWFsbHlCbG9ja2VkIiwidXBkYXRlQmxvY2tlZEJ5UmVzaXplIiwiaXNTVkciLCJuZWVkc1Jlc2V0Iiwic2hvdWxkUmVzZXRUcmFuc2Zvcm0iLCJldmVudEhhbmRsZXJzIiwiaGFzVHJlZUFuaW1hdGVkIiwidXBkYXRlU2NoZWR1bGVkIiwic2NoZWR1bGVVcGRhdGUiLCJwcm9qZWN0aW9uVXBkYXRlU2NoZWR1bGVkIiwiY2hlY2tVcGRhdGVGYWlsZWQiLCJjbGVhckFsbFNuYXBzaG90cyIsInVwZGF0ZVByb2plY3Rpb24iLCJwcm9wYWdhdGVEaXJ0eU5vZGVzIiwicmVzb2x2ZVRhcmdldERlbHRhIiwiY2FsY1Byb2plY3Rpb24iLCJjbGVhbkRpcnR5Tm9kZXMiLCJyZWNvcmQiLCJyZXNvbHZlZFJlbGF0aXZlVGFyZ2V0QXQiLCJoYXNQcm9qZWN0ZWQiLCJpc1Zpc2libGUiLCJhbmltYXRpb25Qcm9ncmVzcyIsInNoYXJlZE5vZGVzIiwicGF0aCIsIm5vdGlmeUxpc3RlbmVycyIsInN1YnNjcmlwdGlvbk1hbmFnZXIiLCJoYXNMaXN0ZW5lcnMiLCJjYW5jZWxEZWxheSIsInJlc2l6ZVVuYmxvY2tVcGRhdGUiLCJmaW5pc2hBbmltYXRpb24iLCJyZWdpc3RlclNoYXJlZE5vZGUiLCJoYXNSZWxhdGl2ZVRhcmdldENoYW5nZWQiLCJuZXdMYXlvdXQiLCJpc1RyZWVBbmltYXRpb25CbG9ja2VkIiwicmVsYXRpdmVUYXJnZXQiLCJsYXlvdXRUcmFuc2l0aW9uIiwiZGVmYXVsdExheW91dFRyYW5zaXRpb24iLCJvbkxheW91dEFuaW1hdGlvblN0YXJ0Iiwib25MYXlvdXRBbmltYXRpb25Db21wbGV0ZSIsInRhcmdldENoYW5nZWQiLCJ0YXJnZXRMYXlvdXQiLCJoYXNPbmx5UmVsYXRpdmVUYXJnZXRDaGFuZ2VkIiwic2V0QW5pbWF0aW9uT3JpZ2luIiwiYW5pbWF0aW9uT3B0aW9ucyIsImJsb2NrVXBkYXRlIiwidW5ibG9ja1VwZGF0ZSIsImlzVXBkYXRlQmxvY2tlZCIsInN0YXJ0VXBkYXRlIiwicmVzZXRTa2V3QW5kUm90YXRpb24iLCJnZXRUcmFuc2Zvcm1UZW1wbGF0ZSIsInNob3VsZE5vdGlmeUxpc3RlbmVycyIsInByZXZUcmFuc2Zvcm1UZW1wbGF0ZVZhbHVlIiwidXBkYXRlU25hcHNob3QiLCJ1cGRhdGVXYXNCbG9ja2VkIiwiY2xlYXJNZWFzdXJlbWVudHMiLCJjbGVhcklzTGF5b3V0RGlydHkiLCJyZXNldFRyYW5zZm9ybVN0eWxlIiwibm90aWZ5TGF5b3V0VXBkYXRlIiwiY2xlYXJTbmFwc2hvdCIsInJlbW92ZUxlYWRTbmFwc2hvdHMiLCJzY2hlZHVsZVVwZGF0ZVByb2plY3Rpb24iLCJwcmV2TGF5b3V0IiwibGF5b3V0Q29ycmVjdGVkIiwicGhhc2UiLCJpc1Jvb3QiLCJ3YXNSb290IiwiaXNSZXNldFJlcXVlc3RlZCIsImhhc1Byb2plY3Rpb24iLCJ0cmFuc2Zvcm1UZW1wbGF0ZVZhbHVlIiwidHJhbnNmb3JtVGVtcGxhdGVIYXNDaGFuZ2VkIiwicmVtb3ZlVHJhbnNmb3JtIiwicGFnZUJveCIsInJlbW92ZUVsZW1lbnRTY3JvbGwiLCJyb3VuZEJveCIsIm1lYXN1cmVkQm94Iiwid2FzSW5TY3JvbGxSb290IiwiY2hlY2tOb2RlV2FzU2Nyb2xsUm9vdCIsImJveFdpdGhvdXRTY3JvbGwiLCJhcHBseVRyYW5zZm9ybSIsInRyYW5zZm9ybU9ubHkiLCJ3aXRoVHJhbnNmb3JtcyIsImJveFdpdGhvdXRUcmFuc2Zvcm0iLCJub2RlQm94Iiwic2V0VGFyZ2V0RGVsdGEiLCJ0YXJnZXREZWx0YSIsImZvcmNlUmVsYXRpdmVQYXJlbnRUb1Jlc29sdmVUYXJnZXQiLCJyZWxhdGl2ZVBhcmVudCIsImZvcmNlUmVjYWxjdWxhdGlvbiIsImdldExlYWQiLCJpc1NoYXJlZCIsImNhblNraXAiLCJhdHRlbXB0VG9SZXNvbHZlUmVsYXRpdmVUYXJnZXQiLCJnZXRDbG9zZXN0UHJvamVjdGluZ1BhcmVudCIsInJlbGF0aXZlVGFyZ2V0T3JpZ2luIiwidGFyZ2V0V2l0aFRyYW5zZm9ybXMiLCJpc1Byb2plY3RpbmciLCJwZW5kaW5nQW5pbWF0aW9uIiwicHJldlRyZWVTY2FsZVgiLCJwcmV2VHJlZVNjYWxlWSIsInByZXZQcm9qZWN0aW9uRGVsdGEiLCJjcmVhdGVQcm9qZWN0aW9uRGVsdGFzIiwibm90aWZ5QWxsMiIsInByb2plY3Rpb25EZWx0YVdpdGhUcmFuc2Zvcm0iLCJzbmFwc2hvdExhdGVzdFZhbHVlcyIsIm1peGVkVmFsdWVzIiwicmVsYXRpdmVMYXlvdXQiLCJzbmFwc2hvdFNvdXJjZSIsImxheW91dFNvdXJjZSIsImlzU2hhcmVkTGF5b3V0QW5pbWF0aW9uIiwiaGFzT3BhY2l0eUNyb3NzZmFkZSIsInByZXZSZWxhdGl2ZVRhcmdldCIsIm1peFRhcmdldERlbHRhIiwibWl4QXhpc0RlbHRhIiwibWl4Qm94IiwiY29tcGxldGVBbmltYXRpb24iLCJhcHBseVRyYW5zZm9ybXNUb1RhcmdldCIsInNob3VsZEFuaW1hdGVQb3NpdGlvbk9ubHkiLCJ4TGVuZ3RoIiwieUxlbmd0aCIsInNob3VsZFByZXNlcnZlRm9sbG93T3BhY2l0eSIsImdldFByZXZMZWFkIiwiaGFzRGlzdG9ydGluZ1RyYW5zZm9ybSIsInJlc2V0VmFsdWVzIiwic3R5bGVzIiwicG9pbnRlckV2ZW50cyIsImVtcHR5U3R5bGVzIiwidmFsdWVzVG9SZW5kZXIiLCJjb3JyZWN0ZWQiLCJudW0iLCJyZXNldFRyZWUiLCJtZWFzdXJlZExheW91dCIsImF4aXNTbmFwc2hvdCIsImxheW91dERlbHRhIiwidmlzdWFsRGVsdGEiLCJwYXJlbnRTbmFwc2hvdCIsInBhcmVudExheW91dCIsInJlbGF0aXZlU25hcHNob3QiLCJvbkJlZm9yZUxheW91dE1lYXN1cmUiLCJtaXhBeGlzIiwidXNlckFnZW50Q29udGFpbnMiLCJzdHJpbmciLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJyb3VuZFBvaW50Iiwicm91bmRBeGlzIiwiRG9jdW1lbnRQcm9qZWN0aW9uTm9kZSIsIm5vdGlmeTIiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0IiwiYm9keSIsInNjcm9sbFRvcCIsInJvb3RQcm9qZWN0aW9uTm9kZSIsIkhUTUxQcm9qZWN0aW9uTm9kZSIsImRvY3VtZW50Tm9kZSIsInBvc2l0aW9uIiwiaW1wb3J0X21vdGlvbl9kb20xMyIsImhhbmRsZUhvdmVyRXZlbnQiLCJsaWZlY3ljbGUiLCJIb3Zlckdlc3R1cmUiLCJlbmRFdmVudCIsIkZvY3VzR2VzdHVyZSIsIm9uRm9jdXMiLCJpc0ZvY3VzVmlzaWJsZSIsIm1hdGNoZXMiLCJvbkJsdXIiLCJpbXBvcnRfbW90aW9uX2RvbTE0IiwiaGFuZGxlUHJlc3NFdmVudCIsIlByZXNzR2VzdHVyZSIsInByZXNzIiwic3VjY2VzcyIsInVzZUdsb2JhbFRhcmdldCIsImdsb2JhbFRhcFRhcmdldCIsIm9ic2VydmVyQ2FsbGJhY2tzIiwib2JzZXJ2ZXJzIiwiZmlyZU9ic2VydmVyQ2FsbGJhY2siLCJlbnRyeSIsImZpcmVBbGxPYnNlcnZlckNhbGxiYWNrcyIsImVudHJpZXMiLCJpbml0SW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJsb29rdXBSb290Iiwicm9vdE9ic2VydmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZUludGVyc2VjdGlvbiIsInJvb3RJbnRlcmVzZWN0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwidGhyZXNob2xkTmFtZXMiLCJJblZpZXdGZWF0dXJlIiwiaGFzRW50ZXJlZFZpZXciLCJpc0luVmlldyIsInN0YXJ0T2JzZXJ2ZXIiLCJ2aWV3cG9ydCIsInJvb3RNYXJnaW4iLCJhbW91bnQiLCJvbmNlIiwidGhyZXNob2xkIiwib25JbnRlcnNlY3Rpb25VcGRhdGUiLCJpc0ludGVyc2VjdGluZyIsIm9uVmlld3BvcnRFbnRlciIsIm9uVmlld3BvcnRMZWF2ZSIsImhhc09wdGlvbnNDaGFuZ2VkIiwiaGFzVmlld3BvcnRPcHRpb25DaGFuZ2VkIiwicHJldlZpZXdwb3J0IiwiZ2VzdHVyZUFuaW1hdGlvbnMiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsImhhc1JlZHVjZWRNb3Rpb25MaXN0ZW5lciIsImluaXRQcmVmZXJzUmVkdWNlZE1vdGlvbiIsIm1hdGNoTWVkaWEiLCJtb3Rpb25NZWRpYVF1ZXJ5Iiwic2V0UmVkdWNlZE1vdGlvblByZWZlcmVuY2VzIiwiYWRkTGlzdGVuZXIiLCJ2YWx1ZVR5cGVzIiwiZmluZFZhbHVlVHlwZSIsInVwZGF0ZU1vdGlvblZhbHVlc0Zyb21Qcm9wcyIsIm5leHRWYWx1ZSIsInByZXZWYWx1ZSIsImV4aXN0aW5nVmFsdWUiLCJsYXRlc3RWYWx1ZSIsImdldFN0YXRpY1ZhbHVlIiwicmVtb3ZlVmFsdWUiLCJwcm9wRXZlbnRIYW5kbGVycyIsIl9wcm9wcyIsIl9wcmV2UHJvcHMiLCJfdmlzdWFsRWxlbWVudCIsInZhbHVlU3Vic2NyaXB0aW9ucyIsInByZXZNb3Rpb25WYWx1ZXMiLCJwcm9wRXZlbnRTdWJzY3JpcHRpb25zIiwibm90aWZ5VXBkYXRlIiwidHJpZ2dlckJ1aWxkIiwicmVuZGVySW5zdGFuY2UiLCJyZW5kZXJTY2hlZHVsZWRBdCIsImJhc2VUYXJnZXQiLCJpbml0aWFsVmFsdWVzIiwiaW5pdGlhbE1vdGlvblZhbHVlcyIsInJlbW92ZUZyb21WYXJpYW50VHJlZSIsImFkZFZhcmlhbnRDaGlsZCIsImJpbmRUb01vdGlvblZhbHVlIiwiZmVhdHVyZSIsInZhbHVlSXNUcmFuc2Zvcm0iLCJyZW1vdmVPbkNoYW5nZSIsInJlbW92ZU9uUmVuZGVyUmVxdWVzdCIsInJlbW92ZVN5bmNDaGVjayIsIk1vdGlvbkNoZWNrQXBwZWFyU3luYyIsIm90aGVyIiwic29ydEluc3RhbmNlTm9kZVBvc2l0aW9uIiwiZmVhdHVyZURlZmluaXRpb24iLCJGZWF0dXJlQ29uc3RydWN0b3IiLCJidWlsZCIsIm1lYXN1cmVJbnN0YW5jZVZpZXdwb3J0Qm94IiwibGlzdGVuZXJOYW1lIiwibGlzdGVuZXIiLCJoYW5kbGVDaGlsZE1vdGlvblZhbHVlIiwiZ2V0VmFyaWFudCIsImdldENsb3Nlc3RWYXJpYW50Tm9kZSIsImNsb3Nlc3RWYXJpYW50Tm9kZSIsInJlbW92ZVZhbHVlRnJvbVJlbmRlclN0YXRlIiwiZ2V0QmFzZVRhcmdldEZyb21Qcm9wcyIsInJlYWRWYWx1ZUZyb21JbnN0YW5jZSIsInNldEJhc2VUYXJnZXQiLCJ2YWx1ZUZyb21Jbml0aWFsIiwiRE9NVmlzdWFsRWxlbWVudCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiY2hpbGRTdWJzY3JpcHRpb24iLCJ0ZXh0Q29udGVudCIsImdldENvbXB1dGVkU3R5bGUyIiwiSFRNTFZpc3VhbEVsZW1lbnQiLCJkZWZhdWx0VHlwZSIsImNvbXB1dGVkU3R5bGUiLCJTVkdWaXN1YWxFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiaW1wb3J0X3JlYWN0MjkiLCJjcmVhdGVEb21WaXN1YWxFbGVtZW50IiwiY3JlYXRlTW90aW9uQ29tcG9uZW50IiwiaW1wb3J0X3JlYWN0MzAiLCJvYnNlcnZlVGltZWxpbmUiLCJwcmV2UHJvZ3Jlc3MiLCJvbkZyYW1lIiwicGVyY2VudGFnZSIsImltcG9ydF9tb3Rpb25fZG9tMTUiLCJyZXNpemVIYW5kbGVycyIsIm9ic2VydmVyIiwiZ2V0RWxlbWVudFNpemUiLCJib3JkZXJCb3hTaXplIiwiaW5saW5lU2l6ZSIsImJsb2NrU2l6ZSIsIm5vdGlmeVRhcmdldCIsImNvbnRlbnRSZWN0IiwiY29udGVudFNpemUiLCJub3RpZnlBbGwiLCJjcmVhdGVSZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwicmVzaXplRWxlbWVudCIsImVsZW1lbnRzIiwicmVzb2x2ZUVsZW1lbnRzIiwiZWxlbWVudEhhbmRsZXJzIiwid2luZG93Q2FsbGJhY2tzIiwid2luZG93UmVzaXplSGFuZGxlciIsImNyZWF0ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZXNpemVXaW5kb3ciLCJyZXNpemUiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjUiLCJtYXhFbGFwc2VkMiIsImNyZWF0ZUF4aXNJbmZvIiwic2Nyb2xsTGVuZ3RoIiwidGFyZ2V0T2Zmc2V0IiwiY29udGFpbmVyTGVuZ3RoIiwiY3JlYXRlU2Nyb2xsSW5mbyIsInVwZGF0ZUF4aXNJbmZvIiwiYXhpc05hbWUiLCJwcmV2VGltZSIsInVwZGF0ZVNjcm9sbEluZm8iLCJjYWxjSW5zZXQiLCJjb250YWluZXIiLCJpbnNldCIsIm9mZnNldFBhcmVudCIsInN2Z0JvdW5kaW5nQm94IiwicGFyZW50RWxlbWVudCIsInBhcmVudEJvdW5kaW5nQm94IiwiU1ZHR3JhcGhpY3NFbGVtZW50Iiwic3ZnIiwicGFyZW50Tm9kZSIsIm5hbWVkRWRnZXMiLCJjZW50ZXIiLCJyZXNvbHZlRWRnZSIsImVkZ2UiLCJhc051bWJlcjIiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImRlZmF1bHRPZmZzZXQyIiwicmVzb2x2ZU9mZnNldCIsInRhcmdldEluc2V0Iiwib2Zmc2V0RGVmaW5pdGlvbiIsInRhcmdldFBvaW50IiwiY29udGFpbmVyUG9pbnQiLCJTY3JvbGxPZmZzZXQiLCJFbnRlciIsIkV4aXQiLCJBbnkiLCJBbGwiLCJnZXRUYXJnZXRTaXplIiwicmVzb2x2ZU9mZnNldHMiLCJsZW5ndGhMYWJlbCIsInRhcmdldFNpemUiLCJzY3JvbGxXaWR0aCIsInNjcm9sbEhlaWdodCIsImNvbnRhaW5lclNpemUiLCJudW1PZmZzZXRzIiwiaW50ZXJwb2xhdG9yT2Zmc2V0cyIsImNyZWF0ZU9uU2Nyb2xsSGFuZGxlciIsIm9uU2Nyb2xsIiwic2Nyb2xsTGlzdGVuZXJzIiwicmVzaXplTGlzdGVuZXJzIiwib25TY3JvbGxIYW5kbGVycyIsImdldEV2ZW50VGFyZ2V0IiwiY29udGFpbmVySGFuZGxlcnMiLCJjb250YWluZXJIYW5kbGVyIiwibWVhc3VyZUFsbCIsInVwZGF0ZUFsbCIsImxpc3RlbmVyMiIsImN1cnJlbnRIYW5kbGVycyIsInNjcm9sbExpc3RlbmVyIiwiaW1wb3J0X21vdGlvbl9kb20xNiIsImltcG9ydF9tb3Rpb25fdXRpbHMyNiIsInNjcm9sbFRpbWVsaW5lRmFsbGJhY2siLCJ0aW1lbGluZUNhY2hlIiwiZ2V0VGltZWxpbmUiLCJlbGVtZW50Q2FjaGUiLCJzdXBwb3J0c1Njcm9sbFRpbWVsaW5lIiwiU2Nyb2xsVGltZWxpbmUiLCJpc09uU2Nyb2xsV2l0aEluZm8iLCJuZWVkc0VsZW1lbnRUcmFja2luZyIsInNjcm9sbEZ1bmN0aW9uIiwic2Nyb2xsQW5pbWF0aW9uIiwidmFsdWVBbmltYXRpb24iLCJvcHRpb25zV2l0aERlZmF1bHRzIiwiaW1wb3J0X3JlYWN0MzEiLCJpbXBvcnRfbW90aW9uX3V0aWxzMjciLCJyZWZXYXJuaW5nIiwiY3JlYXRlU2Nyb2xsTW90aW9uVmFsdWVzIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJzY3JvbGxYUHJvZ3Jlc3MiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJsYXlvdXRFZmZlY3QiLCJ1c2VMaWZlY3ljbGVFZmZlY3QiLCJfcHJvZ3Jlc3MiLCJpbXBvcnRfcmVhY3QzMiIsInNldExhdGVzdCIsInVzZUNvbWJpbmVNb3Rpb25WYWx1ZXMiLCJjb21iaW5lVmFsdWVzIiwidXBkYXRlVmFsdWUiLCJmcmFnbWVudHMiLCJudW1GcmFnbWVudHMiLCJidWlsZFZhbHVlIiwiaW1wb3J0X3JlYWN0MzMiLCJ0b051bWJlciIsImFjdGl2ZVNwcmluZ0FuaW1hdGlvbiIsImxhdGVzdFNldHRlciIsInN0b3BBbmltYXRpb24yIiwiaW1wb3J0X3JlYWN0MzQiLCJpbml0aWFsVGltZXN0YW1wIiwicHJvdmlkZVRpbWVTaW5jZVN0YXJ0IiwiaXNDdXN0b21WYWx1ZVR5cGUiLCJnZXRNaXhlcjIiLCJ1c2VJbW1lZGlhdGUiLCJhcmdPZmZzZXQiLCJpbnB1dFZhbHVlIiwiaW5wdXRSYW5nZSIsIm91dHB1dFJhbmdlIiwidXNlQ29tcHV0ZWQiLCJjb21wdXRlIiwiaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIiLCJ1c2VMaXN0VHJhbnNmb3JtIiwidXBkYXRlVmVsb2NpdHkiLCJnZXRXaWxsQ2hhbmdlTmFtZSIsIldpbGxDaGFuZ2VNb3Rpb25WYWx1ZSIsInN0eWxlTmFtZSIsImltcG9ydF9yZWFjdDM1IiwiaW1wb3J0X3JlYWN0MzYiLCJyZWR1Y2VkTW90aW9uUHJlZmVyZW5jZSIsImltcG9ydF9tb3Rpb25fdXRpbHMyOCIsInNldFZhcmlhbnRzIiwidmFyaWFudExhYmVscyIsInJldmVyc2VkTGFiZWxzIiwic2V0VmFsdWVzIiwiaGFzTW91bnRlZCIsInN1YnNjcmliZXJzIiwiaW1wb3J0X3JlYWN0MzciLCJyYW5nZVNpemUiLCJnZXRFYXNpbmdGb3JTZWdtZW50IiwiaXNET01LZXlmcmFtZXMiLCJpbXBvcnRfbW90aW9uX2RvbTE3IiwicmVzb2x2ZVN1YmplY3RzIiwic3ViamVjdCIsInNjb3BlIiwic2VsZWN0b3JDYWNoZSIsIk5vZGVMaXN0IiwiY2FsY3VsYXRlUmVwZWF0RHVyYXRpb24iLCJfcmVwZWF0RGVsYXkiLCJjYWxjTmV4dFRpbWUiLCJsYWJlbHMiLCJlcmFzZUtleWZyYW1lcyIsInNlcXVlbmNlIiwiZW5kVGltZSIsImF0IiwiYWRkS2V5ZnJhbWVzIiwibm9ybWFsaXplVGltZXMiLCJjb21wYXJlQnlUaW1lIiwiaW1wb3J0X21vdGlvbl9kb20xOCIsImltcG9ydF9tb3Rpb25fdXRpbHMyOSIsImRlZmF1bHRTZWdtZW50RWFzaW5nIiwiTUFYX1JFUEVBVCIsImNyZWF0ZUFuaW1hdGlvbnNGcm9tU2VxdWVuY2UiLCJkZWZhdWx0VHJhbnNpdGlvbiIsInNlcXVlbmNlVHJhbnNpdGlvbiIsImdlbmVyYXRvcnMyIiwiZGVmYXVsdER1cmF0aW9uIiwiYW5pbWF0aW9uRGVmaW5pdGlvbnMiLCJzZXF1ZW5jZXMiLCJ0aW1lTGFiZWxzIiwic2VnbWVudCIsIm1heER1cmF0aW9uMiIsInJlc29sdmVWYWx1ZVNlcXVlbmNlIiwidmFsdWVLZXlmcmFtZXMiLCJ2YWx1ZVNlcXVlbmNlIiwiZWxlbWVudEluZGV4IiwibnVtU3ViamVjdHMiLCJ2YWx1ZUtleWZyYW1lc0FzTGlzdCIsImtleWZyYW1lc0FzTGlzdCIsInJlbWFpbmluZ1RyYW5zaXRpb24iLCJjYWxjdWxhdGVkRGVsYXkiLCJudW1LZXlmcmFtZXMiLCJjcmVhdGVHZW5lcmF0b3IiLCJhYnNvbHV0ZURlbHRhIiwiaXNOdW1iZXJLZXlmcmFtZXNBcnJheSIsInNwcmluZ1RyYW5zaXRpb24iLCJzcHJpbmdFYXNpbmciLCJjcmVhdGVHZW5lcmF0b3JFYXNpbmciLCJyZW1haW5kZXIiLCJ1bnNoaWZ0Iiwib3JpZ2luYWxLZXlmcmFtZXMiLCJvcmlnaW5hbFRpbWVzIiwib3JpZ2luYWxFYXNlIiwicmVwZWF0SW5kZXgiLCJrZXlmcmFtZUluZGV4IiwidGFyZ2V0VGltZSIsInN1YmplY3RTZXF1ZW5jZSIsImdldFN1YmplY3RTZXF1ZW5jZSIsImdldFZhbHVlU2VxdWVuY2UiLCJzdWJqZWN0cyIsInN1YmplY3RJbmRleCIsInRoaXNTdWJqZWN0IiwiZ2V0VmFsdWVUcmFuc2l0aW9uNCIsInZhbHVlU2VxdWVuY2VzIiwidmFsdWVPZmZzZXQiLCJ2YWx1ZUVhc2luZyIsImlzTnVtYmVyIiwiZXZlcnkiLCJpc09iamVjdEtleSIsIm9iamVjdCIsIk9iamVjdFZpc3VhbEVsZW1lbnQiLCJjcmVhdGVET01WaXN1YWxFbGVtZW50IiwiY3JlYXRlT2JqZWN0VmlzdWFsRWxlbWVudCIsImltcG9ydF9tb3Rpb25fdXRpbHMzMCIsImlzU2luZ2xlVmFsdWUiLCJhbmltYXRlU3ViamVjdCIsImFuaW1hdGVTZXF1ZW5jZSIsImltcG9ydF9tb3Rpb25fZG9tMTkiLCJpc1NlcXVlbmNlIiwic2NvcGVkQW5pbWF0ZSIsInN1YmplY3RPclNlcXVlbmNlIiwib3B0aW9uc09yS2V5ZnJhbWVzIiwic2V0Q1NTVmFyIiwic2V0U3R5bGUiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzEiLCJzdXBwb3J0c1BhcnRpYWxLZXlmcmFtZXMiLCJpbXBvcnRfbW90aW9uX2RvbTIwIiwiaW1wb3J0X21vdGlvbl91dGlsczMyIiwiaHlkcmF0ZUtleWZyYW1lcyIsImRlZmF1bHRFYXNpbmcyIiwiZ2V0RWxlbWVudEFuaW1hdGlvblN0YXRlIiwiTmF0aXZlQW5pbWF0aW9uIiwiTmF0aXZlQW5pbWF0aW9uQ29udHJvbHMiLCJpc0NTU1ZhciIsImV4aXN0aW5nQW5pbWF0aW9uIiwicmVhZEluaXRpYWxLZXlmcmFtZSIsImdlbmVyYXRvck9wdGlvbnMiLCJvbkZpbmlzaCIsInNldFZhbHVlIiwicmVtb3ZlQW5pbWF0aW9uIiwiZWxlbWVudFN0YXRlIiwiaW1wb3J0X21vdGlvbl9kb20yMSIsImltcG9ydF9tb3Rpb25fdXRpbHMzMyIsImFuaW1hdGVFbGVtZW50cyIsImVsZW1lbnRPclNlbGVjdG9yIiwibnVtRWxlbWVudHMiLCJlbGVtZW50VHJhbnNpdGlvbiIsInZhbHVlT3B0aW9ucyIsImltcG9ydF9tb3Rpb25fZG9tMjIiLCJjcmVhdGVTY29wZWRXYWFwaUFuaW1hdGUiLCJpbXBvcnRfcmVhY3QzOCIsImNvbXBvbmVudENvbnRyb2xzIiwibmF0aXZlRXZlbnQiLCJjcmVhdGVEcmFnQ29udHJvbHMiLCJjb21wb25lbnQiLCJzdGFydFRyYW5zaXRpb24iLCJpbXBvcnRfcmVhY3QzOSIsImltcG9ydF9yZWFjdDQwIiwiaXRlbXMiLCJzZXRJdGVtIiwicnVuQ3ljbGUiLCJpbXBvcnRfbW90aW9uX2RvbTIzIiwidGhyZXNob2xkcyIsImFjdGl2ZUludGVyc2VjdGlvbnMiLCJvbkludGVyc2VjdGlvbkNoYW5nZSIsIm5ld09uRW5kIiwib2JzZXJ2ZXIyIiwiZGlzY29ubmVjdCIsImltcG9ydF9yZWFjdDQxIiwic2V0SW5WaWV3Iiwib25FbnRlciIsImltcG9ydF9yZWFjdDQyIiwiZm9yY2VVcGRhdGUiLCJzdGFydEluc3RhbnRMYXlvdXRUcmFuc2l0aW9uIiwidW5sb2NrT25GcmFtZVJlZiIsImFwcGVhclN0b3JlSWQiLCJlbGVtZW50SWQiLCJhcHBlYXJBbmltYXRpb25TdG9yZSIsImFwcGVhckNvbXBsZXRlIiwiaGFuZG9mZk9wdGltaXplZEFwcGVhckFuaW1hdGlvbiIsImZyYW1lMiIsInN0b3JlSWQiLCJvcHRpbWlzZWRBbmltYXRpb24iLCJjYW5jZWxBbmltYXRpb24iLCJpbXBvcnRfbW90aW9uX3V0aWxzMzQiLCJzdGFydEZyYW1lVGltZSIsInJlYWR5QW5pbWF0aW9uIiwic3VzcGVuZGVkQW5pbWF0aW9ucyIsInJlc3VtZVN1c3BlbmRlZEFuaW1hdGlvbnMiLCJkYXRhIiwib25SZWFkeSIsImNhblJlc3VtZSIsInZhbHVlSXNPcHRpbWlzZWQiLCJleHRlcm5hbEFuaW1hdGlvblZhbHVlIiwiYXBwZWFyQW5pbWF0aW9uIiwicmVhZHkiLCJjYXRjaCIsImltcG9ydF9yZWFjdDQzIiwiY3JlYXRlT2JqZWN0IiwiU3RhdGVWaXN1YWxFbGVtZW50IiwicmVzdG9yZVRyYW5zZm9ybSIsIl9zdGF0ZSIsImluaXRpYWxTdGF0ZSIsInNldEFuaW1hdGlvblN0YXRlIiwiYW5pbWF0aW9uRGVmaW5pdGlvbiIsImltcG9ydF9qc3hfcnVudGltZTkiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzUiLCJSZWFjdDMiLCJpZDMiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzYiLCJpbXBvcnRfcmVhY3Q0NCIsIm1heFNjYWxlIiwiaW52ZXJ0U2NhbGUiLCJoYXNXYXJuZWQiLCJwYXJlbnRTY2FsZVgiLCJwYXJlbnRTY2FsZVkiLCJHcm91cCIsIlJlb3JkZXJHcm91cCIsIkl0ZW0iLCJSZW9yZGVySXRlbSIsImltcG9ydF9yZWFjdDQ1IiwiUmVvcmRlckNvbnRleHQiLCJjaGVja1Jlb3JkZXIiLCJvcmRlciIsIml0ZW0yIiwibmV4dE9mZnNldCIsIm5leHRJdGVtIiwibmV4dExheW91dCIsIm5leHRJdGVtQ2VudGVyIiwiaW1wb3J0X2pzeF9ydW50aW1lMTAiLCJpbXBvcnRfbW90aW9uX3V0aWxzMzciLCJpbXBvcnRfcmVhY3Q0NiIsIlJlb3JkZXJHcm91cENvbXBvbmVudCIsImFzIiwib25SZW9yZGVyIiwiaXNSZW9yZGVyaW5nIiwicmVnaXN0ZXJJdGVtIiwiaWR4IiwiY29tcGFyZU1pbiIsInVwZGF0ZU9yZGVyIiwibmV3T3JkZXIiLCJpbXBvcnRfanN4X3J1bnRpbWUxMSIsImltcG9ydF9tb3Rpb25fdXRpbHMzOCIsImltcG9ydF9yZWFjdDQ3IiwidXNlRGVmYXVsdE1vdGlvblZhbHVlIiwiUmVvcmRlckl0ZW1Db21wb25lbnQiLCJsYXRlc3RYIiwibGF0ZXN0WSIsImdlc3R1cmVQb2ludCIsIm9uTGF5b3V0TWVhc3VyZSIsIm1lYXN1cmVkIiwiZ2V0T3JpZ2luSW5kZXgiLCJ0b3RhbCIsImxhc3RJbmRleCIsInN0YXJ0RGVsYXkiLCJtYXhEZWxheSIsIm51bVN0ZXBzIiwiZXhwYW5kZWQiLCJyb3VuZGVkIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNkJBQUE7QUFBQUMsUUFBQSxDQUFBRCw2QkFBQTtFQUFBRSxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsNEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw0QkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsaUJBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxhQUFBLEVBQUFBLENBQUEsS0FBQUEsYUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsaUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxpQkFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyw2QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDZCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMseUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx5QkFBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUEsT0FBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUMscUJBQUEsQ0FBQUQsU0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUMsbUJBQUEsQ0FBQUQsWUFBQTtFQUFBRSxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsQ0FBQSxFQUFBQSxDQUFBLEtBQUFBLENBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQWQscUJBQUEsQ0FBQWMsSUFBQTtFQUFBQyw0QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDRCQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFB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