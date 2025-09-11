System.register(["react@18.3.1","@radix-ui/react-compose-refs@1.1.2","@radix-ui/react-use-layout-effect@1.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-presence","1.1.5"]]);
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

// .beyond/uimport/temp/@radix-ui/react-presence.1.1.5.js
var react_presence_1_1_5_exports = {};
__export(react_presence_1_1_5_exports, {
  Presence: () => Presence,
  Root: () => Root
});
module.exports = __toCommonJS(react_presence_1_1_5_exports);

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
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1wcmVzZW5jZS4xLjEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2Uvc3JjL3ByZXNlbmNlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJlc2VuY2Uvc3JjL3VzZS1zdGF0ZS1tYWNoaW5lLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9wcmVzZW5jZV8xXzFfNV9leHBvcnRzIiwiX19leHBvcnQiLCJQcmVzZW5jZSIsIlJvb3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QyIiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3RfY29tcG9zZV9yZWZzIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwiUmVhY3QiLCJ1c2VTdGF0ZU1hY2hpbmUiLCJpbml0aWFsU3RhdGUiLCJtYWNoaW5lIiwidXNlUmVkdWNlciIsInN0YXRlIiwiZXZlbnQiLCJuZXh0U3RhdGUiLCJwcm9wcyIsInByZXNlbnQiLCJjaGlsZHJlbiIsInByZXNlbmNlIiwidXNlUHJlc2VuY2UiLCJjaGlsZCIsImlzUHJlc2VudCIsIkNoaWxkcmVuIiwib25seSIsInJlZiIsInVzZUNvbXBvc2VkUmVmcyIsImdldEVsZW1lbnRSZWYiLCJmb3JjZU1vdW50IiwiY2xvbmVFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJub2RlIiwic2V0Tm9kZSIsInVzZVN0YXRlIiwic3R5bGVzUmVmIiwidXNlUmVmIiwicHJldlByZXNlbnRSZWYiLCJwcmV2QW5pbWF0aW9uTmFtZVJlZiIsInNlbmQiLCJtb3VudGVkIiwiVU5NT1VOVCIsIkFOSU1BVElPTl9PVVQiLCJ1bm1vdW50U3VzcGVuZGVkIiwiTU9VTlQiLCJBTklNQVRJT05fRU5EIiwidW5tb3VudGVkIiwidXNlRWZmZWN0IiwiY3VycmVudEFuaW1hdGlvbk5hbWUiLCJnZXRBbmltYXRpb25OYW1lIiwiY3VycmVudCIsInVzZUxheW91dEVmZmVjdCIsInN0eWxlcyIsIndhc1ByZXNlbnQiLCJoYXNQcmVzZW50Q2hhbmdlZCIsInByZXZBbmltYXRpb25OYW1lIiwiZGlzcGxheSIsImlzQW5pbWF0aW5nIiwidGltZW91dElkIiwib3duZXJXaW5kb3ciLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJ3aW5kb3ciLCJoYW5kbGVBbmltYXRpb25FbmQiLCJpc0N1cnJlbnRBbmltYXRpb24iLCJpbmNsdWRlcyIsIkNTUyIsImVzY2FwZSIsImFuaW1hdGlvbk5hbWUiLCJ0YXJnZXQiLCJjdXJyZW50RmlsbE1vZGUiLCJzdHlsZSIsImFuaW1hdGlvbkZpbGxNb2RlIiwic2V0VGltZW91dCIsImhhbmRsZUFuaW1hdGlvblN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VDYWxsYmFjayIsIm5vZGUyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImVsZW1lbnQiLCJnZXR0ZXIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJtYXlXYXJuIiwiaXNSZWFjdFdhcm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLDRCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsNEJBQUE7RUFBQUUsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sNEJBQUE7OztBQ0FBLElBQUFPLE1BQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyx5QkFBQSxHQUFnQ0QsT0FBQTtBQUNoQyxJQUFBRSw4QkFBQSxHQUFnQ0YsT0FBQTtBQ0ZoQyxJQUFBRyxLQUFBLEdBQXVCSixPQUFBLENBQUFD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QkcsTUFBQSxFQUFvQztFQUM1RCxPQUFPQSxNQUFBLEVBQVFnQixhQUFBLElBQWlCO0FBQ2xDO0FBT0EsU0FBU3hDLGNBQWNxRCxPQUFBLEVBQTJEO0VBRWhGLElBQUlDLE1BQUEsR0FBU0MsTUFBQSxDQUFPQyx3QkFBQSxDQUF5QkgsT0FBQSxDQUFRaEUsS0FBQSxFQUFPLEtBQUssR0FBR29FLEdBQUE7RUFDcEUsSUFBSUMsT0FBQSxHQUFVSixNQUFBLElBQVUsb0JBQW9CQSxNQUFBLElBQVVBLE1BQUEsQ0FBT0ssY0FBQTtFQUM3RCxJQUFJRCxPQUFBLEVBQVM7SUFDWCxPQUFRTCxPQUFBLENBQWdCdkQsR0FBQTtFQUMxQjtFQUdBd0QsTUFBQSxHQUFTQyxNQUFBLENBQU9DLHdCQUFBLENBQXlCSCxPQUFBLEVBQVMsS0FBSyxHQUFHSSxHQUFBO0VBQzFEQyxPQUFBLEdBQVVKLE1BQUEsSUFBVSxvQkFBb0JBLE1BQUEsSUFBVUEsTUFBQSxDQUFPSyxjQUFBO0VBQ3pELElBQUlELE9BQUEsRUFBUztJQUNYLE9BQU9MLE9BQUEsQ0FBUWhFLEtBQUEsQ0FBTVMsR0FBQTtFQUN2QjtFQUdBLE9BQU91RCxPQUFBLENBQVFoRSxLQUFBLENBQU1TLEdBQUEsSUFBUXVELE9BQUEsQ0FBZ0J2RCxHQUFBO0FBQy9DO0FBRUEsSUFBTTFCLElBQUEsR0FBT0QsUUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9