System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "framer-motion@11.18.2", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/platform@0.1.6/shared/hooks", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi100Beta7Form) {
      dependency_12 = _pragmateUi100Beta7Form;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_13 = _aimpactPlatform016SharedHooks;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/platform/shared/hooks', dependency_13], ['pragmate-ui/icons', dependency_14]]);
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
        hash: 1803940611,
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
              const instance = new _models.PromptTemplateLanguages({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwicXMiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpZCIsImlzU3RvcmUiLCJpc05ldyIsImluY2x1ZGVzIiwicHJvamVjdElkIiwicHJvbXB0IiwiZGVwZW5kZW5jaWVzIiwiY3VycmVudExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJleHRyYWN0TGl0ZXJhbHMiLCJ0ZXh0IiwicmVnZXgiLCJtYXRjaGVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInB1cmUiLCJmb3JFYWNoIiwidG9VcHBlckNhc2UiLCJpIiwiZmluZCIsImQiLCJuYW1lIiwibGl0ZXJhbHMiLCJsYW5nIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsImxlbmd0aCIsImVycm9yIiwiam9pbiIsIlByb21wdCIsImRlZmF1bHRMYW5ndWFnZSIsImluc3RhbmNlIiwiZ2V0TGFuZ3VhZ2UiLCJwcm9tcHRzIiwiQXBwV3JhcHBlciIsImdldFByb21wdHMiLCJnbG9iYWxUaGlzIiwicmVhZHkiLCJzYXZlUHJvbXB0IiwibGFuZ3VhZ2VzIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsInNhdmUiLCJkYXRhIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInNhdmVMYW5ndWFnZSIsInNldCIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwiaWRlbnRpZmllciIsImdldENvbXBhcmVkTGFuZ3VhZ2UiLCJjb21wYXJlZExhbmd1YWdlIiwiX3JlYWN0IiwiUHJvbXB0c0NvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVByb21wdHNDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9jb21wb25lbnRzIiwiX2ZyYW1lck1vdGlvbiIsIl9jb250ZXh0IiwiX2Zvcm0iLCJfaW5kZXgiLCJfY29tcGFyZWQiLCJsZWZ0UGFuZWxWYXJpYW50cyIsIm9wZW4iLCJ4Iiwid2lkdGgiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtaW5pbWl6ZWQiLCJyaWdodFBhbmVsVmFyaWFudHMiLCJ2aXNpYmxlIiwib3BhY2l0eSIsImhpZGRlbiIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRleHQiLCJ2YWx1ZSIsInNldEZldGNoaW5nIiwic2V0TWluaW1pemVkIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJsYW5ndWFnZXNPcHRpb25zIiwibGFiZWwiLCJkZSIsImVzIiwiZW4iLCJmciIsIml0IiwicHQiLCJjb250ZXh0VmFsdWUiLCJjbHMiLCJzaG93UmlnaHQiLCJsZWZ0VmFyaWFudCIsInJpZ2h0VmFyaWFudCIsInRvZ2dsZUxlZnQiLCJwcmV2IiwidG9nZ2xlUmlnaHQiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFnZVRpdGxlIiwibW90aW9uIiwiZGl2IiwidmFyaWFudHMiLCJhbmltYXRlIiwiUHJvbXB0VGVtcGxhdGUiLCJ0b2dnbGUiLCJGb3JtUHJvbXB0TGFuZ3VhZ2UiLCJBbmltYXRlUHJlc2VuY2UiLCJpbml0aWFsIiwiZXhpdCIsIkNvbXBhcmVkTGFuZ3VhZ2VGb3JtIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInVzZVN0b3JlIiwib25DbGljayIsImV2ZW50Iiwib25MYW5ndWFnZUNoYW5nZSIsInRhcmdldCIsImRpc2FibGVkIiwib3B0aW9ucyIsImNvbmNhdCIsImZvcm0iLCJzdWJ0aXRsZVRleHQiLCJTZWxlY3QiLCJvbkNoYW5nZSIsIlRleHRhcmVhIiwiQnV0dG9uIiwidmFyaWFudCIsInRpdGxlIiwidXBkYXRlVmFsdWVzIiwiUmVhY3QiLCJfaWNvbnMiLCJJZGVudGlmaWVyIiwiSWNvbkJ1dHRvbiIsImljb24iLCJpZGVudGlmaWVySW5mbyIsIl9sYW5ndWFnZXMiLCJfbGl0ZXJhbHMiLCJfaWRlbnRpZmllciIsInR5cGVPcHRpb25zIiwiZm9ybWF0T3B0aW9ucyIsImRlZmF1bHRUeXBlIiwiaXMiLCJkZWZhdWx0Rm9ybWF0IiwiZm9ybWF0IiwiaGVhZGVyIiwiSW5wdXQiLCJjdXJyZW50VGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImRlZmF1bHRWYWx1ZSIsIkxhbmd1YWdlcyIsIkxpdGVyYWxzIiwic3VwcG9ydGVkIiwiU2V0Iiwic2V0TGFuZ3VhZ2VzIiwic2l6ZSIsImNsaWNrIiwiaGFzIiwiYWRkIiwiZGVsZXRlIiwiZGVmYXVsdExhbmciLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJtYXAiLCJrZXkiLCJzdWJ0aXRsZUxhbmd1YWdlIiwidXBkYXRlZCIsIkJ1dHRvbkdyb3VwIiwiZGVwZW5kZW5jeSIsInRvTG93ZXJDYXNlIiwiTGluayIsImhyZWYiLCJGcmFnbWVudCIsInN1YnRpdGxlTGl0ZXJhbHMiLCJzdWJ0aXRsZURlcGVuZGVuY2llcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlL2NvbXBhcmVkLnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZS9mb3JtLnRzeCIsIi90cy92aWV3cy9wcm9tcHQvaWRlbnRpZmllci50c3giLCIvdHMvdmlld3MvcHJvbXB0L2luZGV4LnRzeCIsIi90cy92aWV3cy9wcm9tcHQvbGFuZ3VhZ2VzLnRzeCIsIi90cy92aWV3cy9wcm9tcHQvbGl0ZXJhbHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUdOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQ2Ysc0NBQXNDLEVBQ3RDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDN0IsSUFBSSxDQUFDRixHQUFHLENBQUNHLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUN2QjtZQUNGO1lBRUFFLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBZCxVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUFlLE9BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFBO1VBVU0sTUFBT08sWUFBYSxTQUFR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WUFFNUMsTUFBTTZILE1BQU0sR0FBRzFNLEtBQUssQ0FBQ3NCLE1BQU0sQ0FBQ29CLFFBQVEsRUFBRW5CLFlBQVksRUFBRW9MLEdBQUcsQ0FBQ0ssVUFBVSxJQUFHO2NBQ3BFLE1BQU12SyxJQUFJLEdBQUd1SyxVQUFVLENBQUNDLFdBQVcsRUFBRTtjQUNyQ3JLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsRUFBRW1LLFVBQVUsQ0FBQztjQUMxQixPQUNDdkksTUFBQSxDQUFBRSxPQUFBLENBQUFzQyxhQUFBLENBQUMvQixXQUFBLENBQUFnSSxJQUFJO2dCQUFDTixHQUFHLEVBQUVJLFVBQVU7Z0JBQUUzRSxTQUFTLEVBQUMsVUFBVTtnQkFBQzhFLElBQUksRUFBRSxpQ0FBaUMxSyxJQUFJO2NBQUUsR0FDeEZnQyxNQUFBLENBQUFFLE9BQUEsQ0FBQXNDLGFBQUEsWUFBSStGLFVBQVUsQ0FBSyxDQUNiO1lBRVQsQ0FBQyxDQUFDO1lBRUYsT0FDQ3ZJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0MsYUFBQTtjQUFTb0IsU0FBUyxFQUFDO1lBQWdDLEdBQ2pEckksS0FBSyxDQUFDc0IsTUFBTSxDQUFDb0IsUUFBUSxFQUFFUCxJQUFJLEVBQUVZLE1BQU0sR0FBRyxDQUFDLElBQ3ZDMEIsTUFBQSxDQUFBRSxPQUFBLENBQUFzQyxhQUFBLENBQUF4QyxNQUFBLENBQUFFLE9BQUEsQ0FBQXlJLFFBQUEsUUFDQzNJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0MsYUFBQSxhQUFLWCxLQUFLLENBQUMwRCxJQUFJLENBQUNxRCxnQkFBZ0IsQ0FBTSxFQUN0QzVJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBc0MsYUFBQSxZQUFJakgsS0FBSyxDQUFDc0IsTUFBTSxDQUFDb0IsUUFBUSxFQUFFUCxJQUFJLEVBQUVjLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBSyxDQUVsRCxFQUNBakQsS0FBSyxDQUFDc0IsTUFBTSxDQUFDb0IsUUFBUSxFQUFFbkIsWUFBWSxFQUFFd0IsTUFBTSxHQUFHLENBQUMsSUFDL0MwQixNQUFBLENBQUFFLE9BQUEsQ0FBQXNDLGFBQUEsQ0FBQXhDLE1BQUEsQ0FBQUUsT0FBQSxDQUFBeUksUUFBQSxRQUNDM0ksTUFBQSxDQUFBRSxPQUFBLENBQUFzQyxhQUFBLGFBQUtYLEtBQUssQ0FBQzBELElBQUksQ0FBQ3NELG9CQUFvQixDQUFNLEVBQ3pDWixNQUFNLENBRVIsQ0FDUTtVQUVaIiwiaWdub3JlTGlzdCI6W119