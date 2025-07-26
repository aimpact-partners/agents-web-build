System.register(["react@18.3.1","scheduler@0.23.2","react-dom@18.3.1","@radix-ui/number@1.1.1","@radix-ui/primitive@1.1.2","react@18.3.1/jsx-runtime","@radix-ui/react-context@1.1.2","@radix-ui/react-compose-refs@1.1.2","@radix-ui/react-slot@1.2.2","@radix-ui/react-collection@1.1.6","@radix-ui/react-direction@1.1.1","@radix-ui/react-primitive@2.1.2","@radix-ui/react-use-callback-ref@1.1.1","@radix-ui/react-use-escape-keydown@1.1.1","@radix-ui/react-dismissable-layer@1.1.9","@radix-ui/react-focus-guards@1.1.2","@radix-ui/react-focus-scope@1.1.6","@radix-ui/react-use-layout-effect@1.1.1","@radix-ui/react-id@1.1.1","@floating-ui/utils@0.2.9","@floating-ui/core@1.6.9","@floating-ui/utils@0.2.9/dom","@floating-ui/dom@1.6.13","@floating-ui/react-dom@2.1.2","@radix-ui/react-arrow@1.1.6","@radix-ui/react-use-size@1.1.1","@radix-ui/react-popper@1.2.6","@radix-ui/react-portal@1.1.8","@radix-ui/react-use-effect-event@0.0.2","@radix-ui/react-use-controllable-state@1.2.2","@radix-ui/react-use-previous@1.1.1","@radix-ui/react-visually-hidden@1.2.2","aria-hidden@1.2.6","tslib@2.8.1","use-callback-ref@1.3.3","detect-node-es@1.1.0","use-sidecar@1.1.3","get-nonce@1.0.1","react-style-singleton@2.2.3","react-remove-scroll-bar@2.3.8","react-remove-scroll@2.7.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["scheduler","0.23.2"],["react-dom","18.3.1"],["@radix-ui/number","1.1.1"],["@radix-ui/primitive","1.1.2"],["@radix-ui/react-context","1.1.2"],["@radix-ui/react-compose-refs","1.1.2"],["@radix-ui/react-slot","1.2.2"],["@radix-ui/react-collection","1.1.6"],["@radix-ui/react-direction","1.1.1"],["@radix-ui/react-primitive","2.1.2"],["@radix-ui/react-use-callback-ref","1.1.1"],["@radix-ui/react-use-escape-keydown","1.1.1"],["@radix-ui/react-dismissable-layer","1.1.9"],["@radix-ui/react-focus-guards","1.1.2"],["@radix-ui/react-focus-scope","1.1.6"],["@radix-ui/react-use-layout-effect","1.1.1"],["@radix-ui/react-id","1.1.1"],["@floating-ui/utils","0.2.9"],["@floating-ui/core","1.6.9"],["@floating-ui/dom","1.6.13"],["@floating-ui/react-dom","2.1.2"],["@radix-ui/react-arrow","1.1.6"],["@radix-ui/react-use-size","1.1.1"],["@radix-ui/react-popper","1.2.6"],["@radix-ui/react-portal","1.1.8"],["@radix-ui/react-use-effect-event","0.0.2"],["@radix-ui/react-use-controllable-state","1.2.2"],["@radix-ui/react-use-previous","1.1.1"],["@radix-ui/react-visually-hidden","1.2.2"],["aria-hidden","1.2.6"],["tslib","2.8.1"],["react-remove-scroll-bar","2.3.8"],["use-callback-ref","1.3.3"],["detect-node-es","1.1.0"],["use-sidecar","1.1.3"],["react-remove-scroll","2.7.0"],["get-nonce","1.0.1"],["react-style-singleton","2.2.3"],["@radix-ui/react-select","2.2.4"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('scheduler@0.23.2', dep), dep => dependencies.set('react-dom@18.3.1', dep), dep => dependencies.set('@radix-ui/number@1.1.1', dep), dep => dependencies.set('@radix-ui/primitive@1.1.2', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep), dep => dependencies.set('@radix-ui/react-context@1.1.2', dep), dep => dependencies.set('@radix-ui/react-compose-refs@1.1.2', dep), dep => dependencies.set('@radix-ui/react-slot@1.2.2', dep), dep => dependencies.set('@radix-ui/react-collection@1.1.6', dep), dep => dependencies.set('@radix-ui/react-direction@1.1.1', dep), dep => dependencies.set('@radix-ui/react-primitive@2.1.2', dep), dep => dependencies.set('@radix-ui/react-use-callback-ref@1.1.1', dep), dep => dependencies.set('@radix-ui/react-use-escape-keydown@1.1.1', dep), dep => dependencies.set('@radix-ui/react-dismissable-layer@1.1.9', dep), dep => dependencies.set('@radix-ui/react-focus-guards@1.1.2', dep), dep => dependencies.set('@radix-ui/react-focus-scope@1.1.6', dep), dep => dependencies.set('@radix-ui/react-use-layout-effect@1.1.1', dep), dep => dependencies.set('@radix-ui/react-id@1.1.1', dep), dep => dependencies.set('@floating-ui/utils@0.2.9', dep), dep => dependencies.set('@floating-ui/core@1.6.9', dep), dep => dependencies.set('@floating-ui/utils@0.2.9/dom', dep), dep => dependencies.set('@floating-ui/dom@1.6.13', dep), dep => dependencies.set('@floating-ui/react-dom@2.1.2', dep), dep => dependencies.set('@radix-ui/react-arrow@1.1.6', dep), dep => dependencies.set('@radix-ui/react-use-size@1.1.1', dep), dep => dependencies.set('@radix-ui/react-popper@1.2.6', dep), dep => dependencies.set('@radix-ui/react-portal@1.1.8', dep), dep => dependencies.set('@radix-ui/react-use-effect-event@0.0.2', dep), dep => dependencies.set('@radix-ui/react-use-controllable-state@1.2.2', dep), dep => dependencies.set('@radix-ui/react-use-previous@1.1.1', dep), dep => dependencies.set('@radix-ui/react-visually-hidden@1.2.2', dep), dep => dependencies.set('aria-hidden@1.2.6', dep), dep => dependencies.set('tslib@2.8.1', dep), dep => dependencies.set('use-callback-ref@1.3.3', dep), dep => dependencies.set('detect-node-es@1.1.0', dep), dep => dependencies.set('use-sidecar@1.1.3', dep), dep => dependencies.set('get-nonce@1.0.1', dep), dep => dependencies.set('react-style-singleton@2.2.3', dep), dep => dependencies.set('react-remove-scroll-bar@2.3.8', dep), dep => dependencies.set('react-remove-scroll@2.7.0', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-select.2.2.4.js
var react_select_2_2_4_exports = {};
__export(react_select_2_2_4_exports, {
  Arrow: () => Arrow2,
  Content: () => Content2,
  Group: () => Group,
  Icon: () => Icon,
  Item: () => Item,
  ItemIndicator: () => ItemIndicator,
  ItemText: () => ItemText,
  Label: () => Label,
  Portal: () => Portal,
  Root: () => Root2,
  ScrollDownButton: () => ScrollDownButton,
  ScrollUpButton: () => ScrollUpButton,
  Select: () => Select,
  SelectArrow: () => SelectArrow,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectIcon: () => SelectIcon,
  SelectItem: () => SelectItem,
  SelectItemIndicator: () => SelectItemIndicator,
  SelectItemText: () => SelectItemText,
  SelectLabel: () => SelectLabel,
  SelectPortal: () => SelectPortal,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  SelectViewport: () => SelectViewport,
  Separator: () => Separator,
  Trigger: () => Trigger,
  Value: () => Value,
  Viewport: () => Viewport,
  createSelectScope: () => createSelectScope
});
module.exports = __toCommonJS(react_select_2_2_4_exports);

// node_modules/@radix-ui/react-select/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var ReactDOM = __toESM(require("react-dom@18.3.1"), 0);
var import_number = require("@radix-ui/number@1.1.1");
var import_primitive = require("@radix-ui/primitive@1.1.2");
var import_react_collection = require("@radix-ui/react-collection@1.1.6");
var import_react_compose_refs = require("@radix-ui/react-compose-refs@1.1.2");
var import_react_context = require("@radix-ui/react-context@1.1.2");
var import_react_direction = require("@radix-ui/react-direction@1.1.1");
var import_react_dismissable_layer = require("@radix-ui/react-dismissable-layer@1.1.9");
var import_react_focus_guards = require("@radix-ui/react-focus-guards@1.1.2");
var import_react_focus_scope = require("@radix-ui/react-focus-scope@1.1.6");
var import_react_id = require("@radix-ui/react-id@1.1.1");
var PopperPrimitive = __toESM(require("@radix-ui/react-popper@1.2.6"), 0);
var import_react_popper = require("@radix-ui/react-popper@1.2.6");
var import_react_portal = require("@radix-ui/react-portal@1.1.8");
var import_react_primitive = require("@radix-ui/react-primitive@2.1.2");
var import_react_slot = require("@radix-ui/react-slot@1.2.2");
var import_react_use_callback_ref = require("@radix-ui/react-use-callback-ref@1.1.1");
var import_react_use_controllable_state = require("@radix-ui/react-use-controllable-state@1.2.2");
var import_react_use_layout_effect = require("@radix-ui/react-use-layout-effect@1.1.1");
var import_react_use_previous = require("@radix-ui/react-use-previous@1.1.1");
var import_react_visually_hidden = require("@radix-ui/react-visually-hidden@1.2.2");
var import_aria_hidden = require("aria-hidden@1.2.6");
var import_react_remove_scroll = require("react-remove-scroll@2.7.0");
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
"use client";
var OPEN_KEYS = [" ", "Enter", "ArrowUp", "ArrowDown"];
var SELECTION_KEYS = [" ", "Enter"];
var SELECT_NAME = "Select";
var [Collection, useCollection, createCollectionScope] = (0, import_react_collection.createCollection)(SELECT_NAME);
var [createSelectContext, createSelectScope] = (0, import_react_context.createContextScope)(SELECT_NAME, [createCollectionScope, import_react_popper.createPopperScope]);
var usePopperScope = (0, import_react_popper.createPopperScope)();
var [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME);
var [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME);
var Select = props => {
  const {
    __scopeSelect,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    value: valueProp,
    defaultValue,
    onValueChange,
    dir,
    name,
    autoComplete,
    disabled,
    required,
    form
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const [trigger, setTrigger] = React.useState(null);
  const [valueNode, setValueNode] = React.useState(null);
  const [valueNodeHasChildren, setValueNodeHasChildren] = React.useState(false);
  const direction = (0, import_react_direction.useDirection)(dir);
  const [open, setOpen] = (0, import_react_use_controllable_state.useControllableState)({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: onOpenChange,
    caller: SELECT_NAME
  });
  const [value, setValue] = (0, import_react_use_controllable_state.useControllableState)({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
    caller: SELECT_NAME
  });
  const triggerPointerDownPosRef = React.useRef(null);
  const isFormControl = trigger ? form || !!trigger.closest("form") : true;
  const [nativeOptionsSet, setNativeOptionsSet] = React.useState(/* @__PURE__ */new Set());
  const nativeSelectKey = Array.from(nativeOptionsSet).map(option => option.props.value).join(";");
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Root, {
    ...popperScope,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsxs)(SelectProvider, {
      required,
      scope: __scopeSelect,
      trigger,
      onTriggerChange: setTrigger,
      valueNode,
      onValueNodeChange: setValueNode,
      valueNodeHasChildren,
      onValueNodeHasChildrenChange: setValueNodeHasChildren,
      contentId: (0, import_react_id.useId)(),
      value,
      onValueChange: setValue,
      open,
      onOpenChange: setOpen,
      dir: direction,
      triggerPointerDownPosRef,
      disabled,
      children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.Provider, {
        scope: __scopeSelect,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
          scope: props.__scopeSelect,
          onNativeOptionAdd: React.useCallback(option => {
            setNativeOptionsSet(prev => new Set(prev).add(option));
          }, []),
          onNativeOptionRemove: React.useCallback(option => {
            setNativeOptionsSet(prev => {
              const optionsSet = new Set(prev);
              optionsSet.delete(option);
              return optionsSet;
            });
          }, []),
          children
        })
      }), isFormControl ? /* @__PURE__ */(0, import_jsx_runtime.jsxs)(SelectBubbleInput, {
        "aria-hidden": true,
        required,
        tabIndex: -1,
        name,
        autoComplete,
        value,
        onChange: event => setValue(event.target.value),
        disabled,
        form,
        children: [value === void 0 ? /* @__PURE__ */(0, import_jsx_runtime.jsx)("option", {
          value: ""
        }) : null, Array.from(nativeOptionsSet)]
      }, nativeSelectKey) : null]
    })
  });
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger";
var SelectTrigger = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    disabled = false,
    ...triggerProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const context = useSelectContext(TRIGGER_NAME, __scopeSelect);
  const isDisabled = context.disabled || disabled;
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, context.onTriggerChange);
  const getItems = useCollection(__scopeSelect);
  const pointerTypeRef = React.useRef("touch");
  const [searchRef, handleTypeaheadSearch, resetTypeahead] = useTypeaheadSearch(search => {
    const enabledItems = getItems().filter(item => !item.disabled);
    const currentItem = enabledItems.find(item => item.value === context.value);
    const nextItem = findNextItem(enabledItems, search, currentItem);
    if (nextItem !== void 0) {
      context.onValueChange(nextItem.value);
    }
  });
  const handleOpen = pointerEvent => {
    if (!isDisabled) {
      context.onOpenChange(true);
      resetTypeahead();
    }
    if (pointerEvent) {
      context.triggerPointerDownPosRef.current = {
        x: Math.round(pointerEvent.pageX),
        y: Math.round(pointerEvent.pageY)
      };
    }
  };
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Anchor, {
    asChild: true,
    ...popperScope,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.button, {
      type: "button",
      role: "combobox",
      "aria-controls": context.contentId,
      "aria-expanded": context.open,
      "aria-required": context.required,
      "aria-autocomplete": "none",
      dir: context.dir,
      "data-state": context.open ? "open" : "closed",
      disabled: isDisabled,
      "data-disabled": isDisabled ? "" : void 0,
      "data-placeholder": shouldShowPlaceholder(context.value) ? "" : void 0,
      ...triggerProps,
      ref: composedRefs,
      onClick: (0, import_primitive.composeEventHandlers)(triggerProps.onClick, event => {
        event.currentTarget.focus();
        if (pointerTypeRef.current !== "mouse") {
          handleOpen(event);
        }
      }),
      onPointerDown: (0, import_primitive.composeEventHandlers)(triggerProps.onPointerDown, event => {
        pointerTypeRef.current = event.pointerType;
        const target = event.target;
        if (target.hasPointerCapture(event.pointerId)) {
          target.releasePointerCapture(event.pointerId);
        }
        if (event.button === 0 && event.ctrlKey === false && event.pointerType === "mouse") {
          handleOpen(event);
          event.preventDefault();
        }
      }),
      onKeyDown: (0, import_primitive.composeEventHandlers)(triggerProps.onKeyDown, event => {
        const isTypingAhead = searchRef.current !== "";
        const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
        if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
        if (isTypingAhead && event.key === " ") return;
        if (OPEN_KEYS.includes(event.key)) {
          handleOpen();
          event.preventDefault();
        }
      })
    })
  });
});
SelectTrigger.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue";
var SelectValue = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    className,
    style,
    children,
    placeholder = "",
    ...valueProps
  } = props;
  const context = useSelectContext(VALUE_NAME, __scopeSelect);
  const {
    onValueNodeHasChildrenChange
  } = context;
  const hasChildren = children !== void 0;
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, context.onValueNodeChange);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [onValueNodeHasChildrenChange, hasChildren]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    ...valueProps,
    ref: composedRefs,
    style: {
      pointerEvents: "none"
    },
    children: shouldShowPlaceholder(context.value) ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: placeholder
    }) : children
  });
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon";
var SelectIcon = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    children,
    ...iconProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    "aria-hidden": true,
    ...iconProps,
    ref: forwardedRef,
    children: children || "\u25BC"
  });
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal";
var SelectPortal = props => {
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_portal.Portal, {
    asChild: true,
    ...props
  });
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent";
var SelectContent = React.forwardRef((props, forwardedRef) => {
  const context = useSelectContext(CONTENT_NAME, props.__scopeSelect);
  const [fragment, setFragment] = React.useState();
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    setFragment(new DocumentFragment());
  }, []);
  if (!context.open) {
    const frag = fragment;
    return frag ? ReactDOM.createPortal(/* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectContentProvider, {
      scope: props.__scopeSelect,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.Slot, {
        scope: props.__scopeSelect,
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
          children: props.children
        })
      })
    }), frag) : null;
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectContentImpl, {
    ...props,
    ref: forwardedRef
  });
});
SelectContent.displayName = CONTENT_NAME;
var CONTENT_MARGIN = 10;
var [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME);
var CONTENT_IMPL_NAME = "SelectContentImpl";
var Slot = (0, import_react_slot.createSlot)("SelectContent.RemoveScroll");
var SelectContentImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    position = "item-aligned",
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions,
    ...contentProps
  } = props;
  const context = useSelectContext(CONTENT_NAME, __scopeSelect);
  const [content, setContent] = React.useState(null);
  const [viewport, setViewport] = React.useState(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => setContent(node));
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedItemText, setSelectedItemText] = React.useState(null);
  const getItems = useCollection(__scopeSelect);
  const [isPositioned, setIsPositioned] = React.useState(false);
  const firstValidItemFoundRef = React.useRef(false);
  React.useEffect(() => {
    if (content) return (0, import_aria_hidden.hideOthers)(content);
  }, [content]);
  (0, import_react_focus_guards.useFocusGuards)();
  const focusFirst = React.useCallback(candidates => {
    const [firstItem, ...restItems] = getItems().map(item => item.ref.current);
    const [lastItem] = restItems.slice(-1);
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates) {
      if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
      candidate?.scrollIntoView({
        block: "nearest"
      });
      if (candidate === firstItem && viewport) viewport.scrollTop = 0;
      if (candidate === lastItem && viewport) viewport.scrollTop = viewport.scrollHeight;
      candidate?.focus();
      if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
  }, [getItems, viewport]);
  const focusSelectedItem = React.useCallback(() => focusFirst([selectedItem, content]), [focusFirst, selectedItem, content]);
  React.useEffect(() => {
    if (isPositioned) {
      focusSelectedItem();
    }
  }, [isPositioned, focusSelectedItem]);
  const {
    onOpenChange,
    triggerPointerDownPosRef
  } = context;
  React.useEffect(() => {
    if (content) {
      let pointerMoveDelta = {
        x: 0,
        y: 0
      };
      const handlePointerMove = event => {
        pointerMoveDelta = {
          x: Math.abs(Math.round(event.pageX) - (triggerPointerDownPosRef.current?.x ?? 0)),
          y: Math.abs(Math.round(event.pageY) - (triggerPointerDownPosRef.current?.y ?? 0))
        };
      };
      const handlePointerUp = event => {
        if (pointerMoveDelta.x <= 10 && pointerMoveDelta.y <= 10) {
          event.preventDefault();
        } else {
          if (!content.contains(event.target)) {
            onOpenChange(false);
          }
        }
        document.removeEventListener("pointermove", handlePointerMove);
        triggerPointerDownPosRef.current = null;
      };
      if (triggerPointerDownPosRef.current !== null) {
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerup", handlePointerUp, {
          capture: true
        });
      };
    }
  }, [content, onOpenChange, triggerPointerDownPosRef]);
  React.useEffect(() => {
    const close = () => onOpenChange(false);
    window.addEventListener("blur", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("blur", close);
      window.removeEventListener("resize", close);
    };
  }, [onOpenChange]);
  const [searchRef, handleTypeaheadSearch] = useTypeaheadSearch(search => {
    const enabledItems = getItems().filter(item => !item.disabled);
    const currentItem = enabledItems.find(item => item.ref.current === document.activeElement);
    const nextItem = findNextItem(enabledItems, search, currentItem);
    if (nextItem) {
      setTimeout(() => nextItem.ref.current.focus());
    }
  });
  const itemRefCallback = React.useCallback((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItem(node);
      if (isFirstValidItem) firstValidItemFoundRef.current = true;
    }
  }, [context.value]);
  const handleItemLeave = React.useCallback(() => content?.focus(), [content]);
  const itemTextRefCallback = React.useCallback((node, value, disabled) => {
    const isFirstValidItem = !firstValidItemFoundRef.current && !disabled;
    const isSelectedItem = context.value !== void 0 && context.value === value;
    if (isSelectedItem || isFirstValidItem) {
      setSelectedItemText(node);
    }
  }, [context.value]);
  const SelectPosition = position === "popper" ? SelectPopperPosition : SelectItemAlignedPosition;
  const popperContentProps = SelectPosition === SelectPopperPosition ? {
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    avoidCollisions
  } : {};
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectContentProvider, {
    scope: __scopeSelect,
    content,
    viewport,
    onViewportChange: setViewport,
    itemRefCallback,
    selectedItem,
    onItemLeave: handleItemLeave,
    itemTextRefCallback,
    focusSelectedItem,
    selectedItemText,
    position,
    isPositioned,
    searchRef,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_remove_scroll.RemoveScroll, {
      as: Slot,
      allowPinchZoom: true,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_focus_scope.FocusScope, {
        asChild: true,
        trapped: context.open,
        onMountAutoFocus: event => {
          event.preventDefault();
        },
        onUnmountAutoFocus: (0, import_primitive.composeEventHandlers)(onCloseAutoFocus, event => {
          context.trigger?.focus({
            preventScroll: true
          });
          event.preventDefault();
        }),
        children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_dismissable_layer.DismissableLayer, {
          asChild: true,
          disableOutsidePointerEvents: true,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside: event => event.preventDefault(),
          onDismiss: () => context.onOpenChange(false),
          children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectPosition, {
            role: "listbox",
            id: context.contentId,
            "data-state": context.open ? "open" : "closed",
            dir: context.dir,
            onContextMenu: event => event.preventDefault(),
            ...contentProps,
            ...popperContentProps,
            onPlaced: () => setIsPositioned(true),
            ref: composedRefs,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none",
              ...contentProps.style
            },
            onKeyDown: (0, import_primitive.composeEventHandlers)(contentProps.onKeyDown, event => {
              const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
              if (event.key === "Tab") event.preventDefault();
              if (!isModifierKey && event.key.length === 1) handleTypeaheadSearch(event.key);
              if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                const items = getItems().filter(item => !item.disabled);
                let candidateNodes = items.map(item => item.ref.current);
                if (["ArrowUp", "End"].includes(event.key)) {
                  candidateNodes = candidateNodes.slice().reverse();
                }
                if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                  const currentElement = event.target;
                  const currentIndex = candidateNodes.indexOf(currentElement);
                  candidateNodes = candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
                event.preventDefault();
              }
            })
          })
        })
      })
    })
  });
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition";
var SelectItemAlignedPosition = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    onPlaced,
    ...popperProps
  } = props;
  const context = useSelectContext(CONTENT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(CONTENT_NAME, __scopeSelect);
  const [contentWrapper, setContentWrapper] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => setContent(node));
  const getItems = useCollection(__scopeSelect);
  const shouldExpandOnScrollRef = React.useRef(false);
  const shouldRepositionRef = React.useRef(true);
  const {
    viewport,
    selectedItem,
    selectedItemText,
    focusSelectedItem
  } = contentContext;
  const position = React.useCallback(() => {
    if (context.trigger && context.valueNode && contentWrapper && content && viewport && selectedItem && selectedItemText) {
      const triggerRect = context.trigger.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const valueNodeRect = context.valueNode.getBoundingClientRect();
      const itemTextRect = selectedItemText.getBoundingClientRect();
      if (context.dir !== "rtl") {
        const itemTextOffset = itemTextRect.left - contentRect.left;
        const left = valueNodeRect.left - itemTextOffset;
        const leftDelta = triggerRect.left - left;
        const minContentWidth = triggerRect.width + leftDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const rightEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedLeft = (0, import_number.clamp)(left, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, rightEdge - contentWidth)]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.left = clampedLeft + "px";
      } else {
        const itemTextOffset = contentRect.right - itemTextRect.right;
        const right = window.innerWidth - valueNodeRect.right - itemTextOffset;
        const rightDelta = window.innerWidth - triggerRect.right - right;
        const minContentWidth = triggerRect.width + rightDelta;
        const contentWidth = Math.max(minContentWidth, contentRect.width);
        const leftEdge = window.innerWidth - CONTENT_MARGIN;
        const clampedRight = (0, import_number.clamp)(right, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, leftEdge - contentWidth)]);
        contentWrapper.style.minWidth = minContentWidth + "px";
        contentWrapper.style.right = clampedRight + "px";
      }
      const items = getItems();
      const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
      const itemsHeight = viewport.scrollHeight;
      const contentStyles = window.getComputedStyle(content);
      const contentBorderTopWidth = parseInt(contentStyles.borderTopWidth, 10);
      const contentPaddingTop = parseInt(contentStyles.paddingTop, 10);
      const contentBorderBottomWidth = parseInt(contentStyles.borderBottomWidth, 10);
      const contentPaddingBottom = parseInt(contentStyles.paddingBottom, 10);
      const fullContentHeight = contentBorderTopWidth + contentPaddingTop + itemsHeight + contentPaddingBottom + contentBorderBottomWidth;
      const minContentHeight = Math.min(selectedItem.offsetHeight * 5, fullContentHeight);
      const viewportStyles = window.getComputedStyle(viewport);
      const viewportPaddingTop = parseInt(viewportStyles.paddingTop, 10);
      const viewportPaddingBottom = parseInt(viewportStyles.paddingBottom, 10);
      const topEdgeToTriggerMiddle = triggerRect.top + triggerRect.height / 2 - CONTENT_MARGIN;
      const triggerMiddleToBottomEdge = availableHeight - topEdgeToTriggerMiddle;
      const selectedItemHalfHeight = selectedItem.offsetHeight / 2;
      const itemOffsetMiddle = selectedItem.offsetTop + selectedItemHalfHeight;
      const contentTopToItemMiddle = contentBorderTopWidth + contentPaddingTop + itemOffsetMiddle;
      const itemMiddleToContentBottom = fullContentHeight - contentTopToItemMiddle;
      const willAlignWithoutTopOverflow = contentTopToItemMiddle <= topEdgeToTriggerMiddle;
      if (willAlignWithoutTopOverflow) {
        const isLastItem = items.length > 0 && selectedItem === items[items.length - 1].ref.current;
        contentWrapper.style.bottom = "0px";
        const viewportOffsetBottom = content.clientHeight - viewport.offsetTop - viewport.offsetHeight;
        const clampedTriggerMiddleToBottomEdge = Math.max(triggerMiddleToBottomEdge, selectedItemHalfHeight + (isLastItem ? viewportPaddingBottom : 0) + viewportOffsetBottom + contentBorderBottomWidth);
        const height = contentTopToItemMiddle + clampedTriggerMiddleToBottomEdge;
        contentWrapper.style.height = height + "px";
      } else {
        const isFirstItem = items.length > 0 && selectedItem === items[0].ref.current;
        contentWrapper.style.top = "0px";
        const clampedTopEdgeToTriggerMiddle = Math.max(topEdgeToTriggerMiddle, contentBorderTopWidth + viewport.offsetTop + (isFirstItem ? viewportPaddingTop : 0) + selectedItemHalfHeight);
        const height = clampedTopEdgeToTriggerMiddle + itemMiddleToContentBottom;
        contentWrapper.style.height = height + "px";
        viewport.scrollTop = contentTopToItemMiddle - topEdgeToTriggerMiddle + viewport.offsetTop;
      }
      contentWrapper.style.margin = `${CONTENT_MARGIN}px 0`;
      contentWrapper.style.minHeight = minContentHeight + "px";
      contentWrapper.style.maxHeight = availableHeight + "px";
      onPlaced?.();
      requestAnimationFrame(() => shouldExpandOnScrollRef.current = true);
    }
  }, [getItems, context.trigger, context.valueNode, contentWrapper, content, viewport, selectedItem, selectedItemText, context.dir, onPlaced]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => position(), [position]);
  const [contentZIndex, setContentZIndex] = React.useState();
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
  }, [content]);
  const handleScrollButtonChange = React.useCallback(node => {
    if (node && shouldRepositionRef.current === true) {
      position();
      focusSelectedItem?.();
      shouldRepositionRef.current = false;
    }
  }, [position, focusSelectedItem]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectViewportProvider, {
    scope: __scopeSelect,
    contentWrapper,
    shouldExpandOnScrollRef,
    onScrollButtonChange: handleScrollButtonChange,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
      ref: setContentWrapper,
      style: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: contentZIndex
      },
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
        ...popperProps,
        ref: composedRefs,
        style: {
          boxSizing: "border-box",
          maxHeight: "100%",
          ...popperProps.style
        }
      })
    })
  });
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition";
var SelectPopperPosition = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    align = "start",
    collisionPadding = CONTENT_MARGIN,
    ...popperProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Content, {
    ...popperScope,
    ...popperProps,
    ref: forwardedRef,
    align,
    collisionPadding,
    style: {
      boxSizing: "border-box",
      ...popperProps.style,
      ...{
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  });
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {});
var VIEWPORT_NAME = "SelectViewport";
var SelectViewport = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    nonce,
    ...viewportProps
  } = props;
  const contentContext = useSelectContentContext(VIEWPORT_NAME, __scopeSelect);
  const viewportContext = useSelectViewportContext(VIEWPORT_NAME, __scopeSelect);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, contentContext.onViewportChange);
  const prevScrollTopRef = React.useRef(0);
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)("style", {
      dangerouslySetInnerHTML: {
        __html: `[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}`
      },
      nonce
    }), /* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.Slot, {
      scope: __scopeSelect,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
        "data-radix-select-viewport": "",
        role: "presentation",
        ...viewportProps,
        ref: composedRefs,
        style: {
          position: "relative",
          flex: 1,
          overflow: "hidden auto",
          ...viewportProps.style
        },
        onScroll: (0, import_primitive.composeEventHandlers)(viewportProps.onScroll, event => {
          const viewport = event.currentTarget;
          const {
            contentWrapper,
            shouldExpandOnScrollRef
          } = viewportContext;
          if (shouldExpandOnScrollRef?.current && contentWrapper) {
            const scrolledBy = Math.abs(prevScrollTopRef.current - viewport.scrollTop);
            if (scrolledBy > 0) {
              const availableHeight = window.innerHeight - CONTENT_MARGIN * 2;
              const cssMinHeight = parseFloat(contentWrapper.style.minHeight);
              const cssHeight = parseFloat(contentWrapper.style.height);
              const prevHeight = Math.max(cssMinHeight, cssHeight);
              if (prevHeight < availableHeight) {
                const nextHeight = prevHeight + scrolledBy;
                const clampedNextHeight = Math.min(availableHeight, nextHeight);
                const heightDiff = nextHeight - clampedNextHeight;
                contentWrapper.style.height = clampedNextHeight + "px";
                if (contentWrapper.style.bottom === "0px") {
                  viewport.scrollTop = heightDiff > 0 ? heightDiff : 0;
                  contentWrapper.style.justifyContent = "flex-end";
                }
              }
            }
          }
          prevScrollTopRef.current = viewport.scrollTop;
        })
      })
    })]
  });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup";
var [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME);
var SelectGroup = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...groupProps
  } = props;
  const groupId = (0, import_react_id.useId)();
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
    scope: __scopeSelect,
    id: groupId,
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
      role: "group",
      "aria-labelledby": groupId,
      ...groupProps,
      ref: forwardedRef
    })
  });
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel";
var SelectLabel = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...labelProps
  } = props;
  const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    id: groupContext.id,
    ...labelProps,
    ref: forwardedRef
  });
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem";
var [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME);
var SelectItem = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    value,
    disabled = false,
    textValue: textValueProp,
    ...itemProps
  } = props;
  const context = useSelectContext(ITEM_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ITEM_NAME, __scopeSelect);
  const isSelected = context.value === value;
  const [textValue, setTextValue] = React.useState(textValueProp ?? "");
  const [isFocused, setIsFocused] = React.useState(false);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => contentContext.itemRefCallback?.(node, value, disabled));
  const textId = (0, import_react_id.useId)();
  const pointerTypeRef = React.useRef("touch");
  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      context.onOpenChange(false);
    }
  };
  if (value === "") {
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  }
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
    scope: __scopeSelect,
    value,
    disabled,
    textId,
    isSelected,
    onItemTextChange: React.useCallback(node => {
      setTextValue(prevTextValue => prevTextValue || (node?.textContent ?? "").trim());
    }, []),
    children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
      scope: __scopeSelect,
      value,
      disabled,
      textValue,
      children: /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
        role: "option",
        "aria-labelledby": textId,
        "data-highlighted": isFocused ? "" : void 0,
        "aria-selected": isSelected && isFocused,
        "data-state": isSelected ? "checked" : "unchecked",
        "aria-disabled": disabled || void 0,
        "data-disabled": disabled ? "" : void 0,
        tabIndex: disabled ? void 0 : -1,
        ...itemProps,
        ref: composedRefs,
        onFocus: (0, import_primitive.composeEventHandlers)(itemProps.onFocus, () => setIsFocused(true)),
        onBlur: (0, import_primitive.composeEventHandlers)(itemProps.onBlur, () => setIsFocused(false)),
        onClick: (0, import_primitive.composeEventHandlers)(itemProps.onClick, () => {
          if (pointerTypeRef.current !== "mouse") handleSelect();
        }),
        onPointerUp: (0, import_primitive.composeEventHandlers)(itemProps.onPointerUp, () => {
          if (pointerTypeRef.current === "mouse") handleSelect();
        }),
        onPointerDown: (0, import_primitive.composeEventHandlers)(itemProps.onPointerDown, event => {
          pointerTypeRef.current = event.pointerType;
        }),
        onPointerMove: (0, import_primitive.composeEventHandlers)(itemProps.onPointerMove, event => {
          pointerTypeRef.current = event.pointerType;
          if (disabled) {
            contentContext.onItemLeave?.();
          } else if (pointerTypeRef.current === "mouse") {
            event.currentTarget.focus({
              preventScroll: true
            });
          }
        }),
        onPointerLeave: (0, import_primitive.composeEventHandlers)(itemProps.onPointerLeave, event => {
          if (event.currentTarget === document.activeElement) {
            contentContext.onItemLeave?.();
          }
        }),
        onKeyDown: (0, import_primitive.composeEventHandlers)(itemProps.onKeyDown, event => {
          const isTypingAhead = contentContext.searchRef?.current !== "";
          if (isTypingAhead && event.key === " ") return;
          if (SELECTION_KEYS.includes(event.key)) handleSelect();
          if (event.key === " ") event.preventDefault();
        })
      })
    })
  });
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText";
var SelectItemText = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    className,
    style,
    ...itemTextProps
  } = props;
  const context = useSelectContext(ITEM_TEXT_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ITEM_TEXT_NAME, __scopeSelect);
  const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
  const nativeOptionsContext = useSelectNativeOptionsContext(ITEM_TEXT_NAME, __scopeSelect);
  const [itemTextNode, setItemTextNode] = React.useState(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, node => setItemTextNode(node), itemContext.onItemTextChange, node => contentContext.itemTextRefCallback?.(node, itemContext.value, itemContext.disabled));
  const textContent = itemTextNode?.textContent;
  const nativeOption = React.useMemo(() => /* @__PURE__ */(0, import_jsx_runtime.jsx)("option", {
    value: itemContext.value,
    disabled: itemContext.disabled,
    children: textContent
  }, itemContext.value), [itemContext.disabled, itemContext.value, textContent]);
  const {
    onNativeOptionAdd,
    onNativeOptionRemove
  } = nativeOptionsContext;
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    onNativeOptionAdd(nativeOption);
    return () => onNativeOptionRemove(nativeOption);
  }, [onNativeOptionAdd, onNativeOptionRemove, nativeOption]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
      id: itemContext.textId,
      ...itemTextProps,
      ref: composedRefs
    }), itemContext.isSelected && context.valueNode && !context.valueNodeHasChildren ? ReactDOM.createPortal(itemTextProps.children, context.valueNode) : null]
  });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator";
