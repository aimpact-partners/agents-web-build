System.register(["is-plain-object@5.0.0","immer@10.1.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["is-plain-object","5.0.0"],["immer","10.1.1"],["slate","0.114.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('is-plain-object@5.0.0', dep), dep => dependencies.set('immer@10.1.1', dep)],
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

// .beyond/uimport/slate.0.114.0.js
var slate_0_114_0_exports = {};
__export(slate_0_114_0_exports, {
  Editor: () => Editor,
  Element: () => Element,
  Location: () => Location,
  Node: () => Node,
  Operation: () => Operation,
  Path: () => Path,
  PathRef: () => PathRef,
  Point: () => Point,
  PointRef: () => PointRef,
  Range: () => Range,
  RangeRef: () => RangeRef,
  Scrubber: () => Scrubber,
  Span: () => Span,
  Text: () => Text,
  Transforms: () => Transforms,
  above: () => above,
  addMark: () => addMark,
  after: () => after,
  apply: () => apply,
  before: () => before,
  collapse: () => collapse,
  createEditor: () => createEditor,
  deleteBackward: () => deleteBackward,
  deleteForward: () => deleteForward,
  deleteFragment: () => deleteFragment,
  deleteText: () => deleteText,
  deselect: () => deselect,
  edges: () => edges,
  elementReadOnly: () => elementReadOnly,
  end: () => end,
  first: () => first,
  fragment: () => fragment,
  getDirtyPaths: () => getDirtyPaths,
  getFragment: () => getFragment,
  getVoid: () => getVoid,
  hasBlocks: () => hasBlocks,
  hasInlines: () => hasInlines,
  hasPath: () => hasPath,
  hasTexts: () => hasTexts,
  insertBreak: () => insertBreak,
  insertFragment: () => insertFragment,
  insertNode: () => insertNode,
  insertNodes: () => insertNodes,
  insertSoftBreak: () => insertSoftBreak,
  insertText: () => insertText,
  isBlock: () => isBlock,
  isEdge: () => isEdge,
  isEditor: () => isEditor,
  isEmpty: () => isEmpty,
  isEnd: () => isEnd,
  isNormalizing: () => isNormalizing,
  isStart: () => isStart,
  last: () => last,
  leaf: () => leaf,
  levels: () => levels,
  liftNodes: () => liftNodes,
  marks: () => marks,
  mergeNodes: () => mergeNodes,
  move: () => move,
  moveNodes: () => moveNodes,
  next: () => next,
  node: () => node,
  nodes: () => nodes,
  normalize: () => normalize,
  normalizeNode: () => normalizeNode,
  parent: () => parent,
  path: () => path,
  pathRef: () => pathRef,
  pathRefs: () => pathRefs,
  point: () => point,
  pointRef: () => pointRef,
  pointRefs: () => pointRefs,
  positions: () => positions,
  previous: () => previous,
  range: () => range,
  rangeRef: () => rangeRef,
  rangeRefs: () => rangeRefs,
  removeMark: () => removeMark,
  removeNodes: () => removeNodes,
  select: () => select,
  setNodes: () => setNodes,
  setNormalizing: () => setNormalizing,
  setPoint: () => setPoint,
  setSelection: () => setSelection,
  shouldMergeNodesRemovePrevNode: () => shouldMergeNodesRemovePrevNode,
  shouldNormalize: () => shouldNormalize,
  splitNodes: () => splitNodes,
  start: () => start,
  string: () => string,
  unhangRange: () => unhangRange,
  unsetNodes: () => unsetNodes,
  unwrapNodes: () => unwrapNodes,
  withoutNormalizing: () => withoutNormalizing,
  wrapNodes: () => wrapNodes
});
module.exports = __toCommonJS(slate_0_114_0_exports);

// node_modules/slate/dist/index.es.js
var import_is_plain_object = require("is-plain-object@5.0.0");
var import_immer = require("immer@10.1.1");
var PathRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var path3 = Path.transform(current, op, {
      affinity
    });
    ref.current = path3;
    if (path3 == null) {
      ref.unref();
    }
  }
};
var PointRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var point3 = Point.transform(current, op, {
      affinity
    });
    ref.current = point3;
    if (point3 == null) {
      ref.unref();
    }
  }
};
var RangeRef = {
  transform(ref, op) {
    var {
      current,
      affinity
    } = ref;
    if (current == null) {
      return;
    }
    var path3 = Range.transform(current, op, {
      affinity
    });
    ref.current = path3;
    if (path3 == null) {
      ref.unref();
    }
  }
};
var DIRTY_PATHS = /* @__PURE__ */new WeakMap();
var DIRTY_PATH_KEYS = /* @__PURE__ */new WeakMap();
var FLUSHING = /* @__PURE__ */new WeakMap();
var NORMALIZING = /* @__PURE__ */new WeakMap();
var PATH_REFS = /* @__PURE__ */new WeakMap();
var POINT_REFS = /* @__PURE__ */new WeakMap();
var RANGE_REFS = /* @__PURE__ */new WeakMap();
var Path = {
  ancestors(path3) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var paths = Path.levels(path3, options);
    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }
    return paths;
  },
  common(path3, another) {
    var common = [];
    for (var i = 0; i < path3.length && i < another.length; i++) {
      var av = path3[i];
      var bv = another[i];
      if (av !== bv) {
        break;
      }
      common.push(av);
    }
    return common;
  },
  compare(path3, another) {
    var min = Math.min(path3.length, another.length);
    for (var i = 0; i < min; i++) {
      if (path3[i] < another[i]) return -1;
      if (path3[i] > another[i]) return 1;
    }
    return 0;
  },
  endsAfter(path3, another) {
    var i = path3.length - 1;
    var as = path3.slice(0, i);
    var bs = another.slice(0, i);
    var av = path3[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },
  endsAt(path3, another) {
    var i = path3.length;
    var as = path3.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },
  endsBefore(path3, another) {
    var i = path3.length - 1;
    var as = path3.slice(0, i);
    var bs = another.slice(0, i);
    var av = path3[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },
  equals(path3, another) {
    return path3.length === another.length && path3.every((n, i) => n === another[i]);
  },
  hasPrevious(path3) {
    return path3[path3.length - 1] > 0;
  },
  isAfter(path3, another) {
    return Path.compare(path3, another) === 1;
  },
  isAncestor(path3, another) {
    return path3.length < another.length && Path.compare(path3, another) === 0;
  },
  isBefore(path3, another) {
    return Path.compare(path3, another) === -1;
  },
  isChild(path3, another) {
    return path3.length === another.length + 1 && Path.compare(path3, another) === 0;
  },
  isCommon(path3, another) {
    return path3.length <= another.length && Path.compare(path3, another) === 0;
  },
  isDescendant(path3, another) {
    return path3.length > another.length && Path.compare(path3, another) === 0;
  },
  isParent(path3, another) {
    return path3.length + 1 === another.length && Path.compare(path3, another) === 0;
  },
  isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
  },
  isSibling(path3, another) {
    if (path3.length !== another.length) {
      return false;
    }
    var as = path3.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path3[path3.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },
  levels(path3) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var list = [];
    for (var i = 0; i <= path3.length; i++) {
      list.push(path3.slice(0, i));
    }
    if (reverse) {
      list.reverse();
    }
    return list;
  },
  next(path3) {
    if (path3.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path3, "], because it has no next index."));
    }
    var last2 = path3[path3.length - 1];
    return path3.slice(0, -1).concat(last2 + 1);
  },
  operationCanTransformPath(operation) {
    switch (operation.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return true;
      default:
        return false;
    }
  },
  parent(path3) {
    if (path3.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path3, "]."));
    }
    return path3.slice(0, -1);
  },
  previous(path3) {
    if (path3.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path3, "], because it has no previous index."));
    }
    var last2 = path3[path3.length - 1];
    if (last2 <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path3, "] because it would result in a negative index."));
    }
    return path3.slice(0, -1).concat(last2 - 1);
  },
  relative(path3, ancestor) {
    if (!Path.isAncestor(ancestor, path3) && !Path.equals(path3, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path3, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }
    return path3.slice(ancestor.length);
  },
  transform(path3, operation) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!path3) return null;
    var p = [...path3];
    var {
      affinity = "forward"
    } = options;
    if (path3.length === 0) {
      return p;
    }
    switch (operation.type) {
      case "insert_node":
        {
          var {
            path: op
          } = operation;
          if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
            p[op.length - 1] += 1;
          }
          break;
        }
      case "remove_node":
        {
          var {
            path: _op
          } = operation;
          if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
            return null;
          } else if (Path.endsBefore(_op, p)) {
            p[_op.length - 1] -= 1;
          }
          break;
        }
      case "merge_node":
        {
          var {
            path: _op2,
            position
          } = operation;
          if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
            p[_op2.length - 1] -= 1;
          } else if (Path.isAncestor(_op2, p)) {
            p[_op2.length - 1] -= 1;
            p[_op2.length] += position;
          }
          break;
        }
      case "split_node":
        {
          var {
            path: _op3,
            position: _position
          } = operation;
          if (Path.equals(_op3, p)) {
            if (affinity === "forward") {
              p[p.length - 1] += 1;
            } else if (affinity === "backward") ;else {
              return null;
            }
          } else if (Path.endsBefore(_op3, p)) {
            p[_op3.length - 1] += 1;
          } else if (Path.isAncestor(_op3, p) && path3[_op3.length] >= _position) {
            p[_op3.length - 1] += 1;
            p[_op3.length] -= _position;
          }
          break;
        }
      case "move_node":
        {
          var {
            path: _op4,
            newPath: onp
          } = operation;
          if (Path.equals(_op4, onp)) {
            return p;
          }
          if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
            var copy = onp.slice();
            if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
              copy[_op4.length - 1] -= 1;
            }
            return copy.concat(p.slice(_op4.length));
          } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
            if (Path.endsBefore(_op4, p)) {
              p[_op4.length - 1] -= 1;
            } else {
              p[_op4.length - 1] += 1;
            }
          } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
            if (Path.endsBefore(_op4, p)) {
              p[_op4.length - 1] -= 1;
            }
            p[onp.length - 1] += 1;
          } else if (Path.endsBefore(_op4, p)) {
            if (Path.equals(onp, p)) {
              p[onp.length - 1] += 1;
            }
            p[_op4.length - 1] -= 1;
          }
          break;
        }
    }
    return p;
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o2) {
    return typeof o2;
  } : function (o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys$e(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$e(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$e(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var applyToDraft = (editor, selection, op) => {
  switch (op.type) {
    case "insert_node":
      {
        var {
          path: path3,
          node: node3
        } = op;
        var parent3 = Node.parent(editor, path3);
        var index = path3[path3.length - 1];
        if (index > parent3.children.length) {
          throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path3, "] because the destination is past the end of the node."));
        }
        parent3.children.splice(index, 0, node3);
        if (selection) {
          for (var [point3, key] of Range.points(selection)) {
            selection[key] = Point.transform(point3, op);
          }
        }
        break;
      }
    case "insert_text":
      {
        var {
          path: _path,
          offset,
          text
        } = op;
        if (text.length === 0) break;
        var _node = Node.leaf(editor, _path);
        var before3 = _node.text.slice(0, offset);
        var after3 = _node.text.slice(offset);
        _node.text = before3 + text + after3;
        if (selection) {
          for (var [_point, _key] of Range.points(selection)) {
            selection[_key] = Point.transform(_point, op);
          }
        }
        break;
      }
    case "merge_node":
      {
        var {
          path: _path2
        } = op;
        var _node2 = Node.get(editor, _path2);
        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);
        var _parent = Node.parent(editor, _path2);
        var _index = _path2[_path2.length - 1];
        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          prev.children.push(..._node2.children);
        } else {
          throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
        }
        _parent.children.splice(_index, 1);
        if (selection) {
          for (var [_point2, _key2] of Range.points(selection)) {
            selection[_key2] = Point.transform(_point2, op);
          }
        }
        break;
      }
    case "move_node":
      {
        var {
          path: _path3,
          newPath
        } = op;
        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }
        var _node3 = Node.get(editor, _path3);
        var _parent2 = Node.parent(editor, _path3);
        var _index2 = _path3[_path3.length - 1];
        _parent2.children.splice(_index2, 1);
        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);
        if (selection) {
          for (var [_point3, _key3] of Range.points(selection)) {
            selection[_key3] = Point.transform(_point3, op);
          }
        }
        break;
      }
    case "remove_node":
      {
        var {
          path: _path4
        } = op;
        var _index3 = _path4[_path4.length - 1];
        var _parent3 = Node.parent(editor, _path4);
        _parent3.children.splice(_index3, 1);
        if (selection) {
          for (var [_point4, _key4] of Range.points(selection)) {
            var result = Point.transform(_point4, op);
            if (selection != null && result != null) {
              selection[_key4] = result;
            } else {
              var _prev = void 0;
              var next3 = void 0;
              for (var [n, p] of Node.texts(editor)) {
                if (Path.compare(p, _path4) === -1) {
                  _prev = [n, p];
                } else {
                  next3 = [n, p];
                  break;
                }
              }
              var preferNext = false;
              if (_prev && next3) {
                if (Path.equals(next3[1], _path4)) {
                  preferNext = !Path.hasPrevious(next3[1]);
                } else {
                  preferNext = Path.common(_prev[1], _path4).length < Path.common(next3[1], _path4).length;
                }
              }
              if (_prev && !preferNext) {
                _point4.path = _prev[1];
                _point4.offset = _prev[0].text.length;
              } else if (next3) {
                _point4.path = next3[1];
                _point4.offset = 0;
              } else {
                selection = null;
              }
            }
          }
        }
        break;
      }
    case "remove_text":
      {
        var {
          path: _path5,
          offset: _offset,
          text: _text
        } = op;
        if (_text.length === 0) break;
        var _node4 = Node.leaf(editor, _path5);
        var _before = _node4.text.slice(0, _offset);
        var _after = _node4.text.slice(_offset + _text.length);
        _node4.text = _before + _after;
        if (selection) {
          for (var [_point5, _key5] of Range.points(selection)) {
            selection[_key5] = Point.transform(_point5, op);
          }
        }
        break;
      }
    case "set_node":
      {
        var {
          path: _path6,
          properties,
          newProperties
        } = op;
        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }
        var _node5 = Node.get(editor, _path6);
        for (var _key6 in newProperties) {
          if (_key6 === "children" || _key6 === "text") {
            throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
          }
          var value = newProperties[_key6];
          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        }
        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }
        break;
      }
    case "set_selection":
      {
        var {
          newProperties: _newProperties
        } = op;
        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
            }
            selection = _objectSpread$e({}, _newProperties);
          }
          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];
            if (_value == null) {
              if (_key8 === "anchor" || _key8 === "focus") {
                throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
              }
              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }
        break;
      }
    case "split_node":
      {
        var {
          path: _path7,
          position,
          properties: _properties
        } = op;
        if (_path7.length === 0) {
          throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
        }
        var _node6 = Node.get(editor, _path7);
        var _parent4 = Node.parent(editor, _path7);
        var _index4 = _path7[_path7.length - 1];
        var newNode;
        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);
          var _after2 = _node6.text.slice(position);
          _node6.text = _before2;
          newNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);
          var _after3 = _node6.children.slice(position);
          _node6.children = _before3;
          newNode = _objectSpread$e(_objectSpread$e({}, _properties), {}, {
            children: _after3
          });
        }
        _parent4.children.splice(_index4 + 1, 0, newNode);
        if (selection) {
          for (var [_point6, _key9] of Range.points(selection)) {
            selection[_key9] = Point.transform(_point6, op);
          }
        }
        break;
      }
  }
  return selection;
};
var GeneralTransforms = {
  transform(editor, op) {
    editor.children = (0, import_immer.createDraft)(editor.children);
    var selection = editor.selection && (0, import_immer.createDraft)(editor.selection);
    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = (0, import_immer.finishDraft)(editor.children);
      if (selection) {
        editor.selection = (0, import_immer.isDraft)(selection) ? (0, import_immer.finishDraft)(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }
};
var NodeTransforms = {
  insertNodes(editor, nodes2, options) {
    editor.insertNodes(nodes2, options);
  },
  liftNodes(editor, options) {
    editor.liftNodes(options);
  },
  mergeNodes(editor, options) {
    editor.mergeNodes(options);
  },
  moveNodes(editor, options) {
    editor.moveNodes(options);
  },
  removeNodes(editor, options) {
    editor.removeNodes(options);
  },
  setNodes(editor, props, options) {
    editor.setNodes(props, options);
  },
  splitNodes(editor, options) {
    editor.splitNodes(options);
  },
  unsetNodes(editor, props, options) {
    editor.unsetNodes(props, options);
  },
  unwrapNodes(editor, options) {
    editor.unwrapNodes(options);
  },
  wrapNodes(editor, element, options) {
    editor.wrapNodes(element, options);
  }
};
var SelectionTransforms = {
  collapse(editor, options) {
    editor.collapse(options);
  },
  deselect(editor) {
    editor.deselect();
  },
  move(editor, options) {
    editor.move(options);
  },
  select(editor, target) {
    editor.select(target);
  },
  setPoint(editor, props, options) {
    editor.setPoint(props, options);
  },
  setSelection(editor, props) {
    editor.setSelection(props);
  }
};
var isDeepEqual = (node3, another) => {
  for (var key in node3) {
    var a = node3[key];
    var b = another[key];
    if ((0, import_is_plain_object.isPlainObject)(a) && (0, import_is_plain_object.isPlainObject)(b)) {
      if (!isDeepEqual(a, b)) return false;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
    } else if (a !== b) {
      return false;
    }
  }
  for (var _key in another) {
    if (node3[_key] === void 0 && another[_key] !== void 0) {
      return false;
    }
  }
  return true;
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var _excluded$4 = ["anchor", "focus"];
function ownKeys$d(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$d(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$d(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Range = {
  edges(range2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      reverse = false
    } = options;
    var {
      anchor,
      focus
    } = range2;
    return Range.isBackward(range2) === reverse ? [anchor, focus] : [focus, anchor];
  },
  end(range2) {
    var [, end2] = Range.edges(range2);
    return end2;
  },
  equals(range2, another) {
    return Point.equals(range2.anchor, another.anchor) && Point.equals(range2.focus, another.focus);
  },
  surrounds(range2, target) {
    var intersectionRange = Range.intersection(range2, target);
    if (!intersectionRange) {
      return false;
    }
    return Range.equals(intersectionRange, target);
  },
  includes(range2, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range2, target.anchor) || Range.includes(range2, target.focus)) {
        return true;
      }
      var [rs, re] = Range.edges(range2);
      var [ts, te] = Range.edges(target);
      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }
    var [start2, end2] = Range.edges(range2);
    var isAfterStart = false;
    var isBeforeEnd = false;
    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start2) >= 0;
      isBeforeEnd = Point.compare(target, end2) <= 0;
    } else {
      isAfterStart = Path.compare(target, start2.path) >= 0;
      isBeforeEnd = Path.compare(target, end2.path) <= 0;
    }
    return isAfterStart && isBeforeEnd;
  },
  intersection(range2, another) {
    var rest = _objectWithoutProperties(range2, _excluded$4);
    var [s1, e1] = Range.edges(range2);
    var [s2, e2] = Range.edges(another);
    var start2 = Point.isBefore(s1, s2) ? s2 : s1;
    var end2 = Point.isBefore(e1, e2) ? e1 : e2;
    if (Point.isBefore(end2, start2)) {
      return null;
    } else {
      return _objectSpread$d({
        anchor: start2,
        focus: end2
      }, rest);
    }
  },
  isBackward(range2) {
    var {
      anchor,
      focus
    } = range2;
    return Point.isAfter(anchor, focus);
  },
  isCollapsed(range2) {
    var {
      anchor,
      focus
    } = range2;
    return Point.equals(anchor, focus);
  },
  isExpanded(range2) {
    return !Range.isCollapsed(range2);
  },
  isForward(range2) {
    return !Range.isBackward(range2);
  },
  isRange(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },
  *points(range2) {
    yield [range2.anchor, "anchor"];
    yield [range2.focus, "focus"];
  },
  start(range2) {
    var [start2] = Range.edges(range2);
    return start2;
  },
  transform(range2, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return (0, import_immer.produce)(range2, r => {
      if (r === null) {
        return null;
      }
      var {
        affinity = "inward"
      } = options;
      var affinityAnchor;
      var affinityFocus;
      if (affinity === "inward") {
        var isCollapsed = Range.isCollapsed(r);
        if (Range.isForward(r)) {
          affinityAnchor = "forward";
          affinityFocus = isCollapsed ? affinityAnchor : "backward";
        } else {
          affinityAnchor = "backward";
          affinityFocus = isCollapsed ? affinityAnchor : "forward";
        }
      } else if (affinity === "outward") {
        if (Range.isForward(r)) {
          affinityAnchor = "backward";
          affinityFocus = "forward";
        } else {
          affinityAnchor = "forward";
          affinityFocus = "backward";
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }
      var anchor = Point.transform(r.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r.focus, op, {
        affinity: affinityFocus
      });
      if (!anchor || !focus) {
        return null;
      }
      r.anchor = anchor;
      r.focus = focus;
    });
  }
};
var isElement = value => {
  return (0, import_is_plain_object.isPlainObject)(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
};
var Element = {
  isAncestor(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && Node.isNodeList(value.children);
  },
  isElement,
  isElementList(value) {
    return Array.isArray(value) && value.every(val => Element.isElement(val));
  },
  isElementProps(props) {
    return props.children !== void 0;
  },
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return isElement(value) && value[elementKey] === elementVal;
  },
  matches(element, props) {
    for (var key in props) {
      if (key === "children") {
        continue;
      }
      if (element[key] !== props[key]) {
        return false;
      }
    }
    return true;
  }
};
var _excluded$3 = ["children"],
  _excluded2$3 = ["text"];
var IS_NODE_LIST_CACHE = /* @__PURE__ */new WeakMap();
var Node = {
  ancestor(root, path3) {
    var node3 = Node.get(root, path3);
    if (Text.isText(node3)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path3, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node3)));
    }
    return node3;
  },
  ancestors(root, path3) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var p of Path.ancestors(path3, options)) {
        var n = Node.ancestor(root, p);
        var entry = [n, p];
        yield entry;
      }
    }();
  },
  child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }
    var c = root.children[index];
    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }
    return c;
  },
  children(root, path3) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      var {
        reverse = false
      } = options;
      var ancestor = Node.ancestor(root, path3);
      var {
        children
      } = ancestor;
      var index = reverse ? children.length - 1 : 0;
      while (reverse ? index >= 0 : index < children.length) {
        var child = Node.child(ancestor, index);
        var childPath = path3.concat(index);
        yield [child, childPath];
        index = reverse ? index - 1 : index + 1;
      }
    }();
  },
  common(root, path3, another) {
    var p = Path.common(path3, another);
    var n = Node.get(root, p);
    return [n, p];
  },
  descendant(root, path3) {
    var node3 = Node.get(root, path3);
    if (Editor.isEditor(node3)) {
      throw new Error("Cannot get the descendant node at path [".concat(path3, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node3)));
    }
    return node3;
  },
  descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node3, path3] of Node.nodes(root, options)) {
        if (path3.length !== 0) {
          yield [node3, path3];
        }
      }
    }();
  },
  elements(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node3, path3] of Node.nodes(root, options)) {
        if (Element.isElement(node3)) {
          yield [node3, path3];
        }
      }
    }();
  },
  extractProps(node3) {
    if (Element.isAncestor(node3)) {
      var properties = _objectWithoutProperties(node3, _excluded$3);
      return properties;
    } else {
      var properties = _objectWithoutProperties(node3, _excluded2$3);
      return properties;
    }
  },
  first(root, path3) {
    var p = path3.slice();
    var n = Node.get(root, p);
    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }
    return [n, p];
  },
  fragment(root, range2) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
    }
    var newRoot = (0, import_immer.produce)({
      children: root.children
    }, r => {
      var [start2, end2] = Range.edges(range2);
      var nodeEntries = Node.nodes(r, {
        reverse: true,
        pass: _ref => {
          var [, path4] = _ref;
          return !Range.includes(range2, path4);
        }
      });
      for (var [, path3] of nodeEntries) {
        if (!Range.includes(range2, path3)) {
          var parent3 = Node.parent(r, path3);
          var index = path3[path3.length - 1];
          parent3.children.splice(index, 1);
        }
        if (Path.equals(path3, end2.path)) {
          var leaf3 = Node.leaf(r, path3);
          leaf3.text = leaf3.text.slice(0, end2.offset);
        }
        if (Path.equals(path3, start2.path)) {
          var _leaf = Node.leaf(r, path3);
          _leaf.text = _leaf.text.slice(start2.offset);
        }
      }
      if (Editor.isEditor(r)) {
        r.selection = null;
      }
    });
    return newRoot.children;
  },
  get(root, path3) {
    var node3 = Node.getIf(root, path3);
    if (node3 === void 0) {
      throw new Error("Cannot find a descendant at path [".concat(path3, "] in node: ").concat(Scrubber.stringify(root)));
    }
    return node3;
  },
  getIf(root, path3) {
    var node3 = root;
    for (var i = 0; i < path3.length; i++) {
      var p = path3[i];
      if (Text.isText(node3) || !node3.children[p]) {
        return;
      }
      node3 = node3.children[p];
    }
    return node3;
  },
  has(root, path3) {
    var node3 = root;
    for (var i = 0; i < path3.length; i++) {
      var p = path3[i];
      if (Text.isText(node3) || !node3.children[p]) {
        return false;
      }
      node3 = node3.children[p];
    }
    return true;
  },
  isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },
  isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }
    var cachedResult = IS_NODE_LIST_CACHE.get(value);
    if (cachedResult !== void 0) {
      return cachedResult;
    }
    var isNodeList = value.every(val => Node.isNode(val));
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },
  last(root, path3) {
    var p = path3.slice();
    var n = Node.get(root, p);
    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }
    return [n, p];
  },
  leaf(root, path3) {
    var node3 = Node.get(root, path3);
    if (!Text.isText(node3)) {
      throw new Error("Cannot get the leaf node at path [".concat(path3, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node3)));
    }
    return node3;
  },
  levels(root, path3) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var p of Path.levels(path3, options)) {
        var n = Node.get(root, p);
        yield [n, p];
      }
    }();
  },
  matches(node3, props) {
    return Element.isElement(node3) && Element.isElementProps(props) && Element.matches(node3, props) || Text.isText(node3) && Text.isTextProps(props) && Text.matches(node3, props);
  },
  nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      var {
        pass,
        reverse = false
      } = options;
      var {
        from = [],
        to
      } = options;
      var visited = /* @__PURE__ */new Set();
      var p = [];
      var n = root;
      while (true) {
        if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
          break;
        }
        if (!visited.has(n)) {
          yield [n, p];
        }
        if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
          visited.add(n);
          var nextIndex = reverse ? n.children.length - 1 : 0;
          if (Path.isAncestor(p, from)) {
            nextIndex = from[p.length];
          }
          p = p.concat(nextIndex);
          n = Node.get(root, p);
          continue;
        }
        if (p.length === 0) {
          break;
        }
        if (!reverse) {
          var newPath = Path.next(p);
          if (Node.has(root, newPath)) {
            p = newPath;
            n = Node.get(root, p);
            continue;
          }
        }
        if (reverse && p[p.length - 1] !== 0) {
          var _newPath = Path.previous(p);
          p = _newPath;
          n = Node.get(root, p);
          continue;
        }
        p = Path.parent(p);
        n = Node.get(root, p);
        visited.add(n);
      }
    }();
  },
  parent(root, path3) {
    var parentPath = Path.parent(path3);
    var p = Node.get(root, parentPath);
    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path3, "] because it does not exist in the root."));
    }
    return p;
  },
  string(node3) {
    if (Text.isText(node3)) {
      return node3.text;
    } else {
      return node3.children.map(Node.string).join("");
    }
  },
  texts(root) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [node3, path3] of Node.nodes(root, options)) {
        if (Text.isText(node3)) {
          yield [node3, path3];
        }
      }
    }();
  }
};
function ownKeys$c(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$c(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$c(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Operation = {
  isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_node");
  },
  isOperation(value) {
    if (!(0, import_is_plain_object.isPlainObject)(value)) {
      return false;
    }
    switch (value.type) {
      case "insert_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "insert_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "merge_node":
        return typeof value.position === "number" && Path.isPath(value.path) && (0, import_is_plain_object.isPlainObject)(value.properties);
      case "move_node":
        return Path.isPath(value.path) && Path.isPath(value.newPath);
      case "remove_node":
        return Path.isPath(value.path) && Node.isNode(value.node);
      case "remove_text":
        return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
      case "set_node":
        return Path.isPath(value.path) && (0, import_is_plain_object.isPlainObject)(value.properties) && (0, import_is_plain_object.isPlainObject)(value.newProperties);
      case "set_selection":
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || (0, import_is_plain_object.isPlainObject)(value.properties) && (0, import_is_plain_object.isPlainObject)(value.newProperties);
      case "split_node":
        return Path.isPath(value.path) && typeof value.position === "number" && (0, import_is_plain_object.isPlainObject)(value.properties);
      default:
        return false;
    }
  },
  isOperationList(value) {
    return Array.isArray(value) && value.every(val => Operation.isOperation(val));
  },
  isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_selection");
  },
  isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith("_text");
  },
  inverse(op) {
    switch (op.type) {
      case "insert_node":
        {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            type: "remove_node"
          });
        }
      case "insert_text":
        {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            type: "remove_text"
          });
        }
      case "merge_node":
        {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            type: "split_node",
            path: Path.previous(op.path)
          });
        }
      case "move_node":
        {
          var {
            newPath,
            path: path3
          } = op;
          if (Path.equals(newPath, path3)) {
            return op;
          }
          if (Path.isSibling(path3, newPath)) {
            return _objectSpread$c(_objectSpread$c({}, op), {}, {
              path: newPath,
              newPath: path3
            });
          }
          var inversePath = Path.transform(path3, op);
          var inverseNewPath = Path.transform(Path.next(path3), op);
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }
      case "remove_node":
        {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            type: "insert_node"
          });
        }
      case "remove_text":
        {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            type: "insert_text"
          });
        }
      case "set_node":
        {
          var {
            properties,
            newProperties
          } = op;
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }
      case "set_selection":
        {
          var {
            properties: _properties,
            newProperties: _newProperties
          } = op;
          if (_properties == null) {
            return _objectSpread$c(_objectSpread$c({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$c(_objectSpread$c({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$c(_objectSpread$c({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }
      case "split_node":
        {
          return _objectSpread$c(_objectSpread$c({}, op), {}, {
            type: "merge_node",
            path: Path.next(op.path)
          });
        }
    }
  }
};
var IS_EDITOR_CACHE = /* @__PURE__ */new WeakMap();
var isEditor = value => {
  var cachedIsEditor = IS_EDITOR_CACHE.get(value);
  if (cachedIsEditor !== void 0) {
    return cachedIsEditor;
  }
  if (!(0, import_is_plain_object.isPlainObject)(value)) {
    return false;
  }
  var isEditor2 = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isElementReadOnly === "function" && typeof value.isInline === "function" && typeof value.isSelectable === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && typeof value.getDirtyPaths === "function" && (value.marks === null || (0, import_is_plain_object.isPlainObject)(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
  IS_EDITOR_CACHE.set(value, isEditor2);
  return isEditor2;
};
var Editor = {
  above(editor, options) {
    return editor.above(options);
  },
  addMark(editor, key, value) {
    editor.addMark(key, value);
  },
  after(editor, at, options) {
    return editor.after(at, options);
  },
  before(editor, at, options) {
    return editor.before(at, options);
  },
  deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteBackward(unit);
  },
  deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var {
      unit = "character"
    } = options;
    editor.deleteForward(unit);
  },
  deleteFragment(editor, options) {
    editor.deleteFragment(options);
  },
  edges(editor, at) {
    return editor.edges(at);
  },
  elementReadOnly(editor) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return editor.elementReadOnly(options);
  },
  end(editor, at) {
    return editor.end(at);
  },
  first(editor, at) {
    return editor.first(at);
  },
  fragment(editor, at) {
    return editor.fragment(at);
  },
  hasBlocks(editor, element) {
    return editor.hasBlocks(element);
  },
  hasInlines(editor, element) {
    return editor.hasInlines(element);
  },
  hasPath(editor, path3) {
    return editor.hasPath(path3);
  },
  hasTexts(editor, element) {
    return editor.hasTexts(element);
  },
  insertBreak(editor) {
    editor.insertBreak();
  },
  insertFragment(editor, fragment2, options) {
    editor.insertFragment(fragment2, options);
  },
  insertNode(editor, node3) {
    editor.insertNode(node3);
  },
  insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },
  insertText(editor, text) {
    editor.insertText(text);
  },
  isBlock(editor, value) {
    return editor.isBlock(value);
  },
  isEdge(editor, point3, at) {
    return editor.isEdge(point3, at);
  },
  isEditor(value) {
    return isEditor(value);
  },
  isElementReadOnly(editor, element) {
    return editor.isElementReadOnly(element);
  },
  isEmpty(editor, element) {
    return editor.isEmpty(element);
  },
  isEnd(editor, point3, at) {
    return editor.isEnd(point3, at);
  },
  isInline(editor, value) {
    return editor.isInline(value);
  },
  isNormalizing(editor) {
    return editor.isNormalizing();
  },
  isSelectable(editor, value) {
    return editor.isSelectable(value);
  },
  isStart(editor, point3, at) {
    return editor.isStart(point3, at);
  },
  isVoid(editor, value) {
    return editor.isVoid(value);
  },
  last(editor, at) {
    return editor.last(at);
  },
  leaf(editor, at, options) {
    return editor.leaf(at, options);
  },
  levels(editor, options) {
    return editor.levels(options);
  },
  marks(editor) {
    return editor.getMarks();
  },
  next(editor, options) {
    return editor.next(options);
  },
  node(editor, at, options) {
    return editor.node(at, options);
  },
  nodes(editor, options) {
    return editor.nodes(options);
  },
  normalize(editor, options) {
    editor.normalize(options);
  },
  parent(editor, at, options) {
    return editor.parent(at, options);
  },
  path(editor, at, options) {
    return editor.path(at, options);
  },
  pathRef(editor, path3, options) {
    return editor.pathRef(path3, options);
  },
  pathRefs(editor) {
    return editor.pathRefs();
  },
  point(editor, at, options) {
    return editor.point(at, options);
  },
  pointRef(editor, point3, options) {
    return editor.pointRef(point3, options);
  },
  pointRefs(editor) {
    return editor.pointRefs();
  },
  positions(editor, options) {
    return editor.positions(options);
  },
  previous(editor, options) {
    return editor.previous(options);
  },
  range(editor, at, to) {
    return editor.range(at, to);
  },
  rangeRef(editor, range2, options) {
    return editor.rangeRef(range2, options);
  },
  rangeRefs(editor) {
    return editor.rangeRefs();
  },
  removeMark(editor, key) {
    editor.removeMark(key);
  },
  setNormalizing(editor, isNormalizing2) {
    editor.setNormalizing(isNormalizing2);
  },
  start(editor, at) {
    return editor.start(at);
  },
  string(editor, at, options) {
    return editor.string(at, options);
  },
  unhangRange(editor, range2, options) {
    return editor.unhangRange(range2, options);
  },
  void(editor, options) {
    return editor.void(options);
  },
  withoutNormalizing(editor, fn) {
    editor.withoutNormalizing(fn);
  },
  shouldMergeNodesRemovePrevNode: (editor, prevNode, curNode) => {
    return editor.shouldMergeNodesRemovePrevNode(prevNode, curNode);
  }
};
var Location = {
  isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }
};
var Span = {
  isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Point = {
  compare(point3, another) {
    var result = Path.compare(point3.path, another.path);
    if (result === 0) {
      if (point3.offset < another.offset) return -1;
      if (point3.offset > another.offset) return 1;
      return 0;
    }
    return result;
  },
  isAfter(point3, another) {
    return Point.compare(point3, another) === 1;
  },
  isBefore(point3, another) {
    return Point.compare(point3, another) === -1;
  },
  equals(point3, another) {
    return point3.offset === another.offset && Path.equals(point3.path, another.path);
  },
  isPoint(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && typeof value.offset === "number" && Path.isPath(value.path);
  },
  transform(point3, op) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return (0, import_immer.produce)(point3, p => {
      if (p === null) {
        return null;
      }
      var {
        affinity = "forward"
      } = options;
      var {
        path: path3,
        offset
      } = p;
      switch (op.type) {
        case "insert_node":
        case "move_node":
          {
            p.path = Path.transform(path3, op, options);
            break;
          }
        case "insert_text":
          {
            if (Path.equals(op.path, path3) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
              p.offset += op.text.length;
            }
            break;
          }
        case "merge_node":
          {
            if (Path.equals(op.path, path3)) {
              p.offset += op.position;
            }
            p.path = Path.transform(path3, op, options);
            break;
          }
        case "remove_text":
          {
            if (Path.equals(op.path, path3) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }
            break;
          }
        case "remove_node":
          {
            if (Path.equals(op.path, path3) || Path.isAncestor(op.path, path3)) {
              return null;
            }
            p.path = Path.transform(path3, op, options);
            break;
          }
        case "split_node":
          {
            if (Path.equals(op.path, path3)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === "forward") {
                p.offset -= op.position;
                p.path = Path.transform(path3, op, _objectSpread$b(_objectSpread$b({}, options), {}, {
                  affinity: "forward"
                }));
              }
            } else {
              p.path = Path.transform(path3, op, options);
            }
            break;
          }
      }
    });
  }
};
var _scrubber = void 0;
var Scrubber = {
  setScrubber(scrubber) {
    _scrubber = scrubber;
  },
  stringify(value) {
    return JSON.stringify(value, _scrubber);
  }
};
var _excluded$2 = ["text"],
  _excluded2$2 = ["anchor", "focus", "merge"];
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Text = {
  equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var {
      loose = false
    } = options;
    function omitText(obj) {
      var rest = _objectWithoutProperties(obj, _excluded$2);
      return rest;
    }
    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },
  isText(value) {
    return (0, import_is_plain_object.isPlainObject)(value) && typeof value.text === "string";
  },
  isTextList(value) {
    return Array.isArray(value) && value.every(val => Text.isText(val));
  },
  isTextProps(props) {
    return props.text !== void 0;
  },
  matches(text, props) {
    for (var key in props) {
      if (key === "text") {
        continue;
      }
      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }
    return true;
  },
  decorations(node3, decorations) {
    var leaves = [{
      leaf: _objectSpread$a({}, node3)
    }];
    for (var dec of decorations) {
      var {
          anchor,
          focus,
          merge: mergeDecoration
        } = dec,
        rest = _objectWithoutProperties(dec, _excluded2$2);
      var [start2, end2] = Range.edges(dec);
      var next3 = [];
      var leafEnd = 0;
      var decorationStart = start2.offset;
      var decorationEnd = end2.offset;
      var merge = mergeDecoration !== null && mergeDecoration !== void 0 ? mergeDecoration : Object.assign;
      for (var {
        leaf: leaf3
      } of leaves) {
        var {
          length
        } = leaf3.text;
        var leafStart = leafEnd;
        leafEnd += length;
        if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
          merge(leaf3, rest);
          next3.push({
            leaf: leaf3
          });
          continue;
        }
        if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
          next3.push({
            leaf: leaf3
          });
          continue;
        }
        var middle = leaf3;
        var before3 = void 0;
        var after3 = void 0;
        if (decorationEnd < leafEnd) {
          var off = decorationEnd - leafStart;
          after3 = {
            leaf: _objectSpread$a(_objectSpread$a({}, middle), {}, {
              text: middle.text.slice(off)
            })
          };
          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(0, off)
          });
        }
        if (decorationStart > leafStart) {
          var _off = decorationStart - leafStart;
          before3 = {
            leaf: _objectSpread$a(_objectSpread$a({}, middle), {}, {
              text: middle.text.slice(0, _off)
            })
          };
          middle = _objectSpread$a(_objectSpread$a({}, middle), {}, {
            text: middle.text.slice(_off)
          });
        }
        merge(middle, rest);
        if (before3) {
          next3.push(before3);
        }
        next3.push({
          leaf: middle
        });
        if (after3) {
          next3.push(after3);
        }
      }
      leaves = next3;
    }
    if (leaves.length > 1) {
      var currentOffset = 0;
      for (var [index, item] of leaves.entries()) {
        var _start = currentOffset;
        var _end = _start + item.leaf.text.length;
        var position = {
          start: _start,
          end: _end
        };
        if (index === 0) position.isFirst = true;
        if (index === leaves.length - 1) position.isLast = true;
        item.position = position;
        currentOffset = _end;
      }
    }
    return leaves;
  }
};
var getDefaultInsertLocation = editor => {
  if (editor.selection) {
    return editor.selection;
  } else if (editor.children.length > 0) {
    return Editor.end(editor, []);
  } else {
    return [0];
  }
};
var matchPath = (editor, path3) => {
  var [node3] = Editor.node(editor, path3);
  return n => n === node3;
};
var getCharacterDistance = function getCharacterDistance2(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left = CodepointType.None;
  var right = CodepointType.None;
  var distance = 0;
  var gb11 = null;
  var gb12Or13 = null;
  for (var char of codepoints) {
    var code = char.codePointAt(0);
    if (!code) break;
    var type = getCodepointType(char, code);
    [left, right] = isLTR ? [right, type] : [type, left];
    if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
      if (isLTR) {
        gb11 = endsWithEmojiZWJ(str.substring(0, distance));
      } else {
        gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
      }
      if (!gb11) break;
    }
    if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
      if (gb12Or13 !== null) {
        gb12Or13 = !gb12Or13;
      } else {
        if (isLTR) {
          gb12Or13 = true;
        } else {
          gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
        }
      }
      if (!gb12Or13) break;
    }
    if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
      break;
    }
    distance += char.length;
  }
  return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
