System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["ssr-window","4.0.2"]]);
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

// .beyond/uimport/temp/ssr-window.4.0.2.js
var ssr_window_4_0_2_exports = {};
__export(ssr_window_4_0_2_exports, {
  extend: () => extend,
  getDocument: () => getDocument,
  getWindow: () => getWindow,
  ssrDocument: () => ssrDocument,
  ssrWindow: () => ssrWindow
});
module.exports = __toCommonJS(ssr_window_4_0_2_exports);

// node_modules/ssr-window/ssr-window.esm.js
function isObject(obj) {
  return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  Object.keys(src).forEach(key => {
    if (typeof target[key] === "undefined") target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
var ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function getDocument() {
  const doc = typeof document !== "undefined" ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
var ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== "undefined" ? window : {};
  extend(win, ssrWindow);
  return win;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3Nzci13aW5kb3cuNC4wLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvc3NyLXdpbmRvdy9zc3Itd2luZG93LmVzbS5qcyJdLCJuYW1lcyI6WyJzc3Jfd2luZG93XzRfMF8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImV4dGVuZCIsImdldERvY3VtZW50IiwiZ2V0V2luZG93Iiwic3NyRG9jdW1lbnQiLCJzc3JXaW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiaXNPYmplY3QiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInRhcmdldCIsInNyYyIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwibGVuZ3RoIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJub2RlTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJzdHlsZSIsInNldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudE5TIiwiaW1wb3J0Tm9kZSIsImxvY2F0aW9uIiwiaGFzaCIsImhvc3QiLCJob3N0bmFtZSIsImhyZWYiLCJvcmlnaW4iLCJwYXRobmFtZSIsInByb3RvY29sIiwic2VhcmNoIiwiZG9jIiwiZG9jdW1lbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZ28iLCJiYWNrIiwiQ3VzdG9tRXZlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIkltYWdlIiwiRGF0ZSIsInNjcmVlbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJtYXRjaE1lZGlhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwid2luIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQTtBQUFBQyxRQUFBLENBQUFELHdCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFULHdCQUFBOzs7QUNZQSxTQUFTVSxTQUFTQyxHQUFBLEVBQUs7RUFDbkIsT0FBUUEsR0FBQSxLQUFRLFFBQ1osT0FBT0EsR0FBQSxLQUFRLFlBQ2YsaUJBQWlCQSxHQUFBLElBQ2pCQSxHQUFBLENBQUlDLFdBQUEsS0FBZ0JDLE1BQUE7QUFDNUI7QUFDQSxTQUFTWCxPQUFPWSxNQUFBLEdBQVMsQ0FBQyxHQUFHQyxHQUFBLEdBQU0sQ0FBQyxHQUFHO0VBQ25DRixNQUFBLENBQU9HLElBQUEsQ0FBS0QsR0FBRyxFQUFFRSxPQUFBLENBQVNDLEdBQUEsSUFBUTtJQUM5QixJQUFJLE9BQU9KLE1BQUEsQ0FBT0ksR0FBQSxNQUFTLGFBQ3ZCSixNQUFBLENBQU9JLEdBQUEsSUFBT0gsR0FBQSxDQUFJRyxHQUFBLFdBQ2JSLFFBQUEsQ0FBU0ssR0FBQSxDQUFJRyxHQUFBLENBQUksS0FDdEJSLFFBQUEsQ0FBU0ksTUFBQSxDQUFPSSxHQUFBLENBQUksS0FDcEJMLE1BQUEsQ0FBT0csSUFBQSxDQUFLRCxHQUFBLENBQUlHLEdBQUEsQ0FBSSxFQUFFQyxNQUFBLEdBQVMsR0FBRztNQUNsQ2pCLE1BQUEsQ0FBT1ksTUFBQSxDQUFPSSxHQUFBLEdBQU1ILEdBQUEsQ0FBSUcsR0FBQSxDQUFJO0lBQ2hDO0VBQ0osQ0FBQztBQUNMO0FBRUEsSUFBTWIsV0FBQSxHQUFjO0VBQ2hCZSxJQUFBLEVBQU0sQ0FBQztFQUNQQyxpQkFBQSxFQUFtQixDQUFFO0VBQ3JCQyxvQkFBQSxFQUFzQixDQUFFO0VBQ3hCQyxhQUFBLEVBQWU7SUFDWEMsS0FBQSxFQUFPLENBQUU7SUFDVEMsUUFBQSxFQUFVO0VBQ2Q7RUFDQUMsY0FBQSxFQUFnQjtJQUNaLE9BQU87RUFDWDtFQUNBQyxpQkFBQSxFQUFtQjtJQUNmLE9BQU8sRUFBQztFQUNaO0VBQ0FDLGVBQUEsRUFBaUI7SUFDYixPQUFPO0VBQ1g7RUFDQUMsWUFBQSxFQUFjO0lBQ1YsT0FBTztNQUNIQyxVQUFBLEVBQVksQ0FBRTtJQUNsQjtFQUNKO0VBQ0FDLGNBQUEsRUFBZ0I7SUFDWixPQUFPO01BQ0hDLFFBQUEsRUFBVSxFQUFDO01BQ1hDLFVBQUEsRUFBWSxFQUFDO01BQ2JDLEtBQUEsRUFBTyxDQUFDO01BQ1JDLGFBQUEsRUFBZSxDQUFFO01BQ2pCQyxxQkFBQSxFQUF1QjtRQUNuQixPQUFPLEVBQUM7TUFDWjtJQUNKO0VBQ0o7RUFDQUMsZ0JBQUEsRUFBa0I7SUFDZCxPQUFPLENBQUM7RUFDWjtFQUNBQyxXQUFBLEVBQWE7SUFDVCxPQUFPO0VBQ1g7RUFDQUMsUUFBQSxFQUFVO0lBQ05DLElBQUEsRUFBTTtJQUNOQyxJQUFBLEVBQU07SUFDTkMsUUFBQSxFQUFVO0lBQ1ZDLElBQUEsRUFBTTtJQUNOQyxNQUFBLEVBQVE7SUFDUkMsUUFBQSxFQUFVO0lBQ1ZDLFFBQUEsRUFBVTtJQUNWQyxNQUFBLEVBQVE7RUFDWjtBQUNKO0FBQ0EsU0FBUzVDLFlBQUEsRUFBYztFQUNuQixNQUFNNkMsR0FBQSxHQUFNLE9BQU9DLFFBQUEsS0FBYSxjQUFjQSxRQUFBLEdBQVcsQ0FBQztFQUMxRC9DLE1BQUEsQ0FBTzhDLEdBQUEsRUFBSzNDLFdBQVc7RUFDdkIsT0FBTzJDLEdBQUE7QUFDWDtBQUVBLElBQU0xQyxTQUFBLEdBQVk7RUFDZDJDLFFBQUEsRUFBVTVDLFdBQUE7RUFDVjZDLFNBQUEsRUFBVztJQUNQQyxTQUFBLEVBQVc7RUFDZjtFQUNBWixRQUFBLEVBQVU7SUFDTkMsSUFBQSxFQUFNO0lBQ05DLElBQUEsRUFBTTtJQUNOQyxRQUFBLEVBQVU7SUFDVkMsSUFBQSxFQUFNO0lBQ05DLE1BQUEsRUFBUTtJQUNSQyxRQUFBLEVBQVU7SUFDVkMsUUFBQSxFQUFVO0lBQ1ZDLE1BQUEsRUFBUTtFQUNaO0VBQ0FLLE9BQUEsRUFBUztJQUNMQyxhQUFBLEVBQWUsQ0FBRTtJQUNqQkMsVUFBQSxFQUFZLENBQUU7SUFDZEMsR0FBQSxFQUFLLENBQUU7SUFDUEMsS0FBQSxFQUFPLENBQUU7RUFDYjtFQUNBQyxXQUFBLEVBQWEsU0FBU0EsWUFBQSxFQUFjO0lBQ2hDLE9BQU87RUFDWDtFQUNBcEMsaUJBQUEsRUFBbUIsQ0FBRTtFQUNyQkMsb0JBQUEsRUFBc0IsQ0FBRTtFQUN4Qm9DLGlCQUFBLEVBQW1CO0lBQ2YsT0FBTztNQUNIQyxpQkFBQSxFQUFtQjtRQUNmLE9BQU87TUFDWDtJQUNKO0VBQ0o7RUFDQUMsTUFBQSxFQUFRLENBQUU7RUFDVkMsS0FBQSxFQUFPLENBQUU7RUFDVEMsTUFBQSxFQUFRLENBQUM7RUFDVEMsV0FBQSxFQUFhLENBQUU7RUFDZkMsYUFBQSxFQUFlLENBQUU7RUFDakJDLFdBQUEsRUFBYTtJQUNULE9BQU8sQ0FBQztFQUNaO0VBQ0FDLHNCQUFzQkMsUUFBQSxFQUFVO0lBQzVCLElBQUksT0FBT0osVUFBQSxLQUFlLGFBQWE7TUFDbkNJLFFBQUEsQ0FBUztNQUNULE9BQU87SUFDWDtJQUNBLE9BQU9KLFVBQUEsQ0FBV0ksUUFBQSxFQUFVLENBQUM7RUFDakM7RUFDQUMscUJBQXFCQyxFQUFBLEVBQUk7SUFDckIsSUFBSSxPQUFPTixVQUFBLEtBQWUsYUFBYTtNQUNuQztJQUNKO0lBQ0FDLFlBQUEsQ0FBYUssRUFBRTtFQUNuQjtBQUNKO0FBQ0EsU0FBU2pFLFVBQUEsRUFBWTtFQUNqQixNQUFNa0UsR0FBQSxHQUFNLE9BQU9DLE1BQUEsS0FBVyxjQUFjQSxNQUFBLEdBQVMsQ0FBQztFQUN0RHJFLE1BQUEsQ0FBT29FLEdBQUEsRUFBS2hFLFNBQVM7RUFDckIsT0FBT2dFLEdBQUE7QUFDWCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9