System.register(["react@18.3.1","compute-scroll-into-view@3.1.1","scroll-into-view-if-needed@3.1.0","is-plain-object@5.0.0","immer@10.1.3","slate@0.114.0","is-hotkey@0.2.0","slate-dom@0.118.1","@juggle/resize-observer@3.4.0","scheduler@0.23.2","react-dom@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["direction","1.0.4"],["lodash","4.17.21"],["react","18.3.1"],["compute-scroll-into-view","3.1.1"],["scroll-into-view-if-needed","3.1.0"],["is-plain-object","5.0.0"],["immer","10.1.3"],["slate","0.114.0"],["is-hotkey","0.2.0"],["slate-dom","0.118.1"],["@juggle/resize-observer","3.4.0"],["scheduler","0.23.2"],["react-dom","18.3.1"],["slate-react","0.114.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('compute-scroll-into-view@3.1.1', dep), dep => dependencies.set('scroll-into-view-if-needed@3.1.0', dep), dep => dependencies.set('is-plain-object@5.0.0', dep), dep => dependencies.set('immer@10.1.3', dep), dep => dependencies.set('slate@0.114.0', dep), dep => dependencies.set('is-hotkey@0.2.0', dep), dep => dependencies.set('slate-dom@0.118.1', dep), dep => dependencies.set('@juggle/resize-observer@3.4.0', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep)],
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

// node_modules/direction/index.js
var require_direction = __commonJS({
  "node_modules/direction/index.js"(exports, module2) {
    "use strict";

    module2.exports = direction;
    var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
    var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
    var rtl = new RegExp("^[^" + LTR + "]*[" + RTL + "]");
    var ltr = new RegExp("^[^" + RTL + "]*[" + LTR + "]");
    function direction(value) {
      value = String(value || "");
      if (rtl.test(value)) {
        return "rtl";
      }
      if (ltr.test(value)) {
        return "ltr";
      }
      return "neutral";
    }
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module2) {
    var root = require_root();
    var now = function () {
      return root.Date.now();
    };
    module2.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module2) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {}
      return index;
    }
    module2.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module2) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module2.exports = baseTrim;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {}
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol2 = require_Symbol(),
      getRawTag = require_getRawTag(),
      objectToString = require_objectToString();
    var nullTag = "[object Null]",
      undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module2) {
    var baseGetTag = require_baseGetTag(),
      isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module2) {
    var baseTrim = require_baseTrim(),
      isObject = require_isObject(),
      isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module2) {
    var isObject = require_isObject(),
      now = require_now(),
      toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max,
      nativeMin = Math.min;
    function debounce2(func, wait, options) {
      var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs,
          thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(),
          isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module2.exports = debounce2;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module2) {
    var debounce2 = require_debounce(),
      isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true,
        trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce2(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module2.exports = throttle2;
  }
});

// .beyond/uimport/slate-react.0.114.2.js
var slate_react_0_114_2_exports = {};
__export(slate_react_0_114_2_exports, {
  DefaultElement: () => DefaultElement,
  DefaultLeaf: () => DefaultLeaf,
  DefaultPlaceholder: () => DefaultPlaceholder,
  DefaultText: () => DefaultText,
  Editable: () => Editable,
  NODE_TO_INDEX: () => import_slate_dom2.NODE_TO_INDEX,
  NODE_TO_PARENT: () => import_slate_dom2.NODE_TO_PARENT,
  ReactEditor: () => ReactEditor,
  Slate: () => Slate,
  useComposing: () => useComposing,
  useEditor: () => useEditor,
  useFocused: () => useFocused,
  useReadOnly: () => useReadOnly,
  useSelected: () => useSelected,
  useSlate: () => useSlate,
  useSlateSelection: () => useSlateSelection,
  useSlateSelector: () => useSlateSelector,
  useSlateStatic: () => useSlateStatic,
  useSlateWithV: () => useSlateWithV,
  withReact: () => withReact
});
module.exports = __toCommonJS(slate_react_0_114_2_exports);

