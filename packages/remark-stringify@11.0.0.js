System.register(["zwitch@2.0.4","longest-streak@3.1.0","micromark-util-character@2.1.1","micromark-util-classify-character@2.0.1","unist-util-visit-parents@6.0.1/do-not-use-color","unist-util-visit-parents@6.0.1","decode-named-character-reference@1.1.0","micromark-util-decode-numeric-character-reference@2.0.2","micromark-util-decode-string@2.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["zwitch","2.0.4"],["mdast-util-to-markdown","2.1.2"],["longest-streak","3.1.0"],["micromark-util-character","2.1.1"],["micromark-util-classify-character","2.0.1"],["unist-util-is","6.0.0"],["unist-util-visit-parents","6.0.1"],["unist-util-visit","5.0.0"],["mdast-util-to-string","4.0.0"],["mdast-util-phrasing","4.1.0"],["decode-named-character-reference","1.1.0"],["micromark-util-decode-numeric-character-reference","2.0.2"],["micromark-util-decode-string","2.0.1"],["remark-stringify","11.0.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('zwitch@2.0.4', dep), dep => dependencies.set('longest-streak@3.1.0', dep), dep => dependencies.set('micromark-util-character@2.1.1', dep), dep => dependencies.set('micromark-util-classify-character@2.0.1', dep), dep => dependencies.set('unist-util-visit-parents@6.0.1/do-not-use-color', dep), dep => dependencies.set('unist-util-visit-parents@6.0.1', dep), dep => dependencies.set('decode-named-character-reference@1.1.0', dep), dep => dependencies.set('micromark-util-decode-numeric-character-reference@2.0.2', dep), dep => dependencies.set('micromark-util-decode-string@2.0.1', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all2) => {
  for (var name in all2) __defProp(target, name, {
    get: all2[name],
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

// .beyond/uimport/temp/remark-stringify.11.0.0.js
var remark_stringify_11_0_0_exports = {};
__export(remark_stringify_11_0_0_exports, {
  default: () => remark_stringify_11_0_0_default
});
module.exports = __toCommonJS(remark_stringify_11_0_0_exports);

// node_modules/mdast-util-to-markdown/lib/configure.js
var own = {}.hasOwnProperty;
function configure(base, extension) {
  let index = -1;
  let key;
  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      configure(base, extension.extensions[index]);
    }
  }
  for (key in extension) {
    if (own.call(extension, key)) {
      switch (key) {
        case "extensions":
          {
            break;
          }
        case "unsafe":
          {
            list(base[key], extension[key]);
            break;
          }
        case "join":
          {
            list(base[key], extension[key]);
            break;
          }
        case "handlers":
          {
            map(base[key], extension[key]);
            break;
          }
        default:
          {
            base.options[key] = extension[key];
          }
      }
    }
  }
  return base;
}
function list(left, right) {
  if (right) {
    left.push(...right);
  }
}
function map(left, right) {
  if (right) {
    Object.assign(left, right);
  }
}

// node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function blockquote(node2, _, state, info) {
  const exit = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(state.containerFlow(node2, tracker.current()), map2);
  exit();
  return value;
}
function map2(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list3, none) {
  if (typeof list3 === "string") {
    list3 = [list3];
  }
  if (!list3 || list3.length === 0) {
    return none;
  }
  let index = -1;
  while (++index < list3.length) {
    if (stack.includes(list3[index])) {
      return true;
    }
  }
  return false;
}

// node_modules/mdast-util-to-markdown/lib/handle/break.js
function hardBreak(_, _1, state, info) {
  let index = -1;
  while (++index < state.unsafe.length) {
    if (state.unsafe[index].character === "\n" && patternInScope(state.stack, state.unsafe[index])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}

// node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function formatCodeAsIndented(node2, state) {
  return Boolean(state.options.fences === false && node2.value && !node2.lang && /[^ \r\n]/.test(node2.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value));
}

// node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function checkFence(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/code.js
var import_longest_streak = require("longest-streak@3.1.0");
function code(node2, _, state, info) {
  const marker = checkFence(state);
  const raw = node2.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node2, state)) {
    const exit2 = state.enter("codeIndented");
    const value2 = state.indentLines(raw, map3);
    exit2();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max((0, import_longest_streak.longestStreak)(raw, marker) + 1, 3));
  const exit = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node2.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(state.safe(node2.lang, {
      before: value,
      after: " ",
      encode: ["`"],
      ...tracker.current()
    }));
    subexit();
  }
  if (node2.lang && node2.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(state.safe(node2.meta, {
      before: value,
      after: "\n",
      encode: ["`"],
      ...tracker.current()
    }));
    subexit();
  }
  value += tracker.move("\n");
  if (raw) {
    value += tracker.move(raw + "\n");
  }
  value += tracker.move(sequence);
  exit();
  return value;
}
function map3(line, _, blank) {
  return (blank ? "" : "    ") + line;
}

