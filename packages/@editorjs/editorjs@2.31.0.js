System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@editorjs/editorjs","2.31.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to2, key) && key !== except) __defProp(to2, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to2;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/@editorjs/editorjs.2.31.0.js
var editorjs_2_31_0_exports = {};
__export(editorjs_2_31_0_exports, {
  default: () => editorjs_2_31_0_default
});
module.exports = __toCommonJS(editorjs_2_31_0_exports);

// node_modules/@editorjs/editorjs/dist/editorjs.mjs
(function () {
  "use strict";

  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var Ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Xn(n) {
  if (n.__esModule) return n;
  var e = n.default;
  if (typeof e == "function") {
    var t = function o() {
      return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", {
    value: true
  }), Object.keys(n).forEach(function (o) {
    var i = Object.getOwnPropertyDescriptor(n, o);
    Object.defineProperty(t, o, i.get ? i : {
      enumerable: true,
      get: function () {
        return n[o];
      }
    });
  }), t;
}
function ot() {}
Object.assign(ot, {
  default: ot,
  register: ot,
  revert: function () {},
  __esModule: true
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (n) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this;);
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function (n) {
  let e = this;
  if (!document.documentElement.contains(e)) return null;
  do {
    if (e.matches(n)) return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function (e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach(o => {
    const i = o instanceof Node;
    t.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function (n) {
  n = arguments.length === 0 ? true : !!n;
  const e = this.parentNode,
    t = window.getComputedStyle(e, null),
    o = parseInt(t.getPropertyValue("border-top-width")),
    i = parseInt(t.getPropertyValue("border-left-width")),
    s = this.offsetTop - e.offsetTop < e.scrollTop,
    r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight,
    a = this.offsetLeft - e.offsetLeft < e.scrollLeft,
    l = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth,
    c = s && !r;
  (s || r) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (a || l) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s || r || a || l) && !n && this.scrollIntoView(c);
});
window.requestIdleCallback = window.requestIdleCallback || function (n) {
  const e = Date.now();
  return setTimeout(function () {
    n({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function (n) {
  clearTimeout(n);
};
var Vn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var Lo = /* @__PURE__ */(n => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(Lo || {});
var y = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  },
  qn = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
function Ie(n, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t]) return;
  const s = ["info", "log", "warn", "error"].includes(t),
    r = [];
  switch (Ie.logLevel) {
    case "ERROR":
      if (t !== "error") return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t)) return;
      break;
    case "INFO":
      if (!s || n) return;
      break;
  }
  o && r.push(o);
  const a = "Editor.js 2.31.0",
    l = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  n && (s ? (r.unshift(l, i), e = `%c${a}%c ${e}`) : e = `( ${a} )${e}`);
  try {
    s ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
  } catch {}
}
Ie.logLevel = "VERBOSE";
function Zn(n) {
  Ie.logLevel = n;
}
var S = Ie.bind(window, false),
  X = Ie.bind(window, true);
function le(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function A(n) {
  return le(n) === "function" || le(n) === "asyncfunction";
}
function D(n) {
  return le(n) === "object";
}
function te(n) {
  return le(n) === "string";
}
function Gn(n) {
  return le(n) === "boolean";
}
function yo(n) {
  return le(n) === "number";
}
function wo(n) {
  return le(n) === "undefined";
}
function V(n) {
  return n ? Object.keys(n).length === 0 && n.constructor === Object : true;
}
function Po(n) {
  return n > 47 && n < 58 || n === 32 || n === 13 || n === 229 || n > 64 && n < 91 || n > 95 && n < 112 || n > 185 && n < 193 || n > 218 && n < 223;
}
async function Qn(n, e = () => {}, t = () => {}) {
  async function o(i, s, r) {
    try {
      await i.function(i.data), await s(wo(i.data) ? {} : i.data);
    } catch {
      r(wo(i.data) ? {} : i.data);
    }
  }
  return n.reduce(async (i, s) => (await i, o(s, e, t)), Promise.resolve());
}
function No(n) {
  return Array.prototype.slice.call(n);
}
function Fe(n, e) {
  return function () {
    const t = this,
      o = arguments;
    window.setTimeout(() => n.apply(t, o), e);
  };
}
function Jn(n) {
  return n.name.split(".").pop();
}
function ei(n) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
}
function Eo(n, e, t) {
  let o;
  return (...i) => {
    const s = this,
      r = () => {
        o = null, t || n.apply(s, i);
      },
      a = t && !o;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && n.apply(s, i);
  };
}
function dt(n, e, t = void 0) {
  let o,
    i,
    s,
    r = null,
    a = 0;
  t || (t = {});
  const l = function () {
    a = t.leading === false ? 0 : Date.now(), r = null, s = n.apply(o, i), r || (o = i = null);
  };
  return function () {
    const c = Date.now();
    !a && t.leading === false && (a = c);
    const d = e - (c - a);
    return o = this, i = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), a = c, s = n.apply(o, i), r || (o = i = null)) : !r && t.trailing !== false && (r = setTimeout(l, d)), s;
  };
}
function ti() {
  const n = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    },
    e = Object.keys(n).find(t => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n[e] = true), n;
}
function je(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function ut(n, ...e) {
  if (!e.length) return n;
  const t = e.shift();
  if (D(n) && D(t)) for (const o in t) D(t[o]) ? (n[o] || Object.assign(n, {
    [o]: {}
  }), ut(n[o], t[o])) : Object.assign(n, {
    [o]: t[o]
  });
  return ut(n, ...e);
}
function vt(n) {
  const e = ti();
  return n = n.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function oi(n) {
  try {
    return new URL(n).href;
  } catch {}
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function ni() {
  return Vn(10);
}
function ii(n) {
  window.open(n, "_blank");
}
function si(n = "") {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function ht(n, e, t) {
  const o = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
  n && X(o, "warn");
}
function me(n, e, t) {
  const o = t.value ? "value" : "get",
    i = t[o],
    s = `#${e}Cache`;
  if (t[o] = function (...r) {
    return this[s] === void 0 && (this[s] = i.apply(this, ...r)), this[s];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function (a) {
      delete n[s], r.apply(this, a);
    };
  }
  return t;
}
var Ro = 650;
function be() {
  return window.matchMedia(`(max-width: ${Ro}px)`).matches;
}
var pt = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function ri(n, e) {
  const t = Array.isArray(n) || D(n),
    o = Array.isArray(e) || D(e);
  return t || o ? JSON.stringify(n) === JSON.stringify(e) : n === e;
}
var u = class {
  static isSingleTag(e) {
    return e.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(e.tagName);
  }
  static isLineBreakTag(e) {
    return e && e.tagName && ["BR", "WBR"].includes(e.tagName);
  }
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    if (Array.isArray(t)) {
      const s = t.filter(r => r !== void 0);
      i.classList.add(...s);
    } else t && i.classList.add(t);
    for (const s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    return i;
  }
  static text(e) {
    return document.createTextNode(e);
  }
  static append(e, t) {
    Array.isArray(t) ? t.forEach(o => e.appendChild(o)) : e.appendChild(t);
  }
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach(o => e.prepend(o))) : e.prepend(t);
  }
  static swap(e, t) {
    const o = document.createElement("div"),
      i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  static find(e = document, t) {
    return e.querySelector(t);
  }
  static get(e) {
    return document.getElementById(e);
  }
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(t => `input[type="${t}"]`).join(", ");
  }
  static findAllInputs(e) {
    return No(e.querySelectorAll(u.allInputsSelector)).reduce((t, o) => u.isNativeInput(o) || u.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...u.getDeepestBlockElements(o)], []);
  }
  static getDeepestNode(e, t = false) {
    const o = t ? "lastChild" : "firstChild",
      i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let s = e[o];
      if (u.isSingleTag(s) && !u.isNativeInput(s) && !u.isLineBreakTag(s)) if (s[i]) s = s[i];else if (s.parentNode[i]) s = s.parentNode[i];else return s.parentNode;
      return this.getDeepestNode(s, t);
    }
    return e;
  }
  static isElement(e) {
    return yo(e) ? false : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  static isFragment(e) {
    return yo(e) ? false : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  static isNativeInput(e) {
    const t = ["INPUT", "TEXTAREA"];
    return e && e.tagName ? t.includes(e.tagName) : false;
  }
  static canSetCaret(e) {
    let t = true;
    if (u.isNativeInput(e)) switch (e.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        t = false;
        break;
    } else t = u.isContentEditable(e);
    return t;
  }
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? false : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("\u200B", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.length === 0);
  }
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : false;
  }
  static isEmpty(e, t) {
    const o = [e];
    for (; o.length > 0;) if (e = o.shift(), !!e) {
      if (this.isLeaf(e) && !this.isNodeEmpty(e, t)) return false;
      e.childNodes && o.push(...Array.from(e.childNodes));
    }
    return true;
  }
  static isHTMLString(e) {
    const t = u.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  static getContentLength(e) {
    return u.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  static get blockElements() {
    return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video"];
  }
  static containsOnlyInlineElements(e) {
    let t;
    te(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = i => !u.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  static getDeepestBlockElements(e) {
    return u.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...u.getDeepestBlockElements(o)], []);
  }
  static getHolder(e) {
    return te(e) ? document.getElementById(e) : e;
  }
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  static offset(e) {
    const t = e.getBoundingClientRect(),
      o = window.pageXOffset || document.documentElement.scrollLeft,
      i = window.pageYOffset || document.documentElement.scrollTop,
      s = t.top + i,
      r = t.left + o;
    return {
      top: s,
      left: r,
      bottom: s + t.height,
      right: r + t.width
    };
  }
  static getNodeByOffset(e, t) {
    let o = 0,
      i = null;
    const s = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null);
    let r = s.nextNode();
    for (; r;) {
      const c = r.textContent,
        d = c === null ? 0 : c.length;
      if (i = r, o + d >= t) break;
      o += d, r = s.nextNode();
    }
    if (!i) return {
      node: null,
      offset: 0
    };
    const a = i.textContent;
    if (a === null || a.length === 0) return {
      node: null,
      offset: 0
    };
    const l = Math.min(t - o, a.length);
    return {
      node: i,
      offset: l
    };
  }
};
function ai(n) {
  return !/[^\t\n\r ]/.test(n);
}
function li(n) {
  const e = window.getComputedStyle(n),
    t = parseFloat(e.fontSize),
    o = parseFloat(e.lineHeight) || t * 1.2,
    i = parseFloat(e.paddingTop),
    s = parseFloat(e.borderTopWidth),
    r = parseFloat(e.marginTop),
    a = t * 0.8,
    l = (o - t) / 2;
  return r + s + i + l + a;
}
function Do(n) {
  n.dataset.empty = u.isEmpty(n) ? "true" : "false";
}
var ci = {
    blockTunes: {
      toggler: {
        "Click to tune": "",
        "or drag to move": ""
      }
    },
    inlineToolbar: {
      converter: {
        "Convert to": ""
      }
    },
    toolbar: {
      toolbox: {
        Add: ""
      }
    },
    popover: {
      Filter: "",
      "Nothing found": "",
      "Convert to": ""
    }
  },
  di = {
    Text: "",
    Link: "",
    Bold: "",
    Italic: ""
  },
  ui = {
    link: {
      "Add a link": ""
    },
    stub: {
      "The block can not be displayed correctly.": ""
    }
  },
  hi = {
    delete: {
      Delete: "",
      "Click to delete": ""
    },
    moveUp: {
      "Move up": ""
    },
    moveDown: {
      "Move down": ""
    }
  },
  Fo = {
    ui: ci,
    toolNames: di,
    tools: ui,
    blockTunes: hi
  },
  jo = class he {
    static ui(e, t) {
      return he._t(e, t);
    }
    static t(e, t) {
      return he._t(e, t);
    }
    static setDictionary(e) {
      he.currentDictionary = e;
    }
    static _t(e, t) {
      const o = he.getNamespace(e);
      return !o || !o[t] ? t : o[t];
    }
    static getNamespace(e) {
      return e.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], he.currentDictionary);
    }
  };
jo.currentDictionary = Fo;
var z = jo;
var Ho = class extends Error {};
var Oe = class {
  constructor() {
    this.subscribers = {};
  }
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = i => {
      const s = t(i),
        r = this.subscribers[e].indexOf(o);
      return r !== -1 && this.subscribers[e].splice(r, 1), s;
    };
    this.subscribers[e].push(o);
  }
  emit(e, t) {
    V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const s = i(o);
      return s !== void 0 ? s : o;
    }, t);
  }
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++) if (this.subscribers[e][o] === t) {
      delete this.subscribers[e][o];
      break;
    }
  }
  destroy() {
    this.subscribers = {};
  }
};
function J(n) {
  Object.setPrototypeOf(this, {
    get id() {
      return n.id;
    },
    get name() {
      return n.name;
    },
    get config() {
      return n.config;
    },
    get holder() {
      return n.holder;
    },
    get isEmpty() {
      return n.isEmpty;
    },
    get selected() {
      return n.selected;
    },
    set stretched(t) {
      n.stretched = t;
    },
    get stretched() {
      return n.stretched;
    },
    get focusable() {
      return n.focusable;
    },
    call(t, o) {
      return n.call(t, o);
    },
    save() {
      return n.save();
    },
    validate(t) {
      return n.validate(t);
    },
    dispatchChange() {
      n.dispatchChange();
    },
    getActiveToolboxEntry() {
      return n.getActiveToolboxEntry();
    }
  });
}
var _e = class {
  constructor() {
    this.allListeners = [];
  }
  on(e, t, o, i = false) {
    const s = si("l"),
      r = {
        id: s,
        element: e,
        eventType: t,
        handler: o,
        options: i
      };
    if (!this.findOne(e, t, o)) return this.allListeners.push(r), e.addEventListener(t, o, i), s;
  }
  off(e, t, o, i) {
    const s = this.findAll(e, t, o);
    s.forEach((r, a) => {
      const l = this.allListeners.indexOf(s[a]);
      l > -1 && (this.allListeners.splice(l, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
    });
  }
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  findAll(e, t, o) {
    let i;
    const s = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = s.filter(r => r.eventType === t && r.handler === o) : e && t ? i = s.filter(r => r.eventType === t) : i = s, i;
  }
  removeAll() {
    this.allListeners.map(e => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  destroy() {
    this.removeAll();
  }
  findByEventTarget(e) {
    return this.allListeners.filter(t => {
      if (t.element === e) return t;
    });
  }
  findByType(e) {
    return this.allListeners.filter(t => {
      if (t.eventType === e) return t;
    });
  }
  findByHandler(e) {
    return this.allListeners.filter(t => {
      if (t.handler === e) return t;
    });
  }
  findById(e) {
    return this.allListeners.find(t => t.id === e);
  }
};
var E = class {
  constructor({
    config: e,
    eventsDispatcher: t
  }) {
    if (this.nodes = {}, this.listeners = new _e(), this.readOnlyMutableListeners = {
      on: (o, i, s, r = false) => {
        this.mutableListenerIds.push(this.listeners.on(o, i, s, r));
      },
      clearAll: () => {
        for (const o of this.mutableListenerIds) this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === E) throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  set state(e) {
    this.Editor = e;
  }
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
};
var b = class {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = false, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  static get anchorElement() {
    const e = window.getSelection();
    if (!e) return null;
    const t = e.anchorNode;
    return t ? u.isElement(t) ? t : t.parentElement : null;
  }
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  static get isAtEditor() {
    return this.isSelectionAtEditor(b.get());
  }
  static isSelectionAtEditor(e) {
    if (!e) return false;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : false;
  }
  static isRangeAtEditor(e) {
    if (!e) return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : false;
  }
  static get isSelectionExists() {
    return !!b.get().anchorNode;
  }
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  static get rect() {
    let e = document.selection,
      t,
      o = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    if (e && e.type !== "Control") return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection) return S("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount)) return S("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0) return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("\u200B")), t.insertNode(i), o = i.getBoundingClientRect();
        const s = i.parentNode;
        s.removeChild(i), s.normalize();
      }
    }
    return o;
  }
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  static get() {
    return window.getSelection();
  }
  static setCursor(e, t = 0) {
    const o = document.createRange(),
      i = window.getSelection();
    return u.isNativeInput(e) ? u.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  static isRangeInsideContainer(e) {
    const t = b.range;
    return t === null ? false : e.contains(t.startContainer);
  }
  static addFakeCursor() {
    const e = b.range;
    if (e === null) return;
    const t = u.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  static isFakeCursorInsideContainer(e) {
    return u.find(e, ".codex-editor__fake-cursor") !== null;
  }
  static removeFakeCursor(e = document.body) {
    const t = u.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = false, document.execCommand(this.commandRemoveFormat));
  }
  setFakeBackground() {
    document.execCommand(this.commandBackground, false, "#a8d6ff"), this.isFakeBackgroundEnabled = true;
  }
  save() {
    this.savedSelectionRange = b.range;
  }
  restore() {
    if (!this.savedSelectionRange) return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  clearSaved() {
    this.savedSelectionRange = null;
  }
  collapseToEnd() {
    const e = window.getSelection(),
      t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(false), e.removeAllRanges(), e.addRange(t);
  }
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let s = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([i.anchorNode, i.focusNode].forEach(a => {
      let l = o;
      for (; l > 0 && a.parentNode && !(a.tagName === e && (s = a, t && a.classList && !a.classList.contains(t) && (s = null), s));) a = a.parentNode, l--;
    }), s);
  }
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
};
function pi(n, e) {
  const {
    type: t,
    target: o,
    addedNodes: i,
    removedNodes: s
  } = n;
  return n.type === "attributes" && n.attributeName === "data-empty" ? false : !!(e.contains(o) || t === "childList" && (Array.from(i).some(l => l === e) || Array.from(s).some(l => l === e)));
}
var ft = "redactor dom changed",
  $o = "block changed",
  zo = "fake cursor is about to be toggled",
  Uo = "fake cursor have been set",
  Te = "editor mobile layout toggled";
function gt(n, e) {
  if (!n.conversionConfig) return false;
  const t = n.conversionConfig[e];
  return A(t) || te(t);
}
function He(n, e) {
  return gt(n.tool, e);
}
function Wo(n, e) {
  return Object.entries(n).some(([t, o]) => e[t] && ri(e[t], o));
}
async function Yo(n, e) {
  const o = (await n.save()).data,
    i = e.find(s => s.name === n.name);
  return i !== void 0 && !gt(i, "export") ? [] : e.reduce((s, r) => {
    if (!gt(r, "import") || r.toolbox === void 0) return s;
    const a = r.toolbox.filter(l => {
      if (V(l) || l.icon === void 0) return false;
      if (l.data !== void 0) {
        if (Wo(l.data, o)) return false;
      } else if (r.name === n.name) return false;
      return true;
    });
    return s.push({
      ...r,
      toolbox: a
    }), s;
  }, []);
}
function xo(n, e) {
  return n.mergeable ? n.name === e.name ? true : He(e, "export") && He(n, "import") : false;
}
function fi(n, e) {
  const t = e == null ? void 0 : e.export;
  return A(t) ? t(n) : te(t) ? n[t] : (t !== void 0 && S("Conversion \xABexport\xBB property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function Bo(n, e, t) {
  const o = e == null ? void 0 : e.import;
  return A(o) ? o(n, t) : te(o) ? {
    [o]: n
  } : (o !== void 0 && S("Conversion \xABimport\xBB property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var _ = /* @__PURE__ */(n => (n.Default = "default", n.Separator = "separator", n.Html = "html", n))(_ || {}),
  ee = /* @__PURE__ */(n => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(ee || {});
var R = class extends Oe {
  constructor({
    id: e = ni(),
    data: t,
    tool: o,
    readOnly: i,
    tunesData: s
  }, r) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */new Map(), this.defaultTunesInstances = /* @__PURE__ */new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (a = void 0) => {
      const l = a === void 0,
        c = a instanceof InputEvent;
      !l && !c && this.detectToolRootChange(a);
      let d;
      l || c ? d = true : d = !(a.length > 0 && a.every(p => {
        const {
          addedNodes: g,
          removedNodes: f,
          target: v
        } = p;
        return [...Array.from(g), ...Array.from(f), v].some(T => (u.isElement(T) || (T = T.parentElement), T && T.closest('[data-mutation-free="true"]') !== null));
      })), d && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call("updated"), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.editorEventBus = r || null, this.blockAPI = new J(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(s), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  get inputs() {
    if (this.cachedInputs.length !== 0) return this.cachedInputs;
    const e = u.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  set currentInput(e) {
    const t = this.inputs.findIndex(o => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  get firstInput() {
    return this.inputs[0];
  }
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  get data() {
    return this.save().then(e => e && !V(e.data) ? e.data : {});
  }
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  get mergeable() {
    return A(this.toolInstance.merge);
  }
  get focusable() {
    return this.inputs.length !== 0;
  }
  get isEmpty() {
    const e = u.isEmpty(this.pluginsContent, "/"),
      t = !this.hasMedia;
    return e && t;
  }
  get hasMedia() {
    const e = ["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"];
    return !!this.holder.querySelector(e.join(","));
  }
  set selected(e) {
    var i, s;
    this.holder.classList.toggle(R.CSS.selected, e);
    const t = e === true && b.isRangeInsideContainer(this.holder),
      o = e === false && b.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((i = this.editorEventBus) == null || i.emit(zo, {
      state: e
    }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s = this.editorEventBus) == null || s.emit(Uo, {
      state: e
    }));
  }
  get selected() {
    return this.holder.classList.contains(R.CSS.selected);
  }
  set stretched(e) {
    this.holder.classList.toggle(R.CSS.wrapperStretched, e);
  }
  get stretched() {
    return this.holder.classList.contains(R.CSS.wrapperStretched);
  }
  set dropTarget(e) {
    this.holder.classList.toggle(R.CSS.dropTarget, e);
  }
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  call(e, t) {
    if (A(this.toolInstance[e])) {
      e === "appendCallback" && S("`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead", "warn");
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        S(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent),
      t = this.unavailableTunesData;
    [...this.tunesInstances.entries(), ...this.defaultTunesInstances.entries()].forEach(([s, r]) => {
      if (A(r.save)) try {
        t[s] = r.save();
      } catch (a) {
        S(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", a);
      }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then(s => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: s,
      tunes: t,
      time: i - o
    })).catch(s => {
      S(`Saving process for ${this.name} tool failed due to the ${s}`, "log", "red");
    });
  }
  async validate(e) {
    let t = true;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  getTunes() {
    const e = [],
      t = [],
      o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return u.isElement(o) ? e.push({
      type: _.Html,
      element: o
    }) : Array.isArray(o) ? e.push(...o) : e.push(o), [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].map(s => s.render()).forEach(s => {
      u.isElement(s) ? t.push({
        type: _.Html,
        element: s
      }) : Array.isArray(s) ? t.push(...s) : t.push(s);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  updateCurrentInput() {
    this.currentInput = u.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
  }
  dispatchChange() {
    this.didMutated();
  }
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), A(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1) return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data,
      o = e;
    return o == null ? void 0 : o.find(i => Wo(i.data, t));
  }
  async exportDataAsString() {
    const e = await this.data;
    return fi(e, this.tool.conversionConfig);
  }
  compose() {
    const e = u.make("div", R.CSS.wrapper),
      t = u.make("div", R.CSS.content),
      o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach(s => {
      if (A(s.wrap)) try {
        i = s.wrap(i);
      } catch (r) {
        S(`Tune ${s.constructor.name} wrap method throws an Error %o`, "warn", r);
      }
    }), e.appendChild(i), e;
  }
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach(t => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  addInputEvents() {
    this.inputs.forEach(e => {
      e.addEventListener("focus", this.handleFocus), u.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  removeInputEvents() {
    this.inputs.forEach(e => {
      e.removeEventListener("focus", this.handleFocus), u.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = t => {
      const {
        mutations: o
      } = t;
      o.some(s => pi(s, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(ft, this.redactorDomChangedCallback);
  }
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(ft, this.redactorDomChangedCallback);
  }
  detectToolRootChange(e) {
    e.forEach(t => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  dropInputsCache() {
    this.cachedInputs = [];
  }
  toggleInputsEmptyMark() {
    this.inputs.forEach(Do);
  }
};
var gi = class extends E {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, s, r, a) => {
      const l = this.Editor.BlockManager.insert({
        id: a,
        tool: e,
        data: t,
        index: i,
        needToFocus: s,
        replace: r
      });
      return new J(l);
    }, this.composeBlockData = async e => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new R({
        tool: t,
        api: this.Editor.API,
        readOnly: true,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t, o) => {
      const {
          BlockManager: i
        } = this.Editor,
        s = i.getBlockById(e);
      if (s === void 0) throw new Error(`Block with id "${e}" not found`);
      const r = await i.update(s, t, o);
      return new J(r);
    }, this.convert = async (e, t, o) => {
      var h, p;
      const {
          BlockManager: i,
          Tools: s
        } = this.Editor,
        r = i.getBlockById(e);
      if (!r) throw new Error(`Block with id "${e}" not found`);
      const a = s.blockTools.get(r.name),
        l = s.blockTools.get(t);
      if (!l) throw new Error(`Block Tool with type "${t}" not found`);
      const c = ((h = a == null ? void 0 : a.conversionConfig) == null ? void 0 : h.export) !== void 0,
        d = ((p = l.conversionConfig) == null ? void 0 : p.import) !== void 0;
      if (c && d) {
        const g = await i.convert(r, t, o);
        return new J(g);
      } else {
        const g = [c ? false : je(r.name), d ? false : je(t)].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${g} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({
        id: i,
        type: s,
        data: r
      }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: s || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map(i => new J(i));
    };
  }
  get methods() {
    return {
      clear: () => this.clear(),
      render: e => this.render(e),
      renderFromHTML: e => this.renderFromHTML(e),
      delete: e => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: e => this.getBlockByIndex(e),
      getById: e => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: e => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: e => this.getBlockByElement(e),
      stretchBlock: (e, t = true) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      X("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      X("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new J(t);
  }
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new J(t);
  }
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      X("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new J(t);
  }
  swap(e, t) {
    S("`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead", "info"), this.Editor.BlockManager.swap(e, t);
  }
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      X(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  async clear() {
    await this.Editor.BlockManager.clear(true), this.Editor.InlineToolbar.close();
  }
  async render(e) {
    if (e === void 0 || e.blocks === void 0) throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  async renderFromHTML(e) {
    return await this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, true);
  }
  stretchBlock(e, t = true) {
    ht(true, "blocks.stretchBlock()", "BlockAPI");
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  insertNewBlock() {
    S("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  validateIndex(e) {
    if (typeof e != "number") throw new Error("Index should be a number");
    if (e < 0) throw new Error("Index should be greater than or equal to 0");
    if (e === null) throw new Error("Index should be greater than or equal to 0");
  }
};
function mi(n, e) {
  return typeof n == "number" ? e.BlockManager.getBlockByIndex(n) : typeof n == "string" ? e.BlockManager.getBlockById(n) : e.BlockManager.getBlockById(n.id);
}
var bi = class extends E {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), true) : false, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), true) : false, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), true) : false, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), true) : false, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => {
      const i = mi(e, this.Editor);
      return i === void 0 ? false : (this.Editor.Caret.setToBlock(i, t, o), true);
    }, this.focus = (e = false) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
};
var vi = class extends E {
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
};
var kt = class extends E {
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  get methods() {
    return {
      t: () => {
        X("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  getMethodsForTool(e, t) {
    return Object.assign(this.methods, {
      t: o => z.t(kt.getNamespace(e, t), o)
    });
  }
};
var ki = class extends E {
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  getMethodsForTool(e, t) {
    return Object.assign(this.methods, {
      i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
    });
  }
};
var yi = class extends E {
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  close() {
    this.Editor.InlineToolbar.close();
  }
};
var wi = class extends E {
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: e => this.offById(e)
    };
  }
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  offById(e) {
    this.listeners.offById(e);
  }
};
var Ko = {
  exports: {}
};
(function (n, e) {
  (function (t, o) {
    n.exports = o();
  })(window, function () {
    return function (t) {
      var o = {};
      function i(s) {
        if (o[s]) return o[s].exports;
        var r = o[s] = {
          i: s,
          l: false,
          exports: {}
        };
        return t[s].call(r.exports, r, r.exports, i), r.l = true, r.exports;
      }
      return i.m = t, i.c = o, i.d = function (s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, {
          enumerable: true,
          get: a
        });
      }, i.r = function (s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(s, "__esModule", {
          value: true
        });
      }, i.t = function (s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule) return s;
        var a = /* @__PURE__ */Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
          enumerable: true,
          value: s
        }), 2 & r && typeof s != "string") for (var l in s) i.d(a, l, function (c) {
          return s[c];
        }.bind(null, l));
        return a;
      }, i.n = function (s) {
        var r = s && s.__esModule ? function () {
          return s.default;
        } : function () {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function (s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "/", i(i.s = 0);
    }([function (t, o, i) {
      i(1), t.exports = function () {
        var s = i(6),
          r = "cdx-notify--bounce-in",
          a = null;
        return {
          show: function (l) {
            if (l.message) {
              (function () {
                if (a) return true;
                a = s.getWrapper(), document.body.appendChild(a);
              })();
              var c = null,
                d = l.time || 8e3;
              switch (l.type) {
                case "confirm":
                  c = s.confirm(l);
                  break;
                case "prompt":
                  c = s.prompt(l);
                  break;
                default:
                  c = s.alert(l), window.setTimeout(function () {
                    c.remove();
                  }, d);
              }
              a.appendChild(c), c.classList.add(r);
            }
          }
        };
      }();
    }, function (t, o, i) {
      var s = i(2);
      typeof s == "string" && (s = [[t.i, s, ""]]);
      var r = {
        hmr: true,
        transform: void 0,
        insertInto: void 0
      };
      i(4)(s, r), s.locals && (t.exports = s.locals);
    }, function (t, o, i) {
      (t.exports = i(3)(false)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function (t, o) {
      t.exports = function (i) {
        var s = [];
        return s.toString = function () {
          return this.map(function (r) {
            var a = function (l, c) {
              var d = l[1] || "",
                h = l[3];
              if (!h) return d;
              if (c && typeof btoa == "function") {
                var p = (f = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"),
                  g = h.sources.map(function (v) {
                    return "/*# sourceURL=" + h.sourceRoot + v + " */";
                  });
                return [d].concat(g).concat([p]).join(`
`);
              }
              var f;
              return [d].join(`
`);
            }(r, i);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, s.i = function (r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var d = this[c][0];
            typeof d == "number" && (l[d] = true);
          }
          for (c = 0; c < r.length; c++) {
            var h = r[c];
            typeof h[0] == "number" && l[h[0]] || (a && !h[2] ? h[2] = a : a && (h[2] = "(" + h[2] + ") and (" + a + ")"), s.push(h));
          }
        }, s;
      };
    }, function (t, o, i) {
      var s,
        r,
        a = {},
        l = (s = function () {
          return window && document && document.all && !window.atob;
        }, function () {
          return r === void 0 && (r = s.apply(this, arguments)), r;
        }),
        c = function (k) {
          var m = {};
          return function (w) {
            if (typeof w == "function") return w();
            if (m[w] === void 0) {
              var x = function (I) {
                return document.querySelector(I);
              }.call(this, w);
              if (window.HTMLIFrameElement && x instanceof window.HTMLIFrameElement) try {
                x = x.contentDocument.head;
              } catch {
                x = null;
              }
              m[w] = x;
            }
            return m[w];
          };
        }(),
        d = null,
        h = 0,
        p = [],
        g = i(5);
      function f(k, m) {
        for (var w = 0; w < k.length; w++) {
          var x = k[w],
            I = a[x.id];
          if (I) {
            I.refs++;
            for (var C = 0; C < I.parts.length; C++) I.parts[C](x.parts[C]);
            for (; C < x.parts.length; C++) I.parts.push(F(x.parts[C], m));
          } else {
            var N = [];
            for (C = 0; C < x.parts.length; C++) N.push(F(x.parts[C], m));
            a[x.id] = {
              id: x.id,
              refs: 1,
              parts: N
            };
          }
        }
      }
      function v(k, m) {
        for (var w = [], x = {}, I = 0; I < k.length; I++) {
          var C = k[I],
            N = m.base ? C[0] + m.base : C[0],
            B = {
              css: C[1],
              media: C[2],
              sourceMap: C[3]
            };
          x[N] ? x[N].parts.push(B) : w.push(x[N] = {
            id: N,
            parts: [B]
          });
        }
        return w;
      }
      function O(k, m) {
        var w = c(k.insertInto);
        if (!w) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var x = p[p.length - 1];
        if (k.insertAt === "top") x ? x.nextSibling ? w.insertBefore(m, x.nextSibling) : w.appendChild(m) : w.insertBefore(m, w.firstChild), p.push(m);else if (k.insertAt === "bottom") w.appendChild(m);else {
          if (typeof k.insertAt != "object" || !k.insertAt.before) throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var I = c(k.insertInto + " " + k.insertAt.before);
          w.insertBefore(m, I);
        }
      }
      function T(k) {
        if (k.parentNode === null) return false;
        k.parentNode.removeChild(k);
        var m = p.indexOf(k);
        m >= 0 && p.splice(m, 1);
      }
      function M(k) {
        var m = document.createElement("style");
        return k.attrs.type === void 0 && (k.attrs.type = "text/css"), q(m, k.attrs), O(k, m), m;
      }
      function q(k, m) {
        Object.keys(m).forEach(function (w) {
          k.setAttribute(w, m[w]);
        });
      }
      function F(k, m) {
        var w, x, I, C;
        if (m.transform && k.css) {
          if (!(C = m.transform(k.css))) return function () {};
          k.css = C;
        }
        if (m.singleton) {
          var N = h++;
          w = d || (d = M(m)), x = ie.bind(null, w, N, false), I = ie.bind(null, w, N, true);
        } else k.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (w = function (B) {
          var W = document.createElement("link");
          return B.attrs.type === void 0 && (B.attrs.type = "text/css"), B.attrs.rel = "stylesheet", q(W, B.attrs), O(B, W), W;
        }(m), x = function (B, W, ve) {
          var se = ve.css,
            tt = ve.sourceMap,
            Yn = W.convertToAbsoluteUrls === void 0 && tt;
          (W.convertToAbsoluteUrls || Yn) && (se = g(se)), tt && (se += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(tt)))) + " */");
          var Kn = new Blob([se], {
              type: "text/css"
            }),
            ko = B.href;
          B.href = URL.createObjectURL(Kn), ko && URL.revokeObjectURL(ko);
        }.bind(null, w, m), I = function () {
          T(w), w.href && URL.revokeObjectURL(w.href);
        }) : (w = M(m), x = function (B, W) {
          var ve = W.css,
            se = W.media;
          if (se && B.setAttribute("media", se), B.styleSheet) B.styleSheet.cssText = ve;else {
            for (; B.firstChild;) B.removeChild(B.firstChild);
            B.appendChild(document.createTextNode(ve));
          }
        }.bind(null, w), I = function () {
          T(w);
        });
        return x(k), function (B) {
          if (B) {
            if (B.css === k.css && B.media === k.media && B.sourceMap === k.sourceMap) return;
            x(k = B);
          } else I();
        };
      }
      t.exports = function (k, m) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object") throw new Error("The style-loader cannot be used in a non-browser environment");
        (m = m || {}).attrs = typeof m.attrs == "object" ? m.attrs : {}, m.singleton || typeof m.singleton == "boolean" || (m.singleton = l()), m.insertInto || (m.insertInto = "head"), m.insertAt || (m.insertAt = "bottom");
        var w = v(k, m);
        return f(w, m), function (x) {
          for (var I = [], C = 0; C < w.length; C++) {
            var N = w[C];
            (B = a[N.id]).refs--, I.push(B);
          }
          for (x && f(v(x, m), m), C = 0; C < I.length; C++) {
            var B;
            if ((B = I[C]).refs === 0) {
              for (var W = 0; W < B.parts.length; W++) B.parts[W]();
              delete a[B.id];
            }
          }
        };
      };
      var H,
        Q = (H = [], function (k, m) {
          return H[k] = m, H.filter(Boolean).join(`
`);
        });
      function ie(k, m, w, x) {
        var I = w ? "" : x.css;
        if (k.styleSheet) k.styleSheet.cssText = Q(m, I);else {
          var C = document.createTextNode(I),
            N = k.childNodes;
          N[m] && k.removeChild(N[m]), N.length ? k.insertBefore(C, N[m]) : k.appendChild(C);
        }
      }
    }, function (t, o) {
      t.exports = function (i) {
        var s = typeof window < "u" && window.location;
        if (!s) throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string") return i;
        var r = s.protocol + "//" + s.host,
          a = r + s.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (l, c) {
          var d,
            h = c.trim().replace(/^"(.*)"$/, function (p, g) {
              return g;
            }).replace(/^'(.*)'$/, function (p, g) {
              return g;
            });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (d = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(d) + ")");
        });
      };
    }, function (t, o, i) {
      var s, r, a, l, c, d, h, p, g;
      t.exports = (s = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", d = "cdx-notify__input", h = "cdx-notify__button", p = "cdx-notify__btns-wrapper", {
        alert: g = function (f) {
          var v = document.createElement("DIV"),
            O = document.createElement("DIV"),
            T = f.message,
            M = f.style;
          return v.classList.add(r), M && v.classList.add(r + "--" + M), v.innerHTML = T, O.classList.add(a), O.addEventListener("click", v.remove.bind(v)), v.appendChild(O), v;
        },
        confirm: function (f) {
          var v = g(f),
            O = document.createElement("div"),
            T = document.createElement("button"),
            M = document.createElement("button"),
            q = v.querySelector("." + a),
            F = f.cancelHandler,
            H = f.okHandler;
          return O.classList.add(p), T.innerHTML = f.okText || "Confirm", M.innerHTML = f.cancelText || "Cancel", T.classList.add(h), M.classList.add(h), T.classList.add(l), M.classList.add(c), F && typeof F == "function" && (M.addEventListener("click", F), q.addEventListener("click", F)), H && typeof H == "function" && T.addEventListener("click", H), T.addEventListener("click", v.remove.bind(v)), M.addEventListener("click", v.remove.bind(v)), O.appendChild(T), O.appendChild(M), v.appendChild(O), v;
        },
        prompt: function (f) {
          var v = g(f),
            O = document.createElement("div"),
            T = document.createElement("button"),
            M = document.createElement("input"),
            q = v.querySelector("." + a),
            F = f.cancelHandler,
            H = f.okHandler;
          return O.classList.add(p), T.innerHTML = f.okText || "Ok", T.classList.add(h), T.classList.add(l), M.classList.add(d), f.placeholder && M.setAttribute("placeholder", f.placeholder), f.default && (M.value = f.default), f.inputType && (M.type = f.inputType), F && typeof F == "function" && q.addEventListener("click", F), H && typeof H == "function" && T.addEventListener("click", function () {
            H(M.value);
          }), T.addEventListener("click", v.remove.bind(v)), O.appendChild(M), O.appendChild(T), v.appendChild(O), v;
        },
        getWrapper: function () {
          var f = document.createElement("DIV");
          return f.classList.add(s), f;
        }
      });
    }]);
  });
})(Ko);
var Ei = Ko.exports;
var xi = /* @__PURE__ */Ke(Ei);
var Bi = class {
  show(e) {
    xi.show(e);
  }
};
var Ci = class extends E {
  constructor({
    config: e,
    eventsDispatcher: t
  }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new Bi();
  }
  get methods() {
    return {
      show: e => this.show(e)
    };
  }
  show(e) {
    return this.notifier.show(e);
  }
};
var Ti = class extends E {
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: t => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
};
var Xo = {
  exports: {}
};
(function (n, e) {
  (function (t, o) {
    n.exports = o();
  })(Ce, function () {
    function t(h) {
      var p = h.tags,
        g = Object.keys(p),
        f = g.map(function (v) {
          return typeof p[v];
        }).every(function (v) {
          return v === "object" || v === "boolean" || v === "function";
        });
      if (!f) throw new Error("The configuration was invalid");
      this.config = h;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(h) {
      return o.indexOf(h.nodeName) !== -1;
    }
    var s = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(h) {
      return s.indexOf(h.nodeName) !== -1;
    }
    t.prototype.clean = function (h) {
      const p = document.implementation.createHTMLDocument(),
        g = p.createElement("div");
      return g.innerHTML = h, this._sanitize(p, g), g.innerHTML;
    }, t.prototype._sanitize = function (h, p) {
      var g = a(h, p),
        f = g.firstChild();
      if (f) do {
        if (f.nodeType === Node.TEXT_NODE) if (f.data.trim() === "" && (f.previousElementSibling && i(f.previousElementSibling) || f.nextElementSibling && i(f.nextElementSibling))) {
          p.removeChild(f), this._sanitize(h, p);
          break;
        } else continue;
        if (f.nodeType === Node.COMMENT_NODE) {
          p.removeChild(f), this._sanitize(h, p);
          break;
        }
        var v = r(f),
          O;
        v && (O = Array.prototype.some.call(f.childNodes, i));
        var T = !!p.parentNode,
          M = i(p) && i(f) && T,
          q = f.nodeName.toLowerCase(),
          F = l(this.config, q, f),
          H = v && O;
        if (H || c(f, F) || !this.config.keepNestedBlockElements && M) {
          if (!(f.nodeName === "SCRIPT" || f.nodeName === "STYLE")) for (; f.childNodes.length > 0;) p.insertBefore(f.childNodes[0], f);
          p.removeChild(f), this._sanitize(h, p);
          break;
        }
        for (var Q = 0; Q < f.attributes.length; Q += 1) {
          var ie = f.attributes[Q];
          d(ie, F, f) && (f.removeAttribute(ie.name), Q = Q - 1);
        }
        this._sanitize(h, f);
      } while (f = g.nextSibling());
    };
    function a(h, p) {
      return h.createTreeWalker(p, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, false);
    }
    function l(h, p, g) {
      return typeof h.tags[p] == "function" ? h.tags[p](g) : h.tags[p];
    }
    function c(h, p) {
      return typeof p > "u" ? true : typeof p == "boolean" ? !p : false;
    }
    function d(h, p, g) {
      var f = h.name.toLowerCase();
      return p === true ? false : typeof p[f] == "function" ? !p[f](h.value, g) : typeof p[f] > "u" || p[f] === false ? true : typeof p[f] == "string" ? p[f] !== h.value : false;
    }
    return t;
  });
})(Xo);
var Si = Xo.exports;
var Ii = /* @__PURE__ */Ke(Si);
function yt(n, e) {
  return n.map(t => {
    const o = A(e) ? e(t.tool) : e;
    return V(o) || (t.data = wt(t.data, o)), t;
  });
}
function Z(n, e = {}) {
  const t = {
    tags: e
  };
  return new Ii(t).clean(n);
}
function wt(n, e) {
  return Array.isArray(n) ? Oi(n, e) : D(n) ? _i(n, e) : te(n) ? Mi(n, e) : n;
}
function Oi(n, e) {
  return n.map(t => wt(t, e));
}
function _i(n, e) {
  const t = {};
  for (const o in n) {
    if (!Object.prototype.hasOwnProperty.call(n, o)) continue;
    const i = n[o],
      s = Ai(e[o]) ? e[o] : e;
    t[o] = wt(i, s);
  }
  return t;
}
function Mi(n, e) {
  return D(e) ? Z(n, e) : e === false ? Z(n, {}) : n;
}
function Ai(n) {
  return D(n) || Gn(n) || A(n);
}
var Li = class extends E {
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  clean(e, t) {
    return Z(e, t);
  }
};
var Pi = class extends E {
  get methods() {
    return {
      save: () => this.save()
    };
  }
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
};
var Ni = class extends E {
  constructor() {
    super(...arguments), this.selectionUtils = new b();
  }
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: e => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
};
var Ri = class extends E {
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
};
var Di = class extends E {
  get classes() {
    return {
      block: "cdx-block",
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
};
var Fi = class extends E {
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: e => this.toggleBlockSettings(e),
      toggleToolbox: e => this.toggleToolbox(e)
    };
  }
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  close() {
    this.Editor.Toolbar.close();
  }
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
};
var Vo = {
  exports: {}
};
(function (n, e) {
  (function (t, o) {
    n.exports = o();
  })(window, function () {
    return function (t) {
      var o = {};
      function i(s) {
        if (o[s]) return o[s].exports;
        var r = o[s] = {
          i: s,
          l: false,
          exports: {}
        };
        return t[s].call(r.exports, r, r.exports, i), r.l = true, r.exports;
      }
      return i.m = t, i.c = o, i.d = function (s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, {
          enumerable: true,
          get: a
        });
      }, i.r = function (s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(s, "__esModule", {
          value: true
        });
      }, i.t = function (s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule) return s;
        var a = /* @__PURE__ */Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
          enumerable: true,
          value: s
        }), 2 & r && typeof s != "string") for (var l in s) i.d(a, l, function (c) {
          return s[c];
        }.bind(null, l));
        return a;
      }, i.n = function (s) {
        var r = s && s.__esModule ? function () {
          return s.default;
        } : function () {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function (s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function (t, o, i) {
      t.exports = i(1);
    }, function (t, o, i) {
      i.r(o), i.d(o, "default", function () {
        return s;
      });
      class s {
        constructor() {
          this.nodes = {
            wrapper: null,
            content: null
          }, this.showed = false, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(true);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, {
            passive: true
          });
        }
        get CSS() {
          return {
            tooltip: "ct",
            tooltipContent: "ct__content",
            tooltipShown: "ct--shown",
            placement: {
              left: "ct--left",
              bottom: "ct--bottom",
              right: "ct--right",
              top: "ct--top"
            }
          };
        }
        show(a, l, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const d = Object.assign({
            placement: "bottom",
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            delay: 70,
            hidingDelay: 0
          }, c);
          if (d.hidingDelay && (this.hidingDelay = d.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string") this.nodes.content.appendChild(document.createTextNode(l));else {
            if (!(l instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), d.placement) {
            case "top":
              this.placeTop(a, d);
              break;
            case "left":
              this.placeLeft(a, d);
              break;
            case "right":
              this.placeRight(a, d);
              break;
            case "bottom":
            default:
              this.placeBottom(a, d);
          }
          d && d.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
          }, d.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
        }
        hide(a = false) {
          if (this.hidingDelay && !a) return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
            this.hide(true);
          }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = false, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(a, l, c) {
          a.addEventListener("mouseenter", () => {
            this.show(a, l, c);
          }), a.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const a = "codex-tooltips-style";
          if (document.getElementById(a)) return;
          const l = i(2),
            c = this.make("style", null, {
              textContent: l.toString(),
              id: a
            });
          this.prepend(document.head, c);
        }
        placeBottom(a, l) {
          const c = a.getBoundingClientRect(),
            d = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
            h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", d, h);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(),
            d = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
            h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", d, h);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(),
            d = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft,
            h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", d, h);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(),
            d = c.right + this.offsetRight + l.marginRight,
            h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", d, h);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const d = document.createElement(a);
          Array.isArray(l) ? d.classList.add(...l) : l && d.classList.add(l);
          for (const h in c) c.hasOwnProperty(h) && (d[h] = c[h]);
          return d;
        }
        append(a, l) {
          Array.isArray(l) ? l.forEach(c => a.appendChild(c)) : a.appendChild(l);
        }
        prepend(a, l) {
          Array.isArray(l) ? (l = l.reverse()).forEach(c => a.prepend(c)) : a.prepend(l);
        }
      }
    }, function (t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})(Vo);
var ji = Vo.exports;
var Hi = /* @__PURE__ */Ke(ji);
var U = null;
function Et() {
  U || (U = new Hi());
}
function $i(n, e, t) {
  Et(), U == null || U.show(n, e, t);
}
function $e(n = false) {
  Et(), U == null || U.hide(n);
}
function ze(n, e, t) {
  Et(), U == null || U.onHover(n, e, t);
}
function zi() {
  U == null || U.destroy(), U = null;
}
var Ui = class extends E {
  constructor({
    config: e,
    eventsDispatcher: t
  }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  show(e, t, o) {
    $i(e, t, o);
  }
  hide() {
    $e();
  }
  onHover(e, t, o) {
    ze(e, t, o);
  }
};
var Wi = class extends E {
  get methods() {
    return {
      nodes: this.editorNodes
    };
  }
  get editorNodes() {
    return {
      wrapper: this.Editor.UI.nodes.wrapper,
      redactor: this.Editor.UI.nodes.redactor
    };
  }
};
function qo(n, e) {
  const t = {};
  return Object.entries(n).forEach(([o, i]) => {
    if (D(i)) {
      const s = e ? `${e}.${o}` : o;
      Object.values(i).every(a => te(a)) ? t[o] = s : t[o] = qo(i, s);
      return;
    }
    t[o] = i;
  }), t;
}
var K = qo(Fo);
function Yi(n, e) {
  const t = {};
  return Object.keys(n).forEach(o => {
    const i = e[o];
    i !== void 0 ? t[i] = n[o] : t[o] = n[o];
  }), t;
}
var Zo = class Ee {
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  setItems(e) {
    this.items = e;
  }
  next() {
    this.cursor = this.leafNodesAndReturnIndex(Ee.directions.RIGHT);
  }
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(Ee.directions.LEFT);
  }
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0) return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === Ee.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === Ee.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, u.canSetCaret(this.items[t]) && Fe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
Zo.directions = {
  RIGHT: "right",
  LEFT: "left"
};
var ke = Zo;
var ce = class {
  constructor(e) {
    this.iterator = null, this.activated = false, this.flipCallbacks = [], this.onKeyDown = t => {
      if (!(!this.isEventReadyForHandling(t) || t.shiftKey === true)) switch (ce.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
        case y.TAB:
          this.handleTabPress(t);
          break;
        case y.LEFT:
        case y.UP:
          this.flipLeft();
          break;
        case y.RIGHT:
        case y.DOWN:
          this.flipRight();
          break;
        case y.ENTER:
          this.handleEnterPress(t);
          break;
      }
    }, this.iterator = new ke(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || ce.usedKeys;
  }
  get isActivated() {
    return this.activated;
  }
  static get usedKeys() {
    return [y.TAB, y.LEFT, y.RIGHT, y.ENTER, y.UP, y.DOWN];
  }
  activate(e, t) {
    this.activated = true, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, true);
  }
  deactivate() {
    this.activated = false, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter(t => t !== e);
  }
  dropCursor() {
    this.iterator.dropCursor();
  }
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  handleTabPress(e) {
    switch (e.shiftKey ? ke.directions.LEFT : ke.directions.RIGHT) {
      case ke.directions.RIGHT:
        this.flipRight();
        break;
      case ke.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), A(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach(e => e());
  }
};
var Ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>',
  Xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',
  Vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>',
  qi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>',
  Zi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>',
  Gi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>',
  Qi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>',
  Ji = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>',
  Co = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>',
  es = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>',
  ts = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>',
  Go = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>',
  os = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',
  ns = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',
  is = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>',
  ss = "__",
  rs = "--";
function ne(n) {
  return (e, t) => [[n, e].filter(i => !!i).join(ss), t].filter(i => !!i).join(rs);
}
var ye = ne("ce-hint"),
  we = {
    root: ye(),
    alignedStart: ye(null, "align-left"),
    alignedCenter: ye(null, "align-center"),
    title: ye("title"),
    description: ye("description")
  };
var as = class {
  constructor(e) {
    this.nodes = {
      root: u.make("div", [we.root, e.alignment === "center" ? we.alignedCenter : we.alignedStart]),
      title: u.make("div", we.title, {
        textContent: e.title
      })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = u.make("div", we.description, {
      textContent: e.description
    }), this.nodes.root.appendChild(this.nodes.description));
  }
  getElement() {
    return this.nodes.root;
  }
};
var xt = class {
  constructor(e) {
    this.params = e;
  }
  get name() {
    if (this.params !== void 0 && "name" in this.params) return this.params.name;
  }
  destroy() {
    $e();
  }
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  handleClick() {
    var e, t;
    this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  addHint(e, t) {
    const o = new as(t);
    ze(e, o.getElement(), {
      placement: t.position,
      hidingDelay: 100
    });
  }
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  get hasChildren() {
    return this.children.length > 0;
  }
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === true;
  }
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === false);
  }
  get isChildrenSearchable() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === true;
  }
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? false : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === true;
  }
};
var Y = ne("ce-popover-item"),
  L = {
    container: Y(),
    active: Y(null, "active"),
    disabled: Y(null, "disabled"),
    focused: Y(null, "focused"),
    hidden: Y(null, "hidden"),
    confirmationState: Y(null, "confirmation"),
    noHover: Y(null, "no-hover"),
    noFocus: Y(null, "no-focus"),
    title: Y("title"),
    secondaryTitle: Y("secondary-title"),
    icon: Y("icon"),
    iconTool: Y("icon", "tool"),
    iconChevronRight: Y("icon", "chevron-right"),
    wobbleAnimation: ne("wobble")()
  };
var re = class extends xt {
  constructor(e, t) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(L.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(L.noHover);
    }, this.onErrorAnimationEnd = () => {
      var o, i;
      (o = this.nodes.icon) == null || o.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, t);
  }
  get isDisabled() {
    return this.params.isDisabled === true;
  }
  get toggle() {
    return this.params.toggle;
  }
  get title() {
    return this.params.title;
  }
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  get isFocused() {
    return this.nodes.root === null ? false : this.nodes.root.classList.contains(L.focused);
  }
  getElement() {
    return this.nodes.root;
  }
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
  }
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
  }
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  make(e, t) {
    var s, r;
    const o = (t == null ? void 0 : t.wrapperTag) || "div",
      i = u.make(o, L.container, {
        type: o === "button" ? "button" : void 0
      });
    return e.name && (i.dataset.itemName = e.name), this.nodes.icon = u.make("div", [L.icon, L.iconTool], {
      innerHTML: e.icon || Qi
    }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(u.make("div", L.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && i.appendChild(u.make("div", L.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && i.appendChild(u.make("div", [L.icon, L.iconChevronRight], {
      innerHTML: qi
    })), this.isActive && i.classList.add(L.active), e.isDisabled && i.classList.add(L.disabled), e.hint !== void 0 && ((s = t == null ? void 0 : t.hint) == null ? void 0 : s.enabled) !== false && this.addHint(i, {
      ...e.hint,
      position: ((r = t == null ? void 0 : t.hint) == null ? void 0 : r.position) || "right"
    }), i;
  }
  enableConfirmationMode(e) {
    if (this.nodes.root === null) return;
    const t = {
        ...this.params,
        ...e,
        confirmation: "confirmation" in e ? e.confirmation : void 0
      },
      o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  disableConfirmationMode() {
    if (this.nodes.root === null) return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  enableSpecialHoverAndFocusBehavior() {
    var e, t, o;
    (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o = this.nodes.root) == null || o.addEventListener("mouseleave", this.removeSpecialHoverBehavior, {
      once: true
    });
  }
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0) try {
      (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
    } catch {
      this.animateError();
    } else this.enableConfirmationMode(e.confirmation);
  }
  animateError() {
    var e, t, o;
    (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o = this.nodes.icon) == null || o.addEventListener("animationend", this.onErrorAnimationEnd));
  }
};
var nt = ne("ce-popover-item-separator"),
  it = {
    container: nt(),
    line: nt("line"),
    hidden: nt(null, "hidden")
  };
var Qo = class extends xt {
  constructor() {
    super(), this.nodes = {
      root: u.make("div", it.container),
      line: u.make("div", it.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  getElement() {
    return this.nodes.root;
  }
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(it.hidden, e);
  }
};
var G = /* @__PURE__ */(n => (n.Closed = "closed", n.ClosedOnActivate = "closed-on-activate", n))(G || {});
var $ = ne("ce-popover"),
  P = {
    popover: $(),
    popoverContainer: $("container"),
    popoverOpenTop: $(null, "open-top"),
    popoverOpenLeft: $(null, "open-left"),
    popoverOpened: $(null, "opened"),
    search: $("search"),
    nothingFoundMessage: $("nothing-found-message"),
    nothingFoundMessageDisplayed: $("nothing-found-message", "displayed"),
    items: $("items"),
    overlay: $("overlay"),
    overlayHidden: $("overlay", "hidden"),
    popoverNested: $(null, "nested"),
    getPopoverNestedClass: n => $(null, `nested-level-${n.toString()}`),
    popoverInline: $(null, "inline"),
    popoverHeader: $("header")
  };
var fe = /* @__PURE__ */(n => (n.NestingLevel = "--nesting-level", n.PopoverHeight = "--popover-height", n.InlinePopoverWidth = "--inline-popover-width", n.TriggerItemLeft = "--trigger-item-left", n.TriggerItemTop = "--trigger-item-top", n))(fe || {});
var To = ne("ce-popover-item-html"),
  So = {
    root: To(),
    hidden: To(null, "hidden")
  };
var Se = class extends xt {
  constructor(e, t) {
    var o, i;
    super(e), this.nodes = {
      root: u.make("div", So.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o = t == null ? void 0 : t.hint) == null ? void 0 : o.enabled) !== false && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
    });
  }
  getElement() {
    return this.nodes.root;
  }
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(So.hidden, e);
  }
  getControls() {
    const e = this.nodes.root.querySelectorAll(`button, ${u.allInputsSelector}`);
    return Array.from(e);
  }
};
var Jo = class extends Oe {
  constructor(e, t = {}) {
    super(), this.params = e, this.itemsRenderParams = t, this.listeners = new _e(), this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), this.nodes = {}, this.nodes.popoverContainer = u.make("div", [P.popoverContainer]), this.nodes.nothingFoundMessage = u.make("div", [P.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = u.make("div", [P.items]), this.items.forEach(o => {
      const i = o.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", o => this.handleClick(o)), this.nodes.popover = u.make("div", [P.popover, this.params.class]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  get itemsDefault() {
    return this.items.filter(e => e instanceof re);
  }
  getElement() {
    return this.nodes.popover;
  }
  show() {
    this.nodes.popover.classList.add(P.popoverOpened), this.search !== void 0 && this.search.focus();
  }
  hide() {
    this.nodes.popover.classList.remove(P.popoverOpened), this.nodes.popover.classList.remove(P.popoverOpenTop), this.itemsDefault.forEach(e => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(G.Closed);
  }
  destroy() {
    var e;
    this.items.forEach(t => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
  }
  activateItemByName(e) {
    const t = this.items.find(o => o.name === e);
    this.handleItemClick(t);
  }
  buildItems(e) {
    return e.map(t => {
      switch (t.type) {
        case _.Separator:
          return new Qo();
        case _.Html:
          return new Se(t, this.itemsRenderParams[_.Html]);
        default:
          return new re(t, this.itemsRenderParams[_.Default]);
      }
    });
  }
  getTargetItem(e) {
    return this.items.filter(t => t instanceof re || t instanceof Se).find(t => {
      const o = t.getElement();
      return o === null ? false : e.composedPath().includes(o);
    });
  }
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter(t => t !== e).forEach(t => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(G.ClosedOnActivate));
    }
  }
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof re && (e.toggle === true && e.toggleActive(), typeof e.toggle == "string")) {
      const t = this.itemsDefault.filter(o => o.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach(o => {
        o.toggleActive(o === e);
      });
    }
  }
};
var Ue = /* @__PURE__ */(n => (n.Search = "search", n))(Ue || {});
var st = ne("cdx-search-field"),
  rt = {
    wrapper: st(),
    icon: st("icon"),
    input: st("input")
  };
var ls = class extends Oe {
  constructor({
    items: e,
    placeholder: t
  }) {
    super(), this.listeners = new _e(), this.items = e, this.wrapper = u.make("div", rt.wrapper);
    const o = u.make("div", rt.icon, {
      innerHTML: os
    });
    this.input = u.make("input", rt.input, {
      placeholder: t,
      tabIndex: -1
    }), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.emit(Ue.Search, {
        query: this.searchQuery,
        items: this.foundItems
      });
    });
  }
  getElement() {
    return this.wrapper;
  }
  focus() {
    this.input.focus();
  }
  clear() {
    this.input.value = "", this.searchQuery = "", this.emit(Ue.Search, {
      query: "",
      items: this.foundItems
    });
  }
  destroy() {
    this.listeners.removeAll();
  }
  get foundItems() {
    return this.items.filter(e => this.checkItem(e));
  }
  checkItem(e) {
    var i, s;
    const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "",
      o = (s = this.searchQuery) == null ? void 0 : s.toLowerCase();
    return o !== void 0 ? t.includes(o) : false;
  }
};
var cs = Object.defineProperty,
  ds = Object.getOwnPropertyDescriptor,
  us = (n, e, t, o) => {
    for (var i = o > 1 ? void 0 : o ? ds(e, t) : e, s = n.length - 1, r; s >= 0; s--) (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
    return o && i && cs(e, t, i), i;
  };
var en = class tn extends Jo {
  constructor(e, t) {
    super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var o;
      super.hide(), this.destroyNestedPopoverIfExists(), (o = this.flipper) == null || o.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const o = this.itemsDefault.find(i => i.isFocused);
      o == null || o.onFocus();
    }, this.onSearch = o => {
      var a;
      const i = o.query === "",
        s = o.items.length === 0;
      this.items.forEach(l => {
        let c = false;
        l instanceof re ? c = !o.items.includes(l) : (l instanceof Qo || l instanceof Se) && (c = s || !i), l.toggleHidden(c);
      }), this.toggleNothingFoundMessage(s);
      const r = o.query === "" ? this.flippableElements : o.items.map(l => l.getElement());
      (a = this.flipper) != null && a.isActivated && (this.flipper.deactivate(), this.flipper.activate(r));
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(P.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", o => this.handleHover(o)), e.searchable && this.addSearch(), e.flippable !== false && (this.flipper = new ce({
      items: this.flippableElements,
      focusedItemClass: L.focused,
      allowedKeys: [y.TAB, y.UP, y.DOWN, y.ENTER]
    }), this.flipper.onFlip(this.onFlip));
  }
  hasFocus() {
    return this.flipper === void 0 ? false : this.flipper.hasFocus();
  }
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  show() {
    var e;
    this.nodes.popover.style.setProperty(fe.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(P.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(P.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  destroy() {
    this.hide(), super.destroy();
  }
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
  }
  setTriggerItemPosition(e, t) {
    const o = t.getElement(),
      i = (o ? o.offsetTop : 0) - this.scrollTop,
      s = this.offsetTop + i;
    e.style.setProperty(fe.TriggerItemTop, s + "px");
  }
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(G.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  showNestedPopoverForItem(e) {
    var o;
    this.nestedPopover = new tn({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages
    }), e.onChildrenOpen(), this.nestedPopover.on(G.ClosedOnActivate, this.hide);
    const t = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(fe.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o = this.flipper) == null || o.deactivate(), this.nestedPopover;
  }
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null) return false;
    const e = this.nodes.popoverContainer.getBoundingClientRect(),
      t = this.scopeElement.getBoundingClientRect(),
      o = this.size.height,
      i = e.top + o,
      s = e.top - o,
      r = Math.min(window.innerHeight, t.bottom);
    return s < t.top || i <= r;
  }
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null) return false;
    const e = this.nodes.popover.getBoundingClientRect(),
      t = this.scopeElement.getBoundingClientRect(),
      o = this.size.width,
      i = e.right + o,
      s = e.left - o,
      r = Math.min(window.innerWidth, t.right);
    return s < t.left || i <= r;
  }
  get size() {
    var i;
    const e = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null) return e;
    const t = this.nodes.popover.cloneNode(true);
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(P.popoverOpened), (i = t.querySelector("." + P.popoverNested)) == null || i.remove(), document.body.appendChild(t);
    const o = t.querySelector("." + P.popoverContainer);
    return e.height = o.offsetHeight, e.width = o.offsetWidth, t.remove(), e;
  }
  get flippableElements() {
    return this.items.map(t => {
      if (t instanceof re) return t.getElement();
      if (t instanceof Se) return t.getControls();
    }).flat().filter(t => t != null);
  }
  addSearch() {
    this.search = new ls({
      items: this.itemsDefault,
      placeholder: this.messages.search
    }), this.search.on(Ue.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(P.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
  }
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(P.nothingFoundMessageDisplayed, e);
  }
};
us([me], en.prototype, "size", 1);
var Bt = en;
var hs = class extends Bt {
  constructor(e) {
    const t = !be();
    super({
      ...e,
      class: P.popoverInline
    }, {
      [_.Default]: {
        wrapperTag: "button",
        hint: {
          position: "top",
          alignment: "center",
          enabled: t
        }
      },
      [_.Html]: {
        hint: {
          position: "top",
          alignment: "center",
          enabled: t
        }
      }
    }), this.items.forEach(o => {
      !(o instanceof re) && !(o instanceof Se) || o.hasChildren && o.isChildrenOpen && this.showNestedItems(o);
    });
  }
  get offsetLeft() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
  }
  show() {
    this.nestingLevel === 0 && this.nodes.popover.style.setProperty(fe.InlinePopoverWidth, this.size.width + "px"), super.show();
  }
  handleHover() {}
  setTriggerItemPosition(e, t) {
    const o = t.getElement(),
      i = o ? o.offsetLeft : 0,
      s = this.offsetLeft + i;
    e.style.setProperty(fe.TriggerItemLeft, s + "px");
  }
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
      return;
    }
    super.showNestedItems(e);
  }
  showNestedPopoverForItem(e) {
    const t = super.showNestedPopoverForItem(e);
    return t.getElement().classList.add(P.getPopoverNestedClass(t.nestingLevel)), t;
  }
  handleItemClick(e) {
    var t;
    e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
  }
};
var on = class xe {
  constructor() {
    this.scrollPosition = null;
  }
  lock() {
    pt ? this.lockHard() : document.body.classList.add(xe.CSS.scrollLocked);
  }
  unlock() {
    pt ? this.unlockHard() : document.body.classList.remove(xe.CSS.scrollLocked);
  }
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty("--window-scroll-offset", `${this.scrollPosition}px`), document.body.classList.add(xe.CSS.scrollLockedHard);
  }
  unlockHard() {
    document.body.classList.remove(xe.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
on.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
var ps = on;
var at = ne("ce-popover-header"),
  lt = {
    root: at(),
    text: at("text"),
    backButton: at("back-button")
  };
var fs = class {
  constructor({
    text: e,
    onBackButtonClick: t
  }) {
    this.listeners = new _e(), this.text = e, this.onBackButtonClick = t, this.nodes = {
      root: u.make("div", [lt.root]),
      backButton: u.make("button", [lt.backButton]),
      text: u.make("div", [lt.text])
    }, this.nodes.backButton.innerHTML = Vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  getElement() {
    return this.nodes.root;
  }
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
};
var gs = class {
  constructor() {
    this.history = [];
  }
  push(e) {
    this.history.push(e);
  }
  pop() {
    return this.history.pop();
  }
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  reset() {
    for (; this.history.length > 1;) this.pop();
  }
};
var nn = class extends Jo {
  constructor(e) {
    super(e, {
      [_.Default]: {
        hint: {
          enabled: false
        }
      },
      [_.Html]: {
        hint: {
          enabled: false
        }
      }
    }), this.scrollLocker = new ps(), this.history = new gs(), this.isHidden = true, this.nodes.overlay = u.make("div", [P.overlay, P.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({
      items: e.items
    });
  }
  show() {
    this.nodes.overlay.classList.remove(P.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = false;
  }
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(P.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = true);
  }
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  updateItemsAndHeader(e, t) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
      this.header = new fs({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const o = this.header.getElement();
      o !== null && this.nodes.popoverContainer.insertBefore(o, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach(o => {
      var i;
      return (i = o.getElement()) == null ? void 0 : i.remove();
    }), this.items = this.buildItems(e), this.items.forEach(o => {
      var s;
      const i = o.getElement();
      i !== null && ((s = this.nodes.items) == null || s.appendChild(i));
    });
  }
};
var ms = class extends E {
  constructor() {
    super(...arguments), this.opened = false, this.selection = new b(), this.popover = null, this.close = () => {
      this.opened && (this.opened = false, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(G.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  get flipper() {
    var e;
    if (this.popover !== null) return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  make() {
    this.nodes.wrapper = u.make("div", [this.CSS.settings]), this.eventsDispatcher.on(Te, this.close);
  }
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(Te, this.close);
  }
  async open(e = this.Editor.BlockManager.currentBlock) {
    var s;
    this.opened = true, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const {
      toolTunes: t,
      commonTunes: o
    } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const i = be() ? nn : Bt;
    this.popover = new i({
      searchable: true,
      items: await this.getTunesItems(e, o, t),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.popover.on(G.Closed, this.onPopoverClose), (s = this.nodes.wrapper) == null || s.append(this.popover.getElement()), this.popover.show();
  }
  getElement() {
    return this.nodes.wrapper;
  }
  async getTunesItems(e, t, o) {
    const i = [];
    o !== void 0 && o.length > 0 && (i.push(...o), i.push({
      type: _.Separator
    }));
    const s = Array.from(this.Editor.Tools.blockTools.values()),
      a = (await Yo(e, s)).reduce((l, c) => (c.toolbox.forEach(d => {
        l.push({
          icon: d.icon,
          title: z.t(K.toolNames, d.title),
          name: c.name,
          closeOnActivate: true,
          onActivate: async () => {
            const {
                BlockManager: h,
                Caret: p,
                Toolbar: g
              } = this.Editor,
              f = await h.convert(e, c.name, d.data);
            g.close(), p.setToBlock(f, p.positions.END);
          }
        });
      }), l), []);
    return a.length > 0 && (i.push({
      icon: Go,
      name: "convert-to",
      title: z.ui(K.ui.popover, "Convert to"),
      children: {
        searchable: true,
        items: a
      }
    }), i.push({
      type: _.Separator
    })), i.push(...t), i.map(l => this.resolveTuneAliases(l));
  }
  resolveTuneAliases(e) {
    if (e.type === _.Separator || e.type === _.Html) return e;
    const t = Yi(e, {
      label: "title"
    });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
};
var sn = {
  exports: {}
};
(function (n, e) {
  (function (t, o) {
    n.exports = o();
  })(window, function () {
    return function (t) {
      var o = {};
      function i(s) {
        if (o[s]) return o[s].exports;
        var r = o[s] = {
          i: s,
          l: false,
          exports: {}
        };
        return t[s].call(r.exports, r, r.exports, i), r.l = true, r.exports;
      }
      return i.m = t, i.c = o, i.d = function (s, r, a) {
        i.o(s, r) || Object.defineProperty(s, r, {
          enumerable: true,
          get: a
        });
      }, i.r = function (s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(s, "__esModule", {
          value: true
        });
      }, i.t = function (s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule) return s;
        var a = /* @__PURE__ */Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
          enumerable: true,
          value: s
        }), 2 & r && typeof s != "string") for (var l in s) i.d(a, l, function (c) {
          return s[c];
        }.bind(null, l));
        return a;
      }, i.n = function (s) {
        var r = s && s.__esModule ? function () {
          return s.default;
        } : function () {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function (s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function (t, o, i) {
      function s(l, c) {
        for (var d = 0; d < c.length; d++) {
          var h = c[d];
          h.enumerable = h.enumerable || false, h.configurable = true, "value" in h && (h.writable = true), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, d) {
        return c && s(l.prototype, c), d && s(l, d), l;
      }
      i.r(o);
      var a = function () {
        function l(c) {
          var d = this;
          (function (h, p) {
            if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
          })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function (h) {
            d.execute(h);
          }, this.element.addEventListener("keydown", this.executeShortcut, false);
        }
        return r(l, null, [{
          key: "supportedCommands",
          get: function () {
            return {
              SHIFT: ["SHIFT"],
              CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"],
              ALT: ["ALT", "OPTION"]
            };
          }
        }, {
          key: "keyCodes",
          get: function () {
            return {
              0: 48,
              1: 49,
              2: 50,
              3: 51,
              4: 52,
              5: 53,
              6: 54,
              7: 55,
              8: 56,
              9: 57,
              A: 65,
              B: 66,
              C: 67,
              D: 68,
              E: 69,
              F: 70,
              G: 71,
              H: 72,
              I: 73,
              J: 74,
              K: 75,
              L: 76,
              M: 77,
              N: 78,
              O: 79,
              P: 80,
              Q: 81,
              R: 82,
              S: 83,
              T: 84,
              U: 85,
              V: 86,
              W: 87,
              X: 88,
              Y: 89,
              Z: 90,
              BACKSPACE: 8,
              ENTER: 13,
              ESCAPE: 27,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              INSERT: 45,
              DELETE: 46,
              ".": 190
            };
          }
        }]), r(l, [{
          key: "parseShortcutName",
          value: function (c) {
            c = c.split("+");
            for (var d = 0; d < c.length; d++) {
              c[d] = c[d].toUpperCase();
              var h = false;
              for (var p in l.supportedCommands) if (l.supportedCommands[p].includes(c[d])) {
                h = this.commands[p] = true;
                break;
              }
              h || (this.keys[c[d]] = true);
            }
            for (var g in l.supportedCommands) this.commands[g] || (this.commands[g] = false);
          }
        }, {
          key: "execute",
          value: function (c) {
            var d,
              h = {
                CMD: c.ctrlKey || c.metaKey,
                SHIFT: c.shiftKey,
                ALT: c.altKey
              },
              p = true;
            for (d in this.commands) this.commands[d] !== h[d] && (p = false);
            var g,
              f = true;
            for (g in this.keys) f = f && c.keyCode === l.keyCodes[g];
            p && f && this.callback(c);
          }
        }, {
          key: "remove",
          value: function () {
            this.element.removeEventListener("keydown", this.executeShortcut);
          }
        }]), l;
      }();
      o.default = a;
    }]).default;
  });
})(sn);
var bs = sn.exports;
var vs = /* @__PURE__ */Ke(bs);
var ks = class {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */new Map();
  }
  add(e) {
    if (this.findShortcut(e.on, e.name)) throw Error(`Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`);
    const o = new vs({
        name: e.name,
        on: e.on,
        callback: e.handler
      }),
      i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
  }
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o) return;
    o.remove();
    const s = this.registeredShortcuts.get(e).filter(r => r !== o);
    if (s.length === 0) {
      this.registeredShortcuts.delete(e);
      return;
    }
    this.registeredShortcuts.set(e, s);
  }
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({
      name: i
    }) => i === t);
  }
};
var ge = new ks();
var ys = Object.defineProperty,
  ws = Object.getOwnPropertyDescriptor,
  rn = (n, e, t, o) => {
    for (var i = o > 1 ? void 0 : o ? ws(e, t) : e, s = n.length - 1, r; s >= 0; s--) (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
    return o && i && ys(e, t, i), i;
  },
  Le = /* @__PURE__ */(n => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(Le || {});
var Ct = class an extends Oe {
  constructor({
    api: e,
    tools: t,
    i18nLabels: o
  }) {
    super(), this.opened = false, this.listeners = new _e(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = false, this.emit("toolbox-closed");
    }, this.api = e, this.tools = t, this.i18nLabels = o, this.enableShortcuts(), this.nodes = {
      toolbox: u.make("div", an.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(Te, this.handleMobileLayoutToggle);
  }
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  getElement() {
    return this.nodes.toolbox;
  }
  hasFocus() {
    if (this.popover !== null) return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(G.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(Te, this.handleMobileLayoutToggle);
  }
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = true, this.emit("toolbox-opened"));
  }
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = false, this.emit("toolbox-closed");
  }
  toggle() {
    this.opened ? this.close() : this.open();
  }
  initPopover() {
    var t;
    const e = be() ? nn : Bt;
    this.popover = new e({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: true,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(G.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
  }
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(G.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach(t => {
      t.toolbox && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o, i = true) => ({
      icon: t.icon,
      title: z.t(K.toolNames, t.title || je(o.name)),
      name: o.name,
      onActivate: () => {
        this.toolButtonActivated(o.name, t.data);
      },
      secondaryLabel: o.shortcut && i ? vt(o.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((t, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i, s) => {
      t.push(e(i, o, s === 0));
    }) : o.toolbox !== void 0 && t.push(e(o.toolbox, o)), t), []);
  }
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach(e => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  enableShortcutForTool(e, t) {
    ge.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async o => {
        o.preventDefault();
        const i = this.api.blocks.getCurrentBlockIndex(),
          s = this.api.blocks.getBlockByIndex(i);
        if (s) try {
          const r = await this.api.blocks.convert(s.id, e);
          this.api.caret.setToBlock(r, "end");
          return;
        } catch {}
        this.insertNewBlock(e);
      }
    });
  }
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach(e => {
      const t = e.shortcut;
      t && ge.remove(this.api.ui.nodes.redactor, t);
    });
  }
  async insertNewBlock(e, t) {
    const o = this.api.blocks.getCurrentBlockIndex(),
      i = this.api.blocks.getBlockByIndex(o);
    if (!i) return;
    const s = i.isEmpty ? o : o + 1;
    let r;
    if (t) {
      const l = await this.api.blocks.composeBlockData(e);
      r = Object.assign(l, t);
    }
    const a = this.api.blocks.insert(e, r, void 0, s, void 0, i.isEmpty);
    a.call(ee.APPEND_CALLBACK), this.api.caret.setToBlock(s), this.emit("toolbox-block-added", {
      block: a
    }), this.api.toolbar.close();
  }
};
rn([me], Ct.prototype, "toolsToBeDisplayed", 1);
rn([me], Ct.prototype, "toolboxItemsToBeDisplayed", 1);
var Es = Ct;
var ln = "block hovered";
async function xs(n, e) {
  const t = navigator.keyboard;
  if (!t) return e;
  try {
    return (await t.getLayoutMap()).get(n) || e;
  } catch (o) {
    return console.error(o), e;
  }
}
var Bs = class extends E {
  constructor({
    config: e,
    eventsDispatcher: t
  }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          S("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          S("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, {
      timeout: 2e3
    });
  }
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      S("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e) return;
    this.hoveredBlock = e;
    const t = e.holder,
      {
        isMobile: o
      } = this.Editor.UI;
    let i;
    const s = 20,
      r = e.firstInput,
      a = t.getBoundingClientRect(),
      l = r !== void 0 ? r.getBoundingClientRect() : null,
      c = l !== null ? l.top - a.top : null,
      d = c !== null ? c > s : void 0;
    if (o) i = t.offsetTop + t.offsetHeight;else if (r === void 0 || d) {
      const h = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      i = t.offsetTop + h;
    } else {
      const h = li(r),
        p = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10),
        g = 8;
      i = t.offsetTop + h - p + g + c;
    }
    this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  open(e = true) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  async make() {
    this.nodes.wrapper = u.make("div", this.CSS.toolbar), ["content", "actions"].forEach(s => {
      this.nodes[s] = u.make("div", this.CSS[s]);
    }), u.append(this.nodes.wrapper, this.nodes.content), u.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = u.make("div", this.CSS.plusButton, {
      innerHTML: ts
    }), u.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      $e(true), this.plusButtonClicked();
    }, false);
    const e = u.make("div");
    e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(u.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), ze(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = u.make("span", this.CSS.settingsToggler, {
      innerHTML: es
    }), u.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = u.make("div"),
      o = u.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")),
      i = await xs("Slash", "/");
    t.appendChild(o), t.appendChild(u.make("div", this.CSS.plusButtonShortcut, {
      textContent: vt(`CMD + ${i}`)
    })), ze(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), u.append(this.nodes.actions, this.makeToolbox()), u.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), u.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  makeToolbox() {
    return this.toolboxInstance = new Es({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: z.ui(K.ui.popover, "Filter"),
        nothingFound: z.ui(K.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(Le.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Le.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Le.BlockAdded, ({
      block: e
    }) => {
      const {
          BlockManager: t,
          Caret: o
        } = this.Editor,
        i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", e => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), $e(true);
    }, true), be() || this.eventsDispatcher.on(ln, e => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
};
var ae = /* @__PURE__ */(n => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(ae || {}),
  Pe = /* @__PURE__ */(n => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n))(Pe || {}),
  cn = /* @__PURE__ */(n => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(cn || {}),
  pe = /* @__PURE__ */(n => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(pe || {}),
  We = /* @__PURE__ */(n => (n.IsInline = "isInline", n.Title = "title", n.IsReadOnlySupported = "isReadOnlySupported", n))(We || {}),
  mt = /* @__PURE__ */(n => (n.IsTune = "isTune", n))(mt || {});
var Tt = class {
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: s,
    isInternal: r = false,
    defaultPlaceholder: a
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = s, this.isInternal = r, this.defaultPlaceholder = a;
  }
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  reset() {
    if (A(this.constructable.reset)) return this.constructable.reset();
  }
  prepare() {
    if (A(this.constructable.prepare)) return this.constructable.prepare({
      toolName: this.name,
      config: this.settings
    });
  }
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  isInline() {
    return this.type === ae.Inline;
  }
  isBlock() {
    return this.type === ae.Block;
  }
  isTune() {
    return this.type === ae.Tune;
  }
};
var Cs = class extends E {
  constructor({
    config: e,
    eventsDispatcher: t
  }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar"
    }, this.opened = false, this.popover = null, this.toolbarVerticalMargin = be() ? 20 : 6, this.tools = /* @__PURE__ */new Map(), window.requestIdleCallback(() => {
      this.make();
    }, {
      timeout: 2e3
    });
  }
  async tryToShow(e = false) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  close() {
    var e, t;
    if (this.opened) {
      for (const [o, i] of this.tools) {
        const s = this.getToolShortcut(o.name);
        s !== void 0 && ge.remove(this.Editor.UI.nodes.redactor, s), A(i.clear) && i.clear();
      }
      this.tools = /* @__PURE__ */new Map(), this.reset(), this.opened = false, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null;
    }
  }
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? false : this.nodes.wrapper.contains(e);
  }
  destroy() {
    var e;
    this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
  }
  make() {
    this.nodes.wrapper = u.make("div", [this.CSS.inlineToolbar, ...(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : [])]), u.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  async open() {
    var t;
    if (this.opened) return;
    this.opened = true, this.popover !== null && this.popover.destroy(), this.createToolsInstances();
    const e = await this.getPopoverItems();
    this.popover = new hs({
      items: e,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
  }
  move(e) {
    const t = b.rect,
      o = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
      i = {
        x: t.x - o.x,
        y: t.y + t.height - o.top + this.toolbarVerticalMargin
      };
    i.x + e + o.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
  }
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  allowedToShow() {
    const e = ["IMG", "INPUT"],
      t = b.get(),
      o = b.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1) return false;
    const i = u.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (i === null || t !== null && e.includes(i.tagName)) return false;
    const s = this.Editor.BlockManager.getBlock(t.anchorNode);
    return !s || this.getTools().some(c => s.tool.inlineTools.has(c.name)) === false ? false : i.closest("[contenteditable]") !== null;
  }
  getTools() {
    const e = this.Editor.BlockManager.currentBlock;
    return e ? Array.from(e.tool.inlineTools.values()).filter(o => !(this.Editor.ReadOnly.isEnabled && o.isReadOnlySupported !== true)) : [];
  }
  createToolsInstances() {
    this.tools = /* @__PURE__ */new Map(), this.getTools().forEach(t => {
      const o = t.create();
      this.tools.set(t, o);
    });
  }
  async getPopoverItems() {
    const e = [];
    let t = 0;
    for (const [o, i] of this.tools) {
      const s = await i.render(),
        r = this.getToolShortcut(o.name);
      if (r !== void 0) try {
        this.enableShortcuts(o.name, r);
      } catch {}
      const a = r !== void 0 ? vt(r) : void 0,
        l = z.t(K.toolNames, o.title || je(o.name));
      [s].flat().forEach(c => {
        var h, p;
        const d = {
          name: o.name,
          onActivate: () => {
            this.toolClicked(i);
          },
          hint: {
            title: l,
            description: a
          }
        };
        if (u.isElement(c)) {
          const g = {
            ...d,
            element: c,
            type: _.Html
          };
          if (A(i.renderActions)) {
            const f = i.renderActions();
            g.children = {
              isOpen: (h = i.checkState) == null ? void 0 : h.call(i, b.get()),
              isFlippable: false,
              items: [{
                type: _.Html,
                element: f
              }]
            };
          } else (p = i.checkState) == null || p.call(i, b.get());
          e.push(g);
        } else if (c.type === _.Html) e.push({
          ...d,
          ...c,
          type: _.Html
        });else if (c.type === _.Separator) e.push({
          type: _.Separator
        });else {
          const g = {
            ...d,
            ...c,
            type: _.Default
          };
          "children" in g && t !== 0 && e.push({
            type: _.Separator
          }), e.push(g), "children" in g && t < this.tools.size - 1 && e.push({
            type: _.Separator
          });
        }
      }), t++;
    }
    return e;
  }
  getToolShortcut(e) {
    const {
        Tools: t
      } = this.Editor,
      o = t.inlineTools.get(e),
      i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][cn.Shortcut] : o == null ? void 0 : o.shortcut;
  }
  enableShortcuts(e, t) {
    ge.add({
      name: t,
      handler: o => {
        var s;
        const {
          currentBlock: i
        } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o.preventDefault(), (s = this.popover) == null || s.activateItemByName(e));
      },
      on: document
    });
  }
  toolClicked(e) {
    var o;
    const t = b.range;
    (o = e.surround) == null || o.call(e, t), this.checkToolsState();
  }
  checkToolsState() {
    var e;
    (e = this.tools) == null || e.forEach(t => {
      var o;
      (o = t.checkState) == null || o.call(t, b.get());
    });
  }
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
};
function dn() {
  const n = window.getSelection();
  if (n === null) return [null, 0];
  let e = n.focusNode,
    t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
}
function un(n, e, t, o) {
  const i = document.createRange();
  o === "left" ? (i.setStart(n, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n, n.childNodes.length));
  const s = i.cloneContents(),
    r = document.createElement("div");
  r.appendChild(s);
  const a = r.textContent || "";
  return ai(a);
}
function Ne(n) {
  const e = u.getDeepestNode(n);
  if (e === null || u.isEmpty(n)) return true;
  if (u.isNativeInput(e)) return e.selectionEnd === 0;
  if (u.isEmpty(n)) return true;
  const [t, o] = dn();
  return t === null ? false : un(n, t, o, "left");
}
function Re(n) {
  const e = u.getDeepestNode(n, true);
  if (e === null) return true;
  if (u.isNativeInput(e)) return e.selectionEnd === e.value.length;
  const [t, o] = dn();
  return t === null ? false : un(n, t, o, "right");
}
var hn = {},
  St = {},
  Xe = {},
  de = {},
  It = {},
  Ot = {};
Object.defineProperty(Ot, "__esModule", {
  value: true
});
Ot.allInputsSelector = Ts;
function Ts() {
  var n = ["text", "password", "email", "number", "search", "tel", "url"];
  return "[contenteditable=true], textarea, input:not([type]), " + n.map(function (e) {
    return 'input[type="'.concat(e, '"]');
  }).join(", ");
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.allInputsSelector = void 0;
  var e = Ot;
  Object.defineProperty(n, "allInputsSelector", {
    enumerable: true,
    get: function () {
      return e.allInputsSelector;
    }
  });
})(It);
var ue = {},
  _t = {};
Object.defineProperty(_t, "__esModule", {
  value: true
});
_t.isNativeInput = Ss;
function Ss(n) {
  var e = ["INPUT", "TEXTAREA"];
  return n && n.tagName ? e.includes(n.tagName) : false;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isNativeInput = void 0;
  var e = _t;
  Object.defineProperty(n, "isNativeInput", {
    enumerable: true,
    get: function () {
      return e.isNativeInput;
    }
  });
})(ue);
var pn = {},
  Mt = {};
Object.defineProperty(Mt, "__esModule", {
  value: true
});
Mt.append = Is;
function Is(n, e) {
  Array.isArray(e) ? e.forEach(function (t) {
    n.appendChild(t);
  }) : n.appendChild(e);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.append = void 0;
  var e = Mt;
  Object.defineProperty(n, "append", {
    enumerable: true,
    get: function () {
      return e.append;
    }
  });
})(pn);
var At = {},
  Lt = {};
Object.defineProperty(Lt, "__esModule", {
  value: true
});
Lt.blockElements = Os;
function Os() {
  return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video"];
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.blockElements = void 0;
  var e = Lt;
  Object.defineProperty(n, "blockElements", {
    enumerable: true,
    get: function () {
      return e.blockElements;
    }
  });
})(At);
var fn = {},
  Pt = {};
Object.defineProperty(Pt, "__esModule", {
  value: true
});
Pt.calculateBaseline = _s;
function _s(n) {
  var e = window.getComputedStyle(n),
    t = parseFloat(e.fontSize),
    o = parseFloat(e.lineHeight) || t * 1.2,
    i = parseFloat(e.paddingTop),
    s = parseFloat(e.borderTopWidth),
    r = parseFloat(e.marginTop),
    a = t * 0.8,
    l = (o - t) / 2,
    c = r + s + i + l + a;
  return c;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.calculateBaseline = void 0;
  var e = Pt;
  Object.defineProperty(n, "calculateBaseline", {
    enumerable: true,
    get: function () {
      return e.calculateBaseline;
    }
  });
})(fn);
var gn = {},
  Nt = {},
  Rt = {},
  Dt = {};
Object.defineProperty(Dt, "__esModule", {
  value: true
});
Dt.isContentEditable = Ms;
function Ms(n) {
  return n.contentEditable === "true";
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isContentEditable = void 0;
  var e = Dt;
  Object.defineProperty(n, "isContentEditable", {
    enumerable: true,
    get: function () {
      return e.isContentEditable;
    }
  });
})(Rt);
Object.defineProperty(Nt, "__esModule", {
  value: true
});
Nt.canSetCaret = Ps;
var As = ue,
  Ls = Rt;
function Ps(n) {
  var e = true;
  if ((0, As.isNativeInput)(n)) switch (n.type) {
    case "file":
    case "checkbox":
    case "radio":
    case "hidden":
    case "submit":
    case "button":
    case "image":
    case "reset":
      e = false;
      break;
  } else e = (0, Ls.isContentEditable)(n);
  return e;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.canSetCaret = void 0;
  var e = Nt;
  Object.defineProperty(n, "canSetCaret", {
    enumerable: true,
    get: function () {
      return e.canSetCaret;
    }
  });
})(gn);
var Ve = {},
  Ft = {};
function Ns(n, e, t) {
  const o = t.value !== void 0 ? "value" : "get",
    i = t[o],
    s = `#${e}Cache`;
  if (t[o] = function (...r) {
    return this[s] === void 0 && (this[s] = i.apply(this, r)), this[s];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function (a) {
      delete n[s], r.apply(this, a);
    };
  }
  return t;
}
function mn() {
  const n = {
      win: false,
      mac: false,
      x11: false,
      linux: false
    },
    e = Object.keys(n).find(t => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e !== void 0 && (n[e] = true), n;
}
function jt(n) {
  return n != null && n !== "" && (typeof n != "object" || Object.keys(n).length > 0);
}
function Rs(n) {
  return !jt(n);
}
var Ds = () => typeof window < "u" && window.navigator !== null && jt(window.navigator.platform) && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Fs(n) {
  const e = mn();
  return n = n.replace(/shift/gi, "\u21E7").replace(/backspace/gi, "\u232B").replace(/enter/gi, "\u23CE").replace(/up/gi, "\u2191").replace(/left/gi, "\u2192").replace(/down/gi, "\u2193").replace(/right/gi, "\u2190").replace(/escape/gi, "\u238B").replace(/insert/gi, "Ins").replace(/delete/gi, "\u2421").replace(/\+/gi, "+"), e.mac ? n = n.replace(/ctrl|cmd/gi, "\u2318").replace(/alt/gi, "\u2325") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function js(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function Hs(n) {
  const e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-999px", e.style.bottom = "-999px", e.innerHTML = n, document.body.appendChild(e);
  const t = window.getSelection(),
    o = document.createRange();
  if (o.selectNode(e), t === null) throw new Error("Cannot copy text to clipboard");
  t.removeAllRanges(), t.addRange(o), document.execCommand("copy"), document.body.removeChild(e);
}
function $s(n, e, t) {
  let o;
  return (...i) => {
    const s = this,
      r = () => {
        o = void 0, t !== true && n.apply(s, i);
      },
      a = t === true && o !== void 0;
    window.clearTimeout(o), o = window.setTimeout(r, e), a && n.apply(s, i);
  };
}
function oe(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function zs(n) {
  return oe(n) === "boolean";
}
function bn(n) {
  return oe(n) === "function" || oe(n) === "asyncfunction";
}
function Us(n) {
  return bn(n) && /^\s*class\s+/.test(n.toString());
}
function Ws(n) {
  return oe(n) === "number";
}
function De(n) {
  return oe(n) === "object";
}
function Ys(n) {
  return Promise.resolve(n) === n;
}
function Ks(n) {
  return oe(n) === "string";
}
function Xs(n) {
  return oe(n) === "undefined";
}
function bt(n, ...e) {
  if (!e.length) return n;
  const t = e.shift();
  if (De(n) && De(t)) for (const o in t) De(t[o]) ? (n[o] === void 0 && Object.assign(n, {
    [o]: {}
  }), bt(n[o], t[o])) : Object.assign(n, {
    [o]: t[o]
  });
  return bt(n, ...e);
}
function Vs(n, e, t) {
  const o = `\xAB${e}\xBB is deprecated and will be removed in the next major release. Please use the \xAB${t}\xBB instead.`;
  n && console.warn(o);
}
function qs(n) {
  try {
    return new URL(n).href;
  } catch {}
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function Zs(n) {
  return n > 47 && n < 58 || n === 32 || n === 13 || n === 229 || n > 64 && n < 91 || n > 95 && n < 112 || n > 185 && n < 193 || n > 218 && n < 223;
}
var Gs = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    DELETE: 46,
    META: 91,
    SLASH: 191
  },
  Qs = {
    LEFT: 0,
    WHEEL: 1,
    RIGHT: 2,
    BACKWARD: 3,
    FORWARD: 4
  };
var Js = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
};
function er(n, e, t = void 0) {
  let o,
    i,
    s,
    r = null,
    a = 0;
  t || (t = {});
  const l = function () {
    a = t.leading === false ? 0 : Date.now(), r = null, s = n.apply(o, i), r === null && (o = i = null);
  };
  return function () {
    const c = Date.now();
    !a && t.leading === false && (a = c);
    const d = e - (c - a);
    return o = this, i = arguments, d <= 0 || d > e ? (r && (clearTimeout(r), r = null), a = c, s = n.apply(o, i), r === null && (o = i = null)) : !r && t.trailing !== false && (r = setTimeout(l, d)), s;
  };
}
var tr = /* @__PURE__ */Object.freeze(/* @__PURE__ */Object.defineProperty({
    __proto__: null,
    PromiseQueue: Js,
    beautifyShortcut: Fs,
    cacheable: Ns,
    capitalize: js,
    copyTextToClipboard: Hs,
    debounce: $s,
    deepMerge: bt,
    deprecationAssert: Vs,
    getUserOS: mn,
    getValidUrl: qs,
    isBoolean: zs,
    isClass: Us,
    isEmpty: Rs,
    isFunction: bn,
    isIosDevice: Ds,
    isNumber: Ws,
    isObject: De,
    isPrintableKey: Zs,
    isPromise: Ys,
    isString: Ks,
    isUndefined: Xs,
    keyCodes: Gs,
    mouseButtons: Qs,
    notEmpty: jt,
    throttle: er,
    typeOf: oe
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ht = /* @__PURE__ */Xn(tr);
Object.defineProperty(Ft, "__esModule", {
  value: true
});
Ft.containsOnlyInlineElements = ir;
var or = Ht,
  nr = At;
function ir(n) {
  var e;
  (0, or.isString)(n) ? (e = document.createElement("div"), e.innerHTML = n) : e = n;
  var t = function (o) {
    return !(0, nr.blockElements)().includes(o.tagName.toLowerCase()) && Array.from(o.children).every(t);
  };
  return Array.from(e.children).every(t);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.containsOnlyInlineElements = void 0;
  var e = Ft;
  Object.defineProperty(n, "containsOnlyInlineElements", {
    enumerable: true,
    get: function () {
      return e.containsOnlyInlineElements;
    }
  });
})(Ve);
var vn = {},
  $t = {},
  qe = {},
  zt = {};
Object.defineProperty(zt, "__esModule", {
  value: true
});
zt.make = sr;
function sr(n, e, t) {
  var o;
  e === void 0 && (e = null), t === void 0 && (t = {});
  var i = document.createElement(n);
  if (Array.isArray(e)) {
    var s = e.filter(function (a) {
      return a !== void 0;
    });
    (o = i.classList).add.apply(o, s);
  } else e !== null && i.classList.add(e);
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
  return i;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.make = void 0;
  var e = zt;
  Object.defineProperty(n, "make", {
    enumerable: true,
    get: function () {
      return e.make;
    }
  });
})(qe);
Object.defineProperty($t, "__esModule", {
  value: true
});
$t.fragmentToString = ar;
var rr = qe;
function ar(n) {
  var e = (0, rr.make)("div");
  return e.appendChild(n), e.innerHTML;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.fragmentToString = void 0;
  var e = $t;
  Object.defineProperty(n, "fragmentToString", {
    enumerable: true,
    get: function () {
      return e.fragmentToString;
    }
  });
})(vn);
var kn = {},
  Ut = {};
Object.defineProperty(Ut, "__esModule", {
  value: true
});
Ut.getContentLength = cr;
var lr = ue;
function cr(n) {
  var e, t;
  return (0, lr.isNativeInput)(n) ? n.value.length : n.nodeType === Node.TEXT_NODE ? n.length : (t = (e = n.textContent) === null || e === void 0 ? void 0 : e.length) !== null && t !== void 0 ? t : 0;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.getContentLength = void 0;
  var e = Ut;
  Object.defineProperty(n, "getContentLength", {
    enumerable: true,
    get: function () {
      return e.getContentLength;
    }
  });
})(kn);
var Wt = {},
  Yt = {},
  Io = Ce && Ce.__spreadArray || function (n, e, t) {
    if (t || arguments.length === 2) for (var o = 0, i = e.length, s; o < i; o++) (s || !(o in e)) && (s || (s = Array.prototype.slice.call(e, 0, o)), s[o] = e[o]);
    return n.concat(s || Array.prototype.slice.call(e));
  };
Object.defineProperty(Yt, "__esModule", {
  value: true
});
Yt.getDeepestBlockElements = yn;
var dr = Ve;
function yn(n) {
  return (0, dr.containsOnlyInlineElements)(n) ? [n] : Array.from(n.children).reduce(function (e, t) {
    return Io(Io([], e, true), yn(t), true);
  }, []);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.getDeepestBlockElements = void 0;
  var e = Yt;
  Object.defineProperty(n, "getDeepestBlockElements", {
    enumerable: true,
    get: function () {
      return e.getDeepestBlockElements;
    }
  });
})(Wt);
var wn = {},
  Kt = {},
  Ze = {},
  Xt = {};
Object.defineProperty(Xt, "__esModule", {
  value: true
});
Xt.isLineBreakTag = ur;
function ur(n) {
  return ["BR", "WBR"].includes(n.tagName);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isLineBreakTag = void 0;
  var e = Xt;
  Object.defineProperty(n, "isLineBreakTag", {
    enumerable: true,
    get: function () {
      return e.isLineBreakTag;
    }
  });
})(Ze);
var Ge = {},
  Vt = {};
Object.defineProperty(Vt, "__esModule", {
  value: true
});
Vt.isSingleTag = hr;
function hr(n) {
  return ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(n.tagName);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isSingleTag = void 0;
  var e = Vt;
  Object.defineProperty(n, "isSingleTag", {
    enumerable: true,
    get: function () {
      return e.isSingleTag;
    }
  });
})(Ge);
Object.defineProperty(Kt, "__esModule", {
  value: true
});
Kt.getDeepestNode = En;
var pr = ue,
  fr = Ze,
  gr = Ge;
function En(n, e) {
  e === void 0 && (e = false);
  var t = e ? "lastChild" : "firstChild",
    o = e ? "previousSibling" : "nextSibling";
  if (n.nodeType === Node.ELEMENT_NODE && n[t]) {
    var i = n[t];
    if ((0, gr.isSingleTag)(i) && !(0, pr.isNativeInput)(i) && !(0, fr.isLineBreakTag)(i)) if (i[o]) i = i[o];else if (i.parentNode !== null && i.parentNode[o]) i = i.parentNode[o];else return i.parentNode;
    return En(i, e);
  }
  return n;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.getDeepestNode = void 0;
  var e = Kt;
  Object.defineProperty(n, "getDeepestNode", {
    enumerable: true,
    get: function () {
      return e.getDeepestNode;
    }
  });
})(wn);
var xn = {},
  qt = {},
  Me = Ce && Ce.__spreadArray || function (n, e, t) {
    if (t || arguments.length === 2) for (var o = 0, i = e.length, s; o < i; o++) (s || !(o in e)) && (s || (s = Array.prototype.slice.call(e, 0, o)), s[o] = e[o]);
    return n.concat(s || Array.prototype.slice.call(e));
  };
Object.defineProperty(qt, "__esModule", {
  value: true
});
qt.findAllInputs = yr;
var mr = Ve,
  br = Wt,
  vr = It,
  kr = ue;
function yr(n) {
  return Array.from(n.querySelectorAll((0, vr.allInputsSelector)())).reduce(function (e, t) {
    return (0, kr.isNativeInput)(t) || (0, mr.containsOnlyInlineElements)(t) ? Me(Me([], e, true), [t], false) : Me(Me([], e, true), (0, br.getDeepestBlockElements)(t), true);
  }, []);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.findAllInputs = void 0;
  var e = qt;
  Object.defineProperty(n, "findAllInputs", {
    enumerable: true,
    get: function () {
      return e.findAllInputs;
    }
  });
})(xn);
var Bn = {},
  Zt = {};
Object.defineProperty(Zt, "__esModule", {
  value: true
});
Zt.isCollapsedWhitespaces = wr;
function wr(n) {
  return !/[^\t\n\r ]/.test(n);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isCollapsedWhitespaces = void 0;
  var e = Zt;
  Object.defineProperty(n, "isCollapsedWhitespaces", {
    enumerable: true,
    get: function () {
      return e.isCollapsedWhitespaces;
    }
  });
})(Bn);
var Gt = {},
  Qt = {};
Object.defineProperty(Qt, "__esModule", {
  value: true
});
Qt.isElement = xr;
var Er = Ht;
function xr(n) {
  return (0, Er.isNumber)(n) ? false : !!n && !!n.nodeType && n.nodeType === Node.ELEMENT_NODE;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isElement = void 0;
  var e = Qt;
  Object.defineProperty(n, "isElement", {
    enumerable: true,
    get: function () {
      return e.isElement;
    }
  });
})(Gt);
var Cn = {},
  Jt = {},
  eo = {},
  to = {};
Object.defineProperty(to, "__esModule", {
  value: true
});
to.isLeaf = Br;
function Br(n) {
  return n === null ? false : n.childNodes.length === 0;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isLeaf = void 0;
  var e = to;
  Object.defineProperty(n, "isLeaf", {
    enumerable: true,
    get: function () {
      return e.isLeaf;
    }
  });
})(eo);
var oo = {},
  no = {};
Object.defineProperty(no, "__esModule", {
  value: true
});
no.isNodeEmpty = Or;
var Cr = Ze,
  Tr = Gt,
  Sr = ue,
  Ir = Ge;
function Or(n, e) {
  var t = "";
  return (0, Ir.isSingleTag)(n) && !(0, Cr.isLineBreakTag)(n) ? false : ((0, Tr.isElement)(n) && (0, Sr.isNativeInput)(n) ? t = n.value : n.textContent !== null && (t = n.textContent.replace("\u200B", "")), e !== void 0 && (t = t.replace(new RegExp(e, "g"), "")), t.trim().length === 0);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isNodeEmpty = void 0;
  var e = no;
  Object.defineProperty(n, "isNodeEmpty", {
    enumerable: true,
    get: function () {
      return e.isNodeEmpty;
    }
  });
})(oo);
Object.defineProperty(Jt, "__esModule", {
  value: true
});
Jt.isEmpty = Ar;
var _r = eo,
  Mr = oo;
function Ar(n, e) {
  n.normalize();
  for (var t = [n]; t.length > 0;) {
    var o = t.shift();
    if (o) {
      if (n = o, (0, _r.isLeaf)(n) && !(0, Mr.isNodeEmpty)(n, e)) return false;
      t.push.apply(t, Array.from(n.childNodes));
    }
  }
  return true;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isEmpty = void 0;
  var e = Jt;
  Object.defineProperty(n, "isEmpty", {
    enumerable: true,
    get: function () {
      return e.isEmpty;
    }
  });
})(Cn);
var Tn = {},
  io = {};
Object.defineProperty(io, "__esModule", {
  value: true
});
io.isFragment = Pr;
var Lr = Ht;
function Pr(n) {
  return (0, Lr.isNumber)(n) ? false : !!n && !!n.nodeType && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isFragment = void 0;
  var e = io;
  Object.defineProperty(n, "isFragment", {
    enumerable: true,
    get: function () {
      return e.isFragment;
    }
  });
})(Tn);
var Sn = {},
  so = {};
Object.defineProperty(so, "__esModule", {
  value: true
});
so.isHTMLString = Rr;
var Nr = qe;
function Rr(n) {
  var e = (0, Nr.make)("div");
  return e.innerHTML = n, e.childElementCount > 0;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isHTMLString = void 0;
  var e = so;
  Object.defineProperty(n, "isHTMLString", {
    enumerable: true,
    get: function () {
      return e.isHTMLString;
    }
  });
})(Sn);
var In = {},
  ro = {};
Object.defineProperty(ro, "__esModule", {
  value: true
});
ro.offset = Dr;
function Dr(n) {
  var e = n.getBoundingClientRect(),
    t = window.pageXOffset || document.documentElement.scrollLeft,
    o = window.pageYOffset || document.documentElement.scrollTop,
    i = e.top + o,
    s = e.left + t;
  return {
    top: i,
    left: s,
    bottom: i + e.height,
    right: s + e.width
  };
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.offset = void 0;
  var e = ro;
  Object.defineProperty(n, "offset", {
    enumerable: true,
    get: function () {
      return e.offset;
    }
  });
})(In);
var On = {},
  ao = {};
Object.defineProperty(ao, "__esModule", {
  value: true
});
ao.prepend = Fr;
function Fr(n, e) {
  Array.isArray(e) ? (e = e.reverse(), e.forEach(function (t) {
    return n.prepend(t);
  })) : n.prepend(e);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.prepend = void 0;
  var e = ao;
  Object.defineProperty(n, "prepend", {
    enumerable: true,
    get: function () {
      return e.prepend;
    }
  });
})(On);
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.prepend = n.offset = n.make = n.isLineBreakTag = n.isSingleTag = n.isNodeEmpty = n.isLeaf = n.isHTMLString = n.isFragment = n.isEmpty = n.isElement = n.isContentEditable = n.isCollapsedWhitespaces = n.findAllInputs = n.isNativeInput = n.allInputsSelector = n.getDeepestNode = n.getDeepestBlockElements = n.getContentLength = n.fragmentToString = n.containsOnlyInlineElements = n.canSetCaret = n.calculateBaseline = n.blockElements = n.append = void 0;
  var e = It;
  Object.defineProperty(n, "allInputsSelector", {
    enumerable: true,
    get: function () {
      return e.allInputsSelector;
    }
  });
  var t = ue;
  Object.defineProperty(n, "isNativeInput", {
    enumerable: true,
    get: function () {
      return t.isNativeInput;
    }
  });
  var o = pn;
  Object.defineProperty(n, "append", {
    enumerable: true,
    get: function () {
      return o.append;
    }
  });
  var i = At;
  Object.defineProperty(n, "blockElements", {
    enumerable: true,
    get: function () {
      return i.blockElements;
    }
  });
  var s = fn;
  Object.defineProperty(n, "calculateBaseline", {
    enumerable: true,
    get: function () {
      return s.calculateBaseline;
    }
  });
  var r = gn;
  Object.defineProperty(n, "canSetCaret", {
    enumerable: true,
    get: function () {
      return r.canSetCaret;
    }
  });
  var a = Ve;
  Object.defineProperty(n, "containsOnlyInlineElements", {
    enumerable: true,
    get: function () {
      return a.containsOnlyInlineElements;
    }
  });
  var l = vn;
  Object.defineProperty(n, "fragmentToString", {
    enumerable: true,
    get: function () {
      return l.fragmentToString;
    }
  });
  var c = kn;
  Object.defineProperty(n, "getContentLength", {
    enumerable: true,
    get: function () {
      return c.getContentLength;
    }
  });
  var d = Wt;
  Object.defineProperty(n, "getDeepestBlockElements", {
    enumerable: true,
    get: function () {
      return d.getDeepestBlockElements;
    }
  });
  var h = wn;
  Object.defineProperty(n, "getDeepestNode", {
    enumerable: true,
    get: function () {
      return h.getDeepestNode;
    }
  });
  var p = xn;
  Object.defineProperty(n, "findAllInputs", {
    enumerable: true,
    get: function () {
      return p.findAllInputs;
    }
  });
  var g = Bn;
  Object.defineProperty(n, "isCollapsedWhitespaces", {
    enumerable: true,
    get: function () {
      return g.isCollapsedWhitespaces;
    }
  });
  var f = Rt;
  Object.defineProperty(n, "isContentEditable", {
    enumerable: true,
    get: function () {
      return f.isContentEditable;
    }
  });
  var v = Gt;
  Object.defineProperty(n, "isElement", {
    enumerable: true,
    get: function () {
      return v.isElement;
    }
  });
  var O = Cn;
  Object.defineProperty(n, "isEmpty", {
    enumerable: true,
    get: function () {
      return O.isEmpty;
    }
  });
  var T = Tn;
  Object.defineProperty(n, "isFragment", {
    enumerable: true,
    get: function () {
      return T.isFragment;
    }
  });
  var M = Sn;
  Object.defineProperty(n, "isHTMLString", {
    enumerable: true,
    get: function () {
      return M.isHTMLString;
    }
  });
  var q = eo;
  Object.defineProperty(n, "isLeaf", {
    enumerable: true,
    get: function () {
      return q.isLeaf;
    }
  });
  var F = oo;
  Object.defineProperty(n, "isNodeEmpty", {
    enumerable: true,
    get: function () {
      return F.isNodeEmpty;
    }
  });
  var H = Ze;
  Object.defineProperty(n, "isLineBreakTag", {
    enumerable: true,
    get: function () {
      return H.isLineBreakTag;
    }
  });
  var Q = Ge;
  Object.defineProperty(n, "isSingleTag", {
    enumerable: true,
    get: function () {
      return Q.isSingleTag;
    }
  });
  var ie = qe;
  Object.defineProperty(n, "make", {
    enumerable: true,
    get: function () {
      return ie.make;
    }
  });
  var k = In;
  Object.defineProperty(n, "offset", {
    enumerable: true,
    get: function () {
      return k.offset;
    }
  });
  var m = On;
  Object.defineProperty(n, "prepend", {
    enumerable: true,
    get: function () {
      return m.prepend;
    }
  });
})(de);
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: true
});
Qe.getContenteditableSlice = Hr;
var jr = de;
function Hr(n, e, t, o, i) {
  var s;
  i === void 0 && (i = false);
  var r = document.createRange();
  if (o === "left" ? (r.setStart(n, 0), r.setEnd(e, t)) : (r.setStart(e, t), r.setEnd(n, n.childNodes.length)), i === true) {
    var a = r.extractContents();
    return (0, jr.fragmentToString)(a);
  }
  var l = r.cloneContents(),
    c = document.createElement("div");
  c.appendChild(l);
  var d = (s = c.textContent) !== null && s !== void 0 ? s : "";
  return d;
}
Object.defineProperty(Xe, "__esModule", {
  value: true
});
Xe.checkContenteditableSliceForEmptiness = Ur;
var $r = de,
  zr = Qe;
function Ur(n, e, t, o) {
  var i = (0, zr.getContenteditableSlice)(n, e, t, o);
  return (0, $r.isCollapsedWhitespaces)(i);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.checkContenteditableSliceForEmptiness = void 0;
  var e = Xe;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", {
    enumerable: true,
    get: function () {
      return e.checkContenteditableSliceForEmptiness;
    }
  });
})(St);
var _n = {};
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.getContenteditableSlice = void 0;
  var e = Qe;
  Object.defineProperty(n, "getContenteditableSlice", {
    enumerable: true,
    get: function () {
      return e.getContenteditableSlice;
    }
  });
})(_n);
var Mn = {},
  lo = {};
Object.defineProperty(lo, "__esModule", {
  value: true
});
lo.focus = Yr;
var Wr = de;
function Yr(n, e) {
  var t, o;
  if (e === void 0 && (e = true), (0, Wr.isNativeInput)(n)) {
    n.focus();
    var i = e ? 0 : n.value.length;
    n.setSelectionRange(i, i);
  } else {
    var s = document.createRange(),
      r = window.getSelection();
    if (!r) return;
    var a = function (p) {
        var g = document.createTextNode("");
        p.appendChild(g), s.setStart(g, 0), s.setEnd(g, 0);
      },
      l = function (p) {
        return p != null;
      },
      c = n.childNodes,
      d = e ? c[0] : c[c.length - 1];
    if (l(d)) {
      for (; l(d) && d.nodeType !== Node.TEXT_NODE;) d = e ? d.firstChild : d.lastChild;
      if (l(d) && d.nodeType === Node.TEXT_NODE) {
        var h = (o = (t = d.textContent) === null || t === void 0 ? void 0 : t.length) !== null && o !== void 0 ? o : 0,
          i = e ? 0 : h;
        s.setStart(d, i), s.setEnd(d, i);
      } else a(n);
    } else a(n);
    r.removeAllRanges(), r.addRange(s);
  }
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.focus = void 0;
  var e = lo;
  Object.defineProperty(n, "focus", {
    enumerable: true,
    get: function () {
      return e.focus;
    }
  });
})(Mn);
var co = {},
  Je = {};
Object.defineProperty(Je, "__esModule", {
  value: true
});
Je.getCaretNodeAndOffset = Kr;
function Kr() {
  var n = window.getSelection();
  if (n === null) return [null, 0];
  var e = n.focusNode,
    t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] !== void 0 ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], e.textContent !== null && (t = e.textContent.length))), [e, t]);
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.getCaretNodeAndOffset = void 0;
  var e = Je;
  Object.defineProperty(n, "getCaretNodeAndOffset", {
    enumerable: true,
    get: function () {
      return e.getCaretNodeAndOffset;
    }
  });
})(co);
var An = {},
  et = {};
Object.defineProperty(et, "__esModule", {
  value: true
});
et.getRange = Xr;
function Xr() {
  var n = window.getSelection();
  return n && n.rangeCount ? n.getRangeAt(0) : null;
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.getRange = void 0;
  var e = et;
  Object.defineProperty(n, "getRange", {
    enumerable: true,
    get: function () {
      return e.getRange;
    }
  });
})(An);
var Ln = {},
  uo = {};
Object.defineProperty(uo, "__esModule", {
  value: true
});
uo.isCaretAtEndOfInput = Zr;
var Oo = de,
  Vr = co,
  qr = St;
function Zr(n) {
  var e = (0, Oo.getDeepestNode)(n, true);
  if (e === null) return true;
  if ((0, Oo.isNativeInput)(e)) return e.selectionEnd === e.value.length;
  var t = (0, Vr.getCaretNodeAndOffset)(),
    o = t[0],
    i = t[1];
  return o === null ? false : (0, qr.checkContenteditableSliceForEmptiness)(n, o, i, "right");
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isCaretAtEndOfInput = void 0;
  var e = uo;
  Object.defineProperty(n, "isCaretAtEndOfInput", {
    enumerable: true,
    get: function () {
      return e.isCaretAtEndOfInput;
    }
  });
})(Ln);
var Pn = {},
  ho = {};
Object.defineProperty(ho, "__esModule", {
  value: true
});
ho.isCaretAtStartOfInput = Jr;
var Ae = de,
  Gr = Je,
  Qr = Xe;
function Jr(n) {
  var e = (0, Ae.getDeepestNode)(n);
  if (e === null || (0, Ae.isEmpty)(n)) return true;
  if ((0, Ae.isNativeInput)(e)) return e.selectionEnd === 0;
  if ((0, Ae.isEmpty)(n)) return true;
  var t = (0, Gr.getCaretNodeAndOffset)(),
    o = t[0],
    i = t[1];
  return o === null ? false : (0, Qr.checkContenteditableSliceForEmptiness)(n, o, i, "left");
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.isCaretAtStartOfInput = void 0;
  var e = ho;
  Object.defineProperty(n, "isCaretAtStartOfInput", {
    enumerable: true,
    get: function () {
      return e.isCaretAtStartOfInput;
    }
  });
})(Pn);
var Nn = {},
  po = {};
