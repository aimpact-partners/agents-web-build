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

// .beyond/uimport/@radix-ui/react-compose-refs.1.1.2.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AcmFkaXgtdWkvcmVhY3QtY29tcG9zZS1yZWZzLjEuMS4yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMvc3JjL2NvbXBvc2UtcmVmcy50c3giXSwibmFtZXMiOlsicmVhY3RfY29tcG9zZV9yZWZzXzFfMV8yX2V4cG9ydHMiLCJfX2V4cG9ydCIsImNvbXBvc2VSZWZzIiwidXNlQ29tcG9zZWRSZWZzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwiX190b0VTTSIsInJlcXVpcmUiLCJzZXRSZWYiLCJyZWYiLCJ2YWx1ZSIsImN1cnJlbnQiLCJyZWZzIiwibm9kZSIsImhhc0NsZWFudXAiLCJjbGVhbnVwcyIsIm1hcCIsImNsZWFudXAiLCJpIiwibGVuZ3RoIiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGdDQUFBO0FBQUFDLFFBQUEsQ0FBQUQsZ0NBQUE7RUFBQUUsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQU4sZ0NBQUE7OztBQ0FBLElBQUFPLEtBQUEsR0FBdUJDLE9BQUEsQ0FBQUMsT0FBQTtBQVF2QixTQUFTQyxPQUFVQyxHQUFBLEVBQXFCQyxLQUFBLEVBQVU7RUFDaEQsSUFBSSxPQUFPRCxHQUFBLEtBQVEsWUFBWTtJQUM3QixPQUFPQSxHQUFBLENBQUlDLEtBQUs7RUFDbEIsV0FBV0QsR0FBQSxLQUFRLFFBQVFBLEdBQUEsS0FBUSxRQUFXO0lBQzVDQSxHQUFBLENBQUlFLE9BQUEsR0FBVUQsS0FBQTtFQUNoQjtBQUNGO0FBTUEsU0FBU1YsWUFBQSxHQUFrQlksSUFBQSxFQUE4QztFQUN2RSxPQUFRQyxJQUFBLElBQVM7SUFDZixJQUFJQyxVQUFBLEdBQWE7SUFDakIsTUFBTUMsUUFBQSxHQUFXSCxJQUFBLENBQUtJLEdBQUEsQ0FBS1AsR0FBQSxJQUFRO01BQ2pDLE1BQU1RLE9BQUEsR0FBVVQsTUFBQSxDQUFPQyxHQUFBLEVBQUtJLElBQUk7TUFDaEMsSUFBSSxDQUFDQyxVQUFBLElBQWMsT0FBT0csT0FBQSxJQUFXLFlBQVk7UUFDL0NILFVBQUEsR0FBYTtNQUNmO01BQ0EsT0FBT0csT0FBQTtJQUNULENBQUM7SUFNRCxJQUFJSCxVQUFBLEVBQVk7TUFDZCxPQUFPLE1BQU07UUFDWCxTQUFTSSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJSCxRQUFBLENBQVNJLE1BQUEsRUFBUUQsQ0FBQSxJQUFLO1VBQ3hDLE1BQU1ELE9BQUEsR0FBVUYsUUFBQSxDQUFTRyxDQUFBO1VBQ3pCLElBQUksT0FBT0QsT0FBQSxJQUFXLFlBQVk7WUFDaENBLE9BQUEsQ0FBUTtVQUNWLE9BQU87WUFDTFQsTUFBQSxDQUFPSSxJQUFBLENBQUtNLENBQUEsR0FBSSxJQUFJO1VBQ3RCO1FBQ0Y7TUFDRjtJQUNGO0VBQ0Y7QUFDRjtBQU1BLFNBQVNqQixnQkFBQSxHQUFzQlcsSUFBQSxFQUE4QztFQUUzRSxPQUFhUCxLQUFBLENBQUFlLFdBQUEsQ0FBWXBCLFdBQUEsQ0FBWSxHQUFHWSxJQUFJLEdBQUdBLElBQUk7QUFDckQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==