// node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function checkQuote(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/definition.js
function definition(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  }));
  value += tracker.move("]: ");
  subexit();
  if (!node2.url || /[\0- \u007F]/.test(node2.url)) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(state.safe(node2.url, {
      before: value,
      after: ">",
      ...tracker.current()
    }));
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(state.safe(node2.url, {
      before: value,
      after: node2.title ? " " : "\n",
      ...tracker.current()
    }));
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(state.safe(node2.title, {
      before: value,
      after: quote,
      ...tracker.current()
    }));
    value += tracker.move(quote);
    subexit();
  }
  exit();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function checkEmphasis(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function encodeCharacterReference(code2) {
  return "&#x" + code2.toString(16).toUpperCase() + ";";
}

// node_modules/mdast-util-to-markdown/lib/util/encode-info.js
var import_micromark_util_classify_character = require("micromark-util-classify-character@2.0.1");
function encodeInfo(outside, inside, marker) {
  const outsideKind = (0, import_micromark_util_classify_character.classifyCharacter)(outside);
  const insideKind = (0, import_micromark_util_classify_character.classifyCharacter)(inside);
  if (outsideKind === void 0) {
    return insideKind === void 0 ? marker === "_" ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : insideKind === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: true
    };
  }
  if (outsideKind === 1) {
    return insideKind === void 0 ? {
      inside: false,
      outside: false
    } : insideKind === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    };
  }
  return insideKind === void 0 ? {
    inside: false,
    outside: false
  } : insideKind === 1 ? {
    inside: true,
    outside: false
  } : {
    inside: false,
    outside: false
  };
}

// node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
emphasis.peek = emphasisPeek;
function emphasis(node2, _, state, info) {
  const marker = checkEmphasis(state);
  const exit = state.enter("emphasis");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker);
  let between2 = tracker.move(state.containerPhrasing(node2, {
    after: marker,
    before,
    ...tracker.current()
  }));
  const betweenHead = between2.charCodeAt(0);
  const open = encodeInfo(info.before.charCodeAt(info.before.length - 1), betweenHead, marker);
  if (open.inside) {
    between2 = encodeCharacterReference(betweenHead) + between2.slice(1);
  }
  const betweenTail = between2.charCodeAt(between2.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between2 = between2.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker);
  exit();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between2 + after;
}
function emphasisPeek(_, _1, state) {
  return state.options.emphasis || "*";
}

// node_modules/unist-util-visit/lib/index.js
var import_unist_util_visit_parents = require("unist-util-visit-parents@6.0.1");
var import_unist_util_visit_parents2 = require("unist-util-visit-parents@6.0.1");
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  (0, import_unist_util_visit_parents.visitParents)(tree, test, overload, reverse);
  function overload(node2, parents) {
    const parent = parents[parents.length - 1];
    const index = parent ? parent.children.indexOf(node2) : void 0;
    return visitor(node2, index, parent);
  }
}

// node_modules/mdast-util-to-string/lib/index.js
var emptyOptions = {};
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one(value, includeImageAlt, includeHtml);
}
function one(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index = -1;
  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}

// node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function formatHeadingAsSetext(node2, state) {
  let literalWithBreak = false;
  visit(node2, function (node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return import_unist_util_visit_parents2.EXIT;
    }
  });
  return Boolean((!node2.depth || node2.depth < 3) && toString(node2) && (state.options.setext || literalWithBreak));
}

// node_modules/mdast-util-to-markdown/lib/handle/heading.js
function heading(node2, _, state, info) {
  const rank = Math.max(Math.min(6, node2.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext(node2, state)) {
    const exit2 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node2, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit2();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(value2.length - (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1));
  }
  const sequence = "#".repeat(rank);
  const exit = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node2, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = encodeCharacterReference(value.charCodeAt(0)) + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/handle/html.js
html.peek = htmlPeek;
function html(node2) {
  return node2.value || "";
}
function htmlPeek() {
  return "<";
}

// node_modules/mdast-util-to-markdown/lib/handle/image.js
image.peek = imagePeek;
function image(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(state.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  }));
  value += tracker.move("](");
  subexit();
  if (!node2.url && node2.title || /[\0- \u007F]/.test(node2.url)) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(state.safe(node2.url, {
      before: value,
      after: ">",
      ...tracker.current()
    }));
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(state.safe(node2.url, {
      before: value,
      after: node2.title ? " " : ")",
      ...tracker.current()
    }));
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(state.safe(node2.title, {
      before: value,
      after: quote,
      ...tracker.current()
    }));
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit();
  return value;
}
function imagePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
imageReference.peek = imageReferencePeek;
function imageReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt = state.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}

// node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode.peek = inlineCodePeek;
function inlineCode(node2, _, state) {
  let value = node2.value || "";
  let sequence = "`";
  let index = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index < state.unsafe.length) {
    const pattern = state.unsafe[index];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak) continue;
    while (match = expression.exec(value)) {
      let position = match.index;
      if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) {
        position--;
      }
      value = value.slice(0, position) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function formatLinkAsAutolink(node2, state) {
  const raw = toString(node2);
  return Boolean(!state.options.resourceLink && node2.url && !node2.title && node2.children && node2.children.length === 1 && node2.children[0].type === "text" && (raw === node2.url || "mailto:" + raw === node2.url) && /^[a-z][a-z+.-]+:/i.test(node2.url) && !/[\0- <>\u007F]/.test(node2.url));
}

