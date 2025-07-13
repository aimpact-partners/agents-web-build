System.register(["micromark-util-chunked@2.0.1","micromark-util-character@2.1.1","micromark-util-classify-character@2.0.1","micromark-factory-space@2.0.1","decode-named-character-reference@1.1.0","micromark-util-subtokenize@2.1.0","micromark-factory-destination@2.0.1","micromark-factory-label@2.0.1","micromark-factory-title@2.0.1","micromark-factory-whitespace@2.0.1","micromark-util-normalize-identifier@2.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["micromark-util-chunked","2.0.1"],["micromark-util-character","2.1.1"],["micromark-util-classify-character","2.0.1"],["micromark-util-resolve-all","2.0.1"],["micromark-core-commonmark","2.0.3"],["micromark-factory-space","2.0.1"],["decode-named-character-reference","1.1.0"],["micromark-util-subtokenize","2.1.0"],["micromark-factory-destination","2.0.1"],["micromark-factory-label","2.0.1"],["micromark-factory-title","2.0.1"],["micromark-factory-whitespace","2.0.1"],["micromark-util-normalize-identifier","2.0.1"],["micromark-util-html-tag-name","2.0.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('micromark-util-chunked@2.0.1', dep), dep => dependencies.set('micromark-util-character@2.1.1', dep), dep => dependencies.set('micromark-util-classify-character@2.0.1', dep), dep => dependencies.set('micromark-factory-space@2.0.1', dep), dep => dependencies.set('decode-named-character-reference@1.1.0', dep), dep => dependencies.set('micromark-util-subtokenize@2.1.0', dep), dep => dependencies.set('micromark-factory-destination@2.0.1', dep), dep => dependencies.set('micromark-factory-label@2.0.1', dep), dep => dependencies.set('micromark-factory-title@2.0.1', dep), dep => dependencies.set('micromark-factory-whitespace@2.0.1', dep), dep => dependencies.set('micromark-util-normalize-identifier@2.0.1', dep)],
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

// .beyond/uimport/micromark-core-commonmark.2.0.3.js
var micromark_core_commonmark_2_0_3_exports = {};
__export(micromark_core_commonmark_2_0_3_exports, {
  attention: () => attention,
  autolink: () => autolink,
  blankLine: () => blankLine,
  blockQuote: () => blockQuote,
  characterEscape: () => characterEscape,
  characterReference: () => characterReference,
  codeFenced: () => codeFenced,
  codeIndented: () => codeIndented,
  codeText: () => codeText,
  content: () => content,
  definition: () => definition,
  hardBreakEscape: () => hardBreakEscape,
  headingAtx: () => headingAtx,
  htmlFlow: () => htmlFlow,
  htmlText: () => htmlText,
  labelEnd: () => labelEnd,
  labelStartImage: () => labelStartImage,
  labelStartLink: () => labelStartLink,
  lineEnding: () => lineEnding,
  list: () => list,
  setextUnderline: () => setextUnderline,
  thematicBreak: () => thematicBreak
});
module.exports = __toCommonJS(micromark_core_commonmark_2_0_3_exports);

// node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs, events, context) {
  const called = [];
  let index = -1;
  while (++index < constructs.length) {
    const resolve = constructs[index].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}

// node_modules/micromark-core-commonmark/lib/attention.js
var import_micromark_util_chunked = require("micromark-util-chunked@2.0.1");
var import_micromark_util_classify_character = require("micromark-util-classify-character@2.0.1");
var attention = {
  name: "attention",
  resolveAll: resolveAllAttention,
  tokenize: tokenizeAttention
};
function resolveAllAttention(events, context) {
  let index = -1;
  let open;
  let group;
  let text;
  let openingSequence;
  let closingSequence;
  let use;
  let nextEvents;
  let offset;
  while (++index < events.length) {
    if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
      open = index;
      while (open--) {
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) {
            continue;
          }
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
          const start = {
            ...events[open][1].end
          };
          const end = {
            ...events[index][1].start
          };
          movePoint(start, -use);
          movePoint(end, use);
          openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: {
              ...events[open][1].end
            }
          };
          closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...events[index][1].start
            },
            end
          };
          text = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: {
              ...events[open][1].end
            },
            end: {
              ...events[index][1].start
            }
          };
          group = {
            type: use > 1 ? "strong" : "emphasis",
            start: {
              ...openingSequence.start
            },
            end: {
              ...closingSequence.end
            }
          };
          events[open][1].end = {
            ...openingSequence.start
          };
          events[index][1].start = {
            ...closingSequence.end
          };
          nextEvents = [];
          if (events[open][1].end.offset - events[open][1].start.offset) {
            nextEvents = (0, import_micromark_util_chunked.push)(nextEvents, [["enter", events[open][1], context], ["exit", events[open][1], context]]);
          }
          nextEvents = (0, import_micromark_util_chunked.push)(nextEvents, [["enter", group, context], ["enter", openingSequence, context], ["exit", openingSequence, context], ["enter", text, context]]);
          nextEvents = (0, import_micromark_util_chunked.push)(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
          nextEvents = (0, import_micromark_util_chunked.push)(nextEvents, [["exit", text, context], ["enter", closingSequence, context], ["exit", closingSequence, context], ["exit", group, context]]);
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2;
            nextEvents = (0, import_micromark_util_chunked.push)(nextEvents, [["enter", events[index][1], context], ["exit", events[index][1], context]]);
          } else {
            offset = 0;
          }
          (0, import_micromark_util_chunked.splice)(events, open - 1, index - open + 3, nextEvents);
          index = open + nextEvents.length - offset - 2;
          break;
        }
      }
    }
  }
  index = -1;
  while (++index < events.length) {
    if (events[index][1].type === "attentionSequence") {
      events[index][1].type = "data";
    }
  }
  return events;
}
function tokenizeAttention(effects, ok) {
  const attentionMarkers = this.parser.constructs.attentionMarkers.null;
  const previous2 = this.previous;
  const before = (0, import_micromark_util_classify_character.classifyCharacter)(previous2);
  let marker;
  return start;
  function start(code) {
    marker = code;
    effects.enter("attentionSequence");
    return inside(code);
  }
  function inside(code) {
    if (code === marker) {
      effects.consume(code);
      return inside;
    }
    const token = effects.exit("attentionSequence");
    const after = (0, import_micromark_util_classify_character.classifyCharacter)(code);
    const open = !after || after === 2 && before || attentionMarkers.includes(code);
    const close = !before || before === 2 && after || attentionMarkers.includes(previous2);
    token._open = Boolean(marker === 42 ? open : open && (before || !close));
    token._close = Boolean(marker === 42 ? close : close && (after || !open));
    return ok(code);
  }
}
function movePoint(point, offset) {
  point.column += offset;
  point.offset += offset;
  point._bufferIndex += offset;
}

