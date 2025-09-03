System.register(["motion-utils@11.18.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["motion-utils","11.18.1"],["motion-dom","11.18.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('motion-utils@11.18.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/motion-dom.11.18.1.js
var motion_dom_11_18_1_exports = {};
__export(motion_dom_11_18_1_exports, {
  GroupPlaybackControls: () => GroupPlaybackControls,
  NativeAnimationControls: () => NativeAnimationControls,
  ViewTransitionBuilder: () => ViewTransitionBuilder,
  attachTimeline: () => attachTimeline,
  calcGeneratorDuration: () => calcGeneratorDuration,
  createGeneratorEasing: () => createGeneratorEasing,
  cubicBezierAsString: () => cubicBezierAsString,
  generateLinearEasing: () => generateLinearEasing,
  getValueTransition: () => getValueTransition,
  hover: () => hover,
  isBezierDefinition: () => isBezierDefinition,
  isDragActive: () => isDragActive,
  isDragging: () => isDragging,
  isGenerator: () => isGenerator,
  isNodeOrChild: () => isNodeOrChild,
  isPrimaryPointer: () => isPrimaryPointer,
  isWaapiSupportedEasing: () => isWaapiSupportedEasing,
  mapEasingToNativeEasing: () => mapEasingToNativeEasing,
  maxGeneratorDuration: () => maxGeneratorDuration,
  press: () => press,
  resolveElements: () => resolveElements,
  setDragLock: () => setDragLock,
  supportedWaapiEasing: () => supportedWaapiEasing,
  supportsFlags: () => supportsFlags,
  supportsLinearEasing: () => supportsLinearEasing,
  supportsScrollTimeline: () => supportsScrollTimeline,
  view: () => view
});
module.exports = __toCommonJS(motion_dom_11_18_1_exports);

// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var import_motion_utils = require("motion-utils@11.18.1");
var supportsScrollTimeline = (0, import_motion_utils.memo)(() => window.ScrollTimeline !== void 0);

// node_modules/motion-dom/dist/es/animation/controls/BaseGroup.mjs
var BaseGroupPlaybackControls = class {
  constructor(animations) {
    this.stop = () => this.runAll("stop");
    this.animations = animations.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map(animation => "finished" in animation ? animation.finished : animation));
  }
  getAll(propName) {
    return this.animations[0][propName];
  }
  setAll(propName, newValue) {
    for (let i = 0; i < this.animations.length; i++) {
      this.animations[i][propName] = newValue;
    }
  }
  attachTimeline(timeline, fallback) {
    const subscriptions = this.animations.map(animation => {
      if (supportsScrollTimeline() && animation.attachTimeline) {
        return animation.attachTimeline(timeline);
      } else if (typeof fallback === "function") {
        return fallback(animation);
      }
    });
    return () => {
      subscriptions.forEach((cancel, i) => {
        cancel && cancel();
        this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(time) {
    this.setAll("time", time);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(speed) {
    this.setAll("speed", speed);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let max = 0;
    for (let i = 0; i < this.animations.length; i++) {
      max = Math.max(max, this.animations[i].duration);
    }
    return max;
  }
  runAll(methodName) {
    this.animations.forEach(controls => controls[methodName]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
};

// node_modules/motion-dom/dist/es/animation/controls/Group.mjs
var GroupPlaybackControls = class extends BaseGroupPlaybackControls {
  then(onResolve, onReject) {
    return Promise.all(this.animations).then(onResolve).catch(onReject);
  }
};

// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
  return transition ? transition[key] || transition["default"] || transition : void 0;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
  let duration = 0;
  const timeStep = 50;
  let state = generator.next(duration);
  while (!state.done && duration < maxGeneratorDuration) {
    duration += timeStep;
    state = generator.next(duration);
  }
  return duration >= maxGeneratorDuration ? Infinity : duration;
}

// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
var import_motion_utils2 = require("motion-utils@11.18.1");
function createGeneratorEasing(options, scale = 100, createGenerator) {
  const generator = createGenerator({
    ...options,
    keyframes: [0, scale]
  });
  const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
  return {
    type: "keyframes",
    ease: progress2 => {
      return generator.next(duration * progress2).value / scale;
    },
    duration: (0, import_motion_utils2.millisecondsToSeconds)(duration)
  };
}

// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
  return typeof type === "function";
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs
function attachTimeline(animation, timeline) {
  animation.timeline = timeline;
  animation.onfinish = null;
}

// node_modules/motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs
var import_motion_utils3 = require("motion-utils@11.18.1");
var NativeAnimationControls = class {
  constructor(animation) {
    this.animation = animation;
  }
  get duration() {
    var _a, _b, _c;
    const durationInMs = ((_b = (_a = this.animation) === null || _a === void 0 ? void 0 : _a.effect) === null || _b === void 0 ? void 0 : _b.getComputedTiming().duration) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.duration) || 300;
    return (0, import_motion_utils3.millisecondsToSeconds)(Number(durationInMs));
  }
  get time() {
    var _a;
    if (this.animation) {
      return (0, import_motion_utils3.millisecondsToSeconds)(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
    }
    return 0;
  }
  set time(newTime) {
    if (this.animation) {
      this.animation.currentTime = (0, import_motion_utils3.secondsToMilliseconds)(newTime);
    }
  }
  get speed() {
    return this.animation ? this.animation.playbackRate : 1;
  }
  set speed(newSpeed) {
    if (this.animation) {
      this.animation.playbackRate = newSpeed;
    }
  }
  get state() {
    return this.animation ? this.animation.playState : "finished";
  }
  get startTime() {
    return this.animation ? this.animation.startTime : null;
  }
  get finished() {
    return this.animation ? this.animation.finished : Promise.resolve();
  }
  play() {
    this.animation && this.animation.play();
  }
  pause() {
    this.animation && this.animation.pause();
  }
  stop() {
    if (!this.animation || this.state === "idle" || this.state === "finished") {
      return;
    }
    if (this.animation.commitStyles) {
      this.animation.commitStyles();
    }
    this.cancel();
  }
  flatten() {
    var _a;
    if (!this.animation) return;
    (_a = this.animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming({
      easing: "linear"
    });
  }
  attachTimeline(timeline) {
    if (this.animation) attachTimeline(this.animation, timeline);
    return import_motion_utils3.noop;
  }
  complete() {
    this.animation && this.animation.finish();
  }
  cancel() {
    try {
      this.animation && this.animation.cancel();
    } catch (e) {}
  }
};

// node_modules/motion-dom/dist/es/utils/is-bezier-definition.mjs
var isBezierDefinition = easing => Array.isArray(easing) && typeof easing[0] === "number";

// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var supportsFlags = {
  linearEasing: void 0
};

// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
var import_motion_utils4 = require("motion-utils@11.18.1");
function memoSupports(callback, supportsFlag) {
  const memoized = (0, import_motion_utils4.memo)(callback);
  return () => {
    var _a;
    return (_a = supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
  };
}

// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /* @__PURE__ */memoSupports(() => {
  try {
    document.createElement("div").animate({
      opacity: 0
    }, {
      easing: "linear(0, 1)"
    });
  } catch (e) {
    return false;
  }
  return true;
}, "linearEasing");

// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var import_motion_utils5 = require("motion-utils@11.18.1");
var generateLinearEasing = (easing, duration, resolution = 10) => {
  let points = "";
  const numPoints = Math.max(Math.round(duration / resolution), 2);
  for (let i = 0; i < numPoints; i++) {
    points += easing((0, import_motion_utils5.progress)(0, numPoints - 1, i)) + ", ";
  }
  return `linear(${points.substring(0, points.length - 2)})`;
};

// node_modules/motion-dom/dist/es/animation/waapi/utils/easing.mjs
function isWaapiSupportedEasing(easing) {
  return Boolean(typeof easing === "function" && supportsLinearEasing() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || supportsLinearEasing()) || isBezierDefinition(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
var supportedWaapiEasing = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */cubicBezierAsString([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */cubicBezierAsString([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
};
function mapEasingToNativeEasing(easing, duration) {
  if (!easing) {
    return void 0;
  } else if (typeof easing === "function" && supportsLinearEasing()) {
    return generateLinearEasing(easing, duration);
  } else if (isBezierDefinition(easing)) {
    return cubicBezierAsString(easing);
  } else if (Array.isArray(easing)) {
    return easing.map(segmentEasing => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
  } else {
    return supportedWaapiEasing[easing];
  }
}

// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
  x: false,
  y: false
};
function isDragActive() {
  return isDragging.x || isDragging.y;
}

// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
  var _a;
  if (elementOrSelector instanceof Element) {
    return [elementOrSelector];
  } else if (typeof elementOrSelector === "string") {
    let root = document;
    if (scope) {
      root = scope.current;
    }
    const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
    return elements ? Array.from(elements) : [];
  }
  return Array.from(elementOrSelector);
}

// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
  const elements = resolveElements(elementOrSelector);
  const gestureAbortController = new AbortController();
  const eventOptions = {
    passive: true,
    ...options,
    signal: gestureAbortController.signal
  };
  const cancel = () => gestureAbortController.abort();
  return [elements, eventOptions, cancel];
}

// node_modules/motion-dom/dist/es/gestures/hover.mjs
function filterEvents(callback) {
  return event => {
    if (event.pointerType === "touch" || isDragActive()) return;
    callback(event);
  };
}
function hover(elementOrSelector, onHoverStart, options = {}) {
  const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
  const onPointerEnter = filterEvents(enterEvent => {
    const {
      target
    } = enterEvent;
    const onHoverEnd = onHoverStart(enterEvent);
    if (typeof onHoverEnd !== "function" || !target) return;
    const onPointerLeave = filterEvents(leaveEvent => {
      onHoverEnd(leaveEvent);
      target.removeEventListener("pointerleave", onPointerLeave);
    });
    target.addEventListener("pointerleave", onPointerLeave, eventOptions);
  });
  elements.forEach(element => {
    element.addEventListener("pointerenter", onPointerEnter, eventOptions);
  });
  return cancel;
}

// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = event => {
  if (event.pointerType === "mouse") {
    return typeof event.button !== "number" || event.button <= 0;
  } else {
    return event.isPrimary !== false;
  }
};

// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var focusableElements = /* @__PURE__ */new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function isElementKeyboardAccessible(element) {
  return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}

// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */new WeakSet();

// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function filterEvents2(callback) {
  return event => {
    if (event.key !== "Enter") return;
    callback(event);
  };
}
function firePointerEvent(target, type) {
  target.dispatchEvent(new PointerEvent("pointer" + type, {
    isPrimary: true,
    bubbles: true
  }));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
  const element = focusEvent.currentTarget;
  if (!element) return;
  const handleKeydown = filterEvents2(() => {
    if (isPressing.has(element)) return;
    firePointerEvent(element, "down");
    const handleKeyup = filterEvents2(() => {
      firePointerEvent(element, "up");
    });
    const handleBlur = () => firePointerEvent(element, "cancel");
    element.addEventListener("keyup", handleKeyup, eventOptions);
    element.addEventListener("blur", handleBlur, eventOptions);
  });
  element.addEventListener("keydown", handleKeydown, eventOptions);
  element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};

// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function isValidPressEvent(event) {
  return isPrimaryPointer(event) && !isDragActive();
}
function press(elementOrSelector, onPressStart, options = {}) {
  const [elements, eventOptions, cancelEvents] = setupGesture(elementOrSelector, options);
  const startPress = startEvent => {
    const element = startEvent.currentTarget;
    if (!isValidPressEvent(startEvent) || isPressing.has(element)) return;
    isPressing.add(element);
    const onPressEnd = onPressStart(startEvent);
    const onPointerEnd = (endEvent, success) => {
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerCancel);
      if (!isValidPressEvent(endEvent) || !isPressing.has(element)) {
        return;
      }
      isPressing.delete(element);
      if (typeof onPressEnd === "function") {
        onPressEnd(endEvent, {
          success
        });
      }
    };
    const onPointerUp = upEvent => {
      onPointerEnd(upEvent, options.useGlobalTarget || isNodeOrChild(element, upEvent.target));
    };
    const onPointerCancel = cancelEvent => {
      onPointerEnd(cancelEvent, false);
    };
    window.addEventListener("pointerup", onPointerUp, eventOptions);
    window.addEventListener("pointercancel", onPointerCancel, eventOptions);
  };
  elements.forEach(element => {
    if (!isElementKeyboardAccessible(element) && element.getAttribute("tabindex") === null) {
      element.tabIndex = 0;
    }
    const target = options.useGlobalTarget ? window : element;
    target.addEventListener("pointerdown", startPress, eventOptions);
    element.addEventListener("focus", event => enableKeyboardPress(event, eventOptions), eventOptions);
  });
  return cancelEvents;
}

// node_modules/motion-dom/dist/es/animation/waapi/utils/convert-options.mjs
var import_motion_utils6 = require("motion-utils@11.18.1");
var defaultEasing = "easeOut";
function applyGeneratorOptions(options) {
  var _a;
  if (isGenerator(options.type)) {
    const generatorOptions = createGeneratorEasing(options, 100, options.type);
    options.ease = supportsLinearEasing() ? generatorOptions.ease : defaultEasing;
    options.duration = (0, import_motion_utils6.secondsToMilliseconds)(generatorOptions.duration);
    options.type = "keyframes";
  } else {
    options.duration = (0, import_motion_utils6.secondsToMilliseconds)((_a = options.duration) !== null && _a !== void 0 ? _a : 0.3);
    options.ease = options.ease || defaultEasing;
  }
}
function convertMotionOptionsToNative(valueName, keyframes, options) {
  var _a;
  const nativeKeyframes = {};
  const nativeOptions = {
    fill: "both",
    easing: "linear",
    composite: "replace"
  };
  nativeOptions.delay = (0, import_motion_utils6.secondsToMilliseconds)((_a = options.delay) !== null && _a !== void 0 ? _a : 0);
  applyGeneratorOptions(options);
  nativeOptions.duration = options.duration;
  const {
    ease,
    times
  } = options;
  if (times) nativeKeyframes.offset = times;
  nativeKeyframes[valueName] = keyframes;
  const easing = mapEasingToNativeEasing(ease, options.duration);
  if (Array.isArray(easing)) {
    nativeKeyframes.easing = easing;
  } else {
    nativeOptions.easing = easing;
  }
  return {
    keyframes: nativeKeyframes,
    options: nativeOptions
  };
}

// node_modules/motion-dom/dist/es/animation/waapi/PseudoAnimation.mjs
var PseudoAnimation = class extends NativeAnimationControls {
  constructor(target, pseudoElement, valueName, keyframes, options) {
    const animationOptions = convertMotionOptionsToNative(valueName, keyframes, options);
    const animation = target.animate(animationOptions.keyframes, {
      pseudoElement,
      ...animationOptions.options
    });
    super(animation);
  }
};

// node_modules/motion-dom/dist/es/view/utils/choose-layer-type.mjs
function chooseLayerType(valueName) {
  if (valueName === "layout") return "group";
  if (valueName === "enter" || valueName === "new") return "new";
  if (valueName === "exit" || valueName === "old") return "old";
  return "group";
}

// node_modules/motion-dom/dist/es/view/utils/css.mjs
var pendingRules = {};
var style = null;
var css = {
  set: (selector, values) => {
    pendingRules[selector] = values;
  },
  commit: () => {
    if (!style) {
      style = document.createElement("style");
      style.id = "motion-view";
    }
    let cssText = "";
    for (const selector in pendingRules) {
      const rule = pendingRules[selector];
      cssText += `${selector} {
`;
      for (const [property, value] of Object.entries(rule)) {
        cssText += `  ${property}: ${value};
`;
      }
      cssText += "}\n";
    }
    style.textContent = cssText;
    document.head.appendChild(style);
    pendingRules = {};
  },
  remove: () => {
    if (style && style.parentElement) {
      style.parentElement.removeChild(style);
    }
  }
};

// node_modules/motion-dom/dist/es/view/utils/get-layer-name.mjs
function getLayerName(pseudoElement) {
  const match = pseudoElement.match(/::view-transition-(old|new|group|image-pair)\((.*?)\)/);
  if (!match) return null;
  return {
    layer: match[2],
    type: match[1]
  };
}

// node_modules/motion-dom/dist/es/view/utils/get-view-animations.mjs
function filterViewAnimations(animation) {
  var _a;
  const {
    effect
  } = animation;
  if (!effect) return false;
  return effect.target === document.documentElement && ((_a = effect.pseudoElement) === null || _a === void 0 ? void 0 : _a.startsWith("::view-transition"));
}
function getViewAnimations() {
  return document.getAnimations().filter(filterViewAnimations);
}

// node_modules/motion-dom/dist/es/view/utils/has-target.mjs
function hasTarget(target, targets) {
  return targets.has(target) && Object.keys(targets.get(target)).length > 0;
}

// node_modules/motion-dom/dist/es/view/start.mjs
var import_motion_utils7 = require("motion-utils@11.18.1");
var definitionNames = ["layout", "enter", "exit", "new", "old"];
function startViewAnimation(update, defaultOptions, targets) {
  if (!document.startViewTransition) {
    return new Promise(async resolve => {
      await update();
      resolve(new BaseGroupPlaybackControls([]));
    });
  }
  if (!hasTarget("root", targets)) {
    css.set(":root", {
      "view-transition-name": "none"
    });
  }
  css.set("::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*)", {
    "animation-timing-function": "linear !important"
  });
  css.commit();
  const transition = document.startViewTransition(async () => {
    await update();
  });
  transition.finished.finally(() => {
    css.remove();
  });
  return new Promise(resolve => {
    transition.ready.then(() => {
      var _a;
      const generatedViewAnimations = getViewAnimations();
      const animations = [];
      targets.forEach((definition, target) => {
        for (const key of definitionNames) {
          if (!definition[key]) continue;
          const {
            keyframes,
            options
          } = definition[key];
          for (let [valueName, valueKeyframes] of Object.entries(keyframes)) {
            if (!valueKeyframes) continue;
            const valueOptions = {
              ...getValueTransition(defaultOptions, valueName),
              ...getValueTransition(options, valueName)
            };
            const type = chooseLayerType(key);
            if (valueName === "opacity" && !Array.isArray(valueKeyframes)) {
              const initialValue = type === "new" ? 0 : 1;
              valueKeyframes = [initialValue, valueKeyframes];
            }
            if (typeof valueOptions.delay === "function") {
              valueOptions.delay = valueOptions.delay(0, 1);
            }
            const animation = new PseudoAnimation(document.documentElement, `::view-transition-${type}(${target})`, valueName, valueKeyframes, valueOptions);
            animations.push(animation);
          }
        }
      });
      for (const animation of generatedViewAnimations) {
        if (animation.playState === "finished") continue;
        const {
          effect
        } = animation;
        if (!effect || !(effect instanceof KeyframeEffect)) continue;
        const {
          pseudoElement
        } = effect;
        if (!pseudoElement) continue;
        const name = getLayerName(pseudoElement);
        if (!name) continue;
        const targetDefinition = targets.get(name.layer);
        if (!targetDefinition) {
          const transitionName = name.type === "group" ? "layout" : "";
          const animationTransition = {
            ...getValueTransition(defaultOptions, transitionName)
          };
          applyGeneratorOptions(animationTransition);
          const easing = mapEasingToNativeEasing(animationTransition.ease, animationTransition.duration);
          effect.updateTiming({
            delay: (0, import_motion_utils7.secondsToMilliseconds)((_a = animationTransition.delay) !== null && _a !== void 0 ? _a : 0),
            duration: animationTransition.duration,
            easing
          });
          animations.push(new NativeAnimationControls(animation));
        } else if (hasOpacity(targetDefinition, "enter") && hasOpacity(targetDefinition, "exit") && effect.getKeyframes().some(keyframe => keyframe.mixBlendMode)) {
          animations.push(new NativeAnimationControls(animation));
        } else {
          animation.cancel();
        }
      }
      resolve(new BaseGroupPlaybackControls(animations));
    });
  });
}
function hasOpacity(target, key) {
  var _a;
  return (_a = target === null || target === void 0 ? void 0 : target[key]) === null || _a === void 0 ? void 0 : _a.keyframes.opacity;
}

// node_modules/motion-dom/dist/es/view/index.mjs
var import_motion_utils8 = require("motion-utils@11.18.1");
var ViewTransitionBuilder = class {
  constructor(update, options = {}) {
    this.currentTarget = "root";
    this.targets = /* @__PURE__ */new Map();
    this.notifyReady = import_motion_utils8.noop;
    this.readyPromise = new Promise(resolve => {
      this.notifyReady = resolve;
    });
    queueMicrotask(() => {
      startViewAnimation(update, options, this.targets).then(animation => this.notifyReady(animation));
    });
  }
  get(selector) {
    this.currentTarget = selector;
    return this;
  }
  layout(keyframes, options) {
    this.updateTarget("layout", keyframes, options);
    return this;
  }
  new(keyframes, options) {
    this.updateTarget("new", keyframes, options);
    return this;
  }
  old(keyframes, options) {
    this.updateTarget("old", keyframes, options);
    return this;
  }
  enter(keyframes, options) {
    this.updateTarget("enter", keyframes, options);
    return this;
  }
  exit(keyframes, options) {
    this.updateTarget("exit", keyframes, options);
    return this;
  }
  crossfade(options) {
    this.updateTarget("enter", {
      opacity: 1
    }, options);
    this.updateTarget("exit", {
      opacity: 0
    }, options);
    return this;
  }
  updateTarget(target, keyframes, options = {}) {
    const {
      currentTarget,
      targets
    } = this;
    if (!targets.has(currentTarget)) {
      targets.set(currentTarget, {});
    }
    const targetData = targets.get(currentTarget);
    targetData[target] = {
      keyframes,
      options
    };
  }
  then(resolve, reject) {
    return this.readyPromise.then(resolve, reject);
  }
};
function view(update, defaultOptions = {}) {
  return new ViewTransitionBuilder(update, defaultOptions);
}

// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
  if (axis === "x" || axis === "y") {
    if (isDragging[axis]) {
      return null;
    } else {
      isDragging[axis] = true;
      return () => {
        isDragging[axis] = false;
      };
    }
  } else {
    if (isDragging.x || isDragging.y) {
      return null;
    } else {
      isDragging.x = isDragging.y = true;
      return () => {
        isDragging.x = isDragging.y = false;
      };
    }
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tb3Rpb24tZG9tLjExLjE4LjEuanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3V0aWxzL3N1cHBvcnRzL3Njcm9sbC10aW1lbGluZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi9jb250cm9scy9CYXNlR3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vY29udHJvbHMvR3JvdXAubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vdXRpbHMvZ2V0LXZhbHVlLXRyYW5zaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy9jYWxjLWR1cmF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvYW5pbWF0aW9uL2dlbmVyYXRvcnMvdXRpbHMvY3JlYXRlLWdlbmVyYXRvci1lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy9pcy1nZW5lcmF0b3IubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vd2FhcGkvdXRpbHMvYXR0YWNoLXRpbWVsaW5lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvYW5pbWF0aW9uL3dhYXBpL05hdGl2ZUFuaW1hdGlvbkNvbnRyb2xzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdXRpbHMvaXMtYmV6aWVyLWRlZmluaXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy91dGlscy9zdXBwb3J0cy9mbGFncy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3V0aWxzL3N1cHBvcnRzL21lbW8ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy91dGlscy9zdXBwb3J0cy9saW5lYXItZWFzaW5nLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvYW5pbWF0aW9uL3dhYXBpL3V0aWxzL2xpbmVhci5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi93YWFwaS91dGlscy9lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy9kcmFnL3N0YXRlL2lzLWFjdGl2ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3V0aWxzL3Jlc29sdmUtZWxlbWVudHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy91dGlscy9zZXR1cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2hvdmVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvdXRpbHMvaXMtbm9kZS1vci1jaGlsZC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL3V0aWxzL2lzLXByaW1hcnktcG9pbnRlci5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzL3V0aWxzL2lzLWtleWJvYXJkLWFjY2Vzc2libGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy9wcmVzcy91dGlscy9zdGF0ZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzL3V0aWxzL2tleWJvYXJkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvcHJlc3MvaW5kZXgubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vd2FhcGkvdXRpbHMvY29udmVydC1vcHRpb25zLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvYW5pbWF0aW9uL3dhYXBpL1BzZXVkb0FuaW1hdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3ZpZXcvdXRpbHMvY2hvb3NlLWxheWVyLXR5cGUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy92aWV3L3V0aWxzL2Nzcy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3ZpZXcvdXRpbHMvZ2V0LWxheWVyLW5hbWUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy92aWV3L3V0aWxzL2dldC12aWV3LWFuaW1hdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy92aWV3L3V0aWxzL2hhcy10YXJnZXQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy92aWV3L3N0YXJ0Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdmlldy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvc3RhdGUvc2V0LWFjdGl2ZS5tanMiXSwibmFtZXMiOlsibW90aW9uX2RvbV8xMV8xOF8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkdyb3VwUGxheWJhY2tDb250cm9scyIsIk5hdGl2ZUFuaW1hdGlvbkNvbnRyb2xzIiwiVmlld1RyYW5zaXRpb25CdWlsZGVyIiwiYXR0YWNoVGltZWxpbmUiLCJjYWxjR2VuZXJhdG9yRHVyYXRpb24iLCJjcmVhdGVHZW5lcmF0b3JFYXNpbmciLCJjdWJpY0JlemllckFzU3RyaW5nIiwiZ2VuZXJhdGVMaW5lYXJFYXNpbmciLCJnZXRWYWx1ZVRyYW5zaXRpb24iLCJob3ZlciIsImlzQmV6aWVyRGVmaW5pdGlvbiIsImlzRHJhZ0FjdGl2ZSIsImlzRHJhZ2dpbmciLCJpc0dlbmVyYXRvciIsImlzTm9kZU9yQ2hpbGQiLCJpc1ByaW1hcnlQb2ludGVyIiwiaXNXYWFwaVN1cHBvcnRlZEVhc2luZyIsIm1hcEVhc2luZ1RvTmF0aXZlRWFzaW5nIiwibWF4R2VuZXJhdG9yRHVyYXRpb24iLCJwcmVzcyIsInJlc29sdmVFbGVtZW50cyIsInNldERyYWdMb2NrIiwic3VwcG9ydGVkV2FhcGlFYXNpbmciLCJzdXBwb3J0c0ZsYWdzIiwic3VwcG9ydHNMaW5lYXJFYXNpbmciLCJzdXBwb3J0c1Njcm9sbFRpbWVsaW5lIiwidmlldyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpbXBvcnRfbW90aW9uX3V0aWxzIiwicmVxdWlyZSIsIm1lbW8iLCJ3aW5kb3ciLCJTY3JvbGxUaW1lbGluZSIsIkJhc2VHcm91cFBsYXliYWNrQ29udHJvbHMiLCJjb25zdHJ1Y3RvciIsImFuaW1hdGlvbnMiLCJzdG9wIiwicnVuQWxsIiwiZmlsdGVyIiwiQm9vbGVhbiIsImZpbmlzaGVkIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImFuaW1hdGlvbiIsImdldEFsbCIsInByb3BOYW1lIiwic2V0QWxsIiwibmV3VmFsdWUiLCJpIiwibGVuZ3RoIiwidGltZWxpbmUiLCJmYWxsYmFjayIsInN1YnNjcmlwdGlvbnMiLCJmb3JFYWNoIiwiY2FuY2VsIiwidGltZSIsInNwZWVkIiwic3RhcnRUaW1lIiwiZHVyYXRpb24iLCJtYXgiLCJNYXRoIiwibWV0aG9kTmFtZSIsImNvbnRyb2xzIiwiZmxhdHRlbiIsInBsYXkiLCJwYXVzZSIsImNvbXBsZXRlIiwidGhlbiIsIm9uUmVzb2x2ZSIsIm9uUmVqZWN0IiwiY2F0Y2giLCJ0cmFuc2l0aW9uIiwia2V5IiwiZ2VuZXJhdG9yIiwidGltZVN0ZXAiLCJzdGF0ZSIsIm5leHQiLCJkb25lIiwiSW5maW5pdHkiLCJpbXBvcnRfbW90aW9uX3V0aWxzMiIsIm9wdGlvbnMiLCJzY2FsZSIsImNyZWF0ZUdlbmVyYXRvciIsImtleWZyYW1lcyIsIm1pbiIsInR5cGUiLCJlYXNlIiwicHJvZ3Jlc3MyIiwidmFsdWUiLCJtaWxsaXNlY29uZHNUb1NlY29uZHMiLCJvbmZpbmlzaCIsImltcG9ydF9tb3Rpb25fdXRpbHMzIiwiX2EiLCJfYiIsIl9jIiwiZHVyYXRpb25Jbk1zIiwiZWZmZWN0IiwiZ2V0Q29tcHV0ZWRUaW1pbmciLCJOdW1iZXIiLCJjdXJyZW50VGltZSIsIm5ld1RpbWUiLCJzZWNvbmRzVG9NaWxsaXNlY29uZHMiLCJwbGF5YmFja1JhdGUiLCJuZXdTcGVlZCIsInBsYXlTdGF0ZSIsInJlc29sdmUiLCJjb21taXRTdHlsZXMiLCJ1cGRhdGVUaW1pbmciLCJlYXNpbmciLCJub29wIiwiZmluaXNoIiwiZSIsIkFycmF5IiwiaXNBcnJheSIsImxpbmVhckVhc2luZyIsImltcG9ydF9tb3Rpb25fdXRpbHM0IiwibWVtb1N1cHBvcnRzIiwiY2FsbGJhY2siLCJzdXBwb3J0c0ZsYWciLCJtZW1vaXplZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiaW1wb3J0X21vdGlvbl91dGlsczUiLCJyZXNvbHV0aW9uIiwicG9pbnRzIiwibnVtUG9pbnRzIiwicm91bmQiLCJwcm9ncmVzcyIsInN1YnN0cmluZyIsImV2ZXJ5IiwiYSIsImIiLCJjIiwiZCIsImxpbmVhciIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJjaXJjSW4iLCJjaXJjT3V0IiwiYmFja0luIiwiYmFja091dCIsInNlZ21lbnRFYXNpbmciLCJ4IiwieSIsImVsZW1lbnRPclNlbGVjdG9yIiwic2NvcGUiLCJzZWxlY3RvckNhY2hlIiwiRWxlbWVudCIsInJvb3QiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZnJvbSIsInNldHVwR2VzdHVyZSIsImdlc3R1cmVBYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJldmVudE9wdGlvbnMiLCJwYXNzaXZlIiwic2lnbmFsIiwiYWJvcnQiLCJmaWx0ZXJFdmVudHMiLCJldmVudCIsInBvaW50ZXJUeXBlIiwib25Ib3ZlclN0YXJ0Iiwib25Qb2ludGVyRW50ZXIiLCJlbnRlckV2ZW50IiwidGFyZ2V0Iiwib25Ib3ZlckVuZCIsIm9uUG9pbnRlckxlYXZlIiwibGVhdmVFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsInBhcmVudCIsImNoaWxkIiwicGFyZW50RWxlbWVudCIsImJ1dHRvbiIsImlzUHJpbWFyeSIsImZvY3VzYWJsZUVsZW1lbnRzIiwiU2V0IiwiaXNFbGVtZW50S2V5Ym9hcmRBY2Nlc3NpYmxlIiwiaGFzIiwidGFnTmFtZSIsInRhYkluZGV4IiwiaXNQcmVzc2luZyIsIldlYWtTZXQiLCJmaWx0ZXJFdmVudHMyIiwiZmlyZVBvaW50ZXJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJQb2ludGVyRXZlbnQiLCJidWJibGVzIiwiZW5hYmxlS2V5Ym9hcmRQcmVzcyIsImZvY3VzRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlS2V5ZG93biIsImhhbmRsZUtleXVwIiwiaGFuZGxlQmx1ciIsImlzVmFsaWRQcmVzc0V2ZW50Iiwib25QcmVzc1N0YXJ0IiwiY2FuY2VsRXZlbnRzIiwic3RhcnRQcmVzcyIsInN0YXJ0RXZlbnQiLCJhZGQiLCJvblByZXNzRW5kIiwib25Qb2ludGVyRW5kIiwiZW5kRXZlbnQiLCJzdWNjZXNzIiwib25Qb2ludGVyVXAiLCJvblBvaW50ZXJDYW5jZWwiLCJkZWxldGUiLCJ1cEV2ZW50IiwidXNlR2xvYmFsVGFyZ2V0IiwiY2FuY2VsRXZlbnQiLCJnZXRBdHRyaWJ1dGUiLCJpbXBvcnRfbW90aW9uX3V0aWxzNiIsImRlZmF1bHRFYXNpbmciLCJhcHBseUdlbmVyYXRvck9wdGlvbnMiLCJnZW5lcmF0b3JPcHRpb25zIiwiY29udmVydE1vdGlvbk9wdGlvbnNUb05hdGl2ZSIsInZhbHVlTmFtZSIsIm5hdGl2ZUtleWZyYW1lcyIsIm5hdGl2ZU9wdGlvbnMiLCJmaWxsIiwiY29tcG9zaXRlIiwiZGVsYXkiLCJ0aW1lcyIsIm9mZnNldCIsIlBzZXVkb0FuaW1hdGlvbiIsInBzZXVkb0VsZW1lbnQiLCJhbmltYXRpb25PcHRpb25zIiwiY2hvb3NlTGF5ZXJUeXBlIiwicGVuZGluZ1J1bGVzIiwic3R5bGUiLCJjc3MiLCJzZXQiLCJzZWxlY3RvciIsInZhbHVlcyIsImNvbW1pdCIsImlkIiwiY3NzVGV4dCIsInJ1bGUiLCJwcm9wZXJ0eSIsIk9iamVjdCIsImVudHJpZXMiLCJ0ZXh0Q29udGVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiZ2V0TGF5ZXJOYW1lIiwibWF0Y2giLCJsYXllciIsImZpbHRlclZpZXdBbmltYXRpb25zIiwiZG9jdW1lbnRFbGVtZW50Iiwic3RhcnRzV2l0aCIsImdldFZpZXdBbmltYXRpb25zIiwiZ2V0QW5pbWF0aW9ucyIsImhhc1RhcmdldCIsInRhcmdldHMiLCJrZXlzIiwiZ2V0IiwiaW1wb3J0X21vdGlvbl91dGlsczciLCJkZWZpbml0aW9uTmFtZXMiLCJzdGFydFZpZXdBbmltYXRpb24iLCJ1cGRhdGUiLCJkZWZhdWx0T3B0aW9ucyIsInN0YXJ0Vmlld1RyYW5zaXRpb24iLCJmaW5hbGx5IiwicmVhZHkiLCJnZW5lcmF0ZWRWaWV3QW5pbWF0aW9ucyIsImRlZmluaXRpb24iLCJ2YWx1ZUtleWZyYW1lcyIsInZhbHVlT3B0aW9ucyIsImluaXRpYWxWYWx1ZSIsInB1c2giLCJLZXlmcmFtZUVmZmVjdCIsIm5hbWUiLCJ0YXJnZXREZWZpbml0aW9uIiwidHJhbnNpdGlvbk5hbWUiLCJhbmltYXRpb25UcmFuc2l0aW9uIiwiaGFzT3BhY2l0eSIsImdldEtleWZyYW1lcyIsInNvbWUiLCJrZXlmcmFtZSIsIm1peEJsZW5kTW9kZSIsImltcG9ydF9tb3Rpb25fdXRpbHM4IiwiTWFwIiwibm90aWZ5UmVhZHkiLCJyZWFkeVByb21pc2UiLCJxdWV1ZU1pY3JvdGFzayIsImxheW91dCIsInVwZGF0ZVRhcmdldCIsIm5ldyIsIm9sZCIsImVudGVyIiwiZXhpdCIsImNyb3NzZmFkZSIsInRhcmdldERhdGEiLCJyZWplY3QiLCJheGlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwwQkFBQTtBQUFBQyxRQUFBLENBQUFELDBCQUFBO0VBQUFFLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsdUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSx1QkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsa0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxrQkFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtB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QUFhLFNBQVM7TUFBRTNLLE9BQUEsRUFBUztJQUFFLEdBQUczQyxPQUFPO0lBQ2xELEtBQUtzTixZQUFBLENBQWEsUUFBUTtNQUFFM0ssT0FBQSxFQUFTO0lBQUUsR0FBRzNDLE9BQU87SUFDakQsT0FBTztFQUNYO0VBQ0FzTixhQUFhN0gsTUFBQSxFQUFRdEYsU0FBQSxFQUFXSCxPQUFBLEdBQVUsQ0FBQyxHQUFHO0lBQzFDLE1BQU07TUFBRW9ILGFBQUE7TUFBZWlFO0lBQVEsSUFBSTtJQUNuQyxJQUFJLENBQUNBLE9BQUEsQ0FBUTdFLEdBQUEsQ0FBSVksYUFBYSxHQUFHO01BQzdCaUUsT0FBQSxDQUFReEIsR0FBQSxDQUFJekMsYUFBQSxFQUFlLENBQUMsQ0FBQztJQUNqQztJQUNBLE1BQU13RyxVQUFBLEdBQWF2QyxPQUFBLENBQVFFLEdBQUEsQ0FBSW5FLGFBQWE7SUFDNUN3RyxVQUFBLENBQVduSSxNQUFBLElBQVU7TUFBRXRGLFNBQUE7TUFBV0g7SUFBUTtFQUM5QztFQUNBYixLQUFLc0MsT0FBQSxFQUFTb00sTUFBQSxFQUFRO0lBQ2xCLE9BQU8sS0FBS1YsWUFBQSxDQUFhaE8sSUFBQSxDQUFLc0MsT0FBQSxFQUFTb00sTUFBTTtFQUNqRDtBQUNKO0FBQ0EsU0FBU3RSLEtBQUtvUCxNQUFBLEVBQVFDLGNBQUEsR0FBaUIsQ0FBQyxHQUFHO0VBQ3ZDLE9BQU8sSUFBSTdRLHFCQUFBLENBQXNCNFEsTUFBQSxFQUFRQyxjQUFjO0FBQzNEOzs7QUM5REEsU0FBUzFQLFlBQVk0UixJQUFBLEVBQU07RUFDdkIsSUFBSUEsSUFBQSxLQUFTLE9BQU9BLElBQUEsS0FBUyxLQUFLO0lBQzlCLElBQUlyUyxVQUFBLENBQVdxUyxJQUFBLEdBQU87TUFDbEIsT0FBTztJQUNYLE9BQ0s7TUFDRHJTLFVBQUEsQ0FBV3FTLElBQUEsSUFBUTtNQUNuQixPQUFPLE1BQU07UUFDVHJTLFVBQUEsQ0FBV3FTLElBQUEsSUFBUTtNQUN2QjtJQUNKO0VBQ0osT0FDSztJQUNELElBQUlyUyxVQUFBLENBQVd3SSxDQUFBLElBQUt4SSxVQUFBLENBQVd5SSxDQUFBLEVBQUc7TUFDOUIsT0FBTztJQUNYLE9BQ0s7TUFDRHpJLFVBQUEsQ0FBV3dJLENBQUEsR0FBSXhJLFVBQUEsQ0FBV3lJLENBQUEsR0FBSTtNQUM5QixPQUFPLE1BQU07UUFDVHpJLFVBQUEsQ0FBV3dJLENBQUEsR0FBSXhJLFVBQUEsQ0FBV3lJLENBQUEsR0FBSTtNQUNsQztJQUNKO0VBQ0o7QUFDSiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9