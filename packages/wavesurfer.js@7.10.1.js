System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["wavesurfer.js","7.10.1"]]);
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

// .beyond/uimport/temp/wavesurfer.js.7.10.1.js
var wavesurfer_js_7_10_1_exports = {};
__export(wavesurfer_js_7_10_1_exports, {
  default: () => wavesurfer_js_7_10_1_default
});
module.exports = __toCommonJS(wavesurfer_js_7_10_1_exports);

// node_modules/wavesurfer.js/dist/wavesurfer.esm.js
function t(t2, e2, i2, s2) {
  return new (i2 || (i2 = Promise))(function (n2, r2) {
    function o2(t3) {
      try {
        h2(s2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        h2(s2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function h2(t3) {
      var e3;
      t3.done ? n2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function (t4) {
        t4(e3);
      })).then(o2, a2);
    }
    h2((s2 = s2.apply(t2, e2 || [])).next());
  });
}
"function" == typeof SuppressedError && SuppressedError;
var e = class {
  constructor() {
    this.listeners = {};
  }
  on(t2, e2, i2) {
    if (this.listeners[t2] || (this.listeners[t2] = /* @__PURE__ */new Set()), this.listeners[t2].add(e2), null == i2 ? void 0 : i2.once) {
      const i3 = () => {
        this.un(t2, i3), this.un(t2, e2);
      };
      return this.on(t2, i3), i3;
    }
    return () => this.un(t2, e2);
  }
  un(t2, e2) {
    var i2;
    null === (i2 = this.listeners[t2]) || void 0 === i2 || i2.delete(e2);
  }
  once(t2, e2) {
    return this.on(t2, e2, {
      once: true
    });
  }
  unAll() {
    this.listeners = {};
  }
  emit(t2, ...e2) {
    this.listeners[t2] && this.listeners[t2].forEach(t3 => t3(...e2));
  }
};
var i = {
  decode: function (e2, i2) {
    return t(this, void 0, void 0, function* () {
      const t2 = new AudioContext({
        sampleRate: i2
      });
      return t2.decodeAudioData(e2).finally(() => t2.close());
    });
  },
  createBuffer: function (t2, e2) {
    return "number" == typeof t2[0] && (t2 = [t2]), function (t3) {
      const e3 = t3[0];
      if (e3.some(t4 => t4 > 1 || t4 < -1)) {
        const i2 = e3.length;
        let s2 = 0;
        for (let t4 = 0; t4 < i2; t4++) {
          const i3 = Math.abs(e3[t4]);
          i3 > s2 && (s2 = i3);
        }
        for (const e4 of t3) for (let t4 = 0; t4 < i2; t4++) e4[t4] /= s2;
      }
    }(t2), {
      duration: e2,
      length: t2[0].length,
      sampleRate: t2[0].length / e2,
      numberOfChannels: t2.length,
      getChannelData: e3 => null == t2 ? void 0 : t2[e3],
      copyFromChannel: AudioBuffer.prototype.copyFromChannel,
      copyToChannel: AudioBuffer.prototype.copyToChannel
    };
  }
};
function s(t2, e2) {
  const i2 = e2.xmlns ? document.createElementNS(e2.xmlns, t2) : document.createElement(t2);
  for (const [t3, n2] of Object.entries(e2)) if ("children" === t3 && n2) for (const [t4, e3] of Object.entries(n2)) e3 instanceof Node ? i2.appendChild(e3) : "string" == typeof e3 ? i2.appendChild(document.createTextNode(e3)) : i2.appendChild(s(t4, e3));else "style" === t3 ? Object.assign(i2.style, n2) : "textContent" === t3 ? i2.textContent = n2 : i2.setAttribute(t3, n2.toString());
  return i2;
}
function n(t2, e2, i2) {
  const n2 = s(t2, e2 || {});
  return null == i2 || i2.appendChild(n2), n2;
}
var r = Object.freeze({
  __proto__: null,
  createElement: n,
  default: n
});
var o = {
  fetchBlob: function (e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const n2 = yield fetch(e2, s2);
      if (n2.status >= 400) throw new Error(`Failed to fetch ${e2}: ${n2.status} (${n2.statusText})`);
      return function (e3, i3) {
        t(this, void 0, void 0, function* () {
          if (!e3.body || !e3.headers) return;
          const s3 = e3.body.getReader(),
            n3 = Number(e3.headers.get("Content-Length")) || 0;
          let r2 = 0;
          const o2 = e4 => t(this, void 0, void 0, function* () {
              r2 += (null == e4 ? void 0 : e4.length) || 0;
              const t2 = Math.round(r2 / n3 * 100);
              i3(t2);
            }),
            a2 = () => t(this, void 0, void 0, function* () {
              let t2;
              try {
                t2 = yield s3.read();
              } catch (t3) {
                return;
              }
              t2.done || (o2(t2.value), yield a2());
            });
          a2();
        });
      }(n2.clone(), i2), n2.blob();
    });
  }
};
var a = class extends e {
  constructor(t2) {
    super(), this.isExternalMedia = false, t2.media ? (this.media = t2.media, this.isExternalMedia = true) : this.media = document.createElement("audio"), t2.mediaControls && (this.media.controls = true), t2.autoplay && (this.media.autoplay = true), null != t2.playbackRate && this.onMediaEvent("canplay", () => {
      null != t2.playbackRate && (this.media.playbackRate = t2.playbackRate);
    }, {
      once: true
    });
  }
  onMediaEvent(t2, e2, i2) {
    return this.media.addEventListener(t2, e2, i2), () => this.media.removeEventListener(t2, e2, i2);
  }
  getSrc() {
    return this.media.currentSrc || this.media.src || "";
  }
  revokeSrc() {
    const t2 = this.getSrc();
    t2.startsWith("blob:") && URL.revokeObjectURL(t2);
  }
  canPlayType(t2) {
    return "" !== this.media.canPlayType(t2);
  }
  setSrc(t2, e2) {
    const i2 = this.getSrc();
    if (t2 && i2 === t2) return;
    this.revokeSrc();
    const s2 = e2 instanceof Blob && (this.canPlayType(e2.type) || !t2) ? URL.createObjectURL(e2) : t2;
    if (i2 && this.media.removeAttribute("src"), s2 || t2) try {
      this.media.src = s2;
    } catch (e3) {
      this.media.src = t2;
    }
  }
  destroy() {
    this.isExternalMedia || (this.media.pause(), this.media.remove(), this.revokeSrc(), this.media.removeAttribute("src"), this.media.load());
  }
  setMediaElement(t2) {
    this.media = t2;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.media.play();
      } catch (t2) {
        if (t2 instanceof DOMException && "AbortError" === t2.name) return;
        throw t2;
      }
    });
  }
  pause() {
    this.media.pause();
  }
  isPlaying() {
    return !this.media.paused && !this.media.ended;
  }
  setTime(t2) {
    this.media.currentTime = Math.max(0, Math.min(t2, this.getDuration()));
  }
  getDuration() {
    return this.media.duration;
  }
  getCurrentTime() {
    return this.media.currentTime;
  }
  getVolume() {
    return this.media.volume;
  }
  setVolume(t2) {
    this.media.volume = t2;
  }
  getMuted() {
    return this.media.muted;
  }
  setMuted(t2) {
    this.media.muted = t2;
  }
  getPlaybackRate() {
    return this.media.playbackRate;
  }
  isSeeking() {
    return this.media.seeking;
  }
  setPlaybackRate(t2, e2) {
    null != e2 && (this.media.preservesPitch = e2), this.media.playbackRate = t2;
  }
  getMediaElement() {
    return this.media;
  }
  setSinkId(t2) {
    return this.media.setSinkId(t2);
  }
};
var h = class extends e {
  constructor(t2, e2) {
    super(), this.timeouts = [], this.isScrollable = false, this.audioData = null, this.resizeObserver = null, this.lastContainerWidth = 0, this.isDragging = false, this.subscriptions = [], this.unsubscribeOnScroll = [], this.subscriptions = [], this.options = t2;
    const i2 = this.parentFromOptionsContainer(t2.container);
    this.parent = i2;
    const [s2, n2] = this.initHtml();
    i2.appendChild(s2), this.container = s2, this.scrollContainer = n2.querySelector(".scroll"), this.wrapper = n2.querySelector(".wrapper"), this.canvasWrapper = n2.querySelector(".canvases"), this.progressWrapper = n2.querySelector(".progress"), this.cursor = n2.querySelector(".cursor"), e2 && n2.appendChild(e2), this.initEvents();
  }
  parentFromOptionsContainer(t2) {
    let e2;
    if ("string" == typeof t2 ? e2 = document.querySelector(t2) : t2 instanceof HTMLElement && (e2 = t2), !e2) throw new Error("Container not found");
    return e2;
  }
  initEvents() {
    const t2 = t3 => {
      const e2 = this.wrapper.getBoundingClientRect(),
        i2 = t3.clientX - e2.left,
        s2 = t3.clientY - e2.top;
      return [i2 / e2.width, s2 / e2.height];
    };
    if (this.wrapper.addEventListener("click", e2 => {
      const [i2, s2] = t2(e2);
      this.emit("click", i2, s2);
    }), this.wrapper.addEventListener("dblclick", e2 => {
      const [i2, s2] = t2(e2);
      this.emit("dblclick", i2, s2);
    }), true !== this.options.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.scrollContainer.addEventListener("scroll", () => {
      const {
          scrollLeft: t3,
          scrollWidth: e2,
          clientWidth: i2
        } = this.scrollContainer,
        s2 = t3 / e2,
        n2 = (t3 + i2) / e2;
      this.emit("scroll", s2, n2, t3, t3 + i2);
    }), "function" == typeof ResizeObserver) {
      const t3 = this.createDelay(100);
      this.resizeObserver = new ResizeObserver(() => {
        t3().then(() => this.onContainerResize()).catch(() => {});
      }), this.resizeObserver.observe(this.scrollContainer);
    }
  }
  onContainerResize() {
    const t2 = this.parent.clientWidth;
    t2 === this.lastContainerWidth && "auto" !== this.options.height || (this.lastContainerWidth = t2, this.reRender());
  }
  initDrag() {
    this.subscriptions.push(function (t2, e2, i2, s2, n2 = 3, r2 = 0, o2 = 100) {
      if (!t2) return () => {};
      const a2 = matchMedia("(pointer: coarse)").matches;
      let h2 = () => {};
      const l2 = l3 => {
        if (l3.button !== r2) return;
        l3.preventDefault(), l3.stopPropagation();
        let d2 = l3.clientX,
          c2 = l3.clientY,
          u2 = false;
        const p = Date.now(),
          m = s3 => {
            if (s3.preventDefault(), s3.stopPropagation(), a2 && Date.now() - p < o2) return;
            const r3 = s3.clientX,
              h3 = s3.clientY,
              l4 = r3 - d2,
              m2 = h3 - c2;
            if (u2 || Math.abs(l4) > n2 || Math.abs(m2) > n2) {
              const s4 = t2.getBoundingClientRect(),
                {
                  left: n3,
                  top: o3
                } = s4;
              u2 || (null == i2 || i2(d2 - n3, c2 - o3), u2 = true), e2(l4, m2, r3 - n3, h3 - o3), d2 = r3, c2 = h3;
            }
          },
          f = e3 => {
            if (u2) {
              const i3 = e3.clientX,
                n3 = e3.clientY,
                r3 = t2.getBoundingClientRect(),
                {
                  left: o3,
                  top: a3
                } = r3;
              null == s2 || s2(i3 - o3, n3 - a3);
            }
            h2();
          },
          g = t3 => {
            t3.relatedTarget && t3.relatedTarget !== document.documentElement || f(t3);
          },
          v = t3 => {
            u2 && (t3.stopPropagation(), t3.preventDefault());
          },
          b = t3 => {
            u2 && t3.preventDefault();
          };
        document.addEventListener("pointermove", m), document.addEventListener("pointerup", f), document.addEventListener("pointerout", g), document.addEventListener("pointercancel", g), document.addEventListener("touchmove", b, {
          passive: false
        }), document.addEventListener("click", v, {
          capture: true
        }), h2 = () => {
          document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", f), document.removeEventListener("pointerout", g), document.removeEventListener("pointercancel", g), document.removeEventListener("touchmove", b), setTimeout(() => {
            document.removeEventListener("click", v, {
              capture: true
            });
          }, 10);
        };
      };
      return t2.addEventListener("pointerdown", l2), () => {
        h2(), t2.removeEventListener("pointerdown", l2);
      };
    }(this.wrapper, (t2, e2, i2) => {
      this.emit("drag", Math.max(0, Math.min(1, i2 / this.wrapper.getBoundingClientRect().width)));
    }, t2 => {
      this.isDragging = true, this.emit("dragstart", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }, t2 => {
      this.isDragging = false, this.emit("dragend", Math.max(0, Math.min(1, t2 / this.wrapper.getBoundingClientRect().width)));
    }));
  }
  getHeight(t2, e2) {
    var i2;
    const s2 = (null === (i2 = this.audioData) || void 0 === i2 ? void 0 : i2.numberOfChannels) || 1;
    if (null == t2) return 128;
    if (!isNaN(Number(t2))) return Number(t2);
    if ("auto" === t2) {
      const t3 = this.parent.clientHeight || 128;
      return (null == e2 ? void 0 : e2.every(t4 => !t4.overlay)) ? t3 / s2 : t3;
    }
    return 128;
  }
  initHtml() {
    const t2 = document.createElement("div"),
      e2 = t2.attachShadow({
        mode: "open"
      }),
      i2 = this.options.cspNonce && "string" == typeof this.options.cspNonce ? this.options.cspNonce.replace(/"/g, "") : "";
    return e2.innerHTML = `
      <style${i2 ? ` nonce="${i2}"` : ""}>
        :host {
          user-select: none;
          min-width: 1px;
        }
        :host audio {
          display: block;
          width: 100%;
        }
        :host .scroll {
          overflow-x: auto;
          overflow-y: hidden;
          width: 100%;
          position: relative;
        }
        :host .noScrollbar {
          scrollbar-color: transparent;
          scrollbar-width: none;
        }
        :host .noScrollbar::-webkit-scrollbar {
          display: none;
          -webkit-appearance: none;
        }
        :host .wrapper {
          position: relative;
          overflow: visible;
          z-index: 2;
        }
        :host .canvases {
          min-height: ${this.getHeight(this.options.height, this.options.splitChannels)}px;
        }
        :host .canvases > div {
          position: relative;
        }
        :host canvas {
          display: block;
          position: absolute;
          top: 0;
          image-rendering: pixelated;
        }
        :host .progress {
          pointer-events: none;
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
        }
        :host .progress > div {
          position: relative;
        }
        :host .cursor {
          pointer-events: none;
          position: absolute;
          z-index: 5;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: 2px;
        }
      </style>

      <div class="scroll" part="scroll">
        <div class="wrapper" part="wrapper">
          <div class="canvases" part="canvases"></div>
          <div class="progress" part="progress"></div>
          <div class="cursor" part="cursor"></div>
        </div>
      </div>
    `, [t2, e2];
  }
  setOptions(t2) {
    if (this.options.container !== t2.container) {
      const e2 = this.parentFromOptionsContainer(t2.container);
      e2.appendChild(this.container), this.parent = e2;
    }
    true !== t2.dragToSeek && "object" != typeof this.options.dragToSeek || this.initDrag(), this.options = t2, this.reRender();
  }
  getWrapper() {
    return this.wrapper;
  }
  getWidth() {
    return this.scrollContainer.clientWidth;
  }
  getScroll() {
    return this.scrollContainer.scrollLeft;
  }
  setScroll(t2) {
    this.scrollContainer.scrollLeft = t2;
  }
  setScrollPercentage(t2) {
    const {
        scrollWidth: e2
      } = this.scrollContainer,
      i2 = e2 * t2;
    this.setScroll(i2);
  }
  destroy() {
    var t2, e2;
    this.subscriptions.forEach(t3 => t3()), this.container.remove(), null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect(), null === (e2 = this.unsubscribeOnScroll) || void 0 === e2 || e2.forEach(t3 => t3()), this.unsubscribeOnScroll = [];
  }
  createDelay(t2 = 10) {
    let e2, i2;
    const s2 = () => {
      e2 && clearTimeout(e2), i2 && i2();
    };
    return this.timeouts.push(s2), () => new Promise((n2, r2) => {
      s2(), i2 = r2, e2 = setTimeout(() => {
        e2 = void 0, i2 = void 0, n2();
      }, t2);
    });
  }
  convertColorValues(t2) {
    if (!Array.isArray(t2)) return t2 || "";
    if (t2.length < 2) return t2[0] || "";
    const e2 = document.createElement("canvas"),
      i2 = e2.getContext("2d"),
      s2 = e2.height * (window.devicePixelRatio || 1),
      n2 = i2.createLinearGradient(0, 0, 0, s2),
      r2 = 1 / (t2.length - 1);
    return t2.forEach((t3, e3) => {
      const i3 = e3 * r2;
      n2.addColorStop(i3, t3);
    }), n2;
  }
  getPixelRatio() {
    return Math.max(1, window.devicePixelRatio || 1);
  }
  renderBarWaveform(t2, e2, i2, s2) {
    const n2 = t2[0],
      r2 = t2[1] || t2[0],
      o2 = n2.length,
      {
        width: a2,
        height: h2
      } = i2.canvas,
      l2 = h2 / 2,
      d2 = this.getPixelRatio(),
      c2 = e2.barWidth ? e2.barWidth * d2 : 1,
      u2 = e2.barGap ? e2.barGap * d2 : e2.barWidth ? c2 / 2 : 0,
      p = e2.barRadius || 0,
      m = a2 / (c2 + u2) / o2,
      f = p && "roundRect" in i2 ? "roundRect" : "rect";
    i2.beginPath();
    let g = 0,
      v = 0,
      b = 0;
    for (let t3 = 0; t3 <= o2; t3++) {
      const o3 = Math.round(t3 * m);
      if (o3 > g) {
        const t4 = Math.round(v * l2 * s2),
          n3 = t4 + Math.round(b * l2 * s2) || 1;
        let r3 = l2 - t4;
        "top" === e2.barAlign ? r3 = 0 : "bottom" === e2.barAlign && (r3 = h2 - n3), i2[f](g * (c2 + u2), r3, c2, n3, p), g = o3, v = 0, b = 0;
      }
      const a3 = Math.abs(n2[t3] || 0),
        d3 = Math.abs(r2[t3] || 0);
      a3 > v && (v = a3), d3 > b && (b = d3);
    }
    i2.fill(), i2.closePath();
  }
  renderLineWaveform(t2, e2, i2, s2) {
    const n2 = e3 => {
      const n3 = t2[e3] || t2[0],
        r2 = n3.length,
        {
          height: o2
        } = i2.canvas,
        a2 = o2 / 2,
        h2 = i2.canvas.width / r2;
      i2.moveTo(0, a2);
      let l2 = 0,
        d2 = 0;
      for (let t3 = 0; t3 <= r2; t3++) {
        const r3 = Math.round(t3 * h2);
        if (r3 > l2) {
          const t4 = a2 + (Math.round(d2 * a2 * s2) || 1) * (0 === e3 ? -1 : 1);
          i2.lineTo(l2, t4), l2 = r3, d2 = 0;
        }
        const o3 = Math.abs(n3[t3] || 0);
        o3 > d2 && (d2 = o3);
      }
      i2.lineTo(l2, a2);
    };
    i2.beginPath(), n2(0), n2(1), i2.fill(), i2.closePath();
  }
  renderWaveform(t2, e2, i2) {
    if (i2.fillStyle = this.convertColorValues(e2.waveColor), e2.renderFunction) return void e2.renderFunction(t2, i2);
    let s2 = e2.barHeight || 1;
    if (e2.normalize) {
      const e3 = Array.from(t2[0]).reduce((t3, e4) => Math.max(t3, Math.abs(e4)), 0);
      s2 = e3 ? 1 / e3 : 1;
    }
    e2.barWidth || e2.barGap || e2.barAlign ? this.renderBarWaveform(t2, e2, i2, s2) : this.renderLineWaveform(t2, e2, i2, s2);
  }
  renderSingleCanvas(t2, e2, i2, s2, n2, r2, o2) {
    const a2 = this.getPixelRatio(),
      h2 = document.createElement("canvas");
    h2.width = Math.round(i2 * a2), h2.height = Math.round(s2 * a2), h2.style.width = `${i2}px`, h2.style.height = `${s2}px`, h2.style.left = `${Math.round(n2)}px`, r2.appendChild(h2);
    const l2 = h2.getContext("2d");
    if (this.renderWaveform(t2, e2, l2), h2.width > 0 && h2.height > 0) {
      const t3 = h2.cloneNode(),
        i3 = t3.getContext("2d");
      i3.drawImage(h2, 0, 0), i3.globalCompositeOperation = "source-in", i3.fillStyle = this.convertColorValues(e2.progressColor), i3.fillRect(0, 0, h2.width, h2.height), o2.appendChild(t3);
    }
  }
  renderMultiCanvas(t2, e2, i2, s2, n2, r2) {
    const o2 = this.getPixelRatio(),
      {
        clientWidth: a2
      } = this.scrollContainer,
      l2 = i2 / o2;
    let d2 = Math.min(h.MAX_CANVAS_WIDTH, a2, l2),
      c2 = {};
    if (e2.barWidth || e2.barGap) {
      const t3 = e2.barWidth || 0.5,
        i3 = t3 + (e2.barGap || t3 / 2);
      d2 % i3 != 0 && (d2 = Math.floor(d2 / i3) * i3);
    }
    if (0 === d2) return;
    const u2 = i3 => {
        if (i3 < 0 || i3 >= p) return;
        if (c2[i3]) return;
        c2[i3] = true;
        const o3 = i3 * d2;
        let a3 = Math.min(l2 - o3, d2);
        if (e2.barWidth || e2.barGap) {
          const t3 = e2.barWidth || 0.5,
            i4 = t3 + (e2.barGap || t3 / 2);
          a3 = Math.floor(a3 / i4) * i4;
        }
        if (a3 <= 0) return;
        const h2 = t2.map(t3 => {
          const e3 = Math.floor(o3 / l2 * t3.length),
            i4 = Math.floor((o3 + a3) / l2 * t3.length);
          return t3.slice(e3, i4);
        });
        this.renderSingleCanvas(h2, e2, a3, s2, o3, n2, r2);
      },
      p = Math.ceil(l2 / d2);
    if (!this.isScrollable) {
      for (let t3 = 0; t3 < p; t3++) u2(t3);
      return;
    }
    const m = this.scrollContainer.scrollLeft / l2,
      f = Math.floor(m * p);
    if (u2(f - 1), u2(f), u2(f + 1), p > 1) {
      const t3 = this.on("scroll", () => {
        const {
            scrollLeft: t4
          } = this.scrollContainer,
          e3 = Math.floor(t4 / l2 * p);
        Object.keys(c2).length > h.MAX_NODES && (n2.innerHTML = "", r2.innerHTML = "", c2 = {}), u2(e3 - 1), u2(e3), u2(e3 + 1);
      });
      this.unsubscribeOnScroll.push(t3);
    }
  }
  renderChannel(t2, e2, i2, s2) {
    var {
        overlay: n2
      } = e2,
      r2 = function (t3, e3) {
        var i3 = {};
        for (var s3 in t3) Object.prototype.hasOwnProperty.call(t3, s3) && e3.indexOf(s3) < 0 && (i3[s3] = t3[s3]);
        if (null != t3 && "function" == typeof Object.getOwnPropertySymbols) {
          var n3 = 0;
          for (s3 = Object.getOwnPropertySymbols(t3); n3 < s3.length; n3++) e3.indexOf(s3[n3]) < 0 && Object.prototype.propertyIsEnumerable.call(t3, s3[n3]) && (i3[s3[n3]] = t3[s3[n3]]);
        }
        return i3;
      }(e2, ["overlay"]);
    const o2 = document.createElement("div"),
      a2 = this.getHeight(r2.height, r2.splitChannels);
    o2.style.height = `${a2}px`, n2 && s2 > 0 && (o2.style.marginTop = `-${a2}px`), this.canvasWrapper.style.minHeight = `${a2}px`, this.canvasWrapper.appendChild(o2);
    const h2 = o2.cloneNode();
    this.progressWrapper.appendChild(h2), this.renderMultiCanvas(t2, r2, i2, a2, o2, h2);
  }
  render(e2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      this.timeouts.forEach(t3 => t3()), this.timeouts = [], this.canvasWrapper.innerHTML = "", this.progressWrapper.innerHTML = "", null != this.options.width && (this.scrollContainer.style.width = "number" == typeof this.options.width ? `${this.options.width}px` : this.options.width);
      const i2 = this.getPixelRatio(),
        s2 = this.scrollContainer.clientWidth,
        n2 = Math.ceil(e2.duration * (this.options.minPxPerSec || 0));
      this.isScrollable = n2 > s2;
      const r2 = this.options.fillParent && !this.isScrollable,
        o2 = (r2 ? s2 : n2) * i2;
      if (this.wrapper.style.width = r2 ? "100%" : `${n2}px`, this.scrollContainer.style.overflowX = this.isScrollable ? "auto" : "hidden", this.scrollContainer.classList.toggle("noScrollbar", !!this.options.hideScrollbar), this.cursor.style.backgroundColor = `${this.options.cursorColor || this.options.progressColor}`, this.cursor.style.width = `${this.options.cursorWidth}px`, this.audioData = e2, this.emit("render"), this.options.splitChannels) for (let i3 = 0; i3 < e2.numberOfChannels; i3++) {
        const s3 = Object.assign(Object.assign({}, this.options), null === (t2 = this.options.splitChannels) || void 0 === t2 ? void 0 : t2[i3]);
        this.renderChannel([e2.getChannelData(i3)], s3, o2, i3);
      } else {
        const t3 = [e2.getChannelData(0)];
        e2.numberOfChannels > 1 && t3.push(e2.getChannelData(1)), this.renderChannel(t3, this.options, o2, 0);
      }
      Promise.resolve().then(() => this.emit("rendered"));
    });
  }
  reRender() {
    if (this.unsubscribeOnScroll.forEach(t3 => t3()), this.unsubscribeOnScroll = [], !this.audioData) return;
    const {
        scrollWidth: t2
      } = this.scrollContainer,
      {
        right: e2
      } = this.progressWrapper.getBoundingClientRect();
    if (this.render(this.audioData), this.isScrollable && t2 !== this.scrollContainer.scrollWidth) {
      const {
        right: t3
      } = this.progressWrapper.getBoundingClientRect();
      let i2 = t3 - e2;
      i2 *= 2, i2 = i2 < 0 ? Math.floor(i2) : Math.ceil(i2), i2 /= 2, this.scrollContainer.scrollLeft += i2;
    }
  }
  zoom(t2) {
    this.options.minPxPerSec = t2, this.reRender();
  }
  scrollIntoView(t2, e2 = false) {
    const {
        scrollLeft: i2,
        scrollWidth: s2,
        clientWidth: n2
      } = this.scrollContainer,
      r2 = t2 * s2,
      o2 = i2,
      a2 = i2 + n2,
      h2 = n2 / 2;
    if (this.isDragging) {
      const t3 = 30;
      r2 + t3 > a2 ? this.scrollContainer.scrollLeft += t3 : r2 - t3 < o2 && (this.scrollContainer.scrollLeft -= t3);
    } else {
      (r2 < o2 || r2 > a2) && (this.scrollContainer.scrollLeft = r2 - (this.options.autoCenter ? h2 : 0));
      const t3 = r2 - i2 - h2;
      e2 && this.options.autoCenter && t3 > 0 && (this.scrollContainer.scrollLeft += Math.min(t3, 10));
    }
    {
      const t3 = this.scrollContainer.scrollLeft,
        e3 = t3 / s2,
        i3 = (t3 + n2) / s2;
      this.emit("scroll", e3, i3, t3, t3 + n2);
    }
  }
  renderProgress(t2, e2) {
    if (isNaN(t2)) return;
    const i2 = 100 * t2;
    this.canvasWrapper.style.clipPath = `polygon(${i2}% 0%, 100% 0%, 100% 100%, ${i2}% 100%)`, this.progressWrapper.style.width = `${i2}%`, this.cursor.style.left = `${i2}%`, this.cursor.style.transform = this.options.cursorWidth ? `translateX(-${t2 * this.options.cursorWidth}px)` : "", this.isScrollable && this.options.autoScroll && this.scrollIntoView(t2, e2);
  }
  exportImage(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      const t2 = this.canvasWrapper.querySelectorAll("canvas");
      if (!t2.length) throw new Error("No waveform data");
      if ("dataURL" === s2) {
        const s3 = Array.from(t2).map(t3 => t3.toDataURL(e2, i2));
        return Promise.resolve(s3);
      }
      return Promise.all(Array.from(t2).map(t3 => new Promise((s3, n2) => {
        t3.toBlob(t4 => {
          t4 ? s3(t4) : n2(new Error("Could not export image"));
        }, e2, i2);
      })));
    });
  }
};
h.MAX_CANVAS_WIDTH = 8e3, h.MAX_NODES = 10;
var l = class extends e {
  constructor() {
    super(...arguments), this.unsubscribe = () => {};
  }
  start() {
    this.unsubscribe = this.on("tick", () => {
      requestAnimationFrame(() => {
        this.emit("tick");
      });
    }), this.emit("tick");
  }
  stop() {
    this.unsubscribe();
  }
  destroy() {
    this.unsubscribe();
  }
};
var d = class extends e {
  constructor(t2 = new AudioContext()) {
    super(), this.bufferNode = null, this.playStartTime = 0, this.playedDuration = 0, this._muted = false, this._playbackRate = 1, this._duration = void 0, this.buffer = null, this.currentSrc = "", this.paused = true, this.crossOrigin = null, this.seeking = false, this.autoplay = false, this.addEventListener = this.on, this.removeEventListener = this.un, this.audioContext = t2, this.gainNode = this.audioContext.createGain(), this.gainNode.connect(this.audioContext.destination);
  }
  load() {
    return t(this, void 0, void 0, function* () {});
  }
  get src() {
    return this.currentSrc;
  }
  set src(t2) {
    if (this.currentSrc = t2, this._duration = void 0, !t2) return this.buffer = null, void this.emit("emptied");
    fetch(t2).then(e2 => {
      if (e2.status >= 400) throw new Error(`Failed to fetch ${t2}: ${e2.status} (${e2.statusText})`);
      return e2.arrayBuffer();
    }).then(e2 => this.currentSrc !== t2 ? null : this.audioContext.decodeAudioData(e2)).then(e2 => {
      this.currentSrc === t2 && (this.buffer = e2, this.emit("loadedmetadata"), this.emit("canplay"), this.autoplay && this.play());
    });
  }
  _play() {
    var t2;
    if (!this.paused) return;
    this.paused = false, null === (t2 = this.bufferNode) || void 0 === t2 || t2.disconnect(), this.bufferNode = this.audioContext.createBufferSource(), this.buffer && (this.bufferNode.buffer = this.buffer), this.bufferNode.playbackRate.value = this._playbackRate, this.bufferNode.connect(this.gainNode);
    let e2 = this.playedDuration * this._playbackRate;
    (e2 >= this.duration || e2 < 0) && (e2 = 0, this.playedDuration = 0), this.bufferNode.start(this.audioContext.currentTime, e2), this.playStartTime = this.audioContext.currentTime, this.bufferNode.onended = () => {
      this.currentTime >= this.duration && (this.pause(), this.emit("ended"));
    };
  }
  _pause() {
    var t2;
    this.paused = true, null === (t2 = this.bufferNode) || void 0 === t2 || t2.stop(), this.playedDuration += this.audioContext.currentTime - this.playStartTime;
  }
  play() {
    return t(this, void 0, void 0, function* () {
      this.paused && (this._play(), this.emit("play"));
    });
  }
  pause() {
    this.paused || (this._pause(), this.emit("pause"));
  }
  stopAt(t2) {
    const e2 = t2 - this.currentTime,
      i2 = this.bufferNode;
    null == i2 || i2.stop(this.audioContext.currentTime + e2), null == i2 || i2.addEventListener("ended", () => {
      i2 === this.bufferNode && (this.bufferNode = null, this.pause());
    }, {
      once: true
    });
  }
  setSinkId(e2) {
    return t(this, void 0, void 0, function* () {
      return this.audioContext.setSinkId(e2);
    });
  }
  get playbackRate() {
    return this._playbackRate;
  }
  set playbackRate(t2) {
    this._playbackRate = t2, this.bufferNode && (this.bufferNode.playbackRate.value = t2);
  }
  get currentTime() {
    return (this.paused ? this.playedDuration : this.playedDuration + (this.audioContext.currentTime - this.playStartTime)) * this._playbackRate;
  }
  set currentTime(t2) {
    const e2 = !this.paused;
    e2 && this._pause(), this.playedDuration = t2 / this._playbackRate, e2 && this._play(), this.emit("seeking"), this.emit("timeupdate");
  }
  get duration() {
    var t2, e2;
    return null !== (t2 = this._duration) && void 0 !== t2 ? t2 : (null === (e2 = this.buffer) || void 0 === e2 ? void 0 : e2.duration) || 0;
  }
  set duration(t2) {
    this._duration = t2;
  }
  get volume() {
    return this.gainNode.gain.value;
  }
  set volume(t2) {
    this.gainNode.gain.value = t2, this.emit("volumechange");
  }
  get muted() {
    return this._muted;
  }
  set muted(t2) {
    this._muted !== t2 && (this._muted = t2, this._muted ? this.gainNode.disconnect() : this.gainNode.connect(this.audioContext.destination));
  }
  canPlayType(t2) {
    return /^(audio|video)\//.test(t2);
  }
  getGainNode() {
    return this.gainNode;
  }
  getChannelData() {
    const t2 = [];
    if (!this.buffer) return t2;
    const e2 = this.buffer.numberOfChannels;
    for (let i2 = 0; i2 < e2; i2++) t2.push(this.buffer.getChannelData(i2));
    return t2;
  }
  removeAttribute(t2) {
    switch (t2) {
      case "src":
        this.src = "";
        break;
      case "playbackRate":
        this.playbackRate = 0;
        break;
      case "currentTime":
        this.currentTime = 0;
        break;
      case "duration":
        this.duration = 0;
        break;
      case "volume":
        this.volume = 0;
        break;
      case "muted":
        this.muted = false;
    }
  }
};
var c = {
  waveColor: "#999",
  progressColor: "#555",
  cursorWidth: 1,
  minPxPerSec: 0,
  fillParent: true,
  interact: true,
  dragToSeek: false,
  autoScroll: true,
  autoCenter: true,
  sampleRate: 8e3
};
var u = class extends a {
  static create(t2) {
    return new u(t2);
  }
  constructor(t2) {
    const e2 = t2.media || ("WebAudio" === t2.backend ? new d() : void 0);
    super({
      media: e2,
      mediaControls: t2.mediaControls,
      autoplay: t2.autoplay,
      playbackRate: t2.audioRate
    }), this.plugins = [], this.decodedData = null, this.stopAtPosition = null, this.subscriptions = [], this.mediaSubscriptions = [], this.abortController = null, this.options = Object.assign({}, c, t2), this.timer = new l();
    const i2 = e2 ? void 0 : this.getMediaElement();
    this.renderer = new h(this.options, i2), this.initPlayerEvents(), this.initRendererEvents(), this.initTimerEvents(), this.initPlugins();
    const s2 = this.options.url || this.getSrc() || "";
    Promise.resolve().then(() => {
      this.emit("init");
      const {
        peaks: t3,
        duration: e3
      } = this.options;
      (s2 || t3 && e3) && this.load(s2, t3, e3).catch(() => null);
    });
  }
  updateProgress(t2 = this.getCurrentTime()) {
    return this.renderer.renderProgress(t2 / this.getDuration(), this.isPlaying()), t2;
  }
  initTimerEvents() {
    this.subscriptions.push(this.timer.on("tick", () => {
      if (!this.isSeeking()) {
        const t2 = this.updateProgress();
        this.emit("timeupdate", t2), this.emit("audioprocess", t2), null != this.stopAtPosition && this.isPlaying() && t2 >= this.stopAtPosition && this.pause();
      }
    }));
  }
  initPlayerEvents() {
    this.isPlaying() && (this.emit("play"), this.timer.start()), this.mediaSubscriptions.push(this.onMediaEvent("timeupdate", () => {
      const t2 = this.updateProgress();
      this.emit("timeupdate", t2);
    }), this.onMediaEvent("play", () => {
      this.emit("play"), this.timer.start();
    }), this.onMediaEvent("pause", () => {
      this.emit("pause"), this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("emptied", () => {
      this.timer.stop(), this.stopAtPosition = null;
    }), this.onMediaEvent("ended", () => {
      this.emit("timeupdate", this.getDuration()), this.emit("finish"), this.stopAtPosition = null;
    }), this.onMediaEvent("seeking", () => {
      this.emit("seeking", this.getCurrentTime());
    }), this.onMediaEvent("error", () => {
      var t2;
      this.emit("error", null !== (t2 = this.getMediaElement().error) && void 0 !== t2 ? t2 : new Error("Media error")), this.stopAtPosition = null;
    }));
  }
  initRendererEvents() {
    this.subscriptions.push(this.renderer.on("click", (t2, e2) => {
      this.options.interact && (this.seekTo(t2), this.emit("interaction", t2 * this.getDuration()), this.emit("click", t2, e2));
    }), this.renderer.on("dblclick", (t2, e2) => {
      this.emit("dblclick", t2, e2);
    }), this.renderer.on("scroll", (t2, e2, i2, s2) => {
      const n2 = this.getDuration();
      this.emit("scroll", t2 * n2, e2 * n2, i2, s2);
    }), this.renderer.on("render", () => {
      this.emit("redraw");
    }), this.renderer.on("rendered", () => {
      this.emit("redrawcomplete");
    }), this.renderer.on("dragstart", t2 => {
      this.emit("dragstart", t2);
    }), this.renderer.on("dragend", t2 => {
      this.emit("dragend", t2);
    }));
    {
      let t2;
      this.subscriptions.push(this.renderer.on("drag", e2 => {
        if (!this.options.interact) return;
        let i2;
        this.renderer.renderProgress(e2), clearTimeout(t2), this.isPlaying() ? i2 = 0 : true === this.options.dragToSeek ? i2 = 200 : "object" == typeof this.options.dragToSeek && void 0 !== this.options.dragToSeek && (i2 = this.options.dragToSeek.debounceTime), t2 = setTimeout(() => {
          this.seekTo(e2);
        }, i2), this.emit("interaction", e2 * this.getDuration()), this.emit("drag", e2);
      }));
    }
  }
  initPlugins() {
    var t2;
    (null === (t2 = this.options.plugins) || void 0 === t2 ? void 0 : t2.length) && this.options.plugins.forEach(t3 => {
      this.registerPlugin(t3);
    });
  }
  unsubscribePlayerEvents() {
    this.mediaSubscriptions.forEach(t2 => t2()), this.mediaSubscriptions = [];
  }
  setOptions(t2) {
    this.options = Object.assign({}, this.options, t2), t2.duration && !t2.peaks && (this.decodedData = i.createBuffer(this.exportPeaks(), t2.duration)), t2.peaks && t2.duration && (this.decodedData = i.createBuffer(t2.peaks, t2.duration)), this.renderer.setOptions(this.options), t2.audioRate && this.setPlaybackRate(t2.audioRate), null != t2.mediaControls && (this.getMediaElement().controls = t2.mediaControls);
  }
  registerPlugin(t2) {
    if (this.plugins.includes(t2)) return t2;
    t2._init(this), this.plugins.push(t2);
    const e2 = t2.once("destroy", () => {
      this.plugins = this.plugins.filter(e3 => e3 !== t2), this.subscriptions = this.subscriptions.filter(t3 => t3 !== e2);
    });
    return this.subscriptions.push(e2), t2;
  }
  unregisterPlugin(t2) {
    this.plugins = this.plugins.filter(e2 => e2 !== t2), t2.destroy();
  }
  getWrapper() {
    return this.renderer.getWrapper();
  }
  getWidth() {
    return this.renderer.getWidth();
  }
  getScroll() {
    return this.renderer.getScroll();
  }
  setScroll(t2) {
    return this.renderer.setScroll(t2);
  }
  setScrollTime(t2) {
    const e2 = t2 / this.getDuration();
    this.renderer.setScrollPercentage(e2);
  }
  getActivePlugins() {
    return this.plugins;
  }
  loadAudio(e2, s2, n2, r2) {
    return t(this, void 0, void 0, function* () {
      var t2;
      if (this.emit("load", e2), !this.options.media && this.isPlaying() && this.pause(), this.decodedData = null, this.stopAtPosition = null, !s2 && !n2) {
        const i2 = this.options.fetchParams || {};
        window.AbortController && !i2.signal && (this.abortController = new AbortController(), i2.signal = null === (t2 = this.abortController) || void 0 === t2 ? void 0 : t2.signal);
        const n3 = t3 => this.emit("loading", t3);
        s2 = yield o.fetchBlob(e2, n3, i2);
        const r3 = this.options.blobMimeType;
        r3 && (s2 = new Blob([s2], {
          type: r3
        }));
      }
      this.setSrc(e2, s2);
      const a2 = yield new Promise(t3 => {
        const e3 = r2 || this.getDuration();
        e3 ? t3(e3) : this.mediaSubscriptions.push(this.onMediaEvent("loadedmetadata", () => t3(this.getDuration()), {
          once: true
        }));
      });
      if (!e2 && !s2) {
        const t3 = this.getMediaElement();
        t3 instanceof d && (t3.duration = a2);
      }
      if (n2) this.decodedData = i.createBuffer(n2, a2 || 0);else if (s2) {
        const t3 = yield s2.arrayBuffer();
        this.decodedData = yield i.decode(t3, this.options.sampleRate);
      }
      this.decodedData && (this.emit("decode", this.getDuration()), this.renderer.render(this.decodedData)), this.emit("ready", this.getDuration());
    });
  }
  load(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio(e2, void 0, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  loadBlob(e2, i2, s2) {
    return t(this, void 0, void 0, function* () {
      try {
        return yield this.loadAudio("", e2, i2, s2);
      } catch (t2) {
        throw this.emit("error", t2), t2;
      }
    });
  }
  zoom(t2) {
    if (!this.decodedData) throw new Error("No audio loaded");
    this.renderer.zoom(t2), this.emit("zoom", t2);
  }
  getDecodedData() {
    return this.decodedData;
  }
  exportPeaks({
    channels: t2 = 2,
    maxLength: e2 = 8e3,
    precision: i2 = 1e4
  } = {}) {
    if (!this.decodedData) throw new Error("The audio has not been decoded yet");
    const s2 = Math.min(t2, this.decodedData.numberOfChannels),
      n2 = [];
    for (let t3 = 0; t3 < s2; t3++) {
      const s3 = this.decodedData.getChannelData(t3),
        r2 = [],
        o2 = s3.length / e2;
      for (let t4 = 0; t4 < e2; t4++) {
        const e3 = s3.slice(Math.floor(t4 * o2), Math.ceil((t4 + 1) * o2));
        let n3 = 0;
        for (let t5 = 0; t5 < e3.length; t5++) {
          const i3 = e3[t5];
          Math.abs(i3) > Math.abs(n3) && (n3 = i3);
        }
        r2.push(Math.round(n3 * i2) / i2);
      }
      n2.push(r2);
    }
    return n2;
  }
  getDuration() {
    let t2 = super.getDuration() || 0;
    return 0 !== t2 && t2 !== 1 / 0 || !this.decodedData || (t2 = this.decodedData.duration), t2;
  }
  toggleInteraction(t2) {
    this.options.interact = t2;
  }
  setTime(t2) {
    this.stopAtPosition = null, super.setTime(t2), this.updateProgress(t2), this.emit("timeupdate", t2);
  }
  seekTo(t2) {
    const e2 = this.getDuration() * t2;
    this.setTime(e2);
  }
  play(e2, i2) {
    const s2 = Object.create(null, {
      play: {
        get: () => super.play
      }
    });
    return t(this, void 0, void 0, function* () {
      null != e2 && this.setTime(e2);
      const t2 = yield s2.play.call(this);
      return null != i2 && (this.media instanceof d ? this.media.stopAt(i2) : this.stopAtPosition = i2), t2;
    });
  }
  playPause() {
    return t(this, void 0, void 0, function* () {
      return this.isPlaying() ? this.pause() : this.play();
    });
  }
  stop() {
    this.pause(), this.setTime(0);
  }
  skip(t2) {
    this.setTime(this.getCurrentTime() + t2);
  }
  empty() {
    this.load("", [[0]], 1e-3);
  }
  setMediaElement(t2) {
    this.unsubscribePlayerEvents(), super.setMediaElement(t2), this.initPlayerEvents();
  }
  exportImage() {
    return t(this, arguments, void 0, function* (t2 = "image/png", e2 = 1, i2 = "dataURL") {
      return this.renderer.exportImage(t2, e2, i2);
    });
  }
  destroy() {
    var t2;
    this.emit("destroy"), null === (t2 = this.abortController) || void 0 === t2 || t2.abort(), this.plugins.forEach(t3 => t3.destroy()), this.subscriptions.forEach(t3 => t3()), this.unsubscribePlayerEvents(), this.timer.destroy(), this.renderer.destroy(), super.destroy();
  }
};
u.BasePlugin = class extends e {
  constructor(t2) {
    super(), this.subscriptions = [], this.isDestroyed = false, this.options = t2;
  }
  onInit() {}
  _init(t2) {
    this.isDestroyed && (this.subscriptions = [], this.isDestroyed = false), this.wavesurfer = t2, this.onInit();
  }
  destroy() {
    this.emit("destroy"), this.subscriptions.forEach(t2 => t2()), this.subscriptions = [], this.isDestroyed = true, this.wavesurfer = void 0;
  }
}, u.dom = r;

// .beyond/uimport/temp/wavesurfer.js.7.10.1.js
var wavesurfer_js_7_10_1_default = u;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3dhdmVzdXJmZXIuanMuNy4xMC4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dhdmVzdXJmZXIuanMvZGlzdC93YXZlc3VyZmVyLmVzbS5qcyJdLCJuYW1lcyI6WyJ3YXZlc3VyZmVyX2pzXzdfMTBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0Iiwid2F2ZXN1cmZlcl9qc183XzEwXzFfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJ0IiwidDIiLCJlMiIsImkyIiwiczIiLCJQcm9taXNlIiwibjIiLCJyMiIsIm8yIiwidDMiLCJoMiIsIm5leHQiLCJ0NCIsImEyIiwidGhyb3ciLCJlMyIsImRvbmUiLCJ2YWx1ZSIsInRoZW4iLCJhcHBseSIsIlN1cHByZXNzZWRFcnJvciIsImUiLCJjb25zdHJ1Y3RvciIsImxpc3RlbmVycyIsIm9uIiwiU2V0IiwiYWRkIiwib25jZSIsImkzIiwiaSIsInVuIiwiZGVsZXRlIiwidW5BbGwiLCJlbWl0IiwiZm9yRWFjaCIsImRlY29kZSIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJkZWNvZGVBdWRpb0RhdGEiLCJmaW5hbGx5IiwiY2xvc2UiLCJjcmVhdGVCdWZmZXIiLCJzb21lIiwibGVuZ3RoIiwiTWF0aCIsImFicyIsImU0IiwiZHVyYXRpb24iLCJudW1iZXJPZkNoYW5uZWxzIiwiZ2V0Q2hhbm5lbERhdGEiLCJjb3B5RnJvbUNoYW5uZWwiLCJBdWRpb0J1ZmZlciIsInByb3RvdHlwZSIsImNvcHlUb0NoYW5uZWwiLCJzIiwieG1sbnMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiTm9kZSIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJhc3NpZ24iLCJzdHlsZSIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJuIiwiciIsImZyZWV6ZSIsIl9fcHJvdG9fXyIsIm8iLCJmZXRjaEJsb2IiLCJmZXRjaCIsInN0YXR1cyIsIkVycm9yIiwic3RhdHVzVGV4dCIsImJvZHkiLCJoZWFkZXJzIiwiczMiLCJnZXRSZWFkZXIiLCJuMyIsIk51bWJlciIsImdldCIsInJvdW5kIiwiYSIsInJlYWQiLCJjbG9uZSIsImJsb2IiLCJpc0V4dGVybmFsTWVkaWEiLCJtZWRpYSIsIm1lZGlhQ29udHJvbHMiLCJjb250cm9scyIsImF1dG9wbGF5IiwicGxheWJhY2tSYXRlIiwib25NZWRpYUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRTcmMiLCJjdXJyZW50U3JjIiwic3JjIiwicmV2b2tlU3JjIiwic3RhcnRzV2l0aCIsIlVSTCIsInJldm9rZU9iamVjdFVSTCIsImNhblBsYXlUeXBlIiwic2V0U3JjIiwiQmxvYiIsInR5cGUiLCJjcmVhdGVPYmplY3RVUkwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkZXN0cm95IiwicGF1c2UiLCJyZW1vdmUiLCJsb2FkIiwic2V0TWVkaWFFbGVtZW50IiwicGxheSIsIkRPTUV4Y2VwdGlvbiIsIm5hbWUiLCJpc1BsYXlpbmciLCJwYXVzZWQiLCJlbmRlZCIsInNldFRpbWUiLCJjdXJyZW50VGltZSIsIm1heCIsIm1pbiIsImdldER1cmF0aW9uIiwiZ2V0Q3VycmVudFRpbWUiLCJnZXRWb2x1bWUiLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJnZXRNdXRlZCIsIm11dGVkIiwic2V0TXV0ZWQiLCJnZXRQbGF5YmFja1JhdGUiLCJpc1NlZWtpbmciLCJzZWVraW5nIiwic2V0UGxheWJhY2tSYXRlIiwicHJlc2VydmVzUGl0Y2giLCJnZXRNZWRpYUVsZW1lbnQiLCJzZXRTaW5rSWQiLCJoIiwidGltZW91dHMiLCJpc1Njcm9sbGFibGUiLCJhdWRpb0RhdGEiLCJyZXNpemVPYnNlcnZlciIsImxhc3RDb250YWluZXJXaWR0aCIsImlzRHJhZ2dpbmciLCJzdWJzY3JpcHRpb25zIiwidW5zdWJzY3JpYmVPblNjcm9sbCIsIm9wdGlvbnMiLCJwYXJlbnRGcm9tT3B0aW9uc0NvbnRhaW5lciIsImNvbnRhaW5lciIsInBhcmVudCIsImluaXRIdG1sIiwic2Nyb2xsQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXIiLCJjYW52YXNXcmFwcGVyIiwicHJvZ3Jlc3NXcmFwcGVyIiwiY3Vyc29yIiwiaW5pdEV2ZW50cyIsIkhUTUxFbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpZW50WCIsImxlZnQiLCJjbGllbnRZIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJkcmFnVG9TZWVrIiwiaW5pdERyYWciLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsIlJlc2l6ZU9ic2VydmVyIiwiY3JlYXRlRGVsYXkiLCJvbkNvbnRhaW5lclJlc2l6ZSIsImNhdGNoIiwib2JzZXJ2ZSIsInJlUmVuZGVyIiwicHVzaCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwibDIiLCJsMyIsImJ1dHRvbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZDIiLCJjMiIsInUyIiwicCIsIkRhdGUiLCJub3ciLCJtIiwicjMiLCJoMyIsImw0IiwibTIiLCJzNCIsIm8zIiwiZiIsImEzIiwiZyIsInJlbGF0ZWRUYXJnZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2IiwiYiIsInBhc3NpdmUiLCJjYXB0dXJlIiwic2V0VGltZW91dCIsImdldEhlaWdodCIsImlzTmFOIiwiY2xpZW50SGVpZ2h0IiwiZXZlcnkiLCJvdmVybGF5IiwiYXR0YWNoU2hhZG93IiwibW9kZSIsImNzcE5vbmNlIiwicmVwbGFjZSIsImlubmVySFRNTCIsInNwbGl0Q2hhbm5lbHMiLCJzZXRPcHRpb25zIiwiZ2V0V3JhcHBlciIsImdldFdpZHRoIiwiZ2V0U2Nyb2xsIiwic2V0U2Nyb2xsIiwic2V0U2Nyb2xsUGVyY2VudGFnZSIsImRpc2Nvbm5lY3QiLCJjbGVhclRpbWVvdXQiLCJjb252ZXJ0Q29sb3JWYWx1ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZ2V0UGl4ZWxSYXRpbyIsInJlbmRlckJhcldhdmVmb3JtIiwiY2FudmFzIiwiYmFyV2lkdGgiLCJiYXJHYXAiLCJiYXJSYWRpdXMiLCJiZWdpblBhdGgiLCJiYXJBbGlnbiIsImQzIiwiZmlsbCIsImNsb3NlUGF0aCIsInJlbmRlckxpbmVXYXZlZm9ybSIsIm1vdmVUbyIsImxpbmVUbyIsInJlbmRlcldhdmVmb3JtIiwiZmlsbFN0eWxlIiwid2F2ZUNvbG9yIiwicmVuZGVyRnVuY3Rpb24iLCJiYXJIZWlnaHQiLCJub3JtYWxpemUiLCJmcm9tIiwicmVkdWNlIiwicmVuZGVyU2luZ2xlQ2FudmFzIiwiY2xvbmVOb2RlIiwiZHJhd0ltYWdlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwicHJvZ3Jlc3NDb2xvciIsImZpbGxSZWN0IiwicmVuZGVyTXVsdGlDYW52YXMiLCJNQVhfQ0FOVkFTX1dJRFRIIiwiZmxvb3IiLCJpNCIsIm1hcCIsInNsaWNlIiwiY2VpbCIsImtleXMiLCJNQVhfTk9ERVMiLCJyZW5kZXJDaGFubmVsIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwibWFyZ2luVG9wIiwibWluSGVpZ2h0IiwicmVuZGVyIiwibWluUHhQZXJTZWMiLCJmaWxsUGFyZW50Iiwib3ZlcmZsb3dYIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGlkZVNjcm9sbGJhciIsImJhY2tncm91bmRDb2xvciIsImN1cnNvckNvbG9yIiwiY3Vyc29yV2lkdGgiLCJyZXNvbHZlIiwicmlnaHQiLCJ6b29tIiwic2Nyb2xsSW50b1ZpZXciLCJhdXRvQ2VudGVyIiwicmVuZGVyUHJvZ3Jlc3MiLCJjbGlwUGF0aCIsInRyYW5zZm9ybSIsImF1dG9TY3JvbGwiLCJleHBvcnRJbWFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b0RhdGFVUkwiLCJhbGwiLCJ0b0Jsb2IiLCJsIiwiYXJndW1lbnRzIiwidW5zdWJzY3JpYmUiLCJzdGFydCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0b3AiLCJkIiwiYnVmZmVyTm9kZSIsInBsYXlTdGFydFRpbWUiLCJwbGF5ZWREdXJhdGlvbiIsIl9tdXRlZCIsIl9wbGF5YmFja1JhdGUiLCJfZHVyYXRpb24iLCJidWZmZXIiLCJjcm9zc09yaWdpbiIsImF1ZGlvQ29udGV4dCIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImFycmF5QnVmZmVyIiwiX3BsYXkiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJvbmVuZGVkIiwiX3BhdXNlIiwic3RvcEF0IiwiZ2FpbiIsInRlc3QiLCJnZXRHYWluTm9kZSIsImMiLCJpbnRlcmFjdCIsInUiLCJjcmVhdGUiLCJiYWNrZW5kIiwiYXVkaW9SYXRlIiwicGx1Z2lucyIsImRlY29kZWREYXRhIiwic3RvcEF0UG9zaXRpb24iLCJtZWRpYVN1YnNjcmlwdGlvbnMiLCJhYm9ydENvbnRyb2xsZXIiLCJ0aW1lciIsInJlbmRlcmVyIiwiaW5pdFBsYXllckV2ZW50cyIsImluaXRSZW5kZXJlckV2ZW50cyIsImluaXRUaW1lckV2ZW50cyIsImluaXRQbHVnaW5zIiwidXJsIiwicGVha3MiLCJ1cGRhdGVQcm9ncmVzcyIsImVycm9yIiwic2Vla1RvIiwiZGVib3VuY2VUaW1lIiwicmVnaXN0ZXJQbHVnaW4iLCJ1bnN1YnNjcmliZVBsYXllckV2ZW50cyIsImV4cG9ydFBlYWtzIiwiaW5jbHVkZXMiLCJfaW5pdCIsImZpbHRlciIsInVucmVnaXN0ZXJQbHVnaW4iLCJzZXRTY3JvbGxUaW1lIiwiZ2V0QWN0aXZlUGx1Z2lucyIsImxvYWRBdWRpbyIsImZldGNoUGFyYW1zIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwiYmxvYk1pbWVUeXBlIiwibG9hZEJsb2IiLCJnZXREZWNvZGVkRGF0YSIsImNoYW5uZWxzIiwibWF4TGVuZ3RoIiwicHJlY2lzaW9uIiwidDUiLCJ0b2dnbGVJbnRlcmFjdGlvbiIsInBsYXlQYXVzZSIsInNraXAiLCJlbXB0eSIsImFib3J0IiwiQmFzZVBsdWdpbiIsImlzRGVzdHJveWVkIiwib25Jbml0Iiwid2F2ZXN1cmZlciIsImRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsNEJBQUE7QUFBQUMsUUFBQSxDQUFBRCw0QkFBQTtFQUFBRSxPQUFBLEVBQUFBLENBQUEsS0FBQUM7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiw0QkFBQTs7O0FDQUEsU0FBU08sRUFBRUMsRUFBQSxFQUFFQyxFQUFBLEVBQUVDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0VBQUMsT0FBTyxLQUFJRCxFQUFBLEtBQUlBLEVBQUEsR0FBRUUsT0FBQSxHQUFXLFVBQVNDLEVBQUEsRUFBRUMsRUFBQSxFQUFFO0lBQUMsU0FBU0MsR0FBRUMsRUFBQSxFQUFFO01BQUMsSUFBRztRQUFDQyxFQUFBLENBQUVOLEVBQUEsQ0FBRU8sSUFBQSxDQUFLRixFQUFDLENBQUM7TUFBQyxTQUFPRyxFQUFBLEVBQU47UUFBU0wsRUFBQSxDQUFFSyxFQUFDO01BQUM7SUFBQztJQUFDLFNBQVNDLEdBQUVKLEVBQUEsRUFBRTtNQUFDLElBQUc7UUFBQ0MsRUFBQSxDQUFFTixFQUFBLENBQUVVLEtBQUEsQ0FBTUwsRUFBQyxDQUFDO01BQUMsU0FBT0csRUFBQSxFQUFOO1FBQVNMLEVBQUEsQ0FBRUssRUFBQztNQUFDO0lBQUM7SUFBQyxTQUFTRixHQUFFRCxFQUFBLEVBQUU7TUFBQyxJQUFJTSxFQUFBO01BQUVOLEVBQUEsQ0FBRU8sSUFBQSxHQUFLVixFQUFBLENBQUVHLEVBQUEsQ0FBRVEsS0FBSyxLQUFHRixFQUFB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