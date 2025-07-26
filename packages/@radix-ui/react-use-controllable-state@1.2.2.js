System.register(["react@18.3.1","@radix-ui/react-use-layout-effect@1.1.1","@radix-ui/react-use-effect-event@0.0.2"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-use-effect-event","0.0.2"],["@radix-ui/react-use-controllable-state","1.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep), dep => dependencies.set('@radix-ui/react-use-effect-event@0.0.2', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-use-controllable-state.1.2.2.js
var react_use_controllable_state_1_2_2_exports = {};
__export(react_use_controllable_state_1_2_2_exports, {
  useControllableState: () => useControllableState,
  useControllableStateReducer: () => useControllableStateReducer
});
module.exports = __toCommonJS(react_use_controllable_state_1_2_2_exports);

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var React2 = __toESM(require("react@18.3.1"), 0);
var import_react_use_effect_event = require("@radix-ui/react-use-effect-event@0.0.2");
var useInsertionEffect = React[" useInsertionEffect ".trim().toString()] || import_react_use_layout_effect.useLayoutEffect;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {},
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React.useRef(prop !== void 0);
    React.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React.useCallback(nextValue => {
    if (isControlled) {
      const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
      if (value2 !== prop) {
        onChangeRef.current?.(value2);
      }
    } else {
      setUncontrolledProp(nextValue);
    }
  }, [isControlled, prop, setUncontrolledProp, onChangeRef]);
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React.useState(defaultProp);
  const prevValueRef = React.useRef(value);
  const onChangeRef = React.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
  const {
    prop: controlledState,
    defaultProp,
    onChange: onChangeProp,
    caller
  } = userArgs;
  const isControlled = controlledState !== void 0;
  const onChange = (0, import_react_use_effect_event.useEffectEvent)(onChangeProp);
  if (true) {
    const isControlledRef = React2.useRef(controlledState !== void 0);
    React2.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const args = [{
    ...initialArg,
    state: defaultProp
  }];
  if (init) {
    args.push(init);
  }
  const [internalState, dispatch] = React2.useReducer((state2, action) => {
    if (action.type === SYNC_STATE) {
      return {
        ...state2,
        state: action.state
      };
    }
    const next = reducer(state2, action);
    if (isControlled && !Object.is(next.state, state2.state)) {
      onChange(next.state);
    }
    return next;
  }, ...args);
  const uncontrolledState = internalState.state;
  const prevValueRef = React2.useRef(uncontrolledState);
  React2.useEffect(() => {
    if (prevValueRef.current !== uncontrolledState) {
      prevValueRef.current = uncontrolledState;
      if (!isControlled) {
        onChange(uncontrolledState);
      }
    }
  }, [onChange, uncontrolledState, prevValueRef, isControlled]);
  const state = React2.useMemo(() => {
    const isControlled2 = controlledState !== void 0;
    if (isControlled2) {
      return {
        ...internalState,
        state: controlledState
      };
    }
    return internalState;
  }, [internalState, controlledState]);
  React2.useEffect(() => {
    if (isControlled && !Object.is(controlledState, internalState.state)) {
      dispatch({
        type: SYNC_STATE,
        state: controlledState
      });
    }
  }, [controlledState, internalState.state, isControlled]);
  return [state, dispatch];
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC11c2UtY29udHJvbGxhYmxlLXN0YXRlLjEuMi4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC11c2UtY29udHJvbGxhYmxlLXN0YXRlL3NyYy91c2UtY29udHJvbGxhYmxlLXN0YXRlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS9zcmMvdXNlLWNvbnRyb2xsYWJsZS1zdGF0ZS1yZWR1Y2VyLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF91c2VfY29udHJvbGxhYmxlX3N0YXRlXzFfMl8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsInVzZUNvbnRyb2xsYWJsZVN0YXRlIiwidXNlQ29udHJvbGxhYmxlU3RhdGVSZWR1Y2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfcmVhY3RfdXNlX2xheW91dF9lZmZlY3QiLCJSZWFjdDIiLCJpbXBvcnRfcmVhY3RfdXNlX2VmZmVjdF9ldmVudCIsInVzZUluc2VydGlvbkVmZmVjdCIsInRyaW0iLCJ0b1N0cmluZyIsInVzZUxheW91dEVmZmVjdCIsInByb3AiLCJkZWZhdWx0UHJvcCIsIm9uQ2hhbmdlIiwiY2FsbGVyIiwidW5jb250cm9sbGVkUHJvcCIsInNldFVuY29udHJvbGxlZFByb3AiLCJvbkNoYW5nZVJlZiIsInVzZVVuY29udHJvbGxlZFN0YXRlIiwiaXNDb250cm9sbGVkIiwidmFsdWUiLCJpc0NvbnRyb2xsZWRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3YXNDb250cm9sbGVkIiwiY3VycmVudCIsImZyb20iLCJ0byIsImNvbnNvbGUiLCJ3YXJuIiwic2V0VmFsdWUiLCJ1c2VDYWxsYmFjayIsIm5leHRWYWx1ZSIsInZhbHVlMiIsImlzRnVuY3Rpb24iLCJ1c2VTdGF0ZSIsInByZXZWYWx1ZVJlZiIsIlNZTkNfU1RBVEUiLCJTeW1ib2wiLCJyZWR1Y2VyIiwidXNlckFyZ3MiLCJpbml0aWFsQXJnIiwiaW5pdCIsImNvbnRyb2xsZWRTdGF0ZSIsIm9uQ2hhbmdlUHJvcCIsInVzZUVmZmVjdEV2ZW50IiwiYXJncyIsInN0YXRlIiwicHVzaCIsImludGVybmFsU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJzdGF0ZTIiLCJhY3Rpb24iLCJ0eXBlIiwibmV4dCIsIk9iamVjdCIsImlzIiwidW5jb250cm9sbGVkU3RhdGUiLCJ1c2VNZW1vIiwiaXNDb250cm9sbGVkMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsMENBQUE7QUFBQUMsUUFBQSxDQUFBRCwwQ0FBQTtFQUFBRSxvQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG9CQUFBO0VBQUFDLDJCQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTiwwQ0FBQTs7O0FDQUEsSUFBQU8sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBQ3ZCLElBQUFDLDhCQUFBLEdBQWdDRCxPQUFBO0FDRGhDLElBQUFFLE1BQUEsR0FBdUJILE9BQUEsQ0FBQUMsT0FBQTtBQUN2QixJQUFBRyw2QkFBQSxHQUErQkgsT0FBQTtBREcvQixJQUFNSSxrQkFBQSxHQUNITixLQUFBLENBQWMsdUJBQXVCTyxJQUFBLENBQUssRUFBRUMsUUFBQSxDQUFTLE1BQU1MLDhCQUFBLENBQUFNLGVBQUE7QUFZdkQsU0FBU2QscUJBQXdCO0VBQ3RDZSxJQUFBO0VBQ0FDLFdBQUE7RUFDQUMsUUFBQSxHQUFXQSxDQUFBLEtBQU0sQ0FBQztFQUNsQkM7QUFDRixHQUFzRDtFQUNwRCxNQUFNLENBQUNDLGdCQUFBLEVBQWtCQyxtQkFBQSxFQUFxQkMsV0FBVyxJQUFJQyxvQkFBQSxDQUFxQjtJQUNoRk4sV0FBQTtJQUNBQztFQUNGLENBQUM7RUFDRCxNQUFNTSxZQUFBLEdBQWVSLElBQUEsS0FBUztFQUM5QixNQUFNUyxLQUFBLEdBQVFELFlBQUEsR0FBZVIsSUFBQSxHQUFPSSxnQkFBQTtFQU1wQyxJQUFJLE1BQXVDO0lBQ3pDLE1BQU1NLGVBQUEsR0FBd0JwQixLQUFBLENBQUFxQixNQUFBLENBQU9YLElBQUEsS0FBUyxNQUFTO0lBQ2pEVixLQUFBLENBQUFzQixTQUFBLENBQVUsTUFBTTtNQUNwQixNQUFNQyxhQUFBLEdBQWdCSCxlQUFBLENBQWdCSSxPQUFBO01BQ3RDLElBQUlELGFBQUEsS0FBa0JMLFlBQUEsRUFBYztRQUNsQyxNQUFNTyxJQUFBLEdBQU9GLGFBQUEsR0FBZ0IsZUFBZTtRQUM1QyxNQUFNRyxFQUFBLEdBQUtSLFlBQUEsR0FBZSxlQUFlO1FBQ3pDUyxPQUFBLENBQVFDLElBQUEsQ0FDTixHQUFHZixNQUFBLHFCQUEyQlksSUFBQSxPQUFXQyxFQUFBLDRLQUMzQztNQUNGO01BQ0FOLGVBQUEsQ0FBZ0JJLE9BQUEsR0FBVU4sWUFBQTtJQUM1QixHQUFHLENBQUNBLFlBQUEsRUFBY0wsTUFBTSxDQUFDO0VBQzNCO0VBR0EsTUFBTWdCLFFBQUEsR0FBaUI3QixLQUFBLENBQUE4QixXQUFBLENBQ3BCQyxTQUFBLElBQWM7SUFDYixJQUFJYixZQUFBLEVBQWM7TUFDaEIsTUFBTWMsTUFBQSxHQUFRQyxVQUFBLENBQVdGLFNBQVMsSUFBSUEsU0FBQSxDQUFVckIsSUFBSSxJQUFJcUIsU0FBQTtNQUN4RCxJQUFJQyxNQUFBLEtBQVV0QixJQUFBLEVBQU07UUFDbEJNLFdBQUEsQ0FBWVEsT0FBQSxHQUFVUSxNQUFLO01BQzdCO0lBQ0YsT0FBTztNQUNMakIsbUJBQUEsQ0FBb0JnQixTQUFTO0lBQy9CO0VBQ0YsR0FDQSxDQUFDYixZQUFBLEVBQWNSLElBQUEsRUFBTUssbUJBQUEsRUFBcUJDLFdBQVcsQ0FDdkQ7RUFFQSxPQUFPLENBQUNHLEtBQUEsRUFBT1UsUUFBUTtBQUN6QjtBQUVBLFNBQVNaLHFCQUF3QjtFQUMvQk4sV0FBQTtFQUNBQztBQUNGLEdBSUU7RUFDQSxNQUFNLENBQUNPLEtBQUEsRUFBT1UsUUFBUSxJQUFVN0IsS0FBQSxDQUFBa0MsUUFBQSxDQUFTdkIsV0FBVztFQUNwRCxNQUFNd0IsWUFBQSxHQUFxQm5DLEtBQUEsQ0FBQXFCLE1BQUEsQ0FBT0YsS0FBSztFQUV2QyxNQUFNSCxXQUFBLEdBQW9CaEIsS0FBQSxDQUFBcUIsTUFBQSxDQUFPVCxRQUFRO0VBQ3pDTixrQkFBQSxDQUFtQixNQUFNO0lBQ3ZCVSxXQUFBLENBQVlRLE9BQUEsR0FBVVosUUFBQTtFQUN4QixHQUFHLENBQUNBLFFBQVEsQ0FBQztFQUVQWixLQUFBLENBQUFzQixTQUFBLENBQVUsTUFBTTtJQUNwQixJQUFJYSxZQUFBLENBQWFYLE9BQUEsS0FBWUwsS0FBQSxFQUFPO01BQ2xDSCxXQUFBLENBQVlRLE9BQUEsR0FBVUwsS0FBSztNQUMzQmdCLFlBQUEsQ0FBYVgsT0FBQSxHQUFVTCxLQUFBO0lBQ3pCO0VBQ0YsR0FBRyxDQUFDQSxLQUFBLEVBQU9nQixZQUFZLENBQUM7RUFFeEIsT0FBTyxDQUFDaEIsS0FBQSxFQUFPVSxRQUFBLEVBQVViLFdBQVc7QUFDdEM7QUFFQSxTQUFTaUIsV0FBV2QsS0FBQSxFQUFrRDtFQUNwRSxPQUFPLE9BQU9BLEtBQUEsS0FBVTtBQUMxQjtBQy9FQSxJQUFNaUIsVUFBQSxHQUFhQyxNQUFBLENBQU8sa0JBQWtCO0FBb0JyQyxTQUFTekMsNEJBQ2QwQyxPQUFBLEVBQ0FDLFFBQUEsRUFDQUMsVUFBQSxFQUNBQyxJQUFBLEVBQ3VDO0VBQ3ZDLE1BQU07SUFBRS9CLElBQUEsRUFBTWdDLGVBQUE7SUFBaUIvQixXQUFBO0lBQWFDLFFBQUEsRUFBVStCLFlBQUE7SUFBYzlCO0VBQU8sSUFBSTBCLFFBQUE7RUFDL0UsTUFBTXJCLFlBQUEsR0FBZXdCLGVBQUEsS0FBb0I7RUFFekMsTUFBTTlCLFFBQUEsT0FBV1AsNkJBQUEsQ0FBQXVDLGNBQUEsRUFBZUQsWUFBWTtFQU01QyxJQUFJLE1BQXVDO0lBQ3pDLE1BQU12QixlQUFBLEdBQXdCaEIsTUFBQSxDQUFBaUIsTUFBQSxDQUFPcUIsZUFBQSxLQUFvQixNQUFTO0lBQzVEdEMsTUFBQSxDQUFBa0IsU0FBQSxDQUFVLE1BQU07TUFDcEIsTUFBTUMsYUFBQSxHQUFnQkgsZUFBQSxDQUFnQkksT0FBQTtNQUN0QyxJQUFJRCxhQUFBLEtBQWtCTCxZQUFBLEVBQWM7UUFDbEMsTUFBTU8sSUFBQSxHQUFPRixhQUFBLEdBQWdCLGVBQWU7UUFDNUMsTUFBTUcsRUFBQSxHQUFLUixZQUFBLEdBQWUsZUFBZTtRQUN6Q1MsT0FBQSxDQUFRQyxJQUFBLENBQ04sR0FBR2YsTUFBQSxxQkFBMkJZLElBQUEsT0FBV0MsRUFBQSw0S0FDM0M7TUFDRjtNQUNBTixlQUFBLENBQWdCSSxPQUFBLEdBQVVOLFlBQUE7SUFDNUIsR0FBRyxDQUFDQSxZQUFBLEVBQWNMLE1BQU0sQ0FBQztFQUMzQjtFQUlBLE1BQU1nQyxJQUFBLEdBQXdCLENBQUM7SUFBRSxHQUFHTCxVQUFBO0lBQVlNLEtBQUEsRUFBT25DO0VBQVksQ0FBQztFQUNwRSxJQUFJOEIsSUFBQSxFQUFNO0lBRVJJLElBQUEsQ0FBS0UsSUFBQSxDQUFLTixJQUFJO0VBQ2hCO0VBRUEsTUFBTSxDQUFDTyxhQUFBLEVBQWVDLFFBQVEsSUFBVTdDLE1BQUEsQ0FBQThDLFVBQUEsQ0FDdEMsQ0FBQ0MsTUFBQSxFQUFzQkMsTUFBQSxLQUFrRDtJQUN2RSxJQUFJQSxNQUFBLENBQU9DLElBQUEsS0FBU2pCLFVBQUEsRUFBWTtNQUM5QixPQUFPO1FBQUUsR0FBR2UsTUFBQTtRQUFPTCxLQUFBLEVBQU9NLE1BQUEsQ0FBT047TUFBTTtJQUN6QztJQUVBLE1BQU1RLElBQUEsR0FBT2hCLE9BQUEsQ0FBUWEsTUFBQSxFQUFPQyxNQUFNO0lBQ2xDLElBQUlsQyxZQUFBLElBQWdCLENBQUNxQyxNQUFBLENBQU9DLEVBQUEsQ0FBR0YsSUFBQSxDQUFLUixLQUFBLEVBQU9LLE1BQUEsQ0FBTUwsS0FBSyxHQUFHO01BQ3ZEbEMsUUFBQSxDQUFTMEMsSUFBQSxDQUFLUixLQUFLO0lBQ3JCO0lBQ0EsT0FBT1EsSUFBQTtFQUNULEdBQ0EsR0FBR1QsSUFDTDtFQUVBLE1BQU1ZLGlCQUFBLEdBQW9CVCxhQUFBLENBQWNGLEtBQUE7RUFDeEMsTUFBTVgsWUFBQSxHQUFxQi9CLE1BQUEsQ0FBQWlCLE1BQUEsQ0FBT29DLGlCQUFpQjtFQUM3Q3JELE1BQUEsQ0FBQWtCLFNBQUEsQ0FBVSxNQUFNO0lBQ3BCLElBQUlhLFlBQUEsQ0FBYVgsT0FBQSxLQUFZaUMsaUJBQUEsRUFBbUI7TUFDOUN0QixZQUFBLENBQWFYLE9BQUEsR0FBVWlDLGlCQUFBO01BQ3ZCLElBQUksQ0FBQ3ZDLFlBQUEsRUFBYztRQUNqQk4sUUFBQSxDQUFTNkMsaUJBQWlCO01BQzVCO0lBQ0Y7RUFDRixHQUFHLENBQUM3QyxRQUFBLEVBQVU2QyxpQkFBQSxFQUFtQnRCLFlBQUEsRUFBY2pCLFlBQVksQ0FBQztFQUU1RCxNQUFNNEIsS0FBQSxHQUFjMUMsTUFBQSxDQUFBc0QsT0FBQSxDQUFRLE1BQU07SUFDaEMsTUFBTUMsYUFBQSxHQUFlakIsZUFBQSxLQUFvQjtJQUN6QyxJQUFJaUIsYUFBQSxFQUFjO01BQ2hCLE9BQU87UUFBRSxHQUFHWCxhQUFBO1FBQWVGLEtBQUEsRUFBT0o7TUFBZ0I7SUFDcEQ7SUFFQSxPQUFPTSxhQUFBO0VBQ1QsR0FBRyxDQUFDQSxhQUFBLEVBQWVOLGVBQWUsQ0FBQztFQUU3QnRDLE1BQUEsQ0FBQWtCLFNBQUEsQ0FBVSxNQUFNO0lBR3BCLElBQUlKLFlBQUEsSUFBZ0IsQ0FBQ3FDLE1BQUEsQ0FBT0MsRUFBQSxDQUFHZCxlQUFBLEVBQWlCTSxhQUFBLENBQWNGLEtBQUssR0FBRztNQUNwRUcsUUFBQSxDQUFTO1FBQUVJLElBQUEsRUFBTWpCLFVBQUE7UUFBWVUsS0FBQSxFQUFPSjtNQUFnQixDQUFDO0lBQ3ZEO0VBQ0YsR0FBRyxDQUFDQSxlQUFBLEVBQWlCTSxhQUFBLENBQWNGLEtBQUEsRUFBTzVCLFlBQVksQ0FBQztFQUV2RCxPQUFPLENBQUM0QixLQUFBLEVBQU9HLFFBQTZCO0FBQzlDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=