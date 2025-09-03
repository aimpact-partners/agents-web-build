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

// .beyond/uimport/@radix-ui/react-select.2.2.4.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3Qtc2VsZWN0LjIuMi40LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1zZWxlY3Qvc3JjL3NlbGVjdC50c3giXSwibmFtZXMiOlsicmVhY3Rfc2VsZWN0XzJfMl80X2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFycm93IiwiQXJyb3cyIiwiQ29udGVudCIsIkNvbnRlbnQyIiwiR3JvdXAiLCJJY29uIiwiSXRlbSIsIkl0ZW1JbmRpY2F0b3IiLCJJdGVtVGV4dCIsIkxhYmVsIiwiUG9ydGFsIiwiUm9vdCIsIlJvb3QyIiwiU2Nyb2xsRG93bkJ1dHRvbiIsIlNjcm9sbFVwQnV0dG9uIiwiU2VsZWN0IiwiU2VsZWN0QXJyb3ciLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0R3JvdXAiLCJTZWxlY3RJY29uIiwiU2VsZWN0SXRlbSIsIlNlbGVjdEl0ZW1JbmRpY2F0b3IiLCJTZWxlY3RJdGVtVGV4dCIsIlNlbGVjdExhYmVsIiwiU2VsZWN0UG9ydGFsIiwiU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiIsIlNlbGVjdFNjcm9sbFVwQnV0dG9uIiwiU2VsZWN0U2VwYXJhdG9yIiwiU2VsZWN0VHJpZ2dlciIsIlNlbGVjdFZhbHVlIiwiU2VsZWN0Vmlld3BvcnQiLCJTZXBhcmF0b3IiLCJUcmlnZ2VyIiwiVmFsdWUiLCJWaWV3cG9ydCIsImNyZWF0ZVNlbGVjdFNjb3BlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJSZWFjdERPTSIsImltcG9ydF9udW1iZXIiLCJpbXBvcnRfcHJpbWl0aXZlIiwiaW1wb3J0X3JlYWN0X2NvbGxlY3Rpb24iLCJpbXBvcnRfcmVhY3RfY29tcG9zZV9yZWZzIiwiaW1wb3J0X3JlYWN0X2NvbnRleHQiLCJpbXBvcnRfcmVhY3RfZGlyZWN0aW9uIiwiaW1wb3J0X3JlYWN0X2Rpc21pc3NhYmxlX2xheWVyIiwiaW1wb3J0X3JlYWN0X2ZvY3VzX2d1YXJkcyIsImltcG9ydF9yZWFjdF9mb2N1c19zY29wZSIsImltcG9ydF9yZWFjdF9pZCIsIlBvcHBlclByaW1pdGl2ZSIsImltcG9ydF9yZWFjdF9wb3BwZXIiLCJpbXBvcnRfcmVhY3RfcG9ydGFsIiwiaW1wb3J0X3JlYWN0X3ByaW1pdGl2ZSIsImltcG9ydF9yZWFjdF9zbG90IiwiaW1wb3J0X3JlYWN0X3VzZV9jYWxsYmFja19yZWYiLCJpbXBvcnRfcmVhY3RfdXNlX2NvbnRyb2xsYWJsZV9zdGF0ZSIsImltcG9ydF9yZWFjdF91c2VfbGF5b3V0X2VmZmVjdCIsImltcG9ydF9yZWFjdF91c2VfcHJldmlvdXMiLCJpbXBvcnRfcmVhY3RfdmlzdWFsbHlfaGlkZGVuIiwiaW1wb3J0X2FyaWFfaGlkZGVuIiwiaW1wb3J0X3JlYWN0X3JlbW92ZV9zY3JvbGwiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJPUEVOX0tFWVMiLCJTRUxFQ1RJT05fS0VZUyIsIlNFTEVDVF9OQU1FIiwiQ29sbGVjdGlvbiIsInVzZUNvbGxlY3Rpb24iLCJjcmVhdGVDb2xsZWN0aW9uU2NvcGUiLCJjcmVhdGVDb2xsZWN0aW9uIiwiY3JlYXRlU2VsZWN0Q29udGV4dCIsImNyZWF0ZUNvbnRleHRTY29wZSIsImNyZWF0ZVBvcHBlclNjb3BlIiwidXNlUG9wcGVyU2NvcGUiLCJTZWxlY3RQcm92aWRlciIsInVzZVNlbGVjdENvbnRleHQiLCJTZWxlY3ROYXRpdmVPcHRpb25zUHJvdmlkZXIiLCJ1c2VTZWxlY3ROYXRpdmVPcHRpb25zQ29udGV4dCIsInByb3BzIiwiX19zY29wZVNlbGVjdCIsImNoaWxkcmVuIiwib3BlbiIsIm9wZW5Qcm9wIiwiZGVmYXVsdE9wZW4iLCJvbk9wZW5DaGFuZ2UiLCJ2YWx1ZSIsInZhbHVlUHJvcCIsImRlZmF1bHRWYWx1ZSIsIm9uVmFsdWVDaGFuZ2UiLCJkaXIiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImZvcm0iLCJwb3BwZXJTY29wZSIsInRyaWdnZXIiLCJzZXRUcmlnZ2VyIiwidXNlU3RhdGUiLCJ2YWx1ZU5vZGUiLCJzZXRWYWx1ZU5vZGUiLCJ2YWx1ZU5vZGVIYXNDaGlsZHJlbiIsInNldFZhbHVlTm9kZUhhc0NoaWxkcmVuIiwiZGlyZWN0aW9uIiwidXNlRGlyZWN0aW9uIiwic2V0T3BlbiIsInVzZUNvbnRyb2xsYWJsZVN0YXRlIiwicHJvcCIsImRlZmF1bHRQcm9wIiwib25DaGFuZ2UiLCJjYWxsZXIiLCJzZXRWYWx1ZSIsInRyaWdnZXJQb2ludGVyRG93blBvc1JlZiIsInVzZVJlZiIsImlzRm9ybUNvbnRyb2wiLCJjbG9zZXN0IiwibmF0aXZlT3B0aW9uc1NldCIsInNldE5hdGl2ZU9wdGlvbnNTZXQiLCJTZXQiLCJuYXRpdmVTZWxlY3RLZXkiLCJBcnJheSIsImZyb20iLCJtYXAiLCJvcHRpb24iLCJqb2luIiwianN4IiwianN4cyIsInNjb3BlIiwib25UcmlnZ2VyQ2hhbmdlIiwib25WYWx1ZU5vZGVDaGFuZ2UiLCJvblZhbHVlTm9kZUhhc0NoaWxkcmVuQ2hhbmdlIiwiY29udGVudElkIiwidXNlSWQiLCJQcm92aWRlciIsIm9uTmF0aXZlT3B0aW9uQWRkIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwiYWRkIiwib25OYXRpdmVPcHRpb25SZW1vdmUiLCJvcHRpb25zU2V0IiwiZGVsZXRlIiwiU2VsZWN0QnViYmxlSW5wdXQiLCJ0YWJJbmRleCIsImV2ZW50IiwidGFyZ2V0IiwiZGlzcGxheU5hbWUiLCJUUklHR0VSX05BTUUiLCJmb3J3YXJkUmVmIiwiZm9yd2FyZGVkUmVmIiwidHJpZ2dlclByb3BzIiwiY29udGV4dCIsImlzRGlzYWJsZWQiLCJjb21wb3NlZFJlZnMiLCJ1c2VDb21wb3NlZFJlZnMiLCJnZXRJdGVtcyIsInBvaW50ZXJUeXBlUmVmIiwic2VhcmNoUmVmIiwiaGFuZGxlVHlwZWFoZWFkU2VhcmNoIiwicmVzZXRUeXBlYWhlYWQiLCJ1c2VUeXBlYWhlYWRTZWFyY2giLCJzZWFyY2giLCJlbmFibGVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJmaW5kIiwibmV4dEl0ZW0iLCJmaW5kTmV4dEl0ZW0iLCJoYW5kbGVPcGVuIiwicG9pbnRlckV2ZW50IiwiY3VycmVudCIsIngiLCJNYXRoIiwicm91bmQiLCJwYWdlWCIsInkiLCJwYWdlWSIsIkFuY2hvciIsImFzQ2hpbGQiLCJQcmltaXRpdmUiLCJidXR0b24iLCJ0eXBlIiwicm9sZSIsInNob3VsZFNob3dQbGFjZWhvbGRlciIsInJlZiIsIm9uQ2xpY2siLCJjb21wb3NlRXZlbnRIYW5kbGVycyIsImN1cnJlbnRUYXJnZXQiLCJmb2N1cyIsIm9uUG9pbnRlckRvd24iLCJwb2ludGVyVHlwZSIsImhhc1BvaW50ZXJDYXB0dXJlIiwicG9pbnRlcklkIiwicmVsZWFzZVBvaW50ZXJDYXB0dXJlIiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0Iiwib25LZXlEb3duIiwiaXNUeXBpbmdBaGVhZCIsImlzTW9kaWZpZXJLZXkiLCJhbHRLZXkiLCJtZXRhS2V5Iiwia2V5IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJWQUxVRV9OQU1FIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwbGFjZWhvbGRlciIsInZhbHVlUHJvcHMiLCJoYXNDaGlsZHJlbiIsInVzZUxheW91dEVmZmVjdCIsInNwYW4iLCJwb2ludGVyRXZlbnRzIiwiRnJhZ21lbnQiLCJJQ09OX05BTUUiLCJpY29uUHJvcHMiLCJQT1JUQUxfTkFNRSIsIkNPTlRFTlRfTkFNRSIsImZyYWdtZW50Iiwic2V0RnJhZ21lbnQiLCJEb2N1bWVudEZyYWdtZW50IiwiZnJhZyIsImNyZWF0ZVBvcnRhbCIsIlNlbGVjdENvbnRlbnRQcm92aWRlciIsIlNsb3QiLCJTZWxlY3RDb250ZW50SW1wbCIsIkNPTlRFTlRfTUFSR0lOIiwidXNlU2VsZWN0Q29udGVudENvbnRleHQiLCJDT05URU5UX0lNUExfTkFNRSIsImNyZWF0ZVNsb3QiLCJwb3NpdGlvbiIsIm9uQ2xvc2VBdXRvRm9jdXMiLCJvbkVzY2FwZUtleURvd24iLCJvblBvaW50ZXJEb3duT3V0c2lkZSIsInNpZGUiLCJzaWRlT2Zmc2V0IiwiYWxpZ24iLCJhbGlnbk9mZnNldCIsImFycm93UGFkZGluZyIsImNvbGxpc2lvbkJvdW5kYXJ5IiwiY29sbGlzaW9uUGFkZGluZyIsInN0aWNreSIsImhpZGVXaGVuRGV0YWNoZWQiLCJhdm9pZENvbGxpc2lvbnMiLCJjb250ZW50UHJvcHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJub2RlIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtVGV4dCIsInNldFNlbGVjdGVkSXRlbVRleHQiLCJpc1Bvc2l0aW9uZWQiLCJzZXRJc1Bvc2l0aW9uZWQiLCJmaXJzdFZhbGlkSXRlbUZvdW5kUmVmIiwidXNlRWZmZWN0IiwiaGlkZU90aGVycyIsInVzZUZvY3VzR3VhcmRzIiwiZm9jdXNGaXJzdCIsImNhbmRpZGF0ZXMiLCJmaXJzdEl0ZW0iLCJyZXN0SXRlbXMiLCJsYXN0SXRlbSIsInNsaWNlIiwiUFJFVklPVVNMWV9GT0NVU0VEX0VMRU1FTlQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjYW5kaWRhdGUiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiZm9jdXNTZWxlY3RlZEl0ZW0iLCJwb2ludGVyTW92ZURlbHRhIiwiaGFuZGxlUG9pbnRlck1vdmUiLCJhYnMiLCJoYW5kbGVQb2ludGVyVXAiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FwdHVyZSIsIm9uY2UiLCJjbG9zZSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJpdGVtUmVmQ2FsbGJhY2siLCJpc0ZpcnN0VmFsaWRJdGVtIiwiaXNTZWxlY3RlZEl0ZW0iLCJoYW5kbGVJdGVtTGVhdmUiLCJpdGVtVGV4dFJlZkNhbGxiYWNrIiwiU2VsZWN0UG9zaXRpb24iLCJTZWxlY3RQb3BwZXJQb3NpdGlvbiIsIlNlbGVjdEl0ZW1BbGlnbmVkUG9zaXRpb24iLCJwb3BwZXJDb250ZW50UHJvcHMiLCJvblZpZXdwb3J0Q2hhbmdlIiwib25JdGVtTGVhdmUiLCJSZW1vdmVTY3JvbGwiLCJhcyIsImFsbG93UGluY2hab29tIiwiRm9jdXNTY29wZSIsInRyYXBwZWQiLCJvbk1vdW50QXV0b0ZvY3VzIiwib25Vbm1vdW50QXV0b0ZvY3VzIiwicHJldmVudFNjcm9sbCIsIkRpc21pc3NhYmxlTGF5ZXIiLCJkaXNhYmxlT3V0c2lkZVBvaW50ZXJFdmVudHMiLCJvbkZvY3VzT3V0c2lkZSIsIm9uRGlzbWlzcyIsImlkIiwib25Db250ZXh0TWVudSIsIm9uUGxhY2VkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJvdXRsaW5lIiwiaXRlbXMiLCJjYW5kaWRhdGVOb2RlcyIsInJldmVyc2UiLCJjdXJyZW50RWxlbWVudCIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJJVEVNX0FMSUdORURfUE9TSVRJT05fTkFNRSIsInBvcHBlclByb3BzIiwiY29udGVudENvbnRleHQiLCJjb250ZW50V3JhcHBlciIsInNldENvbnRlbnRXcmFwcGVyIiwic2hvdWxkRXhwYW5kT25TY3JvbGxSZWYiLCJzaG91bGRSZXBvc2l0aW9uUmVmIiwidHJpZ2dlclJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb250ZW50UmVjdCIsInZhbHVlTm9kZVJlY3QiLCJpdGVtVGV4dFJlY3QiLCJpdGVtVGV4dE9mZnNldCIsImxlZnQiLCJsZWZ0RGVsdGEiLCJtaW5Db250ZW50V2lkdGgiLCJ3aWR0aCIsImNvbnRlbnRXaWR0aCIsIm1heCIsInJpZ2h0RWRnZSIsImlubmVyV2lkdGgiLCJjbGFtcGVkTGVmdCIsImNsYW1wIiwibWluV2lkdGgiLCJyaWdodCIsInJpZ2h0RGVsdGEiLCJsZWZ0RWRnZSIsImNsYW1wZWRSaWdodCIsImF2YWlsYWJsZUhlaWdodCIsImlubmVySGVpZ2h0IiwiaXRlbXNIZWlnaHQiLCJjb250ZW50U3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbnRlbnRCb3JkZXJUb3BXaWR0aCIsInBhcnNlSW50IiwiYm9yZGVyVG9wV2lkdGgiLCJjb250ZW50UGFkZGluZ1RvcCIsInBhZGRpbmdUb3AiLCJjb250ZW50Qm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsImNvbnRlbnRQYWRkaW5nQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsImZ1bGxDb250ZW50SGVpZ2h0IiwibWluQ29udGVudEhlaWdodCIsIm1pbiIsIm9mZnNldEhlaWdodCIsInZpZXdwb3J0U3R5bGVzIiwidmlld3BvcnRQYWRkaW5nVG9wIiwidmlld3BvcnRQYWRkaW5nQm90dG9tIiwidG9wRWRnZVRvVHJpZ2dlck1pZGRsZSIsInRvcCIsImhlaWdodCIsInRyaWdnZXJNaWRkbGVUb0JvdHRvbUVkZ2UiLCJzZWxlY3RlZEl0ZW1IYWxmSGVpZ2h0IiwiaXRlbU9mZnNldE1pZGRsZSIsIm9mZnNldFRvcCIsImNvbnRlbnRUb3BUb0l0ZW1NaWRkbGUiLCJpdGVtTWlkZGxlVG9Db250ZW50Qm90dG9tIiwid2lsbEFsaWduV2l0aG91dFRvcE92ZXJmbG93IiwiaXNMYXN0SXRlbSIsImJvdHRvbSIsInZpZXdwb3J0T2Zmc2V0Qm90dG9tIiwiY2xpZW50SGVpZ2h0IiwiY2xhbXBlZFRyaWdnZXJNaWRkbGVUb0JvdHRvbUVkZ2UiLCJpc0ZpcnN0SXRlbSIsImNsYW1wZWRUb3BFZGdlVG9UcmlnZ2VyTWlkZGxlIiwibWFyZ2luIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGVudFpJbmRleCIsInNldENvbnRlbnRaSW5kZXgiLCJ6SW5kZXgiLCJoYW5kbGVTY3JvbGxCdXR0b25DaGFuZ2UiLCJTZWxlY3RWaWV3cG9ydFByb3ZpZGVyIiwib25TY3JvbGxCdXR0b25DaGFuZ2UiLCJkaXYiLCJib3hTaXppbmciLCJQT1BQRVJfUE9TSVRJT05fTkFNRSIsInVzZVNlbGVjdFZpZXdwb3J0Q29udGV4dCIsIlZJRVdQT1JUX05BTUUiLCJub25jZSIsInZpZXdwb3J0UHJvcHMiLCJ2aWV3cG9ydENvbnRleHQiLCJwcmV2U2Nyb2xsVG9wUmVmIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJmbGV4Iiwib3ZlcmZsb3ciLCJvblNjcm9sbCIsInNjcm9sbGVkQnkiLCJjc3NNaW5IZWlnaHQiLCJwYXJzZUZsb2F0IiwiY3NzSGVpZ2h0IiwicHJldkhlaWdodCIsIm5leHRIZWlnaHQiLCJjbGFtcGVkTmV4dEhlaWdodCIsImhlaWdodERpZmYiLCJqdXN0aWZ5Q29udGVudCIsIkdST1VQX05BTUUiLCJTZWxlY3RHcm91cENvbnRleHRQcm92aWRlciIsInVzZVNlbGVjdEdyb3VwQ29udGV4dCIsImdyb3VwUHJvcHMiLCJncm91cElkIiwiTEFCRUxfTkFNRSIsImxhYmVsUHJvcHMiLCJncm91cENvbnRleHQiLCJJVEVNX05BTUUiLCJTZWxlY3RJdGVtQ29udGV4dFByb3ZpZGVyIiwidXNlU2VsZWN0SXRlbUNvbnRleHQiLCJ0ZXh0VmFsdWUiLCJ0ZXh0VmFsdWVQcm9wIiwiaXRlbVByb3BzIiwiaXNTZWxlY3RlZCIsInNldFRleHRWYWx1ZSIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsInRleHRJZCIsImhhbmRsZVNlbGVjdCIsIkVycm9yIiwib25JdGVtVGV4dENoYW5nZSIsInByZXZUZXh0VmFsdWUiLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJJdGVtU2xvdCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvblBvaW50ZXJVcCIsIm9uUG9pbnRlck1vdmUiLCJvblBvaW50ZXJMZWF2ZSIsIklURU1fVEVYVF9OQU1FIiwiaXRlbVRleHRQcm9wcyIsIml0ZW1Db250ZXh0IiwibmF0aXZlT3B0aW9uc0NvbnRleHQiLCJpdGVtVGV4dE5vZGUiLCJzZXRJdGVtVGV4dE5vZGUiLCJuYXRpdmVPcHRpb24iLCJ1c2VNZW1vIiwiSVRFTV9JTkRJQ0FUT1JfTkFNRSIsIml0ZW1JbmRpY2F0b3JQcm9wcyIsIlNDUk9MTF9VUF9CVVRUT05fTkFNRSIsImNhblNjcm9sbFVwIiwic2V0Q2FuU2Nyb2xsVXAiLCJoYW5kbGVTY3JvbGwyIiwiaGFuZGxlU2Nyb2xsIiwiY2FuU2Nyb2xsVXAyIiwiU2VsZWN0U2Nyb2xsQnV0dG9uSW1wbCIsIm9uQXV0b1Njcm9sbCIsIlNDUk9MTF9ET1dOX0JVVFRPTl9OQU1FIiwiY2FuU2Nyb2xsRG93biIsInNldENhblNjcm9sbERvd24iLCJtYXhTY3JvbGwiLCJjYW5TY3JvbGxEb3duMiIsImNlaWwiLCJzY3JvbGxJbmRpY2F0b3JQcm9wcyIsImF1dG9TY3JvbGxUaW1lclJlZiIsImNsZWFyQXV0b1Njcm9sbFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImFjdGl2ZUl0ZW0iLCJmbGV4U2hyaW5rIiwic2V0SW50ZXJ2YWwiLCJTRVBBUkFUT1JfTkFNRSIsInNlcGFyYXRvclByb3BzIiwiQVJST1dfTkFNRSIsImFycm93UHJvcHMiLCJCVUJCTEVfSU5QVVRfTkFNRSIsInByZXZWYWx1ZSIsInVzZVByZXZpb3VzIiwic2VsZWN0Iiwic2VsZWN0UHJvdG8iLCJIVE1MU2VsZWN0RWxlbWVudCIsInByb3RvdHlwZSIsImRlc2NyaXB0b3IiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJzZXQiLCJFdmVudCIsImJ1YmJsZXMiLCJjYWxsIiwiZGlzcGF0Y2hFdmVudCIsIlZJU1VBTExZX0hJRERFTl9TVFlMRVMiLCJvblNlYXJjaENoYW5nZSIsImhhbmRsZVNlYXJjaENoYW5nZSIsInVzZUNhbGxiYWNrUmVmIiwidGltZXJSZWYiLCJ1cGRhdGVTZWFyY2giLCJjbGVhclRpbWVvdXQiLCJpc1JlcGVhdGVkIiwiZXZlcnkiLCJjaGFyIiwibm9ybWFsaXplZFNlYXJjaCIsImN1cnJlbnRJdGVtSW5kZXgiLCJ3cmFwcGVkSXRlbXMiLCJ3cmFwQXJyYXkiLCJleGNsdWRlQ3VycmVudEl0ZW0iLCJ2IiwidG9Mb3dlckNhc2UiLCJz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aUIsT0FBQSxHQUFVSixhQUFBO0FBQ2hCLElBQU1LLEtBQUEsR0FBUUosV0FBQTtBQUNkLElBQU14QixJQUFBLEdBQU9jLFVBQUE7QUFDYixJQUFNVCxNQUFBLEdBQVNjLFlBQUE7QUFDZixJQUFNckIsUUFBQSxHQUFVYyxhQUFBO0FBQ2hCLElBQU1pQixRQUFBLEdBQVdKLGNBQUE7QUFDakIsSUFBTTFCLEtBQUEsR0FBUWMsV0FBQTtBQUNkLElBQU1ULEtBQUEsR0FBUWMsV0FBQTtBQUNkLElBQU1qQixJQUFBLEdBQU9jLFVBQUE7QUFDYixJQUFNWixRQUFBLEdBQVdjLGNBQUE7QUFDakIsSUFBTWYsYUFBQSxHQUFnQmMsbUJBQUE7QUFDdEIsSUFBTVAsY0FBQSxHQUFpQlksb0JBQUE7QUFDdkIsSUFBTWIsZ0JBQUEsR0FBbUJZLHNCQUFBO0FBQ3pCLElBQU1NLFNBQUEsR0FBWUosZUFBQTtBQUNsQixJQUFNMUIsTUFBQSxHQUFRZSxXQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=