// node_modules/mdast-util-to-markdown/lib/handle/link.js
link.peek = linkPeek;
function link(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit;
  let subexit;
  if (formatLinkAsAutolink(node2, state)) {
    const stack = state.stack;
    state.stack = [];
    exit = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(state.containerPhrasing(node2, {
      before: value2,
      after: ">",
      ...tracker.current()
    }));
    value2 += tracker.move(">");
    exit();
    state.stack = stack;
    return value2;
  }
  exit = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(state.containerPhrasing(node2, {
    before: value,
    after: "](",
    ...tracker.current()
  }));
  value += tracker.move("](");
  subexit();
  if (!node2.url && node2.title || /[\0- \u007F]/.test(node2.url)) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(state.safe(node2.url, {
      before: value,
      after: ">",
      ...tracker.current()
    }));
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(state.safe(node2.url, {
      before: value,
      after: node2.title ? " " : ")",
      ...tracker.current()
    }));
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(state.safe(node2.title, {
      before: value,
      after: quote,
      ...tracker.current()
    }));
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit();
  return value;
}
function linkPeek(node2, _, state) {
  return formatLinkAsAutolink(node2, state) ? "<" : "[";
}

// node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
linkReference.peek = linkReferencePeek;
function linkReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text2 = state.containerPhrasing(node2, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text2 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit();
  if (type === "full" || !text2 || text2 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
  }
  if (bulletOther === bullet) {
    throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
  }
  return bulletOther;
}

// node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function checkRule(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/list.js
function list2(node2, parent, state, info) {
  const exit = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state);
  const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
  let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node2.ordered) {
    const firstListItem = node2.children ? node2.children[0] : void 0;
    if ((bullet === "*" || bullet === "-") && firstListItem && (!firstListItem.children || !firstListItem.children[0]) && state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0) {
      useDifferentMarker = true;
    }
    if (checkRule(state) === bullet && firstListItem) {
      let index = -1;
      while (++index < node2.children.length) {
        const item = node2.children[index];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node2, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit();
  return value;
}

// node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  }
  return style;
}

// node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem(node2, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit = state.enter("listItem");
  const value = state.indentLines(state.containerFlow(node2, tracker.current()), map4);
  exit();
  return value;
  function map4(line, index, blank) {
    if (index) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function paragraph(node2, _, state, info) {
  const exit = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node2, info);
  subexit();
  exit();
  return value;
}

// node_modules/unist-util-is/lib/index.js
var is = function (node2, test, index, parent, context) {
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
  return looksLikeANode(node2) ? check.call(context, node2, index, parent) : false;
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
  return castFactory(all2);
  function all2(node2) {
    const nodeAsRecord = node2;
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
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

// node_modules/mdast-util-phrasing/lib/index.js
var phrasing = convert(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);

// node_modules/mdast-util-to-markdown/lib/handle/root.js
function root(node2, _, state, info) {
  const hasPhrasing = node2.children.some(function (d) {
    return phrasing(d);
  });
  const container = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return container.call(state, node2, info);
}

// node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function checkStrong(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
  }
  return marker;
}

// node_modules/mdast-util-to-markdown/lib/handle/strong.js
strong.peek = strongPeek;
function strong(node2, _, state, info) {
  const marker = checkStrong(state);
  const exit = state.enter("strong");
  const tracker = state.createTracker(info);
  const before = tracker.move(marker + marker);
  let between2 = tracker.move(state.containerPhrasing(node2, {
    after: marker,
    before,
    ...tracker.current()
  }));
  const betweenHead = between2.charCodeAt(0);
  const open = encodeInfo(info.before.charCodeAt(info.before.length - 1), betweenHead, marker);
  if (open.inside) {
    between2 = encodeCharacterReference(betweenHead) + between2.slice(1);
  }
  const betweenTail = between2.charCodeAt(between2.length - 1);
  const close = encodeInfo(info.after.charCodeAt(0), betweenTail, marker);
  if (close.inside) {
    between2 = between2.slice(0, -1) + encodeCharacterReference(betweenTail);
  }
  const after = tracker.move(marker + marker);
  exit();
  state.attentionEncodeSurroundingInfo = {
    after: close.outside,
    before: open.outside
  };
  return before + between2 + after;
}
function strongPeek(_, _1, state) {
  return state.options.strong || "*";
}

// node_modules/mdast-util-to-markdown/lib/handle/text.js
function text(node2, _, state, info) {
  return state.safe(node2.value, info);
}

// node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
  }
  return repetition;
}

// node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function thematicBreak(_, _1, state) {
  const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}

