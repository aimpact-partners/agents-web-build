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

// .beyond/uimport/temp/slate-dom.0.114.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NsYXRlLWRvbS4wLjExNC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvZG9tLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvZW52aXJvbm1lbnQudHMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL2tleS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3V0aWxzL3dlYWstbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS1kb20vc3JjL3BsdWdpbi9kb20tZWRpdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvZGlmZi10ZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvbGluZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy9wbHVnaW4vd2l0aC1kb20udHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy91dGlscy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUtZG9tL3NyYy91dGlscy9ob3RrZXlzLnRzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlLWRvbS9zcmMvdXRpbHMvcmFuZ2UtbGlzdC50cyJdLCJuYW1lcyI6WyJzbGF0ZV9kb21fMF8xMTRfMF9leHBvcnRzIiwiX19leHBvcnQiLCJDQU5fVVNFX0RPTSIsIkRPTUVkaXRvciIsIkRPTUVsZW1lbnQiLCJET01Ob2RlIiwiRE9NUmFuZ2UiLCJET01TZWxlY3Rpb24iLCJET01TdGF0aWNSYW5nZSIsIkRPTVRleHQiLCJFRElUT1JfVE9fRUxFTUVOVCIsIkVESVRPUl9UT19GT1JDRV9SRU5ERVIiLCJFRElUT1JfVE9fS0VZX1RPX0VMRU1FTlQiLCJFRElUT1JfVE9fT05fQ0hBTkdFIiwiRURJVE9SX1RPX1BFTkRJTkdfQUNUSU9OIiwiRURJVE9SX1RPX1BFTkRJTkdfRElGRlMiLCJFRElUT1JfVE9fUEVORElOR19JTlNFUlRJT05fTUFSS1MiLCJFRElUT1JfVE9fUEVORElOR19TRUxFQ1RJT04iLCJFRElUT1JfVE9fUExBQ0VIT0xERVJfRUxFTUVOVCIsIkVESVRPUl9UT19TQ0hFRFVMRV9GTFVTSCIsIkVESVRPUl9UT19VU0VSX01BUktTIiwiRURJVE9SX1RPX1VTRVJfU0VMRUNUSU9OIiwiRURJVE9SX1RPX1dJTkRPVyIsIkVMRU1FTlRfVE9fTk9ERSIsIkhBU19CRUZPUkVfSU5QVVRfU1VQUE9SVCIsIkhvdGtleXMiLCJob3RrZXlzIiwiSVNfQU5EUk9JRCIsIklTX0NIUk9NRSIsIklTX0NPTVBPU0lORyIsIklTX0ZJUkVGT1giLCJJU19GSVJFRk9YX0xFR0FDWSIsIklTX0ZPQ1VTRUQiLCJJU19JT1MiLCJJU19OT0RFX01BUF9ESVJUWSIsIklTX1JFQURfT05MWSIsIklTX1VDX01PQklMRSIsIklTX1dFQktJVCIsIklTX1dFQ0hBVEJST1dTRVIiLCJLZXkiLCJNQVJLX1BMQUNFSE9MREVSX1NZTUJPTCIsIk5PREVfVE9fRUxFTUVOVCIsIk5PREVfVE9fSU5ERVgiLCJOT0RFX1RPX0tFWSIsIk5PREVfVE9fUEFSRU5UIiwiUExBQ0VIT0xERVJfU1lNQk9MIiwiVFJJUExFX0NMSUNLIiwiYXBwbHlTdHJpbmdEaWZmIiwiZ2V0QWN0aXZlRWxlbWVudCIsImdldERlZmF1bHRWaWV3IiwiZ2V0U2VsZWN0aW9uIiwiaGFzU2hhZG93Um9vdCIsImlzQWZ0ZXIiLCJpc0JlZm9yZSIsImlzRE9NRWxlbWVudCIsImlzRE9NTm9kZSIsImlzRE9NU2VsZWN0aW9uIiwiaXNFbGVtZW50RGVjb3JhdGlvbnNFcXVhbCIsImlzUGxhaW5UZXh0T25seVBhc3RlIiwiaXNUZXh0RGVjb3JhdGlvbnNFcXVhbCIsImlzVHJhY2tlZE11dGF0aW9uIiwibWVyZ2VTdHJpbmdEaWZmcyIsIm5vcm1hbGl6ZURPTVBvaW50Iiwibm9ybWFsaXplUG9pbnQiLCJub3JtYWxpemVSYW5nZSIsIm5vcm1hbGl6ZVN0cmluZ0RpZmYiLCJ0YXJnZXRSYW5nZSIsInZlcmlmeURpZmZTdGF0ZSIsIndpdGhET00iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZ2xvYmFsVGhpcyIsIk5vZGUiLCJFbGVtZW50IiwiVGV4dCIsIlJhbmdlIiwiU2VsZWN0aW9uIiwiU3RhdGljUmFuZ2UiLCJ2YWx1ZSIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImlzRE9NQ29tbWVudCIsIm5vZGVUeXBlIiwid2luZG93MiIsImFuY2hvck5vZGUiLCJpc0RPTVRleHQiLCJldmVudCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwidHlwZXMiLCJsZW5ndGgiLCJkb21Qb2ludCIsIm5vZGUiLCJvZmZzZXQiLCJjaGlsZE5vZGVzIiwiaXNMYXN0IiwiaW5kZXgiLCJnZXRFZGl0YWJsZUNoaWxkQW5kSW5kZXgiLCJpIiwiZ2V0RWRpdGFibGVDaGlsZCIsInRleHRDb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsInRvU3RyaW5nIiwiZGlyZWN0aW9uIiwiY2hpbGQiLCJ0cmllZEZvcndhcmQiLCJ0cmllZEJhY2t3YXJkIiwiZ2V0QXR0cmlidXRlIiwiZ2V0UGxhaW5UZXh0IiwiZG9tTm9kZSIsInRleHQiLCJub2RlVmFsdWUiLCJjaGlsZE5vZGUiLCJBcnJheSIsImZyb20iLCJkaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0YWdOYW1lIiwiY2F0Y2hTbGF0ZUZyYWdtZW50IiwiZ2V0U2xhdGVGcmFnbWVudEF0dHJpYnV0ZSIsImRhdGFUcmFuc2ZlciIsImh0bWxEYXRhIiwiZnJhZ21lbnQiLCJtYXRjaCIsInJvb3QiLCJkb2N1bWVudCIsImVkaXRvciIsIm11dGF0aW9uIiwiYmF0Y2giLCJ0YXJnZXQiLCJtYXRjaGVzIiwiZG9jdW1lbnQyIiwiZ2V0V2luZG93IiwiY29udGFpbnMiLCJoYXNET01Ob2RlIiwiZWRpdGFibGUiLCJwYXJlbnRNdXRhdGlvbiIsImZpbmQiLCJfcmVmIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsIl9ub2RlIiwiYWN0aXZlRWxlbWVudCIsIl9hY3RpdmVFbGVtZW50Iiwic2hhZG93Um9vdCIsIl9hY3RpdmVFbGVtZW50JHNoYWRvdyIsIl9hY3RpdmVFbGVtZW50MiIsIm90aGVyTm9kZSIsIkJvb2xlYW4iLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyIsIkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORyIsIm5hdmlnYXRvciIsIndpbmRvdyIsInRlc3QiLCJ1c2VyQWdlbnQiLCJNU1N0cmVhbSIsIklTX0FQUExFIiwiSVNfRURHRV9MRUdBQ1kiLCJJU19DSFJPTUVfTEVHQUNZIiwiSVNfQU5EUk9JRF9DSFJPTUVfTEVHQUNZIiwiY3JlYXRlRWxlbWVudCIsIl9uYXZpZ2F0b3IkdXNlckFnZW50JCIsInBhcnNlSW50IiwiX25hdmlnYXRvciR1c2VyQWdlbnQkMiIsIklucHV0RXZlbnQiLCJwcm90b3R5cGUiLCJnZXRUYXJnZXRSYW5nZXMiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibzIiLCJjb25zdHJ1Y3RvciIsIl90b1ByaW1pdGl2ZSIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfdG9Qcm9wZXJ0eUtleSIsImFyZyIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwibiIsImlkIiwiY29uY2F0IiwiV2Vha01hcCIsImFuZHJvaWRQZW5kaW5nRGlmZnMiLCJnZXQiLCJhbmRyb2lkU2NoZWR1bGVGbHVzaCIsIl9FRElUT1JfVE9fU0NIRURVTEVfRiIsImJsdXIiLCJlbCIsInRvRE9NTm9kZSIsImZpbmREb2N1bWVudE9yU2hhZG93Um9vdCIsInNldCIsImRlc2VsZWN0Iiwic2VsZWN0aW9uIiwiZG9tU2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsInJlbW92ZUFsbFJhbmdlcyIsImltcG9ydF9zbGF0ZSIsIlRyYW5zZm9ybXMiLCJnZXRSb290Tm9kZSIsIkRvY3VtZW50IiwiU2hhZG93Um9vdCIsImZpbmRFdmVudFJhbmdlIiwibmF0aXZlRXZlbnQiLCJjbGllbnRYIiwieCIsImNsaWVudFkiLCJ5IiwiRXJyb3IiLCJ0b1NsYXRlTm9kZSIsInBhdGgiLCJmaW5kUGF0aCIsImlzRWxlbWVudCIsIkVkaXRvciIsImlzVm9pZCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpc1ByZXYiLCJpc0lubGluZSIsImxlZnQiLCJ3aWR0aCIsInRvcCIsImhlaWdodCIsImVkZ2UiLCJwb2ludCIsImJlZm9yZSIsImFmdGVyIiwiX3JhbmdlIiwicmFuZ2UiLCJkb21SYW5nZSIsImNhcmV0UmFuZ2VGcm9tUG9pbnQiLCJwb3NpdGlvbiIsImNhcmV0UG9zaXRpb25Gcm9tUG9pbnQiLCJjcmVhdGVSYW5nZSIsInNldFN0YXJ0Iiwib2Zmc2V0Tm9kZSIsInNldEVuZCIsInRvU2xhdGVSYW5nZSIsImV4YWN0TWF0Y2giLCJzdXBwcmVzc1Rocm93IiwiZmluZEtleSIsImlzRWRpdG9yIiwidW5zaGlmdCIsIlNjcnViYmVyIiwic3RyaW5naWZ5IiwiZm9jdXMiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwicmV0cmllcyIsIm9wZXJhdGlvbnMiLCJzZXRUaW1lb3V0IiwidG9ET01SYW5nZSIsImFkZFJhbmdlIiwic2VsZWN0Iiwic3RhcnQiLCJwcmV2ZW50U2Nyb2xsIiwiZWRpdG9yRWwiLCJ0YXJnZXRFbCIsInBhcmVudEVsZW1lbnQiLCJlcnIiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJjbG9zZXN0IiwiaXNDb250ZW50RWRpdGFibGUiLCJoYXNFZGl0YWJsZVRhcmdldCIsImhhc1JhbmdlIiwiYW5jaG9yIiwiZm9jdXMyIiwiaGFzUGF0aCIsImhhc1NlbGVjdGFibGVUYXJnZXQiLCJpc1RhcmdldEluc2lkZU5vblJlYWRvbmx5Vm9pZCIsImhhc1RhcmdldCIsImluc2VydERhdGEiLCJkYXRhIiwiaW5zZXJ0RnJhZ21lbnREYXRhIiwiaW5zZXJ0VGV4dERhdGEiLCJpc0NvbXBvc2luZyIsImlzRm9jdXNlZCIsImlzUmVhZE9ubHkiLCJzbGF0ZU5vZGUiLCJzZXRGcmFnbWVudERhdGEiLCJvcmlnaW5FdmVudCIsIktFWV9UT19FTEVNRU5UIiwidG9ET01Qb2ludCIsInZvaWQiLCJhdCIsInNlbGVjdG9yIiwidGV4dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXR0ciIsInRydWVMZW5ndGgiLCJlbmQiLCJuZXh0VGV4dCIsImhhc0F0dHJpYnV0ZSIsIl9uZXh0VGV4dCR0ZXh0Q29udGVudCIsImRvbVRleHQiLCJzdGFydHNXaXRoIiwiTWF0aCIsIm1pbiIsIm1heCIsImlzQmFja3dhcmQiLCJkb21BbmNob3IiLCJkb21Gb2N1cyIsImlzQ29sbGFwc2VkIiwic3RhcnROb2RlIiwic3RhcnRPZmZzZXQiLCJlbmROb2RlIiwiZW5kT2Zmc2V0Iiwic3RhcnRFbCIsImlzU3RhcnRBdFplcm9XaWR0aCIsImVuZEVsIiwiaXNFbmRBdFplcm9XaWR0aCIsImRvbUVsIiwidG9TbGF0ZVBvaW50Iiwic2VhcmNoRGlyZWN0aW9uIiwibmVhcmVzdE5vZGUiLCJuZWFyZXN0T2Zmc2V0IiwidGV4dE5vZGUiLCJfZG9tTm9kZSR0ZXh0Q29udGVudCIsIl9kb21Ob2RlJHRleHRDb250ZW50MiIsInBvdGVudGlhbFZvaWROb2RlIiwidm9pZE5vZGUiLCJwb3RlbnRpYWxOb25FZGl0YWJsZU5vZGUiLCJub25FZGl0YWJsZU5vZGUiLCJsZWFmTm9kZSIsImNvbnRlbnRzIiwiY2xvbmVDb250ZW50cyIsInJlbW92YWxzIiwic2xpY2UiLCJmb3JFYWNoIiwidGV4dENvbnRleHQiLCJyZW1vdmVDaGlsZCIsImxlYWZOb2RlcyIsImN1cnJlbnQiLCJnZXRMZWFmTm9kZXMiLCJub2RlMiIsImVsZW1lbnROb2RlIiwiX2xlYWZOb2RlcyRmaW5kIiwiX2xlYWZOb2RlcyIsIm5leHRFbGVtZW50U2libGluZyIsImxlYWYiLCJfbGVhZk5vZGVzMiRmaW5kTGFzdCIsIl9sZWFmTm9kZXMyIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImZpbmRMYXN0IiwiZW5kc1dpdGgiLCJfc2xhdGVOb2RlIiwiX3BhdGgiLCJfb2Zmc2V0IiwicXVlcnlTZWxlY3RvciIsIl9mb2N1c05vZGUkdGV4dENvbnRlbiIsInN0YXJ0Q29udGFpbmVyIiwiYW5jaG9yT2Zmc2V0IiwiZm9jdXNOb2RlIiwiZm9jdXNPZmZzZXQiLCJmaXJzdFJhbmdlIiwiZ2V0UmFuZ2VBdCIsImxhc3RSYW5nZSIsIkhUTUxUYWJsZVJvd0VsZW1lbnQiLCJnZXRMYXN0Q2hpbGRyZW4iLCJlbGVtZW50IiwiY2hpbGRFbGVtZW50Q291bnQiLCJjaGlsZHJlbiIsImZpcnN0Tm9kZVJvdyIsImxhc3ROb2RlUm93IiwiZmlyc3ROb2RlIiwibGFzdE5vZGUiLCJIVE1MRWxlbWVudCIsImlubmVySFRNTCIsImVuZENvbnRhaW5lciIsImNvbGxhcHNlZCIsImZvY3VzQmVmb3JlQW5jaG9yIiwiaXNFeHBhbmRlZCIsImlzRm9yd2FyZCIsIm1vZGUiLCJ1bmhhbmdSYW5nZSIsInZvaWRzIiwidGV4dERpZmYiLCJkaWZmIiwiaXNUZXh0IiwibmV4dFBhdGgiLCJQYXRoIiwibmV4dCIsIm5leHROb2RlIiwiX2xlbiIsImRpZmZzIiwiX2tleSIsInJlZHVjZSIsInRleHQyIiwibG9uZ2VzdENvbW1vblByZWZpeExlbmd0aCIsInN0ciIsImFub3RoZXIiLCJjaGFyQXQiLCJsb25nZXN0Q29tbW9uU3VmZml4TGVuZ3RoIiwidGFyZ2V0VGV4dCIsInJlbW92ZWRUZXh0IiwicHJlZml4TGVuZ3RoIiwic3VmZml4TGVuZ3RoIiwibm9ybWFsaXplZCIsImEiLCJiIiwib3ZlcmxhcCIsImFwcGxpZWQiLCJzbGljZUVuZCIsInBhcmVudEJsb2NrIiwiYWJvdmUiLCJuMiIsImlzQmxvY2siLCJlbnRyeSIsImlzRGVzY2VuZGFudCIsInRyYW5zZm9ybVBlbmRpbmdQb2ludCIsIm9wIiwicGVuZGluZ0RpZmZzIiwiZXF1YWxzIiwiUG9pbnQiLCJ0cmFuc2Zvcm0iLCJhZmZpbml0eSIsIl9hbmNob3IiLCJfdHJhbnNmb3JtZWQiLCJ0cmFuc2Zvcm1lZCIsInR5cGUiLCJ0cmFuc2Zvcm1QZW5kaW5nUmFuZ2UiLCJ0cmFuc2Zvcm1UZXh0RGlmZiIsIm5ld1BhdGgiLCJkb1JlY3RzSW50ZXJzZWN0IiwiY29tcGFyZVJlY3QiLCJtaWRkbGUiLCJib3R0b20iLCJhcmVSYW5nZXNTYW1lTGluZSIsInJhbmdlMSIsInJhbmdlMiIsInJlY3QxIiwicmVjdDIiLCJmaW5kQ3VycmVudExpbmVSYW5nZSIsInBhcmVudFJhbmdlIiwicGFyZW50UmFuZ2VCb3VuZGFyeSIsInBvc2l0aW9ucyIsInJpZ2h0IiwiZmxvb3IiLCJ3aXRoRE9NMiIsImNsaXBib2FyZEZvcm1hdEtleSIsImUiLCJhcHBseSIsIm9uQ2hhbmdlIiwiZGVsZXRlQmFja3dhcmQiLCJhZGRNYXJrIiwicmVtb3ZlTWFyayIsIl9FRElUT1JfVE9fUEVORElOR19ESSIsImRlbGV0ZSIsIl9FRElUT1JfVE9fUEVORElOR19ESTIiLCJ1bml0IiwicGFyZW50QmxvY2tFbnRyeSIsInBhcmVudEJsb2NrUGF0aCIsInBhcmVudEVsZW1lbnRSYW5nZSIsImN1cnJlbnRMaW5lUmFuZ2UiLCJwYXRoUmVmTWF0Y2hlcyIsIm1hcCIsImZpbHRlciIsInBlbmRpbmdTZWxlY3Rpb24iLCJwZW5kaW5nQWN0aW9uIiwiaXNQb2ludCIsIl9vYmplY3RTcHJlYWQiLCJwdXNoIiwiZ2V0TWF0Y2hlcyIsIl9FRElUT1JfVE9fVVNFUl9TRUxFQyIsInVucmVmIiwicHJldlBhdGgiLCJwcmV2aW91cyIsImNvbW1vblBhdGgiLCJjb21tb24iLCJjaGFuZ2VkUGF0aCIsImNoYW5nZWROb2RlIiwiY2hhbmdlZE5vZGVLZXkiLCJjaGFuZ2VkUGF0aFJlZiIsInBhdGhSZWYiLCJlZGdlcyIsInN0YXJ0Vm9pZCIsImVuZFZvaWQiLCJhdHRhY2giLCJ0cmltIiwiciIsImNsb25lUmFuZ2UiLCJzZXRFbmRBZnRlciIsInp3IiwiaXNOZXdsaW5lIiwic3BhbiIsInN0eWxlIiwid2hpdGVTcGFjZSIsImFwcGVuZENoaWxkIiwiZ2V0RnJhZ21lbnQiLCJzdHJpbmciLCJKU09OIiwiZW5jb2RlZCIsImJ0b2EiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXREYXRhIiwiZGl2IiwiYm9keSIsImRlY29kZWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwicGFyc2VkIiwicGFyc2UiLCJpbnNlcnRGcmFnbWVudCIsImxpbmVzIiwic3BsaXQiLCJsaW5lIiwic3BsaXROb2RlcyIsImFsd2F5cyIsImluc2VydFRleHQiLCJvbkNvbnRleHRDaGFuZ2UiLCJwIiwibGV2ZWxzIiwiSE9US0VZUyIsImJvbGQiLCJjb21wb3NlIiwibW92ZUJhY2t3YXJkIiwibW92ZUZvcndhcmQiLCJtb3ZlV29yZEJhY2t3YXJkIiwibW92ZVdvcmRGb3J3YXJkIiwiZGVsZXRlRm9yd2FyZCIsImV4dGVuZEJhY2t3YXJkIiwiZXh0ZW5kRm9yd2FyZCIsIml0YWxpYyIsImluc2VydFNvZnRCcmVhayIsInNwbGl0QmxvY2siLCJ1bmRvIiwiQVBQTEVfSE9US0VZUyIsIm1vdmVMaW5lQmFja3dhcmQiLCJtb3ZlTGluZUZvcndhcmQiLCJkZWxldGVMaW5lQmFja3dhcmQiLCJkZWxldGVMaW5lRm9yd2FyZCIsImRlbGV0ZVdvcmRCYWNrd2FyZCIsImRlbGV0ZVdvcmRGb3J3YXJkIiwiZXh0ZW5kTGluZUJhY2t3YXJkIiwiZXh0ZW5kTGluZUZvcndhcmQiLCJyZWRvIiwidHJhbnNwb3NlQ2hhcmFjdGVyIiwiV0lORE9XU19IT1RLRVlTIiwiY3JlYXRlIiwiZ2VuZXJpYyIsImFwcGxlIiwid2luZG93cyIsImlzR2VuZXJpYyIsImltcG9ydF9pc19ob3RrZXkiLCJpc0hvdGtleSIsImlzQXBwbGUiLCJpc1dpbmRvd3MiLCJpc0JvbGQiLCJpc0NvbXBvc2UiLCJpc01vdmVCYWNrd2FyZCIsImlzTW92ZUZvcndhcmQiLCJpc0RlbGV0ZUJhY2t3YXJkIiwiaXNEZWxldGVGb3J3YXJkIiwiaXNEZWxldGVMaW5lQmFja3dhcmQiLCJpc0RlbGV0ZUxpbmVGb3J3YXJkIiwiaXNEZWxldGVXb3JkQmFja3dhcmQiLCJpc0RlbGV0ZVdvcmRGb3J3YXJkIiwiaXNFeHRlbmRCYWNrd2FyZCIsImlzRXh0ZW5kRm9yd2FyZCIsImlzRXh0ZW5kTGluZUJhY2t3YXJkIiwiaXNFeHRlbmRMaW5lRm9yd2FyZCIsImlzSXRhbGljIiwiaXNNb3ZlTGluZUJhY2t3YXJkIiwiaXNNb3ZlTGluZUZvcndhcmQiLCJpc01vdmVXb3JkQmFja3dhcmQiLCJpc01vdmVXb3JkRm9yd2FyZCIsImlzUmVkbyIsImlzU29mdEJyZWFrIiwiaXNTcGxpdEJsb2NrIiwiaXNUcmFuc3Bvc2VDaGFyYWN0ZXIiLCJpc1VuZG8iLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwic2hhbGxvd0NvbXBhcmUiLCJvYmoxIiwib2JqMiIsImV2ZXJ5IiwiaGFzT3duUHJvcGVydHkiLCJpc0RlY29yYXRpb25GbGFnc0VxdWFsIiwib3RoZXIiLCJyYW5nZU93blByb3BzIiwiX2V4Y2x1ZGVkIiwib3RoZXJPd25Qcm9wcyIsIl9leGNsdWRlZDIiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQTtBQUFBQyxRQUFBLENBQUFELHlCQUFBO0VBQUFFLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFB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T0FBTztFQUNSO0VBRUQsU0FBU1EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWlnQixJQUFBLENBQUt6Z0IsTUFBQSxFQUFRUSxDQUFBLElBQUs7SUFDcEMsSUFBTW1KLEtBQUEsR0FBUThXLElBQUEsQ0FBS2pnQixDQUFBO0lBQ25CLElBQU00ZixLQUFBLEdBQVF0TSxPQUFBLENBQVF0VCxDQUFBO0lBR3RCLElBQ0VtSixLQUFBLENBQU1zQyxNQUFBLENBQU85TCxNQUFBLEtBQVdpZ0IsS0FBQSxDQUFNblUsTUFBQSxDQUFPOUwsTUFBQSxJQUNyQ3dKLEtBQUEsQ0FBTWlCLEtBQUEsQ0FBTXpLLE1BQUEsS0FBV2lnQixLQUFBLENBQU14VixLQUFBLENBQU16SyxNQUFBLElBQ25DLENBQUNnZ0Isc0JBQUEsQ0FBdUJ4VyxLQUFBLEVBQU95VyxLQUFLLEdBQ3BDO01BQ0EsT0FBTztJQUNSO0VBQ0Y7RUFFRCxPQUFPO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==