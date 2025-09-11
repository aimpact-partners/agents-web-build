System.register(["decode-named-character-reference@1.2.0","micromark-util-chunked@2.0.1","micromark-util-decode-numeric-character-reference@2.0.2","micromark-util-normalize-identifier@2.0.1","micromark-util-character@2.1.1","micromark-util-sanitize-uri@2.0.1","micromark-factory-space@2.0.1","micromark-util-classify-character@2.0.1","micromark-util-subtokenize@2.1.0","micromark-factory-destination@2.0.1","micromark-factory-label@2.0.1","micromark-factory-title@2.0.1","micromark-factory-whitespace@2.0.1","micromark-core-commonmark@2.0.3","micromark@4.0.2","micromark-util-decode-string@2.0.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["mdast-util-to-string","4.0.0"],["decode-named-character-reference","1.2.0"],["micromark-util-chunked","2.0.1"],["micromark-util-combine-extensions","2.0.1"],["micromark-util-decode-numeric-character-reference","2.0.2"],["micromark-util-encode","2.0.1"],["micromark-util-normalize-identifier","2.0.1"],["micromark-util-character","2.1.1"],["micromark-util-sanitize-uri","2.0.1"],["micromark","4.0.2"],["micromark-factory-space","2.0.1"],["micromark-util-classify-character","2.0.1"],["micromark-util-resolve-all","2.0.1"],["micromark-core-commonmark","2.0.3"],["micromark-util-subtokenize","2.1.0"],["micromark-factory-destination","2.0.1"],["micromark-factory-label","2.0.1"],["micromark-factory-title","2.0.1"],["micromark-factory-whitespace","2.0.1"],["micromark-util-html-tag-name","2.0.1"],["micromark-util-decode-string","2.0.1"],["unist-util-stringify-position","4.0.0"],["mdast-util-from-markdown","2.0.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('decode-named-character-reference@1.2.0', dep), dep => dependencies.set('micromark-util-chunked@2.0.1', dep), dep => dependencies.set('micromark-util-decode-numeric-character-reference@2.0.2', dep), dep => dependencies.set('micromark-util-normalize-identifier@2.0.1', dep), dep => dependencies.set('micromark-util-character@2.1.1', dep), dep => dependencies.set('micromark-util-sanitize-uri@2.0.1', dep), dep => dependencies.set('micromark-factory-space@2.0.1', dep), dep => dependencies.set('micromark-util-classify-character@2.0.1', dep), dep => dependencies.set('micromark-util-subtokenize@2.1.0', dep), dep => dependencies.set('micromark-factory-destination@2.0.1', dep), dep => dependencies.set('micromark-factory-label@2.0.1', dep), dep => dependencies.set('micromark-factory-title@2.0.1', dep), dep => dependencies.set('micromark-factory-whitespace@2.0.1', dep), dep => dependencies.set('micromark-core-commonmark@2.0.3', dep), dep => dependencies.set('micromark@4.0.2', dep), dep => dependencies.set('micromark-util-decode-string@2.0.1', dep)],
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

// .beyond/uimport/mdast-util-from-markdown.2.0.2.js
var mdast_util_from_markdown_2_0_2_exports = {};
__export(mdast_util_from_markdown_2_0_2_exports, {
  fromMarkdown: () => fromMarkdown
});
module.exports = __toCommonJS(mdast_util_from_markdown_2_0_2_exports);

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
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}

