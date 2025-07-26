System.register(["react@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-slot.1.2.2.js
var react_slot_1_2_2_exports = {};
__export(react_slot_1_2_2_exports, {
  Root: () => Slot,
  Slot: () => Slot,
  Slottable: () => Slottable,
  createSlot: () => createSlot,
  createSlottable: () => createSlottable
});
module.exports = __toCommonJS(react_slot_1_2_2_exports);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
"use client";
function createSlot(ownerName) {
  const SlotClone = /* @__PURE__ */createSlotClone(ownerName);
  const Slot2 = React.forwardRef((props, forwardedRef) => {
    const {
      children,
      ...slotProps
    } = props;
    const childrenArray = React.Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
      const newElement = slottable.props.children;
      const newChildren = childrenArray.map(child => {
        if (child === slottable) {
          if (React.Children.count(newElement) > 1) return React.Children.only(null);
          return React.isValidElement(newElement) ? newElement.props.children : null;
        } else {
          return child;
        }
      });
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children: React.isValidElement(newElement) ? React.cloneElement(newElement, void 0, newChildren) : null
      });
    }
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SlotClone, {
      ...slotProps,
      ref: forwardedRef,
      children
    });
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */createSlot("Slot");
function createSlotClone(ownerName) {
  const SlotClone = React.forwardRef((props, forwardedRef) => {
    const {
      children,
      ...slotProps
    } = props;
    const childrenRef = React.isValidElement(children) ? getElementRef(children) : void 0;
    const ref = (0, import_react_compose_refs.useComposedRefs)(childrenRef, forwardedRef);
    if (React.isValidElement(children)) {
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React.Fragment) {
        props2.ref = ref;
      }
      return React.cloneElement(children, props2);
    }
    return React.Children.count(children) > 1 ? React.Children.only(null) : null;
  });
  SlotClone.displayName = `${ownerName}.SlotClone`;
  return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
function createSlottable(ownerName) {
  const Slottable2 = ({
    children
  }) => {
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children
    });
  };
  Slottable2.displayName = `${ownerName}.Slottable`;
  Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
  return Slottable2;
}
var Slottable = /* @__PURE__ */createSlottable("Slottable");
function isSlottable(child) {
  return React.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = {
    ...childProps
  };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = {
        ...slotPropValue,
        ...childPropValue
      };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return {
    ...slotProps,
    ...overrideProps
  };
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
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1zbG90LjEuMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1zbG90L3NyYy9zbG90LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9zbG90XzFfMl8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsIlJvb3QiLCJTbG90IiwiU2xvdHRhYmxlIiwiY3JlYXRlU2xvdCIsImNyZWF0ZVNsb3R0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsIl9fdG9FU00iLCJyZXF1aXJlIiwiaW1wb3J0X3JlYWN0X2NvbXBvc2VfcmVmcyIsImltcG9ydF9qc3hfcnVudGltZSIsIm93bmVyTmFtZSIsIlNsb3RDbG9uZSIsImNyZWF0ZVNsb3RDbG9uZSIsIlNsb3QyIiwiZm9yd2FyZFJlZiIsInByb3BzIiwiZm9yd2FyZGVkUmVmIiwiY2hpbGRyZW4iLCJzbG90UHJvcHMiLCJjaGlsZHJlbkFycmF5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwic2xvdHRhYmxlIiwiZmluZCIsImlzU2xvdHRhYmxlIiwibmV3RWxlbWVudCIsIm5ld0NoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJjb3VudCIsIm9ubHkiLCJpc1ZhbGlkRWxlbWVudCIsImpzeCIsInJlZiIsImNsb25lRWxlbWVudCIsImRpc3BsYXlOYW1lIiwiY2hpbGRyZW5SZWYiLCJnZXRFbGVtZW50UmVmIiwidXNlQ29tcG9zZWRSZWZzIiwicHJvcHMyIiwibWVyZ2VQcm9wcyIsInR5cGUiLCJGcmFnbWVudCIsIlNMT1RUQUJMRV9JREVOVElGSUVSIiwiU3ltYm9sIiwiU2xvdHRhYmxlMiIsIl9fcmFkaXhJZCIsImNoaWxkUHJvcHMiLCJvdmVycmlkZVByb3BzIiwicHJvcE5hbWUiLCJzbG90UHJvcFZhbHVlIiwiY2hpbGRQcm9wVmFsdWUiLCJpc0hhbmRsZXIiLCJ0ZXN0IiwiYXJncyIsInJlc3VsdCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZWxlbWVudCIsImdldHRlciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsIm1heVdhcm4iLCJpc1JlYWN0V2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUMsSUFBQTtFQUFBQSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCx3QkFBQTs7O0FDQUEsSUFBQVUsS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLHlCQUFBLEdBQWdDRCxPQUFBO0FBbUN4QixJQUFBRSxrQkFBQSxHQUFBRixPQUFBOztBQXpCMEIsU0FBU1AsV0FBV1UsU0FBQSxFQUFtQjtFQUN2RSxNQUFNQyxTQUFBLEdBQVksZUFBQUMsZUFBQSxDQUFnQkYsU0FBUztFQUMzQyxNQUFNRyxLQUFBLEdBQWFSLEtBQUEsQ0FBQVMsVUFBQSxDQUFtQyxDQUFDQyxLQUFBLEVBQU9DLFlBQUEsS0FBaUI7SUFDN0UsTUFBTTtNQUFFQyxRQUFBO01BQUEsR0FBYUM7SUFBVSxJQUFJSCxLQUFBO0lBQ25DLE1BQU1JLGFBQUEsR0FBc0JkLEtBQUEsQ0FBQWUsUUFBQSxDQUFTQyxPQUFBLENBQVFKLFFBQVE7SUFDckQsTUFBTUssU0FBQSxHQUFZSCxhQUFBLENBQWNJLElBQUEsQ0FBS0MsV0FBVztJQUVoRCxJQUFJRixTQUFBLEVBQVc7TUFFYixNQUFNRyxVQUFBLEdBQWFILFNBQUEsQ0FBVVAsS0FBQSxDQUFNRSxRQUFB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QUFFQyxJQUFBLENBQUssR0FBRztJQUNwRjtFQUNGO0VBRUEsT0FBTztJQUFFLEdBQUd4QyxTQUFBO0lBQVcsR0FBRzhCO0VBQWM7QUFDMUM7QUFPQSxTQUFTWCxjQUFjc0IsT0FBQSxFQUE2QjtFQUVsRCxJQUFJQyxNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsQ0FBUTVDLEtBQUEsRUFBTyxLQUFLLEdBQUdnRCxHQUFBO0VBQ3BFLElBQUlDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDN0QsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBUUwsT0FBQSxDQUFnQjFCLEdBQUE7RUFDMUI7RUFHQTJCLE1BQUEsR0FBU0MsTUFBQSxDQUFPQyx3QkFBQSxDQUF5QkgsT0FBQSxFQUFTLEtBQUssR0FBR0ksR0FBQTtFQUMxREMsT0FBQSxHQUFVSixNQUFBLElBQVUsb0JBQW9CQSxNQUFBLElBQVVBLE1BQUEsQ0FBT0ssY0FBQTtFQUN6RCxJQUFJRCxPQUFBLEVBQVM7SUFDWCxPQUFRTCxPQUFBLENBQVE1QyxLQUFBLENBQXVDa0IsR0FBQTtFQUN6RDtFQUdBLE9BQVEwQixPQUFBLENBQVE1QyxLQUFBLENBQXVDa0IsR0FBQSxJQUFRMEIsT0FBQSxDQUFnQjFCLEdBQUE7QUFDakYiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==