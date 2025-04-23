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

// .beyond/uimport/marked.11.2.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9tYXJrZWQuMTEuMi4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvZGVmYXVsdHMudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9oZWxwZXJzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvVG9rZW5pemVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvcnVsZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9MZXhlci50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL1JlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvVGV4dFJlbmRlcmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvUGFyc2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL21hcmtlZC9zcmMvSG9va3MudHMiLCIuLi9ub2RlX21vZHVsZXMvbWFya2VkL3NyYy9JbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9tYXJrZWQvc3JjL21hcmtlZC50cyJdLCJuYW1lcyI6WyJtYXJrZWRfMTFfMl8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkhvb2tzIiwiX0hvb2tzIiwiTGV4ZXIiLCJfTGV4ZXIiLCJNYXJrZWQiLCJQYXJzZXIiLCJfUGFyc2VyIiwiUmVuZGVyZXIiLCJfUmVuZGVyZXIiLCJUZXh0UmVuZGVyZXIiLCJfVGV4dFJlbmRlcmVyIiwiVG9rZW5pemVyIiwiX1Rva2VuaXplciIsImRlZmF1bHRzIiwiX2RlZmF1bHRzIiwiZ2V0RGVmYXVsdHMiLCJfZ2V0RGVmYXVsdHMiLCJsZXhlciIsIm1hcmtlZCIsIm9wdGlvbnMiLCJwYXJzZSIsInBhcnNlSW5saW5lIiwicGFyc2VyIiwic2V0T3B0aW9ucyIsInVzZSIsIndhbGtUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiYXN5bmMiLCJicmVha3MiLCJleHRlbnNpb25zIiwiZ2ZtIiwiaG9va3MiLCJwZWRhbnRpYyIsInJlbmRlcmVyIiwic2lsZW50IiwidG9rZW5pemVyIiwiY2hhbmdlRGVmYXVsdHMiLCJuZXdEZWZhdWx0cyIsImVzY2FwZVRlc3QiLCJlc2NhcGVSZXBsYWNlIiwiUmVnRXhwIiwic291cmNlIiwiZXNjYXBlVGVzdE5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZU5vRW5jb2RlIiwiZXNjYXBlUmVwbGFjZW1lbnRzIiwiZ2V0RXNjYXBlUmVwbGFjZW1lbnQiLCJjaCIsImVzY2FwZSQxIiwiaHRtbDIiLCJlbmNvZGUiLCJ0ZXN0IiwicmVwbGFjZSIsInVuZXNjYXBlVGVzdCIsInVuZXNjYXBlIiwiXyIsIm4iLCJ0b0xvd2VyQ2FzZSIsImNoYXJBdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiY2FyZXQiLCJlZGl0IiwicmVnZXgiLCJvcHQiLCJvYmoiLCJuYW1lIiwidmFsIiwidmFsU291cmNlIiwiZ2V0UmVnZXgiLCJjbGVhblVybCIsImhyZWYiLCJlbmNvZGVVUkkiLCJlIiwibm9vcFRlc3QiLCJleGVjIiwic3BsaXRDZWxscyIsInRhYmxlUm93IiwiY291bnQiLCJyb3ciLCJtYXRjaCIsIm9mZnNldCIsInN0ciIsImVzY2FwZWQiLCJjdXJyIiwiY2VsbHMiLCJzcGxpdCIsImkiLCJ0cmltIiwic2hpZnQiLCJsZW5ndGgiLCJwb3AiLCJzcGxpY2UiLCJwdXNoIiwicnRyaW0iLCJjIiwiaW52ZXJ0IiwibCIsInN1ZmZMZW4iLCJjdXJyQ2hhciIsInNsaWNlIiwiZmluZENsb3NpbmdCcmFja2V0IiwiYiIsImluZGV4T2YiLCJsZXZlbCIsIm91dHB1dExpbmsiLCJjYXAiLCJsaW5rMiIsInJhdyIsImxleGVyMiIsInRpdGxlIiwidGV4dCIsInN0YXRlIiwiaW5MaW5rIiwidG9rZW4iLCJ0eXBlIiwidG9rZW5zIiwiaW5saW5lVG9rZW5zIiwiaW5kZW50Q29kZUNvbXBlbnNhdGlvbiIsIm1hdGNoSW5kZW50VG9Db2RlIiwiaW5kZW50VG9Db2RlIiwibWFwIiwibm9kZSIsIm1hdGNoSW5kZW50SW5Ob2RlIiwiaW5kZW50SW5Ob2RlIiwiam9pbiIsInJ1bGVzIiwiY29uc3RydWN0b3IiLCJvcHRpb25zMiIsInNwYWNlIiwic3JjIiwiYmxvY2siLCJuZXdsaW5lIiwiY29kZSIsImNvZGVCbG9ja1N0eWxlIiwiZmVuY2VzIiwibGFuZyIsImlubGluZSIsImFueVB1bmN0dWF0aW9uIiwiaGVhZGluZyIsInRyaW1tZWQiLCJkZXB0aCIsImhyIiwiYmxvY2txdW90ZSIsInRvcCIsImJsb2NrVG9rZW5zIiwibGlzdCIsImJ1bGwiLCJpc29yZGVyZWQiLCJsaXN0MiIsIm9yZGVyZWQiLCJzdGFydCIsImxvb3NlIiwiaXRlbXMiLCJpdGVtUmVnZXgiLCJpdGVtQ29udGVudHMiLCJlbmRzV2l0aEJsYW5rTGluZSIsImVuZEVhcmx5IiwibGluZSIsInQiLCJyZXBlYXQiLCJuZXh0TGluZSIsImluZGVudCIsInRyaW1TdGFydCIsInNlYXJjaCIsImJsYW5rTGluZSIsIm5leHRCdWxsZXRSZWdleCIsIk1hdGgiLCJtaW4iLCJoclJlZ2V4IiwiZmVuY2VzQmVnaW5SZWdleCIsImhlYWRpbmdCZWdpblJlZ2V4IiwicmF3TGluZSIsImlzdGFzayIsImlzY2hlY2tlZCIsInRhc2siLCJjaGVja2VkIiwidHJpbUVuZCIsInNwYWNlcnMiLCJmaWx0ZXIiLCJoYXNNdWx0aXBsZUxpbmVCcmVha3MiLCJzb21lIiwiaHRtbCIsInByZSIsImRlZiIsInRhZzIiLCJ0YWciLCJ0YWJsZSIsImhlYWRlcnMiLCJhbGlnbnMiLCJyb3dzIiwiaXRlbSIsImhlYWRlciIsImFsaWduIiwiY2VsbCIsImxoZWFkaW5nIiwicGFyYWdyYXBoIiwiZXNjYXBlIiwiaW5SYXdCbG9jayIsImxpbmsiLCJ0cmltbWVkVXJsIiwicnRyaW1TbGFzaCIsImxhc3RQYXJlbkluZGV4IiwibGlua0xlbiIsInJlZmxpbmsiLCJsaW5rcyIsIm5vbGluayIsImxpbmtTdHJpbmciLCJlbVN0cm9uZyIsIm1hc2tlZFNyYyIsInByZXZDaGFyIiwiZW1TdHJvbmdMRGVsaW0iLCJuZXh0Q2hhciIsInB1bmN0dWF0aW9uIiwibExlbmd0aCIsInJEZWxpbSIsInJMZW5ndGgiLCJkZWxpbVRvdGFsIiwibWlkRGVsaW1Ub3RhbCIsImVuZFJlZyIsImVtU3Ryb25nUkRlbGltQXN0IiwiZW1TdHJvbmdSRGVsaW1VbmQiLCJsYXN0SW5kZXgiLCJsYXN0Q2hhckxlbmd0aCIsImluZGV4IiwidGV4dDIiLCJjb2Rlc3BhbiIsImhhc05vblNwYWNlQ2hhcnMiLCJoYXNTcGFjZUNoYXJzT25Cb3RoRW5kcyIsImJyIiwiZGVsIiwiYXV0b2xpbmsiLCJ1cmwiLCJwcmV2Q2FwWmVybyIsIl9iYWNrcGVkYWwiLCJpbmxpbmVUZXh0IiwiYmxvY2tDb2RlIiwiYnVsbGV0IiwiX3BhcmFncmFwaCIsImJsb2NrVGV4dCIsIl9ibG9ja0xhYmVsIiwiX3RhZyIsIl9jb21tZW50IiwiYmxvY2tOb3JtYWwiLCJnZm1UYWJsZSIsImJsb2NrR2ZtIiwiYmxvY2tQZWRhbnRpYyIsImlubGluZUNvZGUiLCJfcHVuY3R1YXRpb24iLCJibG9ja1NraXAiLCJfaW5saW5lQ29tbWVudCIsIl9pbmxpbmVMYWJlbCIsInJlZmxpbmtTZWFyY2giLCJpbmxpbmVOb3JtYWwiLCJpbmxpbmVQZWRhbnRpYyIsImlubGluZUdmbSIsImlubGluZUJyZWFrcyIsIm5vcm1hbCIsImlubGluZVF1ZXVlIiwiT2JqZWN0IiwiY3JlYXRlIiwibGV4IiwibGV4SW5saW5lIiwibmV4dCIsImxlYWRpbmciLCJ0YWJzIiwibGFzdFRva2VuIiwiY3V0U3JjIiwibGFzdFBhcmFncmFwaENsaXBwZWQiLCJleHRUb2tlbml6ZXIiLCJjYWxsIiwic3RhcnRCbG9jayIsInN0YXJ0SW5kZXgiLCJJbmZpbml0eSIsInRlbXBTcmMiLCJ0ZW1wU3RhcnQiLCJmb3JFYWNoIiwiZ2V0U3RhcnRJbmRleCIsImVyck1zZyIsImNoYXJDb2RlQXQiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImtlZXBQcmV2Q2hhciIsImtleXMiLCJpbmNsdWRlcyIsImxhc3RJbmRleE9mIiwic3RhcnRJbmxpbmUiLCJpbmZvc3RyaW5nIiwicXVvdGUiLCJibG9jazIiLCJib2R5Iiwic3RhcnRhdHQiLCJsaXN0aXRlbSIsImNoZWNrYm94IiwidGFibGVyb3ciLCJjb250ZW50IiwidGFibGVjZWxsIiwiZmxhZ3MiLCJzdHJvbmciLCJlbSIsImNsZWFuSHJlZiIsIm91dCIsImltYWdlIiwidGV4dFJlbmRlcmVyIiwicGFyc2VyMiIsInJlbmRlcmVycyIsImdlbmVyaWNUb2tlbiIsInJldCIsImhlYWRpbmdUb2tlbiIsImNvZGVUb2tlbiIsInRhYmxlVG9rZW4iLCJqIiwiayIsImJsb2NrcXVvdGVUb2tlbiIsImxpc3RUb2tlbiIsIml0ZW1Cb2R5IiwidW5zaGlmdCIsImh0bWxUb2tlbiIsInBhcmFncmFwaFRva2VuIiwidGV4dFRva2VuIiwiZXNjYXBlVG9rZW4iLCJ0YWdUb2tlbiIsImxpbmtUb2tlbiIsImltYWdlVG9rZW4iLCJzdHJvbmdUb2tlbiIsImVtVG9rZW4iLCJjb2Rlc3BhblRva2VuIiwiZGVsVG9rZW4iLCJwcmVwcm9jZXNzIiwibWFya2Rvd24iLCJwb3N0cHJvY2VzcyIsInByb2Nlc3NBbGxUb2tlbnMiLCJfX3B1YmxpY0ZpZWxkIiwiU2V0IiwicGFyc2VNYXJrZG93biIsImFyZ3MiLCJjYWxsYmFjayIsInZhbHVlcyIsImNvbmNhdCIsImNoaWxkVG9rZW5zIiwidG9rZW5zMiIsImZsYXQiLCJwYWNrIiwib3B0cyIsImV4dCIsInByZXZSZW5kZXJlciIsImFyZ3MyIiwiYXBwbHkiLCJleHRMZXZlbCIsInByb3AiLCJyZW5kZXJlclByb3AiLCJyZW5kZXJlckZ1bmMiLCJ0b2tlbml6ZXJQcm9wIiwidG9rZW5pemVyRnVuYyIsInByZXZUb2tlbml6ZXIiLCJob29rc1Byb3AiLCJob29rc0Z1bmMiLCJwcmV2SG9vayIsInBhc3NUaHJvdWdoSG9va3MiLCJoYXMiLCJhcmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJyZXQyIiwid2Fsa1Rva2VuczIiLCJwYWNrV2Fsa3Rva2VucyIsIiNwYXJzZU1hcmtkb3duIiwib3JpZ09wdCIsIndhcm4iLCJ0aHJvd0Vycm9yIiwib25FcnJvciIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwic3JjMiIsImFsbCIsImNhdGNoIiwiI29uRXJyb3IiLCJtZXNzYWdlIiwibXNnIiwicmVqZWN0IiwibWFya2VkSW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQTtBQUFBQyxRQUFBLENBQUFELHFCQUFBO0VBQUFFLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxNQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQyxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQyxPQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQyxhQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQyxVQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQyxTQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQyxZQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLE9BQUEsRUFBQUEsQ0FBQSxLQUFBQSxPQUFBO0VBQUFDLEtBQUEsRUFBQUEsQ0FBQSxLQUFBQSxLQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLE1BQUEsRUFBQUEsQ0FBQSxLQUFBQSxNQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxVQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLFVBQUEsRUFBQUEsQ0FBQSxLQUFB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