System.register(["react@18.3.1","react@18.3.1/jsx-runtime"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-context","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep), dep => dependencies.set('react@18.3.1/jsx-runtime', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-context.1.1.2.js
var react_context_1_1_2_exports = {};
__export(react_context_1_1_2_exports, {
  createContext: () => createContext2,
  createContextScope: () => createContextScope
});
module.exports = __toCommonJS(react_context_1_1_2_exports);

// node_modules/@radix-ui/react-context/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
var import_jsx_runtime = require("react@18.3.1/jsx-runtime");
function createContext2(rootComponentName, defaultContext) {
  const Context = React.createContext(defaultContext);
  const Provider = props => {
    const {
      children,
      ...context
    } = props;
    const value = React.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Context.Provider, {
      value,
      children
    });
  };
  Provider.displayName = rootComponentName + "Provider";
  function useContext2(consumerName) {
    const context = React.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = props => {
      const {
        scope,
        children,
        ...context
      } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */(0, import_jsx_runtime.jsx)(Context.Provider, {
        value,
        children
      });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map(defaultContext => {
      return React.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React.useMemo(() => ({
        [`__scope${scopeName}`]: {
          ...scope,
          [scopeName]: contexts
        }
      }), [scope, contexts]);
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map(createScope2 => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, {
        useScope,
        scopeName
      }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return {
          ...nextScopes2,
          ...currentScope
        };
      }, {});
      return React.useMemo(() => ({
        [`__scope${baseScope.scopeName}`]: nextScopes
      }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0LjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb250ZXh0L3NyYy9jcmVhdGUtY29udGV4dC50c3giXSwibmFtZXMiOlsicmVhY3RfY29udGV4dF8xXzFfMl9leHBvcnRzIiwiX19leHBvcnQiLCJjcmVhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dDIiLCJjcmVhdGVDb250ZXh0U2NvcGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsImltcG9ydF9qc3hfcnVudGltZSIsInJvb3RDb21wb25lbnROYW1lIiwiZGVmYXVsdENvbnRleHQiLCJDb250ZXh0IiwiUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiY29udGV4dCIsInZhbHVlIiwidXNlTWVtbyIsIk9iamVjdCIsInZhbHVlcyIsImpzeCIsImRpc3BsYXlOYW1lIiwidXNlQ29udGV4dDIiLCJjb25zdW1lck5hbWUiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJzY29wZU5hbWUiLCJjcmVhdGVDb250ZXh0U2NvcGVEZXBzIiwiZGVmYXVsdENvbnRleHRzIiwiY3JlYXRlQ29udGV4dDMiLCJCYXNlQ29udGV4dCIsImluZGV4IiwibGVuZ3RoIiwic2NvcGUiLCJjcmVhdGVTY29wZSIsInNjb3BlQ29udGV4dHMiLCJtYXAiLCJ1c2VTY29wZSIsImNvbnRleHRzIiwiY29tcG9zZUNvbnRleHRTY29wZXMiLCJzY29wZXMiLCJiYXNlU2NvcGUiLCJzY29wZUhvb2tzIiwiY3JlYXRlU2NvcGUyIiwidXNlQ29tcG9zZWRTY29wZXMiLCJvdmVycmlkZVNjb3BlcyIsIm5leHRTY29wZXMiLCJyZWR1Y2UiLCJuZXh0U2NvcGVzMiIsInNjb3BlUHJvcHMiLCJjdXJyZW50U2NvcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBTUMsVUFBQSxHQUFhSixVQUFBLENBQVdLLE1BQUEsQ0FBTyxDQUFDQyxXQUFBLEVBQVk7UUFBRVgsUUFBQTtRQUFVWDtNQUFVLE1BQU07UUFJNUUsTUFBTXVCLFVBQUEsR0FBYVosUUFBQSxDQUFTUSxjQUFjO1FBQzFDLE1BQU1LLFlBQUEsR0FBZUQsVUFBQSxDQUFXLFVBQVV2QixTQUFBO1FBQzFDLE9BQU87VUFBRSxHQUFHc0IsV0FBQTtVQUFZLEdBQUdFO1FBQWE7TUFDMUMsR0FBRyxDQUFDLENBQUM7TUFFTCxPQUFhN0MsS0FBQSxDQUFBWSxPQUFBLENBQVEsT0FBTztRQUFFLENBQUMsVUFBVXdCLFNBQUEsQ0FBVWYsU0FBQSxLQUFjb0I7TUFBVyxJQUFJLENBQUNBLFVBQVUsQ0FBQztJQUM5RjtFQUNGO0VBRUFaLFdBQUEsQ0FBWVIsU0FBQSxHQUFZZSxTQUFBLENBQVVmLFNBQUE7RUFDbEMsT0FBT1EsV0FBQTtBQUNUIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=