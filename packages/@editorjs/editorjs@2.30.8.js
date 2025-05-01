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

// .beyond/uimport/temp/@editorjs/editorjs.2.30.8.js
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

// .beyond/uimport/temp/@editorjs/editorjs.2.30.8.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BlZGl0b3Jqcy9lZGl0b3Jqcy4yLjMwLjguanMiLCIuLi9ub2RlX21vZHVsZXMvQGVkaXRvcmpzL2VkaXRvcmpzL2Rpc3QvZWRpdG9yanMubWpzIl0sIm5hbWVzIjpbImVkaXRvcmpzXzJfMzBfOF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwiZWRpdG9yanNfMl8zMF84X2RlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZG9jdW1lbnQiLCJlIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwidCIsImNvbnNvbGUiLCJlcnJvciIsIkNlIiwiZ2xvYmFsVGhpcyIsIndpbmRvdyIsImdsb2JhbCIsInNlbGYiLCJLZSIsIm4iLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiWG4iLCJvIiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImFyZ3VtZW50cyIsImNvbnN0cnVjdG9yIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwia2V5cyIsImZvckVhY2giLCJpIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwiZW51bWVyYWJsZSIsIm90IiwiYXNzaWduIiwicmVnaXN0ZXIiLCJyZXZlcnQiLCJFbGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm93bmVyRG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaXRlbSIsImNsb3Nlc3QiLCJkb2N1bWVudEVsZW1lbnQiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnROb2RlIiwicHJlcGVuZCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJOb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNjcm9sbEludG9WaWV3SWZOZWVkZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VJbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicyIsIm9mZnNldFRvcCIsInNjcm9sbFRvcCIsInIiLCJjbGllbnRIZWlnaHQiLCJhIiwib2Zmc2V0TGVmdCIsInNjcm9sbExlZnQiLCJsIiwiY2xpZW50V2lkdGgiLCJjIiwic2Nyb2xsSW50b1ZpZXciLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJWbiIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJyZWR1Y2UiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiTG8iLCJWRVJCT1NFIiwiSU5GTyIsIldBUk4iLCJFUlJPUiIsInkiLCJCQUNLU1BBQ0UiLCJUQUIiLCJFTlRFUiIsIlNISUZUIiwiQ1RSTCIsIkFMVCIsIkVTQyIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiRE9XTiIsIlJJR0hUIiwiREVMRVRFIiwiTUVUQSIsIlNMQVNIIiwicW4iLCJXSEVFTCIsIkJBQ0tXQVJEIiwiRk9SV0FSRCIsIkllIiwiaW5jbHVkZXMiLCJsb2dMZXZlbCIsInB1c2giLCJ1bnNoaWZ0IiwiWm4iLCJTIiwiYmluZCIsIlgiLCJsZSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJBIiwiRCIsInRlIiwiR24iLCJ5byIsIndvIiwiViIsIlBvIiwiUW4iLCJmdW5jdGlvbiIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsIk5vIiwic2xpY2UiLCJGZSIsIkpuIiwibmFtZSIsInNwbGl0IiwicG9wIiwiZWkiLCJ0ZXN0IiwiRW8iLCJkdCIsImxlYWRpbmciLCJ1IiwidHJhaWxpbmciLCJ0aSIsIndpbiIsIm1hYyIsIngxMSIsImxpbnV4IiwiZmluZCIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJpbmRleE9mIiwiamUiLCJ1dCIsInNoaWZ0IiwidnQiLCJyZXBsYWNlIiwib2kiLCJVUkwiLCJocmVmIiwic3Vic3RyaW5nIiwibG9jYXRpb24iLCJwcm90b2NvbCIsIm9yaWdpbiIsIm5pIiwiaWkiLCJvcGVuIiwic2kiLCJmbG9vciIsInJhbmRvbSIsImh0IiwibWUiLCJzZXQiLCJSbyIsImJlIiwibWF0Y2hNZWRpYSIsInB0IiwicGxhdGZvcm0iLCJtYXhUb3VjaFBvaW50cyIsInJpIiwiSlNPTiIsInN0cmluZ2lmeSIsImQiLCJpc1NpbmdsZVRhZyIsInRhZ05hbWUiLCJpc0xpbmVCcmVha1RhZyIsIm1ha2UiLCJmaWx0ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0IiwiYXBwZW5kIiwicmV2ZXJzZSIsInN3YXAiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50QnlJZCIsImZpbmRBbGwiLCJhbGxJbnB1dHNTZWxlY3RvciIsIm1hcCIsImpvaW4iLCJmaW5kQWxsSW5wdXRzIiwiaXNOYXRpdmVJbnB1dCIsImNvbnRhaW5zT25seUlubGluZUVsZW1lbnRzIiwiZ2V0RGVlcGVzdEJsb2NrRWxlbWVudHMiLCJnZXREZWVwZXN0Tm9kZSIsIm5vZGVUeXBlIiwiRUxFTUVOVF9OT0RFIiwiaXNFbGVtZW50IiwiaXNGcmFnbWVudCIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImNvbnRlbnRFZGl0YWJsZSIsImNhblNldENhcmV0IiwidHlwZSIsImlzTm9kZUVtcHR5IiwidGV4dENvbnRlbnQiLCJSZWdFeHAiLCJpc0xlYWYiLCJjaGlsZE5vZGVzIiwiaXNFbXB0eSIsImZyb20iLCJpc0hUTUxTdHJpbmciLCJpbm5lckhUTUwiLCJjaGlsZEVsZW1lbnRDb3VudCIsImdldENvbnRlbnRMZW5ndGgiLCJURVhUX05PREUiLCJibG9ja0VsZW1lbnRzIiwiY2hpbGRyZW4iLCJldmVyeSIsImdldEhvbGRlciIsImlzQW5jaG9yIiwib2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJoZWlnaHQiLCJyaWdodCIsIndpZHRoIiwiYWkiLCJsaSIsInBhcnNlRmxvYXQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wV2lkdGgiLCJtYXJnaW5Ub3AiLCJEbyIsImRhdGFzZXQiLCJlbXB0eSIsImNpIiwiYmxvY2tUdW5lcyIsInRvZ2dsZXIiLCJpbmxpbmVUb29sYmFyIiwiY29udmVydGVyIiwidG9vbGJhciIsInRvb2xib3giLCJBZGQiLCJwb3BvdmVyIiwiRmlsdGVyIiwiZGkiLCJUZXh0IiwiTGluayIsIkJvbGQiLCJJdGFsaWMiLCJ1aSIsImxpbmsiLCJzdHViIiwiaGkiLCJkZWxldGUiLCJEZWxldGUiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIkZvIiwidG9vbE5hbWVzIiwidG9vbHMiLCJqbyIsImhlIiwiX3QiLCJzZXREaWN0aW9uYXJ5IiwiY3VycmVudERpY3Rpb25hcnkiLCJnZXROYW1lc3BhY2UiLCJ6IiwiSG8iLCJFcnJvciIsIk9lIiwic3Vic2NyaWJlcnMiLCJvbiIsIm9uY2UiLCJzcGxpY2UiLCJlbWl0Iiwib2ZmIiwid2FybiIsImRlc3Ryb3kiLCJKIiwic2V0UHJvdG90eXBlT2YiLCJpZCIsImNvbmZpZyIsImhvbGRlciIsInNlbGVjdGVkIiwic3RyZXRjaGVkIiwiZm9jdXNhYmxlIiwic2F2ZSIsInZhbGlkYXRlIiwiZGlzcGF0Y2hDaGFuZ2UiLCJnZXRBY3RpdmVUb29sYm94RW50cnkiLCJfZSIsImFsbExpc3RlbmVycyIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwib3B0aW9ucyIsImZpbmRPbmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9mZkJ5SWQiLCJmaW5kQnlJZCIsImZpbmRCeUV2ZW50VGFyZ2V0IiwicmVtb3ZlQWxsIiwiZmluZEJ5VHlwZSIsImZpbmRCeUhhbmRsZXIiLCJFIiwiZXZlbnRzRGlzcGF0Y2hlciIsIm5vZGVzIiwibGlzdGVuZXJzIiwicmVhZE9ubHlNdXRhYmxlTGlzdGVuZXJzIiwibXV0YWJsZUxpc3RlbmVySWRzIiwiY2xlYXJBbGwiLCJuZXciLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJzdGF0ZSIsIkVkaXRvciIsInJlbW92ZUFsbE5vZGVzIiwiSFRNTEVsZW1lbnQiLCJyZW1vdmUiLCJpc1J0bCIsImkxOG4iLCJkaXJlY3Rpb24iLCJiIiwiaW5zdGFuY2UiLCJzZWxlY3Rpb24iLCJzYXZlZFNlbGVjdGlvblJhbmdlIiwiaXNGYWtlQmFja2dyb3VuZEVuYWJsZWQiLCJjb21tYW5kQmFja2dyb3VuZCIsImNvbW1hbmRSZW1vdmVGb3JtYXQiLCJDU1MiLCJlZGl0b3JXcmFwcGVyIiwiZWRpdG9yWm9uZSIsImFuY2hvck5vZGUiLCJnZXRTZWxlY3Rpb24iLCJhbmNob3JFbGVtZW50IiwiYW5jaG9yT2Zmc2V0IiwiaXNDb2xsYXBzZWQiLCJpc0F0RWRpdG9yIiwiaXNTZWxlY3Rpb25BdEVkaXRvciIsImZvY3VzTm9kZSIsImlzUmFuZ2VBdEVkaXRvciIsInN0YXJ0Q29udGFpbmVyIiwiaXNTZWxlY3Rpb25FeGlzdHMiLCJyYW5nZSIsImdldFJhbmdlRnJvbVNlbGVjdGlvbiIsInJhbmdlQ291bnQiLCJnZXRSYW5nZUF0IiwicmVjdCIsIngiLCJjcmVhdGVSYW5nZSIsImJvdW5kaW5nTGVmdCIsImJvdW5kaW5nVG9wIiwiYm91bmRpbmdXaWR0aCIsImJvdW5kaW5nSGVpZ2h0IiwiaXNOYU4iLCJjbG9uZVJhbmdlIiwiaW5zZXJ0Tm9kZSIsIm5vcm1hbGl6ZSIsInNldEN1cnNvciIsImZvY3VzIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25FbmQiLCJzZXRTdGFydCIsInNldEVuZCIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiaXNSYW5nZUluc2lkZUNvbnRhaW5lciIsImFkZEZha2VDdXJzb3IiLCJtdXRhdGlvbkZyZWUiLCJjb2xsYXBzZSIsImlzRmFrZUN1cnNvckluc2lkZUNvbnRhaW5lciIsInJlbW92ZUZha2VDdXJzb3IiLCJib2R5IiwicmVtb3ZlRmFrZUJhY2tncm91bmQiLCJleGVjQ29tbWFuZCIsInNldEZha2VCYWNrZ3JvdW5kIiwicmVzdG9yZSIsImNsZWFyU2F2ZWQiLCJjb2xsYXBzZVRvRW5kIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiZmluZFBhcmVudFRhZyIsImV4cGFuZFRvVGFnIiwicGkiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsInNvbWUiLCJmdCIsIiRvIiwiem8iLCJVbyIsIlRlIiwiZ3QiLCJjb252ZXJzaW9uQ29uZmlnIiwiSGUiLCJ0b29sIiwiV28iLCJlbnRyaWVzIiwiWW8iLCJpY29uIiwieG8iLCJtZXJnZWFibGUiLCJmaSIsImV4cG9ydCIsIkJvIiwiaW1wb3J0IiwiXyIsIkRlZmF1bHQiLCJTZXBhcmF0b3IiLCJIdG1sIiwiZWUiLCJBUFBFTkRfQ0FMTEJBQ0siLCJSRU5ERVJFRCIsIk1PVkVEIiwiVVBEQVRFRCIsIlJFTU9WRUQiLCJPTl9QQVNURSIsIlIiLCJyZWFkT25seSIsInR1bmVzRGF0YSIsImNhY2hlZElucHV0cyIsInRvb2xSZW5kZXJlZEVsZW1lbnQiLCJ0dW5lc0luc3RhbmNlcyIsIk1hcCIsImRlZmF1bHRUdW5lc0luc3RhbmNlcyIsInVuYXZhaWxhYmxlVHVuZXNEYXRhIiwiaW5wdXRJbmRleCIsImVkaXRvckV2ZW50QnVzIiwiaGFuZGxlRm9jdXMiLCJkcm9wSW5wdXRzQ2FjaGUiLCJ1cGRhdGVDdXJyZW50SW5wdXQiLCJkaWRNdXRhdGVkIiwiSW5wdXRFdmVudCIsImRldGVjdFRvb2xSb290Q2hhbmdlIiwicCIsImciLCJmIiwidiIsIlQiLCJ0b2dnbGVJbnB1dHNFbXB0eU1hcmsiLCJzZXR0aW5ncyIsImJsb2NrQVBJIiwidG9vbEluc3RhbmNlIiwiY3JlYXRlIiwidHVuZXMiLCJjb21wb3NlVHVuZXMiLCJjb21wb3NlIiwid2F0Y2hCbG9ja011dGF0aW9ucyIsImFkZElucHV0RXZlbnRzIiwid3JhcHBlciIsIndyYXBwZXJTdHJldGNoZWQiLCJjb250ZW50IiwiZHJvcFRhcmdldCIsImlucHV0cyIsImN1cnJlbnRJbnB1dCIsImZpbmRJbmRleCIsImZpcnN0SW5wdXQiLCJsYXN0SW5wdXQiLCJuZXh0SW5wdXQiLCJwcmV2aW91c0lucHV0IiwidGhlbiIsInNhbml0aXplIiwic2FuaXRpemVDb25maWciLCJtZXJnZSIsInBsdWdpbnNDb250ZW50IiwiaGFzTWVkaWEiLCJ0b2dnbGUiLCJtZXNzYWdlIiwibWVyZ2VXaXRoIiwicGVyZm9ybWFuY2UiLCJ0aW1lIiwiY2F0Y2giLCJGdW5jdGlvbiIsImdldFR1bmVzIiwicmVuZGVyU2V0dGluZ3MiLCJ2YWx1ZXMiLCJyZW5kZXIiLCJ0b29sVHVuZXMiLCJjb21tb25UdW5lcyIsImFjdGl2ZUVsZW1lbnQiLCJ1bndhdGNoQmxvY2tNdXRhdGlvbnMiLCJyZW1vdmVJbnB1dEV2ZW50cyIsImV4cG9ydERhdGFBc1N0cmluZyIsInNldEF0dHJpYnV0ZSIsIndyYXAiLCJpc0ludGVybmFsIiwiaGFzIiwicmVkYWN0b3JEb21DaGFuZ2VkQ2FsbGJhY2siLCJtdXRhdGlvbnMiLCJnaSIsImluc2VydCIsImRlZmF1bHRCbG9jayIsIkJsb2NrTWFuYWdlciIsImluZGV4IiwibmVlZFRvRm9jdXMiLCJjb21wb3NlQmxvY2tEYXRhIiwiVG9vbHMiLCJibG9ja1Rvb2xzIiwiYXBpIiwiQVBJIiwidXBkYXRlIiwiZ2V0QmxvY2tCeUlkIiwiY29udmVydCIsImgiLCJCb29sZWFuIiwiaW5zZXJ0TWFueSIsImJsb2NrcyIsInZhbGlkYXRlSW5kZXgiLCJjb21wb3NlQmxvY2siLCJtZXRob2RzIiwiY2xlYXIiLCJyZW5kZXJGcm9tSFRNTCIsIm1vdmUiLCJnZXRCbG9ja0J5SW5kZXgiLCJnZXRCeUlkIiwiZ2V0Q3VycmVudEJsb2NrSW5kZXgiLCJnZXRCbG9ja0luZGV4IiwiZ2V0QmxvY2tzQ291bnQiLCJnZXRCbG9ja0J5RWxlbWVudCIsInN0cmV0Y2hCbG9jayIsImluc2VydE5ld0Jsb2NrIiwiY3VycmVudEJsb2NrSW5kZXgiLCJnZXRCbG9jayIsInJlbW92ZUJsb2NrIiwiY3VycmVudEJsb2NrIiwiQ2FyZXQiLCJzZXRUb0Jsb2NrIiwicG9zaXRpb25zIiwiRU5EIiwiVG9vbGJhciIsImNsb3NlIiwiSW5saW5lVG9vbGJhciIsIk1vZGlmaWNhdGlvbnNPYnNlcnZlciIsImRpc2FibGUiLCJSZW5kZXJlciIsImVuYWJsZSIsIlBhc3RlIiwicHJvY2Vzc1RleHQiLCJtaSIsImJpIiwic2V0VG9GaXJzdEJsb2NrIiwiREVGQVVMVCIsImZpcnN0QmxvY2siLCJzZXRUb0xhc3RCbG9jayIsImxhc3RCbG9jayIsInNldFRvUHJldmlvdXNCbG9jayIsInByZXZpb3VzQmxvY2siLCJzZXRUb05leHRCbG9jayIsIm5leHRCbG9jayIsIlNUQVJUIiwidmkiLCJrdCIsImdldE1ldGhvZHNGb3JUb29sIiwia2kiLCJCbG9ja3NBUEkiLCJjYXJldCIsIkNhcmV0QVBJIiwiVG9vbHNBUEkiLCJldmVudHMiLCJFdmVudHNBUEkiLCJMaXN0ZW5lcnNBUEkiLCJub3RpZmllciIsIk5vdGlmaWVyQVBJIiwic2FuaXRpemVyIiwiU2FuaXRpemVyQVBJIiwic2F2ZXIiLCJTYXZlckFQSSIsIlNlbGVjdGlvbkFQSSIsInN0eWxlcyIsIlN0eWxlc0FQSSIsImNsYXNzZXMiLCJUb29sYmFyQVBJIiwiSW5saW5lVG9vbGJhckFQSSIsInRvb2x0aXAiLCJUb29sdGlwQVBJIiwiSTE4bkFQSSIsIlJlYWRPbmx5QVBJIiwiVWlBUEkiLCJ5aSIsInRyeVRvU2hvdyIsIndpIiwiS28iLCJtIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJzaG93IiwiZ2V0V3JhcHBlciIsImNvbmZpcm0iLCJwcm9tcHQiLCJhbGVydCIsImhtciIsInRyYW5zZm9ybSIsImluc2VydEludG8iLCJsb2NhbHMiLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzb3VyY2VzIiwic291cmNlUm9vdCIsImNvbmNhdCIsImFsbCIsImF0b2IiLCJrIiwidyIsIkkiLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsInJlZnMiLCJDIiwicGFydHMiLCJGIiwiTiIsImJhc2UiLCJCIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJPIiwiaW5zZXJ0QXQiLCJuZXh0U2libGluZyIsImJlZm9yZSIsIk0iLCJhdHRycyIsInEiLCJzaW5nbGV0b24iLCJpZSIsImNyZWF0ZU9iamVjdFVSTCIsInJldm9rZU9iamVjdFVSTCIsIkJsb2IiLCJXIiwicmVsIiwidmUiLCJzZSIsInR0IiwiWW4iLCJjb252ZXJ0VG9BYnNvbHV0ZVVybHMiLCJLbiIsImtvIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJERUJVRyIsIkgiLCJRIiwiaG9zdCIsInBhdGhuYW1lIiwidHJpbSIsInN0eWxlIiwiY2FuY2VsSGFuZGxlciIsIm9rSGFuZGxlciIsIm9rVGV4dCIsImNhbmNlbFRleHQiLCJwbGFjZWhvbGRlciIsImlucHV0VHlwZSIsIkVpIiwieGkiLCJCaSIsIkNpIiwiVGkiLCJpc0VuYWJsZWQiLCJSZWFkT25seSIsIlhvIiwidGFncyIsIm5vZGVOYW1lIiwiY2xlYW4iLCJpbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIl9zYW5pdGl6ZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJDT01NRU5UX05PREUiLCJrZWVwTmVzdGVkQmxvY2tFbGVtZW50cyIsImF0dHJpYnV0ZXMiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjcmVhdGVUcmVlV2Fsa2VyIiwiTm9kZUZpbHRlciIsIlNIT1dfVEVYVCIsIlNIT1dfRUxFTUVOVCIsIlNIT1dfQ09NTUVOVCIsIlNpIiwiSWkiLCJ5dCIsInd0IiwiWiIsIk9pIiwiX2kiLCJNaSIsIkFpIiwiTGkiLCJQaSIsInJlamVjdCIsIlNhdmVyIiwiTmkiLCJzZWxlY3Rpb25VdGlscyIsIlJpIiwiZ2V0QmxvY2tUb29scyIsIkRpIiwiYmxvY2siLCJpbmxpbmVUb29sQnV0dG9uIiwiaW5saW5lVG9vbEJ1dHRvbkFjdGl2ZSIsImlucHV0IiwibG9hZGVyIiwiYnV0dG9uIiwic2V0dGluZ3NCdXR0b24iLCJzZXR0aW5nc0J1dHRvbkFjdGl2ZSIsIkZpIiwidG9nZ2xlQmxvY2tTZXR0aW5ncyIsInRvZ2dsZVRvb2xib3giLCJtb3ZlQW5kT3BlbiIsIkJsb2NrU2V0dGluZ3MiLCJvcGVuZWQiLCJWbyIsInNob3dlZCIsIm9mZnNldFJpZ2h0IiwiaGlkaW5nRGVsYXkiLCJoYW5kbGVXaW5kb3dTY3JvbGwiLCJoaWRlIiwibG9hZFN0eWxlcyIsInByZXBhcmUiLCJwYXNzaXZlIiwidG9vbHRpcENvbnRlbnQiLCJ0b29sdGlwU2hvd24iLCJwbGFjZW1lbnQiLCJoaWRpbmdUaW1lb3V0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwiZGVsYXkiLCJwbGFjZVRvcCIsInBsYWNlTGVmdCIsInBsYWNlUmlnaHQiLCJwbGFjZUJvdHRvbSIsInNob3dpbmdUaW1lb3V0Iiwib25Ib3ZlciIsIm9mZnNldFdpZHRoIiwiYXBwbHlQbGFjZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJqaSIsIkhpIiwiVSIsIkV0IiwiJGkiLCIkZSIsInplIiwiemkiLCJVaSIsIldpIiwiZWRpdG9yTm9kZXMiLCJVSSIsInJlZGFjdG9yIiwicW8iLCJLIiwiWWkiLCJabyIsIkVlIiwiY3Vyc29yIiwiaXRlbXMiLCJmb2N1c2VkQ3NzQ2xhc3MiLCJjdXJyZW50SXRlbSIsImRyb3BDdXJzb3IiLCJzZXRJdGVtcyIsIm5leHQiLCJsZWFmTm9kZXNBbmRSZXR1cm5JbmRleCIsImRpcmVjdGlvbnMiLCJwcmV2aW91cyIsImtlIiwiY2UiLCJpdGVyYXRvciIsImFjdGl2YXRlZCIsImZsaXBDYWxsYmFja3MiLCJvbktleURvd24iLCJpc0V2ZW50UmVhZHlGb3JIYW5kbGluZyIsInVzZWRLZXlzIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlVGFiUHJlc3MiLCJmbGlwTGVmdCIsImZsaXBSaWdodCIsImhhbmRsZUVudGVyUHJlc3MiLCJmb2N1c2VkSXRlbUNsYXNzIiwiYWN0aXZhdGVDYWxsYmFjayIsImFsbG93ZWRLZXlzIiwiaXNBY3RpdmF0ZWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJmb2N1c0ZpcnN0IiwiZmxpcENhbGxiYWNrIiwiaGFzRm9jdXMiLCJvbkZsaXAiLCJyZW1vdmVPbkZsaXAiLCJzaGlmdEtleSIsInN0b3BQcm9wYWdhdGlvbiIsImNsaWNrIiwiS2kiLCJYaSIsIlZpIiwicWkiLCJaaSIsIkdpIiwiUWkiLCJKaSIsIkNvIiwiZXMiLCJ0cyIsIkdvIiwib3MiLCJucyIsImlzIiwic3MiLCJycyIsIm5lIiwieWUiLCJ3ZSIsInJvb3QiLCJhbGlnbmVkU3RhcnQiLCJhbGlnbmVkQ2VudGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFzIiwiYWxpZ25tZW50IiwiZ2V0RWxlbWVudCIsInh0IiwicGFyYW1zIiwib25DaGlsZHJlbk9wZW4iLCJvbk9wZW4iLCJvbkNoaWxkcmVuQ2xvc2UiLCJvbkNsb3NlIiwiaGFuZGxlQ2xpY2siLCJvbkFjdGl2YXRlIiwiYWRkSGludCIsInBvc2l0aW9uIiwiaGFzQ2hpbGRyZW4iLCJpc0NoaWxkcmVuT3BlbiIsImlzT3BlbiIsImlzQ2hpbGRyZW5GbGlwcGFibGUiLCJpc0ZsaXBwYWJsZSIsImlzQ2hpbGRyZW5TZWFyY2hhYmxlIiwic2VhcmNoYWJsZSIsImNsb3NlT25BY3RpdmF0ZSIsImlzQWN0aXZlIiwiWSIsIkwiLCJjb250YWluZXIiLCJhY3RpdmUiLCJkaXNhYmxlZCIsImZvY3VzZWQiLCJoaWRkZW4iLCJjb25maXJtYXRpb25TdGF0ZSIsIm5vSG92ZXIiLCJub0ZvY3VzIiwic2Vjb25kYXJ5VGl0bGUiLCJpY29uVG9vbCIsImljb25DaGV2cm9uUmlnaHQiLCJ3b2JibGVBbmltYXRpb24iLCJyZSIsInJlbW92ZVNwZWNpYWxGb2N1c0JlaGF2aW9yIiwicmVtb3ZlU3BlY2lhbEhvdmVyQmVoYXZpb3IiLCJvbkVycm9yQW5pbWF0aW9uRW5kIiwiaXNEaXNhYmxlZCIsImlzQ29uZmlybWF0aW9uU3RhdGVFbmFibGVkIiwiaXNGb2N1c2VkIiwiYWN0aXZhdGVPckVuYWJsZUNvbmZpcm1hdGlvbk1vZGUiLCJ0b2dnbGVBY3RpdmUiLCJ0b2dnbGVIaWRkZW4iLCJyZXNldCIsImRpc2FibGVDb25maXJtYXRpb25Nb2RlIiwib25Gb2N1cyIsImRpc2FibGVTcGVjaWFsSG92ZXJBbmRGb2N1c0JlaGF2aW9yIiwid3JhcHBlclRhZyIsIml0ZW1OYW1lIiwic2Vjb25kYXJ5TGFiZWwiLCJoaW50IiwiZW5hYmxlZCIsImVuYWJsZUNvbmZpcm1hdGlvbk1vZGUiLCJjb25maXJtYXRpb24iLCJlbmFibGVTcGVjaWFsSG92ZXJBbmRGb2N1c0JlaGF2aW9yIiwiYW5pbWF0ZUVycm9yIiwibnQiLCJpdCIsImxpbmUiLCJRbyIsIkciLCJDbG9zZWQiLCJDbG9zZWRPbkFjdGl2YXRlIiwiJCIsIlAiLCJwb3BvdmVyQ29udGFpbmVyIiwicG9wb3Zlck9wZW5Ub3AiLCJwb3BvdmVyT3BlbkxlZnQiLCJwb3BvdmVyT3BlbmVkIiwic2VhcmNoIiwibm90aGluZ0ZvdW5kTWVzc2FnZSIsIm5vdGhpbmdGb3VuZE1lc3NhZ2VEaXNwbGF5ZWQiLCJvdmVybGF5Iiwib3ZlcmxheUhpZGRlbiIsInBvcG92ZXJOZXN0ZWQiLCJnZXRQb3BvdmVyTmVzdGVkQ2xhc3MiLCJwb3BvdmVySW5saW5lIiwicG9wb3ZlckhlYWRlciIsImZlIiwiTmVzdGluZ0xldmVsIiwiUG9wb3ZlckhlaWdodCIsIklubGluZVBvcG92ZXJXaWR0aCIsIlRyaWdnZXJJdGVtTGVmdCIsIlRyaWdnZXJJdGVtVG9wIiwiVG8iLCJTbyIsIlNlIiwiZ2V0Q29udHJvbHMiLCJKbyIsIml0ZW1zUmVuZGVyUGFyYW1zIiwibWVzc2FnZXMiLCJub3RoaW5nRm91bmQiLCJidWlsZEl0ZW1zIiwiY2xhc3MiLCJpdGVtc0RlZmF1bHQiLCJhY3RpdmF0ZUl0ZW1CeU5hbWUiLCJoYW5kbGVJdGVtQ2xpY2siLCJnZXRUYXJnZXRJdGVtIiwiY29tcG9zZWRQYXRoIiwic2hvd05lc3RlZEl0ZW1zIiwidG9nZ2xlSXRlbUFjdGl2ZW5lc3NJZk5lZWRlZCIsIlVlIiwiU2VhcmNoIiwic3QiLCJydCIsImxzIiwidGFiSW5kZXgiLCJzZWFyY2hRdWVyeSIsInF1ZXJ5IiwiZm91bmRJdGVtcyIsImNoZWNrSXRlbSIsImNzIiwiZHMiLCJ1cyIsImVuIiwidG4iLCJuZXN0aW5nTGV2ZWwiLCJuZXN0ZWRQb3BvdmVyVHJpZ2dlckl0ZW0iLCJwcmV2aW91c2x5SG92ZXJlZEl0ZW0iLCJzY29wZUVsZW1lbnQiLCJkZXN0cm95TmVzdGVkUG9wb3ZlcklmRXhpc3RzIiwiZmxpcHBlciIsIm9uU2VhcmNoIiwidG9nZ2xlTm90aGluZ0ZvdW5kTWVzc2FnZSIsImZsaXBwYWJsZUVsZW1lbnRzIiwiaGFuZGxlSG92ZXIiLCJhZGRTZWFyY2giLCJmbGlwcGFibGUiLCJzZXRQcm9wZXJ0eSIsInNpemUiLCJzaG91bGRPcGVuQm90dG9tIiwic2hvdWxkT3BlblJpZ2h0IiwibmVzdGVkUG9wb3ZlciIsInNob3dOZXN0ZWRQb3BvdmVyRm9ySXRlbSIsInNldFRyaWdnZXJJdGVtUG9zaXRpb24iLCJtaW4iLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJjbG9uZU5vZGUiLCJ2aXNpYmlsaXR5IiwiZmxhdCIsIkJ0IiwiaHMiLCJ4ZSIsInNjcm9sbFBvc2l0aW9uIiwibG9jayIsImxvY2tIYXJkIiwic2Nyb2xsTG9ja2VkIiwidW5sb2NrIiwidW5sb2NrSGFyZCIsInNjcm9sbExvY2tlZEhhcmQiLCJzY3JvbGxUbyIsInBzIiwiYXQiLCJsdCIsImJhY2tCdXR0b24iLCJmcyIsIm9uQmFja0J1dHRvbkNsaWNrIiwiaW5uZXJUZXh0IiwiZ3MiLCJoaXN0b3J5IiwiY3VycmVudFRpdGxlIiwiY3VycmVudEl0ZW1zIiwibm4iLCJzY3JvbGxMb2NrZXIiLCJpc0hpZGRlbiIsInVwZGF0ZUl0ZW1zQW5kSGVhZGVyIiwiaGVhZGVyIiwibXMiLCJDcm9zc0Jsb2NrU2VsZWN0aW9uIiwiaXNDcm9zc0Jsb2NrU2VsZWN0aW9uU3RhcnRlZCIsIkJsb2NrU2VsZWN0aW9uIiwidW5zZWxlY3RCbG9jayIsImNsb3NlZCIsIm9uUG9wb3ZlckNsb3NlIiwic2VsZWN0QmxvY2siLCJjbGVhckNhY2hlIiwiZ2V0VHVuZXNJdGVtcyIsInJlc29sdmVUdW5lQWxpYXNlcyIsImxhYmVsIiwic24iLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsImNvbW1hbmRzIiwicGFyc2VTaG9ydGN1dE5hbWUiLCJjYWxsYmFjayIsImV4ZWN1dGVTaG9ydGN1dCIsImV4ZWN1dGUiLCJDTUQiLCJFU0NBUEUiLCJJTlNFUlQiLCJzdXBwb3J0ZWRDb21tYW5kcyIsImN0cmxLZXkiLCJtZXRhS2V5IiwiYWx0S2V5Iiwia2V5Q29kZXMiLCJicyIsInZzIiwia3MiLCJyZWdpc3RlcmVkU2hvcnRjdXRzIiwiZmluZFNob3J0Y3V0IiwiZ2UiLCJ5cyIsIndzIiwicm4iLCJMZSIsIk9wZW5lZCIsIkJsb2NrQWRkZWQiLCJDdCIsImFuIiwiaTE4bkxhYmVscyIsImhhbmRsZU1vYmlsZUxheW91dFRvZ2dsZSIsImRlc3Ryb3lQb3BvdmVyIiwiaW5pdFBvcG92ZXIiLCJlbmFibGVTaG9ydGN1dHMiLCJ0b29sc1RvQmVEaXNwbGF5ZWQiLCJyZW1vdmVBbGxTaG9ydGN1dHMiLCJ0b29sQnV0dG9uQWN0aXZhdGVkIiwidG9vbGJveEl0ZW1zVG9CZURpc3BsYXllZCIsInNob3J0Y3V0IiwiZW5hYmxlU2hvcnRjdXRGb3JUb29sIiwiRXMiLCJsbiIsInhzIiwia2V5Ym9hcmQiLCJnZXRMYXlvdXRNYXAiLCJCcyIsInRvb2xib3hJbnN0YW5jZSIsImFjdGlvbnMiLCJhY3Rpb25zT3BlbmVkIiwidG9vbGJhck9wZW5lZCIsIm9wZW5lZFRvb2xib3hIb2xkZXJNb2RpZmllciIsInBsdXNCdXR0b24iLCJwbHVzQnV0dG9uU2hvcnRjdXQiLCJzZXR0aW5nc1RvZ2dsZXIiLCJzZXR0aW5nc1RvZ2dsZXJIaWRkZW4iLCJob3ZlcmVkQmxvY2siLCJibG9ja0FjdGlvbnMiLCJibG9ja1R1bmVzVG9nZ2xlciIsInRvZ2dsZVJlYWRPbmx5IiwiZGlzYWJsZU1vZHVsZUJpbmRpbmdzIiwiZHJhd1VJIiwiZW5hYmxlTW9kdWxlQmluZGluZ3MiLCJ0aW1lb3V0IiwiaXNNb2JpbGUiLCJwbHVzQnV0dG9uQ2xpY2tlZCIsIm1ha2VUb29sYm94IiwiaW5zZXJ0QXRFbmQiLCJzZXR0aW5nc1RvZ2dsZXJDbGlja2VkIiwiYWUiLCJCbG9jayIsIklubGluZSIsIlR1bmUiLCJQZSIsIlNob3J0Y3V0IiwiVG9vbGJveCIsIkVuYWJsZWRJbmxpbmVUb29scyIsIkVuYWJsZWRCbG9ja1R1bmVzIiwiQ29uZmlnIiwiY24iLCJTYW5pdGl6ZUNvbmZpZyIsInBlIiwiSXNFbmFibGVkTGluZUJyZWFrcyIsIkNvbnZlcnNpb25Db25maWciLCJJc1JlYWRPbmx5U3VwcG9ydGVkIiwiUGFzdGVDb25maWciLCJXZSIsIklzSW5saW5lIiwiVGl0bGUiLCJtdCIsIklzVHVuZSIsIlR0IiwiY29uc3RydWN0YWJsZSIsImlzRGVmYXVsdCIsImRlZmF1bHRQbGFjZWhvbGRlciIsInRvb2xOYW1lIiwiaXNJbmxpbmUiLCJpc0Jsb2NrIiwiaXNUdW5lIiwiQ3MiLCJ0b29sYmFyVmVydGljYWxNYXJnaW4iLCJhbGxvd2VkVG9TaG93IiwiZ2V0VG9vbFNob3J0Y3V0IiwiY29udGFpbnNOb2RlIiwiZWRpdG9yUnRsRml4IiwiY3JlYXRlVG9vbHNJbnN0YW5jZXMiLCJnZXRQb3BvdmVySXRlbXMiLCJjb250ZW50UmVjdCIsImdldFRvb2xzIiwiaW5saW5lVG9vbHMiLCJpc1JlYWRPbmx5U3VwcG9ydGVkIiwidG9vbENsaWNrZWQiLCJyZW5kZXJBY3Rpb25zIiwiY2hlY2tTdGF0ZSIsImludGVybmFsIiwiZW5hYmxlZElubGluZVRvb2xzIiwic3Vycm91bmQiLCJjaGVja1Rvb2xzU3RhdGUiLCJkbiIsImZvY3VzT2Zmc2V0IiwidW4iLCJjbG9uZUNvbnRlbnRzIiwiTmUiLCJSZSIsImhuIiwiU3QiLCJYZSIsImRlIiwiSXQiLCJPdCIsIlRzIiwidWUiLCJTcyIsInBuIiwiTXQiLCJJcyIsIkF0IiwiTHQiLCJPcyIsImZuIiwiUHQiLCJjYWxjdWxhdGVCYXNlbGluZSIsIl9zIiwiZ24iLCJOdCIsIlJ0IiwiRHQiLCJNcyIsIlBzIiwiQXMiLCJMcyIsIlZlIiwiRnQiLCJOcyIsIm1uIiwianQiLCJScyIsIkRzIiwiRnMiLCJqcyIsIkhzIiwic2VsZWN0Tm9kZSIsIiRzIiwib2UiLCJ6cyIsImJuIiwiVXMiLCJXcyIsIkRlIiwiWXMiLCJLcyIsIlhzIiwiYnQiLCJWcyIsInFzIiwiWnMiLCJHcyIsIlFzIiwiSnMiLCJjb21wbGV0ZWQiLCJlciIsInRyIiwiZnJlZXplIiwiX19wcm90b19fIiwiUHJvbWlzZVF1ZXVlIiwiYmVhdXRpZnlTaG9ydGN1dCIsImNhY2hlYWJsZSIsImNhcGl0YWxpemUiLCJjb3B5VGV4dFRvQ2xpcGJvYXJkIiwiZGVib3VuY2UiLCJkZWVwTWVyZ2UiLCJkZXByZWNhdGlvbkFzc2VydCIsImdldFVzZXJPUyIsImdldFZhbGlkVXJsIiwiaXNCb29sZWFuIiwiaXNDbGFzcyIsImlzRnVuY3Rpb24iLCJpc0lvc0RldmljZSIsImlzTnVtYmVyIiwiaXNPYmplY3QiLCJpc1ByaW50YWJsZUtleSIsImlzUHJvbWlzZSIsImlzU3RyaW5nIiwiaXNVbmRlZmluZWQiLCJtb3VzZUJ1dHRvbnMiLCJub3RFbXB0eSIsInRocm90dGxlIiwidHlwZU9mIiwiSHQiLCJpciIsIm9yIiwibnIiLCJ2biIsIiR0IiwicWUiLCJ6dCIsInNyIiwiZnJhZ21lbnRUb1N0cmluZyIsImFyIiwicnIiLCJrbiIsIlV0IiwiY3IiLCJsciIsIld0IiwiWXQiLCJJbyIsIl9fc3ByZWFkQXJyYXkiLCJ5biIsImRyIiwid24iLCJLdCIsIlplIiwiWHQiLCJ1ciIsIkdlIiwiVnQiLCJociIsIkVuIiwicHIiLCJmciIsImdyIiwieG4iLCJxdCIsIk1lIiwieXIiLCJtciIsImJyIiwidnIiLCJrciIsIkJuIiwiWnQiLCJpc0NvbGxhcHNlZFdoaXRlc3BhY2VzIiwid3IiLCJHdCIsIlF0IiwieHIiLCJFciIsIkNuIiwiSnQiLCJlbyIsInRvIiwiQnIiLCJvbyIsIm5vIiwiT3IiLCJDciIsIlRyIiwiU3IiLCJJciIsIkFyIiwiX3IiLCJNciIsIlRuIiwiaW8iLCJQciIsIkxyIiwiU24iLCJzbyIsIlJyIiwiTnIiLCJJbiIsInJvIiwiRHIiLCJPbiIsImFvIiwiRnIiLCJRZSIsImdldENvbnRlbnRlZGl0YWJsZVNsaWNlIiwiSHIiLCJqciIsImV4dHJhY3RDb250ZW50cyIsImNoZWNrQ29udGVudGVkaXRhYmxlU2xpY2VGb3JFbXB0aW5lc3MiLCJVciIsIiRyIiwienIiLCJfbiIsIk1uIiwibG8iLCJZciIsIldyIiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJsYXN0Q2hpbGQiLCJjbyIsIkplIiwiZ2V0Q2FyZXROb2RlQW5kT2Zmc2V0IiwiS3IiLCJBbiIsImV0IiwiZ2V0UmFuZ2UiLCJYciIsIkxuIiwidW8iLCJpc0NhcmV0QXRFbmRPZklucHV0IiwiWnIiLCJPbyIsIlZyIiwicXIiLCJQbiIsImhvIiwiaXNDYXJldEF0U3RhcnRPZklucHV0IiwiSnIiLCJBZSIsIkdyIiwiUXIiLCJObiIsInBvIiwib2EiLCJlYSIsInRhIiwic2V0U3RhcnRBZnRlciIsInNldEVuZEFmdGVyIiwibmEiLCJrZXlkb3duIiwiYmVmb3JlS2V5ZG93blByb2Nlc3NpbmciLCJiYWNrc3BhY2UiLCJlbnRlciIsImFycm93UmlnaHRBbmREb3duIiwiYXJyb3dMZWZ0QW5kVXAiLCJ0YWJQcmVzc2VkIiwic2xhc2hQcmVzc2VkIiwiY29kZSIsImNvbW1hbmRTbGFzaFByZXNzZWQiLCJuZWVkVG9vbGJhckNsb3NpbmciLCJjbGVhclNlbGVjdGlvbiIsImtleXVwIiwiY2hlY2tFbXB0aW5lc3MiLCJkcmFnT3ZlciIsImdldEJsb2NrQnlDaGlsZE5vZGUiLCJkcmFnTGVhdmUiLCJoYW5kbGVDb21tYW5kQyIsImFueUJsb2NrU2VsZWN0ZWQiLCJjb3B5U2VsZWN0ZWRCbG9ja3MiLCJoYW5kbGVDb21tYW5kWCIsInJlbW92ZVNlbGVjdGVkQmxvY2tzIiwiaW5zZXJ0RGVmYXVsdEJsb2NrQXRJbmRleCIsIm5hdmlnYXRlUHJldmlvdXMiLCJuYXZpZ2F0ZU5leHQiLCJzZWxlY3RlZEJsb2NrcyIsImFjdGl2YXRlQmxvY2tTZXR0aW5ncyIsImluc2VydENvbnRlbnRBdENhcmV0UG9zaXRpb24iLCJhY3RpdmF0ZVRvb2xib3giLCJpc0xpbmVCcmVha3NFbmFibGVkIiwic29tZVRvb2xiYXJPcGVuZWQiLCJzb21lRmxpcHBlckJ1dHRvbkZvY3VzZWQiLCJtZXJnZUJsb2NrcyIsInRvZ2dsZUJsb2NrU2VsZWN0ZWRTdGF0ZSIsImNsb3NlQWxsVG9vbGJhcnMiLCJjdCIsIndvcmtpbmdBcmVhIiwiYXJyYXkiLCJOdW1iZXIiLCJpbnNlcnRUb0RPTSIsImNvbXBvc2VCbG9ja0V2ZW50IiwiZnJvbUluZGV4IiwidG9JbmRleCIsInJlcGxhY2VXaXRoIiwiRG9jdW1lbnRGcmFnbWVudCIsImFmdGVyIiwiaW5zZXJ0QWZ0ZXIiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIl9vIiwiTW8iLCJpYSIsIkFvIiwic2EiLCJyYSIsIl9jdXJyZW50QmxvY2tJbmRleCIsIl9ibG9ja3MiLCJuZXh0Q29udGVudGZ1bEJsb2NrIiwicHJldmlvdXNDb250ZW50ZnVsQmxvY2siLCJpc0VkaXRvckVtcHR5IiwiUHJveHkiLCJCbG9ja0V2ZW50cyIsImJpbmRCbG9ja0V2ZW50cyIsImJsb2NrRGlkTXV0YXRlZCIsInBhc3RlIiwidW5zZXRDdXJyZW50QmxvY2siLCJyZW1vdmVBbGxCbG9ja3MiLCJleHRyYWN0RnJhZ21lbnRGcm9tQ2FyZXRQb3NpdGlvbiIsInNldEN1cnJlbnRCbG9ja0J5Q2hpbGROb2RlIiwiaXNFcXVhbE5vZGUiLCJldmVudCIsImFhIiwiYW55QmxvY2tTZWxlY3RlZENhY2hlIiwibmVlZFRvU2VsZWN0QWxsIiwibmF0aXZlSW5wdXRTZWxlY3RlZCIsInJlYWR5VG9CbG9ja1NlbGVjdGlvbiIsInNhbml0aXplckNvbmZpZyIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsIm9sIiwidWwiLCJpbWciLCJzcmMiLCJhbGxCbG9ja3NTZWxlY3RlZCIsInNlbGVjdEFsbEJsb2NrcyIsImhhbmRsZUNvbW1hbmRBIiwidW5TZWxlY3RCbG9ja0J5SW5kZXgiLCJSZWN0YW5nbGVTZWxlY3Rpb24iLCJLZXlib2FyZEV2ZW50IiwiaXNSZWN0QWN0aXZhdGVkIiwiY2xpcGJvYXJkRGF0YSIsInNldERhdGEiLCJNSU1FX1RZUEUiLCJzZWxlY3RCbG9ja0J5SW5kZXgiLCJZZSIsInNoYWRvd0NhcmV0Iiwic2V0VG9JbnB1dCIsInNjcm9sbEJ5Iiwic2V0VG9UaGVMYXN0QmxvY2siLCJkZWxldGVDb250ZW50cyIsImVuZENvbnRhaW5lciIsImVuZE9mZnNldCIsImNyZWF0ZVNoYWRvdyIsInJlc3RvcmVDYXJldCIsImxhIiwib25Nb3VzZVVwIiwib25Nb3VzZU92ZXIiLCJyZWxhdGVkVGFyZ2V0IiwibGFzdFNlbGVjdGVkQmxvY2siLCJmaXJzdFNlbGVjdGVkQmxvY2siLCJ0b2dnbGVCbG9ja3NTZWxlY3RlZFN0YXRlIiwiZW5hYmxlQ3Jvc3NCbG9ja1NlbGVjdGlvbiIsIndhdGNoU2VsZWN0aW9uIiwiY2EiLCJpc1N0YXJ0ZWRBdEVkaXRvciIsInByb2Nlc3NEcm9wIiwicHJvY2Vzc0RyYWdTdGFydCIsInByb2Nlc3NEcmFnT3ZlciIsInByb2Nlc3NEYXRhVHJhbnNmZXIiLCJkYXRhVHJhbnNmZXIiLCJkYSIsInVhIiwiaGEiLCJiYXRjaGluZ1RpbWVvdXQiLCJiYXRjaGluZ09uQ2hhbmdlUXVldWUiLCJiYXRjaFRpbWUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsInJlZGFjdG9yQ2hhbmdlZCIsInBhcnRpY3VsYXJCbG9ja0NoYW5nZWQiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNoYXJhY3RlckRhdGEiLCJkaXNjb25uZWN0Iiwib25DaGFuZ2UiLCJSbiIsIkRuIiwidG9vbHNUYWdzIiwidGFnc0J5VG9vbCIsInRvb2xzUGF0dGVybnMiLCJ0b29sc0ZpbGVzIiwiZXhjZXB0aW9uTGlzdCIsInByb2Nlc3NUb29sIiwicGFzdGVDb25maWciLCJvblBhc3RlIiwiZ2V0VGFnc0NvbmZpZyIsImdldEZpbGVzQ29uZmlnIiwiZ2V0UGF0dGVybnNDb25maWciLCJoYW5kbGVQYXN0ZUV2ZW50IiwiaXNOYXRpdmVCZWhhdmlvdXIiLCJ0eXBlcyIsInByb2Nlc3NUb29scyIsInVuc2V0Q2FsbGJhY2siLCJzZXRDYWxsYmFjayIsInByb2Nlc3NGaWxlcyIsImZpbGVzIiwiZ2V0RGF0YSIsImluc2VydEVkaXRvckpTRGF0YSIsInBhcnNlIiwic2FuaXRpemF0aW9uQ29uZmlnIiwiZ2V0QWxsSW5saW5lVG9vbHNTYW5pdGl6ZUNvbmZpZyIsInByb2Nlc3NIVE1MIiwicHJvY2Vzc1BsYWluIiwicHJvY2Vzc1NpbmdsZUJsb2NrIiwicHJvY2Vzc0lubGluZVBhc3RlIiwiaW5zZXJ0QmxvY2siLCJjb2xsZWN0VGFnTmFtZXMiLCJleHRlbnNpb25zIiwibWltZVR5cGVzIiwicGF0dGVybnMiLCJwYXR0ZXJuIiwicHJvY2Vzc0ZpbGUiLCJjb21wb3NlUGFzdGVFdmVudCIsImZpbGUiLCJnZXROb2RlcyIsImRlZmF1bHRUb29sIiwiYmFzZVNhbml0aXplQ29uZmlnIiwib3V0ZXJIVE1MIiwiUEFUVEVSTl9QUk9DRVNTSU5HX01BWF9MRU5HVEgiLCJwcm9jZXNzUGF0dGVybiIsImV4ZWMiLCJwcm9jZXNzRWxlbWVudE5vZGUiLCJwYSIsImZhIiwidG9vbHNEb250U3VwcG9ydFJlYWRPbmx5IiwicmVhZE9ubHlFbmFibGVkIiwidGhyb3dDcml0aWNhbEVycm9yIiwiQmUiLCJpc1JlY3RTZWxlY3Rpb25BY3RpdmF0ZWQiLCJTQ1JPTExfU1BFRUQiLCJIRUlHSFRfT0ZfU0NST0xMX1pPTkUiLCJCT1RUT01fU0NST0xMX1pPTkUiLCJUT1BfU0NST0xMX1pPTkUiLCJNQUlOX01PVVNFX0JVVFRPTiIsIm1vdXNlZG93biIsImlzU2Nyb2xsaW5nIiwiaW5TY3JvbGxab25lIiwic3RhcnRYIiwic3RhcnRZIiwibW91c2VYIiwibW91c2VZIiwic3RhY2tPZlNlbGVjdGVkIiwibGlzdGVuZXJJZHMiLCJvdmVybGF5Q29udGFpbmVyIiwidG9wU2Nyb2xsWm9uZSIsImJvdHRvbVNjcm9sbFpvbmUiLCJzdGFydFNlbGVjdGlvbiIsImVsZW1lbnRGcm9tUG9pbnQiLCJlbmRTZWxlY3Rpb24iLCJvdmVybGF5UmVjdGFuZ2xlIiwiZGlzcGxheSIsImdlbkhUTUwiLCJwcm9jZXNzTW91c2VEb3duIiwicHJvY2Vzc01vdXNlTW92ZSIsInByb2Nlc3NNb3VzZUxlYXZlIiwicHJvY2Vzc1Njcm9sbCIsInByb2Nlc3NNb3VzZVVwIiwicGFnZVgiLCJwYWdlWSIsImNoYW5naW5nUmVjdGFuZ2xlIiwic2Nyb2xsQnlab25lcyIsImNsaWVudFkiLCJzY3JvbGxWZXJ0aWNhbCIsInJpZ2h0UG9zIiwibGVmdFBvcyIsImdlbkluZm9Gb3JNb3VzZVNlbGVjdGlvbiIsInJlY3RDcm9zc2VzQmxvY2tzIiwic2hyaW5rUmVjdGFuZ2xlVG9Qb2ludCIsInVwZGF0ZVJlY3RhbmdsZVNpemUiLCJ0cnlTZWxlY3ROZXh0QmxvY2siLCJpbnZlcnNlU2VsZWN0aW9uIiwiYWRkQmxvY2tJblNlbGVjdGlvbiIsImdhIiwiYXZhaWxhYmxlIiwiY29tcG9zZVN0dWJEYXRhRm9yVG9vbCIsInN0dWJUb29sIiwidW5hdmFpbGFibGUiLCJzYXZlZERhdGEiLCJtYSIsImdldFNhdmVkRGF0YSIsIm1ha2VPdXRwdXQiLCJpc1ZhbGlkIiwidmVyc2lvbiIsImJhIiwidmEiLCJmbyIsIkRFRkFVTFRfUExBQ0VIT0xERVIiLCJfQ1NTIiwib25LZXlVcCIsIl9wbGFjZWhvbGRlciIsIl9kYXRhIiwiX2VsZW1lbnQiLCJfcHJlc2VydmVCbGFuayIsInByZXNlcnZlQmxhbmsiLCJkcmF3VmlldyIsInBsYWNlaG9sZGVyQWN0aXZlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ28iLCJjb21tYW5kTmFtZSIsInF1ZXJ5Q29tbWFuZFN0YXRlIiwibW8iLCJidXR0b25BY3RpdmUiLCJidXR0b25Nb2RpZmllciIsImJvIiwiY29tbWFuZExpbmsiLCJjb21tYW5kVW5saW5rIiwiRU5URVJfS0VZIiwiYnV0dG9uVW5saW5rIiwiaW5wdXRTaG93ZWQiLCJpbnB1dE9wZW5lZCIsImVudGVyS2V5SGludCIsImVudGVyUHJlc3NlZCIsInVubGluayIsImNsb3NlQWN0aW9ucyIsInRvZ2dsZUFjdGlvbnMiLCJvcGVuQWN0aW9ucyIsImdldEF0dHJpYnV0ZSIsInZhbGlkYXRlVVJMIiwicHJlcGFyZUxpbmsiLCJpbnNlcnRMaW5rIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYWRkUHJvdG9jb2wiLCJGbiIsImkxOG5BUEkiLCJibG9ja3NBUEkiLCJzZWxlY3Rpb25BUEkiLCJ0b29sc0FQSSIsImNhcmV0QVBJIiwiam4iLCJpbmZvIiwic3VidGl0bGUiLCJrYSIsInlhIiwiaiIsImludGVybmFsVG9vbHMiLCJleHRlcm5hbFRvb2xzIiwid2EiLCJFYSIsIkhuIiwidm8iLCJlbmFibGVkQmxvY2tUdW5lcyIsInhhIiwiZWRpdG9yQ29uZmlnIiwiZ2V0Q29uc3RydWN0b3IiLCIkbiIsImFuaW1hdGlvbiIsImFicyIsInNjcm9sbFkiLCJ6biIsIlVuIiwiQmEiLCJDYSIsIlRhIiwiV24iLCJ0b29sc0F2YWlsYWJsZSIsInRvb2xzVW5hdmFpbGFibGUiLCJ2YWxpZGF0ZVRvb2xzIiwicHJlcGFyZUNvbmZpZyIsImZhY3RvcnkiLCJnZXRMaXN0T2ZQcmVwYXJlRnVuY3Rpb25zIiwidG9vbFByZXBhcmVNZXRob2RTdWNjZXNzIiwidG9vbFByZXBhcmVNZXRob2RGYWxsYmFjayIsInByZXBhcmVCbG9ja1Rvb2xzIiwiY29udmVydFRvIiwiYm9sZCIsIml0YWxpYyIsInBhcmFncmFwaCIsImFzc2lnbklubGluZVRvb2xzVG9CbG9ja1Rvb2wiLCJhc3NpZ25CbG9ja1R1bmVzVG9CbG9ja1Rvb2wiLCJTYSIsIklhIiwiY29udGVudFJlY3RDYWNoZSIsInJlc2l6ZURlYm91bmNlciIsIndpbmRvd1Jlc2l6ZSIsInNlbGVjdGlvbkNoYW5nZURlYm91bmNlZCIsInNlbGVjdGlvbkNoYW5nZWQiLCJkb2N1bWVudFRvdWNoZWRMaXN0ZW5lciIsImRvY3VtZW50VG91Y2hlZCIsImVkaXRvcldyYXBwZXJOYXJyb3ciLCJlZGl0b3Jab25lSGlkZGVuIiwiZWRpdG9yRW1wdHkiLCJzZXRJc01vYmlsZSIsInVuYmluZFJlYWRPbmx5U2Vuc2l0aXZlTGlzdGVuZXJzIiwiYmluZFJlYWRPbmx5U2Vuc2l0aXZlTGlzdGVuZXJzIiwidW5iaW5kUmVhZE9ubHlJbnNlbnNpdGl2ZUxpc3RlbmVycyIsInBhZGRpbmdCb3R0b20iLCJtaW5IZWlnaHQiLCJiaW5kUmVhZE9ubHlJbnNlbnNpdGl2ZUxpc3RlbmVycyIsIm5vbmNlIiwiY2FwdHVyZSIsInJlZGFjdG9yQ2xpY2tlZCIsImRvY3VtZW50S2V5ZG93biIsImRvY3VtZW50Q2xpY2tlZCIsIndhdGNoQmxvY2tIb3ZlcmVkRXZlbnRzIiwiZW5hYmxlSW5wdXRzRW1wdHlNYXJrIiwiYmFja3NwYWNlUHJlc3NlZCIsImVzY2FwZVByZXNzZWQiLCJkZWZhdWx0QmVoYXZpb3VyIiwiaXNUcnVzdGVkIiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJ0b3VjaGVzIiwicHJvY2Vzc0JvdHRvbVpvbmVDbGljayIsIk9hIiwiRHJhZ05Ecm9wIiwiX2EiLCJtb2R1bGVJbnN0YW5jZXMiLCJpc1JlYWR5IiwiY29uZmlndXJhdGlvbiIsImluaXQiLCJzdGFydCIsImF1dG9mb2N1cyIsImhvbGRlcklkIiwiaW5pdGlhbEJsb2NrIiwiaGlkZVRvb2xiYXIiLCJvblJlYWR5IiwiY29uc3RydWN0TW9kdWxlcyIsImNvbmZpZ3VyZU1vZHVsZXMiLCJnZXRNb2R1bGVzRGlmZiIsIkFhIiwiZXhwb3J0QVBJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx1QkFBQTtBQUFBQyxRQUFBLENBQUFELHVCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLHVCQUFBOzs7Q0NBQyxZQUFVO0VBQUM7O0VBQWEsSUFBRztJQUFDLElBQUcsT0FBT08sUUFBQSxHQUFTLEtBQUk7TUFBQyxJQUFJQyxDQUFBLEdBQUVELFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE9BQU87TUFBRUQsQ0FBQSxDQUFFRSxXQUFBLENBQVlILFFBQUEsQ0FBU0ksY0FBQSxDQUFlLGlJQUFpSSxDQUFDLEdBQUVKLFFBQUEsQ0FBU0ssSUFBQSxDQUFLRixXQUFBLENBQVlGLENBQUM7SUFBQztFQUFDLFNBQU9LLENBQUEsRUFBTjtJQUFTQyxPQUFBLENBQVFDLEtBQUEsQ0FBTSxrQ0FBaUNGLENBQUM7RUFBQztBQUFDLEdBQUc7QUFDalcsSUFBSUcsRUFBQSxHQUFLLE9BQU9DLFVBQUEsR0FBYSxNQUFNQSxVQUFBLEdBQWEsT0FBT0MsTUFBQSxHQUFTLE1BQU1BLE1BQUEsR0FBUyxPQUFPQyxNQUFBLEdBQVMsTUFBTUEsTUFBQSxHQUFTLE9BQU9DLElBQUEsR0FBTyxNQUFNQSxJQUFBLEdBQU8sQ0FBQztBQUMxSSxTQUFTQyxHQUFHQyxDQUFBLEVBQUc7RUFDYixPQUFPQSxDQUFBLElBQUtBLENBQUEsQ0FBRUMsVUFBQSxJQUFjQyxNQUFBLENBQU9DLFNBQUEsQ0FBVUMsY0FBQSxDQUFlQyxJQUFBLENBQUtMLENBQUEsRUFBRyxTQUFTLElBQUlBLENBQUEsQ0FBRXBCLE9BQUEsR0FBVW9CLENBQUE7QUFDL0Y7QUFDQSxTQUFTTSxHQUFHTixDQUFBLEVBQUc7RUFDYixJQUFJQSxDQUFBLENBQUVDLFVBQUEsRUFDSixPQUFPRCxDQUFBO0VBQ1QsSUFBSWQsQ0FBQSxHQUFJYyxDQUFBLENBQUVwQixPQUFBO0VBQ1YsSUFBSSxPQUFPTSxDQUFBLElBQUssWUFBWTtJQUMxQixJQUFJSyxDQUFBLEdBQUksU0FBU2dCLEVBQUEsRUFBSTtNQUNuQixPQUFPLGdCQUFnQkEsQ0FBQSxHQUFJQyxPQUFBLENBQVFDLFNBQUEsQ0FBVXZCLENBQUEsRUFBR3dCLFNBQUEsRUFBVyxLQUFLQyxXQUFXLElBQUl6QixDQUFBLENBQUUwQixLQUFBLENBQU0sTUFBTUYsU0FBUztJQUN4RztJQUNBbkIsQ0FBQSxDQUFFWSxTQUFBLEdBQVlqQixDQUFBLENBQUVpQixTQUFBO0VBQ2xCLE9BQ0VaLENBQUEsR0FBSSxDQUFDO0VBQ1AsT0FBT1csTUFBQSxDQUFPVyxjQUFBLENBQWV0QixDQUFBLEVBQUcsY0FBYztJQUFFdUIsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHWixNQUFBLENBQU9hLElBQUEsQ0FBS2YsQ0FBQyxFQUFFZ0IsT0FBQSxDQUFRLFVBQVNULENBQUEsRUFBRztJQUMvRixJQUFJVSxDQUFBLEdBQUlmLE1BQUEsQ0FBT2dCLHdCQUFBLENBQXlCbEIsQ0FBQSxFQUFHTyxDQUFDO0lBQzVDTCxNQUFBLENBQU9XLGNBQUEsQ0FBZXRCLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxDQUFFRSxHQUFBLEdBQU1GLENBQUEsR0FBSTtNQUN0Q0csVUFBQSxFQUFZO01BQ1pELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7UUFDZCxPQUFPbkIsQ0FBQSxDQUFFTyxDQUFBO01BQ1g7SUFDRixDQUFDO0VBQ0gsQ0FBQyxHQUFHaEIsQ0FBQTtBQUNOO0FBQ0EsU0FBUzhCLEdBQUEsRUFBSyxDQUNkO0FBQ0FuQixNQUFBLENBQU9vQixNQUFBLENBQU9ELEVBQUEsRUFBSTtFQUNoQnpDLE9BQUEsRUFBU3lDLEVBQUE7RUFDVEUsUUFBQSxFQUFVRixFQUFBO0VBQ1ZHLE1BQUEsRUFBUSxTQUFBQSxDQUFBLEVBQVcsQ0FDbkI7RUFDQXZCLFVBQUEsRUFBWTtBQUNkLENBQUM7QUFDRHdCLE9BQUEsQ0FBUXRCLFNBQUEsQ0FBVXVCLE9BQUEsS0FBWUQsT0FBQSxDQUFRdEIsU0FBQSxDQUFVdUIsT0FBQSxHQUFVRCxPQUFBLENBQVF0QixTQUFBLENBQVV3QixlQUFBLElBQW1CRixPQUFBLENBQVF0QixTQUFBLENBQVV5QixrQkFBQSxJQUFzQkgsT0FBQSxDQUFRdEIsU0FBQSxDQUFVMEIsaUJBQUEsSUFBcUJKLE9BQUEsQ0FBUXRCLFNBQUEsQ0FBVTJCLGdCQUFBLElBQW9CTCxPQUFBLENBQVF0QixTQUFBLENBQVU0QixxQkFBQSxJQUF5QixVQUFTL0IsQ0FBQSxFQUFHO0VBQ3pRLE1BQU1kLENBQUEsSUFBSyxLQUFLRCxRQUFBLElBQVksS0FBSytDLGFBQUEsRUFBZUMsZ0JBQUEsQ0FBaUJqQyxDQUFDO0VBQ2xFLElBQUlULENBQUEsR0FBSUwsQ0FBQSxDQUFFZ0QsTUFBQTtFQUNWLE9BQU8sRUFBRTNDLENBQUEsSUFBSyxLQUFLTCxDQUFBLENBQUVpRCxJQUFBLENBQUs1QyxDQUFDLE1BQU0sTUFDL0I7RUFDRixPQUFPQSxDQUFBLEdBQUk7QUFDYjtBQUNBa0MsT0FBQSxDQUFRdEIsU0FBQSxDQUFVaUMsT0FBQSxLQUFZWCxPQUFBLENBQVF0QixTQUFBLENBQVVpQyxPQUFBLEdBQVUsVUFBU3BDLENBQUEsRUFBRztFQUNwRSxJQUFJZCxDQUFBLEdBQUk7RUFDUixJQUFJLENBQUNELFFBQUEsQ0FBU29ELGVBQUEsQ0FBZ0JDLFFBQUEsQ0FBU3BELENBQUMsR0FDdEMsT0FBTztFQUNULEdBQUc7SUFDRCxJQUFJQSxDQUFBLENBQUV3QyxPQUFBLENBQVExQixDQUFDLEdBQ2IsT0FBT2QsQ0FBQTtJQUNUQSxDQUFBLEdBQUlBLENBQUEsQ0FBRXFELGFBQUEsSUFBaUJyRCxDQUFBLENBQUVzRCxVQUFBO0VBQzNCLFNBQVN0RCxDQUFBLEtBQU07RUFDZixPQUFPO0FBQ1Q7QUFDQXVDLE9BQUEsQ0FBUXRCLFNBQUEsQ0FBVXNDLE9BQUEsS0FBWWhCLE9BQUEsQ0FBUXRCLFNBQUEsQ0FBVXNDLE9BQUEsR0FBVSxVQUFTdkQsQ0FBQSxFQUFHO0VBQ3BFLE1BQU1LLENBQUEsR0FBSU4sUUFBQSxDQUFTeUQsc0JBQUEsQ0FBdUI7RUFDMUNDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRMUQsQ0FBQyxNQUFNQSxDQUFBLEdBQUksQ0FBQ0EsQ0FBQyxJQUFJQSxDQUFBLENBQUU4QixPQUFBLENBQVNULENBQUEsSUFBTTtJQUM5QyxNQUFNVSxDQUFBLEdBQUlWLENBQUEsWUFBYXNDLElBQUE7SUFDdkJ0RCxDQUFBLENBQUVILFdBQUEsQ0FBWTZCLENBQUEsR0FBSVYsQ0FBQSxHQUFJdEIsUUFBQSxDQUFTSSxjQUFBLENBQWVrQixDQUFDLENBQUM7RUFDbEQsQ0FBQyxHQUFHLEtBQUt1QyxZQUFBLENBQWF2RCxDQUFBLEVBQUcsS0FBS3dELFVBQVU7QUFDMUM7QUFDQXRCLE9BQUEsQ0FBUXRCLFNBQUEsQ0FBVTZDLHNCQUFBLEtBQTJCdkIsT0FBQSxDQUFRdEIsU0FBQSxDQUFVNkMsc0JBQUEsR0FBeUIsVUFBU2hELENBQUEsRUFBRztFQUNsR0EsQ0FBQSxHQUFJVSxTQUFBLENBQVV3QixNQUFBLEtBQVcsSUFBSSxPQUFLLENBQUMsQ0FBQ2xDLENBQUE7RUFDcEMsTUFBTWQsQ0FBQSxHQUFJLEtBQUtzRCxVQUFBO0lBQVlqRCxDQUFBLEdBQUlLLE1BQUEsQ0FBT3FELGdCQUFBLENBQWlCL0QsQ0FBQSxFQUFHLElBQUk7SUFBR3FCLENBQUEsR0FBSTJDLFFBQUEsQ0FBUzNELENBQUEsQ0FBRTRELGdCQUFBLENBQWlCLGtCQUFrQixDQUFDO0lBQUdsQyxDQUFBLEdBQUlpQyxRQUFBLENBQVMzRCxDQUFBLENBQUU0RCxnQkFBQSxDQUFpQixtQkFBbUIsQ0FBQztJQUFHQyxDQUFBLEdBQUksS0FBS0MsU0FBQSxHQUFZbkUsQ0FBQSxDQUFFbUUsU0FBQSxHQUFZbkUsQ0FBQSxDQUFFb0UsU0FBQTtJQUFXQyxDQUFBLEdBQUksS0FBS0YsU0FBQSxHQUFZbkUsQ0FBQSxDQUFFbUUsU0FBQSxHQUFZLEtBQUtHLFlBQUEsR0FBZWpELENBQUEsR0FBSXJCLENBQUEsQ0FBRW9FLFNBQUEsR0FBWXBFLENBQUEsQ0FBRXNFLFlBQUE7SUFBY0MsQ0FBQSxHQUFJLEtBQUtDLFVBQUEsR0FBYXhFLENBQUEsQ0FBRXdFLFVBQUEsR0FBYXhFLENBQUEsQ0FBRXlFLFVBQUE7SUFBWUMsQ0FBQSxHQUFJLEtBQUtGLFVBQUEsR0FBYXhFLENBQUEsQ0FBRXdFLFVBQUEsR0FBYSxLQUFLRyxXQUFBLEdBQWM1QyxDQUFBLEdBQUkvQixDQUFBLENBQUV5RSxVQUFBLEdBQWF6RSxDQUFBLENBQUUyRSxXQUFBO0lBQWFDLENBQUEsR0FBSVYsQ0FBQSxJQUFLLENBQUNHLENBQUE7RUFDOWMsQ0FBQ0gsQ0FBQSxJQUFLRyxDQUFBLEtBQU12RCxDQUFBLEtBQU1kLENBQUEsQ0FBRW9FLFNBQUEsR0FBWSxLQUFLRCxTQUFBLEdBQVluRSxDQUFBLENBQUVtRSxTQUFBLEdBQVluRSxDQUFBLENBQUVzRSxZQUFBLEdBQWUsSUFBSWpELENBQUEsR0FBSSxLQUFLaUQsWUFBQSxHQUFlLEtBQUtDLENBQUEsSUFBS0csQ0FBQSxLQUFNNUQsQ0FBQSxLQUFNZCxDQUFBLENBQUV5RSxVQUFBLEdBQWEsS0FBS0QsVUFBQSxHQUFheEUsQ0FBQSxDQUFFd0UsVUFBQSxHQUFheEUsQ0FBQSxDQUFFMkUsV0FBQSxHQUFjLElBQUk1QyxDQUFBLEdBQUksS0FBSzRDLFdBQUEsR0FBYyxLQUFLVCxDQUFBLElBQUtHLENBQUEsSUFBS0UsQ0FBQSxJQUFLRyxDQUFBLEtBQU0sQ0FBQzVELENBQUEsSUFBSyxLQUFLK0QsY0FBQSxDQUFlRCxDQUFDO0FBQ3BSO0FBQ0FsRSxNQUFBLENBQU9vRSxtQkFBQSxHQUFzQnBFLE1BQUEsQ0FBT29FLG1CQUFBLElBQXVCLFVBQVNoRSxDQUFBLEVBQUc7RUFDckUsTUFBTWQsQ0FBQSxHQUFJK0UsSUFBQSxDQUFLQyxHQUFBLENBQUk7RUFDbkIsT0FBT0MsVUFBQSxDQUFXLFlBQVc7SUFDM0JuRSxDQUFBLENBQUU7TUFDQW9FLFVBQUEsRUFBWTtNQUNaQyxhQUFBLEVBQWUsU0FBQUEsQ0FBQSxFQUFXO1FBQ3hCLE9BQU9DLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUcsTUFBTU4sSUFBQSxDQUFLQyxHQUFBLENBQUksSUFBSWhGLENBQUEsQ0FBRTtNQUMxQztJQUNGLENBQUM7RUFDSCxHQUFHLENBQUM7QUFDTjtBQUNBVSxNQUFBLENBQU80RSxrQkFBQSxHQUFxQjVFLE1BQUEsQ0FBTzRFLGtCQUFBLElBQXNCLFVBQVN4RSxDQUFBLEVBQUc7RUFDbkV5RSxZQUFBLENBQWF6RSxDQUFDO0FBQ2hCO0FBQ0EsSUFBSTBFLEVBQUEsR0FBS0EsQ0FBQzFFLENBQUEsR0FBSSxPQUFPMkUsTUFBQSxDQUFPQyxlQUFBLENBQWdCLElBQUlDLFVBQUEsQ0FBVzdFLENBQUMsQ0FBQyxFQUFFOEUsTUFBQSxDQUFPLENBQUM1RixDQUFBLEVBQUdLLENBQUEsTUFBT0EsQ0FBQSxJQUFLLElBQUlBLENBQUEsR0FBSSxLQUFLTCxDQUFBLElBQUtLLENBQUEsQ0FBRXdGLFFBQUEsQ0FBUyxFQUFFLElBQUl4RixDQUFBLEdBQUksS0FBS0wsQ0FBQSxLQUFNSyxDQUFBLEdBQUksSUFBSXdGLFFBQUEsQ0FBUyxFQUFFLEVBQUVDLFdBQUEsQ0FBWSxJQUFJekYsQ0FBQSxHQUFJLEtBQUtMLENBQUEsSUFBSyxNQUFNQSxDQUFBLElBQUssS0FBS0EsQ0FBQSxHQUFJLEVBQUU7QUFDak4sSUFBSStGLEVBQUEsR0FBc0IsZ0JBQUNqRixDQUFBLEtBQU9BLENBQUEsQ0FBRWtGLE9BQUEsR0FBVSxXQUFXbEYsQ0FBQSxDQUFFbUYsSUFBQSxHQUFPLFFBQVFuRixDQUFBLENBQUVvRixJQUFBLEdBQU8sUUFBUXBGLENBQUEsQ0FBRXFGLEtBQUEsR0FBUSxTQUFTckYsQ0FBQSxHQUFJaUYsRUFBQSxJQUFNLENBQUMsQ0FBQztBQUMxSCxJQUFNSyxDQUFBLEdBQUk7SUFDUkMsU0FBQSxFQUFXO0lBQ1hDLEdBQUEsRUFBSztJQUNMQyxLQUFBLEVBQU87SUFDUEMsS0FBQSxFQUFPO0lBQ1BDLElBQUEsRUFBTTtJQUNOQyxHQUFBLEVBQUs7SUFDTEMsR0FBQSxFQUFLO0lBQ0xDLEtBQUEsRUFBTztJQUNQQyxJQUFBLEVBQU07SUFDTkMsRUFBQSxFQUFJO0lBQ0pDLElBQUEsRUFBTTtJQUNOQyxLQUFBLEVBQU87SUFDUEMsTUFBQSxFQUFRO0lBQ1JDLElBQUEsRUFBTTtJQUNOQyxLQUFBLEVBQU87RUFDVDtFQUFHQyxFQUFBLEdBQUs7SUFDTlAsSUFBQSxFQUFNO0lBQ05RLEtBQUEsRUFBTztJQUNQTCxLQUFBLEVBQU87SUFDUE0sUUFBQSxFQUFVO0lBQ1ZDLE9BQUEsRUFBUztFQUNYO0FBQ0EsU0FBU0MsR0FBRzFHLENBQUEsRUFBR2QsQ0FBQSxFQUFHSyxDQUFBLEdBQUksT0FBT2dCLENBQUEsRUFBR1UsQ0FBQSxHQUFJLGtCQUFrQjtFQUNwRCxJQUFJLEVBQUUsYUFBYXJCLE1BQUEsS0FBVyxDQUFDQSxNQUFBLENBQU9KLE9BQUEsQ0FBUUQsQ0FBQSxHQUM1QztFQUNGLE1BQU02RCxDQUFBLEdBQUksQ0FBQyxRQUFRLE9BQU8sUUFBUSxPQUFPLEVBQUV1RCxRQUFBLENBQVNwSCxDQUFDO0lBQUdnRSxDQUFBLEdBQUksRUFBQztFQUM3RCxRQUFRbUQsRUFBQSxDQUFHRSxRQUFBO0lBQUEsS0FDSjtNQUNILElBQUlySCxDQUFBLEtBQU0sU0FDUjtNQUNGO0lBQUEsS0FDRztNQUNILElBQUksQ0FBQyxDQUFDLFNBQVMsTUFBTSxFQUFFb0gsUUFBQSxDQUFTcEgsQ0FBQyxHQUMvQjtNQUNGO0lBQUEsS0FDRztNQUNILElBQUksQ0FBQzZELENBQUEsSUFBS3BELENBQUEsRUFDUjtNQUNGO0VBQUE7RUFFSk8sQ0FBQSxJQUFLZ0QsQ0FBQSxDQUFFc0QsSUFBQSxDQUFLdEcsQ0FBQztFQUNiLE1BQU1rRCxDQUFBLEdBQUk7SUFBeUJHLENBQUEsR0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtFQVV2QzVELENBQUEsS0FBTW9ELENBQUEsSUFBS0csQ0FBQSxDQUFFdUQsT0FBQSxDQUFRbEQsQ0FBQSxFQUFHM0MsQ0FBQyxHQUFHL0IsQ0FBQSxHQUFJLEtBQUt1RSxDQUFBLE1BQU92RSxDQUFBLE1BQU9BLENBQUEsR0FBSSxLQUFLdUUsQ0FBQSxLQUFNdkUsQ0FBQTtFQUNsRSxJQUFJO0lBQ0ZrRSxDQUFBLEdBQUk3QyxDQUFBLEdBQUlmLE9BQUEsQ0FBUUQsQ0FBQSxFQUFHLEdBQUdMLENBQUEsT0FBUSxHQUFHcUUsQ0FBQyxJQUFJL0QsT0FBQSxDQUFRRCxDQUFBLEVBQUdMLENBQUEsRUFBRyxHQUFHcUUsQ0FBQyxJQUFJL0QsT0FBQSxDQUFRRCxDQUFBLEVBQUdMLENBQUM7RUFDMUUsUUFBRSxDQUNGO0FBQ0Y7QUFDQXdILEVBQUEsQ0FBR0UsUUFBQSxHQUFXO0FBQ2QsU0FBU0csR0FBRy9HLENBQUEsRUFBRztFQUNiMEcsRUFBQSxDQUFHRSxRQUFBLEdBQVc1RyxDQUFBO0FBQ2hCO0FBQ0EsSUFBTWdILENBQUEsR0FBSU4sRUFBQSxDQUFHTyxJQUFBLENBQUtySCxNQUFBLEVBQVEsS0FBRTtFQUFHc0gsQ0FBQSxHQUFJUixFQUFBLENBQUdPLElBQUEsQ0FBS3JILE1BQUEsRUFBUSxJQUFFO0FBQ3JELFNBQVN1SCxHQUFHbkgsQ0FBQSxFQUFHO0VBQ2IsT0FBT0UsTUFBQSxDQUFPQyxTQUFBLENBQVU0RSxRQUFBLENBQVMxRSxJQUFBLENBQUtMLENBQUMsRUFBRW9ILEtBQUEsQ0FBTSxlQUFlLEVBQUUsR0FBR0MsV0FBQSxDQUFZO0FBQ2pGO0FBQ0EsU0FBU0MsRUFBRXRILENBQUEsRUFBRztFQUNaLE9BQU9tSCxFQUFBLENBQUduSCxDQUFDLE1BQU0sY0FBY21ILEVBQUEsQ0FBR25ILENBQUMsTUFBTTtBQUMzQztBQUNBLFNBQVN1SCxFQUFFdkgsQ0FBQSxFQUFHO0VBQ1osT0FBT21ILEVBQUEsQ0FBR25ILENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVN3SCxHQUFHeEgsQ0FBQSxFQUFHO0VBQ2IsT0FBT21ILEVBQUEsQ0FBR25ILENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVN5SCxHQUFHekgsQ0FBQSxFQUFHO0VBQ2IsT0FBT21ILEVBQUEsQ0FBR25ILENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVMwSCxHQUFHMUgsQ0FBQSxFQUFHO0VBQ2IsT0FBT21ILEVBQUEsQ0FBR25ILENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVMySCxHQUFHM0gsQ0FBQSxFQUFHO0VBQ2IsT0FBT21ILEVBQUEsQ0FBR25ILENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVM0SCxFQUFFNUgsQ0FBQSxFQUFHO0VBQ1osT0FBT0EsQ0FBQSxHQUFJRSxNQUFBLENBQU9hLElBQUEsQ0FBS2YsQ0FBQyxFQUFFa0MsTUFBQSxLQUFXLEtBQUtsQyxDQUFBLENBQUVXLFdBQUEsS0FBZ0JULE1BQUEsR0FBUztBQUN2RTtBQUNBLFNBQVMySCxHQUFHN0gsQ0FBQSxFQUFHO0VBQ2IsT0FBT0EsQ0FBQSxHQUFJLE1BQU1BLENBQUEsR0FBSSxNQUNyQkEsQ0FBQSxLQUFNLE1BQU1BLENBQUEsS0FBTSxNQUNsQkEsQ0FBQSxLQUFNLE9BQ05BLENBQUEsR0FBSSxNQUFNQSxDQUFBLEdBQUksTUFDZEEsQ0FBQSxHQUFJLE1BQU1BLENBQUEsR0FBSSxPQUNkQSxDQUFBLEdBQUksT0FBT0EsQ0FBQSxHQUFJLE9BQ2ZBLENBQUEsR0FBSSxPQUFPQSxDQUFBLEdBQUk7QUFDakI7QUFDQSxlQUFlOEgsR0FBRzlILENBQUEsRUFBR2QsQ0FBQSxHQUFJQSxDQUFBLEtBQU0sQ0FDL0IsR0FBR0ssQ0FBQSxHQUFJQSxDQUFBLEtBQU0sQ0FDYixHQUFHO0VBQ0QsZUFBZWdCLEVBQUVVLENBQUEsRUFBR21DLENBQUEsRUFBR0csQ0FBQSxFQUFHO0lBQ3hCLElBQUk7TUFDRixNQUFNdEMsQ0FBQSxDQUFFOEcsUUFBQSxDQUFTOUcsQ0FBQSxDQUFFK0csSUFBSSxHQUFHLE1BQU01RSxDQUFBLENBQUV1RSxFQUFBLENBQUcxRyxDQUFBLENBQUUrRyxJQUFJLElBQUksQ0FBQyxJQUFJL0csQ0FBQSxDQUFFK0csSUFBSTtJQUM1RCxRQUFFO01BQ0F6RSxDQUFBLENBQUVvRSxFQUFBLENBQUcxRyxDQUFBLENBQUUrRyxJQUFJLElBQUksQ0FBQyxJQUFJL0csQ0FBQSxDQUFFK0csSUFBSTtJQUM1QjtFQUNGO0VBQ0EsT0FBT2hJLENBQUEsQ0FBRThFLE1BQUEsQ0FBTyxPQUFPN0QsQ0FBQSxFQUFHbUMsQ0FBQSxNQUFPLE1BQU1uQyxDQUFBLEVBQUdWLENBQUEsQ0FBRTZDLENBQUEsRUFBR2xFLENBQUEsRUFBR0ssQ0FBQyxJQUFJMEksT0FBQSxDQUFRQyxPQUFBLENBQVEsQ0FBQztBQUMxRTtBQUNBLFNBQVNDLEdBQUduSSxDQUFBLEVBQUc7RUFDYixPQUFPMkMsS0FBQSxDQUFNeEMsU0FBQSxDQUFVaUksS0FBQSxDQUFNL0gsSUFBQSxDQUFLTCxDQUFDO0FBQ3JDO0FBQ0EsU0FBU3FJLEdBQUdySSxDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixPQUFPLFlBQVc7SUFDaEIsTUFBTUssQ0FBQSxHQUFJO01BQU1nQixDQUFBLEdBQUlHLFNBQUE7SUFDcEJkLE1BQUEsQ0FBT3VFLFVBQUEsQ0FBVyxNQUFNbkUsQ0FBQSxDQUFFWSxLQUFBLENBQU1yQixDQUFBLEVBQUdnQixDQUFDLEdBQUdyQixDQUFDO0VBQzFDO0FBQ0Y7QUFDQSxTQUFTb0osR0FBR3RJLENBQUEsRUFBRztFQUNiLE9BQU9BLENBQUEsQ0FBRXVJLElBQUEsQ0FBS0MsS0FBQSxDQUFNLEdBQUcsRUFBRUMsR0FBQSxDQUFJO0FBQy9CO0FBQ0EsU0FBU0MsR0FBRzFJLENBQUEsRUFBRztFQUNiLE9BQU8seUJBQXlCMkksSUFBQSxDQUFLM0ksQ0FBQztBQUN4QztBQUNBLFNBQVM0SSxHQUFHNUksQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBRztFQUNuQixJQUFJZ0IsQ0FBQTtFQUNKLE9BQU8sSUFBSVUsQ0FBQSxLQUFNO0lBQ2YsTUFBTW1DLENBQUEsR0FBSTtNQUFNRyxDQUFBLEdBQUlBLENBQUEsS0FBTTtRQUN4QmhELENBQUEsR0FBSSxNQUFNaEIsQ0FBQSxJQUFLUyxDQUFBLENBQUVZLEtBQUEsQ0FBTXdDLENBQUEsRUFBR25DLENBQUM7TUFDN0I7TUFBR3dDLENBQUEsR0FBSWxFLENBQUEsSUFBSyxDQUFDZ0IsQ0FBQTtJQUNiWCxNQUFBLENBQU82RSxZQUFBLENBQWFsRSxDQUFDLEdBQUdBLENBQUEsR0FBSVgsTUFBQSxDQUFPdUUsVUFBQSxDQUFXWixDQUFBLEVBQUdyRSxDQUFDLEdBQUd1RSxDQUFBLElBQUt6RCxDQUFBLENBQUVZLEtBQUEsQ0FBTXdDLENBQUEsRUFBR25DLENBQUM7RUFDeEU7QUFDRjtBQUNBLFNBQVM0SCxHQUFHN0ksQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsR0FBSSxRQUFRO0VBQzVCLElBQUlnQixDQUFBO0lBQUdVLENBQUE7SUFBR21DLENBQUE7SUFBR0csQ0FBQSxHQUFJO0lBQU1FLENBQUEsR0FBSTtFQUMzQmxFLENBQUEsS0FBTUEsQ0FBQSxHQUFJLENBQUM7RUFDWCxNQUFNcUUsQ0FBQSxHQUFJLFNBQUFBLENBQUEsRUFBVztJQUNuQkgsQ0FBQSxHQUFJbEUsQ0FBQSxDQUFFdUosT0FBQSxLQUFZLFFBQUssSUFBSTdFLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUdYLENBQUEsR0FBSSxNQUFNSCxDQUFBLEdBQUlwRCxDQUFBLENBQUVZLEtBQUEsQ0FBTUwsQ0FBQSxFQUFHVSxDQUFDLEdBQUdzQyxDQUFBLEtBQU1oRCxDQUFBLEdBQUlVLENBQUEsR0FBSTtFQUNwRjtFQUNBLE9BQU8sWUFBVztJQUNoQixNQUFNNkMsQ0FBQSxHQUFJRyxJQUFBLENBQUtDLEdBQUEsQ0FBSTtJQUNuQixDQUFDVCxDQUFBLElBQUtsRSxDQUFBLENBQUV1SixPQUFBLEtBQVksVUFBT3JGLENBQUEsR0FBSUssQ0FBQTtJQUMvQixNQUFNaUYsQ0FBQSxHQUFJN0osQ0FBQSxJQUFLNEUsQ0FBQSxHQUFJTCxDQUFBO0lBQ25CLE9BQU9sRCxDQUFBLEdBQUksTUFBTVUsQ0FBQSxHQUFJUCxTQUFBLEVBQVdxSSxDQUFBLElBQUssS0FBS0EsQ0FBQSxHQUFJN0osQ0FBQSxJQUFLcUUsQ0FBQSxLQUFNa0IsWUFBQSxDQUFhbEIsQ0FBQyxHQUFHQSxDQUFBLEdBQUksT0FBT0UsQ0FBQSxHQUFJSyxDQUFBLEVBQUdWLENBQUEsR0FBSXBELENBQUEsQ0FBRVksS0FBQSxDQUFNTCxDQUFBLEVBQUdVLENBQUMsR0FBR3NDLENBQUEsS0FBTWhELENBQUEsR0FBSVUsQ0FBQSxHQUFJLFNBQVMsQ0FBQ3NDLENBQUEsSUFBS2hFLENBQUEsQ0FBRXlKLFFBQUEsS0FBYSxVQUFPekYsQ0FBQSxHQUFJWSxVQUFBLENBQVdQLENBQUEsRUFBR21GLENBQUMsSUFBSTNGLENBQUE7RUFDM0w7QUFDRjtBQUNBLFNBQVM2RixHQUFBLEVBQUs7RUFDWixNQUFNakosQ0FBQSxHQUFJO01BQ1JrSixHQUFBLEVBQUs7TUFDTEMsR0FBQSxFQUFLO01BQ0xDLEdBQUEsRUFBSztNQUNMQyxLQUFBLEVBQU87SUFDVDtJQUFHbkssQ0FBQSxHQUFJZ0IsTUFBQSxDQUFPYSxJQUFBLENBQUtmLENBQUMsRUFBRXNKLElBQUEsQ0FBTS9KLENBQUEsSUFBTUssTUFBQSxDQUFPMkosU0FBQSxDQUFVQyxVQUFBLENBQVduQyxXQUFBLENBQVksRUFBRW9DLE9BQUEsQ0FBUWxLLENBQUMsTUFBTSxFQUFFO0VBQzdGLE9BQU9MLENBQUEsS0FBTWMsQ0FBQSxDQUFFZCxDQUFBLElBQUssT0FBS2MsQ0FBQTtBQUMzQjtBQUNBLFNBQVMwSixHQUFHMUosQ0FBQSxFQUFHO0VBQ2IsT0FBT0EsQ0FBQSxDQUFFLEdBQUdnRixXQUFBLENBQVksSUFBSWhGLENBQUEsQ0FBRW9JLEtBQUEsQ0FBTSxDQUFDO0FBQ3ZDO0FBQ0EsU0FBU3VCLEdBQUczSixDQUFBLEtBQU1kLENBQUEsRUFBRztFQUNuQixJQUFJLENBQUNBLENBQUEsQ0FBRWdELE1BQUEsRUFDTCxPQUFPbEMsQ0FBQTtFQUNULE1BQU1ULENBQUEsR0FBSUwsQ0FBQSxDQUFFMEssS0FBQSxDQUFNO0VBQ2xCLElBQUlyQyxDQUFBLENBQUV2SCxDQUFDLEtBQUt1SCxDQUFBLENBQUVoSSxDQUFDLEdBQ2IsV0FBV2dCLENBQUEsSUFBS2hCLENBQUEsRUFDZGdJLENBQUEsQ0FBRWhJLENBQUEsQ0FBRWdCLENBQUEsQ0FBRSxLQUFLUCxDQUFBLENBQUVPLENBQUEsS0FBTUwsTUFBQSxDQUFPb0IsTUFBQSxDQUFPdEIsQ0FBQSxFQUFHO0lBQUUsQ0FBQ08sQ0FBQSxHQUFJLENBQUM7RUFBRSxDQUFDLEdBQUdvSixFQUFBLENBQUczSixDQUFBLENBQUVPLENBQUEsR0FBSWhCLENBQUEsQ0FBRWdCLENBQUEsQ0FBRSxLQUFLTCxNQUFBLENBQU9vQixNQUFBLENBQU90QixDQUFBLEVBQUc7SUFBRSxDQUFDTyxDQUFBLEdBQUloQixDQUFBLENBQUVnQixDQUFBO0VBQUcsQ0FBQztFQUN0RyxPQUFPb0osRUFBQSxDQUFHM0osQ0FBQSxFQUFHLEdBQUdkLENBQUM7QUFDbkI7QUFDQSxTQUFTMkssR0FBRzdKLENBQUEsRUFBRztFQUNiLE1BQU1kLENBQUEsR0FBSStKLEVBQUEsQ0FBRztFQUNiLE9BQU9qSixDQUFBLEdBQUlBLENBQUEsQ0FBRThKLE9BQUEsQ0FBUSxXQUFXLFFBQUcsRUFBRUEsT0FBQSxDQUFRLGVBQWUsUUFBRyxFQUFFQSxPQUFBLENBQVEsV0FBVyxRQUFHLEVBQUVBLE9BQUEsQ0FBUSxRQUFRLFFBQUcsRUFBRUEsT0FBQSxDQUFRLFVBQVUsUUFBRyxFQUFFQSxPQUFBLENBQVEsVUFBVSxRQUFHLEVBQUVBLE9BQUEsQ0FBUSxXQUFXLFFBQUcsRUFBRUEsT0FBQSxDQUFRLFlBQVksUUFBRyxFQUFFQSxPQUFBLENBQVEsWUFBWSxLQUFLLEVBQUVBLE9BQUEsQ0FBUSxZQUFZLFFBQUcsRUFBRUEsT0FBQSxDQUFRLFFBQVEsS0FBSyxHQUFHNUssQ0FBQSxDQUFFaUssR0FBQSxHQUFNbkosQ0FBQSxHQUFJQSxDQUFBLENBQUU4SixPQUFBLENBQVEsY0FBYyxRQUFHLEVBQUVBLE9BQUEsQ0FBUSxTQUFTLFFBQUcsSUFBSTlKLENBQUEsR0FBSUEsQ0FBQSxDQUFFOEosT0FBQSxDQUFRLFNBQVMsTUFBTSxFQUFFQSxPQUFBLENBQVEsYUFBYSxLQUFLLEdBQUc5SixDQUFBO0FBQ3haO0FBQ0EsU0FBUytKLEdBQUcvSixDQUFBLEVBQUc7RUFDYixJQUFJO0lBQ0YsT0FBTyxJQUFJZ0ssR0FBQSxDQUFJaEssQ0FBQyxFQUFFaUssSUFBQTtFQUNwQixRQUFFLENBQ0Y7RUFDQSxPQUFPakssQ0FBQSxDQUFFa0ssU0FBQSxDQUFVLEdBQUcsQ0FBQyxNQUFNLE9BQU90SyxNQUFBLENBQU91SyxRQUFBLENBQVNDLFFBQUEsR0FBV3BLLENBQUEsR0FBSUosTUFBQSxDQUFPdUssUUFBQSxDQUFTRSxNQUFBLEdBQVNySyxDQUFBO0FBQzlGO0FBQ0EsU0FBU3NLLEdBQUEsRUFBSztFQUNaLE9BQU81RixFQUFBLENBQUcsRUFBRTtBQUNkO0FBQ0EsU0FBUzZGLEdBQUd2SyxDQUFBLEVBQUc7RUFDYkosTUFBQSxDQUFPNEssSUFBQSxDQUFLeEssQ0FBQSxFQUFHLFFBQVE7QUFDekI7QUFDQSxTQUFTeUssR0FBR3pLLENBQUEsR0FBSSxJQUFJO0VBQ2xCLE9BQU8sR0FBR0EsQ0FBQSxHQUFJc0UsSUFBQSxDQUFLb0csS0FBQSxDQUFNcEcsSUFBQSxDQUFLcUcsTUFBQSxDQUFPLElBQUksR0FBRyxFQUFFNUYsUUFBQSxDQUFTLEVBQUU7QUFDM0Q7QUFDQSxTQUFTNkYsR0FBRzVLLENBQUEsRUFBR2QsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7RUFDbkIsTUFBTWdCLENBQUEsR0FBSSxPQUFJckIsQ0FBQSx3RkFBbUZLLENBQUE7RUFDakdTLENBQUEsSUFBS2tILENBQUEsQ0FBRTNHLENBQUEsRUFBRyxNQUFNO0FBQ2xCO0FBQ0EsU0FBU3NLLEdBQUc3SyxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0VBQ25CLE1BQU1nQixDQUFBLEdBQUloQixDQUFBLENBQUV1QixLQUFBLEdBQVEsVUFBVTtJQUFPRyxDQUFBLEdBQUkxQixDQUFBLENBQUVnQixDQUFBO0lBQUk2QyxDQUFBLEdBQUksSUFBSWxFLENBQUE7RUFDdkQsSUFBSUssQ0FBQSxDQUFFZ0IsQ0FBQSxJQUFLLGFBQVlnRCxDQUFBLEVBQUc7SUFDeEIsT0FBTyxLQUFLSCxDQUFBLE1BQU8sV0FBVyxLQUFLQSxDQUFBLElBQUtuQyxDQUFBLENBQUVMLEtBQUEsQ0FBTSxNQUFNLEdBQUcyQyxDQUFDLElBQUksS0FBS0gsQ0FBQTtFQUNyRSxHQUFHN0MsQ0FBQSxLQUFNLFNBQVNoQixDQUFBLENBQUV1TCxHQUFBLEVBQUs7SUFDdkIsTUFBTXZILENBQUEsR0FBSWhFLENBQUEsQ0FBRXVMLEdBQUE7SUFDWnZMLENBQUEsQ0FBRXVMLEdBQUEsR0FBTSxVQUFTckgsQ0FBQSxFQUFHO01BQ2xCLE9BQU96RCxDQUFBLENBQUVvRCxDQUFBLEdBQUlHLENBQUEsQ0FBRTNDLEtBQUEsQ0FBTSxNQUFNNkMsQ0FBQztJQUM5QjtFQUNGO0VBQ0EsT0FBT2xFLENBQUE7QUFDVDtBQUNBLElBQU13TCxFQUFBLEdBQUs7QUFDWCxTQUFTQyxHQUFBLEVBQUs7RUFDWixPQUFPcEwsTUFBQSxDQUFPcUwsVUFBQSxDQUFXLGVBQWVGLEVBQUEsS0FBTyxFQUFFckosT0FBQTtBQUNuRDtBQUNBLElBQU13SixFQUFBLEdBQUssT0FBT3RMLE1BQUEsR0FBUyxPQUFPQSxNQUFBLENBQU8ySixTQUFBLElBQWEzSixNQUFBLENBQU8ySixTQUFBLENBQVU0QixRQUFBLEtBQWEsaUJBQWlCeEMsSUFBQSxDQUFLL0ksTUFBQSxDQUFPMkosU0FBQSxDQUFVNEIsUUFBUSxLQUFLdkwsTUFBQSxDQUFPMkosU0FBQSxDQUFVNEIsUUFBQSxLQUFhLGNBQWN2TCxNQUFBLENBQU8ySixTQUFBLENBQVU2QixjQUFBLEdBQWlCO0FBQ3ROLFNBQVNDLEdBQUdyTCxDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixNQUFNSyxDQUFBLEdBQUlvRCxLQUFBLENBQU1DLE9BQUEsQ0FBUTVDLENBQUMsS0FBS3VILENBQUEsQ0FBRXZILENBQUM7SUFBR08sQ0FBQSxHQUFJb0MsS0FBQSxDQUFNQyxPQUFBLENBQVExRCxDQUFDLEtBQUtxSSxDQUFBLENBQUVySSxDQUFDO0VBQy9ELE9BQU9LLENBQUEsSUFBS2dCLENBQUEsR0FBSStLLElBQUEsQ0FBS0MsU0FBQSxDQUFVdkwsQ0FBQyxNQUFNc0wsSUFBQSxDQUFLQyxTQUFBLENBQVVyTSxDQUFDLElBQUljLENBQUEsS0FBTWQsQ0FBQTtBQUNsRTtBQUNBLElBQU1zTSxDQUFBLEdBQU4sTUFBUTtFQU9OLE9BQU9DLFlBQVl2TSxDQUFBLEVBQUc7SUFDcEIsT0FBT0EsQ0FBQSxDQUFFd00sT0FBQSxJQUFXLENBQ2xCLFFBQ0EsUUFDQSxNQUNBLE9BQ0EsV0FDQSxTQUNBLE1BQ0EsT0FDQSxTQUNBLFVBQ0EsUUFDQSxRQUNBLFNBQ0EsVUFDQSxTQUNBLE1BQ0YsQ0FBRS9FLFFBQUEsQ0FBU3pILENBQUEsQ0FBRXdNLE9BQU87RUFDdEI7RUFPQSxPQUFPQyxlQUFlek0sQ0FBQSxFQUFHO0lBQ3ZCLE9BQU9BLENBQUEsSUFBS0EsQ0FBQSxDQUFFd00sT0FBQSxJQUFXLENBQ3ZCLE1BQ0EsTUFDRixDQUFFL0UsUUFBQSxDQUFTekgsQ0FBQSxDQUFFd00sT0FBTztFQUN0QjtFQVNBLE9BQU9FLEtBQUsxTSxDQUFBLEVBQUdLLENBQUEsR0FBSSxNQUFNZ0IsQ0FBQSxHQUFJLENBQUMsR0FBRztJQUMvQixNQUFNVSxDQUFBLEdBQUloQyxRQUFBLENBQVNFLGFBQUEsQ0FBY0QsQ0FBQztJQUNsQyxJQUFJeUQsS0FBQSxDQUFNQyxPQUFBLENBQVFyRCxDQUFDLEdBQUc7TUFDcEIsTUFBTTZELENBQUEsR0FBSTdELENBQUEsQ0FBRXNNLE1BQUEsQ0FBUXRJLENBQUEsSUFBTUEsQ0FBQSxLQUFNLE1BQU07TUFDdEN0QyxDQUFBLENBQUU2SyxTQUFBLENBQVVDLEdBQUEsQ0FBSSxHQUFHM0ksQ0FBQztJQUN0QixPQUNFN0QsQ0FBQSxJQUFLMEIsQ0FBQSxDQUFFNkssU0FBQSxDQUFVQyxHQUFBLENBQUl4TSxDQUFDO0lBQ3hCLFdBQVc2RCxDQUFBLElBQUs3QyxDQUFBLEVBQ2RMLE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBS0UsQ0FBQSxFQUFHNkMsQ0FBQyxNQUFNbkMsQ0FBQSxDQUFFbUMsQ0FBQSxJQUFLN0MsQ0FBQSxDQUFFNkMsQ0FBQTtJQUMxRCxPQUFPbkMsQ0FBQTtFQUNUO0VBT0EsT0FBTytLLEtBQUs5TSxDQUFBLEVBQUc7SUFDYixPQUFPRCxRQUFBLENBQVNJLGNBQUEsQ0FBZUgsQ0FBQztFQUNsQztFQU9BLE9BQU8rTSxPQUFPL00sQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDbEJvRCxLQUFBLENBQU1DLE9BQUEsQ0FBUXJELENBQUMsSUFBSUEsQ0FBQSxDQUFFeUIsT0FBQSxDQUFTVCxDQUFBLElBQU1yQixDQUFBLENBQUVFLFdBQUEsQ0FBWW1CLENBQUMsQ0FBQyxJQUFJckIsQ0FBQSxDQUFFRSxXQUFBLENBQVlHLENBQUM7RUFDekU7RUFPQSxPQUFPa0QsUUFBUXZELENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ25Cb0QsS0FBQSxDQUFNQyxPQUFBLENBQVFyRCxDQUFDLEtBQUtBLENBQUEsR0FBSUEsQ0FBQSxDQUFFMk0sT0FBQSxDQUFRLEdBQUczTSxDQUFBLENBQUV5QixPQUFBLENBQVNULENBQUEsSUFBTXJCLENBQUEsQ0FBRXVELE9BQUEsQ0FBUWxDLENBQUMsQ0FBQyxLQUFLckIsQ0FBQSxDQUFFdUQsT0FBQSxDQUFRbEQsQ0FBQztFQUNwRjtFQVFBLE9BQU80TSxLQUFLak4sQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDaEIsTUFBTWdCLENBQUEsR0FBSXRCLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLEtBQUs7TUFBRzhCLENBQUEsR0FBSS9CLENBQUEsQ0FBRXNELFVBQUE7SUFDL0N2QixDQUFBLENBQUU2QixZQUFBLENBQWF2QyxDQUFBLEVBQUdyQixDQUFDLEdBQUcrQixDQUFBLENBQUU2QixZQUFBLENBQWE1RCxDQUFBLEVBQUdLLENBQUMsR0FBRzBCLENBQUEsQ0FBRTZCLFlBQUEsQ0FBYXZELENBQUEsRUFBR2dCLENBQUMsR0FBR1UsQ0FBQSxDQUFFbUwsV0FBQSxDQUFZN0wsQ0FBQztFQUNuRjtFQVVBLE9BQU8rSSxLQUFLcEssQ0FBQSxHQUFJRCxRQUFBLEVBQVVNLENBQUEsRUFBRztJQUMzQixPQUFPTCxDQUFBLENBQUVtTixhQUFBLENBQWM5TSxDQUFDO0VBQzFCO0VBT0EsT0FBTzRCLElBQUlqQyxDQUFBLEVBQUc7SUFDWixPQUFPRCxRQUFBLENBQVNxTixjQUFBLENBQWVwTixDQUFDO0VBQ2xDO0VBVUEsT0FBT3FOLFFBQVFyTixDQUFBLEdBQUlELFFBQUEsRUFBVU0sQ0FBQSxFQUFHO0lBQzlCLE9BQU9MLENBQUEsQ0FBRStDLGdCQUFBLENBQWlCMUMsQ0FBQztFQUM3QjtFQUlBLFdBQVdpTixrQkFBQSxFQUFvQjtJQUM3QixPQUFPLDBEQUEwRCxDQUFDLFFBQVEsWUFBWSxTQUFTLFVBQVUsVUFBVSxPQUFPLEtBQUssRUFBRUMsR0FBQSxDQUFLbE4sQ0FBQSxJQUFNLGVBQWVBLENBQUEsSUFBSyxFQUFFbU4sSUFBQSxDQUFLLElBQUk7RUFDN0s7RUFNQSxPQUFPQyxjQUFjek4sQ0FBQSxFQUFHO0lBQ3RCLE9BQU9pSixFQUFBLENBQUdqSixDQUFBLENBQUUrQyxnQkFBQSxDQUFpQnVKLENBQUEsQ0FBRWdCLGlCQUFpQixDQUFDLEVBQUUxSCxNQUFBLENBQU8sQ0FBQ3ZGLENBQUEsRUFBR2dCLENBQUEsS0FBTWlMLENBQUEsQ0FBRW9CLGFBQUEsQ0FBY3JNLENBQUMsS0FBS2lMLENBQUEsQ0FBRXFCLDBCQUFBLENBQTJCdE0sQ0FBQyxJQUFJLENBQUMsR0FBR2hCLENBQUEsRUFBR2dCLENBQUMsSUFBSSxDQUFDLEdBQUdoQixDQUFBLEVBQUcsR0FBR2lNLENBQUEsQ0FBRXNCLHVCQUFBLENBQXdCdk0sQ0FBQyxDQUFDLEdBQUcsRUFBRTtFQUNyTDtFQVlBLE9BQU93TSxlQUFlN04sQ0FBQSxFQUFHSyxDQUFBLEdBQUksT0FBSTtJQUMvQixNQUFNZ0IsQ0FBQSxHQUFJaEIsQ0FBQSxHQUFJLGNBQWM7TUFBYzBCLENBQUEsR0FBSTFCLENBQUEsR0FBSSxvQkFBb0I7SUFDdEUsSUFBSUwsQ0FBQSxJQUFLQSxDQUFBLENBQUU4TixRQUFBLEtBQWFuSyxJQUFBLENBQUtvSyxZQUFBLElBQWdCL04sQ0FBQSxDQUFFcUIsQ0FBQSxHQUFJO01BQ2pELElBQUk2QyxDQUFBLEdBQUlsRSxDQUFBLENBQUVxQixDQUFBO01BQ1YsSUFBSWlMLENBQUEsQ0FBRUMsV0FBQSxDQUFZckksQ0FBQyxLQUFLLENBQUNvSSxDQUFBLENBQUVvQixhQUFBLENBQWN4SixDQUFDLEtBQUssQ0FBQ29JLENBQUEsQ0FBRUcsY0FBQSxDQUFldkksQ0FBQyxHQUNoRSxJQUFJQSxDQUFBLENBQUVuQyxDQUFBLEdBQ0ptQyxDQUFBLEdBQUlBLENBQUEsQ0FBRW5DLENBQUEsV0FDQ21DLENBQUEsQ0FBRVosVUFBQSxDQUFXdkIsQ0FBQSxHQUNwQm1DLENBQUEsR0FBSUEsQ0FBQSxDQUFFWixVQUFBLENBQVd2QixDQUFBLE9BRWpCLE9BQU9tQyxDQUFBLENBQUVaLFVBQUE7TUFDYixPQUFPLEtBQUt1SyxjQUFBLENBQWUzSixDQUFBLEVBQUc3RCxDQUFDO0lBQ2pDO0lBQ0EsT0FBT0wsQ0FBQTtFQUNUO0VBUUEsT0FBT2dPLFVBQVVoTyxDQUFBLEVBQUc7SUFDbEIsT0FBT3dJLEVBQUEsQ0FBR3hJLENBQUMsSUFBSSxRQUFLQSxDQUFBLElBQUtBLENBQUEsQ0FBRThOLFFBQUEsSUFBWTlOLENBQUEsQ0FBRThOLFFBQUEsS0FBYW5LLElBQUEsQ0FBS29LLFlBQUE7RUFDN0Q7RUFRQSxPQUFPRSxXQUFXak8sQ0FBQSxFQUFHO0lBQ25CLE9BQU93SSxFQUFBLENBQUd4SSxDQUFDLElBQUksUUFBS0EsQ0FBQSxJQUFLQSxDQUFBLENBQUU4TixRQUFBLElBQVk5TixDQUFBLENBQUU4TixRQUFBLEtBQWFuSyxJQUFBLENBQUt1SyxzQkFBQTtFQUM3RDtFQU9BLE9BQU9DLGtCQUFrQm5PLENBQUEsRUFBRztJQUMxQixPQUFPQSxDQUFBLENBQUVvTyxlQUFBLEtBQW9CO0VBQy9CO0VBUUEsT0FBT1YsY0FBYzFOLENBQUEsRUFBRztJQUN0QixNQUFNSyxDQUFBLEdBQUksQ0FDUixTQUNBLFdBQ0Y7SUFDQSxPQUFPTCxDQUFBLElBQUtBLENBQUEsQ0FBRXdNLE9BQUEsR0FBVW5NLENBQUEsQ0FBRW9ILFFBQUEsQ0FBU3pILENBQUEsQ0FBRXdNLE9BQU8sSUFBSTtFQUNsRDtFQU9BLE9BQU82QixZQUFZck8sQ0FBQSxFQUFHO0lBQ3BCLElBQUlLLENBQUEsR0FBSTtJQUNSLElBQUlpTSxDQUFBLENBQUVvQixhQUFBLENBQWMxTixDQUFDLEdBQ25CLFFBQVFBLENBQUEsQ0FBRXNPLElBQUE7TUFBQSxLQUNIO01BQUEsS0FDQTtNQUFBLEtBQ0E7TUFBQSxLQUNBO01BQUEsS0FDQTtNQUFBLEtBQ0E7TUFBQSxLQUNBO01BQUEsS0FDQTtRQUNIak8sQ0FBQSxHQUFJO1FBQ0o7SUFBQSxPQUdKQSxDQUFBLEdBQUlpTSxDQUFBLENBQUU2QixpQkFBQSxDQUFrQm5PLENBQUM7SUFDM0IsT0FBT0ssQ0FBQTtFQUNUO0VBVUEsT0FBT2tPLFlBQVl2TyxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUN2QixJQUFJZ0IsQ0FBQTtJQUNKLE9BQU8sS0FBS2tMLFdBQUEsQ0FBWXZNLENBQUMsS0FBSyxDQUFDLEtBQUt5TSxjQUFBLENBQWV6TSxDQUFDLElBQUksU0FBTSxLQUFLZ08sU0FBQSxDQUFVaE8sQ0FBQyxLQUFLLEtBQUswTixhQUFBLENBQWMxTixDQUFDLElBQUlxQixDQUFBLEdBQUlyQixDQUFBLENBQUU0QixLQUFBLEdBQVFQLENBQUEsR0FBSXJCLENBQUEsQ0FBRXdPLFdBQUEsQ0FBWTVELE9BQUEsQ0FBUSxVQUFLLEVBQUUsR0FBR3ZLLENBQUEsS0FBTWdCLENBQUEsR0FBSUEsQ0FBQSxDQUFFdUosT0FBQSxDQUFRLElBQUk2RCxNQUFBLENBQU9wTyxDQUFBLEVBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSWdCLENBQUEsQ0FBRTJCLE1BQUEsS0FBVztFQUMxTjtFQU9BLE9BQU8wTCxPQUFPMU8sQ0FBQSxFQUFHO0lBQ2YsT0FBT0EsQ0FBQSxHQUFJQSxDQUFBLENBQUUyTyxVQUFBLENBQVczTCxNQUFBLEtBQVcsSUFBSTtFQUN6QztFQVVBLE9BQU80TCxRQUFRNU8sQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDbkIsTUFBTWdCLENBQUEsR0FBSSxDQUFDckIsQ0FBQztJQUNaLE9BQU9xQixDQUFBLENBQUUyQixNQUFBLEdBQVMsSUFDaEIsSUFBSWhELENBQUEsR0FBSXFCLENBQUEsQ0FBRXFKLEtBQUEsQ0FBTSxHQUFHLENBQUMsQ0FBQzFLLENBQUEsRUFBRztNQUN0QixJQUFJLEtBQUswTyxNQUFBLENBQU8xTyxDQUFDLEtBQUssQ0FBQyxLQUFLdU8sV0FBQSxDQUFZdk8sQ0FBQSxFQUFHSyxDQUFDLEdBQzFDLE9BQU87TUFDVEwsQ0FBQSxDQUFFMk8sVUFBQSxJQUFjdE4sQ0FBQSxDQUFFc0csSUFBQSxDQUFLLEdBQUdsRSxLQUFBLENBQU1vTCxJQUFBLENBQUs3TyxDQUFBLENBQUUyTyxVQUFVLENBQUM7SUFDcEQ7SUFDRixPQUFPO0VBQ1Q7RUFPQSxPQUFPRyxhQUFhOU8sQ0FBQSxFQUFHO0lBQ3JCLE1BQU1LLENBQUEsR0FBSWlNLENBQUEsQ0FBRUksSUFBQSxDQUFLLEtBQUs7SUFDdEIsT0FBT3JNLENBQUEsQ0FBRTBPLFNBQUEsR0FBWS9PLENBQUEsRUFBR0ssQ0FBQSxDQUFFMk8saUJBQUEsR0FBb0I7RUFDaEQ7RUFPQSxPQUFPQyxpQkFBaUJqUCxDQUFBLEVBQUc7SUFDekIsT0FBT3NNLENBQUEsQ0FBRW9CLGFBQUEsQ0FBYzFOLENBQUMsSUFBSUEsQ0FBQSxDQUFFNEIsS0FBQSxDQUFNb0IsTUFBQSxHQUFTaEQsQ0FBQSxDQUFFOE4sUUFBQSxLQUFhbkssSUFBQSxDQUFLdUwsU0FBQSxHQUFZbFAsQ0FBQSxDQUFFZ0QsTUFBQSxHQUFTaEQsQ0FBQSxDQUFFd08sV0FBQSxDQUFZeEwsTUFBQTtFQUN4RztFQU1BLFdBQVdtTSxjQUFBLEVBQWdCO0lBQ3pCLE9BQU8sQ0FDTCxXQUNBLFdBQ0EsU0FDQSxjQUNBLFVBQ0EsT0FDQSxNQUNBLE1BQ0EsWUFDQSxjQUNBLFVBQ0EsVUFDQSxRQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLFVBQ0EsVUFDQSxNQUNBLE1BQ0EsUUFDQSxPQUNBLFlBQ0EsTUFDQSxVQUNBLEtBQ0EsT0FDQSxRQUNBLFdBQ0EsU0FDQSxTQUNBLFNBQ0EsTUFDQSxTQUNBLE1BQ0EsUUFDRjtFQUNGO0VBT0EsT0FBT3hCLDJCQUEyQjNOLENBQUEsRUFBRztJQUNuQyxJQUFJSyxDQUFBO0lBQ0ppSSxFQUFBLENBQUd0SSxDQUFDLEtBQUtLLENBQUEsR0FBSU4sUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSyxHQUFHSSxDQUFBLENBQUUwTyxTQUFBLEdBQVkvTyxDQUFBLElBQUtLLENBQUEsR0FBSUwsQ0FBQTtJQUNuRSxNQUFNcUIsQ0FBQSxHQUFLVSxDQUFBLElBQU0sQ0FBQ3VLLENBQUEsQ0FBRTZDLGFBQUEsQ0FBYzFILFFBQUEsQ0FBUzFGLENBQUEsQ0FBRXlLLE9BQUEsQ0FBUXJFLFdBQUEsQ0FBWSxDQUFDLEtBQUsxRSxLQUFBLENBQU1vTCxJQUFBLENBQUs5TSxDQUFBLENBQUVxTixRQUFRLEVBQUVDLEtBQUEsQ0FBTWhPLENBQUM7SUFDckcsT0FBT29DLEtBQUEsQ0FBTW9MLElBQUEsQ0FBS3hPLENBQUEsQ0FBRStPLFFBQVEsRUFBRUMsS0FBQSxDQUFNaE8sQ0FBQztFQUN2QztFQU9BLE9BQU91TSx3QkFBd0I1TixDQUFBLEVBQUc7SUFDaEMsT0FBT3NNLENBQUEsQ0FBRXFCLDBCQUFBLENBQTJCM04sQ0FBQyxJQUFJLENBQUNBLENBQUMsSUFBSXlELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSzdPLENBQUEsQ0FBRW9QLFFBQVEsRUFBRXhKLE1BQUEsQ0FBTyxDQUFDdkYsQ0FBQSxFQUFHZ0IsQ0FBQSxLQUFNLENBQUMsR0FBR2hCLENBQUEsRUFBRyxHQUFHaU0sQ0FBQSxDQUFFc0IsdUJBQUEsQ0FBd0J2TSxDQUFDLENBQUMsR0FBRyxFQUFFO0VBQ3BJO0VBT0EsT0FBT2lPLFVBQVV0UCxDQUFBLEVBQUc7SUFDbEIsT0FBT3NJLEVBQUEsQ0FBR3RJLENBQUMsSUFBSUQsUUFBQSxDQUFTcU4sY0FBQSxDQUFlcE4sQ0FBQyxJQUFJQSxDQUFBO0VBQzlDO0VBT0EsT0FBT3VQLFNBQVN2UCxDQUFBLEVBQUc7SUFDakIsT0FBT0EsQ0FBQSxDQUFFd00sT0FBQSxDQUFRckUsV0FBQSxDQUFZLE1BQU07RUFDckM7RUFPQSxPQUFPcUgsT0FBT3hQLENBQUEsRUFBRztJQUNmLE1BQU1LLENBQUEsR0FBSUwsQ0FBQSxDQUFFeVAscUJBQUEsQ0FBc0I7TUFBR3BPLENBQUEsR0FBSVgsTUFBQSxDQUFPZ1AsV0FBQSxJQUFlM1AsUUFBQSxDQUFTb0QsZUFBQSxDQUFnQnNCLFVBQUE7TUFBWTFDLENBQUEsR0FBSXJCLE1BQUEsQ0FBT2lQLFdBQUEsSUFBZTVQLFFBQUEsQ0FBU29ELGVBQUEsQ0FBZ0JpQixTQUFBO01BQVdGLENBQUEsR0FBSTdELENBQUEsQ0FBRXVQLEdBQUEsR0FBTTdOLENBQUE7TUFBR3NDLENBQUEsR0FBSWhFLENBQUEsQ0FBRXdQLElBQUEsR0FBT3hPLENBQUE7SUFDOUwsT0FBTztNQUNMdU8sR0FBQSxFQUFLMUwsQ0FBQTtNQUNMMkwsSUFBQSxFQUFNeEwsQ0FBQTtNQUNOeUwsTUFBQSxFQUFRNUwsQ0FBQSxHQUFJN0QsQ0FBQSxDQUFFMFAsTUFBQTtNQUNkQyxLQUFBLEVBQU8zTCxDQUFBLEdBQUloRSxDQUFBLENBQUU0UDtJQUNmO0VBQ0Y7QUFDRjtBQUNBLFNBQVNDLEdBQUdwUCxDQUFBLEVBQUc7RUFDYixPQUFPLENBQUMsYUFBYTJJLElBQUEsQ0FBSzNJLENBQUM7QUFDN0I7QUFDQSxTQUFTcVAsR0FBR3JQLENBQUEsRUFBRztFQUNiLE1BQU1kLENBQUEsR0FBSVUsTUFBQSxDQUFPcUQsZ0JBQUEsQ0FBaUJqRCxDQUFDO0lBQUdULENBQUEsR0FBSStQLFVBQUEsQ0FBV3BRLENBQUEsQ0FBRXFRLFFBQVE7SUFBR2hQLENBQUEsR0FBSStPLFVBQUEsQ0FBV3BRLENBQUEsQ0FBRXNRLFVBQVUsS0FBS2pRLENBQUEsR0FBSTtJQUFLMEIsQ0FBQSxHQUFJcU8sVUFBQSxDQUFXcFEsQ0FBQSxDQUFFdVEsVUFBVTtJQUFHck0sQ0FBQSxHQUFJa00sVUFBQSxDQUFXcFEsQ0FBQSxDQUFFd1EsY0FBYztJQUFHbk0sQ0FBQSxHQUFJK0wsVUFBQSxDQUFXcFEsQ0FBQSxDQUFFeVEsU0FBUztJQUFHbE0sQ0FBQSxHQUFJbEUsQ0FBQSxHQUFJO0lBQUtxRSxDQUFBLElBQUtyRCxDQUFBLEdBQUloQixDQUFBLElBQUs7RUFDbk8sT0FBT2dFLENBQUEsR0FBSUgsQ0FBQSxHQUFJbkMsQ0FBQSxHQUFJMkMsQ0FBQSxHQUFJSCxDQUFBO0FBQ3pCO0FBQ0EsU0FBU21NLEdBQUc1UCxDQUFBLEVBQUc7RUFDYkEsQ0FBQSxDQUFFNlAsT0FBQSxDQUFRQyxLQUFBLEdBQVF0RSxDQUFBLENBQUVzQyxPQUFBLENBQVE5TixDQUFDLElBQUksU0FBUztBQUM1QztBQUNBLElBQU0rUCxFQUFBLEdBQUs7SUFDVEMsVUFBQSxFQUFZO01BQ1ZDLE9BQUEsRUFBUztRQUNQLGlCQUFpQjtRQUNqQixtQkFBbUI7TUFDckI7SUFDRjtJQUNBQyxhQUFBLEVBQWU7TUFDYkMsU0FBQSxFQUFXO1FBQ1QsY0FBYztNQUNoQjtJQUNGO0lBQ0FDLE9BQUEsRUFBUztNQUNQQyxPQUFBLEVBQVM7UUFDUEMsR0FBQSxFQUFLO01BQ1A7SUFDRjtJQUNBQyxPQUFBLEVBQVM7TUFDUEMsTUFBQSxFQUFRO01BQ1IsaUJBQWlCO01BQ2pCLGNBQWM7SUFDaEI7RUFDRjtFQUFHQyxFQUFBLEdBQUs7SUFDTkMsSUFBQSxFQUFNO0lBQ05DLElBQUEsRUFBTTtJQUNOQyxJQUFBLEVBQU07SUFDTkMsTUFBQSxFQUFRO0VBQ1Y7RUFBR0MsRUFBQSxHQUFLO0lBQ05DLElBQUEsRUFBTTtNQUNKLGNBQWM7SUFDaEI7SUFDQUMsSUFBQSxFQUFNO01BQ0osNkNBQTZDO0lBQy9DO0VBQ0Y7RUFBR0MsRUFBQSxHQUFLO0lBQ05DLE1BQUEsRUFBUTtNQUNOQyxNQUFBLEVBQVE7TUFDUixtQkFBbUI7SUFDckI7SUFDQUMsTUFBQSxFQUFRO01BQ04sV0FBVztJQUNiO0lBQ0FDLFFBQUEsRUFBVTtNQUNSLGFBQWE7SUFDZjtFQUNGO0VBQUdDLEVBQUEsR0FBSztJQUNOUixFQUFBLEVBQUlmLEVBQUE7SUFDSndCLFNBQUEsRUFBV2QsRUFBQTtJQUNYZSxLQUFBLEVBQU9WLEVBQUE7SUFDUGQsVUFBQSxFQUFZaUI7RUFDZDtFQUFHUSxFQUFBLEdBQUssTUFBTUMsRUFBQSxDQUFHO0lBU2YsT0FBT1osR0FBRzVSLENBQUEsRUFBR0ssQ0FBQSxFQUFHO01BQ2QsT0FBT21TLEVBQUEsQ0FBR0MsRUFBQSxDQUFHelMsQ0FBQSxFQUFHSyxDQUFDO0lBQ25CO0lBUUEsT0FBT0EsRUFBRUwsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7TUFDYixPQUFPbVMsRUFBQSxDQUFHQyxFQUFBLENBQUd6UyxDQUFBLEVBQUdLLENBQUM7SUFDbkI7SUFNQSxPQUFPcVMsY0FBYzFTLENBQUEsRUFBRztNQUN0QndTLEVBQUEsQ0FBR0csaUJBQUEsR0FBb0IzUyxDQUFBO0lBQ3pCO0lBUUEsT0FBT3lTLEdBQUd6UyxDQUFBLEVBQUdLLENBQUEsRUFBRztNQUNkLE1BQU1nQixDQUFBLEdBQUltUixFQUFBLENBQUdJLFlBQUEsQ0FBYTVTLENBQUM7TUFDM0IsT0FBTyxDQUFDcUIsQ0FBQSxJQUFLLENBQUNBLENBQUEsQ0FBRWhCLENBQUEsSUFBS0EsQ0FBQSxHQUFJZ0IsQ0FBQSxDQUFFaEIsQ0FBQTtJQUM3QjtJQU1BLE9BQU91UyxhQUFhNVMsQ0FBQSxFQUFHO01BQ3JCLE9BQU9BLENBQUEsQ0FBRXNKLEtBQUEsQ0FBTSxHQUFHLEVBQUUxRCxNQUFBLENBQU8sQ0FBQ3ZFLENBQUEsRUFBR1UsQ0FBQSxLQUFNLENBQUNWLENBQUEsSUFBSyxDQUFDTCxNQUFBLENBQU9hLElBQUEsQ0FBS1IsQ0FBQyxFQUFFMkIsTUFBQSxHQUFTLENBQUMsSUFBSTNCLENBQUEsQ0FBRVUsQ0FBQSxHQUFJeVEsRUFBQSxDQUFHRyxpQkFBaUI7SUFDckc7RUFDRjtBQUNBSixFQUFBLENBQUdJLGlCQUFBLEdBQW9CUCxFQUFBO0FBQ3ZCLElBQUlTLENBQUEsR0FBSU4sRUFBQTtBQUNSLElBQU1PLEVBQUEsR0FBTixjQUFpQkMsS0FBQSxDQUFNLEVBQ3ZCO0FBQ0EsSUFBTUMsRUFBQSxHQUFOLE1BQVM7RUFDUHZSLFlBQUEsRUFBYztJQUNaLEtBQUt3UixXQUFBLEdBQWMsQ0FBQztFQUN0QjtFQU9BQyxHQUFHbFQsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDUEwsQ0FBQSxJQUFLLEtBQUtpVCxXQUFBLEtBQWdCLEtBQUtBLFdBQUEsQ0FBWWpULENBQUEsSUFBSyxFQUFDLEdBQUksS0FBS2lULFdBQUEsQ0FBWWpULENBQUEsRUFBRzJILElBQUEsQ0FBS3RILENBQUM7RUFDakY7RUFPQThTLEtBQUtuVCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNUTCxDQUFBLElBQUssS0FBS2lULFdBQUEsS0FBZ0IsS0FBS0EsV0FBQSxDQUFZalQsQ0FBQSxJQUFLLEVBQUM7SUFDakQsTUFBTXFCLENBQUEsR0FBS1UsQ0FBQSxJQUFNO01BQ2YsTUFBTW1DLENBQUEsR0FBSTdELENBQUEsQ0FBRTBCLENBQUM7UUFBR3NDLENBQUEsR0FBSSxLQUFLNE8sV0FBQSxDQUFZalQsQ0FBQSxFQUFHdUssT0FBQSxDQUFRbEosQ0FBQztNQUNqRCxPQUFPZ0QsQ0FBQSxLQUFNLE1BQU0sS0FBSzRPLFdBQUEsQ0FBWWpULENBQUEsRUFBR29ULE1BQUEsQ0FBTy9PLENBQUEsRUFBRyxDQUFDLEdBQUdILENBQUE7SUFDdkQ7SUFDQSxLQUFLK08sV0FBQSxDQUFZalQsQ0FBQSxFQUFHMkgsSUFBQSxDQUFLdEcsQ0FBQztFQUM1QjtFQU9BZ1MsS0FBS3JULENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ1RxSSxDQUFBLENBQUUsS0FBS3VLLFdBQVcsS0FBSyxDQUFDLEtBQUtBLFdBQUEsQ0FBWWpULENBQUEsS0FBTSxLQUFLaVQsV0FBQSxDQUFZalQsQ0FBQSxFQUFHNEYsTUFBQSxDQUFPLENBQUN2RSxDQUFBLEVBQUdVLENBQUEsS0FBTTtNQUNsRixNQUFNbUMsQ0FBQSxHQUFJbkMsQ0FBQSxDQUFFVixDQUFDO01BQ2IsT0FBTzZDLENBQUEsS0FBTSxTQUFTQSxDQUFBLEdBQUk3QyxDQUFBO0lBQzVCLEdBQUdoQixDQUFDO0VBQ047RUFPQWlULElBQUl0VCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNSLElBQUksS0FBSzRTLFdBQUEsQ0FBWWpULENBQUEsTUFBTyxRQUFRO01BQ2xDTSxPQUFBLENBQVFpVCxJQUFBLENBQUssOERBQThEdlQsQ0FBQSxDQUFFNkYsUUFBQSxDQUFTLDBDQUEwQztNQUNoSTtJQUNGO0lBQ0EsU0FBU3hFLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUksS0FBSzRSLFdBQUEsQ0FBWWpULENBQUEsRUFBR2dELE1BQUEsRUFBUTNCLENBQUEsSUFDOUMsSUFBSSxLQUFLNFIsV0FBQSxDQUFZalQsQ0FBQSxFQUFHcUIsQ0FBQSxNQUFPaEIsQ0FBQSxFQUFHO01BQ2hDLE9BQU8sS0FBSzRTLFdBQUEsQ0FBWWpULENBQUEsRUFBR3FCLENBQUE7TUFDM0I7SUFDRjtFQUNKO0VBS0FtUyxRQUFBLEVBQVU7SUFDUixLQUFLUCxXQUFBLEdBQWMsQ0FBQztFQUN0QjtBQUNGO0FBQ0EsU0FBU1EsRUFBRTNTLENBQUEsRUFBRztFQUNaRSxNQUFBLENBQU8wUyxjQUFBLENBQWUsTUFBTTtJQU0xQixJQUFJQyxHQUFBLEVBQUs7TUFDUCxPQUFPN1MsQ0FBQSxDQUFFNlMsRUFBQTtJQUNYO0lBTUEsSUFBSXRLLEtBQUEsRUFBTztNQUNULE9BQU92SSxDQUFBLENBQUV1SSxJQUFBO0lBQ1g7SUFNQSxJQUFJdUssT0FBQSxFQUFTO01BQ1gsT0FBTzlTLENBQUEsQ0FBRThTLE1BQUE7SUFDWDtJQU1BLElBQUlDLE9BQUEsRUFBUztNQUNYLE9BQU8vUyxDQUFBLENBQUUrUyxNQUFBO0lBQ1g7SUFNQSxJQUFJakYsUUFBQSxFQUFVO01BQ1osT0FBTzlOLENBQUEsQ0FBRThOLE9BQUE7SUFDWDtJQU1BLElBQUlrRixTQUFBLEVBQVc7TUFDYixPQUFPaFQsQ0FBQSxDQUFFZ1QsUUFBQTtJQUNYO0lBTUEsSUFBSUMsVUFBVTFULENBQUEsRUFBRztNQUNmUyxDQUFBLENBQUVpVCxTQUFBLEdBQVkxVCxDQUFBO0lBQ2hCO0lBTUEsSUFBSTBULFVBQUEsRUFBWTtNQUNkLE9BQU9qVCxDQUFBLENBQUVpVCxTQUFBO0lBQ1g7SUFJQSxJQUFJQyxVQUFBLEVBQVk7TUFDZCxPQUFPbFQsQ0FBQSxDQUFFa1QsU0FBQTtJQUNYO0lBUUE3UyxLQUFLZCxDQUFBLEVBQUdnQixDQUFBLEVBQUc7TUFDVCxPQUFPUCxDQUFBLENBQUVLLElBQUEsQ0FBS2QsQ0FBQSxFQUFHZ0IsQ0FBQztJQUNwQjtJQU1BNFMsS0FBQSxFQUFPO01BQ0wsT0FBT25ULENBQUEsQ0FBRW1ULElBQUEsQ0FBSztJQUNoQjtJQU9BQyxTQUFTN1QsQ0FBQSxFQUFHO01BQ1YsT0FBT1MsQ0FBQSxDQUFFb1QsUUFBQSxDQUFTN1QsQ0FBQztJQUNyQjtJQUtBOFQsZUFBQSxFQUFpQjtNQUNmclQsQ0FBQSxDQUFFcVQsY0FBQSxDQUFlO0lBQ25CO0lBS0FDLHNCQUFBLEVBQXdCO01BQ3RCLE9BQU90VCxDQUFBLENBQUVzVCxxQkFBQSxDQUFzQjtJQUNqQztFQUNGLENBQUM7QUFDSDtBQUNBLElBQU1DLEVBQUEsR0FBTixNQUFTO0VBQ1A1UyxZQUFBLEVBQWM7SUFDWixLQUFLNlMsWUFBQSxHQUFlLEVBQUM7RUFDdkI7RUFTQXBCLEdBQUdsVCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxHQUFJLE9BQUk7SUFDbEIsTUFBTW1DLENBQUEsR0FBSXFILEVBQUEsQ0FBRyxHQUFHO01BQUdsSCxDQUFBLEdBQUk7UUFDckJzUCxFQUFBLEVBQUl6UCxDQUFBO1FBQ0pxUSxPQUFBLEVBQVN2VSxDQUFBO1FBQ1R3VSxTQUFBLEVBQVduVSxDQUFBO1FBQ1hvVSxPQUFBLEVBQVNwVCxDQUFBO1FBQ1RxVCxPQUFBLEVBQVMzUztNQUNYO0lBQ0EsSUFBSSxDQUFDLEtBQUs0UyxPQUFBLENBQVEzVSxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUMsR0FDdkIsT0FBTyxLQUFLaVQsWUFBQSxDQUFhM00sSUFBQSxDQUFLdEQsQ0FBQyxHQUFHckUsQ0FBQSxDQUFFNFUsZ0JBQUEsQ0FBaUJ2VSxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUMsR0FBR21DLENBQUE7RUFDbkU7RUFTQW9QLElBQUl0VCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxFQUFHO0lBQ2QsTUFBTW1DLENBQUEsR0FBSSxLQUFLbUosT0FBQSxDQUFRck4sQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFDO0lBQzlCNkMsQ0FBQSxDQUFFcEMsT0FBQSxDQUFRLENBQUN1QyxDQUFBLEVBQUdFLENBQUEsS0FBTTtNQUNsQixNQUFNRyxDQUFBLEdBQUksS0FBSzRQLFlBQUEsQ0FBYS9KLE9BQUEsQ0FBUXJHLENBQUEsQ0FBRUssQ0FBQSxDQUFFO01BQ3hDRyxDQUFBLEdBQUksT0FBTyxLQUFLNFAsWUFBQSxDQUFhbEIsTUFBQSxDQUFPMU8sQ0FBQSxFQUFHLENBQUMsR0FBR0wsQ0FBQSxDQUFFa1EsT0FBQSxDQUFRTSxtQkFBQSxDQUFvQnhRLENBQUEsQ0FBRW1RLFNBQUEsRUFBV25RLENBQUEsQ0FBRW9RLE9BQUEsRUFBU3BRLENBQUEsQ0FBRXFRLE9BQU87SUFDNUcsQ0FBQztFQUNIO0VBTUFJLFFBQVE5VSxDQUFBLEVBQUc7SUFDVCxNQUFNSyxDQUFBLEdBQUksS0FBSzBVLFFBQUEsQ0FBUy9VLENBQUM7SUFDekJLLENBQUEsSUFBS0EsQ0FBQSxDQUFFa1UsT0FBQSxDQUFRTSxtQkFBQSxDQUFvQnhVLENBQUEsQ0FBRW1VLFNBQUEsRUFBV25VLENBQUEsQ0FBRW9VLE9BQUEsRUFBU3BVLENBQUEsQ0FBRXFVLE9BQU87RUFDdEU7RUFTQUMsUUFBUTNVLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0lBQ2YsTUFBTVUsQ0FBQSxHQUFJLEtBQUtzTCxPQUFBLENBQVFyTixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUM7SUFDOUIsT0FBT1UsQ0FBQSxDQUFFaUIsTUFBQSxHQUFTLElBQUlqQixDQUFBLENBQUUsS0FBSztFQUMvQjtFQVNBc0wsUUFBUXJOLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0lBQ2YsSUFBSVUsQ0FBQTtJQUNKLE1BQU1tQyxDQUFBLEdBQUlsRSxDQUFBLEdBQUksS0FBS2dWLGlCQUFBLENBQWtCaFYsQ0FBQyxJQUFJLEVBQUM7SUFDM0MsT0FBT0EsQ0FBQSxJQUFLSyxDQUFBLElBQUtnQixDQUFBLEdBQUlVLENBQUEsR0FBSW1DLENBQUEsQ0FBRXlJLE1BQUEsQ0FBUXRJLENBQUEsSUFBTUEsQ0FBQSxDQUFFbVEsU0FBQSxLQUFjblUsQ0FBQSxJQUFLZ0UsQ0FBQSxDQUFFb1EsT0FBQSxLQUFZcFQsQ0FBQyxJQUFJckIsQ0FBQSxJQUFLSyxDQUFBLEdBQUkwQixDQUFBLEdBQUltQyxDQUFBLENBQUV5SSxNQUFBLENBQVF0SSxDQUFBLElBQU1BLENBQUEsQ0FBRW1RLFNBQUEsS0FBY25VLENBQUMsSUFBSTBCLENBQUEsR0FBSW1DLENBQUEsRUFBR25DLENBQUE7RUFDNUk7RUFJQWtULFVBQUEsRUFBWTtJQUNWLEtBQUtYLFlBQUEsQ0FBYS9HLEdBQUEsQ0FBS3ZOLENBQUEsSUFBTTtNQUMzQkEsQ0FBQSxDQUFFdVUsT0FBQSxDQUFRTSxtQkFBQSxDQUFvQjdVLENBQUEsQ0FBRXdVLFNBQUEsRUFBV3hVLENBQUEsQ0FBRXlVLE9BQUEsRUFBU3pVLENBQUEsQ0FBRTBVLE9BQU87SUFDakUsQ0FBQyxHQUFHLEtBQUtKLFlBQUEsR0FBZSxFQUFDO0VBQzNCO0VBSUFkLFFBQUEsRUFBVTtJQUNSLEtBQUt5QixTQUFBLENBQVU7RUFDakI7RUFPQUQsa0JBQWtCaFYsQ0FBQSxFQUFHO0lBQ25CLE9BQU8sS0FBS3NVLFlBQUEsQ0FBYTNILE1BQUEsQ0FBUXRNLENBQUEsSUFBTTtNQUNyQyxJQUFJQSxDQUFBLENBQUVrVSxPQUFBLEtBQVl2VSxDQUFBLEVBQ2hCLE9BQU9LLENBQUE7SUFDWCxDQUFDO0VBQ0g7RUFPQTZVLFdBQVdsVixDQUFBLEVBQUc7SUFDWixPQUFPLEtBQUtzVSxZQUFBLENBQWEzSCxNQUFBLENBQVF0TSxDQUFBLElBQU07TUFDckMsSUFBSUEsQ0FBQSxDQUFFbVUsU0FBQSxLQUFjeFUsQ0FBQSxFQUNsQixPQUFPSyxDQUFBO0lBQ1gsQ0FBQztFQUNIO0VBT0E4VSxjQUFjblYsQ0FBQSxFQUFHO0lBQ2YsT0FBTyxLQUFLc1UsWUFBQSxDQUFhM0gsTUFBQSxDQUFRdE0sQ0FBQSxJQUFNO01BQ3JDLElBQUlBLENBQUEsQ0FBRW9VLE9BQUEsS0FBWXpVLENBQUEsRUFDaEIsT0FBT0ssQ0FBQTtJQUNYLENBQUM7RUFDSDtFQU9BMFUsU0FBUy9VLENBQUEsRUFBRztJQUNWLE9BQU8sS0FBS3NVLFlBQUEsQ0FBYWxLLElBQUEsQ0FBTS9KLENBQUEsSUFBTUEsQ0FBQSxDQUFFc1QsRUFBQSxLQUFPM1QsQ0FBQztFQUNqRDtBQUNGO0FBQ0EsSUFBTW9WLENBQUEsR0FBTixNQUFRO0VBT04zVCxZQUFZO0lBQUVtUyxNQUFBLEVBQVE1VCxDQUFBO0lBQUdxVixnQkFBQSxFQUFrQmhWO0VBQUUsR0FBRztJQUM5QyxJQUFJLEtBQUtpVixLQUFBLEdBQVEsQ0FBQyxHQUFHLEtBQUtDLFNBQUEsR0FBWSxJQUFJbEIsRUFBQSxDQUFHLEdBQUcsS0FBS21CLHdCQUFBLEdBQTJCO01BUzlFdEMsRUFBQSxFQUFJQSxDQUFDN1IsQ0FBQSxFQUFHVSxDQUFBLEVBQUdtQyxDQUFBLEVBQUdHLENBQUEsR0FBSSxVQUFPO1FBQ3ZCLEtBQUtvUixrQkFBQSxDQUFtQjlOLElBQUEsQ0FDdEIsS0FBSzROLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBRzdSLENBQUEsRUFBR1UsQ0FBQSxFQUFHbUMsQ0FBQSxFQUFHRyxDQUFDLENBQzlCO01BQ0Y7TUFJQXFSLFFBQUEsRUFBVUEsQ0FBQSxLQUFNO1FBQ2QsV0FBV3JVLENBQUEsSUFBSyxLQUFLb1Usa0JBQUEsRUFDbkIsS0FBS0YsU0FBQSxDQUFVVCxPQUFBLENBQVF6VCxDQUFDO1FBQzFCLEtBQUtvVSxrQkFBQSxHQUFxQixFQUFDO01BQzdCO0lBQ0YsR0FBRyxLQUFLQSxrQkFBQSxHQUFxQixFQUFDLEVBQUdFLEdBQUEsQ0FBQUMsTUFBQSxLQUFlUixDQUFBLEVBQzlDLE1BQU0sSUFBSVMsU0FBQSxDQUFVLHlEQUF5RDtJQUMvRSxLQUFLakMsTUFBQSxHQUFTNVQsQ0FBQSxFQUFHLEtBQUtxVixnQkFBQSxHQUFtQmhWLENBQUE7RUFDM0M7RUFNQSxJQUFJeVYsTUFBTTlWLENBQUEsRUFBRztJQUNYLEtBQUsrVixNQUFBLEdBQVMvVixDQUFBO0VBQ2hCO0VBSUFnVyxlQUFBLEVBQWlCO0lBQ2YsV0FBV2hXLENBQUEsSUFBSyxLQUFLc1YsS0FBQSxFQUFPO01BQzFCLE1BQU1qVixDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTXRWLENBQUE7TUFDckJLLENBQUEsWUFBYTRWLFdBQUEsSUFBZTVWLENBQUEsQ0FBRTZWLE1BQUEsQ0FBTztJQUN2QztFQUNGO0VBSUEsSUFBSUMsTUFBQSxFQUFRO0lBQ1YsT0FBTyxLQUFLdkMsTUFBQSxDQUFPd0MsSUFBQSxDQUFLQyxTQUFBLEtBQWM7RUFDeEM7QUFDRjtBQUNBLElBQU1DLENBQUEsR0FBTixNQUFRO0VBQ043VSxZQUFBLEVBQWM7SUFDWixLQUFLOFUsUUFBQSxHQUFXLE1BQU0sS0FBS0MsU0FBQSxHQUFZLE1BQU0sS0FBS0MsbUJBQUEsR0FBc0IsTUFBTSxLQUFLQyx1QkFBQSxHQUEwQixPQUFJLEtBQUtDLGlCQUFBLEdBQW9CLGFBQWEsS0FBS0MsbUJBQUEsR0FBc0I7RUFDcEw7RUFNQSxXQUFXQyxJQUFBLEVBQU07SUFDZixPQUFPO01BQ0xDLGFBQUEsRUFBZTtNQUNmQyxVQUFBLEVBQVk7SUFDZDtFQUNGO0VBT0EsV0FBV0MsV0FBQSxFQUFhO0lBQ3RCLE1BQU1oWCxDQUFBLEdBQUlVLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtJQUM5QixPQUFPalgsQ0FBQSxHQUFJQSxDQUFBLENBQUVnWCxVQUFBLEdBQWE7RUFDNUI7RUFNQSxXQUFXRSxjQUFBLEVBQWdCO0lBQ3pCLE1BQU1sWCxDQUFBLEdBQUlVLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtJQUM5QixJQUFJLENBQUNqWCxDQUFBLEVBQ0gsT0FBTztJQUNULE1BQU1LLENBQUEsR0FBSUwsQ0FBQSxDQUFFZ1gsVUFBQTtJQUNaLE9BQU8zVyxDQUFBLEdBQUlpTSxDQUFBLENBQUUwQixTQUFBLENBQVUzTixDQUFDLElBQUlBLENBQUEsR0FBSUEsQ0FBQSxDQUFFZ0QsYUFBQSxHQUFnQjtFQUNwRDtFQU9BLFdBQVc4VCxhQUFBLEVBQWU7SUFDeEIsTUFBTW5YLENBQUEsR0FBSVUsTUFBQSxDQUFPdVcsWUFBQSxDQUFhO0lBQzlCLE9BQU9qWCxDQUFBLEdBQUlBLENBQUEsQ0FBRW1YLFlBQUEsR0FBZTtFQUM5QjtFQU1BLFdBQVdDLFlBQUEsRUFBYztJQUN2QixNQUFNcFgsQ0FBQSxHQUFJVSxNQUFBLENBQU91VyxZQUFBLENBQWE7SUFDOUIsT0FBT2pYLENBQUEsR0FBSUEsQ0FBQSxDQUFFb1gsV0FBQSxHQUFjO0VBQzdCO0VBTUEsV0FBV0MsV0FBQSxFQUFhO0lBQ3RCLE9BQU8sS0FBS0MsbUJBQUEsQ0FBb0JoQixDQUFBLENBQUVyVSxHQUFBLENBQUksQ0FBQztFQUN6QztFQU1BLE9BQU9xVixvQkFBb0J0WCxDQUFBLEVBQUc7SUFDNUIsSUFBSSxDQUFDQSxDQUFBLEVBQ0gsT0FBTztJQUNULElBQUlLLENBQUEsR0FBSUwsQ0FBQSxDQUFFZ1gsVUFBQSxJQUFjaFgsQ0FBQSxDQUFFdVgsU0FBQTtJQUMxQmxYLENBQUEsSUFBS0EsQ0FBQSxDQUFFeU4sUUFBQSxLQUFhbkssSUFBQSxDQUFLdUwsU0FBQSxLQUFjN08sQ0FBQSxHQUFJQSxDQUFBLENBQUVpRCxVQUFBO0lBQzdDLElBQUlqQyxDQUFBLEdBQUk7SUFDUixPQUFPaEIsQ0FBQSxJQUFLQSxDQUFBLFlBQWFrQyxPQUFBLEtBQVlsQixDQUFBLEdBQUloQixDQUFBLENBQUU2QyxPQUFBLENBQVEsSUFBSW9ULENBQUEsQ0FBRU8sR0FBQSxDQUFJRSxVQUFBLEVBQVksSUFBSTFWLENBQUEsR0FBSUEsQ0FBQSxDQUFFeU0sUUFBQSxLQUFhbkssSUFBQSxDQUFLb0ssWUFBQSxHQUFlO0VBQ3RIO0VBTUEsT0FBT3lKLGdCQUFnQnhYLENBQUEsRUFBRztJQUN4QixJQUFJLENBQUNBLENBQUEsRUFDSDtJQUNGLElBQUlLLENBQUEsR0FBSUwsQ0FBQSxDQUFFeVgsY0FBQTtJQUNWcFgsQ0FBQSxJQUFLQSxDQUFBLENBQUV5TixRQUFBLEtBQWFuSyxJQUFBLENBQUt1TCxTQUFBLEtBQWM3TyxDQUFBLEdBQUlBLENBQUEsQ0FBRWlELFVBQUE7SUFDN0MsSUFBSWpDLENBQUEsR0FBSTtJQUNSLE9BQU9oQixDQUFBLElBQUtBLENBQUEsWUFBYWtDLE9BQUEsS0FBWWxCLENBQUEsR0FBSWhCLENBQUEsQ0FBRTZDLE9BQUEsQ0FBUSxJQUFJb1QsQ0FBQSxDQUFFTyxHQUFBLENBQUlFLFVBQUEsRUFBWSxJQUFJMVYsQ0FBQSxHQUFJQSxDQUFBLENBQUV5TSxRQUFBLEtBQWFuSyxJQUFBLENBQUtvSyxZQUFBLEdBQWU7RUFDdEg7RUFJQSxXQUFXMkosa0JBQUEsRUFBb0I7SUFDN0IsT0FBTyxDQUFDLENBQUNwQixDQUFBLENBQUVyVSxHQUFBLENBQUksRUFBRStVLFVBQUE7RUFDbkI7RUFNQSxXQUFXVyxNQUFBLEVBQVE7SUFDakIsT0FBTyxLQUFLQyxxQkFBQSxDQUFzQixLQUFLM1YsR0FBQSxDQUFJLENBQUM7RUFDOUM7RUFNQSxPQUFPMlYsc0JBQXNCNVgsQ0FBQSxFQUFHO0lBQzlCLE9BQU9BLENBQUEsSUFBS0EsQ0FBQSxDQUFFNlgsVUFBQSxHQUFhN1gsQ0FBQSxDQUFFOFgsVUFBQSxDQUFXLENBQUMsSUFBSTtFQUMvQztFQU1BLFdBQVdDLEtBQUEsRUFBTztJQUNoQixJQUFJL1gsQ0FBQSxHQUFJRCxRQUFBLENBQVN5VyxTQUFBO01BQVduVyxDQUFBO01BQUdnQixDQUFBLEdBQUk7UUFDakMyVyxDQUFBLEVBQUc7UUFDSDVSLENBQUEsRUFBRztRQUNINkosS0FBQSxFQUFPO1FBQ1BGLE1BQUEsRUFBUTtNQUNWO0lBQ0EsSUFBSS9QLENBQUEsSUFBS0EsQ0FBQSxDQUFFc08sSUFBQSxLQUFTLFdBQ2xCLE9BQU90TyxDQUFBLEdBQUlBLENBQUEsRUFBR0ssQ0FBQSxHQUFJTCxDQUFBLENBQUVpWSxXQUFBLENBQVksR0FBRzVXLENBQUEsQ0FBRTJXLENBQUEsR0FBSTNYLENBQUEsQ0FBRTZYLFlBQUEsRUFBYzdXLENBQUEsQ0FBRStFLENBQUEsR0FBSS9GLENBQUEsQ0FBRThYLFdBQUEsRUFBYTlXLENBQUEsQ0FBRTRPLEtBQUEsR0FBUTVQLENBQUEsQ0FBRStYLGFBQUEsRUFBZS9XLENBQUEsQ0FBRTBPLE1BQUEsR0FBUzFQLENBQUEsQ0FBRWdZLGNBQUEsRUFBZ0JoWCxDQUFBO0lBQ3hJLElBQUksQ0FBQ1gsTUFBQSxDQUFPdVcsWUFBQSxFQUNWLE9BQU9uUCxDQUFBLENBQUUsK0NBQStDLE1BQU0sR0FBR3pHLENBQUE7SUFDbkUsSUFBSXJCLENBQUEsR0FBSVUsTUFBQSxDQUFPdVcsWUFBQSxDQUFhLEdBQUdqWCxDQUFBLENBQUU2WCxVQUFBLEtBQWUsUUFBUVMsS0FBQSxDQUFNdFksQ0FBQSxDQUFFNlgsVUFBVSxHQUN4RSxPQUFPL1AsQ0FBQSxDQUFFLHFEQUFxRCxNQUFNLEdBQUd6RyxDQUFBO0lBQ3pFLElBQUlyQixDQUFBLENBQUU2WCxVQUFBLEtBQWUsR0FDbkIsT0FBT3hXLENBQUE7SUFDVCxJQUFJaEIsQ0FBQSxHQUFJTCxDQUFBLENBQUU4WCxVQUFBLENBQVcsQ0FBQyxFQUFFUyxVQUFBLENBQVcsR0FBR2xZLENBQUEsQ0FBRW9QLHFCQUFBLEtBQTBCcE8sQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFb1AscUJBQUEsQ0FBc0IsSUFBSXBPLENBQUEsQ0FBRTJXLENBQUEsS0FBTSxLQUFLM1csQ0FBQSxDQUFFK0UsQ0FBQSxLQUFNLEdBQUc7TUFDeEgsTUFBTXJFLENBQUEsR0FBSWhDLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE1BQU07TUFDdkMsSUFBSThCLENBQUEsQ0FBRTBOLHFCQUFBLEVBQXVCO1FBQzNCMU4sQ0FBQSxDQUFFN0IsV0FBQSxDQUFZSCxRQUFBLENBQVNJLGNBQUEsQ0FBZSxRQUFHLENBQUMsR0FBR0UsQ0FBQSxDQUFFbVksVUFBQSxDQUFXelcsQ0FBQyxHQUFHVixDQUFBLEdBQUlVLENBQUEsQ0FBRTBOLHFCQUFBLENBQXNCO1FBQzFGLE1BQU12TCxDQUFBLEdBQUluQyxDQUFBLENBQUV1QixVQUFBO1FBQ1pZLENBQUEsQ0FBRWdKLFdBQUEsQ0FBWW5MLENBQUMsR0FBR21DLENBQUEsQ0FBRXVVLFNBQUEsQ0FBVTtNQUNoQztJQUNGO0lBQ0EsT0FBT3BYLENBQUE7RUFDVDtFQU1BLFdBQVd5TCxLQUFBLEVBQU87SUFDaEIsT0FBT3BNLE1BQUEsQ0FBT3VXLFlBQUEsR0FBZXZXLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYSxFQUFFcFIsUUFBQSxDQUFTLElBQUk7RUFDbEU7RUFPQSxPQUFPNUQsSUFBQSxFQUFNO0lBQ1gsT0FBT3ZCLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtFQUM3QjtFQU9BLE9BQU95QixVQUFVMVksQ0FBQSxFQUFHSyxDQUFBLEdBQUksR0FBRztJQUN6QixNQUFNZ0IsQ0FBQSxHQUFJdEIsUUFBQSxDQUFTa1ksV0FBQSxDQUFZO01BQUdsVyxDQUFBLEdBQUlyQixNQUFBLENBQU91VyxZQUFBLENBQWE7SUFDMUQsT0FBTzNLLENBQUEsQ0FBRW9CLGFBQUEsQ0FBYzFOLENBQUMsSUFBSXNNLENBQUEsQ0FBRStCLFdBQUEsQ0FBWXJPLENBQUMsS0FBS0EsQ0FBQSxDQUFFMlksS0FBQSxDQUFNLEdBQUczWSxDQUFBLENBQUU0WSxjQUFBLEdBQWlCNVksQ0FBQSxDQUFFNlksWUFBQSxHQUFleFksQ0FBQSxFQUFHTCxDQUFBLENBQUV5UCxxQkFBQSxDQUFzQixLQUFLLFVBQVVwTyxDQUFBLENBQUV5WCxRQUFBLENBQVM5WSxDQUFBLEVBQUdLLENBQUMsR0FBR2dCLENBQUEsQ0FBRTBYLE1BQUEsQ0FBTy9ZLENBQUEsRUFBR0ssQ0FBQyxHQUFHMEIsQ0FBQSxDQUFFaVgsZUFBQSxDQUFnQixHQUFHalgsQ0FBQSxDQUFFa1gsUUFBQSxDQUFTNVgsQ0FBQyxHQUFHQSxDQUFBLENBQUVvTyxxQkFBQSxDQUFzQjtFQUN6TztFQU1BLE9BQU95Six1QkFBdUJsWixDQUFBLEVBQUc7SUFDL0IsTUFBTUssQ0FBQSxHQUFJaVcsQ0FBQSxDQUFFcUIsS0FBQTtJQUNaLE9BQU90WCxDQUFBLEtBQU0sT0FBTyxRQUFLTCxDQUFBLENBQUVvRCxRQUFBLENBQVMvQyxDQUFBLENBQUVvWCxjQUFjO0VBQ3REO0VBSUEsT0FBTzBCLGNBQUEsRUFBZ0I7SUFDckIsTUFBTW5aLENBQUEsR0FBSXNXLENBQUEsQ0FBRXFCLEtBQUE7SUFDWixJQUFJM1gsQ0FBQSxLQUFNLE1BQ1I7SUFDRixNQUFNSyxDQUFBLEdBQUlpTSxDQUFBLENBQUVJLElBQUEsQ0FBSyxRQUFRLDJCQUEyQjtJQUNwRHJNLENBQUEsQ0FBRXNRLE9BQUEsQ0FBUXlJLFlBQUEsR0FBZSxRQUFRcFosQ0FBQSxDQUFFcVosUUFBQSxDQUFTLEdBQUdyWixDQUFBLENBQUV3WSxVQUFBLENBQVduWSxDQUFDO0VBQy9EO0VBTUEsT0FBT2laLDRCQUE0QnRaLENBQUEsRUFBRztJQUNwQyxPQUFPc00sQ0FBQSxDQUFFbEMsSUFBQSxDQUFLcEssQ0FBQSxFQUFHLDRCQUE0QixNQUFNO0VBQ3JEO0VBTUEsT0FBT3VaLGlCQUFpQnZaLENBQUEsR0FBSUQsUUFBQSxDQUFTeVosSUFBQSxFQUFNO0lBQ3pDLE1BQU1uWixDQUFBLEdBQUlpTSxDQUFBLENBQUVsQyxJQUFBLENBQUtwSyxDQUFBLEVBQUcsNEJBQTRCO0lBQ2hESyxDQUFBLElBQUtBLENBQUEsQ0FBRTZWLE1BQUEsQ0FBTztFQUNoQjtFQUlBdUQscUJBQUEsRUFBdUI7SUFDckIsS0FBSy9DLHVCQUFBLEtBQTRCLEtBQUtBLHVCQUFBLEdBQTBCLE9BQUkzVyxRQUFBLENBQVMyWixXQUFBLENBQVksS0FBSzlDLG1CQUFtQjtFQUNuSDtFQUlBK0Msa0JBQUEsRUFBb0I7SUFDbEI1WixRQUFBLENBQVMyWixXQUFBLENBQVksS0FBSy9DLGlCQUFBLEVBQW1CLE9BQUksU0FBUyxHQUFHLEtBQUtELHVCQUFBLEdBQTBCO0VBQzlGO0VBSUF6QyxLQUFBLEVBQU87SUFDTCxLQUFLd0MsbUJBQUEsR0FBc0JILENBQUEsQ0FBRXFCLEtBQUE7RUFDL0I7RUFJQWlDLFFBQUEsRUFBVTtJQUNSLElBQUksQ0FBQyxLQUFLbkQsbUJBQUEsRUFDUjtJQUNGLE1BQU16VyxDQUFBLEdBQUlVLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtJQUM5QmpYLENBQUEsQ0FBRWdaLGVBQUEsQ0FBZ0IsR0FBR2haLENBQUEsQ0FBRWlaLFFBQUEsQ0FBUyxLQUFLeEMsbUJBQW1CO0VBQzFEO0VBSUFvRCxXQUFBLEVBQWE7SUFDWCxLQUFLcEQsbUJBQUEsR0FBc0I7RUFDN0I7RUFJQXFELGNBQUEsRUFBZ0I7SUFDZCxNQUFNOVosQ0FBQSxHQUFJVSxNQUFBLENBQU91VyxZQUFBLENBQWE7TUFBRzVXLENBQUEsR0FBSU4sUUFBQSxDQUFTa1ksV0FBQSxDQUFZO0lBQzFENVgsQ0FBQSxDQUFFMFosa0JBQUEsQ0FBbUIvWixDQUFBLENBQUV1WCxTQUFTLEdBQUdsWCxDQUFBLENBQUVnWixRQUFBLENBQVMsS0FBRSxHQUFHclosQ0FBQSxDQUFFZ1osZUFBQSxDQUFnQixHQUFHaFosQ0FBQSxDQUFFaVosUUFBQSxDQUFTNVksQ0FBQztFQUN0RjtFQVNBMlosY0FBY2hhLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxHQUFJLElBQUk7SUFDMUIsTUFBTVUsQ0FBQSxHQUFJckIsTUFBQSxDQUFPdVcsWUFBQSxDQUFhO0lBQzlCLElBQUkvUyxDQUFBLEdBQUk7SUFDUixPQUFPLENBQUNuQyxDQUFBLElBQUssQ0FBQ0EsQ0FBQSxDQUFFaVYsVUFBQSxJQUFjLENBQUNqVixDQUFBLENBQUV3VixTQUFBLEdBQVksUUFBUSxDQUVuRHhWLENBQUEsQ0FBRWlWLFVBQUEsRUFFRmpWLENBQUEsQ0FBRXdWLFNBQUEsQ0FDSixDQUFFelYsT0FBQSxDQUFTeUMsQ0FBQSxJQUFNO01BQ2YsSUFBSUcsQ0FBQSxHQUFJckQsQ0FBQTtNQUNSLE9BQU9xRCxDQUFBLEdBQUksS0FBS0gsQ0FBQSxDQUFFakIsVUFBQSxJQUFjLEVBQUVpQixDQUFBLENBQUVpSSxPQUFBLEtBQVl4TSxDQUFBLEtBQU1rRSxDQUFBLEdBQUlLLENBQUEsRUFBR2xFLENBQUEsSUFBS2tFLENBQUEsQ0FBRXFJLFNBQUEsSUFBYSxDQUFDckksQ0FBQSxDQUFFcUksU0FBQSxDQUFVeEosUUFBQSxDQUFTL0MsQ0FBQyxNQUFNNkQsQ0FBQSxHQUFJLE9BQU9BLENBQUEsS0FDdkhLLENBQUEsR0FBSUEsQ0FBQSxDQUFFakIsVUFBQSxFQUFZb0IsQ0FBQTtJQUN0QixDQUFDLEdBQUdSLENBQUE7RUFDTjtFQU1BK1YsWUFBWWphLENBQUEsRUFBRztJQUNiLE1BQU1LLENBQUEsR0FBSUssTUFBQSxDQUFPdVcsWUFBQSxDQUFhO0lBQzlCNVcsQ0FBQSxDQUFFMlksZUFBQSxDQUFnQjtJQUNsQixNQUFNM1gsQ0FBQSxHQUFJdEIsUUFBQSxDQUFTa1ksV0FBQSxDQUFZO0lBQy9CNVcsQ0FBQSxDQUFFMFksa0JBQUEsQ0FBbUIvWixDQUFDLEdBQUdLLENBQUEsQ0FBRTRZLFFBQUEsQ0FBUzVYLENBQUM7RUFDdkM7QUFDRjtBQUNBLFNBQVM2WSxHQUFHcFosQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDaEIsTUFBTTtJQUFFc08sSUFBQSxFQUFNak8sQ0FBQTtJQUFHdVYsTUFBQSxFQUFRdlUsQ0FBQTtJQUFHOFksVUFBQSxFQUFZcFksQ0FBQTtJQUFHcVksWUFBQSxFQUFjbFc7RUFBRSxJQUFJcEQsQ0FBQTtFQUMvRCxPQUFPQSxDQUFBLENBQUV3TixJQUFBLEtBQVMsZ0JBQWdCeE4sQ0FBQSxDQUFFdVosYUFBQSxLQUFrQixlQUFlLFFBQUssQ0FBQyxFQUFFcmEsQ0FBQSxDQUFFb0QsUUFBQSxDQUFTL0IsQ0FBQyxLQUFLaEIsQ0FBQSxLQUFNLGdCQUFnQm9ELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSzlNLENBQUMsRUFBRXVZLElBQUEsQ0FBTTVWLENBQUEsSUFBTUEsQ0FBQSxLQUFNMUUsQ0FBQyxLQUFLeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLM0ssQ0FBQyxFQUFFb1csSUFBQSxDQUFNNVYsQ0FBQSxJQUFNQSxDQUFBLEtBQU0xRSxDQUFDO0FBQzdMO0FBQ0EsSUFBTXVhLEVBQUEsR0FBSztFQUF3QkMsRUFBQSxHQUFLO0VBQWlCQyxFQUFBLEdBQUs7RUFBc0NDLEVBQUEsR0FBSztFQUE2QkMsRUFBQSxHQUFLO0FBQzNJLFNBQVNDLEdBQUc5WixDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixJQUFJLENBQUNjLENBQUEsQ0FBRStaLGdCQUFBLEVBQ0wsT0FBTztFQUNULE1BQU14YSxDQUFBLEdBQUlTLENBQUEsQ0FBRStaLGdCQUFBLENBQWlCN2EsQ0FBQTtFQUM3QixPQUFPb0ksQ0FBQSxDQUFFL0gsQ0FBQyxLQUFLaUksRUFBQSxDQUFHakksQ0FBQztBQUNyQjtBQUNBLFNBQVN5YSxHQUFHaGEsQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDaEIsT0FBTzRhLEVBQUEsQ0FBRzlaLENBQUEsQ0FBRWlhLElBQUEsRUFBTS9hLENBQUM7QUFDckI7QUFDQSxTQUFTZ2IsR0FBR2xhLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCLE9BQU9nQixNQUFBLENBQU9pYSxPQUFBLENBQVFuYSxDQUFDLEVBQUV3WixJQUFBLENBQUssQ0FBQyxDQUFDamEsQ0FBQSxFQUFHZ0IsQ0FBQyxNQUFNckIsQ0FBQSxDQUFFSyxDQUFBLEtBQU04TCxFQUFBLENBQUduTSxDQUFBLENBQUVLLENBQUEsR0FBSWdCLENBQUMsQ0FBQztBQUMvRDtBQUNBLGVBQWU2WixHQUFHcGEsQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDdEIsTUFBTXFCLENBQUEsSUFBSyxNQUFNUCxDQUFBLENBQUVtVCxJQUFBLENBQUssR0FBR25MLElBQUE7SUFBTS9HLENBQUEsR0FBSS9CLENBQUEsQ0FBRW9LLElBQUEsQ0FBTWxHLENBQUEsSUFBTUEsQ0FBQSxDQUFFbUYsSUFBQSxLQUFTdkksQ0FBQSxDQUFFdUksSUFBSTtFQUNwRSxPQUFPdEgsQ0FBQSxLQUFNLFVBQVUsQ0FBQzZZLEVBQUEsQ0FBRzdZLENBQUEsRUFBRyxRQUFRLElBQUksRUFBQyxHQUFJL0IsQ0FBQSxDQUFFNEYsTUFBQSxDQUFPLENBQUMxQixDQUFBLEVBQUdHLENBQUEsS0FBTTtJQUNoRSxJQUFJLENBQUN1VyxFQUFBLENBQUd2VyxDQUFBLEVBQUcsUUFBUSxLQUFLQSxDQUFBLENBQUU4TSxPQUFBLEtBQVksUUFDcEMsT0FBT2pOLENBQUE7SUFDVCxNQUFNSyxDQUFBLEdBQUlGLENBQUEsQ0FBRThNLE9BQUEsQ0FBUXhFLE1BQUEsQ0FBUWpJLENBQUEsSUFBTTtNQUNoQyxJQUFJZ0UsQ0FBQSxDQUFFaEUsQ0FBQyxLQUFLQSxDQUFBLENBQUV5VyxJQUFBLEtBQVMsUUFDckIsT0FBTztNQUNULElBQUl6VyxDQUFBLENBQUVvRSxJQUFBLEtBQVMsUUFBUTtRQUNyQixJQUFJa1MsRUFBQSxDQUFHdFcsQ0FBQSxDQUFFb0UsSUFBQSxFQUFNekgsQ0FBQyxHQUNkLE9BQU87TUFDWCxXQUFXZ0QsQ0FBQSxDQUFFZ0YsSUFBQSxLQUFTdkksQ0FBQSxDQUFFdUksSUFBQSxFQUN0QixPQUFPO01BQ1QsT0FBTztJQUNULENBQUM7SUFDRCxPQUFPbkYsQ0FBQSxDQUFFeUQsSUFBQSxDQUFLO01BQ1osR0FBR3RELENBQUE7TUFDSDhNLE9BQUEsRUFBUzVNO0lBQ1gsQ0FBQyxHQUFHTCxDQUFBO0VBQ04sR0FBRyxFQUFFO0FBQ1A7QUFDQSxTQUFTa1gsR0FBR3RhLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCLE9BQU9jLENBQUEsQ0FBRXVhLFNBQUEsR0FBWXZhLENBQUEsQ0FBRXVJLElBQUEsS0FBU3JKLENBQUEsQ0FBRXFKLElBQUEsR0FBTyxPQUFLeVIsRUFBQSxDQUFHOWEsQ0FBQSxFQUFHLFFBQVEsS0FBSzhhLEVBQUEsQ0FBR2hhLENBQUEsRUFBRyxRQUFRLElBQUk7QUFDckY7QUFDQSxTQUFTd2EsR0FBR3hhLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCLE1BQU1LLENBQUEsR0FBSUwsQ0FBQSxJQUFLLE9BQU8sU0FBU0EsQ0FBQSxDQUFFdWIsTUFBQTtFQUNqQyxPQUFPblQsQ0FBQSxDQUFFL0gsQ0FBQyxJQUFJQSxDQUFBLENBQUVTLENBQUMsSUFBSXdILEVBQUEsQ0FBR2pJLENBQUMsSUFBSVMsQ0FBQSxDQUFFVCxDQUFBLEtBQU1BLENBQUEsS0FBTSxVQUFVeUgsQ0FBQSxDQUFFLHNLQUFnSyxHQUFHO0FBQzVOO0FBQ0EsU0FBUzBULEdBQUcxYSxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0VBQ25CLE1BQU1nQixDQUFBLEdBQUlyQixDQUFBLElBQUssT0FBTyxTQUFTQSxDQUFBLENBQUV5YixNQUFBO0VBQ2pDLE9BQU9yVCxDQUFBLENBQUUvRyxDQUFDLElBQUlBLENBQUEsQ0FBRVAsQ0FBQSxFQUFHVCxDQUFDLElBQUlpSSxFQUFBLENBQUdqSCxDQUFDLElBQUk7SUFDOUIsQ0FBQ0EsQ0FBQSxHQUFJUDtFQUNQLEtBQUtPLENBQUEsS0FBTSxVQUFVeUcsQ0FBQSxDQUFFLDZLQUF1SyxHQUFHLENBQUM7QUFDcE07QUFDQSxJQUFJNFQsQ0FBQSxHQUFxQixnQkFBQzVhLENBQUEsS0FBT0EsQ0FBQSxDQUFFNmEsT0FBQSxHQUFVLFdBQVc3YSxDQUFBLENBQUU4YSxTQUFBLEdBQVksYUFBYTlhLENBQUEsQ0FBRSthLElBQUEsR0FBTyxRQUFRL2EsQ0FBQSxHQUFJNGEsQ0FBQSxJQUFLLENBQUMsQ0FBQztFQUFHSSxFQUFBLEdBQXNCLGdCQUFDaGIsQ0FBQSxLQUFPQSxDQUFBLENBQUVpYixlQUFBLEdBQWtCLGtCQUFrQmpiLENBQUEsQ0FBRWtiLFFBQUEsR0FBVyxZQUFZbGIsQ0FBQSxDQUFFbWIsS0FBQSxHQUFRLFNBQVNuYixDQUFBLENBQUVvYixPQUFBLEdBQVUsV0FBV3BiLENBQUEsQ0FBRXFiLE9BQUEsR0FBVSxXQUFXcmIsQ0FBQSxDQUFFc2IsUUFBQSxHQUFXLFdBQVd0YixDQUFBLEdBQUlnYixFQUFBLElBQU0sQ0FBQyxDQUFDO0FBQ3BULElBQU1PLENBQUEsR0FBTixjQUFnQnJKLEVBQUEsQ0FBRztFQVVqQnZSLFlBQVk7SUFDVmtTLEVBQUEsRUFBSTNULENBQUEsR0FBSW9MLEVBQUEsQ0FBRztJQUNYdEMsSUFBQSxFQUFNekksQ0FBQTtJQUNOMGEsSUFBQSxFQUFNMVosQ0FBQTtJQUNOaWIsUUFBQSxFQUFVdmEsQ0FBQTtJQUNWd2EsU0FBQSxFQUFXclk7RUFDYixHQUFHRyxDQUFBLEVBQUc7SUFDSixNQUFNLEdBQUcsS0FBS21ZLFlBQUEsR0FBZSxFQUFDLEVBQUcsS0FBS0MsbUJBQUEsR0FBc0IsTUFBTSxLQUFLQyxjQUFBLEdBQWlDLG1CQUFJQyxHQUFBLENBQUksR0FBRyxLQUFLQyxxQkFBQSxHQUF3QyxtQkFBSUQsR0FBQSxDQUFJLEdBQUcsS0FBS0Usb0JBQUEsR0FBdUIsQ0FBQyxHQUFHLEtBQUtDLFVBQUEsR0FBYSxHQUFHLEtBQUtDLGNBQUEsR0FBaUIsTUFBTSxLQUFLQyxXQUFBLEdBQWMsTUFBTTtNQUNuUixLQUFLQyxlQUFBLENBQWdCLEdBQUcsS0FBS0Msa0JBQUEsQ0FBbUI7SUFDbEQsR0FBRyxLQUFLQyxVQUFBLEdBQWEsQ0FBQzVZLENBQUEsR0FBSSxXQUFXO01BQ25DLE1BQU1HLENBQUEsR0FBSUgsQ0FBQSxLQUFNO1FBQVFLLENBQUEsR0FBSUwsQ0FBQSxZQUFhNlksVUFBQTtNQUN6QyxDQUFDMVksQ0FBQSxJQUFLLENBQUNFLENBQUEsSUFBSyxLQUFLeVksb0JBQUEsQ0FBcUI5WSxDQUFDO01BQ3ZDLElBQUlzRixDQUFBO01BQ0puRixDQUFBLElBQUtFLENBQUEsR0FBSWlGLENBQUEsR0FBSSxPQUFLQSxDQUFBLEdBQUksRUFBRXRGLENBQUEsQ0FBRXZCLE1BQUEsR0FBUyxLQUFLdUIsQ0FBQSxDQUFFOEssS0FBQSxDQUFPaU8sQ0FBQSxJQUFNO1FBQ3JELE1BQU07VUFBRW5ELFVBQUEsRUFBWW9ELENBQUE7VUFBR25ELFlBQUEsRUFBY29ELENBQUE7VUFBRzVILE1BQUEsRUFBUTZIO1FBQUUsSUFBSUgsQ0FBQTtRQUN0RCxPQUFPLENBQ0wsR0FBRzdaLEtBQUEsQ0FBTW9MLElBQUEsQ0FBSzBPLENBQUMsR0FDZixHQUFHOVosS0FBQSxDQUFNb0wsSUFBQSxDQUFLMk8sQ0FBQyxHQUNmQyxDQUFBLENBQ0YsQ0FBRW5ELElBQUEsQ0FBTW9ELENBQUEsS0FBT3BSLENBQUEsQ0FBRTBCLFNBQUEsQ0FBVTBQLENBQUMsTUFBTUEsQ0FBQSxHQUFJQSxDQUFBLENBQUVyYSxhQUFBLEdBQWdCcWEsQ0FBQSxJQUFLQSxDQUFBLENBQUV4YSxPQUFBLENBQVEsNkJBQTZCLE1BQU0sS0FBSztNQUNqSCxDQUFDLElBQUkyRyxDQUFBLEtBQU0sS0FBS29ULGVBQUEsQ0FBZ0IsR0FBRyxLQUFLQyxrQkFBQSxDQUFtQixHQUFHLEtBQUtTLHFCQUFBLENBQXNCLEdBQUcsS0FBS3hjLElBQUEsQ0FDL0YsU0FFRixHQUFHLEtBQUtrUyxJQUFBLENBQUssY0FBYyxJQUFJO0lBQ2pDLEdBQUcsS0FBS2hLLElBQUEsR0FBT2hJLENBQUEsQ0FBRWdJLElBQUEsRUFBTSxLQUFLc0ssRUFBQSxHQUFLM1QsQ0FBQSxFQUFHLEtBQUs0ZCxRQUFBLEdBQVd2YyxDQUFBLENBQUV1YyxRQUFBLEVBQVUsS0FBS2hLLE1BQUEsR0FBU3ZTLENBQUEsQ0FBRXVjLFFBQUEsQ0FBU2hLLE1BQUEsSUFBVSxDQUFDLEdBQUcsS0FBS21KLGNBQUEsR0FBaUIxWSxDQUFBLElBQUssTUFBTSxLQUFLd1osUUFBQSxHQUFXLElBQUlwSyxDQUFBLENBQUUsSUFBSSxHQUFHLEtBQUtzSCxJQUFBLEdBQU8xWixDQUFBLEVBQUcsS0FBS3ljLFlBQUEsR0FBZXpjLENBQUEsQ0FBRTBjLE1BQUEsQ0FBTzFkLENBQUEsRUFBRyxLQUFLd2QsUUFBQSxFQUFVOWIsQ0FBQyxHQUFHLEtBQUtpYyxLQUFBLEdBQVEzYyxDQUFBLENBQUUyYyxLQUFBLEVBQU8sS0FBS0MsWUFBQSxDQUFhL1osQ0FBQyxHQUFHLEtBQUsyUCxNQUFBLEdBQVMsS0FBS3FLLE9BQUEsQ0FBUSxHQUFHeGQsTUFBQSxDQUFPb0UsbUJBQUEsQ0FBb0IsTUFBTTtNQUNoVixLQUFLcVosbUJBQUEsQ0FBb0IsR0FBRyxLQUFLQyxjQUFBLENBQWUsR0FBRyxLQUFLVCxxQkFBQSxDQUFzQjtJQUNoRixDQUFDO0VBQ0g7RUFNQSxXQUFXOUcsSUFBQSxFQUFNO0lBQ2YsT0FBTztNQUNMd0gsT0FBQSxFQUFTO01BQ1RDLGdCQUFBLEVBQWtCO01BQ2xCQyxPQUFBLEVBQVM7TUFDVHpLLFFBQUEsRUFBVTtNQUNWMEssVUFBQSxFQUFZO0lBQ2Q7RUFDRjtFQUlBLElBQUlDLE9BQUEsRUFBUztJQUNYLElBQUksS0FBS2pDLFlBQUEsQ0FBYXhaLE1BQUEsS0FBVyxHQUMvQixPQUFPLEtBQUt3WixZQUFBO0lBQ2QsTUFBTXhjLENBQUEsR0FBSXNNLENBQUEsQ0FBRW1CLGFBQUEsQ0FBYyxLQUFLb0csTUFBTTtJQUNyQyxPQUFPLEtBQUtpSixVQUFBLEdBQWE5YyxDQUFBLENBQUVnRCxNQUFBLEdBQVMsTUFBTSxLQUFLOFosVUFBQSxHQUFhOWMsQ0FBQSxDQUFFZ0QsTUFBQSxHQUFTLElBQUksS0FBS3daLFlBQUEsR0FBZXhjLENBQUEsRUFBR0EsQ0FBQTtFQUNwRztFQUtBLElBQUkwZSxhQUFBLEVBQWU7SUFDakIsT0FBTyxLQUFLRCxNQUFBLENBQU8sS0FBSzNCLFVBQUE7RUFDMUI7RUFNQSxJQUFJNEIsYUFBYTFlLENBQUEsRUFBRztJQUNsQixNQUFNSyxDQUFBLEdBQUksS0FBS29lLE1BQUEsQ0FBT0UsU0FBQSxDQUFXdGQsQ0FBQSxJQUFNQSxDQUFBLEtBQU1yQixDQUFBLElBQUtxQixDQUFBLENBQUUrQixRQUFBLENBQVNwRCxDQUFDLENBQUM7SUFDL0RLLENBQUEsS0FBTSxPQUFPLEtBQUt5YyxVQUFBLEdBQWF6YyxDQUFBO0VBQ2pDO0VBS0EsSUFBSXVlLFdBQUEsRUFBYTtJQUNmLE9BQU8sS0FBS0gsTUFBQSxDQUFPO0VBQ3JCO0VBS0EsSUFBSUksVUFBQSxFQUFZO0lBQ2QsTUFBTTdlLENBQUEsR0FBSSxLQUFLeWUsTUFBQTtJQUNmLE9BQU96ZSxDQUFBLENBQUVBLENBQUEsQ0FBRWdELE1BQUEsR0FBUztFQUN0QjtFQUtBLElBQUk4YixVQUFBLEVBQVk7SUFDZCxPQUFPLEtBQUtMLE1BQUEsQ0FBTyxLQUFLM0IsVUFBQSxHQUFhO0VBQ3ZDO0VBS0EsSUFBSWlDLGNBQUEsRUFBZ0I7SUFDbEIsT0FBTyxLQUFLTixNQUFBLENBQU8sS0FBSzNCLFVBQUEsR0FBYTtFQUN2QztFQU1BLElBQUloVSxLQUFBLEVBQU87SUFDVCxPQUFPLEtBQUttTCxJQUFBLENBQUssRUFBRStLLElBQUEsQ0FBTWhmLENBQUEsSUFBTUEsQ0FBQSxJQUFLLENBQUMwSSxDQUFBLENBQUUxSSxDQUFBLENBQUU4SSxJQUFJLElBQUk5SSxDQUFBLENBQUU4SSxJQUFBLEdBQU8sQ0FBQyxDQUFDO0VBQzlEO0VBTUEsSUFBSW1XLFNBQUEsRUFBVztJQUNiLE9BQU8sS0FBS2xFLElBQUEsQ0FBS21FLGNBQUE7RUFDbkI7RUFPQSxJQUFJN0QsVUFBQSxFQUFZO0lBQ2QsT0FBT2pULENBQUEsQ0FBRSxLQUFLMFYsWUFBQSxDQUFhcUIsS0FBSztFQUNsQztFQUlBLElBQUluTCxVQUFBLEVBQVk7SUFDZCxPQUFPLEtBQUt5SyxNQUFBLENBQU96YixNQUFBLEtBQVc7RUFDaEM7RUFNQSxJQUFJNEwsUUFBQSxFQUFVO0lBQ1osTUFBTTVPLENBQUEsR0FBSXNNLENBQUEsQ0FBRXNDLE9BQUEsQ0FBUSxLQUFLd1EsY0FBQSxFQUFnQixHQUFHO01BQUcvZSxDQUFBLEdBQUksQ0FBQyxLQUFLZ2YsUUFBQTtJQUN6RCxPQUFPcmYsQ0FBQSxJQUFLSyxDQUFBO0VBQ2Q7RUFNQSxJQUFJZ2YsU0FBQSxFQUFXO0lBQ2IsTUFBTXJmLENBQUEsR0FBSSxDQUNSLE9BQ0EsVUFDQSxTQUNBLFNBQ0EsVUFDQSxTQUNBLFlBQ0EsZ0JBQ0Y7SUFDQSxPQUFPLENBQUMsQ0FBQyxLQUFLNlQsTUFBQSxDQUFPMUcsYUFBQSxDQUFjbk4sQ0FBQSxDQUFFd04sSUFBQSxDQUFLLEdBQUcsQ0FBQztFQUNoRDtFQU9BLElBQUlzRyxTQUFTOVQsQ0FBQSxFQUFHO0lBQ2QsSUFBSStCLENBQUEsRUFBR21DLENBQUE7SUFDUCxLQUFLMlAsTUFBQSxDQUFPakgsU0FBQSxDQUFVMFMsTUFBQSxDQUFPakQsQ0FBQSxDQUFFeEYsR0FBQSxDQUFJL0MsUUFBQSxFQUFVOVQsQ0FBQztJQUM5QyxNQUFNSyxDQUFBLEdBQUlMLENBQUEsS0FBTSxRQUFNc1csQ0FBQSxDQUFFNEMsc0JBQUEsQ0FBdUIsS0FBS3JGLE1BQU07TUFBR3hTLENBQUEsR0FBSXJCLENBQUEsS0FBTSxTQUFNc1csQ0FBQSxDQUFFZ0QsMkJBQUEsQ0FBNEIsS0FBS3pGLE1BQU07SUFDdEgsQ0FBQ3hULENBQUEsSUFBS2dCLENBQUEsT0FBUVUsQ0FBQSxHQUFJLEtBQUtnYixjQUFBLEtBQW1CLFFBQVFoYixDQUFBLENBQUVzUixJQUFBLENBQUtvSCxFQUFBLEVBQUk7TUFBRTNFLEtBQUEsRUFBTzlWO0lBQUUsQ0FBQyxHQUFHSyxDQUFBLEdBQUlpVyxDQUFBLENBQUU2QyxhQUFBLENBQWMsSUFBSTdDLENBQUEsQ0FBRWlELGdCQUFBLENBQWlCLEtBQUsxRixNQUFNLElBQUkzUCxDQUFBLEdBQUksS0FBSzZZLGNBQUEsS0FBbUIsUUFBUTdZLENBQUEsQ0FBRW1QLElBQUEsQ0FBS3FILEVBQUEsRUFBSTtNQUFFNUUsS0FBQSxFQUFPOVY7SUFBRSxDQUFDO0VBQ25NO0VBTUEsSUFBSThULFNBQUEsRUFBVztJQUNiLE9BQU8sS0FBS0QsTUFBQSxDQUFPakgsU0FBQSxDQUFVeEosUUFBQSxDQUFTaVosQ0FBQSxDQUFFeEYsR0FBQSxDQUFJL0MsUUFBUTtFQUN0RDtFQU1BLElBQUlDLFVBQVUvVCxDQUFBLEVBQUc7SUFDZixLQUFLNlQsTUFBQSxDQUFPakgsU0FBQSxDQUFVMFMsTUFBQSxDQUFPakQsQ0FBQSxDQUFFeEYsR0FBQSxDQUFJeUgsZ0JBQUEsRUFBa0J0ZSxDQUFDO0VBQ3hEO0VBTUEsSUFBSStULFVBQUEsRUFBWTtJQUNkLE9BQU8sS0FBS0YsTUFBQSxDQUFPakgsU0FBQSxDQUFVeEosUUFBQSxDQUFTaVosQ0FBQSxDQUFFeEYsR0FBQSxDQUFJeUgsZ0JBQWdCO0VBQzlEO0VBTUEsSUFBSUUsV0FBV3hlLENBQUEsRUFBRztJQUNoQixLQUFLNlQsTUFBQSxDQUFPakgsU0FBQSxDQUFVMFMsTUFBQSxDQUFPakQsQ0FBQSxDQUFFeEYsR0FBQSxDQUFJMkgsVUFBQSxFQUFZeGUsQ0FBQztFQUNsRDtFQU1BLElBQUlvZixlQUFBLEVBQWlCO0lBQ25CLE9BQU8sS0FBSzNDLG1CQUFBO0VBQ2Q7RUFTQXRiLEtBQUtuQixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNULElBQUkrSCxDQUFBLENBQUUsS0FBSzBWLFlBQUEsQ0FBYTlkLENBQUEsQ0FBRSxHQUFHO01BQzNCQSxDQUFBLEtBQU0sb0JBQW9COEgsQ0FBQSxDQUN4QixrSEFDQSxNQUNGO01BQ0EsSUFBSTtRQUNGLEtBQUtnVyxZQUFBLENBQWE5ZCxDQUFBLEVBQUdtQixJQUFBLENBQUssS0FBSzJjLFlBQUEsRUFBY3pkLENBQUM7TUFDaEQsU0FBU2dCLENBQUEsRUFBUDtRQUNBeUcsQ0FBQSxDQUFFLGlCQUFpQjlILENBQUEsV0FBWXFCLENBQUEsQ0FBRWtlLE9BQUEsSUFBVyxPQUFPO01BQ3JEO0lBQ0Y7RUFDRjtFQU1BLE1BQU1DLFVBQVV4ZixDQUFBLEVBQUc7SUFDakIsTUFBTSxLQUFLOGQsWUFBQSxDQUFhcUIsS0FBQSxDQUFNbmYsQ0FBQztFQUNqQztFQU9BLE1BQU1pVSxLQUFBLEVBQU87SUFDWCxNQUFNalUsQ0FBQSxHQUFJLE1BQU0sS0FBSzhkLFlBQUEsQ0FBYTdKLElBQUEsQ0FBSyxLQUFLbUwsY0FBYztNQUFHL2UsQ0FBQSxHQUFJLEtBQUt3YyxvQkFBQTtJQUN0RSxDQUNFLEdBQUcsS0FBS0gsY0FBQSxDQUFlekIsT0FBQSxDQUFRLEdBQy9CLEdBQUcsS0FBSzJCLHFCQUFBLENBQXNCM0IsT0FBQSxDQUFRLEVBQ3hDLENBQUVuWixPQUFBLENBQVEsQ0FBQyxDQUFDb0MsQ0FBQSxFQUFHRyxDQUFDLE1BQU07TUFDcEIsSUFBSStELENBQUEsQ0FBRS9ELENBQUEsQ0FBRTRQLElBQUksR0FDVixJQUFJO1FBQ0Y1VCxDQUFBLENBQUU2RCxDQUFBLElBQUtHLENBQUEsQ0FBRTRQLElBQUEsQ0FBSztNQUNoQixTQUFTMVAsQ0FBQSxFQUFQO1FBQ0F1RCxDQUFBLENBQUUsUUFBUXpELENBQUEsQ0FBRTVDLFdBQUEsQ0FBWTRILElBQUEsbUNBQXVDLFFBQVE5RSxDQUFDO01BQzFFO0lBQ0osQ0FBQztJQUNELE1BQU1sRCxDQUFBLEdBQUlYLE1BQUEsQ0FBTytlLFdBQUEsQ0FBWXphLEdBQUEsQ0FBSTtJQUNqQyxJQUFJakQsQ0FBQTtJQUNKLE9BQU9nSCxPQUFBLENBQVFDLE9BQUEsQ0FBUWhKLENBQUMsRUFBRWdmLElBQUEsQ0FBTTlhLENBQUEsS0FBT25DLENBQUEsR0FBSXJCLE1BQUEsQ0FBTytlLFdBQUEsQ0FBWXphLEdBQUEsQ0FBSSxHQUFHO01BQ25FMk8sRUFBQSxFQUFJLEtBQUtBLEVBQUE7TUFDVG9ILElBQUEsRUFBTSxLQUFLMVIsSUFBQTtNQUNYUCxJQUFBLEVBQU01RSxDQUFBO01BQ044WixLQUFBLEVBQU8zZCxDQUFBO01BQ1BxZixJQUFBLEVBQU0zZCxDQUFBLEdBQUlWO0lBQ1osRUFBRSxFQUFFc2UsS0FBQSxDQUFPemIsQ0FBQSxJQUFNO01BQ2Y0RCxDQUFBLENBQUUsc0JBQXNCLEtBQUt1QixJQUFBLDJCQUErQm5GLENBQUEsSUFBSyxPQUFPLEtBQUs7SUFDL0UsQ0FBQztFQUNIO0VBU0EsTUFBTWdRLFNBQVNsVSxDQUFBLEVBQUc7SUFDaEIsSUFBSUssQ0FBQSxHQUFJO0lBQ1IsT0FBTyxLQUFLeWQsWUFBQSxDQUFhNUosUUFBQSxZQUFvQjBMLFFBQUEsS0FBYXZmLENBQUEsR0FBSSxNQUFNLEtBQUt5ZCxZQUFBLENBQWE1SixRQUFBLENBQVNsVSxDQUFDLElBQUlLLENBQUE7RUFDdEc7RUFLQXdmLFNBQUEsRUFBVztJQUNULE1BQU03ZixDQUFBLEdBQUksRUFBQztNQUFHSyxDQUFBLEdBQUksRUFBQztNQUFHZ0IsQ0FBQSxHQUFJLE9BQU8sS0FBS3ljLFlBQUEsQ0FBYWdDLGNBQUEsSUFBa0IsYUFBYSxLQUFLaEMsWUFBQSxDQUFhZ0MsY0FBQSxDQUFlLElBQUksRUFBQztJQUN4SCxPQUFPeFQsQ0FBQSxDQUFFMEIsU0FBQSxDQUFVM00sQ0FBQyxJQUFJckIsQ0FBQSxDQUFFMkgsSUFBQSxDQUFLO01BQzdCMkcsSUFBQSxFQUFNb04sQ0FBQSxDQUFFRyxJQUFBO01BQ1J0SCxPQUFBLEVBQVNsVDtJQUNYLENBQUMsSUFBSW9DLEtBQUEsQ0FBTUMsT0FBQSxDQUFRckMsQ0FBQyxJQUFJckIsQ0FBQSxDQUFFMkgsSUFBQSxDQUFLLEdBQUd0RyxDQUFDLElBQUlyQixDQUFBLENBQUUySCxJQUFBLENBQUt0RyxDQUFDLEdBQUcsQ0FDaEQsR0FBRyxLQUFLcWIsY0FBQSxDQUFlcUQsTUFBQSxDQUFPLEdBQzlCLEdBQUcsS0FBS25ELHFCQUFBLENBQXNCbUQsTUFBQSxDQUFPLEVBQ3ZDLENBQUV4UyxHQUFBLENBQUtySixDQUFBLElBQU1BLENBQUEsQ0FBRThiLE1BQUEsQ0FBTyxDQUFDLEVBQUVsZSxPQUFBLENBQVNvQyxDQUFBLElBQU07TUFDdENvSSxDQUFBLENBQUUwQixTQUFBLENBQVU5SixDQUFDLElBQUk3RCxDQUFBLENBQUVzSCxJQUFBLENBQUs7UUFDdEIyRyxJQUFBLEVBQU1vTixDQUFBLENBQUVHLElBQUE7UUFDUnRILE9BQUEsRUFBU3JRO01BQ1gsQ0FBQyxJQUFJVCxLQUFBLENBQU1DLE9BQUEsQ0FBUVEsQ0FBQyxJQUFJN0QsQ0FBQSxDQUFFc0gsSUFBQSxDQUFLLEdBQUd6RCxDQUFDLElBQUk3RCxDQUFBLENBQUVzSCxJQUFBLENBQUt6RCxDQUFDO0lBQ2pELENBQUMsR0FBRztNQUNGK2IsU0FBQSxFQUFXamdCLENBQUE7TUFDWGtnQixXQUFBLEVBQWE3ZjtJQUNmO0VBQ0Y7RUFJQTZjLG1CQUFBLEVBQXFCO0lBQ25CLEtBQUt3QixZQUFBLEdBQWVwUyxDQUFBLENBQUVvQixhQUFBLENBQWMzTixRQUFBLENBQVNvZ0IsYUFBYSxLQUFLLENBQUM3SixDQUFBLENBQUVVLFVBQUEsR0FBYWpYLFFBQUEsQ0FBU29nQixhQUFBLEdBQWdCN0osQ0FBQSxDQUFFVSxVQUFBO0VBQzVHO0VBS0E3QyxlQUFBLEVBQWlCO0lBQ2YsS0FBS2dKLFVBQUEsQ0FBVztFQUNsQjtFQUlBM0osUUFBQSxFQUFVO0lBQ1IsS0FBSzRNLHFCQUFBLENBQXNCLEdBQUcsS0FBS0MsaUJBQUEsQ0FBa0IsR0FBRyxNQUFNN00sT0FBQSxDQUFRLEdBQUdwTCxDQUFBLENBQUUsS0FBSzBWLFlBQUEsQ0FBYXRLLE9BQU8sS0FBSyxLQUFLc0ssWUFBQSxDQUFhdEssT0FBQSxDQUFRO0VBQ3JJO0VBS0EsTUFBTVksc0JBQUEsRUFBd0I7SUFDNUIsTUFBTXBVLENBQUEsR0FBSSxLQUFLK2EsSUFBQSxDQUFLNUosT0FBQTtJQUNwQixJQUFJblIsQ0FBQSxDQUFFZ0QsTUFBQSxLQUFXLEdBQ2YsT0FBTytGLE9BQUEsQ0FBUUMsT0FBQSxDQUFRLEtBQUsrUixJQUFBLENBQUs1SixPQUFBLENBQVEsRUFBRTtJQUM3QyxNQUFNOVEsQ0FBQSxHQUFJLE1BQU0sS0FBS3lJLElBQUE7TUFBTXpILENBQUEsR0FBSXJCLENBQUE7SUFDL0IsT0FBT3FCLENBQUEsSUFBSyxPQUFPLFNBQVNBLENBQUEsQ0FBRStJLElBQUEsQ0FBTXJJLENBQUEsSUFBTWlaLEVBQUEsQ0FBR2paLENBQUEsQ0FBRStHLElBQUEsRUFBTXpJLENBQUMsQ0FBQztFQUN6RDtFQUlBLE1BQU1pZ0IsbUJBQUEsRUFBcUI7SUFDekIsTUFBTXRnQixDQUFBLEdBQUksTUFBTSxLQUFLOEksSUFBQTtJQUNyQixPQUFPd1MsRUFBQSxDQUFHdGIsQ0FBQSxFQUFHLEtBQUsrYSxJQUFBLENBQUtGLGdCQUFnQjtFQUN6QztFQU1BcUQsUUFBQSxFQUFVO0lBQ1IsTUFBTWxlLENBQUEsR0FBSXNNLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8yUCxDQUFBLENBQUV4RixHQUFBLENBQUl3SCxPQUFPO01BQUdoZSxDQUFBLEdBQUlpTSxDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPMlAsQ0FBQSxDQUFFeEYsR0FBQSxDQUFJMEgsT0FBTztNQUFHbGQsQ0FBQSxHQUFJLEtBQUt5YyxZQUFBLENBQWFrQyxNQUFBLENBQU87SUFDdkdoZ0IsQ0FBQSxDQUFFdWdCLFlBQUEsQ0FBYSxXQUFXLGVBQWUsR0FBR3ZnQixDQUFBLENBQUUyUSxPQUFBLENBQVFnRCxFQUFBLEdBQUssS0FBS0EsRUFBQSxFQUFJLEtBQUs4SSxtQkFBQSxHQUFzQnBiLENBQUEsRUFBR2hCLENBQUEsQ0FBRUgsV0FBQSxDQUFZLEtBQUt1YyxtQkFBbUI7SUFDeEksSUFBSTFhLENBQUEsR0FBSTFCLENBQUE7SUFDUixPQUFPLENBQUMsR0FBRyxLQUFLcWMsY0FBQSxDQUFlcUQsTUFBQSxDQUFPLEdBQUcsR0FBRyxLQUFLbkQscUJBQUEsQ0FBc0JtRCxNQUFBLENBQU8sQ0FBQyxFQUFFamUsT0FBQSxDQUFTb0MsQ0FBQSxJQUFNO01BQzlGLElBQUlrRSxDQUFBLENBQUVsRSxDQUFBLENBQUVzYyxJQUFJLEdBQ1YsSUFBSTtRQUNGemUsQ0FBQSxHQUFJbUMsQ0FBQSxDQUFFc2MsSUFBQSxDQUFLemUsQ0FBQztNQUNkLFNBQVNzQyxDQUFBLEVBQVA7UUFDQXlELENBQUEsQ0FBRSxRQUFRNUQsQ0FBQSxDQUFFekMsV0FBQSxDQUFZNEgsSUFBQSxtQ0FBdUMsUUFBUWhGLENBQUM7TUFDMUU7SUFDSixDQUFDLEdBQUdyRSxDQUFBLENBQUVFLFdBQUEsQ0FBWTZCLENBQUMsR0FBRy9CLENBQUE7RUFDeEI7RUFPQWllLGFBQWFqZSxDQUFBLEVBQUc7SUFDZHlELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLbVAsS0FBQSxDQUFNK0IsTUFBQSxDQUFPLENBQUMsRUFBRWplLE9BQUEsQ0FBU3pCLENBQUEsSUFBTTtNQUM3QyxDQUFDQSxDQUFBLENBQUVvZ0IsVUFBQSxHQUFhLEtBQUs3RCxxQkFBQSxHQUF3QixLQUFLRixjQUFBLEVBQWdCOVEsR0FBQSxDQUFJdkwsQ0FBQSxDQUFFZ0osSUFBQSxFQUFNaEosQ0FBQSxDQUFFMGQsTUFBQSxDQUFPL2QsQ0FBQSxDQUFFSyxDQUFBLENBQUVnSixJQUFBLEdBQU8sS0FBS3dVLFFBQVEsQ0FBQztJQUNsSCxDQUFDLEdBQUc3YyxNQUFBLENBQU9pYSxPQUFBLENBQVFqYixDQUFDLEVBQUU4QixPQUFBLENBQVEsQ0FBQyxDQUFDekIsQ0FBQSxFQUFHZ0IsQ0FBQyxNQUFNO01BQ3hDLEtBQUtxYixjQUFBLENBQWVnRSxHQUFBLENBQUlyZ0IsQ0FBQyxNQUFNLEtBQUt3YyxvQkFBQSxDQUFxQnhjLENBQUEsSUFBS2dCLENBQUE7SUFDaEUsQ0FBQztFQUNIO0VBSUErYyxlQUFBLEVBQWlCO0lBQ2YsS0FBS0ssTUFBQSxDQUFPM2MsT0FBQSxDQUFTOUIsQ0FBQSxJQUFNO01BQ3pCQSxDQUFBLENBQUU0VSxnQkFBQSxDQUFpQixTQUFTLEtBQUtvSSxXQUFXLEdBQUcxUSxDQUFBLENBQUVvQixhQUFBLENBQWMxTixDQUFDLEtBQUtBLENBQUEsQ0FBRTRVLGdCQUFBLENBQWlCLFNBQVMsS0FBS3VJLFVBQVU7SUFDbEgsQ0FBQztFQUNIO0VBSUFrRCxrQkFBQSxFQUFvQjtJQUNsQixLQUFLNUIsTUFBQSxDQUFPM2MsT0FBQSxDQUFTOUIsQ0FBQSxJQUFNO01BQ3pCQSxDQUFBLENBQUU2VSxtQkFBQSxDQUFvQixTQUFTLEtBQUttSSxXQUFXLEdBQUcxUSxDQUFBLENBQUVvQixhQUFBLENBQWMxTixDQUFDLEtBQUtBLENBQUEsQ0FBRTZVLG1CQUFBLENBQW9CLFNBQVMsS0FBS3NJLFVBQVU7SUFDeEgsQ0FBQztFQUNIO0VBSUFnQixvQkFBQSxFQUFzQjtJQUNwQixJQUFJbmUsQ0FBQTtJQUNKLEtBQUsyZ0IsMEJBQUEsR0FBOEJ0Z0IsQ0FBQSxJQUFNO01BQ3ZDLE1BQU07UUFBRXVnQixTQUFBLEVBQVd2ZjtNQUFFLElBQUloQixDQUFBO01BQ3pCZ0IsQ0FBQSxDQUFFaVosSUFBQSxDQUFNcFcsQ0FBQSxJQUFNZ1csRUFBQSxDQUFHaFcsQ0FBQSxFQUFHLEtBQUt1WSxtQkFBbUIsQ0FBQyxLQUFLLEtBQUtVLFVBQUEsQ0FBVzliLENBQUM7SUFDckUsSUFBSXJCLENBQUEsR0FBSSxLQUFLK2MsY0FBQSxLQUFtQixRQUFRL2MsQ0FBQSxDQUFFa1QsRUFBQSxDQUFHcUgsRUFBQSxFQUFJLEtBQUtvRywwQkFBMEI7RUFDbEY7RUFJQVAsc0JBQUEsRUFBd0I7SUFDdEIsSUFBSXBnQixDQUFBO0lBQ0osQ0FBQ0EsQ0FBQSxHQUFJLEtBQUsrYyxjQUFBLEtBQW1CLFFBQVEvYyxDQUFBLENBQUVzVCxHQUFBLENBQUlpSCxFQUFBLEVBQUksS0FBS29HLDBCQUEwQjtFQUNoRjtFQU9BdEQscUJBQXFCcmQsQ0FBQSxFQUFHO0lBQ3RCQSxDQUFBLENBQUU4QixPQUFBLENBQVN6QixDQUFBLElBQU07TUFDZixJQUFJb0QsS0FBQSxDQUFNb0wsSUFBQSxDQUFLeE8sQ0FBQSxDQUFFK1osWUFBWSxFQUFFM1MsUUFBQSxDQUFTLEtBQUtnVixtQkFBbUIsR0FBRztRQUNqRSxNQUFNMWEsQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFOFosVUFBQSxDQUFXOVosQ0FBQSxDQUFFOFosVUFBQSxDQUFXblgsTUFBQSxHQUFTO1FBQzdDLEtBQUt5WixtQkFBQSxHQUFzQjFhLENBQUE7TUFDN0I7SUFDRixDQUFDO0VBQ0g7RUFJQWtiLGdCQUFBLEVBQWtCO0lBQ2hCLEtBQUtULFlBQUEsR0FBZSxFQUFDO0VBQ3ZCO0VBSUFtQixzQkFBQSxFQUF3QjtJQUN0QixLQUFLYyxNQUFBLENBQU8zYyxPQUFBLENBQVE0TyxFQUFFO0VBQ3hCO0FBQ0Y7QUFDQSxJQUFNbVEsRUFBQSxHQUFOLGNBQWlCekwsQ0FBQSxDQUFFO0VBQ2pCM1QsWUFBQSxFQUFjO0lBQ1osTUFBTSxHQUFHRCxTQUFTLEdBQUcsS0FBS3NmLE1BQUEsR0FBUyxDQUFDOWdCLENBQUEsR0FBSSxLQUFLNFQsTUFBQSxDQUFPbU4sWUFBQSxFQUFjMWdCLENBQUEsR0FBSSxDQUFDLEdBQUdnQixDQUFBLEdBQUksQ0FBQyxHQUFHVSxDQUFBLEVBQUdtQyxDQUFBLEVBQUdHLENBQUEsRUFBR0UsQ0FBQSxLQUFNO01BQy9GLE1BQU1HLENBQUEsR0FBSSxLQUFLcVIsTUFBQSxDQUFPaUwsWUFBQSxDQUFhRixNQUFBLENBQU87UUFDeENuTixFQUFBLEVBQUlwUCxDQUFBO1FBQ0p3VyxJQUFBLEVBQU0vYSxDQUFBO1FBQ044SSxJQUFBLEVBQU16SSxDQUFBO1FBQ040Z0IsS0FBQSxFQUFPbGYsQ0FBQTtRQUNQbWYsV0FBQSxFQUFhaGQsQ0FBQTtRQUNiMEcsT0FBQSxFQUFTdkc7TUFDWCxDQUFDO01BQ0QsT0FBTyxJQUFJb1AsQ0FBQSxDQUFFL08sQ0FBQztJQUNoQixHQUFHLEtBQUt5YyxnQkFBQSxHQUFtQixNQUFPbmhCLENBQUEsSUFBTTtNQUN0QyxNQUFNSyxDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT3FMLEtBQUEsQ0FBTUMsVUFBQSxDQUFXcGYsR0FBQSxDQUFJakMsQ0FBQztNQUM1QyxPQUFPLElBQUlxYyxDQUFBLENBQUU7UUFDWHRCLElBQUEsRUFBTTFhLENBQUE7UUFDTmloQixHQUFBLEVBQUssS0FBS3ZMLE1BQUEsQ0FBT3dMLEdBQUE7UUFDakJqRixRQUFBLEVBQVU7UUFDVnhULElBQUEsRUFBTSxDQUFDO1FBQ1B5VCxTQUFBLEVBQVcsQ0FBQztNQUNkLENBQUMsRUFBRXpULElBQUE7SUFDTCxHQUFHLEtBQUswWSxNQUFBLEdBQVMsT0FBT3hoQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsS0FBTTtNQUNsQyxNQUFNO1VBQUUyZixZQUFBLEVBQWNqZjtRQUFFLElBQUksS0FBS2dVLE1BQUE7UUFBUTdSLENBQUEsR0FBSW5DLENBQUEsQ0FBRTBmLFlBQUEsQ0FBYXpoQixDQUFDO01BQzdELElBQUlrRSxDQUFBLEtBQU0sUUFDUixNQUFNLElBQUk2TyxLQUFBLENBQU0sa0JBQWtCL1MsQ0FBQSxhQUFjO01BQ2xELE1BQU1xRSxDQUFBLEdBQUksTUFBTXRDLENBQUEsQ0FBRXlmLE1BQUEsQ0FBT3RkLENBQUEsRUFBRzdELENBQUEsRUFBR2dCLENBQUM7TUFDaEMsT0FBTyxJQUFJb1MsQ0FBQSxDQUFFcFAsQ0FBQztJQUNoQixHQUFHLEtBQUtxZCxPQUFBLEdBQVUsT0FBTzFoQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsS0FBTTtNQUNuQyxJQUFJc2dCLENBQUEsRUFBR3JFLENBQUE7TUFDUCxNQUFNO1VBQUUwRCxZQUFBLEVBQWNqZixDQUFBO1VBQUdxZixLQUFBLEVBQU9sZDtRQUFFLElBQUksS0FBSzZSLE1BQUE7UUFBUTFSLENBQUEsR0FBSXRDLENBQUEsQ0FBRTBmLFlBQUEsQ0FBYXpoQixDQUFDO01BQ3ZFLElBQUksQ0FBQ3FFLENBQUEsRUFDSCxNQUFNLElBQUkwTyxLQUFBLENBQU0sa0JBQWtCL1MsQ0FBQSxhQUFjO01BQ2xELE1BQU11RSxDQUFBLEdBQUlMLENBQUEsQ0FBRW1kLFVBQUEsQ0FBV3BmLEdBQUEsQ0FBSW9DLENBQUEsQ0FBRWdGLElBQUk7UUFBRzNFLENBQUEsR0FBSVIsQ0FBQSxDQUFFbWQsVUFBQSxDQUFXcGYsR0FBQSxDQUFJNUIsQ0FBQztNQUMxRCxJQUFJLENBQUNxRSxDQUFBLEVBQ0gsTUFBTSxJQUFJcU8sS0FBQSxDQUFNLHlCQUF5QjFTLENBQUEsYUFBYztNQUN6RCxNQUFNdUUsQ0FBQSxLQUFNK2MsQ0FBQSxHQUFJcGQsQ0FBQSxJQUFLLE9BQU8sU0FBU0EsQ0FBQSxDQUFFc1csZ0JBQUEsS0FBcUIsT0FBTyxTQUFTOEcsQ0FBQSxDQUFFcEcsTUFBQSxNQUFZO1FBQVExUixDQUFBLEtBQU15VCxDQUFBLEdBQUk1WSxDQUFBLENBQUVtVyxnQkFBQSxLQUFxQixPQUFPLFNBQVN5QyxDQUFBLENBQUU3QixNQUFBLE1BQVk7TUFDakssSUFBSTdXLENBQUEsSUFBS2lGLENBQUEsRUFBRztRQUNWLE1BQU0wVCxDQUFBLEdBQUksTUFBTXhiLENBQUEsQ0FBRTJmLE9BQUEsQ0FBUXJkLENBQUEsRUFBR2hFLENBQUEsRUFBR2dCLENBQUM7UUFDakMsT0FBTyxJQUFJb1MsQ0FBQSxDQUFFOEosQ0FBQztNQUNoQixPQUFPO1FBQ0wsTUFBTUEsQ0FBQSxHQUFJLENBQ1IzWSxDQUFBLEdBQUksUUFBSzRGLEVBQUEsQ0FBR25HLENBQUEsQ0FBRWdGLElBQUksR0FDbEJRLENBQUEsR0FBSSxRQUFLVyxFQUFBLENBQUduSyxDQUFDLEVBQ2YsQ0FBRXNNLE1BQUEsQ0FBT2lWLE9BQU8sRUFBRXBVLElBQUEsQ0FBSyxPQUFPO1FBQzlCLE1BQU0sSUFBSXVGLEtBQUEsQ0FBTSxvQkFBb0IxTyxDQUFBLENBQUVnRixJQUFBLFNBQWFoSixDQUFBLHNCQUF1QmtkLENBQUEsOENBQStDO01BQzNIO0lBQ0YsR0FBRyxLQUFLc0UsVUFBQSxHQUFhLENBQUM3aEIsQ0FBQSxFQUFHSyxDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWMsTUFBQSxDQUFPOWUsTUFBQSxHQUFTLE1BQU07TUFDMUUsS0FBSytlLGFBQUEsQ0FBYzFoQixDQUFDO01BQ3BCLE1BQU1nQixDQUFBLEdBQUlyQixDQUFBLENBQUV1TixHQUFBLENBQUksQ0FBQztRQUFFb0csRUFBQSxFQUFJNVIsQ0FBQTtRQUFHdU0sSUFBQSxFQUFNcEssQ0FBQTtRQUFHNEUsSUFBQSxFQUFNekU7TUFBRSxNQUFNLEtBQUswUixNQUFBLENBQU9pTCxZQUFBLENBQWFnQixZQUFBLENBQWE7UUFDckZyTyxFQUFBLEVBQUk1UixDQUFBO1FBQ0pnWixJQUFBLEVBQU03VyxDQUFBLElBQUssS0FBSzBQLE1BQUEsQ0FBT21OLFlBQUE7UUFDdkJqWSxJQUFBLEVBQU16RTtNQUNSLENBQUMsQ0FBQztNQUNGLE9BQU8sS0FBSzBSLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWEsVUFBQSxDQUFXeGdCLENBQUEsRUFBR2hCLENBQUMsR0FBR2dCLENBQUEsQ0FBRWtNLEdBQUEsQ0FBS3hMLENBQUEsSUFBTSxJQUFJMFIsQ0FBQSxDQUFFMVIsQ0FBQyxDQUFDO0lBQ3pFO0VBQ0Y7RUFNQSxJQUFJa2dCLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTEMsS0FBQSxFQUFPQSxDQUFBLEtBQU0sS0FBS0EsS0FBQSxDQUFNO01BQ3hCbEMsTUFBQSxFQUFTaGdCLENBQUEsSUFBTSxLQUFLZ2dCLE1BQUEsQ0FBT2hnQixDQUFDO01BQzVCbWlCLGNBQUEsRUFBaUJuaUIsQ0FBQSxJQUFNLEtBQUttaUIsY0FBQSxDQUFlbmlCLENBQUM7TUFDNUNnUyxNQUFBLEVBQVNoUyxDQUFBLElBQU0sS0FBS2dTLE1BQUEsQ0FBT2hTLENBQUM7TUFDNUJpTixJQUFBLEVBQU1BLENBQUNqTixDQUFBLEVBQUdLLENBQUEsS0FBTSxLQUFLNE0sSUFBQSxDQUFLak4sQ0FBQSxFQUFHSyxDQUFDO01BQzlCK2hCLElBQUEsRUFBTUEsQ0FBQ3BpQixDQUFBLEVBQUdLLENBQUEsS0FBTSxLQUFLK2hCLElBQUEsQ0FBS3BpQixDQUFBLEVBQUdLLENBQUM7TUFDOUJnaUIsZUFBQSxFQUFrQnJpQixDQUFBLElBQU0sS0FBS3FpQixlQUFBLENBQWdCcmlCLENBQUM7TUFDOUNzaUIsT0FBQSxFQUFVdGlCLENBQUEsSUFBTSxLQUFLc2lCLE9BQUEsQ0FBUXRpQixDQUFDO01BQzlCdWlCLG9CQUFBLEVBQXNCQSxDQUFBLEtBQU0sS0FBS0Esb0JBQUEsQ0FBcUI7TUFDdERDLGFBQUEsRUFBZ0J4aUIsQ0FBQSxJQUFNLEtBQUt3aUIsYUFBQSxDQUFjeGlCLENBQUM7TUFDMUN5aUIsY0FBQSxFQUFnQkEsQ0FBQSxLQUFNLEtBQUtBLGNBQUEsQ0FBZTtNQUMxQ0MsaUJBQUEsRUFBb0IxaUIsQ0FBQSxJQUFNLEtBQUswaUIsaUJBQUEsQ0FBa0IxaUIsQ0FBQztNQUNsRDJpQixZQUFBLEVBQWNBLENBQUMzaUIsQ0FBQSxFQUFHSyxDQUFBLEdBQUksU0FBTyxLQUFLc2lCLFlBQUEsQ0FBYTNpQixDQUFBLEVBQUdLLENBQUM7TUFDbkR1aUIsY0FBQSxFQUFnQkEsQ0FBQSxLQUFNLEtBQUtBLGNBQUEsQ0FBZTtNQUMxQzlCLE1BQUEsRUFBUSxLQUFLQSxNQUFBO01BQ2JlLFVBQUEsRUFBWSxLQUFLQSxVQUFBO01BQ2pCTCxNQUFBLEVBQVEsS0FBS0EsTUFBQTtNQUNiTCxnQkFBQSxFQUFrQixLQUFLQSxnQkFBQTtNQUN2Qk8sT0FBQSxFQUFTLEtBQUtBO0lBQ2hCO0VBQ0Y7RUFNQWUsZUFBQSxFQUFpQjtJQUNmLE9BQU8sS0FBSzFNLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWMsTUFBQSxDQUFPOWUsTUFBQTtFQUN6QztFQU1BdWYscUJBQUEsRUFBdUI7SUFDckIsT0FBTyxLQUFLeE0sTUFBQSxDQUFPaUwsWUFBQSxDQUFhNkIsaUJBQUE7RUFDbEM7RUFNQUwsY0FBY3hpQixDQUFBLEVBQUc7SUFDZixNQUFNSyxDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYVMsWUFBQSxDQUFhemhCLENBQUM7SUFDakQsSUFBSSxDQUFDSyxDQUFBLEVBQUc7TUFDTjJILENBQUEsQ0FBRSxnQ0FBZ0NoSSxDQUFBLEdBQUksS0FBSyxNQUFNO01BQ2pEO0lBQ0Y7SUFDQSxPQUFPLEtBQUsrVixNQUFBLENBQU9pTCxZQUFBLENBQWF3QixhQUFBLENBQWNuaUIsQ0FBQztFQUNqRDtFQU1BZ2lCLGdCQUFnQnJpQixDQUFBLEVBQUc7SUFDakIsTUFBTUssQ0FBQSxHQUFJLEtBQUswVixNQUFBLENBQU9pTCxZQUFBLENBQWFxQixlQUFBLENBQWdCcmlCLENBQUM7SUFDcEQsSUFBSUssQ0FBQSxLQUFNLFFBQVE7TUFDaEIySCxDQUFBLENBQUUsaUNBQWlDaEksQ0FBQSxHQUFJLEtBQUssTUFBTTtNQUNsRDtJQUNGO0lBQ0EsT0FBTyxJQUFJeVQsQ0FBQSxDQUFFcFQsQ0FBQztFQUNoQjtFQU1BaWlCLFFBQVF0aUIsQ0FBQSxFQUFHO0lBQ1QsTUFBTUssQ0FBQSxHQUFJLEtBQUswVixNQUFBLENBQU9pTCxZQUFBLENBQWFTLFlBQUEsQ0FBYXpoQixDQUFDO0lBQ2pELE9BQU9LLENBQUEsS0FBTSxVQUFVMkgsQ0FBQSxDQUFFLGdDQUFnQ2hJLENBQUEsR0FBSSxLQUFLLE1BQU0sR0FBRyxRQUFRLElBQUl5VCxDQUFBLENBQUVwVCxDQUFDO0VBQzVGO0VBTUFxaUIsa0JBQWtCMWlCLENBQUEsRUFBRztJQUNuQixNQUFNSyxDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYThCLFFBQUEsQ0FBUzlpQixDQUFDO0lBQzdDLElBQUlLLENBQUEsS0FBTSxRQUFRO01BQ2hCMkgsQ0FBQSxDQUFFLGlEQUFpRGhJLENBQUEsR0FBSSxLQUFLLE1BQU07TUFDbEU7SUFDRjtJQUNBLE9BQU8sSUFBSXlULENBQUEsQ0FBRXBULENBQUM7RUFDaEI7RUFRQTRNLEtBQUtqTixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNUeUgsQ0FBQSxDQUNFLHlIQUNBLE1BQ0YsR0FBRyxLQUFLaU8sTUFBQSxDQUFPaUwsWUFBQSxDQUFhL1QsSUFBQSxDQUFLak4sQ0FBQSxFQUFHSyxDQUFDO0VBQ3ZDO0VBT0EraEIsS0FBS3BpQixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNULEtBQUswVixNQUFBLENBQU9pTCxZQUFBLENBQWFvQixJQUFBLENBQUtwaUIsQ0FBQSxFQUFHSyxDQUFDO0VBQ3BDO0VBTUEyUixPQUFPaFMsQ0FBQSxHQUFJLEtBQUsrVixNQUFBLENBQU9pTCxZQUFBLENBQWE2QixpQkFBQSxFQUFtQjtJQUNyRCxJQUFJO01BQ0YsTUFBTXhpQixDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYXFCLGVBQUEsQ0FBZ0JyaUIsQ0FBQztNQUNwRCxLQUFLK1YsTUFBQSxDQUFPaUwsWUFBQSxDQUFhK0IsV0FBQSxDQUFZMWlCLENBQUM7SUFDeEMsU0FBU0EsQ0FBQSxFQUFQO01BQ0EySCxDQUFBLENBQUUzSCxDQUFBLEVBQUcsTUFBTTtNQUNYO0lBQ0Y7SUFDQSxLQUFLMFYsTUFBQSxDQUFPaUwsWUFBQSxDQUFhYyxNQUFBLENBQU85ZSxNQUFBLEtBQVcsS0FBSyxLQUFLK1MsTUFBQSxDQUFPaUwsWUFBQSxDQUFhRixNQUFBLENBQU8sR0FBRyxLQUFLL0ssTUFBQSxDQUFPaUwsWUFBQSxDQUFhZ0MsWUFBQSxJQUFnQixLQUFLak4sTUFBQSxDQUFPa04sS0FBQSxDQUFNQyxVQUFBLENBQVcsS0FBS25OLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsRUFBYyxLQUFLak4sTUFBQSxDQUFPa04sS0FBQSxDQUFNRSxTQUFBLENBQVVDLEdBQUcsR0FBRyxLQUFLck4sTUFBQSxDQUFPc04sT0FBQSxDQUFRQyxLQUFBLENBQU07RUFDOVA7RUFJQSxNQUFNcEIsTUFBQSxFQUFRO0lBQ1osTUFBTSxLQUFLbk0sTUFBQSxDQUFPaUwsWUFBQSxDQUFha0IsS0FBQSxDQUFNLElBQUUsR0FBRyxLQUFLbk0sTUFBQSxDQUFPd04sYUFBQSxDQUFjRCxLQUFBLENBQU07RUFDNUU7RUFNQSxNQUFNdEQsT0FBT2hnQixDQUFBLEVBQUc7SUFDZCxJQUFJQSxDQUFBLEtBQU0sVUFBVUEsQ0FBQSxDQUFFOGhCLE1BQUEsS0FBVyxRQUMvQixNQUFNLElBQUkvTyxLQUFBLENBQU0sOENBQThDO0lBQ2hFLEtBQUtnRCxNQUFBLENBQU95TixxQkFBQSxDQUFzQkMsT0FBQSxDQUFRLEdBQUcsTUFBTSxLQUFLMU4sTUFBQSxDQUFPaUwsWUFBQSxDQUFha0IsS0FBQSxDQUFNLEdBQUcsTUFBTSxLQUFLbk0sTUFBQSxDQUFPMk4sUUFBQSxDQUFTMUQsTUFBQSxDQUFPaGdCLENBQUEsQ0FBRThoQixNQUFNLEdBQUcsS0FBSy9MLE1BQUEsQ0FBT3lOLHFCQUFBLENBQXNCRyxNQUFBLENBQU87RUFDN0s7RUFPQXhCLGVBQWVuaUIsQ0FBQSxFQUFHO0lBQ2hCLE9BQU8sS0FBSytWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWtCLEtBQUEsQ0FBTSxHQUFHLEtBQUtuTSxNQUFBLENBQU82TixLQUFBLENBQU1DLFdBQUEsQ0FBWTdqQixDQUFBLEVBQUcsSUFBRTtFQUM5RTtFQVFBMmlCLGFBQWEzaUIsQ0FBQSxFQUFHSyxDQUFBLEdBQUksTUFBSTtJQUN0QnFMLEVBQUEsQ0FDRSxNQUNBLHlCQUNBLFVBQ0Y7SUFDQSxNQUFNckssQ0FBQSxHQUFJLEtBQUswVSxNQUFBLENBQU9pTCxZQUFBLENBQWFxQixlQUFBLENBQWdCcmlCLENBQUM7SUFDcERxQixDQUFBLEtBQU1BLENBQUEsQ0FBRTBTLFNBQUEsR0FBWTFULENBQUE7RUFDdEI7RUFRQXVpQixlQUFBLEVBQWlCO0lBQ2Y5YSxDQUFBLENBQUUsK0hBQStILE1BQU0sR0FBRyxLQUFLZ1osTUFBQSxDQUFPO0VBQ3hKO0VBTUFpQixjQUFjL2hCLENBQUEsRUFBRztJQUNmLElBQUksT0FBT0EsQ0FBQSxJQUFLLFVBQ2QsTUFBTSxJQUFJK1MsS0FBQSxDQUFNLDBCQUEwQjtJQUM1QyxJQUFJL1MsQ0FBQSxHQUFJLEdBQ04sTUFBTSxJQUFJK1MsS0FBQSxDQUFNLDRDQUE0QztJQUM5RCxJQUFJL1MsQ0FBQSxLQUFNLE1BQ1IsTUFBTSxJQUFJK1MsS0FBQSxDQUFNLDRDQUE0QztFQUNoRTtBQUNGO0FBQ0EsU0FBUytRLEdBQUdoakIsQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDaEIsT0FBTyxPQUFPYyxDQUFBLElBQUssV0FBV2QsQ0FBQSxDQUFFZ2hCLFlBQUEsQ0FBYXFCLGVBQUEsQ0FBZ0J2aEIsQ0FBQyxJQUFJLE9BQU9BLENBQUEsSUFBSyxXQUFXZCxDQUFBLENBQUVnaEIsWUFBQSxDQUFhUyxZQUFBLENBQWEzZ0IsQ0FBQyxJQUFJZCxDQUFBLENBQUVnaEIsWUFBQSxDQUFhUyxZQUFBLENBQWEzZ0IsQ0FBQSxDQUFFNlMsRUFBRTtBQUM1SjtBQUNBLElBQU1vUSxFQUFBLEdBQU4sY0FBaUIzTyxDQUFBLENBQUU7RUFDakIzVCxZQUFBLEVBQWM7SUFDWixNQUFNLEdBQUdELFNBQVMsR0FBRyxLQUFLd2lCLGVBQUEsR0FBa0IsQ0FBQ2hrQixDQUFBLEdBQUksS0FBSytWLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUUsU0FBQSxDQUFVYyxPQUFBLEVBQVM1akIsQ0FBQSxHQUFJLE1BQU0sS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWtELFVBQUEsSUFBYyxLQUFLbk8sTUFBQSxDQUFPa04sS0FBQSxDQUFNQyxVQUFBLENBQVcsS0FBS25OLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWtELFVBQUEsRUFBWWxrQixDQUFBLEVBQUdLLENBQUMsR0FBRyxRQUFNLE9BQUksS0FBSzhqQixjQUFBLEdBQWlCLENBQUNua0IsQ0FBQSxHQUFJLEtBQUsrVixNQUFBLENBQU9rTixLQUFBLENBQU1FLFNBQUEsQ0FBVWMsT0FBQSxFQUFTNWpCLENBQUEsR0FBSSxNQUFNLEtBQUswVixNQUFBLENBQU9pTCxZQUFBLENBQWFvRCxTQUFBLElBQWEsS0FBS3JPLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUMsVUFBQSxDQUFXLEtBQUtuTixNQUFBLENBQU9pTCxZQUFBLENBQWFvRCxTQUFBLEVBQVdwa0IsQ0FBQSxFQUFHSyxDQUFDLEdBQUcsUUFBTSxPQUFJLEtBQUtna0Isa0JBQUEsR0FBcUIsQ0FBQ3JrQixDQUFBLEdBQUksS0FBSytWLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUUsU0FBQSxDQUFVYyxPQUFBLEVBQVM1akIsQ0FBQSxHQUFJLE1BQU0sS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYXNELGFBQUEsSUFBaUIsS0FBS3ZPLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUMsVUFBQSxDQUFXLEtBQUtuTixNQUFBLENBQU9pTCxZQUFBLENBQWFzRCxhQUFBLEVBQWV0a0IsQ0FBQSxFQUFHSyxDQUFDLEdBQUcsUUFBTSxPQUFJLEtBQUtra0IsY0FBQSxHQUFpQixDQUFDdmtCLENBQUEsR0FBSSxLQUFLK1YsTUFBQSxDQUFPa04sS0FBQSxDQUFNRSxTQUFBLENBQVVjLE9BQUEsRUFBUzVqQixDQUFBLEdBQUksTUFBTSxLQUFLMFYsTUFBQSxDQUFPaUwsWUFBQSxDQUFhd0QsU0FBQSxJQUFhLEtBQUt6TyxNQUFBLENBQU9rTixLQUFBLENBQU1DLFVBQUEsQ0FBVyxLQUFLbk4sTUFBQSxDQUFPaUwsWUFBQSxDQUFhd0QsU0FBQSxFQUFXeGtCLENBQUEsRUFBR0ssQ0FBQyxHQUFHLFFBQU0sT0FBSSxLQUFLNmlCLFVBQUEsR0FBYSxDQUFDbGpCLENBQUEsRUFBR0ssQ0FBQSxHQUFJLEtBQUswVixNQUFBLENBQU9rTixLQUFBLENBQU1FLFNBQUEsQ0FBVWMsT0FBQSxFQUFTNWlCLENBQUEsR0FBSSxNQUFNO01BQ24zQixNQUFNVSxDQUFBLEdBQUkraEIsRUFBQSxDQUFHOWpCLENBQUEsRUFBRyxLQUFLK1YsTUFBTTtNQUMzQixPQUFPaFUsQ0FBQSxLQUFNLFNBQVMsU0FBTSxLQUFLZ1UsTUFBQSxDQUFPa04sS0FBQSxDQUFNQyxVQUFBLENBQVduaEIsQ0FBQSxFQUFHMUIsQ0FBQSxFQUFHZ0IsQ0FBQyxHQUFHO0lBQ3JFLEdBQUcsS0FBS3NYLEtBQUEsR0FBUSxDQUFDM1ksQ0FBQSxHQUFJLFVBQU9BLENBQUEsR0FBSSxLQUFLbWtCLGNBQUEsQ0FBZSxLQUFLcE8sTUFBQSxDQUFPa04sS0FBQSxDQUFNRSxTQUFBLENBQVVDLEdBQUcsSUFBSSxLQUFLWSxlQUFBLENBQWdCLEtBQUtqTyxNQUFBLENBQU9rTixLQUFBLENBQU1FLFNBQUEsQ0FBVXNCLEtBQUs7RUFDL0k7RUFNQSxJQUFJeEMsUUFBQSxFQUFVO0lBQ1osT0FBTztNQUNMK0IsZUFBQSxFQUFpQixLQUFLQSxlQUFBO01BQ3RCRyxjQUFBLEVBQWdCLEtBQUtBLGNBQUE7TUFDckJFLGtCQUFBLEVBQW9CLEtBQUtBLGtCQUFBO01BQ3pCRSxjQUFBLEVBQWdCLEtBQUtBLGNBQUE7TUFDckJyQixVQUFBLEVBQVksS0FBS0EsVUFBQTtNQUNqQnZLLEtBQUEsRUFBTyxLQUFLQTtJQUNkO0VBQ0Y7QUFDRjtBQUNBLElBQU0rTCxFQUFBLEdBQU4sY0FBaUJ0UCxDQUFBLENBQUU7RUFNakIsSUFBSTZNLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTDVPLElBQUEsRUFBTUEsQ0FBQ3JULENBQUEsRUFBR0ssQ0FBQSxLQUFNLEtBQUtnVCxJQUFBLENBQUtyVCxDQUFBLEVBQUdLLENBQUM7TUFDOUJpVCxHQUFBLEVBQUtBLENBQUN0VCxDQUFBLEVBQUdLLENBQUEsS0FBTSxLQUFLaVQsR0FBQSxDQUFJdFQsQ0FBQSxFQUFHSyxDQUFDO01BQzVCNlMsRUFBQSxFQUFJQSxDQUFDbFQsQ0FBQSxFQUFHSyxDQUFBLEtBQU0sS0FBSzZTLEVBQUEsQ0FBR2xULENBQUEsRUFBR0ssQ0FBQztJQUM1QjtFQUNGO0VBT0E2UyxHQUFHbFQsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDUCxLQUFLZ1YsZ0JBQUEsQ0FBaUJuQyxFQUFBLENBQUdsVCxDQUFBLEVBQUdLLENBQUM7RUFDL0I7RUFPQWdULEtBQUtyVCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNULEtBQUtnVixnQkFBQSxDQUFpQmhDLElBQUEsQ0FBS3JULENBQUEsRUFBR0ssQ0FBQztFQUNqQztFQU9BaVQsSUFBSXRULENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ1IsS0FBS2dWLGdCQUFBLENBQWlCL0IsR0FBQSxDQUFJdFQsQ0FBQSxFQUFHSyxDQUFDO0VBQ2hDO0FBQ0Y7QUFDQSxJQUFNc2tCLEVBQUEsR0FBTixjQUFpQnZQLENBQUEsQ0FBRTtFQU9qQixPQUFPeEMsYUFBYTVTLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ3hCLE9BQU9BLENBQUEsR0FBSSxjQUFjTCxDQUFBLEtBQU0sU0FBU0EsQ0FBQTtFQUMxQztFQUlBLElBQUlpaUIsUUFBQSxFQUFVO0lBQ1osT0FBTztNQUNMNWhCLENBQUEsRUFBR0EsQ0FBQSxLQUFNO1FBQ1AySCxDQUFBLENBQUUsbURBQW1ELE1BQU07TUFDN0Q7SUFDRjtFQUNGO0VBT0E0YyxrQkFBa0I1a0IsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDdEIsT0FBT1csTUFBQSxDQUFPb0IsTUFBQSxDQUNaLEtBQUs2ZixPQUFBLEVBQ0w7TUFDRTVoQixDQUFBLEVBQUlnQixDQUFBLElBQU13UixDQUFBLENBQUV4UyxDQUFBLENBQUVza0IsRUFBQSxDQUFHL1IsWUFBQSxDQUFhNVMsQ0FBQSxFQUFHSyxDQUFDLEdBQUdnQixDQUFDO0lBQ3hDLENBQ0Y7RUFDRjtBQUNGO0FBQ0EsSUFBTXdqQixFQUFBLEdBQU4sY0FBaUJ6UCxDQUFBLENBQUU7RUFJakIsSUFBSTZNLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTEgsTUFBQSxFQUFRLEtBQUsvTCxNQUFBLENBQU8rTyxTQUFBLENBQVU3QyxPQUFBO01BQzlCOEMsS0FBQSxFQUFPLEtBQUtoUCxNQUFBLENBQU9pUCxRQUFBLENBQVMvQyxPQUFBO01BQzVCM1AsS0FBQSxFQUFPLEtBQUt5RCxNQUFBLENBQU9rUCxRQUFBLENBQVNoRCxPQUFBO01BQzVCaUQsTUFBQSxFQUFRLEtBQUtuUCxNQUFBLENBQU9vUCxTQUFBLENBQVVsRCxPQUFBO01BQzlCMU0sU0FBQSxFQUFXLEtBQUtRLE1BQUEsQ0FBT3FQLFlBQUEsQ0FBYW5ELE9BQUE7TUFDcENvRCxRQUFBLEVBQVUsS0FBS3RQLE1BQUEsQ0FBT3VQLFdBQUEsQ0FBWXJELE9BQUE7TUFDbENzRCxTQUFBLEVBQVcsS0FBS3hQLE1BQUEsQ0FBT3lQLFlBQUEsQ0FBYXZELE9BQUE7TUFDcEN3RCxLQUFBLEVBQU8sS0FBSzFQLE1BQUEsQ0FBTzJQLFFBQUEsQ0FBU3pELE9BQUE7TUFDNUJ6TCxTQUFBLEVBQVcsS0FBS1QsTUFBQSxDQUFPNFAsWUFBQSxDQUFhMUQsT0FBQTtNQUNwQzJELE1BQUEsRUFBUSxLQUFLN1AsTUFBQSxDQUFPOFAsU0FBQSxDQUFVQyxPQUFBO01BQzlCNVUsT0FBQSxFQUFTLEtBQUs2RSxNQUFBLENBQU9nUSxVQUFBLENBQVc5RCxPQUFBO01BQ2hDalIsYUFBQSxFQUFlLEtBQUsrRSxNQUFBLENBQU9pUSxnQkFBQSxDQUFpQi9ELE9BQUE7TUFDNUNnRSxPQUFBLEVBQVMsS0FBS2xRLE1BQUEsQ0FBT21RLFVBQUEsQ0FBV2pFLE9BQUE7TUFDaEM3TCxJQUFBLEVBQU0sS0FBS0wsTUFBQSxDQUFPb1EsT0FBQSxDQUFRbEUsT0FBQTtNQUMxQjNGLFFBQUEsRUFBVSxLQUFLdkcsTUFBQSxDQUFPcVEsV0FBQSxDQUFZbkUsT0FBQTtNQUNsQ3JRLEVBQUEsRUFBSSxLQUFLbUUsTUFBQSxDQUFPc1EsS0FBQSxDQUFNcEU7SUFDeEI7RUFDRjtFQU9BMkMsa0JBQWtCNWtCLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ3RCLE9BQU9XLE1BQUEsQ0FBT29CLE1BQUEsQ0FDWixLQUFLNmYsT0FBQSxFQUNMO01BQ0U3TCxJQUFBLEVBQU0sS0FBS0wsTUFBQSxDQUFPb1EsT0FBQSxDQUFRdkIsaUJBQUEsQ0FBa0I1a0IsQ0FBQSxFQUFHSyxDQUFDO0lBQ2xELENBQ0Y7RUFDRjtBQUNGO0FBQ0EsSUFBTWltQixFQUFBLEdBQU4sY0FBaUJsUixDQUFBLENBQUU7RUFNakIsSUFBSTZNLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTHFCLEtBQUEsRUFBT0EsQ0FBQSxLQUFNLEtBQUtBLEtBQUEsQ0FBTTtNQUN4QmhZLElBQUEsRUFBTUEsQ0FBQSxLQUFNLEtBQUtBLElBQUEsQ0FBSztJQUN4QjtFQUNGO0VBSUFBLEtBQUEsRUFBTztJQUNMLEtBQUt5SyxNQUFBLENBQU93TixhQUFBLENBQWNnRCxTQUFBLENBQVU7RUFDdEM7RUFJQWpELE1BQUEsRUFBUTtJQUNOLEtBQUt2TixNQUFBLENBQU93TixhQUFBLENBQWNELEtBQUEsQ0FBTTtFQUNsQztBQUNGO0FBQ0EsSUFBTWtELEVBQUEsR0FBTixjQUFpQnBSLENBQUEsQ0FBRTtFQU1qQixJQUFJNk0sUUFBQSxFQUFVO0lBQ1osT0FBTztNQUNML08sRUFBQSxFQUFJQSxDQUFDbFQsQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsS0FBTSxLQUFLbVIsRUFBQSxDQUFHbFQsQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUM7TUFDdEN1UixHQUFBLEVBQUtBLENBQUN0VCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxLQUFNLEtBQUt1UixHQUFBLENBQUl0VCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQztNQUN4QytTLE9BQUEsRUFBVTlVLENBQUEsSUFBTSxLQUFLOFUsT0FBQSxDQUFROVUsQ0FBQztJQUNoQztFQUNGO0VBU0FrVCxHQUFHbFQsQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsRUFBRztJQUNiLE9BQU8sS0FBS3dULFNBQUEsQ0FBVXJDLEVBQUEsQ0FBR2xULENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHVSxDQUFDO0VBQ3JDO0VBU0F1UixJQUFJdFQsQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsRUFBRztJQUNkLEtBQUt3VCxTQUFBLENBQVVqQyxHQUFBLENBQUl0VCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQztFQUMvQjtFQU1BK1MsUUFBUTlVLENBQUEsRUFBRztJQUNULEtBQUt1VixTQUFBLENBQVVULE9BQUEsQ0FBUTlVLENBQUM7RUFDMUI7QUFDRjtBQUNBLElBQUl5bUIsRUFBQSxHQUFLO0VBQUU1bUIsT0FBQSxFQUFTLENBQUM7QUFBRTtBQUFBLENBQ3RCLFVBQVNpQixDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNkLENBQUMsVUFBU0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0lBQ2RQLENBQUEsQ0FBRWpCLE9BQUEsR0FBVXdCLENBQUEsQ0FBRTtFQUNoQixHQUFHWCxNQUFBLEVBQVEsWUFBVztJQUNwQixPQUFPLFVBQVNMLENBQUEsRUFBRztNQUNqQixJQUFJZ0IsQ0FBQSxHQUFJLENBQUM7TUFDVCxTQUFTVSxFQUFFbUMsQ0FBQSxFQUFHO1FBQ1osSUFBSTdDLENBQUEsQ0FBRTZDLENBQUEsR0FDSixPQUFPN0MsQ0FBQSxDQUFFNkMsQ0FBQSxFQUFHckUsT0FBQTtRQUNkLElBQUl3RSxDQUFBLEdBQUloRCxDQUFBLENBQUU2QyxDQUFBLElBQUs7VUFBRW5DLENBQUEsRUFBR21DLENBQUE7VUFBR1EsQ0FBQSxFQUFHO1VBQUk3RSxPQUFBLEVBQVMsQ0FBQztRQUFFO1FBQzFDLE9BQU9RLENBQUEsQ0FBRTZELENBQUEsRUFBRy9DLElBQUEsQ0FBS2tELENBQUEsQ0FBRXhFLE9BQUEsRUFBU3dFLENBQUEsRUFBR0EsQ0FBQSxDQUFFeEUsT0FBQSxFQUFTa0MsQ0FBQyxHQUFHc0MsQ0FBQSxDQUFFSyxDQUFBLEdBQUksTUFBSUwsQ0FBQSxDQUFFeEUsT0FBQTtNQUM1RDtNQUNBLE9BQU9rQyxDQUFBLENBQUUya0IsQ0FBQSxHQUFJcm1CLENBQUEsRUFBRzBCLENBQUEsQ0FBRTZDLENBQUEsR0FBSXZELENBQUEsRUFBR1UsQ0FBQSxDQUFFdUssQ0FBQSxHQUFJLFVBQVNwSSxDQUFBLEVBQUdHLENBQUEsRUFBR0UsQ0FBQSxFQUFHO1FBQy9DeEMsQ0FBQSxDQUFFVixDQUFBLENBQUU2QyxDQUFBLEVBQUdHLENBQUMsS0FBS3JELE1BQUEsQ0FBT1csY0FBQSxDQUFldUMsQ0FBQSxFQUFHRyxDQUFBLEVBQUc7VUFBRW5DLFVBQUEsRUFBWTtVQUFJRCxHQUFBLEVBQUtzQztRQUFFLENBQUM7TUFDckUsR0FBR3hDLENBQUEsQ0FBRXNDLENBQUEsR0FBSSxVQUFTSCxDQUFBLEVBQUc7UUFDbkIsT0FBT3lpQixNQUFBLEdBQVMsT0FBT0EsTUFBQSxDQUFPQyxXQUFBLElBQWU1bEIsTUFBQSxDQUFPVyxjQUFBLENBQWV1QyxDQUFBLEVBQUd5aUIsTUFBQSxDQUFPQyxXQUFBLEVBQWE7VUFBRWhsQixLQUFBLEVBQU87UUFBUyxDQUFDLEdBQUdaLE1BQUEsQ0FBT1csY0FBQSxDQUFldUMsQ0FBQSxFQUFHLGNBQWM7VUFBRXRDLEtBQUEsRUFBTztRQUFHLENBQUM7TUFDdEssR0FBR0csQ0FBQSxDQUFFMUIsQ0FBQSxHQUFJLFVBQVM2RCxDQUFBLEVBQUdHLENBQUEsRUFBRztRQUN0QixJQUFJLElBQUlBLENBQUEsS0FBTUgsQ0FBQSxHQUFJbkMsQ0FBQSxDQUFFbUMsQ0FBQyxJQUFJLElBQUlHLENBQUEsSUFBSyxJQUFJQSxDQUFBLElBQUssT0FBT0gsQ0FBQSxJQUFLLFlBQVlBLENBQUEsSUFBS0EsQ0FBQSxDQUFFbkQsVUFBQSxFQUN4RSxPQUFPbUQsQ0FBQTtRQUNULElBQUlLLENBQUEsR0FBb0IsZUFBQXZELE1BQUEsQ0FBTytjLE1BQUEsQ0FBTyxJQUFJO1FBQzFDLElBQUloYyxDQUFBLENBQUVzQyxDQUFBLENBQUVFLENBQUMsR0FBR3ZELE1BQUEsQ0FBT1csY0FBQSxDQUFlNEMsQ0FBQSxFQUFHLFdBQVc7VUFBRXJDLFVBQUEsRUFBWTtVQUFJTixLQUFBLEVBQU9zQztRQUFFLENBQUMsR0FBRyxJQUFJRyxDQUFBLElBQUssT0FBT0gsQ0FBQSxJQUFLLFVBQ2xHLFNBQVNRLENBQUEsSUFBS1IsQ0FBQSxFQUNabkMsQ0FBQSxDQUFFdUssQ0FBQSxDQUFFL0gsQ0FBQSxFQUFHRyxDQUFBLEVBQUksVUFBU0UsQ0FBQSxFQUFHO1VBQ3JCLE9BQU9WLENBQUEsQ0FBRVUsQ0FBQTtRQUNYLEVBQUdtRCxJQUFBLENBQUssTUFBTXJELENBQUMsQ0FBQztRQUNwQixPQUFPSCxDQUFBO01BQ1QsR0FBR3hDLENBQUEsQ0FBRWpCLENBQUEsR0FBSSxVQUFTb0QsQ0FBQSxFQUFHO1FBQ25CLElBQUlHLENBQUEsR0FBSUgsQ0FBQSxJQUFLQSxDQUFBLENBQUVuRCxVQUFBLEdBQWEsWUFBVztVQUNyQyxPQUFPbUQsQ0FBQSxDQUFFeEUsT0FBQTtRQUNYLElBQUksWUFBVztVQUNiLE9BQU93RSxDQUFBO1FBQ1Q7UUFDQSxPQUFPbkMsQ0FBQSxDQUFFdUssQ0FBQSxDQUFFakksQ0FBQSxFQUFHLEtBQUtBLENBQUMsR0FBR0EsQ0FBQTtNQUN6QixHQUFHdEMsQ0FBQSxDQUFFVixDQUFBLEdBQUksVUFBUzZDLENBQUEsRUFBR0csQ0FBQSxFQUFHO1FBQ3RCLE9BQU9yRCxNQUFBLENBQU9DLFNBQUEsQ0FBVUMsY0FBQSxDQUFlQyxJQUFBLENBQUsrQyxDQUFBLEVBQUdHLENBQUM7TUFDbEQsR0FBR3RDLENBQUEsQ0FBRXViLENBQUEsR0FBSSxLQUFLdmIsQ0FBQSxDQUFFQSxDQUFBLENBQUVtQyxDQUFBLEdBQUksQ0FBQztJQUN6QixFQUFFLENBQUMsVUFBUzdELENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxFQUFHO01BQ25CQSxDQUFBLENBQUUsQ0FBQyxHQUlIMUIsQ0FBQSxDQUFFUixPQUFBLEdBQVUsWUFBVztRQUNyQixJQUFJcUUsQ0FBQSxHQUFJbkMsQ0FBQSxDQUFFLENBQUM7VUFBR3NDLENBQUEsR0FBSTtVQUF5QkUsQ0FBQSxHQUFJO1FBQy9DLE9BQU87VUFBRXNpQixJQUFBLEVBQU0sU0FBQUEsQ0FBU25pQixDQUFBLEVBQUc7WUFDekIsSUFBSUEsQ0FBQSxDQUFFNmEsT0FBQSxFQUFTO2NBQ2IsQ0FBQyxZQUFXO2dCQUNWLElBQUloYixDQUFBLEVBQ0YsT0FBTztnQkFDVEEsQ0FBQSxHQUFJTCxDQUFBLENBQUU0aUIsVUFBQSxDQUFXLEdBQUcvbUIsUUFBQSxDQUFTeVosSUFBQSxDQUFLdFosV0FBQSxDQUFZcUUsQ0FBQztjQUNqRCxHQUFHO2NBQ0gsSUFBSUssQ0FBQSxHQUFJO2dCQUFNaUYsQ0FBQSxHQUFJbkYsQ0FBQSxDQUFFZ2IsSUFBQSxJQUFRO2NBQzVCLFFBQVFoYixDQUFBLENBQUU0SixJQUFBO2dCQUFBLEtBQ0g7a0JBQ0gxSixDQUFBLEdBQUlWLENBQUEsQ0FBRTZpQixPQUFBLENBQVFyaUIsQ0FBQztrQkFDZjtnQkFBQSxLQUNHO2tCQUNIRSxDQUFBLEdBQUlWLENBQUEsQ0FBRThpQixNQUFBLENBQU90aUIsQ0FBQztrQkFDZDtnQkFBQTtrQkFFQUUsQ0FBQSxHQUFJVixDQUFBLENBQUUraUIsS0FBQSxDQUFNdmlCLENBQUMsR0FBR2hFLE1BQUEsQ0FBT3VFLFVBQUEsQ0FBVyxZQUFXO29CQUMzQ0wsQ0FBQSxDQUFFc1IsTUFBQSxDQUFPO2tCQUNYLEdBQUdyTSxDQUFDO2NBQUE7Y0FFUnRGLENBQUEsQ0FBRXJFLFdBQUEsQ0FBWTBFLENBQUMsR0FBR0EsQ0FBQSxDQUFFZ0ksU0FBQSxDQUFVQyxHQUFBLENBQUl4SSxDQUFDO1lBQ3JDO1VBQ0Y7UUFBRTtNQUNKLEVBQUU7SUFDSixHQUFHLFVBQVNoRSxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsRUFBRztNQUNuQixJQUFJbUMsQ0FBQSxHQUFJbkMsQ0FBQSxDQUFFLENBQUM7TUFDWCxPQUFPbUMsQ0FBQSxJQUFLLGFBQWFBLENBQUEsR0FBSSxDQUFDLENBQUM3RCxDQUFBLENBQUUwQixDQUFBLEVBQUdtQyxDQUFBLEVBQUcsRUFBRSxDQUFDO01BQzFDLElBQUlHLENBQUEsR0FBSTtRQUFFNmlCLEdBQUEsRUFBSztRQUFJQyxTQUFBLEVBQVc7UUFBUUMsVUFBQSxFQUFZO01BQU87TUFDekRybEIsQ0FBQSxDQUFFLENBQUMsRUFBRW1DLENBQUEsRUFBR0csQ0FBQyxHQUFHSCxDQUFBLENBQUVtakIsTUFBQSxLQUFXaG5CLENBQUEsQ0FBRVIsT0FBQSxHQUFVcUUsQ0FBQSxDQUFFbWpCLE1BQUE7SUFDekMsR0FBRyxVQUFTaG5CLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxFQUFHO01BQ25CLENBQUMxQixDQUFBLENBQUVSLE9BQUEsR0FBVWtDLENBQUEsQ0FBRSxDQUFDLEVBQUUsS0FBRSxHQUFHNEYsSUFBQSxDQUFLLENBQUN0SCxDQUFBLENBQUUwQixDQUFBLEVBQUcscXpFQUFxekUsRUFBRSxDQUFDO0lBQzUxRSxHQUFHLFVBQVMxQixDQUFBLEVBQUdnQixDQUFBLEVBQUc7TUFDaEJoQixDQUFBLENBQUVSLE9BQUEsR0FBVSxVQUFTa0MsQ0FBQSxFQUFHO1FBQ3RCLElBQUltQyxDQUFBLEdBQUksRUFBQztRQUNULE9BQU9BLENBQUEsQ0FBRTJCLFFBQUEsR0FBVyxZQUFXO1VBQzdCLE9BQU8sS0FBSzBILEdBQUEsQ0FBSSxVQUFTbEosQ0FBQSxFQUFHO1lBQzFCLElBQUlFLENBQUEsR0FBSSxVQUFTRyxDQUFBLEVBQUdFLENBQUEsRUFBRztjQUNyQixJQUFJaUYsQ0FBQSxHQUFJbkYsQ0FBQSxDQUFFLE1BQU07Z0JBQUlpZCxDQUFBLEdBQUlqZCxDQUFBLENBQUU7Y0FDMUIsSUFBSSxDQUFDaWQsQ0FBQSxFQUNILE9BQU85WCxDQUFBO2NBQ1QsSUFBSWpGLENBQUEsSUFBSyxPQUFPMGlCLElBQUEsSUFBUSxZQUFZO2dCQUNsQyxJQUFJaEssQ0FBQSxJQUFLRSxDQUFBLEdBQUltRSxDQUFBLEVBQUcscUVBQXFFMkYsSUFBQSxDQUFLQyxRQUFBLENBQVNDLGtCQUFBLENBQW1CcGIsSUFBQSxDQUFLQyxTQUFBLENBQVVtUixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7a0JBQVFELENBQUEsR0FBSW9FLENBQUEsQ0FBRThGLE9BQUEsQ0FBUWxhLEdBQUEsQ0FBSSxVQUFTa1EsQ0FBQSxFQUFHO29CQUNqTCxPQUFPLG1CQUFtQmtFLENBQUEsQ0FBRStGLFVBQUEsR0FBYWpLLENBQUEsR0FBSTtrQkFDL0MsQ0FBQztnQkFDRCxPQUFPLENBQUM1VCxDQUFDLEVBQUU4ZCxNQUFBLENBQU9wSyxDQUFDLEVBQUVvSyxNQUFBLENBQU8sQ0FBQ3JLLENBQUMsQ0FBQyxFQUFFOVAsSUFBQSxDQUFLO0FBQUEsQ0FDckQ7Y0FDYTtjQUNBLElBQUlnUSxDQUFBO2NBQ0osT0FBTyxDQUFDM1QsQ0FBQyxFQUFFMkQsSUFBQSxDQUFLO0FBQUEsQ0FDN0I7WUFDVyxFQUFFbkosQ0FBQSxFQUFHdEMsQ0FBQztZQUNOLE9BQU9zQyxDQUFBLENBQUUsS0FBSyxZQUFZQSxDQUFBLENBQUUsS0FBSyxNQUFNRSxDQUFBLEdBQUksTUFBTUEsQ0FBQTtVQUNuRCxDQUFDLEVBQUVpSixJQUFBLENBQUssRUFBRTtRQUNaLEdBQUd0SixDQUFBLENBQUVuQyxDQUFBLEdBQUksVUFBU3NDLENBQUEsRUFBR0UsQ0FBQSxFQUFHO1VBQ3RCLE9BQU9GLENBQUEsSUFBSyxhQUFhQSxDQUFBLEdBQUksQ0FBQyxDQUFDLE1BQU1BLENBQUEsRUFBRyxFQUFFLENBQUM7VUFDM0MsU0FBU0ssQ0FBQSxHQUFJLENBQUMsR0FBR0UsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSSxLQUFLNUIsTUFBQSxFQUFRNEIsQ0FBQSxJQUFLO1lBQzVDLElBQUlpRixDQUFBLEdBQUksS0FBS2pGLENBQUEsRUFBRztZQUNoQixPQUFPaUYsQ0FBQSxJQUFLLGFBQWFuRixDQUFBLENBQUVtRixDQUFBLElBQUs7VUFDbEM7VUFDQSxLQUFLakYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSVAsQ0FBQSxDQUFFckIsTUFBQSxFQUFRNEIsQ0FBQSxJQUFLO1lBQzdCLElBQUkrYyxDQUFBLEdBQUl0ZCxDQUFBLENBQUVPLENBQUE7WUFDVixPQUFPK2MsQ0FBQSxDQUFFLE1BQU0sWUFBWWpkLENBQUEsQ0FBRWlkLENBQUEsQ0FBRSxRQUFRcGQsQ0FBQSxJQUFLLENBQUNvZCxDQUFBLENBQUUsS0FBS0EsQ0FBQSxDQUFFLEtBQUtwZCxDQUFBLEdBQUlBLENBQUEsS0FBTW9kLENBQUEsQ0FBRSxLQUFLLE1BQU1BLENBQUEsQ0FBRSxLQUFLLFlBQVlwZCxDQUFBLEdBQUksTUFBTUwsQ0FBQSxDQUFFeUQsSUFBQSxDQUFLZ2EsQ0FBQztVQUN6SDtRQUNGLEdBQUd6ZCxDQUFBO01BQ0w7SUFDRixHQUFHLFVBQVM3RCxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsRUFBRztNQUNuQixJQUFJbUMsQ0FBQTtRQUFHRyxDQUFBO1FBQUdFLENBQUEsR0FBSSxDQUFDO1FBQUdHLENBQUEsSUFBS1IsQ0FBQSxHQUFJLFNBQUFBLENBQUEsRUFBVztVQUNwQyxPQUFPeEQsTUFBQSxJQUFVWCxRQUFBLElBQVlBLFFBQUEsQ0FBUzZuQixHQUFBLElBQU8sQ0FBQ2xuQixNQUFBLENBQU9tbkIsSUFBQTtRQUN2RCxHQUFHLFlBQVc7VUFDWixPQUFPeGpCLENBQUEsS0FBTSxXQUFXQSxDQUFBLEdBQUlILENBQUEsQ0FBRXhDLEtBQUEsQ0FBTSxNQUFNRixTQUFTLElBQUk2QyxDQUFBO1FBQ3pEO1FBQUlPLENBQUEsR0FBSSxVQUFTa2pCLENBQUEsRUFBRztVQUNsQixJQUFJcEIsQ0FBQSxHQUFJLENBQUM7VUFDVCxPQUFPLFVBQVNxQixDQUFBLEVBQUc7WUFDakIsSUFBSSxPQUFPQSxDQUFBLElBQUssWUFDZCxPQUFPQSxDQUFBLENBQUU7WUFDWCxJQUFJckIsQ0FBQSxDQUFFcUIsQ0FBQSxNQUFPLFFBQVE7Y0FDbkIsSUFBSS9QLENBQUEsR0FBSyxVQUFTZ1EsQ0FBQSxFQUFHO2dCQUNuQixPQUFPam9CLFFBQUEsQ0FBU29OLGFBQUEsQ0FBYzZhLENBQUM7Y0FDakMsRUFBRzdtQixJQUFBLENBQUssTUFBTTRtQixDQUFDO2NBQ2YsSUFBSXJuQixNQUFBLENBQU91bkIsaUJBQUEsSUFBcUJqUSxDQUFBLFlBQWF0WCxNQUFBLENBQU91bkIsaUJBQUEsRUFDbEQsSUFBSTtnQkFDRmpRLENBQUEsR0FBSUEsQ0FBQSxDQUFFa1EsZUFBQSxDQUFnQjluQixJQUFBO2NBQ3hCLFFBQUU7Z0JBQ0E0WCxDQUFBLEdBQUk7Y0FDTjtjQUNGME8sQ0FBQSxDQUFFcUIsQ0FBQSxJQUFLL1AsQ0FBQTtZQUNUO1lBQ0EsT0FBTzBPLENBQUEsQ0FBRXFCLENBQUE7VUFDWDtRQUNGLEVBQUU7UUFBR2xlLENBQUEsR0FBSTtRQUFNOFgsQ0FBQSxHQUFJO1FBQUdyRSxDQUFBLEdBQUksRUFBQztRQUFHQyxDQUFBLEdBQUl4YixDQUFBLENBQUUsQ0FBQztNQUNyQyxTQUFTeWIsRUFBRXNLLENBQUEsRUFBR3BCLENBQUEsRUFBRztRQUNmLFNBQVNxQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJRCxDQUFBLENBQUU5a0IsTUFBQSxFQUFRK2tCLENBQUEsSUFBSztVQUNqQyxJQUFJL1AsQ0FBQSxHQUFJOFAsQ0FBQSxDQUFFQyxDQUFBO1lBQUlDLENBQUEsR0FBSXpqQixDQUFBLENBQUV5VCxDQUFBLENBQUVyRSxFQUFBO1VBQ3RCLElBQUlxVSxDQUFBLEVBQUc7WUFDTEEsQ0FBQSxDQUFFRyxJQUFBO1lBQ0YsU0FBU0MsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUosQ0FBQSxDQUFFSyxLQUFBLENBQU1ybEIsTUFBQSxFQUFRb2xCLENBQUEsSUFDbENKLENBQUEsQ0FBRUssS0FBQSxDQUFNRCxDQUFBLEVBQUdwUSxDQUFBLENBQUVxUSxLQUFBLENBQU1ELENBQUEsQ0FBRTtZQUN2QixPQUFPQSxDQUFBLEdBQUlwUSxDQUFBLENBQUVxUSxLQUFBLENBQU1ybEIsTUFBQSxFQUFRb2xCLENBQUEsSUFDekJKLENBQUEsQ0FBRUssS0FBQSxDQUFNMWdCLElBQUEsQ0FBSzJnQixDQUFBLENBQUV0USxDQUFBLENBQUVxUSxLQUFBLENBQU1ELENBQUEsR0FBSTFCLENBQUMsQ0FBQztVQUNqQyxPQUFPO1lBQ0wsSUFBSTZCLENBQUEsR0FBSSxFQUFDO1lBQ1QsS0FBS0gsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXBRLENBQUEsQ0FBRXFRLEtBQUEsQ0FBTXJsQixNQUFBLEVBQVFvbEIsQ0FBQSxJQUM5QkcsQ0FBQSxDQUFFNWdCLElBQUEsQ0FBSzJnQixDQUFBLENBQUV0USxDQUFBLENBQUVxUSxLQUFBLENBQU1ELENBQUEsR0FBSTFCLENBQUMsQ0FBQztZQUN6Qm5pQixDQUFBLENBQUV5VCxDQUFBLENBQUVyRSxFQUFBLElBQU07Y0FBRUEsRUFBQSxFQUFJcUUsQ0FBQSxDQUFFckUsRUFBQTtjQUFJd1UsSUFBQSxFQUFNO2NBQUdFLEtBQUEsRUFBT0U7WUFBRTtVQUMxQztRQUNGO01BQ0Y7TUFDQSxTQUFTOUssRUFBRXFLLENBQUEsRUFBR3BCLENBQUEsRUFBRztRQUNmLFNBQVNxQixDQUFBLEdBQUksRUFBQyxFQUFHL1AsQ0FBQSxHQUFJLENBQUMsR0FBR2dRLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlGLENBQUEsQ0FBRTlrQixNQUFBLEVBQVFnbEIsQ0FBQSxJQUFLO1VBQ2pELElBQUlJLENBQUEsR0FBSU4sQ0FBQSxDQUFFRSxDQUFBO1lBQUlPLENBQUEsR0FBSTdCLENBQUEsQ0FBRThCLElBQUEsR0FBT0osQ0FBQSxDQUFFLEtBQUsxQixDQUFBLENBQUU4QixJQUFBLEdBQU9KLENBQUEsQ0FBRTtZQUFJSyxDQUFBLEdBQUk7Y0FBRUMsR0FBQSxFQUFLTixDQUFBLENBQUU7Y0FBSU8sS0FBQSxFQUFPUCxDQUFBLENBQUU7Y0FBSVEsU0FBQSxFQUFXUixDQUFBLENBQUU7WUFBRztVQUMvRnBRLENBQUEsQ0FBRXVRLENBQUEsSUFBS3ZRLENBQUEsQ0FBRXVRLENBQUEsRUFBR0YsS0FBQSxDQUFNMWdCLElBQUEsQ0FBSzhnQixDQUFDLElBQUlWLENBQUEsQ0FBRXBnQixJQUFBLENBQUtxUSxDQUFBLENBQUV1USxDQUFBLElBQUs7WUFBRTVVLEVBQUEsRUFBSTRVLENBQUE7WUFBR0YsS0FBQSxFQUFPLENBQUNJLENBQUM7VUFBRSxDQUFDO1FBQ2pFO1FBQ0EsT0FBT1YsQ0FBQTtNQUNUO01BQ0EsU0FBU2MsRUFBRWYsQ0FBQSxFQUFHcEIsQ0FBQSxFQUFHO1FBQ2YsSUFBSXFCLENBQUEsR0FBSW5qQixDQUFBLENBQUVrakIsQ0FBQSxDQUFFVixVQUFVO1FBQ3RCLElBQUksQ0FBQ1csQ0FBQSxFQUNILE1BQU0sSUFBSWhWLEtBQUEsQ0FBTSw2R0FBNkc7UUFDL0gsSUFBSWlGLENBQUEsR0FBSXNGLENBQUEsQ0FBRUEsQ0FBQSxDQUFFdGEsTUFBQSxHQUFTO1FBQ3JCLElBQUk4a0IsQ0FBQSxDQUFFZ0IsUUFBQSxLQUFhLE9BQ2pCOVEsQ0FBQSxHQUFJQSxDQUFBLENBQUUrUSxXQUFBLEdBQWNoQixDQUFBLENBQUVua0IsWUFBQSxDQUFhOGlCLENBQUEsRUFBRzFPLENBQUEsQ0FBRStRLFdBQVcsSUFBSWhCLENBQUEsQ0FBRTduQixXQUFBLENBQVl3bUIsQ0FBQyxJQUFJcUIsQ0FBQSxDQUFFbmtCLFlBQUEsQ0FBYThpQixDQUFBLEVBQUdxQixDQUFBLENBQUVsa0IsVUFBVSxHQUFHeVosQ0FBQSxDQUFFM1YsSUFBQSxDQUFLK2UsQ0FBQyxXQUM1R29CLENBQUEsQ0FBRWdCLFFBQUEsS0FBYSxVQUN0QmYsQ0FBQSxDQUFFN25CLFdBQUEsQ0FBWXdtQixDQUFDLE9BQ1o7VUFDSCxJQUFJLE9BQU9vQixDQUFBLENBQUVnQixRQUFBLElBQVksWUFBWSxDQUFDaEIsQ0FBQSxDQUFFZ0IsUUFBQSxDQUFTRSxNQUFBLEVBQy9DLE1BQU0sSUFBSWpXLEtBQUEsQ0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FLM0I7VUFDUyxJQUFJaVYsQ0FBQSxHQUFJcGpCLENBQUEsQ0FBRWtqQixDQUFBLENBQUVWLFVBQUEsR0FBYSxNQUFNVSxDQUFBLENBQUVnQixRQUFBLENBQVNFLE1BQU07VUFDaERqQixDQUFBLENBQUVua0IsWUFBQSxDQUFhOGlCLENBQUEsRUFBR3NCLENBQUM7UUFDckI7TUFDRjtNQUNBLFNBQVN0SyxFQUFFb0ssQ0FBQSxFQUFHO1FBQ1osSUFBSUEsQ0FBQSxDQUFFeGtCLFVBQUEsS0FBZSxNQUNuQixPQUFPO1FBQ1R3a0IsQ0FBQSxDQUFFeGtCLFVBQUEsQ0FBVzRKLFdBQUEsQ0FBWTRhLENBQUM7UUFDMUIsSUFBSXBCLENBQUEsR0FBSXBKLENBQUEsQ0FBRS9TLE9BQUEsQ0FBUXVkLENBQUM7UUFDbkJwQixDQUFBLElBQUssS0FBS3BKLENBQUEsQ0FBRWxLLE1BQUEsQ0FBT3NULENBQUEsRUFBRyxDQUFDO01BQ3pCO01BQ0EsU0FBU3VDLEVBQUVuQixDQUFBLEVBQUc7UUFDWixJQUFJcEIsQ0FBQSxHQUFJM21CLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE9BQU87UUFDdEMsT0FBTzZuQixDQUFBLENBQUVvQixLQUFBLENBQU01YSxJQUFBLEtBQVMsV0FBV3daLENBQUEsQ0FBRW9CLEtBQUEsQ0FBTTVhLElBQUEsR0FBTyxhQUFhNmEsQ0FBQSxDQUFFekMsQ0FBQSxFQUFHb0IsQ0FBQSxDQUFFb0IsS0FBSyxHQUFHTCxDQUFBLENBQUVmLENBQUEsRUFBR3BCLENBQUMsR0FBR0EsQ0FBQTtNQUN6RjtNQUNBLFNBQVN5QyxFQUFFckIsQ0FBQSxFQUFHcEIsQ0FBQSxFQUFHO1FBQ2YxbEIsTUFBQSxDQUFPYSxJQUFBLENBQUs2a0IsQ0FBQyxFQUFFNWtCLE9BQUEsQ0FBUSxVQUFTaW1CLENBQUEsRUFBRztVQUNqQ0QsQ0FBQSxDQUFFdkgsWUFBQSxDQUFhd0gsQ0FBQSxFQUFHckIsQ0FBQSxDQUFFcUIsQ0FBQSxDQUFFO1FBQ3hCLENBQUM7TUFDSDtNQUNBLFNBQVNPLEVBQUVSLENBQUEsRUFBR3BCLENBQUEsRUFBRztRQUNmLElBQUlxQixDQUFBLEVBQUcvUCxDQUFBLEVBQUdnUSxDQUFBLEVBQUdJLENBQUE7UUFDYixJQUFJMUIsQ0FBQSxDQUFFUyxTQUFBLElBQWFXLENBQUEsQ0FBRVksR0FBQSxFQUFLO1VBQ3hCLElBQUksRUFBRU4sQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFUyxTQUFBLENBQVVXLENBQUEsQ0FBRVksR0FBRyxJQUN6QixPQUFPLFlBQVcsQ0FDbEI7VUFDRlosQ0FBQSxDQUFFWSxHQUFBLEdBQU1OLENBQUE7UUFDVjtRQUNBLElBQUkxQixDQUFBLENBQUUwQyxTQUFBLEVBQVc7VUFDZixJQUFJYixDQUFBLEdBQUk1RyxDQUFBO1VBQ1JvRyxDQUFBLEdBQUlsZSxDQUFBLEtBQU1BLENBQUEsR0FBSW9mLENBQUEsQ0FBRXZDLENBQUMsSUFBSTFPLENBQUEsR0FBSXFSLEVBQUEsQ0FBR3RoQixJQUFBLENBQUssTUFBTWdnQixDQUFBLEVBQUdRLENBQUEsRUFBRyxLQUFFLEdBQUdQLENBQUEsR0FBSXFCLEVBQUEsQ0FBR3RoQixJQUFBLENBQUssTUFBTWdnQixDQUFBLEVBQUdRLENBQUEsRUFBRyxJQUFFO1FBQzlFLE9BQ0VULENBQUEsQ0FBRWMsU0FBQSxJQUFhLE9BQU85ZCxHQUFBLElBQU8sY0FBYyxPQUFPQSxHQUFBLENBQUl3ZSxlQUFBLElBQW1CLGNBQWMsT0FBT3hlLEdBQUEsQ0FBSXllLGVBQUEsSUFBbUIsY0FBYyxPQUFPQyxJQUFBLElBQVEsY0FBYyxPQUFPbEMsSUFBQSxJQUFRLGNBQWNTLENBQUEsR0FBSSxVQUFTVSxDQUFBLEVBQUc7VUFDM00sSUFBSWdCLENBQUEsR0FBSTFwQixRQUFBLENBQVNFLGFBQUEsQ0FBYyxNQUFNO1VBQ3JDLE9BQU93b0IsQ0FBQSxDQUFFUyxLQUFBLENBQU01YSxJQUFBLEtBQVMsV0FBV21hLENBQUEsQ0FBRVMsS0FBQSxDQUFNNWEsSUFBQSxHQUFPLGFBQWFtYSxDQUFBLENBQUVTLEtBQUEsQ0FBTVEsR0FBQSxHQUFNLGNBQWNQLENBQUEsQ0FBRU0sQ0FBQSxFQUFHaEIsQ0FBQSxDQUFFUyxLQUFLLEdBQUdMLENBQUEsQ0FBRUosQ0FBQSxFQUFHZ0IsQ0FBQyxHQUFHQSxDQUFBO1FBQ3JILEVBQUUvQyxDQUFDLEdBQUcxTyxDQUFBLEdBQUssVUFBU3lRLENBQUEsRUFBR2dCLENBQUEsRUFBR0UsRUFBQSxFQUFJO1VBQzVCLElBQUlDLEVBQUEsR0FBS0QsRUFBQSxDQUFHakIsR0FBQTtZQUFLbUIsRUFBQSxHQUFLRixFQUFBLENBQUdmLFNBQUE7WUFBV2tCLEVBQUEsR0FBS0wsQ0FBQSxDQUFFTSxxQkFBQSxLQUEwQixVQUFVRixFQUFBO1VBQy9FLENBQUNKLENBQUEsQ0FBRU0scUJBQUEsSUFBeUJELEVBQUEsTUFBUUYsRUFBQSxHQUFLck0sQ0FBQSxDQUFFcU0sRUFBRSxJQUFJQyxFQUFBLEtBQU9ELEVBQUEsSUFBTTtBQUFBLHNEQUNwQnRDLElBQUEsQ0FBS0MsUUFBQSxDQUFTQyxrQkFBQSxDQUFtQnBiLElBQUEsQ0FBS0MsU0FBQSxDQUFVd2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1VBQ25HLElBQUlHLEVBQUEsR0FBSyxJQUFJUixJQUFBLENBQUssQ0FBQ0ksRUFBRSxHQUFHO2NBQUV0YixJQUFBLEVBQU07WUFBVyxDQUFDO1lBQUcyYixFQUFBLEdBQUt4QixDQUFBLENBQUUxZCxJQUFBO1VBQ3REMGQsQ0FBQSxDQUFFMWQsSUFBQSxHQUFPRCxHQUFBLENBQUl3ZSxlQUFBLENBQWdCVSxFQUFFLEdBQUdDLEVBQUEsSUFBTW5mLEdBQUEsQ0FBSXllLGVBQUEsQ0FBZ0JVLEVBQUU7UUFDaEUsRUFBR2xpQixJQUFBLENBQUssTUFBTWdnQixDQUFBLEVBQUdyQixDQUFDLEdBQUdzQixDQUFBLEdBQUksU0FBQUEsQ0FBQSxFQUFXO1VBQ2xDdEssQ0FBQSxDQUFFcUssQ0FBQyxHQUFHQSxDQUFBLENBQUVoZCxJQUFBLElBQVFELEdBQUEsQ0FBSXllLGVBQUEsQ0FBZ0J4QixDQUFBLENBQUVoZCxJQUFJO1FBQzVDLE1BQU1nZCxDQUFBLEdBQUlrQixDQUFBLENBQUV2QyxDQUFDLEdBQUcxTyxDQUFBLEdBQUssVUFBU3lRLENBQUEsRUFBR2dCLENBQUEsRUFBRztVQUNsQyxJQUFJRSxFQUFBLEdBQUtGLENBQUEsQ0FBRWYsR0FBQTtZQUFLa0IsRUFBQSxHQUFLSCxDQUFBLENBQUVkLEtBQUE7VUFDdkIsSUFBSWlCLEVBQUEsSUFBTW5CLENBQUEsQ0FBRWxJLFlBQUEsQ0FBYSxTQUFTcUosRUFBRSxHQUFHbkIsQ0FBQSxDQUFFeUIsVUFBQSxFQUN2Q3pCLENBQUEsQ0FBRXlCLFVBQUEsQ0FBV0MsT0FBQSxHQUFVUixFQUFBLE1BQ3BCO1lBQ0gsT0FBT2xCLENBQUEsQ0FBRTVrQixVQUFBLEdBQ1A0a0IsQ0FBQSxDQUFFdmIsV0FBQSxDQUFZdWIsQ0FBQSxDQUFFNWtCLFVBQVU7WUFDNUI0a0IsQ0FBQSxDQUFFdm9CLFdBQUEsQ0FBWUgsUUFBQSxDQUFTSSxjQUFBLENBQWV3cEIsRUFBRSxDQUFDO1VBQzNDO1FBQ0YsRUFBRzVoQixJQUFBLENBQUssTUFBTWdnQixDQUFDLEdBQUdDLENBQUEsR0FBSSxTQUFBQSxDQUFBLEVBQVc7VUFDL0J0SyxDQUFBLENBQUVxSyxDQUFDO1FBQ0w7UUFDRixPQUFPL1AsQ0FBQSxDQUFFOFAsQ0FBQyxHQUFHLFVBQVNXLENBQUEsRUFBRztVQUN2QixJQUFJQSxDQUFBLEVBQUc7WUFDTCxJQUFJQSxDQUFBLENBQUVDLEdBQUEsS0FBUVosQ0FBQSxDQUFFWSxHQUFBLElBQU9ELENBQUEsQ0FBRUUsS0FBQSxLQUFVYixDQUFBLENBQUVhLEtBQUEsSUFBU0YsQ0FBQSxDQUFFRyxTQUFBLEtBQWNkLENBQUEsQ0FBRWMsU0FBQSxFQUM5RDtZQUNGNVEsQ0FBQSxDQUFFOFAsQ0FBQSxHQUFJVyxDQUFDO1VBQ1QsT0FDRVQsQ0FBQSxDQUFFO1FBQ047TUFDRjtNQUNBM25CLENBQUEsQ0FBRVIsT0FBQSxHQUFVLFVBQVNpb0IsQ0FBQSxFQUFHcEIsQ0FBQSxFQUFHO1FBQ3pCLElBQUksT0FBTzBELEtBQUEsR0FBUSxPQUFPQSxLQUFBLElBQVMsT0FBT3JxQixRQUFBLElBQVksVUFDcEQsTUFBTSxJQUFJZ1QsS0FBQSxDQUFNLDhEQUE4RDtRQUNoRixDQUFDMlQsQ0FBQSxHQUFJQSxDQUFBLElBQUssQ0FBQyxHQUFHd0MsS0FBQSxHQUFRLE9BQU94QyxDQUFBLENBQUV3QyxLQUFBLElBQVMsV0FBV3hDLENBQUEsQ0FBRXdDLEtBQUEsR0FBUSxDQUFDLEdBQUd4QyxDQUFBLENBQUUwQyxTQUFBLElBQWEsT0FBTzFDLENBQUEsQ0FBRTBDLFNBQUEsSUFBYSxjQUFjMUMsQ0FBQSxDQUFFMEMsU0FBQSxHQUFZMWtCLENBQUEsQ0FBRSxJQUFJZ2lCLENBQUEsQ0FBRVUsVUFBQSxLQUFlVixDQUFBLENBQUVVLFVBQUEsR0FBYSxTQUFTVixDQUFBLENBQUVvQyxRQUFBLEtBQWFwQyxDQUFBLENBQUVvQyxRQUFBLEdBQVc7UUFDN00sSUFBSWYsQ0FBQSxHQUFJdEssQ0FBQSxDQUFFcUssQ0FBQSxFQUFHcEIsQ0FBQztRQUNkLE9BQU9sSixDQUFBLENBQUV1SyxDQUFBLEVBQUdyQixDQUFDLEdBQUcsVUFBUzFPLENBQUEsRUFBRztVQUMxQixTQUFTZ1EsQ0FBQSxHQUFJLEVBQUMsRUFBR0ksQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSUwsQ0FBQSxDQUFFL2tCLE1BQUEsRUFBUW9sQixDQUFBLElBQUs7WUFDekMsSUFBSUcsQ0FBQSxHQUFJUixDQUFBLENBQUVLLENBQUE7WUFDVixDQUFDSyxDQUFBLEdBQUlsa0IsQ0FBQSxDQUFFZ2tCLENBQUEsQ0FBRTVVLEVBQUEsR0FBS3dVLElBQUEsSUFBUUgsQ0FBQSxDQUFFcmdCLElBQUEsQ0FBSzhnQixDQUFDO1VBQ2hDO1VBQ0EsS0FBS3pRLENBQUEsSUFBS3dGLENBQUEsQ0FBRUMsQ0FBQSxDQUFFekYsQ0FBQSxFQUFHME8sQ0FBQyxHQUFHQSxDQUFDLEdBQUcwQixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJSixDQUFBLENBQUVobEIsTUFBQSxFQUFRb2xCLENBQUEsSUFBSztZQUNqRCxJQUFJSyxDQUFBO1lBQ0osS0FBS0EsQ0FBQSxHQUFJVCxDQUFBLENBQUVJLENBQUEsR0FBSUQsSUFBQSxLQUFTLEdBQUc7Y0FDekIsU0FBU3NCLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUloQixDQUFBLENBQUVKLEtBQUEsQ0FBTXJsQixNQUFBLEVBQVF5bUIsQ0FBQSxJQUNsQ2hCLENBQUEsQ0FBRUosS0FBQSxDQUFNb0IsQ0FBQSxFQUFHO2NBQ2IsT0FBT2xsQixDQUFBLENBQUVra0IsQ0FBQSxDQUFFOVUsRUFBQTtZQUNiO1VBQ0Y7UUFDRjtNQUNGO01BQ0EsSUFBSTBXLENBQUE7UUFBR0MsQ0FBQSxJQUFLRCxDQUFBLEdBQUksRUFBQyxFQUFHLFVBQVN2QyxDQUFBLEVBQUdwQixDQUFBLEVBQUc7VUFDakMsT0FBTzJELENBQUEsQ0FBRXZDLENBQUEsSUFBS3BCLENBQUEsRUFBRzJELENBQUEsQ0FBRTFkLE1BQUEsQ0FBT2lWLE9BQU8sRUFBRXBVLElBQUEsQ0FBSztBQUFBLENBQy9DO1FBQ0s7TUFDQSxTQUFTNmIsR0FBR3ZCLENBQUEsRUFBR3BCLENBQUEsRUFBR3FCLENBQUEsRUFBRy9QLENBQUEsRUFBRztRQUN0QixJQUFJZ1EsQ0FBQSxHQUFJRCxDQUFBLEdBQUksS0FBSy9QLENBQUEsQ0FBRTBRLEdBQUE7UUFDbkIsSUFBSVosQ0FBQSxDQUFFb0MsVUFBQSxFQUNKcEMsQ0FBQSxDQUFFb0MsVUFBQSxDQUFXQyxPQUFBLEdBQVVHLENBQUEsQ0FBRTVELENBQUEsRUFBR3NCLENBQUMsT0FDMUI7VUFDSCxJQUFJSSxDQUFBLEdBQUlyb0IsUUFBQSxDQUFTSSxjQUFBLENBQWU2bkIsQ0FBQztZQUFHTyxDQUFBLEdBQUlULENBQUEsQ0FBRW5aLFVBQUE7VUFDMUM0WixDQUFBLENBQUU3QixDQUFBLEtBQU1vQixDQUFBLENBQUU1YSxXQUFBLENBQVlxYixDQUFBLENBQUU3QixDQUFBLENBQUUsR0FBRzZCLENBQUEsQ0FBRXZsQixNQUFBLEdBQVM4a0IsQ0FBQSxDQUFFbGtCLFlBQUEsQ0FBYXdrQixDQUFBLEVBQUdHLENBQUEsQ0FBRTdCLENBQUEsQ0FBRSxJQUFJb0IsQ0FBQSxDQUFFNW5CLFdBQUEsQ0FBWWtvQixDQUFDO1FBQ25GO01BQ0Y7SUFDRixHQUFHLFVBQVMvbkIsQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO01BQ2hCaEIsQ0FBQSxDQUFFUixPQUFBLEdBQVUsVUFBU2tDLENBQUEsRUFBRztRQUN0QixJQUFJbUMsQ0FBQSxHQUFJLE9BQU94RCxNQUFBLEdBQVMsT0FBT0EsTUFBQSxDQUFPdUssUUFBQTtRQUN0QyxJQUFJLENBQUMvRyxDQUFBLEVBQ0gsTUFBTSxJQUFJNk8sS0FBQSxDQUFNLGtDQUFrQztRQUNwRCxJQUFJLENBQUNoUixDQUFBLElBQUssT0FBT0EsQ0FBQSxJQUFLLFVBQ3BCLE9BQU9BLENBQUE7UUFDVCxJQUFJc0MsQ0FBQSxHQUFJSCxDQUFBLENBQUVnSCxRQUFBLEdBQVcsT0FBT2hILENBQUEsQ0FBRXFtQixJQUFBO1VBQU1obUIsQ0FBQSxHQUFJRixDQUFBLEdBQUlILENBQUEsQ0FBRXNtQixRQUFBLENBQVM1ZixPQUFBLENBQVEsYUFBYSxHQUFHO1FBQy9FLE9BQU83SSxDQUFBLENBQUU2SSxPQUFBLENBQVEsdURBQXVELFVBQVNsRyxDQUFBLEVBQUdFLENBQUEsRUFBRztVQUNyRixJQUFJaUYsQ0FBQTtZQUFHOFgsQ0FBQSxHQUFJL2MsQ0FBQSxDQUFFNmxCLElBQUEsQ0FBSyxFQUFFN2YsT0FBQSxDQUFRLFlBQVksVUFBUzBTLENBQUEsRUFBR0MsQ0FBQSxFQUFHO2NBQ3JELE9BQU9BLENBQUE7WUFDVCxDQUFDLEVBQUUzUyxPQUFBLENBQVEsWUFBWSxVQUFTMFMsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7Y0FDcEMsT0FBT0EsQ0FBQTtZQUNULENBQUM7VUFDRCxPQUFPLG9EQUFvRDlULElBQUEsQ0FBS2tZLENBQUMsSUFBSWpkLENBQUEsSUFBS21GLENBQUEsR0FBSThYLENBQUEsQ0FBRXBYLE9BQUEsQ0FBUSxJQUFJLE1BQU0sSUFBSW9YLENBQUEsR0FBSUEsQ0FBQSxDQUFFcFgsT0FBQSxDQUFRLEdBQUcsTUFBTSxJQUFJbEcsQ0FBQSxHQUFJc2QsQ0FBQSxHQUFJcGQsQ0FBQSxHQUFJb2QsQ0FBQSxDQUFFL1csT0FBQSxDQUFRLFNBQVMsRUFBRSxHQUFHLFNBQVN3QixJQUFBLENBQUtDLFNBQUEsQ0FBVXhDLENBQUMsSUFBSTtRQUNwTSxDQUFDO01BQ0g7SUFDRixHQUFHLFVBQVN4SixDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsRUFBRztNQUNuQixJQUFJbUMsQ0FBQSxFQUFHRyxDQUFBLEVBQUdFLENBQUEsRUFBR0csQ0FBQSxFQUFHRSxDQUFBLEVBQUdpRixDQUFBLEVBQUc4WCxDQUFBLEVBQUdyRSxDQUFBLEVBQUdDLENBQUE7TUFDNUJsZCxDQUFBLENBQUVSLE9BQUEsSUFBV3FFLENBQUEsR0FBSSxnQkFBZ0JHLENBQUEsR0FBSSxjQUFjRSxDQUFBLEdBQUkscUJBQXFCRyxDQUFBLEdBQUksK0JBQStCRSxDQUFBLEdBQUksOEJBQThCaUYsQ0FBQSxHQUFJLHFCQUFxQjhYLENBQUEsR0FBSSxzQkFBc0JyRSxDQUFBLEdBQUksNEJBQTRCO1FBQUUySixLQUFBLEVBQU8xSixDQUFBLEdBQUksU0FBQUEsQ0FBU0MsQ0FBQSxFQUFHO1VBQzNQLElBQUlDLENBQUEsR0FBSTFkLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLEtBQUs7WUFBRzRvQixDQUFBLEdBQUk5b0IsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztZQUFHeWQsQ0FBQSxHQUFJRixDQUFBLENBQUUrQixPQUFBO1lBQVMwSixDQUFBLEdBQUl6TCxDQUFBLENBQUVrTixLQUFBO1VBQy9GLE9BQU9qTixDQUFBLENBQUU3USxTQUFBLENBQVVDLEdBQUEsQ0FBSXhJLENBQUMsR0FBRzRrQixDQUFBLElBQUt4TCxDQUFBLENBQUU3USxTQUFBLENBQVVDLEdBQUEsQ0FBSXhJLENBQUEsR0FBSSxPQUFPNGtCLENBQUMsR0FBR3hMLENBQUEsQ0FBRTFPLFNBQUEsR0FBWTJPLENBQUEsRUFBR21MLENBQUEsQ0FBRWpjLFNBQUEsQ0FBVUMsR0FBQSxDQUFJdEksQ0FBQyxHQUFHc2tCLENBQUEsQ0FBRWpVLGdCQUFBLENBQWlCLFNBQVM2SSxDQUFBLENBQUV2SCxNQUFBLENBQU9uTyxJQUFBLENBQUswVixDQUFDLENBQUMsR0FBR0EsQ0FBQSxDQUFFdmQsV0FBQSxDQUFZMm9CLENBQUMsR0FBR3BMLENBQUE7UUFDdks7UUFBR3NKLE9BQUEsRUFBUyxTQUFBQSxDQUFTdkosQ0FBQSxFQUFHO1VBQ3RCLElBQUlDLENBQUEsR0FBSUYsQ0FBQSxDQUFFQyxDQUFDO1lBQUdxTCxDQUFBLEdBQUk5b0IsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztZQUFHeWQsQ0FBQSxHQUFJM2QsUUFBQSxDQUFTRSxhQUFBLENBQWMsUUFBUTtZQUFHZ3BCLENBQUEsR0FBSWxwQixRQUFBLENBQVNFLGFBQUEsQ0FBYyxRQUFRO1lBQUdrcEIsQ0FBQSxHQUFJMUwsQ0FBQSxDQUFFdFEsYUFBQSxDQUFjLE1BQU01SSxDQUFDO1lBQUcrakIsQ0FBQSxHQUFJOUssQ0FBQSxDQUFFbU4sYUFBQTtZQUFlTixDQUFBLEdBQUk3TSxDQUFBLENBQUVvTixTQUFBO1VBQ3RMLE9BQU8vQixDQUFBLENBQUVqYyxTQUFBLENBQVVDLEdBQUEsQ0FBSXlRLENBQUMsR0FBR0ksQ0FBQSxDQUFFM08sU0FBQSxHQUFZeU8sQ0FBQSxDQUFFcU4sTUFBQSxJQUFVLFdBQVc1QixDQUFBLENBQUVsYSxTQUFBLEdBQVl5TyxDQUFBLENBQUVzTixVQUFBLElBQWMsVUFBVXBOLENBQUEsQ0FBRTlRLFNBQUEsQ0FBVUMsR0FBQSxDQUFJOFUsQ0FBQyxHQUFHc0gsQ0FBQSxDQUFFcmMsU0FBQSxDQUFVQyxHQUFBLENBQUk4VSxDQUFDLEdBQUdqRSxDQUFBLENBQUU5USxTQUFBLENBQVVDLEdBQUEsQ0FBSW5JLENBQUMsR0FBR3VrQixDQUFBLENBQUVyYyxTQUFBLENBQVVDLEdBQUEsQ0FBSWpJLENBQUMsR0FBRzBqQixDQUFBLElBQUssT0FBT0EsQ0FBQSxJQUFLLGVBQWVXLENBQUEsQ0FBRXJVLGdCQUFBLENBQWlCLFNBQVMwVCxDQUFDLEdBQUdhLENBQUEsQ0FBRXZVLGdCQUFBLENBQWlCLFNBQVMwVCxDQUFDLElBQUkrQixDQUFBLElBQUssT0FBT0EsQ0FBQSxJQUFLLGNBQWMzTSxDQUFBLENBQUU5SSxnQkFBQSxDQUFpQixTQUFTeVYsQ0FBQyxHQUFHM00sQ0FBQSxDQUFFOUksZ0JBQUEsQ0FBaUIsU0FBUzZJLENBQUEsQ0FBRXZILE1BQUEsQ0FBT25PLElBQUEsQ0FBSzBWLENBQUMsQ0FBQyxHQUFHd0wsQ0FBQSxDQUFFclUsZ0JBQUEsQ0FBaUIsU0FBUzZJLENBQUEsQ0FBRXZILE1BQUEsQ0FBT25PLElBQUEsQ0FBSzBWLENBQUMsQ0FBQyxHQUFHb0wsQ0FBQSxDQUFFM29CLFdBQUEsQ0FBWXdkLENBQUMsR0FBR21MLENBQUEsQ0FBRTNvQixXQUFBLENBQVkrb0IsQ0FBQyxHQUFHeEwsQ0FBQSxDQUFFdmQsV0FBQSxDQUFZMm9CLENBQUMsR0FBR3BMLENBQUE7UUFDOWU7UUFBR3VKLE1BQUEsRUFBUSxTQUFBQSxDQUFTeEosQ0FBQSxFQUFHO1VBQ3JCLElBQUlDLENBQUEsR0FBSUYsQ0FBQSxDQUFFQyxDQUFDO1lBQUdxTCxDQUFBLEdBQUk5b0IsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztZQUFHeWQsQ0FBQSxHQUFJM2QsUUFBQSxDQUFTRSxhQUFBLENBQWMsUUFBUTtZQUFHZ3BCLENBQUEsR0FBSWxwQixRQUFBLENBQVNFLGFBQUEsQ0FBYyxPQUFPO1lBQUdrcEIsQ0FBQSxHQUFJMUwsQ0FBQSxDQUFFdFEsYUFBQSxDQUFjLE1BQU01SSxDQUFDO1lBQUcrakIsQ0FBQSxHQUFJOUssQ0FBQSxDQUFFbU4sYUFBQTtZQUFlTixDQUFBLEdBQUk3TSxDQUFBLENBQUVvTixTQUFBO1VBQ3JMLE9BQU8vQixDQUFBLENBQUVqYyxTQUFBLENBQVVDLEdBQUEsQ0FBSXlRLENBQUMsR0FBR0ksQ0FBQSxDQUFFM08sU0FBQSxHQUFZeU8sQ0FBQSxDQUFFcU4sTUFBQSxJQUFVLE1BQU1uTixDQUFBLENBQUU5USxTQUFBLENBQVVDLEdBQUEsQ0FBSThVLENBQUMsR0FBR2pFLENBQUEsQ0FBRTlRLFNBQUEsQ0FBVUMsR0FBQSxDQUFJbkksQ0FBQyxHQUFHdWtCLENBQUEsQ0FBRXJjLFNBQUEsQ0FBVUMsR0FBQSxDQUFJaEQsQ0FBQyxHQUFHMlQsQ0FBQSxDQUFFdU4sV0FBQSxJQUFlOUIsQ0FBQSxDQUFFMUksWUFBQSxDQUFhLGVBQWUvQyxDQUFBLENBQUV1TixXQUFXLEdBQUd2TixDQUFBLENBQUU5ZCxPQUFBLEtBQVl1cEIsQ0FBQSxDQUFFcm5CLEtBQUEsR0FBUTRiLENBQUEsQ0FBRTlkLE9BQUEsR0FBVThkLENBQUEsQ0FBRXdOLFNBQUEsS0FBYy9CLENBQUEsQ0FBRTNhLElBQUEsR0FBT2tQLENBQUEsQ0FBRXdOLFNBQUEsR0FBWTFDLENBQUEsSUFBSyxPQUFPQSxDQUFBLElBQUssY0FBY2EsQ0FBQSxDQUFFdlUsZ0JBQUEsQ0FBaUIsU0FBUzBULENBQUMsR0FBRytCLENBQUEsSUFBSyxPQUFPQSxDQUFBLElBQUssY0FBYzNNLENBQUEsQ0FBRTlJLGdCQUFBLENBQWlCLFNBQVMsWUFBVztZQUNwWXlWLENBQUEsQ0FBRXBCLENBQUEsQ0FBRXJuQixLQUFLO1VBQ1gsQ0FBQyxHQUFHOGIsQ0FBQSxDQUFFOUksZ0JBQUEsQ0FBaUIsU0FBUzZJLENBQUEsQ0FBRXZILE1BQUEsQ0FBT25PLElBQUEsQ0FBSzBWLENBQUMsQ0FBQyxHQUFHb0wsQ0FBQSxDQUFFM29CLFdBQUEsQ0FBWStvQixDQUFDLEdBQUdKLENBQUEsQ0FBRTNvQixXQUFBLENBQVl3ZCxDQUFDLEdBQUdELENBQUEsQ0FBRXZkLFdBQUEsQ0FBWTJvQixDQUFDLEdBQUdwTCxDQUFBO1FBQzNHO1FBQUdxSixVQUFBLEVBQVksU0FBQUEsQ0FBQSxFQUFXO1VBQ3hCLElBQUl0SixDQUFBLEdBQUl6ZCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxLQUFLO1VBQ3BDLE9BQU91ZCxDQUFBLENBQUU1USxTQUFBLENBQVVDLEdBQUEsQ0FBSTNJLENBQUMsR0FBR3NaLENBQUE7UUFDN0I7TUFBRTtJQUNKLENBQUMsQ0FBQztFQUNKLENBQUM7QUFDSCxHQUFHaUosRUFBRTtBQUNMLElBQUl3RSxFQUFBLEdBQUt4RSxFQUFBLENBQUc1bUIsT0FBQTtBQUNaLElBQU1xckIsRUFBQSxHQUFxQixlQUFBcnFCLEVBQUEsQ0FBR29xQixFQUFFO0FBQ2hDLElBQU1FLEVBQUEsR0FBTixNQUFTO0VBTVB0RSxLQUFLN21CLENBQUEsRUFBRztJQUNOa3JCLEVBQUEsQ0FBR3JFLElBQUEsQ0FBSzdtQixDQUFDO0VBQ1g7QUFDRjtBQUNBLElBQU1vckIsRUFBQSxHQUFOLGNBQWlCaFcsQ0FBQSxDQUFFO0VBTWpCM1QsWUFBWTtJQUFFbVMsTUFBQSxFQUFRNVQsQ0FBQTtJQUFHcVYsZ0JBQUEsRUFBa0JoVjtFQUFFLEdBQUc7SUFDOUMsTUFBTTtNQUNKdVQsTUFBQSxFQUFRNVQsQ0FBQTtNQUNScVYsZ0JBQUEsRUFBa0JoVjtJQUNwQixDQUFDLEdBQUcsS0FBS2dsQixRQUFBLEdBQVcsSUFBSThGLEVBQUEsQ0FBRztFQUM3QjtFQUlBLElBQUlsSixRQUFBLEVBQVU7SUFDWixPQUFPO01BQ0w0RSxJQUFBLEVBQU83bUIsQ0FBQSxJQUFNLEtBQUs2bUIsSUFBQSxDQUFLN21CLENBQUM7SUFDMUI7RUFDRjtFQU1BNm1CLEtBQUs3bUIsQ0FBQSxFQUFHO0lBQ04sT0FBTyxLQUFLcWxCLFFBQUEsQ0FBU3dCLElBQUEsQ0FBSzdtQixDQUFDO0VBQzdCO0FBQ0Y7QUFDQSxJQUFNcXJCLEVBQUEsR0FBTixjQUFpQmpXLENBQUEsQ0FBRTtFQUlqQixJQUFJNk0sUUFBQSxFQUFVO0lBQ1osTUFBTWppQixDQUFBLEdBQUlBLENBQUEsS0FBTSxLQUFLc3JCLFNBQUE7SUFDckIsT0FBTztNQUNMaE0sTUFBQSxFQUFTamYsQ0FBQSxJQUFNLEtBQUtpZixNQUFBLENBQU9qZixDQUFDO01BQzVCLElBQUlpckIsVUFBQSxFQUFZO1FBQ2QsT0FBT3RyQixDQUFBLENBQUU7TUFDWDtJQUNGO0VBQ0Y7RUFPQXNmLE9BQU90ZixDQUFBLEVBQUc7SUFDUixPQUFPLEtBQUsrVixNQUFBLENBQU93VixRQUFBLENBQVNqTSxNQUFBLENBQU90ZixDQUFDO0VBQ3RDO0VBSUEsSUFBSXNyQixVQUFBLEVBQVk7SUFDZCxPQUFPLEtBQUt2VixNQUFBLENBQU93VixRQUFBLENBQVNELFNBQUE7RUFDOUI7QUFDRjtBQUNBLElBQUlFLEVBQUEsR0FBSztFQUFFM3JCLE9BQUEsRUFBUyxDQUFDO0FBQUU7QUFBQSxDQUN0QixVQUFTaUIsQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDZCxDQUFDLFVBQVNLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNkUCxDQUFBLENBQUVqQixPQUFBLEdBQVV3QixDQUFBLENBQUU7RUFDaEIsR0FBR2IsRUFBQSxFQUFJLFlBQVc7SUFDaEIsU0FBU0gsRUFBRXNoQixDQUFBLEVBQUc7TUFDWixJQUFJckUsQ0FBQSxHQUFJcUUsQ0FBQSxDQUFFOEosSUFBQTtRQUFNbE8sQ0FBQSxHQUFJdmMsTUFBQSxDQUFPYSxJQUFBLENBQUt5YixDQUFDO1FBQUdFLENBQUEsR0FBSUQsQ0FBQSxDQUFFaFEsR0FBQSxDQUFJLFVBQVNrUSxDQUFBLEVBQUc7VUFDeEQsT0FBTyxPQUFPSCxDQUFBLENBQUVHLENBQUE7UUFDbEIsQ0FBQyxFQUFFcE8sS0FBQSxDQUFNLFVBQVNvTyxDQUFBLEVBQUc7VUFDbkIsT0FBT0EsQ0FBQSxLQUFNLFlBQVlBLENBQUEsS0FBTSxhQUFhQSxDQUFBLEtBQU07UUFDcEQsQ0FBQztNQUNELElBQUksQ0FBQ0QsQ0FBQSxFQUNILE1BQU0sSUFBSXpLLEtBQUEsQ0FBTSwrQkFBK0I7TUFDakQsS0FBS2EsTUFBQSxHQUFTK04sQ0FBQTtJQUNoQjtJQUNBLElBQUl0Z0IsQ0FBQSxHQUFJLENBQUMsS0FBSyxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUs7SUFDaEYsU0FBU1UsRUFBRTRmLENBQUEsRUFBRztNQUNaLE9BQU90Z0IsQ0FBQSxDQUFFa0osT0FBQSxDQUFRb1gsQ0FBQSxDQUFFK0osUUFBUSxNQUFNO0lBQ25DO0lBQ0EsSUFBSXhuQixDQUFBLEdBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssUUFBUTtJQUNuRSxTQUFTRyxFQUFFc2QsQ0FBQSxFQUFHO01BQ1osT0FBT3pkLENBQUEsQ0FBRXFHLE9BQUEsQ0FBUW9YLENBQUEsQ0FBRStKLFFBQVEsTUFBTTtJQUNuQztJQUNBcnJCLENBQUEsQ0FBRVksU0FBQSxDQUFVMHFCLEtBQUEsR0FBUSxVQUFTaEssQ0FBQSxFQUFHO01BQzlCLE1BQU1yRSxDQUFBLEdBQUl2ZCxRQUFBLENBQVM2ckIsY0FBQSxDQUFlQyxrQkFBQSxDQUFtQjtRQUFHdE8sQ0FBQSxHQUFJRCxDQUFBLENBQUVyZCxhQUFBLENBQWMsS0FBSztNQUNqRixPQUFPc2QsQ0FBQSxDQUFFeE8sU0FBQSxHQUFZNFMsQ0FBQSxFQUFHLEtBQUttSyxTQUFBLENBQVV4TyxDQUFBLEVBQUdDLENBQUMsR0FBR0EsQ0FBQSxDQUFFeE8sU0FBQTtJQUNsRCxHQUFHMU8sQ0FBQSxDQUFFWSxTQUFBLENBQVU2cUIsU0FBQSxHQUFZLFVBQVNuSyxDQUFBLEVBQUdyRSxDQUFBLEVBQUc7TUFDeEMsSUFBSUMsQ0FBQSxHQUFJaFosQ0FBQSxDQUFFb2QsQ0FBQSxFQUFHckUsQ0FBQztRQUFHRSxDQUFBLEdBQUlELENBQUEsQ0FBRTFaLFVBQUEsQ0FBVztNQUNsQyxJQUFJMlosQ0FBQSxFQUNGLEdBQUc7UUFDRCxJQUFJQSxDQUFBLENBQUUxUCxRQUFBLEtBQWFuSyxJQUFBLENBQUt1TCxTQUFBLEVBQ3RCLElBQUlzTyxDQUFBLENBQUUxVSxJQUFBLENBQUsyaEIsSUFBQSxDQUFLLE1BQU0sT0FBT2pOLENBQUEsQ0FBRXVPLHNCQUFBLElBQTBCaHFCLENBQUEsQ0FBRXliLENBQUEsQ0FBRXVPLHNCQUFzQixLQUFLdk8sQ0FBQSxDQUFFd08sa0JBQUEsSUFBc0JqcUIsQ0FBQSxDQUFFeWIsQ0FBQSxDQUFFd08sa0JBQWtCLElBQUk7VUFDeEkxTyxDQUFBLENBQUVwUSxXQUFBLENBQVlzUSxDQUFDLEdBQUcsS0FBS3NPLFNBQUEsQ0FBVW5LLENBQUEsRUFBR3JFLENBQUM7VUFDckM7UUFDRixPQUNFO1FBQ0osSUFBSUUsQ0FBQSxDQUFFMVAsUUFBQSxLQUFhbkssSUFBQSxDQUFLc29CLFlBQUEsRUFBYztVQUNwQzNPLENBQUEsQ0FBRXBRLFdBQUEsQ0FBWXNRLENBQUMsR0FBRyxLQUFLc08sU0FBQSxDQUFVbkssQ0FBQSxFQUFHckUsQ0FBQztVQUNyQztRQUNGO1FBQ0EsSUFBSUcsQ0FBQSxHQUFJcFosQ0FBQSxDQUFFbVosQ0FBQztVQUFHcUwsQ0FBQTtRQUNkcEwsQ0FBQSxLQUFNb0wsQ0FBQSxHQUFJcGxCLEtBQUEsQ0FBTXhDLFNBQUEsQ0FBVXFaLElBQUEsQ0FBS25aLElBQUEsQ0FBS3FjLENBQUEsQ0FBRTdPLFVBQUEsRUFBWTVNLENBQUM7UUFDbkQsSUFBSTJiLENBQUEsR0FBSSxDQUFDLENBQUNKLENBQUEsQ0FBRWhhLFVBQUE7VUFBWTJsQixDQUFBLEdBQUlsbkIsQ0FBQSxDQUFFdWIsQ0FBQyxLQUFLdmIsQ0FBQSxDQUFFeWIsQ0FBQyxLQUFLRSxDQUFBO1VBQUd5TCxDQUFBLEdBQUkzTCxDQUFBLENBQUVrTyxRQUFBLENBQVN2akIsV0FBQSxDQUFZO1VBQUdtZ0IsQ0FBQSxHQUFJNWpCLENBQUEsQ0FBRSxLQUFLa1AsTUFBQSxFQUFRdVYsQ0FBQSxFQUFHM0wsQ0FBQztVQUFHNk0sQ0FBQSxHQUFJNU0sQ0FBQSxJQUFLb0wsQ0FBQTtRQUNoSCxJQUFJd0IsQ0FBQSxJQUFLemxCLENBQUEsQ0FBRTRZLENBQUEsRUFBRzhLLENBQUMsS0FBSyxDQUFDLEtBQUsxVSxNQUFBLENBQU9zWSx1QkFBQSxJQUEyQmpELENBQUEsRUFBRztVQUM3RCxJQUFJLEVBQUV6TCxDQUFBLENBQUVrTyxRQUFBLEtBQWEsWUFBWWxPLENBQUEsQ0FBRWtPLFFBQUEsS0FBYSxVQUM5QyxPQUFPbE8sQ0FBQSxDQUFFN08sVUFBQSxDQUFXM0wsTUFBQSxHQUFTLElBQzNCc2EsQ0FBQSxDQUFFMVosWUFBQSxDQUFhNFosQ0FBQSxDQUFFN08sVUFBQSxDQUFXLElBQUk2TyxDQUFDO1VBQ3JDRixDQUFBLENBQUVwUSxXQUFBLENBQVlzUSxDQUFDLEdBQUcsS0FBS3NPLFNBQUEsQ0FBVW5LLENBQUEsRUFBR3JFLENBQUM7VUFDckM7UUFDRjtRQUNBLFNBQVNnTixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJOU0sQ0FBQSxDQUFFMk8sVUFBQSxDQUFXbnBCLE1BQUEsRUFBUXNuQixDQUFBLElBQUssR0FBRztVQUMvQyxJQUFJakIsRUFBQSxHQUFLN0wsQ0FBQSxDQUFFMk8sVUFBQSxDQUFXN0IsQ0FBQTtVQUN0QnpnQixDQUFBLENBQUV3ZixFQUFBLEVBQUlmLENBQUEsRUFBRzlLLENBQUMsTUFBTUEsQ0FBQSxDQUFFNE8sZUFBQSxDQUFnQi9DLEVBQUEsQ0FBR2hnQixJQUFJLEdBQUdpaEIsQ0FBQSxHQUFJQSxDQUFBLEdBQUk7UUFDdEQ7UUFDQSxLQUFLd0IsU0FBQSxDQUFVbkssQ0FBQSxFQUFHbkUsQ0FBQztNQUNyQixTQUFTQSxDQUFBLEdBQUlELENBQUEsQ0FBRXdMLFdBQUEsQ0FBWTtJQUMvQjtJQUNBLFNBQVN4a0IsRUFBRW9kLENBQUEsRUFBR3JFLENBQUEsRUFBRztNQUNmLE9BQU9xRSxDQUFBLENBQUUwSyxnQkFBQSxDQUNQL08sQ0FBQSxFQUNBZ1AsVUFBQSxDQUFXQyxTQUFBLEdBQVlELFVBQUEsQ0FBV0UsWUFBQSxHQUFlRixVQUFBLENBQVdHLFlBQUEsRUFDNUQsTUFDQSxLQUNGO0lBQ0Y7SUFDQSxTQUFTL25CLEVBQUVpZCxDQUFBLEVBQUdyRSxDQUFBLEVBQUdDLENBQUEsRUFBRztNQUNsQixPQUFPLE9BQU9vRSxDQUFBLENBQUU4SixJQUFBLENBQUtuTyxDQUFBLEtBQU0sYUFBYXFFLENBQUEsQ0FBRThKLElBQUEsQ0FBS25PLENBQUEsRUFBR0MsQ0FBQyxJQUFJb0UsQ0FBQSxDQUFFOEosSUFBQSxDQUFLbk8sQ0FBQTtJQUNoRTtJQUNBLFNBQVMxWSxFQUFFK2MsQ0FBQSxFQUFHckUsQ0FBQSxFQUFHO01BQ2YsT0FBTyxPQUFPQSxDQUFBLEdBQUksTUFBTSxPQUFLLE9BQU9BLENBQUEsSUFBSyxZQUFZLENBQUNBLENBQUEsR0FBSTtJQUM1RDtJQUNBLFNBQVN6VCxFQUFFOFgsQ0FBQSxFQUFHckUsQ0FBQSxFQUFHQyxDQUFBLEVBQUc7TUFDbEIsSUFBSUMsQ0FBQSxHQUFJbUUsQ0FBQSxDQUFFdFksSUFBQSxDQUFLbEIsV0FBQSxDQUFZO01BQzNCLE9BQU9tVixDQUFBLEtBQU0sT0FBSyxRQUFLLE9BQU9BLENBQUEsQ0FBRUUsQ0FBQSxLQUFNLGFBQWEsQ0FBQ0YsQ0FBQSxDQUFFRSxDQUFBLEVBQUdtRSxDQUFBLENBQUUvZixLQUFBLEVBQU8yYixDQUFDLElBQUksT0FBT0QsQ0FBQSxDQUFFRSxDQUFBLElBQUssT0FBT0YsQ0FBQSxDQUFFRSxDQUFBLE1BQU8sUUFBSyxPQUFLLE9BQU9GLENBQUEsQ0FBRUUsQ0FBQSxLQUFNLFdBQVdGLENBQUEsQ0FBRUUsQ0FBQSxNQUFPbUUsQ0FBQSxDQUFFL2YsS0FBQSxHQUFRO0lBQzlKO0lBQ0EsT0FBT3ZCLENBQUE7RUFDVCxDQUFDO0FBQ0gsR0FBR21yQixFQUFFO0FBQ0wsSUFBSWtCLEVBQUEsR0FBS2xCLEVBQUEsQ0FBRzNyQixPQUFBO0FBQ1osSUFBTThzQixFQUFBLEdBQXFCLGVBQUE5ckIsRUFBQSxDQUFHNnJCLEVBQUU7QUFDaEMsU0FBU0UsR0FBRzlyQixDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixPQUFPYyxDQUFBLENBQUV5TSxHQUFBLENBQUtsTixDQUFBLElBQU07SUFDbEIsTUFBTWdCLENBQUEsR0FBSStHLENBQUEsQ0FBRXBJLENBQUMsSUFBSUEsQ0FBQSxDQUFFSyxDQUFBLENBQUUwYSxJQUFJLElBQUkvYSxDQUFBO0lBQzdCLE9BQU8wSSxDQUFBLENBQUVySCxDQUFDLE1BQU1oQixDQUFBLENBQUV5SSxJQUFBLEdBQU8rakIsRUFBQSxDQUFHeHNCLENBQUEsQ0FBRXlJLElBQUEsRUFBTXpILENBQUMsSUFBSWhCLENBQUE7RUFDM0MsQ0FBQztBQUNIO0FBQ0EsU0FBU3lzQixFQUFFaHNCLENBQUEsRUFBR2QsQ0FBQSxHQUFJLENBQUMsR0FBRztFQUNwQixNQUFNSyxDQUFBLEdBQUk7SUFDUm9yQixJQUFBLEVBQU16ckI7RUFDUjtFQUNBLE9BQU8sSUFBSTJzQixFQUFBLENBQUd0c0IsQ0FBQyxFQUFFc3JCLEtBQUEsQ0FBTTdxQixDQUFDO0FBQzFCO0FBQ0EsU0FBUytyQixHQUFHL3JCLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCLE9BQU95RCxLQUFBLENBQU1DLE9BQUEsQ0FBUTVDLENBQUMsSUFBSWlzQixFQUFBLENBQUdqc0IsQ0FBQSxFQUFHZCxDQUFDLElBQUlxSSxDQUFBLENBQUV2SCxDQUFDLElBQUlrc0IsRUFBQSxDQUFHbHNCLENBQUEsRUFBR2QsQ0FBQyxJQUFJc0ksRUFBQSxDQUFHeEgsQ0FBQyxJQUFJbXNCLEVBQUEsQ0FBR25zQixDQUFBLEVBQUdkLENBQUMsSUFBSWMsQ0FBQTtBQUM1RTtBQUNBLFNBQVNpc0IsR0FBR2pzQixDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixPQUFPYyxDQUFBLENBQUV5TSxHQUFBLENBQUtsTixDQUFBLElBQU13c0IsRUFBQSxDQUFHeHNCLENBQUEsRUFBR0wsQ0FBQyxDQUFDO0FBQzlCO0FBQ0EsU0FBU2d0QixHQUFHbHNCLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCLE1BQU1LLENBQUEsR0FBSSxDQUFDO0VBQ1gsV0FBV2dCLENBQUEsSUFBS1AsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ0UsTUFBQSxDQUFPQyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLTCxDQUFBLEVBQUdPLENBQUMsR0FDNUM7SUFDRixNQUFNVSxDQUFBLEdBQUlqQixDQUFBLENBQUVPLENBQUE7TUFBSTZDLENBQUEsR0FBSWdwQixFQUFBLENBQUdsdEIsQ0FBQSxDQUFFcUIsQ0FBQSxDQUFFLElBQUlyQixDQUFBLENBQUVxQixDQUFBLElBQUtyQixDQUFBO0lBQ3RDSyxDQUFBLENBQUVnQixDQUFBLElBQUt3ckIsRUFBQSxDQUFHOXFCLENBQUEsRUFBR21DLENBQUM7RUFDaEI7RUFDQSxPQUFPN0QsQ0FBQTtBQUNUO0FBQ0EsU0FBUzRzQixHQUFHbnNCLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCLE9BQU9xSSxDQUFBLENBQUVySSxDQUFDLElBQUk4c0IsQ0FBQSxDQUFFaHNCLENBQUEsRUFBR2QsQ0FBQyxJQUFJQSxDQUFBLEtBQU0sUUFBSzhzQixDQUFBLENBQUVoc0IsQ0FBQSxFQUFHLENBQUMsQ0FBQyxJQUFJQSxDQUFBO0FBQ2hEO0FBQ0EsU0FBU29zQixHQUFHcHNCLENBQUEsRUFBRztFQUNiLE9BQU91SCxDQUFBLENBQUV2SCxDQUFDLEtBQUt5SCxFQUFBLENBQUd6SCxDQUFDLEtBQUtzSCxDQUFBLENBQUV0SCxDQUFDO0FBQzdCO0FBQ0EsSUFBTXFzQixFQUFBLEdBQU4sY0FBaUIvWCxDQUFBLENBQUU7RUFNakIsSUFBSTZNLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTDBKLEtBQUEsRUFBT0EsQ0FBQzNyQixDQUFBLEVBQUdLLENBQUEsS0FBTSxLQUFLc3JCLEtBQUEsQ0FBTTNyQixDQUFBLEVBQUdLLENBQUM7SUFDbEM7RUFDRjtFQVFBc3JCLE1BQU0zckIsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDVixPQUFPeXNCLENBQUEsQ0FBRTlzQixDQUFBLEVBQUdLLENBQUM7RUFDZjtBQUNGO0FBQ0EsSUFBTStzQixFQUFBLEdBQU4sY0FBaUJoWSxDQUFBLENBQUU7RUFNakIsSUFBSTZNLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTGhPLElBQUEsRUFBTUEsQ0FBQSxLQUFNLEtBQUtBLElBQUEsQ0FBSztJQUN4QjtFQUNGO0VBTUFBLEtBQUEsRUFBTztJQUNMLE1BQU1qVSxDQUFBLEdBQUk7SUFDVixPQUFPLEtBQUsrVixNQUFBLENBQU93VixRQUFBLENBQVNELFNBQUEsSUFBYXRqQixDQUFBLENBQUVoSSxDQUFBLEVBQUcsTUFBTSxHQUFHK0ksT0FBQSxDQUFRc2tCLE1BQUEsQ0FBTyxJQUFJdGEsS0FBQSxDQUFNL1MsQ0FBQyxDQUFDLEtBQUssS0FBSytWLE1BQUEsQ0FBT3VYLEtBQUEsQ0FBTXJaLElBQUEsQ0FBSztFQUNoSDtBQUNGO0FBQ0EsSUFBTXNaLEVBQUEsR0FBTixjQUFpQm5ZLENBQUEsQ0FBRTtFQUNqQjNULFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUtnc0IsY0FBQSxHQUFpQixJQUFJbFgsQ0FBQSxDQUFFO0VBQ25EO0VBTUEsSUFBSTJMLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTGpJLGFBQUEsRUFBZUEsQ0FBQ2hhLENBQUEsRUFBR0ssQ0FBQSxLQUFNLEtBQUsyWixhQUFBLENBQWNoYSxDQUFBLEVBQUdLLENBQUM7TUFDaEQ0WixXQUFBLEVBQWNqYSxDQUFBLElBQU0sS0FBS2lhLFdBQUEsQ0FBWWphLENBQUM7TUFDdENpVSxJQUFBLEVBQU1BLENBQUEsS0FBTSxLQUFLdVosY0FBQSxDQUFldlosSUFBQSxDQUFLO01BQ3JDMkYsT0FBQSxFQUFTQSxDQUFBLEtBQU0sS0FBSzRULGNBQUEsQ0FBZTVULE9BQUEsQ0FBUTtNQUMzQ0QsaUJBQUEsRUFBbUJBLENBQUEsS0FBTSxLQUFLNlQsY0FBQSxDQUFlN1QsaUJBQUEsQ0FBa0I7TUFDL0RGLG9CQUFBLEVBQXNCQSxDQUFBLEtBQU0sS0FBSytULGNBQUEsQ0FBZS9ULG9CQUFBLENBQXFCO0lBQ3ZFO0VBQ0Y7RUFRQU8sY0FBY2hhLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ2xCLE9BQU8sS0FBS210QixjQUFBLENBQWV4VCxhQUFBLENBQWNoYSxDQUFBLEVBQUdLLENBQUM7RUFDL0M7RUFNQTRaLFlBQVlqYSxDQUFBLEVBQUc7SUFDYixLQUFLd3RCLGNBQUEsQ0FBZXZULFdBQUEsQ0FBWWphLENBQUM7RUFDbkM7QUFDRjtBQUNBLElBQU15dEIsRUFBQSxHQUFOLGNBQWlCclksQ0FBQSxDQUFFO0VBSWpCLElBQUk2TSxRQUFBLEVBQVU7SUFDWixPQUFPO01BQ0x5TCxhQUFBLEVBQWVBLENBQUEsS0FBTWpxQixLQUFBLENBQU1vTCxJQUFBLENBQUssS0FBS2tILE1BQUEsQ0FBT3FMLEtBQUEsQ0FBTUMsVUFBQSxDQUFXdEIsTUFBQSxDQUFPLENBQUM7SUFDdkU7RUFDRjtBQUNGO0FBQ0EsSUFBTTROLEVBQUEsR0FBTixjQUFpQnZZLENBQUEsQ0FBRTtFQUlqQixJQUFJMFEsUUFBQSxFQUFVO0lBQ1osT0FBTztNQUlMOEgsS0FBQSxFQUFPO01BSVBDLGdCQUFBLEVBQWtCO01BQ2xCQyxzQkFBQSxFQUF3QjtNQUl4QkMsS0FBQSxFQUFPO01BQ1BDLE1BQUEsRUFBUTtNQUNSQyxNQUFBLEVBQVE7TUFJUkMsY0FBQSxFQUFnQjtNQUNoQkMsb0JBQUEsRUFBc0I7SUFDeEI7RUFDRjtBQUNGO0FBQ0EsSUFBTUMsRUFBQSxHQUFOLGNBQWlCaFosQ0FBQSxDQUFFO0VBTWpCLElBQUk2TSxRQUFBLEVBQVU7SUFDWixPQUFPO01BQ0xxQixLQUFBLEVBQU9BLENBQUEsS0FBTSxLQUFLQSxLQUFBLENBQU07TUFDeEJoWSxJQUFBLEVBQU1BLENBQUEsS0FBTSxLQUFLQSxJQUFBLENBQUs7TUFDdEIraUIsbUJBQUEsRUFBc0JydUIsQ0FBQSxJQUFNLEtBQUtxdUIsbUJBQUEsQ0FBb0JydUIsQ0FBQztNQUN0RHN1QixhQUFBLEVBQWdCdHVCLENBQUEsSUFBTSxLQUFLc3VCLGFBQUEsQ0FBY3R1QixDQUFDO0lBQzVDO0VBQ0Y7RUFJQXNMLEtBQUEsRUFBTztJQUNMLEtBQUt5SyxNQUFBLENBQU9zTixPQUFBLENBQVFrTCxXQUFBLENBQVk7RUFDbEM7RUFJQWpMLE1BQUEsRUFBUTtJQUNOLEtBQUt2TixNQUFBLENBQU9zTixPQUFBLENBQVFDLEtBQUEsQ0FBTTtFQUM1QjtFQU1BK0ssb0JBQW9CcnVCLENBQUEsRUFBRztJQUNyQixJQUFJLEtBQUsrVixNQUFBLENBQU9pTCxZQUFBLENBQWE2QixpQkFBQSxLQUFzQixJQUFJO01BQ3JEN2EsQ0FBQSxDQUFFLGtFQUFrRSxNQUFNO01BQzFFO0lBQ0Y7SUFDQWhJLENBQUEsSUFBSyxDQUFDLEtBQUsrVixNQUFBLENBQU95WSxhQUFBLENBQWNDLE1BQUEsSUFBVSxLQUFLMVksTUFBQSxDQUFPc04sT0FBQSxDQUFRa0wsV0FBQSxDQUFZLEdBQUcsS0FBS3hZLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBY2xqQixJQUFBLENBQUssS0FBSyxLQUFLeUssTUFBQSxDQUFPeVksYUFBQSxDQUFjbEwsS0FBQSxDQUFNO0VBQ25KO0VBTUFnTCxjQUFjdHVCLENBQUEsRUFBRztJQUNmLElBQUksS0FBSytWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYTZCLGlCQUFBLEtBQXNCLElBQUk7TUFDckQ3YSxDQUFBLENBQUUsa0VBQWtFLE1BQU07TUFDMUU7SUFDRjtJQUNBaEksQ0FBQSxJQUFLLENBQUMsS0FBSytWLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUWxTLE9BQUEsQ0FBUXNkLE1BQUEsSUFBVSxLQUFLMVksTUFBQSxDQUFPc04sT0FBQSxDQUFRa0wsV0FBQSxDQUFZLEdBQUcsS0FBS3hZLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUWxTLE9BQUEsQ0FBUTdGLElBQUEsQ0FBSyxLQUFLLEtBQUt5SyxNQUFBLENBQU9zTixPQUFBLENBQVFsUyxPQUFBLENBQVFtUyxLQUFBLENBQU07RUFDeko7QUFDRjtBQUNBLElBQUlvTCxFQUFBLEdBQUs7RUFBRTd1QixPQUFBLEVBQVMsQ0FBQztBQUFFO0FBQUEsQ0FXdEIsVUFBU2lCLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2QsQ0FBQyxVQUFTSyxDQUFBLEVBQUdnQixDQUFBLEVBQUc7SUFDZFAsQ0FBQSxDQUFFakIsT0FBQSxHQUFVd0IsQ0FBQSxDQUFFO0VBQ2hCLEdBQUdYLE1BQUEsRUFBUSxZQUFXO0lBQ3BCLE9BQU8sVUFBU0wsQ0FBQSxFQUFHO01BQ2pCLElBQUlnQixDQUFBLEdBQUksQ0FBQztNQUNULFNBQVNVLEVBQUVtQyxDQUFBLEVBQUc7UUFDWixJQUFJN0MsQ0FBQSxDQUFFNkMsQ0FBQSxHQUNKLE9BQU83QyxDQUFBLENBQUU2QyxDQUFBLEVBQUdyRSxPQUFBO1FBQ2QsSUFBSXdFLENBQUEsR0FBSWhELENBQUEsQ0FBRTZDLENBQUEsSUFBSztVQUFFbkMsQ0FBQSxFQUFHbUMsQ0FBQTtVQUFHUSxDQUFBLEVBQUc7VUFBSTdFLE9BQUEsRUFBUyxDQUFDO1FBQUU7UUFDMUMsT0FBT1EsQ0FBQSxDQUFFNkQsQ0FBQSxFQUFHL0MsSUFBQSxDQUFLa0QsQ0FBQSxDQUFFeEUsT0FBQSxFQUFTd0UsQ0FBQSxFQUFHQSxDQUFBLENBQUV4RSxPQUFBLEVBQVNrQyxDQUFDLEdBQUdzQyxDQUFBLENBQUVLLENBQUEsR0FBSSxNQUFJTCxDQUFBLENBQUV4RSxPQUFBO01BQzVEO01BQ0EsT0FBT2tDLENBQUEsQ0FBRTJrQixDQUFBLEdBQUlybUIsQ0FBQSxFQUFHMEIsQ0FBQSxDQUFFNkMsQ0FBQSxHQUFJdkQsQ0FBQSxFQUFHVSxDQUFBLENBQUV1SyxDQUFBLEdBQUksVUFBU3BJLENBQUEsRUFBR0csQ0FBQSxFQUFHRSxDQUFBLEVBQUc7UUFDL0N4QyxDQUFBLENBQUVWLENBQUEsQ0FBRTZDLENBQUEsRUFBR0csQ0FBQyxLQUFLckQsTUFBQSxDQUFPVyxjQUFBLENBQWV1QyxDQUFBLEVBQUdHLENBQUEsRUFBRztVQUFFbkMsVUFBQSxFQUFZO1VBQUlELEdBQUEsRUFBS3NDO1FBQUUsQ0FBQztNQUNyRSxHQUFHeEMsQ0FBQSxDQUFFc0MsQ0FBQSxHQUFJLFVBQVNILENBQUEsRUFBRztRQUNuQixPQUFPeWlCLE1BQUEsR0FBUyxPQUFPQSxNQUFBLENBQU9DLFdBQUEsSUFBZTVsQixNQUFBLENBQU9XLGNBQUEsQ0FBZXVDLENBQUEsRUFBR3lpQixNQUFBLENBQU9DLFdBQUEsRUFBYTtVQUFFaGxCLEtBQUEsRUFBTztRQUFTLENBQUMsR0FBR1osTUFBQSxDQUFPVyxjQUFBLENBQWV1QyxDQUFBLEVBQUcsY0FBYztVQUFFdEMsS0FBQSxFQUFPO1FBQUcsQ0FBQztNQUN0SyxHQUFHRyxDQUFBLENBQUUxQixDQUFBLEdBQUksVUFBUzZELENBQUEsRUFBR0csQ0FBQSxFQUFHO1FBQ3RCLElBQUksSUFBSUEsQ0FBQSxLQUFNSCxDQUFBLEdBQUluQyxDQUFBLENBQUVtQyxDQUFDLElBQUksSUFBSUcsQ0FBQSxJQUFLLElBQUlBLENBQUEsSUFBSyxPQUFPSCxDQUFBLElBQUssWUFBWUEsQ0FBQSxJQUFLQSxDQUFBLENBQUVuRCxVQUFBLEVBQ3hFLE9BQU9tRCxDQUFBO1FBQ1QsSUFBSUssQ0FBQSxHQUFvQixlQUFBdkQsTUFBQSxDQUFPK2MsTUFBQSxDQUFPLElBQUk7UUFDMUMsSUFBSWhjLENBQUEsQ0FBRXNDLENBQUEsQ0FBRUUsQ0FBQyxHQUFHdkQsTUFBQSxDQUFPVyxjQUFBLENBQWU0QyxDQUFBLEVBQUcsV0FBVztVQUFFckMsVUFBQSxFQUFZO1VBQUlOLEtBQUEsRUFBT3NDO1FBQUUsQ0FBQyxHQUFHLElBQUlHLENBQUEsSUFBSyxPQUFPSCxDQUFBLElBQUssVUFDbEcsU0FBU1EsQ0FBQSxJQUFLUixDQUFBLEVBQ1puQyxDQUFBLENBQUV1SyxDQUFBLENBQUUvSCxDQUFBLEVBQUdHLENBQUEsRUFBSSxVQUFTRSxDQUFBLEVBQUc7VUFDckIsT0FBT1YsQ0FBQSxDQUFFVSxDQUFBO1FBQ1gsRUFBR21ELElBQUEsQ0FBSyxNQUFNckQsQ0FBQyxDQUFDO1FBQ3BCLE9BQU9ILENBQUE7TUFDVCxHQUFHeEMsQ0FBQSxDQUFFakIsQ0FBQSxHQUFJLFVBQVNvRCxDQUFBLEVBQUc7UUFDbkIsSUFBSUcsQ0FBQSxHQUFJSCxDQUFBLElBQUtBLENBQUEsQ0FBRW5ELFVBQUEsR0FBYSxZQUFXO1VBQ3JDLE9BQU9tRCxDQUFBLENBQUV4RSxPQUFBO1FBQ1gsSUFBSSxZQUFXO1VBQ2IsT0FBT3dFLENBQUE7UUFDVDtRQUNBLE9BQU9uQyxDQUFBLENBQUV1SyxDQUFBLENBQUVqSSxDQUFBLEVBQUcsS0FBS0EsQ0FBQyxHQUFHQSxDQUFBO01BQ3pCLEdBQUd0QyxDQUFBLENBQUVWLENBQUEsR0FBSSxVQUFTNkMsQ0FBQSxFQUFHRyxDQUFBLEVBQUc7UUFDdEIsT0FBT3JELE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBSytDLENBQUEsRUFBR0csQ0FBQztNQUNsRCxHQUFHdEMsQ0FBQSxDQUFFdWIsQ0FBQSxHQUFJLElBQUl2YixDQUFBLENBQUVBLENBQUEsQ0FBRW1DLENBQUEsR0FBSSxDQUFDO0lBQ3hCLEVBQUUsQ0FBQyxVQUFTN0QsQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHVSxDQUFBLEVBQUc7TUFDbkIxQixDQUFBLENBQUVSLE9BQUEsR0FBVWtDLENBQUEsQ0FBRSxDQUFDO0lBQ2pCLEdBQUcsVUFBUzFCLENBQUEsRUFBR2dCLENBQUEsRUFBR1UsQ0FBQSxFQUFHO01BQ25CQSxDQUFBLENBQUVzQyxDQUFBLENBQUVoRCxDQUFDLEdBQUdVLENBQUEsQ0FBRXVLLENBQUEsQ0FBRWpMLENBQUEsRUFBRyxXQUFXLFlBQVc7UUFDbkMsT0FBTzZDLENBQUE7TUFDVCxDQUFDO01BQ0QsTUFBTUEsQ0FBQSxDQUFFO1FBQ056QyxZQUFBLEVBQWM7VUFDWixLQUFLNlQsS0FBQSxHQUFRO1lBQUUrSSxPQUFBLEVBQVM7WUFBTUUsT0FBQSxFQUFTO1VBQUssR0FBRyxLQUFLb1EsTUFBQSxHQUFTLE9BQUksS0FBS3hxQixTQUFBLEdBQVksSUFBSSxLQUFLSyxVQUFBLEdBQWEsSUFBSSxLQUFLb3FCLFdBQUEsR0FBYyxJQUFJLEtBQUtDLFdBQUEsR0FBYyxHQUFHLEtBQUtDLGtCQUFBLEdBQXFCLE1BQU07WUFDdkwsS0FBS0gsTUFBQSxJQUFVLEtBQUtJLElBQUEsQ0FBSyxJQUFFO1VBQzdCLEdBQUcsS0FBS0MsVUFBQSxDQUFXLEdBQUcsS0FBS0MsT0FBQSxDQUFRLEdBQUd2dUIsTUFBQSxDQUFPa1UsZ0JBQUEsQ0FBaUIsVUFBVSxLQUFLa2Esa0JBQUEsRUFBb0I7WUFBRUksT0FBQSxFQUFTO1VBQUcsQ0FBQztRQUNsSDtRQUNBLElBQUlyWSxJQUFBLEVBQU07VUFDUixPQUFPO1lBQUVvUCxPQUFBLEVBQVM7WUFBTWtKLGNBQUEsRUFBZ0I7WUFBZUMsWUFBQSxFQUFjO1lBQWFDLFNBQUEsRUFBVztjQUFFeGYsSUFBQSxFQUFNO2NBQVlDLE1BQUEsRUFBUTtjQUFjRSxLQUFBLEVBQU87Y0FBYUosR0FBQSxFQUFLO1lBQVU7VUFBRTtRQUM5SztRQUNBaVgsS0FBS3RpQixDQUFBLEVBQUdHLENBQUEsRUFBR0UsQ0FBQSxFQUFHO1VBQ1osS0FBSzBRLEtBQUEsQ0FBTStJLE9BQUEsSUFBVyxLQUFLNFEsT0FBQSxDQUFRLEdBQUcsS0FBS0ssYUFBQSxJQUFpQi9wQixZQUFBLENBQWEsS0FBSytwQixhQUFhO1VBQzNGLE1BQU16bEIsQ0FBQSxHQUFJN0ksTUFBQSxDQUFPb0IsTUFBQSxDQUFPO1lBQUVpdEIsU0FBQSxFQUFXO1lBQVU1ZSxTQUFBLEVBQVc7WUFBRzhlLFVBQUEsRUFBWTtZQUFHQyxXQUFBLEVBQWE7WUFBR0MsWUFBQSxFQUFjO1lBQUdDLEtBQUEsRUFBTztZQUFJYixXQUFBLEVBQWE7VUFBRSxHQUFHanFCLENBQUM7VUFDM0ksSUFBSWlGLENBQUEsQ0FBRWdsQixXQUFBLEtBQWdCLEtBQUtBLFdBQUEsR0FBY2hsQixDQUFBLENBQUVnbEIsV0FBQSxHQUFjLEtBQUt2WixLQUFBLENBQU1pSixPQUFBLENBQVF4UCxTQUFBLEdBQVksSUFBSSxPQUFPckssQ0FBQSxJQUFLLFVBQ3RHLEtBQUs0USxLQUFBLENBQU1pSixPQUFBLENBQVFyZSxXQUFBLENBQVlILFFBQUEsQ0FBU0ksY0FBQSxDQUFldUUsQ0FBQyxDQUFDLE9BQ3REO1lBQ0gsSUFBSSxFQUFFQSxDQUFBLFlBQWFmLElBQUEsR0FDakIsTUFBTW9QLEtBQUEsQ0FBTSwyR0FBcUcsT0FBT3JPLENBQUEsR0FBSSxTQUFTO1lBQ3ZJLEtBQUs0USxLQUFBLENBQU1pSixPQUFBLENBQVFyZSxXQUFBLENBQVl3RSxDQUFDO1VBQ2xDO1VBQ0EsUUFBUSxLQUFLNFEsS0FBQSxDQUFNK0ksT0FBQSxDQUFRelIsU0FBQSxDQUFVc0osTUFBQSxDQUFPLEdBQUdsVixNQUFBLENBQU8rZSxNQUFBLENBQU8sS0FBS2xKLEdBQUEsQ0FBSXdZLFNBQVMsQ0FBQyxHQUFHeGxCLENBQUEsQ0FBRXdsQixTQUFBO1lBQUEsS0FDOUU7Y0FDSCxLQUFLTSxRQUFBLENBQVNwckIsQ0FBQSxFQUFHc0YsQ0FBQztjQUNsQjtZQUFBLEtBQ0c7Y0FDSCxLQUFLK2xCLFNBQUEsQ0FBVXJyQixDQUFBLEVBQUdzRixDQUFDO2NBQ25CO1lBQUEsS0FDRztjQUNILEtBQUtnbUIsVUFBQSxDQUFXdHJCLENBQUEsRUFBR3NGLENBQUM7Y0FDcEI7WUFBQSxLQUNHO1lBQUE7Y0FFSCxLQUFLaW1CLFdBQUEsQ0FBWXZyQixDQUFBLEVBQUdzRixDQUFDO1VBQUE7VUFFekJBLENBQUEsSUFBS0EsQ0FBQSxDQUFFNmxCLEtBQUEsR0FBUSxLQUFLSyxjQUFBLEdBQWlCOXFCLFVBQUEsQ0FBVyxNQUFNO1lBQ3BELEtBQUtxUSxLQUFBLENBQU0rSSxPQUFBLENBQVF6UixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLZ0ssR0FBQSxDQUFJdVksWUFBWSxHQUFHLEtBQUtULE1BQUEsR0FBUztVQUN6RSxHQUFHOWtCLENBQUEsQ0FBRTZsQixLQUFLLEtBQUssS0FBS3BhLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUXpSLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEtBQUtnSyxHQUFBLENBQUl1WSxZQUFZLEdBQUcsS0FBS1QsTUFBQSxHQUFTO1FBQ3hGO1FBQ0FJLEtBQUt4cUIsQ0FBQSxHQUFJLE9BQUk7VUFDWCxJQUFJLEtBQUtzcUIsV0FBQSxJQUFlLENBQUN0cUIsQ0FBQSxFQUN2QixPQUFPLEtBQUsrcUIsYUFBQSxJQUFpQi9wQixZQUFBLENBQWEsS0FBSytwQixhQUFhLEdBQUcsTUFBTSxLQUFLQSxhQUFBLEdBQWdCcnFCLFVBQUEsQ0FBVyxNQUFNO1lBQ3pHLEtBQUs4cEIsSUFBQSxDQUFLLElBQUU7VUFDZCxHQUFHLEtBQUtGLFdBQVc7VUFDckIsS0FBS3ZaLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUXpSLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLVyxHQUFBLENBQUl1WSxZQUFZLEdBQUcsS0FBS1QsTUFBQSxHQUFTLE9BQUksS0FBS29CLGNBQUEsSUFBa0J4cUIsWUFBQSxDQUFhLEtBQUt3cUIsY0FBYztRQUN2STtRQUNBQyxRQUFRenJCLENBQUEsRUFBR0csQ0FBQSxFQUFHRSxDQUFBLEVBQUc7VUFDZkwsQ0FBQSxDQUFFcVEsZ0JBQUEsQ0FBaUIsY0FBYyxNQUFNO1lBQ3JDLEtBQUtpUyxJQUFBLENBQUt0aUIsQ0FBQSxFQUFHRyxDQUFBLEVBQUdFLENBQUM7VUFDbkIsQ0FBQyxHQUFHTCxDQUFBLENBQUVxUSxnQkFBQSxDQUFpQixjQUFjLE1BQU07WUFDekMsS0FBS21hLElBQUEsQ0FBSztVQUNaLENBQUM7UUFDSDtRQUNBdmIsUUFBQSxFQUFVO1VBQ1IsS0FBSzhCLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUW5JLE1BQUEsQ0FBTyxHQUFHeFYsTUFBQSxDQUFPbVUsbUJBQUEsQ0FBb0IsVUFBVSxLQUFLaWEsa0JBQWtCO1FBQzNGO1FBQ0FHLFFBQUEsRUFBVTtVQUNSLEtBQUszWixLQUFBLENBQU0rSSxPQUFBLEdBQVUsS0FBSzNSLElBQUEsQ0FBSyxPQUFPLEtBQUttSyxHQUFBLENBQUlvUCxPQUFPLEdBQUcsS0FBSzNRLEtBQUEsQ0FBTWlKLE9BQUEsR0FBVSxLQUFLN1IsSUFBQSxDQUFLLE9BQU8sS0FBS21LLEdBQUEsQ0FBSXNZLGNBQWMsR0FBRyxLQUFLcGlCLE1BQUEsQ0FBTyxLQUFLdUksS0FBQSxDQUFNK0ksT0FBQSxFQUFTLEtBQUsvSSxLQUFBLENBQU1pSixPQUFPLEdBQUcsS0FBS3hSLE1BQUEsQ0FBT2hOLFFBQUEsQ0FBU3laLElBQUEsRUFBTSxLQUFLbEUsS0FBQSxDQUFNK0ksT0FBTztRQUM3TjtRQUNBMlEsV0FBQSxFQUFhO1VBQ1gsTUFBTXpxQixDQUFBLEdBQUk7VUFDVixJQUFJeEUsUUFBQSxDQUFTcU4sY0FBQSxDQUFlN0ksQ0FBQyxHQUMzQjtVQUNGLE1BQU1HLENBQUEsR0FBSTNDLENBQUEsQ0FBRSxDQUFDO1lBQUc2QyxDQUFBLEdBQUksS0FBSzhILElBQUEsQ0FBSyxTQUFTLE1BQU07Y0FBRThCLFdBQUEsRUFBYTlKLENBQUEsQ0FBRW1CLFFBQUEsQ0FBUztjQUFHOE4sRUFBQSxFQUFJcFA7WUFBRSxDQUFDO1VBQ2pGLEtBQUtoQixPQUFBLENBQVF4RCxRQUFBLENBQVNLLElBQUEsRUFBTXdFLENBQUM7UUFDL0I7UUFDQWtyQixZQUFZdnJCLENBQUEsRUFBR0csQ0FBQSxFQUFHO1VBQ2hCLE1BQU1FLENBQUEsR0FBSUwsQ0FBQSxDQUFFa0wscUJBQUEsQ0FBc0I7WUFBRzVGLENBQUEsR0FBSWpGLENBQUEsQ0FBRWlMLElBQUEsR0FBT3RMLENBQUEsQ0FBRUksV0FBQSxHQUFjLElBQUksS0FBSzJRLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUTRSLFdBQUEsR0FBYztZQUFHdE8sQ0FBQSxHQUFJL2MsQ0FBQSxDQUFFa0wsTUFBQSxHQUFTcFAsTUFBQSxDQUFPaVAsV0FBQSxHQUFjLEtBQUt4TCxTQUFBLEdBQVlPLENBQUEsQ0FBRStMLFNBQUE7VUFDakssS0FBS3lmLGNBQUEsQ0FBZSxVQUFVcm1CLENBQUEsRUFBRzhYLENBQUM7UUFDcEM7UUFDQWdPLFNBQVNwckIsQ0FBQSxFQUFHRyxDQUFBLEVBQUc7VUFDYixNQUFNRSxDQUFBLEdBQUlMLENBQUEsQ0FBRWtMLHFCQUFBLENBQXNCO1lBQUc1RixDQUFBLEdBQUlqRixDQUFBLENBQUVpTCxJQUFBLEdBQU90TCxDQUFBLENBQUVJLFdBQUEsR0FBYyxJQUFJLEtBQUsyUSxLQUFBLENBQU0rSSxPQUFBLENBQVE0UixXQUFBLEdBQWM7WUFBR3RPLENBQUEsR0FBSS9jLENBQUEsQ0FBRWdMLEdBQUEsR0FBTWxQLE1BQUEsQ0FBT2lQLFdBQUEsR0FBYyxLQUFLMkYsS0FBQSxDQUFNK0ksT0FBQSxDQUFRL1osWUFBQSxHQUFlLEtBQUtILFNBQUE7VUFDbEwsS0FBSytyQixjQUFBLENBQWUsT0FBT3JtQixDQUFBLEVBQUc4WCxDQUFDO1FBQ2pDO1FBQ0FpTyxVQUFVcnJCLENBQUEsRUFBR0csQ0FBQSxFQUFHO1VBQ2QsTUFBTUUsQ0FBQSxHQUFJTCxDQUFBLENBQUVrTCxxQkFBQSxDQUFzQjtZQUFHNUYsQ0FBQSxHQUFJakYsQ0FBQSxDQUFFaUwsSUFBQSxHQUFPLEtBQUt5RixLQUFBLENBQU0rSSxPQUFBLENBQVE0UixXQUFBLEdBQWMsS0FBS3pyQixVQUFBLEdBQWFFLENBQUEsQ0FBRTZxQixVQUFBO1lBQVk1TixDQUFBLEdBQUkvYyxDQUFBLENBQUVnTCxHQUFBLEdBQU1sUCxNQUFBLENBQU9pUCxXQUFBLEdBQWNwTCxDQUFBLENBQUVELFlBQUEsR0FBZSxJQUFJLEtBQUtnUixLQUFBLENBQU0rSSxPQUFBLENBQVE4UixZQUFBLEdBQWU7VUFDM00sS0FBS0QsY0FBQSxDQUFlLFFBQVFybUIsQ0FBQSxFQUFHOFgsQ0FBQztRQUNsQztRQUNBa08sV0FBV3RyQixDQUFBLEVBQUdHLENBQUEsRUFBRztVQUNmLE1BQU1FLENBQUEsR0FBSUwsQ0FBQSxDQUFFa0wscUJBQUEsQ0FBc0I7WUFBRzVGLENBQUEsR0FBSWpGLENBQUEsQ0FBRW9MLEtBQUEsR0FBUSxLQUFLNGUsV0FBQSxHQUFjbHFCLENBQUEsQ0FBRThxQixXQUFBO1lBQWE3TixDQUFBLEdBQUkvYyxDQUFBLENBQUVnTCxHQUFBLEdBQU1sUCxNQUFBLENBQU9pUCxXQUFBLEdBQWNwTCxDQUFBLENBQUVELFlBQUEsR0FBZSxJQUFJLEtBQUtnUixLQUFBLENBQU0rSSxPQUFBLENBQVE4UixZQUFBLEdBQWU7VUFDN0ssS0FBS0QsY0FBQSxDQUFlLFNBQVNybUIsQ0FBQSxFQUFHOFgsQ0FBQztRQUNuQztRQUNBdU8sZUFBZTNyQixDQUFBLEVBQUdHLENBQUEsRUFBR0UsQ0FBQSxFQUFHO1VBQ3RCLEtBQUswUSxLQUFBLENBQU0rSSxPQUFBLENBQVF6UixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLZ0ssR0FBQSxDQUFJd1ksU0FBQSxDQUFVOXFCLENBQUEsQ0FBRSxHQUFHLEtBQUsrUSxLQUFBLENBQU0rSSxPQUFBLENBQVFxTSxLQUFBLENBQU03YSxJQUFBLEdBQU9uTCxDQUFBLEdBQUksTUFBTSxLQUFLNFEsS0FBQSxDQUFNK0ksT0FBQSxDQUFRcU0sS0FBQSxDQUFNOWEsR0FBQSxHQUFNaEwsQ0FBQSxHQUFJO1FBQ3hJO1FBQ0E4SCxLQUFLbkksQ0FBQSxFQUFHRyxDQUFBLEdBQUksTUFBTUUsQ0FBQSxHQUFJLENBQUMsR0FBRztVQUN4QixNQUFNaUYsQ0FBQSxHQUFJOUosUUFBQSxDQUFTRSxhQUFBLENBQWNzRSxDQUFDO1VBQ2xDZCxLQUFBLENBQU1DLE9BQUEsQ0FBUWdCLENBQUMsSUFBSW1GLENBQUEsQ0FBRStDLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEdBQUduSSxDQUFDLElBQUlBLENBQUEsSUFBS21GLENBQUEsQ0FBRStDLFNBQUEsQ0FBVUMsR0FBQSxDQUFJbkksQ0FBQztVQUNqRSxXQUFXaWQsQ0FBQSxJQUFLL2MsQ0FBQSxFQUNkQSxDQUFBLENBQUUxRCxjQUFBLENBQWV5Z0IsQ0FBQyxNQUFNOVgsQ0FBQSxDQUFFOFgsQ0FBQSxJQUFLL2MsQ0FBQSxDQUFFK2MsQ0FBQTtVQUNuQyxPQUFPOVgsQ0FBQTtRQUNUO1FBQ0FrRCxPQUFPeEksQ0FBQSxFQUFHRyxDQUFBLEVBQUc7VUFDWGpCLEtBQUEsQ0FBTUMsT0FBQSxDQUFRZ0IsQ0FBQyxJQUFJQSxDQUFBLENBQUU1QyxPQUFBLENBQVM4QyxDQUFBLElBQU1MLENBQUEsQ0FBRXJFLFdBQUEsQ0FBWTBFLENBQUMsQ0FBQyxJQUFJTCxDQUFBLENBQUVyRSxXQUFBLENBQVl3RSxDQUFDO1FBQ3pFO1FBQ0FuQixRQUFRZ0IsQ0FBQSxFQUFHRyxDQUFBLEVBQUc7VUFDWmpCLEtBQUEsQ0FBTUMsT0FBQSxDQUFRZ0IsQ0FBQyxLQUFLQSxDQUFBLEdBQUlBLENBQUEsQ0FBRXNJLE9BQUEsQ0FBUSxHQUFHbEwsT0FBQSxDQUFTOEMsQ0FBQSxJQUFNTCxDQUFBLENBQUVoQixPQUFBLENBQVFxQixDQUFDLENBQUMsSUFBSUwsQ0FBQSxDQUFFaEIsT0FBQSxDQUFRbUIsQ0FBQztRQUNqRjtNQUNGO0lBQ0YsR0FBRyxVQUFTckUsQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO01BQ2hCaEIsQ0FBQSxDQUFFUixPQUFBLEdBQVU7SUFDZCxDQUFDLENBQUMsRUFBRUgsT0FBQTtFQUNOLENBQUM7QUFDSCxHQUFHZ3ZCLEVBQUU7QUFDTCxJQUFJMEIsRUFBQSxHQUFLMUIsRUFBQSxDQUFHN3VCLE9BQUE7QUFDWixJQUFNd3dCLEVBQUEsR0FBcUIsZUFBQXh2QixFQUFBLENBQUd1dkIsRUFBRTtBQUNoQyxJQUFJRSxDQUFBLEdBQUk7QUFDUixTQUFTQyxHQUFBLEVBQUs7RUFDWkQsQ0FBQSxLQUFNQSxDQUFBLEdBQUksSUFBSUQsRUFBQSxDQUFHO0FBQ25CO0FBQ0EsU0FBU0csR0FBRzF2QixDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0VBQ25Ca3dCLEVBQUEsQ0FBRyxHQUFHRCxDQUFBLElBQUssUUFBUUEsQ0FBQSxDQUFFekosSUFBQSxDQUFLL2xCLENBQUEsRUFBR2QsQ0FBQSxFQUFHSyxDQUFDO0FBQ25DO0FBQ0EsU0FBU293QixHQUFHM3ZCLENBQUEsR0FBSSxPQUFJO0VBQ2xCeXZCLEVBQUEsQ0FBRyxHQUFHRCxDQUFBLElBQUssUUFBUUEsQ0FBQSxDQUFFdkIsSUFBQSxDQUFLanVCLENBQUM7QUFDN0I7QUFDQSxTQUFTNHZCLEdBQUc1dkIsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBRztFQUNuQmt3QixFQUFBLENBQUcsR0FBR0QsQ0FBQSxJQUFLLFFBQVFBLENBQUEsQ0FBRU4sT0FBQSxDQUFRbHZCLENBQUEsRUFBR2QsQ0FBQSxFQUFHSyxDQUFDO0FBQ3RDO0FBQ0EsU0FBU3N3QixHQUFBLEVBQUs7RUFDWkwsQ0FBQSxJQUFLLFFBQVFBLENBQUEsQ0FBRTljLE9BQUEsQ0FBUSxHQUFHOGMsQ0FBQSxHQUFJO0FBQ2hDO0FBQ0EsSUFBTU0sRUFBQSxHQUFOLGNBQWlCeGIsQ0FBQSxDQUFFO0VBT2pCM1QsWUFBWTtJQUFFbVMsTUFBQSxFQUFRNVQsQ0FBQTtJQUFHcVYsZ0JBQUEsRUFBa0JoVjtFQUFFLEdBQUc7SUFDOUMsTUFBTTtNQUNKdVQsTUFBQSxFQUFRNVQsQ0FBQTtNQUNScVYsZ0JBQUEsRUFBa0JoVjtJQUNwQixDQUFDO0VBQ0g7RUFJQSxJQUFJNGhCLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTDRFLElBQUEsRUFBTUEsQ0FBQzdtQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsS0FBTSxLQUFLd2xCLElBQUEsQ0FBSzdtQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUM7TUFDcEMwdEIsSUFBQSxFQUFNQSxDQUFBLEtBQU0sS0FBS0EsSUFBQSxDQUFLO01BQ3RCaUIsT0FBQSxFQUFTQSxDQUFDaHdCLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxLQUFNLEtBQUsydUIsT0FBQSxDQUFRaHdCLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQztJQUM1QztFQUNGO0VBUUF3bEIsS0FBSzdtQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNabXZCLEVBQUEsQ0FBR3h3QixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUM7RUFDWjtFQUlBMHRCLEtBQUEsRUFBTztJQUNMMEIsRUFBQSxDQUFHO0VBQ0w7RUFRQVQsUUFBUWh3QixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNmcXZCLEVBQUEsQ0FBRzF3QixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUM7RUFDWjtBQUNGO0FBQ0EsSUFBTXd2QixFQUFBLEdBQU4sY0FBaUJ6YixDQUFBLENBQUU7RUFJakIsSUFBSTZNLFFBQUEsRUFBVTtJQUNaLE9BQU87TUFDTDNNLEtBQUEsRUFBTyxLQUFLd2I7SUFJZDtFQUNGO0VBSUEsSUFBSUEsWUFBQSxFQUFjO0lBQ2hCLE9BQU87TUFJTHpTLE9BQUEsRUFBUyxLQUFLdEksTUFBQSxDQUFPZ2IsRUFBQSxDQUFHemIsS0FBQSxDQUFNK0ksT0FBQTtNQUk5QjJTLFFBQUEsRUFBVSxLQUFLamIsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHemIsS0FBQSxDQUFNMGI7SUFDakM7RUFDRjtBQUNGO0FBQ0EsU0FBU0MsR0FBR253QixDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixNQUFNSyxDQUFBLEdBQUksQ0FBQztFQUNYLE9BQU9XLE1BQUEsQ0FBT2lhLE9BQUEsQ0FBUW5hLENBQUMsRUFBRWdCLE9BQUEsQ0FBUSxDQUFDLENBQUNULENBQUEsRUFBR1UsQ0FBQyxNQUFNO0lBQzNDLElBQUlzRyxDQUFBLENBQUV0RyxDQUFDLEdBQUc7TUFDUixNQUFNbUMsQ0FBQSxHQUFJbEUsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBS3FCLENBQUEsS0FBTUEsQ0FBQTtNQUM1QkwsTUFBQSxDQUFPK2UsTUFBQSxDQUFPaGUsQ0FBQyxFQUFFc04sS0FBQSxDQUFPOUssQ0FBQSxJQUFNK0QsRUFBQSxDQUFHL0QsQ0FBQyxDQUFDLElBQUlsRSxDQUFBLENBQUVnQixDQUFBLElBQUs2QyxDQUFBLEdBQUk3RCxDQUFBLENBQUVnQixDQUFBLElBQUs0dkIsRUFBQSxDQUFHbHZCLENBQUEsRUFBR21DLENBQUM7TUFDaEU7SUFDRjtJQUNBN0QsQ0FBQSxDQUFFZ0IsQ0FBQSxJQUFLVSxDQUFBO0VBQ1QsQ0FBQyxHQUFHMUIsQ0FBQTtBQUNOO0FBQ0EsSUFBTTZ3QixDQUFBLEdBQUlELEVBQUEsQ0FBRzdlLEVBQUU7QUFDZixTQUFTK2UsR0FBR3J3QixDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixNQUFNSyxDQUFBLEdBQUksQ0FBQztFQUNYLE9BQU9XLE1BQUEsQ0FBT2EsSUFBQSxDQUFLZixDQUFDLEVBQUVnQixPQUFBLENBQVNULENBQUEsSUFBTTtJQUNuQyxNQUFNVSxDQUFBLEdBQUkvQixDQUFBLENBQUVxQixDQUFBO0lBQ1pVLENBQUEsS0FBTSxTQUFTMUIsQ0FBQSxDQUFFMEIsQ0FBQSxJQUFLakIsQ0FBQSxDQUFFTyxDQUFBLElBQUtoQixDQUFBLENBQUVnQixDQUFBLElBQUtQLENBQUEsQ0FBRU8sQ0FBQTtFQUN4QyxDQUFDLEdBQUdoQixDQUFBO0FBQ047QUFDQSxJQUFNK3dCLEVBQUEsR0FBSyxNQUFNQyxFQUFBLENBQUc7RUFLbEI1dkIsWUFBWXpCLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ2hCLEtBQUtpeEIsTUFBQSxHQUFTLElBQUksS0FBS0MsS0FBQSxHQUFRLEVBQUMsRUFBRyxLQUFLQSxLQUFBLEdBQVF2eEIsQ0FBQSxJQUFLLEVBQUMsRUFBRyxLQUFLd3hCLGVBQUEsR0FBa0JueEIsQ0FBQTtFQUNsRjtFQU1BLElBQUlveEIsWUFBQSxFQUFjO0lBQ2hCLE9BQU8sS0FBS0gsTUFBQSxLQUFXLEtBQUssT0FBTyxLQUFLQyxLQUFBLENBQU0sS0FBS0QsTUFBQTtFQUNyRDtFQU1BNVksVUFBVTFZLENBQUEsRUFBRztJQUNYQSxDQUFBLEdBQUksS0FBS3V4QixLQUFBLENBQU12dUIsTUFBQSxJQUFVaEQsQ0FBQSxJQUFLLE9BQU8sS0FBSzB4QixVQUFBLENBQVcsR0FBRyxLQUFLSixNQUFBLEdBQVN0eEIsQ0FBQSxFQUFHLEtBQUt1eEIsS0FBQSxDQUFNLEtBQUtELE1BQUEsRUFBUTFrQixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLMmtCLGVBQWU7RUFDckk7RUFNQUcsU0FBUzN4QixDQUFBLEVBQUc7SUFDVixLQUFLdXhCLEtBQUEsR0FBUXZ4QixDQUFBO0VBQ2Y7RUFJQTR4QixLQUFBLEVBQU87SUFDTCxLQUFLTixNQUFBLEdBQVMsS0FBS08sdUJBQUEsQ0FBd0JSLEVBQUEsQ0FBR1MsVUFBQSxDQUFXOXFCLEtBQUs7RUFDaEU7RUFJQStxQixTQUFBLEVBQVc7SUFDVCxLQUFLVCxNQUFBLEdBQVMsS0FBS08sdUJBQUEsQ0FBd0JSLEVBQUEsQ0FBR1MsVUFBQSxDQUFXanJCLElBQUk7RUFDL0Q7RUFJQTZxQixXQUFBLEVBQWE7SUFDWCxLQUFLSixNQUFBLEtBQVcsT0FBTyxLQUFLQyxLQUFBLENBQU0sS0FBS0QsTUFBQSxFQUFRMWtCLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLc2IsZUFBZSxHQUFHLEtBQUtGLE1BQUEsR0FBUztFQUN2RztFQU9BTyx3QkFBd0I3eEIsQ0FBQSxFQUFHO0lBQ3pCLElBQUksS0FBS3V4QixLQUFBLENBQU12dUIsTUFBQSxLQUFXLEdBQ3hCLE9BQU8sS0FBS3N1QixNQUFBO0lBQ2QsSUFBSWp4QixDQUFBLEdBQUksS0FBS2l4QixNQUFBO0lBQ2IsT0FBT2p4QixDQUFBLEtBQU0sS0FBS0EsQ0FBQSxHQUFJTCxDQUFBLEtBQU1xeEIsRUFBQSxDQUFHUyxVQUFBLENBQVc5cUIsS0FBQSxHQUFRLEtBQUssSUFBSSxLQUFLdXFCLEtBQUEsQ0FBTWx4QixDQUFBLEVBQUd1TSxTQUFBLENBQVVzSixNQUFBLENBQU8sS0FBS3NiLGVBQWUsR0FBR3h4QixDQUFBLEtBQU1xeEIsRUFBQSxDQUFHUyxVQUFBLENBQVc5cUIsS0FBQSxHQUFRM0csQ0FBQSxJQUFLQSxDQUFBLEdBQUksS0FBSyxLQUFLa3hCLEtBQUEsQ0FBTXZ1QixNQUFBLEdBQVMzQyxDQUFBLElBQUssS0FBS2t4QixLQUFBLENBQU12dUIsTUFBQSxHQUFTM0MsQ0FBQSxHQUFJLEtBQUssS0FBS2t4QixLQUFBLENBQU12dUIsTUFBQSxFQUFRc0osQ0FBQSxDQUFFK0IsV0FBQSxDQUFZLEtBQUtrakIsS0FBQSxDQUFNbHhCLENBQUEsQ0FBRSxLQUFLOEksRUFBQSxDQUFHLE1BQU1tTixDQUFBLENBQUVvQyxTQUFBLENBQVUsS0FBSzZZLEtBQUEsQ0FBTWx4QixDQUFBLENBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxLQUFLa3hCLEtBQUEsQ0FBTWx4QixDQUFBLEVBQUd1TSxTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLMmtCLGVBQWUsR0FBR254QixDQUFBO0VBQ3JXO0FBQ0Y7QUFDQSt3QixFQUFBLENBQUdVLFVBQUEsR0FBYTtFQUNkOXFCLEtBQUEsRUFBTztFQUNQSCxJQUFBLEVBQU07QUFDUjtBQUNBLElBQUltckIsRUFBQSxHQUFLWixFQUFBO0FBQ1QsSUFBTWEsRUFBQSxHQUFOLE1BQVM7RUFJUHh3QixZQUFZekIsQ0FBQSxFQUFHO0lBQ2IsS0FBS2t5QixRQUFBLEdBQVcsTUFBTSxLQUFLQyxTQUFBLEdBQVksT0FBSSxLQUFLQyxhQUFBLEdBQWdCLEVBQUMsRUFBRyxLQUFLQyxTQUFBLEdBQWFoeUIsQ0FBQSxJQUFNO01BQzFGLElBQUksS0FBS2l5Qix1QkFBQSxDQUF3Qmp5QixDQUFDLEdBQ2hDLFFBQVE0eEIsRUFBQSxDQUFHTSxRQUFBLENBQVM5cUIsUUFBQSxDQUFTcEgsQ0FBQSxDQUFFbXlCLE9BQU8sS0FBS255QixDQUFBLENBQUVveUIsY0FBQSxDQUFlLEdBQUdweUIsQ0FBQSxDQUFFbXlCLE9BQUE7UUFBQSxLQUMxRHBzQixDQUFBLENBQUVFLEdBQUE7VUFDTCxLQUFLb3NCLGNBQUEsQ0FBZXJ5QixDQUFDO1VBQ3JCO1FBQUEsS0FDRytGLENBQUEsQ0FBRVMsSUFBQTtRQUFBLEtBQ0ZULENBQUEsQ0FBRVUsRUFBQTtVQUNMLEtBQUs2ckIsUUFBQSxDQUFTO1VBQ2Q7UUFBQSxLQUNHdnNCLENBQUEsQ0FBRVksS0FBQTtRQUFBLEtBQ0ZaLENBQUEsQ0FBRVcsSUFBQTtVQUNMLEtBQUs2ckIsU0FBQSxDQUFVO1VBQ2Y7UUFBQSxLQUNHeHNCLENBQUEsQ0FBRUcsS0FBQTtVQUNMLEtBQUtzc0IsZ0JBQUEsQ0FBaUJ4eUIsQ0FBQztVQUN2QjtNQUFBO0lBRVIsR0FBRyxLQUFLNnhCLFFBQUEsR0FBVyxJQUFJRixFQUFBLENBQUdoeUIsQ0FBQSxDQUFFdXhCLEtBQUEsRUFBT3Z4QixDQUFBLENBQUU4eUIsZ0JBQWdCLEdBQUcsS0FBS0MsZ0JBQUEsR0FBbUIveUIsQ0FBQSxDQUFFK3lCLGdCQUFBLEVBQWtCLEtBQUtDLFdBQUEsR0FBY2h6QixDQUFBLENBQUVnekIsV0FBQSxJQUFlZixFQUFBLENBQUdNLFFBQUE7RUFDN0k7RUFJQSxJQUFJVSxZQUFBLEVBQWM7SUFDaEIsT0FBTyxLQUFLZCxTQUFBO0VBQ2Q7RUFPQSxXQUFXSSxTQUFBLEVBQVc7SUFDcEIsT0FBTyxDQUNMbnNCLENBQUEsQ0FBRUUsR0FBQSxFQUNGRixDQUFBLENBQUVTLElBQUEsRUFDRlQsQ0FBQSxDQUFFWSxLQUFBLEVBQ0ZaLENBQUEsQ0FBRUcsS0FBQSxFQUNGSCxDQUFBLENBQUVVLEVBQUEsRUFDRlYsQ0FBQSxDQUFFVyxJQUFBLENBQ0o7RUFDRjtFQU9BbXNCLFNBQVNsekIsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDYixLQUFLOHhCLFNBQUEsR0FBWSxNQUFJbnlCLENBQUEsSUFBSyxLQUFLa3lCLFFBQUEsQ0FBU1AsUUFBQSxDQUFTM3hCLENBQUMsR0FBR0ssQ0FBQSxLQUFNLFVBQVUsS0FBSzZ4QixRQUFBLENBQVN4WixTQUFBLENBQVVyWSxDQUFDLEdBQUdOLFFBQUEsQ0FBUzZVLGdCQUFBLENBQWlCLFdBQVcsS0FBS3lkLFNBQUEsRUFBVyxJQUFFO0VBQzFKO0VBSUFjLFdBQUEsRUFBYTtJQUNYLEtBQUtoQixTQUFBLEdBQVksT0FBSSxLQUFLVCxVQUFBLENBQVcsR0FBRzN4QixRQUFBLENBQVM4VSxtQkFBQSxDQUFvQixXQUFXLEtBQUt3ZCxTQUFTO0VBQ2hHO0VBSUFlLFdBQUEsRUFBYTtJQUNYLEtBQUsxQixVQUFBLENBQVcsR0FBRyxLQUFLa0IsU0FBQSxDQUFVO0VBQ3BDO0VBSUFELFNBQUEsRUFBVztJQUNULEtBQUtULFFBQUEsQ0FBU0gsUUFBQSxDQUFTLEdBQUcsS0FBS3NCLFlBQUEsQ0FBYTtFQUM5QztFQUlBVCxVQUFBLEVBQVk7SUFDVixLQUFLVixRQUFBLENBQVNOLElBQUEsQ0FBSyxHQUFHLEtBQUt5QixZQUFBLENBQWE7RUFDMUM7RUFJQUMsU0FBQSxFQUFXO0lBQ1QsT0FBTyxDQUFDLENBQUMsS0FBS3BCLFFBQUEsQ0FBU1QsV0FBQTtFQUN6QjtFQU1BOEIsT0FBT3Z6QixDQUFBLEVBQUc7SUFDUixLQUFLb3lCLGFBQUEsQ0FBY3pxQixJQUFBLENBQUszSCxDQUFDO0VBQzNCO0VBTUF3ekIsYUFBYXh6QixDQUFBLEVBQUc7SUFDZCxLQUFLb3lCLGFBQUEsR0FBZ0IsS0FBS0EsYUFBQSxDQUFjemxCLE1BQUEsQ0FBUXRNLENBQUEsSUFBTUEsQ0FBQSxLQUFNTCxDQUFDO0VBQy9EO0VBTUEweEIsV0FBQSxFQUFhO0lBQ1gsS0FBS1EsUUFBQSxDQUFTUixVQUFBLENBQVc7RUFDM0I7RUFRQVksd0JBQXdCdHlCLENBQUEsRUFBRztJQUN6QixPQUFPLEtBQUtteUIsU0FBQSxJQUFhLEtBQUthLFdBQUEsQ0FBWXZyQixRQUFBLENBQVN6SCxDQUFBLENBQUV3eUIsT0FBTztFQUM5RDtFQU1BRSxlQUFlMXlCLENBQUEsRUFBRztJQUNoQixRQUFRQSxDQUFBLENBQUV5ekIsUUFBQSxHQUFXekIsRUFBQSxDQUFHRixVQUFBLENBQVdqckIsSUFBQSxHQUFPbXJCLEVBQUEsQ0FBR0YsVUFBQSxDQUFXOXFCLEtBQUE7TUFBQSxLQUNqRGdyQixFQUFBLENBQUdGLFVBQUEsQ0FBVzlxQixLQUFBO1FBQ2pCLEtBQUs0ckIsU0FBQSxDQUFVO1FBQ2Y7TUFBQSxLQUNHWixFQUFBLENBQUdGLFVBQUEsQ0FBV2pyQixJQUFBO1FBQ2pCLEtBQUs4ckIsUUFBQSxDQUFTO1FBQ2Q7SUFBQTtFQUVOO0VBTUFFLGlCQUFpQjd5QixDQUFBLEVBQUc7SUFDbEIsS0FBS215QixTQUFBLEtBQWMsS0FBS0QsUUFBQSxDQUFTVCxXQUFBLEtBQWdCenhCLENBQUEsQ0FBRTB6QixlQUFBLENBQWdCLEdBQUcxekIsQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZSxHQUFHLEtBQUtQLFFBQUEsQ0FBU1QsV0FBQSxDQUFZa0MsS0FBQSxDQUFNLElBQUl2ckIsQ0FBQSxDQUFFLEtBQUsycUIsZ0JBQWdCLEtBQUssS0FBS0EsZ0JBQUEsQ0FBaUIsS0FBS2IsUUFBQSxDQUFTVCxXQUFXO0VBQzNNO0VBSUE0QixhQUFBLEVBQWU7SUFDYixLQUFLbkIsUUFBQSxDQUFTVCxXQUFBLElBQWUsS0FBS1MsUUFBQSxDQUFTVCxXQUFBLENBQVkzdEIsc0JBQUEsQ0FBdUIsR0FBRyxLQUFLc3VCLGFBQUEsQ0FBY3R3QixPQUFBLENBQVM5QixDQUFBLElBQU1BLENBQUEsQ0FBRSxDQUFDO0VBQ3hIO0FBQ0Y7QUFDQSxJQUFNNHpCLEVBQUEsR0FBSztFQUFtV0MsRUFBQSxHQUFLO0VBQThQQyxFQUFBLEdBQUs7RUFBc1FDLEVBQUEsR0FBSztFQUE0UUMsRUFBQSxHQUFLO0VBQThQQyxFQUFBLEdBQUs7RUFBK05DLEVBQUEsR0FBSztFQUErS0MsRUFBQSxHQUFLO0VBQStTQyxFQUFBLEdBQUs7RUFBdXBCQyxFQUFBLEdBQUs7RUFBc3BCQyxFQUFBLEdBQUs7RUFBcU5DLEVBQUEsR0FBSztFQUFtVUMsRUFBQSxHQUFLO0VBQW9TQyxFQUFBLEdBQUs7RUFBeWlDQyxFQUFBLEdBQUs7RUFBOFhDLEVBQUEsR0FBSztFQUFNQyxFQUFBLEdBQUs7QUFDL3BMLFNBQVNDLEdBQUcvekIsQ0FBQSxFQUFHO0VBQ2IsT0FBTyxDQUFDZCxDQUFBLEVBQUdLLENBQUEsS0FBTSxDQUFDLENBQUNTLENBQUEsRUFBR2QsQ0FBQyxFQUFFMk0sTUFBQSxDQUFRNUssQ0FBQSxJQUFNLENBQUMsQ0FBQ0EsQ0FBQyxFQUFFeUwsSUFBQSxDQUFLbW5CLEVBQUUsR0FBR3QwQixDQUFDLEVBQUVzTSxNQUFBLENBQVE1SyxDQUFBLElBQU0sQ0FBQyxDQUFDQSxDQUFDLEVBQUV5TCxJQUFBLENBQUtvbkIsRUFBRTtBQUNyRjtBQUNBLElBQU1FLEVBQUEsR0FBS0QsRUFBQSxDQUFHLFNBQVM7RUFBR0UsRUFBQSxHQUFLO0lBQzdCQyxJQUFBLEVBQU1GLEVBQUEsQ0FBRztJQUNURyxZQUFBLEVBQWNILEVBQUEsQ0FBRyxNQUFNLFlBQVk7SUFDbkNJLGFBQUEsRUFBZUosRUFBQSxDQUFHLE1BQU0sY0FBYztJQUN0Q0ssS0FBQSxFQUFPTCxFQUFBLENBQUcsT0FBTztJQUNqQk0sV0FBQSxFQUFhTixFQUFBLENBQUcsYUFBYTtFQUMvQjtBQUNBLElBQU1PLEVBQUEsR0FBTixNQUFTO0VBTVA1ekIsWUFBWXpCLENBQUEsRUFBRztJQUNiLEtBQUtzVixLQUFBLEdBQVE7TUFDWDBmLElBQUEsRUFBTTFvQixDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPLENBQUNxb0IsRUFBQSxDQUFHQyxJQUFBLEVBQU1oMUIsQ0FBQSxDQUFFczFCLFNBQUEsS0FBYyxXQUFXUCxFQUFBLENBQUdHLGFBQUEsR0FBZ0JILEVBQUEsQ0FBR0UsWUFBWSxDQUFDO01BQzVGRSxLQUFBLEVBQU83b0IsQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBT3FvQixFQUFBLENBQUdJLEtBQUEsRUFBTztRQUFFM21CLFdBQUEsRUFBYXhPLENBQUEsQ0FBRW0xQjtNQUFNLENBQUM7SUFDekQsR0FBRyxLQUFLN2YsS0FBQSxDQUFNMGYsSUFBQSxDQUFLOTBCLFdBQUEsQ0FBWSxLQUFLb1YsS0FBQSxDQUFNNmYsS0FBSyxHQUFHbjFCLENBQUEsQ0FBRW8xQixXQUFBLEtBQWdCLFdBQVcsS0FBSzlmLEtBQUEsQ0FBTThmLFdBQUEsR0FBYzlvQixDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPcW9CLEVBQUEsQ0FBR0ssV0FBQSxFQUFhO01BQUU1bUIsV0FBQSxFQUFheE8sQ0FBQSxDQUFFbzFCO0lBQVksQ0FBQyxHQUFHLEtBQUs5ZixLQUFBLENBQU0wZixJQUFBLENBQUs5MEIsV0FBQSxDQUFZLEtBQUtvVixLQUFBLENBQU04ZixXQUFXO0VBQzNOO0VBSUFHLFdBQUEsRUFBYTtJQUNYLE9BQU8sS0FBS2pnQixLQUFBLENBQU0wZixJQUFBO0VBQ3BCO0FBQ0Y7QUFDQSxJQUFNUSxFQUFBLEdBQU4sTUFBUztFQU1QL3pCLFlBQVl6QixDQUFBLEVBQUc7SUFDYixLQUFLeTFCLE1BQUEsR0FBU3oxQixDQUFBO0VBQ2hCO0VBSUEsSUFBSXFKLEtBQUEsRUFBTztJQUNULElBQUksS0FBS29zQixNQUFBLEtBQVcsVUFBVSxVQUFVLEtBQUtBLE1BQUEsRUFDM0MsT0FBTyxLQUFLQSxNQUFBLENBQU9wc0IsSUFBQTtFQUN2QjtFQUlBbUssUUFBQSxFQUFVO0lBQ1JpZCxFQUFBLENBQUc7RUFDTDtFQUlBaUYsZUFBQSxFQUFpQjtJQUNmLElBQUkxMUIsQ0FBQTtJQUNKLEtBQUt5MUIsTUFBQSxLQUFXLFVBQVUsY0FBYyxLQUFLQSxNQUFBLElBQVUsU0FBU3oxQixDQUFBLEdBQUksS0FBS3kxQixNQUFBLENBQU9ybUIsUUFBQSxLQUFhLE9BQU8sU0FBU3BQLENBQUEsQ0FBRTIxQixNQUFBLEtBQVcsY0FBYyxLQUFLRixNQUFBLENBQU9ybUIsUUFBQSxDQUFTdW1CLE1BQUEsQ0FBTztFQUN0SztFQUlBQyxnQkFBQSxFQUFrQjtJQUNoQixJQUFJNTFCLENBQUE7SUFDSixLQUFLeTFCLE1BQUEsS0FBVyxVQUFVLGNBQWMsS0FBS0EsTUFBQSxJQUFVLFNBQVN6MUIsQ0FBQSxHQUFJLEtBQUt5MUIsTUFBQSxDQUFPcm1CLFFBQUEsS0FBYSxPQUFPLFNBQVNwUCxDQUFBLENBQUU2MUIsT0FBQSxLQUFZLGNBQWMsS0FBS0osTUFBQSxDQUFPcm1CLFFBQUEsQ0FBU3ltQixPQUFBLENBQVE7RUFDeEs7RUFJQUMsWUFBQSxFQUFjO0lBQ1osSUFBSTkxQixDQUFBLEVBQUdLLENBQUE7SUFDUCxLQUFLbzFCLE1BQUEsS0FBVyxVQUFVLGdCQUFnQixLQUFLQSxNQUFBLE1BQVlwMUIsQ0FBQSxJQUFLTCxDQUFBLEdBQUksS0FBS3kxQixNQUFBLEVBQVFNLFVBQUEsS0FBZSxRQUFRMTFCLENBQUEsQ0FBRWMsSUFBQSxDQUFLbkIsQ0FBQSxFQUFHLEtBQUt5MUIsTUFBTTtFQUMvSDtFQU9BTyxRQUFRaDJCLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ1osTUFBTWdCLENBQUEsR0FBSSxJQUFJZzBCLEVBQUEsQ0FBR2gxQixDQUFDO0lBQ2xCcXdCLEVBQUEsQ0FBRzF3QixDQUFBLEVBQUdxQixDQUFBLENBQUVrMEIsVUFBQSxDQUFXLEdBQUc7TUFDcEJsRyxTQUFBLEVBQVdodkIsQ0FBQSxDQUFFNDFCLFFBQUE7TUFDYnBILFdBQUEsRUFBYTtJQUNmLENBQUM7RUFDSDtFQUlBLElBQUl6ZixTQUFBLEVBQVc7SUFDYixJQUFJcFAsQ0FBQTtJQUNKLE9BQU8sS0FBS3kxQixNQUFBLEtBQVcsVUFBVSxjQUFjLEtBQUtBLE1BQUEsTUFBWXoxQixDQUFBLEdBQUksS0FBS3kxQixNQUFBLENBQU9ybUIsUUFBQSxLQUFhLE9BQU8sU0FBU3BQLENBQUEsQ0FBRXV4QixLQUFBLE1BQVcsU0FBUyxLQUFLa0UsTUFBQSxDQUFPcm1CLFFBQUEsQ0FBU21pQixLQUFBLEdBQVEsRUFBQztFQUNuSztFQUlBLElBQUkyRSxZQUFBLEVBQWM7SUFDaEIsT0FBTyxLQUFLOW1CLFFBQUEsQ0FBU3BNLE1BQUEsR0FBUztFQUNoQztFQUlBLElBQUltekIsZUFBQSxFQUFpQjtJQUNuQixJQUFJbjJCLENBQUE7SUFDSixPQUFPLEtBQUt5MUIsTUFBQSxLQUFXLFVBQVUsY0FBYyxLQUFLQSxNQUFBLE1BQVl6MUIsQ0FBQSxHQUFJLEtBQUt5MUIsTUFBQSxDQUFPcm1CLFFBQUEsS0FBYSxPQUFPLFNBQVNwUCxDQUFBLENBQUVvMkIsTUFBQSxNQUFZO0VBQzdIO0VBSUEsSUFBSUMsb0JBQUEsRUFBc0I7SUFDeEIsSUFBSXIyQixDQUFBO0lBQ0osT0FBTyxFQUFFLEtBQUt5MUIsTUFBQSxLQUFXLFVBQVUsRUFBRSxjQUFjLEtBQUtBLE1BQUEsT0FBYXoxQixDQUFBLEdBQUksS0FBS3kxQixNQUFBLENBQU9ybUIsUUFBQSxLQUFhLE9BQU8sU0FBU3BQLENBQUEsQ0FBRXMyQixXQUFBLE1BQWlCO0VBQ3ZJO0VBSUEsSUFBSUMscUJBQUEsRUFBdUI7SUFDekIsSUFBSXYyQixDQUFBO0lBQ0osT0FBTyxLQUFLeTFCLE1BQUEsS0FBVyxVQUFVLGNBQWMsS0FBS0EsTUFBQSxNQUFZejFCLENBQUEsR0FBSSxLQUFLeTFCLE1BQUEsQ0FBT3JtQixRQUFBLEtBQWEsT0FBTyxTQUFTcFAsQ0FBQSxDQUFFdzJCLFVBQUEsTUFBZ0I7RUFDakk7RUFJQSxJQUFJQyxnQkFBQSxFQUFrQjtJQUNwQixPQUFPLEtBQUtoQixNQUFBLEtBQVcsVUFBVSxxQkFBcUIsS0FBS0EsTUFBQSxJQUFVLEtBQUtBLE1BQUEsQ0FBT2dCLGVBQUE7RUFDbkY7RUFJQSxJQUFJQyxTQUFBLEVBQVc7SUFDYixPQUFPLEtBQUtqQixNQUFBLEtBQVcsVUFBVSxFQUFFLGNBQWMsS0FBS0EsTUFBQSxJQUFVLFFBQUssT0FBTyxLQUFLQSxNQUFBLENBQU9pQixRQUFBLElBQVksYUFBYSxLQUFLakIsTUFBQSxDQUFPaUIsUUFBQSxDQUFTLElBQUksS0FBS2pCLE1BQUEsQ0FBT2lCLFFBQUEsS0FBYTtFQUNySztBQUNGO0FBQ0EsSUFBTUMsQ0FBQSxHQUFJOUIsRUFBQSxDQUFHLGlCQUFpQjtFQUFHK0IsQ0FBQSxHQUFJO0lBQ25DQyxTQUFBLEVBQVdGLENBQUEsQ0FBRTtJQUNiRyxNQUFBLEVBQVFILENBQUEsQ0FBRSxNQUFNLFFBQVE7SUFDeEJJLFFBQUEsRUFBVUosQ0FBQSxDQUFFLE1BQU0sVUFBVTtJQUM1QkssT0FBQSxFQUFTTCxDQUFBLENBQUUsTUFBTSxTQUFTO0lBQzFCTSxNQUFBLEVBQVFOLENBQUEsQ0FBRSxNQUFNLFFBQVE7SUFDeEJPLGlCQUFBLEVBQW1CUCxDQUFBLENBQUUsTUFBTSxjQUFjO0lBQ3pDUSxPQUFBLEVBQVNSLENBQUEsQ0FBRSxNQUFNLFVBQVU7SUFDM0JTLE9BQUEsRUFBU1QsQ0FBQSxDQUFFLE1BQU0sVUFBVTtJQUMzQnhCLEtBQUEsRUFBT3dCLENBQUEsQ0FBRSxPQUFPO0lBQ2hCVSxjQUFBLEVBQWdCVixDQUFBLENBQUUsaUJBQWlCO0lBQ25DeGIsSUFBQSxFQUFNd2IsQ0FBQSxDQUFFLE1BQU07SUFDZFcsUUFBQSxFQUFVWCxDQUFBLENBQUUsUUFBUSxNQUFNO0lBQzFCWSxnQkFBQSxFQUFrQlosQ0FBQSxDQUFFLFFBQVEsZUFBZTtJQUMzQ2EsZUFBQSxFQUFpQjNDLEVBQUEsQ0FBRyxRQUFRLEVBQUU7RUFDaEM7QUFDQSxJQUFNNEMsRUFBQSxHQUFOLGNBQWlCakMsRUFBQSxDQUFHO0VBUWxCL3pCLFlBQVl6QixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNoQixNQUFNTCxDQUFDLEdBQUcsS0FBS3kxQixNQUFBLEdBQVN6MUIsQ0FBQSxFQUFHLEtBQUtzVixLQUFBLEdBQVE7TUFDdEMwZixJQUFBLEVBQU07TUFDTjdaLElBQUEsRUFBTTtJQUNSLEdBQUcsS0FBSytiLGlCQUFBLEdBQW9CLE1BQU0sS0FBS1EsMEJBQUEsR0FBNkIsTUFBTTtNQUN4RSxJQUFJcjJCLENBQUE7TUFDSixDQUFDQSxDQUFBLEdBQUksS0FBS2lVLEtBQUEsQ0FBTTBmLElBQUEsS0FBUyxRQUFRM3pCLENBQUEsQ0FBRXVMLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTzBnQixDQUFBLENBQUVRLE9BQU87SUFDL0QsR0FBRyxLQUFLTywwQkFBQSxHQUE2QixNQUFNO01BQ3pDLElBQUl0MkIsQ0FBQTtNQUNKLENBQUNBLENBQUEsR0FBSSxLQUFLaVUsS0FBQSxDQUFNMGYsSUFBQSxLQUFTLFFBQVEzekIsQ0FBQSxDQUFFdUwsU0FBQSxDQUFVc0osTUFBQSxDQUFPMGdCLENBQUEsQ0FBRU8sT0FBTztJQUMvRCxHQUFHLEtBQUtTLG1CQUFBLEdBQXNCLE1BQU07TUFDbEMsSUFBSXYyQixDQUFBLEVBQUdVLENBQUE7TUFDUCxDQUFDVixDQUFBLEdBQUksS0FBS2lVLEtBQUEsQ0FBTTZGLElBQUEsS0FBUyxRQUFROVosQ0FBQSxDQUFFdUwsU0FBQSxDQUFVc0osTUFBQSxDQUFPMGdCLENBQUEsQ0FBRVksZUFBZSxJQUFJejFCLENBQUEsR0FBSSxLQUFLdVQsS0FBQSxDQUFNNkYsSUFBQSxLQUFTLFFBQVFwWixDQUFBLENBQUU4UyxtQkFBQSxDQUFvQixnQkFBZ0IsS0FBSytpQixtQkFBbUI7SUFDekssR0FBRyxLQUFLdGlCLEtBQUEsQ0FBTTBmLElBQUEsR0FBTyxLQUFLdG9CLElBQUEsQ0FBSzFNLENBQUEsRUFBR0ssQ0FBQztFQUNyQztFQUlBLElBQUl3M0IsV0FBQSxFQUFhO0lBQ2YsT0FBTyxLQUFLcEMsTUFBQSxDQUFPb0MsVUFBQSxLQUFlO0VBQ3BDO0VBSUEsSUFBSXZZLE9BQUEsRUFBUztJQUNYLE9BQU8sS0FBS21XLE1BQUEsQ0FBT25XLE1BQUE7RUFDckI7RUFJQSxJQUFJNlYsTUFBQSxFQUFRO0lBQ1YsT0FBTyxLQUFLTSxNQUFBLENBQU9OLEtBQUE7RUFDckI7RUFJQSxJQUFJMkMsMkJBQUEsRUFBNkI7SUFDL0IsT0FBTyxLQUFLWixpQkFBQSxLQUFzQjtFQUNwQztFQUlBLElBQUlhLFVBQUEsRUFBWTtJQUNkLE9BQU8sS0FBS3ppQixLQUFBLENBQU0wZixJQUFBLEtBQVMsT0FBTyxRQUFLLEtBQUsxZixLQUFBLENBQU0wZixJQUFBLENBQUtwb0IsU0FBQSxDQUFVeEosUUFBQSxDQUFTd3pCLENBQUEsQ0FBRUksT0FBTztFQUNyRjtFQUlBekIsV0FBQSxFQUFhO0lBQ1gsT0FBTyxLQUFLamdCLEtBQUEsQ0FBTTBmLElBQUE7RUFDcEI7RUFJQWMsWUFBQSxFQUFjO0lBQ1osSUFBSSxLQUFLZ0MsMEJBQUEsSUFBOEIsS0FBS1osaUJBQUEsS0FBc0IsTUFBTTtNQUN0RSxLQUFLYyxnQ0FBQSxDQUFpQyxLQUFLZCxpQkFBaUI7TUFDNUQ7SUFDRjtJQUNBLEtBQUtjLGdDQUFBLENBQWlDLEtBQUt2QyxNQUFNO0VBQ25EO0VBTUF3QyxhQUFhajRCLENBQUEsRUFBRztJQUNkLElBQUlLLENBQUE7SUFDSixDQUFDQSxDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTTBmLElBQUEsS0FBUyxRQUFRMzBCLENBQUEsQ0FBRXVNLFNBQUEsQ0FBVTBTLE1BQUEsQ0FBT3NYLENBQUEsQ0FBRUUsTUFBQSxFQUFROTJCLENBQUM7RUFDakU7RUFNQWs0QixhQUFhbDRCLENBQUEsRUFBRztJQUNkLElBQUlLLENBQUE7SUFDSixDQUFDQSxDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTTBmLElBQUEsS0FBUyxRQUFRMzBCLENBQUEsQ0FBRXVNLFNBQUEsQ0FBVTBTLE1BQUEsQ0FBT3NYLENBQUEsQ0FBRUssTUFBQSxFQUFRajNCLENBQUM7RUFDakU7RUFJQW00QixNQUFBLEVBQVE7SUFDTixLQUFLTCwwQkFBQSxJQUE4QixLQUFLTSx1QkFBQSxDQUF3QjtFQUNsRTtFQUlBQyxRQUFBLEVBQVU7SUFDUixLQUFLQyxtQ0FBQSxDQUFvQztFQUMzQztFQU9BNXJCLEtBQUsxTSxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNULElBQUk2RCxDQUFBLEVBQUdHLENBQUE7SUFDUCxNQUFNaEQsQ0FBQSxJQUFLaEIsQ0FBQSxJQUFLLE9BQU8sU0FBU0EsQ0FBQSxDQUFFazRCLFVBQUEsS0FBZTtNQUFPeDJCLENBQUEsR0FBSXVLLENBQUEsQ0FBRUksSUFBQSxDQUFLckwsQ0FBQSxFQUFHdTFCLENBQUEsQ0FBRUMsU0FBQSxFQUFXO1FBQ2pGdm9CLElBQUEsRUFBTWpOLENBQUEsS0FBTSxXQUFXLFdBQVc7TUFDcEMsQ0FBQztJQUNELE9BQU9yQixDQUFBLENBQUVxSixJQUFBLEtBQVN0SCxDQUFBLENBQUU0TyxPQUFBLENBQVE2bkIsUUFBQSxHQUFXeDRCLENBQUEsQ0FBRXFKLElBQUEsR0FBTyxLQUFLaU0sS0FBQSxDQUFNNkYsSUFBQSxHQUFPN08sQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxDQUFDa3FCLENBQUEsQ0FBRXpiLElBQUEsRUFBTXliLENBQUEsQ0FBRVUsUUFBUSxHQUFHO01BQ3BHdm9CLFNBQUEsRUFBVy9PLENBQUEsQ0FBRW1iLElBQUEsSUFBUStZO0lBQ3ZCLENBQUMsR0FBR255QixDQUFBLENBQUU3QixXQUFBLENBQVksS0FBS29WLEtBQUEsQ0FBTTZGLElBQUksR0FBR25iLENBQUEsQ0FBRW0xQixLQUFBLEtBQVUsVUFBVXB6QixDQUFBLENBQUU3QixXQUFBLENBQVlvTSxDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPa3FCLENBQUEsQ0FBRXpCLEtBQUEsRUFBTztNQUM3RnBtQixTQUFBLEVBQVcvTyxDQUFBLENBQUVtMUIsS0FBQSxJQUFTO0lBQ3hCLENBQUMsQ0FBQyxHQUFHbjFCLENBQUEsQ0FBRXk0QixjQUFBLElBQWtCMTJCLENBQUEsQ0FBRTdCLFdBQUEsQ0FBWW9NLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU9rcUIsQ0FBQSxDQUFFUyxjQUFBLEVBQWdCO01BQ3JFN29CLFdBQUEsRUFBYXhPLENBQUEsQ0FBRXk0QjtJQUNqQixDQUFDLENBQUMsR0FBRyxLQUFLdkMsV0FBQSxJQUFlbjBCLENBQUEsQ0FBRTdCLFdBQUEsQ0FBWW9NLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FBQ2txQixDQUFBLENBQUV6YixJQUFBLEVBQU15YixDQUFBLENBQUVXLGdCQUFnQixHQUFHO01BQ2pGeG9CLFNBQUEsRUFBV2dsQjtJQUNiLENBQUMsQ0FBQyxHQUFHLEtBQUsyQyxRQUFBLElBQVkzMEIsQ0FBQSxDQUFFNkssU0FBQSxDQUFVQyxHQUFBLENBQUkrcEIsQ0FBQSxDQUFFRSxNQUFNLEdBQUc5MkIsQ0FBQSxDQUFFNjNCLFVBQUEsSUFBYzkxQixDQUFBLENBQUU2SyxTQUFBLENBQVVDLEdBQUEsQ0FBSStwQixDQUFBLENBQUVHLFFBQVEsR0FBRy8yQixDQUFBLENBQUUwNEIsSUFBQSxLQUFTLFlBQVl4MEIsQ0FBQSxHQUFJN0QsQ0FBQSxJQUFLLE9BQU8sU0FBU0EsQ0FBQSxDQUFFcTRCLElBQUEsS0FBUyxPQUFPLFNBQVN4MEIsQ0FBQSxDQUFFeTBCLE9BQUEsTUFBYSxTQUFNLEtBQUszQyxPQUFBLENBQVFqMEIsQ0FBQSxFQUFHO01BQzVNLEdBQUcvQixDQUFBLENBQUUwNEIsSUFBQTtNQUNMekMsUUFBQSxJQUFZNXhCLENBQUEsR0FBSWhFLENBQUEsSUFBSyxPQUFPLFNBQVNBLENBQUEsQ0FBRXE0QixJQUFBLEtBQVMsT0FBTyxTQUFTcjBCLENBQUEsQ0FBRTR4QixRQUFBLEtBQWE7SUFDakYsQ0FBQyxHQUFHbDBCLENBQUE7RUFDTjtFQU1BNjJCLHVCQUF1QjU0QixDQUFBLEVBQUc7SUFDeEIsSUFBSSxLQUFLc1YsS0FBQSxDQUFNMGYsSUFBQSxLQUFTLE1BQ3RCO0lBQ0YsTUFBTTMwQixDQUFBLEdBQUk7UUFDUixHQUFHLEtBQUtvMUIsTUFBQTtRQUNSLEdBQUd6MUIsQ0FBQTtRQUNINjRCLFlBQUEsRUFBYyxrQkFBa0I3NEIsQ0FBQSxHQUFJQSxDQUFBLENBQUU2NEIsWUFBQSxHQUFlO01BQ3ZEO01BQUd4M0IsQ0FBQSxHQUFJLEtBQUtxTCxJQUFBLENBQUtyTSxDQUFDO0lBQ2xCLEtBQUtpVixLQUFBLENBQU0wZixJQUFBLENBQUtqbUIsU0FBQSxHQUFZMU4sQ0FBQSxDQUFFME4sU0FBQSxFQUFXLEtBQUt1RyxLQUFBLENBQU0wZixJQUFBLENBQUtwb0IsU0FBQSxDQUFVQyxHQUFBLENBQUkrcEIsQ0FBQSxDQUFFTSxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBQSxHQUFvQmwzQixDQUFBLEVBQUcsS0FBSzg0QixrQ0FBQSxDQUFtQztFQUNuSztFQUlBVix3QkFBQSxFQUEwQjtJQUN4QixJQUFJLEtBQUs5aUIsS0FBQSxDQUFNMGYsSUFBQSxLQUFTLE1BQ3RCO0lBQ0YsTUFBTWgxQixDQUFBLEdBQUksS0FBSzBNLElBQUEsQ0FBSyxLQUFLK29CLE1BQU07SUFDL0IsS0FBS25nQixLQUFBLENBQU0wZixJQUFBLENBQUtqbUIsU0FBQSxHQUFZL08sQ0FBQSxDQUFFK08sU0FBQSxFQUFXLEtBQUt1RyxLQUFBLENBQU0wZixJQUFBLENBQUtwb0IsU0FBQSxDQUFVc0osTUFBQSxDQUFPMGdCLENBQUEsQ0FBRU0saUJBQWlCLEdBQUcsS0FBS0EsaUJBQUEsR0FBb0IsTUFBTSxLQUFLb0IsbUNBQUEsQ0FBb0M7RUFDMUs7RUFLQVEsbUNBQUEsRUFBcUM7SUFDbkMsSUFBSTk0QixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUE7SUFDVixDQUFDckIsQ0FBQSxHQUFJLEtBQUtzVixLQUFBLENBQU0wZixJQUFBLEtBQVMsUUFBUWgxQixDQUFBLENBQUU0TSxTQUFBLENBQVVDLEdBQUEsQ0FBSStwQixDQUFBLENBQUVPLE9BQU8sSUFBSTkyQixDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTTBmLElBQUEsS0FBUyxRQUFRMzBCLENBQUEsQ0FBRXVNLFNBQUEsQ0FBVUMsR0FBQSxDQUFJK3BCLENBQUEsQ0FBRVEsT0FBTyxJQUFJLzFCLENBQUEsR0FBSSxLQUFLaVUsS0FBQSxDQUFNMGYsSUFBQSxLQUFTLFFBQVEzekIsQ0FBQSxDQUFFdVQsZ0JBQUEsQ0FBaUIsY0FBYyxLQUFLK2lCLDBCQUFBLEVBQTRCO01BQUV4a0IsSUFBQSxFQUFNO0lBQUcsQ0FBQztFQUMzTztFQUlBbWxCLG9DQUFBLEVBQXNDO0lBQ3BDLElBQUl0NEIsQ0FBQTtJQUNKLEtBQUswM0IsMEJBQUEsQ0FBMkIsR0FBRyxLQUFLQywwQkFBQSxDQUEyQixJQUFJMzNCLENBQUEsR0FBSSxLQUFLc1YsS0FBQSxDQUFNMGYsSUFBQSxLQUFTLFFBQVFoMUIsQ0FBQSxDQUFFNlUsbUJBQUEsQ0FBb0IsY0FBYyxLQUFLOGlCLDBCQUEwQjtFQUM1SztFQU1BSyxpQ0FBaUNoNEIsQ0FBQSxFQUFHO0lBQ2xDLElBQUlLLENBQUE7SUFDSixJQUFJLEVBQUUsa0JBQWtCTCxDQUFBLEtBQU1BLENBQUEsQ0FBRTY0QixZQUFBLEtBQWlCLFFBQy9DLElBQUk7TUFDRixDQUFDeDRCLENBQUEsR0FBSUwsQ0FBQSxDQUFFKzFCLFVBQUEsS0FBZSxRQUFRMTFCLENBQUEsQ0FBRWMsSUFBQSxDQUFLbkIsQ0FBQSxFQUFHQSxDQUFDLEdBQUcsS0FBS280Qix1QkFBQSxDQUF3QjtJQUMzRSxRQUFFO01BQ0EsS0FBS1csWUFBQSxDQUFhO0lBQ3BCLE9BRUEsS0FBS0gsc0JBQUEsQ0FBdUI1NEIsQ0FBQSxDQUFFNjRCLFlBQVk7RUFDOUM7RUFJQUUsYUFBQSxFQUFlO0lBQ2IsSUFBSS80QixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUE7SUFDVixDQUFDckIsQ0FBQSxHQUFJLEtBQUtzVixLQUFBLENBQU02RixJQUFBLEtBQVMsUUFBUW5iLENBQUEsQ0FBRTRNLFNBQUEsQ0FBVXhKLFFBQUEsQ0FBU3d6QixDQUFBLENBQUVZLGVBQWUsT0FBT24zQixDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTTZGLElBQUEsS0FBUyxRQUFROWEsQ0FBQSxDQUFFdU0sU0FBQSxDQUFVQyxHQUFBLENBQUkrcEIsQ0FBQSxDQUFFWSxlQUFlLElBQUluMkIsQ0FBQSxHQUFJLEtBQUtpVSxLQUFBLENBQU02RixJQUFBLEtBQVMsUUFBUTlaLENBQUEsQ0FBRXVULGdCQUFBLENBQWlCLGdCQUFnQixLQUFLZ2pCLG1CQUFtQjtFQUNoUDtBQUNGO0FBQ0EsSUFBTW9CLEVBQUEsR0FBS25FLEVBQUEsQ0FBRywyQkFBMkI7RUFBR29FLEVBQUEsR0FBSztJQUMvQ3BDLFNBQUEsRUFBV21DLEVBQUEsQ0FBRztJQUNkRSxJQUFBLEVBQU1GLEVBQUEsQ0FBRyxNQUFNO0lBQ2YvQixNQUFBLEVBQVErQixFQUFBLENBQUcsTUFBTSxRQUFRO0VBQzNCO0FBQ0EsSUFBTUcsRUFBQSxHQUFOLGNBQWlCM0QsRUFBQSxDQUFHO0VBSWxCL3pCLFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBRyxLQUFLNlQsS0FBQSxHQUFRO01BQ3BCMGYsSUFBQSxFQUFNMW9CLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU91c0IsRUFBQSxDQUFHcEMsU0FBUztNQUNoQ3FDLElBQUEsRUFBTTVzQixDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPdXNCLEVBQUEsQ0FBR0MsSUFBSTtJQUM3QixHQUFHLEtBQUs1akIsS0FBQSxDQUFNMGYsSUFBQSxDQUFLOTBCLFdBQUEsQ0FBWSxLQUFLb1YsS0FBQSxDQUFNNGpCLElBQUk7RUFDaEQ7RUFJQTNELFdBQUEsRUFBYTtJQUNYLE9BQU8sS0FBS2pnQixLQUFBLENBQU0wZixJQUFBO0VBQ3BCO0VBTUFrRCxhQUFhbDRCLENBQUEsRUFBRztJQUNkLElBQUlLLENBQUE7SUFDSixDQUFDQSxDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTTBmLElBQUEsS0FBUyxRQUFRMzBCLENBQUEsQ0FBRXVNLFNBQUEsQ0FBVTBTLE1BQUEsQ0FBTzJaLEVBQUEsQ0FBR2hDLE1BQUEsRUFBUWozQixDQUFDO0VBQ2xFO0FBQ0Y7QUFDQSxJQUFJbzVCLENBQUEsR0FBcUIsZ0JBQUN0NEIsQ0FBQSxLQUFPQSxDQUFBLENBQUV1NEIsTUFBQSxHQUFTLFVBQVV2NEIsQ0FBQSxDQUFFdzRCLGdCQUFBLEdBQW1CLHNCQUFzQng0QixDQUFBLEdBQUlzNEIsQ0FBQSxJQUFLLENBQUMsQ0FBQztBQUM1RyxJQUFNRyxDQUFBLEdBQUkxRSxFQUFBLENBQUcsWUFBWTtFQUFHMkUsQ0FBQSxHQUFJO0lBQzlCbm9CLE9BQUEsRUFBU2tvQixDQUFBLENBQUU7SUFDWEUsZ0JBQUEsRUFBa0JGLENBQUEsQ0FBRSxXQUFXO0lBQy9CRyxjQUFBLEVBQWdCSCxDQUFBLENBQUUsTUFBTSxVQUFVO0lBQ2xDSSxlQUFBLEVBQWlCSixDQUFBLENBQUUsTUFBTSxXQUFXO0lBQ3BDSyxhQUFBLEVBQWVMLENBQUEsQ0FBRSxNQUFNLFFBQVE7SUFDL0JNLE1BQUEsRUFBUU4sQ0FBQSxDQUFFLFFBQVE7SUFDbEJPLG1CQUFBLEVBQXFCUCxDQUFBLENBQUUsdUJBQXVCO0lBQzlDUSw0QkFBQSxFQUE4QlIsQ0FBQSxDQUFFLHlCQUF5QixXQUFXO0lBQ3BFaEksS0FBQSxFQUFPZ0ksQ0FBQSxDQUFFLE9BQU87SUFDaEJTLE9BQUEsRUFBU1QsQ0FBQSxDQUFFLFNBQVM7SUFDcEJVLGFBQUEsRUFBZVYsQ0FBQSxDQUFFLFdBQVcsUUFBUTtJQUNwQ1csYUFBQSxFQUFlWCxDQUFBLENBQUUsTUFBTSxRQUFRO0lBQy9CWSxxQkFBQSxFQUF3QnI1QixDQUFBLElBQU15NEIsQ0FBQSxDQUFFLE1BQU0sZ0JBQWdCejRCLENBQUEsQ0FBRStFLFFBQUEsQ0FBUyxHQUFHO0lBQ3BFdTBCLGFBQUEsRUFBZWIsQ0FBQSxDQUFFLE1BQU0sUUFBUTtJQUMvQmMsYUFBQSxFQUFlZCxDQUFBLENBQUUsUUFBUTtFQUMzQjtBQUNBLElBQUllLEVBQUEsR0FBc0IsZ0JBQUN4NUIsQ0FBQSxLQUFPQSxDQUFBLENBQUV5NUIsWUFBQSxHQUFlLG1CQUFtQno1QixDQUFBLENBQUUwNUIsYUFBQSxHQUFnQixvQkFBb0IxNUIsQ0FBQSxDQUFFMjVCLGtCQUFBLEdBQXFCLDBCQUEwQjM1QixDQUFBLENBQUU0NUIsZUFBQSxHQUFrQix1QkFBdUI1NUIsQ0FBQSxDQUFFNjVCLGNBQUEsR0FBaUIsc0JBQXNCNzVCLENBQUEsR0FBSXc1QixFQUFBLElBQU0sQ0FBQyxDQUFDO0FBQzdQLElBQU1NLEVBQUEsR0FBSy9GLEVBQUEsQ0FBRyxzQkFBc0I7RUFBR2dHLEVBQUEsR0FBSztJQUMxQzdGLElBQUEsRUFBTTRGLEVBQUEsQ0FBRztJQUNUM0QsTUFBQSxFQUFRMkQsRUFBQSxDQUFHLE1BQU0sUUFBUTtFQUMzQjtBQUNBLElBQU1FLEVBQUEsR0FBTixjQUFpQnRGLEVBQUEsQ0FBRztFQVFsQi96QixZQUFZekIsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDaEIsSUFBSWdCLENBQUEsRUFBR1UsQ0FBQTtJQUNQLE1BQU0vQixDQUFDLEdBQUcsS0FBS3NWLEtBQUEsR0FBUTtNQUNyQjBmLElBQUEsRUFBTTFvQixDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPbXVCLEVBQUEsQ0FBRzdGLElBQUk7SUFDN0IsR0FBRyxLQUFLMWYsS0FBQSxDQUFNMGYsSUFBQSxDQUFLOTBCLFdBQUEsQ0FBWUYsQ0FBQSxDQUFFdVUsT0FBTyxHQUFHdlUsQ0FBQSxDQUFFcUosSUFBQSxLQUFTLEtBQUtpTSxLQUFBLENBQU0wZixJQUFBLENBQUtya0IsT0FBQSxDQUFRNm5CLFFBQUEsR0FBV3g0QixDQUFBLENBQUVxSixJQUFBLEdBQU9ySixDQUFBLENBQUUwNEIsSUFBQSxLQUFTLFlBQVlyM0IsQ0FBQSxHQUFJaEIsQ0FBQSxJQUFLLE9BQU8sU0FBU0EsQ0FBQSxDQUFFcTRCLElBQUEsS0FBUyxPQUFPLFNBQVNyM0IsQ0FBQSxDQUFFczNCLE9BQUEsTUFBYSxTQUFNLEtBQUszQyxPQUFBLENBQVEsS0FBSzFnQixLQUFBLENBQU0wZixJQUFBLEVBQU07TUFDOU4sR0FBR2gxQixDQUFBLENBQUUwNEIsSUFBQTtNQUNMekMsUUFBQSxJQUFZbDBCLENBQUEsR0FBSTFCLENBQUEsSUFBSyxPQUFPLFNBQVNBLENBQUEsQ0FBRXE0QixJQUFBLEtBQVMsT0FBTyxTQUFTMzJCLENBQUEsQ0FBRWswQixRQUFBLEtBQWE7SUFDakYsQ0FBQztFQUNIO0VBSUFWLFdBQUEsRUFBYTtJQUNYLE9BQU8sS0FBS2pnQixLQUFBLENBQU0wZixJQUFBO0VBQ3BCO0VBTUFrRCxhQUFhbDRCLENBQUEsRUFBRztJQUNkLElBQUlLLENBQUE7SUFDSixDQUFDQSxDQUFBLEdBQUksS0FBS2lWLEtBQUEsQ0FBTTBmLElBQUEsS0FBUyxRQUFRMzBCLENBQUEsQ0FBRXVNLFNBQUEsQ0FBVTBTLE1BQUEsQ0FBT3ViLEVBQUEsQ0FBRzVELE1BQUEsRUFBUWozQixDQUFDO0VBQ2xFO0VBSUErNkIsWUFBQSxFQUFjO0lBQ1osTUFBTS82QixDQUFBLEdBQUksS0FBS3NWLEtBQUEsQ0FBTTBmLElBQUEsQ0FBS2p5QixnQkFBQSxDQUN4QixXQUFXdUosQ0FBQSxDQUFFZ0IsaUJBQUEsRUFDZjtJQUNBLE9BQU83SixLQUFBLENBQU1vTCxJQUFBLENBQUs3TyxDQUFDO0VBQ3JCO0FBQ0Y7QUFDQSxJQUFNZzdCLEVBQUEsR0FBTixjQUFpQmhvQixFQUFBLENBQUc7RUFRbEJ2UixZQUFZekIsQ0FBQSxFQUFHSyxDQUFBLEdBQUksQ0FBQyxHQUFHO0lBQ3JCLE1BQU0sR0FBRyxLQUFLbzFCLE1BQUEsR0FBU3oxQixDQUFBLEVBQUcsS0FBS2k3QixpQkFBQSxHQUFvQjU2QixDQUFBLEVBQUcsS0FBS2tWLFNBQUEsR0FBWSxJQUFJbEIsRUFBQSxDQUFHLEdBQUcsS0FBSzZtQixRQUFBLEdBQVc7TUFDL0ZDLFlBQUEsRUFBYztNQUNkdEIsTUFBQSxFQUFRO0lBQ1YsR0FBRyxLQUFLdEksS0FBQSxHQUFRLEtBQUs2SixVQUFBLENBQVdwN0IsQ0FBQSxDQUFFdXhCLEtBQUssR0FBR3Z4QixDQUFBLENBQUVrN0IsUUFBQSxLQUFhLEtBQUtBLFFBQUEsR0FBVztNQUN2RSxHQUFHLEtBQUtBLFFBQUE7TUFDUixHQUFHbDdCLENBQUEsQ0FBRWs3QjtJQUNQLElBQUksS0FBSzVsQixLQUFBLEdBQVEsQ0FBQyxHQUFHLEtBQUtBLEtBQUEsQ0FBTW1rQixnQkFBQSxHQUFtQm50QixDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPLENBQUM4c0IsQ0FBQSxDQUFFQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUtua0IsS0FBQSxDQUFNd2tCLG1CQUFBLEdBQXNCeHRCLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FBQzhzQixDQUFBLENBQUVNLG1CQUFtQixHQUFHO01BQzlKdHJCLFdBQUEsRUFBYSxLQUFLMHNCLFFBQUEsQ0FBU0M7SUFDN0IsQ0FBQyxHQUFHLEtBQUs3bEIsS0FBQSxDQUFNbWtCLGdCQUFBLENBQWlCdjVCLFdBQUEsQ0FBWSxLQUFLb1YsS0FBQSxDQUFNd2tCLG1CQUFtQixHQUFHLEtBQUt4a0IsS0FBQSxDQUFNaWMsS0FBQSxHQUFRamxCLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FBQzhzQixDQUFBLENBQUVqSSxLQUFLLENBQUMsR0FBRyxLQUFLQSxLQUFBLENBQU16dkIsT0FBQSxDQUFTVCxDQUFBLElBQU07TUFDbEosTUFBTVUsQ0FBQSxHQUFJVixDQUFBLENBQUVrMEIsVUFBQSxDQUFXO01BQ3ZCeHpCLENBQUEsS0FBTSxRQUFRLEtBQUt1VCxLQUFBLENBQU1pYyxLQUFBLENBQU1yeEIsV0FBQSxDQUFZNkIsQ0FBQztJQUM5QyxDQUFDLEdBQUcsS0FBS3VULEtBQUEsQ0FBTW1rQixnQkFBQSxDQUFpQnY1QixXQUFBLENBQVksS0FBS29WLEtBQUEsQ0FBTWljLEtBQUssR0FBRyxLQUFLaGMsU0FBQSxDQUFVckMsRUFBQSxDQUFHLEtBQUtvQyxLQUFBLENBQU1ta0IsZ0JBQUEsRUFBa0IsU0FBVXA0QixDQUFBLElBQU0sS0FBS3kwQixXQUFBLENBQVl6MEIsQ0FBQyxDQUFDLEdBQUcsS0FBS2lVLEtBQUEsQ0FBTWpFLE9BQUEsR0FBVS9FLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FDckw4c0IsQ0FBQSxDQUFFbm9CLE9BQUEsRUFDRixLQUFLb2tCLE1BQUEsQ0FBTzRGLEtBQUEsQ0FDYixHQUFHLEtBQUsvbEIsS0FBQSxDQUFNakUsT0FBQSxDQUFRblIsV0FBQSxDQUFZLEtBQUtvVixLQUFBLENBQU1ta0IsZ0JBQWdCO0VBQ2hFO0VBSUEsSUFBSTZCLGFBQUEsRUFBZTtJQUNqQixPQUFPLEtBQUsvSixLQUFBLENBQU01a0IsTUFBQSxDQUFRM00sQ0FBQSxJQUFNQSxDQUFBLFlBQWF5M0IsRUFBRTtFQUNqRDtFQUlBbEMsV0FBQSxFQUFhO0lBQ1gsT0FBTyxLQUFLamdCLEtBQUEsQ0FBTWpFLE9BQUE7RUFDcEI7RUFJQXdWLEtBQUEsRUFBTztJQUNMLEtBQUt2UixLQUFBLENBQU1qRSxPQUFBLENBQVF6RSxTQUFBLENBQVVDLEdBQUEsQ0FBSTJzQixDQUFBLENBQUVJLGFBQWEsR0FBRyxLQUFLQyxNQUFBLEtBQVcsVUFBVSxLQUFLQSxNQUFBLENBQU9saEIsS0FBQSxDQUFNO0VBQ2pHO0VBSUFvVyxLQUFBLEVBQU87SUFDTCxLQUFLelosS0FBQSxDQUFNakUsT0FBQSxDQUFRekUsU0FBQSxDQUFVc0osTUFBQSxDQUFPc2pCLENBQUEsQ0FBRUksYUFBYSxHQUFHLEtBQUt0a0IsS0FBQSxDQUFNakUsT0FBQSxDQUFRekUsU0FBQSxDQUFVc0osTUFBQSxDQUFPc2pCLENBQUEsQ0FBRUUsY0FBYyxHQUFHLEtBQUs0QixZQUFBLENBQWF4NUIsT0FBQSxDQUFTOUIsQ0FBQSxJQUFNQSxDQUFBLENBQUVtNEIsS0FBQSxDQUFNLENBQUMsR0FBRyxLQUFLMEIsTUFBQSxLQUFXLFVBQVUsS0FBS0EsTUFBQSxDQUFPM1gsS0FBQSxDQUFNLEdBQUcsS0FBSzdPLElBQUEsQ0FBSytsQixDQUFBLENBQUVDLE1BQU07RUFDN047RUFJQTdsQixRQUFBLEVBQVU7SUFDUixJQUFJeFQsQ0FBQTtJQUNKLEtBQUt1eEIsS0FBQSxDQUFNenZCLE9BQUEsQ0FBU3pCLENBQUEsSUFBTUEsQ0FBQSxDQUFFbVQsT0FBQSxDQUFRLENBQUMsR0FBRyxLQUFLOEIsS0FBQSxDQUFNakUsT0FBQSxDQUFRNkUsTUFBQSxDQUFPLEdBQUcsS0FBS1gsU0FBQSxDQUFVTixTQUFBLENBQVUsSUFBSWpWLENBQUEsR0FBSSxLQUFLNjVCLE1BQUEsS0FBVyxRQUFRNzVCLENBQUEsQ0FBRXdULE9BQUEsQ0FBUTtFQUMxSTtFQU1BK25CLG1CQUFtQnY3QixDQUFBLEVBQUc7SUFDcEIsTUFBTUssQ0FBQSxHQUFJLEtBQUtreEIsS0FBQSxDQUFNbm5CLElBQUEsQ0FBTS9JLENBQUEsSUFBTUEsQ0FBQSxDQUFFZ0ksSUFBQSxLQUFTckosQ0FBQztJQUM3QyxLQUFLdzdCLGVBQUEsQ0FBZ0JuN0IsQ0FBQztFQUN4QjtFQU1BKzZCLFdBQVdwN0IsQ0FBQSxFQUFHO0lBQ1osT0FBT0EsQ0FBQSxDQUFFdU4sR0FBQSxDQUFLbE4sQ0FBQSxJQUFNO01BQ2xCLFFBQVFBLENBQUEsQ0FBRWlPLElBQUE7UUFBQSxLQUNIb04sQ0FBQSxDQUFFRSxTQUFBO1VBQ0wsT0FBTyxJQUFJdWQsRUFBQSxDQUFHO1FBQUEsS0FDWHpkLENBQUEsQ0FBRUcsSUFBQTtVQUNMLE9BQU8sSUFBSWlmLEVBQUEsQ0FBR3o2QixDQUFBLEVBQUcsS0FBSzQ2QixpQkFBQSxDQUFrQnZmLENBQUEsQ0FBRUcsSUFBQSxDQUFLO1FBQUE7VUFFL0MsT0FBTyxJQUFJNGIsRUFBQSxDQUFHcDNCLENBQUEsRUFBRyxLQUFLNDZCLGlCQUFBLENBQWtCdmYsQ0FBQSxDQUFFQyxPQUFBLENBQVE7TUFBQTtJQUV4RCxDQUFDO0VBQ0g7RUFNQThmLGNBQWN6N0IsQ0FBQSxFQUFHO0lBQ2YsT0FBTyxLQUFLdXhCLEtBQUEsQ0FBTTVrQixNQUFBLENBQVF0TSxDQUFBLElBQU1BLENBQUEsWUFBYW8zQixFQUFBLElBQU1wM0IsQ0FBQSxZQUFheTZCLEVBQUUsRUFBRTF3QixJQUFBLENBQU0vSixDQUFBLElBQU07TUFDOUUsTUFBTWdCLENBQUEsR0FBSWhCLENBQUEsQ0FBRWsxQixVQUFBLENBQVc7TUFDdkIsT0FBT2wwQixDQUFBLEtBQU0sT0FBTyxRQUFLckIsQ0FBQSxDQUFFMDdCLFlBQUEsQ0FBYSxFQUFFajBCLFFBQUEsQ0FBU3BHLENBQUM7SUFDdEQsQ0FBQztFQUNIO0VBTUFtNkIsZ0JBQWdCeDdCLENBQUEsRUFBRztJQUNqQixJQUFJLEVBQUUsZ0JBQWdCQSxDQUFBLElBQUtBLENBQUEsQ0FBRTYzQixVQUFBLEdBQWE7TUFDeEMsSUFBSTczQixDQUFBLENBQUVrMkIsV0FBQSxFQUFhO1FBQ2pCLEtBQUt5RixlQUFBLENBQWdCMzdCLENBQUMsR0FBRyxpQkFBaUJBLENBQUEsSUFBSyxPQUFPQSxDQUFBLENBQUU4MUIsV0FBQSxJQUFlLGNBQWM5MUIsQ0FBQSxDQUFFODFCLFdBQUEsQ0FBWTtRQUNuRztNQUNGO01BQ0EsS0FBS3dGLFlBQUEsQ0FBYTN1QixNQUFBLENBQVF0TSxDQUFBLElBQU1BLENBQUEsS0FBTUwsQ0FBQyxFQUFFOEIsT0FBQSxDQUFTekIsQ0FBQSxJQUFNQSxDQUFBLENBQUU4M0IsS0FBQSxDQUFNLENBQUMsR0FBRyxpQkFBaUJuNEIsQ0FBQSxJQUFLLE9BQU9BLENBQUEsQ0FBRTgxQixXQUFBLElBQWUsY0FBYzkxQixDQUFBLENBQUU4MUIsV0FBQSxDQUFZLEdBQUcsS0FBSzhGLDRCQUFBLENBQTZCNTdCLENBQUMsR0FBR0EsQ0FBQSxDQUFFeTJCLGVBQUEsS0FBb0IsS0FBSzFILElBQUEsQ0FBSyxHQUFHLEtBQUsxYixJQUFBLENBQUsrbEIsQ0FBQSxDQUFFRSxnQkFBZ0I7SUFDeFA7RUFDRjtFQU1BeEQsWUFBWTkxQixDQUFBLEVBQUc7SUFDYixNQUFNSyxDQUFBLEdBQUksS0FBS283QixhQUFBLENBQWN6N0IsQ0FBQztJQUM5QkssQ0FBQSxLQUFNLFVBQVUsS0FBS203QixlQUFBLENBQWdCbjdCLENBQUM7RUFDeEM7RUFTQXU3Qiw2QkFBNkI1N0IsQ0FBQSxFQUFHO0lBQzlCLElBQUlBLENBQUEsWUFBYXkzQixFQUFBLEtBQU96M0IsQ0FBQSxDQUFFc2YsTUFBQSxLQUFXLFFBQU10ZixDQUFBLENBQUVpNEIsWUFBQSxDQUFhLEdBQUcsT0FBT2o0QixDQUFBLENBQUVzZixNQUFBLElBQVUsV0FBVztNQUN6RixNQUFNamYsQ0FBQSxHQUFJLEtBQUtpN0IsWUFBQSxDQUFhM3VCLE1BQUEsQ0FBUXRMLENBQUEsSUFBTUEsQ0FBQSxDQUFFaWUsTUFBQSxLQUFXdGYsQ0FBQSxDQUFFc2YsTUFBTTtNQUMvRCxJQUFJamYsQ0FBQSxDQUFFMkMsTUFBQSxLQUFXLEdBQUc7UUFDbEJoRCxDQUFBLENBQUVpNEIsWUFBQSxDQUFhO1FBQ2Y7TUFDRjtNQUNBNTNCLENBQUEsQ0FBRXlCLE9BQUEsQ0FBU1QsQ0FBQSxJQUFNO1FBQ2ZBLENBQUEsQ0FBRTQyQixZQUFBLENBQWE1MkIsQ0FBQSxLQUFNckIsQ0FBQztNQUN4QixDQUFDO0lBQ0g7RUFDRjtBQUNGO0FBQ0EsSUFBSTY3QixFQUFBLEdBQXNCLGdCQUFDLzZCLENBQUEsS0FBT0EsQ0FBQSxDQUFFZzdCLE1BQUEsR0FBUyxVQUFVaDdCLENBQUEsR0FBSSs2QixFQUFBLElBQU0sQ0FBQyxDQUFDO0FBQ25FLElBQU1FLEVBQUEsR0FBS2xILEVBQUEsQ0FBRyxrQkFBa0I7RUFBR21ILEVBQUEsR0FBSztJQUN0QzNkLE9BQUEsRUFBUzBkLEVBQUEsQ0FBRztJQUNaNWdCLElBQUEsRUFBTTRnQixFQUFBLENBQUcsTUFBTTtJQUNmaE8sS0FBQSxFQUFPZ08sRUFBQSxDQUFHLE9BQU87RUFDbkI7QUFDQSxJQUFNRSxFQUFBLEdBQU4sY0FBaUJqcEIsRUFBQSxDQUFHO0VBTWxCdlIsWUFBWTtJQUFFOHZCLEtBQUEsRUFBT3Z4QixDQUFBO0lBQUcrcUIsV0FBQSxFQUFhMXFCO0VBQUUsR0FBRztJQUN4QyxNQUFNLEdBQUcsS0FBS2tWLFNBQUEsR0FBWSxJQUFJbEIsRUFBQSxDQUFHLEdBQUcsS0FBS2tkLEtBQUEsR0FBUXZ4QixDQUFBLEVBQUcsS0FBS3FlLE9BQUEsR0FBVS9SLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU9zdkIsRUFBQSxDQUFHM2QsT0FBTztJQUMzRixNQUFNaGQsQ0FBQSxHQUFJaUwsQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBT3N2QixFQUFBLENBQUc3Z0IsSUFBQSxFQUFNO01BQy9CcE0sU0FBQSxFQUFXeWxCO0lBQ2IsQ0FBQztJQUNELEtBQUt6RyxLQUFBLEdBQVF6aEIsQ0FBQSxDQUFFSSxJQUFBLENBQUssU0FBU3N2QixFQUFBLENBQUdqTyxLQUFBLEVBQU87TUFDckNoRCxXQUFBLEVBQWExcUIsQ0FBQTtNQU1iNjdCLFFBQUEsRUFBVTtJQUNaLENBQUMsR0FBRyxLQUFLN2QsT0FBQSxDQUFRbmUsV0FBQSxDQUFZbUIsQ0FBQyxHQUFHLEtBQUtnZCxPQUFBLENBQVFuZSxXQUFBLENBQVksS0FBSzZ0QixLQUFLLEdBQUcsS0FBS3hZLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBRyxLQUFLNmEsS0FBQSxFQUFPLFNBQVMsTUFBTTtNQUNsSCxLQUFLb08sV0FBQSxHQUFjLEtBQUtwTyxLQUFBLENBQU1uc0IsS0FBQSxFQUFPLEtBQUt5UixJQUFBLENBQUt3b0IsRUFBQSxDQUFHQyxNQUFBLEVBQVE7UUFDeERNLEtBQUEsRUFBTyxLQUFLRCxXQUFBO1FBQ1o1SyxLQUFBLEVBQU8sS0FBSzhLO01BQ2QsQ0FBQztJQUNILENBQUM7RUFDSDtFQUlBOUcsV0FBQSxFQUFhO0lBQ1gsT0FBTyxLQUFLbFgsT0FBQTtFQUNkO0VBSUExRixNQUFBLEVBQVE7SUFDTixLQUFLb1YsS0FBQSxDQUFNcFYsS0FBQSxDQUFNO0VBQ25CO0VBSUF1SixNQUFBLEVBQVE7SUFDTixLQUFLNkwsS0FBQSxDQUFNbnNCLEtBQUEsR0FBUSxJQUFJLEtBQUt1NkIsV0FBQSxHQUFjLElBQUksS0FBSzlvQixJQUFBLENBQUt3b0IsRUFBQSxDQUFHQyxNQUFBLEVBQVE7TUFDakVNLEtBQUEsRUFBTztNQUNQN0ssS0FBQSxFQUFPLEtBQUs4SztJQUNkLENBQUM7RUFDSDtFQUlBN29CLFFBQUEsRUFBVTtJQUNSLEtBQUsrQixTQUFBLENBQVVOLFNBQUEsQ0FBVTtFQUMzQjtFQUlBLElBQUlvbkIsV0FBQSxFQUFhO0lBQ2YsT0FBTyxLQUFLOUssS0FBQSxDQUFNNWtCLE1BQUEsQ0FBUTNNLENBQUEsSUFBTSxLQUFLczhCLFNBQUEsQ0FBVXQ4QixDQUFDLENBQUM7RUFDbkQ7RUFNQXM4QixVQUFVdDhCLENBQUEsRUFBRztJQUNYLElBQUkrQixDQUFBLEVBQUdtQyxDQUFBO0lBQ1AsTUFBTTdELENBQUEsS0FBTTBCLENBQUEsR0FBSS9CLENBQUEsQ0FBRW0xQixLQUFBLEtBQVUsT0FBTyxTQUFTcHpCLENBQUEsQ0FBRW9HLFdBQUEsQ0FBWSxNQUFNO01BQUk5RyxDQUFBLElBQUs2QyxDQUFBLEdBQUksS0FBS2k0QixXQUFBLEtBQWdCLE9BQU8sU0FBU2o0QixDQUFBLENBQUVpRSxXQUFBLENBQVk7SUFDaEksT0FBTzlHLENBQUEsS0FBTSxTQUFTaEIsQ0FBQSxDQUFFb0gsUUFBQSxDQUFTcEcsQ0FBQyxJQUFJO0VBQ3hDO0FBQ0Y7QUFDQSxJQUFJazdCLEVBQUEsR0FBS3Y3QixNQUFBLENBQU9XLGNBQUE7RUFBZ0I2NkIsRUFBQSxHQUFLeDdCLE1BQUEsQ0FBT2dCLHdCQUFBO0VBQTBCeTZCLEVBQUEsR0FBS0EsQ0FBQzM3QixDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxLQUFNO0lBQ3pGLFNBQVNVLENBQUEsR0FBSVYsQ0FBQSxHQUFJLElBQUksU0FBU0EsQ0FBQSxHQUFJbTdCLEVBQUEsQ0FBR3g4QixDQUFBLEVBQUdLLENBQUMsSUFBSUwsQ0FBQSxFQUFHa0UsQ0FBQSxHQUFJcEQsQ0FBQSxDQUFFa0MsTUFBQSxHQUFTLEdBQUdxQixDQUFBLEVBQUdILENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQzNFLENBQUNHLENBQUEsR0FBSXZELENBQUEsQ0FBRW9ELENBQUEsT0FBUW5DLENBQUEsSUFBS1YsQ0FBQSxHQUFJZ0QsQ0FBQSxDQUFFckUsQ0FBQSxFQUFHSyxDQUFBLEVBQUcwQixDQUFDLElBQUlzQyxDQUFBLENBQUV0QyxDQUFDLE1BQU1BLENBQUE7SUFDaEQsT0FBT1YsQ0FBQSxJQUFLVSxDQUFBLElBQUt3NkIsRUFBQSxDQUFHdjhCLENBQUEsRUFBR0ssQ0FBQSxFQUFHMEIsQ0FBQyxHQUFHQSxDQUFBO0VBQ2hDO0FBQ0EsSUFBTTI2QixFQUFBLEdBQUssTUFBTUMsRUFBQSxTQUFXM0IsRUFBQSxDQUFHO0VBUTdCdjVCLFlBQVl6QixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNoQixNQUFNTCxDQUFBLEVBQUdLLENBQUMsR0FBRyxLQUFLdThCLFlBQUEsR0FBZSxHQUFHLEtBQUtDLHdCQUFBLEdBQTJCLE1BQU0sS0FBS0MscUJBQUEsR0FBd0IsTUFBTSxLQUFLQyxZQUFBLEdBQWVoOUIsUUFBQSxDQUFTeVosSUFBQSxFQUFNLEtBQUt1VixJQUFBLEdBQU8sTUFBTTtNQUNoSyxJQUFJMXRCLENBQUE7TUFDSixNQUFNMHRCLElBQUEsQ0FBSyxHQUFHLEtBQUtpTyw0QkFBQSxDQUE2QixJQUFJMzdCLENBQUEsR0FBSSxLQUFLNDdCLE9BQUEsS0FBWSxRQUFRNTdCLENBQUEsQ0FBRTh4QixVQUFBLENBQVcsR0FBRyxLQUFLMkoscUJBQUEsR0FBd0I7SUFDaEksR0FBRyxLQUFLdkosTUFBQSxHQUFTLE1BQU07TUFDckIsTUFBTWx5QixDQUFBLEdBQUksS0FBS2k2QixZQUFBLENBQWFseEIsSUFBQSxDQUFNckksQ0FBQSxJQUFNQSxDQUFBLENBQUVnMkIsU0FBUztNQUNuRDEyQixDQUFBLElBQUssUUFBUUEsQ0FBQSxDQUFFZzNCLE9BQUEsQ0FBUTtJQUN6QixHQUFHLEtBQUs2RSxRQUFBLEdBQVk3N0IsQ0FBQSxJQUFNO01BQ3hCLElBQUlrRCxDQUFBO01BQ0osTUFBTXhDLENBQUEsR0FBSVYsQ0FBQSxDQUFFKzZCLEtBQUEsS0FBVTtRQUFJbDRCLENBQUEsR0FBSTdDLENBQUEsQ0FBRWt3QixLQUFBLENBQU12dUIsTUFBQSxLQUFXO01BQ2pELEtBQUt1dUIsS0FBQSxDQUFNenZCLE9BQUEsQ0FBUzRDLENBQUEsSUFBTTtRQUN4QixJQUFJRSxDQUFBLEdBQUk7UUFDUkYsQ0FBQSxZQUFhK3lCLEVBQUEsR0FBSzd5QixDQUFBLEdBQUksQ0FBQ3ZELENBQUEsQ0FBRWt3QixLQUFBLENBQU05cEIsUUFBQSxDQUFTL0MsQ0FBQyxLQUFLQSxDQUFBLFlBQWF5MEIsRUFBQSxJQUFNejBCLENBQUEsWUFBYW8yQixFQUFBLE1BQVFsMkIsQ0FBQSxHQUFJVixDQUFBLElBQUssQ0FBQ25DLENBQUEsR0FBSTJDLENBQUEsQ0FBRXd6QixZQUFBLENBQWF0ekIsQ0FBQztNQUN0SCxDQUFDLEdBQUcsS0FBS3U0Qix5QkFBQSxDQUEwQmo1QixDQUFDO01BQ3BDLE1BQU1HLENBQUEsR0FBSWhELENBQUEsQ0FBRSs2QixLQUFBLEtBQVUsS0FBSyxLQUFLZ0IsaUJBQUEsR0FBb0IvN0IsQ0FBQSxDQUFFa3dCLEtBQUEsQ0FBTWhrQixHQUFBLENBQUs3SSxDQUFBLElBQU1BLENBQUEsQ0FBRTZ3QixVQUFBLENBQVcsQ0FBQztNQUNyRixDQUFDaHhCLENBQUEsR0FBSSxLQUFLMDRCLE9BQUEsS0FBWSxRQUFRMTRCLENBQUEsQ0FBRTB1QixXQUFBLEtBQWdCLEtBQUtnSyxPQUFBLENBQVE5SixVQUFBLENBQVcsR0FBRyxLQUFLOEosT0FBQSxDQUFRL0osUUFBQSxDQUFTN3VCLENBQUM7SUFDcEcsR0FBR3JFLENBQUEsQ0FBRTQ4QixZQUFBLEtBQWlCLFdBQVcsS0FBS0EsWUFBQSxHQUFlNThCLENBQUEsQ0FBRTQ4QixZQUFBLEdBQWUsS0FBS0EsWUFBQSxHQUFlLEtBQUssS0FBS3RuQixLQUFBLENBQU1qRSxPQUFBLENBQVF6RSxTQUFBLENBQVVDLEdBQUEsQ0FBSTJzQixDQUFBLENBQUVVLGFBQWEsR0FBR2w2QixDQUFBLENBQUUrOEIsWUFBQSxLQUFpQixXQUFXLEtBQUtBLFlBQUEsR0FBZS84QixDQUFBLENBQUUrOEIsWUFBQSxHQUFlLEtBQUt6bkIsS0FBQSxDQUFNbWtCLGdCQUFBLEtBQXFCLFFBQVEsS0FBS2xrQixTQUFBLENBQVVyQyxFQUFBLENBQUcsS0FBS29DLEtBQUEsQ0FBTW1rQixnQkFBQSxFQUFrQixhQUFjcDRCLENBQUEsSUFBTSxLQUFLZzhCLFdBQUEsQ0FBWWg4QixDQUFDLENBQUMsR0FBR3JCLENBQUEsQ0FBRXcyQixVQUFBLElBQWMsS0FBSzhHLFNBQUEsQ0FBVSxHQUFHdDlCLENBQUEsQ0FBRXU5QixTQUFBLEtBQWMsVUFBTyxLQUFLTixPQUFBLEdBQVUsSUFBSWhMLEVBQUEsQ0FBRztNQUNuYVYsS0FBQSxFQUFPLEtBQUs2TCxpQkFBQTtNQUNadEssZ0JBQUEsRUFBa0I4RCxDQUFBLENBQUVJLE9BQUE7TUFDcEJoRSxXQUFBLEVBQWEsQ0FDWDVzQixDQUFBLENBQUVFLEdBQUEsRUFDRkYsQ0FBQSxDQUFFVSxFQUFBLEVBQ0ZWLENBQUEsQ0FBRVcsSUFBQSxFQUNGWCxDQUFBLENBQUVHLEtBQUE7SUFFTixDQUFDLEdBQUcsS0FBSzAyQixPQUFBLENBQVExSixNQUFBLENBQU8sS0FBS0EsTUFBTTtFQUNyQztFQUlBRCxTQUFBLEVBQVc7SUFDVCxPQUFPLEtBQUsySixPQUFBLEtBQVksU0FBUyxRQUFLLEtBQUtBLE9BQUEsQ0FBUTNKLFFBQUEsQ0FBUztFQUM5RDtFQUlBLElBQUlsdkIsVUFBQSxFQUFZO0lBQ2QsT0FBTyxLQUFLa1IsS0FBQSxDQUFNaWMsS0FBQSxLQUFVLE9BQU8sSUFBSSxLQUFLamMsS0FBQSxDQUFNaWMsS0FBQSxDQUFNbnRCLFNBQUE7RUFDMUQ7RUFJQSxJQUFJRCxVQUFBLEVBQVk7SUFDZCxPQUFPLEtBQUttUixLQUFBLENBQU1ta0IsZ0JBQUEsS0FBcUIsT0FBTyxJQUFJLEtBQUtua0IsS0FBQSxDQUFNbWtCLGdCQUFBLENBQWlCdDFCLFNBQUE7RUFDaEY7RUFJQTBpQixLQUFBLEVBQU87SUFDTCxJQUFJN21CLENBQUE7SUFDSixLQUFLc1YsS0FBQSxDQUFNakUsT0FBQSxDQUFRcVosS0FBQSxDQUFNOFMsV0FBQSxDQUFZbEQsRUFBQSxDQUFHRSxhQUFBLEVBQWUsS0FBS2lELElBQUEsQ0FBSzF0QixNQUFBLEdBQVMsSUFBSSxHQUFHLEtBQUsydEIsZ0JBQUEsSUFBb0IsS0FBS3BvQixLQUFBLENBQU1qRSxPQUFBLENBQVF6RSxTQUFBLENBQVVDLEdBQUEsQ0FBSTJzQixDQUFBLENBQUVFLGNBQWMsR0FBRyxLQUFLaUUsZUFBQSxJQUFtQixLQUFLcm9CLEtBQUEsQ0FBTWpFLE9BQUEsQ0FBUXpFLFNBQUEsQ0FBVUMsR0FBQSxDQUFJMnNCLENBQUEsQ0FBRUcsZUFBZSxHQUFHLE1BQU05UyxJQUFBLENBQUssSUFBSTdtQixDQUFBLEdBQUksS0FBS2k5QixPQUFBLEtBQVksUUFBUWo5QixDQUFBLENBQUVrekIsUUFBQSxDQUFTLEtBQUtrSyxpQkFBaUI7RUFDMVQ7RUFJQTVwQixRQUFBLEVBQVU7SUFDUixLQUFLdWIsSUFBQSxDQUFLLEdBQUcsTUFBTXZiLE9BQUEsQ0FBUTtFQUM3QjtFQU1BbW9CLGdCQUFnQjM3QixDQUFBLEVBQUc7SUFDakIsS0FBSzQ5QixhQUFBLEtBQWtCLFFBQVEsS0FBS0EsYUFBQSxLQUFrQixXQUFXLEtBQUtmLHdCQUFBLEdBQTJCNzhCLENBQUEsRUFBRyxLQUFLNjlCLHdCQUFBLENBQXlCNzlCLENBQUM7RUFDckk7RUFNQXE5QixZQUFZcjlCLENBQUEsRUFBRztJQUNiLE1BQU1LLENBQUEsR0FBSSxLQUFLbzdCLGFBQUEsQ0FBY3o3QixDQUFDO0lBQzlCSyxDQUFBLEtBQU0sVUFBVSxLQUFLeThCLHFCQUFBLEtBQTBCejhCLENBQUEsS0FBTSxLQUFLMjhCLDRCQUFBLENBQTZCLEdBQUcsS0FBS0YscUJBQUEsR0FBd0J6OEIsQ0FBQSxFQUFHQSxDQUFBLENBQUU2MUIsV0FBQSxJQUFlLEtBQUsySCx3QkFBQSxDQUF5Qng5QixDQUFDO0VBQzVLO0VBUUF5OUIsdUJBQXVCOTlCLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQzNCLE1BQU1nQixDQUFBLEdBQUloQixDQUFBLENBQUVrMUIsVUFBQSxDQUFXO01BQUd4ekIsQ0FBQSxJQUFLVixDQUFBLEdBQUlBLENBQUEsQ0FBRThDLFNBQUEsR0FBWSxLQUFLLEtBQUtDLFNBQUE7TUFBV0YsQ0FBQSxHQUFJLEtBQUtDLFNBQUEsR0FBWXBDLENBQUE7SUFDM0YvQixDQUFBLENBQUUwcUIsS0FBQSxDQUFNOFMsV0FBQSxDQUFZbEQsRUFBQSxDQUFHSyxjQUFBLEVBQWdCejJCLENBQUEsR0FBSSxJQUFJO0VBQ2pEO0VBSUE4NEIsNkJBQUEsRUFBK0I7SUFDN0IsSUFBSWg5QixDQUFBLEVBQUdLLENBQUE7SUFDUCxLQUFLdTlCLGFBQUEsS0FBa0IsVUFBVSxLQUFLQSxhQUFBLEtBQWtCLFNBQVMsS0FBS0EsYUFBQSxDQUFjdHFCLEdBQUEsQ0FBSThsQixDQUFBLENBQUVFLGdCQUFBLEVBQWtCLEtBQUt2SyxJQUFJLEdBQUcsS0FBSzZPLGFBQUEsQ0FBYzdPLElBQUEsQ0FBSyxHQUFHLEtBQUs2TyxhQUFBLENBQWNwcUIsT0FBQSxDQUFRLEdBQUcsS0FBS29xQixhQUFBLENBQWNySSxVQUFBLENBQVcsRUFBRXJmLE1BQUEsQ0FBTyxHQUFHLEtBQUswbkIsYUFBQSxHQUFnQixPQUFPNTlCLENBQUEsR0FBSSxLQUFLaTlCLE9BQUEsS0FBWSxRQUFRajlCLENBQUEsQ0FBRWt6QixRQUFBLENBQVMsS0FBS2tLLGlCQUFpQixJQUFJLzhCLENBQUEsR0FBSSxLQUFLdzhCLHdCQUFBLEtBQTZCLFFBQVF4OEIsQ0FBQSxDQUFFdTFCLGVBQUEsQ0FBZ0I7RUFDM1g7RUFPQWlJLHlCQUF5Qjc5QixDQUFBLEVBQUc7SUFDMUIsSUFBSXFCLENBQUE7SUFDSixLQUFLdThCLGFBQUEsR0FBZ0IsSUFBSWpCLEVBQUEsQ0FBRztNQUMxQm5HLFVBQUEsRUFBWXgyQixDQUFBLENBQUV1MkIsb0JBQUE7TUFDZGhGLEtBQUEsRUFBT3Z4QixDQUFBLENBQUVvUCxRQUFBO01BQ1R3dEIsWUFBQSxFQUFjLEtBQUtBLFlBQUEsR0FBZTtNQUNsQ1csU0FBQSxFQUFXdjlCLENBQUEsQ0FBRXEyQixtQkFBQTtNQUNiNkUsUUFBQSxFQUFVLEtBQUtBO0lBQ2pCLENBQUMsR0FBR2w3QixDQUFBLENBQUUwMUIsY0FBQSxDQUFlLEdBQUcsS0FBS2tJLGFBQUEsQ0FBYzFxQixFQUFBLENBQUdrbUIsQ0FBQSxDQUFFRSxnQkFBQSxFQUFrQixLQUFLdkssSUFBSTtJQUMzRSxNQUFNMXVCLENBQUEsR0FBSSxLQUFLdTlCLGFBQUEsQ0FBY3JJLFVBQUEsQ0FBVztJQUN4QyxPQUFPLEtBQUtqZ0IsS0FBQSxDQUFNakUsT0FBQSxDQUFRblIsV0FBQSxDQUFZRyxDQUFDLEdBQUcsS0FBS3k5QixzQkFBQSxDQUF1Qno5QixDQUFBLEVBQUdMLENBQUMsR0FBR0ssQ0FBQSxDQUFFcXFCLEtBQUEsQ0FBTThTLFdBQUEsQ0FBWWxELEVBQUEsQ0FBR0MsWUFBQSxFQUFjLEtBQUtxRCxhQUFBLENBQWNoQixZQUFBLENBQWEvMkIsUUFBQSxDQUFTLENBQUMsR0FBRyxLQUFLKzNCLGFBQUEsQ0FBYy9XLElBQUEsQ0FBSyxJQUFJeGxCLENBQUEsR0FBSSxLQUFLNDdCLE9BQUEsS0FBWSxRQUFRNTdCLENBQUEsQ0FBRTh4QixVQUFBLENBQVcsR0FBRyxLQUFLeUssYUFBQTtFQUMvTztFQUtBLElBQUlGLGlCQUFBLEVBQW1CO0lBQ3JCLElBQUksS0FBS3BvQixLQUFBLENBQU1qRSxPQUFBLEtBQVksVUFBVSxLQUFLaUUsS0FBQSxDQUFNakUsT0FBQSxLQUFZLE1BQzFELE9BQU87SUFDVCxNQUFNclIsQ0FBQSxHQUFJLEtBQUtzVixLQUFBLENBQU1ta0IsZ0JBQUEsQ0FBaUJocUIscUJBQUEsQ0FBc0I7TUFBR3BQLENBQUEsR0FBSSxLQUFLMDhCLFlBQUEsQ0FBYXR0QixxQkFBQSxDQUFzQjtNQUFHcE8sQ0FBQSxHQUFJLEtBQUtvOEIsSUFBQSxDQUFLMXRCLE1BQUE7TUFBUWhPLENBQUEsR0FBSS9CLENBQUEsQ0FBRTRQLEdBQUEsR0FBTXZPLENBQUE7TUFBRzZDLENBQUEsR0FBSWxFLENBQUEsQ0FBRTRQLEdBQUEsR0FBTXZPLENBQUE7TUFBR2dELENBQUEsR0FBSWUsSUFBQSxDQUFLMjRCLEdBQUEsQ0FBSXI5QixNQUFBLENBQU9zOUIsV0FBQSxFQUFhMzlCLENBQUEsQ0FBRXlQLE1BQU07SUFDM00sT0FBTzVMLENBQUEsR0FBSTdELENBQUEsQ0FBRXVQLEdBQUEsSUFBTzdOLENBQUEsSUFBS3NDLENBQUE7RUFDM0I7RUFLQSxJQUFJczVCLGdCQUFBLEVBQWtCO0lBQ3BCLElBQUksS0FBS3JvQixLQUFBLENBQU1qRSxPQUFBLEtBQVksVUFBVSxLQUFLaUUsS0FBQSxDQUFNakUsT0FBQSxLQUFZLE1BQzFELE9BQU87SUFDVCxNQUFNclIsQ0FBQSxHQUFJLEtBQUtzVixLQUFBLENBQU1qRSxPQUFBLENBQVE1QixxQkFBQSxDQUFzQjtNQUFHcFAsQ0FBQSxHQUFJLEtBQUswOEIsWUFBQSxDQUFhdHRCLHFCQUFBLENBQXNCO01BQUdwTyxDQUFBLEdBQUksS0FBS284QixJQUFBLENBQUt4dEIsS0FBQTtNQUFPbE8sQ0FBQSxHQUFJL0IsQ0FBQSxDQUFFZ1EsS0FBQSxHQUFRM08sQ0FBQTtNQUFHNkMsQ0FBQSxHQUFJbEUsQ0FBQSxDQUFFNlAsSUFBQSxHQUFPeE8sQ0FBQTtNQUFHZ0QsQ0FBQSxHQUFJZSxJQUFBLENBQUsyNEIsR0FBQSxDQUFJcjlCLE1BQUEsQ0FBT3U5QixVQUFBLEVBQVk1OUIsQ0FBQSxDQUFFMlAsS0FBSztJQUNsTSxPQUFPOUwsQ0FBQSxHQUFJN0QsQ0FBQSxDQUFFd1AsSUFBQSxJQUFROU4sQ0FBQSxJQUFLc0MsQ0FBQTtFQUM1QjtFQUNBLElBQUlvNUIsS0FBQSxFQUFPO0lBQ1QsSUFBSTE3QixDQUFBO0lBQ0osTUFBTS9CLENBQUEsR0FBSTtNQUNSK1AsTUFBQSxFQUFRO01BQ1JFLEtBQUEsRUFBTztJQUNUO0lBQ0EsSUFBSSxLQUFLcUYsS0FBQSxDQUFNakUsT0FBQSxLQUFZLE1BQ3pCLE9BQU9yUixDQUFBO0lBQ1QsTUFBTUssQ0FBQSxHQUFJLEtBQUtpVixLQUFBLENBQU1qRSxPQUFBLENBQVE2c0IsU0FBQSxDQUFVLElBQUU7SUFDekM3OUIsQ0FBQSxDQUFFcXFCLEtBQUEsQ0FBTXlULFVBQUEsR0FBYSxVQUFVOTlCLENBQUEsQ0FBRXFxQixLQUFBLENBQU11TCxRQUFBLEdBQVcsWUFBWTUxQixDQUFBLENBQUVxcUIsS0FBQSxDQUFNOWEsR0FBQSxHQUFNLFdBQVd2UCxDQUFBLENBQUV1TSxTQUFBLENBQVVDLEdBQUEsQ0FBSTJzQixDQUFBLENBQUVJLGFBQWEsSUFBSTczQixDQUFBLEdBQUkxQixDQUFBLENBQUU4TSxhQUFBLENBQWMsTUFBTXFzQixDQUFBLENBQUVVLGFBQWEsTUFBTSxRQUFRbjRCLENBQUEsQ0FBRW1VLE1BQUEsQ0FBTyxHQUFHblcsUUFBQSxDQUFTeVosSUFBQSxDQUFLdFosV0FBQSxDQUFZRyxDQUFDO0lBQ3hOLE1BQU1nQixDQUFBLEdBQUloQixDQUFBLENBQUU4TSxhQUFBLENBQWMsTUFBTXFzQixDQUFBLENBQUVDLGdCQUFnQjtJQUNsRCxPQUFPejVCLENBQUEsQ0FBRStQLE1BQUEsR0FBUzFPLENBQUEsQ0FBRTh1QixZQUFBLEVBQWNud0IsQ0FBQSxDQUFFaVEsS0FBQSxHQUFRNU8sQ0FBQSxDQUFFNHVCLFdBQUEsRUFBYTV2QixDQUFBLENBQUU2VixNQUFBLENBQU8sR0FBR2xXLENBQUE7RUFDekU7RUFJQSxJQUFJbzlCLGtCQUFBLEVBQW9CO0lBQ3RCLE9BQU8sS0FBSzdMLEtBQUEsQ0FBTWhrQixHQUFBLENBQUtsTixDQUFBLElBQU07TUFDM0IsSUFBSUEsQ0FBQSxZQUFhbzNCLEVBQUEsRUFDZixPQUFPcDNCLENBQUEsQ0FBRWsxQixVQUFBLENBQVc7TUFDdEIsSUFBSWwxQixDQUFBLFlBQWF5NkIsRUFBQSxFQUNmLE9BQU96NkIsQ0FBQSxDQUFFMDZCLFdBQUEsQ0FBWTtJQUN6QixDQUFDLEVBQUVxRCxJQUFBLENBQUssRUFBRXp4QixNQUFBLENBQVF0TSxDQUFBLElBQU1BLENBQUEsSUFBSyxJQUFJO0VBQ25DO0VBSUFpOUIsVUFBQSxFQUFZO0lBQ1YsS0FBS3pELE1BQUEsR0FBUyxJQUFJb0MsRUFBQSxDQUFHO01BQ25CMUssS0FBQSxFQUFPLEtBQUsrSixZQUFBO01BQ1p2USxXQUFBLEVBQWEsS0FBS21RLFFBQUEsQ0FBU3JCO0lBQzdCLENBQUMsR0FBRyxLQUFLQSxNQUFBLENBQU8zbUIsRUFBQSxDQUFHMm9CLEVBQUEsQ0FBR0MsTUFBQSxFQUFRLEtBQUtvQixRQUFRO0lBQzNDLE1BQU1sOUIsQ0FBQSxHQUFJLEtBQUs2NUIsTUFBQSxDQUFPdEUsVUFBQSxDQUFXO0lBQ2pDdjFCLENBQUEsQ0FBRTRNLFNBQUEsQ0FBVUMsR0FBQSxDQUFJMnNCLENBQUEsQ0FBRUssTUFBTSxHQUFHLEtBQUt2a0IsS0FBQSxDQUFNbWtCLGdCQUFBLENBQWlCNzFCLFlBQUEsQ0FBYTVELENBQUEsRUFBRyxLQUFLc1YsS0FBQSxDQUFNbWtCLGdCQUFBLENBQWlCNTFCLFVBQVU7RUFDL0c7RUFNQXM1QiwwQkFBMEJuOUIsQ0FBQSxFQUFHO0lBQzNCLEtBQUtzVixLQUFBLENBQU13a0IsbUJBQUEsQ0FBb0JsdEIsU0FBQSxDQUFVMFMsTUFBQSxDQUFPa2EsQ0FBQSxDQUFFTyw0QkFBQSxFQUE4Qi81QixDQUFDO0VBQ25GO0FBQ0Y7QUFDQXk4QixFQUFBLENBQUcsQ0FDRDl3QixFQUFBLENBQ0YsRUFBRyt3QixFQUFBLENBQUd6N0IsU0FBQSxFQUFXLFFBQVEsQ0FBQztBQUMxQixJQUFJbzlCLEVBQUEsR0FBSzNCLEVBQUE7QUFDVCxJQUFNNEIsRUFBQSxHQUFOLGNBQWlCRCxFQUFBLENBQUc7RUFNbEI1OEIsWUFBWXpCLENBQUEsRUFBRztJQUNiLE1BQU1LLENBQUEsR0FBSSxDQUFDeUwsRUFBQSxDQUFHO0lBQ2QsTUFDRTtNQUNFLEdBQUc5TCxDQUFBO01BQ0hxN0IsS0FBQSxFQUFPN0IsQ0FBQSxDQUFFWTtJQUNYLEdBQ0E7TUFDRSxDQUFDMWUsQ0FBQSxDQUFFQyxPQUFBLEdBQVU7UUFNWDRjLFVBQUEsRUFBWTtRQUNaRyxJQUFBLEVBQU07VUFDSnpDLFFBQUEsRUFBVTtVQUNWWCxTQUFBLEVBQVc7VUFDWHFELE9BQUEsRUFBU3Q0QjtRQUNYO01BQ0Y7TUFDQSxDQUFDcWIsQ0FBQSxDQUFFRyxJQUFBLEdBQU87UUFDUjZjLElBQUEsRUFBTTtVQUNKekMsUUFBQSxFQUFVO1VBQ1ZYLFNBQUEsRUFBVztVQUNYcUQsT0FBQSxFQUFTdDRCO1FBQ1g7TUFDRjtJQUNGLENBQ0YsR0FBRyxLQUFLa3hCLEtBQUEsQ0FBTXp2QixPQUFBLENBQVNULENBQUEsSUFBTTtNQUMzQixFQUFFQSxDQUFBLFlBQWFvMkIsRUFBQSxLQUFPLEVBQUVwMkIsQ0FBQSxZQUFheTVCLEVBQUEsS0FBT3o1QixDQUFBLENBQUU2MEIsV0FBQSxJQUFlNzBCLENBQUEsQ0FBRTgwQixjQUFBLElBQWtCLEtBQUt3RixlQUFBLENBQWdCdDZCLENBQUM7SUFDekcsQ0FBQztFQUNIO0VBSUEsSUFBSW1ELFdBQUEsRUFBYTtJQUNmLE9BQU8sS0FBSzhRLEtBQUEsQ0FBTW1rQixnQkFBQSxLQUFxQixPQUFPLElBQUksS0FBS25rQixLQUFBLENBQU1ta0IsZ0JBQUEsQ0FBaUJqMUIsVUFBQTtFQUNoRjtFQUlBcWlCLEtBQUEsRUFBTztJQUNMLEtBQUsrVixZQUFBLEtBQWlCLEtBQUssS0FBS3RuQixLQUFBLENBQU1qRSxPQUFBLENBQVFxWixLQUFBLENBQU04UyxXQUFBLENBQ2xEbEQsRUFBQSxDQUFHRyxrQkFBQSxFQUNILEtBQUtnRCxJQUFBLENBQUt4dEIsS0FBQSxHQUFRLElBQ3BCLEdBQUcsTUFBTTRXLElBQUEsQ0FBSztFQUNoQjtFQUtBd1csWUFBQSxFQUFjLENBQ2Q7RUFRQVMsdUJBQXVCOTlCLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQzNCLE1BQU1nQixDQUFBLEdBQUloQixDQUFBLENBQUVrMUIsVUFBQSxDQUFXO01BQUd4ekIsQ0FBQSxHQUFJVixDQUFBLEdBQUlBLENBQUEsQ0FBRW1ELFVBQUEsR0FBYTtNQUFHTixDQUFBLEdBQUksS0FBS00sVUFBQSxHQUFhekMsQ0FBQTtJQUMxRS9CLENBQUEsQ0FBRTBxQixLQUFBLENBQU04UyxXQUFBLENBQ05sRCxFQUFBLENBQUdJLGVBQUEsRUFDSHgyQixDQUFBLEdBQUksSUFDTjtFQUNGO0VBT0F5M0IsZ0JBQWdCMzdCLENBQUEsRUFBRztJQUNqQixJQUFJLEtBQUs2OEIsd0JBQUEsS0FBNkI3OEIsQ0FBQSxFQUFHO01BQ3ZDLEtBQUtnOUIsNEJBQUEsQ0FBNkIsR0FBRyxLQUFLSCx3QkFBQSxHQUEyQjtNQUNyRTtJQUNGO0lBQ0EsTUFBTWxCLGVBQUEsQ0FBZ0IzN0IsQ0FBQztFQUN6QjtFQU9BNjlCLHlCQUF5Qjc5QixDQUFBLEVBQUc7SUFDMUIsTUFBTUssQ0FBQSxHQUFJLE1BQU13OUIsd0JBQUEsQ0FBeUI3OUIsQ0FBQztJQUMxQyxPQUFPSyxDQUFBLENBQUVrMUIsVUFBQSxDQUFXLEVBQUUzb0IsU0FBQSxDQUFVQyxHQUFBLENBQUkyc0IsQ0FBQSxDQUFFVyxxQkFBQSxDQUFzQjk1QixDQUFBLENBQUV1OEIsWUFBWSxDQUFDLEdBQUd2OEIsQ0FBQTtFQUNoRjtFQU9BbTdCLGdCQUFnQng3QixDQUFBLEVBQUc7SUFDakIsSUFBSUssQ0FBQTtJQUNKTCxDQUFBLEtBQU0sS0FBSzY4Qix3QkFBQSxNQUE4Qng4QixDQUFBLEdBQUksS0FBS3c4Qix3QkFBQSxLQUE2QixRQUFReDhCLENBQUEsQ0FBRXkxQixXQUFBLENBQVksR0FBRyxNQUFNa0gsNEJBQUEsQ0FBNkIsSUFBSSxNQUFNeEIsZUFBQSxDQUFnQng3QixDQUFDO0VBQ3hLO0FBQ0Y7QUFDQSxJQUFNa1QsRUFBQSxHQUFLLE1BQU1xckIsRUFBQSxDQUFHO0VBQ2xCOThCLFlBQUEsRUFBYztJQUNaLEtBQUsrOEIsY0FBQSxHQUFpQjtFQUN4QjtFQUlBQyxLQUFBLEVBQU87SUFDTHp5QixFQUFBLEdBQUssS0FBSzB5QixRQUFBLENBQVMsSUFBSTMrQixRQUFBLENBQVN5WixJQUFBLENBQUs1TSxTQUFBLENBQVVDLEdBQUEsQ0FBSTB4QixFQUFBLENBQUcxbkIsR0FBQSxDQUFJOG5CLFlBQVk7RUFDeEU7RUFJQUMsT0FBQSxFQUFTO0lBQ1A1eUIsRUFBQSxHQUFLLEtBQUs2eUIsVUFBQSxDQUFXLElBQUk5K0IsUUFBQSxDQUFTeVosSUFBQSxDQUFLNU0sU0FBQSxDQUFVc0osTUFBQSxDQUFPcW9CLEVBQUEsQ0FBRzFuQixHQUFBLENBQUk4bkIsWUFBWTtFQUM3RTtFQUlBRCxTQUFBLEVBQVc7SUFDVCxLQUFLRixjQUFBLEdBQWlCOTlCLE1BQUEsQ0FBT2lQLFdBQUEsRUFBYTVQLFFBQUEsQ0FBU29ELGVBQUEsQ0FBZ0J1bkIsS0FBQSxDQUFNOFMsV0FBQSxDQUN2RSwwQkFDQSxHQUFHLEtBQUtnQixjQUFBLElBQ1YsR0FBR3orQixRQUFBLENBQVN5WixJQUFBLENBQUs1TSxTQUFBLENBQVVDLEdBQUEsQ0FBSTB4QixFQUFBLENBQUcxbkIsR0FBQSxDQUFJaW9CLGdCQUFnQjtFQUN4RDtFQUlBRCxXQUFBLEVBQWE7SUFDWDkrQixRQUFBLENBQVN5WixJQUFBLENBQUs1TSxTQUFBLENBQVVzSixNQUFBLENBQU9xb0IsRUFBQSxDQUFHMW5CLEdBQUEsQ0FBSWlvQixnQkFBZ0IsR0FBRyxLQUFLTixjQUFBLEtBQW1CLFFBQVE5OUIsTUFBQSxDQUFPcStCLFFBQUEsQ0FBUyxHQUFHLEtBQUtQLGNBQWMsR0FBRyxLQUFLQSxjQUFBLEdBQWlCO0VBQzFKO0FBQ0Y7QUFDQXRyQixFQUFBLENBQUcyRCxHQUFBLEdBQU07RUFDUDhuQixZQUFBLEVBQWM7RUFDZEcsZ0JBQUEsRUFBa0I7QUFDcEI7QUFDQSxJQUFJRSxFQUFBLEdBQUs5ckIsRUFBQTtBQUNULElBQU0rckIsRUFBQSxHQUFLcEssRUFBQSxDQUFHLG1CQUFtQjtFQUFHcUssRUFBQSxHQUFLO0lBQ3ZDbEssSUFBQSxFQUFNaUssRUFBQSxDQUFHO0lBQ1RueUIsSUFBQSxFQUFNbXlCLEVBQUEsQ0FBRyxNQUFNO0lBQ2ZFLFVBQUEsRUFBWUYsRUFBQSxDQUFHLGFBQWE7RUFDOUI7QUFDQSxJQUFNRyxFQUFBLEdBQU4sTUFBUztFQU1QMzlCLFlBQVk7SUFBRXFMLElBQUEsRUFBTTlNLENBQUE7SUFBR3EvQixpQkFBQSxFQUFtQmgvQjtFQUFFLEdBQUc7SUFDN0MsS0FBS2tWLFNBQUEsR0FBWSxJQUFJbEIsRUFBQSxDQUFHLEdBQUcsS0FBS3ZILElBQUEsR0FBTzlNLENBQUEsRUFBRyxLQUFLcS9CLGlCQUFBLEdBQW9CaC9CLENBQUEsRUFBRyxLQUFLaVYsS0FBQSxHQUFRO01BQ2pGMGYsSUFBQSxFQUFNMW9CLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FBQ3d5QixFQUFBLENBQUdsSyxJQUFJLENBQUM7TUFDN0JtSyxVQUFBLEVBQVk3eUIsQ0FBQSxDQUFFSSxJQUFBLENBQUssVUFBVSxDQUFDd3lCLEVBQUEsQ0FBR0MsVUFBVSxDQUFDO01BQzVDcnlCLElBQUEsRUFBTVIsQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxDQUFDd3lCLEVBQUEsQ0FBR3B5QixJQUFJLENBQUM7SUFDL0IsR0FBRyxLQUFLd0ksS0FBQSxDQUFNNnBCLFVBQUEsQ0FBV3B3QixTQUFBLEdBQVkra0IsRUFBQSxFQUFJLEtBQUt4ZSxLQUFBLENBQU0wZixJQUFBLENBQUs5MEIsV0FBQSxDQUFZLEtBQUtvVixLQUFBLENBQU02cEIsVUFBVSxHQUFHLEtBQUs1cEIsU0FBQSxDQUFVckMsRUFBQSxDQUFHLEtBQUtvQyxLQUFBLENBQU02cEIsVUFBQSxFQUFZLFNBQVMsS0FBS0UsaUJBQWlCLEdBQUcsS0FBSy9wQixLQUFBLENBQU14SSxJQUFBLENBQUt3eUIsU0FBQSxHQUFZLEtBQUt4eUIsSUFBQSxFQUFNLEtBQUt3SSxLQUFBLENBQU0wZixJQUFBLENBQUs5MEIsV0FBQSxDQUFZLEtBQUtvVixLQUFBLENBQU14SSxJQUFJO0VBQzVQO0VBSUF5b0IsV0FBQSxFQUFhO0lBQ1gsT0FBTyxLQUFLamdCLEtBQUEsQ0FBTTBmLElBQUE7RUFDcEI7RUFJQXhoQixRQUFBLEVBQVU7SUFDUixLQUFLOEIsS0FBQSxDQUFNMGYsSUFBQSxDQUFLOWUsTUFBQSxDQUFPLEdBQUcsS0FBS1gsU0FBQSxDQUFVL0IsT0FBQSxDQUFRO0VBQ25EO0FBQ0Y7QUFDQSxJQUFNK3JCLEVBQUEsR0FBTixNQUFTO0VBQ1A5OUIsWUFBQSxFQUFjO0lBQ1osS0FBSys5QixPQUFBLEdBQVUsRUFBQztFQUNsQjtFQU1BNzNCLEtBQUszSCxDQUFBLEVBQUc7SUFDTixLQUFLdy9CLE9BQUEsQ0FBUTczQixJQUFBLENBQUszSCxDQUFDO0VBQ3JCO0VBSUF1SixJQUFBLEVBQU07SUFDSixPQUFPLEtBQUtpMkIsT0FBQSxDQUFRajJCLEdBQUEsQ0FBSTtFQUMxQjtFQUlBLElBQUlrMkIsYUFBQSxFQUFlO0lBQ2pCLE9BQU8sS0FBS0QsT0FBQSxDQUFReDhCLE1BQUEsS0FBVyxJQUFJLEtBQUssS0FBS3c4QixPQUFBLENBQVEsS0FBS0EsT0FBQSxDQUFReDhCLE1BQUEsR0FBUyxHQUFHbXlCLEtBQUE7RUFDaEY7RUFJQSxJQUFJdUssYUFBQSxFQUFlO0lBQ2pCLE9BQU8sS0FBS0YsT0FBQSxDQUFReDhCLE1BQUEsS0FBVyxJQUFJLEVBQUMsR0FBSSxLQUFLdzhCLE9BQUEsQ0FBUSxLQUFLQSxPQUFBLENBQVF4OEIsTUFBQSxHQUFTLEdBQUd1dUIsS0FBQTtFQUNoRjtFQUlBNEcsTUFBQSxFQUFRO0lBQ04sT0FBTyxLQUFLcUgsT0FBQSxDQUFReDhCLE1BQUEsR0FBUyxJQUMzQixLQUFLdUcsR0FBQSxDQUFJO0VBQ2I7QUFDRjtBQUNBLElBQU1vMkIsRUFBQSxHQUFOLGNBQWlCM0UsRUFBQSxDQUFHO0VBTWxCdjVCLFlBQVl6QixDQUFBLEVBQUc7SUFDYixNQUFNQSxDQUFBLEVBQUc7TUFDUCxDQUFDMGIsQ0FBQSxDQUFFQyxPQUFBLEdBQVU7UUFDWCtjLElBQUEsRUFBTTtVQUNKQyxPQUFBLEVBQVM7UUFDWDtNQUNGO01BQ0EsQ0FBQ2pkLENBQUEsQ0FBRUcsSUFBQSxHQUFPO1FBQ1I2YyxJQUFBLEVBQU07VUFDSkMsT0FBQSxFQUFTO1FBQ1g7TUFDRjtJQUNGLENBQUMsR0FBRyxLQUFLaUgsWUFBQSxHQUFlLElBQUlaLEVBQUEsQ0FBRyxHQUFHLEtBQUtRLE9BQUEsR0FBVSxJQUFJRCxFQUFBLENBQUcsR0FBRyxLQUFLTSxRQUFBLEdBQVcsTUFBSSxLQUFLdnFCLEtBQUEsQ0FBTTBrQixPQUFBLEdBQVUxdEIsQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxDQUFDOHNCLENBQUEsQ0FBRVEsT0FBQSxFQUFTUixDQUFBLENBQUVTLGFBQWEsQ0FBQyxHQUFHLEtBQUsza0IsS0FBQSxDQUFNakUsT0FBQSxDQUFRek4sWUFBQSxDQUFhLEtBQUswUixLQUFBLENBQU0wa0IsT0FBQSxFQUFTLEtBQUsxa0IsS0FBQSxDQUFNakUsT0FBQSxDQUFReE4sVUFBVSxHQUFHLEtBQUswUixTQUFBLENBQVVyQyxFQUFBLENBQUcsS0FBS29DLEtBQUEsQ0FBTTBrQixPQUFBLEVBQVMsU0FBUyxNQUFNO01BQ3hSLEtBQUtqTCxJQUFBLENBQUs7SUFDWixDQUFDLEdBQUcsS0FBS3lRLE9BQUEsQ0FBUTczQixJQUFBLENBQUs7TUFBRTRwQixLQUFBLEVBQU92eEIsQ0FBQSxDQUFFdXhCO0lBQU0sQ0FBQztFQUMxQztFQUlBMUssS0FBQSxFQUFPO0lBQ0wsS0FBS3ZSLEtBQUEsQ0FBTTBrQixPQUFBLENBQVFwdEIsU0FBQSxDQUFVc0osTUFBQSxDQUFPc2pCLENBQUEsQ0FBRVMsYUFBYSxHQUFHLE1BQU1wVCxJQUFBLENBQUssR0FBRyxLQUFLK1ksWUFBQSxDQUFhbkIsSUFBQSxDQUFLLEdBQUcsS0FBS29CLFFBQUEsR0FBVztFQUNoSDtFQUlBOVEsS0FBQSxFQUFPO0lBQ0wsS0FBSzhRLFFBQUEsS0FBYSxNQUFNOVEsSUFBQSxDQUFLLEdBQUcsS0FBS3paLEtBQUEsQ0FBTTBrQixPQUFBLENBQVFwdEIsU0FBQSxDQUFVQyxHQUFBLENBQUkyc0IsQ0FBQSxDQUFFUyxhQUFhLEdBQUcsS0FBSzJGLFlBQUEsQ0FBYWhCLE1BQUEsQ0FBTyxHQUFHLEtBQUtZLE9BQUEsQ0FBUXJILEtBQUEsQ0FBTSxHQUFHLEtBQUswSCxRQUFBLEdBQVc7RUFDdko7RUFJQXJzQixRQUFBLEVBQVU7SUFDUixNQUFNQSxPQUFBLENBQVEsR0FBRyxLQUFLb3NCLFlBQUEsQ0FBYWhCLE1BQUEsQ0FBTztFQUM1QztFQU1BakQsZ0JBQWdCMzdCLENBQUEsRUFBRztJQUNqQixLQUFLOC9CLG9CQUFBLENBQXFCOS9CLENBQUEsQ0FBRW9QLFFBQUEsRUFBVXBQLENBQUEsQ0FBRW0xQixLQUFLLEdBQUcsS0FBS3FLLE9BQUEsQ0FBUTczQixJQUFBLENBQUs7TUFDaEV3dEIsS0FBQSxFQUFPbjFCLENBQUEsQ0FBRW0xQixLQUFBO01BQ1Q1RCxLQUFBLEVBQU92eEIsQ0FBQSxDQUFFb1A7SUFDWCxDQUFDO0VBQ0g7RUFPQTB3QixxQkFBcUI5L0IsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDekIsSUFBSSxLQUFLMC9CLE1BQUEsS0FBVyxRQUFRLEtBQUtBLE1BQUEsS0FBVyxXQUFXLEtBQUtBLE1BQUEsQ0FBT3ZzQixPQUFBLENBQVEsR0FBRyxLQUFLdXNCLE1BQUEsR0FBUyxPQUFPMS9CLENBQUEsS0FBTSxRQUFRO01BQy9HLEtBQUswL0IsTUFBQSxHQUFTLElBQUlYLEVBQUEsQ0FBRztRQUNuQnR5QixJQUFBLEVBQU16TSxDQUFBO1FBQ05nL0IsaUJBQUEsRUFBbUJBLENBQUEsS0FBTTtVQUN2QixLQUFLRyxPQUFBLENBQVFqMkIsR0FBQSxDQUFJLEdBQUcsS0FBS3UyQixvQkFBQSxDQUFxQixLQUFLTixPQUFBLENBQVFFLFlBQUEsRUFBYyxLQUFLRixPQUFBLENBQVFDLFlBQVk7UUFDcEc7TUFDRixDQUFDO01BQ0QsTUFBTXArQixDQUFBLEdBQUksS0FBSzArQixNQUFBLENBQU94SyxVQUFBLENBQVc7TUFDakNsMEIsQ0FBQSxLQUFNLFFBQVEsS0FBS2lVLEtBQUEsQ0FBTW1rQixnQkFBQSxDQUFpQjcxQixZQUFBLENBQWF2QyxDQUFBLEVBQUcsS0FBS2lVLEtBQUEsQ0FBTW1rQixnQkFBQSxDQUFpQjUxQixVQUFVO0lBQ2xHO0lBQ0EsS0FBSzB0QixLQUFBLENBQU16dkIsT0FBQSxDQUFTVCxDQUFBLElBQU07TUFDeEIsSUFBSVUsQ0FBQTtNQUNKLFFBQVFBLENBQUEsR0FBSVYsQ0FBQSxDQUFFazBCLFVBQUEsQ0FBVyxNQUFNLE9BQU8sU0FBU3h6QixDQUFBLENBQUVtVSxNQUFBLENBQU87SUFDMUQsQ0FBQyxHQUFHLEtBQUtxYixLQUFBLEdBQVEsS0FBSzZKLFVBQUEsQ0FBV3A3QixDQUFDLEdBQUcsS0FBS3V4QixLQUFBLENBQU16dkIsT0FBQSxDQUFTVCxDQUFBLElBQU07TUFDN0QsSUFBSTZDLENBQUE7TUFDSixNQUFNbkMsQ0FBQSxHQUFJVixDQUFBLENBQUVrMEIsVUFBQSxDQUFXO01BQ3ZCeHpCLENBQUEsS0FBTSxVQUFVbUMsQ0FBQSxHQUFJLEtBQUtvUixLQUFBLENBQU1pYyxLQUFBLEtBQVUsUUFBUXJ0QixDQUFBLENBQUVoRSxXQUFBLENBQVk2QixDQUFDO0lBQ2xFLENBQUM7RUFDSDtBQUNGO0FBQ0EsSUFBTWkrQixFQUFBLEdBQU4sY0FBaUI1cUIsQ0FBQSxDQUFFO0VBQ2pCM1QsWUFBQSxFQUFjO0lBQ1osTUFBTSxHQUFHRCxTQUFTLEdBQUcsS0FBS2l0QixNQUFBLEdBQVMsT0FBSSxLQUFLalksU0FBQSxHQUFZLElBQUlGLENBQUEsQ0FBRSxHQUFHLEtBQUtqRixPQUFBLEdBQVUsTUFBTSxLQUFLaVMsS0FBQSxHQUFRLE1BQU07TUFDdkcsS0FBS21MLE1BQUEsS0FBVyxLQUFLQSxNQUFBLEdBQVMsT0FBSW5ZLENBQUEsQ0FBRWUsVUFBQSxJQUFjLEtBQUtiLFNBQUEsQ0FBVW9ELE9BQUEsQ0FBUSxHQUFHLEtBQUtwRCxTQUFBLENBQVVxRCxVQUFBLENBQVcsR0FBRyxDQUFDLEtBQUs5RCxNQUFBLENBQU9rcUIsbUJBQUEsQ0FBb0JDLDRCQUFBLElBQWdDLEtBQUtucUIsTUFBQSxDQUFPaUwsWUFBQSxDQUFhZ0MsWUFBQSxJQUFnQixLQUFLak4sTUFBQSxDQUFPb3FCLGNBQUEsQ0FBZUMsYUFBQSxDQUFjLEtBQUtycUIsTUFBQSxDQUFPaUwsWUFBQSxDQUFhZ0MsWUFBWSxHQUFHLEtBQUszTixnQkFBQSxDQUFpQmhDLElBQUEsQ0FBSyxLQUFLNlIsTUFBQSxDQUFPbWIsTUFBTSxHQUFHLEtBQUtodkIsT0FBQSxLQUFZLEtBQUtBLE9BQUEsQ0FBUWlDLEdBQUEsQ0FBSThsQixDQUFBLENBQUVDLE1BQUEsRUFBUSxLQUFLaUgsY0FBYyxHQUFHLEtBQUtqdkIsT0FBQSxDQUFRbUMsT0FBQSxDQUFRLEdBQUcsS0FBS25DLE9BQUEsQ0FBUWtrQixVQUFBLENBQVcsRUFBRXJmLE1BQUEsQ0FBTyxHQUFHLEtBQUs3RSxPQUFBLEdBQVU7SUFDbmUsR0FBRyxLQUFLaXZCLGNBQUEsR0FBaUIsTUFBTTtNQUM3QixLQUFLaGQsS0FBQSxDQUFNO0lBQ2I7RUFDRjtFQUlBLElBQUk0QixPQUFBLEVBQVM7SUFDWCxPQUFPO01BQ0x1SixNQUFBLEVBQVE7TUFDUjRSLE1BQUEsRUFBUTtJQUNWO0VBQ0Y7RUFJQSxJQUFJeHBCLElBQUEsRUFBTTtJQUNSLE9BQU87TUFDTCtHLFFBQUEsRUFBVTtJQUNaO0VBQ0Y7RUFNQSxJQUFJcWYsUUFBQSxFQUFVO0lBQ1osSUFBSWo5QixDQUFBO0lBQ0osSUFBSSxLQUFLcVIsT0FBQSxLQUFZLE1BQ25CLE9BQU8sYUFBYSxLQUFLQSxPQUFBLElBQVdyUixDQUFBLEdBQUksS0FBS3FSLE9BQUEsS0FBWSxPQUFPLFNBQVNyUixDQUFBLENBQUVpOUIsT0FBQSxHQUFVO0VBQ3pGO0VBTUF2d0IsS0FBQSxFQUFPO0lBQ0wsS0FBSzRJLEtBQUEsQ0FBTStJLE9BQUEsR0FBVS9SLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FBQyxLQUFLbUssR0FBQSxDQUFJK0csUUFBUSxDQUFDLEdBQUcsS0FBS3RJLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUWtDLFlBQUEsQ0FBYSxXQUFXLGFBQWEsR0FBRyxLQUFLbEwsZ0JBQUEsQ0FBaUJuQyxFQUFBLENBQUd5SCxFQUFBLEVBQUksS0FBSzJJLEtBQUs7RUFDN0o7RUFJQTlQLFFBQUEsRUFBVTtJQUNSLEtBQUt3QyxjQUFBLENBQWUsR0FBRyxLQUFLVCxTQUFBLENBQVUvQixPQUFBLENBQVEsR0FBRyxLQUFLNkIsZ0JBQUEsQ0FBaUIvQixHQUFBLENBQUlxSCxFQUFBLEVBQUksS0FBSzJJLEtBQUs7RUFDM0Y7RUFNQSxNQUFNaFksS0FBS3RMLENBQUEsR0FBSSxLQUFLK1YsTUFBQSxDQUFPaUwsWUFBQSxDQUFhZ0MsWUFBQSxFQUFjO0lBQ3BELElBQUk5ZSxDQUFBO0lBQ0osS0FBS3VxQixNQUFBLEdBQVMsTUFBSSxLQUFLalksU0FBQSxDQUFVdkMsSUFBQSxDQUFLLEdBQUcsS0FBSzhCLE1BQUEsQ0FBT29xQixjQUFBLENBQWVJLFdBQUEsQ0FBWXZnQyxDQUFDLEdBQUcsS0FBSytWLE1BQUEsQ0FBT29xQixjQUFBLENBQWVLLFVBQUEsQ0FBVztJQUMxSCxNQUFNO01BQUV2Z0IsU0FBQSxFQUFXNWYsQ0FBQTtNQUFHNmYsV0FBQSxFQUFhN2U7SUFBRSxJQUFJckIsQ0FBQSxDQUFFNmYsUUFBQSxDQUFTO0lBQ3BELEtBQUt4SyxnQkFBQSxDQUFpQmhDLElBQUEsQ0FBSyxLQUFLNlIsTUFBQSxDQUFPdUosTUFBTTtJQUM3QyxNQUFNMXNCLENBQUEsR0FBSStKLEVBQUEsQ0FBRyxJQUFJNnpCLEVBQUEsR0FBS3RCLEVBQUE7SUFDdEIsS0FBS2h0QixPQUFBLEdBQVUsSUFBSXRQLENBQUEsQ0FBRTtNQUNuQnkwQixVQUFBLEVBQVk7TUFDWmpGLEtBQUEsRUFBTyxNQUFNLEtBQUtrUCxhQUFBLENBQWN6Z0MsQ0FBQSxFQUFHcUIsQ0FBQSxFQUFHaEIsQ0FBQztNQUN2QzA4QixZQUFBLEVBQWMsS0FBS2huQixNQUFBLENBQU93TCxHQUFBLENBQUlVLE9BQUEsQ0FBUXJRLEVBQUEsQ0FBRzBELEtBQUEsQ0FBTTBiLFFBQUE7TUFDL0NrSyxRQUFBLEVBQVU7UUFDUkMsWUFBQSxFQUFjdG9CLENBQUEsQ0FBRWpCLEVBQUEsQ0FBR3NmLENBQUEsQ0FBRXRmLEVBQUEsQ0FBR1AsT0FBQSxFQUFTLGVBQWU7UUFDaER3b0IsTUFBQSxFQUFRaG5CLENBQUEsQ0FBRWpCLEVBQUEsQ0FBR3NmLENBQUEsQ0FBRXRmLEVBQUEsQ0FBR1AsT0FBQSxFQUFTLFFBQVE7TUFDckM7SUFDRixDQUFDLEdBQUcsS0FBS0EsT0FBQSxDQUFRNkIsRUFBQSxDQUFHa21CLENBQUEsQ0FBRUMsTUFBQSxFQUFRLEtBQUtpSCxjQUFjLElBQUlwOEIsQ0FBQSxHQUFJLEtBQUtvUixLQUFBLENBQU0rSSxPQUFBLEtBQVksUUFBUW5hLENBQUEsQ0FBRTZJLE1BQUEsQ0FBTyxLQUFLc0UsT0FBQSxDQUFRa2tCLFVBQUEsQ0FBVyxDQUFDLEdBQUcsS0FBS2xrQixPQUFBLENBQVF3VixJQUFBLENBQUs7RUFDako7RUFJQTBPLFdBQUEsRUFBYTtJQUNYLE9BQU8sS0FBS2pnQixLQUFBLENBQU0rSSxPQUFBO0VBQ3BCO0VBU0EsTUFBTW9pQixjQUFjemdDLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0lBQzNCLE1BQU1VLENBQUEsR0FBSSxFQUFDO0lBQ1hWLENBQUEsS0FBTSxVQUFVQSxDQUFBLENBQUUyQixNQUFBLEdBQVMsTUFBTWpCLENBQUEsQ0FBRTRGLElBQUEsQ0FBSyxHQUFHdEcsQ0FBQyxHQUFHVSxDQUFBLENBQUU0RixJQUFBLENBQUs7TUFDcEQyRyxJQUFBLEVBQU1vTixDQUFBLENBQUVFO0lBQ1YsQ0FBQztJQUNELE1BQU0xWCxDQUFBLEdBQUlULEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLa0gsTUFBQSxDQUFPcUwsS0FBQSxDQUFNQyxVQUFBLENBQVd0QixNQUFBLENBQU8sQ0FBQztNQUFHeGIsQ0FBQSxJQUFLLE1BQU0yVyxFQUFBLENBQUdsYixDQUFBLEVBQUdrRSxDQUFDLEdBQUcwQixNQUFBLENBQU8sQ0FBQ2xCLENBQUEsRUFBR0UsQ0FBQSxNQUFPQSxDQUFBLENBQUV1TSxPQUFBLENBQVFyUCxPQUFBLENBQVMrSCxDQUFBLElBQU07UUFDM0huRixDQUFBLENBQUVpRCxJQUFBLENBQUs7VUFDTHdULElBQUEsRUFBTXRSLENBQUEsQ0FBRXNSLElBQUE7VUFDUmdhLEtBQUEsRUFBT3RpQixDQUFBLENBQUV4UyxDQUFBLENBQUU2d0IsQ0FBQSxDQUFFN2UsU0FBQSxFQUFXeEksQ0FBQSxDQUFFc3JCLEtBQUs7VUFDL0I5ckIsSUFBQSxFQUFNekUsQ0FBQSxDQUFFeUUsSUFBQTtVQUNSb3RCLGVBQUEsRUFBaUI7VUFDakJWLFVBQUEsRUFBWSxNQUFBQSxDQUFBLEtBQVk7WUFDdEIsTUFBTTtnQkFBRS9VLFlBQUEsRUFBY1csQ0FBQTtnQkFBR3NCLEtBQUEsRUFBTzNGLENBQUE7Z0JBQUcrRixPQUFBLEVBQVM5RjtjQUFFLElBQUksS0FBS3hILE1BQUE7Y0FBUXlILENBQUEsR0FBSSxNQUFNbUUsQ0FBQSxDQUFFRCxPQUFBLENBQVExaEIsQ0FBQSxFQUFHNEUsQ0FBQSxDQUFFeUUsSUFBQSxFQUFNUSxDQUFBLENBQUVmLElBQUk7WUFDcEd5VSxDQUFBLENBQUUrRixLQUFBLENBQU0sR0FBR2hHLENBQUEsQ0FBRTRGLFVBQUEsQ0FBVzFGLENBQUEsRUFBR0YsQ0FBQSxDQUFFNkYsU0FBQSxDQUFVQyxHQUFHO1VBQzVDO1FBQ0YsQ0FBQztNQUNILENBQUMsR0FBRzFlLENBQUEsR0FBSSxFQUFFO0lBQ1YsT0FBT0gsQ0FBQSxDQUFFdkIsTUFBQSxHQUFTLE1BQU1qQixDQUFBLENBQUU0RixJQUFBLENBQUs7TUFDN0J3VCxJQUFBLEVBQU1vWixFQUFBO01BQ05sckIsSUFBQSxFQUFNO01BQ044ckIsS0FBQSxFQUFPdGlCLENBQUEsQ0FBRWpCLEVBQUEsQ0FBR3NmLENBQUEsQ0FBRXRmLEVBQUEsQ0FBR1AsT0FBQSxFQUFTLFlBQVk7TUFDdENqQyxRQUFBLEVBQVU7UUFDUm9uQixVQUFBLEVBQVk7UUFDWmpGLEtBQUEsRUFBT2h0QjtNQUNUO0lBQ0YsQ0FBQyxHQUFHeEMsQ0FBQSxDQUFFNEYsSUFBQSxDQUFLO01BQ1QyRyxJQUFBLEVBQU1vTixDQUFBLENBQUVFO0lBQ1YsQ0FBQyxJQUFJN1osQ0FBQSxDQUFFNEYsSUFBQSxDQUFLLEdBQUd0SCxDQUFDLEdBQUcwQixDQUFBLENBQUV3TCxHQUFBLENBQUs3SSxDQUFBLElBQU0sS0FBS2c4QixrQkFBQSxDQUFtQmg4QixDQUFDLENBQUM7RUFDNUQ7RUFNQWc4QixtQkFBbUIxZ0MsQ0FBQSxFQUFHO0lBQ3BCLElBQUlBLENBQUEsQ0FBRXNPLElBQUEsS0FBU29OLENBQUEsQ0FBRUUsU0FBQSxJQUFhNWIsQ0FBQSxDQUFFc08sSUFBQSxLQUFTb04sQ0FBQSxDQUFFRyxJQUFBLEVBQ3pDLE9BQU83YixDQUFBO0lBQ1QsTUFBTUssQ0FBQSxHQUFJOHdCLEVBQUEsQ0FBR254QixDQUFBLEVBQUc7TUFBRTJnQyxLQUFBLEVBQU87SUFBUSxDQUFDO0lBQ2xDLE9BQU8zZ0MsQ0FBQSxDQUFFNjRCLFlBQUEsS0FBaUJ4NEIsQ0FBQSxDQUFFdzRCLFlBQUEsR0FBZSxLQUFLNkgsa0JBQUEsQ0FBbUIxZ0MsQ0FBQSxDQUFFNjRCLFlBQVksSUFBSXg0QixDQUFBO0VBQ3ZGO0FBQ0Y7QUFDQSxJQUFJdWdDLEVBQUEsR0FBSztFQUFFL2dDLE9BQUEsRUFBUyxDQUFDO0FBQUU7QUFBQSxDQVF0QixVQUFTaUIsQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDZCxDQUFDLFVBQVNLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNkUCxDQUFBLENBQUVqQixPQUFBLEdBQVV3QixDQUFBLENBQUU7RUFDaEIsR0FBR1gsTUFBQSxFQUFRLFlBQVc7SUFDcEIsT0FBTyxVQUFTTCxDQUFBLEVBQUc7TUFDakIsSUFBSWdCLENBQUEsR0FBSSxDQUFDO01BQ1QsU0FBU1UsRUFBRW1DLENBQUEsRUFBRztRQUNaLElBQUk3QyxDQUFBLENBQUU2QyxDQUFBLEdBQ0osT0FBTzdDLENBQUEsQ0FBRTZDLENBQUEsRUFBR3JFLE9BQUE7UUFDZCxJQUFJd0UsQ0FBQSxHQUFJaEQsQ0FBQSxDQUFFNkMsQ0FBQSxJQUFLO1VBQUVuQyxDQUFBLEVBQUdtQyxDQUFBO1VBQUdRLENBQUEsRUFBRztVQUFJN0UsT0FBQSxFQUFTLENBQUM7UUFBRTtRQUMxQyxPQUFPUSxDQUFBLENBQUU2RCxDQUFBLEVBQUcvQyxJQUFBLENBQUtrRCxDQUFBLENBQUV4RSxPQUFBLEVBQVN3RSxDQUFBLEVBQUdBLENBQUEsQ0FBRXhFLE9BQUEsRUFBU2tDLENBQUMsR0FBR3NDLENBQUEsQ0FBRUssQ0FBQSxHQUFJLE1BQUlMLENBQUEsQ0FBRXhFLE9BQUE7TUFDNUQ7TUFDQSxPQUFPa0MsQ0FBQSxDQUFFMmtCLENBQUEsR0FBSXJtQixDQUFBLEVBQUcwQixDQUFBLENBQUU2QyxDQUFBLEdBQUl2RCxDQUFBLEVBQUdVLENBQUEsQ0FBRXVLLENBQUEsR0FBSSxVQUFTcEksQ0FBQSxFQUFHRyxDQUFBLEVBQUdFLENBQUEsRUFBRztRQUMvQ3hDLENBQUEsQ0FBRVYsQ0FBQSxDQUFFNkMsQ0FBQSxFQUFHRyxDQUFDLEtBQUtyRCxNQUFBLENBQU9XLGNBQUEsQ0FBZXVDLENBQUEsRUFBR0csQ0FBQSxFQUFHO1VBQUVuQyxVQUFBLEVBQVk7VUFBSUQsR0FBQSxFQUFLc0M7UUFBRSxDQUFDO01BQ3JFLEdBQUd4QyxDQUFBLENBQUVzQyxDQUFBLEdBQUksVUFBU0gsQ0FBQSxFQUFHO1FBQ25CLE9BQU95aUIsTUFBQSxHQUFTLE9BQU9BLE1BQUEsQ0FBT0MsV0FBQSxJQUFlNWxCLE1BQUEsQ0FBT1csY0FBQSxDQUFldUMsQ0FBQSxFQUFHeWlCLE1BQUEsQ0FBT0MsV0FBQSxFQUFhO1VBQUVobEIsS0FBQSxFQUFPO1FBQVMsQ0FBQyxHQUFHWixNQUFBLENBQU9XLGNBQUEsQ0FBZXVDLENBQUEsRUFBRyxjQUFjO1VBQUV0QyxLQUFBLEVBQU87UUFBRyxDQUFDO01BQ3RLLEdBQUdHLENBQUEsQ0FBRTFCLENBQUEsR0FBSSxVQUFTNkQsQ0FBQSxFQUFHRyxDQUFBLEVBQUc7UUFDdEIsSUFBSSxJQUFJQSxDQUFBLEtBQU1ILENBQUEsR0FBSW5DLENBQUEsQ0FBRW1DLENBQUMsSUFBSSxJQUFJRyxDQUFBLElBQUssSUFBSUEsQ0FBQSxJQUFLLE9BQU9ILENBQUEsSUFBSyxZQUFZQSxDQUFBLElBQUtBLENBQUEsQ0FBRW5ELFVBQUEsRUFDeEUsT0FBT21ELENBQUE7UUFDVCxJQUFJSyxDQUFBLEdBQW9CLGVBQUF2RCxNQUFBLENBQU8rYyxNQUFBLENBQU8sSUFBSTtRQUMxQyxJQUFJaGMsQ0FBQSxDQUFFc0MsQ0FBQSxDQUFFRSxDQUFDLEdBQUd2RCxNQUFBLENBQU9XLGNBQUEsQ0FBZTRDLENBQUEsRUFBRyxXQUFXO1VBQUVyQyxVQUFBLEVBQVk7VUFBSU4sS0FBQSxFQUFPc0M7UUFBRSxDQUFDLEdBQUcsSUFBSUcsQ0FBQSxJQUFLLE9BQU9ILENBQUEsSUFBSyxVQUNsRyxTQUFTUSxDQUFBLElBQUtSLENBQUEsRUFDWm5DLENBQUEsQ0FBRXVLLENBQUEsQ0FBRS9ILENBQUEsRUFBR0csQ0FBQSxFQUFJLFVBQVNFLENBQUEsRUFBRztVQUNyQixPQUFPVixDQUFBLENBQUVVLENBQUE7UUFDWCxFQUFHbUQsSUFBQSxDQUFLLE1BQU1yRCxDQUFDLENBQUM7UUFDcEIsT0FBT0gsQ0FBQTtNQUNULEdBQUd4QyxDQUFBLENBQUVqQixDQUFBLEdBQUksVUFBU29ELENBQUEsRUFBRztRQUNuQixJQUFJRyxDQUFBLEdBQUlILENBQUEsSUFBS0EsQ0FBQSxDQUFFbkQsVUFBQSxHQUFhLFlBQVc7VUFDckMsT0FBT21ELENBQUEsQ0FBRXhFLE9BQUE7UUFDWCxJQUFJLFlBQVc7VUFDYixPQUFPd0UsQ0FBQTtRQUNUO1FBQ0EsT0FBT25DLENBQUEsQ0FBRXVLLENBQUEsQ0FBRWpJLENBQUEsRUFBRyxLQUFLQSxDQUFDLEdBQUdBLENBQUE7TUFDekIsR0FBR3RDLENBQUEsQ0FBRVYsQ0FBQSxHQUFJLFVBQVM2QyxDQUFBLEVBQUdHLENBQUEsRUFBRztRQUN0QixPQUFPckQsTUFBQSxDQUFPQyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLK0MsQ0FBQSxFQUFHRyxDQUFDO01BQ2xELEdBQUd0QyxDQUFBLENBQUV1YixDQUFBLEdBQUksSUFBSXZiLENBQUEsQ0FBRUEsQ0FBQSxDQUFFbUMsQ0FBQSxHQUFJLENBQUM7SUFDeEIsRUFBRSxDQUFDLFVBQVM3RCxDQUFBLEVBQUdnQixDQUFBLEVBQUdVLENBQUEsRUFBRztNQUNuQixTQUFTbUMsRUFBRVEsQ0FBQSxFQUFHRSxDQUFBLEVBQUc7UUFDZixTQUFTaUYsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSWpGLENBQUEsQ0FBRTVCLE1BQUEsRUFBUTZHLENBQUEsSUFBSztVQUNqQyxJQUFJOFgsQ0FBQSxHQUFJL2MsQ0FBQSxDQUFFaUYsQ0FBQTtVQUNWOFgsQ0FBQSxDQUFFemYsVUFBQSxHQUFheWYsQ0FBQSxDQUFFemYsVUFBQSxJQUFjLE9BQUl5ZixDQUFBLENBQUVrZixZQUFBLEdBQWUsTUFBSSxXQUFXbGYsQ0FBQSxLQUFNQSxDQUFBLENBQUVtZixRQUFBLEdBQVcsT0FBSzkvQixNQUFBLENBQU9XLGNBQUEsQ0FBZStDLENBQUEsRUFBR2lkLENBQUEsQ0FBRW9mLEdBQUEsRUFBS3BmLENBQUM7UUFDOUg7TUFDRjtNQUNBLFNBQVN0ZCxFQUFFSyxDQUFBLEVBQUdFLENBQUEsRUFBR2lGLENBQUEsRUFBRztRQUNsQixPQUFPakYsQ0FBQSxJQUFLVixDQUFBLENBQUVRLENBQUEsQ0FBRXpELFNBQUEsRUFBVzJELENBQUMsR0FBR2lGLENBQUEsSUFBSzNGLENBQUEsQ0FBRVEsQ0FBQSxFQUFHbUYsQ0FBQyxHQUFHbkYsQ0FBQTtNQUMvQztNQUNBM0MsQ0FBQSxDQUFFc0MsQ0FBQSxDQUFFaEQsQ0FBQztNQUNMLElBQUlrRCxDQUFBLEdBQUksWUFBVztRQUNqQixTQUFTRyxFQUFFRSxDQUFBLEVBQUc7VUFDWixJQUFJaUYsQ0FBQSxHQUFJO1VBQ1IsQ0FBQyxVQUFTOFgsQ0FBQSxFQUFHckUsQ0FBQSxFQUFHO1lBQ2QsSUFBSSxFQUFFcUUsQ0FBQSxZQUFhckUsQ0FBQSxHQUNqQixNQUFNLElBQUl6SCxTQUFBLENBQVUsbUNBQW1DO1VBQzNELEdBQUcsTUFBTW5SLENBQUMsR0FBRyxLQUFLczhCLFFBQUEsR0FBVyxDQUFDLEdBQUcsS0FBS24vQixJQUFBLEdBQU8sQ0FBQyxHQUFHLEtBQUt3SCxJQUFBLEdBQU96RSxDQUFBLENBQUV5RSxJQUFBLEVBQU0sS0FBSzQzQixpQkFBQSxDQUFrQnI4QixDQUFBLENBQUV5RSxJQUFJLEdBQUcsS0FBS2tMLE9BQUEsR0FBVTNQLENBQUEsQ0FBRXNPLEVBQUEsRUFBSSxLQUFLZ3VCLFFBQUEsR0FBV3Q4QixDQUFBLENBQUVzOEIsUUFBQSxFQUFVLEtBQUtDLGVBQUEsR0FBa0IsVUFBU3hmLENBQUEsRUFBRztZQUN2TDlYLENBQUEsQ0FBRXUzQixPQUFBLENBQVF6ZixDQUFDO1VBQ2IsR0FBRyxLQUFLcE4sT0FBQSxDQUFRSyxnQkFBQSxDQUFpQixXQUFXLEtBQUt1c0IsZUFBQSxFQUFpQixLQUFFO1FBQ3RFO1FBQ0EsT0FBTzk4QixDQUFBLENBQUVLLENBQUEsRUFBRyxNQUFNLENBQUM7VUFBRXE4QixHQUFBLEVBQUs7VUFBcUI5K0IsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztZQUM3RCxPQUFPO2NBQUV1RSxLQUFBLEVBQU8sQ0FBQyxPQUFPO2NBQUc2NkIsR0FBQSxFQUFLLENBQUMsT0FBTyxXQUFXLFdBQVcsV0FBVyxNQUFNO2NBQUczNkIsR0FBQSxFQUFLLENBQUMsT0FBTyxRQUFRO1lBQUU7VUFDM0c7UUFBRSxHQUFHO1VBQUVxNkIsR0FBQSxFQUFLO1VBQVk5K0IsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztZQUN0QyxPQUFPO2NBQUUsR0FBRztjQUFJLEdBQUc7Y0FBSSxHQUFHO2NBQUksR0FBRztjQUFJLEdBQUc7Y0FBSSxHQUFHO2NBQUksR0FBRztjQUFJLEdBQUc7Y0FBSSxHQUFHO2NBQUksR0FBRztjQUFJbUcsQ0FBQSxFQUFHO2NBQUlxZ0IsQ0FBQSxFQUFHO2NBQUlMLENBQUEsRUFBRztjQUFJL2YsQ0FBQSxFQUFHO2NBQUkrTSxDQUFBLEVBQUc7Y0FBSWtULENBQUEsRUFBRztjQUFJOFEsQ0FBQSxFQUFHO2NBQUkvTyxDQUFBLEVBQUc7Y0FBSXJDLENBQUEsRUFBRztjQUFJdlUsQ0FBQSxFQUFHO2NBQUl5ZCxDQUFBLEVBQUc7Y0FBSTBGLENBQUEsRUFBRztjQUFJM04sQ0FBQSxFQUFHO2NBQUlWLENBQUEsRUFBRztjQUFJTSxDQUFBLEVBQUc7Y0FBSTJRLENBQUEsRUFBRztjQUFJbFAsQ0FBQSxFQUFHO2NBQUlqTyxDQUFBLEVBQUc7Y0FBSXZVLENBQUEsRUFBRztjQUFJNFYsQ0FBQSxFQUFHO2NBQUk0UyxDQUFBLEVBQUc7Y0FBSTVuQixDQUFBLEVBQUc7Y0FBSStnQixDQUFBLEVBQUc7Y0FBSXpoQixDQUFBLEVBQUc7Y0FBSTJ1QixDQUFBLEVBQUc7Y0FBSTdKLENBQUEsRUFBRztjQUFJem1CLFNBQUEsRUFBVztjQUFHRSxLQUFBLEVBQU87Y0FBSSs2QixNQUFBLEVBQVE7Y0FBSXo2QixJQUFBLEVBQU07Y0FBSUMsRUFBQSxFQUFJO2NBQUlFLEtBQUEsRUFBTztjQUFJRCxJQUFBLEVBQU07Y0FBSXc2QixNQUFBLEVBQVE7Y0FBSXQ2QixNQUFBLEVBQVE7Y0FBSSxLQUFLO1lBQUk7VUFDcFg7UUFBRSxDQUFDLENBQUMsR0FBRzVDLENBQUEsQ0FBRUssQ0FBQSxFQUFHLENBQUM7VUFBRXE4QixHQUFBLEVBQUs7VUFBcUJuL0IsS0FBQSxFQUFPLFNBQUFBLENBQVNnRCxDQUFBLEVBQUc7WUFDMURBLENBQUEsR0FBSUEsQ0FBQSxDQUFFMEUsS0FBQSxDQUFNLEdBQUc7WUFDZixTQUFTTyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJakYsQ0FBQSxDQUFFNUIsTUFBQSxFQUFRNkcsQ0FBQSxJQUFLO2NBQ2pDakYsQ0FBQSxDQUFFaUYsQ0FBQSxJQUFLakYsQ0FBQSxDQUFFaUYsQ0FBQSxFQUFHL0QsV0FBQSxDQUFZO2NBQ3hCLElBQUk2YixDQUFBLEdBQUk7Y0FDUixTQUFTckUsQ0FBQSxJQUFLNVksQ0FBQSxDQUFFODhCLGlCQUFBLEVBQ2QsSUFBSTk4QixDQUFBLENBQUU4OEIsaUJBQUEsQ0FBa0Jsa0IsQ0FBQSxFQUFHN1YsUUFBQSxDQUFTN0MsQ0FBQSxDQUFFaUYsQ0FBQSxDQUFFLEdBQUc7Z0JBQ3pDOFgsQ0FBQSxHQUFJLEtBQUtxZixRQUFBLENBQVMxakIsQ0FBQSxJQUFLO2dCQUN2QjtjQUNGO2NBQ0ZxRSxDQUFBLEtBQU0sS0FBSzlmLElBQUEsQ0FBSytDLENBQUEsQ0FBRWlGLENBQUEsS0FBTTtZQUMxQjtZQUNBLFNBQVMwVCxDQUFBLElBQUs3WSxDQUFBLENBQUU4OEIsaUJBQUEsRUFDZCxLQUFLUixRQUFBLENBQVN6akIsQ0FBQSxNQUFPLEtBQUt5akIsUUFBQSxDQUFTempCLENBQUEsSUFBSztVQUM1QztRQUFFLEdBQUc7VUFBRXdqQixHQUFBLEVBQUs7VUFBV24vQixLQUFBLEVBQU8sU0FBQUEsQ0FBU2dELENBQUEsRUFBRztZQUN4QyxJQUFJaUYsQ0FBQTtjQUFHOFgsQ0FBQSxHQUFJO2dCQUFFMGYsR0FBQSxFQUFLejhCLENBQUEsQ0FBRTY4QixPQUFBLElBQVc3OEIsQ0FBQSxDQUFFODhCLE9BQUE7Z0JBQVNsN0IsS0FBQSxFQUFPNUIsQ0FBQSxDQUFFNnVCLFFBQUE7Z0JBQVUvc0IsR0FBQSxFQUFLOUIsQ0FBQSxDQUFFKzhCO2NBQU87Y0FBR3JrQixDQUFBLEdBQUk7WUFDbEYsS0FBS3pULENBQUEsSUFBSyxLQUFLbTNCLFFBQUEsRUFDYixLQUFLQSxRQUFBLENBQVNuM0IsQ0FBQSxNQUFPOFgsQ0FBQSxDQUFFOVgsQ0FBQSxNQUFPeVQsQ0FBQSxHQUFJO1lBQ3BDLElBQUlDLENBQUE7Y0FBR0MsQ0FBQSxHQUFJO1lBQ1gsS0FBS0QsQ0FBQSxJQUFLLEtBQUsxYixJQUFBLEVBQ2IyYixDQUFBLEdBQUlBLENBQUEsSUFBSzVZLENBQUEsQ0FBRTR0QixPQUFBLEtBQVk5dEIsQ0FBQSxDQUFFazlCLFFBQUEsQ0FBU3JrQixDQUFBO1lBQ3BDRCxDQUFBLElBQUtFLENBQUEsSUFBSyxLQUFLMGpCLFFBQUEsQ0FBU3Q4QixDQUFDO1VBQzNCO1FBQUUsR0FBRztVQUFFbThCLEdBQUEsRUFBSztVQUFVbi9CLEtBQUEsRUFBTyxTQUFBQSxDQUFBLEVBQVc7WUFDdEMsS0FBSzJTLE9BQUEsQ0FBUU0sbUJBQUEsQ0FBb0IsV0FBVyxLQUFLc3NCLGVBQWU7VUFDbEU7UUFBRSxDQUFDLENBQUMsR0FBR3o4QixDQUFBO01BQ1QsRUFBRTtNQUNGckQsQ0FBQSxDQUFFM0IsT0FBQSxHQUFVNkUsQ0FBQTtJQUNkLENBQUMsQ0FBQyxFQUFFN0UsT0FBQTtFQUNOLENBQUM7QUFDSCxHQUFHa2hDLEVBQUU7QUFDTCxJQUFJaUIsRUFBQSxHQUFLakIsRUFBQSxDQUFHL2dDLE9BQUE7QUFDWixJQUFNaWlDLEVBQUEsR0FBcUIsZUFBQWpoQyxFQUFBLENBQUdnaEMsRUFBRTtBQUNoQyxJQUFNRSxFQUFBLEdBQU4sTUFBUztFQUNQdGdDLFlBQUEsRUFBYztJQUNaLEtBQUt1Z0MsbUJBQUEsR0FBc0MsbUJBQUlybEIsR0FBQSxDQUFJO0VBQ3JEO0VBTUE5UCxJQUFJN00sQ0FBQSxFQUFHO0lBQ0wsSUFBSSxLQUFLaWlDLFlBQUEsQ0FBYWppQyxDQUFBLENBQUVrVCxFQUFBLEVBQUlsVCxDQUFBLENBQUVxSixJQUFJLEdBQ2hDLE1BQU0wSixLQUFBLENBQ0osWUFBWS9TLENBQUEsQ0FBRXFKLElBQUEsOEJBQWtDckosQ0FBQSxDQUFFa1QsRUFBQSw4Q0FDcEQ7SUFDRixNQUFNN1IsQ0FBQSxHQUFJLElBQUl5Z0MsRUFBQSxDQUFHO1FBQ2Z6NEIsSUFBQSxFQUFNckosQ0FBQSxDQUFFcUosSUFBQTtRQUNSNkosRUFBQSxFQUFJbFQsQ0FBQSxDQUFFa1QsRUFBQTtRQUNOZ3VCLFFBQUEsRUFBVWxoQyxDQUFBLENBQUV5VTtNQUNkLENBQUM7TUFBRzFTLENBQUEsR0FBSSxLQUFLaWdDLG1CQUFBLENBQW9CLy9CLEdBQUEsQ0FBSWpDLENBQUEsQ0FBRWtULEVBQUUsS0FBSyxFQUFDO0lBQy9DLEtBQUs4dUIsbUJBQUEsQ0FBb0JwMkIsR0FBQSxDQUFJNUwsQ0FBQSxDQUFFa1QsRUFBQSxFQUFJLENBQUMsR0FBR25SLENBQUEsRUFBR1YsQ0FBQyxDQUFDO0VBQzlDO0VBT0E2VSxPQUFPbFcsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDWCxNQUFNZ0IsQ0FBQSxHQUFJLEtBQUs0Z0MsWUFBQSxDQUFhamlDLENBQUEsRUFBR0ssQ0FBQztJQUNoQyxJQUFJLENBQUNnQixDQUFBLEVBQ0g7SUFDRkEsQ0FBQSxDQUFFNlUsTUFBQSxDQUFPO0lBQ1QsTUFBTW5VLENBQUEsR0FBSSxLQUFLaWdDLG1CQUFBLENBQW9CLy9CLEdBQUEsQ0FBSWpDLENBQUM7SUFDeEMsS0FBS2dpQyxtQkFBQSxDQUFvQnAyQixHQUFBLENBQUk1TCxDQUFBLEVBQUcrQixDQUFBLENBQUU0SyxNQUFBLENBQVF6SSxDQUFBLElBQU1BLENBQUEsS0FBTTdDLENBQUMsQ0FBQztFQUMxRDtFQVFBNGdDLGFBQWFqaUMsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDakIsUUFBUSxLQUFLMmhDLG1CQUFBLENBQW9CLy9CLEdBQUEsQ0FBSWpDLENBQUMsS0FBSyxFQUFDLEVBQUdvSyxJQUFBLENBQUssQ0FBQztNQUFFZixJQUFBLEVBQU10SDtJQUFFLE1BQU1BLENBQUEsS0FBTTFCLENBQUM7RUFDOUU7QUFDRjtBQUNBLElBQU02aEMsRUFBQSxHQUFLLElBQUlILEVBQUEsQ0FBRztBQUNsQixJQUFJSSxFQUFBLEdBQUtuaEMsTUFBQSxDQUFPVyxjQUFBO0VBQWdCeWdDLEVBQUEsR0FBS3BoQyxNQUFBLENBQU9nQix3QkFBQTtFQUEwQnFnQyxFQUFBLEdBQUtBLENBQUN2aEMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsS0FBTTtJQUN6RixTQUFTVSxDQUFBLEdBQUlWLENBQUEsR0FBSSxJQUFJLFNBQVNBLENBQUEsR0FBSStnQyxFQUFBLENBQUdwaUMsQ0FBQSxFQUFHSyxDQUFDLElBQUlMLENBQUEsRUFBR2tFLENBQUEsR0FBSXBELENBQUEsQ0FBRWtDLE1BQUEsR0FBUyxHQUFHcUIsQ0FBQSxFQUFHSCxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUMzRSxDQUFDRyxDQUFBLEdBQUl2RCxDQUFBLENBQUVvRCxDQUFBLE9BQVFuQyxDQUFBLElBQUtWLENBQUEsR0FBSWdELENBQUEsQ0FBRXJFLENBQUEsRUFBR0ssQ0FBQSxFQUFHMEIsQ0FBQyxJQUFJc0MsQ0FBQSxDQUFFdEMsQ0FBQyxNQUFNQSxDQUFBO0lBQ2hELE9BQU9WLENBQUEsSUFBS1UsQ0FBQSxJQUFLb2dDLEVBQUEsQ0FBR25pQyxDQUFBLEVBQUdLLENBQUEsRUFBRzBCLENBQUMsR0FBR0EsQ0FBQTtFQUNoQztFQUFHdWdDLEVBQUEsR0FBc0IsZ0JBQUN4aEMsQ0FBQSxLQUFPQSxDQUFBLENBQUV5aEMsTUFBQSxHQUFTLGtCQUFrQnpoQyxDQUFBLENBQUV1NEIsTUFBQSxHQUFTLGtCQUFrQnY0QixDQUFBLENBQUUwaEMsVUFBQSxHQUFhLHVCQUF1QjFoQyxDQUFBLEdBQUl3aEMsRUFBQSxJQUFNLENBQUMsQ0FBQztBQUM3SSxJQUFNRyxFQUFBLEdBQUssTUFBTUMsRUFBQSxTQUFXMXZCLEVBQUEsQ0FBRztFQVE3QnZSLFlBQVk7SUFBRTZmLEdBQUEsRUFBS3RoQixDQUFBO0lBQUdzUyxLQUFBLEVBQU9qUyxDQUFBO0lBQUdzaUMsVUFBQSxFQUFZdGhDO0VBQUUsR0FBRztJQUMvQyxNQUFNLEdBQUcsS0FBS290QixNQUFBLEdBQVMsT0FBSSxLQUFLbFosU0FBQSxHQUFZLElBQUlsQixFQUFBLENBQUcsR0FBRyxLQUFLaEQsT0FBQSxHQUFVLE1BQU0sS0FBS3V4Qix3QkFBQSxHQUEyQixNQUFNO01BQy9HLEtBQUtDLGNBQUEsQ0FBZSxHQUFHLEtBQUtDLFdBQUEsQ0FBWTtJQUMxQyxHQUFHLEtBQUt4QyxjQUFBLEdBQWlCLE1BQU07TUFDN0IsS0FBSzdSLE1BQUEsR0FBUyxPQUFJLEtBQUtwYixJQUFBLENBQ3JCLGdCQUVGO0lBQ0YsR0FBRyxLQUFLaU8sR0FBQSxHQUFNdGhCLENBQUEsRUFBRyxLQUFLc1MsS0FBQSxHQUFRalMsQ0FBQSxFQUFHLEtBQUtzaUMsVUFBQSxHQUFhdGhDLENBQUEsRUFBRyxLQUFLMGhDLGVBQUEsQ0FBZ0IsR0FBRyxLQUFLenRCLEtBQUEsR0FBUTtNQUN6Rm5FLE9BQUEsRUFBUzdFLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU9nMkIsRUFBQSxDQUFHN3JCLEdBQUEsQ0FBSTFGLE9BQU87SUFDdkMsR0FBRyxLQUFLMnhCLFdBQUEsQ0FBWSxHQUFHLEtBQUt4dEIsS0FBQSxDQUFNbkUsT0FBQSxDQUFRb1AsWUFBQSxDQUFhLFdBQVcsU0FBUyxHQUFHLEtBQUtlLEdBQUEsQ0FBSTRELE1BQUEsQ0FBT2hTLEVBQUEsQ0FBR3lILEVBQUEsRUFBSSxLQUFLaW9CLHdCQUF3QjtFQUNwSTtFQU1BLElBQUloMEIsUUFBQSxFQUFVO0lBQ1osT0FBTyxLQUFLbzBCLGtCQUFBLENBQW1CaGdDLE1BQUEsS0FBVztFQUM1QztFQUlBLFdBQVc2VCxJQUFBLEVBQU07SUFDZixPQUFPO01BQ0wxRixPQUFBLEVBQVM7SUFDWDtFQUNGO0VBSUFva0IsV0FBQSxFQUFhO0lBQ1gsT0FBTyxLQUFLamdCLEtBQUEsQ0FBTW5FLE9BQUE7RUFDcEI7RUFJQW1pQixTQUFBLEVBQVc7SUFDVCxJQUFJLEtBQUtqaUIsT0FBQSxLQUFZLE1BQ25CLE9BQU8sY0FBYyxLQUFLQSxPQUFBLEdBQVUsS0FBS0EsT0FBQSxDQUFRaWlCLFFBQUEsQ0FBUyxJQUFJO0VBQ2xFO0VBSUE5ZixRQUFBLEVBQVU7SUFDUixJQUFJeFQsQ0FBQTtJQUNKLE1BQU13VCxPQUFBLENBQVEsR0FBRyxLQUFLOEIsS0FBQSxJQUFTLEtBQUtBLEtBQUEsQ0FBTW5FLE9BQUEsSUFBVyxLQUFLbUUsS0FBQSxDQUFNbkUsT0FBQSxDQUFRK0UsTUFBQSxDQUFPLEdBQUcsS0FBSytzQixrQkFBQSxDQUFtQixJQUFJampDLENBQUEsR0FBSSxLQUFLcVIsT0FBQSxLQUFZLFFBQVFyUixDQUFBLENBQUVzVCxHQUFBLENBQUk4bEIsQ0FBQSxDQUFFQyxNQUFBLEVBQVEsS0FBS2lILGNBQWMsR0FBRyxLQUFLL3FCLFNBQUEsQ0FBVS9CLE9BQUEsQ0FBUSxHQUFHLEtBQUs4TixHQUFBLENBQUk0RCxNQUFBLENBQU81UixHQUFBLENBQUlxSCxFQUFBLEVBQUksS0FBS2lvQix3QkFBd0I7RUFDbFE7RUFPQU0sb0JBQW9CbGpDLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ3hCLEtBQUt1aUIsY0FBQSxDQUFlNWlCLENBQUEsRUFBR0ssQ0FBQztFQUMxQjtFQUlBaUwsS0FBQSxFQUFPO0lBQ0wsSUFBSXRMLENBQUE7SUFDSixLQUFLNE8sT0FBQSxNQUFhNU8sQ0FBQSxHQUFJLEtBQUtxUixPQUFBLEtBQVksUUFBUXJSLENBQUEsQ0FBRTZtQixJQUFBLENBQUssR0FBRyxLQUFLNEgsTUFBQSxHQUFTLE1BQUksS0FBS3BiLElBQUEsQ0FDOUUsZ0JBRUY7RUFDRjtFQUlBaVEsTUFBQSxFQUFRO0lBQ04sSUFBSXRqQixDQUFBO0lBQ0osQ0FBQ0EsQ0FBQSxHQUFJLEtBQUtxUixPQUFBLEtBQVksUUFBUXJSLENBQUEsQ0FBRSt1QixJQUFBLENBQUssR0FBRyxLQUFLTixNQUFBLEdBQVMsT0FBSSxLQUFLcGIsSUFBQSxDQUM3RCxnQkFFRjtFQUNGO0VBSUFpTSxPQUFBLEVBQVM7SUFDUCxLQUFLbVAsTUFBQSxHQUFTLEtBQUtuTCxLQUFBLENBQU0sSUFBSSxLQUFLaFksSUFBQSxDQUFLO0VBQ3pDO0VBSUF3M0IsWUFBQSxFQUFjO0lBQ1osSUFBSXppQyxDQUFBO0lBQ0osTUFBTUwsQ0FBQSxHQUFJOEwsRUFBQSxDQUFHLElBQUk2ekIsRUFBQSxHQUFLdEIsRUFBQTtJQUN0QixLQUFLaHRCLE9BQUEsR0FBVSxJQUFJclIsQ0FBQSxDQUFFO01BQ25CKzhCLFlBQUEsRUFBYyxLQUFLemIsR0FBQSxDQUFJMVAsRUFBQSxDQUFHMEQsS0FBQSxDQUFNMGIsUUFBQTtNQUNoQ3dGLFVBQUEsRUFBWTtNQUNaMEUsUUFBQSxFQUFVO1FBQ1JDLFlBQUEsRUFBYyxLQUFLd0gsVUFBQSxDQUFXeEgsWUFBQTtRQUM5QnRCLE1BQUEsRUFBUSxLQUFLOEksVUFBQSxDQUFXaDJCO01BQzFCO01BQ0E0a0IsS0FBQSxFQUFPLEtBQUs0UjtJQUNkLENBQUMsR0FBRyxLQUFLOXhCLE9BQUEsQ0FBUTZCLEVBQUEsQ0FBR2ttQixDQUFBLENBQUVDLE1BQUEsRUFBUSxLQUFLaUgsY0FBYyxJQUFJamdDLENBQUEsR0FBSSxLQUFLaVYsS0FBQSxDQUFNbkUsT0FBQSxLQUFZLFFBQVE5USxDQUFBLENBQUUwTSxNQUFBLENBQU8sS0FBS3NFLE9BQUEsQ0FBUWtrQixVQUFBLENBQVcsQ0FBQztFQUM1SDtFQUlBc04sZUFBQSxFQUFpQjtJQUNmLEtBQUt4eEIsT0FBQSxLQUFZLFNBQVMsS0FBS0EsT0FBQSxDQUFRMGQsSUFBQSxDQUFLLEdBQUcsS0FBSzFkLE9BQUEsQ0FBUWlDLEdBQUEsQ0FBSThsQixDQUFBLENBQUVDLE1BQUEsRUFBUSxLQUFLaUgsY0FBYyxHQUFHLEtBQUtqdkIsT0FBQSxDQUFRbUMsT0FBQSxDQUFRLEdBQUcsS0FBS25DLE9BQUEsR0FBVSxPQUFPLEtBQUtpRSxLQUFBLENBQU1uRSxPQUFBLEtBQVksU0FBUyxLQUFLbUUsS0FBQSxDQUFNbkUsT0FBQSxDQUFRcEMsU0FBQSxHQUFZO0VBQy9NO0VBQ0EsSUFBSWkwQixtQkFBQSxFQUFxQjtJQUN2QixNQUFNaGpDLENBQUEsR0FBSSxFQUFDO0lBQ1gsT0FBTyxLQUFLc1MsS0FBQSxDQUFNeFEsT0FBQSxDQUFTekIsQ0FBQSxJQUFNO01BQy9CQSxDQUFBLENBQUU4USxPQUFBLElBQVduUixDQUFBLENBQUUySCxJQUFBLENBQUt0SCxDQUFDO0lBQ3ZCLENBQUMsR0FBR0wsQ0FBQTtFQUNOO0VBQ0EsSUFBSW1qQywwQkFBQSxFQUE0QjtJQUM5QixNQUFNbmpDLENBQUEsR0FBSUEsQ0FBQ0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHVSxDQUFBLEdBQUksVUFBUTtNQUMzQm9aLElBQUEsRUFBTTlhLENBQUEsQ0FBRThhLElBQUE7TUFDUmdhLEtBQUEsRUFBT3RpQixDQUFBLENBQUV4UyxDQUFBLENBQUU2d0IsQ0FBQSxDQUFFN2UsU0FBQSxFQUFXaFMsQ0FBQSxDQUFFODBCLEtBQUEsSUFBUzNxQixFQUFBLENBQUduSixDQUFBLENBQUVnSSxJQUFJLENBQUM7TUFDN0NBLElBQUEsRUFBTWhJLENBQUEsQ0FBRWdJLElBQUE7TUFDUjBzQixVQUFBLEVBQVlBLENBQUEsS0FBTTtRQUNoQixLQUFLbU4sbUJBQUEsQ0FBb0I3aEMsQ0FBQSxDQUFFZ0ksSUFBQSxFQUFNaEosQ0FBQSxDQUFFeUksSUFBSTtNQUN6QztNQUNBMnZCLGNBQUEsRUFBZ0JwM0IsQ0FBQSxDQUFFK2hDLFFBQUEsSUFBWXJoQyxDQUFBLEdBQUk0SSxFQUFBLENBQUd0SixDQUFBLENBQUUraEMsUUFBUSxJQUFJO0lBQ3JEO0lBQ0EsT0FBTyxLQUFLSixrQkFBQSxDQUFtQnA5QixNQUFBLENBQU8sQ0FBQ3ZGLENBQUEsRUFBR2dCLENBQUEsTUFBT29DLEtBQUEsQ0FBTUMsT0FBQSxDQUFRckMsQ0FBQSxDQUFFOFAsT0FBTyxJQUFJOVAsQ0FBQSxDQUFFOFAsT0FBQSxDQUFRclAsT0FBQSxDQUFRLENBQUNDLENBQUEsRUFBR21DLENBQUEsS0FBTTtNQUN0RzdELENBQUEsQ0FBRXNILElBQUEsQ0FBSzNILENBQUEsQ0FBRStCLENBQUEsRUFBR1YsQ0FBQSxFQUFHNkMsQ0FBQSxLQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDLElBQUk3QyxDQUFBLENBQUU4UCxPQUFBLEtBQVksVUFBVTlRLENBQUEsQ0FBRXNILElBQUEsQ0FBSzNILENBQUEsQ0FBRXFCLENBQUEsQ0FBRThQLE9BQUEsRUFBUzlQLENBQUMsQ0FBQyxHQUFHaEIsQ0FBQSxHQUFJLEVBQUU7RUFDOUQ7RUFJQTBpQyxnQkFBQSxFQUFrQjtJQUNoQixLQUFLQyxrQkFBQSxDQUFtQmxoQyxPQUFBLENBQVM5QixDQUFBLElBQU07TUFDckMsTUFBTUssQ0FBQSxHQUFJTCxDQUFBLENBQUVvakMsUUFBQTtNQUNaL2lDLENBQUEsSUFBSyxLQUFLZ2pDLHFCQUFBLENBQXNCcmpDLENBQUEsQ0FBRXFKLElBQUEsRUFBTWhKLENBQUM7SUFDM0MsQ0FBQztFQUNIO0VBT0FnakMsc0JBQXNCcmpDLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQzFCNmhDLEVBQUEsQ0FBR3IxQixHQUFBLENBQUk7TUFDTHhELElBQUEsRUFBTWhKLENBQUE7TUFDTjZTLEVBQUEsRUFBSSxLQUFLb08sR0FBQSxDQUFJMVAsRUFBQSxDQUFHMEQsS0FBQSxDQUFNMGIsUUFBQTtNQUN0QnZjLE9BQUEsRUFBUyxNQUFPcFQsQ0FBQSxJQUFNO1FBQ3BCQSxDQUFBLENBQUVveEIsY0FBQSxDQUFlO1FBQ2pCLE1BQU0xd0IsQ0FBQSxHQUFJLEtBQUt1ZixHQUFBLENBQUlRLE1BQUEsQ0FBT1Msb0JBQUEsQ0FBcUI7VUFBR3JlLENBQUEsR0FBSSxLQUFLb2QsR0FBQSxDQUFJUSxNQUFBLENBQU9PLGVBQUEsQ0FBZ0J0Z0IsQ0FBQztRQUN2RixJQUFJbUMsQ0FBQSxFQUNGLElBQUk7VUFDRixNQUFNRyxDQUFBLEdBQUksTUFBTSxLQUFLaWQsR0FBQSxDQUFJUSxNQUFBLENBQU9KLE9BQUEsQ0FBUXhkLENBQUEsQ0FBRXlQLEVBQUEsRUFBSTNULENBQUM7VUFDL0MsS0FBS3NoQixHQUFBLENBQUl5RCxLQUFBLENBQU03QixVQUFBLENBQVc3ZSxDQUFBLEVBQUcsS0FBSztVQUNsQztRQUNGLFFBQUUsQ0FDRjtRQUNGLEtBQUt1ZSxjQUFBLENBQWU1aUIsQ0FBQztNQUN2QjtJQUNGLENBQUM7RUFDSDtFQUtBaWpDLG1CQUFBLEVBQXFCO0lBQ25CLEtBQUtELGtCQUFBLENBQW1CbGhDLE9BQUEsQ0FBUzlCLENBQUEsSUFBTTtNQUNyQyxNQUFNSyxDQUFBLEdBQUlMLENBQUEsQ0FBRW9qQyxRQUFBO01BQ1ovaUMsQ0FBQSxJQUFLNmhDLEVBQUEsQ0FBR2hzQixNQUFBLENBQU8sS0FBS29MLEdBQUEsQ0FBSTFQLEVBQUEsQ0FBRzBELEtBQUEsQ0FBTTBiLFFBQUEsRUFBVTN3QixDQUFDO0lBQzlDLENBQUM7RUFDSDtFQVFBLE1BQU11aUIsZUFBZTVpQixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUN6QixNQUFNZ0IsQ0FBQSxHQUFJLEtBQUtpZ0IsR0FBQSxDQUFJUSxNQUFBLENBQU9TLG9CQUFBLENBQXFCO01BQUd4Z0IsQ0FBQSxHQUFJLEtBQUt1ZixHQUFBLENBQUlRLE1BQUEsQ0FBT08sZUFBQSxDQUFnQmhoQixDQUFDO0lBQ3ZGLElBQUksQ0FBQ1UsQ0FBQSxFQUNIO0lBQ0YsTUFBTW1DLENBQUEsR0FBSW5DLENBQUEsQ0FBRTZNLE9BQUEsR0FBVXZOLENBQUEsR0FBSUEsQ0FBQSxHQUFJO0lBQzlCLElBQUlnRCxDQUFBO0lBQ0osSUFBSWhFLENBQUEsRUFBRztNQUNMLE1BQU1xRSxDQUFBLEdBQUksTUFBTSxLQUFLNGMsR0FBQSxDQUFJUSxNQUFBLENBQU9YLGdCQUFBLENBQWlCbmhCLENBQUM7TUFDbERxRSxDQUFBLEdBQUlyRCxNQUFBLENBQU9vQixNQUFBLENBQU9zQyxDQUFBLEVBQUdyRSxDQUFDO0lBQ3hCO0lBQ0EsTUFBTWtFLENBQUEsR0FBSSxLQUFLK2MsR0FBQSxDQUFJUSxNQUFBLENBQU9oQixNQUFBLENBQ3hCOWdCLENBQUEsRUFDQXFFLENBQUEsRUFDQSxRQUNBSCxDQUFBLEVBQ0EsUUFDQW5DLENBQUEsQ0FBRTZNLE9BQ0o7SUFDQXJLLENBQUEsQ0FBRXBELElBQUEsQ0FBSzJhLEVBQUEsQ0FBR0MsZUFBZSxHQUFHLEtBQUt1RixHQUFBLENBQUl5RCxLQUFBLENBQU03QixVQUFBLENBQVdoZixDQUFDLEdBQUcsS0FBS21QLElBQUEsQ0FBSyx1QkFBdUI7TUFDekZ1YSxLQUFBLEVBQU9ycEI7SUFDVCxDQUFDLEdBQUcsS0FBSytjLEdBQUEsQ0FBSXBRLE9BQUEsQ0FBUW9TLEtBQUEsQ0FBTTtFQUM3QjtBQUNGO0FBQ0ErZSxFQUFBLENBQUcsQ0FDRDEyQixFQUFBLENBQ0YsRUFBRzgyQixFQUFBLENBQUd4aEMsU0FBQSxFQUFXLHNCQUFzQixDQUFDO0FBQ3hDb2hDLEVBQUEsQ0FBRyxDQUNEMTJCLEVBQUEsQ0FDRixFQUFHODJCLEVBQUEsQ0FBR3hoQyxTQUFBLEVBQVcsNkJBQTZCLENBQUM7QUFDL0MsSUFBSXFpQyxFQUFBLEdBQUtiLEVBQUE7QUFDVCxJQUFNYyxFQUFBLEdBQUs7QUFDWCxlQUFlQyxHQUFHMWlDLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ3RCLE1BQU1LLENBQUEsR0FBSWdLLFNBQUEsQ0FBVW81QixRQUFBO0VBQ3BCLElBQUksQ0FBQ3BqQyxDQUFBLEVBQ0gsT0FBT0wsQ0FBQTtFQUNULElBQUk7SUFDRixRQUFRLE1BQU1LLENBQUEsQ0FBRXFqQyxZQUFBLENBQWEsR0FBR3poQyxHQUFBLENBQUluQixDQUFDLEtBQUtkLENBQUE7RUFDNUMsU0FBU3FCLENBQUEsRUFBUDtJQUNBLE9BQU9mLE9BQUEsQ0FBUUMsS0FBQSxDQUFNYyxDQUFDLEdBQUdyQixDQUFBO0VBQzNCO0FBQ0Y7QUFDQSxJQUFNMmpDLEVBQUEsR0FBTixjQUFpQnZ1QixDQUFBLENBQUU7RUFPakIzVCxZQUFZO0lBQUVtUyxNQUFBLEVBQVE1VCxDQUFBO0lBQUdxVixnQkFBQSxFQUFrQmhWO0VBQUUsR0FBRztJQUM5QyxNQUFNO01BQ0p1VCxNQUFBLEVBQVE1VCxDQUFBO01BQ1JxVixnQkFBQSxFQUFrQmhWO0lBQ3BCLENBQUMsR0FBRyxLQUFLdWpDLGVBQUEsR0FBa0I7RUFDN0I7RUFNQSxJQUFJL3NCLElBQUEsRUFBTTtJQUNSLE9BQU87TUFDTDNGLE9BQUEsRUFBUztNQUNUcU4sT0FBQSxFQUFTO01BQ1RzbEIsT0FBQSxFQUFTO01BQ1RDLGFBQUEsRUFBZTtNQUNmQyxhQUFBLEVBQWU7TUFDZkMsMkJBQUEsRUFBNkI7TUFDN0JDLFVBQUEsRUFBWTtNQUNaQyxrQkFBQSxFQUFvQjtNQUNwQkMsZUFBQSxFQUFpQjtNQUNqQkMscUJBQUEsRUFBdUI7SUFDekI7RUFDRjtFQU1BLElBQUkzVixPQUFBLEVBQVM7SUFDWCxPQUFPLEtBQUtuWixLQUFBLENBQU0rSSxPQUFBLENBQVF6UixTQUFBLENBQVV4SixRQUFBLENBQVMsS0FBS3lULEdBQUEsQ0FBSWt0QixhQUFhO0VBQ3JFO0VBSUEsSUFBSTV5QixRQUFBLEVBQVU7SUFDWixJQUFJblIsQ0FBQTtJQUNKLE9BQU87TUFDTHl1QixNQUFBLEdBQVN6dUIsQ0FBQSxHQUFJLEtBQUs0akMsZUFBQSxLQUFvQixPQUFPLFNBQVM1akMsQ0FBQSxDQUFFeXVCLE1BQUE7TUFDeERuTCxLQUFBLEVBQU9BLENBQUEsS0FBTTtRQUNYLElBQUlqakIsQ0FBQTtRQUNKLENBQUNBLENBQUEsR0FBSSxLQUFLdWpDLGVBQUEsS0FBb0IsUUFBUXZqQyxDQUFBLENBQUVpakIsS0FBQSxDQUFNO01BQ2hEO01BQ0FoWSxJQUFBLEVBQU1BLENBQUEsS0FBTTtRQUNWLElBQUksS0FBS3M0QixlQUFBLEtBQW9CLE1BQU07VUFDakM5N0IsQ0FBQSxDQUFFLDJEQUEyRCxNQUFNO1VBQ25FO1FBQ0Y7UUFDQSxLQUFLaU8sTUFBQSxDQUFPaUwsWUFBQSxDQUFhZ0MsWUFBQSxHQUFlLEtBQUtxaEIsWUFBQSxFQUFjLEtBQUtULGVBQUEsQ0FBZ0J0NEIsSUFBQSxDQUFLO01BQ3ZGO01BQ0FnVSxNQUFBLEVBQVFBLENBQUEsS0FBTTtRQUNaLElBQUksS0FBS3NrQixlQUFBLEtBQW9CLE1BQU07VUFDakM5N0IsQ0FBQSxDQUFFLDZEQUE2RCxNQUFNO1VBQ3JFO1FBQ0Y7UUFDQSxLQUFLODdCLGVBQUEsQ0FBZ0J0a0IsTUFBQSxDQUFPO01BQzlCO01BQ0FnVSxRQUFBLEVBQVVBLENBQUEsS0FBTTtRQUNkLElBQUlqekIsQ0FBQTtRQUNKLFFBQVFBLENBQUEsR0FBSSxLQUFLdWpDLGVBQUEsS0FBb0IsT0FBTyxTQUFTdmpDLENBQUEsQ0FBRWl6QixRQUFBLENBQVM7TUFDbEU7SUFDRjtFQUNGO0VBSUEsSUFBSWdSLGFBQUEsRUFBZTtJQUNqQixPQUFPO01BQ0x2VixJQUFBLEVBQU1BLENBQUEsS0FBTTtRQUNWLEtBQUt6WixLQUFBLENBQU11dUIsT0FBQSxDQUFRajNCLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLVyxHQUFBLENBQUlpdEIsYUFBYTtNQUM1RDtNQUNBamQsSUFBQSxFQUFNQSxDQUFBLEtBQU07UUFDVixLQUFLdlIsS0FBQSxDQUFNdXVCLE9BQUEsQ0FBUWozQixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLZ0ssR0FBQSxDQUFJaXRCLGFBQWE7TUFDekQ7SUFDRjtFQUNGO0VBSUEsSUFBSVMsa0JBQUEsRUFBb0I7SUFDdEIsT0FBTztNQUNMeFYsSUFBQSxFQUFNQSxDQUFBLEtBQU0sS0FBS3paLEtBQUEsQ0FBTTZ1QixlQUFBLENBQWdCdjNCLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEtBQUtnSyxHQUFBLENBQUl1dEIscUJBQXFCO01BQ25GdmQsSUFBQSxFQUFNQSxDQUFBLEtBQU0sS0FBS3ZSLEtBQUEsQ0FBTTZ1QixlQUFBLENBQWdCdjNCLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLVyxHQUFBLENBQUl1dEIscUJBQXFCO0lBQ3hGO0VBQ0Y7RUFNQUksZUFBZXhrQyxDQUFBLEVBQUc7SUFDaEJBLENBQUEsSUFBSyxLQUFLd1QsT0FBQSxDQUFRLEdBQUcsS0FBS3VDLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBY2hiLE9BQUEsQ0FBUSxHQUFHLEtBQUtpeEIscUJBQUEsQ0FBc0IsS0FBSy9qQyxNQUFBLENBQU9vRSxtQkFBQSxDQUFvQixNQUFNO01BQ3pILEtBQUs0L0IsTUFBQSxDQUFPLEdBQUcsS0FBS0Msb0JBQUEsQ0FBcUI7SUFDM0MsR0FBRztNQUFFQyxPQUFBLEVBQVM7SUFBSSxDQUFDO0VBQ3JCO0VBTUFyVyxZQUFZdnVCLENBQUEsR0FBSSxLQUFLK1YsTUFBQSxDQUFPaUwsWUFBQSxDQUFhZ0MsWUFBQSxFQUFjO0lBQ3JELElBQUksS0FBSzRnQixlQUFBLEtBQW9CLE1BQU07TUFDakM5N0IsQ0FBQSxDQUFFLHNFQUFzRSxNQUFNO01BQzlFO0lBQ0Y7SUFDQSxJQUFJLEtBQUs4N0IsZUFBQSxDQUFnQm5WLE1BQUEsSUFBVSxLQUFLbVYsZUFBQSxDQUFnQnRnQixLQUFBLENBQU0sR0FBRyxLQUFLdk4sTUFBQSxDQUFPeVksYUFBQSxDQUFjQyxNQUFBLElBQVUsS0FBSzFZLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBY2xMLEtBQUEsQ0FBTSxHQUFHLENBQUN0akIsQ0FBQSxFQUN2STtJQUNGLEtBQUtxa0MsWUFBQSxHQUFlcmtDLENBQUE7SUFDcEIsTUFBTUssQ0FBQSxHQUFJTCxDQUFBLENBQUU2VCxNQUFBO01BQVE7UUFBRWd4QixRQUFBLEVBQVV4akM7TUFBRSxJQUFJLEtBQUswVSxNQUFBLENBQU9nYixFQUFBO0lBQ2xELElBQUlodkIsQ0FBQTtJQUNKLE1BQU1tQyxDQUFBLEdBQUk7TUFBSUcsQ0FBQSxHQUFJckUsQ0FBQSxDQUFFNGUsVUFBQTtNQUFZcmEsQ0FBQSxHQUFJbEUsQ0FBQSxDQUFFb1AscUJBQUEsQ0FBc0I7TUFBRy9LLENBQUEsR0FBSUwsQ0FBQSxLQUFNLFNBQVNBLENBQUEsQ0FBRW9MLHFCQUFBLENBQXNCLElBQUk7TUFBTTdLLENBQUEsR0FBSUYsQ0FBQSxLQUFNLE9BQU9BLENBQUEsQ0FBRWtMLEdBQUEsR0FBTXJMLENBQUEsQ0FBRXFMLEdBQUEsR0FBTTtNQUFNL0YsQ0FBQSxHQUFJakYsQ0FBQSxLQUFNLE9BQU9BLENBQUEsR0FBSVYsQ0FBQSxHQUFJO0lBQ3BMLElBQUk3QyxDQUFBLEVBQ0ZVLENBQUEsR0FBSTFCLENBQUEsQ0FBRThELFNBQUEsR0FBWTlELENBQUEsQ0FBRTh2QixZQUFBLFVBQ2I5ckIsQ0FBQSxLQUFNLFVBQVV3RixDQUFBLEVBQUc7TUFDMUIsTUFBTThYLENBQUEsR0FBSTNkLFFBQUEsQ0FBU3RELE1BQUEsQ0FBT3FELGdCQUFBLENBQWlCL0QsQ0FBQSxDQUFFb2YsY0FBYyxFQUFFN08sVUFBVTtNQUN2RXhPLENBQUEsR0FBSTFCLENBQUEsQ0FBRThELFNBQUEsR0FBWXdkLENBQUE7SUFDcEIsT0FBTztNQUNMLE1BQU1BLENBQUEsR0FBSXhSLEVBQUEsQ0FBRzlMLENBQUM7UUFBR2laLENBQUEsR0FBSXRaLFFBQUEsQ0FBU3RELE1BQUEsQ0FBT3FELGdCQUFBLENBQWlCLEtBQUt1UixLQUFBLENBQU0ydUIsVUFBVSxFQUFFbDBCLE1BQUEsRUFBUSxFQUFFO1FBQUd3TixDQUFBLEdBQUk7TUFDOUZ4YixDQUFBLEdBQUkxQixDQUFBLENBQUU4RCxTQUFBLEdBQVl3ZCxDQUFBLEdBQUlyRSxDQUFBLEdBQUlDLENBQUEsR0FBSTNZLENBQUE7SUFDaEM7SUFDQSxLQUFLMFEsS0FBQSxDQUFNK0ksT0FBQSxDQUFRcU0sS0FBQSxDQUFNOWEsR0FBQSxHQUFNLEdBQUd4SyxJQUFBLENBQUtvRyxLQUFBLENBQU16SixDQUFDLE9BQU8sS0FBS2dVLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWMsTUFBQSxDQUFPOWUsTUFBQSxLQUFXLEtBQUtoRCxDQUFBLENBQUU0TyxPQUFBLEdBQVUsS0FBSzIxQixpQkFBQSxDQUFrQnhWLElBQUEsQ0FBSyxJQUFJLEtBQUt3VixpQkFBQSxDQUFrQjFkLElBQUEsQ0FBSyxHQUFHLEtBQUt2YixJQUFBLENBQUs7RUFDNUw7RUFJQWdZLE1BQUEsRUFBUTtJQUNOLElBQUl0akIsQ0FBQSxFQUFHSyxDQUFBO0lBQ1AsS0FBSzBWLE1BQUEsQ0FBT3dWLFFBQUEsQ0FBU0QsU0FBQSxNQUFldHJCLENBQUEsR0FBSSxLQUFLc1YsS0FBQSxDQUFNK0ksT0FBQSxLQUFZLFFBQVFyZSxDQUFBLENBQUU0TSxTQUFBLENBQVVzSixNQUFBLENBQU8sS0FBS1csR0FBQSxDQUFJa3RCLGFBQWEsR0FBRyxLQUFLTyxZQUFBLENBQWF2VixJQUFBLENBQUssSUFBSTF1QixDQUFBLEdBQUksS0FBS3VqQyxlQUFBLEtBQW9CLFFBQVF2akMsQ0FBQSxDQUFFaWpCLEtBQUEsQ0FBTSxHQUFHLEtBQUt2TixNQUFBLENBQU95WSxhQUFBLENBQWNsTCxLQUFBLENBQU0sR0FBRyxLQUFLNlUsS0FBQSxDQUFNO0VBQzlPO0VBSUFBLE1BQUEsRUFBUTtJQUNOLEtBQUs3aUIsS0FBQSxDQUFNK0ksT0FBQSxDQUFRcU0sS0FBQSxDQUFNOWEsR0FBQSxHQUFNO0VBQ2pDO0VBT0F0RSxLQUFLdEwsQ0FBQSxHQUFJLE1BQUk7SUFDWCxLQUFLc1YsS0FBQSxDQUFNK0ksT0FBQSxDQUFRelIsU0FBQSxDQUFVQyxHQUFBLENBQUksS0FBS2dLLEdBQUEsQ0FBSWt0QixhQUFhLEdBQUcvakMsQ0FBQSxHQUFJLEtBQUtza0MsWUFBQSxDQUFhemQsSUFBQSxDQUFLLElBQUksS0FBS3lkLFlBQUEsQ0FBYXZWLElBQUEsQ0FBSztFQUNsSDtFQUlBLE1BQU1yaUIsS0FBQSxFQUFPO0lBQ1gsS0FBSzRJLEtBQUEsQ0FBTStJLE9BQUEsR0FBVS9SLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sS0FBS21LLEdBQUEsQ0FBSTNGLE9BQU8sR0FBRyxDQUFDLFdBQVcsU0FBUyxFQUFFcFAsT0FBQSxDQUFTb0MsQ0FBQSxJQUFNO01BQzFGLEtBQUtvUixLQUFBLENBQU1wUixDQUFBLElBQUtvSSxDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPLEtBQUttSyxHQUFBLENBQUkzUyxDQUFBLENBQUU7SUFDM0MsQ0FBQyxHQUFHb0ksQ0FBQSxDQUFFUyxNQUFBLENBQU8sS0FBS3VJLEtBQUEsQ0FBTStJLE9BQUEsRUFBUyxLQUFLL0ksS0FBQSxDQUFNaUosT0FBTyxHQUFHalMsQ0FBQSxDQUFFUyxNQUFBLENBQU8sS0FBS3VJLEtBQUEsQ0FBTWlKLE9BQUEsRUFBUyxLQUFLakosS0FBQSxDQUFNdXVCLE9BQU8sR0FBRyxLQUFLdnVCLEtBQUEsQ0FBTTJ1QixVQUFBLEdBQWEzM0IsQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxLQUFLbUssR0FBQSxDQUFJb3RCLFVBQUEsRUFBWTtNQUNqS2wxQixTQUFBLEVBQVd1bEI7SUFDYixDQUFDLEdBQUdob0IsQ0FBQSxDQUFFUyxNQUFBLENBQU8sS0FBS3VJLEtBQUEsQ0FBTXV1QixPQUFBLEVBQVMsS0FBS3Z1QixLQUFBLENBQU0ydUIsVUFBVSxHQUFHLEtBQUt6dUIsd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUcsS0FBS29DLEtBQUEsQ0FBTTJ1QixVQUFBLEVBQVksU0FBUyxNQUFNO01BQzlIeFQsRUFBQSxDQUFHLElBQUUsR0FBRyxLQUFLcVUsaUJBQUEsQ0FBa0I7SUFDakMsR0FBRyxLQUFFO0lBQ0wsTUFBTTlrQyxDQUFBLEdBQUlzTSxDQUFBLENBQUVJLElBQUEsQ0FBSyxLQUFLO0lBQ3RCMU0sQ0FBQSxDQUFFRSxXQUFBLENBQVlILFFBQUEsQ0FBU0ksY0FBQSxDQUFlMFMsQ0FBQSxDQUFFakIsRUFBQSxDQUFHc2YsQ0FBQSxDQUFFdGYsRUFBQSxDQUFHVixPQUFBLENBQVFDLE9BQUEsRUFBUyxLQUFLLENBQUMsQ0FBQyxHQUFHblIsQ0FBQSxDQUFFRSxXQUFBLENBQVlvTSxDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPLEtBQUttSyxHQUFBLENBQUlxdEIsa0JBQUEsRUFBb0I7TUFDbEkxMUIsV0FBQSxFQUFhO0lBQ2YsQ0FBQyxDQUFDLEdBQUdraUIsRUFBQSxDQUFHLEtBQUtwYixLQUFBLENBQU0ydUIsVUFBQSxFQUFZamtDLENBQUEsRUFBRztNQUNoQzZ1QixXQUFBLEVBQWE7SUFDZixDQUFDLEdBQUcsS0FBS3ZaLEtBQUEsQ0FBTTZ1QixlQUFBLEdBQWtCNzNCLENBQUEsQ0FBRUksSUFBQSxDQUFLLFFBQVEsS0FBS21LLEdBQUEsQ0FBSXN0QixlQUFBLEVBQWlCO01BQ3hFcDFCLFNBQUEsRUFBV3NsQjtJQUNiLENBQUMsR0FBRy9uQixDQUFBLENBQUVTLE1BQUEsQ0FBTyxLQUFLdUksS0FBQSxDQUFNdXVCLE9BQUEsRUFBUyxLQUFLdnVCLEtBQUEsQ0FBTTZ1QixlQUFlO0lBQzNELE1BQU05akMsQ0FBQSxHQUFJaU0sQ0FBQSxDQUFFSSxJQUFBLENBQUssS0FBSztNQUFHckwsQ0FBQSxHQUFJaUwsQ0FBQSxDQUFFUSxJQUFBLENBQUsrRixDQUFBLENBQUVqQixFQUFBLENBQUdzZixDQUFBLENBQUV0ZixFQUFBLENBQUdkLFVBQUEsQ0FBV0MsT0FBQSxFQUFTLGVBQWUsQ0FBQztNQUFHaFAsQ0FBQSxHQUFJLE1BQU15aEMsRUFBQSxDQUFHLFNBQVMsR0FBRztJQUM5R25qQyxDQUFBLENBQUVILFdBQUEsQ0FBWW1CLENBQUMsR0FBR2hCLENBQUEsQ0FBRUgsV0FBQSxDQUFZb00sQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxLQUFLbUssR0FBQSxDQUFJcXRCLGtCQUFBLEVBQW9CO01BQ3pFMTFCLFdBQUEsRUFBYTdELEVBQUEsQ0FBRyxTQUFTNUksQ0FBQSxFQUFHO0lBQzlCLENBQUMsQ0FBQyxHQUFHMnVCLEVBQUEsQ0FBRyxLQUFLcGIsS0FBQSxDQUFNNnVCLGVBQUEsRUFBaUI5akMsQ0FBQSxFQUFHO01BQ3JDd3VCLFdBQUEsRUFBYTtJQUNmLENBQUMsR0FBR3ZpQixDQUFBLENBQUVTLE1BQUEsQ0FBTyxLQUFLdUksS0FBQSxDQUFNdXVCLE9BQUEsRUFBUyxLQUFLa0IsV0FBQSxDQUFZLENBQUMsR0FBR3o0QixDQUFBLENBQUVTLE1BQUEsQ0FBTyxLQUFLdUksS0FBQSxDQUFNdXVCLE9BQUEsRUFBUyxLQUFLOXRCLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBYytHLFVBQUEsQ0FBVyxDQUFDLEdBQUdqcEIsQ0FBQSxDQUFFUyxNQUFBLENBQU8sS0FBS2dKLE1BQUEsQ0FBT2diLEVBQUEsQ0FBR3piLEtBQUEsQ0FBTStJLE9BQUEsRUFBUyxLQUFLL0ksS0FBQSxDQUFNK0ksT0FBTztFQUN2TDtFQUlBMG1CLFlBQUEsRUFBYztJQUNaLE9BQU8sS0FBS25CLGVBQUEsR0FBa0IsSUFBSU4sRUFBQSxDQUFHO01BQ25DaGlCLEdBQUEsRUFBSyxLQUFLdkwsTUFBQSxDQUFPd0wsR0FBQSxDQUFJVSxPQUFBO01BQ3JCM1AsS0FBQSxFQUFPLEtBQUt5RCxNQUFBLENBQU9xTCxLQUFBLENBQU1DLFVBQUE7TUFDekJzaEIsVUFBQSxFQUFZO1FBQ1ZoMkIsTUFBQSxFQUFRa0csQ0FBQSxDQUFFakIsRUFBQSxDQUFHc2YsQ0FBQSxDQUFFdGYsRUFBQSxDQUFHUCxPQUFBLEVBQVMsUUFBUTtRQUNuQzhwQixZQUFBLEVBQWN0b0IsQ0FBQSxDQUFFakIsRUFBQSxDQUFHc2YsQ0FBQSxDQUFFdGYsRUFBQSxDQUFHUCxPQUFBLEVBQVMsZUFBZTtNQUNsRDtJQUNGLENBQUMsR0FBRyxLQUFLdXlCLGVBQUEsQ0FBZ0Ixd0IsRUFBQSxDQUFHb3ZCLEVBQUEsQ0FBR0MsTUFBQSxFQUFRLE1BQU07TUFDM0MsS0FBS3hzQixNQUFBLENBQU9nYixFQUFBLENBQUd6YixLQUFBLENBQU0rSSxPQUFBLENBQVF6UixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLZ0ssR0FBQSxDQUFJbXRCLDJCQUEyQjtJQUNqRixDQUFDLEdBQUcsS0FBS0osZUFBQSxDQUFnQjF3QixFQUFBLENBQUdvdkIsRUFBQSxDQUFHakosTUFBQSxFQUFRLE1BQU07TUFDM0MsS0FBS3RqQixNQUFBLENBQU9nYixFQUFBLENBQUd6YixLQUFBLENBQU0rSSxPQUFBLENBQVF6UixTQUFBLENBQVVzSixNQUFBLENBQU8sS0FBS1csR0FBQSxDQUFJbXRCLDJCQUEyQjtJQUNwRixDQUFDLEdBQUcsS0FBS0osZUFBQSxDQUFnQjF3QixFQUFBLENBQUdvdkIsRUFBQSxDQUFHRSxVQUFBLEVBQVksQ0FBQztNQUFFNVUsS0FBQSxFQUFPNXRCO0lBQUUsTUFBTTtNQUMzRCxNQUFNO1VBQUVnaEIsWUFBQSxFQUFjM2dCLENBQUE7VUFBRzRpQixLQUFBLEVBQU81aEI7UUFBRSxJQUFJLEtBQUswVSxNQUFBO1FBQVFoVSxDQUFBLEdBQUkxQixDQUFBLENBQUVvaEIsWUFBQSxDQUFhemhCLENBQUEsQ0FBRTJULEVBQUU7TUFDMUU1UixDQUFBLENBQUUwYyxNQUFBLENBQU96YixNQUFBLEtBQVcsTUFBTWpCLENBQUEsS0FBTTFCLENBQUEsQ0FBRStqQixTQUFBLElBQWEvakIsQ0FBQSxDQUFFMmtDLFdBQUEsQ0FBWSxHQUFHM2pDLENBQUEsQ0FBRTZoQixVQUFBLENBQVc3aUIsQ0FBQSxDQUFFK2pCLFNBQVMsS0FBSy9pQixDQUFBLENBQUU2aEIsVUFBQSxDQUFXN2lCLENBQUEsQ0FBRW1rQixTQUFTO0lBQ3ZILENBQUMsR0FBRyxLQUFLb2YsZUFBQSxDQUFnQnJPLFVBQUEsQ0FBVztFQUN0QztFQUlBdVAsa0JBQUEsRUFBb0I7SUFDbEIsSUFBSTlrQyxDQUFBO0lBQ0osS0FBSytWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsR0FBZSxLQUFLcWhCLFlBQUEsR0FBZXJrQyxDQUFBLEdBQUksS0FBSzRqQyxlQUFBLEtBQW9CLFFBQVE1akMsQ0FBQSxDQUFFc2YsTUFBQSxDQUFPO0VBQzVHO0VBSUFxbEIscUJBQUEsRUFBdUI7SUFDckIsS0FBS252Qix3QkFBQSxDQUF5QnRDLEVBQUEsQ0FBRyxLQUFLb0MsS0FBQSxDQUFNNnVCLGVBQUEsRUFBaUIsYUFBY25rQyxDQUFBLElBQU07TUFDL0UsSUFBSUssQ0FBQTtNQUNKTCxDQUFBLENBQUUwekIsZUFBQSxDQUFnQixHQUFHLEtBQUt1UixzQkFBQSxDQUF1QixJQUFJNWtDLENBQUEsR0FBSSxLQUFLdWpDLGVBQUEsS0FBb0IsUUFBUXZqQyxDQUFBLENBQUVvdUIsTUFBQSxJQUFVLEtBQUttVixlQUFBLENBQWdCdGdCLEtBQUEsQ0FBTSxHQUFHbU4sRUFBQSxDQUFHLElBQUU7SUFDM0ksR0FBRyxJQUFFLEdBQUcza0IsRUFBQSxDQUFHLEtBQUssS0FBS3VKLGdCQUFBLENBQWlCbkMsRUFBQSxDQUFHcXdCLEVBQUEsRUFBS3ZqQyxDQUFBLElBQU07TUFDbEQsSUFBSUssQ0FBQTtNQUNKLEtBQUswVixNQUFBLENBQU95WSxhQUFBLENBQWNDLE1BQUEsS0FBV3B1QixDQUFBLEdBQUksS0FBS3VqQyxlQUFBLEtBQW9CLFFBQVF2akMsQ0FBQSxDQUFFb3VCLE1BQUEsSUFBVSxLQUFLRixXQUFBLENBQVl2dUIsQ0FBQSxDQUFFNHRCLEtBQUs7SUFDaEgsQ0FBQztFQUNIO0VBSUE2VyxzQkFBQSxFQUF3QjtJQUN0QixLQUFLanZCLHdCQUFBLENBQXlCRSxRQUFBLENBQVM7RUFDekM7RUFJQXV2Qix1QkFBQSxFQUF5QjtJQUN2QixLQUFLbHZCLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsR0FBZSxLQUFLcWhCLFlBQUEsRUFBYyxLQUFLdHVCLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBY0MsTUFBQSxHQUFTLEtBQUsxWSxNQUFBLENBQU95WSxhQUFBLENBQWNsTCxLQUFBLENBQU0sSUFBSSxLQUFLdk4sTUFBQSxDQUFPeVksYUFBQSxDQUFjbGpCLElBQUEsQ0FBSyxLQUFLKzRCLFlBQVk7RUFDcEw7RUFZQUssT0FBQSxFQUFTO0lBQ1AsS0FBSzN1QixNQUFBLENBQU95WSxhQUFBLENBQWM5aEIsSUFBQSxDQUFLLEdBQUcsS0FBS0EsSUFBQSxDQUFLO0VBQzlDO0VBS0E4RyxRQUFBLEVBQVU7SUFDUixLQUFLd0MsY0FBQSxDQUFlLEdBQUcsS0FBSzR0QixlQUFBLElBQW1CLEtBQUtBLGVBQUEsQ0FBZ0Jwd0IsT0FBQSxDQUFRO0VBQzlFO0FBQ0Y7QUFDQSxJQUFJMHhCLEVBQUEsR0FBc0IsZ0JBQUNwa0MsQ0FBQSxLQUFPQSxDQUFBLENBQUVBLENBQUEsQ0FBRXFrQyxLQUFBLEdBQVEsS0FBSyxTQUFTcmtDLENBQUEsQ0FBRUEsQ0FBQSxDQUFFc2tDLE1BQUEsR0FBUyxLQUFLLFVBQVV0a0MsQ0FBQSxDQUFFQSxDQUFBLENBQUV1a0MsSUFBQSxHQUFPLEtBQUssUUFBUXZrQyxDQUFBLEdBQUlva0MsRUFBQSxJQUFNLENBQUMsQ0FBQztFQUFHSSxFQUFBLEdBQXNCLGdCQUFDeGtDLENBQUEsS0FBT0EsQ0FBQSxDQUFFeWtDLFFBQUEsR0FBVyxZQUFZemtDLENBQUEsQ0FBRTBrQyxPQUFBLEdBQVUsV0FBVzFrQyxDQUFBLENBQUUya0Msa0JBQUEsR0FBcUIsaUJBQWlCM2tDLENBQUEsQ0FBRTRrQyxpQkFBQSxHQUFvQixTQUFTNWtDLENBQUEsQ0FBRTZrQyxNQUFBLEdBQVMsVUFBVTdrQyxDQUFBLEdBQUl3a0MsRUFBQSxJQUFNLENBQUMsQ0FBQztFQUFHTSxFQUFBLEdBQXNCLGdCQUFDOWtDLENBQUEsS0FBT0EsQ0FBQSxDQUFFeWtDLFFBQUEsR0FBVyxZQUFZemtDLENBQUEsQ0FBRStrQyxjQUFBLEdBQWlCLFlBQVkva0MsQ0FBQSxHQUFJOGtDLEVBQUEsSUFBTSxDQUFDLENBQUM7RUFBR0UsRUFBQSxHQUFzQixnQkFBQ2hsQyxDQUFBLEtBQU9BLENBQUEsQ0FBRWlsQyxtQkFBQSxHQUFzQixvQkFBb0JqbEMsQ0FBQSxDQUFFMGtDLE9BQUEsR0FBVSxXQUFXMWtDLENBQUEsQ0FBRWtsQyxnQkFBQSxHQUFtQixvQkFBb0JsbEMsQ0FBQSxDQUFFbWxDLG1CQUFBLEdBQXNCLHVCQUF1Qm5sQyxDQUFBLENBQUVvbEMsV0FBQSxHQUFjLGVBQWVwbEMsQ0FBQSxHQUFJZ2xDLEVBQUEsSUFBTSxDQUFDLENBQUM7RUFBR0ssRUFBQSxHQUFzQixnQkFBQ3JsQyxDQUFBLEtBQU9BLENBQUEsQ0FBRXNsQyxRQUFBLEdBQVcsWUFBWXRsQyxDQUFBLENBQUV1bEMsS0FBQSxHQUFRLFNBQVN2bEMsQ0FBQSxDQUFFbWxDLG1CQUFBLEdBQXNCLHVCQUF1Qm5sQyxDQUFBLEdBQUlxbEMsRUFBQSxJQUFNLENBQUMsQ0FBQztFQUFHRyxFQUFBLEdBQXNCLGdCQUFDeGxDLENBQUEsS0FBT0EsQ0FBQSxDQUFFeWxDLE1BQUEsR0FBUyxVQUFVemxDLENBQUEsR0FBSXdsQyxFQUFBLElBQU0sQ0FBQyxDQUFDO0FBQzMwQixJQUFNRSxFQUFBLEdBQU4sTUFBUztFQUtQL2tDLFlBQVk7SUFDVjRILElBQUEsRUFBTXJKLENBQUE7SUFDTnltQyxhQUFBLEVBQWVwbUMsQ0FBQTtJQUNmdVQsTUFBQSxFQUFRdlMsQ0FBQTtJQUNSaWdCLEdBQUEsRUFBS3ZmLENBQUE7SUFDTDJrQyxTQUFBLEVBQVd4aUMsQ0FBQTtJQUNYdWMsVUFBQSxFQUFZcGMsQ0FBQSxHQUFJO0lBQ2hCc2lDLGtCQUFBLEVBQW9CcGlDO0VBQ3RCLEdBQUc7SUFDRCxLQUFLK2MsR0FBQSxHQUFNdmYsQ0FBQSxFQUFHLEtBQUtzSCxJQUFBLEdBQU9ySixDQUFBLEVBQUcsS0FBS3ltQyxhQUFBLEdBQWdCcG1DLENBQUEsRUFBRyxLQUFLdVQsTUFBQSxHQUFTdlMsQ0FBQSxFQUFHLEtBQUtxbEMsU0FBQSxHQUFZeGlDLENBQUEsRUFBRyxLQUFLdWMsVUFBQSxHQUFhcGMsQ0FBQSxFQUFHLEtBQUtzaUMsa0JBQUEsR0FBcUJwaUMsQ0FBQTtFQUMzSTtFQUlBLElBQUlxWixTQUFBLEVBQVc7SUFDYixNQUFNNWQsQ0FBQSxHQUFJLEtBQUs0VCxNQUFBLENBQU9BLE1BQUEsSUFBVSxDQUFDO0lBQ2pDLE9BQU8sS0FBSzh5QixTQUFBLElBQWEsRUFBRSxpQkFBaUIxbUMsQ0FBQSxLQUFNLEtBQUsybUMsa0JBQUEsS0FBdUIzbUMsQ0FBQSxDQUFFK3FCLFdBQUEsR0FBYyxLQUFLNGIsa0JBQUEsR0FBcUIzbUMsQ0FBQTtFQUMxSDtFQUlBbTRCLE1BQUEsRUFBUTtJQUNOLElBQUkvdkIsQ0FBQSxDQUFFLEtBQUtxK0IsYUFBQSxDQUFjdE8sS0FBSyxHQUM1QixPQUFPLEtBQUtzTyxhQUFBLENBQWN0TyxLQUFBLENBQU07RUFDcEM7RUFJQWxKLFFBQUEsRUFBVTtJQUNSLElBQUk3bUIsQ0FBQSxDQUFFLEtBQUtxK0IsYUFBQSxDQUFjeFgsT0FBTyxHQUM5QixPQUFPLEtBQUt3WCxhQUFBLENBQWN4WCxPQUFBLENBQVE7TUFDaEMyWCxRQUFBLEVBQVUsS0FBS3Y5QixJQUFBO01BQ2Z1SyxNQUFBLEVBQVEsS0FBS2dLO0lBQ2YsQ0FBQztFQUNMO0VBSUEsSUFBSXdsQixTQUFBLEVBQVc7SUFDYixNQUFNcGpDLENBQUEsR0FBSSxLQUFLeW1DLGFBQUEsQ0FBY3JELFFBQUE7SUFDN0IsT0FBTyxLQUFLeHZCLE1BQUEsQ0FBT3d2QixRQUFBLElBQVlwakMsQ0FBQTtFQUNqQztFQUlBLElBQUlrZixlQUFBLEVBQWlCO0lBQ25CLE9BQU8sS0FBS3VuQixhQUFBLENBQWN4bkIsUUFBQSxJQUFZLENBQUM7RUFDekM7RUFJQTRuQixTQUFBLEVBQVc7SUFDVCxPQUFPLEtBQUt2NEIsSUFBQSxLQUFTNDJCLEVBQUEsQ0FBR0UsTUFBQTtFQUMxQjtFQUlBMEIsUUFBQSxFQUFVO0lBQ1IsT0FBTyxLQUFLeDRCLElBQUEsS0FBUzQyQixFQUFBLENBQUdDLEtBQUE7RUFDMUI7RUFJQTRCLE9BQUEsRUFBUztJQUNQLE9BQU8sS0FBS3o0QixJQUFBLEtBQVM0MkIsRUFBQSxDQUFHRyxJQUFBO0VBQzFCO0FBQ0Y7QUFDQSxJQUFNMkIsRUFBQSxHQUFOLGNBQWlCNXhCLENBQUEsQ0FBRTtFQU1qQjNULFlBQVk7SUFBRW1TLE1BQUEsRUFBUTVULENBQUE7SUFBR3FWLGdCQUFBLEVBQWtCaFY7RUFBRSxHQUFHO0lBQzlDLE1BQU07TUFDSnVULE1BQUEsRUFBUTVULENBQUE7TUFDUnFWLGdCQUFBLEVBQWtCaFY7SUFDcEIsQ0FBQyxHQUFHLEtBQUt3VyxHQUFBLEdBQU07TUFDYjdGLGFBQUEsRUFBZTtJQUNqQixHQUFHLEtBQUt5ZCxNQUFBLEdBQVMsT0FBSSxLQUFLcGQsT0FBQSxHQUFVLE1BQU0sS0FBSzQxQixxQkFBQSxHQUF3Qm43QixFQUFBLENBQUcsSUFBSSxLQUFLLEdBQUcsS0FBS3dHLEtBQUEsR0FBd0IsbUJBQUlxSyxHQUFBLENBQUksR0FBR2pjLE1BQUEsQ0FBT29FLG1CQUFBLENBQW9CLE1BQU07TUFDN0osS0FBSzRILElBQUEsQ0FBSztJQUNaLEdBQUc7TUFBRWs0QixPQUFBLEVBQVM7SUFBSSxDQUFDO0VBQ3JCO0VBV0EsTUFBTXJlLFVBQVV2bUIsQ0FBQSxHQUFJLE9BQUk7SUFDdEJBLENBQUEsSUFBSyxLQUFLc2pCLEtBQUEsQ0FBTSxHQUFHLEtBQUs0akIsYUFBQSxDQUFjLE1BQU0sTUFBTSxLQUFLNTdCLElBQUEsQ0FBSyxHQUFHLEtBQUt5SyxNQUFBLENBQU9zTixPQUFBLENBQVFDLEtBQUEsQ0FBTTtFQUMzRjtFQUlBQSxNQUFBLEVBQVE7SUFDTixJQUFJdGpCLENBQUEsRUFBR0ssQ0FBQTtJQUNQLElBQUksS0FBS291QixNQUFBLEVBQVE7TUFDZixXQUFXLENBQUNwdEIsQ0FBQSxFQUFHVSxDQUFDLEtBQUssS0FBS3VRLEtBQUEsRUFBTztRQUMvQixNQUFNcE8sQ0FBQSxHQUFJLEtBQUtpakMsZUFBQSxDQUFnQjlsQyxDQUFBLENBQUVnSSxJQUFJO1FBQ3JDbkYsQ0FBQSxLQUFNLFVBQVVnK0IsRUFBQSxDQUFHaHNCLE1BQUEsQ0FBTyxLQUFLSCxNQUFBLENBQU9nYixFQUFBLENBQUd6YixLQUFBLENBQU0wYixRQUFBLEVBQVU5c0IsQ0FBQyxHQUFHa0UsQ0FBQSxDQUFFckcsQ0FBQSxDQUFFbWdCLEtBQUssS0FBS25nQixDQUFBLENBQUVtZ0IsS0FBQSxDQUFNO01BQ3JGO01BQ0EsS0FBSzVQLEtBQUEsR0FBd0IsbUJBQUlxSyxHQUFBLENBQUksR0FBRyxLQUFLd2IsS0FBQSxDQUFNLEdBQUcsS0FBSzFKLE1BQUEsR0FBUyxRQUFLenVCLENBQUEsR0FBSSxLQUFLcVIsT0FBQSxLQUFZLFFBQVFyUixDQUFBLENBQUUrdUIsSUFBQSxDQUFLLElBQUkxdUIsQ0FBQSxHQUFJLEtBQUtnUixPQUFBLEtBQVksUUFBUWhSLENBQUEsQ0FBRW1ULE9BQUEsQ0FBUSxHQUFHLEtBQUtuQyxPQUFBLEdBQVU7SUFDNUs7RUFDRjtFQU1BKzFCLGFBQWFwbkMsQ0FBQSxFQUFHO0lBQ2QsT0FBTyxLQUFLc1YsS0FBQSxDQUFNK0ksT0FBQSxLQUFZLFNBQVMsUUFBSyxLQUFLL0ksS0FBQSxDQUFNK0ksT0FBQSxDQUFRamIsUUFBQSxDQUFTcEQsQ0FBQztFQUMzRTtFQUlBd1QsUUFBQSxFQUFVO0lBQ1IsSUFBSXhULENBQUE7SUFDSixLQUFLZ1csY0FBQSxDQUFlLElBQUloVyxDQUFBLEdBQUksS0FBS3FSLE9BQUEsS0FBWSxRQUFRclIsQ0FBQSxDQUFFd1QsT0FBQSxDQUFRLEdBQUcsS0FBS25DLE9BQUEsR0FBVTtFQUNuRjtFQUlBM0UsS0FBQSxFQUFPO0lBQ0wsS0FBSzRJLEtBQUEsQ0FBTStJLE9BQUEsR0FBVS9SLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sQ0FDakMsS0FBS21LLEdBQUEsQ0FBSTdGLGFBQUEsRUFDVCxJQUFHLEtBQUttRixLQUFBLEdBQVEsQ0FBQyxLQUFLSixNQUFBLENBQU9nYixFQUFBLENBQUdsYSxHQUFBLENBQUl3d0IsWUFBWSxJQUFJLEVBQUMsRUFDdEQsR0FBRyxLQUFLL3hCLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUWtDLFlBQUEsQ0FBYSxXQUFXLGdCQUFnQixHQUFHalUsQ0FBQSxDQUFFUyxNQUFBLENBQU8sS0FBS2dKLE1BQUEsQ0FBT2diLEVBQUEsQ0FBR3piLEtBQUEsQ0FBTStJLE9BQUEsRUFBUyxLQUFLL0ksS0FBQSxDQUFNK0ksT0FBTztFQUM3SDtFQUlBLE1BQU0vUyxLQUFBLEVBQU87SUFDWCxJQUFJakwsQ0FBQTtJQUNKLElBQUksS0FBS291QixNQUFBLEVBQ1A7SUFDRixLQUFLQSxNQUFBLEdBQVMsTUFBSSxLQUFLcGQsT0FBQSxLQUFZLFFBQVEsS0FBS0EsT0FBQSxDQUFRbUMsT0FBQSxDQUFRLEdBQUcsS0FBSzh6QixvQkFBQSxDQUFxQjtJQUM3RixNQUFNdG5DLENBQUEsR0FBSSxNQUFNLEtBQUt1bkMsZUFBQSxDQUFnQjtJQUNyQyxLQUFLbDJCLE9BQUEsR0FBVSxJQUFJaXRCLEVBQUEsQ0FBRztNQUNwQi9NLEtBQUEsRUFBT3Z4QixDQUFBO01BQ1ArOEIsWUFBQSxFQUFjLEtBQUtobkIsTUFBQSxDQUFPd0wsR0FBQSxDQUFJVSxPQUFBLENBQVFyUSxFQUFBLENBQUcwRCxLQUFBLENBQU0wYixRQUFBO01BQy9Da0ssUUFBQSxFQUFVO1FBQ1JDLFlBQUEsRUFBY3RvQixDQUFBLENBQUVqQixFQUFBLENBQUdzZixDQUFBLENBQUV0ZixFQUFBLENBQUdQLE9BQUEsRUFBUyxlQUFlO1FBQ2hEd29CLE1BQUEsRUFBUWhuQixDQUFBLENBQUVqQixFQUFBLENBQUdzZixDQUFBLENBQUV0ZixFQUFBLENBQUdQLE9BQUEsRUFBUyxRQUFRO01BQ3JDO0lBQ0YsQ0FBQyxHQUFHLEtBQUsrUSxJQUFBLENBQUssS0FBSy9RLE9BQUEsQ0FBUW9zQixJQUFBLENBQUt4dEIsS0FBSyxJQUFJNVAsQ0FBQSxHQUFJLEtBQUtpVixLQUFBLENBQU0rSSxPQUFBLEtBQVksUUFBUWhlLENBQUEsQ0FBRTBNLE1BQUEsQ0FBTyxLQUFLc0UsT0FBQSxDQUFRa2tCLFVBQUEsQ0FBVyxDQUFDLEdBQUcsS0FBS2xrQixPQUFBLENBQVF3VixJQUFBLENBQUs7RUFDckk7RUFNQXpFLEtBQUtwaUIsQ0FBQSxFQUFHO0lBQ04sTUFBTUssQ0FBQSxHQUFJaVcsQ0FBQSxDQUFFeUIsSUFBQTtNQUFNMVcsQ0FBQSxHQUFJLEtBQUswVSxNQUFBLENBQU9nYixFQUFBLENBQUd6YixLQUFBLENBQU0rSSxPQUFBLENBQVE1TyxxQkFBQSxDQUFzQjtNQUFHMU4sQ0FBQSxHQUFJO1FBQzlFaVcsQ0FBQSxFQUFHM1gsQ0FBQSxDQUFFMlgsQ0FBQSxHQUFJM1csQ0FBQSxDQUFFMlcsQ0FBQTtRQUNYNVIsQ0FBQSxFQUFHL0YsQ0FBQSxDQUFFK0YsQ0FBQSxHQUFJL0YsQ0FBQSxDQUFFMFAsTUFBQSxHQUNYMU8sQ0FBQSxDQUFFdU8sR0FBQSxHQUFNLEtBQUtxM0I7TUFDZjtJQUNBbGxDLENBQUEsQ0FBRWlXLENBQUEsR0FBSWhZLENBQUEsR0FBSXFCLENBQUEsQ0FBRTJXLENBQUEsR0FBSSxLQUFLakMsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHeVcsV0FBQSxDQUFZeDNCLEtBQUEsS0FBVWpPLENBQUEsQ0FBRWlXLENBQUEsR0FBSSxLQUFLakMsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHeVcsV0FBQSxDQUFZeDNCLEtBQUEsR0FBUWhRLENBQUEsR0FBSXFCLENBQUEsQ0FBRTJXLENBQUEsR0FBSSxLQUFLMUMsS0FBQSxDQUFNK0ksT0FBQSxDQUFRcU0sS0FBQSxDQUFNN2EsSUFBQSxHQUFPekssSUFBQSxDQUFLb0csS0FBQSxDQUFNekosQ0FBQSxDQUFFaVcsQ0FBQyxJQUFJLE1BQU0sS0FBSzFDLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUXFNLEtBQUEsQ0FBTTlhLEdBQUEsR0FBTXhLLElBQUEsQ0FBS29HLEtBQUEsQ0FBTXpKLENBQUEsQ0FBRXFFLENBQUMsSUFBSTtFQUNuTjtFQUlBK3hCLE1BQUEsRUFBUTtJQUNOLEtBQUs3aUIsS0FBQSxDQUFNK0ksT0FBQSxDQUFRcU0sS0FBQSxDQUFNN2EsSUFBQSxHQUFPLEtBQUssS0FBS3lGLEtBQUEsQ0FBTStJLE9BQUEsQ0FBUXFNLEtBQUEsQ0FBTTlhLEdBQUEsR0FBTTtFQUN0RTtFQUlBczNCLGNBQUEsRUFBZ0I7SUFDZCxNQUFNbG5DLENBQUEsR0FBSSxDQUFDLE9BQU8sT0FBTztNQUFHSyxDQUFBLEdBQUlpVyxDQUFBLENBQUVyVSxHQUFBLENBQUk7TUFBR1osQ0FBQSxHQUFJaVYsQ0FBQSxDQUFFeEosSUFBQTtJQUMvQyxJQUFJLENBQUN6TSxDQUFBLElBQUssQ0FBQ0EsQ0FBQSxDQUFFMlcsVUFBQSxJQUFjM1csQ0FBQSxDQUFFK1csV0FBQSxJQUFlL1YsQ0FBQSxDQUFFMkIsTUFBQSxHQUFTLEdBQ3JELE9BQU87SUFDVCxNQUFNakIsQ0FBQSxHQUFJdUssQ0FBQSxDQUFFMEIsU0FBQSxDQUFVM04sQ0FBQSxDQUFFMlcsVUFBVSxJQUFJM1csQ0FBQSxDQUFFMlcsVUFBQSxHQUFhM1csQ0FBQSxDQUFFMlcsVUFBQSxDQUFXM1QsYUFBQTtJQUNsRSxJQUFJdEIsQ0FBQSxLQUFNLFFBQVExQixDQUFBLEtBQU0sUUFBUUwsQ0FBQSxDQUFFeUgsUUFBQSxDQUFTMUYsQ0FBQSxDQUFFeUssT0FBTyxHQUNsRCxPQUFPO0lBQ1QsTUFBTXRJLENBQUEsR0FBSSxLQUFLNlIsTUFBQSxDQUFPaUwsWUFBQSxDQUFhOEIsUUFBQSxDQUFTemlCLENBQUEsQ0FBRTJXLFVBQVU7SUFDeEQsT0FBTyxDQUFDOVMsQ0FBQSxJQUFLLEtBQUt1akMsUUFBQSxDQUFTLEVBQUVudEIsSUFBQSxDQUFNMVYsQ0FBQSxJQUFNVixDQUFBLENBQUU2VyxJQUFBLENBQUsyc0IsV0FBQSxDQUFZaG5CLEdBQUEsQ0FBSTliLENBQUEsQ0FBRXlFLElBQUksQ0FBQyxNQUFNLFFBQUssUUFBS3RILENBQUEsQ0FBRW1CLE9BQUEsQ0FBUSxtQkFBbUIsTUFBTTtFQUM1SDtFQVdBdWtDLFNBQUEsRUFBVztJQUNULE1BQU16bkMsQ0FBQSxHQUFJLEtBQUsrVixNQUFBLENBQU9pTCxZQUFBLENBQWFnQyxZQUFBO0lBQ25DLE9BQU9oakIsQ0FBQSxHQUFJeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLN08sQ0FBQSxDQUFFK2EsSUFBQSxDQUFLMnNCLFdBQUEsQ0FBWTNuQixNQUFBLENBQU8sQ0FBQyxFQUFFcFQsTUFBQSxDQUFRdEwsQ0FBQSxJQUFNLEVBQUUsS0FBSzBVLE1BQUEsQ0FBT3dWLFFBQUEsQ0FBU0QsU0FBQSxJQUFhanFCLENBQUEsQ0FBRXNtQyxtQkFBQSxLQUF3QixLQUFHLElBQUksRUFBQztFQUN6STtFQUlBTCxxQkFBQSxFQUF1QjtJQUNyQixLQUFLaDFCLEtBQUEsR0FBd0IsbUJBQUlxSyxHQUFBLENBQUksR0FBRyxLQUFLOHFCLFFBQUEsQ0FBUyxFQUFFM2xDLE9BQUEsQ0FBU3pCLENBQUEsSUFBTTtNQUNyRSxNQUFNZ0IsQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFMGQsTUFBQSxDQUFPO01BQ25CLEtBQUt6TCxLQUFBLENBQU0xRyxHQUFBLENBQUl2TCxDQUFBLEVBQUdnQixDQUFDO0lBQ3JCLENBQUM7RUFDSDtFQUlBLE1BQU1rbUMsZ0JBQUEsRUFBa0I7SUFDdEIsTUFBTXZuQyxDQUFBLEdBQUksRUFBQztJQUNYLElBQUlLLENBQUEsR0FBSTtJQUNSLFdBQVcsQ0FBQ2dCLENBQUEsRUFBR1UsQ0FBQyxLQUFLLEtBQUt1USxLQUFBLEVBQU87TUFDL0IsTUFBTXBPLENBQUEsR0FBSSxNQUFNbkMsQ0FBQSxDQUFFaWUsTUFBQSxDQUFPO1FBQUczYixDQUFBLEdBQUksS0FBSzhpQyxlQUFBLENBQWdCOWxDLENBQUEsQ0FBRWdJLElBQUk7TUFDM0QsSUFBSWhGLENBQUEsS0FBTSxRQUNSLElBQUk7UUFDRixLQUFLMCtCLGVBQUEsQ0FBZ0IxaEMsQ0FBQSxDQUFFZ0ksSUFBQSxFQUFNaEYsQ0FBQztNQUNoQyxRQUFFLENBQ0Y7TUFDRixNQUFNRSxDQUFBLEdBQUlGLENBQUEsS0FBTSxTQUFTc0csRUFBQSxDQUFHdEcsQ0FBQyxJQUFJO1FBQVFLLENBQUEsR0FBSW1PLENBQUEsQ0FBRXhTLENBQUEsQ0FDN0M2d0IsQ0FBQSxDQUFFN2UsU0FBQSxFQUNGaFIsQ0FBQSxDQUFFOHpCLEtBQUEsSUFBUzNxQixFQUFBLENBQUduSixDQUFBLENBQUVnSSxJQUFJLENBQ3RCO01BQ0EsQ0FBQ25GLENBQUMsRUFBRWs2QixJQUFBLENBQUssRUFBRXQ4QixPQUFBLENBQVM4QyxDQUFBLElBQU07UUFDeEIsSUFBSStjLENBQUEsRUFBR3JFLENBQUE7UUFDUCxNQUFNelQsQ0FBQSxHQUFJO1VBQ1JSLElBQUEsRUFBTWhJLENBQUEsQ0FBRWdJLElBQUE7VUFDUjBzQixVQUFBLEVBQVlBLENBQUEsS0FBTTtZQUNoQixLQUFLNlIsV0FBQSxDQUFZN2xDLENBQUM7VUFDcEI7VUFDQTIyQixJQUFBLEVBQU07WUFDSnZELEtBQUEsRUFBT3p3QixDQUFBO1lBQ1Awd0IsV0FBQSxFQUFhN3dCO1VBQ2Y7UUFDRjtRQUNBLElBQUkrSCxDQUFBLENBQUUwQixTQUFBLENBQVVwSixDQUFDLEdBQUc7VUFDbEIsTUFBTTJZLENBQUEsR0FBSTtZQUNSLEdBQUcxVCxDQUFBO1lBQ0gwSyxPQUFBLEVBQVMzUCxDQUFBO1lBQ1QwSixJQUFBLEVBQU1vTixDQUFBLENBQUVHO1VBQ1Y7VUFDQSxJQUFJelQsQ0FBQSxDQUFFckcsQ0FBQSxDQUFFOGxDLGFBQWEsR0FBRztZQUN0QixNQUFNcnFCLENBQUEsR0FBSXpiLENBQUEsQ0FBRThsQyxhQUFBLENBQWM7WUFDMUJ0cUIsQ0FBQSxDQUFFbk8sUUFBQSxHQUFXO2NBQ1hnbkIsTUFBQSxHQUFTelUsQ0FBQSxHQUFJNWYsQ0FBQSxDQUFFK2xDLFVBQUEsS0FBZSxPQUFPLFNBQVNubUIsQ0FBQSxDQUFFeGdCLElBQUEsQ0FBS1ksQ0FBQSxFQUFHdVUsQ0FBQSxDQUFFclUsR0FBQSxDQUFJLENBQUM7Y0FFL0RxMEIsV0FBQSxFQUFhO2NBQ2IvRSxLQUFBLEVBQU8sQ0FDTDtnQkFDRWpqQixJQUFBLEVBQU1vTixDQUFBLENBQUVHLElBQUE7Z0JBQ1J0SCxPQUFBLEVBQVNpSjtjQUNYO1lBRUo7VUFDRixPQUNFLENBQUNGLENBQUEsR0FBSXZiLENBQUEsQ0FBRStsQyxVQUFBLEtBQWUsUUFBUXhxQixDQUFBLENBQUVuYyxJQUFBLENBQUtZLENBQUEsRUFBR3VVLENBQUEsQ0FBRXJVLEdBQUEsQ0FBSSxDQUFDO1VBQ2pEakMsQ0FBQSxDQUFFMkgsSUFBQSxDQUFLNFYsQ0FBQztRQUNWLFdBQVczWSxDQUFBLENBQUUwSixJQUFBLEtBQVNvTixDQUFBLENBQUVHLElBQUEsRUFDdEI3YixDQUFBLENBQUUySCxJQUFBLENBQUs7VUFDTCxHQUFHa0MsQ0FBQTtVQUNILEdBQUdqRixDQUFBO1VBQ0gwSixJQUFBLEVBQU1vTixDQUFBLENBQUVHO1FBQ1YsQ0FBQyxXQUNNalgsQ0FBQSxDQUFFMEosSUFBQSxLQUFTb04sQ0FBQSxDQUFFRSxTQUFBLEVBQ3BCNWIsQ0FBQSxDQUFFMkgsSUFBQSxDQUFLO1VBQ0wyRyxJQUFBLEVBQU1vTixDQUFBLENBQUVFO1FBQ1YsQ0FBQyxPQUNFO1VBQ0gsTUFBTTJCLENBQUEsR0FBSTtZQUNSLEdBQUcxVCxDQUFBO1lBQ0gsR0FBR2pGLENBQUE7WUFDSDBKLElBQUEsRUFBTW9OLENBQUEsQ0FBRUM7VUFDVjtVQUNBLGNBQWM0QixDQUFBLElBQUtsZCxDQUFBLEtBQU0sS0FBS0wsQ0FBQSxDQUFFMkgsSUFBQSxDQUFLO1lBQ25DMkcsSUFBQSxFQUFNb04sQ0FBQSxDQUFFRTtVQUNWLENBQUMsR0FBRzViLENBQUEsQ0FBRTJILElBQUEsQ0FBSzRWLENBQUMsR0FBRyxjQUFjQSxDQUFBLElBQUtsZCxDQUFBLEdBQUksS0FBS2lTLEtBQUEsQ0FBTW1yQixJQUFBLEdBQU8sS0FBS3o5QixDQUFBLENBQUUySCxJQUFBLENBQUs7WUFDbEUyRyxJQUFBLEVBQU1vTixDQUFBLENBQUVFO1VBQ1YsQ0FBQztRQUNIO01BQ0YsQ0FBQyxHQUFHdmIsQ0FBQTtJQUNOO0lBQ0EsT0FBT0wsQ0FBQTtFQUNUO0VBTUFtbkMsZ0JBQWdCbm5DLENBQUEsRUFBRztJQUNqQixNQUFNO1FBQUVvaEIsS0FBQSxFQUFPL2dCO01BQUUsSUFBSSxLQUFLMFYsTUFBQTtNQUFRMVUsQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFcW5DLFdBQUEsQ0FBWXpsQyxHQUFBLENBQUlqQyxDQUFDO01BQUcrQixDQUFBLEdBQUkxQixDQUFBLENBQUUwbkMsUUFBQSxDQUFTTCxXQUFBO0lBQzNFLE9BQU9qa0MsS0FBQSxDQUFNb0wsSUFBQSxDQUFLOU0sQ0FBQSxDQUFFRixJQUFBLENBQUssQ0FBQyxFQUFFNEYsUUFBQSxDQUFTekgsQ0FBQyxJQUFJLEtBQUswbkMsV0FBQSxDQUFZMW5DLENBQUEsRUFBRzRsQyxFQUFBLENBQUdMLFFBQUEsSUFBWWxrQyxDQUFBLElBQUssT0FBTyxTQUFTQSxDQUFBLENBQUUraEMsUUFBQTtFQUN0RztFQU9BTCxnQkFBZ0IvaUMsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDcEI2aEMsRUFBQSxDQUFHcjFCLEdBQUEsQ0FBSTtNQUNMeEQsSUFBQSxFQUFNaEosQ0FBQTtNQUNOb1UsT0FBQSxFQUFVcFQsQ0FBQSxJQUFNO1FBQ2QsSUFBSTZDLENBQUE7UUFDSixNQUFNO1VBQUU4ZSxZQUFBLEVBQWNqaEI7UUFBRSxJQUFJLEtBQUtnVSxNQUFBLENBQU9pTCxZQUFBO1FBQ3hDamYsQ0FBQSxJQUFLQSxDQUFBLENBQUVnWixJQUFBLENBQUtpdEIsa0JBQUEsS0FBdUIzbUMsQ0FBQSxDQUFFb3hCLGNBQUEsQ0FBZSxJQUFJdnVCLENBQUEsR0FBSSxLQUFLbU4sT0FBQSxLQUFZLFFBQVFuTixDQUFBLENBQUVxM0Isa0JBQUEsQ0FBbUJ2N0IsQ0FBQztNQUM3RztNQUlBa1QsRUFBQSxFQUFJblQ7SUFDTixDQUFDO0VBQ0g7RUFNQTZuQyxZQUFZNW5DLENBQUEsRUFBRztJQUNiLElBQUlxQixDQUFBO0lBQ0osTUFBTWhCLENBQUEsR0FBSWlXLENBQUEsQ0FBRXFCLEtBQUE7SUFDWixDQUFDdFcsQ0FBQSxHQUFJckIsQ0FBQSxDQUFFaW9DLFFBQUEsS0FBYSxRQUFRNW1DLENBQUEsQ0FBRUYsSUFBQSxDQUFLbkIsQ0FBQSxFQUFHSyxDQUFDLEdBQUcsS0FBSzZuQyxlQUFBLENBQWdCO0VBQ2pFO0VBSUFBLGdCQUFBLEVBQWtCO0lBQ2hCLElBQUlsb0MsQ0FBQTtJQUNKLENBQUNBLENBQUEsR0FBSSxLQUFLc1MsS0FBQSxLQUFVLFFBQVF0UyxDQUFBLENBQUU4QixPQUFBLENBQVN6QixDQUFBLElBQU07TUFDM0MsSUFBSWdCLENBQUE7TUFDSixDQUFDQSxDQUFBLEdBQUloQixDQUFBLENBQUV5bkMsVUFBQSxLQUFlLFFBQVF6bUMsQ0FBQSxDQUFFRixJQUFBLENBQUtkLENBQUEsRUFBR2lXLENBQUEsQ0FBRXJVLEdBQUEsQ0FBSSxDQUFDO0lBQ2pELENBQUM7RUFDSDtFQUtBLElBQUl5bEMsWUFBQSxFQUFjO0lBQ2hCLE1BQU0xbkMsQ0FBQSxHQUFJLENBQUM7SUFDWCxPQUFPeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLLEtBQUtrSCxNQUFBLENBQU9xTCxLQUFBLENBQU1zbUIsV0FBQSxDQUFZenNCLE9BQUEsQ0FBUSxDQUFDLEVBQUVuWixPQUFBLENBQVEsQ0FBQyxDQUFDekIsQ0FBQSxFQUFHZ0IsQ0FBQyxNQUFNO01BQzdFckIsQ0FBQSxDQUFFSyxDQUFBLElBQUtnQixDQUFBLENBQUUwYyxNQUFBLENBQU87SUFDbEIsQ0FBQyxHQUFHL2QsQ0FBQTtFQUNOO0FBQ0Y7QUFDQSxTQUFTbW9DLEdBQUEsRUFBSztFQUNaLE1BQU1ybkMsQ0FBQSxHQUFJSixNQUFBLENBQU91VyxZQUFBLENBQWE7RUFDOUIsSUFBSW5XLENBQUEsS0FBTSxNQUNSLE9BQU8sQ0FBQyxNQUFNLENBQUM7RUFDakIsSUFBSWQsQ0FBQSxHQUFJYyxDQUFBLENBQUV5VyxTQUFBO0lBQVdsWCxDQUFBLEdBQUlTLENBQUEsQ0FBRXNuQyxXQUFBO0VBQzNCLE9BQU9wb0MsQ0FBQSxLQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBS0EsQ0FBQSxDQUFFOE4sUUFBQSxLQUFhbkssSUFBQSxDQUFLdUwsU0FBQSxJQUFhbFAsQ0FBQSxDQUFFMk8sVUFBQSxDQUFXM0wsTUFBQSxHQUFTLE1BQU1oRCxDQUFBLENBQUUyTyxVQUFBLENBQVd0TyxDQUFBLEtBQU1MLENBQUEsR0FBSUEsQ0FBQSxDQUFFMk8sVUFBQSxDQUFXdE8sQ0FBQSxHQUFJQSxDQUFBLEdBQUksTUFBTUwsQ0FBQSxHQUFJQSxDQUFBLENBQUUyTyxVQUFBLENBQVd0TyxDQUFBLEdBQUksSUFBSUEsQ0FBQSxHQUFJTCxDQUFBLENBQUV3TyxXQUFBLENBQVl4TCxNQUFBLElBQVUsQ0FBQ2hELENBQUEsRUFBR0ssQ0FBQztBQUM1TTtBQUNBLFNBQVNnb0MsR0FBR3ZuQyxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0VBQ3RCLE1BQU1VLENBQUEsR0FBSWhDLFFBQUEsQ0FBU2tZLFdBQUEsQ0FBWTtFQUMvQjVXLENBQUEsS0FBTSxVQUFVVSxDQUFBLENBQUUrVyxRQUFBLENBQVNoWSxDQUFBLEVBQUcsQ0FBQyxHQUFHaUIsQ0FBQSxDQUFFZ1gsTUFBQSxDQUFPL1ksQ0FBQSxFQUFHSyxDQUFDLE1BQU0wQixDQUFBLENBQUUrVyxRQUFBLENBQVM5WSxDQUFBLEVBQUdLLENBQUMsR0FBRzBCLENBQUEsQ0FBRWdYLE1BQUEsQ0FBT2pZLENBQUEsRUFBR0EsQ0FBQSxDQUFFNk4sVUFBQSxDQUFXM0wsTUFBTTtFQUN0RyxNQUFNa0IsQ0FBQSxHQUFJbkMsQ0FBQSxDQUFFdW1DLGFBQUEsQ0FBYztJQUFHamtDLENBQUEsR0FBSXRFLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLEtBQUs7RUFDN0RvRSxDQUFBLENBQUVuRSxXQUFBLENBQVlnRSxDQUFDO0VBQ2YsTUFBTUssQ0FBQSxHQUFJRixDQUFBLENBQUVtSyxXQUFBLElBQWU7RUFDM0IsT0FBTzBCLEVBQUEsQ0FBRzNMLENBQUM7QUFDYjtBQUNBLFNBQVNna0MsR0FBR3puQyxDQUFBLEVBQUc7RUFDYixNQUFNZCxDQUFBLEdBQUlzTSxDQUFBLENBQUV1QixjQUFBLENBQWUvTSxDQUFDO0VBQzVCLElBQUlkLENBQUEsS0FBTSxRQUFRc00sQ0FBQSxDQUFFc0MsT0FBQSxDQUFROU4sQ0FBQyxHQUMzQixPQUFPO0VBQ1QsSUFBSXdMLENBQUEsQ0FBRW9CLGFBQUEsQ0FBYzFOLENBQUMsR0FDbkIsT0FBT0EsQ0FBQSxDQUFFNlksWUFBQSxLQUFpQjtFQUM1QixJQUFJdk0sQ0FBQSxDQUFFc0MsT0FBQSxDQUFROU4sQ0FBQyxHQUNiLE9BQU87RUFDVCxNQUFNLENBQUNULENBQUEsRUFBR2dCLENBQUMsSUFBSThtQyxFQUFBLENBQUc7RUFDbEIsT0FBTzluQyxDQUFBLEtBQU0sT0FBTyxRQUFLZ29DLEVBQUEsQ0FBR3ZuQyxDQUFBLEVBQUdULENBQUEsRUFBR2dCLENBQUEsRUFBRyxNQUFNO0FBQzdDO0FBQ0EsU0FBU21uQyxHQUFHMW5DLENBQUEsRUFBRztFQUNiLE1BQU1kLENBQUEsR0FBSXNNLENBQUEsQ0FBRXVCLGNBQUEsQ0FBZS9NLENBQUEsRUFBRyxJQUFFO0VBQ2hDLElBQUlkLENBQUEsS0FBTSxNQUNSLE9BQU87RUFDVCxJQUFJc00sQ0FBQSxDQUFFb0IsYUFBQSxDQUFjMU4sQ0FBQyxHQUNuQixPQUFPQSxDQUFBLENBQUU2WSxZQUFBLEtBQWlCN1ksQ0FBQSxDQUFFNEIsS0FBQSxDQUFNb0IsTUFBQTtFQUNwQyxNQUFNLENBQUMzQyxDQUFBLEVBQUdnQixDQUFDLElBQUk4bUMsRUFBQSxDQUFHO0VBQ2xCLE9BQU85bkMsQ0FBQSxLQUFNLE9BQU8sUUFBS2dvQyxFQUFBLENBQUd2bkMsQ0FBQSxFQUFHVCxDQUFBLEVBQUdnQixDQUFBLEVBQUcsT0FBTztBQUM5QztBQUNBLElBQUlvbkMsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDdkQ5bkMsTUFBQSxDQUFPVyxjQUFBLENBQWVtbkMsRUFBQSxFQUFJLGNBQWM7RUFBRWxuQyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEa25DLEVBQUEsQ0FBR3g3QixpQkFBQSxHQUFvQnk3QixFQUFBO0FBQ3ZCLFNBQVNBLEdBQUEsRUFBSztFQUNaLElBQUlqb0MsQ0FBQSxHQUFJLENBQUMsUUFBUSxZQUFZLFNBQVMsVUFBVSxVQUFVLE9BQU8sS0FBSztFQUN0RSxPQUFPLDBEQUEwREEsQ0FBQSxDQUFFeU0sR0FBQSxDQUFJLFVBQVN2TixDQUFBLEVBQUc7SUFDakYsT0FBTyxlQUFlMm5CLE1BQUEsQ0FBTzNuQixDQUFBLEVBQUcsSUFBSTtFQUN0QyxDQUFDLEVBQUV3TixJQUFBLENBQUssSUFBSTtBQUNkO0FBQUEsQ0FDQyxVQUFTMU0sQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRXdNLGlCQUFBLEdBQW9CO0VBQzdFLElBQUl0TixDQUFBLEdBQUk4b0MsRUFBQTtFQUNSOW5DLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcscUJBQXFCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUM5RSxPQUFPakMsQ0FBQSxDQUFFc04saUJBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHdTdCLEVBQUU7QUFDTCxJQUFJRyxFQUFBLEdBQUssQ0FBQztFQUFHdjJCLEVBQUEsR0FBSyxDQUFDO0FBQ25CelIsTUFBQSxDQUFPVyxjQUFBLENBQWU4USxFQUFBLEVBQUksY0FBYztFQUFFN1EsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRDZRLEVBQUEsQ0FBRy9FLGFBQUEsR0FBZ0J1N0IsRUFBQTtBQUNuQixTQUFTQSxHQUFHbm9DLENBQUEsRUFBRztFQUNiLElBQUlkLENBQUEsR0FBSSxDQUNOLFNBQ0EsV0FDRjtFQUNBLE9BQU9jLENBQUEsSUFBS0EsQ0FBQSxDQUFFMEwsT0FBQSxHQUFVeE0sQ0FBQSxDQUFFeUgsUUFBQSxDQUFTM0csQ0FBQSxDQUFFMEwsT0FBTyxJQUFJO0FBQ2xEO0FBQUEsQ0FDQyxVQUFTMUwsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRTRNLGFBQUEsR0FBZ0I7RUFDekUsSUFBSTFOLENBQUEsR0FBSXlTLEVBQUE7RUFDUnpSLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsaUJBQWlCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUMxRSxPQUFPakMsQ0FBQSxDQUFFME4sYUFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdzN0IsRUFBRTtBQUNMLElBQUlFLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ25Cbm9DLE1BQUEsQ0FBT1csY0FBQSxDQUFld25DLEVBQUEsRUFBSSxjQUFjO0VBQUV2bkMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRHVuQyxFQUFBLENBQUdwOEIsTUFBQSxHQUFTcThCLEVBQUE7QUFDWixTQUFTQSxHQUFHdG9DLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCeUQsS0FBQSxDQUFNQyxPQUFBLENBQVExRCxDQUFDLElBQUlBLENBQUEsQ0FBRThCLE9BQUEsQ0FBUSxVQUFTekIsQ0FBQSxFQUFHO0lBQ3ZDUyxDQUFBLENBQUVaLFdBQUEsQ0FBWUcsQ0FBQztFQUNqQixDQUFDLElBQUlTLENBQUEsQ0FBRVosV0FBQSxDQUFZRixDQUFDO0FBQ3RCO0FBQUEsQ0FDQyxVQUFTYyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFaU0sTUFBQSxHQUFTO0VBQ2xFLElBQUkvTSxDQUFBLEdBQUltcEMsRUFBQTtFQUNSbm9DLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsVUFBVTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbkUsT0FBT2pDLENBQUEsQ0FBRStNLE1BQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHbThCLEVBQUU7QUFDTCxJQUFJRyxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQnRvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZTJuQyxFQUFBLEVBQUksY0FBYztFQUFFMW5DLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckQwbkMsRUFBQSxDQUFHbjZCLGFBQUEsR0FBZ0JvNkIsRUFBQTtBQUNuQixTQUFTQSxHQUFBLEVBQUs7RUFDWixPQUFPLENBQ0wsV0FDQSxXQUNBLFNBQ0EsY0FDQSxVQUNBLE9BQ0EsTUFDQSxNQUNBLFlBQ0EsY0FDQSxVQUNBLFVBQ0EsUUFDQSxNQUNBLE1BQ0EsTUFDQSxNQUNBLE1BQ0EsTUFDQSxVQUNBLFVBQ0EsTUFDQSxNQUNBLFFBQ0EsT0FDQSxZQUNBLE1BQ0EsVUFDQSxLQUNBLE9BQ0EsUUFDQSxXQUNBLFNBQ0EsU0FDQSxTQUNBLE1BQ0EsU0FDQSxNQUNBLFFBQ0Y7QUFDRjtBQUFBLENBQ0MsVUFBU3pvQyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFcU8sYUFBQSxHQUFnQjtFQUN6RSxJQUFJblAsQ0FBQSxHQUFJc3BDLEVBQUE7RUFDUnRvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGlCQUFpQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDMUUsT0FBT2pDLENBQUEsQ0FBRW1QLGFBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHazZCLEVBQUU7QUFDTCxJQUFJRyxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQnpvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZThuQyxFQUFBLEVBQUksY0FBYztFQUFFN25DLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckQ2bkMsRUFBQSxDQUFHQyxpQkFBQSxHQUFvQkMsRUFBQTtBQUN2QixTQUFTQSxHQUFHN29DLENBQUEsRUFBRztFQUNiLElBQUlkLENBQUEsR0FBSVUsTUFBQSxDQUFPcUQsZ0JBQUEsQ0FBaUJqRCxDQUFDO0lBQUdULENBQUEsR0FBSStQLFVBQUEsQ0FBV3BRLENBQUEsQ0FBRXFRLFFBQVE7SUFBR2hQLENBQUEsR0FBSStPLFVBQUEsQ0FBV3BRLENBQUEsQ0FBRXNRLFVBQVUsS0FBS2pRLENBQUEsR0FBSTtJQUFLMEIsQ0FBQSxHQUFJcU8sVUFBQSxDQUFXcFEsQ0FBQSxDQUFFdVEsVUFBVTtJQUFHck0sQ0FBQSxHQUFJa00sVUFBQSxDQUFXcFEsQ0FBQSxDQUFFd1EsY0FBYztJQUFHbk0sQ0FBQSxHQUFJK0wsVUFBQSxDQUFXcFEsQ0FBQSxDQUFFeVEsU0FBUztJQUFHbE0sQ0FBQSxHQUFJbEUsQ0FBQSxHQUFJO0lBQUtxRSxDQUFBLElBQUtyRCxDQUFBLEdBQUloQixDQUFBLElBQUs7SUFBR3VFLENBQUEsR0FBSVAsQ0FBQSxHQUFJSCxDQUFBLEdBQUluQyxDQUFBLEdBQUkyQyxDQUFBLEdBQUlILENBQUE7RUFDeFAsT0FBT0ssQ0FBQTtBQUNUO0FBQUEsQ0FDQyxVQUFTOUQsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRTRvQyxpQkFBQSxHQUFvQjtFQUM3RSxJQUFJMXBDLENBQUEsR0FBSXlwQyxFQUFBO0VBQ1J6b0MsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxxQkFBcUI7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQzlFLE9BQU9qQyxDQUFBLENBQUUwcEMsaUJBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHRixFQUFFO0FBQ0wsSUFBSUksRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDckMvb0MsTUFBQSxDQUFPVyxjQUFBLENBQWVvb0MsRUFBQSxFQUFJLGNBQWM7RUFBRW5vQyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEbW9DLEVBQUEsQ0FBRzU3QixpQkFBQSxHQUFvQjY3QixFQUFBO0FBQ3ZCLFNBQVNBLEdBQUdscEMsQ0FBQSxFQUFHO0VBQ2IsT0FBT0EsQ0FBQSxDQUFFc04sZUFBQSxLQUFvQjtBQUMvQjtBQUFBLENBQ0MsVUFBU3ROLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUVxTixpQkFBQSxHQUFvQjtFQUM3RSxJQUFJbk8sQ0FBQSxHQUFJK3BDLEVBQUE7RUFDUi9vQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLHFCQUFxQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDOUUsT0FBT2pDLENBQUEsQ0FBRW1PLGlCQUFBO0lBQ1g7RUFBRSxDQUFDO0FBQ0wsR0FBRzI3QixFQUFFO0FBQ0w5b0MsTUFBQSxDQUFPVyxjQUFBLENBQWVrb0MsRUFBQSxFQUFJLGNBQWM7RUFBRWpvQyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEaW9DLEVBQUEsQ0FBR3g3QixXQUFBLEdBQWM0N0IsRUFBQTtBQUNqQixJQUFJQyxFQUFBLEdBQUtsQixFQUFBO0VBQUltQixFQUFBLEdBQUtMLEVBQUE7QUFDbEIsU0FBU0csR0FBR25wQyxDQUFBLEVBQUc7RUFDYixJQUFJZCxDQUFBLEdBQUk7RUFDUixLQUFLLEdBQUdrcUMsRUFBQSxDQUFHeDhCLGFBQUEsRUFBZTVNLENBQUMsR0FDekIsUUFBUUEsQ0FBQSxDQUFFd04sSUFBQTtJQUFBLEtBQ0g7SUFBQSxLQUNBO0lBQUEsS0FDQTtJQUFBLEtBQ0E7SUFBQSxLQUNBO0lBQUEsS0FDQTtJQUFBLEtBQ0E7SUFBQSxLQUNBO01BQ0h0TyxDQUFBLEdBQUk7TUFDSjtFQUFBLE9BR0pBLENBQUEsSUFBSyxHQUFHbXFDLEVBQUEsQ0FBR2g4QixpQkFBQSxFQUFtQnJOLENBQUM7RUFDakMsT0FBT2QsQ0FBQTtBQUNUO0FBQUEsQ0FDQyxVQUFTYyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFdU4sV0FBQSxHQUFjO0VBQ3ZFLElBQUlyTyxDQUFBLEdBQUk2cEMsRUFBQTtFQUNSN29DLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZUFBZTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDeEUsT0FBT2pDLENBQUEsQ0FBRXFPLFdBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHdTdCLEVBQUU7QUFDTCxJQUFJUSxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQixTQUFTQyxHQUFHeHBDLENBQUEsRUFBR2QsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7RUFDbkIsTUFBTWdCLENBQUEsR0FBSWhCLENBQUEsQ0FBRXVCLEtBQUEsS0FBVSxTQUFTLFVBQVU7SUFBT0csQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFZ0IsQ0FBQTtJQUFJNkMsQ0FBQSxHQUFJLElBQUlsRSxDQUFBO0VBQ2xFLElBQUlLLENBQUEsQ0FBRWdCLENBQUEsSUFBSyxhQUFZZ0QsQ0FBQSxFQUFHO0lBQ3hCLE9BQU8sS0FBS0gsQ0FBQSxNQUFPLFdBQVcsS0FBS0EsQ0FBQSxJQUFLbkMsQ0FBQSxDQUFFTCxLQUFBLENBQU0sTUFBTTJDLENBQUMsSUFBSSxLQUFLSCxDQUFBO0VBQ2xFLEdBQUc3QyxDQUFBLEtBQU0sU0FBU2hCLENBQUEsQ0FBRXVMLEdBQUEsRUFBSztJQUN2QixNQUFNdkgsQ0FBQSxHQUFJaEUsQ0FBQSxDQUFFdUwsR0FBQTtJQUNadkwsQ0FBQSxDQUFFdUwsR0FBQSxHQUFNLFVBQVNySCxDQUFBLEVBQUc7TUFDbEIsT0FBT3pELENBQUEsQ0FBRW9ELENBQUEsR0FBSUcsQ0FBQSxDQUFFM0MsS0FBQSxDQUFNLE1BQU02QyxDQUFDO0lBQzlCO0VBQ0Y7RUFDQSxPQUFPbEUsQ0FBQTtBQUNUO0FBQ0EsU0FBU2txQyxHQUFBLEVBQUs7RUFDWixNQUFNenBDLENBQUEsR0FBSTtNQUNSa0osR0FBQSxFQUFLO01BQ0xDLEdBQUEsRUFBSztNQUNMQyxHQUFBLEVBQUs7TUFDTEMsS0FBQSxFQUFPO0lBQ1Q7SUFBR25LLENBQUEsR0FBSWdCLE1BQUEsQ0FBT2EsSUFBQSxDQUFLZixDQUFDLEVBQUVzSixJQUFBLENBQU0vSixDQUFBLElBQU1LLE1BQUEsQ0FBTzJKLFNBQUEsQ0FBVUMsVUFBQSxDQUFXbkMsV0FBQSxDQUFZLEVBQUVvQyxPQUFBLENBQVFsSyxDQUFDLE1BQU0sRUFBRTtFQUM3RixPQUFPTCxDQUFBLEtBQU0sV0FBV2MsQ0FBQSxDQUFFZCxDQUFBLElBQUssT0FBS2MsQ0FBQTtBQUN0QztBQUNBLFNBQVMwcEMsR0FBRzFwQyxDQUFBLEVBQUc7RUFDYixPQUFPQSxDQUFBLElBQUssUUFBUUEsQ0FBQSxLQUFNLE9BQU8sT0FBT0EsQ0FBQSxJQUFLLFlBQVlFLE1BQUEsQ0FBT2EsSUFBQSxDQUFLZixDQUFDLEVBQUVrQyxNQUFBLEdBQVM7QUFDbkY7QUFDQSxTQUFTeW5DLEdBQUczcEMsQ0FBQSxFQUFHO0VBQ2IsT0FBTyxDQUFDMHBDLEVBQUEsQ0FBRzFwQyxDQUFDO0FBQ2Q7QUFDQSxJQUFNNHBDLEVBQUEsR0FBS0EsQ0FBQSxLQUFNLE9BQU9ocUMsTUFBQSxHQUFTLE9BQU9BLE1BQUEsQ0FBTzJKLFNBQUEsS0FBYyxRQUFRbWdDLEVBQUEsQ0FBRzlwQyxNQUFBLENBQU8ySixTQUFBLENBQVU0QixRQUFRLE1BQU0saUJBQWlCeEMsSUFBQSxDQUFLL0ksTUFBQSxDQUFPMkosU0FBQSxDQUFVNEIsUUFBUSxLQUFLdkwsTUFBQSxDQUFPMkosU0FBQSxDQUFVNEIsUUFBQSxLQUFhLGNBQWN2TCxNQUFBLENBQU8ySixTQUFBLENBQVU2QixjQUFBLEdBQWlCO0FBQ3pPLFNBQVN5K0IsR0FBRzdwQyxDQUFBLEVBQUc7RUFDYixNQUFNZCxDQUFBLEdBQUl1cUMsRUFBQSxDQUFHO0VBQ2IsT0FBT3pwQyxDQUFBLEdBQUlBLENBQUEsQ0FBRThKLE9BQUEsQ0FBUSxXQUFXLFFBQUcsRUFBRUEsT0FBQSxDQUFRLGVBQWUsUUFBRyxFQUFFQSxPQUFBLENBQVEsV0FBVyxRQUFHLEVBQUVBLE9BQUEsQ0FBUSxRQUFRLFFBQUcsRUFBRUEsT0FBQSxDQUFRLFVBQVUsUUFBRyxFQUFFQSxPQUFBLENBQVEsVUFBVSxRQUFHLEVBQUVBLE9BQUEsQ0FBUSxXQUFXLFFBQUcsRUFBRUEsT0FBQSxDQUFRLFlBQVksUUFBRyxFQUFFQSxPQUFBLENBQVEsWUFBWSxLQUFLLEVBQUVBLE9BQUEsQ0FBUSxZQUFZLFFBQUcsRUFBRUEsT0FBQSxDQUFRLFFBQVEsR0FBRyxHQUFHNUssQ0FBQSxDQUFFaUssR0FBQSxHQUFNbkosQ0FBQSxHQUFJQSxDQUFBLENBQUU4SixPQUFBLENBQVEsY0FBYyxRQUFHLEVBQUVBLE9BQUEsQ0FBUSxTQUFTLFFBQUcsSUFBSTlKLENBQUEsR0FBSUEsQ0FBQSxDQUFFOEosT0FBQSxDQUFRLFNBQVMsTUFBTSxFQUFFQSxPQUFBLENBQVEsYUFBYSxLQUFLLEdBQUc5SixDQUFBO0FBQ3RaO0FBQ0EsU0FBUzhwQyxHQUFHOXBDLENBQUEsRUFBRztFQUNiLE9BQU9BLENBQUEsQ0FBRSxHQUFHZ0YsV0FBQSxDQUFZLElBQUloRixDQUFBLENBQUVvSSxLQUFBLENBQU0sQ0FBQztBQUN2QztBQUNBLFNBQVMyaEMsR0FBRy9wQyxDQUFBLEVBQUc7RUFDYixNQUFNZCxDQUFBLEdBQUlELFFBQUEsQ0FBU0UsYUFBQSxDQUFjLEtBQUs7RUFDdENELENBQUEsQ0FBRTBxQixLQUFBLENBQU11TCxRQUFBLEdBQVcsWUFBWWoyQixDQUFBLENBQUUwcUIsS0FBQSxDQUFNN2EsSUFBQSxHQUFPLFVBQVU3UCxDQUFBLENBQUUwcUIsS0FBQSxDQUFNNWEsTUFBQSxHQUFTLFVBQVU5UCxDQUFBLENBQUUrTyxTQUFBLEdBQVlqTyxDQUFBLEVBQUdmLFFBQUEsQ0FBU3laLElBQUEsQ0FBS3RaLFdBQUEsQ0FBWUYsQ0FBQztFQUMvSCxNQUFNSyxDQUFBLEdBQUlLLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtJQUFHNVYsQ0FBQSxHQUFJdEIsUUFBQSxDQUFTa1ksV0FBQSxDQUFZO0VBQzFELElBQUk1VyxDQUFBLENBQUV5cEMsVUFBQSxDQUFXOXFDLENBQUMsR0FBR0ssQ0FBQSxLQUFNLE1BQ3pCLE1BQU0sSUFBSTBTLEtBQUEsQ0FBTSwrQkFBK0I7RUFDakQxUyxDQUFBLENBQUUyWSxlQUFBLENBQWdCLEdBQUczWSxDQUFBLENBQUU0WSxRQUFBLENBQVM1WCxDQUFDLEdBQUd0QixRQUFBLENBQVMyWixXQUFBLENBQVksTUFBTSxHQUFHM1osUUFBQSxDQUFTeVosSUFBQSxDQUFLdE0sV0FBQSxDQUFZbE4sQ0FBQztBQUMvRjtBQUNBLFNBQVMrcUMsR0FBR2pxQyxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0VBQ25CLElBQUlnQixDQUFBO0VBQ0osT0FBTyxJQUFJVSxDQUFBLEtBQU07SUFDZixNQUFNbUMsQ0FBQSxHQUFJO01BQU1HLENBQUEsR0FBSUEsQ0FBQSxLQUFNO1FBQ3hCaEQsQ0FBQSxHQUFJLFFBQVFoQixDQUFBLEtBQU0sUUFBTVMsQ0FBQSxDQUFFWSxLQUFBLENBQU13QyxDQUFBLEVBQUduQyxDQUFDO01BQ3RDO01BQUd3QyxDQUFBLEdBQUlsRSxDQUFBLEtBQU0sUUFBTWdCLENBQUEsS0FBTTtJQUN6QlgsTUFBQSxDQUFPNkUsWUFBQSxDQUFhbEUsQ0FBQyxHQUFHQSxDQUFBLEdBQUlYLE1BQUEsQ0FBT3VFLFVBQUEsQ0FBV1osQ0FBQSxFQUFHckUsQ0FBQyxHQUFHdUUsQ0FBQSxJQUFLekQsQ0FBQSxDQUFFWSxLQUFBLENBQU13QyxDQUFBLEVBQUduQyxDQUFDO0VBQ3hFO0FBQ0Y7QUFDQSxTQUFTaXBDLEdBQUdscUMsQ0FBQSxFQUFHO0VBQ2IsT0FBT0UsTUFBQSxDQUFPQyxTQUFBLENBQVU0RSxRQUFBLENBQVMxRSxJQUFBLENBQUtMLENBQUMsRUFBRW9ILEtBQUEsQ0FBTSxlQUFlLEVBQUUsR0FBR0MsV0FBQSxDQUFZO0FBQ2pGO0FBQ0EsU0FBUzhpQyxHQUFHbnFDLENBQUEsRUFBRztFQUNiLE9BQU9rcUMsRUFBQSxDQUFHbHFDLENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVNvcUMsR0FBR3BxQyxDQUFBLEVBQUc7RUFDYixPQUFPa3FDLEVBQUEsQ0FBR2xxQyxDQUFDLE1BQU0sY0FBY2txQyxFQUFBLENBQUdscUMsQ0FBQyxNQUFNO0FBQzNDO0FBQ0EsU0FBU3FxQyxHQUFHcnFDLENBQUEsRUFBRztFQUNiLE9BQU9vcUMsRUFBQSxDQUFHcHFDLENBQUMsS0FBSyxlQUFlMkksSUFBQSxDQUFLM0ksQ0FBQSxDQUFFK0UsUUFBQSxDQUFTLENBQUM7QUFDbEQ7QUFDQSxTQUFTdWxDLEdBQUd0cUMsQ0FBQSxFQUFHO0VBQ2IsT0FBT2txQyxFQUFBLENBQUdscUMsQ0FBQyxNQUFNO0FBQ25CO0FBQ0EsU0FBU3VxQyxHQUFHdnFDLENBQUEsRUFBRztFQUNiLE9BQU9rcUMsRUFBQSxDQUFHbHFDLENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVN3cUMsR0FBR3hxQyxDQUFBLEVBQUc7RUFDYixPQUFPaUksT0FBQSxDQUFRQyxPQUFBLENBQVFsSSxDQUFDLE1BQU1BLENBQUE7QUFDaEM7QUFDQSxTQUFTeXFDLEdBQUd6cUMsQ0FBQSxFQUFHO0VBQ2IsT0FBT2txQyxFQUFBLENBQUdscUMsQ0FBQyxNQUFNO0FBQ25CO0FBQ0EsU0FBUzBxQyxHQUFHMXFDLENBQUEsRUFBRztFQUNiLE9BQU9rcUMsRUFBQSxDQUFHbHFDLENBQUMsTUFBTTtBQUNuQjtBQUNBLFNBQVMycUMsR0FBRzNxQyxDQUFBLEtBQU1kLENBQUEsRUFBRztFQUNuQixJQUFJLENBQUNBLENBQUEsQ0FBRWdELE1BQUEsRUFDTCxPQUFPbEMsQ0FBQTtFQUNULE1BQU1ULENBQUEsR0FBSUwsQ0FBQSxDQUFFMEssS0FBQSxDQUFNO0VBQ2xCLElBQUkyZ0MsRUFBQSxDQUFHdnFDLENBQUMsS0FBS3VxQyxFQUFBLENBQUdockMsQ0FBQyxHQUNmLFdBQVdnQixDQUFBLElBQUtoQixDQUFBLEVBQ2RnckMsRUFBQSxDQUFHaHJDLENBQUEsQ0FBRWdCLENBQUEsQ0FBRSxLQUFLUCxDQUFBLENBQUVPLENBQUEsTUFBTyxVQUFVTCxNQUFBLENBQU9vQixNQUFBLENBQU90QixDQUFBLEVBQUc7SUFBRSxDQUFDTyxDQUFBLEdBQUksQ0FBQztFQUFFLENBQUMsR0FBR29xQyxFQUFBLENBQUczcUMsQ0FBQSxDQUFFTyxDQUFBLEdBQUloQixDQUFBLENBQUVnQixDQUFBLENBQUUsS0FBS0wsTUFBQSxDQUFPb0IsTUFBQSxDQUFPdEIsQ0FBQSxFQUFHO0lBQUUsQ0FBQ08sQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFZ0IsQ0FBQTtFQUFHLENBQUM7RUFDbEgsT0FBT29xQyxFQUFBLENBQUczcUMsQ0FBQSxFQUFHLEdBQUdkLENBQUM7QUFDbkI7QUFDQSxTQUFTMHJDLEdBQUc1cUMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBRztFQUNuQixNQUFNZ0IsQ0FBQSxHQUFJLE9BQUlyQixDQUFBLHdGQUFtRkssQ0FBQTtFQUNqR1MsQ0FBQSxJQUFLUixPQUFBLENBQVFpVCxJQUFBLENBQUtsUyxDQUFDO0FBQ3JCO0FBQ0EsU0FBU3NxQyxHQUFHN3FDLENBQUEsRUFBRztFQUNiLElBQUk7SUFDRixPQUFPLElBQUlnSyxHQUFBLENBQUloSyxDQUFDLEVBQUVpSyxJQUFBO0VBQ3BCLFFBQUUsQ0FDRjtFQUNBLE9BQU9qSyxDQUFBLENBQUVrSyxTQUFBLENBQVUsR0FBRyxDQUFDLE1BQU0sT0FBT3RLLE1BQUEsQ0FBT3VLLFFBQUEsQ0FBU0MsUUFBQSxHQUFXcEssQ0FBQSxHQUFJSixNQUFBLENBQU91SyxRQUFBLENBQVNFLE1BQUEsR0FBU3JLLENBQUE7QUFDOUY7QUFDQSxTQUFTOHFDLEdBQUc5cUMsQ0FBQSxFQUFHO0VBQ2IsT0FBT0EsQ0FBQSxHQUFJLE1BQU1BLENBQUEsR0FBSSxNQUFNQSxDQUFBLEtBQU0sTUFBTUEsQ0FBQSxLQUFNLE1BQU1BLENBQUEsS0FBTSxPQUFPQSxDQUFBLEdBQUksTUFBTUEsQ0FBQSxHQUFJLE1BQU1BLENBQUEsR0FBSSxNQUFNQSxDQUFBLEdBQUksT0FBT0EsQ0FBQSxHQUFJLE9BQU9BLENBQUEsR0FBSSxPQUFPQSxDQUFBLEdBQUksT0FBT0EsQ0FBQSxHQUFJO0FBQ2hKO0FBQ0EsSUFBTStxQyxFQUFBLEdBQUs7SUFDVHhsQyxTQUFBLEVBQVc7SUFDWEMsR0FBQSxFQUFLO0lBQ0xDLEtBQUEsRUFBTztJQUNQQyxLQUFBLEVBQU87SUFDUEMsSUFBQSxFQUFNO0lBQ05DLEdBQUEsRUFBSztJQUNMQyxHQUFBLEVBQUs7SUFDTEMsS0FBQSxFQUFPO0lBQ1BDLElBQUEsRUFBTTtJQUNOQyxFQUFBLEVBQUk7SUFDSkMsSUFBQSxFQUFNO0lBQ05DLEtBQUEsRUFBTztJQUNQQyxNQUFBLEVBQVE7SUFDUkMsSUFBQSxFQUFNO0lBQ05DLEtBQUEsRUFBTztFQUNUO0VBQUcya0MsRUFBQSxHQUFLO0lBQ05qbEMsSUFBQSxFQUFNO0lBQ05RLEtBQUEsRUFBTztJQUNQTCxLQUFBLEVBQU87SUFDUE0sUUFBQSxFQUFVO0lBQ1ZDLE9BQUEsRUFBUztFQUNYO0FBQ0EsSUFBSXdrQyxFQUFBLEdBQUssTUFBTTtFQUNidHFDLFlBQUEsRUFBYztJQUNaLEtBQUt1cUMsU0FBQSxHQUFZampDLE9BQUEsQ0FBUUMsT0FBQSxDQUFRO0VBQ25DO0VBS0E2RCxJQUFJN00sQ0FBQSxFQUFHO0lBQ0wsT0FBTyxJQUFJK0ksT0FBQSxDQUFRLENBQUMxSSxDQUFBLEVBQUdnQixDQUFBLEtBQU07TUFDM0IsS0FBSzJxQyxTQUFBLEdBQVksS0FBS0EsU0FBQSxDQUFVaHRCLElBQUEsQ0FBS2hmLENBQUMsRUFBRWdmLElBQUEsQ0FBSzNlLENBQUMsRUFBRXNmLEtBQUEsQ0FBTXRlLENBQUM7SUFDekQsQ0FBQztFQUNIO0FBQ0Y7QUFDQSxTQUFTNHFDLEdBQUduckMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsR0FBSSxRQUFRO0VBQzVCLElBQUlnQixDQUFBO0lBQUdVLENBQUE7SUFBR21DLENBQUE7SUFBR0csQ0FBQSxHQUFJO0lBQU1FLENBQUEsR0FBSTtFQUMzQmxFLENBQUEsS0FBTUEsQ0FBQSxHQUFJLENBQUM7RUFDWCxNQUFNcUUsQ0FBQSxHQUFJLFNBQUFBLENBQUEsRUFBVztJQUNuQkgsQ0FBQSxHQUFJbEUsQ0FBQSxDQUFFdUosT0FBQSxLQUFZLFFBQUssSUFBSTdFLElBQUEsQ0FBS0MsR0FBQSxDQUFJLEdBQUdYLENBQUEsR0FBSSxNQUFNSCxDQUFBLEdBQUlwRCxDQUFBLENBQUVZLEtBQUEsQ0FBTUwsQ0FBQSxFQUFHVSxDQUFDLEdBQUdzQyxDQUFBLEtBQU0sU0FBU2hELENBQUEsR0FBSVUsQ0FBQSxHQUFJO0VBQzdGO0VBQ0EsT0FBTyxZQUFXO0lBQ2hCLE1BQU02QyxDQUFBLEdBQUlHLElBQUEsQ0FBS0MsR0FBQSxDQUFJO0lBQ25CLENBQUNULENBQUEsSUFBS2xFLENBQUEsQ0FBRXVKLE9BQUEsS0FBWSxVQUFPckYsQ0FBQSxHQUFJSyxDQUFBO0lBQy9CLE1BQU1pRixDQUFBLEdBQUk3SixDQUFBLElBQUs0RSxDQUFBLEdBQUlMLENBQUE7SUFDbkIsT0FBT2xELENBQUEsR0FBSSxNQUFNVSxDQUFBLEdBQUlQLFNBQUEsRUFBV3FJLENBQUEsSUFBSyxLQUFLQSxDQUFBLEdBQUk3SixDQUFBLElBQUtxRSxDQUFBLEtBQU1rQixZQUFBLENBQWFsQixDQUFDLEdBQUdBLENBQUEsR0FBSSxPQUFPRSxDQUFBLEdBQUlLLENBQUEsRUFBR1YsQ0FBQSxHQUFJcEQsQ0FBQSxDQUFFWSxLQUFBLENBQU1MLENBQUEsRUFBR1UsQ0FBQyxHQUFHc0MsQ0FBQSxLQUFNLFNBQVNoRCxDQUFBLEdBQUlVLENBQUEsR0FBSSxTQUFTLENBQUNzQyxDQUFBLElBQUtoRSxDQUFBLENBQUV5SixRQUFBLEtBQWEsVUFBT3pGLENBQUEsR0FBSVksVUFBQSxDQUFXUCxDQUFBLEVBQUdtRixDQUFDLElBQUkzRixDQUFBO0VBQ3BNO0FBQ0Y7QUFDQSxJQUFNZ29DLEVBQUEsR0FBcUIsZUFBQWxyQyxNQUFBLENBQU9tckMsTUFBQSxDQUF1QixlQUFBbnJDLE1BQUEsQ0FBT1csY0FBQSxDQUFlO0lBQzdFeXFDLFNBQUEsRUFBVztJQUNYQyxZQUFBLEVBQWNOLEVBQUE7SUFDZE8sZ0JBQUEsRUFBa0IzQixFQUFBO0lBQ2xCNEIsU0FBQSxFQUFXakMsRUFBQTtJQUNYa0MsVUFBQSxFQUFZNUIsRUFBQTtJQUNaNkIsbUJBQUEsRUFBcUI1QixFQUFBO0lBQ3JCNkIsUUFBQSxFQUFVM0IsRUFBQTtJQUNWNEIsU0FBQSxFQUFXbEIsRUFBQTtJQUNYbUIsaUJBQUEsRUFBbUJsQixFQUFBO0lBQ25CbUIsU0FBQSxFQUFXdEMsRUFBQTtJQUNYdUMsV0FBQSxFQUFhbkIsRUFBQTtJQUNib0IsU0FBQSxFQUFXOUIsRUFBQTtJQUNYK0IsT0FBQSxFQUFTN0IsRUFBQTtJQUNUdjhCLE9BQUEsRUFBUzY3QixFQUFBO0lBQ1R3QyxVQUFBLEVBQVkvQixFQUFBO0lBQ1pnQyxXQUFBLEVBQWF4QyxFQUFBO0lBQ2J5QyxRQUFBLEVBQVUvQixFQUFBO0lBQ1ZnQyxRQUFBLEVBQVUvQixFQUFBO0lBQ1ZnQyxjQUFBLEVBQWdCekIsRUFBQTtJQUNoQjBCLFNBQUEsRUFBV2hDLEVBQUE7SUFDWGlDLFFBQUEsRUFBVWhDLEVBQUE7SUFDVmlDLFdBQUEsRUFBYWhDLEVBQUE7SUFDYjVKLFFBQUEsRUFBVWlLLEVBQUE7SUFDVjRCLFlBQUEsRUFBYzNCLEVBQUE7SUFDZDRCLFFBQUEsRUFBVWxELEVBQUE7SUFDVm1ELFFBQUEsRUFBVTFCLEVBQUE7SUFDVjJCLE1BQUEsRUFBUTVDO0VBQ1YsR0FBR3JrQixNQUFBLENBQU9DLFdBQUEsRUFBYTtJQUFFaGxCLEtBQUEsRUFBTztFQUFTLENBQUMsQ0FBQztFQUFHaXNDLEVBQUEsR0FBcUIsZUFBQXpzQyxFQUFBLENBQUc4cUMsRUFBRTtBQUN4RWxyQyxNQUFBLENBQU9XLGNBQUEsQ0FBZTBvQyxFQUFBLEVBQUksY0FBYztFQUFFem9DLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckR5b0MsRUFBQSxDQUFHMThCLDBCQUFBLEdBQTZCbWdDLEVBQUE7QUFDaEMsSUFBSUMsRUFBQSxHQUFLRixFQUFBO0VBQUlHLEVBQUEsR0FBSzNFLEVBQUE7QUFDbEIsU0FBU3lFLEdBQUdodEMsQ0FBQSxFQUFHO0VBQ2IsSUFBSWQsQ0FBQTtFQUNKLENBQUMsR0FBRyt0QyxFQUFBLENBQUdSLFFBQUEsRUFBVXpzQyxDQUFDLEtBQUtkLENBQUEsR0FBSUQsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSyxHQUFHRCxDQUFBLENBQUUrTyxTQUFBLEdBQVlqTyxDQUFBLElBQUtkLENBQUEsR0FBSWMsQ0FBQTtFQUNqRixJQUFJVCxDQUFBLEdBQUksU0FBQUEsQ0FBU2dCLENBQUEsRUFBRztJQUNsQixPQUFPLEVBQUUsR0FBRzJzQyxFQUFBLENBQUc3K0IsYUFBQSxFQUFlLEVBQUUxSCxRQUFBLENBQVNwRyxDQUFBLENBQUVtTCxPQUFBLENBQVFyRSxXQUFBLENBQVksQ0FBQyxLQUFLMUUsS0FBQSxDQUFNb0wsSUFBQSxDQUFLeE4sQ0FBQSxDQUFFK04sUUFBUSxFQUFFQyxLQUFBLENBQU1oUCxDQUFDO0VBQ3JHO0VBQ0EsT0FBT29ELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSzdPLENBQUEsQ0FBRW9QLFFBQVEsRUFBRUMsS0FBQSxDQUFNaFAsQ0FBQztBQUN2QztBQUFBLENBQ0MsVUFBU1MsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRTZNLDBCQUFBLEdBQTZCO0VBQ3RGLElBQUkzTixDQUFBLEdBQUlxcUMsRUFBQTtFQUNScnBDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsOEJBQThCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUN2RixPQUFPakMsQ0FBQSxDQUFFMk4sMEJBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHeThCLEVBQUU7QUFDTCxJQUFJNkQsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDckNwdEMsTUFBQSxDQUFPVyxjQUFBLENBQWV5c0MsRUFBQSxFQUFJLGNBQWM7RUFBRXhzQyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEd3NDLEVBQUEsQ0FBRzFoQyxJQUFBLEdBQU8yaEMsRUFBQTtBQUNWLFNBQVNBLEdBQUd2dEMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBRztFQUNuQixJQUFJZ0IsQ0FBQTtFQUNKckIsQ0FBQSxLQUFNLFdBQVdBLENBQUEsR0FBSSxPQUFPSyxDQUFBLEtBQU0sV0FBV0EsQ0FBQSxHQUFJLENBQUM7RUFDbEQsSUFBSTBCLENBQUEsR0FBSWhDLFFBQUEsQ0FBU0UsYUFBQSxDQUFjYSxDQUFDO0VBQ2hDLElBQUkyQyxLQUFBLENBQU1DLE9BQUEsQ0FBUTFELENBQUMsR0FBRztJQUNwQixJQUFJa0UsQ0FBQSxHQUFJbEUsQ0FBQSxDQUFFMk0sTUFBQSxDQUFPLFVBQVNwSSxDQUFBLEVBQUc7TUFDM0IsT0FBT0EsQ0FBQSxLQUFNO0lBQ2YsQ0FBQztJQUNELENBQUNsRCxDQUFBLEdBQUlVLENBQUEsQ0FBRTZLLFNBQUEsRUFBV0MsR0FBQSxDQUFJbkwsS0FBQSxDQUFNTCxDQUFBLEVBQUc2QyxDQUFDO0VBQ2xDLE9BQ0VsRSxDQUFBLEtBQU0sUUFBUStCLENBQUEsQ0FBRTZLLFNBQUEsQ0FBVUMsR0FBQSxDQUFJN00sQ0FBQztFQUNqQyxTQUFTcUUsQ0FBQSxJQUFLaEUsQ0FBQSxFQUNaVyxNQUFBLENBQU9DLFNBQUEsQ0FBVUMsY0FBQSxDQUFlQyxJQUFBLENBQUtkLENBQUEsRUFBR2dFLENBQUMsTUFBTXRDLENBQUEsQ0FBRXNDLENBQUEsSUFBS2hFLENBQUEsQ0FBRWdFLENBQUE7RUFDMUQsT0FBT3RDLENBQUE7QUFDVDtBQUFBLENBQ0MsVUFBU2pCLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUU0TCxJQUFBLEdBQU87RUFDaEUsSUFBSTFNLENBQUEsR0FBSW91QyxFQUFBO0VBQ1JwdEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxRQUFRO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNqRSxPQUFPakMsQ0FBQSxDQUFFME0sSUFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUd5aEMsRUFBRTtBQUNMbnRDLE1BQUEsQ0FBT1csY0FBQSxDQUFldXNDLEVBQUEsRUFBSSxjQUFjO0VBQUV0c0MsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRHNzQyxFQUFBLENBQUdJLGdCQUFBLEdBQW1CQyxFQUFBO0FBQ3RCLElBQUlDLEVBQUEsR0FBS0wsRUFBQTtBQUNULFNBQVNJLEdBQUd6dEMsQ0FBQSxFQUFHO0VBQ2IsSUFBSWQsQ0FBQSxJQUFLLEdBQUd3dUMsRUFBQSxDQUFHOWhDLElBQUEsRUFBTSxLQUFLO0VBQzFCLE9BQU8xTSxDQUFBLENBQUVFLFdBQUEsQ0FBWVksQ0FBQyxHQUFHZCxDQUFBLENBQUUrTyxTQUFBO0FBQzdCO0FBQUEsQ0FDQyxVQUFTak8sQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRXd0QyxnQkFBQSxHQUFtQjtFQUM1RSxJQUFJdHVDLENBQUEsR0FBSWt1QyxFQUFBO0VBQ1JsdEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxvQkFBb0I7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQzdFLE9BQU9qQyxDQUFBLENBQUVzdUMsZ0JBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHTCxFQUFFO0FBQ0wsSUFBSVEsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDbkIxdEMsTUFBQSxDQUFPVyxjQUFBLENBQWUrc0MsRUFBQSxFQUFJLGNBQWM7RUFBRTlzQyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEOHNDLEVBQUEsQ0FBR3ovQixnQkFBQSxHQUFtQjAvQixFQUFBO0FBQ3RCLElBQUlDLEVBQUEsR0FBSzVGLEVBQUE7QUFDVCxTQUFTMkYsR0FBRzd0QyxDQUFBLEVBQUc7RUFDYixJQUFJZCxDQUFBLEVBQUdLLENBQUE7RUFDUCxRQUFRLEdBQUd1dUMsRUFBQSxDQUFHbGhDLGFBQUEsRUFBZTVNLENBQUMsSUFBSUEsQ0FBQSxDQUFFYyxLQUFBLENBQU1vQixNQUFBLEdBQVNsQyxDQUFBLENBQUVnTixRQUFBLEtBQWFuSyxJQUFBLENBQUt1TCxTQUFBLEdBQVlwTyxDQUFBLENBQUVrQyxNQUFBLElBQVUzQyxDQUFBLElBQUtMLENBQUEsR0FBSWMsQ0FBQSxDQUFFME4sV0FBQSxNQUFpQixRQUFReE8sQ0FBQSxLQUFNLFNBQVMsU0FBU0EsQ0FBQSxDQUFFZ0QsTUFBQSxNQUFZLFFBQVEzQyxDQUFBLEtBQU0sU0FBU0EsQ0FBQSxHQUFJO0FBQ3RNO0FBQUEsQ0FDQyxVQUFTUyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFbU8sZ0JBQUEsR0FBbUI7RUFDNUUsSUFBSWpQLENBQUEsR0FBSTB1QyxFQUFBO0VBQ1IxdEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxvQkFBb0I7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQzdFLE9BQU9qQyxDQUFBLENBQUVpUCxnQkFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUd3L0IsRUFBRTtBQUNMLElBQUlJLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBS3Z1QyxFQUFBLElBQU1BLEVBQUEsQ0FBR3d1QyxhQUFBLElBQWlCLFVBQVNsdUMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNyRSxJQUFJQSxDQUFBLElBQUttQixTQUFBLENBQVV3QixNQUFBLEtBQVcsR0FDNUIsU0FBUzNCLENBQUEsR0FBSSxHQUFHVSxDQUFBLEdBQUkvQixDQUFBLENBQUVnRCxNQUFBLEVBQVFrQixDQUFBLEVBQUc3QyxDQUFBLEdBQUlVLENBQUEsRUFBR1YsQ0FBQSxJQUN0QyxDQUFDNkMsQ0FBQSxJQUFLLEVBQUU3QyxDQUFBLElBQUtyQixDQUFBLE9BQVFrRSxDQUFBLEtBQU1BLENBQUEsR0FBSVQsS0FBQSxDQUFNeEMsU0FBQSxDQUFVaUksS0FBQSxDQUFNL0gsSUFBQSxDQUFLbkIsQ0FBQSxFQUFHLEdBQUdxQixDQUFDLElBQUk2QyxDQUFBLENBQUU3QyxDQUFBLElBQUtyQixDQUFBLENBQUVxQixDQUFBO0lBQ2xGLE9BQU9QLENBQUEsQ0FBRTZtQixNQUFBLENBQU96akIsQ0FBQSxJQUFLVCxLQUFBLENBQU14QyxTQUFBLENBQVVpSSxLQUFBLENBQU0vSCxJQUFBLENBQUtuQixDQUFDLENBQUM7RUFDcEQ7QUFDQWdCLE1BQUEsQ0FBT1csY0FBQSxDQUFlbXRDLEVBQUEsRUFBSSxjQUFjO0VBQUVsdEMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRGt0QyxFQUFBLENBQUdsaEMsdUJBQUEsR0FBMEJxaEMsRUFBQTtBQUM3QixJQUFJQyxFQUFBLEdBQUs5RSxFQUFBO0FBQ1QsU0FBUzZFLEdBQUdudUMsQ0FBQSxFQUFHO0VBQ2IsUUFBUSxHQUFHb3VDLEVBQUEsQ0FBR3ZoQywwQkFBQSxFQUE0QjdNLENBQUMsSUFBSSxDQUFDQSxDQUFDLElBQUkyQyxLQUFBLENBQU1vTCxJQUFBLENBQUsvTixDQUFBLENBQUVzTyxRQUFRLEVBQUV4SixNQUFBLENBQU8sVUFBUzVGLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ2hHLE9BQU8wdUMsRUFBQSxDQUFHQSxFQUFBLENBQUcsRUFBQyxFQUFHL3VDLENBQUEsRUFBRyxJQUFFLEdBQUdpdkMsRUFBQSxDQUFHNXVDLENBQUMsR0FBRyxJQUFFO0VBQ3BDLEdBQUcsRUFBRTtBQUNQO0FBQUEsQ0FDQyxVQUFTUyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFOE0sdUJBQUEsR0FBMEI7RUFDbkYsSUFBSTVOLENBQUEsR0FBSTh1QyxFQUFBO0VBQ1I5dEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRywyQkFBMkI7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ3BGLE9BQU9qQyxDQUFBLENBQUU0Tix1QkFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdpaEMsRUFBRTtBQUNMLElBQUlNLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ3JDdHVDLE1BQUEsQ0FBT1csY0FBQSxDQUFlMnRDLEVBQUEsRUFBSSxjQUFjO0VBQUUxdEMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRDB0QyxFQUFBLENBQUc3aUMsY0FBQSxHQUFpQjhpQyxFQUFBO0FBQ3BCLFNBQVNBLEdBQUd6dUMsQ0FBQSxFQUFHO0VBQ2IsT0FBTyxDQUNMLE1BQ0EsTUFDRixDQUFFMkcsUUFBQSxDQUFTM0csQ0FBQSxDQUFFMEwsT0FBTztBQUN0QjtBQUFBLENBQ0MsVUFBUzFMLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUUyTCxjQUFBLEdBQWlCO0VBQzFFLElBQUl6TSxDQUFBLEdBQUlzdkMsRUFBQTtFQUNSdHVDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsa0JBQWtCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUMzRSxPQUFPakMsQ0FBQSxDQUFFeU0sY0FBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUc0aUMsRUFBRTtBQUNMLElBQUlHLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ25CenVDLE1BQUEsQ0FBT1csY0FBQSxDQUFlOHRDLEVBQUEsRUFBSSxjQUFjO0VBQUU3dEMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRDZ0QyxFQUFBLENBQUdsakMsV0FBQSxHQUFjbWpDLEVBQUE7QUFDakIsU0FBU0EsR0FBRzV1QyxDQUFBLEVBQUc7RUFDYixPQUFPLENBQ0wsUUFDQSxRQUNBLE1BQ0EsT0FDQSxXQUNBLFNBQ0EsTUFDQSxPQUNBLFNBQ0EsVUFDQSxRQUNBLFFBQ0EsU0FDQSxVQUNBLFNBQ0EsTUFDRixDQUFFMkcsUUFBQSxDQUFTM0csQ0FBQSxDQUFFMEwsT0FBTztBQUN0QjtBQUFBLENBQ0MsVUFBUzFMLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUV5TCxXQUFBLEdBQWM7RUFDdkUsSUFBSXZNLENBQUEsR0FBSXl2QyxFQUFBO0VBQ1J6dUMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxlQUFlO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUN4RSxPQUFPakMsQ0FBQSxDQUFFdU0sV0FBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdpakMsRUFBRTtBQUNMeHVDLE1BQUEsQ0FBT1csY0FBQSxDQUFleXRDLEVBQUEsRUFBSSxjQUFjO0VBQUV4dEMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRHd0QyxFQUFBLENBQUd2aEMsY0FBQSxHQUFpQjhoQyxFQUFBO0FBQ3BCLElBQUlDLEVBQUEsR0FBSzVHLEVBQUE7RUFBSTZHLEVBQUEsR0FBS1IsRUFBQTtFQUFJUyxFQUFBLEdBQUtOLEVBQUE7QUFDM0IsU0FBU0csR0FBRzd1QyxDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQkEsQ0FBQSxLQUFNLFdBQVdBLENBQUEsR0FBSTtFQUNyQixJQUFJSyxDQUFBLEdBQUlMLENBQUEsR0FBSSxjQUFjO0lBQWNxQixDQUFBLEdBQUlyQixDQUFBLEdBQUksb0JBQW9CO0VBQ3BFLElBQUljLENBQUEsQ0FBRWdOLFFBQUEsS0FBYW5LLElBQUEsQ0FBS29LLFlBQUEsSUFBZ0JqTixDQUFBLENBQUVULENBQUEsR0FBSTtJQUM1QyxJQUFJMEIsQ0FBQSxHQUFJakIsQ0FBQSxDQUFFVCxDQUFBO0lBQ1YsS0FBSyxHQUFHeXZDLEVBQUEsQ0FBR3ZqQyxXQUFBLEVBQWF4SyxDQUFDLEtBQUssRUFBRSxHQUFHNnRDLEVBQUEsQ0FBR2xpQyxhQUFBLEVBQWUzTCxDQUFDLEtBQUssRUFBRSxHQUFHOHRDLEVBQUEsQ0FBR3BqQyxjQUFBLEVBQWdCMUssQ0FBQyxHQUNsRixJQUFJQSxDQUFBLENBQUVWLENBQUEsR0FDSlUsQ0FBQSxHQUFJQSxDQUFBLENBQUVWLENBQUEsV0FDQ1UsQ0FBQSxDQUFFdUIsVUFBQSxLQUFlLFFBQVF2QixDQUFBLENBQUV1QixVQUFBLENBQVdqQyxDQUFBLEdBQzdDVSxDQUFBLEdBQUlBLENBQUEsQ0FBRXVCLFVBQUEsQ0FBV2pDLENBQUEsT0FFakIsT0FBT1UsQ0FBQSxDQUFFdUIsVUFBQTtJQUNiLE9BQU9xc0MsRUFBQSxDQUFHNXRDLENBQUEsRUFBRy9CLENBQUM7RUFDaEI7RUFDQSxPQUFPYyxDQUFBO0FBQ1Q7QUFBQSxDQUNDLFVBQVNBLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUUrTSxjQUFBLEdBQWlCO0VBQzFFLElBQUk3TixDQUFBLEdBQUlvdkMsRUFBQTtFQUNScHVDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsa0JBQWtCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUMzRSxPQUFPakMsQ0FBQSxDQUFFNk4sY0FBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdzaEMsRUFBRTtBQUNMLElBQUlZLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBS3p2QyxFQUFBLElBQU1BLEVBQUEsQ0FBR3d1QyxhQUFBLElBQWlCLFVBQVNsdUMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNyRSxJQUFJQSxDQUFBLElBQUttQixTQUFBLENBQVV3QixNQUFBLEtBQVcsR0FDNUIsU0FBUzNCLENBQUEsR0FBSSxHQUFHVSxDQUFBLEdBQUkvQixDQUFBLENBQUVnRCxNQUFBLEVBQVFrQixDQUFBLEVBQUc3QyxDQUFBLEdBQUlVLENBQUEsRUFBR1YsQ0FBQSxJQUN0QyxDQUFDNkMsQ0FBQSxJQUFLLEVBQUU3QyxDQUFBLElBQUtyQixDQUFBLE9BQVFrRSxDQUFBLEtBQU1BLENBQUEsR0FBSVQsS0FBQSxDQUFNeEMsU0FBQSxDQUFVaUksS0FBQSxDQUFNL0gsSUFBQSxDQUFLbkIsQ0FBQSxFQUFHLEdBQUdxQixDQUFDLElBQUk2QyxDQUFBLENBQUU3QyxDQUFBLElBQUtyQixDQUFBLENBQUVxQixDQUFBO0lBQ2xGLE9BQU9QLENBQUEsQ0FBRTZtQixNQUFBLENBQU96akIsQ0FBQSxJQUFLVCxLQUFBLENBQU14QyxTQUFBLENBQVVpSSxLQUFBLENBQU0vSCxJQUFBLENBQUtuQixDQUFDLENBQUM7RUFDcEQ7QUFDQWdCLE1BQUEsQ0FBT1csY0FBQSxDQUFlcXVDLEVBQUEsRUFBSSxjQUFjO0VBQUVwdUMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRG91QyxFQUFBLENBQUd2aUMsYUFBQSxHQUFnQnlpQyxFQUFBO0FBQ25CLElBQUlDLEVBQUEsR0FBSy9GLEVBQUE7RUFBSWdHLEVBQUEsR0FBS3ZCLEVBQUE7RUFBSXdCLEVBQUEsR0FBS3hILEVBQUE7RUFBSXlILEVBQUEsR0FBS3RILEVBQUE7QUFDcEMsU0FBU2tILEdBQUdwdkMsQ0FBQSxFQUFHO0VBQ2IsT0FBTzJDLEtBQUEsQ0FBTW9MLElBQUEsQ0FBSy9OLENBQUEsQ0FBRWlDLGdCQUFBLEVBQWtCLEdBQUdzdEMsRUFBQSxDQUFHL2lDLGlCQUFBLEVBQW1CLENBQUMsQ0FBQyxFQUFFMUgsTUFBQSxDQUFPLFVBQVM1RixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUN2RixRQUFRLEdBQUdpd0MsRUFBQSxDQUFHNWlDLGFBQUEsRUFBZXJOLENBQUMsTUFBTSxHQUFHOHZDLEVBQUEsQ0FBR3hpQywwQkFBQSxFQUE0QnROLENBQUMsSUFBSTR2QyxFQUFBLENBQUdBLEVBQUEsQ0FBRyxFQUFDLEVBQUdqd0MsQ0FBQSxFQUFHLElBQUUsR0FBRyxDQUFDSyxDQUFDLEdBQUcsS0FBRSxJQUFJNHZDLEVBQUEsQ0FBR0EsRUFBQSxDQUFHLEVBQUMsRUFBR2p3QyxDQUFBLEVBQUcsSUFBRSxJQUFJLEdBQUdvd0MsRUFBQSxDQUFHeGlDLHVCQUFBLEVBQXlCdk4sQ0FBQyxHQUFHLElBQUU7RUFDbEssR0FBRyxFQUFFO0FBQ1A7QUFBQSxDQUNDLFVBQVNTLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUUyTSxhQUFBLEdBQWdCO0VBQ3pFLElBQUl6TixDQUFBLEdBQUlnd0MsRUFBQTtFQUNSaHZDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsaUJBQWlCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUMxRSxPQUFPakMsQ0FBQSxDQUFFeU4sYUFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdzaUMsRUFBRTtBQUNMLElBQUlRLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ25CeHZDLE1BQUEsQ0FBT1csY0FBQSxDQUFlNnVDLEVBQUEsRUFBSSxjQUFjO0VBQUU1dUMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRDR1QyxFQUFBLENBQUdDLHNCQUFBLEdBQXlCQyxFQUFBO0FBQzVCLFNBQVNBLEdBQUc1dkMsQ0FBQSxFQUFHO0VBQ2IsT0FBTyxDQUFDLGFBQWEySSxJQUFBLENBQUszSSxDQUFDO0FBQzdCO0FBQUEsQ0FDQyxVQUFTQSxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFMnZDLHNCQUFBLEdBQXlCO0VBQ2xGLElBQUl6d0MsQ0FBQSxHQUFJd3dDLEVBQUE7RUFDUnh2QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLDBCQUEwQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbkYsT0FBT2pDLENBQUEsQ0FBRXl3QyxzQkFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdGLEVBQUU7QUFDTCxJQUFJSSxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQjV2QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWl2QyxFQUFBLEVBQUksY0FBYztFQUFFaHZDLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckRndkMsRUFBQSxDQUFHNWlDLFNBQUEsR0FBWTZpQyxFQUFBO0FBQ2YsSUFBSUMsRUFBQSxHQUFLakQsRUFBQTtBQUNULFNBQVNnRCxHQUFHL3ZDLENBQUEsRUFBRztFQUNiLFFBQVEsR0FBR2d3QyxFQUFBLENBQUczRCxRQUFBLEVBQVVyc0MsQ0FBQyxJQUFJLFFBQUssQ0FBQyxDQUFDQSxDQUFBLElBQUssQ0FBQyxDQUFDQSxDQUFBLENBQUVnTixRQUFBLElBQVloTixDQUFBLENBQUVnTixRQUFBLEtBQWFuSyxJQUFBLENBQUtvSyxZQUFBO0FBQy9FO0FBQUEsQ0FDQyxVQUFTak4sQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRWtOLFNBQUEsR0FBWTtFQUNyRSxJQUFJaE8sQ0FBQSxHQUFJNHdDLEVBQUE7RUFDUjV2QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGFBQWE7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ3RFLE9BQU9qQyxDQUFBLENBQUVnTyxTQUFBO0lBQ1g7RUFBRSxDQUFDO0FBQ0wsR0FBRzJpQyxFQUFFO0FBQ0wsSUFBSUksRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDckNsd0MsTUFBQSxDQUFPVyxjQUFBLENBQWV1dkMsRUFBQSxFQUFJLGNBQWM7RUFBRXR2QyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEc3ZDLEVBQUEsQ0FBR3hpQyxNQUFBLEdBQVN5aUMsRUFBQTtBQUNaLFNBQVNBLEdBQUdyd0MsQ0FBQSxFQUFHO0VBQ2IsT0FBT0EsQ0FBQSxLQUFNLE9BQU8sUUFBS0EsQ0FBQSxDQUFFNk4sVUFBQSxDQUFXM0wsTUFBQSxLQUFXO0FBQ25EO0FBQUEsQ0FDQyxVQUFTbEMsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRTROLE1BQUEsR0FBUztFQUNsRSxJQUFJMU8sQ0FBQSxHQUFJa3hDLEVBQUE7RUFDUmx3QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLFVBQVU7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ25FLE9BQU9qQyxDQUFBLENBQUUwTyxNQUFBO0lBQ1g7RUFBRSxDQUFDO0FBQ0wsR0FBR3VpQyxFQUFFO0FBQ0wsSUFBSUcsRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDbkJyd0MsTUFBQSxDQUFPVyxjQUFBLENBQWUwdkMsRUFBQSxFQUFJLGNBQWM7RUFBRXp2QyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEeXZDLEVBQUEsQ0FBRzlpQyxXQUFBLEdBQWMraUMsRUFBQTtBQUNqQixJQUFJQyxFQUFBLEdBQUtsQyxFQUFBO0VBQUltQyxFQUFBLEdBQUtiLEVBQUE7RUFBSWMsRUFBQSxHQUFLekksRUFBQTtFQUFJMEksRUFBQSxHQUFLbEMsRUFBQTtBQUNwQyxTQUFTOEIsR0FBR3h3QyxDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQixJQUFJSyxDQUFBLEdBQUk7RUFDUixRQUFRLEdBQUdxeEMsRUFBQSxDQUFHbmxDLFdBQUEsRUFBYXpMLENBQUMsS0FBSyxFQUFFLEdBQUd5d0MsRUFBQSxDQUFHOWtDLGNBQUEsRUFBZ0IzTCxDQUFDLElBQUksVUFBTyxHQUFHMHdDLEVBQUEsQ0FBR3hqQyxTQUFBLEVBQVdsTixDQUFDLE1BQU0sR0FBRzJ3QyxFQUFBLENBQUcvakMsYUFBQSxFQUFlNU0sQ0FBQyxJQUFJVCxDQUFBLEdBQUlTLENBQUEsQ0FBRWMsS0FBQSxHQUFRZCxDQUFBLENBQUUwTixXQUFBLEtBQWdCLFNBQVNuTyxDQUFBLEdBQUlTLENBQUEsQ0FBRTBOLFdBQUEsQ0FBWTVELE9BQUEsQ0FBUSxVQUFLLEVBQUUsSUFBSTVLLENBQUEsS0FBTSxXQUFXSyxDQUFBLEdBQUlBLENBQUEsQ0FBRXVLLE9BQUEsQ0FBUSxJQUFJNkQsTUFBQSxDQUFPek8sQ0FBQSxFQUFHLEdBQUcsR0FBRyxFQUFFLElBQUlLLENBQUEsQ0FBRW9xQixJQUFBLENBQUssRUFBRXpuQixNQUFBLEtBQVc7QUFDcFI7QUFBQSxDQUNDLFVBQVNsQyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFeU4sV0FBQSxHQUFjO0VBQ3ZFLElBQUl2TyxDQUFBLEdBQUlxeEMsRUFBQTtFQUNScndDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZUFBZTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDeEUsT0FBT2pDLENBQUEsQ0FBRXVPLFdBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHNmlDLEVBQUU7QUFDTHB3QyxNQUFBLENBQU9XLGNBQUEsQ0FBZXF2QyxFQUFBLEVBQUksY0FBYztFQUFFcHZDLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckRvdkMsRUFBQSxDQUFHcGlDLE9BQUEsR0FBVStpQyxFQUFBO0FBQ2IsSUFBSUMsRUFBQSxHQUFLWCxFQUFBO0VBQUlZLEVBQUEsR0FBS1QsRUFBQTtBQUNsQixTQUFTTyxHQUFHN3dDLENBQUEsRUFBR2QsQ0FBQSxFQUFHO0VBQ2hCYyxDQUFBLENBQUUyWCxTQUFBLENBQVU7RUFDWixTQUFTcFksQ0FBQSxHQUFJLENBQUNTLENBQUMsR0FBR1QsQ0FBQSxDQUFFMkMsTUFBQSxHQUFTLElBQUs7SUFDaEMsSUFBSTNCLENBQUEsR0FBSWhCLENBQUEsQ0FBRXFLLEtBQUEsQ0FBTTtJQUNoQixJQUFJckosQ0FBQSxFQUFHO01BQ0wsSUFBSVAsQ0FBQSxHQUFJTyxDQUFBLEdBQUksR0FBR3V3QyxFQUFBLENBQUdsakMsTUFBQSxFQUFRNU4sQ0FBQyxLQUFLLEVBQUUsR0FBRyt3QyxFQUFBLENBQUd0akMsV0FBQSxFQUFhek4sQ0FBQSxFQUFHZCxDQUFDLEdBQ3ZELE9BQU87TUFDVEssQ0FBQSxDQUFFc0gsSUFBQSxDQUFLakcsS0FBQSxDQUFNckIsQ0FBQSxFQUFHb0QsS0FBQSxDQUFNb0wsSUFBQSxDQUFLL04sQ0FBQSxDQUFFNk4sVUFBVSxDQUFDO0lBQzFDO0VBQ0Y7RUFDQSxPQUFPO0FBQ1Q7QUFBQSxDQUNDLFVBQVM3TixDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFOE4sT0FBQSxHQUFVO0VBQ25FLElBQUk1TyxDQUFBLEdBQUlneEMsRUFBQTtFQUNSaHdDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsV0FBVztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDcEUsT0FBT2pDLENBQUEsQ0FBRTRPLE9BQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHbWlDLEVBQUU7QUFDTCxJQUFJZSxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQi93QyxNQUFBLENBQU9XLGNBQUEsQ0FBZW93QyxFQUFBLEVBQUksY0FBYztFQUFFbndDLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckRtd0MsRUFBQSxDQUFHOWpDLFVBQUEsR0FBYStqQyxFQUFBO0FBQ2hCLElBQUlDLEVBQUEsR0FBS3BFLEVBQUE7QUFDVCxTQUFTbUUsR0FBR2x4QyxDQUFBLEVBQUc7RUFDYixRQUFRLEdBQUdteEMsRUFBQSxDQUFHOUUsUUFBQSxFQUFVcnNDLENBQUMsSUFBSSxRQUFLLENBQUMsQ0FBQ0EsQ0FBQSxJQUFLLENBQUMsQ0FBQ0EsQ0FBQSxDQUFFZ04sUUFBQSxJQUFZaE4sQ0FBQSxDQUFFZ04sUUFBQSxLQUFhbkssSUFBQSxDQUFLdUssc0JBQUE7QUFDL0U7QUFBQSxDQUNDLFVBQVNwTixDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFbU4sVUFBQSxHQUFhO0VBQ3RFLElBQUlqTyxDQUFBLEdBQUkreEMsRUFBQTtFQUNSL3dDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDdkUsT0FBT2pDLENBQUEsQ0FBRWlPLFVBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHNmpDLEVBQUU7QUFDTCxJQUFJSSxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQm54QyxNQUFBLENBQU9XLGNBQUEsQ0FBZXd3QyxFQUFBLEVBQUksY0FBYztFQUFFdndDLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckR1d0MsRUFBQSxDQUFHcmpDLFlBQUEsR0FBZXNqQyxFQUFBO0FBQ2xCLElBQUlDLEVBQUEsR0FBS2xFLEVBQUE7QUFDVCxTQUFTaUUsR0FBR3R4QyxDQUFBLEVBQUc7RUFDYixJQUFJZCxDQUFBLElBQUssR0FBR3F5QyxFQUFBLENBQUczbEMsSUFBQSxFQUFNLEtBQUs7RUFDMUIsT0FBTzFNLENBQUEsQ0FBRStPLFNBQUEsR0FBWWpPLENBQUEsRUFBR2QsQ0FBQSxDQUFFZ1AsaUJBQUEsR0FBb0I7QUFDaEQ7QUFBQSxDQUNDLFVBQVNsTyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFZ08sWUFBQSxHQUFlO0VBQ3hFLElBQUk5TyxDQUFBLEdBQUlteUMsRUFBQTtFQUNSbnhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZ0JBQWdCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUN6RSxPQUFPakMsQ0FBQSxDQUFFOE8sWUFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdvakMsRUFBRTtBQUNMLElBQUlJLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ25CdnhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlNHdDLEVBQUEsRUFBSSxjQUFjO0VBQUUzd0MsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRDJ3QyxFQUFBLENBQUcvaUMsTUFBQSxHQUFTZ2pDLEVBQUE7QUFDWixTQUFTQSxHQUFHMXhDLENBQUEsRUFBRztFQUNiLElBQUlkLENBQUEsR0FBSWMsQ0FBQSxDQUFFMk8scUJBQUEsQ0FBc0I7SUFBR3BQLENBQUEsR0FBSUssTUFBQSxDQUFPZ1AsV0FBQSxJQUFlM1AsUUFBQSxDQUFTb0QsZUFBQSxDQUFnQnNCLFVBQUE7SUFBWXBELENBQUEsR0FBSVgsTUFBQSxDQUFPaVAsV0FBQSxJQUFlNVAsUUFBQSxDQUFTb0QsZUFBQSxDQUFnQmlCLFNBQUE7SUFBV3JDLENBQUEsR0FBSS9CLENBQUEsQ0FBRTRQLEdBQUEsR0FBTXZPLENBQUE7SUFBRzZDLENBQUEsR0FBSWxFLENBQUEsQ0FBRTZQLElBQUEsR0FBT3hQLENBQUE7RUFDNUwsT0FBTztJQUNMdVAsR0FBQSxFQUFLN04sQ0FBQTtJQUNMOE4sSUFBQSxFQUFNM0wsQ0FBQTtJQUNONEwsTUFBQSxFQUFRL04sQ0FBQSxHQUFJL0IsQ0FBQSxDQUFFK1AsTUFBQTtJQUNkQyxLQUFBLEVBQU85TCxDQUFBLEdBQUlsRSxDQUFBLENBQUVpUTtFQUNmO0FBQ0Y7QUFBQSxDQUNDLFVBQVNuUCxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFME8sTUFBQSxHQUFTO0VBQ2xFLElBQUl4UCxDQUFBLEdBQUl1eUMsRUFBQTtFQUNSdnhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsVUFBVTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbkUsT0FBT2pDLENBQUEsQ0FBRXdQLE1BQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHOGlDLEVBQUU7QUFDTCxJQUFJRyxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQjF4QyxNQUFBLENBQU9XLGNBQUEsQ0FBZSt3QyxFQUFBLEVBQUksY0FBYztFQUFFOXdDLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckQ4d0MsRUFBQSxDQUFHbnZDLE9BQUEsR0FBVW92QyxFQUFBO0FBQ2IsU0FBU0EsR0FBRzd4QyxDQUFBLEVBQUdkLENBQUEsRUFBRztFQUNoQnlELEtBQUEsQ0FBTUMsT0FBQSxDQUFRMUQsQ0FBQyxLQUFLQSxDQUFBLEdBQUlBLENBQUEsQ0FBRWdOLE9BQUEsQ0FBUSxHQUFHaE4sQ0FBQSxDQUFFOEIsT0FBQSxDQUFRLFVBQVN6QixDQUFBLEVBQUc7SUFDekQsT0FBT1MsQ0FBQSxDQUFFeUMsT0FBQSxDQUFRbEQsQ0FBQztFQUNwQixDQUFDLEtBQUtTLENBQUEsQ0FBRXlDLE9BQUEsQ0FBUXZELENBQUM7QUFDbkI7QUFBQSxDQUNDLFVBQVNjLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUV5QyxPQUFBLEdBQVU7RUFDbkUsSUFBSXZELENBQUEsR0FBSTB5QyxFQUFBO0VBQ1IxeEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxXQUFXO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNwRSxPQUFPakMsQ0FBQSxDQUFFdUQsT0FBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdrdkMsRUFBRTtBQUFBLENBQ0osVUFBUzN4QyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFeUMsT0FBQSxHQUFVekMsQ0FBQSxDQUFFME8sTUFBQSxHQUFTMU8sQ0FBQSxDQUFFNEwsSUFBQSxHQUFPNUwsQ0FBQSxDQUFFMkwsY0FBQSxHQUFpQjNMLENBQUEsQ0FBRXlMLFdBQUEsR0FBY3pMLENBQUEsQ0FBRXlOLFdBQUEsR0FBY3pOLENBQUEsQ0FBRTROLE1BQUEsR0FBUzVOLENBQUEsQ0FBRWdPLFlBQUEsR0FBZWhPLENBQUEsQ0FBRW1OLFVBQUEsR0FBYW5OLENBQUEsQ0FBRThOLE9BQUEsR0FBVTlOLENBQUEsQ0FBRWtOLFNBQUEsR0FBWWxOLENBQUEsQ0FBRXFOLGlCQUFBLEdBQW9Cck4sQ0FBQSxDQUFFMnZDLHNCQUFBLEdBQXlCM3ZDLENBQUEsQ0FBRTJNLGFBQUEsR0FBZ0IzTSxDQUFBLENBQUU0TSxhQUFBLEdBQWdCNU0sQ0FBQSxDQUFFd00saUJBQUEsR0FBb0J4TSxDQUFBLENBQUUrTSxjQUFBLEdBQWlCL00sQ0FBQSxDQUFFOE0sdUJBQUEsR0FBMEI5TSxDQUFBLENBQUVtTyxnQkFBQSxHQUFtQm5PLENBQUEsQ0FBRXd0QyxnQkFBQSxHQUFtQnh0QyxDQUFBLENBQUU2TSwwQkFBQSxHQUE2QjdNLENBQUEsQ0FBRXVOLFdBQUEsR0FBY3ZOLENBQUEsQ0FBRTRvQyxpQkFBQSxHQUFvQjVvQyxDQUFBLENBQUVxTyxhQUFBLEdBQWdCck8sQ0FBQSxDQUFFaU0sTUFBQSxHQUFTO0VBQ3JmLElBQUkvTSxDQUFBLEdBQUk2b0MsRUFBQTtFQUNSN25DLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcscUJBQXFCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUM5RSxPQUFPakMsQ0FBQSxDQUFFc04saUJBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJak4sQ0FBQSxHQUFJMm9DLEVBQUE7RUFDUmhvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGlCQUFpQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDMUUsT0FBTzVCLENBQUEsQ0FBRXFOLGFBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJck0sQ0FBQSxHQUFJNm5DLEVBQUE7RUFDUmxvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLFVBQVU7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ25FLE9BQU9aLENBQUEsQ0FBRTBMLE1BQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJaEwsQ0FBQSxHQUFJc25DLEVBQUE7RUFDUnJvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGlCQUFpQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDMUUsT0FBT0YsQ0FBQSxDQUFFb04sYUFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUlqTCxDQUFBLEdBQUlzbEMsRUFBQTtFQUNSeG9DLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcscUJBQXFCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUM5RSxPQUFPaUMsQ0FBQSxDQUFFd2xDLGlCQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSXJsQyxDQUFBLEdBQUl1bEMsRUFBQTtFQUNSNW9DLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZUFBZTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDeEUsT0FBT29DLENBQUEsQ0FBRWdLLFdBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJOUosQ0FBQSxHQUFJNmxDLEVBQUE7RUFDUnBwQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLDhCQUE4QjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDdkYsT0FBT3NDLENBQUEsQ0FBRW9KLDBCQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSWpKLENBQUEsR0FBSXVwQyxFQUFBO0VBQ1JqdEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxvQkFBb0I7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQzdFLE9BQU95QyxDQUFBLENBQUU0cEMsZ0JBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJMXBDLENBQUEsR0FBSTZwQyxFQUFBO0VBQ1J6dEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxvQkFBb0I7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQzdFLE9BQU8yQyxDQUFBLENBQUVxSyxnQkFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUlwRixDQUFBLEdBQUlnbEMsRUFBQTtFQUNSN3RDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsMkJBQTJCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNwRixPQUFPNEgsQ0FBQSxDQUFFK0QsdUJBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJK1QsQ0FBQSxHQUFJd3RCLEVBQUE7RUFDUm51QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGtCQUFrQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDM0UsT0FBTzBmLENBQUEsQ0FBRTlULGNBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJeVAsQ0FBQSxHQUFJeXlCLEVBQUE7RUFDUi91QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGlCQUFpQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDMUUsT0FBT3FiLENBQUEsQ0FBRTdQLGFBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJOFAsQ0FBQSxHQUFJZ3pCLEVBQUE7RUFDUnZ2QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLDBCQUEwQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbkYsT0FBT3NiLENBQUEsQ0FBRWt6QixzQkFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUlqekIsQ0FBQSxHQUFJc3NCLEVBQUE7RUFDUjlvQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLHFCQUFxQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDOUUsT0FBT3ViLENBQUEsQ0FBRXJQLGlCQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSXNQLENBQUEsR0FBSWt6QixFQUFBO0VBQ1IzdkMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxhQUFhO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUN0RSxPQUFPd2IsQ0FBQSxDQUFFelAsU0FBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUk2YSxDQUFBLEdBQUlrb0IsRUFBQTtFQUNSL3ZDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsV0FBVztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDcEUsT0FBTzRtQixDQUFBLENBQUVqYSxPQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSThPLENBQUEsR0FBSW8wQixFQUFBO0VBQ1I5d0MsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUN2RSxPQUFPeWIsQ0FBQSxDQUFFelAsVUFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUlnYixDQUFBLEdBQUlpcEIsRUFBQTtFQUNSbHhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZ0JBQWdCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUN6RSxPQUFPZ25CLENBQUEsQ0FBRW5hLFlBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJcWEsQ0FBQSxHQUFJOG5CLEVBQUE7RUFDUmp3QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLFVBQVU7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ25FLE9BQU9rbkIsQ0FBQSxDQUFFemEsTUFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUk0WixDQUFBLEdBQUk4b0IsRUFBQTtFQUNScHdDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZUFBZTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDeEUsT0FBT3FtQixDQUFBLENBQUUvWixXQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSThiLENBQUEsR0FBSWdsQixFQUFBO0VBQ1JydUMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxrQkFBa0I7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQzNFLE9BQU9vb0IsQ0FBQSxDQUFFNWQsY0FBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUk2ZCxDQUFBLEdBQUlrbEIsRUFBQTtFQUNSeHVDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsZUFBZTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDeEUsT0FBT3FvQixDQUFBLENBQUUvZCxXQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSThjLEVBQUEsR0FBSzhrQixFQUFBO0VBQ1RudEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxRQUFRO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNqRSxPQUFPb25CLEVBQUEsQ0FBRzNjLElBQUE7SUFDWjtFQUFFLENBQUM7RUFDSCxJQUFJb2IsQ0FBQSxHQUFJd3FCLEVBQUE7RUFDUnR4QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLFVBQVU7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ25FLE9BQU82bEIsQ0FBQSxDQUFFdFksTUFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUlrWCxDQUFBLEdBQUkrckIsRUFBQTtFQUNSenhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsV0FBVztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDcEUsT0FBT3lrQixDQUFBLENBQUVuakIsT0FBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdxbEMsRUFBRTtBQUNMLElBQUlnSyxFQUFBLEdBQUssQ0FBQztBQUNWNXhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlaXhDLEVBQUEsRUFBSSxjQUFjO0VBQUVoeEMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRGd4QyxFQUFBLENBQUdDLHVCQUFBLEdBQTBCQyxFQUFBO0FBQzdCLElBQUlDLEVBQUEsR0FBS25LLEVBQUE7QUFDVCxTQUFTa0ssR0FBR2h5QyxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHVSxDQUFBLEVBQUc7RUFDekIsSUFBSW1DLENBQUE7RUFDSm5DLENBQUEsS0FBTSxXQUFXQSxDQUFBLEdBQUk7RUFDckIsSUFBSXNDLENBQUEsR0FBSXRFLFFBQUEsQ0FBU2tZLFdBQUEsQ0FBWTtFQUM3QixJQUFJNVcsQ0FBQSxLQUFNLFVBQVVnRCxDQUFBLENBQUV5VSxRQUFBLENBQVNoWSxDQUFBLEVBQUcsQ0FBQyxHQUFHdUQsQ0FBQSxDQUFFMFUsTUFBQSxDQUFPL1ksQ0FBQSxFQUFHSyxDQUFDLE1BQU1nRSxDQUFBLENBQUV5VSxRQUFBLENBQVM5WSxDQUFBLEVBQUdLLENBQUMsR0FBR2dFLENBQUEsQ0FBRTBVLE1BQUEsQ0FBT2pZLENBQUEsRUFBR0EsQ0FBQSxDQUFFNk4sVUFBQSxDQUFXM0wsTUFBTSxJQUFJakIsQ0FBQSxLQUFNLE1BQUk7SUFDdEgsSUFBSXdDLENBQUEsR0FBSUYsQ0FBQSxDQUFFMnVDLGVBQUEsQ0FBZ0I7SUFDMUIsUUFBUSxHQUFHRCxFQUFBLENBQUd6RSxnQkFBQSxFQUFrQi9wQyxDQUFDO0VBQ25DO0VBQ0EsSUFBSUcsQ0FBQSxHQUFJTCxDQUFBLENBQUVpa0MsYUFBQSxDQUFjO0lBQUcxakMsQ0FBQSxHQUFJN0UsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztFQUMzRDJFLENBQUEsQ0FBRTFFLFdBQUEsQ0FBWXdFLENBQUM7RUFDZixJQUFJbUYsQ0FBQSxJQUFLM0YsQ0FBQSxHQUFJVSxDQUFBLENBQUU0SixXQUFBLE1BQWlCLFFBQVF0SyxDQUFBLEtBQU0sU0FBU0EsQ0FBQSxHQUFJO0VBQzNELE9BQU8yRixDQUFBO0FBQ1Q7QUFDQTdJLE1BQUEsQ0FBT1csY0FBQSxDQUFlZ25DLEVBQUEsRUFBSSxjQUFjO0VBQUUvbUMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRCttQyxFQUFBLENBQUdzSyxxQ0FBQSxHQUF3Q0MsRUFBQTtBQUMzQyxJQUFJQyxFQUFBLEdBQUt2SyxFQUFBO0VBQUl3SyxFQUFBLEdBQUtSLEVBQUE7QUFDbEIsU0FBU00sR0FBR3B5QyxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0VBQ3RCLElBQUlVLENBQUEsSUFBSyxHQUFHcXhDLEVBQUEsQ0FBR1AsdUJBQUEsRUFBeUIveEMsQ0FBQSxFQUFHZCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUM7RUFDbEQsUUFBUSxHQUFHOHhDLEVBQUEsQ0FBRzFDLHNCQUFBLEVBQXdCMXVDLENBQUM7QUFDekM7QUFBQSxDQUNDLFVBQVNqQixDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFbXlDLHFDQUFBLEdBQXdDO0VBQ2pHLElBQUlqekMsQ0FBQSxHQUFJMm9DLEVBQUE7RUFDUjNuQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLHlDQUF5QztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbEcsT0FBT2pDLENBQUEsQ0FBRWl6QyxxQ0FBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUd2SyxFQUFFO0FBQ0wsSUFBSTJLLEVBQUEsR0FBSyxDQUFDO0FBQUEsQ0FDVCxVQUFTdnlDLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUUreEMsdUJBQUEsR0FBMEI7RUFDbkYsSUFBSTd5QyxDQUFBLEdBQUk0eUMsRUFBQTtFQUNSNXhDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsMkJBQTJCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNwRixPQUFPakMsQ0FBQSxDQUFFNnlDLHVCQUFBO0lBQ1g7RUFBRSxDQUFDO0FBQ0wsR0FBR1EsRUFBRTtBQUNMLElBQUlDLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ25CdnlDLE1BQUEsQ0FBT1csY0FBQSxDQUFlNHhDLEVBQUEsRUFBSSxjQUFjO0VBQUUzeEMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRDJ4QyxFQUFBLENBQUc1NkIsS0FBQSxHQUFRNjZCLEVBQUE7QUFDWCxJQUFJQyxFQUFBLEdBQUs3SyxFQUFBO0FBQ1QsU0FBUzRLLEdBQUcxeUMsQ0FBQSxFQUFHZCxDQUFBLEVBQUc7RUFDaEIsSUFBSUssQ0FBQSxFQUFHZ0IsQ0FBQTtFQUNQLElBQUlyQixDQUFBLEtBQU0sV0FBV0EsQ0FBQSxHQUFJLFFBQU0sR0FBR3l6QyxFQUFBLENBQUcvbEMsYUFBQSxFQUFlNU0sQ0FBQyxHQUFHO0lBQ3REQSxDQUFBLENBQUU2WCxLQUFBLENBQU07SUFDUixJQUFJNVcsQ0FBQSxHQUFJL0IsQ0FBQSxHQUFJLElBQUljLENBQUEsQ0FBRWMsS0FBQSxDQUFNb0IsTUFBQTtJQUN4QmxDLENBQUEsQ0FBRTR5QyxpQkFBQSxDQUFrQjN4QyxDQUFBLEVBQUdBLENBQUM7RUFDMUIsT0FBTztJQUNMLElBQUltQyxDQUFBLEdBQUluRSxRQUFBLENBQVNrWSxXQUFBLENBQVk7TUFBRzVULENBQUEsR0FBSTNELE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtJQUN4RCxJQUFJLENBQUM1UyxDQUFBLEVBQ0g7SUFDRixJQUFJRSxDQUFBLEdBQUksU0FBQUEsQ0FBUytZLENBQUEsRUFBRztRQUNsQixJQUFJQyxDQUFBLEdBQUl4ZCxRQUFBLENBQVNJLGNBQUEsQ0FBZSxFQUFFO1FBQ2xDbWQsQ0FBQSxDQUFFcGQsV0FBQSxDQUFZcWQsQ0FBQyxHQUFHclosQ0FBQSxDQUFFNFUsUUFBQSxDQUFTeUUsQ0FBQSxFQUFHLENBQUMsR0FBR3JaLENBQUEsQ0FBRTZVLE1BQUEsQ0FBT3dFLENBQUEsRUFBRyxDQUFDO01BQ25EO01BQUc3WSxDQUFBLEdBQUksU0FBQUEsQ0FBUzRZLENBQUEsRUFBRztRQUNqQixPQUFPQSxDQUFBLElBQUs7TUFDZDtNQUFHMVksQ0FBQSxHQUFJOUQsQ0FBQSxDQUFFNk4sVUFBQTtNQUFZOUUsQ0FBQSxHQUFJN0osQ0FBQSxHQUFJNEUsQ0FBQSxDQUFFLEtBQUtBLENBQUEsQ0FBRUEsQ0FBQSxDQUFFNUIsTUFBQSxHQUFTO0lBQ2pELElBQUkwQixDQUFBLENBQUVtRixDQUFDLEdBQUc7TUFDUixPQUFPbkYsQ0FBQSxDQUFFbUYsQ0FBQyxLQUFLQSxDQUFBLENBQUVpRSxRQUFBLEtBQWFuSyxJQUFBLENBQUt1TCxTQUFBLEdBQ2pDckYsQ0FBQSxHQUFJN0osQ0FBQSxHQUFJNkosQ0FBQSxDQUFFaEcsVUFBQSxHQUFhZ0csQ0FBQSxDQUFFOHBDLFNBQUE7TUFDM0IsSUFBSWp2QyxDQUFBLENBQUVtRixDQUFDLEtBQUtBLENBQUEsQ0FBRWlFLFFBQUEsS0FBYW5LLElBQUEsQ0FBS3VMLFNBQUEsRUFBVztRQUN6QyxJQUFJeVMsQ0FBQSxJQUFLdGdCLENBQUEsSUFBS2hCLENBQUEsR0FBSXdKLENBQUEsQ0FBRTJFLFdBQUEsTUFBaUIsUUFBUW5PLENBQUEsS0FBTSxTQUFTLFNBQVNBLENBQUEsQ0FBRTJDLE1BQUEsTUFBWSxRQUFRM0IsQ0FBQSxLQUFNLFNBQVNBLENBQUEsR0FBSTtVQUFHVSxDQUFBLEdBQUkvQixDQUFBLEdBQUksSUFBSTJoQixDQUFBO1FBQzdIemQsQ0FBQSxDQUFFNFUsUUFBQSxDQUFTalAsQ0FBQSxFQUFHOUgsQ0FBQyxHQUFHbUMsQ0FBQSxDQUFFNlUsTUFBQSxDQUFPbFAsQ0FBQSxFQUFHOUgsQ0FBQztNQUNqQyxPQUNFd0MsQ0FBQSxDQUFFekQsQ0FBQztJQUNQLE9BQ0V5RCxDQUFBLENBQUV6RCxDQUFDO0lBQ0x1RCxDQUFBLENBQUUyVSxlQUFBLENBQWdCLEdBQUczVSxDQUFBLENBQUU0VSxRQUFBLENBQVMvVSxDQUFDO0VBQ25DO0FBQ0Y7QUFBQSxDQUNDLFVBQVNwRCxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFNlgsS0FBQSxHQUFRO0VBQ2pFLElBQUkzWSxDQUFBLEdBQUl1ekMsRUFBQTtFQUNSdnlDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsU0FBUztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbEUsT0FBT2pDLENBQUEsQ0FBRTJZLEtBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHMjZCLEVBQUU7QUFDTCxJQUFJTSxFQUFBLEdBQUssQ0FBQztFQUFHQyxFQUFBLEdBQUssQ0FBQztBQUNuQjd5QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWt5QyxFQUFBLEVBQUksY0FBYztFQUFFanlDLEtBQUEsRUFBTztBQUFHLENBQUM7QUFDckRpeUMsRUFBQSxDQUFHQyxxQkFBQSxHQUF3QkMsRUFBQTtBQUMzQixTQUFTQSxHQUFBLEVBQUs7RUFDWixJQUFJanpDLENBQUEsR0FBSUosTUFBQSxDQUFPdVcsWUFBQSxDQUFhO0VBQzVCLElBQUluVyxDQUFBLEtBQU0sTUFDUixPQUFPLENBQUMsTUFBTSxDQUFDO0VBQ2pCLElBQUlkLENBQUEsR0FBSWMsQ0FBQSxDQUFFeVcsU0FBQTtJQUFXbFgsQ0FBQSxHQUFJUyxDQUFBLENBQUVzbkMsV0FBQTtFQUMzQixPQUFPcG9DLENBQUEsS0FBTSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUtBLENBQUEsQ0FBRThOLFFBQUEsS0FBYW5LLElBQUEsQ0FBS3VMLFNBQUEsSUFBYWxQLENBQUEsQ0FBRTJPLFVBQUEsQ0FBVzNMLE1BQUEsR0FBUyxNQUFNaEQsQ0FBQSxDQUFFMk8sVUFBQSxDQUFXdE8sQ0FBQSxNQUFPLFVBQVVMLENBQUEsR0FBSUEsQ0FBQSxDQUFFMk8sVUFBQSxDQUFXdE8sQ0FBQSxHQUFJQSxDQUFBLEdBQUksTUFBTUwsQ0FBQSxHQUFJQSxDQUFBLENBQUUyTyxVQUFBLENBQVd0TyxDQUFBLEdBQUksSUFBSUwsQ0FBQSxDQUFFd08sV0FBQSxLQUFnQixTQUFTbk8sQ0FBQSxHQUFJTCxDQUFBLENBQUV3TyxXQUFBLENBQVl4TCxNQUFBLEtBQVcsQ0FBQ2hELENBQUEsRUFBR0ssQ0FBQztBQUNuUDtBQUFBLENBQ0MsVUFBU1MsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRWd6QyxxQkFBQSxHQUF3QjtFQUNqRixJQUFJOXpDLENBQUEsR0FBSTZ6QyxFQUFBO0VBQ1I3eUMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyx5QkFBeUI7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ2xGLE9BQU9qQyxDQUFBLENBQUU4ekMscUJBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHRixFQUFFO0FBQ0wsSUFBSUksRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDbkJqekMsTUFBQSxDQUFPVyxjQUFBLENBQWVzeUMsRUFBQSxFQUFJLGNBQWM7RUFBRXJ5QyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEcXlDLEVBQUEsQ0FBR0MsUUFBQSxHQUFXQyxFQUFBO0FBQ2QsU0FBU0EsR0FBQSxFQUFLO0VBQ1osSUFBSXJ6QyxDQUFBLEdBQUlKLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYTtFQUM1QixPQUFPblcsQ0FBQSxJQUFLQSxDQUFBLENBQUUrVyxVQUFBLEdBQWEvVyxDQUFBLENBQUVnWCxVQUFBLENBQVcsQ0FBQyxJQUFJO0FBQy9DO0FBQUEsQ0FDQyxVQUFTaFgsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRW96QyxRQUFBLEdBQVc7RUFDcEUsSUFBSWwwQyxDQUFBLEdBQUlpMEMsRUFBQTtFQUNSanpDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsWUFBWTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDckUsT0FBT2pDLENBQUEsQ0FBRWswQyxRQUFBO0lBQ1g7RUFBRSxDQUFDO0FBQ0wsR0FBR0YsRUFBRTtBQUNMLElBQUlJLEVBQUEsR0FBSyxDQUFDO0VBQUdDLEVBQUEsR0FBSyxDQUFDO0FBQ25CcnpDLE1BQUEsQ0FBT1csY0FBQSxDQUFlMHlDLEVBQUEsRUFBSSxjQUFjO0VBQUV6eUMsS0FBQSxFQUFPO0FBQUcsQ0FBQztBQUNyRHl5QyxFQUFBLENBQUdDLG1CQUFBLEdBQXNCQyxFQUFBO0FBQ3pCLElBQUlDLEVBQUEsR0FBSzVMLEVBQUE7RUFBSTZMLEVBQUEsR0FBS2IsRUFBQTtFQUFJYyxFQUFBLEdBQUtoTSxFQUFBO0FBQzNCLFNBQVM2TCxHQUFHenpDLENBQUEsRUFBRztFQUNiLElBQUlkLENBQUEsSUFBSyxHQUFHdzBDLEVBQUEsQ0FBRzNtQyxjQUFBLEVBQWdCL00sQ0FBQSxFQUFHLElBQUU7RUFDcEMsSUFBSWQsQ0FBQSxLQUFNLE1BQ1IsT0FBTztFQUNULEtBQUssR0FBR3cwQyxFQUFBLENBQUc5bUMsYUFBQSxFQUFlMU4sQ0FBQyxHQUN6QixPQUFPQSxDQUFBLENBQUU2WSxZQUFBLEtBQWlCN1ksQ0FBQSxDQUFFNEIsS0FBQSxDQUFNb0IsTUFBQTtFQUNwQyxJQUFJM0MsQ0FBQSxJQUFLLEdBQUdvMEMsRUFBQSxDQUFHWCxxQkFBQSxFQUF1QjtJQUFHenlDLENBQUEsR0FBSWhCLENBQUEsQ0FBRTtJQUFJMEIsQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFO0VBQ3pELE9BQU9nQixDQUFBLEtBQU0sT0FBTyxTQUFNLEdBQUdxekMsRUFBQSxDQUFHekIscUNBQUEsRUFBdUNueUMsQ0FBQSxFQUFHTyxDQUFBLEVBQUdVLENBQUEsRUFBRyxPQUFPO0FBQ3pGO0FBQUEsQ0FDQyxVQUFTakIsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRXd6QyxtQkFBQSxHQUFzQjtFQUMvRSxJQUFJdDBDLENBQUEsR0FBSXEwQyxFQUFBO0VBQ1JyekMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyx1QkFBdUI7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ2hGLE9BQU9qQyxDQUFBLENBQUVzMEMsbUJBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHRixFQUFFO0FBQ0wsSUFBSU8sRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDbkI1ekMsTUFBQSxDQUFPVyxjQUFBLENBQWVpekMsRUFBQSxFQUFJLGNBQWM7RUFBRWh6QyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEZ3pDLEVBQUEsQ0FBR0MscUJBQUEsR0FBd0JDLEVBQUE7QUFDM0IsSUFBSUMsRUFBQSxHQUFLbk0sRUFBQTtFQUFJb00sRUFBQSxHQUFLbkIsRUFBQTtFQUFJb0IsRUFBQSxHQUFLdE0sRUFBQTtBQUMzQixTQUFTbU0sR0FBR2gwQyxDQUFBLEVBQUc7RUFDYixJQUFJZCxDQUFBLElBQUssR0FBRyswQyxFQUFBLENBQUdsbkMsY0FBQSxFQUFnQi9NLENBQUM7RUFDaEMsSUFBSWQsQ0FBQSxLQUFNLFNBQVMsR0FBRyswQyxFQUFBLENBQUdubUMsT0FBQSxFQUFTOU4sQ0FBQyxHQUNqQyxPQUFPO0VBQ1QsS0FBSyxHQUFHaTBDLEVBQUEsQ0FBR3JuQyxhQUFBLEVBQWUxTixDQUFDLEdBQ3pCLE9BQU9BLENBQUEsQ0FBRTZZLFlBQUEsS0FBaUI7RUFDNUIsS0FBSyxHQUFHazhCLEVBQUEsQ0FBR25tQyxPQUFBLEVBQVM5TixDQUFDLEdBQ25CLE9BQU87RUFDVCxJQUFJVCxDQUFBLElBQUssR0FBRzIwQyxFQUFBLENBQUdsQixxQkFBQSxFQUF1QjtJQUFHenlDLENBQUEsR0FBSWhCLENBQUEsQ0FBRTtJQUFJMEIsQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFO0VBQ3pELE9BQU9nQixDQUFBLEtBQU0sT0FBTyxTQUFNLEdBQUc0ekMsRUFBQSxDQUFHaEMscUNBQUEsRUFBdUNueUMsQ0FBQSxFQUFHTyxDQUFBLEVBQUdVLENBQUEsRUFBRyxNQUFNO0FBQ3hGO0FBQUEsQ0FDQyxVQUFTakIsQ0FBQSxFQUFHO0VBQ1hFLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsY0FBYztJQUFFYyxLQUFBLEVBQU87RUFBRyxDQUFDLEdBQUdkLENBQUEsQ0FBRSt6QyxxQkFBQSxHQUF3QjtFQUNqRixJQUFJNzBDLENBQUEsR0FBSTQwQyxFQUFBO0VBQ1I1ekMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyx5QkFBeUI7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ2xGLE9BQU9qQyxDQUFBLENBQUU2MEMscUJBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHRixFQUFFO0FBQ0wsSUFBSU8sRUFBQSxHQUFLLENBQUM7RUFBR0MsRUFBQSxHQUFLLENBQUM7QUFDbkJuMEMsTUFBQSxDQUFPVyxjQUFBLENBQWV3ekMsRUFBQSxFQUFJLGNBQWM7RUFBRXZ6QyxLQUFBLEVBQU87QUFBRyxDQUFDO0FBQ3JEdXpDLEVBQUEsQ0FBR2xoQyxJQUFBLEdBQU9taEMsRUFBQTtBQUNWLElBQUlDLEVBQUEsR0FBS3pNLEVBQUE7RUFBSTBNLEVBQUEsR0FBS3JCLEVBQUE7QUFDbEIsU0FBU21CLEdBQUEsRUFBSztFQUNaLElBQUl0MEMsQ0FBQSxJQUFLLEdBQUd3MEMsRUFBQSxDQUFHcEIsUUFBQSxFQUFVO0lBQUdsMEMsQ0FBQSxJQUFLLEdBQUdxMUMsRUFBQSxDQUFHM29DLElBQUEsRUFBTSxNQUFNO0VBQ25ELElBQUkxTSxDQUFBLENBQUUyVCxFQUFBLEdBQUssVUFBVTNULENBQUEsQ0FBRWkzQixNQUFBLEdBQVMsTUFBSSxDQUFDLENBQUNuMkIsQ0FBQSxFQUNwQyxPQUFPQSxDQUFBLENBQUUwWCxVQUFBLENBQVd4WSxDQUFDLEdBQUcsWUFBVztJQUNqQyxJQUFJcUIsQ0FBQSxHQUFJWCxNQUFBLENBQU91VyxZQUFBLENBQWE7SUFDNUI1VixDQUFBLEtBQU1QLENBQUEsQ0FBRXkwQyxhQUFBLENBQWN2MUMsQ0FBQyxHQUFHYyxDQUFBLENBQUUwMEMsV0FBQSxDQUFZeDFDLENBQUMsR0FBR3FCLENBQUEsQ0FBRTJYLGVBQUEsQ0FBZ0IsR0FBRzNYLENBQUEsQ0FBRTRYLFFBQUEsQ0FBU25ZLENBQUMsR0FBR21FLFVBQUEsQ0FBVyxZQUFXO01BQ3BHakYsQ0FBQSxDQUFFa1csTUFBQSxDQUFPO0lBQ1gsR0FBRyxHQUFHO0VBQ1I7QUFDSjtBQUFBLENBQ0MsVUFBU3BWLENBQUEsRUFBRztFQUNYRSxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLGNBQWM7SUFBRWMsS0FBQSxFQUFPO0VBQUcsQ0FBQyxHQUFHZCxDQUFBLENBQUVtVCxJQUFBLEdBQU87RUFDaEUsSUFBSWpVLENBQUEsR0FBSW0xQyxFQUFBO0VBQ1JuMEMsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxRQUFRO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNqRSxPQUFPakMsQ0FBQSxDQUFFaVUsSUFBQTtJQUNYO0VBQUUsQ0FBQztBQUNMLEdBQUdpaEMsRUFBRTtBQUFBLENBQ0osVUFBU3AwQyxDQUFBLEVBQUc7RUFDWEUsTUFBQSxDQUFPVyxjQUFBLENBQWViLENBQUEsRUFBRyxjQUFjO0lBQUVjLEtBQUEsRUFBTztFQUFHLENBQUMsR0FBR2QsQ0FBQSxDQUFFbVQsSUFBQSxHQUFPblQsQ0FBQSxDQUFFK3pDLHFCQUFBLEdBQXdCL3pDLENBQUEsQ0FBRXd6QyxtQkFBQSxHQUFzQnh6QyxDQUFBLENBQUVvekMsUUFBQSxHQUFXcHpDLENBQUEsQ0FBRWd6QyxxQkFBQSxHQUF3Qmh6QyxDQUFBLENBQUU2WCxLQUFBLEdBQVE3WCxDQUFBLENBQUUreEMsdUJBQUEsR0FBMEIveEMsQ0FBQSxDQUFFbXlDLHFDQUFBLEdBQXdDO0VBQ3pPLElBQUlqekMsQ0FBQSxHQUFJMG9DLEVBQUE7RUFDUjFuQyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLHlDQUF5QztJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbEcsT0FBT2pDLENBQUEsQ0FBRWl6QyxxQ0FBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUk1eUMsQ0FBQSxHQUFJZ3pDLEVBQUE7RUFDUnJ5QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLDJCQUEyQjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDcEYsT0FBTzVCLENBQUEsQ0FBRXd5Qyx1QkFBQTtJQUNYO0VBQUUsQ0FBQztFQUNILElBQUl4eEMsQ0FBQSxHQUFJaXlDLEVBQUE7RUFDUnR5QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLFNBQVM7SUFBRW9CLFVBQUEsRUFBWTtJQUFJRCxHQUFBLEVBQUssU0FBQUEsQ0FBQSxFQUFXO01BQ2xFLE9BQU9aLENBQUEsQ0FBRXNYLEtBQUE7SUFDWDtFQUFFLENBQUM7RUFDSCxJQUFJNVcsQ0FBQSxHQUFJNnhDLEVBQUE7RUFDUjV5QyxNQUFBLENBQU9XLGNBQUEsQ0FBZWIsQ0FBQSxFQUFHLHlCQUF5QjtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDbEYsT0FBT0YsQ0FBQSxDQUFFK3hDLHFCQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSTV2QyxDQUFBLEdBQUk4dkMsRUFBQTtFQUNSaHpDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsWUFBWTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDckUsT0FBT2lDLENBQUEsQ0FBRWd3QyxRQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSTd2QyxDQUFBLEdBQUkrdkMsRUFBQTtFQUNScHpDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsdUJBQXVCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNoRixPQUFPb0MsQ0FBQSxDQUFFaXdDLG1CQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSS92QyxDQUFBLEdBQUlvd0MsRUFBQTtFQUNSM3pDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcseUJBQXlCO0lBQUVvQixVQUFBLEVBQVk7SUFBSUQsR0FBQSxFQUFLLFNBQUFBLENBQUEsRUFBVztNQUNsRixPQUFPc0MsQ0FBQSxDQUFFc3dDLHFCQUFBO0lBQ1g7RUFBRSxDQUFDO0VBQ0gsSUFBSW53QyxDQUFBLEdBQUl3d0MsRUFBQTtFQUNSbDBDLE1BQUEsQ0FBT1csY0FBQSxDQUFlYixDQUFBLEVBQUcsUUFBUTtJQUFFb0IsVUFBQSxFQUFZO0lBQUlELEdBQUEsRUFBSyxTQUFBQSxDQUFBLEVBQVc7TUFDakUsT0FBT3lDLENBQUEsQ0FBRXVQLElBQUE7SUFDWDtFQUFFLENBQUM7QUFDTCxHQUFHdzBCLEVBQUU7QUFDTCxJQUFNZ04sRUFBQSxHQUFOLGNBQWlCcmdDLENBQUEsQ0FBRTtFQU1qQnNnQyxRQUFRMTFDLENBQUEsRUFBRztJQUNULFFBQVEsS0FBSzIxQyx1QkFBQSxDQUF3QjMxQyxDQUFDLEdBQUdBLENBQUEsQ0FBRXd5QixPQUFBO01BQUEsS0FDcENwc0IsQ0FBQSxDQUFFQyxTQUFBO1FBQ0wsS0FBS3V2QyxTQUFBLENBQVU1MUMsQ0FBQztRQUNoQjtNQUFBLEtBQ0dvRyxDQUFBLENBQUVhLE1BQUE7UUFDTCxLQUFLK0ssTUFBQSxDQUFPaFMsQ0FBQztRQUNiO01BQUEsS0FDR29HLENBQUEsQ0FBRUcsS0FBQTtRQUNMLEtBQUtzdkMsS0FBQSxDQUFNNzFDLENBQUM7UUFDWjtNQUFBLEtBQ0dvRyxDQUFBLENBQUVXLElBQUE7TUFBQSxLQUNGWCxDQUFBLENBQUVZLEtBQUE7UUFDTCxLQUFLOHVDLGlCQUFBLENBQWtCOTFDLENBQUM7UUFDeEI7TUFBQSxLQUNHb0csQ0FBQSxDQUFFVSxFQUFBO01BQUEsS0FDRlYsQ0FBQSxDQUFFUyxJQUFBO1FBQ0wsS0FBS2t2QyxjQUFBLENBQWUvMUMsQ0FBQztRQUNyQjtNQUFBLEtBQ0dvRyxDQUFBLENBQUVFLEdBQUE7UUFDTCxLQUFLMHZDLFVBQUEsQ0FBV2gyQyxDQUFDO1FBQ2pCO0lBQUE7SUFFSkEsQ0FBQSxDQUFFK2dDLEdBQUEsS0FBUSxPQUFPLENBQUMvZ0MsQ0FBQSxDQUFFeWhDLE9BQUEsSUFBVyxDQUFDemhDLENBQUEsQ0FBRTBoQyxPQUFBLElBQVcsS0FBS3VVLFlBQUEsQ0FBYWoyQyxDQUFDLEdBQUdBLENBQUEsQ0FBRWsyQyxJQUFBLEtBQVMsWUFBWWwyQyxDQUFBLENBQUV5aEMsT0FBQSxJQUFXemhDLENBQUEsQ0FBRTBoQyxPQUFBLE1BQWExaEMsQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZSxHQUFHLEtBQUswakIsbUJBQUEsQ0FBb0I7RUFDcks7RUFNQVIsd0JBQXdCMzFDLENBQUEsRUFBRztJQUN6QixLQUFLbzJDLGtCQUFBLENBQW1CcDJDLENBQUMsS0FBSzJJLEVBQUEsQ0FBRzNJLENBQUEsQ0FBRXd5QixPQUFPLE1BQU0sS0FBS3pjLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUMsS0FBQSxDQUFNLEdBQUd0akIsQ0FBQSxDQUFFeWhDLE9BQUEsSUFBV3poQyxDQUFBLENBQUUwaEMsT0FBQSxJQUFXMWhDLENBQUEsQ0FBRTJoQyxNQUFBLElBQVUzaEMsQ0FBQSxDQUFFeXpCLFFBQUEsSUFBWSxLQUFLMWQsTUFBQSxDQUFPb3FCLGNBQUEsQ0FBZWtXLGNBQUEsQ0FBZXIyQyxDQUFDO0VBQzlLO0VBUUFzMkMsTUFBTXQyQyxDQUFBLEVBQUc7SUFDUEEsQ0FBQSxDQUFFeXpCLFFBQUEsSUFBWSxLQUFLMWQsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHd2xCLGNBQUEsQ0FBZTtFQUM5QztFQU1BQyxTQUFTeDJDLENBQUEsRUFBRztJQUNWLE1BQU1LLENBQUEsR0FBSSxLQUFLMFYsTUFBQSxDQUFPaUwsWUFBQSxDQUFheTFCLG1CQUFBLENBQW9CejJDLENBQUEsQ0FBRTRWLE1BQU07SUFDL0R2VixDQUFBLENBQUVtZSxVQUFBLEdBQWE7RUFDakI7RUFNQWs0QixVQUFVMTJDLENBQUEsRUFBRztJQUNYLE1BQU1LLENBQUEsR0FBSSxLQUFLMFYsTUFBQSxDQUFPaUwsWUFBQSxDQUFheTFCLG1CQUFBLENBQW9CejJDLENBQUEsQ0FBRTRWLE1BQU07SUFDL0R2VixDQUFBLENBQUVtZSxVQUFBLEdBQWE7RUFDakI7RUFPQW00QixlQUFlMzJDLENBQUEsRUFBRztJQUNoQixNQUFNO01BQUVtZ0MsY0FBQSxFQUFnQjkvQjtJQUFFLElBQUksS0FBSzBWLE1BQUE7SUFDbkMxVixDQUFBLENBQUV1MkMsZ0JBQUEsSUFBb0J2MkMsQ0FBQSxDQUFFdzJDLGtCQUFBLENBQW1CNzJDLENBQUM7RUFDOUM7RUFNQTgyQyxlQUFlOTJDLENBQUEsRUFBRztJQUNoQixNQUFNO01BQUVtZ0MsY0FBQSxFQUFnQjkvQixDQUFBO01BQUcyZ0IsWUFBQSxFQUFjM2YsQ0FBQTtNQUFHNGhCLEtBQUEsRUFBT2xoQjtJQUFFLElBQUksS0FBS2dVLE1BQUE7SUFDOUQxVixDQUFBLENBQUV1MkMsZ0JBQUEsSUFBb0J2MkMsQ0FBQSxDQUFFdzJDLGtCQUFBLENBQW1CNzJDLENBQUMsRUFBRWdmLElBQUEsQ0FBSyxNQUFNO01BQ3ZELE1BQU05YSxDQUFBLEdBQUk3QyxDQUFBLENBQUUwMUMsb0JBQUEsQ0FBcUI7UUFBRzF5QyxDQUFBLEdBQUloRCxDQUFBLENBQUUyMUMseUJBQUEsQ0FBMEI5eUMsQ0FBQSxFQUFHLElBQUU7TUFDekVuQyxDQUFBLENBQUVtaEIsVUFBQSxDQUFXN2UsQ0FBQSxFQUFHdEMsQ0FBQSxDQUFFb2hCLFNBQUEsQ0FBVXNCLEtBQUssR0FBR3BrQixDQUFBLENBQUVnMkMsY0FBQSxDQUFlcjJDLENBQUM7SUFDeEQsQ0FBQztFQUNIO0VBTUFnMkMsV0FBV2gyQyxDQUFBLEVBQUc7SUFDWixNQUFNO01BQUV1akIsYUFBQSxFQUFlbGpCLENBQUE7TUFBRzRpQixLQUFBLEVBQU81aEI7SUFBRSxJQUFJLEtBQUswVSxNQUFBO0lBQzVDLElBQUkxVixDQUFBLENBQUVvdUIsTUFBQSxFQUNKO0lBQ0YsQ0FBQ3p1QixDQUFBLENBQUV5ekIsUUFBQSxHQUFXcHlCLENBQUEsQ0FBRTQxQyxnQkFBQSxDQUFpQixJQUFFLElBQUk1MUMsQ0FBQSxDQUFFNjFDLFlBQUEsQ0FBYSxJQUFFLE1BQU1sM0MsQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZTtFQUNqRjtFQUlBMGpCLG9CQUFBLEVBQXNCO0lBQ3BCLEtBQUtwZ0MsTUFBQSxDQUFPb3FCLGNBQUEsQ0FBZWdYLGNBQUEsQ0FBZW4wQyxNQUFBLEdBQVMsS0FBSyxLQUFLbzBDLHFCQUFBLENBQXNCO0VBQ3JGO0VBTUFuQixhQUFhajJDLENBQUEsRUFBRztJQUNkLEtBQUsrVixNQUFBLENBQU9pTCxZQUFBLENBQWFnQyxZQUFBLENBQWFwVSxPQUFBLEtBQVk1TyxDQUFBLENBQUV5eUIsY0FBQSxDQUFlLEdBQUcsS0FBSzFjLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTW8wQiw0QkFBQSxDQUE2QixHQUFHLEdBQUcsS0FBS0MsZUFBQSxDQUFnQjtFQUNsSjtFQU1BekIsTUFBTTcxQyxDQUFBLEVBQUc7SUFDUCxNQUFNO1FBQUVnaEIsWUFBQSxFQUFjM2dCLENBQUE7UUFBRzB3QixFQUFBLEVBQUkxdkI7TUFBRSxJQUFJLEtBQUswVSxNQUFBO01BQVFoVSxDQUFBLEdBQUkxQixDQUFBLENBQUUyaUIsWUFBQTtJQUN0RCxJQUFJamhCLENBQUEsS0FBTSxVQUFVQSxDQUFBLENBQUVnWixJQUFBLENBQUt3OEIsbUJBQUEsSUFBdUJsMkMsQ0FBQSxDQUFFbTJDLGlCQUFBLElBQXFCbjJDLENBQUEsQ0FBRW8yQyx3QkFBQSxJQUE0QnozQyxDQUFBLENBQUV5ekIsUUFBQSxJQUFZLENBQUN6bkIsRUFBQSxFQUNwSDtJQUNGLElBQUk5SCxDQUFBLEdBQUluQyxDQUFBO0lBQ1JBLENBQUEsQ0FBRTJjLFlBQUEsS0FBaUIsVUFBVTZwQixFQUFBLENBQUd4bUMsQ0FBQSxDQUFFMmMsWUFBWSxLQUFLLENBQUMzYyxDQUFBLENBQUVzZCxRQUFBLEdBQVcsS0FBS3RKLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWcyQix5QkFBQSxDQUEwQixLQUFLamhDLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYTZCLGlCQUFpQixJQUFJOWdCLENBQUEsQ0FBRTJjLFlBQUEsSUFBZ0I4cEIsRUFBQSxDQUFHem1DLENBQUEsQ0FBRTJjLFlBQVksSUFBSXhhLENBQUEsR0FBSSxLQUFLNlIsTUFBQSxDQUFPaUwsWUFBQSxDQUFhZzJCLHlCQUFBLENBQTBCLEtBQUtqaEMsTUFBQSxDQUFPaUwsWUFBQSxDQUFhNkIsaUJBQUEsR0FBb0IsQ0FBQyxJQUFJM2UsQ0FBQSxHQUFJLEtBQUs2UixNQUFBLENBQU9pTCxZQUFBLENBQWExWCxLQUFBLENBQU0sR0FBRyxLQUFLeU0sTUFBQSxDQUFPa04sS0FBQSxDQUFNQyxVQUFBLENBQVdoZixDQUFDLEdBQUcsS0FBSzZSLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUWtMLFdBQUEsQ0FBWXJxQixDQUFDLEdBQUdsRSxDQUFBLENBQUV5eUIsY0FBQSxDQUFlO0VBQ2hiO0VBTUFtakIsVUFBVTUxQyxDQUFBLEVBQUc7SUFDWCxNQUFNO1FBQUVnaEIsWUFBQSxFQUFjM2dCLENBQUE7UUFBRzRpQixLQUFBLEVBQU81aEI7TUFBRSxJQUFJLEtBQUswVSxNQUFBO01BQVE7UUFBRWlOLFlBQUEsRUFBY2poQixDQUFBO1FBQUd1aUIsYUFBQSxFQUFlcGdCO01BQUUsSUFBSTdELENBQUE7SUFDM0YsSUFBSTBCLENBQUEsS0FBTSxVQUFVLENBQUN1VSxDQUFBLENBQUVjLFdBQUEsSUFBZSxDQUFDclYsQ0FBQSxDQUFFMmMsWUFBQSxJQUFnQixDQUFDNnBCLEVBQUEsQ0FBR3htQyxDQUFBLENBQUUyYyxZQUFZLEdBQ3pFO0lBQ0YsSUFBSTFlLENBQUEsQ0FBRXl5QixjQUFBLENBQWUsR0FBRyxLQUFLMWMsTUFBQSxDQUFPc04sT0FBQSxDQUFRQyxLQUFBLENBQU0sR0FBRyxFQUFFdmhCLENBQUEsQ0FBRTJjLFlBQUEsS0FBaUIzYyxDQUFBLENBQUU2YyxVQUFBLEdBQWE7TUFDdkZ2ZCxDQUFBLENBQUU0MUMsZ0JBQUEsQ0FBaUI7TUFDbkI7SUFDRjtJQUNBLElBQUkveUMsQ0FBQSxLQUFNLE1BQ1I7SUFDRixJQUFJQSxDQUFBLENBQUUwSyxPQUFBLEVBQVM7TUFDYnZPLENBQUEsQ0FBRTBpQixXQUFBLENBQVk3ZSxDQUFDO01BQ2Y7SUFDRjtJQUNBLElBQUluQyxDQUFBLENBQUU2TSxPQUFBLEVBQVM7TUFDYnZPLENBQUEsQ0FBRTBpQixXQUFBLENBQVloaEIsQ0FBQztNQUNmLE1BQU0yQyxDQUFBLEdBQUlyRSxDQUFBLENBQUUyaUIsWUFBQTtNQUNaM2hCLENBQUEsQ0FBRTZoQixVQUFBLENBQVd4ZSxDQUFBLEVBQUdyRCxDQUFBLENBQUU4aEIsU0FBQSxDQUFVQyxHQUFHO01BQy9CO0lBQ0Y7SUFDQWhJLEVBQUEsQ0FBR2xYLENBQUEsRUFBR25DLENBQUMsSUFBSSxLQUFLMjFDLFdBQUEsQ0FBWXh6QyxDQUFBLEVBQUduQyxDQUFDLElBQUlWLENBQUEsQ0FBRTZoQixVQUFBLENBQVdoZixDQUFBLEVBQUc3QyxDQUFBLENBQUU4aEIsU0FBQSxDQUFVQyxHQUFHO0VBQ3JFO0VBUUFwUixPQUFPaFMsQ0FBQSxFQUFHO0lBQ1IsTUFBTTtRQUFFZ2hCLFlBQUEsRUFBYzNnQixDQUFBO1FBQUc0aUIsS0FBQSxFQUFPNWhCO01BQUUsSUFBSSxLQUFLMFUsTUFBQTtNQUFRO1FBQUVpTixZQUFBLEVBQWNqaEIsQ0FBQTtRQUFHeWlCLFNBQUEsRUFBV3RnQjtNQUFFLElBQUk3RCxDQUFBO0lBQ3ZGLElBQUksQ0FBQ2lXLENBQUEsQ0FBRWMsV0FBQSxJQUFlLENBQUNveEIsRUFBQSxDQUFHem1DLENBQUEsQ0FBRTJjLFlBQVksR0FDdEM7SUFDRixJQUFJMWUsQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZSxHQUFHLEtBQUsxYyxNQUFBLENBQU9zTixPQUFBLENBQVFDLEtBQUEsQ0FBTSxHQUFHLEVBQUV2aEIsQ0FBQSxDQUFFMmMsWUFBQSxLQUFpQjNjLENBQUEsQ0FBRThjLFNBQUEsR0FBWTtNQUN0RnhkLENBQUEsQ0FBRTYxQyxZQUFBLENBQWE7TUFDZjtJQUNGO0lBQ0EsSUFBSWh6QyxDQUFBLEtBQU0sTUFDUjtJQUNGLElBQUlBLENBQUEsQ0FBRTBLLE9BQUEsRUFBUztNQUNidk8sQ0FBQSxDQUFFMGlCLFdBQUEsQ0FBWTdlLENBQUM7TUFDZjtJQUNGO0lBQ0EsSUFBSW5DLENBQUEsQ0FBRTZNLE9BQUEsRUFBUztNQUNidk8sQ0FBQSxDQUFFMGlCLFdBQUEsQ0FBWWhoQixDQUFDLEdBQUdWLENBQUEsQ0FBRTZoQixVQUFBLENBQVdoZixDQUFBLEVBQUc3QyxDQUFBLENBQUU4aEIsU0FBQSxDQUFVc0IsS0FBSztNQUNuRDtJQUNGO0lBQ0FySixFQUFBLENBQUdyWixDQUFBLEVBQUdtQyxDQUFDLElBQUksS0FBS3d6QyxXQUFBLENBQVkzMUMsQ0FBQSxFQUFHbUMsQ0FBQyxJQUFJN0MsQ0FBQSxDQUFFNmhCLFVBQUEsQ0FBV2hmLENBQUEsRUFBRzdDLENBQUEsQ0FBRThoQixTQUFBLENBQVVzQixLQUFLO0VBQ3ZFO0VBT0FpekIsWUFBWTEzQyxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNoQixNQUFNO01BQUUyZ0IsWUFBQSxFQUFjM2YsQ0FBQTtNQUFHZ2lCLE9BQUEsRUFBU3RoQjtJQUFFLElBQUksS0FBS2dVLE1BQUE7SUFDN0MvVixDQUFBLENBQUU2ZSxTQUFBLEtBQWMsV0FBVzRwQixFQUFBLENBQUc5dkIsS0FBQSxDQUFNM1ksQ0FBQSxDQUFFNmUsU0FBQSxFQUFXLEtBQUUsR0FBR3hkLENBQUEsQ0FBRXEyQyxXQUFBLENBQVkxM0MsQ0FBQSxFQUFHSyxDQUFDLEVBQUUyZSxJQUFBLENBQUssTUFBTTtNQUNuRmpkLENBQUEsQ0FBRXVoQixLQUFBLENBQU07SUFDVixDQUFDO0VBQ0g7RUFNQXd5QixrQkFBa0I5MUMsQ0FBQSxFQUFHO0lBQ25CLE1BQU1LLENBQUEsR0FBSTR4QixFQUFBLENBQUdNLFFBQUEsQ0FBUzlxQixRQUFBLENBQVN6SCxDQUFBLENBQUV3eUIsT0FBTyxNQUFNLENBQUN4eUIsQ0FBQSxDQUFFeXpCLFFBQUEsSUFBWXp6QixDQUFBLENBQUV3eUIsT0FBQSxLQUFZcHNCLENBQUEsQ0FBRUUsR0FBQTtJQUM3RSxJQUFJLEtBQUt5UCxNQUFBLENBQU9nYixFQUFBLENBQUd5bUIsaUJBQUEsSUFBcUJuM0MsQ0FBQSxFQUN0QztJQUNGLEtBQUswVixNQUFBLENBQU9zTixPQUFBLENBQVFDLEtBQUEsQ0FBTTtJQUMxQixNQUFNO1FBQUVOLFlBQUEsRUFBYzNoQjtNQUFFLElBQUksS0FBSzBVLE1BQUEsQ0FBT2lMLFlBQUE7TUFBYzljLENBQUEsS0FBTTdDLENBQUEsSUFBSyxPQUFPLFNBQVNBLENBQUEsQ0FBRXFkLFlBQUEsTUFBa0IsU0FBUzhwQixFQUFBLENBQUdubkMsQ0FBQSxDQUFFcWQsWUFBWSxJQUFJLFdBQVcsS0FBSzNJLE1BQUEsQ0FBT29xQixjQUFBLENBQWV5VyxnQkFBQTtJQUN6SyxJQUFJNTJDLENBQUEsQ0FBRXl6QixRQUFBLElBQVl6ekIsQ0FBQSxDQUFFd3lCLE9BQUEsS0FBWXBzQixDQUFBLENBQUVXLElBQUEsSUFBUTdDLENBQUEsRUFBRztNQUMzQyxLQUFLNlIsTUFBQSxDQUFPa3FCLG1CQUFBLENBQW9CMFgsd0JBQUEsQ0FBeUI7TUFDekQ7SUFDRjtJQUNBLElBQUkzM0MsQ0FBQSxDQUFFd3lCLE9BQUEsS0FBWXBzQixDQUFBLENBQUVXLElBQUEsSUFBUS9HLENBQUEsQ0FBRXd5QixPQUFBLEtBQVlwc0IsQ0FBQSxDQUFFWSxLQUFBLElBQVMsQ0FBQyxLQUFLbVAsS0FBQSxHQUFRLEtBQUtKLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTWkwQixZQUFBLENBQWEsSUFBSSxLQUFLbmhDLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTWcwQixnQkFBQSxDQUFpQixHQUFHO01BQzFJajNDLENBQUEsQ0FBRXl5QixjQUFBLENBQWU7TUFDakI7SUFDRjtJQUNBdHBCLEVBQUEsQ0FBRyxNQUFNO01BQ1AsS0FBSzRNLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsSUFBZ0IsS0FBS2pOLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsQ0FBYTlGLGtCQUFBLENBQW1CO0lBQ3BHLEdBQUcsRUFBRSxFQUFFLEdBQUcsS0FBS25ILE1BQUEsQ0FBT29xQixjQUFBLENBQWVrVyxjQUFBLENBQWVyMkMsQ0FBQztFQUN2RDtFQU1BKzFDLGVBQWUvMUMsQ0FBQSxFQUFHO0lBQ2hCLElBQUksS0FBSytWLE1BQUEsQ0FBT2diLEVBQUEsQ0FBR3ltQixpQkFBQSxFQUFtQjtNQUNwQyxJQUFJdmxCLEVBQUEsQ0FBR00sUUFBQSxDQUFTOXFCLFFBQUEsQ0FBU3pILENBQUEsQ0FBRXd5QixPQUFPLE1BQU0sQ0FBQ3h5QixDQUFBLENBQUV5ekIsUUFBQSxJQUFZenpCLENBQUEsQ0FBRXd5QixPQUFBLEtBQVlwc0IsQ0FBQSxDQUFFRSxHQUFBLEdBQ3JFO01BQ0YsS0FBS3lQLE1BQUEsQ0FBT2diLEVBQUEsQ0FBRzZtQixnQkFBQSxDQUFpQjtJQUNsQztJQUNBLEtBQUs3aEMsTUFBQSxDQUFPc04sT0FBQSxDQUFRQyxLQUFBLENBQU07SUFDMUIsTUFBTTtRQUFFTixZQUFBLEVBQWMzaUI7TUFBRSxJQUFJLEtBQUswVixNQUFBLENBQU9pTCxZQUFBO01BQWNqZixDQUFBLEtBQU0xQixDQUFBLElBQUssT0FBTyxTQUFTQSxDQUFBLENBQUVxZSxZQUFBLE1BQWtCLFNBQVM2cEIsRUFBQSxDQUFHbG9DLENBQUEsQ0FBRXFlLFlBQVksSUFBSSxXQUFXLEtBQUszSSxNQUFBLENBQU9vcUIsY0FBQSxDQUFleVcsZ0JBQUE7SUFDekssSUFBSTUyQyxDQUFBLENBQUV5ekIsUUFBQSxJQUFZenpCLENBQUEsQ0FBRXd5QixPQUFBLEtBQVlwc0IsQ0FBQSxDQUFFVSxFQUFBLElBQU0vRSxDQUFBLEVBQUc7TUFDekMsS0FBS2dVLE1BQUEsQ0FBT2txQixtQkFBQSxDQUFvQjBYLHdCQUFBLENBQXlCLEtBQUU7TUFDM0Q7SUFDRjtJQUNBLElBQUkzM0MsQ0FBQSxDQUFFd3lCLE9BQUEsS0FBWXBzQixDQUFBLENBQUVVLEVBQUEsSUFBTTlHLENBQUEsQ0FBRXd5QixPQUFBLEtBQVlwc0IsQ0FBQSxDQUFFUyxJQUFBLElBQVEsQ0FBQyxLQUFLc1AsS0FBQSxHQUFRLEtBQUtKLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTWcwQixnQkFBQSxDQUFpQixJQUFJLEtBQUtsaEMsTUFBQSxDQUFPa04sS0FBQSxDQUFNaTBCLFlBQUEsQ0FBYSxHQUFHO01BQ3ZJbDNDLENBQUEsQ0FBRXl5QixjQUFBLENBQWU7TUFDakI7SUFDRjtJQUNBdHBCLEVBQUEsQ0FBRyxNQUFNO01BQ1AsS0FBSzRNLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsSUFBZ0IsS0FBS2pOLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsQ0FBYTlGLGtCQUFBLENBQW1CO0lBQ3BHLEdBQUcsRUFBRSxFQUFFLEdBQUcsS0FBS25ILE1BQUEsQ0FBT29xQixjQUFBLENBQWVrVyxjQUFBLENBQWVyMkMsQ0FBQztFQUN2RDtFQU1BbzJDLG1CQUFtQnAyQyxDQUFBLEVBQUc7SUFDcEIsTUFBTUssQ0FBQSxHQUFJTCxDQUFBLENBQUV3eUIsT0FBQSxLQUFZcHNCLENBQUEsQ0FBRUcsS0FBQSxJQUFTLEtBQUt3UCxNQUFBLENBQU9zTixPQUFBLENBQVFsUyxPQUFBLENBQVFzZCxNQUFBO01BQVFwdEIsQ0FBQSxHQUFJckIsQ0FBQSxDQUFFd3lCLE9BQUEsS0FBWXBzQixDQUFBLENBQUVHLEtBQUEsSUFBUyxLQUFLd1AsTUFBQSxDQUFPeVksYUFBQSxDQUFjQyxNQUFBO01BQVExc0IsQ0FBQSxHQUFJL0IsQ0FBQSxDQUFFd3lCLE9BQUEsS0FBWXBzQixDQUFBLENBQUVHLEtBQUEsSUFBUyxLQUFLd1AsTUFBQSxDQUFPd04sYUFBQSxDQUFja0wsTUFBQTtNQUFRdnFCLENBQUEsR0FBSWxFLENBQUEsQ0FBRXd5QixPQUFBLEtBQVlwc0IsQ0FBQSxDQUFFRSxHQUFBO0lBQ3pOLE9BQU8sRUFBRXRHLENBQUEsQ0FBRXl6QixRQUFBLElBQVl2dkIsQ0FBQSxJQUFLN0QsQ0FBQSxJQUFLZ0IsQ0FBQSxJQUFLVSxDQUFBO0VBQ3hDO0VBSUF1MUMsZ0JBQUEsRUFBa0I7SUFDaEIsS0FBS3ZoQyxNQUFBLENBQU9zTixPQUFBLENBQVFvTCxNQUFBLElBQVUsS0FBSzFZLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUWtMLFdBQUEsQ0FBWSxHQUFHLEtBQUt4WSxNQUFBLENBQU9zTixPQUFBLENBQVFsUyxPQUFBLENBQVE3RixJQUFBLENBQUs7RUFDcEc7RUFJQThyQyxzQkFBQSxFQUF3QjtJQUN0QixLQUFLcmhDLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUW9MLE1BQUEsSUFBVSxLQUFLMVksTUFBQSxDQUFPc04sT0FBQSxDQUFRa0wsV0FBQSxDQUFZLEdBQUcsS0FBS3hZLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBY0MsTUFBQSxJQUFVLEtBQUsxWSxNQUFBLENBQU95WSxhQUFBLENBQWNsakIsSUFBQSxDQUFLO0VBQ3RJO0FBQ0Y7QUFDQSxJQUFNdXNDLEVBQUEsR0FBTixNQUFTO0VBS1BwMkMsWUFBWXpCLENBQUEsRUFBRztJQUNiLEtBQUs4aEIsTUFBQSxHQUFTLEVBQUMsRUFBRyxLQUFLZzJCLFdBQUEsR0FBYzkzQyxDQUFBO0VBQ3ZDO0VBTUEsSUFBSWdELE9BQUEsRUFBUztJQUNYLE9BQU8sS0FBSzhlLE1BQUEsQ0FBTzllLE1BQUE7RUFDckI7RUFNQSxJQUFJKzBDLE1BQUEsRUFBUTtJQUNWLE9BQU8sS0FBS2oyQixNQUFBO0VBQ2Q7RUFNQSxJQUFJeE0sTUFBQSxFQUFRO0lBQ1YsT0FBT3JNLEVBQUEsQ0FBRyxLQUFLNnVDLFdBQUEsQ0FBWTFvQyxRQUFRO0VBQ3JDO0VBV0EsT0FBT3hELElBQUk1TCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNsQixPQUFPaVgsS0FBQSxDQUFNMC9CLE1BQUEsQ0FBTzMzQyxDQUFDLENBQUMsS0FBS2lCLE9BQUEsQ0FBUXNLLEdBQUEsQ0FBSTVMLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQyxHQUFHLFNBQU9yQixDQUFBLENBQUU4Z0IsTUFBQSxDQUFPLENBQUN6Z0IsQ0FBQSxFQUFHZ0IsQ0FBQyxHQUFHO0VBQzNFO0VBUUEsT0FBT1ksSUFBSWpDLENBQUEsRUFBR0ssQ0FBQSxFQUFHO0lBQ2YsT0FBT2lZLEtBQUEsQ0FBTTAvQixNQUFBLENBQU8zM0MsQ0FBQyxDQUFDLElBQUlpQixPQUFBLENBQVFXLEdBQUEsQ0FBSWpDLENBQUEsRUFBR0ssQ0FBQyxJQUFJTCxDQUFBLENBQUVpQyxHQUFBLENBQUksQ0FBQzVCLENBQUM7RUFDeEQ7RUFNQXNILEtBQUszSCxDQUFBLEVBQUc7SUFDTixLQUFLOGhCLE1BQUEsQ0FBT25hLElBQUEsQ0FBSzNILENBQUMsR0FBRyxLQUFLaTRDLFdBQUEsQ0FBWWo0QyxDQUFDO0VBQ3pDO0VBUUFpTixLQUFLak4sQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDVCxNQUFNZ0IsQ0FBQSxHQUFJLEtBQUt5Z0IsTUFBQSxDQUFPemhCLENBQUE7SUFDdEJpTSxDQUFBLENBQUVXLElBQUEsQ0FBSyxLQUFLNlUsTUFBQSxDQUFPOWhCLENBQUEsRUFBRzZULE1BQUEsRUFBUXhTLENBQUEsQ0FBRXdTLE1BQU0sR0FBRyxLQUFLaU8sTUFBQSxDQUFPemhCLENBQUEsSUFBSyxLQUFLeWhCLE1BQUEsQ0FBTzloQixDQUFBLEdBQUksS0FBSzhoQixNQUFBLENBQU85aEIsQ0FBQSxJQUFLcUIsQ0FBQTtFQUM3RjtFQU9BK2dCLEtBQUtwaUIsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDVCxNQUFNZ0IsQ0FBQSxHQUFJLEtBQUt5Z0IsTUFBQSxDQUFPMU8sTUFBQSxDQUFPL1MsQ0FBQSxFQUFHLENBQUMsRUFBRTtNQUFJMEIsQ0FBQSxHQUFJL0IsQ0FBQSxHQUFJO01BQUdrRSxDQUFBLEdBQUlrQixJQUFBLENBQUtDLEdBQUEsQ0FBSSxHQUFHdEQsQ0FBQztNQUFHc0MsQ0FBQSxHQUFJLEtBQUt5ZCxNQUFBLENBQU81ZCxDQUFBO0lBQ3RGbEUsQ0FBQSxHQUFJLElBQUksS0FBS2k0QyxXQUFBLENBQVk1MkMsQ0FBQSxFQUFHLFlBQVlnRCxDQUFDLElBQUksS0FBSzR6QyxXQUFBLENBQVk1MkMsQ0FBQSxFQUFHLGVBQWVnRCxDQUFDLEdBQUcsS0FBS3lkLE1BQUEsQ0FBTzFPLE1BQUEsQ0FBT3BULENBQUEsRUFBRyxHQUFHcUIsQ0FBQztJQUM5RyxNQUFNa0QsQ0FBQSxHQUFJLEtBQUsyekMsaUJBQUEsQ0FBa0IsUUFBUTtNQUN2Q0MsU0FBQSxFQUFXOTNDLENBQUE7TUFDWCszQyxPQUFBLEVBQVNwNEM7SUFDWCxDQUFDO0lBQ0RxQixDQUFBLENBQUVGLElBQUEsQ0FBSzJhLEVBQUEsQ0FBR0csS0FBQSxFQUFPMVgsQ0FBQztFQUNwQjtFQVFBdWMsT0FBTzlnQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsR0FBSSxPQUFJO0lBQ25CLElBQUksQ0FBQyxLQUFLMkIsTUFBQSxFQUFRO01BQ2hCLEtBQUsyRSxJQUFBLENBQUt0SCxDQUFDO01BQ1g7SUFDRjtJQUNBTCxDQUFBLEdBQUksS0FBS2dELE1BQUEsS0FBV2hELENBQUEsR0FBSSxLQUFLZ0QsTUFBQSxHQUFTM0IsQ0FBQSxLQUFNLEtBQUt5Z0IsTUFBQSxDQUFPOWhCLENBQUEsRUFBRzZULE1BQUEsQ0FBT3FDLE1BQUEsQ0FBTyxHQUFHLEtBQUs0TCxNQUFBLENBQU85aEIsQ0FBQSxFQUFHbUIsSUFBQSxDQUFLMmEsRUFBQSxDQUFHSyxPQUFPO0lBQzFHLE1BQU1wYSxDQUFBLEdBQUlWLENBQUEsR0FBSSxJQUFJO0lBQ2xCLElBQUksS0FBS3lnQixNQUFBLENBQU8xTyxNQUFBLENBQU9wVCxDQUFBLEVBQUcrQixDQUFBLEVBQUcxQixDQUFDLEdBQUdMLENBQUEsR0FBSSxHQUFHO01BQ3RDLE1BQU1rRSxDQUFBLEdBQUksS0FBSzRkLE1BQUEsQ0FBTzloQixDQUFBLEdBQUk7TUFDMUIsS0FBS2k0QyxXQUFBLENBQVk1M0MsQ0FBQSxFQUFHLFlBQVk2RCxDQUFDO0lBQ25DLE9BQU87TUFDTCxNQUFNQSxDQUFBLEdBQUksS0FBSzRkLE1BQUEsQ0FBTzloQixDQUFBLEdBQUk7TUFDMUJrRSxDQUFBLEdBQUksS0FBSyt6QyxXQUFBLENBQVk1M0MsQ0FBQSxFQUFHLGVBQWU2RCxDQUFDLElBQUksS0FBSyt6QyxXQUFBLENBQVk1M0MsQ0FBQztJQUNoRTtFQUNGO0VBT0F1SyxRQUFRNUssQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDWixJQUFJLEtBQUt5aEIsTUFBQSxDQUFPOWhCLENBQUEsTUFBTyxRQUNyQixNQUFNK1MsS0FBQSxDQUFNLGlCQUFpQjtJQUMvQixLQUFLK08sTUFBQSxDQUFPOWhCLENBQUEsRUFBRzZULE1BQUEsQ0FBT3drQyxXQUFBLENBQVloNEMsQ0FBQSxDQUFFd1QsTUFBTSxHQUFHLEtBQUtpTyxNQUFBLENBQU85aEIsQ0FBQSxJQUFLSyxDQUFBO0VBQ2hFO0VBT0F3aEIsV0FBVzdoQixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNmLE1BQU1nQixDQUFBLEdBQUksSUFBSWkzQyxnQkFBQSxDQUFpQjtJQUMvQixXQUFXdjJDLENBQUEsSUFBSy9CLENBQUEsRUFDZHFCLENBQUEsQ0FBRW5CLFdBQUEsQ0FBWTZCLENBQUEsQ0FBRThSLE1BQU07SUFDeEIsSUFBSSxLQUFLN1EsTUFBQSxHQUFTLEdBQUc7TUFDbkIsSUFBSTNDLENBQUEsR0FBSSxHQUFHO1FBQ1QsTUFBTTBCLENBQUEsR0FBSXFELElBQUEsQ0FBSzI0QixHQUFBLENBQUkxOUIsQ0FBQSxHQUFJLEdBQUcsS0FBSzJDLE1BQUEsR0FBUyxDQUFDO1FBQ3pDLEtBQUs4ZSxNQUFBLENBQU8vZixDQUFBLEVBQUc4UixNQUFBLENBQU8wa0MsS0FBQSxDQUFNbDNDLENBQUM7TUFDL0IsT0FDRWhCLENBQUEsS0FBTSxLQUFLLEtBQUt5M0MsV0FBQSxDQUFZdjBDLE9BQUEsQ0FBUWxDLENBQUM7TUFDdkMsS0FBS3lnQixNQUFBLENBQU8xTyxNQUFBLENBQU8vUyxDQUFBLEVBQUcsR0FBRyxHQUFHTCxDQUFDO0lBQy9CLE9BQ0UsS0FBSzhoQixNQUFBLENBQU9uYSxJQUFBLENBQUssR0FBRzNILENBQUMsR0FBRyxLQUFLODNDLFdBQUEsQ0FBWTUzQyxXQUFBLENBQVltQixDQUFDO0lBQ3hEckIsQ0FBQSxDQUFFOEIsT0FBQSxDQUFTQyxDQUFBLElBQU1BLENBQUEsQ0FBRVosSUFBQSxDQUFLMmEsRUFBQSxDQUFHRSxRQUFRLENBQUM7RUFDdEM7RUFNQTlGLE9BQU9sVyxDQUFBLEVBQUc7SUFDUnNZLEtBQUEsQ0FBTXRZLENBQUMsTUFBTUEsQ0FBQSxHQUFJLEtBQUtnRCxNQUFBLEdBQVMsSUFBSSxLQUFLOGUsTUFBQSxDQUFPOWhCLENBQUEsRUFBRzZULE1BQUEsQ0FBT3FDLE1BQUEsQ0FBTyxHQUFHLEtBQUs0TCxNQUFBLENBQU85aEIsQ0FBQSxFQUFHbUIsSUFBQSxDQUFLMmEsRUFBQSxDQUFHSyxPQUFPLEdBQUcsS0FBSzJGLE1BQUEsQ0FBTzFPLE1BQUEsQ0FBT3BULENBQUEsRUFBRyxDQUFDO0VBQzdIO0VBSUFpVixVQUFBLEVBQVk7SUFDVixLQUFLNmlDLFdBQUEsQ0FBWS9vQyxTQUFBLEdBQVksSUFBSSxLQUFLK1MsTUFBQSxDQUFPaGdCLE9BQUEsQ0FBUzlCLENBQUEsSUFBTUEsQ0FBQSxDQUFFbUIsSUFBQSxDQUFLMmEsRUFBQSxDQUFHSyxPQUFPLENBQUMsR0FBRyxLQUFLMkYsTUFBQSxDQUFPOWUsTUFBQSxHQUFTO0VBQ3hHO0VBUUF3MUMsWUFBWXg0QyxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNoQixNQUFNZ0IsQ0FBQSxHQUFJLEtBQUt5Z0IsTUFBQSxDQUFPdlgsT0FBQSxDQUFRdkssQ0FBQztJQUMvQixLQUFLOGdCLE1BQUEsQ0FBT3pmLENBQUEsR0FBSSxHQUFHaEIsQ0FBQztFQUN0QjtFQU9BNEIsSUFBSWpDLENBQUEsRUFBRztJQUNMLE9BQU8sS0FBSzhoQixNQUFBLENBQU85aEIsQ0FBQTtFQUNyQjtFQU9BdUssUUFBUXZLLENBQUEsRUFBRztJQUNULE9BQU8sS0FBSzhoQixNQUFBLENBQU92WCxPQUFBLENBQVF2SyxDQUFDO0VBQzlCO0VBUUFpNEMsWUFBWWo0QyxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNuQmhCLENBQUEsR0FBSWdCLENBQUEsQ0FBRXdTLE1BQUEsQ0FBTzRrQyxxQkFBQSxDQUFzQnA0QyxDQUFBLEVBQUdMLENBQUEsQ0FBRTZULE1BQU0sSUFBSSxLQUFLaWtDLFdBQUEsQ0FBWTUzQyxXQUFBLENBQVlGLENBQUEsQ0FBRTZULE1BQU0sR0FBRzdULENBQUEsQ0FBRW1CLElBQUEsQ0FBSzJhLEVBQUEsQ0FBR0UsUUFBUTtFQUM5RztFQU9BazhCLGtCQUFrQmw0QyxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUN0QixPQUFPLElBQUlxNEMsV0FBQSxDQUFZMTRDLENBQUEsRUFBRztNQUN4QjI0QyxNQUFBLEVBQVF0NEM7SUFDVixDQUFDO0VBQ0g7QUFDRjtBQUNBLElBQU11NEMsRUFBQSxHQUFLO0VBQWlCQyxFQUFBLEdBQUs7RUFBZUMsRUFBQSxHQUFLO0VBQWVDLEVBQUEsR0FBSztBQUN6RSxJQUFNQyxFQUFBLEdBQU4sTUFBUztFQUNQdjNDLFlBQUEsRUFBYztJQUNaLEtBQUt1cUMsU0FBQSxHQUFZampDLE9BQUEsQ0FBUUMsT0FBQSxDQUFRO0VBQ25DO0VBTUE2RCxJQUFJN00sQ0FBQSxFQUFHO0lBQ0wsT0FBTyxJQUFJK0ksT0FBQSxDQUFRLENBQUMxSSxDQUFBLEVBQUdnQixDQUFBLEtBQU07TUFDM0IsS0FBSzJxQyxTQUFBLEdBQVksS0FBS0EsU0FBQSxDQUFVaHRCLElBQUEsQ0FBS2hmLENBQUMsRUFBRWdmLElBQUEsQ0FBSzNlLENBQUMsRUFBRXNmLEtBQUEsQ0FBTXRlLENBQUM7SUFDekQsQ0FBQztFQUNIO0FBQ0Y7QUFDQSxJQUFNNDNDLEVBQUEsR0FBTixjQUFpQjdqQyxDQUFBLENBQUU7RUFDakIzVCxZQUFBLEVBQWM7SUFDWixNQUFNLEdBQUdELFNBQVMsR0FBRyxLQUFLMDNDLGtCQUFBLEdBQXFCLElBQUksS0FBS0MsT0FBQSxHQUFVO0VBQ3BFO0VBTUEsSUFBSXQyQixrQkFBQSxFQUFvQjtJQUN0QixPQUFPLEtBQUtxMkIsa0JBQUE7RUFDZDtFQU1BLElBQUlyMkIsa0JBQWtCN2lCLENBQUEsRUFBRztJQUN2QixLQUFLazVDLGtCQUFBLEdBQXFCbDVDLENBQUE7RUFDNUI7RUFNQSxJQUFJa2tCLFdBQUEsRUFBYTtJQUNmLE9BQU8sS0FBS2kxQixPQUFBLENBQVE7RUFDdEI7RUFNQSxJQUFJLzBCLFVBQUEsRUFBWTtJQUNkLE9BQU8sS0FBSyswQixPQUFBLENBQVEsS0FBS0EsT0FBQSxDQUFRbjJDLE1BQUEsR0FBUztFQUM1QztFQU1BLElBQUlnZ0IsYUFBQSxFQUFlO0lBQ2pCLE9BQU8sS0FBS20yQixPQUFBLENBQVEsS0FBS3QyQixpQkFBQTtFQUMzQjtFQU1BLElBQUlHLGFBQWFoakIsQ0FBQSxFQUFHO0lBQ2xCLEtBQUs2aUIsaUJBQUEsR0FBb0IsS0FBS0wsYUFBQSxDQUFjeGlCLENBQUM7RUFDL0M7RUFNQSxJQUFJd2tCLFVBQUEsRUFBWTtJQUNkLE9BQU8sS0FBSzNCLGlCQUFBLEtBQXNCLEtBQUtzMkIsT0FBQSxDQUFRbjJDLE1BQUEsR0FBUyxJQUFJLE9BQU8sS0FBS20yQyxPQUFBLENBQVEsS0FBS3QyQixpQkFBQSxHQUFvQjtFQUMzRztFQU1BLElBQUl1MkIsb0JBQUEsRUFBc0I7SUFDeEIsT0FBTyxLQUFLdDNCLE1BQUEsQ0FBTzVZLEtBQUEsQ0FBTSxLQUFLMlosaUJBQUEsR0FBb0IsQ0FBQyxFQUFFelksSUFBQSxDQUFNL0osQ0FBQSxJQUFNLENBQUMsQ0FBQ0EsQ0FBQSxDQUFFb2UsTUFBQSxDQUFPemIsTUFBTTtFQUNwRjtFQU1BLElBQUlxMkMsd0JBQUEsRUFBMEI7SUFDNUIsT0FBTyxLQUFLdjNCLE1BQUEsQ0FBTzVZLEtBQUEsQ0FBTSxHQUFHLEtBQUsyWixpQkFBaUIsRUFBRTdWLE9BQUEsQ0FBUSxFQUFFNUMsSUFBQSxDQUFNL0osQ0FBQSxJQUFNLENBQUMsQ0FBQ0EsQ0FBQSxDQUFFb2UsTUFBQSxDQUFPemIsTUFBTTtFQUM3RjtFQU1BLElBQUlzaEIsY0FBQSxFQUFnQjtJQUNsQixPQUFPLEtBQUt6QixpQkFBQSxLQUFzQixJQUFJLE9BQU8sS0FBS3MyQixPQUFBLENBQVEsS0FBS3QyQixpQkFBQSxHQUFvQjtFQUNyRjtFQU1BLElBQUlmLE9BQUEsRUFBUztJQUNYLE9BQU8sS0FBS3EzQixPQUFBLENBQVFwQixLQUFBO0VBQ3RCO0VBTUEsSUFBSXVCLGNBQUEsRUFBZ0I7SUFDbEIsT0FBTyxLQUFLeDNCLE1BQUEsQ0FBT3pTLEtBQUEsQ0FBT3JQLENBQUEsSUFBTUEsQ0FBQSxDQUFFNE8sT0FBTztFQUMzQztFQUtBcWdCLFFBQUEsRUFBVTtJQUNSLE1BQU1qdkIsQ0FBQSxHQUFJLElBQUk2M0MsRUFBQSxDQUFHLEtBQUs5aEMsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHemIsS0FBQSxDQUFNMGIsUUFBUTtJQUM5QyxLQUFLbW9CLE9BQUEsR0FBVSxJQUFJSSxLQUFBLENBQU12NUMsQ0FBQSxFQUFHO01BQzFCNEwsR0FBQSxFQUFLaXNDLEVBQUEsQ0FBR2pzQyxHQUFBO01BQ1IzSixHQUFBLEVBQUs0MUMsRUFBQSxDQUFHNTFDO0lBQ1YsQ0FBQyxHQUFHLEtBQUtzVCxTQUFBLENBQVVyQyxFQUFBLENBQ2pCblQsUUFBQSxFQUNBLFFBQ0NNLENBQUEsSUFBTSxLQUFLMFYsTUFBQSxDQUFPeWpDLFdBQUEsQ0FBWTdDLGNBQUEsQ0FBZXQyQyxDQUFDLENBQ2pEO0VBQ0Y7RUFZQW1rQyxlQUFleGtDLENBQUEsRUFBRztJQUNoQkEsQ0FBQSxHQUFJLEtBQUt5a0MscUJBQUEsQ0FBc0IsSUFBSSxLQUFLRSxvQkFBQSxDQUFxQjtFQUMvRDtFQVVBM2lCLGFBQWE7SUFDWGpILElBQUEsRUFBTS9hLENBQUE7SUFDTjhJLElBQUEsRUFBTXpJLENBQUEsR0FBSSxDQUFDO0lBQ1hzVCxFQUFBLEVBQUl0UyxDQUFBLEdBQUk7SUFDUjJjLEtBQUEsRUFBT2pjLENBQUEsR0FBSSxDQUFDO0VBQ2QsR0FBRztJQUNELE1BQU1tQyxDQUFBLEdBQUksS0FBSzZSLE1BQUEsQ0FBT3dWLFFBQUEsQ0FBU0QsU0FBQTtNQUFXam5CLENBQUEsR0FBSSxLQUFLMFIsTUFBQSxDQUFPcUwsS0FBQSxDQUFNQyxVQUFBLENBQVdwZixHQUFBLENBQUlqQyxDQUFDO01BQUd1RSxDQUFBLEdBQUksSUFBSThYLENBQUEsQ0FBRTtRQUMzRjFJLEVBQUEsRUFBSXRTLENBQUE7UUFDSnlILElBQUEsRUFBTXpJLENBQUE7UUFDTjBhLElBQUEsRUFBTTFXLENBQUE7UUFDTmlkLEdBQUEsRUFBSyxLQUFLdkwsTUFBQSxDQUFPd0wsR0FBQTtRQUNqQmpGLFFBQUEsRUFBVXBZLENBQUE7UUFDVnFZLFNBQUEsRUFBV3hhO01BQ2IsR0FBRyxLQUFLc1QsZ0JBQWdCO0lBQ3hCLE9BQU9uUixDQUFBLElBQUt4RCxNQUFBLENBQU9vRSxtQkFBQSxDQUFvQixNQUFNO01BQzNDLEtBQUsyMEMsZUFBQSxDQUFnQmwxQyxDQUFDO0lBQ3hCLEdBQUc7TUFBRXFnQyxPQUFBLEVBQVM7SUFBSSxDQUFDLEdBQUdyZ0MsQ0FBQTtFQUN4QjtFQWFBdWMsT0FBTztJQUNMbk4sRUFBQSxFQUFJM1QsQ0FBQSxHQUFJO0lBQ1IrYSxJQUFBLEVBQU0xYSxDQUFBLEdBQUksS0FBS3VULE1BQUEsQ0FBT21OLFlBQUE7SUFDdEJqWSxJQUFBLEVBQU16SCxDQUFBLEdBQUksQ0FBQztJQUNYNGYsS0FBQSxFQUFPbGYsQ0FBQTtJQUNQbWYsV0FBQSxFQUFhaGQsQ0FBQSxHQUFJO0lBQ2pCMEcsT0FBQSxFQUFTdkcsQ0FBQSxHQUFJO0lBQ2IyWixLQUFBLEVBQU96WixDQUFBLEdBQUksQ0FBQztFQUNkLElBQUksQ0FBQyxHQUFHO0lBQ04sSUFBSUcsQ0FBQSxHQUFJM0MsQ0FBQTtJQUNSMkMsQ0FBQSxLQUFNLFdBQVdBLENBQUEsR0FBSSxLQUFLbWUsaUJBQUEsSUFBcUJ4ZSxDQUFBLEdBQUksSUFBSTtJQUN2RCxNQUFNTyxDQUFBLEdBQUksS0FBS29kLFlBQUEsQ0FBYTtNQUMxQnJPLEVBQUEsRUFBSTNULENBQUE7TUFDSithLElBQUEsRUFBTTFhLENBQUE7TUFDTnlJLElBQUEsRUFBTXpILENBQUE7TUFDTjJjLEtBQUEsRUFBT3paO0lBQ1QsQ0FBQztJQUNELE9BQU9GLENBQUEsSUFBSyxLQUFLcTFDLGVBQUEsQ0FBZ0JkLEVBQUEsRUFBSSxLQUFLdjJCLGVBQUEsQ0FBZ0IzZCxDQUFDLEdBQUc7TUFDNUR1YyxLQUFBLEVBQU92YztJQUNULENBQUMsR0FBRyxLQUFLeTBDLE9BQUEsQ0FBUXI0QixNQUFBLENBQU9wYyxDQUFBLEVBQUdFLENBQUEsRUFBR1AsQ0FBQyxHQUFHLEtBQUtxMUMsZUFBQSxDQUFnQmIsRUFBQSxFQUFJajBDLENBQUEsRUFBRztNQUM1RHFjLEtBQUEsRUFBT3ZjO0lBQ1QsQ0FBQyxHQUFHUixDQUFBLEdBQUksS0FBSzJlLGlCQUFBLEdBQW9CbmUsQ0FBQSxHQUFJQSxDQUFBLElBQUssS0FBS21lLGlCQUFBLElBQXFCLEtBQUtBLGlCQUFBLElBQXFCamUsQ0FBQTtFQUNoRztFQU9BaWQsV0FBVzdoQixDQUFBLEVBQUdLLENBQUEsR0FBSSxHQUFHO0lBQ25CLEtBQUs4NEMsT0FBQSxDQUFRdDNCLFVBQUEsQ0FBVzdoQixDQUFBLEVBQUdLLENBQUM7RUFDOUI7RUFhQSxNQUFNbWhCLE9BQU94aEIsQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFBLEVBQUc7SUFDcEIsSUFBSSxDQUFDaEIsQ0FBQSxJQUFLLENBQUNnQixDQUFBLEVBQ1QsT0FBT3JCLENBQUE7SUFDVCxNQUFNK0IsQ0FBQSxHQUFJLE1BQU0vQixDQUFBLENBQUU4SSxJQUFBO01BQU01RSxDQUFBLEdBQUksS0FBSzhkLFlBQUEsQ0FBYTtRQUM1Q3JPLEVBQUEsRUFBSTNULENBQUEsQ0FBRTJULEVBQUE7UUFDTm9ILElBQUEsRUFBTS9hLENBQUEsQ0FBRXFKLElBQUE7UUFDUlAsSUFBQSxFQUFNOUgsTUFBQSxDQUFPb0IsTUFBQSxDQUFPLENBQUMsR0FBR0wsQ0FBQSxFQUFHMUIsQ0FBQSxJQUFLLENBQUMsQ0FBQztRQUNsQzJkLEtBQUEsRUFBTzNjLENBQUEsSUFBS3JCLENBQUEsQ0FBRWdlO01BQ2hCLENBQUM7TUFBRzNaLENBQUEsR0FBSSxLQUFLbWUsYUFBQSxDQUFjeGlCLENBQUM7SUFDNUIsT0FBTyxLQUFLbTVDLE9BQUEsQ0FBUXZ1QyxPQUFBLENBQVF2RyxDQUFBLEVBQUdILENBQUMsR0FBRyxLQUFLdzFDLGVBQUEsQ0FBZ0JYLEVBQUEsRUFBSTcwQyxDQUFBLEVBQUc7TUFDN0QrYyxLQUFBLEVBQU81YztJQUNULENBQUMsR0FBR0gsQ0FBQTtFQUNOO0VBUUEwRyxRQUFRNUssQ0FBQSxFQUFHSyxDQUFBLEVBQUdnQixDQUFBLEVBQUc7SUFDZixNQUFNVSxDQUFBLEdBQUksS0FBS3lnQixhQUFBLENBQWN4aUIsQ0FBQztJQUM5QixPQUFPLEtBQUs4Z0IsTUFBQSxDQUFPO01BQ2pCL0YsSUFBQSxFQUFNMWEsQ0FBQTtNQUNOeUksSUFBQSxFQUFNekgsQ0FBQTtNQUNONGYsS0FBQSxFQUFPbGYsQ0FBQTtNQUNQNkksT0FBQSxFQUFTO0lBQ1gsQ0FBQztFQUNIO0VBUUErdUMsTUFBTTM1QyxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsR0FBSSxPQUFJO0lBQ2xCLE1BQU1VLENBQUEsR0FBSSxLQUFLK2UsTUFBQSxDQUFPO01BQ3BCL0YsSUFBQSxFQUFNL2EsQ0FBQTtNQUNONEssT0FBQSxFQUFTdko7SUFDWCxDQUFDO0lBQ0QsSUFBSTtNQUNGWCxNQUFBLENBQU9vRSxtQkFBQSxDQUFvQixNQUFNO1FBQy9CL0MsQ0FBQSxDQUFFWixJQUFBLENBQUsyYSxFQUFBLENBQUdNLFFBQUEsRUFBVS9iLENBQUM7TUFDdkIsQ0FBQztJQUNILFNBQVM2RCxDQUFBLEVBQVA7TUFDQTRELENBQUEsQ0FBRSxHQUFHOUgsQ0FBQSxxQ0FBc0MsU0FBU2tFLENBQUM7SUFDdkQ7SUFDQSxPQUFPbkMsQ0FBQTtFQUNUO0VBVUFpMUMsMEJBQTBCaDNDLENBQUEsRUFBR0ssQ0FBQSxHQUFJLE9BQUk7SUFDbkMsTUFBTWdCLENBQUEsR0FBSSxLQUFLMmdCLFlBQUEsQ0FBYTtNQUFFakgsSUFBQSxFQUFNLEtBQUtuSCxNQUFBLENBQU9tTjtJQUFhLENBQUM7SUFDOUQsT0FBTyxLQUFLbzRCLE9BQUEsQ0FBUW41QyxDQUFBLElBQUtxQixDQUFBLEVBQUcsS0FBS3E0QyxlQUFBLENBQWdCYixFQUFBLEVBQUl4M0MsQ0FBQSxFQUFHO01BQ3RENGYsS0FBQSxFQUFPamhCO0lBQ1QsQ0FBQyxHQUFHSyxDQUFBLEdBQUksS0FBS3dpQixpQkFBQSxHQUFvQjdpQixDQUFBLEdBQUlBLENBQUEsSUFBSyxLQUFLNmlCLGlCQUFBLElBQXFCLEtBQUtBLGlCQUFBLElBQXFCeGhCLENBQUE7RUFDaEc7RUFNQTJqQyxZQUFBLEVBQWM7SUFDWixPQUFPLEtBQUtuaUIsaUJBQUEsR0FBb0IsS0FBS2YsTUFBQSxDQUFPOWUsTUFBQSxHQUFTLEdBQUcsS0FBSzhkLE1BQUEsQ0FBTztFQUN0RTtFQVFBLE1BQU00MkIsWUFBWTEzQyxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUN0QixJQUFJZ0IsQ0FBQTtJQUNKLElBQUlyQixDQUFBLENBQUVxSixJQUFBLEtBQVNoSixDQUFBLENBQUVnSixJQUFBLElBQVFySixDQUFBLENBQUVxYixTQUFBLEVBQVc7TUFDcEMsTUFBTXRaLENBQUEsR0FBSSxNQUFNMUIsQ0FBQSxDQUFFeUksSUFBQTtNQUNsQixJQUFJSixDQUFBLENBQUUzRyxDQUFDLEdBQUc7UUFDUnpCLE9BQUEsQ0FBUUMsS0FBQSxDQUFNLCtEQUErRDtRQUM3RTtNQUNGO01BQ0EsTUFBTSxDQUFDMkQsQ0FBQyxJQUFJMG9CLEVBQUEsQ0FBRyxDQUFDN3FCLENBQUMsR0FBRy9CLENBQUEsQ0FBRSthLElBQUEsQ0FBS21FLGNBQWM7TUFDekM3ZCxDQUFBLEdBQUk2QyxDQUFBO0lBQ04sV0FBV2xFLENBQUEsQ0FBRXFiLFNBQUEsSUFBYVAsRUFBQSxDQUFHemEsQ0FBQSxFQUFHLFFBQVEsS0FBS3lhLEVBQUEsQ0FBRzlhLENBQUEsRUFBRyxRQUFRLEdBQUc7TUFDNUQsTUFBTStCLENBQUEsR0FBSSxNQUFNMUIsQ0FBQSxDQUFFaWdCLGtCQUFBLENBQW1CO1FBQUdwYyxDQUFBLEdBQUk0b0IsQ0FBQSxDQUFFL3FCLENBQUEsRUFBRy9CLENBQUEsQ0FBRSthLElBQUEsQ0FBS21FLGNBQWM7TUFDdEU3ZCxDQUFBLEdBQUltYSxFQUFBLENBQUd0WCxDQUFBLEVBQUdsRSxDQUFBLENBQUUrYSxJQUFBLENBQUtGLGdCQUFnQjtJQUNuQztJQUNBeFosQ0FBQSxLQUFNLFdBQVcsTUFBTXJCLENBQUEsQ0FBRXdmLFNBQUEsQ0FBVW5lLENBQUMsR0FBRyxLQUFLMGhCLFdBQUEsQ0FBWTFpQixDQUFDLEdBQUcsS0FBS3dpQixpQkFBQSxHQUFvQixLQUFLczJCLE9BQUEsQ0FBUTV1QyxPQUFBLENBQVF2SyxDQUFDO0VBQzdHO0VBT0EraUIsWUFBWS9pQixDQUFBLEVBQUdLLENBQUEsR0FBSSxNQUFJO0lBQ3JCLE9BQU8sSUFBSTBJLE9BQUEsQ0FBUzFILENBQUEsSUFBTTtNQUN4QixNQUFNVSxDQUFBLEdBQUksS0FBS28zQyxPQUFBLENBQVE1dUMsT0FBQSxDQUFRdkssQ0FBQztNQUNoQyxJQUFJLENBQUMsS0FBSytoQixhQUFBLENBQWNoZ0IsQ0FBQyxHQUN2QixNQUFNLElBQUlnUixLQUFBLENBQU0sOEJBQThCO01BQ2hEL1MsQ0FBQSxDQUFFd1QsT0FBQSxDQUFRLEdBQUcsS0FBSzJsQyxPQUFBLENBQVFqakMsTUFBQSxDQUFPblUsQ0FBQyxHQUFHLEtBQUsyM0MsZUFBQSxDQUFnQmQsRUFBQSxFQUFJNTRDLENBQUEsRUFBRztRQUMvRGloQixLQUFBLEVBQU9sZjtNQUNULENBQUMsR0FBRyxLQUFLOGdCLGlCQUFBLElBQXFCOWdCLENBQUEsSUFBSyxLQUFLOGdCLGlCQUFBLElBQXFCLEtBQUtmLE1BQUEsQ0FBTzllLE1BQUEsR0FBU2pCLENBQUEsS0FBTSxNQUFNLEtBQUs4Z0IsaUJBQUEsR0FBb0IsTUFBTSxLQUFLKzJCLGlCQUFBLENBQWtCLEdBQUd2NUMsQ0FBQSxJQUFLLEtBQUt5Z0IsTUFBQSxDQUFPLElBQUl6ZixDQUFBLENBQUU7SUFDaEwsQ0FBQztFQUNIO0VBT0EwMUMscUJBQUEsRUFBdUI7SUFDckIsSUFBSS8yQyxDQUFBO0lBQ0osU0FBU0ssQ0FBQSxHQUFJLEtBQUt5aEIsTUFBQSxDQUFPOWUsTUFBQSxHQUFTLEdBQUczQyxDQUFBLElBQUssR0FBR0EsQ0FBQSxJQUMzQyxLQUFLeWhCLE1BQUEsQ0FBT3poQixDQUFBLEVBQUd5VCxRQUFBLEtBQWEsS0FBS2lQLFdBQUEsQ0FBWSxLQUFLakIsTUFBQSxDQUFPemhCLENBQUEsQ0FBRSxHQUFHTCxDQUFBLEdBQUlLLENBQUE7SUFDcEUsT0FBT0wsQ0FBQTtFQUNUO0VBTUE2NUMsZ0JBQUEsRUFBa0I7SUFDaEIsU0FBUzc1QyxDQUFBLEdBQUksS0FBSzhoQixNQUFBLENBQU85ZSxNQUFBLEdBQVMsR0FBR2hELENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQzNDLEtBQUttNUMsT0FBQSxDQUFRampDLE1BQUEsQ0FBT2xXLENBQUM7SUFDdkIsS0FBSzQ1QyxpQkFBQSxDQUFrQixHQUFHLEtBQUs5NEIsTUFBQSxDQUFPLEdBQUcsS0FBS2tDLFlBQUEsQ0FBYXBFLFVBQUEsQ0FBV2pHLEtBQUEsQ0FBTTtFQUM5RTtFQVFBclAsTUFBQSxFQUFRO0lBQ04sTUFBTXRKLENBQUEsR0FBSSxLQUFLK1YsTUFBQSxDQUFPa04sS0FBQSxDQUFNNjJCLGdDQUFBLENBQWlDO01BQUd6NUMsQ0FBQSxHQUFJaU0sQ0FBQSxDQUFFSSxJQUFBLENBQUssS0FBSztJQUNoRnJNLENBQUEsQ0FBRUgsV0FBQSxDQUFZRixDQUFDO0lBQ2YsTUFBTXFCLENBQUEsR0FBSTtNQUNSeUwsSUFBQSxFQUFNUixDQUFBLENBQUVzQyxPQUFBLENBQVF2TyxDQUFDLElBQUksS0FBS0EsQ0FBQSxDQUFFME87SUFDOUI7SUFDQSxPQUFPLEtBQUsrUixNQUFBLENBQU87TUFBRWhZLElBQUEsRUFBTXpIO0lBQUUsQ0FBQztFQUNoQztFQU9BZ2hCLGdCQUFnQnJpQixDQUFBLEVBQUc7SUFDakIsT0FBT0EsQ0FBQSxLQUFNLE9BQU9BLENBQUEsR0FBSSxLQUFLbTVDLE9BQUEsQ0FBUW4yQyxNQUFBLEdBQVMsSUFBSSxLQUFLbTJDLE9BQUEsQ0FBUW41QyxDQUFBO0VBQ2pFO0VBTUF3aUIsY0FBY3hpQixDQUFBLEVBQUc7SUFDZixPQUFPLEtBQUttNUMsT0FBQSxDQUFRNXVDLE9BQUEsQ0FBUXZLLENBQUM7RUFDL0I7RUFPQXloQixhQUFhemhCLENBQUEsRUFBRztJQUNkLE9BQU8sS0FBS201QyxPQUFBLENBQVFwQixLQUFBLENBQU0zdEMsSUFBQSxDQUFNL0osQ0FBQSxJQUFNQSxDQUFBLENBQUVzVCxFQUFBLEtBQU8zVCxDQUFDO0VBQ2xEO0VBTUE4aUIsU0FBUzlpQixDQUFBLEVBQUc7SUFDVnNNLENBQUEsQ0FBRTBCLFNBQUEsQ0FBVWhPLENBQUMsTUFBTUEsQ0FBQSxHQUFJQSxDQUFBLENBQUVzRCxVQUFBO0lBQ3pCLE1BQU1qRCxDQUFBLEdBQUksS0FBSzg0QyxPQUFBLENBQVE3akMsS0FBQTtNQUFPalUsQ0FBQSxHQUFJckIsQ0FBQSxDQUFFa0QsT0FBQSxDQUFRLElBQUltWixDQUFBLENBQUV4RixHQUFBLENBQUl3SCxPQUFBLEVBQVM7TUFBR3RjLENBQUEsR0FBSTFCLENBQUEsQ0FBRWtLLE9BQUEsQ0FBUWxKLENBQUM7SUFDakYsSUFBSVUsQ0FBQSxJQUFLLEdBQ1AsT0FBTyxLQUFLbzNDLE9BQUEsQ0FBUXAzQyxDQUFBO0VBQ3hCO0VBUUFnNEMsMkJBQTJCLzVDLENBQUEsRUFBRztJQUM1QnNNLENBQUEsQ0FBRTBCLFNBQUEsQ0FBVWhPLENBQUMsTUFBTUEsQ0FBQSxHQUFJQSxDQUFBLENBQUVzRCxVQUFBO0lBQ3pCLE1BQU1qRCxDQUFBLEdBQUlMLENBQUEsQ0FBRWtELE9BQUEsQ0FBUSxJQUFJbVosQ0FBQSxDQUFFeEYsR0FBQSxDQUFJd0gsT0FBQSxFQUFTO0lBQ3ZDLElBQUksQ0FBQ2hlLENBQUEsRUFDSDtJQUNGLE1BQU1nQixDQUFBLEdBQUloQixDQUFBLENBQUU2QyxPQUFBLENBQVEsSUFBSSxLQUFLNlMsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHbGEsR0FBQSxDQUFJQyxhQUFBLEVBQWU7SUFDMUQsSUFBSXpWLENBQUEsSUFBSyxRQUFRQSxDQUFBLENBQUUyNEMsV0FBQSxDQUFZLEtBQUtqa0MsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHemIsS0FBQSxDQUFNK0ksT0FBTyxHQUN6RCxPQUFPLEtBQUt3RSxpQkFBQSxHQUFvQixLQUFLczJCLE9BQUEsQ0FBUTdqQyxLQUFBLENBQU0vSyxPQUFBLENBQVFsSyxDQUFDLEdBQUcsS0FBSzJpQixZQUFBLENBQWE5RixrQkFBQSxDQUFtQixHQUFHLEtBQUs4RixZQUFBO0VBQ2hIO0VBT0F5ekIsb0JBQW9CejJDLENBQUEsRUFBRztJQUNyQixJQUFJLENBQUNBLENBQUEsSUFBSyxFQUFFQSxDQUFBLFlBQWEyRCxJQUFBLEdBQ3ZCO0lBQ0YySSxDQUFBLENBQUUwQixTQUFBLENBQVVoTyxDQUFDLE1BQU1BLENBQUEsR0FBSUEsQ0FBQSxDQUFFc0QsVUFBQTtJQUN6QixNQUFNakQsQ0FBQSxHQUFJTCxDQUFBLENBQUVrRCxPQUFBLENBQVEsSUFBSW1aLENBQUEsQ0FBRXhGLEdBQUEsQ0FBSXdILE9BQUEsRUFBUztJQUN2QyxPQUFPLEtBQUt5RCxNQUFBLENBQU8xWCxJQUFBLENBQU0vSSxDQUFBLElBQU1BLENBQUEsQ0FBRXdTLE1BQUEsS0FBV3hULENBQUM7RUFDL0M7RUFRQTRNLEtBQUtqTixDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNULEtBQUs4NEMsT0FBQSxDQUFRbHNDLElBQUEsQ0FBS2pOLENBQUEsRUFBR0ssQ0FBQyxHQUFHLEtBQUt3aUIsaUJBQUEsR0FBb0J4aUIsQ0FBQTtFQUNwRDtFQU9BK2hCLEtBQUtwaUIsQ0FBQSxFQUFHSyxDQUFBLEdBQUksS0FBS3dpQixpQkFBQSxFQUFtQjtJQUNsQyxJQUFJdkssS0FBQSxDQUFNdFksQ0FBQyxLQUFLc1ksS0FBQSxDQUFNalksQ0FBQyxHQUFHO01BQ3hCeUgsQ0FBQSxDQUFFLDJEQUEyRCxNQUFNO01BQ25FO0lBQ0Y7SUFDQSxJQUFJLENBQUMsS0FBS2lhLGFBQUEsQ0FBYy9oQixDQUFDLEtBQUssQ0FBQyxLQUFLK2hCLGFBQUEsQ0FBYzFoQixDQUFDLEdBQUc7TUFDcER5SCxDQUFBLENBQUUsb0dBQW9HLE1BQU07TUFDNUc7SUFDRjtJQUNBLEtBQUtxeEMsT0FBQSxDQUFRLzJCLElBQUEsQ0FBS3BpQixDQUFBLEVBQUdLLENBQUMsR0FBRyxLQUFLd2lCLGlCQUFBLEdBQW9CN2lCLENBQUEsRUFBRyxLQUFLMDVDLGVBQUEsQ0FBZ0JaLEVBQUEsRUFBSSxLQUFLOTFCLFlBQUEsRUFBYztNQUMvRm0xQixTQUFBLEVBQVc5M0MsQ0FBQTtNQUNYKzNDLE9BQUEsRUFBU3A0QztJQUNYLENBQUM7RUFDSDtFQVNBLE1BQU0waEIsUUFBUTFoQixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNyQixJQUFJLEVBQUMsTUFBTXJCLENBQUEsQ0FBRWlVLElBQUEsQ0FBSyxJQUNoQixNQUFNLElBQUlsQixLQUFBLENBQU0saUVBQWlFO0lBQ25GLE1BQU03TyxDQUFBLEdBQUksS0FBSzZSLE1BQUEsQ0FBT3FMLEtBQUEsQ0FBTUMsVUFBQSxDQUFXcGYsR0FBQSxDQUFJNUIsQ0FBQztJQUM1QyxJQUFJLENBQUM2RCxDQUFBLEVBQ0gsTUFBTSxJQUFJNk8sS0FBQSxDQUFNLHFDQUFrQzFTLENBQUEsaUJBQWU7SUFDbkUsTUFBTWdFLENBQUEsR0FBSSxNQUFNckUsQ0FBQSxDQUFFc2dCLGtCQUFBLENBQW1CO01BQUcvYixDQUFBLEdBQUl1b0IsQ0FBQSxDQUMxQ3pvQixDQUFBLEVBQ0FILENBQUEsQ0FBRWdiLGNBQ0o7SUFDQSxJQUFJeGEsQ0FBQSxHQUFJOFcsRUFBQSxDQUFHalgsQ0FBQSxFQUFHTCxDQUFBLENBQUUyVyxnQkFBQSxFQUFrQjNXLENBQUEsQ0FBRTBaLFFBQVE7SUFDNUMsT0FBT3ZjLENBQUEsS0FBTXFELENBQUEsR0FBSTFELE1BQUEsQ0FBT29CLE1BQUEsQ0FBT3NDLENBQUEsRUFBR3JELENBQUMsSUFBSSxLQUFLdUosT0FBQSxDQUFRNUssQ0FBQSxFQUFHa0UsQ0FBQSxDQUFFbUYsSUFBQSxFQUFNM0UsQ0FBQztFQUNsRTtFQUtBazFDLGtCQUFBLEVBQW9CO0lBQ2xCLEtBQUsvMkIsaUJBQUEsR0FBb0I7RUFDM0I7RUFRQSxNQUFNWCxNQUFNbGlCLENBQUEsR0FBSSxPQUFJO0lBQ2xCLE1BQU1LLENBQUEsR0FBSSxJQUFJMjRDLEVBQUEsQ0FBRztJQUNqQixLQUFLbDNCLE1BQUEsQ0FBT2hnQixPQUFBLENBQVNULENBQUEsSUFBTTtNQUN6QmhCLENBQUEsQ0FBRXdNLEdBQUEsQ0FBSSxZQUFZO1FBQ2hCLE1BQU0sS0FBS2tXLFdBQUEsQ0FBWTFoQixDQUFBLEVBQUcsS0FBRTtNQUM5QixDQUFDO0lBQ0gsQ0FBQyxHQUFHLE1BQU1oQixDQUFBLENBQUUyckMsU0FBQSxFQUFXLEtBQUs0TixpQkFBQSxDQUFrQixHQUFHNTVDLENBQUEsSUFBSyxLQUFLOGdCLE1BQUEsQ0FBTyxHQUFHLEtBQUsvSyxNQUFBLENBQU9nYixFQUFBLENBQUd3bEIsY0FBQSxDQUFlO0VBQ3JHO0VBS0EsTUFBTS9pQyxRQUFBLEVBQVU7SUFDZCxNQUFNekssT0FBQSxDQUFRNmUsR0FBQSxDQUFJLEtBQUs5RixNQUFBLENBQU92VSxHQUFBLENBQUt2TixDQUFBLElBQU1BLENBQUEsQ0FBRXdULE9BQUEsQ0FBUSxDQUFDLENBQUM7RUFDdkQ7RUFNQWltQyxnQkFBZ0J6NUMsQ0FBQSxFQUFHO0lBQ2pCLE1BQU07TUFBRXc1QyxXQUFBLEVBQWFuNUM7SUFBRSxJQUFJLEtBQUswVixNQUFBO0lBQ2hDLEtBQUtQLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHbFQsQ0FBQSxDQUFFNlQsTUFBQSxFQUFRLFdBQVl4UyxDQUFBLElBQU07TUFDM0RoQixDQUFBLENBQUVxMUMsT0FBQSxDQUFRcjBDLENBQUM7SUFDYixDQUFDLEdBQUcsS0FBS21VLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHbFQsQ0FBQSxDQUFFNlQsTUFBQSxFQUFRLFNBQVV4UyxDQUFBLElBQU07TUFDN0RoQixDQUFBLENBQUVpMkMsS0FBQSxDQUFNajFDLENBQUM7SUFDWCxDQUFDLEdBQUcsS0FBS21VLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHbFQsQ0FBQSxDQUFFNlQsTUFBQSxFQUFRLFlBQWF4UyxDQUFBLElBQU07TUFDaEVoQixDQUFBLENBQUVtMkMsUUFBQSxDQUFTbjFDLENBQUM7SUFDZCxDQUFDLEdBQUcsS0FBS21VLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHbFQsQ0FBQSxDQUFFNlQsTUFBQSxFQUFRLGFBQWN4UyxDQUFBLElBQU07TUFDakVoQixDQUFBLENBQUVxMkMsU0FBQSxDQUFVcjFDLENBQUM7SUFDZixDQUFDLEdBQUdyQixDQUFBLENBQUVrVCxFQUFBLENBQUcsY0FBZTdSLENBQUEsSUFBTSxLQUFLcTRDLGVBQUEsQ0FBZ0JYLEVBQUEsRUFBSTEzQyxDQUFBLEVBQUc7TUFDeEQ0ZixLQUFBLEVBQU8sS0FBS3VCLGFBQUEsQ0FBY25oQixDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNKO0VBSUFvakMsc0JBQUEsRUFBd0I7SUFDdEIsS0FBS2p2Qix3QkFBQSxDQUF5QkUsUUFBQSxDQUFTO0VBQ3pDO0VBSUFpdkIscUJBQUEsRUFBdUI7SUFDckIsS0FBS252Qix3QkFBQSxDQUF5QnRDLEVBQUEsQ0FDNUJuVCxRQUFBLEVBQ0EsT0FDQ0MsQ0FBQSxJQUFNLEtBQUsrVixNQUFBLENBQU95akMsV0FBQSxDQUFZMUMsY0FBQSxDQUFlOTJDLENBQUMsQ0FDakQsR0FBRyxLQUFLOGhCLE1BQUEsQ0FBT2hnQixPQUFBLENBQVM5QixDQUFBLElBQU07TUFDNUIsS0FBS3k1QyxlQUFBLENBQWdCejVDLENBQUM7SUFDeEIsQ0FBQztFQUNIO0VBT0EraEIsY0FBYy9oQixDQUFBLEVBQUc7SUFDZixPQUFPLEVBQUVBLENBQUEsR0FBSSxLQUFLQSxDQUFBLElBQUssS0FBS201QyxPQUFBLENBQVFuMkMsTUFBQTtFQUN0QztFQVFBMDJDLGdCQUFnQjE1QyxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUN2QixNQUFNVSxDQUFBLEdBQUksSUFBSTIyQyxXQUFBLENBQVkxNEMsQ0FBQSxFQUFHO01BQzNCMjRDLE1BQUEsRUFBUTtRQUNOL2lDLE1BQUEsRUFBUSxJQUFJbkMsQ0FBQSxDQUFFcFQsQ0FBQztRQUNmLEdBQUdnQjtNQUNMO0lBQ0YsQ0FBQztJQUNELE9BQU8sS0FBS2dVLGdCQUFBLENBQWlCaEMsSUFBQSxDQUFLbUgsRUFBQSxFQUFJO01BQ3BDeS9CLEtBQUEsRUFBT2w0QztJQUNULENBQUMsR0FBRzFCLENBQUE7RUFDTjtBQUNGO0FBQ0EsSUFBTTY1QyxFQUFBLEdBQU4sY0FBaUI5a0MsQ0FBQSxDQUFFO0VBQ2pCM1QsWUFBQSxFQUFjO0lBQ1osTUFBTSxHQUFHRCxTQUFTLEdBQUcsS0FBSzI0QyxxQkFBQSxHQUF3QixNQUFNLEtBQUtDLGVBQUEsR0FBa0IsT0FBSSxLQUFLQyxtQkFBQSxHQUFzQixPQUFJLEtBQUtDLHFCQUFBLEdBQXdCO0VBQ2pKO0VBTUEsSUFBSUMsZ0JBQUEsRUFBa0I7SUFDcEIsT0FBTztNQUNMajlCLENBQUEsRUFBRyxDQUFDO01BQ0prOUIsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTEMsRUFBQSxFQUFJLENBQUM7TUFDTDVxQyxFQUFBLEVBQUksQ0FBQztNQUNMaWdDLEVBQUEsRUFBSTtNQUNKNEssR0FBQSxFQUFLO1FBQ0hDLEdBQUEsRUFBSztRQUNMaHJDLEtBQUEsRUFBTztRQUNQRixNQUFBLEVBQVE7TUFDVjtNQUNBeEwsQ0FBQSxFQUFHO1FBQ0R3RyxJQUFBLEVBQU07TUFDUjtNQUNBdUwsQ0FBQSxFQUFHLENBQUM7TUFDSnZVLENBQUEsRUFBRyxDQUFDO01BQ0o4SCxDQUFBLEVBQUcsQ0FBQztJQUNOO0VBQ0Y7RUFNQSxJQUFJcXhDLGtCQUFBLEVBQW9CO0lBQ3RCLE1BQU07TUFBRWw2QixZQUFBLEVBQWNoaEI7SUFBRSxJQUFJLEtBQUsrVixNQUFBO0lBQ2pDLE9BQU8vVixDQUFBLENBQUU4aEIsTUFBQSxDQUFPelMsS0FBQSxDQUFPaFAsQ0FBQSxJQUFNQSxDQUFBLENBQUV5VCxRQUFBLEtBQWEsSUFBRTtFQUNoRDtFQU1BLElBQUlvbkMsa0JBQWtCbDdDLENBQUEsRUFBRztJQUN2QixNQUFNO01BQUVnaEIsWUFBQSxFQUFjM2dCO0lBQUUsSUFBSSxLQUFLMFYsTUFBQTtJQUNqQzFWLENBQUEsQ0FBRXloQixNQUFBLENBQU9oZ0IsT0FBQSxDQUFTVCxDQUFBLElBQU07TUFDdEJBLENBQUEsQ0FBRXlTLFFBQUEsR0FBVzlULENBQUE7SUFDZixDQUFDLEdBQUcsS0FBS3dnQyxVQUFBLENBQVc7RUFDdEI7RUFNQSxJQUFJb1csaUJBQUEsRUFBbUI7SUFDckIsTUFBTTtNQUFFNTFCLFlBQUEsRUFBY2hoQjtJQUFFLElBQUksS0FBSytWLE1BQUE7SUFDakMsT0FBTyxLQUFLb2tDLHFCQUFBLEtBQTBCLFNBQVMsS0FBS0EscUJBQUEsR0FBd0JuNkMsQ0FBQSxDQUFFOGhCLE1BQUEsQ0FBT3hILElBQUEsQ0FBTWphLENBQUEsSUFBTUEsQ0FBQSxDQUFFeVQsUUFBQSxLQUFhLElBQUUsSUFBSSxLQUFLcW1DLHFCQUFBO0VBQzdIO0VBTUEsSUFBSWhELGVBQUEsRUFBaUI7SUFDbkIsT0FBTyxLQUFLcGhDLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWMsTUFBQSxDQUFPblYsTUFBQSxDQUFRM00sQ0FBQSxJQUFNQSxDQUFBLENBQUU4VCxRQUFRO0VBQ2pFO0VBTUFtYixRQUFBLEVBQVU7SUFDUixLQUFLelksU0FBQSxHQUFZLElBQUlGLENBQUEsQ0FBRSxHQUFHNHJCLEVBQUEsQ0FBR3IxQixHQUFBLENBQUk7TUFDL0J4RCxJQUFBLEVBQU07TUFDTm9MLE9BQUEsRUFBVXpVLENBQUEsSUFBTTtRQUNkLE1BQU07VUFBRWdoQixZQUFBLEVBQWMzZ0IsQ0FBQTtVQUFHa3JCLFFBQUEsRUFBVWxxQjtRQUFFLElBQUksS0FBSzBVLE1BQUE7UUFDOUMsSUFBSTFVLENBQUEsQ0FBRWlxQixTQUFBLEVBQVc7VUFDZnRyQixDQUFBLENBQUV5eUIsY0FBQSxDQUFlLEdBQUcsS0FBSzBvQixlQUFBLENBQWdCO1VBQ3pDO1FBQ0Y7UUFDQTk2QyxDQUFBLENBQUUyaUIsWUFBQSxJQUFnQixLQUFLbzRCLGNBQUEsQ0FBZXA3QyxDQUFDO01BQ3pDO01BQ0FrVCxFQUFBLEVBQUksS0FBSzZDLE1BQUEsQ0FBT2diLEVBQUEsQ0FBR3piLEtBQUEsQ0FBTTBiO0lBQzNCLENBQUM7RUFDSDtFQU9Bd1QsZUFBQSxFQUFpQjtJQUNmbHVCLENBQUEsQ0FBRXJVLEdBQUEsQ0FBSSxFQUFFK1csZUFBQSxDQUFnQixHQUFHLEtBQUtraUMsaUJBQUEsR0FBb0I7RUFDdEQ7RUFNQUcscUJBQXFCcjdDLENBQUEsRUFBRztJQUN0QixNQUFNO01BQUVnaEIsWUFBQSxFQUFjM2dCO0lBQUUsSUFBSSxLQUFLMFYsTUFBQTtJQUNqQyxJQUFJMVUsQ0FBQTtJQUNKaVgsS0FBQSxDQUFNdFksQ0FBQyxJQUFJcUIsQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFMmlCLFlBQUEsR0FBZTNoQixDQUFBLEdBQUloQixDQUFBLENBQUVnaUIsZUFBQSxDQUFnQnJpQixDQUFDLEdBQUdxQixDQUFBLENBQUV5UyxRQUFBLEdBQVcsT0FBSSxLQUFLMHNCLFVBQUEsQ0FBVztFQUM3RjtFQU9BNlYsZUFBZXIyQyxDQUFBLEVBQUdLLENBQUEsR0FBSSxPQUFJO0lBQ3hCLE1BQU07TUFBRTJnQixZQUFBLEVBQWMzZixDQUFBO01BQUc0aEIsS0FBQSxFQUFPbGhCLENBQUE7TUFBR3U1QyxrQkFBQSxFQUFvQnAzQztJQUFFLElBQUksS0FBSzZSLE1BQUE7SUFDbEUsS0FBS3FrQyxlQUFBLEdBQWtCLE9BQUksS0FBS0MsbUJBQUEsR0FBc0IsT0FBSSxLQUFLQyxxQkFBQSxHQUF3QjtJQUN2RixNQUFNajJDLENBQUEsR0FBSXJFLENBQUEsSUFBS0EsQ0FBQSxZQUFhdTdDLGFBQUE7TUFBZWgzQyxDQUFBLEdBQUlGLENBQUEsSUFBS3NFLEVBQUEsQ0FBRzNJLENBQUEsQ0FBRXd5QixPQUFPO0lBQ2hFLElBQUksS0FBS29rQixnQkFBQSxJQUFvQnZ5QyxDQUFBLElBQUtFLENBQUEsSUFBSyxDQUFDK1IsQ0FBQSxDQUFFb0IsaUJBQUEsRUFBbUI7TUFDM0QsTUFBTWhULENBQUEsR0FBSXJELENBQUEsQ0FBRTAxQyxvQkFBQSxDQUFxQjtNQUNqQzExQyxDQUFBLENBQUUyMUMseUJBQUEsQ0FBMEJ0eUMsQ0FBQSxFQUFHLElBQUUsR0FBRzNDLENBQUEsQ0FBRW1oQixVQUFBLENBQVc3aEIsQ0FBQSxDQUFFMmhCLFlBQVksR0FBRzdaLEVBQUEsQ0FBRyxNQUFNO1FBQ3pFLE1BQU12RSxDQUFBLEdBQUk1RSxDQUFBLENBQUUrZ0MsR0FBQTtRQUNaaC9CLENBQUEsQ0FBRXMxQyw0QkFBQSxDQUE2Qnp5QyxDQUFBLENBQUU1QixNQUFBLEdBQVMsSUFBSSxLQUFLNEIsQ0FBQztNQUN0RCxHQUFHLEVBQUUsRUFBRTtJQUNUO0lBQ0EsSUFBSSxLQUFLbVIsTUFBQSxDQUFPa3FCLG1CQUFBLENBQW9CL2QsS0FBQSxDQUFNbGlCLENBQUMsR0FBRyxDQUFDLEtBQUs0MkMsZ0JBQUEsSUFBb0IxeUMsQ0FBQSxDQUFFczNDLGVBQUEsQ0FBZ0IsR0FBRztNQUMzRixLQUFLemxDLE1BQUEsQ0FBT3VsQyxrQkFBQSxDQUFtQmpGLGNBQUEsQ0FBZTtNQUM5QztJQUNGO0lBQ0FoMkMsQ0FBQSxJQUFLLEtBQUttVyxTQUFBLENBQVVvRCxPQUFBLENBQVEsR0FBRyxLQUFLc2hDLGlCQUFBLEdBQW9CO0VBQzFEO0VBT0FyRSxtQkFBbUI3MkMsQ0FBQSxFQUFHO0lBQ3BCQSxDQUFBLENBQUV5eUIsY0FBQSxDQUFlO0lBQ2pCLE1BQU1weUIsQ0FBQSxHQUFJaU0sQ0FBQSxDQUFFSSxJQUFBLENBQUssS0FBSztJQUN0QixLQUFLeXFDLGNBQUEsQ0FBZXIxQyxPQUFBLENBQVNvQyxDQUFBLElBQU07TUFDakMsTUFBTUcsQ0FBQSxHQUFJeW9CLENBQUEsQ0FBRTVvQixDQUFBLENBQUUyUCxNQUFBLENBQU85RSxTQUFBLEVBQVcsS0FBS3dyQyxlQUFlO1FBQUdoMkMsQ0FBQSxHQUFJK0gsQ0FBQSxDQUFFSSxJQUFBLENBQUssR0FBRztNQUNyRW5JLENBQUEsQ0FBRXdLLFNBQUEsR0FBWTFLLENBQUEsRUFBR2hFLENBQUEsQ0FBRUgsV0FBQSxDQUFZcUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsTUFBTWxELENBQUEsR0FBSW9DLEtBQUEsQ0FBTW9MLElBQUEsQ0FBS3hPLENBQUEsQ0FBRXNPLFVBQVUsRUFBRXBCLEdBQUEsQ0FBS3JKLENBQUEsSUFBTUEsQ0FBQSxDQUFFc0ssV0FBVyxFQUFFaEIsSUFBQSxDQUFLO0FBQUE7QUFBQSxDQUVyRTtNQUFHekwsQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFME8sU0FBQTtJQUNOLE9BQU8vTyxDQUFBLENBQUV5N0MsYUFBQSxDQUFjQyxPQUFBLENBQVEsY0FBY3I2QyxDQUFDLEdBQUdyQixDQUFBLENBQUV5N0MsYUFBQSxDQUFjQyxPQUFBLENBQVEsYUFBYTM1QyxDQUFDLEdBQUdnSCxPQUFBLENBQVE2ZSxHQUFBLENBQUksS0FBS3V2QixjQUFBLENBQWU1cEMsR0FBQSxDQUFLckosQ0FBQSxJQUFNQSxDQUFBLENBQUUrUCxJQUFBLENBQUssQ0FBQyxDQUFDLEVBQUUrSyxJQUFBLENBQU05YSxDQUFBLElBQU07TUFDMUosSUFBSTtRQUNGbEUsQ0FBQSxDQUFFeTdDLGFBQUEsQ0FBY0MsT0FBQSxDQUFRLEtBQUszbEMsTUFBQSxDQUFPNk4sS0FBQSxDQUFNKzNCLFNBQUEsRUFBV3Z2QyxJQUFBLENBQUtDLFNBQUEsQ0FBVW5JLENBQUMsQ0FBQztNQUN4RSxRQUFFLENBQ0Y7SUFDRixDQUFDO0VBQ0g7RUFNQTAzQyxtQkFBbUI1N0MsQ0FBQSxFQUFHO0lBQ3BCLE1BQU07UUFBRWdoQixZQUFBLEVBQWMzZ0I7TUFBRSxJQUFJLEtBQUswVixNQUFBO01BQVExVSxDQUFBLEdBQUloQixDQUFBLENBQUVnaUIsZUFBQSxDQUFnQnJpQixDQUFDO0lBQ2hFcUIsQ0FBQSxLQUFNLFVBQVUsS0FBS2svQixXQUFBLENBQVlsL0IsQ0FBQztFQUNwQztFQU1Bay9CLFlBQVl2Z0MsQ0FBQSxFQUFHO0lBQ2IsS0FBS3dXLFNBQUEsQ0FBVXZDLElBQUEsQ0FBSyxHQUFHcUMsQ0FBQSxDQUFFclUsR0FBQSxDQUFJLEVBQUUrVyxlQUFBLENBQWdCLEdBQUdoWixDQUFBLENBQUU4VCxRQUFBLEdBQVcsTUFBSSxLQUFLMHNCLFVBQUEsQ0FBVyxHQUFHLEtBQUt6cUIsTUFBQSxDQUFPd04sYUFBQSxDQUFjRCxLQUFBLENBQU07RUFDeEg7RUFNQThjLGNBQWNwZ0MsQ0FBQSxFQUFHO0lBQ2ZBLENBQUEsQ0FBRThULFFBQUEsR0FBVyxPQUFJLEtBQUswc0IsVUFBQSxDQUFXO0VBQ25DO0VBSUFBLFdBQUEsRUFBYTtJQUNYLEtBQUsyWixxQkFBQSxHQUF3QjtFQUMvQjtFQUtBM21DLFFBQUEsRUFBVTtJQUNSMHVCLEVBQUEsQ0FBR2hzQixNQUFBLENBQU8sS0FBS0gsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHemIsS0FBQSxDQUFNMGIsUUFBQSxFQUFVLE9BQU87RUFDbEQ7RUFPQW9xQixlQUFlcDdDLENBQUEsRUFBRztJQUNoQixJQUFJLEtBQUsrVixNQUFBLENBQU91bEMsa0JBQUEsQ0FBbUJqRixjQUFBLENBQWUsR0FBRy9wQyxDQUFBLENBQUVvQixhQUFBLENBQWMxTixDQUFBLENBQUU0VixNQUFNLEtBQUssQ0FBQyxLQUFLMGtDLHFCQUFBLEVBQXVCO01BQzdHLEtBQUtBLHFCQUFBLEdBQXdCO01BQzdCO0lBQ0Y7SUFDQSxNQUFNajZDLENBQUEsR0FBSSxLQUFLMFYsTUFBQSxDQUFPaUwsWUFBQSxDQUFhOEIsUUFBQSxDQUFTOWlCLENBQUEsQ0FBRTRWLE1BQU07TUFBR3ZVLENBQUEsR0FBSWhCLENBQUEsQ0FBRW9lLE1BQUE7SUFDN0QsSUFBSXBkLENBQUEsQ0FBRTJCLE1BQUEsR0FBUyxLQUFLLENBQUMsS0FBS3MzQyxxQkFBQSxFQUF1QjtNQUMvQyxLQUFLQSxxQkFBQSxHQUF3QjtNQUM3QjtJQUNGO0lBQ0EsSUFBSWo1QyxDQUFBLENBQUUyQixNQUFBLEtBQVcsS0FBSyxDQUFDLEtBQUtvM0MsZUFBQSxFQUFpQjtNQUMzQyxLQUFLQSxlQUFBLEdBQWtCO01BQ3ZCO0lBQ0Y7SUFDQSxLQUFLQSxlQUFBLElBQW1CcDZDLENBQUEsQ0FBRXl5QixjQUFBLENBQWUsR0FBRyxLQUFLMG9CLGVBQUEsQ0FBZ0IsR0FBRyxLQUFLZixlQUFBLEdBQWtCLE9BQUksS0FBS0UscUJBQUEsR0FBd0IsU0FBTSxLQUFLQSxxQkFBQSxLQUEwQnQ2QyxDQUFBLENBQUV5eUIsY0FBQSxDQUFlLEdBQUcsS0FBSzhOLFdBQUEsQ0FBWWxnQyxDQUFDLEdBQUcsS0FBSys1QyxlQUFBLEdBQWtCO0VBQ25PO0VBS0FlLGdCQUFBLEVBQWtCO0lBQ2hCLEtBQUsza0MsU0FBQSxDQUFVdkMsSUFBQSxDQUFLLEdBQUdxQyxDQUFBLENBQUVyVSxHQUFBLENBQUksRUFBRStXLGVBQUEsQ0FBZ0IsR0FBRyxLQUFLa2lDLGlCQUFBLEdBQW9CLE1BQUksS0FBS25sQyxNQUFBLENBQU93TixhQUFBLENBQWNELEtBQUEsQ0FBTTtFQUNqSDtBQUNGO0FBQ0EsSUFBTXU0QixFQUFBLEdBQU4sY0FBaUJ6bUMsQ0FBQSxDQUFFO0VBT2pCLElBQUkrTixVQUFBLEVBQVk7SUFDZCxPQUFPO01BQ0xzQixLQUFBLEVBQU87TUFDUHJCLEdBQUEsRUFBSztNQUNMYSxPQUFBLEVBQVM7SUFDWDtFQUNGO0VBSUEsV0FBV3BOLElBQUEsRUFBTTtJQUNmLE9BQU87TUFDTGlsQyxXQUFBLEVBQWE7SUFDZjtFQUNGO0VBWUE1NEIsV0FBV2xqQixDQUFBLEVBQUdLLENBQUEsR0FBSSxLQUFLOGlCLFNBQUEsQ0FBVWMsT0FBQSxFQUFTNWlCLENBQUEsR0FBSSxHQUFHO0lBQy9DLElBQUl1RCxDQUFBO0lBQ0osTUFBTTtNQUFFb2MsWUFBQSxFQUFjamYsQ0FBQTtNQUFHbytCLGNBQUEsRUFBZ0JqOEI7SUFBRSxJQUFJLEtBQUs2UixNQUFBO0lBQ3BELElBQUk3UixDQUFBLENBQUVteUMsY0FBQSxDQUFlLEdBQUcsQ0FBQ3IyQyxDQUFBLENBQUVnVSxTQUFBLEVBQVc7TUFDcEMsQ0FBQ3BQLENBQUEsR0FBSWxFLE1BQUEsQ0FBT3VXLFlBQUEsQ0FBYSxNQUFNLFFBQVFyUyxDQUFBLENBQUVvVSxlQUFBLENBQWdCLEdBQUc5VSxDQUFBLENBQUVxOEIsV0FBQSxDQUFZdmdDLENBQUMsR0FBRytCLENBQUEsQ0FBRWloQixZQUFBLEdBQWVoakIsQ0FBQTtNQUMvRjtJQUNGO0lBQ0EsSUFBSXFFLENBQUE7SUFDSixRQUFRaEUsQ0FBQTtNQUFBLEtBQ0QsS0FBSzhpQixTQUFBLENBQVVzQixLQUFBO1FBQ2xCcGdCLENBQUEsR0FBSXJFLENBQUEsQ0FBRTRlLFVBQUE7UUFDTjtNQUFBLEtBQ0csS0FBS3VFLFNBQUEsQ0FBVUMsR0FBQTtRQUNsQi9lLENBQUEsR0FBSXJFLENBQUEsQ0FBRTZlLFNBQUE7UUFDTjtNQUFBO1FBRUF4YSxDQUFBLEdBQUlyRSxDQUFBLENBQUUwZSxZQUFBO0lBQUE7SUFFVixJQUFJLENBQUNyYSxDQUFBLEVBQ0g7SUFDRixNQUFNRSxDQUFBLEdBQUkrSCxDQUFBLENBQUV1QixjQUFBLENBQWV4SixDQUFBLEVBQUdoRSxDQUFBLEtBQU0sS0FBSzhpQixTQUFBLENBQVVDLEdBQUc7TUFBRzFlLENBQUEsR0FBSTRILENBQUEsQ0FBRTJDLGdCQUFBLENBQWlCMUssQ0FBQztJQUNqRixRQUFRO01BQUEsS0FDRGxFLENBQUEsS0FBTSxLQUFLOGlCLFNBQUEsQ0FBVXNCLEtBQUE7UUFDeEJwakIsQ0FBQSxHQUFJO1FBQ0o7TUFBQSxLQUNHaEIsQ0FBQSxLQUFNLEtBQUs4aUIsU0FBQSxDQUFVQyxHQUFBO01BQUEsS0FDckIvaEIsQ0FBQSxHQUFJcUQsQ0FBQTtRQUNQckQsQ0FBQSxHQUFJcUQsQ0FBQTtRQUNKO0lBQUE7SUFFSixLQUFLa0gsR0FBQSxDQUFJckgsQ0FBQSxFQUFHbEQsQ0FBQyxHQUFHVSxDQUFBLENBQUVnNEMsMEJBQUEsQ0FBMkIvNUMsQ0FBQSxDQUFFNlQsTUFBTSxHQUFHOVIsQ0FBQSxDQUFFaWhCLFlBQUEsQ0FBYXRFLFlBQUEsR0FBZXJhLENBQUE7RUFDeEY7RUFTQTAzQyxXQUFXLzdDLENBQUEsRUFBR0ssQ0FBQSxHQUFJLEtBQUs4aUIsU0FBQSxDQUFVYyxPQUFBLEVBQVM1aUIsQ0FBQSxHQUFJLEdBQUc7SUFDL0MsTUFBTTtRQUFFMmhCLFlBQUEsRUFBY2poQjtNQUFFLElBQUksS0FBS2dVLE1BQUEsQ0FBT2lMLFlBQUE7TUFBYzljLENBQUEsR0FBSW9JLENBQUEsQ0FBRXVCLGNBQUEsQ0FBZTdOLENBQUM7SUFDNUUsUUFBUUssQ0FBQTtNQUFBLEtBQ0QsS0FBSzhpQixTQUFBLENBQVVzQixLQUFBO1FBQ2xCLEtBQUs3WSxHQUFBLENBQUkxSCxDQUFBLEVBQUcsQ0FBQztRQUNiO01BQUEsS0FDRyxLQUFLaWYsU0FBQSxDQUFVQyxHQUFBO1FBQ2xCLEtBQUt4WCxHQUFBLENBQUkxSCxDQUFBLEVBQUdvSSxDQUFBLENBQUUyQyxnQkFBQSxDQUFpQi9LLENBQUMsQ0FBQztRQUNqQztNQUFBO1FBRUE3QyxDQUFBLElBQUssS0FBS3VLLEdBQUEsQ0FBSTFILENBQUEsRUFBRzdDLENBQUM7SUFBQTtJQUV0QlUsQ0FBQSxDQUFFMmMsWUFBQSxHQUFlMWUsQ0FBQTtFQUNuQjtFQU9BNEwsSUFBSTVMLENBQUEsRUFBR0ssQ0FBQSxHQUFJLEdBQUc7SUFDWixNQUFNO1FBQUV1UCxHQUFBLEVBQUs3TixDQUFBO1FBQUcrTixNQUFBLEVBQVE1TDtNQUFFLElBQUlvUyxDQUFBLENBQUVvQyxTQUFBLENBQVUxWSxDQUFBLEVBQUdLLENBQUM7TUFBRztRQUFFMjlCLFdBQUEsRUFBYTM1QjtNQUFFLElBQUkzRCxNQUFBO0lBQ3RFcUIsQ0FBQSxHQUFJLElBQUlyQixNQUFBLENBQU9zN0MsUUFBQSxDQUFTLEdBQUdqNkMsQ0FBQSxHQUFJLEVBQUUsSUFBSW1DLENBQUEsR0FBSUcsQ0FBQSxJQUFLM0QsTUFBQSxDQUFPczdDLFFBQUEsQ0FBUyxHQUFHOTNDLENBQUEsR0FBSUcsQ0FBQSxHQUFJLEVBQUU7RUFDN0U7RUFLQTQzQyxrQkFBQSxFQUFvQjtJQUNsQixNQUFNajhDLENBQUEsR0FBSSxLQUFLK1YsTUFBQSxDQUFPaUwsWUFBQSxDQUFhb0QsU0FBQTtJQUNuQyxJQUFJcGtCLENBQUEsRUFDRixJQUFJQSxDQUFBLENBQUUrYSxJQUFBLENBQUsyckIsU0FBQSxJQUFhMW1DLENBQUEsQ0FBRTRPLE9BQUEsRUFDeEIsS0FBS3NVLFVBQUEsQ0FBV2xqQixDQUFDLE9BQ2Q7TUFDSCxNQUFNSyxDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdrQixXQUFBLENBQVk7TUFDL0MsS0FBSzloQixVQUFBLENBQVc3aUIsQ0FBQztJQUNuQjtFQUNKO0VBSUF5NUMsaUNBQUEsRUFBbUM7SUFDakMsTUFBTTk1QyxDQUFBLEdBQUlzVyxDQUFBLENBQUVyVSxHQUFBLENBQUk7SUFDaEIsSUFBSWpDLENBQUEsQ0FBRTZYLFVBQUEsRUFBWTtNQUNoQixNQUFNeFgsQ0FBQSxHQUFJTCxDQUFBLENBQUU4WCxVQUFBLENBQVcsQ0FBQztRQUFHelcsQ0FBQSxHQUFJLEtBQUswVSxNQUFBLENBQU9pTCxZQUFBLENBQWFnQyxZQUFBLENBQWF0RSxZQUFBO01BQ3JFLElBQUlyZSxDQUFBLENBQUU2N0MsY0FBQSxDQUFlLEdBQUc3NkMsQ0FBQSxFQUN0QixJQUFJaUwsQ0FBQSxDQUFFb0IsYUFBQSxDQUFjck0sQ0FBQyxHQUFHO1FBQ3RCLE1BQU1VLENBQUEsR0FBSVYsQ0FBQTtVQUFHNkMsQ0FBQSxHQUFJbkUsUUFBQSxDQUFTeUQsc0JBQUEsQ0FBdUI7VUFBR2EsQ0FBQSxHQUFJdEMsQ0FBQSxDQUFFSCxLQUFBLENBQU1vSixTQUFBLENBQVUsR0FBR2pKLENBQUEsQ0FBRTZXLGNBQWM7VUFBR3JVLENBQUEsR0FBSXhDLENBQUEsQ0FBRUgsS0FBQSxDQUFNb0osU0FBQSxDQUFVakosQ0FBQSxDQUFFNlcsY0FBYztRQUN0SSxPQUFPMVUsQ0FBQSxDQUFFc0ssV0FBQSxHQUFjakssQ0FBQSxFQUFHeEMsQ0FBQSxDQUFFSCxLQUFBLEdBQVF5QyxDQUFBLEVBQUdILENBQUE7TUFDekMsT0FBTztRQUNMLE1BQU1uQyxDQUFBLEdBQUkxQixDQUFBLENBQUVrWSxVQUFBLENBQVc7UUFDdkIsT0FBT3hXLENBQUEsQ0FBRWdZLGtCQUFBLENBQW1CMVksQ0FBQyxHQUFHVSxDQUFBLENBQUUrVyxRQUFBLENBQVN6WSxDQUFBLENBQUU4N0MsWUFBQSxFQUFjOTdDLENBQUEsQ0FBRSs3QyxTQUFTLEdBQUdyNkMsQ0FBQSxDQUFFaXhDLGVBQUEsQ0FBZ0I7TUFDN0Y7SUFDSjtFQUNGO0VBUUFrRSxhQUFhbDNDLENBQUEsR0FBSSxPQUFJO0lBQ25CLE1BQU07UUFBRWdoQixZQUFBLEVBQWMzZ0I7TUFBRSxJQUFJLEtBQUswVixNQUFBO01BQVE7UUFBRWlOLFlBQUEsRUFBYzNoQixDQUFBO1FBQUdtakIsU0FBQSxFQUFXemlCO01BQUUsSUFBSTFCLENBQUE7SUFDN0UsSUFBSWdCLENBQUEsS0FBTSxRQUNSLE9BQU87SUFDVCxNQUFNO1FBQUV5ZCxTQUFBLEVBQVc1YSxDQUFBO1FBQUd3YSxZQUFBLEVBQWNyYTtNQUFFLElBQUloRCxDQUFBO01BQUdrRCxDQUFBLEdBQUlGLENBQUEsS0FBTSxTQUFTbWtDLEVBQUEsQ0FBR25rQyxDQUFDLElBQUk7SUFDeEUsSUFBSUssQ0FBQSxHQUFJM0MsQ0FBQTtJQUNSLE1BQU02QyxDQUFBLEdBQUk1RSxDQUFBLElBQUt1RSxDQUFBLElBQUssQ0FBQ2xELENBQUEsQ0FBRTJTLFNBQUE7SUFDdkIsSUFBSTlQLENBQUEsSUFBS1UsQ0FBQSxFQUNQLE9BQU8sS0FBS20zQyxVQUFBLENBQVc3M0MsQ0FBQSxFQUFHLEtBQUtpZixTQUFBLENBQVVzQixLQUFLLEdBQUc7SUFDbkQsSUFBSS9mLENBQUEsS0FBTSxNQUFNO01BQ2QsSUFBSXJELENBQUEsQ0FBRTBaLElBQUEsQ0FBSzJyQixTQUFBLElBQWEsQ0FBQzloQyxDQUFBLEVBQ3ZCLE9BQU87TUFDVEYsQ0FBQSxHQUFJckUsQ0FBQSxDQUFFMmtDLFdBQUEsQ0FBWTtJQUNwQjtJQUNBLE9BQU9wZ0MsQ0FBQSxJQUFLLEtBQUtzZSxVQUFBLENBQVd4ZSxDQUFBLEVBQUcsS0FBS3llLFNBQUEsQ0FBVXNCLEtBQUssR0FBRyxRQUFNO0VBQzlEO0VBUUF3eUIsaUJBQWlCajNDLENBQUEsR0FBSSxPQUFJO0lBQ3ZCLE1BQU07TUFBRWdqQixZQUFBLEVBQWMzaUIsQ0FBQTtNQUFHaWtCLGFBQUEsRUFBZWpqQjtJQUFFLElBQUksS0FBSzBVLE1BQUEsQ0FBT2lMLFlBQUE7SUFDMUQsSUFBSSxDQUFDM2dCLENBQUEsRUFDSCxPQUFPO0lBQ1QsTUFBTTtRQUFFMGUsYUFBQSxFQUFlaGQsQ0FBQTtRQUFHMmMsWUFBQSxFQUFjeGE7TUFBRSxJQUFJN0QsQ0FBQTtNQUFHZ0UsQ0FBQSxHQUFJSCxDQUFBLEtBQU0sU0FBU3FrQyxFQUFBLENBQUdya0MsQ0FBQyxJQUFJO01BQVFLLENBQUEsR0FBSXZFLENBQUEsSUFBS3FFLENBQUEsSUFBSyxDQUFDaEUsQ0FBQSxDQUFFMlQsU0FBQTtJQUNyRyxPQUFPalMsQ0FBQSxJQUFLd0MsQ0FBQSxJQUFLLEtBQUt3M0MsVUFBQSxDQUFXaDZDLENBQUEsRUFBRyxLQUFLb2hCLFNBQUEsQ0FBVUMsR0FBRyxHQUFHLFFBQU0vaEIsQ0FBQSxLQUFNLFFBQVFrRCxDQUFBLElBQUssS0FBSzJlLFVBQUEsQ0FBVzdoQixDQUFBLEVBQUcsS0FBSzhoQixTQUFBLENBQVVDLEdBQUcsR0FBRyxRQUFNO0VBQ2xJO0VBTUFpNUIsYUFBYXI4QyxDQUFBLEVBQUc7SUFDZCxNQUFNSyxDQUFBLEdBQUlOLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE1BQU07SUFDdkNJLENBQUEsQ0FBRXVNLFNBQUEsQ0FBVUMsR0FBQSxDQUFJZ3ZDLEVBQUEsQ0FBR2hsQyxHQUFBLENBQUlpbEMsV0FBVyxHQUFHOTdDLENBQUEsQ0FBRXk0QyxxQkFBQSxDQUFzQixhQUFhcDRDLENBQUM7RUFDN0U7RUFNQWk4QyxhQUFhdDhDLENBQUEsRUFBRztJQUNkLE1BQU1LLENBQUEsR0FBSUwsQ0FBQSxDQUFFbU4sYUFBQSxDQUFjLElBQUkwdUMsRUFBQSxDQUFHaGxDLEdBQUEsQ0FBSWlsQyxXQUFBLEVBQWE7SUFDbEQsSUFBSSxDQUFDejdDLENBQUEsRUFDSDtJQUNGLElBQUlpVyxDQUFBLENBQUUsRUFBRTJELFdBQUEsQ0FBWTVaLENBQUM7SUFDckIsTUFBTTBCLENBQUEsR0FBSWhDLFFBQUEsQ0FBU2tZLFdBQUEsQ0FBWTtJQUMvQmxXLENBQUEsQ0FBRStvQyxVQUFBLENBQVd6cUMsQ0FBQyxHQUFHMEIsQ0FBQSxDQUFFaXhDLGVBQUEsQ0FBZ0I7RUFDckM7RUFNQXFFLDZCQUE2QnIzQyxDQUFBLEVBQUc7SUFDOUIsTUFBTUssQ0FBQSxHQUFJTixRQUFBLENBQVN5RCxzQkFBQSxDQUF1QjtNQUFHbkMsQ0FBQSxHQUFJdEIsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztNQUFHOEIsQ0FBQSxHQUFJdVUsQ0FBQSxDQUFFclUsR0FBQSxDQUFJO01BQUdpQyxDQUFBLEdBQUlvUyxDQUFBLENBQUVxQixLQUFBO0lBQ25HdFcsQ0FBQSxDQUFFME4sU0FBQSxHQUFZL08sQ0FBQSxFQUFHeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLeE4sQ0FBQSxDQUFFc04sVUFBVSxFQUFFN00sT0FBQSxDQUFTOEMsQ0FBQSxJQUFNdkUsQ0FBQSxDQUFFSCxXQUFBLENBQVkwRSxDQUFDLENBQUMsR0FBR3ZFLENBQUEsQ0FBRXNPLFVBQUEsQ0FBVzNMLE1BQUEsS0FBVyxLQUFLM0MsQ0FBQSxDQUFFSCxXQUFBLENBQVksSUFBSXNSLElBQUEsQ0FBSyxDQUFDO0lBQ2pJLE1BQU1uTixDQUFBLEdBQUloRSxDQUFBLENBQUVzekMsU0FBQTtJQUNaenZDLENBQUEsQ0FBRWc0QyxjQUFBLENBQWUsR0FBR2g0QyxDQUFBLENBQUVzVSxVQUFBLENBQVduWSxDQUFDO0lBQ2xDLE1BQU1rRSxDQUFBLEdBQUl4RSxRQUFBLENBQVNrWSxXQUFBLENBQVk7TUFBR3ZULENBQUEsR0FBSUwsQ0FBQSxDQUFFeUosUUFBQSxLQUFhbkssSUFBQSxDQUFLdUwsU0FBQSxHQUFZN0ssQ0FBQSxHQUFJQSxDQUFBLENBQUVSLFVBQUE7SUFDNUVhLENBQUEsS0FBTSxRQUFRQSxDQUFBLENBQUU4SixXQUFBLEtBQWdCLFFBQVFqSyxDQUFBLENBQUV1VSxRQUFBLENBQVNwVSxDQUFBLEVBQUdBLENBQUEsQ0FBRThKLFdBQUEsQ0FBWXhMLE1BQU0sR0FBR2pCLENBQUEsQ0FBRWlYLGVBQUEsQ0FBZ0IsR0FBR2pYLENBQUEsQ0FBRWtYLFFBQUEsQ0FBUzFVLENBQUM7RUFDaEg7QUFDRjtBQUNBLElBQU1nNEMsRUFBQSxHQUFOLGNBQWlCbm5DLENBQUEsQ0FBRTtFQUNqQjNULFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUtnN0MsU0FBQSxHQUFZLE1BQU07TUFDMUMsS0FBS2puQyxTQUFBLENBQVVqQyxHQUFBLENBQUl2VCxRQUFBLEVBQVUsYUFBYSxLQUFLMDhDLFdBQVcsR0FBRyxLQUFLbG5DLFNBQUEsQ0FBVWpDLEdBQUEsQ0FBSXZULFFBQUEsRUFBVSxXQUFXLEtBQUt5OEMsU0FBUztJQUNySCxHQUFHLEtBQUtDLFdBQUEsR0FBZXo4QyxDQUFBLElBQU07TUFDM0IsTUFBTTtRQUFFZ2hCLFlBQUEsRUFBYzNnQixDQUFBO1FBQUc4L0IsY0FBQSxFQUFnQjkrQjtNQUFFLElBQUksS0FBSzBVLE1BQUE7TUFDcEQsSUFBSS9WLENBQUEsQ0FBRTA4QyxhQUFBLEtBQWtCLFFBQVExOEMsQ0FBQSxDQUFFNFYsTUFBQSxLQUFXLE1BQzNDO01BQ0YsTUFBTTdULENBQUEsR0FBSTFCLENBQUEsQ0FBRW8yQyxtQkFBQSxDQUFvQnoyQyxDQUFBLENBQUUwOEMsYUFBYSxLQUFLLEtBQUtDLGlCQUFBO1FBQW1CejRDLENBQUEsR0FBSTdELENBQUEsQ0FBRW8yQyxtQkFBQSxDQUFvQnoyQyxDQUFBLENBQUU0VixNQUFNO01BQzlHLElBQUksRUFBRSxDQUFDN1QsQ0FBQSxJQUFLLENBQUNtQyxDQUFBLEtBQU1BLENBQUEsS0FBTW5DLENBQUEsRUFBRztRQUMxQixJQUFJQSxDQUFBLEtBQU0sS0FBSzY2QyxrQkFBQSxFQUFvQjtVQUNqQ3RtQyxDQUFBLENBQUVyVSxHQUFBLENBQUksRUFBRStXLGVBQUEsQ0FBZ0IsR0FBR2pYLENBQUEsQ0FBRStSLFFBQUEsR0FBVyxNQUFJNVAsQ0FBQSxDQUFFNFAsUUFBQSxHQUFXLE1BQUl6UyxDQUFBLENBQUVtL0IsVUFBQSxDQUFXO1VBQzFFO1FBQ0Y7UUFDQSxJQUFJdDhCLENBQUEsS0FBTSxLQUFLMDRDLGtCQUFBLEVBQW9CO1VBQ2pDNzZDLENBQUEsQ0FBRStSLFFBQUEsR0FBVyxPQUFJNVAsQ0FBQSxDQUFFNFAsUUFBQSxHQUFXLE9BQUl6UyxDQUFBLENBQUVtL0IsVUFBQSxDQUFXO1VBQy9DO1FBQ0Y7UUFDQSxLQUFLenFCLE1BQUEsQ0FBT3dOLGFBQUEsQ0FBY0QsS0FBQSxDQUFNLEdBQUcsS0FBS3U1Qix5QkFBQSxDQUEwQjk2QyxDQUFBLEVBQUdtQyxDQUFDLEdBQUcsS0FBS3k0QyxpQkFBQSxHQUFvQno0QyxDQUFBO01BQ3BHO0lBQ0Y7RUFDRjtFQU1BLE1BQU0rcUIsUUFBQSxFQUFVO0lBQ2QsS0FBSzFaLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBR25ULFFBQUEsRUFBVSxhQUFjQyxDQUFBLElBQU07TUFDOUMsS0FBSzg4Qyx5QkFBQSxDQUEwQjk4QyxDQUFDO0lBQ2xDLENBQUM7RUFDSDtFQU1BKzhDLGVBQWUvOEMsQ0FBQSxFQUFHO0lBQ2hCLElBQUlBLENBQUEsQ0FBRWl1QixNQUFBLEtBQVc3bUIsRUFBQSxDQUFHUCxJQUFBLEVBQ2xCO0lBQ0YsTUFBTTtNQUFFbWEsWUFBQSxFQUFjM2dCO0lBQUUsSUFBSSxLQUFLMFYsTUFBQTtJQUNqQyxLQUFLNm1DLGtCQUFBLEdBQXFCdjhDLENBQUEsQ0FBRXlpQixRQUFBLENBQVM5aUIsQ0FBQSxDQUFFNFYsTUFBTSxHQUFHLEtBQUsrbUMsaUJBQUEsR0FBb0IsS0FBS0Msa0JBQUEsRUFBb0IsS0FBS3JuQyxTQUFBLENBQVVyQyxFQUFBLENBQUduVCxRQUFBLEVBQVUsYUFBYSxLQUFLMDhDLFdBQVcsR0FBRyxLQUFLbG5DLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBR25ULFFBQUEsRUFBVSxXQUFXLEtBQUt5OEMsU0FBUztFQUNyTjtFQUtBLElBQUl0Yyw2QkFBQSxFQUErQjtJQUNqQyxPQUFPLENBQUMsQ0FBQyxLQUFLMGMsa0JBQUEsSUFBc0IsQ0FBQyxDQUFDLEtBQUtELGlCQUFBLElBQXFCLEtBQUtDLGtCQUFBLEtBQXVCLEtBQUtELGlCQUFBO0VBQ25HO0VBT0FoRix5QkFBeUIzM0MsQ0FBQSxHQUFJLE1BQUk7SUFDL0IsTUFBTTtNQUFFZ2hCLFlBQUEsRUFBYzNnQixDQUFBO01BQUc4L0IsY0FBQSxFQUFnQjkrQjtJQUFFLElBQUksS0FBSzBVLE1BQUE7SUFDcEQsS0FBSzRtQyxpQkFBQSxLQUFzQixLQUFLQSxpQkFBQSxHQUFvQixLQUFLQyxrQkFBQSxHQUFxQnY4QyxDQUFBLENBQUUyaUIsWUFBQSxHQUFlLEtBQUs0NUIsa0JBQUEsS0FBdUIsS0FBS0QsaUJBQUEsS0FBc0IsS0FBS0Msa0JBQUEsQ0FBbUI5b0MsUUFBQSxHQUFXLE1BQUl6UyxDQUFBLENBQUVtL0IsVUFBQSxDQUFXLEdBQUdscUIsQ0FBQSxDQUFFclUsR0FBQSxDQUFJLEVBQUUrVyxlQUFBLENBQWdCO0lBQ3JPLE1BQU1qWCxDQUFBLEdBQUkxQixDQUFBLENBQUV5aEIsTUFBQSxDQUFPdlgsT0FBQSxDQUFRLEtBQUtveUMsaUJBQWlCLEtBQUszOEMsQ0FBQSxHQUFJLElBQUk7TUFBS2tFLENBQUEsR0FBSTdELENBQUEsQ0FBRXloQixNQUFBLENBQU8vZixDQUFBO0lBQ2hGbUMsQ0FBQSxLQUFNLEtBQUt5NEMsaUJBQUEsQ0FBa0I3b0MsUUFBQSxLQUFhNVAsQ0FBQSxDQUFFNFAsUUFBQSxJQUFZNVAsQ0FBQSxDQUFFNFAsUUFBQSxHQUFXLE1BQUl6UyxDQUFBLENBQUVtL0IsVUFBQSxDQUFXLE1BQU0sS0FBS21jLGlCQUFBLENBQWtCN29DLFFBQUEsR0FBVyxPQUFJelMsQ0FBQSxDQUFFbS9CLFVBQUEsQ0FBVyxJQUFJLEtBQUttYyxpQkFBQSxHQUFvQno0QyxDQUFBLEVBQUcsS0FBSzZSLE1BQUEsQ0FBT3dOLGFBQUEsQ0FBY0QsS0FBQSxDQUFNLEdBQUdwZixDQUFBLENBQUUyUCxNQUFBLENBQU9oUCxjQUFBLENBQWU7TUFDeE8rb0IsS0FBQSxFQUFPO0lBQ1QsQ0FBQztFQUNIO0VBTUExTCxNQUFNbGlCLENBQUEsRUFBRztJQUNQLE1BQU07UUFBRWdoQixZQUFBLEVBQWMzZ0IsQ0FBQTtRQUFHOC9CLGNBQUEsRUFBZ0I5K0IsQ0FBQTtRQUFHNGhCLEtBQUEsRUFBT2xoQjtNQUFFLElBQUksS0FBS2dVLE1BQUE7TUFBUTdSLENBQUEsR0FBSTdELENBQUEsQ0FBRXloQixNQUFBLENBQU92WCxPQUFBLENBQVEsS0FBS3F5QyxrQkFBa0I7TUFBR3Y0QyxDQUFBLEdBQUloRSxDQUFBLENBQUV5aEIsTUFBQSxDQUFPdlgsT0FBQSxDQUFRLEtBQUtveUMsaUJBQWlCO0lBQ2hLLElBQUl0N0MsQ0FBQSxDQUFFdTFDLGdCQUFBLElBQW9CMXlDLENBQUEsR0FBSSxNQUFNRyxDQUFBLEdBQUksTUFBTXJFLENBQUEsSUFBS0EsQ0FBQSxZQUFhdTdDLGFBQUEsRUFDOUQsUUFBUXY3QyxDQUFBLENBQUV3eUIsT0FBQTtNQUFBLEtBQ0hwc0IsQ0FBQSxDQUFFVyxJQUFBO01BQUEsS0FDRlgsQ0FBQSxDQUFFWSxLQUFBO1FBQ0xqRixDQUFBLENBQUVtaEIsVUFBQSxDQUFXN2lCLENBQUEsQ0FBRXloQixNQUFBLENBQU8xYyxJQUFBLENBQUtDLEdBQUEsQ0FBSW5CLENBQUEsRUFBR0csQ0FBQyxJQUFJdEMsQ0FBQSxDQUFFb2hCLFNBQUEsQ0FBVUMsR0FBRztRQUN0RDtNQUFBLEtBQ0doZCxDQUFBLENBQUVVLEVBQUE7TUFBQSxLQUNGVixDQUFBLENBQUVTLElBQUE7UUFDTDlFLENBQUEsQ0FBRW1oQixVQUFBLENBQVc3aUIsQ0FBQSxDQUFFeWhCLE1BQUEsQ0FBTzFjLElBQUEsQ0FBSzI0QixHQUFBLENBQUk3NUIsQ0FBQSxFQUFHRyxDQUFDLElBQUl0QyxDQUFBLENBQUVvaEIsU0FBQSxDQUFVc0IsS0FBSztRQUN4RDtNQUFBO1FBRUExaUIsQ0FBQSxDQUFFbWhCLFVBQUEsQ0FBVzdpQixDQUFBLENBQUV5aEIsTUFBQSxDQUFPMWMsSUFBQSxDQUFLQyxHQUFBLENBQUluQixDQUFBLEVBQUdHLENBQUMsSUFBSXRDLENBQUEsQ0FBRW9oQixTQUFBLENBQVVDLEdBQUc7SUFBQTtJQUU1RCxLQUFLdzVCLGtCQUFBLEdBQXFCLEtBQUtELGlCQUFBLEdBQW9CO0VBQ3JEO0VBTUFHLDBCQUEwQjk4QyxDQUFBLEVBQUc7SUFDM0IsTUFBTTtNQUFFK3dCLEVBQUEsRUFBSTF3QjtJQUFFLElBQUksS0FBSzBWLE1BQUE7SUFDdkJPLENBQUEsQ0FBRWMsV0FBQSxJQUFlLEtBQUtyQixNQUFBLENBQU9vcUIsY0FBQSxDQUFla1csY0FBQSxDQUFlcjJDLENBQUMsR0FBR0ssQ0FBQSxDQUFFaVYsS0FBQSxDQUFNMGIsUUFBQSxDQUFTNXRCLFFBQUEsQ0FBU3BELENBQUEsQ0FBRTRWLE1BQU0sSUFBSSxLQUFLbW5DLGNBQUEsQ0FBZS84QyxDQUFDLElBQUksS0FBSytWLE1BQUEsQ0FBT29xQixjQUFBLENBQWVrVyxjQUFBLENBQWVyMkMsQ0FBQztFQUMzSztFQU9BNjhDLDBCQUEwQjc4QyxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUM5QixNQUFNO1FBQUUyZ0IsWUFBQSxFQUFjM2YsQ0FBQTtRQUFHOCtCLGNBQUEsRUFBZ0JwK0I7TUFBRSxJQUFJLEtBQUtnVSxNQUFBO01BQVE3UixDQUFBLEdBQUk3QyxDQUFBLENBQUV5Z0IsTUFBQSxDQUFPdlgsT0FBQSxDQUFRdkssQ0FBQztNQUFHcUUsQ0FBQSxHQUFJaEQsQ0FBQSxDQUFFeWdCLE1BQUEsQ0FBT3ZYLE9BQUEsQ0FBUWxLLENBQUM7TUFBR2tFLENBQUEsR0FBSXZFLENBQUEsQ0FBRThULFFBQUEsS0FBYXpULENBQUEsQ0FBRXlULFFBQUE7SUFDbkksU0FBU3BQLENBQUEsR0FBSVUsSUFBQSxDQUFLMjRCLEdBQUEsQ0FBSTc1QixDQUFBLEVBQUdHLENBQUMsR0FBR0ssQ0FBQSxJQUFLVSxJQUFBLENBQUtDLEdBQUEsQ0FBSW5CLENBQUEsRUFBR0csQ0FBQyxHQUFHSyxDQUFBLElBQUs7TUFDckQsTUFBTUUsQ0FBQSxHQUFJdkQsQ0FBQSxDQUFFeWdCLE1BQUEsQ0FBT3BkLENBQUE7TUFDbkJFLENBQUEsS0FBTSxLQUFLZzRDLGtCQUFBLElBQXNCaDRDLENBQUEsTUFBT0wsQ0FBQSxHQUFJdkUsQ0FBQSxHQUFJSyxDQUFBLE1BQU9nQixDQUFBLENBQUV5Z0IsTUFBQSxDQUFPcGQsQ0FBQSxFQUFHb1AsUUFBQSxHQUFXLENBQUN6UyxDQUFBLENBQUV5Z0IsTUFBQSxDQUFPcGQsQ0FBQSxFQUFHb1AsUUFBQSxFQUFVL1IsQ0FBQSxDQUFFeStCLFVBQUEsQ0FBVztJQUNwSDtFQUNGO0FBQ0Y7QUFDQSxJQUFNd2MsRUFBQSxHQUFOLGNBQWlCNW5DLENBQUEsQ0FBRTtFQUNqQjNULFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUt5N0MsaUJBQUEsR0FBb0I7RUFDaEQ7RUFZQXpZLGVBQWV4a0MsQ0FBQSxFQUFHO0lBQ2hCQSxDQUFBLEdBQUksS0FBS3lrQyxxQkFBQSxDQUFzQixJQUFJLEtBQUtFLG9CQUFBLENBQXFCO0VBQy9EO0VBSUFBLHFCQUFBLEVBQXVCO0lBQ3JCLE1BQU07TUFBRTVULEVBQUEsRUFBSS93QjtJQUFFLElBQUksS0FBSytWLE1BQUE7SUFDdkIsS0FBS1Asd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUdsVCxDQUFBLENBQUVzVixLQUFBLENBQU16QixNQUFBLEVBQVEsUUFBUSxNQUFPeFQsQ0FBQSxJQUFNO01BQ3BFLE1BQU0sS0FBSzY4QyxXQUFBLENBQVk3OEMsQ0FBQztJQUMxQixHQUFHLElBQUUsR0FBRyxLQUFLbVYsd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUdsVCxDQUFBLENBQUVzVixLQUFBLENBQU16QixNQUFBLEVBQVEsYUFBYSxNQUFNO01BQzFFLEtBQUtzcEMsZ0JBQUEsQ0FBaUI7SUFDeEIsQ0FBQyxHQUFHLEtBQUszbkMsd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUdsVCxDQUFBLENBQUVzVixLQUFBLENBQU16QixNQUFBLEVBQVEsWUFBYXhULENBQUEsSUFBTTtNQUN0RSxLQUFLKzhDLGVBQUEsQ0FBZ0IvOEMsQ0FBQztJQUN4QixHQUFHLElBQUU7RUFDUDtFQUlBb2tDLHNCQUFBLEVBQXdCO0lBQ3RCLEtBQUtqdkIsd0JBQUEsQ0FBeUJFLFFBQUEsQ0FBUztFQUN6QztFQU1BLE1BQU13bkMsWUFBWWw5QyxDQUFBLEVBQUc7SUFDbkIsTUFBTTtNQUNKZ2hCLFlBQUEsRUFBYzNnQixDQUFBO01BQ2R1akIsS0FBQSxFQUFPdmlCLENBQUE7TUFDUDRoQixLQUFBLEVBQU9saEI7SUFDVCxJQUFJLEtBQUtnVSxNQUFBO0lBQ1QvVixDQUFBLENBQUV5eUIsY0FBQSxDQUFlLEdBQUdweUIsQ0FBQSxDQUFFeWhCLE1BQUEsQ0FBT2hnQixPQUFBLENBQVN1QyxDQUFBLElBQU07TUFDMUNBLENBQUEsQ0FBRW1hLFVBQUEsR0FBYTtJQUNqQixDQUFDLEdBQUdsSSxDQUFBLENBQUVlLFVBQUEsSUFBYyxDQUFDZixDQUFBLENBQUVjLFdBQUEsSUFBZSxLQUFLNmxDLGlCQUFBLElBQXFCbDlDLFFBQUEsQ0FBUzJaLFdBQUEsQ0FBWSxRQUFRLEdBQUcsS0FBS3VqQyxpQkFBQSxHQUFvQjtJQUN6SCxNQUFNLzRDLENBQUEsR0FBSTdELENBQUEsQ0FBRTA1QywwQkFBQSxDQUEyQi81QyxDQUFBLENBQUU0VixNQUFNO0lBQy9DLElBQUkxUixDQUFBLEVBQ0YsS0FBSzZSLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUMsVUFBQSxDQUFXaGYsQ0FBQSxFQUFHbkMsQ0FBQSxDQUFFb2hCLFNBQUEsQ0FBVUMsR0FBRyxPQUM1QztNQUNILE1BQU0vZSxDQUFBLEdBQUloRSxDQUFBLENBQUUwNUMsMEJBQUEsQ0FBMkIxNUMsQ0FBQSxDQUFFK2pCLFNBQUEsQ0FBVXZRLE1BQU07TUFDekQsS0FBS2tDLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUMsVUFBQSxDQUFXN2UsQ0FBQSxFQUFHdEMsQ0FBQSxDQUFFb2hCLFNBQUEsQ0FBVUMsR0FBRztJQUNqRDtJQUNBLE1BQU0vaEIsQ0FBQSxDQUFFZzhDLG1CQUFBLENBQW9CcjlDLENBQUEsQ0FBRXM5QyxZQUFBLEVBQWMsSUFBRTtFQUNoRDtFQUlBSCxpQkFBQSxFQUFtQjtJQUNqQjdtQyxDQUFBLENBQUVlLFVBQUEsSUFBYyxDQUFDZixDQUFBLENBQUVjLFdBQUEsS0FBZ0IsS0FBSzZsQyxpQkFBQSxHQUFvQixPQUFLLEtBQUtsbkMsTUFBQSxDQUFPd04sYUFBQSxDQUFjRCxLQUFBLENBQU07RUFDbkc7RUFJQTg1QixnQkFBZ0JwOUMsQ0FBQSxFQUFHO0lBQ2pCQSxDQUFBLENBQUV5eUIsY0FBQSxDQUFlO0VBQ25CO0FBQ0Y7QUFDQSxJQUFNOHFCLEVBQUEsR0FBSztFQUFLQyxFQUFBLEdBQUs7QUFDckIsSUFBTUMsRUFBQSxHQUFOLGNBQWlCcm9DLENBQUEsQ0FBRTtFQVFqQjNULFlBQVk7SUFBRW1TLE1BQUEsRUFBUTVULENBQUE7SUFBR3FWLGdCQUFBLEVBQWtCaFY7RUFBRSxHQUFHO0lBQzlDLE1BQU07TUFDSnVULE1BQUEsRUFBUTVULENBQUE7TUFDUnFWLGdCQUFBLEVBQWtCaFY7SUFDcEIsQ0FBQyxHQUFHLEtBQUswMkIsUUFBQSxHQUFXLE9BQUksS0FBSzJtQixlQUFBLEdBQWtCLE1BQU0sS0FBS0MscUJBQUEsR0FBd0MsbUJBQUloaEMsR0FBQSxDQUFJLEdBQUcsS0FBS2loQyxTQUFBLEdBQVlKLEVBQUEsRUFBSSxLQUFLSyxnQkFBQSxHQUFtQixJQUFJQyxnQkFBQSxDQUFrQno4QyxDQUFBLElBQU07TUFDcEwsS0FBSzA4QyxlQUFBLENBQWdCMThDLENBQUM7SUFDeEIsQ0FBQyxHQUFHLEtBQUtnVSxnQkFBQSxDQUFpQm5DLEVBQUEsQ0FBR3NILEVBQUEsRUFBS25aLENBQUEsSUFBTTtNQUN0QyxLQUFLMjhDLHNCQUFBLENBQXVCMzhDLENBQUEsQ0FBRTQ0QyxLQUFLO0lBQ3JDLENBQUMsR0FBRyxLQUFLNWtDLGdCQUFBLENBQWlCbkMsRUFBQSxDQUFHdUgsRUFBQSxFQUFJLE1BQU07TUFDckMsS0FBS2dKLE9BQUEsQ0FBUTtJQUNmLENBQUMsR0FBRyxLQUFLcE8sZ0JBQUEsQ0FBaUJuQyxFQUFBLENBQUd3SCxFQUFBLEVBQUksTUFBTTtNQUNyQyxLQUFLaUosTUFBQSxDQUFPO0lBQ2QsQ0FBQztFQUNIO0VBSUFBLE9BQUEsRUFBUztJQUNQLEtBQUtrNkIsZ0JBQUEsQ0FBaUJJLE9BQUEsQ0FDcEIsS0FBS2xvQyxNQUFBLENBQU9nYixFQUFBLENBQUd6YixLQUFBLENBQU0wYixRQUFBLEVBQ3JCO01BQ0VrdEIsU0FBQSxFQUFXO01BQ1hDLE9BQUEsRUFBUztNQUNUQyxhQUFBLEVBQWU7TUFDZmp5QixVQUFBLEVBQVk7SUFDZCxDQUNGLEdBQUcsS0FBSzRLLFFBQUEsR0FBVztFQUNyQjtFQUlBdFQsUUFBQSxFQUFVO0lBQ1IsS0FBS282QixnQkFBQSxDQUFpQlEsVUFBQSxDQUFXLEdBQUcsS0FBS3RuQixRQUFBLEdBQVc7RUFDdEQ7RUFNQWluQix1QkFBdUJoK0MsQ0FBQSxFQUFHO0lBQ3hCLEtBQUsrMkIsUUFBQSxJQUFZLENBQUMzdUIsQ0FBQSxDQUFFLEtBQUt3TCxNQUFBLENBQU8wcUMsUUFBUSxNQUFNLEtBQUtYLHFCQUFBLENBQXNCL3hDLEdBQUEsQ0FBSSxTQUFTNUwsQ0FBQSxDQUFFMjRDLE1BQUEsQ0FBTy9pQyxNQUFBLENBQU9qQyxFQUFBLFVBQVkzVCxDQUFBLENBQUVzTyxJQUFBLElBQVF0TyxDQUFDLEdBQUcsS0FBSzA5QyxlQUFBLElBQW1CbjRDLFlBQUEsQ0FBYSxLQUFLbTRDLGVBQWUsR0FBRyxLQUFLQSxlQUFBLEdBQWtCejRDLFVBQUEsQ0FBVyxNQUFNO01BQ2xPLElBQUk1RSxDQUFBO01BQ0osS0FBS3M5QyxxQkFBQSxDQUFzQmxnQixJQUFBLEtBQVMsSUFBSXA5QixDQUFBLEdBQUksS0FBS3M5QyxxQkFBQSxDQUFzQjU5QixNQUFBLENBQU8sRUFBRTZSLElBQUEsQ0FBSyxFQUFFaHdCLEtBQUEsR0FBUXZCLENBQUEsR0FBSW9ELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLOHVDLHFCQUFBLENBQXNCNTlCLE1BQUEsQ0FBTyxDQUFDLEdBQUcsS0FBS25NLE1BQUEsQ0FBTzBxQyxRQUFBLElBQVksS0FBSzFxQyxNQUFBLENBQU8wcUMsUUFBQSxDQUFTLEtBQUt2b0MsTUFBQSxDQUFPd0wsR0FBQSxDQUFJVSxPQUFBLEVBQVM1aEIsQ0FBQyxHQUFHLEtBQUtzOUMscUJBQUEsQ0FBc0J6N0IsS0FBQSxDQUFNO0lBQ2pRLEdBQUcsS0FBSzA3QixTQUFTO0VBQ25CO0VBTUFHLGdCQUFnQi85QyxDQUFBLEVBQUc7SUFDakIsS0FBS3FWLGdCQUFBLENBQWlCaEMsSUFBQSxDQUFLa0gsRUFBQSxFQUFJO01BQzdCcUcsU0FBQSxFQUFXNWdCO0lBQ2IsQ0FBQztFQUNIO0FBQ0Y7QUFDQSxJQUFNdStDLEVBQUEsR0FBSyxNQUFNQyxFQUFBLFNBQVdwcEMsQ0FBQSxDQUFFO0VBQzVCM1QsWUFBQSxFQUFjO0lBQ1osTUFBTSxHQUFHRCxTQUFTLEdBQUcsS0FBS202QyxTQUFBLEdBQVksMkJBQTJCLEtBQUs4QyxTQUFBLEdBQVksQ0FBQyxHQUFHLEtBQUtDLFVBQUEsR0FBYSxDQUFDLEdBQUcsS0FBS0MsYUFBQSxHQUFnQixFQUFDLEVBQUcsS0FBS0MsVUFBQSxHQUFhLENBQUMsR0FBRyxLQUFLQyxhQUFBLEdBQWdCLEVBQUMsRUFBRyxLQUFLQyxXQUFBLEdBQWU5K0MsQ0FBQSxJQUFNO01BQzVNLElBQUk7UUFDRixNQUFNSyxDQUFBLEdBQUlMLENBQUEsQ0FBRStkLE1BQUEsQ0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUU7UUFDN0IsSUFBSS9kLENBQUEsQ0FBRSsrQyxXQUFBLEtBQWdCLE9BQUk7VUFDeEIsS0FBS0YsYUFBQSxDQUFjbDNDLElBQUEsQ0FBSzNILENBQUEsQ0FBRXFKLElBQUk7VUFDOUI7UUFDRjtRQUNBLElBQUksQ0FBQ2pCLENBQUEsQ0FBRS9ILENBQUEsQ0FBRTIrQyxPQUFPLEdBQ2Q7UUFDRixLQUFLQyxhQUFBLENBQWNqL0MsQ0FBQyxHQUFHLEtBQUtrL0MsY0FBQSxDQUFlbC9DLENBQUMsR0FBRyxLQUFLbS9DLGlCQUFBLENBQWtCbi9DLENBQUM7TUFDekUsU0FBU0ssQ0FBQSxFQUFQO1FBQ0F5SCxDQUFBLENBQ0UsMEJBQXVCOUgsQ0FBQSxDQUFFcUosSUFBQSxxREFDekIsUUFDQWhKLENBQ0Y7TUFDRjtJQUNGLEdBQUcsS0FBSysrQyxnQkFBQSxHQUFtQixNQUFPcC9DLENBQUEsSUFBTTtNQUN0QyxNQUFNO1VBQUVnaEIsWUFBQSxFQUFjM2dCLENBQUE7VUFBR2dqQixPQUFBLEVBQVNoaUI7UUFBRSxJQUFJLEtBQUswVSxNQUFBO1FBQVFoVSxDQUFBLEdBQUkxQixDQUFBLENBQUUwNUMsMEJBQUEsQ0FBMkIvNUMsQ0FBQSxDQUFFNFYsTUFBTTtNQUM5RixDQUFDN1QsQ0FBQSxJQUFLLEtBQUtzOUMsaUJBQUEsQ0FBa0JyL0MsQ0FBQSxDQUFFNFYsTUFBTSxLQUFLLENBQUM1VixDQUFBLENBQUV5N0MsYUFBQSxDQUFjNkQsS0FBQSxDQUFNNzNDLFFBQUEsQ0FBUyxPQUFPLEtBQUsxRixDQUFBLElBQUssS0FBSzg4QyxhQUFBLENBQWNwM0MsUUFBQSxDQUFTMUYsQ0FBQSxDQUFFc0gsSUFBSSxNQUFNckosQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZSxHQUFHLEtBQUs0cUIsbUJBQUEsQ0FBb0JyOUMsQ0FBQSxDQUFFeTdDLGFBQWEsR0FBR3A2QyxDQUFBLENBQUVpaUIsS0FBQSxDQUFNO0lBQzVNO0VBQ0Y7RUFJQSxNQUFNMkwsUUFBQSxFQUFVO0lBQ2QsS0FBS3N3QixZQUFBLENBQWE7RUFDcEI7RUFNQS9hLGVBQWV4a0MsQ0FBQSxFQUFHO0lBQ2hCQSxDQUFBLEdBQUksS0FBS3cvQyxhQUFBLENBQWMsSUFBSSxLQUFLQyxXQUFBLENBQVk7RUFDOUM7RUFPQSxNQUFNcEMsb0JBQW9CcjlDLENBQUEsRUFBR0ssQ0FBQSxHQUFJLE9BQUk7SUFDbkMsTUFBTTtRQUFFK2dCLEtBQUEsRUFBTy9mO01BQUUsSUFBSSxLQUFLMFUsTUFBQTtNQUFRaFUsQ0FBQSxHQUFJL0IsQ0FBQSxDQUFFcy9DLEtBQUE7SUFDeEMsS0FBS3Y5QyxDQUFBLENBQUUwRixRQUFBLEdBQVcxRixDQUFBLENBQUUwRixRQUFBLENBQVMsT0FBTyxJQUFJMUYsQ0FBQSxDQUFFcUIsUUFBQSxDQUFTLE9BQU8sTUFBTSxDQUFDc0YsQ0FBQSxDQUFFLEtBQUtrMkMsVUFBVSxHQUFHO01BQ25GLE1BQU0sS0FBS2MsWUFBQSxDQUFhMS9DLENBQUEsQ0FBRTIvQyxLQUFLO01BQy9CO0lBQ0Y7SUFDQSxNQUFNdDdDLENBQUEsR0FBSXJFLENBQUEsQ0FBRTQvQyxPQUFBLENBQVEsS0FBS2pFLFNBQVM7TUFBR3AzQyxDQUFBLEdBQUl2RSxDQUFBLENBQUU0L0MsT0FBQSxDQUFRLFlBQVk7SUFDL0QsSUFBSWw3QyxDQUFBLEdBQUkxRSxDQUFBLENBQUU0L0MsT0FBQSxDQUFRLFdBQVc7SUFDN0IsSUFBSXY3QyxDQUFBLEVBQ0YsSUFBSTtNQUNGLEtBQUt3N0Msa0JBQUEsQ0FBbUJ6ekMsSUFBQSxDQUFLMHpDLEtBQUEsQ0FBTXo3QyxDQUFDLENBQUM7TUFDckM7SUFDRixRQUFFLENBQ0Y7SUFDRmhFLENBQUEsSUFBS2tFLENBQUEsQ0FBRWttQixJQUFBLENBQUssS0FBSy9sQixDQUFBLENBQUUrbEIsSUFBQSxDQUFLLE1BQU0vbEIsQ0FBQSxHQUFJLFNBQVNBLENBQUEsQ0FBRStsQixJQUFBLENBQUssSUFBSS9sQixDQUFBLEdBQUlILENBQUEsSUFBSztJQUMvRCxNQUFNSyxDQUFBLEdBQUk1RCxNQUFBLENBQU9hLElBQUEsQ0FBSyxLQUFLNDhDLFNBQVMsRUFBRTc0QyxNQUFBLENBQU8sQ0FBQzBYLENBQUEsRUFBR0MsQ0FBQSxNQUFPRCxDQUFBLENBQUVDLENBQUEsQ0FBRXBWLFdBQUEsQ0FBWSxLQUFLLEtBQUtzMkMsU0FBQSxDQUFVbGhDLENBQUEsRUFBR3dpQyxrQkFBQSxJQUFzQixDQUFDLEdBQUd6aUMsQ0FBQSxHQUFJLENBQUMsQ0FBQztNQUFHelQsQ0FBQSxHQUFJN0ksTUFBQSxDQUFPb0IsTUFBQSxDQUFPLENBQUMsR0FBR3dDLENBQUEsRUFBR3ZELENBQUEsQ0FBRTIrQywrQkFBQSxDQUFnQyxHQUFHO1FBQUU1UCxFQUFBLEVBQUksQ0FBQztNQUFFLENBQUM7TUFBR3p1QixDQUFBLEdBQUltTCxDQUFBLENBQUVwb0IsQ0FBQSxFQUFHbUYsQ0FBQztJQUN2TixDQUFDOFgsQ0FBQSxDQUFFOEksSUFBQSxDQUFLLEtBQUs5SSxDQUFBLENBQUU4SSxJQUFBLENBQUssTUFBTWxtQixDQUFBLElBQUssQ0FBQytILENBQUEsQ0FBRXdDLFlBQUEsQ0FBYTZTLENBQUMsSUFBSSxNQUFNLEtBQUtrQyxXQUFBLENBQVl0ZixDQUFDLElBQUksTUFBTSxLQUFLc2YsV0FBQSxDQUFZbEMsQ0FBQSxFQUFHLElBQUU7RUFDOUc7RUFPQSxNQUFNa0MsWUFBWTdqQixDQUFBLEVBQUdLLENBQUEsR0FBSSxPQUFJO0lBQzNCLE1BQU07UUFBRTRpQixLQUFBLEVBQU81aEIsQ0FBQTtRQUFHMmYsWUFBQSxFQUFjamY7TUFBRSxJQUFJLEtBQUtnVSxNQUFBO01BQVE3UixDQUFBLEdBQUk3RCxDQUFBLEdBQUksS0FBSzQvQyxXQUFBLENBQVlqZ0QsQ0FBQyxJQUFJLEtBQUtrZ0QsWUFBQSxDQUFhbGdELENBQUM7SUFDcEcsSUFBSSxDQUFDa0UsQ0FBQSxDQUFFbEIsTUFBQSxFQUNMO0lBQ0YsSUFBSWtCLENBQUEsQ0FBRWxCLE1BQUEsS0FBVyxHQUFHO01BQ2xCa0IsQ0FBQSxDQUFFLEdBQUc0aUMsT0FBQSxHQUFVLEtBQUtxWixrQkFBQSxDQUFtQmo4QyxDQUFBLENBQUVxRixHQUFBLENBQUksQ0FBQyxJQUFJLEtBQUs2MkMsa0JBQUEsQ0FBbUJsOEMsQ0FBQSxDQUFFcUYsR0FBQSxDQUFJLENBQUM7TUFDakY7SUFDRjtJQUNBLE1BQU1oRixDQUFBLEdBQUl4QyxDQUFBLENBQUVpaEIsWUFBQSxJQUFnQmpoQixDQUFBLENBQUVpaEIsWUFBQSxDQUFhakksSUFBQSxDQUFLMnJCLFNBQUEsSUFBYTNrQyxDQUFBLENBQUVpaEIsWUFBQSxDQUFhcFUsT0FBQTtJQUM1RTFLLENBQUEsQ0FBRXFKLEdBQUEsQ0FDQSxPQUFPN0ksQ0FBQSxFQUFHRSxDQUFBLEtBQU0sS0FBS3k3QyxXQUFBLENBQVkzN0MsQ0FBQSxFQUFHRSxDQUFBLEtBQU0sS0FBS0wsQ0FBQyxDQUNsRCxHQUFHeEMsQ0FBQSxDQUFFaWhCLFlBQUEsSUFBZ0IzaEIsQ0FBQSxDQUFFNmhCLFVBQUEsQ0FBV25oQixDQUFBLENBQUVpaEIsWUFBQSxFQUFjM2hCLENBQUEsQ0FBRThoQixTQUFBLENBQVVDLEdBQUc7RUFDbkU7RUFJQXE4QixZQUFBLEVBQWM7SUFDWixLQUFLbHFDLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBRyxLQUFLNkMsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHemIsS0FBQSxDQUFNekIsTUFBQSxFQUFRLFNBQVMsS0FBS3VyQyxnQkFBZ0I7RUFDL0U7RUFJQUksY0FBQSxFQUFnQjtJQUNkLEtBQUtqcUMsU0FBQSxDQUFVakMsR0FBQSxDQUFJLEtBQUt5QyxNQUFBLENBQU9nYixFQUFBLENBQUd6YixLQUFBLENBQU16QixNQUFBLEVBQVEsU0FBUyxLQUFLdXJDLGdCQUFnQjtFQUNoRjtFQUlBRyxhQUFBLEVBQWU7SUFDYixNQUFNdi9DLENBQUEsR0FBSSxLQUFLK1YsTUFBQSxDQUFPcUwsS0FBQSxDQUFNQyxVQUFBO0lBQzVCNWQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLN08sQ0FBQSxDQUFFK2YsTUFBQSxDQUFPLENBQUMsRUFBRWplLE9BQUEsQ0FBUSxLQUFLZzlDLFdBQVc7RUFDakQ7RUFPQXdCLGdCQUFnQnRnRCxDQUFBLEVBQUc7SUFDakIsT0FBT3NJLEVBQUEsQ0FBR3RJLENBQUMsSUFBSSxDQUFDQSxDQUFDLElBQUlxSSxDQUFBLENBQUVySSxDQUFDLElBQUlnQixNQUFBLENBQU9hLElBQUEsQ0FBSzdCLENBQUMsSUFBSSxFQUFDO0VBQ2hEO0VBTUFpL0MsY0FBY2ovQyxDQUFBLEVBQUc7SUFDZixJQUFJQSxDQUFBLENBQUUrK0MsV0FBQSxLQUFnQixPQUNwQjtJQUNGLE1BQU0xK0MsQ0FBQSxHQUFJTCxDQUFBLENBQUUrK0MsV0FBQSxDQUFZdHpCLElBQUEsSUFBUSxFQUFDO01BQUdwcUIsQ0FBQSxHQUFJLEVBQUM7SUFDekNoQixDQUFBLENBQUV5QixPQUFBLENBQVNDLENBQUEsSUFBTTtNQUNmLE1BQU1tQyxDQUFBLEdBQUksS0FBS284QyxlQUFBLENBQWdCditDLENBQUM7TUFDaENWLENBQUEsQ0FBRXNHLElBQUEsQ0FBSyxHQUFHekQsQ0FBQyxHQUFHQSxDQUFBLENBQUVwQyxPQUFBLENBQVN1QyxDQUFBLElBQU07UUFDN0IsSUFBSXJELE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBSyxLQUFLczlDLFNBQUEsRUFBV3A2QyxDQUFDLEdBQUc7VUFDM0R5RCxDQUFBLENBQ0UseUJBQXNCOUgsQ0FBQSxDQUFFcUosSUFBQSxvQkFBa0JoRixDQUFBLHlEQUFvRCxLQUFLbzZDLFNBQUEsQ0FBVXA2QyxDQUFBLEVBQUcwVyxJQUFBLENBQUsxUixJQUFBLGNBQ3JILE1BQ0Y7VUFDQTtRQUNGO1FBQ0EsTUFBTTlFLENBQUEsR0FBSThELENBQUEsQ0FBRXRHLENBQUMsSUFBSUEsQ0FBQSxDQUFFc0MsQ0FBQSxJQUFLO1FBQ3hCLEtBQUtvNkMsU0FBQSxDQUFVcDZDLENBQUEsQ0FBRXlCLFdBQUEsQ0FBWSxLQUFLO1VBQ2hDaVYsSUFBQSxFQUFNL2EsQ0FBQTtVQUNOKy9DLGtCQUFBLEVBQW9CeDdDO1FBQ3RCO01BQ0YsQ0FBQztJQUNILENBQUMsR0FBRyxLQUFLbTZDLFVBQUEsQ0FBVzErQyxDQUFBLENBQUVxSixJQUFBLElBQVFoSSxDQUFBLENBQUVrTSxHQUFBLENBQUt4TCxDQUFBLElBQU1BLENBQUEsQ0FBRStELFdBQUEsQ0FBWSxDQUFDO0VBQzVEO0VBTUFvNUMsZUFBZWwvQyxDQUFBLEVBQUc7SUFDaEIsSUFBSUEsQ0FBQSxDQUFFKytDLFdBQUEsS0FBZ0IsT0FDcEI7SUFDRixNQUFNO01BQUVZLEtBQUEsRUFBT3QvQyxDQUFBLEdBQUksQ0FBQztJQUFFLElBQUlMLENBQUEsQ0FBRSsrQyxXQUFBO0lBQzVCLElBQUk7TUFBRXdCLFVBQUEsRUFBWWwvQyxDQUFBO01BQUdtL0MsU0FBQSxFQUFXeitDO0lBQUUsSUFBSTFCLENBQUE7SUFDdEMsQ0FBQ2dCLENBQUEsSUFBSyxDQUFDVSxDQUFBLEtBQU1WLENBQUEsSUFBSyxDQUFDb0MsS0FBQSxDQUFNQyxPQUFBLENBQVFyQyxDQUFDLE1BQU15RyxDQUFBLENBQUUsNERBQW1EOUgsQ0FBQSxDQUFFcUosSUFBQSw4QkFBK0IsR0FBR2hJLENBQUEsR0FBSSxFQUFDLEdBQUlVLENBQUEsSUFBSyxDQUFDMEIsS0FBQSxDQUFNQyxPQUFBLENBQVEzQixDQUFDLE1BQU0rRixDQUFBLENBQUUsMkRBQWtEOUgsQ0FBQSxDQUFFcUosSUFBQSw4QkFBK0IsR0FBR3RILENBQUEsR0FBSSxFQUFDLEdBQUlBLENBQUEsS0FBTUEsQ0FBQSxHQUFJQSxDQUFBLENBQUU0SyxNQUFBLENBQVF6SSxDQUFBLElBQU1zRixFQUFBLENBQUd0RixDQUFDLElBQUksUUFBTTRELENBQUEsQ0FBRSx1QkFBb0I1RCxDQUFBLG9CQUFlbEUsQ0FBQSxDQUFFcUosSUFBQSxzQ0FBdUMsTUFBTSxHQUFHLE1BQUcsSUFBSSxLQUFLdTFDLFVBQUEsQ0FBVzUrQyxDQUFBLENBQUVxSixJQUFBLElBQVE7TUFDcGFrM0MsVUFBQSxFQUFZbC9DLENBQUEsSUFBSyxFQUFDO01BQ2xCbS9DLFNBQUEsRUFBV3orQyxDQUFBLElBQUs7SUFDbEI7RUFDRjtFQU1BbzlDLGtCQUFrQm4vQyxDQUFBLEVBQUc7SUFDbkJBLENBQUEsQ0FBRSsrQyxXQUFBLEtBQWdCLFNBQU0sQ0FBQy8rQyxDQUFBLENBQUUrK0MsV0FBQSxDQUFZMEIsUUFBQSxJQUFZLzNDLENBQUEsQ0FBRTFJLENBQUEsQ0FBRSsrQyxXQUFBLENBQVkwQixRQUFRLEtBQUt6L0MsTUFBQSxDQUFPaWEsT0FBQSxDQUFRamIsQ0FBQSxDQUFFKytDLFdBQUEsQ0FBWTBCLFFBQVEsRUFBRTMrQyxPQUFBLENBQVEsQ0FBQyxDQUFDekIsQ0FBQSxFQUFHZ0IsQ0FBQyxNQUFNO01BQ3pJQSxDQUFBLFlBQWFvTixNQUFBLElBQVUzRyxDQUFBLENBQ3JCLFdBQVd6RyxDQUFBLFlBQVVyQixDQUFBLENBQUVxSixJQUFBLGdFQUN2QixNQUNGLEdBQUcsS0FBS3MxQyxhQUFBLENBQWNoM0MsSUFBQSxDQUFLO1FBQ3pCbzVCLEdBQUEsRUFBSzFnQyxDQUFBO1FBQ0xxZ0QsT0FBQSxFQUFTci9DLENBQUE7UUFDVDBaLElBQUEsRUFBTS9hO01BQ1IsQ0FBQztJQUNILENBQUM7RUFDSDtFQU9BcS9DLGtCQUFrQnIvQyxDQUFBLEVBQUc7SUFDbkIsT0FBT3NNLENBQUEsQ0FBRW9CLGFBQUEsQ0FBYzFOLENBQUM7RUFDMUI7RUFNQSxNQUFNMC9DLGFBQWExL0MsQ0FBQSxFQUFHO0lBQ3BCLE1BQU07TUFBRWdoQixZQUFBLEVBQWMzZ0I7SUFBRSxJQUFJLEtBQUswVixNQUFBO0lBQ2pDLElBQUkxVSxDQUFBO0lBQ0pBLENBQUEsR0FBSSxNQUFNMEgsT0FBQSxDQUFRNmUsR0FBQSxDQUNoQm5rQixLQUFBLENBQU1vTCxJQUFBLENBQUs3TyxDQUFDLEVBQUV1TixHQUFBLENBQUtsSixDQUFBLElBQU0sS0FBS3M4QyxXQUFBLENBQVl0OEMsQ0FBQyxDQUFDLENBQzlDLEdBQUdoRCxDQUFBLEdBQUlBLENBQUEsQ0FBRXNMLE1BQUEsQ0FBUXRJLENBQUEsSUFBTSxDQUFDLENBQUNBLENBQUM7SUFDMUIsTUFBTUgsQ0FBQSxHQUFJN0QsQ0FBQSxDQUFFMmlCLFlBQUEsQ0FBYWpJLElBQUEsQ0FBSzJyQixTQUFBLElBQWFybUMsQ0FBQSxDQUFFMmlCLFlBQUEsQ0FBYXBVLE9BQUE7SUFDMUR2TixDQUFBLENBQUVTLE9BQUEsQ0FDQSxDQUFDdUMsQ0FBQSxFQUFHRSxDQUFBLEtBQU07TUFDUmxFLENBQUEsQ0FBRXM1QyxLQUFBLENBQU10MUMsQ0FBQSxDQUFFaUssSUFBQSxFQUFNakssQ0FBQSxDQUFFNDFDLEtBQUEsRUFBTzExQyxDQUFBLEtBQU0sS0FBS0wsQ0FBQztJQUN2QyxDQUNGO0VBQ0Y7RUFNQSxNQUFNeThDLFlBQVkzZ0QsQ0FBQSxFQUFHO0lBQ25CLE1BQU1LLENBQUEsR0FBSStJLEVBQUEsQ0FBR3BKLENBQUM7TUFBR3FCLENBQUEsR0FBSUwsTUFBQSxDQUFPaWEsT0FBQSxDQUFRLEtBQUsyakMsVUFBVSxFQUFFeDBDLElBQUEsQ0FBSyxDQUFDLENBQUMvRixDQUFBLEVBQUc7UUFBRW04QyxTQUFBLEVBQVdqOEMsQ0FBQTtRQUFHZzhDLFVBQUEsRUFBWTc3QztNQUFFLENBQUMsTUFBTTtRQUNsRyxNQUFNLENBQUNFLENBQUEsRUFBR2lGLENBQUMsSUFBSTdKLENBQUEsQ0FBRXNPLElBQUEsQ0FBS2hGLEtBQUEsQ0FBTSxHQUFHO1VBQUdxWSxDQUFBLEdBQUlqZCxDQUFBLENBQUUwRixJQUFBLENBQU1tVCxDQUFBLElBQU1BLENBQUEsQ0FBRXBWLFdBQUEsQ0FBWSxNQUFNOUgsQ0FBQSxDQUFFOEgsV0FBQSxDQUFZLENBQUM7VUFBR21WLENBQUEsR0FBSS9ZLENBQUEsQ0FBRTZGLElBQUEsQ0FBTW1ULENBQUEsSUFBTTtZQUMxRyxNQUFNLENBQUNDLENBQUEsRUFBR0MsQ0FBQyxJQUFJRixDQUFBLENBQUVqVSxLQUFBLENBQU0sR0FBRztZQUMxQixPQUFPa1UsQ0FBQSxLQUFNNVksQ0FBQSxLQUFNNlksQ0FBQSxLQUFNNVQsQ0FBQSxJQUFLNFQsQ0FBQSxLQUFNO1VBQ3RDLENBQUM7UUFDRCxPQUFPLENBQUMsQ0FBQ2tFLENBQUEsSUFBSyxDQUFDLENBQUNyRSxDQUFBO01BQ2xCLENBQUM7SUFDRCxJQUFJLENBQUNqYyxDQUFBLEVBQ0g7SUFDRixNQUFNLENBQUNVLENBQUMsSUFBSVYsQ0FBQTtJQUNaLE9BQU87TUFDTDQ0QyxLQUFBLEVBQU8sS0FBSzJHLGlCQUFBLENBQWtCLFFBQVE7UUFDcENDLElBQUEsRUFBTTdnRDtNQUNSLENBQUM7TUFDRHNPLElBQUEsRUFBTXZNO0lBQ1I7RUFDRjtFQU9BaytDLFlBQVlqZ0QsQ0FBQSxFQUFHO0lBQ2IsTUFBTTtRQUFFb2hCLEtBQUEsRUFBTy9nQjtNQUFFLElBQUksS0FBSzBWLE1BQUE7TUFBUTFVLENBQUEsR0FBSWlMLENBQUEsQ0FBRUksSUFBQSxDQUFLLEtBQUs7SUFDbEQsT0FBT3JMLENBQUEsQ0FBRTBOLFNBQUEsR0FBWS9PLENBQUEsRUFBRyxLQUFLOGdELFFBQUEsQ0FBU3ovQyxDQUFDLEVBQUVrTSxHQUFBLENBQUtySixDQUFBLElBQU07TUFDbEQsSUFBSUcsQ0FBQTtRQUFHRSxDQUFBLEdBQUlsRSxDQUFBLENBQUUwZ0QsV0FBQTtRQUFhcjhDLENBQUEsR0FBSTtNQUM5QixRQUFRUixDQUFBLENBQUU0SixRQUFBO1FBQUEsS0FDSG5LLElBQUEsQ0FBS3VLLHNCQUFBO1VBQ1I3SixDQUFBLEdBQUlpSSxDQUFBLENBQUVJLElBQUEsQ0FBSyxLQUFLLEdBQUdySSxDQUFBLENBQUVuRSxXQUFBLENBQVlnRSxDQUFDO1VBQ2xDO1FBQUEsS0FDR1AsSUFBQSxDQUFLb0ssWUFBQTtVQUNSMUosQ0FBQSxHQUFJSCxDQUFBLEVBQUdRLENBQUEsR0FBSSxNQUFJLEtBQUsrNUMsU0FBQSxDQUFVcDZDLENBQUEsQ0FBRW1JLE9BQUEsTUFBYWpJLENBQUEsR0FBSSxLQUFLazZDLFNBQUEsQ0FBVXA2QyxDQUFBLENBQUVtSSxPQUFBLEVBQVN1TyxJQUFBO1VBQzNFO01BQUE7TUFFSixNQUFNO1VBQUUwUSxJQUFBLEVBQU03bUI7UUFBRSxJQUFJTCxDQUFBLENBQUV3NkMsV0FBQSxJQUFlO1VBQUV0ekIsSUFBQSxFQUFNO1FBQUc7UUFBRzVoQixDQUFBLEdBQUlqRixDQUFBLENBQUVnQixNQUFBLENBQU8sQ0FBQzJYLENBQUEsRUFBR0MsQ0FBQSxNQUFPLEtBQUs4aUMsZUFBQSxDQUFnQjlpQyxDQUFDLEVBQUUxYixPQUFBLENBQVMrbUIsQ0FBQSxJQUFNO1VBQ2hILE1BQU1uTCxDQUFBLEdBQUlyVixDQUFBLENBQUVtVixDQUFDLElBQUlBLENBQUEsQ0FBRXFMLENBQUEsSUFBSztVQUN4QnRMLENBQUEsQ0FBRXNMLENBQUEsQ0FBRTFnQixXQUFBLENBQVksS0FBS3VWLENBQUEsSUFBSyxDQUFDO1FBQzdCLENBQUMsR0FBR0gsQ0FBQSxHQUFJLENBQUMsQ0FBQztRQUFHb0UsQ0FBQSxHQUFJM2dCLE1BQUEsQ0FBT29CLE1BQUEsQ0FBTyxDQUFDLEdBQUd5SCxDQUFBLEVBQUd0RixDQUFBLENBQUV5OEMsa0JBQWtCO01BQzFELElBQUkzOEMsQ0FBQSxDQUFFbUksT0FBQSxDQUFRckUsV0FBQSxDQUFZLE1BQU0sU0FBUztRQUN2QyxNQUFNb1YsQ0FBQSxHQUFJdVAsQ0FBQSxDQUFFem9CLENBQUEsQ0FBRTQ4QyxTQUFBLEVBQVd0L0IsQ0FBQztRQUMxQnRkLENBQUEsR0FBSWlJLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sUUFBUTtVQUN4QnFDLFNBQUEsRUFBV3dPO1FBQ2IsQ0FBQyxFQUFFMVosVUFBQTtNQUNMLE9BQ0VRLENBQUEsQ0FBRTBLLFNBQUEsR0FBWStkLENBQUEsQ0FBRXpvQixDQUFBLENBQUUwSyxTQUFBLEVBQVc0UyxDQUFDO01BQ2hDLE1BQU1yRSxDQUFBLEdBQUksS0FBS3NqQyxpQkFBQSxDQUFrQixPQUFPO1FBQ3RDOTNDLElBQUEsRUFBTXpFO01BQ1IsQ0FBQztNQUNELE9BQU87UUFDTGthLE9BQUEsRUFBU2xhLENBQUE7UUFDVHlpQyxPQUFBLEVBQVNwaUMsQ0FBQTtRQUNUcVcsSUFBQSxFQUFNeFcsQ0FBQSxDQUFFOEUsSUFBQTtRQUNSNHdDLEtBQUEsRUFBTzM4QjtNQUNUO0lBQ0YsQ0FBQyxFQUFFM1EsTUFBQSxDQUFRekksQ0FBQSxJQUFNO01BQ2YsTUFBTUcsQ0FBQSxHQUFJaUksQ0FBQSxDQUFFc0MsT0FBQSxDQUFRMUssQ0FBQSxDQUFFcWEsT0FBTztRQUFHaGEsQ0FBQSxHQUFJK0gsQ0FBQSxDQUFFQyxXQUFBLENBQVlySSxDQUFBLENBQUVxYSxPQUFPO01BQzNELE9BQU8sQ0FBQ2xhLENBQUEsSUFBS0UsQ0FBQTtJQUNmLENBQUM7RUFDSDtFQU9BMjdDLGFBQWFsZ0QsQ0FBQSxFQUFHO0lBQ2QsTUFBTTtNQUFFK2dCLFlBQUEsRUFBYzFnQjtJQUFFLElBQUksS0FBS3VULE1BQUE7SUFDakMsSUFBSSxDQUFDNVQsQ0FBQSxFQUNILE9BQU8sRUFBQztJQUNWLE1BQU1xQixDQUFBLEdBQUloQixDQUFBO0lBQ1YsT0FBT0wsQ0FBQSxDQUFFc0osS0FBQSxDQUFNLE9BQU8sRUFBRXFELE1BQUEsQ0FBUTVLLENBQUEsSUFBTUEsQ0FBQSxDQUFFMG9CLElBQUEsQ0FBSyxDQUFDLEVBQUVsZCxHQUFBLENBQUt4TCxDQUFBLElBQU07TUFDekQsTUFBTW1DLENBQUEsR0FBSW9JLENBQUEsQ0FBRUksSUFBQSxDQUFLLEtBQUs7TUFDdEJ4SSxDQUFBLENBQUVzSyxXQUFBLEdBQWN6TSxDQUFBO01BQ2hCLE1BQU1zQyxDQUFBLEdBQUksS0FBS3U4QyxpQkFBQSxDQUFrQixPQUFPO1FBQ3RDOTNDLElBQUEsRUFBTTVFO01BQ1IsQ0FBQztNQUNELE9BQU87UUFDTHFhLE9BQUEsRUFBU3JhLENBQUE7UUFDVDZXLElBQUEsRUFBTTFaLENBQUE7UUFDTnlsQyxPQUFBLEVBQVM7UUFDVG1ULEtBQUEsRUFBTzUxQztNQUNUO0lBQ0YsQ0FBQztFQUNIO0VBTUEsTUFBTTg3QyxtQkFBbUJuZ0QsQ0FBQSxFQUFHO0lBQzFCLE1BQU07UUFBRWlqQixLQUFBLEVBQU81aUIsQ0FBQTtRQUFHMmdCLFlBQUEsRUFBYzNmO01BQUUsSUFBSSxLQUFLMFUsTUFBQTtNQUFRO1FBQUVpTixZQUFBLEVBQWNqaEI7TUFBRSxJQUFJVixDQUFBO0lBQ3pFLElBQUksQ0FBQ1UsQ0FBQSxJQUFLL0IsQ0FBQSxDQUFFK2EsSUFBQSxLQUFTaFosQ0FBQSxDQUFFc0gsSUFBQSxJQUFRLENBQUNpRCxDQUFBLENBQUVxQiwwQkFBQSxDQUEyQjNOLENBQUEsQ0FBRXVlLE9BQUEsQ0FBUXhQLFNBQVMsR0FBRztNQUNqRixLQUFLc3hDLFdBQUEsQ0FBWXJnRCxDQUFBLEdBQUkrQixDQUFBLElBQUssT0FBTyxTQUFTQSxDQUFBLENBQUVnWixJQUFBLENBQUsyckIsU0FBQSxLQUFjM2tDLENBQUEsQ0FBRTZNLE9BQU87TUFDeEU7SUFDRjtJQUNBdk8sQ0FBQSxDQUFFZzNDLDRCQUFBLENBQTZCcjNDLENBQUEsQ0FBRXVlLE9BQUEsQ0FBUXhQLFNBQVM7RUFDcEQ7RUFTQSxNQUFNcXhDLG1CQUFtQnBnRCxDQUFBLEVBQUc7SUFDMUIsTUFBTTtRQUFFZ2hCLFlBQUEsRUFBYzNnQixDQUFBO1FBQUc0aUIsS0FBQSxFQUFPNWhCO01BQUUsSUFBSSxLQUFLMFUsTUFBQTtNQUFRO1FBQUV3SSxPQUFBLEVBQVN4YztNQUFFLElBQUkvQixDQUFBO0lBQ3BFLElBQUlLLENBQUEsQ0FBRTJpQixZQUFBLElBQWdCM2lCLENBQUEsQ0FBRTJpQixZQUFBLENBQWFqSSxJQUFBLENBQUsyckIsU0FBQSxJQUFhM2tDLENBQUEsQ0FBRXlNLFdBQUEsQ0FBWXhMLE1BQUEsR0FBU3c3QyxFQUFBLENBQUcwQyw2QkFBQSxFQUErQjtNQUM5RyxNQUFNNzhDLENBQUEsR0FBSSxNQUFNLEtBQUs4OEMsY0FBQSxDQUFlcC9DLENBQUEsQ0FBRXlNLFdBQVc7TUFDakQsSUFBSW5LLENBQUEsRUFBRztRQUNMLE1BQU1FLENBQUEsR0FBSWxFLENBQUEsQ0FBRTJpQixZQUFBLElBQWdCM2lCLENBQUEsQ0FBRTJpQixZQUFBLENBQWFqSSxJQUFBLENBQUsyckIsU0FBQSxJQUFhcm1DLENBQUEsQ0FBRTJpQixZQUFBLENBQWFwVSxPQUFBO1VBQVNsSyxDQUFBLEdBQUlyRSxDQUFBLENBQUVzNUMsS0FBQSxDQUFNdDFDLENBQUEsQ0FBRTBXLElBQUEsRUFBTTFXLENBQUEsQ0FBRTQxQyxLQUFBLEVBQU8xMUMsQ0FBQztRQUNuSGxELENBQUEsQ0FBRTZoQixVQUFBLENBQVd4ZSxDQUFBLEVBQUdyRCxDQUFBLENBQUU4aEIsU0FBQSxDQUFVQyxHQUFHO1FBQy9CO01BQ0Y7SUFDRjtJQUNBLElBQUkvaUIsQ0FBQSxDQUFFMmlCLFlBQUEsSUFBZ0IzaUIsQ0FBQSxDQUFFMmlCLFlBQUEsQ0FBYXRFLFlBQUEsRUFBYztNQUNqRCxNQUFNcmEsQ0FBQSxHQUFJaEUsQ0FBQSxDQUFFMmlCLFlBQUEsQ0FBYWpJLElBQUEsQ0FBS2ltQyxrQkFBQTtNQUM5QmpoRCxRQUFBLENBQVMyWixXQUFBLENBQ1AsY0FDQSxPQUNBb1QsQ0FBQSxDQUFFL3FCLENBQUEsQ0FBRWdOLFNBQUEsRUFBVzFLLENBQUMsQ0FDbEI7SUFDRixPQUNFLEtBQUtnOEMsV0FBQSxDQUFZcmdELENBQUM7RUFDdEI7RUFPQSxNQUFNbWhELGVBQWVuaEQsQ0FBQSxFQUFHO0lBQ3RCLE1BQU1LLENBQUEsR0FBSSxLQUFLcytDLGFBQUEsQ0FBY3YwQyxJQUFBLENBQU1ySSxDQUFBLElBQU07TUFDdkMsTUFBTW1DLENBQUEsR0FBSW5DLENBQUEsQ0FBRTIrQyxPQUFBLENBQVFVLElBQUEsQ0FBS3BoRCxDQUFDO01BQzFCLE9BQU9rRSxDQUFBLEdBQUlsRSxDQUFBLEtBQU1rRSxDQUFBLENBQUV3RyxLQUFBLENBQU0sSUFBSTtJQUMvQixDQUFDO0lBQ0QsT0FBT3JLLENBQUEsR0FBSTtNQUNUNDVDLEtBQUEsRUFBTyxLQUFLMkcsaUJBQUEsQ0FBa0IsV0FBVztRQUN2QzdmLEdBQUEsRUFBSzFnQyxDQUFBLENBQUUwZ0MsR0FBQTtRQUNQajRCLElBQUEsRUFBTTlJO01BQ1IsQ0FBQztNQUNEK2EsSUFBQSxFQUFNMWEsQ0FBQSxDQUFFMGEsSUFBQSxDQUFLMVI7SUFDZixJQUFJO0VBQ047RUFRQWczQyxZQUFZcmdELENBQUEsRUFBR0ssQ0FBQSxHQUFJLE9BQUk7SUFDckIsTUFBTTtRQUFFMmdCLFlBQUEsRUFBYzNmLENBQUE7UUFBRzRoQixLQUFBLEVBQU9saEI7TUFBRSxJQUFJLEtBQUtnVSxNQUFBO01BQVE7UUFBRWlOLFlBQUEsRUFBYzllO01BQUUsSUFBSTdDLENBQUE7SUFDekUsSUFBSWdELENBQUE7SUFDSixJQUFJaEUsQ0FBQSxJQUFLNkQsQ0FBQSxJQUFLQSxDQUFBLENBQUUwSyxPQUFBLEVBQVM7TUFDdkJ2SyxDQUFBLEdBQUloRCxDQUFBLENBQUVzNEMsS0FBQSxDQUFNMzVDLENBQUEsQ0FBRSthLElBQUEsRUFBTS9hLENBQUEsQ0FBRWk2QyxLQUFBLEVBQU8sSUFBRSxHQUFHbDRDLENBQUEsQ0FBRW1oQixVQUFBLENBQVc3ZSxDQUFBLEVBQUd0QyxDQUFBLENBQUVvaEIsU0FBQSxDQUFVQyxHQUFHO01BQ2pFO0lBQ0Y7SUFDQS9lLENBQUEsR0FBSWhELENBQUEsQ0FBRXM0QyxLQUFBLENBQU0zNUMsQ0FBQSxDQUFFK2EsSUFBQSxFQUFNL2EsQ0FBQSxDQUFFaTZDLEtBQUssR0FBR2w0QyxDQUFBLENBQUVtaEIsVUFBQSxDQUFXN2UsQ0FBQSxFQUFHdEMsQ0FBQSxDQUFFb2hCLFNBQUEsQ0FBVUMsR0FBRztFQUMvRDtFQU9BeThCLG1CQUFtQjcvQyxDQUFBLEVBQUc7SUFDcEIsTUFBTTtNQUFFZ2hCLFlBQUEsRUFBYzNnQixDQUFBO01BQUc0aUIsS0FBQSxFQUFPNWhCLENBQUE7TUFBRytmLEtBQUEsRUFBT3JmO0lBQUUsSUFBSSxLQUFLZ1UsTUFBQTtJQUNyRDZXLEVBQUEsQ0FDRTVzQixDQUFBLEVBQ0NxRSxDQUFBLElBQU10QyxDQUFBLENBQUVzZixVQUFBLENBQVdwZixHQUFBLENBQUlvQyxDQUFDLEVBQUU2YSxjQUM3QixFQUFFcGQsT0FBQSxDQUFRLENBQUM7TUFBRWlaLElBQUEsRUFBTTFXLENBQUE7TUFBR3lFLElBQUEsRUFBTXZFO0lBQUUsR0FBR0csQ0FBQSxLQUFNO01BQ3JDLElBQUlFLENBQUEsR0FBSTtNQUNSRixDQUFBLEtBQU0sTUFBTUUsQ0FBQSxHQUFJdkUsQ0FBQSxDQUFFMmlCLFlBQUEsSUFBZ0IzaUIsQ0FBQSxDQUFFMmlCLFlBQUEsQ0FBYWpJLElBQUEsQ0FBSzJyQixTQUFBLElBQWFybUMsQ0FBQSxDQUFFMmlCLFlBQUEsQ0FBYXBVLE9BQUE7TUFDbEYsTUFBTS9FLENBQUEsR0FBSXhKLENBQUEsQ0FBRXlnQixNQUFBLENBQU87UUFDakIvRixJQUFBLEVBQU0xVyxDQUFBO1FBQ055RSxJQUFBLEVBQU12RSxDQUFBO1FBQ05xRyxPQUFBLEVBQVNoRztNQUNYLENBQUM7TUFDRHZELENBQUEsQ0FBRTZoQixVQUFBLENBQVdyWixDQUFBLEVBQUd4SSxDQUFBLENBQUU4aEIsU0FBQSxDQUFVQyxHQUFHO0lBQ2pDLENBQUM7RUFDSDtFQVFBaStCLG1CQUFtQnJoRCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUMxQixNQUFNVSxDQUFBLEdBQUlmLE1BQUEsQ0FBT2EsSUFBQSxDQUFLLEtBQUs0OEMsU0FBUztNQUFHdjZDLENBQUEsR0FBSWxFLENBQUE7TUFBRztRQUFFK2EsSUFBQSxFQUFNMVc7TUFBRSxJQUFJLEtBQUtvNkMsU0FBQSxDQUFVdjZDLENBQUEsQ0FBRXNJLE9BQUEsS0FBWSxDQUFDO01BQUdqSSxDQUFBLEdBQUksS0FBS202QyxVQUFBLENBQVdyNkMsQ0FBQSxJQUFLLE9BQU8sU0FBU0EsQ0FBQSxDQUFFZ0YsSUFBQSxLQUFTLEVBQUM7TUFBRzNFLENBQUEsR0FBSTNDLENBQUEsQ0FBRTBGLFFBQUEsQ0FBU3ZELENBQUEsQ0FBRXNJLE9BQU87TUFBRzVILENBQUEsR0FBSTBILENBQUEsQ0FBRTZDLGFBQUEsQ0FBYzFILFFBQUEsQ0FBU3ZELENBQUEsQ0FBRXNJLE9BQUEsQ0FBUXJFLFdBQUEsQ0FBWSxDQUFDO01BQUcwQixDQUFBLEdBQUlwRyxLQUFBLENBQU1vTCxJQUFBLENBQUszSyxDQUFBLENBQUVrTCxRQUFRLEVBQUVrTCxJQUFBLENBQ2hRLENBQUM7UUFBRTlOLE9BQUEsRUFBUzhRO01BQUUsTUFBTXZiLENBQUEsQ0FBRTBGLFFBQUEsQ0FBUzZWLENBQUMsS0FBSyxDQUFDL1ksQ0FBQSxDQUFFa0QsUUFBQSxDQUFTNlYsQ0FBQyxDQUNwRDtNQUFHcUUsQ0FBQSxHQUFJbGUsS0FBQSxDQUFNb0wsSUFBQSxDQUFLM0ssQ0FBQSxDQUFFa0wsUUFBUSxFQUFFa0wsSUFBQSxDQUM1QixDQUFDO1FBQUU5TixPQUFBLEVBQVM4UTtNQUFFLE1BQU1oUixDQUFBLENBQUU2QyxhQUFBLENBQWMxSCxRQUFBLENBQVM2VixDQUFBLENBQUVuVixXQUFBLENBQVksQ0FBQyxDQUM5RDtJQUNBLElBQUksQ0FBQ3ZELENBQUEsSUFBSyxDQUFDRixDQUFBLElBQUssQ0FBQ21GLENBQUEsRUFDZixPQUFPeEksQ0FBQSxDQUFFbkIsV0FBQSxDQUFZZ0UsQ0FBQyxHQUFHLENBQUMsR0FBRzdELENBQUEsRUFBR2dCLENBQUM7SUFDbkMsSUFBSXFELENBQUEsSUFBSyxDQUFDbUYsQ0FBQSxJQUFLakYsQ0FBQSxJQUFLLENBQUMrYyxDQUFBLElBQUssQ0FBQzlYLENBQUEsRUFDekIsT0FBTyxDQUFDLEdBQUd4SixDQUFBLEVBQUdnQixDQUFBLEVBQUc2QyxDQUFDO0VBQ3RCO0VBU0E0OEMsU0FBUzlnRCxDQUFBLEVBQUc7SUFDVixNQUFNSyxDQUFBLEdBQUlvRCxLQUFBLENBQU1vTCxJQUFBLENBQUs3TyxDQUFBLENBQUUyTyxVQUFVO0lBQ2pDLElBQUl0TixDQUFBO0lBQ0osTUFBTVUsQ0FBQSxHQUFJQSxDQUFDbUMsQ0FBQSxFQUFHRyxDQUFBLEtBQU07TUFDbEIsSUFBSWlJLENBQUEsQ0FBRXNDLE9BQUEsQ0FBUXZLLENBQUMsS0FBSyxDQUFDaUksQ0FBQSxDQUFFQyxXQUFBLENBQVlsSSxDQUFDLEdBQ2xDLE9BQU9ILENBQUE7TUFDVCxNQUFNSyxDQUFBLEdBQUlMLENBQUEsQ0FBRUEsQ0FBQSxDQUFFbEIsTUFBQSxHQUFTO01BQ3ZCLElBQUkwQixDQUFBLEdBQUksSUFBSTR6QyxnQkFBQSxDQUFpQjtNQUM3QixRQUFRL3pDLENBQUEsSUFBSytILENBQUEsQ0FBRTJCLFVBQUEsQ0FBVzFKLENBQUMsTUFBTUcsQ0FBQSxHQUFJUixDQUFBLENBQUVxRixHQUFBLENBQUksSUFBSWxGLENBQUEsQ0FBRXlKLFFBQUE7UUFBQSxLQUMxQ25LLElBQUEsQ0FBS29LLFlBQUE7VUFDUixJQUFJMU0sQ0FBQSxHQUFJLEtBQUtnZ0Qsa0JBQUEsQ0FBbUJoOUMsQ0FBQSxFQUFHSCxDQUFBLEVBQUdRLENBQUMsR0FBR3JELENBQUEsRUFDeEMsT0FBT0EsQ0FBQTtVQUNUO1FBQUEsS0FDR3NDLElBQUEsQ0FBS3VMLFNBQUE7VUFDUixPQUFPeEssQ0FBQSxDQUFFeEUsV0FBQSxDQUFZbUUsQ0FBQyxHQUFHLENBQUMsR0FBR0gsQ0FBQSxFQUFHUSxDQUFDO1FBQUE7VUFFakMsT0FBTyxDQUFDLEdBQUdSLENBQUEsRUFBR1EsQ0FBQztNQUFBO01BRW5CLE9BQU8sQ0FBQyxHQUFHUixDQUFBLEVBQUcsR0FBR1QsS0FBQSxDQUFNb0wsSUFBQSxDQUFLeEssQ0FBQSxDQUFFc0ssVUFBVSxFQUFFL0ksTUFBQSxDQUFPN0QsQ0FBQSxFQUFHLEVBQUUsQ0FBQztJQUN6RDtJQUNBLE9BQU8xQixDQUFBLENBQUV1RixNQUFBLENBQU83RCxDQUFBLEVBQUcsRUFBRTtFQUN2QjtFQU9BNitDLGtCQUFrQjVnRCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUN0QixPQUFPLElBQUlxNEMsV0FBQSxDQUFZMTRDLENBQUEsRUFBRztNQUN4QjI0QyxNQUFBLEVBQVF0NEM7SUFDVixDQUFDO0VBQ0g7QUFDRjtBQUNBaytDLEVBQUEsQ0FBRzJDLDZCQUFBLEdBQWdDO0FBQ25DLElBQUlJLEVBQUEsR0FBSy9DLEVBQUE7QUFDVCxJQUFNZ0QsRUFBQSxHQUFOLGNBQWlCbnNDLENBQUEsQ0FBRTtFQUNqQjNULFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUtnZ0Qsd0JBQUEsR0FBMkIsRUFBQyxFQUFHLEtBQUtDLGVBQUEsR0FBa0I7RUFDbEY7RUFJQSxJQUFJbjJCLFVBQUEsRUFBWTtJQUNkLE9BQU8sS0FBS20yQixlQUFBO0VBQ2Q7RUFJQSxNQUFNeHlCLFFBQUEsRUFBVTtJQUNkLE1BQU07UUFBRTdOLEtBQUEsRUFBT3BoQjtNQUFFLElBQUksS0FBSytWLE1BQUE7TUFBUTtRQUFFc0wsVUFBQSxFQUFZaGhCO01BQUUsSUFBSUwsQ0FBQTtNQUFHcUIsQ0FBQSxHQUFJLEVBQUM7SUFDOURvQyxLQUFBLENBQU1vTCxJQUFBLENBQUt4TyxDQUFBLENBQUU0YSxPQUFBLENBQVEsQ0FBQyxFQUFFblosT0FBQSxDQUFRLENBQUMsQ0FBQ0MsQ0FBQSxFQUFHbUMsQ0FBQyxNQUFNO01BQzFDQSxDQUFBLENBQUV5akMsbUJBQUEsSUFBdUJ0bUMsQ0FBQSxDQUFFc0csSUFBQSxDQUFLNUYsQ0FBQztJQUNuQyxDQUFDLEdBQUcsS0FBS3kvQyx3QkFBQSxHQUEyQm5nRCxDQUFBLEVBQUcsS0FBS3VTLE1BQUEsQ0FBTzBJLFFBQUEsSUFBWWpiLENBQUEsQ0FBRTJCLE1BQUEsR0FBUyxLQUFLLEtBQUswK0Msa0JBQUEsQ0FBbUIsR0FBRyxLQUFLcGlDLE1BQUEsQ0FBTyxLQUFLMUwsTUFBQSxDQUFPMEksUUFBQSxFQUFVLElBQUU7RUFDaEo7RUFRQSxNQUFNZ0QsT0FBT3RmLENBQUEsR0FBSSxDQUFDLEtBQUt5aEQsZUFBQSxFQUFpQnBoRCxDQUFBLEdBQUksT0FBSTtJQUM5Q0wsQ0FBQSxJQUFLLEtBQUt3aEQsd0JBQUEsQ0FBeUJ4K0MsTUFBQSxHQUFTLEtBQUssS0FBSzArQyxrQkFBQSxDQUFtQjtJQUN6RSxNQUFNcmdELENBQUEsR0FBSSxLQUFLb2dELGVBQUE7SUFDZixLQUFLQSxlQUFBLEdBQWtCemhELENBQUE7SUFDdkIsV0FBV2tFLENBQUEsSUFBSyxLQUFLNlIsTUFBQSxFQUNuQixLQUFLQSxNQUFBLENBQU83UixDQUFBLEVBQUdzZ0MsY0FBQSxJQUFrQixLQUFLenVCLE1BQUEsQ0FBTzdSLENBQUEsRUFBR3NnQyxjQUFBLENBQWV4a0MsQ0FBQztJQUNsRSxJQUFJcUIsQ0FBQSxLQUFNckIsQ0FBQSxFQUNSLE9BQU8sS0FBS3loRCxlQUFBO0lBQ2QsSUFBSXBoRCxDQUFBLEVBQ0YsT0FBTyxLQUFLb2hELGVBQUE7SUFDZCxLQUFLMXJDLE1BQUEsQ0FBT3lOLHFCQUFBLENBQXNCQyxPQUFBLENBQVE7SUFDMUMsTUFBTTFoQixDQUFBLEdBQUksTUFBTSxLQUFLZ1UsTUFBQSxDQUFPdVgsS0FBQSxDQUFNclosSUFBQSxDQUFLO0lBQ3ZDLE9BQU8sTUFBTSxLQUFLOEIsTUFBQSxDQUFPaUwsWUFBQSxDQUFha0IsS0FBQSxDQUFNLEdBQUcsTUFBTSxLQUFLbk0sTUFBQSxDQUFPMk4sUUFBQSxDQUFTMUQsTUFBQSxDQUFPamUsQ0FBQSxDQUFFK2YsTUFBTSxHQUFHLEtBQUsvTCxNQUFBLENBQU95TixxQkFBQSxDQUFzQkcsTUFBQSxDQUFPLEdBQUcsS0FBSzg5QixlQUFBO0VBQy9JO0VBSUFDLG1CQUFBLEVBQXFCO0lBQ25CLE1BQU0sSUFBSTV1QyxFQUFBLENBQ1IseUVBQXlFLEtBQUswdUMsd0JBQUEsQ0FBeUJoMEMsSUFBQSxDQUFLLElBQUksaUNBQ2xIO0VBQ0Y7QUFDRjtBQUNBLElBQU1tMEMsRUFBQSxHQUFOLGNBQWlCdnNDLENBQUEsQ0FBRTtFQUNqQjNULFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUtvZ0Qsd0JBQUEsR0FBMkIsT0FBSSxLQUFLQyxZQUFBLEdBQWUsR0FBRyxLQUFLQyxxQkFBQSxHQUF3QixJQUFJLEtBQUtDLGtCQUFBLEdBQXFCLEdBQUcsS0FBS0MsZUFBQSxHQUFrQixHQUFHLEtBQUtDLGlCQUFBLEdBQW9CLEdBQUcsS0FBS0MsU0FBQSxHQUFZLE9BQUksS0FBS0MsV0FBQSxHQUFjLE9BQUksS0FBS0MsWUFBQSxHQUFlLE1BQU0sS0FBS0MsTUFBQSxHQUFTLEdBQUcsS0FBS0MsTUFBQSxHQUFTLEdBQUcsS0FBS0MsTUFBQSxHQUFTLEdBQUcsS0FBS0MsTUFBQSxHQUFTLEdBQUcsS0FBS0MsZUFBQSxHQUFrQixFQUFDLEVBQUcsS0FBS0MsV0FBQSxHQUFjLEVBQUM7RUFDL1g7RUFNQSxXQUFXN3JDLElBQUEsRUFBTTtJQUNmLE9BQU87TUFDTG1qQixPQUFBLEVBQVM7TUFDVDJvQixnQkFBQSxFQUFrQjtNQUNsQjVxQyxJQUFBLEVBQU07TUFDTjZxQyxhQUFBLEVBQWU7TUFDZkMsZ0JBQUEsRUFBa0I7SUFDcEI7RUFDRjtFQUtBNXpCLFFBQUEsRUFBVTtJQUNSLEtBQUswVixvQkFBQSxDQUFxQjtFQUM1QjtFQU9BbWUsZUFBZTlpRCxDQUFBLEVBQUdLLENBQUEsRUFBRztJQUNuQixNQUFNZ0IsQ0FBQSxHQUFJdEIsUUFBQSxDQUFTZ2pELGdCQUFBLENBQWlCL2lELENBQUEsR0FBSVUsTUFBQSxDQUFPZ1AsV0FBQSxFQUFhclAsQ0FBQSxHQUFJSyxNQUFBLENBQU9pUCxXQUFXO0lBQ2xGdE8sQ0FBQSxDQUFFNkIsT0FBQSxDQUFRLElBQUksS0FBSzZTLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUXhNLEdBQUEsQ0FBSTNGLE9BQUEsRUFBUyxNQUFNLEtBQUs2RSxNQUFBLENBQU9vcUIsY0FBQSxDQUFlK2EsaUJBQUEsR0FBb0IsT0FBSSxLQUFLN0UsY0FBQSxDQUFlLEdBQUcsS0FBS29NLGVBQUEsR0FBa0IsRUFBQztJQUN2SixNQUFNditDLENBQUEsR0FBSSxDQUNSLElBQUltWSxDQUFBLENBQUV4RixHQUFBLENBQUkwSCxPQUFBLElBQ1YsSUFBSSxLQUFLeEksTUFBQSxDQUFPc04sT0FBQSxDQUFReE0sR0FBQSxDQUFJM0YsT0FBQSxJQUM1QixJQUFJLEtBQUs2RSxNQUFBLENBQU93TixhQUFBLENBQWMxTSxHQUFBLENBQUk3RixhQUFBLEdBQ3BDO01BQUczTSxDQUFBLEdBQUloRCxDQUFBLENBQUU2QixPQUFBLENBQVEsTUFBTSxLQUFLNlMsTUFBQSxDQUFPZ2IsRUFBQSxDQUFHbGEsR0FBQSxDQUFJQyxhQUFhO01BQUd2UyxDQUFBLEdBQUlMLENBQUEsQ0FBRW9XLElBQUEsQ0FBTTVWLENBQUEsSUFBTSxDQUFDLENBQUNyRCxDQUFBLENBQUU2QixPQUFBLENBQVF3QixDQUFDLENBQUM7SUFDMUYsQ0FBQ0wsQ0FBQSxJQUFLRSxDQUFBLEtBQU0sS0FBSzI5QyxTQUFBLEdBQVksTUFBSSxLQUFLRyxNQUFBLEdBQVNyaUQsQ0FBQSxFQUFHLEtBQUtzaUQsTUFBQSxHQUFTamlELENBQUE7RUFDbEU7RUFJQTJpRCxhQUFBLEVBQWU7SUFDYixLQUFLZCxTQUFBLEdBQVksT0FBSSxLQUFLRyxNQUFBLEdBQVMsR0FBRyxLQUFLQyxNQUFBLEdBQVMsR0FBRyxLQUFLVyxnQkFBQSxDQUFpQnY0QixLQUFBLENBQU13NEIsT0FBQSxHQUFVO0VBQy9GO0VBSUExSCxnQkFBQSxFQUFrQjtJQUNoQixPQUFPLEtBQUtvRyx3QkFBQTtFQUNkO0VBSUF2TCxlQUFBLEVBQWlCO0lBQ2YsS0FBS3VMLHdCQUFBLEdBQTJCO0VBQ2xDO0VBSUFqZCxxQkFBQSxFQUF1QjtJQUNyQixNQUFNO01BQUU5TixTQUFBLEVBQVc3MkI7SUFBRSxJQUFJLEtBQUttakQsT0FBQSxDQUFRO0lBQ3RDLEtBQUs1dEMsU0FBQSxDQUFVckMsRUFBQSxDQUFHbFQsQ0FBQSxFQUFHLGFBQWNLLENBQUEsSUFBTTtNQUN2QyxLQUFLK2lELGdCQUFBLENBQWlCL2lELENBQUM7SUFDekIsR0FBRyxLQUFFLEdBQUcsS0FBS2tWLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBR25ULFFBQUEsQ0FBU3laLElBQUEsRUFBTSxhQUFhN1AsRUFBQSxDQUFJdEosQ0FBQSxJQUFNO01BQzlELEtBQUtnakQsZ0JBQUEsQ0FBaUJoakQsQ0FBQztJQUN6QixHQUFHLEVBQUUsR0FBRztNQUNONnVCLE9BQUEsRUFBUztJQUNYLENBQUMsR0FBRyxLQUFLM1osU0FBQSxDQUFVckMsRUFBQSxDQUFHblQsUUFBQSxDQUFTeVosSUFBQSxFQUFNLGNBQWMsTUFBTTtNQUN2RCxLQUFLOHBDLGlCQUFBLENBQWtCO0lBQ3pCLENBQUMsR0FBRyxLQUFLL3RDLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBR3hTLE1BQUEsRUFBUSxVQUFVaUosRUFBQSxDQUFJdEosQ0FBQSxJQUFNO01BQ2hELEtBQUtrakQsYUFBQSxDQUFjbGpELENBQUM7SUFDdEIsR0FBRyxFQUFFLEdBQUc7TUFDTjZ1QixPQUFBLEVBQVM7SUFDWCxDQUFDLEdBQUcsS0FBSzNaLFNBQUEsQ0FBVXJDLEVBQUEsQ0FBR25ULFFBQUEsQ0FBU3laLElBQUEsRUFBTSxXQUFXLE1BQU07TUFDcEQsS0FBS2dxQyxjQUFBLENBQWU7SUFDdEIsR0FBRyxLQUFFO0VBQ1A7RUFNQUosaUJBQWlCcGpELENBQUEsRUFBRztJQUNsQixJQUFJQSxDQUFBLENBQUVpdUIsTUFBQSxLQUFXLEtBQUtnMEIsaUJBQUEsRUFDcEI7SUFDRmppRCxDQUFBLENBQUU0VixNQUFBLENBQU8xUyxPQUFBLENBQVFvSixDQUFBLENBQUVnQixpQkFBaUIsTUFBTSxRQUFRLEtBQUt3MUMsY0FBQSxDQUFlOWlELENBQUEsQ0FBRXlqRCxLQUFBLEVBQU96akQsQ0FBQSxDQUFFMGpELEtBQUs7RUFDeEY7RUFNQUwsaUJBQWlCcmpELENBQUEsRUFBRztJQUNsQixLQUFLMmpELGlCQUFBLENBQWtCM2pELENBQUMsR0FBRyxLQUFLNGpELGFBQUEsQ0FBYzVqRCxDQUFBLENBQUU2akQsT0FBTztFQUN6RDtFQUlBUCxrQkFBQSxFQUFvQjtJQUNsQixLQUFLak4sY0FBQSxDQUFlLEdBQUcsS0FBSzJNLFlBQUEsQ0FBYTtFQUMzQztFQUlBTyxjQUFjdmpELENBQUEsRUFBRztJQUNmLEtBQUsyakQsaUJBQUEsQ0FBa0IzakQsQ0FBQztFQUMxQjtFQUlBd2pELGVBQUEsRUFBaUI7SUFDZixLQUFLbk4sY0FBQSxDQUFlLEdBQUcsS0FBSzJNLFlBQUEsQ0FBYTtFQUMzQztFQU1BWSxjQUFjNWpELENBQUEsRUFBRztJQUNmLElBQUksS0FBS29pRCxZQUFBLEdBQWUsTUFBTXBpRCxDQUFBLElBQUssS0FBSzhoRCxxQkFBQSxLQUEwQixLQUFLTSxZQUFBLEdBQWUsS0FBS0osZUFBQSxHQUFrQmppRCxRQUFBLENBQVNvRCxlQUFBLENBQWdCbUIsWUFBQSxHQUFldEUsQ0FBQSxJQUFLLEtBQUs4aEQscUJBQUEsS0FBMEIsS0FBS00sWUFBQSxHQUFlLEtBQUtMLGtCQUFBLEdBQXFCLENBQUMsS0FBS0ssWUFBQSxFQUFjO01BQ3pQLEtBQUtELFdBQUEsR0FBYztNQUNuQjtJQUNGO0lBQ0EsS0FBS0EsV0FBQSxLQUFnQixLQUFLMkIsY0FBQSxDQUFlLEtBQUsxQixZQUFBLEtBQWlCLEtBQUtKLGVBQUEsR0FBa0IsQ0FBQyxLQUFLSCxZQUFBLEdBQWUsS0FBS0EsWUFBWSxHQUFHLEtBQUtNLFdBQUEsR0FBYztFQUNwSjtFQU1BZ0IsUUFBQSxFQUFVO0lBQ1IsTUFBTTtRQUFFcHlCLEVBQUEsRUFBSS93QjtNQUFFLElBQUksS0FBSytWLE1BQUE7TUFBUTFWLENBQUEsR0FBSUwsQ0FBQSxDQUFFc1YsS0FBQSxDQUFNekIsTUFBQSxDQUFPMUcsYUFBQSxDQUFjLE1BQU1uTixDQUFBLENBQUU2VyxHQUFBLENBQUlDLGFBQWE7TUFBR3pWLENBQUEsR0FBSWlMLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU9pMUMsRUFBQSxDQUFHOXFDLEdBQUEsQ0FBSW1qQixPQUFBLEVBQVMsQ0FBQyxDQUFDO01BQUdqNEIsQ0FBQSxHQUFJdUssQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBT2kxQyxFQUFBLENBQUc5cUMsR0FBQSxDQUFJOHJDLGdCQUFBLEVBQWtCLENBQUMsQ0FBQztNQUFHeitDLENBQUEsR0FBSW9JLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU9pMUMsRUFBQSxDQUFHOXFDLEdBQUEsQ0FBSWtCLElBQUEsRUFBTSxDQUFDLENBQUM7SUFDcE4sT0FBT2hXLENBQUEsQ0FBRTdCLFdBQUEsQ0FBWWdFLENBQUMsR0FBRzdDLENBQUEsQ0FBRW5CLFdBQUEsQ0FBWTZCLENBQUMsR0FBRzFCLENBQUEsQ0FBRUgsV0FBQSxDQUFZbUIsQ0FBQyxHQUFHLEtBQUs0aEQsZ0JBQUEsR0FBbUIvK0MsQ0FBQSxFQUFHO01BQ3RGMnlCLFNBQUEsRUFBV3gyQixDQUFBO01BQ1gyNUIsT0FBQSxFQUFTMzRCO0lBQ1g7RUFDRjtFQU1BeWlELGVBQWU5akQsQ0FBQSxFQUFHO0lBQ2hCLElBQUksRUFBRSxLQUFLb2lELFlBQUEsSUFBZ0IsS0FBS0YsU0FBQSxHQUM5QjtJQUNGLE1BQU03aEQsQ0FBQSxHQUFJSyxNQUFBLENBQU9pUCxXQUFBO0lBQ2pCalAsTUFBQSxDQUFPczdDLFFBQUEsQ0FBUyxHQUFHaDhDLENBQUMsR0FBRyxLQUFLd2lELE1BQUEsSUFBVTloRCxNQUFBLENBQU9pUCxXQUFBLEdBQWN0UCxDQUFBLEVBQUc0RSxVQUFBLENBQVcsTUFBTTtNQUM3RSxLQUFLNitDLGNBQUEsQ0FBZTlqRCxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQztFQUNOO0VBTUEyakQsa0JBQWtCM2pELENBQUEsRUFBRztJQUNuQixJQUFJLENBQUMsS0FBS2tpRCxTQUFBLEVBQ1I7SUFDRmxpRCxDQUFBLENBQUUwakQsS0FBQSxLQUFVLFdBQVcsS0FBS25CLE1BQUEsR0FBU3ZpRCxDQUFBLENBQUV5akQsS0FBQSxFQUFPLEtBQUtqQixNQUFBLEdBQVN4aUQsQ0FBQSxDQUFFMGpELEtBQUE7SUFDOUQsTUFBTTtRQUFFSyxRQUFBLEVBQVUxakQsQ0FBQTtRQUFHMmpELE9BQUEsRUFBUzNpRCxDQUFBO1FBQUc0ZixLQUFBLEVBQU9sZjtNQUFFLElBQUksS0FBS2tpRCx3QkFBQSxDQUF5QjtNQUFHLy9DLENBQUEsR0FBSSxLQUFLbStDLE1BQUEsR0FBU2hpRCxDQUFBLElBQUssS0FBS2tpRCxNQUFBLEdBQVNsaUQsQ0FBQTtNQUFHZ0UsQ0FBQSxHQUFJLEtBQUtnK0MsTUFBQSxHQUFTaGhELENBQUEsSUFBSyxLQUFLa2hELE1BQUEsR0FBU2xoRCxDQUFBO0lBQzVKLEtBQUs2aUQsaUJBQUEsR0FBb0IsRUFBRWhnRCxDQUFBLElBQUtHLENBQUEsR0FBSSxLQUFLdTlDLHdCQUFBLEtBQTZCLEtBQUtzQyxpQkFBQSxHQUFvQixPQUFJLEtBQUt0Qyx3QkFBQSxHQUEyQixNQUFJLEtBQUt1QyxzQkFBQSxDQUF1QixHQUFHLEtBQUtsQixnQkFBQSxDQUFpQnY0QixLQUFBLENBQU13NEIsT0FBQSxHQUFVLFVBQVUsS0FBS2tCLG1CQUFBLENBQW9CLEdBQUcsS0FBS3J1QyxNQUFBLENBQU9zTixPQUFBLENBQVFDLEtBQUEsQ0FBTSxHQUFHdmhCLENBQUEsS0FBTSxXQUFXLEtBQUtzaUQsa0JBQUEsQ0FBbUJ0aUQsQ0FBQyxHQUFHLEtBQUt1aUQsZ0JBQUEsQ0FBaUIsR0FBR2h1QyxDQUFBLENBQUVyVSxHQUFBLENBQUksRUFBRStXLGVBQUEsQ0FBZ0I7RUFDL1c7RUFJQW1yQyx1QkFBQSxFQUF5QjtJQUN2QixLQUFLbEIsZ0JBQUEsQ0FBaUJ2NEIsS0FBQSxDQUFNN2EsSUFBQSxHQUFPLEdBQUcsS0FBS3d5QyxNQUFBLEdBQVMzaEQsTUFBQSxDQUFPZ1AsV0FBQSxNQUFpQixLQUFLdXpDLGdCQUFBLENBQWlCdjRCLEtBQUEsQ0FBTTlhLEdBQUEsR0FBTSxHQUFHLEtBQUsweUMsTUFBQSxHQUFTNWhELE1BQUEsQ0FBT2lQLFdBQUEsTUFBaUIsS0FBS3N6QyxnQkFBQSxDQUFpQnY0QixLQUFBLENBQU01YSxNQUFBLEdBQVMsZUFBZSxLQUFLd3lDLE1BQUEsR0FBUzVoRCxNQUFBLENBQU9pUCxXQUFBLE1BQWlCLEtBQUtzekMsZ0JBQUEsQ0FBaUJ2NEIsS0FBQSxDQUFNMWEsS0FBQSxHQUFRLGVBQWUsS0FBS3F5QyxNQUFBLEdBQVMzaEQsTUFBQSxDQUFPZ1AsV0FBQTtFQUMzVDtFQUlBNDBDLGlCQUFBLEVBQW1CO0lBQ2pCLE1BQU1qa0QsQ0FBQSxHQUFJLEtBQUswVixNQUFBLENBQU9pTCxZQUFBLENBQWFxQixlQUFBLENBQWdCLEtBQUtvZ0MsZUFBQSxDQUFnQixFQUFFLEVBQUUzdUMsUUFBQTtJQUM1RSxJQUFJLEtBQUtvd0MsaUJBQUEsSUFBcUIsQ0FBQzdqRCxDQUFBLEVBQzdCLFdBQVdnQixDQUFBLElBQUssS0FBS29oRCxlQUFBLEVBQ25CLEtBQUsxc0MsTUFBQSxDQUFPb3FCLGNBQUEsQ0FBZXliLGtCQUFBLENBQW1CdjZDLENBQUM7SUFDbkQsSUFBSSxDQUFDLEtBQUs2aUQsaUJBQUEsSUFBcUI3akQsQ0FBQSxFQUM3QixXQUFXZ0IsQ0FBQSxJQUFLLEtBQUtvaEQsZUFBQSxFQUNuQixLQUFLMXNDLE1BQUEsQ0FBT29xQixjQUFBLENBQWVrYixvQkFBQSxDQUFxQmg2QyxDQUFDO0VBQ3ZEO0VBSUEraUQsb0JBQUEsRUFBc0I7SUFDcEIsS0FBSzVCLE1BQUEsSUFBVSxLQUFLRixNQUFBLElBQVUsS0FBS1csZ0JBQUEsQ0FBaUJ2NEIsS0FBQSxDQUFNOWEsR0FBQSxHQUFNLEdBQUcsS0FBSzB5QyxNQUFBLEdBQVM1aEQsTUFBQSxDQUFPaVAsV0FBQSxNQUFpQixLQUFLc3pDLGdCQUFBLENBQWlCdjRCLEtBQUEsQ0FBTTVhLE1BQUEsR0FBUyxlQUFlLEtBQUsweUMsTUFBQSxHQUFTOWhELE1BQUEsQ0FBT2lQLFdBQUEsU0FBb0IsS0FBS3N6QyxnQkFBQSxDQUFpQnY0QixLQUFBLENBQU01YSxNQUFBLEdBQVMsZUFBZSxLQUFLd3lDLE1BQUEsR0FBUzVoRCxNQUFBLENBQU9pUCxXQUFBLE1BQWlCLEtBQUtzekMsZ0JBQUEsQ0FBaUJ2NEIsS0FBQSxDQUFNOWEsR0FBQSxHQUFNLEdBQUcsS0FBSzR5QyxNQUFBLEdBQVM5aEQsTUFBQSxDQUFPaVAsV0FBQSxPQUFrQixLQUFLNHlDLE1BQUEsSUFBVSxLQUFLRixNQUFBLElBQVUsS0FBS1ksZ0JBQUEsQ0FBaUJ2NEIsS0FBQSxDQUFNN2EsSUFBQSxHQUFPLEdBQUcsS0FBS3d5QyxNQUFBLEdBQVMzaEQsTUFBQSxDQUFPZ1AsV0FBQSxNQUFpQixLQUFLdXpDLGdCQUFBLENBQWlCdjRCLEtBQUEsQ0FBTTFhLEtBQUEsR0FBUSxlQUFlLEtBQUt1eUMsTUFBQSxHQUFTN2hELE1BQUEsQ0FBT2dQLFdBQUEsU0FBb0IsS0FBS3V6QyxnQkFBQSxDQUFpQnY0QixLQUFBLENBQU0xYSxLQUFBLEdBQVEsZUFBZSxLQUFLcXlDLE1BQUEsR0FBUzNoRCxNQUFBLENBQU9nUCxXQUFBLE1BQWlCLEtBQUt1ekMsZ0JBQUEsQ0FBaUJ2NEIsS0FBQSxDQUFNN2EsSUFBQSxHQUFPLEdBQUcsS0FBSzB5QyxNQUFBLEdBQVM3aEQsTUFBQSxDQUFPZ1AsV0FBQTtFQUN4c0I7RUFNQXUwQyx5QkFBQSxFQUEyQjtJQUN6QixNQUFNNWpELENBQUEsR0FBSU4sUUFBQSxDQUFTeVosSUFBQSxDQUFLeVcsV0FBQSxHQUFjO01BQUc1dUIsQ0FBQSxHQUFJLEtBQUttaEQsTUFBQSxHQUFTOWhELE1BQUEsQ0FBT2lQLFdBQUE7TUFBYTVOLENBQUEsR0FBSWhDLFFBQUEsQ0FBU2dqRCxnQkFBQSxDQUFpQjFpRCxDQUFBLEVBQUdnQixDQUFDO01BQUc2QyxDQUFBLEdBQUksS0FBSzZSLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYXkxQixtQkFBQSxDQUFvQjEwQyxDQUFDO0lBQ3RLLElBQUlzQyxDQUFBO0lBQ0pILENBQUEsS0FBTSxXQUFXRyxDQUFBLEdBQUksS0FBSzBSLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWMsTUFBQSxDQUFPbkQsU0FBQSxDQUFXZ0QsQ0FBQSxJQUFNQSxDQUFBLENBQUU5TixNQUFBLEtBQVczUCxDQUFBLENBQUUyUCxNQUFNO0lBQzNGLE1BQU10UCxDQUFBLEdBQUksS0FBS3dSLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYW9ELFNBQUEsQ0FBVXZRLE1BQUEsQ0FBTzFHLGFBQUEsQ0FBYyxNQUFNa1AsQ0FBQSxDQUFFeEYsR0FBQSxDQUFJMEgsT0FBTztNQUFHN1osQ0FBQSxHQUFJc3pDLE1BQUEsQ0FBT2gwQyxRQUFBLENBQVN0RCxNQUFBLENBQU9xRCxnQkFBQSxDQUFpQlEsQ0FBQyxFQUFFMEwsS0FBQSxFQUFPLEVBQUUsSUFBSTtNQUFHckwsQ0FBQSxHQUFJdkUsQ0FBQSxHQUFJcUUsQ0FBQTtNQUFHbUYsQ0FBQSxHQUFJeEosQ0FBQSxHQUFJcUUsQ0FBQTtJQUMxSyxPQUFPO01BQ0x1YyxLQUFBLEVBQU81YyxDQUFBO01BQ1AyL0MsT0FBQSxFQUFTcC9DLENBQUE7TUFDVG0vQyxRQUFBLEVBQVVsNkM7SUFDWjtFQUNGO0VBTUEwNkMsb0JBQW9CdmtELENBQUEsRUFBRztJQUNyQixLQUFLa2tELGlCQUFBLElBQXFCLEtBQUtudUMsTUFBQSxDQUFPb3FCLGNBQUEsQ0FBZXliLGtCQUFBLENBQW1CNTdDLENBQUMsR0FBRyxLQUFLeWlELGVBQUEsQ0FBZ0I5NkMsSUFBQSxDQUFLM0gsQ0FBQztFQUN6RztFQU1BcWtELG1CQUFtQnJrRCxDQUFBLEVBQUc7SUFDcEIsTUFBTUssQ0FBQSxHQUFJLEtBQUtvaUQsZUFBQSxDQUFnQixLQUFLQSxlQUFBLENBQWdCei9DLE1BQUEsR0FBUyxPQUFPaEQsQ0FBQTtNQUFHcUIsQ0FBQSxHQUFJLEtBQUtvaEQsZUFBQSxDQUFnQnovQyxNQUFBO01BQVFqQixDQUFBLEdBQUk7TUFBR21DLENBQUEsR0FBSTtNQUFJRyxDQUFBLEdBQUk7SUFDM0gsSUFBSWhFLENBQUEsRUFDRjtJQUNGLE1BQU1rRSxDQUFBLEdBQUksS0FBS2srQyxlQUFBLENBQWdCcGhELENBQUEsR0FBSSxLQUFLLEtBQUtvaEQsZUFBQSxDQUFnQnBoRCxDQUFBLEdBQUksS0FBSztJQUN0RSxJQUFJcUQsQ0FBQSxHQUFJTCxDQUFBO0lBQ1JoRCxDQUFBLEdBQUksTUFBTXFELENBQUEsR0FBSUgsQ0FBQSxHQUFJeEMsQ0FBQSxHQUFJbUMsQ0FBQTtJQUN0QixNQUFNVSxDQUFBLEdBQUk1RSxDQUFBLEdBQUksS0FBS3lpRCxlQUFBLENBQWdCcGhELENBQUEsR0FBSSxNQUFNcUQsQ0FBQSxLQUFNM0MsQ0FBQTtNQUFHOEgsQ0FBQSxHQUFJN0osQ0FBQSxHQUFJLEtBQUt5aUQsZUFBQSxDQUFnQnBoRCxDQUFBLEdBQUksTUFBTXFELENBQUEsS0FBTVIsQ0FBQTtNQUFHb1osQ0FBQSxHQUFJLEVBQUUxWSxDQUFBLElBQUtpRixDQUFBLElBQUtuRixDQUFBLEtBQU1MLENBQUE7SUFDNUgsSUFBSSxDQUFDaVosQ0FBQSxLQUFNdGQsQ0FBQSxHQUFJLEtBQUt5aUQsZUFBQSxDQUFnQnBoRCxDQUFBLEdBQUksTUFBTSxLQUFLb2hELGVBQUEsQ0FBZ0JwaEQsQ0FBQSxHQUFJLE9BQU8sU0FBUztNQUNyRixJQUFJb2MsQ0FBQSxHQUFJLEtBQUtnbEMsZUFBQSxDQUFnQnBoRCxDQUFBLEdBQUksS0FBSyxLQUFLckIsQ0FBQTtNQUMzQyxLQUFLeWQsQ0FBQSxFQUFHQSxDQUFBLElBQUt6ZCxDQUFBLEVBQUd5ZCxDQUFBLElBQ2QsS0FBSzhtQyxtQkFBQSxDQUFvQjltQyxDQUFDO01BQzVCO0lBQ0Y7SUFDQSxJQUFJLENBQUNILENBQUEsSUFBS3RkLENBQUEsR0FBSSxLQUFLeWlELGVBQUEsQ0FBZ0JwaEQsQ0FBQSxHQUFJLElBQUk7TUFDekMsU0FBU29jLENBQUEsR0FBSSxLQUFLZ2xDLGVBQUEsQ0FBZ0JwaEQsQ0FBQSxHQUFJLEtBQUssR0FBR29jLENBQUEsSUFBS3pkLENBQUEsRUFBR3lkLENBQUEsSUFDcEQsS0FBSzhtQyxtQkFBQSxDQUFvQjltQyxDQUFDO01BQzVCO0lBQ0Y7SUFDQSxJQUFJLENBQUNILENBQUEsRUFDSDtJQUNGLElBQUlDLENBQUEsR0FBSWxjLENBQUEsR0FBSTtNQUFHbWMsQ0FBQTtJQUNmLEtBQUt4ZCxDQUFBLEdBQUksS0FBS3lpRCxlQUFBLENBQWdCcGhELENBQUEsR0FBSSxLQUFLbWMsQ0FBQSxHQUFJQSxDQUFBLEtBQU14ZCxDQUFBLEdBQUksS0FBS3lpRCxlQUFBLENBQWdCbGxDLENBQUEsSUFBS0MsQ0FBQSxHQUFJQSxDQUFBLEtBQU14ZCxDQUFBLEdBQUksS0FBS3lpRCxlQUFBLENBQWdCbGxDLENBQUEsR0FBSUMsQ0FBQSxDQUFFLElBQ3RILEtBQUswbUMsaUJBQUEsSUFBcUIsS0FBS251QyxNQUFBLENBQU9vcUIsY0FBQSxDQUFla2Isb0JBQUEsQ0FBcUIsS0FBS29ILGVBQUEsQ0FBZ0JsbEMsQ0FBQSxDQUFFLEdBQUcsS0FBS2tsQyxlQUFBLENBQWdCbDVDLEdBQUEsQ0FBSSxHQUFHZ1UsQ0FBQTtFQUNwSTtBQUNGO0FBQ0EsSUFBTWluQyxFQUFBLEdBQU4sY0FBaUJwdkMsQ0FBQSxDQUFFO0VBTWpCLE1BQU00SyxPQUFPaGdCLENBQUEsRUFBRztJQUNkLE9BQU8sSUFBSStJLE9BQUEsQ0FBUzFJLENBQUEsSUFBTTtNQUN4QixNQUFNO1FBQUUrZ0IsS0FBQSxFQUFPL2YsQ0FBQTtRQUFHMmYsWUFBQSxFQUFjamY7TUFBRSxJQUFJLEtBQUtnVSxNQUFBO01BQzNDLElBQUkvVixDQUFBLENBQUVnRCxNQUFBLEtBQVcsR0FDZmpCLENBQUEsQ0FBRStlLE1BQUEsQ0FBTyxPQUNOO1FBQ0gsTUFBTTVjLENBQUEsR0FBSWxFLENBQUEsQ0FBRXVOLEdBQUEsQ0FBSSxDQUFDO1VBQUVlLElBQUEsRUFBTWpLLENBQUE7VUFBR3lFLElBQUEsRUFBTXZFLENBQUE7VUFBR3laLEtBQUEsRUFBT3RaLENBQUE7VUFBR2lQLEVBQUEsRUFBSS9PO1FBQUUsTUFBTTtVQUN6RHZELENBQUEsQ0FBRW9qRCxTQUFBLENBQVUvakMsR0FBQSxDQUFJcmMsQ0FBQyxNQUFNLFVBQU8yRCxDQUFBLENBQUUsWUFBUzNELENBQUEsc0VBQW9FLE1BQU0sR0FBR0UsQ0FBQSxHQUFJLEtBQUttZ0Qsc0JBQUEsQ0FBdUJyZ0QsQ0FBQSxFQUFHRSxDQUFBLEVBQUdLLENBQUMsR0FBR1AsQ0FBQSxHQUFJaEQsQ0FBQSxDQUFFc2pELFFBQUE7VUFDdEssSUFBSTk2QyxDQUFBO1VBQ0osSUFBSTtZQUNGQSxDQUFBLEdBQUk5SCxDQUFBLENBQUVpZ0IsWUFBQSxDQUFhO2NBQ2pCck8sRUFBQSxFQUFJL08sQ0FBQTtjQUNKbVcsSUFBQSxFQUFNMVcsQ0FBQTtjQUNOeUUsSUFBQSxFQUFNdkUsQ0FBQTtjQUNOeVosS0FBQSxFQUFPdFo7WUFDVCxDQUFDO1VBQ0gsU0FBU2lkLENBQUEsRUFBUDtZQUNBN1osQ0FBQSxDQUFFLGFBQVV6RCxDQUFBLHlDQUF1QyxTQUFTO2NBQzFEeUUsSUFBQSxFQUFNdkUsQ0FBQTtjQUNOaEUsS0FBQSxFQUFPb2hCO1lBQ1QsQ0FBQyxHQUFHcGQsQ0FBQSxHQUFJLEtBQUttZ0Qsc0JBQUEsQ0FBdUJyZ0QsQ0FBQSxFQUFHRSxDQUFBLEVBQUdLLENBQUMsR0FBR1AsQ0FBQSxHQUFJaEQsQ0FBQSxDQUFFc2pELFFBQUEsRUFBVTk2QyxDQUFBLEdBQUk5SCxDQUFBLENBQUVpZ0IsWUFBQSxDQUFhO2NBQy9Fck8sRUFBQSxFQUFJL08sQ0FBQTtjQUNKbVcsSUFBQSxFQUFNMVcsQ0FBQTtjQUNOeUUsSUFBQSxFQUFNdkUsQ0FBQTtjQUNOeVosS0FBQSxFQUFPdFo7WUFDVCxDQUFDO1VBQ0g7VUFDQSxPQUFPbUYsQ0FBQTtRQUNULENBQUM7UUFDRDlILENBQUEsQ0FBRThmLFVBQUEsQ0FBVzNkLENBQUM7TUFDaEI7TUFDQXhELE1BQUEsQ0FBT29FLG1CQUFBLENBQW9CLE1BQU07UUFDL0J6RSxDQUFBLENBQUU7TUFDSixHQUFHO1FBQUV1a0MsT0FBQSxFQUFTO01BQUksQ0FBQztJQUNyQixDQUFDO0VBQ0g7RUFRQThmLHVCQUF1QjFrRCxDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUM5QixNQUFNO01BQUUrZixLQUFBLEVBQU9yZjtJQUFFLElBQUksS0FBS2dVLE1BQUE7SUFDMUIsSUFBSTdSLENBQUEsR0FBSWxFLENBQUE7SUFDUixJQUFJK0IsQ0FBQSxDQUFFNmlELFdBQUEsQ0FBWWxrQyxHQUFBLENBQUkxZ0IsQ0FBQyxHQUFHO01BQ3hCLE1BQU1xRSxDQUFBLEdBQUl0QyxDQUFBLENBQUU2aUQsV0FBQSxDQUFZM2lELEdBQUEsQ0FBSWpDLENBQUMsRUFBRW1SLE9BQUE7TUFDL0I5TSxDQUFBLEtBQU0sVUFBVUEsQ0FBQSxDQUFFLEdBQUc4d0IsS0FBQSxLQUFVLFdBQVdqeEIsQ0FBQSxHQUFJRyxDQUFBLENBQUUsR0FBRzh3QixLQUFBO0lBQ3JEO0lBQ0EsT0FBTztNQUNMMHZCLFNBQUEsRUFBVztRQUNUbHhDLEVBQUEsRUFBSXRTLENBQUE7UUFDSmlOLElBQUEsRUFBTXRPLENBQUE7UUFDTjhJLElBQUEsRUFBTXpJO01BQ1I7TUFDQTgwQixLQUFBLEVBQU9qeEI7SUFDVDtFQUNGO0FBQ0Y7QUFDQSxJQUFNNGdELEVBQUEsR0FBTixjQUFpQjF2QyxDQUFBLENBQUU7RUFNakIsTUFBTW5CLEtBQUEsRUFBTztJQUNYLE1BQU07UUFBRStNLFlBQUEsRUFBY2hoQixDQUFBO1FBQUdvaEIsS0FBQSxFQUFPL2dCO01BQUUsSUFBSSxLQUFLMFYsTUFBQTtNQUFRMVUsQ0FBQSxHQUFJckIsQ0FBQSxDQUFFOGhCLE1BQUE7TUFBUS9mLENBQUEsR0FBSSxFQUFDO0lBQ3RFLElBQUk7TUFDRlYsQ0FBQSxDQUFFUyxPQUFBLENBQVN5QyxDQUFBLElBQU07UUFDZnhDLENBQUEsQ0FBRTRGLElBQUEsQ0FBSyxLQUFLbzlDLFlBQUEsQ0FBYXhnRCxDQUFDLENBQUM7TUFDN0IsQ0FBQztNQUNELE1BQU1MLENBQUEsR0FBSSxNQUFNNkUsT0FBQSxDQUFRNmUsR0FBQSxDQUFJN2xCLENBQUM7UUFBR3NDLENBQUEsR0FBSSxNQUFNdW9CLEVBQUEsQ0FBRzFvQixDQUFBLEVBQUlLLENBQUEsSUFBTWxFLENBQUEsQ0FBRWdoQixVQUFBLENBQVdwZixHQUFBLENBQUlzQyxDQUFDLEVBQUUyYSxjQUFjO01BQ3pGLE9BQU8sS0FBSzhsQyxVQUFBLENBQVczZ0QsQ0FBQztJQUMxQixTQUFTSCxDQUFBLEVBQVA7TUFDQThELENBQUEsQ0FBRSxxQ0FBcUMsU0FBUzlELENBQUM7SUFDbkQ7RUFDRjtFQU9BLE1BQU02Z0QsYUFBYS9rRCxDQUFBLEVBQUc7SUFDcEIsTUFBTUssQ0FBQSxHQUFJLE1BQU1MLENBQUEsQ0FBRWlVLElBQUEsQ0FBSztNQUFHNVMsQ0FBQSxHQUFJaEIsQ0FBQSxLQUFLLE1BQU1MLENBQUEsQ0FBRWtVLFFBQUEsQ0FBUzdULENBQUEsQ0FBRXlJLElBQUk7SUFDMUQsT0FBTztNQUNMLEdBQUd6SSxDQUFBO01BQ0g0a0QsT0FBQSxFQUFTNWpEO0lBQ1g7RUFDRjtFQU9BMmpELFdBQVdobEQsQ0FBQSxFQUFHO0lBQ1osTUFBTUssQ0FBQSxHQUFJLEVBQUM7SUFDWCxPQUFPTCxDQUFBLENBQUU4QixPQUFBLENBQVEsQ0FBQztNQUFFNlIsRUFBQSxFQUFJdFMsQ0FBQTtNQUFHMFosSUFBQSxFQUFNaFosQ0FBQTtNQUFHK0csSUFBQSxFQUFNNUUsQ0FBQTtNQUFHOFosS0FBQSxFQUFPM1osQ0FBQTtNQUFHNGdELE9BQUEsRUFBUzFnRDtJQUFFLE1BQU07TUFDdEUsSUFBSSxDQUFDQSxDQUFBLEVBQUc7UUFDTnVELENBQUEsQ0FBRSxhQUFVL0YsQ0FBQSw0Q0FBMEM7UUFDdEQ7TUFDRjtNQUNBLElBQUlBLENBQUEsS0FBTSxLQUFLZ1UsTUFBQSxDQUFPcUwsS0FBQSxDQUFNdWpDLFFBQUEsRUFBVTtRQUNwQ3RrRCxDQUFBLENBQUVzSCxJQUFBLENBQUt6RCxDQUFDO1FBQ1I7TUFDRjtNQUNBLE1BQU1RLENBQUEsR0FBSTtRQUNSaVAsRUFBQSxFQUFJdFMsQ0FBQTtRQUNKaU4sSUFBQSxFQUFNdk0sQ0FBQTtRQUNOK0csSUFBQSxFQUFNNUUsQ0FBQTtRQUNOLElBQUcsQ0FBQ3dFLENBQUEsQ0FBRXJFLENBQUMsS0FBSztVQUNWMlosS0FBQSxFQUFPM1o7UUFDVDtNQUNGO01BQ0FoRSxDQUFBLENBQUVzSCxJQUFBLENBQUtqRCxDQUFDO0lBQ1YsQ0FBQyxHQUFHO01BQ0ZnYixJQUFBLEVBQU0sRUFBaUIsbUJBQUkzYSxJQUFBLENBQUs7TUFDaEMrYyxNQUFBLEVBQVF6aEIsQ0FBQTtNQUNSNmtELE9BQUEsRUFBUztJQUNYO0VBQ0Y7QUFDRjtBQUFBLENBQ0MsWUFBVztFQUNWLElBQUk7SUFDRixJQUFJLE9BQU9ubEQsUUFBQSxHQUFXLEtBQUs7TUFDekIsSUFBSWUsQ0FBQSxHQUFJZixRQUFBLENBQVNFLGFBQUEsQ0FBYyxPQUFPO01BQ3RDYSxDQUFBLENBQUVaLFdBQUEsQ0FBWUgsUUFBQSxDQUFTSSxjQUFBLENBQWUsOFVBQThVLENBQUMsR0FBR0osUUFBQSxDQUFTSyxJQUFBLENBQUtGLFdBQUEsQ0FBWVksQ0FBQztJQUNyWjtFQUNGLFNBQVNkLENBQUEsRUFBUDtJQUNBTSxPQUFBLENBQVFDLEtBQUEsQ0FBTSxrQ0FBa0NQLENBQUM7RUFDbkQ7QUFDRixHQUFHO0FBQ0gsSUFBTW1sRCxFQUFBLEdBQUs7QUFDWCxTQUFTQyxHQUFHdGtELENBQUEsRUFBRztFQUNiLE1BQU1kLENBQUEsR0FBSUQsUUFBQSxDQUFTRSxhQUFBLENBQWMsS0FBSztFQUN0Q0QsQ0FBQSxDQUFFK08sU0FBQSxHQUFZak8sQ0FBQSxDQUFFMnBCLElBQUEsQ0FBSztFQUNyQixNQUFNcHFCLENBQUEsR0FBSU4sUUFBQSxDQUFTeUQsc0JBQUEsQ0FBdUI7RUFDMUMsT0FBT25ELENBQUEsQ0FBRTBNLE1BQUEsQ0FBTyxHQUFHdEosS0FBQSxDQUFNb0wsSUFBQSxDQUFLN08sQ0FBQSxDQUFFMk8sVUFBVSxDQUFDLEdBQUd0TyxDQUFBO0FBQ2hEO0FBU0EsSUFBTWdsRCxFQUFBLEdBQU4sTUFBUztFQU9QLFdBQVdDLG9CQUFBLEVBQXNCO0lBQy9CLE9BQU87RUFDVDtFQVVBN2pELFlBQVk7SUFBRXFILElBQUEsRUFBTTlJLENBQUE7SUFBRzRULE1BQUEsRUFBUXZULENBQUE7SUFBR2loQixHQUFBLEVBQUtqZ0IsQ0FBQTtJQUFHaWIsUUFBQSxFQUFVdmE7RUFBRSxHQUFHO0lBQ3ZELEtBQUt1ZixHQUFBLEdBQU1qZ0IsQ0FBQSxFQUFHLEtBQUtpYixRQUFBLEdBQVd2YSxDQUFBLEVBQUcsS0FBS3dqRCxJQUFBLEdBQU87TUFDM0MzM0IsS0FBQSxFQUFPLEtBQUt0TSxHQUFBLENBQUlzRSxNQUFBLENBQU9nSSxLQUFBO01BQ3ZCdlAsT0FBQSxFQUFTO0lBQ1gsR0FBRyxLQUFLL0IsUUFBQSxLQUFhLEtBQUtrcEMsT0FBQSxHQUFVLEtBQUtBLE9BQUEsQ0FBUXo5QyxJQUFBLENBQUssSUFBSSxJQUFJLEtBQUswOUMsWUFBQSxHQUFlcGxELENBQUEsQ0FBRTBxQixXQUFBLEdBQWMxcUIsQ0FBQSxDQUFFMHFCLFdBQUEsR0FBY3M2QixFQUFBLENBQUdDLG1CQUFBLEVBQXFCLEtBQUtJLEtBQUEsR0FBUTFsRCxDQUFBLElBQUssQ0FBQyxHQUFHLEtBQUsybEQsUUFBQSxHQUFXLE1BQU0sS0FBS0MsY0FBQSxHQUFpQnZsRCxDQUFBLENBQUV3bEQsYUFBQSxJQUFpQjtFQUNqTztFQU9BTCxRQUFReGxELENBQUEsRUFBRztJQUNULElBQUlBLENBQUEsQ0FBRWsyQyxJQUFBLEtBQVMsZUFBZWwyQyxDQUFBLENBQUVrMkMsSUFBQSxLQUFTLFlBQVksQ0FBQyxLQUFLeVAsUUFBQSxFQUN6RDtJQUNGLE1BQU07TUFBRW4zQyxXQUFBLEVBQWFuTztJQUFFLElBQUksS0FBS3NsRCxRQUFBO0lBQ2hDdGxELENBQUEsS0FBTSxPQUFPLEtBQUtzbEQsUUFBQSxDQUFTNTJDLFNBQUEsR0FBWTtFQUN6QztFQU9BKzJDLFNBQUEsRUFBVztJQUNULE1BQU05bEQsQ0FBQSxHQUFJRCxRQUFBLENBQVNFLGFBQUEsQ0FBYyxLQUFLO0lBQ3RDLE9BQU9ELENBQUEsQ0FBRTRNLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEtBQUswNEMsSUFBQSxDQUFLbG5DLE9BQUEsRUFBUyxLQUFLa25DLElBQUEsQ0FBSzMzQixLQUFLLEdBQUc1dEIsQ0FBQSxDQUFFb08sZUFBQSxHQUFrQixTQUFTcE8sQ0FBQSxDQUFFMlEsT0FBQSxDQUFRbzFDLGlCQUFBLEdBQW9CLEtBQUt6a0MsR0FBQSxDQUFJbEwsSUFBQSxDQUFLL1YsQ0FBQSxDQUFFLEtBQUtvbEQsWUFBWSxHQUFHLEtBQUtDLEtBQUEsQ0FBTTU0QyxJQUFBLEtBQVM5TSxDQUFBLENBQUUrTyxTQUFBLEdBQVksS0FBSzIyQyxLQUFBLENBQU01NEMsSUFBQSxHQUFPLEtBQUt3UCxRQUFBLEtBQWF0YyxDQUFBLENBQUVvTyxlQUFBLEdBQWtCLFFBQVFwTyxDQUFBLENBQUU0VSxnQkFBQSxDQUFpQixTQUFTLEtBQUs0d0MsT0FBTyxJQUFJeGxELENBQUE7RUFDM1M7RUFNQWdnQixPQUFBLEVBQVM7SUFDUCxPQUFPLEtBQUsybEMsUUFBQSxHQUFXLEtBQUtHLFFBQUEsQ0FBUyxHQUFHLEtBQUtILFFBQUE7RUFDL0M7RUFRQXhtQyxNQUFNbmYsQ0FBQSxFQUFHO0lBQ1AsSUFBSSxDQUFDLEtBQUsybEQsUUFBQSxFQUNSO0lBQ0YsS0FBS0QsS0FBQSxDQUFNNTRDLElBQUEsSUFBUTlNLENBQUEsQ0FBRThNLElBQUE7SUFDckIsTUFBTXpNLENBQUEsR0FBSStrRCxFQUFBLENBQUdwbEQsQ0FBQSxDQUFFOE0sSUFBSTtJQUNuQixLQUFLNjRDLFFBQUEsQ0FBU3psRCxXQUFBLENBQVlHLENBQUMsR0FBRyxLQUFLc2xELFFBQUEsQ0FBU2x0QyxTQUFBLENBQVU7RUFDeEQ7RUFTQXZFLFNBQVNsVSxDQUFBLEVBQUc7SUFDVixPQUFPLEVBQUVBLENBQUEsQ0FBRThNLElBQUEsQ0FBSzJkLElBQUEsQ0FBSyxNQUFNLE1BQU0sQ0FBQyxLQUFLbTdCLGNBQUE7RUFDekM7RUFRQTN4QyxLQUFLalUsQ0FBQSxFQUFHO0lBQ04sT0FBTztNQUNMOE0sSUFBQSxFQUFNOU0sQ0FBQSxDQUFFK087SUFDVjtFQUNGO0VBTUFpd0MsUUFBUWgvQyxDQUFBLEVBQUc7SUFDVCxNQUFNSyxDQUFBLEdBQUk7TUFDUnlNLElBQUEsRUFBTTlNLENBQUEsQ0FBRTI0QyxNQUFBLENBQU83dkMsSUFBQSxDQUFLaUc7SUFDdEI7SUFDQSxLQUFLMjJDLEtBQUEsR0FBUXJsRCxDQUFBLEVBQUdLLE1BQUEsQ0FBT3NsRCxxQkFBQSxDQUFzQixNQUFNO01BQ2pELEtBQUtMLFFBQUEsS0FBYSxLQUFLQSxRQUFBLENBQVM1MkMsU0FBQSxHQUFZLEtBQUsyMkMsS0FBQSxDQUFNNTRDLElBQUEsSUFBUTtJQUNqRSxDQUFDO0VBQ0g7RUFLQSxXQUFXK04saUJBQUEsRUFBbUI7SUFDNUIsT0FBTztNQUNMVSxNQUFBLEVBQVE7TUFFUkUsTUFBQSxFQUFRO0lBRVY7RUFDRjtFQUtBLFdBQVd3RCxTQUFBLEVBQVc7SUFDcEIsT0FBTztNQUNMblMsSUFBQSxFQUFNO1FBQ0pzakMsRUFBQSxFQUFJO01BQ047SUFDRjtFQUNGO0VBTUEsV0FBV3pJLG9CQUFBLEVBQXNCO0lBQy9CLE9BQU87RUFDVDtFQU9BLFdBQVdvWCxZQUFBLEVBQWM7SUFDdkIsT0FBTztNQUNMdHpCLElBQUEsRUFBTSxDQUFDLEdBQUc7SUFDWjtFQUNGO0VBTUEsV0FBV3RhLFFBQUEsRUFBVTtJQUNuQixPQUFPO01BQ0xnSyxJQUFBLEVBQU1ncUMsRUFBQTtNQUNOaHdCLEtBQUEsRUFBTztJQUNUO0VBQ0Y7QUFDRjtBQUNBLElBQU04d0IsRUFBQSxHQUFOLE1BQVM7RUFDUHhrRCxZQUFBLEVBQWM7SUFDWixLQUFLeWtELFdBQUEsR0FBYztFQUNyQjtFQU9BLFdBQVdqbkMsU0FBQSxFQUFXO0lBQ3BCLE9BQU87TUFDTDNJLENBQUEsRUFBRyxDQUFDO0lBQ047RUFDRjtFQUlBMEosT0FBQSxFQUFTO0lBQ1AsT0FBTztNQUNMN0UsSUFBQSxFQUFNeVksRUFBQTtNQUNOdnFCLElBQUEsRUFBTTtNQUNOMHNCLFVBQUEsRUFBWUEsQ0FBQSxLQUFNO1FBQ2hCaDJCLFFBQUEsQ0FBUzJaLFdBQUEsQ0FBWSxLQUFLd3NDLFdBQVc7TUFDdkM7TUFDQXh2QixRQUFBLEVBQVVBLENBQUEsS0FBTTMyQixRQUFBLENBQVNvbUQsaUJBQUEsQ0FBa0IsS0FBS0QsV0FBVztJQUM3RDtFQUNGO0VBTUEsSUFBSTlpQixTQUFBLEVBQVc7SUFDYixPQUFPO0VBQ1Q7QUFDRjtBQUNBNmlCLEVBQUEsQ0FBR3BmLFFBQUEsR0FBVztBQUNkb2YsRUFBQSxDQUFHOXdCLEtBQUEsR0FBUTtBQUNYLElBQU1peEIsRUFBQSxHQUFOLE1BQVM7RUFDUDNrRCxZQUFBLEVBQWM7SUFDWixLQUFLeWtELFdBQUEsR0FBYyxVQUFVLEtBQUtydkMsR0FBQSxHQUFNO01BQ3RDb1gsTUFBQSxFQUFRO01BQ1JvNEIsWUFBQSxFQUFjO01BQ2RDLGNBQUEsRUFBZ0I7SUFDbEIsR0FBRyxLQUFLaHhDLEtBQUEsR0FBUTtNQUNkMlksTUFBQSxFQUFRO0lBQ1Y7RUFDRjtFQU9BLFdBQVdoUCxTQUFBLEVBQVc7SUFDcEIsT0FBTztNQUNMbGQsQ0FBQSxFQUFHLENBQUM7SUFDTjtFQUNGO0VBSUFpZSxPQUFBLEVBQVM7SUFDUCxPQUFPLEtBQUsxSyxLQUFBLENBQU0yWSxNQUFBLEdBQVNsdUIsUUFBQSxDQUFTRSxhQUFBLENBQWMsUUFBUSxHQUFHLEtBQUtxVixLQUFBLENBQU0yWSxNQUFBLENBQU8zZixJQUFBLEdBQU8sVUFBVSxLQUFLZ0gsS0FBQSxDQUFNMlksTUFBQSxDQUFPcmhCLFNBQUEsQ0FBVUMsR0FBQSxDQUFJLEtBQUtnSyxHQUFBLENBQUlvWCxNQUFBLEVBQVEsS0FBS3BYLEdBQUEsQ0FBSXl2QyxjQUFjLEdBQUcsS0FBS2h4QyxLQUFBLENBQU0yWSxNQUFBLENBQU9sZixTQUFBLEdBQVlvbEIsRUFBQSxFQUFJLEtBQUs3ZSxLQUFBLENBQU0yWSxNQUFBO0VBQzFOO0VBSUFnYSxTQUFBLEVBQVc7SUFDVGxvQyxRQUFBLENBQVMyWixXQUFBLENBQVksS0FBS3dzQyxXQUFXO0VBQ3ZDO0VBSUFwZSxXQUFBLEVBQWE7SUFDWCxNQUFNOW5DLENBQUEsR0FBSUQsUUFBQSxDQUFTb21ELGlCQUFBLENBQWtCLEtBQUtELFdBQVc7SUFDckQsT0FBTyxLQUFLNXdDLEtBQUEsQ0FBTTJZLE1BQUEsQ0FBT3JoQixTQUFBLENBQVUwUyxNQUFBLENBQU8sS0FBS3pJLEdBQUEsQ0FBSXd2QyxZQUFBLEVBQWNybUQsQ0FBQyxHQUFHQSxDQUFBO0VBQ3ZFO0VBSUEsSUFBSW9qQyxTQUFBLEVBQVc7SUFDYixPQUFPO0VBQ1Q7QUFDRjtBQUNBZ2pCLEVBQUEsQ0FBR3ZmLFFBQUEsR0FBVztBQUNkdWYsRUFBQSxDQUFHanhCLEtBQUEsR0FBUTtBQUNYLElBQU1veEIsRUFBQSxHQUFOLE1BQVM7RUFJUDlrRCxZQUFZO0lBQUU2ZixHQUFBLEVBQUt0aEI7RUFBRSxHQUFHO0lBQ3RCLEtBQUt3bUQsV0FBQSxHQUFjLGNBQWMsS0FBS0MsYUFBQSxHQUFnQixVQUFVLEtBQUtDLFNBQUEsR0FBWSxJQUFJLEtBQUs3dkMsR0FBQSxHQUFNO01BQzlGb1gsTUFBQSxFQUFRO01BQ1JvNEIsWUFBQSxFQUFjO01BQ2RDLGNBQUEsRUFBZ0I7TUFDaEJLLFlBQUEsRUFBYztNQUNkNTRCLEtBQUEsRUFBTztNQUNQNjRCLFdBQUEsRUFBYTtJQUNmLEdBQUcsS0FBS3R4QyxLQUFBLEdBQVE7TUFDZDJZLE1BQUEsRUFBUTtNQUNSRixLQUFBLEVBQU87SUFDVCxHQUFHLEtBQUs4NEIsV0FBQSxHQUFjLE9BQUksS0FBSzMxQyxPQUFBLEdBQVVsUixDQUFBLENBQUVrUixPQUFBLEVBQVMsS0FBS0YsYUFBQSxHQUFnQmhSLENBQUEsQ0FBRWdSLGFBQUEsRUFBZSxLQUFLcVUsUUFBQSxHQUFXcmxCLENBQUEsQ0FBRXFsQixRQUFBLEVBQVUsS0FBS2pQLElBQUEsR0FBT3BXLENBQUEsQ0FBRW9XLElBQUEsRUFBTSxLQUFLSSxTQUFBLEdBQVksSUFBSUYsQ0FBQSxDQUFFO0VBQ25LO0VBT0EsV0FBVzJJLFNBQUEsRUFBVztJQUNwQixPQUFPO01BQ0wxYSxDQUFBLEVBQUc7UUFDRHdHLElBQUEsRUFBTTtRQUNONkssTUFBQSxFQUFRO1FBQ1I4VCxHQUFBLEVBQUs7TUFDUDtJQUNGO0VBQ0Y7RUFJQTFKLE9BQUEsRUFBUztJQUNQLE9BQU8sS0FBSzFLLEtBQUEsQ0FBTTJZLE1BQUEsR0FBU2x1QixRQUFBLENBQVNFLGFBQUEsQ0FBYyxRQUFRLEdBQUcsS0FBS3FWLEtBQUEsQ0FBTTJZLE1BQUEsQ0FBTzNmLElBQUEsR0FBTyxVQUFVLEtBQUtnSCxLQUFBLENBQU0yWSxNQUFBLENBQU9yaEIsU0FBQSxDQUFVQyxHQUFBLENBQUksS0FBS2dLLEdBQUEsQ0FBSW9YLE1BQUEsRUFBUSxLQUFLcFgsR0FBQSxDQUFJeXZDLGNBQWMsR0FBRyxLQUFLaHhDLEtBQUEsQ0FBTTJZLE1BQUEsQ0FBT2xmLFNBQUEsR0FBWXFsQixFQUFBLEVBQUksS0FBSzllLEtBQUEsQ0FBTTJZLE1BQUE7RUFDMU47RUFJQTRaLGNBQUEsRUFBZ0I7SUFDZCxPQUFPLEtBQUt2eUIsS0FBQSxDQUFNeVksS0FBQSxHQUFRaHVCLFFBQUEsQ0FBU0UsYUFBQSxDQUFjLE9BQU8sR0FBRyxLQUFLcVYsS0FBQSxDQUFNeVksS0FBQSxDQUFNaEQsV0FBQSxHQUFjLEtBQUszVSxJQUFBLENBQUsvVixDQUFBLENBQUUsWUFBWSxHQUFHLEtBQUtpVixLQUFBLENBQU15WSxLQUFBLENBQU0rNEIsWUFBQSxHQUFlLFFBQVEsS0FBS3h4QyxLQUFBLENBQU15WSxLQUFBLENBQU1uaEIsU0FBQSxDQUFVQyxHQUFBLENBQUksS0FBS2dLLEdBQUEsQ0FBSWtYLEtBQUssR0FBRyxLQUFLelksS0FBQSxDQUFNeVksS0FBQSxDQUFNblosZ0JBQUEsQ0FBaUIsV0FBWTVVLENBQUEsSUFBTTtNQUMvUEEsQ0FBQSxDQUFFd3lCLE9BQUEsS0FBWSxLQUFLazBCLFNBQUEsSUFBYSxLQUFLSyxZQUFBLENBQWEvbUQsQ0FBQztJQUNyRCxDQUFDLEdBQUcsS0FBS3NWLEtBQUEsQ0FBTXlZLEtBQUE7RUFDakI7RUFNQWthLFNBQVNqb0MsQ0FBQSxFQUFHO0lBQ1YsSUFBSUEsQ0FBQSxFQUFHO01BQ0wsS0FBSzZtRCxXQUFBLElBQWUsS0FBS3J3QyxTQUFBLENBQVVvRCxPQUFBLENBQVEsR0FBRyxLQUFLcEQsU0FBQSxDQUFVaUQsb0JBQUEsQ0FBcUIsTUFBTSxLQUFLakQsU0FBQSxDQUFVbUQsaUJBQUEsQ0FBa0IsR0FBRyxLQUFLbkQsU0FBQSxDQUFVdkMsSUFBQSxDQUFLO01BQ2hKLE1BQU01VCxDQUFBLEdBQUksS0FBS21XLFNBQUEsQ0FBVXdELGFBQUEsQ0FBYyxHQUFHO01BQzFDLElBQUkzWixDQUFBLEVBQUc7UUFDTCxLQUFLbVcsU0FBQSxDQUFVeUQsV0FBQSxDQUFZNVosQ0FBQyxHQUFHLEtBQUsybUQsTUFBQSxDQUFPLEdBQUcsS0FBS0MsWUFBQSxDQUFhLEdBQUcsS0FBS25mLFVBQUEsQ0FBVyxHQUFHLEtBQUs1MkIsT0FBQSxDQUFRb1MsS0FBQSxDQUFNO1FBQ3pHO01BQ0Y7SUFDRjtJQUNBLEtBQUs0akMsYUFBQSxDQUFjO0VBQ3JCO0VBSUFwZixXQUFBLEVBQWE7SUFDWCxNQUFNOW5DLENBQUEsR0FBSSxLQUFLd1csU0FBQSxDQUFVd0QsYUFBQSxDQUFjLEdBQUc7SUFDMUMsSUFBSWhhLENBQUEsRUFBRztNQUNMLEtBQUtzVixLQUFBLENBQU0yWSxNQUFBLENBQU9sZixTQUFBLEdBQVkwbEIsRUFBQSxFQUFJLEtBQUtuZixLQUFBLENBQU0yWSxNQUFBLENBQU9yaEIsU0FBQSxDQUFVQyxHQUFBLENBQUksS0FBS2dLLEdBQUEsQ0FBSTh2QyxZQUFZLEdBQUcsS0FBS3J4QyxLQUFBLENBQU0yWSxNQUFBLENBQU9yaEIsU0FBQSxDQUFVQyxHQUFBLENBQUksS0FBS2dLLEdBQUEsQ0FBSXd2QyxZQUFZLEdBQUcsS0FBS2MsV0FBQSxDQUFZO01BQ25LLE1BQU05bUQsQ0FBQSxHQUFJTCxDQUFBLENBQUVvbkQsWUFBQSxDQUFhLE1BQU07TUFDL0IsS0FBSzl4QyxLQUFBLENBQU15WSxLQUFBLENBQU1uc0IsS0FBQSxHQUFRdkIsQ0FBQSxLQUFNLFNBQVNBLENBQUEsR0FBSSxJQUFJLEtBQUttVyxTQUFBLENBQVV2QyxJQUFBLENBQUs7SUFDdEUsT0FDRSxLQUFLcUIsS0FBQSxDQUFNMlksTUFBQSxDQUFPbGYsU0FBQSxHQUFZcWxCLEVBQUEsRUFBSSxLQUFLOWUsS0FBQSxDQUFNMlksTUFBQSxDQUFPcmhCLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLVyxHQUFBLENBQUk4dkMsWUFBWSxHQUFHLEtBQUtyeEMsS0FBQSxDQUFNMlksTUFBQSxDQUFPcmhCLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLVyxHQUFBLENBQUl3dkMsWUFBWTtJQUN2SixPQUFPLENBQUMsQ0FBQ3JtRCxDQUFBO0VBQ1g7RUFJQWtpQixNQUFBLEVBQVE7SUFDTixLQUFLK2tDLFlBQUEsQ0FBYTtFQUNwQjtFQUlBLElBQUk3akIsU0FBQSxFQUFXO0lBQ2IsT0FBTztFQUNUO0VBSUE4akIsY0FBQSxFQUFnQjtJQUNkLEtBQUtMLFdBQUEsR0FBYyxLQUFLSSxZQUFBLENBQWEsS0FBRSxJQUFJLEtBQUtFLFdBQUEsQ0FBWSxJQUFFO0VBQ2hFO0VBSUFBLFlBQVlubkQsQ0FBQSxHQUFJLE9BQUk7SUFDbEIsS0FBS3NWLEtBQUEsQ0FBTXlZLEtBQUEsQ0FBTW5oQixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLZ0ssR0FBQSxDQUFJK3ZDLFdBQVcsR0FBRzVtRCxDQUFBLElBQUssS0FBS3NWLEtBQUEsQ0FBTXlZLEtBQUEsQ0FBTXBWLEtBQUEsQ0FBTSxHQUFHLEtBQUtrdUMsV0FBQSxHQUFjO0VBQzFHO0VBT0FJLGFBQWFqbkQsQ0FBQSxHQUFJLE1BQUk7SUFDbkIsSUFBSSxLQUFLd1csU0FBQSxDQUFVRSx1QkFBQSxFQUF5QjtNQUMxQyxNQUFNclcsQ0FBQSxHQUFJLElBQUlpVyxDQUFBLENBQUU7TUFDaEJqVyxDQUFBLENBQUU0VCxJQUFBLENBQUssR0FBRyxLQUFLdUMsU0FBQSxDQUFVb0QsT0FBQSxDQUFRLEdBQUcsS0FBS3BELFNBQUEsQ0FBVWlELG9CQUFBLENBQXFCLEdBQUdwWixDQUFBLENBQUV1WixPQUFBLENBQVE7SUFDdkY7SUFDQSxLQUFLdEUsS0FBQSxDQUFNeVksS0FBQSxDQUFNbmhCLFNBQUEsQ0FBVXNKLE1BQUEsQ0FBTyxLQUFLVyxHQUFBLENBQUkrdkMsV0FBVyxHQUFHLEtBQUt0eEMsS0FBQSxDQUFNeVksS0FBQSxDQUFNbnNCLEtBQUEsR0FBUSxJQUFJNUIsQ0FBQSxJQUFLLEtBQUt3VyxTQUFBLENBQVVxRCxVQUFBLENBQVcsR0FBRyxLQUFLZ3RDLFdBQUEsR0FBYztFQUM3STtFQU1BRSxhQUFhL21ELENBQUEsRUFBRztJQUNkLElBQUlLLENBQUEsR0FBSSxLQUFLaVYsS0FBQSxDQUFNeVksS0FBQSxDQUFNbnNCLEtBQUEsSUFBUztJQUNsQyxJQUFJLENBQUN2QixDQUFBLENBQUVvcUIsSUFBQSxDQUFLLEdBQUc7TUFDYixLQUFLalUsU0FBQSxDQUFVb0QsT0FBQSxDQUFRLEdBQUcsS0FBS290QyxNQUFBLENBQU8sR0FBR2huRCxDQUFBLENBQUV5eUIsY0FBQSxDQUFlLEdBQUcsS0FBS3cwQixZQUFBLENBQWE7TUFDL0U7SUFDRjtJQUNBLElBQUksQ0FBQyxLQUFLSSxXQUFBLENBQVlobkQsQ0FBQyxHQUFHO01BQ3hCLEtBQUtnbEIsUUFBQSxDQUFTd0IsSUFBQSxDQUFLO1FBQ2pCdEgsT0FBQSxFQUFTO1FBQ1RtTCxLQUFBLEVBQU87TUFDVCxDQUFDLEdBQUc1aUIsQ0FBQSxDQUFFLHlCQUF5QixRQUFRekgsQ0FBQztNQUN4QztJQUNGO0lBQ0FBLENBQUEsR0FBSSxLQUFLaW5ELFdBQUEsQ0FBWWpuRCxDQUFDLEdBQUcsS0FBS21XLFNBQUEsQ0FBVW9ELE9BQUEsQ0FBUSxHQUFHLEtBQUtwRCxTQUFBLENBQVVpRCxvQkFBQSxDQUFxQixHQUFHLEtBQUs4dEMsVUFBQSxDQUFXbG5ELENBQUMsR0FBR0wsQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZSxHQUFHenlCLENBQUEsQ0FBRTB6QixlQUFBLENBQWdCLEdBQUcxekIsQ0FBQSxDQUFFd25ELHdCQUFBLENBQXlCLEdBQUcsS0FBS2h4QyxTQUFBLENBQVVzRCxhQUFBLENBQWMsR0FBRyxLQUFLOUksYUFBQSxDQUFjc1MsS0FBQSxDQUFNO0VBQ2hQO0VBT0ErakMsWUFBWXJuRCxDQUFBLEVBQUc7SUFDYixPQUFPLENBQUMsS0FBS3lKLElBQUEsQ0FBS3pKLENBQUM7RUFDckI7RUFRQXNuRCxZQUFZdG5ELENBQUEsRUFBRztJQUNiLE9BQU9BLENBQUEsR0FBSUEsQ0FBQSxDQUFFeXFCLElBQUEsQ0FBSyxHQUFHenFCLENBQUEsR0FBSSxLQUFLeW5ELFdBQUEsQ0FBWXpuRCxDQUFDLEdBQUdBLENBQUE7RUFDaEQ7RUFNQXluRCxZQUFZem5ELENBQUEsRUFBRztJQUNiLElBQUksaUJBQWlCeUosSUFBQSxDQUFLekosQ0FBQyxHQUN6QixPQUFPQSxDQUFBO0lBQ1QsTUFBTUssQ0FBQSxHQUFJLFlBQVlvSixJQUFBLENBQUt6SixDQUFDO01BQUdxQixDQUFBLEdBQUlyQixDQUFBLENBQUVnTCxTQUFBLENBQVUsR0FBRyxDQUFDLE1BQU07TUFBS2pKLENBQUEsR0FBSSxjQUFjMEgsSUFBQSxDQUFLekosQ0FBQztJQUN0RixPQUFPLENBQUNLLENBQUEsSUFBSyxDQUFDZ0IsQ0FBQSxJQUFLLENBQUNVLENBQUEsS0FBTS9CLENBQUEsR0FBSSxZQUFZQSxDQUFBLEdBQUlBLENBQUE7RUFDaEQ7RUFNQXVuRCxXQUFXdm5ELENBQUEsRUFBRztJQUNaLE1BQU1LLENBQUEsR0FBSSxLQUFLbVcsU0FBQSxDQUFVd0QsYUFBQSxDQUFjLEdBQUc7SUFDMUMzWixDQUFBLElBQUssS0FBS21XLFNBQUEsQ0FBVXlELFdBQUEsQ0FBWTVaLENBQUMsR0FBR04sUUFBQSxDQUFTMlosV0FBQSxDQUFZLEtBQUs4c0MsV0FBQSxFQUFhLE9BQUl4bUQsQ0FBQztFQUNsRjtFQUlBZ25ELE9BQUEsRUFBUztJQUNQam5ELFFBQUEsQ0FBUzJaLFdBQUEsQ0FBWSxLQUFLK3NDLGFBQWE7RUFDekM7QUFDRjtBQUNBRixFQUFBLENBQUcxZixRQUFBLEdBQVc7QUFDZDBmLEVBQUEsQ0FBR3B4QixLQUFBLEdBQVE7QUFDWCxJQUFNdXlCLEVBQUEsR0FBTixNQUFTO0VBSVBqbUQsWUFBWTtJQUFFNmYsR0FBQSxFQUFLdGhCO0VBQUUsR0FBRztJQUN0QixLQUFLMm5ELE9BQUEsR0FBVTNuRCxDQUFBLENBQUVvVyxJQUFBLEVBQU0sS0FBS3d4QyxTQUFBLEdBQVk1bkQsQ0FBQSxDQUFFOGhCLE1BQUEsRUFBUSxLQUFLK2xDLFlBQUEsR0FBZTduRCxDQUFBLENBQUV3VyxTQUFBLEVBQVcsS0FBS3N4QyxRQUFBLEdBQVc5bkQsQ0FBQSxDQUFFc1MsS0FBQSxFQUFPLEtBQUt5MUMsUUFBQSxHQUFXL25ELENBQUEsQ0FBRStrQixLQUFBO0VBQ2hJO0VBSUEsTUFBTS9FLE9BQUEsRUFBUztJQUNiLE1BQU1oZ0IsQ0FBQSxHQUFJc1csQ0FBQSxDQUFFclUsR0FBQSxDQUFJO01BQUc1QixDQUFBLEdBQUksS0FBS3VuRCxTQUFBLENBQVVsbEMsaUJBQUEsQ0FBa0IxaUIsQ0FBQSxDQUFFZ1gsVUFBVTtJQUNwRSxJQUFJM1csQ0FBQSxLQUFNLFFBQ1IsT0FBTyxFQUFDO0lBQ1YsTUFBTWdCLENBQUEsR0FBSSxLQUFLeW1ELFFBQUEsQ0FBU3A2QixhQUFBLENBQWM7TUFBRzNyQixDQUFBLEdBQUksTUFBTW1aLEVBQUEsQ0FBRzdhLENBQUEsRUFBR2dCLENBQUM7SUFDMUQsSUFBSVUsQ0FBQSxDQUFFaUIsTUFBQSxLQUFXLEdBQ2YsT0FBTyxFQUFDO0lBQ1YsTUFBTWtCLENBQUEsR0FBSW5DLENBQUEsQ0FBRTZELE1BQUEsQ0FBTyxDQUFDaEIsQ0FBQSxFQUFHaUYsQ0FBQSxLQUFNO1FBQzNCLElBQUk4WCxDQUFBO1FBQ0osUUFBUUEsQ0FBQSxHQUFJOVgsQ0FBQSxDQUFFc0gsT0FBQSxLQUFZLFFBQVF3USxDQUFBLENBQUU3ZixPQUFBLENBQVN3YixDQUFBLElBQU07VUFDakQxWSxDQUFBLENBQUUrQyxJQUFBLENBQUs7WUFDTHdULElBQUEsRUFBTW1DLENBQUEsQ0FBRW5DLElBQUE7WUFDUmdhLEtBQUEsRUFBT3RpQixDQUFBLENBQUV4UyxDQUFBLENBQUU2d0IsQ0FBQSxDQUFFN2UsU0FBQSxFQUFXaUwsQ0FBQSxDQUFFNlgsS0FBSztZQUMvQjlyQixJQUFBLEVBQU1RLENBQUEsQ0FBRVIsSUFBQTtZQUNSb3RCLGVBQUEsRUFBaUI7WUFDakJWLFVBQUEsRUFBWSxNQUFBQSxDQUFBLEtBQVk7Y0FDdEIsTUFBTXhZLENBQUEsR0FBSSxNQUFNLEtBQUtxcUMsU0FBQSxDQUFVbG1DLE9BQUEsQ0FBUXJoQixDQUFBLENBQUVzVCxFQUFBLEVBQUk5SixDQUFBLENBQUVSLElBQUEsRUFBTWlVLENBQUEsQ0FBRXhVLElBQUk7Y0FDM0QsS0FBS2kvQyxRQUFBLENBQVM3a0MsVUFBQSxDQUFXM0YsQ0FBQSxFQUFHLEtBQUs7WUFDbkM7VUFDRixDQUFDO1FBQ0gsQ0FBQyxHQUFHM1ksQ0FBQTtNQUNOLEdBQUcsRUFBRTtNQUFHUCxDQUFBLEdBQUksTUFBTWhFLENBQUEsQ0FBRStULHFCQUFBLENBQXNCO01BQUc3UCxDQUFBLEdBQUlGLENBQUEsS0FBTSxTQUFTQSxDQUFBLENBQUU4VyxJQUFBLEdBQU9vWixFQUFBO01BQUk3dkIsQ0FBQSxHQUFJLENBQUNvSCxFQUFBLENBQUc7SUFDckYsT0FBTztNQUNMcVAsSUFBQSxFQUFNNVcsQ0FBQTtNQUNOOEUsSUFBQSxFQUFNO01BQ05xdkIsSUFBQSxFQUFNO1FBQ0p2RCxLQUFBLEVBQU8sS0FBS3d5QixPQUFBLENBQVF0bkQsQ0FBQSxDQUFFLFlBQVk7TUFDcEM7TUFDQStPLFFBQUEsRUFBVTtRQUNSb25CLFVBQUEsRUFBWTl4QixDQUFBO1FBQ1o2c0IsS0FBQSxFQUFPcnRCLENBQUE7UUFDUHl4QixNQUFBLEVBQVFBLENBQUEsS0FBTTtVQUNaanhCLENBQUEsS0FBTSxLQUFLbWpELFlBQUEsQ0FBYWx1QyxpQkFBQSxDQUFrQixHQUFHLEtBQUtrdUMsWUFBQSxDQUFhNXpDLElBQUEsQ0FBSztRQUN0RTtRQUNBNGhCLE9BQUEsRUFBU0EsQ0FBQSxLQUFNO1VBQ2JueEIsQ0FBQSxLQUFNLEtBQUttakQsWUFBQSxDQUFhanVDLE9BQUEsQ0FBUSxHQUFHLEtBQUtpdUMsWUFBQSxDQUFhcHVDLG9CQUFBLENBQXFCO1FBQzVFO01BQ0Y7SUFDRjtFQUNGO0FBQ0Y7QUFDQWl1QyxFQUFBLENBQUc3Z0IsUUFBQSxHQUFXO0FBQ2QsSUFBTW1oQixFQUFBLEdBQU4sTUFBUztFQU1Qdm1ELFlBQVk7SUFBRXFILElBQUEsRUFBTTlJLENBQUE7SUFBR3NoQixHQUFBLEVBQUtqaEI7RUFBRSxHQUFHO0lBQy9CLEtBQUt3VyxHQUFBLEdBQU07TUFDVHdILE9BQUEsRUFBUztNQUNUNHBDLElBQUEsRUFBTTtNQUNOOXlCLEtBQUEsRUFBTztNQUNQK3lCLFFBQUEsRUFBVTtJQUNaLEdBQUcsS0FBSzVtQyxHQUFBLEdBQU1qaEIsQ0FBQSxFQUFHLEtBQUs4MEIsS0FBQSxHQUFRbjFCLENBQUEsQ0FBRW0xQixLQUFBLElBQVMsS0FBSzdULEdBQUEsQ0FBSWxMLElBQUEsQ0FBSy9WLENBQUEsQ0FBRSxPQUFPLEdBQUcsS0FBSzZuRCxRQUFBLEdBQVcsS0FBSzVtQyxHQUFBLENBQUlsTCxJQUFBLENBQUsvVixDQUFBLENBQUUsMkNBQTJDLEdBQUcsS0FBS3drRCxTQUFBLEdBQVk3a0QsQ0FBQSxDQUFFNmtELFNBQUEsRUFBVyxLQUFLeG1DLE9BQUEsR0FBVSxLQUFLM1IsSUFBQSxDQUFLO0VBQzFNO0VBTUFzVCxPQUFBLEVBQVM7SUFDUCxPQUFPLEtBQUszQixPQUFBO0VBQ2Q7RUFNQXBLLEtBQUEsRUFBTztJQUNMLE9BQU8sS0FBSzR3QyxTQUFBO0VBQ2Q7RUFNQW40QyxLQUFBLEVBQU87SUFDTCxNQUFNMU0sQ0FBQSxHQUFJc00sQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxLQUFLbUssR0FBQSxDQUFJd0gsT0FBTztNQUFHaGUsQ0FBQSxHQUFJcTBCLEVBQUE7TUFBSXJ6QixDQUFBLEdBQUlpTCxDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPLEtBQUttSyxHQUFBLENBQUlveEMsSUFBSTtNQUFHbG1ELENBQUEsR0FBSXVLLENBQUEsQ0FBRUksSUFBQSxDQUFLLE9BQU8sS0FBS21LLEdBQUEsQ0FBSXNlLEtBQUEsRUFBTztRQUNySDNtQixXQUFBLEVBQWEsS0FBSzJtQjtNQUNwQixDQUFDO01BQUdqeEIsQ0FBQSxHQUFJb0ksQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxLQUFLbUssR0FBQSxDQUFJcXhDLFFBQUEsRUFBVTtRQUN2QzE1QyxXQUFBLEVBQWEsS0FBSzA1QztNQUNwQixDQUFDO0lBQ0QsT0FBT2xvRCxDQUFBLENBQUUrTyxTQUFBLEdBQVkxTyxDQUFBLEVBQUdnQixDQUFBLENBQUVuQixXQUFBLENBQVk2QixDQUFDLEdBQUdWLENBQUEsQ0FBRW5CLFdBQUEsQ0FBWWdFLENBQUMsR0FBR2xFLENBQUEsQ0FBRUUsV0FBQSxDQUFZbUIsQ0FBQyxHQUFHckIsQ0FBQTtFQUNoRjtBQUNGO0FBQ0Fnb0QsRUFBQSxDQUFHcmdCLG1CQUFBLEdBQXNCO0FBQ3pCLElBQU13Z0IsRUFBQSxHQUFOLGNBQWlCM2hCLEVBQUEsQ0FBRztFQUNsQi9rQyxZQUFBLEVBQWM7SUFDWixNQUFNLEdBQUdELFNBQVMsR0FBRyxLQUFLOE0sSUFBQSxHQUFPNDJCLEVBQUEsQ0FBR0UsTUFBQTtFQUN0QztFQUlBLElBQUlqUSxNQUFBLEVBQVE7SUFDVixPQUFPLEtBQUtzUixhQUFBLENBQWNOLEVBQUEsQ0FBR0UsS0FBQTtFQUMvQjtFQUlBdG9CLE9BQUEsRUFBUztJQUNQLE9BQU8sSUFBSSxLQUFLMG9CLGFBQUEsQ0FBYztNQUM1Qm5sQixHQUFBLEVBQUssS0FBS0EsR0FBQTtNQUNWMU4sTUFBQSxFQUFRLEtBQUtnSztJQUNmLENBQUM7RUFDSDtFQUtBLElBQUkrcEIsb0JBQUEsRUFBc0I7SUFDeEIsT0FBTyxLQUFLbEIsYUFBQSxDQUFjTixFQUFBLENBQUdGLG1CQUFBLEtBQXdCO0VBQ3ZEO0FBQ0Y7QUFDQSxJQUFNbWlCLEVBQUEsR0FBTixjQUFpQjVoQixFQUFBLENBQUc7RUFDbEIva0MsWUFBQSxFQUFjO0lBQ1osTUFBTSxHQUFHRCxTQUFTLEdBQUcsS0FBSzhNLElBQUEsR0FBTzQyQixFQUFBLENBQUdHLElBQUE7RUFDdEM7RUFPQXRuQixPQUFPL2QsQ0FBQSxFQUFHSyxDQUFBLEVBQUc7SUFDWCxPQUFPLElBQUksS0FBS29tQyxhQUFBLENBQWM7TUFDNUJubEIsR0FBQSxFQUFLLEtBQUtBLEdBQUE7TUFDVjFOLE1BQUEsRUFBUSxLQUFLZ0ssUUFBQTtNQUNiZ1EsS0FBQSxFQUFPdnRCLENBQUE7TUFDUHlJLElBQUEsRUFBTTlJO0lBQ1IsQ0FBQztFQUNIO0FBQ0Y7QUFDQSxJQUFNcW9ELENBQUEsR0FBTixjQUFnQjFyQyxHQUFBLENBQUk7RUFJbEIsSUFBSTBFLFdBQUEsRUFBYTtJQUNmLE1BQU1yaEIsQ0FBQSxHQUFJeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLLEtBQUtvTSxPQUFBLENBQVEsQ0FBQyxFQUFFdE8sTUFBQSxDQUFPLENBQUMsR0FBR3RNLENBQUMsTUFBTUEsQ0FBQSxDQUFFeW1DLE9BQUEsQ0FBUSxDQUFDO0lBQ2xFLE9BQU8sSUFBSXVoQixDQUFBLENBQUVyb0QsQ0FBQztFQUNoQjtFQUlBLElBQUkwbkMsWUFBQSxFQUFjO0lBQ2hCLE1BQU0xbkMsQ0FBQSxHQUFJeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLLEtBQUtvTSxPQUFBLENBQVEsQ0FBQyxFQUFFdE8sTUFBQSxDQUFPLENBQUMsR0FBR3RNLENBQUMsTUFBTUEsQ0FBQSxDQUFFd21DLFFBQUEsQ0FBUyxDQUFDO0lBQ25FLE9BQU8sSUFBSXdoQixDQUFBLENBQUVyb0QsQ0FBQztFQUNoQjtFQUlBLElBQUk4USxXQUFBLEVBQWE7SUFDZixNQUFNOVEsQ0FBQSxHQUFJeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLLEtBQUtvTSxPQUFBLENBQVEsQ0FBQyxFQUFFdE8sTUFBQSxDQUFPLENBQUMsR0FBR3RNLENBQUMsTUFBTUEsQ0FBQSxDQUFFMG1DLE1BQUEsQ0FBTyxDQUFDO0lBQ2pFLE9BQU8sSUFBSXNoQixDQUFBLENBQUVyb0QsQ0FBQztFQUNoQjtFQUlBLElBQUlzb0QsY0FBQSxFQUFnQjtJQUNsQixNQUFNdG9ELENBQUEsR0FBSXlELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLb00sT0FBQSxDQUFRLENBQUMsRUFBRXRPLE1BQUEsQ0FBTyxDQUFDLEdBQUd0TSxDQUFDLE1BQU1BLENBQUEsQ0FBRW9nQixVQUFVO0lBQ25FLE9BQU8sSUFBSTRuQyxDQUFBLENBQUVyb0QsQ0FBQztFQUNoQjtFQUlBLElBQUl1b0QsY0FBQSxFQUFnQjtJQUNsQixNQUFNdm9ELENBQUEsR0FBSXlELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLb00sT0FBQSxDQUFRLENBQUMsRUFBRXRPLE1BQUEsQ0FBTyxDQUFDLEdBQUd0TSxDQUFDLE1BQU0sQ0FBQ0EsQ0FBQSxDQUFFb2dCLFVBQVU7SUFDcEUsT0FBTyxJQUFJNG5DLENBQUEsQ0FBRXJvRCxDQUFDO0VBQ2hCO0FBQ0Y7QUFDQSxJQUFJd29ELEVBQUEsR0FBS3huRCxNQUFBLENBQU9XLGNBQUE7RUFBZ0I4bUQsRUFBQSxHQUFLem5ELE1BQUEsQ0FBT2dCLHdCQUFBO0VBQTBCMG1ELEVBQUEsR0FBS0EsQ0FBQzVuRCxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxLQUFNO0lBQ3pGLFNBQVNVLENBQUEsR0FBSVYsQ0FBQSxHQUFJLElBQUksU0FBU0EsQ0FBQSxHQUFJb25ELEVBQUEsQ0FBR3pvRCxDQUFBLEVBQUdLLENBQUMsSUFBSUwsQ0FBQSxFQUFHa0UsQ0FBQSxHQUFJcEQsQ0FBQSxDQUFFa0MsTUFBQSxHQUFTLEdBQUdxQixDQUFBLEVBQUdILENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQzNFLENBQUNHLENBQUEsR0FBSXZELENBQUEsQ0FBRW9ELENBQUEsT0FBUW5DLENBQUEsSUFBS1YsQ0FBQSxHQUFJZ0QsQ0FBQSxDQUFFckUsQ0FBQSxFQUFHSyxDQUFBLEVBQUcwQixDQUFDLElBQUlzQyxDQUFBLENBQUV0QyxDQUFDLE1BQU1BLENBQUE7SUFDaEQsT0FBT1YsQ0FBQSxJQUFLVSxDQUFBLElBQUt5bUQsRUFBQSxDQUFHeG9ELENBQUEsRUFBR0ssQ0FBQSxFQUFHMEIsQ0FBQyxHQUFHQSxDQUFBO0VBQ2hDO0FBQ0EsSUFBTTRtRCxFQUFBLEdBQU4sY0FBaUJuaUIsRUFBQSxDQUFHO0VBQ2xCL2tDLFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUs4TSxJQUFBLEdBQU80MkIsRUFBQSxDQUFHQyxLQUFBLEVBQU8sS0FBS3VDLFdBQUEsR0FBYyxJQUFJMmdCLENBQUEsQ0FBRSxHQUFHLEtBQUtycUMsS0FBQSxHQUFRLElBQUlxcUMsQ0FBQSxDQUFFO0VBQzVGO0VBUUF0cUMsT0FBTy9kLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxFQUFHO0lBQ2QsT0FBTyxJQUFJLEtBQUtvbEMsYUFBQSxDQUFjO01BQzVCMzlCLElBQUEsRUFBTTlJLENBQUE7TUFDTjR0QixLQUFBLEVBQU92dEIsQ0FBQTtNQUNQaWMsUUFBQSxFQUFVamIsQ0FBQTtNQUNWaWdCLEdBQUEsRUFBSyxLQUFLQSxHQUFBO01BQ1YxTixNQUFBLEVBQVEsS0FBS2dLO0lBQ2YsQ0FBQztFQUNIO0VBSUEsSUFBSStwQixvQkFBQSxFQUFzQjtJQUN4QixPQUFPLEtBQUtsQixhQUFBLENBQWNYLEVBQUEsQ0FBR0csbUJBQUEsTUFBeUI7RUFDeEQ7RUFJQSxJQUFJc1Isb0JBQUEsRUFBc0I7SUFDeEIsT0FBTyxLQUFLOVEsYUFBQSxDQUFjWCxFQUFBLENBQUdDLG1CQUFBO0VBQy9CO0VBY0EsSUFBSTUwQixRQUFBLEVBQVU7SUFDWixNQUFNblIsQ0FBQSxHQUFJLEtBQUt5bUMsYUFBQSxDQUFjWCxFQUFBLENBQUdOLE9BQUE7TUFBVW5sQyxDQUFBLEdBQUksS0FBS3VULE1BQUEsQ0FBTzB4QixFQUFBLENBQUdFLE9BQUE7SUFDN0QsSUFBSSxDQUFDOThCLENBQUEsQ0FBRTFJLENBQUMsS0FBS0ssQ0FBQSxLQUFNLE9BQ2pCLE9BQU9BLENBQUEsR0FBSW9ELEtBQUEsQ0FBTUMsT0FBQSxDQUFRMUQsQ0FBQyxJQUFJeUQsS0FBQSxDQUFNQyxPQUFBLENBQVFyRCxDQUFDLElBQUlBLENBQUEsQ0FBRWtOLEdBQUEsQ0FBSSxDQUFDbE0sQ0FBQSxFQUFHVSxDQUFBLEtBQU07TUFDL0QsTUFBTW1DLENBQUEsR0FBSWxFLENBQUEsQ0FBRStCLENBQUE7TUFDWixPQUFPbUMsQ0FBQSxHQUFJO1FBQ1QsR0FBR0EsQ0FBQTtRQUNILEdBQUc3QztNQUNMLElBQUlBLENBQUE7SUFDTixDQUFDLElBQUksQ0FBQ2hCLENBQUMsSUFBSW9ELEtBQUEsQ0FBTUMsT0FBQSxDQUFRckQsQ0FBQyxJQUFJQSxDQUFBLEdBQUksQ0FDaEM7TUFDRSxHQUFHTCxDQUFBO01BQ0gsR0FBR0s7SUFDTCxFQUNGLEdBQUlvRCxLQUFBLENBQU1DLE9BQUEsQ0FBUTFELENBQUMsSUFBSUEsQ0FBQSxHQUFJLENBQUNBLENBQUM7RUFDakM7RUFJQSxJQUFJNmEsaUJBQUEsRUFBbUI7SUFDckIsT0FBTyxLQUFLNHJCLGFBQUEsQ0FBY1gsRUFBQSxDQUFHRSxnQkFBQTtFQUMvQjtFQUlBLElBQUlnQyxtQkFBQSxFQUFxQjtJQUN2QixPQUFPLEtBQUtwMEIsTUFBQSxDQUFPMHhCLEVBQUEsQ0FBR0csa0JBQUEsS0FBdUI7RUFDL0M7RUFJQSxJQUFJbWpCLGtCQUFBLEVBQW9CO0lBQ3RCLE9BQU8sS0FBS2gxQyxNQUFBLENBQU8weEIsRUFBQSxDQUFHSSxpQkFBQTtFQUN4QjtFQUlBLElBQUlxWixZQUFBLEVBQWM7SUFDaEIsT0FBTyxLQUFLdFksYUFBQSxDQUFjWCxFQUFBLENBQUdJLFdBQUEsS0FBZ0IsQ0FBQztFQUNoRDtFQUNBLElBQUlobkIsZUFBQSxFQUFpQjtJQUNuQixNQUFNbGYsQ0FBQSxHQUFJLE1BQU1rZixjQUFBO01BQWdCN2UsQ0FBQSxHQUFJLEtBQUsyZ0Qsa0JBQUE7SUFDekMsSUFBSXQ0QyxDQUFBLENBQUUxSSxDQUFDLEdBQ0wsT0FBT0ssQ0FBQTtJQUNULE1BQU1nQixDQUFBLEdBQUksQ0FBQztJQUNYLFdBQVdVLENBQUEsSUFBSy9CLENBQUEsRUFDZCxJQUFJZ0IsTUFBQSxDQUFPQyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLbkIsQ0FBQSxFQUFHK0IsQ0FBQyxHQUFHO01BQzlDLE1BQU1tQyxDQUFBLEdBQUlsRSxDQUFBLENBQUUrQixDQUFBO01BQ1pzRyxDQUFBLENBQUVuRSxDQUFDLElBQUk3QyxDQUFBLENBQUVVLENBQUEsSUFBS2YsTUFBQSxDQUFPb0IsTUFBQSxDQUFPLENBQUMsR0FBRy9CLENBQUEsRUFBRzZELENBQUMsSUFBSTdDLENBQUEsQ0FBRVUsQ0FBQSxJQUFLbUMsQ0FBQTtJQUNqRDtJQUNGLE9BQU83QyxDQUFBO0VBQ1Q7RUFDQSxJQUFJMi9DLG1CQUFBLEVBQXFCO0lBQ3ZCLE1BQU1oaEQsQ0FBQSxHQUFJLENBQUM7SUFDWCxPQUFPeUQsS0FBQSxDQUFNb0wsSUFBQSxDQUFLLEtBQUs2NEIsV0FBQSxDQUFZM25CLE1BQUEsQ0FBTyxDQUFDLEVBQUVqZSxPQUFBLENBQVN6QixDQUFBLElBQU1XLE1BQUEsQ0FBT29CLE1BQUEsQ0FBT3BDLENBQUEsRUFBR0ssQ0FBQSxDQUFFNmUsY0FBYyxDQUFDLEdBQUd6YixLQUFBLENBQU1vTCxJQUFBLENBQUssS0FBS21QLEtBQUEsQ0FBTStCLE1BQUEsQ0FBTyxDQUFDLEVBQUVqZSxPQUFBLENBQVN6QixDQUFBLElBQU1XLE1BQUEsQ0FBT29CLE1BQUEsQ0FBT3BDLENBQUEsRUFBR0ssQ0FBQSxDQUFFNmUsY0FBYyxDQUFDLEdBQUdsZixDQUFBO0VBQ3ZMO0FBQ0Y7QUFDQTBvRCxFQUFBLENBQUcsQ0FDRC84QyxFQUFBLENBQ0YsRUFBR2c5QyxFQUFBLENBQUcxbkQsU0FBQSxFQUFXLGtCQUFrQixDQUFDO0FBQ3BDeW5ELEVBQUEsQ0FBRyxDQUNELzhDLEVBQUEsQ0FDRixFQUFHZzlDLEVBQUEsQ0FBRzFuRCxTQUFBLEVBQVcsc0JBQXNCLENBQUM7QUFDeEMsSUFBTTRuRCxFQUFBLEdBQU4sTUFBUztFQU9QcG5ELFlBQVl6QixDQUFBLEVBQUdLLENBQUEsRUFBR2dCLENBQUEsRUFBRztJQUNuQixLQUFLaWdCLEdBQUEsR0FBTWpnQixDQUFBLEVBQUcsS0FBS3VTLE1BQUEsR0FBUzVULENBQUEsRUFBRyxLQUFLOG9ELFlBQUEsR0FBZXpvRCxDQUFBO0VBQ3JEO0VBTUE0QixJQUFJakMsQ0FBQSxFQUFHO0lBQ0wsTUFBTTtRQUFFcTdCLEtBQUEsRUFBT2g3QixDQUFBO1FBQUdvZ0IsVUFBQSxFQUFZcGYsQ0FBQSxHQUFJO1FBQUEsR0FBT1U7TUFBRSxJQUFJLEtBQUs2UixNQUFBLENBQU81VCxDQUFBO01BQUlrRSxDQUFBLEdBQUksS0FBSzZrRCxjQUFBLENBQWUxb0QsQ0FBQztNQUFHZ0UsQ0FBQSxHQUFJaEUsQ0FBQSxDQUFFaW1DLEVBQUEsQ0FBR0MsTUFBQTtJQUNwRyxPQUFPLElBQUlyaUMsQ0FBQSxDQUFFO01BQ1htRixJQUFBLEVBQU1ySixDQUFBO01BQ055bUMsYUFBQSxFQUFlcG1DLENBQUE7TUFDZnVULE1BQUEsRUFBUTdSLENBQUE7TUFDUnVmLEdBQUEsRUFBSyxLQUFLQSxHQUFBLENBQUlzRCxpQkFBQSxDQUFrQjVrQixDQUFBLEVBQUdxRSxDQUFDO01BQ3BDcWlDLFNBQUEsRUFBVzFtQyxDQUFBLEtBQU0sS0FBSzhvRCxZQUFBLENBQWEvbkMsWUFBQTtNQUNuQzRsQixrQkFBQSxFQUFvQixLQUFLbWlCLFlBQUEsQ0FBYS85QixXQUFBO01BQ3RDdEssVUFBQSxFQUFZcGY7SUFDZCxDQUFDO0VBQ0g7RUFNQTBuRCxlQUFlL29ELENBQUEsRUFBRztJQUNoQixRQUFRO01BQUEsS0FDREEsQ0FBQSxDQUFFbW1DLEVBQUEsQ0FBR0MsUUFBQTtRQUNSLE9BQU8raEIsRUFBQTtNQUFBLEtBQ0pub0QsQ0FBQSxDQUFFc21DLEVBQUEsQ0FBR0MsTUFBQTtRQUNSLE9BQU82aEIsRUFBQTtNQUFBO1FBRVAsT0FBT08sRUFBQTtJQUFBO0VBRWI7QUFDRjtBQUNBLElBQU1LLEVBQUEsR0FBTixNQUFTO0VBTVB2bkQsWUFBWTtJQUFFNmYsR0FBQSxFQUFLdGhCO0VBQUUsR0FBRztJQUN0QixLQUFLNlcsR0FBQSxHQUFNO01BQ1RveUMsU0FBQSxFQUFXO0lBQ2IsR0FBRyxLQUFLM25DLEdBQUEsR0FBTXRoQixDQUFBO0VBQ2hCO0VBSUFnZ0IsT0FBQSxFQUFTO0lBQ1AsT0FBTztNQUNMN0UsSUFBQSxFQUFNMFksRUFBQTtNQUNOc0IsS0FBQSxFQUFPLEtBQUs3VCxHQUFBLENBQUlsTCxJQUFBLENBQUsvVixDQUFBLENBQUUsV0FBVztNQUNsQzAxQixVQUFBLEVBQVlBLENBQUEsS0FBTSxLQUFLRCxXQUFBLENBQVk7TUFDbkN6c0IsSUFBQSxFQUFNO0lBQ1I7RUFDRjtFQUlBeXNCLFlBQUEsRUFBYztJQUNaLE1BQU05MUIsQ0FBQSxHQUFJLEtBQUtzaEIsR0FBQSxDQUFJUSxNQUFBLENBQU9TLG9CQUFBLENBQXFCO01BQUdsaUIsQ0FBQSxHQUFJLEtBQUtpaEIsR0FBQSxDQUFJUSxNQUFBLENBQU9PLGVBQUEsQ0FBZ0JyaUIsQ0FBQSxHQUFJLENBQUM7SUFDM0YsSUFBSSxDQUFDSyxDQUFBLEVBQ0gsTUFBTSxJQUFJMFMsS0FBQSxDQUFNLHdEQUF3RDtJQUMxRSxNQUFNMVIsQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFd1QsTUFBQTtNQUFROVIsQ0FBQSxHQUFJVixDQUFBLENBQUVvTyxxQkFBQSxDQUFzQjtJQUNoRCxJQUFJdkwsQ0FBQSxHQUFJa0IsSUFBQSxDQUFLOGpELEdBQUEsQ0FBSXhvRCxNQUFBLENBQU9zOUIsV0FBQSxHQUFjMzhCLENBQUEsQ0FBRTh1QixZQUFZO0lBQ3BEcHVCLENBQUEsQ0FBRTZOLEdBQUEsR0FBTWxQLE1BQUEsQ0FBT3M5QixXQUFBLEtBQWdCOTVCLENBQUEsR0FBSXhELE1BQUEsQ0FBT3lvRCxPQUFBLEdBQVU5bkQsQ0FBQSxDQUFFOHVCLFlBQUEsR0FBZXp2QixNQUFBLENBQU9xK0IsUUFBQSxDQUFTLEdBQUc3NkIsQ0FBQyxHQUFHLEtBQUtvZCxHQUFBLENBQUlRLE1BQUEsQ0FBT00sSUFBQSxDQUFLcGlCLENBQUEsR0FBSSxDQUFDLEdBQUcsS0FBS3NoQixHQUFBLENBQUlwUSxPQUFBLENBQVFtZCxtQkFBQSxDQUFvQixJQUFFO0VBQ2xLO0FBQ0Y7QUFDQTI2QixFQUFBLENBQUdqaUIsTUFBQSxHQUFTO0FBQ1osSUFBTXFpQixFQUFBLEdBQU4sTUFBUztFQU1QM25ELFlBQVk7SUFBRTZmLEdBQUEsRUFBS3RoQjtFQUFFLEdBQUc7SUFDdEIsS0FBS3NoQixHQUFBLEdBQU10aEIsQ0FBQTtFQUNiO0VBSUFnZ0IsT0FBQSxFQUFTO0lBQ1AsT0FBTztNQUNMN0UsSUFBQSxFQUFNOFksRUFBQTtNQUNOa0IsS0FBQSxFQUFPLEtBQUs3VCxHQUFBLENBQUlsTCxJQUFBLENBQUsvVixDQUFBLENBQUUsUUFBUTtNQUMvQmdKLElBQUEsRUFBTTtNQUNOd3ZCLFlBQUEsRUFBYztRQUNaMUQsS0FBQSxFQUFPLEtBQUs3VCxHQUFBLENBQUlsTCxJQUFBLENBQUsvVixDQUFBLENBQUUsaUJBQWlCO1FBQ3hDMDFCLFVBQUEsRUFBWUEsQ0FBQSxLQUFNLEtBQUtELFdBQUEsQ0FBWTtNQUNyQztJQUNGO0VBQ0Y7RUFJQUEsWUFBQSxFQUFjO0lBQ1osS0FBS3hVLEdBQUEsQ0FBSVEsTUFBQSxDQUFPOVAsTUFBQSxDQUFPO0VBQ3pCO0FBQ0Y7QUFDQW8zQyxFQUFBLENBQUdyaUIsTUFBQSxHQUFTO0FBQ1osSUFBTXNpQixFQUFBLEdBQU4sTUFBUztFQU1QNW5ELFlBQVk7SUFBRTZmLEdBQUEsRUFBS3RoQjtFQUFFLEdBQUc7SUFDdEIsS0FBSzZXLEdBQUEsR0FBTTtNQUNUb3lDLFNBQUEsRUFBVztJQUNiLEdBQUcsS0FBSzNuQyxHQUFBLEdBQU10aEIsQ0FBQTtFQUNoQjtFQUlBZ2dCLE9BQUEsRUFBUztJQUNQLE9BQU87TUFDTDdFLElBQUEsRUFBTTZZLEVBQUE7TUFDTm1CLEtBQUEsRUFBTyxLQUFLN1QsR0FBQSxDQUFJbEwsSUFBQSxDQUFLL1YsQ0FBQSxDQUFFLFNBQVM7TUFDaEMwMUIsVUFBQSxFQUFZQSxDQUFBLEtBQU0sS0FBS0QsV0FBQSxDQUFZO01BQ25DenNCLElBQUEsRUFBTTtJQUNSO0VBQ0Y7RUFJQXlzQixZQUFBLEVBQWM7SUFDWixNQUFNOTFCLENBQUEsR0FBSSxLQUFLc2hCLEdBQUEsQ0FBSVEsTUFBQSxDQUFPUyxvQkFBQSxDQUFxQjtNQUFHbGlCLENBQUEsR0FBSSxLQUFLaWhCLEdBQUEsQ0FBSVEsTUFBQSxDQUFPTyxlQUFBLENBQWdCcmlCLENBQUM7TUFBR3FCLENBQUEsR0FBSSxLQUFLaWdCLEdBQUEsQ0FBSVEsTUFBQSxDQUFPTyxlQUFBLENBQWdCcmlCLENBQUEsR0FBSSxDQUFDO0lBQ25JLElBQUlBLENBQUEsS0FBTSxLQUFLLENBQUNLLENBQUEsSUFBSyxDQUFDZ0IsQ0FBQSxFQUNwQixNQUFNLElBQUkwUixLQUFBLENBQU0sdURBQXVEO0lBQ3pFLE1BQU1oUixDQUFBLEdBQUkxQixDQUFBLENBQUV3VCxNQUFBO01BQVEzUCxDQUFBLEdBQUk3QyxDQUFBLENBQUV3UyxNQUFBO01BQVF4UCxDQUFBLEdBQUl0QyxDQUFBLENBQUUwTixxQkFBQSxDQUFzQjtNQUFHbEwsQ0FBQSxHQUFJTCxDQUFBLENBQUV1TCxxQkFBQSxDQUFzQjtJQUM3RixJQUFJL0ssQ0FBQTtJQUNKSCxDQUFBLENBQUVxTCxHQUFBLEdBQU0sSUFBSWxMLENBQUEsR0FBSVUsSUFBQSxDQUFLOGpELEdBQUEsQ0FBSTdrRCxDQUFBLENBQUV1TCxHQUFHLElBQUl4SyxJQUFBLENBQUs4akQsR0FBQSxDQUFJM2tELENBQUEsQ0FBRXFMLEdBQUcsSUFBSWxMLENBQUEsR0FBSVUsSUFBQSxDQUFLOGpELEdBQUEsQ0FBSTdrRCxDQUFBLENBQUV1TCxHQUFHLElBQUlyTCxDQUFBLENBQUV3TCxNQUFBLEVBQVFyUCxNQUFBLENBQU9zN0MsUUFBQSxDQUFTLEdBQUcsS0FBS3QzQyxDQUFDLEdBQUcsS0FBSzRjLEdBQUEsQ0FBSVEsTUFBQSxDQUFPTSxJQUFBLENBQUtwaUIsQ0FBQSxHQUFJLENBQUMsR0FBRyxLQUFLc2hCLEdBQUEsQ0FBSXBRLE9BQUEsQ0FBUW1kLG1CQUFBLENBQW9CLElBQUU7RUFDdEw7QUFDRjtBQUNBZzdCLEVBQUEsQ0FBR3RpQixNQUFBLEdBQVM7QUFDWixJQUFJdWlCLEVBQUEsR0FBS3RvRCxNQUFBLENBQU9XLGNBQUE7RUFBZ0I0bkQsRUFBQSxHQUFLdm9ELE1BQUEsQ0FBT2dCLHdCQUFBO0VBQTBCd25ELEVBQUEsR0FBS0EsQ0FBQzFvRCxDQUFBLEVBQUdkLENBQUEsRUFBR0ssQ0FBQSxFQUFHZ0IsQ0FBQSxLQUFNO0lBQ3pGLFNBQVNVLENBQUEsR0FBSVYsQ0FBQSxHQUFJLElBQUksU0FBU0EsQ0FBQSxHQUFJa29ELEVBQUEsQ0FBR3ZwRCxDQUFBLEVBQUdLLENBQUMsSUFBSUwsQ0FBQSxFQUFHa0UsQ0FBQSxHQUFJcEQsQ0FBQSxDQUFFa0MsTUFBQSxHQUFTLEdBQUdxQixDQUFBLEVBQUdILENBQUEsSUFBSyxHQUFHQSxDQUFBLElBQzNFLENBQUNHLENBQUEsR0FBSXZELENBQUEsQ0FBRW9ELENBQUEsT0FBUW5DLENBQUEsSUFBS1YsQ0FBQSxHQUFJZ0QsQ0FBQSxDQUFFckUsQ0FBQSxFQUFHSyxDQUFBLEVBQUcwQixDQUFDLElBQUlzQyxDQUFBLENBQUV0QyxDQUFDLE1BQU1BLENBQUE7SUFDaEQsT0FBT1YsQ0FBQSxJQUFLVSxDQUFBLElBQUt1bkQsRUFBQSxDQUFHdHBELENBQUEsRUFBR0ssQ0FBQSxFQUFHMEIsQ0FBQyxHQUFHQSxDQUFBO0VBQ2hDO0FBQ0EsSUFBTTBuRCxFQUFBLEdBQU4sY0FBaUJyMEMsQ0FBQSxDQUFFO0VBQ2pCM1QsWUFBQSxFQUFjO0lBQ1osTUFBTSxHQUFHRCxTQUFTLEdBQUcsS0FBS21qRCxRQUFBLEdBQVcsUUFBUSxLQUFLK0UsY0FBQSxHQUFpQixJQUFJckIsQ0FBQSxDQUFFLEdBQUcsS0FBS3NCLGdCQUFBLEdBQW1CLElBQUl0QixDQUFBLENBQUU7RUFDNUc7RUFJQSxJQUFJNUQsVUFBQSxFQUFZO0lBQ2QsT0FBTyxLQUFLaUYsY0FBQTtFQUNkO0VBSUEsSUFBSTlFLFlBQUEsRUFBYztJQUNoQixPQUFPLEtBQUsrRSxnQkFBQTtFQUNkO0VBSUEsSUFBSWppQixZQUFBLEVBQWM7SUFDaEIsT0FBTyxLQUFLK2MsU0FBQSxDQUFVL2MsV0FBQTtFQUN4QjtFQUlBLElBQUlybUIsV0FBQSxFQUFhO0lBQ2YsT0FBTyxLQUFLb2pDLFNBQUEsQ0FBVXBqQyxVQUFBO0VBQ3hCO0VBTUEsSUFBSXZRLFdBQUEsRUFBYTtJQUNmLE9BQU8sS0FBSzJ6QyxTQUFBLENBQVUzekMsVUFBQTtFQUN4QjtFQUlBLElBQUlpd0MsWUFBQSxFQUFjO0lBQ2hCLE9BQU8sS0FBSzEvQixVQUFBLENBQVdwZixHQUFBLENBQUksS0FBSzJSLE1BQUEsQ0FBT21OLFlBQVk7RUFDckQ7RUFJQSxJQUFJZ25CLFNBQUEsRUFBVztJQUNiLE9BQU8sS0FBSzBjLFNBQUEsQ0FBVTZELGFBQUE7RUFDeEI7RUFNQSxNQUFNcjVCLFFBQUEsRUFBVTtJQUNkLElBQUksS0FBSzI2QixhQUFBLENBQWMsR0FBRyxLQUFLaDJDLE1BQUEsQ0FBT3RCLEtBQUEsR0FBUTdILEVBQUEsQ0FBRyxDQUFDLEdBQUcsS0FBSzY5QyxhQUFBLEVBQWUsS0FBSzEwQyxNQUFBLENBQU90QixLQUFLLEdBQUcsQ0FBQ3RSLE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBSyxLQUFLeVMsTUFBQSxFQUFRLE9BQU8sS0FBSzVTLE1BQUEsQ0FBT2EsSUFBQSxDQUFLLEtBQUsrUixNQUFBLENBQU90QixLQUFLLEVBQUV0UCxNQUFBLEtBQVcsR0FDcE0sTUFBTStQLEtBQUEsQ0FBTSwyQkFBMkI7SUFDekMsTUFBTS9TLENBQUEsR0FBSSxLQUFLNnBELGFBQUEsQ0FBYztJQUM3QixLQUFLQyxPQUFBLEdBQVUsSUFBSWpCLEVBQUEsQ0FBRzdvRCxDQUFBLEVBQUcsS0FBSzRULE1BQUEsRUFBUSxLQUFLbUMsTUFBQSxDQUFPd0wsR0FBRztJQUNyRCxNQUFNbGhCLENBQUEsR0FBSSxLQUFLMHBELHlCQUFBLENBQTBCL3BELENBQUM7SUFDMUMsSUFBSUssQ0FBQSxDQUFFMkMsTUFBQSxLQUFXLEdBQ2YsT0FBTytGLE9BQUEsQ0FBUUMsT0FBQSxDQUFRO0lBQ3pCLE1BQU1KLEVBQUEsQ0FBR3ZJLENBQUEsRUFBSWdCLENBQUEsSUFBTTtNQUNqQixLQUFLMm9ELHdCQUFBLENBQXlCM29ELENBQUM7SUFDakMsR0FBSUEsQ0FBQSxJQUFNO01BQ1IsS0FBSzRvRCx5QkFBQSxDQUEwQjVvRCxDQUFDO0lBQ2xDLENBQUMsR0FBRyxLQUFLNm9ELGlCQUFBLENBQWtCO0VBQzdCO0VBQ0FsSyxnQ0FBQSxFQUFrQztJQUNoQyxNQUFNaGdELENBQUEsR0FBSSxDQUFDO0lBQ1gsT0FBT3lELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLNjRCLFdBQUEsQ0FBWTNuQixNQUFBLENBQU8sQ0FBQyxFQUFFamUsT0FBQSxDQUFTekIsQ0FBQSxJQUFNO01BQzFEVyxNQUFBLENBQU9vQixNQUFBLENBQU9wQyxDQUFBLEVBQUdLLENBQUEsQ0FBRTZlLGNBQWM7SUFDbkMsQ0FBQyxHQUFHbGYsQ0FBQTtFQUNOO0VBSUF3VCxRQUFBLEVBQVU7SUFDUnhTLE1BQUEsQ0FBTytlLE1BQUEsQ0FBTyxLQUFLMGtDLFNBQVMsRUFBRTNpRCxPQUFBLENBQVEsTUFBTzlCLENBQUEsSUFBTTtNQUNqRG9JLENBQUEsQ0FBRXBJLENBQUEsQ0FBRW00QixLQUFLLE1BQUssTUFBTW40QixDQUFBLENBQUVtNEIsS0FBQSxDQUFNO0lBQzlCLENBQUM7RUFDSDtFQUtBLElBQUltd0IsY0FBQSxFQUFnQjtJQUNsQixPQUFPO01BQ0w2QixTQUFBLEVBQVc7UUFDVDl1QixLQUFBLEVBQU9xc0IsRUFBQTtRQUNQam5DLFVBQUEsRUFBWTtNQUNkO01BQ0E1TyxJQUFBLEVBQU07UUFDSndwQixLQUFBLEVBQU9rckIsRUFBQTtRQUNQOWxDLFVBQUEsRUFBWTtNQUNkO01BQ0EycEMsSUFBQSxFQUFNO1FBQ0ovdUIsS0FBQSxFQUFPNHFCLEVBQUE7UUFDUHhsQyxVQUFBLEVBQVk7TUFDZDtNQUNBNHBDLE1BQUEsRUFBUTtRQUNOaHZCLEtBQUEsRUFBTytxQixFQUFBO1FBQ1AzbEMsVUFBQSxFQUFZO01BQ2Q7TUFDQTZwQyxTQUFBLEVBQVc7UUFDVGp2QixLQUFBLEVBQU9ncUIsRUFBQTtRQUNQcjBDLGFBQUEsRUFBZTtRQUNmeVAsVUFBQSxFQUFZO01BQ2Q7TUFDQTNPLElBQUEsRUFBTTtRQUNKdXBCLEtBQUEsRUFBTzJzQixFQUFBO1FBQ1B2bkMsVUFBQSxFQUFZO01BQ2Q7TUFDQXZPLE1BQUEsRUFBUTtRQUNObXBCLEtBQUEsRUFBT2d1QixFQUFBO1FBQ1A1b0MsVUFBQSxFQUFZO01BQ2Q7TUFDQXpPLE1BQUEsRUFBUTtRQUNOcXBCLEtBQUEsRUFBTyt0QixFQUFBO1FBQ1Azb0MsVUFBQSxFQUFZO01BQ2Q7TUFDQXRPLFFBQUEsRUFBVTtRQUNSa3BCLEtBQUEsRUFBTzJ0QixFQUFBO1FBQ1B2b0MsVUFBQSxFQUFZO01BQ2Q7SUFDRjtFQUNGO0VBTUF1cEMseUJBQXlCaHFELENBQUEsRUFBRztJQUMxQixNQUFNSyxDQUFBLEdBQUksS0FBS3lwRCxPQUFBLENBQVE3bkQsR0FBQSxDQUFJakMsQ0FBQSxDQUFFNG1DLFFBQVE7SUFDckMsSUFBSXZtQyxDQUFBLENBQUV3bUMsUUFBQSxDQUFTLEdBQUc7TUFDaEIsTUFBTTlrQyxDQUFBLEdBQUksQ0FBQyxRQUFRLEVBQUU0SyxNQUFBLENBQVF6SSxDQUFBLElBQU0sQ0FBQzdELENBQUEsQ0FBRTBkLE1BQUEsQ0FBTyxFQUFFN1osQ0FBQSxDQUFFO01BQ2pELElBQUluQyxDQUFBLENBQUVpQixNQUFBLEVBQVE7UUFDWjhFLENBQUEsQ0FDRSwwQkFBMEJ6SCxDQUFBLENBQUVnSixJQUFBLG9EQUM1QixRQUNBdEgsQ0FDRixHQUFHLEtBQUs0bkQsZ0JBQUEsQ0FBaUIvOUMsR0FBQSxDQUFJdkwsQ0FBQSxDQUFFZ0osSUFBQSxFQUFNaEosQ0FBQztRQUN0QztNQUNGO0lBQ0Y7SUFDQSxLQUFLcXBELGNBQUEsQ0FBZTk5QyxHQUFBLENBQUl2TCxDQUFBLENBQUVnSixJQUFBLEVBQU1oSixDQUFDO0VBQ25DO0VBTUE0cEQsMEJBQTBCanFELENBQUEsRUFBRztJQUMzQixLQUFLMnBELGdCQUFBLENBQWlCLzlDLEdBQUEsQ0FBSTVMLENBQUEsQ0FBRTRtQyxRQUFBLEVBQVUsS0FBS2tqQixPQUFBLENBQVE3bkQsR0FBQSxDQUFJakMsQ0FBQSxDQUFFNG1DLFFBQVEsQ0FBQztFQUNwRTtFQU9BbWpCLDBCQUEwQi9wRCxDQUFBLEVBQUc7SUFDM0IsTUFBTUssQ0FBQSxHQUFJLEVBQUM7SUFDWCxPQUFPVyxNQUFBLENBQU9pYSxPQUFBLENBQVFqYixDQUFDLEVBQUU4QixPQUFBLENBQVEsQ0FBQyxDQUFDVCxDQUFBLEVBQUdVLENBQUMsTUFBTTtNQUMzQzFCLENBQUEsQ0FBRXNILElBQUEsQ0FBSztRQUVMa0IsUUFBQSxFQUFVVCxDQUFBLENBQUVyRyxDQUFBLENBQUVzNUIsS0FBQSxDQUFNcE0sT0FBTyxJQUFJbHRCLENBQUEsQ0FBRXM1QixLQUFBLENBQU1wTSxPQUFBLEdBQVUsTUFBTSxDQUN2RDtRQUNBbm1CLElBQUEsRUFBTTtVQUNKODlCLFFBQUEsRUFBVXZsQyxDQUFBO1VBQ1Z1UyxNQUFBLEVBQVE3UixDQUFBLENBQUU2UjtRQUNaO01BQ0YsQ0FBQztJQUNILENBQUMsR0FBR3ZULENBQUE7RUFDTjtFQUlBNnBELGtCQUFBLEVBQW9CO0lBQ2xCem1ELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLd1MsVUFBQSxDQUFXdEIsTUFBQSxDQUFPLENBQUMsRUFBRWplLE9BQUEsQ0FBUzlCLENBQUEsSUFBTTtNQUNsRCxLQUFLdXFELDRCQUFBLENBQTZCdnFELENBQUMsR0FBRyxLQUFLd3FELDJCQUFBLENBQTRCeHFELENBQUM7SUFDMUUsQ0FBQztFQUNIO0VBTUF1cUQsNkJBQTZCdnFELENBQUEsRUFBRztJQUM5QixJQUFJLEtBQUs0VCxNQUFBLENBQU81QyxhQUFBLEtBQWtCLE9BQUk7TUFDcEMsSUFBSWhSLENBQUEsQ0FBRWdvQyxrQkFBQSxLQUF1QixNQUFJO1FBQy9CaG9DLENBQUEsQ0FBRTBuQyxXQUFBLEdBQWMsSUFBSTJnQixDQUFBLENBQ2xCNWtELEtBQUEsQ0FBTUMsT0FBQSxDQUFRLEtBQUtrUSxNQUFBLENBQU81QyxhQUFhLElBQUksS0FBSzRDLE1BQUEsQ0FBTzVDLGFBQUEsQ0FBY3pELEdBQUEsQ0FBS2xOLENBQUEsSUFBTSxDQUFDQSxDQUFBLEVBQUcsS0FBS3FuQyxXQUFBLENBQVl6bEMsR0FBQSxDQUFJNUIsQ0FBQyxDQUFDLENBQUMsSUFBSW9ELEtBQUEsQ0FBTW9MLElBQUEsQ0FBSyxLQUFLNjRCLFdBQUEsQ0FBWXpzQixPQUFBLENBQVEsQ0FBQyxDQUN2SjtRQUNBO01BQ0Y7TUFDQXhYLEtBQUEsQ0FBTUMsT0FBQSxDQUFRMUQsQ0FBQSxDQUFFZ29DLGtCQUFrQixNQUFNaG9DLENBQUEsQ0FBRTBuQyxXQUFBLEdBQWMsSUFBSTJnQixDQUFBLENBRTFELENBQUMsYUFBYSxHQUFHcm9ELENBQUEsQ0FBRWdvQyxrQkFBa0IsRUFBRXo2QixHQUFBLENBQUtsTixDQUFBLElBQU0sQ0FBQ0EsQ0FBQSxFQUFHLEtBQUtxbkMsV0FBQSxDQUFZemxDLEdBQUEsQ0FBSTVCLENBQUMsQ0FBQyxDQUFDLENBQ2hGO0lBQ0Y7RUFDRjtFQU1BbXFELDRCQUE0QnhxRCxDQUFBLEVBQUc7SUFDN0IsSUFBSUEsQ0FBQSxDQUFFNG9ELGlCQUFBLEtBQXNCLE9BQUk7TUFDOUIsSUFBSW5sRCxLQUFBLENBQU1DLE9BQUEsQ0FBUTFELENBQUEsQ0FBRTRvRCxpQkFBaUIsR0FBRztRQUN0QyxNQUFNdm9ELENBQUEsR0FBSSxJQUFJZ29ELENBQUEsQ0FDWnJvRCxDQUFBLENBQUU0b0QsaUJBQUEsQ0FBa0JyN0MsR0FBQSxDQUFLbE0sQ0FBQSxJQUFNLENBQUNBLENBQUEsRUFBRyxLQUFLeVAsVUFBQSxDQUFXN08sR0FBQSxDQUFJWixDQUFDLENBQUMsQ0FBQyxDQUM1RDtRQUNBckIsQ0FBQSxDQUFFZ2UsS0FBQSxHQUFRLElBQUlxcUMsQ0FBQSxDQUFFLENBQUMsR0FBR2hvRCxDQUFBLEVBQUcsR0FBRyxLQUFLeVEsVUFBQSxDQUFXdzNDLGFBQWEsQ0FBQztRQUN4RDtNQUNGO01BQ0EsSUFBSTdrRCxLQUFBLENBQU1DLE9BQUEsQ0FBUSxLQUFLa1EsTUFBQSxDQUFPb0ssS0FBSyxHQUFHO1FBQ3BDLE1BQU0zZCxDQUFBLEdBQUksSUFBSWdvRCxDQUFBLENBQ1osS0FBS3owQyxNQUFBLENBQU9vSyxLQUFBLENBQU16USxHQUFBLENBQUtsTSxDQUFBLElBQU0sQ0FBQ0EsQ0FBQSxFQUFHLEtBQUt5UCxVQUFBLENBQVc3TyxHQUFBLENBQUlaLENBQUMsQ0FBQyxDQUFDLENBQzFEO1FBQ0FyQixDQUFBLENBQUVnZSxLQUFBLEdBQVEsSUFBSXFxQyxDQUFBLENBQUUsQ0FBQyxHQUFHaG9ELENBQUEsRUFBRyxHQUFHLEtBQUt5USxVQUFBLENBQVd3M0MsYUFBYSxDQUFDO1FBQ3hEO01BQ0Y7TUFDQXRvRCxDQUFBLENBQUVnZSxLQUFBLEdBQVEsS0FBS2xOLFVBQUEsQ0FBV3czQyxhQUFBO0lBQzVCO0VBQ0Y7RUFJQXNCLGNBQUEsRUFBZ0I7SUFDZCxXQUFXNXBELENBQUEsSUFBSyxLQUFLNFQsTUFBQSxDQUFPdEIsS0FBQSxFQUMxQixJQUFJdFIsTUFBQSxDQUFPQyxTQUFBLENBQVVDLGNBQUEsQ0FBZUMsSUFBQSxDQUFLLEtBQUt5UyxNQUFBLENBQU90QixLQUFBLEVBQU90UyxDQUFDLEdBQUc7TUFDOUQsSUFBSUEsQ0FBQSxJQUFLLEtBQUtzb0QsYUFBQSxFQUNaO01BQ0YsTUFBTWpvRCxDQUFBLEdBQUksS0FBS3VULE1BQUEsQ0FBT3RCLEtBQUEsQ0FBTXRTLENBQUE7TUFDNUIsSUFBSSxDQUFDb0ksQ0FBQSxDQUFFL0gsQ0FBQyxLQUFLLENBQUMrSCxDQUFBLENBQUUvSCxDQUFBLENBQUVnN0IsS0FBSyxHQUNyQixNQUFNdG9CLEtBQUEsQ0FDSixZQUFTL1MsQ0FBQSw4RkFDWDtJQUNKO0VBQ0o7RUFJQTZwRCxjQUFBLEVBQWdCO0lBQ2QsTUFBTTdwRCxDQUFBLEdBQUksQ0FBQztJQUNYLFdBQVdLLENBQUEsSUFBSyxLQUFLdVQsTUFBQSxDQUFPdEIsS0FBQSxFQUMxQmpLLENBQUEsQ0FBRSxLQUFLdUwsTUFBQSxDQUFPdEIsS0FBQSxDQUFNalMsQ0FBQSxDQUFFLElBQUlMLENBQUEsQ0FBRUssQ0FBQSxJQUFLLEtBQUt1VCxNQUFBLENBQU90QixLQUFBLENBQU1qUyxDQUFBLElBQUtMLENBQUEsQ0FBRUssQ0FBQSxJQUFLO01BQUVnN0IsS0FBQSxFQUFPLEtBQUt6bkIsTUFBQSxDQUFPdEIsS0FBQSxDQUFNalMsQ0FBQTtJQUFHO0lBQy9GLE9BQU9MLENBQUE7RUFDVDtBQUNGO0FBQ0F3cEQsRUFBQSxDQUFHLENBQ0Q3OUMsRUFBQSxDQUNGLEVBQUc4OUMsRUFBQSxDQUFHeG9ELFNBQUEsRUFBVyxtQ0FBbUMsQ0FBQztBQUNyRCxJQUFNd3BELEVBQUEsR0FBSztBQUFBO0FBRVgsSUFBTUMsRUFBQSxHQUFOLGNBQWlCdDFDLENBQUEsQ0FBRTtFQUNqQjNULFlBQUEsRUFBYztJQUNaLE1BQU0sR0FBR0QsU0FBUyxHQUFHLEtBQUtxakMsUUFBQSxHQUFXLE9BQUksS0FBSzhsQixnQkFBQSxHQUFtQixNQUFNLEtBQUtDLGVBQUEsR0FBa0JsaEQsRUFBQSxDQUFHLE1BQU07TUFDckcsS0FBS21oRCxZQUFBLENBQWE7SUFDcEIsR0FBRyxHQUFHLEdBQUcsS0FBS0Msd0JBQUEsR0FBMkJwaEQsRUFBQSxDQUFHLE1BQU07TUFDaEQsS0FBS3FoRCxnQkFBQSxDQUFpQjtJQUN4QixHQUFHeE4sRUFBRSxHQUFHLEtBQUt5Tix1QkFBQSxHQUEyQmhyRCxDQUFBLElBQU07TUFDNUMsS0FBS2lyRCxlQUFBLENBQWdCanJELENBQUM7SUFDeEI7RUFDRjtFQU1BLElBQUk2VyxJQUFBLEVBQU07SUFDUixPQUFPO01BQ0xDLGFBQUEsRUFBZTtNQUNmbzBDLG1CQUFBLEVBQXFCO01BQ3JCbjBDLFVBQUEsRUFBWTtNQUNabzBDLGdCQUFBLEVBQWtCO01BQ2xCQyxXQUFBLEVBQWE7TUFDYi9qQixZQUFBLEVBQWM7SUFDaEI7RUFDRjtFQU1BLElBQUlHLFlBQUEsRUFBYztJQUNoQixJQUFJLEtBQUttakIsZ0JBQUEsS0FBcUIsTUFDNUIsT0FBTyxLQUFLQSxnQkFBQTtJQUNkLE1BQU0zcUQsQ0FBQSxHQUFJLEtBQUtzVixLQUFBLENBQU0rSSxPQUFBLENBQVFsUixhQUFBLENBQWMsSUFBSWtQLENBQUEsQ0FBRXhGLEdBQUEsQ0FBSTBILE9BQUEsRUFBUztJQUM5RCxPQUFPdmUsQ0FBQSxJQUFLLEtBQUsycUQsZ0JBQUEsR0FBbUIzcUQsQ0FBQSxDQUFFeVAscUJBQUEsQ0FBc0IsR0FBRyxLQUFLazdDLGdCQUFBLElBQW9CO01BQ3RGMTZDLEtBQUEsRUFBTztNQUNQSixJQUFBLEVBQU07TUFDTkcsS0FBQSxFQUFPO0lBQ1Q7RUFDRjtFQUlBLE1BQU1pZixRQUFBLEVBQVU7SUFDZCxLQUFLbzhCLFdBQUEsQ0FBWSxHQUFHLEtBQUszK0MsSUFBQSxDQUFLLEdBQUcsS0FBS3NpQixVQUFBLENBQVc7RUFDbkQ7RUFZQXdWLGVBQWV4a0MsQ0FBQSxFQUFHO0lBQ2hCQSxDQUFBLEdBQUksS0FBS3NyRCxnQ0FBQSxDQUFpQyxJQUFJNXFELE1BQUEsQ0FBT29FLG1CQUFBLENBQW9CLE1BQU07TUFDN0UsS0FBS3ltRCw4QkFBQSxDQUErQjtJQUN0QyxHQUFHO01BQ0QzbUIsT0FBQSxFQUFTO0lBQ1gsQ0FBQztFQUNIO0VBSUEyUixlQUFBLEVBQWlCO0lBQ2YsTUFBTTtNQUFFdjFCLFlBQUEsRUFBY2hoQjtJQUFFLElBQUksS0FBSytWLE1BQUE7SUFDakMsS0FBS1QsS0FBQSxDQUFNK0ksT0FBQSxDQUFRelIsU0FBQSxDQUFVMFMsTUFBQSxDQUFPLEtBQUt6SSxHQUFBLENBQUl1MEMsV0FBQSxFQUFhcHJELENBQUEsQ0FBRXM1QyxhQUFhO0VBQzNFO0VBT0EsSUFBSTlCLGtCQUFBLEVBQW9CO0lBQ3RCLE1BQU07TUFBRW4wQixPQUFBLEVBQVNyakIsQ0FBQTtNQUFHd3VCLGFBQUEsRUFBZW51QixDQUFBO01BQUdrakIsYUFBQSxFQUFlbGlCO0lBQUUsSUFBSSxLQUFLMFUsTUFBQTtJQUNoRSxPQUFPLENBQUMsRUFBRTFWLENBQUEsQ0FBRW91QixNQUFBLElBQVVwdEIsQ0FBQSxDQUFFb3RCLE1BQUEsSUFBVXp1QixDQUFBLENBQUVtUixPQUFBLENBQVFzZCxNQUFBO0VBQzlDO0VBSUEsSUFBSWdwQix5QkFBQSxFQUEyQjtJQUM3QixPQUFPLEtBQUsxaEMsTUFBQSxDQUFPc04sT0FBQSxDQUFRbFMsT0FBQSxDQUFRbWlCLFFBQUEsQ0FBUyxJQUFJLE9BQUt0eUIsTUFBQSxDQUFPaWEsT0FBQSxDQUFRLEtBQUtsRixNQUFNLEVBQUVwSixNQUFBLENBQU8sQ0FBQyxDQUFDM00sQ0FBQSxFQUFHSyxDQUFDLE1BQU1BLENBQUEsQ0FBRTQ4QixPQUFBLFlBQW1CaEwsRUFBRSxFQUFFM1gsSUFBQSxDQUFLLENBQUMsQ0FBQ3RhLENBQUEsRUFBR0ssQ0FBQyxNQUFNQSxDQUFBLENBQUU0OEIsT0FBQSxDQUFRM0osUUFBQSxDQUFTLENBQUM7RUFDcEs7RUFJQTlmLFFBQUEsRUFBVTtJQUNSLEtBQUs4QixLQUFBLENBQU16QixNQUFBLENBQU85RSxTQUFBLEdBQVksSUFBSSxLQUFLeThDLGtDQUFBLENBQW1DO0VBQzVFO0VBSUE1VCxpQkFBQSxFQUFtQjtJQUNqQixNQUFNO01BQUV2MEIsT0FBQSxFQUFTcmpCLENBQUE7TUFBR3d1QixhQUFBLEVBQWVudUIsQ0FBQTtNQUFHa2pCLGFBQUEsRUFBZWxpQjtJQUFFLElBQUksS0FBSzBVLE1BQUE7SUFDaEUxVixDQUFBLENBQUVpakIsS0FBQSxDQUFNLEdBQUdqaUIsQ0FBQSxDQUFFaWlCLEtBQUEsQ0FBTSxHQUFHdGpCLENBQUEsQ0FBRW1SLE9BQUEsQ0FBUW1TLEtBQUEsQ0FBTTtFQUN4QztFQUlBK25DLFlBQUEsRUFBYztJQUNaLE1BQU1yckQsQ0FBQSxHQUFJVSxNQUFBLENBQU91OUIsVUFBQSxHQUFhcHlCLEVBQUE7SUFDOUI3TCxDQUFBLEtBQU0sS0FBSzZrQyxRQUFBLElBQVksS0FBS3h2QixnQkFBQSxDQUFpQmhDLElBQUEsQ0FBS3NILEVBQUEsRUFBSTtNQUNwRDJRLFNBQUEsRUFBVyxLQUFLdVo7SUFDbEIsQ0FBQyxHQUFHLEtBQUtBLFFBQUEsR0FBVzdrQyxDQUFBO0VBQ3RCO0VBSUEwTSxLQUFBLEVBQU87SUFDTCxLQUFLNEksS0FBQSxDQUFNekIsTUFBQSxHQUFTdkgsQ0FBQSxDQUFFZ0QsU0FBQSxDQUFVLEtBQUtzRSxNQUFBLENBQU9DLE1BQU0sR0FBRyxLQUFLeUIsS0FBQSxDQUFNK0ksT0FBQSxHQUFVL1IsQ0FBQSxDQUFFSSxJQUFBLENBQUssT0FBTyxDQUN0RixLQUFLbUssR0FBQSxDQUFJQyxhQUFBLEVBQ1QsSUFBRyxLQUFLWCxLQUFBLEdBQVEsQ0FBQyxLQUFLVSxHQUFBLENBQUl3d0IsWUFBWSxJQUFJLEVBQUMsRUFDNUMsR0FBRyxLQUFLL3hCLEtBQUEsQ0FBTTBiLFFBQUEsR0FBVzFrQixDQUFBLENBQUVJLElBQUEsQ0FBSyxPQUFPLEtBQUttSyxHQUFBLENBQUlFLFVBQVUsR0FBRyxLQUFLekIsS0FBQSxDQUFNekIsTUFBQSxDQUFPb2MsV0FBQSxHQUFjLEtBQUt1WCxXQUFBLENBQVl2M0IsS0FBQSxJQUFTLEtBQUtxRixLQUFBLENBQU0rSSxPQUFBLENBQVF6UixTQUFBLENBQVVDLEdBQUEsQ0FBSSxLQUFLZ0ssR0FBQSxDQUFJcTBDLG1CQUFtQixHQUFHLEtBQUs1MUMsS0FBQSxDQUFNMGIsUUFBQSxDQUFTdEcsS0FBQSxDQUFNK2dDLGFBQUEsR0FBZ0IsS0FBSzczQyxNQUFBLENBQU84M0MsU0FBQSxHQUFZLE1BQU0sS0FBS3AyQyxLQUFBLENBQU0rSSxPQUFBLENBQVFuZSxXQUFBLENBQVksS0FBS29WLEtBQUEsQ0FBTTBiLFFBQVEsR0FBRyxLQUFLMWIsS0FBQSxDQUFNekIsTUFBQSxDQUFPM1QsV0FBQSxDQUFZLEtBQUtvVixLQUFBLENBQU0rSSxPQUFPLEdBQUcsS0FBS3N0QyxnQ0FBQSxDQUFpQztFQUNoWjtFQUlBMzhCLFdBQUEsRUFBYTtJQUNYLE1BQU1odkIsQ0FBQSxHQUFJO0lBQ1YsSUFBSXNNLENBQUEsQ0FBRXJLLEdBQUEsQ0FBSWpDLENBQUMsR0FDVDtJQUNGLE1BQU1LLENBQUEsR0FBSWlNLENBQUEsQ0FBRUksSUFBQSxDQUFLLFNBQVMsTUFBTTtNQUM5QmlILEVBQUEsRUFBSTNULENBQUE7TUFDSndPLFdBQUEsRUFBYWk4QyxFQUFBLENBQUc1a0QsUUFBQSxDQUFTO0lBQzNCLENBQUM7SUFDRCxLQUFLK04sTUFBQSxDQUFPOFcsS0FBQSxJQUFTLENBQUNoaUIsQ0FBQSxDQUFFLEtBQUtrTCxNQUFBLENBQU84VyxLQUFLLEtBQUssS0FBSzlXLE1BQUEsQ0FBTzhXLEtBQUEsQ0FBTWtoQyxLQUFBLElBQVN2ckQsQ0FBQSxDQUFFa2dCLFlBQUEsQ0FBYSxTQUFTLEtBQUszTSxNQUFBLENBQU84VyxLQUFBLENBQU1raEMsS0FBSyxHQUFHdC9DLENBQUEsQ0FBRS9JLE9BQUEsQ0FBUXhELFFBQUEsQ0FBU0ssSUFBQSxFQUFNQyxDQUFDO0VBQ3ZKO0VBSUFzckQsaUNBQUEsRUFBbUM7SUFDakMsS0FBS3AyQyxTQUFBLENBQVVyQyxFQUFBLENBQUduVCxRQUFBLEVBQVUsbUJBQW1CLEtBQUsrcUQsd0JBQXdCLEdBQUcsS0FBS3YxQyxTQUFBLENBQVVyQyxFQUFBLENBQUd4UyxNQUFBLEVBQVEsVUFBVSxLQUFLa3FELGVBQUEsRUFBaUI7TUFDdkkxN0IsT0FBQSxFQUFTO0lBQ1gsQ0FBQyxHQUFHLEtBQUszWixTQUFBLENBQVVyQyxFQUFBLENBQUcsS0FBS29DLEtBQUEsQ0FBTTBiLFFBQUEsRUFBVSxhQUFhLEtBQUtnNkIsdUJBQUEsRUFBeUI7TUFDcEZhLE9BQUEsRUFBUztNQUNUMzhCLE9BQUEsRUFBUztJQUNYLENBQUMsR0FBRyxLQUFLM1osU0FBQSxDQUFVckMsRUFBQSxDQUFHLEtBQUtvQyxLQUFBLENBQU0wYixRQUFBLEVBQVUsY0FBYyxLQUFLZzZCLHVCQUFBLEVBQXlCO01BQ3JGYSxPQUFBLEVBQVM7TUFDVDM4QixPQUFBLEVBQVM7SUFDWCxDQUFDO0VBQ0g7RUFJQXM4QixtQ0FBQSxFQUFxQztJQUNuQyxLQUFLajJDLFNBQUEsQ0FBVWpDLEdBQUEsQ0FBSXZULFFBQUEsRUFBVSxtQkFBbUIsS0FBSytxRCx3QkFBd0IsR0FBRyxLQUFLdjFDLFNBQUEsQ0FBVWpDLEdBQUEsQ0FBSTVTLE1BQUEsRUFBUSxVQUFVLEtBQUtrcUQsZUFBZSxHQUFHLEtBQUtyMUMsU0FBQSxDQUFVakMsR0FBQSxDQUFJLEtBQUtnQyxLQUFBLENBQU0wYixRQUFBLEVBQVUsYUFBYSxLQUFLZzZCLHVCQUF1QixHQUFHLEtBQUt6MUMsU0FBQSxDQUFVakMsR0FBQSxDQUFJLEtBQUtnQyxLQUFBLENBQU0wYixRQUFBLEVBQVUsY0FBYyxLQUFLZzZCLHVCQUF1QjtFQUNwVDtFQUlBTywrQkFBQSxFQUFpQztJQUMvQixLQUFLLzFDLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHLEtBQUtvQyxLQUFBLENBQU0wYixRQUFBLEVBQVUsU0FBVWh4QixDQUFBLElBQU07TUFDcEUsS0FBSzhyRCxlQUFBLENBQWdCOXJELENBQUM7SUFDeEIsR0FBRyxLQUFFLEdBQUcsS0FBS3dWLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHblQsUUFBQSxFQUFVLFdBQVlDLENBQUEsSUFBTTtNQUNuRSxLQUFLK3JELGVBQUEsQ0FBZ0IvckQsQ0FBQztJQUN4QixHQUFHLElBQUUsR0FBRyxLQUFLd1Ysd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUduVCxRQUFBLEVBQVUsYUFBY0MsQ0FBQSxJQUFNO01BQ3JFLEtBQUtnc0QsZUFBQSxDQUFnQmhzRCxDQUFDO0lBQ3hCLEdBQUcsSUFBRSxHQUFHLEtBQUtpc0QsdUJBQUEsQ0FBd0IsR0FBRyxLQUFLQyxxQkFBQSxDQUFzQjtFQUNyRTtFQUlBRCx3QkFBQSxFQUEwQjtJQUN4QixJQUFJanNELENBQUE7SUFDSixLQUFLd1Ysd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUcsS0FBS29DLEtBQUEsQ0FBTTBiLFFBQUEsRUFBVSxhQUFhcm5CLEVBQUEsQ0FBSXRKLENBQUEsSUFBTTtNQUMzRSxNQUFNZ0IsQ0FBQSxHQUFJaEIsQ0FBQSxDQUFFdVYsTUFBQSxDQUFPMVMsT0FBQSxDQUFRLFdBQVc7TUFDdEMsS0FBSzZTLE1BQUEsQ0FBT29xQixjQUFBLENBQWV5VyxnQkFBQSxJQUFvQnYxQyxDQUFBLElBQUtyQixDQUFBLEtBQU1xQixDQUFBLEtBQU1yQixDQUFBLEdBQUlxQixDQUFBLEVBQUcsS0FBS2dVLGdCQUFBLENBQWlCaEMsSUFBQSxDQUFLa3dCLEVBQUEsRUFBSTtRQUNwRzNWLEtBQUEsRUFBTyxLQUFLN1gsTUFBQSxDQUFPaUwsWUFBQSxDQUFheTFCLG1CQUFBLENBQW9CcDFDLENBQUM7TUFDdkQsQ0FBQztJQUNILEdBQUcsRUFBRSxHQUFHO01BQ042dEIsT0FBQSxFQUFTO0lBQ1gsQ0FBQztFQUNIO0VBSUFvOEIsaUNBQUEsRUFBbUM7SUFDakMsS0FBSzkxQyx3QkFBQSxDQUF5QkUsUUFBQSxDQUFTO0VBQ3pDO0VBSUFtMUMsYUFBQSxFQUFlO0lBQ2IsS0FBS0YsZ0JBQUEsR0FBbUIsTUFBTSxLQUFLVSxXQUFBLENBQVk7RUFDakQ7RUFNQVUsZ0JBQWdCL3JELENBQUEsRUFBRztJQUNqQixRQUFRQSxDQUFBLENBQUV3eUIsT0FBQTtNQUFBLEtBQ0hwc0IsQ0FBQSxDQUFFRyxLQUFBO1FBQ0wsS0FBS3dnRCxZQUFBLENBQWEvbUQsQ0FBQztRQUNuQjtNQUFBLEtBQ0dvRyxDQUFBLENBQUVDLFNBQUE7TUFBQSxLQUNGRCxDQUFBLENBQUVhLE1BQUE7UUFDTCxLQUFLa2xELGdCQUFBLENBQWlCbnNELENBQUM7UUFDdkI7TUFBQSxLQUNHb0csQ0FBQSxDQUFFTyxHQUFBO1FBQ0wsS0FBS3lsRCxhQUFBLENBQWNwc0QsQ0FBQztRQUNwQjtNQUFBO1FBRUEsS0FBS3FzRCxnQkFBQSxDQUFpQnJzRCxDQUFDO1FBQ3ZCO0lBQUE7RUFFTjtFQU1BcXNELGlCQUFpQnJzRCxDQUFBLEVBQUc7SUFDbEIsTUFBTTtRQUFFZ2pCLFlBQUEsRUFBYzNpQjtNQUFFLElBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUE7TUFBYzNmLENBQUEsR0FBSXJCLENBQUEsQ0FBRTRWLE1BQUEsQ0FBTzFTLE9BQUEsQ0FBUSxJQUFJLEtBQUsyVCxHQUFBLENBQUlDLGFBQUEsRUFBZTtNQUFHL1UsQ0FBQSxHQUFJL0IsQ0FBQSxDQUFFMmhDLE1BQUEsSUFBVTNoQyxDQUFBLENBQUV5aEMsT0FBQSxJQUFXemhDLENBQUEsQ0FBRTBoQyxPQUFBLElBQVcxaEMsQ0FBQSxDQUFFeXpCLFFBQUE7SUFDdEosSUFBSXB6QixDQUFBLEtBQU0sVUFBVWdCLENBQUEsS0FBTSxNQUFNO01BQzlCLEtBQUswVSxNQUFBLENBQU95akMsV0FBQSxDQUFZOUQsT0FBQSxDQUFRMTFDLENBQUM7TUFDakM7SUFDRjtJQUNBcUIsQ0FBQSxJQUFLaEIsQ0FBQSxJQUFLMEIsQ0FBQSxLQUFNLEtBQUtnVSxNQUFBLENBQU9pTCxZQUFBLENBQWE0NEIsaUJBQUEsQ0FBa0IsR0FBRyxLQUFLN2pDLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUMsS0FBQSxDQUFNO0VBQzFGO0VBSUE2b0MsaUJBQWlCbnNELENBQUEsRUFBRztJQUNsQixNQUFNO01BQUVnaEIsWUFBQSxFQUFjM2dCLENBQUE7TUFBRzgvQixjQUFBLEVBQWdCOStCLENBQUE7TUFBRzRoQixLQUFBLEVBQU9saEI7SUFBRSxJQUFJLEtBQUtnVSxNQUFBO0lBQzlELElBQUkxVSxDQUFBLENBQUV1MUMsZ0JBQUEsSUFBb0IsQ0FBQ3RnQyxDQUFBLENBQUVvQixpQkFBQSxFQUFtQjtNQUM5QyxNQUFNeFQsQ0FBQSxHQUFJN0QsQ0FBQSxDQUFFMDJDLG9CQUFBLENBQXFCO1FBQUcxeUMsQ0FBQSxHQUFJaEUsQ0FBQSxDQUFFMjJDLHlCQUFBLENBQTBCOXlDLENBQUEsRUFBRyxJQUFFO01BQ3pFbkMsQ0FBQSxDQUFFbWhCLFVBQUEsQ0FBVzdlLENBQUEsRUFBR3RDLENBQUEsQ0FBRW9oQixTQUFBLENBQVVzQixLQUFLLEdBQUdwakIsQ0FBQSxDQUFFZzFDLGNBQUEsQ0FBZXIyQyxDQUFDLEdBQUdBLENBQUEsQ0FBRXl5QixjQUFBLENBQWUsR0FBR3p5QixDQUFBLENBQUUwekIsZUFBQSxDQUFnQixHQUFHMXpCLENBQUEsQ0FBRXduRCx3QkFBQSxDQUF5QjtJQUMvSDtFQUNGO0VBT0E0RSxjQUFjcHNELENBQUEsRUFBRztJQUNmLEtBQUsrVixNQUFBLENBQU9vcUIsY0FBQSxDQUFla1csY0FBQSxDQUFlcjJDLENBQUMsR0FBRyxLQUFLK1YsTUFBQSxDQUFPc04sT0FBQSxDQUFRbFMsT0FBQSxDQUFRc2QsTUFBQSxJQUFVLEtBQUsxWSxNQUFBLENBQU9zTixPQUFBLENBQVFsUyxPQUFBLENBQVFtUyxLQUFBLENBQU0sR0FBRyxLQUFLdk4sTUFBQSxDQUFPa04sS0FBQSxDQUFNQyxVQUFBLENBQVcsS0FBS25OLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYWdDLFlBQUEsRUFBYyxLQUFLak4sTUFBQSxDQUFPa04sS0FBQSxDQUFNRSxTQUFBLENBQVVDLEdBQUcsS0FBSyxLQUFLck4sTUFBQSxDQUFPeVksYUFBQSxDQUFjQyxNQUFBLEdBQVMsS0FBSzFZLE1BQUEsQ0FBT3lZLGFBQUEsQ0FBY2xMLEtBQUEsQ0FBTSxJQUFJLEtBQUt2TixNQUFBLENBQU93TixhQUFBLENBQWNrTCxNQUFBLEdBQVMsS0FBSzFZLE1BQUEsQ0FBT3dOLGFBQUEsQ0FBY0QsS0FBQSxDQUFNLElBQUksS0FBS3ZOLE1BQUEsQ0FBT3NOLE9BQUEsQ0FBUUMsS0FBQSxDQUFNO0VBQzNZO0VBTUF5akMsYUFBYS9tRCxDQUFBLEVBQUc7SUFDZCxNQUFNO01BQUVnaEIsWUFBQSxFQUFjM2dCLENBQUE7TUFBRzgvQixjQUFBLEVBQWdCOStCO0lBQUUsSUFBSSxLQUFLMFUsTUFBQTtJQUNwRCxJQUFJLEtBQUt5aEMsaUJBQUEsRUFDUDtJQUNGLE1BQU16MUMsQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFd2lCLGlCQUFBLElBQXFCO0lBQ2pDLElBQUl4aEIsQ0FBQSxDQUFFdTFDLGdCQUFBLElBQW9CLENBQUN0Z0MsQ0FBQSxDQUFFb0IsaUJBQUEsRUFBbUI7TUFDOUNyVyxDQUFBLENBQUVnMUMsY0FBQSxDQUFlcjJDLENBQUMsR0FBR0EsQ0FBQSxDQUFFeXlCLGNBQUEsQ0FBZSxHQUFHenlCLENBQUEsQ0FBRXduRCx3QkFBQSxDQUF5QixHQUFHeG5ELENBQUEsQ0FBRTB6QixlQUFBLENBQWdCO01BQ3pGO0lBQ0Y7SUFDQSxJQUFJLENBQUMsS0FBSzhqQixpQkFBQSxJQUFxQnoxQyxDQUFBLElBQUsvQixDQUFBLENBQUU0VixNQUFBLENBQU9wSixPQUFBLEtBQVksUUFBUTtNQUMvRCxNQUFNdEksQ0FBQSxHQUFJLEtBQUs2UixNQUFBLENBQU9pTCxZQUFBLENBQWFGLE1BQUEsQ0FBTztNQUMxQzlnQixDQUFBLENBQUV5eUIsY0FBQSxDQUFlLEdBQUcsS0FBSzFjLE1BQUEsQ0FBT2tOLEtBQUEsQ0FBTUMsVUFBQSxDQUFXaGYsQ0FBQyxHQUFHLEtBQUs2UixNQUFBLENBQU9zTixPQUFBLENBQVFrTCxXQUFBLENBQVlycUIsQ0FBQztJQUN4RjtJQUNBLEtBQUs2UixNQUFBLENBQU9vcUIsY0FBQSxDQUFla1csY0FBQSxDQUFlcjJDLENBQUM7RUFDN0M7RUFNQWdzRCxnQkFBZ0Joc0QsQ0FBQSxFQUFHO0lBQ2pCLElBQUl1RSxDQUFBLEVBQUdHLENBQUE7SUFDUCxJQUFJLENBQUMxRSxDQUFBLENBQUVzc0QsU0FBQSxFQUNMO0lBQ0YsTUFBTWpzRCxDQUFBLEdBQUlMLENBQUEsQ0FBRTRWLE1BQUE7SUFDWixLQUFLTixLQUFBLENBQU16QixNQUFBLENBQU96USxRQUFBLENBQVMvQyxDQUFDLEtBQUtpVyxDQUFBLENBQUVlLFVBQUEsS0FBZSxLQUFLdEIsTUFBQSxDQUFPaUwsWUFBQSxDQUFhNDRCLGlCQUFBLENBQWtCLEdBQUcsS0FBSzdqQyxNQUFBLENBQU9zTixPQUFBLENBQVFDLEtBQUEsQ0FBTTtJQUMxSCxNQUFNdmhCLENBQUEsSUFBS3dDLENBQUEsR0FBSSxLQUFLd1IsTUFBQSxDQUFPeVksYUFBQSxDQUFjbFosS0FBQSxDQUFNK0ksT0FBQSxLQUFZLE9BQU8sU0FBUzlaLENBQUEsQ0FBRW5CLFFBQUEsQ0FBUy9DLENBQUM7TUFBRzZELENBQUEsSUFBS1EsQ0FBQSxHQUFJLEtBQUtxUixNQUFBLENBQU9zTixPQUFBLENBQVEvTixLQUFBLENBQU02dUIsZUFBQSxLQUFvQixPQUFPLFNBQVN6L0IsQ0FBQSxDQUFFdEIsUUFBQSxDQUFTL0MsQ0FBQztNQUFHZ0UsQ0FBQSxHQUFJdEMsQ0FBQSxJQUFLbUMsQ0FBQTtJQUN6TCxJQUFJLEtBQUs2UixNQUFBLENBQU95WSxhQUFBLENBQWNDLE1BQUEsSUFBVSxDQUFDcHFCLENBQUEsRUFBRztNQUMxQyxLQUFLMFIsTUFBQSxDQUFPeVksYUFBQSxDQUFjbEwsS0FBQSxDQUFNO01BQ2hDLE1BQU0xZSxDQUFBLEdBQUksS0FBS21SLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYXkxQixtQkFBQSxDQUFvQnAyQyxDQUFDO01BQ3hELEtBQUswVixNQUFBLENBQU9zTixPQUFBLENBQVFrTCxXQUFBLENBQVkzcEIsQ0FBQztJQUNuQztJQUNBLEtBQUttUixNQUFBLENBQU9vcUIsY0FBQSxDQUFla1csY0FBQSxDQUFlcjJDLENBQUM7RUFDN0M7RUFZQWlyRCxnQkFBZ0JqckQsQ0FBQSxFQUFHO0lBQ2pCLElBQUlLLENBQUEsR0FBSUwsQ0FBQSxDQUFFNFYsTUFBQTtJQUNWLElBQUl2VixDQUFBLEtBQU0sS0FBS2lWLEtBQUEsQ0FBTTBiLFFBQUEsRUFBVTtNQUM3QixNQUFNM3ZCLENBQUEsR0FBSXJCLENBQUEsWUFBYXVzRCxVQUFBLEdBQWF2c0QsQ0FBQSxDQUFFd3NELE9BQUEsR0FBVXhzRCxDQUFBLENBQUV5c0QsT0FBQSxDQUFRLEdBQUdELE9BQUE7UUFBU3pxRCxDQUFBLEdBQUkvQixDQUFBLFlBQWF1c0QsVUFBQSxHQUFhdnNELENBQUEsQ0FBRTZqRCxPQUFBLEdBQVU3akQsQ0FBQSxDQUFFeXNELE9BQUEsQ0FBUSxHQUFHNUksT0FBQTtNQUM3SHhqRCxDQUFBLEdBQUlOLFFBQUEsQ0FBU2dqRCxnQkFBQSxDQUFpQjFoRCxDQUFBLEVBQUdVLENBQUM7SUFDcEM7SUFDQSxJQUFJO01BQ0YsS0FBS2dVLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYSs0QiwwQkFBQSxDQUEyQjE1QyxDQUFDO0lBQ3ZELFFBQUU7TUFDQSxLQUFLMFYsTUFBQSxDQUFPdWxDLGtCQUFBLENBQW1CRSxlQUFBLENBQWdCLEtBQUssS0FBS3psQyxNQUFBLENBQU9rTixLQUFBLENBQU1nNUIsaUJBQUEsQ0FBa0I7SUFDMUY7SUFDQSxLQUFLbG1DLE1BQUEsQ0FBT3dWLFFBQUEsQ0FBU0QsU0FBQSxJQUFhLEtBQUt2VixNQUFBLENBQU9zTixPQUFBLENBQVFrTCxXQUFBLENBQVk7RUFDcEU7RUFVQXU5QixnQkFBZ0I5ckQsQ0FBQSxFQUFHO0lBQ2pCLElBQUksQ0FBQ3NXLENBQUEsQ0FBRWMsV0FBQSxFQUNMO0lBQ0YsTUFBTS9XLENBQUEsR0FBSUwsQ0FBQSxDQUFFNFYsTUFBQTtNQUFRdlUsQ0FBQSxHQUFJckIsQ0FBQSxDQUFFMGhDLE9BQUEsSUFBVzFoQyxDQUFBLENBQUV5aEMsT0FBQTtJQUN2QyxJQUFJbjFCLENBQUEsQ0FBRWlELFFBQUEsQ0FBU2xQLENBQUMsS0FBS2dCLENBQUEsRUFBRztNQUN0QnJCLENBQUEsQ0FBRXduRCx3QkFBQSxDQUF5QixHQUFHeG5ELENBQUEsQ0FBRTB6QixlQUFBLENBQWdCO01BQ2hELE1BQU0zeEIsQ0FBQSxHQUFJMUIsQ0FBQSxDQUFFK21ELFlBQUEsQ0FBYSxNQUFNO1FBQUdsakQsQ0FBQSxHQUFJMkcsRUFBQSxDQUFHOUksQ0FBQztNQUMxQ3NKLEVBQUEsQ0FBR25ILENBQUM7TUFDSjtJQUNGO0lBQ0EsS0FBS3dvRCxzQkFBQSxDQUF1QjFzRCxDQUFDO0VBQy9CO0VBUUEwc0QsdUJBQXVCMXNELENBQUEsRUFBRztJQUN4QixNQUFNSyxDQUFBLEdBQUksS0FBSzBWLE1BQUEsQ0FBT2lMLFlBQUEsQ0FBYXFCLGVBQUEsQ0FBZ0IsRUFBRTtNQUFHaGhCLENBQUEsR0FBSWlMLENBQUEsQ0FBRWtELE1BQUEsQ0FBT25QLENBQUEsQ0FBRXdULE1BQU0sRUFBRS9ELE1BQUE7TUFBUS9OLENBQUEsR0FBSS9CLENBQUEsQ0FBRTBqRCxLQUFBO01BQU87UUFBRXZqQixjQUFBLEVBQWdCajhCO01BQUUsSUFBSSxLQUFLNlIsTUFBQTtJQUNqSSxJQUFJL1YsQ0FBQSxDQUFFNFYsTUFBQSxZQUFrQnJULE9BQUEsSUFBV3ZDLENBQUEsQ0FBRTRWLE1BQUEsQ0FBT29rQyxXQUFBLENBQVksS0FBSzFrQyxLQUFBLENBQU0wYixRQUFRLEtBRzNFLENBQUM5c0IsQ0FBQSxDQUFFMHlDLGdCQUFBLElBR0h2MUMsQ0FBQSxHQUFJVSxDQUFBLEVBQUc7TUFDTC9CLENBQUEsQ0FBRXduRCx3QkFBQSxDQUF5QixHQUFHeG5ELENBQUEsQ0FBRTB6QixlQUFBLENBQWdCO01BQ2hELE1BQU07UUFBRTFTLFlBQUEsRUFBY3pjLENBQUE7UUFBRzBlLEtBQUEsRUFBT3ZlLENBQUE7UUFBRzJlLE9BQUEsRUFBU3plO01BQUUsSUFBSSxLQUFLbVIsTUFBQTtNQUN2RCxDQUFDLENBQUN4UixDQUFBLENBQUU2ZixTQUFBLENBQVVySixJQUFBLENBQUsyckIsU0FBQSxJQUFhLENBQUNuaUMsQ0FBQSxDQUFFNmYsU0FBQSxDQUFVeFYsT0FBQSxLQUFZckssQ0FBQSxDQUFFeWdDLFdBQUEsQ0FBWSxHQUFHdGdDLENBQUEsQ0FBRXUzQyxpQkFBQSxDQUFrQixHQUFHcjNDLENBQUEsQ0FBRTJwQixXQUFBLENBQVlocUIsQ0FBQSxDQUFFNmYsU0FBUztJQUM1SDtFQUNGO0VBS0EybUMsaUJBQUEsRUFBbUI7SUFDakIsTUFBTTtRQUFFOXFCLG1CQUFBLEVBQXFCamdDLENBQUE7UUFBR21nQyxjQUFBLEVBQWdCOS9CO01BQUUsSUFBSSxLQUFLMFYsTUFBQTtNQUFRMVUsQ0FBQSxHQUFJaVYsQ0FBQSxDQUFFWSxhQUFBO0lBQ3pFLElBQUlsWCxDQUFBLENBQUVrZ0MsNEJBQUEsSUFBZ0M3L0IsQ0FBQSxDQUFFdTJDLGdCQUFBLElBQW9CdGdDLENBQUEsQ0FBRXJVLEdBQUEsQ0FBSSxFQUFFK1csZUFBQSxDQUFnQixHQUFHLENBQUMzWCxDQUFBLEVBQUc7TUFDekZpVixDQUFBLENBQUVxQixLQUFBLElBQVMsS0FBSzVCLE1BQUEsQ0FBT3dOLGFBQUEsQ0FBY0QsS0FBQSxDQUFNO01BQzNDO0lBQ0Y7SUFDQSxNQUFNdmhCLENBQUEsR0FBSVYsQ0FBQSxDQUFFNkIsT0FBQSxDQUFRLElBQUltWixDQUFBLENBQUV4RixHQUFBLENBQUkwSCxPQUFBLEVBQVM7SUFDdkMsQ0FBQ3hjLENBQUEsS0FBTSxRQUFRQSxDQUFBLENBQUVtQixPQUFBLENBQVEsSUFBSW9ULENBQUEsQ0FBRU8sR0FBQSxDQUFJQyxhQUFBLEVBQWUsTUFBTSxLQUFLeEIsS0FBQSxDQUFNK0ksT0FBQSxNQUFhLEtBQUt0SSxNQUFBLENBQU93TixhQUFBLENBQWM2akIsWUFBQSxDQUFhL2xDLENBQUMsS0FBSyxLQUFLMFUsTUFBQSxDQUFPd04sYUFBQSxDQUFjRCxLQUFBLENBQU0sR0FBRyxFQUFFamlCLENBQUEsQ0FBRXNQLE9BQUEsQ0FBUUssYUFBQSxLQUFrQixhQUFhLEtBQUsrRSxNQUFBLENBQU9pTCxZQUFBLENBQWFnQyxZQUFBLElBQWdCLEtBQUtqTixNQUFBLENBQU9pTCxZQUFBLENBQWErNEIsMEJBQUEsQ0FBMkIxNEMsQ0FBQyxHQUFHLEtBQUswVSxNQUFBLENBQU93TixhQUFBLENBQWNnRCxTQUFBLENBQVUsSUFBRTtFQUNwVjtFQVFBMmxDLHNCQUFBLEVBQXdCO0lBQ3RCLFNBQVNsc0QsRUFBRUssQ0FBQSxFQUFHO01BQ1osTUFBTWdCLENBQUEsR0FBSWhCLENBQUEsQ0FBRXVWLE1BQUE7TUFDWmxGLEVBQUEsQ0FBR3JQLENBQUM7SUFDTjtJQUNBLEtBQUttVSx3QkFBQSxDQUF5QnRDLEVBQUEsQ0FBRyxLQUFLb0MsS0FBQSxDQUFNK0ksT0FBQSxFQUFTLFNBQVNyZSxDQUFDLEdBQUcsS0FBS3dWLHdCQUFBLENBQXlCdEMsRUFBQSxDQUFHLEtBQUtvQyxLQUFBLENBQU0rSSxPQUFBLEVBQVMsV0FBV3JlLENBQUMsR0FBRyxLQUFLd1Ysd0JBQUEsQ0FBeUJ0QyxFQUFBLENBQUcsS0FBS29DLEtBQUEsQ0FBTStJLE9BQUEsRUFBUyxZQUFZcmUsQ0FBQztFQUMxTTtBQUNGO0FBQ0EsSUFBTTJzRCxFQUFBLEdBQUs7RUFFVDduQyxTQUFBLEVBQVdqRSxFQUFBO0VBQ1htRSxRQUFBLEVBQVVqQixFQUFBO0VBQ1ZvQixTQUFBLEVBQVdULEVBQUE7RUFDWHlCLE9BQUEsRUFBU3hCLEVBQUE7RUFDVHBELEdBQUEsRUFBS3NELEVBQUE7RUFDTG1CLGdCQUFBLEVBQWtCTSxFQUFBO0VBQ2xCbEIsWUFBQSxFQUFjb0IsRUFBQTtFQUNkbEIsV0FBQSxFQUFhOEYsRUFBQTtFQUNiaEYsV0FBQSxFQUFhaUYsRUFBQTtFQUNiN0YsWUFBQSxFQUFjMkgsRUFBQTtFQUNkekgsUUFBQSxFQUFVMEgsRUFBQTtFQUNWekgsWUFBQSxFQUFjNEgsRUFBQTtFQUNkdEksUUFBQSxFQUFVd0ksRUFBQTtFQUNWNUgsU0FBQSxFQUFXOEgsRUFBQTtFQUNYNUgsVUFBQSxFQUFZcUksRUFBQTtFQUNabEksVUFBQSxFQUFZMEssRUFBQTtFQUNadkssS0FBQSxFQUFPd0ssRUFBQTtFQUVQckMsYUFBQSxFQUFld1IsRUFBQTtFQUNmM2MsT0FBQSxFQUFTc2dCLEVBQUE7RUFDVHBnQixhQUFBLEVBQWV5akIsRUFBQTtFQUVmd1MsV0FBQSxFQUFhL0QsRUFBQTtFQUNiejBCLFlBQUEsRUFBY2k0QixFQUFBO0VBQ2Q5WSxjQUFBLEVBQWdCK1osRUFBQTtFQUNoQmozQixLQUFBLEVBQU80NEIsRUFBQTtFQUNQNWIsbUJBQUEsRUFBcUJzYyxFQUFBO0VBQ3JCcVEsU0FBQSxFQUFXNVAsRUFBQTtFQUNYeDVCLHFCQUFBLEVBQXVCaTZCLEVBQUE7RUFDdkI3NUIsS0FBQSxFQUFPMDlCLEVBQUE7RUFDUC8xQixRQUFBLEVBQVVnMkIsRUFBQTtFQUNWakcsa0JBQUEsRUFBb0JxRyxFQUFBO0VBQ3BCaitCLFFBQUEsRUFBVThnQyxFQUFBO0VBQ1ZsM0IsS0FBQSxFQUFPdzNCLEVBQUE7RUFDUDFqQyxLQUFBLEVBQU9xb0MsRUFBQTtFQUNQMTRCLEVBQUEsRUFBSTI1QjtBQUNOO0FBQ0EsSUFBTW1DLEVBQUEsR0FBTixNQUFTO0VBSVBwckQsWUFBWXpCLENBQUEsRUFBRztJQUNiLEtBQUs4c0QsZUFBQSxHQUFrQixDQUFDLEdBQUcsS0FBS3ozQyxnQkFBQSxHQUFtQixJQUFJckMsRUFBQSxDQUFHO0lBQzFELElBQUkzUyxDQUFBLEVBQUdnQixDQUFBO0lBQ1AsS0FBSzByRCxPQUFBLEdBQVUsSUFBSWhrRCxPQUFBLENBQVEsQ0FBQ2hILENBQUEsRUFBR21DLENBQUEsS0FBTTtNQUNuQzdELENBQUEsR0FBSTBCLENBQUEsRUFBR1YsQ0FBQSxHQUFJNkMsQ0FBQTtJQUNiLENBQUMsR0FBRzZFLE9BQUEsQ0FBUUMsT0FBQSxDQUFRLEVBQUVnVyxJQUFBLENBQUssWUFBWTtNQUNyQyxLQUFLZ3VDLGFBQUEsR0FBZ0JodEQsQ0FBQSxFQUFHLEtBQUtrVSxRQUFBLENBQVMsR0FBRyxLQUFLKzRDLElBQUEsQ0FBSyxHQUFHLE1BQU0sS0FBS0MsS0FBQSxDQUFNLEdBQUcsTUFBTSxLQUFLbHRDLE1BQUEsQ0FBTztNQUM1RixNQUFNO1FBQUVnQixZQUFBLEVBQWNqZixDQUFBO1FBQUdraEIsS0FBQSxFQUFPL2UsQ0FBQTtRQUFHNnNCLEVBQUEsRUFBSTFzQixDQUFBO1FBQUdtZixxQkFBQSxFQUF1QmpmO01BQUUsSUFBSSxLQUFLdW9ELGVBQUE7TUFDNUV6b0QsQ0FBQSxDQUFFa3lDLGNBQUEsQ0FBZSxHQUFHaHlDLENBQUEsQ0FBRW9mLE1BQUEsQ0FBTyxHQUFHLEtBQUtxcEMsYUFBQSxDQUFjRyxTQUFBLEtBQWMsUUFBTSxLQUFLSCxhQUFBLENBQWMxd0MsUUFBQSxLQUFhLFFBQU1wWSxDQUFBLENBQUVnZixVQUFBLENBQVduaEIsQ0FBQSxDQUFFK2YsTUFBQSxDQUFPLElBQUk1ZCxDQUFBLENBQUVpZixTQUFBLENBQVVzQixLQUFLLEdBQUdwa0IsQ0FBQSxDQUFFO0lBQy9KLENBQUMsRUFBRXNmLEtBQUEsQ0FBTzVkLENBQUEsSUFBTTtNQUNkK0YsQ0FBQSxDQUFFLHFDQUFxQy9GLENBQUEsSUFBSyxPQUFPLEdBQUdWLENBQUEsQ0FBRVUsQ0FBQztJQUMzRCxDQUFDO0VBQ0g7RUFNQSxJQUFJaXJELGNBQWNodEQsQ0FBQSxFQUFHO0lBQ25CLElBQUlxQixDQUFBLEVBQUdVLENBQUE7SUFDUHNHLENBQUEsQ0FBRXJJLENBQUMsSUFBSSxLQUFLNFQsTUFBQSxHQUFTO01BQ25CLEdBQUc1VDtJQUNMLElBQUksS0FBSzRULE1BQUEsR0FBUztNQUNoQkMsTUFBQSxFQUFRN1Q7SUFDVixHQUFHMEwsRUFBQSxDQUFHLENBQUMsQ0FBQyxLQUFLa0ksTUFBQSxDQUFPdzVDLFFBQUEsRUFBVSxtQkFBbUIsZUFBZSxHQUFHLEtBQUt4NUMsTUFBQSxDQUFPdzVDLFFBQUEsSUFBWSxDQUFDLEtBQUt4NUMsTUFBQSxDQUFPQyxNQUFBLEtBQVcsS0FBS0QsTUFBQSxDQUFPQyxNQUFBLEdBQVMsS0FBS0QsTUFBQSxDQUFPdzVDLFFBQUEsRUFBVSxLQUFLeDVDLE1BQUEsQ0FBT3c1QyxRQUFBLEdBQVcsT0FBTyxLQUFLeDVDLE1BQUEsQ0FBT0MsTUFBQSxJQUFVLFNBQVMsS0FBS0QsTUFBQSxDQUFPQyxNQUFBLEdBQVMsYUFBYSxLQUFLRCxNQUFBLENBQU9sTSxRQUFBLEtBQWEsS0FBS2tNLE1BQUEsQ0FBT2xNLFFBQUEsR0FBVzNCLEVBQUEsQ0FBR0MsT0FBQSxHQUFVNkIsRUFBQSxDQUFHLEtBQUsrTCxNQUFBLENBQU9sTSxRQUFRLEdBQUdnRSxFQUFBLENBQUcsQ0FBQyxDQUFDLEtBQUtrSSxNQUFBLENBQU95NUMsWUFBQSxFQUFjLHVCQUF1QixxQkFBcUIsR0FBRyxLQUFLejVDLE1BQUEsQ0FBT21OLFlBQUEsR0FBZSxLQUFLbk4sTUFBQSxDQUFPbU4sWUFBQSxJQUFnQixLQUFLbk4sTUFBQSxDQUFPeTVDLFlBQUEsSUFBZ0IsYUFBYSxLQUFLejVDLE1BQUEsQ0FBTzgzQyxTQUFBLEdBQVksS0FBSzkzQyxNQUFBLENBQU84M0MsU0FBQSxLQUFjLFNBQVMsS0FBSzkzQyxNQUFBLENBQU84M0MsU0FBQSxHQUFZO0lBQ3JsQixNQUFNcnJELENBQUEsR0FBSTtNQUNSaU8sSUFBQSxFQUFNLEtBQUtzRixNQUFBLENBQU9tTixZQUFBO01BQ2xCalksSUFBQSxFQUFNLENBQUM7SUFDVDtJQUNBLEtBQUs4SyxNQUFBLENBQU9tWCxXQUFBLEdBQWMsS0FBS25YLE1BQUEsQ0FBT21YLFdBQUEsSUFBZSxPQUFJLEtBQUtuWCxNQUFBLENBQU8yUixTQUFBLEdBQVksS0FBSzNSLE1BQUEsQ0FBTzJSLFNBQUEsSUFBYTtNQUN4R2pJLENBQUEsRUFBRztNQUNIaEgsQ0FBQSxFQUFHO01BQ0gvUixDQUFBLEVBQUc7SUFDTCxHQUFHLEtBQUtxUCxNQUFBLENBQU8wNUMsV0FBQSxHQUFjLEtBQUsxNUMsTUFBQSxDQUFPMDVDLFdBQUEsR0FBYyxLQUFLMTVDLE1BQUEsQ0FBTzA1QyxXQUFBLEdBQWMsT0FBSSxLQUFLMTVDLE1BQUEsQ0FBT3RCLEtBQUEsR0FBUSxLQUFLc0IsTUFBQSxDQUFPdEIsS0FBQSxJQUFTLENBQUMsR0FBRyxLQUFLc0IsTUFBQSxDQUFPd0MsSUFBQSxHQUFPLEtBQUt4QyxNQUFBLENBQU93QyxJQUFBLElBQVEsQ0FBQyxHQUFHLEtBQUt4QyxNQUFBLENBQU85SyxJQUFBLEdBQU8sS0FBSzhLLE1BQUEsQ0FBTzlLLElBQUEsSUFBUTtNQUFFZ1osTUFBQSxFQUFRO0lBQUcsR0FBRyxLQUFLbE8sTUFBQSxDQUFPMjVDLE9BQUEsR0FBVSxLQUFLMzVDLE1BQUEsQ0FBTzI1QyxPQUFBLEtBQVksTUFBTSxDQUN4UixJQUFJLEtBQUszNUMsTUFBQSxDQUFPMHFDLFFBQUEsR0FBVyxLQUFLMXFDLE1BQUEsQ0FBTzBxQyxRQUFBLEtBQWEsTUFBTSxDQUMxRCxJQUFJLEtBQUsxcUMsTUFBQSxDQUFPNUMsYUFBQSxHQUFnQixLQUFLNEMsTUFBQSxDQUFPNUMsYUFBQSxLQUFrQixTQUFTLEtBQUs0QyxNQUFBLENBQU81QyxhQUFBLEdBQWdCLE9BQUt0SSxDQUFBLENBQUUsS0FBS2tMLE1BQUEsQ0FBTzlLLElBQUksS0FBSyxDQUFDLEtBQUs4SyxNQUFBLENBQU85SyxJQUFBLENBQUtnWixNQUFBLElBQVUsS0FBS2xPLE1BQUEsQ0FBTzlLLElBQUEsQ0FBS2daLE1BQUEsQ0FBTzllLE1BQUEsS0FBVyxPQUFPLEtBQUs0USxNQUFBLENBQU85SyxJQUFBLEdBQU87TUFBRWdaLE1BQUEsRUFBUSxDQUFDemhCLENBQUM7SUFBRSxJQUFJLEtBQUt1VCxNQUFBLENBQU8wSSxRQUFBLEdBQVcsS0FBSzFJLE1BQUEsQ0FBTzBJLFFBQUEsSUFBWSxRQUFLamIsQ0FBQSxHQUFJLEtBQUt1UyxNQUFBLENBQU93QyxJQUFBLEtBQVMsUUFBUS9VLENBQUEsQ0FBRTY1QixRQUFBLElBQVlyb0IsQ0FBQSxDQUFFSCxhQUFBLENBQWMsS0FBS2tCLE1BQUEsQ0FBT3dDLElBQUEsQ0FBSzhrQixRQUFRLEdBQUcsS0FBS3RuQixNQUFBLENBQU93QyxJQUFBLENBQUtDLFNBQUEsS0FBY3RVLENBQUEsR0FBSSxLQUFLNlIsTUFBQSxDQUFPd0MsSUFBQSxLQUFTLE9BQU8sU0FBU3JVLENBQUEsQ0FBRXNVLFNBQUEsS0FBYztFQUNuZDtFQU1BLElBQUkyMkMsY0FBQSxFQUFnQjtJQUNsQixPQUFPLEtBQUtwNUMsTUFBQTtFQUNkO0VBSUFNLFNBQUEsRUFBVztJQUNULE1BQU07TUFBRWs1QyxRQUFBLEVBQVVwdEQsQ0FBQTtNQUFHNlQsTUFBQSxFQUFReFQ7SUFBRSxJQUFJLEtBQUt1VCxNQUFBO0lBQ3hDLElBQUk1VCxDQUFBLElBQUtLLENBQUEsRUFDUCxNQUFNMFMsS0FBQSxDQUFNLDBFQUE4RDtJQUM1RSxJQUFJekssRUFBQSxDQUFHakksQ0FBQyxLQUFLLENBQUNpTSxDQUFBLENBQUVySyxHQUFBLENBQUk1QixDQUFDLEdBQ25CLE1BQU0wUyxLQUFBLENBQU0sdUJBQW9CMVMsQ0FBQSw0Q0FBMEM7SUFDNUUsSUFBSUEsQ0FBQSxJQUFLZ0ksQ0FBQSxDQUFFaEksQ0FBQyxLQUFLLENBQUNpTSxDQUFBLENBQUUwQixTQUFBLENBQVUzTixDQUFDLEdBQzdCLE1BQU0wUyxLQUFBLENBQU0sOENBQXdDO0VBQ3hEO0VBTUFrNkMsS0FBQSxFQUFPO0lBQ0wsS0FBS08sZ0JBQUEsQ0FBaUIsR0FBRyxLQUFLQyxnQkFBQSxDQUFpQjtFQUNqRDtFQVFBLE1BQU1QLE1BQUEsRUFBUTtJQUNaLE1BQU0sQ0FDSixTQUNBLE1BQ0EsZ0JBQ0EsU0FDQSxrQkFDQSxzQkFDQSx1QkFDQSxXQUNGLENBQUV0bkQsTUFBQSxDQUNBLENBQUN2RixDQUFBLEVBQUdnQixDQUFBLEtBQU1oQixDQUFBLENBQUUyZSxJQUFBLENBQUssWUFBWTtNQUMzQixJQUFJO1FBQ0YsTUFBTSxLQUFLOHRDLGVBQUEsQ0FBZ0J6ckQsQ0FBQSxFQUFHNHRCLE9BQUEsQ0FBUTtNQUN4QyxTQUFTbHRCLENBQUEsRUFBUDtRQUNBLElBQUlBLENBQUEsWUFBYStRLEVBQUEsRUFDZixNQUFNLElBQUlDLEtBQUEsQ0FBTWhSLENBQUEsQ0FBRXdkLE9BQU87UUFDM0J6WCxDQUFBLENBQUUsVUFBVXpHLENBQUEsOEJBQStCLFFBQVFVLENBQUM7TUFDdEQ7SUFDRixDQUFDLEdBQ0RnSCxPQUFBLENBQVFDLE9BQUEsQ0FBUSxDQUNsQjtFQUNGO0VBSUFnWCxPQUFBLEVBQVM7SUFDUCxPQUFPLEtBQUs4c0MsZUFBQSxDQUFnQnBwQyxRQUFBLENBQVMxRCxNQUFBLENBQU8sS0FBS3BNLE1BQUEsQ0FBTzlLLElBQUEsQ0FBS2daLE1BQU07RUFDckU7RUFJQTByQyxpQkFBQSxFQUFtQjtJQUNqQnhzRCxNQUFBLENBQU9pYSxPQUFBLENBQVEweEMsRUFBRSxFQUFFN3FELE9BQUEsQ0FBUSxDQUFDLENBQUM5QixDQUFBLEVBQUdLLENBQUMsTUFBTTtNQUNyQyxJQUFJO1FBQ0YsS0FBS3lzRCxlQUFBLENBQWdCOXNELENBQUEsSUFBSyxJQUFJSyxDQUFBLENBQUU7VUFDOUJ1VCxNQUFBLEVBQVEsS0FBS281QyxhQUFBO1VBQ2IzM0MsZ0JBQUEsRUFBa0IsS0FBS0E7UUFDekIsQ0FBQztNQUNILFNBQVNoVSxDQUFBLEVBQVA7UUFDQXlHLENBQUEsQ0FBRSxzQkFBc0IsVUFBVTlILENBQUEsb0JBQXFCLFNBQVNxQixDQUFDO01BQ25FO0lBQ0YsQ0FBQztFQUNIO0VBTUFvc0QsaUJBQUEsRUFBbUI7SUFDakIsV0FBV3p0RCxDQUFBLElBQUssS0FBSzhzRCxlQUFBLEVBQ25COXJELE1BQUEsQ0FBT0MsU0FBQSxDQUFVQyxjQUFBLENBQWVDLElBQUEsQ0FBSyxLQUFLMnJELGVBQUEsRUFBaUI5c0QsQ0FBQyxNQUFNLEtBQUs4c0QsZUFBQSxDQUFnQjlzRCxDQUFBLEVBQUc4VixLQUFBLEdBQVEsS0FBSzQzQyxjQUFBLENBQWUxdEQsQ0FBQztFQUMzSDtFQU1BMHRELGVBQWUxdEQsQ0FBQSxFQUFHO0lBQ2hCLE1BQU1LLENBQUEsR0FBSSxDQUFDO0lBQ1gsV0FBV2dCLENBQUEsSUFBSyxLQUFLeXJELGVBQUEsRUFDbkJ6ckQsQ0FBQSxLQUFNckIsQ0FBQSxLQUFNSyxDQUFBLENBQUVnQixDQUFBLElBQUssS0FBS3lyRCxlQUFBLENBQWdCenJELENBQUE7SUFDMUMsT0FBT2hCLENBQUE7RUFDVDtBQUNGO0FBUUEsSUFBTXN0RCxFQUFBLEdBQU4sTUFBUztFQUVQLFdBQVd6SSxRQUFBLEVBQVU7SUFDbkIsT0FBTztFQUNUO0VBSUF6akQsWUFBWXpCLENBQUEsRUFBRztJQUNiLElBQUlLLENBQUEsR0FBSUEsQ0FBQSxLQUFNLENBQ2Q7SUFDQWdJLENBQUEsQ0FBRXJJLENBQUMsS0FBS29JLENBQUEsQ0FBRXBJLENBQUEsQ0FBRXV0RCxPQUFPLE1BQU1sdEQsQ0FBQSxHQUFJTCxDQUFBLENBQUV1dEQsT0FBQTtJQUMvQixNQUFNbHNELENBQUEsR0FBSSxJQUFJd3JELEVBQUEsQ0FBRzdzRCxDQUFDO0lBQ2xCLEtBQUsrc0QsT0FBQSxHQUFVMXJELENBQUEsQ0FBRTByRCxPQUFBLENBQVEvdEMsSUFBQSxDQUFLLE1BQU07TUFDbEMsS0FBSzR1QyxTQUFBLENBQVV2c0QsQ0FBQyxHQUFHaEIsQ0FBQSxDQUFFO0lBQ3ZCLENBQUM7RUFDSDtFQU1BdXRELFVBQVU1dEQsQ0FBQSxFQUFHO0lBQ1gsTUFBTUssQ0FBQSxHQUFJLENBQUMsZUFBZTtNQUFHZ0IsQ0FBQSxHQUFJQSxDQUFBLEtBQU07UUFDckNMLE1BQUEsQ0FBTytlLE1BQUEsQ0FBTy9mLENBQUEsQ0FBRThzRCxlQUFlLEVBQUVockQsT0FBQSxDQUFTb0MsQ0FBQSxJQUFNO1VBQzlDa0UsQ0FBQSxDQUFFbEUsQ0FBQSxDQUFFc1AsT0FBTyxLQUFLdFAsQ0FBQSxDQUFFc1AsT0FBQSxDQUFRLEdBQUd0UCxDQUFBLENBQUVxUixTQUFBLENBQVVOLFNBQUEsQ0FBVTtRQUNyRCxDQUFDLEdBQUcwYixFQUFBLENBQUcsR0FBRzN3QixDQUFBLEdBQUk7UUFDZCxXQUFXa0UsQ0FBQSxJQUFLLE1BQ2RsRCxNQUFBLENBQU9DLFNBQUEsQ0FBVUMsY0FBQSxDQUFlQyxJQUFBLENBQUssTUFBTStDLENBQUMsS0FBSyxPQUFPLEtBQUtBLENBQUE7UUFDL0RsRCxNQUFBLENBQU8wUyxjQUFBLENBQWUsTUFBTSxJQUFJO01BQ2xDO0lBQ0FyVCxDQUFBLENBQUV5QixPQUFBLENBQVNvQyxDQUFBLElBQU07TUFDZixLQUFLQSxDQUFBLElBQUtsRSxDQUFBLENBQUVrRSxDQUFBO0lBQ2QsQ0FBQyxHQUFHLEtBQUtzUCxPQUFBLEdBQVVuUyxDQUFBLEVBQUdMLE1BQUEsQ0FBTzBTLGNBQUEsQ0FBZSxNQUFNMVQsQ0FBQSxDQUFFOHNELGVBQUEsQ0FBZ0J2ckMsR0FBQSxDQUFJVSxPQUFPLEdBQUcsT0FBTyxLQUFLMnJDLFNBQUEsRUFBVzVzRCxNQUFBLENBQU9pYSxPQUFBLENBQVE7TUFDdEg2RyxNQUFBLEVBQVE7UUFDTkksS0FBQSxFQUFPO1FBQ1BsQyxNQUFBLEVBQVE7TUFDVjtNQUNBK0UsS0FBQSxFQUFPO1FBQ0xwTSxLQUFBLEVBQU87TUFDVDtNQUNBdU0sTUFBQSxFQUFRO1FBQ05oUyxFQUFBLEVBQUk7UUFDSkksR0FBQSxFQUFLO1FBQ0xELElBQUEsRUFBTTtNQUNSO01BQ0FvUyxLQUFBLEVBQU87UUFDTHhSLElBQUEsRUFBTTtNQUNSO0lBQ0YsQ0FBQyxFQUFFblMsT0FBQSxDQUFRLENBQUMsQ0FBQ29DLENBQUEsRUFBR0csQ0FBQyxNQUFNO01BQ3JCckQsTUFBQSxDQUFPaWEsT0FBQSxDQUFRNVcsQ0FBQyxFQUFFdkMsT0FBQSxDQUFRLENBQUMsQ0FBQ3lDLENBQUEsRUFBR0csQ0FBQyxNQUFNO1FBQ3BDLEtBQUtBLENBQUEsSUFBSzFFLENBQUEsQ0FBRThzRCxlQUFBLENBQWdCdnJDLEdBQUEsQ0FBSVUsT0FBQSxDQUFRL2QsQ0FBQSxFQUFHSyxDQUFBO01BQzdDLENBQUM7SUFDSCxDQUFDO0VBQ0g7QUFDRjs7O0FEeDVWQSxJQUFPNUUsdUJBQUEsR0FBUWd1RCxFQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==