Object.defineProperty(po, "__esModule", {
  value: true
});
po.save = oa;
var ea = de,
  ta = et;
function oa() {
  var n = (0, ta.getRange)(),
    e = (0, ea.make)("span");
  if (e.id = "cursor", e.hidden = true, !!n) return n.insertNode(e), function () {
    var o = window.getSelection();
    o && (n.setStartAfter(e), n.setEndAfter(e), o.removeAllRanges(), o.addRange(n), setTimeout(function () {
      e.remove();
    }, 150));
  };
}
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.save = void 0;
  var e = po;
  Object.defineProperty(n, "save", {
    enumerable: true,
    get: function () {
      return e.save;
    }
  });
})(Nn);
(function (n) {
  Object.defineProperty(n, "__esModule", {
    value: true
  }), n.save = n.isCaretAtStartOfInput = n.isCaretAtEndOfInput = n.getRange = n.getCaretNodeAndOffset = n.focus = n.getContenteditableSlice = n.checkContenteditableSliceForEmptiness = void 0;
  var e = St;
  Object.defineProperty(n, "checkContenteditableSliceForEmptiness", {
    enumerable: true,
    get: function () {
      return e.checkContenteditableSliceForEmptiness;
    }
  });
  var t = _n;
  Object.defineProperty(n, "getContenteditableSlice", {
    enumerable: true,
    get: function () {
      return t.getContenteditableSlice;
    }
  });
  var o = Mn;
  Object.defineProperty(n, "focus", {
    enumerable: true,
    get: function () {
      return o.focus;
    }
  });
  var i = co;
  Object.defineProperty(n, "getCaretNodeAndOffset", {
    enumerable: true,
    get: function () {
      return i.getCaretNodeAndOffset;
    }
  });
  var s = An;
  Object.defineProperty(n, "getRange", {
    enumerable: true,
    get: function () {
      return s.getRange;
    }
  });
  var r = Ln;
  Object.defineProperty(n, "isCaretAtEndOfInput", {
    enumerable: true,
    get: function () {
      return r.isCaretAtEndOfInput;
    }
  });
  var a = Pn;
  Object.defineProperty(n, "isCaretAtStartOfInput", {
    enumerable: true,
    get: function () {
      return a.isCaretAtStartOfInput;
    }
  });
  var l = Nn;
  Object.defineProperty(n, "save", {
    enumerable: true,
    get: function () {
      return l.save;
    }
  });
})(hn);
var na = class extends E {
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case y.BACKSPACE:
        this.backspace(e);
        break;
      case y.DELETE:
        this.delete(e);
        break;
      case y.ENTER:
        this.enter(e);
        break;
      case y.DOWN:
      case y.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case y.UP:
      case y.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case y.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && Po(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = true;
  }
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = false;
  }
  handleCommandC(e) {
    const {
      BlockSelection: t
    } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  handleCommandX(e) {
    const {
      BlockSelection: t,
      BlockManager: o,
      Caret: i
    } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const s = o.removeSelectedBlocks(),
        r = o.insertDefaultBlockAtIndex(s, true);
      i.setToBlock(r, i.positions.START), t.clearSelection(e);
    });
  }
  tabPressed(e) {
    const {
      InlineToolbar: t,
      Caret: o
    } = this.Editor;
    if (t.opened) return;
    (e.shiftKey ? o.navigatePrevious(true) : o.navigateNext(true)) && e.preventDefault();
  }
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  slashPressed(e) {
    !this.Editor.UI.nodes.wrapper.contains(e.target) || !this.Editor.BlockManager.currentBlock.isEmpty || (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  enter(e) {
    const {
        BlockManager: t,
        UI: o
      } = this.Editor,
      i = t.currentBlock;
    if (i === void 0 || i.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey && !pt) return;
    let s = i;
    i.currentInput !== void 0 && Ne(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Re(i.currentInput) ? s = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s), e.preventDefault();
  }
  backspace(e) {
    const {
        BlockManager: t,
        Caret: o
      } = this.Editor,
      {
        currentBlock: i,
        previousBlock: s
      } = t;
    if (i === void 0 || !b.isCollapsed || !i.currentInput || !Ne(i.currentInput)) return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
      o.navigatePrevious();
      return;
    }
    if (s === null) return;
    if (s.isEmpty) {
      t.removeBlock(s);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i);
      const l = t.currentBlock;
      o.setToBlock(l, o.positions.END);
      return;
    }
    xo(s, i) ? this.mergeBlocks(s, i) : o.setToBlock(s, o.positions.END);
  }
  delete(e) {
    const {
        BlockManager: t,
        Caret: o
      } = this.Editor,
      {
        currentBlock: i,
        nextBlock: s
      } = t;
    if (!b.isCollapsed || !Re(i.currentInput)) return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
      o.navigateNext();
      return;
    }
    if (s === null) return;
    if (s.isEmpty) {
      t.removeBlock(s);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i), o.setToBlock(s, o.positions.START);
      return;
    }
    xo(i, s) ? this.mergeBlocks(i, s) : o.setToBlock(s, o.positions.START);
  }
  mergeBlocks(e, t) {
    const {
      BlockManager: o,
      Toolbar: i
    } = this.Editor;
    e.lastInput !== void 0 && (hn.focus(e.lastInput, false), o.mergeBlocks(e, t).then(() => {
      i.close();
    }));
  }
  arrowRightAndDown(e) {
    const t = ce.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB);
    if (this.Editor.UI.someToolbarOpened && t) return;
    this.Editor.Toolbar.close();
    const {
        currentBlock: o
      } = this.Editor.BlockManager,
      s = ((o == null ? void 0 : o.currentInput) !== void 0 ? Re(o.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.DOWN && s) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === y.DOWN || e.keyCode === y.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Fe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (ce.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === y.TAB)) return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const {
        currentBlock: t
      } = this.Editor.BlockManager,
      i = ((t == null ? void 0 : t.currentInput) !== void 0 ? Ne(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === y.UP && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(false);
      return;
    }
    if (e.keyCode === y.UP || e.keyCode === y.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Fe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  needToolbarClosing(e) {
    const t = e.keyCode === y.ENTER && this.Editor.Toolbar.toolbox.opened,
      o = e.keyCode === y.ENTER && this.Editor.BlockSettings.opened,
      i = e.keyCode === y.ENTER && this.Editor.InlineToolbar.opened,
      s = e.keyCode === y.TAB;
    return !(e.shiftKey || s || t || o || i);
  }
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
};
var ct = class {
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  get length() {
    return this.blocks.length;
  }
  get array() {
    return this.blocks;
  }
  get nodes() {
    return No(this.workingArea.children);
  }
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), true) : (e.insert(+t, o), true);
  }
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  swap(e, t) {
    const o = this.blocks[t];
    u.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0],
      i = e - 1,
      s = Math.max(0, i),
      r = this.blocks[s];
    e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
    const a = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(ee.MOVED, a);
  }
  insert(e, t, o = false) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const s = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", s);
    } else {
      const s = this.blocks[e + 1];
      s ? this.insertToDOM(t, "beforebegin", s) : this.insertToDOM(t);
    }
  }
  replace(e, t) {
    if (this.blocks[e] === void 0) throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const i of e) o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach(i => i.call(ee.RENDERED));
  }
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(ee.REMOVED), this.blocks.splice(e, 1);
  }
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach(e => e.call(ee.REMOVED)), this.blocks.length = 0;
  }
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  get(e) {
    return this.blocks[e];
  }
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(ee.RENDERED);
  }
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
var _o = "block-removed",
  Mo = "block-added",
  ia = "block-moved",
  Ao = "block-changed";