var SelectItemIndicator = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...itemIndicatorProps
  } = props;
  const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
  return itemContext.isSelected ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.span, {
    "aria-hidden": true,
    ...itemIndicatorProps,
    ref: forwardedRef
  }) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
var SelectScrollUpButton = React.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, props.__scopeSelect);
  const [canScrollUp, setCanScrollUp] = React.useState(false);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, viewportContext.onScrollButtonChange);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function () {
        const canScrollUp2 = viewport.scrollTop > 0;
        setCanScrollUp(canScrollUp2);
      };
      var handleScroll = handleScroll2;
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollUp ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
    ...props,
    ref: composedRefs,
    onAutoScroll: () => {
      const {
        viewport,
        selectedItem
      } = contentContext;
      if (viewport && selectedItem) {
        viewport.scrollTop = viewport.scrollTop - selectedItem.offsetHeight;
      }
    }
  }) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
var SelectScrollDownButton = React.forwardRef((props, forwardedRef) => {
  const contentContext = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const viewportContext = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, props.__scopeSelect);
  const [canScrollDown, setCanScrollDown] = React.useState(false);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, viewportContext.onScrollButtonChange);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    if (contentContext.viewport && contentContext.isPositioned) {
      let handleScroll2 = function () {
        const maxScroll = viewport.scrollHeight - viewport.clientHeight;
        const canScrollDown2 = Math.ceil(viewport.scrollTop) < maxScroll;
        setCanScrollDown(canScrollDown2);
      };
      var handleScroll = handleScroll2;
      const viewport = contentContext.viewport;
      handleScroll2();
      viewport.addEventListener("scroll", handleScroll2);
      return () => viewport.removeEventListener("scroll", handleScroll2);
    }
  }, [contentContext.viewport, contentContext.isPositioned]);
  return canScrollDown ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
    ...props,
    ref: composedRefs,
    onAutoScroll: () => {
      const {
        viewport,
        selectedItem
      } = contentContext;
      if (viewport && selectedItem) {
        viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
      }
    }
  }) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    onAutoScroll,
    ...scrollIndicatorProps
  } = props;
  const contentContext = useSelectContentContext("SelectScrollButton", __scopeSelect);
  const autoScrollTimerRef = React.useRef(null);
  const getItems = useCollection(__scopeSelect);
  const clearAutoScrollTimer = React.useCallback(() => {
    if (autoScrollTimerRef.current !== null) {
      window.clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);
  React.useEffect(() => {
    return () => clearAutoScrollTimer();
  }, [clearAutoScrollTimer]);
  (0, import_react_use_layout_effect.useLayoutEffect)(() => {
    const activeItem = getItems().find(item => item.ref.current === document.activeElement);
    activeItem?.ref.current?.scrollIntoView({
      block: "nearest"
    });
  }, [getItems]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    "aria-hidden": true,
    ...scrollIndicatorProps,
    ref: forwardedRef,
    style: {
      flexShrink: 0,
      ...scrollIndicatorProps.style
    },
    onPointerDown: (0, import_primitive.composeEventHandlers)(scrollIndicatorProps.onPointerDown, () => {
      if (autoScrollTimerRef.current === null) {
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
      }
    }),
    onPointerMove: (0, import_primitive.composeEventHandlers)(scrollIndicatorProps.onPointerMove, () => {
      contentContext.onItemLeave?.();
      if (autoScrollTimerRef.current === null) {
        autoScrollTimerRef.current = window.setInterval(onAutoScroll, 50);
      }
    }),
    onPointerLeave: (0, import_primitive.composeEventHandlers)(scrollIndicatorProps.onPointerLeave, () => {
      clearAutoScrollTimer();
    })
  });
});
var SEPARATOR_NAME = "SelectSeparator";
var SelectSeparator = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...separatorProps
  } = props;
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.div, {
    "aria-hidden": true,
    ...separatorProps,
    ref: forwardedRef
  });
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow";
var SelectArrow = React.forwardRef((props, forwardedRef) => {
  const {
    __scopeSelect,
    ...arrowProps
  } = props;
  const popperScope = usePopperScope(__scopeSelect);
  const context = useSelectContext(ARROW_NAME, __scopeSelect);
  const contentContext = useSelectContentContext(ARROW_NAME, __scopeSelect);
  return context.open && contentContext.position === "popper" ? /* @__PURE__ */(0, import_jsx_runtime.jsx)(PopperPrimitive.Arrow, {
    ...popperScope,
    ...arrowProps,
    ref: forwardedRef
  }) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput";
var SelectBubbleInput = React.forwardRef(({
  __scopeSelect,
  value,
  ...props
}, forwardedRef) => {
  const ref = React.useRef(null);
  const composedRefs = (0, import_react_compose_refs.useComposedRefs)(forwardedRef, ref);
  const prevValue = (0, import_react_use_previous.usePrevious)(value);
  React.useEffect(() => {
    const select = ref.current;
    if (!select) return;
    const selectProto = window.HTMLSelectElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(selectProto, "value");
    const setValue = descriptor.set;
    if (prevValue !== value && setValue) {
      const event = new Event("change", {
        bubbles: true
      });
      setValue.call(select, value);
      select.dispatchEvent(event);
    }
  }, [prevValue, value]);
  return /* @__PURE__ */(0, import_jsx_runtime.jsx)(import_react_primitive.Primitive.select, {
    ...props,
    style: {
      ...import_react_visually_hidden.VISUALLY_HIDDEN_STYLES,
      ...props.style
    },
    ref: composedRefs,
    defaultValue: value
  });
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(value) {
  return value === "" || value === void 0;
}
function useTypeaheadSearch(onSearchChange) {
  const handleSearchChange = (0, import_react_use_callback_ref.useCallbackRef)(onSearchChange);
  const searchRef = React.useRef("");
  const timerRef = React.useRef(0);
  const handleTypeaheadSearch = React.useCallback(key => {
    const search = searchRef.current + key;
    handleSearchChange(search);
    (function updateSearch(value) {
      searchRef.current = value;
      window.clearTimeout(timerRef.current);
      if (value !== "") timerRef.current = window.setTimeout(() => updateSearch(""), 1e3);
    })(search);
  }, [handleSearchChange]);
  const resetTypeahead = React.useCallback(() => {
    searchRef.current = "";
    window.clearTimeout(timerRef.current);
  }, []);
  React.useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);
  return [searchRef, handleTypeaheadSearch, resetTypeahead];
}
function findNextItem(items, search, currentItem) {
  const isRepeated = search.length > 1 && Array.from(search).every(char => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const currentItemIndex = currentItem ? items.indexOf(currentItem) : -1;
  let wrappedItems = wrapArray(items, Math.max(currentItemIndex, 0));
  const excludeCurrentItem = normalizedSearch.length === 1;
  if (excludeCurrentItem) wrappedItems = wrappedItems.filter(v => v !== currentItem);
  const nextItem = wrappedItems.find(item => item.textValue.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
  return nextItem !== currentItem ? nextItem : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root2 = Select;
var Trigger = SelectTrigger;
var Value = SelectValue;
var Icon = SelectIcon;
var Portal = SelectPortal;
var Content2 = SelectContent;
var Viewport = SelectViewport;
var Group = SelectGroup;
var Label = SelectLabel;
var Item = SelectItem;
var ItemText = SelectItemText;
var ItemIndicator = SelectItemIndicator;
var ScrollUpButton = SelectScrollUpButton;
var ScrollDownButton = SelectScrollDownButton;
var Separator = SelectSeparator;
var Arrow2 = SelectArrow;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1zZWxlY3QuMi4yLjQuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXNlbGVjdC9zcmMvc2VsZWN0LnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9zZWxlY3RfMl8yXzRfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQXJyb3ciLCJBcnJvdzIiLCJDb250ZW50IiwiQ29udGVudDIiLCJHcm91cCIsIkljb24iLCJJdGVtIiwiSXRlbUluZGljYXRvciIsIkl0ZW1UZXh0IiwiTGFiZWwiLCJQb3J0YWwiLCJSb290IiwiUm9vdDIiLCJTY3JvbGxEb3duQnV0dG9uIiwiU2Nyb2xsVXBCdXR0b24iLCJTZWxlY3QiLCJTZWxlY3RBcnJvdyIsIlNlbGVjdENvbnRlbnQiLCJTZWxlY3RHcm91cCIsIlNlbGVjdEljb24iLCJTZWxlY3RJdGVtIiwiU2VsZWN0SXRlbUluZGljYXRvciIsIlNlbGVjdEl0ZW1UZXh0IiwiU2VsZWN0TGFiZWwiLCJTZWxlY3RQb3J0YWwiLCJTZWxlY3RTY3JvbGxEb3duQnV0dG9uIiwiU2VsZWN0U2Nyb2xsVXBCdXR0b24iLCJTZWxlY3RTZXBhcmF0b3IiLCJTZWxlY3RUcmlnZ2VyIiwiU2VsZWN0VmFsdWUiLCJTZWxlY3RWaWV3cG9ydCIsIlNlcGFyYXRvciIsIlRyaWdnZXIiLCJWYWx1ZSIsIlZpZXdwb3J0IiwiY3JlYXRlU2VsZWN0U2NvcGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiaW1wb3J0X251bWJlciIsImltcG9ydF9wcmltaXRpdmUiLCJpbXBvcnRfcmVhY3RfY29sbGVjdGlvbiIsImltcG9ydF9yZWFjdF9jb21wb3NlX3JlZnMiLCJpbXBvcnRfcmVhY3RfY29udGV4dCIsImltcG9ydF9yZWFjdF9kaXJlY3Rpb24iLCJpbXBvcnRfcmVhY3RfZGlzbWlzc2FibGVfbGF5ZXIiLCJpbXBvcnRfcmVhY3RfZm9jdXNfZ3VhcmRzIiwiaW1wb3J0X3JlYWN0X2ZvY3VzX3Njb3BlIiwiaW1wb3J0X3JlYWN0X2lkIiwiUG9wcGVyUHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X3BvcHBlciIsImltcG9ydF9yZWFjdF9wb3J0YWwiLCJpbXBvcnRfcmVhY3RfcHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X3Nsb3QiLCJpbXBvcnRfcmVhY3RfdXNlX2NhbGxiYWNrX3JlZiIsImltcG9ydF9yZWFjdF91c2VfY29udHJvbGxhYmxlX3N0YXRlIiwiaW1wb3J0X3JlYWN0X3VzZV9sYXlvdXRfZWZmZWN0IiwiaW1wb3J0X3JlYWN0X3VzZV9wcmV2aW91cyIsImltcG9ydF9yZWFjdF92aXN1YWxseV9oaWRkZW4iLCJpbXBvcnRfYXJpYV9oaWRkZW4iLCJpbXBvcnRfcmVhY3RfcmVtb3ZlX3Njcm9sbCIsImltcG9ydF9qc3hfcnVudGltZSIsIk9QRU5fS0VZUyIsIlNFTEVDVElPTl9LRVlTIiwiU0VMRUNUX05BTUUiLCJDb2xsZWN0aW9uIiwidXNlQ29sbGVjdGlvbiIsImNyZWF0ZUNvbGxlY3Rpb25TY29wZSIsImNyZWF0ZUNvbGxlY3Rpb24iLCJjcmVhdGVTZWxlY3RDb250ZXh0IiwiY3JlYXRlQ29udGV4dFNjb3BlIiwiY3JlYXRlUG9wcGVyU2NvcGUiLCJ1c2VQb3BwZXJTY29wZSIsIlNlbGVjdFByb3ZpZGVyIiwidXNlU2VsZWN0Q29udGV4dCIsIlNlbGVjdE5hdGl2ZU9wdGlvbnNQcm92aWRlciIsInVzZVNlbGVjdE5hdGl2ZU9wdGlvbnNDb250ZXh0IiwicHJvcHMiLCJfX3Njb3BlU2VsZWN0IiwiY2hpbGRyZW4iLCJvcGVuIiwib3BlblByb3AiLCJkZWZhdWx0T3BlbiIsIm9uT3BlbkNoYW5nZSIsInZhbHVlIiwidmFsdWVQcm9wIiwiZGVmYXVsdFZhbHVlIiwib25WYWx1ZUNoYW5nZSIsImRpciIsIm5hbWUiLCJhdXRvQ29tcGxldGUiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwiZm9ybSIsInBvcHBlclNjb3BlIiwidHJpZ2dlciIsInNldFRyaWdnZXIiLCJ1c2VTdGF0ZSIsInZhbHVlTm9kZSIsInNldFZhbHVlTm9kZSIsInZhbHVlTm9kZUhhc0NoaWxkcmVuIiwic2V0VmFsdWVOb2RlSGFzQ2hpbGRyZW4iLCJkaXJlY3Rpb24iLCJ1c2VEaXJlY3Rpb24iLCJzZXRPcGVuIiwidXNlQ29udHJvbGxhYmxlU3RhdGUiLCJwcm9wIiwiZGVmYXVsdFByb3AiLCJvbkNoYW5nZSIsImNhbGxlciIsInNldFZhbHVlIiwidHJpZ2dlclBvaW50ZXJEb3duUG9zUmVmIiwidXNlUmVmIiwiaXNGb3JtQ29udHJvbCIsImNsb3Nlc3QiLCJuYXRpdmVPcHRpb25zU2V0Iiwic2V0TmF0aXZlT3B0aW9uc1NldCIsIlNldCIsIm5hdGl2ZVNlbGVjdEtleSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIm9wdGlvbiIsImpvaW4iLCJqc3giLCJqc3hzIiwic2NvcGUiLCJvblRyaWdnZXJDaGFuZ2UiLCJvblZhbHVlTm9kZUNoYW5nZSIsIm9uVmFsdWVOb2RlSGFzQ2hpbGRyZW5DaGFuZ2UiLCJjb250ZW50SWQiLCJ1c2VJZCIsIlByb3ZpZGVyIiwib25OYXRpdmVPcHRpb25BZGQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJhZGQiLCJvbk5hdGl2ZU9wdGlvblJlbW92ZSIsIm9wdGlvbnNTZXQiLCJkZWxldGUiLCJTZWxlY3RCdWJibGVJbnB1dCIsInRhYkluZGV4IiwiZXZlbnQiLCJ0YXJnZXQiLCJkaXNwbGF5TmFtZSIsIlRSSUdHRVJfTkFNRSIsImZvcndhcmRSZWYiLCJmb3J3YXJkZWRSZWYiLCJ0cmlnZ2VyUHJvcHMiLCJjb250ZXh0IiwiaXNEaXNhYmxlZCIsImNvbXBvc2VkUmVmcyIsInVzZUNvbXBvc2VkUmVmcyIsImdldEl0ZW1zIiwicG9pbnRlclR5cGVSZWYiLCJzZWFyY2hSZWYiLCJoYW5kbGVUeXBlYWhlYWRTZWFyY2giLCJyZXNldFR5cGVhaGVhZCIsInVzZVR5cGVhaGVhZFNlYXJjaCIsInNlYXJjaCIsImVuYWJsZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJjdXJyZW50SXRlbSIsImZpbmQiLCJuZXh0SXRlbSIsImZpbmROZXh0SXRlbSIsImhhbmRsZU9wZW4iLCJwb2ludGVyRXZlbnQiLCJjdXJyZW50IiwieCIsIk1hdGgiLCJyb3VuZCIsInBhZ2VYIiwieSIsInBhZ2VZIiwiQW5jaG9yIiwiYXNDaGlsZCIsIlByaW1pdGl2ZSIsImJ1dHRvbiIsInR5cGUiLCJyb2xlIiwic2hvdWxkU2hvd1BsYWNlaG9sZGVyIiwicmVmIiwib25DbGljayIsImNvbXBvc2VFdmVudEhhbmRsZXJzIiwiY3VycmVudFRhcmdldCIsImZvY3VzIiwib25Qb2ludGVyRG93biIsInBvaW50ZXJUeXBlIiwiaGFzUG9pbnRlckNhcHR1cmUiLCJwb2ludGVySWQiLCJyZWxlYXNlUG9pbnRlckNhcHR1cmUiLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJvbktleURvd24iLCJpc1R5cGluZ0FoZWFkIiwiaXNNb2RpZmllcktleSIsImFsdEtleSIsIm1ldGFLZXkiLCJrZXkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIlZBTFVFX05BTUUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBsYWNlaG9sZGVyIiwidmFsdWVQcm9wcyIsImhhc0NoaWxkcmVuIiwidXNlTGF5b3V0RWZmZWN0Iiwic3BhbiIsInBvaW50ZXJFdmVudHMiLCJGcmFnbWVudCIsIklDT05fTkFNRSIsImljb25Qcm9wcyIsIlBPUlRBTF9OQU1FIiwiQ09OVEVOVF9OQU1FIiwiZnJhZ21lbnQiLCJzZXRGcmFnbWVudCIsIkRvY3VtZW50RnJhZ21lbnQiLCJmcmFnIiwiY3JlYXRlUG9ydGFsIiwiU2VsZWN0Q29udGVudFByb3ZpZGVyIiwiU2xvdCIsIlNlbGVjdENvbnRlbnRJbXBsIiwiQ09OVEVOVF9NQVJHSU4iLCJ1c2VTZWxlY3RDb250ZW50Q29udGV4dCIsIkNPTlRFTlRfSU1QTF9OQU1FIiwiY3JlYXRlU2xvdCIsInBvc2l0aW9uIiwib25DbG9zZUF1dG9Gb2N1cyIsIm9uRXNjYXBlS2V5RG93biIsIm9uUG9pbnRlckRvd25PdXRzaWRlIiwic2lkZSIsInNpZGVPZmZzZXQiLCJhbGlnbiIsImFsaWduT2Zmc2V0IiwiYXJyb3dQYWRkaW5nIiwiY29sbGlzaW9uQm91bmRhcnkiLCJjb2xsaXNpb25QYWRkaW5nIiwic3RpY2t5IiwiaGlkZVdoZW5EZXRhY2hlZCIsImF2b2lkQ29sbGlzaW9ucyIsImNvbnRlbnRQcm9wcyIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsIm5vZGUiLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW1UZXh0Iiwic2V0U2VsZWN0ZWRJdGVtVGV4dCIsImlzUG9zaXRpb25lZCIsInNldElzUG9zaXRpb25lZCIsImZpcnN0VmFsaWRJdGVtRm91bmRSZWYiLCJ1c2VFZmZlY3QiLCJoaWRlT3RoZXJzIiwidXNlRm9jdXNHdWFyZHMiLCJmb2N1c0ZpcnN0IiwiY2FuZGlkYXRlcyIsImZpcnN0SXRlbSIsInJlc3RJdGVtcyIsImxhc3RJdGVtIiwic2xpY2UiLCJQUkVWSU9VU0xZX0ZPQ1VTRURfRUxFTUVOVCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImNhbmRpZGF0ZSIsInNjcm9sbEludG9WaWV3IiwiYmxvY2siLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJmb2N1c1NlbGVjdGVkSXRlbSIsInBvaW50ZXJNb3ZlRGVsdGEiLCJoYW5kbGVQb2ludGVyTW92ZSIsImFicyIsImhhbmRsZVBvaW50ZXJVcCIsImNvbnRhaW5zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwib25jZSIsImNsb3NlIiwid2luZG93Iiwic2V0VGltZW91dCIsIml0ZW1SZWZDYWxsYmFjayIsImlzRmlyc3RWYWxpZEl0ZW0iLCJpc1NlbGVjdGVkSXRlbSIsImhhbmRsZUl0ZW1MZWF2ZSIsIml0ZW1UZXh0UmVmQ2FsbGJhY2siLCJTZWxlY3RQb3NpdGlvbiIsIlNlbGVjdFBvcHBlclBvc2l0aW9uIiwiU2VsZWN0SXRlbUFsaWduZWRQb3NpdGlvbiIsInBvcHBlckNvbnRlbnRQcm9wcyIsIm9uVmlld3BvcnRDaGFuZ2UiLCJvbkl0ZW1MZWF2ZSIsIlJlbW92ZVNjcm9sbCIsImFzIiwiYWxsb3dQaW5jaFpvb20iLCJGb2N1c1Njb3BlIiwidHJhcHBlZCIsIm9uTW91bnRBdXRvRm9jdXMiLCJvblVubW91bnRBdXRvRm9jdXMiLCJwcmV2ZW50U2Nyb2xsIiwiRGlzbWlzc2FibGVMYXllciIsImRpc2FibGVPdXRzaWRlUG9pbnRlckV2ZW50cyIsIm9uRm9jdXNPdXRzaWRlIiwib25EaXNtaXNzIiwiaWQiLCJvbkNvbnRleHRNZW51Iiwib25QbGFjZWQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm91dGxpbmUiLCJpdGVtcyIsImNhbmRpZGF0ZU5vZGVzIiwicmV2ZXJzZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsIklURU1fQUxJR05FRF9QT1NJVElPTl9OQU1FIiwicG9wcGVyUHJvcHMiLCJjb250ZW50Q29udGV4dCIsImNvbnRlbnRXcmFwcGVyIiwic2V0Q29udGVudFdyYXBwZXIiLCJzaG91bGRFeHBhbmRPblNjcm9sbFJlZiIsInNob3VsZFJlcG9zaXRpb25SZWYiLCJ0cmlnZ2VyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRlbnRSZWN0IiwidmFsdWVOb2RlUmVjdCIsIml0ZW1UZXh0UmVjdCIsIml0ZW1UZXh0T2Zmc2V0IiwibGVmdCIsImxlZnREZWx0YSIsIm1pbkNvbnRlbnRXaWR0aCIsIndpZHRoIiwiY29udGVudFdpZHRoIiwibWF4IiwicmlnaHRFZGdlIiwiaW5uZXJXaWR0aCIsImNsYW1wZWRMZWZ0IiwiY2xhbXAiLCJtaW5XaWR0aCIsInJpZ2h0IiwicmlnaHREZWx0YSIsImxlZnRFZGdlIiwiY2xhbXBlZFJpZ2h0IiwiYXZhaWxhYmxlSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpdGVtc0hlaWdodCIsImNvbnRlbnRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiY29udGVudEJvcmRlclRvcFdpZHRoIiwicGFyc2VJbnQiLCJib3JkZXJUb3BXaWR0aCIsImNvbnRlbnRQYWRkaW5nVG9wIiwicGFkZGluZ1RvcCIsImNvbnRlbnRCb3JkZXJCb3R0b21XaWR0aCIsImJvcmRlckJvdHRvbVdpZHRoIiwiY29udGVudFBhZGRpbmdCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiZnVsbENvbnRlbnRIZWlnaHQiLCJtaW5Db250ZW50SGVpZ2h0IiwibWluIiwib2Zmc2V0SGVpZ2h0Iiwidmlld3BvcnRTdHlsZXMiLCJ2aWV3cG9ydFBhZGRpbmdUb3AiLCJ2aWV3cG9ydFBhZGRpbmdCb3R0b20iLCJ0b3BFZGdlVG9UcmlnZ2VyTWlkZGxlIiwidG9wIiwiaGVpZ2h0IiwidHJpZ2dlck1pZGRsZVRvQm90dG9tRWRnZSIsInNlbGVjdGVkSXRlbUhhbGZIZWlnaHQiLCJpdGVtT2Zmc2V0TWlkZGxlIiwib2Zmc2V0VG9wIiwiY29udGVudFRvcFRvSXRlbU1pZGRsZSIsIml0ZW1NaWRkbGVUb0NvbnRlbnRCb3R0b20iLCJ3aWxsQWxpZ25XaXRob3V0VG9wT3ZlcmZsb3ciLCJpc0xhc3RJdGVtIiwiYm90dG9tIiwidmlld3BvcnRPZmZzZXRCb3R0b20iLCJjbGllbnRIZWlnaHQiLCJjbGFtcGVkVHJpZ2dlck1pZGRsZVRvQm90dG9tRWRnZSIsImlzRmlyc3RJdGVtIiwiY2xhbXBlZFRvcEVkZ2VUb1RyaWdnZXJNaWRkbGUiLCJtYXJnaW4iLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250ZW50WkluZGV4Iiwic2V0Q29udGVudFpJbmRleCIsInpJbmRleCIsImhhbmRsZVNjcm9sbEJ1dHRvbkNoYW5nZSIsIlNlbGVjdFZpZXdwb3J0UHJvdmlkZXIiLCJvblNjcm9sbEJ1dHRvbkNoYW5nZSIsImRpdiIsImJveFNpemluZyIsIlBPUFBFUl9QT1NJVElPTl9OQU1FIiwidXNlU2VsZWN0Vmlld3BvcnRDb250ZXh0IiwiVklFV1BPUlRfTkFNRSIsIm5vbmNlIiwidmlld3BvcnRQcm9wcyIsInZpZXdwb3J0Q29udGV4dCIsInByZXZTY3JvbGxUb3BSZWYiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImZsZXgiLCJvdmVyZmxvdyIsIm9uU2Nyb2xsIiwic2Nyb2xsZWRCeSIsImNzc01pbkhlaWdodCIsInBhcnNlRmxvYXQiLCJjc3NIZWlnaHQiLCJwcmV2SGVpZ2h0IiwibmV4dEhlaWdodCIsImNsYW1wZWROZXh0SGVpZ2h0IiwiaGVpZ2h0RGlmZiIsImp1c3RpZnlDb250ZW50IiwiR1JPVVBfTkFNRSIsIlNlbGVjdEdyb3VwQ29udGV4dFByb3ZpZGVyIiwidXNlU2VsZWN0R3JvdXBDb250ZXh0IiwiZ3JvdXBQcm9wcyIsImdyb3VwSWQiLCJMQUJFTF9OQU1FIiwibGFiZWxQcm9wcyIsImdyb3VwQ29udGV4dCIsIklURU1fTkFNRSIsIlNlbGVjdEl0ZW1Db250ZXh0UHJvdmlkZXIiLCJ1c2VTZWxlY3RJdGVtQ29udGV4dCIsInRleHRWYWx1ZSIsInRleHRWYWx1ZVByb3AiLCJpdGVtUHJvcHMiLCJpc1NlbGVjdGVkIiwic2V0VGV4dFZhbHVlIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwidGV4dElkIiwiaGFuZGxlU2VsZWN0IiwiRXJyb3IiLCJvbkl0ZW1UZXh0Q2hhbmdlIiwicHJldlRleHRWYWx1ZSIsInRleHRDb250ZW50IiwidHJpbSIsIkl0ZW1TbG90Iiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uUG9pbnRlclVwIiwib25Qb2ludGVyTW92ZSIsIm9uUG9pbnRlckxlYXZlIiwiSVRFTV9URVhUX05BTUUiLCJpdGVtVGV4dFByb3BzIiwiaXRlbUNvbnRleHQiLCJuYXRpdmVPcHRpb25zQ29udGV4dCIsIml0ZW1UZXh0Tm9kZSIsInNldEl0ZW1UZXh0Tm9kZSIsIm5hdGl2ZU9wdGlvbiIsInVzZU1lbW8iLCJJVEVNX0lORElDQVRPUl9OQU1FIiwiaXRlbUluZGljYXRvclByb3BzIiwiU0NST0xMX1VQX0JVVFRPTl9OQU1FIiwiY2FuU2Nyb2xsVXAiLCJzZXRDYW5TY3JvbGxVcCIsImhhbmRsZVNjcm9sbDIiLCJoYW5kbGVTY3JvbGwiLCJjYW5TY3JvbGxVcDIiLCJTZWxlY3RTY3JvbGxCdXR0b25JbXBsIiwib25BdXRvU2Nyb2xsIiwiU0NST0xMX0RPV05fQlVUVE9OX05BTUUiLCJjYW5TY3JvbGxEb3duIiwic2V0Q2FuU2Nyb2xsRG93biIsIm1heFNjcm9sbCIsImNhblNjcm9sbERvd24yIiwiY2VpbCIsInNjcm9sbEluZGljYXRvclByb3BzIiwiYXV0b1Njcm9sbFRpbWVyUmVmIiwiY2xlYXJBdXRvU2Nyb2xsVGltZXIiLCJjbGVhckludGVydmFsIiwiYWN0aXZlSXRlbSIsImZsZXhTaHJpbmsiLCJzZXRJbnRlcnZhbCIsIlNFUEFSQVRPUl9OQU1FIiwic2VwYXJhdG9yUHJvcHMiLCJBUlJPV19OQU1FIiwiYXJyb3dQcm9wcyIsIkJVQkJMRV9JTlBVVF9OQU1FIiwicHJldlZhbHVlIiwidXNlUHJldmlvdXMiLCJzZWxlY3QiLCJzZWxlY3RQcm90byIsIkhUTUxTZWxlY3RFbGVtZW50IiwicHJvdG90eXBlIiwiZGVzY3JpcHRvciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldCIsIkV2ZW50IiwiYnViYmxlcyIsImNhbGwiLCJkaXNwYXRjaEV2ZW50IiwiVklTVUFMTFlfSElEREVOX1NUWUxFUyIsIm9uU2VhcmNoQ2hhbmdlIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidXNlQ2FsbGJhY2tSZWYiLCJ0aW1lclJlZiIsInVwZGF0ZVNlYXJjaCIsImNsZWFyVGltZW91dCIsImlzUmVwZWF0ZWQiLCJldmVyeSIsImNoYXIiLCJub3JtYWxpemVkU2VhcmNoIiwiY3VycmVudEl0ZW1JbmRleCIsIndyYXBwZWRJdGVtcyIsIndyYXBBcnJheSIsImV4Y2x1ZGVDdXJyZW50SXRlbSIsInYiLCJ0b0xvd2VyQ2Fz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LElBQU1pQixPQUFBLEdBQVVKLGFBQUE7QUFDaEIsSUFBTUssS0FBQSxHQUFRSixXQUFBO0FBQ2QsSUFBTXhCLElBQUEsR0FBT2MsVUFBQTtBQUNiLElBQU1ULE1BQUEsR0FBU2MsWUFBQTtBQUNmLElBQU1yQixRQUFBLEdBQVVjLGFBQUE7QUFDaEIsSUFBTWlCLFFBQUEsR0FBV0osY0FBQTtBQUNqQixJQUFNMUIsS0FBQSxHQUFRYyxXQUFBO0FBQ2QsSUFBTVQsS0FBQSxHQUFRYyxXQUFBO0FBQ2QsSUFBTWpCLElBQUEsR0FBT2MsVUFBQTtBQUNiLElBQU1aLFFBQUEsR0FBV2MsY0FBQTtBQUNqQixJQUFNZixhQUFBLEdBQWdCYyxtQkFBQTtBQUN0QixJQUFNUCxjQUFBLEdBQWlCWSxvQkFBQTtBQUN2QixJQUFNYixnQkFBQSxHQUFtQlksc0JBQUE7QUFDekIsSUFBTU0sU0FBQSxHQUFZSixlQUFBO0FBQ2xCLElBQU0xQixNQUFBLEdBQVFlLFdBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==