// node_modules/micromark-core-commonmark/lib/autolink.js
var import_micromark_util_character = require("micromark-util-character@2.1.1");
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok, nok) {
  let size = 0;
  return start;
  function start(code) {
    effects.enter("autolink");
    effects.enter("autolinkMarker");
    effects.consume(code);
    effects.exit("autolinkMarker");
    effects.enter("autolinkProtocol");
    return open;
  }
  function open(code) {
    if ((0, import_micromark_util_character.asciiAlpha)(code)) {
      effects.consume(code);
      return schemeOrEmailAtext;
    }
    if (code === 64) {
      return nok(code);
    }
    return emailAtext(code);
  }
  function schemeOrEmailAtext(code) {
    if (code === 43 || code === 45 || code === 46 || (0, import_micromark_util_character.asciiAlphanumeric)(code)) {
      size = 1;
      return schemeInsideOrEmailAtext(code);
    }
    return emailAtext(code);
  }
  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code);
      size = 0;
      return urlInside;
    }
    if ((code === 43 || code === 45 || code === 46 || (0, import_micromark_util_character.asciiAlphanumeric)(code)) && size++ < 32) {
      effects.consume(code);
      return schemeInsideOrEmailAtext;
    }
    size = 0;
    return emailAtext(code);
  }
  function urlInside(code) {
    if (code === 62) {
      effects.exit("autolinkProtocol");
      effects.enter("autolinkMarker");
      effects.consume(code);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok;
    }
    if (code === null || code === 32 || code === 60 || (0, import_micromark_util_character.asciiControl)(code)) {
      return nok(code);
    }
    effects.consume(code);
    return urlInside;
  }
  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code);
      return emailAtSignOrDot;
    }
    if ((0, import_micromark_util_character.asciiAtext)(code)) {
      effects.consume(code);
      return emailAtext;
    }
    return nok(code);
  }
  function emailAtSignOrDot(code) {
    return (0, import_micromark_util_character.asciiAlphanumeric)(code) ? emailLabel(code) : nok(code);
  }
  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code);
      size = 0;
      return emailAtSignOrDot;
    }
    if (code === 62) {
      effects.exit("autolinkProtocol").type = "autolinkEmail";
      effects.enter("autolinkMarker");
      effects.consume(code);
      effects.exit("autolinkMarker");
      effects.exit("autolink");
      return ok;
    }
    return emailValue(code);
  }
  function emailValue(code) {
    if ((code === 45 || (0, import_micromark_util_character.asciiAlphanumeric)(code)) && size++ < 63) {
      const next = code === 45 ? emailValue : emailLabel;
      effects.consume(code);
      return next;
    }
    return nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/blank-line.js
var import_micromark_factory_space = require("micromark-factory-space@2.0.1");
var import_micromark_util_character2 = require("micromark-util-character@2.1.1");
var blankLine = {
  partial: true,
  tokenize: tokenizeBlankLine
};
function tokenizeBlankLine(effects, ok, nok) {
  return start;
  function start(code) {
    return (0, import_micromark_util_character2.markdownSpace)(code) ? (0, import_micromark_factory_space.factorySpace)(effects, after, "linePrefix")(code) : after(code);
  }
  function after(code) {
    return code === null || (0, import_micromark_util_character2.markdownLineEnding)(code) ? ok(code) : nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/block-quote.js
var import_micromark_factory_space2 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character3 = require("micromark-util-character@2.1.1");
var blockQuote = {
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit,
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart
};
function tokenizeBlockQuoteStart(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code === 62) {
      const state = self.containerState;
      if (!state.open) {
        effects.enter("blockQuote", {
          _container: true
        });
        state.open = true;
      }
      effects.enter("blockQuotePrefix");
      effects.enter("blockQuoteMarker");
      effects.consume(code);
      effects.exit("blockQuoteMarker");
      return after;
    }
    return nok(code);
  }
  function after(code) {
    if ((0, import_micromark_util_character3.markdownSpace)(code)) {
      effects.enter("blockQuotePrefixWhitespace");
      effects.consume(code);
      effects.exit("blockQuotePrefixWhitespace");
      effects.exit("blockQuotePrefix");
      return ok;
    }
    effects.exit("blockQuotePrefix");
    return ok(code);
  }
}
function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  const self = this;
  return contStart;
  function contStart(code) {
    if ((0, import_micromark_util_character3.markdownSpace)(code)) {
      return (0, import_micromark_factory_space2.factorySpace)(effects, contBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
    }
    return contBefore(code);
  }
  function contBefore(code) {
    return effects.attempt(blockQuote, ok, nok)(code);
  }
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/micromark-core-commonmark/lib/character-escape.js
var import_micromark_util_character4 = require("micromark-util-character@2.1.1");
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok, nok) {
  return start;
  function start(code) {
    effects.enter("characterEscape");
    effects.enter("escapeMarker");
    effects.consume(code);
    effects.exit("escapeMarker");
    return inside;
  }
  function inside(code) {
    if ((0, import_micromark_util_character4.asciiPunctuation)(code)) {
      effects.enter("characterEscapeValue");
      effects.consume(code);
      effects.exit("characterEscapeValue");
      effects.exit("characterEscape");
      return ok;
    }
    return nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/character-reference.js
var import_decode_named_character_reference = require("decode-named-character-reference@1.1.0");
var import_micromark_util_character5 = require("micromark-util-character@2.1.1");
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok, nok) {
  const self = this;
  let size = 0;
  let max;
  let test;
  return start;
  function start(code) {
    effects.enter("characterReference");
    effects.enter("characterReferenceMarker");
    effects.consume(code);
    effects.exit("characterReferenceMarker");
    return open;
  }
  function open(code) {
    if (code === 35) {
      effects.enter("characterReferenceMarkerNumeric");
      effects.consume(code);
      effects.exit("characterReferenceMarkerNumeric");
      return numeric;
    }
    effects.enter("characterReferenceValue");
    max = 31;
    test = import_micromark_util_character5.asciiAlphanumeric;
    return value(code);
  }
  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter("characterReferenceMarkerHexadecimal");
      effects.consume(code);
      effects.exit("characterReferenceMarkerHexadecimal");
      effects.enter("characterReferenceValue");
      max = 6;
      test = import_micromark_util_character5.asciiHexDigit;
      return value;
    }
    effects.enter("characterReferenceValue");
    max = 7;
    test = import_micromark_util_character5.asciiDigit;
    return value(code);
  }
  function value(code) {
    if (code === 59 && size) {
      const token = effects.exit("characterReferenceValue");
      if (test === import_micromark_util_character5.asciiAlphanumeric && !(0, import_decode_named_character_reference.decodeNamedCharacterReference)(self.sliceSerialize(token))) {
        return nok(code);
      }
      effects.enter("characterReferenceMarker");
      effects.consume(code);
      effects.exit("characterReferenceMarker");
      effects.exit("characterReference");
      return ok;
    }
    if (test(code) && size++ < max) {
      effects.consume(code);
      return value;
    }
    return nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/code-fenced.js
var import_micromark_factory_space3 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character6 = require("micromark-util-character@2.1.1");
var nonLazyContinuation = {
  partial: true,
  tokenize: tokenizeNonLazyContinuation
};
var codeFenced = {
  concrete: true,
  name: "codeFenced",
  tokenize: tokenizeCodeFenced
};
function tokenizeCodeFenced(effects, ok, nok) {
  const self = this;
  const closeStart = {
    partial: true,
    tokenize: tokenizeCloseStart
  };
  let initialPrefix = 0;
  let sizeOpen = 0;
  let marker;
  return start;
  function start(code) {
    return beforeSequenceOpen(code);
  }
  function beforeSequenceOpen(code) {
    const tail = self.events[self.events.length - 1];
    initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
    marker = code;
    effects.enter("codeFenced");
    effects.enter("codeFencedFence");
    effects.enter("codeFencedFenceSequence");
    return sequenceOpen(code);
  }
  function sequenceOpen(code) {
    if (code === marker) {
      sizeOpen++;
      effects.consume(code);
      return sequenceOpen;
    }
    if (sizeOpen < 3) {
      return nok(code);
    }
    effects.exit("codeFencedFenceSequence");
    return (0, import_micromark_util_character6.markdownSpace)(code) ? (0, import_micromark_factory_space3.factorySpace)(effects, infoBefore, "whitespace")(code) : infoBefore(code);
  }
  function infoBefore(code) {
    if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
      effects.exit("codeFencedFence");
      return self.interrupt ? ok(code) : effects.check(nonLazyContinuation, atNonLazyBreak, after)(code);
    }
    effects.enter("codeFencedFenceInfo");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return info(code);
  }
  function info(code) {
    if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return infoBefore(code);
    }
    if ((0, import_micromark_util_character6.markdownSpace)(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceInfo");
      return (0, import_micromark_factory_space3.factorySpace)(effects, metaBefore, "whitespace")(code);
    }
    if (code === 96 && code === marker) {
      return nok(code);
    }
    effects.consume(code);
    return info;
  }
  function metaBefore(code) {
    if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
      return infoBefore(code);
    }
    effects.enter("codeFencedFenceMeta");
    effects.enter("chunkString", {
      contentType: "string"
    });
    return meta(code);
  }
  function meta(code) {
    if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
      effects.exit("chunkString");
      effects.exit("codeFencedFenceMeta");
      return infoBefore(code);
    }
    if (code === 96 && code === marker) {
      return nok(code);
    }
    effects.consume(code);
    return meta;
  }
  function atNonLazyBreak(code) {
    return effects.attempt(closeStart, after, contentBefore)(code);
  }
  function contentBefore(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return contentStart;
  }
  function contentStart(code) {
    return initialPrefix > 0 && (0, import_micromark_util_character6.markdownSpace)(code) ? (0, import_micromark_factory_space3.factorySpace)(effects, beforeContentChunk, "linePrefix", initialPrefix + 1)(code) : beforeContentChunk(code);
  }
  function beforeContentChunk(code) {
    if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
      return effects.check(nonLazyContinuation, atNonLazyBreak, after)(code);
    }
    effects.enter("codeFlowValue");
    return contentChunk(code);
  }
  function contentChunk(code) {
    if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
      effects.exit("codeFlowValue");
      return beforeContentChunk(code);
    }
    effects.consume(code);
    return contentChunk;
  }
  function after(code) {
    effects.exit("codeFenced");
    return ok(code);
  }
  function tokenizeCloseStart(effects2, ok2, nok2) {
    let size = 0;
    return startBefore;
    function startBefore(code) {
      effects2.enter("lineEnding");
      effects2.consume(code);
      effects2.exit("lineEnding");
      return start2;
    }
    function start2(code) {
      effects2.enter("codeFencedFence");
      return (0, import_micromark_util_character6.markdownSpace)(code) ? (0, import_micromark_factory_space3.factorySpace)(effects2, beforeSequenceClose, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code) : beforeSequenceClose(code);
    }
    function beforeSequenceClose(code) {
      if (code === marker) {
        effects2.enter("codeFencedFenceSequence");
        return sequenceClose(code);
      }
      return nok2(code);
    }
    function sequenceClose(code) {
      if (code === marker) {
        size++;
        effects2.consume(code);
        return sequenceClose;
      }
      if (size >= sizeOpen) {
        effects2.exit("codeFencedFenceSequence");
        return (0, import_micromark_util_character6.markdownSpace)(code) ? (0, import_micromark_factory_space3.factorySpace)(effects2, sequenceCloseAfter, "whitespace")(code) : sequenceCloseAfter(code);
      }
      return nok2(code);
    }
    function sequenceCloseAfter(code) {
      if (code === null || (0, import_micromark_util_character6.markdownLineEnding)(code)) {
        effects2.exit("codeFencedFence");
        return ok2(code);
      }
      return nok2(code);
    }
  }
}
function tokenizeNonLazyContinuation(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if (code === null) {
      return nok(code);
    }
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return lineStart;
  }
  function lineStart(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/code-indented.js
var import_micromark_factory_space4 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character7 = require("micromark-util-character@2.1.1");
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
};
var furtherStart = {
  partial: true,
  tokenize: tokenizeFurtherStart
};
function tokenizeCodeIndented(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    effects.enter("codeIndented");
    return (0, import_micromark_factory_space4.factorySpace)(effects, afterPrefix, "linePrefix", 4 + 1)(code);
  }
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? atBreak(code) : nok(code);
  }
  function atBreak(code) {
    if (code === null) {
      return after(code);
    }
    if ((0, import_micromark_util_character7.markdownLineEnding)(code)) {
      return effects.attempt(furtherStart, atBreak, after)(code);
    }
    effects.enter("codeFlowValue");
    return inside(code);
  }
  function inside(code) {
    if (code === null || (0, import_micromark_util_character7.markdownLineEnding)(code)) {
      effects.exit("codeFlowValue");
      return atBreak(code);
    }
    effects.consume(code);
    return inside;
  }
  function after(code) {
    effects.exit("codeIndented");
    return ok(code);
  }
}
function tokenizeFurtherStart(effects, ok, nok) {
  const self = this;
  return furtherStart2;
  function furtherStart2(code) {
    if (self.parser.lazy[self.now().line]) {
      return nok(code);
    }
    if ((0, import_micromark_util_character7.markdownLineEnding)(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return furtherStart2;
    }
    return (0, import_micromark_factory_space4.factorySpace)(effects, afterPrefix, "linePrefix", 4 + 1)(code);
  }
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : (0, import_micromark_util_character7.markdownLineEnding)(code) ? furtherStart2(code) : nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/code-text.js
var import_micromark_util_character8 = require("micromark-util-character@2.1.1");
var codeText = {
  name: "codeText",
  previous,
  resolve: resolveCodeText,
  tokenize: tokenizeCodeText
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4;
  let headEnterIndex = 3;
  let index;
  let enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    index = headEnterIndex;
    while (++index < tailExitIndex) {
      if (events[index][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding";
        events[tailExitIndex][1].type = "codeTextPadding";
        headEnterIndex += 2;
        tailExitIndex -= 2;
        break;
      }
    }
  }
  index = headEnterIndex - 1;
  tailExitIndex++;
  while (++index <= tailExitIndex) {
    if (enter === void 0) {
      if (index !== tailExitIndex && events[index][1].type !== "lineEnding") {
        enter = index;
      }
    } else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
      events[enter][1].type = "codeTextData";
      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end;
        events.splice(enter + 2, index - enter - 2);
        tailExitIndex -= index - enter - 2;
        index = enter + 2;
      }
      enter = void 0;
    }
  }
  return events;
}
function previous(code) {
  return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok, nok) {
  const self = this;
  let sizeOpen = 0;
  let size;
  let token;
  return start;
  function start(code) {
    effects.enter("codeText");
    effects.enter("codeTextSequence");
    return sequenceOpen(code);
  }
  function sequenceOpen(code) {
    if (code === 96) {
      effects.consume(code);
      sizeOpen++;
      return sequenceOpen;
    }
    effects.exit("codeTextSequence");
    return between(code);
  }
  function between(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 32) {
      effects.enter("space");
      effects.consume(code);
      effects.exit("space");
      return between;
    }
    if (code === 96) {
      token = effects.enter("codeTextSequence");
      size = 0;
      return sequenceClose(code);
    }
    if ((0, import_micromark_util_character8.markdownLineEnding)(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return between;
    }
    effects.enter("codeTextData");
    return data(code);
  }
  function data(code) {
    if (code === null || code === 32 || code === 96 || (0, import_micromark_util_character8.markdownLineEnding)(code)) {
      effects.exit("codeTextData");
      return between(code);
    }
    effects.consume(code);
    return data;
  }
  function sequenceClose(code) {
    if (code === 96) {
      effects.consume(code);
      size++;
      return sequenceClose;
    }
    if (size === sizeOpen) {
      effects.exit("codeTextSequence");
      effects.exit("codeText");
      return ok(code);
    }
    token.type = "codeTextData";
    return data(code);
  }
}