// node_modules/mdast-util-to-markdown/lib/handle/index.js
var handle = {
  blockquote,
  break: hardBreak,
  code,
  definition,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link,
  linkReference,
  list: list2,
  listItem,
  paragraph,
  root,
  strong,
  text,
  thematicBreak
};

// node_modules/mdast-util-to-markdown/lib/join.js
var join = [joinDefaults];
function joinDefaults(left, right, parent, state) {
  if (right.type === "code" && formatCodeAsIndented(right, state) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, state))) {
    return false;
  }
  if ("spread" in parent && typeof parent.spread === "boolean") {
    if (left.type === "paragraph" && (left.type === right.type || right.type === "definition" || right.type === "heading" && formatHeadingAsSetext(right, state))) {
      return;
    }
    return parent.spread ? 1 : 0;
  }
}

// node_modules/mdast-util-to-markdown/lib/unsafe.js
var fullPhrasingSpans = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
var unsafe = [{
  character: "	",
  after: "[\\r\\n]",
  inConstruct: "phrasing"
}, {
  character: "	",
  before: "[\\r\\n]",
  inConstruct: "phrasing"
}, {
  character: "	",
  inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
}, {
  character: "\r",
  inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
}, {
  character: "\n",
  inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde", "codeFencedMetaGraveAccent", "codeFencedMetaTilde", "destinationLiteral", "headingAtx"]
}, {
  character: " ",
  after: "[\\r\\n]",
  inConstruct: "phrasing"
}, {
  character: " ",
  before: "[\\r\\n]",
  inConstruct: "phrasing"
}, {
  character: " ",
  inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
}, {
  character: "!",
  after: "\\[",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  character: '"',
  inConstruct: "titleQuote"
}, {
  atBreak: true,
  character: "#"
}, {
  character: "#",
  inConstruct: "headingAtx",
  after: "(?:[\r\n]|$)"
}, {
  character: "&",
  after: "[#A-Za-z]",
  inConstruct: "phrasing"
}, {
  character: "'",
  inConstruct: "titleApostrophe"
}, {
  character: "(",
  inConstruct: "destinationRaw"
}, {
  before: "\\]",
  character: "(",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  atBreak: true,
  before: "\\d+",
  character: ")"
}, {
  character: ")",
  inConstruct: "destinationRaw"
}, {
  atBreak: true,
  character: "*",
  after: "(?:[ 	\r\n*])"
}, {
  character: "*",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  atBreak: true,
  character: "+",
  after: "(?:[ 	\r\n])"
}, {
  atBreak: true,
  character: "-",
  after: "(?:[ 	\r\n-])"
}, {
  atBreak: true,
  before: "\\d+",
  character: ".",
  after: "(?:[ 	\r\n]|$)"
}, {
  atBreak: true,
  character: "<",
  after: "[!/?A-Za-z]"
}, {
  character: "<",
  after: "[!/?A-Za-z]",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  character: "<",
  inConstruct: "destinationLiteral"
}, {
  atBreak: true,
  character: "="
}, {
  atBreak: true,
  character: ">"
}, {
  character: ">",
  inConstruct: "destinationLiteral"
}, {
  atBreak: true,
  character: "["
}, {
  character: "[",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  character: "[",
  inConstruct: ["label", "reference"]
}, {
  character: "\\",
  after: "[\\r\\n]",
  inConstruct: "phrasing"
}, {
  character: "]",
  inConstruct: ["label", "reference"]
}, {
  atBreak: true,
  character: "_"
}, {
  character: "_",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  atBreak: true,
  character: "`"
}, {
  character: "`",
  inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
}, {
  character: "`",
  inConstruct: "phrasing",
  notInConstruct: fullPhrasingSpans
}, {
  atBreak: true,
  character: "~"
}];

// node_modules/mdast-util-to-markdown/lib/util/association.js
var import_micromark_util_decode_string = require("micromark-util-decode-string@2.0.1");
function association(node2) {
  if (node2.label || !node2.identifier) {
    return node2.label || "";
  }
  return (0, import_micromark_util_decode_string.decodeString)(node2.identifier);
}

// node_modules/mdast-util-to-markdown/lib/util/compile-pattern.js
function compilePattern(pattern) {
  if (!pattern._compiled) {
    const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
  }
  return pattern._compiled;
}

