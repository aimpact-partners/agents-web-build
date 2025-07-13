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

// .beyond/uimport/@radix-ui/react-context.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC4xLjEuMi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29udGV4dC9zcmMvY3JlYXRlLWNvbnRleHQudHN4Il0sIm5hbWVzIjpbInJlYWN0X2NvbnRleHRfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY3JlYXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQyIiwiY3JlYXRlQ29udGV4dFNjb3BlIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJpbXBvcnRfanN4X3J1bnRpbWUiLCJyb290Q29tcG9uZW50TmFtZSIsImRlZmF1bHRDb250ZXh0IiwiQ29udGV4dCIsIlByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbnRleHQiLCJ2YWx1ZSIsInVzZU1lbW8iLCJPYmplY3QiLCJ2YWx1ZXMiLCJqc3giLCJkaXNwbGF5TmFtZSIsInVzZUNvbnRleHQyIiwiY29uc3VtZXJOYW1lIiwidXNlQ29udGV4dCIsIkVycm9yIiwic2NvcGVOYW1lIiwiY3JlYXRlQ29udGV4dFNjb3BlRGVwcyIsImRlZmF1bHRDb250ZXh0cyIsImNyZWF0ZUNvbnRleHQzIiwiQmFzZUNvbnRleHQiLCJpbmRleCIsImxlbmd0aCIsInNjb3BlIiwiY3JlYXRlU2NvcGUiLCJzY29wZUNvbnRleHRzIiwibWFwIiwidXNlU2NvcGUiLCJjb250ZXh0cyIsImNvbXBvc2VDb250ZXh0U2NvcGVzIiwic2NvcGVzIiwiYmFzZVNjb3BlIiwic2NvcGVIb29rcyIsImNyZWF0ZVNjb3BlMiIsInVzZUNvbXBvc2VkU2NvcGVzIiwib3ZlcnJpZGVTY29wZXMiLCJuZXh0U2NvcGVzIiwicmVkdWNlIiwibmV4dFNjb3BlczIiLCJzY29wZVByb3BzIiwiY3VycmVudFNjb3BlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFVBQUEsR0FBYUosVUFBQSxDQUFXSyxNQUFBLENBQU8sQ0FBQ0MsV0FBQSxFQUFZO1FBQUVYLFFBQUE7UUFBVVg7TUFBVSxNQUFNO1FBSTVFLE1BQU11QixVQUFBLEdBQWFaLFFBQUEsQ0FBU1EsY0FBYztRQUMxQyxNQUFNSyxZQUFBLEdBQWVELFVBQUEsQ0FBVyxVQUFVdkIsU0FBQTtRQUMxQyxPQUFPO1VBQUUsR0FBR3NCLFdBQUE7VUFBWSxHQUFHRTtRQUFhO01BQzFDLEdBQUcsQ0FBQyxDQUFDO01BRUwsT0FBYTdDLEtBQUEsQ0FBQVksT0FBQSxDQUFRLE9BQU87UUFBRSxDQUFDLFVBQVV3QixTQUFBLENBQVVmLFNBQUEsS0FBY29CO01BQVcsSUFBSSxDQUFDQSxVQUFVLENBQUM7SUFDOUY7RUFDRjtFQUVBWixXQUFBLENBQVlSLFNBQUEsR0FBWWUsU0FBQSxDQUFVZixTQUFBO0VBQ2xDLE9BQU9RLFdBQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=