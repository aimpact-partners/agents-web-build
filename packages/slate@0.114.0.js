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

// .beyond/uimport/temp/slate.0.114.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NsYXRlLjAuMTE0LjAuanMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvcGF0aC1yZWYudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvcG9pbnQtcmVmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3JhbmdlLXJlZi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdXRpbHMvd2Vhay1tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3BhdGgudHMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCIuLi8uLi8uLi8uLi8ueWFybi9iZXJyeS9jYWNoZS9AYmFiZWwtcnVudGltZS1ucG0tNy4yMy4yLWQwMTNkNmNmN2UtMTAuemlwL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy90cmFuc2Zvcm1zL2dlbmVyYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvdHJhbnNmb3Jtcy9ub2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3RyYW5zZm9ybXMvc2VsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy91dGlscy9kZWVwLWVxdWFsLnRzIiwiLi4vLi4vLi4vLi4vLnlhcm4vYmVycnkvY2FjaGUvQGJhYmVsLXJ1bnRpbWUtbnBtLTcuMjMuMi1kMDEzZDZjZjdlLTEwLnppcC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uLy4uLy4uLy4uLy55YXJuL2JlcnJ5L2NhY2hlL0BiYWJlbC1ydW50aW1lLW5wbS03LjIzLjItZDAxM2Q2Y2Y3ZS0xMC56aXAvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3JhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL2VsZW1lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pcy1lZGl0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2ludGVyZmFjZXMvZWRpdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3BvaW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3NjcnViYmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3RleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3V0aWxzL2dldC1kZWZhdWx0LWluc2VydC1sb2NhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdXRpbHMvbWF0Y2gtcGF0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdXRpbHMvc3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9pbnRlcmZhY2VzL3RyYW5zZm9ybXMvdGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvaW50ZXJmYWNlcy90cmFuc2Zvcm1zL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9jb3JlL2JhdGNoLWRpcnR5LXBhdGhzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9jb3JlL3VwZGF0ZS1kaXJ0eS1wYXRocy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvY29yZS9hcHBseS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvY29yZS9nZXQtZGlydHktcGF0aHMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2NvcmUvZ2V0LWZyYWdtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9jb3JlL25vcm1hbGl6ZS1ub2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9jb3JlL3Nob3VsZC1ub3JtYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9hYm92ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2FkZC1tYXJrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvYWZ0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9iZWZvcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9kZWxldGUtYmFja3dhcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9kZWxldGUtZm9yd2FyZC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2RlbGV0ZS1mcmFnbWVudC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2VkZ2VzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvZWxlbWVudC1yZWFkLW9ubHkudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9lbmQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9maXJzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2ZyYWdtZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvZ2V0LXZvaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9oYXMtYmxvY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaGFzLWlubGluZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9oYXMtcGF0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2hhcy10ZXh0cy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2luc2VydC1icmVhay50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2luc2VydC1ub2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaW5zZXJ0LXNvZnQtYnJlYWsudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pbnNlcnQtdGV4dC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2lzLWJsb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaXMtZWRnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2lzLWVtcHR5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaXMtZW5kLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvaXMtbm9ybWFsaXppbmcudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9pcy1zdGFydC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL2xhc3QudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9sZWFmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvbGV2ZWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvbWFya3MudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9uZXh0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3Ivbm9kZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL25vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3Ivbm9ybWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcGFyZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcGF0aC1yZWYudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9wYXRoLXJlZnMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9wYXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcG9pbnQtcmVmLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcG9pbnQtcmVmcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3BvaW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcG9zaXRpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcHJldmlvdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9yYW5nZS1yZWYudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9yYW5nZS1yZWZzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvcmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2VkaXRvci9yZW1vdmUtbWFyay50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3NldC1ub3JtYWxpemluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3N0YXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3Ivc3RyaW5nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3IvdW5oYW5nLXJhbmdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy9lZGl0b3Ivd2l0aG91dC1ub3JtYWxpemluZy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvZWRpdG9yL3Nob3VsZC1tZXJnZS1ub2Rlcy1yZW1vdmUtcHJldi1ub2RlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLXRleHQvZGVsZXRlLXRleHQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtdGV4dC9pbnNlcnQtZnJhZ21lbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtc2VsZWN0aW9uL2NvbGxhcHNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLXNlbGVjdGlvbi9kZXNlbGVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1zZWxlY3Rpb24vbW92ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1zZWxlY3Rpb24vc2VsZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLXNlbGVjdGlvbi9zZXQtcG9pbnQudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtc2VsZWN0aW9uL3NldC1zZWxlY3Rpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtbm9kZS9pbnNlcnQtbm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtbm9kZS9saWZ0LW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvbWVyZ2Utbm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtbm9kZS9tb3ZlLW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvcmVtb3ZlLW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvc2V0LW5vZGVzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL3NsYXRlL3NyYy90cmFuc2Zvcm1zLW5vZGUvc3BsaXQtbm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL3RyYW5zZm9ybXMtbm9kZS91bnNldC1ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1ub2RlL3Vud3JhcC1ub2Rlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9zbGF0ZS9zcmMvdHJhbnNmb3Jtcy1ub2RlL3dyYXAtbm9kZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvc2xhdGUvc3JjL2NyZWF0ZS1lZGl0b3IudHMiXSwibmFtZXMiOlsic2xhdGVfMF8xMTRfMF9leHBvcnRzIiwiX19leHBvcnQiLCJFZGl0b3IiLCJFbGVtZW50IiwiTG9jYXRpb24iLCJOb2RlIiwiT3BlcmF0aW9uIiwiUGF0aCIsIlBhdGhSZWYiLCJQb2ludCIsIlBvaW50UmVmIiwiUmFuZ2UiLCJSYW5nZVJlZiIsIlNjcnViYmVyIiwiU3BhbiIsIlRleHQiLCJUcmFuc2Zvcm1zIiwiYWJvdmUiLCJhZGRNYXJrIiwiYWZ0ZXIiLCJhcHBseSIsImJlZm9yZSIsImNvbGxhcHNlIiwiY3JlYXRlRWRpdG9yIiwiZGVsZXRlQmFja3dhcmQiLCJkZWxldGVGb3J3YXJkIiwiZGVsZXRlRnJhZ21lbnQiLCJkZWxldGVUZXh0IiwiZGVzZWxlY3QiLCJlZGdlcyIsImVsZW1lbnRSZWFkT25seSIsImVuZCIsImZpcnN0IiwiZnJhZ21lbnQiLCJnZXREaXJ0eVBhdGhzIiwiZ2V0RnJhZ21lbnQiLCJnZXRWb2lkIiwiaGFzQmxvY2tzIiwiaGFzSW5saW5lcyIsImhhc1BhdGgiLCJoYXNUZXh0cyIsImluc2VydEJyZWFrIiwiaW5zZXJ0RnJhZ21lbnQiLCJpbnNlcnROb2RlIiwiaW5zZXJ0Tm9kZXMiLCJpbnNlcnRTb2Z0QnJlYWsiLCJpbnNlcnRUZXh0IiwiaXNCbG9jayIsImlzRWRnZSIsImlzRWRpdG9yIiwiaXNFbXB0eSIsImlzRW5kIiwiaXNOb3JtYWxpemluZyIsImlzU3RhcnQiLCJsYXN0IiwibGVhZiIsImxldmVscyIsImxpZnROb2RlcyIsIm1hcmtzIiwibWVyZ2VOb2RlcyIsIm1vdmUiLCJtb3ZlTm9kZXMiLCJuZXh0Iiwibm9kZSIsIm5vZGVzIiwibm9ybWFsaXplIiwibm9ybWFsaXplTm9kZSIsInBhcmVudCIsInBhdGgiLCJwYXRoUmVmIiwicGF0aFJlZnMiLCJwb2ludCIsInBvaW50UmVmIiwicG9pbnRSZWZzIiwicG9zaXRpb25zIiwicHJldmlvdXMiLCJyYW5nZSIsInJhbmdlUmVmIiwicmFuZ2VSZWZzIiwicmVtb3ZlTWFyayIsInJlbW92ZU5vZGVzIiwic2VsZWN0Iiwic2V0Tm9kZXMiLCJzZXROb3JtYWxpemluZyIsInNldFBvaW50Iiwic2V0U2VsZWN0aW9uIiwic2hvdWxkTWVyZ2VOb2Rlc1JlbW92ZVByZXZOb2RlIiwic2hvdWxkTm9ybWFsaXplIiwic3BsaXROb2RlcyIsInN0YXJ0Iiwic3RyaW5nIiwidW5oYW5nUmFuZ2UiLCJ1bnNldE5vZGVzIiwidW53cmFwTm9kZXMiLCJ3aXRob3V0Tm9ybWFsaXppbmciLCJ3cmFwTm9kZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwidHJhbnNmb3JtIiwicmVmIiwib3AiLCJjdXJyZW50IiwiYWZmaW5pdHkiLCJwYXRoMyIsInVucmVmIiwicG9pbnQzIiwiRElSVFlfUEFUSFMiLCJXZWFrTWFwIiwiRElSVFlfUEFUSF9LRVlTIiwiRkxVU0hJTkciLCJOT1JNQUxJWklORyIsIlBBVEhfUkVGUyIsIlBPSU5UX1JFRlMiLCJSQU5HRV9SRUZTIiwiYW5jZXN0b3JzIiwib3B0aW9ucyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInJldmVyc2UiLCJwYXRocyIsInNsaWNlIiwiY29tbW9uIiwiYW5vdGhlciIsImkiLCJhdiIsImJ2IiwicHVzaCIsImNvbXBhcmUiLCJtaW4iLCJNYXRoIiwiZW5kc0FmdGVyIiwiYXMiLCJicyIsImVxdWFscyIsImVuZHNBdCIsImVuZHNCZWZvcmUiLCJldmVyeSIsIm4iLCJoYXNQcmV2aW91cyIsImlzQWZ0ZXIiLCJpc0FuY2VzdG9yIiwiaXNCZWZvcmUiLCJpc0NoaWxkIiwiaXNDb21tb24iLCJpc0Rlc2NlbmRhbnQiLCJpc1BhcmVudCIsImlzUGF0aCIsInZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNTaWJsaW5nIiwiYWwiLCJibCIsImxpc3QiLCJFcnJvciIsImNvbmNhdCIsImxhc3QyIiwib3BlcmF0aW9uQ2FuVHJhbnNmb3JtUGF0aCIsIm9wZXJhdGlvbiIsInR5cGUiLCJyZWxhdGl2ZSIsImFuY2VzdG9yIiwicCIsIl9vcCIsIl9vcDIiLCJwb3NpdGlvbiIsIl9vcDMiLCJfcG9zaXRpb24iLCJfb3A0IiwibmV3UGF0aCIsIm9ucCIsImNvcHkiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibzIiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl90b1ByaW1pdGl2ZSIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInJlcyIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfdG9Qcm9wZXJ0eUtleSIsImFyZyIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXBwbHlUb0RyYWZ0IiwiZWRpdG9yIiwic2VsZWN0aW9uIiwibm9kZTMiLCJwYXJlbnQzIiwiaW5kZXgiLCJjaGlsZHJlbiIsInNwbGljZSIsInBvaW50cyIsIl9wYXRoIiwib2Zmc2V0IiwidGV4dCIsIl9ub2RlIiwiYmVmb3JlMyIsImFmdGVyMyIsIl9wb2ludCIsIl9rZXkiLCJfcGF0aDIiLCJfbm9kZTIiLCJnZXQiLCJwcmV2UGF0aCIsInByZXYiLCJfcGFyZW50IiwiX2luZGV4IiwiaXNUZXh0Iiwic3RyaW5naWZ5IiwiX3BvaW50MiIsIl9rZXkyIiwiX3BhdGgzIiwiX25vZGUzIiwiX3BhcmVudDIiLCJfaW5kZXgyIiwidHJ1ZVBhdGgiLCJuZXdQYXJlbnQiLCJuZXdJbmRleCIsIl9wb2ludDMiLCJfa2V5MyIsIl9wYXRoNCIsIl9pbmRleDMiLCJfcGFyZW50MyIsIl9wb2ludDQiLCJfa2V5NCIsInJlc3VsdCIsIl9wcmV2IiwibmV4dDMiLCJ0ZXh0cyIsInByZWZlck5leHQiLCJfcGF0aDUiLCJfb2Zmc2V0IiwiX3RleHQiLCJfbm9kZTQiLCJfYmVmb3JlIiwiX2FmdGVyIiwiX3BvaW50NSIsIl9rZXk1IiwiX3BhdGg2IiwicHJvcGVydGllcyIsIm5ld1Byb3BlcnRpZXMiLCJfbm9kZTUiLCJfa2V5NiIsIl9rZXk3IiwiaGFzT3duUHJvcGVydHkiLCJfbmV3UHJvcGVydGllcyIsImlzUmFuZ2UiLCJfb2JqZWN0U3ByZWFkJGUiLCJfa2V5OCIsIl92YWx1ZSIsIl9wYXRoNyIsIl9wcm9wZXJ0aWVzIiwiX25vZGU2IiwiX3BhcmVudDQiLCJfaW5kZXg0IiwibmV3Tm9kZSIsIl9iZWZvcmUyIiwiX2FmdGVyMiIsIl9iZWZvcmUzIiwiX2FmdGVyMyIsIl9wb2ludDYiLCJfa2V5OSIsIkdlbmVyYWxUcmFuc2Zvcm1zIiwiaW1wb3J0X2ltbWVyIiwiY3JlYXRlRHJhZnQiLCJmaW5pc2hEcmFmdCIsImlzRHJhZnQiLCJOb2RlVHJhbnNmb3JtcyIsIm5vZGVzMiIsInByb3BzIiwiZWxlbWVudCIsIlNlbGVjdGlvblRyYW5zZm9ybXMiLCJ0YXJnZXQiLCJpc0RlZXBFcXVhbCIsImEiLCJiIiwiaW1wb3J0X2lzX3BsYWluX29iamVjdCIsImlzUGxhaW5PYmplY3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicmFuZ2UyIiwiYW5jaG9yIiwiZm9jdXMiLCJpc0JhY2t3YXJkIiwiZW5kMiIsInN1cnJvdW5kcyIsImludGVyc2VjdGlvblJhbmdlIiwiaW50ZXJzZWN0aW9uIiwiaW5jbHVkZXMiLCJycyIsInJlIiwidHMiLCJ0ZSIsInN0YXJ0MiIsImlzQWZ0ZXJTdGFydCIsImlzQmVmb3JlRW5kIiwiaXNQb2ludCIsInJlc3QiLCJfZXhjbHVkZWQkNCIsInMxIiwiZTEiLCJzMiIsImUyIiwiX29iamVjdFNwcmVhZCRkIiwiaXNDb2xsYXBzZWQiLCJpc0V4cGFuZGVkIiwiaXNGb3J3YXJkIiwicHJvZHVjZSIsInIiLCJhZmZpbml0eUFuY2hvciIsImFmZmluaXR5Rm9jdXMiLCJpc0VsZW1lbnQiLCJpc05vZGVMaXN0IiwiaXNFbGVtZW50TGlzdCIsInZhbCIsImlzRWxlbWVudFByb3BzIiwiaXNFbGVtZW50VHlwZSIsImVsZW1lbnRWYWwiLCJlbGVtZW50S2V5IiwibWF0Y2hlcyIsIklTX05PREVfTElTVF9DQUNIRSIsInJvb3QiLCJlbnRyeSIsImNoaWxkIiwiYyIsImNoaWxkUGF0aCIsImRlc2NlbmRhbnQiLCJkZXNjZW5kYW50cyIsImVsZW1lbnRzIiwiZXh0cmFjdFByb3BzIiwiX2V4Y2x1ZGVkJDMiLCJfZXhjbHVkZWQyJDMiLCJuZXdSb290Iiwibm9kZUVudHJpZXMiLCJwYXNzIiwiX3JlZiIsInBhdGg0IiwibGVhZjMiLCJfbGVhZiIsImdldElmIiwiaGFzIiwiaXNOb2RlIiwiY2FjaGVkUmVzdWx0Iiwic2V0IiwiaXNUZXh0UHJvcHMiLCJmcm9tIiwidG8iLCJ2aXNpdGVkIiwiU2V0IiwiYWRkIiwibmV4dEluZGV4IiwiX25ld1BhdGgiLCJwYXJlbnRQYXRoIiwibWFwIiwiam9pbiIsImlzTm9kZU9wZXJhdGlvbiIsImlzT3BlcmF0aW9uIiwiZW5kc1dpdGgiLCJpc09wZXJhdGlvbkxpc3QiLCJpc1NlbGVjdGlvbk9wZXJhdGlvbiIsImlzVGV4dE9wZXJhdGlvbiIsImludmVyc2UiLCJfb2JqZWN0U3ByZWFkJGMiLCJpbnZlcnNlUGF0aCIsImludmVyc2VOZXdQYXRoIiwiSVNfRURJVE9SX0NBQ0hFIiwiY2FjaGVkSXNFZGl0b3IiLCJpc0VkaXRvcjIiLCJpc0VsZW1lbnRSZWFkT25seSIsImlzSW5saW5lIiwiaXNTZWxlY3RhYmxlIiwiaXNWb2lkIiwib25DaGFuZ2UiLCJvcGVyYXRpb25zIiwiYXQiLCJ1bml0IiwiZnJhZ21lbnQyIiwiZ2V0TWFya3MiLCJpc05vcm1hbGl6aW5nMiIsInZvaWQiLCJmbiIsInByZXZOb2RlIiwiY3VyTm9kZSIsImlzTG9jYXRpb24iLCJpc1NwYW4iLCJfb2JqZWN0U3ByZWFkJGIiLCJfc2NydWJiZXIiLCJzZXRTY3J1YmJlciIsInNjcnViYmVyIiwiSlNPTiIsImxvb3NlIiwib21pdFRleHQiLCJfZXhjbHVkZWQkMiIsImlzVGV4dExpc3QiLCJkZWNvcmF0aW9ucyIsImxlYXZlcyIsIl9vYmplY3RTcHJlYWQkYSIsImRlYyIsIm1lcmdlIiwibWVyZ2VEZWNvcmF0aW9uIiwiX2V4Y2x1ZGVkMiQyIiwibGVhZkVuZCIsImRlY29yYXRpb25TdGFydCIsImRlY29yYXRpb25FbmQiLCJhc3NpZ24iLCJsZWFmU3RhcnQiLCJtaWRkbGUiLCJvZmYiLCJfb2ZmIiwiY3VycmVudE9mZnNldCIsIml0ZW0iLCJlbnRyaWVzIiwiX3N0YXJ0IiwiX2VuZCIsImlzRmlyc3QiLCJpc0xhc3QiLCJnZXREZWZhdWx0SW5zZXJ0TG9jYXRpb24iLCJtYXRjaFBhdGgiLCJnZXRDaGFyYWN0ZXJEaXN0YW5jZSIsImdldENoYXJhY3RlckRpc3RhbmNlMiIsInN0ciIsImlzUlRMIiwiaXNMVFIiLCJjb2RlcG9pbnRzIiwiY29kZXBvaW50c0l0ZXJhdG9yUlRMIiwibGVmdCIsIkNvZGVwb2ludFR5cGUiLCJOb25lIiwicmlnaHQiLCJkaXN0YW5jZSIsImdiMTEiLCJnYjEyT3IxMyIsImNoYXIiLCJjb2RlIiwiY29kZVBvaW50QXQiLCJnZXRDb2RlcG9pbnRUeXBlIiwiaW50ZXJzZWN0cyIsIlpXSiIsIkV4dFBpY3QiLCJlbmRzV2l0aEVtb2ppWldKIiwic3Vic3RyaW5nIiwiUkkiLCJlbmRzV2l0aE9kZE51bWJlck9mUklzIiwiaXNCb3VuZGFyeVBhaXIiLCJTUEFDRSIsIlBVTkNUVUFUSU9OIiwiQ0hBTUVMRU9OIiwiZ2V0V29yZERpc3RhbmNlIiwiZ2V0V29yZERpc3RhbmNlMiIsImRpc3QiLCJzdGFydGVkIiwiY2hhckRpc3QiLCJyZW1haW5pbmciLCJzcGxpdEJ5Q2hhcmFjdGVyRGlzdGFuY2UiLCJpc1dvcmRDaGFyYWN0ZXIiLCJpc1dvcmRDaGFyYWN0ZXIyIiwidGVzdCIsIm5leHRDaGFyIiwibmV4dFJlbWFpbmluZyIsImNvZGVwb2ludHNJdGVyYXRvclJUTDIiLCJjaGFyMSIsImNoYXJBdCIsImlzTG93U3Vycm9nYXRlIiwiY2hhckNvZGVBdCIsImNoYXIyIiwiaXNIaWdoU3Vycm9nYXRlIiwiY2hhckNvZGUiLCJDb2RlcG9pbnRUeXBlMiIsInJlRXh0ZW5kIiwicmVQcmVwZW5kIiwicmVTcGFjaW5nTWFyayIsInJlTCIsInJlViIsInJlVCIsInJlTFYiLCJyZUxWVCIsInJlRXh0UGljdCIsIkFueSIsInNlYXJjaCIsIkV4dGVuZCIsIlByZXBlbmQiLCJTcGFjaW5nTWFyayIsIkwiLCJWIiwiVCIsIkxWIiwiTFZUIiwieCIsInkiLCJOb25Cb3VuZGFyeVBhaXJzIiwiZmluZEluZGV4IiwiZW5kaW5nRW1vamlaV0oiLCJlbmRpbmdSSXMiLCJtYXRjaCIsIm51bVJJcyIsIlRleHRUcmFuc2Zvcm1zIiwiZGVsZXRlIiwidm9pZHMiLCJzdGFydFJlZiIsImVuZFJlZiIsInN0YXJ0UG9pbnQiLCJlbmRQb2ludCIsIl9vYmplY3RTcHJlYWQkOSIsIkJBVENISU5HX0RJUlRZX1BBVEhTIiwiaXNCYXRjaGluZ0RpcnR5UGF0aHMiLCJiYXRjaERpcnR5UGF0aHMiLCJ1cGRhdGUiLCJ1cGRhdGVEaXJ0eVBhdGhzIiwibmV3RGlydHlQYXRocyIsIm9sZERpcnR5UGF0aHMiLCJvbGREaXJ0eVBhdGhLZXlzIiwiZGlydHlQYXRocyIsImRpcnR5UGF0aEtleXMiLCJfcmVmMiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImxldmVsczIiLCJwMiIsInByZXZpb3VzUGF0aCIsIm9sZEFuY2VzdG9ycyIsIm5ld0FuY2VzdG9ycyIsIl9hbmNlc3RvciIsIl9wIiwicmVzdWx0UGF0aCIsIl9hbmNlc3RvcnMiLCJfbGV2ZWxzIiwibmV4dFBhdGgiLCJzaG91bGRIYXZlSW5saW5lcyIsImN1cnJlbnROb2RlIiwiX2NoaWxkIiwiaXNJbmxpbmVPclRleHQiLCJuZXdDaGlsZCIsIl9uZXdDaGlsZCIsImVsZW1lbnRDaGlsZCIsIml0ZXJhdGlvbiIsImluaXRpYWxEaXJ0eVBhdGhzTGVuZ3RoIiwibWF4SXRlcmF0aW9ucyIsImFib3ZlMiIsIm1vZGUiLCJwYXJlbnROb2RlMiIsIm1hcmthYmxlVm9pZCIsImV4cGFuZGVkU2VsZWN0aW9uIiwibWFya0FjY2VwdGluZ1ZvaWRTZWxlY3RlZCIsInNlbGVjdGVkTm9kZSIsInNlbGVjdGVkUGF0aCIsInBhcmVudE5vZGUiLCJzcGxpdCIsIm1hcmtzMyIsIl9vYmplY3RTcHJlYWQkOCIsImFmdGVyMiIsImVkZ2UiLCJkIiwiX29iamVjdFNwcmVhZCQ3IiwiYmVmb3JlMiIsIl9vYmplY3RTcHJlYWQkNiIsImRlbGV0ZUZyYWdtZW50MiIsImRpcmVjdGlvbiIsImVsZW1lbnRSZWFkT25seTIiLCJfb2JqZWN0U3ByZWFkJDUiLCJnZXRWb2lkMiIsIl9vYmplY3RTcHJlYWQkNCIsInNvbWUiLCJhbHdheXMiLCJpbnNlcnRUZXh0MiIsIl9vYmplY3RTcHJlYWQkMyIsImZpcnN0MiIsImxlYWYyIiwibWFya3MyIiwiaXNFbmQyIiwiX3Jlc3QiLCJfZXhjbHVkZWQkMSIsIm1hcmtlZFZvaWQiLCJibG9jayIsImJsb2NrUGF0aCIsIl9leGNsdWRlZDIkMSIsIm5leHQyIiwicG9pbnRBZnRlckxvY2F0aW9uIiwic3BhbiIsIm5vZGUyIiwidW5pdmVyc2FsIiwiX3Bhc3MiLCJpZ25vcmVOb25TZWxlY3RhYmxlIiwibm9kZTQiLCJoaXQiLCJpc0xvd2VyIiwiZW1pdCIsIm5vcm1hbGl6ZTIiLCJmb3JjZSIsImdldERpcnR5UGF0aHMyIiwiZWRpdG9yMiIsImdldERpcnR5UGF0aEtleXMiLCJwb3BEaXJ0eVBhdGgiLCJwb3AiLCJhbGxQYXRocyIsImFsbFBhdGhLZXlzIiwiZGlydHlQYXRoIiwiXyIsIl9kaXJ0eVBhdGgiLCJfZW50cnkiLCJwYXJlbnQyIiwicGF0aFJlZjIiLCJwYXRoUmVmczIiLCJyZWZzIiwicGF0aDIiLCJkZXB0aCIsImZpcnN0UGF0aCIsImxhc3RQYXRoIiwicG9pbnRSZWYyIiwicG9pbnRSZWZzMiIsInBvaW50MiIsImlzTmV3QmxvY2siLCJibG9ja1RleHQiLCJsZWFmVGV4dFJlbWFpbmluZyIsImxlYWZUZXh0T2Zmc2V0IiwiZSIsInMiLCJjYWxjRGlzdGFuY2UiLCJ1bml0MiIsInJldmVyc2UyIiwicHJldmlvdXMyIiwicG9pbnRCZWZvcmVMb2NhdGlvbiIsInByZXZpb3VzMyIsInJhbmdlUmVmMiIsInJhbmdlUmVmczIiLCJfb2JqZWN0U3ByZWFkJDIiLCJzdHJpbmcyIiwidCIsInVuaGFuZ1JhbmdlMiIsImVuZEJsb2NrIiwic2tpcCIsImRlbGV0ZVRleHQyIiwiX0VkaXRvciR2b2lkIiwiX0VkaXRvciR2b2lkMiIsImhhbmdpbmciLCJmdXJ0aGVzdFZvaWQiLCJ2b2lkUGF0aCIsIm9wdHMiLCJlbmRPZkRvYyIsInN0YXJ0QmxvY2siLCJpc0Fjcm9zc0Jsb2NrcyIsImlzU2luZ2xlVGV4dCIsInN0YXJ0Tm9uRWRpdGFibGUiLCJlbmROb25FZGl0YWJsZSIsInJlbW92ZWRUZXh0IiwiZmlsdGVyIiwiZm9yRWFjaCIsInN0YXJ0VW5yZWYiLCJlbmRVbnJlZiIsImluc2VydEZyYWdtZW50MiIsImJhdGNoRGlydHkiLCJwb2ludFJlZjMiLCJpbmxpbmVFbGVtZW50TWF0Y2giLCJfaW5saW5lUGF0aCIsImJsb2NrTWF0Y2giLCJpc0Jsb2NrU3RhcnQiLCJpc0Jsb2NrRW5kIiwiaXNCbG9ja0VtcHR5IiwibWVyZ2VTdGFydCIsIm1lcmdlRW5kIiwibWF0Y2hlciIsImlzUm9vdCIsInN0YXJ0cyIsIm1pZGRsZXMiLCJlbmRzIiwic3RhcnRpbmciLCJoYXNCbG9ja3MyIiwiaW5saW5lTWF0Y2giLCJpbmxpbmVQYXRoIiwiaXNJbmxpbmVTdGFydCIsImlzSW5saW5lRW5kIiwibWlkZGxlUmVmIiwiY29sbGFwc2UyIiwibW92ZTIiLCJzZXRQb2ludDIiLCJfb2JqZWN0U3ByZWFkJDEiLCJvbGRQcm9wcyIsIm5ld1Byb3BzIiwiayIsImluc2VydE5vZGVzMiIsInNlbGVjdDIiLCJtYXRjaFBhdGgyIiwicGF0aFJlZjMiLCJpc0F0RW5kIiwiYmF0Y2hlZE9wcyIsIl9sb29wIiwiX2xvb3AyIiwibGlmdE5vZGVzMiIsInBhcmVudE5vZGVFbnRyeSIsInRvUGF0aCIsIl90b1BhdGgiLCJzcGxpdFBhdGgiLCJfdG9QYXRoMiIsImhhc1NpbmdsZUNoaWxkTmVzdCIsIm1lcmdlTm9kZXMyIiwiY29tbW9uUGF0aCIsImlzUHJldmlvdXNTaWJsaW5nIiwiZW1wdHlBbmNlc3RvciIsImVtcHR5UmVmIiwiX2V4Y2x1ZGVkIiwiX2V4Y2x1ZGVkMiIsInRvUmVmIiwidGFyZ2V0cyIsInJlbW92ZU5vZGVzMiIsImRlcHRocyIsInNldE5vZGVzMiIsInJhbmdlUmVmMyIsInNwbGl0TW9kZSIsImVuZEF0RW5kT2ZOb2RlIiwic3RhcnRBdFN0YXJ0T2ZOb2RlIiwicHJvcCIsIm5vZGVQcm9wIiwiaGFzQ2hhbmdlcyIsImRlbGV0ZVJhbmdlIiwic3BsaXROb2RlczIiLCJoZWlnaHQiLCJiZWZvcmVSZWYiLCJhZnRlclJlZiIsImhpZ2hlc3QiLCJ2b2lkTWF0Y2giLCJudWRnZSIsInZvaWROb2RlIiwiYWZ0ZXJQYXRoIiwic2libGluZ0hlaWdodCIsImhpZ2hlc3RQYXRoIiwibG93ZXN0UGF0aCIsIl9hZnRlclJlZiIsInVuc2V0Tm9kZXMyIiwidW53cmFwTm9kZXMyIiwid3JhcE5vZGVzMiIsInJvb3RzIiwicm9vdFBhdGgiLCJjb21tb25Ob2RlRW50cnkiLCJjb21tb25Ob2RlIiwid3JhcHBlclBhdGgiLCJ3cmFwcGVyIiwiX29iamVjdFNwcmVhZCIsIl9yZXQiLCJhcHBseSQxIiwiX2xlbiIsImFyZ3MiLCJhZGRNYXJrJDEiLCJfbGVuMiIsImRlbGV0ZUJhY2t3YXJkJDEiLCJfbGVuMyIsImRlbGV0ZUZvcndhcmQkMSIsIl9sZW40IiwiZGVsZXRlRnJhZ21lbnQkMSIsIl9sZW41IiwiZ2V0RnJhZ21lbnQkMSIsIl9sZW42IiwiaW5zZXJ0QnJlYWskMSIsIl9sZW43IiwiaW5zZXJ0U29mdEJyZWFrJDEiLCJfbGVuOCIsImluc2VydEZyYWdtZW50JDEiLCJfbGVuOSIsImluc2VydE5vZGUkMSIsIl9sZW4xMCIsIl9rZXkxMCIsImluc2VydFRleHQkMSIsIl9sZW4xMSIsIl9rZXkxMSIsIm5vcm1hbGl6ZU5vZGUkMSIsIl9sZW4xMiIsIl9rZXkxMiIsInJlbW92ZU1hcmskMSIsIl9sZW4xMyIsIl9rZXkxMyIsImdldERpcnR5UGF0aHMkMSIsIl9sZW4xNCIsIl9rZXkxNCIsInNob3VsZE5vcm1hbGl6ZSQxIiwiX2xlbjE1IiwiX2tleTE1IiwiYWJvdmUkMSIsIl9sZW4xNiIsIl9rZXkxNiIsImFmdGVyJDEiLCJfbGVuMTciLCJfa2V5MTciLCJiZWZvcmUkMSIsIl9sZW4xOCIsIl9rZXkxOCIsImNvbGxhcHNlJDEiLCJfbGVuMTkiLCJfa2V5MTkiLCJfZGVsZXRlIiwiX2xlbjIwIiwiX2tleTIwIiwiZGVzZWxlY3QkMSIsIl9sZW4yMSIsIl9rZXkyMSIsImVkZ2VzJDEiLCJfbGVuMjIiLCJfa2V5MjIiLCJlbGVtZW50UmVhZE9ubHkkMSIsIl9sZW4yMyIsIl9rZXkyMyIsImVuZCQxIiwiX2xlbjI0IiwiX2tleTI0IiwiZmlyc3QkMSIsIl9sZW4yNSIsIl9rZXkyNSIsImZyYWdtZW50JDEiLCJfbGVuMjYiLCJfa2V5MjYiLCJfbGVuMjciLCJfa2V5MjciLCJoYXNCbG9ja3MkMSIsIl9sZW4yOCIsIl9rZXkyOCIsImhhc0lubGluZXMkMSIsIl9sZW4yOSIsIl9rZXkyOSIsImhhc1BhdGgkMSIsIl9sZW4zMCIsIl9rZXkzMCIsImhhc1RleHRzJDEiLCJfbGVuMzEiLCJfa2V5MzEiLCJpbnNlcnROb2RlcyQxIiwiX2xlbjMyIiwiX2tleTMyIiwiaXNCbG9jayQxIiwiX2xlbjMzIiwiX2tleTMzIiwiaXNFZGdlJDEiLCJfbGVuMzQiLCJfa2V5MzQiLCJpc0VtcHR5JDEiLCJfbGVuMzUiLCJfa2V5MzUiLCJpc0VuZCQxIiwiX2xlbjM2IiwiX2tleTM2IiwiaXNOb3JtYWxpemluZyQxIiwiX2xlbjM3IiwiX2tleTM3IiwiaXNTdGFydCQxIiwiX2xlbjM4IiwiX2tleTM4IiwibGFzdCQxIiwiX2xlbjM5IiwiX2tleTM5IiwibGVhZiQxIiwiX2xlbjQwIiwiX2tleTQwIiwibGV2ZWxzJDEiLCJfbGVuNDEiLCJfa2V5NDEiLCJsaWZ0Tm9kZXMkMSIsIl9sZW40MiIsIl9rZXk0MiIsIm1lcmdlTm9kZXMkMSIsIl9sZW40MyIsIl9rZXk0MyIsIm1vdmUkMSIsIl9sZW40NCIsIl9rZXk0NCIsIm1vdmVOb2RlcyQxIiwiX2xlbjQ1IiwiX2tleTQ1IiwibmV4dCQxIiwiX2xlbjQ2IiwiX2tleTQ2Iiwibm9kZSQxIiwiX2xlbjQ3IiwiX2tleTQ3Iiwibm9kZXMkMSIsIl9sZW40OCIsIl9rZXk0OCIsIm5vcm1hbGl6ZSQxIiwiX2xlbjQ5IiwiX2tleTQ5IiwicGFyZW50JDEiLCJfbGVuNTAiLCJfa2V5NTAiLCJwYXRoJDEiLCJfbGVuNTEiLCJfa2V5NTEiLCJwYXRoUmVmJDEiLCJfbGVuNTIiLCJfa2V5NTIiLCJwYXRoUmVmcyQxIiwiX2xlbjUzIiwiX2tleTUzIiwicG9pbnQkMSIsIl9sZW41NCIsIl9rZXk1NCIsInBvaW50UmVmJDEiLCJfbGVuNTUiLCJfa2V5NTUiLCJwb2ludFJlZnMkMSIsIl9sZW41NiIsIl9rZXk1NiIsInBvc2l0aW9ucyQxIiwiX2xlbjU3IiwiX2tleTU3IiwicHJldmlvdXMkMSIsIl9sZW41OCIsIl9rZXk1OCIsInJhbmdlJDEiLCJfbGVuNTkiLCJfa2V5NTkiLCJyYW5nZVJlZiQxIiwiX2xlbjYwIiwiX2tleTYwIiwicmFuZ2VSZWZzJDEiLCJfbGVuNjEiLCJfa2V5NjEiLCJyZW1vdmVOb2RlcyQxIiwiX2xlbjYyIiwiX2tleTYyIiwic2VsZWN0JDEiLCJfbGVuNjMiLCJfa2V5NjMiLCJzZXROb2RlcyQxIiwiX2xlbjY0IiwiX2tleTY0Iiwic2V0Tm9ybWFsaXppbmckMSIsIl9sZW42NSIsIl9rZXk2NSIsInNldFBvaW50JDEiLCJfbGVuNjYiLCJfa2V5NjYiLCJzZXRTZWxlY3Rpb24kMSIsIl9sZW42NyIsIl9rZXk2NyIsInNwbGl0Tm9kZXMkMSIsIl9sZW42OCIsIl9rZXk2OCIsInN0YXJ0JDEiLCJfbGVuNjkiLCJfa2V5NjkiLCJzdHJpbmckMSIsIl9sZW43MCIsIl9rZXk3MCIsInVuaGFuZ1JhbmdlJDEiLCJfbGVuNzEiLCJfa2V5NzEiLCJ1bnNldE5vZGVzJDEiLCJfbGVuNzIiLCJfa2V5NzIiLCJ1bndyYXBOb2RlcyQxIiwiX2xlbjczIiwiX2tleTczIiwiX3ZvaWQiLCJfbGVuNzQiLCJfa2V5NzQiLCJ3aXRob3V0Tm9ybWFsaXppbmckMSIsIl9sZW43NSIsIl9rZXk3NSIsIndyYXBOb2RlcyQxIiwiX2xlbjc2IiwiX2tleTc2Iiwic2hvdWxkTWVyZ2VOb2Rlc1JlbW92ZVByZXZOb2RlJDEiLCJfbGVuNzciLCJfa2V5NzciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsZUFBQSxFQUFBQSxDQUFBLEtBQUFBLGVBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsYUFBQSxFQUFBQSxDQUFBLEtBQUFBLGFBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsSUFBQSxFQUFBQSxDQUFBLEtBQUFBLElBQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFBLFNBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsY0FBQSxFQUFBQSxDQUFBLEtBQUFBLGNBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBLFFBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsOEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSw4QkFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxLQUFBLEVBQUFBLENBQUEsS0FBQUEsS0FBQTtFQUFBQyxNQUFBLEVBQUFBLENBQUEsS0FBQUEsTUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxXQUFBLEVBQUFBLENBQUEsS0FBQUEsV0FBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFsRyxxQkFBQTs7Ozs7QUNzQk8sSUFBTVEsT0FBQSxHQUE0QjtFQUN2QzJGLFVBQVVDLEdBQUEsRUFBY0MsRUFBQSxFQUFhO0lBQ25DLElBQU07TUFBRUMsT0FBQTtNQUFTQztJQUFVLElBQUdILEdBQUE7SUFFOUIsSUFBSUUsT0FBQSxJQUFXLE1BQU07TUFDbkI7SUFDRDtJQUVELElBQU1FLEtBQUEsR0FBT2pHLElBQUEsQ0FBSzRGLFNBQUEsQ0FBVUcsT0FBQSxFQUFTRCxFQUFBLEVBQUk7TUFBRUU7SUFBUSxDQUFFO0lBQ3JESCxHQUFBLENBQUlFLE9BQUEsR0FBVUUsS0FBQTtJQUVkLElBQUlBLEtBQUEsSUFBUSxNQUFNO01BQ2hCSixHQUFBLENBQUlLLEtBQUEsQ0FBSztJQUNWO0VBQ0g7O0FDYkssSUFBTS9GLFFBQUEsR0FBOEI7RUFDekN5RixVQUFVQyxHQUFBLEVBQWVDLEVBQUEsRUFBYTtJQUNwQyxJQUFNO01BQUVDLE9BQUE7TUFBU0M7SUFBVSxJQUFHSCxHQUFBO0lBRTlCLElBQUlFLE9BQUEsSUFBVyxNQUFNO01BQ25CO0lBQ0Q7SUFFRCxJQUFNSSxNQUFBLEdBQVFqRyxLQUFBLENBQU0wRixTQUFBLENBQVVHLE9BQUEsRUFBU0QsRUFBQSxFQUFJO01BQUVFO0lBQVEsQ0FBRTtJQUN2REgsR0FBQSxDQUFJRSxPQUFBLEdBQVVJLE1BQUE7SUFFZCxJQUFJQSxNQUFBLElBQVMsTUFBTTtNQUNqQk4sR0FBQSxDQUFJSyxLQUFBLENBQUs7SUFDVjtFQUNIOztBQ2ZLLElBQU03RixRQUFBLEdBQThCO0VBQ3pDdUYsVUFBVUMsR0FBQSxFQUFlQyxFQUFBLEVBQWE7SUFDcEMsSUFBTTtNQUFFQyxPQUFBO01BQVNDO0lBQVUsSUFBR0gsR0FBQTtJQUU5QixJQUFJRSxPQUFBLElBQVcsTUFBTTtNQUNuQjtJQUNEO0lBRUQsSUFBTUUsS0FBQSxHQUFPN0YsS0FBQSxDQUFNd0YsU0FBQSxDQUFVRyxPQUFBLEVBQVNELEVBQUEsRUFBSTtNQUFFRTtJQUFRLENBQUU7SUFDdERILEdBQUEsQ0FBSUUsT0FBQSxHQUFVRSxLQUFBO0lBRWQsSUFBSUEsS0FBQSxJQUFRLE1BQU07TUFDaEJKLEdBQUEsQ0FBSUssS0FBQSxDQUFLO0lBQ1Y7RUFDSDs7QUNsQ0ssSUFBTUUsV0FBQSxHQUF1QyxtQkFBSUMsT0FBQSxDQUFPO0FBQ3hELElBQU1DLGVBQUEsR0FBZ0QsbUJBQUlELE9BQUEsQ0FBTztBQUNqRSxJQUFNRSxRQUFBLEdBQXFDLG1CQUFJRixPQUFBLENBQU87QUFDdEQsSUFBTUcsV0FBQSxHQUF3QyxtQkFBSUgsT0FBQSxDQUFPO0FBQ3pELElBQU1JLFNBQUEsR0FBMkMsbUJBQUlKLE9BQUEsQ0FBTztBQUM1RCxJQUFNSyxVQUFBLEdBQTZDLG1CQUFJTCxPQUFBLENBQU87QUFDOUQsSUFBTU0sVUFBQSxHQUE2QyxtQkFBSU4sT0FBQSxDQUFPO0FDNEs5RCxJQUFNckcsSUFBQSxHQUFzQjtFQUNqQzRHLFVBQVVYLEtBQUEsRUFBOEM7SUFBQSxJQUFsQ1ksT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFnQztJQUNwRCxJQUFNO01BQUVFLE9BQUEsR0FBVTtJQUFPLElBQUdILE9BQUE7SUFDNUIsSUFBSUksS0FBQSxHQUFRakgsSUFBQSxDQUFLaUQsTUFBQSxDQUFPZ0QsS0FBQSxFQUFNWSxPQUFPO0lBRXJDLElBQUlHLE9BQUEsRUFBUztNQUNYQyxLQUFBLEdBQVFBLEtBQUEsQ0FBTUMsS0FBQSxDQUFNLENBQUM7SUFDdEIsT0FBTTtNQUNMRCxLQUFBLEdBQVFBLEtBQUEsQ0FBTUMsS0FBQSxDQUFNLEdBQUcsRUFBRTtJQUMxQjtJQUVELE9BQU9ELEtBQUE7O0VBR1RFLE9BQU9sQixLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDOUIsSUFBTUQsTUFBQSxHQUFlO0lBRXJCLFNBQVNFLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlwQixLQUFBLENBQUtjLE1BQUEsSUFBVU0sQ0FBQSxHQUFJRCxPQUFBLENBQVFMLE1BQUEsRUFBUU0sQ0FBQSxJQUFLO01BQzFELElBQU1DLEVBQUEsR0FBS3JCLEtBQUEsQ0FBS29CLENBQUE7TUFDaEIsSUFBTUUsRUFBQSxHQUFLSCxPQUFBLENBQVFDLENBQUE7TUFFbkIsSUFBSUMsRUFBQSxLQUFPQyxFQUFBLEVBQUk7UUFDYjtNQUNEO01BRURKLE1BQUEsQ0FBT0ssSUFBQSxDQUFLRixFQUFFO0lBQ2Y7SUFFRCxPQUFPSCxNQUFBOztFQUdUTSxRQUFReEIsS0FBQSxFQUFZbUIsT0FBQSxFQUFhO0lBQy9CLElBQU1NLEdBQUEsR0FBTUMsSUFBQSxDQUFLRCxHQUFBLENBQUl6QixLQUFBLENBQUtjLE1BQUEsRUFBUUssT0FBQSxDQUFRTCxNQUFNO0lBRWhELFNBQVNNLENBQUEsR0FBSSxHQUFHQSxDQUFBLEdBQUlLLEdBQUEsRUFBS0wsQ0FBQSxJQUFLO01BQzVCLElBQUlwQixLQUFBLENBQUtvQixDQUFBLElBQUtELE9BQUEsQ0FBUUMsQ0FBQSxHQUFJLE9BQU87TUFDakMsSUFBSXBCLEtBQUEsQ0FBS29CLENBQUEsSUFBS0QsT0FBQSxDQUFRQyxDQUFBLEdBQUksT0FBTztJQUNsQztJQUVELE9BQU87O0VBR1RPLFVBQVUzQixLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDakMsSUFBTUMsQ0FBQSxHQUFJcEIsS0FBQSxDQUFLYyxNQUFBLEdBQVM7SUFDeEIsSUFBTWMsRUFBQSxHQUFLNUIsS0FBQSxDQUFLaUIsS0FBQSxDQUFNLEdBQUdHLENBQUM7SUFDMUIsSUFBTVMsRUFBQSxHQUFLVixPQUFBLENBQVFGLEtBQUEsQ0FBTSxHQUFHRyxDQUFDO0lBQzdCLElBQU1DLEVBQUEsR0FBS3JCLEtBQUEsQ0FBS29CLENBQUE7SUFDaEIsSUFBTUUsRUFBQSxHQUFLSCxPQUFBLENBQVFDLENBQUE7SUFDbkIsT0FBT3JILElBQUEsQ0FBSytILE1BQUEsQ0FBT0YsRUFBQSxFQUFJQyxFQUFFLEtBQUtSLEVBQUEsR0FBS0MsRUFBQTs7RUFHckNTLE9BQU8vQixLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDOUIsSUFBTUMsQ0FBQSxHQUFJcEIsS0FBQSxDQUFLYyxNQUFBO0lBQ2YsSUFBTWMsRUFBQSxHQUFLNUIsS0FBQSxDQUFLaUIsS0FBQSxDQUFNLEdBQUdHLENBQUM7SUFDMUIsSUFBTVMsRUFBQSxHQUFLVixPQUFBLENBQVFGLEtBQUEsQ0FBTSxHQUFHRyxDQUFDO0lBQzdCLE9BQU9ySCxJQUFBLENBQUsrSCxNQUFBLENBQU9GLEVBQUEsRUFBSUMsRUFBRTs7RUFHM0JHLFdBQVdoQyxLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDbEMsSUFBTUMsQ0FBQSxHQUFJcEIsS0FBQSxDQUFLYyxNQUFBLEdBQVM7SUFDeEIsSUFBTWMsRUFBQSxHQUFLNUIsS0FBQSxDQUFLaUIsS0FBQSxDQUFNLEdBQUdHLENBQUM7SUFDMUIsSUFBTVMsRUFBQSxHQUFLVixPQUFBLENBQVFGLEtBQUEsQ0FBTSxHQUFHRyxDQUFDO0lBQzdCLElBQU1DLEVBQUEsR0FBS3JCLEtBQUEsQ0FBS29CLENBQUE7SUFDaEIsSUFBTUUsRUFBQSxHQUFLSCxPQUFBLENBQVFDLENBQUE7SUFDbkIsT0FBT3JILElBQUEsQ0FBSytILE1BQUEsQ0FBT0YsRUFBQSxFQUFJQyxFQUFFLEtBQUtSLEVBQUEsR0FBS0MsRUFBQTs7RUFHckNRLE9BQU85QixLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDOUIsT0FDRW5CLEtBQUEsQ0FBS2MsTUFBQSxLQUFXSyxPQUFBLENBQVFMLE1BQUEsSUFBVWQsS0FBQSxDQUFLaUMsS0FBQSxDQUFNLENBQUNDLENBQUEsRUFBR2QsQ0FBQSxLQUFNYyxDQUFBLEtBQU1mLE9BQUEsQ0FBUUMsQ0FBQSxDQUFFOztFQUkzRWUsWUFBWW5DLEtBQUEsRUFBVTtJQUNwQixPQUFPQSxLQUFBLENBQUtBLEtBQUEsQ0FBS2MsTUFBQSxHQUFTLEtBQUs7O0VBR2pDc0IsUUFBUXBDLEtBQUEsRUFBWW1CLE9BQUEsRUFBYTtJQUMvQixPQUFPcEgsSUFBQSxDQUFLeUgsT0FBQSxDQUFReEIsS0FBQSxFQUFNbUIsT0FBTyxNQUFNOztFQUd6Q2tCLFdBQVdyQyxLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDbEMsT0FBT25CLEtBQUEsQ0FBS2MsTUFBQSxHQUFTSyxPQUFBLENBQVFMLE1BQUEsSUFBVS9HLElBQUEsQ0FBS3lILE9BQUEsQ0FBUXhCLEtBQUEsRUFBTW1CLE9BQU8sTUFBTTs7RUFHekVtQixTQUFTdEMsS0FBQSxFQUFZbUIsT0FBQSxFQUFhO0lBQ2hDLE9BQU9wSCxJQUFBLENBQUt5SCxPQUFBLENBQVF4QixLQUFBLEVBQU1tQixPQUFPLE1BQU07O0VBR3pDb0IsUUFBUXZDLEtBQUEsRUFBWW1CLE9BQUEsRUFBYTtJQUMvQixPQUNFbkIsS0FBQSxDQUFLYyxNQUFBLEtBQVdLLE9BQUEsQ0FBUUwsTUFBQSxHQUFTLEtBQUsvRyxJQUFBLENBQUt5SCxPQUFBLENBQVF4QixLQUFBLEVBQU1tQixPQUFPLE1BQU07O0VBSTFFcUIsU0FBU3hDLEtBQUEsRUFBWW1CLE9BQUEsRUFBYTtJQUNoQyxPQUFPbkIsS0FBQSxDQUFLYyxNQUFBLElBQVVLLE9BQUEsQ0FBUUwsTUFBQSxJQUFVL0csSUFBQSxDQUFLeUgsT0FBQSxDQUFReEIsS0FBQSxFQUFNbUIsT0FBTyxNQUFNOztFQUcxRXNCLGFBQWF6QyxLQUFBLEVBQVltQixPQUFBLEVBQWE7SUFDcEMsT0FBT25CLEtBQUEsQ0FBS2MsTUFBQSxHQUFTSyxPQUFBLENBQVFMLE1BQUEsSUFBVS9HLElBQUEsQ0FBS3lILE9BQUEsQ0FBUXhCLEtBQUEsRUFBTW1CLE9BQU8sTUFBTTs7RUFHekV1QixTQUFTMUMsS0FBQSxFQUFZbUIsT0FBQSxFQUFhO0lBQ2hDLE9BQ0VuQixLQUFBLENBQUtjLE1BQUEsR0FBUyxNQUFNSyxPQUFBLENBQVFMLE1BQUEsSUFBVS9HLElBQUEsQ0FBS3lILE9BQUEsQ0FBUXhCLEtBQUEsRUFBTW1CLE9BQU8sTUFBTTs7RUFJMUV3QixPQUFPQyxLQUFBLEVBQVU7SUFDZixPQUNFQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBSyxNQUNsQkEsS0FBQSxDQUFNOUIsTUFBQSxLQUFXLEtBQUssT0FBTzhCLEtBQUEsQ0FBTSxPQUFPOztFQUkvQ0csVUFBVS9DLEtBQUEsRUFBWW1CLE9BQUEsRUFBYTtJQUNqQyxJQUFJbkIsS0FBQSxDQUFLYyxNQUFBLEtBQVdLLE9BQUEsQ0FBUUwsTUFBQSxFQUFRO01BQ2xDLE9BQU87SUFDUjtJQUVELElBQU1jLEVBQUEsR0FBSzVCLEtBQUEsQ0FBS2lCLEtBQUEsQ0FBTSxHQUFHLEVBQUU7SUFDM0IsSUFBTVksRUFBQSxHQUFLVixPQUFBLENBQVFGLEtBQUEsQ0FBTSxHQUFHLEVBQUU7SUFDOUIsSUFBTStCLEVBQUEsR0FBS2hELEtBQUEsQ0FBS0EsS0FBQSxDQUFLYyxNQUFBLEdBQVM7SUFDOUIsSUFBTW1DLEVBQUEsR0FBSzlCLE9BQUEsQ0FBUUEsT0FBQSxDQUFRTCxNQUFBLEdBQVM7SUFDcEMsT0FBT2tDLEVBQUEsS0FBT0MsRUFBQSxJQUFNbEosSUFBQSxDQUFLK0gsTUFBQSxDQUFPRixFQUFBLEVBQUlDLEVBQUU7O0VBR3hDN0UsT0FBT2dELEtBQUEsRUFBMkM7SUFBQSxJQUEvQlksT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUE2QjtJQUM5QyxJQUFNO01BQUVFLE9BQUEsR0FBVTtJQUFPLElBQUdILE9BQUE7SUFDNUIsSUFBTXNDLElBQUEsR0FBZTtJQUVyQixTQUFTOUIsQ0FBQSxHQUFJLEdBQUdBLENBQUEsSUFBS3BCLEtBQUEsQ0FBS2MsTUFBQSxFQUFRTSxDQUFBLElBQUs7TUFDckM4QixJQUFBLENBQUszQixJQUFBLENBQUt2QixLQUFBLENBQUtpQixLQUFBLENBQU0sR0FBR0csQ0FBQyxDQUFDO0lBQzNCO0lBRUQsSUFBSUwsT0FBQSxFQUFTO01BQ1htQyxJQUFBLENBQUtuQyxPQUFBLENBQU87SUFDYjtJQUVELE9BQU9tQyxJQUFBOztFQUdUNUYsS0FBSzBDLEtBQUEsRUFBVTtJQUNiLElBQUlBLEtBQUEsQ0FBS2MsTUFBQSxLQUFXLEdBQUc7TUFDckIsTUFBTSxJQUFJcUMsS0FBQSxDQUFLLDRDQUFBQyxNQUFBLENBQytCcEQsS0FBQSxFQUFJLG1DQUFrQztJQUVyRjtJQUVELElBQU1xRCxLQUFBLEdBQU9yRCxLQUFBLENBQUtBLEtBQUEsQ0FBS2MsTUFBQSxHQUFTO0lBQ2hDLE9BQU9kLEtBQUEsQ0FBS2lCLEtBQUEsQ0FBTSxHQUFHLEVBQUUsRUFBRW1DLE1BQUEsQ0FBT0MsS0FBQSxHQUFPLENBQUM7O0VBRzFDQywwQkFDRUMsU0FBQSxFQUFvQjtJQU9wQixRQUFRQSxTQUFBLENBQVVDLElBQUE7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1FBQ0gsT0FBTzs7UUFFUCxPQUFPOzs7RUFJYjdGLE9BQU9xQyxLQUFBLEVBQVU7SUFDZixJQUFJQSxLQUFBLENBQUtjLE1BQUEsS0FBVyxHQUFHO01BQ3JCLE1BQU0sSUFBSXFDLEtBQUEsQ0FBSyxnREFBQUMsTUFBQSxDQUFpRHBELEtBQUEsRUFBSSxLQUFJO0lBQ3pFO0lBRUQsT0FBT0EsS0FBQSxDQUFLaUIsS0FBQSxDQUFNLEdBQUcsRUFBRTs7RUFHekI5QyxTQUFTNkIsS0FBQSxFQUFVO0lBQ2pCLElBQUlBLEtBQUEsQ0FBS2MsTUFBQSxLQUFXLEdBQUc7TUFDckIsTUFBTSxJQUFJcUMsS0FBQSxDQUFLLGdEQUFBQyxNQUFBLENBQ21DcEQsS0FBQSxFQUFJLHVDQUFzQztJQUU3RjtJQUVELElBQU1xRCxLQUFBLEdBQU9yRCxLQUFBLENBQUtBLEtBQUEsQ0FBS2MsTUFBQSxHQUFTO0lBRWhDLElBQUl1QyxLQUFBLElBQVEsR0FBRztNQUNiLE1BQU0sSUFBSUYsS0FBQSxDQUFLLHVEQUFBQyxNQUFBLENBQzBDcEQsS0FBQSxFQUFJLGlEQUFnRDtJQUU5RztJQUVELE9BQU9BLEtBQUEsQ0FBS2lCLEtBQUEsQ0FBTSxHQUFHLEVBQUUsRUFBRW1DLE1BQUEsQ0FBT0MsS0FBQSxHQUFPLENBQUM7O0VBRzFDSSxTQUFTekQsS0FBQSxFQUFZMEQsUUFBQSxFQUFjO0lBQ2pDLElBQUksQ0FBQzNKLElBQUEsQ0FBS3NJLFVBQUEsQ0FBV3FCLFFBQUEsRUFBVTFELEtBQUksS0FBSyxDQUFDakcsSUFBQSxDQUFLK0gsTUFBQSxDQUFPOUIsS0FBQSxFQUFNMEQsUUFBUSxHQUFHO01BQ3BFLE1BQU0sSUFBSVAsS0FBQSxDQUFLLG9DQUFBQyxNQUFBLENBQ3VCcEQsS0FBQSxFQUFJLHVCQUFBb0QsTUFBQSxDQUFzQk0sUUFBQSxFQUFRLG1EQUFrRDtJQUUzSDtJQUVELE9BQU8xRCxLQUFBLENBQUtpQixLQUFBLENBQU15QyxRQUFBLENBQVM1QyxNQUFNOztFQUduQ25CLFVBQ0VLLEtBQUEsRUFDQXVELFNBQUEsRUFDa0M7SUFBQSxJQUFsQzNDLE9BQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBZ0M7SUFFaEMsSUFBSSxDQUFDYixLQUFBLEVBQU0sT0FBTztJQUdsQixJQUFNMkQsQ0FBQSxHQUFJLENBQUMsR0FBRzNELEtBQUk7SUFDbEIsSUFBTTtNQUFFRCxRQUFBLEdBQVc7SUFBVyxJQUFHYSxPQUFBO0lBR2pDLElBQUlaLEtBQUEsQ0FBS2MsTUFBQSxLQUFXLEdBQUc7TUFDckIsT0FBTzZDLENBQUE7SUFDUjtJQUVELFFBQVFKLFNBQUEsQ0FBVUMsSUFBQTtXQUNYO1FBQWU7VUFDbEIsSUFBTTtZQUFFNUYsSUFBQSxFQUFNaUM7VUFBSSxJQUFHMEQsU0FBQTtVQUVyQixJQUNFeEosSUFBQSxDQUFLK0gsTUFBQSxDQUFPakMsRUFBQSxFQUFJOEQsQ0FBQyxLQUNqQjVKLElBQUEsQ0FBS2lJLFVBQUEsQ0FBV25DLEVBQUEsRUFBSThELENBQUMsS0FDckI1SixJQUFBLENBQUtzSSxVQUFBLENBQVd4QyxFQUFBLEVBQUk4RCxDQUFDLEdBQ3JCO1lBQ0FBLENBQUEsQ0FBRTlELEVBQUEsQ0FBR2lCLE1BQUEsR0FBUyxNQUFNO1VBQ3JCO1VBRUQ7UUFDRDtXQUVJO1FBQWU7VUFDbEIsSUFBTTtZQUFFbEQsSUFBQSxFQUFNZ0c7VUFBSSxJQUFHTCxTQUFBO1VBRXJCLElBQUl4SixJQUFBLENBQUsrSCxNQUFBLENBQU84QixHQUFBLEVBQUlELENBQUMsS0FBSzVKLElBQUEsQ0FBS3NJLFVBQUEsQ0FBV3VCLEdBQUEsRUFBSUQsQ0FBQyxHQUFHO1lBQ2hELE9BQU87cUJBQ0U1SixJQUFBLENBQUtpSSxVQUFBLENBQVc0QixHQUFBLEVBQUlELENBQUMsR0FBRztZQUNqQ0EsQ0FBQSxDQUFFQyxHQUFBLENBQUc5QyxNQUFBLEdBQVMsTUFBTTtVQUNyQjtVQUVEO1FBQ0Q7V0FFSTtRQUFjO1VBQ2pCLElBQU07WUFBRWxELElBQUEsRUFBTWlHLElBQUE7WUFBSUM7VUFBUSxJQUFLUCxTQUFBO1VBRS9CLElBQUl4SixJQUFBLENBQUsrSCxNQUFBLENBQU8rQixJQUFBLEVBQUlGLENBQUMsS0FBSzVKLElBQUEsQ0FBS2lJLFVBQUEsQ0FBVzZCLElBQUEsRUFBSUYsQ0FBQyxHQUFHO1lBQ2hEQSxDQUFBLENBQUVFLElBQUEsQ0FBRy9DLE1BQUEsR0FBUyxNQUFNO3FCQUNYL0csSUFBQSxDQUFLc0ksVUFBQSxDQUFXd0IsSUFBQSxFQUFJRixDQUFDLEdBQUc7WUFDakNBLENBQUEsQ0FBRUUsSUFBQSxDQUFHL0MsTUFBQSxHQUFTLE1BQU07WUFDcEI2QyxDQUFBLENBQUVFLElBQUEsQ0FBRy9DLE1BQUEsS0FBV2dELFFBQUE7VUFDakI7VUFFRDtRQUNEO1dBRUk7UUFBYztVQUNqQixJQUFNO1lBQUVsRyxJQUFBLEVBQU1tRyxJQUFBO1lBQUlELFFBQUEsRUFBQUU7VUFBUSxJQUFLVCxTQUFBO1VBRS9CLElBQUl4SixJQUFBLENBQUsrSCxNQUFBLENBQU9pQyxJQUFBLEVBQUlKLENBQUMsR0FBRztZQUN0QixJQUFJNUQsUUFBQSxLQUFhLFdBQVc7Y0FDMUI0RCxDQUFBLENBQUVBLENBQUEsQ0FBRTdDLE1BQUEsR0FBUyxNQUFNO1lBQ3BCLFdBQVVmLFFBQUEsS0FBYSxZQUFZLE1BRTdCO2NBQ0wsT0FBTztZQUNSO3FCQUNRaEcsSUFBQSxDQUFLaUksVUFBQSxDQUFXK0IsSUFBQSxFQUFJSixDQUFDLEdBQUc7WUFDakNBLENBQUEsQ0FBRUksSUFBQSxDQUFHakQsTUFBQSxHQUFTLE1BQU07VUFDckIsV0FBVS9HLElBQUEsQ0FBS3NJLFVBQUEsQ0FBVzBCLElBQUEsRUFBSUosQ0FBQyxLQUFLM0QsS0FBQSxDQUFLK0QsSUFBQSxDQUFHakQsTUFBQSxLQUFXa0QsU0FBQSxFQUFVO1lBQ2hFTCxDQUFBLENBQUVJLElBQUEsQ0FBR2pELE1BQUEsR0FBUyxNQUFNO1lBQ3BCNkMsQ0FBQSxDQUFFSSxJQUFBLENBQUdqRCxNQUFBLEtBQVdrRCxTQUFBO1VBQ2pCO1VBRUQ7UUFDRDtXQUVJO1FBQWE7VUFDaEIsSUFBTTtZQUFFcEcsSUFBQSxFQUFNcUcsSUFBQTtZQUFJQyxPQUFBLEVBQVNDO1VBQUcsSUFBS1osU0FBQTtVQUduQyxJQUFJeEosSUFBQSxDQUFLK0gsTUFBQSxDQUFPbUMsSUFBQSxFQUFJRSxHQUFHLEdBQUc7WUFDeEIsT0FBT1IsQ0FBQTtVQUNSO1VBRUQsSUFBSTVKLElBQUEsQ0FBS3NJLFVBQUEsQ0FBVzRCLElBQUEsRUFBSU4sQ0FBQyxLQUFLNUosSUFBQSxDQUFLK0gsTUFBQSxDQUFPbUMsSUFBQSxFQUFJTixDQUFDLEdBQUc7WUFDaEQsSUFBTVMsSUFBQSxHQUFPRCxHQUFBLENBQUlsRCxLQUFBLENBQUs7WUFFdEIsSUFBSWxILElBQUEsQ0FBS2lJLFVBQUEsQ0FBV2lDLElBQUEsRUFBSUUsR0FBRyxLQUFLRixJQUFBLENBQUduRCxNQUFBLEdBQVNxRCxHQUFBLENBQUlyRCxNQUFBLEVBQVE7Y0FDdERzRCxJQUFBLENBQUtILElBQUEsQ0FBR25ELE1BQUEsR0FBUyxNQUFNO1lBQ3hCO1lBRUQsT0FBT3NELElBQUEsQ0FBS2hCLE1BQUEsQ0FBT08sQ0FBQSxDQUFFMUMsS0FBQSxDQUFNZ0QsSUFBQSxDQUFHbkQsTUFBTSxDQUFDO1VBQ3RDLFdBQ0MvRyxJQUFBLENBQUtnSixTQUFBLENBQVVrQixJQUFBLEVBQUlFLEdBQUcsTUFDckJwSyxJQUFBLENBQUtzSSxVQUFBLENBQVc4QixHQUFBLEVBQUtSLENBQUMsS0FBSzVKLElBQUEsQ0FBSytILE1BQUEsQ0FBT3FDLEdBQUEsRUFBS1IsQ0FBQyxJQUM5QztZQUNBLElBQUk1SixJQUFBLENBQUtpSSxVQUFBLENBQVdpQyxJQUFBLEVBQUlOLENBQUMsR0FBRztjQUMxQkEsQ0FBQSxDQUFFTSxJQUFBLENBQUduRCxNQUFBLEdBQVMsTUFBTTtZQUNyQixPQUFNO2NBQ0w2QyxDQUFBLENBQUVNLElBQUEsQ0FBR25ELE1BQUEsR0FBUyxNQUFNO1lBQ3JCO1VBQ0YsV0FDQy9HLElBQUEsQ0FBS2lJLFVBQUEsQ0FBV21DLEdBQUEsRUFBS1IsQ0FBQyxLQUN0QjVKLElBQUEsQ0FBSytILE1BQUEsQ0FBT3FDLEdBQUEsRUFBS1IsQ0FBQyxLQUNsQjVKLElBQUEsQ0FBS3NJLFVBQUEsQ0FBVzhCLEdBQUEsRUFBS1IsQ0FBQyxHQUN0QjtZQUNBLElBQUk1SixJQUFBLENBQUtpSSxVQUFBLENBQVdpQyxJQUFBLEVBQUlOLENBQUMsR0FBRztjQUMxQkEsQ0FBQSxDQUFFTSxJQUFBLENBQUduRCxNQUFBLEdBQVMsTUFBTTtZQUNyQjtZQUVENkMsQ0FBQSxDQUFFUSxHQUFBLENBQUlyRCxNQUFBLEdBQVMsTUFBTTtxQkFDWi9HLElBQUEsQ0FBS2lJLFVBQUEsQ0FBV2lDLElBQUEsRUFBSU4sQ0FBQyxHQUFHO1lBQ2pDLElBQUk1SixJQUFBLENBQUsrSCxNQUFBLENBQU9xQyxHQUFBLEVBQUtSLENBQUMsR0FBRztjQUN2QkEsQ0FBQSxDQUFFUSxHQUFBLENBQUlyRCxNQUFBLEdBQVMsTUFBTTtZQUN0QjtZQUVENkMsQ0FBQSxDQUFFTSxJQUFBLENBQUduRCxNQUFBLEdBQVMsTUFBTTtVQUNyQjtVQUVEO1FBQ0Q7O0lBR0gsT0FBTzZDLENBQUE7RUFDVDs7QUNuZ0JhLFNBQVNVLFFBQVFDLENBQUEsRUFBRztFQUNqQzs7RUFFQSxPQUFPRCxPQUFBLEdBQVUsY0FBYyxPQUFPRSxNQUFBLElBQVUsWUFBWSxPQUFPQSxNQUFBLENBQU9DLFFBQUEsR0FBVyxVQUFVQyxFQUFBLEVBQUc7SUFDaEcsT0FBTyxPQUFPQSxFQUFBO0VBQ2xCLElBQU0sVUFBVUEsRUFBQSxFQUFHO0lBQ2YsT0FBT0EsRUFBQSxJQUFLLGNBQWMsT0FBT0YsTUFBQSxJQUFVRSxFQUFBLENBQUVDLFdBQUEsS0FBZ0JILE1BQUEsSUFBVUUsRUFBQSxLQUFNRixNQUFBLENBQU9JLFNBQUEsR0FBWSxXQUFXLE9BQU9GLEVBQUE7RUFDdEgsR0FBS0osT0FBQSxDQUFRQyxDQUFDO0FBQ2Q7QUNQZSxTQUFTTSxhQUFhQyxLQUFBLEVBQU9DLElBQUEsRUFBTTtFQUNoRCxJQUFJVCxPQUFBLENBQVFRLEtBQUssTUFBTSxZQUFZQSxLQUFBLEtBQVUsTUFBTSxPQUFPQSxLQUFBO0VBQzFELElBQUlFLElBQUEsR0FBT0YsS0FBQSxDQUFNTixNQUFBLENBQU9TLFdBQUE7RUFDeEIsSUFBSUQsSUFBQSxLQUFTLFFBQVc7SUFDdEIsSUFBSUUsR0FBQSxHQUFNRixJQUFBLENBQUtHLElBQUEsQ0FBS0wsS0FBQSxFQUFPQyxJQUFBLElBQVEsU0FBUztJQUM1QyxJQUFJVCxPQUFBLENBQVFZLEdBQUcsTUFBTSxVQUFVLE9BQU9BLEdBQUE7SUFDdEMsTUFBTSxJQUFJRSxTQUFBLENBQVUsOENBQThDO0VBQ3RFO0VBQ0UsUUFBUUwsSUFBQSxLQUFTLFdBQVdNLE1BQUEsR0FBU0MsTUFBQSxFQUFRUixLQUFLO0FBQ3BEO0FDUmUsU0FBU1MsZUFBZUMsR0FBQSxFQUFLO0VBQzFDLElBQUlDLEdBQUEsR0FBTVosWUFBQSxDQUFZVyxHQUFBLEVBQUssUUFBUTtFQUNuQyxPQUFPbEIsT0FBQSxDQUFRbUIsR0FBRyxNQUFNLFdBQVdBLEdBQUEsR0FBTUosTUFBQSxDQUFPSSxHQUFHO0FBQ3JEO0FDSmUsU0FBU0MsZ0JBQWdCQyxHQUFBLEVBQUtGLEdBQUEsRUFBSzVDLEtBQUEsRUFBTztFQUN2RDRDLEdBQUEsR0FBTUYsY0FBQSxDQUFjRSxHQUFHO0VBQ3ZCLElBQUlBLEdBQUEsSUFBT0UsR0FBQSxFQUFLO0lBQ2RDLE1BQUEsQ0FBT0MsY0FBQSxDQUFlRixHQUFBLEVBQUtGLEdBQUEsRUFBSztNQUM5QjVDLEtBQUE7TUFDQWlELFVBQUEsRUFBWTtNQUNaQyxZQUFBLEVBQWM7TUFDZEMsUUFBQSxFQUFVO0lBQ2hCLENBQUs7RUFDTCxPQUFTO0lBQ0xMLEdBQUEsQ0FBSUYsR0FBQSxJQUFPNUMsS0FBQTtFQUNmO0VBQ0UsT0FBTzhDLEdBQUE7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1VBLElBQU1NLFlBQUEsR0FBZUEsQ0FBQ0MsTUFBQSxFQUFnQkMsU0FBQSxFQUFzQnJHLEVBQUEsS0FBaUI7RUFDM0UsUUFBUUEsRUFBQSxDQUFHMkQsSUFBQTtTQUNKO01BQWU7UUFDbEIsSUFBTTtVQUFFNUYsSUFBQSxFQUFBb0MsS0FBQTtVQUFNekMsSUFBQSxFQUFBNEk7UUFBTSxJQUFHdEcsRUFBQTtRQUN2QixJQUFNdUcsT0FBQSxHQUFTdk0sSUFBQSxDQUFLOEQsTUFBQSxDQUFPc0ksTUFBQSxFQUFRakcsS0FBSTtRQUN2QyxJQUFNcUcsS0FBQSxHQUFRckcsS0FBQSxDQUFLQSxLQUFBLENBQUtjLE1BQUEsR0FBUztRQUVqQyxJQUFJdUYsS0FBQSxHQUFRRCxPQUFBLENBQU9FLFFBQUEsQ0FBU3hGLE1BQUEsRUFBUTtVQUNsQyxNQUFNLElBQUlxQyxLQUFBLENBQUssb0RBQUFDLE1BQUEsQ0FDdUNwRCxLQUFBLEVBQUkseURBQXdEO1FBRW5IO1FBRURvRyxPQUFBLENBQU9FLFFBQUEsQ0FBU0MsTUFBQSxDQUFPRixLQUFBLEVBQU8sR0FBR0YsS0FBSTtRQUVyQyxJQUFJRCxTQUFBLEVBQVc7VUFDYixTQUFXLENBQUNoRyxNQUFBLEVBQU9zRixHQUFHLEtBQUtyTCxLQUFBLENBQU1xTSxNQUFBLENBQU9OLFNBQVMsR0FBRztZQUNsREEsU0FBQSxDQUFVVixHQUFBLElBQU92TCxLQUFBLENBQU0wRixTQUFBLENBQVVPLE1BQUEsRUFBT0wsRUFBRTtVQUMzQztRQUNGO1FBRUQ7TUFDRDtTQUVJO01BQWU7UUFDbEIsSUFBTTtVQUFFakMsSUFBQSxFQUFBNkksS0FBQTtVQUFNQyxNQUFBO1VBQVFDO1FBQUksSUFBSzlHLEVBQUE7UUFDL0IsSUFBSThHLElBQUEsQ0FBSzdGLE1BQUEsS0FBVyxHQUFHO1FBQ3ZCLElBQU04RixLQUFBLEdBQU8vTSxJQUFBLENBQUtrRCxJQUFBLENBQUtrSixNQUFBLEVBQVFRLEtBQUk7UUFDbkMsSUFBTUksT0FBQSxHQUFTRCxLQUFBLENBQUtELElBQUEsQ0FBSzFGLEtBQUEsQ0FBTSxHQUFHeUYsTUFBTTtRQUN4QyxJQUFNSSxNQUFBLEdBQVFGLEtBQUEsQ0FBS0QsSUFBQSxDQUFLMUYsS0FBQSxDQUFNeUYsTUFBTTtRQUNwQ0UsS0FBQSxDQUFLRCxJQUFBLEdBQU9FLE9BQUEsR0FBU0YsSUFBQSxHQUFPRyxNQUFBO1FBRTVCLElBQUlaLFNBQUEsRUFBVztVQUNiLFNBQVcsQ0FBQ2EsTUFBQSxFQUFPQyxJQUFHLEtBQUs3TSxLQUFBLENBQU1xTSxNQUFBLENBQU9OLFNBQVMsR0FBRztZQUNsREEsU0FBQSxDQUFVYyxJQUFBLElBQU8vTSxLQUFBLENBQU0wRixTQUFBLENBQVVvSCxNQUFBLEVBQU9sSCxFQUFFO1VBQzNDO1FBQ0Y7UUFFRDtNQUNEO1NBRUk7TUFBYztRQUNqQixJQUFNO1VBQUVqQyxJQUFBLEVBQUFxSjtRQUFNLElBQUdwSCxFQUFBO1FBQ2pCLElBQU1xSCxNQUFBLEdBQU9yTixJQUFBLENBQUtzTixHQUFBLENBQUlsQixNQUFBLEVBQVFnQixNQUFJO1FBQ2xDLElBQU1HLFFBQUEsR0FBV3JOLElBQUEsQ0FBS29FLFFBQUEsQ0FBUzhJLE1BQUk7UUFDbkMsSUFBTUksSUFBQSxHQUFPeE4sSUFBQSxDQUFLc04sR0FBQSxDQUFJbEIsTUFBQSxFQUFRbUIsUUFBUTtRQUN0QyxJQUFNRSxPQUFBLEdBQVN6TixJQUFBLENBQUs4RCxNQUFBLENBQU9zSSxNQUFBLEVBQVFnQixNQUFJO1FBQ3ZDLElBQU1NLE1BQUEsR0FBUU4sTUFBQSxDQUFLQSxNQUFBLENBQUtuRyxNQUFBLEdBQVM7UUFFakMsSUFBSXZHLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT04sTUFBSSxLQUFLM00sSUFBQSxDQUFLaU4sTUFBQSxDQUFPSCxJQUFJLEdBQUc7VUFDMUNBLElBQUEsQ0FBS1YsSUFBQSxJQUFRTyxNQUFBLENBQUtQLElBQUE7UUFDbkIsV0FBVSxDQUFDcE0sSUFBQSxDQUFLaU4sTUFBQSxDQUFPTixNQUFJLEtBQUssQ0FBQzNNLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT0gsSUFBSSxHQUFHO1VBQ25EQSxJQUFBLENBQUtmLFFBQUEsQ0FBUy9FLElBQUEsQ0FBSyxHQUFHMkYsTUFBQSxDQUFLWixRQUFRO1FBQ3BDLE9BQU07VUFDTCxNQUFNLElBQUluRCxLQUFBLENBQUssa0RBQUFDLE1BQUEsQ0FDcUM2RCxNQUFBLEVBQUksd0NBQUE3RCxNQUFBLENBQXVDL0ksUUFBQSxDQUFTb04sU0FBQSxDQUNwR1AsTUFBSSxHQUNMLEtBQUE5RCxNQUFBLENBQUkvSSxRQUFBLENBQVNvTixTQUFBLENBQVVKLElBQUksQ0FBQyxDQUFFO1FBRWxDO1FBRURDLE9BQUEsQ0FBT2hCLFFBQUEsQ0FBU0MsTUFBQSxDQUFPZ0IsTUFBQSxFQUFPLENBQUM7UUFFL0IsSUFBSXJCLFNBQUEsRUFBVztVQUNiLFNBQVcsQ0FBQ3dCLE9BQUEsRUFBT0MsS0FBRyxLQUFLeE4sS0FBQSxDQUFNcU0sTUFBQSxDQUFPTixTQUFTLEdBQUc7WUFDbERBLFNBQUEsQ0FBVXlCLEtBQUEsSUFBTzFOLEtBQUEsQ0FBTTBGLFNBQUEsQ0FBVStILE9BQUEsRUFBTzdILEVBQUU7VUFDM0M7UUFDRjtRQUVEO01BQ0Q7U0FFSTtNQUFhO1FBQ2hCLElBQU07VUFBRWpDLElBQUEsRUFBQWdLLE1BQUE7VUFBTTFEO1FBQVMsSUFBR3JFLEVBQUE7UUFFMUIsSUFBSTlGLElBQUEsQ0FBS3NJLFVBQUEsQ0FBV3VGLE1BQUEsRUFBTTFELE9BQU8sR0FBRztVQUNsQyxNQUFNLElBQUlmLEtBQUEsQ0FBSyx1QkFBQUMsTUFBQSxDQUNVd0UsTUFBQSxFQUFJLG1CQUFBeEUsTUFBQSxDQUFrQmMsT0FBQSxFQUFPLDhDQUE2QztRQUVwRztRQUVELElBQU0yRCxNQUFBLEdBQU9oTyxJQUFBLENBQUtzTixHQUFBLENBQUlsQixNQUFBLEVBQVEyQixNQUFJO1FBQ2xDLElBQU1FLFFBQUEsR0FBU2pPLElBQUEsQ0FBSzhELE1BQUEsQ0FBT3NJLE1BQUEsRUFBUTJCLE1BQUk7UUFDdkMsSUFBTUcsT0FBQSxHQUFRSCxNQUFBLENBQUtBLE1BQUEsQ0FBSzlHLE1BQUEsR0FBUztRQVFqQ2dILFFBQUEsQ0FBT3hCLFFBQUEsQ0FBU0MsTUFBQSxDQUFPd0IsT0FBQSxFQUFPLENBQUM7UUFDL0IsSUFBTUMsUUFBQSxHQUFXak8sSUFBQSxDQUFLNEYsU0FBQSxDQUFVaUksTUFBQSxFQUFNL0gsRUFBRTtRQUN4QyxJQUFNb0ksU0FBQSxHQUFZcE8sSUFBQSxDQUFLc04sR0FBQSxDQUFJbEIsTUFBQSxFQUFRbE0sSUFBQSxDQUFLNEQsTUFBQSxDQUFPcUssUUFBUSxDQUFDO1FBQ3hELElBQU1FLFFBQUEsR0FBV0YsUUFBQSxDQUFTQSxRQUFBLENBQVNsSCxNQUFBLEdBQVM7UUFFNUNtSCxTQUFBLENBQVUzQixRQUFBLENBQVNDLE1BQUEsQ0FBTzJCLFFBQUEsRUFBVSxHQUFHTCxNQUFJO1FBRTNDLElBQUkzQixTQUFBLEVBQVc7VUFDYixTQUFXLENBQUNpQyxPQUFBLEVBQU9DLEtBQUcsS0FBS2pPLEtBQUEsQ0FBTXFNLE1BQUEsQ0FBT04sU0FBUyxHQUFHO1lBQ2xEQSxTQUFBLENBQVVrQyxLQUFBLElBQU9uTyxLQUFBLENBQU0wRixTQUFBLENBQVV3SSxPQUFBLEVBQU90SSxFQUFFO1VBQzNDO1FBQ0Y7UUFFRDtNQUNEO1NBRUk7TUFBZTtRQUNsQixJQUFNO1VBQUVqQyxJQUFBLEVBQUF5SztRQUFNLElBQUd4SSxFQUFBO1FBQ2pCLElBQU15SSxPQUFBLEdBQVFELE1BQUEsQ0FBS0EsTUFBQSxDQUFLdkgsTUFBQSxHQUFTO1FBQ2pDLElBQU15SCxRQUFBLEdBQVMxTyxJQUFBLENBQUs4RCxNQUFBLENBQU9zSSxNQUFBLEVBQVFvQyxNQUFJO1FBQ3ZDRSxRQUFBLENBQU9qQyxRQUFBLENBQVNDLE1BQUEsQ0FBTytCLE9BQUEsRUFBTyxDQUFDO1FBSS9CLElBQUlwQyxTQUFBLEVBQVc7VUFDYixTQUFXLENBQUNzQyxPQUFBLEVBQU9DLEtBQUcsS0FBS3RPLEtBQUEsQ0FBTXFNLE1BQUEsQ0FBT04sU0FBUyxHQUFHO1lBQ2xELElBQU13QyxNQUFBLEdBQVN6TyxLQUFBLENBQU0wRixTQUFBLENBQVU2SSxPQUFBLEVBQU8zSSxFQUFFO1lBRXhDLElBQUlxRyxTQUFBLElBQWEsUUFBUXdDLE1BQUEsSUFBVSxNQUFNO2NBQ3ZDeEMsU0FBQSxDQUFVdUMsS0FBQSxJQUFPQyxNQUFBO1lBQ2xCLE9BQU07Y0FDTCxJQUFJQyxLQUFBLEdBQWlDO2NBQ3JDLElBQUlDLEtBQUEsR0FBaUM7Y0FFckMsU0FBVyxDQUFDMUcsQ0FBQSxFQUFHeUIsQ0FBQyxLQUFLOUosSUFBQSxDQUFLZ1AsS0FBQSxDQUFNNUMsTUFBTSxHQUFHO2dCQUN2QyxJQUFJbE0sSUFBQSxDQUFLeUgsT0FBQSxDQUFRbUMsQ0FBQSxFQUFHMEUsTUFBSSxNQUFNLElBQUk7a0JBQ2hDTSxLQUFBLEdBQU8sQ0FBQ3pHLENBQUEsRUFBR3lCLENBQUM7Z0JBQ2IsT0FBTTtrQkFDTGlGLEtBQUEsR0FBTyxDQUFDMUcsQ0FBQSxFQUFHeUIsQ0FBQztrQkFDWjtnQkFDRDtjQUNGO2NBRUQsSUFBSW1GLFVBQUEsR0FBYTtjQUNqQixJQUFJSCxLQUFBLElBQVFDLEtBQUEsRUFBTTtnQkFDaEIsSUFBSTdPLElBQUEsQ0FBSytILE1BQUEsQ0FBTzhHLEtBQUEsQ0FBSyxJQUFJUCxNQUFJLEdBQUc7a0JBQzlCUyxVQUFBLEdBQWEsQ0FBQy9PLElBQUEsQ0FBS29JLFdBQUEsQ0FBWXlHLEtBQUEsQ0FBSyxFQUFFO2dCQUN2QyxPQUFNO2tCQUNMRSxVQUFBLEdBQ0UvTyxJQUFBLENBQUttSCxNQUFBLENBQU95SCxLQUFBLENBQUssSUFBSU4sTUFBSSxFQUFFdkgsTUFBQSxHQUMzQi9HLElBQUEsQ0FBS21ILE1BQUEsQ0FBTzBILEtBQUEsQ0FBSyxJQUFJUCxNQUFJLEVBQUV2SCxNQUFBO2dCQUM5QjtjQUNGO2NBRUQsSUFBSTZILEtBQUEsSUFBUSxDQUFDRyxVQUFBLEVBQVk7Z0JBQ3ZCTixPQUFBLENBQU01SyxJQUFBLEdBQU8rSyxLQUFBLENBQUs7Z0JBQ2xCSCxPQUFBLENBQU05QixNQUFBLEdBQVNpQyxLQUFBLENBQUssR0FBR2hDLElBQUEsQ0FBSzdGLE1BQUE7eUJBQ25COEgsS0FBQSxFQUFNO2dCQUNmSixPQUFBLENBQU01SyxJQUFBLEdBQU9nTCxLQUFBLENBQUs7Z0JBQ2xCSixPQUFBLENBQU05QixNQUFBLEdBQVM7Y0FDaEIsT0FBTTtnQkFDTFIsU0FBQSxHQUFZO2NBQ2I7WUFDRjtVQUNGO1FBQ0Y7UUFFRDtNQUNEO1NBRUk7TUFBZTtRQUNsQixJQUFNO1VBQUV0SSxJQUFBLEVBQUFtTCxNQUFBO1VBQU1yQyxNQUFBLEVBQUFzQyxPQUFBO1VBQVFyQyxJQUFBLEVBQUFzQztRQUFJLElBQUtwSixFQUFBO1FBQy9CLElBQUlvSixLQUFBLENBQUtuSSxNQUFBLEtBQVcsR0FBRztRQUN2QixJQUFNb0ksTUFBQSxHQUFPclAsSUFBQSxDQUFLa0QsSUFBQSxDQUFLa0osTUFBQSxFQUFROEMsTUFBSTtRQUNuQyxJQUFNSSxPQUFBLEdBQVNELE1BQUEsQ0FBS3ZDLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTSxHQUFHK0gsT0FBTTtRQUN4QyxJQUFNSSxNQUFBLEdBQVFGLE1BQUEsQ0FBS3ZDLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTStILE9BQUEsR0FBU0MsS0FBQSxDQUFLbkksTUFBTTtRQUNsRG9JLE1BQUEsQ0FBS3ZDLElBQUEsR0FBT3dDLE9BQUEsR0FBU0MsTUFBQTtRQUVyQixJQUFJbEQsU0FBQSxFQUFXO1VBQ2IsU0FBVyxDQUFDbUQsT0FBQSxFQUFPQyxLQUFHLEtBQUtuUCxLQUFBLENBQU1xTSxNQUFBLENBQU9OLFNBQVMsR0FBRztZQUNsREEsU0FBQSxDQUFVb0QsS0FBQSxJQUFPclAsS0FBQSxDQUFNMEYsU0FBQSxDQUFVMEosT0FBQSxFQUFPeEosRUFBRTtVQUMzQztRQUNGO1FBRUQ7TUFDRDtTQUVJO01BQVk7UUFDZixJQUFNO1VBQUVqQyxJQUFBLEVBQUEyTCxNQUFBO1VBQU1DLFVBQUE7VUFBWUM7UUFBYSxJQUFLNUosRUFBQTtRQUU1QyxJQUFJMEosTUFBQSxDQUFLekksTUFBQSxLQUFXLEdBQUc7VUFDckIsTUFBTSxJQUFJcUMsS0FBQSxDQUFLLHlDQUEwQztRQUMxRDtRQUVELElBQU11RyxNQUFBLEdBQU83UCxJQUFBLENBQUtzTixHQUFBLENBQUlsQixNQUFBLEVBQVFzRCxNQUFJO1FBRWxDLFNBQVdJLEtBQUEsSUFBT0YsYUFBQSxFQUFlO1VBQy9CLElBQUlFLEtBQUEsS0FBUSxjQUFjQSxLQUFBLEtBQVEsUUFBUTtZQUN4QyxNQUFNLElBQUl4RyxLQUFBLENBQUssbUJBQUFDLE1BQUEsQ0FBb0J1RyxLQUFBLEVBQUcsdUJBQXNCO1VBQzdEO1VBRUQsSUFBTS9HLEtBQUEsR0FBUTZHLGFBQUEsQ0FBMEJFLEtBQUE7VUFFeEMsSUFBSS9HLEtBQUEsSUFBUyxNQUFNO1lBQ2pCLE9BQU84RyxNQUFBLENBQWlCQyxLQUFBO1VBQ3pCLE9BQU07WUFDTEQsTUFBQSxDQUFpQkMsS0FBQSxJQUFPL0csS0FBQTtVQUN6QjtRQUNGO1FBR0QsU0FBV2dILEtBQUEsSUFBT0osVUFBQSxFQUFZO1VBQzVCLElBQUksQ0FBQ0MsYUFBQSxDQUFjSSxjQUFBLENBQWVELEtBQUcsR0FBRztZQUN0QyxPQUFPRixNQUFBLENBQWlCRSxLQUFBO1VBQ3pCO1FBQ0Y7UUFFRDtNQUNEO1NBRUk7TUFBaUI7UUFDcEIsSUFBTTtVQUFFSCxhQUFBLEVBQUFLO1FBQWUsSUFBR2pLLEVBQUE7UUFFMUIsSUFBSWlLLGNBQUEsSUFBaUIsTUFBTTtVQUN6QjVELFNBQUEsR0FBWTRELGNBQUE7UUFDYixPQUFNO1VBQ0wsSUFBSTVELFNBQUEsSUFBYSxNQUFNO1lBQ3JCLElBQUksQ0FBQy9MLEtBQUEsQ0FBTTRQLE9BQUEsQ0FBUUQsY0FBYSxHQUFHO2NBQ2pDLE1BQU0sSUFBSTNHLEtBQUEsQ0FBSyxtRUFBQUMsTUFBQSxDQUNzRC9JLFFBQUEsQ0FBU29OLFNBQUEsQ0FDMUVxQyxjQUFhLEdBQ2QsdUNBQXNDO1lBRTFDO1lBRUQ1RCxTQUFBLEdBQVM4RCxlQUFBLENBQVEsSUFBQUYsY0FBYTtVQUMvQjtVQUVELFNBQVdHLEtBQUEsSUFBT0gsY0FBQSxFQUFlO1lBQy9CLElBQU1JLE1BQUEsR0FBUUosY0FBQSxDQUEyQkcsS0FBQTtZQUV6QyxJQUFJQyxNQUFBLElBQVMsTUFBTTtjQUNqQixJQUFJRCxLQUFBLEtBQVEsWUFBWUEsS0FBQSxLQUFRLFNBQVM7Z0JBQ3ZDLE1BQU0sSUFBSTlHLEtBQUEsQ0FBSyxzQkFBQUMsTUFBQSxDQUF1QjZHLEtBQUEsRUFBRyx1QkFBc0I7Y0FDaEU7Y0FFRCxPQUFPL0QsU0FBQSxDQUF1QitELEtBQUE7WUFDL0IsT0FBTTtjQUNML0QsU0FBQSxDQUF1QitELEtBQUEsSUFBT0MsTUFBQTtZQUMvQjtVQUNGO1FBQ0Y7UUFFRDtNQUNEO1NBRUk7TUFBYztRQUNqQixJQUFNO1VBQUV0TSxJQUFBLEVBQUF1TSxNQUFBO1VBQU1yRyxRQUFBO1VBQVUwRixVQUFBLEVBQUFZO1FBQVUsSUFBS3ZLLEVBQUE7UUFFdkMsSUFBSXNLLE1BQUEsQ0FBS3JKLE1BQUEsS0FBVyxHQUFHO1VBQ3JCLE1BQU0sSUFBSXFDLEtBQUEsQ0FBSyxrREFBQUMsTUFBQSxDQUNxQytHLE1BQUEsRUFBSSwyQ0FBMEM7UUFFbkc7UUFFRCxJQUFNRSxNQUFBLEdBQU94USxJQUFBLENBQUtzTixHQUFBLENBQUlsQixNQUFBLEVBQVFrRSxNQUFJO1FBQ2xDLElBQU1HLFFBQUEsR0FBU3pRLElBQUEsQ0FBSzhELE1BQUEsQ0FBT3NJLE1BQUEsRUFBUWtFLE1BQUk7UUFDdkMsSUFBTUksT0FBQSxHQUFRSixNQUFBLENBQUtBLE1BQUEsQ0FBS3JKLE1BQUEsR0FBUztRQUNqQyxJQUFJMEosT0FBQTtRQUVKLElBQUlqUSxJQUFBLENBQUtpTixNQUFBLENBQU82QyxNQUFJLEdBQUc7VUFDckIsSUFBTUksUUFBQSxHQUFTSixNQUFBLENBQUsxRCxJQUFBLENBQUsxRixLQUFBLENBQU0sR0FBRzZDLFFBQVE7VUFDMUMsSUFBTTRHLE9BQUEsR0FBUUwsTUFBQSxDQUFLMUQsSUFBQSxDQUFLMUYsS0FBQSxDQUFNNkMsUUFBUTtVQUN0Q3VHLE1BQUEsQ0FBSzFELElBQUEsR0FBTzhELFFBQUE7VUFDWkQsT0FBQSxHQUFPUixlQUFBLENBQUFBLGVBQUEsS0FDREksV0FBNEI7WUFDaEN6RCxJQUFBLEVBQU0rRDtXQUNQO1FBQ0YsT0FBTTtVQUNMLElBQU1DLFFBQUEsR0FBU04sTUFBQSxDQUFLL0QsUUFBQSxDQUFTckYsS0FBQSxDQUFNLEdBQUc2QyxRQUFRO1VBQzlDLElBQU04RyxPQUFBLEdBQVFQLE1BQUEsQ0FBSy9ELFFBQUEsQ0FBU3JGLEtBQUEsQ0FBTTZDLFFBQVE7VUFDMUN1RyxNQUFBLENBQUsvRCxRQUFBLEdBQVdxRSxRQUFBO1VBRWhCSCxPQUFBLEdBQU9SLGVBQUEsQ0FBQUEsZUFBQSxLQUNESSxXQUErQjtZQUNuQzlELFFBQUEsRUFBVXNFO1dBQ1g7UUFDRjtRQUVETixRQUFBLENBQU9oRSxRQUFBLENBQVNDLE1BQUEsQ0FBT2dFLE9BQUEsR0FBUSxHQUFHLEdBQUdDLE9BQU87UUFFNUMsSUFBSXRFLFNBQUEsRUFBVztVQUNiLFNBQVcsQ0FBQzJFLE9BQUEsRUFBT0MsS0FBRyxLQUFLM1EsS0FBQSxDQUFNcU0sTUFBQSxDQUFPTixTQUFTLEdBQUc7WUFDbERBLFNBQUEsQ0FBVTRFLEtBQUEsSUFBTzdRLEtBQUEsQ0FBTTBGLFNBQUEsQ0FBVWtMLE9BQUEsRUFBT2hMLEVBQUU7VUFDM0M7UUFDRjtRQUVEO01BQ0Q7O0VBRUgsT0FBT3FHLFNBQUE7QUFDVDtBQUdPLElBQU02RSxpQkFBQSxHQUF1QztFQUNsRHBMLFVBQVVzRyxNQUFBLEVBQWdCcEcsRUFBQSxFQUFhO0lBQ3JDb0csTUFBQSxDQUFPSyxRQUFBLE9BQVcwRSxZQUFBLENBQUFDLFdBQUEsRUFBWWhGLE1BQUEsQ0FBT0ssUUFBUTtJQUM3QyxJQUFJSixTQUFBLEdBQVlELE1BQUEsQ0FBT0MsU0FBQSxRQUFhOEUsWUFBQSxDQUFBQyxXQUFBLEVBQVloRixNQUFBLENBQU9DLFNBQVM7SUFFaEUsSUFBSTtNQUNGQSxTQUFBLEdBQVlGLFlBQUEsQ0FBYUMsTUFBQSxFQUFRQyxTQUFBLEVBQVdyRyxFQUFFO0lBQy9DO01BQ0NvRyxNQUFBLENBQU9LLFFBQUEsT0FBVzBFLFlBQUEsQ0FBQUUsV0FBQSxFQUFZakYsTUFBQSxDQUFPSyxRQUFRO01BRTdDLElBQUlKLFNBQUEsRUFBVztRQUNiRCxNQUFBLENBQU9DLFNBQUEsT0FBWThFLFlBQUEsQ0FBQUcsT0FBQSxFQUFRakYsU0FBUyxRQUMvQjhFLFlBQUEsQ0FBQUUsV0FBQSxFQUFZaEYsU0FBUyxJQUN0QkEsU0FBQTtNQUNMLE9BQU07UUFDTEQsTUFBQSxDQUFPQyxTQUFBLEdBQVk7TUFDcEI7SUFDRjtFQUNIOztBQzdLSyxJQUFNa0YsY0FBQSxHQUFpQztFQUM1Q2hQLFlBQVk2SixNQUFBLEVBQVFvRixNQUFBLEVBQU96SyxPQUFBLEVBQU87SUFDaENxRixNQUFBLENBQU83SixXQUFBLENBQVlpUCxNQUFBLEVBQU96SyxPQUFPOztFQUVuQzNELFVBQVVnSixNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDdkJxRixNQUFBLENBQU9oSixTQUFBLENBQVUyRCxPQUFPOztFQUUxQnpELFdBQVc4SSxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDeEJxRixNQUFBLENBQU85SSxVQUFBLENBQVd5RCxPQUFPOztFQUUzQnZELFVBQVU0SSxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDdkJxRixNQUFBLENBQU81SSxTQUFBLENBQVV1RCxPQUFPOztFQUUxQnBDLFlBQVl5SCxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDekJxRixNQUFBLENBQU96SCxXQUFBLENBQVlvQyxPQUFPOztFQUU1QmxDLFNBQVN1SCxNQUFBLEVBQVFxRixLQUFBLEVBQU8xSyxPQUFBLEVBQU87SUFDN0JxRixNQUFBLENBQU92SCxRQUFBLENBQVM0TSxLQUFBLEVBQU8xSyxPQUFPOztFQUVoQzVCLFdBQVdpSCxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDeEJxRixNQUFBLENBQU9qSCxVQUFBLENBQVc0QixPQUFPOztFQUUzQnhCLFdBQVc2RyxNQUFBLEVBQVFxRixLQUFBLEVBQU8xSyxPQUFBLEVBQU87SUFDL0JxRixNQUFBLENBQU83RyxVQUFBLENBQVdrTSxLQUFBLEVBQU8xSyxPQUFPOztFQUVsQ3ZCLFlBQVk0RyxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDekJxRixNQUFBLENBQU81RyxXQUFBLENBQVl1QixPQUFPOztFQUU1QnJCLFVBQVUwRyxNQUFBLEVBQVFzRixPQUFBLEVBQVMzSyxPQUFBLEVBQU87SUFDaENxRixNQUFBLENBQU8xRyxTQUFBLENBQVVnTSxPQUFBLEVBQVMzSyxPQUFPO0VBQ25DOztBQzNJSyxJQUFNNEssbUJBQUEsR0FBMkM7RUFDdEQxUSxTQUFTbUwsTUFBQSxFQUFRckYsT0FBQSxFQUFPO0lBQ3RCcUYsTUFBQSxDQUFPbkwsUUFBQSxDQUFTOEYsT0FBTzs7RUFFekJ4RixTQUFTNkssTUFBQSxFQUFNO0lBQ2JBLE1BQUEsQ0FBTzdLLFFBQUEsQ0FBUTs7RUFFakJnQyxLQUFLNkksTUFBQSxFQUFRckYsT0FBQSxFQUFPO0lBQ2xCcUYsTUFBQSxDQUFPN0ksSUFBQSxDQUFLd0QsT0FBTzs7RUFFckJuQyxPQUFPd0gsTUFBQSxFQUFRd0YsTUFBQSxFQUFNO0lBQ25CeEYsTUFBQSxDQUFPeEgsTUFBQSxDQUFPZ04sTUFBTTs7RUFFdEI3TSxTQUFTcUgsTUFBQSxFQUFRcUYsS0FBQSxFQUFPMUssT0FBQSxFQUFPO0lBQzdCcUYsTUFBQSxDQUFPckgsUUFBQSxDQUFTME0sS0FBQSxFQUFPMUssT0FBTzs7RUFFaEMvQixhQUFhb0gsTUFBQSxFQUFRcUYsS0FBQSxFQUFLO0lBQ3hCckYsTUFBQSxDQUFPcEgsWUFBQSxDQUFheU0sS0FBSztFQUMzQjs7QUM3REssSUFBTUksV0FBQSxHQUFjQSxDQUN6QnZGLEtBQUEsRUFDQWhGLE9BQUEsS0FDVztFQUNYLFNBQVdxRSxHQUFBLElBQU9XLEtBQUEsRUFBTTtJQUN0QixJQUFNd0YsQ0FBQSxHQUFJeEYsS0FBQSxDQUFLWCxHQUFBO0lBQ2YsSUFBTW9HLENBQUEsR0FBSXpLLE9BQUEsQ0FBUXFFLEdBQUE7SUFDbEIsUUFBSXFHLHNCQUFBLENBQUFDLGFBQUEsRUFBY0gsQ0FBQyxTQUFLRSxzQkFBQSxDQUFBQyxhQUFBLEVBQWNGLENBQUMsR0FBRztNQUN4QyxJQUFJLENBQUNGLFdBQUEsQ0FBWUMsQ0FBQSxFQUFHQyxDQUFDLEdBQUcsT0FBTztJQUNoQyxXQUFVL0ksS0FBQSxDQUFNQyxPQUFBLENBQVE2SSxDQUFDLEtBQUs5SSxLQUFBLENBQU1DLE9BQUEsQ0FBUThJLENBQUMsR0FBRztNQUMvQyxJQUFJRCxDQUFBLENBQUU3SyxNQUFBLEtBQVc4SyxDQUFBLENBQUU5SyxNQUFBLEVBQVEsT0FBTztNQUNsQyxTQUFTTSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJdUssQ0FBQSxDQUFFN0ssTUFBQSxFQUFRTSxDQUFBLElBQUs7UUFDakMsSUFBSXVLLENBQUEsQ0FBRXZLLENBQUEsTUFBT3dLLENBQUEsQ0FBRXhLLENBQUEsR0FBSSxPQUFPO01BQzNCO0lBQ0YsV0FBVXVLLENBQUEsS0FBTUMsQ0FBQSxFQUFHO01BQ2xCLE9BQU87SUFDUjtFQUNGO0VBUUQsU0FBVzVFLElBQUEsSUFBTzdGLE9BQUEsRUFBUztJQUN6QixJQUFJZ0YsS0FBQSxDQUFLYSxJQUFBLE1BQVMsVUFBYTdGLE9BQUEsQ0FBUTZGLElBQUEsTUFBUyxRQUFXO01BQ3pELE9BQU87SUFDUjtFQUNGO0VBRUQsT0FBTztBQUNUO0FDNUNlLFNBQVMrRSw4QkFBOEJDLE1BQUEsRUFBUUMsUUFBQSxFQUFVO0VBQ3RFLElBQUlELE1BQUEsSUFBVSxNQUFNLE9BQU87RUFDM0IsSUFBSVAsTUFBQSxHQUFTO0VBQ2IsSUFBSVMsVUFBQSxHQUFhdkcsTUFBQSxDQUFPd0csSUFBQSxDQUFLSCxNQUFNO0VBQ25DLElBQUl4RyxHQUFBLEVBQUtwRSxDQUFBO0VBQ1QsS0FBS0EsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSThLLFVBQUEsQ0FBV3BMLE1BQUEsRUFBUU0sQ0FBQSxJQUFLO0lBQ3RDb0UsR0FBQSxHQUFNMEcsVUFBQSxDQUFXOUssQ0FBQTtJQUNqQixJQUFJNkssUUFBQSxDQUFTRyxPQUFBLENBQVE1RyxHQUFHLEtBQUssR0FBRztJQUNoQ2lHLE1BQUEsQ0FBT2pHLEdBQUEsSUFBT3dHLE1BQUEsQ0FBT3hHLEdBQUE7RUFDekI7RUFDRSxPQUFPaUcsTUFBQTtBQUNUO0FDVmUsU0FBU1kseUJBQXlCTCxNQUFBLEVBQVFDLFFBQUEsRUFBVTtFQUNqRSxJQUFJRCxNQUFBLElBQVUsTUFBTSxPQUFPO0VBQzNCLElBQUlQLE1BQUEsR0FBU00sNkJBQUEsQ0FBNkJDLE1BQUEsRUFBUUMsUUFBUTtFQUMxRCxJQUFJekcsR0FBQSxFQUFLcEUsQ0FBQTtFQUNULElBQUl1RSxNQUFBLENBQU8yRyxxQkFBQSxFQUF1QjtJQUNoQyxJQUFJQyxnQkFBQSxHQUFtQjVHLE1BQUEsQ0FBTzJHLHFCQUFBLENBQXNCTixNQUFNO0lBQzFELEtBQUs1SyxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJbUwsZ0JBQUEsQ0FBaUJ6TCxNQUFBLEVBQVFNLENBQUEsSUFBSztNQUM1Q29FLEdBQUEsR0FBTStHLGdCQUFBLENBQWlCbkwsQ0FBQTtNQUN2QixJQUFJNkssUUFBQSxDQUFTRyxPQUFBLENBQVE1RyxHQUFHLEtBQUssR0FBRztNQUNoQyxJQUFJLENBQUNHLE1BQUEsQ0FBT2hCLFNBQUEsQ0FBVTZILG9CQUFBLENBQXFCdEgsSUFBQSxDQUFLOEcsTUFBQSxFQUFReEcsR0FBRyxHQUFHO01BQzlEaUcsTUFBQSxDQUFPakcsR0FBQSxJQUFPd0csTUFBQSxDQUFPeEcsR0FBQTtJQUMzQjtFQUNBO0VBQ0UsT0FBT2lHLE1BQUE7QUFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMrRk8sSUFBTXRSLEtBQUEsR0FBd0I7RUFDbkNrQixNQUFNb1IsTUFBQSxFQUE2QztJQUFBLElBQS9CN0wsT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUE2QjtJQUMvQyxJQUFNO01BQUVFLE9BQUEsR0FBVTtJQUFPLElBQUdILE9BQUE7SUFDNUIsSUFBTTtNQUFFOEwsTUFBQTtNQUFRQztJQUFPLElBQUdGLE1BQUE7SUFDMUIsT0FBT3RTLEtBQUEsQ0FBTXlTLFVBQUEsQ0FBV0gsTUFBSyxNQUFNMUwsT0FBQSxHQUMvQixDQUFDMkwsTUFBQSxFQUFRQyxLQUFLLElBQ2QsQ0FBQ0EsS0FBQSxFQUFPRCxNQUFNOztFQUdwQm5SLElBQUlrUixNQUFBLEVBQVk7SUFDZCxJQUFNLEdBQUdJLElBQUcsSUFBSTFTLEtBQUEsQ0FBTWtCLEtBQUEsQ0FBTW9SLE1BQUs7SUFDakMsT0FBT0ksSUFBQTs7RUFHVC9LLE9BQU8ySyxNQUFBLEVBQWN0TCxPQUFBLEVBQWM7SUFDakMsT0FDRWxILEtBQUEsQ0FBTTZILE1BQUEsQ0FBTzJLLE1BQUEsQ0FBTUMsTUFBQSxFQUFRdkwsT0FBQSxDQUFRdUwsTUFBTSxLQUN6Q3pTLEtBQUEsQ0FBTTZILE1BQUEsQ0FBTzJLLE1BQUEsQ0FBTUUsS0FBQSxFQUFPeEwsT0FBQSxDQUFRd0wsS0FBSzs7RUFJM0NHLFVBQVVMLE1BQUEsRUFBY2hCLE1BQUEsRUFBYTtJQUNuQyxJQUFNc0IsaUJBQUEsR0FBb0I1UyxLQUFBLENBQU02UyxZQUFBLENBQWFQLE1BQUEsRUFBT2hCLE1BQU07SUFDMUQsSUFBSSxDQUFDc0IsaUJBQUEsRUFBbUI7TUFDdEIsT0FBTztJQUNSO0lBQ0QsT0FBTzVTLEtBQUEsQ0FBTTJILE1BQUEsQ0FBT2lMLGlCQUFBLEVBQW1CdEIsTUFBTTs7RUFHL0N3QixTQUFTUixNQUFBLEVBQWNoQixNQUFBLEVBQTRCO0lBQ2pELElBQUl0UixLQUFBLENBQU00UCxPQUFBLENBQVEwQixNQUFNLEdBQUc7TUFDekIsSUFDRXRSLEtBQUEsQ0FBTThTLFFBQUEsQ0FBU1IsTUFBQSxFQUFPaEIsTUFBQSxDQUFPaUIsTUFBTSxLQUNuQ3ZTLEtBQUEsQ0FBTThTLFFBQUEsQ0FBU1IsTUFBQSxFQUFPaEIsTUFBQSxDQUFPa0IsS0FBSyxHQUNsQztRQUNBLE9BQU87TUFDUjtNQUVELElBQU0sQ0FBQ08sRUFBQSxFQUFJQyxFQUFFLElBQUloVCxLQUFBLENBQU1rQixLQUFBLENBQU1vUixNQUFLO01BQ2xDLElBQU0sQ0FBQ1csRUFBQSxFQUFJQyxFQUFFLElBQUlsVCxLQUFBLENBQU1rQixLQUFBLENBQU1vUSxNQUFNO01BQ25DLE9BQU94UixLQUFBLENBQU1xSSxRQUFBLENBQVM0SyxFQUFBLEVBQUlFLEVBQUUsS0FBS25ULEtBQUEsQ0FBTW1JLE9BQUEsQ0FBUStLLEVBQUEsRUFBSUUsRUFBRTtJQUN0RDtJQUVELElBQU0sQ0FBQ0MsTUFBQSxFQUFPVCxJQUFHLElBQUkxUyxLQUFBLENBQU1rQixLQUFBLENBQU1vUixNQUFLO0lBQ3RDLElBQUljLFlBQUEsR0FBZTtJQUNuQixJQUFJQyxXQUFBLEdBQWM7SUFFbEIsSUFBSXZULEtBQUEsQ0FBTXdULE9BQUEsQ0FBUWhDLE1BQU0sR0FBRztNQUN6QjhCLFlBQUEsR0FBZXRULEtBQUEsQ0FBTXVILE9BQUEsQ0FBUWlLLE1BQUEsRUFBUTZCLE1BQUssS0FBSztNQUMvQ0UsV0FBQSxHQUFjdlQsS0FBQSxDQUFNdUgsT0FBQSxDQUFRaUssTUFBQSxFQUFRb0IsSUFBRyxLQUFLO0lBQzdDLE9BQU07TUFDTFUsWUFBQSxHQUFleFQsSUFBQSxDQUFLeUgsT0FBQSxDQUFRaUssTUFBQSxFQUFRNkIsTUFBQSxDQUFNMVAsSUFBSSxLQUFLO01BQ25ENFAsV0FBQSxHQUFjelQsSUFBQSxDQUFLeUgsT0FBQSxDQUFRaUssTUFBQSxFQUFRb0IsSUFBQSxDQUFJalAsSUFBSSxLQUFLO0lBQ2pEO0lBRUQsT0FBTzJQLFlBQUEsSUFBZ0JDLFdBQUE7O0VBR3pCUixhQUFhUCxNQUFBLEVBQWN0TCxPQUFBLEVBQWM7SUFDakMsSUFBb0J1TSxJQUFBLEdBQUlyQix3QkFBQSxDQUFLSSxNQUFBLEVBQUtrQixXQUFBO0lBQ3hDLElBQU0sQ0FBQ0MsRUFBQSxFQUFJQyxFQUFFLElBQUkxVCxLQUFBLENBQU1rQixLQUFBLENBQU1vUixNQUFLO0lBQ2xDLElBQU0sQ0FBQ3FCLEVBQUEsRUFBSUMsRUFBRSxJQUFJNVQsS0FBQSxDQUFNa0IsS0FBQSxDQUFNOEYsT0FBTztJQUNwQyxJQUFNbU0sTUFBQSxHQUFRclQsS0FBQSxDQUFNcUksUUFBQSxDQUFTc0wsRUFBQSxFQUFJRSxFQUFFLElBQUlBLEVBQUEsR0FBS0YsRUFBQTtJQUM1QyxJQUFNZixJQUFBLEdBQU01UyxLQUFBLENBQU1xSSxRQUFBLENBQVN1TCxFQUFBLEVBQUlFLEVBQUUsSUFBSUYsRUFBQSxHQUFLRSxFQUFBO0lBRTFDLElBQUk5VCxLQUFBLENBQU1xSSxRQUFBLENBQVN1SyxJQUFBLEVBQUtTLE1BQUssR0FBRztNQUM5QixPQUFPO0lBQ1IsT0FBTTtNQUNMLE9BQUFVLGVBQUE7UUFBU3RCLE1BQUEsRUFBUVksTUFBQTtRQUFPWCxLQUFBLEVBQU9FO01BQUcsR0FBS2EsSUFBSTtJQUM1Qzs7RUFHSGQsV0FBV0gsTUFBQSxFQUFZO0lBQ3JCLElBQU07TUFBRUMsTUFBQTtNQUFRQztJQUFPLElBQUdGLE1BQUE7SUFDMUIsT0FBT3hTLEtBQUEsQ0FBTW1JLE9BQUEsQ0FBUXNLLE1BQUEsRUFBUUMsS0FBSzs7RUFHcENzQixZQUFZeEIsTUFBQSxFQUFZO0lBQ3RCLElBQU07TUFBRUMsTUFBQTtNQUFRQztJQUFPLElBQUdGLE1BQUE7SUFDMUIsT0FBT3hTLEtBQUEsQ0FBTTZILE1BQUEsQ0FBTzRLLE1BQUEsRUFBUUMsS0FBSzs7RUFHbkN1QixXQUFXekIsTUFBQSxFQUFZO0lBQ3JCLE9BQU8sQ0FBQ3RTLEtBQUEsQ0FBTThULFdBQUEsQ0FBWXhCLE1BQUs7O0VBR2pDMEIsVUFBVTFCLE1BQUEsRUFBWTtJQUNwQixPQUFPLENBQUN0UyxLQUFBLENBQU15UyxVQUFBLENBQVdILE1BQUs7O0VBR2hDMUMsUUFBUW5ILEtBQUEsRUFBVTtJQUNoQixXQUNFaUosc0JBQUEsQ0FBQUMsYUFBQSxFQUFjbEosS0FBSyxLQUNuQjNJLEtBQUEsQ0FBTXdULE9BQUEsQ0FBUTdLLEtBQUEsQ0FBTThKLE1BQU0sS0FDMUJ6UyxLQUFBLENBQU13VCxPQUFBLENBQVE3SyxLQUFBLENBQU0rSixLQUFLOztFQUk3QixDQUFDbkcsT0FBT2lHLE1BQUEsRUFBWTtJQUNsQixNQUFNLENBQUNBLE1BQUEsQ0FBTUMsTUFBQSxFQUFRLFFBQVE7SUFDN0IsTUFBTSxDQUFDRCxNQUFBLENBQU1FLEtBQUEsRUFBTyxPQUFPOztFQUc3QjFOLE1BQU13TixNQUFBLEVBQVk7SUFDaEIsSUFBTSxDQUFDYSxNQUFLLElBQUluVCxLQUFBLENBQU1rQixLQUFBLENBQU1vUixNQUFLO0lBQ2pDLE9BQU9hLE1BQUE7O0VBR1QzTixVQUNFOE0sTUFBQSxFQUNBNU0sRUFBQSxFQUNtQztJQUFBLElBQW5DZSxPQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQWlDO0lBRWpDLFdBQU9tSyxZQUFBLENBQUFvRCxPQUFBLEVBQVEzQixNQUFBLEVBQU80QixDQUFBLElBQUk7TUFDeEIsSUFBSUEsQ0FBQSxLQUFNLE1BQU07UUFDZCxPQUFPO01BQ1I7TUFDRCxJQUFNO1FBQUV0TyxRQUFBLEdBQVc7TUFBVSxJQUFHYSxPQUFBO01BQ2hDLElBQUkwTixjQUFBO01BQ0osSUFBSUMsYUFBQTtNQUVKLElBQUl4TyxRQUFBLEtBQWEsVUFBVTtRQUl6QixJQUFNa08sV0FBQSxHQUFjOVQsS0FBQSxDQUFNOFQsV0FBQSxDQUFZSSxDQUFDO1FBQ3ZDLElBQUlsVSxLQUFBLENBQU1nVSxTQUFBLENBQVVFLENBQUMsR0FBRztVQUN0QkMsY0FBQSxHQUFpQjtVQUNqQkMsYUFBQSxHQUFnQk4sV0FBQSxHQUFjSyxjQUFBLEdBQWlCO1FBQ2hELE9BQU07VUFDTEEsY0FBQSxHQUFpQjtVQUNqQkMsYUFBQSxHQUFnQk4sV0FBQSxHQUFjSyxjQUFBLEdBQWlCO1FBQ2hEO01BQ0YsV0FBVXZPLFFBQUEsS0FBYSxXQUFXO1FBQ2pDLElBQUk1RixLQUFBLENBQU1nVSxTQUFBLENBQVVFLENBQUMsR0FBRztVQUN0QkMsY0FBQSxHQUFpQjtVQUNqQkMsYUFBQSxHQUFnQjtRQUNqQixPQUFNO1VBQ0xELGNBQUEsR0FBaUI7VUFDakJDLGFBQUEsR0FBZ0I7UUFDakI7TUFDRixPQUFNO1FBQ0xELGNBQUEsR0FBaUJ2TyxRQUFBO1FBQ2pCd08sYUFBQSxHQUFnQnhPLFFBQUE7TUFDakI7TUFDRCxJQUFNMk0sTUFBQSxHQUFTelMsS0FBQSxDQUFNMEYsU0FBQSxDQUFVME8sQ0FBQSxDQUFFM0IsTUFBQSxFQUFRN00sRUFBQSxFQUFJO1FBQUVFLFFBQUEsRUFBVXVPO01BQWMsQ0FBRTtNQUN6RSxJQUFNM0IsS0FBQSxHQUFRMVMsS0FBQSxDQUFNMEYsU0FBQSxDQUFVME8sQ0FBQSxDQUFFMUIsS0FBQSxFQUFPOU0sRUFBQSxFQUFJO1FBQUVFLFFBQUEsRUFBVXdPO01BQWEsQ0FBRTtNQUV0RSxJQUFJLENBQUM3QixNQUFBLElBQVUsQ0FBQ0MsS0FBQSxFQUFPO1FBQ3JCLE9BQU87TUFDUjtNQUVEMEIsQ0FBQSxDQUFFM0IsTUFBQSxHQUFTQSxNQUFBO01BQ1gyQixDQUFBLENBQUUxQixLQUFBLEdBQVFBLEtBQUE7SUFDWixDQUFDO0VBQ0g7O0FDL01GLElBQU02QixTQUFBLEdBQWE1TCxLQUFBLElBQWdDO0VBQ2pELFdBQ0VpSixzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFLLEtBQ25CL0ksSUFBQSxDQUFLNFUsVUFBQSxDQUFXN0wsS0FBQSxDQUFNMEQsUUFBUSxLQUM5QixDQUFDNU0sTUFBQSxDQUFPK0MsUUFBQSxDQUFTbUcsS0FBSztBQUUxQjtBQUdPLElBQU1qSixPQUFBLEdBQTRCO0VBQ3ZDMEksV0FBV08sS0FBQSxFQUFVO0lBQ25CLFdBQU9pSixzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFLLEtBQUsvSSxJQUFBLENBQUs0VSxVQUFBLENBQVc3TCxLQUFBLENBQU0wRCxRQUFROztFQUcvRGtJLFNBQUE7RUFFQUUsY0FBYzlMLEtBQUEsRUFBVTtJQUN0QixPQUFPQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBSyxLQUFLQSxLQUFBLENBQU1YLEtBQUEsQ0FBTTBNLEdBQUEsSUFBT2hWLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVUcsR0FBRyxDQUFDOztFQUcxRUMsZUFBZXRELEtBQUEsRUFBVTtJQUN2QixPQUFRQSxLQUFBLENBQTJCaEYsUUFBQSxLQUFhOztFQUdsRHVJLGFBQUEsRUFBZSxTQUFBQSxjQUNiak0sS0FBQSxFQUNBa00sVUFBQSxFQUVjO0lBQUEsSUFEZEMsVUFBQSxHQUFBbE8sU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBcUI7SUFFckIsT0FDRTJOLFNBQUEsQ0FBVTVMLEtBQUssS0FBS0EsS0FBQSxDQUF3Qm1NLFVBQUEsTUFBZ0JELFVBQUE7O0VBSWhFRSxRQUFRekQsT0FBQSxFQUFrQkQsS0FBQSxFQUF1QjtJQUMvQyxTQUFXOUYsR0FBQSxJQUFPOEYsS0FBQSxFQUFPO01BQ3ZCLElBQUk5RixHQUFBLEtBQVEsWUFBWTtRQUN0QjtNQUNEO01BRUQsSUFBSStGLE9BQUEsQ0FBMEIvRixHQUFBLE1BQVM4RixLQUFBLENBQXdCOUYsR0FBQSxHQUFNO1FBQ25FLE9BQU87TUFDUjtJQUNGO0lBRUQsT0FBTztFQUNUOzs7O0FDNkdGLElBQU15SixrQkFBQSxHQUFxQixtQkFBSTdPLE9BQUEsQ0FBTztBQUcvQixJQUFNdkcsSUFBQSxHQUFzQjtFQUNqQzZKLFNBQVN3TCxJQUFBLEVBQVlsUCxLQUFBLEVBQVU7SUFDN0IsSUFBTW1HLEtBQUEsR0FBT3RNLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTWxQLEtBQUk7SUFFaEMsSUFBSXpGLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3JCLEtBQUksR0FBRztNQUNyQixNQUFNLElBQUloRCxLQUFBLENBQUsseUNBQUFDLE1BQUEsQ0FDNEJwRCxLQUFBLEVBQUksZ0RBQUFvRCxNQUFBLENBQStDL0ksUUFBQSxDQUFTb04sU0FBQSxDQUNuR3RCLEtBQUksQ0FDTCxDQUFFO0lBRU47SUFFRCxPQUFPQSxLQUFBOztFQUdSeEYsVUFDQ3VPLElBQUEsRUFDQWxQLEtBQUEsRUFBVTtJQUFBLElBQ1ZZLE9BQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBZ0M7SUFBRTtNQUVsQyxTQUFXOEMsQ0FBQSxJQUFLNUosSUFBQSxDQUFLNEcsU0FBQSxDQUFVWCxLQUFBLEVBQU1ZLE9BQU8sR0FBRztRQUM3QyxJQUFNc0IsQ0FBQSxHQUFJckksSUFBQSxDQUFLNkosUUFBQSxDQUFTd0wsSUFBQSxFQUFNdkwsQ0FBQztRQUMvQixJQUFNd0wsS0FBQSxHQUE2QixDQUFDak4sQ0FBQSxFQUFHeUIsQ0FBQztRQUN4QyxNQUFNd0wsS0FBQTtNQUNQO01BQ0Y7RUFBQTtFQUVEQyxNQUFNRixJQUFBLEVBQVk3SSxLQUFBLEVBQWE7SUFDN0IsSUFBSTlMLElBQUEsQ0FBS2lOLE1BQUEsQ0FBTzBILElBQUksR0FBRztNQUNyQixNQUFNLElBQUkvTCxLQUFBLENBQUssd0NBQUFDLE1BQUEsQ0FDMkIvSSxRQUFBLENBQVNvTixTQUFBLENBQVV5SCxJQUFJLENBQUMsQ0FBRTtJQUVyRTtJQUVELElBQU1HLENBQUEsR0FBSUgsSUFBQSxDQUFLNUksUUFBQSxDQUFTRCxLQUFBO0lBRXhCLElBQUlnSixDQUFBLElBQUssTUFBTTtNQUNiLE1BQU0sSUFBSWxNLEtBQUEsQ0FBSyw4QkFBQUMsTUFBQSxDQUNrQmlELEtBQUEsRUFBSyxlQUFBakQsTUFBQSxDQUFlL0ksUUFBQSxDQUFTb04sU0FBQSxDQUMxRHlILElBQUksQ0FDTCxDQUFFO0lBRU47SUFFRCxPQUFPRyxDQUFBOztFQUdSL0ksU0FDQzRJLElBQUEsRUFDQWxQLEtBQUEsRUFBVTtJQUFBLElBQ1ZZLE9BQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBK0I7SUFBRTtNQUVqQyxJQUFNO1FBQUVFLE9BQUEsR0FBVTtNQUFPLElBQUdILE9BQUE7TUFDNUIsSUFBTThDLFFBQUEsR0FBVzdKLElBQUEsQ0FBSzZKLFFBQUEsQ0FBU3dMLElBQUEsRUFBTWxQLEtBQUk7TUFDekMsSUFBTTtRQUFFc0c7TUFBVSxJQUFHNUMsUUFBQTtNQUNyQixJQUFJMkMsS0FBQSxHQUFRdEYsT0FBQSxHQUFVdUYsUUFBQSxDQUFTeEYsTUFBQSxHQUFTLElBQUk7TUFFNUMsT0FBT0MsT0FBQSxHQUFVc0YsS0FBQSxJQUFTLElBQUlBLEtBQUEsR0FBUUMsUUFBQSxDQUFTeEYsTUFBQSxFQUFRO1FBQ3JELElBQU1zTyxLQUFBLEdBQVF2VixJQUFBLENBQUt1VixLQUFBLENBQU0xTCxRQUFBLEVBQVUyQyxLQUFLO1FBQ3hDLElBQU1pSixTQUFBLEdBQVl0UCxLQUFBLENBQUtvRCxNQUFBLENBQU9pRCxLQUFLO1FBQ25DLE1BQU0sQ0FBQytJLEtBQUEsRUFBT0UsU0FBUztRQUN2QmpKLEtBQUEsR0FBUXRGLE9BQUEsR0FBVXNGLEtBQUEsR0FBUSxJQUFJQSxLQUFBLEdBQVE7TUFDdkM7TUFDRjtFQUFBO0VBRURuRixPQUFPZ08sSUFBQSxFQUFZbFAsS0FBQSxFQUFZbUIsT0FBQSxFQUFhO0lBQzFDLElBQU13QyxDQUFBLEdBQUk1SixJQUFBLENBQUttSCxNQUFBLENBQU9sQixLQUFBLEVBQU1tQixPQUFPO0lBQ25DLElBQU1lLENBQUEsR0FBSXJJLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTXZMLENBQUM7SUFDMUIsT0FBTyxDQUFDekIsQ0FBQSxFQUFHeUIsQ0FBQzs7RUFHZDRMLFdBQVdMLElBQUEsRUFBWWxQLEtBQUEsRUFBVTtJQUMvQixJQUFNbUcsS0FBQSxHQUFPdE0sSUFBQSxDQUFLc04sR0FBQSxDQUFJK0gsSUFBQSxFQUFNbFAsS0FBSTtJQUVoQyxJQUFJdEcsTUFBQSxDQUFPK0MsUUFBQSxDQUFTMEosS0FBSSxHQUFHO01BQ3pCLE1BQU0sSUFBSWhELEtBQUEsQ0FBSywyQ0FBQUMsTUFBQSxDQUM4QnBELEtBQUEsRUFBSSx5REFBQW9ELE1BQUEsQ0FBd0QvSSxRQUFBLENBQVNvTixTQUFBLENBQzlHdEIsS0FBSSxDQUNMLENBQUU7SUFFTjtJQUVELE9BQU9BLEtBQUE7O0VBR1JxSixZQUNDTixJQUFBLEVBQVU7SUFBQSxJQUNWdE8sT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFrQztJQUFFO01BRXBDLFNBQVcsQ0FBQ3NGLEtBQUEsRUFBTW5HLEtBQUksS0FBS25HLElBQUEsQ0FBSzJELEtBQUEsQ0FBTTBSLElBQUEsRUFBTXRPLE9BQU8sR0FBRztRQUNwRCxJQUFJWixLQUFBLENBQUtjLE1BQUEsS0FBVyxHQUFHO1VBR3JCLE1BQU0sQ0FBQ3FGLEtBQUEsRUFBTW5HLEtBQUk7UUFDbEI7TUFDRjtNQUNGO0VBQUE7RUFFQXlQLFNBQ0NQLElBQUEsRUFBVTtJQUFBLElBQ1Z0TyxPQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQStCO0lBQUU7TUFFakMsU0FBVyxDQUFDc0YsS0FBQSxFQUFNbkcsS0FBSSxLQUFLbkcsSUFBQSxDQUFLMkQsS0FBQSxDQUFNMFIsSUFBQSxFQUFNdE8sT0FBTyxHQUFHO1FBQ3BELElBQUlqSCxPQUFBLENBQVE2VSxTQUFBLENBQVVySSxLQUFJLEdBQUc7VUFDM0IsTUFBTSxDQUFDQSxLQUFBLEVBQU1uRyxLQUFJO1FBQ2xCO01BQ0Y7TUFDRjtFQUFBO0VBRUQwUCxhQUFhdkosS0FBQSxFQUFVO0lBQ3JCLElBQUl4TSxPQUFBLENBQVEwSSxVQUFBLENBQVc4RCxLQUFJLEdBQUc7TUFDdEIsSUFBZXFELFVBQUEsR0FBVTZDLHdCQUFBLENBQUtsRyxLQUFBLEVBQUl3SixXQUFBO01BRXhDLE9BQU9uRyxVQUFBO0lBQ1IsT0FBTTtNQUNDLElBQVdBLFVBQUEsR0FBVTZDLHdCQUFBLENBQUtsRyxLQUFBLEVBQUl5SixZQUFBO01BRXBDLE9BQU9wRyxVQUFBO0lBQ1I7O0VBR0hoTyxNQUFNMFQsSUFBQSxFQUFZbFAsS0FBQSxFQUFVO0lBQzFCLElBQU0yRCxDQUFBLEdBQUkzRCxLQUFBLENBQUtpQixLQUFBLENBQUs7SUFDcEIsSUFBSWlCLENBQUEsR0FBSXJJLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTXZMLENBQUM7SUFFeEIsT0FBT3pCLENBQUEsRUFBRztNQUNSLElBQUkzSCxJQUFBLENBQUtpTixNQUFBLENBQU90RixDQUFDLEtBQUtBLENBQUEsQ0FBRW9FLFFBQUEsQ0FBU3hGLE1BQUEsS0FBVyxHQUFHO1FBQzdDO01BQ0QsT0FBTTtRQUNMb0IsQ0FBQSxHQUFJQSxDQUFBLENBQUVvRSxRQUFBLENBQVM7UUFDZjNDLENBQUEsQ0FBRXBDLElBQUEsQ0FBSyxDQUFDO01BQ1Q7SUFDRjtJQUVELE9BQU8sQ0FBQ1csQ0FBQSxFQUFHeUIsQ0FBQzs7RUFHZGxJLFNBQVN5VCxJQUFBLEVBQVl6QyxNQUFBLEVBQVk7SUFDL0IsSUFBSWxTLElBQUEsQ0FBS2lOLE1BQUEsQ0FBTzBILElBQUksR0FBRztNQUNyQixNQUFNLElBQUkvTCxLQUFBLENBQUsseURBQUFDLE1BQUEsQ0FDNEMvSSxRQUFBLENBQVNvTixTQUFBLENBQ2hFeUgsSUFBSSxDQUNMLENBQUU7SUFFTjtJQUVELElBQU1XLE9BQUEsT0FBVTdFLFlBQUEsQ0FBQW9ELE9BQUEsRUFBUTtNQUFFOUgsUUFBQSxFQUFVNEksSUFBQSxDQUFLNUk7T0FBWStILENBQUEsSUFBSTtNQUN2RCxJQUFNLENBQUNmLE1BQUEsRUFBT1QsSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNb1IsTUFBSztNQUN0QyxJQUFNcUQsV0FBQSxHQUFjalcsSUFBQSxDQUFLMkQsS0FBQSxDQUFNNlEsQ0FBQSxFQUFHO1FBQ2hDdE4sT0FBQSxFQUFTO1FBQ1RnUCxJQUFBLEVBQU1DLElBQUE7VUFBQSxJQUFDLEdBQUdDLEtBQUksSUFBQ0QsSUFBQTtVQUFBLE9BQUssQ0FBQzdWLEtBQUEsQ0FBTThTLFFBQUEsQ0FBU1IsTUFBQSxFQUFPd0QsS0FBSTtRQUFDO01BQ2pEO01BRUQsU0FBVyxHQUFHalEsS0FBSSxLQUFLOFAsV0FBQSxFQUFhO1FBQ2xDLElBQUksQ0FBQzNWLEtBQUEsQ0FBTThTLFFBQUEsQ0FBU1IsTUFBQSxFQUFPek0sS0FBSSxHQUFHO1VBQ2hDLElBQU1vRyxPQUFBLEdBQVN2TSxJQUFBLENBQUs4RCxNQUFBLENBQU8wUSxDQUFBLEVBQUdyTyxLQUFJO1VBQ2xDLElBQU1xRyxLQUFBLEdBQVFyRyxLQUFBLENBQUtBLEtBQUEsQ0FBS2MsTUFBQSxHQUFTO1VBQ2pDc0YsT0FBQSxDQUFPRSxRQUFBLENBQVNDLE1BQUEsQ0FBT0YsS0FBQSxFQUFPLENBQUM7UUFDaEM7UUFFRCxJQUFJdE0sSUFBQSxDQUFLK0gsTUFBQSxDQUFPOUIsS0FBQSxFQUFNNk0sSUFBQSxDQUFJalAsSUFBSSxHQUFHO1VBQy9CLElBQU1zUyxLQUFBLEdBQU9yVyxJQUFBLENBQUtrRCxJQUFBLENBQUtzUixDQUFBLEVBQUdyTyxLQUFJO1VBQzlCa1EsS0FBQSxDQUFLdkosSUFBQSxHQUFPdUosS0FBQSxDQUFLdkosSUFBQSxDQUFLMUYsS0FBQSxDQUFNLEdBQUc0TCxJQUFBLENBQUluRyxNQUFNO1FBQzFDO1FBRUQsSUFBSTNNLElBQUEsQ0FBSytILE1BQUEsQ0FBTzlCLEtBQUEsRUFBTXNOLE1BQUEsQ0FBTTFQLElBQUksR0FBRztVQUNqQyxJQUFNdVMsS0FBQSxHQUFPdFcsSUFBQSxDQUFLa0QsSUFBQSxDQUFLc1IsQ0FBQSxFQUFHck8sS0FBSTtVQUM5Qm1RLEtBQUEsQ0FBS3hKLElBQUEsR0FBT3dKLEtBQUEsQ0FBS3hKLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTXFNLE1BQUEsQ0FBTTVHLE1BQU07UUFDekM7TUFDRjtNQUVELElBQUloTixNQUFBLENBQU8rQyxRQUFBLENBQVM0UixDQUFDLEdBQUc7UUFDdEJBLENBQUEsQ0FBRW5JLFNBQUEsR0FBWTtNQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU8ySixPQUFBLENBQVF2SixRQUFBOztFQUdqQmEsSUFBSStILElBQUEsRUFBWWxQLEtBQUEsRUFBVTtJQUN4QixJQUFNbUcsS0FBQSxHQUFPdE0sSUFBQSxDQUFLdVcsS0FBQSxDQUFNbEIsSUFBQSxFQUFNbFAsS0FBSTtJQUNsQyxJQUFJbUcsS0FBQSxLQUFTLFFBQVc7TUFDdEIsTUFBTSxJQUFJaEQsS0FBQSxDQUFLLHFDQUFBQyxNQUFBLENBQ3dCcEQsS0FBQSxFQUFJLGVBQUFvRCxNQUFBLENBQWMvSSxRQUFBLENBQVNvTixTQUFBLENBQzlEeUgsSUFBSSxDQUNMLENBQUU7SUFFTjtJQUNELE9BQU8vSSxLQUFBOztFQUdUaUssTUFBTWxCLElBQUEsRUFBWWxQLEtBQUEsRUFBVTtJQUMxQixJQUFJbUcsS0FBQSxHQUFPK0ksSUFBQTtJQUVYLFNBQVM5TixDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJcEIsS0FBQSxDQUFLYyxNQUFBLEVBQVFNLENBQUEsSUFBSztNQUNwQyxJQUFNdUMsQ0FBQSxHQUFJM0QsS0FBQSxDQUFLb0IsQ0FBQTtNQUVmLElBQUk3RyxJQUFBLENBQUtpTixNQUFBLENBQU9yQixLQUFJLEtBQUssQ0FBQ0EsS0FBQSxDQUFLRyxRQUFBLENBQVMzQyxDQUFBLEdBQUk7UUFDMUM7TUFDRDtNQUVEd0MsS0FBQSxHQUFPQSxLQUFBLENBQUtHLFFBQUEsQ0FBUzNDLENBQUE7SUFDdEI7SUFFRCxPQUFPd0MsS0FBQTs7RUFHVGtLLElBQUluQixJQUFBLEVBQVlsUCxLQUFBLEVBQVU7SUFDeEIsSUFBSW1HLEtBQUEsR0FBTytJLElBQUE7SUFFWCxTQUFTOU4sQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSXBCLEtBQUEsQ0FBS2MsTUFBQSxFQUFRTSxDQUFBLElBQUs7TUFDcEMsSUFBTXVDLENBQUEsR0FBSTNELEtBQUEsQ0FBS29CLENBQUE7TUFFZixJQUFJN0csSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxLQUFLLENBQUNBLEtBQUEsQ0FBS0csUUFBQSxDQUFTM0MsQ0FBQSxHQUFJO1FBQzFDLE9BQU87TUFDUjtNQUVEd0MsS0FBQSxHQUFPQSxLQUFBLENBQUtHLFFBQUEsQ0FBUzNDLENBQUE7SUFDdEI7SUFFRCxPQUFPOztFQUdUMk0sT0FBTzFOLEtBQUEsRUFBVTtJQUNmLE9BQ0VySSxJQUFBLENBQUtpTixNQUFBLENBQU81RSxLQUFLLEtBQUtqSixPQUFBLENBQVE2VSxTQUFBLENBQVU1TCxLQUFLLEtBQUtsSixNQUFBLENBQU8rQyxRQUFBLENBQVNtRyxLQUFLOztFQUkzRTZMLFdBQVc3TCxLQUFBLEVBQVU7SUFDbkIsSUFBSSxDQUFDQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBSyxHQUFHO01BQ3pCLE9BQU87SUFDUjtJQUNELElBQU0yTixZQUFBLEdBQWV0QixrQkFBQSxDQUFtQjlILEdBQUEsQ0FBSXZFLEtBQUs7SUFDakQsSUFBSTJOLFlBQUEsS0FBaUIsUUFBVztNQUM5QixPQUFPQSxZQUFBO0lBQ1I7SUFDRCxJQUFNOUIsVUFBQSxHQUFhN0wsS0FBQSxDQUFNWCxLQUFBLENBQU0wTSxHQUFBLElBQU85VSxJQUFBLENBQUt5VyxNQUFBLENBQU8zQixHQUFHLENBQUM7SUFDdERNLGtCQUFBLENBQW1CdUIsR0FBQSxDQUFJNU4sS0FBQSxFQUFPNkwsVUFBVTtJQUN4QyxPQUFPQSxVQUFBOztFQUdUM1IsS0FBS29TLElBQUEsRUFBWWxQLEtBQUEsRUFBVTtJQUN6QixJQUFNMkQsQ0FBQSxHQUFJM0QsS0FBQSxDQUFLaUIsS0FBQSxDQUFLO0lBQ3BCLElBQUlpQixDQUFBLEdBQUlySSxJQUFBLENBQUtzTixHQUFBLENBQUkrSCxJQUFBLEVBQU12TCxDQUFDO0lBRXhCLE9BQU96QixDQUFBLEVBQUc7TUFDUixJQUFJM0gsSUFBQSxDQUFLaU4sTUFBQSxDQUFPdEYsQ0FBQyxLQUFLQSxDQUFBLENBQUVvRSxRQUFBLENBQVN4RixNQUFBLEtBQVcsR0FBRztRQUM3QztNQUNELE9BQU07UUFDTCxJQUFNTSxDQUFBLEdBQUljLENBQUEsQ0FBRW9FLFFBQUEsQ0FBU3hGLE1BQUEsR0FBUztRQUM5Qm9CLENBQUEsR0FBSUEsQ0FBQSxDQUFFb0UsUUFBQSxDQUFTbEYsQ0FBQTtRQUNmdUMsQ0FBQSxDQUFFcEMsSUFBQSxDQUFLSCxDQUFDO01BQ1Q7SUFDRjtJQUVELE9BQU8sQ0FBQ2MsQ0FBQSxFQUFHeUIsQ0FBQzs7RUFHZDVHLEtBQUttUyxJQUFBLEVBQVlsUCxLQUFBLEVBQVU7SUFDekIsSUFBTW1HLEtBQUEsR0FBT3RNLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTWxQLEtBQUk7SUFFaEMsSUFBSSxDQUFDekYsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxHQUFHO01BQ3RCLE1BQU0sSUFBSWhELEtBQUEsQ0FBSyxxQ0FBQUMsTUFBQSxDQUN3QnBELEtBQUEsRUFBSSw0Q0FBQW9ELE1BQUEsQ0FBMkMvSSxRQUFBLENBQVNvTixTQUFBLENBQzNGdEIsS0FBSSxDQUNMLENBQUU7SUFFTjtJQUVELE9BQU9BLEtBQUE7O0VBR1JuSixPQUNDa1MsSUFBQSxFQUNBbFAsS0FBQSxFQUFVO0lBQUEsSUFDVlksT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUE2QjtJQUFFO01BRS9CLFNBQVc4QyxDQUFBLElBQUs1SixJQUFBLENBQUtpRCxNQUFBLENBQU9nRCxLQUFBLEVBQU1ZLE9BQU8sR0FBRztRQUMxQyxJQUFNc0IsQ0FBQSxHQUFJckksSUFBQSxDQUFLc04sR0FBQSxDQUFJK0gsSUFBQSxFQUFNdkwsQ0FBQztRQUMxQixNQUFNLENBQUN6QixDQUFBLEVBQUd5QixDQUFDO01BQ1o7TUFDRjtFQUFBO0VBRURxTCxRQUFRN0ksS0FBQSxFQUFZbUYsS0FBQSxFQUFvQjtJQUN0QyxPQUNHM1IsT0FBQSxDQUFRNlUsU0FBQSxDQUFVckksS0FBSSxLQUNyQnhNLE9BQUEsQ0FBUWlWLGNBQUEsQ0FBZXRELEtBQUssS0FDNUIzUixPQUFBLENBQVFxVixPQUFBLENBQVE3SSxLQUFBLEVBQU1tRixLQUFLLEtBQzVCL1EsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxLQUNmNUwsSUFBQSxDQUFLa1csV0FBQSxDQUFZbkYsS0FBSyxLQUN0Qi9RLElBQUEsQ0FBS3lVLE9BQUEsQ0FBUTdJLEtBQUEsRUFBTW1GLEtBQUs7O0VBSTdCOU4sTUFDQzBSLElBQUEsRUFBVTtJQUFBLElBQ1Z0TyxPQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQTRCO0lBQUU7TUFFOUIsSUFBTTtRQUFFa1AsSUFBQTtRQUFNaFAsT0FBQSxHQUFVO01BQUssSUFBS0gsT0FBQTtNQUNsQyxJQUFNO1FBQUU4UCxJQUFBLEdBQU87UUFBSUM7TUFBRSxJQUFLL1AsT0FBQTtNQUMxQixJQUFNZ1EsT0FBQSxHQUFVLG1CQUFJQyxHQUFBLENBQUc7TUFDdkIsSUFBSWxOLENBQUEsR0FBVTtNQUNkLElBQUl6QixDQUFBLEdBQUlnTixJQUFBO01BRVIsT0FBTyxNQUFNO1FBQ1gsSUFBSXlCLEVBQUEsS0FBTzVQLE9BQUEsR0FBVWhILElBQUEsQ0FBS3VJLFFBQUEsQ0FBU3FCLENBQUEsRUFBR2dOLEVBQUUsSUFBSTVXLElBQUEsQ0FBS3FJLE9BQUEsQ0FBUXVCLENBQUEsRUFBR2dOLEVBQUUsSUFBSTtVQUNoRTtRQUNEO1FBRUQsSUFBSSxDQUFDQyxPQUFBLENBQVFQLEdBQUEsQ0FBSW5PLENBQUMsR0FBRztVQUNuQixNQUFNLENBQUNBLENBQUEsRUFBR3lCLENBQUM7UUFDWjtRQUdELElBQ0UsQ0FBQ2lOLE9BQUEsQ0FBUVAsR0FBQSxDQUFJbk8sQ0FBQyxLQUNkLENBQUMzSCxJQUFBLENBQUtpTixNQUFBLENBQU90RixDQUFDLEtBQ2RBLENBQUEsQ0FBRW9FLFFBQUEsQ0FBU3hGLE1BQUEsS0FBVyxNQUNyQmlQLElBQUEsSUFBUSxRQUFRQSxJQUFBLENBQUssQ0FBQzdOLENBQUEsRUFBR3lCLENBQUMsQ0FBQyxNQUFNLFFBQ2xDO1VBQ0FpTixPQUFBLENBQVFFLEdBQUEsQ0FBSTVPLENBQUM7VUFDYixJQUFJNk8sU0FBQSxHQUFZaFEsT0FBQSxHQUFVbUIsQ0FBQSxDQUFFb0UsUUFBQSxDQUFTeEYsTUFBQSxHQUFTLElBQUk7VUFFbEQsSUFBSS9HLElBQUEsQ0FBS3NJLFVBQUEsQ0FBV3NCLENBQUEsRUFBRytNLElBQUksR0FBRztZQUM1QkssU0FBQSxHQUFZTCxJQUFBLENBQUsvTSxDQUFBLENBQUU3QyxNQUFBO1VBQ3BCO1VBRUQ2QyxDQUFBLEdBQUlBLENBQUEsQ0FBRVAsTUFBQSxDQUFPMk4sU0FBUztVQUN0QjdPLENBQUEsR0FBSXJJLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTXZMLENBQUM7VUFDcEI7UUFDRDtRQUdELElBQUlBLENBQUEsQ0FBRTdDLE1BQUEsS0FBVyxHQUFHO1VBQ2xCO1FBQ0Q7UUFHRCxJQUFJLENBQUNDLE9BQUEsRUFBUztVQUNaLElBQU1tRCxPQUFBLEdBQVVuSyxJQUFBLENBQUt1RCxJQUFBLENBQUtxRyxDQUFDO1VBRTNCLElBQUk5SixJQUFBLENBQUt3VyxHQUFBLENBQUluQixJQUFBLEVBQU1oTCxPQUFPLEdBQUc7WUFDM0JQLENBQUEsR0FBSU8sT0FBQTtZQUNKaEMsQ0FBQSxHQUFJckksSUFBQSxDQUFLc04sR0FBQSxDQUFJK0gsSUFBQSxFQUFNdkwsQ0FBQztZQUNwQjtVQUNEO1FBQ0Y7UUFHRCxJQUFJNUMsT0FBQSxJQUFXNEMsQ0FBQSxDQUFFQSxDQUFBLENBQUU3QyxNQUFBLEdBQVMsT0FBTyxHQUFHO1VBQ3BDLElBQU1rUSxRQUFBLEdBQVVqWCxJQUFBLENBQUtvRSxRQUFBLENBQVN3RixDQUFDO1VBQy9CQSxDQUFBLEdBQUlxTixRQUFBO1VBQ0o5TyxDQUFBLEdBQUlySSxJQUFBLENBQUtzTixHQUFBLENBQUkrSCxJQUFBLEVBQU12TCxDQUFDO1VBQ3BCO1FBQ0Q7UUFHREEsQ0FBQSxHQUFJNUosSUFBQSxDQUFLNEQsTUFBQSxDQUFPZ0csQ0FBQztRQUNqQnpCLENBQUEsR0FBSXJJLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTXZMLENBQUM7UUFDcEJpTixPQUFBLENBQVFFLEdBQUEsQ0FBSTVPLENBQUM7TUFDZDtNQUNGO0VBQUE7RUFFRHZFLE9BQU91UixJQUFBLEVBQVlsUCxLQUFBLEVBQVU7SUFDM0IsSUFBTWlSLFVBQUEsR0FBYWxYLElBQUEsQ0FBSzRELE1BQUEsQ0FBT3FDLEtBQUk7SUFDbkMsSUFBTTJELENBQUEsR0FBSTlKLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSStILElBQUEsRUFBTStCLFVBQVU7SUFFbkMsSUFBSTFXLElBQUEsQ0FBS2lOLE1BQUEsQ0FBTzdELENBQUMsR0FBRztNQUNsQixNQUFNLElBQUlSLEtBQUEsQ0FBSyxrQ0FBQUMsTUFBQSxDQUNxQnBELEtBQUEsRUFBSSwyQ0FBMEM7SUFFbkY7SUFFRCxPQUFPMkQsQ0FBQTs7RUFHVHpFLE9BQU9pSCxLQUFBLEVBQVU7SUFDZixJQUFJNUwsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxHQUFHO01BQ3JCLE9BQU9BLEtBQUEsQ0FBS1EsSUFBQTtJQUNiLE9BQU07TUFDTCxPQUFPUixLQUFBLENBQUtHLFFBQUEsQ0FBUzRLLEdBQUEsQ0FBSXJYLElBQUEsQ0FBS3FGLE1BQU0sRUFBRWlTLElBQUEsQ0FBSyxFQUFFO0lBQzlDOztFQUdGdEksTUFDQ3FHLElBQUEsRUFBVTtJQUFBLElBQ1Z0TyxPQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQTRCO0lBQUU7TUFFOUIsU0FBVyxDQUFDc0YsS0FBQSxFQUFNbkcsS0FBSSxLQUFLbkcsSUFBQSxDQUFLMkQsS0FBQSxDQUFNMFIsSUFBQSxFQUFNdE8sT0FBTyxHQUFHO1FBQ3BELElBQUlyRyxJQUFBLENBQUtpTixNQUFBLENBQU9yQixLQUFJLEdBQUc7VUFDckIsTUFBTSxDQUFDQSxLQUFBLEVBQU1uRyxLQUFJO1FBQ2xCO01BQ0Y7TUFDRjtFQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BiSSxJQUFNbEcsU0FBQSxHQUFnQztFQUMzQ3NYLGdCQUFnQnhPLEtBQUEsRUFBVTtJQUN4QixPQUFPOUksU0FBQSxDQUFVdVgsV0FBQSxDQUFZek8sS0FBSyxLQUFLQSxLQUFBLENBQU1ZLElBQUEsQ0FBSzhOLFFBQUEsQ0FBUyxPQUFPOztFQUdwRUQsWUFBWXpPLEtBQUEsRUFBVTtJQUNwQixJQUFJLEtBQUNpSixzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFLLEdBQUc7TUFDekIsT0FBTztJQUNSO0lBRUQsUUFBUUEsS0FBQSxDQUFNWSxJQUFBO1dBQ1A7UUFDSCxPQUFPekosSUFBQSxDQUFLNEksTUFBQSxDQUFPQyxLQUFBLENBQU1oRixJQUFJLEtBQUsvRCxJQUFBLENBQUt5VyxNQUFBLENBQU8xTixLQUFBLENBQU1yRixJQUFJO1dBQ3JEO1FBQ0gsT0FDRSxPQUFPcUYsS0FBQSxDQUFNOEQsTUFBQSxLQUFXLFlBQ3hCLE9BQU85RCxLQUFBLENBQU0rRCxJQUFBLEtBQVMsWUFDdEI1TSxJQUFBLENBQUs0SSxNQUFBLENBQU9DLEtBQUEsQ0FBTWhGLElBQUk7V0FFckI7UUFDSCxPQUNFLE9BQU9nRixLQUFBLENBQU1rQixRQUFBLEtBQWEsWUFDMUIvSixJQUFBLENBQUs0SSxNQUFBLENBQU9DLEtBQUEsQ0FBTWhGLElBQUksU0FDdEJpTyxzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFBLENBQU00RyxVQUFVO1dBRTdCO1FBQ0gsT0FBT3pQLElBQUEsQ0FBSzRJLE1BQUEsQ0FBT0MsS0FBQSxDQUFNaEYsSUFBSSxLQUFLN0QsSUFBQSxDQUFLNEksTUFBQSxDQUFPQyxLQUFBLENBQU1zQixPQUFPO1dBQ3hEO1FBQ0gsT0FBT25LLElBQUEsQ0FBSzRJLE1BQUEsQ0FBT0MsS0FBQSxDQUFNaEYsSUFBSSxLQUFLL0QsSUFBQSxDQUFLeVcsTUFBQSxDQUFPMU4sS0FBQSxDQUFNckYsSUFBSTtXQUNyRDtRQUNILE9BQ0UsT0FBT3FGLEtBQUEsQ0FBTThELE1BQUEsS0FBVyxZQUN4QixPQUFPOUQsS0FBQSxDQUFNK0QsSUFBQSxLQUFTLFlBQ3RCNU0sSUFBQSxDQUFLNEksTUFBQSxDQUFPQyxLQUFBLENBQU1oRixJQUFJO1dBRXJCO1FBQ0gsT0FDRTdELElBQUEsQ0FBSzRJLE1BQUEsQ0FBT0MsS0FBQSxDQUFNaEYsSUFBSSxTQUN0QmlPLHNCQUFBLENBQUFDLGFBQUEsRUFBY2xKLEtBQUEsQ0FBTTRHLFVBQVUsU0FDOUJxQyxzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFBLENBQU02RyxhQUFhO1dBRWhDO1FBQ0gsT0FDRzdHLEtBQUEsQ0FBTTRHLFVBQUEsS0FBZSxRQUFRclAsS0FBQSxDQUFNNFAsT0FBQSxDQUFRbkgsS0FBQSxDQUFNNkcsYUFBYSxLQUM5RDdHLEtBQUEsQ0FBTTZHLGFBQUEsS0FBa0IsUUFBUXRQLEtBQUEsQ0FBTTRQLE9BQUEsQ0FBUW5ILEtBQUEsQ0FBTTRHLFVBQVUsU0FDOURxQyxzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFBLENBQU00RyxVQUFVLFNBQzdCcUMsc0JBQUEsQ0FBQUMsYUFBQSxFQUFjbEosS0FBQSxDQUFNNkcsYUFBYTtXQUVsQztRQUNILE9BQ0UxUCxJQUFBLENBQUs0SSxNQUFBLENBQU9DLEtBQUEsQ0FBTWhGLElBQUksS0FDdEIsT0FBT2dGLEtBQUEsQ0FBTWtCLFFBQUEsS0FBYSxnQkFDMUIrSCxzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFBLENBQU00RyxVQUFVOztRQUdoQyxPQUFPOzs7RUFJYitILGdCQUFnQjNPLEtBQUEsRUFBVTtJQUN4QixPQUNFQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBSyxLQUFLQSxLQUFBLENBQU1YLEtBQUEsQ0FBTTBNLEdBQUEsSUFBTzdVLFNBQUEsQ0FBVXVYLFdBQUEsQ0FBWTFDLEdBQUcsQ0FBQzs7RUFJekU2QyxxQkFBcUI1TyxLQUFBLEVBQVU7SUFDN0IsT0FBTzlJLFNBQUEsQ0FBVXVYLFdBQUEsQ0FBWXpPLEtBQUssS0FBS0EsS0FBQSxDQUFNWSxJQUFBLENBQUs4TixRQUFBLENBQVMsWUFBWTs7RUFHekVHLGdCQUFnQjdPLEtBQUEsRUFBVTtJQUN4QixPQUFPOUksU0FBQSxDQUFVdVgsV0FBQSxDQUFZek8sS0FBSyxLQUFLQSxLQUFBLENBQU1ZLElBQUEsQ0FBSzhOLFFBQUEsQ0FBUyxPQUFPOztFQUdwRUksUUFBUTdSLEVBQUEsRUFBYTtJQUNuQixRQUFRQSxFQUFBLENBQUcyRCxJQUFBO1dBQ0o7UUFBZTtVQUNsQixPQUFBbU8sZUFBQSxDQUFBQSxlQUFBLEtBQVk5UixFQUFFO1lBQUUyRCxJQUFBLEVBQU07VUFBYTtRQUNwQztXQUVJO1FBQWU7VUFDbEIsT0FBQW1PLGVBQUEsQ0FBQUEsZUFBQSxLQUFZOVIsRUFBRTtZQUFFMkQsSUFBQSxFQUFNO1VBQWE7UUFDcEM7V0FFSTtRQUFjO1VBQ2pCLE9BQUFtTyxlQUFBLENBQUFBLGVBQUEsS0FBWTlSLEVBQUU7WUFBRTJELElBQUEsRUFBTTtZQUFjNUYsSUFBQSxFQUFNN0QsSUFBQSxDQUFLb0UsUUFBQSxDQUFTMEIsRUFBQSxDQUFHakMsSUFBSTtVQUFDO1FBQ2pFO1dBRUk7UUFBYTtVQUNoQixJQUFNO1lBQUVzRyxPQUFBO1lBQVN0RyxJQUFBLEVBQUFvQztVQUFNLElBQUdILEVBQUE7VUFHMUIsSUFBSTlGLElBQUEsQ0FBSytILE1BQUEsQ0FBT29DLE9BQUEsRUFBU2xFLEtBQUksR0FBRztZQUM5QixPQUFPSCxFQUFBO1VBQ1I7VUFJRCxJQUFJOUYsSUFBQSxDQUFLZ0osU0FBQSxDQUFVL0MsS0FBQSxFQUFNa0UsT0FBTyxHQUFHO1lBQ2pDLE9BQUF5TixlQUFBLENBQUFBLGVBQUEsS0FBWTlSLEVBQUU7Y0FBRWpDLElBQUEsRUFBTXNHLE9BQUE7Y0FBU0EsT0FBQSxFQUFTbEU7WUFBSTtVQUM3QztVQVFELElBQU00UixXQUFBLEdBQWM3WCxJQUFBLENBQUs0RixTQUFBLENBQVVLLEtBQUEsRUFBTUgsRUFBRTtVQUMzQyxJQUFNZ1MsY0FBQSxHQUFpQjlYLElBQUEsQ0FBSzRGLFNBQUEsQ0FBVTVGLElBQUEsQ0FBS3VELElBQUEsQ0FBSzBDLEtBQUksR0FBR0gsRUFBRTtVQUN6RCxPQUFBOFIsZUFBQSxDQUFBQSxlQUFBLEtBQVk5UixFQUFFO1lBQUVqQyxJQUFBLEVBQU1nVSxXQUFBO1lBQWExTixPQUFBLEVBQVMyTjtVQUFjO1FBQzNEO1dBRUk7UUFBZTtVQUNsQixPQUFBRixlQUFBLENBQUFBLGVBQUEsS0FBWTlSLEVBQUU7WUFBRTJELElBQUEsRUFBTTtVQUFhO1FBQ3BDO1dBRUk7UUFBZTtVQUNsQixPQUFBbU8sZUFBQSxDQUFBQSxlQUFBLEtBQVk5UixFQUFFO1lBQUUyRCxJQUFBLEVBQU07VUFBYTtRQUNwQztXQUVJO1FBQVk7VUFDZixJQUFNO1lBQUVnRyxVQUFBO1lBQVlDO1VBQWUsSUFBRzVKLEVBQUE7VUFDdEMsT0FBQThSLGVBQUEsQ0FBQUEsZUFBQSxLQUFZOVIsRUFBRTtZQUFFMkosVUFBQSxFQUFZQyxhQUFBO1lBQWVBLGFBQUEsRUFBZUQ7VUFBVTtRQUNyRTtXQUVJO1FBQWlCO1VBQ3BCLElBQU07WUFBRUEsVUFBQSxFQUFBWSxXQUFBO1lBQVlYLGFBQUEsRUFBQUs7VUFBZSxJQUFHakssRUFBQTtVQUV0QyxJQUFJdUssV0FBQSxJQUFjLE1BQU07WUFDdEIsT0FBQXVILGVBQUEsQ0FBQUEsZUFBQSxLQUNLOVIsRUFBRTtjQUNMMkosVUFBQSxFQUFZTSxjQUFBO2NBQ1pMLGFBQUEsRUFBZTtZQUFJO1VBRXRCLFdBQVVLLGNBQUEsSUFBaUIsTUFBTTtZQUNoQyxPQUFBNkgsZUFBQSxDQUFBQSxlQUFBLEtBQ0s5UixFQUFFO2NBQ0wySixVQUFBLEVBQVk7Y0FDWkMsYUFBQSxFQUFlVztZQUFtQjtVQUVyQyxPQUFNO1lBQ0wsT0FBQXVILGVBQUEsQ0FBQUEsZUFBQSxLQUFZOVIsRUFBRTtjQUFFMkosVUFBQSxFQUFZTSxjQUFBO2NBQWVMLGFBQUEsRUFBZVc7WUFBVTtVQUNyRTtRQUNGO1dBRUk7UUFBYztVQUNqQixPQUFBdUgsZUFBQSxDQUFBQSxlQUFBLEtBQVk5UixFQUFFO1lBQUUyRCxJQUFBLEVBQU07WUFBYzVGLElBQUEsRUFBTTdELElBQUEsQ0FBS3VELElBQUEsQ0FBS3VDLEVBQUEsQ0FBR2pDLElBQUk7VUFBQztRQUM3RDs7RUFFTDs7QUM3VEYsSUFBTWtVLGVBQUEsR0FBa0IsbUJBQUkxUixPQUFBLENBQU87QUFFdEIsSUFBQTNELFFBQUEsR0FDWG1HLEtBQUEsSUFDbUI7RUFDbkIsSUFBTW1QLGNBQUEsR0FBaUJELGVBQUEsQ0FBZ0IzSyxHQUFBLENBQUl2RSxLQUFLO0VBQ2hELElBQUltUCxjQUFBLEtBQW1CLFFBQVc7SUFDaEMsT0FBT0EsY0FBQTtFQUNSO0VBRUQsSUFBSSxLQUFDbEcsc0JBQUEsQ0FBQUMsYUFBQSxFQUFjbEosS0FBSyxHQUFHO0lBQ3pCLE9BQU87RUFDUjtFQUVELElBQU1vUCxTQUFBLEdBQ0osT0FBT3BQLEtBQUEsQ0FBTWxJLE9BQUEsS0FBWSxjQUN6QixPQUFPa0ksS0FBQSxDQUFNaEksS0FBQSxLQUFVLGNBQ3ZCLE9BQU9nSSxLQUFBLENBQU0xSCxjQUFBLEtBQW1CLGNBQ2hDLE9BQU8wSCxLQUFBLENBQU0zRyxXQUFBLEtBQWdCLGNBQzdCLE9BQU8yRyxLQUFBLENBQU12RyxlQUFBLEtBQW9CLGNBQ2pDLE9BQU91RyxLQUFBLENBQU0xRyxjQUFBLEtBQW1CLGNBQ2hDLE9BQU8wRyxLQUFBLENBQU16RyxVQUFBLEtBQWUsY0FDNUIsT0FBT3lHLEtBQUEsQ0FBTXRHLFVBQUEsS0FBZSxjQUM1QixPQUFPc0csS0FBQSxDQUFNcVAsaUJBQUEsS0FBc0IsY0FDbkMsT0FBT3JQLEtBQUEsQ0FBTXNQLFFBQUEsS0FBYSxjQUMxQixPQUFPdFAsS0FBQSxDQUFNdVAsWUFBQSxLQUFpQixjQUM5QixPQUFPdlAsS0FBQSxDQUFNd1AsTUFBQSxLQUFXLGNBQ3hCLE9BQU94UCxLQUFBLENBQU1sRixhQUFBLEtBQWtCLGNBQy9CLE9BQU9rRixLQUFBLENBQU15UCxRQUFBLEtBQWEsY0FDMUIsT0FBT3pQLEtBQUEsQ0FBTXJFLFVBQUEsS0FBZSxjQUM1QixPQUFPcUUsS0FBQSxDQUFNbEgsYUFBQSxLQUFrQixlQUM5QmtILEtBQUEsQ0FBTTFGLEtBQUEsS0FBVSxZQUFRMk8sc0JBQUEsQ0FBQUMsYUFBQSxFQUFjbEosS0FBQSxDQUFNMUYsS0FBSyxPQUNqRDBGLEtBQUEsQ0FBTXNELFNBQUEsS0FBYyxRQUFRL0wsS0FBQSxDQUFNNFAsT0FBQSxDQUFRbkgsS0FBQSxDQUFNc0QsU0FBUyxNQUMxRHJNLElBQUEsQ0FBSzRVLFVBQUEsQ0FBVzdMLEtBQUEsQ0FBTTBELFFBQVEsS0FDOUJ4TSxTQUFBLENBQVV5WCxlQUFBLENBQWdCM08sS0FBQSxDQUFNMFAsVUFBVTtFQUM1Q1IsZUFBQSxDQUFnQnRCLEdBQUEsQ0FBSTVOLEtBQUEsRUFBT29QLFNBQVE7RUFDbkMsT0FBT0EsU0FBQTtBQUNUO0FDNHFCTyxJQUFNdFksTUFBQSxHQUEwQjtFQUNyQ2UsTUFBTXdMLE1BQUEsRUFBUXJGLE9BQUEsRUFBTztJQUNuQixPQUFPcUYsTUFBQSxDQUFPeEwsS0FBQSxDQUFNbUcsT0FBTzs7RUFHN0JsRyxRQUFRdUwsTUFBQSxFQUFRVCxHQUFBLEVBQUs1QyxLQUFBLEVBQUs7SUFDeEJxRCxNQUFBLENBQU92TCxPQUFBLENBQVE4SyxHQUFBLEVBQUs1QyxLQUFLOztFQUczQmpJLE1BQU1zTCxNQUFBLEVBQVFzTSxFQUFBLEVBQUkzUixPQUFBLEVBQU87SUFDdkIsT0FBT3FGLE1BQUEsQ0FBT3RMLEtBQUEsQ0FBTTRYLEVBQUEsRUFBSTNSLE9BQU87O0VBR2pDL0YsT0FBT29MLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTNSLE9BQUEsRUFBTztJQUN4QixPQUFPcUYsTUFBQSxDQUFPcEwsTUFBQSxDQUFPMFgsRUFBQSxFQUFJM1IsT0FBTzs7RUFHbEM1RixlQUFlaUwsTUFBQSxFQUFvQjtJQUFBLElBQVpyRixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7SUFDL0IsSUFBTTtNQUFFMlIsSUFBQSxHQUFPO0lBQWEsSUFBRzVSLE9BQUE7SUFDL0JxRixNQUFBLENBQU9qTCxjQUFBLENBQWV3WCxJQUFJOztFQUc1QnZYLGNBQWNnTCxNQUFBLEVBQW9CO0lBQUEsSUFBWnJGLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztJQUM5QixJQUFNO01BQUUyUixJQUFBLEdBQU87SUFBYSxJQUFHNVIsT0FBQTtJQUMvQnFGLE1BQUEsQ0FBT2hMLGFBQUEsQ0FBY3VYLElBQUk7O0VBRzNCdFgsZUFBZStLLE1BQUEsRUFBUXJGLE9BQUEsRUFBTztJQUM1QnFGLE1BQUEsQ0FBTy9LLGNBQUEsQ0FBZTBGLE9BQU87O0VBRy9CdkYsTUFBTTRLLE1BQUEsRUFBUXNNLEVBQUEsRUFBRTtJQUNkLE9BQU90TSxNQUFBLENBQU81SyxLQUFBLENBQU1rWCxFQUFFOztFQUd4QmpYLGdCQUFnQjJLLE1BQUEsRUFBMEQ7SUFBQSxJQUExQ3JGLE9BQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBd0M7SUFDdEUsT0FBT29GLE1BQUEsQ0FBTzNLLGVBQUEsQ0FBZ0JzRixPQUFPOztFQUd2Q3JGLElBQUkwSyxNQUFBLEVBQVFzTSxFQUFBLEVBQUU7SUFDWixPQUFPdE0sTUFBQSxDQUFPMUssR0FBQSxDQUFJZ1gsRUFBRTs7RUFHdEIvVyxNQUFNeUssTUFBQSxFQUFRc00sRUFBQSxFQUFFO0lBQ2QsT0FBT3RNLE1BQUEsQ0FBT3pLLEtBQUEsQ0FBTStXLEVBQUU7O0VBR3hCOVcsU0FBU3dLLE1BQUEsRUFBUXNNLEVBQUEsRUFBRTtJQUNqQixPQUFPdE0sTUFBQSxDQUFPeEssUUFBQSxDQUFTOFcsRUFBRTs7RUFHM0IxVyxVQUFVb0ssTUFBQSxFQUFRc0YsT0FBQSxFQUFPO0lBQ3ZCLE9BQU90RixNQUFBLENBQU9wSyxTQUFBLENBQVUwUCxPQUFPOztFQUdqQ3pQLFdBQVdtSyxNQUFBLEVBQVFzRixPQUFBLEVBQU87SUFDeEIsT0FBT3RGLE1BQUEsQ0FBT25LLFVBQUEsQ0FBV3lQLE9BQU87O0VBR2xDeFAsUUFBUWtLLE1BQUEsRUFBUWpHLEtBQUEsRUFBSTtJQUNsQixPQUFPaUcsTUFBQSxDQUFPbEssT0FBQSxDQUFRaUUsS0FBSTs7RUFHNUJoRSxTQUFTaUssTUFBQSxFQUFRc0YsT0FBQSxFQUFPO0lBQ3RCLE9BQU90RixNQUFBLENBQU9qSyxRQUFBLENBQVN1UCxPQUFPOztFQUdoQ3RQLFlBQVlnSyxNQUFBLEVBQU07SUFDaEJBLE1BQUEsQ0FBT2hLLFdBQUEsQ0FBVzs7RUFHcEJDLGVBQWUrSixNQUFBLEVBQVF3TSxTQUFBLEVBQVU3UixPQUFBLEVBQU87SUFDdENxRixNQUFBLENBQU8vSixjQUFBLENBQWV1VyxTQUFBLEVBQVU3UixPQUFPOztFQUd6Q3pFLFdBQVc4SixNQUFBLEVBQVFFLEtBQUEsRUFBSTtJQUNyQkYsTUFBQSxDQUFPOUosVUFBQSxDQUFXZ0ssS0FBSTs7RUFHeEI5SixnQkFBZ0I0SixNQUFBLEVBQU07SUFDcEJBLE1BQUEsQ0FBTzVKLGVBQUEsQ0FBZTs7RUFHeEJDLFdBQVcySixNQUFBLEVBQVFVLElBQUEsRUFBSTtJQUNyQlYsTUFBQSxDQUFPM0osVUFBQSxDQUFXcUssSUFBSTs7RUFHeEJwSyxRQUFRMEosTUFBQSxFQUFRckQsS0FBQSxFQUFLO0lBQ25CLE9BQU9xRCxNQUFBLENBQU8xSixPQUFBLENBQVFxRyxLQUFLOztFQUc3QnBHLE9BQU95SixNQUFBLEVBQVEvRixNQUFBLEVBQU9xUyxFQUFBLEVBQUU7SUFDdEIsT0FBT3RNLE1BQUEsQ0FBT3pKLE1BQUEsQ0FBTzBELE1BQUEsRUFBT3FTLEVBQUU7O0VBR2hDOVYsU0FBU21HLEtBQUEsRUFBVTtJQUNqQixPQUFPbkcsUUFBQSxDQUFTbUcsS0FBSzs7RUFHdkJxUCxrQkFBa0JoTSxNQUFBLEVBQVFzRixPQUFBLEVBQU87SUFDL0IsT0FBT3RGLE1BQUEsQ0FBT2dNLGlCQUFBLENBQWtCMUcsT0FBTzs7RUFHekM3TyxRQUFRdUosTUFBQSxFQUFRc0YsT0FBQSxFQUFPO0lBQ3JCLE9BQU90RixNQUFBLENBQU92SixPQUFBLENBQVE2TyxPQUFPOztFQUcvQjVPLE1BQU1zSixNQUFBLEVBQVEvRixNQUFBLEVBQU9xUyxFQUFBLEVBQUU7SUFDckIsT0FBT3RNLE1BQUEsQ0FBT3RKLEtBQUEsQ0FBTXVELE1BQUEsRUFBT3FTLEVBQUU7O0VBRy9CTCxTQUFTak0sTUFBQSxFQUFRckQsS0FBQSxFQUFLO0lBQ3BCLE9BQU9xRCxNQUFBLENBQU9pTSxRQUFBLENBQVN0UCxLQUFLOztFQUc5QmhHLGNBQWNxSixNQUFBLEVBQU07SUFDbEIsT0FBT0EsTUFBQSxDQUFPckosYUFBQSxDQUFhOztFQUc3QnVWLGFBQWFsTSxNQUFBLEVBQWdCckQsS0FBQSxFQUFjO0lBQ3pDLE9BQU9xRCxNQUFBLENBQU9rTSxZQUFBLENBQWF2UCxLQUFLOztFQUdsQy9GLFFBQVFvSixNQUFBLEVBQVEvRixNQUFBLEVBQU9xUyxFQUFBLEVBQUU7SUFDdkIsT0FBT3RNLE1BQUEsQ0FBT3BKLE9BQUEsQ0FBUXFELE1BQUEsRUFBT3FTLEVBQUU7O0VBR2pDSCxPQUFPbk0sTUFBQSxFQUFRckQsS0FBQSxFQUFLO0lBQ2xCLE9BQU9xRCxNQUFBLENBQU9tTSxNQUFBLENBQU94UCxLQUFLOztFQUc1QjlGLEtBQUttSixNQUFBLEVBQVFzTSxFQUFBLEVBQUU7SUFDYixPQUFPdE0sTUFBQSxDQUFPbkosSUFBQSxDQUFLeVYsRUFBRTs7RUFHdkJ4VixLQUFLa0osTUFBQSxFQUFRc00sRUFBQSxFQUFJM1IsT0FBQSxFQUFPO0lBQ3RCLE9BQU9xRixNQUFBLENBQU9sSixJQUFBLENBQUt3VixFQUFBLEVBQUkzUixPQUFPOztFQUdoQzVELE9BQU9pSixNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDcEIsT0FBT3FGLE1BQUEsQ0FBT2pKLE1BQUEsQ0FBTzRELE9BQU87O0VBRzlCMUQsTUFBTStJLE1BQUEsRUFBTTtJQUNWLE9BQU9BLE1BQUEsQ0FBT3lNLFFBQUEsQ0FBUTs7RUFHeEJwVixLQUNFMkksTUFBQSxFQUNBckYsT0FBQSxFQUE4QjtJQUU5QixPQUFPcUYsTUFBQSxDQUFPM0ksSUFBQSxDQUFLc0QsT0FBTzs7RUFHNUJyRCxLQUFLMEksTUFBQSxFQUFRc00sRUFBQSxFQUFJM1IsT0FBQSxFQUFPO0lBQ3RCLE9BQU9xRixNQUFBLENBQU8xSSxJQUFBLENBQUtnVixFQUFBLEVBQUkzUixPQUFPOztFQUdoQ3BELE1BQU15SSxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDbkIsT0FBT3FGLE1BQUEsQ0FBT3pJLEtBQUEsQ0FBTW9ELE9BQU87O0VBRzdCbkQsVUFBVXdJLE1BQUEsRUFBUXJGLE9BQUEsRUFBTztJQUN2QnFGLE1BQUEsQ0FBT3hJLFNBQUEsQ0FBVW1ELE9BQU87O0VBRzFCakQsT0FBT3NJLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTNSLE9BQUEsRUFBTztJQUN4QixPQUFPcUYsTUFBQSxDQUFPdEksTUFBQSxDQUFPNFUsRUFBQSxFQUFJM1IsT0FBTzs7RUFHbENoRCxLQUFLcUksTUFBQSxFQUFRc00sRUFBQSxFQUFJM1IsT0FBQSxFQUFPO0lBQ3RCLE9BQU9xRixNQUFBLENBQU9ySSxJQUFBLENBQUsyVSxFQUFBLEVBQUkzUixPQUFPOztFQUdoQy9DLFFBQVFvSSxNQUFBLEVBQVFqRyxLQUFBLEVBQU1ZLE9BQUEsRUFBTztJQUMzQixPQUFPcUYsTUFBQSxDQUFPcEksT0FBQSxDQUFRbUMsS0FBQSxFQUFNWSxPQUFPOztFQUdyQzlDLFNBQVNtSSxNQUFBLEVBQU07SUFDYixPQUFPQSxNQUFBLENBQU9uSSxRQUFBLENBQVE7O0VBR3hCQyxNQUFNa0ksTUFBQSxFQUFRc00sRUFBQSxFQUFJM1IsT0FBQSxFQUFPO0lBQ3ZCLE9BQU9xRixNQUFBLENBQU9sSSxLQUFBLENBQU13VSxFQUFBLEVBQUkzUixPQUFPOztFQUdqQzVDLFNBQVNpSSxNQUFBLEVBQVEvRixNQUFBLEVBQU9VLE9BQUEsRUFBTztJQUM3QixPQUFPcUYsTUFBQSxDQUFPakksUUFBQSxDQUFTa0MsTUFBQSxFQUFPVSxPQUFPOztFQUd2QzNDLFVBQVVnSSxNQUFBLEVBQU07SUFDZCxPQUFPQSxNQUFBLENBQU9oSSxTQUFBLENBQVM7O0VBR3pCQyxVQUFVK0gsTUFBQSxFQUFRckYsT0FBQSxFQUFPO0lBQ3ZCLE9BQU9xRixNQUFBLENBQU8vSCxTQUFBLENBQVUwQyxPQUFPOztFQUdqQ3pDLFNBQVM4SCxNQUFBLEVBQVFyRixPQUFBLEVBQU87SUFDdEIsT0FBT3FGLE1BQUEsQ0FBTzlILFFBQUEsQ0FBU3lDLE9BQU87O0VBR2hDeEMsTUFBTTZILE1BQUEsRUFBUXNNLEVBQUEsRUFBSTVCLEVBQUEsRUFBRTtJQUNsQixPQUFPMUssTUFBQSxDQUFPN0gsS0FBQSxDQUFNbVUsRUFBQSxFQUFJNUIsRUFBRTs7RUFHNUJ0UyxTQUFTNEgsTUFBQSxFQUFRd0csTUFBQSxFQUFPN0wsT0FBQSxFQUFPO0lBQzdCLE9BQU9xRixNQUFBLENBQU81SCxRQUFBLENBQVNvTyxNQUFBLEVBQU83TCxPQUFPOztFQUd2Q3RDLFVBQVUySCxNQUFBLEVBQU07SUFDZCxPQUFPQSxNQUFBLENBQU8zSCxTQUFBLENBQVM7O0VBR3pCQyxXQUFXMEgsTUFBQSxFQUFRVCxHQUFBLEVBQUc7SUFDcEJTLE1BQUEsQ0FBTzFILFVBQUEsQ0FBV2lILEdBQUc7O0VBR3ZCN0csZUFBZXNILE1BQUEsRUFBUTBNLGNBQUEsRUFBYTtJQUNsQzFNLE1BQUEsQ0FBT3RILGNBQUEsQ0FBZWdVLGNBQWE7O0VBR3JDMVQsTUFBTWdILE1BQUEsRUFBUXNNLEVBQUEsRUFBRTtJQUNkLE9BQU90TSxNQUFBLENBQU9oSCxLQUFBLENBQU1zVCxFQUFFOztFQUd4QnJULE9BQU8rRyxNQUFBLEVBQVFzTSxFQUFBLEVBQUkzUixPQUFBLEVBQU87SUFDeEIsT0FBT3FGLE1BQUEsQ0FBTy9HLE1BQUEsQ0FBT3FULEVBQUEsRUFBSTNSLE9BQU87O0VBR2xDekIsWUFBWThHLE1BQUEsRUFBUXdHLE1BQUEsRUFBTzdMLE9BQUEsRUFBTztJQUNoQyxPQUFPcUYsTUFBQSxDQUFPOUcsV0FBQSxDQUFZc04sTUFBQSxFQUFPN0wsT0FBTzs7RUFHMUNnUyxLQUFLM00sTUFBQSxFQUFRckYsT0FBQSxFQUFPO0lBQ2xCLE9BQU9xRixNQUFBLENBQU8yTSxJQUFBLENBQUtoUyxPQUFPOztFQUc1QnRCLG1CQUFtQjJHLE1BQUEsRUFBUTRNLEVBQUEsRUFBYztJQUN2QzVNLE1BQUEsQ0FBTzNHLGtCQUFBLENBQW1CdVQsRUFBRTs7RUFFOUIvVCw4QkFBQSxFQUFnQ0EsQ0FBQ21ILE1BQUEsRUFBUTZNLFFBQUEsRUFBVUMsT0FBQSxLQUFXO0lBQzVELE9BQU85TSxNQUFBLENBQU9uSCw4QkFBQSxDQUErQmdVLFFBQUEsRUFBVUMsT0FBTztFQUNoRTs7QUNyN0JLLElBQU1uWixRQUFBLEdBQThCO0VBQ3pDb1osV0FBV3BRLEtBQUEsRUFBVTtJQUNuQixPQUFPN0ksSUFBQSxDQUFLNEksTUFBQSxDQUFPQyxLQUFLLEtBQUszSSxLQUFBLENBQU13VCxPQUFBLENBQVE3SyxLQUFLLEtBQUt6SSxLQUFBLENBQU00UCxPQUFBLENBQVFuSCxLQUFLO0VBQzFFOztBQWtCSyxJQUFNdEksSUFBQSxHQUFzQjtFQUNqQzJZLE9BQU9yUSxLQUFBLEVBQVU7SUFDZixPQUNFQyxLQUFBLENBQU1DLE9BQUEsQ0FBUUYsS0FBSyxLQUFLQSxLQUFBLENBQU05QixNQUFBLEtBQVcsS0FBSzhCLEtBQUEsQ0FBTVgsS0FBQSxDQUFNbEksSUFBQSxDQUFLNEksTUFBTTtFQUV6RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjSyxJQUFNMUksS0FBQSxHQUF3QjtFQUNuQ3VILFFBQVF0QixNQUFBLEVBQWNpQixPQUFBLEVBQWM7SUFDbEMsSUFBTXVILE1BQUEsR0FBUzNPLElBQUEsQ0FBS3lILE9BQUEsQ0FBUXRCLE1BQUEsQ0FBTXRDLElBQUEsRUFBTXVELE9BQUEsQ0FBUXZELElBQUk7SUFFcEQsSUFBSThLLE1BQUEsS0FBVyxHQUFHO01BQ2hCLElBQUl4SSxNQUFBLENBQU13RyxNQUFBLEdBQVN2RixPQUFBLENBQVF1RixNQUFBLEVBQVEsT0FBTztNQUMxQyxJQUFJeEcsTUFBQSxDQUFNd0csTUFBQSxHQUFTdkYsT0FBQSxDQUFRdUYsTUFBQSxFQUFRLE9BQU87TUFDMUMsT0FBTztJQUNSO0lBRUQsT0FBT2dDLE1BQUE7O0VBR1R0RyxRQUFRbEMsTUFBQSxFQUFjaUIsT0FBQSxFQUFjO0lBQ2xDLE9BQU9sSCxLQUFBLENBQU11SCxPQUFBLENBQVF0QixNQUFBLEVBQU9pQixPQUFPLE1BQU07O0VBRzNDbUIsU0FBU3BDLE1BQUEsRUFBY2lCLE9BQUEsRUFBYztJQUNuQyxPQUFPbEgsS0FBQSxDQUFNdUgsT0FBQSxDQUFRdEIsTUFBQSxFQUFPaUIsT0FBTyxNQUFNOztFQUczQ1csT0FBTzVCLE1BQUEsRUFBY2lCLE9BQUEsRUFBYztJQUVqQyxPQUNFakIsTUFBQSxDQUFNd0csTUFBQSxLQUFXdkYsT0FBQSxDQUFRdUYsTUFBQSxJQUFVM00sSUFBQSxDQUFLK0gsTUFBQSxDQUFPNUIsTUFBQSxDQUFNdEMsSUFBQSxFQUFNdUQsT0FBQSxDQUFRdkQsSUFBSTs7RUFJM0U2UCxRQUFRN0ssS0FBQSxFQUFVO0lBQ2hCLFdBQ0VpSixzQkFBQSxDQUFBQyxhQUFBLEVBQWNsSixLQUFLLEtBQ25CLE9BQU9BLEtBQUEsQ0FBTThELE1BQUEsS0FBVyxZQUN4QjNNLElBQUEsQ0FBSzRJLE1BQUEsQ0FBT0MsS0FBQSxDQUFNaEYsSUFBSTs7RUFJMUIrQixVQUNFTyxNQUFBLEVBQ0FMLEVBQUEsRUFDbUM7SUFBQSxJQUFuQ2UsT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFpQztJQUVqQyxXQUFPbUssWUFBQSxDQUFBb0QsT0FBQSxFQUFRbE8sTUFBQSxFQUFPeUQsQ0FBQSxJQUFJO01BQ3hCLElBQUlBLENBQUEsS0FBTSxNQUFNO1FBQ2QsT0FBTztNQUNSO01BQ0QsSUFBTTtRQUFFNUQsUUFBQSxHQUFXO01BQVcsSUFBR2EsT0FBQTtNQUNqQyxJQUFNO1FBQUVoRCxJQUFBLEVBQUFvQyxLQUFBO1FBQU0wRztNQUFRLElBQUcvQyxDQUFBO01BRXpCLFFBQVE5RCxFQUFBLENBQUcyRCxJQUFBO2FBQ0o7YUFDQTtVQUFhO1lBQ2hCRyxDQUFBLENBQUUvRixJQUFBLEdBQU83RCxJQUFBLENBQUs0RixTQUFBLENBQVVLLEtBQUEsRUFBTUgsRUFBQSxFQUFJZSxPQUFPO1lBQ3pDO1VBQ0Q7YUFFSTtVQUFlO1lBQ2xCLElBQ0U3RyxJQUFBLENBQUsrSCxNQUFBLENBQU9qQyxFQUFBLENBQUdqQyxJQUFBLEVBQU1vQyxLQUFJLE1BQ3hCSCxFQUFBLENBQUc2RyxNQUFBLEdBQVNBLE1BQUEsSUFDVjdHLEVBQUEsQ0FBRzZHLE1BQUEsS0FBV0EsTUFBQSxJQUFVM0csUUFBQSxLQUFhLFlBQ3hDO2NBQ0E0RCxDQUFBLENBQUUrQyxNQUFBLElBQVU3RyxFQUFBLENBQUc4RyxJQUFBLENBQUs3RixNQUFBO1lBQ3JCO1lBRUQ7VUFDRDthQUVJO1VBQWM7WUFDakIsSUFBSS9HLElBQUEsQ0FBSytILE1BQUEsQ0FBT2pDLEVBQUEsQ0FBR2pDLElBQUEsRUFBTW9DLEtBQUksR0FBRztjQUM5QjJELENBQUEsQ0FBRStDLE1BQUEsSUFBVTdHLEVBQUEsQ0FBR2lFLFFBQUE7WUFDaEI7WUFFREgsQ0FBQSxDQUFFL0YsSUFBQSxHQUFPN0QsSUFBQSxDQUFLNEYsU0FBQSxDQUFVSyxLQUFBLEVBQU1ILEVBQUEsRUFBSWUsT0FBTztZQUN6QztVQUNEO2FBRUk7VUFBZTtZQUNsQixJQUFJN0csSUFBQSxDQUFLK0gsTUFBQSxDQUFPakMsRUFBQSxDQUFHakMsSUFBQSxFQUFNb0MsS0FBSSxLQUFLSCxFQUFBLENBQUc2RyxNQUFBLElBQVVBLE1BQUEsRUFBUTtjQUNyRC9DLENBQUEsQ0FBRStDLE1BQUEsSUFBVWhGLElBQUEsQ0FBS0QsR0FBQSxDQUFJaUYsTUFBQSxHQUFTN0csRUFBQSxDQUFHNkcsTUFBQSxFQUFRN0csRUFBQSxDQUFHOEcsSUFBQSxDQUFLN0YsTUFBTTtZQUN4RDtZQUVEO1VBQ0Q7YUFFSTtVQUFlO1lBQ2xCLElBQUkvRyxJQUFBLENBQUsrSCxNQUFBLENBQU9qQyxFQUFBLENBQUdqQyxJQUFBLEVBQU1vQyxLQUFJLEtBQUtqRyxJQUFBLENBQUtzSSxVQUFBLENBQVd4QyxFQUFBLENBQUdqQyxJQUFBLEVBQU1vQyxLQUFJLEdBQUc7Y0FDaEUsT0FBTztZQUNSO1lBRUQyRCxDQUFBLENBQUUvRixJQUFBLEdBQU83RCxJQUFBLENBQUs0RixTQUFBLENBQVVLLEtBQUEsRUFBTUgsRUFBQSxFQUFJZSxPQUFPO1lBQ3pDO1VBQ0Q7YUFFSTtVQUFjO1lBQ2pCLElBQUk3RyxJQUFBLENBQUsrSCxNQUFBLENBQU9qQyxFQUFBLENBQUdqQyxJQUFBLEVBQU1vQyxLQUFJLEdBQUc7Y0FDOUIsSUFBSUgsRUFBQSxDQUFHaUUsUUFBQSxLQUFhNEMsTUFBQSxJQUFVM0csUUFBQSxJQUFZLE1BQU07Z0JBQzlDLE9BQU87Y0FDUixXQUNDRixFQUFBLENBQUdpRSxRQUFBLEdBQVc0QyxNQUFBLElBQ2I3RyxFQUFBLENBQUdpRSxRQUFBLEtBQWE0QyxNQUFBLElBQVUzRyxRQUFBLEtBQWEsV0FDeEM7Z0JBQ0E0RCxDQUFBLENBQUUrQyxNQUFBLElBQVU3RyxFQUFBLENBQUdpRSxRQUFBO2dCQUVmSCxDQUFBLENBQUUvRixJQUFBLEdBQU83RCxJQUFBLENBQUs0RixTQUFBLENBQVVLLEtBQUEsRUFBTUgsRUFBQSxFQUFFcVQsZUFBQSxDQUFBQSxlQUFBLEtBQzNCdFMsT0FBTztrQkFDVmIsUUFBQSxFQUFVO2dCQUFTLEVBQ3BCO2NBQ0Y7WUFDRixPQUFNO2NBQ0w0RCxDQUFBLENBQUUvRixJQUFBLEdBQU83RCxJQUFBLENBQUs0RixTQUFBLENBQVVLLEtBQUEsRUFBTUgsRUFBQSxFQUFJZSxPQUFPO1lBQzFDO1lBRUQ7VUFDRDs7SUFFTCxDQUFDO0VBQ0g7O0FDMUtGLElBQUl1UyxTQUFBLEdBQWtDO0FBa0IvQixJQUFNOVksUUFBQSxHQUE4QjtFQUN6QytZLFlBQVlDLFFBQUEsRUFBOEI7SUFDeENGLFNBQUEsR0FBWUUsUUFBQTs7RUFHZDVMLFVBQVU3RSxLQUFBLEVBQVU7SUFDbEIsT0FBTzBRLElBQUEsQ0FBSzdMLFNBQUEsQ0FBVTdFLEtBQUEsRUFBT3VRLFNBQVM7RUFDeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM4Q0ssSUFBTTVZLElBQUEsR0FBc0I7RUFDakN1SCxPQUFPNkUsSUFBQSxFQUFZeEYsT0FBQSxFQUE4QztJQUFBLElBQS9CUCxPQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQTZCO0lBQzdELElBQU07TUFBRTBTLEtBQUEsR0FBUTtJQUFPLElBQUczUyxPQUFBO0lBRTFCLFNBQVM0UyxTQUFTOU4sR0FBQSxFQUFxQjtNQUMvQixJQUFXZ0ksSUFBQSxHQUFJckIsd0JBQUEsQ0FBSzNHLEdBQUEsRUFBRytOLFdBQUE7TUFFN0IsT0FBTy9GLElBQUE7SUFDVDtJQUVBLE9BQU9oQyxXQUFBLENBQ0w2SCxLQUFBLEdBQVFDLFFBQUEsQ0FBUzdNLElBQUksSUFBSUEsSUFBQSxFQUN6QjRNLEtBQUEsR0FBUUMsUUFBQSxDQUFTclMsT0FBTyxJQUFJQSxPQUFPOztFQUl2Q3FHLE9BQU81RSxLQUFBLEVBQVU7SUFDZixXQUFPaUosc0JBQUEsQ0FBQUMsYUFBQSxFQUFjbEosS0FBSyxLQUFLLE9BQU9BLEtBQUEsQ0FBTStELElBQUEsS0FBUzs7RUFHdkQrTSxXQUFXOVEsS0FBQSxFQUFVO0lBQ25CLE9BQU9DLEtBQUEsQ0FBTUMsT0FBQSxDQUFRRixLQUFLLEtBQUtBLEtBQUEsQ0FBTVgsS0FBQSxDQUFNME0sR0FBQSxJQUFPcFUsSUFBQSxDQUFLaU4sTUFBQSxDQUFPbUgsR0FBRyxDQUFDOztFQUdwRThCLFlBQVluRixLQUFBLEVBQVU7SUFDcEIsT0FBUUEsS0FBQSxDQUF3QjNFLElBQUEsS0FBUzs7RUFHM0NxSSxRQUFRckksSUFBQSxFQUFZMkUsS0FBQSxFQUFvQjtJQUN0QyxTQUFXOUYsR0FBQSxJQUFPOEYsS0FBQSxFQUFPO01BQ3ZCLElBQUk5RixHQUFBLEtBQVEsUUFBUTtRQUNsQjtNQUNEO01BRUQsSUFDRSxDQUFDbUIsSUFBQSxDQUFLa0QsY0FBQSxDQUFlckUsR0FBRyxLQUN4Qm1CLElBQUEsQ0FBaUJuQixHQUFBLE1BQVM4RixLQUFBLENBQWtCOUYsR0FBQSxHQUM1QztRQUNBLE9BQU87TUFDUjtJQUNGO0lBRUQsT0FBTzs7RUFHVG1PLFlBQ0V4TixLQUFBLEVBQ0F3TixXQUFBLEVBQTZCO0lBRTdCLElBQUlDLE1BQUEsR0FBb0QsQ0FDdEQ7TUFBRTdXLElBQUEsRUFBSThXLGVBQUEsS0FBTzFOLEtBQUk7SUFBSTtJQUd2QixTQUFXMk4sR0FBQSxJQUFPSCxXQUFBLEVBQWE7TUFDN0IsSUFBTTtVQUFFakgsTUFBQTtVQUFRQyxLQUFBO1VBQU9vSCxLQUFBLEVBQU9DO1FBQTBCLElBQUdGLEdBQUE7UUFBVHBHLElBQUEsR0FBSXJCLHdCQUFBLENBQUt5SCxHQUFBLEVBQUdHLFlBQUE7TUFDOUQsSUFBTSxDQUFDM0csTUFBQSxFQUFPVCxJQUFHLElBQUkxUyxLQUFBLENBQU1rQixLQUFBLENBQU15WSxHQUFHO01BQ3BDLElBQU1sTCxLQUFBLEdBQU87TUFDYixJQUFJc0wsT0FBQSxHQUFVO01BQ2QsSUFBTUMsZUFBQSxHQUFrQjdHLE1BQUEsQ0FBTTVHLE1BQUE7TUFDOUIsSUFBTTBOLGFBQUEsR0FBZ0J2SCxJQUFBLENBQUluRyxNQUFBO01BQzFCLElBQU1xTixLQUFBLEdBQVFDLGVBQUEsYUFBQUEsZUFBQSxLQUFlLFNBQWZBLGVBQUEsR0FBbUJyTyxNQUFBLENBQU8wTyxNQUFBO01BRXhDLFNBQVc7UUFBRXRYLElBQUEsRUFBQW1UO1dBQVUwRCxNQUFBLEVBQVE7UUFDN0IsSUFBTTtVQUFFOVM7WUFBV29QLEtBQUEsQ0FBS3ZKLElBQUE7UUFDeEIsSUFBTTJOLFNBQUEsR0FBWUosT0FBQTtRQUNsQkEsT0FBQSxJQUFXcFQsTUFBQTtRQUdYLElBQUlxVCxlQUFBLElBQW1CRyxTQUFBLElBQWFKLE9BQUEsSUFBV0UsYUFBQSxFQUFlO1VBQzVETCxLQUFBLENBQU03RCxLQUFBLEVBQU14QyxJQUFJO1VBQ2hCOUUsS0FBQSxDQUFLckgsSUFBQSxDQUFLO1lBQUV4RSxJQUFBLEVBQUFtVDtVQUFJLENBQUU7VUFDbEI7UUFDRDtRQUdELElBQ0dpRSxlQUFBLEtBQW9CQyxhQUFBLEtBQ2xCRCxlQUFBLEtBQW9CRCxPQUFBLElBQVdFLGFBQUEsS0FBa0JFLFNBQUEsS0FDcERILGVBQUEsR0FBa0JELE9BQUEsSUFDbEJFLGFBQUEsR0FBZ0JFLFNBQUEsSUFDZkYsYUFBQSxLQUFrQkUsU0FBQSxJQUFhQSxTQUFBLEtBQWMsR0FDOUM7VUFDQTFMLEtBQUEsQ0FBS3JILElBQUEsQ0FBSztZQUFFeEUsSUFBQSxFQUFBbVQ7VUFBSSxDQUFFO1VBQ2xCO1FBQ0Q7UUFLRCxJQUFJcUUsTUFBQSxHQUFTckUsS0FBQTtRQUNiLElBQUlySixPQUFBLEdBQU07UUFDVixJQUFJQyxNQUFBLEdBQUs7UUFFVCxJQUFJc04sYUFBQSxHQUFnQkYsT0FBQSxFQUFTO1VBQzNCLElBQU1NLEdBQUEsR0FBTUosYUFBQSxHQUFnQkUsU0FBQTtVQUM1QnhOLE1BQUEsR0FBUTtZQUFFL0osSUFBQSxFQUFJOFcsZUFBQSxDQUFBQSxlQUFBLEtBQU9VLE1BQU07Y0FBRTVOLElBQUEsRUFBTTROLE1BQUEsQ0FBTzVOLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTXVULEdBQUc7WUFBQzs7VUFDekRELE1BQUEsR0FBTVYsZUFBQSxDQUFBQSxlQUFBLEtBQVFVLE1BQU07WUFBRTVOLElBQUEsRUFBTTROLE1BQUEsQ0FBTzVOLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTSxHQUFHdVQsR0FBRztXQUFHO1FBQ3hEO1FBRUQsSUFBSUwsZUFBQSxHQUFrQkcsU0FBQSxFQUFXO1VBQy9CLElBQU1HLElBQUEsR0FBTU4sZUFBQSxHQUFrQkcsU0FBQTtVQUM5QnpOLE9BQUEsR0FBUztZQUFFOUosSUFBQSxFQUFJOFcsZUFBQSxDQUFBQSxlQUFBLEtBQU9VLE1BQU07Y0FBRTVOLElBQUEsRUFBTTROLE1BQUEsQ0FBTzVOLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTSxHQUFHd1QsSUFBRztZQUFDOztVQUM3REYsTUFBQSxHQUFNVixlQUFBLENBQUFBLGVBQUEsS0FBUVUsTUFBTTtZQUFFNU4sSUFBQSxFQUFNNE4sTUFBQSxDQUFPNU4sSUFBQSxDQUFLMUYsS0FBQSxDQUFNd1QsSUFBRztXQUFHO1FBQ3JEO1FBRURWLEtBQUEsQ0FBTVEsTUFBQSxFQUFRN0csSUFBSTtRQUVsQixJQUFJN0csT0FBQSxFQUFRO1VBQ1YrQixLQUFBLENBQUtySCxJQUFBLENBQUtzRixPQUFNO1FBQ2pCO1FBRUQrQixLQUFBLENBQUtySCxJQUFBLENBQUs7VUFBRXhFLElBQUEsRUFBTXdYO1FBQVE7UUFFMUIsSUFBSXpOLE1BQUEsRUFBTztVQUNUOEIsS0FBQSxDQUFLckgsSUFBQSxDQUFLdUYsTUFBSztRQUNoQjtNQUNGO01BRUQ4TSxNQUFBLEdBQVNoTCxLQUFBO0lBQ1Y7SUFFRCxJQUFJZ0wsTUFBQSxDQUFPOVMsTUFBQSxHQUFTLEdBQUc7TUFDckIsSUFBSTRULGFBQUEsR0FBZ0I7TUFDcEIsU0FBVyxDQUFDck8sS0FBQSxFQUFPc08sSUFBSSxLQUFLZixNQUFBLENBQU9nQixPQUFBLENBQU8sR0FBSTtRQUM1QyxJQUFNQyxNQUFBLEdBQVFILGFBQUE7UUFDZCxJQUFNSSxJQUFBLEdBQU1ELE1BQUEsR0FBUUYsSUFBQSxDQUFLNVgsSUFBQSxDQUFLNEosSUFBQSxDQUFLN0YsTUFBQTtRQUNuQyxJQUFNZ0QsUUFBQSxHQUF5QjtVQUFFN0UsS0FBQSxFQUFBNFYsTUFBQTtVQUFPdFosR0FBQSxFQUFBdVo7O1FBRXhDLElBQUl6TyxLQUFBLEtBQVUsR0FBR3ZDLFFBQUEsQ0FBU2lSLE9BQUEsR0FBVTtRQUNwQyxJQUFJMU8sS0FBQSxLQUFVdU4sTUFBQSxDQUFPOVMsTUFBQSxHQUFTLEdBQUdnRCxRQUFBLENBQVNrUixNQUFBLEdBQVM7UUFFbkRMLElBQUEsQ0FBSzdRLFFBQUEsR0FBV0EsUUFBQTtRQUNoQjRRLGFBQUEsR0FBZ0JJLElBQUE7TUFDakI7SUFDRjtJQUVELE9BQU9sQixNQUFBO0VBQ1Q7O0FDL01LLElBQU1xQix3QkFBQSxHQUE0QmhQLE1BQUEsSUFBNEI7RUFDbkUsSUFBSUEsTUFBQSxDQUFPQyxTQUFBLEVBQVc7SUFDcEIsT0FBT0QsTUFBQSxDQUFPQyxTQUFBO2FBQ0xELE1BQUEsQ0FBT0ssUUFBQSxDQUFTeEYsTUFBQSxHQUFTLEdBQUc7SUFDckMsT0FBT3BILE1BQUEsQ0FBTzZCLEdBQUEsQ0FBSTBLLE1BQUEsRUFBUSxFQUFFO0VBQzdCLE9BQU07SUFDTCxPQUFPLENBQUMsQ0FBQztFQUNWO0FBQ0g7QUNaTyxJQUFNaVAsU0FBQSxHQUFZQSxDQUN2QmpQLE1BQUEsRUFDQWpHLEtBQUEsS0FDNkI7RUFDN0IsSUFBTSxDQUFDbUcsS0FBSSxJQUFJek0sTUFBQSxDQUFPNkQsSUFBQSxDQUFLMEksTUFBQSxFQUFRakcsS0FBSTtFQUN2QyxPQUFPa0MsQ0FBQSxJQUFLQSxDQUFBLEtBQU1pRSxLQUFBO0FBQ3BCO0FDSU8sSUFBTWdQLG9CQUFBLEdBQXVCLFNBQXZCQyxzQkFBd0JDLEdBQUEsRUFBc0M7RUFBQSxJQUF6QkMsS0FBQSxHQUFLelUsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUN4RCxJQUFNMFUsS0FBQSxHQUFRLENBQUNELEtBQUE7RUFDZixJQUFNRSxVQUFBLEdBQWFGLEtBQUEsR0FBUUcscUJBQUEsQ0FBc0JKLEdBQUcsSUFBSUEsR0FBQTtFQUV4RCxJQUFJSyxJQUFBLEdBQXNCQyxhQUFBLENBQWNDLElBQUE7RUFDeEMsSUFBSUMsS0FBQSxHQUF1QkYsYUFBQSxDQUFjQyxJQUFBO0VBQ3pDLElBQUlFLFFBQUEsR0FBVztFQUVmLElBQUlDLElBQUEsR0FBdUI7RUFDM0IsSUFBSUMsUUFBQSxHQUEyQjtFQUUvQixTQUFXQyxJQUFBLElBQVFULFVBQUEsRUFBWTtJQUM3QixJQUFNVSxJQUFBLEdBQU9ELElBQUEsQ0FBS0UsV0FBQSxDQUFZLENBQUM7SUFDL0IsSUFBSSxDQUFDRCxJQUFBLEVBQU07SUFFWCxJQUFNMVMsSUFBQSxHQUFPNFMsZ0JBQUEsQ0FBaUJILElBQUEsRUFBTUMsSUFBSTtJQUN2QyxDQUFDUixJQUFBLEVBQU1HLEtBQUssSUFBSU4sS0FBQSxHQUFRLENBQUNNLEtBQUEsRUFBT3JTLElBQUksSUFBSSxDQUFDQSxJQUFBLEVBQU1rUyxJQUFJO0lBRXBELElBQ0VXLFVBQUEsQ0FBV1gsSUFBQSxFQUFNQyxhQUFBLENBQWNXLEdBQUcsS0FDbENELFVBQUEsQ0FBV1IsS0FBQSxFQUFPRixhQUFBLENBQWNZLE9BQU8sR0FDdkM7TUFDQSxJQUFJaEIsS0FBQSxFQUFPO1FBQ1RRLElBQUEsR0FBT1MsZ0JBQUEsQ0FBaUJuQixHQUFBLENBQUlvQixTQUFBLENBQVUsR0FBR1gsUUFBUSxDQUFDO01BQ25ELE9BQU07UUFDTEMsSUFBQSxHQUFPUyxnQkFBQSxDQUFpQm5CLEdBQUEsQ0FBSW9CLFNBQUEsQ0FBVSxHQUFHcEIsR0FBQSxDQUFJdlUsTUFBQSxHQUFTZ1YsUUFBUSxDQUFDO01BQ2hFO01BQ0QsSUFBSSxDQUFDQyxJQUFBLEVBQU07SUFDWjtJQUVELElBQ0VNLFVBQUEsQ0FBV1gsSUFBQSxFQUFNQyxhQUFBLENBQWNlLEVBQUUsS0FDakNMLFVBQUEsQ0FBV1IsS0FBQSxFQUFPRixhQUFBLENBQWNlLEVBQUUsR0FDbEM7TUFDQSxJQUFJVixRQUFBLEtBQWEsTUFBTTtRQUNyQkEsUUFBQSxHQUFXLENBQUNBLFFBQUE7TUFDYixPQUFNO1FBQ0wsSUFBSVQsS0FBQSxFQUFPO1VBQ1RTLFFBQUEsR0FBVztRQUNaLE9BQU07VUFDTEEsUUFBQSxHQUFXVyxzQkFBQSxDQUNUdEIsR0FBQSxDQUFJb0IsU0FBQSxDQUFVLEdBQUdwQixHQUFBLENBQUl2VSxNQUFBLEdBQVNnVixRQUFRLENBQUM7UUFFMUM7TUFDRjtNQUNELElBQUksQ0FBQ0UsUUFBQSxFQUFVO0lBQ2hCO0lBRUQsSUFDRU4sSUFBQSxLQUFTQyxhQUFBLENBQWNDLElBQUEsSUFDdkJDLEtBQUEsS0FBVUYsYUFBQSxDQUFjQyxJQUFBLElBQ3hCZ0IsY0FBQSxDQUFlbEIsSUFBQSxFQUFNRyxLQUFLLEdBQzFCO01BQ0E7SUFDRDtJQUVEQyxRQUFBLElBQVlHLElBQUEsQ0FBS25WLE1BQUE7RUFDbEI7RUFFRCxPQUFPZ1YsUUFBQSxJQUFZO0FBQ3JCO0FBRUEsSUFBTWUsS0FBQSxHQUFRO0FBQ2QsSUFBTUMsV0FBQSxHQUNKO0FBQ0YsSUFBTUMsU0FBQSxHQUFZO0FBTVgsSUFBTUMsZUFBQSxHQUFrQixTQUFsQkMsaUJBQW1CdFEsSUFBQSxFQUF1QztFQUFBLElBQXpCMk8sS0FBQSxHQUFLelUsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUNwRCxJQUFJcVcsSUFBQSxHQUFPO0VBQ1gsSUFBSUMsT0FBQSxHQUFVO0VBRWQsT0FBT3hRLElBQUEsQ0FBSzdGLE1BQUEsR0FBUyxHQUFHO0lBQ3RCLElBQU1zVyxRQUFBLEdBQVdqQyxvQkFBQSxDQUFxQnhPLElBQUEsRUFBTTJPLEtBQUs7SUFDakQsSUFBTSxDQUFDVyxJQUFBLEVBQU1vQixTQUFTLElBQUlDLHdCQUFBLENBQXlCM1EsSUFBQSxFQUFNeVEsUUFBQSxFQUFVOUIsS0FBSztJQUV4RSxJQUFJaUMsZUFBQSxDQUFnQnRCLElBQUEsRUFBTW9CLFNBQUEsRUFBVy9CLEtBQUssR0FBRztNQUMzQzZCLE9BQUEsR0FBVTtNQUNWRCxJQUFBLElBQVFFLFFBQUE7SUFDVCxXQUFVLENBQUNELE9BQUEsRUFBUztNQUNuQkQsSUFBQSxJQUFRRSxRQUFBO0lBQ1QsT0FBTTtNQUNMO0lBQ0Q7SUFFRHpRLElBQUEsR0FBTzBRLFNBQUE7RUFDUjtFQUVELE9BQU9ILElBQUE7QUFDVDtBQU9PLElBQU1JLHdCQUFBLEdBQTJCQSxDQUN0Q2pDLEdBQUEsRUFDQTZCLElBQUEsRUFDQTVCLEtBQUEsS0FDb0I7RUFDcEIsSUFBSUEsS0FBQSxFQUFPO0lBQ1QsSUFBTS9DLEVBQUEsR0FBSzhDLEdBQUEsQ0FBSXZVLE1BQUEsR0FBU29XLElBQUE7SUFDeEIsT0FBTyxDQUFDN0IsR0FBQSxDQUFJcFUsS0FBQSxDQUFNc1IsRUFBQSxFQUFJOEMsR0FBQSxDQUFJdlUsTUFBTSxHQUFHdVUsR0FBQSxDQUFJcFUsS0FBQSxDQUFNLEdBQUdzUixFQUFFLENBQUM7RUFDcEQ7RUFFRCxPQUFPLENBQUM4QyxHQUFBLENBQUlwVSxLQUFBLENBQU0sR0FBR2lXLElBQUksR0FBRzdCLEdBQUEsQ0FBSXBVLEtBQUEsQ0FBTWlXLElBQUksQ0FBQztBQUM3QztBQU9BLElBQU1LLGVBQUEsR0FBa0IsU0FBbEJDLGlCQUNKdkIsSUFBQSxFQUNBb0IsU0FBQSxFQUVXO0VBQUEsSUFEWC9CLEtBQUEsR0FBS3pVLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFFUixJQUFJZ1csS0FBQSxDQUFNWSxJQUFBLENBQUt4QixJQUFJLEdBQUc7SUFDcEIsT0FBTztFQUNSO0VBSUQsSUFBSWMsU0FBQSxDQUFVVSxJQUFBLENBQUt4QixJQUFJLEdBQUc7SUFDeEIsSUFBTW1CLFFBQUEsR0FBV2pDLG9CQUFBLENBQXFCa0MsU0FBQSxFQUFXL0IsS0FBSztJQUN0RCxJQUFNLENBQUNvQyxRQUFBLEVBQVVDLGFBQWEsSUFBSUwsd0JBQUEsQ0FDaENELFNBQUEsRUFDQUQsUUFBQSxFQUNBOUIsS0FBSztJQUdQLElBQUlrQyxnQkFBQSxDQUFnQkUsUUFBQSxFQUFVQyxhQUFBLEVBQWVyQyxLQUFLLEdBQUc7TUFDbkQsT0FBTztJQUNSO0VBQ0Y7RUFFRCxJQUFJd0IsV0FBQSxDQUFZVyxJQUFBLENBQUt4QixJQUFJLEdBQUc7SUFDMUIsT0FBTztFQUNSO0VBRUQsT0FBTztBQUNUO0FBTU8sSUFBTVIscUJBQUEsR0FBd0IsVUFBeEJtQyx1QkFBbUN2QyxHQUFBLEVBQVc7RUFDekQsSUFBTXhJLElBQUEsR0FBTXdJLEdBQUEsQ0FBSXZVLE1BQUEsR0FBUztFQUV6QixTQUFTTSxDQUFBLEdBQUksR0FBR0EsQ0FBQSxHQUFJaVUsR0FBQSxDQUFJdlUsTUFBQSxFQUFRTSxDQUFBLElBQUs7SUFDbkMsSUFBTXlXLEtBQUEsR0FBUXhDLEdBQUEsQ0FBSXlDLE1BQUEsQ0FBT2pMLElBQUEsR0FBTXpMLENBQUM7SUFFaEMsSUFBSTJXLGNBQUEsQ0FBZUYsS0FBQSxDQUFNRyxVQUFBLENBQVcsQ0FBQyxDQUFDLEdBQUc7TUFDdkMsSUFBTUMsS0FBQSxHQUFRNUMsR0FBQSxDQUFJeUMsTUFBQSxDQUFPakwsSUFBQSxHQUFNekwsQ0FBQSxHQUFJLENBQUM7TUFDcEMsSUFBSThXLGVBQUEsQ0FBZ0JELEtBQUEsQ0FBTUQsVUFBQSxDQUFXLENBQUMsQ0FBQyxHQUFHO1FBQ3hDLE1BQU1DLEtBQUEsR0FBUUosS0FBQTtRQUVkelcsQ0FBQTtRQUNBO01BQ0Q7SUFDRjtJQUVELE1BQU15VyxLQUFBO0VBQ1A7QUFDSDtBQVFBLElBQU1LLGVBQUEsR0FBbUJDLFFBQUEsSUFBb0I7RUFDM0MsT0FBT0EsUUFBQSxJQUFZLFNBQVVBLFFBQUEsSUFBWTtBQUMzQztBQVFBLElBQU1KLGNBQUEsR0FBa0JJLFFBQUEsSUFBb0I7RUFDMUMsT0FBT0EsUUFBQSxJQUFZLFNBQVVBLFFBQUEsSUFBWTtBQUMzQztBQUVBLElBQUt4QyxhQUFBO0NBQUwsVUFBS3lDLGNBQUEsRUFBYTtFQUNoQkEsY0FBQSxDQUFBQSxjQUFBO0VBQ0FBLGNBQUEsQ0FBQUEsY0FBQTtFQUNBQSxjQUFBLENBQUFBLGNBQUE7RUFDQUEsY0FBQSxDQUFBQSxjQUFBO0VBQ0FBLGNBQUEsQ0FBQUEsY0FBQTtFQUNBQSxjQUFBLENBQUFBLGNBQUE7RUFDQUEsY0FBQSxDQUFBQSxjQUFBO0VBQ0FBLGNBQUEsQ0FBQUEsY0FBQTtFQUNBQSxjQUFBLENBQUFBLGNBQUE7RUFDQUEsY0FBQSxDQUFBQSxjQUFBO0VBQ0FBLGNBQUEsQ0FBQUEsY0FBQTtFQUNBQSxjQUFBLENBQUFBLGNBQUE7RUFDQUEsY0FBQSxDQUFBQSxjQUFBO0FBQ0YsR0FkS3pDLGFBQUEsS0FBQUEsYUFBQSxHQWNKO0FBRUQsSUFBTTBDLFFBQUEsR0FBVztBQUNqQixJQUFNQyxTQUFBLEdBQ0o7QUFDRixJQUFNQyxhQUFBLEdBQ0o7QUFDRixJQUFNQyxHQUFBLEdBQU07QUFDWixJQUFNQyxHQUFBLEdBQU07QUFDWixJQUFNQyxHQUFBLEdBQU07QUFDWixJQUFNQyxJQUFBLEdBQ0o7QUFDRixJQUFNQyxLQUFBLEdBQ0o7QUFDRixJQUFNQyxTQUFBLEdBQVk7QUFFbEIsSUFBTXpDLGdCQUFBLEdBQW1CQSxDQUFDSCxJQUFBLEVBQWNDLElBQUEsS0FBK0I7RUFDckUsSUFBSTFTLElBQUEsR0FBT21TLGFBQUEsQ0FBY21ELEdBQUE7RUFDekIsSUFBSTdDLElBQUEsQ0FBSzhDLE1BQUEsQ0FBT1YsUUFBUSxNQUFNLElBQUk7SUFDaEM3VSxJQUFBLElBQVFtUyxhQUFBLENBQWNxRCxNQUFBO0VBQ3ZCO0VBQ0QsSUFBSTlDLElBQUEsS0FBUyxNQUFRO0lBQ25CMVMsSUFBQSxJQUFRbVMsYUFBQSxDQUFjVyxHQUFBO0VBQ3ZCO0VBQ0QsSUFBSUosSUFBQSxJQUFRLFVBQVdBLElBQUEsSUFBUSxRQUFTO0lBQ3RDMVMsSUFBQSxJQUFRbVMsYUFBQSxDQUFjZSxFQUFBO0VBQ3ZCO0VBQ0QsSUFBSVQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPVCxTQUFTLE1BQU0sSUFBSTtJQUNqQzlVLElBQUEsSUFBUW1TLGFBQUEsQ0FBY3NELE9BQUE7RUFDdkI7RUFDRCxJQUFJaEQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPUixhQUFhLE1BQU0sSUFBSTtJQUNyQy9VLElBQUEsSUFBUW1TLGFBQUEsQ0FBY3VELFdBQUE7RUFDdkI7RUFDRCxJQUFJakQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPUCxHQUFHLE1BQU0sSUFBSTtJQUMzQmhWLElBQUEsSUFBUW1TLGFBQUEsQ0FBY3dELENBQUE7RUFDdkI7RUFDRCxJQUFJbEQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPTixHQUFHLE1BQU0sSUFBSTtJQUMzQmpWLElBQUEsSUFBUW1TLGFBQUEsQ0FBY3lELENBQUE7RUFDdkI7RUFDRCxJQUFJbkQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPTCxHQUFHLE1BQU0sSUFBSTtJQUMzQmxWLElBQUEsSUFBUW1TLGFBQUEsQ0FBYzBELENBQUE7RUFDdkI7RUFDRCxJQUFJcEQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPSixJQUFJLE1BQU0sSUFBSTtJQUM1Qm5WLElBQUEsSUFBUW1TLGFBQUEsQ0FBYzJELEVBQUE7RUFDdkI7RUFDRCxJQUFJckQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPSCxLQUFLLE1BQU0sSUFBSTtJQUM3QnBWLElBQUEsSUFBUW1TLGFBQUEsQ0FBYzRELEdBQUE7RUFDdkI7RUFDRCxJQUFJdEQsSUFBQSxDQUFLOEMsTUFBQSxDQUFPRixTQUFTLE1BQU0sSUFBSTtJQUNqQ3JWLElBQUEsSUFBUW1TLGFBQUEsQ0FBY1ksT0FBQTtFQUN2QjtFQUVELE9BQU8vUyxJQUFBO0FBQ1Q7QUFFQSxTQUFTNlMsV0FBV21ELENBQUEsRUFBa0JDLENBQUEsRUFBZ0I7RUFDcEQsUUFBUUQsQ0FBQSxHQUFJQyxDQUFBLE1BQU87QUFDckI7QUFFQSxJQUFNQyxnQkFBQSxHQUFxRCxDQUV6RCxDQUNFL0QsYUFBQSxDQUFjd0QsQ0FBQSxFQUNkeEQsYUFBQSxDQUFjd0QsQ0FBQSxHQUFJeEQsYUFBQSxDQUFjeUQsQ0FBQSxHQUFJekQsYUFBQSxDQUFjMkQsRUFBQSxHQUFLM0QsYUFBQSxDQUFjNEQsR0FBRyxHQUcxRSxDQUFDNUQsYUFBQSxDQUFjMkQsRUFBQSxHQUFLM0QsYUFBQSxDQUFjeUQsQ0FBQSxFQUFHekQsYUFBQSxDQUFjeUQsQ0FBQSxHQUFJekQsYUFBQSxDQUFjMEQsQ0FBQyxHQUV0RSxDQUFDMUQsYUFBQSxDQUFjNEQsR0FBQSxHQUFNNUQsYUFBQSxDQUFjMEQsQ0FBQSxFQUFHMUQsYUFBQSxDQUFjMEQsQ0FBQyxHQUVyRCxDQUFDMUQsYUFBQSxDQUFjbUQsR0FBQSxFQUFLbkQsYUFBQSxDQUFjcUQsTUFBQSxHQUFTckQsYUFBQSxDQUFjVyxHQUFHLEdBRTVELENBQUNYLGFBQUEsQ0FBY21ELEdBQUEsRUFBS25ELGFBQUEsQ0FBY3VELFdBQVcsR0FFN0MsQ0FBQ3ZELGFBQUEsQ0FBY3NELE9BQUEsRUFBU3RELGFBQUEsQ0FBY21ELEdBQUcsR0FFekMsQ0FBQ25ELGFBQUEsQ0FBY1csR0FBQSxFQUFLWCxhQUFBLENBQWNZLE9BQU8sR0FFekMsQ0FBQ1osYUFBQSxDQUFjZSxFQUFBLEVBQUlmLGFBQUEsQ0FBY2UsRUFBRSxFQUFDO0FBR3RDLFNBQVNFLGVBQWVsQixJQUFBLEVBQXFCRyxLQUFBLEVBQW9CO0VBQy9ELE9BQ0U2RCxnQkFBQSxDQUFpQkMsU0FBQSxDQUNmdEwsQ0FBQSxJQUFLZ0ksVUFBQSxDQUFXWCxJQUFBLEVBQU1ySCxDQUFBLENBQUUsRUFBRSxLQUFLZ0ksVUFBQSxDQUFXUixLQUFBLEVBQU94SCxDQUFBLENBQUUsRUFBRSxDQUFDLE1BQ2xEO0FBRVY7QUFFQSxJQUFNdUwsY0FBQSxHQUFpQjtBQUN2QixJQUFNcEQsZ0JBQUEsR0FBb0JuQixHQUFBLElBQXdCO0VBQ2hELE9BQU9BLEdBQUEsQ0FBSTBELE1BQUEsQ0FBT2EsY0FBYyxNQUFNO0FBQ3hDO0FBRUEsSUFBTUMsU0FBQSxHQUFZO0FBQ2xCLElBQU1sRCxzQkFBQSxHQUEwQnRCLEdBQUEsSUFBd0I7RUFDdEQsSUFBTXlFLEtBQUEsR0FBUXpFLEdBQUEsQ0FBSXlFLEtBQUEsQ0FBTUQsU0FBUztFQUNqQyxJQUFJQyxLQUFBLEtBQVUsTUFBTTtJQUNsQixPQUFPO0VBQ1IsT0FBTTtJQUVMLElBQU1DLE1BQUEsR0FBU0QsS0FBQSxDQUFNLEdBQUdoWixNQUFBLEdBQVM7SUFDakMsT0FBT2laLE1BQUEsR0FBUyxNQUFNO0VBQ3ZCO0FBQ0g7QUMvUU8sSUFBTUMsY0FBQSxHQUFpQztFQUM1Q0MsT0FBT2hVLE1BQUEsRUFBUXJGLE9BQUEsRUFBTztJQUNwQnFGLE1BQUEsQ0FBT2dVLE1BQUEsQ0FBT3JaLE9BQU87O0VBRXZCMUUsZUFBZStKLE1BQUEsRUFBUXdNLFNBQUEsRUFBVTdSLE9BQUEsRUFBTztJQUN0Q3FGLE1BQUEsQ0FBTy9KLGNBQUEsQ0FBZXVXLFNBQUEsRUFBVTdSLE9BQU87O0VBRXpDdEUsV0FDRTJKLE1BQUEsRUFDQVUsSUFBQSxFQUNtQztJQUFBLElBQW5DL0YsT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFpQztJQUVqQ25ILE1BQUEsQ0FBTzRGLGtCQUFBLENBQW1CMkcsTUFBQSxFQUFRLE1BQUs7TUFDckMsSUFBTTtRQUFFaVUsS0FBQSxHQUFRO01BQU8sSUFBR3RaLE9BQUE7TUFDMUIsSUFBSTtRQUFFMlIsRUFBQSxHQUFLMEMsd0JBQUEsQ0FBeUJoUCxNQUFNO01BQUMsSUFBS3JGLE9BQUE7TUFFaEQsSUFBSTdHLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsR0FBRztRQUNuQkEsRUFBQSxHQUFLN1ksTUFBQSxDQUFPMEUsS0FBQSxDQUFNNkgsTUFBQSxFQUFRc00sRUFBRTtNQUM3QjtNQUVELElBQUlwWSxLQUFBLENBQU00UCxPQUFBLENBQVF3SSxFQUFFLEdBQUc7UUFDckIsSUFBSXBZLEtBQUEsQ0FBTThULFdBQUEsQ0FBWXNFLEVBQUUsR0FBRztVQUN6QkEsRUFBQSxHQUFLQSxFQUFBLENBQUc3RixNQUFBO1FBQ1QsT0FBTTtVQUNMLElBQU1HLElBQUEsR0FBTTFTLEtBQUEsQ0FBTW9CLEdBQUEsQ0FBSWdYLEVBQUU7VUFDeEIsSUFBSSxDQUFDMkgsS0FBQSxJQUFTeGdCLE1BQUEsQ0FBT2taLElBQUEsQ0FBSzNNLE1BQUEsRUFBUTtZQUFFc00sRUFBQSxFQUFJMUY7VUFBRyxDQUFFLEdBQUc7WUFDOUM7VUFDRDtVQUNELElBQU1TLE1BQUEsR0FBUW5ULEtBQUEsQ0FBTThFLEtBQUEsQ0FBTXNULEVBQUU7VUFDNUIsSUFBTTRILFFBQUEsR0FBV3pnQixNQUFBLENBQU9zRSxRQUFBLENBQVNpSSxNQUFBLEVBQVFxSCxNQUFLO1VBQzlDLElBQU04TSxNQUFBLEdBQVMxZ0IsTUFBQSxDQUFPc0UsUUFBQSxDQUFTaUksTUFBQSxFQUFRNEcsSUFBRztVQUMxQ3JTLFVBQUEsQ0FBV3lmLE1BQUEsQ0FBT2hVLE1BQUEsRUFBUTtZQUFFc00sRUFBQTtZQUFJMkg7VUFBTztVQUN2QyxJQUFNRyxVQUFBLEdBQWFGLFFBQUEsQ0FBU2xhLEtBQUEsQ0FBSztVQUNqQyxJQUFNcWEsUUFBQSxHQUFXRixNQUFBLENBQU9uYSxLQUFBLENBQUs7VUFFN0JzUyxFQUFBLEdBQUs4SCxVQUFBLElBQWNDLFFBQUE7VUFDbkI5ZixVQUFBLENBQVdxRSxZQUFBLENBQWFvSCxNQUFBLEVBQVE7WUFBRXlHLE1BQUEsRUFBUTZGLEVBQUE7WUFBSTVGLEtBQUEsRUFBTzRGO1VBQUUsQ0FBRTtRQUMxRDtNQUNGO01BRUQsSUFDRyxDQUFDMkgsS0FBQSxJQUFTeGdCLE1BQUEsQ0FBT2taLElBQUEsQ0FBSzNNLE1BQUEsRUFBUTtRQUFFc007TUFBRSxDQUFFLEtBQ3JDN1ksTUFBQSxDQUFPNEIsZUFBQSxDQUFnQjJLLE1BQUEsRUFBUTtRQUFFc007TUFBSSxJQUNyQztRQUNBO01BQ0Q7TUFFRCxJQUFNO1FBQUUzVSxJQUFBLEVBQUFvQyxLQUFBO1FBQU0wRztNQUFRLElBQUc2TCxFQUFBO01BQ3pCLElBQUk1TCxJQUFBLENBQUs3RixNQUFBLEdBQVMsR0FDaEJtRixNQUFBLENBQU9yTCxLQUFBLENBQU07UUFBRTRJLElBQUEsRUFBTTtRQUFlNUYsSUFBQSxFQUFBb0MsS0FBQTtRQUFNMEcsTUFBQTtRQUFRQztNQUFJLENBQUU7SUFDNUQsQ0FBQztFQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25HV25NLFVBQUEsR0FBVStmLGVBQUEsQ0FBQUEsZUFBQSxDQUFBQSxlQUFBLENBQUFBLGVBQUEsS0FJbEJ4UCxpQkFBaUIsR0FDakJLLGNBQWMsR0FDZEksbUJBQW1CLEdBQ25Cd08sY0FBYztBQ1JuQixJQUFNUSxvQkFBQSxHQUFpRCxtQkFBSXBhLE9BQUEsQ0FBTztBQUUzRCxJQUFNcWEsb0JBQUEsR0FBd0J4VSxNQUFBLElBQWtCO0VBQ3JELE9BQU91VSxvQkFBQSxDQUFxQnJULEdBQUEsQ0FBSWxCLE1BQU0sS0FBSztBQUM3QztBQUVPLElBQU15VSxlQUFBLEdBQWtCQSxDQUM3QnpVLE1BQUEsRUFDQTRNLEVBQUEsRUFDQThILE1BQUEsS0FDRTtFQUNGLElBQU0vWCxLQUFBLEdBQVE0WCxvQkFBQSxDQUFxQnJULEdBQUEsQ0FBSWxCLE1BQU0sS0FBSztFQUNsRHVVLG9CQUFBLENBQXFCaEssR0FBQSxDQUFJdkssTUFBQSxFQUFRLElBQUk7RUFDckMsSUFBSTtJQUNGNE0sRUFBQSxDQUFFO0lBQ0Y4SCxNQUFBLENBQU07RUFDUDtJQUNDSCxvQkFBQSxDQUFxQmhLLEdBQUEsQ0FBSXZLLE1BQUEsRUFBUXJELEtBQUs7RUFDdkM7QUFDSDtTQ2JnQmdZLGlCQUNkM1UsTUFBQSxFQUNBNFUsYUFBQSxFQUNBbGIsU0FBQSxFQUFvQztFQUVwQyxJQUFNbWIsYUFBQSxHQUFnQjNhLFdBQUEsQ0FBWWdILEdBQUEsQ0FBSWxCLE1BQU0sS0FBSztFQUNqRCxJQUFNOFUsZ0JBQUEsR0FBbUIxYSxlQUFBLENBQWdCOEcsR0FBQSxDQUFJbEIsTUFBTSxLQUFLLG1CQUFJNEssR0FBQSxDQUFHO0VBQy9ELElBQUltSyxVQUFBO0VBQ0osSUFBSUMsYUFBQTtFQUVKLElBQU1uSyxHQUFBLEdBQU9iLEtBQUEsSUFBcUI7SUFDaEMsSUFBSUEsS0FBQSxFQUFNO01BQ1IsSUFBTXpLLEdBQUEsR0FBTXlLLEtBQUEsQ0FBS2tCLElBQUEsQ0FBSyxHQUFHO01BRXpCLElBQUksQ0FBQzhKLGFBQUEsQ0FBYzVLLEdBQUEsQ0FBSTdLLEdBQUcsR0FBRztRQUMzQnlWLGFBQUEsQ0FBY25LLEdBQUEsQ0FBSXRMLEdBQUc7UUFDckJ3VixVQUFBLENBQVd6WixJQUFBLENBQUswTyxLQUFJO01BQ3JCO0lBQ0Y7O0VBR0gsSUFBSXRRLFNBQUEsRUFBVztJQUNicWIsVUFBQSxHQUFhO0lBQ2JDLGFBQUEsR0FBZ0IsbUJBQUlwSyxHQUFBLENBQUc7SUFDdkIsU0FBVzdRLEtBQUEsSUFBUThhLGFBQUEsRUFBZTtNQUNoQyxJQUFNNVcsT0FBQSxHQUFVdkUsU0FBQSxDQUFVSyxLQUFJO01BQzlCOFEsR0FBQSxDQUFJNU0sT0FBTztJQUNaO0VBQ0YsT0FBTTtJQUNMOFcsVUFBQSxHQUFhRixhQUFBO0lBQ2JHLGFBQUEsR0FBZ0JGLGdCQUFBO0VBQ2pCO0VBRUQsU0FBV3RVLEtBQUEsSUFBUW9VLGFBQUEsRUFBZTtJQUNoQy9KLEdBQUEsQ0FBSXJLLEtBQUk7RUFDVDtFQUVEdEcsV0FBQSxDQUFZcVEsR0FBQSxDQUFJdkssTUFBQSxFQUFRK1UsVUFBVTtFQUNsQzNhLGVBQUEsQ0FBZ0JtUSxHQUFBLENBQUl2SyxNQUFBLEVBQVFnVixhQUFhO0FBQzNDO0lDdENhcmdCLEtBQUEsR0FBNkNBLENBQUNxTCxNQUFBLEVBQVFwRyxFQUFBLEtBQU07RUFDdkUsU0FBV0QsR0FBQSxJQUFPbEcsTUFBQSxDQUFPb0UsUUFBQSxDQUFTbUksTUFBTSxHQUFHO0lBQ3pDak0sT0FBQSxDQUFRMkYsU0FBQSxDQUFVQyxHQUFBLEVBQUtDLEVBQUU7RUFDMUI7RUFFRCxTQUFXbVEsSUFBQSxJQUFPdFcsTUFBQSxDQUFPdUUsU0FBQSxDQUFVZ0ksTUFBTSxHQUFHO0lBQzFDL0wsUUFBQSxDQUFTeUYsU0FBQSxDQUFVcVEsSUFBQSxFQUFLblEsRUFBRTtFQUMzQjtFQUVELFNBQVdxYixLQUFBLElBQU94aEIsTUFBQSxDQUFPNEUsU0FBQSxDQUFVMkgsTUFBTSxHQUFHO0lBQzFDN0wsUUFBQSxDQUFTdUYsU0FBQSxDQUFVdWIsS0FBQSxFQUFLcmIsRUFBRTtFQUMzQjtFQUdELElBQUksQ0FBQzRhLG9CQUFBLENBQXFCeFUsTUFBTSxHQUFHO0lBQ2pDLElBQU10RyxTQUFBLEdBQVk1RixJQUFBLENBQUt1Six5QkFBQSxDQUEwQnpELEVBQUUsSUFDOUM4RCxDQUFBLElBQVk1SixJQUFBLENBQUs0RixTQUFBLENBQVVnRSxDQUFBLEVBQUc5RCxFQUFFLElBQ2pDO0lBQ0orYSxnQkFBQSxDQUFpQjNVLE1BQUEsRUFBUUEsTUFBQSxDQUFPdkssYUFBQSxDQUFjbUUsRUFBRSxHQUFHRixTQUFTO0VBQzdEO0VBRURuRixVQUFBLENBQVdtRixTQUFBLENBQVVzRyxNQUFBLEVBQVFwRyxFQUFFO0VBQy9Cb0csTUFBQSxDQUFPcU0sVUFBQSxDQUFXL1EsSUFBQSxDQUFLMUIsRUFBRTtFQUN6Qm5HLE1BQUEsQ0FBTytELFNBQUEsQ0FBVXdJLE1BQUEsRUFBUTtJQUN2QjFDLFNBQUEsRUFBVzFEO0VBQ1o7RUFHRCxJQUFJQSxFQUFBLENBQUcyRCxJQUFBLEtBQVMsaUJBQWlCO0lBQy9CeUMsTUFBQSxDQUFPL0ksS0FBQSxHQUFRO0VBQ2hCO0VBRUQsSUFBSSxDQUFDb0QsUUFBQSxDQUFTNkcsR0FBQSxDQUFJbEIsTUFBTSxHQUFHO0lBQ3pCM0YsUUFBQSxDQUFTa1EsR0FBQSxDQUFJdkssTUFBQSxFQUFRLElBQUk7SUFFekJrVixPQUFBLENBQVFDLE9BQUEsQ0FBTyxFQUFHQyxJQUFBLENBQUssTUFBSztNQUMxQi9hLFFBQUEsQ0FBU2tRLEdBQUEsQ0FBSXZLLE1BQUEsRUFBUSxLQUFLO01BQzFCQSxNQUFBLENBQU9vTSxRQUFBLENBQVM7UUFBRTlPLFNBQUEsRUFBVzFEO01BQUk7TUFDakNvRyxNQUFBLENBQU9xTSxVQUFBLEdBQWE7SUFDdEIsQ0FBQztFQUNGO0FBQ0g7SUMzQ2E1VyxhQUFBLEdBQTZEQSxDQUN4RXVLLE1BQUEsRUFDQXBHLEVBQUEsS0FDRTtFQUNGLFFBQVFBLEVBQUEsQ0FBRzJELElBQUE7U0FDSjtTQUNBO1NBQ0E7TUFBWTtRQUNmLElBQU07VUFBRTVGLElBQUEsRUFBQW9DO1FBQU0sSUFBR0gsRUFBQTtRQUNqQixPQUFPOUYsSUFBQSxDQUFLaUQsTUFBQSxDQUFPZ0QsS0FBSTtNQUN4QjtTQUVJO01BQWU7UUFDbEIsSUFBTTtVQUFFekMsSUFBQSxFQUFBNEksS0FBQTtVQUFNdkksSUFBQSxFQUFBNkk7UUFBTSxJQUFHNUcsRUFBQTtRQUN2QixJQUFNeWIsT0FBQSxHQUFTdmhCLElBQUEsQ0FBS2lELE1BQUEsQ0FBT3lKLEtBQUk7UUFDL0IsSUFBTStJLFdBQUEsR0FBY2pWLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3JCLEtBQUksSUFDaEMsS0FDQXRELEtBQUEsQ0FBTTZOLElBQUEsQ0FBSzdXLElBQUEsQ0FBSzJELEtBQUEsQ0FBTTJJLEtBQUksR0FBRzZKLElBQUE7VUFBQSxJQUFDLEdBQUd1TCxFQUFDLElBQUN2TCxJQUFBO1VBQUEsT0FBS3ZKLEtBQUEsQ0FBS3JELE1BQUEsQ0FBT21ZLEVBQUM7U0FBRTtRQUUzRCxPQUFPLENBQUMsR0FBR0QsT0FBQSxFQUFRLEdBQUc5TCxXQUFXO01BQ2xDO1NBRUk7TUFBYztRQUNqQixJQUFNO1VBQUU1UixJQUFBLEVBQUFxSjtRQUFNLElBQUdwSCxFQUFBO1FBQ2pCLElBQU1jLFNBQUEsR0FBWTVHLElBQUEsQ0FBSzRHLFNBQUEsQ0FBVXNHLE1BQUk7UUFDckMsSUFBTXVVLFlBQUEsR0FBZXpoQixJQUFBLENBQUtvRSxRQUFBLENBQVM4SSxNQUFJO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHdEcsU0FBQSxFQUFXNmEsWUFBWTtNQUNuQztTQUVJO01BQWE7UUFDaEIsSUFBTTtVQUFFNWQsSUFBQSxFQUFBZ0ssTUFBQTtVQUFNMUQ7UUFBUyxJQUFHckUsRUFBQTtRQUUxQixJQUFJOUYsSUFBQSxDQUFLK0gsTUFBQSxDQUFPOEYsTUFBQSxFQUFNMUQsT0FBTyxHQUFHO1VBQzlCLE9BQU87UUFDUjtRQUVELElBQU11WCxZQUFBLEdBQXVCO1FBQzdCLElBQU1DLFlBQUEsR0FBdUI7UUFFN0IsU0FBV2hZLFFBQUEsSUFBWTNKLElBQUEsQ0FBSzRHLFNBQUEsQ0FBVWlILE1BQUksR0FBRztVQUMzQyxJQUFNakUsQ0FBQSxHQUFJNUosSUFBQSxDQUFLNEYsU0FBQSxDQUFVK0QsUUFBQSxFQUFVN0QsRUFBRTtVQUNyQzRiLFlBQUEsQ0FBYWxhLElBQUEsQ0FBS29DLENBQUU7UUFDckI7UUFFRCxTQUFXZ1ksU0FBQSxJQUFZNWhCLElBQUEsQ0FBSzRHLFNBQUEsQ0FBVXVELE9BQU8sR0FBRztVQUM5QyxJQUFNMFgsRUFBQSxHQUFJN2hCLElBQUEsQ0FBSzRGLFNBQUEsQ0FBVWdjLFNBQUEsRUFBVTliLEVBQUU7VUFDckM2YixZQUFBLENBQWFuYSxJQUFBLENBQUtxYSxFQUFFO1FBQ3JCO1FBRUQsSUFBTTNULFNBQUEsR0FBWXlULFlBQUEsQ0FBYUEsWUFBQSxDQUFhNWEsTUFBQSxHQUFTO1FBQ3JELElBQU1vSCxRQUFBLEdBQVdoRSxPQUFBLENBQVFBLE9BQUEsQ0FBUXBELE1BQUEsR0FBUztRQUMxQyxJQUFNK2EsVUFBQSxHQUFhNVQsU0FBQSxDQUFVN0UsTUFBQSxDQUFPOEUsUUFBUTtRQUU1QyxPQUFPLENBQUMsR0FBR3VULFlBQUEsRUFBYyxHQUFHQyxZQUFBLEVBQWNHLFVBQVU7TUFDckQ7U0FFSTtNQUFlO1FBQ2xCLElBQU07VUFBRWplLElBQUEsRUFBQXlLO1FBQU0sSUFBR3hJLEVBQUE7UUFDakIsSUFBTWljLFVBQUEsR0FBWS9oQixJQUFBLENBQUs0RyxTQUFBLENBQVUwSCxNQUFJO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHeVQsVUFBUztNQUNyQjtTQUVJO01BQWM7UUFDakIsSUFBTTtVQUFFbGUsSUFBQSxFQUFBbUw7UUFBTSxJQUFHbEosRUFBQTtRQUNqQixJQUFNa2MsT0FBQSxHQUFTaGlCLElBQUEsQ0FBS2lELE1BQUEsQ0FBTytMLE1BQUk7UUFDL0IsSUFBTWlULFFBQUEsR0FBV2ppQixJQUFBLENBQUt1RCxJQUFBLENBQUt5TCxNQUFJO1FBQy9CLE9BQU8sQ0FBQyxHQUFHZ1QsT0FBQSxFQUFRQyxRQUFRO01BQzVCOztNQUVRO1FBQ1AsT0FBTztNQUNSOztBQUVMO0FDL0VhLElBQUFyZ0IsV0FBQSxHQUVUc0ssTUFBQSxJQUFTO0VBQ1gsSUFBTTtJQUFFQztFQUFXLElBQUdELE1BQUE7RUFFdEIsSUFBSUMsU0FBQSxFQUFXO0lBQ2IsT0FBT3JNLElBQUEsQ0FBSzRCLFFBQUEsQ0FBU3dLLE1BQUEsRUFBUUMsU0FBUztFQUN2QztFQUNELE9BQU87QUFDVDtJQ0xheEksYUFBQSxHQUE2REEsQ0FDeEV1SSxNQUFBLEVBQ0FrSixLQUFBLEtBQ0U7RUFDRixJQUFNLENBQUNoSixLQUFBLEVBQU1uRyxLQUFJLElBQUltUCxLQUFBO0VBR3JCLElBQUk1VSxJQUFBLENBQUtpTixNQUFBLENBQU9yQixLQUFJLEdBQUc7SUFDckI7RUFDRDtFQUdELElBQUl4TSxPQUFBLENBQVE2VSxTQUFBLENBQVVySSxLQUFJLEtBQUtBLEtBQUEsQ0FBS0csUUFBQSxDQUFTeEYsTUFBQSxLQUFXLEdBQUc7SUFDekQsSUFBTXNPLEtBQUEsR0FBUTtNQUFFekksSUFBQSxFQUFNOztJQUN0Qm5NLFVBQUEsQ0FBVzRCLFdBQUEsQ0FBWTZKLE1BQUEsRUFBUW1KLEtBQUEsRUFBTztNQUNwQ21ELEVBQUEsRUFBSXZTLEtBQUEsQ0FBS29ELE1BQUEsQ0FBTyxDQUFDO01BQ2pCOFcsS0FBQSxFQUFPO0lBQ1I7SUFDRDtFQUNEO0VBR0QsSUFBTStCLGlCQUFBLEdBQW9CdmlCLE1BQUEsQ0FBTytDLFFBQUEsQ0FBUzBKLEtBQUksSUFDMUMsUUFDQXhNLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXJJLEtBQUksTUFDckJGLE1BQUEsQ0FBT2lNLFFBQUEsQ0FBUy9MLEtBQUksS0FDbkJBLEtBQUEsQ0FBS0csUUFBQSxDQUFTeEYsTUFBQSxLQUFXLEtBQ3pCdkcsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBQSxDQUFLRyxRQUFBLENBQVMsRUFBRSxLQUM1QkwsTUFBQSxDQUFPaU0sUUFBQSxDQUFTL0wsS0FBQSxDQUFLRyxRQUFBLENBQVMsRUFBRTtFQUl0QyxJQUFJcEUsQ0FBQSxHQUFJO0VBRVIsU0FBU2QsQ0FBQSxHQUFJLEdBQUdBLENBQUEsR0FBSStFLEtBQUEsQ0FBS0csUUFBQSxDQUFTeEYsTUFBQSxFQUFRTSxDQUFBLElBQUtjLENBQUEsSUFBSztJQUNsRCxJQUFNZ2EsV0FBQSxHQUFjcmlCLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSWxCLE1BQUEsRUFBUWpHLEtBQUk7SUFDekMsSUFBSXpGLElBQUEsQ0FBS2lOLE1BQUEsQ0FBTzBVLFdBQVcsR0FBRztJQUM5QixJQUFNQyxNQUFBLEdBQVFELFdBQUEsQ0FBWTVWLFFBQUEsQ0FBU3BFLENBQUE7SUFDbkMsSUFBTW1GLElBQUEsR0FBTzZVLFdBQUEsQ0FBWTVWLFFBQUEsQ0FBU3BFLENBQUEsR0FBSTtJQUN0QyxJQUFNOFMsTUFBQSxHQUFTNVQsQ0FBQSxLQUFNK0UsS0FBQSxDQUFLRyxRQUFBLENBQVN4RixNQUFBLEdBQVM7SUFDNUMsSUFBTXNiLGNBQUEsR0FDSjdoQixJQUFBLENBQUtpTixNQUFBLENBQU8yVSxNQUFLLEtBQU14aUIsT0FBQSxDQUFRNlUsU0FBQSxDQUFVMk4sTUFBSyxLQUFLbFcsTUFBQSxDQUFPaU0sUUFBQSxDQUFTaUssTUFBSztJQU0xRSxJQUFJQyxjQUFBLEtBQW1CSCxpQkFBQSxFQUFtQjtNQUN4QyxJQUFJRyxjQUFBLEVBQWdCO1FBQ2xCNWhCLFVBQUEsQ0FBV2dFLFdBQUEsQ0FBWXlILE1BQUEsRUFBUTtVQUFFc00sRUFBQSxFQUFJdlMsS0FBQSxDQUFLb0QsTUFBQSxDQUFPbEIsQ0FBQztVQUFHZ1ksS0FBQSxFQUFPO1FBQUksQ0FBRTtNQUNuRSxPQUFNO1FBQ0wxZixVQUFBLENBQVc2RSxXQUFBLENBQVk0RyxNQUFBLEVBQVE7VUFBRXNNLEVBQUEsRUFBSXZTLEtBQUEsQ0FBS29ELE1BQUEsQ0FBT2xCLENBQUM7VUFBR2dZLEtBQUEsRUFBTztRQUFJLENBQUU7TUFDbkU7TUFDRGhZLENBQUE7ZUFDU3ZJLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVTJOLE1BQUssR0FBRztNQUVuQyxJQUFJbFcsTUFBQSxDQUFPaU0sUUFBQSxDQUFTaUssTUFBSyxHQUFHO1FBQzFCLElBQUk5VSxJQUFBLElBQVEsUUFBUSxDQUFDOU0sSUFBQSxDQUFLaU4sTUFBQSxDQUFPSCxJQUFJLEdBQUc7VUFDdEMsSUFBTWdWLFFBQUEsR0FBVztZQUFFMVYsSUFBQSxFQUFNOztVQUN6Qm5NLFVBQUEsQ0FBVzRCLFdBQUEsQ0FBWTZKLE1BQUEsRUFBUW9XLFFBQUEsRUFBVTtZQUN2QzlKLEVBQUEsRUFBSXZTLEtBQUEsQ0FBS29ELE1BQUEsQ0FBT2xCLENBQUM7WUFDakJnWSxLQUFBLEVBQU87VUFDUjtVQUNEaFksQ0FBQTttQkFDUzhTLE1BQUEsRUFBUTtVQUNqQixJQUFNc0gsU0FBQSxHQUFXO1lBQUUzVixJQUFBLEVBQU07O1VBQ3pCbk0sVUFBQSxDQUFXNEIsV0FBQSxDQUFZNkosTUFBQSxFQUFRcVcsU0FBQSxFQUFVO1lBQ3ZDL0osRUFBQSxFQUFJdlMsS0FBQSxDQUFLb0QsTUFBQSxDQUFPbEIsQ0FBQSxHQUFJLENBQUM7WUFDckJnWSxLQUFBLEVBQU87VUFDUjtVQUNEaFksQ0FBQTtRQUNEO01BQ0Y7SUFDRixPQUFNO01BU0wsSUFBSSxDQUFDM0gsSUFBQSxDQUFLaU4sTUFBQSxDQUFPMlUsTUFBSyxLQUFLLEVBQUUsY0FBY0EsTUFBQSxHQUFRO1FBQ2pELElBQU1JLFlBQUEsR0FBZUosTUFBQTtRQUNyQkksWUFBQSxDQUFhalcsUUFBQSxHQUFXO01BQ3pCO01BR0QsSUFBSWUsSUFBQSxJQUFRLFFBQVE5TSxJQUFBLENBQUtpTixNQUFBLENBQU9ILElBQUksR0FBRztRQUNyQyxJQUFJOU0sSUFBQSxDQUFLdUgsTUFBQSxDQUFPcWEsTUFBQSxFQUFPOVUsSUFBQSxFQUFNO1VBQUVrTSxLQUFBLEVBQU87UUFBSSxDQUFFLEdBQUc7VUFDN0MvWSxVQUFBLENBQVcyQyxVQUFBLENBQVc4SSxNQUFBLEVBQVE7WUFBRXNNLEVBQUEsRUFBSXZTLEtBQUEsQ0FBS29ELE1BQUEsQ0FBT2xCLENBQUM7WUFBR2dZLEtBQUEsRUFBTztVQUFJLENBQUU7VUFDakVoWSxDQUFBO1FBQ0QsV0FBVW1GLElBQUEsQ0FBS1YsSUFBQSxLQUFTLElBQUk7VUFDM0JuTSxVQUFBLENBQVdnRSxXQUFBLENBQVl5SCxNQUFBLEVBQVE7WUFDN0JzTSxFQUFBLEVBQUl2UyxLQUFBLENBQUtvRCxNQUFBLENBQU9sQixDQUFBLEdBQUksQ0FBQztZQUNyQmdZLEtBQUEsRUFBTztVQUNSO1VBQ0RoWSxDQUFBO1FBQ0QsV0FBVWlhLE1BQUEsQ0FBTXhWLElBQUEsS0FBUyxJQUFJO1VBQzVCbk0sVUFBQSxDQUFXZ0UsV0FBQSxDQUFZeUgsTUFBQSxFQUFRO1lBQzdCc00sRUFBQSxFQUFJdlMsS0FBQSxDQUFLb0QsTUFBQSxDQUFPbEIsQ0FBQztZQUNqQmdZLEtBQUEsRUFBTztVQUNSO1VBQ0RoWSxDQUFBO1FBQ0Q7TUFDRjtJQUNGO0VBQ0Y7QUFDSDtJQ2hIYW5ELGVBQUEsR0FBaUVBLENBQzVFa0gsTUFBQSxFQUFNK0osSUFBQSxLQUVKO0VBQUEsSUFERjtJQUFFd00sU0FBQTtJQUFXQztFQUF1QixJQUFFek0sSUFBQTtFQUV0QyxJQUFNME0sYUFBQSxHQUFnQkQsdUJBQUEsR0FBMEI7RUFFaEQsSUFBSUQsU0FBQSxHQUFZRSxhQUFBLEVBQWU7SUFDN0IsTUFBTSxJQUFJdlosS0FBQSxDQUFLLG1EQUFBQyxNQUFBLENBQ3NDc1osYUFBQSxFQUFhLDRHQUEyRztFQUU5SztFQUVELE9BQU87QUFDVDtJQ1hhamlCLEtBQUEsR0FBa0MsU0FBbENraUIsT0FBbUMxVyxNQUFBLEVBQXdCO0VBQUEsSUFBaEJyRixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFDaEUsSUFBTTtJQUNKcVosS0FBQSxHQUFRO0lBQ1IwQyxJQUFBLEdBQU87SUFDUHJLLEVBQUEsR0FBS3RNLE1BQUEsQ0FBT0MsU0FBQTtJQUNaNFQ7RUFDRCxJQUFHbFosT0FBQTtFQUVKLElBQUksQ0FBQzJSLEVBQUEsRUFBSTtJQUNQO0VBQ0Q7RUFFRCxJQUFNdlMsS0FBQSxHQUFPdEcsTUFBQSxDQUFPa0UsSUFBQSxDQUFLcUksTUFBQSxFQUFRc00sRUFBRTtFQUNuQyxJQUFNeFIsT0FBQSxHQUFVNmIsSUFBQSxLQUFTO0VBRXpCLFNBQVcsQ0FBQzFhLENBQUEsRUFBR3lCLENBQUMsS0FBS2pLLE1BQUEsQ0FBT3NELE1BQUEsQ0FBT2lKLE1BQUEsRUFBUTtJQUN6Q3NNLEVBQUEsRUFBSXZTLEtBQUE7SUFDSmthLEtBQUE7SUFDQUosS0FBQTtJQUNBL1k7RUFDRCxJQUFHO0lBQ0YsSUFBSXhHLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3RGLENBQUMsR0FBRztJQUNwQixJQUFJL0gsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxHQUFHO01BQ3JCLElBQ0V4WSxJQUFBLENBQUtzSSxVQUFBLENBQVdzQixDQUFBLEVBQUc0TyxFQUFBLENBQUc3RixNQUFBLENBQU85TyxJQUFJLEtBQ2pDN0QsSUFBQSxDQUFLc0ksVUFBQSxDQUFXc0IsQ0FBQSxFQUFHNE8sRUFBQSxDQUFHNUYsS0FBQSxDQUFNL08sSUFBSSxHQUNoQztRQUNBLE9BQU8sQ0FBQ3NFLENBQUEsRUFBR3lCLENBQUM7TUFDYjtJQUNGLE9BQU07TUFDTCxJQUFJLENBQUM1SixJQUFBLENBQUsrSCxNQUFBLENBQU85QixLQUFBLEVBQU0yRCxDQUFDLEdBQUc7UUFDekIsT0FBTyxDQUFDekIsQ0FBQSxFQUFHeUIsQ0FBQztNQUNiO0lBQ0Y7RUFDRjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENPLElBQU1qSixPQUFBLEdBQXNDQSxDQUFDdUwsTUFBQSxFQUFRVCxHQUFBLEVBQUs1QyxLQUFBLEtBQVM7RUFDeEUsSUFBTTtJQUFFc0Q7RUFBVyxJQUFHRCxNQUFBO0VBRXRCLElBQUlDLFNBQUEsRUFBVztJQUNiLElBQU00VCxLQUFBLEdBQVFBLENBQUMzVCxLQUFBLEVBQVluRyxLQUFBLEtBQWM7TUFDdkMsSUFBSSxDQUFDekYsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxHQUFHO1FBQ3RCLE9BQU87TUFDUjtNQUNELElBQU0sQ0FBQzBXLFdBQUEsRUFBWTVMLFVBQVUsSUFBSXZYLE1BQUEsQ0FBT2lFLE1BQUEsQ0FBT3NJLE1BQUEsRUFBUWpHLEtBQUk7TUFDM0QsT0FBTyxDQUFDaUcsTUFBQSxDQUFPbU0sTUFBQSxDQUFPeUssV0FBVSxLQUFLNVcsTUFBQSxDQUFPNlcsWUFBQSxDQUFhRCxXQUFVOztJQUVyRSxJQUFNRSxpQkFBQSxHQUFvQjVpQixLQUFBLENBQU0rVCxVQUFBLENBQVdoSSxTQUFTO0lBQ3BELElBQUk4Vyx5QkFBQSxHQUE0QjtJQUNoQyxJQUFJLENBQUNELGlCQUFBLEVBQW1CO01BQ3RCLElBQU0sQ0FBQ0UsWUFBQSxFQUFjQyxZQUFZLElBQUl4akIsTUFBQSxDQUFPNkQsSUFBQSxDQUFLMEksTUFBQSxFQUFRQyxTQUFTO01BQ2xFLElBQUkrVyxZQUFBLElBQWdCbkQsS0FBQSxDQUFNbUQsWUFBQSxFQUFjQyxZQUFZLEdBQUc7UUFDckQsSUFBTSxDQUFDQyxVQUFVLElBQUl6akIsTUFBQSxDQUFPaUUsTUFBQSxDQUFPc0ksTUFBQSxFQUFRaVgsWUFBWTtRQUN2REYseUJBQUEsR0FDRUcsVUFBQSxJQUFjbFgsTUFBQSxDQUFPNlcsWUFBQSxDQUFhSyxVQUFVO01BQy9DO0lBQ0Y7SUFDRCxJQUFJSixpQkFBQSxJQUFxQkMseUJBQUEsRUFBMkI7TUFDbER4aUIsVUFBQSxDQUFXa0UsUUFBQSxDQUNUdUgsTUFBQSxFQUNBO1FBQUUsQ0FBQ1QsR0FBQSxHQUFNNUM7TUFBSyxHQUNkO1FBQ0VrWCxLQUFBO1FBQ0FzRCxLQUFBLEVBQU87UUFDUGxELEtBQUEsRUFBTztNQUNSO0lBRUosT0FBTTtNQUNMLElBQU1tRCxNQUFBLEdBQUtDLGVBQUEsQ0FBQUEsZUFBQSxDQUNMLElBQUE1akIsTUFBQSxDQUFPd0QsS0FBQSxDQUFNK0ksTUFBTSxLQUFLLEVBQUU7UUFDOUIsQ0FBQ1QsR0FBQSxHQUFNNUM7T0FDUjtNQUVEcUQsTUFBQSxDQUFPL0ksS0FBQSxHQUFRbWdCLE1BQUE7TUFDZixJQUFJLENBQUMvYyxRQUFBLENBQVM2RyxHQUFBLENBQUlsQixNQUFNLEdBQUc7UUFDekJBLE1BQUEsQ0FBT29NLFFBQUEsQ0FBUTtNQUNoQjtJQUNGO0VBQ0Y7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pETyxJQUFNMVgsS0FBQSxHQUFrQyxTQUFsQzRpQixPQUFtQ3RYLE1BQUEsRUFBUXNNLEVBQUEsRUFBb0I7RUFBQSxJQUFoQjNSLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUNwRSxJQUFNNkwsTUFBQSxHQUFTaFQsTUFBQSxDQUFPcUUsS0FBQSxDQUFNa0ksTUFBQSxFQUFRc00sRUFBQSxFQUFJO0lBQUVpTCxJQUFBLEVBQU07RUFBSyxDQUFFO0VBQ3ZELElBQU03USxLQUFBLEdBQVFqVCxNQUFBLENBQU82QixHQUFBLENBQUkwSyxNQUFBLEVBQVEsRUFBRTtFQUNuQyxJQUFNd0csTUFBQSxHQUFRO0lBQUVDLE1BQUE7SUFBUUM7O0VBQ3hCLElBQU07SUFBRW1KLFFBQUEsR0FBVztFQUFHLElBQUdsVixPQUFBO0VBQ3pCLElBQUk2YyxDQUFBLEdBQUk7RUFDUixJQUFJaFMsTUFBQTtFQUVKLFNBQVc5SCxDQUFBLElBQUtqSyxNQUFBLENBQU93RSxTQUFBLENBQVUrSCxNQUFBLEVBQU15WCxlQUFBLENBQUFBLGVBQUEsS0FDbEM5YyxPQUFPO0lBQ1YyUixFQUFBLEVBQUk5RjtFQUFLLEVBQ1YsR0FBRztJQUNGLElBQUlnUixDQUFBLEdBQUkzSCxRQUFBLEVBQVU7TUFDaEI7SUFDRDtJQUVELElBQUkySCxDQUFBLEtBQU0sR0FBRztNQUNYaFMsTUFBQSxHQUFTOUgsQ0FBQTtJQUNWO0lBRUQ4WixDQUFBO0VBQ0Q7RUFFRCxPQUFPaFMsTUFBQTtBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJPLElBQU01USxNQUFBLEdBQW9DLFNBQXBDOGlCLFFBQXFDMVgsTUFBQSxFQUFRc00sRUFBQSxFQUFvQjtFQUFBLElBQWhCM1IsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ3RFLElBQU02TCxNQUFBLEdBQVNoVCxNQUFBLENBQU91RixLQUFBLENBQU1nSCxNQUFBLEVBQVEsRUFBRTtFQUN0QyxJQUFNMEcsS0FBQSxHQUFRalQsTUFBQSxDQUFPcUUsS0FBQSxDQUFNa0ksTUFBQSxFQUFRc00sRUFBQSxFQUFJO0lBQUVpTCxJQUFBLEVBQU07RUFBTyxDQUFFO0VBQ3hELElBQU0vUSxNQUFBLEdBQVE7SUFBRUMsTUFBQTtJQUFRQzs7RUFDeEIsSUFBTTtJQUFFbUosUUFBQSxHQUFXO0VBQUcsSUFBR2xWLE9BQUE7RUFDekIsSUFBSTZjLENBQUEsR0FBSTtFQUNSLElBQUloUyxNQUFBO0VBRUosU0FBVzlILENBQUEsSUFBS2pLLE1BQUEsQ0FBT3dFLFNBQUEsQ0FBVStILE1BQUEsRUFBTTJYLGVBQUEsQ0FBQUEsZUFBQSxLQUNsQ2hkLE9BQU87SUFDVjJSLEVBQUEsRUFBSTlGLE1BQUE7SUFDSjFMLE9BQUEsRUFBUztFQUFJLEVBQ2QsR0FBRztJQUNGLElBQUkwYyxDQUFBLEdBQUkzSCxRQUFBLEVBQVU7TUFDaEI7SUFDRDtJQUVELElBQUkySCxDQUFBLEtBQU0sR0FBRztNQUNYaFMsTUFBQSxHQUFTOUgsQ0FBQTtJQUNWO0lBRUQ4WixDQUFBO0VBQ0Q7RUFFRCxPQUFPaFMsTUFBQTtBQUNUO0lDdEJhelEsY0FBQSxHQUErREEsQ0FDMUVpTCxNQUFBLEVBQ0F1TSxJQUFBLEtBQ0U7RUFDRixJQUFNO0lBQUV0TTtFQUFXLElBQUdELE1BQUE7RUFFdEIsSUFBSUMsU0FBQSxJQUFhL0wsS0FBQSxDQUFNOFQsV0FBQSxDQUFZL0gsU0FBUyxHQUFHO0lBQzdDMUwsVUFBQSxDQUFXeWYsTUFBQSxDQUFPaFUsTUFBQSxFQUFRO01BQUV1TSxJQUFBO01BQU16UixPQUFBLEVBQVM7SUFBSSxDQUFFO0VBQ2xEO0FBQ0g7SUNUYTlGLGFBQUEsR0FBNkRBLENBQ3hFZ0wsTUFBQSxFQUNBdU0sSUFBQSxLQUNFO0VBQ0YsSUFBTTtJQUFFdE07RUFBVyxJQUFHRCxNQUFBO0VBRXRCLElBQUlDLFNBQUEsSUFBYS9MLEtBQUEsQ0FBTThULFdBQUEsQ0FBWS9ILFNBQVMsR0FBRztJQUM3QzFMLFVBQUEsQ0FBV3lmLE1BQUEsQ0FBT2hVLE1BQUEsRUFBUTtNQUFFdU07SUFBTTtFQUNuQztBQUNIO0lDVmF0WCxjQUFBLEdBQW9ELFNBQXBEMmlCLGdCQUNYNVgsTUFBQSxFQUVFO0VBQUEsSUFERjtJQUFFNlgsU0FBQSxHQUFZO0VBQVMsSUFBRWpkLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLENBQUc7RUFFNUIsSUFBTTtJQUFFcUY7RUFBVyxJQUFHRCxNQUFBO0VBRXRCLElBQUlDLFNBQUEsSUFBYS9MLEtBQUEsQ0FBTStULFVBQUEsQ0FBV2hJLFNBQVMsR0FBRztJQUM1QzFMLFVBQUEsQ0FBV3lmLE1BQUEsQ0FBT2hVLE1BQUEsRUFBUTtNQUFFbEYsT0FBQSxFQUFTK2MsU0FBQSxLQUFjO0lBQVUsQ0FBRTtFQUNoRTtBQUNIO0lDWGF6aUIsS0FBQSxHQUFrQ0EsQ0FBQzRLLE1BQUEsRUFBUXNNLEVBQUEsS0FBTTtFQUM1RCxPQUFPLENBQUM3WSxNQUFBLENBQU91RixLQUFBLENBQU1nSCxNQUFBLEVBQVFzTSxFQUFFLEdBQUc3WSxNQUFBLENBQU82QixHQUFBLENBQUkwSyxNQUFBLEVBQVFzTSxFQUFFLENBQUM7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEYWpYLGVBQUEsR0FBc0QsU0FBdER5aUIsaUJBQ1g5WCxNQUFBLEVBRUU7RUFBQSxJQURGckYsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVYsT0FBT25ILE1BQUEsQ0FBT2UsS0FBQSxDQUFNd0wsTUFBQSxFQUFNK1gsZUFBQSxDQUFBQSxlQUFBLEtBQ3JCcGQsT0FBTztJQUNWa1osS0FBQSxFQUFPNVgsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPdVksaUJBQUEsQ0FBa0JoTSxNQUFBLEVBQVEvRCxDQUFDO0VBQUMsRUFDeEU7QUFDSDtJQ1RhM0csR0FBQSxHQUE4QkEsQ0FBQzBLLE1BQUEsRUFBUXNNLEVBQUEsS0FBTTtFQUN4RCxPQUFPN1ksTUFBQSxDQUFPcUUsS0FBQSxDQUFNa0ksTUFBQSxFQUFRc00sRUFBQSxFQUFJO0lBQUVpTCxJQUFBLEVBQU07RUFBSyxDQUFFO0FBQ2pEO0lDRmFoaUIsS0FBQSxHQUFrQ0EsQ0FBQ3lLLE1BQUEsRUFBUXNNLEVBQUEsS0FBTTtFQUM1RCxJQUFNdlMsS0FBQSxHQUFPdEcsTUFBQSxDQUFPa0UsSUFBQSxDQUFLcUksTUFBQSxFQUFRc00sRUFBQSxFQUFJO0lBQUVpTCxJQUFBLEVBQU07RUFBTyxDQUFFO0VBQ3RELE9BQU85akIsTUFBQSxDQUFPNkQsSUFBQSxDQUFLMEksTUFBQSxFQUFRakcsS0FBSTtBQUNqQztJQ0ZhdkUsUUFBQSxHQUF3Q0EsQ0FBQ3dLLE1BQUEsRUFBUXNNLEVBQUEsS0FBTTtFQUNsRSxJQUFNOUYsTUFBQSxHQUFRL1MsTUFBQSxDQUFPMEUsS0FBQSxDQUFNNkgsTUFBQSxFQUFRc00sRUFBRTtFQUNyQyxPQUFPMVksSUFBQSxDQUFLNEIsUUFBQSxDQUFTd0ssTUFBQSxFQUFRd0csTUFBSztBQUNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0hhN1EsT0FBQSxHQUFtQyxTQUFuQ3FpQixTQUFvQ2hZLE1BQUEsRUFBd0I7RUFBQSxJQUFoQnJGLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUNqRSxPQUFPbkgsTUFBQSxDQUFPZSxLQUFBLENBQU13TCxNQUFBLEVBQU1pWSxlQUFBLENBQUFBLGVBQUEsS0FDckJ0ZCxPQUFPO0lBQ1ZrWixLQUFBLEVBQU81WCxDQUFBLElBQUt2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU8wWSxNQUFBLENBQU9uTSxNQUFBLEVBQVEvRCxDQUFDO0VBQUMsRUFDN0Q7QUFDSDtJQ0xhckcsU0FBQSxHQUEwQ0EsQ0FBQ29LLE1BQUEsRUFBUXNGLE9BQUEsS0FBVztFQUN6RSxPQUFPQSxPQUFBLENBQVFqRixRQUFBLENBQVM2WCxJQUFBLENBQ3RCamMsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQyxDQUFDO0FBRTFEO0lDSmFwRyxVQUFBLEdBQTRDQSxDQUFDbUssTUFBQSxFQUFRc0YsT0FBQSxLQUFXO0VBQzNFLE9BQU9BLE9BQUEsQ0FBUWpGLFFBQUEsQ0FBUzZYLElBQUEsQ0FDdEJqYyxDQUFBLElBQUszSCxJQUFBLENBQUtpTixNQUFBLENBQU90RixDQUFDLEtBQUt4SSxNQUFBLENBQU93WSxRQUFBLENBQVNqTSxNQUFBLEVBQVEvRCxDQUFDLENBQUM7QUFFckQ7SUNKYW5HLE9BQUEsR0FBc0NBLENBQUNrSyxNQUFBLEVBQVFqRyxLQUFBLEtBQVE7RUFDbEUsT0FBT25HLElBQUEsQ0FBS3dXLEdBQUEsQ0FBSXBLLE1BQUEsRUFBUWpHLEtBQUk7QUFDOUI7SUNGYWhFLFFBQUEsR0FBd0NBLENBQUNpSyxNQUFBLEVBQVFzRixPQUFBLEtBQVc7RUFDdkUsT0FBT0EsT0FBQSxDQUFRakYsUUFBQSxDQUFTckUsS0FBQSxDQUFNQyxDQUFBLElBQUszSCxJQUFBLENBQUtpTixNQUFBLENBQU90RixDQUFDLENBQUM7QUFDbkQ7QUNGYSxJQUFBakcsV0FBQSxHQUE4Q2dLLE1BQUEsSUFBUztFQUNsRXpMLFVBQUEsQ0FBV3dFLFVBQUEsQ0FBV2lILE1BQUEsRUFBUTtJQUFFbVksTUFBQSxFQUFRO0VBQU07QUFDaEQ7QUNGTyxJQUFNamlCLFVBQUEsR0FBNENBLENBQ3ZEOEosTUFBQSxFQUNBRSxLQUFBLEVBQ0F2RixPQUFBLEtBQ0U7RUFDRnBHLFVBQUEsQ0FBVzRCLFdBQUEsQ0FBWTZKLE1BQUEsRUFBUUUsS0FBQSxFQUFNdkYsT0FBTztBQUM5QztBQ05hLElBQUF2RSxlQUFBLEdBQXNENEosTUFBQSxJQUFTO0VBQzFFekwsVUFBQSxDQUFXd0UsVUFBQSxDQUFXaUgsTUFBQSxFQUFRO0lBQUVtWSxNQUFBLEVBQVE7RUFBTTtBQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLElBQU05aEIsVUFBQSxHQUE0QyxTQUE1QytoQixZQUNYcFksTUFBQSxFQUNBVSxJQUFBLEVBRUU7RUFBQSxJQURGL0YsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVYsSUFBTTtJQUFFcUYsU0FBQTtJQUFXaEosS0FBQSxFQUFBbWdCO0VBQU8sSUFBR3BYLE1BQUE7RUFFN0IsSUFBSUMsU0FBQSxFQUFXO0lBQ2IsSUFBSW1YLE1BQUEsRUFBTztNQUNULElBQU1sWCxLQUFBLEdBQUltWSxlQUFBO1FBQUszWDtNQUFJLEdBQUswVyxNQUFLO01BQzdCN2lCLFVBQUEsQ0FBVzRCLFdBQUEsQ0FBWTZKLE1BQUEsRUFBUUUsS0FBQSxFQUFNO1FBQ25Db00sRUFBQSxFQUFJM1IsT0FBQSxDQUFRMlIsRUFBQTtRQUNaMkgsS0FBQSxFQUFPdFosT0FBQSxDQUFRc1o7TUFDaEI7SUFDRixPQUFNO01BQ0wxZixVQUFBLENBQVc4QixVQUFBLENBQVcySixNQUFBLEVBQVFVLElBQUEsRUFBTS9GLE9BQU87SUFDNUM7SUFFRHFGLE1BQUEsQ0FBTy9JLEtBQUEsR0FBUTtFQUNoQjtBQUNIO0lDckJhWCxPQUFBLEdBQXNDQSxDQUFDMEosTUFBQSxFQUFRckQsS0FBQSxLQUFTO0VBQ25FLE9BQU8sQ0FBQ3FELE1BQUEsQ0FBT2lNLFFBQUEsQ0FBU3RQLEtBQUs7QUFDL0I7QUNGTyxJQUFNcEcsTUFBQSxHQUFvQ0EsQ0FBQ3lKLE1BQUEsRUFBUS9GLE1BQUEsRUFBT3FTLEVBQUEsS0FBTTtFQUNyRSxPQUFPN1ksTUFBQSxDQUFPbUQsT0FBQSxDQUFRb0osTUFBQSxFQUFRL0YsTUFBQSxFQUFPcVMsRUFBRSxLQUFLN1ksTUFBQSxDQUFPaUQsS0FBQSxDQUFNc0osTUFBQSxFQUFRL0YsTUFBQSxFQUFPcVMsRUFBRTtBQUM1RTtJQ0RhN1YsT0FBQSxHQUFzQ0EsQ0FBQ3VKLE1BQUEsRUFBUXNGLE9BQUEsS0FBVztFQUNyRSxJQUFNO0lBQUVqRjtFQUFVLElBQUdpRixPQUFBO0VBQ3JCLElBQU0sQ0FBQ2dULE1BQUssSUFBSWpZLFFBQUE7RUFDaEIsT0FDRUEsUUFBQSxDQUFTeEYsTUFBQSxLQUFXLEtBQ25Cd0YsUUFBQSxDQUFTeEYsTUFBQSxLQUFXLEtBQ25CdkcsSUFBQSxDQUFLaU4sTUFBQSxDQUFPK1csTUFBSyxLQUNqQkEsTUFBQSxDQUFNNVgsSUFBQSxLQUFTLE1BQ2YsQ0FBQ1YsTUFBQSxDQUFPbU0sTUFBQSxDQUFPN0csT0FBTztBQUU1QjtBQ1ZPLElBQU01TyxLQUFBLEdBQWtDQSxDQUFDc0osTUFBQSxFQUFRL0YsTUFBQSxFQUFPcVMsRUFBQSxLQUFNO0VBQ25FLElBQU0xRixJQUFBLEdBQU1uVCxNQUFBLENBQU82QixHQUFBLENBQUkwSyxNQUFBLEVBQVFzTSxFQUFFO0VBQ2pDLE9BQU90WSxLQUFBLENBQU02SCxNQUFBLENBQU81QixNQUFBLEVBQU8yTSxJQUFHO0FBQ2hDO0FDSGEsSUFBQWpRLGFBQUEsR0FBa0RxSixNQUFBLElBQVM7RUFDdEUsSUFBTTBNLGNBQUEsR0FBZ0JwUyxXQUFBLENBQVk0RyxHQUFBLENBQUlsQixNQUFNO0VBQzVDLE9BQU8wTSxjQUFBLEtBQWtCLFNBQVksT0FBT0EsY0FBQTtBQUM5QztBQ0hPLElBQU05VixPQUFBLEdBQXNDQSxDQUFDb0osTUFBQSxFQUFRL0YsTUFBQSxFQUFPcVMsRUFBQSxLQUFNO0VBRXZFLElBQUlyUyxNQUFBLENBQU13RyxNQUFBLEtBQVcsR0FBRztJQUN0QixPQUFPO0VBQ1I7RUFFRCxJQUFNNEcsTUFBQSxHQUFRNVQsTUFBQSxDQUFPdUYsS0FBQSxDQUFNZ0gsTUFBQSxFQUFRc00sRUFBRTtFQUNyQyxPQUFPdFksS0FBQSxDQUFNNkgsTUFBQSxDQUFPNUIsTUFBQSxFQUFPb04sTUFBSztBQUNsQztJQ1RheFEsSUFBQSxHQUFnQ0EsQ0FBQ21KLE1BQUEsRUFBUXNNLEVBQUEsS0FBTTtFQUMxRCxJQUFNdlMsS0FBQSxHQUFPdEcsTUFBQSxDQUFPa0UsSUFBQSxDQUFLcUksTUFBQSxFQUFRc00sRUFBQSxFQUFJO0lBQUVpTCxJQUFBLEVBQU07RUFBSyxDQUFFO0VBQ3BELE9BQU85akIsTUFBQSxDQUFPNkQsSUFBQSxDQUFLMEksTUFBQSxFQUFRakcsS0FBSTtBQUNqQztBQ0ZPLElBQU1qRCxJQUFBLEdBQWdDLFNBQWhDeWhCLE1BQWlDdlksTUFBQSxFQUFRc00sRUFBQSxFQUFvQjtFQUFBLElBQWhCM1IsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ2xFLElBQU1iLEtBQUEsR0FBT3RHLE1BQUEsQ0FBT2tFLElBQUEsQ0FBS3FJLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTNSLE9BQU87RUFDNUMsSUFBTXVGLEtBQUEsR0FBT3RNLElBQUEsQ0FBS2tELElBQUEsQ0FBS2tKLE1BQUEsRUFBUWpHLEtBQUk7RUFDbkMsT0FBTyxDQUFDbUcsS0FBQSxFQUFNbkcsS0FBSTtBQUNwQjtBQ0hNLFNBQVdoRCxPQUNmaUosTUFBQSxFQUFjO0VBQUEsSUFDZHJGLE9BQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBa0M7RUFBRTtJQUVwQyxJQUFNO01BQUUwUixFQUFBLEdBQUt0TSxNQUFBLENBQU9DLFNBQUE7TUFBV25GLE9BQUEsR0FBVTtNQUFPbVosS0FBQSxHQUFRO0lBQU8sSUFBR3RaLE9BQUE7SUFDbEUsSUFBSTtNQUFFa1o7SUFBTyxJQUFHbFosT0FBQTtJQUVoQixJQUFJa1osS0FBQSxJQUFTLE1BQU07TUFDakJBLEtBQUEsR0FBUUEsQ0FBQSxLQUFNO0lBQ2Y7SUFFRCxJQUFJLENBQUN2SCxFQUFBLEVBQUk7TUFDUDtJQUNEO0lBRUQsSUFBTStJLE9BQUEsR0FBeUI7SUFDL0IsSUFBTXRiLEtBQUEsR0FBT3RHLE1BQUEsQ0FBT2tFLElBQUEsQ0FBS3FJLE1BQUEsRUFBUXNNLEVBQUU7SUFFbkMsU0FBVyxDQUFDclEsQ0FBQSxFQUFHeUIsQ0FBQyxLQUFLOUosSUFBQSxDQUFLbUQsTUFBQSxDQUFPaUosTUFBQSxFQUFRakcsS0FBSSxHQUFHO01BQzlDLElBQUksQ0FBQzhaLEtBQUEsQ0FBTTVYLENBQUEsRUFBR3lCLENBQUMsR0FBRztRQUNoQjtNQUNEO01BRUQyWCxPQUFBLENBQU8vWixJQUFBLENBQUssQ0FBQ1csQ0FBQSxFQUFHeUIsQ0FBQyxDQUFpQjtNQUVsQyxJQUFJLENBQUN1VyxLQUFBLElBQVN2Z0IsT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPMFksTUFBQSxDQUFPbk0sTUFBQSxFQUFRL0QsQ0FBQyxHQUFHO1FBQzlEO01BQ0Q7SUFDRjtJQUVELElBQUluQixPQUFBLEVBQVM7TUFDWHVhLE9BQUEsQ0FBT3ZhLE9BQUEsQ0FBTztJQUNmO0lBRUQsT0FBT3VhLE9BQUE7SUFDUjtBQUFBOzs7SUMvQllwZSxLQUFBLEdBQWtDLFNBQUF1aEIsT0FBQ3hZLE1BQUEsRUFBd0I7RUFDdEUsSUFBTTtJQUFFL0ksS0FBQSxFQUFBbWdCLE1BQUE7SUFBT25YO0VBQVcsSUFBR0QsTUFBQTtFQUU3QixJQUFJLENBQUNDLFNBQUEsRUFBVztJQUNkLE9BQU87RUFDUjtFQUNELElBQUk7SUFBRXdHLE1BQUE7SUFBUUM7RUFBTyxJQUFHekcsU0FBQTtFQUV4QixJQUFJbVgsTUFBQSxFQUFPO0lBQ1QsT0FBT0EsTUFBQTtFQUNSO0VBRUQsSUFBSWxqQixLQUFBLENBQU0rVCxVQUFBLENBQVdoSSxTQUFTLEdBQUc7SUFDL0IsSUFBTTBHLFVBQUEsR0FBYXpTLEtBQUEsQ0FBTXlTLFVBQUEsQ0FBVzFHLFNBQVM7SUFDN0MsSUFBSTBHLFVBQUEsRUFBWTtNQUNiLENBQUNELEtBQUEsRUFBT0QsTUFBTSxJQUFJLENBQUNBLE1BQUEsRUFBUUMsS0FBSztJQUNsQztJQUtELElBQU0rUixNQUFBLEdBQVFobEIsTUFBQSxDQUFPaUQsS0FBQSxDQUFNc0osTUFBQSxFQUFReUcsTUFBQSxFQUFRQSxNQUFBLENBQU85TyxJQUFJO0lBQ3RELElBQUk4Z0IsTUFBQSxFQUFPO01BQ1QsSUFBTTVYLE1BQUEsR0FBUXBOLE1BQUEsQ0FBT2lCLEtBQUEsQ0FBTXNMLE1BQUEsRUFBUXlHLE1BQWU7TUFDbEQsSUFBSTVGLE1BQUEsRUFBTztRQUNUNEYsTUFBQSxHQUFTNUYsTUFBQTtNQUNWO0lBQ0Y7SUFFRCxJQUFNLENBQUNnVCxLQUFLLElBQUlwZ0IsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO01BQ25DNlQsS0FBQSxFQUFPdmYsSUFBQSxDQUFLaU4sTUFBQTtNQUNaK0ssRUFBQSxFQUFJO1FBQ0Y3RixNQUFBO1FBQ0FDO01BQ0Q7SUFDRjtJQUVELElBQUltTixLQUFBLEVBQU87TUFDVCxJQUFNLENBQUNsVCxLQUFJLElBQUlrVCxLQUFBO01BQ1QsSUFBVzZFLEtBQUEsR0FBSXRTLHdCQUFBLENBQUt6RixLQUFBLEVBQUlnWSxXQUFBO01BQzlCLE9BQU9ELEtBQUE7SUFDUixPQUFNO01BQ0wsT0FBTztJQUNSO0VBQ0Y7RUFFRCxJQUFNO0lBQUUvZ0IsSUFBQSxFQUFBb0M7RUFBTSxJQUFHME0sTUFBQTtFQUVqQixJQUFJLENBQUN2RyxLQUFJLElBQUl6TSxNQUFBLENBQU9xRCxJQUFBLENBQUtrSixNQUFBLEVBQVFqRyxLQUFJO0VBRXJDLElBQUkwTSxNQUFBLENBQU9oRyxNQUFBLEtBQVcsR0FBRztJQUN2QixJQUFNVyxJQUFBLEdBQU8zTixNQUFBLENBQU95RSxRQUFBLENBQVM4SCxNQUFBLEVBQVE7TUFBRXNNLEVBQUEsRUFBSXZTLEtBQUE7TUFBTThaLEtBQUEsRUFBT3ZmLElBQUEsQ0FBS2lOO0lBQU0sQ0FBRTtJQUNyRSxJQUFNcVgsVUFBQSxHQUFhbmxCLE1BQUEsQ0FBT2UsS0FBQSxDQUFNd0wsTUFBQSxFQUFRO01BQ3RDNlQsS0FBQSxFQUFPNVgsQ0FBQSxJQUNMdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUNuQnhJLE1BQUEsQ0FBTzBZLE1BQUEsQ0FBT25NLE1BQUEsRUFBUS9ELENBQUMsS0FDdkIrRCxNQUFBLENBQU82VyxZQUFBLENBQWE1YSxDQUFDO0lBQ3hCO0lBQ0QsSUFBSSxDQUFDMmMsVUFBQSxFQUFZO01BQ2YsSUFBTUMsS0FBQSxHQUFRcGxCLE1BQUEsQ0FBT2UsS0FBQSxDQUFNd0wsTUFBQSxFQUFRO1FBQ2pDNlQsS0FBQSxFQUFPNVgsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQztNQUM3RDtNQUVELElBQUltRixJQUFBLElBQVF5WCxLQUFBLEVBQU87UUFDakIsSUFBTSxDQUFDaE0sUUFBQSxFQUFVMUwsUUFBUSxJQUFJQyxJQUFBO1FBQzdCLElBQU0sR0FBRzBYLFNBQVMsSUFBSUQsS0FBQTtRQUV0QixJQUFJL2tCLElBQUEsQ0FBS3NJLFVBQUEsQ0FBVzBjLFNBQUEsRUFBVzNYLFFBQVEsR0FBRztVQUN4Q2pCLEtBQUEsR0FBTzJNLFFBQUE7UUFDUjtNQUNGO0lBQ0Y7RUFDRjtFQUVLLElBQVdwRixJQUFBLEdBQUlyQix3QkFBQSxDQUFLbEcsS0FBQSxFQUFJNlksWUFBQTtFQUM5QixPQUFPdFIsSUFBQTtBQUNUO0lDaEZhcFEsSUFBQSxHQUFnQyxTQUFBMmhCLE1BQUNoWixNQUFBLEVBQXdCO0VBQUEsSUFBaEJyRixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFDOUQsSUFBTTtJQUFFK2IsSUFBQSxHQUFPO0lBQVUxQyxLQUFBLEdBQVE7RUFBSyxJQUFLdFosT0FBQTtFQUMzQyxJQUFJO0lBQUVrWixLQUFBO0lBQU92SCxFQUFBLEdBQUt0TSxNQUFBLENBQU9DO0VBQVMsSUFBS3RGLE9BQUE7RUFFdkMsSUFBSSxDQUFDMlIsRUFBQSxFQUFJO0lBQ1A7RUFDRDtFQUVELElBQU0yTSxrQkFBQSxHQUFxQnhsQixNQUFBLENBQU9pQixLQUFBLENBQU1zTCxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7SUFBRTJIO0VBQUssQ0FBRTtFQUU3RCxJQUFJLENBQUNnRixrQkFBQSxFQUFvQjtFQUV6QixJQUFNLEdBQUd2TyxFQUFFLElBQUlqWCxNQUFBLENBQU9vRCxJQUFBLENBQUttSixNQUFBLEVBQVEsRUFBRTtFQUVyQyxJQUFNa1osSUFBQSxHQUFhLENBQUNELGtCQUFBLENBQW1CdGhCLElBQUEsRUFBTStTLEVBQUU7RUFFL0MsSUFBSTVXLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsS0FBS0EsRUFBQSxDQUFHelIsTUFBQSxLQUFXLEdBQUc7SUFDdEMsTUFBTSxJQUFJcUMsS0FBQSxDQUFLLDhDQUErQztFQUMvRDtFQUVELElBQUkyVyxLQUFBLElBQVMsTUFBTTtJQUNqQixJQUFJL2YsSUFBQSxDQUFLNEksTUFBQSxDQUFPNFAsRUFBRSxHQUFHO01BQ25CLElBQU0sQ0FBQ25NLE9BQU0sSUFBSTFNLE1BQUEsQ0FBT2lFLE1BQUEsQ0FBT3NJLE1BQUEsRUFBUXNNLEVBQUU7TUFDekN1SCxLQUFBLEdBQVE1WCxDQUFBLElBQUtrRSxPQUFBLENBQU9FLFFBQUEsQ0FBUzJHLFFBQUEsQ0FBUy9LLENBQUM7SUFDeEMsT0FBTTtNQUNMNFgsS0FBQSxHQUFRQSxDQUFBLEtBQU07SUFDZjtFQUNGO0VBRUQsSUFBTSxDQUFDbFIsS0FBSSxJQUFJbFAsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO0lBQUVzTSxFQUFBLEVBQUk0TSxJQUFBO0lBQU1yRixLQUFBO0lBQU84QyxJQUFBO0lBQU0xQztFQUFPO0VBQ3BFLE9BQU90UixLQUFBO0FBQ1Q7QUNoQ08sSUFBTXJMLElBQUEsR0FBZ0MsU0FBQTZoQixNQUFDblosTUFBQSxFQUFRc00sRUFBQSxFQUFvQjtFQUFBLElBQWhCM1IsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ2xFLElBQU1iLEtBQUEsR0FBT3RHLE1BQUEsQ0FBT2tFLElBQUEsQ0FBS3FJLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTNSLE9BQU87RUFDNUMsSUFBTXVGLEtBQUEsR0FBT3RNLElBQUEsQ0FBS3NOLEdBQUEsQ0FBSWxCLE1BQUEsRUFBUWpHLEtBQUk7RUFDbEMsT0FBTyxDQUFDbUcsS0FBQSxFQUFNbkcsS0FBSTtBQUNwQjtBQ0FNLFNBQVd4QyxNQUNmeUksTUFBQSxFQUFjO0VBQUEsSUFDZHJGLE9BQUEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBaUM7RUFBRTtJQUVuQyxJQUFNO01BQ0owUixFQUFBLEdBQUt0TSxNQUFBLENBQU9DLFNBQUE7TUFDWjBXLElBQUEsR0FBTztNQUNQeUMsU0FBQSxHQUFZO01BQ1p0ZSxPQUFBLEdBQVU7TUFDVm1aLEtBQUEsR0FBUTtNQUNSbkssSUFBQSxFQUFBdVAsS0FBQTtNQUNBQyxtQkFBQSxHQUFzQjtJQUN2QixJQUFHM2UsT0FBQTtJQUNKLElBQUk7TUFBRWtaO0lBQU8sSUFBR2xaLE9BQUE7SUFFaEIsSUFBSSxDQUFDa1osS0FBQSxFQUFPO01BQ1ZBLEtBQUEsR0FBUUEsQ0FBQSxLQUFNO0lBQ2Y7SUFFRCxJQUFJLENBQUN2SCxFQUFBLEVBQUk7TUFDUDtJQUNEO0lBRUQsSUFBSTdCLElBQUE7SUFDSixJQUFJQyxFQUFBO0lBRUosSUFBSXJXLElBQUEsQ0FBSzJZLE1BQUEsQ0FBT1YsRUFBRSxHQUFHO01BQ25CN0IsSUFBQSxHQUFPNkIsRUFBQSxDQUFHO01BQ1Y1QixFQUFBLEdBQUs0QixFQUFBLENBQUc7SUFDVCxPQUFNO01BQ0wsSUFBTWdNLE1BQUEsR0FBUTdrQixNQUFBLENBQU9rRSxJQUFBLENBQUtxSSxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7UUFBRWlMLElBQUEsRUFBTTtNQUFPLENBQUU7TUFDdkQsSUFBTW5hLEtBQUEsR0FBTzNKLE1BQUEsQ0FBT2tFLElBQUEsQ0FBS3FJLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTtRQUFFaUwsSUFBQSxFQUFNO01BQUssQ0FBRTtNQUNwRDlNLElBQUEsR0FBTzNQLE9BQUEsR0FBVXNDLEtBQUEsR0FBT2tiLE1BQUE7TUFDeEI1TixFQUFBLEdBQUs1UCxPQUFBLEdBQVV3ZCxNQUFBLEdBQVFsYixLQUFBO0lBQ3hCO0lBRUQsSUFBTXlNLFdBQUEsR0FBY2pXLElBQUEsQ0FBSzJELEtBQUEsQ0FBTXlJLE1BQUEsRUFBUTtNQUNyQ2xGLE9BQUE7TUFDQTJQLElBQUE7TUFDQUMsRUFBQTtNQUNBWixJQUFBLEVBQU1DLElBQUEsSUFBaUI7UUFBQSxJQUFoQixDQUFDd1AsS0FBQSxFQUFNdlAsS0FBSSxJQUFDRCxJQUFBO1FBQ2pCLElBQUlzUCxLQUFBLElBQVFBLEtBQUEsQ0FBSyxDQUFDRSxLQUFBLEVBQU12UCxLQUFJLENBQUMsR0FBRyxPQUFPO1FBQ3ZDLElBQUksQ0FBQ3RXLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVWdSLEtBQUksR0FBRyxPQUFPO1FBQ3JDLElBQ0UsQ0FBQ3RGLEtBQUEsS0FDQXhnQixNQUFBLENBQU8wWSxNQUFBLENBQU9uTSxNQUFBLEVBQVF1WixLQUFJLEtBQUs5bEIsTUFBQSxDQUFPdVksaUJBQUEsQ0FBa0JoTSxNQUFBLEVBQVF1WixLQUFJLElBRXJFLE9BQU87UUFDVCxJQUFJRCxtQkFBQSxJQUF1QixDQUFDN2xCLE1BQUEsQ0FBT3lZLFlBQUEsQ0FBYWxNLE1BQUEsRUFBUXVaLEtBQUksR0FBRyxPQUFPO1FBQ3RFLE9BQU87TUFDVDtJQUNEO0lBRUQsSUFBTXhRLE9BQUEsR0FBMEI7SUFDaEMsSUFBSXlRLEdBQUE7SUFFSixTQUFXLENBQUN0WixLQUFBLEVBQU1uRyxLQUFJLEtBQUs4UCxXQUFBLEVBQWE7TUFDdEMsSUFDRXlQLG1CQUFBLElBQ0E1bEIsT0FBQSxDQUFRNlUsU0FBQSxDQUFVckksS0FBSSxLQUN0QixDQUFDek0sTUFBQSxDQUFPeVksWUFBQSxDQUFhbE0sTUFBQSxFQUFRRSxLQUFJLEdBQ2pDO1FBQ0E7TUFDRDtNQUVELElBQU11WixPQUFBLEdBQVVELEdBQUEsSUFBTzFsQixJQUFBLENBQUt5SCxPQUFBLENBQVF4QixLQUFBLEVBQU15ZixHQUFBLENBQUksRUFBRSxNQUFNO01BR3RELElBQUk3QyxJQUFBLEtBQVMsYUFBYThDLE9BQUEsRUFBUztRQUNqQztNQUNEO01BRUQsSUFBSSxDQUFDNUYsS0FBQSxDQUFNM1QsS0FBQSxFQUFNbkcsS0FBSSxHQUFHO1FBSXRCLElBQUlxZixTQUFBLElBQWEsQ0FBQ0ssT0FBQSxJQUFXbmxCLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3JCLEtBQUksR0FBRztVQUM5QztRQUNELE9BQU07VUFDTDtRQUNEO01BQ0Y7TUFHRCxJQUFJeVcsSUFBQSxLQUFTLFlBQVk4QyxPQUFBLEVBQVM7UUFDaENELEdBQUEsR0FBTSxDQUFDdFosS0FBQSxFQUFNbkcsS0FBSTtRQUNqQjtNQUNEO01BR0QsSUFBTTJmLElBQUEsR0FDSi9DLElBQUEsS0FBUyxXQUFXNkMsR0FBQSxHQUFPLENBQUN0WixLQUFBLEVBQU1uRyxLQUFJO01BRXhDLElBQUkyZixJQUFBLEVBQU07UUFDUixJQUFJTixTQUFBLEVBQVc7VUFDYnJRLE9BQUEsQ0FBUXpOLElBQUEsQ0FBS29lLElBQUk7UUFDbEIsT0FBTTtVQUNMLE1BQU1BLElBQUE7UUFDUDtNQUNGO01BRURGLEdBQUEsR0FBTSxDQUFDdFosS0FBQSxFQUFNbkcsS0FBSTtJQUNsQjtJQUdELElBQUk0YyxJQUFBLEtBQVMsWUFBWTZDLEdBQUEsRUFBSztNQUM1QixJQUFJSixTQUFBLEVBQVc7UUFDYnJRLE9BQUEsQ0FBUXpOLElBQUEsQ0FBS2tlLEdBQUc7TUFDakIsT0FBTTtRQUNMLE1BQU1BLEdBQUE7TUFDUDtJQUNGO0lBSUQsSUFBSUosU0FBQSxFQUFXO01BQ2IsT0FBT3JRLE9BQUE7SUFDUjtJQUNGO0FBQUE7SUN2SFl2UixTQUFBLEdBQTBDLFNBQTFDbWlCLFdBQ1gzWixNQUFBLEVBRUU7RUFBQSxJQURGckYsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVYsSUFBTTtJQUFFZ2YsS0FBQSxHQUFRO0lBQU90YztFQUFTLElBQUszQyxPQUFBO0VBQ3JDLElBQU1rZixjQUFBLEdBQWlCQyxPQUFBLElBQWtCO0lBQ3ZDLE9BQU81ZixXQUFBLENBQVlnSCxHQUFBLENBQUk0WSxPQUFNLEtBQUs7O0VBR3BDLElBQU1DLGdCQUFBLEdBQW9CRCxPQUFBLElBQWtCO0lBQzFDLE9BQU8xZixlQUFBLENBQWdCOEcsR0FBQSxDQUFJNFksT0FBTSxLQUFLLG1CQUFJbFAsR0FBQSxDQUFHOztFQUcvQyxJQUFNb1AsWUFBQSxHQUFnQkYsT0FBQSxJQUF3QjtJQUM1QyxJQUFNL2YsS0FBQSxHQUFPOGYsY0FBQSxDQUFjQyxPQUFNLEVBQUVHLEdBQUEsQ0FBRztJQUN0QyxJQUFNMWEsR0FBQSxHQUFNeEYsS0FBQSxDQUFLbVIsSUFBQSxDQUFLLEdBQUc7SUFDekI2TyxnQkFBQSxDQUFpQkQsT0FBTSxFQUFFOUYsTUFBQSxDQUFPelUsR0FBRztJQUNuQyxPQUFPeEYsS0FBQTs7RUFHVCxJQUFJLENBQUN0RyxNQUFBLENBQU9rRCxhQUFBLENBQWNxSixNQUFNLEdBQUc7SUFDakM7RUFDRDtFQUVELElBQUk0WixLQUFBLEVBQU87SUFDVCxJQUFNTSxRQUFBLEdBQVd0ZCxLQUFBLENBQU02TixJQUFBLENBQUs3VyxJQUFBLENBQUsyRCxLQUFBLENBQU15SSxNQUFNLEdBQUcrSixJQUFBO01BQUEsSUFBQyxHQUFHck0sQ0FBQyxJQUFDcU0sSUFBQTtNQUFBLE9BQUtyTSxDQUFBO0tBQUU7SUFDN0QsSUFBTXljLFdBQUEsR0FBYyxJQUFJdlAsR0FBQSxDQUFJc1AsUUFBQSxDQUFTalAsR0FBQSxDQUFJdk4sQ0FBQSxJQUFLQSxDQUFBLENBQUV3TixJQUFBLENBQUssR0FBRyxDQUFDLENBQUM7SUFDMURoUixXQUFBLENBQVlxUSxHQUFBLENBQUl2SyxNQUFBLEVBQVFrYSxRQUFRO0lBQ2hDOWYsZUFBQSxDQUFnQm1RLEdBQUEsQ0FBSXZLLE1BQUEsRUFBUW1hLFdBQVc7RUFDeEM7RUFFRCxJQUFJTixjQUFBLENBQWM3WixNQUFNLEVBQUVuRixNQUFBLEtBQVcsR0FBRztJQUN0QztFQUNEO0VBRURwSCxNQUFBLENBQU80RixrQkFBQSxDQUFtQjJHLE1BQUEsRUFBUSxNQUFLO0lBTXJDLFNBQVdvYSxTQUFBLElBQWFQLGNBQUEsQ0FBYzdaLE1BQU0sR0FBRztNQUM3QyxJQUFJcE0sSUFBQSxDQUFLd1csR0FBQSxDQUFJcEssTUFBQSxFQUFRb2EsU0FBUyxHQUFHO1FBQy9CLElBQU1sUixLQUFBLEdBQVF6VixNQUFBLENBQU82RCxJQUFBLENBQUswSSxNQUFBLEVBQVFvYSxTQUFTO1FBQzNDLElBQU0sQ0FBQ2xhLEtBQUEsRUFBTW1hLENBQUMsSUFBSW5SLEtBQUE7UUFTbEIsSUFBSXhWLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXJJLEtBQUksS0FBS0EsS0FBQSxDQUFLRyxRQUFBLENBQVN4RixNQUFBLEtBQVcsR0FBRztVQUN6RG1GLE1BQUEsQ0FBT3ZJLGFBQUEsQ0FBY3lSLEtBQUEsRUFBTztZQUFFNUw7VUFBVztRQUMxQztNQUNGO0lBQ0Y7SUFFRCxJQUFJeVgsVUFBQSxHQUFhOEUsY0FBQSxDQUFjN1osTUFBTTtJQUNyQyxJQUFNd1csdUJBQUEsR0FBMEJ6QixVQUFBLENBQVdsYSxNQUFBO0lBQzNDLElBQUkwYixTQUFBLEdBQVk7SUFFaEIsT0FBT3hCLFVBQUEsQ0FBV2xhLE1BQUEsS0FBVyxHQUFHO01BQzlCLElBQ0UsQ0FBQ21GLE1BQUEsQ0FBT2xILGVBQUEsQ0FBZ0I7UUFDdEJpYyxVQUFBO1FBQ0F3QixTQUFBO1FBQ0FDLHVCQUFBO1FBQ0FsWjtNQUNELElBQ0Q7UUFDQTtNQUNEO01BRUQsSUFBTWdkLFVBQUEsR0FBWU4sWUFBQSxDQUFhaGEsTUFBTTtNQUdyQyxJQUFJcE0sSUFBQSxDQUFLd1csR0FBQSxDQUFJcEssTUFBQSxFQUFRc2EsVUFBUyxHQUFHO1FBQy9CLElBQU1DLE1BQUEsR0FBUTltQixNQUFBLENBQU82RCxJQUFBLENBQUswSSxNQUFBLEVBQVFzYSxVQUFTO1FBQzNDdGEsTUFBQSxDQUFPdkksYUFBQSxDQUFjOGlCLE1BQUEsRUFBTztVQUFFamQ7UUFBVztNQUMxQztNQUNEaVosU0FBQTtNQUNBeEIsVUFBQSxHQUFhOEUsY0FBQSxDQUFjN1osTUFBTTtJQUNsQztFQUNILENBQUM7QUFDSDtBQ3hGTyxJQUFNdEksTUFBQSxHQUFvQyxTQUFwQzhpQixRQUFxQ3hhLE1BQUEsRUFBUXNNLEVBQUEsRUFBb0I7RUFBQSxJQUFoQjNSLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUN0RSxJQUFNYixLQUFBLEdBQU90RyxNQUFBLENBQU9rRSxJQUFBLENBQUtxSSxNQUFBLEVBQVFzTSxFQUFBLEVBQUkzUixPQUFPO0VBQzVDLElBQU1xUSxVQUFBLEdBQWFsWCxJQUFBLENBQUs0RCxNQUFBLENBQU9xQyxLQUFJO0VBQ25DLElBQU1tUCxLQUFBLEdBQVF6VixNQUFBLENBQU82RCxJQUFBLENBQUswSSxNQUFBLEVBQVFnTCxVQUFVO0VBQzVDLE9BQU85QixLQUFBO0FBQ1Q7QUNOTyxJQUFNdFIsT0FBQSxHQUFzQyxTQUF0QzZpQixTQUNYemEsTUFBQSxFQUNBakcsS0FBQSxFQUVFO0VBQUEsSUFERlksT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVYsSUFBTTtJQUFFZCxRQUFBLEdBQVc7RUFBVyxJQUFHYSxPQUFBO0VBQ2pDLElBQU1oQixHQUFBLEdBQWU7SUFDbkJFLE9BQUEsRUFBU0UsS0FBQTtJQUNURCxRQUFBO0lBQ0FFLE1BQUEsRUFBSztNQUNILElBQU07UUFBRUg7TUFBUyxJQUFHRixHQUFBO01BQ3BCLElBQU0rZ0IsU0FBQSxHQUFXam5CLE1BQUEsQ0FBT29FLFFBQUEsQ0FBU21JLE1BQU07TUFDdkMwYSxTQUFBLENBQVMxRyxNQUFBLENBQU9yYSxHQUFHO01BQ25CQSxHQUFBLENBQUlFLE9BQUEsR0FBVTtNQUNkLE9BQU9BLE9BQUE7SUFDVDs7RUFHRixJQUFNOGdCLElBQUEsR0FBT2xuQixNQUFBLENBQU9vRSxRQUFBLENBQVNtSSxNQUFNO0VBQ25DMmEsSUFBQSxDQUFLOVAsR0FBQSxDQUFJbFIsR0FBRztFQUNaLE9BQU9BLEdBQUE7QUFDVDtBQ3JCYSxJQUFBOUIsUUFBQSxHQUF3Q21JLE1BQUEsSUFBUztFQUM1RCxJQUFJMmEsSUFBQSxHQUFPcGdCLFNBQUEsQ0FBVTJHLEdBQUEsQ0FBSWxCLE1BQU07RUFFL0IsSUFBSSxDQUFDMmEsSUFBQSxFQUFNO0lBQ1RBLElBQUEsR0FBTyxtQkFBSS9QLEdBQUEsQ0FBRztJQUNkclEsU0FBQSxDQUFVZ1EsR0FBQSxDQUFJdkssTUFBQSxFQUFRMmEsSUFBSTtFQUMzQjtFQUVELE9BQU9BLElBQUE7QUFDVDtBQ1ZPLElBQU1oakIsSUFBQSxHQUFnQyxTQUFoQ2lqQixNQUFpQzVhLE1BQUEsRUFBUXNNLEVBQUEsRUFBb0I7RUFBQSxJQUFoQjNSLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUNsRSxJQUFNO0lBQUVpZ0IsS0FBQTtJQUFPdEQ7RUFBTSxJQUFHNWMsT0FBQTtFQUV4QixJQUFJN0csSUFBQSxDQUFLNEksTUFBQSxDQUFPNFAsRUFBRSxHQUFHO0lBQ25CLElBQUlpTCxJQUFBLEtBQVMsU0FBUztNQUNwQixJQUFNLEdBQUd1RCxTQUFTLElBQUlsbkIsSUFBQSxDQUFLMkIsS0FBQSxDQUFNeUssTUFBQSxFQUFRc00sRUFBRTtNQUMzQ0EsRUFBQSxHQUFLd08sU0FBQTtJQUNOLFdBQVV2RCxJQUFBLEtBQVMsT0FBTztNQUN6QixJQUFNLEdBQUd3RCxRQUFRLElBQUlubkIsSUFBQSxDQUFLaUQsSUFBQSxDQUFLbUosTUFBQSxFQUFRc00sRUFBRTtNQUN6Q0EsRUFBQSxHQUFLeU8sUUFBQTtJQUNOO0VBQ0Y7RUFFRCxJQUFJN21CLEtBQUEsQ0FBTTRQLE9BQUEsQ0FBUXdJLEVBQUUsR0FBRztJQUNyQixJQUFJaUwsSUFBQSxLQUFTLFNBQVM7TUFDcEJqTCxFQUFBLEdBQUtwWSxLQUFBLENBQU04RSxLQUFBLENBQU1zVCxFQUFFO0lBQ3BCLFdBQVVpTCxJQUFBLEtBQVMsT0FBTztNQUN6QmpMLEVBQUEsR0FBS3BZLEtBQUEsQ0FBTW9CLEdBQUEsQ0FBSWdYLEVBQUU7SUFDbEIsT0FBTTtNQUNMQSxFQUFBLEdBQUt4WSxJQUFBLENBQUttSCxNQUFBLENBQU9xUixFQUFBLENBQUc3RixNQUFBLENBQU85TyxJQUFBLEVBQU0yVSxFQUFBLENBQUc1RixLQUFBLENBQU0vTyxJQUFJO0lBQy9DO0VBQ0Y7RUFFRCxJQUFJM0QsS0FBQSxDQUFNd1QsT0FBQSxDQUFROEUsRUFBRSxHQUFHO0lBQ3JCQSxFQUFBLEdBQUtBLEVBQUEsQ0FBRzNVLElBQUE7RUFDVDtFQUVELElBQUlrakIsS0FBQSxJQUFTLE1BQU07SUFDakJ2TyxFQUFBLEdBQUtBLEVBQUEsQ0FBR3RSLEtBQUEsQ0FBTSxHQUFHNmYsS0FBSztFQUN2QjtFQUVELE9BQU92TyxFQUFBO0FBQ1Q7QUMvQk8sSUFBTXZVLFFBQUEsR0FBd0MsU0FBeENpakIsVUFDWGhiLE1BQUEsRUFDQS9GLE1BQUEsRUFFRTtFQUFBLElBREZVLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWLElBQU07SUFBRWQsUUFBQSxHQUFXO0VBQVcsSUFBR2EsT0FBQTtFQUNqQyxJQUFNaEIsR0FBQSxHQUFnQjtJQUNwQkUsT0FBQSxFQUFTSSxNQUFBO0lBQ1RILFFBQUE7SUFDQUUsTUFBQSxFQUFLO01BQ0gsSUFBTTtRQUFFSDtNQUFTLElBQUdGLEdBQUE7TUFDcEIsSUFBTXNoQixVQUFBLEdBQVl4bkIsTUFBQSxDQUFPdUUsU0FBQSxDQUFVZ0ksTUFBTTtNQUN6Q2liLFVBQUEsQ0FBVWpILE1BQUEsQ0FBT3JhLEdBQUc7TUFDcEJBLEdBQUEsQ0FBSUUsT0FBQSxHQUFVO01BQ2QsT0FBT0EsT0FBQTtJQUNUOztFQUdGLElBQU04Z0IsSUFBQSxHQUFPbG5CLE1BQUEsQ0FBT3VFLFNBQUEsQ0FBVWdJLE1BQU07RUFDcEMyYSxJQUFBLENBQUs5UCxHQUFBLENBQUlsUixHQUFHO0VBQ1osT0FBT0EsR0FBQTtBQUNUO0FDckJhLElBQUEzQixTQUFBLEdBQTBDZ0ksTUFBQSxJQUFTO0VBQzlELElBQUkyYSxJQUFBLEdBQU9uZ0IsVUFBQSxDQUFXMEcsR0FBQSxDQUFJbEIsTUFBTTtFQUVoQyxJQUFJLENBQUMyYSxJQUFBLEVBQU07SUFDVEEsSUFBQSxHQUFPLG1CQUFJL1AsR0FBQSxDQUFHO0lBQ2RwUSxVQUFBLENBQVcrUCxHQUFBLENBQUl2SyxNQUFBLEVBQVEyYSxJQUFJO0VBQzVCO0VBRUQsT0FBT0EsSUFBQTtBQUNUO0FDTk8sSUFBTTdpQixLQUFBLEdBQWtDLFNBQWxDb2pCLE9BQW1DbGIsTUFBQSxFQUFRc00sRUFBQSxFQUFvQjtFQUFBLElBQWhCM1IsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ3BFLElBQU07SUFBRTJjLElBQUEsR0FBTztFQUFTLElBQUc1YyxPQUFBO0VBRTNCLElBQUk3RyxJQUFBLENBQUs0SSxNQUFBLENBQU80UCxFQUFFLEdBQUc7SUFDbkIsSUFBSXZTLEtBQUE7SUFFSixJQUFJd2QsSUFBQSxLQUFTLE9BQU87TUFDbEIsSUFBTSxHQUFHd0QsUUFBUSxJQUFJbm5CLElBQUEsQ0FBS2lELElBQUEsQ0FBS21KLE1BQUEsRUFBUXNNLEVBQUU7TUFDekN2UyxLQUFBLEdBQU9naEIsUUFBQTtJQUNSLE9BQU07TUFDTCxJQUFNLEdBQUdELFNBQVMsSUFBSWxuQixJQUFBLENBQUsyQixLQUFBLENBQU15SyxNQUFBLEVBQVFzTSxFQUFFO01BQzNDdlMsS0FBQSxHQUFPK2dCLFNBQUE7SUFDUjtJQUVELElBQU01YSxLQUFBLEdBQU90TSxJQUFBLENBQUtzTixHQUFBLENBQUlsQixNQUFBLEVBQVFqRyxLQUFJO0lBRWxDLElBQUksQ0FBQ3pGLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3JCLEtBQUksR0FBRztNQUN0QixNQUFNLElBQUloRCxLQUFBLENBQUssa0JBQUFDLE1BQUEsQ0FDS29hLElBQUEsRUFBSSxnQ0FBQXBhLE1BQUEsQ0FBK0JtUCxFQUFBLEVBQUUsd0JBQUFuUCxNQUFBLENBQXVCb2EsSUFBQSxFQUFJLGNBQWE7SUFFbEc7SUFFRCxPQUFPO01BQUU1ZixJQUFBLEVBQUFvQyxLQUFBO01BQU0wRyxNQUFBLEVBQVE4VyxJQUFBLEtBQVMsUUFBUXJYLEtBQUEsQ0FBS1EsSUFBQSxDQUFLN0YsTUFBQSxHQUFTOztFQUM1RDtFQUVELElBQUkzRyxLQUFBLENBQU00UCxPQUFBLENBQVF3SSxFQUFFLEdBQUc7SUFDckIsSUFBTSxDQUFDakYsTUFBQSxFQUFPVCxJQUFHLElBQUkxUyxLQUFBLENBQU1rQixLQUFBLENBQU1rWCxFQUFFO0lBQ25DLE9BQU9pTCxJQUFBLEtBQVMsVUFBVWxRLE1BQUEsR0FBUVQsSUFBQTtFQUNuQztFQUVELE9BQU8wRixFQUFBO0FBQ1Q7QUN6Qk0sU0FBV3JVLFVBQ2YrSCxNQUFBLEVBQWM7RUFBQSxJQUNkckYsT0FBQSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFrQztFQUFFO0lBRXBDLElBQU07TUFDSjBSLEVBQUEsR0FBS3RNLE1BQUEsQ0FBT0MsU0FBQTtNQUNac00sSUFBQSxHQUFPO01BQ1B6UixPQUFBLEdBQVU7TUFDVm1aLEtBQUEsR0FBUTtNQUNScUYsbUJBQUEsR0FBc0I7SUFBSyxJQUN6QjNlLE9BQUE7SUFFSixJQUFJLENBQUMyUixFQUFBLEVBQUk7TUFDUDtJQUNEO0lBb0JELElBQU05RixNQUFBLEdBQVEvUyxNQUFBLENBQU8wRSxLQUFBLENBQU02SCxNQUFBLEVBQVFzTSxFQUFFO0lBQ3JDLElBQU0sQ0FBQ2pGLE1BQUEsRUFBT1QsSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNb1IsTUFBSztJQUN0QyxJQUFNOFIsTUFBQSxHQUFReGQsT0FBQSxHQUFVOEwsSUFBQSxHQUFNUyxNQUFBO0lBQzlCLElBQUk4VCxVQUFBLEdBQWE7SUFDakIsSUFBSUMsU0FBQSxHQUFZO0lBQ2hCLElBQUl2TCxRQUFBLEdBQVc7SUFDZixJQUFJd0wsaUJBQUEsR0FBb0I7SUFDeEIsSUFBSUMsY0FBQSxHQUFpQjtJQVFyQixTQUFXLENBQUNwYixLQUFBLEVBQU1uRyxLQUFJLEtBQUt0RyxNQUFBLENBQU84RCxLQUFBLENBQU15SSxNQUFBLEVBQVE7TUFDOUNzTSxFQUFBO01BQ0F4UixPQUFBO01BQ0FtWixLQUFBO01BQ0FxRjtJQUNELElBQUc7TUFJRixJQUFJNWxCLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXJJLEtBQUksR0FBRztRQUkzQixJQUFJLENBQUMrVCxLQUFBLEtBQVVqVSxNQUFBLENBQU9tTSxNQUFBLENBQU9qTSxLQUFJLEtBQUtGLE1BQUEsQ0FBT2dNLGlCQUFBLENBQWtCOUwsS0FBSSxJQUFJO1VBQ3JFLE1BQU16TSxNQUFBLENBQU91RixLQUFBLENBQU1nSCxNQUFBLEVBQVFqRyxLQUFJO1VBQy9CO1FBQ0Q7UUFLRCxJQUFJaUcsTUFBQSxDQUFPaU0sUUFBQSxDQUFTL0wsS0FBSSxHQUFHO1FBRzNCLElBQUl6TSxNQUFBLENBQU9vQyxVQUFBLENBQVdtSyxNQUFBLEVBQVFFLEtBQUksR0FBRztVQVluQyxJQUFNcWIsQ0FBQSxHQUFJem5CLElBQUEsQ0FBS3NJLFVBQUEsQ0FBV3JDLEtBQUEsRUFBTTZNLElBQUEsQ0FBSWpQLElBQUksSUFDcENpUCxJQUFBLEdBQ0FuVCxNQUFBLENBQU82QixHQUFBLENBQUkwSyxNQUFBLEVBQVFqRyxLQUFJO1VBQzNCLElBQU15aEIsQ0FBQSxHQUFJMW5CLElBQUEsQ0FBS3NJLFVBQUEsQ0FBV3JDLEtBQUEsRUFBTXNOLE1BQUEsQ0FBTTFQLElBQUksSUFDdEMwUCxNQUFBLEdBQ0E1VCxNQUFBLENBQU91RixLQUFBLENBQU1nSCxNQUFBLEVBQVFqRyxLQUFJO1VBRTdCcWhCLFNBQUEsR0FBWTNuQixNQUFBLENBQU93RixNQUFBLENBQU8rRyxNQUFBLEVBQVE7WUFBRXlHLE1BQUEsRUFBUStVLENBQUE7WUFBRzlVLEtBQUEsRUFBTzZVO1VBQUMsR0FBSTtZQUFFdEg7VUFBTztVQUNwRWtILFVBQUEsR0FBYTtRQUNkO01BQ0Y7TUFNRCxJQUFJN21CLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3JCLEtBQUksR0FBRztRQUNyQixJQUFNNE8sT0FBQSxHQUFVaGIsSUFBQSxDQUFLK0gsTUFBQSxDQUFPOUIsS0FBQSxFQUFNdWUsTUFBQSxDQUFNM2dCLElBQUk7UUFRNUMsSUFBSW1YLE9BQUEsRUFBUztVQUNYdU0saUJBQUEsR0FBb0J2Z0IsT0FBQSxHQUNoQndkLE1BQUEsQ0FBTTdYLE1BQUEsR0FDTlAsS0FBQSxDQUFLUSxJQUFBLENBQUs3RixNQUFBLEdBQVN5ZCxNQUFBLENBQU03WCxNQUFBO1VBQzdCNmEsY0FBQSxHQUFpQmhELE1BQUEsQ0FBTTdYLE1BQUE7UUFDeEIsT0FBTTtVQUNMNGEsaUJBQUEsR0FBb0JuYixLQUFBLENBQUtRLElBQUEsQ0FBSzdGLE1BQUE7VUFDOUJ5Z0IsY0FBQSxHQUFpQnhnQixPQUFBLEdBQVV1Z0IsaUJBQUEsR0FBb0I7UUFDaEQ7UUFHRCxJQUFJdk0sT0FBQSxJQUFXcU0sVUFBQSxJQUFjNU8sSUFBQSxLQUFTLFVBQVU7VUFDOUMsTUFBTTtZQUFFNVUsSUFBQSxFQUFBb0MsS0FBQTtZQUFNMEcsTUFBQSxFQUFRNmE7O1VBQ3RCSCxVQUFBLEdBQWE7UUFDZDtRQUdELE9BQU8sTUFBTTtVQUlYLElBQUl0TCxRQUFBLEtBQWEsR0FBRztZQUNsQixJQUFJdUwsU0FBQSxLQUFjLElBQUk7WUFDdEJ2TCxRQUFBLEdBQVc0TCxZQUFBLENBQWFMLFNBQUEsRUFBVzdPLElBQUEsRUFBTXpSLE9BQU87WUFHaERzZ0IsU0FBQSxHQUFZL0osd0JBQUEsQ0FBeUIrSixTQUFBLEVBQVd2TCxRQUFBLEVBQVUvVSxPQUFPLEVBQUU7VUFDcEU7VUFHRHdnQixjQUFBLEdBQWlCeGdCLE9BQUEsR0FDYndnQixjQUFBLEdBQWlCekwsUUFBQSxHQUNqQnlMLGNBQUEsR0FBaUJ6TCxRQUFBO1VBQ3JCd0wsaUJBQUEsR0FBb0JBLGlCQUFBLEdBQW9CeEwsUUFBQTtVQUt4QyxJQUFJd0wsaUJBQUEsR0FBb0IsR0FBRztZQUN6QnhMLFFBQUEsR0FBVyxDQUFDd0wsaUJBQUE7WUFDWjtVQUNEO1VBS0R4TCxRQUFBLEdBQVc7VUFDWCxNQUFNO1lBQUVsWSxJQUFBLEVBQUFvQyxLQUFBO1lBQU0wRyxNQUFBLEVBQVE2YTs7UUFDdkI7TUFDRjtJQUNGO0lBT0QsU0FBU0csYUFBYS9hLElBQUEsRUFBY2diLEtBQUEsRUFBY0MsUUFBQSxFQUFpQjtNQUNqRSxJQUFJRCxLQUFBLEtBQVMsYUFBYTtRQUN4QixPQUFPeE0sb0JBQUEsQ0FBcUJ4TyxJQUFBLEVBQU1pYixRQUFPO01BQzFDLFdBQVVELEtBQUEsS0FBUyxRQUFRO1FBQzFCLE9BQU8zSyxlQUFBLENBQWdCclEsSUFBQSxFQUFNaWIsUUFBTztpQkFDM0JELEtBQUEsS0FBUyxVQUFVQSxLQUFBLEtBQVMsU0FBUztRQUM5QyxPQUFPaGIsSUFBQSxDQUFLN0YsTUFBQTtNQUNiO01BQ0QsT0FBTztJQUNUO0lBQ0Q7QUFBQTtJQ3pMWTNDLFFBQUEsR0FBd0MsU0FBQTBqQixVQUFDNWIsTUFBQSxFQUF3QjtFQUFBLElBQWhCckYsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ3RFLElBQU07SUFBRStiLElBQUEsR0FBTztJQUFVMUMsS0FBQSxHQUFRO0VBQUssSUFBS3RaLE9BQUE7RUFDM0MsSUFBSTtJQUFFa1osS0FBQTtJQUFPdkgsRUFBQSxHQUFLdE0sTUFBQSxDQUFPQztFQUFTLElBQUt0RixPQUFBO0VBRXZDLElBQUksQ0FBQzJSLEVBQUEsRUFBSTtJQUNQO0VBQ0Q7RUFFRCxJQUFNdVAsbUJBQUEsR0FBc0Jwb0IsTUFBQSxDQUFPbUIsTUFBQSxDQUFPb0wsTUFBQSxFQUFRc00sRUFBQSxFQUFJO0lBQUUySDtFQUFLLENBQUU7RUFFL0QsSUFBSSxDQUFDNEgsbUJBQUEsRUFBcUI7SUFDeEI7RUFDRDtFQUVELElBQU0sR0FBR25SLEVBQUUsSUFBSWpYLE1BQUEsQ0FBTzhCLEtBQUEsQ0FBTXlLLE1BQUEsRUFBUSxFQUFFO0VBSXRDLElBQU1rWixJQUFBLEdBQWEsQ0FBQzJDLG1CQUFBLENBQW9CbGtCLElBQUEsRUFBTStTLEVBQUU7RUFFaEQsSUFBSTVXLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsS0FBS0EsRUFBQSxDQUFHelIsTUFBQSxLQUFXLEdBQUc7SUFDdEMsTUFBTSxJQUFJcUMsS0FBQSxDQUFLLGtEQUFtRDtFQUNuRTtFQUVELElBQUkyVyxLQUFBLElBQVMsTUFBTTtJQUNqQixJQUFJL2YsSUFBQSxDQUFLNEksTUFBQSxDQUFPNFAsRUFBRSxHQUFHO01BQ25CLElBQU0sQ0FBQ25NLE9BQU0sSUFBSTFNLE1BQUEsQ0FBT2lFLE1BQUEsQ0FBT3NJLE1BQUEsRUFBUXNNLEVBQUU7TUFDekN1SCxLQUFBLEdBQVE1WCxDQUFBLElBQUtrRSxPQUFBLENBQU9FLFFBQUEsQ0FBUzJHLFFBQUEsQ0FBUy9LLENBQUM7SUFDeEMsT0FBTTtNQUNMNFgsS0FBQSxHQUFRQSxDQUFBLEtBQU07SUFDZjtFQUNGO0VBRUQsSUFBTSxDQUFDaUksU0FBUSxJQUFJcm9CLE1BQUEsQ0FBTzhELEtBQUEsQ0FBTXlJLE1BQUEsRUFBUTtJQUN0Q2xGLE9BQUEsRUFBUztJQUNUd1IsRUFBQSxFQUFJNE0sSUFBQTtJQUNKckYsS0FBQTtJQUNBOEMsSUFBQTtJQUNBMUM7RUFDRDtFQUVELE9BQU82SCxTQUFBO0FBQ1Q7QUMzQ08sSUFBTTFqQixRQUFBLEdBQXdDLFNBQXhDMmpCLFVBQ1gvYixNQUFBLEVBQ0F3RyxNQUFBLEVBRUU7RUFBQSxJQURGN0wsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVYsSUFBTTtJQUFFZCxRQUFBLEdBQVc7RUFBVyxJQUFHYSxPQUFBO0VBQ2pDLElBQU1oQixHQUFBLEdBQWdCO0lBQ3BCRSxPQUFBLEVBQVMyTSxNQUFBO0lBQ1QxTSxRQUFBO0lBQ0FFLE1BQUEsRUFBSztNQUNILElBQU07UUFBRUg7TUFBUyxJQUFHRixHQUFBO01BQ3BCLElBQU1xaUIsVUFBQSxHQUFZdm9CLE1BQUEsQ0FBTzRFLFNBQUEsQ0FBVTJILE1BQU07TUFDekNnYyxVQUFBLENBQVVoSSxNQUFBLENBQU9yYSxHQUFHO01BQ3BCQSxHQUFBLENBQUlFLE9BQUEsR0FBVTtNQUNkLE9BQU9BLE9BQUE7SUFDVDs7RUFHRixJQUFNOGdCLElBQUEsR0FBT2xuQixNQUFBLENBQU80RSxTQUFBLENBQVUySCxNQUFNO0VBQ3BDMmEsSUFBQSxDQUFLOVAsR0FBQSxDQUFJbFIsR0FBRztFQUNaLE9BQU9BLEdBQUE7QUFDVDtBQ3JCYSxJQUFBdEIsU0FBQSxHQUEwQzJILE1BQUEsSUFBUztFQUM5RCxJQUFJMmEsSUFBQSxHQUFPbGdCLFVBQUEsQ0FBV3lHLEdBQUEsQ0FBSWxCLE1BQU07RUFFaEMsSUFBSSxDQUFDMmEsSUFBQSxFQUFNO0lBQ1RBLElBQUEsR0FBTyxtQkFBSS9QLEdBQUEsQ0FBRztJQUNkblEsVUFBQSxDQUFXOFAsR0FBQSxDQUFJdkssTUFBQSxFQUFRMmEsSUFBSTtFQUM1QjtFQUVELE9BQU9BLElBQUE7QUFDVDtBQ1RPLElBQU14aUIsS0FBQSxHQUFrQ0EsQ0FBQzZILE1BQUEsRUFBUXNNLEVBQUEsRUFBSTVCLEVBQUEsS0FBTTtFQUNoRSxJQUFJeFcsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxLQUFLLENBQUM1QixFQUFBLEVBQUk7SUFDNUIsT0FBTzRCLEVBQUE7RUFDUjtFQUVELElBQU1qRixNQUFBLEdBQVE1VCxNQUFBLENBQU91RixLQUFBLENBQU1nSCxNQUFBLEVBQVFzTSxFQUFFO0VBQ3JDLElBQU0xRixJQUFBLEdBQU1uVCxNQUFBLENBQU82QixHQUFBLENBQUkwSyxNQUFBLEVBQVEwSyxFQUFBLElBQU00QixFQUFFO0VBQ3ZDLE9BQU87SUFBRTdGLE1BQUEsRUFBUVksTUFBQTtJQUFPWCxLQUFBLEVBQU9FOztBQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0hhdE8sVUFBQSxHQUE0Q0EsQ0FBQzBILE1BQUEsRUFBUVQsR0FBQSxLQUFPO0VBQ3ZFLElBQU07SUFBRVU7RUFBVyxJQUFHRCxNQUFBO0VBRXRCLElBQUlDLFNBQUEsRUFBVztJQUNiLElBQU00VCxLQUFBLEdBQVFBLENBQUMzVCxLQUFBLEVBQVluRyxLQUFBLEtBQWM7TUFDdkMsSUFBSSxDQUFDekYsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxHQUFHO1FBQ3RCLE9BQU87TUFDUjtNQUNELElBQU0sQ0FBQzBXLFdBQUEsRUFBWTVMLFVBQVUsSUFBSXZYLE1BQUEsQ0FBT2lFLE1BQUEsQ0FBT3NJLE1BQUEsRUFBUWpHLEtBQUk7TUFDM0QsT0FBTyxDQUFDaUcsTUFBQSxDQUFPbU0sTUFBQSxDQUFPeUssV0FBVSxLQUFLNVcsTUFBQSxDQUFPNlcsWUFBQSxDQUFhRCxXQUFVOztJQUVyRSxJQUFNRSxpQkFBQSxHQUFvQjVpQixLQUFBLENBQU0rVCxVQUFBLENBQVdoSSxTQUFTO0lBQ3BELElBQUk4Vyx5QkFBQSxHQUE0QjtJQUNoQyxJQUFJLENBQUNELGlCQUFBLEVBQW1CO01BQ3RCLElBQU0sQ0FBQ0UsWUFBQSxFQUFjQyxZQUFZLElBQUl4akIsTUFBQSxDQUFPNkQsSUFBQSxDQUFLMEksTUFBQSxFQUFRQyxTQUFTO01BQ2xFLElBQUkrVyxZQUFBLElBQWdCbkQsS0FBQSxDQUFNbUQsWUFBQSxFQUFjQyxZQUFZLEdBQUc7UUFDckQsSUFBTSxDQUFDQyxVQUFVLElBQUl6akIsTUFBQSxDQUFPaUUsTUFBQSxDQUFPc0ksTUFBQSxFQUFRaVgsWUFBWTtRQUN2REYseUJBQUEsR0FDRUcsVUFBQSxJQUFjbFgsTUFBQSxDQUFPNlcsWUFBQSxDQUFhSyxVQUFVO01BQy9DO0lBQ0Y7SUFDRCxJQUFJSixpQkFBQSxJQUFxQkMseUJBQUEsRUFBMkI7TUFDbER4aUIsVUFBQSxDQUFXNEUsVUFBQSxDQUFXNkcsTUFBQSxFQUFRVCxHQUFBLEVBQUs7UUFDakNzVSxLQUFBO1FBQ0FzRCxLQUFBLEVBQU87UUFDUGxELEtBQUEsRUFBTztNQUNSO0lBQ0YsT0FBTTtNQUNMLElBQU1tRCxNQUFBLEdBQUs2RSxlQUFBLEtBQVN4b0IsTUFBQSxDQUFPd0QsS0FBQSxDQUFNK0ksTUFBTSxLQUFLLEVBQUU7TUFDOUMsT0FBT29YLE1BQUEsQ0FBa0I3WCxHQUFBO01BQ3pCUyxNQUFBLENBQU8vSSxLQUFBLEdBQVFtZ0IsTUFBQTtNQUNmLElBQUksQ0FBQy9jLFFBQUEsQ0FBUzZHLEdBQUEsQ0FBSWxCLE1BQU0sR0FBRztRQUN6QkEsTUFBQSxDQUFPb00sUUFBQSxDQUFRO01BQ2hCO0lBQ0Y7RUFDRjtBQUNIO0lDekNhMVQsY0FBQSxHQUFvREEsQ0FDL0RzSCxNQUFBLEVBQ0EwTSxjQUFBLEtBQ0U7RUFDRnBTLFdBQUEsQ0FBWWlRLEdBQUEsQ0FBSXZLLE1BQUEsRUFBUTBNLGNBQWE7QUFDdkM7SUNOYTFULEtBQUEsR0FBa0NBLENBQUNnSCxNQUFBLEVBQVFzTSxFQUFBLEtBQU07RUFDNUQsT0FBTzdZLE1BQUEsQ0FBT3FFLEtBQUEsQ0FBTWtJLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTtJQUFFaUwsSUFBQSxFQUFNO0VBQU8sQ0FBRTtBQUNuRDtBQ0NPLElBQU10ZSxNQUFBLEdBQW9DLFNBQXBDaWpCLFFBQXFDbGMsTUFBQSxFQUFRc00sRUFBQSxFQUFvQjtFQUFBLElBQWhCM1IsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ3RFLElBQU07SUFBRXFaLEtBQUEsR0FBUTtFQUFPLElBQUd0WixPQUFBO0VBQzFCLElBQU02TCxNQUFBLEdBQVEvUyxNQUFBLENBQU8wRSxLQUFBLENBQU02SCxNQUFBLEVBQVFzTSxFQUFFO0VBQ3JDLElBQU0sQ0FBQ2pGLE1BQUEsRUFBT1QsSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNb1IsTUFBSztFQUN0QyxJQUFJOUYsSUFBQSxHQUFPO0VBRVgsU0FBVyxDQUFDUixLQUFBLEVBQU1uRyxLQUFJLEtBQUt0RyxNQUFBLENBQU84RCxLQUFBLENBQU15SSxNQUFBLEVBQVE7SUFDOUNzTSxFQUFBLEVBQUk5RixNQUFBO0lBQ0pxTixLQUFBLEVBQU92ZixJQUFBLENBQUtpTixNQUFBO0lBQ1owUztFQUNELElBQUc7SUFDRixJQUFJa0ksQ0FBQSxHQUFJamMsS0FBQSxDQUFLUSxJQUFBO0lBRWIsSUFBSTVNLElBQUEsQ0FBSytILE1BQUEsQ0FBTzlCLEtBQUEsRUFBTTZNLElBQUEsQ0FBSWpQLElBQUksR0FBRztNQUMvQndrQixDQUFBLEdBQUlBLENBQUEsQ0FBRW5oQixLQUFBLENBQU0sR0FBRzRMLElBQUEsQ0FBSW5HLE1BQU07SUFDMUI7SUFFRCxJQUFJM00sSUFBQSxDQUFLK0gsTUFBQSxDQUFPOUIsS0FBQSxFQUFNc04sTUFBQSxDQUFNMVAsSUFBSSxHQUFHO01BQ2pDd2tCLENBQUEsR0FBSUEsQ0FBQSxDQUFFbmhCLEtBQUEsQ0FBTXFNLE1BQUEsQ0FBTTVHLE1BQU07SUFDekI7SUFFREMsSUFBQSxJQUFReWIsQ0FBQTtFQUNUO0VBRUQsT0FBT3piLElBQUE7QUFDVDtBQ3hCTyxJQUFNeEgsV0FBQSxHQUE4QyxTQUE5Q2tqQixhQUNYcGMsTUFBQSxFQUNBd0csTUFBQSxFQUVFO0VBQUEsSUFERjdMLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWLElBQU07SUFBRXFaLEtBQUEsR0FBUTtFQUFPLElBQUd0WixPQUFBO0VBQzFCLElBQUksQ0FBQzBNLE1BQUEsRUFBT1QsSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNb1IsTUFBSztFQUdwQyxJQUNFYSxNQUFBLENBQU01RyxNQUFBLEtBQVcsS0FDakJtRyxJQUFBLENBQUluRyxNQUFBLEtBQVcsS0FDZnZNLEtBQUEsQ0FBTThULFdBQUEsQ0FBWXhCLE1BQUssS0FDdkIxUyxJQUFBLENBQUtvSSxXQUFBLENBQVkwSyxJQUFBLENBQUlqUCxJQUFJLEdBQ3pCO0lBQ0EsT0FBTzZPLE1BQUE7RUFDUjtFQUVELElBQU02VixRQUFBLEdBQVc1b0IsTUFBQSxDQUFPZSxLQUFBLENBQU13TCxNQUFBLEVBQVE7SUFDcENzTSxFQUFBLEVBQUkxRixJQUFBO0lBQ0ppTixLQUFBLEVBQU81WCxDQUFBLElBQUt2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU82QyxPQUFBLENBQVEwSixNQUFBLEVBQVEvRCxDQUFDO0lBQzVEZ1k7RUFDRDtFQUNELElBQU02RSxTQUFBLEdBQVl1RCxRQUFBLEdBQVdBLFFBQUEsQ0FBUyxLQUFLO0VBQzNDLElBQU0vRCxNQUFBLEdBQVE3a0IsTUFBQSxDQUFPdUYsS0FBQSxDQUFNZ0gsTUFBQSxFQUFRcUgsTUFBSztFQUN4QyxJQUFNekcsT0FBQSxHQUFTO0lBQUU2RixNQUFBLEVBQVE2UixNQUFBO0lBQU81UixLQUFBLEVBQU9FOztFQUN2QyxJQUFJMFYsSUFBQSxHQUFPO0VBRVgsU0FBVyxDQUFDcGMsS0FBQSxFQUFNbkcsS0FBSSxLQUFLdEcsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO0lBQzlDc00sRUFBQSxFQUFJMUwsT0FBQTtJQUNKaVQsS0FBQSxFQUFPdmYsSUFBQSxDQUFLaU4sTUFBQTtJQUNaekcsT0FBQSxFQUFTO0lBQ1RtWjtFQUNELElBQUc7SUFDRixJQUFJcUksSUFBQSxFQUFNO01BQ1JBLElBQUEsR0FBTztNQUNQO0lBQ0Q7SUFFRCxJQUFJcGMsS0FBQSxDQUFLUSxJQUFBLEtBQVMsTUFBTTVNLElBQUEsQ0FBS3VJLFFBQUEsQ0FBU3RDLEtBQUEsRUFBTStlLFNBQVMsR0FBRztNQUN0RGxTLElBQUEsR0FBTTtRQUFFalAsSUFBQSxFQUFBb0MsS0FBQTtRQUFNMEcsTUFBQSxFQUFRUCxLQUFBLENBQUtRLElBQUEsQ0FBSzdGOztNQUNoQztJQUNEO0VBQ0Y7RUFFRCxPQUFPO0lBQUU0TCxNQUFBLEVBQVFZLE1BQUE7SUFBT1gsS0FBQSxFQUFPRTs7QUFDakM7SUNsRGF2TixrQkFBQSxHQUE0REEsQ0FDdkUyRyxNQUFBLEVBQ0E0TSxFQUFBLEtBQ0U7RUFDRixJQUFNalEsS0FBQSxHQUFRbEosTUFBQSxDQUFPa0QsYUFBQSxDQUFjcUosTUFBTTtFQUN6Q3ZNLE1BQUEsQ0FBT2lGLGNBQUEsQ0FBZXNILE1BQUEsRUFBUSxLQUFLO0VBQ25DLElBQUk7SUFDRjRNLEVBQUEsQ0FBRTtFQUNIO0lBQ0NuWixNQUFBLENBQU9pRixjQUFBLENBQWVzSCxNQUFBLEVBQVFyRCxLQUFLO0VBQ3BDO0VBQ0RsSixNQUFBLENBQU8rRCxTQUFBLENBQVV3SSxNQUFNO0FBQ3pCO0FDWk8sSUFBTW5ILDhCQUFBLEdBQ1hBLENBQUNtSCxNQUFBLEVBQU0rSixJQUFBLEVBQUFrTCxLQUFBLEtBQWtEO0VBQUEsSUFBaEQsQ0FBQ3BJLFFBQUEsRUFBVTFMLFFBQVEsSUFBQzRJLElBQUE7RUFPM0IsT0FDR3JXLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXNFLFFBQVEsS0FBS3BaLE1BQUEsQ0FBT2dELE9BQUEsQ0FBUXVKLE1BQUEsRUFBUTZNLFFBQVEsS0FDOUR2WSxJQUFBLENBQUtpTixNQUFBLENBQU9zTCxRQUFRLEtBQ25CQSxRQUFBLENBQVNuTSxJQUFBLEtBQVMsTUFDbEJTLFFBQUEsQ0FBU0EsUUFBQSxDQUFTdEcsTUFBQSxHQUFTLE9BQU87QUFFeEM7SUNQVzNGLFVBQUEsR0FBdUMsU0FBdkNxbkIsWUFBd0N2YyxNQUFBLEVBQXdCO0VBQUEsSUFBaEJyRixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFDckVuSCxNQUFBLENBQU80RixrQkFBQSxDQUFtQjJHLE1BQUEsRUFBUSxNQUFLO0lBQUEsSUFBQXdjLFlBQUEsRUFBQUMsYUFBQTtJQUNyQyxJQUFNO01BQ0ozaEIsT0FBQSxHQUFVO01BQ1Z5UixJQUFBLEdBQU87TUFDUHNELFFBQUEsR0FBVztNQUNYb0UsS0FBQSxHQUFRO0lBQ1QsSUFBR3RaLE9BQUE7SUFDSixJQUFJO01BQUUyUixFQUFBLEdBQUt0TSxNQUFBLENBQU9DLFNBQUE7TUFBV3ljLE9BQUEsR0FBVTtJQUFPLElBQUcvaEIsT0FBQTtJQUVqRCxJQUFJLENBQUMyUixFQUFBLEVBQUk7TUFDUDtJQUNEO0lBRUQsSUFBSXRFLFdBQUEsR0FBYztJQUNsQixJQUFJOVQsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxLQUFLcFksS0FBQSxDQUFNOFQsV0FBQSxDQUFZc0UsRUFBRSxHQUFHO01BQzlDdEUsV0FBQSxHQUFjO01BQ2RzRSxFQUFBLEdBQUtBLEVBQUEsQ0FBRzdGLE1BQUE7SUFDVDtJQUVELElBQUl6UyxLQUFBLENBQU13VCxPQUFBLENBQVE4RSxFQUFFLEdBQUc7TUFDckIsSUFBTXFRLFlBQUEsR0FBZWxwQixNQUFBLENBQU9rWixJQUFBLENBQUszTSxNQUFBLEVBQVE7UUFBRXNNLEVBQUE7UUFBSXFLLElBQUEsRUFBTTtNQUFTLENBQUU7TUFFaEUsSUFBSSxDQUFDMUMsS0FBQSxJQUFTMEksWUFBQSxFQUFjO1FBQzFCLElBQU0sR0FBR0MsUUFBUSxJQUFJRCxZQUFBO1FBQ3JCclEsRUFBQSxHQUFLc1EsUUFBQTtNQUNOLE9BQU07UUFDTCxJQUFNQyxJQUFBLEdBQU87VUFBRXRRLElBQUE7VUFBTXNEOztRQUNyQixJQUFNckssTUFBQSxHQUFTMUssT0FBQSxHQUNYckgsTUFBQSxDQUFPbUIsTUFBQSxDQUFPb0wsTUFBQSxFQUFRc00sRUFBQSxFQUFJdVEsSUFBSSxLQUFLcHBCLE1BQUEsQ0FBT3VGLEtBQUEsQ0FBTWdILE1BQUEsRUFBUSxFQUFFLElBQzFEdk0sTUFBQSxDQUFPaUIsS0FBQSxDQUFNc0wsTUFBQSxFQUFRc00sRUFBQSxFQUFJdVEsSUFBSSxLQUFLcHBCLE1BQUEsQ0FBTzZCLEdBQUEsQ0FBSTBLLE1BQUEsRUFBUSxFQUFFO1FBQzNEc00sRUFBQSxHQUFLO1VBQUU3RixNQUFBLEVBQVE2RixFQUFBO1VBQUk1RixLQUFBLEVBQU9sQjs7UUFDMUJrWCxPQUFBLEdBQVU7TUFDWDtJQUNGO0lBRUQsSUFBSTVvQixJQUFBLENBQUs0SSxNQUFBLENBQU80UCxFQUFFLEdBQUc7TUFDbkIvWCxVQUFBLENBQVdnRSxXQUFBLENBQVl5SCxNQUFBLEVBQVE7UUFBRXNNLEVBQUE7UUFBSTJIO01BQU87TUFDNUM7SUFDRDtJQUVELElBQUkvZixLQUFBLENBQU04VCxXQUFBLENBQVlzRSxFQUFFLEdBQUc7TUFDekI7SUFDRDtJQUVELElBQUksQ0FBQ29RLE9BQUEsRUFBUztNQUNaLElBQU0sR0FBRzdOLElBQUcsSUFBSTNhLEtBQUEsQ0FBTWtCLEtBQUEsQ0FBTWtYLEVBQUU7TUFDOUIsSUFBTXdRLFFBQUEsR0FBV3JwQixNQUFBLENBQU82QixHQUFBLENBQUkwSyxNQUFBLEVBQVEsRUFBRTtNQUV0QyxJQUFJLENBQUNoTSxLQUFBLENBQU02SCxNQUFBLENBQU9nVCxJQUFBLEVBQUtpTyxRQUFRLEdBQUc7UUFDaEN4USxFQUFBLEdBQUs3WSxNQUFBLENBQU95RixXQUFBLENBQVk4RyxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7VUFBRTJIO1FBQUssQ0FBRTtNQUM5QztJQUNGO0lBRUQsSUFBSSxDQUFDNU0sTUFBQSxFQUFPVCxJQUFHLElBQUkxUyxLQUFBLENBQU1rQixLQUFBLENBQU1rWCxFQUFFO0lBQ2pDLElBQU15USxVQUFBLEdBQWF0cEIsTUFBQSxDQUFPZSxLQUFBLENBQU13TCxNQUFBLEVBQVE7TUFDdEM2VCxLQUFBLEVBQU81WCxDQUFBLElBQUt2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU82QyxPQUFBLENBQVEwSixNQUFBLEVBQVEvRCxDQUFDO01BQzVEcVEsRUFBQSxFQUFJakYsTUFBQTtNQUNKNE07SUFDRDtJQUNELElBQU1vSSxRQUFBLEdBQVc1b0IsTUFBQSxDQUFPZSxLQUFBLENBQU13TCxNQUFBLEVBQVE7TUFDcEM2VCxLQUFBLEVBQU81WCxDQUFBLElBQUt2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU82QyxPQUFBLENBQVEwSixNQUFBLEVBQVEvRCxDQUFDO01BQzVEcVEsRUFBQSxFQUFJMUYsSUFBQTtNQUNKcU47SUFDRDtJQUNELElBQU0rSSxjQUFBLEdBQ0pELFVBQUEsSUFBY1YsUUFBQSxJQUFZLENBQUN2b0IsSUFBQSxDQUFLK0gsTUFBQSxDQUFPa2hCLFVBQUEsQ0FBVyxJQUFJVixRQUFBLENBQVMsRUFBRTtJQUNuRSxJQUFNWSxZQUFBLEdBQWVucEIsSUFBQSxDQUFLK0gsTUFBQSxDQUFPd0wsTUFBQSxDQUFNMVAsSUFBQSxFQUFNaVAsSUFBQSxDQUFJalAsSUFBSTtJQUNyRCxJQUFNdWxCLGdCQUFBLEdBQW1CakosS0FBQSxHQUNyQixRQUFJdUksWUFBQSxHQUNKL29CLE1BQUEsQ0FBT2taLElBQUEsQ0FBSzNNLE1BQUEsRUFBUTtNQUFFc00sRUFBQSxFQUFJakYsTUFBQTtNQUFPc1AsSUFBQSxFQUFNO0tBQVcsT0FBQyxRQUFBNkYsWUFBQSxjQUFBQSxZQUFBLEdBQ25EL29CLE1BQUEsQ0FBTzRCLGVBQUEsQ0FBZ0IySyxNQUFBLEVBQVE7TUFBRXNNLEVBQUEsRUFBSWpGLE1BQUE7TUFBT3NQLElBQUEsRUFBTTtJQUFTLENBQUU7SUFDakUsSUFBTXdHLGNBQUEsR0FBaUJsSixLQUFBLEdBQ25CLFFBQUl3SSxhQUFBLEdBQ0pocEIsTUFBQSxDQUFPa1osSUFBQSxDQUFLM00sTUFBQSxFQUFRO01BQUVzTSxFQUFBLEVBQUkxRixJQUFBO01BQUsrUCxJQUFBLEVBQU07S0FBVyxPQUFDLFFBQUE4RixhQUFBLGNBQUFBLGFBQUEsR0FDakRocEIsTUFBQSxDQUFPNEIsZUFBQSxDQUFnQjJLLE1BQUEsRUFBUTtNQUFFc00sRUFBQSxFQUFJMUYsSUFBQTtNQUFLK1AsSUFBQSxFQUFNO0lBQVMsQ0FBRTtJQUcvRCxJQUFJdUcsZ0JBQUEsRUFBa0I7TUFDcEIsSUFBTXRjLE9BQUEsR0FBU25OLE1BQUEsQ0FBT21CLE1BQUEsQ0FBT29MLE1BQUEsRUFBUXFILE1BQUs7TUFFMUMsSUFBSXpHLE9BQUEsSUFBVW1jLFVBQUEsSUFBY2pwQixJQUFBLENBQUtzSSxVQUFBLENBQVcyZ0IsVUFBQSxDQUFXLElBQUluYyxPQUFBLENBQU9qSixJQUFJLEdBQUc7UUFDdkUwUCxNQUFBLEdBQVF6RyxPQUFBO01BQ1Q7SUFDRjtJQUVELElBQUl1YyxjQUFBLEVBQWdCO01BQ2xCLElBQU10YyxNQUFBLEdBQVFwTixNQUFBLENBQU9pQixLQUFBLENBQU1zTCxNQUFBLEVBQVE0RyxJQUFHO01BRXRDLElBQUkvRixNQUFBLElBQVN3YixRQUFBLElBQVl2b0IsSUFBQSxDQUFLc0ksVUFBQSxDQUFXaWdCLFFBQUEsQ0FBUyxJQUFJeGIsTUFBQSxDQUFNbEosSUFBSSxHQUFHO1FBQ2pFaVAsSUFBQSxHQUFNL0YsTUFBQTtNQUNQO0lBQ0Y7SUFJRCxJQUFNa0ksT0FBQSxHQUF1QjtJQUM3QixJQUFJZ1MsUUFBQTtJQUVKLFNBQVc3UixLQUFBLElBQVN6VixNQUFBLENBQU84RCxLQUFBLENBQU15SSxNQUFBLEVBQVE7TUFBRXNNLEVBQUE7TUFBSTJIO0lBQUssQ0FBRSxHQUFHO01BQ3ZELElBQU0sQ0FBQy9ULEtBQUEsRUFBTW5HLEtBQUksSUFBSW1QLEtBQUE7TUFFckIsSUFBSTZSLFFBQUEsSUFBWWpuQixJQUFBLENBQUt5SCxPQUFBLENBQVF4QixLQUFBLEVBQU1naEIsUUFBUSxNQUFNLEdBQUc7UUFDbEQ7TUFDRDtNQUVELElBQ0csQ0FBQzlHLEtBQUEsSUFDQXZnQixPQUFBLENBQVE2VSxTQUFBLENBQVVySSxLQUFJLE1BQ3JCek0sTUFBQSxDQUFPMFksTUFBQSxDQUFPbk0sTUFBQSxFQUFRRSxLQUFJLEtBQ3pCek0sTUFBQSxDQUFPdVksaUJBQUEsQ0FBa0JoTSxNQUFBLEVBQVFFLEtBQUksTUFDeEMsQ0FBQ3BNLElBQUEsQ0FBS3lJLFFBQUEsQ0FBU3hDLEtBQUEsRUFBTXNOLE1BQUEsQ0FBTTFQLElBQUksS0FBSyxDQUFDN0QsSUFBQSxDQUFLeUksUUFBQSxDQUFTeEMsS0FBQSxFQUFNNk0sSUFBQSxDQUFJalAsSUFBSSxHQUNsRTtRQUNBb1IsT0FBQSxDQUFRek4sSUFBQSxDQUFLNE4sS0FBSztRQUNsQjZSLFFBQUEsR0FBV2hoQixLQUFBO01BQ1o7SUFDRjtJQUVELElBQU0yZ0IsU0FBQSxHQUFXOWQsS0FBQSxDQUFNNk4sSUFBQSxDQUFLMUIsT0FBQSxFQUFTZ0IsSUFBQTtNQUFBLElBQUMsR0FBR3JNLENBQUMsSUFBQ3FNLElBQUE7TUFBQSxPQUFLdFcsTUFBQSxDQUFPbUUsT0FBQSxDQUFRb0ksTUFBQSxFQUFRdEMsQ0FBQztLQUFFO0lBQzFFLElBQU13VyxRQUFBLEdBQVd6Z0IsTUFBQSxDQUFPc0UsUUFBQSxDQUFTaUksTUFBQSxFQUFRcUgsTUFBSztJQUM5QyxJQUFNOE0sTUFBQSxHQUFTMWdCLE1BQUEsQ0FBT3NFLFFBQUEsQ0FBU2lJLE1BQUEsRUFBUTRHLElBQUc7SUFFMUMsSUFBSXdXLFdBQUEsR0FBYztJQUVsQixJQUFJLENBQUNILFlBQUEsSUFBZ0IsQ0FBQ0MsZ0JBQUEsRUFBa0I7TUFDdEMsSUFBTXBjLE1BQUEsR0FBUW9ULFFBQUEsQ0FBU3JhLE9BQUE7TUFDdkIsSUFBTSxDQUFDOEcsS0FBSSxJQUFJbE4sTUFBQSxDQUFPcUQsSUFBQSxDQUFLa0osTUFBQSxFQUFRYyxNQUFLO01BQ3hDLElBQU07UUFBRW5KLElBQUEsRUFBQTZJO01BQU0sSUFBR00sTUFBQTtNQUNqQixJQUFNO1FBQUVMO01BQVEsSUFBRzRHLE1BQUE7TUFDbkIsSUFBTTNHLElBQUEsR0FBT0MsS0FBQSxDQUFLRCxJQUFBLENBQUsxRixLQUFBLENBQU15RixNQUFNO01BQ25DLElBQUlDLElBQUEsQ0FBSzdGLE1BQUEsR0FBUyxHQUFHO1FBQ25CbUYsTUFBQSxDQUFPckwsS0FBQSxDQUFNO1VBQUU0SSxJQUFBLEVBQU07VUFBZTVGLElBQUEsRUFBQTZJLEtBQUE7VUFBTUMsTUFBQTtVQUFRQztRQUFJLENBQUU7UUFDeEQwYyxXQUFBLEdBQWMxYyxJQUFBO01BQ2Y7SUFDRjtJQUVEZ2EsU0FBQSxDQUNHNWYsT0FBQSxDQUFPLEVBQ1BtUSxHQUFBLENBQUk3QyxDQUFBLElBQUtBLENBQUEsQ0FBRXBPLEtBQUEsQ0FBSyxDQUFFLEVBQ2xCcWpCLE1BQUEsQ0FBUWpWLENBQUEsSUFBaUJBLENBQUEsS0FBTSxJQUFJLEVBQ25Da1YsT0FBQSxDQUFRNWYsQ0FBQSxJQUFLbkosVUFBQSxDQUFXZ0UsV0FBQSxDQUFZeUgsTUFBQSxFQUFRO01BQUVzTSxFQUFBLEVBQUk1TyxDQUFBO01BQUd1VztJQUFPLEVBQUM7SUFFaEUsSUFBSSxDQUFDa0osY0FBQSxFQUFnQjtNQUNuQixJQUFNMWIsT0FBQSxHQUFRMFMsTUFBQSxDQUFPdGEsT0FBQTtNQUNyQixJQUFNLENBQUNvSCxNQUFJLElBQUl4TixNQUFBLENBQU9xRCxJQUFBLENBQUtrSixNQUFBLEVBQVF5QixPQUFLO01BQ3hDLElBQU07UUFBRTlKLElBQUEsRUFBQXFKO01BQU0sSUFBR1MsT0FBQTtNQUNqQixJQUFNc0IsT0FBQSxHQUFTa2EsWUFBQSxHQUFlNVYsTUFBQSxDQUFNNUcsTUFBQSxHQUFTO01BQzdDLElBQU11QyxLQUFBLEdBQU8vQixNQUFBLENBQUtQLElBQUEsQ0FBSzFGLEtBQUEsQ0FBTStILE9BQUEsRUFBUTZELElBQUEsQ0FBSW5HLE1BQU07TUFDL0MsSUFBSXVDLEtBQUEsQ0FBS25JLE1BQUEsR0FBUyxHQUFHO1FBQ25CbUYsTUFBQSxDQUFPckwsS0FBQSxDQUFNO1VBQUU0SSxJQUFBLEVBQU07VUFBZTVGLElBQUEsRUFBQXFKLE1BQUE7VUFBTVAsTUFBQSxFQUFBc0MsT0FBQTtVQUFRckMsSUFBQSxFQUFBc0M7UUFBSSxDQUFFO1FBQ3hEb2EsV0FBQSxHQUFjcGEsS0FBQTtNQUNmO0lBQ0Y7SUFFRCxJQUFJLENBQUNpYSxZQUFBLElBQWdCRCxjQUFBLElBQWtCN0ksTUFBQSxDQUFPdGEsT0FBQSxJQUFXcWEsUUFBQSxDQUFTcmEsT0FBQSxFQUFTO01BQ3pFdEYsVUFBQSxDQUFXMkMsVUFBQSxDQUFXOEksTUFBQSxFQUFRO1FBQzVCc00sRUFBQSxFQUFJNkgsTUFBQSxDQUFPdGEsT0FBQTtRQUNYNmlCLE9BQUEsRUFBUztRQUNUekk7TUFDRDtJQUNGO0lBS0QsSUFDRWpNLFdBQUEsSUFDQWxOLE9BQUEsSUFDQXlSLElBQUEsS0FBUyxlQUNUNlEsV0FBQSxDQUFZdmlCLE1BQUEsR0FBUyxLQUNyQnVpQixXQUFBLENBQVl2SixLQUFBLENBQU0sa0JBQWtCLEdBQ3BDO01BQ0F0ZixVQUFBLENBQVc4QixVQUFBLENBQ1QySixNQUFBLEVBQ0FvZCxXQUFBLENBQVlwaUIsS0FBQSxDQUFNLEdBQUdvaUIsV0FBQSxDQUFZdmlCLE1BQUEsR0FBU2dWLFFBQVEsQ0FBQztJQUV0RDtJQUVELElBQU0wTixVQUFBLEdBQWFySixRQUFBLENBQVNsYSxLQUFBLENBQUs7SUFDakMsSUFBTXdqQixRQUFBLEdBQVdySixNQUFBLENBQU9uYSxLQUFBLENBQUs7SUFDN0IsSUFBTUMsTUFBQSxHQUFRYSxPQUFBLEdBQVV5aUIsVUFBQSxJQUFjQyxRQUFBLEdBQVdBLFFBQUEsSUFBWUQsVUFBQTtJQUU3RCxJQUFJNWlCLE9BQUEsQ0FBUTJSLEVBQUEsSUFBTSxRQUFRclMsTUFBQSxFQUFPO01BQy9CMUYsVUFBQSxDQUFXaUUsTUFBQSxDQUFPd0gsTUFBQSxFQUFRL0YsTUFBSztJQUNoQztFQUNILENBQUM7QUFDSDtBQ3pMTyxJQUFNaEUsY0FBQSxHQUFtRCxTQUFuRHduQixnQkFDWHpkLE1BQUEsRUFDQXdNLFNBQUEsRUFFRTtFQUFBLElBREY3UixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFFVm5ILE1BQUEsQ0FBTzRGLGtCQUFBLENBQW1CMkcsTUFBQSxFQUFRLE1BQUs7SUFDckMsSUFBTTtNQUFFMGMsT0FBQSxHQUFVO01BQU96SSxLQUFBLEdBQVE7SUFBSyxJQUFLdFosT0FBQTtJQUMzQyxJQUFJO01BQUUyUixFQUFBLEdBQUswQyx3QkFBQSxDQUF5QmhQLE1BQU07TUFBRzBkLFVBQUEsR0FBYTtJQUFNLElBQUcvaUIsT0FBQTtJQUVuRSxJQUFJLENBQUM2UixTQUFBLENBQVMzUixNQUFBLEVBQVE7TUFDcEI7SUFDRDtJQUVELElBQUkzRyxLQUFBLENBQU00UCxPQUFBLENBQVF3SSxFQUFFLEdBQUc7TUFDckIsSUFBSSxDQUFDb1EsT0FBQSxFQUFTO1FBQ1pwUSxFQUFBLEdBQUs3WSxNQUFBLENBQU95RixXQUFBLENBQVk4RyxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7VUFBRTJIO1FBQUssQ0FBRTtNQUM5QztNQUVELElBQUkvZixLQUFBLENBQU04VCxXQUFBLENBQVlzRSxFQUFFLEdBQUc7UUFDekJBLEVBQUEsR0FBS0EsRUFBQSxDQUFHN0YsTUFBQTtNQUNULE9BQU07UUFDTCxJQUFNLEdBQUdHLElBQUcsSUFBSTFTLEtBQUEsQ0FBTWtCLEtBQUEsQ0FBTWtYLEVBQUU7UUFFOUIsSUFBSSxDQUFDMkgsS0FBQSxJQUFTeGdCLE1BQUEsQ0FBT2taLElBQUEsQ0FBSzNNLE1BQUEsRUFBUTtVQUFFc00sRUFBQSxFQUFJMUY7UUFBRyxDQUFFLEdBQUc7VUFDOUM7UUFDRDtRQUVELElBQU0rVyxTQUFBLEdBQVdscUIsTUFBQSxDQUFPc0UsUUFBQSxDQUFTaUksTUFBQSxFQUFRNEcsSUFBRztRQUM1Q3JTLFVBQUEsQ0FBV3lmLE1BQUEsQ0FBT2hVLE1BQUEsRUFBUTtVQUFFc007UUFBSTtRQUNoQ0EsRUFBQSxHQUFLcVIsU0FBQSxDQUFTM2pCLEtBQUEsQ0FBSztNQUNwQjtlQUNRbEcsSUFBQSxDQUFLNEksTUFBQSxDQUFPNFAsRUFBRSxHQUFHO01BQzFCQSxFQUFBLEdBQUs3WSxNQUFBLENBQU91RixLQUFBLENBQU1nSCxNQUFBLEVBQVFzTSxFQUFFO0lBQzdCO0lBRUQsSUFBSSxDQUFDMkgsS0FBQSxJQUFTeGdCLE1BQUEsQ0FBT2taLElBQUEsQ0FBSzNNLE1BQUEsRUFBUTtNQUFFc007SUFBRSxDQUFFLEdBQUc7TUFDekM7SUFDRDtJQUlELElBQU1zUixrQkFBQSxHQUFxQm5xQixNQUFBLENBQU9lLEtBQUEsQ0FBTXdMLE1BQUEsRUFBUTtNQUM5Q3NNLEVBQUE7TUFDQXVILEtBQUEsRUFBTzVYLENBQUEsSUFBS3ZJLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FBS3hJLE1BQUEsQ0FBT3dZLFFBQUEsQ0FBU2pNLE1BQUEsRUFBUS9ELENBQUM7TUFDN0QwYSxJQUFBLEVBQU07TUFDTjFDO0lBQ0Q7SUFFRCxJQUFJMkosa0JBQUEsRUFBb0I7TUFDdEIsSUFBTSxHQUFHQyxXQUFVLElBQUlELGtCQUFBO01BRXZCLElBQUlucUIsTUFBQSxDQUFPaUQsS0FBQSxDQUFNc0osTUFBQSxFQUFRc00sRUFBQSxFQUFJdVIsV0FBVSxHQUFHO1FBQ3hDLElBQU1oZCxNQUFBLEdBQVFwTixNQUFBLENBQU9pQixLQUFBLENBQU1zTCxNQUFBLEVBQVE2ZCxXQUFVO1FBQzdDdlIsRUFBQSxHQUFLekwsTUFBQTtNQUNOLFdBQVVwTixNQUFBLENBQU9tRCxPQUFBLENBQVFvSixNQUFBLEVBQVFzTSxFQUFBLEVBQUl1UixXQUFVLEdBQUc7UUFDakQsSUFBTWpkLE9BQUEsR0FBU25OLE1BQUEsQ0FBT21CLE1BQUEsQ0FBT29MLE1BQUEsRUFBUTZkLFdBQVU7UUFDL0N2UixFQUFBLEdBQUsxTCxPQUFBO01BQ047SUFDRjtJQUVELElBQU1rZCxVQUFBLEdBQWFycUIsTUFBQSxDQUFPZSxLQUFBLENBQU13TCxNQUFBLEVBQVE7TUFDdEM2VCxLQUFBLEVBQU81WCxDQUFBLElBQUt2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU82QyxPQUFBLENBQVEwSixNQUFBLEVBQVEvRCxDQUFDO01BQzVEcVEsRUFBQTtNQUNBMkg7SUFDRDtJQUNELElBQU0sR0FBRzZFLFNBQVMsSUFBSWdGLFVBQUE7SUFDdEIsSUFBTUMsWUFBQSxHQUFldHFCLE1BQUEsQ0FBT21ELE9BQUEsQ0FBUW9KLE1BQUEsRUFBUXNNLEVBQUEsRUFBSXdNLFNBQVM7SUFDekQsSUFBTWtGLFVBQUEsR0FBYXZxQixNQUFBLENBQU9pRCxLQUFBLENBQU1zSixNQUFBLEVBQVFzTSxFQUFBLEVBQUl3TSxTQUFTO0lBQ3JELElBQU1tRixZQUFBLEdBQWVGLFlBQUEsSUFBZ0JDLFVBQUE7SUFDckMsSUFBTUUsVUFBQSxHQUFhLENBQUNILFlBQUEsSUFBaUJBLFlBQUEsSUFBZ0JDLFVBQUE7SUFDckQsSUFBTUcsUUFBQSxHQUFXLENBQUNILFVBQUE7SUFDbEIsSUFBTSxHQUFHbEQsU0FBUyxJQUFJbG5CLElBQUEsQ0FBSzJCLEtBQUEsQ0FBTTtNQUFFOEssUUFBQSxFQUFVbU07T0FBWSxFQUFFO0lBQzNELElBQU0sR0FBR3VPLFFBQVEsSUFBSW5uQixJQUFBLENBQUtpRCxJQUFBLENBQUs7TUFBRXdKLFFBQUEsRUFBVW1NO09BQVksRUFBRTtJQUV6RCxJQUFNekQsT0FBQSxHQUF1QjtJQUM3QixJQUFNcVYsT0FBQSxHQUFVclUsSUFBQSxJQUFzQjtNQUFBLElBQXJCLENBQUM5TixDQUFBLEVBQUd5QixDQUFDLElBQVlxTSxJQUFBO01BQ2hDLElBQU1zVSxNQUFBLEdBQVMzZ0IsQ0FBQSxDQUFFN0MsTUFBQSxLQUFXO01BQzVCLElBQUl3akIsTUFBQSxFQUFRO1FBQ1YsT0FBTztNQUNSO01BRUQsSUFBSUosWUFBQSxFQUFjO1FBQ2hCLE9BQU87TUFDUjtNQUVELElBQ0VDLFVBQUEsSUFDQXBxQixJQUFBLENBQUtzSSxVQUFBLENBQVdzQixDQUFBLEVBQUdvZCxTQUFTLEtBQzVCcG5CLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FDbkIsQ0FBQytELE1BQUEsQ0FBT21NLE1BQUEsQ0FBT2xRLENBQUMsS0FDaEIsQ0FBQytELE1BQUEsQ0FBT2lNLFFBQUEsQ0FBU2hRLENBQUMsR0FDbEI7UUFDQSxPQUFPO01BQ1I7TUFFRCxJQUNFa2lCLFFBQUEsSUFDQXJxQixJQUFBLENBQUtzSSxVQUFBLENBQVdzQixDQUFBLEVBQUdxZCxRQUFRLEtBQzNCcm5CLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FDbkIsQ0FBQytELE1BQUEsQ0FBT21NLE1BQUEsQ0FBT2xRLENBQUMsS0FDaEIsQ0FBQytELE1BQUEsQ0FBT2lNLFFBQUEsQ0FBU2hRLENBQUMsR0FDbEI7UUFDQSxPQUFPO01BQ1I7TUFFRCxPQUFPOztJQUdULFNBQVdpTixLQUFBLElBQVN0VixJQUFBLENBQUsyRCxLQUFBLENBQU07TUFBRThJLFFBQUEsRUFBVW1NO0lBQVEsR0FBSTtNQUFFMUMsSUFBQSxFQUFNc1U7SUFBTyxDQUFFLEdBQUc7TUFDekUsSUFBSUEsT0FBQSxDQUFRbFYsS0FBSyxHQUFHO1FBQ2xCSCxPQUFBLENBQVF6TixJQUFBLENBQUs0TixLQUFLO01BQ25CO0lBQ0Y7SUFFRCxJQUFNb1YsTUFBQSxHQUFTO0lBQ2YsSUFBTUMsT0FBQSxHQUFVO0lBQ2hCLElBQU1DLElBQUEsR0FBTztJQUNiLElBQUlDLFFBQUEsR0FBVztJQUNmLElBQUlDLFVBQUEsR0FBWTtJQUVoQixTQUFXLENBQUN4ZSxLQUFJLEtBQUs2SSxPQUFBLEVBQVM7TUFDNUIsSUFBSXJWLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXJJLEtBQUksS0FBSyxDQUFDRixNQUFBLENBQU9pTSxRQUFBLENBQVMvTCxLQUFJLEdBQUc7UUFDckR1ZSxRQUFBLEdBQVc7UUFDWEMsVUFBQSxHQUFZO1FBQ1pILE9BQUEsQ0FBUWpqQixJQUFBLENBQUs0RSxLQUFJO2lCQUNSdWUsUUFBQSxFQUFVO1FBQ25CSCxNQUFBLENBQU9oakIsSUFBQSxDQUFLNEUsS0FBSTtNQUNqQixPQUFNO1FBQ0xzZSxJQUFBLENBQUtsakIsSUFBQSxDQUFLNEUsS0FBSTtNQUNmO0lBQ0Y7SUFFRCxJQUFNLENBQUN5ZSxXQUFXLElBQUlsckIsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO01BQ3pDc00sRUFBQTtNQUNBdUgsS0FBQSxFQUFPNVgsQ0FBQSxJQUFLM0gsSUFBQSxDQUFLaU4sTUFBQSxDQUFPdEYsQ0FBQyxLQUFLeEksTUFBQSxDQUFPd1ksUUFBQSxDQUFTak0sTUFBQSxFQUFRL0QsQ0FBQztNQUN2RDBhLElBQUEsRUFBTTtNQUNOMUM7SUFDRDtJQUVELElBQU0sR0FBRzJLLFVBQVUsSUFBSUQsV0FBQTtJQUN2QixJQUFNRSxhQUFBLEdBQWdCcHJCLE1BQUEsQ0FBT21ELE9BQUEsQ0FBUW9KLE1BQUEsRUFBUXNNLEVBQUEsRUFBSXNTLFVBQVU7SUFDM0QsSUFBTUUsV0FBQSxHQUFjcnJCLE1BQUEsQ0FBT2lELEtBQUEsQ0FBTXNKLE1BQUEsRUFBUXNNLEVBQUEsRUFBSXNTLFVBQVU7SUFFdkQsSUFBTUcsU0FBQSxHQUFZdHJCLE1BQUEsQ0FBT21FLE9BQUEsQ0FDdkJvSSxNQUFBLEVBQ0FnZSxVQUFBLElBQWMsQ0FBQ1EsSUFBQSxDQUFLM2pCLE1BQUEsR0FBUy9HLElBQUEsQ0FBS3VELElBQUEsQ0FBS3loQixTQUFTLElBQUlBLFNBQVM7SUFHL0QsSUFBTTNFLE1BQUEsR0FBUzFnQixNQUFBLENBQU9tRSxPQUFBLENBQ3BCb0ksTUFBQSxFQUNBOGUsV0FBQSxHQUFjaHJCLElBQUEsQ0FBS3VELElBQUEsQ0FBS3VuQixVQUFVLElBQUlBLFVBQVU7SUFHbERycUIsVUFBQSxDQUFXd0UsVUFBQSxDQUFXaUgsTUFBQSxFQUFRO01BQzVCc00sRUFBQTtNQUNBdUgsS0FBQSxFQUFPNVgsQ0FBQSxJQUNMeWlCLFVBQUEsR0FDSWhyQixPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU82QyxPQUFBLENBQVEwSixNQUFBLEVBQVEvRCxDQUFDLElBQ2hEM0gsSUFBQSxDQUFLaU4sTUFBQSxDQUFPdEYsQ0FBQyxLQUFLeEksTUFBQSxDQUFPd1ksUUFBQSxDQUFTak0sTUFBQSxFQUFRL0QsQ0FBQztNQUNqRDBhLElBQUEsRUFBTStILFVBQUEsR0FBWSxXQUFXO01BQzdCdkcsTUFBQSxFQUNFdUcsVUFBQSxLQUNDLENBQUNYLFlBQUEsSUFBZ0JPLE1BQUEsQ0FBT3pqQixNQUFBLEdBQVMsT0FDakMsQ0FBQ21qQixVQUFBLElBQWNRLElBQUEsQ0FBSzNqQixNQUFBLEdBQVM7TUFDaENvWjtJQUNEO0lBRUQsSUFBTUMsUUFBQSxHQUFXemdCLE1BQUEsQ0FBT21FLE9BQUEsQ0FDdEJvSSxNQUFBLEVBQ0EsQ0FBQzZlLGFBQUEsSUFBa0JBLGFBQUEsSUFBaUJDLFdBQUEsR0FDaENockIsSUFBQSxDQUFLdUQsSUFBQSxDQUFLdW5CLFVBQVUsSUFDcEJBLFVBQVU7SUFHaEJycUIsVUFBQSxDQUFXNEIsV0FBQSxDQUFZNkosTUFBQSxFQUFRc2UsTUFBQSxFQUFRO01BQ3JDaFMsRUFBQSxFQUFJNEgsUUFBQSxDQUFTcmEsT0FBQTtNQUNiZ2EsS0FBQSxFQUFPNVgsQ0FBQSxJQUFLM0gsSUFBQSxDQUFLaU4sTUFBQSxDQUFPdEYsQ0FBQyxLQUFLeEksTUFBQSxDQUFPd1ksUUFBQSxDQUFTak0sTUFBQSxFQUFRL0QsQ0FBQztNQUN2RDBhLElBQUEsRUFBTTtNQUNOMUMsS0FBQTtNQUNBeUo7SUFDRDtJQUVELElBQUlPLFlBQUEsSUFBZ0IsQ0FBQ0ssTUFBQSxDQUFPempCLE1BQUEsSUFBVTBqQixPQUFBLENBQVExakIsTUFBQSxJQUFVLENBQUMyakIsSUFBQSxDQUFLM2pCLE1BQUEsRUFBUTtNQUNwRXRHLFVBQUEsQ0FBV3lmLE1BQUEsQ0FBT2hVLE1BQUEsRUFBUTtRQUFFc00sRUFBQSxFQUFJd00sU0FBQTtRQUFXN0U7TUFBSyxDQUFFO0lBQ25EO0lBRUQxZixVQUFBLENBQVc0QixXQUFBLENBQVk2SixNQUFBLEVBQVF1ZSxPQUFBLEVBQVM7TUFDdENqUyxFQUFBLEVBQUl5UyxTQUFBLENBQVVsbEIsT0FBQTtNQUNkZ2EsS0FBQSxFQUFPNVgsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQztNQUM1RDBhLElBQUEsRUFBTTtNQUNOMUMsS0FBQTtNQUNBeUo7SUFDRDtJQUVEbnBCLFVBQUEsQ0FBVzRCLFdBQUEsQ0FBWTZKLE1BQUEsRUFBUXdlLElBQUEsRUFBTTtNQUNuQ2xTLEVBQUEsRUFBSTZILE1BQUEsQ0FBT3RhLE9BQUE7TUFDWGdhLEtBQUEsRUFBTzVYLENBQUEsSUFBSzNILElBQUEsQ0FBS2lOLE1BQUEsQ0FBT3RGLENBQUMsS0FBS3hJLE1BQUEsQ0FBT3dZLFFBQUEsQ0FBU2pNLE1BQUEsRUFBUS9ELENBQUM7TUFDdkQwYSxJQUFBLEVBQU07TUFDTjFDLEtBQUE7TUFDQXlKO0lBQ0Q7SUFFRCxJQUFJLENBQUMvaUIsT0FBQSxDQUFRMlIsRUFBQSxFQUFJO01BQ2YsSUFBSXZTLEtBQUE7TUFFSixJQUFJeWtCLElBQUEsQ0FBSzNqQixNQUFBLEdBQVMsS0FBS3NaLE1BQUEsQ0FBT3RhLE9BQUEsRUFBUztRQUNyQ0UsS0FBQSxHQUFPakcsSUFBQSxDQUFLb0UsUUFBQSxDQUFTaWMsTUFBQSxDQUFPdGEsT0FBTztpQkFDMUIwa0IsT0FBQSxDQUFRMWpCLE1BQUEsR0FBUyxLQUFLa2tCLFNBQUEsQ0FBVWxsQixPQUFBLEVBQVM7UUFDbERFLEtBQUEsR0FBT2pHLElBQUEsQ0FBS29FLFFBQUEsQ0FBUzZtQixTQUFBLENBQVVsbEIsT0FBTztNQUN2QyxXQUFVcWEsUUFBQSxDQUFTcmEsT0FBQSxFQUFTO1FBQzNCRSxLQUFBLEdBQU9qRyxJQUFBLENBQUtvRSxRQUFBLENBQVNnYyxRQUFBLENBQVNyYSxPQUFPO01BQ3RDO01BRUQsSUFBSUUsS0FBQSxFQUFNO1FBQ1IsSUFBTThVLElBQUEsR0FBTXBiLE1BQUEsQ0FBTzZCLEdBQUEsQ0FBSTBLLE1BQUEsRUFBUWpHLEtBQUk7UUFDbkN4RixVQUFBLENBQVdpRSxNQUFBLENBQU93SCxNQUFBLEVBQVE2TyxJQUFHO01BQzlCO0lBQ0Y7SUFFRHFGLFFBQUEsQ0FBU2xhLEtBQUEsQ0FBSztJQUNkK2tCLFNBQUEsQ0FBVS9rQixLQUFBLENBQUs7SUFDZm1hLE1BQUEsQ0FBT25hLEtBQUEsQ0FBSztFQUNkLENBQUM7QUFDSDtJQ3JPYW5GLFFBQUEsR0FBNEMsU0FBNUNtcUIsVUFDWGhmLE1BQUEsRUFFRTtFQUFBLElBREZyRixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFFVixJQUFNO0lBQUUyYyxJQUFBLEdBQU87RUFBVSxJQUFHNWMsT0FBQTtFQUM1QixJQUFNO0lBQUVzRjtFQUFXLElBQUdELE1BQUE7RUFFdEIsSUFBSSxDQUFDQyxTQUFBLEVBQVc7SUFDZDtFQUNELFdBQVVzWCxJQUFBLEtBQVMsVUFBVTtJQUM1QmhqQixVQUFBLENBQVdpRSxNQUFBLENBQU93SCxNQUFBLEVBQVFDLFNBQUEsQ0FBVXdHLE1BQU07RUFDM0MsV0FBVThRLElBQUEsS0FBUyxTQUFTO0lBQzNCaGpCLFVBQUEsQ0FBV2lFLE1BQUEsQ0FBT3dILE1BQUEsRUFBUUMsU0FBQSxDQUFVeUcsS0FBSztFQUMxQyxXQUFVNlEsSUFBQSxLQUFTLFNBQVM7SUFDM0IsSUFBTSxDQUFDbFEsTUFBSyxJQUFJblQsS0FBQSxDQUFNa0IsS0FBQSxDQUFNNkssU0FBUztJQUNyQzFMLFVBQUEsQ0FBV2lFLE1BQUEsQ0FBT3dILE1BQUEsRUFBUXFILE1BQUs7RUFDaEMsV0FBVWtRLElBQUEsS0FBUyxPQUFPO0lBQ3pCLElBQU0sR0FBRzNRLElBQUcsSUFBSTFTLEtBQUEsQ0FBTWtCLEtBQUEsQ0FBTTZLLFNBQVM7SUFDckMxTCxVQUFBLENBQVdpRSxNQUFBLENBQU93SCxNQUFBLEVBQVE0RyxJQUFHO0VBQzlCO0FBQ0g7QUN0QmEsSUFBQXpSLFFBQUEsR0FBNEM2SyxNQUFBLElBQVM7RUFDaEUsSUFBTTtJQUFFQztFQUFXLElBQUdELE1BQUE7RUFFdEIsSUFBSUMsU0FBQSxFQUFXO0lBQ2JELE1BQUEsQ0FBT3JMLEtBQUEsQ0FBTTtNQUNYNEksSUFBQSxFQUFNO01BQ05nRyxVQUFBLEVBQVl0RCxTQUFBO01BQ1p1RCxhQUFBLEVBQWU7SUFDaEI7RUFDRjtBQUNIO0lDUGFyTSxJQUFBLEdBQW9DLFNBQXBDOG5CLE1BQXFDamYsTUFBQSxFQUF3QjtFQUFBLElBQWhCckYsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBQ2xFLElBQU07SUFBRXFGO0VBQVcsSUFBR0QsTUFBQTtFQUN0QixJQUFNO0lBQUU2UCxRQUFBLEdBQVc7SUFBR3RELElBQUEsR0FBTztJQUFhelIsT0FBQSxHQUFVO0VBQU8sSUFBR0gsT0FBQTtFQUM5RCxJQUFJO0lBQUU0YyxJQUFBLEdBQU87RUFBTSxJQUFHNWMsT0FBQTtFQUV0QixJQUFJLENBQUNzRixTQUFBLEVBQVc7SUFDZDtFQUNEO0VBRUQsSUFBSXNYLElBQUEsS0FBUyxTQUFTO0lBQ3BCQSxJQUFBLEdBQU9yakIsS0FBQSxDQUFNeVMsVUFBQSxDQUFXMUcsU0FBUyxJQUFJLFVBQVU7RUFDaEQ7RUFFRCxJQUFJc1gsSUFBQSxLQUFTLE9BQU87SUFDbEJBLElBQUEsR0FBT3JqQixLQUFBLENBQU15UyxVQUFBLENBQVcxRyxTQUFTLElBQUksV0FBVztFQUNqRDtFQUVELElBQU07SUFBRXdHLE1BQUE7SUFBUUM7RUFBTyxJQUFHekcsU0FBQTtFQUMxQixJQUFNNGMsSUFBQSxHQUFPO0lBQUVoTixRQUFBO0lBQVV0RCxJQUFBO0lBQU0rTSxtQkFBQSxFQUFxQjs7RUFDcEQsSUFBTWpVLEtBQUEsR0FBd0I7RUFFOUIsSUFBSWtTLElBQUEsSUFBUSxRQUFRQSxJQUFBLEtBQVMsVUFBVTtJQUNyQyxJQUFNdGQsTUFBQSxHQUFRYSxPQUFBLEdBQ1ZySCxNQUFBLENBQU9tQixNQUFBLENBQU9vTCxNQUFBLEVBQVF5RyxNQUFBLEVBQVFvVyxJQUFJLElBQ2xDcHBCLE1BQUEsQ0FBT2lCLEtBQUEsQ0FBTXNMLE1BQUEsRUFBUXlHLE1BQUEsRUFBUW9XLElBQUk7SUFFckMsSUFBSTVpQixNQUFBLEVBQU87TUFDVG9MLEtBQUEsQ0FBTW9CLE1BQUEsR0FBU3hNLE1BQUE7SUFDaEI7RUFDRjtFQUVELElBQUlzZCxJQUFBLElBQVEsUUFBUUEsSUFBQSxLQUFTLFNBQVM7SUFDcEMsSUFBTXpXLE1BQUEsR0FBUWhHLE9BQUEsR0FDVnJILE1BQUEsQ0FBT21CLE1BQUEsQ0FBT29MLE1BQUEsRUFBUTBHLEtBQUEsRUFBT21XLElBQUksSUFDakNwcEIsTUFBQSxDQUFPaUIsS0FBQSxDQUFNc0wsTUFBQSxFQUFRMEcsS0FBQSxFQUFPbVcsSUFBSTtJQUVwQyxJQUFJL2IsTUFBQSxFQUFPO01BQ1R1RSxLQUFBLENBQU1xQixLQUFBLEdBQVE1RixNQUFBO0lBQ2Y7RUFDRjtFQUVEdk0sVUFBQSxDQUFXcUUsWUFBQSxDQUFhb0gsTUFBQSxFQUFRcUYsS0FBSztBQUN2QztJQ3pDYTdNLE1BQUEsR0FBd0NBLENBQUN3SCxNQUFBLEVBQVF3RixNQUFBLEtBQVU7RUFDdEUsSUFBTTtJQUFFdkY7RUFBVyxJQUFHRCxNQUFBO0VBQ3RCd0YsTUFBQSxHQUFTL1IsTUFBQSxDQUFPMEUsS0FBQSxDQUFNNkgsTUFBQSxFQUFRd0YsTUFBTTtFQUVwQyxJQUFJdkYsU0FBQSxFQUFXO0lBQ2IxTCxVQUFBLENBQVdxRSxZQUFBLENBQWFvSCxNQUFBLEVBQVF3RixNQUFNO0lBQ3RDO0VBQ0Q7RUFFRCxJQUFJLENBQUN0UixLQUFBLENBQU00UCxPQUFBLENBQVEwQixNQUFNLEdBQUc7SUFDMUIsTUFBTSxJQUFJdEksS0FBQSxDQUFLLHFJQUFBQyxNQUFBLENBQzhIL0ksUUFBQSxDQUFTb04sU0FBQSxDQUNsSmdFLE1BQU0sQ0FDUCxDQUFFO0VBRU47RUFFRHhGLE1BQUEsQ0FBT3JMLEtBQUEsQ0FBTTtJQUNYNEksSUFBQSxFQUFNO0lBQ05nRyxVQUFBLEVBQVl0RCxTQUFBO0lBQ1p1RCxhQUFBLEVBQWVnQztFQUNoQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJPLElBQU03TSxRQUFBLEdBQTRDLFNBQTVDdW1CLFVBQ1hsZixNQUFBLEVBQ0FxRixLQUFBLEVBRUU7RUFBQSxJQURGMUssT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVYsSUFBTTtJQUFFcUY7RUFBVyxJQUFHRCxNQUFBO0VBQ3RCLElBQUk7SUFBRXVYLElBQUEsR0FBTztFQUFRLElBQUc1YyxPQUFBO0VBRXhCLElBQUksQ0FBQ3NGLFNBQUEsRUFBVztJQUNkO0VBQ0Q7RUFFRCxJQUFJc1gsSUFBQSxLQUFTLFNBQVM7SUFDcEJBLElBQUEsR0FBT3JqQixLQUFBLENBQU15UyxVQUFBLENBQVcxRyxTQUFTLElBQUksVUFBVTtFQUNoRDtFQUVELElBQUlzWCxJQUFBLEtBQVMsT0FBTztJQUNsQkEsSUFBQSxHQUFPcmpCLEtBQUEsQ0FBTXlTLFVBQUEsQ0FBVzFHLFNBQVMsSUFBSSxXQUFXO0VBQ2pEO0VBRUQsSUFBTTtJQUFFd0csTUFBQTtJQUFRQztFQUFPLElBQUd6RyxTQUFBO0VBQzFCLElBQU1oRyxNQUFBLEdBQVFzZCxJQUFBLEtBQVMsV0FBVzlRLE1BQUEsR0FBU0MsS0FBQTtFQUUzQ25TLFVBQUEsQ0FBV3FFLFlBQUEsQ0FBYW9ILE1BQUEsRUFBUTtJQUM5QixDQUFDdVgsSUFBQSxLQUFTLFdBQVcsV0FBVyxVQUFPNEgsZUFBQSxDQUFBQSxlQUFBLENBQVEsSUFBQWxsQixNQUFLLEdBQUtvTCxLQUFLO0VBQy9EO0FBQ0g7SUMxQmF6TSxZQUFBLEdBQW9EQSxDQUMvRG9ILE1BQUEsRUFDQXFGLEtBQUEsS0FDRTtFQUNGLElBQU07SUFBRXBGO0VBQVcsSUFBR0QsTUFBQTtFQUN0QixJQUFNb2YsUUFBQSxHQUFrQztFQUN4QyxJQUFNQyxRQUFBLEdBQTJCO0VBRWpDLElBQUksQ0FBQ3BmLFNBQUEsRUFBVztJQUNkO0VBQ0Q7RUFFRCxTQUFXcWYsQ0FBQSxJQUFLamEsS0FBQSxFQUFPO0lBQ3JCLElBQ0dpYSxDQUFBLEtBQU0sWUFDTGphLEtBQUEsQ0FBTW9CLE1BQUEsSUFBVSxRQUNoQixDQUFDelMsS0FBQSxDQUFNNkgsTUFBQSxDQUFPd0osS0FBQSxDQUFNb0IsTUFBQSxFQUFReEcsU0FBQSxDQUFVd0csTUFBTSxLQUM3QzZZLENBQUEsS0FBTSxXQUNMamEsS0FBQSxDQUFNcUIsS0FBQSxJQUFTLFFBQ2YsQ0FBQzFTLEtBQUEsQ0FBTTZILE1BQUEsQ0FBT3dKLEtBQUEsQ0FBTXFCLEtBQUEsRUFBT3pHLFNBQUEsQ0FBVXlHLEtBQUssS0FDM0M0WSxDQUFBLEtBQU0sWUFDTEEsQ0FBQSxLQUFNLFdBQ05qYSxLQUFBLENBQW1CaWEsQ0FBQSxNQUFPcmYsU0FBQSxDQUF1QnFmLENBQUEsR0FDbkQ7TUFDQUYsUUFBQSxDQUFzQkUsQ0FBQSxJQUFLcmYsU0FBQSxDQUF1QnFmLENBQUE7TUFDbERELFFBQUEsQ0FBc0JDLENBQUEsSUFBS2phLEtBQUEsQ0FBbUJpYSxDQUFBO0lBQy9DO0VBQ0Y7RUFFRCxJQUFJNWYsTUFBQSxDQUFPd0csSUFBQSxDQUFLa1osUUFBUSxFQUFFdmtCLE1BQUEsR0FBUyxHQUFHO0lBQ3BDbUYsTUFBQSxDQUFPckwsS0FBQSxDQUFNO01BQ1g0SSxJQUFBLEVBQU07TUFDTmdHLFVBQUEsRUFBWTZiLFFBQUE7TUFDWjViLGFBQUEsRUFBZTZiO0lBQ2hCO0VBQ0Y7QUFDSDtBQzFCTyxJQUFNbHBCLFdBQUEsR0FBNkMsU0FBN0NvcEIsYUFDWHZmLE1BQUEsRUFDQW9GLE1BQUEsRUFFRTtFQUFBLElBREZ6SyxPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFFVm5ILE1BQUEsQ0FBTzRGLGtCQUFBLENBQW1CMkcsTUFBQSxFQUFRLE1BQUs7SUFDckMsSUFBTTtNQUNKMGMsT0FBQSxHQUFVO01BQ1Z6SSxLQUFBLEdBQVE7TUFDUjBDLElBQUEsR0FBTztNQUNQK0csVUFBQSxHQUFhO0lBQ2QsSUFBRy9pQixPQUFBO0lBQ0osSUFBSTtNQUFFMlIsRUFBQTtNQUFJdUgsS0FBQTtNQUFPcmIsTUFBQSxFQUFBZ25CO0lBQU0sSUFBSzdrQixPQUFBO0lBRTVCLElBQUkvRyxJQUFBLENBQUt5VyxNQUFBLENBQU9qRixNQUFLLEdBQUc7TUFDdEJBLE1BQUEsR0FBUSxDQUFDQSxNQUFLO0lBQ2Y7SUFFRCxJQUFJQSxNQUFBLENBQU12SyxNQUFBLEtBQVcsR0FBRztNQUN0QjtJQUNEO0lBRUQsSUFBTSxDQUFDcUYsS0FBSSxJQUFJa0YsTUFBQTtJQUVmLElBQUksQ0FBQ2tILEVBQUEsRUFBSTtNQUNQQSxFQUFBLEdBQUswQyx3QkFBQSxDQUF5QmhQLE1BQU07TUFDcEMsSUFBSXdmLE9BQUEsS0FBVyxPQUFPO1FBQ3BCQSxPQUFBLEdBQVM7TUFDVjtJQUNGO0lBRUQsSUFBSUEsT0FBQSxJQUFVLE1BQU07TUFDbEJBLE9BQUEsR0FBUztJQUNWO0lBRUQsSUFBSXRyQixLQUFBLENBQU00UCxPQUFBLENBQVF3SSxFQUFFLEdBQUc7TUFDckIsSUFBSSxDQUFDb1EsT0FBQSxFQUFTO1FBQ1pwUSxFQUFBLEdBQUs3WSxNQUFBLENBQU95RixXQUFBLENBQVk4RyxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7VUFBRTJIO1FBQUssQ0FBRTtNQUM5QztNQUVELElBQUkvZixLQUFBLENBQU04VCxXQUFBLENBQVlzRSxFQUFFLEdBQUc7UUFDekJBLEVBQUEsR0FBS0EsRUFBQSxDQUFHN0YsTUFBQTtNQUNULE9BQU07UUFDTCxJQUFNLEdBQUdHLElBQUcsSUFBSTFTLEtBQUEsQ0FBTWtCLEtBQUEsQ0FBTWtYLEVBQUU7UUFDOUIsSUFBTXFSLFNBQUEsR0FBV2xxQixNQUFBLENBQU9zRSxRQUFBLENBQVNpSSxNQUFBLEVBQVE0RyxJQUFHO1FBQzVDclMsVUFBQSxDQUFXeWYsTUFBQSxDQUFPaFUsTUFBQSxFQUFRO1VBQUVzTTtRQUFJO1FBQ2hDQSxFQUFBLEdBQUtxUixTQUFBLENBQVMzakIsS0FBQSxDQUFLO01BQ3BCO0lBQ0Y7SUFFRCxJQUFJaEcsS0FBQSxDQUFNd1QsT0FBQSxDQUFROEUsRUFBRSxHQUFHO01BQ3JCLElBQUl1SCxLQUFBLElBQVMsTUFBTTtRQUNqQixJQUFJdmYsSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxHQUFHO1VBQ3JCMlQsS0FBQSxHQUFRNVgsQ0FBQSxJQUFLM0gsSUFBQSxDQUFLaU4sTUFBQSxDQUFPdEYsQ0FBQzttQkFDakIrRCxNQUFBLENBQU9pTSxRQUFBLENBQVMvTCxLQUFJLEdBQUc7VUFDaEMyVCxLQUFBLEdBQVE1WCxDQUFBLElBQUszSCxJQUFBLENBQUtpTixNQUFBLENBQU90RixDQUFDLEtBQUt4SSxNQUFBLENBQU93WSxRQUFBLENBQVNqTSxNQUFBLEVBQVEvRCxDQUFDO1FBQ3pELE9BQU07VUFDTDRYLEtBQUEsR0FBUTVYLENBQUEsSUFBS3ZJLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FBS3hJLE1BQUEsQ0FBTzZDLE9BQUEsQ0FBUTBKLE1BQUEsRUFBUS9ELENBQUM7UUFDOUQ7TUFDRjtNQUVELElBQU0sQ0FBQ2lOLEtBQUssSUFBSXpWLE1BQUEsQ0FBTzhELEtBQUEsQ0FBTXlJLE1BQUEsRUFBUTtRQUNuQ3NNLEVBQUEsRUFBSUEsRUFBQSxDQUFHM1UsSUFBQTtRQUNQa2MsS0FBQTtRQUNBOEMsSUFBQTtRQUNBMUM7TUFDRDtNQUVELElBQUkvSyxLQUFBLEVBQU87UUFDVCxJQUFNLEdBQUd1VyxVQUFTLElBQUl2VyxLQUFBO1FBQ3RCLElBQU13VyxRQUFBLEdBQVVqc0IsTUFBQSxDQUFPbUUsT0FBQSxDQUFRb0ksTUFBQSxFQUFReWYsVUFBUztRQUNoRCxJQUFNRSxPQUFBLEdBQVVsc0IsTUFBQSxDQUFPaUQsS0FBQSxDQUFNc0osTUFBQSxFQUFRc00sRUFBQSxFQUFJbVQsVUFBUztRQUNsRGxyQixVQUFBLENBQVd3RSxVQUFBLENBQVdpSCxNQUFBLEVBQVE7VUFBRXNNLEVBQUE7VUFBSXVILEtBQUE7VUFBTzhDLElBQUE7VUFBTTFDO1FBQUssQ0FBRTtRQUN4RCxJQUFNbGEsS0FBQSxHQUFPMmxCLFFBQUEsQ0FBUTFsQixLQUFBLENBQUs7UUFDMUJzUyxFQUFBLEdBQUtxVCxPQUFBLEdBQVU3ckIsSUFBQSxDQUFLdUQsSUFBQSxDQUFLMEMsS0FBSSxJQUFJQSxLQUFBO01BQ2xDLE9BQU07UUFDTDtNQUNEO0lBQ0Y7SUFFRCxJQUFNaVIsVUFBQSxHQUFhbFgsSUFBQSxDQUFLNEQsTUFBQSxDQUFPNFUsRUFBRTtJQUNqQyxJQUFJbE0sS0FBQSxHQUFRa00sRUFBQSxDQUFHQSxFQUFBLENBQUd6UixNQUFBLEdBQVM7SUFFM0IsSUFBSSxDQUFDb1osS0FBQSxJQUFTeGdCLE1BQUEsQ0FBT2taLElBQUEsQ0FBSzNNLE1BQUEsRUFBUTtNQUFFc00sRUFBQSxFQUFJdEI7SUFBVSxDQUFFLEdBQUc7TUFDckQ7SUFDRDtJQUVELElBQUkwUyxVQUFBLEVBQVk7TUFHZCxJQUFNa0MsVUFBQSxHQUF3QztNQUM5QyxJQUFNaEwsYUFBQSxHQUF3QjlnQixJQUFBLENBQUtpRCxNQUFBLENBQU9pVSxVQUFVO01BQ3BEeUosZUFBQSxDQUNFelUsTUFBQSxFQUNBLE1BQUs7UUFBQSxJQUFBNmYsS0FBQSxZQUFBQyxPQUFBLEVBQ2lDO1VBQ2xDLElBQU05VixLQUFBLEdBQU9nQixVQUFBLENBQVc3TixNQUFBLENBQU9pRCxLQUFLO1VBQ3BDQSxLQUFBO1VBRUEsSUFBTXhHLEVBQUEsR0FBOEI7WUFDbEMyRCxJQUFBLEVBQU07WUFDTjVGLElBQUEsRUFBQXFTLEtBQUE7WUFDQTFTLElBQUEsRUFBQXFKOztVQUVGWCxNQUFBLENBQU9yTCxLQUFBLENBQU1pRixFQUFFO1VBQ2YwUyxFQUFBLEdBQUt4WSxJQUFBLENBQUt1RCxJQUFBLENBQUtpVixFQUFVO1VBRXpCc1QsVUFBQSxDQUFXdGtCLElBQUEsQ0FBSzFCLEVBQUU7VUFDbEIsSUFBSXRGLElBQUEsQ0FBS2lOLE1BQUEsQ0FBT1osS0FBSSxHQUFHO1lBQ3JCaVUsYUFBQSxDQUFjdFosSUFBQSxDQUFLME8sS0FBSTtVQUN4QixPQUFNO1lBQ0w0SyxhQUFBLENBQWN0WixJQUFBLENBQ1osR0FBR3NCLEtBQUEsQ0FBTTZOLElBQUEsQ0FBSzdXLElBQUEsQ0FBSzJELEtBQUEsQ0FBTW9KLEtBQUksR0FBR29KLElBQUE7Y0FBQSxJQUFDLEdBQUdyTSxDQUFDLElBQUNxTSxJQUFBO2NBQUEsT0FBS0MsS0FBQSxDQUFLN00sTUFBQSxDQUFPTyxDQUFDO1lBQUMsRUFBQztVQUU3RDs7UUFuQkgsU0FBV2lELEtBQUEsSUFBUXlFLE1BQUEsRUFBZTtVQUFBeWEsS0FBQTtRQUFBO01BcUJwQyxHQUNBLE1BQUs7UUFDSGxMLGdCQUFBLENBQWlCM1UsTUFBQSxFQUFRNFUsYUFBQSxFQUFlbFgsQ0FBQSxJQUFJO1VBQzFDLElBQUlPLE9BQUEsR0FBdUJQLENBQUE7VUFDM0IsU0FBVzlELEVBQUEsSUFBTWdtQixVQUFBLEVBQVk7WUFDM0IsSUFBSTlyQixJQUFBLENBQUt1Six5QkFBQSxDQUEwQnpELEVBQUUsR0FBRztjQUN0Q3FFLE9BQUEsR0FBVW5LLElBQUEsQ0FBSzRGLFNBQUEsQ0FBVXVFLE9BQUEsRUFBU3JFLEVBQUU7Y0FDcEMsSUFBSSxDQUFDcUUsT0FBQSxFQUFTO2dCQUNaLE9BQU87Y0FDUjtZQUNGO1VBQ0Y7VUFDRCxPQUFPQSxPQUFBO1FBQ1QsQ0FBQztNQUNILENBQUM7SUFFSixPQUFNO01BQ0wsU0FBV2dELE1BQUEsSUFBUW1FLE1BQUEsRUFBaUI7UUFDbEMsSUFBTTVFLEtBQUEsR0FBT3dLLFVBQUEsQ0FBVzdOLE1BQUEsQ0FBT2lELEtBQUs7UUFDcENBLEtBQUE7UUFFQUosTUFBQSxDQUFPckwsS0FBQSxDQUFNO1VBQUU0SSxJQUFBLEVBQU07VUFBZTVGLElBQUEsRUFBQTZJLEtBQUE7VUFBTWxKLElBQUEsRUFBQTJKO1FBQUksQ0FBRTtRQUNoRHFMLEVBQUEsR0FBS3hZLElBQUEsQ0FBS3VELElBQUEsQ0FBS2lWLEVBQVU7TUFDMUI7SUFDRjtJQUVEQSxFQUFBLEdBQUt4WSxJQUFBLENBQUtvRSxRQUFBLENBQVNvVSxFQUFFO0lBRXJCLElBQUlrVCxPQUFBLEVBQVE7TUFDVixJQUFNdmxCLE1BQUEsR0FBUXhHLE1BQUEsQ0FBTzZCLEdBQUEsQ0FBSTBLLE1BQUEsRUFBUXNNLEVBQUU7TUFFbkMsSUFBSXJTLE1BQUEsRUFBTztRQUNUMUYsVUFBQSxDQUFXaUUsTUFBQSxDQUFPd0gsTUFBQSxFQUFRL0YsTUFBSztNQUNoQztJQUNGO0VBQ0gsQ0FBQztBQUNIO0lDOUphakQsU0FBQSxHQUF5QyxTQUF6QytvQixXQUNYL2YsTUFBQSxFQUVFO0VBQUEsSUFERnJGLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWbkgsTUFBQSxDQUFPNEYsa0JBQUEsQ0FBbUIyRyxNQUFBLEVBQVEsTUFBSztJQUNyQyxJQUFNO01BQUVzTSxFQUFBLEdBQUt0TSxNQUFBLENBQU9DLFNBQUE7TUFBVzBXLElBQUEsR0FBTztNQUFVMUMsS0FBQSxHQUFRO0lBQU8sSUFBR3RaLE9BQUE7SUFDbEUsSUFBSTtNQUFFa1o7SUFBTyxJQUFHbFosT0FBQTtJQUVoQixJQUFJa1osS0FBQSxJQUFTLE1BQU07TUFDakJBLEtBQUEsR0FBUS9mLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsSUFDbEIyQyxTQUFBLENBQVVqUCxNQUFBLEVBQVFzTSxFQUFFLElBQ3BCclEsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQztJQUMxRDtJQUVELElBQUksQ0FBQ3FRLEVBQUEsRUFBSTtNQUNQO0lBQ0Q7SUFFRCxJQUFNdkQsT0FBQSxHQUFVdFYsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO01BQUVzTSxFQUFBO01BQUl1SCxLQUFBO01BQU84QyxJQUFBO01BQU0xQztJQUFLLENBQUU7SUFDL0QsSUFBTXlHLFNBQUEsR0FBVzlkLEtBQUEsQ0FBTTZOLElBQUEsQ0FBSzFCLE9BQUEsRUFBU2dCLElBQUE7TUFBQSxJQUFDLEdBQUdyTSxDQUFDLElBQUNxTSxJQUFBO01BQUEsT0FBS3RXLE1BQUEsQ0FBT21FLE9BQUEsQ0FBUW9JLE1BQUEsRUFBUXRDLENBQUM7S0FBRTtJQUUxRSxTQUFXZ2lCLFFBQUEsSUFBV2hGLFNBQUEsRUFBVTtNQUM5QixJQUFNM2dCLEtBQUEsR0FBTzJsQixRQUFBLENBQVExbEIsS0FBQSxDQUFLO01BRTFCLElBQUlELEtBQUEsQ0FBS2MsTUFBQSxHQUFTLEdBQUc7UUFDbkIsTUFBTSxJQUFJcUMsS0FBQSxDQUFLLCtCQUFBQyxNQUFBLENBQ2tCcEQsS0FBQSxFQUFJLDZDQUE4QztNQUVwRjtNQUVELElBQU1pbUIsZUFBQSxHQUFrQnZzQixNQUFBLENBQU82RCxJQUFBLENBQUswSSxNQUFBLEVBQVFsTSxJQUFBLENBQUs0RCxNQUFBLENBQU9xQyxLQUFJLENBQUM7TUFDN0QsSUFBTSxDQUFDb0csT0FBQSxFQUFRNkssVUFBVSxJQUFJZ1YsZUFBQTtNQUM3QixJQUFNNWYsS0FBQSxHQUFRckcsS0FBQSxDQUFLQSxLQUFBLENBQUtjLE1BQUEsR0FBUztNQUNqQyxJQUFNO1FBQUVBO1VBQVdzRixPQUFBLENBQU9FLFFBQUE7TUFFMUIsSUFBSXhGLE1BQUEsS0FBVyxHQUFHO1FBQ2hCLElBQU1vbEIsTUFBQSxHQUFTbnNCLElBQUEsQ0FBS3VELElBQUEsQ0FBSzJULFVBQVU7UUFDbkN6VyxVQUFBLENBQVc2QyxTQUFBLENBQVU0SSxNQUFBLEVBQVE7VUFBRXNNLEVBQUEsRUFBSXZTLEtBQUE7VUFBTTJRLEVBQUEsRUFBSXVWLE1BQUE7VUFBUWhNO1FBQUssQ0FBRTtRQUM1RDFmLFVBQUEsQ0FBV2dFLFdBQUEsQ0FBWXlILE1BQUEsRUFBUTtVQUFFc00sRUFBQSxFQUFJdEIsVUFBQTtVQUFZaUo7UUFBSyxDQUFFO01BQ3pELFdBQVU3VCxLQUFBLEtBQVUsR0FBRztRQUN0QjdMLFVBQUEsQ0FBVzZDLFNBQUEsQ0FBVTRJLE1BQUEsRUFBUTtVQUFFc00sRUFBQSxFQUFJdlMsS0FBQTtVQUFNMlEsRUFBQSxFQUFJTSxVQUFBO1VBQVlpSjtRQUFLLENBQUU7TUFDakUsV0FBVTdULEtBQUEsS0FBVXZGLE1BQUEsR0FBUyxHQUFHO1FBQy9CLElBQU1xbEIsT0FBQSxHQUFTcHNCLElBQUEsQ0FBS3VELElBQUEsQ0FBSzJULFVBQVU7UUFDbkN6VyxVQUFBLENBQVc2QyxTQUFBLENBQVU0SSxNQUFBLEVBQVE7VUFBRXNNLEVBQUEsRUFBSXZTLEtBQUE7VUFBTTJRLEVBQUEsRUFBSXdWLE9BQUE7VUFBUWpNO1FBQUssQ0FBRTtNQUM3RCxPQUFNO1FBQ0wsSUFBTWtNLFNBQUEsR0FBWXJzQixJQUFBLENBQUt1RCxJQUFBLENBQUswQyxLQUFJO1FBQ2hDLElBQU1xbUIsUUFBQSxHQUFTdHNCLElBQUEsQ0FBS3VELElBQUEsQ0FBSzJULFVBQVU7UUFDbkN6VyxVQUFBLENBQVd3RSxVQUFBLENBQVdpSCxNQUFBLEVBQVE7VUFBRXNNLEVBQUEsRUFBSTZULFNBQUE7VUFBV2xNO1FBQUssQ0FBRTtRQUN0RDFmLFVBQUEsQ0FBVzZDLFNBQUEsQ0FBVTRJLE1BQUEsRUFBUTtVQUFFc00sRUFBQSxFQUFJdlMsS0FBQTtVQUFNMlEsRUFBQSxFQUFJMFYsUUFBQTtVQUFRbk07UUFBSyxDQUFFO01BQzdEO0lBQ0Y7RUFDSCxDQUFDO0FBQ0g7OztBQ2xEQSxJQUFNb00sa0JBQUEsR0FBcUJBLENBQUNyZ0IsTUFBQSxFQUFnQkUsS0FBQSxLQUF1QjtFQUNqRSxJQUFJeE0sT0FBQSxDQUFRNlUsU0FBQSxDQUFVckksS0FBSSxHQUFHO0lBQzNCLElBQU1vRixPQUFBLEdBQVVwRixLQUFBO0lBQ2hCLElBQUl6TSxNQUFBLENBQU8wWSxNQUFBLENBQU9uTSxNQUFBLEVBQVFFLEtBQUksR0FBRztNQUMvQixPQUFPO2VBQ0VvRixPQUFBLENBQVFqRixRQUFBLENBQVN4RixNQUFBLEtBQVcsR0FBRztNQUN4QyxPQUFPd2xCLGtCQUFBLENBQW1CcmdCLE1BQUEsRUFBUXNGLE9BQUEsQ0FBUWpGLFFBQUEsQ0FBUyxFQUFFO0lBQ3RELE9BQU07TUFDTCxPQUFPO0lBQ1I7YUFDUTVNLE1BQUEsQ0FBTytDLFFBQUEsQ0FBUzBKLEtBQUksR0FBRztJQUNoQyxPQUFPO0VBQ1IsT0FBTTtJQUNMLE9BQU87RUFDUjtBQUNIO0lBRWFoSixVQUFBLEdBQTJDLFNBQTNDb3BCLFlBQ1h0Z0IsTUFBQSxFQUVFO0VBQUEsSUFERnJGLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWbkgsTUFBQSxDQUFPNEYsa0JBQUEsQ0FBbUIyRyxNQUFBLEVBQVEsTUFBSztJQUNyQyxJQUFJO01BQUU2VCxLQUFBO01BQU92SCxFQUFBLEdBQUt0TSxNQUFBLENBQU9DO0lBQVMsSUFBS3RGLE9BQUE7SUFDdkMsSUFBTTtNQUFFK2hCLE9BQUEsR0FBVTtNQUFPekksS0FBQSxHQUFRO01BQU8wQyxJQUFBLEdBQU87SUFBVSxJQUFHaGMsT0FBQTtJQUU1RCxJQUFJLENBQUMyUixFQUFBLEVBQUk7TUFDUDtJQUNEO0lBRUQsSUFBSXVILEtBQUEsSUFBUyxNQUFNO01BQ2pCLElBQUkvZixJQUFBLENBQUs0SSxNQUFBLENBQU80UCxFQUFFLEdBQUc7UUFDbkIsSUFBTSxDQUFDbk0sT0FBTSxJQUFJMU0sTUFBQSxDQUFPaUUsTUFBQSxDQUFPc0ksTUFBQSxFQUFRc00sRUFBRTtRQUN6Q3VILEtBQUEsR0FBUTVYLENBQUEsSUFBS2tFLE9BQUEsQ0FBT0UsUUFBQSxDQUFTMkcsUUFBQSxDQUFTL0ssQ0FBQztNQUN4QyxPQUFNO1FBQ0w0WCxLQUFBLEdBQVE1WCxDQUFBLElBQUt2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU82QyxPQUFBLENBQVEwSixNQUFBLEVBQVEvRCxDQUFDO01BQzlEO0lBQ0Y7SUFFRCxJQUFJLENBQUN5Z0IsT0FBQSxJQUFXeG9CLEtBQUEsQ0FBTTRQLE9BQUEsQ0FBUXdJLEVBQUUsR0FBRztNQUNqQ0EsRUFBQSxHQUFLN1ksTUFBQSxDQUFPeUYsV0FBQSxDQUFZOEcsTUFBQSxFQUFRc00sRUFBQSxFQUFJO1FBQUUySDtNQUFLLENBQUU7SUFDOUM7SUFFRCxJQUFJL2YsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxHQUFHO01BQ3JCLElBQUlwWSxLQUFBLENBQU04VCxXQUFBLENBQVlzRSxFQUFFLEdBQUc7UUFDekJBLEVBQUEsR0FBS0EsRUFBQSxDQUFHN0YsTUFBQTtNQUNULE9BQU07UUFDTCxJQUFNLEdBQUdHLElBQUcsSUFBSTFTLEtBQUEsQ0FBTWtCLEtBQUEsQ0FBTWtYLEVBQUU7UUFDOUIsSUFBTXFSLFNBQUEsR0FBV2xxQixNQUFBLENBQU9zRSxRQUFBLENBQVNpSSxNQUFBLEVBQVE0RyxJQUFHO1FBQzVDclMsVUFBQSxDQUFXeWYsTUFBQSxDQUFPaFUsTUFBQSxFQUFRO1VBQUVzTTtRQUFJO1FBQ2hDQSxFQUFBLEdBQUtxUixTQUFBLENBQVMzakIsS0FBQSxDQUFLO1FBRW5CLElBQUlXLE9BQUEsQ0FBUTJSLEVBQUEsSUFBTSxNQUFNO1VBQ3RCL1gsVUFBQSxDQUFXaUUsTUFBQSxDQUFPd0gsTUFBQSxFQUFRc00sRUFBRTtRQUM3QjtNQUNGO0lBQ0Y7SUFFRCxJQUFNLENBQUN6UyxPQUFPLElBQUlwRyxNQUFBLENBQU84RCxLQUFBLENBQU15SSxNQUFBLEVBQVE7TUFBRXNNLEVBQUE7TUFBSXVILEtBQUE7TUFBT0ksS0FBQTtNQUFPMEM7SUFBSSxDQUFFO0lBQ2pFLElBQU12VixJQUFBLEdBQU8zTixNQUFBLENBQU95RSxRQUFBLENBQVM4SCxNQUFBLEVBQVE7TUFBRXNNLEVBQUE7TUFBSXVILEtBQUE7TUFBT0ksS0FBQTtNQUFPMEM7SUFBSSxDQUFFO0lBRS9ELElBQUksQ0FBQzljLE9BQUEsSUFBVyxDQUFDdUgsSUFBQSxFQUFNO01BQ3JCO0lBQ0Q7SUFFRCxJQUFNLENBQUNsQixLQUFBLEVBQU1uRyxLQUFJLElBQUlGLE9BQUE7SUFDckIsSUFBTSxDQUFDZ1QsUUFBQSxFQUFVMUwsUUFBUSxJQUFJQyxJQUFBO0lBRTdCLElBQUlySCxLQUFBLENBQUtjLE1BQUEsS0FBVyxLQUFLc0csUUFBQSxDQUFTdEcsTUFBQSxLQUFXLEdBQUc7TUFDOUM7SUFDRDtJQUVELElBQU1vRCxPQUFBLEdBQVVuSyxJQUFBLENBQUt1RCxJQUFBLENBQUs4SixRQUFRO0lBQ2xDLElBQU1vZixVQUFBLEdBQWF6c0IsSUFBQSxDQUFLbUgsTUFBQSxDQUFPbEIsS0FBQSxFQUFNb0gsUUFBUTtJQUM3QyxJQUFNcWYsaUJBQUEsR0FBb0Ixc0IsSUFBQSxDQUFLZ0osU0FBQSxDQUFVL0MsS0FBQSxFQUFNb0gsUUFBUTtJQUN2RCxJQUFNa1UsT0FBQSxHQUFTelksS0FBQSxDQUFNNk4sSUFBQSxDQUFLaFgsTUFBQSxDQUFPc0QsTUFBQSxDQUFPaUosTUFBQSxFQUFRO01BQUVzTSxFQUFBLEVBQUl2UztLQUFNLEdBQUdnUSxJQUFBO01BQUEsSUFBQyxDQUFDOU4sQ0FBQyxJQUFDOE4sSUFBQTtNQUFBLE9BQUs5TixDQUFBO0lBQUMsR0FDdEVqQixLQUFBLENBQU11bEIsVUFBQSxDQUFXMWxCLE1BQU0sRUFDdkJHLEtBQUEsQ0FBTSxHQUFHLEVBQUU7SUFJZCxJQUFNeWxCLGFBQUEsR0FBZ0JodEIsTUFBQSxDQUFPZSxLQUFBLENBQU13TCxNQUFBLEVBQVE7TUFDekNzTSxFQUFBLEVBQUl2UyxLQUFBO01BQ0o0YyxJQUFBLEVBQU07TUFDTjlDLEtBQUEsRUFBTzVYLENBQUEsSUFBS29aLE9BQUEsQ0FBT3JPLFFBQUEsQ0FBUy9LLENBQUMsS0FBS29rQixrQkFBQSxDQUFtQnJnQixNQUFBLEVBQVEvRCxDQUFDO0lBQy9EO0lBRUQsSUFBTXlrQixRQUFBLEdBQVdELGFBQUEsSUFBaUJodEIsTUFBQSxDQUFPbUUsT0FBQSxDQUFRb0ksTUFBQSxFQUFReWdCLGFBQUEsQ0FBYyxFQUFFO0lBQ3pFLElBQUlsZCxVQUFBO0lBQ0osSUFBSTFGLFFBQUE7SUFJSixJQUFJdkosSUFBQSxDQUFLaU4sTUFBQSxDQUFPckIsS0FBSSxLQUFLNUwsSUFBQSxDQUFLaU4sTUFBQSxDQUFPc0wsUUFBUSxHQUFHO01BQ3hDLElBQVdwRixJQUFBLEdBQUlyQix3QkFBQSxDQUFLbEcsS0FBQSxFQUFJeWdCLFNBQUE7TUFDOUI5aUIsUUFBQSxHQUFXZ1AsUUFBQSxDQUFTbk0sSUFBQSxDQUFLN0YsTUFBQTtNQUN6QjBJLFVBQUEsR0FBYWtFLElBQUE7SUFDZCxXQUFVL1QsT0FBQSxDQUFRNlUsU0FBQSxDQUFVckksS0FBSSxLQUFLeE0sT0FBQSxDQUFRNlUsU0FBQSxDQUFVc0UsUUFBUSxHQUFHO01BQzNELElBQWVwRixJQUFBLEdBQUlyQix3QkFBQSxDQUFLbEcsS0FBQSxFQUFJMGdCLFVBQUE7TUFDbEMvaUIsUUFBQSxHQUFXZ1AsUUFBQSxDQUFTeE0sUUFBQSxDQUFTeEYsTUFBQTtNQUM3QjBJLFVBQUEsR0FBYWtFLElBQUE7SUFDZCxPQUFNO01BQ0wsTUFBTSxJQUFJdkssS0FBQSxDQUFLLGtDQUFBQyxNQUFBLENBQ3FCcEQsS0FBQSxFQUFJLGlFQUFBb0QsTUFBQSxDQUFnRS9JLFFBQUEsQ0FBU29OLFNBQUEsQ0FDN0d0QixLQUFJLEdBQ0wsS0FBQS9DLE1BQUEsQ0FBSS9JLFFBQUEsQ0FBU29OLFNBQUEsQ0FBVXFMLFFBQVEsQ0FBQyxDQUFFO0lBRXRDO0lBSUQsSUFBSSxDQUFDMlQsaUJBQUEsRUFBbUI7TUFDdEJqc0IsVUFBQSxDQUFXNkMsU0FBQSxDQUFVNEksTUFBQSxFQUFRO1FBQUVzTSxFQUFBLEVBQUl2UyxLQUFBO1FBQU0yUSxFQUFBLEVBQUl6TSxPQUFBO1FBQVNnVztNQUFLLENBQUU7SUFDOUQ7SUFJRCxJQUFJeU0sUUFBQSxFQUFVO01BQ1puc0IsVUFBQSxDQUFXZ0UsV0FBQSxDQUFZeUgsTUFBQSxFQUFRO1FBQUVzTSxFQUFBLEVBQUlvVSxRQUFBLENBQVM3bUIsT0FBQTtRQUFVb2E7TUFBSyxDQUFFO0lBQ2hFO0lBRUQsSUFBSXhnQixNQUFBLENBQU9vRiw4QkFBQSxDQUErQm1ILE1BQUEsRUFBUW9CLElBQUEsRUFBTXZILE9BQU8sR0FBRztNQUNoRXRGLFVBQUEsQ0FBV2dFLFdBQUEsQ0FBWXlILE1BQUEsRUFBUTtRQUFFc00sRUFBQSxFQUFJbkwsUUFBQTtRQUFVOFM7TUFBSyxDQUFFO0lBQ3ZELE9BQU07TUFDTGpVLE1BQUEsQ0FBT3JMLEtBQUEsQ0FBTTtRQUNYNEksSUFBQSxFQUFNO1FBQ041RixJQUFBLEVBQU1zRyxPQUFBO1FBQ05KLFFBQUE7UUFDQTBGO01BQ0Q7SUFDRjtJQUVELElBQUltZCxRQUFBLEVBQVU7TUFDWkEsUUFBQSxDQUFTMW1CLEtBQUEsQ0FBSztJQUNmO0VBQ0gsQ0FBQztBQUNIO0lDM0lhNUMsU0FBQSxHQUF5Q0EsQ0FBQzRJLE1BQUEsRUFBUXJGLE9BQUEsS0FBVztFQUN4RWxILE1BQUEsQ0FBTzRGLGtCQUFBLENBQW1CMkcsTUFBQSxFQUFRLE1BQUs7SUFDckMsSUFBTTtNQUNKMEssRUFBQTtNQUNBNEIsRUFBQSxHQUFLdE0sTUFBQSxDQUFPQyxTQUFBO01BQ1owVyxJQUFBLEdBQU87TUFDUDFDLEtBQUEsR0FBUTtJQUNULElBQUd0WixPQUFBO0lBQ0osSUFBSTtNQUFFa1o7SUFBTyxJQUFHbFosT0FBQTtJQUVoQixJQUFJLENBQUMyUixFQUFBLEVBQUk7TUFDUDtJQUNEO0lBRUQsSUFBSXVILEtBQUEsSUFBUyxNQUFNO01BQ2pCQSxLQUFBLEdBQVEvZixJQUFBLENBQUs0SSxNQUFBLENBQU80UCxFQUFFLElBQ2xCMkMsU0FBQSxDQUFValAsTUFBQSxFQUFRc00sRUFBRSxJQUNwQnJRLENBQUEsSUFBS3ZJLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FBS3hJLE1BQUEsQ0FBTzZDLE9BQUEsQ0FBUTBKLE1BQUEsRUFBUS9ELENBQUM7SUFDMUQ7SUFFRCxJQUFNNGtCLEtBQUEsR0FBUXB0QixNQUFBLENBQU9tRSxPQUFBLENBQVFvSSxNQUFBLEVBQVEwSyxFQUFFO0lBQ3ZDLElBQU1vVyxPQUFBLEdBQVVydEIsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO01BQUVzTSxFQUFBO01BQUl1SCxLQUFBO01BQU84QyxJQUFBO01BQU0xQztJQUFLLENBQUU7SUFDL0QsSUFBTXlHLFNBQUEsR0FBVzlkLEtBQUEsQ0FBTTZOLElBQUEsQ0FBS3FXLE9BQUEsRUFBUy9XLElBQUE7TUFBQSxJQUFDLEdBQUdyTSxDQUFDLElBQUNxTSxJQUFBO01BQUEsT0FBS3RXLE1BQUEsQ0FBT21FLE9BQUEsQ0FBUW9JLE1BQUEsRUFBUXRDLENBQUM7S0FBRTtJQUUxRSxTQUFXZ2lCLFFBQUEsSUFBV2hGLFNBQUEsRUFBVTtNQUM5QixJQUFNM2dCLEtBQUEsR0FBTzJsQixRQUFBLENBQVExbEIsS0FBQSxDQUFLO01BQzFCLElBQU1pRSxPQUFBLEdBQVU0aUIsS0FBQSxDQUFNaG5CLE9BQUE7TUFFdEIsSUFBSUUsS0FBQSxDQUFLYyxNQUFBLEtBQVcsR0FBRztRQUNyQm1GLE1BQUEsQ0FBT3JMLEtBQUEsQ0FBTTtVQUFFNEksSUFBQSxFQUFNO1VBQWE1RixJQUFBLEVBQUFvQyxLQUFBO1VBQU1rRTtRQUFPLENBQUU7TUFDbEQ7TUFFRCxJQUNFNGlCLEtBQUEsQ0FBTWhuQixPQUFBLElBQ04vRixJQUFBLENBQUtnSixTQUFBLENBQVVtQixPQUFBLEVBQVNsRSxLQUFJLEtBQzVCakcsSUFBQSxDQUFLcUksT0FBQSxDQUFROEIsT0FBQSxFQUFTbEUsS0FBSSxHQUMxQjtRQUlBOG1CLEtBQUEsQ0FBTWhuQixPQUFBLEdBQVUvRixJQUFBLENBQUt1RCxJQUFBLENBQUt3cEIsS0FBQSxDQUFNaG5CLE9BQU87TUFDeEM7SUFDRjtJQUVEZ25CLEtBQUEsQ0FBTTdtQixLQUFBLENBQUs7RUFDYixDQUFDO0FBQ0g7SUM3Q2F6QixXQUFBLEdBQTZDLFNBQTdDd29CLGFBQ1gvZ0IsTUFBQSxFQUVFO0VBQUEsSUFERnJGLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWbkgsTUFBQSxDQUFPNEYsa0JBQUEsQ0FBbUIyRyxNQUFBLEVBQVEsTUFBSztJQUNyQyxJQUFNO01BQUUwYyxPQUFBLEdBQVU7TUFBT3pJLEtBQUEsR0FBUTtNQUFPMEMsSUFBQSxHQUFPO0lBQVUsSUFBR2hjLE9BQUE7SUFDNUQsSUFBSTtNQUFFMlIsRUFBQSxHQUFLdE0sTUFBQSxDQUFPQyxTQUFBO01BQVc0VDtJQUFLLElBQUtsWixPQUFBO0lBRXZDLElBQUksQ0FBQzJSLEVBQUEsRUFBSTtNQUNQO0lBQ0Q7SUFFRCxJQUFJdUgsS0FBQSxJQUFTLE1BQU07TUFDakJBLEtBQUEsR0FBUS9mLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsSUFDbEIyQyxTQUFBLENBQVVqUCxNQUFBLEVBQVFzTSxFQUFFLElBQ3BCclEsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQztJQUMxRDtJQUVELElBQUksQ0FBQ3lnQixPQUFBLElBQVd4b0IsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxHQUFHO01BQ2pDQSxFQUFBLEdBQUs3WSxNQUFBLENBQU95RixXQUFBLENBQVk4RyxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7UUFBRTJIO01BQUssQ0FBRTtJQUM5QztJQUVELElBQU0rTSxNQUFBLEdBQVN2dEIsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO01BQUVzTSxFQUFBO01BQUl1SCxLQUFBO01BQU84QyxJQUFBO01BQU0xQztJQUFLLENBQUU7SUFDOUQsSUFBTXlHLFNBQUEsR0FBVzlkLEtBQUEsQ0FBTTZOLElBQUEsQ0FBS3VXLE1BQUEsRUFBUWpYLElBQUE7TUFBQSxJQUFDLEdBQUdyTSxDQUFDLElBQUNxTSxJQUFBO01BQUEsT0FBS3RXLE1BQUEsQ0FBT21FLE9BQUEsQ0FBUW9JLE1BQUEsRUFBUXRDLENBQUM7S0FBRTtJQUV6RSxTQUFXZ2lCLFFBQUEsSUFBV2hGLFNBQUEsRUFBVTtNQUM5QixJQUFNM2dCLEtBQUEsR0FBTzJsQixRQUFBLENBQVExbEIsS0FBQSxDQUFLO01BRTFCLElBQUlELEtBQUEsRUFBTTtRQUNSLElBQU0sQ0FBQ21HLEtBQUksSUFBSXpNLE1BQUEsQ0FBTzZELElBQUEsQ0FBSzBJLE1BQUEsRUFBUWpHLEtBQUk7UUFDdkNpRyxNQUFBLENBQU9yTCxLQUFBLENBQU07VUFBRTRJLElBQUEsRUFBTTtVQUFlNUYsSUFBQSxFQUFBb0MsS0FBQTtVQUFNekMsSUFBQSxFQUFBNEk7UUFBSSxDQUFFO01BQ2pEO0lBQ0Y7RUFDSCxDQUFDO0FBQ0g7QUNoQ08sSUFBTXpILFFBQUEsR0FBdUMsU0FBdkN3b0IsVUFDWGpoQixNQUFBLEVBQ0FxRixLQUFBLEVBRUU7RUFBQSxJQURGMUssT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVZuSCxNQUFBLENBQU80RixrQkFBQSxDQUFtQjJHLE1BQUEsRUFBUSxNQUFLO0lBQ3JDLElBQUk7TUFBRTZULEtBQUE7TUFBT3ZILEVBQUEsR0FBS3RNLE1BQUEsQ0FBT0MsU0FBQTtNQUFXMUUsT0FBQTtNQUFTdVM7SUFBTyxJQUFHblQsT0FBQTtJQUN2RCxJQUFNO01BQ0oraEIsT0FBQSxHQUFVO01BQ1YvRixJQUFBLEdBQU87TUFDUFEsS0FBQSxHQUFRO01BQ1JsRCxLQUFBLEdBQVE7SUFDVCxJQUFHdFosT0FBQTtJQUVKLElBQUksQ0FBQzJSLEVBQUEsRUFBSTtNQUNQO0lBQ0Q7SUFFRCxJQUFJdUgsS0FBQSxJQUFTLE1BQU07TUFDakJBLEtBQUEsR0FBUS9mLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsSUFDbEIyQyxTQUFBLENBQVVqUCxNQUFBLEVBQVFzTSxFQUFFLElBQ3BCclEsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQztJQUMxRDtJQUVELElBQUksQ0FBQ3lnQixPQUFBLElBQVd4b0IsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxHQUFHO01BQ2pDQSxFQUFBLEdBQUs3WSxNQUFBLENBQU95RixXQUFBLENBQVk4RyxNQUFBLEVBQVFzTSxFQUFBLEVBQUk7UUFBRTJIO01BQUssQ0FBRTtJQUM5QztJQUVELElBQUlrRCxLQUFBLElBQVNqakIsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxHQUFHO01BQzlCLElBQ0VwWSxLQUFBLENBQU04VCxXQUFBLENBQVlzRSxFQUFFLEtBQ3BCN1ksTUFBQSxDQUFPcUQsSUFBQSxDQUFLa0osTUFBQSxFQUFRc00sRUFBQSxDQUFHN0YsTUFBTSxFQUFFLEdBQUcvRixJQUFBLENBQUs3RixNQUFBLEdBQVMsR0FDaEQ7UUFHQTtNQUNEO01BQ0QsSUFBTXFtQixTQUFBLEdBQVd6dEIsTUFBQSxDQUFPMkUsUUFBQSxDQUFTNEgsTUFBQSxFQUFRc00sRUFBQSxFQUFJO1FBQUV4UyxRQUFBLEVBQVU7TUFBUSxDQUFFO01BQ25FLElBQU0sQ0FBQ3VOLE1BQUEsRUFBT1QsSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNa1gsRUFBRTtNQUNuQyxJQUFNNlUsU0FBQSxHQUFZeEssSUFBQSxLQUFTLFdBQVcsV0FBVztNQUNqRCxJQUFNeUssY0FBQSxHQUFpQjN0QixNQUFBLENBQU9pRCxLQUFBLENBQU1zSixNQUFBLEVBQVE0RyxJQUFBLEVBQUtBLElBQUEsQ0FBSWpQLElBQUk7TUFDekRwRCxVQUFBLENBQVd3RSxVQUFBLENBQVdpSCxNQUFBLEVBQVE7UUFDNUJzTSxFQUFBLEVBQUkxRixJQUFBO1FBQ0ppTixLQUFBO1FBQ0E4QyxJQUFBLEVBQU13SyxTQUFBO1FBQ05sTixLQUFBO1FBQ0FrRSxNQUFBLEVBQVEsQ0FBQ2lKO01BQ1Y7TUFDRCxJQUFNQyxrQkFBQSxHQUFxQjV0QixNQUFBLENBQU9tRCxPQUFBLENBQVFvSixNQUFBLEVBQVFxSCxNQUFBLEVBQU9BLE1BQUEsQ0FBTTFQLElBQUk7TUFDbkVwRCxVQUFBLENBQVd3RSxVQUFBLENBQVdpSCxNQUFBLEVBQVE7UUFDNUJzTSxFQUFBLEVBQUlqRixNQUFBO1FBQ0p3TSxLQUFBO1FBQ0E4QyxJQUFBLEVBQU13SyxTQUFBO1FBQ05sTixLQUFBO1FBQ0FrRSxNQUFBLEVBQVEsQ0FBQ2tKO01BQ1Y7TUFDRC9VLEVBQUEsR0FBSzRVLFNBQUEsQ0FBU2xuQixLQUFBLENBQUs7TUFFbkIsSUFBSVcsT0FBQSxDQUFRMlIsRUFBQSxJQUFNLE1BQU07UUFDdEIvWCxVQUFBLENBQVdpRSxNQUFBLENBQU93SCxNQUFBLEVBQVFzTSxFQUFFO01BQzdCO0lBQ0Y7SUFFRCxJQUFJLENBQUMvUSxPQUFBLEVBQVM7TUFDWkEsT0FBQSxHQUFVQSxDQUFDK2xCLElBQUEsRUFBTUMsUUFBQSxLQUFhRCxJQUFBLEtBQVNDLFFBQUE7SUFDeEM7SUFFRCxTQUFXLENBQUNyaEIsS0FBQSxFQUFNbkcsS0FBSSxLQUFLdEcsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO01BQzlDc00sRUFBQTtNQUNBdUgsS0FBQTtNQUNBOEMsSUFBQTtNQUNBMUM7SUFDRCxJQUFHO01BQ0YsSUFBTTFRLFVBQUEsR0FBNEI7TUFFbEMsSUFBTUMsYUFBQSxHQUE0RDtNQUdsRSxJQUFJekosS0FBQSxDQUFLYyxNQUFBLEtBQVcsR0FBRztRQUNyQjtNQUNEO01BRUQsSUFBSTJtQixVQUFBLEdBQWE7TUFFakIsU0FBV2xDLENBQUEsSUFBS2phLEtBQUEsRUFBTztRQUNyQixJQUFJaWEsQ0FBQSxLQUFNLGNBQWNBLENBQUEsS0FBTSxRQUFRO1VBQ3BDO1FBQ0Q7UUFFRCxJQUFJL2pCLE9BQUEsQ0FBUThKLEtBQUEsQ0FBa0JpYSxDQUFBLEdBQUlwZixLQUFBLENBQWlCb2YsQ0FBQSxDQUFFLEdBQUc7VUFDdERrQyxVQUFBLEdBQWE7VUFFYixJQUFJdGhCLEtBQUEsQ0FBSzBELGNBQUEsQ0FBZTBiLENBQUMsR0FDdkIvYixVQUFBLENBQXVCK2IsQ0FBQSxJQUFLcGYsS0FBQSxDQUFpQm9mLENBQUE7VUFFL0MsSUFBSXhSLEtBQUEsRUFBTztZQUNULElBQUl6SSxLQUFBLENBQWtCaWEsQ0FBQSxLQUFNLE1BQzFCOWIsYUFBQSxDQUEwQjhiLENBQUEsSUFBS3hSLEtBQUEsQ0FDN0I1TixLQUFBLENBQWlCb2YsQ0FBQSxHQUNqQmphLEtBQUEsQ0FBa0JpYSxDQUFBLENBQUU7VUFFekIsT0FBTTtZQUNMLElBQUlqYSxLQUFBLENBQWtCaWEsQ0FBQSxLQUFNLE1BQzFCOWIsYUFBQSxDQUEwQjhiLENBQUEsSUFBS2phLEtBQUEsQ0FBa0JpYSxDQUFBO1VBQ3BEO1FBQ0Y7TUFDRjtNQUVELElBQUlrQyxVQUFBLEVBQVk7UUFDZHhoQixNQUFBLENBQU9yTCxLQUFBLENBQU07VUFDWDRJLElBQUEsRUFBTTtVQUNONUYsSUFBQSxFQUFBb0MsS0FBQTtVQUNBd0osVUFBQTtVQUNBQztRQUNEO01BQ0Y7SUFDRjtFQUNILENBQUM7QUFDSDtBQ2xIQSxJQUFNaWUsV0FBQSxHQUFjQSxDQUFDemhCLE1BQUEsRUFBZ0J3RyxNQUFBLEtBQThCO0VBQ2pFLElBQUl0UyxLQUFBLENBQU04VCxXQUFBLENBQVl4QixNQUFLLEdBQUc7SUFDNUIsT0FBT0EsTUFBQSxDQUFNQyxNQUFBO0VBQ2QsT0FBTTtJQUNMLElBQU0sR0FBR0csSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNb1IsTUFBSztJQUNqQyxJQUFNbVgsU0FBQSxHQUFXbHFCLE1BQUEsQ0FBT3NFLFFBQUEsQ0FBU2lJLE1BQUEsRUFBUTRHLElBQUc7SUFDNUNyUyxVQUFBLENBQVd5ZixNQUFBLENBQU9oVSxNQUFBLEVBQVE7TUFBRXNNLEVBQUEsRUFBSTlGO0lBQU87SUFDdkMsT0FBT21YLFNBQUEsQ0FBUzNqQixLQUFBLENBQUs7RUFDdEI7QUFDSDtJQUVhakIsVUFBQSxHQUEyQyxTQUEzQzJvQixZQUNYMWhCLE1BQUEsRUFFRTtFQUFBLElBREZyRixPQUFBLEdBQU9DLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLGlCQUFBQSxTQUFBLE1BQUc7RUFFVm5ILE1BQUEsQ0FBTzRGLGtCQUFBLENBQW1CMkcsTUFBQSxFQUFRLE1BQUs7SUFDckMsSUFBTTtNQUFFMlcsSUFBQSxHQUFPO01BQVUxQyxLQUFBLEdBQVE7SUFBSyxJQUFLdFosT0FBQTtJQUMzQyxJQUFJO01BQUVrWixLQUFBO01BQU92SCxFQUFBLEdBQUt0TSxNQUFBLENBQU9DLFNBQUE7TUFBVzBoQixNQUFBLEdBQVM7TUFBR3hKLE1BQUEsR0FBUztJQUFPLElBQUd4ZCxPQUFBO0lBRW5FLElBQUlrWixLQUFBLElBQVMsTUFBTTtNQUNqQkEsS0FBQSxHQUFRNVgsQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQztJQUM5RDtJQUVELElBQUkvSCxLQUFBLENBQU00UCxPQUFBLENBQVF3SSxFQUFFLEdBQUc7TUFDckJBLEVBQUEsR0FBS21WLFdBQUEsQ0FBWXpoQixNQUFBLEVBQVFzTSxFQUFFO0lBQzVCO0lBSUQsSUFBSXhZLElBQUEsQ0FBSzRJLE1BQUEsQ0FBTzRQLEVBQUUsR0FBRztNQUNuQixJQUFNdlMsS0FBQSxHQUFPdVMsRUFBQTtNQUNiLElBQU1yUyxNQUFBLEdBQVF4RyxNQUFBLENBQU9xRSxLQUFBLENBQU1rSSxNQUFBLEVBQVFqRyxLQUFJO01BQ3ZDLElBQU0sQ0FBQ29HLE9BQU0sSUFBSTFNLE1BQUEsQ0FBT2lFLE1BQUEsQ0FBT3NJLE1BQUEsRUFBUWpHLEtBQUk7TUFDM0M4WixLQUFBLEdBQVE1WCxDQUFBLElBQUtBLENBQUEsS0FBTWtFLE9BQUE7TUFDbkJ3aEIsTUFBQSxHQUFTMW5CLE1BQUEsQ0FBTXRDLElBQUEsQ0FBS2tELE1BQUEsR0FBU2QsS0FBQSxDQUFLYyxNQUFBLEdBQVM7TUFDM0N5UixFQUFBLEdBQUtyUyxNQUFBO01BQ0xrZSxNQUFBLEdBQVM7SUFDVjtJQUVELElBQUksQ0FBQzdMLEVBQUEsRUFBSTtNQUNQO0lBQ0Q7SUFFRCxJQUFNc1YsU0FBQSxHQUFZbnVCLE1BQUEsQ0FBT3NFLFFBQUEsQ0FBU2lJLE1BQUEsRUFBUXNNLEVBQUEsRUFBSTtNQUM1Q3hTLFFBQUEsRUFBVTtJQUNYO0lBQ0QsSUFBSStuQixRQUFBO0lBQ0osSUFBSTtNQUNGLElBQU0sQ0FBQ0MsT0FBTyxJQUFJcnVCLE1BQUEsQ0FBTzhELEtBQUEsQ0FBTXlJLE1BQUEsRUFBUTtRQUFFc00sRUFBQTtRQUFJdUgsS0FBQTtRQUFPOEMsSUFBQTtRQUFNMUM7TUFBSyxDQUFFO01BRWpFLElBQUksQ0FBQzZOLE9BQUEsRUFBUztRQUNaO01BQ0Q7TUFFRCxJQUFNQyxTQUFBLEdBQVl0dUIsTUFBQSxDQUFPa1osSUFBQSxDQUFLM00sTUFBQSxFQUFRO1FBQUVzTSxFQUFBO1FBQUlxSyxJQUFBLEVBQU07TUFBUyxDQUFFO01BQzdELElBQU1xTCxLQUFBLEdBQVE7TUFFZCxJQUFJLENBQUMvTixLQUFBLElBQVM4TixTQUFBLEVBQVc7UUFDdkIsSUFBTSxDQUFDRSxRQUFBLEVBQVVyRixRQUFRLElBQUltRixTQUFBO1FBRTdCLElBQUlydUIsT0FBQSxDQUFRNlUsU0FBQSxDQUFVMFosUUFBUSxLQUFLamlCLE1BQUEsQ0FBT2lNLFFBQUEsQ0FBU2dXLFFBQVEsR0FBRztVQUM1RCxJQUFJcGhCLE1BQUEsR0FBUXBOLE1BQUEsQ0FBT2lCLEtBQUEsQ0FBTXNMLE1BQUEsRUFBUTRjLFFBQVE7VUFFekMsSUFBSSxDQUFDL2IsTUFBQSxFQUFPO1lBQ1YsSUFBTUgsSUFBQSxHQUFPO2NBQUVBLElBQUEsRUFBTTs7WUFDckIsSUFBTXdoQixTQUFBLEdBQVlwdUIsSUFBQSxDQUFLdUQsSUFBQSxDQUFLdWxCLFFBQVE7WUFDcENyb0IsVUFBQSxDQUFXNEIsV0FBQSxDQUFZNkosTUFBQSxFQUFRVSxJQUFBLEVBQU07Y0FBRTRMLEVBQUEsRUFBSTRWLFNBQUE7Y0FBV2pPO1lBQUssQ0FBRTtZQUM3RHBULE1BQUEsR0FBUXBOLE1BQUEsQ0FBT3FFLEtBQUEsQ0FBTWtJLE1BQUEsRUFBUWtpQixTQUFTO1VBQ3ZDO1VBRUQ1VixFQUFBLEdBQUt6TCxNQUFBO1VBQ0xzWCxNQUFBLEdBQVM7UUFDVjtRQUVELElBQU1nSyxhQUFBLEdBQWdCN1YsRUFBQSxDQUFHM1UsSUFBQSxDQUFLa0QsTUFBQSxHQUFTK2hCLFFBQUEsQ0FBUy9oQixNQUFBO1FBQ2hEOG1CLE1BQUEsR0FBU1EsYUFBQSxHQUFnQjtRQUN6QmhLLE1BQUEsR0FBUztNQUNWO01BRUQwSixRQUFBLEdBQVdwdUIsTUFBQSxDQUFPc0UsUUFBQSxDQUFTaUksTUFBQSxFQUFRc00sRUFBRTtNQUNyQyxJQUFNdU8sS0FBQSxHQUFRdk8sRUFBQSxDQUFHM1UsSUFBQSxDQUFLa0QsTUFBQSxHQUFTOG1CLE1BQUE7TUFDL0IsSUFBTSxHQUFHUyxXQUFXLElBQUlOLE9BQUE7TUFDeEIsSUFBTU8sVUFBQSxHQUFhL1YsRUFBQSxDQUFHM1UsSUFBQSxDQUFLcUQsS0FBQSxDQUFNLEdBQUc2ZixLQUFLO01BQ3pDLElBQUloZCxRQUFBLEdBQVc4akIsTUFBQSxLQUFXLElBQUlyVixFQUFBLENBQUc3TCxNQUFBLEdBQVM2TCxFQUFBLENBQUczVSxJQUFBLENBQUtrakIsS0FBQSxJQUFTbUgsS0FBQTtNQUUzRCxTQUFXLENBQUM5aEIsS0FBQSxFQUFNTSxLQUFJLEtBQUsvTSxNQUFBLENBQU9zRCxNQUFBLENBQU9pSixNQUFBLEVBQVE7UUFDL0NzTSxFQUFBLEVBQUkrVixVQUFBO1FBQ0p2bkIsT0FBQSxFQUFTO1FBQ1RtWjtNQUNELElBQUc7UUFDRixJQUFJa0QsS0FBQSxHQUFRO1FBRVosSUFDRTNXLEtBQUEsQ0FBSzNGLE1BQUEsR0FBU3VuQixXQUFBLENBQVl2bkIsTUFBQSxJQUMxQjJGLEtBQUEsQ0FBSzNGLE1BQUEsS0FBVyxLQUNmLENBQUNvWixLQUFBLElBQVN2Z0IsT0FBQSxDQUFRNlUsU0FBQSxDQUFVckksS0FBSSxLQUFLek0sTUFBQSxDQUFPMFksTUFBQSxDQUFPbk0sTUFBQSxFQUFRRSxLQUFJLEdBQ2hFO1VBQ0E7UUFDRDtRQUVELElBQU1ZLE1BQUEsR0FBUThnQixTQUFBLENBQVUvbkIsT0FBQTtRQUN4QixJQUFNNGUsTUFBQSxHQUFRaGxCLE1BQUEsQ0FBT2lELEtBQUEsQ0FBTXNKLE1BQUEsRUFBUWMsTUFBQSxFQUFPTixLQUFJO1FBRTlDLElBQUkyWCxNQUFBLElBQVUsQ0FBQ3lKLFNBQUEsSUFBYSxDQUFDbnVCLE1BQUEsQ0FBTzhDLE1BQUEsQ0FBT3lKLE1BQUEsRUFBUWMsTUFBQSxFQUFPTixLQUFJLEdBQUc7VUFDL0QyVyxLQUFBLEdBQVE7VUFDUixJQUFNNVQsVUFBQSxHQUFhM1AsSUFBQSxDQUFLNlYsWUFBQSxDQUFhdkosS0FBSTtVQUN6Q0YsTUFBQSxDQUFPckwsS0FBQSxDQUFNO1lBQ1g0SSxJQUFBLEVBQU07WUFDTjVGLElBQUEsRUFBQTZJLEtBQUE7WUFDQTNDLFFBQUE7WUFDQTBGO1VBQ0Q7UUFDRjtRQUVEMUYsUUFBQSxHQUFXMkMsS0FBQSxDQUFLQSxLQUFBLENBQUszRixNQUFBLEdBQVMsTUFBTXNjLEtBQUEsSUFBU3NCLE1BQUEsR0FBUSxJQUFJO01BQzFEO01BRUQsSUFBSTlkLE9BQUEsQ0FBUTJSLEVBQUEsSUFBTSxNQUFNO1FBQ3RCLElBQU03SyxPQUFBLEdBQVFvZ0IsUUFBQSxDQUFTaG9CLE9BQUEsSUFBV3BHLE1BQUEsQ0FBTzZCLEdBQUEsQ0FBSTBLLE1BQUEsRUFBUSxFQUFFO1FBQ3ZEekwsVUFBQSxDQUFXaUUsTUFBQSxDQUFPd0gsTUFBQSxFQUFReUIsT0FBSztNQUNoQztJQUNGO01BQVMsSUFBQTZnQixTQUFBO01BQ1JWLFNBQUEsQ0FBVTVuQixLQUFBLENBQUs7TUFDZixDQUFBc29CLFNBQUEsR0FBQVQsUUFBQSxNQUFRLFFBQUFTLFNBQUEsZUFBUkEsU0FBQSxDQUFVdG9CLEtBQUEsQ0FBSztJQUNoQjtFQUNILENBQUM7QUFDSDtBQ3hJTyxJQUFNYixVQUFBLEdBQTJDLFNBQTNDb3BCLFlBQ1h2aUIsTUFBQSxFQUNBcUYsS0FBQSxFQUVFO0VBQUEsSUFERjFLLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWLElBQUksQ0FBQ2dDLEtBQUEsQ0FBTUMsT0FBQSxDQUFRd0ksS0FBSyxHQUFHO0lBQ3pCQSxLQUFBLEdBQVEsQ0FBQ0EsS0FBSztFQUNmO0VBRUQsSUFBTTVGLEdBQUEsR0FBVztFQUVqQixTQUFXRixHQUFBLElBQU84RixLQUFBLEVBQU87SUFDdkI1RixHQUFBLENBQUlGLEdBQUEsSUFBTztFQUNaO0VBRURoTCxVQUFBLENBQVdrRSxRQUFBLENBQVN1SCxNQUFBLEVBQVFQLEdBQUEsRUFBSzlFLE9BQU87QUFDMUM7SUNYYXZCLFdBQUEsR0FBNkMsU0FBN0NvcEIsYUFDWHhpQixNQUFBLEVBRUU7RUFBQSxJQURGckYsT0FBQSxHQUFPQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxpQkFBQUEsU0FBQSxNQUFHO0VBRVZuSCxNQUFBLENBQU80RixrQkFBQSxDQUFtQjJHLE1BQUEsRUFBUSxNQUFLO0lBQ3JDLElBQU07TUFBRTJXLElBQUEsR0FBTztNQUFVUSxLQUFBLEdBQVE7TUFBT2xELEtBQUEsR0FBUTtJQUFPLElBQUd0WixPQUFBO0lBQzFELElBQUk7TUFBRTJSLEVBQUEsR0FBS3RNLE1BQUEsQ0FBT0MsU0FBQTtNQUFXNFQ7SUFBSyxJQUFLbFosT0FBQTtJQUV2QyxJQUFJLENBQUMyUixFQUFBLEVBQUk7TUFDUDtJQUNEO0lBRUQsSUFBSXVILEtBQUEsSUFBUyxNQUFNO01BQ2pCQSxLQUFBLEdBQVEvZixJQUFBLENBQUs0SSxNQUFBLENBQU80UCxFQUFFLElBQ2xCMkMsU0FBQSxDQUFValAsTUFBQSxFQUFRc00sRUFBRSxJQUNwQnJRLENBQUEsSUFBS3ZJLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FBS3hJLE1BQUEsQ0FBTzZDLE9BQUEsQ0FBUTBKLE1BQUEsRUFBUS9ELENBQUM7SUFDMUQ7SUFFRCxJQUFJbkksSUFBQSxDQUFLNEksTUFBQSxDQUFPNFAsRUFBRSxHQUFHO01BQ25CQSxFQUFBLEdBQUs3WSxNQUFBLENBQU8wRSxLQUFBLENBQU02SCxNQUFBLEVBQVFzTSxFQUFFO0lBQzdCO0lBRUQsSUFBTTRVLFNBQUEsR0FBV2h0QixLQUFBLENBQU00UCxPQUFBLENBQVF3SSxFQUFFLElBQUk3WSxNQUFBLENBQU8yRSxRQUFBLENBQVM0SCxNQUFBLEVBQVFzTSxFQUFFLElBQUk7SUFDbkUsSUFBTXZELE9BQUEsR0FBVXRWLE1BQUEsQ0FBTzhELEtBQUEsQ0FBTXlJLE1BQUEsRUFBUTtNQUFFc00sRUFBQTtNQUFJdUgsS0FBQTtNQUFPOEMsSUFBQTtNQUFNMUM7SUFBSyxDQUFFO0lBQy9ELElBQU15RyxTQUFBLEdBQVc5ZCxLQUFBLENBQU02TixJQUFBLENBQ3JCMUIsT0FBQSxFQUNBZ0IsSUFBQTtNQUFBLElBQUMsR0FBR3JNLENBQUMsSUFBQ3FNLElBQUE7TUFBQSxPQUFLdFcsTUFBQSxDQUFPbUUsT0FBQSxDQUFRb0ksTUFBQSxFQUFRdEMsQ0FBQztJQUFDLEMsRUFJcEM1QyxPQUFBLENBQU87SUFBRSxJQUFBK2tCLEtBQUEsWUFBQUMsT0FBQSxFQUVxQjtNQUM5QixJQUFNL2xCLEtBQUEsR0FBTzJsQixRQUFBLENBQVExbEIsS0FBQSxDQUFLO01BQzFCLElBQU0sQ0FBQ2tHLEtBQUksSUFBSXpNLE1BQUEsQ0FBTzZELElBQUEsQ0FBSzBJLE1BQUEsRUFBUWpHLEtBQUk7TUFDdkMsSUFBSXlNLE1BQUEsR0FBUS9TLE1BQUEsQ0FBTzBFLEtBQUEsQ0FBTTZILE1BQUEsRUFBUWpHLEtBQUk7TUFFckMsSUFBSW9kLEtBQUEsSUFBUytKLFNBQUEsRUFBVTtRQUNyQjFhLE1BQUEsR0FBUXRTLEtBQUEsQ0FBTTZTLFlBQUEsQ0FBYW1hLFNBQUEsQ0FBU3JuQixPQUFBLEVBQVUyTSxNQUFLO01BQ3BEO01BRURqUyxVQUFBLENBQVd5QyxTQUFBLENBQVVnSixNQUFBLEVBQVE7UUFDM0JzTSxFQUFBLEVBQUk5RixNQUFBO1FBQ0pxTixLQUFBLEVBQU81WCxDQUFBLElBQUt2SSxPQUFBLENBQVEwSSxVQUFBLENBQVc4RCxLQUFJLEtBQUtBLEtBQUEsQ0FBS0csUUFBQSxDQUFTMkcsUUFBQSxDQUFTL0ssQ0FBQztRQUNoRWdZO01BQ0Q7O0lBYkgsU0FBV3lMLFFBQUEsSUFBV2hGLFNBQUEsRUFBUTtNQUFBbUYsS0FBQTtJQUFBO0lBZ0I5QixJQUFJcUIsU0FBQSxFQUFVO01BQ1pBLFNBQUEsQ0FBU2xuQixLQUFBLENBQUs7SUFDZjtFQUNILENBQUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ETyxJQUFNVixTQUFBLEdBQXlDLFNBQXpDbXBCLFdBQ1h6aUIsTUFBQSxFQUNBc0YsT0FBQSxFQUVFO0VBQUEsSUFERjNLLE9BQUEsR0FBT0MsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsaUJBQUFBLFNBQUEsTUFBRztFQUVWbkgsTUFBQSxDQUFPNEYsa0JBQUEsQ0FBbUIyRyxNQUFBLEVBQVEsTUFBSztJQUNyQyxJQUFNO01BQUUyVyxJQUFBLEdBQU87TUFBVVEsS0FBQSxHQUFRO01BQU9sRCxLQUFBLEdBQVE7SUFBTyxJQUFHdFosT0FBQTtJQUMxRCxJQUFJO01BQUVrWixLQUFBO01BQU92SCxFQUFBLEdBQUt0TSxNQUFBLENBQU9DO0lBQVMsSUFBS3RGLE9BQUE7SUFFdkMsSUFBSSxDQUFDMlIsRUFBQSxFQUFJO01BQ1A7SUFDRDtJQUVELElBQUl1SCxLQUFBLElBQVMsTUFBTTtNQUNqQixJQUFJL2YsSUFBQSxDQUFLNEksTUFBQSxDQUFPNFAsRUFBRSxHQUFHO1FBQ25CdUgsS0FBQSxHQUFRNUUsU0FBQSxDQUFValAsTUFBQSxFQUFRc00sRUFBRTtpQkFDbkJ0TSxNQUFBLENBQU9pTSxRQUFBLENBQVMzRyxPQUFPLEdBQUc7UUFDbkN1TyxLQUFBLEdBQVE1WCxDQUFBLElBQ0x2SSxPQUFBLENBQVE2VSxTQUFBLENBQVV0TSxDQUFDLEtBQUt4SSxNQUFBLENBQU93WSxRQUFBLENBQVNqTSxNQUFBLEVBQVEvRCxDQUFDLEtBQU0zSCxJQUFBLENBQUtpTixNQUFBLENBQU90RixDQUFDO01BQ3hFLE9BQU07UUFDTDRYLEtBQUEsR0FBUTVYLENBQUEsSUFBS3ZJLE9BQUEsQ0FBUTZVLFNBQUEsQ0FBVXRNLENBQUMsS0FBS3hJLE1BQUEsQ0FBTzZDLE9BQUEsQ0FBUTBKLE1BQUEsRUFBUS9ELENBQUM7TUFDOUQ7SUFDRjtJQUVELElBQUlrYixLQUFBLElBQVNqakIsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxHQUFHO01BQzlCLElBQU0sQ0FBQ2pGLE1BQUEsRUFBT1QsSUFBRyxJQUFJMVMsS0FBQSxDQUFNa0IsS0FBQSxDQUFNa1gsRUFBRTtNQUNuQyxJQUFNNFUsU0FBQSxHQUFXenRCLE1BQUEsQ0FBTzJFLFFBQUEsQ0FBUzRILE1BQUEsRUFBUXNNLEVBQUEsRUFBSTtRQUMzQ3hTLFFBQUEsRUFBVTtNQUNYO01BQ0R2RixVQUFBLENBQVd3RSxVQUFBLENBQVdpSCxNQUFBLEVBQVE7UUFBRXNNLEVBQUEsRUFBSTFGLElBQUE7UUFBS2lOLEtBQUE7UUFBT0k7TUFBSyxDQUFFO01BQ3ZEMWYsVUFBQSxDQUFXd0UsVUFBQSxDQUFXaUgsTUFBQSxFQUFRO1FBQUVzTSxFQUFBLEVBQUlqRixNQUFBO1FBQU93TSxLQUFBO1FBQU9JO01BQUssQ0FBRTtNQUN6RDNILEVBQUEsR0FBSzRVLFNBQUEsQ0FBU2xuQixLQUFBLENBQUs7TUFFbkIsSUFBSVcsT0FBQSxDQUFRMlIsRUFBQSxJQUFNLE1BQU07UUFDdEIvWCxVQUFBLENBQVdpRSxNQUFBLENBQU93SCxNQUFBLEVBQVFzTSxFQUFFO01BQzdCO0lBQ0Y7SUFFRCxJQUFNb1csS0FBQSxHQUFROWxCLEtBQUEsQ0FBTTZOLElBQUEsQ0FDbEJoWCxNQUFBLENBQU84RCxLQUFBLENBQU15SSxNQUFBLEVBQVE7TUFDbkJzTSxFQUFBO01BQ0F1SCxLQUFBLEVBQU83VCxNQUFBLENBQU9pTSxRQUFBLENBQVMzRyxPQUFPLElBQzFCckosQ0FBQSxJQUFLdkksT0FBQSxDQUFRNlUsU0FBQSxDQUFVdE0sQ0FBQyxLQUFLeEksTUFBQSxDQUFPNkMsT0FBQSxDQUFRMEosTUFBQSxFQUFRL0QsQ0FBQyxJQUNyREEsQ0FBQSxJQUFLeEksTUFBQSxDQUFPK0MsUUFBQSxDQUFTeUYsQ0FBQztNQUMxQjBhLElBQUEsRUFBTTtNQUNOMUM7SUFDRCxFQUFDO0lBQ0gsSUFBQTRMLEtBQUEsWUFBQUMsT0FBQSxFQUVpQztRQUNoQyxJQUFNcGEsQ0FBQSxHQUFJeFIsS0FBQSxDQUFNNFAsT0FBQSxDQUFRd0ksRUFBRSxJQUN0QnBZLEtBQUEsQ0FBTTZTLFlBQUEsQ0FBYXVGLEVBQUEsRUFBSTdZLE1BQUEsQ0FBTzBFLEtBQUEsQ0FBTTZILE1BQUEsRUFBUTJpQixRQUFRLENBQUMsSUFDckRyVyxFQUFBO1FBRUosSUFBSSxDQUFDNUcsQ0FBQSxFQUFHO1VBQUE7UUFFUDtRQUVELElBQU1xRCxPQUFBLEdBQVVuTSxLQUFBLENBQU02TixJQUFBLENBQ3BCaFgsTUFBQSxDQUFPOEQsS0FBQSxDQUFNeUksTUFBQSxFQUFRO1VBQUVzTSxFQUFBLEVBQUk1RyxDQUFBO1VBQUdtTyxLQUFBO1VBQU84QyxJQUFBO1VBQU0xQztRQUFLLENBQUUsQ0FBQztRQUdyRCxJQUFJbEwsT0FBQSxDQUFRbE8sTUFBQSxHQUFTLEdBQUc7VUFDdEIsSUFBTSxDQUFDeWQsTUFBSyxJQUFJdlAsT0FBQTtVQUNoQixJQUFNM0wsS0FBQSxHQUFPMkwsT0FBQSxDQUFRQSxPQUFBLENBQVFsTyxNQUFBLEdBQVM7VUFDdEMsSUFBTSxHQUFHaWdCLFNBQVMsSUFBSXhDLE1BQUE7VUFDdEIsSUFBTSxHQUFHeUMsUUFBUSxJQUFJM2QsS0FBQTtVQUVyQixJQUFJMGQsU0FBQSxDQUFVamdCLE1BQUEsS0FBVyxLQUFLa2dCLFFBQUEsQ0FBU2xnQixNQUFBLEtBQVcsR0FBRztZQUNuRDtVQUVEO1VBRUQsSUFBTTBsQixVQUFBLEdBQWF6c0IsSUFBQSxDQUFLK0gsTUFBQSxDQUFPaWYsU0FBQSxFQUFXQyxRQUFRLElBQzlDam5CLElBQUEsQ0FBSzRELE1BQUEsQ0FBT29qQixTQUFTLElBQ3JCaG5CLElBQUEsQ0FBS21ILE1BQUEsQ0FBTzZmLFNBQUEsRUFBV0MsUUFBUTtVQUVuQyxJQUFNdlUsTUFBQSxHQUFRL1MsTUFBQSxDQUFPMEUsS0FBQSxDQUFNNkgsTUFBQSxFQUFROGEsU0FBQSxFQUFXQyxRQUFRO1VBQ3RELElBQU02SCxlQUFBLEdBQWtCbnZCLE1BQUEsQ0FBTzZELElBQUEsQ0FBSzBJLE1BQUEsRUFBUXVnQixVQUFVO1VBQ3RELElBQU0sQ0FBQ3NDLFVBQVUsSUFBSUQsZUFBQTtVQUNyQixJQUFNL0gsS0FBQSxHQUFRMEYsVUFBQSxDQUFXMWxCLE1BQUEsR0FBUztVQUNsQyxJQUFNaW9CLFdBQUEsR0FBY2h2QixJQUFBLENBQUt1RCxJQUFBLENBQUswakIsUUFBQSxDQUFTL2YsS0FBQSxDQUFNLEdBQUc2ZixLQUFLLENBQUM7VUFDdEQsSUFBTWtJLE9BQUEsR0FBT0MsYUFBQSxDQUFBQSxhQUFBLEtBQVExZCxPQUFPO1lBQUVqRixRQUFBLEVBQVU7V0FBSTtVQUM1QzlMLFVBQUEsQ0FBVzRCLFdBQUEsQ0FBWTZKLE1BQUEsRUFBUStpQixPQUFBLEVBQVM7WUFBRXpXLEVBQUEsRUFBSXdXLFdBQUE7WUFBYTdPO1VBQUssQ0FBRTtVQUVsRTFmLFVBQUEsQ0FBVzZDLFNBQUEsQ0FBVTRJLE1BQUEsRUFBUTtZQUMzQnNNLEVBQUEsRUFBSTlGLE1BQUE7WUFDSnFOLEtBQUEsRUFBTzVYLENBQUEsSUFDTHZJLE9BQUEsQ0FBUTBJLFVBQUEsQ0FBV3ltQixVQUFVLEtBQUtBLFVBQUEsQ0FBV3hpQixRQUFBLENBQVMyRyxRQUFBLENBQVMvSyxDQUFDO1lBQ2xFeU8sRUFBQSxFQUFJb1ksV0FBQSxDQUFZM2xCLE1BQUEsQ0FBTyxDQUFDO1lBQ3hCOFc7VUFDRDtRQUNGOztNQUNGZ1AsSUFBQTtJQTVDRCxTQUFXLEdBQUdOLFFBQVEsS0FBS0QsS0FBQSxFQUFLO01BQUFPLElBQUEsR0FBQXBELEtBQUE7TUFBQSxJQUFBb0QsSUFBQSxLQU01QjtJQUFRO0VBdUNkLENBQUM7QUFDSDtBQ2RhLElBQUFudUIsWUFBQSxHQUFlQSxDQUFBLEtBQWE7RUFDdkMsSUFBTWtMLE1BQUEsR0FBaUI7SUFDckJLLFFBQUEsRUFBVTtJQUNWZ00sVUFBQSxFQUFZO0lBQ1pwTSxTQUFBLEVBQVc7SUFDWGhKLEtBQUEsRUFBTztJQUNQK1UsaUJBQUEsRUFBbUJBLENBQUEsS0FBTTtJQUN6QkMsUUFBQSxFQUFVQSxDQUFBLEtBQU07SUFDaEJDLFlBQUEsRUFBY0EsQ0FBQSxLQUFNO0lBQ3BCQyxNQUFBLEVBQVFBLENBQUEsS0FBTTtJQUNkMEssWUFBQSxFQUFjQSxDQUFBLEtBQU07SUFDcEJ6SyxRQUFBLEVBQVVBLENBQUEsS0FBSztJQUdmelgsS0FBQSxFQUFPLFNBQUF1dUIsUUFBQTtNQUFBLFNBQUFDLElBQUEsR0FBQXZvQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUF1bUIsSUFBQSxHQUFBcGlCLElBQUEsTUFBQUEsSUFBQSxHQUFBb2lCLElBQUEsRUFBQXBpQixJQUFBO1FBQUpxaUIsSUFBQSxDQUFJcmlCLElBQUEsSUFBQW5HLFNBQUEsQ0FBQW1HLElBQUE7TUFBQTtNQUFBLE9BQUtwTSxLQUFBLENBQU1xTCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFHMUMzdUIsT0FBQSxFQUFTLFNBQUE0dUIsVUFBQTtNQUFBLFNBQUFDLEtBQUEsR0FBQTFvQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUEwbUIsS0FBQSxHQUFBNWhCLEtBQUEsTUFBQUEsS0FBQSxHQUFBNGhCLEtBQUEsRUFBQTVoQixLQUFBO1FBQUowaEIsSUFBQSxDQUFJMWhCLEtBQUEsSUFBQTlHLFNBQUEsQ0FBQThHLEtBQUE7TUFBQTtNQUFBLE9BQUtqTixPQUFBLENBQVF1TCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDOUNydUIsY0FBQSxFQUFnQixTQUFBd3VCLGlCQUFBO01BQUEsU0FBQUMsS0FBQSxHQUFBNW9CLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTRtQixLQUFBLEdBQUFyaEIsS0FBQSxNQUFBQSxLQUFBLEdBQUFxaEIsS0FBQSxFQUFBcmhCLEtBQUE7UUFBSmloQixJQUFBLENBQUlqaEIsS0FBQSxJQUFBdkgsU0FBQSxDQUFBdUgsS0FBQTtNQUFBO01BQUEsT0FBS3BOLGNBQUEsQ0FBZWlMLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUM1RHB1QixhQUFBLEVBQWUsU0FBQXl1QixnQkFBQTtNQUFBLFNBQUFDLEtBQUEsR0FBQTlvQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUE4bUIsS0FBQSxHQUFBbGhCLEtBQUEsTUFBQUEsS0FBQSxHQUFBa2hCLEtBQUEsRUFBQWxoQixLQUFBO1FBQUo0Z0IsSUFBQSxDQUFJNWdCLEtBQUEsSUFBQTVILFNBQUEsQ0FBQTRILEtBQUE7TUFBQTtNQUFBLE9BQUt4TixhQUFBLENBQWNnTCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDMURudUIsY0FBQSxFQUFnQixTQUFBMHVCLGlCQUFBO01BQUEsU0FBQUMsS0FBQSxHQUFBaHBCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQWduQixLQUFBLEdBQUF2Z0IsS0FBQSxNQUFBQSxLQUFBLEdBQUF1Z0IsS0FBQSxFQUFBdmdCLEtBQUE7UUFBSitmLElBQUEsQ0FBSS9mLEtBQUEsSUFBQXpJLFNBQUEsQ0FBQXlJLEtBQUE7TUFBQTtNQUFBLE9BQUtwTyxjQUFBLENBQWUrSyxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDNUQxdEIsV0FBQSxFQUFhLFNBQUFtdUIsY0FBQTtNQUFBLFNBQUFDLEtBQUEsR0FBQWxwQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFrbkIsS0FBQSxHQUFBcGdCLEtBQUEsTUFBQUEsS0FBQSxHQUFBb2dCLEtBQUEsRUFBQXBnQixLQUFBO1FBQUowZixJQUFBLENBQUkxZixLQUFBLElBQUE5SSxTQUFBLENBQUE4SSxLQUFBO01BQUE7TUFBQSxPQUFLaE8sV0FBQSxDQUFZc0ssTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ3REcHRCLFdBQUEsRUFBYSxTQUFBK3RCLGNBQUE7TUFBQSxTQUFBQyxLQUFBLEdBQUFwcEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBb25CLEtBQUEsR0FBQXJnQixLQUFBLE1BQUFBLEtBQUEsR0FBQXFnQixLQUFBLEVBQUFyZ0IsS0FBQTtRQUFKeWYsSUFBQSxDQUFJemYsS0FBQSxJQUFBL0ksU0FBQSxDQUFBK0ksS0FBQTtNQUFBO01BQUEsT0FBSzNOLFdBQUEsQ0FBWWdLLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUN0RGh0QixlQUFBLEVBQWlCLFNBQUE2dEIsa0JBQUE7TUFBQSxTQUFBQyxLQUFBLEdBQUF0cEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBc25CLEtBQUEsR0FBQWxnQixLQUFBLE1BQUFBLEtBQUEsR0FBQWtnQixLQUFBLEVBQUFsZ0IsS0FBQTtRQUFKb2YsSUFBQSxDQUFJcGYsS0FBQSxJQUFBcEosU0FBQSxDQUFBb0osS0FBQTtNQUFBO01BQUEsT0FBSzVOLGVBQUEsQ0FBZ0I0SixNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDOURudEIsY0FBQSxFQUFnQixTQUFBa3VCLGlCQUFBO01BQUEsU0FBQUMsS0FBQSxHQUFBeHBCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQXduQixLQUFBLEdBQUF2ZixLQUFBLE1BQUFBLEtBQUEsR0FBQXVmLEtBQUEsRUFBQXZmLEtBQUE7UUFBSnVlLElBQUEsQ0FBSXZlLEtBQUEsSUFBQWpLLFNBQUEsQ0FBQWlLLEtBQUE7TUFBQTtNQUFBLE9BQUs1TyxjQUFBLENBQWUrSixNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDNURsdEIsVUFBQSxFQUFZLFNBQUFtdUIsYUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTFwQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUEwbkIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpuQixJQUFBLENBQUltQixNQUFBLElBQUEzcEIsU0FBQSxDQUFBMnBCLE1BQUE7TUFBQTtNQUFBLE9BQUtydUIsVUFBQSxDQUFXOEosTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ3BEL3NCLFVBQUEsRUFBWSxTQUFBbXVCLGFBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUE3cEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBNm5CLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKdEIsSUFBQSxDQUFJc0IsTUFBQSxJQUFBOXBCLFNBQUEsQ0FBQThwQixNQUFBO01BQUE7TUFBQSxPQUFLcnVCLFVBQUEsQ0FBVzJKLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNwRDNyQixhQUFBLEVBQWUsU0FBQWt0QixnQkFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQWhxQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFnb0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp6QixJQUFBLENBQUl5QixNQUFBLElBQUFqcUIsU0FBQSxDQUFBaXFCLE1BQUE7TUFBQTtNQUFBLE9BQUtwdEIsYUFBQSxDQUFjdUksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFEOXFCLFVBQUEsRUFBWSxTQUFBd3NCLGFBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFucUIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBbW9CLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKNUIsSUFBQSxDQUFJNEIsTUFBQSxJQUFBcHFCLFNBQUEsQ0FBQW9xQixNQUFBO01BQUE7TUFBQSxPQUFLMXNCLFVBQUEsQ0FBVzBILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNwRDN0QixhQUFBLEVBQWUsU0FBQXd2QixnQkFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXRxQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFzb0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUovQixJQUFBLENBQUkrQixNQUFBLElBQUF2cUIsU0FBQSxDQUFBdXFCLE1BQUE7TUFBQTtNQUFBLE9BQUsxdkIsYUFBQSxDQUFjdUssTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFEdHFCLGVBQUEsRUFBaUIsU0FBQXNzQixrQkFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXpxQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUF5b0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpsQyxJQUFBLENBQUlrQyxNQUFBLElBQUExcUIsU0FBQSxDQUFBMHFCLE1BQUE7TUFBQTtNQUFBLE9BQUt4c0IsZUFBQSxDQUFnQmtILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUc5RDV1QixLQUFBLEVBQU8sU0FBQSt3QixRQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBNXFCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTRvQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnJDLElBQUEsQ0FBSXFDLE1BQUEsSUFBQTdxQixTQUFBLENBQUE2cUIsTUFBQTtNQUFBO01BQUEsT0FBS2p4QixLQUFBLENBQU13TCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDMUMxdUIsS0FBQSxFQUFPLFNBQUFneEIsUUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQS9xQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUErb0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp4QyxJQUFBLENBQUl3QyxNQUFBLElBQUFockIsU0FBQSxDQUFBZ3JCLE1BQUE7TUFBQTtNQUFBLE9BQUtseEIsS0FBQSxDQUFNc0wsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFDeHVCLE1BQUEsRUFBUSxTQUFBaXhCLFNBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFsckIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBa3BCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKM0MsSUFBQSxDQUFJMkMsTUFBQSxJQUFBbnJCLFNBQUEsQ0FBQW1yQixNQUFBO01BQUE7TUFBQSxPQUFLbnhCLE1BQUEsQ0FBT29MLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUM1Q3Z1QixRQUFBLEVBQVUsU0FBQW14QixXQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBcnJCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQXFwQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjlDLElBQUEsQ0FBSThDLE1BQUEsSUFBQXRyQixTQUFBLENBQUFzckIsTUFBQTtNQUFBO01BQUEsT0FBS3J4QixRQUFBLENBQVNtTCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDaERwUCxNQUFBLEVBQVEsU0FBQW1TLFFBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF4ckIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBd3BCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKakQsSUFBQSxDQUFJaUQsTUFBQSxJQUFBenJCLFNBQUEsQ0FBQXlyQixNQUFBO01BQUE7TUFBQSxPQUFLbnhCLFVBQUEsQ0FBVzhLLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNoRGp1QixRQUFBLEVBQVUsU0FBQW14QixXQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBM3JCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTJwQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnBELElBQUEsQ0FBSW9ELE1BQUEsSUFBQTVyQixTQUFBLENBQUE0ckIsTUFBQTtNQUFBO01BQUEsT0FBS3J4QixRQUFBLENBQVM2SyxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDaERodUIsS0FBQSxFQUFPLFNBQUFxeEIsUUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTlyQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUE4cEIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp2RCxJQUFBLENBQUl1RCxNQUFBLElBQUEvckIsU0FBQSxDQUFBK3JCLE1BQUE7TUFBQTtNQUFBLE9BQUt2eEIsS0FBQSxDQUFNNEssTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFDL3RCLGVBQUEsRUFBaUIsU0FBQXV4QixrQkFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQWpzQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFpcUIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUoxRCxJQUFBLENBQUkwRCxNQUFBLElBQUFsc0IsU0FBQSxDQUFBa3NCLE1BQUE7TUFBQTtNQUFBLE9BQUt6eEIsZUFBQSxDQUFnQjJLLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUM5RDl0QixHQUFBLEVBQUssU0FBQXl4QixNQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBcHNCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQW9xQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjdELElBQUEsQ0FBSTZELE1BQUEsSUFBQXJzQixTQUFBLENBQUFxc0IsTUFBQTtNQUFBO01BQUEsT0FBSzN4QixHQUFBLENBQUkwSyxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDdEM3dEIsS0FBQSxFQUFPLFNBQUEyeEIsUUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXZzQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUF1cUIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpoRSxJQUFBLENBQUlnRSxNQUFBLElBQUF4c0IsU0FBQSxDQUFBd3NCLE1BQUE7TUFBQTtNQUFBLE9BQUs3eEIsS0FBQSxDQUFNeUssTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFDNXRCLFFBQUEsRUFBVSxTQUFBNnhCLFdBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUExc0IsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBMHFCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKbkUsSUFBQSxDQUFJbUUsTUFBQSxJQUFBM3NCLFNBQUEsQ0FBQTJzQixNQUFBO01BQUE7TUFBQSxPQUFLL3hCLFFBQUEsQ0FBU3dLLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNoRDNXLFFBQUEsRUFBVSxTQUFBQSxTQUFBO01BQUEsU0FBQSthLE1BQUEsR0FBQTVzQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUE0cUIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpyRSxJQUFBLENBQUlxRSxNQUFBLElBQUE3c0IsU0FBQSxDQUFBNnNCLE1BQUE7TUFBQTtNQUFBLE9BQUt4d0IsS0FBQSxDQUFNK0ksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzdDeHRCLFNBQUEsRUFBVyxTQUFBOHhCLFlBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUEvc0IsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBK3FCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKeEUsSUFBQSxDQUFJd0UsTUFBQSxJQUFBaHRCLFNBQUEsQ0FBQWd0QixNQUFBO01BQUE7TUFBQSxPQUFLaHlCLFNBQUEsQ0FBVW9LLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNsRHZ0QixVQUFBLEVBQVksU0FBQWd5QixhQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBbHRCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQWtyQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjNFLElBQUEsQ0FBSTJFLE1BQUEsSUFBQW50QixTQUFBLENBQUFtdEIsTUFBQTtNQUFBO01BQUEsT0FBS2x5QixVQUFBLENBQVdtSyxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDcER0dEIsT0FBQSxFQUFTLFNBQUFreUIsVUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXJ0QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFxckIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUo5RSxJQUFBLENBQUk4RSxNQUFBLElBQUF0dEIsU0FBQSxDQUFBc3RCLE1BQUE7TUFBQTtNQUFBLE9BQUtweUIsT0FBQSxDQUFRa0ssTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzlDcnRCLFFBQUEsRUFBVSxTQUFBb3lCLFdBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF4dEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBd3JCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKakYsSUFBQSxDQUFJaUYsTUFBQSxJQUFBenRCLFNBQUEsQ0FBQXl0QixNQUFBO01BQUE7TUFBQSxPQUFLdHlCLFFBQUEsQ0FBU2lLLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNoRGp0QixXQUFBLEVBQWEsU0FBQW15QixjQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBM3RCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTJyQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnBGLElBQUEsQ0FBSW9GLE1BQUEsSUFBQTV0QixTQUFBLENBQUE0dEIsTUFBQTtNQUFBO01BQUEsT0FBS3J5QixXQUFBLENBQVk2SixNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDdEQ5c0IsT0FBQSxFQUFTLFNBQUFteUIsVUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTl0QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUE4ckIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp2RixJQUFBLENBQUl1RixNQUFBLElBQUEvdEIsU0FBQSxDQUFBK3RCLE1BQUE7TUFBQTtNQUFBLE9BQUtyeUIsT0FBQSxDQUFRMEosTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzlDN3NCLE1BQUEsRUFBUSxTQUFBcXlCLFNBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFqdUIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBaXNCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKMUYsSUFBQSxDQUFJMEYsTUFBQSxJQUFBbHVCLFNBQUEsQ0FBQWt1QixNQUFBO01BQUE7TUFBQSxPQUFLdnlCLE1BQUEsQ0FBT3lKLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUM1QzNzQixPQUFBLEVBQVMsU0FBQXN5QixVQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBcHVCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQW9zQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjdGLElBQUEsQ0FBSTZGLE1BQUEsSUFBQXJ1QixTQUFBLENBQUFxdUIsTUFBQTtNQUFBO01BQUEsT0FBS3h5QixPQUFBLENBQVF1SixNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDOUMxc0IsS0FBQSxFQUFPLFNBQUF3eUIsUUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXZ1QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUF1c0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpoRyxJQUFBLENBQUlnRyxNQUFBLElBQUF4dUIsU0FBQSxDQUFBd3VCLE1BQUE7TUFBQTtNQUFBLE9BQUsxeUIsS0FBQSxDQUFNc0osTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFDenNCLGFBQUEsRUFBZSxTQUFBMHlCLGdCQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBMXVCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTBzQixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSm5HLElBQUEsQ0FBSW1HLE1BQUEsSUFBQTN1QixTQUFBLENBQUEydUIsTUFBQTtNQUFBO01BQUEsT0FBSzV5QixhQUFBLENBQWNxSixNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDMUR4c0IsT0FBQSxFQUFTLFNBQUE0eUIsVUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTd1QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUE2c0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp0RyxJQUFBLENBQUlzRyxNQUFBLElBQUE5dUIsU0FBQSxDQUFBOHVCLE1BQUE7TUFBQTtNQUFBLE9BQUs5eUIsT0FBQSxDQUFRb0osTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzlDdnNCLElBQUEsRUFBTSxTQUFBOHlCLE9BQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFodkIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBZ3RCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKekcsSUFBQSxDQUFJeUcsTUFBQSxJQUFBanZCLFNBQUEsQ0FBQWl2QixNQUFBO01BQUE7TUFBQSxPQUFLaHpCLElBQUEsQ0FBS21KLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUN4Q3RzQixJQUFBLEVBQU0sU0FBQWd6QixPQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBbnZCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQW10QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjVHLElBQUEsQ0FBSTRHLE1BQUEsSUFBQXB2QixTQUFBLENBQUFvdkIsTUFBQTtNQUFBO01BQUEsT0FBS2x6QixJQUFBLENBQUtrSixNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDeENyc0IsTUFBQSxFQUFRLFNBQUFrekIsU0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXR2QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFzdEIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUovRyxJQUFBLENBQUkrRyxNQUFBLElBQUF2dkIsU0FBQSxDQUFBdXZCLE1BQUE7TUFBQTtNQUFBLE9BQUtwekIsTUFBQSxDQUFPaUosTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzVDcHNCLFNBQUEsRUFBVyxTQUFBb3pCLFlBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF6dkIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBeXRCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKbEgsSUFBQSxDQUFJa0gsTUFBQSxJQUFBMXZCLFNBQUEsQ0FBQTB2QixNQUFBO01BQUE7TUFBQSxPQUFLdHpCLFNBQUEsQ0FBVWdKLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNsRGxzQixVQUFBLEVBQVksU0FBQXF6QixhQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBNXZCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTR0QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnJILElBQUEsQ0FBSXFILE1BQUEsSUFBQTd2QixTQUFBLENBQUE2dkIsTUFBQTtNQUFBO01BQUEsT0FBS3Z6QixVQUFBLENBQVc4SSxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDcERqc0IsSUFBQSxFQUFNLFNBQUF1ekIsT0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQS92QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUErdEIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUp4SCxJQUFBLENBQUl3SCxNQUFBLElBQUFod0IsU0FBQSxDQUFBZ3dCLE1BQUE7TUFBQTtNQUFBLE9BQUt6ekIsSUFBQSxDQUFLNkksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ3hDaHNCLFNBQUEsRUFBVyxTQUFBeXpCLFlBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFsd0IsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBa3VCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKM0gsSUFBQSxDQUFJMkgsTUFBQSxJQUFBbndCLFNBQUEsQ0FBQW13QixNQUFBO01BQUE7TUFBQSxPQUFLM3pCLFNBQUEsQ0FBVTRJLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNsRC9yQixJQUFBLEVBQU0sU0FBQTJ6QixPQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBcndCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQXF1QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjlILElBQUEsQ0FBSThILE1BQUEsSUFBQXR3QixTQUFBLENBQUFzd0IsTUFBQTtNQUFBO01BQUEsT0FBSzd6QixJQUFBLENBQUsySSxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDeEM5ckIsSUFBQSxFQUFNLFNBQUE2ekIsT0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXh3QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUF3dUIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpqSSxJQUFBLENBQUlpSSxNQUFBLElBQUF6d0IsU0FBQSxDQUFBeXdCLE1BQUE7TUFBQTtNQUFBLE9BQUsvekIsSUFBQSxDQUFLMEksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ3hDN3JCLEtBQUEsRUFBTyxTQUFBK3pCLFFBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUEzd0IsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBMnVCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKcEksSUFBQSxDQUFJb0ksTUFBQSxJQUFBNXdCLFNBQUEsQ0FBQTR3QixNQUFBO01BQUE7TUFBQSxPQUFLajBCLEtBQUEsQ0FBTXlJLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUMxQzVyQixTQUFBLEVBQVcsU0FBQWkwQixZQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBOXdCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTh1QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnZJLElBQUEsQ0FBSXVJLE1BQUEsSUFBQS93QixTQUFBLENBQUErd0IsTUFBQTtNQUFBO01BQUEsT0FBS24wQixTQUFBLENBQVV3SSxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDbEQxckIsTUFBQSxFQUFRLFNBQUFrMEIsU0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQWp4QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFpdkIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUoxSSxJQUFBLENBQUkwSSxNQUFBLElBQUFseEIsU0FBQSxDQUFBa3hCLE1BQUE7TUFBQTtNQUFBLE9BQUtwMEIsTUFBQSxDQUFPc0ksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzVDenJCLElBQUEsRUFBTSxTQUFBbzBCLE9BQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFweEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBb3ZCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKN0ksSUFBQSxDQUFJNkksTUFBQSxJQUFBcnhCLFNBQUEsQ0FBQXF4QixNQUFBO01BQUE7TUFBQSxPQUFLdDBCLElBQUEsQ0FBS3FJLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUN4Q3hyQixPQUFBLEVBQVMsU0FBQXMwQixVQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBdnhCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQXV2QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSmhKLElBQUEsQ0FBSWdKLE1BQUEsSUFBQXh4QixTQUFBLENBQUF3eEIsTUFBQTtNQUFBO01BQUEsT0FBS3gwQixPQUFBLENBQVFvSSxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDOUN2ckIsUUFBQSxFQUFVLFNBQUF3MEIsV0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTF4QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUEwdkIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpuSixJQUFBLENBQUltSixNQUFBLElBQUEzeEIsU0FBQSxDQUFBMnhCLE1BQUE7TUFBQTtNQUFBLE9BQUsxMEIsUUFBQSxDQUFTbUksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ2hEdHJCLEtBQUEsRUFBTyxTQUFBMDBCLFFBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUE3eEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBNnZCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKdEosSUFBQSxDQUFJc0osTUFBQSxJQUFBOXhCLFNBQUEsQ0FBQTh4QixNQUFBO01BQUE7TUFBQSxPQUFLNTBCLEtBQUEsQ0FBTWtJLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUMxQ3JyQixRQUFBLEVBQVUsU0FBQTQwQixXQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBaHlCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQWd3QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnpKLElBQUEsQ0FBSXlKLE1BQUEsSUFBQWp5QixTQUFBLENBQUFpeUIsTUFBQTtNQUFBO01BQUEsT0FBSzkwQixRQUFBLENBQVNpSSxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDaERwckIsU0FBQSxFQUFXLFNBQUE4MEIsWUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQW55QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFtd0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUo1SixJQUFBLENBQUk0SixNQUFBLElBQUFweUIsU0FBQSxDQUFBb3lCLE1BQUE7TUFBQTtNQUFBLE9BQUtoMUIsU0FBQSxDQUFVZ0ksTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ2xEbnJCLFNBQUEsRUFBVyxTQUFBZzFCLFlBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF0eUIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBc3dCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKL0osSUFBQSxDQUFJK0osTUFBQSxJQUFBdnlCLFNBQUEsQ0FBQXV5QixNQUFBO01BQUE7TUFBQSxPQUFLbDFCLFNBQUEsQ0FBVStILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNsRGxyQixRQUFBLEVBQVUsU0FBQWsxQixXQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBenlCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQXl3QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSmxLLElBQUEsQ0FBSWtLLE1BQUEsSUFBQTF5QixTQUFBLENBQUEweUIsTUFBQTtNQUFBO01BQUEsT0FBS3AxQixRQUFBLENBQVM4SCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDaERqckIsS0FBQSxFQUFPLFNBQUFvMUIsUUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTV5QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUE0d0IsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpySyxJQUFBLENBQUlxSyxNQUFBLElBQUE3eUIsU0FBQSxDQUFBNnlCLE1BQUE7TUFBQTtNQUFBLE9BQUt0MUIsS0FBQSxDQUFNNkgsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFDaHJCLFFBQUEsRUFBVSxTQUFBczFCLFdBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUEveUIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBK3dCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKeEssSUFBQSxDQUFJd0ssTUFBQSxJQUFBaHpCLFNBQUEsQ0FBQWd6QixNQUFBO01BQUE7TUFBQSxPQUFLeDFCLFFBQUEsQ0FBUzRILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNoRC9xQixTQUFBLEVBQVcsU0FBQXcxQixZQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBbHpCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQWt4QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSjNLLElBQUEsQ0FBSTJLLE1BQUEsSUFBQW56QixTQUFBLENBQUFtekIsTUFBQTtNQUFBO01BQUEsT0FBSzExQixTQUFBLENBQVUySCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDbEQ3cUIsV0FBQSxFQUFhLFNBQUF5MUIsY0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQXJ6QixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFxeEIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUo5SyxJQUFBLENBQUk4SyxNQUFBLElBQUF0ekIsU0FBQSxDQUFBc3pCLE1BQUE7TUFBQTtNQUFBLE9BQUszMUIsV0FBQSxDQUFZeUgsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ3RENXFCLE1BQUEsRUFBUSxTQUFBMjFCLFNBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF4ekIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBd3hCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKakwsSUFBQSxDQUFJaUwsTUFBQSxJQUFBenpCLFNBQUEsQ0FBQXl6QixNQUFBO01BQUE7TUFBQSxPQUFLNzFCLE1BQUEsQ0FBT3dILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUM1QzNxQixRQUFBLEVBQVUsU0FBQTYxQixXQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBM3pCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTJ4QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnBMLElBQUEsQ0FBSW9MLE1BQUEsSUFBQTV6QixTQUFBLENBQUE0ekIsTUFBQTtNQUFBO01BQUEsT0FBSy8xQixRQUFBLENBQVN1SCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDaEQxcUIsY0FBQSxFQUFnQixTQUFBKzFCLGlCQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBOXpCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTh4QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnZMLElBQUEsQ0FBSXVMLE1BQUEsSUFBQS96QixTQUFBLENBQUErekIsTUFBQTtNQUFBO01BQUEsT0FBS2oyQixjQUFBLENBQWVzSCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDNUR6cUIsUUFBQSxFQUFVLFNBQUFpMkIsV0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQWowQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFpeUIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUoxTCxJQUFBLENBQUkwTCxNQUFBLElBQUFsMEIsU0FBQSxDQUFBazBCLE1BQUE7TUFBQTtNQUFBLE9BQUtuMkIsUUFBQSxDQUFTcUgsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ2hEeHFCLFlBQUEsRUFBYyxTQUFBbTJCLGVBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUFwMEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBb3lCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKN0wsSUFBQSxDQUFJNkwsTUFBQSxJQUFBcjBCLFNBQUEsQ0FBQXEwQixNQUFBO01BQUE7TUFBQSxPQUFLcjJCLFlBQUEsQ0FBYW9ILE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUN4RHJxQixVQUFBLEVBQVksU0FBQW0yQixhQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBdjBCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQXV5QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSmhNLElBQUEsQ0FBSWdNLE1BQUEsSUFBQXgwQixTQUFBLENBQUF3MEIsTUFBQTtNQUFBO01BQUEsT0FBS3IyQixVQUFBLENBQVdpSCxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDcERwcUIsS0FBQSxFQUFPLFNBQUFxMkIsUUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQTEwQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUEweUIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUpuTSxJQUFBLENBQUltTSxNQUFBLElBQUEzMEIsU0FBQSxDQUFBMjBCLE1BQUE7TUFBQTtNQUFBLE9BQUt2MkIsS0FBQSxDQUFNZ0gsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQzFDbnFCLE1BQUEsRUFBUSxTQUFBdTJCLFNBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUE3MEIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBNnlCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKdE0sSUFBQSxDQUFJc00sTUFBQSxJQUFBOTBCLFNBQUEsQ0FBQTgwQixNQUFBO01BQUE7TUFBQSxPQUFLejJCLE1BQUEsQ0FBTytHLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUM1Q2xxQixXQUFBLEVBQWEsU0FBQXkyQixjQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBaDFCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQWd6QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnpNLElBQUEsQ0FBSXlNLE1BQUEsSUFBQWoxQixTQUFBLENBQUFpMUIsTUFBQTtNQUFBO01BQUEsT0FBSzMyQixXQUFBLENBQVk4RyxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDdERqcUIsVUFBQSxFQUFZLFNBQUEyMkIsYUFBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQW4xQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFtekIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUo1TSxJQUFBLENBQUk0TSxNQUFBLElBQUFwMUIsU0FBQSxDQUFBbzFCLE1BQUE7TUFBQTtNQUFBLE9BQUs3MkIsVUFBQSxDQUFXNkcsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDO0lBQ3BEaHFCLFdBQUEsRUFBYSxTQUFBNjJCLGNBQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF0MUIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBc3pCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKL00sSUFBQSxDQUFJK00sTUFBQSxJQUFBdjFCLFNBQUEsQ0FBQXUxQixNQUFBO01BQUE7TUFBQSxPQUFLLzJCLFdBQUEsQ0FBWTRHLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUN0RHpXLElBQUEsRUFBTSxTQUFBeWpCLE1BQUE7TUFBQSxTQUFBQyxNQUFBLEdBQUF6MUIsU0FBQSxDQUFBQyxNQUFBLEVBQUl1b0IsSUFBQSxHQUFJLElBQUF4bUIsS0FBQSxDQUFBeXpCLE1BQUEsR0FBQUMsTUFBQSxNQUFBQSxNQUFBLEdBQUFELE1BQUEsRUFBQUMsTUFBQTtRQUFKbE4sSUFBQSxDQUFJa04sTUFBQSxJQUFBMTFCLFNBQUEsQ0FBQTAxQixNQUFBO01BQUE7TUFBQSxPQUFLMzZCLE9BQUEsQ0FBUXFLLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUMzQy9wQixrQkFBQSxFQUFvQixTQUFBazNCLHFCQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBNTFCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQTR6QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnJOLElBQUEsQ0FBSXFOLE1BQUEsSUFBQTcxQixTQUFBLENBQUE2MUIsTUFBQTtNQUFBO01BQUEsT0FBS3AzQixrQkFBQSxDQUFtQjJHLE1BQUEsRUFBUSxHQUFHb2pCLElBQUk7SUFBQztJQUNwRTlwQixTQUFBLEVBQVcsU0FBQW8zQixZQUFBO01BQUEsU0FBQUMsTUFBQSxHQUFBLzFCLFNBQUEsQ0FBQUMsTUFBQSxFQUFJdW9CLElBQUEsR0FBSSxJQUFBeG1CLEtBQUEsQ0FBQSt6QixNQUFBLEdBQUFDLE1BQUEsTUFBQUEsTUFBQSxHQUFBRCxNQUFBLEVBQUFDLE1BQUE7UUFBSnhOLElBQUEsQ0FBSXdOLE1BQUEsSUFBQWgyQixTQUFBLENBQUFnMkIsTUFBQTtNQUFBO01BQUEsT0FBS3QzQixTQUFBLENBQVUwRyxNQUFBLEVBQVEsR0FBR29qQixJQUFJO0lBQUM7SUFDbER2cUIsOEJBQUEsRUFBZ0MsU0FBQWc0QixpQ0FBQTtNQUFBLFNBQUFDLE1BQUEsR0FBQWwyQixTQUFBLENBQUFDLE1BQUEsRUFBSXVvQixJQUFBLEdBQUksSUFBQXhtQixLQUFBLENBQUFrMEIsTUFBQSxHQUFBQyxNQUFBLE1BQUFBLE1BQUEsR0FBQUQsTUFBQSxFQUFBQyxNQUFBO1FBQUozTixJQUFBLENBQUkyTixNQUFBLElBQUFuMkIsU0FBQSxDQUFBbTJCLE1BQUE7TUFBQTtNQUFBLE9BQ3RDbDRCLDhCQUFBLENBQStCbUgsTUFBQSxFQUFRLEdBQUdvakIsSUFBSTtJQUFDOztFQUduRCxPQUFPcGpCLE1BQUE7QUFDVCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9