var sa = class {
  constructor() {
    this.completed = Promise.resolve();
  }
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
};
var ra = class extends E {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  get firstBlock() {
    return this._blocks[0];
  }
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find(t => !!t.inputs.length);
  }
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find(t => !!t.inputs.length);
  }
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  get blocks() {
    return this._blocks.array;
  }
  get isEditorEmpty() {
    return this.blocks.every(e => e.isEmpty);
  }
  prepare() {
    const e = new ct(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: ct.set,
      get: ct.get
    }), this.listeners.on(document, "copy", t => this.Editor.BlockEvents.handleCommandC(t));
  }
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const s = this.Editor.ReadOnly.isEnabled,
      r = this.Editor.Tools.blockTools.get(e),
      a = new R({
        id: o,
        data: t,
        tool: r,
        api: this.Editor.API,
        readOnly: s,
        tunesData: i
      }, this.eventsDispatcher);
    return s || window.requestIdleCallback(() => {
      this.bindBlockEvents(a);
    }, {
      timeout: 2e3
    }), a;
  }
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: s = true,
    replace: r = false,
    tunes: a = {}
  } = {}) {
    let l = i;
    l === void 0 && (l = this.currentBlockIndex + (r ? 0 : 1));
    const c = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: a
    });
    return r && this.blockDidMutated(_o, this.getBlockByIndex(l), {
      index: l
    }), this._blocks.insert(l, c, r), this.blockDidMutated(Mo, c, {
      index: l
    }), s ? this.currentBlockIndex = l : l <= this.currentBlockIndex && this.currentBlockIndex++, c;
  }
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  async update(e, t, o) {
    if (!t && !o) return e;
    const i = await e.data,
      s = this.composeBlock({
        id: e.id,
        tool: e.name,
        data: Object.assign({}, i, t ?? {}),
        tunes: o ?? e.tunes
      }),
      r = this.getBlockIndex(e);
    return this._blocks.replace(r, s), this.blockDidMutated(Ao, s, {
      index: r
    }), s;
  }
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    return this.insert({
      tool: t,
      data: o,
      index: i,
      replace: true
    });
  }
  paste(e, t, o = false) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(ee.ON_PASTE, t);
      });
    } catch (s) {
      S(`${e}: onPaste callback call is failed`, "error", s);
    }
    return i;
  }
  insertDefaultBlockAtIndex(e, t = false) {
    const o = this.composeBlock({
      tool: this.config.defaultBlock
    });
    return this._blocks[e] = o, this.blockDidMutated(Mo, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  async mergeBlocks(e, t) {
    let o;
    if (e.name === t.name && e.mergeable) {
      const i = await t.data;
      if (V(i)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [s] = yt([i], e.tool.sanitizeConfig);
      o = s;
    } else if (e.mergeable && He(t, "export") && He(e, "import")) {
      const i = await t.exportDataAsString(),
        s = Z(i, e.tool.sanitizeConfig);
      o = Bo(s, e.tool.conversionConfig);
    }
    o !== void 0 && (await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  removeBlock(e, t = true) {
    return new Promise(o => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i)) throw new Error("Can't find a Block to remove");
      this._blocks.remove(i), e.destroy(), this.blockDidMutated(_o, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o();
    });
  }
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--) this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--) this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(),
      t = u.make("div");
    t.appendChild(e);
    const o = {
      text: u.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({
      data: o
    });
  }
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  getBlockById(e) {
    return this._blocks.array.find(t => t.id === e);
  }
  getBlock(e) {
    u.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes,
      o = e.closest(`.${R.CSS.wrapper}`),
      i = t.indexOf(o);
    if (i >= 0) return this._blocks[i];
  }
  setCurrentBlockByChildNode(e) {
    u.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    if (!t) return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node)) return;
    u.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    return this.blocks.find(o => o.holder === t);
  }
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      S("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      S("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(ia, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  async convert(e, t, o) {
    if (!(await e.save())) throw new Error("Could not convert Block. Failed to extract original Block data.");
    const s = this.Editor.Tools.blockTools.get(t);
    if (!s) throw new Error(`Could not convert Block. Tool \xAB${t}\xBB not found.`);
    const r = await e.exportDataAsString(),
      a = Z(r, s.sanitizeConfig);
    let l = Bo(a, s.conversionConfig, s.settings);
    return o && (l = Object.assign(l, o)), this.replace(e, s.name, l);
  }
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  async clear(e = false) {
    const t = new sa();
    [...this.blocks].forEach(i => {
      t.add(async () => {
        await this.removeBlock(i, false);
      });
    }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  async destroy() {
    await Promise.all(this.blocks.map(e => e.destroy()));
  }
  bindBlockEvents(e) {
    const {
      BlockEvents: t
    } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", o => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", o => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", o => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", o => {
      t.dragLeave(o);
    }), e.on("didMutated", o => this.blockDidMutated(Ao, o, {
      index: this.getBlockIndex(o)
    }));
  }
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(document, "cut", e => this.Editor.BlockEvents.handleCommandX(e)), this.blocks.forEach(e => {
      this.bindBlockEvents(e);
    });
  }
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new J(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit($o, {
      event: i
    }), t;
  }
};
var aa = class extends E {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
  }
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: true,
      img: {
        src: true,
        width: true,
        height: true
      },
      a: {
        href: true
      },
      b: {},
      i: {},
      u: {}
    };
  }
  get allBlocksSelected() {
    const {
      BlockManager: e
    } = this.Editor;
    return e.blocks.every(t => t.selected === true);
  }
  set allBlocksSelected(e) {
    const {
      BlockManager: t
    } = this.Editor;
    t.blocks.forEach(o => {
      o.selected = e;
    }), this.clearCache();
  }
  get anyBlockSelected() {
    const {
      BlockManager: e
    } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some(t => t.selected === true)), this.anyBlockSelectedCache;
  }
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter(e => e.selected);
  }
  prepare() {
    this.selection = new b(), ge.add({
      name: "CMD+A",
      handler: e => {
        const {
          BlockManager: t,
          ReadOnly: o
        } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  toggleReadOnly() {
    b.get().removeAllRanges(), this.allBlocksSelected = false;
  }
  unSelectBlockByIndex(e) {
    const {
      BlockManager: t
    } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = false, this.clearCache();
  }
  clearSelection(e, t = false) {
    const {
      BlockManager: o,
      Caret: i,
      RectangleSelection: s
    } = this.Editor;
    this.needToSelectAll = false, this.nativeInputSelected = false, this.readyToBlockSelection = false;
    const r = e && e instanceof KeyboardEvent,
      a = r && Po(e.keyCode);
    if (this.anyBlockSelected && r && a && !b.isSelectionExists) {
      const l = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(l, true), i.setToBlock(o.currentBlock), Fe(() => {
        const c = e.key;
        i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = false;
  }
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = u.make("div");
    this.selectedBlocks.forEach(s => {
      const r = Z(s.holder.innerHTML, this.sanitizerConfig),
        a = u.make("p");
      a.innerHTML = r, t.appendChild(a);
    });
    const o = Array.from(t.childNodes).map(s => s.textContent).join(`

`),
      i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map(s => s.save())).then(s => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s));
      } catch {}
    });
  }
  selectBlockByIndex(e) {
    const {
        BlockManager: t
      } = this.Editor,
      o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  selectBlock(e) {
    this.selection.save(), b.get().removeAllRanges(), e.selected = true, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  unselectBlock(e) {
    e.selected = false, this.clearCache();
  }
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  destroy() {
    ge.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), u.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = true;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target),
      o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = true;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = true;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = false, this.readyToBlockSelection = false) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = true);
  }
  selectAllBlocks() {
    this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = true, this.Editor.InlineToolbar.close();
  }
};
var Ye = class extends E {
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var c;
    const {
      BlockManager: i,
      BlockSelection: s
    } = this.Editor;
    if (s.clearSelection(), !e.focusable) {
      (c = window.getSelection()) == null || c.removeAllRanges(), s.selectBlock(e), i.currentBlock = e;
      return;
    }
    let r;
    switch (t) {
      case this.positions.START:
        r = e.firstInput;
        break;
      case this.positions.END:
        r = e.lastInput;
        break;
      default:
        r = e.currentInput;
    }
    if (!r) return;
    let a,
      l = o;
    if (t === this.positions.START) a = u.getDeepestNode(r, false), l = 0;else if (t === this.positions.END) a = u.getDeepestNode(r, true), l = u.getContentLength(a);else {
      const {
        node: d,
        offset: h
      } = u.getNodeByOffset(r, o);
      d ? (a = d, l = h) : (a = u.getDeepestNode(r, false), l = 0);
    }
    this.set(a, l), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r;
  }
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const {
        currentBlock: i
      } = this.Editor.BlockManager,
      s = u.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s, 0);
        break;
      case this.positions.END:
        this.set(s, u.getContentLength(s));
        break;
      default:
        o && this.set(s, o);
    }
    i.currentInput = e;
  }
  set(e, t = 0) {
    const {
        top: i,
        bottom: s
      } = b.setCursor(e, t),
      {
        innerHeight: r
      } = window;
    i < 0 ? window.scrollBy(0, i - 30) : s > r && window.scrollBy(0, s - r + 30);
  }
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e) if (e.tool.isDefault && e.isEmpty) this.setToBlock(e);else {
      const t = this.Editor.BlockManager.insertAtEnd();
      this.setToBlock(t);
    }
  }
  extractFragmentFromCaretPosition() {
    const e = b.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0),
        o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o) if (u.isNativeInput(o)) {
        const i = o,
          s = document.createDocumentFragment(),
          r = i.value.substring(0, i.selectionStart),
          a = i.value.substring(i.selectionStart);
        return s.textContent = a, i.value = r, s;
      } else {
        const i = t.cloneRange();
        return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
      }
    }
  }
  navigateNext(e = false) {
    const {
        BlockManager: t
      } = this.Editor,
      {
        currentBlock: o,
        nextBlock: i
      } = t;
    if (o === void 0) return false;
    const {
        nextInput: s,
        currentInput: r
      } = o,
      a = r !== void 0 ? Re(r) : void 0;
    let l = i;
    const c = e || a || !o.focusable;
    if (s && c) return this.setToInput(s, this.positions.START), true;
    if (l === null) {
      if (o.tool.isDefault || !c) return false;
      l = t.insertAtEnd();
    }
    return c ? (this.setToBlock(l, this.positions.START), true) : false;
  }
  navigatePrevious(e = false) {
    const {
      currentBlock: t,
      previousBlock: o
    } = this.Editor.BlockManager;
    if (!t) return false;
    const {
        previousInput: i,
        currentInput: s
      } = t,
      r = s !== void 0 ? Ne(s) : void 0,
      a = e || r || !t.focusable;
    return i && a ? (this.setToInput(i, this.positions.END), true) : o !== null && a ? (this.setToBlock(o, this.positions.END), true) : false;
  }
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Ye.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  restoreCaret(e) {
    const t = e.querySelector(`.${Ye.CSS.shadowCaret}`);
    if (!t) return;
    new b().expandToTag(t);
    const i = document.createRange();
    i.selectNode(t), i.extractContents();
  }
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(),
      o = document.createElement("div"),
      i = b.get(),
      s = b.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach(c => t.appendChild(c)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r = t.lastChild;
    s.deleteContents(), s.insertNode(t);
    const a = document.createRange(),
      l = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    l !== null && l.textContent !== null && a.setStart(l, l.textContent.length), i.removeAllRanges(), i.addRange(a);
  }
};
var la = class extends E {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = e => {
      const {
        BlockManager: t,
        BlockSelection: o
      } = this.Editor;
      if (e.relatedTarget === null && e.target === null) return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock,
        s = t.getBlockByChildNode(e.target);
      if (!(!i || !s) && s !== i) {
        if (i === this.firstSelectedBlock) {
          b.get().removeAllRanges(), i.selected = true, s.selected = true, o.clearCache();
          return;
        }
        if (s === this.firstSelectedBlock) {
          i.selected = false, s.selected = false, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s), this.lastSelectedBlock = s;
      }
    };
  }
  async prepare() {
    this.listeners.on(document, "mousedown", e => {
      this.enableCrossBlockSelection(e);
    });
  }
  watchSelection(e) {
    if (e.button !== qn.LEFT) return;
    const {
      BlockManager: t
    } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  toggleBlockSelectedState(e = true) {
    const {
      BlockManager: t,
      BlockSelection: o
    } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = true, o.clearCache(), b.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1),
      s = t.blocks[i];
    s && (this.lastSelectedBlock.selected !== s.selected ? (s.selected = true, o.clearCache()) : (this.lastSelectedBlock.selected = false, o.clearCache()), this.lastSelectedBlock = s, this.Editor.InlineToolbar.close(), s.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  clear(e) {
    const {
        BlockManager: t,
        BlockSelection: o,
        Caret: i
      } = this.Editor,
      s = t.blocks.indexOf(this.firstSelectedBlock),
      r = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && s > -1 && r > -1 && e && e instanceof KeyboardEvent) switch (e.keyCode) {
      case y.DOWN:
      case y.RIGHT:
        i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
        break;
      case y.UP:
      case y.LEFT:
        i.setToBlock(t.blocks[Math.min(s, r)], i.positions.START);
        break;
      default:
        i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
    }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  enableCrossBlockSelection(e) {
    const {
      UI: t
    } = this.Editor;
    b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  toggleBlocksSelectedState(e, t) {
    const {
        BlockManager: o,
        BlockSelection: i
      } = this.Editor,
      s = o.blocks.indexOf(e),
      r = o.blocks.indexOf(t),
      a = e.selected !== t.selected;
    for (let l = Math.min(s, r); l <= Math.max(s, r); l++) {
      const c = o.blocks[l];
      c !== this.firstSelectedBlock && c !== (a ? e : t) && (o.blocks[l].selected = !o.blocks[l].selected, i.clearCache());
    }
  }
};
var ca = class extends E {
  constructor() {
    super(...arguments), this.isStartedAtEditor = false;
  }
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  enableModuleBindings() {
    const {
      UI: e
    } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async t => {
      await this.processDrop(t);
    }, true), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", t => {
      this.processDragOver(t);
    }, true);
  }
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  async processDrop(e) {
    const {
      BlockManager: t,
      Paste: o,
      Caret: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach(r => {
      r.dropTarget = false;
    }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = false;
    const s = t.setCurrentBlockByChildNode(e.target);
    if (s) this.Editor.Caret.setToBlock(s, i.positions.END);else {
      const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, i.positions.END);
    }
    await o.processDataTransfer(e.dataTransfer, true);
  }
  processDragStart() {
    b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = true), this.Editor.InlineToolbar.close();
  }
  processDragOver(e) {
    e.preventDefault();
  }
};
var da = 180,
  ua = 400;
