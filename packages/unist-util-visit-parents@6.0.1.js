System.register(["unist-util-visit-parents@6.0.1/do-not-use-color"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["unist-util-is","6.0.0"],["unist-util-visit-parents","6.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('unist-util-visit-parents@6.0.1/do-not-use-color', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/unist-util-visit-parents.6.0.1.js
var unist_util_visit_parents_6_0_1_exports = {};
__export(unist_util_visit_parents_6_0_1_exports, {
  CONTINUE: () => CONTINUE,
  EXIT: () => EXIT,
  SKIP: () => SKIP,
  visitParents: () => visitParents
});
module.exports = __toCommonJS(unist_util_visit_parents_6_0_1_exports);

// node_modules/unist-util-is/lib/index.js
var is = function (node, test, index, parent, context) {
  const check = convert(test);
  if (index !== void 0 && index !== null && (typeof index !== "number" || index < 0 || index === Number.POSITIVE_INFINITY)) {
    throw new Error("Expected positive finite index");
  }
  if (parent !== void 0 && parent !== null && (!is(parent) || !parent.children)) {
    throw new Error("Expected parent node");
  }
  if ((parent === void 0 || parent === null) !== (index === void 0 || index === null)) {
    throw new Error("Expected both parent and index");
  }
  return looksLikeANode(node) ? check.call(context, node, index, parent) : false;
};
var convert = function (test) {
  if (test === null || test === void 0) {
    return ok;
  }
  if (typeof test === "function") {
    return castFactory(test);
  }
  if (typeof test === "object") {
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  }
  if (typeof test === "string") {
    return typeFactory(test);
  }
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  const checks = [];
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propsFactory(check) {
  const checkAsRecord = check;
  return castFactory(all);
  function all(node) {
    const nodeAsRecord = node;
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index, parent) {
    return Boolean(looksLikeANode(value) && testFunction.call(this, value, typeof index === "number" ? index : void 0, parent || void 0));
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// node_modules/unist-util-visit-parents/lib/index.js
var import_do_not_use_color = require("unist-util-visit-parents@6.0.1/do-not-use-color");
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index, parents) {
    const value = node && typeof node === "object" ? node : {};
    if (typeof value.type === "string") {
      const name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
      Object.defineProperty(visit, "name", {
        value: "node (" + (0, import_do_not_use_color.color)(node.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit;
    function visit() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node, index, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node && node.children) {
        const nodeAsParent = node;
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy42LjAuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbInVuaXN0X3V0aWxfdmlzaXRfcGFyZW50c182XzBfMV9leHBvcnRzIiwiX19leHBvcnQiLCJDT05USU5VRSIsIkVYSVQiLCJTS0lQIiwidmlzaXRQYXJlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImlzIiwibm9kZSIsInRlc3QiLCJpbmRleCIsInBhcmVudCIsImNvbnRleHQiLCJjaGVjayIsImNvbnZlcnQiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsIkVycm9yIiwiY2hpbGRyZW4iLCJsb29rc0xpa2VBTm9kZSIsImNhbGwiLCJvayIsImNhc3RGYWN0b3J5IiwiQXJyYXkiLCJpc0FycmF5IiwiYW55RmFjdG9yeSIsInByb3BzRmFjdG9yeSIsInR5cGVGYWN0b3J5IiwidGVzdHMiLCJjaGVja3MiLCJsZW5ndGgiLCJhbnkiLCJwYXJhbWV0ZXJzIiwiaW5kZXgyIiwiYXBwbHkiLCJjaGVja0FzUmVjb3JkIiwiYWxsIiwibm9kZUFzUmVjb3JkIiwia2V5IiwidHlwZSIsInRlc3RGdW5jdGlvbiIsInZhbHVlIiwiQm9vbGVhbiIsImltcG9ydF9kb19ub3RfdXNlX2NvbG9yIiwicmVxdWlyZSIsImVtcHR5IiwidHJlZSIsInZpc2l0b3IiLCJyZXZlcnNlIiwiaXMyIiwic3RlcCIsImZhY3RvcnkiLCJwYXJlbnRzIiwibmFtZSIsInRhZ05hbWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZpc2l0IiwiY29sb3IiLCJyZXN1bHQiLCJzdWJyZXN1bHQiLCJvZmZzZXQiLCJncmFuZHBhcmVudHMiLCJ0b1Jlc3VsdCIs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SUFBSUMsTUFBQTtNQUVKLElBQUlDLFlBQUE7TUFFSixJQUFJLENBQUNyRCxJQUFBLElBQVF3QyxHQUFBLENBQUd6QyxJQUFBLEVBQU1FLEtBQUEsRUFBTzBDLE9BQUEsQ0FBUUEsT0FBQSxDQUFRdEIsTUFBQSxHQUFTLE1BQU0sTUFBUyxHQUFHO1FBRXRFNkIsTUFBQSxHQUFTSSxRQUFBLENBQVNoQixPQUFBLENBQVF2QyxJQUFBLEVBQU00QyxPQUFPLENBQUM7UUFFeEMsSUFBSU8sTUFBQSxDQUFPLE9BQU8xRCxJQUFBLEVBQU07VUFDdEIsT0FBTzBELE1BQUE7UUFDVDtNQUNGO01BRUEsSUFBSSxjQUFjbkQsSUFBQSxJQUFRQSxJQUFBLENBQUtVLFFBQUEsRUFBVTtRQUN2QyxNQUFNOEMsWUFBQSxHQUEyQ3hELElBQUE7UUFFakQsSUFBSXdELFlBQUEsQ0FBYTlDLFFBQUEsSUFBWXlDLE1BQUEsQ0FBTyxPQUFPekQsSUFBQSxFQUFNO1VBQy9DMkQsTUFBQSxJQUFVYixPQUFBLEdBQVVnQixZQUFBLENBQWE5QyxRQUFBLENBQVNZLE1BQUEsR0FBUyxNQUFNb0IsSUFBQTtVQUN6RFksWUFBQSxHQUFlVixPQUFBLENBQVFhLE1BQUEsQ0FBT0QsWUFBWTtVQUUxQyxPQUFPSCxNQUFBLEdBQVMsTUFBTUEsTUFBQSxHQUFTRyxZQUFBLENBQWE5QyxRQUFBLENBQVNZLE1BQUEsRUFBUTtZQUMzRCxNQUFNb0MsS0FBQSxHQUFRRixZQUFBLENBQWE5QyxRQUFBLENBQVMyQyxNQUFBO1lBRXBDRCxTQUFBLEdBQVlULE9BQUEsQ0FBUWUsS0FBQSxFQUFPTCxNQUFBLEVBQVFDLFlBQVksRUFBRTtZQUVqRCxJQUFJRixTQUFBLENBQVUsT0FBTzNELElBQUEsRUFBTTtjQUN6QixPQUFPMkQsU0FBQTtZQUNUO1lBRUFDLE1BQUEsR0FDRSxPQUFPRCxTQUFBLENBQVUsT0FBTyxXQUFXQSxTQUFBLENBQVUsS0FBS0MsTUFBQSxHQUFTWCxJQUFBO1VBQy9EO1FBQ0Y7TUFDRjtNQUVBLE9BQU9TLE1BQUE7SUFDVDtFQUNGO0FBQ0Y7QUFVQSxTQUFTSSxTQUFTdEIsS0FBQSxFQUFPO0VBQ3ZCLElBQUlsQixLQUFBLENBQU1DLE9BQUEsQ0FBUWlCLEtBQUssR0FBRztJQUN4QixPQUFPQSxLQUFBO0VBQ1Q7RUFFQSxJQUFJLE9BQU9BLEtBQUEsS0FBVSxVQUFVO0lBQzdCLE9BQU8sQ0FBQ3pDLFFBQUEsRUFBVXlDLEtBQUs7RUFDekI7RUFFQSxPQUFPQSxLQUFBLEtBQVUsUUFBUUEsS0FBQSxLQUFVLFNBQVlJLEtBQUEsR0FBUSxDQUFDSixLQUFLO0FBQy9EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=