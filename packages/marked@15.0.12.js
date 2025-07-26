System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked","15.0.12"]]);
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
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// .beyond/uimport/temp/marked.15.0.12.js
var marked_15_0_12_exports = {};
__export(marked_15_0_12_exports, {
  Hooks: () => _Hooks,
  Lexer: () => _Lexer,
  Marked: () => Marked,
  Parser: () => _Parser,
  Renderer: () => _Renderer,
  TextRenderer: () => _TextRenderer,
  Tokenizer: () => _Tokenizer,
  defaults: () => _defaults,
  getDefaults: () => _getDefaults,
  lexer: () => lexer,
  marked: () => marked,
  options: () => options,
  parse: () => parse,
  parseInline: () => parseInline,
  parser: () => parser,
  setOptions: () => setOptions,
  use: () => use,
  walkTokens: () => walkTokens
});
module.exports = __toCommonJS(marked_15_0_12_exports);

// node_modules/marked/lib/marked.esm.js
var _a;
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
var noopTest = {
  exec: () => null
};
function edit(regex, opt = "") {
  let source = typeof regex === "string" ? regex : regex.source;
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(other.caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
var other = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: bull => new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: indent => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: indent => new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: indent => new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: indent => new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`),
  htmlBeginRegex: indent => new RegExp(`^ {0,${Math.min(3, indent - 1)}}<(?:[a-z].*>|!--)`, "i")
};
var newline = /^(?:[ \t]*(?:\n|$))+/;
var blockCode = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheadingCore = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var lheading = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var lheadingGfm = edit(lheadingCore).replace(/bull/g, bullet).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
var blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
  lheading: lheadingGfm,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
var blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var _punctuation = /[\p{P}\p{S}]/u;
var _punctuationOrSpace = /[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpace = /[^\s\p{P}\p{S}]/u;
var punctuation = edit(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _punctuationOrSpace).getRegex();
var _punctuationGfmStrongEm = /(?!~)[\p{P}\p{S}]/u;
var _punctuationOrSpaceGfmStrongEm = /(?!~)[\s\p{P}\p{S}]/u;
var _notPunctuationOrSpaceGfmStrongEm = /(?:[^\s\p{P}\p{S}]|~)/u;
var blockSkip = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelimCore = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var emStrongLDelim = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongLDelimGfm = edit(emStrongLDelimCore, "u").replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimAstCore = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var emStrongRDelimAst = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAstGfm = edit(emStrongRDelimAstCore, "gu").replace(/notPunctSpace/g, _notPunctuationOrSpaceGfmStrongEm).replace(/punctSpace/g, _punctuationOrSpaceGfmStrongEm).replace(/punct/g, _punctuationGfmStrongEm).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, _notPunctuationOrSpace).replace(/punctSpace/g, _punctuationOrSpace).replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\(punct)/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
var reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
var inlineNormal = {
  _backpedal: noopTest,
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
var inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
var inlineGfm = {
  ...inlineNormal,
  emStrongRDelimAst: emStrongRDelimAstGfm,
  emStrongLDelim: emStrongLDelimGfm,
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
var inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = ch => escapeReplacements[ch];
function escape2(html2, encode) {
  if (encode) {
    if (other.escapeTest.test(html2)) {
      return html2.replace(other.escapeReplace, getEscapeReplacement);
    }
  } else {
    if (other.escapeTestNoEncode.test(html2)) {
      return html2.replace(other.escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(other.percentDecode, "%");
  } catch {
    return null;
  }
  return href;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(other.findPipe, (match, offset, str) => {
      let escaped = false;
      let curr = offset;
      while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }),
    cells = row.split(other.splitPipe);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells.at(-1)?.trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push("");
    }
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(other.slashPipe, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  if (level > 0) {
    return -2;
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer2, rules) {
  const href = link2.href;
  const title = link2.title || null;
  const text = cap[1].replace(rules.other.outputLinkReplace, "$1");
  lexer2.state.inLink = true;
  const token = {
    type: cap[0].charAt(0) === "!" ? "image" : "link",
    raw,
    href,
    title,
    text,
    tokens: lexer2.inlineTokens(text)
  };
  lexer2.state.inLink = false;
  return token;
}
function indentCodeCompensation(raw, text, rules) {
  const matchIndentToCode = raw.match(rules.other.indentCodeCompensation);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map(node => {
    const matchIndentInNode = node.match(rules.other.beginningSpace);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var _Tokenizer = class {
  options;
  rules;
  lexer;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "", this.rules);
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (this.rules.other.endingHash.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || this.rules.other.endingSpaceChar.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i;
        for (i = 0; i < lines.length; i++) {
          if (this.rules.other.blockquoteStart.test(lines[i])) {
            currentLines.push(lines[i]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i]);
          } else {
            break;
          }
        }
        lines = lines.slice(i);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text = text ? `${text}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "code") {
          break;
        } else if (lastToken?.type === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.text.length) + newToken.text;
          break;
        } else if (lastToken?.type === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text = text.substring(0, text.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens.at(-1).raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = this.rules.other.listItemRegex(bull);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, t => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(this.rules.other.nonSpaceChar);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && this.rules.other.blankLine.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = this.rules.other.nextBulletRegex(indent);
          const hrRegex = this.rules.other.hrRegex(indent);
          const fencesBeginRegex = this.rules.other.fencesBeginRegex(indent);
          const headingBeginRegex = this.rules.other.headingBeginRegex(indent);
          const htmlBeginRegex = this.rules.other.htmlBeginRegex(indent);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            let nextLineWithoutTabs;
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(this.rules.other.listReplaceNesting, "  ");
              nextLineWithoutTabs = nextLine;
            } else {
              nextLineWithoutTabs = nextLine.replace(this.rules.other.tabCharGlobal, "    ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (htmlBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(nextLine)) {
              break;
            }
            if (nextLineWithoutTabs.search(this.rules.other.nonSpaceChar) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLineWithoutTabs.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLineWithoutTabs.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (this.rules.other.doubleBlankLine.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = this.rules.other.listIsTask.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(this.rules.other.listReplaceTask, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      const lastItem = list2.items.at(-1);
      if (lastItem) {
        lastItem.raw = lastItem.raw.trimEnd();
        lastItem.text = lastItem.text.trimEnd();
      } else {
        return;
      }
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter(t => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => this.rules.other.anyLine.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i = 0; i < list2.items.length; i++) {
          list2.items[i].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " ");
      const href = cap[2] ? cap[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!this.rules.other.tableDelimiter.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(this.rules.other.tableAlignChars, "").split("|");
    const rows = cap[3]?.trim() ? cap[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (this.rules.other.tableAlignRight.test(align)) {
        item.align.push("right");
      } else if (this.rules.other.tableAlignCenter.test(align)) {
        item.align.push("center");
      } else if (this.rules.other.tableAlignLeft.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i = 0; i < headers.length; i++) {
      item.header.push({
        text: headers[i],
        tokens: this.lexer.inline(headers[i]),
        header: true,
        align: item.align[i]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: cap[1]
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && this.rules.other.startATag.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && this.rules.other.endATag.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(trimmedUrl)) {
        if (!this.rules.other.endAngleBracket.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex === -2) {
          return;
        }
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = this.rules.other.pedanticHrefTitle.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (this.rules.other.startAngleBracket.test(href)) {
        if (this.options.pedantic && !this.rules.other.endAngleBracket.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer, this.rules);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(this.rules.other.multipleSpaceGlobal, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer, this.rules);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(this.rules.other.unicodeAlphaNumeric)) return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim,
        rLength,
        delimTotal = lLength,
        midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim) continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0) continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(this.rules.other.newLineCharGlobal, " ");
      const hasNonSpaceChars = this.rules.other.nonSpaceChar.test(text);
      const hasSpaceCharsOnBothEnds = this.rules.other.startingSpaceChar.test(text) && this.rules.other.endingSpaceChar.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[1];
        href = "mailto:" + text;
      } else {
        text = cap[1];
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: "text",
          raw: text,
          text
        }]
      };
    }
  }
  url(src) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = cap[0];
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = cap[0];
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [{
          type: "text",
          raw: text,
          text
        }]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      const escaped = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        escaped
      };
    }
  }
};
var _Lexer = class __Lexer {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */Object.create(null);
    this.options = options2 || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      other,
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.lex(src);
  }
  static lexInline(src, options2) {
    const lexer2 = new __Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(other.carriageReturn, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(other.tabCharGlobal, "    ").replace(other.spaceLine, "");
    }
    while (src) {
      let token;
      if (this.options.extensions?.block?.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.raw.length === 1 && lastToken !== void 0) {
          lastToken.raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "paragraph" || lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue.at(-1).src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(getStartIndex => {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        const lastToken = tokens.at(-1);
        if (lastParagraphClipped && lastToken?.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue.at(-1).src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({
      src,
      tokens
    });
    return tokens;
  }
  inlineTokens(src, tokens = []) {
    let maskedSrc = src;
    let match = null;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    let keepPrevChar = false;
    let prevChar = "";
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      let token;
      if (this.options.extensions?.inline?.some(extTokenizer => {
        if (token = extTokenizer.call({
          lexer: this
        }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        const lastToken = tokens.at(-1);
        if (token.type === "text" && lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      let cutSrc = src;
      if (this.options.extensions?.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(getStartIndex => {
          tempStart = getStartIndex.call({
            lexer: this
          }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        const lastToken = tokens.at(-1);
        if (lastToken?.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var _Renderer = class {
  options;
  parser;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  space(token) {
    return "";
  }
  code({
    text,
    lang,
    escaped
  }) {
    const langString = (lang || "").match(other.notSpaceStart)?.[0];
    const code = text.replace(other.endingNewline, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape2(langString) + '">' + (escaped ? code : escape2(code, true)) + "</code></pre>\n";
  }
  blockquote({
    tokens
  }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({
    text
  }) {
    return text;
  }
  heading({
    tokens,
    depth
  }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({
        checked: !!item.checked
      });
      if (item.loose) {
        if (item.tokens[0]?.type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + escape2(item.tokens[0].tokens[0].text);
            item.tokens[0].tokens[0].escaped = true;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " ",
            escaped: true
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({
    checked
  }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({
    tokens
  }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j = 0; j < token.header.length; j++) {
      cell += this.tablecell(token.header[j]);
    }
    header += this.tablerow({
      text: cell
    });
    let body = "";
    for (let j = 0; j < token.rows.length; j++) {
      const row = token.rows[j];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({
        text: cell
      });
    }
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({
    text
  }) {
    return `<tr>
${text}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  strong({
    tokens
  }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({
    tokens
  }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({
    text
  }) {
    return `<code>${escape2(text, true)}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({
    tokens
  }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({
    href,
    title,
    tokens
  }) {
    const text = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + escape2(title) + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image({
    href,
    title,
    text,
    tokens
  }) {
    if (tokens) {
      text = this.parser.parseInline(tokens, this.parser.textRenderer);
    }
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return escape2(text);
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${escape2(title)}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : "escaped" in token && token.escaped ? token.text : escape2(token.text);
  }
};
var _TextRenderer = class {
  strong({
    text
  }) {
    return text;
  }
  em({
    text
  }) {
    return text;
  }
  codespan({
    text
  }) {
    return text;
  }
  del({
    text
  }) {
    return text;
  }
  html({
    text
  }) {
    return text;
  }
  text({
    text
  }) {
    return text;
  }
  link({
    text
  }) {
    return "" + text;
  }
  image({
    text
  }) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class __Parser {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  static parse(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options2) {
    const parser2 = new __Parser(options2);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({
          parser: this
        }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space":
          {
            out += this.renderer.space(token);
            continue;
          }
        case "hr":
          {
            out += this.renderer.hr(token);
            continue;
          }
        case "heading":
          {
            out += this.renderer.heading(token);
            continue;
          }
        case "code":
          {
            out += this.renderer.code(token);
            continue;
          }
        case "table":
          {
            out += this.renderer.table(token);
            continue;
          }
        case "blockquote":
          {
            out += this.renderer.blockquote(token);
            continue;
          }
        case "list":
          {
            out += this.renderer.list(token);
            continue;
          }
        case "html":
          {
            out += this.renderer.html(token);
            continue;
          }
        case "paragraph":
          {
            out += this.renderer.paragraph(token);
            continue;
          }
        case "text":
          {
            let textToken = token;
            let body = this.renderer.text(textToken);
            while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
              textToken = tokens[++i];
              body += "\n" + this.renderer.text(textToken);
            }
            if (top) {
              out += this.renderer.paragraph({
                type: "paragraph",
                raw: body,
                text: body,
                tokens: [{
                  type: "text",
                  raw: body,
                  text: body,
                  escaped: true
                }]
              });
            } else {
              out += body;
            }
            continue;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
  parseInline(tokens, renderer = this.renderer) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const anyToken = tokens[i];
      if (this.options.extensions?.renderers?.[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({
          parser: this
        }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape":
          {
            out += renderer.text(token);
            break;
          }
        case "html":
          {
            out += renderer.html(token);
            break;
          }
        case "link":
          {
            out += renderer.link(token);
            break;
          }
        case "image":
          {
            out += renderer.image(token);
            break;
          }
        case "strong":
          {
            out += renderer.strong(token);
            break;
          }
        case "em":
          {
            out += renderer.em(token);
            break;
          }
        case "codespan":
          {
            out += renderer.codespan(token);
            break;
          }
        case "br":
          {
            out += renderer.br(token);
            break;
          }
        case "del":
          {
            out += renderer.del(token);
            break;
          }
        case "text":
          {
            out += renderer.text(token);
            break;
          }
        default:
          {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return "";
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
    return out;
  }
};
var _Hooks = (_a = class {
  options;
  block;
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  preprocess(markdown) {
    return markdown;
  }
  postprocess(html2) {
    return html2;
  }
  processAllTokens(tokens) {
    return tokens;
  }
  provideLexer() {
    return this.block ? _Lexer.lex : _Lexer.lexInline;
  }
  provideParser() {
    return this.block ? _Parser.parse : _Parser.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */new Set(["preprocess", "postprocess", "processAllTokens"])), _a);
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = _Parser;
  Renderer = _Renderer;
  TextRenderer = _TextRenderer;
  Lexer = _Lexer;
  Tokenizer = _Tokenizer;
  Hooks = _Hooks;
  constructor(...args) {
    this.use(...args);
  }
  walkTokens(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table":
          {
            const tableToken = token;
            for (const cell of tableToken.header) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
            for (const row of tableToken.rows) {
              for (const cell of row) {
                values = values.concat(this.walkTokens(cell.tokens, callback));
              }
            }
            break;
          }
        case "list":
          {
            const listToken = token;
            values = values.concat(this.walkTokens(listToken.items, callback));
            break;
          }
        default:
          {
            const genericToken = token;
            if (this.defaults.extensions?.childTokens?.[genericToken.type]) {
              this.defaults.extensions.childTokens[genericToken.type].forEach(childTokens => {
                const tokens2 = genericToken[childTokens].flat(Infinity);
                values = values.concat(this.walkTokens(tokens2, callback));
              });
            } else if (genericToken.tokens) {
              values = values.concat(this.walkTokens(genericToken.tokens, callback));
            }
          }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || {
      renderers: {},
      childTokens: {}
    };
    args.forEach(pack => {
      const opts = {
        ...pack
      };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach(ext => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function (...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          const rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (["options", "block"].includes(prop)) {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = arg => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then(ret2 => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens2 = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function (token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens2) {
            values = values.concat(walkTokens2.call(this, token));
          }
          return values;
        };
      }
      this.defaults = {
        ...this.defaults,
        ...opts
      };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = {
      ...this.defaults,
      ...opt
    };
    return this;
  }
  lexer(src, options2) {
    return _Lexer.lex(src, options2 ?? this.defaults);
  }
  parser(tokens, options2) {
    return _Parser.parse(tokens, options2 ?? this.defaults);
  }
  parseMarkdown(blockType) {
    const parse2 = (src, options2) => {
      const origOpt = {
        ...options2
      };
      const opt = {
        ...this.defaults,
        ...origOpt
      };
      const throwError = this.onError(!!opt.silent, !!opt.async);
      if (this.defaults.async === true && origOpt.async === false) {
        return throwError(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      }
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
        opt.hooks.block = blockType;
      }
      const lexer2 = opt.hooks ? opt.hooks.provideLexer() : blockType ? _Lexer.lex : _Lexer.lexInline;
      const parser2 = opt.hooks ? opt.hooks.provideParser() : blockType ? _Parser.parse : _Parser.parseInline;
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(src2 => lexer2(src2, opt)).then(tokens => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then(tokens => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then(tokens => parser2(tokens, opt)).then(html2 => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        let tokens = lexer2(src, opt);
        if (opt.hooks) {
          tokens = opt.hooks.processAllTokens(tokens);
        }
        if (opt.walkTokens) {
          this.walkTokens(tokens, opt.walkTokens);
        }
        let html2 = parser2(tokens, opt);
        if (opt.hooks) {
          html2 = opt.hooks.postprocess(html2);
        }
        return html2;
      } catch (e) {
        return throwError(e);
      }
    };
    return parse2;
  }
  onError(silent, async) {
    return e => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      throw e;
    };
  }
};
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function (options2) {
  markedInstance.setOptions(options2);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function (...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parse = marked;
var parser = _Parser.parse;
var lexer = _Lexer.lex;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC4xNS4wLjEyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvZGVmYXVsdHMudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9ydWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL2hlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9Ub2tlbml6ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9MZXhlci50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL1JlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvVGV4dFJlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvUGFyc2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvSG9va3MudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9JbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL21hcmtlZC50cyJdLCJuYW1lcyI6WyJtYXJrZWRfMTVfMF8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJIb29rcyIsIl9Ib29rcyIsIkxleGVyIiwiX0xleGVyIiwiTWFya2VkIiwiUGFyc2VyIiwiX1BhcnNlciIsIlJlbmRlcmVyIiwiX1JlbmRlcmVyIiwiVGV4dFJlbmRlcmVyIiwiX1RleHRSZW5kZXJlciIsIlRva2VuaXplciIsIl9Ub2tlbml6ZXIiLCJkZWZhdWx0cyIsIl9kZWZhdWx0cyIsImdldERlZmF1bHRzIiwiX2dldERlZmF1bHRzIiwibGV4ZXIiLCJtYXJrZWQiLCJvcHRpb25zIiwicGFyc2UiLCJwYXJzZUlubGluZSIsInBhcnNlciIsInNldE9wdGlvbnMiLCJ1c2UiLCJ3YWxrVG9rZW5zIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsImFzeW5jIiwiYnJlYWtzIiwiZXh0ZW5zaW9ucyIsImdmbSIsImhvb2tzIiwicGVkYW50aWMiLCJyZW5kZXJlciIsInNpbGVudCIsInRva2VuaXplciIsImNoYW5nZURlZmF1bHRzIiwibmV3RGVmYXVsdHMiLCJub29wVGVzdCIsImV4ZWMiLCJlZGl0IiwicmVnZXgiLCJvcHQiLCJzb3VyY2UiLCJvYmoiLCJyZXBsYWNlIiwibmFtZSIsInZhbCIsInZhbFNvdXJjZSIsIm90aGVyIiwiY2FyZXQiLCJnZXRSZWdleCIsIlJlZ0V4cCIsImNvZGVSZW1vdmVJbmRlbnQiLCJvdXRwdXRMaW5rUmVwbGFjZSIsImluZGVudENvZGVDb21wZW5zYXRpb24iLCJiZWdpbm5pbmdTcGFjZSIsImVuZGluZ0hhc2giLCJzdGFydGluZ1NwYWNlQ2hhciIsImVuZGluZ1NwYWNlQ2hhciIsIm5vblNwYWNlQ2hhciIsIm5ld0xpbmVDaGFyR2xvYmFsIiwidGFiQ2hhckdsb2JhbCIsIm11bHRpcGxlU3BhY2VHbG9iYWwiLCJibGFua0xpbmUiLCJkb3VibGVCbGFua0xpbmUiLCJibG9ja3F1b3RlU3RhcnQiLCJibG9ja3F1b3RlU2V0ZXh0UmVwbGFjZSIsImJsb2NrcXVvdGVTZXRleHRSZXBsYWNlMiIsImxpc3RSZXBsYWNlVGFicyIsImxpc3RSZXBsYWNlTmVzdGluZyIsImxpc3RJc1Rhc2siLCJsaXN0UmVwbGFjZVRhc2siLCJhbnlMaW5lIiwiaHJlZkJyYWNrZXRzIiwidGFibGVEZWxpbWl0ZXIiLCJ0YWJsZUFsaWduQ2hhcnMiLCJ0YWJsZVJvd0JsYW5rTGluZSIsInRhYmxlQWxpZ25SaWdodCIsInRhYmxlQWxpZ25DZW50ZXIiLCJ0YWJsZUFsaWduTGVmdCIsInN0YXJ0QVRhZyIsImVuZEFUYWciLCJzdGFydFByZVNjcmlwdFRhZyIsImVuZFByZVNjcmlwdFRhZyIsInN0YXJ0QW5nbGVCcmFja2V0IiwiZW5kQW5nbGVCcmFja2V0IiwicGVkYW50aWNIcmVmVGl0bGUiLCJ1bmljb2RlQWxwaGFOdW1lcmljIiwiZXNjYXBlVGVzdCIsImVzY2FwZVJlcGxhY2UiLCJlc2NhcGVUZXN0Tm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlTm9FbmNvZGUiLCJ1bmVzY2FwZVRlc3QiLCJwZXJjZW50RGVjb2RlIiwiZmluZFBpcGUiLCJzcGxpdFBpcGUiLCJzbGFzaFBpcGUiLCJjYXJyaWFnZVJldHVybiIsInNwYWNlTGluZSIsIm5vdFNwYWNlU3RhcnQiLCJlbmRpbmdOZXdsaW5lIiwibGlzdEl0ZW1SZWdleCIsImJ1bGwiLCJuZXh0QnVsbGV0UmVnZXgiLCJpbmRlbnQiLCJNYXRoIiwibWluIiwiaHJSZWdleCIsImZlbmNlc0JlZ2luUmVnZXgiLCJoZWFkaW5nQmVnaW5SZWdleCIsImh0bWxCZWdpblJlZ2V4IiwibmV3bGluZSIsImJsb2NrQ29kZSIsImZlbmNlcyIsImhyIiwiaGVhZGluZyIsImJ1bGxldCIsImxoZWFkaW5nQ29yZSIsImxoZWFkaW5nIiwibGhlYWRpbmdHZm0iLCJfcGFyYWdyYXBoIiwiYmxvY2tUZXh0IiwiX2Jsb2NrTGFiZWwiLCJkZWYiLCJsaXN0IiwiX3RhZyIsIl9jb21tZW50IiwiaHRtbCIsInBhcmFncmFwaCIsImJsb2NrcXVvdGUiLCJibG9ja05vcm1hbCIsImNvZGUiLCJ0YWJsZSIsInRleHQiLCJnZm1UYWJsZSIsImJsb2NrR2ZtIiwiYmxvY2tQZWRhbnRpYyIsImVzY2FwZSIsImlubGluZUNvZGUiLCJiciIsImlubGluZVRleHQiLCJfcHVuY3R1YXRpb24iLCJfcHVuY3R1YXRpb25PclNwYWNlIiwiX25vdFB1bmN0dWF0aW9uT3JTcGFjZSIsInB1bmN0dWF0aW9uIiwiX3B1bmN0dWF0aW9uR2ZtU3Ryb25nRW0iLCJfcHVuY3R1YXRpb25PclNwYWNlR2ZtU3Ryb25nRW0iLCJfbm90UHVuY3R1YXRpb25PclNwYWNlR2ZtU3Ryb25nRW0iLCJibG9ja1NraXAiLCJlbVN0cm9uZ0xEZWxpbUNvcmUiLCJlbVN0cm9uZ0xEZWxpbSIsImVtU3Ryb25nTERlbGltR2ZtIiwiZW1TdHJvbmdSRGVsaW1Bc3RDb3JlIiwiZW1TdHJvbmdSRGVsaW1Bc3QiLCJlbVN0cm9uZ1JEZWxpbUFzdEdmbSIsImVtU3Ryb25nUkRlbGltVW5kIiwiYW55UHVuY3R1YXRpb24iLCJhdXRvbGluayIsIl9pbmxpbmVDb21tZW50IiwidGFnIiwiX2lubGluZUxhYmVsIiwibGluayIsInJlZmxpbmsiLCJub2xpbmsiLCJyZWZsaW5rU2VhcmNoIiwiaW5saW5lTm9ybWFsIiwiX2JhY2twZWRhbCIsImRlbCIsInVybCIsImlubGluZVBlZGFudGljIiwiaW5saW5lR2ZtIiwiaW5saW5lQnJlYWtzIiwiYmxvY2siLCJub3JtYWwiLCJpbmxpbmUiLCJlc2NhcGVSZXBsYWNlbWVudHMiLCJnZXRFc2NhcGVSZXBsYWNlbWVudCIsImNoIiwiZXNjYXBlMiIsImh0bWwyIiwiZW5jb2RlIiwidGVzdCIsImNsZWFuVXJsIiwiaHJlZiIsImVuY29kZVVSSSIsInNwbGl0Q2VsbHMiLCJ0YWJsZVJvdyIsImNvdW50Iiwicm93IiwibWF0Y2giLCJvZmZzZXQiLCJzdHIiLCJlc2NhcGVkIiwiY3VyciIsImNlbGxzIiwic3BsaXQiLCJpIiwidHJpbSIsInNoaWZ0IiwibGVuZ3RoIiwiYXQiLCJwb3AiLCJzcGxpY2UiLCJwdXNoIiwicnRyaW0iLCJjIiwiaW52ZXJ0IiwibCIsInN1ZmZMZW4iLCJjdXJyQ2hhciIsImNoYXJBdCIsInNsaWNlIiwiZmluZENsb3NpbmdCcmFja2V0IiwiYiIsImluZGV4T2YiLCJsZXZlbCIsIm91dHB1dExpbmsiLCJjYXAiLCJsaW5rMiIsInJhdyIsImxleGVyMiIsInJ1bGVzIiwidGl0bGUiLCJzdGF0ZSIsImluTGluayIsInRva2VuIiwidHlwZSIsInRva2VucyIsImlubGluZVRva2VucyIsIm1hdGNoSW5kZW50VG9Db2RlIiwiaW5kZW50VG9Db2RlIiwibWFwIiwibm9kZSIsIm1hdGNoSW5kZW50SW5Ob2RlIiwiaW5kZW50SW5Ob2RlIiwiam9pbiIsImNvbnN0cnVjdG9yIiwib3B0aW9uczIiLCJzcGFjZSIsInNyYyIsImNvZGVCbG9ja1N0eWxlIiwibGFuZyIsInRyaW1tZWQiLCJkZXB0aCIsImxpbmVzIiwiaW5CbG9ja3F1b3RlIiwiY3VycmVudExpbmVzIiwiY3VycmVudFJhdyIsImN1cnJlbnRUZXh0IiwidG9wIiwiYmxvY2tUb2tlbnMiLCJsYXN0VG9rZW4iLCJvbGRUb2tlbiIsIm5ld1RleHQiLCJuZXdUb2tlbiIsInN1YnN0cmluZyIsImlzb3JkZXJlZCIsImxpc3QyIiwib3JkZXJlZCIsInN0YXJ0IiwibG9vc2UiLCJpdGVtcyIsIml0ZW1SZWdleCIsImVuZHNXaXRoQmxhbmtMaW5lIiwiZW5kRWFybHkiLCJpdGVtQ29udGVudHMiLCJsaW5lIiwidCIsInJlcGVhdCIsIm5leHRMaW5lIiwidHJpbVN0YXJ0Iiwic2VhcmNoIiwicmF3TGluZSIsIm5leHRMaW5lV2l0aG91dFRhYnMiLCJpc3Rhc2siLCJpc2NoZWNrZWQiLCJ0YXNrIiwiY2hlY2tlZCIsImxhc3RJdGVtIiwidHJpbUVuZCIsInNwYWNlcnMiLCJmaWx0ZXIiLCJoYXNNdWx0aXBsZUxpbmVCcmVha3MiLCJzb21lIiwicHJlIiwidGFnMiIsInRvTG93ZXJDYXNlIiwiaGVhZGVycyIsImFsaWducyIsInJvd3MiLCJpdGVtIiwiaGVhZGVyIiwiYWxpZ24iLCJjZWxsIiwiaW5SYXdCbG9jayIsInRyaW1tZWRVcmwiLCJydHJpbVNsYXNoIiwibGFzdFBhcmVuSW5kZXgiLCJsaW5rTGVuIiwibGlua3MiLCJsaW5rU3RyaW5nIiwiZW1TdHJvbmciLCJtYXNrZWRTcmMiLCJwcmV2Q2hhciIsIm5leHRDaGFyIiwibExlbmd0aCIsInJEZWxpbSIsInJMZW5ndGgiLCJkZWxpbVRvdGFsIiwibWlkRGVsaW1Ub3RhbCIsImVuZFJlZyIsImxhc3RJbmRleCIsImxhc3RDaGFyTGVuZ3RoIiwiaW5kZXgiLCJ0ZXh0MiIsImNvZGVzcGFuIiwiaGFzTm9uU3BhY2VDaGFycyIsImhhc1NwYWNlQ2hhcnNPbkJvdGhFbmRzIiwicHJldkNhcFplcm8iLCJfX0xleGVyIiwiaW5saW5lUXVldWUiLCJPYmplY3QiLCJjcmVhdGUiLCJsZXgiLCJsZXhJbmxpbmUiLCJuZXh0IiwibGFzdFBhcmFncmFwaENsaXBwZWQiLCJleHRUb2tlbml6ZXIiLCJjYWxsIiwiY3V0U3JjIiwic3RhcnRCbG9jayIsInN0YXJ0SW5kZXgiLCJJbmZpbml0eSIsInRlbXBTcmMiLCJ0ZW1wU3RhcnQiLCJmb3JFYWNoIiwiZ2V0U3RhcnRJbmRleCIsImVyck1zZyIsImNoYXJDb2RlQXQiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImtleXMiLCJpbmNsdWRlcyIsImxhc3RJbmRleE9mIiwia2VlcFByZXZDaGFyIiwic3RhcnRJbmxpbmUiLCJsYW5nU3RyaW5nIiwiYm9keSIsImoiLCJsaXN0aXRlbSIsInN0YXJ0QXR0ciIsIml0ZW1Cb2R5IiwiY2hlY2tib3giLCJ1bnNoaWZ0IiwidGFibGVjZWxsIiwidGFibGVyb3ciLCJrIiwiY29udGVudCIsInN0cm9uZyIsImVtIiwiY2xlYW5IcmVmIiwib3V0IiwiaW1hZ2UiLCJ0ZXh0UmVuZGVyZXIiLCJfX1BhcnNlciIsInBhcnNlcjIiLCJhbnlUb2tlbiIsInJlbmRlcmVycyIsImdlbmVyaWNUb2tlbiIsInJldCIsInRleHRUb2tlbiIsIl9hIiwicHJlcHJvY2VzcyIsIm1hcmtkb3duIiwicG9zdHByb2Nlc3MiLCJwcm9jZXNzQWxsVG9rZW5zIiwicHJvdmlkZUxleGVyIiwicHJvdmlkZVBhcnNlciIsIl9fcHVibGljRmllbGQiLCJTZXQiLCJwYXJzZU1hcmtkb3duIiwiYXJncyIsImNhbGxiYWNrIiwidmFsdWVzIiwiY29uY2F0IiwidGFibGVUb2tlbiIsImxpc3RUb2tlbiIsImNoaWxkVG9rZW5zIiwidG9rZW5zMiIsImZsYXQiLCJwYWNrIiwib3B0cyIsImV4dCIsInByZXZSZW5kZXJlciIsImFyZ3MyIiwiYXBwbHkiLCJleHRMZXZlbCIsInByb3AiLCJyZW5kZXJlclByb3AiLCJyZW5kZXJlckZ1bmMiLCJ0b2tlbml6ZXJQcm9wIiwidG9rZW5pemVyRnVuYyIsInByZXZUb2tlbml6ZXIiLCJob29rc1Byb3AiLCJob29rc0Z1bmMiLCJwcmV2SG9vayIsInBhc3NUaHJvdWdoSG9va3MiLCJoYXMiLCJhcmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXQyIiwid2Fsa1Rva2VuczIiLCJwYWNrV2Fsa3Rva2VucyIsImJsb2NrVHlwZSIsInBhcnNlMiIsIm9yaWdPcHQiLCJ0aHJvd0Vycm9yIiwib25FcnJvciIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwic3JjMiIsImFsbCIsImNhdGNoIiwiZSIsIm1lc3NhZ2UiLCJtc2ciLCJyZWplY3QiLCJtYXJrZWRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHNCQUFBO0FBQUFDLFFBQUEsQ0FBQUQsc0JBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLE1BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsR0FB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RUFBUTRKLFFBQVE7QUFDbkQ7QUFTQWhYLE1BQUEsQ0FBT0csV0FBQSxHQUFjNFosY0FBQSxDQUFlNVosV0FBQTtBQUtwQ0gsTUFBQSxDQUFPYixNQUFBLEdBQVNDLE9BQUE7QUFDaEJZLE1BQUEsQ0FBT0ksTUFBQSxHQUFTaEIsT0FBQSxDQUFRYyxLQUFBO0FBQ3hCRixNQUFBLENBQU9YLFFBQUEsR0FBV0MsU0FBQTtBQUNsQlUsTUFBQSxDQUFPVCxZQUFBLEdBQWVDLGFBQUE7QUFDdEJRLE1BQUEsQ0FBT2hCLEtBQUEsR0FBUUMsTUFBQTtBQUNmZSxNQUFBLENBQU9ELEtBQUEsR0FBUWQsTUFBQSxDQUFPbVUsR0FBQTtBQUN0QnBULE1BQUEsQ0FBT1AsU0FBQSxHQUFZQyxVQUFBO0FBQ25CTSxNQUFBLENBQU9sQixLQUFBLEdBQVFDLE1BQUE7QUFDZmlCLE1BQUEsQ0FBT0UsS0FBQSxHQUFRRixNQUFBO0FBRVIsSUFBTUMsT0FBQSxHQUFVRCxNQUFBLENBQU9DLE9BQUE7QUFDdkIsSUFBTUksVUFBQSxHQUFhTCxNQUFBLENBQU9LLFVBQUE7QUFDMUIsSUFBTUMsR0FBQSxHQUFNTixNQUFBLENBQU9NLEdBQUE7QUFDbkIsSUFBTUMsVUFBQSxHQUFhUCxNQUFBLENBQU9PLFVBQUE7QUFDMUIsSUFBTUosV0FBQSxHQUFjSCxNQUFBLENBQU9HLFdBQUE7QUFDM0IsSUFBTUQsS0FBQSxHQUFRRixNQUFBO0FBQ2QsSUFBTUksTUFBQSxHQUFTaEIsT0FBQSxDQUFRYyxLQUFBO0FBQ3ZCLElBQU1ILEtBQUEsR0FBUWQsTUFBQSxDQUFPbVUsR0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9jbGllbnQvc3JjL291dCJ9