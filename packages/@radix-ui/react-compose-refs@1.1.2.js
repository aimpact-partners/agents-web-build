System.register(["react@18.3.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["react","18.3.1"],["@radix-ui/react-compose-refs","1.1.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.3.1', dep)],
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

// .beyond/uimport/temp/@radix-ui/react-compose-refs.1.1.2.js
var react_compose_refs_1_1_2_exports = {};
__export(react_compose_refs_1_1_2_exports, {
  composeRefs: () => composeRefs,
  useComposedRefs: () => useComposedRefs
});
module.exports = __toCommonJS(react_compose_refs_1_1_2_exports);

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React = __toESM(require("react@18.3.1"), 0);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return node => {
    let hasCleanup = false;
    const cleanups = refs.map(ref => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React.useCallback(composeRefs(...refs), refs);
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMuMS4xLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LWNvbXBvc2UtcmVmcy9zcmMvY29tcG9zZS1yZWZzLnRzeCJdLCJuYW1lcyI6WyJyZWFjdF9jb21wb3NlX3JlZnNfMV8xXzJfZXhwb3J0cyIsIl9fZXhwb3J0IiwiY29tcG9zZVJlZnMiLCJ1c2VDb21wb3NlZFJlZnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUmVhY3QiLCJfX3RvRVNNIiwicmVxdWlyZSIsInNldFJlZiIsInJlZiIsInZhbHVlIiwiY3VycmVudCIsInJlZnMiLCJub2RlIiwiaGFzQ2xlYW51cCIsImNsZWFudXBzIiwibWFwIiwiY2xlYW51cCIsImkiLCJsZW5ndGgiLCJ1c2VDYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0NBQUE7QUFBQUMsUUFBQSxDQUFBRCxnQ0FBQTtFQUFBRSxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBTixnQ0FBQTs7O0FDQUEsSUFBQU8sS0FBQSxHQUF1QkMsT0FBQSxDQUFBQyxPQUFBO0FBUXZCLFNBQVNDLE9BQVVDLEdBQUEsRUFBcUJDLEtBQUEsRUFBVTtFQUNoRCxJQUFJLE9BQU9ELEdBQUEsS0FBUSxZQUFZO0lBQzdCLE9BQU9BLEdBQUEsQ0FBSUMsS0FBSztFQUNsQixXQUFXRCxHQUFBLEtBQVEsUUFBUUEsR0FBQSxLQUFRLFFBQVc7SUFDNUNBLEdBQUEsQ0FBSUUsT0FBQSxHQUFVRCxLQUFBO0VBQ2hCO0FBQ0Y7QUFNQSxTQUFTVixZQUFBLEdBQWtCWSxJQUFBLEVBQThDO0VBQ3ZFLE9BQVFDLElBQUEsSUFBUztJQUNmLElBQUlDLFVBQUEsR0FBYTtJQUNqQixNQUFNQyxRQUFBLEdBQVdILElBQUEsQ0FBS0ksR0FBQSxDQUFLUCxHQUFBLElBQVE7TUFDakMsTUFBTVEsT0FBQSxHQUFVVCxNQUFBLENBQU9DLEdBQUEsRUFBS0ksSUFBSTtNQUNoQyxJQUFJLENBQUNDLFVBQUEsSUFBYyxPQUFPRyxPQUFBLElBQVcsWUFBWTtRQUMvQ0gsVUFBQSxHQUFhO01BQ2Y7TUFDQSxPQUFPRyxPQUFBO0lBQ1QsQ0FBQztJQU1ELElBQUlILFVBQUEsRUFBWTtNQUNkLE9BQU8sTUFBTTtRQUNYLFNBQVNJLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlILFFBQUEsQ0FBU0ksTUFBQSxFQUFRRCxDQUFBLElBQUs7VUFDeEMsTUFBTUQsT0FBQSxHQUFVRixRQUFBLENBQVNHLENBQUE7VUFDekIsSUFBSSxPQUFPRCxPQUFBLElBQVcsWUFBWTtZQUNoQ0EsT0FBQSxDQUFRO1VBQ1YsT0FBTztZQUNMVCxNQUFBLENBQU9JLElBQUEsQ0FBS00sQ0FBQSxHQUFJLElBQUk7VUFDdEI7UUFDRjtNQUNGO0lBQ0Y7RUFDRjtBQUNGO0FBTUEsU0FBU2pCLGdCQUFBLEdBQXNCVyxJQUFBLEVBQThDO0VBRTNFLE9BQWFQLEtBQUEsQ0FBQWUsV0FBQSxDQUFZcEIsV0FBQSxDQUFZLEdBQUdZLElBQUksR0FBR0EsSUFBSTtBQUNyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9