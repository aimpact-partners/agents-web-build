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

// .beyond/uimport/unist-util-visit-parents.6.0.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMuNi4wLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1bmlzdF91dGlsX3Zpc2l0X3BhcmVudHNfNl8wXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiQ09OVElOVUUiLCJFWElUIiwiU0tJUCIsInZpc2l0UGFyZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJpcyIsIm5vZGUiLCJ0ZXN0IiwiaW5kZXgiLCJwYXJlbnQiLCJjb250ZXh0IiwiY2hlY2siLCJjb252ZXJ0IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJFcnJvciIsImNoaWxkcmVuIiwibG9va3NMaWtlQU5vZGUiLCJjYWxsIiwib2siLCJjYXN0RmFjdG9yeSIsIkFycmF5IiwiaXNBcnJheSIsImFueUZhY3RvcnkiLCJwcm9wc0ZhY3RvcnkiLCJ0eXBlRmFjdG9yeSIsInRlc3RzIiwiY2hlY2tzIiwibGVuZ3RoIiwiYW55IiwicGFyYW1ldGVycyIsImluZGV4MiIsImFwcGx5IiwiY2hlY2tBc1JlY29yZCIsImFsbCIsIm5vZGVBc1JlY29yZCIsImtleSIsInR5cGUiLCJ0ZXN0RnVuY3Rpb24iLCJ2YWx1ZSIsIkJvb2xlYW4iLCJpbXBvcnRfZG9fbm90X3VzZV9jb2xvciIsInJlcXVpcmUiLCJlbXB0eSIsInRyZWUiLCJ2aXNpdG9yIiwicmV2ZXJzZSIsImlzMiIsInN0ZXAiLCJmYWN0b3J5IiwicGFyZW50cyIsIm5hbWUiLCJ0YWdOYW1lIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2aXNpdCIsImNvbG9yIiwicmVzdWx0Iiwic3VicmVzdWx0Iiwib2Zmc2V0IiwiZ3JhbmRwYXJlbnRzIiwidG9SZXN1bHQiLCJub2Rl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LE1BQUE7TUFFSixJQUFJQyxZQUFBO01BRUosSUFBSSxDQUFDckQsSUFBQSxJQUFRd0MsR0FBQSxDQUFHekMsSUFBQSxFQUFNRSxLQUFBLEVBQU8wQyxPQUFBLENBQVFBLE9BQUEsQ0FBUXRCLE1BQUEsR0FBUyxNQUFNLE1BQVMsR0FBRztRQUV0RTZCLE1BQUEsR0FBU0ksUUFBQSxDQUFTaEIsT0FBQSxDQUFRdkMsSUFBQSxFQUFNNEMsT0FBTyxDQUFDO1FBRXhDLElBQUlPLE1BQUEsQ0FBTyxPQUFPMUQsSUFBQSxFQUFNO1VBQ3RCLE9BQU8wRCxNQUFBO1FBQ1Q7TUFDRjtNQUVBLElBQUksY0FBY25ELElBQUEsSUFBUUEsSUFBQSxDQUFLVSxRQUFBLEVBQVU7UUFDdkMsTUFBTThDLFlBQUEsR0FBMkN4RCxJQUFBO1FBRWpELElBQUl3RCxZQUFBLENBQWE5QyxRQUFBLElBQVl5QyxNQUFBLENBQU8sT0FBT3pELElBQUEsRUFBTTtVQUMvQzJELE1BQUEsSUFBVWIsT0FBQSxHQUFVZ0IsWUFBQSxDQUFhOUMsUUFBQSxDQUFTWSxNQUFBLEdBQVMsTUFBTW9CLElBQUE7VUFDekRZLFlBQUEsR0FBZVYsT0FBQSxDQUFRYSxNQUFBLENBQU9ELFlBQVk7VUFFMUMsT0FBT0gsTUFBQSxHQUFTLE1BQU1BLE1BQUEsR0FBU0csWUFBQSxDQUFhOUMsUUFBQSxDQUFTWSxNQUFBLEVBQVE7WUFDM0QsTUFBTW9DLEtBQUEsR0FBUUYsWUFBQSxDQUFhOUMsUUFBQSxDQUFTMkMsTUFBQTtZQUVwQ0QsU0FBQSxHQUFZVCxPQUFBLENBQVFlLEtBQUEsRUFBT0wsTUFBQSxFQUFRQyxZQUFZLEVBQUU7WUFFakQsSUFBSUYsU0FBQSxDQUFVLE9BQU8zRCxJQUFBLEVBQU07Y0FDekIsT0FBTzJELFNBQUE7WUFDVDtZQUVBQyxNQUFBLEdBQ0UsT0FBT0QsU0FBQSxDQUFVLE9BQU8sV0FBV0EsU0FBQSxDQUFVLEtBQUtDLE1BQUEsR0FBU1gsSUFBQTtVQUMvRDtRQUNGO01BQ0Y7TUFFQSxPQUFPUyxNQUFBO0lBQ1Q7RUFDRjtBQUNGO0FBVUEsU0FBU0ksU0FBU3RCLEtBQUEsRUFBTztFQUN2QixJQUFJbEIsS0FBQSxDQUFNQyxPQUFBLENBQVFpQixLQUFLLEdBQUc7SUFDeEIsT0FBT0EsS0FBQTtFQUNUO0VBRUEsSUFBSSxPQUFPQSxLQUFBLEtBQVUsVUFBVTtJQUM3QixPQUFPLENBQUN6QyxRQUFBLEVBQVV5QyxLQUFLO0VBQ3pCO0VBRUEsT0FBT0EsS0FBQSxLQUFVLFFBQVFBLEtBQUEsS0FBVSxTQUFZSSxLQUFBLEdBQVEsQ0FBQ0osS0FBSztBQUMvRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9