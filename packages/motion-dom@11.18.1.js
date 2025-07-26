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

// .beyond/uimport/temp/motion-dom.11.18.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21vdGlvbi1kb20uMTEuMTguMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdXRpbHMvc3VwcG9ydHMvc2Nyb2xsLXRpbWVsaW5lLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvYW5pbWF0aW9uL2NvbnRyb2xzL0Jhc2VHcm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi9jb250cm9scy9Hcm91cC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi91dGlscy9nZXQtdmFsdWUtdHJhbnNpdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL2NhbGMtZHVyYXRpb24ubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vZ2VuZXJhdG9ycy91dGlscy9jcmVhdGUtZ2VuZXJhdG9yLWVhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi9nZW5lcmF0b3JzL3V0aWxzL2lzLWdlbmVyYXRvci5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi93YWFwaS91dGlscy9hdHRhY2gtdGltZWxpbmUubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vd2FhcGkvTmF0aXZlQW5pbWF0aW9uQ29udHJvbHMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy91dGlscy9pcy1iZXppZXItZGVmaW5pdGlvbi5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3V0aWxzL3N1cHBvcnRzL2ZsYWdzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdXRpbHMvc3VwcG9ydHMvbWVtby5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3V0aWxzL3N1cHBvcnRzL2xpbmVhci1lYXNpbmcubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vd2FhcGkvdXRpbHMvbGluZWFyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvYW5pbWF0aW9uL3dhYXBpL3V0aWxzL2Vhc2luZy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL2RyYWcvc3RhdGUvaXMtYWN0aXZlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdXRpbHMvcmVzb2x2ZS1lbGVtZW50cy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL3V0aWxzL3NldHVwLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvaG92ZXIubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy91dGlscy9pcy1ub2RlLW9yLWNoaWxkLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvdXRpbHMvaXMtcHJpbWFyeS1wb2ludGVyLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvcHJlc3MvdXRpbHMvaXMta2V5Ym9hcmQtYWNjZXNzaWJsZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2dlc3R1cmVzL3ByZXNzL3V0aWxzL3N0YXRlLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvcHJlc3MvdXRpbHMva2V5Ym9hcmQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9nZXN0dXJlcy9wcmVzcy9pbmRleC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL2FuaW1hdGlvbi93YWFwaS91dGlscy9jb252ZXJ0LW9wdGlvbnMubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy9hbmltYXRpb24vd2FhcGkvUHNldWRvQW5pbWF0aW9uLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdmlldy91dGlscy9jaG9vc2UtbGF5ZXItdHlwZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3ZpZXcvdXRpbHMvY3NzLm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvdmlldy91dGlscy9nZXQtbGF5ZXItbmFtZS5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3ZpZXcvdXRpbHMvZ2V0LXZpZXctYW5pbWF0aW9ucy5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3ZpZXcvdXRpbHMvaGFzLXRhcmdldC5tanMiLCIuLi9ub2RlX21vZHVsZXMvbW90aW9uLWRvbS9kaXN0L2VzL3ZpZXcvc3RhcnQubWpzIiwiLi4vbm9kZV9tb2R1bGVzL21vdGlvbi1kb20vZGlzdC9lcy92aWV3L2luZGV4Lm1qcyIsIi4uL25vZGVfbW9kdWxlcy9tb3Rpb24tZG9tL2Rpc3QvZXMvZ2VzdHVyZXMvZHJhZy9zdGF0ZS9zZXQtYWN0aXZlLm1qcyJdLCJuYW1lcyI6WyJtb3Rpb25fZG9tXzExXzE4XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiR3JvdXBQbGF5YmFja0NvbnRyb2xzIiwiTmF0aXZlQW5pbWF0aW9uQ29udHJvbHMiLCJWaWV3VHJhbnNpdGlvbkJ1aWxkZXIiLCJhdHRhY2hUaW1lbGluZSIsImNhbGNHZW5lcmF0b3JEdXJhdGlvbiIsImNyZWF0ZUdlbmVyYXRvckVhc2luZyIsImN1YmljQmV6aWVyQXNTdHJpbmciLCJnZW5lcmF0ZUxpbmVhckVhc2luZyIsImdldFZhbHVlVHJhbnNpdGlvbiIsImhvdmVyIiwiaXNCZXppZXJEZWZpbml0aW9uIiwiaXNEcmFnQWN0aXZlIiwiaXNEcmFnZ2luZyIsImlzR2VuZXJhdG9yIiwiaXNOb2RlT3JDaGlsZCIsImlzUHJpbWFyeVBvaW50ZXIiLCJpc1dhYXBpU3VwcG9ydGVkRWFzaW5nIiwibWFwRWFzaW5nVG9OYXRpdmVFYXNpbmciLCJtYXhHZW5lcmF0b3JEdXJhdGlvbiIsInByZXNzIiwicmVzb2x2ZUVsZW1lbnRzIiwic2V0RHJhZ0xvY2siLCJzdXBwb3J0ZWRXYWFwaUVhc2luZyIsInN1cHBvcnRzRmxhZ3MiLCJzdXBwb3J0c0xpbmVhckVhc2luZyIsInN1cHBvcnRzU2Nyb2xsVGltZWxpbmUiLCJ2aWV3IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImltcG9ydF9tb3Rpb25fdXRpbHMiLCJyZXF1aXJlIiwibWVtbyIsIndpbmRvdyIsIlNjcm9sbFRpbWVsaW5lIiwiQmFzZUdyb3VwUGxheWJhY2tDb250cm9scyIsImNvbnN0cnVjdG9yIiwiYW5pbWF0aW9ucyIsInN0b3AiLCJydW5BbGwiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZmluaXNoZWQiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiYW5pbWF0aW9uIiwiZ2V0QWxsIiwicHJvcE5hbWUiLCJzZXRBbGwiLCJuZXdWYWx1ZSIsImkiLCJsZW5ndGgiLCJ0aW1lbGluZSIsImZhbGxiYWNrIiwic3Vic2NyaXB0aW9ucyIsImZvckVhY2giLCJjYW5jZWwiLCJ0aW1lIiwic3BlZWQiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsIm1heCIsIk1hdGgiLCJtZXRob2ROYW1lIiwiY29udHJvbHMiLCJmbGF0dGVuIiwicGxheSIsInBhdXNlIiwiY29tcGxldGUiLCJ0aGVuIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJjYXRjaCIsInRyYW5zaXRpb24iLCJrZXkiLCJnZW5lcmF0b3IiLCJ0aW1lU3RlcCIsInN0YXRlIiwibmV4dCIsImRvbmUiLCJJbmZpbml0eSIsImltcG9ydF9tb3Rpb25fdXRpbHMyIiwib3B0aW9ucyIsInNjYWxlIiwiY3JlYXRlR2VuZXJhdG9yIiwia2V5ZnJhbWVzIiwibWluIiwidHlwZSIsImVhc2UiLCJwcm9ncmVzczIiLCJ2YWx1ZSIsIm1pbGxpc2Vjb25kc1RvU2Vjb25kcyIsIm9uZmluaXNoIiwiaW1wb3J0X21vdGlvbl91dGlsczMiLCJfYSIsIl9iIiwiX2MiLCJkdXJhdGlvbkluTXMiLCJlZmZlY3QiLCJnZXRDb21wdXRlZFRpbWluZyIsIk51bWJlciIsImN1cnJlbnRUaW1lIiwibmV3VGltZSIsInNlY29uZHNUb01pbGxpc2Vjb25kcyIsInBsYXliYWNrUmF0ZSIsIm5ld1NwZWVkIiwicGxheVN0YXRlIiwicmVzb2x2ZSIsImNvbW1pdFN0eWxlcyIsInVwZGF0ZVRpbWluZyIsImVhc2luZyIsIm5vb3AiLCJmaW5pc2giLCJlIiwiQXJyYXkiLCJpc0FycmF5IiwibGluZWFyRWFzaW5nIiwiaW1wb3J0X21vdGlvbl91dGlsczQiLCJtZW1vU3VwcG9ydHMiLCJjYWxsYmFjayIsInN1cHBvcnRzRmxhZyIsIm1lbW9pemVkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYW5pbWF0ZSIsIm9wYWNpdHkiLCJpbXBvcnRfbW90aW9uX3V0aWxzNSIsInJlc29sdXRpb24iLCJwb2ludHMiLCJudW1Qb2ludHMiLCJyb3VuZCIsInByb2dyZXNzIiwic3Vic3RyaW5nIiwiZXZlcnkiLCJhIiwiYiIsImMiLCJkIiwibGluZWFyIiwiZWFzZUluIiwiZWFzZU91dCIsImVhc2VJbk91dCIsImNpcmNJbiIsImNpcmNPdXQiLCJiYWNrSW4iLCJiYWNrT3V0Iiwic2VnbWVudEVhc2luZyIsIngiLCJ5IiwiZWxlbWVudE9yU2VsZWN0b3IiLCJzY29wZSIsInNlbGVjdG9yQ2FjaGUiLCJFbGVtZW50Iiwicm9vdCIsImN1cnJlbnQiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmcm9tIiwic2V0dXBHZXN0dXJlIiwiZ2VzdHVyZUFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImV2ZW50T3B0aW9ucyIsInBhc3NpdmUiLCJzaWduYWwiLCJhYm9ydCIsImZpbHRlckV2ZW50cyIsImV2ZW50IiwicG9pbnRlclR5cGUiLCJvbkhvdmVyU3RhcnQiLCJvblBvaW50ZXJFbnRlciIsImVudGVyRXZlbnQiLCJ0YXJnZXQiLCJvbkhvdmVyRW5kIiwib25Qb2ludGVyTGVhdmUiLCJsZWF2ZUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwicGFyZW50IiwiY2hpbGQiLCJwYXJlbnRFbGVtZW50IiwiYnV0dG9uIiwiaXNQcmltYXJ5IiwiZm9jdXNhYmxlRWxlbWVudHMiLCJTZXQiLCJpc0VsZW1lbnRLZXlib2FyZEFjY2Vzc2libGUiLCJoYXMiLCJ0YWdOYW1lIiwidGFiSW5kZXgiLCJpc1ByZXNzaW5nIiwiV2Vha1NldCIsImZpbHRlckV2ZW50czIiLCJmaXJlUG9pbnRlckV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIlBvaW50ZXJFdmVudCIsImJ1YmJsZXMiLCJlbmFibGVLZXlib2FyZFByZXNzIiwiZm9jdXNFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVLZXlkb3duIiwiaGFuZGxlS2V5dXAiLCJoYW5kbGVCbHVyIiwiaXNWYWxpZFByZXNzRXZlbnQiLCJvblByZXNzU3RhcnQiLCJjYW5jZWxFdmVudHMiLCJzdGFydFByZXNzIiwic3RhcnRFdmVudCIsImFkZCIsIm9uUHJlc3NFbmQiLCJvblBvaW50ZXJFbmQiLCJlbmRFdmVudCIsInN1Y2Nlc3MiLCJvblBvaW50ZXJVcCIsIm9uUG9pbnRlckNhbmNlbCIsImRlbGV0ZSIsInVwRXZlbnQiLCJ1c2VHbG9iYWxUYXJnZXQiLCJjYW5jZWxFdmVudCIsImdldEF0dHJpYnV0ZSIsImltcG9ydF9tb3Rpb25fdXRpbHM2IiwiZGVmYXVsdEVhc2luZyIsImFwcGx5R2VuZXJhdG9yT3B0aW9ucyIsImdlbmVyYXRvck9wdGlvbnMiLCJjb252ZXJ0TW90aW9uT3B0aW9uc1RvTmF0aXZlIiwidmFsdWVOYW1lIiwibmF0aXZlS2V5ZnJhbWVzIiwibmF0aXZlT3B0aW9ucyIsImZpbGwiLCJjb21wb3NpdGUiLCJkZWxheSIsInRpbWVzIiwib2Zmc2V0IiwiUHNldWRvQW5pbWF0aW9uIiwicHNldWRvRWxlbWVudCIsImFuaW1hdGlvbk9wdGlvbnMiLCJjaG9vc2VMYXllclR5cGUiLCJwZW5kaW5nUnVsZXMiLCJzdHlsZSIsImNzcyIsInNldCIsInNlbGVjdG9yIiwidmFsdWVzIiwiY29tbWl0IiwiaWQiLCJjc3NUZXh0IiwicnVsZSIsInByb3BlcnR5IiwiT2JqZWN0IiwiZW50cmllcyIsInRleHRDb250ZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJnZXRMYXllck5hbWUiLCJtYXRjaCIsImxheWVyIiwiZmlsdGVyVmlld0FuaW1hdGlvbnMiLCJkb2N1bWVudEVsZW1lbnQiLCJzdGFydHNXaXRoIiwiZ2V0Vmlld0FuaW1hdGlvbnMiLCJnZXRBbmltYXRpb25zIiwiaGFzVGFyZ2V0IiwidGFyZ2V0cyIsImtleXMiLCJnZXQiLCJpbXBvcnRfbW90aW9uX3V0aWxzNyIsImRlZmluaXRpb25OYW1lcyIsInN0YXJ0Vmlld0FuaW1hdGlvbiIsInVwZGF0ZSIsImRlZmF1bHRPcHRpb25zIiwic3RhcnRWaWV3VHJhbnNpdGlvbiIsImZpbmFsbHkiLCJyZWFkeSIsImdlbmVyYXRlZFZpZXdBbmltYXRpb25zIiwiZGVmaW5pdGlvbiIsInZhbHVlS2V5ZnJhbWVzIiwidmFsdWVPcHRpb25zIiwiaW5pdGlhbFZhbHVlIiwicHVzaCIsIktleWZyYW1lRWZmZWN0IiwibmFtZSIsInRhcmdldERlZmluaXRpb24iLCJ0cmFuc2l0aW9uTmFtZSIsImFuaW1hdGlvblRyYW5zaXRpb24iLCJoYXNPcGFjaXR5IiwiZ2V0S2V5ZnJhbWVzIiwic29tZSIsImtleWZyYW1lIiwibWl4QmxlbmRNb2RlIiwiaW1wb3J0X21vdGlvbl91dGlsczgiLCJNYXAiLCJub3RpZnlSZWFkeSIsInJlYWR5UHJvbWlzZSIsInF1ZXVlTWljcm90YXNrIiwibGF5b3V0IiwidXBkYXRlVGFyZ2V0IiwibmV3Iiwib2xkIiwiZW50ZXIiLCJleGl0IiwiY3Jvc3NmYWRlIiwidGFyZ2V0RGF0YSIsInJlamVjdCIsImF4aXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDBCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsMEJBQUE7RUFBQUUscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxzQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHNCQUFBO0VBQUFDLHVCQUFBLEVBQUFBLENBQUEsS0FBQUEsdUJBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLG9CQUFBLEVBQUFBLENBQUEsS0FBQUEsb0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxJQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBL0IsMEJBQUE7OztBQ0FBLElBQUFnQyxtQkFBQSxHQUFxQkMsT0FBQTtBQUVyQixJQUFNTixzQkFBQSxPQUF5QkssbUJBQUEsQ0FBQUUsSUFBQSxFQUFLLE1BQU1DLE1BQUEsQ0FBT0MsY0FBQSxLQUFtQixNQUFTOzs7QUNBN0UsSUFBTUMseUJBQUEsR0FBTixNQUFnQztFQUM1QkMsWUFBWUMsVUFBQSxFQUFZO0lBRXBCLEtBQUtDLElBQUEsR0FBTyxNQUFNLEtBQUtDLE1BQUEsQ0FBTyxNQUFNO0lBQ3BDLEtBQUtGLFVBQUEsR0FBYUEsVUFBQSxDQUFXRyxNQUFBLENBQU9DLE9BQU87RUFDL0M7RUFDQSxJQUFJQyxTQUFBLEVBQVc7SUFFWCxPQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSSxLQUFLUCxVQUFBLENBQVdRLEdBQUEsQ0FBS0MsU0FBQSxJQUFjLGNBQWNBLFNBQUEsR0FBWUEsU0FBQSxDQUFVSixRQUFBLEdBQVdJLFNBQVMsQ0FBQztFQUNuSDtFQUlBQyxPQUFPQyxRQUFBLEVBQVU7SUFDYixPQUFPLEtBQUtYLFVBQUEsQ0FBVyxHQUFHVyxRQUFBO0VBQzlCO0VBQ0FDLE9BQU9ELFFBQUEsRUFBVUUsUUFBQSxFQUFVO0lBQ3ZCLFNBQVNDLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBS2QsVUFBQSxDQUFXZSxNQUFBLEVBQVFELENBQUEsSUFBSztNQUM3QyxLQUFLZCxVQUFBLENBQVdjLENBQUEsRUFBR0gsUUFBQSxJQUFZRSxRQUFBO0lBQ25DO0VBQ0o7RUFDQS9DLGVBQWVrRCxRQUFBLEVBQVVDLFFBQUEsRUFBVTtJQUMvQixNQUFNQyxhQUFBLEdBQWdCLEtBQUtsQixVQUFBLENBQVdRLEdBQUEsQ0FBS0MsU0FBQSxJQUFjO01BQ3JELElBQUlyQixzQkFBQSxDQUF1QixLQUFLcUIsU0FBQSxDQUFVM0MsY0FBQSxFQUFnQjtRQUN0RCxPQUFPMkMsU0FBQSxDQUFVM0MsY0FBQSxDQUFla0QsUUFBUTtNQUM1QyxXQUNTLE9BQU9DLFFBQUEsS0FBYSxZQUFZO1FBQ3JDLE9BQU9BLFFBQUEsQ0FBU1IsU0FBUztNQUM3QjtJQUNKLENBQUM7SUFDRCxPQUFPLE1BQU07TUFDVFMsYUFBQSxDQUFjQyxPQUFBLENBQVEsQ0FBQ0MsTUFBQSxFQUFRTixDQUFBLEtBQU07UUFDakNNLE1BQUEsSUFBVUEsTUFBQSxDQUFPO1FBQ2pCLEtBQUtwQixVQUFBLENBQVdjLENBQUEsRUFBR2IsSUFBQSxDQUFLO01BQzVCLENBQUM7SUFDTDtFQUNKO0VBQ0EsSUFBSW9CLEtBQUEsRUFBTztJQUNQLE9BQU8sS0FBS1gsTUFBQSxDQUFPLE1BQU07RUFDN0I7RUFDQSxJQUFJVyxLQUFLQSxJQUFBLEVBQU07SUFDWCxLQUFLVCxNQUFBLENBQU8sUUFBUVMsSUFBSTtFQUM1QjtFQUNBLElBQUlDLE1BQUEsRUFBUTtJQUNSLE9BQU8sS0FBS1osTUFBQSxDQUFPLE9BQU87RUFDOUI7RUFDQSxJQUFJWSxNQUFNQSxLQUFBLEVBQU87SUFDYixLQUFLVixNQUFBLENBQU8sU0FBU1UsS0FBSztFQUM5QjtFQUNBLElBQUlDLFVBQUEsRUFBWTtJQUNaLE9BQU8sS0FBS2IsTUFBQSxDQUFPLFdBQVc7RUFDbEM7RUFDQSxJQUFJYyxTQUFBLEVBQVc7SUFDWCxJQUFJQyxHQUFBLEdBQU07SUFDVixTQUFTWCxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJLEtBQUtkLFVBQUEsQ0FBV2UsTUFBQSxFQUFRRCxDQUFBLElBQUs7TUFDN0NXLEdBQUEsR0FBTUMsSUFBQSxDQUFLRCxHQUFBLENBQUlBLEdBQUEsRUFBSyxLQUFLekIsVUFBQSxDQUFXYyxDQUFBLEVBQUdVLFFBQVE7SUFDbkQ7SUFDQSxPQUFPQyxHQUFBO0VBQ1g7RUFDQXZCLE9BQU95QixVQUFBLEVBQVk7SUFDZixLQUFLM0IsVUFBQSxDQUFXbUIsT0FBQSxDQUFTUyxRQUFBLElBQWFBLFFBQUEsQ0FBU0QsVUFBQSxFQUFZLENBQUM7RUFDaEU7RUFDQUUsUUFBQSxFQUFVO0lBQ04sS0FBSzNCLE1BQUEsQ0FBTyxTQUFTO0VBQ3pCO0VBQ0E0QixLQUFBLEVBQU87SUFDSCxLQUFLNUIsTUFBQSxDQUFPLE1BQU07RUFDdEI7RUFDQTZCLE1BQUEsRUFBUTtJQUNKLEtBQUs3QixNQUFBLENBQU8sT0FBTztFQUN2QjtFQUNBa0IsT0FBQSxFQUFTO0lBQ0wsS0FBS2xCLE1BQUEsQ0FBTyxRQUFRO0VBQ3hCO0VBQ0E4QixTQUFBLEVBQVc7SUFDUCxLQUFLOUIsTUFBQSxDQUFPLFVBQVU7RUFDMUI7QUFDSjs7O0FDekVBLElBQU12QyxxQkFBQSxHQUFOLGNBQW9DbUMseUJBQUEsQ0FBMEI7RUFDMURtQyxLQUFLQyxTQUFBLEVBQVdDLFFBQUEsRUFBVTtJQUN0QixPQUFPN0IsT0FBQSxDQUFRQyxHQUFBLENBQUksS0FBS1AsVUFBVSxFQUFFaUMsSUFBQSxDQUFLQyxTQUFTLEVBQUVFLEtBQUEsQ0FBTUQsUUFBUTtFQUN0RTtBQUNKOzs7QUNWQSxTQUFTaEUsbUJBQW1Ca0UsVUFBQSxFQUFZQyxHQUFBLEVBQUs7RUFDekMsT0FBT0QsVUFBQSxHQUNEQSxVQUFBLENBQVdDLEdBQUEsS0FDVEQsVUFBQSxDQUFXLGNBQ1hBLFVBQUEsR0FDRjtBQUNWOzs7QUNGQSxJQUFNeEQsb0JBQUEsR0FBdUI7QUFDN0IsU0FBU2Qsc0JBQXNCd0UsU0FBQSxFQUFXO0VBQ3RDLElBQUlmLFFBQUEsR0FBVztFQUNmLE1BQU1nQixRQUFBLEdBQVc7RUFDakIsSUFBSUMsS0FBQSxHQUFRRixTQUFBLENBQVVHLElBQUEsQ0FBS2xCLFFBQVE7RUFDbkMsT0FBTyxDQUFDaUIsS0FBQSxDQUFNRSxJQUFBLElBQVFuQixRQUFBLEdBQVczQyxvQkFBQSxFQUFzQjtJQUNuRDJDLFFBQUEsSUFBWWdCLFFBQUE7SUFDWkMsS0FBQSxHQUFRRixTQUFBLENBQVVHLElBQUEsQ0FBS2xCLFFBQVE7RUFDbkM7RUFDQSxPQUFPQSxRQUFBLElBQVkzQyxvQkFBQSxHQUF1QitELFFBQUEsR0FBV3BCLFFBQUE7QUFDekQ7OztBQ2RBLElBQUFxQixvQkFBQSxHQUFzQ25ELE9BQUE7QUFNdEMsU0FBUzFCLHNCQUFzQjhFLE9BQUEsRUFBU0MsS0FBQSxHQUFRLEtBQUtDLGVBQUEsRUFBaUI7RUFDbEUsTUFBTVQsU0FBQSxHQUFZUyxlQUFBLENBQWdCO0lBQUUsR0FBR0YsT0FBQTtJQUFTRyxTQUFBLEVBQVcsQ0FBQyxHQUFHRixLQUFLO0VBQUUsQ0FBQztFQUN2RSxNQUFNdkIsUUFBQSxHQUFXRSxJQUFBLENBQUt3QixHQUFBLENBQUluRixxQkFBQSxDQUFzQndFLFNBQVMsR0FBRzFELG9CQUFvQjtFQUNoRixPQUFPO0lBQ0hzRSxJQUFBLEVBQU07SUFDTkMsSUFBQSxFQUFPQyxTQUFBLElBQWE7TUFDaEIsT0FBT2QsU0FBQSxDQUFVRyxJQUFBLENBQUtsQixRQUFBLEdBQVc2QixTQUFRLEVBQUVDLEtBQUEsR0FBUVAsS0FBQTtJQUN2RDtJQUNBdkIsUUFBQSxNQUFVcUIsb0JBQUEsQ0FBQVUscUJBQUEsRUFBc0IvQixRQUFRO0VBQzVDO0FBQ0o7OztBQ2hCQSxTQUFTaEQsWUFBWTJFLElBQUEsRUFBTTtFQUN2QixPQUFPLE9BQU9BLElBQUEsS0FBUztBQUMzQjs7O0FDRkEsU0FBU3JGLGVBQWUyQyxTQUFBLEVBQVdPLFFBQUEsRUFBVTtFQUN6Q1AsU0FBQSxDQUFVTyxRQUFBLEdBQVdBLFFBQUE7RUFDckJQLFNBQUEsQ0FBVStDLFFBQUEsR0FBVztBQUN6Qjs7O0FDSEEsSUFBQUMsb0JBQUEsR0FBbUUvRCxPQUFBO0FBR25FLElBQU05Qix1QkFBQSxHQUFOLE1BQThCO0VBQzFCbUMsWUFBWVUsU0FBQSxFQUFXO0lBQ25CLEtBQUtBLFNBQUEsR0FBWUEsU0FBQTtFQUNyQjtFQUNBLElBQUllLFNBQUEsRUFBVztJQUNYLElBQUlrQyxFQUFBLEVBQUlDLEVBQUEsRUFBSUMsRUFBQTtJQUNaLE1BQU1DLFlBQUEsS0FBaUJGLEVBQUEsSUFBTUQsRUFBQSxHQUFLLEtBQUtqRCxTQUFBLE1BQWUsUUFBUWlELEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR0ksTUFBQSxNQUFZLFFBQVFILEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR0ksaUJBQUEsQ0FBa0IsRUFBRXZDLFFBQUEsT0FDeEpvQyxFQUFBLEdBQUssS0FBS2QsT0FBQSxNQUFhLFFBQVFjLEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR3BDLFFBQUEsS0FDN0Q7SUFDSixXQUFPaUMsb0JBQUEsQ0FBQUYscUJBQUEsRUFBc0JTLE1BQUEsQ0FBT0gsWUFBWSxDQUFDO0VBQ3JEO0VBQ0EsSUFBSXhDLEtBQUEsRUFBTztJQUNQLElBQUlxQyxFQUFBO0lBQ0osSUFBSSxLQUFLakQsU0FBQSxFQUFXO01BQ2hCLFdBQU9nRCxvQkFBQSxDQUFBRixxQkFBQSxJQUF3QkcsRUFBQSxHQUFLLEtBQUtqRCxTQUFBLE1BQWUsUUFBUWlELEVBQUEsS0FBTyxTQUFTLFNBQVNBLEVBQUEsQ0FBR08sV0FBQSxLQUFnQixDQUFDO0lBQ2pIO0lBQ0EsT0FBTztFQUNYO0VBQ0EsSUFBSTVDLEtBQUs2QyxPQUFBLEVBQVM7SUFDZCxJQUFJLEtBQUt6RCxTQUFBLEVBQVc7TUFDaEIsS0FBS0EsU0FBQSxDQUFVd0QsV0FBQSxPQUFjUixvQkFBQSxDQUFBVSxxQkFBQSxFQUFzQkQsT0FBTztJQUM5RDtFQUNKO0VBQ0EsSUFBSTVDLE1BQUEsRUFBUTtJQUNSLE9BQU8sS0FBS2IsU0FBQSxHQUFZLEtBQUtBLFNBQUEsQ0FBVTJELFlBQUEsR0FBZTtFQUMxRDtFQUNBLElBQUk5QyxNQUFNK0MsUUFBQSxFQUFVO0lBQ2hCLElBQUksS0FBSzVELFNBQUEsRUFBVztNQUNoQixLQUFLQSxTQUFBLENBQVUyRCxZQUFBLEdBQWVDLFFBQUE7SUFDbEM7RUFDSjtFQUNBLElBQUk1QixNQUFBLEVBQVE7SUFDUixPQUFPLEtBQUtoQyxTQUFBLEdBQVksS0FBS0EsU0FBQSxDQUFVNkQsU0FBQSxHQUFZO0VBQ3ZEO0VBQ0EsSUFBSS9DLFVBQUEsRUFBWTtJQUNaLE9BQU8sS0FBS2QsU0FBQSxHQUFZLEtBQUtBLFNBQUEsQ0FBVWMsU0FBQSxHQUFZO0VBQ3ZEO0VBQ0EsSUFBSWxCLFNBQUEsRUFBVztJQUNYLE9BQU8sS0FBS0ksU0FBQSxHQUFZLEtBQUtBLFNBQUEsQ0FBVUosUUFBQSxHQUFXQyxPQUFBLENBQVFpRSxPQUFBLENBQVE7RUFDdEU7RUFDQXpDLEtBQUEsRUFBTztJQUNILEtBQUtyQixTQUFBLElBQWEsS0FBS0EsU0FBQSxDQUFVcUIsSUFBQSxDQUFLO0VBQzFDO0VBQ0FDLE1BQUEsRUFBUTtJQUNKLEtBQUt0QixTQUFBLElBQWEsS0FBS0EsU0FBQSxDQUFVc0IsS0FBQSxDQUFNO0VBQzNDO0VBQ0E5QixLQUFBLEVBQU87SUFDSCxJQUFJLENBQUMsS0FBS1EsU0FBQSxJQUNOLEtBQUtnQyxLQUFBLEtBQVUsVUFDZixLQUFLQSxLQUFBLEtBQVUsWUFBWTtNQUMzQjtJQUNKO0lBQ0EsSUFBSSxLQUFLaEMsU0FBQSxDQUFVK0QsWUFBQSxFQUFjO01BQzdCLEtBQUsvRCxTQUFBLENBQVUrRCxZQUFBLENBQWE7SUFDaEM7SUFDQSxLQUFLcEQsTUFBQSxDQUFPO0VBQ2hCO0VBQ0FTLFFBQUEsRUFBVTtJQUNOLElBQUk2QixFQUFBO0lBQ0osSUFBSSxDQUFDLEtBQUtqRCxTQUFBLEVBQ047SUFDSixDQUFDaUQsRUFBQSxHQUFLLEtBQUtqRCxTQUFBLENBQVVxRCxNQUFBLE1BQVksUUFBUUosRUFBQSxLQUFPLFNBQVMsU0FBU0EsRUFBQSxDQUFHZSxZQUFBLENBQWE7TUFBRUMsTUFBQSxFQUFRO0lBQVMsQ0FBQztFQUMxRztFQUNBNUcsZUFBZWtELFFBQUEsRUFBVTtJQUNyQixJQUFJLEtBQUtQLFNBQUEsRUFDTDNDLGNBQUEsQ0FBZSxLQUFLMkMsU0FBQSxFQUFXTyxRQUFRO0lBQzNDLE9BQU95QyxvQkFBQSxDQUFBa0IsSUFBQTtFQUNYO0VBQ0EzQyxTQUFBLEVBQVc7SUFDUCxLQUFLdkIsU0FBQSxJQUFhLEtBQUtBLFNBQUEsQ0FBVW1FLE1BQUEsQ0FBTztFQUM1QztFQUNBeEQsT0FBQSxFQUFTO0lBQ0wsSUFBSTtNQUNBLEtBQUtYLFNBQUEsSUFBYSxLQUFLQSxTQUFBLENBQVVXLE1BQUEsQ0FBTztJQUM1QyxTQUNPeUQsQ0FBQSxFQUFQLENBQVk7RUFDaEI7QUFDSjs7O0FDaEZBLElBQU14RyxrQkFBQSxHQUFzQnFHLE1BQUEsSUFBV0ksS0FBQSxDQUFNQyxPQUFBLENBQVFMLE1BQU0sS0FBSyxPQUFPQSxNQUFBLENBQU8sT0FBTzs7O0FDSXJGLElBQU14RixhQUFBLEdBQWdCO0VBQ2xCOEYsWUFBQSxFQUFjO0FBQ2xCOzs7QUNOQSxJQUFBQyxvQkFBQSxHQUFxQnZGLE9BQUE7QUFHckIsU0FBU3dGLGFBQWFDLFFBQUEsRUFBVUMsWUFBQSxFQUFjO0VBQzFDLE1BQU1DLFFBQUEsT0FBV0osb0JBQUEsQ0FBQXRGLElBQUEsRUFBS3dGLFFBQVE7RUFDOUIsT0FBTyxNQUFNO0lBQUUsSUFBSXpCLEVBQUE7SUFBSSxRQUFRQSxFQUFBLEdBQUt4RSxhQUFBLENBQWNrRyxZQUFBLE9BQW1CLFFBQVExQixFQUFBLEtBQU8sU0FBU0EsRUFBQSxHQUFLMkIsUUFBQSxDQUFTO0VBQUc7QUFDbEg7OztBQ0pBLElBQU1sRyxvQkFBQSxHQUFxQyxlQUFBK0YsWUFBQSxDQUFhLE1BQU07RUFDMUQsSUFBSTtJQUNBSSxRQUFBLENBQ0tDLGFBQUEsQ0FBYyxLQUFLLEVBQ25CQyxPQUFBLENBQVE7TUFBRUMsT0FBQSxFQUFTO0lBQUUsR0FBRztNQUFFZixNQUFBLEVBQVE7SUFBZSxDQUFDO0VBQzNELFNBQ09HLENBQUEsRUFBUDtJQUNJLE9BQU87RUFDWDtFQUNBLE9BQU87QUFDWCxHQUFHLGNBQWM7OztBQ1pqQixJQUFBYSxvQkFBQSxHQUF5QmhHLE9BQUE7QUFFekIsSUFBTXhCLG9CQUFBLEdBQXVCQSxDQUFDd0csTUFBQSxFQUFRbEQsUUFBQSxFQUN0Q21FLFVBQUEsR0FBYSxPQUNSO0VBQ0QsSUFBSUMsTUFBQSxHQUFTO0VBQ2IsTUFBTUMsU0FBQSxHQUFZbkUsSUFBQSxDQUFLRCxHQUFBLENBQUlDLElBQUEsQ0FBS29FLEtBQUEsQ0FBTXRFLFFBQUEsR0FBV21FLFVBQVUsR0FBRyxDQUFDO0VBQy9ELFNBQVM3RSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJK0UsU0FBQSxFQUFXL0UsQ0FBQSxJQUFLO0lBQ2hDOEUsTUFBQSxJQUFVbEIsTUFBQSxLQUFPZ0Isb0JBQUEsQ0FBQUssUUFBQSxFQUFTLEdBQUdGLFNBQUEsR0FBWSxHQUFHL0UsQ0FBQyxDQUFDLElBQUk7RUFDdEQ7RUFDQSxPQUFPLFVBQVU4RSxNQUFBLENBQU9JLFNBQUEsQ0FBVSxHQUFHSixNQUFBLENBQU83RSxNQUFBLEdBQVMsQ0FBQztBQUMxRDs7O0FDUEEsU0FBU3BDLHVCQUF1QitGLE1BQUEsRUFBUTtFQUNwQyxPQUFPdEUsT0FBQSxDQUFTLE9BQU9zRSxNQUFBLEtBQVcsY0FBY3ZGLG9CQUFBLENBQXFCLEtBQ2pFLENBQUN1RixNQUFBLElBQ0EsT0FBT0EsTUFBQSxLQUFXLGFBQ2RBLE1BQUEsSUFBVXpGLG9CQUFBLElBQXdCRSxvQkFBQSxDQUFxQixNQUM1RGQsa0JBQUEsQ0FBbUJxRyxNQUFNLEtBQ3hCSSxLQUFBLENBQU1DLE9BQUEsQ0FBUUwsTUFBTSxLQUFLQSxNQUFBLENBQU91QixLQUFBLENBQU10SCxzQkFBc0IsQ0FBRTtBQUN2RTtBQUNBLElBQU1WLG1CQUFBLEdBQXNCQSxDQUFDLENBQUNpSSxDQUFBLEVBQUdDLENBQUEsRUFBR0MsQ0FBQSxFQUFHQyxDQUFDLE1BQU0sZ0JBQWdCSCxDQUFBLEtBQU1DLENBQUEsS0FBTUMsQ0FBQSxLQUFNQyxDQUFBO0FBQ2hGLElBQU1wSCxvQkFBQSxHQUF1QjtFQUN6QnFILE1BQUEsRUFBUTtFQUNSbEQsSUFBQSxFQUFNO0VBQ05tRCxNQUFBLEVBQVE7RUFDUkMsT0FBQSxFQUFTO0VBQ1RDLFNBQUEsRUFBVztFQUNYQyxNQUFBLEVBQXNCLGVBQUF6SSxtQkFBQSxDQUFvQixDQUFDLEdBQUcsTUFBTSxNQUFNLENBQUMsQ0FBQztFQUM1RDBJLE9BQUEsRUFBdUIsZUFBQTFJLG1CQUFBLENBQW9CLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0VBQzdEMkksTUFBQSxFQUFzQixlQUFBM0ksbUJBQUEsQ0FBb0IsQ0FBQyxNQUFNLE1BQU0sTUFBTSxLQUFLLENBQUM7RUFDbkU0SSxPQUFBLEVBQXVCLGVBQUE1SSxtQkFBQSxDQUFvQixDQUFDLE1BQU0sTUFBTSxNQUFNLElBQUksQ0FBQztBQUN2RTtBQUNBLFNBQVNXLHdCQUF3QjhGLE1BQUEsRUFBUWxELFFBQUEsRUFBVTtFQUMvQyxJQUFJLENBQUNrRCxNQUFBLEVBQVE7SUFDVCxPQUFPO0VBQ1gsV0FDUyxPQUFPQSxNQUFBLEtBQVcsY0FBY3ZGLG9CQUFBLENBQXFCLEdBQUc7SUFDN0QsT0FBT2pCLG9CQUFBLENBQXFCd0csTUFBQSxFQUFRbEQsUUFBUTtFQUNoRCxXQUNTbkQsa0JBQUEsQ0FBbUJxRyxNQUFNLEdBQUc7SUFDakMsT0FBT3pHLG1CQUFBLENBQW9CeUcsTUFBTTtFQUNyQyxXQUNTSSxLQUFBLENBQU1DLE9BQUEsQ0FBUUwsTUFBTSxHQUFHO0lBQzVCLE9BQU9BLE1BQUEsQ0FBT2xFLEdBQUEsQ0FBS3NHLGFBQUEsSUFBa0JsSSx1QkFBQSxDQUF3QmtJLGFBQUEsRUFBZXRGLFFBQVEsS0FDaEZ2QyxvQkFBQSxDQUFxQnVILE9BQU87RUFDcEMsT0FDSztJQUNELE9BQU92SCxvQkFBQSxDQUFxQnlGLE1BQUE7RUFDaEM7QUFDSjs7O0FDekNBLElBQU1uRyxVQUFBLEdBQWE7RUFDZndJLENBQUEsRUFBRztFQUNIQyxDQUFBLEVBQUc7QUFDUDtBQUNBLFNBQVMxSSxhQUFBLEVBQWU7RUFDcEIsT0FBT0MsVUFBQSxDQUFXd0ksQ0FBQSxJQUFLeEksVUFBQSxDQUFXeUksQ0FBQTtBQUN0Qzs7O0FDTkEsU0FBU2pJLGdCQUFnQmtJLGlCQUFBLEVBQW1CQyxLQUFBLEVBQU9DLGFBQUEsRUFBZTtFQUM5RCxJQUFJekQsRUFBQTtFQUNKLElBQUl1RCxpQkFBQSxZQUE2QkcsT0FBQSxFQUFTO0lBQ3RDLE9BQU8sQ0FBQ0gsaUJBQWlCO0VBQzdCLFdBQ1MsT0FBT0EsaUJBQUEsS0FBc0IsVUFBVTtJQUM1QyxJQUFJSSxJQUFBLEdBQU8vQixRQUFBO0lBQ1gsSUFBSTRCLEtBQUEsRUFBTztNQU1QRyxJQUFBLEdBQU9ILEtBQUEsQ0FBTUksT0FBQTtJQUNqQjtJQUNBLE1BQU1DLFFBQUEsSUFBWTdELEVBQUEsR0FBS3lELGFBQUEsS0FBa0IsUUFBUUEsYUFBQSxLQUFrQixTQUFTLFNBQVNBLGFBQUEsQ0FBY0YsaUJBQUEsT0FBd0IsUUFBUXZELEVBQUEsS0FBTyxTQUFTQSxFQUFBLEdBQUsyRCxJQUFBLENBQUtHLGdCQUFBLENBQWlCUCxpQkFBaUI7SUFDL0wsT0FBT00sUUFBQSxHQUFXekMsS0FBQSxDQUFNMkMsSUFBQSxDQUFLRixRQUFRLElBQUksRUFBQztFQUM5QztFQUNBLE9BQU96QyxLQUFBLENBQU0yQyxJQUFBLENBQUtSLGlCQUFpQjtBQUN2Qzs7O0FDakJBLFNBQVNTLGFBQWFULGlCQUFBLEVBQW1CbkUsT0FBQSxFQUFTO0VBQzlDLE1BQU15RSxRQUFBLEdBQVd4SSxlQUFBLENBQWdCa0ksaUJBQWlCO0VBQ2xELE1BQU1VLHNCQUFBLEdBQXlCLElBQUlDLGVBQUEsQ0FBZ0I7RUFDbkQsTUFBTUMsWUFBQSxHQUFlO0lBQ2pCQyxPQUFBLEVBQVM7SUFDVCxHQUFHaEYsT0FBQTtJQUNIaUYsTUFBQSxFQUFRSixzQkFBQSxDQUF1Qkk7RUFDbkM7RUFDQSxNQUFNM0csTUFBQSxHQUFTQSxDQUFBLEtBQU11RyxzQkFBQSxDQUF1QkssS0FBQSxDQUFNO0VBQ2xELE9BQU8sQ0FBQ1QsUUFBQSxFQUFVTSxZQUFBLEVBQWN6RyxNQUFNO0FBQzFDOzs7QUNMQSxTQUFTNkcsYUFBYTlDLFFBQUEsRUFBVTtFQUM1QixPQUFRK0MsS0FBQSxJQUFVO0lBQ2QsSUFBSUEsS0FBQSxDQUFNQyxXQUFBLEtBQWdCLFdBQVc3SixZQUFBLENBQWEsR0FDOUM7SUFDSjZHLFFBQUEsQ0FBUytDLEtBQUs7RUFDbEI7QUFDSjtBQVFBLFNBQVM5SixNQUFNNkksaUJBQUEsRUFBbUJtQixZQUFBLEVBQWN0RixPQUFBLEdBQVUsQ0FBQyxHQUFHO0VBQzFELE1BQU0sQ0FBQ3lFLFFBQUEsRUFBVU0sWUFBQSxFQUFjekcsTUFBTSxJQUFJc0csWUFBQSxDQUFhVCxpQkFBQSxFQUFtQm5FLE9BQU87RUFDaEYsTUFBTXVGLGNBQUEsR0FBaUJKLFlBQUEsQ0FBY0ssVUFBQSxJQUFlO0lBQ2hELE1BQU07TUFBRUM7SUFBTyxJQUFJRCxVQUFBO0lBQ25CLE1BQU1FLFVBQUEsR0FBYUosWUFBQSxDQUFhRSxVQUFVO0lBQzFDLElBQUksT0FBT0UsVUFBQSxLQUFlLGNBQWMsQ0FBQ0QsTUFBQSxFQUNyQztJQUNKLE1BQU1FLGNBQUEsR0FBaUJSLFlBQUEsQ0FBY1MsVUFBQSxJQUFlO01BQ2hERixVQUFBLENBQVdFLFVBQVU7TUFDckJILE1BQUEsQ0FBT0ksbUJBQUEsQ0FBb0IsZ0JBQWdCRixjQUFjO0lBQzdELENBQUM7SUFDREYsTUFBQSxDQUFPSyxnQkFBQSxDQUFpQixnQkFBZ0JILGNBQUEsRUFBZ0JaLFlBQVk7RUFDeEUsQ0FBQztFQUNETixRQUFBLENBQVNwRyxPQUFBLENBQVMwSCxPQUFBLElBQVk7SUFDMUJBLE9BQUEsQ0FBUUQsZ0JBQUEsQ0FBaUIsZ0JBQWdCUCxjQUFBLEVBQWdCUixZQUFZO0VBQ3pFLENBQUM7RUFDRCxPQUFPekcsTUFBQTtBQUNYOzs7QUMvQkEsSUFBTTNDLGFBQUEsR0FBZ0JBLENBQUNxSyxNQUFBLEVBQVFDLEtBQUEsS0FBVTtFQUNyQyxJQUFJLENBQUNBLEtBQUEsRUFBTztJQUNSLE9BQU87RUFDWCxXQUNTRCxNQUFBLEtBQVdDLEtBQUEsRUFBTztJQUN2QixPQUFPO0VBQ1gsT0FDSztJQUNELE9BQU90SyxhQUFBLENBQWNxSyxNQUFBLEVBQVFDLEtBQUEsQ0FBTUMsYUFBYTtFQUNwRDtBQUNKOzs7QUNqQkEsSUFBTXRLLGdCQUFBLEdBQW9Cd0osS0FBQSxJQUFVO0VBQ2hDLElBQUlBLEtBQUEsQ0FBTUMsV0FBQSxLQUFnQixTQUFTO0lBQy9CLE9BQU8sT0FBT0QsS0FBQSxDQUFNZSxNQUFBLEtBQVcsWUFBWWYsS0FBQSxDQUFNZSxNQUFBLElBQVU7RUFDL0QsT0FDSztJQVNELE9BQU9mLEtBQUEsQ0FBTWdCLFNBQUEsS0FBYztFQUMvQjtBQUNKOzs7QUNmQSxJQUFNQyxpQkFBQSxHQUFvQixtQkFBSUMsR0FBQSxDQUFJLENBQzlCLFVBQ0EsU0FDQSxVQUNBLFlBQ0EsSUFDSDtBQUNELFNBQVNDLDRCQUE0QlIsT0FBQSxFQUFTO0VBQzFDLE9BQVFNLGlCQUFBLENBQWtCRyxHQUFBLENBQUlULE9BQUEsQ0FBUVUsT0FBTyxLQUN6Q1YsT0FBQSxDQUFRVyxRQUFBLEtBQWE7QUFDN0I7OztBQ1ZBLElBQU1DLFVBQUEsR0FBYSxtQkFBSUMsT0FBQSxDQUFROzs7QUNLL0IsU0FBU0MsY0FBYXhFLFFBQUEsRUFBVTtFQUM1QixPQUFRK0MsS0FBQSxJQUFVO0lBQ2QsSUFBSUEsS0FBQSxDQUFNNUYsR0FBQSxLQUFRLFNBQ2Q7SUFDSjZDLFFBQUEsQ0FBUytDLEtBQUs7RUFDbEI7QUFDSjtBQUNBLFNBQVMwQixpQkFBaUJyQixNQUFBLEVBQVFwRixJQUFBLEVBQU07RUFDcENvRixNQUFBLENBQU9zQixhQUFBLENBQWMsSUFBSUMsWUFBQSxDQUFhLFlBQVkzRyxJQUFBLEVBQU07SUFBRStGLFNBQUEsRUFBVztJQUFNYSxPQUFBLEVBQVM7RUFBSyxDQUFDLENBQUM7QUFDL0Y7QUFDQSxJQUFNQyxtQkFBQSxHQUFzQkEsQ0FBQ0MsVUFBQSxFQUFZcEMsWUFBQSxLQUFpQjtFQUN0RCxNQUFNZ0IsT0FBQSxHQUFVb0IsVUFBQSxDQUFXQyxhQUFBO0VBQzNCLElBQUksQ0FBQ3JCLE9BQUEsRUFDRDtFQUNKLE1BQU1zQixhQUFBLEdBQWdCUixhQUFBLENBQWEsTUFBTTtJQUNyQyxJQUFJRixVQUFBLENBQVdILEdBQUEsQ0FBSVQsT0FBTyxHQUN0QjtJQUNKZSxnQkFBQSxDQUFpQmYsT0FBQSxFQUFTLE1BQU07SUFDaEMsTUFBTXVCLFdBQUEsR0FBY1QsYUFBQSxDQUFhLE1BQU07TUFDbkNDLGdCQUFBLENBQWlCZixPQUFBLEVBQVMsSUFBSTtJQUNsQyxDQUFDO0lBQ0QsTUFBTXdCLFVBQUEsR0FBYUEsQ0FBQSxLQUFNVCxnQkFBQSxDQUFpQmYsT0FBQSxFQUFTLFFBQVE7SUFDM0RBLE9BQUEsQ0FBUUQsZ0JBQUEsQ0FBaUIsU0FBU3dCLFdBQUEsRUFBYXZDLFlBQVk7SUFDM0RnQixPQUFBLENBQVFELGdCQUFBLENBQWlCLFFBQVF5QixVQUFBLEVBQVl4QyxZQUFZO0VBQzdELENBQUM7RUFDRGdCLE9BQUEsQ0FBUUQsZ0JBQUEsQ0FBaUIsV0FBV3VCLGFBQUEsRUFBZXRDLFlBQVk7RUFJL0RnQixPQUFBLENBQVFELGdCQUFBLENBQWlCLFFBQVEsTUFBTUMsT0FBQSxDQUFRRixtQkFBQSxDQUFvQixXQUFXd0IsYUFBYSxHQUFHdEMsWUFBWTtBQUM5Rzs7O0FDdkJBLFNBQVN5QyxrQkFBa0JwQyxLQUFBLEVBQU87RUFDOUIsT0FBT3hKLGdCQUFBLENBQWlCd0osS0FBSyxLQUFLLENBQUM1SixZQUFBLENBQWE7QUFDcEQ7QUFvQkEsU0FBU1EsTUFBTW1JLGlCQUFBLEVBQW1Cc0QsWUFBQSxFQUFjekgsT0FBQSxHQUFVLENBQUMsR0FBRztFQUMxRCxNQUFNLENBQUN5RSxRQUFBLEVBQVVNLFlBQUEsRUFBYzJDLFlBQVksSUFBSTlDLFlBQUEsQ0FBYVQsaUJBQUEsRUFBbUJuRSxPQUFPO0VBQ3RGLE1BQU0ySCxVQUFBLEdBQWNDLFVBQUEsSUFBZTtJQUMvQixNQUFNN0IsT0FBQSxHQUFVNkIsVUFBQSxDQUFXUixhQUFBO0lBQzNCLElBQUksQ0FBQ0ksaUJBQUEsQ0FBa0JJLFVBQVUsS0FBS2pCLFVBQUEsQ0FBV0gsR0FBQSxDQUFJVCxPQUFPLEdBQ3hEO0lBQ0pZLFVBQUEsQ0FBV2tCLEdBQUEsQ0FBSTlCLE9BQU87SUFDdEIsTUFBTStCLFVBQUEsR0FBYUwsWUFBQSxDQUFhRyxVQUFVO0lBQzFDLE1BQU1HLFlBQUEsR0FBZUEsQ0FBQ0MsUUFBQSxFQUFVQyxPQUFBLEtBQVk7TUFDeENuTCxNQUFBLENBQU8rSSxtQkFBQSxDQUFvQixhQUFhcUMsV0FBVztNQUNuRHBMLE1BQUEsQ0FBTytJLG1CQUFBLENBQW9CLGlCQUFpQnNDLGVBQWU7TUFDM0QsSUFBSSxDQUFDWCxpQkFBQSxDQUFrQlEsUUFBUSxLQUFLLENBQUNyQixVQUFBLENBQVdILEdBQUEsQ0FBSVQsT0FBTyxHQUFHO1FBQzFEO01BQ0o7TUFDQVksVUFBQSxDQUFXeUIsTUFBQSxDQUFPckMsT0FBTztNQUN6QixJQUFJLE9BQU8rQixVQUFBLEtBQWUsWUFBWTtRQUNsQ0EsVUFBQSxDQUFXRSxRQUFBLEVBQVU7VUFBRUM7UUFBUSxDQUFDO01BQ3BDO0lBQ0o7SUFDQSxNQUFNQyxXQUFBLEdBQWVHLE9BQUEsSUFBWTtNQUM3Qk4sWUFBQSxDQUFhTSxPQUFBLEVBQVNySSxPQUFBLENBQVFzSSxlQUFBLElBQzFCM00sYUFBQSxDQUFjb0ssT0FBQSxFQUFTc0MsT0FBQSxDQUFRNUMsTUFBTSxDQUFDO0lBQzlDO0lBQ0EsTUFBTTBDLGVBQUEsR0FBbUJJLFdBQUEsSUFBZ0I7TUFDckNSLFlBQUEsQ0FBYVEsV0FBQSxFQUFhLEtBQUs7SUFDbkM7SUFDQXpMLE1BQUEsQ0FBT2dKLGdCQUFBLENBQWlCLGFBQWFvQyxXQUFBLEVBQWFuRCxZQUFZO0lBQzlEakksTUFBQSxDQUFPZ0osZ0JBQUEsQ0FBaUIsaUJBQWlCcUMsZUFBQSxFQUFpQnBELFlBQVk7RUFDMUU7RUFDQU4sUUFBQSxDQUFTcEcsT0FBQSxDQUFTMEgsT0FBQSxJQUFZO0lBQzFCLElBQUksQ0FBQ1EsMkJBQUEsQ0FBNEJSLE9BQU8sS0FDcENBLE9BQUEsQ0FBUXlDLFlBQUEsQ0FBYSxVQUFVLE1BQU0sTUFBTTtNQUMzQ3pDLE9BQUEsQ0FBUVcsUUFBQSxHQUFXO0lBQ3ZCO0lBQ0EsTUFBTWpCLE1BQUEsR0FBU3pGLE9BQUEsQ0FBUXNJLGVBQUEsR0FBa0J4TCxNQUFBLEdBQVNpSixPQUFBO0lBQ2xETixNQUFBLENBQU9LLGdCQUFBLENBQWlCLGVBQWU2QixVQUFBLEVBQVk1QyxZQUFZO0lBQy9EZ0IsT0FBQSxDQUFRRCxnQkFBQSxDQUFpQixTQUFVVixLQUFBLElBQVU4QixtQkFBQSxDQUFvQjlCLEtBQUEsRUFBT0wsWUFBWSxHQUFHQSxZQUFZO0VBQ3ZHLENBQUM7RUFDRCxPQUFPMkMsWUFBQTtBQUNYOzs7QUN6RUEsSUFBQWUsb0JBQUEsR0FBc0M3TCxPQUFBO0FBTXRDLElBQU04TCxhQUFBLEdBQWdCO0FBQ3RCLFNBQVNDLHNCQUFzQjNJLE9BQUEsRUFBUztFQUNwQyxJQUFJWSxFQUFBO0VBQ0osSUFBSWxGLFdBQUEsQ0FBWXNFLE9BQUEsQ0FBUUssSUFBSSxHQUFHO0lBQzNCLE1BQU11SSxnQkFBQSxHQUFtQjFOLHFCQUFBLENBQXNCOEUsT0FBQSxFQUFTLEtBQUtBLE9BQUEsQ0FBUUssSUFBSTtJQUN6RUwsT0FBQSxDQUFRTSxJQUFBLEdBQU9qRSxvQkFBQSxDQUFxQixJQUM5QnVNLGdCQUFBLENBQWlCdEksSUFBQSxHQUNqQm9JLGFBQUE7SUFDTjFJLE9BQUEsQ0FBUXRCLFFBQUEsT0FBVytKLG9CQUFBLENBQUFwSCxxQkFBQSxFQUFzQnVILGdCQUFBLENBQWlCbEssUUFBUTtJQUNsRXNCLE9BQUEsQ0FBUUssSUFBQSxHQUFPO0VBQ25CLE9BQ0s7SUFDREwsT0FBQSxDQUFRdEIsUUFBQSxPQUFXK0osb0JBQUEsQ0FBQXBILHFCQUFBLEdBQXVCVCxFQUFBLEdBQUtaLE9BQUEsQ0FBUXRCLFFBQUEsTUFBYyxRQUFRa0MsRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSyxHQUFHO0lBQ3JHWixPQUFBLENBQVFNLElBQUEsR0FBT04sT0FBQSxDQUFRTSxJQUFBLElBQVFvSSxhQUFBO0VBQ25DO0FBQ0o7QUFFQSxTQUFTRyw2QkFBNkJDLFNBQUEsRUFBVzNJLFNBQUEsRUFBV0gsT0FBQSxFQUFTO0VBQ2pFLElBQUlZLEVBQUE7RUFDSixNQUFNbUksZUFBQSxHQUFrQixDQUFDO0VBQ3pCLE1BQU1DLGFBQUEsR0FBZ0I7SUFDbEJDLElBQUEsRUFBTTtJQUNOckgsTUFBQSxFQUFRO0lBQ1JzSCxTQUFBLEVBQVc7RUFDZjtFQUNBRixhQUFBLENBQWNHLEtBQUEsT0FBUVYsb0JBQUEsQ0FBQXBILHFCQUFBLEdBQXVCVCxFQUFBLEdBQUtaLE9BQUEsQ0FBUW1KLEtBQUEsTUFBVyxRQUFRdkksRUFBQSxLQUFPLFNBQVNBLEVBQUEsR0FBSyxDQUFDO0VBQ25HK0gscUJBQUEsQ0FBc0IzSSxPQUFPO0VBQzdCZ0osYUFBQSxDQUFjdEssUUFBQSxHQUFXc0IsT0FBQSxDQUFRdEIsUUFBQTtFQUNqQyxNQUFNO0lBQUU0QixJQUFBO0lBQU04STtFQUFNLElBQUlwSixPQUFBO0VBQ3hCLElBQUlvSixLQUFBLEVBQ0FMLGVBQUEsQ0FBZ0JNLE1BQUEsR0FBU0QsS0FBQTtFQUM3QkwsZUFBQSxDQUFnQkQsU0FBQSxJQUFhM0ksU0FBQTtFQUM3QixNQUFNeUIsTUFBQSxHQUFTOUYsdUJBQUEsQ0FBd0J3RSxJQUFBLEVBQU1OLE9BQUEsQ0FBUXRCLFFBQVE7RUFJN0QsSUFBSXNELEtBQUEsQ0FBTUMsT0FBQSxDQUFRTCxNQUFNLEdBQUc7SUFDdkJtSCxlQUFBLENBQWdCbkgsTUFBQSxHQUFTQSxNQUFBO0VBQzdCLE9BQ0s7SUFDRG9ILGFBQUEsQ0FBY3BILE1BQUEsR0FBU0EsTUFBQTtFQUMzQjtFQUNBLE9BQU87SUFDSHpCLFNBQUEsRUFBVzRJLGVBQUE7SUFDWC9JLE9BQUEsRUFBU2dKO0VBQ2I7QUFDSjs7O0FDakRBLElBQU1NLGVBQUEsR0FBTixjQUE4QnhPLHVCQUFBLENBQXdCO0VBQ2xEbUMsWUFBWXdJLE1BQUEsRUFBUThELGFBQUEsRUFBZVQsU0FBQSxFQUFXM0ksU0FBQSxFQUFXSCxPQUFBLEVBQVM7SUFDOUQsTUFBTXdKLGdCQUFBLEdBQW1CWCw0QkFBQSxDQUE2QkMsU0FBQSxFQUFXM0ksU0FBQSxFQUFXSCxPQUFPO0lBQ25GLE1BQU1yQyxTQUFBLEdBQVk4SCxNQUFBLENBQU8vQyxPQUFBLENBQVE4RyxnQkFBQSxDQUFpQnJKLFNBQUEsRUFBVztNQUN6RG9KLGFBQUE7TUFDQSxHQUFHQyxnQkFBQSxDQUFpQnhKO0lBQ3hCLENBQUM7SUFDRCxNQUFNckMsU0FBUztFQUNuQjtBQUNKOzs7QUNaQSxTQUFTOEwsZ0JBQWdCWCxTQUFBLEVBQVc7RUFDaEMsSUFBSUEsU0FBQSxLQUFjLFVBQ2QsT0FBTztFQUNYLElBQUlBLFNBQUEsS0FBYyxXQUFXQSxTQUFBLEtBQWMsT0FDdkMsT0FBTztFQUNYLElBQUlBLFNBQUEsS0FBYyxVQUFVQSxTQUFBLEtBQWMsT0FDdEMsT0FBTztFQUNYLE9BQU87QUFDWDs7O0FDUkEsSUFBSVksWUFBQSxHQUFlLENBQUM7QUFDcEIsSUFBSUMsS0FBQSxHQUFRO0FBQ1osSUFBTUMsR0FBQSxHQUFNO0VBQ1JDLEdBQUEsRUFBS0EsQ0FBQ0MsUUFBQSxFQUFVQyxNQUFBLEtBQVc7SUFDdkJMLFlBQUEsQ0FBYUksUUFBQSxJQUFZQyxNQUFBO0VBQzdCO0VBQ0FDLE1BQUEsRUFBUUEsQ0FBQSxLQUFNO0lBQ1YsSUFBSSxDQUFDTCxLQUFBLEVBQU87TUFDUkEsS0FBQSxHQUFRbkgsUUFBQSxDQUFTQyxhQUFBLENBQWMsT0FBTztNQUN0Q2tILEtBQUEsQ0FBTU0sRUFBQSxHQUFLO0lBQ2Y7SUFDQSxJQUFJQyxPQUFBLEdBQVU7SUFDZCxXQUFXSixRQUFBLElBQVlKLFlBQUEsRUFBYztNQUNqQyxNQUFNUyxJQUFBLEdBQU9ULFlBQUEsQ0FBYUksUUFBQTtNQUMxQkksT0FBQSxJQUFXLEdBQUdKLFFBQUE7QUFBQTtNQUNkLFdBQVcsQ0FBQ00sUUFBQSxFQUFVNUosS0FBSyxLQUFLNkosTUFBQSxDQUFPQyxPQUFBLENBQVFILElBQUksR0FBRztRQUNsREQsT0FBQSxJQUFXLEtBQUtFLFFBQUEsS0FBYTVKLEtBQUE7QUFBQTtNQUNqQztNQUNBMEosT0FBQSxJQUFXO0lBQ2Y7SUFDQVAsS0FBQSxDQUFNWSxXQUFBLEdBQWNMLE9BQUE7SUFDcEIxSCxRQUFBLENBQVNnSSxJQUFBLENBQUtDLFdBQUEsQ0FBWWQsS0FBSztJQUMvQkQsWUFBQSxHQUFlLENBQUM7RUFDcEI7RUFDQWdCLE1BQUEsRUFBUUEsQ0FBQSxLQUFNO0lBQ1YsSUFBSWYsS0FBQSxJQUFTQSxLQUFBLENBQU16RCxhQUFBLEVBQWU7TUFDOUJ5RCxLQUFBLENBQU16RCxhQUFBLENBQWN5RSxXQUFBLENBQVloQixLQUFLO0lBQ3pDO0VBQ0o7QUFDSjs7O0FDN0JBLFNBQVNpQixhQUFhckIsYUFBQSxFQUFlO0VBQ2pDLE1BQU1zQixLQUFBLEdBQVF0QixhQUFBLENBQWNzQixLQUFBLENBQU0sdURBQXVEO0VBQ3pGLElBQUksQ0FBQ0EsS0FBQSxFQUNELE9BQU87RUFDWCxPQUFPO0lBQUVDLEtBQUEsRUFBT0QsS0FBQSxDQUFNO0lBQUl4SyxJQUFBLEVBQU13SyxLQUFBLENBQU07RUFBRztBQUM3Qzs7O0FDTEEsU0FBU0UscUJBQXFCcE4sU0FBQSxFQUFXO0VBQ3JDLElBQUlpRCxFQUFBO0VBQ0osTUFBTTtJQUFFSTtFQUFPLElBQUlyRCxTQUFBO0VBQ25CLElBQUksQ0FBQ3FELE1BQUEsRUFDRCxPQUFPO0VBQ1gsT0FBUUEsTUFBQSxDQUFPeUUsTUFBQSxLQUFXakQsUUFBQSxDQUFTd0ksZUFBQSxNQUM3QnBLLEVBQUEsR0FBS0ksTUFBQSxDQUFPdUksYUFBQSxNQUFtQixRQUFRM0ksRUFBQSxLQUFPLFNBQVMsU0FBU0EsRUFBQSxDQUFHcUssVUFBQSxDQUFXLG1CQUFtQjtBQUMzRztBQUNBLFNBQVNDLGtCQUFBLEVBQW9CO0VBQ3pCLE9BQU8xSSxRQUFBLENBQVMySSxhQUFBLENBQWMsRUFBRTlOLE1BQUEsQ0FBTzBOLG9CQUFvQjtBQUMvRDs7O0FDVkEsU0FBU0ssVUFBVTNGLE1BQUEsRUFBUTRGLE9BQUEsRUFBUztFQUNoQyxPQUFPQSxPQUFBLENBQVE3RSxHQUFBLENBQUlmLE1BQU0sS0FBSzRFLE1BQUEsQ0FBT2lCLElBQUEsQ0FBS0QsT0FBQSxDQUFRRSxHQUFBLENBQUk5RixNQUFNLENBQUMsRUFBRXhILE1BQUEsR0FBUztBQUM1RTs7O0FDRkEsSUFBQXVOLG9CQUFBLEdBQXNDNU8sT0FBQTtBQWF0QyxJQUFNNk8sZUFBQSxHQUFrQixDQUFDLFVBQVUsU0FBUyxRQUFRLE9BQU8sS0FBSztBQUNoRSxTQUFTQyxtQkFBbUJDLE1BQUEsRUFBUUMsY0FBQSxFQUFnQlAsT0FBQSxFQUFTO0VBQ3pELElBQUksQ0FBQzdJLFFBQUEsQ0FBU3FKLG1CQUFBLEVBQXFCO0lBQy9CLE9BQU8sSUFBSXJPLE9BQUEsQ0FBUSxNQUFPaUUsT0FBQSxJQUFZO01BQ2xDLE1BQU1rSyxNQUFBLENBQU87TUFDYmxLLE9BQUEsQ0FBUSxJQUFJekUseUJBQUEsQ0FBMEIsRUFBRSxDQUFDO0lBQzdDLENBQUM7RUFDTDtFQU1BLElBQUksQ0FBQ29PLFNBQUEsQ0FBVSxRQUFRQyxPQUFPLEdBQUc7SUFDN0J6QixHQUFBLENBQUlDLEdBQUEsQ0FBSSxTQUFTO01BQ2Isd0JBQXdCO0lBQzVCLENBQUM7RUFDTDtFQVFBRCxHQUFBLENBQUlDLEdBQUEsQ0FBSSxrRkFBa0Y7SUFBRSw2QkFBNkI7RUFBb0IsQ0FBQztFQUM5SUQsR0FBQSxDQUFJSSxNQUFBLENBQU87RUFDWCxNQUFNekssVUFBQSxHQUFhaUQsUUFBQSxDQUFTcUosbUJBQUEsQ0FBb0IsWUFBWTtJQUN4RCxNQUFNRixNQUFBLENBQU87RUFFakIsQ0FBQztFQUNEcE0sVUFBQSxDQUFXaEMsUUFBQSxDQUFTdU8sT0FBQSxDQUFRLE1BQU07SUFDOUJsQyxHQUFBLENBQUljLE1BQUEsQ0FBTztFQUNmLENBQUM7RUFDRCxPQUFPLElBQUlsTixPQUFBLENBQVNpRSxPQUFBLElBQVk7SUFDNUJsQyxVQUFBLENBQVd3TSxLQUFBLENBQU01TSxJQUFBLENBQUssTUFBTTtNQUN4QixJQUFJeUIsRUFBQTtNQUNKLE1BQU1vTCx1QkFBQSxHQUEwQmQsaUJBQUEsQ0FBa0I7TUFDbEQsTUFBTWhPLFVBQUEsR0FBYSxFQUFDO01BSXBCbU8sT0FBQSxDQUFRaE4sT0FBQSxDQUFRLENBQUM0TixVQUFBLEVBQVl4RyxNQUFBLEtBQVc7UUFHcEMsV0FBV2pHLEdBQUEsSUFBT2lNLGVBQUEsRUFBaUI7VUFDL0IsSUFBSSxDQUFDUSxVQUFBLENBQVd6TSxHQUFBLEdBQ1o7VUFDSixNQUFNO1lBQUVXLFNBQUE7WUFBV0g7VUFBUSxJQUFJaU0sVUFBQSxDQUFXek0sR0FBQTtVQUMxQyxTQUFTLENBQUNzSixTQUFBLEVBQVdvRCxjQUFjLEtBQUs3QixNQUFBLENBQU9DLE9BQUEsQ0FBUW5LLFNBQVMsR0FBRztZQUMvRCxJQUFJLENBQUMrTCxjQUFBLEVBQ0Q7WUFDSixNQUFNQyxZQUFBLEdBQWU7Y0FDakIsR0FBRzlRLGtCQUFBLENBQW1CdVEsY0FBQSxFQUFnQjlDLFNBQVM7Y0FDL0MsR0FBR3pOLGtCQUFBLENBQW1CMkUsT0FBQSxFQUFTOEksU0FBUztZQUM1QztZQUNBLE1BQU16SSxJQUFBLEdBQU9vSixlQUFBLENBQWdCakssR0FBRztZQUtoQyxJQUFJc0osU0FBQSxLQUFjLGFBQ2QsQ0FBQzlHLEtBQUEsQ0FBTUMsT0FBQSxDQUFRaUssY0FBYyxHQUFHO2NBQ2hDLE1BQU1FLFlBQUEsR0FBZS9MLElBQUEsS0FBUyxRQUFRLElBQUk7Y0FDMUM2TCxjQUFBLEdBQWlCLENBQUNFLFlBQUEsRUFBY0YsY0FBYztZQUNsRDtZQUlBLElBQUksT0FBT0MsWUFBQSxDQUFhaEQsS0FBQSxLQUFVLFlBQVk7Y0FDMUNnRCxZQUFBLENBQWFoRCxLQUFBLEdBQVFnRCxZQUFBLENBQWFoRCxLQUFBLENBQU0sR0FBRyxDQUFDO1lBQ2hEO1lBQ0EsTUFBTXhMLFNBQUEsR0FBWSxJQUFJMkwsZUFBQSxDQUFnQjlHLFFBQUEsQ0FBU3dJLGVBQUEsRUFBaUIscUJBQXFCM0ssSUFBQSxJQUFRb0YsTUFBQSxLQUFXcUQsU0FBQSxFQUFXb0QsY0FBQSxFQUFnQkMsWUFBWTtZQUMvSWpQLFVBQUEsQ0FBV21QLElBQUEsQ0FBSzFPLFNBQVM7VUFDN0I7UUFDSjtNQUNKLENBQUM7TUFJRCxXQUFXQSxTQUFBLElBQWFxTyx1QkFBQSxFQUF5QjtRQUM3QyxJQUFJck8sU0FBQSxDQUFVNkQsU0FBQSxLQUFjLFlBQ3hCO1FBQ0osTUFBTTtVQUFFUjtRQUFPLElBQUlyRCxTQUFBO1FBQ25CLElBQUksQ0FBQ3FELE1BQUEsSUFBVSxFQUFFQSxNQUFBLFlBQWtCc0wsY0FBQSxHQUMvQjtRQUNKLE1BQU07VUFBRS9DO1FBQWMsSUFBSXZJLE1BQUE7UUFDMUIsSUFBSSxDQUFDdUksYUFBQSxFQUNEO1FBQ0osTUFBTWdELElBQUEsR0FBTzNCLFlBQUEsQ0FBYXJCLGFBQWE7UUFDdkMsSUFBSSxDQUFDZ0QsSUFBQSxFQUNEO1FBQ0osTUFBTUMsZ0JBQUEsR0FBbUJuQixPQUFBLENBQVFFLEdBQUEsQ0FBSWdCLElBQUEsQ0FBS3pCLEtBQUs7UUFDL0MsSUFBSSxDQUFDMEIsZ0JBQUEsRUFBa0I7VUFNbkIsTUFBTUMsY0FBQSxHQUFpQkYsSUFBQSxDQUFLbE0sSUFBQSxLQUFTLFVBQVUsV0FBVztVQUMxRCxNQUFNcU0sbUJBQUEsR0FBc0I7WUFDeEIsR0FBR3JSLGtCQUFBLENBQW1CdVEsY0FBQSxFQUFnQmEsY0FBYztVQUN4RDtVQUNBOUQscUJBQUEsQ0FBc0IrRCxtQkFBbUI7VUFDekMsTUFBTTlLLE1BQUEsR0FBUzlGLHVCQUFBLENBQXdCNFEsbUJBQUEsQ0FBb0JwTSxJQUFBLEVBQU1vTSxtQkFBQSxDQUFvQmhPLFFBQVE7VUFDN0ZzQyxNQUFBLENBQU9XLFlBQUEsQ0FBYTtZQUNoQndILEtBQUEsTUFBT3FDLG9CQUFBLENBQUFuSyxxQkFBQSxHQUF1QlQsRUFBQSxHQUFLOEwsbUJBQUEsQ0FBb0J2RCxLQUFBLE1BQVcsUUFBUXZJLEVBQUEsS0FBTyxTQUFTQSxFQUFBLEdBQUssQ0FBQztZQUNoR2xDLFFBQUEsRUFBVWdPLG1CQUFBLENBQW9CaE8sUUFBQTtZQUM5QmtEO1VBQ0osQ0FBQztVQUNEMUUsVUFBQSxDQUFXbVAsSUFBQSxDQUFLLElBQUl2Uix1QkFBQSxDQUF3QjZDLFNBQVMsQ0FBQztRQUMxRCxXQUNTZ1AsVUFBQSxDQUFXSCxnQkFBQSxFQUFrQixPQUFPLEtBQ3pDRyxVQUFBLENBQVdILGdCQUFBLEVBQWtCLE1BQU0sS0FDbkN4TCxNQUFBLENBQ0s0TCxZQUFBLENBQWEsRUFDYkMsSUFBQSxDQUFNQyxRQUFBLElBQWFBLFFBQUEsQ0FBU0MsWUFBWSxHQUFHO1VBQ2hEN1AsVUFBQSxDQUFXbVAsSUFBQSxDQUFLLElBQUl2Uix1QkFBQSxDQUF3QjZDLFNBQVMsQ0FBQztRQUMxRCxPQUNLO1VBQ0RBLFNBQUEsQ0FBVVcsTUFBQSxDQUFPO1FBQ3JCO01BQ0o7TUFDQW1ELE9BQUEsQ0FBUSxJQUFJekUseUJBQUEsQ0FBMEJFLFVBQVUsQ0FBQztJQUNyRCxDQUFDO0VBQ0wsQ0FBQztBQUNMO0FBQ0EsU0FBU3lQLFdBQVdsSCxNQUFBLEVBQVFqRyxHQUFBLEVBQUs7RUFDN0IsSUFBSW9CLEVBQUE7RUFDSixRQUFRQSxFQUFBLEdBQUs2RSxNQUFBLEtBQVcsUUFBUUEsTUFBQSxLQUFXLFNBQVMsU0FBU0EsTUFBQSxDQUFPakcsR0FBQSxPQUFVLFFBQVFvQixFQUFBLEtBQU8sU0FBUyxTQUFTQSxFQUFBLENBQUdULFNBQUEsQ0FBVXdDLE9BQUE7QUFDaEk7OztBQy9JQSxJQUFBcUssb0JBQUEsR0FBcUJwUSxPQUFBO0FBU3JCLElBQU03QixxQkFBQSxHQUFOLE1BQTRCO0VBQ3hCa0MsWUFBWTBPLE1BQUEsRUFBUTNMLE9BQUEsR0FBVSxDQUFDLEdBQUc7SUFDOUIsS0FBS29ILGFBQUEsR0FBZ0I7SUFDckIsS0FBS2lFLE9BQUEsR0FBVSxtQkFBSTRCLEdBQUEsQ0FBSTtJQUN2QixLQUFLQyxXQUFBLEdBQWNGLG9CQUFBLENBQUFuTCxJQUFBO0lBQ25CLEtBQUtzTCxZQUFBLEdBQWUsSUFBSTNQLE9BQUEsQ0FBU2lFLE9BQUEsSUFBWTtNQUN6QyxLQUFLeUwsV0FBQSxHQUFjekwsT0FBQTtJQUN2QixDQUFDO0lBQ0QyTCxjQUFBLENBQWUsTUFBTTtNQUNqQjFCLGtCQUFBLENBQW1CQyxNQUFBLEVBQVEzTCxPQUFBLEVBQVMsS0FBS3FMLE9BQU8sRUFBRWxNLElBQUEsQ0FBTXhCLFNBQUEsSUFBYyxLQUFLdVAsV0FBQSxDQUFZdlAsU0FBUyxDQUFDO0lBQ3JHLENBQUM7RUFDTDtFQUNBNE4sSUFBSXpCLFFBQUEsRUFBVTtJQUNWLEtBQUsxQyxhQUFBLEdBQWdCMEMsUUFBQTtJQUNyQixPQUFPO0VBQ1g7RUFDQXVELE9BQU9sTixTQUFBLEVBQVdILE9BQUEsRUFBUztJQUN2QixLQUFLc04sWUFBQSxDQUFhLFVBQVVuTixTQUFBLEVBQVdILE9BQU87SUFDOUMsT0FBTztFQUNYO0VBQ0F1TixJQUFJcE4sU0FBQSxFQUFXSCxPQUFBLEVBQVM7SUFDcEIsS0FBS3NOLFlBQUEsQ0FBYSxPQUFPbk4sU0FBQSxFQUFXSCxPQUFPO0lBQzNDLE9BQU87RUFDWDtFQUNBd04sSUFBSXJOLFNBQUEsRUFBV0gsT0FBQSxFQUFTO0lBQ3BCLEtBQUtzTixZQUFBLENBQWEsT0FBT25OLFNBQUEsRUFBV0gsT0FBTztJQUMzQyxPQUFPO0VBQ1g7RUFDQXlOLE1BQU10TixTQUFBLEVBQVdILE9BQUEsRUFBUztJQUN0QixLQUFLc04sWUFBQSxDQUFhLFNBQVNuTixTQUFBLEVBQVdILE9BQU87SUFDN0MsT0FBTztFQUNYO0VBQ0EwTixLQUFLdk4sU0FBQSxFQUFXSCxPQUFBLEVBQVM7SUFDckIsS0FBS3NOLFlBQUEsQ0FBYSxRQUFRbk4sU0FBQSxFQUFXSCxPQUFPO0lBQzVDLE9BQU87RUFDWDtFQUNBMk4sVUFBVTNOLE9BQUEsRUFBUztJQUNmLEtBQUtzTixZQUFBLENBQWEsU0FBUztNQUFFM0ssT0FBQSxFQUFTO0lBQUUsR0FBRzNDLE9BQU87SUFDbEQsS0FBS3NOLFlBQUEsQ0FBYSxRQUFRO01BQUUzSyxPQUFBLEVBQVM7SUFBRSxHQUFHM0MsT0FBTztJQUNqRCxPQUFPO0VBQ1g7RUFDQXNOLGFBQWE3SCxNQUFBLEVBQVF0RixTQUFBLEVBQVdILE9BQUEsR0FBVSxDQUFDLEdBQUc7SUFDMUMsTUFBTTtNQUFFb0gsYUFBQTtNQUFlaUU7SUFBUSxJQUFJO0lBQ25DLElBQUksQ0FBQ0EsT0FBQSxDQUFRN0UsR0FBQSxDQUFJWSxhQUFhLEdBQUc7TUFDN0JpRSxPQUFBLENBQVF4QixHQUFBLENBQUl6QyxhQUFBLEVBQWUsQ0FBQyxDQUFDO0lBQ2pDO0lBQ0EsTUFBTXdHLFVBQUEsR0FBYXZDLE9BQUEsQ0FBUUUsR0FBQSxDQUFJbkUsYUFBYTtJQUM1Q3dHLFVBQUEsQ0FBV25JLE1BQUEsSUFBVTtNQUFFdEYsU0FBQTtNQUFXSDtJQUFRO0VBQzlDO0VBQ0FiLEtBQUtzQyxPQUFBLEVBQVNvTSxNQUFBLEVBQVE7SUFDbEIsT0FBTyxLQUFLVixZQUFBLENBQWFoTyxJQUFBLENBQUtzQyxPQUFBLEVBQVNvTSxNQUFNO0VBQ2pEO0FBQ0o7QUFDQSxTQUFTdFIsS0FBS29QLE1BQUEsRUFBUUMsY0FBQSxHQUFpQixDQUFDLEdBQUc7RUFDdkMsT0FBTyxJQUFJN1EscUJBQUEsQ0FBc0I0USxNQUFBLEVBQVFDLGNBQWM7QUFDM0Q7OztBQzlEQSxTQUFTMVAsWUFBWTRSLElBQUEsRUFBTTtFQUN2QixJQUFJQSxJQUFBLEtBQVMsT0FBT0EsSUFBQSxLQUFTLEtBQUs7SUFDOUIsSUFBSXJTLFVBQUEsQ0FBV3FTLElBQUEsR0FBTztNQUNsQixPQUFPO0lBQ1gsT0FDSztNQUNEclMsVUFBQSxDQUFXcVMsSUFBQSxJQUFRO01BQ25CLE9BQU8sTUFBTTtRQUNUclMsVUFBQSxDQUFXcVMsSUFBQSxJQUFRO01BQ3ZCO0lBQ0o7RUFDSixPQUNLO0lBQ0QsSUFBSXJTLFVBQUEsQ0FBV3dJLENBQUEsSUFBS3hJLFVBQUEsQ0FBV3lJLENBQUEsRUFBRztNQUM5QixPQUFPO0lBQ1gsT0FDSztNQUNEekksVUFBQSxDQUFXd0ksQ0FBQSxHQUFJeEksVUFBQSxDQUFXeUksQ0FBQSxHQUFJO01BQzlCLE9BQU8sTUFBTTtRQUNUekksVUFBQSxDQUFXd0ksQ0FBQSxHQUFJeEksVUFBQSxDQUFXeUksQ0FBQSxHQUFJO01BQ2xDO0lBQ0o7RUFDSjtBQUNKIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=