var getWordDistance = function getWordDistance2(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var dist = 0;
  var started = false;
  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);
    var [char, remaining] = splitByCharacterDistance(text, charDist, isRTL);
    if (isWordCharacter(char, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }
    text = remaining;
  }
  return dist;
};
var splitByCharacterDistance = (str, dist, isRTL) => {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }
  return [str.slice(0, dist), str.slice(dist)];
};
var isWordCharacter = function isWordCharacter2(char, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (SPACE.test(char)) {
    return false;
  }
  if (CHAMELEON.test(char)) {
    var charDist = getCharacterDistance(remaining, isRTL);
    var [nextChar, nextRemaining] = splitByCharacterDistance(remaining, charDist, isRTL);
    if (isWordCharacter2(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }
  if (PUNCTUATION.test(char)) {
    return false;
  }
  return true;
};
var codepointsIteratorRTL = function* codepointsIteratorRTL2(str) {
  var end2 = str.length - 1;
  for (var i = 0; i < str.length; i++) {
    var char1 = str.charAt(end2 - i);
    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end2 - i - 1);
      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i++;
        continue;
      }
    }
    yield char1;
  }
};
var isHighSurrogate = charCode => {
  return charCode >= 55296 && charCode <= 56319;
};
var isLowSurrogate = charCode => {
  return charCode >= 56320 && charCode <= 57343;
};
var CodepointType;
(function (CodepointType2) {
  CodepointType2[CodepointType2["None"] = 0] = "None";
  CodepointType2[CodepointType2["Extend"] = 1] = "Extend";
  CodepointType2[CodepointType2["ZWJ"] = 2] = "ZWJ";
  CodepointType2[CodepointType2["RI"] = 4] = "RI";
  CodepointType2[CodepointType2["Prepend"] = 8] = "Prepend";
  CodepointType2[CodepointType2["SpacingMark"] = 16] = "SpacingMark";
  CodepointType2[CodepointType2["L"] = 32] = "L";
  CodepointType2[CodepointType2["V"] = 64] = "V";
  CodepointType2[CodepointType2["T"] = 128] = "T";
  CodepointType2[CodepointType2["LV"] = 256] = "LV";
  CodepointType2[CodepointType2["LVT"] = 512] = "LVT";
  CodepointType2[CodepointType2["ExtPict"] = 1024] = "ExtPict";
  CodepointType2[CodepointType2["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));
var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;
var getCodepointType = (char, code) => {
  var type = CodepointType.Any;
  if (char.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }
  if (code === 8205) {
    type |= CodepointType.ZWJ;
  }
  if (code >= 127462 && code <= 127487) {
    type |= CodepointType.RI;
  }
  if (char.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }
  if (char.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }
  if (char.search(reL) !== -1) {
    type |= CodepointType.L;
  }
  if (char.search(reV) !== -1) {
    type |= CodepointType.V;
  }
  if (char.search(reT) !== -1) {
    type |= CodepointType.T;
  }
  if (char.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }
  if (char.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }
  if (char.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }
  return type;
};
function intersects(x, y) {
  return (x & y) !== 0;
}
var NonBoundaryPairs = [[CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT], [CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T], [CodepointType.LVT | CodepointType.T, CodepointType.T], [CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ], [CodepointType.Any, CodepointType.SpacingMark], [CodepointType.Prepend, CodepointType.Any], [CodepointType.ZWJ, CodepointType.ExtPict], [CodepointType.RI, CodepointType.RI]];
function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex(r => intersects(left, r[0]) && intersects(right, r[1])) === -1;
}
var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;
var endsWithEmojiZWJ = str => {
  return str.search(endingEmojiZWJ) !== -1;
};
var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;
var endsWithOddNumberOfRIs = str => {
  var match = str.match(endingRIs);
  if (match === null) {
    return false;
  } else {
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};
var TextTransforms = {
  delete(editor, options) {
    editor.delete(options);
  },
  insertFragment(editor, fragment2, options) {
    editor.insertFragment(fragment2, options);
  },
  insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Editor.withoutNormalizing(editor, () => {
      var {
        voids = false
      } = options;
      var {
        at = getDefaultInsertLocation(editor)
      } = options;
      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }
      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end2 = Range.end(at);
          if (!voids && Editor.void(editor, {
            at: end2
          })) {
            return;
          }
          var start2 = Range.start(at);
          var startRef = Editor.pointRef(editor, start2);
          var endRef = Editor.pointRef(editor, end2);
          Transforms.delete(editor, {
            at,
            voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }
      if (!voids && Editor.void(editor, {
        at
      }) || Editor.elementReadOnly(editor, {
        at
      })) {
        return;
      }
      var {
        path: path3,
        offset
      } = at;
      if (text.length > 0) editor.apply({
        type: "insert_text",
        path: path3,
        offset,
        text
      });
    });
  }
};
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Transforms = _objectSpread$9(_objectSpread$9(_objectSpread$9(_objectSpread$9({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);
var BATCHING_DIRTY_PATHS = /* @__PURE__ */new WeakMap();
var isBatchingDirtyPaths = editor => {
  return BATCHING_DIRTY_PATHS.get(editor) || false;
};
var batchDirtyPaths = (editor, fn, update) => {
  var value = BATCHING_DIRTY_PATHS.get(editor) || false;
  BATCHING_DIRTY_PATHS.set(editor, true);
  try {
    fn();
    update();
  } finally {
    BATCHING_DIRTY_PATHS.set(editor, value);
  }
};
function updateDirtyPaths(editor, newDirtyPaths, transform) {
  var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
  var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || /* @__PURE__ */new Set();
  var dirtyPaths;
  var dirtyPathKeys;
  var add = path4 => {
    if (path4) {
      var key = path4.join(",");
      if (!dirtyPathKeys.has(key)) {
        dirtyPathKeys.add(key);
        dirtyPaths.push(path4);
      }
    }
  };
  if (transform) {
    dirtyPaths = [];
    dirtyPathKeys = /* @__PURE__ */new Set();
    for (var path3 of oldDirtyPaths) {
      var newPath = transform(path3);
      add(newPath);
    }
  } else {
    dirtyPaths = oldDirtyPaths;
    dirtyPathKeys = oldDirtyPathKeys;
  }
  for (var _path of newDirtyPaths) {
    add(_path);
  }
  DIRTY_PATHS.set(editor, dirtyPaths);
  DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
}
var apply = (editor, op) => {
  for (var ref of Editor.pathRefs(editor)) {
    PathRef.transform(ref, op);
  }
  for (var _ref of Editor.pointRefs(editor)) {
    PointRef.transform(_ref, op);
  }
  for (var _ref2 of Editor.rangeRefs(editor)) {
    RangeRef.transform(_ref2, op);
  }
  if (!isBatchingDirtyPaths(editor)) {
    var transform = Path.operationCanTransformPath(op) ? p => Path.transform(p, op) : void 0;
    updateDirtyPaths(editor, editor.getDirtyPaths(op), transform);
  }
  Transforms.transform(editor, op);
  editor.operations.push(op);
  Editor.normalize(editor, {
    operation: op
  });
  if (op.type === "set_selection") {
    editor.marks = null;
  }
  if (!FLUSHING.get(editor)) {
    FLUSHING.set(editor, true);
    Promise.resolve().then(() => {
      FLUSHING.set(editor, false);
      editor.onChange({
        operation: op
      });
      editor.operations = [];
    });
  }
};
var getDirtyPaths = (editor, op) => {
  switch (op.type) {
    case "insert_text":
    case "remove_text":
    case "set_node":
      {
        var {
          path: path3
        } = op;
        return Path.levels(path3);
      }
    case "insert_node":
      {
        var {
          node: node3,
          path: _path
        } = op;
        var levels2 = Path.levels(_path);
        var descendants = Text.isText(node3) ? [] : Array.from(Node.nodes(node3), _ref => {
          var [, p2] = _ref;
          return _path.concat(p2);
        });
        return [...levels2, ...descendants];
      }
    case "merge_node":
      {
        var {
          path: _path2
        } = op;
        var ancestors = Path.ancestors(_path2);
        var previousPath = Path.previous(_path2);
        return [...ancestors, previousPath];
      }
    case "move_node":
      {
        var {
          path: _path3,
          newPath
        } = op;
        if (Path.equals(_path3, newPath)) {
          return [];
        }
        var oldAncestors = [];
        var newAncestors = [];
        for (var ancestor of Path.ancestors(_path3)) {
          var p = Path.transform(ancestor, op);
          oldAncestors.push(p);
        }
        for (var _ancestor of Path.ancestors(newPath)) {
          var _p = Path.transform(_ancestor, op);
          newAncestors.push(_p);
        }
        var newParent = newAncestors[newAncestors.length - 1];
        var newIndex = newPath[newPath.length - 1];
        var resultPath = newParent.concat(newIndex);
        return [...oldAncestors, ...newAncestors, resultPath];
      }
    case "remove_node":
      {
        var {
          path: _path4
        } = op;
        var _ancestors = Path.ancestors(_path4);
        return [..._ancestors];
      }
    case "split_node":
      {
        var {
          path: _path5
        } = op;
        var _levels = Path.levels(_path5);
        var nextPath = Path.next(_path5);
        return [..._levels, nextPath];
      }
    default:
      {
        return [];
      }
  }
};
var getFragment = editor => {
  var {
    selection
  } = editor;
  if (selection) {
    return Node.fragment(editor, selection);
  }
  return [];
};
var normalizeNode = (editor, entry) => {
  var [node3, path3] = entry;
  if (Text.isText(node3)) {
    return;
  }
  if (Element.isElement(node3) && node3.children.length === 0) {
    var child = {
      text: ""
    };
    Transforms.insertNodes(editor, child, {
      at: path3.concat(0),
      voids: true
    });
    return;
  }
  var shouldHaveInlines = Editor.isEditor(node3) ? false : Element.isElement(node3) && (editor.isInline(node3) || node3.children.length === 0 || Text.isText(node3.children[0]) || editor.isInline(node3.children[0]));
  var n = 0;
  for (var i = 0; i < node3.children.length; i++, n++) {
    var currentNode = Node.get(editor, path3);
    if (Text.isText(currentNode)) continue;
    var _child = currentNode.children[n];
    var prev = currentNode.children[n - 1];
    var isLast = i === node3.children.length - 1;
    var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child);
    if (isInlineOrText !== shouldHaveInlines) {
      if (isInlineOrText) {
        Transforms.removeNodes(editor, {
          at: path3.concat(n),
          voids: true
        });
      } else {
        Transforms.unwrapNodes(editor, {
          at: path3.concat(n),
          voids: true
        });
      }
      n--;
    } else if (Element.isElement(_child)) {
      if (editor.isInline(_child)) {
        if (prev == null || !Text.isText(prev)) {
          var newChild = {
            text: ""
          };
          Transforms.insertNodes(editor, newChild, {
            at: path3.concat(n),
            voids: true
          });
          n++;
        } else if (isLast) {
          var _newChild = {
            text: ""
          };
          Transforms.insertNodes(editor, _newChild, {
            at: path3.concat(n + 1),
            voids: true
          });
          n++;
        }
      }
    } else {
      if (!Text.isText(_child) && !("children" in _child)) {
        var elementChild = _child;
        elementChild.children = [];
      }
      if (prev != null && Text.isText(prev)) {
        if (Text.equals(_child, prev, {
          loose: true
        })) {
          Transforms.mergeNodes(editor, {
            at: path3.concat(n),
            voids: true
          });
          n--;
        } else if (prev.text === "") {
          Transforms.removeNodes(editor, {
            at: path3.concat(n - 1),
            voids: true
          });
          n--;
        } else if (_child.text === "") {
          Transforms.removeNodes(editor, {
            at: path3.concat(n),
            voids: true
          });
          n--;
        }
      }
    }
  }
};
var shouldNormalize = (editor, _ref) => {
  var {
    iteration,
    initialDirtyPathsLength
  } = _ref;
  var maxIterations = initialDirtyPathsLength * 42;
  if (iteration > maxIterations) {
    throw new Error("Could not completely normalize the editor after ".concat(maxIterations, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  }
  return true;
};
var above = function above2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    voids = false,
    mode = "lowest",
    at = editor.selection,
    match
  } = options;
  if (!at) {
    return;
  }
  var path3 = Editor.path(editor, at);
  var reverse = mode === "lowest";
  for (var [n, p] of Editor.levels(editor, {
    at: path3,
    voids,
    match,
    reverse
  })) {
    if (Text.isText(n)) continue;
    if (Range.isRange(at)) {
      if (Path.isAncestor(p, at.anchor.path) && Path.isAncestor(p, at.focus.path)) {
        return [n, p];
      }
    } else {
      if (!Path.equals(path3, p)) {
        return [n, p];
      }
    }
  }
};
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var addMark = (editor, key, value) => {
  var {
    selection
  } = editor;
  if (selection) {
    var match = (node3, path3) => {
      if (!Text.isText(node3)) {
        return false;
      }
      var [parentNode2, parentPath] = Editor.parent(editor, path3);
      return !editor.isVoid(parentNode2) || editor.markableVoid(parentNode2);
    };
    var expandedSelection = Range.isExpanded(selection);
    var markAcceptingVoidSelected = false;
    if (!expandedSelection) {
      var [selectedNode, selectedPath] = Editor.node(editor, selection);
      if (selectedNode && match(selectedNode, selectedPath)) {
        var [parentNode] = Editor.parent(editor, selectedPath);
        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
      }
    }
    if (expandedSelection || markAcceptingVoidSelected) {
      Transforms.setNodes(editor, {
        [key]: value
      }, {
        match,
        split: true,
        voids: true
      });
    } else {
      var marks3 = _objectSpread$8(_objectSpread$8({}, Editor.marks(editor) || {}), {}, {
        [key]: value
      });
      editor.marks = marks3;
      if (!FLUSHING.get(editor)) {
        editor.onChange();
      }
    }
  }
};
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var after = function after2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var anchor = Editor.point(editor, at, {
    edge: "end"
  });
  var focus = Editor.end(editor, []);
  var range2 = {
    anchor,
    focus
  };
  var {
    distance = 1
  } = options;
  var d = 0;
  var target;
  for (var p of Editor.positions(editor, _objectSpread$7(_objectSpread$7({}, options), {}, {
    at: range2
  }))) {
    if (d > distance) {
      break;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
};
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var before = function before2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var anchor = Editor.start(editor, []);
  var focus = Editor.point(editor, at, {
    edge: "start"
  });
  var range2 = {
    anchor,
    focus
  };
  var {
    distance = 1
  } = options;
  var d = 0;
  var target;
  for (var p of Editor.positions(editor, _objectSpread$6(_objectSpread$6({}, options), {}, {
    at: range2,
    reverse: true
  }))) {
    if (d > distance) {
      break;
    }
    if (d !== 0) {
      target = p;
    }
    d++;
  }
  return target;
};
var deleteBackward = (editor, unit) => {
  var {
    selection
  } = editor;
  if (selection && Range.isCollapsed(selection)) {
    Transforms.delete(editor, {
      unit,
      reverse: true
    });
  }
};
var deleteForward = (editor, unit) => {
  var {
    selection
  } = editor;
  if (selection && Range.isCollapsed(selection)) {
    Transforms.delete(editor, {
      unit
    });
  }
};
var deleteFragment = function deleteFragment2(editor) {
  var {
    direction = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    selection
  } = editor;
  if (selection && Range.isExpanded(selection)) {
    Transforms.delete(editor, {
      reverse: direction === "backward"
    });
  }
};
var edges = (editor, at) => {
  return [Editor.start(editor, at), Editor.end(editor, at)];
};
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var elementReadOnly = function elementReadOnly2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Editor.above(editor, _objectSpread$5(_objectSpread$5({}, options), {}, {
    match: n => Element.isElement(n) && Editor.isElementReadOnly(editor, n)
  }));
};
var end = (editor, at) => {
  return Editor.point(editor, at, {
    edge: "end"
  });
};
var first = (editor, at) => {
  var path3 = Editor.path(editor, at, {
    edge: "start"
  });
  return Editor.node(editor, path3);
};
var fragment = (editor, at) => {
  var range2 = Editor.range(editor, at);
  return Node.fragment(editor, range2);
};
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var getVoid = function getVoid2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Editor.above(editor, _objectSpread$4(_objectSpread$4({}, options), {}, {
    match: n => Element.isElement(n) && Editor.isVoid(editor, n)
  }));
};
var hasBlocks = (editor, element) => {
  return element.children.some(n => Element.isElement(n) && Editor.isBlock(editor, n));
};
var hasInlines = (editor, element) => {
  return element.children.some(n => Text.isText(n) || Editor.isInline(editor, n));
};
var hasPath = (editor, path3) => {
  return Node.has(editor, path3);
};
var hasTexts = (editor, element) => {
  return element.children.every(n => Text.isText(n));
};
var insertBreak = editor => {
  Transforms.splitNodes(editor, {
    always: true
  });
};
var insertNode = (editor, node3, options) => {
  Transforms.insertNodes(editor, node3, options);
};
var insertSoftBreak = editor => {
  Transforms.splitNodes(editor, {
    always: true
  });
};
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var insertText = function insertText2(editor, text) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    selection,
    marks: marks3
  } = editor;
  if (selection) {
    if (marks3) {
      var node3 = _objectSpread$3({
        text
      }, marks3);
      Transforms.insertNodes(editor, node3, {
        at: options.at,
        voids: options.voids
      });
    } else {
      Transforms.insertText(editor, text, options);
    }
    editor.marks = null;
  }
};
var isBlock = (editor, value) => {
  return !editor.isInline(value);
};
var isEdge = (editor, point3, at) => {
  return Editor.isStart(editor, point3, at) || Editor.isEnd(editor, point3, at);
};
var isEmpty = (editor, element) => {
  var {
    children
  } = element;
  var [first2] = children;
  return children.length === 0 || children.length === 1 && Text.isText(first2) && first2.text === "" && !editor.isVoid(element);
};
var isEnd = (editor, point3, at) => {
  var end2 = Editor.end(editor, at);
  return Point.equals(point3, end2);
};
var isNormalizing = editor => {
  var isNormalizing2 = NORMALIZING.get(editor);
  return isNormalizing2 === void 0 ? true : isNormalizing2;
};
var isStart = (editor, point3, at) => {
  if (point3.offset !== 0) {
    return false;
  }
  var start2 = Editor.start(editor, at);
  return Point.equals(point3, start2);
};
var last = (editor, at) => {
  var path3 = Editor.path(editor, at, {
    edge: "end"
  });
  return Editor.node(editor, path3);
};
var leaf = function leaf2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path3 = Editor.path(editor, at, options);
  var node3 = Node.leaf(editor, path3);
  return [node3, path3];
};
function levels(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at = editor.selection,
      reverse = false,
      voids = false
    } = options;
    var {
      match
    } = options;
    if (match == null) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var levels2 = [];
    var path3 = Editor.path(editor, at);
    for (var [n, p] of Node.levels(editor, path3)) {
      if (!match(n, p)) {
        continue;
      }
      levels2.push([n, p]);
      if (!voids && Element.isElement(n) && Editor.isVoid(editor, n)) {
        break;
      }
    }
    if (reverse) {
      levels2.reverse();
    }
    yield* levels2;
  }();
}
var _excluded$1 = ["text"],
  _excluded2$1 = ["text"];