// node_modules/micromark-core-commonmark/lib/content.js
var import_micromark_factory_space5 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character9 = require("micromark-util-character@2.1.1");
var import_micromark_util_subtokenize = require("micromark-util-subtokenize@2.1.0");
var content = {
  resolve: resolveContent,
  tokenize: tokenizeContent
};
var continuationConstruct = {
  partial: true,
  tokenize: tokenizeContinuation
};
function resolveContent(events) {
  (0, import_micromark_util_subtokenize.subtokenize)(events);
  return events;
}
function tokenizeContent(effects, ok) {
  let previous2;
  return chunkStart;
  function chunkStart(code) {
    effects.enter("content");
    previous2 = effects.enter("chunkContent", {
      contentType: "content"
    });
    return chunkInside(code);
  }
  function chunkInside(code) {
    if (code === null) {
      return contentEnd(code);
    }
    if ((0, import_micromark_util_character9.markdownLineEnding)(code)) {
      return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
    }
    effects.consume(code);
    return chunkInside;
  }
  function contentEnd(code) {
    effects.exit("chunkContent");
    effects.exit("content");
    return ok(code);
  }
  function contentContinue(code) {
    effects.consume(code);
    effects.exit("chunkContent");
    previous2.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous2
    });
    previous2 = previous2.next;
    return chunkInside;
  }
}
function tokenizeContinuation(effects, ok, nok) {
  const self = this;
  return startLookahead;
  function startLookahead(code) {
    effects.exit("chunkContent");
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return (0, import_micromark_factory_space5.factorySpace)(effects, prefixed, "linePrefix");
  }
  function prefixed(code) {
    if (code === null || (0, import_micromark_util_character9.markdownLineEnding)(code)) {
      return nok(code);
    }
    const tail = self.events[self.events.length - 1];
    if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) {
      return ok(code);
    }
    return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
  }
}

