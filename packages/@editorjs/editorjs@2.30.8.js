System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@editorjs/editorjs","2.30.8"]]);
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

// .beyond/uimport/@editorjs/editorjs.2.30.8.js
var editorjs_2_30_8_exports = {};
__export(editorjs_2_30_8_exports, {
  default: () => editorjs_2_30_8_default
});
module.exports = __toCommonJS(editorjs_2_30_8_exports);

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
  const a = "Editor.js 2.31.0-rc.7",
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
    const u = e - (c - a);
    return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), a = c, s = n.apply(o, i), r || (o = i = null)) : !r && t.trailing !== false && (r = setTimeout(l, u)), s;
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
var d = class {
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
    return No(e.querySelectorAll(d.allInputsSelector)).reduce((t, o) => d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...d.getDeepestBlockElements(o)], []);
  }
  static getDeepestNode(e, t = false) {
    const o = t ? "lastChild" : "firstChild",
      i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let s = e[o];
      if (d.isSingleTag(s) && !d.isNativeInput(s) && !d.isLineBreakTag(s)) if (s[i]) s = s[i];else if (s.parentNode[i]) s = s.parentNode[i];else return s.parentNode;
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
    if (d.isNativeInput(e)) switch (e.type) {
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
    } else t = d.isContentEditable(e);
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
    const t = d.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  static getContentLength(e) {
    return d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  static get blockElements() {
    return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tbody", "thead", "tr", "tfoot", "ul", "video"];
  }
  static containsOnlyInlineElements(e) {
    let t;
    te(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = i => !d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  static getDeepestBlockElements(e) {
    return d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...d.getDeepestBlockElements(o)], []);
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
  n.dataset.empty = d.isEmpty(n) ? "true" : "false";
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
    return t ? d.isElement(t) ? t : t.parentElement : null;
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
    return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  static isRangeInsideContainer(e) {
    const t = b.range;
    return t === null ? false : e.contains(t.startContainer);
  }
  static addFakeCursor() {
    const e = b.range;
    if (e === null) return;
    const t = d.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  static isFakeCursorInsideContainer(e) {
    return d.find(e, ".codex-editor__fake-cursor") !== null;
  }
  static removeFakeCursor(e = document.body) {
    const t = d.find(e, ".codex-editor__fake-cursor");
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
      let u;
      l || c ? u = true : u = !(a.length > 0 && a.every(p => {
        const {
          addedNodes: g,
          removedNodes: f,
          target: v
        } = p;
        return [...Array.from(g), ...Array.from(f), v].some(T => (d.isElement(T) || (T = T.parentElement), T && T.closest('[data-mutation-free="true"]') !== null));
      })), u && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call("updated"), this.emit("didMutated", this));
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
    const e = d.findAllInputs(this.holder);
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
    const e = d.isEmpty(this.pluginsContent, "/"),
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
    return d.isElement(o) ? e.push({
      type: _.Html,
      element: o
    }) : Array.isArray(o) ? e.push(...o) : e.push(o), [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].map(s => s.render()).forEach(s => {
      d.isElement(s) ? t.push({
        type: _.Html,
        element: s
      }) : Array.isArray(s) ? t.push(...s) : t.push(s);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  updateCurrentInput() {
    this.currentInput = d.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
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
    const e = d.make("div", R.CSS.wrapper),
      t = d.make("div", R.CSS.content),
      o = this.toolInstance.render();
    e.setAttribute("data-cy", "block-wrapper"), e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
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
      e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  removeInputEvents() {
    this.inputs.forEach(e => {
      e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
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
        u = ((p = l.conversionConfig) == null ? void 0 : p.import) !== void 0;
      if (c && u) {
        const g = await i.convert(r, t, o);
        return new J(g);
      } else {
        const g = [c ? false : je(r.name), u ? false : je(t)].filter(Boolean).join(" and ");
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
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, true);
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
                u = l.time || 8e3;
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
                  }, u);
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
              var u = l[1] || "",
                h = l[3];
              if (!h) return u;
              if (c && typeof btoa == "function") {
                var p = (f = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"),
                  g = h.sources.map(function (v) {
                    return "/*# sourceURL=" + h.sourceRoot + v + " */";
                  });
                return [u].concat(g).concat([p]).join(`
`);
              }
              var f;
              return [u].join(`
`);
            }(r, i);
            return r[2] ? "@media " + r[2] + "{" + a + "}" : a;
          }).join("");
        }, s.i = function (r, a) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var l = {}, c = 0; c < this.length; c++) {
            var u = this[c][0];
            typeof u == "number" && (l[u] = true);
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
        u = null,
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
          w = u || (u = M(m)), x = ie.bind(null, w, N, false), I = ie.bind(null, w, N, true);
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
          var u,
            h = c.trim().replace(/^"(.*)"$/, function (p, g) {
              return g;
            }).replace(/^'(.*)'$/, function (p, g) {
              return g;
            });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? l : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : a + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function (t, o, i) {
      var s, r, a, l, c, u, h, p, g;
      t.exports = (s = "cdx-notifies", r = "cdx-notify", a = "cdx-notify__cross", l = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", p = "cdx-notify__btns-wrapper", {
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
          return O.classList.add(p), T.innerHTML = f.okText || "Ok", T.classList.add(h), T.classList.add(l), M.classList.add(u), f.placeholder && M.setAttribute("placeholder", f.placeholder), f.default && (M.value = f.default), f.inputType && (M.type = f.inputType), F && typeof F == "function" && q.addEventListener("click", F), H && typeof H == "function" && T.addEventListener("click", function () {
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
          u(ie, F, f) && (f.removeAttribute(ie.name), Q = Q - 1);
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
    function u(h, p, g) {
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
          const u = Object.assign({
            placement: "bottom",
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            delay: 70,
            hidingDelay: 0
          }, c);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof l == "string") this.nodes.content.appendChild(document.createTextNode(l));else {
            if (!(l instanceof Node)) throw Error("[CodeX Tooltip] Wrong type of \xABcontent\xBB passed. It should be an instance of Node or String. But " + typeof l + " given.");
            this.nodes.content.appendChild(l);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement) {
            case "top":
              this.placeTop(a, u);
              break;
            case "left":
              this.placeLeft(a, u);
              break;
            case "right":
              this.placeRight(a, u);
              break;
            case "bottom":
            default:
              this.placeBottom(a, u);
          }
          u && u.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true;
          }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = true);
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
            u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
            h = c.bottom + window.pageYOffset + this.offsetTop + l.marginTop;
          this.applyPlacement("bottom", u, h);
        }
        placeTop(a, l) {
          const c = a.getBoundingClientRect(),
            u = c.left + a.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2,
            h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, h);
        }
        placeLeft(a, l) {
          const c = a.getBoundingClientRect(),
            u = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - l.marginLeft,
            h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, h);
        }
        placeRight(a, l) {
          const c = a.getBoundingClientRect(),
            u = c.right + this.offsetRight + l.marginRight,
            h = c.top + window.pageYOffset + a.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, h);
        }
        applyPlacement(a, l, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[a]), this.nodes.wrapper.style.left = l + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(a, l = null, c = {}) {
          const u = document.createElement(a);
          Array.isArray(l) ? u.classList.add(...l) : l && u.classList.add(l);
          for (const h in c) c.hasOwnProperty(h) && (u[h] = c[h]);
          return u;
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
    return t === -1 ? t = e === Ee.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === Ee.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, d.canSetCaret(this.items[t]) && Fe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
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
      if (this.isEventReadyForHandling(t)) switch (ce.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
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
      root: d.make("div", [we.root, e.alignment === "center" ? we.alignedCenter : we.alignedStart]),
      title: d.make("div", we.title, {
        textContent: e.title
      })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = d.make("div", we.description, {
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
      i = d.make(o, L.container, {
        type: o === "button" ? "button" : void 0
      });
    return e.name && (i.dataset.itemName = e.name), this.nodes.icon = d.make("div", [L.icon, L.iconTool], {
      innerHTML: e.icon || Qi
    }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(d.make("div", L.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && i.appendChild(d.make("div", L.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && i.appendChild(d.make("div", [L.icon, L.iconChevronRight], {
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
      root: d.make("div", it.container),
      line: d.make("div", it.line)
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
      root: d.make("div", So.root)
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
    const e = this.nodes.root.querySelectorAll(`button, ${d.allInputsSelector}`);
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
    }), this.nodes = {}, this.nodes.popoverContainer = d.make("div", [P.popoverContainer]), this.nodes.nothingFoundMessage = d.make("div", [P.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [P.items]), this.items.forEach(o => {
      const i = o.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", o => this.handleClick(o)), this.nodes.popover = d.make("div", [P.popover, this.params.class]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
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
    super(), this.listeners = new _e(), this.items = e, this.wrapper = d.make("div", rt.wrapper);
    const o = d.make("div", rt.icon, {
      innerHTML: os
    });
    this.input = d.make("input", rt.input, {
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
      root: d.make("div", [lt.root]),
      backButton: d.make("button", [lt.backButton]),
      text: d.make("div", [lt.text])
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
    }), this.scrollLocker = new ps(), this.history = new gs(), this.isHidden = true, this.nodes.overlay = d.make("div", [P.overlay, P.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
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
    this.nodes.wrapper = d.make("div", [this.CSS.settings]), this.nodes.wrapper.setAttribute("data-cy", "block-tunes"), this.eventsDispatcher.on(Te, this.close);
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
      a = (await Yo(e, s)).reduce((l, c) => (c.toolbox.forEach(u => {
        l.push({
          icon: u.icon,
          title: z.t(K.toolNames, u.title),
          name: c.name,
          closeOnActivate: true,
          onActivate: async () => {
            const {
                BlockManager: h,
                Caret: p,
                Toolbar: g
              } = this.Editor,
              f = await h.convert(e, c.name, u.data);
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
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || false, h.configurable = true, "value" in h && (h.writable = true), Object.defineProperty(l, h.key, h);
        }
      }
      function r(l, c, u) {
        return c && s(l.prototype, c), u && s(l, u), l;
      }
      i.r(o);
      var a = function () {
        function l(c) {
          var u = this;
          (function (h, p) {
            if (!(h instanceof p)) throw new TypeError("Cannot call a class as a function");
          })(this, l), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function (h) {
            u.execute(h);
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
            for (var u = 0; u < c.length; u++) {
              c[u] = c[u].toUpperCase();
              var h = false;
              for (var p in l.supportedCommands) if (l.supportedCommands[p].includes(c[u])) {
                h = this.commands[p] = true;
                break;
              }
              h || (this.keys[c[u]] = true);
            }
            for (var g in l.supportedCommands) this.commands[g] || (this.commands[g] = false);
          }
        }, {
          key: "execute",
          value: function (c) {
            var u,
              h = {
                CMD: c.ctrlKey || c.metaKey,
                SHIFT: c.shiftKey,
                ALT: c.altKey
              },
              p = true;
            for (u in this.commands) this.commands[u] !== h[u] && (p = false);
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
    const i = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, i.filter(s => s !== o));
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
      toolbox: d.make("div", an.CSS.toolbox)
    }, this.initPopover(), this.nodes.toolbox.setAttribute("data-cy", "toolbox"), this.api.events.on(Te, this.handleMobileLayoutToggle);
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
      u = c !== null ? c > s : void 0;
    if (o) i = t.offsetTop + t.offsetHeight;else if (r === void 0 || u) {
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
    this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach(s => {
      this.nodes[s] = d.make("div", this.CSS[s]);
    }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
      innerHTML: ts
    }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      $e(true), this.plusButtonClicked();
    }, false);
    const e = d.make("div");
    e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), ze(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
      innerHTML: es
    }), d.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = d.make("div"),
      o = d.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")),
      i = await xs("Slash", "/");
    t.appendChild(o), t.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
      textContent: vt(`CMD + ${i}`)
    })), ze(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
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
    this.nodes.wrapper = d.make("div", [this.CSS.inlineToolbar, ...(this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : [])]), this.nodes.wrapper.setAttribute("data-cy", "inline-toolbar"), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
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
    const i = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
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
        const u = {
          name: o.name,
          onActivate: () => {
            this.toolClicked(i);
          },
          hint: {
            title: l,
            description: a
          }
        };
        if (d.isElement(c)) {
          const g = {
            ...u,
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
          ...u,
          ...c,
          type: _.Html
        });else if (c.type === _.Separator) e.push({
          type: _.Separator
        });else {
          const g = {
            ...u,
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
  const e = d.getDeepestNode(n);
  if (e === null || d.isEmpty(n)) return true;
  if (d.isNativeInput(e)) return e.selectionEnd === 0;
  if (d.isEmpty(n)) return true;
  const [t, o] = dn();
  return t === null ? false : un(n, t, o, "left");
}
function Re(n) {
  const e = d.getDeepestNode(n, true);
  if (e === null) return true;
  if (d.isNativeInput(e)) return e.selectionEnd === e.value.length;
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
    const u = e - (c - a);
    return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), a = c, s = n.apply(o, i), r === null && (o = i = null)) : !r && t.trailing !== false && (r = setTimeout(l, u)), s;
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
  var u = Wt;
  Object.defineProperty(n, "getDeepestBlockElements", {
    enumerable: true,
    get: function () {
      return u.getDeepestBlockElements;
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
  var u = (s = c.textContent) !== null && s !== void 0 ? s : "";
  return u;
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
      u = e ? c[0] : c[c.length - 1];
    if (l(u)) {
      for (; l(u) && u.nodeType !== Node.TEXT_NODE;) u = e ? u.firstChild : u.lastChild;
      if (l(u) && u.nodeType === Node.TEXT_NODE) {
        var h = (o = (t = u.textContent) === null || t === void 0 ? void 0 : t.length) !== null && o !== void 0 ? o : 0,
          i = e ? 0 : h;
        s.setStart(u, i), s.setEnd(u, i);
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
    this.Editor.BlockManager.currentBlock.isEmpty && (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
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
    d.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
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
      e.destroy(), this._blocks.remove(i), this.blockDidMutated(_o, e, {
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
      t = d.make("div");
    t.appendChild(e);
    const o = {
      text: d.isEmpty(t) ? "" : t.innerHTML
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
    d.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes,
      o = e.closest(`.${R.CSS.wrapper}`),
      i = t.indexOf(o);
    if (i >= 0) return this._blocks[i];
  }
  setCurrentBlockByChildNode(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${R.CSS.wrapper}`);
    if (!t) return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper)) return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node)) return;
    d.isElement(e) || (e = e.parentNode);
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
    this.blocks.forEach(o => {
      t.add(async () => {
        await this.removeBlock(o, false);
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
    const t = d.make("div");
    this.selectedBlocks.forEach(s => {
      const r = Z(s.holder.innerHTML, this.sanitizerConfig),
        a = d.make("p");
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
    if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
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
    const a = d.getDeepestNode(r, t === this.positions.END),
      l = d.getContentLength(a);
    switch (true) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > l:
        o = l;
        break;
    }
    this.set(a, o), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r;
  }
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const {
        currentBlock: i
      } = this.Editor.BlockManager,
      s = d.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s, 0);
        break;
      case this.positions.END:
        this.set(s, d.getContentLength(s));
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
      if (t.deleteContents(), o) if (d.isNativeInput(o)) {
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
      u = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), {
        br: {}
      }),
      h = Z(l, u);
    !h.trim() || h.trim() === a || !d.isHTMLString(h) ? await this.processText(a) : await this.processText(h, true);
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
    return d.isNativeInput(e);
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
        const [c, u] = e.type.split("/"),
          h = l.find(g => g.toLowerCase() === t.toLowerCase()),
          p = a.find(g => {
            const [f, v] = g.split("/");
            return f === c && (v === u || v === "*");
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
      o = d.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map(s => {
      let r,
        a = t.defaultTool,
        l = false;
      switch (s.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          r = d.make("div"), r.appendChild(s);
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
        u = c.reduce((g, f) => (this.collectTagNames(f).forEach(O => {
          const T = D(f) ? f[O] : null;
          g[O.toLowerCase()] = T || {};
        }), g), {}),
        h = Object.assign({}, u, a.baseSanitizeConfig);
      if (r.tagName.toLowerCase() === "table") {
        const g = Z(r.outerHTML, h);
        r = d.make("div", void 0, {
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
      const r = d.isEmpty(s.content),
        a = d.isSingleTag(s.content);
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
      const s = d.make("div");
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
    if (!i || e.tool !== i.name || !d.containsOnlyInlineElements(e.content.innerHTML)) {
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
      const u = t.insert({
        tool: r,
        data: a,
        replace: c
      });
      o.setToBlock(u, o.positions.END);
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
      c = d.blockElements.includes(s.tagName.toLowerCase()),
      u = Array.from(s.children).some(({
        tagName: p
      }) => i.includes(p) && !a.includes(p)),
      h = Array.from(s.children).some(({
        tagName: p
      }) => d.blockElements.includes(p.toLowerCase()));
    if (!c && !l && !u) return o.appendChild(s), [...t, o];
    if (l && !u || c && !h && !u) return [...t, o, s];
  }
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (s, r) => {
      if (d.isEmpty(r) && !d.isSingleTag(r)) return s;
      const a = s[s.length - 1];
      let l = new DocumentFragment();
      switch (a && d.isFragment(a) && (l = s.pop()), r.nodeType) {
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
    e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
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
      o = d.make("div", Be.CSS.overlay, {}),
      i = d.make("div", Be.CSS.overlayContainer, {}),
      s = d.make("div", Be.CSS.rect, {});
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
      u = t + l;
    return {
      index: r,
      leftPos: c,
      rightPos: u
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
      u = e < this.stackOfSelected[o - 1] && l === s,
      p = !(c || u || l === r);
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
          let u;
          try {
            u = i.composeBlock({
              id: c,
              tool: r,
              data: a,
              tunes: l
            });
          } catch (h) {
            S(`Block \xAB${r}\xBB skipped because of plugins error`, "error", {
              data: a,
              error: h
            }), a = this.composeStubDataForTool(r, a, c), r = o.stubTool, u = i.composeBlock({
              id: c,
              tool: r,
              data: a,
              tunes: l
            });
          }
          return u;
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
      version: "2.31.0-rc.7"
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
    const s = i.reduce((c, u) => {
        var h;
        return (h = u.toolbox) == null || h.forEach(p => {
          c.push({
            icon: p.icon,
            title: z.t(K.toolNames, p.title),
            name: u.name,
            closeOnActivate: true,
            onActivate: async () => {
              const g = await this.blocksAPI.convert(t.id, u.name, p.data);
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
    const e = d.make("div", this.CSS.wrapper),
      t = is,
      o = d.make("div", this.CSS.info),
      i = d.make("div", this.CSS.title, {
        textContent: this.title
      }),
      s = d.make("div", this.CSS.subtitle, {
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
    this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [this.CSS.editorWrapper, ...(this.isRtl ? [this.CSS.editorRtlFix] : [])]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper), this.bindReadOnlyInsensitiveListeners();
  }
  loadStyles() {
    const e = "editor-js-styles";
    if (d.get(e)) return;
    const t = d.make("style", null, {
      id: e,
      textContent: Sa.toString()
    });
    this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), d.prepend(document.head, t);
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
    if (d.isAnchor(t) && o) {
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
      o = d.offset(t.holder).bottom,
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
    if (te(t) && !d.get(t)) throw Error(`element with ID \xAB${t}\xBB is missing. Pass correct holder's ID.`);
    if (t && D(t) && !d.isElement(t)) throw Error("\xABholder\xBB value must be an Element node");
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
    return "2.31.0-rc.7";
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

// .beyond/uimport/@editorjs/editorjs.2.30.8.js
var editorjs_2_30_8_default = Aa;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZWRpdG9yanMvZWRpdG9yanMuMi4zMC44LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BlZGl0b3Jqcy9lZGl0b3Jqcy9kaXN0L2VkaXRvcmpzLm1qcyJdLCJuYW1lcyI6WyJlZGl0b3Jqc18yXzMwXzhfZXhwb3J0cyIsIl9fZXhwb3J0IiwiZGVmYXVsdCIsImVkaXRvcmpzXzJfMzBfOF9kZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImRvY3VtZW50IiwiZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCIsInQiLCJjb25zb2xlIiwiZXJyb3IiLCJDZSIsImdsb2JhbFRoaXMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwiS2UiLCJuIiwiX19lc01vZHVsZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlhuIiwibyIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJjb25zdHJ1Y3RvciIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImtleXMiLCJmb3JFYWNoIiwiaSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsImVudW1lcmFibGUiLCJvdCIsImFzc2lnbiIsInJlZ2lzdGVyIiwicmV2ZXJ0IiwiRWxlbWVudCIsIm1hdGNoZXMiLCJtYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJvd25lckRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIml0ZW0iLCJjbG9zZXN0IiwiZG9jdW1lbnRFbGVtZW50IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsInByZXBlbmQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwiTm9kZSIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzY3JvbGxJbnRvVmlld0lmTmVlZGVkIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlSW50IiwiZ2V0UHJvcGVydHlWYWx1ZSIsInMiLCJvZmZzZXRUb3AiLCJzY3JvbGxUb3AiLCJyIiwiY2xpZW50SGVpZ2h0IiwiYSIsIm9mZnNldExlZnQiLCJzY3JvbGxMZWZ0IiwibCIsImNsaWVudFdpZHRoIiwiYyIsInNjcm9sbEludG9WaWV3IiwicmVxdWVzdElkbGVDYWxsYmFjayIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiVm4iLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwicmVkdWNlIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsIkxvIiwiVkVSQk9TRSIsIklORk8iLCJXQVJOIiwiRVJST1IiLCJ5IiwiQkFDS1NQQUNFIiwiVEFCIiwiRU5URVIiLCJTSElGVCIsIkNUUkwiLCJBTFQiLCJFU0MiLCJTUEFDRSIsIkxFRlQiLCJVUCIsIkRPV04iLCJSSUdIVCIsIkRFTEVURSIsIk1FVEEiLCJTTEFTSCIsInFuIiwiV0hFRUwiLCJCQUNLV0FSRCIsIkZPUldBUkQiLCJJZSIsImluY2x1ZGVzIiwibG9nTGV2ZWwiLCJwdXNoIiwidW5zaGlmdCIsIlpuIiwiUyIsImJpbmQiLCJYIiwibGUiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiQSIsIkQiLCJ0ZSIsIkduIiwieW8iLCJ3byIsIlYiLCJQbyIsIlFuIiwiZnVuY3Rpb24iLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJObyIsInNsaWNlIiwiRmUiLCJKbiIsIm5hbWUiLCJzcGxpdCIsInBvcCIsImVpIiwidGVzdCIsIkVvIiwiZHQiLCJsZWFkaW5nIiwidSIsInRyYWlsaW5nIiwidGkiLCJ3aW4iLCJtYWMiLCJ4MTEiLCJsaW51eCIsImZpbmQiLCJuYXZpZ2F0b3IiLCJhcHBWZXJzaW9uIiwiaW5kZXhPZiIsImplIiwidXQiLCJzaGlmdCIsInZ0IiwicmVwbGFjZSIsIm9pIiwiVVJMIiwiaHJlZiIsInN1YnN0cmluZyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJvcmlnaW4iLCJuaSIsImlpIiwib3BlbiIsInNpIiwiZmxvb3IiLCJyYW5kb20iLCJodCIsIm1lIiwic2V0IiwiUm8iLCJiZSIsIm1hdGNoTWVkaWEiLCJwdCIsInBsYXRmb3JtIiwibWF4VG91Y2hQb2ludHMiLCJyaSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkIiwiaXNTaW5nbGVUYWciLCJ0YWdOYW1lIiwiaXNMaW5lQnJlYWtUYWciLCJtYWtlIiwiZmlsdGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dCIsImFwcGVuZCIsInJldmVyc2UiLCJzd2FwIiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJmaW5kQWxsIiwiYWxsSW5wdXRzU2VsZWN0b3IiLCJtYXAiLCJqb2luIiwiZmluZEFsbElucHV0cyIsImlzTmF0aXZlSW5wdXQiLCJjb250YWluc09ubHlJbmxpbmVFbGVtZW50cyIsImdldERlZXBlc3RCbG9ja0VsZW1lbnRzIiwiZ2V0RGVlcGVzdE5vZGUiLCJub2RlVHlwZSIsIkVMRU1FTlRfTk9ERSIsImlzRWxlbWVudCIsImlzRnJhZ21lbnQiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiaXNDb250ZW50RWRpdGFibGUiLCJjb250ZW50RWRpdGFibGUiLCJjYW5TZXRDYXJldCIsInR5cGUiLCJpc05vZGVFbXB0eSIsInRleHRDb250ZW50IiwiUmVnRXhwIiwiaXNMZWFmIiwiY2hpbGROb2RlcyIsImlzRW1wdHkiLCJmcm9tIiwiaXNIVE1MU3RyaW5nIiwiaW5uZXJIVE1MIiwiY2hpbGRFbGVtZW50Q291bnQiLCJnZXRDb250ZW50TGVuZ3RoIiwiVEVYVF9OT0RFIiwiYmxvY2tFbGVtZW50cyIsImNoaWxkcmVuIiwiZXZlcnkiLCJnZXRIb2xkZXIiLCJpc0FuY2hvciIsIm9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhZ2VYT2Zmc2V0IiwicGFnZVlPZmZzZXQiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwiaGVpZ2h0IiwicmlnaHQiLCJ3aWR0aCIsImFpIiwibGkiLCJwYXJzZUZsb2F0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicGFkZGluZ1RvcCIsImJvcmRlclRvcFdpZHRoIiwibWFyZ2luVG9wIiwiRG8iLCJkYXRhc2V0IiwiZW1wdHkiLCJjaSIsImJsb2NrVHVuZXMiLCJ0b2dnbGVyIiwiaW5saW5lVG9vbGJhciIsImNvbnZlcnRlciIsInRvb2xiYXIiLCJ0b29sYm94IiwiQWRkIiwicG9wb3ZlciIsIkZpbHRlciIsImRpIiwiVGV4dCIsIkxpbmsiLCJCb2xkIiwiSXRhbGljIiwidWkiLCJsaW5rIiwic3R1YiIsImhpIiwiZGVsZXRlIiwiRGVsZXRlIiwibW92ZVVwIiwibW92ZURvd24iLCJGbyIsInRvb2xOYW1lcyIsInRvb2xzIiwiam8iLCJoZSIsIl90Iiwic2V0RGljdGlvbmFyeSIsImN1cnJlbnREaWN0aW9uYXJ5IiwiZ2V0TmFtZXNwYWNlIiwieiIsIkhvIiwiRXJyb3IiLCJPZSIsInN1YnNjcmliZXJzIiwib24iLCJvbmNlIiwic3BsaWNlIiwiZW1pdCIsIm9mZiIsIndhcm4iLCJkZXN0cm95IiwiSiIsInNldFByb3RvdHlwZU9mIiwiaWQiLCJjb25maWciLCJob2xkZXIiLCJzZWxlY3RlZCIsInN0cmV0Y2hlZCIsImZvY3VzYWJsZSIsInNhdmUiLCJ2YWxpZGF0ZSIsImRpc3BhdGNoQ2hhbmdlIiwiZ2V0QWN0aXZlVG9vbGJveEVudHJ5IiwiX2UiLCJhbGxMaXN0ZW5lcnMiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIm9wdGlvbnMiLCJmaW5kT25lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmZCeUlkIiwiZmluZEJ5SWQiLCJmaW5kQnlFdmVudFRhcmdldCIsInJlbW92ZUFsbCIsImZpbmRCeVR5cGUiLCJmaW5kQnlIYW5kbGVyIiwiRSIsImV2ZW50c0Rpc3BhdGNoZXIiLCJub2RlcyIsImxpc3RlbmVycyIsInJlYWRPbmx5TXV0YWJsZUxpc3RlbmVycyIsIm11dGFibGVMaXN0ZW5lcklkcyIsImNsZWFyQWxsIiwibmV3IiwidGFyZ2V0IiwiVHlwZUVycm9yIiwic3RhdGUiLCJFZGl0b3IiLCJyZW1vdmVBbGxOb2RlcyIsIkhUTUxFbGVtZW50IiwicmVtb3ZlIiwiaXNSdGwiLCJpMThuIiwiZGlyZWN0aW9uIiwiYiIsImluc3RhbmNlIiwic2VsZWN0aW9uIiwic2F2ZWRTZWxlY3Rpb25SYW5nZSIsImlzRmFrZUJhY2tncm91bmRFbmFibGVkIiwiY29tbWFuZEJhY2tncm91bmQiLCJjb21tYW5kUmVtb3ZlRm9ybWF0IiwiQ1NTIiwiZWRpdG9yV3JhcHBlciIsImVkaXRvclpvbmUiLCJhbmNob3JOb2RlIiwiZ2V0U2VsZWN0aW9uIiwiYW5jaG9yRWxlbWVudCIsImFuY2hvck9mZnNldCIsImlzQ29sbGFwc2VkIiwiaXNBdEVkaXRvciIsImlzU2VsZWN0aW9uQXRFZGl0b3IiLCJmb2N1c05vZGUiLCJpc1JhbmdlQXRFZGl0b3IiLCJzdGFydENvbnRhaW5lciIsImlzU2VsZWN0aW9uRXhpc3RzIiwicmFuZ2UiLCJnZXRSYW5nZUZyb21TZWxlY3Rpb24iLCJyYW5nZUNvdW50IiwiZ2V0UmFuZ2VBdCIsInJlY3QiLCJ4IiwiY3JlYXRlUmFuZ2UiLCJib3VuZGluZ0xlZnQiLCJib3VuZGluZ1RvcCIsImJvdW5kaW5nV2lkdGgiLCJib3VuZGluZ0hlaWdodCIsImlzTmFOIiwiY2xvbmVSYW5nZSIsImluc2VydE5vZGUiLCJub3JtYWxpemUiLCJzZXRDdXJzb3IiLCJmb2N1cyIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImlzUmFuZ2VJbnNpZGVDb250YWluZXIiLCJhZGRGYWtlQ3Vyc29yIiwibXV0YXRpb25GcmVlIiwiY29sbGFwc2UiLCJpc0Zha2VDdXJzb3JJbnNpZGVDb250YWluZXIiLCJyZW1vdmVGYWtlQ3Vyc29yIiwiYm9keSIsInJlbW92ZUZha2VCYWNrZ3JvdW5kIiwiZXhlY0NvbW1hbmQiLCJzZXRGYWtlQmFja2dyb3VuZCIsInJlc3RvcmUiLCJjbGVhclNhdmVkIiwiY29sbGFwc2VUb0VuZCIsInNlbGVjdE5vZGVDb250ZW50cyIsImZpbmRQYXJlbnRUYWciLCJleHBhbmRUb1RhZyIsInBpIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImF0dHJpYnV0ZU5hbWUiLCJzb21lIiwiZnQiLCIkbyIsInpvIiwiVW8iLCJUZSIsImd0IiwiY29udmVyc2lvbkNvbmZpZyIsIkhlIiwidG9vbCIsIldvIiwiZW50cmllcyIsIllvIiwiaWNvbiIsInhvIiwibWVyZ2VhYmxlIiwiZmkiLCJleHBvcnQiLCJCbyIsImltcG9ydCIsIl8iLCJEZWZhdWx0IiwiU2VwYXJhdG9yIiwiSHRtbCIsImVlIiwiQVBQRU5EX0NBTExCQUNLIiwiUkVOREVSRUQiLCJNT1ZFRCIsIlVQREFURUQiLCJSRU1PVkVEIiwiT05fUEFTVEUiLCJSIiwicmVhZE9ubHkiLCJ0dW5lc0RhdGEiLCJjYWNoZWRJbnB1dHMiLCJ0b29sUmVuZGVyZWRFbGVtZW50IiwidHVuZXNJbnN0YW5jZXMiLCJNYXAiLCJkZWZhdWx0VHVuZXNJbnN0YW5jZXMiLCJ1bmF2YWlsYWJsZVR1bmVzRGF0YSIsImlucHV0SW5kZXgiLCJlZGl0b3JFdmVudEJ1cyIsImhhbmRsZUZvY3VzIiwiZHJvcElucHV0c0NhY2hlIiwidXBkYXRlQ3VycmVudElucHV0IiwiZGlkTXV0YXRlZCIsIklucHV0RXZlbnQiLCJkZXRlY3RUb29sUm9vdENoYW5nZSIsInAiLCJnIiwiZiIsInYiLCJUIiwidG9nZ2xlSW5wdXRzRW1wdHlNYXJrIiwic2V0dGluZ3MiLCJibG9ja0FQSSIsInRvb2xJbnN0YW5jZSIsImNyZWF0ZSIsInR1bmVzIiwiY29tcG9zZVR1bmVzIiwiY29tcG9zZSIsIndhdGNoQmxvY2tNdXRhdGlvbnMiLCJhZGRJbnB1dEV2ZW50cyIsIndyYXBwZXIiLCJ3cmFwcGVyU3RyZXRjaGVkIiwiY29udGVudCIsImRyb3BUYXJnZXQiLCJpbnB1dHMiLCJjdXJyZW50SW5wdXQiLCJmaW5kSW5kZXgiLCJmaXJzdElucHV0IiwibGFzdElucHV0IiwibmV4dElucHV0IiwicHJldmlvdXNJbnB1dCIsInRoZW4iLCJzYW5pdGl6ZSIsInNhbml0aXplQ29uZmlnIiwibWVyZ2UiLCJwbHVnaW5zQ29udGVudCIsImhhc01lZGlhIiwidG9nZ2xlIiwibWVzc2FnZSIsIm1lcmdlV2l0aCIsInBlcmZvcm1hbmNlIiwidGltZSIsImNhdGNoIiwiRnVuY3Rpb24iLCJnZXRUdW5lcyIsInJlbmRlclNldHRpbmdzIiwidmFsdWVzIiwicmVuZGVyIiwidG9vbFR1bmVzIiwiY29tbW9uVHVuZXMiLCJhY3RpdmVFbGVtZW50IiwidW53YXRjaEJsb2NrTXV0YXRpb25zIiwicmVtb3ZlSW5wdXRFdmVudHMiLCJleHBvcnREYXRhQXNTdHJpbmciLCJzZXRBdHRyaWJ1dGUiLCJ3cmFwIiwiaXNJbnRlcm5hbCIsImhhcyIsInJlZGFjdG9yRG9tQ2hhbmdlZENhbGxiYWNrIiwibXV0YXRpb25zIiwiZ2kiLCJpbnNlcnQiLCJkZWZhdWx0QmxvY2siLCJCbG9ja01hbmFnZXIiLCJpbmRleCIsIm5lZWRUb0ZvY3VzIiwiY29tcG9zZUJsb2NrRGF0YSIsIlRvb2xzIiwiYmxvY2tUb29scyIsImFwaSIsIkFQSSIsInVwZGF0ZSIsImdldEJsb2NrQnlJZCIsImNvbnZlcnQiLCJoIiwiQm9vbGVhbiIsImluc2VydE1hbnkiLCJibG9ja3MiLCJ2YWxpZGF0ZUluZGV4IiwiY29tcG9zZUJsb2NrIiwibWV0aG9kcyIsImNsZWFyIiwicmVuZGVyRnJvbUhUTUwiLCJtb3ZlIiwiZ2V0QmxvY2tCeUluZGV4IiwiZ2V0QnlJZCIsImdldEN1cnJlbnRCbG9ja0luZGV4IiwiZ2V0QmxvY2tJbmRleCIsImdldEJsb2Nrc0NvdW50IiwiZ2V0QmxvY2tCeUVsZW1lbnQiLCJzdHJldGNoQmxvY2siLCJpbnNlcnROZXdCbG9jayIsImN1cnJlbnRCbG9ja0luZGV4IiwiZ2V0QmxvY2siLCJyZW1vdmVCbG9jayIsImN1cnJlbnRCbG9jayIsIkNhcmV0Iiwic2V0VG9CbG9jayIsInBvc2l0aW9ucyIsIkVORCIsIlRvb2xiYXIiLCJjbG9zZSIsIklubGluZVRvb2xiYXIiLCJNb2RpZmljYXRpb25zT2JzZXJ2ZXIiLCJkaXNhYmxlIiwiUmVuZGVyZXIiLCJlbmFibGUiLCJQYXN0ZSIsInByb2Nlc3NUZXh0IiwibWkiLCJiaSIsInNldFRvRmlyc3RCbG9jayIsIkRFRkFVTFQiLCJmaXJzdEJsb2NrIiwic2V0VG9MYXN0QmxvY2siLCJsYXN0QmxvY2siLCJzZXRUb1ByZXZpb3VzQmxvY2siLCJwcmV2aW91c0Jsb2NrIiwic2V0VG9OZXh0QmxvY2siLCJuZXh0QmxvY2siLCJTVEFSVCIsInZpIiwia3QiLCJnZXRNZXRob2RzRm9yVG9vbCIsImtpIiwiQmxvY2tzQVBJIiwiY2FyZXQiLCJDYXJldEFQSSIsIlRvb2xzQVBJIiwiZXZlbnRzIiwiRXZlbnRzQVBJIiwiTGlzdGVuZXJzQVBJIiwibm90aWZpZXIiLCJOb3RpZmllckFQSSIsInNhbml0aXplciIsIlNhbml0aXplckFQSSIsInNhdmVyIiwiU2F2ZXJBUEkiLCJTZWxlY3Rpb25BUEkiLCJzdHlsZXMiLCJTdHlsZXNBUEkiLCJjbGFzc2VzIiwiVG9vbGJhckFQSSIsIklubGluZVRvb2xiYXJBUEkiLCJ0b29sdGlwIiwiVG9vbHRpcEFQSSIsIkkxOG5BUEkiLCJSZWFkT25seUFQSSIsIlVpQVBJIiwieWkiLCJ0cnlUb1Nob3ciLCJ3aSIsIktvIiwibSIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwic2hvdyIsImdldFdyYXBwZXIiLCJjb25maXJtIiwicHJvbXB0IiwiYWxlcnQiLCJobXIiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRJbnRvIiwibG9jYWxzIiwiYnRvYSIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic291cmNlcyIsInNvdXJjZVJvb3QiLCJjb25jYXQiLCJhbGwiLCJhdG9iIiwiayIsInciLCJJIiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJyZWZzIiwiQyIsInBhcnRzIiwiRiIsIk4iLCJiYXNlIiwiQiIsImNzcyIsIm1lZGlhIiwic291cmNlTWFwIiwiTyIsImluc2VydEF0IiwibmV4dFNpYmxpbmciLCJiZWZvcmUiLCJNIiwiYXR0cnMiLCJxIiwic2luZ2xldG9uIiwiaWUiLCJjcmVhdGVPYmplY3RVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJCbG9iIiwiVyIsInJlbCIsInZlIiwic2UiLCJ0dCIsIlluIiwiY29udmVydFRvQWJzb2x1dGVVcmxzIiwiS24iLCJrbyIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiREVCVUciLCJIIiwiUSIsImhvc3QiLCJwYXRobmFtZSIsInRyaW0iLCJzdHlsZSIsImNhbmNlbEhhbmRsZXIiLCJva0hhbmRsZXIiLCJva1RleHQiLCJjYW5jZWxUZXh0IiwicGxhY2Vob2xkZXIiLCJpbnB1dFR5cGUiLCJFaSIsInhpIiwiQmkiLCJDaSIsIlRpIiwiaXNFbmFibGVkIiwiUmVhZE9ubHkiLCJYbyIsInRhZ3MiLCJub2RlTmFtZSIsImNsZWFuIiwiaW1wbGVtZW50YXRpb24iLCJjcmVhdGVIVE1MRG9jdW1lbnQiLCJfc2FuaXRpemUiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiQ09NTUVOVF9OT0RFIiwia2VlcE5lc3RlZEJsb2NrRWxlbWVudHMiLCJhdHRyaWJ1dGVzIiwicmVtb3ZlQXR0cmlidXRlIiwiY3JlYXRlVHJlZVdhbGtlciIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJTSE9XX0VMRU1FTlQiLCJTSE9XX0NPTU1FTlQiLCJTaSIsIklpIiwieXQiLCJ3dCIsIloiLCJPaSIsIl9pIiwiTWkiLCJBaSIsIkxpIiwiUGkiLCJyZWplY3QiLCJTYXZlciIsIk5pIiwic2VsZWN0aW9uVXRpbHMiLCJSaSIsImdldEJsb2NrVG9vbHMiLCJEaSIsImJsb2NrIiwiaW5saW5lVG9vbEJ1dHRvbiIsImlubGluZVRvb2xCdXR0b25BY3RpdmUiLCJpbnB1dCIsImxvYWRlciIsImJ1dHRvbiIsInNldHRpbmdzQnV0dG9uIiwic2V0dGluZ3NCdXR0b25BY3RpdmUiLCJGaSIsInRvZ2dsZUJsb2NrU2V0dGluZ3MiLCJ0b2dnbGVUb29sYm94IiwibW92ZUFuZE9wZW4iLCJCbG9ja1NldHRpbmdzIiwib3BlbmVkIiwiVm8iLCJzaG93ZWQiLCJvZmZzZXRSaWdodCIsImhpZGluZ0RlbGF5IiwiaGFuZGxlV2luZG93U2Nyb2xsIiwiaGlkZSIsImxvYWRTdHlsZXMiLCJwcmVwYXJlIiwicGFzc2l2ZSIsInRvb2x0aXBDb250ZW50IiwidG9vbHRpcFNob3duIiwicGxhY2VtZW50IiwiaGlkaW5nVGltZW91dCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImRlbGF5IiwicGxhY2VUb3AiLCJwbGFjZUxlZnQiLCJwbGFjZVJpZ2h0IiwicGxhY2VCb3R0b20iLCJzaG93aW5nVGltZW91dCIsIm9uSG92ZXIiLCJvZmZzZXRXaWR0aCIsImFwcGx5UGxhY2VtZW50Iiwib2Zmc2V0SGVpZ2h0IiwiamkiLCJIaSIsIlUiLCJFdCIsIiRpIiwiJGUiLCJ6ZSIsInppIiwiVWkiLCJXaSIsImVkaXRvck5vZGVzIiwiVUkiLCJyZWRhY3RvciIsInFvIiwiSyIsIllpIiwiWm8iLCJFZSIsImN1cnNvciIsIml0ZW1zIiwiZm9jdXNlZENzc0NsYXNzIiwiY3VycmVudEl0ZW0iLCJkcm9wQ3Vyc29yIiwic2V0SXRlbXMiLCJuZXh0IiwibGVhZk5vZGVzQW5kUmV0dXJuSW5kZXgiLCJkaXJlY3Rpb25zIiwicHJldmlvdXMiLCJrZSIsImNlIiwiaXRlcmF0b3IiLCJhY3RpdmF0ZWQiLCJmbGlwQ2FsbGJhY2tzIiwib25LZXlEb3duIiwiaXNFdmVudFJlYWR5Rm9ySGFuZGxpbmciLCJ1c2VkS2V5cyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVRhYlByZXNzIiwiZmxpcExlZnQiLCJmbGlwUmlnaHQiLCJoYW5kbGVFbnRlclByZXNzIiwiZm9jdXNlZEl0ZW1DbGFzcyIsImFjdGl2YXRlQ2FsbGJhY2siLCJhbGxvd2VkS2V5cyIsImlzQWN0aXZhdGVkIiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiZm9jdXNGaXJzdCIsImZsaXBDYWxsYmFjayIsImhhc0ZvY3VzIiwib25GbGlwIiwicmVtb3ZlT25GbGlwIiwic2hpZnRLZXkiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGljayIsIktpIiwiWGkiLCJWaSIsInFpIiwiWmkiLCJHaSIsIlFpIiwiSmkiLCJDbyIsImVzIiwidHMiLCJHbyIsIm9zIiwibnMiLCJpcyIsInNzIiwicnMiLCJuZSIsInllIiwid2UiLCJyb290IiwiYWxpZ25lZFN0YXJ0IiwiYWxpZ25lZENlbnRlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhcyIsImFsaWdubWVudCIsImdldEVsZW1lbnQiLCJ4dCIsInBhcmFtcyIsIm9uQ2hpbGRyZW5PcGVuIiwib25PcGVuIiwib25DaGlsZHJlbkNsb3NlIiwib25DbG9zZSIsImhhbmRsZUNsaWNrIiwib25BY3RpdmF0ZSIsImFkZEhpbnQiLCJwb3NpdGlvbiIsImhhc0NoaWxkcmVuIiwiaXNDaGlsZHJlbk9wZW4iLCJpc09wZW4iLCJpc0NoaWxkcmVuRmxpcHBhYmxlIiwiaXNGbGlwcGFibGUiLCJpc0NoaWxkcmVuU2VhcmNoYWJsZSIsInNlYXJjaGFibGUiLCJjbG9zZU9uQWN0aXZhdGUiLCJpc0FjdGl2ZSIsIlkiLCJMIiwiY29udGFpbmVyIiwiYWN0aXZlIiwiZGlzYWJsZWQiLCJmb2N1c2VkIiwiaGlkZGVuIiwiY29uZmlybWF0aW9uU3RhdGUiLCJub0hvdmVyIiwibm9Gb2N1cyIsInNlY29uZGFyeVRpdGxlIiwiaWNvblRvb2wiLCJpY29uQ2hldnJvblJpZ2h0Iiwid29iYmxlQW5pbWF0aW9uIiwicmUiLCJyZW1vdmVTcGVjaWFsRm9jdXNCZWhhdmlvciIsInJlbW92ZVNwZWNpYWxIb3ZlckJlaGF2aW9yIiwib25FcnJvckFuaW1hdGlvbkVuZCIsImlzRGlzYWJsZWQiLCJpc0NvbmZpcm1hdGlvblN0YXRlRW5hYmxlZCIsImlzRm9jdXNlZCIsImFjdGl2YXRlT3JFbmFibGVDb25maXJtYXRpb25Nb2RlIiwidG9nZ2xlQWN0aXZlIiwidG9nZ2xlSGlkZGVuIiwicmVzZXQiLCJkaXNhYmxlQ29uZmlybWF0aW9uTW9kZSIsIm9uRm9jdXMiLCJkaXNhYmxlU3BlY2lhbEhvdmVyQW5kRm9jdXNCZWhhdmlvciIsIndyYXBwZXJUYWciLCJpdGVtTmFtZSIsInNlY29uZGFyeUxhYmVsIiwiaGludCIsImVuYWJsZWQiLCJlbmFibGVDb25maXJtYXRpb25Nb2RlIiwiY29uZmlybWF0aW9uIiwiZW5hYmxlU3BlY2lhbEhvdmVyQW5kRm9jdXNCZWhhdmlvciIsImFuaW1hdGVFcnJvciIsIm50IiwiaXQiLCJsaW5lIiwiUW8iLCJHIiwiQ2xvc2VkIiwiQ2xvc2VkT25BY3RpdmF0ZSIsIiQiLCJQIiwicG9wb3ZlckNvbnRhaW5lciIsInBvcG92ZXJPcGVuVG9wIiwicG9wb3Zlck9wZW5MZWZ0IiwicG9wb3Zlck9wZW5lZCIsInNlYXJjaCIsIm5vdGhpbmdGb3VuZE1lc3NhZ2UiLCJub3RoaW5nRm91bmRNZXNzYWdlRGlzcGxheWVkIiwib3ZlcmxheSIsIm92ZXJsYXlIaWRkZW4iLCJwb3BvdmVyTmVzdGVkIiwiZ2V0UG9wb3Zlck5lc3RlZENsYXNzIiwicG9wb3ZlcklubGluZSIsInBvcG92ZXJIZWFkZXIiLCJmZSIsIk5lc3RpbmdMZXZlbCIsIlBvcG92ZXJIZWlnaHQiLCJJbmxpbmVQb3BvdmVyV2lkdGgiLCJUcmlnZ2VySXRlbUxlZnQiLCJUcmlnZ2VySXRlbVRvcCIsIlRvIiwiU28iLCJTZSIsImdldENvbnRyb2xzIiwiSm8iLCJpdGVtc1JlbmRlclBhcmFtcyIsIm1lc3NhZ2VzIiwibm90aGluZ0ZvdW5kIiwiYnVpbGRJdGVtcyIsImNsYXNzIiwiaXRlbXNEZWZhdWx0IiwiYWN0aXZhdGVJdGVtQnlOYW1lIiwiaGFuZGxlSXRlbUNsaWNrIiwiZ2V0VGFyZ2V0SXRlbSIsImNvbXBvc2VkUGF0aCIsInNob3dOZXN0ZWRJdGVtcyIsInRvZ2dsZUl0ZW1BY3RpdmVuZXNzSWZOZWVkZWQiLCJVZSIsIlNlYXJjaCIsInN0IiwicnQiLCJscyIsInRhYkluZGV4Iiwic2VhcmNoUXVlcnkiLCJxdWVyeSIsImZvdW5kSXRlbXMiLCJjaGVja0l0ZW0iLCJjcyIsImRzIiwidXMiLCJlbiIsInRuIiwibmVzdGluZ0xldmVsIiwibmVzdGVkUG9wb3ZlclRyaWdnZXJJdGVtIiwicHJldmlvdXNseUhvdmVyZWRJdGVtIiwic2NvcGVFbGVtZW50IiwiZGVzdHJveU5lc3RlZFBvcG92ZXJJZkV4aXN0cyIsImZsaXBwZXIiLCJvblNlYXJjaCIsInRvZ2dsZU5vdGhpbmdGb3VuZE1lc3NhZ2UiLCJmbGlwcGFibGVFbGVtZW50cyIsImhhbmRsZUhvdmVyIiwiYWRkU2VhcmNoIiwiZmxpcHBhYmxlIiwic2V0UHJvcGVydHkiLCJzaXplIiwic2hvdWxkT3BlbkJvdHRvbSIsInNob3VsZE9wZW5SaWdodCIsIm5lc3RlZFBvcG92ZXIiLCJzaG93TmVzdGVkUG9wb3ZlckZvckl0ZW0iLCJzZXRUcmlnZ2VySXRlbVBvc2l0aW9uIiwibWluIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiY2xvbmVOb2RlIiwidmlzaWJpbGl0eSIsImZsYXQiLCJCdCIsImhzIiwieGUiLCJzY3JvbGxQb3NpdGlvbiIsImxvY2siLCJsb2NrSGFyZCIsInNjcm9sbExvY2tlZCIsInVubG9jayIsInVubG9ja0hhcmQiLCJzY3JvbGxMb2NrZWRIYXJkIiwic2Nyb2xsVG8iLCJwcyIsImF0IiwibHQiLCJiYWNrQnV0dG9uIiwiZnMiLCJvbkJhY2tCdXR0b25DbGljayIsImlubmVyVGV4dCIsImdzIiwiaGlzdG9yeSIsImN1cnJlbnRUaXRsZSIsImN1cnJlbnRJdGVtcyIsIm5uIiwic2Nyb2xsTG9ja2VyIiwiaXNIaWRkZW4iLCJ1cGRhdGVJdGVtc0FuZEhlYWRlciIsImhlYWRlciIsIm1zIiwiQ3Jvc3NCbG9ja1NlbGVjdGlvbiIsImlzQ3Jvc3NCbG9ja1NlbGVjdGlvblN0YXJ0ZWQiLCJCbG9ja1NlbGVjdGlvbiIsInVuc2VsZWN0QmxvY2siLCJjbG9zZWQiLCJvblBvcG92ZXJDbG9zZSIsInNlbGVjdEJsb2NrIiwiY2xlYXJDYWNoZSIsImdldFR1bmVzSXRlbXMiLCJyZXNvbHZlVHVuZUFsaWFzZXMiLCJsYWJlbCIsInNuIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJjb21tYW5kcyIsInBhcnNlU2hvcnRjdXROYW1lIiwiY2FsbGJhY2siLCJleGVjdXRlU2hvcnRjdXQiLCJleGVjdXRlIiwiQ01EIiwiRVNDQVBFIiwiSU5TRVJUIiwic3VwcG9ydGVkQ29tbWFuZHMiLCJjdHJsS2V5IiwibWV0YUtleSIsImFsdEtleSIsImtleUNvZGVzIiwiYnMiLCJ2cyIsImtzIiwicmVnaXN0ZXJlZFNob3J0Y3V0cyIsImZpbmRTaG9ydGN1dCIsImdlIiwieXMiLCJ3cyIsInJuIiwiTGUiLCJPcGVuZWQiLCJCbG9ja0FkZGVkIiwiQ3QiLCJhbiIsImkxOG5MYWJlbHMiLCJoYW5kbGVNb2JpbGVMYXlvdXRUb2dnbGUiLCJkZXN0cm95UG9wb3ZlciIsImluaXRQb3BvdmVyIiwiZW5hYmxlU2hvcnRjdXRzIiwidG9vbHNUb0JlRGlzcGxheWVkIiwicmVtb3ZlQWxsU2hvcnRjdXRzIiwidG9vbEJ1dHRvbkFjdGl2YXRlZCIsInRvb2xib3hJdGVtc1RvQmVEaXNwbGF5ZWQiLCJzaG9ydGN1dCIsImVuYWJsZVNob3J0Y3V0Rm9yVG9vbCIsIkVzIiwibG4iLCJ4cyIsImtleWJvYXJkIiwiZ2V0TGF5b3V0TWFwIiwiQnMiLCJ0b29sYm94SW5zdGFuY2UiLCJhY3Rpb25zIiwiYWN0aW9uc09wZW5lZCIsInRvb2xiYXJPcGVuZWQiLCJvcGVuZWRUb29sYm94SG9sZGVyTW9kaWZpZXIiLCJwbHVzQnV0dG9uIiwicGx1c0J1dHRvblNob3J0Y3V0Iiwic2V0dGluZ3NUb2dnbGVyIiwic2V0dGluZ3NUb2dnbGVySGlkZGVuIiwiaG92ZXJlZEJsb2NrIiwiYmxvY2tBY3Rpb25zIiwiYmxvY2tUdW5lc1RvZ2dsZXIiLCJ0b2dnbGVSZWFkT25seSIsImRpc2FibGVNb2R1bGVCaW5kaW5ncyIsImRyYXdVSSIsImVuYWJsZU1vZHVsZUJpbmRpbmdzIiwidGltZW91dCIsImlzTW9iaWxlIiwicGx1c0J1dHRvbkNsaWNrZWQiLCJtYWtlVG9vbGJveCIsImluc2VydEF0RW5kIiwic2V0dGluZ3NUb2dnbGVyQ2xpY2tlZCIsImFlIiwiQmxvY2siLCJJbmxpbmUiLCJUdW5lIiwiUGUiLCJTaG9ydGN1dCIsIlRvb2xib3giLCJFbmFibGVkSW5saW5lVG9vbHMiLCJFbmFibGVkQmxvY2tUdW5lcyIsIkNvbmZpZyIsImNuIiwiU2FuaXRpemVDb25maWciLCJwZSIsIklzRW5hYmxlZExpbmVCcmVha3MiLCJDb252ZXJzaW9uQ29uZmlnIiwiSXNSZWFkT25seVN1cHBvcnRlZCIsIlBhc3RlQ29uZmlnIiwiV2UiLCJJc0lubGluZSIsIlRpdGxlIiwibXQiLCJJc1R1bmUiLCJUdCIsImNvbnN0cnVjdGFibGUiLCJpc0RlZmF1bHQiLCJkZWZhdWx0UGxhY2Vob2xkZXIiLCJ0b29sTmFtZSIsImlzSW5saW5lIiwiaXNCbG9jayIsImlzVHVuZSIsIkNzIiwidG9vbGJhclZlcnRpY2FsTWFyZ2luIiwiYWxsb3dlZFRvU2hvdyIsImdldFRvb2xTaG9ydGN1dCIsImNvbnRhaW5zTm9kZSIsImVkaXRvclJ0bEZpeCIsImNyZWF0ZVRvb2xzSW5zdGFuY2VzIiwiZ2V0UG9wb3Zlckl0ZW1zIiwiY29udGVudFJlY3QiLCJnZXRUb29scyIsImlubGluZVRvb2xzIiwiaXNSZWFkT25seVN1cHBvcnRlZCIsInRvb2xDbGlja2VkIiwicmVuZGVyQWN0aW9ucyIsImNoZWNrU3RhdGUiLCJpbnRlcm5hbCIsImVuYWJsZWRJbmxpbmVUb29scyIsInN1cnJvdW5kIiwiY2hlY2tUb29sc1N0YXRlIiwiZG4iLCJmb2N1c09mZnNldCIsInVuIiwiY2xvbmVDb250ZW50cyIsIk5lIiwiUmUiLCJobiIsIlN0IiwiWGUiLCJkZSIsIkl0IiwiT3QiLCJUcyIsInVlIiwiU3MiLCJwbiIsIk10IiwiSXMiLCJBdCIsIkx0IiwiT3MiLCJmbiIsIlB0IiwiY2FsY3VsYXRlQmFzZWxpbmUiLCJfcyIsImduIiwiTnQiLCJSdCIsIkR0IiwiTXMiLCJQcyIsIkFzIiwiTHMiLCJWZSIsIkZ0IiwiTnMiLCJtbiIsImp0IiwiUnMiLCJEcyIsIkZzIiwianMiLCJIcyIsInNlbGVjdE5vZGUiLCIkcyIsIm9lIiwienMiLCJibiIsIlVzIiwiV3MiLCJEZSIsIllzIiwiS3MiLCJYcyIsImJ0IiwiVnMiLCJxcyIsIlpzIiwiR3MiLCJRcyIsIkpzIiwiY29tcGxldGVkIiwiZXIiLCJ0ciIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsIlByb21pc2VRdWV1ZSIsImJlYXV0aWZ5U2hvcnRjdXQiLCJjYWNoZWFibGUiLCJjYXBpdGFsaXplIiwiY29weVRleHRUb0NsaXBib2FyZCIsImRlYm91bmNlIiwiZGVlcE1lcmdlIiwiZGVwcmVjYXRpb25Bc3NlcnQiLCJnZXRVc2VyT1MiLCJnZXRWYWxpZFVybCIsImlzQm9vbGVhbiIsImlzQ2xhc3MiLCJpc0Z1bmN0aW9uIiwiaXNJb3NEZXZpY2UiLCJpc051bWJlciIsImlzT2JqZWN0IiwiaXNQcmludGFibGVLZXkiLCJpc1Byb21pc2UiLCJpc1N0cmluZyIsImlzVW5kZWZpbmVkIiwibW91c2VCdXR0b25zIiwibm90RW1wdHkiLCJ0aHJvdHRsZSIsInR5cGVPZiIsIkh0IiwiaXIiLCJvciIsIm5yIiwidm4iLCIkdCIsInFlIiwienQiLCJzciIsImZyYWdtZW50VG9TdHJpbmciLCJhciIsInJyIiwia24iLCJVdCIsImNyIiwibHIiLCJXdCIsIll0IiwiSW8iLCJfX3NwcmVhZEFycmF5IiwieW4iLCJkciIsInduIiwiS3QiLCJaZSIsIlh0IiwidXIiLCJHZSIsIlZ0IiwiaHIiLCJFbiIsInByIiwiZnIiLCJnciIsInhuIiwicXQiLCJNZSIsInlyIiwibXIiLCJiciIsInZyIiwia3IiLCJCbiIsIlp0IiwiaXNDb2xsYXBzZWRXaGl0ZXNwYWNlcyIsIndyIiwiR3QiLCJRdCIsInhyIiwiRXIiLCJDbiIsIkp0IiwiZW8iLCJ0byIsIkJyIiwib28iLCJubyIsIk9yIiwiQ3IiLCJUciIsIlNyIiwiSXIiLCJBciIsIl9yIiwiTXIiLCJUbiIsImlvIiwiUHIiLCJMciIsIlNuIiwic28iLCJSciIsIk5yIiwiSW4iLCJybyIsIkRyIiwiT24iLCJhbyIsIkZyIiwiUWUiLCJnZXRDb250ZW50ZWRpdGFibGVTbGljZSIsIkhyIiwianIiLCJleHRyYWN0Q29udGVudHMiLCJjaGVja0NvbnRlbnRlZGl0YWJsZVNsaWNlRm9yRW1wdGluZXNzIiwiVXIiLCIkciIsInpyIiwiX24iLCJNbiIsImxvIiwiWXIiLCJXciIsInNldFNlbGVjdGlvblJhbmdlIiwibGFzdENoaWxkIiwiY28iLCJKZSIsImdldENhcmV0Tm9kZUFuZE9mZnNldCIsIktyIiwiQW4iLCJldCIsImdldFJhbmdlIiwiWHIiLCJMbiIsInVvIiwiaXNDYXJldEF0RW5kT2ZJbnB1dCIsIlpyIiwiT28iLCJWciIsInFyIiwiUG4iLCJobyIsImlzQ2FyZXRBdFN0YXJ0T2ZJbnB1dCIsIkpyIiwiQWUiLCJHciIsIlFyIiwiTm4iLCJwbyIsIm9hIiwiZWEiLCJ0YSIsInNldFN0YXJ0QWZ0ZXIiLCJzZXRFbmRBZnRlciIsIm5hIiwia2V5ZG93biIsImJlZm9yZUtleWRvd25Qcm9jZXNzaW5nIiwiYmFja3NwYWNlIiwiZW50ZXIiLCJhcnJvd1JpZ2h0QW5kRG93biIsImFycm93TGVmdEFuZFVwIiwidGFiUHJlc3NlZCIsInNsYXNoUHJlc3NlZCIsImNvZGUiLCJjb21tYW5kU2xhc2hQcmVzc2VkIiwibmVlZFRvb2xiYXJDbG9zaW5nIiwiY2xlYXJTZWxlY3Rpb24iLCJrZXl1cCIsImNoZWNrRW1wdGluZXNzIiwiZHJhZ092ZXIiLCJnZXRCbG9ja0J5Q2hpbGROb2RlIiwiZHJhZ0xlYXZlIiwiaGFuZGxlQ29tbWFuZEMiLCJhbnlCbG9ja1NlbGVjdGVkIiwiY29weVNlbGVjdGVkQmxvY2tzIiwiaGFuZGxlQ29tbWFuZFgiLCJyZW1vdmVTZWxlY3RlZEJsb2NrcyIsImluc2VydERlZmF1bHRCbG9ja0F0SW5kZXgiLCJuYXZpZ2F0ZVByZXZpb3VzIiwibmF2aWdhdGVOZXh0Iiwic2VsZWN0ZWRCbG9ja3MiLCJhY3RpdmF0ZUJsb2NrU2V0dGluZ3MiLCJpbnNlcnRDb250ZW50QXRDYXJldFBvc2l0aW9uIiwiYWN0aXZhdGVUb29sYm94IiwiaXNMaW5lQnJlYWtzRW5hYmxlZCIsInNvbWVUb29sYmFyT3BlbmVkIiwic29tZUZsaXBwZXJCdXR0b25Gb2N1c2VkIiwibWVyZ2VCbG9ja3MiLCJ0b2dnbGVCbG9ja1NlbGVjdGVkU3RhdGUiLCJjbG9zZUFsbFRvb2xiYXJzIiwiY3QiLCJ3b3JraW5nQXJlYSIsImFycmF5IiwiTnVtYmVyIiwiaW5zZXJ0VG9ET00iLCJjb21wb3NlQmxvY2tFdmVudCIsImZyb21JbmRleCIsInRvSW5kZXgiLCJyZXBsYWNlV2l0aCIsIkRvY3VtZW50RnJhZ21lbnQiLCJhZnRlciIsImluc2VydEFmdGVyIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJfbyIsIk1vIiwiaWEiLCJBbyIsInNhIiwicmEiLCJfY3VycmVudEJsb2NrSW5kZXgiLCJfYmxvY2tzIiwibmV4dENvbnRlbnRmdWxCbG9jayIsInByZXZpb3VzQ29udGVudGZ1bEJsb2NrIiwiaXNFZGl0b3JFbXB0eSIsIlByb3h5IiwiQmxvY2tFdmVudHMiLCJiaW5kQmxvY2tFdmVudHMiLCJibG9ja0RpZE11dGF0ZWQiLCJwYXN0ZSIsInVuc2V0Q3VycmVudEJsb2NrIiwicmVtb3ZlQWxsQmxvY2tzIiwiZXh0cmFjdEZyYWdtZW50RnJvbUNhcmV0UG9zaXRpb24iLCJzZXRDdXJyZW50QmxvY2tCeUNoaWxkTm9kZSIsImlzRXF1YWxOb2RlIiwiZXZlbnQiLCJhYSIsImFueUJsb2NrU2VsZWN0ZWRDYWNoZSIsIm5lZWRUb1NlbGVjdEFsbCIsIm5hdGl2ZUlucHV0U2VsZWN0ZWQiLCJyZWFkeVRvQmxvY2tTZWxlY3Rpb24iLCJzYW5pdGl6ZXJDb25maWciLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJvbCIsInVsIiwiaW1nIiwic3JjIiwiYWxsQmxvY2tzU2VsZWN0ZWQiLCJzZWxlY3RBbGxCbG9ja3MiLCJoYW5kbGVDb21tYW5kQSIsInVuU2VsZWN0QmxvY2tCeUluZGV4IiwiUmVjdGFuZ2xlU2VsZWN0aW9uIiwiS2V5Ym9hcmRFdmVudCIsImlzUmVjdEFjdGl2YXRlZCIsImNsaXBib2FyZERhdGEiLCJzZXREYXRhIiwiTUlNRV9UWVBFIiwic2VsZWN0QmxvY2tCeUluZGV4IiwiWWUiLCJzaGFkb3dDYXJldCIsInNldFRvSW5wdXQiLCJzY3JvbGxCeSIsInNldFRvVGhlTGFzdEJsb2NrIiwiZGVsZXRlQ29udGVudHMiLCJlbmRDb250YWluZXIiLCJlbmRPZmZzZXQiLCJjcmVhdGVTaGFkb3ciLCJyZXN0b3JlQ2FyZXQiLCJsYSIsIm9uTW91c2VVcCIsIm9uTW91c2VPdmVyIiwicmVsYXRlZFRhcmdldCIsImxhc3RTZWxlY3RlZEJsb2NrIiwiZmlyc3RTZWxlY3RlZEJsb2NrIiwidG9nZ2xlQmxvY2tzU2VsZWN0ZWRTdGF0ZSIsImVuYWJsZUNyb3NzQmxvY2tTZWxlY3Rpb24iLCJ3YXRjaFNlbGVjdGlvbiIsImNhIiwiaXNTdGFydGVkQXRFZGl0b3IiLCJwcm9jZXNzRHJvcCIsInByb2Nlc3NEcmFnU3RhcnQiLCJwcm9jZXNzRHJhZ092ZXIiLCJwcm9jZXNzRGF0YVRyYW5zZmVyIiwiZGF0YVRyYW5zZmVyIiwiZGEiLCJ1YSIsImhhIiwiYmF0Y2hpbmdUaW1lb3V0IiwiYmF0Y2hpbmdPbkNoYW5nZVF1ZXVlIiwiYmF0Y2hUaW1lIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJyZWRhY3RvckNoYW5nZWQiLCJwYXJ0aWN1bGFyQmxvY2tDaGFuZ2VkIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJjaGFyYWN0ZXJEYXRhIiwiZGlzY29ubmVjdCIsIm9uQ2hhbmdlIiwiUm4iLCJEbiIsInRvb2xzVGFncyIsInRhZ3NCeVRvb2wiLCJ0b29sc1BhdHRlcm5zIiwidG9vbHNGaWxlcyIsImV4Y2VwdGlvbkxpc3QiLCJwcm9jZXNzVG9vbCIsInBhc3RlQ29uZmlnIiwib25QYXN0ZSIsImdldFRhZ3NDb25maWciLCJnZXRGaWxlc0NvbmZpZyIsImdldFBhdHRlcm5zQ29uZmlnIiwiaGFuZGxlUGFzdGVFdmVudCIsImlzTmF0aXZlQmVoYXZpb3VyIiwidHlwZXMiLCJwcm9jZXNzVG9vbHMiLCJ1bnNldENhbGxiYWNrIiwic2V0Q2FsbGJhY2siLCJwcm9jZXNzRmlsZXMiLCJmaWxlcyIsImdldERhdGEiLCJpbnNlcnRFZGl0b3JKU0RhdGEiLCJwYXJzZSIsInNhbml0aXphdGlvbkNvbmZpZyIsImdldEFsbElubGluZVRvb2xzU2FuaXRpemVDb25maWciLCJwcm9jZXNzSFRNTCIsInByb2Nlc3NQbGFpbiIsInByb2Nlc3NTaW5nbGVCbG9jayIsInByb2Nlc3NJbmxpbmVQYXN0ZSIsImluc2VydEJsb2NrIiwiY29sbGVjdFRhZ05hbWVzIiwiZXh0ZW5zaW9ucyIsIm1pbWVUeXBlcyIsInBhdHRlcm5zIiwicGF0dGVybiIsInByb2Nlc3NGaWxlIiwiY29tcG9zZVBhc3RlRXZlbnQiLCJmaWxlIiwiZ2V0Tm9kZXMiLCJkZWZhdWx0VG9vbCIsImJhc2VTYW5pdGl6ZUNvbmZpZyIsIm91dGVySFRNTCIsIlBBVFRFUk5fUFJPQ0VTU0lOR19NQVhfTEVOR1RIIiwicHJvY2Vzc1BhdHRlcm4iLCJleGVjIiwicHJvY2Vzc0VsZW1lbnROb2RlIiwicGEiLCJmYSIsInRvb2xzRG9udFN1cHBvcnRSZWFkT25seSIsInJlYWRPbmx5RW5hYmxlZCIsInRocm93Q3JpdGljYWxFcnJvciIsIkJlIiwiaXNSZWN0U2VsZWN0aW9uQWN0aXZhdGVkIiwiU0NST0xMX1NQRUVEIiwiSEVJR0hUX09GX1NDUk9MTF9aT05FIiwiQk9UVE9NX1NDUk9MTF9aT05FIiwiVE9QX1NDUk9MTF9aT05FIiwiTUFJTl9NT1VTRV9CVVRUT04iLCJtb3VzZWRvd24iLCJpc1Njcm9sbGluZyIsImluU2Nyb2xsWm9uZSIsInN0YXJ0WCIsInN0YXJ0WSIsIm1vdXNlWCIsIm1vdXNlWSIsInN0YWNrT2ZTZWxlY3RlZCIsImxpc3RlbmVySWRzIiwib3ZlcmxheUNvbnRhaW5lciIsInRvcFNjcm9sbFpvbmUiLCJib3R0b21TY3JvbGxab25lIiwic3RhcnRTZWxlY3Rpb24iLCJlbGVtZW50RnJvbVBvaW50IiwiZW5kU2VsZWN0aW9uIiwib3ZlcmxheVJlY3RhbmdsZSIsImRpc3BsYXkiLCJnZW5IVE1MIiwicHJvY2Vzc01vdXNlRG93biIsInByb2Nlc3NNb3VzZU1vdmUiLCJwcm9jZXNzTW91c2VMZWF2ZSIsInByb2Nlc3NTY3JvbGwiLCJwcm9jZXNzTW91c2VVcCIsInBhZ2VYIiwicGFnZVkiLCJjaGFuZ2luZ1JlY3RhbmdsZSIsInNjcm9sbEJ5Wm9uZXMiLCJjbGllbnRZIiwic2Nyb2xsVmVydGljYWwiLCJyaWdodFBvcyIsImxlZnRQb3MiLCJnZW5JbmZvRm9yTW91c2VTZWxlY3Rpb24iLCJyZWN0Q3Jvc3Nlc0Jsb2NrcyIsInNocmlua1JlY3RhbmdsZVRvUG9pbnQiLCJ1cGRhdGVSZWN0YW5nbGVTaXplIiwidHJ5U2VsZWN0TmV4dEJsb2NrIiwiaW52ZXJzZVNlbGVjdGlvbiIsImFkZEJsb2NrSW5TZWxlY3Rpb24iLCJnYSIsImF2YWlsYWJsZSIsImNvbXBvc2VTdHViRGF0YUZvclRvb2wiLCJzdHViVG9vbCIsInVuYXZhaWxhYmxlIiwic2F2ZWREYXRhIiwibWEiLCJnZXRTYXZlZERhdGEiLCJtYWtlT3V0cHV0IiwiaXNWYWxpZCIsInZlcnNpb24iLCJiYSIsInZhIiwiZm8iLCJERUZBVUxUX1BMQUNFSE9MREVSIiwiX0NTUyIsIm9uS2V5VXAiLCJfcGxhY2Vob2xkZXIiLCJfZGF0YSIsIl9lbGVtZW50IiwiX3ByZXNlcnZlQmxhbmsiLCJwcmVzZXJ2ZUJsYW5rIiwiZHJhd1ZpZXciLCJwbGFjZWhvbGRlckFjdGl2ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdvIiwiY29tbWFuZE5hbWUiLCJxdWVyeUNvbW1hbmRTdGF0ZSIsIm1vIiwiYnV0dG9uQWN0aXZlIiwiYnV0dG9uTW9kaWZpZXIiLCJibyIsImNvbW1hbmRMaW5rIiwiY29tbWFuZFVubGluayIsIkVOVEVSX0tFWSIsImJ1dHRvblVubGluayIsImlucHV0U2hvd2VkIiwiaW5wdXRPcGVuZWQiLCJlbnRlcktleUhpbnQiLCJlbnRlclByZXNzZWQiLCJ1bmxpbmsiLCJjbG9zZUFjdGlvbnMiLCJ0b2dnbGVBY3Rpb25zIiwib3BlbkFjdGlvbnMiLCJnZXRBdHRyaWJ1dGUiLCJ2YWxpZGF0ZVVSTCIsInByZXBhcmVMaW5rIiwiaW5zZXJ0TGluayIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImFkZFByb3RvY29sIiwiRm4iLCJpMThuQVBJIiwiYmxvY2tzQVBJIiwic2VsZWN0aW9uQVBJIiwidG9vbHNBUEkiLCJjYXJldEFQSSIsImpuIiwiaW5mbyIsInN1YnRpdGxlIiwia2EiLCJ5YSIsImoiLCJpbnRlcm5hbFRvb2xzIiwiZXh0ZXJuYWxUb29scyIsIndhIiwiRWEiLCJIbiIsInZvIiwiZW5hYmxlZEJsb2NrVHVuZXMiLCJ4YSIsImVkaXRvckNvbmZpZyIsImdldENvbnN0cnVjdG9yIiwiJG4iLCJhbmltYXRpb24iLCJhYnMiLCJzY3JvbGxZIiwiem4iLCJVbiIsIkJhIiwiQ2EiLCJUYSIsIlduIiwidG9vbHNBdmFpbGFibGUiLCJ0b29sc1VuYXZhaWxhYmxlIiwidmFsaWRhdGVUb29scyIsInByZXBhcmVDb25maWciLCJmYWN0b3J5IiwiZ2V0TGlzdE9mUHJlcGFyZUZ1bmN0aW9ucyIsInRvb2xQcmVwYXJlTWV0aG9kU3VjY2VzcyIsInRvb2xQcmVwYXJlTWV0aG9kRmFsbGJhY2siLCJwcmVwYXJlQmxvY2tUb29scyIsImNvbnZlcnRUbyIsImJvbGQiLCJpdGFsaWMiLCJwYXJhZ3JhcGgiLCJhc3NpZ25JbmxpbmVUb29sc1RvQmxvY2tUb29sIiwiYXNzaWduQmxvY2tUdW5lc1RvQmxvY2tUb29sIiwiU2EiLCJJYSIsImNvbnRlbnRSZWN0Q2FjaGUiLCJyZXNpemVEZWJvdW5jZXIiLCJ3aW5kb3dSZXNpemUiLCJzZWxlY3Rpb25DaGFuZ2VEZWJvdW5jZWQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiZG9jdW1lbnRUb3VjaGVkTGlzdGVuZXIiLCJkb2N1bWVudFRvdWNoZWQiLCJlZGl0b3JXcmFwcGVyTmFycm93IiwiZWRpdG9yWm9uZUhpZGRlbiIsImVkaXRvckVtcHR5Iiwic2V0SXNNb2JpbGUiLCJ1bmJpbmRSZWFkT25seVNlbnNpdGl2ZUxpc3RlbmVycyIsImJpbmRSZWFkT25seVNlbnNpdGl2ZUxpc3RlbmVycyIsInVuYmluZFJlYWRPbmx5SW5zZW5zaXRpdmVMaXN0ZW5lcnMiLCJwYWRkaW5nQm90dG9tIiwibWluSGVpZ2h0IiwiYmluZFJlYWRPbmx5SW5zZW5zaXRpdmVMaXN0ZW5lcnMiLCJub25jZSIsImNhcHR1cmUiLCJyZWRhY3RvckNsaWNrZWQiLCJkb2N1bWVudEtleWRvd24iLCJkb2N1bWVudENsaWNrZWQiLCJ3YXRjaEJsb2NrSG92ZXJlZEV2ZW50cyIsImVuYWJsZUlucHV0c0VtcHR5TWFyayIsImJhY2tzcGFjZVByZXNzZWQiLCJlc2NhcGVQcmVzc2VkIiwiZGVmYXVsdEJlaGF2aW91ciIsImlzVHJ1c3RlZCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwidG91Y2hlcyIsInByb2Nlc3NCb3R0b21ab25lQ2xpY2siLCJPYSIsIkRyYWdORHJvcCIsIl9hIiwibW9kdWxlSW5zdGFuY2VzIiwiaXNSZWFkeSIsImNvbmZpZ3VyYXRpb24iLCJpbml0Iiwic3RhcnQiLCJhdXRvZm9jdXMiLCJob2xkZXJJZCIsImluaXRpYWxCbG9jayIsImhpZGVUb29sYmFyIiwib25SZWFkeSIsImNvbnN0cnVjdE1vZHVsZXMiLCJjb25maWd1cmVNb2R1bGVzIiwiZ2V0TW9kdWxlc0RpZmYiLCJBYSIsImV4cG9ydEFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUJBQUE7QUFBQUMsUUFBQSxDQUFBRCx1QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTix1QkFBQTs7O0NDQUMsWUFBVTtFQUFDOztFQUFhLElBQUc7SUFBQyxJQUFHLE9BQU9PLFFBQUEsR0FBUyxLQUFJO01BQUMsSUFBSUMsQ0FBQSxHQUFFRCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxPQUFPO01BQUVELENBQUEsQ0FBRUUsV0FBQSxDQUFZSCxRQUFBLENBQVNJLGNBQUEsQ0FBZSxpSUFBaUksQ0FBQyxHQUFFSixRQUFBLENBQVNLLElBQUEsQ0FBS0YsV0FBQSxDQUFZRixDQUFDO0lBQUM7RUFBQyxTQUFPSyxDQUFBLEVBQU47SUFBU0MsT0FBQSxDQUFRQyxLQUFBLENBQU0sa0NBQWlDRixDQUFDO0VBQUM7QUFBQyxHQUFHO0FBQ2pXLElBQUlHLEVBQUEsR0FBSyxPQUFPQyxVQUFBLEdBQWEsTUFBTUEsVUFBQSxHQUFhLE9BQU9DLE1BQUEsR0FBUyxNQUFNQSxNQUFBLEdBQVMsT0FBT0MsTUFBQSxHQUFTLE1BQU1BLE1BQUEsR0FBUyxPQUFPQyxJQUFBLEdBQU8sTUFBTUEsSUFBQSxHQUFPLENBQUM7QUFDMUksU0FBU0MsR0FBR0MsQ0FBQSxFQUFHO0VBQ2IsT0FBT0EsQ0FBQSxJQUFLQSxDQUFBLENBQUVDLFVBQUEsSUFBY0MsTUFBQSxDQUFPQyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMs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