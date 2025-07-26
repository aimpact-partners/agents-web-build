System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "slate@0.114.0", "slate-react@0.114.2", "unified@11.0.5", "remark-parse@11.0.0", "remark-stringify@11.0.0", "remark-slate-transformer@0.9.0", "@tippyjs/react@4.2.6", "react-dom@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, PromptEditor, __beyond_pkg, hmr;
  _export("PromptEditor", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react3) {
      dependency_2 = _react3;
    }, function (_slate2) {
      dependency_3 = _slate2;
    }, function (_slateReact2) {
      dependency_4 = _slateReact2;
    }, function (_unified2) {
      dependency_5 = _unified2;
    }, function (_remarkParse2) {
      dependency_6 = _remarkParse2;
    }, function (_remarkStringify2) {
      dependency_7 = _remarkStringify2;
    }, function (_remarkSlateTransformer2) {
      dependency_8 = _remarkSlateTransformer2;
    }, function (_tippyjsReact) {
      dependency_9 = _tippyjsReact;
    }, function (_reactDom2) {
      dependency_10 = _reactDom2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/components/editor"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['slate', dependency_3], ['slate-react', dependency_4], ['unified', dependency_5], ['remark-parse', dependency_6], ['remark-stringify', dependency_7], ['remark-slate-transformer', dependency_8], ['@tippyjs/react', dependency_9], ['react-dom', dependency_10]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/components/editor');
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./core/overlay-provider
      ***************************************/
      ims.set('./core/overlay-provider', {
        hash: 414011235,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useOverlayRoot = exports.OverlayProvider = void 0;
          var _react = require("react");
          // core/overlay-provider.tsx  – one per widget

          /** Expose the element that will host every portal */
          const OverlayCtx = (0, _react.createContext)(null);
          const useOverlayRoot = () => {
            const ctx = (0, _react.useContext)(OverlayCtx);
            if (!ctx) throw new Error('OverlayProvider missing');
            return ctx;
          };
          exports.useOverlayRoot = useOverlayRoot;
          const OverlayProvider = ({
            children
          }) => {
            const ref = (0, _react.useRef)(null);
            return _react.default.createElement(OverlayCtx.Provider, {
              value: ref
            }, _react.default.createElement("div", {
              ref: ref,
              className: "editor-overlay-root"
            }), " ", children);
          };
          exports.OverlayProvider = OverlayProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./core/plugin-contract
      **************************************/

      ims.set('./core/plugin-contract', {
        hash: 2957655028,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.attachOpts = void 0;
          /** Helper to attach opts on editor (Symbol avoids name clashes) */
          const attachOpts = (ed, key, opts) => {
            ed[key] = opts;
            return ed;
          };
          exports.attachOpts = attachOpts;
        }
      });

      /***********************************
      INTERNAL MODULE: ./core/plugin-types
      ***********************************/

      ims.set('./core/plugin-types', {
        hash: 2962756522,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./core/plugin-utils
      ***********************************/

      ims.set('./core/plugin-utils', {
        hash: 207051676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.combineRenderers = combineRenderers;
          exports.composePlugins = composePlugins;
          var _react = require("react");
          /* helpers `composePlugins` and `combineRenderers` stay exactly as you had them */
          /** Helper – compose plugins into a single enhancer */
          function composePlugins(editor, plugins) {
            return plugins.reduce((acc, p) => p.withEditor ? p.withEditor(acc) : acc, editor);
          }
          /** Collect renderers for <Editable/> */
          function combineRenderers(plugins, key) {
            return props => {
              for (const p of plugins) {
                const fn = p[key];
                if (fn) {
                  const el = fn(props);
                  if (el) return el;
                }
              }
              return key === 'renderElement' ? _react.default.createElement("p", {
                ...props.attributes
              }, props.children) : _react.default.createElement("span", {
                ...props.attributes
              }, props.children);
            };
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./core/transform
      ********************************/

      ims.set('./core/transform', {
        hash: 2729802795,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.transformer = void 0;
          var _slate = require("slate");
          var _unified = require("unified");
          var _remarkParse = require("remark-parse");
          var _remarkStringify = require("remark-stringify");
          var _remarkSlateTransformer = require("remark-slate-transformer");
          /*
           * core/transform.ts · Transformer (Slate ↔ Markdown / text)
           * Fixes:
           *  • use remarkToSlate / slateToRemark as pure functions (no .use)
           *  • correct remarkStringify options type (`strong: '*'`)
           *  • import Text to use Text.isText
           */

          function mdAst(md) {
            return (0, _unified.unified)().use(_remarkParse.default).parse(md);
          }
          const transformer = exports.transformer = {
            /* md → slate ------------------------------------------------------ */
            fromMarkdown(md) {
              return (0, _unified.unified)().use(_remarkParse.default).use(_remarkSlateTransformer.remarkToSlate).processSync(md).result;
            },
            /* slate → markdown ------------------------------------------------ */
            markdown(nodes) {
              const mdTree = (0, _remarkSlateTransformer.slateToRemark)(nodes);
              return (0, _unified.unified)().use(_remarkStringify.default, {
                bullet: '-',
                fences: true,
                emphasis: '*',
                strong: '*' // _ or *
              }).stringify(mdTree);
            },
            /* slate → plain text --------------------------------------------- */
            text(nodes) {
              let out = '';
              const walk = n => {
                if (_slate.Text.isText(n)) out += n.text;else if (n.children) n.children.forEach(walk);
              };
              nodes.forEach(walk);
              return out;
            }
          };
        }
      });

      /***********************************
      INTERNAL MODULE: ./core/with-hotkeys
      ***********************************/

      ims.set('./core/with-hotkeys', {
        hash: 195824907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.withHotkeys = withHotkeys;
          function withHotkeys(editor, plugins) {
            const {
              onKeyDown,
              insertText
            } = editor;
            editor.insertText = text => {
              insertText(text);
              for (const p of plugins) p.onTextInserted?.(editor, text);
            };
            return editor;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 836102444,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptEditor = PromptEditor;
          var _react = require("react");
          var _slate = require("slate");
          var _slateReact = require("slate-react");
          var _overlayProvider = require("./core/overlay-provider");
          var _pluginUtils = require("./core/plugin-utils");
          var _withHotkeys = require("./core/with-hotkeys");
          var _registry = require("./plugins/registry");
          var _transform = require("./core/transform");
          /*bundle*/ /**
                      * File: editor/PromptEditor.tsx
                      * API: <PromptEditor value="..." format="markdown" config={{ plugins: { mention: {...} } }} />
                      */

          function PromptEditor({
            value,
            format = 'slate',
            config = {},
            onChange
          }) {
            const plugins = (0, _react.useMemo)(() => (0, _registry.buildPlugins)(config.plugins, config.extra), [config.plugins, config.extra]);
            const editor = (0, _react.useMemo)(() => {
              const base = (0, _slateReact.withReact)((0, _slate.createEditor)());
              const enhanced = (0, _pluginUtils.composePlugins)(base, plugins);
              return (0, _withHotkeys.withHotkeys)(enhanced, plugins);
            }, [plugins]);
            /* 2 – initial Slate value from prop */
            const initial = (0, _react.useMemo)(() => {
              if (Array.isArray(value)) return value;
              if (format === 'plain') return [{
                type: 'paragraph',
                children: [{
                  text: value
                }]
              }];
              return _transform.transformer.fromMarkdown(value);
            }, []);
            const [internal, setInternal] = (0, _react.useState)(initial);
            /* 3 – renderers */
            const renderElement = (0, _react.useMemo)(() => (0, _pluginUtils.combineRenderers)(plugins, 'renderElement'), [plugins]);
            const renderLeaf = (0, _react.useMemo)(() => (0, _pluginUtils.combineRenderers)(plugins, 'renderLeaf'), [plugins]);
            /* 4 – change → serialize */
            const emit = v => {
              setInternal(v);
              if (!onChange) return;
              if (format === 'slate') onChange(v);else if (format === 'plain') onChange(_transform.transformer.text(v));else onChange(_transform.transformer.markdown(v));
            };
            return _react.default.createElement(_overlayProvider.OverlayProvider, null, _react.default.createElement(_slateReact.Slate, {
              editor: editor,
              initialValue: internal,
              onChange: emit
            }, _react.default.createElement(_slateReact.Editable, {
              className: "editable-slate-editor",
              spellCheck: true,
              autoFocus: true,
              renderElement: renderElement,
              renderLeaf: renderLeaf,
              onKeyDown: e => plugins.some(p => p.onKeyDown?.(e, editor))
            }), plugins.map(p => p.renderPortal?.())));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./plugins/bold
      ******************************/

      ims.set('./plugins/bold', {
        hash: 718291753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.boldPluginDescriptor = void 0;
          var _react = require("react");
          var _slate = require("slate");
          var _pluginContract = require("../core/plugin-contract");
          const KEY = Symbol('bold-options');
          const boldPluginDescriptor = exports.boldPluginDescriptor = {
            id: 'bold',
            defaults: {
              hotkey: 'b'
            },
            create(opts) {
              const withEditor = ed => (0, _pluginContract.attachOpts)(ed, KEY, opts);
              return {
                name: 'bold',
                withEditor,
                renderLeaf({
                  attributes,
                  children,
                  leaf
                }) {
                  return leaf.bold ? _react.default.createElement("strong", {
                    ...attributes
                  }, children) : undefined;
                },
                onKeyDown(e, ed) {
                  const o = ed[KEY];
                  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === o.hotkey) {
                    e.preventDefault();
                    const active = _slate.Editor.marks(ed)?.bold === true;
                    active ? _slate.Editor.removeMark(ed, 'bold') : _slate.Editor.addMark(ed, 'bold', true);
                    return true;
                  }
                  return false;
                },
                onTextInserted(ed, ch) {
                  if (ch !== ' ' && ch !== '\n') return;
                  if (!ed.selection || !_slate.Range.isCollapsed(ed.selection)) return;
                  const before = _slate.Editor.before(ed, ed.selection.anchor, {
                    unit: 'word'
                  });
                  if (!before) return;
                  const wordRange = _slate.Editor.range(ed, before, ed.selection.anchor);
                  const word = _slate.Editor.string(ed, wordRange);
                  const m = /^(?:\*\*|__)(.+)(?:\*\*|__)$/.exec(word);
                  if (!m) return;
                  _slate.Editor.withoutNormalizing(ed, () => {
                    _slate.Transforms.select(ed, wordRange);
                    _slate.Transforms.delete(ed);
                    _slate.Editor.insertText(ed, m[1]);
                    _slate.Editor.addMark(ed, 'bold', true);
                  });
                }
              };
            }
          };
        }
      });

      /*********************************************
      INTERNAL MODULE: ./plugins/curly-popover/index
      *********************************************/

      ims.set('./plugins/curly-popover/index', {
        hash: 1788907725,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.curlyPopoverPluginDescriptor = void 0;
          var _slate = require("slate");
          var _types = require("./types");
          var _renderLeaf = require("./render-leaf");
          var _pluginContract = require("../../core/plugin-contract");
          const curlyPopoverPluginDescriptor = exports.curlyPopoverPluginDescriptor = {
            id: 'curly-popover',
            defaults: {
              actions: [{
                label: 'Upper‑case',
                run: (tok, ed, r) => {
                  _slate.Editor.insertText(ed, tok.toUpperCase(), {
                    at: r
                  });
                }
              }, {
                label: 'Lower‑case',
                run: (tok, ed, r) => {
                  _slate.Editor.insertText(ed, tok.toLowerCase(), {
                    at: r
                  });
                }
              }, {
                label: 'Delete',
                run: (_tok, ed, r) => _slate.Editor.delete(ed, {
                  at: r
                })
              }]
            },
            create(opts) {
              const withEditor = ed => (0, _pluginContract.attachOpts)(ed, _types.KEY, opts);
              return {
                name: 'curly-popover',
                withEditor,
                renderLeaf: _renderLeaf.renderLeaf
              };
            }
          };
        }
      });

      /***************************************************
      INTERNAL MODULE: ./plugins/curly-popover/render-leaf
      ***************************************************/

      ims.set('./plugins/curly-popover/render-leaf', {
        hash: 3044448405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.renderLeaf = renderLeaf;
          var _react = require("react");
          var _tokenSpan = require("./token-span");
          function renderLeaf(props) {
            const text = props.leaf.text ?? '';
            if (/^\{[^\n\r}]+\}$/.test(text)) {
              return _react.default.createElement(_tokenSpan.TokenSpan, {
                ...props,
                token: text,
                actions: props.actions
              });
            }
            return undefined;
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./plugins/curly-popover/token-span
      **************************************************/

      ims.set('./plugins/curly-popover/token-span', {
        hash: 1151204410,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TokenSpan = void 0;
          var _react = require("react");
          var _react2 = require("@tippyjs/react");
          var _slateReact = require("slate-react");
          var _slate = require("slate");
          // import 'tippy.js/dist/tippy.css';

          const TokenSpan = ({
            attributes,
            children,
            leaf,
            token,
            actions
          }) => {
            const editor = (0, _slateReact.useSlateStatic)();
            const path = _slateReact.ReactEditor.findPath(editor, leaf);
            const start = _slate.Editor.start(editor, path);
            const end = _slate.Editor.end(editor, path);
            const tokenRange = {
              anchor: start,
              focus: end
            };
            return _react.default.createElement(_react2.default, {
              content: _react.default.createElement("div", {
                className: "curly-popover-menu"
              }, actions.map(a => _react.default.createElement("button", {
                key: a.label,
                className: "curly-popover-btn",
                onClick: e => {
                  e.preventDefault();
                  a.run(token, editor, tokenRange);
                }
              }, a.label))),
              interactive: true,
              delay: [150, 100],
              placement: "top",
              theme: "light-border"
            }, _react.default.createElement("span", {
              ...attributes,
              className: "curly-token"
            }, children));
          };
          exports.TokenSpan = TokenSpan;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./plugins/curly-popover/types
      *********************************************/

      ims.set('./plugins/curly-popover/types', {
        hash: 2874266728,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KEY = void 0;
          const KEY = exports.KEY = Symbol('curly‑popover‑opts');
        }
      });

      /*************************************************
      INTERNAL MODULE: ./plugins/curly-suggestions/index
      *************************************************/

      ims.set('./plugins/curly-suggestions/index', {
        hash: 2950701005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.curlyBracePluginDescriptor = void 0;
          var _react = require("react");
          var _slate = require("slate");
          var _pluginContract = require("../../core/plugin-contract");
          var _portal = require("./portal");
          var _types = require("./types");
          /**
           * File: plugins/curly-suggestions/index.tsx
           * Now uses an async `fetch` for recommendations.
           */

          const curlyBracePluginDescriptor = exports.curlyBracePluginDescriptor = {
            id: 'curly-brace-suggestions',
            defaults: {
              fetch: async () => [] // async by default
            },
            create(opts) {
              const withEditor = ed => (0, _pluginContract.attachOpts)(ed, _types.CURLY_KEY, opts);
              const state = new WeakMap();
              return {
                name: 'curly-brace-suggestions',
                withEditor,
                onChange(ed, val) {
                  state.get(ed)?.onChange(val);
                },
                onKeyDown(e, ed) {
                  const api = state.get(ed);
                  if (!api || !api.target) return false;
                  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    const dir = e.key === 'ArrowDown' ? 1 : -1;
                    api.setIndex(i => (i + dir + api.suggestions.length) % api.suggestions.length);
                    return true;
                  }
                  if (e.key === 'Enter' || e.key === 'Tab') {
                    e.preventDefault();
                    const item = api.suggestions[api.index];
                    if (item) {
                      _slate.Transforms.select(ed, api.target);
                      _slate.Transforms.insertText(ed, `{${item.label}}`);
                    }
                    api.reset();
                    return true;
                  }
                  if (e.key === 'Escape') {
                    e.preventDefault();
                    api.reset();
                    return true;
                  }
                  return false;
                },
                renderPortal: () => _react.default.createElement(_portal.CurlyBracePortal, {
                  key: "curly-portal",
                  state: state,
                  options: opts
                })
              };
            }
          };
        }
      });

      /**************************************************
      INTERNAL MODULE: ./plugins/curly-suggestions/portal
      **************************************************/

      ims.set('./plugins/curly-suggestions/portal', {
        hash: 3975393164,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CurlyBracePortal = CurlyBracePortal;
          var _react = require("react");
          var _slateReact = require("slate-react");
          var _overlayProvider = require("../../core/overlay-provider");
          var _useCurlySuggestions = require("./use-curly-suggestions");
          var _slate = require("slate");
          var _reactDom = require("react-dom");
          var _suggestionList = require("../mentions/suggestion-list");
          function CurlyBracePortal({
            state,
            options
          }) {
            const editor = (0, _slateReact.useSlateStatic)();
            const overlay = (0, _overlayProvider.useOverlayRoot)();
            const api = (0, _useCurlySuggestions.useCurlySuggestions)(editor, options);
            state.set(editor, api);
            if (!overlay.current || !api.target) return null;
            return _reactDom.default.createPortal(_react.default.createElement(_suggestionList.SuggestionList, {
              portalRoot: overlay,
              target: api.target,
              search: "",
              index: api.index,
              setIndex: api.setIndex,
              suggestions: api.suggestions,
              onSelect: item => {
                _slate.Transforms.select(editor, api.target);
                _slate.Transforms.insertText(editor, `{${item.label}}`);
                api.reset();
              }
            }), overlay.current);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./plugins/curly-suggestions/types
      *************************************************/

      ims.set('./plugins/curly-suggestions/types', {
        hash: 4016320096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CURLY_KEY = void 0;
          /**
           * File: plugins/curly-suggestions/types.ts
           */
          const CURLY_KEY = exports.CURLY_KEY = Symbol('curly-options');
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./plugins/curly-suggestions/use-curly-suggestions
      *****************************************************************/

      ims.set('./plugins/curly-suggestions/use-curly-suggestions', {
        hash: 4042400132,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCurlySuggestions = useCurlySuggestions;
          var _react = require("react");
          var _slate = require("slate");
          /**
           * File: plugins/curly-suggestions/use-curly-suggestions.tsx
           */

          function useCurlySuggestions(editor, opts) {
            const [target, setTarget] = (0, _react.useState)(null);
            const [index, setIndex] = (0, _react.useState)(0);
            const [suggestions, setSuggestions] = (0, _react.useState)([]);
            function reset() {
              setTarget(null);
              setIndex(0);
              setSuggestions([]);
            }
            async function load() {
              const all = await opts.fetch('');
              setSuggestions(all);
            }
            function onChange(val) {
              const {
                selection
              } = editor;
              if (!selection || !_slate.Range.isCollapsed(selection)) {
                reset();
                return;
              }
              const before = _slate.Editor.before(editor, selection.anchor, {
                unit: 'character'
              });
              if (!before) return;
              const charRange = _slate.Editor.range(editor, before, selection.anchor);
              const char = _slate.Editor.string(editor, charRange);
              if (char === '{') {
                setTarget(charRange);
                setIndex(0);
                load();
              } else if (target) {
                reset();
              }
            }
            return {
              target,
              index,
              setIndex,
              suggestions,
              reset,
              onChange
            };
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./plugins/heading
      *********************************/

      ims.set('./plugins/heading', {
        hash: 3101212486,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.headingPluginDescriptor = void 0;
          var _react = require("react");
          var _slate = require("slate");
          var _pluginContract = require("../core/plugin-contract");
          const KEY = Symbol('heading-options');
          const headingPluginDescriptor = exports.headingPluginDescriptor = {
            id: 'heading',
            defaults: {
              hotkeys: true,
              levels: [1, 2, 3, 4, 5, 6]
            },
            create(opts) {
              const withEditor = ed => (0, _pluginContract.attachOpts)(ed, KEY, opts);
              return {
                name: 'heading',
                withEditor,
                renderElement({
                  attributes,
                  children,
                  element
                }) {
                  if (element.type !== 'heading') return undefined;
                  const Tag = `h${element.level}`;
                  return _react.default.createElement(Tag, {
                    ...attributes
                  }, children);
                },
                onKeyDown(e, ed) {
                  const o = ed[KEY];
                  if (!o.hotkeys || !(e.ctrlKey || e.metaKey) || !e.altKey) return false;
                  const lvl = Number(e.key);
                  if (!o.levels.includes(lvl)) return false;
                  e.preventDefault();
                  _slate.Transforms.setNodes(ed, {
                    type: 'heading',
                    level: lvl
                  }, {
                    match: n => _slate.Editor.isBlock(ed, n)
                  });
                  return true;
                }
              };
            }
          };
        }
      });

      /********************************
      INTERNAL MODULE: ./plugins/italic
      ********************************/

      ims.set('./plugins/italic', {
        hash: 3991324171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.italicPluginDescriptor = void 0;
          var _react = require("react");
          var _slate = require("slate");
          var _pluginContract = require("../core/plugin-contract");
          const KEY = Symbol('italic-options');
          const italicPluginDescriptor = exports.italicPluginDescriptor = {
            id: 'italic',
            defaults: {
              hotkey: 'i'
            },
            create(opts) {
              const withEditor = ed => (0, _pluginContract.attachOpts)(ed, KEY, opts);
              return {
                name: 'italic',
                withEditor,
                renderLeaf({
                  attributes,
                  children,
                  leaf
                }) {
                  return leaf.italic ? _react.default.createElement("em", {
                    ...attributes
                  }, children) : undefined;
                },
                onKeyDown(e, ed) {
                  const o = ed[KEY];
                  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === o.hotkey) {
                    e.preventDefault();
                    const active = _slate.Editor.marks(ed)?.italic === true;
                    active ? _slate.Editor.removeMark(ed, 'italic') : _slate.Editor.addMark(ed, 'italic', true);
                    return true;
                  }
                  return false;
                },
                onTextInserted(ed, ch) {
                  if (ch !== ' ' && ch !== '\n') return;
                  if (!ed.selection || !_slate.Range.isCollapsed(ed.selection)) return;
                  const before = _slate.Editor.before(ed, ed.selection.anchor, {
                    unit: 'word'
                  });
                  if (!before) return;
                  const wordRange = _slate.Editor.range(ed, before, ed.selection.anchor);
                  const word = _slate.Editor.string(ed, wordRange);
                  const m = /^(?:\*|_)(.+)(?:\*|_)$/.exec(word);
                  if (!m) return;
                  _slate.Editor.withoutNormalizing(ed, () => {
                    _slate.Transforms.select(ed, wordRange);
                    _slate.Transforms.delete(ed);
                    _slate.Editor.insertText(ed, m[1]);
                    _slate.Editor.addMark(ed, 'italic', true);
                  });
                }
              };
            }
          };
        }
      });

      /******************************************
      INTERNAL MODULE: ./plugins/mentions/element
      ******************************************/

      ims.set('./plugins/mentions/element', {
        hash: 2665413182,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MentionElement = MentionElement;
          var _react = require("react");
          function MentionElement({
            attributes,
            children,
            element
          }) {
            // Type guard for MentionElementType
            if (element.type !== 'mention') return undefined;
            const mention = element;
            console.log(4, mention);
            return _react.default.createElement("span", {
              ...attributes,
              className: "mention-chip"
            }, "@", mention.value, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./plugins/mentions/index
      ****************************************/

      ims.set('./plugins/mentions/index', {
        hash: 931489369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mentionPluginDescriptor = void 0;
          var _react = require("react");
          var _slate = require("slate");
          var _pluginContract = require("../../core/plugin-contract");
          var _portal = require("./portal");
          var _element = require("./element");
          var _settings = require("./settings");
          const mentionPluginDescriptor = exports.mentionPluginDescriptor = {
            id: 'mention',
            defaults: {
              fetch: async () => [],
              minChars: 1
            },
            create(opts) {
              /* ------------------------------------------------------------------
              1 · Enhance the editor so Slate knows "mention" is INLINE
              ------------------------------------------------------------------ */
              const withEditor = ed => {
                const {
                  isInline
                } = ed;
                (0, _pluginContract.attachOpts)(ed, _settings.MENTION_KEY, opts); // keep options on instance
                ed.isInline = el => el.type === 'mention' ? true : isInline(el);
                return ed;
              };
              /* ------------------------------------------------------------------
              2 · Return the runtime plugin
              ------------------------------------------------------------------ */
              return {
                name: 'mention',
                withEditor,
                renderElement: p => p.element.type === 'mention' ? _react.default.createElement(_element.MentionElement, {
                  ...p
                }) : undefined,
                onKeyDown(event, ed) {
                  const api = _portal.mentionState.get(ed);
                  if (!api || !api.target) return false;
                  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                    event.preventDefault();
                    const dir = event.key === 'ArrowDown' ? 1 : -1;
                    api.setIndex(i => (i + dir + api.suggestions.length) % api.suggestions.length);
                    return true;
                  }
                  if (event.key === 'Enter' || event.key === 'Tab') {
                    event.preventDefault();
                    const item = api.suggestions[api.index];
                    if (item) {
                      _slate.Transforms.select(ed, api.target);
                      _slate.Transforms.insertNodes(ed, {
                        type: 'mention',
                        uid: item.id,
                        value: item.label,
                        children: [{
                          text: ''
                        }]
                      });
                      _slate.Transforms.move(ed);
                      _slate.Editor.insertText(ed, ' '); // optional space after mention
                    }
                    api.reset();
                    return true;
                  }
                  if (event.key === 'Escape') {
                    event.preventDefault();
                    api.reset();
                    return true;
                  }
                  return false;
                },
                onChange(ed, val) {
                  _portal.mentionState.get(ed)?.onChange(val, () => {});
                },
                renderPortal: () => _react.default.createElement(_portal.MentionPortal, {
                  key: "mention-portal"
                })
              };
            }
          };
        }
      });

      /*****************************************
      INTERNAL MODULE: ./plugins/mentions/portal
      *****************************************/

      ims.set('./plugins/mentions/portal', {
        hash: 1309290113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MentionPortal = MentionPortal;
          exports.mentionState = void 0;
          var _react = require("react");
          var _reactDom = require("react-dom");
          var _slate = require("slate");
          var _slateReact = require("slate-react");
          var _overlayProvider = require("../../core/overlay-provider");
          var _suggestionList = require("./suggestion-list");
          var _useMentionSuggestions = require("./use-mention-suggestions");
          var _settings = require("./settings");
          /* WeakMap to expose hook state */
          const mentionState = exports.mentionState = new WeakMap();
          function MentionPortal() {
            const editor = (0, _slateReact.useSlateStatic)();
            const overlay = (0, _overlayProvider.useOverlayRoot)();
            const opts = editor[_settings.MENTION_KEY]; // ← fixed
            const api = (0, _useMentionSuggestions.useMentionSuggestions)(editor, opts);
            mentionState.set(editor, api);
            if (!overlay.current || !api.target) return null;
            return _reactDom.default.createPortal(_react.default.createElement(_suggestionList.SuggestionList, {
              portalRoot: overlay,
              target: api.target,
              search: api.search,
              index: api.index,
              setIndex: api.setIndex,
              suggestions: api.suggestions,
              onSelect: item => {
                _slate.Transforms.select(editor, api.target);
                _slate.Transforms.insertNodes(editor, {
                  type: 'mention',
                  uid: item.id,
                  value: item.label,
                  children: [{
                    text: ''
                  }]
                });
                _slate.Transforms.move(editor);
                api.reset();
              }
            }), overlay.current);
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./plugins/mentions/settings
      *******************************************/

      ims.set('./plugins/mentions/settings', {
        hash: 1375583878,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MENTION_KEY = void 0;
          /* Key used to stash options on the editor instance */
          const MENTION_KEY = exports.MENTION_KEY = Symbol('mention-options');
        }
      });

      /**************************************************
      INTERNAL MODULE: ./plugins/mentions/suggestion-list
      **************************************************/

      ims.set('./plugins/mentions/suggestion-list', {
        hash: 849412411,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionList = SuggestionList;
          var _react = require("react");
          var _reactDom = require("react-dom");
          var _slateReact = require("slate-react");
          function SuggestionList({
            portalRoot,
            target,
            index,
            setIndex,
            suggestions,
            onSelect
          }) {
            const editor = (0, _slateReact.useSlateStatic)();
            const ref = (0, _react.useRef)(null);
            const [pos, setPos] = (0, _react.useState)(null);
            // calcula la posición cada vez que cambia el rango
            (0, _react.useLayoutEffect)(() => {
              if (!portalRoot.current) return;
              const domRange = _slateReact.ReactEditor.toDOMRange(editor, target);
              const rect = domRange.getBoundingClientRect();
              const overlayRect = portalRoot.current.getBoundingClientRect();
              setPos({
                top: rect.bottom - overlayRect.top + 75,
                left: rect.left - overlayRect.left + 24
              });
            }, [editor, target, portalRoot]);
            if (!portalRoot.current || !pos) return null;
            return _reactDom.default.createPortal(_react.default.createElement("div", {
              ref: ref,
              style: {
                position: 'absolute',
                top: pos.top,
                left: pos.left
              },
              className: "suggestion-list"
            }, suggestions.map((item, i) => _react.default.createElement("div", {
              key: item.id,
              className: `suggestion-item ${i === index ? 'suggestion-item--highlight' : ''}`,
              onMouseDown: e => {
                e.preventDefault();
                onSelect(item);
              },
              onMouseEnter: () => setIndex(i)
            }, item.label))), portalRoot.current);
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./plugins/mentions/use-mention-suggestions
      **********************************************************/

      ims.set('./plugins/mentions/use-mention-suggestions', {
        hash: 2567899898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMentionSuggestions = useMentionSuggestions;
          var _react = require("react");
          var _slate = require("slate");
          /**
           * Keeps track of “@”, current query and async suggestions
           */
          function useMentionSuggestions(editor, opts) {
            const [target, setTarget] = (0, _react.useState)(null);
            const [search, setSearch] = (0, _react.useState)('');
            const [index, setIndex] = (0, _react.useState)(0);
            const [suggestions, setSuggestions] = (0, _react.useState)([]);
            function reset() {
              setTarget(null);
              setSearch('');
              setIndex(0);
              setSuggestions([]);
            }
            async function refresh(q) {
              const all = await Promise.resolve(opts.fetch(q));
              setSuggestions(all.filter(s => s.label.toLowerCase().includes(q.toLowerCase())));
            }
            /** Called once per Slate onChange */
            function onChange(val, setVal) {
              setVal(val);
              const {
                selection
              } = editor;
              if (!selection || !_slate.Range.isCollapsed(selection)) {
                reset();
                return;
              }
              const before = _slate.Editor.before(editor, selection.anchor, {
                unit: 'character'
              });
              if (!before) return;
              const charRange = _slate.Editor.range(editor, before, selection.anchor);
              const char = _slate.Editor.string(editor, charRange);
              if (char !== '@' && !target) return;
              if (char === '@') {
                setTarget(charRange);
                setSearch('');
                setIndex(0);
                refresh('');
                return;
              }
              if (target) {
                const queryRange = _slate.Editor.range(editor, target.anchor, selection.anchor);
                const q = _slate.Editor.string(editor, queryRange).slice(1);
                if (/\s/.test(q) || q.length < opts.minChars) {
                  reset();
                  return;
                }
                setSearch(q);
                refresh(q);
              }
            }
            return {
              target,
              search,
              index,
              setIndex,
              suggestions,
              reset,
              onChange
            };
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./plugins/registry
      **********************************/

      ims.set('./plugins/registry', {
        hash: 1741720851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.buildPlugins = buildPlugins;
          var _bold = require("./bold");
          var _italic = require("./italic");
          var _heading = require("./heading");
          var _mentions = require("./mentions");
          var _curlySuggestions = require("./curly-suggestions");
          const coreLibrary = [_bold.boldPluginDescriptor, _italic.italicPluginDescriptor, _heading.headingPluginDescriptor, _mentions.mentionPluginDescriptor, _curlySuggestions.curlyBracePluginDescriptor];
          /**
           * Mezcla plugins core + externos, aplica config.plugins[ID]
           */
          function buildPlugins(pluginOpts = {}, extra = []) {
            const full = [...coreLibrary, ...extra];
            return full.filter(d => pluginOpts[d.id] !== false) // permitir deshabilitar
            .map(d => {
              const cfg = pluginOpts[d.id] ?? {};
              return d.create({
                ...d.defaults,
                ...cfg
              });
            });
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "PromptEditor",
        "name": "PromptEditor"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PromptEditor') && _export("PromptEditor", PromptEditor = require ? require('./index').PromptEditor : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiT3ZlcmxheUN0eCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VPdmVybGF5Um9vdCIsImN0eCIsInVzZUNvbnRleHQiLCJFcnJvciIsImV4cG9ydHMiLCJPdmVybGF5UHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlZiIsInVzZVJlZiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImF0dGFjaE9wdHMiLCJlZCIsImtleSIsIm9wdHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbXBvc2VQbHVnaW5zIiwiZWRpdG9yIiwicGx1Z2lucyIsInJlZHVjZSIsImFjYyIsInAiLCJ3aXRoRWRpdG9yIiwiY29tYmluZVJlbmRlcmVycyIsInByb3BzIiwiZm4iLCJlbCIsImF0dHJpYnV0ZXMiLCJfc2xhdGUiLCJfdW5pZmllZCIsIl9yZW1hcmtQYXJzZSIsIl9yZW1hcmtTdHJpbmdpZnkiLCJfcmVtYXJrU2xhdGVUcmFuc2Zvcm1lciIsIm1kQXN0IiwibWQiLCJ1bmlmaWVkIiwidXNlIiwicGFyc2UiLCJ0cmFuc2Zvcm1lciIsImZyb21NYXJrZG93biIsInJlbWFya1RvU2xhdGUiLCJwcm9jZXNzU3luYyIsInJlc3VsdCIsIm1hcmtkb3duIiwibm9kZXMiLCJtZFRyZWUiLCJzbGF0ZVRvUmVtYXJrIiwiYnVsbGV0IiwiZmVuY2VzIiwiZW1waGFzaXMiLCJzdHJvbmciLCJzdHJpbmdpZnkiLCJ0ZXh0Iiwib3V0Iiwid2FsayIsIm4iLCJUZXh0IiwiaXNUZXh0IiwiZm9yRWFjaCIsIndpdGhIb3RrZXlzIiwib25LZXlEb3duIiwiaW5zZXJ0VGV4dCIsIm9uVGV4dEluc2VydGVkIiwiX3NsYXRlUmVhY3QiLCJfb3ZlcmxheVByb3ZpZGVyIiwiX3BsdWdpblV0aWxzIiwiX3dpdGhIb3RrZXlzIiwiX3JlZ2lzdHJ5IiwiX3RyYW5zZm9ybSIsIlByb21wdEVkaXRvciIsImZvcm1hdCIsImNvbmZpZyIsIm9uQ2hhbmdlIiwidXNlTWVtbyIsImJ1aWxkUGx1Z2lucyIsImV4dHJhIiwiYmFzZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImVuaGFuY2VkIiwiaW5pdGlhbCIsIkFycmF5IiwiaXNBcnJheSIsInR5cGUiLCJpbnRlcm5hbCIsInNldEludGVybmFsIiwidXNlU3RhdGUiLCJyZW5kZXJFbGVtZW50IiwicmVuZGVyTGVhZiIsImVtaXQiLCJ2IiwiU2xhdGUiLCJpbml0aWFsVmFsdWUiLCJFZGl0YWJsZSIsInNwZWxsQ2hlY2siLCJhdXRvRm9jdXMiLCJlIiwic29tZSIsIm1hcCIsInJlbmRlclBvcnRhbCIsIl9wbHVnaW5Db250cmFjdCIsIktFWSIsIlN5bWJvbCIsImJvbGRQbHVnaW5EZXNjcmlwdG9yIiwiaWQiLCJkZWZhdWx0cyIsImhvdGtleSIsImNyZWF0ZSIsIm5hbWUiLCJsZWFmIiwiYm9sZCIsInVuZGVmaW5lZCIsIm8iLCJjdHJsS2V5IiwibWV0YUtleSIsInRvTG93ZXJDYXNlIiwicHJldmVudERlZmF1bHQiLCJhY3RpdmUiLCJFZGl0b3IiLCJtYXJrcyIsInJlbW92ZU1hcmsiLCJhZGRNYXJrIiwiY2giLCJzZWxlY3Rpb24iLCJSYW5nZSIsImlzQ29sbGFwc2VkIiwiYmVmb3JlIiwiYW5jaG9yIiwidW5pdCIsIndvcmRSYW5nZSIsInJhbmdlIiwid29yZCIsInN0cmluZyIsIm0iLCJleGVjIiwid2l0aG91dE5vcm1hbGl6aW5nIiwiVHJhbnNmb3JtcyIsInNlbGVjdCIsImRlbGV0ZSIsIl90eXBlcyIsIl9yZW5kZXJMZWFmIiwiY3VybHlQb3BvdmVyUGx1Z2luRGVzY3JpcHRvciIsImFjdGlvbnMiLCJsYWJlbCIsInJ1biIsInRvayIsInIiLCJ0b1VwcGVyQ2FzZSIsImF0IiwiX3RvayIsIl90b2tlblNwYW4iLCJ0ZXN0IiwiVG9rZW5TcGFuIiwidG9rZW4iLCJfcmVhY3QyIiwidXNlU2xhdGVTdGF0aWMiLCJwYXRoIiwiUmVhY3RFZGl0b3IiLCJmaW5kUGF0aCIsInN0YXJ0IiwiZW5kIiwidG9rZW5SYW5nZSIsImZvY3VzIiwiY29udGVudCIsImEiLCJvbkNsaWNrIiwiaW50ZXJhY3RpdmUiLCJkZWxheSIsInBsYWNlbWVudCIsInRoZW1lIiwiX3BvcnRhbCIsImN1cmx5QnJhY2VQbHVnaW5EZXNjcmlwdG9yIiwiZmV0Y2giLCJDVVJMWV9LRVkiLCJzdGF0ZSIsIldlYWtNYXAiLCJ2YWwiLCJnZXQiLCJhcGkiLCJ0YXJnZXQiLCJkaXIiLCJzZXRJbmRleCIsImkiLCJzdWdnZXN0aW9ucyIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsInJlc2V0IiwiQ3VybHlCcmFjZVBvcnRhbCIsIm9wdGlvbnMiLCJfdXNlQ3VybHlTdWdnZXN0aW9ucyIsIl9yZWFjdERvbSIsIl9zdWdnZXN0aW9uTGlzdCIsIm92ZXJsYXkiLCJ1c2VDdXJseVN1Z2dlc3Rpb25zIiwic2V0IiwiY3VycmVudCIsImNyZWF0ZVBvcnRhbCIsIlN1Z2dlc3Rpb25MaXN0IiwicG9ydGFsUm9vdCIsInNlYXJjaCIsIm9uU2VsZWN0Iiwic2V0VGFyZ2V0Iiwic2V0U3VnZ2VzdGlvbnMiLCJsb2FkIiwiYWxsIiwiY2hhclJhbmdlIiwiY2hhciIsImhlYWRpbmdQbHVnaW5EZXNjcmlwdG9yIiwiaG90a2V5cyIsImxldmVscyIsImVsZW1lbnQiLCJUYWciLCJsZXZlbCIsImFsdEtleSIsImx2bCIsIk51bWJlciIsImluY2x1ZGVzIiwic2V0Tm9kZXMiLCJtYXRjaCIsImlzQmxvY2siLCJpdGFsaWNQbHVnaW5EZXNjcmlwdG9yIiwiaXRhbGljIiwiTWVudGlvbkVsZW1lbnQiLCJtZW50aW9uIiwiY29uc29sZSIsImxvZyIsIl9lbGVtZW50IiwiX3NldHRpbmdzIiwibWVudGlvblBsdWdpbkRlc2NyaXB0b3IiLCJtaW5DaGFycyIsImlzSW5saW5lIiwiTUVOVElPTl9LRVkiLCJldmVudCIsIm1lbnRpb25TdGF0ZSIsImluc2VydE5vZGVzIiwidWlkIiwibW92ZSIsIk1lbnRpb25Qb3J0YWwiLCJfdXNlTWVudGlvblN1Z2dlc3Rpb25zIiwidXNlTWVudGlvblN1Z2dlc3Rpb25zIiwicG9zIiwic2V0UG9zIiwidXNlTGF5b3V0RWZmZWN0IiwiZG9tUmFuZ2UiLCJ0b0RPTVJhbmdlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm92ZXJsYXlSZWN0IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInN0eWxlIiwicG9zaXRpb24iLCJvbk1vdXNlRG93biIsIm9uTW91c2VFbnRlciIsInNldFNlYXJjaCIsInJlZnJlc2giLCJxIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmaWx0ZXIiLCJzIiwic2V0VmFsIiwicXVlcnlSYW5nZSIsInNsaWNlIiwiX2JvbGQiLCJfaXRhbGljIiwiX2hlYWRpbmciLCJfbWVudGlvbnMiLCJfY3VybHlTdWdnZXN0aW9ucyIsImNvcmVMaWJyYXJ5IiwicGx1Z2luT3B0cyIsImZ1bGwiLCJkIiwiY2ZnIl0sInNvdXJjZXMiOlsiL3RzL2NvcmUvb3ZlcmxheS1wcm92aWRlci50c3giLCIvdHMvY29yZS9wbHVnaW4tY29udHJhY3QudHMiLCIvcGx1Z2luLXR5cGVzLnRzIiwiL3RzL2NvcmUvcGx1Z2luLXV0aWxzLnRzeCIsIi90cy9jb3JlL3RyYW5zZm9ybS50cyIsIi90cy9jb3JlL3dpdGgtaG90a2V5cy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvcGx1Z2lucy9ib2xkLnRzeCIsIi90cy9wbHVnaW5zL2N1cmx5LXBvcG92ZXIvaW5kZXgudHN4IiwiL3RzL3BsdWdpbnMvY3VybHktcG9wb3Zlci9yZW5kZXItbGVhZi50c3giLCIvdHMvcGx1Z2lucy9jdXJseS1wb3BvdmVyL3Rva2VuLXNwYW4udHN4IiwiL3RzL3BsdWdpbnMvY3VybHktcG9wb3Zlci90eXBlcy50cyIsIi90cy9wbHVnaW5zL2N1cmx5LXN1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy9wbHVnaW5zL2N1cmx5LXN1Z2dlc3Rpb25zL3BvcnRhbC50c3giLCIvdHMvcGx1Z2lucy9jdXJseS1zdWdnZXN0aW9ucy90eXBlcy50cyIsIi90cy9wbHVnaW5zL2N1cmx5LXN1Z2dlc3Rpb25zL3VzZS1jdXJseS1zdWdnZXN0aW9ucy50c3giLCIvdHMvcGx1Z2lucy9oZWFkaW5nLnRzeCIsIi90cy9wbHVnaW5zL2l0YWxpYy50c3giLCIvdHMvcGx1Z2lucy9tZW50aW9ucy9lbGVtZW50LnRzeCIsIi90cy9wbHVnaW5zL21lbnRpb25zL2luZGV4LnRzeCIsIi90cy9wbHVnaW5zL21lbnRpb25zL3BvcnRhbC50c3giLCIvdHMvcGx1Z2lucy9tZW50aW9ucy9zZXR0aW5ncy50cyIsIi90cy9wbHVnaW5zL21lbnRpb25zL3N1Z2dlc3Rpb24tbGlzdC50c3giLCIvdHMvcGx1Z2lucy9tZW50aW9ucy91c2UtbWVudGlvbi1zdWdnZXN0aW9ucy50cyIsIi90cy9wbHVnaW5zL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQURBOztVQUdBO1VBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUFGLE1BQUEsQ0FBQUcsYUFBYSxFQUF5QyxJQUFJLENBQUM7VUFFdkUsTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQUs7WUFDbEMsTUFBTUMsR0FBRyxHQUFHLElBQUFMLE1BQUEsQ0FBQU0sVUFBVSxFQUFDSixVQUFVLENBQUM7WUFDbEMsSUFBSSxDQUFDRyxHQUFHLEVBQUUsTUFBTSxJQUFJRSxLQUFLLENBQUMseUJBQXlCLENBQUM7WUFDcEQsT0FBT0YsR0FBRztVQUNYLENBQUM7VUFBQ0csT0FBQSxDQUFBSixjQUFBLEdBQUFBLGNBQUE7VUFFSyxN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