// node_modules/unist-util-stringify-position/lib/index.js
function stringifyPosition(value) {
  if (!value || typeof value !== "object") {
    return "";
  }
  if ("position" in value || "type" in value) {
    return position(value.position);
  }
  if ("start" in value || "end" in value) {
    return position(value);
  }
  if ("line" in value || "column" in value) {
    return point(value);
  }
  return "";
}
function point(point3) {
  return index(point3 && point3.line) + ":" + index(point3 && point3.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value === "number" ? value : 1;
}

// node_modules/mdast-util-from-markdown/lib/index.js
var import_micromark = require("micromark@4.0.2");
var import_micromark_util_decode_numeric_character_reference = require("micromark-util-decode-numeric-character-reference@2.0.2");
var import_micromark_util_decode_string = require("micromark-util-decode-string@2.0.1");
var import_micromark_util_normalize_identifier = require("micromark-util-normalize-identifier@2.0.1");
var import_decode_named_character_reference = require("decode-named-character-reference@1.2.0");
var own = {}.hasOwnProperty;
function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler(options)((0, import_micromark.postprocess)((0, import_micromark.parse)(options).document().write((0, import_micromark.preprocess)()(value, encoding, true))));
}
function compiler(options) {
  const config = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: opener(link),
      autolinkProtocol: onenterdata,
      autolinkEmail: onenterdata,
      atxHeading: opener(heading),
      blockQuote: opener(blockQuote),
      characterEscape: onenterdata,
      characterReference: onenterdata,
      codeFenced: opener(codeFlow),
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: opener(codeFlow, buffer),
      codeText: opener(codeText, buffer),
      codeTextData: onenterdata,
      data: onenterdata,
      codeFlowValue: onenterdata,
      definition: opener(definition),
      definitionDestinationString: buffer,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: opener(emphasis),
      hardBreakEscape: opener(hardBreak),
      hardBreakTrailing: opener(hardBreak),
      htmlFlow: opener(html, buffer),
      htmlFlowData: onenterdata,
      htmlText: opener(html, buffer),
      htmlTextData: onenterdata,
      image: opener(image),
      label: buffer,
      link: opener(link),
      listItem: opener(listItem),
      listItemValue: onenterlistitemvalue,
      listOrdered: opener(list, onenterlistordered),
      listUnordered: opener(list),
      paragraph: opener(paragraph),
      reference: onenterreference,
      referenceString: buffer,
      resourceDestinationString: buffer,
      resourceTitleString: buffer,
      setextHeading: opener(heading),
      strong: opener(strong),
      thematicBreak: opener(thematicBreak)
    },
    exit: {
      atxHeading: closer(),
      atxHeadingSequence: onexitatxheadingsequence,
      autolink: closer(),
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: closer(),
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      characterReference: onexitcharacterreference,
      codeFenced: closer(onexitcodefenced),
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: onexitcodefencedfencemeta,
      codeFlowValue: onexitdata,
      codeIndented: closer(onexitcodeindented),
      codeText: closer(onexitcodetext),
      codeTextData: onexitdata,
      data: onexitdata,
      definition: closer(),
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: closer(),
      hardBreakEscape: closer(onexithardbreak),
      hardBreakTrailing: closer(onexithardbreak),
      htmlFlow: closer(onexithtmlflow),
      htmlFlowData: onexitdata,
      htmlText: closer(onexithtmltext),
      htmlTextData: onexitdata,
      image: closer(onexitimage),
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: closer(onexitlink),
      listItem: closer(),
      listOrdered: closer(),
      listUnordered: closer(),
      paragraph: closer(),
      referenceString: onexitreferencestring,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      resource: onexitresource,
      setextHeading: closer(onexitsetextheading),
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: closer(),
      thematicBreak: closer()
    }
  };
  configure(config, (options || {}).mdastExtensions || []);
  const data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    };
    const context = {
      stack: [tree],
      tokenStack: [],
      config,
      enter,
      exit,
      buffer,
      resume,
      data
    };
    const listStack = [];
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered") {
        if (events[index2][0] === "enter") {
          listStack.push(index2);
        } else {
          const tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      const handler = config[events[index2][0]];
      if (own.call(handler, events[index2][1].type)) {
        handler[events[index2][1].type].call(Object.assign({
          sliceSerialize: events[index2][2].sliceSerialize
        }, context), events[index2][1]);
      }
    }
    if (context.tokenStack.length > 0) {
      const tail = context.tokenStack[context.tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point2(events.length > 0 ? events[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: point2(events.length > 0 ? events[events.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    };
    index2 = -1;
    while (++index2 < config.transforms.length) {
      tree = config.transforms[index2](tree) || tree;
    }
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1;
    let containerBalance = -1;
    let listSpread = false;
    let listItem2;
    let lineIndex;
    let firstBlankLineIndex;
    let atMarker;
    while (++index2 <= length) {
      const event = events[index2];
      switch (event[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote":
          {
            if (event[0] === "enter") {
              containerBalance++;
            } else {
              containerBalance--;
            }
            atMarker = void 0;
            break;
          }
        case "lineEndingBlank":
          {
            if (event[0] === "enter") {
              if (listItem2 && !atMarker && !containerBalance && !firstBlankLineIndex) {
                firstBlankLineIndex = index2;
              }
              atMarker = void 0;
            }
            break;
          }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          {
            break;
          }
        default:
          {
            atMarker = void 0;
          }
      }
      if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem2) {
          let tailIndex = index2;
          lineIndex = void 0;
          while (tailIndex--) {
            const tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit") continue;
              if (lineIndex) {
                events[lineIndex][1].type = "lineEndingBlank";
                listSpread = true;
              }
              tailEvent[1].type = "lineEnding";
              lineIndex = tailIndex;
            } else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {} else {
              break;
            }
          }
          if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) {
            listItem2._spread = true;
          }
          listItem2.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
          events.splice(lineIndex || index2, 0, ["exit", listItem2, event[2]]);
          index2++;
          length++;
        }
        if (event[1].type === "listItemPrefix") {
          const item = {
            type: "listItem",
            _spread: false,
            start: Object.assign({}, event[1].start),
            end: void 0
          };
          listItem2 = item;
          events.splice(index2, 0, ["enter", item, event[2]]);
          index2++;
          length++;
          firstBlankLineIndex = void 0;
          atMarker = true;
        }
      }
    }
    events[start][1]._spread = listSpread;
    return length;
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) and.call(this, token);
    }
  }
  function buffer() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node2, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent.children;
    siblings.push(node2);
    this.stack.push(node2);
    this.tokenStack.push([token, errorHandler || void 0]);
    node2.position = {
      start: point2(token.start),
      end: void 0
    };
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) and.call(this, token);
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node2 = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
        start: token.start,
        end: token.end
      }) + "): it\u2019s not open");
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node2.position.end = point2(token.end);
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    this.data.expectingFirstListItemValue = true;
  }
  function onenterlistitemvalue(token) {
    if (this.data.expectingFirstListItemValue) {
      const ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
      this.data.expectingFirstListItemValue = void 0;
    }
  }
  function onexitcodefencedfenceinfo() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.meta = data2;
  }
  function onexitcodefencedfence() {
    if (this.data.flowCodeInside) return;
    this.buffer();
    this.data.flowCodeInside = true;
  }
  function onexitcodefenced() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
    this.data.flowCodeInside = void 0;
  }
  function onexitcodeindented() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = (0, import_micromark_util_normalize_identifier.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitatxheadingsequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    if (!node2.depth) {
      const depth = this.sliceSerialize(token).length;
      node2.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function onexitsetextheadinglinesequence(token) {
    const node2 = this.stack[this.stack.length - 1];
    node2.depth = this.sliceSerialize(token).codePointAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function onenterdata(token) {
    const node2 = this.stack[this.stack.length - 1];
    const siblings = node2.children;
    let tail = siblings[siblings.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point2(token.start),
        end: void 0
      };
      siblings.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token);
    tail.position.end = point2(token.end);
  }
  function onexitlineending(token) {
    const context = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const tail = context.children[context.children.length - 1];
      tail.position.end = point2(token.end);
      this.data.atHardBreak = void 0;
      return;
    }
    if (!this.data.setextHeadingSlurpLineEnding && config.canContainEols.includes(context.type)) {
      onenterdata.call(this, token);
      onexitdata.call(this, token);
    }
  }
  function onexithardbreak() {
    this.data.atHardBreak = true;
  }
  function onexithtmlflow() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexithtmltext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitcodetext() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.value = data2;
  }
  function onexitlink() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitimage() {
    const node2 = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const referenceType = this.data.referenceType || "shortcut";
      node2.type += "Reference";
      node2.referenceType = referenceType;
      delete node2.url;
      delete node2.title;
    } else {
      delete node2.identifier;
      delete node2.label;
    }
    this.data.referenceType = void 0;
  }
  function onexitlabeltext(token) {
    const string = this.sliceSerialize(token);
    const ancestor = this.stack[this.stack.length - 2];
    ancestor.label = (0, import_micromark_util_decode_string.decodeString)(string);
    ancestor.identifier = (0, import_micromark_util_normalize_identifier.normalizeIdentifier)(string).toLowerCase();
  }
  function onexitlabel() {
    const fragment = this.stack[this.stack.length - 1];
    const value = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    this.data.inReference = true;
    if (node2.type === "link") {
      const children = fragment.children;
      node2.children = children;
    } else {
      node2.alt = value;
    }
  }
  function onexitresourcedestinationstring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.url = data2;
  }
  function onexitresourcetitlestring() {
    const data2 = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.title = data2;
  }
  function onexitresource() {
    this.data.inReference = void 0;
  }
  function onenterreference() {
    this.data.referenceType = "collapsed";
  }
  function onexitreferencestring(token) {
    const label = this.resume();
    const node2 = this.stack[this.stack.length - 1];
    node2.label = label;
    node2.identifier = (0, import_micromark_util_normalize_identifier.normalizeIdentifier)(this.sliceSerialize(token)).toLowerCase();
    this.data.referenceType = "full";
  }
  function onexitcharacterreferencemarker(token) {
    this.data.characterReferenceType = token.type;
  }
  function onexitcharacterreferencevalue(token) {
    const data2 = this.sliceSerialize(token);
    const type = this.data.characterReferenceType;
    let value;
    if (type) {
      value = (0, import_micromark_util_decode_numeric_character_reference.decodeNumericCharacterReference)(data2, type === "characterReferenceMarkerNumeric" ? 10 : 16);
      this.data.characterReferenceType = void 0;
    } else {
      const result = (0, import_decode_named_character_reference.decodeNamedCharacterReference)(data2);
      value = result;
    }
    const tail = this.stack[this.stack.length - 1];
    tail.value += value;
  }
  function onexitcharacterreference(token) {
    const tail = this.stack.pop();
    tail.position.end = point2(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    const node2 = this.stack[this.stack.length - 1];
    node2.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading() {
    return {
      type: "heading",
      depth: 0,
      children: []
    };
  }
  function hardBreak() {
    return {
      type: "break"
    };
  }
  function html() {
    return {
      type: "html",
      value: ""
    };
  }
  function image() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong() {
    return {
      type: "strong",
      children: []
    };
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak() {
    return {
      type: "thematicBreak"
    };
  }
}
function point2(d) {
  return {
    line: d.line,
    column: d.column,
    offset: d.offset
  };
}
function configure(combined, extensions) {
  let index2 = -1;
  while (++index2 < extensions.length) {
    const value = extensions[index2];
    if (Array.isArray(value)) {
      configure(combined, value);
    } else {
      extension(combined, value);
    }
  }
}
function extension(combined, extension2) {
  let key;
  for (key in extension2) {
    if (own.call(extension2, key)) {
      switch (key) {
        case "canContainEols":
          {
            const right = extension2[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
        case "transforms":
          {
            const right = extension2[key];
            if (right) {
              combined[key].push(...right);
            }
            break;
          }
        case "enter":
        case "exit":
          {
            const right = extension2[key];
            if (right) {
              Object.assign(combined[key], right);
            }
            break;
          }
      }
    }
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open");
  } else {
    throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open");
  }
}
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tZGFzdC11dGlsLWZyb20tbWFya2Rvd24uMi4wLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvbGliL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtc3RyaW5naWZ5LXBvc2l0aW9uL2xpYi9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWZyb20tbWFya2Rvd24vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1kYXN0X3V0aWxfZnJvbV9tYXJrZG93bl8yXzBfMl9leHBvcnRzIiwiX19leHBvcnQiLCJmcm9tTWFya2Rvd24iLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiZW1wdHlPcHRpb25zIiwidG9TdHJpbmciLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImluY2x1ZGVJbWFnZUFsdCIsImluY2x1ZGVIdG1sIiwib25lIiwibm9kZSIsInR5cGUiLCJhbHQiLCJhbGwiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsInZhbHVlcyIsInJlc3VsdCIsImluZGV4MiIsImxlbmd0aCIsImpvaW4iLCJCb29sZWFuIiwic3RyaW5naWZ5UG9zaXRpb24iLCJwb3NpdGlvbiIsInBvaW50IiwicG9pbnQzIiwiaW5kZXgiLCJsaW5lIiwiY29sdW1uIiwicG9zIiwic3RhcnQiLCJlbmQiLCJpbXBvcnRfbWljcm9tYXJrIiwicmVxdWlyZSIsImltcG9ydF9taWNyb21hcmtfdXRpbF9kZWNvZGVfbnVtZXJpY19jaGFyYWN0ZXJfcmVmZXJlbmNlIiwiaW1wb3J0X21pY3JvbWFya191dGlsX2RlY29kZV9zdHJpbmciLCJpbXBvcnRfbWljcm9tYXJrX3V0aWxfbm9ybWFsaXplX2lkZW50aWZpZXIiLCJpbXBvcnRfZGVjb2RlX25hbWVkX2NoYXJhY3Rlcl9yZWZlcmVuY2UiLCJvd24iLCJoYXNPd25Qcm9wZXJ0eSIsImVuY29kaW5nIiwiY29tcGlsZXIiLCJwb3N0cHJvY2VzcyIsInBhcnNlIiwiZG9jdW1lbnQiLCJ3cml0ZSIsInByZXByb2Nlc3MiLCJjb25maWciLCJ0cmFuc2Zvcm1zIiwiY2FuQ29udGFpbkVvbHMiLCJlbnRlciIsImF1dG9saW5rIiwib3BlbmVyIiwibGluayIsImF1dG9saW5rUHJvdG9jb2wiLCJvbmVudGVyZGF0YSIsImF1dG9saW5rRW1haWwiLCJhdHhIZWFkaW5nIiwiaGVhZGluZyIsImJsb2NrUXVvdGUiLCJjaGFyYWN0ZXJFc2NhcGUiLCJjaGFyYWN0ZXJSZWZlcmVuY2UiLCJjb2RlRmVuY2VkIiwiY29kZUZsb3ciLCJjb2RlRmVuY2VkRmVuY2VJbmZvIiwiYnVmZmVyIiwiY29kZUZlbmNlZEZlbmNlTWV0YSIsImNvZGVJbmRlbnRlZCIsImNvZGVUZXh0IiwiY29kZVRleHREYXRhIiwiZGF0YSIsImNvZGVGbG93VmFsdWUiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nIiwiZGVmaW5pdGlvbkxhYmVsU3RyaW5nIiwiZGVmaW5pdGlvblRpdGxlU3RyaW5nIiwiZW1waGFzaXMiLCJoYXJkQnJlYWtFc2NhcGUiLCJoYXJkQnJlYWsiLCJoYXJkQnJlYWtUcmFpbGluZyIsImh0bWxGbG93IiwiaHRtbCIsImh0bWxGbG93RGF0YSIsImh0bWxUZXh0IiwiaHRtbFRleHREYXRhIiwiaW1hZ2UiLCJsYWJlbCIsImxpc3RJdGVtIiwibGlzdEl0ZW1WYWx1ZSIsIm9uZW50ZXJsaXN0aXRlbXZhbHVlIiwibGlzdE9yZGVyZWQiLCJsaXN0Iiwib25lbnRlcmxpc3RvcmRlcmVkIiwibGlzdFVub3JkZXJlZCIsInBhcmFncmFwaCIsInJlZmVyZW5jZSIsIm9uZW50ZXJyZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJyZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nIiwicmVzb3VyY2VUaXRsZVN0cmluZyIsInNldGV4dEhlYWRpbmciLCJzdHJvbmciLCJ0aGVtYXRpY0JyZWFrIiwiZXhpdCIsImNsb3NlciIsImF0eEhlYWRpbmdTZXF1ZW5jZSIsIm9uZXhpdGF0eGhlYWRpbmdzZXF1ZW5jZSIsIm9uZXhpdGF1dG9saW5rZW1haWwiLCJvbmV4aXRhdXRvbGlua3Byb3RvY29sIiwiY2hhcmFjdGVyRXNjYXBlVmFsdWUiLCJvbmV4aXRkYXRhIiwiY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWwiLCJvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIiLCJjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljIiwiY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUiLCJvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2V2YWx1ZSIsIm9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZSIsIm9uZXhpdGNvZGVmZW5jZWQiLCJjb2RlRmVuY2VkRmVuY2UiLCJvbmV4aXRjb2RlZmVuY2VkZmVuY2UiLCJvbmV4aXRjb2RlZmVuY2VkZmVuY2VpbmZvIiwib25leGl0Y29kZWZlbmNlZGZlbmNlbWV0YSIsIm9uZXhpdGNvZGVpbmRlbnRlZCIsIm9uZXhpdGNvZGV0ZXh0Iiwib25leGl0ZGVmaW5pdGlvbmRlc3RpbmF0aW9uc3RyaW5nIiwib25leGl0ZGVmaW5pdGlvbmxhYmVsc3RyaW5nIiwib25leGl0ZGVmaW5pdGlvbnRpdGxlc3RyaW5nIiwib25leGl0aGFyZGJyZWFrIiwib25leGl0aHRtbGZsb3ciLCJvbmV4aXRodG1sdGV4dCIsIm9uZXhpdGltYWdlIiwib25leGl0bGFiZWwiLCJsYWJlbFRleHQiLCJvbmV4aXRsYWJlbHRleHQiLCJsaW5lRW5kaW5nIiwib25leGl0bGluZWVuZGluZyIsIm9uZXhpdGxpbmsiLCJvbmV4aXRyZWZlcmVuY2VzdHJpbmciLCJvbmV4aXRyZXNvdXJjZWRlc3RpbmF0aW9uc3RyaW5nIiwib25leGl0cmVzb3VyY2V0aXRsZXN0cmluZyIsInJlc291cmNlIiwib25leGl0cmVzb3VyY2UiLCJvbmV4aXRzZXRleHRoZWFkaW5nIiwic2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZSIsIm9uZXhpdHNldGV4dGhlYWRpbmdsaW5lc2VxdWVuY2UiLCJzZXRleHRIZWFkaW5nVGV4dCIsIm9uZXhpdHNldGV4dGhlYWRpbmd0ZXh0IiwiY29uZmlndXJlIiwibWRhc3RFeHRlbnNpb25zIiwiY29tcGlsZSIsImV2ZW50cyIsInRyZWUiLCJjb250ZXh0Iiwic3RhY2siLCJ0b2tlblN0YWNrIiwicmVzdW1lIiwibGlzdFN0YWNrIiwicHVzaCIsInRhaWwiLCJwb3AiLCJwcmVwYXJlTGlzdCIsImhhbmRsZXIiLCJjYWxsIiwiT2JqZWN0IiwiYXNzaWduIiwic2xpY2VTZXJpYWxpemUiLCJkZWZhdWx0T25FcnJvciIsInBvaW50MiIsIm9mZnNldCIsImNvbnRhaW5lckJhbGFuY2UiLCJsaXN0U3ByZWFkIiwibGlzdEl0ZW0yIiwibGluZUluZGV4IiwiZmlyc3RCbGFua0xpbmVJbmRleCIsImF0TWFya2VyIiwiZXZlbnQiLCJ0YWlsSW5kZXgiLCJ0YWlsRXZlbnQiLCJfc3ByZWFkIiwic3BsaWNlIiwiaXRlbSIsImNyZWF0ZSIsImFuZCIsIm9wZW4iLCJ0b2tlbiIsIm5vZGUyIiwiZXJyb3JIYW5kbGVyIiwicGFyZW50Iiwic2libGluZ3MiLCJjbG9zZSIsIm9uRXhpdEVycm9yIiwiRXJyb3IiLCJleHBlY3RpbmdGaXJzdExpc3RJdGVtVmFsdWUiLCJhbmNlc3RvciIsIk51bWJlciIsInBhcnNlSW50IiwiZGF0YTIiLCJsYW5nIiwibWV0YSIsImZsb3dDb2RlSW5zaWRlIiwicmVwbGFjZSIsImlkZW50aWZpZXIiLCJub3JtYWxpemVJZGVudGlmaWVyIiwidG9Mb3dlckNhc2UiLCJ0aXRsZSIsInVybCIsImRlcHRoIiwic2V0ZXh0SGVhZGluZ1NsdXJwTGluZUVuZGluZyIsImNvZGVQb2ludEF0IiwidGV4dCIsImF0SGFyZEJyZWFrIiwiaW5jbHVkZXMiLCJpblJlZmVyZW5jZSIsInJlZmVyZW5jZVR5cGUiLCJzdHJpbmciLCJkZWNvZGVTdHJpbmciLCJmcmFnbWVudCIsImNoYXJhY3RlclJlZmVyZW5jZVR5cGUiLCJkZWNvZGVOdW1lcmljQ2hhcmFjdGVyUmVmZXJlbmNlIiwiZGVjb2RlTmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UiLCJvcmRlcmVkIiwic3ByZWFkIiwiY2hlY2tlZCIsImQiLCJjb21iaW5lZCIsImV4dGVuc2lvbnMiLCJleHRlbnNpb24iLCJleHRlbnNpb24yIiwia2V5IiwicmlnaHQiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxzQ0FBQTtBQUFBQyxRQUFBLENBQUFELHNDQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFMLHNDQUFBOzs7QUNZQSxJQUFNTSxZQUFBLEdBQWUsQ0FBQztBQWVmLFNBQVNDLFNBQVNDLEtBQUEsRUFBT0MsT0FBQSxFQUFTO0VBQ3ZDLE1BQU1DLFFBQUEsR0FBV0QsT0FBQSxJQUFXSCxZQUFBO0VBQzVCLE1BQU1LLGVBQUEsR0FDSixPQUFPRCxRQUFBLENBQVNDLGVBQUEsS0FBb0IsWUFDaENELFFBQUEsQ0FBU0MsZUFBQSxHQUNUO0VBQ04sTUFBTUMsV0FBQSxHQUNKLE9BQU9GLFFBQUEsQ0FBU0UsV0FBQSxLQUFnQixZQUFZRixRQUFBLENBQVNFLFdBQUEsR0FBYztFQUVyRSxPQUFPQyxHQUFBLENBQUlMLEtBQUEsRUFBT0csZUFBQSxFQUFpQkMsV0FBVztBQUNoRDtBQWNBLFNBQVNDLElBQUlMLEtBQUEsRUFBT0csZUFBQSxFQUFpQkMsV0FBQSxFQUFhO0VBQ2hELElBQUlFLElBQUEsQ0FBS04sS0FBSyxHQUFHO0lBQ2YsSUFBSSxXQUFXQSxLQUFBLEVBQU87TUFDcEIsT0FBT0EsS0FBQSxDQUFNTyxJQUFBLEtBQVMsVUFBVSxDQUFDSCxXQUFBLEdBQWMsS0FBS0osS0FBQSxDQUFNQSxLQUFBO0lBQzVEO0lBRUEsSUFBSUcsZUFBQSxJQUFtQixTQUFTSCxLQUFBLElBQVNBLEtBQUEsQ0FB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