System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["immer","10.1.3"]]);
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

// .beyond/uimport/immer.10.1.3.js
var immer_10_1_3_exports = {};
__export(immer_10_1_3_exports, {
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
module.exports = __toCommonJS(immer_10_1_3_exports);

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
    Object.defineProperties(obj, {
      set: {
        value: dontMutateFrozenCollections
      },
      add: {
        value: dontMutateFrozenCollections
      },
      clear: {
        value: dontMutateFrozenCollections
      },
      delete: {
        value: dontMutateFrozenCollections
      }
    });
  }
  Object.freeze(obj);
  if (deep) Object.values(obj).forEach(value => freeze(value, true));
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
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop))) maybeFreeze(rootScope, childValue);
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
var produceWithPatches = /* @__PURE__ */immer.produceWithPatches.bind(immer);
var setAutoFreeze = /* @__PURE__ */immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = /* @__PURE__ */immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */immer.finishDraft.bind(immer);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9pbW1lci4xMC4xLjMuanMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL3V0aWxzL2Vudi50cyIsIi4uL25vZGVfbW9kdWxlcy9pbW1lci9zcmMvdXRpbHMvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2ltbWVyL3NyYy91dGlscy9jb21tb24udHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL3V0aWxzL3BsdWdpbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvc2NvcGUudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvZmluYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvcHJveHkudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL2NvcmUvaW1tZXJDbGFzcy50cyIsIi4uL25vZGVfbW9kdWxlcy9pbW1lci9zcmMvY29yZS9jdXJyZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2ltbWVyL3NyYy9wbHVnaW5zL3BhdGNoZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvaW1tZXIvc3JjL3BsdWdpbnMvbWFwc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2ltbWVyL3NyYy9pbW1lci50cyJdLCJuYW1lcyI6WyJpbW1lcl8xMF8xXzNfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSW1tZXIiLCJJbW1lcjIiLCJhcHBseVBhdGNoZXMiLCJjYXN0RHJhZnQiLCJjYXN0SW1tdXRhYmxlIiwiY3JlYXRlRHJhZnQiLCJjdXJyZW50IiwiZW5hYmxlTWFwU2V0IiwiZW5hYmxlUGF0Y2hlcyIsImZpbmlzaERyYWZ0IiwiZnJlZXplIiwiaW1tZXJhYmxlIiwiRFJBRlRBQkxFIiwiaXNEcmFmdCIsImlzRHJhZnRhYmxlIiwibm90aGluZyIsIk5PVEhJTkciLCJvcmlnaW5hbCIsInByb2R1Y2UiLCJwcm9kdWNlV2l0aFBhdGNoZXMiLCJzZXRBdXRvRnJlZXplIiwic2V0VXNlU3RyaWN0U2hhbGxvd0NvcHkiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiU3ltYm9sIiwiZm9yIiwiRFJBRlRfU1RBVEUiLCJlcnJvcnMiLCJwbHVnaW4iLCJ0aGluZyIsImRhdGEiLCJkaWUiLCJlcnJvciIsImFyZ3MiLCJlIiwibXNnIiwiYXBwbHkiLCJFcnJvciIsImdldFByb3RvdHlwZU9mIiwiT2JqZWN0IiwidmFsdWUiLCJpc1BsYWluT2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiY29uc3RydWN0b3IiLCJpc01hcCIsImlzU2V0Iiwib2JqZWN0Q3RvclN0cmluZyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwicHJvdG8iLCJDdG9yIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiRnVuY3Rpb24iLCJiYXNlXyIsImVhY2giLCJvYmoiLCJpdGVyIiwiZ2V0QXJjaHR5cGUiLCJSZWZsZWN0Iiwib3duS2V5cyIsImZvckVhY2giLCJrZXkiLCJlbnRyeSIsImluZGV4Iiwic3RhdGUiLCJ0eXBlXyIsImhhcyIsInByb3AiLCJnZXQiLCJzZXQiLCJwcm9wT3JPbGRWYWx1ZSIsInQiLCJhZGQiLCJpcyIsIngiLCJ5IiwidGFyZ2V0IiwiTWFwIiwiU2V0IiwibGF0ZXN0IiwiY29weV8iLCJzaGFsbG93Q29weSIsImJhc2UiLCJzdHJpY3QiLCJzbGljZSIsImlzUGxhaW4iLCJkZXNjcmlwdG9ycyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJrZXlzIiwiaSIsImxlbmd0aCIsImRlc2MiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJjcmVhdGUiLCJhc3NpZ24iLCJkZWVwIiwiaXNGcm96ZW4iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZG9udE11dGF0ZUZyb3plbkNvbGxlY3Rpb25zIiwiY2xlYXIiLCJkZWxldGUiLCJ2YWx1ZXMiLCJwbHVnaW5zIiwiZ2V0UGx1Z2luIiwicGx1Z2luS2V5IiwibG9hZFBsdWdpbiIsImltcGxlbWVudGF0aW9uIiwiY3VycmVudFNjb3BlIiwiZ2V0Q3VycmVudFNjb3BlIiwiY3JlYXRlU2NvcGUiLCJwYXJlbnRfIiwiaW1tZXJfIiwiZHJhZnRzXyIsImNhbkF1dG9GcmVlemVfIiwidW5maW5hbGl6ZWREcmFmdHNfIiwidXNlUGF0Y2hlc0luU2NvcGUiLCJzY29wZSIsInBhdGNoTGlzdGVuZXIiLCJwYXRjaGVzXyIsImludmVyc2VQYXRjaGVzXyIsInBhdGNoTGlzdGVuZXJfIiwicmV2b2tlU2NvcGUiLCJsZWF2ZVNjb3BlIiwicmV2b2tlRHJhZnQiLCJlbnRlclNjb3BlIiwiaW1tZXIyIiwiZHJhZnQiLCJyZXZva2VfIiwicmV2b2tlZF8iLCJwcm9jZXNzUmVzdWx0IiwicmVzdWx0IiwiYmFzZURyYWZ0IiwiaXNSZXBsYWNlZCIsIm1vZGlmaWVkXyIsImZpbmFsaXplIiwibWF5YmVGcmVlemUiLCJnZW5lcmF0ZVJlcGxhY2VtZW50UGF0Y2hlc18iLCJyb290U2NvcGUiLCJwYXRoIiwiY2hpbGRWYWx1ZSIsImZpbmFsaXplUHJvcGVydHkiLCJzY29wZV8iLCJmaW5hbGl6ZWRfIiwicmVzdWx0RWFjaCIsImlzU2V0MiIsImdlbmVyYXRlUGF0Y2hlc18iLCJwYXJlbnRTdGF0ZSIsInRhcmdldE9iamVjdCIsInJvb3RQYXRoIiwidGFyZ2V0SXNTZXQiLCJhc3NpZ25lZF8iLCJjb25jYXQiLCJyZXMiLCJhdXRvRnJlZXplXyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY3JlYXRlUHJveHlQcm94eSIsInBhcmVudCIsImRyYWZ0XyIsImlzTWFudWFsXyIsInRyYXBzIiwib2JqZWN0VHJhcHMiLCJhcnJheVRyYXBzIiwicmV2b2tlIiwicHJveHkiLCJQcm94eSIsInJldm9jYWJsZSIsInNvdXJjZSIsInJlYWRQcm9wRnJvbVByb3RvIiwicGVlayIsInByZXBhcmVDb3B5IiwiY3JlYXRlUHJveHkiLCJnZXREZXNjcmlwdG9yRnJvbVByb3RvIiwiY3VycmVudDIiLCJjdXJyZW50U3RhdGUiLCJtYXJrQ2hhbmdlZCIsIk51bWJlciIsImlzTmFOIiwiZGVsZXRlUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJvd25lciIsImRlZmluZVByb3BlcnR5Iiwic2V0UHJvdG90eXBlT2YiLCJmbiIsImFyZ3VtZW50cyIsInBhcnNlSW50IiwidXNlU3RyaWN0U2hhbGxvd0NvcHlfIiwiY29uZmlnIiwicmVjaXBlIiwiZGVmYXVsdEJhc2UiLCJzZWxmIiwiY3VycmllZFByb2R1Y2UiLCJiYXNlMiIsImhhc0Vycm9yIiwicCIsImlwIiwicGF0Y2hlcyIsImludmVyc2VQYXRjaGVzIiwiYXV0b0ZyZWV6ZSIsInVzZVN0cmljdFNoYWxsb3dDb3B5IiwicGF0Y2giLCJvcCIsImFwcGx5UGF0Y2hlc0ltcGwiLCJhcHBseVBhdGNoZXNfIiwicHJveHlNYXBfIiwicHJveHlTZXRfIiwicHVzaCIsImN1cnJlbnRJbXBsIiwiY29weSIsImVycm9yT2Zmc2V0IiwiUkVQTEFDRSIsIkFERCIsIlJFTU9WRSIsImJhc2VQYXRoIiwiZ2VuZXJhdGVQYXRjaGVzRnJvbUFzc2lnbmVkIiwiZ2VuZXJhdGVBcnJheVBhdGNoZXMiLCJnZW5lcmF0ZVNldFBhdGNoZXMiLCJjbG9uZVBhdGNoVmFsdWVJZk5lZWRlZCIsImFzc2lnbmVkVmFsdWUiLCJvcmlnVmFsdWUiLCJ1bnNoaWZ0IiwiYmFzZVZhbHVlIiwicmVwbGFjZW1lbnQiLCJwYXJlbnRUeXBlIiwiam9pbiIsInR5cGUiLCJkZWVwQ2xvbmVQYXRjaFZhbHVlIiwic3BsaWNlIiwibWFwIiwiZnJvbSIsImVudHJpZXMiLCJrIiwidiIsImNsb25lZCIsIkRyYWZ0TWFwIiwic2l6ZSIsImFzc2VydFVucmV2b2tlZCIsInByZXBhcmVNYXBDb3B5IiwiY2IiLCJ0aGlzQXJnIiwiX3ZhbHVlIiwiX21hcCIsIml0ZXJhdG9yIiwibmV4dCIsInIiLCJkb25lIiwiRHJhZnRTZXQiLCJwcmVwYXJlU2V0Q29weSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbW1lciIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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MU8sYUFBQSxHQUFnQyxlQUFBME8sS0FBQSxDQUFNMU8sYUFBQSxDQUFjMk8sSUFBQSxDQUFLRCxLQUFLO0FBT3BFLElBQU16Tyx1QkFBQSxHQUEwQyxlQUFBeU8sS0FBQSxDQUFNek8sdUJBQUEsQ0FBd0IwTyxJQUFBLENBQ3BGRCxLQUNEO0FBT08sSUFBTTVQLFlBQUEsR0FBK0IsZUFBQTRQLEtBQUEsQ0FBTTVQLFlBQUEsQ0FBYTZQLElBQUEsQ0FBS0QsS0FBSztBQU1sRSxJQUFNelAsV0FBQSxHQUE4QixlQUFBeVAsS0FBQSxDQUFNelAsV0FBQSxDQUFZMFAsSUFBQSxDQUFLRCxLQUFLO0FBVWhFLElBQU1yUCxXQUFBLEdBQThCLGVBQUFxUCxLQUFBLENBQU1yUCxXQUFBLENBQVlzUCxJQUFBLENBQUtELEtBQUs7QUFRaEUsU0FBUzNQLFVBQWFzQyxLQUFBLEVBQW9CO0VBQ2hELE9BQU9BLEtBQUE7QUFDUjtBQU9PLFNBQVNyQyxjQUFpQnFDLEtBQUEsRUFBd0I7RUFDeEQsT0FBT0EsS0FBQTtBQUNSIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL2NsaWVudC9zcmMvb3V0In0=