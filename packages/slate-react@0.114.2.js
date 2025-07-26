System.register(["react@18.3.1","compute-scroll-into-view@3.1.1","scroll-into-view-if-needed@3.1.0","is-plain-object@5.0.0","immer@10.1.1","slate@0.114.0","is-hotkey@0.2.0","slate-dom@0.114.0","@juggle/resize-observer@3.4.0","scheduler@0.23.2","react-dom@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["direction","1.0.4"],["lodash","4.17.21"],["react","18.3.1"],["compute-scroll-into-view","3.1.1"],["scroll-into-view-if-needed","3.1.0"],["is-plain-object","5.0.0"],["immer","10.1.1"],["slate","0.114.0"],["is-hotkey","0.2.0"],["slate-dom","0.114.0"],["@juggle/resize-observer","3.4.0"],["scheduler","0.23.2"],["react-dom","18.3.1"],["slate-react","0.114.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('compute-scroll-into-view@3.1.1', dep), dep => dependencies.set('scroll-into-view-if-needed@3.1.0', dep), dep => dependencies.set('is-plain-object@5.0.0', dep), dep => dependencies.set('immer@10.1.1', dep), dep => dependencies.set('slate@0.114.0', dep), dep => dependencies.set('is-hotkey@0.2.0', dep), dep => dependencies.set('slate-dom@0.114.0', dep), dep => dependencies.set('@juggle/resize-observer@3.4.0', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep)],
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

// .beyond/uimport/temp/slate-react.0.114.2.js
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
var import_slate_dom = require("slate-dom@0.114.0");
var import_slate_dom2 = require("slate-dom@0.114.0");
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9kaXJlY3Rpb24vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwiLi4vLmJleW9uZC91aW1wb3J0L3RlbXAvc2xhdGUtcmVhY3QuMC4xMTQuMi5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2Utc2xhdGUtc3RhdGljLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvcGx1Z2luL3JlYWN0LWVkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvYW5kcm9pZC1pbnB1dC1tYW5hZ2VyL2FuZHJvaWQtaW5wdXQtbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLWlzLW1vdW50ZWQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtaXNvbW9ycGhpYy1sYXlvdXQtZWZmZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtbXV0YXRpb24tb2JzZXJ2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL2FuZHJvaWQtaW5wdXQtbWFuYWdlci91c2UtYW5kcm9pZC1pbnB1dC1tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9jb21wb25lbnRzL3N0cmluZy50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2NvbXBvbmVudHMvbGVhZi50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2NvbXBvbmVudHMvdGV4dC50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2NvbXBvbmVudHMvZWxlbWVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL3VzZS1kZWNvcmF0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLXNlbGVjdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtY2hpbGRyZW4udHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtcmVhZC1vbmx5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2Utc2xhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2UtdHJhY2stdXNlci1pbnB1dC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvY29tcG9uZW50cy9yZXN0b3JlLWRvbS9yZXN0b3JlLWRvbS1tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9jb21wb25lbnRzL3Jlc3RvcmUtZG9tL3Jlc3RvcmUtZG9tLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvaG9va3MvdXNlLWNvbXBvc2luZy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvY29tcG9uZW50cy9lZGl0YWJsZS50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL3VzZS1mb2N1c2VkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2Utc2xhdGUtc2VsZWN0b3IudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy91dGlscy9lbnZpcm9ubWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvY29tcG9uZW50cy9zbGF0ZS50c3giLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtcmVhY3Qvc3JjL2hvb2tzL3VzZS1lZGl0b3IudHN4IiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLXJlYWN0L3NyYy9ob29rcy91c2Utc2xhdGUtc2VsZWN0aW9uLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1yZWFjdC9zcmMvcGx1Z2luL3dpdGgtcmVhY3QudHMiXSwibmFtZXMiOlsicmVxdWlyZV9kaXJlY3Rpb24iLCJfX2NvbW1vbkpTIiwibm9kZV9tb2R1bGVzL2RpcmVjdGlvbi9pbmRleC5qcyIsImV4cG9ydHMiLCJtb2R1bGUyIiwiZGlyZWN0aW9uIiwiUlRMIiwiTFRSIiwicnRsIiwiUmVnRXhwIiwibHRyIiwidmFsdWUiLCJTdHJpbmciLCJ0ZXN0IiwicmVxdWlyZV9pc09iamVjdCIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJpc09iamVjdCIsInR5cGUiLCJyZXF1aXJlX2ZyZWVHbG9iYWwiLCJub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIk9iamVjdCIsInJlcXVpcmVfcm9vdCIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJyZXF1aXJlX25vdyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwibm93IiwiRGF0ZSIsInJlcXVpcmVfdHJpbW1lZEVuZEluZGV4Iiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fdHJpbW1lZEVuZEluZGV4LmpzIiwicmVXaGl0ZXNwYWNlIiwidHJpbW1lZEVuZEluZGV4Iiwic3RyaW5nIiwiaW5kZXgiLCJsZW5ndGgiLCJjaGFyQXQiLCJyZXF1aXJlX2Jhc2VUcmltIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJyZVRyaW1TdGFydCIsImJhc2VUcmltIiwic2xpY2UiLCJyZXBsYWNlIiwicmVxdWlyZV9TeW1ib2wiLCJub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJTeW1ib2wyIiwiU3ltYm9sIiwicmVxdWlyZV9nZXRSYXdUYWciLCJub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJvYmplY3RQcm90byIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsImNhbGwiLCJ0YWciLCJ1bm1hc2tlZCIsImUiLCJyZXN1bHQiLCJyZXF1aXJlX29iamVjdFRvU3RyaW5nIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJvYmplY3RUb1N0cmluZyIsInJlcXVpcmVfYmFzZUdldFRhZyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsInJlcXVpcmVfaXNPYmplY3RMaWtlIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJpc09iamVjdExpa2UiLCJyZXF1aXJlX2lzU3ltYm9sIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsInN5bWJvbFRhZyIsImlzU3ltYm9sIiwicmVxdWlyZV90b051bWJlciIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJOQU4iLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsInBhcnNlSW50IiwidG9OdW1iZXIiLCJvdGhlciIsInZhbHVlT2YiLCJpc0JpbmFyeSIsInJlcXVpcmVfZGVib3VuY2UiLCJub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwiRlVOQ19FUlJPUl9URVhUIiwibmF0aXZlTWF4IiwiTWF0aCIsIm1heCIsIm5hdGl2ZU1pbiIsIm1pbiIsImRlYm91bmNlMiIsImZ1bmMiLCJ3YWl0Iiwib3B0aW9ucyIsImxhc3RBcmdzIiwibGFzdFRoaXMiLCJtYXhXYWl0IiwidGltZXJJZCIsImxhc3RDYWxsVGltZSIsImxhc3RJbnZva2VUaW1lIiwibGVhZGluZyIsIm1heGluZyIsInRyYWlsaW5nIiwiVHlwZUVycm9yIiwiaW52b2tlRnVuYyIsInRpbWUiLCJhcmdzIiwidGhpc0FyZyIsImFwcGx5IiwibGVhZGluZ0VkZ2UiLCJzZXRUaW1lb3V0IiwidGltZXJFeHBpcmVkIiwicmVtYWluaW5nV2FpdCIsInRpbWVTaW5jZUxhc3RDYWxsIiwidGltZVNpbmNlTGFzdEludm9rZSIsInRpbWVXYWl0aW5nIiwic2hvdWxkSW52b2tlIiwidHJhaWxpbmdFZGdlIiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwiZmx1c2giLCJkZWJvdW5jZWQiLCJpc0ludm9raW5nIiwiYXJndW1lbnRzIiwicmVxdWlyZV90aHJvdHRsZSIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvdGhyb3R0bGUuanMiLCJ0aHJvdHRsZTIiLCJzbGF0ZV9yZWFjdF8wXzExNF8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkRlZmF1bHRFbGVtZW50IiwiRGVmYXVsdExlYWYiLCJEZWZhdWx0UGxhY2Vob2xkZXIiLCJEZWZhdWx0VGV4dCIsIkVkaXRhYmxlIiwiTk9ERV9UT19JTkRFWCIsImltcG9ydF9zbGF0ZV9kb20yIiwiTk9ERV9UT19QQVJFTlQiLCJSZWFjdEVkaXRvciIsIlNsYXRlIiwidXNlQ29tcG9zaW5nIiwidXNlRWRpdG9yIiwidXNlRm9jdXNlZCIsInVzZVJlYWRPbmx5IiwidXNlU2VsZWN0ZWQiLCJ1c2VTbGF0ZSIsInVzZVNsYXRlU2VsZWN0aW9uIiwidXNlU2xhdGVTZWxlY3RvciIsInVzZVNsYXRlU3RhdGljIiwidXNlU2xhdGVXaXRoViIsIndpdGhSZWFjdCIsIm1vZHVsZSIsIl9fdG9Db21tb25KUyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlIiwiZXhjbHVkZWQiLCJ0YXJnZXQiLCJzb3VyY2VLZXlzIiwia2V5cyIsImtleSIsImkiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX3R5cGVvZiIsIm8iLCJpdGVyYXRvciIsIm8yIiwiY29uc3RydWN0b3IiLCJfdG9QcmltaXRpdmUiLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJfdG9Qcm9wZXJ0eUtleSIsImFyZyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiRWRpdG9yQ29udGV4dCIsImltcG9ydF9yZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJlZGl0b3IiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJpbXBvcnRfc2xhdGVfZG9tIiwiRE9NRWRpdG9yIiwiUkVTT0xWRV9ERUxBWSIsIkZMVVNIX0RFTEFZIiwiZGVidWciLCJkZWJ1ZzIiLCJpc0RhdGFUcmFuc2ZlciIsIm5hbWUiLCJjcmVhdGVBbmRyb2lkSW5wdXRNYW5hZ2VyIiwiX3JlZiIsInNjaGVkdWxlT25ET01TZWxlY3Rpb25DaGFuZ2UiLCJvbkRPTVNlbGVjdGlvbkNoYW5nZSIsImZsdXNoaW5nIiwiY29tcG9zaXRpb25FbmRUaW1lb3V0SWQiLCJmbHVzaFRpbWVvdXRJZCIsImFjdGlvblRpbWVvdXRJZCIsImlkQ291bnRlciIsImluc2VydFBvc2l0aW9uSGludCIsImFwcGx5UGVuZGluZ1NlbGVjdGlvbiIsInBlbmRpbmdTZWxlY3Rpb24iLCJFRElUT1JfVE9fUEVORElOR19TRUxFQ1RJT04iLCJnZXQiLCJkZWxldGUiLCJzZWxlY3Rpb24iLCJub3JtYWxpemVkIiwibm9ybWFsaXplUmFuZ2UiLCJpbXBvcnRfc2xhdGUiLCJSYW5nZSIsImVxdWFscyIsIlRyYW5zZm9ybXMiLCJzZWxlY3QiLCJwZXJmb3JtQWN0aW9uIiwiYWN0aW9uIiwiRURJVE9SX1RPX1BFTkRJTkdfQUNUSU9OIiwiYXQiLCJQb2ludCIsImlzUG9pbnQiLCJub3JtYWxpemVQb2ludCIsIl90YXJnZXRSYW5nZSIsIkVkaXRvciIsInJhbmdlIiwicnVuIiwiaGFzUGVuZGluZ0RpZmZzIiwiaGFzUGVuZGluZ0FjdGlvbiIsInNlbGVjdGlvblJlZiIsInJhbmdlUmVmIiwiYWZmaW5pdHkiLCJFRElUT1JfVE9fVVNFUl9NQVJLUyIsInNldCIsIm1hcmtzIiwiRURJVE9SX1RPX1BFTkRJTkdfRElGRlMiLCJzY2hlZHVsZVNlbGVjdGlvbkNoYW5nZSIsImRpZmYiLCJfRURJVE9SX1RPX1BFTkRJTkdfREkiLCJfRURJVE9SX1RPX1BFTkRJTkdfREkyIiwicGVuZGluZ01hcmtzIiwiRURJVE9SX1RPX1BFTkRJTkdfSU5TRVJUSU9OX01BUktTIiwidGFyZ2V0UmFuZ2UiLCJ0ZXh0IiwiaW5zZXJ0VGV4dCIsImRlbGV0ZUZyYWdtZW50IiwiZmlsdGVyIiwiX3JlZjIiLCJpZCIsInZlcmlmeURpZmZTdGF0ZSIsInVucmVmIiwidXNlck1hcmtzIiwib25DaGFuZ2UiLCJoYW5kbGVDb21wb3NpdGlvbkVuZCIsIl9ldmVudCIsIklTX0NPTVBPU0lORyIsImhhbmRsZUNvbXBvc2l0aW9uU3RhcnQiLCJ1cGRhdGVQbGFjZWhvbGRlclZpc2liaWxpdHkiLCJ1cGRhdGVQbGFjZWhvbGRlclZpc2liaWxpdHkyIiwiZm9yY2VIaWRlIiwicGxhY2Vob2xkZXJFbGVtZW50IiwiRURJVE9SX1RPX1BMQUNFSE9MREVSX0VMRU1FTlQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInN0b3JlRGlmZiIsInBhdGgiLCJfRURJVE9SX1RPX1BFTkRJTkdfREkzIiwicGVuZGluZ0RpZmZzIiwiTm9kZSIsImxlYWYiLCJpZHgiLCJmaW5kSW5kZXgiLCJjaGFuZ2UiLCJQYXRoIiwibm9ybWFsaXplU3RyaW5nRGlmZiIsInB1c2giLCJtZXJnZWQiLCJtZXJnZVN0cmluZ0RpZmZzIiwic3BsaWNlIiwiX29iamVjdFNwcmVhZCQ2Iiwic2NoZWR1bGVBY3Rpb24iLCJzY2hlZHVsZUFjdGlvbjIiLCJoYW5kbGVET01CZWZvcmVJbnB1dCIsImV2ZW50IiwiX3RhcmdldFJhbmdlMiIsIklTX05PREVfTUFQX0RJUlRZIiwiaW5wdXRUeXBlIiwidGFyZ2V0UmFuZ2UyIiwiZGF0YSIsImRhdGFUcmFuc2ZlciIsIm5hdGl2ZVRhcmdldFJhbmdlIiwiZ2V0VGFyZ2V0UmFuZ2VzIiwidG9TbGF0ZVJhbmdlIiwiZXhhY3RNYXRjaCIsInN1cHByZXNzVGhyb3ciLCJ3aW5kb3cyIiwiZ2V0V2luZG93IiwiZG9tU2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwiY2FuU3RvcmVEaWZmIiwic3RhcnRzV2l0aCIsImlzRXhwYW5kZWQiLCJfc3RhcnQiLCJfZW5kIiwiZWRnZXMiLCJfbGVhZiIsIm9mZnNldCIsIm5leHQiLCJtYXRjaCIsIlRleHQiLCJpc1RleHQiLCJhbmNob3IiLCJmb2N1cyIsImVuZHNXaXRoIiwic3RhcnQiLCJlbmQiLCJyZWxldmFudFBlbmRpbmdEaWZmcyIsImZpbmQiLCJkaWZmcyIsImFwcGx5U3RyaW5nRGlmZiIsInBvaW50IiwiaGFuZGxlVXNlclNlbGVjdCIsImlzQ29sbGFwc2VkIiwidGFyZ2V0Tm9kZSIsImRlbGV0ZUZvcndhcmQiLCJfbmF0aXZlVGFyZ2V0UmFuZ2UiLCJfYW5jaG9yIiwibmF0aXZlQ29sbGFwc2VkIiwiaXNET01TZWxlY3Rpb24iLCJjb2xsYXBzZWQiLCJkZWxldGVCYWNrd2FyZCIsInVuaXQiLCJpbnNlcnRTb2Z0QnJlYWsiLCJpbnNlcnRCcmVhayIsImluc2VydERhdGEiLCJfdGV4dCIsImluY2x1ZGVzIiwicGFydHMiLCJzcGxpdCIsImZvckVhY2giLCJsaW5lIiwiX3N0YXJ0MiIsIl9lbmQyIiwiX2RpZmYiLCJoaW50UG9zaXRpb24iLCJzZWFyY2giLCJkaWZmUG9zaXRpb24iLCJzY2hlZHVsZUZsdXNoIiwiX0VESVRPUl9UT19QRU5ESU5HX0RJNCIsImhhc1BlbmRpbmdDaGFuZ2VzIiwiaXNGbHVzaGluZyIsInBhdGhDaGFuZ2VkIiwicGFyZW50UGF0aENoYW5nZWQiLCJoYW5kbGVJbnB1dCIsImhhbmRsZUtleURvd24iLCJfIiwiaGFuZGxlRG9tTXV0YXRpb25zIiwibXV0YXRpb25zIiwic29tZSIsIm11dGF0aW9uIiwiaXNUcmFja2VkTXV0YXRpb24iLCJfRURJVE9SX1RPX0ZPUkNFX1JFTkQiLCJFRElUT1JfVE9fRk9SQ0VfUkVOREVSIiwidXNlSXNNb3VudGVkIiwiaXNNb3VudGVkUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QiLCJDQU5fVVNFX0RPTSIsInVzZUxheW91dEVmZmVjdCIsInVzZU11dGF0aW9uT2JzZXJ2ZXIiLCJub2RlIiwiY2FsbGJhY2siLCJtdXRhdGlvbk9ic2VydmVyIiwidXNlU3RhdGUiLCJNdXRhdGlvbk9ic2VydmVyIiwidGFrZVJlY29yZHMiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsIk1VVEFUSU9OX09CU0VSVkVSX0NPTkZJRyQxIiwic3VidHJlZSIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJ1c2VBbmRyb2lkSW5wdXRNYW5hZ2VyIiwiSVNfQU5EUk9JRCIsIl9leGNsdWRlZCQyIiwiaXNNb3VudGVkIiwiaW5wdXRNYW5hZ2VyIiwiX29iamVjdFNwcmVhZCQ1IiwiRURJVE9SX1RPX1NDSEVEVUxFX0ZMVVNIIiwiU3RyaW5nJDEiLCJwcm9wcyIsImlzTGFzdCIsInBhcmVudCIsImZpbmRQYXRoIiwicGFyZW50UGF0aCIsImlzTWFya1BsYWNlaG9sZGVyIiwiQm9vbGVhbiIsIk1BUktfUExBQ0VIT0xERVJfU1lNQk9MIiwiaXNWb2lkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJaZXJvV2lkdGhTdHJpbmciLCJjaGlsZHJlbiIsImlzSW5saW5lIiwiaXNMaW5lQnJlYWsiLCJUZXh0U3RyaW5nIiwiaXNUcmFpbGluZyIsInJlZiIsImdldFRleHRDb250ZW50IiwiY29uY2F0IiwiaW5pdGlhbFRleHQiLCJ0ZXh0V2l0aFRyYWlsaW5nIiwidGV4dENvbnRlbnQiLCJNZW1vaXplZFRleHQkMSIsIm1lbW8iLCJmb3J3YXJkUmVmIiwiYXR0cmlidXRlcyIsIl9vYmplY3RTcHJlYWQkNCIsIklTX0lPUyIsIlBMQUNFSE9MREVSX0RFTEFZIiwiZGlzY29ubmVjdFBsYWNlaG9sZGVyUmVzaXplT2JzZXJ2ZXIiLCJwbGFjZWhvbGRlclJlc2l6ZU9ic2VydmVyIiwicmVsZWFzZU9ic2VydmVyIiwiY2xlYXJUaW1lb3V0UmVmIiwidGltZW91dFJlZiIsIkxlYWYiLCJyZW5kZXJQbGFjZWhvbGRlciIsInJlbmRlckxlYWYiLCJwcm9wczIiLCJfb2JqZWN0U3ByZWFkJDMiLCJsZWFmUG9zaXRpb24iLCJwbGFjZWhvbGRlclJlZiIsInNob3dQbGFjZWhvbGRlciIsInNldFNob3dQbGFjZWhvbGRlciIsInNob3dQbGFjZWhvbGRlclRpbWVvdXRSZWYiLCJjYWxsYmFja1BsYWNlaG9sZGVyUmVmIiwidXNlQ2FsbGJhY2siLCJwbGFjZWhvbGRlckVsIiwiX2xlYWYkb25QbGFjZWhvbGRlclJlIiwib25QbGFjZWhvbGRlclJlc2l6ZSIsIlJlc2l6ZU9ic2VydmVyJDEiLCJ3aW5kb3ciLCJSZXNpemVPYnNlcnZlciIsImltcG9ydF9yZXNpemVfb2JzZXJ2ZXIiLCJfbGVhZiRvblBsYWNlaG9sZGVyUmUyIiwibGVhZklzUGxhY2Vob2xkZXIiLCJQTEFDRUhPTERFUl9TWU1CT0wiLCJwbGFjZWhvbGRlclByb3BzIiwicGxhY2Vob2xkZXIiLCJwb3NpdGlvbiIsInRvcCIsInBvaW50ZXJFdmVudHMiLCJ3aWR0aCIsIm1heFdpZHRoIiwib3BhY2l0eSIsInVzZXJTZWxlY3QiLCJ0ZXh0RGVjb3JhdGlvbiIsIldlYmtpdFVzZXJNb2RpZnkiLCJJU19XRUJLSVQiLCJjb250ZW50RWRpdGFibGUiLCJGcmFnbWVudCIsIk1lbW9pemVkTGVhZiIsInByZXYiLCJkZWNvcmF0aW9ucyIsInJlbmRlclRleHQiLCJfb2JqZWN0U3ByZWFkJDIiLCJkZWNvcmF0ZWRMZWF2ZXMiLCJmaW5kS2V5IiwiY2FsbGJhY2tSZWYiLCJzcGFuIiwiS0VZX1RPX0VMRU1FTlQiLCJFRElUT1JfVE9fS0VZX1RPX0VMRU1FTlQiLCJOT0RFX1RPX0VMRU1FTlQiLCJFTEVNRU5UX1RPX05PREUiLCJNZW1vaXplZFRleHQiLCJpc1RleHREZWNvcmF0aW9uc0VxdWFsIiwiRWxlbWVudCIsImVsZW1lbnQiLCJyZW5kZXJFbGVtZW50IiwicCIsIl9vYmplY3RTcHJlYWQkMSIsInJlYWRPbmx5IiwicmVmMiIsInVzZUNoaWxkcmVuIiwiaGFzSW5saW5lcyIsImRpciIsImltcG9ydF9kaXJlY3Rpb24iLCJUYWciLCJ0ZXh0cyIsImhlaWdodCIsImNvbG9yIiwib3V0bGluZSIsIk1lbW9pemVkRWxlbWVudCIsImlzRWxlbWVudERlY29yYXRpb25zRXF1YWwiLCJEZWNvcmF0ZUNvbnRleHQiLCJ1c2VEZWNvcmF0ZSIsIlNlbGVjdGVkQ29udGV4dCIsImRlY29yYXRlIiwiaXNMZWFmQmxvY2siLCJpc0VsZW1lbnQiLCJuIiwic2VsIiwiaW50ZXJzZWN0aW9uIiwiZHMiLCJkZWMiLCJkIiwiUHJvdmlkZXIiLCJSZWFkT25seUNvbnRleHQiLCJTbGF0ZUNvbnRleHQiLCJjb250ZXh0IiwidXNlVHJhY2tVc2VySW5wdXQiLCJyZWNlaXZlZFVzZXJJbnB1dCIsImFuaW1hdGlvbkZyYW1lSWRSZWYiLCJvblVzZXJJbnB1dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3JlYXRlUmVzdG9yZURvbU1hbmFnZXIiLCJidWZmZXJlZE11dGF0aW9ucyIsImNsZWFyIiwicmVnaXN0ZXJNdXRhdGlvbnMiLCJ0cmFja2VkTXV0YXRpb25zIiwicmVzdG9yZURPTSIsInJldmVyc2UiLCJyZW1vdmVkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImFkZGVkTm9kZXMiLCJyZW1vdmVDaGlsZCIsIk1VVEFUSU9OX09CU0VSVkVSX0NPTkZJRyIsImNoYXJhY3RlckRhdGFPbGRWYWx1ZSIsIlJlc3RvcmVET01Db21wb25lbnQiLCJDb21wb25lbnQiLCJfdGhpcyRtdXRhdGlvbk9ic2VydmUiLCJjb21wb25lbnREaWRNb3VudCIsIm1hbmFnZXIiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsIl90aGlzJG11dGF0aW9uT2JzZXJ2ZTIiLCJfdGhpcyRtdXRhdGlvbk9ic2VydmUzIiwiX3RoaXMkbWFuYWdlcjIiLCJwZW5kaW5nTXV0YXRpb25zIiwiX3RoaXMkbWFuYWdlciIsImNvbXBvbmVudERpZFVwZGF0ZSIsIl90aGlzJG1hbmFnZXIzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJfdGhpcyRtdXRhdGlvbk9ic2VydmU0IiwicmVuZGVyIiwiUmVzdG9yZURPTSIsIkNvbXBvc2luZ0NvbnRleHQiLCJDaGlsZHJlbiIsImZvcndhcmRlZFJlZiIsImRlZmF1bHRSZW5kZXJQbGFjZWhvbGRlciIsIl9vYmplY3RTcHJlYWQiLCJhdXRvRm9jdXMiLCJkZWZhdWx0RGVjb3JhdGUiLCJvbkRPTUJlZm9yZUlucHV0IiwicHJvcHNPbkRPTUJlZm9yZUlucHV0Iiwic2Nyb2xsU2VsZWN0aW9uSW50b1ZpZXciLCJkZWZhdWx0U2Nyb2xsU2VsZWN0aW9uSW50b1ZpZXciLCJ1c2VyU3R5bGUiLCJhcyIsIkNvbXBvbmVudDIiLCJkaXNhYmxlRGVmYXVsdFN0eWxlcyIsIl9leGNsdWRlZCQxIiwiaXNDb21wb3NpbmciLCJzZXRJc0NvbXBvc2luZyIsImRlZmVycmVkT3BlcmF0aW9ucyIsInBsYWNlaG9sZGVySGVpZ2h0Iiwic2V0UGxhY2Vob2xkZXJIZWlnaHQiLCJwcm9jZXNzaW5nIiwiZm9yY2VSZW5kZXIiLCJ1c2VSZWR1Y2VyIiwicyIsIklTX1JFQURfT05MWSIsInN0YXRlIiwidXNlTWVtbyIsImlzRHJhZ2dpbmdJbnRlcm5hbGx5IiwiaXNVcGRhdGluZ1NlbGVjdGlvbiIsImxhdGVzdEVsZW1lbnQiLCJoYXNNYXJrUGxhY2Vob2xkZXIiLCJhbmRyb2lkSW5wdXRNYW5hZ2VyUmVmIiwiaW1wb3J0X3Rocm90dGxlIiwiZWwiLCJ0b0RPTU5vZGUiLCJnZXRSb290Tm9kZSIsIlNoYWRvd1Jvb3QiLCJhY3RpdmUiLCJnZXRBY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsImRlc2VsZWN0IiwiYW5kcm9pZElucHV0TWFuYWdlciIsIl9yb290IiwiZmluZERvY3VtZW50T3JTaGFkb3dSb290IiwiYWN0aXZlRWxlbWVudCIsIl9lbCIsIklTX0ZPQ1VTRUQiLCJhbmNob3JOb2RlIiwiZm9jdXNOb2RlIiwiYW5jaG9yTm9kZVNlbGVjdGFibGUiLCJoYXNFZGl0YWJsZVRhcmdldCIsImlzVGFyZ2V0SW5zaWRlTm9uUmVhZG9ubHlWb2lkIiwiZm9jdXNOb2RlSW5FZGl0b3IiLCJoYXNUYXJnZXQiLCJpbXBvcnRfZGVib3VuY2UiLCJfYW5kcm9pZElucHV0TWFuYWdlclIiLCJfYW5kcm9pZElucHV0TWFuYWdlclIyIiwiZ2V0RGVmYXVsdFZpZXciLCJFRElUT1JfVE9fV0lORE9XIiwiRURJVE9SX1RPX0VMRU1FTlQiLCJpc0ZvY3VzZWQiLCJzZXREb21TZWxlY3Rpb24iLCJmb3JjZUNoYW5nZSIsImhhc0RvbVNlbGVjdGlvbiIsIklTX0ZJUkVGT1giLCJyYW5nZUNvdW50IiwiZmlyc3RSYW5nZSIsImdldFJhbmdlQXQiLCJsYXN0UmFuZ2UiLCJzdGFydENvbnRhaW5lciIsImVuZENvbnRhaW5lciIsImVkaXRvckVsZW1lbnQiLCJoYXNEb21TZWxlY3Rpb25JbkVkaXRvciIsImNvbnRhaW5zIiwic2xhdGVSYW5nZSIsIl9hbmNob3JOb2RlIiwicGFyZW50RWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsImhhc1JhbmdlIiwibmV3RG9tUmFuZ2UiLCJ0b0RPTVJhbmdlIiwiY29sbGFwc2VUb0VuZCIsImlzQmFja3dhcmQiLCJzZXRCYXNlQW5kRXh0ZW50IiwiZW5kT2Zmc2V0Iiwic3RhcnRPZmZzZXQiLCJyZW1vdmVBbGxSYW5nZXMiLCJlbnN1cmVTZWxlY3Rpb24iLCJ0aW1lb3V0SWQiLCJhbmltYXRpb25GcmFtZUlkIiwiZW5zdXJlRG9tU2VsZWN0aW9uIiwiaGFuZGxlTmF0aXZlSGlzdG9yeUV2ZW50cyIsInJhbmdlcyIsIm5ld1JhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImlzRE9NRXZlbnRIYW5kbGVkIiwiX0VESVRPUl9UT19VU0VSX1NFTEVDIiwiaXNDb21wb3NpdGlvbkNoYW5nZSIsIm5hdGl2ZSIsIl9ub2RlJHBhcmVudEVsZW1lbnQiLCJfd2luZG93JGdldENvbXB1dGVkU3QiLCJhbmNob3IyIiwidG9ET01Qb2ludCIsImNsb3Nlc3QiLCJfd2luZG93IiwiaGFzRE9NTm9kZSIsIl9sYXN0VGV4dCR0ZXh0Q29udGVudCIsImxhc3RUZXh0IiwiY3JlYXRlVHJlZVdhbGtlciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJsYXN0Q2hpbGQiLCJnZXRDb21wdXRlZFN0eWxlIiwid2hpdGVTcGFjZSIsImJsb2NrIiwiYWJvdmUiLCJpc0Jsb2NrIiwiX3JhbmdlIiwiRURJVE9SX1RPX1VTRVJfU0VMRUNUSU9OIiwidG9SZXN0b3JlIiwiSEFTX0JFRk9SRV9JTlBVVF9TVVBQT1JUIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblNlbGVjdGlvbkNoYW5nZSIsInRhcmdldEVsZW1lbnQiLCJIVE1MRWxlbWVudCIsInRhcmdldFRhZ05hbWUiLCJ0YWdOYW1lIiwic3RvcHBlZERyYWdnaW5nIiwiQXJyYXkiLCJmcm9tIiwicGxhY2VIb2xkZXJSZXNpemVIYW5kbGVyIiwiX3BsYWNlaG9sZGVyRWwkZ2V0Qm91IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVzdCIsIl9leGNsdWRlZDIiLCJsb29zZSIsInVuc2V0IiwiZnJvbUVudHJpZXMiLCJtYXAiLCJtYXJrIiwicm9sZSIsInNwZWxsQ2hlY2siLCJhdXRvQ29ycmVjdCIsImF1dG9DYXBpdGFsaXplIiwiemluZGV4Iiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwid29yZFdyYXAiLCJtaW5IZWlnaHQiLCJvbkJlZm9yZUlucHV0IiwiaXNFdmVudEhhbmRsZWQiLCJoYXNTZWxlY3RhYmxlVGFyZ2V0IiwiX3RleHQyIiwib25JbnB1dCIsIm9wIiwibmF0aXZlRXZlbnQiLCJvbkJsdXIiLCJyZWxhdGVkVGFyZ2V0IiwiaXNET01FbGVtZW50IiwiaXNET01Ob2RlIiwidG9TbGF0ZU5vZGUiLCJvbkNsaWNrIiwiaGFzUGF0aCIsImRldGFpbCIsIlRSSVBMRV9DTElDSyIsImJsb2NrUGF0aCIsIl9ibG9jayQiLCJzdGFydFZvaWQiLCJ2b2lkIiwiZW5kVm9pZCIsIl9yYW5nZTIiLCJvbkNvbXBvc2l0aW9uRW5kIiwiX2FuZHJvaWRJbnB1dE1hbmFnZXJSMyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIklTX0ZJUkVGT1hfTEVHQUNZIiwiSVNfV0VDSEFUQlJPV1NFUiIsIklTX1VDX01PQklMRSIsInBsYWNlaG9sZGVyTWFya3MiLCJvbkNvbXBvc2l0aW9uVXBkYXRlIiwib25Db21wb3NpdGlvblN0YXJ0IiwiX2FuZHJvaWRJbnB1dE1hbmFnZXJSNCIsIm9uQ29weSIsImlzRE9NRXZlbnRUYXJnZXRJbnB1dCIsInNldEZyYWdtZW50RGF0YSIsImNsaXBib2FyZERhdGEiLCJvbkN1dCIsIm9uRHJhZ092ZXIiLCJvbkRyYWdTdGFydCIsInZvaWRNYXRjaCIsInZvaWRzIiwib25Ecm9wIiwiZHJhZ2dlZFJhbmdlIiwiZmluZEV2ZW50UmFuZ2UiLCJvbkRyYWdFbmQiLCJvbkZvY3VzIiwib25LZXlEb3duIiwiX2FuZHJvaWRJbnB1dE1hbmFnZXJSNSIsImlzUlRMIiwiSG90a2V5cyIsImlzUmVkbyIsIm1heWJlSGlzdG9yeUVkaXRvciIsInJlZG8iLCJpc1VuZG8iLCJfbWF5YmVIaXN0b3J5RWRpdG9yIiwidW5kbyIsImlzTW92ZUxpbmVCYWNrd2FyZCIsIm1vdmUiLCJpc01vdmVMaW5lRm9yd2FyZCIsImlzRXh0ZW5kTGluZUJhY2t3YXJkIiwiZWRnZSIsImlzRXh0ZW5kTGluZUZvcndhcmQiLCJpc01vdmVCYWNrd2FyZCIsImNvbGxhcHNlIiwiaXNNb3ZlRm9yd2FyZCIsImlzTW92ZVdvcmRCYWNrd2FyZCIsImlzTW92ZVdvcmRGb3J3YXJkIiwiaXNCb2xkIiwiaXNJdGFsaWMiLCJpc1RyYW5zcG9zZUNoYXJhY3RlciIsImlzU29mdEJyZWFrIiwiaXNTcGxpdEJsb2NrIiwiaXNEZWxldGVCYWNrd2FyZCIsImlzRGVsZXRlRm9yd2FyZCIsImlzRGVsZXRlTGluZUJhY2t3YXJkIiwiaXNEZWxldGVMaW5lRm9yd2FyZCIsImlzRGVsZXRlV29yZEJhY2t3YXJkIiwiaXNEZWxldGVXb3JkRm9yd2FyZCIsIklTX0NIUk9NRSIsImN1cnJlbnROb2RlIiwib25QYXN0ZSIsImlzUGxhaW5UZXh0T25seVBhc3RlIiwiZG9tUmFuZ2UiLCJsZWFmRWwiLCJiaW5kIiwiaW1wb3J0X3Njcm9sbF9pbnRvX3ZpZXdfaWZfbmVlZGVkIiwic2Nyb2xsTW9kZSIsImhhbmRsZXIiLCJzaG91bGRUcmVhdEV2ZW50QXNIYW5kbGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJIVE1MSW5wdXRFbGVtZW50IiwiSFRNTFRleHRBcmVhRWxlbWVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJGb2N1c2VkQ29udGV4dCIsImlzRXJyb3IiLCJlcnJvciIsIlNsYXRlU2VsZWN0b3JDb250ZXh0IiwicmVmRXF1YWxpdHkiLCJhIiwiYiIsInNlbGVjdG9yIiwiZXF1YWxpdHlGbiIsImdldFNsYXRlIiwibGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvciIsImxhdGVzdFNlbGVjdG9yIiwibGF0ZXN0U2VsZWN0ZWRTdGF0ZSIsInNlbGVjdGVkU3RhdGUiLCJzZWxlY3RvclJlc3VsdCIsImVyciIsIm1lc3NhZ2UiLCJzdGFjayIsImNoZWNrRm9yVXBkYXRlcyIsIm5ld1NlbGVjdGVkU3RhdGUiLCJ1bnN1YnNjcmliZSIsInVzZVNlbGVjdG9yQ29udGV4dCIsImV2ZW50TGlzdGVuZXJzIiwic2xhdGVSZWYiLCJlZGl0b3IyIiwibGlzdGVuZXIiLCJzZWxlY3RvckNvbnRleHQiLCJSRUFDVF9NQUpPUl9WRVJTSU9OIiwidmVyc2lvbiIsIm9uVmFsdWVDaGFuZ2UiLCJpbml0aWFsVmFsdWUiLCJfZXhjbHVkZWQiLCJzZXRDb250ZXh0IiwiaXNOb2RlTGlzdCIsIlNjcnViYmVyIiwic3RyaW5naWZ5IiwiaXNFZGl0b3IiLCJhc3NpZ24iLCJ2IiwiaGFuZGxlU2VsZWN0b3JDaGFuZ2UiLCJvbkNvbnRleHRDaGFuZ2UiLCJfb3B0aW9ucyRvcGVyYXRpb24iLCJvcGVyYXRpb24iLCJwcmV2Q29udGV4dCIsIkVESVRPUl9UT19PTl9DSEFOR0UiLCJzZXRJc0ZvY3VzZWQiLCJmbiIsImlzU2VsZWN0aW9uRXF1YWwiLCJ3aXRoUmVhY3QyIiwiY2xpcGJvYXJkRm9ybWF0S2V5Iiwid2l0aERPTSIsIm1heWJlQmF0Y2hVcGRhdGVzIiwiaW1wb3J0X3JlYWN0X2RvbSIsInVuc3RhYmxlX2JhdGNo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