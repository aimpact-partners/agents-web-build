System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["marked","11.2.0"]]);
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

// .beyond/uimport/temp/marked.11.2.0.js
var marked_11_2_0_exports = {};
__export(marked_11_2_0_exports, {
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
module.exports = __toCommonJS(marked_11_2_0_exports);

// node_modules/marked/lib/marked.esm.js
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
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = ch => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon") return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var noopTest = {
  exec: () => null
};
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false;
      let curr = offset;
      while (--curr >= 0 && str[curr] === "\\") escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
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
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
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
  return -1;
}
function outputLink(cap, link2, raw, lexer2) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map(node => {
    const matchIndentInNode = node.match(/^\s+/);
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
      const text = cap[0].replace(/^ {1,4}/gm, "");
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
      const text = indentCodeCompensation(raw, cap[3] || "");
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
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
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
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ""), "\n");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
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
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let raw = "";
      let itemContents = "";
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, t => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        let blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
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
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
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
      list2.items[list2.items.length - 1].raw = raw.trimEnd();
      list2.items[list2.items.length - 1].text = itemContents.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i = 0; i < list2.items.length; i++) {
        this.lexer.state.top = false;
        list2.items[i].tokens = this.lexer.blockTokens(list2.items[i].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i].tokens.filter(t => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some(t => /\n.*\n/.test(t.raw));
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
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
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
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
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
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (const header of headers) {
      item.header.push({
        text: header,
        tokens: this.lexer.inline(header)
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map(cell => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell)
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
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
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
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
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
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match) return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;
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
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
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
        text = escape$1(cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
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
        text = escape$1(cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])?.[0] ?? "";
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
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
      let text;
      if (this.lexer.state.inRawBlock) {
        text = cap[0];
      } else {
        text = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var _comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
var html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
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
var gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
var blockGfm = {
  ...blockNormal,
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
var _punctuation = "\\p{P}$+<=>`^|~";
var punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
var tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
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
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
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
var _Lexer = class {
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
    const lexer2 = new _Lexer(options2);
    return lexer2.lex(src);
  }
  static lexInline(src, options2) {
    const lexer2 = new _Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i = 0; i < this.inlineQueue.length; i++) {
      const next = this.inlineQueue[i];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    let lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(extTokenizer => {
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
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
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
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
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
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
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
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
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
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
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
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(extTokenizer => {
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
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
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
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
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
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
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
  constructor(options2) {
    this.options = options2 || _defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/^\S*/)?.[0];
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(lang) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html2, block2) {
    return html2;
  }
  heading(text, level, raw) {
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul";
    const startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text, task, checked) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag2 = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var _TextRenderer = class {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var _Parser = class {
  options;
  renderer;
  textRenderer;
  constructor(options2) {
    this.options = options2 || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer();
  }
  static parse(tokens, options2) {
    const parser2 = new _Parser(options2);
    return parser2.parse(tokens);
  }
  static parseInline(tokens, options2) {
    const parser2 = new _Parser(options2);
    return parser2.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const genericToken = token;
        const ret = this.options.extensions.renderers[genericToken.type].call({
          parser: this
        }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space":
          {
            continue;
          }
        case "hr":
          {
            out += this.renderer.hr();
            continue;
          }
        case "heading":
          {
            const headingToken = token;
            out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
            continue;
          }
        case "code":
          {
            const codeToken = token;
            out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
            continue;
          }
        case "table":
          {
            const tableToken = token;
            let header = "";
            let cell = "";
            for (let j = 0; j < tableToken.header.length; j++) {
              cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), {
                header: true,
                align: tableToken.align[j]
              });
            }
            header += this.renderer.tablerow(cell);
            let body = "";
            for (let j = 0; j < tableToken.rows.length; j++) {
              const row = tableToken.rows[j];
              cell = "";
              for (let k = 0; k < row.length; k++) {
                cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                  header: false,
                  align: tableToken.align[k]
                });
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header, body);
            continue;
          }
        case "blockquote":
          {
            const blockquoteToken = token;
            const body = this.parse(blockquoteToken.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
        case "list":
          {
            const listToken = token;
            const ordered = listToken.ordered;
            const start = listToken.start;
            const loose = listToken.loose;
            let body = "";
            for (let j = 0; j < listToken.items.length; j++) {
              const item = listToken.items[j];
              const checked = item.checked;
              const task = item.task;
              let itemBody = "";
              if (item.task) {
                const checkbox = this.renderer.checkbox(!!checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox + " "
                    });
                  }
                } else {
                  itemBody += checkbox + " ";
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, !!checked);
            }
            out += this.renderer.list(body, ordered, start);
            continue;
          }
        case "html":
          {
            const htmlToken = token;
            out += this.renderer.html(htmlToken.text, htmlToken.block);
            continue;
          }
        case "paragraph":
          {
            const paragraphToken = token;
            out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
            continue;
          }
        case "text":
          {
            let textToken = token;
            let body = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
            while (i + 1 < tokens.length && tokens[i + 1].type === "text") {
              textToken = tokens[++i];
              body += "\n" + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
            }
            out += top ? this.renderer.paragraph(body) : body;
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
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        const ret = this.options.extensions.renderers[token.type].call({
          parser: this
        }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape":
          {
            const escapeToken = token;
            out += renderer.text(escapeToken.text);
            break;
          }
        case "html":
          {
            const tagToken = token;
            out += renderer.html(tagToken.text);
            break;
          }
        case "link":
          {
            const linkToken = token;
            out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
            break;
          }
        case "image":
          {
            const imageToken = token;
            out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
            break;
          }
        case "strong":
          {
            const strongToken = token;
            out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
            break;
          }
        case "em":
          {
            const emToken = token;
            out += renderer.em(this.parseInline(emToken.tokens, renderer));
            break;
          }
        case "codespan":
          {
            const codespanToken = token;
            out += renderer.codespan(codespanToken.text);
            break;
          }
        case "br":
          {
            out += renderer.br();
            break;
          }
        case "del":
          {
            const delToken = token;
            out += renderer.del(this.parseInline(delToken.tokens, renderer));
            break;
          }
        case "text":
          {
            const textToken = token;
            out += renderer.text(textToken.text);
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
var _Hooks = class {
  options;
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
};
__publicField(_Hooks, "passThroughHooks", /* @__PURE__ */new Set(["preprocess", "postprocess", "processAllTokens"]));
var Marked = class {
  defaults = _getDefaults();
  options = this.setOptions;
  parse = this.#parseMarkdown(_Lexer.lex, _Parser.parse);
  parseInline = this.#parseMarkdown(_Lexer.lexInline, _Parser.parseInline);
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
          if (prop === "options") {
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
          if (prop === "options") {
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
  #parseMarkdown(lexer2, parser2) {
    return (src, options2) => {
      const origOpt = {
        ...options2
      };
      const opt = {
        ...this.defaults,
        ...origOpt
      };
      if (this.defaults.async === true && origOpt.async === false) {
        if (!opt.silent) {
          console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
        }
        opt.async = true;
      }
      const throwError = this.#onError(!!opt.silent, !!opt.async);
      if (typeof src === "undefined" || src === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
      }
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
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
  }
  #onError(silent, async) {
    return e => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL21hcmtlZC4xMS4yLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9kZWZhdWx0cy50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL2hlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9Ub2tlbml6ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9ydWxlcy50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL0xleGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvUmVuZGVyZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9UZXh0UmVuZGVyZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9QYXJzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9Ib29rcy50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL0luc3RhbmNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvbWFya2VkLnRzIl0sIm5hbWVzIjpbIm1hcmtlZF8xMV8yXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSG9va3MiLCJfSG9va3MiLCJMZXhlciIsIl9MZXhlciIsIk1hcmtlZCIsIlBhcnNlciIsIl9QYXJzZXIiLCJSZW5kZXJlciIsIl9SZW5kZXJlciIsIlRleHRSZW5kZXJlciIsIl9UZXh0UmVuZGVyZXIiLCJUb2tlbml6ZXIiLCJfVG9rZW5pemVyIiwiZGVmYXVsdHMiLCJfZGVmYXVsdHMiLCJnZXREZWZhdWx0cyIsIl9nZXREZWZhdWx0cyIsImxleGVyIiwibWFya2VkIiwib3B0aW9ucyIsInBhcnNlIiwicGFyc2VJbmxpbmUiLCJwYXJzZXIiLCJzZXRPcHRpb25zIiwidXNlIiwid2Fsa1Rva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJhc3luYyIsImJyZWFrcyIsImV4dGVuc2lvbnMiLCJnZm0iLCJob29rcyIsInBlZGFudGljIiwicmVuZGVyZXIiLCJzaWxlbnQiLCJ0b2tlbml6ZXIiLCJjaGFuZ2VEZWZhdWx0cyIsIm5ld0RlZmF1bHRzIiwiZXNjYXBlVGVzdCIsImVzY2FwZVJlcGxhY2UiLCJSZWdFeHAiLCJzb3VyY2UiLCJlc2NhcGVUZXN0Tm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlTm9FbmNvZGUiLCJlc2NhcGVSZXBsYWNlbWVudHMiLCJnZXRFc2NhcGVSZXBsYWNlbWVudCIsImNoIiwiZXNjYXBlJDEiLCJodG1sMiIsImVuY29kZSIsInRlc3QiLCJyZXBsYWNlIiwidW5lc2NhcGVUZXN0IiwidW5lc2NhcGUiLCJfIiwibiIsInRvTG93ZXJDYXNlIiwiY2hhckF0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJjYXJldCIsImVkaXQiLCJyZWdleCIsIm9wdCIsIm9iaiIsIm5hbWUiLCJ2YWwiLCJ2YWxTb3VyY2UiLCJnZXRSZWdleCIsImNsZWFuVXJsIiwiaHJlZiIsImVuY29kZVVSSSIsImUiLCJub29wVGVzdCIsImV4ZWMiLCJzcGxpdENlbGxzIiwidGFibGVSb3ciLCJjb3VudCIsInJvdyIsIm1hdGNoIiwib2Zmc2V0Iiwic3RyIiwiZXNjYXBlZCIsImN1cnIiLCJjZWxscyIsInNwbGl0IiwiaSIsInRyaW0iLCJzaGlmdCIsImxlbmd0aCIsInBvcCIsInNwbGljZSIsInB1c2giLCJydHJpbSIsImMiLCJpbnZlcnQiLCJsIiwic3VmZkxlbiIsImN1cnJDaGFyIiwic2xpY2UiLCJmaW5kQ2xvc2luZ0JyYWNrZXQiLCJiIiwiaW5kZXhPZiIsImxldmVsIiwib3V0cHV0TGluayIsImNhcCIsImxpbmsyIiwicmF3IiwibGV4ZXIyIiwidGl0bGUiLCJ0ZXh0Iiwic3RhdGUiLCJpbkxpbmsiLCJ0b2tlbiIsInR5cGUiLCJ0b2tlbnMiLCJpbmxpbmVUb2tlbnMiLCJpbmRlbnRDb2RlQ29tcGVuc2F0aW9uIiwibWF0Y2hJbmRlbnRUb0NvZGUiLCJpbmRlbnRUb0NvZGUiLCJtYXAiLCJub2RlIiwibWF0Y2hJbmRlbnRJbk5vZGUiLCJpbmRlbnRJbk5vZGUiLCJqb2luIiwicnVsZXMiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMyIiwic3BhY2UiLCJzcmMiLCJibG9jayIsIm5ld2xpbmUiLCJjb2RlIiwiY29kZUJsb2NrU3R5bGUiLCJmZW5jZXMiLCJsYW5nIiwiaW5saW5lIiwiYW55UHVuY3R1YXRpb24iLCJoZWFkaW5nIiwidHJpbW1lZCIsImRlcHRoIiwiaHIiLCJibG9ja3F1b3RlIiwidG9wIiwiYmxvY2tUb2tlbnMiLCJsaXN0IiwiYnVsbCIsImlzb3JkZXJlZCIsImxpc3QyIiwib3JkZXJlZCIsInN0YXJ0IiwibG9vc2UiLCJpdGVtcyIsIml0ZW1SZWdleCIsIml0ZW1Db250ZW50cyIsImVuZHNXaXRoQmxhbmtMaW5lIiwiZW5kRWFybHkiLCJsaW5lIiwidCIsInJlcGVhdCIsIm5leHRMaW5lIiwiaW5kZW50IiwidHJpbVN0YXJ0Iiwic2VhcmNoIiwiYmxhbmtMaW5lIiwibmV4dEJ1bGxldFJlZ2V4IiwiTWF0aCIsIm1pbiIsImhyUmVnZXgiLCJmZW5jZXNCZWdpblJlZ2V4IiwiaGVhZGluZ0JlZ2luUmVnZXgiLCJyYXdMaW5lIiwiaXN0YXNrIiwiaXNjaGVja2VkIiwidGFzayIsImNoZWNrZWQiLCJ0cmltRW5kIiwic3BhY2VycyIsImZpbHRlciIsImhhc011bHRpcGxlTGluZUJyZWFrcyIsInNvbWUiLCJodG1sIiwicHJlIiwiZGVmIiwidGFnMiIsInRhZyIsInRhYmxlIiwiaGVhZGVycyIsImFsaWducyIsInJvd3MiLCJpdGVtIiwiaGVhZGVyIiwiYWxpZ24iLCJjZWxsIiwibGhlYWRpbmciLCJwYXJhZ3JhcGgiLCJlc2NhcGUiLCJpblJhd0Jsb2NrIiwibGluayIsInRyaW1tZWRVcmwiLCJydHJpbVNsYXNoIiwibGFzdFBhcmVuSW5kZXgiLCJsaW5rTGVuIiwicmVmbGluayIsImxpbmtzIiwibm9saW5rIiwibGlua1N0cmluZyIsImVtU3Ryb25nIiwibWFza2VkU3JjIiwicHJldkNoYXIiLCJlbVN0cm9uZ0xEZWxpbSIsIm5leHRDaGFyIiwicHVuY3R1YXRpb24iLCJsTGVuZ3RoIiwickRlbGltIiwickxlbmd0aCIsImRlbGltVG90YWwiLCJtaWREZWxpbVRvdGFsIiwiZW5kUmVnIiwiZW1TdHJvbmdSRGVsaW1Bc3QiLCJlbVN0cm9uZ1JEZWxpbVVuZCIsImxhc3RJbmRleCIsImxhc3RDaGFyTGVuZ3RoIiwiaW5kZXgiLCJ0ZXh0MiIsImNvZGVzcGFuIiwiaGFzTm9uU3BhY2VDaGFycyIsImhhc1NwYWNlQ2hhcnNPbkJvdGhFbmRzIiwiYnIiLCJkZWwiLCJhdXRvbGluayIsInVybCIsInByZXZDYXBaZXJvIiwiX2JhY2twZWRhbCIsImlubGluZVRleHQiLCJibG9ja0NvZGUiLCJidWxsZXQiLCJfcGFyYWdyYXBoIiwiYmxvY2tUZXh0IiwiX2Jsb2NrTGFiZWwiLCJfdGFnIiwiX2NvbW1lbnQiLCJibG9ja05vcm1hbCIsImdmbVRhYmxlIiwiYmxvY2tHZm0iLCJibG9ja1BlZGFudGljIiwiaW5saW5lQ29kZSIsIl9wdW5jdHVhdGlvbiIsImJsb2NrU2tpcCIsIl9pbmxpbmVDb21tZW50IiwiX2lubGluZUxhYmVsIiwicmVmbGlua1NlYXJjaCIsImlubGluZU5vcm1hbCIsImlubGluZVBlZGFudGljIiwiaW5saW5lR2ZtIiwiaW5saW5lQnJlYWtzIiwibm9ybWFsIiwiaW5saW5lUXVldWUiLCJPYmplY3QiLCJjcmVhdGUiLCJsZXgiLCJsZXhJbmxpbmUiLCJuZXh0IiwibGVhZGluZyIsInRhYnMiLCJsYXN0VG9rZW4iLCJjdXRTcmMiLCJsYXN0UGFyYWdyYXBoQ2xpcHBlZCIsImV4dFRva2VuaXplciIsImNhbGwiLCJzdGFydEJsb2NrIiwic3RhcnRJbmRleCIsIkluZmluaXR5IiwidGVtcFNyYyIsInRlbXBTdGFydCIsImZvckVhY2giLCJnZXRTdGFydEluZGV4IiwiZXJyTXNnIiwiY2hhckNvZGVBdCIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwia2VlcFByZXZDaGFyIiwia2V5cyIsImluY2x1ZGVzIiwibGFzdEluZGV4T2YiLCJzdGFydElubGluZSIsImluZm9zdHJpbmciLCJxdW90ZSIsImJsb2NrMiIsImJvZHkiLCJzdGFydGF0dCIsImxpc3RpdGVtIiwiY2hlY2tib3giLCJ0YWJsZXJvdyIsImNvbnRlbnQiLCJ0YWJsZWNlbGwiLCJmbGFncyIsInN0cm9uZyIsImVtIiwiY2xlYW5IcmVmIiwib3V0IiwiaW1hZ2UiLCJ0ZXh0UmVuZGVyZXIiLCJwYXJzZXIyIiwicmVuZGVyZXJzIiwiZ2VuZXJpY1Rva2VuIiwicmV0IiwiaGVhZGluZ1Rva2VuIiwiY29kZVRva2VuIiwidGFibGVUb2tlbiIsImoiLCJrIiwiYmxvY2txdW90ZVRva2VuIiwibGlzdFRva2VuIiwiaXRlbUJvZHkiLCJ1bnNoaWZ0IiwiaHRtbFRva2VuIiwicGFyYWdyYXBoVG9rZW4iLCJ0ZXh0VG9rZW4iLCJlc2NhcGVUb2tlbiIsInRhZ1Rva2VuIiwibGlua1Rva2VuIiwiaW1hZ2VUb2tlbiIsInN0cm9uZ1Rva2VuIiwiZW1Ub2tlbiIsImNvZGVzcGFuVG9rZW4iLCJkZWxUb2tlbiIsInByZXByb2Nlc3MiLCJtYXJrZG93biIsInBvc3Rwcm9jZXNzIiwicHJvY2Vzc0FsbFRva2VucyIsIl9fcHVibGljRmllbGQiLCJTZXQiLCJwYXJzZU1hcmtkb3duIiwiYXJncyIsImNhbGxiYWNrIiwidmFsdWVzIiwiY29uY2F0IiwiY2hpbGRUb2tlbnMiLCJ0b2tlbnMyIiwiZmxhdCIsInBhY2siLCJvcHRzIiwiZXh0IiwicHJldlJlbmRlcmVyIiwiYXJnczIiLCJhcHBseSIsImV4dExldmVsIiwicHJvcCIsInJlbmRlcmVyUHJvcCIsInJlbmRlcmVyRnVuYyIsInRva2VuaXplclByb3AiLCJ0b2tlbml6ZXJGdW5jIiwicHJldlRva2VuaXplciIsImhvb2tzUHJvcCIsImhvb2tzRnVuYyIsInByZXZIb29rIiwicGFzc1Rocm91Z2hIb29rcyIsImhhcyIsImFyZyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInJldDIiLCJ3YWxrVG9rZW5zMiIsInBhY2tXYWxrdG9rZW5zIiwiI3BhcnNlTWFya2Rvd24iLCJvcmlnT3B0Iiwid2FybiIsInRocm93RXJyb3IiLCJvbkVycm9yIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJzcmMyIiwiYWxsIiwiY2F0Y2giLCIjb25FcnJvciIsIm1lc3NhZ2UiLCJtc2ciLCJyZWplY3QiLCJtYXJrZWRJbnN0YW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBO0FBQUFDLFFBQUEsQ0FBQUQscUJBQUE7RUFBQUUsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLE1BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFDLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFDLE9BQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFDLGFBQUE7RUFBQUMsU0FBQSxFQUFBQSxDQUFBLEtBQUFDLFVBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFDLFNBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFDLFlBQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsT0FBQSxFQUFBQSxDQUFBLEtBQUFBLE9BQUE7RUFBQUMsS0FBQSxFQUFBQSxDQUFBLEtBQUFBLEtBQUE7RUFBQUMsV0FBQSxFQUFBQSxDQUFBLEtBQUFBLFdBQUE7RUFBQUMsTUFBQSxFQUFBQSxDQUFBLEtBQUFBLE1BQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBLEdBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFB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