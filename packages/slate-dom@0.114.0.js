System.register(["is-plain-object@5.0.0","immer@10.1.1","slate@0.114.0","is-hotkey@0.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["is-plain-object","5.0.0"],["immer","10.1.1"],["slate","0.114.0"],["is-hotkey","0.2.0"],["slate-dom","0.114.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('is-plain-object@5.0.0', dep), dep => dependencies.set('immer@10.1.1', dep), dep => dependencies.set('slate@0.114.0', dep), dep => dependencies.set('is-hotkey@0.2.0', dep)],
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

// .beyond/uimport/slate-dom.0.114.0.js
var slate_dom_0_114_0_exports = {};
__export(slate_dom_0_114_0_exports, {
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
  targetRange: () => targetRange,
  verifyDiffState: () => verifyDiffState,
  withDOM: () => withDOM
});
module.exports = __toCommonJS(slate_dom_0_114_0_exports);

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
var IS_WECHATBROWSER = typeof navigator !== "undefined" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent);
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
      searchDirection = "backward"
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
        if (searchDirection === "forward") {
          var _leafNodes$find;
          var _leafNodes = [...getLeafNodes(elementNode), ...getLeafNodes(elementNode === null || elementNode === void 0 ? void 0 : elementNode.nextElementSibling)];
          leafNode = (_leafNodes$find = _leafNodes.find(leaf => isAfter(nonEditableNode, leaf))) !== null && _leafNodes$find !== void 0 ? _leafNodes$find : null;
        } else {
          var _leafNodes2$findLast;
          var _leafNodes2 = [...getLeafNodes(elementNode === null || elementNode === void 0 ? void 0 : elementNode.previousElementSibling), ...getLeafNodes(elementNode)];
          leafNode = (_leafNodes2$findLast = _leafNodes2.findLast(leaf => isBefore(nonEditableNode, leaf))) !== null && _leafNodes2$findLast !== void 0 ? _leafNodes2$findLast : null;
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
      EDITOR_TO_PENDING_ACTION.set(e, at ? _objectSpread(_objectSpread({}, pendingAction), {}, {
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
var shallowCompare = (obj1, obj2) => Object.keys(obj1).length === Object.keys(obj2).length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
var isDecorationFlagsEqual = (range, other) => {
  var rangeOwnProps = _objectWithoutProperties(range, _excluded);
  var otherOwnProps = _objectWithoutProperties(other, _excluded2);
  return range[PLACEHOLDER_SYMBOL] === other[PLACEHOLDER_SYMBOL] && shallowCompare(rangeOwnProps, otherOwnProps);
};
var isElementDecorationsEqual = (list, another) => {
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zbGF0ZS1kb20uMC4xMTQuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2RvbS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2Vudmlyb25tZW50LnRzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy91dGlscy9rZXkudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy91dGlscy93ZWFrLW1hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy9wbHVnaW4vZG9tLWVkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2RpZmYtdGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2xpbmVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvcGx1Z2luL3dpdGgtZG9tLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvaG90a2V5cy50cyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL3JhbmdlLWxpc3QudHMiXSwibmFtZXMiOlsic2xhdGVfZG9tXzBfMTE0XzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ0FOX1VTRV9ET00iLCJET01FZGl0b3IiLCJET01FbGVtZW50IiwiRE9NTm9kZSIsIkRPTVJhbmdlIiwiRE9NU2VsZWN0aW9uIiwiRE9NU3RhdGljUmFuZ2UiLCJET01UZXh0IiwiRURJVE9SX1RPX0VMRU1FTlQiLCJFRElUT1JfVE9fRk9SQ0VfUkVOREVSIiwiRURJVE9SX1RPX0tFWV9UT19FTEVNRU5UIiwiRURJVE9SX1RPX09OX0NIQU5HRSIsIkVESVRPUl9UT19QRU5ESU5HX0FDVElPTiIsIkVESVRPUl9UT19QRU5ESU5HX0RJRkZTIiwiRURJVE9SX1RPX1BFTkRJTkdfSU5TRVJUSU9OX01BUktTIiwiRURJVE9SX1RPX1BFTkRJTkdfU0VMRUNUSU9OIiwiRURJVE9SX1RPX1BMQUNFSE9MREVSX0VMRU1FTlQiLCJFRElUT1JfVE9fU0NIRURVTEVfRkxVU0giLCJFRElUT1JfVE9fVVNFUl9NQVJLUyIsIkVESVRPUl9UT19VU0VSX1NFTEVDVElPTiIsIkVESVRPUl9UT19XSU5ET1ciLCJFTEVNRU5UX1RPX05PREUiLCJIQVNfQkVGT1JFX0lOUFVUX1NVUFBPUlQiLCJIb3RrZXlzIiwiaG90a2V5cyIsIklTX0FORFJPSUQiLCJJU19DSFJPTUUiLCJJU19DT01QT1NJTkciLCJJU19GSVJFRk9YIiwiSVNfRklSRUZPWF9MRUdBQ1kiLCJJU19GT0NVU0VEIiwiSVNfSU9TIiwiSVNfTk9ERV9NQVBfRElSVFkiLCJJU19SRUFEX09OTFkiLCJJU19VQ19NT0JJTEUiLCJJU19XRUJLSVQiLCJJU19XRUNIQVRCUk9XU0VSIiwiS2V5IiwiTUFSS19QTEFDRUhPTERFUl9TWU1CT0wiLCJOT0RFX1RPX0VMRU1FTlQiLCJOT0RFX1RPX0lOREVYIiwiTk9ERV9UT19LRVkiLCJOT0RFX1RPX1BBUkVOVCIsIlBMQUNFSE9MREVSX1NZTUJPTCIsIlRSSVBMRV9DTElDSyIsImFwcGx5U3RyaW5nRGlmZiIsImdldEFjdGl2ZUVsZW1lbnQiLCJnZXREZWZhdWx0VmlldyIsImdldFNlbGVjdGlvbiIsImhhc1NoYWRvd1Jvb3QiLCJpc0FmdGVyIiwiaXNCZWZvcmUiLCJpc0RPTUVsZW1lbnQiLCJpc0RPTU5vZGUiLCJpc0RPTVNlbGVjdGlvbiIsImlzRWxlbWVudERlY29yYXRpb25zRXF1YWwiLCJpc1BsYWluVGV4dE9ubHlQYXN0ZSIsImlzVGV4dERlY29yYXRpb25zRXF1YWwiLCJpc1RyYWNrZWRNdXRhdGlvbiIsIm1lcmdlU3RyaW5nRGlmZnMiLCJub3JtYWxpemVET01Qb2ludCIsIm5vcm1hbGl6ZVBvaW50Iiwibm9ybWFsaXplUmFuZ2UiLCJub3JtYWxpemVTdHJpbmdEaWZmIiwidGFyZ2V0UmFuZ2UiLCJ2ZXJpZnlEaWZmU3RhdGUiLCJ3aXRoRE9NIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImdsb2JhbFRoaXMiLCJOb2RlIiwiRWxlbWVudCIsIlRleHQiLCJSYW5nZSIsIlNlbGVjdGlvbiIsIlN0YXRpY1JhbmdlIiwidmFsdWUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJpc0RPTUNvbW1lbnQiLCJub2RlVHlwZSIsIndpbmRvdzIiLCJhbmNob3JOb2RlIiwiaXNET01UZXh0IiwiZXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsInR5cGVzIiwibGVuZ3RoIiwiZG9tUG9pbnQiLCJub2RlIiwib2Zmc2V0IiwiY2hpbGROb2RlcyIsImlzTGFzdCIsImluZGV4IiwiZ2V0RWRpdGFibGVDaGlsZEFuZEluZGV4IiwiaSIsImdldEVkaXRhYmxlQ2hpbGQiLCJ0ZXh0Q29udGVudCIsInBhcmVudCIsInBhcmVudE5vZGUiLCJ0b1N0cmluZyIsImRpcmVjdGlvbiIsImNoaWxkIiwidHJpZWRGb3J3YXJkIiwidHJpZWRCYWNrd2FyZCIsImdldEF0dHJpYnV0ZSIsImdldFBsYWluVGV4dCIsImRvbU5vZGUiLCJ0ZXh0Iiwibm9kZVZhbHVlIiwiY2hpbGROb2RlIiwiQXJyYXkiLCJmcm9tIiwiZGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidGFnTmFtZSIsImNhdGNoU2xhdGVGcmFnbWVudCIsImdldFNsYXRlRnJhZ21lbnRBdHRyaWJ1dGUiLCJkYXRhVHJhbnNmZXIiLCJodG1sRGF0YSIsImZyYWdtZW50IiwibWF0Y2giLCJyb290IiwiZG9jdW1lbnQiLCJlZGl0b3IiLCJtdXRhdGlvbiIsImJhdGNoIiwidGFyZ2V0IiwibWF0Y2hlcyIsImRvY3VtZW50MiIsImdldFdpbmRvdyIsImNvbnRhaW5zIiwiaGFzRE9NTm9kZSIsImVkaXRhYmxlIiwicGFyZW50TXV0YXRpb24iLCJmaW5kIiwiX3JlZiIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJfbm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJfYWN0aXZlRWxlbWVudCIsInNoYWRvd1Jvb3QiLCJfYWN0aXZlRWxlbWVudCRzaGFkb3ciLCJfYWN0aXZlRWxlbWVudDIiLCJvdGhlck5vZGUiLCJCb29sZWFuIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkciLCJET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkciLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJ0ZXN0IiwidXNlckFnZW50IiwiTVNTdHJlYW0iLCJJU19BUFBMRSIsIklTX0VER0VfTEVHQUNZIiwiSVNfQ0hST01FX0xFR0FDWSIsIklTX0FORFJPSURfQ0hST01FX0xFR0FDWSIsImNyZWF0ZUVsZW1lbnQiLCJfbmF2aWdhdG9yJHVzZXJBZ2VudCQiLCJwYXJzZUludCIsIl9uYXZpZ2F0b3IkdXNlckFnZW50JDIiLCJJbnB1dEV2ZW50IiwicHJvdG90eXBlIiwiZ2V0VGFyZ2V0UmFuZ2VzIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsIm8yIiwiY29uc3RydWN0b3IiLCJfdG9QcmltaXRpdmUiLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX3RvUHJvcGVydHlLZXkiLCJhcmciLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIm4iLCJpZCIsImNvbmNhdCIsIldlYWtNYXAiLCJhbmRyb2lkUGVuZGluZ0RpZmZzIiwiZ2V0IiwiYW5kcm9pZFNjaGVkdWxlRmx1c2giLCJfRURJVE9SX1RPX1NDSEVEVUxFX0YiLCJibHVyIiwiZWwiLCJ0b0RPTU5vZGUiLCJmaW5kRG9jdW1lbnRPclNoYWRvd1Jvb3QiLCJzZXQiLCJkZXNlbGVjdCIsInNlbGVjdGlvbiIsImRvbVNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJyZW1vdmVBbGxSYW5nZXMiLCJpbXBvcnRfc2xhdGUiLCJUcmFuc2Zvcm1zIiwiZ2V0Um9vdE5vZGUiLCJEb2N1bWVudCIsIlNoYWRvd1Jvb3QiLCJmaW5kRXZlbnRSYW5nZSIsIm5hdGl2ZUV2ZW50IiwiY2xpZW50WCIsIngiLCJjbGllbnRZIiwieSIsIkVycm9yIiwidG9TbGF0ZU5vZGUiLCJwYXRoIiwiZmluZFBhdGgiLCJpc0VsZW1lbnQiLCJFZGl0b3IiLCJpc1ZvaWQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNQcmV2IiwiaXNJbmxpbmUiLCJsZWZ0Iiwid2lkdGgiLCJ0b3AiLCJoZWlnaHQiLCJlZGdlIiwicG9pbnQiLCJiZWZvcmUiLCJhZnRlciIsIl9yYW5nZSIsInJhbmdlIiwiZG9tUmFuZ2UiLCJjYXJldFJhbmdlRnJvbVBvaW50IiwicG9zaXRpb24iLCJjYXJldFBvc2l0aW9uRnJvbVBvaW50IiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsIm9mZnNldE5vZGUiLCJzZXRFbmQiLCJ0b1NsYXRlUmFuZ2UiLCJleGFjdE1hdGNoIiwic3VwcHJlc3NUaHJvdyIsImZpbmRLZXkiLCJpc0VkaXRvciIsInVuc2hpZnQiLCJTY3J1YmJlciIsInN0cmluZ2lmeSIsImZvY3VzIiwib3B0aW9ucyIsImFyZ3VtZW50cyIsInJldHJpZXMiLCJvcGVyYXRpb25zIiwic2V0VGltZW91dCIsInRvRE9NUmFuZ2UiLCJhZGRSYW5nZSIsInNlbGVjdCIsInN0YXJ0IiwicHJldmVudFNjcm9sbCIsImVkaXRvckVsIiwidGFyZ2V0RWwiLCJwYXJlbnRFbGVtZW50IiwiZXJyIiwibWVzc2FnZSIsImluY2x1ZGVzIiwiY2xvc2VzdCIsImlzQ29udGVudEVkaXRhYmxlIiwiaGFzRWRpdGFibGVUYXJnZXQiLCJoYXNSYW5nZSIsImFuY2hvciIsImZvY3VzMiIsImhhc1BhdGgiLCJoYXNTZWxlY3RhYmxlVGFyZ2V0IiwiaXNUYXJnZXRJbnNpZGVOb25SZWFkb25seVZvaWQiLCJoYXNUYXJnZXQiLCJpbnNlcnREYXRhIiwiZGF0YSIsImluc2VydEZyYWdtZW50RGF0YSIsImluc2VydFRleHREYXRhIiwiaXNDb21wb3NpbmciLCJpc0ZvY3VzZWQiLCJpc1JlYWRPbmx5Iiwic2xhdGVOb2RlIiwic2V0RnJhZ21lbnREYXRhIiwib3JpZ2luRXZlbnQiLCJLRVlfVE9fRUxFTUVOVCIsInRvRE9NUG9pbnQiLCJ2b2lkIiwiYXQiLCJzZWxlY3RvciIsInRleHRzIiwicXVlcnlTZWxlY3RvckFsbCIsImF0dHIiLCJ0cnVlTGVuZ3RoIiwiZW5kIiwibmV4dFRleHQiLCJoYXNBdHRyaWJ1dGUiLCJfbmV4dFRleHQkdGV4dENvbnRlbnQiLCJkb21UZXh0Iiwic3RhcnRzV2l0aCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJpc0JhY2t3YXJkIiwiZG9tQW5jaG9yIiwiZG9tRm9jdXMiLCJpc0NvbGxhcHNlZCIsInN0YXJ0Tm9kZSIsInN0YXJ0T2Zmc2V0IiwiZW5kTm9kZSIsImVuZE9mZnNldCIsInN0YXJ0RWwiLCJpc1N0YXJ0QXRaZXJvV2lkdGgiLCJlbmRFbCIsImlzRW5kQXRaZXJvV2lkdGgiLCJkb21FbCIsInRvU2xhdGVQb2ludCIsInNlYXJjaERpcmVjdGlvbiIsIm5lYXJlc3ROb2RlIiwibmVhcmVzdE9mZnNldCIsInRleHROb2RlIiwiX2RvbU5vZGUkdGV4dENvbnRlbnQiLCJfZG9tTm9kZSR0ZXh0Q29udGVudDIiLCJwb3RlbnRpYWxWb2lkTm9kZSIsInZvaWROb2RlIiwicG90ZW50aWFsTm9uRWRpdGFibGVOb2RlIiwibm9uRWRpdGFibGVOb2RlIiwibGVhZk5vZGUiLCJjb250ZW50cyIsImNsb25lQ29udGVudHMiLCJyZW1vdmFscyIsInNsaWNlIiwiZm9yRWFjaCIsInRleHRDb250ZXh0IiwicmVtb3ZlQ2hpbGQiLCJsZWFmTm9kZXMiLCJjdXJyZW50IiwiZ2V0TGVhZk5vZGVzIiwibm9kZTIiLCJlbGVtZW50Tm9kZSIsIl9sZWFmTm9kZXMkZmluZCIsIl9sZWFmTm9kZXMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsZWFmIiwiX2xlYWZOb2RlczIkZmluZExhc3QiLCJfbGVhZk5vZGVzMiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJmaW5kTGFzdCIsImVuZHNXaXRoIiwiX3NsYXRlTm9kZSIsIl9wYXRoIiwiX29mZnNldCIsInF1ZXJ5U2VsZWN0b3IiLCJfZm9jdXNOb2RlJHRleHRDb250ZW4iLCJzdGFydENvbnRhaW5lciIsImFuY2hvck9mZnNldCIsImZvY3VzTm9kZSIsImZvY3VzT2Zmc2V0IiwiZmlyc3RSYW5nZSIsImdldFJhbmdlQXQiLCJsYXN0UmFuZ2UiLCJIVE1MVGFibGVSb3dFbGVtZW50IiwiZ2V0TGFzdENoaWxkcmVuIiwiZWxlbWVudCIsImNoaWxkRWxlbWVudENvdW50IiwiY2hpbGRyZW4iLCJmaXJzdE5vZGVSb3ciLCJsYXN0Tm9kZVJvdyIsImZpcnN0Tm9kZSIsImxhc3ROb2RlIiwiSFRNTEVsZW1lbnQiLCJpbm5lckhUTUwiLCJlbmRDb250YWluZXIiLCJjb2xsYXBzZWQiLCJmb2N1c0JlZm9yZUFuY2hvciIsImlzRXhwYW5kZWQiLCJpc0ZvcndhcmQiLCJtb2RlIiwidW5oYW5nUmFuZ2UiLCJ2b2lkcyIsInRleHREaWZmIiwiZGlmZiIsImlzVGV4dCIsIm5leHRQYXRoIiwiUGF0aCIsIm5leHQiLCJuZXh0Tm9kZSIsIl9sZW4iLCJkaWZmcyIsIl9rZXkiLCJyZWR1Y2UiLCJ0ZXh0MiIsImxvbmdlc3RDb21tb25QcmVmaXhMZW5ndGgiLCJzdHIiLCJhbm90aGVyIiwiY2hhckF0IiwibG9uZ2VzdENvbW1vblN1ZmZpeExlbmd0aCIsInRhcmdldFRleHQiLCJyZW1vdmVkVGV4dCIsInByZWZpeExlbmd0aCIsInN1ZmZpeExlbmd0aCIsIm5vcm1hbGl6ZWQiLCJhIiwiYiIsIm92ZXJsYXAiLCJhcHBsaWVkIiwic2xpY2VFbmQiLCJwYXJlbnRCbG9jayIsImFib3ZlIiwibjIiLCJpc0Jsb2NrIiwiZW50cnkiLCJpc0Rlc2NlbmRhbnQiLCJ0cmFuc2Zvcm1QZW5kaW5nUG9pbnQiLCJvcCIsInBlbmRpbmdEaWZmcyIsImVxdWFscyIsIlBvaW50IiwidHJhbnNmb3JtIiwiYWZmaW5pdHkiLCJfYW5jaG9yIiwiX3RyYW5zZm9ybWVkIiwidHJhbnNmb3JtZWQiLCJ0eXBlIiwidHJhbnNmb3JtUGVuZGluZ1JhbmdlIiwidHJhbnNmb3JtVGV4dERpZmYiLCJuZXdQYXRoIiwiZG9SZWN0c0ludGVyc2VjdCIsImNvbXBhcmVSZWN0IiwibWlkZGxlIiwiYm90dG9tIiwiYXJlUmFuZ2VzU2FtZUxpbmUiLCJyYW5nZTEiLCJyYW5nZTIiLCJyZWN0MSIsInJlY3QyIiwiZmluZEN1cnJlbnRMaW5lUmFuZ2UiLCJwYXJlbnRSYW5nZSIsInBhcmVudFJhbmdlQm91bmRhcnkiLCJwb3NpdGlvbnMiLCJyaWdodCIsImZsb29yIiwid2l0aERPTTIiLCJjbGlwYm9hcmRGb3JtYXRLZXkiLCJlIiwiYXBwbHkiLCJvbkNoYW5nZSIsImRlbGV0ZUJhY2t3YXJkIiwiYWRkTWFyayIsInJlbW92ZU1hcmsiLCJfRURJVE9SX1RPX1BFTkRJTkdfREkiLCJkZWxldGUiLCJfRURJVE9SX1RPX1BFTkRJTkdfREkyIiwidW5pdCIsInBhcmVudEJsb2NrRW50cnkiLCJwYXJlbnRCbG9ja1BhdGgiLCJwYXJlbnRFbGVtZW50UmFuZ2UiLCJjdXJyZW50TGluZVJhbmdlIiwicGF0aFJlZk1hdGNoZXMiLCJtYXAiLCJmaWx0ZXIiLCJwZW5kaW5nU2VsZWN0aW9uIiwicGVuZGluZ0FjdGlvbiIsImlzUG9pbnQiLCJfb2JqZWN0U3ByZWFkIiwicHVzaCIsImdldE1hdGNoZXMiLCJfRURJVE9SX1RPX1VTRVJfU0VMRUMiLCJ1bnJlZiIsInByZXZQYXRoIiwicHJldmlvdXMiLCJjb21tb25QYXRoIiwiY29tbW9uIiwiY2hhbmdlZFBhdGgiLCJjaGFuZ2VkTm9kZSIsImNoYW5nZWROb2RlS2V5IiwiY2hhbmdlZFBhdGhSZWYiLCJwYXRoUmVmIiwiZWRnZXMiLCJzdGFydFZvaWQiLCJlbmRWb2lkIiwiYXR0YWNoIiwidHJpbSIsInIiLCJjbG9uZVJhbmdlIiwic2V0RW5kQWZ0ZXIiLCJ6dyIsImlzTmV3bGluZSIsInNwYW4iLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJhcHBlbmRDaGlsZCIsImdldEZyYWdtZW50Iiwic3RyaW5nIiwiSlNPTiIsImVuY29kZWQiLCJidG9hIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2V0QXR0cmlidXRlIiwic2V0RGF0YSIsImRpdiIsImJvZHkiLCJkZWNvZGVkIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiYXRvYiIsInBhcnNlZCIsInBhcnNlIiwiaW5zZXJ0RnJhZ21lbnQiLCJsaW5lcyIsInNwbGl0IiwibGluZSIsInNwbGl0Tm9kZXMiLCJhbHdheXMiLCJpbnNlcnRUZXh0Iiwib25Db250ZXh0Q2hhbmdlIiwicCIsImxldmVscyIsIkhPVEtFWVMiLCJib2xkIiwiY29tcG9zZSIsIm1vdmVCYWNrd2FyZCIsIm1vdmVGb3J3YXJkIiwibW92ZVdvcmRCYWNrd2FyZCIsIm1vdmVXb3JkRm9yd2FyZCIsImRlbGV0ZUZvcndhcmQiLCJleHRlbmRCYWNrd2FyZCIsImV4dGVuZEZvcndhcmQiLCJpdGFsaWMiLCJpbnNlcnRTb2Z0QnJlYWsiLCJzcGxpdEJsb2NrIiwidW5kbyIsIkFQUExFX0hPVEtFWVMiLCJtb3ZlTGluZUJhY2t3YXJkIiwibW92ZUxpbmVGb3J3YXJkIiwiZGVsZXRlTGluZUJhY2t3YXJkIiwiZGVsZXRlTGluZUZvcndhcmQiLCJkZWxldGVXb3JkQmFja3dhcmQiLCJkZWxldGVXb3JkRm9yd2FyZCIsImV4dGVuZExpbmVCYWNrd2FyZCIsImV4dGVuZExpbmVGb3J3YXJkIiwicmVkbyIsInRyYW5zcG9zZUNoYXJhY3RlciIsIldJTkRPV1NfSE9US0VZUyIsImNyZWF0ZSIsImdlbmVyaWMiLCJhcHBsZSIsIndpbmRvd3MiLCJpc0dlbmVyaWMiLCJpbXBvcnRfaXNfaG90a2V5IiwiaXNIb3RrZXkiLCJpc0FwcGxlIiwiaXNXaW5kb3dzIiwiaXNCb2xkIiwiaXNDb21wb3NlIiwiaXNNb3ZlQmFja3dhcmQiLCJpc01vdmVGb3J3YXJkIiwiaXNEZWxldGVCYWNrd2FyZCIsImlzRGVsZXRlRm9yd2FyZCIsImlzRGVsZXRlTGluZUJhY2t3YXJkIiwiaXNEZWxldGVMaW5lRm9yd2FyZCIsImlzRGVsZXRlV29yZEJhY2t3YXJkIiwiaXNEZWxldGVXb3JkRm9yd2FyZCIsImlzRXh0ZW5kQmFja3dhcmQiLCJpc0V4dGVuZEZvcndhcmQiLCJpc0V4dGVuZExpbmVCYWNrd2FyZCIsImlzRXh0ZW5kTGluZUZvcndhcmQiLCJpc0l0YWxpYyIsImlzTW92ZUxpbmVCYWNrd2FyZCIsImlzTW92ZUxpbmVGb3J3YXJkIiwiaXNNb3ZlV29yZEJhY2t3YXJkIiwiaXNNb3ZlV29yZEZvcndhcmQiLCJpc1JlZG8iLCJpc1NvZnRCcmVhayIsImlzU3BsaXRCbG9jayIsImlzVHJhbnNwb3NlQ2hhcmFjdGVyIiwiaXNVbmRvIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJrZXlzIiwiaW5kZXhPZiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInNoYWxsb3dDb21wYXJlIiwib2JqMSIsIm9iajIiLCJldmVyeSIsImhhc093blByb3BlcnR5IiwiaXNEZWNvcmF0aW9uRmxhZ3NFcXVhbCIsIm90aGVyIiwicmFuZ2VPd25Qcm9wcyIsIl9leGNsdWRlZCIsIm90aGVyT3duUHJvcHMiLCJfZXhjbHVkZWQyIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEseUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx5QkFBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFB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RUFDUjtFQUVELFNBQVNRLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlpZ0IsSUFBQSxDQUFLemdCLE1BQUEsRUFBUVEsQ0FBQSxJQUFLO0lBQ3BDLElBQU1tSixLQUFBLEdBQVE4VyxJQUFBLENBQUtqZ0IsQ0FBQTtJQUNuQixJQUFNNGYsS0FBQSxHQUFRdE0sT0FBQSxDQUFRdFQsQ0FBQTtJQUd0QixJQUNFbUosS0FBQSxDQUFNc0MsTUFBQSxDQUFPOUwsTUFBQSxLQUFXaWdCLEtBQUEsQ0FBTW5VLE1BQUEsQ0FBTzlMLE1BQUEsSUFDckN3SixLQUFBLENBQU1pQixLQUFBLENBQU16SyxNQUFBLEtBQVdpZ0IsS0FBQSxDQUFNeFYsS0FBQSxDQUFNekssTUFBQSxJQUNuQyxDQUFDZ2dCLHNCQUFBLENBQXVCeFcsS0FBQSxFQUFPeVcsS0FBSyxHQUNwQztNQUNBLE9BQU87SUFDUjtFQUNGO0VBRUQsT0FBTztBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==