// node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function containerPhrasing(parent, state, info) {
  const indexStack = state.indexStack;
  const children = parent.children || [];
  const results = [];
  let index = -1;
  let before = info.before;
  let encodeAfter;
  indexStack.push(-1);
  let tracker = state.createTracker(info);
  while (++index < children.length) {
    const child = children[index];
    let after;
    indexStack[indexStack.length - 1] = index;
    if (index + 1 < children.length) {
      let handle2 = state.handle.handlers[children[index + 1].type];
      if (handle2 && handle2.peek) handle2 = handle2.peek;
      after = handle2 ? handle2(children[index + 1], parent, state, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else {
      after = info.after;
    }
    if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
      results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
      before = " ";
      tracker = state.createTracker(info);
      tracker.move(results.join(""));
    }
    let value = state.handle(child, parent, state, {
      ...tracker.current(),
      after,
      before
    });
    if (encodeAfter && encodeAfter === value.slice(0, 1)) {
      value = encodeCharacterReference(encodeAfter.charCodeAt(0)) + value.slice(1);
    }
    const encodingInfo = state.attentionEncodeSurroundingInfo;
    state.attentionEncodeSurroundingInfo = void 0;
    encodeAfter = void 0;
    if (encodingInfo) {
      if (results.length > 0 && encodingInfo.before && before === results[results.length - 1].slice(-1)) {
        results[results.length - 1] = results[results.length - 1].slice(0, -1) + encodeCharacterReference(before.charCodeAt(0));
      }
      if (encodingInfo.after) encodeAfter = after;
    }
    tracker.move(value);
    results.push(value);
    before = value.slice(-1);
  }
  indexStack.pop();
  return results.join("");
}

// node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, state, info) {
  const indexStack = state.indexStack;
  const children = parent.children || [];
  const tracker = state.createTracker(info);
  const results = [];
  let index = -1;
  indexStack.push(-1);
  while (++index < children.length) {
    const child = children[index];
    indexStack[indexStack.length - 1] = index;
    results.push(tracker.move(state.handle(child, parent, state, {
      before: "\n",
      after: "\n",
      ...tracker.current()
    })));
    if (child.type !== "list") {
      state.bulletLastUsed = void 0;
    }
    if (index < children.length - 1) {
      results.push(tracker.move(between(child, children[index + 1], parent, state)));
    }
  }
  indexStack.pop();
  return results.join("");
}
function between(left, right, parent, state) {
  let index = state.join.length;
  while (index--) {
    const result = state.join[index](left, right, parent, state);
    if (result === true || result === 1) {
      break;
    }
    if (typeof result === "number") {
      return "\n".repeat(1 + result);
    }
    if (result === false) {
      return "\n\n<!---->\n\n";
    }
  }
  return "\n\n";
}

