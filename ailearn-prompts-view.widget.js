System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/agents-client@0.0.29/prompts", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "framer-motion@11.18.2", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/platform@0.1.6/shared/hooks", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
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
    }, function (_aimpactAgentsClient0029Prompts) {
      dependency_4 = _aimpactAgentsClient0029Prompts;
    }, function (_aimpactPlatform016Models) {
      dependency_5 = _aimpactPlatform016Models;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReactive205Model) {
      dependency_7 = _beyondJsReactive205Model;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_9 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_13 = _pragmateUi100Beta7Form;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_14 = _aimpactPlatform016SharedHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/agents-client/prompts', dependency_4], ['@aimpact/platform/models', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['react', dependency_8], ['@aimpact/platform/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/components', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/form', dependency_13], ['@aimpact/platform/shared/hooks', dependency_14], ['pragmate-ui/icons', dependency_15]]);
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
        hash: 1839595662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _prompts = require("@aimpact/agents-client/prompts");
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
            constructor() {
              super({
                properties: ['comparedLanguage']
              });
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
              console.log();
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
              const instance = await this.getLanguage(this.#currentLanguage);
              this.#language = instance;
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
              await this.#prompt.save();
              await this.#language.set({
                language: lang,
                text
              });
              this.fetching = false;
            }
            async getLanguage(lang) {
              this.fetching = true;
              const instance = new _prompts.PromptTemplateLanguages({
                name: this.prompt.identifier
              });
              await instance.get(lang);
              this.fetching = false;
              return instance;
            }
            async getComparedLanguage(language) {
              this.fetching = true;
              const instance = await this.getLanguage(language);
              console.log(11, instance);
              this.comparedLanguage = {
                language: language,
                instance
              };
              this.fetching = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 228537699,
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
        hash: 2839659644,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          var _react = require("react");
          var _context = require("./context");
          var _form = require("./language/form");
          var _index = require("./prompt/index");
          var _compared = require("./language/compared");
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
            const [minimized, setMinimized] = (0, _react.useState)('none');
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
            const cls = `container prompt-template-form-container ${store.comparedLanguage ? 'has-compared-panel' : ''}`;
            const showRight = !!store.comparedLanguage;
            const leftVariant = minimized === 'left' ? 'minimized' : 'open';
            const rightVariant = showRight ? minimized === 'right' ? 'minimized' : 'visible' : 'hidden';
            const toggleLeft = () => setMinimized(prev => prev === 'left' ? 'none' : 'left');
            const toggleRight = () => setMinimized(prev => prev === 'right' ? 'none' : 'right');
            console.log(0.1, minimized);
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
            })), _react.default.createElement(_form.FormPromptLanguage, null), _react.default.createElement(_framerMotion.AnimatePresence, null, showRight && _react.default.createElement(_framerMotion.motion.div, {
              className: "compared-panel",
              variants: rightPanelVariants,
              initial: "hidden",
              animate: rightVariant,
              exit: "hidden"
            }, _react.default.createElement(_compared.ComparedLanguageForm, {
              toggle: toggleRight
            }))))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/language/compared
      *****************************************/

      ims.set('./views/language/compared', {
        hash: 2266596461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ComparedLanguageForm = ComparedLanguageForm;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _hooks = require("@aimpact/platform/shared/hooks");
          function ComparedLanguageForm() {
            const {
              store,
              texts,
              languagesOptions,
              minimized,
              setMinimized
            } = (0, _context.usePromptsContext)();
            const [selection, setSelection] = (0, _react.useState)(false);
            // const updateValues = (text): void => setText(text);
            const handleChange = e => {
              //updateValues(e.target.value);
            };
            (0, _hooks.useStore)(store, ['comparedLanguage.changed']);
            if (!store.comparedLanguage) return;
            const language = store.comparedLanguage.language;
            if (minimized === 'right') {
              return _react.default.createElement("div", {
                className: "compared-language__form minimized-panel"
              }, _react.default.createElement("button", {
                className: "open-overlay-btn",
                onClick: () => {
                  setMinimized('left');
                }
              }, "\uD83C\uDF10"));
            }
            const save = async event => {
              // await store.saveLanguage(store.currentLanguage, text);
            };
            const onLanguageChange = async event => {
              setSelection(event.target.value === 'notValue' ? false : true);
              if (event.target.value === 'notValue') {
                // updateValues('');
                return;
              }
              await store.getLanguage(event.target.value);
              // updateValues(store.language.value);
              // if (store.params.promptId !== 'new') {
              // 	await checkExistencePrompt(event.target.value);
              // }
            };
            const disabled = {
              disabled: !selection ? false : false || store.fetching
            };
            const options = [{
              value: 'notValue',
              label: 'Select...'
            }].concat(languagesOptions);
            console.log(1, language, store.comparedLanguage);
            return _react.default.createElement("div", {
              className: "form-language"
            }, _react.default.createElement("div", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("h3", null, texts.form.subtitleText), _react.default.createElement("div", {
              className: " flex-container gap-05 flex-vertical-center"
            }, _react.default.createElement(_form.Select, {
              value: store.comparedLanguage.language,
              id: "selectLanguageType",
              options: options,
              onChange: onLanguageChange
            }))), _react.default.createElement(_form.Textarea, {
              className: "form-language__textarea",
              ...disabled,
              value: store.comparedLanguage.instance.value,
              onChange: handleChange
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: save,
              variant: "primary",
              label: 'Guardar',
              disabled: disabled,
              title: "Guardar Template"
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/language/form
      *************************************/

      ims.set('./views/language/form', {
        hash: 2956751988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormPromptLanguage = FormPromptLanguage;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          function FormPromptLanguage() {
            const {
              store,
              text,
              texts,
              setText,
              setMinimized,
              languagesOptions
            } = (0, _context.usePromptsContext)();
            const [selection, setSelection] = (0, _react.useState)(false);
            const updateValues = text => setText(text);
            const handleChange = e => updateValues(e.target.value);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const save = async event => {
              await store.saveLanguage(store.currentLanguage, text);
            };
            const onLanguageChange = async event => {
              setSelection(event.target.value === 'notValue' ? false : true);
              if (event.target.value === 'notValue') {
                updateValues('');
                return;
              }
              await store.getComparedLanguage(event.target.value);
              setMinimized('left');
              updateValues(store.language.value);
              // if (store.params.promptId !== 'new') {
              // 	await checkExistencePrompt(event.target.value);
              // }
            };
            const disabled = {
              disabled: !selection ? false : false || store.fetching
            };
            const options = [{
              value: 'notValue',
              label: 'Select...'
            }].concat(languagesOptions);
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "form-language"
            }, _react.default.createElement("div", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("h3", null, texts.form.subtitleText), _react.default.createElement("div", {
              className: " flex-container gap-05 flex-vertical-center"
            }, _react.default.createElement(_form.Select, {
              value: store.currentLanguage,
              id: "selectLanguageType",
              options: options,
              onChange: onLanguageChange
            }), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
              variant: "primary"
            }, "Open Language")))), _react.default.createElement(_form.Textarea, {
              className: "form-language__textarea",
              ...disabled,
              value: store.language.value,
              onChange: handleChange
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: save,
              variant: "primary",
              label: 'Guardar',
              disabled: disabled,
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
        hash: 2336851213,
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
            if (minimized === 'left') {
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
        hash: 1325729456,
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
              console.log(1, dependency);
              return _react.default.createElement(_components.Link, {
                key: dependency,
                className: "unstyled",
                href: `/ailearn/prompts/view/ailearn.${name}`
              }, _react.default.createElement("p", null, dependency));
            });
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, store.prompt.literals?.pure?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleLiterals), _react.default.createElement("p", null, store.prompt.literals?.pure?.join(' - '))), store.prompt.literals?.dependencies?.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, texts.form.subtitleDependencies), output));
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9wcm9tcHRzIiwiX21vZGVscyIsIl9yb3V0aW5nIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsImlkIiwiaXNTdG9yZSIsImlzTmV3IiwiaW5jbHVkZXMiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJkZXBlbmRlbmNpZXMiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImV4dHJhY3RMaXRlcmFscyIsInRleHQiLCJyZWdleCIsIm1hdGNoZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicHVyZSIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImkiLCJmaW5kIiwiZCIsIm5hbWUiLCJsaXRlcmFscyIsImxhbmciLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwibGVuZ3RoIiwiZXJyb3IiLCJqb2luIiwiUHJvbXB0IiwiZGVmYXVsdExhbmd1YWdlIiwiaW5zdGFuY2UiLCJnZXRMYW5ndWFnZSIsInByb21wdHMiLCJBcHBXcmFwcGVyIiwiZ2V0UHJvbXB0cyIsImdsb2JhbFRoaXMiLCJyZWFkeSIsInNhdmVQcm9tcHQiLCJsYW5ndWFnZXMiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwic2F2ZSIsImRhdGEiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwic2F2ZUxhbmd1YWdlIiwic2V0IiwiUHJvbXB0VGVtcGxhdGVMYW5ndWFnZXMiLCJpZGVudGlmaWVyIiwiZ2V0Q29tcGFyZWRMYW5ndWFnZSIsImNvbXBhcmVkTGFuZ3VhZ2UiLCJfcmVhY3QiLCJQcm9tcHRzQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvbXB0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZnJhbWVyTW90aW9uIiwiX2NvbnRleHQiLCJfZm9ybSIsIl9pbmRleCIsIl9jb21wYXJlZCIsImxlZnRQYW5lbFZhcmlhbnRzIiwib3BlbiIsIngiLCJ3aWR0aCIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1pbmltaXplZCIsInJpZ2h0UGFuZWxWYXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5IiwiaGlkZGVuIiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VGV4dCIsInZhbHVlIiwic2V0RmV0Y2hpbmciLCJzZXRNaW5pbWl6ZWQiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImxhbmd1YWdlc09wdGlvbnMiLCJsYWJlbCIsImRlIiwiZXMiLCJlbiIsImZyIiwiaXQiLCJwdCIsImNvbnRleHRWYWx1ZSIsImNscyIsInNob3dSaWdodCIsImxlZnRWYXJpYW50IiwicmlnaHRWYXJpYW50IiwidG9nZ2xlTGVmdCIsInByZXYiLCJ0b2dnbGVSaWdodCIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJwYWdlVGl0bGUiLCJtb3Rpb24iLCJkaXYiLCJ2YXJpYW50cyIsImFuaW1hdGUiLCJQcm9tcHRUZW1wbGF0ZSIsInRvZ2dsZSIsIkZvcm1Qcm9tcHRMYW5ndWFnZSIsIkFuaW1hdGVQcmVzZW5jZSIsImluaXRpYWwiLCJleGl0IiwiQ29tcGFyZWRMYW5ndWFnZUZvcm0iLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidXNlU3RvcmUiLCJvbkNsaWNrIiwiZXZlbnQiLCJvbkxhbmd1YWdlQ2hhbmdlIiwidGFyZ2V0IiwiZGlzYWJsZWQiLCJvcHRpb25zIiwiY29uY2F0IiwiZm9ybSIsInN1YnRpdGxlVGV4dCIsIlNlbGVjdCIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ2YXJpYW50IiwidGl0bGUiLCJ1cGRhdGVWYWx1ZXMiLCJSZWFjdCIsIl9pY29ucyIsIklkZW50aWZpZXIiLCJJY29uQnV0dG9uIiwiaWNvbiIsImlkZW50aWZpZXJJbmZvIiwiX2xhbmd1YWdlcyIsIl9saXRlcmFscyIsIl9pZGVudGlmaWVyIiwidHlwZU9wdGlvbnMiLCJmb3JtYXRPcHRpb25zIiwiZGVmYXVsdFR5cGUiLCJpcyIsImRlZmF1bHRGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXIiLCJJbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwiTGFuZ3VhZ2VzIiwiTGl0ZXJhbHMiLCJzdXBwb3J0ZWQiLCJTZXQiLCJzZXRMYW5ndWFnZXMiLCJzaXplIiwiY2xpY2siLCJoYXMiLCJhZGQiLCJkZWxldGUiLCJkZWZhdWx0TGFuZyIsInVuZGVmaW5lZCIsIm91dHB1dCIsIm1hcCIsImtleSIsInN1YnRpdGxlTGFuZ3VhZ2UiLCJ1cGRhdGVkIiwiQnV0dG9uR3JvdXAiLCJkZXBlbmRlbmN5IiwidG9Mb3dlckNhc2UiLCJMaW5rIiwiaHJlZiIsIkZyYWdtZW50Iiwic3VidGl0bGVMaXRlcmFscyIsInN1YnRpdGxlRGVwZW5kZW5jaWVzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2UvY29tcGFyZWQudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9pZGVudGlmaWVyLnRzeCIsIi90cy92aWV3cy9wcm9tcHQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9saXRlcmFscy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFHTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUNmLHNDQUFzQyxFQUN0QyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQzdCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxFQUFFLENBQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FDdkI7WUFDRjtZQUVBRSxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCRCxJQUFBZSxRQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE9BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUNBLElB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QUssQ0FBRSxHQUFHLElBQUFsQixRQUFBLENBQUFQLGlCQUFpQixHQUFFO1lBRTVDLE1BQU02SCxNQUFNLEdBQUczTSxLQUFLLENBQUN1QixNQUFNLENBQUNvQixRQUFRLEVBQUVuQixZQUFZLEVBQUVvTCxHQUFHLENBQUNLLFVBQVUsSUFBRztjQUNwRSxNQUFNdkssSUFBSSxHQUFHdUssVUFBVSxDQUFDQyxXQUFXLEVBQUU7Y0FDckNySyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEVBQUVtSyxVQUFVLENBQUM7Y0FDMUIsT0FDQ3ZJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0MsYUFBQSxDQUFDL0IsV0FBQSxDQUFBZ0ksSUFBSTtnQkFBQ04sR0FBRyxFQUFFSSxVQUFVO2dCQUFFM0UsU0FBUyxFQUFDLFVBQVU7Z0JBQUM4RSxJQUFJLEVBQUUsaUNBQWlDMUssSUFBSTtjQUFFLEdBQ3hGZ0MsTUFBQSxDQUFBRSxPQUFBLENBQUFzQyxhQUFBLFlBQUkrRixVQUFVLENBQUssQ0FDYjtZQUVULENBQUMsQ0FBQztZQUVGLE9BQ0N2SSxNQUFBLENBQUFFLE9BQUEsQ0FBQXNDLGFBQUE7Y0FBU29CLFNBQVMsRUFBQztZQUFnQyxHQUNqRHRJLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ29CLFFBQVEsRUFBRVAsSUFBSSxFQUFFWSxNQUFNLEdBQUcsQ0FBQyxJQUN2QzBCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0MsYUFBQSxDQUFBeEMsTUFBQSxDQUFBRSxPQUFBLENBQUF5SSxRQUFBLFFBQ0MzSSxNQUFBLENBQUFFLE9BQUEsQ0FBQXNDLGFBQUEsYUFBS1gsS0FBSyxDQUFDMEQsSUFBSSxDQUFDcUQsZ0JBQWdCLENBQU0sRUFDdEM1SSxNQUFBLENBQUFFLE9BQUEsQ0FBQXNDLGFBQUEsWUFBSWxILEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ29CLFFBQVEsRUFBRVAsSUFBSSxFQUFFYyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUssQ0FFbEQsRUFDQWxELEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ29CLFFBQVEsRUFBRW5CLFlBQVksRUFBRXdCLE1BQU0sR0FBRyxDQUFDLElBQy9DMEIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQyxhQUFBLENBQUF4QyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlJLFFBQUEsUUFDQzNJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0MsYUFBQSxhQUFLWCxLQUFLLENBQUMwRCxJQUFJLENBQUNzRCxvQkFBb0IsQ0FBTSxFQUN6Q1osTUFBTSxDQUVSLENBQ1E7VUFFWiIsImlnbm9yZUxpc3QiOltdfQ==