// node_modules/slate-react/dist/index.es.js
var import_direction = __toESM(require_direction());
var import_debounce = __toESM(require_debounce());
var import_throttle = __toESM(require_throttle());
var import_react = __toESM(require("react@18.3.1"));
var import_scroll_into_view_if_needed = __toESM(require("scroll-into-view-if-needed@3.1.0"));
var import_slate = require("slate@0.114.0");
var import_slate_dom = require("slate-dom@0.118.1");
var import_slate_dom2 = require("slate-dom@0.118.1");
var import_resize_observer = require("@juggle/resize-observer@3.4.0");
var import_react_dom = __toESM(require("react-dom@18.3.1"));
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o2) {
    return typeof o2;
  } : function (o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EditorContext = /* @__PURE__ */(0, import_react.createContext)(null);
var useSlateStatic = () => {
  var editor = (0, import_react.useContext)(EditorContext);
  if (!editor) {
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};
var ReactEditor = import_slate_dom.DOMEditor;
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var RESOLVE_DELAY = 25;
var FLUSH_DELAY = 200;
var debug = function debug2() {};
var isDataTransfer = value => (value === null || value === void 0 ? void 0 : value.constructor.name) === "DataTransfer";
function createAndroidInputManager(_ref) {
  var {
    editor,
    scheduleOnDOMSelectionChange,
    onDOMSelectionChange
  } = _ref;
  var flushing = false;
  var compositionEndTimeoutId = null;
  var flushTimeoutId = null;
  var actionTimeoutId = null;
  var idCounter = 0;
  var insertPositionHint = false;
  var applyPendingSelection = () => {
    var pendingSelection = import_slate_dom.EDITOR_TO_PENDING_SELECTION.get(editor);
    import_slate_dom.EDITOR_TO_PENDING_SELECTION.delete(editor);
    if (pendingSelection) {
      var {
        selection
      } = editor;
      var normalized = (0, import_slate_dom.normalizeRange)(editor, pendingSelection);
      if (normalized && (!selection || !import_slate.Range.equals(normalized, selection))) {
        import_slate.Transforms.select(editor, normalized);
      }
    }
  };
  var performAction = () => {
    var action = import_slate_dom.EDITOR_TO_PENDING_ACTION.get(editor);
    import_slate_dom.EDITOR_TO_PENDING_ACTION.delete(editor);
    if (!action) {
      return;
    }
    if (action.at) {
      var target = import_slate.Point.isPoint(action.at) ? (0, import_slate_dom.normalizePoint)(editor, action.at) : (0, import_slate_dom.normalizeRange)(editor, action.at);
      if (!target) {
        return;
      }
      var _targetRange = import_slate.Editor.range(editor, target);
      if (!editor.selection || !import_slate.Range.equals(editor.selection, _targetRange)) {
        import_slate.Transforms.select(editor, target);
      }
    }
    action.run();
  };
  var flush = () => {
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (actionTimeoutId) {
      clearTimeout(actionTimeoutId);
      actionTimeoutId = null;
    }
    if (!hasPendingDiffs() && !hasPendingAction()) {
      applyPendingSelection();
      return;
    }
    if (!flushing) {
      flushing = true;
      setTimeout(() => flushing = false);
    }
    if (hasPendingAction()) {
      flushing = "action";
    }
    var selectionRef = editor.selection && import_slate.Editor.rangeRef(editor, editor.selection, {
      affinity: "forward"
    });
    import_slate_dom.EDITOR_TO_USER_MARKS.set(editor, editor.marks);
    debug("flush", import_slate_dom.EDITOR_TO_PENDING_ACTION.get(editor), import_slate_dom.EDITOR_TO_PENDING_DIFFS.get(editor));
    var scheduleSelectionChange = hasPendingDiffs();
    var diff;
    while (diff = (_EDITOR_TO_PENDING_DI = import_slate_dom.EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI === void 0 ? void 0 : _EDITOR_TO_PENDING_DI[0]) {
      var _EDITOR_TO_PENDING_DI, _EDITOR_TO_PENDING_DI2;
      var pendingMarks = import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
      if (pendingMarks !== void 0) {
        import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
        editor.marks = pendingMarks;
      }
      if (pendingMarks && insertPositionHint === false) {
        insertPositionHint = null;
      }
      var range = (0, import_slate_dom.targetRange)(diff);
      if (!editor.selection || !import_slate.Range.equals(editor.selection, range)) {
        import_slate.Transforms.select(editor, range);
      }
      if (diff.diff.text) {
        import_slate.Editor.insertText(editor, diff.diff.text);
      } else {
        import_slate.Editor.deleteFragment(editor);
      }
      import_slate_dom.EDITOR_TO_PENDING_DIFFS.set(editor, (_EDITOR_TO_PENDING_DI2 = import_slate_dom.EDITOR_TO_PENDING_DIFFS.get(editor)) === null || _EDITOR_TO_PENDING_DI2 === void 0 ? void 0 : _EDITOR_TO_PENDING_DI2.filter(_ref2 => {
        var {
          id
        } = _ref2;
        return id !== diff.id;
      }));
      if (!(0, import_slate_dom.verifyDiffState)(editor, diff)) {
        scheduleSelectionChange = false;
        import_slate_dom.EDITOR_TO_PENDING_ACTION.delete(editor);
        import_slate_dom.EDITOR_TO_USER_MARKS.delete(editor);
        flushing = "action";
        import_slate_dom.EDITOR_TO_PENDING_SELECTION.delete(editor);
        scheduleOnDOMSelectionChange.cancel();
        onDOMSelectionChange.cancel();
        selectionRef === null || selectionRef === void 0 || selectionRef.unref();
      }
    }
    var selection = selectionRef === null || selectionRef === void 0 ? void 0 : selectionRef.unref();
    if (selection && !import_slate_dom.EDITOR_TO_PENDING_SELECTION.get(editor) && (!editor.selection || !import_slate.Range.equals(selection, editor.selection))) {
      import_slate.Transforms.select(editor, selection);
    }
    if (hasPendingAction()) {
      performAction();
      return;
    }
    if (scheduleSelectionChange) {
      scheduleOnDOMSelectionChange();
    }
    scheduleOnDOMSelectionChange.flush();
    onDOMSelectionChange.flush();
    applyPendingSelection();
    var userMarks = import_slate_dom.EDITOR_TO_USER_MARKS.get(editor);
    import_slate_dom.EDITOR_TO_USER_MARKS.delete(editor);
    if (userMarks !== void 0) {
      editor.marks = userMarks;
      editor.onChange();
    }
  };
  var handleCompositionEnd = _event => {
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
    }
    compositionEndTimeoutId = setTimeout(() => {
      import_slate_dom.IS_COMPOSING.set(editor, false);
      flush();
    }, RESOLVE_DELAY);
  };
  var handleCompositionStart = _event => {
    import_slate_dom.IS_COMPOSING.set(editor, true);
    if (compositionEndTimeoutId) {
      clearTimeout(compositionEndTimeoutId);
      compositionEndTimeoutId = null;
    }
  };
  var updatePlaceholderVisibility = function updatePlaceholderVisibility2() {
    var forceHide = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var placeholderElement = import_slate_dom.EDITOR_TO_PLACEHOLDER_ELEMENT.get(editor);
    if (!placeholderElement) {
      return;
    }
    if (hasPendingDiffs() || forceHide) {
      placeholderElement.style.display = "none";
      return;
    }
    placeholderElement.style.removeProperty("display");
  };
  var storeDiff = (path, diff) => {
    var _EDITOR_TO_PENDING_DI3;
    var pendingDiffs = (_EDITOR_TO_PENDING_DI3 = import_slate_dom.EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI3 !== void 0 ? _EDITOR_TO_PENDING_DI3 : [];
    import_slate_dom.EDITOR_TO_PENDING_DIFFS.set(editor, pendingDiffs);
    var target = import_slate.Node.leaf(editor, path);
    var idx = pendingDiffs.findIndex(change => import_slate.Path.equals(change.path, path));
    if (idx < 0) {
      var normalized = (0, import_slate_dom.normalizeStringDiff)(target.text, diff);
      if (normalized) {
        pendingDiffs.push({
          path,
          diff,
          id: idCounter++
        });
      }
      updatePlaceholderVisibility();
      return;
    }
    var merged = (0, import_slate_dom.mergeStringDiffs)(target.text, pendingDiffs[idx].diff, diff);
    if (!merged) {
      pendingDiffs.splice(idx, 1);
      updatePlaceholderVisibility();
      return;
    }
    pendingDiffs[idx] = _objectSpread$6(_objectSpread$6({}, pendingDiffs[idx]), {}, {
      diff: merged
    });
  };
  var scheduleAction = function scheduleAction2(run) {
    var {
      at
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    insertPositionHint = false;
    import_slate_dom.EDITOR_TO_PENDING_SELECTION.delete(editor);
    scheduleOnDOMSelectionChange.cancel();
    onDOMSelectionChange.cancel();
    if (hasPendingAction()) {
      flush();
    }
    import_slate_dom.EDITOR_TO_PENDING_ACTION.set(editor, {
      at,
      run
    });
    actionTimeoutId = setTimeout(flush);
  };
  var handleDOMBeforeInput = event => {
    var _targetRange2;
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    if (import_slate_dom.IS_NODE_MAP_DIRTY.get(editor)) {
      return;
    }
    var {
      inputType: type
    } = event;
    var targetRange2 = null;
    var data = event.dataTransfer || event.data || void 0;
    if (insertPositionHint !== false && type !== "insertText" && type !== "insertCompositionText") {
      insertPositionHint = false;
    }
    var [nativeTargetRange] = event.getTargetRanges();
    if (nativeTargetRange) {
      targetRange2 = ReactEditor.toSlateRange(editor, nativeTargetRange, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    var window2 = ReactEditor.getWindow(editor);
    var domSelection = window2.getSelection();
    if (!targetRange2 && domSelection) {
      nativeTargetRange = domSelection;
      targetRange2 = ReactEditor.toSlateRange(editor, domSelection, {
        exactMatch: false,
        suppressThrow: true
      });
    }
    targetRange2 = (_targetRange2 = targetRange2) !== null && _targetRange2 !== void 0 ? _targetRange2 : editor.selection;
    if (!targetRange2) {
      return;
    }
    var canStoreDiff = true;
    if (type.startsWith("delete")) {
      if (import_slate.Range.isExpanded(targetRange2)) {
        var [_start, _end] = import_slate.Range.edges(targetRange2);
        var _leaf = import_slate.Node.leaf(editor, _start.path);
        if (_leaf.text.length === _start.offset && _end.offset === 0) {
          var next = import_slate.Editor.next(editor, {
            at: _start.path,
            match: import_slate.Text.isText
          });
          if (next && import_slate.Path.equals(next[1], _end.path)) {
            targetRange2 = {
              anchor: _end,
              focus: _end
            };
          }
        }
      }
      var direction = type.endsWith("Backward") ? "backward" : "forward";
      var [start, end] = import_slate.Range.edges(targetRange2);
      var [leaf, path] = import_slate.Editor.leaf(editor, start.path);
      var diff = {
        text: "",
        start: start.offset,
        end: end.offset
      };
      var pendingDiffs = import_slate_dom.EDITOR_TO_PENDING_DIFFS.get(editor);
      var relevantPendingDiffs = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(change => import_slate.Path.equals(change.path, path));
      var diffs = relevantPendingDiffs ? [relevantPendingDiffs.diff, diff] : [diff];
      var text = (0, import_slate_dom.applyStringDiff)(leaf.text, ...diffs);
      if (text.length === 0) {
        canStoreDiff = false;
      }
      if (import_slate.Range.isExpanded(targetRange2)) {
        if (canStoreDiff && import_slate.Path.equals(targetRange2.anchor.path, targetRange2.focus.path)) {
          var point = {
            path: targetRange2.anchor.path,
            offset: start.offset
          };
          var range = import_slate.Editor.range(editor, point, point);
          handleUserSelect(range);
          return storeDiff(targetRange2.anchor.path, {
            text: "",
            end: end.offset,
            start: start.offset
          });
        }
        return scheduleAction(() => import_slate.Editor.deleteFragment(editor, {
          direction
        }), {
          at: targetRange2
        });
      }
    }
    switch (type) {
      case "deleteByComposition":
      case "deleteByCut":
      case "deleteByDrag":
        {
          return scheduleAction(() => import_slate.Editor.deleteFragment(editor), {
            at: targetRange2
          });
        }
      case "deleteContent":
      case "deleteContentForward":
        {
          var {
            anchor
          } = targetRange2;
          if (canStoreDiff && import_slate.Range.isCollapsed(targetRange2)) {
            var targetNode = import_slate.Node.leaf(editor, anchor.path);
            if (anchor.offset < targetNode.text.length) {
              return storeDiff(anchor.path, {
                text: "",
                start: anchor.offset,
                end: anchor.offset + 1
              });
            }
          }
          return scheduleAction(() => import_slate.Editor.deleteForward(editor), {
            at: targetRange2
          });
        }
      case "deleteContentBackward":
        {
          var _nativeTargetRange;
          var {
            anchor: _anchor
          } = targetRange2;
          var nativeCollapsed = (0, import_slate_dom.isDOMSelection)(nativeTargetRange) ? nativeTargetRange.isCollapsed : !!((_nativeTargetRange = nativeTargetRange) !== null && _nativeTargetRange !== void 0 && _nativeTargetRange.collapsed);
          if (canStoreDiff && nativeCollapsed && import_slate.Range.isCollapsed(targetRange2) && _anchor.offset > 0) {
            return storeDiff(_anchor.path, {
              text: "",
              start: _anchor.offset - 1,
              end: _anchor.offset
            });
          }
          return scheduleAction(() => import_slate.Editor.deleteBackward(editor), {
            at: targetRange2
          });
        }
      case "deleteEntireSoftLine":
        {
          return scheduleAction(() => {
            import_slate.Editor.deleteBackward(editor, {
              unit: "line"
            });
            import_slate.Editor.deleteForward(editor, {
              unit: "line"
            });
          }, {
            at: targetRange2
          });
        }
      case "deleteHardLineBackward":
        {
          return scheduleAction(() => import_slate.Editor.deleteBackward(editor, {
            unit: "block"
          }), {
            at: targetRange2
          });
        }
      case "deleteSoftLineBackward":
        {
          return scheduleAction(() => import_slate.Editor.deleteBackward(editor, {
            unit: "line"
          }), {
            at: targetRange2
          });
        }
      case "deleteHardLineForward":
        {
          return scheduleAction(() => import_slate.Editor.deleteForward(editor, {
            unit: "block"
          }), {
            at: targetRange2
          });
        }
      case "deleteSoftLineForward":
        {
          return scheduleAction(() => import_slate.Editor.deleteForward(editor, {
            unit: "line"
          }), {
            at: targetRange2
          });
        }
      case "deleteWordBackward":
        {
          return scheduleAction(() => import_slate.Editor.deleteBackward(editor, {
            unit: "word"
          }), {
            at: targetRange2
          });
        }
      case "deleteWordForward":
        {
          return scheduleAction(() => import_slate.Editor.deleteForward(editor, {
            unit: "word"
          }), {
            at: targetRange2
          });
        }
      case "insertLineBreak":
        {
          return scheduleAction(() => import_slate.Editor.insertSoftBreak(editor), {
            at: targetRange2
          });
        }
      case "insertParagraph":
        {
          return scheduleAction(() => import_slate.Editor.insertBreak(editor), {
            at: targetRange2
          });
        }
      case "insertCompositionText":
      case "deleteCompositionText":
      case "insertFromComposition":
      case "insertFromDrop":
      case "insertFromPaste":
      case "insertFromYank":
      case "insertReplacementText":
      case "insertText":
        {
          if (isDataTransfer(data)) {
            return scheduleAction(() => ReactEditor.insertData(editor, data), {
              at: targetRange2
            });
          }
          var _text = data !== null && data !== void 0 ? data : "";
          if (import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.get(editor)) {
            _text = _text.replace("\uFEFF", "");
          }
          if (type === "insertText" && /.*\n.*\n$/.test(_text)) {
            _text = _text.slice(0, -1);
          }
          if (_text.includes("\n")) {
            return scheduleAction(() => {
              var parts = _text.split("\n");
              parts.forEach((line, i) => {
                if (line) {
                  import_slate.Editor.insertText(editor, line);
                }
                if (i !== parts.length - 1) {
                  import_slate.Editor.insertSoftBreak(editor);
                }
              });
            }, {
              at: targetRange2
            });
          }
          if (import_slate.Path.equals(targetRange2.anchor.path, targetRange2.focus.path)) {
            var [_start2, _end2] = import_slate.Range.edges(targetRange2);
            var _diff = {
              start: _start2.offset,
              end: _end2.offset,
              text: _text
            };
            if (_text && insertPositionHint && type === "insertCompositionText") {
              var hintPosition = insertPositionHint.start + insertPositionHint.text.search(/\S|$/);
              var diffPosition = _diff.start + _diff.text.search(/\S|$/);
              if (diffPosition === hintPosition + 1 && _diff.end === insertPositionHint.start + insertPositionHint.text.length) {
                _diff.start -= 1;
                insertPositionHint = null;
                scheduleFlush();
              } else {
                insertPositionHint = false;
              }
            } else if (type === "insertText") {
              if (insertPositionHint === null) {
                insertPositionHint = _diff;
              } else if (insertPositionHint && import_slate.Range.isCollapsed(targetRange2) && insertPositionHint.end + insertPositionHint.text.length === _start2.offset) {
                insertPositionHint = _objectSpread$6(_objectSpread$6({}, insertPositionHint), {}, {
                  text: insertPositionHint.text + _text
                });
              } else {
                insertPositionHint = false;
              }
            } else {
              insertPositionHint = false;
            }
            if (canStoreDiff) {
              storeDiff(_start2.path, _diff);
              return;
            }
          }
          return scheduleAction(() => import_slate.Editor.insertText(editor, _text), {
            at: targetRange2
          });
        }
    }
  };
  var hasPendingAction = () => {
    return !!import_slate_dom.EDITOR_TO_PENDING_ACTION.get(editor);
  };
  var hasPendingDiffs = () => {
    var _EDITOR_TO_PENDING_DI4;
    return !!((_EDITOR_TO_PENDING_DI4 = import_slate_dom.EDITOR_TO_PENDING_DIFFS.get(editor)) !== null && _EDITOR_TO_PENDING_DI4 !== void 0 && _EDITOR_TO_PENDING_DI4.length);
  };
  var hasPendingChanges = () => {
    return hasPendingAction() || hasPendingDiffs();
  };
  var isFlushing = () => {
    return flushing;
  };
  var handleUserSelect = range => {
    import_slate_dom.EDITOR_TO_PENDING_SELECTION.set(editor, range);
    if (flushTimeoutId) {
      clearTimeout(flushTimeoutId);
      flushTimeoutId = null;
    }
    var {
      selection
    } = editor;
    if (!range) {
      return;
    }
    var pathChanged = !selection || !import_slate.Path.equals(selection.anchor.path, range.anchor.path);
    var parentPathChanged = !selection || !import_slate.Path.equals(selection.anchor.path.slice(0, -1), range.anchor.path.slice(0, -1));
    if (pathChanged && insertPositionHint || parentPathChanged) {
      insertPositionHint = false;
    }
    if (pathChanged || hasPendingDiffs()) {
      flushTimeoutId = setTimeout(flush, FLUSH_DELAY);
    }
  };
  var handleInput = () => {
    if (hasPendingAction() || !hasPendingDiffs()) {
      flush();
    }
  };
  var handleKeyDown = _ => {
    if (!hasPendingDiffs()) {
      updatePlaceholderVisibility(true);
      setTimeout(updatePlaceholderVisibility);
    }
  };
  var scheduleFlush = () => {
    if (!hasPendingAction()) {
      actionTimeoutId = setTimeout(flush);
    }
  };
  var handleDomMutations = mutations => {
    if (hasPendingDiffs() || hasPendingAction()) {
      return;
    }
    if (mutations.some(mutation => (0, import_slate_dom.isTrackedMutation)(editor, mutation, mutations))) {
      var _EDITOR_TO_FORCE_REND;
      (_EDITOR_TO_FORCE_REND = import_slate_dom.EDITOR_TO_FORCE_RENDER.get(editor)) === null || _EDITOR_TO_FORCE_REND === void 0 || _EDITOR_TO_FORCE_REND();
    }
  };
  return {
    flush,
    scheduleFlush,
    hasPendingDiffs,
    hasPendingAction,
    hasPendingChanges,
    isFlushing,
    handleUserSelect,
    handleCompositionEnd,
    handleCompositionStart,
    handleDOMBeforeInput,
    handleKeyDown,
    handleDomMutations,
    handleInput
  };
}
function useIsMounted() {
  var isMountedRef = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return isMountedRef.current;
}
var useIsomorphicLayoutEffect = import_slate_dom.CAN_USE_DOM ? import_react.useLayoutEffect : import_react.useEffect;
function useMutationObserver(node, callback, options) {
  var [mutationObserver] = (0, import_react.useState)(() => new MutationObserver(callback));
  useIsomorphicLayoutEffect(() => {
    mutationObserver.takeRecords();
  });
  (0, import_react.useEffect)(() => {
    if (!node.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    mutationObserver.observe(node.current, options);
    return () => mutationObserver.disconnect();
  }, [mutationObserver, node, options]);
}
var _excluded$2 = ["node"];
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var MUTATION_OBSERVER_CONFIG$1 = {
  subtree: true,
  childList: true,
  characterData: true
};
var useAndroidInputManager = !import_slate_dom.IS_ANDROID ? () => null : _ref => {
  var {
      node
    } = _ref,
    options = _objectWithoutProperties(_ref, _excluded$2);
  if (!import_slate_dom.IS_ANDROID) {
    return null;
  }
  var editor = useSlateStatic();
  var isMounted = useIsMounted();
  var [inputManager] = (0, import_react.useState)(() => createAndroidInputManager(_objectSpread$5({
    editor
  }, options)));
  useMutationObserver(node, inputManager.handleDomMutations, MUTATION_OBSERVER_CONFIG$1);
  import_slate_dom.EDITOR_TO_SCHEDULE_FLUSH.set(editor, inputManager.scheduleFlush);
  if (isMounted) {
    inputManager.flush();
  }
  return inputManager;
};
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var String$1 = props => {
  var {
    isLast,
    leaf,
    parent,
    text
  } = props;
  var editor = useSlateStatic();
  var path = ReactEditor.findPath(editor, text);
  var parentPath = import_slate.Path.parent(path);
  var isMarkPlaceholder = Boolean(leaf[import_slate_dom.MARK_PLACEHOLDER_SYMBOL]);
  if (editor.isVoid(parent)) {
    return /* @__PURE__ */import_react.default.createElement(ZeroWidthString, {
      length: import_slate.Node.string(parent).length
    });
  }
  if (leaf.text === "" && parent.children[parent.children.length - 1] === text && !editor.isInline(parent) && import_slate.Editor.string(editor, parentPath) === "") {
    return /* @__PURE__ */import_react.default.createElement(ZeroWidthString, {
      isLineBreak: true,
      isMarkPlaceholder
    });
  }
  if (leaf.text === "") {
    return /* @__PURE__ */import_react.default.createElement(ZeroWidthString, {
      isMarkPlaceholder
    });
  }
  if (isLast && leaf.text.slice(-1) === "\n") {
    return /* @__PURE__ */import_react.default.createElement(TextString, {
      isTrailing: true,
      text: leaf.text
    });
  }
  return /* @__PURE__ */import_react.default.createElement(TextString, {
    text: leaf.text
  });
};
var TextString = props => {
  var {
    text,
    isTrailing = false
  } = props;
  var ref = (0, import_react.useRef)(null);
  var getTextContent = () => {
    return "".concat(text !== null && text !== void 0 ? text : "").concat(isTrailing ? "\n" : "");
  };
  var [initialText] = (0, import_react.useState)(getTextContent);
  useIsomorphicLayoutEffect(() => {
    var textWithTrailing = getTextContent();
    if (ref.current && ref.current.textContent !== textWithTrailing) {
      ref.current.textContent = textWithTrailing;
    }
  });
  return /* @__PURE__ */import_react.default.createElement(MemoizedText$1, {
    ref
  }, initialText);
};
var MemoizedText$1 = /* @__PURE__ */(0, import_react.memo)(/* @__PURE__ */(0, import_react.forwardRef)((props, ref) => {
  return /* @__PURE__ */import_react.default.createElement("span", {
    "data-slate-string": true,
    ref
  }, props.children);
}));
var ZeroWidthString = props => {
  var {
    length = 0,
    isLineBreak = false,
    isMarkPlaceholder = false
  } = props;
  var attributes = {
    "data-slate-zero-width": isLineBreak ? "n" : "z",
    "data-slate-length": length
  };
  if (isMarkPlaceholder) {
    attributes["data-slate-mark-placeholder"] = true;
  }
  return /* @__PURE__ */import_react.default.createElement("span", _objectSpread$4({}, attributes), !(import_slate_dom.IS_ANDROID || import_slate_dom.IS_IOS) || !isLineBreak ? "\uFEFF" : null, isLineBreak ? /* @__PURE__ */import_react.default.createElement("br", null) : null);
};
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var PLACEHOLDER_DELAY = import_slate_dom.IS_ANDROID ? 300 : 0;
function disconnectPlaceholderResizeObserver(placeholderResizeObserver, releaseObserver) {
  if (placeholderResizeObserver.current) {
    placeholderResizeObserver.current.disconnect();
    if (releaseObserver) {
      placeholderResizeObserver.current = null;
    }
  }
}
function clearTimeoutRef(timeoutRef) {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
}
var Leaf = props => {
  var {
    leaf,
    isLast,
    text,
    parent,
    renderPlaceholder,
    renderLeaf = props2 => /* @__PURE__ */import_react.default.createElement(DefaultLeaf, _objectSpread$3({}, props2)),
    leafPosition
  } = props;
  var editor = useSlateStatic();
  var placeholderResizeObserver = (0, import_react.useRef)(null);
  var placeholderRef = (0, import_react.useRef)(null);
  var [showPlaceholder, setShowPlaceholder] = (0, import_react.useState)(false);
  var showPlaceholderTimeoutRef = (0, import_react.useRef)(null);
  var callbackPlaceholderRef = (0, import_react.useCallback)(placeholderEl => {
    disconnectPlaceholderResizeObserver(placeholderResizeObserver, placeholderEl == null);
    if (placeholderEl == null) {
      var _leaf$onPlaceholderRe;
      import_slate_dom.EDITOR_TO_PLACEHOLDER_ELEMENT.delete(editor);
      (_leaf$onPlaceholderRe = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe === void 0 || _leaf$onPlaceholderRe.call(leaf, null);
    } else {
      import_slate_dom.EDITOR_TO_PLACEHOLDER_ELEMENT.set(editor, placeholderEl);
      if (!placeholderResizeObserver.current) {
        var ResizeObserver$1 = window.ResizeObserver || import_resize_observer.ResizeObserver;
        placeholderResizeObserver.current = new ResizeObserver$1(() => {
          var _leaf$onPlaceholderRe2;
          (_leaf$onPlaceholderRe2 = leaf.onPlaceholderResize) === null || _leaf$onPlaceholderRe2 === void 0 || _leaf$onPlaceholderRe2.call(leaf, placeholderEl);
        });
      }
      placeholderResizeObserver.current.observe(placeholderEl);
      placeholderRef.current = placeholderEl;
    }
  }, [placeholderRef, leaf, editor]);
  var children = /* @__PURE__ */import_react.default.createElement(String$1, {
    isLast,
    leaf,
    parent,
    text
  });
  var leafIsPlaceholder = Boolean(leaf[import_slate_dom.PLACEHOLDER_SYMBOL]);
  (0, import_react.useEffect)(() => {
    if (leafIsPlaceholder) {
      if (!showPlaceholderTimeoutRef.current) {
        showPlaceholderTimeoutRef.current = setTimeout(() => {
          setShowPlaceholder(true);
          showPlaceholderTimeoutRef.current = null;
        }, PLACEHOLDER_DELAY);
      }
    } else {
      clearTimeoutRef(showPlaceholderTimeoutRef);
      setShowPlaceholder(false);
    }
    return () => clearTimeoutRef(showPlaceholderTimeoutRef);
  }, [leafIsPlaceholder, setShowPlaceholder]);
  if (leafIsPlaceholder && showPlaceholder) {
    var placeholderProps = {
      children: leaf.placeholder,
      attributes: {
        "data-slate-placeholder": true,
        style: {
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none",
          WebkitUserModify: import_slate_dom.IS_WEBKIT ? "inherit" : void 0
        },
        contentEditable: false,
        ref: callbackPlaceholderRef
      }
    };
    children = /* @__PURE__ */import_react.default.createElement(import_react.default.Fragment, null, renderPlaceholder(placeholderProps), children);
  }
  var attributes = {
    "data-slate-leaf": true
  };
  return renderLeaf({
    attributes,
    children,
    leaf,
    text,
    leafPosition
  });
};
var MemoizedLeaf = /* @__PURE__ */import_react.default.memo(Leaf, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && import_slate.Text.equals(next.leaf, prev.leaf) && next.leaf[import_slate_dom.PLACEHOLDER_SYMBOL] === prev.leaf[import_slate_dom.PLACEHOLDER_SYMBOL];
});
var DefaultLeaf = props => {
  var {
    attributes,
    children
  } = props;
  return /* @__PURE__ */import_react.default.createElement("span", _objectSpread$3({}, attributes), children);
};
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Text = props => {
  var {
    decorations,
    isLast,
    parent,
    renderPlaceholder,
    renderLeaf,
    renderText = props2 => /* @__PURE__ */import_react.default.createElement(DefaultText, _objectSpread$2({}, props2)),
    text
  } = props;
  var editor = useSlateStatic();
  var ref = (0, import_react.useRef)(null);
  var decoratedLeaves = import_slate.Text.decorations(text, decorations);
  var key = ReactEditor.findKey(editor, text);
  var children = [];
  for (var i = 0; i < decoratedLeaves.length; i++) {
    var {
      leaf,
      position
    } = decoratedLeaves[i];
    children.push(/* @__PURE__ */import_react.default.createElement(MemoizedLeaf, {
      isLast: isLast && i === decoratedLeaves.length - 1,
      key: "".concat(key.id, "-").concat(i),
      renderPlaceholder,
      leaf,
      leafPosition: position,
      text,
      parent,
      renderLeaf
    }));
  }
  var callbackRef = (0, import_react.useCallback)(span => {
    var KEY_TO_ELEMENT = import_slate_dom.EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (span) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, span);
      import_slate_dom.NODE_TO_ELEMENT.set(text, span);
      import_slate_dom.ELEMENT_TO_NODE.set(span, text);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
      import_slate_dom.NODE_TO_ELEMENT.delete(text);
      if (ref.current) {
        import_slate_dom.ELEMENT_TO_NODE.delete(ref.current);
      }
    }
    ref.current = span;
  }, [ref, editor, key, text]);
  var attributes = {
    "data-slate-node": "text",
    ref: callbackRef
  };
  return renderText({
    text,
    children,
    attributes
  });
};
var MemoizedText = /* @__PURE__ */import_react.default.memo(Text, (prev, next) => {
  return next.parent === prev.parent && next.isLast === prev.isLast && next.renderText === prev.renderText && next.renderLeaf === prev.renderLeaf && next.renderPlaceholder === prev.renderPlaceholder && next.text === prev.text && (0, import_slate_dom.isTextDecorationsEqual)(next.decorations, prev.decorations);
});
var DefaultText = props => {
  var {
    attributes,
    children
  } = props;
  return /* @__PURE__ */import_react.default.createElement("span", _objectSpread$2({}, attributes), children);
};
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Element = props => {
  var {
    decorations,
    element,
    renderElement = p => /* @__PURE__ */import_react.default.createElement(DefaultElement, _objectSpread$1({}, p)),
    renderPlaceholder,
    renderLeaf,
    renderText,
    selection
  } = props;
  var editor = useSlateStatic();
  var readOnly = useReadOnly();
  var isInline = editor.isInline(element);
  var key = ReactEditor.findKey(editor, element);
  var ref = (0, import_react.useCallback)(ref2 => {
    var KEY_TO_ELEMENT = import_slate_dom.EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    if (ref2) {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.set(key, ref2);
      import_slate_dom.NODE_TO_ELEMENT.set(element, ref2);
      import_slate_dom.ELEMENT_TO_NODE.set(ref2, element);
    } else {
      KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 || KEY_TO_ELEMENT.delete(key);
      import_slate_dom.NODE_TO_ELEMENT.delete(element);
    }
  }, [editor, key, element]);
  var children = useChildren({
    decorations,
    node: element,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    renderText,
    selection
  });
  var attributes = {
    "data-slate-node": "element",
    ref
  };
  if (isInline) {
    attributes["data-slate-inline"] = true;
  }
  if (!isInline && import_slate.Editor.hasInlines(editor, element)) {
    var text = import_slate.Node.string(element);
    var dir = (0, import_direction.default)(text);
    if (dir === "rtl") {
      attributes.dir = dir;
    }
  }
  if (import_slate.Editor.isVoid(editor, element)) {
    attributes["data-slate-void"] = true;
    if (!readOnly && isInline) {
      attributes.contentEditable = false;
    }
    var Tag = isInline ? "span" : "div";
    var [[_text]] = import_slate.Node.texts(element);
    children = /* @__PURE__ */import_react.default.createElement(Tag, {
      "data-slate-spacer": true,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */import_react.default.createElement(MemoizedText, {
      renderPlaceholder,
      decorations: [],
      isLast: false,
      parent: element,
      text: _text
    }));
    import_slate_dom.NODE_TO_INDEX.set(_text, 0);
    import_slate_dom.NODE_TO_PARENT.set(_text, element);
  }
  return renderElement({
    attributes,
    children,
    element
  });
};
var MemoizedElement = /* @__PURE__ */import_react.default.memo(Element, (prev, next) => {
  return prev.element === next.element && prev.renderElement === next.renderElement && prev.renderText === next.renderText && prev.renderLeaf === next.renderLeaf && prev.renderPlaceholder === next.renderPlaceholder && (0, import_slate_dom.isElementDecorationsEqual)(prev.decorations, next.decorations) && (prev.selection === next.selection || !!prev.selection && !!next.selection && import_slate.Range.equals(prev.selection, next.selection));
});
var DefaultElement = props => {
  var {
    attributes,
    children,
    element
  } = props;
  var editor = useSlateStatic();
  var Tag = editor.isInline(element) ? "span" : "div";
  return /* @__PURE__ */import_react.default.createElement(Tag, _objectSpread$1(_objectSpread$1({}, attributes), {}, {
    style: {
      position: "relative"
    }
  }), children);
};
var DecorateContext = /* @__PURE__ */(0, import_react.createContext)(() => []);
var useDecorate = () => {
  return (0, import_react.useContext)(DecorateContext);
};
var SelectedContext = /* @__PURE__ */(0, import_react.createContext)(false);
var useSelected = () => {
  return (0, import_react.useContext)(SelectedContext);
};
var useChildren = props => {
  var {
    decorations,
    node,
    renderElement,
    renderPlaceholder,
    renderText,
    renderLeaf,
    selection
  } = props;
  var decorate = useDecorate();
  var editor = useSlateStatic();
  import_slate_dom.IS_NODE_MAP_DIRTY.set(editor, false);
  var path = ReactEditor.findPath(editor, node);
  var children = [];
  var isLeafBlock = import_slate.Element.isElement(node) && !editor.isInline(node) && import_slate.Editor.hasInlines(editor, node);
  for (var i = 0; i < node.children.length; i++) {
    var p = path.concat(i);
    var n = node.children[i];
    var key = ReactEditor.findKey(editor, n);
    var range = import_slate.Editor.range(editor, p);
    var sel = selection && import_slate.Range.intersection(range, selection);
    var ds = decorate([n, p]);
    for (var dec of decorations) {
      var d = import_slate.Range.intersection(dec, range);
      if (d) {
        ds.push(d);
      }
    }
    if (import_slate.Element.isElement(n)) {
      children.push(/* @__PURE__ */import_react.default.createElement(SelectedContext.Provider, {
        key: "provider-".concat(key.id),
        value: !!sel
      }, /* @__PURE__ */import_react.default.createElement(MemoizedElement, {
        decorations: ds,
        element: n,
        key: key.id,
        renderElement,
        renderPlaceholder,
        renderLeaf,
        renderText,
        selection: sel
      })));
    } else {
      children.push(/* @__PURE__ */import_react.default.createElement(MemoizedText, {
        decorations: ds,
        key: key.id,
        isLast: isLeafBlock && i === node.children.length - 1,
        parent: node,
        renderPlaceholder,
        renderLeaf,
        renderText,
        text: n
      }));
    }
    import_slate_dom.NODE_TO_INDEX.set(n, i);
    import_slate_dom.NODE_TO_PARENT.set(n, node);
  }
  return children;
};
var ReadOnlyContext = /* @__PURE__ */(0, import_react.createContext)(false);
var useReadOnly = () => {
  return (0, import_react.useContext)(ReadOnlyContext);
};
var SlateContext = /* @__PURE__ */(0, import_react.createContext)(null);
var useSlate = () => {
  var context = (0, import_react.useContext)(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  var {
    editor
  } = context;
  return editor;
};
var useSlateWithV = () => {
  var context = (0, import_react.useContext)(SlateContext);
  if (!context) {
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  }
  return context;
};
function useTrackUserInput() {
  var editor = useSlateStatic();
  var receivedUserInput = (0, import_react.useRef)(false);
  var animationFrameIdRef = (0, import_react.useRef)(0);
  var onUserInput = (0, import_react.useCallback)(() => {
    if (receivedUserInput.current) {
      return;
    }
    receivedUserInput.current = true;
    var window2 = ReactEditor.getWindow(editor);
    window2.cancelAnimationFrame(animationFrameIdRef.current);
    animationFrameIdRef.current = window2.requestAnimationFrame(() => {
      receivedUserInput.current = false;
    });
  }, [editor]);
  (0, import_react.useEffect)(() => () => cancelAnimationFrame(animationFrameIdRef.current), []);
  return {
    receivedUserInput,
    onUserInput
  };
}
var createRestoreDomManager = (editor, receivedUserInput) => {
  var bufferedMutations = [];
  var clear = () => {
    bufferedMutations = [];
  };
  var registerMutations = mutations => {
    if (!receivedUserInput.current) {
      return;
    }
    var trackedMutations = mutations.filter(mutation => (0, import_slate_dom.isTrackedMutation)(editor, mutation, mutations));
    bufferedMutations.push(...trackedMutations);
  };
  function restoreDOM() {
    if (bufferedMutations.length > 0) {
      bufferedMutations.reverse().forEach(mutation => {
        if (mutation.type === "characterData") {
          return;
        }
        mutation.removedNodes.forEach(node => {
          mutation.target.insertBefore(node, mutation.nextSibling);
        });
        mutation.addedNodes.forEach(node => {
          mutation.target.removeChild(node);
        });
      });
      clear();
    }
  }
  return {
    registerMutations,
    restoreDOM,
    clear
  };
};
var MUTATION_OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  characterDataOldValue: true
};
var RestoreDOMComponent = class extends import_react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "context", null);
    _defineProperty(this, "manager", null);
    _defineProperty(this, "mutationObserver", null);
  }
  observe() {
    var _this$mutationObserve;
    var {
      node
    } = this.props;
    if (!node.current) {
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    }
    (_this$mutationObserve = this.mutationObserver) === null || _this$mutationObserve === void 0 || _this$mutationObserve.observe(node.current, MUTATION_OBSERVER_CONFIG);
  }
  componentDidMount() {
    var {
      receivedUserInput
    } = this.props;
    var editor = this.context;
    this.manager = createRestoreDomManager(editor, receivedUserInput);
    this.mutationObserver = new MutationObserver(this.manager.registerMutations);
    this.observe();
  }
  getSnapshotBeforeUpdate() {
    var _this$mutationObserve2, _this$mutationObserve3, _this$manager2;
    var pendingMutations = (_this$mutationObserve2 = this.mutationObserver) === null || _this$mutationObserve2 === void 0 ? void 0 : _this$mutationObserve2.takeRecords();
    if (pendingMutations !== null && pendingMutations !== void 0 && pendingMutations.length) {
      var _this$manager;
      (_this$manager = this.manager) === null || _this$manager === void 0 || _this$manager.registerMutations(pendingMutations);
    }
    (_this$mutationObserve3 = this.mutationObserver) === null || _this$mutationObserve3 === void 0 || _this$mutationObserve3.disconnect();
    (_this$manager2 = this.manager) === null || _this$manager2 === void 0 || _this$manager2.restoreDOM();
    return null;
  }
  componentDidUpdate() {
    var _this$manager3;
    (_this$manager3 = this.manager) === null || _this$manager3 === void 0 || _this$manager3.clear();
    this.observe();
  }
  componentWillUnmount() {
    var _this$mutationObserve4;
    (_this$mutationObserve4 = this.mutationObserver) === null || _this$mutationObserve4 === void 0 || _this$mutationObserve4.disconnect();
  }
  render() {
    return this.props.children;
  }
};
_defineProperty(RestoreDOMComponent, "contextType", EditorContext);
var RestoreDOM = import_slate_dom.IS_ANDROID ? RestoreDOMComponent : _ref => {
  var {
    children
  } = _ref;
  return /* @__PURE__ */import_react.default.createElement(import_react.default.Fragment, null, children);
};
var ComposingContext = /* @__PURE__ */(0, import_react.createContext)(false);
var useComposing = () => {
  return (0, import_react.useContext)(ComposingContext);
};
var _excluded$1 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderText", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
  _excluded2 = ["text"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Children = props => /* @__PURE__ */import_react.default.createElement(import_react.default.Fragment, null, useChildren(props));
var Editable = /* @__PURE__ */(0, import_react.forwardRef)((props, forwardedRef) => {
  var defaultRenderPlaceholder = (0, import_react.useCallback)(props2 => /* @__PURE__ */import_react.default.createElement(DefaultPlaceholder, _objectSpread({}, props2)), []);
  var {
      autoFocus,
      decorate = defaultDecorate,
      onDOMBeforeInput: propsOnDOMBeforeInput,
      placeholder,
      readOnly = false,
      renderElement,
      renderLeaf,
      renderText,
      renderPlaceholder = defaultRenderPlaceholder,
      scrollSelectionIntoView = defaultScrollSelectionIntoView,
      style: userStyle = {},
      as: Component2 = "div",
      disableDefaultStyles = false
    } = props,
    attributes = _objectWithoutProperties(props, _excluded$1);
  var editor = useSlate();
  var [isComposing, setIsComposing] = (0, import_react.useState)(false);
  var ref = (0, import_react.useRef)(null);
  var deferredOperations = (0, import_react.useRef)([]);
  var [placeholderHeight, setPlaceholderHeight] = (0, import_react.useState)();
  var processing = (0, import_react.useRef)(false);
  var {
    onUserInput,
    receivedUserInput
  } = useTrackUserInput();
  var [, forceRender] = (0, import_react.useReducer)(s => s + 1, 0);
  import_slate_dom.EDITOR_TO_FORCE_RENDER.set(editor, forceRender);
  import_slate_dom.IS_READ_ONLY.set(editor, readOnly);
  var state = (0, import_react.useMemo)(() => ({
    isDraggingInternally: false,
    isUpdatingSelection: false,
    latestElement: null,
    hasMarkPlaceholder: false
  }), []);
  (0, import_react.useEffect)(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);
  var androidInputManagerRef = (0, import_react.useRef)();
  var onDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_throttle.default)(() => {
    if (import_slate_dom.IS_NODE_MAP_DIRTY.get(editor)) {
      onDOMSelectionChange();
      return;
    }
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if (!processing.current && import_slate_dom.IS_WEBKIT && root instanceof ShadowRoot) {
      processing.current = true;
      var active = (0, import_slate_dom.getActiveElement)();
      if (active) {
        document.execCommand("indent");
      } else {
        import_slate.Transforms.deselect(editor);
      }
      processing.current = false;
      return;
    }
    var androidInputManager = androidInputManagerRef.current;
    if ((import_slate_dom.IS_ANDROID || !ReactEditor.isComposing(editor)) && (!state.isUpdatingSelection || androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing()) && !state.isDraggingInternally) {
      var _root = ReactEditor.findDocumentOrShadowRoot(editor);
      var {
        activeElement
      } = _root;
      var _el = ReactEditor.toDOMNode(editor, editor);
      var domSelection = (0, import_slate_dom.getSelection)(_root);
      if (activeElement === _el) {
        state.latestElement = activeElement;
        import_slate_dom.IS_FOCUSED.set(editor, true);
      } else {
        import_slate_dom.IS_FOCUSED.delete(editor);
      }
      if (!domSelection) {
        return import_slate.Transforms.deselect(editor);
      }
      var {
        anchorNode,
        focusNode
      } = domSelection;
      var anchorNodeSelectable = ReactEditor.hasEditableTarget(editor, anchorNode) || ReactEditor.isTargetInsideNonReadonlyVoid(editor, anchorNode);
      var focusNodeInEditor = ReactEditor.hasTarget(editor, focusNode);
      if (anchorNodeSelectable && focusNodeInEditor) {
        var range = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        if (range) {
          if (!ReactEditor.isComposing(editor) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.hasPendingChanges()) && !(androidInputManager !== null && androidInputManager !== void 0 && androidInputManager.isFlushing())) {
            import_slate.Transforms.select(editor, range);
          } else {
            androidInputManager === null || androidInputManager === void 0 || androidInputManager.handleUserSelect(range);
          }
        }
      }
      if (readOnly && (!anchorNodeSelectable || !focusNodeInEditor)) {
        import_slate.Transforms.deselect(editor);
      }
    }
  }, 100), [editor, readOnly, state]);
  var scheduleOnDOMSelectionChange = (0, import_react.useMemo)(() => (0, import_debounce.default)(onDOMSelectionChange, 0), [onDOMSelectionChange]);
  androidInputManagerRef.current = useAndroidInputManager({
    node: ref,
    onDOMSelectionChange,
    scheduleOnDOMSelectionChange
  });
  useIsomorphicLayoutEffect(() => {
    var _androidInputManagerR, _androidInputManagerR2;
    var window2;
    if (ref.current && (window2 = (0, import_slate_dom.getDefaultView)(ref.current))) {
      import_slate_dom.EDITOR_TO_WINDOW.set(editor, window2);
      import_slate_dom.EDITOR_TO_ELEMENT.set(editor, ref.current);
      import_slate_dom.NODE_TO_ELEMENT.set(editor, ref.current);
      import_slate_dom.ELEMENT_TO_NODE.set(ref.current, editor);
    } else {
      import_slate_dom.NODE_TO_ELEMENT.delete(editor);
    }
    var {
      selection
    } = editor;
    var root = ReactEditor.findDocumentOrShadowRoot(editor);
    var domSelection = (0, import_slate_dom.getSelection)(root);
    if (!domSelection || !ReactEditor.isFocused(editor) || (_androidInputManagerR = androidInputManagerRef.current) !== null && _androidInputManagerR !== void 0 && _androidInputManagerR.hasPendingAction()) {
      return;
    }
    var setDomSelection = forceChange => {
      var hasDomSelection = domSelection.type !== "None";
      if (!selection && !hasDomSelection) {
        return;
      }
      var focusNode = domSelection.focusNode;
      var anchorNode;
      if (import_slate_dom.IS_FIREFOX && domSelection.rangeCount > 1) {
        var firstRange = domSelection.getRangeAt(0);
        var lastRange = domSelection.getRangeAt(domSelection.rangeCount - 1);
        if (firstRange.startContainer === focusNode) {
          anchorNode = lastRange.endContainer;
        } else {
          anchorNode = firstRange.startContainer;
        }
      } else {
        anchorNode = domSelection.anchorNode;
      }
      var editorElement = import_slate_dom.EDITOR_TO_ELEMENT.get(editor);
      var hasDomSelectionInEditor = false;
      if (editorElement.contains(anchorNode) && editorElement.contains(focusNode)) {
        hasDomSelectionInEditor = true;
      }
      if (hasDomSelection && hasDomSelectionInEditor && selection && !forceChange) {
        var slateRange = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: true,
          suppressThrow: true
        });
        if (slateRange && import_slate.Range.equals(slateRange, selection)) {
          var _anchorNode;
          if (!state.hasMarkPlaceholder) {
            return;
          }
          if ((_anchorNode = anchorNode) !== null && _anchorNode !== void 0 && (_anchorNode = _anchorNode.parentElement) !== null && _anchorNode !== void 0 && _anchorNode.hasAttribute("data-slate-mark-placeholder")) {
            return;
          }
        }
      }
      if (selection && !ReactEditor.hasRange(editor, selection)) {
        editor.selection = ReactEditor.toSlateRange(editor, domSelection, {
          exactMatch: false,
          suppressThrow: true
        });
        return;
      }
      state.isUpdatingSelection = true;
      var newDomRange = null;
      try {
        newDomRange = selection && ReactEditor.toDOMRange(editor, selection);
      } catch (e) {}
      if (newDomRange) {
        if (ReactEditor.isComposing(editor) && !import_slate_dom.IS_ANDROID) {
          domSelection.collapseToEnd();
        } else if (import_slate.Range.isBackward(selection)) {
          domSelection.setBaseAndExtent(newDomRange.endContainer, newDomRange.endOffset, newDomRange.startContainer, newDomRange.startOffset);
        } else {
          domSelection.setBaseAndExtent(newDomRange.startContainer, newDomRange.startOffset, newDomRange.endContainer, newDomRange.endOffset);
        }
        scrollSelectionIntoView(editor, newDomRange);
      } else {
        domSelection.removeAllRanges();
      }
      return newDomRange;
    };
    if (domSelection.rangeCount <= 1) {
      setDomSelection();
    }
    var ensureSelection = ((_androidInputManagerR2 = androidInputManagerRef.current) === null || _androidInputManagerR2 === void 0 ? void 0 : _androidInputManagerR2.isFlushing()) === "action";
    if (!import_slate_dom.IS_ANDROID || !ensureSelection) {
      setTimeout(() => {
        state.isUpdatingSelection = false;
      });
      return;
    }
    var timeoutId = null;
    var animationFrameId = requestAnimationFrame(() => {
      if (ensureSelection) {
        var ensureDomSelection = forceChange => {
          try {
            var el = ReactEditor.toDOMNode(editor, editor);
            el.focus();
            setDomSelection(forceChange);
          } catch (e) {}
        };
        ensureDomSelection();
        timeoutId = setTimeout(() => {
          ensureDomSelection(true);
          state.isUpdatingSelection = false;
        });
      }
    });
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });
  var onDOMBeforeInput = (0, import_react.useCallback)(event => {
    handleNativeHistoryEvents(editor, event);
    var el = ReactEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if (processing !== null && processing !== void 0 && processing.current && import_slate_dom.IS_WEBKIT && root instanceof ShadowRoot) {
      var ranges = event.getTargetRanges();
      var range = ranges[0];
      var newRange = new window.Range();
      newRange.setStart(range.startContainer, range.startOffset);
      newRange.setEnd(range.endContainer, range.endOffset);
      var slateRange = ReactEditor.toSlateRange(editor, newRange, {
        exactMatch: false,
        suppressThrow: false
      });
      import_slate.Transforms.select(editor, slateRange);
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    onUserInput();
    if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isDOMEventHandled(event, propsOnDOMBeforeInput)) {
      var _EDITOR_TO_USER_SELEC;
      if (androidInputManagerRef.current) {
        return androidInputManagerRef.current.handleDOMBeforeInput(event);
      }
      scheduleOnDOMSelectionChange.flush();
      onDOMSelectionChange.flush();
      var {
        selection
      } = editor;
      var {
        inputType: type
      } = event;
      var data = event.dataTransfer || event.data || void 0;
      var isCompositionChange = type === "insertCompositionText" || type === "deleteCompositionText";
      if (isCompositionChange && ReactEditor.isComposing(editor)) {
        return;
      }
      var native = false;
      if (type === "insertText" && selection && import_slate.Range.isCollapsed(selection) && event.data && event.data.length === 1 && /[a-z ]/i.test(event.data) && selection.anchor.offset !== 0) {
        native = true;
        if (editor.marks) {
          native = false;
        }
        if (!import_slate_dom.IS_NODE_MAP_DIRTY.get(editor)) {
          var _node$parentElement, _window$getComputedSt;
          var {
            anchor: anchor2
          } = selection;
          var [node, offset] = ReactEditor.toDOMPoint(editor, anchor2);
          var anchorNode = (_node$parentElement = node.parentElement) === null || _node$parentElement === void 0 ? void 0 : _node$parentElement.closest("a");
          var _window = ReactEditor.getWindow(editor);
          if (native && anchorNode && ReactEditor.hasDOMNode(editor, anchorNode)) {
            var _lastText$textContent;
            var lastText = _window === null || _window === void 0 ? void 0 : _window.document.createTreeWalker(anchorNode, NodeFilter.SHOW_TEXT).lastChild();
            if (lastText === node && ((_lastText$textContent = lastText.textContent) === null || _lastText$textContent === void 0 ? void 0 : _lastText$textContent.length) === offset) {
              native = false;
            }
          }
          if (native && node.parentElement && (_window === null || _window === void 0 || (_window$getComputedSt = _window.getComputedStyle(node.parentElement)) === null || _window$getComputedSt === void 0 ? void 0 : _window$getComputedSt.whiteSpace) === "pre") {
            var block = import_slate.Editor.above(editor, {
              at: anchor2.path,
              match: n => import_slate.Element.isElement(n) && import_slate.Editor.isBlock(editor, n)
            });
            if (block && import_slate.Node.string(block[0]).includes("	")) {
              native = false;
            }
          }
        }
      }
      if ((!type.startsWith("delete") || type.startsWith("deleteBy")) && !import_slate_dom.IS_NODE_MAP_DIRTY.get(editor)) {
        var [targetRange2] = event.getTargetRanges();
        if (targetRange2) {
          var _range = ReactEditor.toSlateRange(editor, targetRange2, {
            exactMatch: false,
            suppressThrow: false
          });
          if (!selection || !import_slate.Range.equals(selection, _range)) {
            native = false;
            var selectionRef = !isCompositionChange && editor.selection && import_slate.Editor.rangeRef(editor, editor.selection);
            import_slate.Transforms.select(editor, _range);
            if (selectionRef) {
              import_slate_dom.EDITOR_TO_USER_SELECTION.set(editor, selectionRef);
            }
          }
        }
      }
      if (isCompositionChange) {
        return;
      }
      if (!native) {
        event.preventDefault();
      }
      if (selection && import_slate.Range.isExpanded(selection) && type.startsWith("delete")) {
        var direction = type.endsWith("Backward") ? "backward" : "forward";
        import_slate.Editor.deleteFragment(editor, {
          direction
        });
        return;
      }
      switch (type) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          {
            import_slate.Editor.deleteFragment(editor);
            break;
          }
        case "deleteContent":
        case "deleteContentForward":
          {
            import_slate.Editor.deleteForward(editor);
            break;
          }
        case "deleteContentBackward":
          {
            import_slate.Editor.deleteBackward(editor);
            break;
          }
        case "deleteEntireSoftLine":
          {
            import_slate.Editor.deleteBackward(editor, {
              unit: "line"
            });
            import_slate.Editor.deleteForward(editor, {
              unit: "line"
            });
            break;
          }
        case "deleteHardLineBackward":
          {
            import_slate.Editor.deleteBackward(editor, {
              unit: "block"
            });
            break;
          }
        case "deleteSoftLineBackward":
          {
            import_slate.Editor.deleteBackward(editor, {
              unit: "line"
            });
            break;
          }
        case "deleteHardLineForward":
          {
            import_slate.Editor.deleteForward(editor, {
              unit: "block"
            });
            break;
          }
        case "deleteSoftLineForward":
          {
            import_slate.Editor.deleteForward(editor, {
              unit: "line"
            });
            break;
          }
        case "deleteWordBackward":
          {
            import_slate.Editor.deleteBackward(editor, {
              unit: "word"
            });
            break;
          }
        case "deleteWordForward":
          {
            import_slate.Editor.deleteForward(editor, {
              unit: "word"
            });
            break;
          }
        case "insertLineBreak":
          import_slate.Editor.insertSoftBreak(editor);
          break;
        case "insertParagraph":
          {
            import_slate.Editor.insertBreak(editor);
            break;
          }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText":
          {
            if (type === "insertFromComposition") {
              if (ReactEditor.isComposing(editor)) {
                setIsComposing(false);
                import_slate_dom.IS_COMPOSING.set(editor, false);
              }
            }
            if ((data === null || data === void 0 ? void 0 : data.constructor.name) === "DataTransfer") {
              ReactEditor.insertData(editor, data);
            } else if (typeof data === "string") {
              if (native) {
                deferredOperations.current.push(() => import_slate.Editor.insertText(editor, data));
              } else {
                import_slate.Editor.insertText(editor, data);
              }
            }
            break;
          }
      }
      var toRestore = (_EDITOR_TO_USER_SELEC = import_slate_dom.EDITOR_TO_USER_SELECTION.get(editor)) === null || _EDITOR_TO_USER_SELEC === void 0 ? void 0 : _EDITOR_TO_USER_SELEC.unref();
      import_slate_dom.EDITOR_TO_USER_SELECTION.delete(editor);
      if (toRestore && (!editor.selection || !import_slate.Range.equals(editor.selection, toRestore))) {
        import_slate.Transforms.select(editor, toRestore);
      }
    }
  }, [editor, onDOMSelectionChange, onUserInput, propsOnDOMBeforeInput, readOnly, scheduleOnDOMSelectionChange]);
  var callbackRef = (0, import_react.useCallback)(node => {
    if (node == null) {
      onDOMSelectionChange.cancel();
      scheduleOnDOMSelectionChange.cancel();
      import_slate_dom.EDITOR_TO_ELEMENT.delete(editor);
      import_slate_dom.NODE_TO_ELEMENT.delete(editor);
      if (ref.current && import_slate_dom.HAS_BEFORE_INPUT_SUPPORT) {
        ref.current.removeEventListener("beforeinput", onDOMBeforeInput);
      }
    } else {
      if (import_slate_dom.HAS_BEFORE_INPUT_SUPPORT) {
        node.addEventListener("beforeinput", onDOMBeforeInput);
      }
    }
    ref.current = node;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  }, [onDOMSelectionChange, scheduleOnDOMSelectionChange, editor, onDOMBeforeInput, forwardedRef]);
  useIsomorphicLayoutEffect(() => {
    var window2 = ReactEditor.getWindow(editor);
    var onSelectionChange = _ref => {
      var {
        target
      } = _ref;
      var targetElement = target instanceof HTMLElement ? target : null;
      var targetTagName = targetElement === null || targetElement === void 0 ? void 0 : targetElement.tagName;
      if (targetTagName === "INPUT" || targetTagName === "TEXTAREA") {
        return;
      }
      scheduleOnDOMSelectionChange();
    };
    window2.document.addEventListener("selectionchange", onSelectionChange);
    var stoppedDragging = () => {
      state.isDraggingInternally = false;
    };
    window2.document.addEventListener("dragend", stoppedDragging);
    window2.document.addEventListener("drop", stoppedDragging);
    return () => {
      window2.document.removeEventListener("selectionchange", onSelectionChange);
      window2.document.removeEventListener("dragend", stoppedDragging);
      window2.document.removeEventListener("drop", stoppedDragging);
    };
  }, [scheduleOnDOMSelectionChange, state]);
  var decorations = decorate([editor, []]);
  var showPlaceholder = placeholder && editor.children.length === 1 && Array.from(import_slate.Node.texts(editor)).length === 1 && import_slate.Node.string(editor) === "" && !isComposing;
  var placeHolderResizeHandler = (0, import_react.useCallback)(placeholderEl => {
    if (placeholderEl && showPlaceholder) {
      var _placeholderEl$getBou;
      setPlaceholderHeight((_placeholderEl$getBou = placeholderEl.getBoundingClientRect()) === null || _placeholderEl$getBou === void 0 ? void 0 : _placeholderEl$getBou.height);
    } else {
      setPlaceholderHeight(void 0);
    }
  }, [showPlaceholder]);
  if (showPlaceholder) {
    var start = import_slate.Editor.start(editor, []);
    decorations.push({
      [import_slate_dom.PLACEHOLDER_SYMBOL]: true,
      placeholder,
      onPlaceholderResize: placeHolderResizeHandler,
      anchor: start,
      focus: start
    });
  }
  var {
    marks
  } = editor;
  state.hasMarkPlaceholder = false;
  if (editor.selection && import_slate.Range.isCollapsed(editor.selection) && marks) {
    var {
      anchor
    } = editor.selection;
    var leaf = import_slate.Node.leaf(editor, anchor.path);
    var rest = _objectWithoutProperties(leaf, _excluded2);
    if (!import_slate.Text.equals(leaf, marks, {
      loose: true
    })) {
      state.hasMarkPlaceholder = true;
      var unset = Object.fromEntries(Object.keys(rest).map(mark => [mark, null]));
      decorations.push(_objectSpread(_objectSpread(_objectSpread({
        [import_slate_dom.MARK_PLACEHOLDER_SYMBOL]: true
      }, unset), marks), {}, {
        anchor,
        focus: anchor
      }));
    }
  }
  (0, import_react.useEffect)(() => {
    setTimeout(() => {
      var {
        selection
      } = editor;
      if (selection) {
        var {
          anchor: _anchor
        } = selection;
        var _text = import_slate.Node.leaf(editor, _anchor.path);
        if (marks && !import_slate.Text.equals(_text, marks, {
          loose: true
        })) {
          import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.set(editor, marks);
          return;
        }
      }
      import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
    });
  });
  return /* @__PURE__ */import_react.default.createElement(ReadOnlyContext.Provider, {
    value: readOnly
  }, /* @__PURE__ */import_react.default.createElement(ComposingContext.Provider, {
    value: isComposing
  }, /* @__PURE__ */import_react.default.createElement(DecorateContext.Provider, {
    value: decorate
  }, /* @__PURE__ */import_react.default.createElement(RestoreDOM, {
    node: ref,
    receivedUserInput
  }, /* @__PURE__ */import_react.default.createElement(Component2, _objectSpread(_objectSpread({
    role: readOnly ? void 0 : "textbox",
    "aria-multiline": readOnly ? void 0 : true
  }, attributes), {}, {
    spellCheck: import_slate_dom.HAS_BEFORE_INPUT_SUPPORT || !import_slate_dom.CAN_USE_DOM ? attributes.spellCheck : false,
    autoCorrect: import_slate_dom.HAS_BEFORE_INPUT_SUPPORT || !import_slate_dom.CAN_USE_DOM ? attributes.autoCorrect : "false",
    autoCapitalize: import_slate_dom.HAS_BEFORE_INPUT_SUPPORT || !import_slate_dom.CAN_USE_DOM ? attributes.autoCapitalize : "false",
    "data-slate-editor": true,
    "data-slate-node": "value",
    contentEditable: !readOnly,
    zindex: -1,
    suppressContentEditableWarning: true,
    ref: callbackRef,
    style: _objectSpread(_objectSpread({}, disableDefaultStyles ? {} : _objectSpread({
      position: "relative",
      whiteSpace: "pre-wrap",
      wordWrap: "break-word"
    }, placeholderHeight ? {
      minHeight: placeholderHeight
    } : {})), userStyle),
    onBeforeInput: (0, import_react.useCallback)(event => {
      if (!import_slate_dom.HAS_BEFORE_INPUT_SUPPORT && !readOnly && !isEventHandled(event, attributes.onBeforeInput) && ReactEditor.hasSelectableTarget(editor, event.target)) {
        event.preventDefault();
        if (!ReactEditor.isComposing(editor)) {
          var _text2 = event.data;
          import_slate.Editor.insertText(editor, _text2);
        }
      }
    }, [attributes.onBeforeInput, editor, readOnly]),
    onInput: (0, import_react.useCallback)(event => {
      if (isEventHandled(event, attributes.onInput)) {
        return;
      }
      if (androidInputManagerRef.current) {
        androidInputManagerRef.current.handleInput();
        return;
      }
      for (var op of deferredOperations.current) {
        op();
      }
      deferredOperations.current = [];
      if (!ReactEditor.isFocused(editor)) {
        handleNativeHistoryEvents(editor, event.nativeEvent);
      }
    }, [attributes.onInput, editor]),
    onBlur: (0, import_react.useCallback)(event => {
      if (readOnly || state.isUpdatingSelection || !ReactEditor.hasSelectableTarget(editor, event.target) || isEventHandled(event, attributes.onBlur)) {
        return;
      }
      var root = ReactEditor.findDocumentOrShadowRoot(editor);
      if (state.latestElement === root.activeElement) {
        return;
      }
      var {
        relatedTarget
      } = event;
      var el = ReactEditor.toDOMNode(editor, editor);
      if (relatedTarget === el) {
        return;
      }
      if ((0, import_slate_dom.isDOMElement)(relatedTarget) && relatedTarget.hasAttribute("data-slate-spacer")) {
        return;
      }
      if (relatedTarget != null && (0, import_slate_dom.isDOMNode)(relatedTarget) && ReactEditor.hasDOMNode(editor, relatedTarget)) {
        var node = ReactEditor.toSlateNode(editor, relatedTarget);
        if (import_slate.Element.isElement(node) && !editor.isVoid(node)) {
          return;
        }
      }
      if (import_slate_dom.IS_WEBKIT) {
        var domSelection = (0, import_slate_dom.getSelection)(root);
        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
      }
      import_slate_dom.IS_FOCUSED.delete(editor);
    }, [readOnly, state.isUpdatingSelection, state.latestElement, editor, attributes.onBlur]),
    onClick: (0, import_react.useCallback)(event => {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onClick) && (0, import_slate_dom.isDOMNode)(event.target)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        if (!import_slate.Editor.hasPath(editor, path) || import_slate.Node.get(editor, path) !== node) {
          return;
        }
        if (event.detail === import_slate_dom.TRIPLE_CLICK && path.length >= 1) {
          var blockPath = path;
          if (!(import_slate.Element.isElement(node) && import_slate.Editor.isBlock(editor, node))) {
            var _block$;
            var block = import_slate.Editor.above(editor, {
              match: n => import_slate.Element.isElement(n) && import_slate.Editor.isBlock(editor, n),
              at: path
            });
            blockPath = (_block$ = block === null || block === void 0 ? void 0 : block[1]) !== null && _block$ !== void 0 ? _block$ : path.slice(0, 1);
          }
          var range = import_slate.Editor.range(editor, blockPath);
          import_slate.Transforms.select(editor, range);
          return;
        }
        if (readOnly) {
          return;
        }
        var _start = import_slate.Editor.start(editor, path);
        var end = import_slate.Editor.end(editor, path);
        var startVoid = import_slate.Editor.void(editor, {
          at: _start
        });
        var endVoid = import_slate.Editor.void(editor, {
          at: end
        });
        if (startVoid && endVoid && import_slate.Path.equals(startVoid[1], endVoid[1])) {
          var _range2 = import_slate.Editor.range(editor, _start);
          import_slate.Transforms.select(editor, _range2);
        }
      }
    }, [editor, attributes.onClick, readOnly]),
    onCompositionEnd: (0, import_react.useCallback)(event => {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        var _androidInputManagerR3;
        if (ReactEditor.isComposing(editor)) {
          Promise.resolve().then(() => {
            setIsComposing(false);
            import_slate_dom.IS_COMPOSING.set(editor, false);
          });
        }
        (_androidInputManagerR3 = androidInputManagerRef.current) === null || _androidInputManagerR3 === void 0 || _androidInputManagerR3.handleCompositionEnd(event);
        if (isEventHandled(event, attributes.onCompositionEnd) || import_slate_dom.IS_ANDROID) {
          return;
        }
        if (!import_slate_dom.IS_WEBKIT && !import_slate_dom.IS_FIREFOX_LEGACY && !import_slate_dom.IS_IOS && !import_slate_dom.IS_WECHATBROWSER && !import_slate_dom.IS_UC_MOBILE && event.data) {
          var placeholderMarks = import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.get(editor);
          import_slate_dom.EDITOR_TO_PENDING_INSERTION_MARKS.delete(editor);
          if (placeholderMarks !== void 0) {
            import_slate_dom.EDITOR_TO_USER_MARKS.set(editor, editor.marks);
            editor.marks = placeholderMarks;
          }
          import_slate.Editor.insertText(editor, event.data);
          var userMarks = import_slate_dom.EDITOR_TO_USER_MARKS.get(editor);
          import_slate_dom.EDITOR_TO_USER_MARKS.delete(editor);
          if (userMarks !== void 0) {
            editor.marks = userMarks;
          }
        }
      }
    }, [attributes.onCompositionEnd, editor]),
    onCompositionUpdate: (0, import_react.useCallback)(event => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCompositionUpdate)) {
        if (!ReactEditor.isComposing(editor)) {
          setIsComposing(true);
          import_slate_dom.IS_COMPOSING.set(editor, true);
        }
      }
    }, [attributes.onCompositionUpdate, editor]),
    onCompositionStart: (0, import_react.useCallback)(event => {
      if (ReactEditor.hasSelectableTarget(editor, event.target)) {
        var _androidInputManagerR4;
        (_androidInputManagerR4 = androidInputManagerRef.current) === null || _androidInputManagerR4 === void 0 || _androidInputManagerR4.handleCompositionStart(event);
        if (isEventHandled(event, attributes.onCompositionStart) || import_slate_dom.IS_ANDROID) {
          return;
        }
        setIsComposing(true);
        var {
          selection
        } = editor;
        if (selection && import_slate.Range.isExpanded(selection)) {
          import_slate.Editor.deleteFragment(editor);
          return;
        }
      }
    }, [attributes.onCompositionStart, editor]),
    onCopy: (0, import_react.useCallback)(event => {
      if (ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCopy) && !isDOMEventTargetInput(event)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "copy");
      }
    }, [attributes.onCopy, editor]),
    onCut: (0, import_react.useCallback)(event => {
      if (!readOnly && ReactEditor.hasSelectableTarget(editor, event.target) && !isEventHandled(event, attributes.onCut) && !isDOMEventTargetInput(event)) {
        event.preventDefault();
        ReactEditor.setFragmentData(editor, event.clipboardData, "cut");
        var {
          selection
        } = editor;
        if (selection) {
          if (import_slate.Range.isExpanded(selection)) {
            import_slate.Editor.deleteFragment(editor);
          } else {
            var node = import_slate.Node.parent(editor, selection.anchor.path);
            if (import_slate.Editor.isVoid(editor, node)) {
              import_slate.Transforms.delete(editor);
            }
          }
        }
      }
    }, [readOnly, editor, attributes.onCut]),
    onDragOver: (0, import_react.useCallback)(event => {
      if (ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragOver)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        if (import_slate.Element.isElement(node) && import_slate.Editor.isVoid(editor, node)) {
          event.preventDefault();
        }
      }
    }, [attributes.onDragOver, editor]),
    onDragStart: (0, import_react.useCallback)(event => {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDragStart)) {
        var node = ReactEditor.toSlateNode(editor, event.target);
        var path = ReactEditor.findPath(editor, node);
        var voidMatch = import_slate.Element.isElement(node) && import_slate.Editor.isVoid(editor, node) || import_slate.Editor.void(editor, {
          at: path,
          voids: true
        });
        if (voidMatch) {
          var range = import_slate.Editor.range(editor, path);
          import_slate.Transforms.select(editor, range);
        }
        state.isDraggingInternally = true;
        ReactEditor.setFragmentData(editor, event.dataTransfer, "drag");
      }
    }, [readOnly, editor, attributes.onDragStart, state]),
    onDrop: (0, import_react.useCallback)(event => {
      if (!readOnly && ReactEditor.hasTarget(editor, event.target) && !isEventHandled(event, attributes.onDrop)) {
        event.preventDefault();
        var draggedRange = editor.selection;
        var range = ReactEditor.findEventRange(editor, event);
        var data = event.dataTransfer;
        import_slate.Transforms.select(editor, range);
        if (state.isDraggingInternally) {
          if (draggedRange && !import_slate.Range.equals(draggedRange, range) && !import_slate.Editor.void(editor, {
            at: range,
            voids: true
          })) {
            import_slate.Transforms.delete(editor, {
              at: draggedRange
            });
          }
        }
        ReactEditor.insertData(editor, data);
        if (!ReactEditor.isFocused(editor)) {
          ReactEditor.focus(editor);
        }
      }
    }, [readOnly, editor, attributes.onDrop, state]),
    onDragEnd: (0, import_react.useCallback)(event => {
      if (!readOnly && state.isDraggingInternally && attributes.onDragEnd && ReactEditor.hasTarget(editor, event.target)) {
        attributes.onDragEnd(event);
      }
    }, [readOnly, state, attributes, editor]),
    onFocus: (0, import_react.useCallback)(event => {
      if (!readOnly && !state.isUpdatingSelection && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onFocus)) {
        var el = ReactEditor.toDOMNode(editor, editor);
        var root = ReactEditor.findDocumentOrShadowRoot(editor);
        state.latestElement = root.activeElement;
        if (import_slate_dom.IS_FIREFOX && event.target !== el) {
          el.focus();
          return;
        }
        import_slate_dom.IS_FOCUSED.set(editor, true);
      }
    }, [readOnly, state, editor, attributes.onFocus]),
    onKeyDown: (0, import_react.useCallback)(event => {
      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target)) {
        var _androidInputManagerR5;
        (_androidInputManagerR5 = androidInputManagerRef.current) === null || _androidInputManagerR5 === void 0 || _androidInputManagerR5.handleKeyDown(event);
        var {
          nativeEvent
        } = event;
        if (ReactEditor.isComposing(editor) && nativeEvent.isComposing === false) {
          import_slate_dom.IS_COMPOSING.set(editor, false);
          setIsComposing(false);
        }
        if (isEventHandled(event, attributes.onKeyDown) || ReactEditor.isComposing(editor)) {
          return;
        }
        var {
          selection
        } = editor;
        var element = editor.children[selection !== null ? selection.focus.path[0] : 0];
        var isRTL = (0, import_direction.default)(import_slate.Node.string(element)) === "rtl";
        if (import_slate_dom.Hotkeys.isRedo(nativeEvent)) {
          event.preventDefault();
          var maybeHistoryEditor = editor;
          if (typeof maybeHistoryEditor.redo === "function") {
            maybeHistoryEditor.redo();
          }
          return;
        }
        if (import_slate_dom.Hotkeys.isUndo(nativeEvent)) {
          event.preventDefault();
          var _maybeHistoryEditor = editor;
          if (typeof _maybeHistoryEditor.undo === "function") {
            _maybeHistoryEditor.undo();
          }
          return;
        }
        if (import_slate_dom.Hotkeys.isMoveLineBackward(nativeEvent)) {
          event.preventDefault();
          import_slate.Transforms.move(editor, {
            unit: "line",
            reverse: true
          });
          return;
        }
        if (import_slate_dom.Hotkeys.isMoveLineForward(nativeEvent)) {
          event.preventDefault();
          import_slate.Transforms.move(editor, {
            unit: "line"
          });
          return;
        }
        if (import_slate_dom.Hotkeys.isExtendLineBackward(nativeEvent)) {
          event.preventDefault();
          import_slate.Transforms.move(editor, {
            unit: "line",
            edge: "focus",
            reverse: true
          });
          return;
        }
        if (import_slate_dom.Hotkeys.isExtendLineForward(nativeEvent)) {
          event.preventDefault();
          import_slate.Transforms.move(editor, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (import_slate_dom.Hotkeys.isMoveBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && import_slate.Range.isCollapsed(selection)) {
            import_slate.Transforms.move(editor, {
              reverse: !isRTL
            });
          } else {
            import_slate.Transforms.collapse(editor, {
              edge: isRTL ? "end" : "start"
            });
          }
          return;
        }
        if (import_slate_dom.Hotkeys.isMoveForward(nativeEvent)) {
          event.preventDefault();
          if (selection && import_slate.Range.isCollapsed(selection)) {
            import_slate.Transforms.move(editor, {
              reverse: isRTL
            });
          } else {
            import_slate.Transforms.collapse(editor, {
              edge: isRTL ? "start" : "end"
            });
          }
          return;
        }
        if (import_slate_dom.Hotkeys.isMoveWordBackward(nativeEvent)) {
          event.preventDefault();
          if (selection && import_slate.Range.isExpanded(selection)) {
            import_slate.Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          import_slate.Transforms.move(editor, {
            unit: "word",
            reverse: !isRTL
          });
          return;
        }
        if (import_slate_dom.Hotkeys.isMoveWordForward(nativeEvent)) {
          event.preventDefault();
          if (selection && import_slate.Range.isExpanded(selection)) {
            import_slate.Transforms.collapse(editor, {
              edge: "focus"
            });
          }
          import_slate.Transforms.move(editor, {
            unit: "word",
            reverse: isRTL
          });
          return;
        }
        if (!import_slate_dom.HAS_BEFORE_INPUT_SUPPORT) {
          if (import_slate_dom.Hotkeys.isBold(nativeEvent) || import_slate_dom.Hotkeys.isItalic(nativeEvent) || import_slate_dom.Hotkeys.isTransposeCharacter(nativeEvent)) {
            event.preventDefault();
            return;
          }
          if (import_slate_dom.Hotkeys.isSoftBreak(nativeEvent)) {
            event.preventDefault();
            import_slate.Editor.insertSoftBreak(editor);
            return;
          }
          if (import_slate_dom.Hotkeys.isSplitBlock(nativeEvent)) {
            event.preventDefault();
            import_slate.Editor.insertBreak(editor);
            return;
          }
          if (import_slate_dom.Hotkeys.isDeleteBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && import_slate.Range.isExpanded(selection)) {
              import_slate.Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              import_slate.Editor.deleteBackward(editor);
            }
            return;
          }
          if (import_slate_dom.Hotkeys.isDeleteForward(nativeEvent)) {
            event.preventDefault();
            if (selection && import_slate.Range.isExpanded(selection)) {
              import_slate.Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              import_slate.Editor.deleteForward(editor);
            }
            return;
          }
          if (import_slate_dom.Hotkeys.isDeleteLineBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && import_slate.Range.isExpanded(selection)) {
              import_slate.Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              import_slate.Editor.deleteBackward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (import_slate_dom.Hotkeys.isDeleteLineForward(nativeEvent)) {
            event.preventDefault();
            if (selection && import_slate.Range.isExpanded(selection)) {
              import_slate.Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              import_slate.Editor.deleteForward(editor, {
                unit: "line"
              });
            }
            return;
          }
          if (import_slate_dom.Hotkeys.isDeleteWordBackward(nativeEvent)) {
            event.preventDefault();
            if (selection && import_slate.Range.isExpanded(selection)) {
              import_slate.Editor.deleteFragment(editor, {
                direction: "backward"
              });
            } else {
              import_slate.Editor.deleteBackward(editor, {
                unit: "word"
              });
            }
            return;
          }
          if (import_slate_dom.Hotkeys.isDeleteWordForward(nativeEvent)) {
            event.preventDefault();
            if (selection && import_slate.Range.isExpanded(selection)) {
              import_slate.Editor.deleteFragment(editor, {
                direction: "forward"
              });
            } else {
              import_slate.Editor.deleteForward(editor, {
                unit: "word"
              });
            }
            return;
          }
        } else {
          if (import_slate_dom.IS_CHROME || import_slate_dom.IS_WEBKIT) {
            if (selection && (import_slate_dom.Hotkeys.isDeleteBackward(nativeEvent) || import_slate_dom.Hotkeys.isDeleteForward(nativeEvent)) && import_slate.Range.isCollapsed(selection)) {
              var currentNode = import_slate.Node.parent(editor, selection.anchor.path);
              if (import_slate.Element.isElement(currentNode) && import_slate.Editor.isVoid(editor, currentNode) && (import_slate.Editor.isInline(editor, currentNode) || import_slate.Editor.isBlock(editor, currentNode))) {
                event.preventDefault();
                import_slate.Editor.deleteBackward(editor, {
                  unit: "block"
                });
                return;
              }
            }
          }
        }
      }
    }, [readOnly, editor, attributes.onKeyDown]),
    onPaste: (0, import_react.useCallback)(event => {
      if (!readOnly && ReactEditor.hasEditableTarget(editor, event.target) && !isEventHandled(event, attributes.onPaste)) {
        if (!import_slate_dom.HAS_BEFORE_INPUT_SUPPORT || (0, import_slate_dom.isPlainTextOnlyPaste)(event.nativeEvent) || import_slate_dom.IS_WEBKIT) {
          event.preventDefault();
          ReactEditor.insertData(editor, event.clipboardData);
        }
      }
    }, [readOnly, editor, attributes.onPaste])
  }), /* @__PURE__ */import_react.default.createElement(Children, {
    decorations,
    node: editor,
    renderElement,
    renderPlaceholder,
    renderLeaf,
    renderText,
    selection: editor.selection
  }))))));
});
var DefaultPlaceholder = _ref2 => {
  var {
    attributes,
    children
  } = _ref2;
  return /* @__PURE__ */import_react.default.createElement("span", _objectSpread({}, attributes), children, import_slate_dom.IS_ANDROID && /* @__PURE__ */import_react.default.createElement("br", null));
};
var defaultDecorate = () => [];
var defaultScrollSelectionIntoView = (editor, domRange) => {
  if (domRange.getBoundingClientRect && (!editor.selection || editor.selection && import_slate.Range.isCollapsed(editor.selection))) {
    var leafEl = domRange.startContainer.parentElement;
    leafEl.getBoundingClientRect = domRange.getBoundingClientRect.bind(domRange);
    (0, import_scroll_into_view_if_needed.default)(leafEl, {
      scrollMode: "if-needed"
    });
    delete leafEl.getBoundingClientRect;
  }
};
var isEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.isDefaultPrevented() || event.isPropagationStopped();
};
var isDOMEventTargetInput = event => {
  return (0, import_slate_dom.isDOMNode)(event.target) && (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement);
};
var isDOMEventHandled = (event, handler) => {
  if (!handler) {
    return false;
  }
  var shouldTreatEventAsHandled = handler(event);
  if (shouldTreatEventAsHandled != null) {
    return shouldTreatEventAsHandled;
  }
  return event.defaultPrevented;
};
var handleNativeHistoryEvents = (editor, event) => {
  var maybeHistoryEditor = editor;
  if (event.inputType === "historyUndo" && typeof maybeHistoryEditor.undo === "function") {
    maybeHistoryEditor.undo();
    return;
  }
  if (event.inputType === "historyRedo" && typeof maybeHistoryEditor.redo === "function") {
    maybeHistoryEditor.redo();
    return;
  }
};
var FocusedContext = /* @__PURE__ */(0, import_react.createContext)(false);
var useFocused = () => {
  return (0, import_react.useContext)(FocusedContext);
};
function isError(error) {
  return error instanceof Error;
}
var SlateSelectorContext = /* @__PURE__ */(0, import_react.createContext)({});
var refEquality = (a, b) => a === b;
function useSlateSelector(selector) {
  var equalityFn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : refEquality;
  var [, forceRender] = (0, import_react.useReducer)(s => s + 1, 0);
  var context = (0, import_react.useContext)(SlateSelectorContext);
  if (!context) {
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  }
  var {
    getSlate,
    addEventListener
  } = context;
  var latestSubscriptionCallbackError = (0, import_react.useRef)();
  var latestSelector = (0, import_react.useRef)(() => null);
  var latestSelectedState = (0, import_react.useRef)(null);
  var selectedState;
  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      var selectorResult = selector(getSlate());
      if (equalityFn(latestSelectedState.current, selectorResult)) {
        selectedState = latestSelectedState.current;
      } else {
        selectedState = selectorResult;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current && isError(err)) {
      err.message += "\nThe error may be correlated with this previous error:\n".concat(latestSubscriptionCallbackError.current.stack, "\n\n");
    }
    throw err;
  }
  useIsomorphicLayoutEffect(() => {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = void 0;
  });
  useIsomorphicLayoutEffect(() => {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(getSlate());
        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }
        latestSelectedState.current = newSelectedState;
      } catch (err) {
        if (err instanceof Error) {
          latestSubscriptionCallbackError.current = err;
        } else {
          latestSubscriptionCallbackError.current = new Error(String(err));
        }
      }
      forceRender();
    }
    var unsubscribe = addEventListener(checkForUpdates);
    checkForUpdates();
    return () => unsubscribe();
  }, [addEventListener, getSlate]);
  return selectedState;
}
function useSelectorContext(editor) {
  var eventListeners = (0, import_react.useRef)([]).current;
  var slateRef = (0, import_react.useRef)({
    editor
  }).current;
  var onChange = (0, import_react.useCallback)(editor2 => {
    slateRef.editor = editor2;
    eventListeners.forEach(listener => listener(editor2));
  }, [eventListeners, slateRef]);
  var selectorContext = (0, import_react.useMemo)(() => {
    return {
      getSlate: () => slateRef.editor,
      addEventListener: callback => {
        eventListeners.push(callback);
        return () => {
          eventListeners.splice(eventListeners.indexOf(callback), 1);
        };
      }
    };
  }, [eventListeners, slateRef]);
  return {
    selectorContext,
    onChange
  };
}
var REACT_MAJOR_VERSION = parseInt(import_react.default.version.split(".")[0], 10);
var _excluded = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"];
var Slate = props => {
  var {
      editor,
      children,
      onChange,
      onSelectionChange,
      onValueChange,
      initialValue
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  var [context, setContext] = import_react.default.useState(() => {
    if (!import_slate.Node.isNodeList(initialValue)) {
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(import_slate.Scrubber.stringify(initialValue)));
    }
    if (!import_slate.Editor.isEditor(editor)) {
      throw new Error("[Slate] editor is invalid! You passed: ".concat(import_slate.Scrubber.stringify(editor)));
    }
    editor.children = initialValue;
    Object.assign(editor, rest);
    return {
      v: 0,
      editor
    };
  });
  var {
    selectorContext,
    onChange: handleSelectorChange
  } = useSelectorContext(editor);
  var onContextChange = (0, import_react.useCallback)(options => {
    var _options$operation;
    if (onChange) {
      onChange(editor.children);
    }
    switch (options === null || options === void 0 || (_options$operation = options.operation) === null || _options$operation === void 0 ? void 0 : _options$operation.type) {
      case "set_selection":
        onSelectionChange === null || onSelectionChange === void 0 || onSelectionChange(editor.selection);
        break;
      default:
        onValueChange === null || onValueChange === void 0 || onValueChange(editor.children);
    }
    setContext(prevContext => ({
      v: prevContext.v + 1,
      editor
    }));
    handleSelectorChange(editor);
  }, [editor, handleSelectorChange, onChange, onSelectionChange, onValueChange]);
  (0, import_react.useEffect)(() => {
    import_slate_dom.EDITOR_TO_ON_CHANGE.set(editor, onContextChange);
    return () => {
      import_slate_dom.EDITOR_TO_ON_CHANGE.set(editor, () => {});
    };
  }, [editor, onContextChange]);
  var [isFocused, setIsFocused] = (0, import_react.useState)(ReactEditor.isFocused(editor));
  (0, import_react.useEffect)(() => {
    setIsFocused(ReactEditor.isFocused(editor));
  }, [editor]);
  useIsomorphicLayoutEffect(() => {
    var fn = () => setIsFocused(ReactEditor.isFocused(editor));
    if (REACT_MAJOR_VERSION >= 17) {
      document.addEventListener("focusin", fn);
      document.addEventListener("focusout", fn);
      return () => {
        document.removeEventListener("focusin", fn);
        document.removeEventListener("focusout", fn);
      };
    } else {
      document.addEventListener("focus", fn, true);
      document.addEventListener("blur", fn, true);
      return () => {
        document.removeEventListener("focus", fn, true);
        document.removeEventListener("blur", fn, true);
      };
    }
  }, []);
  return /* @__PURE__ */import_react.default.createElement(SlateSelectorContext.Provider, {
    value: selectorContext
  }, /* @__PURE__ */import_react.default.createElement(SlateContext.Provider, {
    value: context
  }, /* @__PURE__ */import_react.default.createElement(EditorContext.Provider, {
    value: context.editor
  }, /* @__PURE__ */import_react.default.createElement(FocusedContext.Provider, {
    value: isFocused
  }, children))));
};
var useEditor = () => {
  var editor = (0, import_react.useContext)(EditorContext);
  if (!editor) {
    throw new Error("The `useEditor` hook must be used inside the <Slate> component's context.");
  }
  return editor;
};
var useSlateSelection = () => {
  return useSlateSelector(editor => editor.selection, isSelectionEqual);
};
var isSelectionEqual = (a, b) => {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return import_slate.Range.equals(a, b);
};
var withReact = function withReact2(editor) {
  var clipboardFormatKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment";
  var e = editor;
  e = (0, import_slate_dom.withDOM)(e, clipboardFormatKey);
  var {
    onChange
  } = e;
  e.onChange = options => {
    var maybeBatchUpdates = REACT_MAJOR_VERSION < 18 ? import_react_dom.default.unstable_batchedUpdates : callback => callback();
    maybeBatchUpdates(() => {
      onChange(options);
    });
  };
  return e;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kaXJlY3Rpb24vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3NsYXRlLXJlYWN0LjAuMTE0LjIuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXNsYXRlLXN0YXRpYy50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL3BsdWdpbi9yZWFjdC1lZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL2FuZHJvaWQtaW5wdXQtbWFuYWdlci9hbmRyb2lkLWlucHV0LW1hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL3VzZS1pcy1tb3VudGVkLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLWlzb21vcnBoaWMtbGF5b3V0LWVmZmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLW11dGF0aW9uLW9ic2VydmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy9hbmRyb2lkLWlucHV0LW1hbmFnZXIvdXNlLWFuZHJvaWQtaW5wdXQtbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvY29tcG9uZW50cy9zdHJpbmcudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9jb21wb25lbnRzL2xlYWYudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9jb21wb25lbnRzL3RleHQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9jb21wb25lbnRzL2VsZW1lbnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtZGVjb3JhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL3VzZS1zZWxlY3RlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLWNoaWxkcmVuLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXJlYWQtb25seS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXNsYXRlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXRyYWNrLXVzZXItaW5wdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2NvbXBvbmVudHMvcmVzdG9yZS1kb20vcmVzdG9yZS1kb20tbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvY29tcG9uZW50cy9yZXN0b3JlLWRvbS9yZXN0b3JlLWRvbS50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL3VzZS1jb21wb3NpbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2NvbXBvbmVudHMvZWRpdGFibGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtZm9jdXNlZC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXNsYXRlLXNlbGVjdG9yLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvdXRpbHMvZW52aXJvbm1lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2NvbXBvbmVudHMvc2xhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtZWRpdG9yLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXNsYXRlLXNlbGVjdGlvbi50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL3BsdWdpbi93aXRoLXJlYWN0LnRzIl0sIm5hbWVzIjpbInJlcXVpcmVfZGlyZWN0aW9uIiwiX19jb21tb25KUyIsIm5vZGVfbW9kdWxlcy9kaXJlY3Rpb24vaW5kZXguanMiLCJleHBvcnRzIiwibW9kdWxlMiIsImRpcmVjdGlvbiIsIlJUTCIsIkxUUiIsInJ0bCIsIlJlZ0V4cCIsImx0ciIsInZhbHVlIiwiU3RyaW5nIiwidGVzdCIsInJlcXVpcmVfaXNPYmplY3QiLCJub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwiaXNPYmplY3QiLCJ0eXBlIiwicmVxdWlyZV9mcmVlR2xvYmFsIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJPYmplY3QiLCJyZXF1aXJlX3Jvb3QiLCJub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwiZnJlZVNlbGYiLCJzZWxmIiwicm9vdCIsIkZ1bmN0aW9uIiwicmVxdWlyZV9ub3ciLCJub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIm5vdyIsIkRhdGUiLCJyZXF1aXJlX3RyaW1tZWRFbmRJbmRleCIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsInJlV2hpdGVzcGFjZSIsInRyaW1tZWRFbmRJbmRleCIsInN0cmluZyIsImluZGV4IiwibGVuZ3RoIiwiY2hhckF0IiwicmVxdWlyZV9iYXNlVHJpbSIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwicmVUcmltU3RhcnQiLCJiYXNlVHJpbSIsInNsaWNlIiwicmVwbGFjZSIsInJlcXVpcmVfU3ltYm9sIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwiU3ltYm9sMiIsIlN5bWJvbCIsInJlcXVpcmVfZ2V0UmF3VGFnIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwib2JqZWN0UHJvdG8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJjYWxsIiwidGFnIiwidW5tYXNrZWQiLCJlIiwicmVzdWx0IiwicmVxdWlyZV9vYmplY3RUb1N0cmluZyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwib2JqZWN0VG9TdHJpbmciLCJyZXF1aXJlX2Jhc2VHZXRUYWciLCJub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsImJhc2VHZXRUYWciLCJyZXF1aXJlX2lzT2JqZWN0TGlrZSIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwiaXNPYmplY3RMaWtlIiwicmVxdWlyZV9pc1N5bWJvbCIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJzeW1ib2xUYWciLCJpc1N5bWJvbCIsInJlcXVpcmVfdG9OdW1iZXIiLCJub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwiTkFOIiwicmVJc0JhZEhleCIsInJlSXNCaW5hcnkiLCJyZUlzT2N0YWwiLCJmcmVlUGFyc2VJbnQiLCJwYXJzZUludCIsInRvTnVtYmVyIiwib3RoZXIiLCJ2YWx1ZU9mIiwiaXNCaW5hcnkiLCJyZXF1aXJlX2RlYm91bmNlIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIkZVTkNfRVJST1JfVEVYVCIsIm5hdGl2ZU1heCIsIk1hdGgiLCJtYXgiLCJuYXRpdmVNaW4iLCJtaW4iLCJkZWJvdW5jZTIiLCJmdW5jIiwid2FpdCIsIm9wdGlvbnMiLCJsYXN0QXJncyIsImxhc3RUaGlzIiwibWF4V2FpdCIsInRpbWVySWQiLCJsYXN0Q2FsbFRpbWUiLCJsYXN0SW52b2tlVGltZSIsImxlYWRpbmciLCJtYXhpbmciLCJ0cmFpbGluZyIsIlR5cGVFcnJvciIsImludm9rZUZ1bmMiLCJ0aW1lIiwiYXJncyIsInRoaXNBcmciLCJhcHBseSIsImxlYWRpbmdFZGdlIiwic2V0VGltZW91dCIsInRpbWVyRXhwaXJlZCIsInJlbWFpbmluZ1dhaXQiLCJ0aW1lU2luY2VMYXN0Q2FsbCIsInRpbWVTaW5jZUxhc3RJbnZva2UiLCJ0aW1lV2FpdGluZyIsInNob3VsZEludm9rZSIsInRyYWlsaW5nRWRnZSIsImNhbmNlbCIsImNsZWFyVGltZW91dCIsImZsdXNoIiwiZGVib3VuY2VkIiwiaXNJbnZva2luZyIsImFyZ3VtZW50cyIsInJlcXVpcmVfdGhyb3R0bGUiLCJub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwidGhyb3R0bGUyIiwic2xhdGVfcmVhY3RfMF8xMTRfMl9leHBvcnRzIiwiX19leHBvcnQiLCJEZWZhdWx0RWxlbWVudCIsIkRlZmF1bHRMZWFmIiwiRGVmYXVsdFBsYWNlaG9sZGVyIiwiRGVmYXVsdFRleHQiLCJFZGl0YWJsZSIsIk5PREVfVE9fSU5ERVgiLCJpbXBvcnRfc2xhdGVfZG9tMiIsIk5PREVfVE9fUEFSRU5UIiwiUmVhY3RFZGl0b3IiLCJTbGF0ZSIsInVzZUNvbXBvc2luZyIsInVzZUVkaXRvciIsInVzZUZvY3VzZWQiLCJ1c2VSZWFkT25seSIsInVzZVNlbGVjdGVkIiwidXNlU2xhdGUiLCJ1c2VTbGF0ZVNlbGVjdGlvbiIsInVzZVNsYXRlU2VsZWN0b3IiLCJ1c2VTbGF0ZVN0YXRpYyIsInVzZVNsYXRlV2l0aFYiLCJ3aXRoUmVhY3QiLCJtb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwidGFyZ2V0Iiwic291cmNlS2V5cyIsImtleXMiLCJrZXkiLCJpIiwiaW5kZXhPZiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl90eXBlb2YiLCJvIiwiaXRlcmF0b3IiLCJvMiIsImNvbnN0cnVjdG9yIiwiX3RvUHJpbWl0aXZlIiwiaW5wdXQiLCJoaW50IiwicHJpbSIsInRvUHJpbWl0aXZlIiwicmVzIiwiTnVtYmVyIiwiX3RvUHJvcGVydHlLZXkiLCJhcmciLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkVkaXRvckNvbnRleHQiLCJpbXBvcnRfcmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZWRpdG9yIiwidXNlQ29udGV4dCIsIkVycm9yIiwiaW1wb3J0X3NsYXRlX2RvbSIsIkRPTUVkaXRvciIsIlJFU09MVkVfREVMQVkiLCJGTFVTSF9ERUxBWSIsImRlYnVnIiwiZGVidWcyIiwiaXNEYXRhVHJhbnNmZXIiLCJuYW1lIiwiY3JlYXRlQW5kcm9pZElucHV0TWFuYWdlciIsIl9yZWYiLCJzY2hlZHVsZU9uRE9NU2VsZWN0aW9uQ2hhbmdlIiwib25ET01TZWxlY3Rpb25DaGFuZ2UiLCJmbHVzaGluZyIsImNvbXBvc2l0aW9uRW5kVGltZW91dElkIiwiZmx1c2hUaW1lb3V0SWQiLCJhY3Rpb25UaW1lb3V0SWQiLCJpZENvdW50ZXIiLCJpbnNlcnRQb3NpdGlvbkhpbnQiLCJhcHBseVBlbmRpbmdTZWxlY3Rpb24iLCJwZW5kaW5nU2VsZWN0aW9uIiwiRURJVE9SX1RPX1BFTkRJTkdfU0VMRUNUSU9OIiwiZ2V0IiwiZGVsZXRlIiwic2VsZWN0aW9uIiwibm9ybWFsaXplZCIsIm5vcm1hbGl6ZVJhbmdlIiwiaW1wb3J0X3NsYXRlIiwiUmFuZ2UiLCJlcXVhbHMiLCJUcmFuc2Zvcm1zIiwic2VsZWN0IiwicGVyZm9ybUFjdGlvbiIsImFjdGlvbiIsIkVESVRPUl9UT19QRU5ESU5HX0FDVElPTiIsImF0IiwiUG9pbnQiLCJpc1BvaW50Iiwibm9ybWFsaXplUG9pbnQiLCJfdGFyZ2V0UmFuZ2UiLCJFZGl0b3IiLCJyYW5nZSIsInJ1biIsImhhc1BlbmRpbmdEaWZmcyIsImhhc1BlbmRpbmdBY3Rpb24iLCJzZWxlY3Rpb25SZWYiLCJyYW5nZVJlZiIsImFmZmluaXR5IiwiRURJVE9SX1RPX1VTRVJfTUFSS1MiLCJzZXQiLCJtYXJrcyIsIkVESVRPUl9UT19QRU5ESU5HX0RJRkZTIiwic2NoZWR1bGVTZWxlY3Rpb25DaGFuZ2UiLCJkaWZmIiwiX0VESVRPUl9UT19QRU5ESU5HX0RJIiwiX0VESVRPUl9UT19QRU5ESU5HX0RJMiIsInBlbmRpbmdNYXJrcyIsIkVESVRPUl9UT19QRU5ESU5HX0lOU0VSVElPTl9NQVJLUyIsInRhcmdldFJhbmdlIiwidGV4dCIsImluc2VydFRleHQiLCJkZWxldGVGcmFnbWVudCIsImZpbHRlciIsIl9yZWYyIiwiaWQiLCJ2ZXJpZnlEaWZmU3RhdGUiLCJ1bnJlZiIsInVzZXJNYXJrcyIsIm9uQ2hhbmdlIiwiaGFuZGxlQ29tcG9zaXRpb25FbmQiLCJfZXZlbnQiLCJJU19DT01QT1NJTkciLCJoYW5kbGVDb21wb3NpdGlvblN0YXJ0IiwidXBkYXRlUGxhY2Vob2xkZXJWaXNpYmlsaXR5IiwidXBkYXRlUGxhY2Vob2xkZXJWaXNpYmlsaXR5MiIsImZvcmNlSGlkZSIsInBsYWNlaG9sZGVyRWxlbWVudCIsIkVESVRPUl9UT19QTEFDRUhPTERFUl9FTEVNRU5UIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlUHJvcGVydHkiLCJzdG9yZURpZmYiLCJwYXRoIiwiX0VESVRPUl9UT19QRU5ESU5HX0RJMyIsInBlbmRpbmdEaWZmcyIsIk5vZGUiLCJsZWFmIiwiaWR4IiwiZmluZEluZGV4IiwiY2hhbmdlIiwiUGF0aCIsIm5vcm1hbGl6ZVN0cmluZ0RpZmYiLCJwdXNoIiwibWVyZ2VkIiwibWVyZ2VTdHJpbmdEaWZmcyIsInNwbGljZSIsIl9vYmplY3RTcHJlYWQkNiIsInNjaGVkdWxlQWN0aW9uIiwic2NoZWR1bGVBY3Rpb24yIiwiaGFuZGxlRE9NQmVmb3JlSW5wdXQiLCJldmVudCIsIl90YXJnZXRSYW5nZTIiLCJJU19OT0RFX01BUF9ESVJUWSIsImlucHV0VHlwZSIsInRhcmdldFJhbmdlMiIsImRhdGEiLCJkYXRhVHJhbnNmZXIiLCJuYXRpdmVUYXJnZXRSYW5nZSIsImdldFRhcmdldFJhbmdlcyIsInRvU2xhdGVSYW5nZSIsImV4YWN0TWF0Y2giLCJzdXBwcmVzc1Rocm93Iiwid2luZG93MiIsImdldFdpbmRvdyIsImRvbVNlbGVjdGlvbiIsImdldFNlbGVjdGlvbiIsImNhblN0b3JlRGlmZiIsInN0YXJ0c1dpdGgiLCJpc0V4cGFuZGVkIiwiX3N0YXJ0IiwiX2VuZCIsImVkZ2VzIiwiX2xlYWYiLCJvZmZzZXQiLCJuZXh0IiwibWF0Y2giLCJUZXh0IiwiaXNUZXh0IiwiYW5jaG9yIiwiZm9jdXMiLCJlbmRzV2l0aCIsInN0YXJ0IiwiZW5kIiwicmVsZXZhbnRQZW5kaW5nRGlmZnMiLCJmaW5kIiwiZGlmZnMiLCJhcHBseVN0cmluZ0RpZmYiLCJwb2ludCIsImhhbmRsZVVzZXJTZWxlY3QiLCJpc0NvbGxhcHNlZCIsInRhcmdldE5vZGUiLCJkZWxldGVGb3J3YXJkIiwiX25hdGl2ZVRhcmdldFJhbmdlIiwiX2FuY2hvciIsIm5hdGl2ZUNvbGxhcHNlZCIsImlzRE9NU2VsZWN0aW9uIiwiY29sbGFwc2VkIiwiZGVsZXRlQmFja3dhcmQiLCJ1bml0IiwiaW5zZXJ0U29mdEJyZWFrIiwiaW5zZXJ0QnJlYWsiLCJpbnNlcnREYXRhIiwiX3RleHQiLCJpbmNsdWRlcyIsInBhcnRzIiwic3BsaXQiLCJmb3JFYWNoIiwibGluZSIsIl9zdGFydDIiLCJfZW5kMiIsIl9kaWZmIiwiaGludFBvc2l0aW9uIiwic2VhcmNoIiwiZGlmZlBvc2l0aW9uIiwic2NoZWR1bGVGbHVzaCIsIl9FRElUT1JfVE9fUEVORElOR19ESTQiLCJoYXNQZW5kaW5nQ2hhbmdlcyIsImlzRmx1c2hpbmciLCJwYXRoQ2hhbmdlZCIsInBhcmVudFBhdGhDaGFuZ2VkIiwiaGFuZGxlSW5wdXQiLCJoYW5kbGVLZXlEb3duIiwiXyIsImhhbmRsZURvbU11dGF0aW9ucyIsIm11dGF0aW9ucyIsInNvbWUiLCJtdXRhdGlvbiIsImlzVHJhY2tlZE11dGF0aW9uIiwiX0VESVRPUl9UT19GT1JDRV9SRU5EIiwiRURJVE9SX1RPX0ZPUkNFX1JFTkRFUiIsInVzZUlzTW91bnRlZCIsImlzTW91bnRlZFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IiwiQ0FOX1VTRV9ET00iLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VNdXRhdGlvbk9ic2VydmVyIiwibm9kZSIsImNhbGxiYWNrIiwibXV0YXRpb25PYnNlcnZlciIsInVzZVN0YXRlIiwiTXV0YXRpb25PYnNlcnZlciIsInRha2VSZWNvcmRzIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJNVVRBVElPTl9PQlNFUlZFUl9DT05GSUckMSIsInN1YnRyZWUiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwidXNlQW5kcm9pZElucHV0TWFuYWdlciIsIklTX0FORFJPSUQiLCJfZXhjbHVkZWQkMiIsImlzTW91bnRlZCIsImlucHV0TWFuYWdlciIsIl9vYmplY3RTcHJlYWQkNSIsIkVESVRPUl9UT19TQ0hFRFVMRV9GTFVTSCIsIlN0cmluZyQxIiwicHJvcHMiLCJpc0xhc3QiLCJwYXJlbnQiLCJmaW5kUGF0aCIsInBhcmVudFBhdGgiLCJpc01hcmtQbGFjZWhvbGRlciIsIkJvb2xlYW4iLCJNQVJLX1BMQUNFSE9MREVSX1NZTUJPTCIsImlzVm9pZCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiWmVyb1dpZHRoU3RyaW5nIiwiY2hpbGRyZW4iLCJpc0lubGluZSIsImlzTGluZUJyZWFrIiwiVGV4dFN0cmluZyIsImlzVHJhaWxpbmciLCJyZWYiLCJnZXRUZXh0Q29udGVudCIsImNvbmNhdCIsImluaXRpYWxUZXh0IiwidGV4dFdpdGhUcmFpbGluZyIsInRleHRDb250ZW50IiwiTWVtb2l6ZWRUZXh0JDEiLCJtZW1vIiwiZm9yd2FyZFJlZiIsImF0dHJpYnV0ZXMiLCJfb2JqZWN0U3ByZWFkJDQiLCJJU19JT1MiLCJQTEFDRUhPTERFUl9ERUxBWSIsImRpc2Nvbm5lY3RQbGFjZWhvbGRlclJlc2l6ZU9ic2VydmVyIiwicGxhY2Vob2xkZXJSZXNpemVPYnNlcnZlciIsInJlbGVhc2VPYnNlcnZlciIsImNsZWFyVGltZW91dFJlZiIsInRpbWVvdXRSZWYiLCJMZWFmIiwicmVuZGVyUGxhY2Vob2xkZXIiLCJyZW5kZXJMZWFmIiwicHJvcHMyIiwiX29iamVjdFNwcmVhZCQzIiwibGVhZlBvc2l0aW9uIiwicGxhY2Vob2xkZXJSZWYiLCJzaG93UGxhY2Vob2xkZXIiLCJzZXRTaG93UGxhY2Vob2xkZXIiLCJzaG93UGxhY2Vob2xkZXJUaW1lb3V0UmVmIiwiY2FsbGJhY2tQbGFjZWhvbGRlclJlZiIsInVzZUNhbGxiYWNrIiwicGxhY2Vob2xkZXJFbCIsIl9sZWFmJG9uUGxhY2Vob2xkZXJSZSIsIm9uUGxhY2Vob2xkZXJSZXNpemUiLCJSZXNpemVPYnNlcnZlciQxIiwid2luZG93IiwiUmVzaXplT2JzZXJ2ZXIiLCJpbXBvcnRfcmVzaXplX29ic2VydmVyIiwiX2xlYWYkb25QbGFjZWhvbGRlclJlMiIsImxlYWZJc1BsYWNlaG9sZGVyIiwiUExBQ0VIT0xERVJfU1lNQk9MIiwicGxhY2Vob2xkZXJQcm9wcyIsInBsYWNlaG9sZGVyIiwicG9zaXRpb24iLCJ0b3AiLCJwb2ludGVyRXZlbnRzIiwid2lkdGgiLCJtYXhXaWR0aCIsIm9wYWNpdHkiLCJ1c2VyU2VsZWN0IiwidGV4dERlY29yYXRpb24iLCJXZWJraXRVc2VyTW9kaWZ5IiwiSVNfV0VCS0lUIiwiY29udGVudEVkaXRhYmxlIiwiRnJhZ21lbnQiLCJNZW1vaXplZExlYWYiLCJwcmV2IiwiZGVjb3JhdGlvbnMiLCJyZW5kZXJUZXh0IiwiX29iamVjdFNwcmVhZCQyIiwiZGVjb3JhdGVkTGVhdmVzIiwiZmluZEtleSIsImNhbGxiYWNrUmVmIiwic3BhbiIsIktFWV9UT19FTEVNRU5UIiwiRURJVE9SX1RPX0tFWV9UT19FTEVNRU5UIiwiTk9ERV9UT19FTEVNRU5UIiwiRUxFTUVOVF9UT19OT0RFIiwiTWVtb2l6ZWRUZXh0IiwiaXNUZXh0RGVjb3JhdGlvbnNFcXVhbCIsIkVsZW1lbnQiLCJlbGVtZW50IiwicmVuZGVyRWxlbWVudCIsInAiLCJfb2JqZWN0U3ByZWFkJDEiLCJyZWFkT25seSIsInJlZjIiLCJ1c2VDaGlsZHJlbiIsImhhc0lubGluZXMiLCJkaXIiLCJpbXBvcnRfZGlyZWN0aW9uIiwiVGFnIiwidGV4dHMiLCJoZWlnaHQiLCJjb2xvciIsIm91dGxpbmUiLCJNZW1vaXplZEVsZW1lbnQiLCJpc0VsZW1lbnREZWNvcmF0aW9uc0VxdWFsIiwiRGVjb3JhdGVDb250ZXh0IiwidXNlRGVjb3JhdGUiLCJTZWxlY3RlZENvbnRleHQiLCJkZWNvcmF0ZSIsImlzTGVhZkJsb2NrIiwiaXNFbGVtZW50IiwibiIsInNlbCIsImludGVyc2VjdGlvbiIsImRzIiwiZGVjIiwiZCIsIlByb3ZpZGVyIiwiUmVhZE9ubHlDb250ZXh0IiwiU2xhdGVDb250ZXh0IiwiY29udGV4dCIsInVzZVRyYWNrVXNlcklucHV0IiwicmVjZWl2ZWRVc2VySW5wdXQiLCJhbmltYXRpb25GcmFtZUlkUmVmIiwib25Vc2VySW5wdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNyZWF0ZVJlc3RvcmVEb21NYW5hZ2VyIiwiYnVmZmVyZWRNdXRhdGlvbnMiLCJjbGVhciIsInJlZ2lzdGVyTXV0YXRpb25zIiwidHJhY2tlZE11dGF0aW9ucyIsInJlc3RvcmVET00iLCJyZXZlcnNlIiwicmVtb3ZlZE5vZGVzIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhZGRlZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJNVVRBVElPTl9PQlNFUlZFUl9DT05GSUciLCJjaGFyYWN0ZXJEYXRhT2xkVmFsdWUiLCJSZXN0b3JlRE9NQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiX3RoaXMkbXV0YXRpb25PYnNlcnZlIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYW5hZ2VyIiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJfdGhpcyRtdXRhdGlvbk9ic2VydmUyIiwiX3RoaXMkbXV0YXRpb25PYnNlcnZlMyIsIl90aGlzJG1hbmFnZXIyIiwicGVuZGluZ011dGF0aW9ucyIsIl90aGlzJG1hbmFnZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfdGhpcyRtYW5hZ2VyMyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiX3RoaXMkbXV0YXRpb25PYnNlcnZlNCIsInJlbmRlciIsIlJlc3RvcmVET00iLCJDb21wb3NpbmdDb250ZXh0IiwiQ2hpbGRyZW4iLCJmb3J3YXJkZWRSZWYiLCJkZWZhdWx0UmVuZGVyUGxhY2Vob2xkZXIiLCJfb2JqZWN0U3ByZWFkIiwiYXV0b0ZvY3VzIiwiZGVmYXVsdERlY29yYXRlIiwib25ET01CZWZvcmVJbnB1dCIsInByb3BzT25ET01CZWZvcmVJbnB1dCIsInNjcm9sbFNlbGVjdGlvbkludG9WaWV3IiwiZGVmYXVsdFNjcm9sbFNlbGVjdGlvbkludG9WaWV3IiwidXNlclN0eWxlIiwiYXMiLCJDb21wb25lbnQyIiwiZGlzYWJsZURlZmF1bHRTdHlsZXMiLCJfZXhjbHVkZWQkMSIsImlzQ29tcG9zaW5nIiwic2V0SXNDb21wb3NpbmciLCJkZWZlcnJlZE9wZXJhdGlvbnMiLCJwbGFjZWhvbGRlckhlaWdodCIsInNldFBsYWNlaG9sZGVySGVpZ2h0IiwicHJvY2Vzc2luZyIsImZvcmNlUmVuZGVyIiwidXNlUmVkdWNlciIsInMiLCJJU19SRUFEX09OTFkiLCJzdGF0ZSIsInVzZU1lbW8iLCJpc0RyYWdnaW5nSW50ZXJuYWxseSIsImlzVXBkYXRpbmdTZWxlY3Rpb24iLCJsYXRlc3RFbGVtZW50IiwiaGFzTWFya1BsYWNlaG9sZGVyIiwiYW5kcm9pZElucHV0TWFuYWdlclJlZiIsImltcG9ydF90aHJvdHRsZSIsImVsIiwidG9ET01Ob2RlIiwiZ2V0Um9vdE5vZGUiLCJTaGFkb3dSb290IiwiYWN0aXZlIiwiZ2V0QWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiZXhlY0NvbW1hbmQiLCJkZXNlbGVjdCIsImFuZHJvaWRJbnB1dE1hbmFnZXIiLCJfcm9vdCIsImZpbmREb2N1bWVudE9yU2hhZG93Um9vdCIsImFjdGl2ZUVsZW1lbnQiLCJfZWwiLCJJU19GT0NVU0VEIiwiYW5jaG9yTm9kZSIsImZvY3VzTm9kZSIsImFuY2hvck5vZGVTZWxlY3RhYmxlIiwiaGFzRWRpdGFibGVUYXJnZXQiLCJpc1RhcmdldEluc2lkZU5vblJlYWRvbmx5Vm9pZCIsImZvY3VzTm9kZUluRWRpdG9yIiwiaGFzVGFyZ2V0IiwiaW1wb3J0X2RlYm91bmNlIiwiX2FuZHJvaWRJbnB1dE1hbmFnZXJSIiwiX2FuZHJvaWRJbnB1dE1hbmFnZXJSMiIsImdldERlZmF1bHRWaWV3IiwiRURJVE9SX1RPX1dJTkRPVyIsIkVESVRPUl9UT19FTEVNRU5UIiwiaXNGb2N1c2VkIiwic2V0RG9tU2VsZWN0aW9uIiwiZm9yY2VDaGFuZ2UiLCJoYXNEb21TZWxlY3Rpb24iLCJJU19GSVJFRk9YIiwicmFuZ2VDb3VudCIsImZpcnN0UmFuZ2UiLCJnZXRSYW5nZUF0IiwibGFzdFJhbmdlIiwic3RhcnRDb250YWluZXIiLCJlbmRDb250YWluZXIiLCJlZGl0b3JFbGVtZW50IiwiaGFzRG9tU2VsZWN0aW9uSW5FZGl0b3IiLCJjb250YWlucyIsInNsYXRlUmFuZ2UiLCJfYW5jaG9yTm9kZSIsInBhcmVudEVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJoYXNSYW5nZSIsIm5ld0RvbVJhbmdlIiwidG9ET01SYW5nZSIsImNvbGxhcHNlVG9FbmQiLCJpc0JhY2t3YXJkIiwic2V0QmFzZUFuZEV4dGVudCIsImVuZE9mZnNldCIsInN0YXJ0T2Zmc2V0IiwicmVtb3ZlQWxsUmFuZ2VzIiwiZW5zdXJlU2VsZWN0aW9uIiwidGltZW91dElkIiwiYW5pbWF0aW9uRnJhbWVJZCIsImVuc3VyZURvbVNlbGVjdGlvbiIsImhhbmRsZU5hdGl2ZUhpc3RvcnlFdmVudHMiLCJyYW5nZXMiLCJuZXdSYW5nZSIsInNldFN0YXJ0Iiwic2V0RW5kIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJpc0RPTUV2ZW50SGFuZGxlZCIsIl9FRElUT1JfVE9fVVNFUl9TRUxFQyIsImlzQ29tcG9zaXRpb25DaGFuZ2UiLCJuYXRpdmUiLCJfbm9kZSRwYXJlbnRFbGVtZW50IiwiX3dpbmRvdyRnZXRDb21wdXRlZFN0IiwiYW5jaG9yMiIsInRvRE9NUG9pbnQiLCJjbG9zZXN0IiwiX3dpbmRvdyIsImhhc0RPTU5vZGUiLCJfbGFzdFRleHQkdGV4dENvbnRlbnQiLCJsYXN0VGV4dCIsImNyZWF0ZVRyZWVXYWxrZXIiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwibGFzdENoaWxkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndoaXRlU3BhY2UiLCJibG9jayIsImFib3ZlIiwiaXNCbG9jayIsIl9yYW5nZSIsIkVESVRPUl9UT19VU0VSX1NFTEVDVElPTiIsInRvUmVzdG9yZSIsIkhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib25TZWxlY3Rpb25DaGFuZ2UiLCJ0YXJnZXRFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJ0YXJnZXRUYWdOYW1lIiwidGFnTmFtZSIsInN0b3BwZWREcmFnZ2luZyIsIkFycmF5IiwiZnJvbSIsInBsYWNlSG9sZGVyUmVzaXplSGFuZGxlciIsIl9wbGFjZWhvbGRlckVsJGdldEJvdSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlc3QiLCJfZXhjbHVkZWQyIiwibG9vc2UiLCJ1bnNldCIsImZyb21FbnRyaWVzIiwibWFwIiwibWFyayIsInJvbGUiLCJzcGVsbENoZWNrIiwiYXV0b0NvcnJlY3QiLCJhdXRvQ2FwaXRhbGl6ZSIsInppbmRleCIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIndvcmRXcmFwIiwibWluSGVpZ2h0Iiwib25CZWZvcmVJbnB1dCIsImlzRXZlbnRIYW5kbGVkIiwiaGFzU2VsZWN0YWJsZVRhcmdldCIsIl90ZXh0MiIsIm9uSW5wdXQiLCJvcCIsIm5hdGl2ZUV2ZW50Iiwib25CbHVyIiwicmVsYXRlZFRhcmdldCIsImlzRE9NRWxlbWVudCIsImlzRE9NTm9kZSIsInRvU2xhdGVOb2RlIiwib25DbGljayIsImhhc1BhdGgiLCJkZXRhaWwiLCJUUklQTEVfQ0xJQ0siLCJibG9ja1BhdGgiLCJfYmxvY2skIiwic3RhcnRWb2lkIiwidm9pZCIsImVuZFZvaWQiLCJfcmFuZ2UyIiwib25Db21wb3NpdGlvbkVuZCIsIl9hbmRyb2lkSW5wdXRNYW5hZ2VyUjMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJJU19GSVJFRk9YX0xFR0FDWSIsIklTX1dFQ0hBVEJST1dTRVIiLCJJU19VQ19NT0JJTEUiLCJwbGFjZWhvbGRlck1hcmtzIiwib25Db21wb3NpdGlvblVwZGF0ZSIsIm9uQ29tcG9zaXRpb25TdGFydCIsIl9hbmRyb2lkSW5wdXRNYW5hZ2VyUjQiLCJvbkNvcHkiLCJpc0RPTUV2ZW50VGFyZ2V0SW5wdXQiLCJzZXRGcmFnbWVudERhdGEiLCJjbGlwYm9hcmREYXRhIiwib25DdXQiLCJvbkRyYWdPdmVyIiwib25EcmFnU3RhcnQiLCJ2b2lkTWF0Y2giLCJ2b2lkcyIsIm9uRHJvcCIsImRyYWdnZWRSYW5nZSIsImZpbmRFdmVudFJhbmdlIiwib25EcmFnRW5kIiwib25Gb2N1cyIsIm9uS2V5RG93biIsIl9hbmRyb2lkSW5wdXRNYW5hZ2VyUjUiLCJpc1JUTCIsIkhvdGtleXMiLCJpc1JlZG8iLCJtYXliZUhpc3RvcnlFZGl0b3IiLCJyZWRvIiwiaXNVbmRvIiwiX21heWJlSGlzdG9yeUVkaXRvciIsInVuZG8iLCJpc01vdmVMaW5lQmFja3dhcmQiLCJtb3ZlIiwiaXNNb3ZlTGluZUZvcndhcmQiLCJpc0V4dGVuZExpbmVCYWNrd2FyZCIsImVkZ2UiLCJpc0V4dGVuZExpbmVGb3J3YXJkIiwiaXNNb3ZlQmFja3dhcmQiLCJjb2xsYXBzZSIsImlzTW92ZUZvcndhcmQiLCJpc01vdmVXb3JkQmFja3dhcmQiLCJpc01vdmVXb3JkRm9yd2FyZCIsImlzQm9sZCIsImlzSXRhbGljIiwiaXNUcmFuc3Bvc2VDaGFyYWN0ZXIiLCJpc1NvZnRCcmVhayIsImlzU3BsaXRCbG9jayIsImlzRGVsZXRlQmFja3dhcmQiLCJpc0RlbGV0ZUZvcndhcmQiLCJpc0RlbGV0ZUxpbmVCYWNrd2FyZCIsImlzRGVsZXRlTGluZUZvcndhcmQiLCJpc0RlbGV0ZVdvcmRCYWNrd2FyZCIsImlzRGVsZXRlV29yZEZvcndhcmQiLCJJU19DSFJPTUUiLCJjdXJyZW50Tm9kZSIsIm9uUGFzdGUiLCJpc1BsYWluVGV4dE9ubHlQYXN0ZSIsImRvbVJhbmdlIiwibGVhZkVsIiwiYmluZCIsImltcG9ydF9zY3JvbGxfaW50b192aWV3X2lmX25lZWRlZCIsInNjcm9sbE1vZGUiLCJoYW5kbGVyIiwic2hvdWxkVHJlYXRFdmVudEFzSGFuZGxlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiSFRNTElucHV0RWxlbWVudCIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJkZWZhdWx0UHJldmVudGVkIiwiRm9jdXNlZENvbnRleHQiLCJpc0Vycm9yIiwiZXJyb3IiLCJTbGF0ZVNlbGVjdG9yQ29udGV4dCIsInJlZkVxdWFsaXR5IiwiYSIsImIiLCJzZWxlY3RvciIsImVxdWFsaXR5Rm4iLCJnZXRTbGF0ZSIsImxhdGVzdFN1YnNjcmlwdGlvbkNhbGxiYWNrRXJyb3IiLCJsYXRlc3RTZWxlY3RvciIsImxhdGVzdFNlbGVjdGVkU3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwic2VsZWN0b3JSZXN1bHQiLCJlcnIiLCJtZXNzYWdlIiwic3RhY2siLCJjaGVja0ZvclVwZGF0ZXMiLCJuZXdTZWxlY3RlZFN0YXRlIiwidW5zdWJzY3JpYmUiLCJ1c2VTZWxlY3RvckNvbnRleHQiLCJldmVudExpc3RlbmVycyIsInNsYXRlUmVmIiwiZWRpdG9yMiIsImxpc3RlbmVyIiwic2VsZWN0b3JDb250ZXh0IiwiUkVBQ1RfTUFKT1JfVkVSU0lPTiIsInZlcnNpb24iLCJvblZhbHVlQ2hhbmdlIiwiaW5pdGlhbFZhbHVlIiwiX2V4Y2x1ZGVkIiwic2V0Q29udGV4dCIsImlzTm9kZUxpc3QiLCJTY3J1YmJlciIsInN0cmluZ2lmeSIsImlzRWRpdG9yIiwiYXNzaWduIiwidiIsImhhbmRsZVNlbGVjdG9yQ2hhbmdlIiwib25Db250ZXh0Q2hhbmdlIiwiX29wdGlvbnMkb3BlcmF0aW9uIiwib3BlcmF0aW9uIiwicHJldkNvbnRleHQiLCJFRElUT1JfVE9fT05fQ0hBTkdFIiwic2V0SXNGb2N1c2VkIiwiZm4iLCJpc1NlbGVjdGlvbkVxdWFsIiwid2l0aFJlYWN0MiIsImNsaXBib2FyZEZvcm1hdEtleSIsIndpdGhET00iLCJtYXliZUJhdGNoVXBkYXRlcyIsImltcG9ydF9yZWFjdF9kb20iLCJ1bnN0YWJsZV9iYXRjaGVkVXBk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