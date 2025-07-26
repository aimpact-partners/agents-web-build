System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.1.0/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive210Model) {
      dependency_6 = _beyondJsReactive210Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_8 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi102Components) {
      dependency_10 = _pragmateUi102Components;
    }, function (_pragmateUi102Form) {
      dependency_11 = _pragmateUi102Form;
    }, function (_pragmateUi102Icons) {
      dependency_12 = _pragmateUi102Icons;
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
          "vspecifier": "@aimpact/platform@0.1.6/prompts-view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/icons', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "prompts-view",
        "vspecifier": "@aimpact/platform@0.1.6/prompts-view.widget",
        "is": "page",
        "route": "/projects/${projectId}/prompts/view/${promptId}",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/prompts-view.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2123592536,
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
              this.#store.load(this.uri.vars.get('projectId'), this.uri.vars.get('promptId'));
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
        hash: 1350289943,
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
            isStore = true;
            #id;
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
            #currentLanguage;
            get currentLanguage() {
              return this.#currentLanguage;
            }
            #language;
            get language() {
              return this.#language;
            }
            async load(projectId, id) {
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
              this.fetching = false;
              if (this.isNew) {
                this.#id = response.data.id;
                _routing.routing.replaceState({}, '', `/projects/${this.projectId}/prompts/view/${this.#id}`);
                return;
              }
            }
            async getLanguage(lang) {
              this.#language = new _models.PromptTemplateLanguages({
                name: this.prompt.identifier
              });
              await this.#language.get(lang);
              this.#currentLanguage = lang;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 765822556,
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
        hash: 1144237586,
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
          var _react = require("react");
          var _context = require("./context");
          var _form = require("./language/form");
          var _index = require("./prompt/index");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [text, setText] = (0, _react.useState)(store.language?.value);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
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
            return _react.default.createElement(_context.PromptsContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "wrapper"
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[texts.projectsHeader, '/projects'], ['List', `/prompts/list/${store.projectId}`], [texts.pageTitle, '']]
            }), _react.default.createElement("div", {
              className: "container-columns"
            }, _react.default.createElement(_index.PromptTemplate, null), _react.default.createElement(_form.FormPromptLanguage, null))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/language/form
      *************************************/

      ims.set('./views/language/form', {
        hash: 3440028915,
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
          function FormPromptLanguage() {
            const {
              store,
              text,
              texts,
              setText,
              languagesOptions
            } = (0, _context.usePromptsContext)();
            const [selection, setSelection] = (0, _react.useState)(false);
            const updateValues = text => setText(text);
            const handleChange = e => updateValues(e.target.value);
            const [fetching, setFetching] = (0, _react.useState)(false);
            const update = async event => {
              setFetching(true);
              await store.prompt.updateLanguages(store.currentLanguage);
              setFetching(false);
            };
            const save = async event => {
              setFetching(true);
              await store.language.set({
                language: store.currentLanguage,
                text
              });
              setFetching(false);
            };
            const handleLanguageChange = async event => {
              setSelection(event.target.value === 'notValue' ? false : true);
              if (event.target.value === 'notValue') {
                updateValues('');
                return;
              }
              await store.getLanguage(event.target.value);
              updateValues(store.language.value);
              // if (store.params.promptId !== 'new') {
              // 	await checkExistencePrompt(event.target.value);
              // }
            };
            const disabled = !selection ? {
              disabled: true
            } : false || fetching;
            // const languages = store.prompt.language.languages;
            // let languagesOptions = languages?.map(language => {
            // 	return { value: language, label: texts.languages[language] };
            // });
            const options = [{
              value: 'notValue',
              label: 'Select...'
            }].concat(languagesOptions);
            return _react.default.createElement("div", {
              className: "form-language"
            }, _react.default.createElement("div", {
              className: "flex flex-container flex-space-between"
            }, _react.default.createElement("h3", null, texts.form.subtitleText), _react.default.createElement("div", {
              className: "flex-container flex-center"
            }, _react.default.createElement(_form.Select, {
              id: "selectLanguageType",
              options: options,
              defaultValue: "none",
              onChange: handleLanguageChange
            }))), _react.default.createElement(_form.Textarea, {
              className: "form-language__textarea",
              disabled: disabled,
              value: text,
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
            }), _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: update,
              variant: "primary",
              label: 'Update',
              disabled: disabled,
              title: "Actualizar templates a partir de este idioma"
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
        hash: 2999549602,
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
          function PromptTemplate() {
            const {
              store,
              texts
            } = (0, _context.usePromptsContext)();
            const save = async event => await store.savePrompt(event.currentTarget);
            const handleChange = event => store.prompt.set({
              is: event.target.value
            });
            const formatChange = event => store.prompt.set({
              format: event.target.value
            });
            const onChange = event => store.prompt.set({
              name: event.currentTarget.value
            });
            const onChangeDescription = event => store.prompt.set({
              description: event.currentTarget.value
            });
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
            }];
            const defaultType = store.isNew ? 'none' : store.prompt.is;
            const defaultFormat = store.isNew ? 'none' : store.prompt.format;
            return _react.default.createElement("div", {
              className: "prompt-form"
            }, _react.default.createElement("section", {
              className: "form-section"
            }, _react.default.createElement("h3", null, texts.header, " "), _react.default.createElement(_form.Input, {
              disabled: store.fetching,
              type: "text",
              value: store.prompt.name,
              onChange: onChange,
              placeholder: texts.header,
              required: true
            }), _react.default.createElement(_identifier.Identifier, null)), _react.default.createElement("section", {
              className: "row"
            }, _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement("h3", null, "Type"), _react.default.createElement(_form.Select, {
              id: "selectType",
              disabled: store.fetching,
              options: typeOptions,
              defaultValue: defaultType,
              onChange: handleChange
            })), _react.default.createElement("div", {
              className: "select-group"
            }, _react.default.createElement("h3", null, "Format"), _react.default.createElement(_form.Select, {
              id: "selectFormat",
              disabled: store.fetching,
              options: formatOptions,
              defaultValue: defaultFormat,
              onChange: formatChange
            }))), _react.default.createElement(_languages.Languages, null), _react.default.createElement(_literals.Literals, null), _react.default.createElement("footer", {
              className: "form-footer"
            }, _react.default.createElement(_components.Button, {
              type: "submit",
              onClick: save,
              variant: "primary",
              label: 'Save',
              title: "Save prompt"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/prompt/languages
      ****************************************/

      ims.set('./views/prompt/languages', {
        hash: 458512771,
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
              const active = supported.has(language.value) ? 'btn-tertiary' : '';
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
            }, _react.default.createElement("h3", null, texts.form.subtitleLanguage), _react.default.createElement("p", null, texts.languages.title, ":", store.prompt.language?.languages?.join(' - ') ?? ' Hay que actualizar los idiomas soportados'), _react.default.createElement("p", null, texts.languages.updated, ":", store.prompt.language?.updated?.join(' - ')), _react.default.createElement("div", {
              className: "flex-container"
            }, output));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/prompt/literals
      ***************************************/

      ims.set('./views/prompt/literals', {
        hash: 4772270,
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
              texts,
              languagesOptions
            } = (0, _context.usePromptsContext)();
            let supported = store.prompt.language?.languages ?? [];
            supported = new Set(supported);
            const [languages, setLanguages] = (0, _react.useState)(supported.size);
            const output = store.prompt.literals?.dependencies?.map(dependency => {
              const name = dependency.toLowerCase();
              return _react.default.createElement(_components.Link, {
                className: "unstyled",
                href: `/projects/${store.projectId}/prompts/view/ailearn.${name}`
              }, _react.default.createElement("p", null, dependency));
            });
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
            return _react.default.createElement("section", {
              className: "form-section languages-section"
            }, _react.default.createElement("h3", null, texts.form.subtitleLiterals), _react.default.createElement("p", null, store.prompt.literals?.pure?.join(' - ')), _react.default.createElement("h3", null, texts.form.subtitleDependencies), output);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX3JvdXRpbmciLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsImlkIiwiaXNOZXciLCJpbmNsdWRlcyIsInByb2plY3RJZCIsInByb21wdCIsImN1cnJlbnRMYW5ndWFnZSIsImxhbmd1YWdlIiwiZXJyb3JzIiwicHVzaCIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImpvaW4iLCJQcm9tcHQiLCJyZWFkeSIsInNhdmVQcm9tcHQiLCJsYW5ndWFnZXMiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwic2F2ZSIsImRhdGEiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiZ2V0TGFuZ3VhZ2UiLCJsYW5nIiwiUHJvbXB0VGVtcGxhdGVMYW5ndWFnZXMiLCJuYW1lIiwiaWRlbnRpZmllciIsIl9yZWFjdCIsIlByb21wdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9tcHRzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2Zvcm0iLCJfaW5kZXgiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0Iiwic2V0VGV4dCIsInZhbHVlIiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsImxhbmd1YWdlc09wdGlvbnMiLCJsYWJlbCIsImRlIiwiZXMiLCJlbiIsImZyIiwiaXQiLCJwdCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiY2xhc3NOYW1lIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJwcm9qZWN0c0hlYWRlciIsInBhZ2VUaXRsZSIsIlByb21wdFRlbXBsYXRlIiwiRm9ybVByb21wdExhbmd1YWdlIiwic2VsZWN0aW9uIiwic2V0U2VsZWN0aW9uIiwidXBkYXRlVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInVwZGF0ZSIsImV2ZW50IiwidXBkYXRlTGFuZ3VhZ2VzIiwic2V0IiwiaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UiLCJkaXNhYmxlZCIsIm9wdGlvbnMiLCJjb25jYXQiLCJmb3JtIiwic3VidGl0bGVUZXh0IiwiU2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJUZXh0YXJlYSIsIkJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwidmFyaWFudCIsInRpdGxlIiwiUmVhY3QiLCJfaWNvbnMiLCJJZGVudGlmaWVyIiwiSWNvbkJ1dHRvbiIsImljb24iLCJpZGVudGlmaWVySW5mbyIsIl9sYW5ndWFnZXMiLCJfbGl0ZXJhbHMiLCJfaWRlbnRpZmllciIsImN1cnJlbnRUYXJnZXQiLCJpcyIsImZvcm1hdENoYW5nZSIsImZvcm1hdCIsIm9uQ2hhbmdlRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInR5cGVPcHRpb25zIiwiZm9ybWF0T3B0aW9ucyIsImRlZmF1bHRUeXBlIiwiZGVmYXVsdEZvcm1hdCIsImhlYWRlciIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIkxhbmd1YWdlcyIsIkxpdGVyYWxzIiwic3VwcG9ydGVkIiwiU2V0Iiwic2V0TGFuZ3VhZ2VzIiwic2l6ZSIsImNsaWNrIiwiaGFzIiwiYWRkIiwiZGVsZXRlIiwiZGVmYXVsdExhbmciLCJ1bmRlZmluZWQiLCJvdXRwdXQiLCJtYXAiLCJrZXkiLCJzdWJ0aXRsZUxhbmd1YWdlIiwidXBkYXRlZCIsImxpdGVyYWxzIiwiZGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jeSIsInRvTG93ZXJDYXNlIiwiTGluayIsImhyZWYiLCJzdWJ0aXRsZUxpdGVyYWxzIiwicHVyZSIsInN1YnRpdGxlRGVwZW5kZW5jaWVzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGFuZ3VhZ2UvZm9ybS50c3giLCIvdHMvdmlld3MvcHJvbXB0L2lkZW50aWZpZXIudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9pbmRleC50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xhbmd1YWdlcy50c3giLCIvdHMvdmlld3MvcHJvbXB0L2xpdGVyYWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFD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