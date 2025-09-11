System.register(["react@18.3.1","@radix-ui/react-compose-refs@1.1.2","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.3"]]);
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

// .beyond/uimport/@radix-ui/react-slot.1.2.3.js
var react_slot_1_2_3_exports = {};
__export(react_slot_1_2_3_exports, {
  Root: () => Slot,
  Slot: () => Slot,
  Slottable: () => Slottable,
  createSlot: () => createSlot,
  createSlottable: () => createSlottable
});
module.exports = __toCommonJS(react_slot_1_2_3_exports);

// node_modules/@radix-ui/react-slot/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
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
    if (React.isValidElement(children)) {
      const childrenRef = getElementRef(children);
      const props2 = mergeProps(slotProps, children.props);
      if (children.type !== React.Fragment) {
        props2.ref = forwardedRef ? (0, import_react_compose_refs.composeRefs)(forwardedRef, childrenRef) : childrenRef;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3Qtc2xvdC4xLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3Qtc2xvdC9zcmMvc2xvdC50c3giXSwibmFtZXMiOlsicmVhY3Rfc2xvdF8xXzJfM19leHBvcnRzIiwiX19leHBvcnQiLCJSb290IiwiU2xvdCIsIlNsb3R0YWJsZSIsImNyZWF0ZVNsb3QiLCJjcmVhdGVTbG90dGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF9jb21wb3NlX3JlZnMiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJvd25lck5hbWUiLCJTbG90Q2xvbmUiLCJjcmVhdGVTbG90Q2xvbmUiLCJTbG90MiIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImNoaWxkcmVuIiwic2xvdFByb3BzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInNsb3R0YWJsZSIsImZpbmQiLCJpc1Nsb3R0YWJsZSIsIm5ld0VsZW1lbnQiLCJuZXdDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY291bnQiLCJvbmx5IiwiaXNWYWxpZEVsZW1lbnQiLCJqc3giLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJkaXNwbGF5TmFtZSIsImNoaWxkcmVuUmVmIiwiZ2V0RWxlbWVudFJlZiIsInByb3BzMiIsIm1lcmdlUHJvcHMiLCJ0eXBlIiwiRnJhZ21lbnQiLCJjb21wb3NlUmVmcyIsIlNMT1RUQUJMRV9JREVOVElGSUVSIiwiU3ltYm9sIiwiU2xvdHRhYmxlMiIsIl9fcmFkaXhJZCIsImNoaWxkUHJvcHMiLCJvdmVycmlkZVByb3BzIiwicHJvcE5hbWUiLCJzbG90UHJvcFZhbHVlIiwiY2hpbGRQcm9wVmFsdWUiLCJpc0hhbmRsZXIiLCJ0ZXN0IiwiYXJncyIsInJlc3VsdCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZWxlbWVudCIsImdldHRlciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsIm1heVdhcm4iLCJpc1JlYWN0V2FybmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxJQUFBLEVBQUFBLENBQUEsS0FBQUMsSUFBQTtFQUFBQSxJQUFBLEVBQUFBLENBQUEsS0FBQUEsSUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCx3QkFBQTs7O0FDQUEsSUFBQVUsS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLHlCQUFBLEdBQTRCRCxPQUFBO0FBbUNwQixJQUFBRSxrQkFBQSxHQUFBRixPQUFBO0FBekIwQixTQUFTUCxXQUFXVSxTQUFBLEVBQW1CO0VBQ3ZFLE1BQU1DLFNBQUEsR0FBWSxlQUFBQyxlQUFBLENBQWdCRixTQUFTO0VBQzNDLE1BQU1HLEtBQUEsR0FBYVIsS0FBQSxDQUFBUyxVQUFBLENBQW1DLENBQUNDLEtBQUEsRUFBT0MsWUFBQSxLQUFpQjtJQUM3RSxNQUFNO01BQUVDLFFBQUE7TUFBQSxHQUFhQztJQUFVLElBQUlILEtBQUE7SUFDbkMsTUFBTUksYUFBQSxHQUFzQmQsS0FBQSxDQUFBZSxRQUFBLENBQVNDLE9BQUEsQ0FBUUosUUFBUTtJQUNyRCxNQUFNSyxTQUFBLEdBQVlILGFBQUEsQ0FBY0ksSUFBQSxDQUFLQyxXQUFXO0lBRWhELElBQUlGLFNBQUEsRUFBVztNQUViLE1BQU1HLFVBQUEsR0FBYUgsU0FBQSxDQUFVUCxLQUFBLENBQU1FLFFBQUE7TUFFbkMsTUFB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SUFBVyxHQUFHOEI7RUFBYztBQUMxQztBQU9BLFNBQVNYLGNBQWNzQixPQUFBLEVBQTZCO0VBRWxELElBQUlDLE1BQUEsR0FBU0MsTUFBQSxDQUFPQyx3QkFBQSxDQUF5QkgsT0FBQSxDQUFRNUMsS0FBQSxFQUFPLEtBQUssR0FBR2dELEdBQUE7RUFDcEUsSUFBSUMsT0FBQSxHQUFVSixNQUFBLElBQVUsb0JBQW9CQSxNQUFBLElBQVVBLE1BQUEsQ0FBT0ssY0FBQTtFQUM3RCxJQUFJRCxPQUFBLEVBQVM7SUFDWCxPQUFRTCxPQUFBLENBQWdCMUIsR0FBQTtFQUMxQjtFQUdBMkIsTUFBQSxHQUFTQyxNQUFBLENBQU9DLHdCQUFBLENBQXlCSCxPQUFBLEVBQVMsS0FBSyxHQUFHSSxHQUFBO0VBQzFEQyxPQUFBLEdBQVVKLE1BQUEsSUFBVSxvQkFBb0JBLE1BQUEsSUFBVUEsTUFBQSxDQUFPSyxjQUFBO0VBQ3pELElBQUlELE9BQUEsRUFBUztJQUNYLE9BQVFMLE9BQUEsQ0FBUTVDLEtBQUEsQ0FBdUNrQixHQUFBO0VBQ3pEO0VBR0EsT0FBUTBCLE9BQUEsQ0FBUTVDLEtBQUEsQ0FBdUNrQixHQUFBLElBQVEwQixPQUFBLENBQWdCMUIsR0FBQTtBQUNqRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9