// node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var eol = /\r?\n|\r/g;
function indentLines(value, map4) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while (match = eol.exec(value)) {
    one2(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one2(value.slice(start));
  return result.join("");
  function one2(value2) {
    result.push(map4(value2, line, !value2));
  }
}

// node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(state, input, config) {
  const value = (config.before || "") + (input || "") + (config.after || "");
  const positions = [];
  const result = [];
  const infos = {};
  let index = -1;
  while (++index < state.unsafe.length) {
    const pattern = state.unsafe[index];
    if (!patternInScope(state.stack, pattern)) {
      continue;
    }
    const expression = state.compilePattern(pattern);
    let match;
    while (match = expression.exec(value)) {
      const before = "before" in pattern || Boolean(pattern.atBreak);
      const after = "after" in pattern;
      const position = match.index + (before ? match[1].length : 0);
      if (positions.includes(position)) {
        if (infos[position].before && !before) {
          infos[position].before = false;
        }
        if (infos[position].after && !after) {
          infos[position].after = false;
        }
      } else {
        positions.push(position);
        infos[position] = {
          before,
          after
        };
      }
    }
  }
  positions.sort(numerical);
  let start = config.before ? config.before.length : 0;
  const end = value.length - (config.after ? config.after.length : 0);
  index = -1;
  while (++index < positions.length) {
    const position = positions[index];
    if (position < start || position >= end) {
      continue;
    }
    if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after || positions[index - 1] === position - 1 && infos[position].before && !infos[position - 1].before && !infos[position - 1].after) {
      continue;
    }
    if (start !== position) {
      result.push(escapeBackslashes(value.slice(start, position), "\\"));
    }
    start = position;
    if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) {
      result.push("\\");
    } else {
      result.push(encodeCharacterReference(value.charCodeAt(position)));
      start++;
    }
  }
  result.push(escapeBackslashes(value.slice(start, end), config.after));
  return result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  const expression = /\\(?=[!-/:-@[-`{-~])/g;
  const positions = [];
  const results = [];
  const whole = value + after;
  let index = -1;
  let start = 0;
  let match;
  while (match = expression.exec(whole)) {
    positions.push(match.index);
  }
  while (++index < positions.length) {
    if (start !== positions[index]) {
      results.push(value.slice(start, positions[index]));
    }
    results.push("\\");
    start = positions[index];
  }
  results.push(value.slice(start));
  return results.join("");
}

// node_modules/mdast-util-to-markdown/lib/util/track.js
function track(config) {
  const options = config || {};
  const now = options.now || {};
  let lineShift = options.lineShift || 0;
  let line = now.line || 1;
  let column = now.column || 1;
  return {
    move,
    current,
    shift
  };
  function current() {
    return {
      now: {
        line,
        column
      },
      lineShift
    };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(input) {
    const value = input || "";
    const chunks = value.split(/\r?\n|\r/g);
    const tail = chunks[chunks.length - 1];
    line += chunks.length - 1;
    column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
    return value;
  }
}

// node_modules/mdast-util-to-markdown/lib/index.js
var import_zwitch = require("zwitch@2.0.4");
function toMarkdown(tree, options) {
  const settings = options || {};
  const state = {
    associationId: association,
    containerPhrasing: containerPhrasingBound,
    containerFlow: containerFlowBound,
    createTracker: track,
    compilePattern,
    enter,
    handlers: {
      ...handle
    },
    handle: void 0,
    indentLines,
    indexStack: [],
    join: [...join],
    options: {},
    safe: safeBound,
    stack: [],
    unsafe: [...unsafe]
  };
  configure(state, settings);
  if (state.options.tightDefinitions) {
    state.join.push(joinDefinition);
  }
  state.handle = (0, import_zwitch.zwitch)("type", {
    invalid,
    unknown,
    handlers: state.handlers
  });
  let result = state.handle(tree, void 0, state, {
    before: "\n",
    after: "\n",
    now: {
      line: 1,
      column: 1
    },
    lineShift: 0
  });
  if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) {
    result += "\n";
  }
  return result;
  function enter(name) {
    state.stack.push(name);
    return exit;
    function exit() {
      state.stack.pop();
    }
  }
}
function invalid(value) {
  throw new Error("Cannot handle value `" + value + "`, expected node");
}
function unknown(value) {
  const node2 = value;
  throw new Error("Cannot handle unknown node `" + node2.type + "`");
}
function joinDefinition(left, right) {
  if (left.type === "definition" && left.type === right.type) {
    return 0;
  }
}
function containerPhrasingBound(parent, info) {
  return containerPhrasing(parent, this, info);
}
function containerFlowBound(parent, info) {
  return containerFlow(parent, this, info);
}
function safeBound(value, config) {
  return safe(this, value, config);
}

// node_modules/remark-stringify/lib/index.js
function remarkStringify(options) {
  const self = this;
  self.compiler = compiler;
  function compiler(tree) {
    return toMarkdown(tree, {
      ...self.data("settings"),
      ...options,
      extensions: self.data("toMarkdownExtensions") || []
    });
  }
}

// .beyond/uimport/temp/remark-stringify.11.0.0.js
var remark_stringify_11_0_0_default = remarkStringify;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3JlbWFyay1zdHJpbmdpZnkuMTEuMC4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2NvbmZpZ3VyZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvYmxvY2txdW90ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3BhdHRlcm4taW4tc2NvcGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2JyZWFrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvZm9ybWF0LWNvZGUtYXMtaW5kZW50ZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1mZW5jZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvY29kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLXF1b3RlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9kZWZpbml0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stZW1waGFzaXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9lbmNvZGUtY2hhcmFjdGVyLXJlZmVyZW5jZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2VuY29kZS1pbmZvLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9lbXBoYXNpcy5qcyIsIi4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLXN0cmluZy9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9mb3JtYXQtaGVhZGluZy1hcy1zZXRleHQuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2hlYWRpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2h0bWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2ltYWdlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9pbWFnZS1yZWZlcmVuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2lubGluZS1jb2RlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvZm9ybWF0LWxpbmstYXMtYXV0b2xpbmsuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpbmsuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpbmstcmVmZXJlbmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stYnVsbGV0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stYnVsbGV0LW90aGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stYnVsbGV0LW9yZGVyZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1ydWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9saXN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stbGlzdC1pdGVtLWluZGVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvbGlzdC1pdGVtLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9wYXJhZ3JhcGguanMiLCIuLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1waHJhc2luZy9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1zdHJvbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL3N0cm9uZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvdGV4dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2NoZWNrLXJ1bGUtcmVwZXRpdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9oYW5kbGUvdGhlbWF0aWMtYnJlYWsuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2pvaW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdW5zYWZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvYXNzb2NpYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb21waWxlLXBhdHRlcm4uanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItcGhyYXNpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItZmxvdy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL2luZGVudC1saW5lcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3NhZmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC90cmFjay5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZW1hcmstc3RyaW5naWZ5L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZW1hcmtfc3RyaW5naWZ5XzExXzBfMF9leHBvcnRzIiwiX19leHBvcnQiLCJkZWZhdWx0IiwicmVtYXJrX3N0cmluZ2lmeV8xMV8wXzBfZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJvd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNvbmZpZ3VyZSIsImJhc2UiLCJleHRlbnNpb24iLCJpbmRleCIsImtleSIsImV4dGVuc2lvbnMiLCJsZW5ndGgiLCJjYWxsIiwibGlzdCIsIm1hcCIsIm9wdGlvbnMiLCJsZWZ0IiwicmlnaHQiLCJwdXNoIiwiT2JqZWN0IiwiYXNzaWduIiwiYmxvY2txdW90ZSIsIm5vZGUyIiwiXyIsInN0YXRlIiwiaW5mbyIsImV4aXQiLCJlbnRlciIsInRyYWNrZXIiLCJjcmVhdGVUcmFja2VyIiwibW92ZSIsInNoaWZ0IiwidmFsdWUiLCJpbmRlbnRMaW5lcyIsImNvbnRhaW5lckZsb3ciLCJjdXJyZW50IiwibWFwMiIsImxpbmUiLCJibGFuayIsInBhdHRlcm5JblNjb3BlIiwic3RhY2siLCJwYXR0ZXJuIiwibGlzdEluU2NvcGUiLCJpbkNvbnN0cnVjdCIsIm5vdEluQ29uc3RydWN0IiwibGlzdDMiLCJub25lIiwiaW5jbHVkZXMiLCJoYXJkQnJlYWsiLCJfMSIsInVuc2FmZSIsImNoYXJhY3RlciIsInRlc3QiLCJiZWZvcmUiLCJmb3JtYXRDb2RlQXNJbmRlbnRlZCIsIkJvb2xlYW4iLCJmZW5jZXMiLCJsYW5nIiwiY2hlY2tGZW5jZSIsIm1hcmtlciIsImZlbmNlIiwiRXJyb3IiLCJpbXBvcnRfbG9uZ2VzdF9zdHJlYWsiLCJyZXF1aXJlIiwiY29kZSIsInJhdyIsInN1ZmZpeCIsImV4aXQyIiwidmFsdWUyIiwibWFwMyIsInNlcXVlbmNlIiwicmVwZWF0IiwiTWF0aCIsIm1heCIsImxvbmdlc3RTdHJlYWsiLCJzdWJleGl0Iiwic2FmZSIsImFmdGVyIiwiZW5jb2RlIiwibWV0YSIsImNoZWNrUXVvdGUiLCJxdW90ZSIsImRlZmluaXRpb24iLCJhc3NvY2lhdGlvbklkIiwidXJsIiwidGl0bGUiLCJjaGVja0VtcGhhc2lzIiwiZW1waGFzaXMiLCJlbmNvZGVDaGFyYWN0ZXJSZWZlcmVuY2UiLCJjb2RlMiIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2xhc3NpZnlfY2hhcmFjdGVyIiwiZW5jb2RlSW5mbyIsIm91dHNpZGUiLCJpbnNpZGUiLCJvdXRzaWRlS2luZCIsImNsYXNzaWZ5Q2hhcmFjdGVyIiwiaW5zaWRlS2luZCIsInBlZWsiLCJlbXBoYXNpc1BlZWsiLCJiZXR3ZWVuMiIsImNvbnRhaW5lclBocmFzaW5nIiwiYmV0d2VlbkhlYWQiLCJjaGFyQ29kZUF0Iiwib3BlbiIsInNsaWNlIiwiYmV0d2VlblRhaWwiLCJjbG9zZSIsImF0dGVudGlvbkVuY29kZVN1cnJvdW5kaW5nSW5mbyIsImltcG9ydF91bmlzdF91dGlsX3Zpc2l0X3BhcmVudHMiLCJpbXBvcnRfdW5pc3RfdXRpbF92aXNpdF9wYXJlbnRzMiIsInZpc2l0IiwidHJlZSIsInRlc3RPclZpc2l0b3IiLCJ2aXNpdG9yT3JSZXZlcnNlIiwibWF5YmVSZXZlcnNlIiwicmV2ZXJzZSIsInZpc2l0b3IiLCJ2aXNpdFBhcmVudHMiLCJvdmVybG9hZCIsInBhcmVudHMiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImluZGV4T2YiLCJlbXB0eU9wdGlvbnMiLCJzZXR0aW5ncyIsImluY2x1ZGVJbWFnZUFsdCIsImluY2x1ZGVIdG1sIiwib25lIiwibm9kZSIsInR5cGUiLCJhbHQiLCJhbGwiLCJBcnJheSIsImlzQXJyYXkiLCJ2YWx1ZXMiLCJyZXN1bHQiLCJqb2luIiwiZm9ybWF0SGVhZGluZ0FzU2V0ZXh0IiwibGl0ZXJhbFdpdGhCcmVhayIsIm5vZGUzIiwiRVhJVCIsImRlcHRoIiwic2V0ZXh0IiwiaGVhZGluZyIsInJhbmsiLCJtaW4iLCJzdWJleGl0MiIsImxhc3RJbmRleE9mIiwiY2xvc2VBdHgiLCJodG1sIiwiaHRtbFBlZWsiLCJpbWFnZSIsImltYWdlUGVlayIsImltYWdlUmVmZXJlbmNlIiwiaW1hZ2VSZWZlcmVuY2VQZWVrIiwicmVmZXJlbmNlVHlwZSIsInJlZmVyZW5jZSIsImlubGluZUNvZGUiLCJpbmxpbmVDb2RlUGVlayIsIlJlZ0V4cCIsImV4cHJlc3Npb24iLCJjb21waWxlUGF0dGVybiIsIm1hdGNoIiwiYXRCcmVhayIsImV4ZWMiLCJwb3NpdGlvbiIsImZvcm1hdExpbmtBc0F1dG9saW5rIiwicmVzb3VyY2VMaW5rIiwibGluayIsImxpbmtQZWVrIiwibGlua1JlZmVyZW5jZSIsImxpbmtSZWZlcmVuY2VQZWVrIiwidGV4dDIiLCJjaGVja0J1bGxldCIsImJ1bGxldCIsImNoZWNrQnVsbGV0T3RoZXIiLCJidWxsZXRPdGhlciIsImNoZWNrQnVsbGV0T3JkZXJlZCIsImJ1bGxldE9yZGVyZWQiLCJjaGVja1J1bGUiLCJydWxlIiwibGlzdDIiLCJidWxsZXRDdXJyZW50Iiwib3JkZXJlZCIsInVzZURpZmZlcmVudE1hcmtlciIsImJ1bGxldExhc3RVc2VkIiwiZmlyc3RMaXN0SXRlbSIsImluZGV4U3RhY2siLCJpdGVtIiwiY2hlY2tMaXN0SXRlbUluZGVudCIsInN0eWxlIiwibGlzdEl0ZW1JbmRlbnQiLCJsaXN0SXRlbSIsInN0YXJ0IiwiaW5jcmVtZW50TGlzdE1hcmtlciIsInNpemUiLCJzcHJlYWQiLCJjZWlsIiwibWFwNCIsInBhcmFncmFwaCIsImlzIiwiY29udGV4dCIsImNoZWNrIiwiY29udmVydCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwibG9va3NMaWtlQU5vZGUiLCJvayIsImNhc3RGYWN0b3J5IiwiYW55RmFjdG9yeSIsInByb3BzRmFjdG9yeSIsInR5cGVGYWN0b3J5IiwidGVzdHMiLCJjaGVja3MiLCJhbnkiLCJwYXJhbWV0ZXJzIiwiaW5kZXgyIiwiYXBwbHkiLCJjaGVja0FzUmVjb3JkIiwiYWxsMiIsIm5vZGVBc1JlY29yZCIsInRlc3RGdW5jdGlvbiIsInBocmFzaW5nIiwicm9vdCIsImhhc1BocmFzaW5nIiwic29tZSIsImQiLCJjb250YWluZXIiLCJjaGVja1N0cm9uZyIsInN0cm9uZyIsInN0cm9uZ1BlZWsiLCJ0ZXh0IiwiY2hlY2tSdWxlUmVwZXRpdGlvbiIsInJlcGV0aXRpb24iLCJydWxlUmVwZXRpdGlvbiIsInRoZW1hdGljQnJlYWsiLCJydWxlU3BhY2VzIiwiaGFuZGxlIiwiYnJlYWsiLCJqb2luRGVmYXVsdHMiLCJmdWxsUGhyYXNpbmdTcGFucyIsImltcG9ydF9taWNyb21hcmtfdXRpbF9kZWNvZGVfc3RyaW5nIiwiYXNzb2NpYXRpb24iLCJsYWJlbCIsImlkZW50aWZpZXIiLCJkZWNvZGVTdHJpbmciLCJfY29tcGlsZWQiLCJyZXN1bHRzIiwiZW5jb2RlQWZ0ZXIiLCJjaGlsZCIsImhhbmRsZTIiLCJoYW5kbGVycyIsImNoYXJBdCIsInJlcGxhY2UiLCJlbmNvZGluZ0luZm8iLCJwb3AiLCJiZXR3ZWVuIiwiZW9sIiwib25lMiIsImlucHV0IiwiY29uZmlnIiwicG9zaXRpb25zIiwiaW5mb3MiLCJzb3J0IiwibnVtZXJpY2FsIiwiZW5kIiwiZXNjYXBlQmFja3NsYXNoZXMiLCJhIiwiYiIsIndob2xlIiwidHJhY2siLCJub3ciLCJsaW5lU2hpZnQiLCJjb2x1bW4iLCJjaHVua3MiLCJzcGxpdCIsInRhaWwiLCJpbXBvcnRfendpdGNoIiwidG9NYXJrZG93biIsImNvbnRhaW5lclBocmFzaW5nQm91bmQiLCJjb250YWluZXJGbG93Qm91bmQiLCJzYWZlQm91bmQiLCJ0aWdodERlZmluaXRpb25zIiwiam9pbkRlZmluaXRpb24iLCJ6d2l0Y2giLCJpbnZhbGlkIiwidW5rbm93biIsIm5hbWUiLCJyZW1hcmtTdHJpbmdpZnkiLCJzZWxmIiwiY29tcGlsZXIiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSwrQkFBQTtBQUFBQyxRQUFBLENBQUFELCtCQUFBO0VBQUFFLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQztBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFOLCtCQUFBOzs7QUNJQSxJQUFNTyxHQUFBLEdBQU0sQ0FBQyxFQUFFQyxjQUFBO0FBT1IsU0FBU0MsVUFBVUMsSUFBQSxFQUFNQyxTQUFBLEVBQVc7RUFDekMsSUFBSUMsS0FBQSxHQUFRO0VBRVosSUFBSUMsR0FBQTtFQUdKLElB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