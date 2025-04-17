System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "framer-motion@11.18.2", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
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
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_8 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_framerMotion2) {
      dependency_10 = _framerMotion2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_13 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
        hash: 2847772926,
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
            const cls = `container prompt-template-form-container ${minimized ? 'has-compared-panel' : ''}`;
            console.log(10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpZCIsImlzU3RvcmUiLCJpc05ldyIsImluY2x1ZGVzIiwicHJvamVjdElkIiwicHJvbXB0IiwiZGVwZW5kZW5jaWVzIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZVRlbXBsYXRlcyIsIk1hcCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImdldExhbmd1YWdlIiwiYmluZCIsImV4dHJhY3RMaXRlcmFscyIsInRleHQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicHVyZSIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImkiLCJmaW5kIiwiZCIsIm5hbWUiLCJsaXRlcmFscyIsImxhbmciLCJlcnJvcnMiLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiUHJvbXB0IiwiZGVmYXVsdExhbmd1YWdlIiwicHJvbXB0cyIsIkFwcFdyYXBwZXIiLCJnZXRQcm9tcHRzIiwiZ2xvYmFsVGhpcyIsInJlYWR5Iiwic2F2ZVByb21wdCIsImxhbmd1YWdlcyIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJzYXZlIiwiZGF0YSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJzYXZlTGFuZ3VhZ2UiLCJpbnN0YW5jZSIsInNldCIsImhhcyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwiaWRlbnRpZmllciIsIl9yZWFjdCIsIlByb21wdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9tcHRzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9sYW5ndWFnZXMiLCJfaW5kZXgiLCJsZWZ0UGFuZWxWYXJpYW50cyIsIm9wZW4iLCJ4Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtaW5pbWl6ZWQiLCJyaWdodFBhbmVsVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ2YWx1ZSIsInNldEZldGNoaW5nIiwic2V0TWluaW1pemVkIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJsYW5ndWFnZXNPcHRpb25zIiwibGFiZWwiLCJkZSIsImVzIiwiZW4iLCJmciIsIml0IiwicHQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJsb2ciLCJsZWZ0VmFyaWFudCIsInRvZ2dsZUxlZnQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFnZVRpdGxlIiwibW90aW9uIiwiZGl2IiwidmFyaWFudHMiLCJhbmltYXRlIiwiUHJvbXB0VGVtcGxhdGUiLCJ0b2dnbGUiLCJMYW5ndWFnZXNQYW5lbCIsIl90ZW1wbGF0ZSIsInBhbmVscyIsInNldFBhbmVscyIsImNvbnRhaW5lclZhcmlhbnRzIiwic3RhZ2dlckNoaWxkcmVuIiwicGFuZWxWYXJpYW50cyIsIm91dHB1dCIsImtleSIsIkZvcm1MYW5ndWFnZVRlbXBsYXRlIiwidG90YWwiLCJvbkNsb3NlIiwib25Db21wYXJlIiwiQnV0dG9uIiwiZGlzYWJsZWQiLCJ2YXJpYW50Iiwib25DbGljayIsImluaXRpYWwiLCJfZm9ybSIsIl9pY29ucyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwiaGFuZGxlVGV4dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkxhbmd1YWdlQ2hhbmdlIiwiZXZlbnQiLCJsYW5ndWFnZUluc3RhbmNlIiwib25TYXZlIiwiRnJhZ21lbnQiLCJJY29uQnV0dG9uIiwiaWNvbiIsIlNlbGVjdCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsIlRleHRhcmVhIiwidGl0bGUiLCJSZWFjdCIsIklkZW50aWZpZXIiLCJpZGVudGlmaWVySW5mbyIsIl9saXRlcmFscyIsIl9pZGVudGlmaWVyIiwidHlwZU9wdGlvbnMiLCJmb3JtYXRPcHRpb25zIiwiZGVmYXVsdFR5cGUiLCJpcyIsImRlZmF1bHRGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXIiLCJJbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwiTGFuZ3VhZ2VzIiwiTGl0ZXJhbHMiLCJzdXBwb3J0ZWQiLCJTZXQiLCJzZXRMYW5ndWFnZXMiLCJzaXplIiwiY2xpY2siLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0TGFuZyIsInVuZGVmaW5lZCIsIm1hcCIsImZvcm0iLCJzdWJ0aXRsZUxhbmd1YWdlIiwidXBkYXRlZCIsIkJ1dHRvbkdyb3VwIiwiZGVwZW5kZW5jeSIsInRvTG93ZXJDYXNlIiwiTGluayIsImhyZWYiLCJzdWJ0aXRsZUxpdGVyYWxzIiwic3VidGl0bGVEZXBlbmRlbmNpZXMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlcy90ZW1wbGF0ZS50c3giLCIvdHMvdmlld3MvcHJvbXB0L2lkZW50aWZpZXIudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9pbmRleC50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xpdGVyYWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUdOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2Ysc0NBQXNDLEVBQ3RDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDN0IsSUFBSSxDQUFDRixHQUFHLENBQUNHLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUN2QjtZQUNGO1lBRUFFLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUFlLE9BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUNB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RztZQUFLLENBQUUsR0FBRyxJQUFBakIsUUFBQSxDQUFBUCxpQkFBaUIsR0FBRTtZQUU1QyxNQUFNcUUsTUFBTSxHQUFHbkosS0FBSyxDQUFDc0IsTUFBTSxDQUFDd0IsUUFBUSxFQUFFdkIsWUFBWSxFQUFFd0wsR0FBRyxDQUFDSyxVQUFVLElBQUc7Y0FDcEUsTUFBTXZLLElBQUksR0FBR3VLLFVBQVUsQ0FBQ0MsV0FBVyxFQUFFO2NBRXJDLE9BQ0MzSSxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUEsYUFDQ3ZDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxDQUFDN0IsV0FBQSxDQUFBa0ksSUFBSTtnQkFBQ2xFLEdBQUcsRUFBRWdFLFVBQVU7Z0JBQUVHLElBQUksRUFBRSxpQ0FBaUMxSyxJQUFJO2NBQUUsR0FDbEV1SyxVQUFVLENBQ0wsQ0FDSDtZQUVQLENBQUMsQ0FBQztZQUVGLE9BQ0MxSSxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUE7Y0FBU2lCLFNBQVMsRUFBQztZQUFnQyxHQUNqRGxJLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ3dCLFFBQVEsRUFBRVAsSUFBSSxFQUFFVSxNQUFNLEdBQUcsQ0FBQyxJQUN2Q3lCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxDQUFBdkMsTUFBQSxDQUFBRSxPQUFBLENBQUErRixRQUFBLFFBQ0NqRyxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUEsYUFBS1gsS0FBSyxDQUFDMEcsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBTSxFQUN0QzlJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxZQUFJakgsS0FBSyxDQUFDc0IsTUFBTSxDQUFDd0IsUUFBUSxFQUFFUCxJQUFJLEVBQUVhLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBSyxDQUVsRCxFQUNEc0IsTUFBQSxDQUFBRSxPQUFBLENBQUFxQyxhQUFBO2NBQUtpQixTQUFTLEVBQUM7WUFBd0IsR0FDckNsSSxLQUFLLENBQUNzQixNQUFNLENBQUN3QixRQUFRLEVBQUV2QixZQUFZLEVBQUUwQixNQUFNLEdBQUcsQ0FBQyxJQUMvQ3lCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxDQUFBdkMsTUFBQSxDQUFBRSxPQUFBLENBQUErRixRQUFBLFFBQ0NqRyxNQUFBLENBQUFFLE9BQUEsQ0FBQXFDLGFBQUEsYUFBS1gsS0FBSyxDQUFDMEcsSUFBSSxDQUFDUyxvQkFBb0IsQ0FBTSxFQUMxQy9JLE1BQUEsQ0FBQUUsT0FBQSxDQUFBcUMsYUFBQSxhQUFLa0MsTUFBTSxDQUFNLENBRWxCLENBQ0ksQ0FDRztVQUVaIiwiaWdub3JlTGlzdCI6W119