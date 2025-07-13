System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["immer","10.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/immer.10.1.1.js
var immer_10_1_1_exports = {};
__export(immer_10_1_1_exports, {
  Immer: () => Immer2,
  applyPatches: () => applyPatches,
  castDraft: () => castDraft,
  castImmutable: () => castImmutable,
  createDraft: () => createDraft,
  current: () => current,
  enableMapSet: () => enableMapSet,
  enablePatches: () => enablePatches,
  finishDraft: () => finishDraft,
  freeze: () => freeze,
  immerable: () => DRAFTABLE,
  isDraft: () => isDraft,
  isDraftable: () => isDraftable,
  nothing: () => NOTHING,
  original: () => original,
  produce: () => produce,
  produceWithPatches: () => produceWithPatches,
  setAutoFreeze: () => setAutoFreeze,
  setUseStrictShallowCopy: () => setUseStrictShallowCopy
});
module.exports = __toCommonJS(immer_10_1_1_exports);

// node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = true ? [function (plugin) {
  return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
}, function (thing) {
  return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
}, "This object has been frozen and should not be mutated", function (data) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
}, "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", "Immer forbids circular references", "The first or second argument to `produce` must be a function", "The third argument to `produce` must be a function or undefined", "First argument to `createDraft` must be a plain object, an array, or an immerable object", "First argument to `finishDraft` must be a draft returned by `createDraft`", function (thing) {
  return `'current' expects a draft, got: ${thing}`;
}, "Object.defineProperty() cannot be used on an Immer draft", "Object.setPrototypeOf() cannot be used on an Immer draft", "Immer only supports deleting array indices", "Immer only supports setting array indices and the 'length' property", function (thing) {
  return `'original' expects a draft, got: ${thing}`;
}] : [];
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value) return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object") return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object) return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value)) die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Reflect.ownKeys(obj).forEach(key => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2) thing.set(propOrOldValue, value);else if (t === 3) {
    thing.add(value);
  } else thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base)) return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set) descriptors[key] = {
        configurable: true,
        writable: true,
        enumerable: desc.enumerable,
        value: base[key]
      };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return {
        ...base
      };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep) Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1) state.revoke_();else state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_) maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(value, (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path));
    return value;
  }
  if (state.scope_ !== rootScope) return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(resultEach, (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2));
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (childValue === targetObject) die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop)) maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    scope_: parent ? parent.scope_ : getCurrentScope(),
    modified_: false,
    finalized_: false,
    assigned_: {},
    parent_: parent,
    base_: base,
    draft_: null,
    copy_: null,
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const {
    revoke,
    proxy
  } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE) return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && (value !== void 0 || prop in state.copy_) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc) return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function (state, prop) {
  if (isNaN(parseInt(prop))) die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function (state, prop, value) {
  if (prop !== "length" && isNaN(parseInt(prop))) die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source)) return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc) return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, draft => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function") die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError) revokeScope(scope);else leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0) result = base;
        if (result === NOTHING) result = void 0;
        if (this.autoFreeze_) freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, draft => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean") this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base)) die(8);
    if (isDraft(base)) base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_) die(9);
    const {
      scope_: scope
    } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(base, draft => applyPatchesImpl(draft, patches));
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current(value) {
  if (!isDraft(value)) die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value)) return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_) return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push('Sets cannot have "replace" patches.', function (op) {
      return "Unsupported patch operation: " + op;
    }, function (path) {
      return "Cannot apply patch, path doesn't resolve: " + path;
    }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0:
      case 2:
        return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
      case 1:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3:
        return generateSetPatches(state, basePath, patches, inversePatches);
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      assigned_
    } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const {
      base_,
      copy_
    } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE) return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? {
        op,
        path
      } : {
        op,
        path,
        value
      });
      inversePatches.push(op === ADD ? {
        op: REMOVE,
        path
      } : op === REMOVE ? {
        op: ADD,
        path,
        value: clonePatchValueIfNeeded(origValue)
      } : {
        op: REPLACE,
        path,
        value: clonePatchValueIfNeeded(origValue)
      });
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let {
      base_,
      copy_
    } = state;
    let i = 0;
    base_.forEach(value => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach(value => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach(patch => {
      const {
        path,
        op
      } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 || parentType === 1) && (p === "__proto__" || p === "constructor")) die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype") die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object") die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2:
              return base.set(key, value);
            case 3:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2:
              return base.set(key, value);
            case 3:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1:
              return base.splice(key, 1);
            case 2:
              return base.delete(key);
            case 3:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj)) return obj;
    if (Array.isArray(obj)) return obj.map(deepClonePatchValue);
    if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)]));
    if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj) cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */new Map();
        each(state.base_, key => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done) return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value)) return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : false);
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */new Set();
      state.base_.forEach(value => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_) die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", {
    proxyMap_,
    proxySet_
  });
}
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(immer);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9pbW1lci4xMC4xLjEuanMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL3V0aWxzL2Vudi50cyIsIi4uL25vZGVfbW9kdWxlcy9pbW1lci9zcmMvdXRpbHMvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2ltbWVyL3NyYy91dGlscy9jb21tb24udHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL3V0aWxzL3BsdWdpbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvc2NvcGUudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvZmluYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvcHJveHkudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvaW1tZXJDbGFzcy50cyIsIi4uL25vZGVfbW9kdWxlcy9pbW1lci9zcmMvY29yZS9jdXJyZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2ltbWVyL3NyYy9wbHVnaW5zL3BhdGNoZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL3BsdWdpbnMvbWFwc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2ltbWVyL3NyYy9pbW1lci50cyJdLCJuYW1lcyI6WyJpbW1lcl8xMF8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSW1tZXIiLCJJbW1lcjIiLCJhcHBseVBhdGNoZXMiLCJjYXN0RHJhZnQiLCJjYXN0SW1tdXRhYmxlIiwiY3JlYXRlRHJhZnQiLCJjdXJyZW50IiwiZW5hYmxlTWFwU2V0IiwiZW5hYmxlUGF0Y2hlcyIsImZpbmlzaERyYWZ0IiwiZnJlZXplIiwiaW1tZXJhYmxlIiwiRFJBRlRBQkxFIiwiaXNEcmFmdCIsImlzRHJhZnRhYmxlIiwibm90aGluZyIsIk5PVEhJTkciLCJvcmlnaW5hbCIsInByb2R1Y2UiLCJwcm9kdWNlV2l0aFBhdGNoZXMiLCJzZXRBdXRvRnJlZXplIiwic2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiU3ltYm9sIiwiZm9yIiwiRFJBRlRfU1RBVEUiLCJlcnJvcnMiLCJwbHVnaW4iLCJ0aGluZyIsImRhdGEiLCJkaWUiLCJlcnJvciIsImFyZ3MiLCJlIiwibXNnIiwiYXBwbHkiLCJFcnJvciIsImdldFByb3RvdHlwZU9mIiwiT2JqZWN0IiwidmFsdWUiLCJpc1BsYWluT2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc3RydWN0b3IiLCJpc01hcCIsImlzU2V0Iiwib2JqZWN0Q3RvclN0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwicHJvdG8iLCJDdG9yIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiRnVuY3Rpb24iLCJiYXNlXyIsImVhY2giLCJvYmoiLCJpdGVyIiwiZ2V0QXJjaHR5cGUiLCJSZWZsZWN0Iiwib3duS2V5cyIsImZvckVhY2giLCJrZXkiLCJlbnRyeSIsImluZGV4Iiwic3RhdGUiLCJ0eXBlXyIsImhhcyIsInByb3AiLCJnZXQiLCJzZXQiLCJwcm9wT3JPbGRWYWx1ZSIsInQiLCJhZGQiLCJpcyIsIngiLCJ5IiwidGFyZ2V0IiwiTWFwIiwiU2V0IiwibGF0ZXN0IiwiY29weV8iLCJzaGFsbG93Q29weSIsImJhc2UiLCJzdHJpY3QiLCJzbGljZSIsImlzUGxhaW4iLCJkZXNjcmlwdG9ycyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJrZXlzIiwiaSIsImxlbmd0aCIsImRlc2MiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJjcmVhdGUiLCJhc3NpZ24iLCJkZWVwIiwiaXNGcm96ZW4iLCJjbGVhciIsImRlbGV0ZSIsImRvbnRNdXRhdGVGcm96ZW5Db2xsZWN0aW9ucyIsImVudHJpZXMiLCJwbHVnaW5zIiwiZ2V0UGx1Z2luIiwicGx1Z2luS2V5IiwibG9hZFBsdWdpbiIsImltcGxlbWVudGF0aW9uIiwiY3VycmVudFNjb3BlIiwiZ2V0Q3VycmVudFNjb3BlIiwiY3JlYXRlU2NvcGUiLCJwYXJlbnRfIiwiaW1tZXJfIiwiZHJhZnRzXyIsImNhbkF1dG9GcmVlemVfIiwidW5maW5hbGl6ZWREcmFmdHNfIiwidXNlUGF0Y2hlc0luU2NvcGUiLCJzY29wZSIsInBhdGNoTGlzdGVuZXIiLCJwYXRjaGVzXyIsImludmVyc2VQYXRjaGVzXyIsInBhdGNoTGlzdGVuZXJfIiwicmV2b2tlU2NvcGUiLCJsZWF2ZVNjb3BlIiwicmV2b2tlRHJhZnQiLCJlbnRlclNjb3BlIiwiaW1tZXIyIiwiZHJhZnQiLCJyZXZva2VfIiwicmV2b2tlZF8iLCJwcm9jZXNzUmVzdWx0IiwicmVzdWx0IiwiYmFzZURyYWZ0IiwiaXNSZXBsYWNlZCIsIm1vZGlmaWVkXyIsImZpbmFsaXplIiwibWF5YmVGcmVlemUiLCJnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18iLCJyb290U2NvcGUiLCJwYXRoIiwiY2hpbGRWYWx1ZSIsImZpbmFsaXplUHJvcGVydHkiLCJzY29wZV8iLCJmaW5hbGl6ZWRfIiwicmVzdWx0RWFjaCIsImlzU2V0MiIsImdlbmVyYXRlUGF0Y2hlc18iLCJwYXJlbnRTdGF0ZSIsInRhcmdldE9iamVjdCIsInJvb3RQYXRoIiwidGFyZ2V0SXNTZXQiLCJhc3NpZ25lZF8iLCJjb25jYXQiLCJyZXMiLCJhdXRvRnJlZXplXyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY3JlYXRlUHJveHlQcm94eSIsInBhcmVudCIsImRyYWZ0XyIsImlzTWFudWFsXyIsInRyYXBzIiwib2JqZWN0VHJhcHMiLCJhcnJheVRyYXBzIiwicmV2b2tlIiwicHJveHkiLCJQcm94eSIsInJldm9jYWJsZSIsInNvdXJjZSIsInJlYWRQcm9wRnJvbVByb3RvIiwicGVlayIsInByZXBhcmVDb3B5IiwiY3JlYXRlUHJveHkiLCJnZXREZXNjcmlwdG9yRnJvbVByb3RvIiwiY3VycmVudDIiLCJjdXJyZW50U3RhdGUiLCJtYXJrQ2hhbmdlZCIsIk51bWJlciIsImlzTmFOIiwiZGVsZXRlUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJvd25lciIsImRlZmluZVByb3BlcnR5Iiwic2V0UHJvdG90eXBlT2YiLCJmbiIsImFyZ3VtZW50cyIsInBhcnNlSW50IiwidXNlU3RyaWN0U2hhbGxvd0NvcHlfIiwiY29uZmlnIiwicmVjaXBlIiwiZGVmYXVsdEJhc2UiLCJzZWxmIiwiY3VycmllZFByb2R1Y2UiLCJiYXNlMiIsImhhc0Vycm9yIiwicCIsImlwIiwicGF0Y2hlcyIsImludmVyc2VQYXRjaGVzIiwiYXV0b0ZyZWV6ZSIsInVzZVN0cmljdFNoYWxsb3dDb3B5IiwicGF0Y2giLCJvcCIsImFwcGx5UGF0Y2hlc0ltcGwiLCJhcHBseVBhdGNoZXNfIiwicHJveHlNYXBfIiwicHJveHlTZXRfIiwicHVzaCIsImN1cnJlbnRJbXBsIiwiY29weSIsImVycm9yT2Zmc2V0IiwiUkVQTEFDRSIsIkFERCIsIlJFTU9WRSIsImJhc2VQYXRoIiwiZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkIiwiZ2VuZXJhdGVBcnJheVBhdGNoZXMiLCJnZW5lcmF0ZVNldFBhdGNoZXMiLCJjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZCIsImFzc2lnbmVkVmFsdWUiLCJvcmlnVmFsdWUiLCJ1bnNoaWZ0IiwiYmFzZVZhbHVlIiwicmVwbGFjZW1lbnQiLCJwYXJlbnRUeXBlIiwiam9pbiIsInR5cGUiLCJkZWVwQ2xvbmVQYXRjaFZhbHVlIiwic3BsaWNlIiwibWFwIiwiZnJvbSIsImsiLCJ2IiwiY2xvbmVkIiwiRHJhZnRNYXAiLCJzaXplIiwiYXNzZXJ0VW5yZXZva2VkIiwicHJlcGFyZU1hcENvcHkiLCJjYiIsInRoaXNBcmciLCJfdmFsdWUiLCJfbWFwIiwidmFsdWVzIiwiaXRlcmF0b3IiLCJuZXh0IiwiciIsImRvbmUiLCJEcmFmdFNldCIsInByZXBhcmVTZXRDb3B5IiwiSlNPTiIsInN0cmluZ2lmeSIsImltbWVyIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU1nQixLQUFBLEdBQVEsbUJBQUlGLEdBQUEsQ0FBSTtNQUN0QmQsS0FBQSxDQUFNWCxLQUFBLENBQU1PLE9BQUEsQ0FBUXRCLEtBQUEsSUFBUztRQUM1QixJQUFJM0IsV0FBQSxDQUFZMkIsS0FBSyxHQUFHO1VBQ3ZCLE1BQU15RixLQUFBLEdBQVE0QyxXQUFBLENBQVlySSxLQUFBLEVBQU8wQixLQUFLO1VBQ3RDQSxLQUFBLENBQU1pRCxPQUFBLENBQVE1QyxHQUFBLENBQUkvQixLQUFBLEVBQU95RixLQUFLO1VBQzlCL0QsS0FBQSxDQUFNZ0IsS0FBQSxDQUFPUixHQUFBLENBQUl1RCxLQUFLO1FBQ3ZCLE9BQU87VUFDTi9ELEtBQUEsQ0FBTWdCLEtBQUEsQ0FBT1IsR0FBQSxDQUFJbEMsS0FBSztRQUN2QjtNQUNELENBQUM7SUFDRjtFQUNEO0VBRUEsU0FBU3FNLGdCQUFnQjNLLEtBQUEsRUFBK0M7SUFDdkUsSUFBSUEsS0FBQSxDQUFNaUUsUUFBQSxFQUFVcEcsR0FBQSxDQUFJLEdBQUcyTixJQUFBLENBQUtDLFNBQUEsQ0FBVTFLLE1BQUEsQ0FBT2YsS0FBSyxDQUFDLENBQUM7RUFDekQ7RUFFQTBDLFVBQUEsQ0FBVyxVQUFVO0lBQUNrRyxTQUFBO0lBQVdDO0VBQVMsQ0FBQztBQUM1QztBQ3JSQSxJQUFNNkMsS0FBQSxHQUFRLElBQUk1UCxNQUFBLENBQU07QUFxQmpCLElBQU1pQixPQUFBLEdBQW9CMk8sS0FBQSxDQUFNM08sT0FBQTtBQU1oQyxJQUFNQyxrQkFBQSxHQUEwQzBPLEtBQUEsQ0FBTTFPLGtCQUFBLENBQW1CMk8sSUFBQSxDQUMvRUQsS0FDRDtBQU9PLElBQU16TyxhQUFBLEdBQWdCeU8sS0FBQSxDQUFNek8sYUFBQSxDQUFjME8sSUFBQSxDQUFLRCxLQUFLO0FBT3BELElBQU14Tyx1QkFBQSxHQUEwQndPLEtBQUEsQ0FBTXhPLHVCQUFBLENBQXdCeU8sSUFBQSxDQUFLRCxLQUFLO0FBT3hFLElBQU0zUCxZQUFBLEdBQWUyUCxLQUFBLENBQU0zUCxZQUFBLENBQWE0UCxJQUFBLENBQUtELEtBQUs7QUFNbEQsSUFBTXhQLFdBQUEsR0FBY3dQLEtBQUEsQ0FBTXhQLFdBQUEsQ0FBWXlQLElBQUEsQ0FBS0QsS0FBSztBQVVoRCxJQUFNcFAsV0FBQSxHQUFjb1AsS0FBQSxDQUFNcFAsV0FBQSxDQUFZcVAsSUFBQSxDQUFLRCxLQUFLO0FBUWhELFNBQVMxUCxVQUFhc0MsS0FBQSxFQUFvQjtFQUNoRCxPQUFPQSxLQUFBO0FBQ1I7QUFPTyxTQUFTckMsY0FBaUJxQyxLQUFBLEVBQXdCO0VBQ3hELE9BQU9BLEtBQUE7QUFDUiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=