// node_modules/micromark-core-commonmark/lib/definition.js
var import_micromark_factory_destination = require("micromark-factory-destination@2.0.1");
var import_micromark_factory_label = require("micromark-factory-label@2.0.1");
var import_micromark_factory_space6 = require("micromark-factory-space@2.0.1");
var import_micromark_factory_title = require("micromark-factory-title@2.0.1");
var import_micromark_factory_whitespace = require("micromark-factory-whitespace@2.0.1");
var import_micromark_util_character10 = require("micromark-util-character@2.1.1");
var import_micromark_util_normalize_identifier = require("micromark-util-normalize-identifier@2.0.1");
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
};
var titleBefore = {
  partial: true,
  tokenize: tokenizeTitleBefore
};
function tokenizeDefinition(effects, ok, nok) {
  const self = this;
  let identifier;
  return start;
  function start(code) {
    effects.enter("definition");
    return before(code);
  }
  function before(code) {
    return import_micromark_factory_label.factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
  }
  function labelAfter(code) {
    identifier = (0, import_micromark_util_normalize_identifier.normalizeIdentifier)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
    if (code === 58) {
      effects.enter("definitionMarker");
      effects.consume(code);
      effects.exit("definitionMarker");
      return markerAfter;
    }
    return nok(code);
  }
  function markerAfter(code) {
    return (0, import_micromark_util_character10.markdownLineEndingOrSpace)(code) ? (0, import_micromark_factory_whitespace.factoryWhitespace)(effects, destinationBefore)(code) : destinationBefore(code);
  }
  function destinationBefore(code) {
    return (0, import_micromark_factory_destination.factoryDestination)(effects, destinationAfter, nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(code);
  }
  function destinationAfter(code) {
    return effects.attempt(titleBefore, after, after)(code);
  }
  function after(code) {
    return (0, import_micromark_util_character10.markdownSpace)(code) ? (0, import_micromark_factory_space6.factorySpace)(effects, afterWhitespace, "whitespace")(code) : afterWhitespace(code);
  }
  function afterWhitespace(code) {
    if (code === null || (0, import_micromark_util_character10.markdownLineEnding)(code)) {
      effects.exit("definition");
      self.parser.defined.push(identifier);
      return ok(code);
    }
    return nok(code);
  }
}
function tokenizeTitleBefore(effects, ok, nok) {
  return titleBefore2;
  function titleBefore2(code) {
    return (0, import_micromark_util_character10.markdownLineEndingOrSpace)(code) ? (0, import_micromark_factory_whitespace.factoryWhitespace)(effects, beforeMarker)(code) : nok(code);
  }
  function beforeMarker(code) {
    return (0, import_micromark_factory_title.factoryTitle)(effects, titleAfter, nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
  }
  function titleAfter(code) {
    return (0, import_micromark_util_character10.markdownSpace)(code) ? (0, import_micromark_factory_space6.factorySpace)(effects, titleAfterOptionalWhitespace, "whitespace")(code) : titleAfterOptionalWhitespace(code);
  }
  function titleAfterOptionalWhitespace(code) {
    return code === null || (0, import_micromark_util_character10.markdownLineEnding)(code) ? ok(code) : nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var import_micromark_util_character11 = require("micromark-util-character@2.1.1");
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok, nok) {
  return start;
  function start(code) {
    effects.enter("hardBreakEscape");
    effects.consume(code);
    return after;
  }
  function after(code) {
    if ((0, import_micromark_util_character11.markdownLineEnding)(code)) {
      effects.exit("hardBreakEscape");
      return ok(code);
    }
    return nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/heading-atx.js
var import_micromark_factory_space7 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character12 = require("micromark-util-character@2.1.1");
var import_micromark_util_chunked2 = require("micromark-util-chunked@2.0.1");
var headingAtx = {
  name: "headingAtx",
  resolve: resolveHeadingAtx,
  tokenize: tokenizeHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2;
  let contentStart = 3;
  let content2;
  let text;
  if (events[contentStart][1].type === "whitespace") {
    contentStart += 2;
  }
  if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") {
    contentEnd -= 2;
  }
  if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
  }
  if (contentEnd > contentStart) {
    content2 = {
      type: "atxHeadingText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    };
    text = {
      type: "chunkText",
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: "text"
    };
    (0, import_micromark_util_chunked2.splice)(events, contentStart, contentEnd - contentStart + 1, [["enter", content2, context], ["enter", text, context], ["exit", text, context], ["exit", content2, context]]);
  }
  return events;
}
function tokenizeHeadingAtx(effects, ok, nok) {
  let size = 0;
  return start;
  function start(code) {
    effects.enter("atxHeading");
    return before(code);
  }
  function before(code) {
    effects.enter("atxHeadingSequence");
    return sequenceOpen(code);
  }
  function sequenceOpen(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code);
      return sequenceOpen;
    }
    if (code === null || (0, import_micromark_util_character12.markdownLineEndingOrSpace)(code)) {
      effects.exit("atxHeadingSequence");
      return atBreak(code);
    }
    return nok(code);
  }
  function atBreak(code) {
    if (code === 35) {
      effects.enter("atxHeadingSequence");
      return sequenceFurther(code);
    }
    if (code === null || (0, import_micromark_util_character12.markdownLineEnding)(code)) {
      effects.exit("atxHeading");
      return ok(code);
    }
    if ((0, import_micromark_util_character12.markdownSpace)(code)) {
      return (0, import_micromark_factory_space7.factorySpace)(effects, atBreak, "whitespace")(code);
    }
    effects.enter("atxHeadingText");
    return data(code);
  }
  function sequenceFurther(code) {
    if (code === 35) {
      effects.consume(code);
      return sequenceFurther;
    }
    effects.exit("atxHeadingSequence");
    return atBreak(code);
  }
  function data(code) {
    if (code === null || code === 35 || (0, import_micromark_util_character12.markdownLineEndingOrSpace)(code)) {
      effects.exit("atxHeadingText");
      return atBreak(code);
    }
    effects.consume(code);
    return data;
  }
}

// node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
var htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/micromark-core-commonmark/lib/html-flow.js
var import_micromark_util_character13 = require("micromark-util-character@2.1.1");
var htmlFlow = {
  concrete: true,
  name: "htmlFlow",
  resolveTo: resolveToHtmlFlow,
  tokenize: tokenizeHtmlFlow
};
var blankLineBefore = {
  partial: true,
  tokenize: tokenizeBlankLineBefore
};
var nonLazyContinuationStart = {
  partial: true,
  tokenize: tokenizeNonLazyContinuationStart
};
function resolveToHtmlFlow(events) {
  let index = events.length;
  while (index--) {
    if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") {
      break;
    }
  }
  if (index > 1 && events[index - 2][1].type === "linePrefix") {
    events[index][1].start = events[index - 2][1].start;
    events[index + 1][1].start = events[index - 2][1].start;
    events.splice(index - 2, 2);
  }
  return events;
}
function tokenizeHtmlFlow(effects, ok, nok) {
  const self = this;
  let marker;
  let closingTag;
  let buffer;
  let index;
  let markerB;
  return start;
  function start(code) {
    return before(code);
  }
  function before(code) {
    effects.enter("htmlFlow");
    effects.enter("htmlFlowData");
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === 47) {
      effects.consume(code);
      closingTag = true;
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      marker = 3;
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    if ((0, import_micromark_util_character13.asciiAlpha)(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      marker = 2;
      return commentOpenInside;
    }
    if (code === 91) {
      effects.consume(code);
      marker = 5;
      index = 0;
      return cdataOpenInside;
    }
    if ((0, import_micromark_util_character13.asciiAlpha)(code)) {
      effects.consume(code);
      marker = 4;
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return self.interrupt ? ok : continuationDeclarationInside;
    }
    return nok(code);
  }
  function cdataOpenInside(code) {
    const value = "CDATA[";
    if (code === value.charCodeAt(index++)) {
      effects.consume(code);
      if (index === value.length) {
        return self.interrupt ? ok : continuation;
      }
      return cdataOpenInside;
    }
    return nok(code);
  }
  function tagCloseStart(code) {
    if ((0, import_micromark_util_character13.asciiAlpha)(code)) {
      effects.consume(code);
      buffer = String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function tagName(code) {
    if (code === null || code === 47 || code === 62 || (0, import_micromark_util_character13.markdownLineEndingOrSpace)(code)) {
      const slash = code === 47;
      const name = buffer.toLowerCase();
      if (!slash && !closingTag && htmlRawNames.includes(name)) {
        marker = 1;
        return self.interrupt ? ok(code) : continuation(code);
      }
      if (htmlBlockNames.includes(buffer.toLowerCase())) {
        marker = 6;
        if (slash) {
          effects.consume(code);
          return basicSelfClosing;
        }
        return self.interrupt ? ok(code) : continuation(code);
      }
      marker = 7;
      return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : closingTag ? completeClosingTagAfter(code) : completeAttributeNameBefore(code);
    }
    if (code === 45 || (0, import_micromark_util_character13.asciiAlphanumeric)(code)) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return tagName;
    }
    return nok(code);
  }
  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code);
      return self.interrupt ? ok : continuation;
    }
    return nok(code);
  }
  function completeClosingTagAfter(code) {
    if ((0, import_micromark_util_character13.markdownSpace)(code)) {
      effects.consume(code);
      return completeClosingTagAfter;
    }
    return completeEnd(code);
  }
  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code);
      return completeEnd;
    }
    if (code === 58 || code === 95 || (0, import_micromark_util_character13.asciiAlpha)(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    if ((0, import_micromark_util_character13.markdownSpace)(code)) {
      effects.consume(code);
      return completeAttributeNameBefore;
    }
    return completeEnd(code);
  }
  function completeAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || (0, import_micromark_util_character13.asciiAlphanumeric)(code)) {
      effects.consume(code);
      return completeAttributeName;
    }
    return completeAttributeNameAfter(code);
  }
  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    if ((0, import_micromark_util_character13.markdownSpace)(code)) {
      effects.consume(code);
      return completeAttributeNameAfter;
    }
    return completeAttributeNameBefore(code);
  }
  function completeAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      markerB = code;
      return completeAttributeValueQuoted;
    }
    if ((0, import_micromark_util_character13.markdownSpace)(code)) {
      effects.consume(code);
      return completeAttributeValueBefore;
    }
    return completeAttributeValueUnquoted(code);
  }
  function completeAttributeValueQuoted(code) {
    if (code === markerB) {
      effects.consume(code);
      markerB = null;
      return completeAttributeValueQuotedAfter;
    }
    if (code === null || (0, import_micromark_util_character13.markdownLineEnding)(code)) {
      return nok(code);
    }
    effects.consume(code);
    return completeAttributeValueQuoted;
  }
  function completeAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 47 || code === 60 || code === 61 || code === 62 || code === 96 || (0, import_micromark_util_character13.markdownLineEndingOrSpace)(code)) {
      return completeAttributeNameAfter(code);
    }
    effects.consume(code);
    return completeAttributeValueUnquoted;
  }
  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || (0, import_micromark_util_character13.markdownSpace)(code)) {
      return completeAttributeNameBefore(code);
    }
    return nok(code);
  }
  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }
  function completeAfter(code) {
    if (code === null || (0, import_micromark_util_character13.markdownLineEnding)(code)) {
      return continuation(code);
    }
    if ((0, import_micromark_util_character13.markdownSpace)(code)) {
      effects.consume(code);
      return completeAfter;
    }
    return nok(code);
  }
  function continuation(code) {
    if (code === 45 && marker === 2) {
      effects.consume(code);
      return continuationCommentInside;
    }
    if (code === 60 && marker === 1) {
      effects.consume(code);
      return continuationRawTagOpen;
    }
    if (code === 62 && marker === 4) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === 63 && marker === 3) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    if (code === 93 && marker === 5) {
      effects.consume(code);
      return continuationCdataInside;
    }
    if ((0, import_micromark_util_character13.markdownLineEnding)(code) && (marker === 6 || marker === 7)) {
      effects.exit("htmlFlowData");
      return effects.check(blankLineBefore, continuationAfter, continuationStart)(code);
    }
    if (code === null || (0, import_micromark_util_character13.markdownLineEnding)(code)) {
      effects.exit("htmlFlowData");
      return continuationStart(code);
    }
    effects.consume(code);
    return continuation;
  }
  function continuationStart(code) {
    return effects.check(nonLazyContinuationStart, continuationStartNonLazy, continuationAfter)(code);
  }
  function continuationStartNonLazy(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return continuationBefore;
  }
  function continuationBefore(code) {
    if (code === null || (0, import_micromark_util_character13.markdownLineEnding)(code)) {
      return continuationStart(code);
    }
    effects.enter("htmlFlowData");
    return continuation(code);
  }
  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code);
      buffer = "";
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationRawEndTag(code) {
    if (code === 62) {
      const name = buffer.toLowerCase();
      if (htmlRawNames.includes(name)) {
        effects.consume(code);
        return continuationClose;
      }
      return continuation(code);
    }
    if ((0, import_micromark_util_character13.asciiAlpha)(code) && buffer.length < 8) {
      effects.consume(code);
      buffer += String.fromCharCode(code);
      return continuationRawEndTag;
    }
    return continuation(code);
  }
  function continuationCdataInside(code) {
    if (code === 93) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code);
      return continuationClose;
    }
    if (code === 45 && marker === 2) {
      effects.consume(code);
      return continuationDeclarationInside;
    }
    return continuation(code);
  }
  function continuationClose(code) {
    if (code === null || (0, import_micromark_util_character13.markdownLineEnding)(code)) {
      effects.exit("htmlFlowData");
      return continuationAfter(code);
    }
    effects.consume(code);
    return continuationClose;
  }
  function continuationAfter(code) {
    effects.exit("htmlFlow");
    return ok(code);
  }
}
function tokenizeNonLazyContinuationStart(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    if ((0, import_micromark_util_character13.markdownLineEnding)(code)) {
      effects.enter("lineEnding");
      effects.consume(code);
      effects.exit("lineEnding");
      return after;
    }
    return nok(code);
  }
  function after(code) {
    return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
  }
}
function tokenizeBlankLineBefore(effects, ok, nok) {
  return start;
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return effects.attempt(blankLine, ok, nok);
  }
}