var marks = function marks2(editor) {
  var {
    marks: marks3,
    selection
  } = editor;
  if (!selection) {
    return null;
  }
  var {
    anchor,
    focus
  } = selection;
  if (marks3) {
    return marks3;
  }
  if (Range.isExpanded(selection)) {
    var isBackward = Range.isBackward(selection);
    if (isBackward) {
      [focus, anchor] = [anchor, focus];
    }
    var isEnd2 = Editor.isEnd(editor, anchor, anchor.path);
    if (isEnd2) {
      var after3 = Editor.after(editor, anchor);
      if (after3) {
        anchor = after3;
      }
    }
    var [match] = Editor.nodes(editor, {
      match: Text.isText,
      at: {
        anchor,
        focus
      }
    });
    if (match) {
      var [_node] = match;
      var _rest = _objectWithoutProperties(_node, _excluded$1);
      return _rest;
    } else {
      return {};
    }
  }
  var {
    path: path3
  } = anchor;
  var [node3] = Editor.leaf(editor, path3);
  if (anchor.offset === 0) {
    var prev = Editor.previous(editor, {
      at: path3,
      match: Text.isText
    });
    var markedVoid = Editor.above(editor, {
      match: n => Element.isElement(n) && Editor.isVoid(editor, n) && editor.markableVoid(n)
    });
    if (!markedVoid) {
      var block = Editor.above(editor, {
        match: n => Element.isElement(n) && Editor.isBlock(editor, n)
      });
      if (prev && block) {
        var [prevNode, prevPath] = prev;
        var [, blockPath] = block;
        if (Path.isAncestor(blockPath, prevPath)) {
          node3 = prevNode;
        }
      }
    }
  }
  var rest = _objectWithoutProperties(node3, _excluded2$1);
  return rest;
};
var next = function next2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    mode = "lowest",
    voids = false
  } = options;
  var {
    match,
    at = editor.selection
  } = options;
  if (!at) {
    return;
  }
  var pointAfterLocation = Editor.after(editor, at, {
    voids
  });
  if (!pointAfterLocation) return;
  var [, to] = Editor.last(editor, []);
  var span = [pointAfterLocation.path, to];
  if (Path.isPath(at) && at.length === 0) {
    throw new Error("Cannot get the next node from the root node!");
  }
  if (match == null) {
    if (Path.isPath(at)) {
      var [parent3] = Editor.parent(editor, at);
      match = n => parent3.children.includes(n);
    } else {
      match = () => true;
    }
  }
  var [next3] = Editor.nodes(editor, {
    at: span,
    match,
    mode,
    voids
  });
  return next3;
};
var node = function node2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path3 = Editor.path(editor, at, options);
  var node3 = Node.get(editor, path3);
  return [node3, path3];
};
function nodes(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at = editor.selection,
      mode = "all",
      universal = false,
      reverse = false,
      voids = false,
      pass: _pass,
      ignoreNonSelectable = false
    } = options;
    var {
      match
    } = options;
    if (!match) {
      match = () => true;
    }
    if (!at) {
      return;
    }
    var from;
    var to;
    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first2 = Editor.path(editor, at, {
        edge: "start"
      });
      var last2 = Editor.path(editor, at, {
        edge: "end"
      });
      from = reverse ? last2 : first2;
      to = reverse ? first2 : last2;
    }
    var nodeEntries = Node.nodes(editor, {
      reverse,
      from,
      to,
      pass: _ref => {
        var [node4, path4] = _ref;
        if (_pass && _pass([node4, path4])) return true;
        if (!Element.isElement(node4)) return false;
        if (!voids && (Editor.isVoid(editor, node4) || Editor.isElementReadOnly(editor, node4))) return true;
        if (ignoreNonSelectable && !Editor.isSelectable(editor, node4)) return true;
        return false;
      }
    });
    var matches = [];
    var hit;
    for (var [node3, path3] of nodeEntries) {
      if (ignoreNonSelectable && Element.isElement(node3) && !Editor.isSelectable(editor, node3)) {
        continue;
      }
      var isLower = hit && Path.compare(path3, hit[1]) === 0;
      if (mode === "highest" && isLower) {
        continue;
      }
      if (!match(node3, path3)) {
        if (universal && !isLower && Text.isText(node3)) {
          return;
        } else {
          continue;
        }
      }
      if (mode === "lowest" && isLower) {
        hit = [node3, path3];
        continue;
      }
      var emit = mode === "lowest" ? hit : [node3, path3];
      if (emit) {
        if (universal) {
          matches.push(emit);
        } else {
          yield emit;
        }
      }
      hit = [node3, path3];
    }
    if (mode === "lowest" && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    }
    if (universal) {
      yield* matches;
    }
  }();
}
var normalize = function normalize2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    force = false,
    operation
  } = options;
  var getDirtyPaths2 = editor2 => {
    return DIRTY_PATHS.get(editor2) || [];
  };
  var getDirtyPathKeys = editor2 => {
    return DIRTY_PATH_KEYS.get(editor2) || /* @__PURE__ */new Set();
  };
  var popDirtyPath = editor2 => {
    var path3 = getDirtyPaths2(editor2).pop();
    var key = path3.join(",");
    getDirtyPathKeys(editor2).delete(key);
    return path3;
  };
  if (!Editor.isNormalizing(editor)) {
    return;
  }
  if (force) {
    var allPaths = Array.from(Node.nodes(editor), _ref => {
      var [, p] = _ref;
      return p;
    });
    var allPathKeys = new Set(allPaths.map(p => p.join(",")));
    DIRTY_PATHS.set(editor, allPaths);
    DIRTY_PATH_KEYS.set(editor, allPathKeys);
  }
  if (getDirtyPaths2(editor).length === 0) {
    return;
  }
  Editor.withoutNormalizing(editor, () => {
    for (var dirtyPath of getDirtyPaths2(editor)) {
      if (Node.has(editor, dirtyPath)) {
        var entry = Editor.node(editor, dirtyPath);
        var [node3, _] = entry;
        if (Element.isElement(node3) && node3.children.length === 0) {
          editor.normalizeNode(entry, {
            operation
          });
        }
      }
    }
    var dirtyPaths = getDirtyPaths2(editor);
    var initialDirtyPathsLength = dirtyPaths.length;
    var iteration = 0;
    while (dirtyPaths.length !== 0) {
      if (!editor.shouldNormalize({
        dirtyPaths,
        iteration,
        initialDirtyPathsLength,
        operation
      })) {
        return;
      }
      var _dirtyPath = popDirtyPath(editor);
      if (Node.has(editor, _dirtyPath)) {
        var _entry = Editor.node(editor, _dirtyPath);
        editor.normalizeNode(_entry, {
          operation
        });
      }
      iteration++;
      dirtyPaths = getDirtyPaths2(editor);
    }
  });
};
var parent = function parent2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path3 = Editor.path(editor, at, options);
  var parentPath = Path.parent(path3);
  var entry = Editor.node(editor, parentPath);
  return entry;
};
var pathRef = function pathRef2(editor, path3) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    affinity = "forward"
  } = options;
  var ref = {
    current: path3,
    affinity,
    unref() {
      var {
        current
      } = ref;
      var pathRefs2 = Editor.pathRefs(editor);
      pathRefs2.delete(ref);
      ref.current = null;
      return current;
    }
  };
  var refs = Editor.pathRefs(editor);
  refs.add(ref);
  return ref;
};
var pathRefs = editor => {
  var refs = PATH_REFS.get(editor);
  if (!refs) {
    refs = /* @__PURE__ */new Set();
    PATH_REFS.set(editor, refs);
  }
  return refs;
};
var path = function path2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    depth,
    edge
  } = options;
  if (Path.isPath(at)) {
    if (edge === "start") {
      var [, firstPath] = Node.first(editor, at);
      at = firstPath;
    } else if (edge === "end") {
      var [, lastPath] = Node.last(editor, at);
      at = lastPath;
    }
  }
  if (Range.isRange(at)) {
    if (edge === "start") {
      at = Range.start(at);
    } else if (edge === "end") {
      at = Range.end(at);
    } else {
      at = Path.common(at.anchor.path, at.focus.path);
    }
  }
  if (Point.isPoint(at)) {
    at = at.path;
  }
  if (depth != null) {
    at = at.slice(0, depth);
  }
  return at;
};
var pointRef = function pointRef2(editor, point3) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    affinity = "forward"
  } = options;
  var ref = {
    current: point3,
    affinity,
    unref() {
      var {
        current
      } = ref;
      var pointRefs2 = Editor.pointRefs(editor);
      pointRefs2.delete(ref);
      ref.current = null;
      return current;
    }
  };
  var refs = Editor.pointRefs(editor);
  refs.add(ref);
  return ref;
};
var pointRefs = editor => {
  var refs = POINT_REFS.get(editor);
  if (!refs) {
    refs = /* @__PURE__ */new Set();
    POINT_REFS.set(editor, refs);
  }
  return refs;
};
var point = function point2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    edge = "start"
  } = options;
  if (Path.isPath(at)) {
    var path3;
    if (edge === "end") {
      var [, lastPath] = Node.last(editor, at);
      path3 = lastPath;
    } else {
      var [, firstPath] = Node.first(editor, at);
      path3 = firstPath;
    }
    var node3 = Node.get(editor, path3);
    if (!Text.isText(node3)) {
      throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
    }
    return {
      path: path3,
      offset: edge === "end" ? node3.text.length : 0
    };
  }
  if (Range.isRange(at)) {
    var [start2, end2] = Range.edges(at);
    return edge === "start" ? start2 : end2;
  }
  return at;
};
function positions(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at = editor.selection,
      unit = "offset",
      reverse = false,
      voids = false,
      ignoreNonSelectable = false
    } = options;
    if (!at) {
      return;
    }
    var range2 = Editor.range(editor, at);
    var [start2, end2] = Range.edges(range2);
    var first2 = reverse ? end2 : start2;
    var isNewBlock = false;
    var blockText = "";
    var distance = 0;
    var leafTextRemaining = 0;
    var leafTextOffset = 0;
    for (var [node3, path3] of Editor.nodes(editor, {
      at,
      reverse,
      voids,
      ignoreNonSelectable
    })) {
      if (Element.isElement(node3)) {
        if (!voids && (editor.isVoid(node3) || editor.isElementReadOnly(node3))) {
          yield Editor.start(editor, path3);
          continue;
        }
        if (editor.isInline(node3)) continue;
        if (Editor.hasInlines(editor, node3)) {
          var e = Path.isAncestor(path3, end2.path) ? end2 : Editor.end(editor, path3);
          var s = Path.isAncestor(path3, start2.path) ? start2 : Editor.start(editor, path3);
          blockText = Editor.string(editor, {
            anchor: s,
            focus: e
          }, {
            voids
          });
          isNewBlock = true;
        }
      }
      if (Text.isText(node3)) {
        var isFirst = Path.equals(path3, first2.path);
        if (isFirst) {
          leafTextRemaining = reverse ? first2.offset : node3.text.length - first2.offset;
          leafTextOffset = first2.offset;
        } else {
          leafTextRemaining = node3.text.length;
          leafTextOffset = reverse ? leafTextRemaining : 0;
        }
        if (isFirst || isNewBlock || unit === "offset") {
          yield {
            path: path3,
            offset: leafTextOffset
          };
          isNewBlock = false;
        }
        while (true) {
          if (distance === 0) {
            if (blockText === "") break;
            distance = calcDistance(blockText, unit, reverse);
            blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
          }
          leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
          leafTextRemaining = leafTextRemaining - distance;
          if (leafTextRemaining < 0) {
            distance = -leafTextRemaining;
            break;
          }
          distance = 0;
          yield {
            path: path3,
            offset: leafTextOffset
          };
        }
      }
    }
    function calcDistance(text, unit2, reverse2) {
      if (unit2 === "character") {
        return getCharacterDistance(text, reverse2);
      } else if (unit2 === "word") {
        return getWordDistance(text, reverse2);
      } else if (unit2 === "line" || unit2 === "block") {
        return text.length;
      }
      return 1;
    }
  }();
}
var previous = function previous2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    mode = "lowest",
    voids = false
  } = options;
  var {
    match,
    at = editor.selection
  } = options;
  if (!at) {
    return;
  }
  var pointBeforeLocation = Editor.before(editor, at, {
    voids
  });
  if (!pointBeforeLocation) {
    return;
  }
  var [, to] = Editor.first(editor, []);
  var span = [pointBeforeLocation.path, to];
  if (Path.isPath(at) && at.length === 0) {
    throw new Error("Cannot get the previous node from the root node!");
  }
  if (match == null) {
    if (Path.isPath(at)) {
      var [parent3] = Editor.parent(editor, at);
      match = n => parent3.children.includes(n);
    } else {
      match = () => true;
    }
  }
  var [previous3] = Editor.nodes(editor, {
    reverse: true,
    at: span,
    match,
    mode,
    voids
  });
  return previous3;
};
var rangeRef = function rangeRef2(editor, range2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    affinity = "forward"
  } = options;
  var ref = {
    current: range2,
    affinity,
    unref() {
      var {
        current
      } = ref;
      var rangeRefs2 = Editor.rangeRefs(editor);
      rangeRefs2.delete(ref);
      ref.current = null;
      return current;
    }
  };
  var refs = Editor.rangeRefs(editor);
  refs.add(ref);
  return ref;
};
var rangeRefs = editor => {
  var refs = RANGE_REFS.get(editor);
  if (!refs) {
    refs = /* @__PURE__ */new Set();
    RANGE_REFS.set(editor, refs);
  }
  return refs;
};
var range = (editor, at, to) => {
  if (Range.isRange(at) && !to) {
    return at;
  }
  var start2 = Editor.start(editor, at);
  var end2 = Editor.end(editor, to || at);
  return {
    anchor: start2,
    focus: end2
  };
};
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var removeMark = (editor, key) => {
  var {
    selection
  } = editor;
  if (selection) {
    var match = (node3, path3) => {
      if (!Text.isText(node3)) {
        return false;
      }
      var [parentNode2, parentPath] = Editor.parent(editor, path3);
      return !editor.isVoid(parentNode2) || editor.markableVoid(parentNode2);
    };
    var expandedSelection = Range.isExpanded(selection);
    var markAcceptingVoidSelected = false;
    if (!expandedSelection) {
      var [selectedNode, selectedPath] = Editor.node(editor, selection);
      if (selectedNode && match(selectedNode, selectedPath)) {
        var [parentNode] = Editor.parent(editor, selectedPath);
        markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
      }
    }
    if (expandedSelection || markAcceptingVoidSelected) {
      Transforms.unsetNodes(editor, key, {
        match,
        split: true,
        voids: true
      });
    } else {
      var marks3 = _objectSpread$2({}, Editor.marks(editor) || {});
      delete marks3[key];
      editor.marks = marks3;
      if (!FLUSHING.get(editor)) {
        editor.onChange();
      }
    }
  }
};
var setNormalizing = (editor, isNormalizing2) => {
  NORMALIZING.set(editor, isNormalizing2);
};
var start = (editor, at) => {
  return Editor.point(editor, at, {
    edge: "start"
  });
};
var string = function string2(editor, at) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    voids = false
  } = options;
  var range2 = Editor.range(editor, at);
  var [start2, end2] = Range.edges(range2);
  var text = "";
  for (var [node3, path3] of Editor.nodes(editor, {
    at: range2,
    match: Text.isText,
    voids
  })) {
    var t = node3.text;
    if (Path.equals(path3, end2.path)) {
      t = t.slice(0, end2.offset);
    }
    if (Path.equals(path3, start2.path)) {
      t = t.slice(start2.offset);
    }
    text += t;
  }
  return text;
};
var unhangRange = function unhangRange2(editor, range2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    voids = false
  } = options;
  var [start2, end2] = Range.edges(range2);
  if (start2.offset !== 0 || end2.offset !== 0 || Range.isCollapsed(range2) || Path.hasPrevious(end2.path)) {
    return range2;
  }
  var endBlock = Editor.above(editor, {
    at: end2,
    match: n => Element.isElement(n) && Editor.isBlock(editor, n),
    voids
  });
  var blockPath = endBlock ? endBlock[1] : [];
  var first2 = Editor.start(editor, start2);
  var before3 = {
    anchor: first2,
    focus: end2
  };
  var skip = true;
  for (var [node3, path3] of Editor.nodes(editor, {
    at: before3,
    match: Text.isText,
    reverse: true,
    voids
  })) {
    if (skip) {
      skip = false;
      continue;
    }
    if (node3.text !== "" || Path.isBefore(path3, blockPath)) {
      end2 = {
        path: path3,
        offset: node3.text.length
      };
      break;
    }
  }
  return {
    anchor: start2,
    focus: end2
  };
};
var withoutNormalizing = (editor, fn) => {
  var value = Editor.isNormalizing(editor);
  Editor.setNormalizing(editor, false);
  try {
    fn();
  } finally {
    Editor.setNormalizing(editor, value);
  }
  Editor.normalize(editor);
};
var shouldMergeNodesRemovePrevNode = (editor, _ref, _ref2) => {
  var [prevNode, prevPath] = _ref;
  return Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0;
};
var deleteText = function deleteText2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var _Editor$void, _Editor$void2;
    var {
      reverse = false,
      unit = "character",
      distance = 1,
      voids = false
    } = options;
    var {
      at = editor.selection,
      hanging = false
    } = options;
    if (!at) {
      return;
    }
    var isCollapsed = false;
    if (Range.isRange(at) && Range.isCollapsed(at)) {
      isCollapsed = true;
      at = at.anchor;
    }
    if (Point.isPoint(at)) {
      var furthestVoid = Editor.void(editor, {
        at,
        mode: "highest"
      });
      if (!voids && furthestVoid) {
        var [, voidPath] = furthestVoid;
        at = voidPath;
      } else {
        var opts = {
          unit,
          distance
        };
        var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
        at = {
          anchor: at,
          focus: target
        };
        hanging = true;
      }
    }
    if (Path.isPath(at)) {
      Transforms.removeNodes(editor, {
        at,
        voids
      });
      return;
    }
    if (Range.isCollapsed(at)) {
      return;
    }
    if (!hanging) {
      var [, _end] = Range.edges(at);
      var endOfDoc = Editor.end(editor, []);
      if (!Point.equals(_end, endOfDoc)) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
    }
    var [start2, end2] = Range.edges(at);
    var startBlock = Editor.above(editor, {
      match: n => Element.isElement(n) && Editor.isBlock(editor, n),
      at: start2,
      voids
    });
    var endBlock = Editor.above(editor, {
      match: n => Element.isElement(n) && Editor.isBlock(editor, n),
      at: end2,
      voids
    });
    var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
    var isSingleText = Path.equals(start2.path, end2.path);
    var startNonEditable = voids ? null : (_Editor$void = Editor.void(editor, {
      at: start2,
      mode: "highest"
    })) !== null && _Editor$void !== void 0 ? _Editor$void : Editor.elementReadOnly(editor, {
      at: start2,
      mode: "highest"
    });
    var endNonEditable = voids ? null : (_Editor$void2 = Editor.void(editor, {
      at: end2,
      mode: "highest"
    })) !== null && _Editor$void2 !== void 0 ? _Editor$void2 : Editor.elementReadOnly(editor, {
      at: end2,
      mode: "highest"
    });
    if (startNonEditable) {
      var before3 = Editor.before(editor, start2);
      if (before3 && startBlock && Path.isAncestor(startBlock[1], before3.path)) {
        start2 = before3;
      }
    }
    if (endNonEditable) {
      var after3 = Editor.after(editor, end2);
      if (after3 && endBlock && Path.isAncestor(endBlock[1], after3.path)) {
        end2 = after3;
      }
    }
    var matches = [];
    var lastPath;
    for (var entry of Editor.nodes(editor, {
      at,
      voids
    })) {
      var [node3, path3] = entry;
      if (lastPath && Path.compare(path3, lastPath) === 0) {
        continue;
      }
      if (!voids && Element.isElement(node3) && (Editor.isVoid(editor, node3) || Editor.isElementReadOnly(editor, node3)) || !Path.isCommon(path3, start2.path) && !Path.isCommon(path3, end2.path)) {
        matches.push(entry);
        lastPath = path3;
      }
    }
    var pathRefs2 = Array.from(matches, _ref => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    var startRef = Editor.pointRef(editor, start2);
    var endRef = Editor.pointRef(editor, end2);
    var removedText = "";
    if (!isSingleText && !startNonEditable) {
      var _point = startRef.current;
      var [_node] = Editor.leaf(editor, _point);
      var {
        path: _path
      } = _point;
      var {
        offset
      } = start2;
      var text = _node.text.slice(offset);
      if (text.length > 0) {
        editor.apply({
          type: "remove_text",
          path: _path,
          offset,
          text
        });
        removedText = text;
      }
    }
    pathRefs2.reverse().map(r => r.unref()).filter(r => r !== null).forEach(p => Transforms.removeNodes(editor, {
      at: p,
      voids
    }));
    if (!endNonEditable) {
      var _point2 = endRef.current;
      var [_node2] = Editor.leaf(editor, _point2);
      var {
        path: _path2
      } = _point2;
      var _offset = isSingleText ? start2.offset : 0;
      var _text = _node2.text.slice(_offset, end2.offset);
      if (_text.length > 0) {
        editor.apply({
          type: "remove_text",
          path: _path2,
          offset: _offset,
          text: _text
        });
        removedText = _text;
      }
    }
    if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
      Transforms.mergeNodes(editor, {
        at: endRef.current,
        hanging: true,
        voids
      });
    }
    if (isCollapsed && reverse && unit === "character" && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
      Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
    }
    var startUnref = startRef.unref();
    var endUnref = endRef.unref();
    var point3 = reverse ? startUnref || endUnref : endUnref || startUnref;
    if (options.at == null && point3) {
      Transforms.select(editor, point3);
    }
  });
};
var insertFragment = function insertFragment2(editor, fragment2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      hanging = false,
      voids = false
    } = options;
    var {
      at = getDefaultInsertLocation(editor),
      batchDirty = true
    } = options;
    if (!fragment2.length) {
      return;
    }
    if (Range.isRange(at)) {
      if (!hanging) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var [, end2] = Range.edges(at);
        if (!voids && Editor.void(editor, {
          at: end2
        })) {
          return;
        }
        var pointRef3 = Editor.pointRef(editor, end2);
        Transforms.delete(editor, {
          at
        });
        at = pointRef3.unref();
      }
    } else if (Path.isPath(at)) {
      at = Editor.start(editor, at);
    }
    if (!voids && Editor.void(editor, {
      at
    })) {
      return;
    }
    var inlineElementMatch = Editor.above(editor, {
      at,
      match: n => Element.isElement(n) && Editor.isInline(editor, n),
      mode: "highest",
      voids
    });
    if (inlineElementMatch) {
      var [, _inlinePath] = inlineElementMatch;
      if (Editor.isEnd(editor, at, _inlinePath)) {
        var after3 = Editor.after(editor, _inlinePath);
        at = after3;
      } else if (Editor.isStart(editor, at, _inlinePath)) {
        var before3 = Editor.before(editor, _inlinePath);
        at = before3;
      }
    }
    var blockMatch = Editor.above(editor, {
      match: n => Element.isElement(n) && Editor.isBlock(editor, n),
      at,
      voids
    });
    var [, blockPath] = blockMatch;
    var isBlockStart = Editor.isStart(editor, at, blockPath);
    var isBlockEnd = Editor.isEnd(editor, at, blockPath);
    var isBlockEmpty = isBlockStart && isBlockEnd;
    var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
    var mergeEnd = !isBlockEnd;
    var [, firstPath] = Node.first({
      children: fragment2
    }, []);
    var [, lastPath] = Node.last({
      children: fragment2
    }, []);
    var matches = [];
    var matcher = _ref => {
      var [n, p] = _ref;
      var isRoot = p.length === 0;
      if (isRoot) {
        return false;
      }
      if (isBlockEmpty) {
        return true;
      }
      if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
        return false;
      }
      if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
        return false;
      }
      return true;
    };
    for (var entry of Node.nodes({
      children: fragment2
    }, {
      pass: matcher
    })) {
      if (matcher(entry)) {
        matches.push(entry);
      }
    }
    var starts = [];
    var middles = [];
    var ends = [];
    var starting = true;
    var hasBlocks2 = false;
    for (var [node3] of matches) {
      if (Element.isElement(node3) && !editor.isInline(node3)) {
        starting = false;
        hasBlocks2 = true;
        middles.push(node3);
      } else if (starting) {
        starts.push(node3);
      } else {
        ends.push(node3);
      }
    }
    var [inlineMatch] = Editor.nodes(editor, {
      at,
      match: n => Text.isText(n) || Editor.isInline(editor, n),
      mode: "highest",
      voids
    });
    var [, inlinePath] = inlineMatch;
    var isInlineStart = Editor.isStart(editor, at, inlinePath);
    var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
    var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
    var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
    Transforms.splitNodes(editor, {
      at,
      match: n => hasBlocks2 ? Element.isElement(n) && Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n),
      mode: hasBlocks2 ? "lowest" : "highest",
      always: hasBlocks2 && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
      voids
    });
    var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
    Transforms.insertNodes(editor, starts, {
      at: startRef.current,
      match: n => Text.isText(n) || Editor.isInline(editor, n),
      mode: "highest",
      voids,
      batchDirty
    });
    if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
      Transforms.delete(editor, {
        at: blockPath,
        voids
      });
    }
    Transforms.insertNodes(editor, middles, {
      at: middleRef.current,
      match: n => Element.isElement(n) && Editor.isBlock(editor, n),
      mode: "lowest",
      voids,
      batchDirty
    });
    Transforms.insertNodes(editor, ends, {
      at: endRef.current,
      match: n => Text.isText(n) || Editor.isInline(editor, n),
      mode: "highest",
      voids,
      batchDirty
    });
    if (!options.at) {
      var path3;
      if (ends.length > 0 && endRef.current) {
        path3 = Path.previous(endRef.current);
      } else if (middles.length > 0 && middleRef.current) {
        path3 = Path.previous(middleRef.current);
      } else if (startRef.current) {
        path3 = Path.previous(startRef.current);
      }
      if (path3) {
        var _end = Editor.end(editor, path3);
        Transforms.select(editor, _end);
      }
    }
    startRef.unref();
    middleRef.unref();
    endRef.unref();
  });
};
var collapse = function collapse2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    edge = "anchor"
  } = options;
  var {
    selection
  } = editor;
  if (!selection) {
    return;
  } else if (edge === "anchor") {
    Transforms.select(editor, selection.anchor);
  } else if (edge === "focus") {
    Transforms.select(editor, selection.focus);
  } else if (edge === "start") {
    var [start2] = Range.edges(selection);
    Transforms.select(editor, start2);
  } else if (edge === "end") {
    var [, end2] = Range.edges(selection);
    Transforms.select(editor, end2);
  }
};
var deselect = editor => {
  var {
    selection
  } = editor;
  if (selection) {
    editor.apply({
      type: "set_selection",
      properties: selection,
      newProperties: null
    });
  }
};
var move = function move2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var {
    selection
  } = editor;
  var {
    distance = 1,
    unit = "character",
    reverse = false
  } = options;
  var {
    edge = null
  } = options;
  if (!selection) {
    return;
  }
  if (edge === "start") {
    edge = Range.isBackward(selection) ? "focus" : "anchor";
  }
  if (edge === "end") {
    edge = Range.isBackward(selection) ? "anchor" : "focus";
  }
  var {
    anchor,
    focus
  } = selection;
  var opts = {
    distance,
    unit,
    ignoreNonSelectable: true
  };
  var props = {};
  if (edge == null || edge === "anchor") {
    var point3 = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
    if (point3) {
      props.anchor = point3;
    }
  }
  if (edge == null || edge === "focus") {
    var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
    if (_point) {
      props.focus = _point;
    }
  }
  Transforms.setSelection(editor, props);
};
var select = (editor, target) => {
  var {
    selection
  } = editor;
  target = Editor.range(editor, target);
  if (selection) {
    Transforms.setSelection(editor, target);
    return;
  }
  if (!Range.isRange(target)) {
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
  }
  editor.apply({
    type: "set_selection",
    properties: selection,
    newProperties: target
  });
};
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var setPoint = function setPoint2(editor, props) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var {
    selection
  } = editor;
  var {
    edge = "both"
  } = options;
  if (!selection) {
    return;
  }
  if (edge === "start") {
    edge = Range.isBackward(selection) ? "focus" : "anchor";
  }
  if (edge === "end") {
    edge = Range.isBackward(selection) ? "anchor" : "focus";
  }
  var {
    anchor,
    focus
  } = selection;
  var point3 = edge === "anchor" ? anchor : focus;
  Transforms.setSelection(editor, {
    [edge === "anchor" ? "anchor" : "focus"]: _objectSpread$1(_objectSpread$1({}, point3), props)
  });
};
var setSelection = (editor, props) => {
  var {
    selection
  } = editor;
  var oldProps = {};
  var newProps = {};
  if (!selection) {
    return;
  }
  for (var k in props) {
    if (k === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== "anchor" && k !== "focus" && props[k] !== selection[k]) {
      oldProps[k] = selection[k];
      newProps[k] = props[k];
    }
  }
  if (Object.keys(oldProps).length > 0) {
    editor.apply({
      type: "set_selection",
      properties: oldProps,
      newProperties: newProps
    });
  }
};
var insertNodes = function insertNodes2(editor, nodes2) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      hanging = false,
      voids = false,
      mode = "lowest",
      batchDirty = true
    } = options;
    var {
      at,
      match,
      select: select2
    } = options;
    if (Node.isNode(nodes2)) {
      nodes2 = [nodes2];
    }
    if (nodes2.length === 0) {
      return;
    }
    var [node3] = nodes2;
    if (!at) {
      at = getDefaultInsertLocation(editor);
      if (select2 !== false) {
        select2 = true;
      }
    }
    if (select2 == null) {
      select2 = false;
    }
    if (Range.isRange(at)) {
      if (!hanging) {
        at = Editor.unhangRange(editor, at, {
          voids
        });
      }
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var [, end2] = Range.edges(at);
        var pointRef3 = Editor.pointRef(editor, end2);
        Transforms.delete(editor, {
          at
        });
        at = pointRef3.unref();
      }
    }
    if (Point.isPoint(at)) {
      if (match == null) {
        if (Text.isText(node3)) {
          match = n => Text.isText(n);
        } else if (editor.isInline(node3)) {
          match = n => Text.isText(n) || Editor.isInline(editor, n);
        } else {
          match = n => Element.isElement(n) && Editor.isBlock(editor, n);
        }
      }
      var [entry] = Editor.nodes(editor, {
        at: at.path,
        match,
        mode,
        voids
      });
      if (entry) {
        var [, matchPath2] = entry;
        var pathRef3 = Editor.pathRef(editor, matchPath2);
        var isAtEnd = Editor.isEnd(editor, at, matchPath2);
        Transforms.splitNodes(editor, {
          at,
          match,
          mode,
          voids
        });
        var path3 = pathRef3.unref();
        at = isAtEnd ? Path.next(path3) : path3;
      } else {
        return;
      }
    }
    var parentPath = Path.parent(at);
    var index = at[at.length - 1];
    if (!voids && Editor.void(editor, {
      at: parentPath
    })) {
      return;
    }
    if (batchDirty) {
      var batchedOps = [];
      var newDirtyPaths = Path.levels(parentPath);
      batchDirtyPaths(editor, () => {
        var _loop = function _loop2() {
          var path4 = parentPath.concat(index);
          index++;
          var op = {
            type: "insert_node",
            path: path4,
            node: _node
          };
          editor.apply(op);
          at = Path.next(at);
          batchedOps.push(op);
          if (Text.isText(_node)) {
            newDirtyPaths.push(path4);
          } else {
            newDirtyPaths.push(...Array.from(Node.nodes(_node), _ref => {
              var [, p] = _ref;
              return path4.concat(p);
            }));
          }
        };
        for (var _node of nodes2) {
          _loop();
        }
      }, () => {
        updateDirtyPaths(editor, newDirtyPaths, p => {
          var newPath = p;
          for (var op of batchedOps) {
            if (Path.operationCanTransformPath(op)) {
              newPath = Path.transform(newPath, op);
              if (!newPath) {
                return null;
              }
            }
          }
          return newPath;
        });
      });
    } else {
      for (var _node2 of nodes2) {
        var _path = parentPath.concat(index);
        index++;
        editor.apply({
          type: "insert_node",
          path: _path,
          node: _node2
        });
        at = Path.next(at);
      }
    }
    at = Path.previous(at);
    if (select2) {
      var point3 = Editor.end(editor, at);
      if (point3) {
        Transforms.select(editor, point3);
      }
    }
  });
};
var liftNodes = function liftNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      at = editor.selection,
      mode = "lowest",
      voids = false
    } = options;
    var {
      match
    } = options;
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : n => Element.isElement(n) && Editor.isBlock(editor, n);
    }
    if (!at) {
      return;
    }
    var matches = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(matches, _ref => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    for (var pathRef3 of pathRefs2) {
      var path3 = pathRef3.unref();
      if (path3.length < 2) {
        throw new Error("Cannot lift node at a path [".concat(path3, "] because it has a depth of less than `2`."));
      }
      var parentNodeEntry = Editor.node(editor, Path.parent(path3));
      var [parent3, parentPath] = parentNodeEntry;
      var index = path3[path3.length - 1];
      var {
        length
      } = parent3.children;
      if (length === 1) {
        var toPath = Path.next(parentPath);
        Transforms.moveNodes(editor, {
          at: path3,
          to: toPath,
          voids
        });
        Transforms.removeNodes(editor, {
          at: parentPath,
          voids
        });
      } else if (index === 0) {
        Transforms.moveNodes(editor, {
          at: path3,
          to: parentPath,
          voids
        });
      } else if (index === length - 1) {
        var _toPath = Path.next(parentPath);
        Transforms.moveNodes(editor, {
          at: path3,
          to: _toPath,
          voids
        });
      } else {
        var splitPath = Path.next(path3);
        var _toPath2 = Path.next(parentPath);
        Transforms.splitNodes(editor, {
          at: splitPath,
          voids
        });
        Transforms.moveNodes(editor, {
          at: path3,
          to: _toPath2,
          voids
        });
      }
    }
  });
};
var _excluded = ["text"],
  _excluded2 = ["children"];
