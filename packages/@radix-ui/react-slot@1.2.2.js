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

// .beyond/uimport/@radix-ui/react-slot.1.2.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3Qtc2xvdC4xLjIuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3Qtc2xvdC9zcmMvc2xvdC50c3giXSwibmFtZXMiOlsicmVhY3Rfc2xvdF8xXzJfMl9leHBvcnRzIiwiX19leHBvcnQiLCJSb290IiwiU2xvdCIsIlNsb3R0YWJsZSIsImNyZWF0ZVNsb3QiLCJjcmVhdGVTbG90dGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9yZWFjdF9jb21wb3NlX3JlZnMiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJvd25lck5hbWUiLCJTbG90Q2xvbmUiLCJjcmVhdGVTbG90Q2xvbmUiLCJTbG90MiIsImZvcndhcmRSZWYiLCJwcm9wcyIsImZvcndhcmRlZFJlZiIsImNoaWxkcmVuIiwic2xvdFByb3BzIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInNsb3R0YWJsZSIsImZpbmQiLCJpc1Nsb3R0YWJsZSIsIm5ld0VsZW1lbnQiLCJuZXdDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiY291bnQiLCJvbmx5IiwiaXNWYWxpZEVsZW1lbnQiLCJqc3giLCJyZWYiLCJjbG9uZUVsZW1lbnQiLCJkaXNwbGF5TmFtZSIsImNoaWxkcmVuUmVmIiwiZ2V0RWxlbWVudFJlZiIsInVzZUNvbXBvc2VkUmVmcyIsInByb3BzMiIsIm1lcmdlUHJvcHMiLCJ0eXBlIiwiRnJhZ21lbnQiLCJTTE9UVEFCTEVfSURFTlRJRklFUiIsIlN5bWJvbCIsIlNsb3R0YWJsZTIiLCJfX3JhZGl4SWQiLCJjaGlsZFByb3BzIiwib3ZlcnJpZGVQcm9wcyIsInByb3BOYW1lIiwic2xvdFByb3BWYWx1ZSIsImNoaWxkUHJvcFZhbHVlIiwiaXNIYW5kbGVyIiwidGVzdCIsImFyZ3MiLCJyZXN1bHQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImVsZW1lbnQiLCJnZXR0ZXIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXQiLCJtYXlXYXJuIiwiaXNSZWFjdFdhcm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHdCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsd0JBQUE7RUFBQUUsSUFBQSxFQUFBQSxDQUFBLEtBQUFDLElBQUE7RUFBQUEsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsd0JBQUE7OztBQ0FBLElBQUFVLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBQyx5QkFBQSxHQUFnQ0QsT0FBQTtBQW1DeEIsSUFBQUUsa0JBQUEsR0FBQUYsT0FBQTs7QUF6QjBCLFNBQVNQLFdBQVdVLFNBQUEsRUFBbUI7RUFDdkUsTUFBTUMsU0FBQSxHQUFZLGVBQUFDLGVBQUEsQ0FBZ0JGLFNBQVM7RUFDM0MsTUFBTUcsS0FBQSxHQUFhUixLQUFBLENBQUFTLFVBQUEsQ0FBbUMsQ0FBQ0MsS0FBQSxFQUFPQyxZQUFBLEtBQWlCO0lBQzdFLE1BQU07TUFBRUMsUUFBQTtNQUFBLEdBQWFDO0lBQVUsSUFBSUgsS0FBQTtJQUNuQyxNQUFNSSxhQUFBLEdBQXNCZCxLQUFBLENBQUFlLFFBQUEsQ0FBU0MsT0FBQSxDQUFRSixRQUFRO0lBQ3JELE1BQU1LLFNBQUEsR0FBWUgsYUFBQSxDQUFjSSxJQUFBLENBQUtDLFdBQVc7SUFFaEQsSUFBSUYsU0FBQSxFQUFXO01BRWIsTUFBTUcsVUFBQSxHQUFhSCxTQUFBLENBQVVQLEtBQUEsQ0FBTUUsUUFBQTtNQUVuQyxNQUFNUyxXQUFBLEdBQWNQLGFBQUEsQ0FBY1EsR0FBQSxDQUFLQyxLQUFBLElBQVU7UUFDL0MsSUFBSUEsS0FBQSxLQUFVTixTQUFBLEVBQVc7VUFHdkIsSUFBVWpCLEtBQUEsQ0FBQWUsUUFBQSxDQUFTUyxLQUFBLENBQU1KLFVBQVUsSUFBSSxHQUFHLE9BQWFwQixLQUFBLENBQUFlLFFBQUEsQ0FBU1UsSUFBQSxDQUFLLElBQUk7VUFDekUsT0FBYXpCLEtBQUEsQ0FBQTBCLGNBQUEsQ0FBZU4sVUFBVSxJQUNqQ0EsVUFBQSxDQUFXVixLQUFBLENBQXdDRSxRQUFBLEdBQ3BEO1FBQ04sT0FBTztVQUNMLE9BQU9XLEtBQUE7UUFDVDtNQUNGLENBQUM7TUFFRCxPQUNFLG1CQUFBbkIsa0JBQUEsQ0FBQXVCLEdBQUEsRUFBQ3JCLFNBQUE7UUFBVyxHQUFHTyxTQUFBO1FBQVdlLEdBQUEsRUFBS2pCLFlBQUE7UUFDNUJDLFFBQUEsRUFBTVosS0FBQSxDQUFBMEIsY0FBQSxDQUFlTixVQUFVLElBQ3RCcEIsS0FBQSxDQUFBNkIsWUFBQSxDQUFhVCxVQUFBLEVBQVksUUFBV0MsV0FBVyxJQUNyRDtNQUFBLENBQ047SUFFSjtJQUVBLE9BQ0UsbUJBQUFqQixrQkFBQSxDQUFBdUIsR0FBQSxFQUFDckIsU0FBQTtNQUFXLEdBQUdPLFNBQUE7TUFBV2UsR0FBQSxFQUFLakIsWUFBQTtNQUM1QkM7SUFBQSxDQUNIO0VBRUosQ0FBQztFQUVESixLQUFBLENBQUtzQixXQUFBLEdBQWMsR0FBR3pCLFNBQUE7RUFDdEIsT0FBT0csS0FBQTtBQUNUO0FBRUEsSUFBTWYsSUFBQSxHQUFPLGVBQUFFLFVBQUEsQ0FBVyxNQUFNO0FBVUgsU0FBU1ksZ0JBQWdCRixTQUFBLEVBQW1CO0VBQ3JFLE1BQU1DLFNBQUEsR0FBa0JOLEtBQUEsQ0FBQVMsVUFBQSxDQUFnQyxDQUFDQyxLQUFBLEVBQU9DLFlBQUEsS0FBaUI7SUFDL0UsTUFBTTtNQUFFQyxRQUFBO01BQUEsR0FBYUM7SUFBVSxJQUFJSCxLQUFBO0lBQ25DLE1BQU1xQixXQUFBLEdBQW9CL0IsS0FBQSxDQUFBMEIsY0FBQSxDQUFlZCxRQUFRLElBQUlvQixhQUFBLENBQWNwQixRQUFRLElBQUk7SUFDL0UsTUFBTWdCLEdBQUEsT0FBTXpCLHlCQUFBLENBQUE4QixlQUFBLEVBQWdCRixXQUFBLEVBQWFwQixZQUFZO0lBRXJELElBQVVYLEtBQUEsQ0FBQTBCLGNBQUEsQ0FBZWQsUUFBUSxHQUFHO01BQ2xDLE1BQU1zQixNQUFBLEdBQVFDLFVBQUEsQ0FBV3RCLFNBQUEsRUFBV0QsUUFBQSxDQUFTRixLQUFpQjtNQUU5RCxJQUFJRSxRQUFBLENBQVN3QixJQUFBLEtBQWVwQyxLQUFBLENBQUFxQyxRQUFBLEVBQVU7UUFDcENILE1BQUEsQ0FBTU4sR0FBQSxHQUFNQSxHQUFBO01BQ2Q7TUFDQSxPQUFhNUIsS0FBQSxDQUFBNkIsWUFBQSxDQUFhakIsUUFBQSxFQUFVc0IsTUFBSztJQUMzQztJQUVBLE9BQWFsQyxLQUFBLENBQUFlLFFBQUEsQ0FBU1MsS0FBQSxDQUFNWixRQUFRLElBQUksSUFBVVosS0FBQSxDQUFBZSxRQUFBLENBQVNVLElBQUEsQ0FBSyxJQUFJLElBQUk7RUFDMUUsQ0FBQztFQUVEbkIsU0FBQSxDQUFVd0IsV0FBQSxHQUFjLEdBQUd6QixTQUFBO0VBQzNCLE9BQU9DLFNBQUE7QUFDVDtBQU1BLElBQU1nQyxvQkFBQSxHQUF1QkMsTUFBQSxDQUFPLGlCQUFpQjtBQVVuQixTQUFTM0MsZ0JBQWdCUyxTQUFBLEVBQW1CO0VBQzVFLE1BQU1tQyxVQUFBLEdBQWdDOUMsQ0FBQztJQUFFa0I7RUFBUyxNQUFNO0lBQ3RELE9BQU8sbUJBQUFSLGtCQUFBLENBQUF1QixHQUFBLEVBQUF2QixrQkFBQSxDQUFBaUMsUUFBQTtNQUFHekI7SUFBQSxDQUFTO0VBQ3JCO0VBQ0E0QixVQUFBLENBQVVWLFdBQUEsR0FBYyxHQUFHekIsU0FBQTtFQUMzQm1DLFVBQUEsQ0FBVUMsU0FBQSxHQUFZSCxvQkFBQTtFQUN0QixPQUFPRSxVQUFBO0FBQ1Q7QUFFQSxJQUFNOUMsU0FBQSxHQUFZLGVBQUFFLGVBQUEsQ0FBZ0IsV0FBVztBQU03QyxTQUFTdUIsWUFDUEksS0FBQSxFQUMrRDtFQUMvRCxPQUNRdkIsS0FBQSxDQUFBMEIsY0FBQSxDQUFlSCxLQUFLLEtBQzFCLE9BQU9BLEtBQUEsQ0FBTWEsSUFBQSxLQUFTLGNBQ3RCLGVBQWViLEtBQUEsQ0FBTWEsSUFBQSxJQUNyQmIsS0FBQSxDQUFNYSxJQUFBLENBQUtLLFNBQUEsS0FBY0gsb0JBQUE7QUFFN0I7QUFFQSxTQUFTSCxXQUFXdEIsU0FBQSxFQUFxQjZCLFVBQUEsRUFBc0I7RUFFN0QsTUFBTUMsYUFBQSxHQUFnQjtJQUFFLEdBQUdEO0VBQVc7RUFFdEMsV0FBV0UsUUFBQSxJQUFZRixVQUFBLEVBQVk7SUFDakMsTUFBTUcsYUFBQSxHQUFnQmhDLFNBQUEsQ0FBVStCLFFBQUE7SUFDaEMsTUFBTUUsY0FBQSxHQUFpQkosVUFBQSxDQUFXRSxRQUFBO0lBRWxDLE1BQU1HLFNBQUEsR0FBWSxXQUFXQyxJQUFBLENBQUtKLFFBQVE7SUFDMUMsSUFBSUcsU0FBQSxFQUFXO01BRWIsSUFBSUYsYUFBQSxJQUFpQkMsY0FBQSxFQUFnQjtRQUNuQ0gsYUFBQSxDQUFjQyxRQUFBLElBQVksSUFBSUssSUFBQSxLQUFvQjtVQUNoRCxNQUFNQyxNQUFBLEdBQVNKLGNBQUEsQ0FBZSxHQUFHRyxJQUFJO1VBQ3JDSixhQUFBLENBQWMsR0FBR0ksSUFBSTtVQUNyQixPQUFPQyxNQUFBO1FBQ1Q7TUFDRixXQUVTTCxhQUFBLEVBQWU7UUFDdEJGLGFBQUEsQ0FBY0MsUUFBQSxJQUFZQyxhQUFBO01BQzVCO0lBQ0YsV0FFU0QsUUFBQSxLQUFhLFNBQVM7TUFDN0JELGFBQUEsQ0FBY0MsUUFBQSxJQUFZO1FBQUUsR0FBR0MsYUFBQTtRQUFlLEdBQUdDO01BQWU7SUFDbEUsV0FBV0YsUUFBQSxLQUFhLGFBQWE7TUFDbkNELGFBQUEsQ0FBY0MsUUFBQSxJQUFZLENBQUNDLGFBQUEsRUFBZUMsY0FBYyxFQUFFSyxNQUFBLENBQU9DLE9BQU8sRUFBRUMsSUFBQSxDQUFLLEdBQUc7SUFDcEY7RUFDRjtFQUVBLE9BQU87SUFBRSxHQUFHeEMsU0FBQTtJQUFXLEdBQUc4QjtFQUFjO0FBQzFDO0FBT0EsU0FBU1gsY0FBY3NCLE9BQUEsRUFBNkI7RUFFbEQsSUFBSUMsTUFBQSxHQUFTQyxNQUFBLENBQU9DLHdCQUFBLENBQXlCSCxPQUFBLENBQVE1QyxLQUFBLEVBQU8sS0FBSyxHQUFHZ0QsR0FBQTtFQUNwRSxJQUFJQyxPQUFBLEdBQVVKLE1BQUEsSUFBVSxvQkFBb0JBLE1BQUEsSUFBVUEsTUFBQSxDQUFPSyxjQUFBO0VBQzdELElBQUlELE9BQUEsRUFBUztJQUNYLE9BQVFMLE9BQUEsQ0FBZ0IxQixHQUFBO0VBQzFCO0VBR0EyQixNQUFBLEdBQVNDLE1BQUEsQ0FBT0Msd0JBQUEsQ0FBeUJILE9BQUEsRUFBUyxLQUFLLEdBQUdJLEdBQUE7RUFDMURDLE9BQUEsR0FBVUosTUFBQSxJQUFVLG9CQUFvQkEsTUFBQSxJQUFVQSxNQUFBLENBQU9LLGNBQUE7RUFDekQsSUFBSUQsT0FBQSxFQUFTO0lBQ1gsT0FBUUwsT0FBQSxDQUFRNUMsS0FBQSxDQUF1Q2tCLEdBQUE7RUFDekQ7RUFHQSxPQUFRMEIsT0FBQSxDQUFRNUMsS0FBQSxDQUF1Q2tCLEdBQUEsSUFBUTBCLE9BQUEsQ0FBZ0IxQixHQUFBO0FBQ2pGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==