// node_modules/micromark-core-commonmark/lib/html-text.js
var import_micromark_factory_space8 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character14 = require("micromark-util-character@2.1.1");
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok, nok) {
  const self = this;
  let marker;
  let index;
  let returnState;
  return start;
  function start(code) {
    effects.enter("htmlText");
    effects.enter("htmlTextData");
    effects.consume(code);
    return open;
  }
  function open(code) {
    if (code === 33) {
      effects.consume(code);
      return declarationOpen;
    }
    if (code === 47) {
      effects.consume(code);
      return tagCloseStart;
    }
    if (code === 63) {
      effects.consume(code);
      return instruction;
    }
    if ((0, import_micromark_util_character14.asciiAlpha)(code)) {
      effects.consume(code);
      return tagOpen;
    }
    return nok(code);
  }
  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code);
      return commentOpenInside;
    }
    if (code === 91) {
      effects.consume(code);
      index = 0;
      return cdataOpenInside;
    }
    if ((0, import_micromark_util_character14.asciiAlpha)(code)) {
      effects.consume(code);
      return declaration;
    }
    return nok(code);
  }
  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code);
      return commentEnd;
    }
    return nok(code);
  }
  function comment(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 45) {
      effects.consume(code);
      return commentClose;
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = comment;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return comment;
  }
  function commentClose(code) {
    if (code === 45) {
      effects.consume(code);
      return commentEnd;
    }
    return comment(code);
  }
  function commentEnd(code) {
    return code === 62 ? end(code) : code === 45 ? commentClose(code) : comment(code);
  }
  function cdataOpenInside(code) {
    const value = "CDATA[";
    if (code === value.charCodeAt(index++)) {
      effects.consume(code);
      return index === value.length ? cdata : cdataOpenInside;
    }
    return nok(code);
  }
  function cdata(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataClose;
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = cdata;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return cdata;
  }
  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  function cdataEnd(code) {
    if (code === 62) {
      return end(code);
    }
    if (code === 93) {
      effects.consume(code);
      return cdataEnd;
    }
    return cdata(code);
  }
  function declaration(code) {
    if (code === null || code === 62) {
      return end(code);
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = declaration;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return declaration;
  }
  function instruction(code) {
    if (code === null) {
      return nok(code);
    }
    if (code === 63) {
      effects.consume(code);
      return instructionClose;
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = instruction;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return instruction;
  }
  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code);
  }
  function tagCloseStart(code) {
    if ((0, import_micromark_util_character14.asciiAlpha)(code)) {
      effects.consume(code);
      return tagClose;
    }
    return nok(code);
  }
  function tagClose(code) {
    if (code === 45 || (0, import_micromark_util_character14.asciiAlphanumeric)(code)) {
      effects.consume(code);
      return tagClose;
    }
    return tagCloseBetween(code);
  }
  function tagCloseBetween(code) {
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = tagCloseBetween;
      return lineEndingBefore(code);
    }
    if ((0, import_micromark_util_character14.markdownSpace)(code)) {
      effects.consume(code);
      return tagCloseBetween;
    }
    return end(code);
  }
  function tagOpen(code) {
    if (code === 45 || (0, import_micromark_util_character14.asciiAlphanumeric)(code)) {
      effects.consume(code);
      return tagOpen;
    }
    if (code === 47 || code === 62 || (0, import_micromark_util_character14.markdownLineEndingOrSpace)(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code);
      return end;
    }
    if (code === 58 || code === 95 || (0, import_micromark_util_character14.asciiAlpha)(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = tagOpenBetween;
      return lineEndingBefore(code);
    }
    if ((0, import_micromark_util_character14.markdownSpace)(code)) {
      effects.consume(code);
      return tagOpenBetween;
    }
    return end(code);
  }
  function tagOpenAttributeName(code) {
    if (code === 45 || code === 46 || code === 58 || code === 95 || (0, import_micromark_util_character14.asciiAlphanumeric)(code)) {
      effects.consume(code);
      return tagOpenAttributeName;
    }
    return tagOpenAttributeNameAfter(code);
  }
  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = tagOpenAttributeNameAfter;
      return lineEndingBefore(code);
    }
    if ((0, import_micromark_util_character14.markdownSpace)(code)) {
      effects.consume(code);
      return tagOpenAttributeNameAfter;
    }
    return tagOpenBetween(code);
  }
  function tagOpenAttributeValueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.consume(code);
      marker = code;
      return tagOpenAttributeValueQuoted;
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = tagOpenAttributeValueBefore;
      return lineEndingBefore(code);
    }
    if ((0, import_micromark_util_character14.markdownSpace)(code)) {
      effects.consume(code);
      return tagOpenAttributeValueBefore;
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code);
      marker = void 0;
      return tagOpenAttributeValueQuotedAfter;
    }
    if (code === null) {
      return nok(code);
    }
    if ((0, import_micromark_util_character14.markdownLineEnding)(code)) {
      returnState = tagOpenAttributeValueQuoted;
      return lineEndingBefore(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueQuoted;
  }
  function tagOpenAttributeValueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) {
      return nok(code);
    }
    if (code === 47 || code === 62 || (0, import_micromark_util_character14.markdownLineEndingOrSpace)(code)) {
      return tagOpenBetween(code);
    }
    effects.consume(code);
    return tagOpenAttributeValueUnquoted;
  }
  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || (0, import_micromark_util_character14.markdownLineEndingOrSpace)(code)) {
      return tagOpenBetween(code);
    }
    return nok(code);
  }
  function end(code) {
    if (code === 62) {
      effects.consume(code);
      effects.exit("htmlTextData");
      effects.exit("htmlText");
      return ok;
    }
    return nok(code);
  }
  function lineEndingBefore(code) {
    effects.exit("htmlTextData");
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return lineEndingAfter;
  }
  function lineEndingAfter(code) {
    return (0, import_micromark_util_character14.markdownSpace)(code) ? (0, import_micromark_factory_space8.factorySpace)(effects, lineEndingAfterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code) : lineEndingAfterPrefix(code);
  }
  function lineEndingAfterPrefix(code) {
    effects.enter("htmlTextData");
    return returnState(code);
  }
}