var hasSingleChildNest = (editor, node3) => {
  if (Element.isElement(node3)) {
    var element = node3;
    if (Editor.isVoid(editor, node3)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node3)) {
    return false;
  } else {
    return true;
  }
};
var mergeNodes = function mergeNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      match,
      at = editor.selection
    } = options;
    var {
      hanging = false,
      voids = false,
      mode = "lowest"
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      if (Path.isPath(at)) {
        var [parent3] = Editor.parent(editor, at);
        match = n => parent3.children.includes(n);
      } else {
        match = n => Element.isElement(n) && Editor.isBlock(editor, n);
      }
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (Range.isRange(at)) {
      if (Range.isCollapsed(at)) {
        at = at.anchor;
      } else {
        var [, end2] = Range.edges(at);
        var pointRef3 = Editor.pointRef(editor, end2);
        Transforms.delete(editor, {
          at
        });
        at = pointRef3.unref();
        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }
    }
    var [current] = Editor.nodes(editor, {
      at,
      match,
      voids,
      mode
    });
    var prev = Editor.previous(editor, {
      at,
      match,
      voids,
      mode
    });
    if (!current || !prev) {
      return;
    }
    var [node3, path3] = current;
    var [prevNode, prevPath] = prev;
    if (path3.length === 0 || prevPath.length === 0) {
      return;
    }
    var newPath = Path.next(prevPath);
    var commonPath = Path.common(path3, prevPath);
    var isPreviousSibling = Path.isSibling(path3, prevPath);
    var levels2 = Array.from(Editor.levels(editor, {
      at: path3
    }), _ref => {
      var [n] = _ref;
      return n;
    }).slice(commonPath.length).slice(0, -1);
    var emptyAncestor = Editor.above(editor, {
      at: path3,
      mode: "highest",
      match: n => levels2.includes(n) && hasSingleChildNest(editor, n)
    });
    var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
    var properties;
    var position;
    if (Text.isText(node3) && Text.isText(prevNode)) {
      var rest = _objectWithoutProperties(node3, _excluded);
      position = prevNode.text.length;
      properties = rest;
    } else if (Element.isElement(node3) && Element.isElement(prevNode)) {
      var rest = _objectWithoutProperties(node3, _excluded2);
      position = prevNode.children.length;
      properties = rest;
    } else {
      throw new Error("Cannot merge the node at path [".concat(path3, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node3), " ").concat(Scrubber.stringify(prevNode)));
    }
    if (!isPreviousSibling) {
      Transforms.moveNodes(editor, {
        at: path3,
        to: newPath,
        voids
      });
    }
    if (emptyRef) {
      Transforms.removeNodes(editor, {
        at: emptyRef.current,
        voids
      });
    }
    if (Editor.shouldMergeNodesRemovePrevNode(editor, prev, current)) {
      Transforms.removeNodes(editor, {
        at: prevPath,
        voids
      });
    } else {
      editor.apply({
        type: "merge_node",
        path: newPath,
        position,
        properties
      });
    }
    if (emptyRef) {
      emptyRef.unref();
    }
  });
};
var moveNodes = (editor, options) => {
  Editor.withoutNormalizing(editor, () => {
    var {
      to,
      at = editor.selection,
      mode = "lowest",
      voids = false
    } = options;
    var {
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : n => Element.isElement(n) && Editor.isBlock(editor, n);
    }
    var toRef = Editor.pathRef(editor, to);
    var targets = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(targets, _ref => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    for (var pathRef3 of pathRefs2) {
      var path3 = pathRef3.unref();
      var newPath = toRef.current;
      if (path3.length !== 0) {
        editor.apply({
          type: "move_node",
          path: path3,
          newPath
        });
      }
      if (toRef.current && Path.isSibling(newPath, path3) && Path.isAfter(newPath, path3)) {
        toRef.current = Path.next(toRef.current);
      }
    }
    toRef.unref();
  });
};
var removeNodes = function removeNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      hanging = false,
      voids = false,
      mode = "lowest"
    } = options;
    var {
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : n => Element.isElement(n) && Editor.isBlock(editor, n);
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    var depths = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(depths, _ref => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    });
    for (var pathRef3 of pathRefs2) {
      var path3 = pathRef3.unref();
      if (path3) {
        var [node3] = Editor.node(editor, path3);
        editor.apply({
          type: "remove_node",
          path: path3,
          node: node3
        });
      }
    }
  });
};
var setNodes = function setNodes2(editor, props) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      match,
      at = editor.selection,
      compare,
      merge
    } = options;
    var {
      hanging = false,
      mode = "lowest",
      split = false,
      voids = false
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : n => Element.isElement(n) && Editor.isBlock(editor, n);
    }
    if (!hanging && Range.isRange(at)) {
      at = Editor.unhangRange(editor, at, {
        voids
      });
    }
    if (split && Range.isRange(at)) {
      if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
        return;
      }
      var rangeRef3 = Editor.rangeRef(editor, at, {
        affinity: "inward"
      });
      var [start2, end2] = Range.edges(at);
      var splitMode = mode === "lowest" ? "lowest" : "highest";
      var endAtEndOfNode = Editor.isEnd(editor, end2, end2.path);
      Transforms.splitNodes(editor, {
        at: end2,
        match,
        mode: splitMode,
        voids,
        always: !endAtEndOfNode
      });
      var startAtStartOfNode = Editor.isStart(editor, start2, start2.path);
      Transforms.splitNodes(editor, {
        at: start2,
        match,
        mode: splitMode,
        voids,
        always: !startAtStartOfNode
      });
      at = rangeRef3.unref();
      if (options.at == null) {
        Transforms.select(editor, at);
      }
    }
    if (!compare) {
      compare = (prop, nodeProp) => prop !== nodeProp;
    }
    for (var [node3, path3] of Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    })) {
      var properties = {};
      var newProperties = {};
      if (path3.length === 0) {
        continue;
      }
      var hasChanges = false;
      for (var k in props) {
        if (k === "children" || k === "text") {
          continue;
        }
        if (compare(props[k], node3[k])) {
          hasChanges = true;
          if (node3.hasOwnProperty(k)) properties[k] = node3[k];
          if (merge) {
            if (props[k] != null) newProperties[k] = merge(node3[k], props[k]);
          } else {
            if (props[k] != null) newProperties[k] = props[k];
          }
        }
      }
      if (hasChanges) {
        editor.apply({
          type: "set_node",
          path: path3,
          properties,
          newProperties
        });
      }
    }
  });
};
var deleteRange = (editor, range2) => {
  if (Range.isCollapsed(range2)) {
    return range2.anchor;
  } else {
    var [, end2] = Range.edges(range2);
    var pointRef3 = Editor.pointRef(editor, end2);
    Transforms.delete(editor, {
      at: range2
    });
    return pointRef3.unref();
  }
};
var splitNodes = function splitNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      mode = "lowest",
      voids = false
    } = options;
    var {
      match,
      at = editor.selection,
      height = 0,
      always = false
    } = options;
    if (match == null) {
      match = n => Element.isElement(n) && Editor.isBlock(editor, n);
    }
    if (Range.isRange(at)) {
      at = deleteRange(editor, at);
    }
    if (Path.isPath(at)) {
      var path3 = at;
      var point3 = Editor.point(editor, path3);
      var [parent3] = Editor.parent(editor, path3);
      match = n => n === parent3;
      height = point3.path.length - path3.length + 1;
      at = point3;
      always = true;
    }
    if (!at) {
      return;
    }
    var beforeRef = Editor.pointRef(editor, at, {
      affinity: "backward"
    });
    var afterRef;
    try {
      var [highest] = Editor.nodes(editor, {
        at,
        match,
        mode,
        voids
      });
      if (!highest) {
        return;
      }
      var voidMatch = Editor.void(editor, {
        at,
        mode: "highest"
      });
      var nudge = 0;
      if (!voids && voidMatch) {
        var [voidNode, voidPath] = voidMatch;
        if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
          var after3 = Editor.after(editor, voidPath);
          if (!after3) {
            var text = {
              text: ""
            };
            var afterPath = Path.next(voidPath);
            Transforms.insertNodes(editor, text, {
              at: afterPath,
              voids
            });
            after3 = Editor.point(editor, afterPath);
          }
          at = after3;
          always = true;
        }
        var siblingHeight = at.path.length - voidPath.length;
        height = siblingHeight + 1;
        always = true;
      }
      afterRef = Editor.pointRef(editor, at);
      var depth = at.path.length - height;
      var [, highestPath] = highest;
      var lowestPath = at.path.slice(0, depth);
      var position = height === 0 ? at.offset : at.path[depth] + nudge;
      for (var [node3, _path] of Editor.levels(editor, {
        at: lowestPath,
        reverse: true,
        voids
      })) {
        var split = false;
        if (_path.length < highestPath.length || _path.length === 0 || !voids && Element.isElement(node3) && Editor.isVoid(editor, node3)) {
          break;
        }
        var _point = beforeRef.current;
        var isEnd2 = Editor.isEnd(editor, _point, _path);
        if (always || !beforeRef || !Editor.isEdge(editor, _point, _path)) {
          split = true;
          var properties = Node.extractProps(node3);
          editor.apply({
            type: "split_node",
            path: _path,
            position,
            properties
          });
        }
        position = _path[_path.length - 1] + (split || isEnd2 ? 1 : 0);
      }
      if (options.at == null) {
        var _point2 = afterRef.current || Editor.end(editor, []);
        Transforms.select(editor, _point2);
      }
    } finally {
      var _afterRef;
      beforeRef.unref();
      (_afterRef = afterRef) === null || _afterRef === void 0 || _afterRef.unref();
    }
  });
};
var unsetNodes = function unsetNodes2(editor, props) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!Array.isArray(props)) {
    props = [props];
  }
  var obj = {};
  for (var key of props) {
    obj[key] = null;
  }
  Transforms.setNodes(editor, obj, options);
};
var unwrapNodes = function unwrapNodes2(editor) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      mode = "lowest",
      split = false,
      voids = false
    } = options;
    var {
      at = editor.selection,
      match
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      match = Path.isPath(at) ? matchPath(editor, at) : n => Element.isElement(n) && Editor.isBlock(editor, n);
    }
    if (Path.isPath(at)) {
      at = Editor.range(editor, at);
    }
    var rangeRef3 = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
    var matches = Editor.nodes(editor, {
      at,
      match,
      mode,
      voids
    });
    var pathRefs2 = Array.from(matches, _ref => {
      var [, p] = _ref;
      return Editor.pathRef(editor, p);
    }).reverse();
    var _loop = function _loop2() {
      var path3 = pathRef3.unref();
      var [node3] = Editor.node(editor, path3);
      var range2 = Editor.range(editor, path3);
      if (split && rangeRef3) {
        range2 = Range.intersection(rangeRef3.current, range2);
      }
      Transforms.liftNodes(editor, {
        at: range2,
        match: n => Element.isAncestor(node3) && node3.children.includes(n),
        voids
      });
    };
    for (var pathRef3 of pathRefs2) {
      _loop();
    }
    if (rangeRef3) {
      rangeRef3.unref();
    }
  });
};
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var wrapNodes = function wrapNodes2(editor, element) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Editor.withoutNormalizing(editor, () => {
    var {
      mode = "lowest",
      split = false,
      voids = false
    } = options;
    var {
      match,
      at = editor.selection
    } = options;
    if (!at) {
      return;
    }
    if (match == null) {
      if (Path.isPath(at)) {
        match = matchPath(editor, at);
      } else if (editor.isInline(element)) {
        match = n => Element.isElement(n) && Editor.isInline(editor, n) || Text.isText(n);
      } else {
        match = n => Element.isElement(n) && Editor.isBlock(editor, n);
      }
    }
    if (split && Range.isRange(at)) {
      var [start2, end2] = Range.edges(at);
      var rangeRef3 = Editor.rangeRef(editor, at, {
        affinity: "inward"
      });
      Transforms.splitNodes(editor, {
        at: end2,
        match,
        voids
      });
      Transforms.splitNodes(editor, {
        at: start2,
        match,
        voids
      });
      at = rangeRef3.unref();
      if (options.at == null) {
        Transforms.select(editor, at);
      }
    }
    var roots = Array.from(Editor.nodes(editor, {
      at,
      match: editor.isInline(element) ? n => Element.isElement(n) && Editor.isBlock(editor, n) : n => Editor.isEditor(n),
      mode: "lowest",
      voids
    }));
    var _loop = function _loop2() {
        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;
        if (!a) {
          return 0;
        }
        var matches = Array.from(Editor.nodes(editor, {
          at: a,
          match,
          mode,
          voids
        }));
        if (matches.length > 0) {
          var [first2] = matches;
          var last2 = matches[matches.length - 1];
          var [, firstPath] = first2;
          var [, lastPath] = last2;
          if (firstPath.length === 0 && lastPath.length === 0) {
            return 0;
          }
          var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
          var range2 = Editor.range(editor, firstPath, lastPath);
          var commonNodeEntry = Editor.node(editor, commonPath);
          var [commonNode] = commonNodeEntry;
          var depth = commonPath.length + 1;
          var wrapperPath = Path.next(lastPath.slice(0, depth));
          var wrapper = _objectSpread(_objectSpread({}, element), {}, {
            children: []
          });
          Transforms.insertNodes(editor, wrapper, {
            at: wrapperPath,
            voids
          });
          Transforms.moveNodes(editor, {
            at: range2,
            match: n => Element.isAncestor(commonNode) && commonNode.children.includes(n),
            to: wrapperPath.concat(0),
            voids
          });
        }
      },
      _ret;
    for (var [, rootPath] of roots) {
      _ret = _loop();
      if (_ret === 0) continue;
    }
  });
};
var createEditor = () => {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => false,
    isInline: () => false,
    isSelectable: () => true,
    isVoid: () => false,
    markableVoid: () => false,
    onChange: () => {},
    apply: function apply$1() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return apply(editor, ...args);
    },
    addMark: function addMark$1() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return addMark(editor, ...args);
    },
    deleteBackward: function deleteBackward$1() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return deleteBackward(editor, ...args);
    },
    deleteForward: function deleteForward$1() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return deleteForward(editor, ...args);
    },
    deleteFragment: function deleteFragment$1() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return deleteFragment(editor, ...args);
    },
    getFragment: function getFragment$1() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return getFragment(editor, ...args);
    },
    insertBreak: function insertBreak$1() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return insertBreak(editor, ...args);
    },
    insertSoftBreak: function insertSoftBreak$1() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return insertSoftBreak(editor, ...args);
    },
    insertFragment: function insertFragment$1() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      return insertFragment(editor, ...args);
    },
    insertNode: function insertNode$1() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      return insertNode(editor, ...args);
    },
    insertText: function insertText$1() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }
      return insertText(editor, ...args);
    },
    normalizeNode: function normalizeNode$1() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }
      return normalizeNode(editor, ...args);
    },
    removeMark: function removeMark$1() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }
      return removeMark(editor, ...args);
    },
    getDirtyPaths: function getDirtyPaths$1() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }
      return getDirtyPaths(editor, ...args);
    },
    shouldNormalize: function shouldNormalize$1() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }
      return shouldNormalize(editor, ...args);
    },
    above: function above$1() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }
      return above(editor, ...args);
    },
    after: function after$1() {
      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }
      return after(editor, ...args);
    },
    before: function before$1() {
      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }
      return before(editor, ...args);
    },
    collapse: function collapse$1() {
      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }
      return collapse(editor, ...args);
    },
    delete: function _delete() {
      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }
      return deleteText(editor, ...args);
    },
    deselect: function deselect$1() {
      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }
      return deselect(editor, ...args);
    },
    edges: function edges$1() {
      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }
      return edges(editor, ...args);
    },
    elementReadOnly: function elementReadOnly$1() {
      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }
      return elementReadOnly(editor, ...args);
    },
    end: function end$1() {
      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }
      return end(editor, ...args);
    },
    first: function first$1() {
      for (var _len25 = arguments.length, args = new Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
        args[_key25] = arguments[_key25];
      }
      return first(editor, ...args);
    },
    fragment: function fragment$1() {
      for (var _len26 = arguments.length, args = new Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
        args[_key26] = arguments[_key26];
      }
      return fragment(editor, ...args);
    },
    getMarks: function getMarks() {
      for (var _len27 = arguments.length, args = new Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
        args[_key27] = arguments[_key27];
      }
      return marks(editor, ...args);
    },
    hasBlocks: function hasBlocks$1() {
      for (var _len28 = arguments.length, args = new Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
        args[_key28] = arguments[_key28];
      }
      return hasBlocks(editor, ...args);
    },
    hasInlines: function hasInlines$1() {
      for (var _len29 = arguments.length, args = new Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
        args[_key29] = arguments[_key29];
      }
      return hasInlines(editor, ...args);
    },
    hasPath: function hasPath$1() {
      for (var _len30 = arguments.length, args = new Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
        args[_key30] = arguments[_key30];
      }
      return hasPath(editor, ...args);
    },
    hasTexts: function hasTexts$1() {
      for (var _len31 = arguments.length, args = new Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
        args[_key31] = arguments[_key31];
      }
      return hasTexts(editor, ...args);
    },
    insertNodes: function insertNodes$1() {
      for (var _len32 = arguments.length, args = new Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
        args[_key32] = arguments[_key32];
      }
      return insertNodes(editor, ...args);
    },
    isBlock: function isBlock$1() {
      for (var _len33 = arguments.length, args = new Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
        args[_key33] = arguments[_key33];
      }
      return isBlock(editor, ...args);
    },
    isEdge: function isEdge$1() {
      for (var _len34 = arguments.length, args = new Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
        args[_key34] = arguments[_key34];
      }
      return isEdge(editor, ...args);
    },
    isEmpty: function isEmpty$1() {
      for (var _len35 = arguments.length, args = new Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
        args[_key35] = arguments[_key35];
      }
      return isEmpty(editor, ...args);
    },
    isEnd: function isEnd$1() {
      for (var _len36 = arguments.length, args = new Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
        args[_key36] = arguments[_key36];
      }
      return isEnd(editor, ...args);
    },
    isNormalizing: function isNormalizing$1() {
      for (var _len37 = arguments.length, args = new Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
        args[_key37] = arguments[_key37];
      }
      return isNormalizing(editor, ...args);
    },
    isStart: function isStart$1() {
      for (var _len38 = arguments.length, args = new Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
        args[_key38] = arguments[_key38];
      }
      return isStart(editor, ...args);
    },
    last: function last$1() {
      for (var _len39 = arguments.length, args = new Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
        args[_key39] = arguments[_key39];
      }
      return last(editor, ...args);
    },
    leaf: function leaf$1() {
      for (var _len40 = arguments.length, args = new Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
        args[_key40] = arguments[_key40];
      }
      return leaf(editor, ...args);
    },
    levels: function levels$1() {
      for (var _len41 = arguments.length, args = new Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
        args[_key41] = arguments[_key41];
      }
      return levels(editor, ...args);
    },
    liftNodes: function liftNodes$1() {
      for (var _len42 = arguments.length, args = new Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
        args[_key42] = arguments[_key42];
      }
      return liftNodes(editor, ...args);
    },
    mergeNodes: function mergeNodes$1() {
      for (var _len43 = arguments.length, args = new Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
        args[_key43] = arguments[_key43];
      }
      return mergeNodes(editor, ...args);
    },
    move: function move$1() {
      for (var _len44 = arguments.length, args = new Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
        args[_key44] = arguments[_key44];
      }
      return move(editor, ...args);
    },
    moveNodes: function moveNodes$1() {
      for (var _len45 = arguments.length, args = new Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
        args[_key45] = arguments[_key45];
      }
      return moveNodes(editor, ...args);
    },
    next: function next$1() {
      for (var _len46 = arguments.length, args = new Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
        args[_key46] = arguments[_key46];
      }
      return next(editor, ...args);
    },
    node: function node$1() {
      for (var _len47 = arguments.length, args = new Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
        args[_key47] = arguments[_key47];
      }
      return node(editor, ...args);
    },
    nodes: function nodes$1() {
      for (var _len48 = arguments.length, args = new Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
        args[_key48] = arguments[_key48];
      }
      return nodes(editor, ...args);
    },
    normalize: function normalize$1() {
      for (var _len49 = arguments.length, args = new Array(_len49), _key49 = 0; _key49 < _len49; _key49++) {
        args[_key49] = arguments[_key49];
      }
      return normalize(editor, ...args);
    },
    parent: function parent$1() {
      for (var _len50 = arguments.length, args = new Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
        args[_key50] = arguments[_key50];
      }
      return parent(editor, ...args);
    },
    path: function path$1() {
      for (var _len51 = arguments.length, args = new Array(_len51), _key51 = 0; _key51 < _len51; _key51++) {
        args[_key51] = arguments[_key51];
      }
      return path(editor, ...args);
    },
    pathRef: function pathRef$1() {
      for (var _len52 = arguments.length, args = new Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
        args[_key52] = arguments[_key52];
      }
      return pathRef(editor, ...args);
    },
    pathRefs: function pathRefs$1() {
      for (var _len53 = arguments.length, args = new Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
        args[_key53] = arguments[_key53];
      }
      return pathRefs(editor, ...args);
    },
    point: function point$1() {
      for (var _len54 = arguments.length, args = new Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
        args[_key54] = arguments[_key54];
      }
      return point(editor, ...args);
    },
    pointRef: function pointRef$1() {
      for (var _len55 = arguments.length, args = new Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
        args[_key55] = arguments[_key55];
      }
      return pointRef(editor, ...args);
    },
    pointRefs: function pointRefs$1() {
      for (var _len56 = arguments.length, args = new Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
        args[_key56] = arguments[_key56];
      }
      return pointRefs(editor, ...args);
    },
    positions: function positions$1() {
      for (var _len57 = arguments.length, args = new Array(_len57), _key57 = 0; _key57 < _len57; _key57++) {
        args[_key57] = arguments[_key57];
      }
      return positions(editor, ...args);
    },
    previous: function previous$1() {
      for (var _len58 = arguments.length, args = new Array(_len58), _key58 = 0; _key58 < _len58; _key58++) {
        args[_key58] = arguments[_key58];
      }
      return previous(editor, ...args);
    },
    range: function range$1() {
      for (var _len59 = arguments.length, args = new Array(_len59), _key59 = 0; _key59 < _len59; _key59++) {
        args[_key59] = arguments[_key59];
      }
      return range(editor, ...args);
    },
    rangeRef: function rangeRef$1() {
      for (var _len60 = arguments.length, args = new Array(_len60), _key60 = 0; _key60 < _len60; _key60++) {
        args[_key60] = arguments[_key60];
      }
      return rangeRef(editor, ...args);
    },
    rangeRefs: function rangeRefs$1() {
      for (var _len61 = arguments.length, args = new Array(_len61), _key61 = 0; _key61 < _len61; _key61++) {
        args[_key61] = arguments[_key61];
      }
      return rangeRefs(editor, ...args);
    },
    removeNodes: function removeNodes$1() {
      for (var _len62 = arguments.length, args = new Array(_len62), _key62 = 0; _key62 < _len62; _key62++) {
        args[_key62] = arguments[_key62];
      }
      return removeNodes(editor, ...args);
    },
    select: function select$1() {
      for (var _len63 = arguments.length, args = new Array(_len63), _key63 = 0; _key63 < _len63; _key63++) {
        args[_key63] = arguments[_key63];
      }
      return select(editor, ...args);
    },
    setNodes: function setNodes$1() {
      for (var _len64 = arguments.length, args = new Array(_len64), _key64 = 0; _key64 < _len64; _key64++) {
        args[_key64] = arguments[_key64];
      }
      return setNodes(editor, ...args);
    },
    setNormalizing: function setNormalizing$1() {
      for (var _len65 = arguments.length, args = new Array(_len65), _key65 = 0; _key65 < _len65; _key65++) {
        args[_key65] = arguments[_key65];
      }
      return setNormalizing(editor, ...args);
    },
    setPoint: function setPoint$1() {
      for (var _len66 = arguments.length, args = new Array(_len66), _key66 = 0; _key66 < _len66; _key66++) {
        args[_key66] = arguments[_key66];
      }
      return setPoint(editor, ...args);
    },
    setSelection: function setSelection$1() {
      for (var _len67 = arguments.length, args = new Array(_len67), _key67 = 0; _key67 < _len67; _key67++) {
        args[_key67] = arguments[_key67];
      }
      return setSelection(editor, ...args);
    },
    splitNodes: function splitNodes$1() {
      for (var _len68 = arguments.length, args = new Array(_len68), _key68 = 0; _key68 < _len68; _key68++) {
        args[_key68] = arguments[_key68];
      }
      return splitNodes(editor, ...args);
    },
    start: function start$1() {
      for (var _len69 = arguments.length, args = new Array(_len69), _key69 = 0; _key69 < _len69; _key69++) {
        args[_key69] = arguments[_key69];
      }
      return start(editor, ...args);
    },
    string: function string$1() {
      for (var _len70 = arguments.length, args = new Array(_len70), _key70 = 0; _key70 < _len70; _key70++) {
        args[_key70] = arguments[_key70];
      }
      return string(editor, ...args);
    },
    unhangRange: function unhangRange$1() {
      for (var _len71 = arguments.length, args = new Array(_len71), _key71 = 0; _key71 < _len71; _key71++) {
        args[_key71] = arguments[_key71];
      }
      return unhangRange(editor, ...args);
    },
    unsetNodes: function unsetNodes$1() {
      for (var _len72 = arguments.length, args = new Array(_len72), _key72 = 0; _key72 < _len72; _key72++) {
        args[_key72] = arguments[_key72];
      }
      return unsetNodes(editor, ...args);
    },
    unwrapNodes: function unwrapNodes$1() {
      for (var _len73 = arguments.length, args = new Array(_len73), _key73 = 0; _key73 < _len73; _key73++) {
        args[_key73] = arguments[_key73];
      }
      return unwrapNodes(editor, ...args);
    },
    void: function _void() {
      for (var _len74 = arguments.length, args = new Array(_len74), _key74 = 0; _key74 < _len74; _key74++) {
        args[_key74] = arguments[_key74];
      }
      return getVoid(editor, ...args);
    },
    withoutNormalizing: function withoutNormalizing$1() {
      for (var _len75 = arguments.length, args = new Array(_len75), _key75 = 0; _key75 < _len75; _key75++) {
        args[_key75] = arguments[_key75];
      }
      return withoutNormalizing(editor, ...args);
    },
    wrapNodes: function wrapNodes$1() {
      for (var _len76 = arguments.length, args = new Array(_len76), _key76 = 0; _key76 < _len76; _key76++) {
        args[_key76] = arguments[_key76];
      }
      return wrapNodes(editor, ...args);
    },
    shouldMergeNodesRemovePrevNode: function shouldMergeNodesRemovePrevNode$1() {
      for (var _len77 = arguments.length, args = new Array(_len77), _key77 = 0; _key77 < _len77; _key77++) {
        args[_key77] = arguments[_key77];
      }
      return shouldMergeNodesRemovePrevNode(editor, ...args);
    }
  };
  return editor;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9zbGF0ZS4wLjExNC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3BhdGgtcmVmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3BvaW50LXJlZi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9yYW5nZS1yZWYudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3V0aWxzL3dlYWstbWFwcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9wYXRoLnRzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvdHJhbnNmb3Jtcy9nZW5lcmFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3RyYW5zZm9ybXMvbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy90cmFuc2Zvcm1zL3NlbGVjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdXRpbHMvZGVlcC1lcXVhbC50cyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9yYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9lbGVtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL25vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaXMtZWRpdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL2VkaXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9wb2ludC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9zY3J1YmJlci50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy90ZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy91dGlscy9nZXQtZGVmYXVsdC1pbnNlcnQtbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3V0aWxzL21hdGNoLXBhdGgudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3V0aWxzL3N0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy90cmFuc2Zvcm1zL3RleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvdHJhbnNmb3Jtcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvY29yZS9iYXRjaC1kaXJ0eS1wYXRocy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvY29yZS91cGRhdGUtZGlydHktcGF0aHMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2NvcmUvYXBwbHkudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2NvcmUvZ2V0LWRpcnR5LXBhdGhzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9jb3JlL2dldC1mcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvY29yZS9ub3JtYWxpemUtbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvY29yZS9zaG91bGQtbm9ybWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvYWJvdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9hZGQtbWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2FmdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvYmVmb3JlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvZGVsZXRlLWJhY2t3YXJkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvZGVsZXRlLWZvcndhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9kZWxldGUtZnJhZ21lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9lZGdlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2VsZW1lbnQtcmVhZC1vbmx5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvZW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvZmlyc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9mcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2dldC12b2lkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaGFzLWJsb2Nrcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2hhcy1pbmxpbmVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaGFzLXBhdGgudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9oYXMtdGV4dHMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pbnNlcnQtYnJlYWsudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pbnNlcnQtbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2luc2VydC1zb2Z0LWJyZWFrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaW5zZXJ0LXRleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pcy1ibG9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2lzLWVkZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pcy1lbXB0eS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2lzLWVuZC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2lzLW5vcm1hbGl6aW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaXMtc3RhcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9sYXN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvbGVhZi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2xldmVscy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL21hcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvbmV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL25vZGUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL25vcm1hbGl6ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3BhcmVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3BhdGgtcmVmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcGF0aC1yZWZzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcGF0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3BvaW50LXJlZi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3BvaW50LXJlZnMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9wb2ludC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3Bvc2l0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3ByZXZpb3VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcmFuZ2UtcmVmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcmFuZ2UtcmVmcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcmVtb3ZlLW1hcmsudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9zZXQtbm9ybWFsaXppbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9zdGFydC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3N0cmluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3VuaGFuZy1yYW5nZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3dpdGhvdXQtbm9ybWFsaXppbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9zaG91bGQtbWVyZ2Utbm9kZXMtcmVtb3ZlLXByZXYtbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy10ZXh0L2RlbGV0ZS10ZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLXRleHQvaW5zZXJ0LWZyYWdtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLXNlbGVjdGlvbi9jb2xsYXBzZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1zZWxlY3Rpb24vZGVzZWxlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtc2VsZWN0aW9uL21vdmUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtc2VsZWN0aW9uL3NlbGVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1zZWxlY3Rpb24vc2V0LXBvaW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLXNlbGVjdGlvbi9zZXQtc2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvaW5zZXJ0LW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvbGlmdC1ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1ub2RlL21lcmdlLW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvbW92ZS1ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1ub2RlL3JlbW92ZS1ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1ub2RlL3NldC1ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1ub2RlL3NwbGl0LW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvdW5zZXQtbm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtbm9kZS91bndyYXAtbm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtbm9kZS93cmFwLW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9jcmVhdGUtZWRpdG9yLnRzIl0sIm5hbWVzIjpbInNsYXRlXzBfMTE0XzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiRWRpdG9yIiwiRWxlbWVudCIsIkxvY2F0aW9uIiwiTm9kZSIsIk9wZXJhdGlvbiIsIlBhdGgiLCJQYXRoUmVmIiwiUG9pbnQiLCJQb2ludFJlZiIsIlJhbmdlIiwiUmFuZ2VSZWYiLCJTY3J1YmJlciIsIlNwYW4iLCJUZXh0IiwiVHJhbnNmb3JtcyIsImFib3ZlIiwiYWRkTWFyayIsImFmdGVyIiwiYXBwbHkiLCJiZWZvcmUiLCJjb2xsYXBzZSIsImNyZWF0ZUVkaXRvciIsImRlbGV0ZUJhY2t3YXJkIiwiZGVsZXRlRm9yd2FyZCIsImRlbGV0ZUZyYWdtZW50IiwiZGVsZXRlVGV4dCIsImRlc2VsZWN0IiwiZWRnZXMiLCJlbGVtZW50UmVhZE9ubHkiLCJlbmQiLCJmaXJzdCIsImZyYWdtZW50IiwiZ2V0RGlydHlQYXRocyIsImdldEZyYWdtZW50IiwiZ2V0Vm9pZCIsImhhc0Jsb2NrcyIsImhhc0lubGluZXMiLCJoYXNQYXRoIiwiaGFzVGV4dHMiLCJpbnNlcnRCcmVhayIsImluc2VydEZyYWdtZW50IiwiaW5zZXJ0Tm9kZSIsImluc2VydE5vZGVzIiwiaW5zZXJ0U29mdEJyZWFrIiwiaW5zZXJ0VGV4dCIsImlzQmxvY2siLCJpc0VkZ2UiLCJpc0VkaXRvciIsImlzRW1wdHkiLCJpc0VuZCIsImlzTm9ybWFsaXppbmciLCJpc1N0YXJ0IiwibGFzdCIsImxlYWYiLCJsZXZlbHMiLCJsaWZ0Tm9kZXMiLCJtYXJrcyIsIm1lcmdlTm9kZXMiLCJtb3ZlIiwibW92ZU5vZGVzIiwibmV4dCIsIm5vZGUiLCJub2RlcyIsIm5vcm1hbGl6ZSIsIm5vcm1hbGl6ZU5vZGUiLCJwYXJlbnQiLCJwYXRoIiwicGF0aFJlZiIsInBhdGhSZWZzIiwicG9pbnQiLCJwb2ludFJlZiIsInBvaW50UmVmcyIsInBvc2l0aW9ucyIsInByZXZpb3VzIiwicmFuZ2UiLCJyYW5nZVJlZiIsInJhbmdlUmVmcyIsInJlbW92ZU1hcmsiLCJyZW1vdmVOb2RlcyIsInNlbGVjdCIsInNldE5vZGVzIiwic2V0Tm9ybWFsaXppbmciLCJzZXRQb2ludCIsInNldFNlbGVjdGlvbiIsInNob3VsZE1lcmdlTm9kZXNSZW1vdmVQcmV2Tm9kZSIsInNob3VsZE5vcm1hbGl6ZSIsInNwbGl0Tm9kZXMiLCJzdGFydCIsInN0cmluZyIsInVuaGFuZ1JhbmdlIiwidW5zZXROb2RlcyIsInVud3JhcE5vZGVzIiwid2l0aG91dE5vcm1hbGl6aW5nIiwid3JhcE5vZGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInRyYW5zZm9ybSIsInJlZiIsIm9wIiwiY3VycmVudCIsImFmZmluaXR5IiwicGF0aDMiLCJ1bnJlZiIsInBvaW50MyIsIkRJUlRZX1BBVEhTIiwiV2Vha01hcCIsIkRJUlRZX1BBVEhfS0VZUyIsIkZMVVNISU5HIiwiTk9STUFMSVpJTkciLCJQQVRIX1JFRlMiLCJQT0lOVF9SRUZTIiwiUkFOR0VfUkVGUyIsImFuY2VzdG9ycyIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyZXZlcnNlIiwicGF0aHMiLCJzbGljZSIsImNvbW1vbiIsImFub3RoZXIiLCJpIiwiYXYiLCJidiIsInB1c2giLCJjb21wYXJlIiwibWluIiwiTWF0aCIsImVuZHNBZnRlciIsImFzIiwiYnMiLCJlcXVhbHMiLCJlbmRzQXQiLCJlbmRzQmVmb3JlIiwiZXZlcnkiLCJuIiwiaGFzUHJldmlvdXMiLCJpc0FmdGVyIiwiaXNBbmNlc3RvciIsImlzQmVmb3JlIiwiaXNDaGlsZCIsImlzQ29tbW9uIiwiaXNEZXNjZW5kYW50IiwiaXNQYXJlbnQiLCJpc1BhdGgiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsImlzU2libGluZyIsImFsIiwiYmwiLCJsaXN0IiwiRXJyb3IiLCJjb25jYXQiLCJsYXN0MiIsIm9wZXJhdGlvbkNhblRyYW5zZm9ybVBhdGgiLCJvcGVyYXRpb24iLCJ0eXBlIiwicmVsYXRpdmUiLCJhbmNlc3RvciIsInAiLCJfb3AiLCJfb3AyIiwicG9zaXRpb24iLCJfb3AzIiwiX3Bvc2l0aW9uIiwiX29wNCIsIm5ld1BhdGgiLCJvbnAiLCJjb3B5IiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsIm8yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfdG9QcmltaXRpdmUiLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX3RvUHJvcGVydHlLZXkiLCJhcmciLCJrZXkiLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFwcGx5VG9EcmFmdCIsImVkaXRvciIsInNlbGVjdGlvbiIsIm5vZGUzIiwicGFyZW50MyIsImluZGV4IiwiY2hpbGRyZW4iLCJzcGxpY2UiLCJwb2ludHMiLCJfcGF0aCIsIm9mZnNldCIsInRleHQiLCJfbm9kZSIsImJlZm9yZTMiLCJhZnRlcjMiLCJfcG9pbnQiLCJfa2V5IiwiX3BhdGgyIiwiX25vZGUyIiwiZ2V0IiwicHJldlBhdGgiLCJwcmV2IiwiX3BhcmVudCIsIl9pbmRleCIsImlzVGV4dCIsInN0cmluZ2lmeSIsIl9wb2ludDIiLCJfa2V5MiIsIl9wYXRoMyIsIl9ub2RlMyIsIl9wYXJlbnQyIiwiX2luZGV4MiIsInRydWVQYXRoIiwibmV3UGFyZW50IiwibmV3SW5kZXgiLCJfcG9pbnQzIiwiX2tleTMiLCJfcGF0aDQiLCJfaW5kZXgzIiwiX3BhcmVudDMiLCJfcG9pbnQ0IiwiX2tleTQiLCJyZXN1bHQiLCJfcHJldiIsIm5leHQzIiwidGV4dHMiLCJwcmVmZXJOZXh0IiwiX3BhdGg1IiwiX29mZnNldCIsIl90ZXh0IiwiX25vZGU0IiwiX2JlZm9yZSIsIl9hZnRlciIsIl9wb2ludDUiLCJfa2V5NSIsIl9wYXRoNiIsInByb3BlcnRpZXMiLCJuZXdQcm9wZXJ0aWVzIiwiX25vZGU1IiwiX2tleTYiLCJfa2V5NyIsImhhc093blByb3BlcnR5IiwiX25ld1Byb3BlcnRpZXMiLCJpc1JhbmdlIiwiX29iamVjdFNwcmVhZCRlIiwiX2tleTgiLCJfdmFsdWUiLCJfcGF0aDciLCJfcHJvcGVydGllcyIsIl9ub2RlNiIsIl9wYXJlbnQ0IiwiX2luZGV4NCIsIm5ld05vZGUiLCJfYmVmb3JlMiIsIl9hZnRlcjIiLCJfYmVmb3JlMyIsIl9hZnRlcjMiLCJfcG9pbnQ2IiwiX2tleTkiLCJHZW5lcmFsVHJhbnNmb3JtcyIsImltcG9ydF9pbW1lciIsImNyZWF0ZURyYWZ0IiwiZmluaXNoRHJhZnQiLCJpc0RyYWZ0IiwiTm9kZVRyYW5zZm9ybXMiLCJub2RlczIiLCJwcm9wcyIsImVsZW1lbnQiLCJTZWxlY3Rpb25UcmFuc2Zvcm1zIiwidGFyZ2V0IiwiaXNEZWVwRXF1YWwiLCJhIiwiYiIsImltcG9ydF9pc19wbGFpbl9vYmplY3QiLCJpc1BsYWluT2JqZWN0IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJrZXlzIiwiaW5kZXhPZiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInJhbmdlMiIsImFuY2hvciIsImZvY3VzIiwiaXNCYWNrd2FyZCIsImVuZDIiLCJzdXJyb3VuZHMiLCJpbnRlcnNlY3Rpb25SYW5nZSIsImludGVyc2VjdGlvbiIsImluY2x1ZGVzIiwicnMiLCJyZSIsInRzIiwidGUiLCJzdGFydDIiLCJpc0FmdGVyU3RhcnQiLCJpc0JlZm9yZUVuZCIsImlzUG9pbnQiLCJyZXN0IiwiX2V4Y2x1ZGVkJDQiLCJzMSIsImUxIiwiczIiLCJlMiIsIl9vYmplY3RTcHJlYWQkZCIsImlzQ29sbGFwc2VkIiwiaXNFeHBhbmRlZCIsImlzRm9yd2FyZCIsInByb2R1Y2UiLCJyIiwiYWZmaW5pdHlBbmNob3IiLCJhZmZpbml0eUZvY3VzIiwiaXNFbGVtZW50IiwiaXNOb2RlTGlzdCIsImlzRWxlbWVudExpc3QiLCJ2YWwiLCJpc0VsZW1lbnRQcm9wcyIsImlzRWxlbWVudFR5cGUiLCJlbGVtZW50VmFsIiwiZWxlbWVudEtleSIsIm1hdGNoZXMiLCJJU19OT0RFX0xJU1RfQ0FDSEUiLCJyb290IiwiZW50cnkiLCJjaGlsZCIsImMiLCJjaGlsZFBhdGgiLCJkZXNjZW5kYW50IiwiZGVzY2VuZGFudHMiLCJlbGVtZW50cyIsImV4dHJhY3RQcm9wcyIsIl9leGNsdWRlZCQzIiwiX2V4Y2x1ZGVkMiQzIiwibmV3Um9vdCIsIm5vZGVFbnRyaWVzIiwicGFzcyIsIl9yZWYiLCJwYXRoNCIsImxlYWYzIiwiX2xlYWYiLCJnZXRJZiIsImhhcyIsImlzTm9kZSIsImNhY2hlZFJlc3VsdCIsInNldCIsImlzVGV4dFByb3BzIiwiZnJvbSIsInRvIiwidmlzaXRlZCIsIlNldCIsImFkZCIsIm5leHRJbmRleCIsIl9uZXdQYXRoIiwicGFyZW50UGF0aCIsIm1hcCIsImpvaW4iLCJpc05vZGVPcGVyYXRpb24iLCJpc09wZXJhdGlvbiIsImVuZHNXaXRoIiwiaXNPcGVyYXRpb25MaXN0IiwiaXNTZWxlY3Rpb25PcGVyYXRpb24iLCJpc1RleHRPcGVyYXRpb24iLCJpbnZlcnNlIiwiX29iamVjdFNwcmVhZCRjIiwiaW52ZXJzZVBhdGgiLCJpbnZlcnNlTmV3UGF0aCIsIklTX0VESVRPUl9DQUNIRSIsImNhY2hlZElzRWRpdG9yIiwiaXNFZGl0b3IyIiwiaXNFbGVtZW50UmVhZE9ubHkiLCJpc0lubGluZSIsImlzU2VsZWN0YWJsZSIsImlzVm9pZCIsIm9uQ2hhbmdlIiwib3BlcmF0aW9ucyIsImF0IiwidW5pdCIsImZyYWdtZW50MiIsImdldE1hcmtzIiwiaXNOb3JtYWxpemluZzIiLCJ2b2lkIiwiZm4iLCJwcmV2Tm9kZSIsImN1ck5vZGUiLCJpc0xvY2F0aW9uIiwiaXNTcGFuIiwiX29iamVjdFNwcmVhZCRiIiwiX3NjcnViYmVyIiwic2V0U2NydWJiZXIiLCJzY3J1YmJlciIsIkpTT04iLCJsb29zZSIsIm9taXRUZXh0IiwiX2V4Y2x1ZGVkJDIiLCJpc1RleHRMaXN0IiwiZGVjb3JhdGlvbnMiLCJsZWF2ZXMiLCJfb2JqZWN0U3ByZWFkJGEiLCJkZWMiLCJtZXJnZSIsIm1lcmdlRGVjb3JhdGlvbiIsIl9leGNsdWRlZDIkMiIsImxlYWZFbmQiLCJkZWNvcmF0aW9uU3RhcnQiLCJkZWNvcmF0aW9uRW5kIiwiYXNzaWduIiwibGVhZlN0YXJ0IiwibWlkZGxlIiwib2ZmIiwiX29mZiIsImN1cnJlbnRPZmZzZXQiLCJpdGVtIiwiZW50cmllcyIsIl9zdGFydCIsIl9lbmQiLCJpc0ZpcnN0IiwiaXNMYXN0IiwiZ2V0RGVmYXVsdEluc2VydExvY2F0aW9uIiwibWF0Y2hQYXRoIiwiZ2V0Q2hhcmFjdGVyRGlzdGFuY2UiLCJnZXRDaGFyYWN0ZXJEaXN0YW5jZTIiLCJzdHIiLCJpc1JUTCIsImlzTFRSIiwiY29kZXBvaW50cyIsImNvZGVwb2ludHNJdGVyYXRvclJUTCIsImxlZnQiLCJDb2RlcG9pbnRUeXBlIiwiTm9uZSIsInJpZ2h0IiwiZGlzdGFuY2UiLCJnYjExIiwiZ2IxMk9yMTMiLCJjaGFyIiwiY29kZSIsImNvZGVQb2ludEF0IiwiZ2V0Q29kZXBvaW50VHlwZSIsImludGVyc2VjdHMiLCJaV0oiLCJFeHRQaWN0IiwiZW5kc1dpdGhFbW9qaVpXSiIsInN1YnN0cmluZyIsIlJJIiwiZW5kc1dpdGhPZGROdW1iZXJPZlJJcyIsImlzQm91bmRhcnlQYWlyIiwiU1BBQ0UiLCJQVU5DVFVBVElPTiIsIkNIQU1FTEVPTiIsImdldFdvcmREaXN0YW5jZSIsImdldFdvcmREaXN0YW5jZTIiLCJkaXN0Iiwic3RhcnRlZCIsImNoYXJEaXN0IiwicmVtYWluaW5nIiwic3BsaXRCeUNoYXJhY3RlckRpc3RhbmNlIiwiaXNXb3JkQ2hhcmFjdGVyIiwiaXNXb3JkQ2hhcmFjdGVyMiIsInRlc3QiLCJuZXh0Q2hhciIsIm5leHRSZW1haW5pbmciLCJjb2RlcG9pbnRzSXRlcmF0b3JSVEwyIiwiY2hhcjEiLCJjaGFyQXQiLCJpc0xvd1N1cnJvZ2F0ZSIsImNoYXJDb2RlQXQiLCJjaGFyMiIsImlzSGlnaFN1cnJvZ2F0ZSIsImNoYXJDb2RlIiwiQ29kZXBvaW50VHlwZTIiLCJyZUV4dGVuZCIsInJlUHJlcGVuZCIsInJlU3BhY2luZ01hcmsiLCJyZUwiLCJyZVYiLCJyZVQiLCJyZUxWIiwicmVMVlQiLCJyZUV4dFBpY3QiLCJBbnkiLCJzZWFyY2giLCJFeHRlbmQiLCJQcmVwZW5kIiwiU3BhY2luZ01hcmsiLCJMIiwiViIsIlQiLCJMViIsIkxWVCIsIngiLCJ5IiwiTm9uQm91bmRhcnlQYWlycyIsImZpbmRJbmRleCIsImVuZGluZ0Vtb2ppWldKIiwiZW5kaW5nUklzIiwibWF0Y2giLCJudW1SSXMiLCJUZXh0VHJhbnNmb3JtcyIsImRlbGV0ZSIsInZvaWRzIiwic3RhcnRSZWYiLCJlbmRSZWYiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJfb2JqZWN0U3ByZWFkJDkiLCJCQVRDSElOR19ESVJUWV9QQVRIUyIsImlzQmF0Y2hpbmdEaXJ0eVBhdGhzIiwiYmF0Y2hEaXJ0eVBhdGhzIiwidXBkYXRlIiwidXBkYXRlRGlydHlQYXRocyIsIm5ld0RpcnR5UGF0aHMiLCJvbGREaXJ0eVBhdGhzIiwib2xkRGlydHlQYXRoS2V5cyIsImRpcnR5UGF0aHMiLCJkaXJ0eVBhdGhLZXlzIiwiX3JlZjIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJsZXZlbHMyIiwicDIiLCJwcmV2aW91c1BhdGgiLCJvbGRBbmNlc3RvcnMiLCJuZXdBbmNlc3RvcnMiLCJfYW5jZXN0b3IiLCJfcCIsInJlc3VsdFBhdGgiLCJfYW5jZXN0b3JzIiwiX2xldmVscyIsIm5leHRQYXRoIiwic2hvdWxkSGF2ZUlubGluZXMiLCJjdXJyZW50Tm9kZSIsIl9jaGlsZCIsImlzSW5saW5lT3JUZXh0IiwibmV3Q2hpbGQiLCJfbmV3Q2hpbGQiLCJlbGVtZW50Q2hpbGQiLCJpdGVyYXRpb24iLCJpbml0aWFsRGlydHlQYXRoc0xlbmd0aCIsIm1heEl0ZXJhdGlvbnMiLCJhYm92ZTIiLCJtb2RlIiwicGFyZW50Tm9kZTIiLCJtYXJrYWJsZVZvaWQiLCJleHBhbmRlZFNlbGVjdGlvbiIsIm1hcmtBY2NlcHRpbmdWb2lkU2VsZWN0ZWQiLCJzZWxlY3RlZE5vZGUiLCJzZWxlY3RlZFBhdGgiLCJwYXJlbnROb2RlIiwic3BsaXQiLCJtYXJrczMiLCJfb2JqZWN0U3ByZWFkJDgiLCJhZnRlcjIiLCJlZGdlIiwiZCIsIl9vYmplY3RTcHJlYWQkNyIsImJlZm9yZTIiLCJfb2JqZWN0U3ByZWFkJDYiLCJkZWxldGVGcmFnbWVudDIiLCJkaXJlY3Rpb24iLCJlbGVtZW50UmVhZE9ubHkyIiwiX29iamVjdFNwcmVhZCQ1IiwiZ2V0Vm9pZDIiLCJfb2JqZWN0U3ByZWFkJDQiLCJzb21lIiwiYWx3YXlzIiwiaW5zZXJ0VGV4dDIiLCJfb2JqZWN0U3ByZWFkJDMiLCJmaXJzdDIiLCJsZWFmMiIsIm1hcmtzMiIsImlzRW5kMiIsIl9yZXN0IiwiX2V4Y2x1ZGVkJDEiLCJtYXJrZWRWb2lkIiwiYmxvY2siLCJibG9ja1BhdGgiLCJfZXhjbHVkZWQyJDEiLCJuZXh0MiIsInBvaW50QWZ0ZXJMb2NhdGlvbiIsInNwYW4iLCJub2RlMiIsInVuaXZlcnNhbCIsIl9wYXNzIiwiaWdub3JlTm9uU2VsZWN0YWJsZSIsIm5vZGU0IiwiaGl0IiwiaXNMb3dlciIsImVtaXQiLCJub3JtYWxpemUyIiwiZm9yY2UiLCJnZXREaXJ0eVBhdGhzMiIsImVkaXRvcjIiLCJnZXREaXJ0eVBhdGhLZXlzIiwicG9wRGlydHlQYXRoIiwicG9wIiwiYWxsUGF0aHMiLCJhbGxQYXRoS2V5cyIsImRpcnR5UGF0aCIsIl8iLCJfZGlydHlQYXRoIiwiX2VudHJ5IiwicGFyZW50MiIsInBhdGhSZWYyIiwicGF0aFJlZnMyIiwicmVmcyIsInBhdGgyIiwiZGVwdGgiLCJmaXJzdFBhdGgiLCJsYXN0UGF0aCIsInBvaW50UmVmMiIsInBvaW50UmVmczIiLCJwb2ludDIiLCJpc05ld0Jsb2NrIiwiYmxvY2tUZXh0IiwibGVhZlRleHRSZW1haW5pbmciLCJsZWFmVGV4dE9mZnNldCIsImUiLCJzIiwiY2FsY0Rpc3RhbmNlIiwidW5pdDIiLCJyZXZlcnNlMiIsInByZXZpb3VzMiIsInBvaW50QmVmb3JlTG9jYXRpb24iLCJwcmV2aW91czMiLCJyYW5nZVJlZjIiLCJyYW5nZVJlZnMyIiwiX29iamVjdFNwcmVhZCQyIiwic3RyaW5nMiIsInQiLCJ1bmhhbmdSYW5nZTIiLCJlbmRCbG9jayIsInNraXAiLCJkZWxldGVUZXh0MiIsIl9FZGl0b3Ikdm9pZCIsIl9FZGl0b3Ikdm9pZDIiLCJoYW5naW5nIiwiZnVydGhlc3RWb2lkIiwidm9pZFBhdGgiLCJvcHRzIiwiZW5kT2ZEb2MiLCJzdGFydEJsb2NrIiwiaXNBY3Jvc3NCbG9ja3MiLCJpc1NpbmdsZVRleHQiLCJzdGFydE5vbkVkaXRhYmxlIiwiZW5kTm9uRWRpdGFibGUiLCJyZW1vdmVkVGV4dCIsImZpbHRlciIsImZvckVhY2giLCJzdGFydFVucmVmIiwiZW5kVW5yZWYiLCJpbnNlcnRGcmFnbWVudDIiLCJiYXRjaERpcnR5IiwicG9pbnRSZWYzIiwiaW5saW5lRWxlbWVudE1hdGNoIiwiX2lubGluZVBhdGgiLCJibG9ja01hdGNoIiwiaXNCbG9ja1N0YXJ0IiwiaXNCbG9ja0VuZCIsImlzQmxvY2tFbXB0eSIsIm1lcmdlU3RhcnQiLCJtZXJnZUVuZCIsIm1hdGNoZXIiLCJpc1Jvb3QiLCJzdGFydHMiLCJtaWRkbGVzIiwiZW5kcyIsInN0YXJ0aW5nIiwiaGFzQmxvY2tzMiIsImlubGluZU1hdGNoIiwiaW5saW5lUGF0aCIsImlzSW5saW5lU3RhcnQiLCJpc0lubGluZUVuZCIsIm1pZGRsZVJlZiIsImNvbGxhcHNlMiIsIm1vdmUyIiwic2V0UG9pbnQyIiwiX29iamVjdFNwcmVhZCQxIiwib2xkUHJvcHMiLCJuZXdQcm9wcyIsImsiLCJpbnNlcnROb2RlczIiLCJzZWxlY3QyIiwibWF0Y2hQYXRoMiIsInBhdGhSZWYzIiwiaXNBdEVuZCIsImJhdGNoZWRPcHMiLCJfbG9vcCIsIl9sb29wMiIsImxpZnROb2RlczIiLCJwYXJlbnROb2RlRW50cnkiLCJ0b1BhdGgiLCJfdG9QYXRoIiwic3BsaXRQYXRoIiwiX3RvUGF0aDIiLCJoYXNTaW5nbGVDaGlsZE5lc3QiLCJtZXJnZU5vZGVzMiIsImNvbW1vblBhdGgiLCJpc1ByZXZpb3VzU2libGluZyIsImVtcHR5QW5jZXN0b3IiLCJlbXB0eVJlZiIsIl9leGNsdWRlZCIsIl9leGNsdWRlZDIiLCJ0b1JlZiIsInRhcmdldHMiLCJyZW1vdmVOb2RlczIiLCJkZXB0aHMiLCJzZXROb2RlczIiLCJyYW5nZVJlZjMiLCJzcGxpdE1vZGUiLCJlbmRBdEVuZE9mTm9kZSIsInN0YXJ0QXRTdGFydE9mTm9kZSIsInByb3AiLCJub2RlUHJvcCIsImhhc0NoYW5nZXMiLCJkZWxldGVSYW5nZSIsInNwbGl0Tm9kZXMyIiwiaGVpZ2h0IiwiYmVmb3JlUmVmIiwiYWZ0ZXJSZWYiLCJoaWdoZXN0Iiwidm9pZE1hdGNoIiwibnVkZ2UiLCJ2b2lkTm9kZSIsImFmdGVyUGF0aCIsInNpYmxpbmdIZWlnaHQiLCJoaWdoZXN0UGF0aCIsImxvd2VzdFBhdGgiLCJfYWZ0ZXJSZWYiLCJ1bnNldE5vZGVzMiIsInVud3JhcE5vZGVzMiIsIndyYXBOb2RlczIiLCJyb290cyIsInJvb3RQYXRoIiwiY29tbW9uTm9kZUVudHJ5IiwiY29tbW9uTm9kZSIsIndyYXBwZXJQYXRoIiwid3JhcHBlciIsIl9vYmplY3RTcHJlYWQiLCJfcmV0IiwiYXBwbHkkMSIsIl9sZW4iLCJhcmdzIiwiYWRkTWFyayQxIiwiX2xlbjIiLCJkZWxldGVCYWNrd2FyZCQxIiwiX2xlbjMiLCJkZWxldGVGb3J3YXJkJDEiLCJfbGVuNCIsImRlbGV0ZUZyYWdtZW50JDEiLCJfbGVuNSIsImdldEZyYWdtZW50JDEiLCJfbGVuNiIsImluc2VydEJyZWFrJDEiLCJfbGVuNyIsImluc2VydFNvZnRCcmVhayQxIiwiX2xlbjgiLCJpbnNlcnRGcmFnbWVudCQxIiwiX2xlbjkiLCJpbnNlcnROb2RlJDEiLCJfbGVuMTAiLCJfa2V5MTAiLCJpbnNlcnRUZXh0JDEiLCJfbGVuMTEiLCJfa2V5MTEiLCJub3JtYWxpemVOb2RlJDEiLCJfbGVuMTIiLCJfa2V5MTIiLCJyZW1vdmVNYXJrJDEiLCJfbGVuMTMiLCJfa2V5MTMiLCJnZXREaXJ0eVBhdGhzJDEiLCJfbGVuMTQiLCJfa2V5MTQiLCJzaG91bGROb3JtYWxpemUkMSIsIl9sZW4xNSIsIl9rZXkxNSIsImFib3ZlJDEiLCJfbGVuMTYiLCJfa2V5MTYiLCJhZnRlciQxIiwiX2xlbjE3IiwiX2tleTE3IiwiYmVmb3JlJDEiLCJfbGVuMTgiLCJfa2V5MTgiLCJjb2xsYXBzZSQxIiwiX2xlbjE5IiwiX2tleTE5IiwiX2RlbGV0ZSIsIl9sZW4yMCIsIl9rZXkyMCIsImRlc2VsZWN0JDEiLCJfbGVuMjEiLCJfa2V5MjEiLCJlZGdlcyQxIiwiX2xlbjIyIiwiX2tleTIyIiwiZWxlbWVudFJlYWRPbmx5JDEiLCJfbGVuMjMiLCJfa2V5MjMiLCJlbmQkMSIsIl9sZW4yNCIsIl9rZXkyNCIsImZpcnN0JDEiLCJfbGVuMjUiLCJfa2V5MjUiLCJmcmFnbWVudCQxIiwiX2xlbjI2IiwiX2tleTI2IiwiX2xlbjI3IiwiX2tleTI3IiwiaGFzQmxvY2tzJDEiLCJfbGVuMjgiLCJfa2V5MjgiLCJoYXNJbmxpbmVzJDEiLCJfbGVuMjkiLCJfa2V5MjkiLCJoYXNQYXRoJDEiLCJfbGVuMzAiLCJfa2V5MzAiLCJoYXNUZXh0cyQxIiwiX2xlbjMxIiwiX2tleTMxIiwiaW5zZXJ0Tm9kZXMkMSIsIl9sZW4zMiIsIl9rZXkzMiIsImlzQmxvY2skMSIsIl9sZW4zMyIsIl9rZXkzMyIsImlzRWRnZSQxIiwiX2xlbjM0IiwiX2tleTM0IiwiaXNFbXB0eSQxIiwiX2xlbjM1IiwiX2tleTM1IiwiaXNFbmQkMSIsIl9sZW4zNiIsIl9rZXkzNiIsImlzTm9ybWFsaXppbmckMSIsIl9sZW4zNyIsIl9rZXkzNyIsImlzU3RhcnQkMSIsIl9sZW4zOCIsIl9rZXkzOCIsImxhc3QkMSIsIl9sZW4zOSIsIl9rZXkzOSIsImxlYWYkMSIsIl9sZW40MCIsIl9rZXk0MCIsImxldmVscyQxIiwiX2xlbjQxIiwiX2tleTQxIiwibGlmdE5vZGVzJDEiLCJfbGVuNDIiLCJfa2V5NDIiLCJtZXJnZU5vZGVzJDEiLCJfbGVuNDMiLCJfa2V5NDMiLCJtb3ZlJDEiLCJfbGVuNDQiLCJfa2V5NDQiLCJtb3ZlTm9kZXMkMSIsIl9sZW40NSIsIl9rZXk0NSIsIm5leHQkMSIsIl9sZW40NiIsIl9rZXk0NiIsIm5vZGUkMSIsIl9sZW40NyIsIl9rZXk0NyIsIm5vZGVzJDEiLCJfbGVuNDgiLCJfa2V5NDgiLCJub3JtYWxpemUkMSIsIl9sZW40OSIsIl9rZXk0OSIsInBhcmVudCQxIiwiX2xlbjUwIiwiX2tleTUwIiwicGF0aCQxIiwiX2xlbjUxIiwiX2tleTUxIiwicGF0aFJlZiQxIiwiX2xlbjUyIiwiX2tleTUyIiwicGF0aFJlZnMkMSIsIl9sZW41MyIsIl9rZXk1MyIsInBvaW50JDEiLCJfbGVuNTQiLCJfa2V5NTQiLCJwb2ludFJlZiQxIiwiX2xlbjU1IiwiX2tleTU1IiwicG9pbnRSZWZzJDEiLCJfbGVuNTYiLCJfa2V5NTYiLCJwb3NpdGlvbnMkMSIsIl9sZW41NyIsIl9rZXk1NyIsInByZXZpb3VzJDEiLCJfbGVuNTgiLCJfa2V5NTgiLCJyYW5nZSQxIiwiX2xlbjU5IiwiX2tleTU5IiwicmFuZ2VSZWYkMSIsIl9sZW42MCIsIl9rZXk2MCIsInJhbmdlUmVmcyQxIiwiX2xlbjYxIiwiX2tleTYxIiwicmVtb3ZlTm9kZXMkMSIsIl9sZW42MiIsIl9rZXk2MiIsInNlbGVjdCQxIiwiX2xlbjYzIiwiX2tleTYzIiwic2V0Tm9kZXMkMSIsIl9sZW42NCIsIl9rZXk2NCIsInNldE5vcm1hbGl6aW5nJDEiLCJfbGVuNjUiLCJfa2V5NjUiLCJzZXRQb2ludCQxIiwiX2xlbjY2IiwiX2tleTY2Iiwic2V0U2VsZWN0aW9uJDEiLCJfbGVuNjciLCJfa2V5NjciLCJzcGxpdE5vZGVzJDEiLCJfbGVuNjgiLCJfa2V5NjgiLCJzdGFydCQxIiwiX2xlbjY5IiwiX2tleTY5Iiwic3RyaW5nJDEiLCJfbGVuNzAiLCJfa2V5NzAiLCJ1bmhhbmdSYW5nZSQxIiwiX2xlbjcxIiwiX2tleTcxIiwidW5zZXROb2RlcyQxIiwiX2xlbjcyIiwiX2tleTcyIiwidW53cmFwTm9kZXMkMSIsIl9sZW43MyIsIl9rZXk3MyIsIl92b2lkIiwiX2xlbjc0IiwiX2tleTc0Iiwid2l0aG91dE5vcm1hbGl6aW5nJDEiLCJfbGVuNzUiLCJfa2V5NzUiLCJ3cmFwTm9kZXMkMSIsIl9sZW43NiIsIl9rZXk3NiIsInNob3VsZE1lcmdlTm9kZXNSZW1vdmVQcmV2Tm9kZSQxIiwiX2xlbjc3IiwiX2tleTc3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxjQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxhQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLElBQUEsRUFBQUEsQ0FBQSxLQUFBQSxJQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFB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QUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp4TixJQUFBLENBQUl3TixNQUFBLElBQUFoMkIsU0FBQSxDQUFBZzJCLE1BQUE7TUFBQTtNQUFBLE9BQUt0M0IsU0FBQSxDQUFVMEcsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ2xEdnFCLDhCQUFBLEVBQWdDLFNBQUFnNEIsaUNBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFsMkIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBazBCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKM04sSUFBQSxDQUFJMk4sTUFBQSxJQUFBbjJCLFNBQUEsQ0FBQW0yQixNQUFBO01BQUE7TUFBQSxPQUN0Q2w0Qiw4QkFBQSxDQUErQm1ILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQzs7RUFHbkQsT0FBT3BqQixNQUFBO0FBQ1QiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haS9hZ2VudHMvcGxhdGZvcm0vY2xpZW50L3NyYy9vdXQifQ==