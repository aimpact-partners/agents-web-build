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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpZCIsImlzU3RvcmUiLCJpc05ldyIsImluY2x1ZGVzIiwicHJvamVjdElkIiwicHJvbXB0IiwiZGVwZW5kZW5jaWVzIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZVRlbXBsYXRlcyIsIk1hcCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImdldExhbmd1YWdlIiwiYmluZCIsImV4dHJhY3RMaXRlcmFscyIsInRleHQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicHVyZSIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImkiLCJmaW5kIiwiZCIsIm5hbWUiLCJsaXRlcmFscyIsImxhbmciLCJlcnJvcnMiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiUHJvbXB0IiwiZGVmYXVsdExhbmd1YWdlIiwicHJvbXB0cyIsIkFwcFdyYXBwZXIiLCJnZXRQcm9tcHRzIiwiZ2xvYmFsVGhpcyIsInJlYWR5Iiwic2F2ZVByb21wdCIsImxhbmd1YWdlcyIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJzYXZlIiwiZGF0YSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJzYXZlTGFuZ3VhZ2UiLCJpbnN0YW5jZSIsInNldCIsImhhcyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwiaWRlbnRpZmllciIsIl9yZWFjdCIsIlByb21wdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9tcHRzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9sYW5ndWFnZXMiLCJfaW5kZXgiLCJsZWZ0UGFuZWxWYXJpYW50cyIsIm9wZW4iLCJ4Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtaW5pbWl6ZWQiLCJyaWdodFBhbmVsVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ2YWx1ZSIsInNldEZldGNoaW5nIiwic2V0TWluaW1pemVkIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJsYW5ndWFnZXNPcHRpb25zIiwibGFiZWwiLCJkZSIsImVzIiwiZW4iLCJmciIsIml0IiwicHQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJsZWZ0VmFyaWFudCIsInRvZ2dsZUxlZnQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFnZVRpdGxlIiwibW90aW9uIiwiZGl2IiwidmFyaWFudHMiLCJhbmltYXRlIiwiUHJvbXB0VGVtcGxhdGUiLCJ0b2dnbGUiLCJMYW5ndWFnZXNQYW5lbCIsIl90ZW1wbGF0ZSIsInBhbmVscyIsInNldFBhbmVscyIsImNvbnRhaW5lclZhcmlhbnRzIiwic3RhZ2dlckNoaWxkcmVuIiwicGFuZWxWYXJpYW50cyIsIm91dHB1dCIsImtleSIsIkZvcm1MYW5ndWFnZVRlbXBsYXRlIiwidG90YWwiLCJvbkNsb3NlIiwib25Db21wYXJlIiwiQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50Iiwib25DbGljayIsImluaXRpYWwiLCJfZm9ybSIsIl9pY29ucyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkxhbmd1YWdlQ2hhbmdlIiwiZXZlbnQiLCJsYW5ndWFnZUluc3RhbmNlIiwib25TYXZlIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlNlbGVjdCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsIlRleHRhcmVhIiwidGl0bGUiLCJSZWFjdCIsIklkZW50aWZpZXIiLCJpZGVudGlmaWVySW5mbyIsIl9saXRlcmFscyIsIl9pZGVudGlmaWVyIiwidHlwZU9wdGlvbnMiLCJmb3JtYXRPcHRpb25zIiwiZGVmYXVsdFR5cGUiLCJpcyIsImRlZmF1bHRGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXIiLCJJbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwiTGFuZ3VhZ2VzIiwiTGl0ZXJhbHMiLCJzdXBwb3J0ZWQiLCJTZXQiLCJzZXRMYW5ndWFnZXMiLCJzaXplIiwiY2xpY2siLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0TGFuZyIsInVuZGVmaW5lZCIsIm1hcCIsImZvcm0iLCJzdWJ0aXRsZUxhbmd1YWdlIiwidXBkYXRlZCIsIkJ1dHRvbkdyb3VwIiwiZGVwZW5kZW5jeSIsInRvTG93ZXJDYXNlIiwiTGluayIsImhyZWYiLCJzdWJ0aXRsZUxpdGVyYWxzIiwic3VidGl0bGVEZXBlbmRlbmNpZXMiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xhbmd1YWdlcy90ZW1wbGF0ZS50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC9pZGVudGlmaWVyLnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC9saXRlcmFscy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLHNDQUFzQyxFQUN0QyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQzdCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxFQUFFLENBQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDdkI7WUFDRjtZQUVBRSxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBZSxPQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLFFBQUEsR0FBQW5CLE9BQUE7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QkFBaUIsR0FBRTtZQUU1QyxNQUFNb0UsTUFBTSxHQUFHbEosS0FBSyxDQUFDc0IsTUFBTSxDQUFDd0IsUUFBUSxFQUFFdkIsWUFBWSxFQUFFdUwsR0FBRyxDQUFDSyxVQUFVLElBQUc7Y0FDcEUsTUFBTXRLLElBQUksR0FBR3NLLFVBQVUsQ0FBQ0MsV0FBVyxFQUFFO2NBRXJDLE9BQ0MxSSxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUEsYUFDQ3ZDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxDQUFDN0IsV0FBQSxDQUFBaUksSUFBSTtnQkFBQ2xFLEdBQUcsRUFBRWdFLFVBQVU7Z0JBQUVHLElBQUksRUFBRSxpQ0FBaUN6SyxJQUFJO2NBQUUsR0FDbEVzSyxVQUFVLENBQ0wsQ0FDSDtZQUVQLENBQUMsQ0FBQztZQUVGLE9BQ0N6SSxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUE7Y0FBU2dCLFNBQVMsRUFBQztZQUFnQyxHQUNqRGpJLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ3dCLFFBQVEsRUFBRVAsSUFBSSxFQUFFVSxNQUFNLEdBQUcsQ0FBQyxJQUN2Q3lCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxDQUFBdkMsTUFBQSxDQUFBRSxPQUFBLENBQUE4RixRQUFBLFFBQ0NoRyxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUEsYUFBS1gsS0FBSyxDQUFDeUcsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBTSxFQUN0QzdJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxZQUFJakgsS0FBSyxDQUFDc0IsTUFBTSxDQUFDd0IsUUFBUSxFQUFFUCxJQUFJLEVBQUVhLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBSyxDQUVsRCxFQUNEc0IsTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBO2NBQUtnQixTQUFTLEVBQUM7WUFBd0IsR0FDckNqSSxLQUFLLENBQUNzQixNQUFNLENBQUN3QixRQUFRLEVBQUV2QixZQUFZLEVBQUUwQixNQUFNLEdBQUcsQ0FBQyxJQUMvQ3lCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxDQUFBdkMsTUFBQSxDQUFBRSxPQUFBLENBQUE4RixRQUFBLFFBQ0NoRyxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUEsYUFBS1gsS0FBSyxDQUFDeUcsSUFBSSxDQUFDUyxvQkFBb0IsQ0FBTSxFQUMxQzlJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxhQUFLaUMsTUFBTSxDQUFNLENBRWxCLENBQ0ksQ0FDRztVQUVaIiwiaWdub3JlTGlzdCI6W119