var ha = class extends E {
  constructor({
    config: e,
    eventsDispatcher: t
  }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = false, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */new Map(), this.batchTime = ua, this.mutationObserver = new MutationObserver(o => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on($o, o => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(zo, () => {
      this.disable();
    }), this.eventsDispatcher.on(Uo, () => {
      this.enable();
    });
  }
  enable() {
    this.mutationObserver.observe(this.Editor.UI.nodes.redactor, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true
    }), this.disabled = false;
  }
  disable() {
    this.mutationObserver.disconnect(), this.disabled = true;
  }
  particularBlockChanged(e) {
    this.disabled || !A(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  redactorChanged(e) {
    this.eventsDispatcher.emit(ft, {
      mutations: e
    });
  }
};
var Rn = class Dn extends E {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = e => {
      try {
        const t = e.create({}, {}, false);
        if (e.pasteConfig === false) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!A(t.onPaste)) return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        S(`Paste handling for \xAB${e.name}\xBB Tool hasn't been set up because of the error`, "warn", t);
      }
    }, this.handlePasteEvent = async e => {
      const {
          BlockManager: t,
          Toolbar: o
        } = this.Editor,
        i = t.setCurrentBlockByChildNode(e.target);
      !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o.close());
    };
  }
  async prepare() {
    this.processTools();
  }
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  async processDataTransfer(e, t = false) {
    const {
        Tools: o
      } = this.Editor,
      i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const r = e.getData(this.MIME_TYPE),
      a = e.getData("text/plain");
    let l = e.getData("text/html");
    if (r) try {
      this.insertEditorJSData(JSON.parse(r));
      return;
    } catch {}
    t && a.trim() && l.trim() && (l = "<p>" + (l.trim() ? l : a) + "</p>");
    const c = Object.keys(this.toolsTags).reduce((p, g) => (p[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, p), {}),
      d = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), {
        br: {}
      }),
      h = Z(l, d);
    !h.trim() || h.trim() === a || !u.isHTMLString(h) ? await this.processText(a) : await this.processText(h, true);
  }
  async processText(e, t = false) {
    const {
        Caret: o,
        BlockManager: i
      } = this.Editor,
      s = t ? this.processHTML(e) : this.processPlain(e);
    if (!s.length) return;
    if (s.length === 1) {
      s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop());
      return;
    }
    const a = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    s.map(async (l, c) => this.insertBlock(l, c === 0 && a)), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
  }
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  collectTagNames(e) {
    return te(e) ? [e] : D(e) ? Object.keys(e) : [];
  }
  getTagsConfig(e) {
    if (e.pasteConfig === false) return;
    const t = e.pasteConfig.tags || [],
      o = [];
    t.forEach(i => {
      const s = this.collectTagNames(i);
      o.push(...s), s.forEach(r => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, r)) {
          S(`Paste handler for \xAB${e.name}\xBB Tool on \xAB${r}\xBB tag is skipped because it is already used by \xAB${this.toolsTags[r].tool.name}\xBB Tool.`, "warn");
          return;
        }
        const a = D(i) ? i[r] : null;
        this.toolsTags[r.toUpperCase()] = {
          tool: e,
          sanitizationConfig: a
        };
      });
    }), this.tagsByTool[e.name] = o.map(i => i.toUpperCase());
  }
  getFilesConfig(e) {
    if (e.pasteConfig === false) return;
    const {
      files: t = {}
    } = e.pasteConfig;
    let {
      extensions: o,
      mimeTypes: i
    } = t;
    !o && !i || (o && !Array.isArray(o) && (S(`\xABextensions\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), o = []), i && !Array.isArray(i) && (S(`\xABmimeTypes\xBB property of the onDrop config for \xAB${e.name}\xBB Tool should be an array`), i = []), i && (i = i.filter(s => ei(s) ? true : (S(`MIME type value \xAB${s}\xBB for the \xAB${e.name}\xBB Tool is not a valid MIME type`, "warn"), false))), this.toolsFiles[e.name] = {
      extensions: o || [],
      mimeTypes: i || []
    });
  }
  getPatternsConfig(e) {
    e.pasteConfig === false || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o]) => {
      o instanceof RegExp || S(`Pattern ${o} for \xAB${e.name}\xBB Tool is skipped because it should be a Regexp instance.`, "warn"), this.toolsPatterns.push({
        key: t,
        pattern: o,
        tool: e
      });
    });
  }
  isNativeBehaviour(e) {
    return u.isNativeInput(e);
  }
  async processFiles(e) {
    const {
      BlockManager: t
    } = this.Editor;
    let o;
    o = await Promise.all(Array.from(e).map(r => this.processFile(r))), o = o.filter(r => !!r);
    const s = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o.forEach((r, a) => {
      t.paste(r.type, r.event, a === 0 && s);
    });
  }
  async processFile(e) {
    const t = Jn(e),
      o = Object.entries(this.toolsFiles).find(([r, {
        mimeTypes: a,
        extensions: l
      }]) => {
        const [c, d] = e.type.split("/"),
          h = l.find(g => g.toLowerCase() === t.toLowerCase()),
          p = a.find(g => {
            const [f, v] = g.split("/");
            return f === c && (v === d || v === "*");
          });
        return !!h || !!p;
      });
    if (!o) return;
    const [i] = o;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  processHTML(e) {
    const {
        Tools: t
      } = this.Editor,
      o = u.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map(s => {
      let r,
        a = t.defaultTool,
        l = false;
      switch (s.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          r = u.make("div"), r.appendChild(s);
          break;
        case Node.ELEMENT_NODE:
          r = s, l = true, this.toolsTags[r.tagName] && (a = this.toolsTags[r.tagName].tool);
          break;
      }
      const {
          tags: c
        } = a.pasteConfig || {
          tags: []
        },
        d = c.reduce((g, f) => (this.collectTagNames(f).forEach(O => {
          const T = D(f) ? f[O] : null;
          g[O.toLowerCase()] = T || {};
        }), g), {}),
        h = Object.assign({}, d, a.baseSanitizeConfig);
      if (r.tagName.toLowerCase() === "table") {
        const g = Z(r.outerHTML, h);
        r = u.make("div", void 0, {
          innerHTML: g
        }).firstChild;
      } else r.innerHTML = Z(r.innerHTML, h);
      const p = this.composePasteEvent("tag", {
        data: r
      });
      return {
        content: r,
        isBlock: l,
        tool: a.name,
        event: p
      };
    }).filter(s => {
      const r = u.isEmpty(s.content),
        a = u.isSingleTag(s.content);
      return !r || a;
    });
  }
  processPlain(e) {
    const {
      defaultBlock: t
    } = this.config;
    if (!e) return [];
    const o = t;
    return e.split(/\r?\n/).filter(i => i.trim()).map(i => {
      const s = u.make("div");
      s.textContent = i;
      const r = this.composePasteEvent("tag", {
        data: s
      });
      return {
        content: s,
        tool: o,
        isBlock: false,
        event: r
      };
    });
  }
  async processSingleBlock(e) {
    const {
        Caret: t,
        BlockManager: o
      } = this.Editor,
      {
        currentBlock: i
      } = o;
    if (!i || e.tool !== i.name || !u.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  async processInlinePaste(e) {
    const {
        BlockManager: t,
        Caret: o
      } = this.Editor,
      {
        content: i
      } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < Dn.PATTERN_PROCESSING_MAX_LENGTH) {
      const r = await this.processPattern(i.textContent);
      if (r) {
        const a = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty,
          l = t.paste(r.tool, r.event, a);
        o.setToBlock(l, o.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const r = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand("insertHTML", false, Z(i.innerHTML, r));
    } else this.insertBlock(e);
  }
  async processPattern(e) {
    const t = this.toolsPatterns.find(i => {
      const s = i.pattern.exec(e);
      return s ? e === s.shift() : false;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  insertBlock(e, t = false) {
    const {
        BlockManager: o,
        Caret: i
      } = this.Editor,
      {
        currentBlock: s
      } = o;
    let r;
    if (t && s && s.isEmpty) {
      r = o.paste(e.tool, e.event, true), i.setToBlock(r, i.positions.END);
      return;
    }
    r = o.paste(e.tool, e.event), i.setToBlock(r, i.positions.END);
  }
  insertEditorJSData(e) {
    const {
      BlockManager: t,
      Caret: o,
      Tools: i
    } = this.Editor;
    yt(e, r => i.blockTools.get(r).sanitizeConfig).forEach(({
      tool: r,
      data: a
    }, l) => {
      let c = false;
      l === 0 && (c = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const d = t.insert({
        tool: r,
        data: a,
        replace: c
      });
      o.setToBlock(d, o.positions.END);
    });
  }
  processElementNode(e, t, o) {
    const i = Object.keys(this.toolsTags),
      s = e,
      {
        tool: r
      } = this.toolsTags[s.tagName] || {},
      a = this.tagsByTool[r == null ? void 0 : r.name] || [],
      l = i.includes(s.tagName),
      c = u.blockElements.includes(s.tagName.toLowerCase()),
      d = Array.from(s.children).some(({
        tagName: p
      }) => i.includes(p) && !a.includes(p)),
      h = Array.from(s.children).some(({
        tagName: p
      }) => u.blockElements.includes(p.toLowerCase()));
    if (!c && !l && !d) return o.appendChild(s), [...t, o];
    if (l && !d || c && !h && !d) return [...t, o, s];
  }
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (s, r) => {
      if (u.isEmpty(r) && !u.isSingleTag(r)) return s;
      const a = s[s.length - 1];
      let l = new DocumentFragment();
      switch (a && u.isFragment(a) && (l = s.pop()), r.nodeType) {
        case Node.ELEMENT_NODE:
          if (o = this.processElementNode(r, s, l), o) return o;
          break;
        case Node.TEXT_NODE:
          return l.appendChild(r), [...s, l];
        default:
          return [...s, l];
      }
      return [...s, ...Array.from(r.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
Rn.PATTERN_PROCESSING_MAX_LENGTH = 450;
var pa = Rn;
var fa = class extends E {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = false;
  }
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  async prepare() {
    const {
        Tools: e
      } = this.Editor,
      {
        blockTools: t
      } = e,
      o = [];
    Array.from(t.entries()).forEach(([i, s]) => {
      s.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, true);
  }
  async toggle(e = !this.readOnlyEnabled, t = false) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const o = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const s in this.Editor) this.Editor[s].toggleReadOnly && this.Editor[s].toggleReadOnly(e);
    if (o === e) return this.readOnlyEnabled;
    if (t) return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const i = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  throwCriticalError() {
    throw new Ho(`To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`);
  }
};
var Be = class extends E {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = false, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = false, this.isScrolling = false, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  prepare() {
    this.enableModuleBindings();
  }
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = false, this.clearSelection(), this.stackOfSelected = []);
    const s = [`.${R.CSS.content}`, `.${this.Editor.Toolbar.CSS.toolbar}`, `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`],
      r = o.closest("." + this.Editor.UI.CSS.editorWrapper),
      a = s.some(l => !!o.closest(l));
    !r || a || (this.mousedown = true, this.startX = e, this.startY = t);
  }
  endSelection() {
    this.mousedown = false, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  clearSelection() {
    this.isRectSelectionActivated = false;
  }
  enableModuleBindings() {
    const {
      container: e
    } = this.genHTML();
    this.listeners.on(e, "mousedown", t => {
      this.processMouseDown(t);
    }, false), this.listeners.on(document.body, "mousemove", dt(t => {
      this.processMouseMove(t);
    }, 10), {
      passive: true
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", dt(t => {
      this.processScroll(t);
    }, 10), {
      passive: true
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, false);
  }
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON) return;
    e.target.closest(u.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  processScroll(e) {
    this.changingRectangle(e);
  }
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = false;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = true);
  }
  genHTML() {
    const {
        UI: e
      } = this.Editor,
      t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper),
      o = u.make("div", Be.CSS.overlay, {}),
      i = u.make("div", Be.CSS.overlayContainer, {}),
      s = u.make("div", Be.CSS.rect, {});
    return i.appendChild(s), o.appendChild(i), t.appendChild(o), this.overlayRectangle = s, {
      container: t,
      overlay: o
    };
  }
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown)) return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  changingRectangle(e) {
    if (!this.mousedown) return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const {
        rightPos: t,
        leftPos: o,
        index: i
      } = this.genInfoForMouseSelection(),
      s = this.startX > t && this.mouseX > t,
      r = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(s || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = false, this.isRectSelectionActivated = true, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
  }
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t) for (const o of this.stackOfSelected) this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t) for (const o of this.stackOfSelected) this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2,
      o = this.mouseY - window.pageYOffset,
      i = document.elementFromPoint(t, o),
      s = this.Editor.BlockManager.getBlockByChildNode(i);
    let r;
    s !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex(h => h.holder === s.holder));
    const a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + R.CSS.content),
      l = Number.parseInt(window.getComputedStyle(a).width, 10) / 2,
      c = t - l,
      d = t + l;
    return {
      index: r,
      leftPos: c,
      rightPos: d
    };
  }
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e,
      o = this.stackOfSelected.length,
      i = 1,
      s = -1,
      r = 0;
    if (t) return;
    const a = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let l = r;
    o > 1 && (l = a ? i : s);
    const c = e > this.stackOfSelected[o - 1] && l === i,
      d = e < this.stackOfSelected[o - 1] && l === s,
      p = !(c || d || l === r);
    if (!p && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let v = this.stackOfSelected[o - 1] + 1 || e;
      for (v; v <= e; v++) this.addBlockInSelection(v);
      return;
    }
    if (!p && e < this.stackOfSelected[o - 1]) {
      for (let v = this.stackOfSelected[o - 1] - 1; v >= e; v--) this.addBlockInSelection(v);
      return;
    }
    if (!p) return;
    let g = o - 1,
      f;
    for (e > this.stackOfSelected[o - 1] ? f = () => e > this.stackOfSelected[g] : f = () => e < this.stackOfSelected[g]; f();) this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
};
var ga = class extends E {
  async render(e) {
    return new Promise(t => {
      const {
        Tools: o,
        BlockManager: i
      } = this.Editor;
      if (e.length === 0) i.insert();else {
        const s = e.map(({
          type: r,
          data: a,
          tunes: l,
          id: c
        }) => {
          o.available.has(r) === false && (X(`Tool \xAB${r}\xBB is not found. Check 'tools' property at the Editor.js config.`, "warn"), a = this.composeStubDataForTool(r, a, c), r = o.stubTool);
          let d;
          try {
            d = i.composeBlock({
              id: c,
              tool: r,
              data: a,
              tunes: l
            });
          } catch (h) {
            S(`Block \xAB${r}\xBB skipped because of plugins error`, "error", {
              data: a,
              error: h
            }), a = this.composeStubDataForTool(r, a, c), r = o.stubTool, d = i.composeBlock({
              id: c,
              tool: r,
              data: a,
              tunes: l
            });
          }
          return d;
        });
        i.insertMany(s);
      }
      window.requestIdleCallback(() => {
        t();
      }, {
        timeout: 2e3
      });
    });
  }
  composeStubDataForTool(e, t, o) {
    const {
      Tools: i
    } = this.Editor;
    let s = e;
    if (i.unavailable.has(e)) {
      const r = i.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (s = r[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: s
    };
  }
};
var ma = class extends E {
  async save() {
    const {
        BlockManager: e,
        Tools: t
      } = this.Editor,
      o = e.blocks,
      i = [];
    try {
      o.forEach(a => {
        i.push(this.getSavedData(a));
      });
      const s = await Promise.all(i),
        r = await yt(s, a => t.blockTools.get(a).sanitizeConfig);
      return this.makeOutput(r);
    } catch (s) {
      X("Saving failed due to the Error %o", "error", s);
    }
  }
  async getSavedData(e) {
    const t = await e.save(),
      o = t && (await e.validate(t.data));
    return {
      ...t,
      isValid: o
    };
  }
  makeOutput(e) {
    const t = [];
    return e.forEach(({
      id: o,
      tool: i,
      data: s,
      tunes: r,
      isValid: a
    }) => {
      if (!a) {
        S(`Block \xAB${i}\xBB skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(s);
        return;
      }
      const l = {
        id: o,
        type: i,
        data: s,
        ...(!V(r) && {
          tunes: r
        })
      };
      t.push(l);
    }), {
      time: + /* @__PURE__ */new Date(),
      blocks: t,
      version: "2.31.0"
    };
  }
};
(function () {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var ba = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function va(n) {
  const e = document.createElement("div");
  e.innerHTML = n.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
var fo = class {
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  constructor({
    data: e,
    config: t,
    api: o,
    readOnly: i
  }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : fo.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? false;
  }
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element) return;
    const {
      textContent: t
    } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  render() {
    return this._element = this.drawView(), this._element;
  }
  merge(e) {
    if (!this._element) return;
    this._data.text += e.text;
    const t = va(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  static get conversionConfig() {
    return {
      export: "text",
      import: "text"
    };
  }
  static get sanitize() {
    return {
      text: {
        br: true
      }
    };
  }
  static get isReadOnlySupported() {
    return true;
  }
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  static get toolbox() {
    return {
      icon: ba,
      title: "Text"
    };
  }
};
var go = class {
  constructor() {
    this.commandName = "bold";
  }
  static get sanitize() {
    return {
      b: {}
    };
  }
  render() {
    return {
      icon: Ki,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  get shortcut() {
    return "CMD+B";
  }
};
go.isInline = true;
go.title = "Bold";
var mo = class {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  static get sanitize() {
    return {
      i: {}
    };
  }
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Ji, this.nodes.button;
  }
  surround() {
    document.execCommand(this.commandName);
  }
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  get shortcut() {
    return "CMD+I";
  }
};
mo.isInline = true;
mo.title = "Italic";
var bo = class {
  constructor({
    api: e
  }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = false, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
  }
  static get sanitize() {
    return {
      a: {
        href: true,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Co, this.nodes.button;
  }
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", e => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = ns, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else this.nodes.button.innerHTML = Co, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  clear() {
    this.closeActions();
  }
  get shortcut() {
    return "CMD+K";
  }
  toggleActions() {
    this.inputOpened ? this.closeActions(false) : this.openActions(true);
  }
  openActions(e = false) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = true;
  }
  closeActions(e = true) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new b();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = false;
  }
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), S("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  validateURL(e) {
    return !/\s/.test(e);
  }
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e)) return e;
    const t = /^\/[^/\s]/.test(e),
      o = e.substring(0, 1) === "#",
      i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, false, e);
  }
  unlink() {
    document.execCommand(this.commandUnlink);
  }
};
bo.isInline = true;
bo.title = "Link";
var Fn = class {
  constructor({
    api: e
  }) {
    this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
  }
  async render() {
    const e = b.get(),
      t = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (t === void 0) return [];
    const o = this.toolsAPI.getBlockTools(),
      i = await Yo(t, o);
    if (i.length === 0) return [];
    const s = i.reduce((c, d) => {
        var h;
        return (h = d.toolbox) == null || h.forEach(p => {
          c.push({
            icon: p.icon,
            title: z.t(K.toolNames, p.title),
            name: d.name,
            closeOnActivate: true,
            onActivate: async () => {
              const g = await this.blocksAPI.convert(t.id, d.name, p.data);
              this.caretAPI.setToBlock(g, "end");
            }
          });
        }), c;
      }, []),
      r = await t.getActiveToolboxEntry(),
      a = r !== void 0 ? r.icon : Go,
      l = !be();
    return {
      icon: a,
      name: "convert-to",
      hint: {
        title: this.i18nAPI.t("Convert to")
      },
      children: {
        searchable: l,
        items: s,
        onOpen: () => {
          l && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          l && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
        }
      }
    };
  }
};
Fn.isInline = true;
var jn = class {
  constructor({
    data: e,
    api: t
  }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  render() {
    return this.wrapper;
  }
  save() {
    return this.savedData;
  }
  make() {
    const e = u.make("div", this.CSS.wrapper),
      t = is,
      o = u.make("div", this.CSS.info),
      i = u.make("div", this.CSS.title, {
        textContent: this.title
      }),
      s = u.make("div", this.CSS.subtitle, {
        textContent: this.subtitle
      });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(s), e.appendChild(o), e;
  }
};
jn.isReadOnlySupported = true;
var ka = class extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Inline;
  }
  get title() {
    return this.constructable[We.Title];
  }
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
  get isReadOnlySupported() {
    return this.constructable[We.IsReadOnlySupported] ?? false;
  }
};
var ya = class extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Tune;
  }
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e
    });
  }
};
var j = class extends Map {
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new j(e);
  }
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new j(e);
  }
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new j(e);
  }
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new j(e);
  }
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new j(e);
  }
};
var wa = Object.defineProperty,
  Ea = Object.getOwnPropertyDescriptor,
  Hn = (n, e, t, o) => {
    for (var i = o > 1 ? void 0 : o ? Ea(e, t) : e, s = n.length - 1, r; s >= 0; s--) (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
    return o && i && wa(e, t, i), i;
  };
var vo = class extends Tt {
  constructor() {
    super(...arguments), this.type = ae.Block, this.inlineTools = new j(), this.tunes = new j();
  }
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api,
      config: this.settings
    });
  }
  get isReadOnlySupported() {
    return this.constructable[pe.IsReadOnlySupported] === true;
  }
  get isLineBreaksEnabled() {
    return this.constructable[pe.IsEnabledLineBreaks];
  }
  get toolbox() {
    const e = this.constructable[pe.Toolbox],
      t = this.config[Pe.Toolbox];
    if (!V(e) && t !== false) return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
      const s = e[i];
      return s ? {
        ...s,
        ...o
      } : o;
    }) : [t] : Array.isArray(t) ? t : [{
      ...e,
      ...t
    }] : Array.isArray(e) ? e : [e];
  }
  get conversionConfig() {
    return this.constructable[pe.ConversionConfig];
  }
  get enabledInlineTools() {
    return this.config[Pe.EnabledInlineTools] || false;
  }
  get enabledBlockTunes() {
    return this.config[Pe.EnabledBlockTunes];
  }
  get pasteConfig() {
    return this.constructable[pe.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig,
      t = this.baseSanitizeConfig;
    if (V(e)) return t;
    const o = {};
    for (const i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = e[i];
      D(s) ? o[i] = Object.assign({}, t, s) : o[i] = s;
    }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach(t => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach(t => Object.assign(e, t.sanitizeConfig)), e;
  }
};
Hn([me], vo.prototype, "sanitizeConfig", 1);
Hn([me], vo.prototype, "baseSanitizeConfig", 1);
var xa = class {
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  get(e) {
    const {
        class: t,
        isInternal: o = false,
        ...i
      } = this.config[e],
      s = this.getConstructor(t),
      r = t[mt.IsTune];
    return new s({
      name: e,
      constructable: t,
      config: i,
      api: this.api.getMethodsForTool(e, r),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  getConstructor(e) {
    switch (true) {
      case e[We.IsInline]:
        return ka;
      case e[mt.IsTune]:
        return ya;
      default:
        return vo;
    }
  }
};
var $n = class {
  constructor({
    api: e
  }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  render() {
    return {
      icon: Xi,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(),
      t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t) throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder,
      i = o.getBoundingClientRect();
    let s = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (s = window.scrollY + o.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(true);
  }
};
$n.isTune = true;
var zn = class {
  constructor({
    api: e
  }) {
    this.api = e;
  }
  render() {
    return {
      icon: Gi,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  handleClick() {
    this.api.blocks.delete();
  }
};
zn.isTune = true;
var Un = class {
  constructor({
    api: e
  }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  render() {
    return {
      icon: Zi,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(),
      t = this.api.blocks.getBlockByIndex(e),
      o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o) throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder,
      s = o.holder,
      r = i.getBoundingClientRect(),
      a = s.getBoundingClientRect();
    let l;
    a.top > 0 ? l = Math.abs(r.top) - Math.abs(a.top) : l = Math.abs(r.top) + a.height, window.scrollBy(0, -1 * l), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(true);
  }
};
Un.isTune = true;
var Ba = Object.defineProperty,
  Ca = Object.getOwnPropertyDescriptor,
  Ta = (n, e, t, o) => {
    for (var i = o > 1 ? void 0 : o ? Ca(e, t) : e, s = n.length - 1, r; s >= 0; s--) (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
    return o && i && Ba(e, t, i), i;
  };
var Wn = class extends E {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new j(), this.toolsUnavailable = new j();
  }
  get available() {
    return this.toolsAvailable;
  }
  get unavailable() {
    return this.toolsUnavailable;
  }
  get inlineTools() {
    return this.available.inlineTools;
  }
  get blockTools() {
    return this.available.blockTools;
  }
  get blockTunes() {
    return this.available.blockTunes;
  }
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  get internal() {
    return this.available.internalTools;
  }
  async prepare() {
    if (this.validateTools(), this.config.tools = ut({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0) throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new xa(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0) return Promise.resolve();
    await Qn(t, o => {
      this.toolPrepareMethodSuccess(o);
    }, o => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach(t => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  destroy() {
    Object.values(this.available).forEach(async e => {
      A(e.reset) && (await e.reset());
    });
  }
  get internalTools() {
    return {
      convertTo: {
        class: Fn,
        isInternal: true
      },
      link: {
        class: bo,
        isInternal: true
      },
      bold: {
        class: go,
        isInternal: true
      },
      italic: {
        class: mo,
        isInternal: true
      },
      paragraph: {
        class: fo,
        inlineToolbar: true,
        isInternal: true
      },
      stub: {
        class: jn,
        isInternal: true
      },
      moveUp: {
        class: Un,
        isInternal: true
      },
      delete: {
        class: zn,
        isInternal: true
      },
      moveDown: {
        class: $n,
        isInternal: true
      }
    };
  }
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const i = ["render"].filter(s => !t.create()[s]);
      if (i.length) {
        S(`Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`, "warn", i), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        function: A(i.class.prepare) ? i.class.prepare : () => {},
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach(e => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== false) {
      if (e.enabledInlineTools === true) {
        e.inlineTools = new j(Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map(t => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries()));
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new j(["convertTo", ...e.enabledInlineTools].map(t => [t, this.inlineTools.get(t)])));
    }
  }
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== false) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new j(e.enabledBlockTunes.map(o => [o, this.blockTunes.get(o)]));
        e.tunes = new j([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new j(this.config.tunes.map(o => [o, this.blockTunes.get(o)]));
        e.tunes = new j([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  validateTools() {
    for (const e in this.config.tools) if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
      if (e in this.internalTools) return;
      const t = this.config.tools[e];
      if (!A(t) && !A(t.class)) throw Error(`Tool \xAB${e}\xBB must be a constructor function or an object with function in the \xABclass\xBB property`);
    }
  }
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools) D(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = {
      class: this.config.tools[t]
    };
    return e;
  }
};
Ta([me], Wn.prototype, "getAllInlineToolsSanitizeConfig", 1);
var Sa = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
var Ia = class extends E {
  constructor() {
    super(...arguments), this.isMobile = false, this.contentRectCache = null, this.resizeDebouncer = Eo(() => {
      this.windowResize();
    }, 200), this.selectionChangeDebounced = Eo(() => {
      this.selectionChanged();
    }, da), this.documentTouchedListener = e => {
      this.documentTouched(e);
    };
  }
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  get contentRect() {
    if (this.contentRectCache !== null) return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${R.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  toggleReadOnly(e) {
    e ? this.unbindReadOnlySensitiveListeners() : window.requestIdleCallback(() => {
      this.bindReadOnlySensitiveListeners();
    }, {
      timeout: 2e3
    });
  }
  checkEmptiness() {
    const {
      BlockManager: e
    } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  get someToolbarOpened() {
    const {
      Toolbar: e,
      BlockSettings: t,
      InlineToolbar: o
    } = this.Editor;
    return !!(t.opened || o.opened || e.toolbox.opened);
  }
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? true : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof ce).some(([e, t]) => t.flipper.hasFocus());
  }
  destroy() {
    this.nodes.holder.innerHTML = "", this.unbindReadOnlyInsensitiveListeners();
  }
  closeAllToolbars() {
    const {
      Toolbar: e,
      BlockSettings: t,
      InlineToolbar: o
    } = this.Editor;
    t.close(), o.close(), e.toolbox.close();
  }
  setIsMobile() {
    const e = window.innerWidth < Ro;
    e !== this.isMobile && this.eventsDispatcher.emit(Te, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  make() {
    this.nodes.holder = u.getHolder(this.config.holder), this.nodes.wrapper = u.make("div", [this.CSS.editorWrapper, ...(this.isRtl ? [this.CSS.editorRtlFix] : [])]), this.nodes.redactor = u.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper), this.bindReadOnlyInsensitiveListeners();
  }
  loadStyles() {
    const e = "editor-js-styles";
    if (u.get(e)) return;
    const t = u.make("style", null, {
      id: e,
      textContent: Sa.toString()
    });
    this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), u.prepend(document.head, t);
  }
  bindReadOnlyInsensitiveListeners() {
    this.listeners.on(document, "selectionchange", this.selectionChangeDebounced), this.listeners.on(window, "resize", this.resizeDebouncer, {
      passive: true
    }), this.listeners.on(this.nodes.redactor, "mousedown", this.documentTouchedListener, {
      capture: true,
      passive: true
    }), this.listeners.on(this.nodes.redactor, "touchstart", this.documentTouchedListener, {
      capture: true,
      passive: true
    });
  }
  unbindReadOnlyInsensitiveListeners() {
    this.listeners.off(document, "selectionchange", this.selectionChangeDebounced), this.listeners.off(window, "resize", this.resizeDebouncer), this.listeners.off(this.nodes.redactor, "mousedown", this.documentTouchedListener), this.listeners.off(this.nodes.redactor, "touchstart", this.documentTouchedListener);
  }
  bindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", e => {
      this.redactorClicked(e);
    }, false), this.readOnlyMutableListeners.on(document, "keydown", e => {
      this.documentKeydown(e);
    }, true), this.readOnlyMutableListeners.on(document, "mousedown", e => {
      this.documentClicked(e);
    }, true), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", dt(t => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(ln, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: true
    });
  }
  unbindReadOnlySensitiveListeners() {
    this.readOnlyMutableListeners.clearAll();
  }
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  documentKeydown(e) {
    switch (e.keyCode) {
      case y.ENTER:
        this.enterPressed(e);
        break;
      case y.BACKSPACE:
      case y.DELETE:
        this.backspacePressed(e);
        break;
      case y.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  defaultBehaviour(e) {
    const {
        currentBlock: t
      } = this.Editor.BlockManager,
      o = e.target.closest(`.${this.CSS.editorWrapper}`),
      i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  backspacePressed(e) {
    const {
      BlockManager: t,
      BlockSelection: o,
      Caret: i
    } = this.Editor;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      const s = t.removeSelectedBlocks(),
        r = t.insertDefaultBlockAtIndex(s, true);
      i.setToBlock(r, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  enterPressed(e) {
    const {
      BlockManager: t,
      BlockSelection: o
    } = this.Editor;
    if (this.someToolbarOpened) return;
    const i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const s = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  documentClicked(e) {
    var a, l;
    if (!e.isTrusted) return;
    const t = e.target;
    this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const i = (a = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : a.contains(t),
      s = (l = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : l.contains(t),
      r = i || s;
    if (this.Editor.BlockSettings.opened && !r) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX,
        i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.ReadOnly.isEnabled || this.Editor.Toolbar.moveAndOpen();
  }
  redactorClicked(e) {
    if (!b.isCollapsed) return;
    const t = e.target,
      o = e.metaKey || e.ctrlKey;
    if (u.isAnchor(t) && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const i = t.getAttribute("href"),
        s = oi(i);
      ii(s);
      return;
    }
    this.processBottomZoneClick(e);
  }
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1),
      o = u.offset(t.holder).bottom,
      i = e.pageY,
      {
        BlockSelection: s
      } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && !s.anyBlockSelected && o < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const {
        BlockManager: a,
        Caret: l,
        Toolbar: c
      } = this.Editor;
      (!a.lastBlock.tool.isDefault || !a.lastBlock.isEmpty) && a.insertAtEnd(), l.setToTheLastBlock(), c.moveAndOpen(a.lastBlock);
    }
  }
  selectionChanged() {
    const {
        CrossBlockSelection: e,
        BlockSelection: t
      } = this.Editor,
      o = b.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o) {
      b.range || this.Editor.InlineToolbar.close();
      return;
    }
    const i = o.closest(`.${R.CSS.content}`);
    (i === null || i.closest(`.${b.CSS.editorWrapper}`) !== this.nodes.wrapper) && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o), this.Editor.InlineToolbar.tryToShow(true));
  }
  enableInputsEmptyMark() {
    function e(t) {
      const o = t.target;
      Do(o);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
};
var Oa = {
  BlocksAPI: gi,
  CaretAPI: bi,
  EventsAPI: vi,
  I18nAPI: kt,
  API: ki,
  InlineToolbarAPI: yi,
  ListenersAPI: wi,
  NotifierAPI: Ci,
  ReadOnlyAPI: Ti,
  SanitizerAPI: Li,
  SaverAPI: Pi,
  SelectionAPI: Ni,
  ToolsAPI: Ri,
  StylesAPI: Di,
  ToolbarAPI: Fi,
  TooltipAPI: Ui,
  UiAPI: Wi,
  BlockSettings: ms,
  Toolbar: Bs,
  InlineToolbar: Cs,
  BlockEvents: na,
  BlockManager: ra,
  BlockSelection: aa,
  Caret: Ye,
  CrossBlockSelection: la,
  DragNDrop: ca,
  ModificationsObserver: ha,
  Paste: pa,
  ReadOnly: fa,
  RectangleSelection: Be,
  Renderer: ga,
  Saver: ma,
  Tools: Wn,
  UI: Ia
};
var _a = class {
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Oe();
    let t, o;
    this.isReady = new Promise((i, s) => {
      t = i, o = s;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const {
        BlockManager: i,
        Caret: s,
        UI: r,
        ModificationsObserver: a
      } = this.moduleInstances;
      r.checkEmptiness(), a.enable(), this.configuration.autofocus === true && this.configuration.readOnly !== true && s.setToBlock(i.blocks[0], s.positions.START), t();
    }).catch(i => {
      S(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  set configuration(e) {
    var o, i;
    D(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, ht(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = Lo.VERBOSE), Zn(this.config.logLevel), ht(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || false, this.config.sanitizer = this.config.sanitizer || {
      p: true,
      b: true,
      a: true
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : false, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || {
      blocks: []
    }, this.config.onReady = this.config.onReady || (() => {}), this.config.onChange = this.config.onChange || (() => {}), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : true, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = {
      blocks: [t]
    }), this.config.readOnly = this.config.readOnly || false, (o = this.config.i18n) != null && o.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  get configuration() {
    return this.config;
  }
  validate() {
    const {
      holderId: e,
      holder: t
    } = this.config;
    if (e && t) throw Error("\xABholderId\xBB and \xABholder\xBB param can't assign at the same time.");
    if (te(t) && !u.get(t)) throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
    if (t && D(t) && !u.isElement(t)) throw Error("\xABholder\xBB value must be an Element node");
  }
  init() {
    this.constructModules(), this.configureModules();
  }
  async start() {
    await ["Tools", "UI", "BlockManager", "Paste", "BlockSelection", "RectangleSelection", "CrossBlockSelection", "ReadOnly"].reduce((t, o) => t.then(async () => {
      try {
        await this.moduleInstances[o].prepare();
      } catch (i) {
        if (i instanceof Ho) throw new Error(i.message);
        S(`Module ${o} was skipped because of %o`, "warn", i);
      }
    }), Promise.resolve());
  }
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  constructModules() {
    Object.entries(Oa).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        S("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  configureModules() {
    for (const e in this.moduleInstances) Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances) o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
};
var Aa = class {
  static get version() {
    return "2.31.0";
  }
  constructor(e) {
    let t = () => {};
    D(e) && A(e.onReady) && (t = e.onReady);
    const o = new _a(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  exportAPI(e) {
    const t = ["configuration"],
      o = () => {
        Object.values(e.moduleInstances).forEach(s => {
          A(s.destroy) && s.destroy(), s.listeners.removeAll();
        }), zi(), e = null;
        for (const s in this) Object.prototype.hasOwnProperty.call(this, s) && delete this[s];
        Object.setPrototypeOf(this, null);
      };
    t.forEach(s => {
      this[s] = e[s];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([s, r]) => {
      Object.entries(r).forEach(([a, l]) => {
        this[l] = e.moduleInstances.API.methods[s][a];
      });
    });
  }
};

// .beyond/uimport/temp/@editorjs/editorjs.2.31.0.js
var editorjs_2_31_0_default = Aa;
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BlZGl0b3Jqcy9lZGl0b3Jqcy4yLjMxLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGVkaXRvcmpzL2VkaXRvcmpzL2Rpc3QvZWRpdG9yanMubWpzIl0sIm5hbWVzIjpbImVkaXRvcmpzXzJfMzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwiZWRpdG9yanNfMl8zMV8wX2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZG9jdW1lbnQiLCJlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwidCIsImNvbnNvbGUiLCJlcnJvciIsIkNlIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsImdsb2JhbCIsInNlbGYiLCJLZSIsIm4iLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiWG4iLCJvIiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwia2V5cyIsImZvckVhY2giLCJpIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwiZW51bWVyYWJsZSIsIm90IiwiYXNzaWduIiwicmVnaXN0ZXIiLCJyZXZlcnQiLCJFbGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm93bmVyRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaXRlbSIsImNsb3Nlc3QiLCJkb2N1bWVudEVsZW1lbnQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwicHJlcGVuZCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJOb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNjcm9sbEludG9WaWV3SWZOZWVkZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicyIsIm9mZnNldFRvcCIsInNjcm9sbFRvcCIsInIiLCJjbGllbnRIZWlnaHQiLCJhIiwib2Zmc2V0TGVmdCIsInNjcm9sbExlZnQiLCJsIiwiY2xpZW50V2lkdGgiLCJjIiwic2Nyb2xsSW50b1ZpZXciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJWbiIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJyZWR1Y2UiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiTG8iLCJWRVJCT1NFIiwiSU5GTyIsIldBUk4iLCJFUlJPUiIsInkiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiRE9XTiIsIlJJR0hUIiwiREVMRVRFIiwiTUVUQSIsIlNMQVNIIiwicW4iLCJXSEVFTCIsIkJBQ0tXQVJEIiwiRk9SV0FSRCIsIkllIiwiaW5jbHVkZXMiLCJsb2dMZXZlbCIsInB1c2giLCJ1bnNoaWZ0IiwiWm4iLCJTIiwiYmluZCIsIlgiLCJsZSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJBIiwiRCIsInRlIiwiR24iLCJ5byIsIndvIiwiViIsIlBvIiwiUW4iLCJmdW5jdGlvbiIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsIk5vIiwic2xpY2UiLCJGZSIsIkpuIiwibmFtZSIsInNwbGl0IiwicG9wIiwiZWkiLCJ0ZXN0IiwiRW8iLCJkdCIsImxlYWRpbmciLCJkIiwidHJhaWxpbmciLCJ0aSIsIndpbiIsIm1hYyIsIngxMSIsImxpbnV4IiwiZmluZCIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJpbmRleE9mIiwiamUiLCJ1dCIsInNoaWZ0IiwidnQiLCJyZXBsYWNlIiwib2kiLCJVUkwiLCJocmVmIiwic3Vic3RyaW5nIiwibG9jYXRpb24iLCJwcm90b2NvbCIsIm9yaWdpbiIsIm5pIiwiaWkiLCJvcGVuIiwic2kiLCJmbG9vciIsInJhbmRvbSIsImh0IiwibWUiLCJzZXQiLCJSbyIsImJlIiwibWF0Y2hNZWRpYSIsInB0IiwicGxhdGZvcm0iLCJtYXhUb3VjaFBvaW50cyIsInJpIiwiSlNPTiIsInN0cmluZ2lmeSIsInUiLCJpc1NpbmdsZVRhZyIsInRhZ05hbWUiLCJpc0xpbmVCcmVha1RhZyIsIm1ha2UiLCJmaWx0ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0IiwiYXBwZW5kIiwicmV2ZXJzZSIsInN3YXAiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsImZpbmRBbGwiLCJhbGxJbnB1dHNTZWxlY3RvciIsIm1hcCIsImpvaW4iLCJmaW5kQWxsSW5wdXRzIiwiaXNOYXRpdmVJbnB1dCIsImNvbnRhaW5zT25seUlubGluZUVsZW1lbnRzIiwiZ2V0RGVlcGVzdEJsb2NrRWxlbWVudHMiLCJnZXREZWVwZXN0Tm9kZSIsIm5vZGVUeXBlIiwiRUxFTUVOVF9OT0RFIiwiaXNFbGVtZW50IiwiaXNGcmFnbWVudCIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImNvbnRlbnRFZGl0YWJsZSIsImNhblNldENhcmV0IiwidHlwZSIsImlzTm9kZUVtcHR5IiwidGV4dENvbnRlbnQiLCJSZWdFeHAiLCJpc0xlYWYiLCJjaGlsZE5vZGVzIiwiaXNFbXB0eSIsImZyb20iLCJpc0hUTUxTdHJpbmciLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsImdldENvbnRlbnRMZW5ndGgiLCJURVhUX05PREUiLCJibG9ja0VsZW1lbnRzIiwiY2hpbGRyZW4iLCJldmVyeSIsImdldEhvbGRlciIsImlzQW5jaG9yIiwib2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJoZWlnaHQiLCJyaWdodCIsIndpZHRoIiwiZ2V0Tm9kZUJ5T2Zmc2V0IiwiY3JlYXRlVHJlZVdhbGtlciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJuZXh0Tm9kZSIsIm5vZGUiLCJtaW4iLCJhaSIsImxpIiwicGFyc2VGbG9hdCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3BXaWR0aCIsIm1hcmdpblRvcCIsIkRvIiwiZGF0YXNldCIsImVtcHR5IiwiY2kiLCJibG9ja1R1bmVzIiwidG9nZ2xlciIsImlubGluZVRvb2xiYXIiLCJjb252ZXJ0ZXIiLCJ0b29sYmFyIiwidG9vbGJveCIsIkFkZCIsInBvcG92ZXIiLCJGaWx0ZXIiLCJkaSIsIlRleHQiLCJMaW5rIiwiQm9sZCIsIkl0YWxpYyIsInVpIiwibGluayIsInN0dWIiLCJoaSIsImRlbGV0ZSIsIkRlbGV0ZSIsIm1vdmVVcCIsIm1vdmVEb3duIiwiRm8iLCJ0b29sTmFtZXMiLCJ0b29scyIsImpvIiwiaGUiLCJfdCIsInNldERpY3Rpb25hcnkiLCJjdXJyZW50RGljdGlvbmFyeSIsImdldE5hbWVzcGFjZSIsInoiLCJIbyIsIkVycm9yIiwiT2UiLCJzdWJzY3JpYmVycyIsIm9uIiwib25jZSIsInNwbGljZSIsImVtaXQiLCJvZmYiLCJ3YXJuIiwiZGVzdHJveSIsIkoiLCJzZXRQcm90b3R5cGVPZiIsImlkIiwiY29uZmlnIiwiaG9sZGVyIiwic2VsZWN0ZWQiLCJzdHJldGNoZWQiLCJmb2N1c2FibGUiLCJzYXZlIiwidmFsaWRhdGUiLCJkaXNwYXRjaENoYW5nZSIsImdldEFjdGl2ZVRvb2xib3hFbnRyeSIsIl9lIiwiYWxsTGlzdGVuZXJzIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJvcHRpb25zIiwiZmluZE9uZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2ZmQnlJZCIsImZpbmRCeUlkIiwiZmluZEJ5RXZlbnRUYXJnZXQiLCJyZW1vdmVBbGwiLCJmaW5kQnlUeXBlIiwiZmluZEJ5SGFuZGxlciIsIkUiLCJldmVudHNEaXNwYXRjaGVyIiwibm9kZXMiLCJsaXN0ZW5lcnMiLCJyZWFkT25seU11dGFibGVMaXN0ZW5lcnMiLCJtdXRhYmxlTGlzdGVuZXJJZHMiLCJjbGVhckFsbCIsIm5ldyIsInRhcmdldCIsIlR5cGVFcnJvciIsInN0YXRlIiwiRWRpdG9yIiwicmVtb3ZlQWxsTm9kZXMiLCJIVE1MRWxlbWVudCIsInJlbW92ZSIsImlzUnRsIiwiaTE4biIsImRpcmVjdGlvbiIsImIiLCJpbnN0YW5jZSIsInNlbGVjdGlvbiIsInNhdmVkU2VsZWN0aW9uUmFuZ2UiLCJpc0Zha2VCYWNrZ3JvdW5kRW5hYmxlZCIsImNvbW1hbmRCYWNrZ3JvdW5kIiwiY29tbWFuZFJlbW92ZUZvcm1hdCIsIkNTUyIsImVkaXRvcldyYXBwZXIiLCJlZGl0b3Jab25lIiwiYW5jaG9yTm9kZSIsImdldFNlbGVjdGlvbiIsImFuY2hvckVsZW1lbnQiLCJhbmNob3JPZmZzZXQiLCJpc0NvbGxhcHNlZCIsImlzQXRFZGl0b3IiLCJpc1NlbGVjdGlvbkF0RWRpdG9yIiwiZm9jdXNOb2RlIiwiaXNSYW5nZUF0RWRpdG9yIiwic3RhcnRDb250YWluZXIiLCJpc1NlbGVjdGlvbkV4aXN0cyIsInJhbmdlIiwiZ2V0UmFuZ2VGcm9tU2VsZWN0aW9uIiwicmFuZ2VDb3VudCIsImdldFJhbmdlQXQiLCJyZWN0IiwieCIsImNyZWF0ZVJhbmdlIiwiYm91bmRpbmdMZWZ0IiwiYm91bmRpbmdUb3AiLCJib3VuZGluZ1dpZHRoIiwiYm91bmRpbmdIZWlnaHQiLCJpc05hTiIsImNsb25lUmFuZ2UiLCJpbnNlcnROb2RlIiwibm9ybWFsaXplIiwic2V0Q3Vyc29yIiwiZm9jdXMiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsInNldFN0YXJ0Iiwic2V0RW5kIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJpc1JhbmdlSW5zaWRlQ29udGFpbmVyIiwiYWRkRmFrZUN1cnNvciIsIm11dGF0aW9uRnJlZSIsImNvbGxhcHNlIiwiaXNGYWtlQ3Vyc29ySW5zaWRlQ29udGFpbmVyIiwicmVtb3ZlRmFrZUN1cnNvciIsImJvZHkiLCJyZW1vdmVGYWtlQmFja2dyb3VuZCIsImV4ZWNDb21tYW5kIiwic2V0RmFrZUJhY2tncm91bmQiLCJyZXN0b3JlIiwiY2xlYXJTYXZlZCIsImNvbGxhcHNlVG9FbmQiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJmaW5kUGFyZW50VGFnIiwiZXhwYW5kVG9UYWciLCJwaSIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJhdHRyaWJ1dGVOYW1lIiwic29tZSIsImZ0IiwiJG8iLCJ6byIsIlVvIiwiVGUiLCJndCIsImNvbnZlcnNpb25Db25maWciLCJIZSIsInRvb2wiLCJXbyIsImVudHJpZXMiLCJZbyIsImljb24iLCJ4byIsIm1lcmdlYWJsZSIsImZpIiwiZXhwb3J0IiwiQm8iLCJpbXBvcnQiLCJfIiwiRGVmYXVsdCIsIlNlcGFyYXRvciIsIkh0bWwiLCJlZSIsIkFQUEVORF9DQUxMQkFDSyIsIlJFTkRFUkVEIiwiTU9WRUQiLCJVUERBVEVEIiwiUkVNT1ZFRCIsIk9OX1BBU1RFIiwiUiIsInJlYWRPbmx5IiwidHVuZXNEYXRhIiwiY2FjaGVkSW5wdXRzIiwidG9vbFJlbmRlcmVkRWxlbWVudCIsInR1bmVzSW5zdGFuY2VzIiwiTWFwIiwiZGVmYXVsdFR1bmVzSW5zdGFuY2VzIiwidW5hdmFpbGFibGVUdW5lc0RhdGEiLCJpbnB1dEluZGV4IiwiZWRpdG9yRXZlbnRCdXMiLCJoYW5kbGVGb2N1cyIsImRyb3BJbnB1dHNDYWNoZSIsInVwZGF0ZUN1cnJlbnRJbnB1dCIsImRpZE11dGF0ZWQiLCJJbnB1dEV2ZW50IiwiZGV0ZWN0VG9vbFJvb3RDaGFuZ2UiLCJwIiwiZyIsImYiLCJ2IiwiVCIsInRvZ2dsZUlucHV0c0VtcHR5TWFyayIsInNldHRpbmdzIiwiYmxvY2tBUEkiLCJ0b29sSW5zdGFuY2UiLCJjcmVhdGUiLCJ0dW5lcyIsImNvbXBvc2VUdW5lcyIsImNvbXBvc2UiLCJ3YXRjaEJsb2NrTXV0YXRpb25zIiwiYWRkSW5wdXRFdmVudHMiLCJ3cmFwcGVyIiwid3JhcHBlclN0cmV0Y2hlZCIsImNvbnRlbnQiLCJkcm9wVGFyZ2V0IiwiaW5wdXRzIiwiY3VycmVudElucHV0IiwiZmluZEluZGV4IiwiZmlyc3RJbnB1dCIsImxhc3RJbnB1dCIsIm5leHRJbnB1dCIsInByZXZpb3VzSW5wdXQiLCJ0aGVuIiwic2FuaXRpemUiLCJzYW5pdGl6ZUNvbmZpZyIsIm1lcmdlIiwicGx1Z2luc0NvbnRlbnQiLCJoYXNNZWRpYSIsInRvZ2dsZSIsIm1lc3NhZ2UiLCJtZXJnZVdpdGgiLCJwZXJmb3JtYW5jZSIsInRpbWUiLCJjYXRjaCIsIkZ1bmN0aW9uIiwiZ2V0VHVuZXMiLCJyZW5kZXJTZXR0aW5ncyIsInZhbHVlcyIsInJlbmRlciIsInRvb2xUdW5lcyIsImNvbW1vblR1bmVzIiwiYWN0aXZlRWxlbWVudCIsInVud2F0Y2hCbG9ja011dGF0aW9ucyIsInJlbW92ZUlucHV0RXZlbnRzIiwiZXhwb3J0RGF0YUFzU3RyaW5nIiwid3JhcCIsImlzSW50ZXJuYWwiLCJoYXMiLCJyZWRhY3RvckRvbUNoYW5nZWRDYWxsYmFjayIsIm11dGF0aW9ucyIsImdpIiwiaW5zZXJ0IiwiZGVmYXVsdEJsb2NrIiwiQmxvY2tNYW5hZ2VyIiwiaW5kZXgiLCJuZWVkVG9Gb2N1cyIsImNvbXBvc2VCbG9ja0RhdGEiLCJUb29scyIsImJsb2NrVG9vbHMiLCJhcGkiLCJBUEkiLCJ1cGRhdGUiLCJnZXRCbG9ja0J5SWQiLCJjb252ZXJ0IiwiaCIsIkJvb2xlYW4iLCJpbnNlcnRNYW55IiwiYmxvY2tzIiwidmFsaWRhdGVJbmRleCIsImNvbXBvc2VCbG9jayIsIm1ldGhvZHMiLCJjbGVhciIsInJlbmRlckZyb21IVE1MIiwibW92ZSIsImdldEJsb2NrQnlJbmRleCIsImdldEJ5SWQiLCJnZXRDdXJyZW50QmxvY2tJbmRleCIsImdldEJsb2NrSW5kZXgiLCJnZXRCbG9ja3NDb3VudCIsImdldEJsb2NrQnlFbGVtZW50Iiwic3RyZXRjaEJsb2NrIiwiaW5zZXJ0TmV3QmxvY2siLCJjdXJyZW50QmxvY2tJbmRleCIsImdldEJsb2NrIiwicmVtb3ZlQmxvY2siLCJjdXJyZW50QmxvY2siLCJDYXJldCIsInNldFRvQmxvY2siLCJwb3NpdGlvbnMiLCJFTkQiLCJUb29sYmFyIiwiY2xvc2UiLCJJbmxpbmVUb29sYmFyIiwiTW9kaWZpY2F0aW9uc09ic2VydmVyIiwiZGlzYWJsZSIsIlJlbmRlcmVyIiwiZW5hYmxlIiwiUGFzdGUiLCJwcm9jZXNzVGV4dCIsIm1pIiwiYmkiLCJzZXRUb0ZpcnN0QmxvY2siLCJERUZBVUxUIiwiZmlyc3RCbG9jayIsInNldFRvTGFzdEJsb2NrIiwibGFzdEJsb2NrIiwic2V0VG9QcmV2aW91c0Jsb2NrIiwicHJldmlvdXNCbG9jayIsInNldFRvTmV4dEJsb2NrIiwibmV4dEJsb2NrIiwiU1RBUlQiLCJ2aSIsImt0IiwiZ2V0TWV0aG9kc0ZvclRvb2wiLCJraSIsIkJsb2Nrc0FQSSIsImNhcmV0IiwiQ2FyZXRBUEkiLCJUb29sc0FQSSIsImV2ZW50cyIsIkV2ZW50c0FQSSIsIkxpc3RlbmVyc0FQSSIsIm5vdGlmaWVyIiwiTm90aWZpZXJBUEkiLCJzYW5pdGl6ZXIiLCJTYW5pdGl6ZXJBUEkiLCJzYXZlciIsIlNhdmVyQVBJIiwiU2VsZWN0aW9uQVBJIiwic3R5bGVzIiwiU3R5bGVzQVBJIiwiY2xhc3NlcyIsIlRvb2xiYXJBUEkiLCJJbmxpbmVUb29sYmFyQVBJIiwidG9vbHRpcCIsIlRvb2x0aXBBUEkiLCJJMThuQVBJIiwiUmVhZE9ubHlBUEkiLCJVaUFQSSIsInlpIiwidHJ5VG9TaG93Iiwid2kiLCJLbyIsIm0iLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInNob3ciLCJnZXRXcmFwcGVyIiwiY29uZmlybSIsInByb21wdCIsImFsZXJ0IiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsImxvY2FscyIsImJ0b2EiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNvdXJjZXMiLCJzb3VyY2VSb290IiwiY29uY2F0IiwiYWxsIiwiYXRvYiIsImsiLCJ3IiwiSSIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwicmVmcyIsIkMiLCJwYXJ0cyIsIkYiLCJOIiwiYmFzZSIsIkIiLCJjc3MiLCJtZWRpYSIsInNvdXJjZU1hcCIsIk8iLCJpbnNlcnRBdCIsIm5leHRTaWJsaW5nIiwiYmVmb3JlIiwiTSIsImF0dHJzIiwicSIsInNldEF0dHJpYnV0ZSIsInNpbmdsZXRvbiIsImllIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiQmxvYiIsIlciLCJyZWwiLCJ2ZSIsInNlIiwidHQiLCJZbiIsImNvbnZlcnRUb0Fic29sdXRlVXJscyIsIktuIiwia28iLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsIkRFQlVHIiwiSCIsIlEiLCJob3N0IiwicGF0aG5hbWUiLCJ0cmltIiwic3R5bGUiLCJjYW5jZWxIYW5kbGVyIiwib2tIYW5kbGVyIiwib2tUZXh0IiwiY2FuY2VsVGV4dCIsInBsYWNlaG9sZGVyIiwiaW5wdXRUeXBlIiwiRWkiLCJ4aSIsIkJpIiwiQ2kiLCJUaSIsImlzRW5hYmxlZCIsIlJlYWRPbmx5IiwiWG8iLCJ0YWdzIiwibm9kZU5hbWUiLCJjbGVhbiIsImltcGxlbWVudGF0aW9uIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiX3Nhbml0aXplIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsIkNPTU1FTlRfTk9ERSIsImtlZXBOZXN0ZWRCbG9ja0VsZW1lbnRzIiwiYXR0cmlidXRlcyIsInJlbW92ZUF0dHJpYnV0ZSIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfQ09NTUVOVCIsIlNpIiwiSWkiLCJ5dCIsInd0IiwiWiIsIk9pIiwiX2kiLCJNaSIsIkFpIiwiTGkiLCJQaSIsInJlamVjdCIsIlNhdmVyIiwiTmkiLCJzZWxlY3Rpb25VdGlscyIsIlJpIiwiZ2V0QmxvY2tUb29scyIsIkRpIiwiYmxvY2siLCJpbmxpbmVUb29sQnV0dG9uIiwiaW5saW5lVG9vbEJ1dHRvbkFjdGl2ZSIsImlucHV0IiwibG9hZGVyIiwiYnV0dG9uIiwic2V0dGluZ3NCdXR0b24iLCJzZXR0aW5nc0J1dHRvbkFjdGl2ZSIsIkZpIiwidG9nZ2xlQmxvY2tTZXR0aW5ncyIsInRvZ2dsZVRvb2xib3giLCJtb3ZlQW5kT3BlbiIsIkJsb2NrU2V0dGluZ3MiLCJvcGVuZWQiLCJWbyIsInNob3dlZCIsIm9mZnNldFJpZ2h0IiwiaGlkaW5nRGVsYXkiLCJoYW5kbGVXaW5kb3dTY3JvbGwiLCJoaWRlIiwibG9hZFN0eWxlcyIsInByZXBhcmUiLCJwYXNzaXZlIiwidG9vbHRpcENvbnRlbnQiLCJ0b29sdGlwU2hvd24iLCJwbGFjZW1lbnQiLCJoaWRpbmdUaW1lb3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwiZGVsYXkiLCJwbGFjZVRvcCIsInBsYWNlTGVmdCIsInBsYWNlUmlnaHQiLCJwbGFjZUJvdHRvbSIsInNob3dpbmdUaW1lb3V0Iiwib25Ib3ZlciIsIm9mZnNldFdpZHRoIiwiYXBwbHlQbGFjZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJqaSIsIkhpIiwiVSIsIkV0IiwiJGkiLCIkZSIsInplIiwiemkiLCJVaSIsIldpIiwiZWRpdG9yTm9kZXMiLCJVSSIsInJlZGFjdG9yIiwicW8iLCJLIiwiWWkiLCJabyIsIkVlIiwiY3Vyc29yIiwiaXRlbXMiLCJmb2N1c2VkQ3NzQ2xhc3MiLCJjdXJyZW50SXRlbSIsImRyb3BDdXJzb3IiLCJzZXRJdGVtcyIsIm5leHQiLCJsZWFmTm9kZXNBbmRSZXR1cm5JbmRleCIsImRpcmVjdGlvbnMiLCJwcmV2aW91cyIsImtlIiwiY2UiLCJpdGVyYXRvciIsImFjdGl2YXRlZCIsImZsaXBDYWxsYmFja3MiLCJvbktleURvd24iLCJpc0V2ZW50UmVhZHlGb3JIYW5kbGluZyIsInNoaWZ0S2V5IiwidXNlZEtleXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVUYWJQcmVzcyIsImZsaXBMZWZ0IiwiZmxpcFJpZ2h0IiwiaGFuZGxlRW50ZXJQcmVzcyIsImZvY3VzZWRJdGVtQ2xhc3MiLCJhY3RpdmF0ZUNhbGxiYWNrIiwiYWxsb3dlZEtleXMiLCJpc0FjdGl2YXRlZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImZvY3VzRmlyc3QiLCJmbGlwQ2FsbGJhY2siLCJoYXNGb2N1cyIsIm9uRmxpcCIsInJlbW92ZU9uRmxpcCIsInN0b3BQcm9wYWdhdGlvbiIsImNsaWNrIiwiS2kiLCJYaSIsIlZpIiwicWkiLCJaaSIsIkdpIiwiUWkiLCJKaSIsIkNvIiwiZXMiLCJ0cyIsIkdvIiwib3MiLCJucyIsImlzIiwic3MiLCJycyIsIm5lIiwieWUiLCJ3ZSIsInJvb3QiLCJhbGlnbmVkU3RhcnQiLCJhbGlnbmVkQ2VudGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFzIiwiYWxpZ25tZW50IiwiZ2V0RWxlbWVudCIsInh0IiwicGFyYW1zIiwib25DaGlsZHJlbk9wZW4iLCJvbk9wZW4iLCJvbkNoaWxkcmVuQ2xvc2UiLCJvbkNsb3NlIiwiaGFuZGxlQ2xpY2siLCJvbkFjdGl2YXRlIiwiYWRkSGludCIsInBvc2l0aW9uIiwiaGFzQ2hpbGRyZW4iLCJpc0NoaWxkcmVuT3BlbiIsImlzT3BlbiIsImlzQ2hpbGRyZW5GbGlwcGFibGUiLCJpc0ZsaXBwYWJsZSIsImlzQ2hpbGRyZW5TZWFyY2hhYmxlIiwic2VhcmNoYWJsZSIsImNsb3NlT25BY3RpdmF0ZSIsImlzQWN0aXZlIiwiWSIsIkwiLCJjb250YWluZXIiLCJhY3RpdmUiLCJkaXNhYmxlZCIsImZvY3VzZWQiLCJoaWRkZW4iLCJjb25maXJtYXRpb25TdGF0ZSIsIm5vSG92ZXIiLCJub0ZvY3VzIiwic2Vjb25kYXJ5VGl0bGUiLCJpY29uVG9vbCIsImljb25DaGV2cm9uUmlnaHQiLCJ3b2JibGVBbmltYXRpb24iLCJyZSIsInJlbW92ZVNwZWNpYWxGb2N1c0JlaGF2aW9yIiwicmVtb3ZlU3BlY2lhbEhvdmVyQmVoYXZpb3IiLCJvbkVycm9yQW5pbWF0aW9uRW5kIiwiaXNEaXNhYmxlZCIsImlzQ29uZmlybWF0aW9uU3RhdGVFbmFibGVkIiwiaXNGb2N1c2VkIiwiYWN0aXZhdGVPckVuYWJsZUNvbmZpcm1hdGlvbk1vZGUiLCJ0b2dnbGVBY3RpdmUiLCJ0b2dnbGVIaWRkZW4iLCJyZXNldCIsImRpc2FibGVDb25maXJtYXRpb25Nb2RlIiwib25Gb2N1cyIsImRpc2FibGVTcGVjaWFsSG92ZXJBbmRGb2N1c0JlaGF2aW9yIiwid3JhcHBlclRhZyIsIml0ZW1OYW1lIiwic2Vjb25kYXJ5TGFiZWwiLCJoaW50IiwiZW5hYmxlZCIsImVuYWJsZUNvbmZpcm1hdGlvbk1vZGUiLCJjb25maXJtYXRpb24iLCJlbmFibGVTcGVjaWFsSG92ZXJBbmRGb2N1c0JlaGF2aW9yIiwiYW5pbWF0ZUVycm9yIiwibnQiLCJpdCIsImxpbmUiLCJRbyIsIkciLCJDbG9zZWQiLCJDbG9zZWRPbkFjdGl2YXRlIiwiJCIsIlAiLCJwb3BvdmVyQ29udGFpbmVyIiwicG9wb3Zlck9wZW5Ub3AiLCJwb3BvdmVyT3BlbkxlZnQiLCJwb3BvdmVyT3BlbmVkIiwic2VhcmNoIiwibm90aGluZ0ZvdW5kTWVzc2FnZSIsIm5vdGhpbmdGb3VuZE1lc3NhZ2VEaXNwbGF5ZWQiLCJvdmVybGF5Iiwib3ZlcmxheUhpZGRlbiIsInBvcG92ZXJOZXN0ZWQiLCJnZXRQb3BvdmVyTmVzdGVkQ2xhc3MiLCJwb3BvdmVySW5saW5lIiwicG9wb3ZlckhlYWRlciIsImZlIiwiTmVzdGluZ0xldmVsIiwiUG9wb3ZlckhlaWdodCIsIklubGluZVBvcG92ZXJXaWR0aCIsIlRyaWdnZXJJdGVtTGVmdCIsIlRyaWdnZXJJdGVtVG9wIiwiVG8iLCJTbyIsIlNlIiwiZ2V0Q29udHJvbHMiLCJKbyIsIml0ZW1zUmVuZGVyUGFyYW1zIiwibWVzc2FnZXMiLCJub3RoaW5nRm91bmQiLCJidWlsZEl0ZW1zIiwiY2xhc3MiLCJpdGVtc0RlZmF1bHQiLCJhY3RpdmF0ZUl0ZW1CeU5hbWUiLCJoYW5kbGVJdGVtQ2xpY2siLCJnZXRUYXJnZXRJdGVtIiwiY29tcG9zZWRQYXRoIiwic2hvd05lc3RlZEl0ZW1zIiwidG9nZ2xlSXRlbUFjdGl2ZW5lc3NJZk5lZWRlZCIsIlVlIiwiU2VhcmNoIiwic3QiLCJydCIsImxzIiwidGFiSW5kZXgiLCJzZWFyY2hRdWVyeSIsInF1ZXJ5IiwiZm91bmRJdGVtcyIsImNoZWNrSXRlbSIsImNzIiwiZHMiLCJ1cyIsImVuIiwidG4iLCJuZXN0aW5nTGV2ZWwiLCJuZXN0ZWRQb3BvdmVyVHJpZ2dlckl0ZW0iLCJwcmV2aW91c2x5SG92ZXJlZEl0ZW0iLCJzY29wZUVsZW1lbnQiLCJkZXN0cm95TmVzdGVkUG9wb3ZlcklmRXhpc3RzIiwiZmxpcHBlciIsIm9uU2VhcmNoIiwidG9nZ2xlTm90aGluZ0ZvdW5kTWVzc2FnZSIsImZsaXBwYWJsZUVsZW1lbnRzIiwiaGFuZGxlSG92ZXIiLCJhZGRTZWFyY2giLCJmbGlwcGFibGUiLCJzZXRQcm9wZXJ0eSIsInNpemUiLCJzaG91bGRPcGVuQm90dG9tIiwic2hvdWxkT3BlblJpZ2h0IiwibmVzdGVkUG9wb3ZlciIsInNob3dOZXN0ZWRQb3BvdmVyRm9ySXRlbSIsInNldFRyaWdnZXJJdGVtUG9zaXRpb24iLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJjbG9uZU5vZGUiLCJ2aXNpYmlsaXR5IiwiZmxhdCIsIkJ0IiwiaHMiLCJ4ZSIsInNjcm9sbFBvc2l0aW9uIiwibG9jayIsImxvY2tIYXJkIiwic2Nyb2xsTG9ja2VkIiwidW5sb2NrIiwidW5sb2NrSGFyZCIsInNjcm9sbExvY2tlZEhhcmQiLCJzY3JvbGxUbyIsInBzIiwiYXQiLCJsdCIsImJhY2tCdXR0b24iLCJmcyIsIm9uQmFja0J1dHRvbkNsaWNrIiwiaW5uZXJUZXh0IiwiZ3MiLCJoaXN0b3J5IiwiY3VycmVudFRpdGxlIiwiY3VycmVudEl0ZW1zIiwibm4iLCJzY3JvbGxMb2NrZXIiLCJpc0hpZGRlbiIsInVwZGF0ZUl0ZW1zQW5kSGVhZGVyIiwiaGVhZGVyIiwibXMiLCJDcm9zc0Jsb2NrU2VsZWN0aW9uIiwiaXNDcm9zc0Jsb2NrU2VsZWN0aW9uU3RhcnRlZCIsIkJsb2NrU2VsZWN0aW9uIiwidW5zZWxlY3RCbG9jayIsImNsb3NlZCIsIm9uUG9wb3ZlckNsb3NlIiwic2VsZWN0QmxvY2siLCJjbGVhckNhY2hlIiwiZ2V0VHVuZXNJdGVtcyIsInJlc29sdmVUdW5lQWxpYXNlcyIsImxhYmVsIiwic24iLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsImNvbW1hbmRzIiwicGFyc2VTaG9ydGN1dE5hbWUiLCJjYWxsYmFjayIsImV4ZWN1dGVTaG9ydGN1dCIsImV4ZWN1dGUiLCJDTUQiLCJFU0NBUEUiLCJJTlNFUlQiLCJzdXBwb3J0ZWRDb21tYW5kcyIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYWx0S2V5Iiwia2V5Q29kZXMiLCJicyIsInZzIiwia3MiLCJyZWdpc3RlcmVkU2hvcnRjdXRzIiwiZmluZFNob3J0Y3V0IiwiZ2UiLCJ5cyIsIndzIiwicm4iLCJMZSIsIk9wZW5lZCIsIkJsb2NrQWRkZWQiLCJDdCIsImFuIiwiaTE4bkxhYmVscyIsImhhbmRsZU1vYmlsZUxheW91dFRvZ2dsZSIsImRlc3Ryb3lQb3BvdmVyIiwiaW5pdFBvcG92ZXIiLCJlbmFibGVTaG9ydGN1dHMiLCJ0b29sc1RvQmVEaXNwbGF5ZWQiLCJyZW1vdmVBbGxTaG9ydGN1dHMiLCJ0b29sQnV0dG9uQWN0aXZhdGVkIiwidG9vbGJveEl0ZW1zVG9CZURpc3BsYXllZCIsInNob3J0Y3V0IiwiZW5hYmxlU2hvcnRjdXRGb3JUb29sIiwiRXMiLCJsbiIsInhzIiwia2V5Ym9hcmQiLCJnZXRMYXlvdXRNYXAiLCJCcyIsInRvb2xib3hJbnN0YW5jZSIsImFjdGlvbnMiLCJhY3Rpb25zT3BlbmVkIiwidG9vbGJhck9wZW5lZCIsIm9wZW5lZFRvb2xib3hIb2xkZXJNb2RpZmllciIsInBsdXNCdXR0b24iLCJwbHVzQnV0dG9uU2hvcnRjdXQiLCJzZXR0aW5nc1RvZ2dsZXIiLCJzZXR0aW5nc1RvZ2dsZXJIaWRkZW4iLCJob3ZlcmVkQmxvY2siLCJibG9ja0FjdGlvbnMiLCJibG9ja1R1bmVzVG9nZ2xlciIsInRvZ2dsZVJlYWRPbmx5IiwiZGlzYWJsZU1vZHVsZUJpbmRpbmdzIiwiZHJhd1VJIiwiZW5hYmxlTW9kdWxlQmluZGluZ3MiLCJ0aW1lb3V0IiwiaXNNb2JpbGUiLCJwbHVzQnV0dG9uQ2xpY2tlZCIsIm1ha2VUb29sYm94IiwiaW5zZXJ0QXRFbmQiLCJzZXR0aW5nc1RvZ2dsZXJDbGlja2VkIiwiYWUiLCJCbG9jayIsIklubGluZSIsIlR1bmUiLCJQZSIsIlNob3J0Y3V0IiwiVG9vbGJveCIsIkVuYWJsZWRJbmxpbmVUb29scyIsIkVuYWJsZWRCbG9ja1R1bmVzIiwiQ29uZmlnIiwiY24iLCJTYW5pdGl6ZUNvbmZpZyIsInBlIiwiSXNFbmFibGVkTGluZUJyZWFrcyIsIkNvbnZlcnNpb25Db25maWciLCJJc1JlYWRPbmx5U3VwcG9ydGVkIiwiUGFzdGVDb25maWciLCJXZSIsIklzSW5saW5lIiwiVGl0bGUiLCJtdCIsIklzVHVuZSIsIlR0IiwiY29uc3RydWN0YWJsZSIsImlzRGVmYXVsdCIsImRlZmF1bHRQbGFjZWhvbGRlciIsInRvb2xOYW1lIiwiaXNJbmxpbmUiLCJpc0Jsb2NrIiwiaXNUdW5lIiwiQ3MiLCJ0b29sYmFyVmVydGljYWxNYXJnaW4iLCJhbGxvd2VkVG9TaG93IiwiZ2V0VG9vbFNob3J0Y3V0IiwiY29udGFpbnNOb2RlIiwiZWRpdG9yUnRsRml4IiwiY3JlYXRlVG9vbHNJbnN0YW5jZXMiLCJnZXRQb3BvdmVySXRlbXMiLCJjb250ZW50UmVjdCIsImdldFRvb2xzIiwiaW5saW5lVG9vbHMiLCJpc1JlYWRPbmx5U3VwcG9ydGVkIiwidG9vbENsaWNrZWQiLCJyZW5kZXJBY3Rpb25zIiwiY2hlY2tTdGF0ZSIsImludGVybmFsIiwiZW5hYmxlZElubGluZVRvb2xzIiwic3Vycm91bmQiLCJjaGVja1Rvb2xzU3RhdGUiLCJkbiIsImZvY3VzT2Zmc2V0IiwidW4iLCJjbG9uZUNvbnRlbnRzIiwiTmUiLCJSZSIsImhuIiwiU3QiLCJYZSIsImRlIiwiSXQiLCJPdCIsIlRzIiwidWUiLCJTcyIsInBuIiwiTXQiLCJJcyIsIkF0IiwiTHQiLCJPcyIsImZuIiwiUHQiLCJjYWxjdWxhdGVCYXNlbGluZSIsIl9zIiwiZ24iLCJOdCIsIlJ0IiwiRHQiLCJNcyIsIlBzIiwiQXMiLCJMcyIsIlZlIiwiRnQiLCJOcyIsIm1uIiwianQiLCJScyIsIkRzIiwiRnMiLCJqcyIsIkhzIiwic2VsZWN0Tm9kZSIsIiRzIiwib2UiLCJ6cyIsImJuIiwiVXMiLCJXcyIsIkRlIiwiWXMiLCJLcyIsIlhzIiwiYnQiLCJWcyIsInFzIiwiWnMiLCJHcyIsIlFzIiwiSnMiLCJjb21wbGV0ZWQiLCJlciIsInRyIiwiZnJlZXplIiwiX19wcm90b19fIiwiUHJvbWlzZVF1ZXVlIiwiYmVhdXRpZnlTaG9ydGN1dCIsImNhY2hlYWJsZSIsImNhcGl0YWxpemUiLCJjb3B5VGV4dFRvQ2xpcGJvYXJkIiwiZGVib3VuY2UiLCJkZWVwTWVyZ2UiLCJkZXByZWNhdGlvbkFzc2VydCIsImdldFVzZXJPUyIsImdldFZhbGlkVXJsIiwiaXNCb29sZWFuIiwiaXNDbGFzcyIsImlzRnVuY3Rpb24iLCJpc0lvc0RldmljZSIsImlzTnVtYmVyIiwiaXNPYmplY3QiLCJpc1ByaW50YWJsZUtleSIsImlzUHJvbWlzZSIsImlzU3RyaW5nIiwiaXNVbmRlZmluZWQiLCJtb3VzZUJ1dHRvbnMiLCJub3RFbXB0eSIsInRocm90dGxlIiwidHlwZU9mIiwiSHQiLCJpciIsIm9yIiwibnIiLCJ2biIsIiR0IiwicWUiLCJ6dCIsInNyIiwiZnJhZ21lbnRUb1N0cmluZyIsImFyIiwicnIiLCJrbiIsIlV0IiwiY3IiLCJsciIsIld0IiwiWXQiLCJJbyIsIl9fc3ByZWFkQXJyYXkiLCJ5biIsImRyIiwid24iLCJLdCIsIlplIiwiWHQiLCJ1ciIsIkdlIiwiVnQiLCJociIsIkVuIiwicHIiLCJmciIsImdyIiwieG4iLCJxdCIsIk1lIiwieXIiLCJtciIsImJyIiwidnIiLCJrciIsIkJuIiwiWnQiLCJpc0NvbGxhcHNlZFdoaXRlc3BhY2VzIiwid3IiLCJHdCIsIlF0IiwieHIiLCJFciIsIkNuIiwiSnQiLCJlbyIsInRvIiwiQnIiLCJvbyIsIm5vIiwiT3IiLCJDciIsIlRyIiwiU3IiLCJJciIsIkFyIiwiX3IiLCJNciIsIlRuIiwiaW8iLCJQciIsIkxyIiwiU24iLCJzbyIsIlJyIiwiTnIiLCJJbiIsInJvIiwiRHIiLCJPbiIsImFvIiwiRnIiLCJRZSIsImdldENvbnRlbnRlZGl0YWJsZVNsaWNlIiwiSHIiLCJqciIsImV4dHJhY3RDb250ZW50cyIsImNoZWNrQ29udGVudGVkaXRhYmxlU2xpY2VGb3JFbXB0aW5lc3MiLCJVciIsIiRyIiwienIiLCJfbiIsIk1uIiwibG8iLCJZciIsIldyIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJsYXN0Q2hpbGQiLCJjbyIsIkplIiwiZ2V0Q2FyZXROb2RlQW5kT2Zmc2V0IiwiS3IiLCJBbiIsImV0IiwiZ2V0UmFuZ2UiLCJYciIsIkxuIiwidW8iLCJpc0NhcmV0QXRFbmRPZklucHV0IiwiWnIiLCJPbyIsIlZyIiwicXIiLCJQbiIsImhvIiwiaXNDYXJldEF0U3RhcnRPZklucHV0IiwiSnIiLCJBZSIsIkdyIiwiUXIiLCJObiIsInBvIiwib2EiLCJlYSIsInRhIiwic2V0U3RhcnRBZnRlciIsInNldEVuZEFmdGVyIiwibmEiLCJrZXlkb3duIiwiYmVmb3JlS2V5ZG93blByb2Nlc3NpbmciLCJiYWNrc3BhY2UiLCJlbnRlciIsImFycm93UmlnaHRBbmREb3duIiwiYXJyb3dMZWZ0QW5kVXAiLCJ0YWJQcmVzc2VkIiwic2xhc2hQcmVzc2VkIiwiY29kZSIsImNvbW1hbmRTbGFzaFByZXNzZWQiLCJuZWVkVG9vbGJhckNsb3NpbmciLCJjbGVhclNlbGVjdGlvbiIsImtleXVwIiwiY2hlY2tFbXB0aW5lc3MiLCJkcmFnT3ZlciIsImdldEJsb2NrQnlDaGlsZE5vZGUiLCJkcmFnTGVhdmUiLCJoYW5kbGVDb21tYW5kQyIsImFueUJsb2NrU2VsZWN0ZWQiLCJjb3B5U2VsZWN0ZWRCbG9ja3MiLCJoYW5kbGVDb21tYW5kWCIsInJlbW92ZVNlbGVjdGVkQmxvY2tzIiwiaW5zZXJ0RGVmYXVsdEJsb2NrQXRJbmRleCIsIm5hdmlnYXRlUHJldmlvdXMiLCJuYXZpZ2F0ZU5leHQiLCJzZWxlY3RlZEJsb2NrcyIsImFjdGl2YXRlQmxvY2tTZXR0aW5ncyIsImluc2VydENvbnRlbnRBdENhcmV0UG9zaXRpb24iLCJhY3RpdmF0ZVRvb2xib3giLCJpc0xpbmVCcmVha3NFbmFibGVkIiwic29tZVRvb2xiYXJPcGVuZWQiLCJzb21lRmxpcHBlckJ1dHRvbkZvY3VzZWQiLCJtZXJnZUJsb2NrcyIsInRvZ2dsZUJsb2NrU2VsZWN0ZWRTdGF0ZSIsImNsb3NlQWxsVG9vbGJhcnMiLCJjdCIsIndvcmtpbmdBcmVhIiwiYXJyYXkiLCJOdW1iZXIiLCJpbnNlcnRUb0RPTSIsImNvbXBvc2VCbG9ja0V2ZW50IiwiZnJvbUluZGV4IiwidG9JbmRleCIsInJlcGxhY2VXaXRoIiwiRG9jdW1lbnRGcmFnbWVudCIsImFmdGVyIiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9vIiwiTW8iLCJpYSIsIkFvIiwic2EiLCJyYSIsIl9jdXJyZW50QmxvY2tJbmRleCIsIl9ibG9ja3MiLCJuZXh0Q29udGVudGZ1bEJsb2NrIiwicHJldmlvdXNDb250ZW50ZnVsQmxvY2siLCJpc0VkaXRvckVtcHR5IiwiUHJveHkiLCJCbG9ja0V2ZW50cyIsImJpbmRCbG9ja0V2ZW50cyIsImJsb2NrRGlkTXV0YXRlZCIsInBhc3RlIiwidW5zZXRDdXJyZW50QmxvY2siLCJyZW1vdmVBbGxCbG9ja3MiLCJleHRyYWN0RnJhZ21lbnRGcm9tQ2FyZXRQb3NpdGlvbiIsInNldEN1cnJlbnRCbG9ja0J5Q2hpbGROb2RlIiwiaXNFcXVhbE5vZGUiLCJldmVudCIsImFhIiwiYW55QmxvY2tTZWxlY3RlZENhY2hlIiwibmVlZFRvU2VsZWN0QWxsIiwibmF0aXZlSW5wdXRTZWxlY3RlZCIsInJlYWR5VG9CbG9ja1NlbGVjdGlvbiIsInNhbml0aXplckNvbmZpZyIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsIm9sIiwidWwiLCJpbWciLCJzcmMiLCJhbGxCbG9ja3NTZWxlY3RlZCIsInNlbGVjdEFsbEJsb2NrcyIsImhhbmRsZUNvbW1hbmRBIiwidW5TZWxlY3RCbG9ja0J5SW5kZXgiLCJSZWN0YW5nbGVTZWxlY3Rpb24iLCJLZXlib2FyZEV2ZW50IiwiaXNSZWN0QWN0aXZhdGVkIiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJNSU1FX1RZUEUiLCJzZWxlY3RCbG9ja0J5SW5kZXgiLCJZZSIsInNoYWRvd0NhcmV0Iiwic2V0VG9JbnB1dCIsInNjcm9sbEJ5Iiwic2V0VG9UaGVMYXN0QmxvY2siLCJkZWxldGVDb250ZW50cyIsImVuZENvbnRhaW5lciIsImVuZE9mZnNldCIsImNyZWF0ZVNoYWRvdyIsInJlc3RvcmVDYXJldCIsImxhIiwib25Nb3VzZVVwIiwib25Nb3VzZU92ZXIiLCJyZWxhdGVkVGFyZ2V0IiwibGFzdFNlbGVjdGVkQmxvY2siLCJmaXJzdFNlbGVjdGVkQmxvY2siLCJ0b2dnbGVCbG9ja3NTZWxlY3RlZFN0YXRlIiwiZW5hYmxlQ3Jvc3NCbG9ja1NlbGVjdGlvbiIsIndhdGNoU2VsZWN0aW9uIiwiY2EiLCJpc1N0YXJ0ZWRBdEVkaXRvciIsInByb2Nlc3NEcm9wIiwicHJvY2Vzc0RyYWdTdGFydCIsInByb2Nlc3NEcmFnT3ZlciIsInByb2Nlc3NEYXRhVHJhbnNmZXIiLCJkYXRhVHJhbnNmZXIiLCJkYSIsInVhIiwiaGEiLCJiYXRjaGluZ1RpbWVvdXQiLCJiYXRjaGluZ09uQ2hhbmdlUXVldWUiLCJiYXRjaFRpbWUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInJlZGFjdG9yQ2hhbmdlZCIsInBhcnRpY3VsYXJCbG9ja0NoYW5nZWQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNoYXJhY3RlckRhdGEiLCJkaXNjb25uZWN0Iiwib25DaGFuZ2UiLCJSbiIsIkRuIiwidG9vbHNUYWdzIiwidGFnc0J5VG9vbCIsInRvb2xzUGF0dGVybnMiLCJ0b29sc0ZpbGVzIiwiZXhjZXB0aW9uTGlzdCIsInByb2Nlc3NUb29sIiwicGFzdGVDb25maWciLCJvblBhc3RlIiwiZ2V0VGFnc0NvbmZpZyIsImdldEZpbGVzQ29uZmlnIiwiZ2V0UGF0dGVybnNDb25maWciLCJoYW5kbGVQYXN0ZUV2ZW50IiwiaXNOYXRpdmVCZWhhdmlvdXIiLCJ0eXBlcyIsInByb2Nlc3NUb29scyIsInVuc2V0Q2FsbGJhY2siLCJzZXRDYWxsYmFjayIsInByb2Nlc3NGaWxlcyIsImZpbGVzIiwiZ2V0RGF0YSIsImluc2VydEVkaXRvckpTRGF0YSIsInBhcnNlIiwic2FuaXRpemF0aW9uQ29uZmlnIiwiZ2V0QWxsSW5saW5lVG9vbHNTYW5pdGl6ZUNvbmZpZyIsInByb2Nlc3NIVE1MIiwicHJvY2Vzc1BsYWluIiwicHJvY2Vzc1NpbmdsZUJsb2NrIiwicHJvY2Vzc0lubGluZVBhc3RlIiwiaW5zZXJ0QmxvY2siLCJjb2xsZWN0VGFnTmFtZXMiLCJleHRlbnNpb25zIiwibWltZVR5cGVzIiwicGF0dGVybnMiLCJwYXR0ZXJuIiwicHJvY2Vzc0ZpbGUiLCJjb21wb3NlUGFzdGVFdmVudCIsImZpbGUiLCJnZXROb2RlcyIsImRlZmF1bHRUb29sIiwiYmFzZVNhbml0aXplQ29uZmlnIiwib3V0ZXJIVE1MIiwiUEFUVEVSTl9QUk9DRVNTSU5HX01BWF9MRU5HVEgiLCJwcm9jZXNzUGF0dGVybiIsImV4ZWMiLCJwcm9jZXNzRWxlbWVudE5vZGUiLCJwYSIsImZhIiwidG9vbHNEb250U3VwcG9ydFJlYWRPbmx5IiwicmVhZE9ubHlFbmFibGVkIiwidGhyb3dDcml0aWNhbEVycm9yIiwiQmUiLCJpc1JlY3RTZWxlY3Rpb25BY3RpdmF0ZWQiLCJTQ1JPTExfU1BFRUQiLCJIRUlHSFRfT0ZfU0NST0xMX1pPTkUiLCJCT1RUT01fU0NST0xMX1pPTkUiLCJUT1BfU0NST0xMX1pPTkUiLCJNQUlOX01PVVNFX0JVVFRPTiIsIm1vdXNlZG93biIsImlzU2Nyb2xsaW5nIiwiaW5TY3JvbGxab25lIiwic3RhcnRYIiwic3RhcnRZIiwibW91c2VYIiwibW91c2VZIiwic3RhY2tPZlNlbGVjdGVkIiwibGlzdGVuZXJJZHMiLCJvdmVybGF5Q29udGFpbmVyIiwidG9wU2Nyb2xsWm9uZSIsImJvdHRvbVNjcm9sbFpvbmUiLCJzdGFydFNlbGVjdGlvbiIsImVsZW1lbnRGcm9tUG9pbnQiLCJlbmRTZWxlY3Rpb24iLCJvdmVybGF5UmVjdGFuZ2xlIiwiZGlzcGxheSIsImdlbkhUTUwiLCJwcm9jZXNzTW91c2VEb3duIiwicHJvY2Vzc01vdXNlTW92ZSIsInByb2Nlc3NNb3VzZUxlYXZlIiwicHJvY2Vzc1Njcm9sbCIsInByb2Nlc3NNb3VzZVVwIiwicGFnZVgiLCJwYWdlWSIsImNoYW5naW5nUmVjdGFuZ2xlIiwic2Nyb2xsQnlab25lcyIsImNsaWVudFkiLCJzY3JvbGxWZXJ0aWNhbCIsInJpZ2h0UG9zIiwibGVmdFBvcyIsImdlbkluZm9Gb3JNb3VzZVNlbGVjdGlvbiIsInJlY3RDcm9zc2VzQmxvY2tzIiwic2hyaW5rUmVjdGFuZ2xlVG9Qb2ludCIsInVwZGF0ZVJlY3RhbmdsZVNpemUiLCJ0cnlTZWxlY3ROZXh0QmxvY2siLCJpbnZlcnNlU2VsZWN0aW9uIiwiYWRkQmxvY2tJblNlbGVjdGlvbiIsImdhIiwiYXZhaWxhYmxlIiwiY29tcG9zZVN0dWJEYXRhRm9yVG9vbCIsInN0dWJUb29sIiwidW5hdmFpbGFibGUiLCJzYXZlZERhdGEiLCJtYSIsImdldFNhdmVkRGF0YSIsIm1ha2VPdXRwdXQiLCJpc1ZhbGlkIiwidmVyc2lvbiIsImJhIiwidmEiLCJmbyIsIkRFRkFVTFRfUExBQ0VIT0xERVIiLCJfQ1NTIiwib25LZXlVcCIsIl9wbGFjZWhvbGRlciIsIl9kYXRhIiwiX2VsZW1lbnQiLCJfcHJlc2VydmVCbGFuayIsInByZXNlcnZlQmxhbmsiLCJkcmF3VmlldyIsInBsYWNlaG9sZGVyQWN0aXZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ28iLCJjb21tYW5kTmFtZSIsInF1ZXJ5Q29tbWFuZFN0YXRlIiwibW8iLCJidXR0b25BY3RpdmUiLCJidXR0b25Nb2RpZmllciIsImJvIiwiY29tbWFuZExpbmsiLCJjb21tYW5kVW5saW5rIiwiRU5URVJfS0VZIiwiYnV0dG9uVW5saW5rIiwiaW5wdXRTaG93ZWQiLCJpbnB1dE9wZW5lZCIsImVudGVyS2V5SGludCIsImVudGVyUHJlc3NlZCIsInVubGluayIsImNsb3NlQWN0aW9ucyIsInRvZ2dsZUFjdGlvbnMiLCJvcGVuQWN0aW9ucyIsImdldEF0dHJpYnV0ZSIsInZhbGlkYXRlVVJMIiwicHJlcGFyZUxpbmsiLCJpbnNlcnRMaW5rIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWRkUHJvdG9jb2wiLCJGbiIsImkxOG5BUEkiLCJibG9ja3NBUEkiLCJzZWxlY3Rpb25BUEkiLCJ0b29sc0FQSSIsImNhcmV0QVBJIiwiam4iLCJpbmZvIiwic3VidGl0bGUiLCJrYSIsInlhIiwiaiIsImludGVybmFsVG9vbHMiLCJleHRlcm5hbFRvb2xzIiwid2EiLCJFYSIsIkhuIiwidm8iLCJlbmFibGVkQmxvY2tUdW5lcyIsInhhIiwiZWRpdG9yQ29uZmlnIiwiZ2V0Q29uc3RydWN0b3IiLCIkbiIsImFuaW1hdGlvbiIsImFicyIsInNjcm9sbFkiLCJ6biIsIlVuIiwiQmEiLCJDYSIsIlRhIiwiV24iLCJ0b29sc0F2YWlsYWJsZSIsInRvb2xzVW5hdmFpbGFibGUiLCJ2YWxpZGF0ZVRvb2xzIiwicHJlcGFyZUNvbmZpZyIsImZhY3RvcnkiLCJnZXRMaXN0T2ZQcmVwYXJlRnVuY3Rpb25zIiwidG9vbFByZXBhcmVNZXRob2RTdWNjZXNzIiwidG9vbFByZXBhcmVNZXRob2RGYWxsYmFjayIsInByZXBhcmVCbG9ja1Rvb2xzIiwiY29udmVydFRvIiwiYm9sZCIsIml0YWxpYyIsInBhcmFncmFwaCIsImFzc2lnbklubGluZVRvb2xzVG9CbG9ja1Rvb2wiLCJhc3NpZ25CbG9ja1R1bmVzVG9CbG9ja1Rvb2wiLCJTYSIsIklhIiwiY29udGVudFJlY3RDYWNoZSIsInJlc2l6ZURlYm91bmNlciIsIndpbmRvd1Jlc2l6ZSIsInNlbGVjdGlvbkNoYW5nZURlYm91bmNlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJkb2N1bWVudFRvdWNoZWRMaXN0ZW5lciIsImRvY3VtZW50VG91Y2hlZCIsImVkaXRvcldyYXBwZXJOYXJyb3ciLCJlZGl0b3Jab25lSGlkZGVuIiwiZWRpdG9yRW1wdHkiLCJzZXRJc01vYmlsZSIsInVuYmluZFJlYWRPbmx5U2Vuc2l0aXZlTGlzdGVuZXJzIiwiYmluZFJlYWRPbmx5U2Vuc2l0aXZlTGlzdGVuZXJzIiwidW5iaW5kUmVhZE9ubHlJbnNlbnNpdGl2ZUxpc3RlbmVycyIsInBhZGRpbmdCb3R0b20iLCJtaW5IZWlnaHQiLCJiaW5kUmVhZE9ubHlJbnNlbnNpdGl2ZUxpc3RlbmVycyIsIm5vbmNlIiwiY2FwdHVyZSIsInJlZGFjdG9yQ2xpY2tlZCIsImRvY3VtZW50S2V5ZG93biIsImRvY3VtZW50Q2xpY2tlZCIsIndhdGNoQmxvY2tIb3ZlcmVkRXZlbnRzIiwiZW5hYmxlSW5wdXRzRW1wdHlNYXJrIiwiYmFja3NwYWNlUHJlc3NlZCIsImVzY2FwZVByZXNzZWQiLCJkZWZhdWx0QmVoYXZpb3VyIiwiaXNUcnVzdGVkIiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwicHJvY2Vzc0JvdHRvbVpvbmVDbGljayIsIk9hIiwiRHJhZ05Ecm9wIiwiX2EiLCJtb2R1bGVJbnN0YW5jZXMiLCJpc1JlYWR5IiwiY29uZmlndXJhdGlvbiIsImluaXQiLCJzdGFydCIsImF1dG9mb2N1cyIsImhvbGRlcklkIiwiaW5pdGlhbEJsb2NrIiwiaGlkZVRvb2xiYXIiLCJvblJlYWR5IiwiY29uc3RydWN0TW9kdWxlcyIsImNvbmZpZ3VyZU1vZHVsZXMiLCJnZXRNb2R1bGVzRGlmZiIsIkFhIiwiZXhwb3J0QVBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHVCQUFBOzs7Q0NBQyxZQUFVO0VBQUM7O0VBQWEsSUFBRztJQUFDLElBQUcsT0FBT08sUUFBQSxHQUFTLEtBQUk7TUFBQyxJQUFJQyxDQUFBLEdBQUVELFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE9BQU87TUFBRUQsQ0FBQSxDQUFFRSxXQUFBLENBQVlILFFBQUEsQ0FBU0ksY0FBQSxDQUFlLGlJQUFpSSxDQUFDLEdBQUVKLFFBQUEsQ0FBU0ssSUFBQSxDQUFLRixXQUFBLENBQVlGLENBQUM7SUFBQztFQUFDLFNBQU9LLENBQUEsRUFBTjtJQUFTQyxPQUFBLENBQVFDLEtBQUEsQ0FBTSxrQ0FBaUNGLENBQUM7RUFBQztBQUFDLEdBQUc7QUFDalcsSUFBSUcsRUFBQSxHQUFLLE9BQU9DLFVBQUEsR0FBYSxNQUFNQSxVQUFBLEdBQWEsT0FBT0MsTUFBQSxHQUFTLE1BQU1BLE1BQUEsR0FBUyxPQUFPQyxNQUFBLEdBQVMsTUFBTUEsTUFBQSxHQUFTLE9BQU9DLElBQUEsR0FBTyxNQUFNQSxJQUFBLEdBQU8sQ0FBQztBQUMxSSxTQUFTQyxHQUFHQyxDQUFBLEVBQUc7RUFDYixPQUFPQSxDQUFBLElBQUtBLENBQUEsQ0FBRUMsVUFB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O0lBQ1gsTUFBTUssQ0FBQSxHQUFJLENBQUMsZUFBZTtNQUFHZ0IsQ0FBQSxHQUFJQSxDQUFBLEtBQU07UUFDckNMLE1BQUEsQ0FBT3NmLE1BQUEsQ0FBT3RnQixDQUFBLENBQUVpdEQsZUFBZSxFQUFFbnJELE9BQUEsQ0FBU29DLENBQUEsSUFBTTtVQUM5Q2tFLENBQUEsQ0FBRWxFLENBQUEsQ0FBRTZQLE9BQU8sS0FBSzdQLENBQUEsQ0FBRTZQLE9BQUEsQ0FBUSxHQUFHN1AsQ0FBQSxDQUFFNFIsU0FBQSxDQUFVTixTQUFBLENBQVU7UUFDckQsQ0FBQyxHQUFHdWIsRUFBQSxDQUFHLEdBQUcvd0IsQ0FBQSxHQUFJO1FBQ2QsV0FBV2tFLENBQUEsSUFBSyxNQUNkbEQsTUFBQSxDQUFPQyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLLE1BQU0rQyxDQUFDLEtBQUssT0FBTyxLQUFLQSxDQUFBO1FBQy9EbEQsTUFBQSxDQUFPaVQsY0FBQSxDQUFlLE1BQU0sSUFBSTtNQUNsQztJQUNBNVQsQ0FBQSxDQUFFeUIsT0FBQSxDQUFTb0MsQ0FBQSxJQUFNO01BQ2YsS0FBS0EsQ0FBQSxJQUFLbEUsQ0FBQSxDQUFFa0UsQ0FBQTtJQUNkLENBQUMsR0FBRyxLQUFLNlAsT0FBQSxHQUFVMVMsQ0FBQSxFQUFHTCxNQUFBLENBQU9pVCxjQUFBLENBQWUsTUFBTWpVLENBQUEsQ0FBRWl0RCxlQUFBLENBQWdCcHJDLEdBQUEsQ0FBSVUsT0FBTyxHQUFHLE9BQU8sS0FBS3dyQyxTQUFBLEVBQVcvc0QsTUFBQSxDQUFPd2EsT0FBQSxDQUFRO01BQ3RINEcsTUFBQSxFQUFRO1FBQ05JLEtBQUEsRUFBTztRQUNQakMsTUFBQSxFQUFRO01BQ1Y7TUFDQThFLEtBQUEsRUFBTztRQUNMbk0sS0FBQSxFQUFPO01BQ1Q7TUFDQXNNLE1BQUEsRUFBUTtRQUNOL1IsRUFBQSxFQUFJO1FBQ0pJLEdBQUEsRUFBSztRQUNMRCxJQUFBLEVBQU07TUFDUjtNQUNBbVMsS0FBQSxFQUFPO1FBQ0x2UixJQUFBLEVBQU07TUFDUjtJQUNGLENBQUMsRUFBRTFTLE9BQUEsQ0FBUSxDQUFDLENBQUNvQyxDQUFBLEVBQUdHLENBQUMsTUFBTTtNQUNyQnJELE1BQUEsQ0FBT3dhLE9BQUEsQ0FBUW5YLENBQUMsRUFBRXZDLE9BQUEsQ0FBUSxDQUFDLENBQUN5QyxDQUFBLEVBQUdHLENBQUMsTUFBTTtRQUNwQyxLQUFLQSxDQUFBLElBQUsxRSxDQUFBLENBQUVpdEQsZUFBQSxDQUFnQnByQyxHQUFBLENBQUlVLE9BQUEsQ0FBUXJlLENBQUEsRUFBR0ssQ0FBQTtNQUM3QyxDQUFDO0lBQ0gsQ0FBQztFQUNIO0FBQ0Y7OztBRGo4VkEsSUFBTzVFLHVCQUFBLEdBQVFtdUQsRUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9