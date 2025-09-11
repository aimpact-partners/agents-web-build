System.register(["is-plain-object@5.0.0","immer@10.1.3","slate@0.114.0","is-hotkey@0.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["is-plain-object","5.0.0"],["immer","10.1.3"],["slate","0.114.0"],["is-hotkey","0.2.0"],["slate-dom","0.118.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('is-plain-object@5.0.0', dep), dep => dependencies.set('immer@10.1.3', dep), dep => dependencies.set('slate@0.114.0', dep), dep => dependencies.set('is-hotkey@0.2.0', dep)],
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

// .beyond/uimport/slate-dom.0.118.1.js
var slate_dom_0_118_1_exports = {};
__export(slate_dom_0_118_1_exports, {
  CAN_USE_DOM: () => CAN_USE_DOM,
  DOMEditor: () => DOMEditor,
  DOMElement: () => DOMElement,
  DOMNode: () => DOMNode,
  DOMRange: () => DOMRange,
  DOMSelection: () => DOMSelection,
  DOMStaticRange: () => DOMStaticRange,
  DOMText: () => DOMText,
  EDITOR_TO_ELEMENT: () => EDITOR_TO_ELEMENT,
  EDITOR_TO_FORCE_RENDER: () => EDITOR_TO_FORCE_RENDER,
  EDITOR_TO_KEY_TO_ELEMENT: () => EDITOR_TO_KEY_TO_ELEMENT,
  EDITOR_TO_ON_CHANGE: () => EDITOR_TO_ON_CHANGE,
  EDITOR_TO_PENDING_ACTION: () => EDITOR_TO_PENDING_ACTION,
  EDITOR_TO_PENDING_DIFFS: () => EDITOR_TO_PENDING_DIFFS,
  EDITOR_TO_PENDING_INSERTION_MARKS: () => EDITOR_TO_PENDING_INSERTION_MARKS,
  EDITOR_TO_PENDING_SELECTION: () => EDITOR_TO_PENDING_SELECTION,
  EDITOR_TO_PLACEHOLDER_ELEMENT: () => EDITOR_TO_PLACEHOLDER_ELEMENT,
  EDITOR_TO_SCHEDULE_FLUSH: () => EDITOR_TO_SCHEDULE_FLUSH,
  EDITOR_TO_USER_MARKS: () => EDITOR_TO_USER_MARKS,
  EDITOR_TO_USER_SELECTION: () => EDITOR_TO_USER_SELECTION,
  EDITOR_TO_WINDOW: () => EDITOR_TO_WINDOW,
  ELEMENT_TO_NODE: () => ELEMENT_TO_NODE,
  HAS_BEFORE_INPUT_SUPPORT: () => HAS_BEFORE_INPUT_SUPPORT,
  Hotkeys: () => hotkeys,
  IS_ANDROID: () => IS_ANDROID,
  IS_CHROME: () => IS_CHROME,
  IS_COMPOSING: () => IS_COMPOSING,
  IS_FIREFOX: () => IS_FIREFOX,
  IS_FIREFOX_LEGACY: () => IS_FIREFOX_LEGACY,
  IS_FOCUSED: () => IS_FOCUSED,
  IS_IOS: () => IS_IOS,
  IS_NODE_MAP_DIRTY: () => IS_NODE_MAP_DIRTY,
  IS_READ_ONLY: () => IS_READ_ONLY,
  IS_UC_MOBILE: () => IS_UC_MOBILE,
  IS_WEBKIT: () => IS_WEBKIT,
  IS_WECHATBROWSER: () => IS_WECHATBROWSER,
  Key: () => Key,
  MARK_PLACEHOLDER_SYMBOL: () => MARK_PLACEHOLDER_SYMBOL,
  NODE_TO_ELEMENT: () => NODE_TO_ELEMENT,
  NODE_TO_INDEX: () => NODE_TO_INDEX,
  NODE_TO_KEY: () => NODE_TO_KEY,
  NODE_TO_PARENT: () => NODE_TO_PARENT,
  PLACEHOLDER_SYMBOL: () => PLACEHOLDER_SYMBOL,
  TRIPLE_CLICK: () => TRIPLE_CLICK,
  applyStringDiff: () => applyStringDiff,
  getActiveElement: () => getActiveElement,
  getDefaultView: () => getDefaultView,
  getSelection: () => getSelection,
  hasShadowRoot: () => hasShadowRoot,
  isAfter: () => isAfter,
  isBefore: () => isBefore,
  isDOMElement: () => isDOMElement,
  isDOMNode: () => isDOMNode,
  isDOMSelection: () => isDOMSelection,
  isElementDecorationsEqual: () => isElementDecorationsEqual,
  isPlainTextOnlyPaste: () => isPlainTextOnlyPaste,
  isTextDecorationsEqual: () => isTextDecorationsEqual,
  isTrackedMutation: () => isTrackedMutation,
  mergeStringDiffs: () => mergeStringDiffs,
  normalizeDOMPoint: () => normalizeDOMPoint,
  normalizePoint: () => normalizePoint,
  normalizeRange: () => normalizeRange,
  normalizeStringDiff: () => normalizeStringDiff,
  splitDecorationsByChild: () => splitDecorationsByChild,
  targetRange: () => targetRange,
  verifyDiffState: () => verifyDiffState,
  withDOM: () => withDOM
});
module.exports = __toCommonJS(slate_dom_0_118_1_exports);

// node_modules/slate-dom/dist/index.es.js
var import_slate = require("slate@0.114.0");
var import_is_hotkey = require("is-hotkey@0.2.0");
var DOMNode = globalThis.Node;
var DOMElement = globalThis.Element;
var DOMText = globalThis.Text;
var DOMRange = globalThis.Range;
var DOMSelection = globalThis.Selection;
var DOMStaticRange = globalThis.StaticRange;
var getDefaultView = value => {
  return value && value.ownerDocument && value.ownerDocument.defaultView || null;
};
var isDOMComment = value => {
  return isDOMNode(value) && value.nodeType === 8;
};
var isDOMElement = value => {
  return isDOMNode(value) && value.nodeType === 1;
};
var isDOMNode = value => {
  var window2 = getDefaultView(value);
  return !!window2 && value instanceof window2.Node;
};
var isDOMSelection = value => {
  var window2 = value && value.anchorNode && getDefaultView(value.anchorNode);
  return !!window2 && value instanceof window2.Selection;
};
var isDOMText = value => {
  return isDOMNode(value) && value.nodeType === 3;
};
var isPlainTextOnlyPaste = event => {
  return event.clipboardData && event.clipboardData.getData("text/plain") !== "" && event.clipboardData.types.length === 1;
};
var normalizeDOMPoint = domPoint => {
  var [node, offset] = domPoint;
  if (isDOMElement(node) && node.childNodes.length) {
    var isLast = offset === node.childNodes.length;
    var index = isLast ? offset - 1 : offset;
    [node, index] = getEditableChildAndIndex(node, index, isLast ? "backward" : "forward");
    isLast = index < offset;
    while (isDOMElement(node) && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, isLast ? "backward" : "forward");
    }
    offset = isLast && node.textContent != null ? node.textContent.length : 0;
  }
  return [node, offset];
};
var hasShadowRoot = node => {
  var parent = node && node.parentNode;
  while (parent) {
    if (parent.toString() === "[object ShadowRoot]") {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
};
var getEditableChildAndIndex = (parent, index, direction) => {
  var {
    childNodes
  } = parent;
  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false;
  while (isDOMComment(child) || isDOMElement(child) && child.childNodes.length === 0 || isDOMElement(child) && child.getAttribute("contenteditable") === "false") {
    if (triedForward && triedBackward) {
      break;
    }
    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = "backward";
      continue;
    }
    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = "forward";
      continue;
    }
    child = childNodes[i];
    index = i;
    i += direction === "forward" ? 1 : -1;
  }
  return [child, index];
};
var getEditableChild = (parent, index, direction) => {
  var [child] = getEditableChildAndIndex(parent, index, direction);
  return child;
};
var getPlainText = domNode => {
  var text = "";
  if (isDOMText(domNode) && domNode.nodeValue) {
    return domNode.nodeValue;
  }
  if (isDOMElement(domNode)) {
    for (var childNode of Array.from(domNode.childNodes)) {
      text += getPlainText(childNode);
    }
    var display = getComputedStyle(domNode).getPropertyValue("display");
    if (display === "block" || display === "list" || domNode.tagName === "BR") {
      text += "\n";
    }
  }
  return text;
};
var catchSlateFragment = /data-slate-fragment="(.+?)"/m;
var getSlateFragmentAttribute = dataTransfer => {
  var htmlData = dataTransfer.getData("text/html");
  var [, fragment] = htmlData.match(catchSlateFragment) || [];
  return fragment;
};
var getSelection = root => {
  if (root.getSelection != null) {
    return root.getSelection();
  }
  return document.getSelection();
};
var isTrackedMutation = (editor, mutation, batch) => {
  var {
    target
  } = mutation;
  if (isDOMElement(target) && target.matches('[contentEditable="false"]')) {
    return false;
  }
  var {
    document: document2
  } = DOMEditor.getWindow(editor);
  if (document2.contains(target)) {
    return DOMEditor.hasDOMNode(editor, target, {
      editable: true
    });
  }
  var parentMutation = batch.find(_ref => {
    var {
      addedNodes,
      removedNodes
    } = _ref;
    for (var node of addedNodes) {
      if (node === target || node.contains(target)) {
        return true;
      }
    }
    for (var _node of removedNodes) {
      if (_node === target || _node.contains(target)) {
        return true;
      }
    }
  });
  if (!parentMutation || parentMutation === mutation) {
    return false;
  }
  return isTrackedMutation(editor, parentMutation, batch);
};
var getActiveElement = () => {
  var activeElement = document.activeElement;
  while ((_activeElement = activeElement) !== null && _activeElement !== void 0 && _activeElement.shadowRoot && (_activeElement$shadow = activeElement.shadowRoot) !== null && _activeElement$shadow !== void 0 && _activeElement$shadow.activeElement) {
    var _activeElement, _activeElement$shadow, _activeElement2;
    activeElement = (_activeElement2 = activeElement) === null || _activeElement2 === void 0 || (_activeElement2 = _activeElement2.shadowRoot) === null || _activeElement2 === void 0 ? void 0 : _activeElement2.activeElement;
  }
  return activeElement;
};
var isBefore = (node, otherNode) => Boolean(node.compareDocumentPosition(otherNode) & DOMNode.DOCUMENT_POSITION_PRECEDING);
var isAfter = (node, otherNode) => Boolean(node.compareDocumentPosition(otherNode) & DOMNode.DOCUMENT_POSITION_FOLLOWING);
var _navigator$userAgent$, _navigator$userAgent$2;
var IS_IOS = typeof navigator !== "undefined" && typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_APPLE = typeof navigator !== "undefined" && /Mac OS X/.test(navigator.userAgent);
var IS_ANDROID = typeof navigator !== "undefined" && /Android/.test(navigator.userAgent);
var IS_FIREFOX = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var IS_WEBKIT = typeof navigator !== "undefined" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent);
var IS_EDGE_LEGACY = typeof navigator !== "undefined" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
var IS_CHROME = typeof navigator !== "undefined" && /Chrome/i.test(navigator.userAgent);
var IS_CHROME_LEGACY = typeof navigator !== "undefined" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
var IS_ANDROID_CHROME_LEGACY = IS_ANDROID && typeof navigator !== "undefined" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent);
var IS_FIREFOX_LEGACY = typeof navigator !== "undefined" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
var IS_UC_MOBILE = typeof navigator !== "undefined" && /.*UCBrowser/.test(navigator.userAgent);
var IS_WECHATBROWSER = typeof navigator !== "undefined" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent) && (!IS_CHROME || IS_CHROME_LEGACY);
var CAN_USE_DOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((_navigator$userAgent$ = navigator.userAgent.match(/Version\/(\d+)/)) !== null && _navigator$userAgent$ !== void 0 && _navigator$userAgent$[1] ? parseInt((_navigator$userAgent$2 = navigator.userAgent.match(/Version\/(\d+)/)) === null || _navigator$userAgent$2 === void 0 ? void 0 : _navigator$userAgent$2[1], 10) < 17 : false);
var HAS_BEFORE_INPUT_SUPPORT = (!IS_CHROME_LEGACY || !IS_ANDROID_CHROME_LEGACY) && !IS_EDGE_LEGACY && typeof globalThis !== "undefined" && globalThis.InputEvent && typeof globalThis.InputEvent.prototype.getTargetRanges === "function";
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
var n = 0;
var Key = class {
  constructor() {
    _defineProperty(this, "id", void 0);
    this.id = "".concat(n++);
  }
};
var IS_NODE_MAP_DIRTY = /* @__PURE__ */new WeakMap();
var NODE_TO_INDEX = /* @__PURE__ */new WeakMap();
var NODE_TO_PARENT = /* @__PURE__ */new WeakMap();
var EDITOR_TO_WINDOW = /* @__PURE__ */new WeakMap();
var EDITOR_TO_ELEMENT = /* @__PURE__ */new WeakMap();
var EDITOR_TO_PLACEHOLDER_ELEMENT = /* @__PURE__ */new WeakMap();
var ELEMENT_TO_NODE = /* @__PURE__ */new WeakMap();
var NODE_TO_ELEMENT = /* @__PURE__ */new WeakMap();
var NODE_TO_KEY = /* @__PURE__ */new WeakMap();
var EDITOR_TO_KEY_TO_ELEMENT = /* @__PURE__ */new WeakMap();
var IS_READ_ONLY = /* @__PURE__ */new WeakMap();
var IS_FOCUSED = /* @__PURE__ */new WeakMap();
var IS_COMPOSING = /* @__PURE__ */new WeakMap();
var EDITOR_TO_USER_SELECTION = /* @__PURE__ */new WeakMap();
var EDITOR_TO_ON_CHANGE = /* @__PURE__ */new WeakMap();
var EDITOR_TO_SCHEDULE_FLUSH = /* @__PURE__ */new WeakMap();
var EDITOR_TO_PENDING_INSERTION_MARKS = /* @__PURE__ */new WeakMap();
var EDITOR_TO_USER_MARKS = /* @__PURE__ */new WeakMap();
var EDITOR_TO_PENDING_DIFFS = /* @__PURE__ */new WeakMap();
var EDITOR_TO_PENDING_ACTION = /* @__PURE__ */new WeakMap();
var EDITOR_TO_PENDING_SELECTION = /* @__PURE__ */new WeakMap();
var EDITOR_TO_FORCE_RENDER = /* @__PURE__ */new WeakMap();
var PLACEHOLDER_SYMBOL = Symbol("placeholder");
var MARK_PLACEHOLDER_SYMBOL = Symbol("mark-placeholder");
var DOMEditor = {
  androidPendingDiffs: editor => EDITOR_TO_PENDING_DIFFS.get(editor),
  androidScheduleFlush: editor => {
    var _EDITOR_TO_SCHEDULE_F;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(editor)) === null || _EDITOR_TO_SCHEDULE_F === void 0 || _EDITOR_TO_SCHEDULE_F();
  },
  blur: editor => {
    var el = DOMEditor.toDOMNode(editor, editor);
    var root = DOMEditor.findDocumentOrShadowRoot(editor);
    IS_FOCUSED.set(editor, false);
    if (root.activeElement === el) {
      el.blur();
    }
  },
  deselect: editor => {
    var {
      selection
    } = editor;
    var root = DOMEditor.findDocumentOrShadowRoot(editor);
    var domSelection = getSelection(root);
    if (domSelection && domSelection.rangeCount > 0) {
      domSelection.removeAllRanges();
    }
    if (selection) {
      import_slate.Transforms.deselect(editor);
    }
  },
  findDocumentOrShadowRoot: editor => {
    var el = DOMEditor.toDOMNode(editor, editor);
    var root = el.getRootNode();
    if (root instanceof Document || root instanceof ShadowRoot) {
      return root;
    }
    return el.ownerDocument;
  },
  findEventRange: (editor, event) => {
    if ("nativeEvent" in event) {
      event = event.nativeEvent;
    }
    var {
      clientX: x,
      clientY: y,
      target
    } = event;
    if (x == null || y == null) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var node = DOMEditor.toSlateNode(editor, event.target);
    var path = DOMEditor.findPath(editor, node);
    if (import_slate.Element.isElement(node) && import_slate.Editor.isVoid(editor, node)) {
      var rect = target.getBoundingClientRect();
      var isPrev = editor.isInline(node) ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;
      var edge = import_slate.Editor.point(editor, path, {
        edge: isPrev ? "start" : "end"
      });
      var point = isPrev ? import_slate.Editor.before(editor, edge) : import_slate.Editor.after(editor, edge);
      if (point) {
        var _range = import_slate.Editor.range(editor, point);
        return _range;
      }
    }
    var domRange;
    var {
      document: document2
    } = DOMEditor.getWindow(editor);
    if (document2.caretRangeFromPoint) {
      domRange = document2.caretRangeFromPoint(x, y);
    } else {
      var position = document2.caretPositionFromPoint(x, y);
      if (position) {
        domRange = document2.createRange();
        domRange.setStart(position.offsetNode, position.offset);
        domRange.setEnd(position.offsetNode, position.offset);
      }
    }
    if (!domRange) {
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(event));
    }
    var range = DOMEditor.toSlateRange(editor, domRange, {
      exactMatch: false,
      suppressThrow: false
    });
    return range;
  },
  findKey: (editor, node) => {
    var key = NODE_TO_KEY.get(node);
    if (!key) {
      key = new Key();
      NODE_TO_KEY.set(node, key);
    }
    return key;
  },
  findPath: (editor, node) => {
    var path = [];
    var child = node;
    while (true) {
      var parent = NODE_TO_PARENT.get(child);
      if (parent == null) {
        if (import_slate.Editor.isEditor(child)) {
          return path;
        } else {
          break;
        }
      }
      var i = NODE_TO_INDEX.get(child);
      if (i == null) {
        break;
      }
      path.unshift(i);
      child = parent;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(import_slate.Scrubber.stringify(node)));
  },
  focus: function focus(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (IS_FOCUSED.get(editor)) {
      return;
    }
    if (!EDITOR_TO_ELEMENT.get(editor)) {
      return;
    }
    if (options.retries <= 0) {
      throw new Error("Could not set focus, editor seems stuck with pending operations");
    }
    if (editor.operations.length > 0) {
      setTimeout(() => {
        DOMEditor.focus(editor, {
          retries: options.retries - 1
        });
      }, 10);
      return;
    }
    var el = DOMEditor.toDOMNode(editor, editor);
    var root = DOMEditor.findDocumentOrShadowRoot(editor);
    if (root.activeElement !== el) {
      if (editor.selection && root instanceof Document) {
        var domSelection = getSelection(root);
        var domRange = DOMEditor.toDOMRange(editor, editor.selection);
        domSelection === null || domSelection === void 0 || domSelection.removeAllRanges();
        domSelection === null || domSelection === void 0 || domSelection.addRange(domRange);
      }
      if (!editor.selection) {
        import_slate.Transforms.select(editor, import_slate.Editor.start(editor, []));
      }
      IS_FOCUSED.set(editor, true);
      el.focus({
        preventScroll: true
      });
    }
  },
  getWindow: editor => {
    var window2 = EDITOR_TO_WINDOW.get(editor);
    if (!window2) {
      throw new Error("Unable to find a host window element for this editor");
    }
    return window2;
  },
  hasDOMNode: function hasDOMNode(editor, target) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      editable = false
    } = options;
    var editorEl = DOMEditor.toDOMNode(editor, editor);
    var targetEl;
    try {
      targetEl = isDOMElement(target) ? target : target.parentElement;
    } catch (err) {
      if (err instanceof Error && !err.message.includes('Permission denied to access property "nodeType"')) {
        throw err;
      }
    }
    if (!targetEl) {
      return false;
    }
    return targetEl.closest("[data-slate-editor]") === editorEl && (!editable || targetEl.isContentEditable ? true : typeof targetEl.isContentEditable === "boolean" && targetEl.closest('[contenteditable="false"]') === editorEl || !!targetEl.getAttribute("data-slate-zero-width"));
  },
  hasEditableTarget: (editor, target) => isDOMNode(target) && DOMEditor.hasDOMNode(editor, target, {
    editable: true
  }),
  hasRange: (editor, range) => {
    var {
      anchor,
      focus: focus2
    } = range;
    return import_slate.Editor.hasPath(editor, anchor.path) && import_slate.Editor.hasPath(editor, focus2.path);
  },
  hasSelectableTarget: (editor, target) => DOMEditor.hasEditableTarget(editor, target) || DOMEditor.isTargetInsideNonReadonlyVoid(editor, target),
  hasTarget: (editor, target) => isDOMNode(target) && DOMEditor.hasDOMNode(editor, target),
  insertData: (editor, data) => {
    editor.insertData(data);
  },
  insertFragmentData: (editor, data) => editor.insertFragmentData(data),
  insertTextData: (editor, data) => editor.insertTextData(data),
  isComposing: editor => {
    return !!IS_COMPOSING.get(editor);
  },
  isFocused: editor => !!IS_FOCUSED.get(editor),
  isReadOnly: editor => !!IS_READ_ONLY.get(editor),
  isTargetInsideNonReadonlyVoid: (editor, target) => {
    if (IS_READ_ONLY.get(editor)) return false;
    var slateNode = DOMEditor.hasTarget(editor, target) && DOMEditor.toSlateNode(editor, target);
    return import_slate.Element.isElement(slateNode) && import_slate.Editor.isVoid(editor, slateNode);
  },
  setFragmentData: (editor, data, originEvent) => editor.setFragmentData(data, originEvent),
  toDOMNode: (editor, node) => {
    var KEY_TO_ELEMENT = EDITOR_TO_KEY_TO_ELEMENT.get(editor);
    var domNode = import_slate.Editor.isEditor(node) ? EDITOR_TO_ELEMENT.get(editor) : KEY_TO_ELEMENT === null || KEY_TO_ELEMENT === void 0 ? void 0 : KEY_TO_ELEMENT.get(DOMEditor.findKey(editor, node));
    if (!domNode) {
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(import_slate.Scrubber.stringify(node)));
    }
    return domNode;
  },
  toDOMPoint: (editor, point) => {
    var [node] = import_slate.Editor.node(editor, point.path);
    var el = DOMEditor.toDOMNode(editor, node);
    var domPoint;
    if (import_slate.Editor.void(editor, {
      at: point
    })) {
      point = {
        path: point.path,
        offset: 0
      };
    }
    var selector = "[data-slate-string], [data-slate-zero-width]";
    var texts = Array.from(el.querySelectorAll(selector));
    var start = 0;
    for (var i = 0; i < texts.length; i++) {
      var text = texts[i];
      var domNode = text.childNodes[0];
      if (domNode == null || domNode.textContent == null) {
        continue;
      }
      var {
        length
      } = domNode.textContent;
      var attr = text.getAttribute("data-slate-length");
      var trueLength = attr == null ? length : parseInt(attr, 10);
      var end = start + trueLength;
      var nextText = texts[i + 1];
      if (point.offset === end && nextText !== null && nextText !== void 0 && nextText.hasAttribute("data-slate-mark-placeholder")) {
        var _nextText$textContent;
        var domText = nextText.childNodes[0];
        domPoint = [domText instanceof DOMText ? domText : nextText, (_nextText$textContent = nextText.textContent) !== null && _nextText$textContent !== void 0 && _nextText$textContent.startsWith("\uFEFF") ? 1 : 0];
        break;
      }
      if (point.offset <= end) {
        var offset = Math.min(length, Math.max(0, point.offset - start));
        domPoint = [domNode, offset];
        break;
      }
      start = end;
    }
    if (!domPoint) {
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(import_slate.Scrubber.stringify(point)));
    }
    return domPoint;
  },
  toDOMRange: (editor, range) => {
    var {
      anchor,
      focus: focus2
    } = range;
    var isBackward = import_slate.Range.isBackward(range);
    var domAnchor = DOMEditor.toDOMPoint(editor, anchor);
    var domFocus = import_slate.Range.isCollapsed(range) ? domAnchor : DOMEditor.toDOMPoint(editor, focus2);
    var window2 = DOMEditor.getWindow(editor);
    var domRange = window2.document.createRange();
    var [startNode, startOffset] = isBackward ? domFocus : domAnchor;
    var [endNode, endOffset] = isBackward ? domAnchor : domFocus;
    var startEl = isDOMElement(startNode) ? startNode : startNode.parentElement;
    var isStartAtZeroWidth = !!startEl.getAttribute("data-slate-zero-width");
    var endEl = isDOMElement(endNode) ? endNode : endNode.parentElement;
    var isEndAtZeroWidth = !!endEl.getAttribute("data-slate-zero-width");
    domRange.setStart(startNode, isStartAtZeroWidth ? 1 : startOffset);
    domRange.setEnd(endNode, isEndAtZeroWidth ? 1 : endOffset);
    return domRange;
  },
  toSlateNode: (editor, domNode) => {
    var domEl = isDOMElement(domNode) ? domNode : domNode.parentElement;
    if (domEl && !domEl.hasAttribute("data-slate-node")) {
      domEl = domEl.closest("[data-slate-node]");
    }
    var node = domEl ? ELEMENT_TO_NODE.get(domEl) : null;
    if (!node) {
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(domEl));
    }
    return node;
  },
  toSlatePoint: (editor, domPoint, options) => {
    var {
      exactMatch,
      suppressThrow,
      searchDirection
    } = options;
    var [nearestNode, nearestOffset] = exactMatch ? domPoint : normalizeDOMPoint(domPoint);
    var parentNode = nearestNode.parentNode;
    var textNode = null;
    var offset = 0;
    if (parentNode) {
      var _domNode$textContent, _domNode$textContent2;
      var editorEl = DOMEditor.toDOMNode(editor, editor);
      var potentialVoidNode = parentNode.closest('[data-slate-void="true"]');
      var voidNode = potentialVoidNode && editorEl.contains(potentialVoidNode) ? potentialVoidNode : null;
      var potentialNonEditableNode = parentNode.closest('[contenteditable="false"]');
      var nonEditableNode = potentialNonEditableNode && editorEl.contains(potentialNonEditableNode) ? potentialNonEditableNode : null;
      var leafNode = parentNode.closest("[data-slate-leaf]");
      var domNode = null;
      if (leafNode) {
        textNode = leafNode.closest('[data-slate-node="text"]');
        if (textNode) {
          var window2 = DOMEditor.getWindow(editor);
          var range = window2.document.createRange();
          range.setStart(textNode, 0);
          range.setEnd(nearestNode, nearestOffset);
          var contents = range.cloneContents();
          var removals = [...Array.prototype.slice.call(contents.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(contents.querySelectorAll("[contenteditable=false]"))];
          removals.forEach(el => {
            if (IS_ANDROID && !exactMatch && el.hasAttribute("data-slate-zero-width") && el.textContent.length > 0 && el.textContext !== "\uFEFF") {
              if (el.textContent.startsWith("\uFEFF")) {
                el.textContent = el.textContent.slice(1);
              }
              return;
            }
            el.parentNode.removeChild(el);
          });
          offset = contents.textContent.length;
          domNode = textNode;
        }
      } else if (voidNode) {
        var leafNodes = voidNode.querySelectorAll("[data-slate-leaf]");
        for (var index = 0; index < leafNodes.length; index++) {
          var current = leafNodes[index];
          if (DOMEditor.hasDOMNode(editor, current)) {
            leafNode = current;
            break;
          }
        }
        if (!leafNode) {
          offset = 1;
        } else {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          offset = domNode.textContent.length;
          domNode.querySelectorAll("[data-slate-zero-width]").forEach(el => {
            offset -= el.textContent.length;
          });
        }
      } else if (nonEditableNode) {
        var getLeafNodes = node2 => node2 ? node2.querySelectorAll("[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])") : [];
        var elementNode = nonEditableNode.closest('[data-slate-node="element"]');
        if (searchDirection === "backward" || !searchDirection) {
          var _leafNodes$findLast;
          var _leafNodes = [...getLeafNodes(elementNode === null || elementNode === void 0 ? void 0 : elementNode.previousElementSibling), ...getLeafNodes(elementNode)];
          leafNode = (_leafNodes$findLast = _leafNodes.findLast(leaf => isBefore(nonEditableNode, leaf))) !== null && _leafNodes$findLast !== void 0 ? _leafNodes$findLast : null;
        }
        if (searchDirection === "forward" || !searchDirection) {
          var _leafNodes2$find;
          var _leafNodes2 = [...getLeafNodes(elementNode), ...getLeafNodes(elementNode === null || elementNode === void 0 ? void 0 : elementNode.nextElementSibling)];
          leafNode = (_leafNodes2$find = _leafNodes2.find(leaf => isAfter(nonEditableNode, leaf))) !== null && _leafNodes2$find !== void 0 ? _leafNodes2$find : null;
        }
        if (leafNode) {
          textNode = leafNode.closest('[data-slate-node="text"]');
          domNode = leafNode;
          if (searchDirection === "forward") {
            offset = 0;
          } else {
            offset = domNode.textContent.length;
            domNode.querySelectorAll("[data-slate-zero-width]").forEach(el => {
              offset -= el.textContent.length;
            });
          }
        }
      }
      if (domNode && offset === domNode.textContent.length && IS_ANDROID && domNode.getAttribute("data-slate-zero-width") === "z" && (_domNode$textContent = domNode.textContent) !== null && _domNode$textContent !== void 0 && _domNode$textContent.startsWith("\uFEFF") && (parentNode.hasAttribute("data-slate-zero-width") || IS_FIREFOX && (_domNode$textContent2 = domNode.textContent) !== null && _domNode$textContent2 !== void 0 && _domNode$textContent2.endsWith("\n\n"))) {
        offset--;
      }
    }
    if (IS_ANDROID && !textNode && !exactMatch) {
      var node = parentNode.hasAttribute("data-slate-node") ? parentNode : parentNode.closest("[data-slate-node]");
      if (node && DOMEditor.hasDOMNode(editor, node, {
        editable: true
      })) {
        var _slateNode = DOMEditor.toSlateNode(editor, node);
        var {
          path: _path,
          offset: _offset
        } = import_slate.Editor.start(editor, DOMEditor.findPath(editor, _slateNode));
        if (!node.querySelector("[data-slate-leaf]")) {
          _offset = nearestOffset;
        }
        return {
          path: _path,
          offset: _offset
        };
      }
    }
    if (!textNode) {
      if (suppressThrow) {
        return null;
      }
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(domPoint));
    }
    var slateNode = DOMEditor.toSlateNode(editor, textNode);
    var path = DOMEditor.findPath(editor, slateNode);
    return {
      path,
      offset
    };
  },
  toSlateRange: (editor, domRange, options) => {
    var _focusNode$textConten;
    var {
      exactMatch,
      suppressThrow
    } = options;
    var el = isDOMSelection(domRange) ? domRange.anchorNode : domRange.startContainer;
    var anchorNode;
    var anchorOffset;
    var focusNode;
    var focusOffset;
    var isCollapsed;
    if (el) {
      if (isDOMSelection(domRange)) {
        if (IS_FIREFOX && domRange.rangeCount > 1) {
          focusNode = domRange.focusNode;
          var firstRange = domRange.getRangeAt(0);
          var lastRange = domRange.getRangeAt(domRange.rangeCount - 1);
          if (focusNode instanceof HTMLTableRowElement && firstRange.startContainer instanceof HTMLTableRowElement && lastRange.startContainer instanceof HTMLTableRowElement) {
            let getLastChildren = function (element) {
              if (element.childElementCount > 0) {
                return getLastChildren(element.children[0]);
              } else {
                return element;
              }
            };
            var firstNodeRow = firstRange.startContainer;
            var lastNodeRow = lastRange.startContainer;
            var firstNode = getLastChildren(firstNodeRow.children[firstRange.startOffset]);
            var lastNode = getLastChildren(lastNodeRow.children[lastRange.startOffset]);
            focusOffset = 0;
            if (lastNode.childNodes.length > 0) {
              anchorNode = lastNode.childNodes[0];
            } else {
              anchorNode = lastNode;
            }
            if (firstNode.childNodes.length > 0) {
              focusNode = firstNode.childNodes[0];
            } else {
              focusNode = firstNode;
            }
            if (lastNode instanceof HTMLElement) {
              anchorOffset = lastNode.innerHTML.length;
            } else {
              anchorOffset = 0;
            }
          } else {
            if (firstRange.startContainer === focusNode) {
              anchorNode = lastRange.endContainer;
              anchorOffset = lastRange.endOffset;
              focusOffset = firstRange.startOffset;
            } else {
              anchorNode = firstRange.startContainer;
              anchorOffset = firstRange.endOffset;
              focusOffset = lastRange.startOffset;
            }
          }
        } else {
          anchorNode = domRange.anchorNode;
          anchorOffset = domRange.anchorOffset;
          focusNode = domRange.focusNode;
          focusOffset = domRange.focusOffset;
        }
        if (IS_CHROME && hasShadowRoot(anchorNode) || IS_FIREFOX) {
          isCollapsed = domRange.anchorNode === domRange.focusNode && domRange.anchorOffset === domRange.focusOffset;
        } else {
          isCollapsed = domRange.isCollapsed;
        }
      } else {
        anchorNode = domRange.startContainer;
        anchorOffset = domRange.startOffset;
        focusNode = domRange.endContainer;
        focusOffset = domRange.endOffset;
        isCollapsed = domRange.collapsed;
      }
    }
    if (anchorNode == null || focusNode == null || anchorOffset == null || focusOffset == null) {
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(domRange));
    }
    if (IS_FIREFOX && (_focusNode$textConten = focusNode.textContent) !== null && _focusNode$textConten !== void 0 && _focusNode$textConten.endsWith("\n\n") && focusOffset === focusNode.textContent.length) {
      focusOffset--;
    }
    var anchor = DOMEditor.toSlatePoint(editor, [anchorNode, anchorOffset], {
      exactMatch,
      suppressThrow
    });
    if (!anchor) {
      return null;
    }
    var focusBeforeAnchor = isBefore(anchorNode, focusNode) || anchorNode === focusNode && focusOffset < anchorOffset;
    var focus2 = isCollapsed ? anchor : DOMEditor.toSlatePoint(editor, [focusNode, focusOffset], {
      exactMatch,
      suppressThrow,
      searchDirection: focusBeforeAnchor ? "forward" : "backward"
    });
    if (!focus2) {
      return null;
    }
    var range = {
      anchor,
      focus: focus2
    };
    if (import_slate.Range.isExpanded(range) && import_slate.Range.isForward(range) && isDOMElement(focusNode) && import_slate.Editor.void(editor, {
      at: range.focus,
      mode: "highest"
    })) {
      range = import_slate.Editor.unhangRange(editor, range, {
        voids: true
      });
    }
    return range;
  }
};
function verifyDiffState(editor, textDiff) {
  var {
    path,
    diff
  } = textDiff;
  if (!import_slate.Editor.hasPath(editor, path)) {
    return false;
  }
  var node = import_slate.Node.get(editor, path);
  if (!import_slate.Text.isText(node)) {
    return false;
  }
  if (diff.start !== node.text.length || diff.text.length === 0) {
    return node.text.slice(diff.start, diff.start + diff.text.length) === diff.text;
  }
  var nextPath = import_slate.Path.next(path);
  if (!import_slate.Editor.hasPath(editor, nextPath)) {
    return false;
  }
  var nextNode = import_slate.Node.get(editor, nextPath);
  return import_slate.Text.isText(nextNode) && nextNode.text.startsWith(diff.text);
}
function applyStringDiff(text) {
  for (var _len = arguments.length, diffs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    diffs[_key - 1] = arguments[_key];
  }
  return diffs.reduce((text2, diff) => text2.slice(0, diff.start) + diff.text + text2.slice(diff.end), text);
}
function longestCommonPrefixLength(str, another) {
  var length = Math.min(str.length, another.length);
  for (var i = 0; i < length; i++) {
    if (str.charAt(i) !== another.charAt(i)) {
      return i;
    }
  }
  return length;
}
function longestCommonSuffixLength(str, another, max) {
  var length = Math.min(str.length, another.length, max);
  for (var i = 0; i < length; i++) {
    if (str.charAt(str.length - i - 1) !== another.charAt(another.length - i - 1)) {
      return i;
    }
  }
  return length;
}
function normalizeStringDiff(targetText, diff) {
  var {
    start,
    end,
    text
  } = diff;
  var removedText = targetText.slice(start, end);
  var prefixLength = longestCommonPrefixLength(removedText, text);
  var max = Math.min(removedText.length - prefixLength, text.length - prefixLength);
  var suffixLength = longestCommonSuffixLength(removedText, text, max);
  var normalized = {
    start: start + prefixLength,
    end: end - suffixLength,
    text: text.slice(prefixLength, text.length - suffixLength)
  };
  if (normalized.start === normalized.end && normalized.text.length === 0) {
    return null;
  }
  return normalized;
}
function mergeStringDiffs(targetText, a, b) {
  var start = Math.min(a.start, b.start);
  var overlap = Math.max(0, Math.min(a.start + a.text.length, b.end) - b.start);
  var applied = applyStringDiff(targetText, a, b);
  var sliceEnd = Math.max(b.start + b.text.length, a.start + a.text.length + (a.start + a.text.length > b.start ? b.text.length : 0) - overlap);
  var text = applied.slice(start, sliceEnd);
  var end = Math.max(a.end, b.end - a.text.length + (a.end - a.start));
  return normalizeStringDiff(targetText, {
    start,
    end,
    text
  });
}
function targetRange(textDiff) {
  var {
    path,
    diff
  } = textDiff;
  return {
    anchor: {
      path,
      offset: diff.start
    },
    focus: {
      path,
      offset: diff.end
    }
  };
}
function normalizePoint(editor, point) {
  var {
    path,
    offset
  } = point;
  if (!import_slate.Editor.hasPath(editor, path)) {
    return null;
  }
  var leaf = import_slate.Node.get(editor, path);
  if (!import_slate.Text.isText(leaf)) {
    return null;
  }
  var parentBlock = import_slate.Editor.above(editor, {
    match: n2 => import_slate.Element.isElement(n2) && import_slate.Editor.isBlock(editor, n2),
    at: path
  });
  if (!parentBlock) {
    return null;
  }
  while (offset > leaf.text.length) {
    var entry = import_slate.Editor.next(editor, {
      at: path,
      match: import_slate.Text.isText
    });
    if (!entry || !import_slate.Path.isDescendant(entry[1], parentBlock[1])) {
      return null;
    }
    offset -= leaf.text.length;
    leaf = entry[0];
    path = entry[1];
  }
  return {
    path,
    offset
  };
}
function normalizeRange(editor, range) {
  var anchor = normalizePoint(editor, range.anchor);
  if (!anchor) {
    return null;
  }
  if (import_slate.Range.isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }
  var focus2 = normalizePoint(editor, range.focus);
  if (!focus2) {
    return null;
  }
  return {
    anchor,
    focus: focus2
  };
}
function transformPendingPoint(editor, point, op) {
  var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(editor);
  var textDiff = pendingDiffs === null || pendingDiffs === void 0 ? void 0 : pendingDiffs.find(_ref => {
    var {
      path
    } = _ref;
    return import_slate.Path.equals(path, point.path);
  });
  if (!textDiff || point.offset <= textDiff.diff.start) {
    return import_slate.Point.transform(point, op, {
      affinity: "backward"
    });
  }
  var {
    diff
  } = textDiff;
  if (point.offset <= diff.start + diff.text.length) {
    var _anchor = {
      path: point.path,
      offset: diff.start
    };
    var _transformed = import_slate.Point.transform(_anchor, op, {
      affinity: "backward"
    });
    if (!_transformed) {
      return null;
    }
    return {
      path: _transformed.path,
      offset: _transformed.offset + point.offset - diff.start
    };
  }
  var anchor = {
    path: point.path,
    offset: point.offset - diff.text.length + diff.end - diff.start
  };
  var transformed = import_slate.Point.transform(anchor, op, {
    affinity: "backward"
  });
  if (!transformed) {
    return null;
  }
  if (op.type === "split_node" && import_slate.Path.equals(op.path, point.path) && anchor.offset < op.position && diff.start < op.position) {
    return transformed;
  }
  return {
    path: transformed.path,
    offset: transformed.offset + diff.text.length - diff.end + diff.start
  };
}
function transformPendingRange(editor, range, op) {
  var anchor = transformPendingPoint(editor, range.anchor, op);
  if (!anchor) {
    return null;
  }
  if (import_slate.Range.isCollapsed(range)) {
    return {
      anchor,
      focus: anchor
    };
  }
  var focus2 = transformPendingPoint(editor, range.focus, op);
  if (!focus2) {
    return null;
  }
  return {
    anchor,
    focus: focus2
  };
}
function transformTextDiff(textDiff, op) {
  var {
    path,
    diff,
    id
  } = textDiff;
  switch (op.type) {
    case "insert_text":
      {
        if (!import_slate.Path.equals(op.path, path) || op.offset >= diff.end) {
          return textDiff;
        }
        if (op.offset <= diff.start) {
          return {
            diff: {
              start: op.text.length + diff.start,
              end: op.text.length + diff.end,
              text: diff.text
            },
            id,
            path
          };
        }
        return {
          diff: {
            start: diff.start,
            end: diff.end + op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }
    case "remove_text":
      {
        if (!import_slate.Path.equals(op.path, path) || op.offset >= diff.end) {
          return textDiff;
        }
        if (op.offset + op.text.length <= diff.start) {
          return {
            diff: {
              start: diff.start - op.text.length,
              end: diff.end - op.text.length,
              text: diff.text
            },
            id,
            path
          };
        }
        return {
          diff: {
            start: diff.start,
            end: diff.end - op.text.length,
            text: diff.text
          },
          id,
          path
        };
      }
    case "split_node":
      {
        if (!import_slate.Path.equals(op.path, path) || op.position >= diff.end) {
          return {
            diff,
            id,
            path: import_slate.Path.transform(path, op, {
              affinity: "backward"
            })
          };
        }
        if (op.position > diff.start) {
          return {
            diff: {
              start: diff.start,
              end: Math.min(op.position, diff.end),
              text: diff.text
            },
            id,
            path
          };
        }
        return {
          diff: {
            start: diff.start - op.position,
            end: diff.end - op.position,
            text: diff.text
          },
          id,
          path: import_slate.Path.transform(path, op, {
            affinity: "forward"
          })
        };
      }
    case "merge_node":
      {
        if (!import_slate.Path.equals(op.path, path)) {
          return {
            diff,
            id,
            path: import_slate.Path.transform(path, op)
          };
        }
        return {
          diff: {
            start: diff.start + op.position,
            end: diff.end + op.position,
            text: diff.text
          },
          id,
          path: import_slate.Path.transform(path, op)
        };
      }
  }
  var newPath = import_slate.Path.transform(path, op);
  if (!newPath) {
    return null;
  }
  return {
    diff,
    path: newPath,
    id
  };
}
var doRectsIntersect = (rect, compareRect) => {
  var middle = (compareRect.top + compareRect.bottom) / 2;
  return rect.top <= middle && rect.bottom >= middle;
};
var areRangesSameLine = (editor, range1, range2) => {
  var rect1 = DOMEditor.toDOMRange(editor, range1).getBoundingClientRect();
  var rect2 = DOMEditor.toDOMRange(editor, range2).getBoundingClientRect();
  return doRectsIntersect(rect1, rect2) && doRectsIntersect(rect2, rect1);
};
var findCurrentLineRange = (editor, parentRange) => {
  var parentRangeBoundary = import_slate.Editor.range(editor, import_slate.Range.end(parentRange));
  var positions = Array.from(import_slate.Editor.positions(editor, {
    at: parentRange
  }));
  var left = 0;
  var right = positions.length;
  var middle = Math.floor(right / 2);
  if (areRangesSameLine(editor, import_slate.Editor.range(editor, positions[left]), parentRangeBoundary)) {
    return import_slate.Editor.range(editor, positions[left], parentRangeBoundary);
  }
  if (positions.length < 2) {
    return import_slate.Editor.range(editor, positions[positions.length - 1], parentRangeBoundary);
  }
  while (middle !== positions.length && middle !== left) {
    if (areRangesSameLine(editor, import_slate.Editor.range(editor, positions[middle]), parentRangeBoundary)) {
      right = middle;
    } else {
      left = middle;
    }
    middle = Math.floor((left + right) / 2);
  }
  return import_slate.Editor.range(editor, positions[left], parentRangeBoundary);
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
var withDOM = function withDOM2(editor) {
  var clipboardFormatKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment";
  var e = editor;
  var {
    apply,
    onChange,
    deleteBackward,
    addMark,
    removeMark
  } = e;
  EDITOR_TO_KEY_TO_ELEMENT.set(e, /* @__PURE__ */new WeakMap());
  e.addMark = (key, value) => {
    var _EDITOR_TO_SCHEDULE_F, _EDITOR_TO_PENDING_DI;
    (_EDITOR_TO_SCHEDULE_F = EDITOR_TO_SCHEDULE_FLUSH.get(e)) === null || _EDITOR_TO_SCHEDULE_F === void 0 || _EDITOR_TO_SCHEDULE_F();
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI !== void 0 && _EDITOR_TO_PENDING_DI.length) {
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
    }
    EDITOR_TO_USER_MARKS.delete(e);
    addMark(key, value);
  };
  e.removeMark = key => {
    var _EDITOR_TO_PENDING_DI2;
    if (!EDITOR_TO_PENDING_INSERTION_MARKS.get(e) && (_EDITOR_TO_PENDING_DI2 = EDITOR_TO_PENDING_DIFFS.get(e)) !== null && _EDITOR_TO_PENDING_DI2 !== void 0 && _EDITOR_TO_PENDING_DI2.length) {
      EDITOR_TO_PENDING_INSERTION_MARKS.set(e, null);
    }
    EDITOR_TO_USER_MARKS.delete(e);
    removeMark(key);
  };
  e.deleteBackward = unit => {
    if (unit !== "line") {
      return deleteBackward(unit);
    }
    if (e.selection && import_slate.Range.isCollapsed(e.selection)) {
      var parentBlockEntry = import_slate.Editor.above(e, {
        match: n2 => import_slate.Element.isElement(n2) && import_slate.Editor.isBlock(e, n2),
        at: e.selection
      });
      if (parentBlockEntry) {
        var [, parentBlockPath] = parentBlockEntry;
        var parentElementRange = import_slate.Editor.range(e, parentBlockPath, e.selection.anchor);
        var currentLineRange = findCurrentLineRange(e, parentElementRange);
        if (!import_slate.Range.isCollapsed(currentLineRange)) {
          import_slate.Transforms.delete(e, {
            at: currentLineRange
          });
        }
      }
    }
  };
  e.apply = op => {
    var matches = [];
    var pathRefMatches = [];
    var pendingDiffs = EDITOR_TO_PENDING_DIFFS.get(e);
    if (pendingDiffs !== null && pendingDiffs !== void 0 && pendingDiffs.length) {
      var transformed = pendingDiffs.map(textDiff => transformTextDiff(textDiff, op)).filter(Boolean);
      EDITOR_TO_PENDING_DIFFS.set(e, transformed);
    }
    var pendingSelection = EDITOR_TO_PENDING_SELECTION.get(e);
    if (pendingSelection) {
      EDITOR_TO_PENDING_SELECTION.set(e, transformPendingRange(e, pendingSelection, op));
    }
    var pendingAction = EDITOR_TO_PENDING_ACTION.get(e);
    if (pendingAction !== null && pendingAction !== void 0 && pendingAction.at) {
      var at = import_slate.Point.isPoint(pendingAction === null || pendingAction === void 0 ? void 0 : pendingAction.at) ? transformPendingPoint(e, pendingAction.at, op) : transformPendingRange(e, pendingAction.at, op);
      EDITOR_TO_PENDING_ACTION.set(e, at ? _objectSpread$1(_objectSpread$1({}, pendingAction), {}, {
        at
      }) : null);
    }
    switch (op.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node":
        {
          matches.push(...getMatches(e, op.path));
          break;
        }
      case "set_selection":
        {
          var _EDITOR_TO_USER_SELEC;
          (_EDITOR_TO_USER_SELEC = EDITOR_TO_USER_SELECTION.get(e)) === null || _EDITOR_TO_USER_SELEC === void 0 || _EDITOR_TO_USER_SELEC.unref();
          EDITOR_TO_USER_SELECTION.delete(e);
          break;
        }
      case "insert_node":
      case "remove_node":
        {
          matches.push(...getMatches(e, import_slate.Path.parent(op.path)));
          break;
        }
      case "merge_node":
        {
          var prevPath = import_slate.Path.previous(op.path);
          matches.push(...getMatches(e, prevPath));
          break;
        }
      case "move_node":
        {
          var commonPath = import_slate.Path.common(import_slate.Path.parent(op.path), import_slate.Path.parent(op.newPath));
          matches.push(...getMatches(e, commonPath));
          var changedPath;
          if (import_slate.Path.isBefore(op.path, op.newPath)) {
            matches.push(...getMatches(e, import_slate.Path.parent(op.path)));
            changedPath = op.newPath;
          } else {
            matches.push(...getMatches(e, import_slate.Path.parent(op.newPath)));
            changedPath = op.path;
          }
          var changedNode = import_slate.Node.get(editor, import_slate.Path.parent(changedPath));
          var changedNodeKey = DOMEditor.findKey(e, changedNode);
          var changedPathRef = import_slate.Editor.pathRef(e, import_slate.Path.parent(changedPath));
          pathRefMatches.push([changedPathRef, changedNodeKey]);
          break;
        }
    }
    apply(op);
    switch (op.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "move_node":
      case "split_node":
      case "insert_text":
      case "remove_text":
      case "set_selection":
        {
          IS_NODE_MAP_DIRTY.set(e, true);
        }
    }
    for (var [path, key] of matches) {
      var [node] = import_slate.Editor.node(e, path);
      NODE_TO_KEY.set(node, key);
    }
    for (var [pathRef, _key] of pathRefMatches) {
      if (pathRef.current) {
        var [_node] = import_slate.Editor.node(e, pathRef.current);
        NODE_TO_KEY.set(_node, _key);
      }
      pathRef.unref();
    }
  };
  e.setFragmentData = data => {
    var {
      selection
    } = e;
    if (!selection) {
      return;
    }
    var [start, end] = import_slate.Range.edges(selection);
    var startVoid = import_slate.Editor.void(e, {
      at: start.path
    });
    var endVoid = import_slate.Editor.void(e, {
      at: end.path
    });
    if (import_slate.Range.isCollapsed(selection) && !startVoid) {
      return;
    }
    var domRange = DOMEditor.toDOMRange(e, selection);
    var contents = domRange.cloneContents();
    var attach = contents.childNodes[0];
    contents.childNodes.forEach(node => {
      if (node.textContent && node.textContent.trim() !== "") {
        attach = node;
      }
    });
    if (endVoid) {
      var [voidNode] = endVoid;
      var r = domRange.cloneRange();
      var domNode = DOMEditor.toDOMNode(e, voidNode);
      r.setEndAfter(domNode);
      contents = r.cloneContents();
    }
    if (startVoid) {
      attach = contents.querySelector("[data-slate-spacer]");
    }
    Array.from(contents.querySelectorAll("[data-slate-zero-width]")).forEach(zw => {
      var isNewline = zw.getAttribute("data-slate-zero-width") === "n";
      zw.textContent = isNewline ? "\n" : "";
    });
    if (isDOMText(attach)) {
      var span = attach.ownerDocument.createElement("span");
      span.style.whiteSpace = "pre";
      span.appendChild(attach);
      contents.appendChild(span);
      attach = span;
    }
    var fragment = e.getFragment();
    var string = JSON.stringify(fragment);
    var encoded = window.btoa(encodeURIComponent(string));
    attach.setAttribute("data-slate-fragment", encoded);
    data.setData("application/".concat(clipboardFormatKey), encoded);
    var div = contents.ownerDocument.createElement("div");
    div.appendChild(contents);
    div.setAttribute("hidden", "true");
    contents.ownerDocument.body.appendChild(div);
    data.setData("text/html", div.innerHTML);
    data.setData("text/plain", getPlainText(div));
    contents.ownerDocument.body.removeChild(div);
    return data;
  };
  e.insertData = data => {
    if (!e.insertFragmentData(data)) {
      e.insertTextData(data);
    }
  };
  e.insertFragmentData = data => {
    var fragment = data.getData("application/".concat(clipboardFormatKey)) || getSlateFragmentAttribute(data);
    if (fragment) {
      var decoded = decodeURIComponent(window.atob(fragment));
      var parsed = JSON.parse(decoded);
      e.insertFragment(parsed);
      return true;
    }
    return false;
  };
  e.insertTextData = data => {
    var text = data.getData("text/plain");
    if (text) {
      var lines = text.split(/\r\n|\r|\n/);
      var split = false;
      for (var line of lines) {
        if (split) {
          import_slate.Transforms.splitNodes(e, {
            always: true
          });
        }
        e.insertText(line);
        split = true;
      }
      return true;
    }
    return false;
  };
  e.onChange = options => {
    var onContextChange = EDITOR_TO_ON_CHANGE.get(e);
    if (onContextChange) {
      onContextChange(options);
    }
    onChange(options);
  };
  return e;
};
var getMatches = (e, path) => {
  var matches = [];
  for (var [n2, p] of import_slate.Editor.levels(e, {
    at: path
  })) {
    var key = DOMEditor.findKey(e, n2);
    matches.push([p, key]);
  }
  return matches;
};
var TRIPLE_CLICK = 3;
var HOTKEYS = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
};
var APPLE_HOTKEYS = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
};
var WINDOWS_HOTKEYS = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
};
var create = key => {
  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];
  var isGeneric = generic && (0, import_is_hotkey.isHotkey)(generic);
  var isApple = apple && (0, import_is_hotkey.isHotkey)(apple);
  var isWindows = windows && (0, import_is_hotkey.isHotkey)(windows);
  return event => {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (!IS_APPLE && isWindows && isWindows(event)) return true;
    return false;
  };
};
var hotkeys = {
  isBold: create("bold"),
  isCompose: create("compose"),
  isMoveBackward: create("moveBackward"),
  isMoveForward: create("moveForward"),
  isDeleteBackward: create("deleteBackward"),
  isDeleteForward: create("deleteForward"),
  isDeleteLineBackward: create("deleteLineBackward"),
  isDeleteLineForward: create("deleteLineForward"),
  isDeleteWordBackward: create("deleteWordBackward"),
  isDeleteWordForward: create("deleteWordForward"),
  isExtendBackward: create("extendBackward"),
  isExtendForward: create("extendForward"),
  isExtendLineBackward: create("extendLineBackward"),
  isExtendLineForward: create("extendLineForward"),
  isItalic: create("italic"),
  isMoveLineBackward: create("moveLineBackward"),
  isMoveLineForward: create("moveLineForward"),
  isMoveWordBackward: create("moveWordBackward"),
  isMoveWordForward: create("moveWordForward"),
  isRedo: create("redo"),
  isSoftBreak: create("insertSoftBreak"),
  isSplitBlock: create("splitBlock"),
  isTransposeCharacter: create("transposeCharacter"),
  isUndo: create("undo")
};
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
var _excluded = ["anchor", "focus"],
  _excluded2 = ["anchor", "focus"];
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
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
var isDecorationFlagsEqual = (range, other) => {
  var rangeOwnProps = _objectWithoutProperties(range, _excluded);
  var otherOwnProps = _objectWithoutProperties(other, _excluded2);
  return range[PLACEHOLDER_SYMBOL] === other[PLACEHOLDER_SYMBOL] && shallowCompare(rangeOwnProps, otherOwnProps);
};
var isElementDecorationsEqual = (list, another) => {
  if (list === another) {
    return true;
  }
  if (!list || !another) {
    return false;
  }
  if (list.length !== another.length) {
    return false;
  }
  for (var i = 0; i < list.length; i++) {
    var range = list[i];
    var other = another[i];
    if (!import_slate.Range.equals(range, other) || !isDecorationFlagsEqual(range, other)) {
      return false;
    }
  }
  return true;
};
var isTextDecorationsEqual = (list, another) => {
  if (list === another) {
    return true;
  }
  if (!list || !another) {
    return false;
  }
  if (list.length !== another.length) {
    return false;
  }
  for (var i = 0; i < list.length; i++) {
    var range = list[i];
    var other = another[i];
    if (range.anchor.offset !== other.anchor.offset || range.focus.offset !== other.focus.offset || !isDecorationFlagsEqual(range, other)) {
      return false;
    }
  }
  return true;
};
var splitDecorationsByChild = (editor, node, decorations) => {
  var decorationsByChild = Array.from(node.children, () => []);
  if (decorations.length === 0) {
    return decorationsByChild;
  }
  var path = DOMEditor.findPath(editor, node);
  var level = path.length;
  var ancestorRange = import_slate.Editor.range(editor, path);
  var cachedChildRanges = new Array(node.children.length);
  var getChildRange = index => {
    var cachedRange = cachedChildRanges[index];
    if (cachedRange) return cachedRange;
    var childRange2 = import_slate.Editor.range(editor, [...path, index]);
    cachedChildRanges[index] = childRange2;
    return childRange2;
  };
  for (var decoration of decorations) {
    var decorationRange = import_slate.Range.intersection(ancestorRange, decoration);
    if (!decorationRange) continue;
    var [startPoint, endPoint] = import_slate.Range.edges(decorationRange);
    var startIndex = startPoint.path[level];
    var endIndex = endPoint.path[level];
    for (var i = startIndex; i <= endIndex; i++) {
      var ds = decorationsByChild[i];
      if (!ds) continue;
      var childRange = getChildRange(i);
      var childDecorationRange = import_slate.Range.intersection(childRange, decoration);
      if (!childDecorationRange) continue;
      ds.push(_objectSpread(_objectSpread({}, decoration), childDecorationRange));
    }
  }
  return decorationsByChild;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zbGF0ZS1kb20uMC4xMTguMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2RvbS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2Vudmlyb25tZW50LnRzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy91dGlscy9rZXkudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy91dGlscy93ZWFrLW1hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy9wbHVnaW4vZG9tLWVkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2RpZmYtdGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2xpbmVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvcGx1Z2luL3dpdGgtZG9tLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvaG90a2V5cy50cyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL3JhbmdlLWxpc3QudHMiXSwibmFtZXMiOlsic2xhdGVfZG9tXzBfMTE4XzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ0FOX1VTRV9ET00iLCJET01FZGl0b3IiLCJET01FbGVtZW50IiwiRE9NTm9kZSIsIkRPTVJhbmdlIiwiRE9NU2VsZWN0aW9uIiwiRE9NU3RhdGljUmFuZ2UiLCJET01UZXh0IiwiRURJVE9SX1RPX0VMRU1FTlQiLCJFRElUT1JfVE9fRk9SQ0VfUkVOREVSIiwiRURJVE9SX1RPX0tFWV9UT19FTEVNRU5UIiwiRURJVE9SX1RPX09OX0NIQU5HRSIsIkVESVRPUl9UT19QRU5ESU5HX0FDVElPTiIsIkVESVRPUl9UT19QRU5ESU5HX0RJRkZTIiwiRURJVE9SX1RPX1BFTkRJTkdfSU5TRVJUSU9OX01BUktTIiwiRURJVE9SX1RPX1BFTkRJTkdfU0VMRUNUSU9OIiwiRURJVE9SX1RPX1BMQUNFSE9MREVSX0VMRU1FTlQiLCJFRElUT1JfVE9fU0NIRURVTEVfRkxVU0giLCJFRElUT1JfVE9fVVNFUl9NQVJLUyIsIkVESVRPUl9UT19VU0VSX1NFTEVDVElPTiIsIkVESVRPUl9UT19XSU5ET1ciLCJFTEVNRU5UX1RPX05PREUiLCJIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQiLCJIb3RrZXlzIiwiaG90a2V5cyIsIklTX0FORFJPSUQiLCJJU19DSFJPTUUiLCJJU19DT01QT1NJTkciLCJJU19GSVJFRk9YIiwiSVNfRklSRUZPWF9MRUdBQ1kiLCJJU19GT0NVU0VEIiwiSVNfSU9TIiwiSVNfTk9ERV9NQVBfRElSVFkiLCJJU19SRUFEX09OTFkiLCJJU19VQ19NT0JJTEUiLCJJU19XRUJLSVQiLCJJU19XRUNIQVRCUk9XU0VSIiwiS2V5IiwiTUFSS19QTEFDRUhPTERFUl9TWU1CT0wiLCJOT0RFX1RPX0VMRU1FTlQiLCJOT0RFX1RPX0lOREVYIiwiTk9ERV9UT19LRVkiLCJOT0RFX1RPX1BBUkVOVCIsIlBMQUNFSE9MREVSX1NZTUJPTCIsIlRSSVBMRV9DTElDSyIsImFwcGx5U3RyaW5nRGlmZiIsImdldEFjdGl2ZUVsZW1lbnQiLCJnZXREZWZhdWx0VmlldyIsImdldFNlbGVjdGlvbiIsImhhc1NoYWRvd1Jvb3QiLCJpc0FmdGVyIiwiaXNCZWZvcmUiLCJpc0RPTUVsZW1lbnQiLCJpc0RPTU5vZGUiLCJpc0RPTVNlbGVjdGlvbiIsImlzRWxlbWVudERlY29yYXRpb25zRXF1YWwiLCJpc1BsYWluVGV4dE9ubHlQYXN0ZSIsImlzVGV4dERlY29yYXRpb25zRXF1YWwiLCJpc1RyYWNrZWRNdXRhdGlvbiIsIm1lcmdlU3RyaW5nRGlmZnMiLCJub3JtYWxpemVET01Qb2ludCIsIm5vcm1hbGl6ZVBvaW50Iiwibm9ybWFsaXplUmFuZ2UiLCJub3JtYWxpemVTdHJpbmdEaWZmIiwic3BsaXREZWNvcmF0aW9uc0J5Q2hpbGQiLCJ0YXJnZXRSYW5nZSIsInZlcmlmeURpZmZTdGF0ZSIsIndpdGhET00iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZ2xvYmFsVGhpcyIsIk5vZGUiLCJFbGVtZW50IiwiVGV4dCIsIlJhbmdlIiwiU2VsZWN0aW9uIiwiU3RhdGljUmFuZ2UiLCJ2YWx1ZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImlzRE9NQ29tbWVudCIsIm5vZGVUeXBlIiwid2luZG93MiIsImFuY2hvck5vZGUiLCJpc0RPTVRleHQiLCJldmVudCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwidHlwZXMiLCJsZW5ndGgiLCJkb21Qb2ludCIsIm5vZGUiLCJvZmZzZXQiLCJjaGlsZE5vZGVzIiwiaXNMYXN0IiwiaW5kZXgiLCJnZXRFZGl0YWJsZUNoaWxkQW5kSW5kZXgiLCJpIiwiZ2V0RWRpdGFibGVDaGlsZCIsInRleHRDb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsInRvU3RyaW5nIiwiZGlyZWN0aW9uIiwiY2hpbGQiLCJ0cmllZEZvcndhcmQiLCJ0cmllZEJhY2t3YXJkIiwiZ2V0QXR0cmlidXRlIiwiZ2V0UGxhaW5UZXh0IiwiZG9tTm9kZSIsInRleHQiLCJub2RlVmFsdWUiLCJjaGlsZE5vZGUiLCJBcnJheSIsImZyb20iLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0YWdOYW1lIiwiY2F0Y2hTbGF0ZUZyYWdtZW50IiwiZ2V0U2xhdGVGcmFnbWVudEF0dHJpYnV0ZSIsImRhdGFUcmFuc2ZlciIsImh0bWxEYXRhIiwiZnJhZ21lbnQiLCJtYXRjaCIsInJvb3QiLCJkb2N1bWVudCIsImVkaXRvciIsIm11dGF0aW9uIiwiYmF0Y2giLCJ0YXJnZXQiLCJtYXRjaGVzIiwiZG9jdW1lbnQyIiwiZ2V0V2luZG93IiwiY29udGFpbnMiLCJoYXNET01Ob2RlIiwiZWRpdGFibGUiLCJwYXJlbnRNdXRhdGlvbiIsImZpbmQiLCJfcmVmIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsIl9ub2RlIiwiYWN0aXZlRWxlbWVudCIsIl9hY3RpdmVFbGVtZW50Iiwic2hhZG93Um9vdCIsIl9hY3RpdmVFbGVtZW50JHNoYWRvdyIsIl9hY3RpdmVFbGVtZW50MiIsIm90aGVyTm9kZSIsIkJvb2xlYW4iLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyIsIkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORyIsIm5hdmlnYXRvciIsIndpbmRvdyIsInRlc3QiLCJ1c2VyQWdlbnQiLCJNU1N0cmVhbSIsIklTX0FQUExFIiwiSVNfRURHRV9MRUdBQ1kiLCJJU19DSFJPTUVfTEVHQUNZIiwiSVNfQU5EUk9JRF9DSFJPTUVfTEVHQUNZIiwiY3JlYXRlRWxlbWVudCIsIl9uYXZpZ2F0b3IkdXNlckFnZW50JCIsInBhcnNlSW50IiwiX25hdmlnYXRvciR1c2VyQWdlbnQkMiIsIklucHV0RXZlbnQiLCJwcm90b3R5cGUiLCJnZXRUYXJnZXRSYW5nZXMiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibzIiLCJjb25zdHJ1Y3RvciIsIl90b1ByaW1pdGl2ZSIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfdG9Qcm9wZXJ0eUtleSIsImFyZyIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwibiIsImlkIiwiY29uY2F0IiwiV2Vha01hcCIsImFuZHJvaWRQZW5kaW5nRGlmZnMiLCJnZXQiLCJhbmRyb2lkU2NoZWR1bGVGbHVzaCIsIl9FRElUT1JfVE9fU0NIRURVTEVfRiIsImJsdXIiLCJlbCIsInRvRE9NTm9kZSIsImZpbmREb2N1bWVudE9yU2hhZG93Um9vdCIsInNldCIsImRlc2VsZWN0Iiwic2VsZWN0aW9uIiwiZG9tU2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsInJlbW92ZUFsbFJhbmdlcyIsImltcG9ydF9zbGF0ZSIsIlRyYW5zZm9ybXMiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50IiwiU2hhZG93Um9vdCIsImZpbmRFdmVudFJhbmdlIiwibmF0aXZlRXZlbnQiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ5IiwiRXJyb3IiLCJ0b1NsYXRlTm9kZSIsInBhdGgiLCJmaW5kUGF0aCIsImlzRWxlbWVudCIsIkVkaXRvciIsImlzVm9pZCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpc1ByZXYiLCJpc0lubGluZSIsImxlZnQiLCJ3aWR0aCIsInRvcCIsImhlaWdodCIsImVkZ2UiLCJwb2ludCIsImJlZm9yZSIsImFmdGVyIiwiX3JhbmdlIiwicmFuZ2UiLCJkb21SYW5nZSIsImNhcmV0UmFuZ2VGcm9tUG9pbnQiLCJwb3NpdGlvbiIsImNhcmV0UG9zaXRpb25Gcm9tUG9pbnQiLCJjcmVhdGVSYW5nZSIsInNldFN0YXJ0Iiwib2Zmc2V0Tm9kZSIsInNldEVuZCIsInRvU2xhdGVSYW5nZSIsImV4YWN0TWF0Y2giLCJzdXBwcmVzc1Rocm93IiwiZmluZEtleSIsImlzRWRpdG9yIiwidW5zaGlmdCIsIlNjcnViYmVyIiwic3RyaW5naWZ5IiwiZm9jdXMiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwicmV0cmllcyIsIm9wZXJhdGlvbnMiLCJzZXRUaW1lb3V0IiwidG9ET01SYW5nZSIsImFkZFJhbmdlIiwic2VsZWN0Iiwic3RhcnQiLCJwcmV2ZW50U2Nyb2xsIiwiZWRpdG9yRWwiLCJ0YXJnZXRFbCIsInBhcmVudEVsZW1lbnQiLCJlcnIiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJjbG9zZXN0IiwiaXNDb250ZW50RWRpdGFibGUiLCJoYXNFZGl0YWJsZVRhcmdldCIsImhhc1JhbmdlIiwiYW5jaG9yIiwiZm9jdXMyIiwiaGFzUGF0aCIsImhhc1NlbGVjdGFibGVUYXJnZXQiLCJpc1RhcmdldEluc2lkZU5vblJlYWRvbmx5Vm9pZCIsImhhc1RhcmdldCIsImluc2VydERhdGEiLCJkYXRhIiwiaW5zZXJ0RnJhZ21lbnREYXRhIiwiaW5zZXJ0VGV4dERhdGEiLCJpc0NvbXBvc2luZyIsImlzRm9jdXNlZCIsImlzUmVhZE9ubHkiLCJzbGF0ZU5vZGUiLCJzZXRGcmFnbWVudERhdGEiLCJvcmlnaW5FdmVudCIsIktFWV9UT19FTEVNRU5UIiwidG9ET01Qb2ludCIsInZvaWQiLCJhdCIsInNlbGVjdG9yIiwidGV4dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ciIsInRydWVMZW5ndGgiLCJlbmQiLCJuZXh0VGV4dCIsImhhc0F0dHJpYnV0ZSIsIl9uZXh0VGV4dCR0ZXh0Q29udGVudCIsImRvbVRleHQiLCJzdGFydHNXaXRoIiwiTWF0aCIsIm1pbiIsIm1heCIsImlzQmFja3dhcmQiLCJkb21BbmNob3IiLCJkb21Gb2N1cyIsImlzQ29sbGFwc2VkIiwic3RhcnROb2RlIiwic3RhcnRPZmZzZXQiLCJlbmROb2RlIiwiZW5kT2Zmc2V0Iiwic3RhcnRFbCIsImlzU3RhcnRBdFplcm9XaWR0aCIsImVuZEVsIiwiaXNFbmRBdFplcm9XaWR0aCIsImRvbUVsIiwidG9TbGF0ZVBvaW50Iiwic2VhcmNoRGlyZWN0aW9uIiwibmVhcmVzdE5vZGUiLCJuZWFyZXN0T2Zmc2V0IiwidGV4dE5vZGUiLCJfZG9tTm9kZSR0ZXh0Q29udGVudCIsIl9kb21Ob2RlJHRleHRDb250ZW50MiIsInBvdGVudGlhbFZvaWROb2RlIiwidm9pZE5vZGUiLCJwb3RlbnRpYWxOb25FZGl0YWJsZU5vZGUiLCJub25FZGl0YWJsZU5vZGUiLCJsZWFmTm9kZSIsImNvbnRlbnRzIiwiY2xvbmVDb250ZW50cyIsInJlbW92YWxzIiwic2xpY2UiLCJmb3JFYWNoIiwidGV4dENvbnRleHQiLCJyZW1vdmVDaGlsZCIsImxlYWZOb2RlcyIsImN1cnJlbnQiLCJnZXRMZWFmTm9kZXMiLCJub2RlMiIsImVsZW1lbnROb2RlIiwiX2xlYWZOb2RlcyRmaW5kTGFzdCIsIl9sZWFmTm9kZXMiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiZmluZExhc3QiLCJsZWFmIiwiX2xlYWZOb2RlczIkZmluZCIsIl9sZWFmTm9kZXMyIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZW5kc1dpdGgiLCJfc2xhdGVOb2RlIiwiX3BhdGgiLCJfb2Zmc2V0IiwicXVlcnlTZWxlY3RvciIsIl9mb2N1c05vZGUkdGV4dENvbnRlbiIsInN0YXJ0Q29udGFpbmVyIiwiYW5jaG9yT2Zmc2V0IiwiZm9jdXNOb2RlIiwiZm9jdXNPZmZzZXQiLCJmaXJzdFJhbmdlIiwiZ2V0UmFuZ2VBdCIsImxhc3RSYW5nZSIsIkhUTUxUYWJsZVJvd0VsZW1lbnQiLCJnZXRMYXN0Q2hpbGRyZW4iLCJlbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZHJlbiIsImZpcnN0Tm9kZVJvdyIsImxhc3ROb2RlUm93IiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJIVE1MRWxlbWVudCIsImlubmVySFRNTCIsImVuZENvbnRhaW5lciIsImNvbGxhcHNlZCIsImZvY3VzQmVmb3JlQW5jaG9yIiwiaXNFeHBhbmRlZCIsImlzRm9yd2FyZCIsIm1vZGUiLCJ1bmhhbmdSYW5nZSIsInZvaWRzIiwidGV4dERpZmYiLCJkaWZmIiwiaXNUZXh0IiwibmV4dFBhdGgiLCJQYXRoIiwibmV4dCIsIm5leHROb2RlIiwiX2xlbiIsImRpZmZzIiwiX2tleSIsInJlZHVjZSIsInRleHQyIiwibG9uZ2VzdENvbW1vblByZWZpeExlbmd0aCIsInN0ciIsImFub3RoZXIiLCJjaGFyQXQiLCJsb25nZXN0Q29tbW9uU3VmZml4TGVuZ3RoIiwidGFyZ2V0VGV4dCIsInJlbW92ZWRUZXh0IiwicHJlZml4TGVuZ3RoIiwic3VmZml4TGVuZ3RoIiwibm9ybWFsaXplZCIsImEiLCJiIiwib3ZlcmxhcCIsImFwcGxpZWQiLCJzbGljZUVuZCIsInBhcmVudEJsb2NrIiwiYWJvdmUiLCJuMiIsImlzQmxvY2siLCJlbnRyeSIsImlzRGVzY2VuZGFudCIsInRyYW5zZm9ybVBlbmRpbmdQb2ludCIsIm9wIiwicGVuZGluZ0RpZmZzIiwiZXF1YWxzIiwiUG9pbnQiLCJ0cmFuc2Zvcm0iLCJhZmZpbml0eSIsIl9hbmNob3IiLCJfdHJhbnNmb3JtZWQiLCJ0cmFuc2Zvcm1lZCIsInR5cGUiLCJ0cmFuc2Zvcm1QZW5kaW5nUmFuZ2UiLCJ0cmFuc2Zvcm1UZXh0RGlmZiIsIm5ld1BhdGgiLCJkb1JlY3RzSW50ZXJzZWN0IiwiY29tcGFyZVJlY3QiLCJtaWRkbGUiLCJib3R0b20iLCJhcmVSYW5nZXNTYW1lTGluZSIsInJhbmdlMSIsInJhbmdlMiIsInJlY3QxIiwicmVjdDIiLCJmaW5kQ3VycmVudExpbmVSYW5nZSIsInBhcmVudFJhbmdlIiwicGFyZW50UmFuZ2VCb3VuZGFyeSIsInBvc2l0aW9ucyIsInJpZ2h0IiwiZmxvb3IiLCJ3aXRoRE9NMiIsImNsaXBib2FyZEZvcm1hdEtleSIsImUiLCJhcHBseSIsIm9uQ2hhbmdlIiwiZGVsZXRlQmFja3dhcmQiLCJhZGRNYXJrIiwicmVtb3ZlTWFyayIsIl9FRElUT1JfVE9fUEVORElOR19ESSIsImRlbGV0ZSIsIl9FRElUT1JfVE9fUEVORElOR19ESTIiLCJ1bml0IiwicGFyZW50QmxvY2tFbnRyeSIsInBhcmVudEJsb2NrUGF0aCIsInBhcmVudEVsZW1lbnRSYW5nZSIsImN1cnJlbnRMaW5lUmFuZ2UiLCJwYXRoUmVmTWF0Y2hlcyIsIm1hcCIsImZpbHRlciIsInBlbmRpbmdTZWxlY3Rpb24iLCJwZW5kaW5nQWN0aW9uIiwiaXNQb2ludCIsIl9vYmplY3RTcHJlYWQkMSIsInB1c2giLCJnZXRNYXRjaGVzIiwiX0VESVRPUl9UT19VU0VSX1NFTEVDIiwidW5yZWYiLCJwcmV2UGF0aCIsInByZXZpb3VzIiwiY29tbW9uUGF0aCIsImNvbW1vbiIsImNoYW5nZWRQYXRoIiwiY2hhbmdlZE5vZGUiLCJjaGFuZ2VkTm9kZUtleSIsImNoYW5nZWRQYXRoUmVmIiwicGF0aFJlZiIsImVkZ2VzIiwic3RhcnRWb2lkIiwiZW5kVm9pZCIsImF0dGFjaCIsInRyaW0iLCJyIiwiY2xvbmVSYW5nZSIsInNldEVuZEFmdGVyIiwienciLCJpc05ld2xpbmUiLCJzcGFuIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwiYXBwZW5kQ2hpbGQiLCJnZXRGcmFnbWVudCIsInN0cmluZyIsIkpTT04iLCJlbmNvZGVkIiwiYnRvYSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNldEF0dHJpYnV0ZSIsInNldERhdGEiLCJkaXYiLCJib2R5IiwiZGVjb2RlZCIsImRlY29kZVVSSUNvbXBvbmVudCIsImF0b2IiLCJwYXJzZWQiLCJwYXJzZSIsImluc2VydEZyYWdtZW50IiwibGluZXMiLCJzcGxpdCIsImxpbmUiLCJzcGxpdE5vZGVzIiwiYWx3YXlzIiwiaW5zZXJ0VGV4dCIsIm9uQ29udGV4dENoYW5nZSIsInAiLCJsZXZlbHMiLCJIT1RLRVlTIiwiYm9sZCIsImNvbXBvc2UiLCJtb3ZlQmFja3dhcmQiLCJtb3ZlRm9yd2FyZCIsIm1vdmVXb3JkQmFja3dhcmQiLCJtb3ZlV29yZEZvcndhcmQiLCJkZWxldGVGb3J3YXJkIiwiZXh0ZW5kQmFja3dhcmQiLCJleHRlbmRGb3J3YXJkIiwiaXRhbGljIiwiaW5zZXJ0U29mdEJyZWFrIiwic3BsaXRCbG9jayIsInVuZG8iLCJBUFBMRV9IT1RLRVlTIiwibW92ZUxpbmVCYWNrd2FyZCIsIm1vdmVMaW5lRm9yd2FyZCIsImRlbGV0ZUxpbmVCYWNrd2FyZCIsImRlbGV0ZUxpbmVGb3J3YXJkIiwiZGVsZXRlV29yZEJhY2t3YXJkIiwiZGVsZXRlV29yZEZvcndhcmQiLCJleHRlbmRMaW5lQmFja3dhcmQiLCJleHRlbmRMaW5lRm9yd2FyZCIsInJlZG8iLCJ0cmFuc3Bvc2VDaGFyYWN0ZXIiLCJXSU5ET1dTX0hPVEtFWVMiLCJjcmVhdGUiLCJnZW5lcmljIiwiYXBwbGUiLCJ3aW5kb3dzIiwiaXNHZW5lcmljIiwiaW1wb3J0X2lzX2hvdGtleSIsImlzSG90a2V5IiwiaXNBcHBsZSIsImlzV2luZG93cyIsImlzQm9sZCIsImlzQ29tcG9zZSIsImlzTW92ZUJhY2t3YXJkIiwiaXNNb3ZlRm9yd2FyZCIsImlzRGVsZXRlQmFja3dhcmQiLCJpc0RlbGV0ZUZvcndhcmQiLCJpc0RlbGV0ZUxpbmVCYWNrd2FyZCIsImlzRGVsZXRlTGluZUZvcndhcmQiLCJpc0RlbGV0ZVdvcmRCYWNrd2FyZCIsImlzRGVsZXRlV29yZEZvcndhcmQiLCJpc0V4dGVuZEJhY2t3YXJkIiwiaXNFeHRlbmRGb3J3YXJkIiwiaXNFeHRlbmRMaW5lQmFja3dhcmQiLCJpc0V4dGVuZExpbmVGb3J3YXJkIiwiaXNJdGFsaWMiLCJpc01vdmVMaW5lQmFja3dhcmQiLCJpc01vdmVMaW5lRm9yd2FyZCIsImlzTW92ZVdvcmRCYWNrd2FyZCIsImlzTW92ZVdvcmRGb3J3YXJkIiwiaXNSZWRvIiwiaXNTb2Z0QnJlYWsiLCJpc1NwbGl0QmxvY2siLCJpc1RyYW5zcG9zZUNoYXJhY3RlciIsImlzVW5kbyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwia2V5cyIsImluZGV4T2YiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJzaGFsbG93Q29tcGFyZSIsIm9iajEiLCJvYmoyIiwiZXZlcnkiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRGVjb3JhdGlvbkZsYWdzRXF1YWwiLCJvdGhlciIsInJhbmdlT3duUHJvcHMiLCJfZXhjbHVkZWQiLCJvdGhlck93blByb3BzIiwiX2V4Y2x1ZGVkMiIsImxpc3QiLCJkZWNvcmF0aW9ucyIsImRlY29yYXRpb25zQnlDaGlsZCIsImxldmVsIiwiYW5jZXN0b3JSYW5nZSIsImNhY2hlZENoaWxkUmFuZ2VzIiwiZ2V0Q2hpbGRSYW5nZSIsImNhY2hlZFJhbmdlIiwiY2hpbGRSYW5nZTIiLCJkZWNvcmF0aW9uIiwiZGVjb3JhdGlvblJhbmdlIiwiaW50ZXJzZWN0aW9uIiwic3RhcnRQb2ludCIsImVuZFBvaW50Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiZHMiLCJjaGlsZFJhbmdlIiwiY2hpbGREZWNvcmF0aW9uUmFuZ2UiLCJfb2JqZWN0U3ByZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLG1CQUFBLEVBQUFBLENBQUEsS0FBQUEsbUJBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLGlDQUFBLEVBQUFBLENBQUEsS0FBQUEsaUNBQUE7RUFBQUMsMkJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwyQkFBQTtFQUFBQyw2QkFBQSxFQUFBQSxDQUFBLEtBQUFBLDZCQUFBO0VBQUFDLHdCQUFBLEVBQUFBLENBQUEsS0FBQUEsd0JBQUE7RUFBQUMsb0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxvQkFBQTtFQUFBQyx3QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHdCQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsd0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSx3QkFBQTtFQUFBQyxPQUFBLEVBQUFBLENBQUEsS0FBQUMsT0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxpQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGlCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyx1QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHVCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGtCQUFBLEVBQUFBLENBQUEsS0FBQUEsa0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyxjQUFBLEVBQUFBLENBQUEsS0FBQUEsY0FBQTtFQUFBQyxZQUFB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