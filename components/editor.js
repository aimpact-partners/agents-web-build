System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "slate@0.114.0", "slate-react@0.114.2", "unified@11.0.5", "remark-parse@11.0.0", "remark-stringify@11.0.0", "remark-slate-transformer@0.9.0", "@tippyjs/react@4.2.6", "react-dom@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, PromptEditor, __beyond_pkg, hmr;
  _export("PromptEditor", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
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
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiT3ZlcmxheUN0eCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VPdmVybGF5Um9vdCIsImN0eCIsInVzZUNvbnRleHQiLCJFcnJvciIsImV4cG9ydHMiLCJPdmVybGF5UHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlZiIsInVzZVJlZiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImF0dGFjaE9wdHMiLCJlZCIsImtleSIsIm9wdHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbXBvc2VQbHVnaW5zIiwiZWRpdG9yIiwicGx1Z2lucyIsInJlZHVjZSIsImFjYyIsInAiLCJ3aXRoRWRpdG9yIiwiY29tYmluZVJlbmRlcmVycyIsInByb3BzIiwiZm4iLCJlbCIsImF0dHJpYnV0ZXMiLCJfc2xhdGUiLCJfdW5pZmllZCIsIl9yZW1hcmtQYXJzZSIsIl9yZW1hcmtTdHJpbmdpZnkiLCJfcmVtYXJrU2xhdGVUcmFuc2Zvcm1lciIsIm1kQXN0IiwibWQiLCJ1bmlmaWVkIiwidXNlIiwicGFyc2UiLCJ0cmFuc2Zvcm1lciIsImZyb21NYXJrZG93biIsInJlbWFya1RvU2xhdGUiLCJwcm9jZXNzU3luYyIsInJlc3VsdCIsIm1hcmtkb3duIiwibm9kZXMiLCJtZFRyZWUiLCJzbGF0ZVRvUmVtYXJrIiwiYnVsbGV0IiwiZmVuY2VzIiwiZW1waGFzaXMiLCJzdHJvbmciLCJzdHJpbmdpZnkiLCJ0ZXh0Iiwib3V0Iiwid2FsayIsIm4iLCJUZXh0IiwiaXNUZXh0IiwiZm9yRWFjaCIsIndpdGhIb3RrZXlzIiwib25LZXlEb3duIiwiaW5zZXJ0VGV4dCIsIm9uVGV4dEluc2VydGVkIiwiX3NsYXRlUmVhY3QiLCJfb3ZlcmxheVByb3ZpZGVyIiwiX3BsdWdpblV0aWxzIiwiX3dpdGhIb3RrZXlzIiwiX3JlZ2lzdHJ5IiwiX3RyYW5zZm9ybSIsIlByb21wdEVkaXRvciIsImZvcm1hdCIsImNvbmZpZyIsIm9uQ2hhbmdlIiwidXNlTWVtbyIsImJ1aWxkUGx1Z2lucyIsImV4dHJhIiwiYmFzZSIsIndpdGhSZWFjdCIsImNyZWF0ZUVkaXRvciIsImVuaGFuY2VkIiwiaW5pdGlhbCIsIkFycmF5IiwiaXNBcnJheSIsInR5cGUiLCJpbnRlcm5hbCIsInNldEludGVybmFsIiwidXNlU3RhdGUiLCJyZW5kZXJFbGVtZW50IiwicmVuZGVyTGVhZiIsImVtaXQiLCJ2IiwiU2xhdGUiLCJpbml0aWFsVmFsdWUiLCJFZGl0YWJsZSIsInNwZWxsQ2hlY2siLCJhdXRvRm9jdXMiLCJlIiwic29tZSIsIm1hcCIsInJlbmRlclBvcnRhbCIsIl9wbHVnaW5Db250cmFjdCIsIktFWSIsIlN5bWJvbCIsImJvbGRQbHVnaW5EZXNjcmlwdG9yIiwiaWQiLCJkZWZhdWx0cyIsImhvdGtleSIsImNyZWF0ZSIsIm5hbWUiLCJsZWFmIiwiYm9sZCIsInVuZGVmaW5lZCIsIm8iLCJjdHJsS2V5IiwibWV0YUtleSIsInRvTG93ZXJDYXNlIiwicHJldmVudERlZmF1bHQiLCJhY3RpdmUiLCJFZGl0b3IiLCJtYXJrcyIsInJlbW92ZU1hcmsiLCJhZGRNYXJrIiwiY2giLCJzZWxlY3Rpb24iLCJSYW5nZSIsImlzQ29sbGFwc2VkIiwiYmVmb3JlIiwiYW5jaG9yIiwidW5pdCIsIndvcmRSYW5nZSIsInJhbmdlIiwid29yZCIsInN0cmluZyIsIm0iLCJleGVjIiwid2l0aG91dE5vcm1hbGl6aW5nIiwiVHJhbnNmb3JtcyIsInNlbGVjdCIsImRlbGV0ZSIsIl90eXBlcyIsIl9yZW5kZXJMZWFmIiwiY3VybHlQb3BvdmVyUGx1Z2luRGVzY3JpcHRvciIsImFjdGlvbnMiLCJsYWJlbCIsInJ1biIsInRvayIsInIiLCJ0b1VwcGVyQ2FzZSIsImF0IiwiX3RvayIsIl90b2tlblNwYW4iLCJ0ZXN0IiwiVG9rZW5TcGFuIiwidG9rZW4iLCJfcmVhY3QyIiwidXNlU2xhdGVTdGF0aWMiLCJwYXRoIiwiUmVhY3RFZGl0b3IiLCJmaW5kUGF0aCIsInN0YXJ0IiwiZW5kIiwidG9rZW5SYW5nZSIsImZvY3VzIiwiY29udGVudCIsImEiLCJvbkNsaWNrIiwiaW50ZXJhY3RpdmUiLCJkZWxheSIsInBsYWNlbWVudCIsInRoZW1lIiwiX3BvcnRhbCIsImN1cmx5QnJhY2VQbHVnaW5EZXNjcmlwdG9yIiwiZmV0Y2giLCJDVVJMWV9LRVkiLCJzdGF0ZSIsIldlYWtNYXAiLCJ2YWwiLCJnZXQiLCJhcGkiLCJ0YXJnZXQiLCJkaXIiLCJzZXRJbmRleCIsImkiLCJzdWdnZXN0aW9ucyIsImxlbmd0aCIsIml0ZW0iLCJpbmRleCIsInJlc2V0IiwiQ3VybHlCcmFjZVBvcnRhbCIsIm9wdGlvbnMiLCJfdXNlQ3VybHlTdWdnZXN0aW9ucyIsIl9yZWFjdERvbSIsIl9zdWdnZXN0aW9uTGlzdCIsIm92ZXJsYXkiLCJ1c2VDdXJseVN1Z2dlc3Rpb25zIiwic2V0IiwiY3VycmVudCIsImNyZWF0ZVBvcnRhbCIsIlN1Z2dlc3Rpb25MaXN0IiwicG9ydGFsUm9vdCIsInNlYXJjaCIsIm9uU2VsZWN0Iiwic2V0VGFyZ2V0Iiwic2V0U3VnZ2VzdGlvbnMiLCJsb2FkIiwiYWxsIiwiY2hhclJhbmdlIiwiY2hhciIsImhlYWRpbmdQbHVnaW5EZXNjcmlwdG9yIiwiaG90a2V5cyIsImxldmVscyIsImVsZW1lbnQiLCJUYWciLCJsZXZlbCIsImFsdEtleSIsImx2bCIsIk51bWJlciIsImluY2x1ZGVzIiwic2V0Tm9kZXMiLCJtYXRjaCIsImlzQmxvY2siLCJpdGFsaWNQbHVnaW5EZXNjcmlwdG9yIiwiaXRhbGljIiwiTWVudGlvbkVsZW1lbnQiLCJtZW50aW9uIiwiY29uc29sZSIsImxvZyIsIl9lbGVtZW50IiwiX3NldHRpbmdzIiwibWVudGlvblBsdWdpbkRlc2NyaXB0b3IiLCJtaW5DaGFycyIsImlzSW5saW5lIiwiTUVOVElPTl9LRVkiLCJldmVudCIsIm1lbnRpb25TdGF0ZSIsImluc2VydE5vZGVzIiwidWlkIiwibW92ZSIsIk1lbnRpb25Qb3J0YWwiLCJfdXNlTWVudGlvblN1Z2dlc3Rpb25zIiwidXNlTWVudGlvblN1Z2dlc3Rpb25zIiwicG9zIiwic2V0UG9zIiwidXNlTGF5b3V0RWZmZWN0IiwiZG9tUmFuZ2UiLCJ0b0RPTVJhbmdlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm92ZXJsYXlSZWN0IiwidG9wIiwiYm90dG9tIiwibGVmdCIsInN0eWxlIiwicG9zaXRpb24iLCJvbk1vdXNlRG93biIsIm9uTW91c2VFbnRlciIsInNldFNlYXJjaCIsInJlZnJlc2giLCJxIiwiUHJvbWlzZSIsInJlc29sdmUiLCJmaWx0ZXIiLCJzIiwic2V0VmFsIiwicXVlcnlSYW5nZSIsInNsaWNlIiwiX2JvbGQiLCJfaXRhbGljIiwiX2hlYWRpbmciLCJfbWVudGlvbnMiLCJfY3VybHlTdWdnZXN0aW9ucyIsImNvcmVMaWJyYXJ5IiwicGx1Z2luT3B0cyIsImZ1bGwiLCJkIiwiY2ZnIl0sInNvdXJjZXMiOlsiLy90cy9jb3JlL292ZXJsYXktcHJvdmlkZXIudHN4IiwiLy90cy9jb3JlL3BsdWdpbi1jb250cmFjdC50cyIsIi8vcGx1Z2luLXR5cGVzLnRzLyIsIi8vdHMvY29yZS9wbHVnaW4tdXRpbHMudHN4IiwiLy90cy9jb3JlL3RyYW5zZm9ybS50cyIsIi8vdHMvY29yZS93aXRoLWhvdGtleXMudHMiLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvcGx1Z2lucy9ib2xkLnRzeCIsIi8vdHMvcGx1Z2lucy9jdXJseS1wb3BvdmVyL2luZGV4LnRzeCIsIi8vdHMvcGx1Z2lucy9jdXJseS1wb3BvdmVyL3JlbmRlci1sZWFmLnRzeCIsIi8vdHMvcGx1Z2lucy9jdXJseS1wb3BvdmVyL3Rva2VuLXNwYW4udHN4IiwiLy90cy9wbHVnaW5zL2N1cmx5LXBvcG92ZXIvdHlwZXMudHMiLCIvL3RzL3BsdWdpbnMvY3VybHktc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiLy90cy9wbHVnaW5zL2N1cmx5LXN1Z2dlc3Rpb25zL3BvcnRhbC50c3giLCIvL3RzL3BsdWdpbnMvY3VybHktc3VnZ2VzdGlvbnMvdHlwZXMudHMiLCIvL3RzL3BsdWdpbnMvY3VybHktc3VnZ2VzdGlvbnMvdXNlLWN1cmx5LXN1Z2dlc3Rpb25zLnRzeCIsIi8vdHMvcGx1Z2lucy9oZWFkaW5nLnRzeCIsIi8vdHMvcGx1Z2lucy9pdGFsaWMudHN4IiwiLy90cy9wbHVnaW5zL21lbnRpb25zL2VsZW1lbnQudHN4IiwiLy90cy9wbHVnaW5zL21lbnRpb25zL2luZGV4LnRzeCIsIi8vdHMvcGx1Z2lucy9tZW50aW9ucy9wb3J0YWwudHN4IiwiLy90cy9wbHVnaW5zL21lbnRpb25zL3NldHRpbmdzLnRzIiwiLy90cy9wbHVnaW5zL21lbnRpb25zL3N1Z2dlc3Rpb24tbGlzdC50c3giLCIvL3RzL3BsdWdpbnMvbWVudGlvbnMvdXNlLW1lbnRpb24tc3VnZ2VzdGlvbnMudHMiLCIvL3RzL3BsdWdpbnMvcmVnaXN0cnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBREE7O1VBR0E7VUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBQUYsTUFBQSxDQUFBRyxhQUFhLEVBQXlDLElBQUksQ0FBQztVQUV2RSxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBSztZQUNsQyxNQUFNQyxHQUFHLEdBQUcsSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUNHLEdBQUcsRUFBRSxNQUFNLElBQUlFLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztZQUNwRCxPQUFPRixHQUFHO1VBQ1gsQ0FBQztVQUFDRyxPQUFBLENB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