// node_modules/micromark-core-commonmark/lib/label-end.js
var import_micromark_factory_destination2 = require("micromark-factory-destination@2.0.1");
var import_micromark_factory_label2 = require("micromark-factory-label@2.0.1");
var import_micromark_factory_title2 = require("micromark-factory-title@2.0.1");
var import_micromark_factory_whitespace2 = require("micromark-factory-whitespace@2.0.1");
var import_micromark_util_character15 = require("micromark-util-character@2.1.1");
var import_micromark_util_chunked3 = require("micromark-util-chunked@2.0.1");
var import_micromark_util_normalize_identifier2 = require("micromark-util-normalize-identifier@2.0.1");
var labelEnd = {
  name: "labelEnd",
  resolveAll: resolveAllLabelEnd,
  resolveTo: resolveToLabelEnd,
  tokenize: tokenizeLabelEnd
};
var resourceConstruct = {
  tokenize: tokenizeResource
};
var referenceFullConstruct = {
  tokenize: tokenizeReferenceFull
};
var referenceCollapsedConstruct = {
  tokenize: tokenizeReferenceCollapsed
};
function resolveAllLabelEnd(events) {
  let index = -1;
  const newEvents = [];
  while (++index < events.length) {
    const token = events[index][1];
    newEvents.push(events[index]);
    if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
      const offset = token.type === "labelImage" ? 4 : 2;
      token.type = "data";
      index += offset;
    }
  }
  if (events.length !== newEvents.length) {
    (0, import_micromark_util_chunked3.splice)(events, 0, events.length, newEvents);
  }
  return events;
}
function resolveToLabelEnd(events, context) {
  let index = events.length;
  let offset = 0;
  let token;
  let open;
  let close;
  let media;
  while (index--) {
    token = events[index][1];
    if (open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive) {
        break;
      }
      if (events[index][0] === "enter" && token.type === "labelLink") {
        token._inactive = true;
      }
    } else if (close) {
      if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
        open = index;
        if (token.type !== "labelLink") {
          offset = 2;
          break;
        }
      }
    } else if (token.type === "labelEnd") {
      close = index;
    }
  }
  const group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  const label = {
    type: "label",
    start: {
      ...events[open][1].start
    },
    end: {
      ...events[close][1].end
    }
  };
  const text = {
    type: "labelText",
    start: {
      ...events[open + offset + 2][1].end
    },
    end: {
      ...events[close - 2][1].start
    }
  };
  media = [["enter", group, context], ["enter", label, context]];
  media = (0, import_micromark_util_chunked3.push)(media, events.slice(open + 1, open + offset + 3));
  media = (0, import_micromark_util_chunked3.push)(media, [["enter", text, context]]);
  media = (0, import_micromark_util_chunked3.push)(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
  media = (0, import_micromark_util_chunked3.push)(media, [["exit", text, context], events[close - 2], events[close - 1], ["exit", label, context]]);
  media = (0, import_micromark_util_chunked3.push)(media, events.slice(close + 1));
  media = (0, import_micromark_util_chunked3.push)(media, [["exit", group, context]]);
  (0, import_micromark_util_chunked3.splice)(events, open, events.length, media);
  return events;
}
function tokenizeLabelEnd(effects, ok, nok) {
  const self = this;
  let index = self.events.length;
  let labelStart;
  let defined;
  while (index--) {
    if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
      labelStart = self.events[index][1];
      break;
    }
  }
  return start;
  function start(code) {
    if (!labelStart) {
      return nok(code);
    }
    if (labelStart._inactive) {
      return labelEndNok(code);
    }
    defined = self.parser.defined.includes((0, import_micromark_util_normalize_identifier2.normalizeIdentifier)(self.sliceSerialize({
      start: labelStart.end,
      end: self.now()
    })));
    effects.enter("labelEnd");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelEnd");
    return after;
  }
  function after(code) {
    if (code === 40) {
      return effects.attempt(resourceConstruct, labelEndOk, defined ? labelEndOk : labelEndNok)(code);
    }
    if (code === 91) {
      return effects.attempt(referenceFullConstruct, labelEndOk, defined ? referenceNotFull : labelEndNok)(code);
    }
    return defined ? labelEndOk(code) : labelEndNok(code);
  }
  function referenceNotFull(code) {
    return effects.attempt(referenceCollapsedConstruct, labelEndOk, labelEndNok)(code);
  }
  function labelEndOk(code) {
    return ok(code);
  }
  function labelEndNok(code) {
    labelStart._balanced = true;
    return nok(code);
  }
}
function tokenizeResource(effects, ok, nok) {
  return resourceStart;
  function resourceStart(code) {
    effects.enter("resource");
    effects.enter("resourceMarker");
    effects.consume(code);
    effects.exit("resourceMarker");
    return resourceBefore;
  }
  function resourceBefore(code) {
    return (0, import_micromark_util_character15.markdownLineEndingOrSpace)(code) ? (0, import_micromark_factory_whitespace2.factoryWhitespace)(effects, resourceOpen)(code) : resourceOpen(code);
  }
  function resourceOpen(code) {
    if (code === 41) {
      return resourceEnd(code);
    }
    return (0, import_micromark_factory_destination2.factoryDestination)(effects, resourceDestinationAfter, resourceDestinationMissing, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
  }
  function resourceDestinationAfter(code) {
    return (0, import_micromark_util_character15.markdownLineEndingOrSpace)(code) ? (0, import_micromark_factory_whitespace2.factoryWhitespace)(effects, resourceBetween)(code) : resourceEnd(code);
  }
  function resourceDestinationMissing(code) {
    return nok(code);
  }
  function resourceBetween(code) {
    if (code === 34 || code === 39 || code === 40) {
      return (0, import_micromark_factory_title2.factoryTitle)(effects, resourceTitleAfter, nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
    }
    return resourceEnd(code);
  }
  function resourceTitleAfter(code) {
    return (0, import_micromark_util_character15.markdownLineEndingOrSpace)(code) ? (0, import_micromark_factory_whitespace2.factoryWhitespace)(effects, resourceEnd)(code) : resourceEnd(code);
  }
  function resourceEnd(code) {
    if (code === 41) {
      effects.enter("resourceMarker");
      effects.consume(code);
      effects.exit("resourceMarker");
      effects.exit("resource");
      return ok;
    }
    return nok(code);
  }
}
function tokenizeReferenceFull(effects, ok, nok) {
  const self = this;
  return referenceFull;
  function referenceFull(code) {
    return import_micromark_factory_label2.factoryLabel.call(self, effects, referenceFullAfter, referenceFullMissing, "reference", "referenceMarker", "referenceString")(code);
  }
  function referenceFullAfter(code) {
    return self.parser.defined.includes((0, import_micromark_util_normalize_identifier2.normalizeIdentifier)(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
  }
  function referenceFullMissing(code) {
    return nok(code);
  }
}
function tokenizeReferenceCollapsed(effects, ok, nok) {
  return referenceCollapsedStart;
  function referenceCollapsedStart(code) {
    effects.enter("reference");
    effects.enter("referenceMarker");
    effects.consume(code);
    effects.exit("referenceMarker");
    return referenceCollapsedOpen;
  }
  function referenceCollapsedOpen(code) {
    if (code === 93) {
      effects.enter("referenceMarker");
      effects.consume(code);
      effects.exit("referenceMarker");
      effects.exit("reference");
      return ok;
    }
    return nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartImage
};
function tokenizeLabelStartImage(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    effects.enter("labelImage");
    effects.enter("labelImageMarker");
    effects.consume(code);
    effects.exit("labelImageMarker");
    return open;
  }
  function open(code) {
    if (code === 91) {
      effects.enter("labelMarker");
      effects.consume(code);
      effects.exit("labelMarker");
      effects.exit("labelImage");
      return after;
    }
    return nok(code);
  }
  function after(code) {
    return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  resolveAll: labelEnd.resolveAll,
  tokenize: tokenizeLabelStartLink
};
function tokenizeLabelStartLink(effects, ok, nok) {
  const self = this;
  return start;
  function start(code) {
    effects.enter("labelLink");
    effects.enter("labelMarker");
    effects.consume(code);
    effects.exit("labelMarker");
    effects.exit("labelLink");
    return after;
  }
  function after(code) {
    return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/line-ending.js
var import_micromark_factory_space9 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character16 = require("micromark-util-character@2.1.1");
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok) {
  return start;
  function start(code) {
    effects.enter("lineEnding");
    effects.consume(code);
    effects.exit("lineEnding");
    return (0, import_micromark_factory_space9.factorySpace)(effects, ok, "linePrefix");
  }
}

// node_modules/micromark-core-commonmark/lib/thematic-break.js
var import_micromark_factory_space10 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character17 = require("micromark-util-character@2.1.1");
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok, nok) {
  let size = 0;
  let marker;
  return start;
  function start(code) {
    effects.enter("thematicBreak");
    return before(code);
  }
  function before(code) {
    marker = code;
    return atBreak(code);
  }
  function atBreak(code) {
    if (code === marker) {
      effects.enter("thematicBreakSequence");
      return sequence(code);
    }
    if (size >= 3 && (code === null || (0, import_micromark_util_character17.markdownLineEnding)(code))) {
      effects.exit("thematicBreak");
      return ok(code);
    }
    return nok(code);
  }
  function sequence(code) {
    if (code === marker) {
      effects.consume(code);
      size++;
      return sequence;
    }
    effects.exit("thematicBreakSequence");
    return (0, import_micromark_util_character17.markdownSpace)(code) ? (0, import_micromark_factory_space10.factorySpace)(effects, atBreak, "whitespace")(code) : atBreak(code);
  }
}

// node_modules/micromark-core-commonmark/lib/list.js
var import_micromark_factory_space11 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character18 = require("micromark-util-character@2.1.1");
var list = {
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd,
  name: "list",
  tokenize: tokenizeListStart
};
var listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
};
var indentConstruct = {
  partial: true,
  tokenize: tokenizeIndent
};
function tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;
  function start(code) {
    const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : (0, import_micromark_util_character18.asciiDigit)(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
      }
      if (!self.interrupt || code === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code);
      }
    }
    return nok(code);
  }
  function inside(code) {
    if ((0, import_micromark_util_character18.asciiDigit)(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
      effects.exit("listItemValue");
      return atMarker(code);
    }
    return nok(code);
  }
  function atMarker(code) {
    effects.enter("listItemMarker");
    effects.consume(code);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }
  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }
  function otherPrefix(code) {
    if ((0, import_micromark_util_character18.markdownSpace)(code)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code);
  }
  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok(code);
  }
}
function tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = void 0;
  return effects.check(blankLine, onBlank, notBlank);
  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
    return (0, import_micromark_factory_space11.factorySpace)(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
  }
  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !(0, import_micromark_util_character18.markdownSpace)(code)) {
      self.containerState.furtherBlankLines = void 0;
      self.containerState.initialBlankLine = void 0;
      return notInCurrentItem(code);
    }
    self.containerState.furtherBlankLines = void 0;
    self.containerState.initialBlankLine = void 0;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
  }
  function notInCurrentItem(code) {
    self.containerState._closeFlow = true;
    self.interrupt = void 0;
    return (0, import_micromark_factory_space11.factorySpace)(effects, effects.attempt(list, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
  }
}
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return (0, import_micromark_factory_space11.factorySpace)(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;
  return (0, import_micromark_factory_space11.factorySpace)(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !(0, import_micromark_util_character18.markdownSpace)(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
  }
}

// node_modules/micromark-core-commonmark/lib/setext-underline.js
var import_micromark_factory_space12 = require("micromark-factory-space@2.0.1");
var import_micromark_util_character19 = require("micromark-util-character@2.1.1");
var setextUnderline = {
  name: "setextUnderline",
  resolveTo: resolveToSetextUnderline,
  tokenize: tokenizeSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index = events.length;
  let content2;
  let text;
  let definition2;
  while (index--) {
    if (events[index][0] === "enter") {
      if (events[index][1].type === "content") {
        content2 = index;
        break;
      }
      if (events[index][1].type === "paragraph") {
        text = index;
      }
    } else {
      if (events[index][1].type === "content") {
        events.splice(index, 1);
      }
      if (!definition2 && events[index][1].type === "definition") {
        definition2 = index;
      }
    }
  }
  const heading = {
    type: "setextHeading",
    start: {
      ...events[content2][1].start
    },
    end: {
      ...events[events.length - 1][1].end
    }
  };
  events[text][1].type = "setextHeadingText";
  if (definition2) {
    events.splice(text, 0, ["enter", heading, context]);
    events.splice(definition2 + 1, 0, ["exit", events[content2][1], context]);
    events[content2][1].end = {
      ...events[definition2][1].end
    };
  } else {
    events[content2][1] = heading;
  }
  events.push(["exit", heading, context]);
  return events;
}
function tokenizeSetextUnderline(effects, ok, nok) {
  const self = this;
  let marker;
  return start;
  function start(code) {
    let index = self.events.length;
    let paragraph;
    while (index--) {
      if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
        paragraph = self.events[index][1].type === "paragraph";
        break;
      }
    }
    if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
      effects.enter("setextHeadingLine");
      marker = code;
      return before(code);
    }
    return nok(code);
  }
  function before(code) {
    effects.enter("setextHeadingLineSequence");
    return inside(code);
  }
  function inside(code) {
    if (code === marker) {
      effects.consume(code);
      return inside;
    }
    effects.exit("setextHeadingLineSequence");
    return (0, import_micromark_util_character19.markdownSpace)(code) ? (0, import_micromark_factory_space12.factorySpace)(effects, after, "lineSuffix")(code) : after(code);
  }
  function after(code) {
    if (code === null || (0, import_micromark_util_character19.markdownLineEnding)(code)) {
      effects.exit("setextHeadingLine");
      return ok(code);
    }
    return nok(code);
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9taWNyb21hcmstY29yZS1jb21tb25tYXJrLjIuMC4zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLXJlc29sdmUtYWxsL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2F0dGVudGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9hdXRvbGluay5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9ibGFuay1saW5lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2Jsb2NrLXF1b3RlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2NoYXJhY3Rlci1lc2NhcGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvY2hhcmFjdGVyLXJlZmVyZW5jZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9jb2RlLWZlbmNlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9jb2RlLWluZGVudGVkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2NvZGUtdGV4dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9jb250ZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2RlZmluaXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvaGFyZC1icmVhay1lc2NhcGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvaGVhZGluZy1hdHguanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtaHRtbC10YWctbmFtZS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9odG1sLWZsb3cuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvaHRtbC10ZXh0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2xhYmVsLWVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9sYWJlbC1zdGFydC1pbWFnZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9taWNyb21hcmstY29yZS1jb21tb25tYXJrL2xpYi9sYWJlbC1zdGFydC1saW5rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2xpbmUtZW5kaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL3RoZW1hdGljLWJyZWFrLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1jb3JlLWNvbW1vbm1hcmsvbGliL2xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWNvcmUtY29tbW9ubWFyay9saWIvc2V0ZXh0LXVuZGVybGluZS5qcyJdLCJuYW1lcyI6WyJtaWNyb21hcmtfY29yZV9jb21tb25tYXJrXzJfMF8zX2V4cG9ydHMiLCJfX2V4cG9ydCIsImF0dGVudGlvbiIsImF1dG9saW5rIiwiYmxhbmtMaW5lIiwiYmxvY2tRdW90ZSIsImNoYXJhY3RlckVzY2FwZSIsImNoYXJhY3RlclJlZmVyZW5jZSIsImNvZGVGZW5jZWQiLCJjb2RlSW5kZW50ZWQiLCJjb2RlVGV4dCIsImNvbnRlbnQiLCJkZWZpbml0aW9uIiwiaGFyZEJyZWFrRXNjYXBlIiwiaGVhZGluZ0F0eCIsImh0bWxGbG93IiwiaHRtbFRleHQiLCJsYWJlbEVuZCIsImxhYmVsU3RhcnRJbWFnZSIsImxhYmVsU3RhcnRMaW5rIiwibGluZUVuZGluZyIsImxpc3QiLCJzZXRleHRVbmRlcmxpbmUiLCJ0aGVtYXRpY0JyZWFrIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsInJlc29sdmVBbGwiLCJjb25zdHJ1Y3RzIiwiZXZlbnRzIiwiY29udGV4dCIsImNhbGxlZCIsImluZGV4IiwibGVuZ3RoIiwicmVzb2x2ZSIsImluY2x1ZGVzIiwicHVzaCIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaHVua2VkIiwicmVxdWlyZSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jbGFzc2lmeV9jaGFyYWN0ZXIiLCJuYW1lIiwicmVzb2x2ZUFsbEF0dGVudGlvbiIsInRva2VuaXplIiwidG9rZW5pemVBdHRlbnRpb24iLCJvcGVuIiwiZ3JvdXAiLCJ0ZXh0Iiwib3BlbmluZ1NlcXVlbmNlIiwiY2xvc2luZ1NlcXVlbmNlIiwidXNlIiwibmV4dEV2ZW50cyIsIm9mZnNldCIsInR5cGUiLCJfY2xvc2UiLCJfb3BlbiIsInNsaWNlU2VyaWFsaXplIiwiY2hhckNvZGVBdCIsImVuZCIsInN0YXJ0IiwibW92ZVBvaW50IiwicGFyc2VyIiwiaW5zaWRlU3BhbiIsIm51bGwiLCJzbGljZSIsInNwbGljZSIsImVmZmVjdHMiLCJvayIsImF0dGVudGlvbk1hcmtlcnMiLCJwcmV2aW91czIiLCJwcmV2aW91cyIsImJlZm9yZSIsImNsYXNzaWZ5Q2hhcmFjdGVyIiwibWFya2VyIiwiY29kZSIsImVudGVyIiwiaW5zaWRlIiwiY29uc3VtZSIsInRva2VuIiwiZXhpdCIsImFmdGVyIiwiY2xvc2UiLCJCb29sZWFuIiwicG9pbnQiLCJjb2x1bW4iLCJfYnVmZmVySW5kZXgiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyIiwidG9rZW5pemVBdXRvbGluayIsIm5vayIsInNpemUiLCJhc2NpaUFscGhhIiwic2NoZW1lT3JFbWFpbEF0ZXh0IiwiZW1haWxBdGV4dCIsImFzY2lpQWxwaGFudW1lcmljIiwic2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0IiwidXJsSW5zaWRlIiwiYXNjaWlDb250cm9sIiwiZW1haWxBdFNpZ25PckRvdCIsImFzY2lpQXRleHQiLCJlbWFpbExhYmVsIiwiZW1haWxWYWx1ZSIsIm5leHQiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2UiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyMiIsInBhcnRpYWwiLCJ0b2tlbml6ZUJsYW5rTGluZSIsIm1hcmtkb3duU3BhY2UiLCJmYWN0b3J5U3BhY2UiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2UyIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlcjMiLCJjb250aW51YXRpb24iLCJ0b2tlbml6ZUJsb2NrUXVvdGVDb250aW51YXRpb24iLCJ0b2tlbml6ZUJsb2NrUXVvdGVTdGFydCIsInNlbGYiLCJzdGF0ZSIsImNvbnRhaW5lclN0YXRlIiwiX2NvbnRhaW5lciIsImNvbnRTdGFydCIsImNvbnRCZWZvcmUiLCJkaXNhYmxlIiwiYXR0ZW1wdCIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXI0IiwidG9rZW5pemVDaGFyYWN0ZXJFc2NhcGUiLCJhc2NpaVB1bmN0dWF0aW9uIiwiaW1wb3J0X2RlY29kZV9uYW1lZF9jaGFyYWN0ZXJfcmVmZXJlbmNlIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlcjUiLCJ0b2tlbml6ZUNoYXJhY3RlclJlZmVyZW5jZSIsIm1heCIsInRlc3QiLCJudW1lcmljIiwidmFsdWUiLCJhc2NpaUhleERpZ2l0IiwiYXNjaWlEaWdpdCIsImRlY29kZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlIiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3NwYWNlMyIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXI2Iiwibm9uTGF6eUNvbnRpbnVhdGlvbiIsInRva2VuaXplTm9uTGF6eUNvbnRpbnVhdGlvbiIsImNvbmNyZXRlIiwidG9rZW5pemVDb2RlRmVuY2VkIiwiY2xvc2VTdGFydCIsInRva2VuaXplQ2xvc2VTdGFydCIsImluaXRpYWxQcmVmaXgiLCJzaXplT3BlbiIsImJlZm9yZVNlcXVlbmNlT3BlbiIsInRhaWwiLCJzZXF1ZW5jZU9wZW4iLCJpbmZvQmVmb3JlIiwiaW50ZXJydXB0IiwiY2hlY2siLCJhdE5vbkxhenlCcmVhayIsImNvbnRlbnRUeXBlIiwiaW5mbyIsIm1ldGFCZWZvcmUiLCJtZXRhIiwiY29udGVudEJlZm9yZSIsImNvbnRlbnRTdGFydCIsImJlZm9yZUNvbnRlbnRDaHVuayIsImNvbnRlbnRDaHVuayIsImVmZmVjdHMyIiwib2syIiwibm9rMiIsInN0YXJ0QmVmb3JlIiwic3RhcnQyIiwiYmVmb3JlU2VxdWVuY2VDbG9zZSIsInNlcXVlbmNlQ2xvc2UiLCJzZXF1ZW5jZUNsb3NlQWZ0ZXIiLCJsaW5lU3RhcnQiLCJsYXp5Iiwibm93IiwibGluZSIsImltcG9ydF9taWNyb21hcmtfZmFjdG9yeV9zcGFjZTQiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyNyIsInRva2VuaXplQ29kZUluZGVudGVkIiwiZnVydGhlclN0YXJ0IiwidG9rZW5pemVGdXJ0aGVyU3RhcnQiLCJhZnRlclByZWZpeCIsImF0QnJlYWsiLCJmdXJ0aGVyU3RhcnQyIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlcjgiLCJyZXNvbHZlQ29kZVRleHQiLCJ0b2tlbml6ZUNvZGVUZXh0IiwidGFpbEV4aXRJbmRleCIsImhlYWRFbnRlckluZGV4IiwiYmV0d2VlbiIsImRhdGEiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2U1IiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlcjkiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfc3VidG9rZW5pemUiLCJyZXNvbHZlQ29udGVudCIsInRva2VuaXplQ29udGVudCIsImNvbnRpbnVhdGlvbkNvbnN0cnVjdCIsInRva2VuaXplQ29udGludWF0aW9uIiwic3VidG9rZW5pemUiLCJjaHVua1N0YXJ0IiwiY2h1bmtJbnNpZGUiLCJjb250ZW50RW5kIiwiY29udGVudENvbnRpbnVlIiwic3RhcnRMb29rYWhlYWQiLCJwcmVmaXhlZCIsImZsb3ciLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3RvcnlfZGVzdGluYXRpb24iLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3RvcnlfbGFiZWwiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2U2IiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3RpdGxlIiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3doaXRlc3BhY2UiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyMTAiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfbm9ybWFsaXplX2lkZW50aWZpZXIiLCJ0b2tlbml6ZURlZmluaXRpb24iLCJ0aXRsZUJlZm9yZSIsInRva2VuaXplVGl0bGVCZWZvcmUiLCJpZGVudGlmaWVyIiwiZmFjdG9yeUxhYmVsIiwiY2FsbCIsImxhYmVsQWZ0ZXIiLCJub3JtYWxpemVJZGVudGlmaWVyIiwibWFya2VyQWZ0ZXIiLCJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwiZmFjdG9yeVdoaXRlc3BhY2UiLCJkZXN0aW5hdGlvbkJlZm9yZSIsImZhY3RvcnlEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uQWZ0ZXIiLCJhZnRlcldoaXRlc3BhY2UiLCJkZWZpbmVkIiwidGl0bGVCZWZvcmUyIiwiYmVmb3JlTWFya2VyIiwiZmFjdG9yeVRpdGxlIiwidGl0bGVBZnRlciIsInRpdGxlQWZ0ZXJPcHRpb25hbFdoaXRlc3BhY2UiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyMTEiLCJ0b2tlbml6ZUhhcmRCcmVha0VzY2FwZSIsImltcG9ydF9taWNyb21hcmtfZmFjdG9yeV9zcGFjZTciLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyMTIiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2h1bmtlZDIiLCJyZXNvbHZlSGVhZGluZ0F0eCIsInRva2VuaXplSGVhZGluZ0F0eCIsImNvbnRlbnQyIiwic2VxdWVuY2VGdXJ0aGVyIiwiaHRtbEJsb2NrTmFtZXMiLCJodG1sUmF3TmFtZXMiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyMTMiLCJyZXNvbHZlVG8iLCJyZXNvbHZlVG9IdG1sRmxvdyIsInRva2VuaXplSHRtbEZsb3ciLCJibGFua0xpbmVCZWZvcmUiLCJ0b2tlbml6ZUJsYW5rTGluZUJlZm9yZSIsIm5vbkxhenlDb250aW51YXRpb25TdGFydCIsInRva2VuaXplTm9uTGF6eUNvbnRpbnVhdGlvblN0YXJ0IiwiY2xvc2luZ1RhZyIsImJ1ZmZlciIsIm1hcmtlckIiLCJkZWNsYXJhdGlvbk9wZW4iLCJ0YWdDbG9zZVN0YXJ0IiwiY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJ0YWdOYW1lIiwiY29tbWVudE9wZW5JbnNpZGUiLCJjZGF0YU9wZW5JbnNpZGUiLCJzbGFzaCIsInRvTG93ZXJDYXNlIiwiYmFzaWNTZWxmQ2xvc2luZyIsImNvbXBsZXRlQ2xvc2luZ1RhZ0FmdGVyIiwiY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlIiwiY29tcGxldGVFbmQiLCJjb21wbGV0ZUF0dHJpYnV0ZU5hbWUiLCJjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlciIsImNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmUiLCJjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkIiwiY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkIiwiY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVF1b3RlZEFmdGVyIiwiY29tcGxldGVBZnRlciIsImNvbnRpbnVhdGlvbkNvbW1lbnRJbnNpZGUiLCJjb250aW51YXRpb25SYXdUYWdPcGVuIiwiY29udGludWF0aW9uQ2xvc2UiLCJjb250aW51YXRpb25DZGF0YUluc2lkZSIsImNvbnRpbnVhdGlvbkFmdGVyIiwiY29udGludWF0aW9uU3RhcnQiLCJjb250aW51YXRpb25TdGFydE5vbkxhenkiLCJjb250aW51YXRpb25CZWZvcmUiLCJjb250aW51YXRpb25SYXdFbmRUYWciLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2U4IiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlcjE0IiwidG9rZW5pemVIdG1sVGV4dCIsInJldHVyblN0YXRlIiwiaW5zdHJ1Y3Rpb24iLCJ0YWdPcGVuIiwiZGVjbGFyYXRpb24iLCJjb21tZW50RW5kIiwiY29tbWVudCIsImNvbW1lbnRDbG9zZSIsImxpbmVFbmRpbmdCZWZvcmUiLCJjZGF0YSIsImNkYXRhQ2xvc2UiLCJjZGF0YUVuZCIsImluc3RydWN0aW9uQ2xvc2UiLCJ0YWdDbG9zZSIsInRhZ0Nsb3NlQmV0d2VlbiIsInRhZ09wZW5CZXR3ZWVuIiwidGFnT3BlbkF0dHJpYnV0ZU5hbWUiLCJ0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyIiwidGFnT3BlbkF0dHJpYnV0ZVZhbHVlQmVmb3JlIiwidGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkIiwidGFnT3BlbkF0dHJpYnV0ZVZhbHVlVW5xdW90ZWQiLCJ0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRBZnRlciIsImxpbmVFbmRpbmdBZnRlciIsImxpbmVFbmRpbmdBZnRlclByZWZpeCIsImltcG9ydF9taWNyb21hcmtfZmFjdG9yeV9kZXN0aW5hdGlvbjIiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3RvcnlfbGFiZWwyIiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3RpdGxlMiIsImltcG9ydF9taWNyb21hcmtfZmFjdG9yeV93aGl0ZXNwYWNlMiIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXIxNSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaHVua2VkMyIsImltcG9ydF9taWNyb21hcmtfdXRpbF9ub3JtYWxpemVfaWRlbnRpZmllcjIiLCJyZXNvbHZlQWxsTGFiZWxFbmQiLCJyZXNvbHZlVG9MYWJlbEVuZCIsInRva2VuaXplTGFiZWxFbmQiLCJyZXNvdXJjZUNvbnN0cnVjdCIsInRva2VuaXplUmVzb3VyY2UiLCJyZWZlcmVuY2VGdWxsQ29uc3RydWN0IiwidG9rZW5pemVSZWZlcmVuY2VGdWxsIiwicmVmZXJlbmNlQ29sbGFwc2VkQ29uc3RydWN0IiwidG9rZW5pemVSZWZlcmVuY2VDb2xsYXBzZWQiLCJuZXdFdmVudHMiLCJtZWRpYSIsIl9pbmFjdGl2ZSIsIl9iYWxhbmNlZCIsImxhYmVsIiwibGFiZWxTdGFydCIsImxhYmVsRW5kTm9rIiwibGFiZWxFbmRPayIsInJlZmVyZW5jZU5vdEZ1bGwiLCJyZXNvdXJjZVN0YXJ0IiwicmVzb3VyY2VCZWZvcmUiLCJyZXNvdXJjZU9wZW4iLCJyZXNvdXJjZUVuZCIsInJlc291cmNlRGVzdGluYXRpb25BZnRlciIsInJlc291cmNlRGVzdGluYXRpb25NaXNzaW5nIiwicmVzb3VyY2VCZXR3ZWVuIiwicmVzb3VyY2VUaXRsZUFmdGVyIiwicmVmZXJlbmNlRnVsbCIsInJlZmVyZW5jZUZ1bGxBZnRlciIsInJlZmVyZW5jZUZ1bGxNaXNzaW5nIiwicmVmZXJlbmNlQ29sbGFwc2VkU3RhcnQiLCJyZWZlcmVuY2VDb2xsYXBzZWRPcGVuIiwidG9rZW5pemVMYWJlbFN0YXJ0SW1hZ2UiLCJ0b2tlbml6ZUxhYmVsU3RhcnRMaW5rIiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3NwYWNlOSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXIxNiIsInRva2VuaXplTGluZUVuZGluZyIsImltcG9ydF9taWNyb21hcmtfZmFjdG9yeV9zcGFjZTEwIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2NoYXJhY3RlcjE3IiwidG9rZW5pemVUaGVtYXRpY0JyZWFrIiwic2VxdWVuY2UiLCJpbXBvcnRfbWljcm9tYXJrX2ZhY3Rvcnlfc3BhY2UxMSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9jaGFyYWN0ZXIxOCIsInRva2VuaXplTGlzdENvbnRpbnVhdGlvbiIsInRva2VuaXplTGlzdEVuZCIsInRva2VuaXplTGlzdFN0YXJ0IiwibGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlQ29uc3RydWN0IiwidG9rZW5pemVMaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UiLCJpbmRlbnRDb25zdHJ1Y3QiLCJ0b2tlbml6ZUluZGVudCIsImluaXRpYWxTaXplIiwia2luZCIsImF0TWFya2VyIiwib25CbGFuayIsImVuZE9mUHJlZml4Iiwib3RoZXJQcmVmaXgiLCJpbml0aWFsQmxhbmtMaW5lIiwiX2Nsb3NlRmxvdyIsIm5vdEJsYW5rIiwiZnVydGhlckJsYW5rTGluZXMiLCJub3RJbkN1cnJlbnRJdGVtIiwiaW1wb3J0X21pY3JvbWFya19mYWN0b3J5X3NwYWNlMTIiLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfY2hhcmFjdGVyMTkiLCJyZXNvbHZlVG9TZXRleHRVbmRlcmxpbmUiLCJ0b2tlbml6ZVNldGV4dFVuZGVybGluZSIsImRlZmluaXRpb24yIiwiaGVhZGluZyIsInBhcmFncmFwaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsdUNBQUE7QUFBQUMsUUFBQSxDQUFBRCx1Q0FBQTtFQUFBRSxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxRQUFBLEVBQUFBLENBQUEsS0FBQUEsUUFBQTtFQUFBQyxTQUFBLEVBQUFBLENBQUEsS0FBQUEsU0FBQTtFQUFBQyxVQUFBLEVBQUFBLENBQUEsS0FBQUEsVUFBQTtFQUFBQyxlQUFBLEVBQUFBLENBQUEsS0FBQUEsZUFBQTtFQUFBQyxrQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGtCQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFB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Q0osT0FBT2QsS0FBQTtFQWFQLFNBQVNBLE1BQU1lLElBQUEsRUFBTTtJQUNuQixJQUFJekMsS0FBQSxHQUFRaUYsSUFBQSxDQUFLcEYsTUFBQSxDQUFPSSxNQUFBO0lBRXhCLElBQUkyVixTQUFBO0lBRUosT0FBTzVWLEtBQUEsSUFBUztNQUdkLElBQUlpRixJQUFBLENBQUtwRixNQUFBLENBQU9HLEtBQUEsRUFBTyxHQUFHb0IsSUFBQSxLQUFTLGdCQUFnQjZELElBQUEsQ0FBS3BGLE1BQUEsQ0FBT0csS0FBQSxFQUFPLEdBQUdvQixJQUFBLEtBQVMsZ0JBQWdCNkQsSUFBQSxDQUFLcEYsTUFBQSxDQUFPRyxLQUFBLEVBQU8sR0FBR29CLElBQUEsS0FBUyxXQUFXO1FBQzFJd1UsU0FBQSxHQUFZM1EsSUFBQSxDQUFLcEYsTUFBQSxDQUFPRyxLQUFBLEVBQU8sR0FBR29CLElBQUEsS0FBUztRQUMzQztNQUNGO0lBQ0Y7SUFJQSxJQUFJLENBQUM2RCxJQUFBLENBQUtyRCxNQUFBLENBQU80RyxJQUFBLENBQUt2RCxJQUFBLENBQUt3RCxHQUFBLENBQUksRUFBRUMsSUFBQSxNQUFVekQsSUFBQSxDQUFLbUMsU0FBQSxJQUFhd08sU0FBQSxHQUFZO01BQ3ZFM1QsT0FBQSxDQUFRUyxLQUFBLENBQU0sbUJBQW1CO01BQ2pDRixNQUFBLEdBQVNDLElBQUE7TUFDVCxPQUFPSCxNQUFBLENBQU9HLElBQUk7SUFDcEI7SUFDQSxPQUFPYyxHQUFBLENBQUlkLElBQUk7RUFDakI7RUFhQSxTQUFTSCxPQUFPRyxJQUFBLEVBQU07SUFDcEJSLE9BQUEsQ0FBUVMsS0FBQSxDQUFNLDJCQUEyQjtJQUN6QyxPQUFPQyxNQUFBLENBQU9GLElBQUk7RUFDcEI7RUFhQSxTQUFTRSxPQUFPRixJQUFBLEVBQU07SUFDcEIsSUFBSUEsSUFBQSxLQUFTRCxNQUFBLEVBQVE7TUFDbkJQLE9BQUEsQ0FBUVcsT0FBQSxDQUFRSCxJQUFJO01BQ3BCLE9BQU9FLE1BQUE7SUFDVDtJQUNBVixPQUFBLENBQVFhLElBQUEsQ0FBSywyQkFBMkI7SUFDeEMsV0FBT3lTLGlDQUFBLENBQUE5USxhQUFBLEVBQWNoQyxJQUFJLFFBQUk2UyxnQ0FBQSxDQUFBNVEsWUFBQSxFQUFhekMsT0FBQSxFQUFTYyxLQUFBLEVBQU8sWUFBWSxFQUFFTixJQUFJLElBQUlNLEtBQUEsQ0FBTU4sSUFBSTtFQUM1RjtFQWFBLFNBQVNNLE1BQU1OLElBQUEsRUFBTTtJQUNuQixJQUFJQSxJQUFBLEtBQVMsWUFBUThTLGlDQUFBLENBQUE1USxrQkFBQSxFQUFtQmxDLElBQUksR0FBRztNQUM3Q1IsT0FBQSxDQUFRYSxJQUFBLENBQUssbUJBQW1CO01BQ2hDLE9BQU9aLEVBQUEsQ0FBR08sSUFBSTtJQUNoQjtJQUNBLE9BQU9jLEdBQUEsQ0FBSWQsSUFBSTtFQUNqQjtBQUNGIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYWkvYWdlbnRzL3BsYXRmb3JtL3NyYy9vdXQifQ==