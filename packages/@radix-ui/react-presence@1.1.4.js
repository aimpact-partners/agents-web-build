System.register(["react@18.3.1","@radix-ui/react-compose-refs@1.1.2","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-presence","1.1.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep)],
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

// .beyond/uimport/@radix-ui/react-presence.1.1.4.js
var react_presence_1_1_4_exports = {};
__export(react_presence_1_1_4_exports, {
  Presence: () => Presence,
  Root: () => Root
});
module.exports = __toCommonJS(react_presence_1_1_4_exports);

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React2 = __toESM(require("react@18.3.1"), 0);
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var React = __toESM(require("react@18.3.1"), 0);
"use client";
function useStateMachine(initialState, machine) {
  return React.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = props => {
  const {
    present,
    children
  } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({
    present: presence.isPresent
  }) : React2.Children.only(children);
  const ref = (0, import_react_compose_refs.useComposedRefs)(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React2.cloneElement(child, {
    ref
  }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React2.useState();
  const stylesRef = React2.useRef(null);
  const prevPresentRef = React2.useRef(present);
  const prevAnimationNameRef = React2.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React2.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = event => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = event => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React2.useCallback(node2 => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root = Presence;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2UuMS4xLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL3NyYy9wcmVzZW5jZS50c3giLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL3NyYy91c2Utc3RhdGUtbWFjaGluZS50c3giXSwibmFtZXMiOlsicmVhY3RfcHJlc2VuY2VfMV8xXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiUHJlc2VuY2UiLCJSb290IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0MiIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X2NvbXBvc2VfcmVmcyIsImltcG9ydF9yZWFjdF91c2VfbGF5b3V0X2VmZmVjdCIsIlJlYWN0IiwidXNlU3RhdGVNYWNoaW5lIiwiaW5pdGlhbFN0YXRlIiwibWFjaGluZSIsInVzZVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwibmV4dFN0YXRlIiwicHJvcHMiLCJwcmVzZW50IiwiY2hpbGRyZW4iLCJwcmVzZW5jZSIsInVzZVByZXNlbmNlIiwiY2hpbGQiLCJpc1ByZXNlbnQiLCJDaGlsZHJlbiIsIm9ubHkiLCJyZWYiLCJ1c2VDb21wb3NlZFJlZnMiLCJnZXRFbGVtZW50UmVmIiwiZm9yY2VNb3VudCIsImNsb25lRWxlbWVudCIsImRpc3BsYXlOYW1lIiwibm9kZSIsInNldE5vZGUiLCJ1c2VTdGF0ZSIsInN0eWxlc1JlZiIsInVzZVJlZiIsInByZXZQcmVzZW50UmVmIiwicHJldkFuaW1hdGlvbk5hbWVSZWYiLCJzZW5kIiwibW91bnRlZCIsIlVOTU9VTlQiLCJBTklNQVRJT05fT1VUIiwidW5tb3VudFN1c3BlbmRlZCIsIk1PVU5UIiwiQU5JTUFUSU9OX0VORCIsInVubW91bnRlZCIsInVzZUVmZmVjdCIsImN1cnJlbnRBbmltYXRpb25OYW1lIiwiZ2V0QW5pbWF0aW9uTmFtZSIsImN1cnJlbnQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJzdHlsZXMiLCJ3YXNQcmVzZW50IiwiaGFzUHJlc2VudENoYW5nZWQiLCJwcmV2QW5pbWF0aW9uTmFtZSIsImRpc3BsYXkiLCJpc0FuaW1hdGluZyIsInRpbWVvdXRJZCIsIm93bmVyV2luZG93Iiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwid2luZG93IiwiaGFuZGxlQW5pbWF0aW9uRW5kIiwiaXNDdXJyZW50QW5pbWF0aW9uIiwiaW5jbHVkZXMiLCJhbmltYXRpb25OYW1lIiwidGFyZ2V0IiwiY3VycmVudEZpbGxNb2RlIiwic3R5bGUiLCJhbmltYXRpb25GaWxsTW9kZSIsInNldFRpbWVvdXQiLCJoYW5kbGVBbmltYXRpb25TdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlQ2FsbGJhY2siLCJub2RlMiIsImdldENvbXB1dGVkU3R5bGUiLCJlbGVtZW50IiwiZ2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0IiwibWF5V2FybiIsImlzUmVhY3RXYXJuaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSw0QkFBQTtBQUFBQyxRQUFBLENBQUFELDRCQUFBO0VBQUFFLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLDRCQUFBOzs7QUNBQSxJQUFBTyxNQUFBLEdBQXVCQyxPQUFBLENBQUFDLE9BQUE7QUFDdkIsSUFBQUMseUJBQUEsR0FBZ0NELE9BQUE7QUFDaEMsSUFBQUUsOEJBQUEsR0FBZ0NGLE9BQUE7QUNGaEMsSUFBQUcsS0FBQSxHQUF1QkosT0FBQSxDQUFBQyxPQUFBOztBQVdoQixTQUFTSSxn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QUFDbEM7QUFPQSxTQUFTdEMsY0FBY21ELE9BQUEsRUFBMkQ7RUFFaEYsSUFBSUMsTUFBQSxHQUFTQyxNQUFBLENBQU9DLHdCQUFBLENBQXlCSCxPQUFBLENBQVE5RCxLQUFBLEVBQU8sS0FBSyxHQUFHa0UsR0FBQTtFQUNwRSxJQUFJQyxPQUFBLEdBQVVKLE1BQUEsSUFBVSxvQkFBb0JBLE1BQUEsSUFBVUEsTUFBQSxDQUFPSyxjQUFBO0VBQzdELElBQUlELE9BQUEsRUFBUztJQUNYLE9BQVFMLE9BQUEsQ0FBZ0JyRCxHQUFBO0VBQzFCO0VBR0FzRCxNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsRUFBUyxLQUFLLEdBQUdJLEdBQUE7RUFDMURDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDekQsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBT0wsT0FBQSxDQUFROUQsS0FBQSxDQUFNUyxHQUFBO0VBQ3ZCO0VBR0EsT0FBT3FELE9BQUEsQ0FBUTlELEtBQUEsQ0FBTVMsR0FBQSxJQUFRcUQsT0FBQSxDQUFnQnJELEdBQUE7QUFDL0M7QUFFQSxJQUFNMUIsSUFBQSxHQUFPRCxRQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==