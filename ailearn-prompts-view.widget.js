System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.1.0/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "framer-motion@11.18.2", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, LanguagesPanel, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    LanguagesPanel: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Models) {
      dependency_4 = _aimpactPlatform016Models;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReactive210Model) {
      dependency_6 = _beyondJsReactive210Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_8 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_pragmateUi102Components) {
      dependency_11 = _pragmateUi102Components;
    }, function (_pragmateUi102Form) {
      dependency_12 = _pragmateUi102Form;
    }, function (_pragmateUi102Icons) {
      dependency_13 = _pragmateUi102Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['framer-motion', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-prompts-view",
        "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-view.widget",
        "is": "page",
        "route": "/ailearn/prompts/view/${promptId}",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/ailearn-prompts-view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4228065387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load('a1l34rn1-453a-4612-b6fd-59cb742111d0', this.uri.vars.get('promptId'), this.uri.qs.get('lang'));
            }
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1920173812,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _routing = require("@beyond-js/kernel/routing");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #id;
            isStore = true;
            get id() {
              return this.#id;
            }
            get isNew() {
              return this.#id.includes('new');
            }
            #projectId;
            get projectId() {
              return this.#projectId;
            }
            #prompt;
            get prompt() {
              return this.#prompt;
            }
            #dependencies;
            get dependencies() {
              return this.#dependencies;
            }
            #currentLanguage;
            get currentLanguage() {
              return this.#currentLanguage;
            }
            #language;
            get language() {
              return this.#language;
            }
            #languageTemplates = new Map();
            get languageTemplates() {
              return this.#languageTemplates;
            }
            constructor() {
              super({
                properties: ['comparedLanguage']
              });
              this.getLanguage = this.getLanguage.bind(this);
            }
            extractLiterals(text) {
              const regex = /\{([a-zA-Z0-9_-]+)\}/g;
              const matches = [];
              let match;
              while ((match = regex.exec(text)) !== null) matches.push(match[1]);
              const pure = [];
              const dependencies = [];
              matches.forEach(match => {
                match = match.toUpperCase();
                const i = this.dependencies.find(d => d.name.toUpperCase() === match);
                i ? dependencies.push(match) : pure.push(match);
              });
              this.#prompt.literals = {
                dependencies,
                pure
              };
              return this.#prompt.literals;
            }
            async load(projectId, id, lang) {
              const errors = [];
              !id && errors.push('id');
              !projectId && errors.push('projectId');
              if (errors.length) {
                console.error('Parameters not found: ', errors.join(', '));
                return;
              }
              this.#id = id;
              this.#projectId = projectId;
              this.#prompt = new _models.Prompt({
                id,
                projectId
              });
              if (!this.isNew) {
                await this.#prompt.load();
                if (this.#prompt.error) {
                  console.error(this.#prompt.error);
                  return;
                }
              }
              this.#currentLanguage = lang ? lang : this.#prompt.defaultLanguage;
              // const instance = await this.getLanguage(this.#currentLanguage);
              // this.#language = instance;
              const prompts = await _models.AppWrapper.getPrompts({
                projectId
              });
              this.#dependencies = prompts.dependencies;
              globalThis.store = this;
              this.ready = true;
            }
            async savePrompt() {
              const languages = ['es', 'en'];
              this.fetching = true;
              const response = await this.#prompt.save(languages);
              if (response.error) {
                console.error(response.error);
                return;
              }
              if (this.isNew) {
                this.#id = response.data.id;
                _routing.routing.replaceState({}, '', `/ailearn/prompts/view/${this.#id}`);
                return;
              }
            }
            async saveLanguage(lang, text) {
              this.fetching = true;
              this.extractLiterals(text);
              const instance = await this.getLanguage(lang);
              await this.#prompt.save();
              await instance.set({
                language: lang,
                text
              });
              this.fetching = false;
            }
            async getLanguage(language) {
              this.fetching = true;
              if (this.languageTemplates.has(language)) {
                return this.languageTemplates.get(language);
              }
              const instance = new _models.PromptTemplateLanguages({
                name: this.prompt.identifier
              });
              await instance.get(language);
              this.languageTemplates.set(language, instance);
              this.fetching = false;
              return instance;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1263773019,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePromptsContext = exports.PromptsContext = void 0;
          var _react = require("react");
          const PromptsContext = exports.PromptsContext = _react.default.createContext({});
          const usePromptsContext = () => _react.default.useContext(PromptsContext);
          exports.usePromptsContext = usePromptsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1791629131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _languages = require("./languages");
          var _index = require("./prompt/index");
          const leftPanelVariants = {
            open: {
              x: 0,
              width: '100%',
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20
              }
            },
            minimized: {
              x: 0,
              width: 60,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 20
              }
            }
          };
          const rightPanelVariants = {
            visible: {
              x: 0,
              opacity: 1,
              transition: {
                type: 'tween'
              }
            },
            hidden: {
              x: '100%',
              opacity: 0,
              transition: {
                type: 'tween'
              }
            },
            minimized: {
              x: 0,
              width: 60,
              opacity: 1,
              transition: {
                type: 'spring'
              }
            }
          };
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [text, setText] = (0, _react.useState)(store.language?.value);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [minimized, setMinimized] = (0, _react.useState)(false);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            (0, _hooks.useBinder)([store.language], () => setText(store.language.value));
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const languagesOptions = [{
              value: 'de',
              label: texts.languages.de
            }, {
              value: 'es',
              label: texts.languages.es
            }, {
              value: 'en',
              label: texts.languages.en
            }, {
              value: 'fr',
              label: texts.languages.fr
            }, {
              value: 'it',
              label: texts.languages.it
            }, {
              value: 'pt',
              label: texts.languages.pt
            }];
            const contextValue = {
              store,
              text,
              texts,
              setText,
              languagesOptions
            };
            const cls = `prompt-template-form-container ${minimized ? 'minimized' : ''}`;
            const leftVariant = minimized ? 'minimized' : 'open';
            const toggleLeft = () => setMinimized(false);
            return _react.default.createElement(_context.PromptsContext.Provider, {
              value: {
                ...contextValue,
                minimized,
                setMinimized
              }
            }, _react.default.createElement("div", {
              className: "platform-page-container"
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['Home', '/'], ['RVD - Activities', `/ailearn/prompts`], [texts.pageTitle, '']]
            }), _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_framerMotion.motion.div, {
              className: "prompt-panel",
              variants: leftPanelVariants,
              animate: leftVariant
            }, _react.default.createElement(_index.PromptTemplate, {
              toggle: toggleLeft
            })), _react.default.createElement(_languages.LanguagesPanel, null))));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/languages/index
      ***************************************/

      ims.set('./views/languages/index', {
        hash: 4081826110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguagesPanel = LanguagesPanel;
          var _react = require("react");
          var _template = require("./template");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          /*bundle*/
          function LanguagesPanel() {
            const [panels, setPanels] = (0, _react.useState)(1);
            const {
              setMinimized
            } = (0, _context.usePromptsContext)();
            // Animation variants
            const containerVariants = {
              hidden: {
                opacity: 0
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            };
            const panelVariants = {
              hidden: {
                x: '100%',
                opacity: 0
              },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: 'spring',
                  damping: 12,
                  stiffness: 100
                }
              }
            };
            const output = [];
            for (let i = 0; i < panels; i++) {
              output.push(_react.default.createElement(_framerMotion.motion.div, {
                key: i,
                variants: panelVariants,
                className: "language-panel"
              }, _react.default.createElement(_template.FormLanguageTemplate, {
                key: i,
                total: panels,
                onClose: () => setPanels(1)
              })));
            }
            const onCompare = () => {
              setMinimized(true);
              setPanels(2);
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "languages-container"
            }, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-center"
            }, _react.default.createElement("h3", null, "Prompt definition"), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              disabled: panels > 1,
              variant: "primary",
              onClick: onCompare
            }, "Compare"))), _react.default.createElement(_framerMotion.motion.div, {
              variants: containerVariants,
              initial: "hidden",
              animate: "visible",
              className: "languages-panels-wrapper"
            }, output));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/languages/template
      ******************************************/

      ims.set('./views/languages/template', {
        hash: 3499724642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormLanguageTemplate = FormLanguageTemplate;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function FormLanguageTemplate({
            total,
            onClose
          }) {
            const [text, setText] = (0, _react.useState)('');
            const [selectedLanguage, setSelectedLanguage] = (0, _react.useState)('');
            const [selection, setSelection] = (0, _react.useState)(false);
            const [fetching, setFetching] = (0, _react.useState)(false);
            const {
              store,
              texts,
              languagesOptions
            } = (0, _context.usePromptsContext)();
            const handleTextChange = e => {
              setText(e.target.value);
            };
            const onLanguageChange = async event => {
              const value = event.target.value;
              setSelectedLanguage(value);
              setSelection(!!value);
              if (!value) {
                setText('');
                return;
              }
              try {
                setFetching(true);
                // Get the language instance and set the text from its value
                const languageInstance = await store.getLanguage(value);
                setText(languageInstance.value);
              } finally {
                setFetching(false);
              }
            };
            const onSave = async () => {
              if (!selectedLanguage) return;
              if (!text) return;
              try {
                setFetching(true);
                await store.saveLanguage(selectedLanguage, text);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_framerMotion.motion.div, {
              className: `form-language ${fetching ? 'is-fetching' : ''}`
            }, _react.default.createElement("header", {
              className: "flex-center flex-container flex-space-between"
            }, _react.default.createElement("h5", null, selectedLanguage ? _react.default.createElement(_react.default.Fragment, null, " ", texts.languages[selectedLanguage]) : null), _react.default.createElement("div", {
              className: "flex-container gap-05 flex-center"
            }, total > 1 ? _react.default.createElement(_icons.IconButton, {
              variant: "primary",
              className: "circle",
              icon: "close",
              onClick: onClose
            }) : null, _react.default.createElement(_form.Select, {
              value: selectedLanguage,
              id: "selectLanguageType",
              options: [{
                value: '',
                label: 'Select...'
              }, ...languagesOptions],
              onChange: onLanguageChange
            }))), _react.default.createElement(_form.Textarea, {
              className: "form-language__textarea",
              disabled: fetching,
              value: text,
              onChange: handleTextChange
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: onSave,
              variant: "primary",
              label: 'Guardar',
              disabled: !selection || fetching,
              title: "Guardar Template"
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/prompt/identifier
      *****************************************/

      ims.set('./views/prompt/identifier', {
        hash: 726758206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Identifier = void 0;
          var React = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          const Identifier = () => {
            const {
              store,
              texts
            } = (0, _context.usePromptsContext)();
            return React.createElement("section", {
              className: "identifier__section"
            }, React.createElement("div", {
              className: "identifier-title__container flex-container"
            }, React.createElement("h3", null, store.prompt.identifier ?? 'Identifier'), React.createElement(_icons.IconButton, {
              icon: "activeSurvey",
              title: texts.identifierInfo
            })));
          };
          exports.Identifier = Identifier;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompt/index
      ************************************/

      ims.set('./views/prompt/index', {
        hash: 45345439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplate = PromptTemplate;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _languages = require("./languages");
          var _literals = require("./literals");
          var _identifier = require("./identifier");
          function PromptTemplate({
            toggle
          }) {
            const {
              store,
              texts,
              minimized
            } = (0, _context.usePromptsContext)();
            const save = async () => {
              await store.savePrompt();
            };
            const typeOptions = [{
              value: 'none',
              label: 'Select...'
            }, {
              value: 'prompt',
              label: 'Prompt'
            }, {
              value: 'dependency',
              label: 'Dependency'
            }, {
              value: 'function',
              label: 'Function'
            }];
            const formatOptions = [{
              value: 'none',
              label: 'Select...'
            }, {
              value: 'text',
              label: 'Text'
            }, {
              value: 'json',
              label: 'Json'
            }, {
              value: 'json_schema',
              label: 'Schema'
            }];
            const defaultType = store.isNew ? 'none' : store.prompt.is;
            const defaultFormat = store.isNew ? 'none' : store.prompt.format;
            if (minimized) {
              return _react.default.createElement("div", {
                className: "prompt-template__form minimized-panel"
              }, _react.default.createElement("button", {
                className: "open-overlay-btn",
                onClick: toggle
              }, "\uD83C\uDF10"));
            }
            return _react.default.createElement("div", {
              className: "prompt-template__form"
            }, _react.default.createElement("div", null, _react.default.createElement("section", {
              className: "form-section"
            }, _react.default.createElement("h3", null, texts.header), _react.default.createElement(_form.Input, {
              disabled: store.fetching,
              type: "text",
              value: store.prompt.name,
              onChange: e => store.prompt.set({
                name: e.currentTarget.value
              }),
              placeholder: texts.header,
              required: true
            }), _react.default.createElement(_identifier.Identifier, null)), _react.default.createElement("section", {
              className: "row"
            }, _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement(_form.Select, {
              label: "Type",
              id: "selectType",
              disabled: store.fetching,
              options: typeOptions,
              defaultValue: defaultType,
              onChange: e => store.prompt.set({
                is: e.target.value
              })
            })), _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement(_form.Select, {
              label: "Format",
              id: "selectFormat",
              disabled: store.fetching,
              options: formatOptions,
              defaultValue: defaultFormat,
              onChange: e => store.prompt.set({
                format: e.target.value
              })
            }))), _react.default.createElement(_languages.Languages, null), _react.default.createElement(_literals.Literals, null)), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: save,
              variant: "primary",
              label: "Save"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/prompt/languages
      ****************************************/

      ims.set('./views/prompt/languages', {
        hash: 2576063135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          function Languages() {
            const {
              store,
              texts,
              languagesOptions
            } = (0, _context.usePromptsContext)();
            let supported = store.prompt.language?.languages ?? [];
            supported = new Set(supported);
            const [languages, setLanguages] = (0, _react.useState)(supported.size);
            const click = event => {
              const {
                value
              } = event.currentTarget;
              !supported.has(value) ? supported.add(value) : supported.delete(value);
              setLanguages(supported.size);
              const defaultLang = supported.size ? [...supported][0] : undefined;
              const language = {
                default: defaultLang,
                languages: [...supported]
              };
              store.prompt.set({
                language
              });
            };
            let output = languagesOptions.map(language => {
              const active = supported.has(language.value) ? 'pui-btn--active' : '';
              return _react.default.createElement(_components.Button, {
                key: language.value,
                title: language.label,
                onClick: click,
                variant: "primary",
                value: language.value,
                label: language.value,
                className: active
              });
            });
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, _react.default.createElement("h3", null, texts.form.subtitleLanguage), _react.default.createElement("p", null, texts.languages.title, ":", store.prompt.language?.languages?.join(' - ') ?? ' Hay que actualizar los idiomas soportados'), _react.default.createElement("p", null, texts.languages.updated, ":", store.prompt.language?.updated?.join(' - ')), _react.default.createElement(_components.ButtonGroup, null, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/prompt/literals
      ***************************************/

      ims.set('./views/prompt/literals', {
        hash: 4244576955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Literals = Literals;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          function Literals() {
            const {
              store,
              texts
            } = (0, _context.usePromptsContext)();
            const output = store.prompt.literals?.dependencies?.map(dependency => {
              const name = dependency.toLowerCase();
              return _react.default.createElement("li", null, _react.default.createElement(_components.Link, {
                key: dependency,
                href: `/ailearn/prompts/view/ailearn.${name}`
              }, dependency));
            });
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, store.prompt.literals?.pure?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleLiterals), _react.default.createElement("p", null, store.prompt.literals?.pure?.join(' - '))), _react.default.createElement("div", {
              className: "dependencies-container"
            }, store.prompt.literals?.dependencies?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleDependencies), _react.default.createElement("ul", null, output))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/languages/index",
        "from": "LanguagesPanel",
        "name": "LanguagesPanel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'LanguagesPanel') && _export("LanguagesPanel", LanguagesPanel = require ? require('./views/languages/index').LanguagesPanel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpZCIsImlzU3RvcmUiLCJpc05ldyIsImluY2x1ZGVzIiwicHJvamVjdElkIiwicHJvbXB0IiwiZGVwZW5kZW5jaWVzIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZVRlbXBsYXRlcyIsIk1hcCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImdldExhbmd1YWdlIiwiYmluZCIsImV4dHJhY3RMaXRlcmFscyIsInRleHQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicHVyZSIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImkiLCJmaW5kIiwiZCIsIm5hbWUiLCJsaXRlcmFscyIsImxhbmciLCJlcnJvcnMiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiUHJvbXB0IiwiZGVmYXVsdExhbmd1YWdlIiwicHJvbXB0cyIsIkFwcFdyYXBwZXIiLCJnZXRQcm9tcHRzIiwiZ2xvYmFsVGhpcyIsInJlYWR5Iiwic2F2ZVByb21wdCIsImxhbmd1YWdlcyIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJzYXZlIiwiZGF0YSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJzYXZlTGFuZ3VhZ2UiLCJpbnN0YW5jZSIsInNldCIsImhhcyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwiaWRlbnRpZmllciIsIl9yZWFjdCIsIlByb21wdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9tcHRzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9sYW5ndWFnZXMiLCJfaW5kZXgiLCJsZWZ0UGFuZWxWYXJpYW50cyIsIm9wZW4iLCJ4Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtaW5pbWl6ZWQiLCJyaWdodFBhbmVsVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ2YWx1ZSIsInNldEZldGNoaW5nIiwic2V0TWluaW1pemVkIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJsYW5ndWFnZXNPcHRpb25zIiwibGFiZWwiLCJkZSIsImVzIiwiZW4iLCJmciIsIml0IiwicHQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJsZWZ0VmFyaWFudCIsInRvZ2dsZUxlZnQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFnZVRpdGxlIiwibW90aW9uIiwiZGl2IiwidmFyaWFudHMiLCJhbmltYXRlIiwiUHJvbXB0VGVtcGxhdGUiLCJ0b2dnbGUiLCJMYW5ndWFnZXNQYW5lbCIsIl90ZW1wbGF0ZSIsInBhbmVscyIsInNldFBhbmVscyIsImNvbnRhaW5lclZhcmlhbnRzIiwic3RhZ2dlckNoaWxkcmVuIiwicGFuZWxWYXJpYW50cyIsIm91dHB1dCIsImtleSIsIkZvcm1MYW5ndWFnZVRlbXBsYXRlIiwidG90YWwiLCJvbkNsb3NlIiwib25Db21wYXJlIiwiQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50Iiwib25DbGljayIsImluaXRpYWwiLCJfZm9ybSIsIl9pY29ucyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkxhbmd1YWdlQ2hhbmdlIiwiZXZlbnQiLCJsYW5ndWFnZUluc3RhbmNlIiwib25TYXZlIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlNlbGVjdCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsIlRleHRhcmVhIiwidGl0bGUiLCJSZWFjdCIsIklkZW50aWZpZXIiLCJpZGVudGlmaWVySW5mbyIsIl9saXRlcmFscyIsIl9pZGVudGlmaWVyIiwidHlwZU9wdGlvbnMiLCJmb3JtYXRPcHRpb25zIiwiZGVmYXVsdFR5cGUiLCJpcyIsImRlZmF1bHRGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXIiLCJJbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwiTGFuZ3VhZ2VzIiwiTGl0ZXJhbHMiLCJzdXBwb3J0ZWQiLCJTZXQiLCJzZXRMYW5ndWFnZXMiLCJzaXplIiwiY2xpY2siLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0TGFuZyIsInVuZGVmaW5lZCIsIm1hcCIsImZvcm0iLCJzdWJ0aXRsZUxhbmd1YWdlIiwidXBkYXRlZCIsIkJ1dHRvbkdyb3VwIiwiZGVwZW5kZW5jeSIsInRvTG93ZXJDYXNlIiwiTGluayIsImhyZWYiLCJzdWJ0aXRsZUxpdGVyYWxzIiwic3VidGl0bGVEZXBlbmRlbmNpZXMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy90ZW1wbGF0ZS50c3giLCIvdHMvdmlld3MvcHJvbXB0L2lkZW50aWZpZXIudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9pbmRleC50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xpdGVyYWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUdOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2Ysc0NBQXNDLEVBQ3RDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDN0IsSUFBSSxDQUFDRixHQUFHLENBQUNHLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUN2QjtZQUNGO1lBRUFFLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUFlLE9BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFv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O1lBRTVDLE1BQU1vRSxNQUFNLEdBQUdsSixLQUFLLENBQUNzQixNQUFNLENBQUN3QixRQUFRLEVBQUV2QixZQUFZLEVBQUV1TCxHQUFHLENBQUNLLFVBQVUsSUFBRztjQUNwRSxNQUFNdEssSUFBSSxHQUFHc0ssVUFBVSxDQUFDQyxXQUFXLEVBQUU7Y0FFckMsT0FDQzFJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxhQUNDdkMsTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBLENBQUM3QixXQUFBLENBQUFpSSxJQUFJO2dCQUFDbEUsR0FBRyxFQUFFZ0UsVUFBVTtnQkFBRUcsSUFBSSxFQUFFLGlDQUFpQ3pLLElBQUk7Y0FBRSxHQUNsRXNLLFVBQVUsQ0FDTCxDQUNIO1lBRVAsQ0FBQyxDQUFDO1lBRUYsT0FDQ3pJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQTtjQUFTZ0IsU0FBUyxFQUFDO1lBQWdDLEdBQ2pEakksS0FBSyxDQUFDc0IsTUFBTSxDQUFDd0IsUUFBUSxFQUFFUCxJQUFJLEVBQUVVLE1BQU0sR0FBRyxDQUFDLElBQ3ZDeUIsTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBLENBQUF2QyxNQUFBLENBQUFFLE9BQUEsQ0FBQThGLFFBQUEsUUFDQ2hHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxhQUFLWCxLQUFLLENBQUN5RyxJQUFJLENBQUNRLGdCQUFnQixDQUFNLEVBQ3RDN0ksTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBLFlBQUlqSCxLQUFLLENBQUNzQixNQUFNLENBQUN3QixRQUFRLEVBQUVQLElBQUksRUFBRWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFLLENBRWxELEVBQ0RzQixNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUE7Y0FBS2dCLFNBQVMsRUFBQztZQUF3QixHQUNyQ2pJLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ3dCLFFBQVEsRUFBRXZCLFlBQVksRUFBRTBCLE1BQU0sR0FBRyxDQUFDLElBQy9DeUIsTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBLENBQUF2QyxNQUFBLENBQUFFLE9BQUEsQ0FBQThGLFFBQUEsUUFDQ2hHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxhQUFLWCxLQUFLLENBQUN5RyxJQUFJLENBQUNTLG9CQUFvQixDQUFNLEVBQzFDOUksTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBLGFBQUtpQyxNQUFNLENBQU0sQ0FFbEIsQ0FDSSxDQUNHO1VBRVoiLCJpZ25vcmVMaXN0IjpbXX0=