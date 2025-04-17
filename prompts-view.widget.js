System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/agents-client@0.0.29/prompts", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
          "vspecifier": "@aimpact/platform@0.1.6/prompts-view",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/agents-client/prompts', dependency_4], ['@aimpact/platform/models', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['react', dependency_8], ['@aimpact/platform/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/icons', dependency_13]]);
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
        hash: 3666362110,
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
              this.#language = new _prompts.PromptTemplateLanguages({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfcHJvbXB0cyIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJpZCIsImlzTmV3IiwiaW5jbHVkZXMiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImVycm9ycyIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwiUHJvbXB0IiwicmVhZHkiLCJzYXZlUHJvbXB0IiwibGFuZ3VhZ2VzIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsInNhdmUiLCJkYXRhIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImdldExhbmd1YWdlIiwibGFuZyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwibmFtZSIsImlkZW50aWZpZXIiLCJfcmVhY3QiLCJQcm9tcHRzQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvbXB0c0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9mb3JtIiwiX2luZGV4IiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJ2YWx1ZSIsInNldEZldGNoaW5nIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJsYW5ndWFnZXNPcHRpb25zIiwibGFiZWwiLCJkZSIsImVzIiwiZW4iLCJmciIsIml0IiwicHQiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicHJvamVjdHNIZWFkZXIiLCJwYWdlVGl0bGUiLCJQcm9tcHRUZW1wbGF0ZSIsIkZvcm1Qcm9tcHRMYW5ndWFnZSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsInVwZGF0ZVZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ1cGRhdGUiLCJldmVudCIsInVwZGF0ZUxhbmd1YWdlcyIsInNldCIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvcHRpb25zIiwiY29uY2F0IiwiZm9ybSIsInN1YnRpdGxlVGV4dCIsIlNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ0eXBlIiwib25DbGljayIsInZhcmlhbnQiLCJ0aXRsZSIsIlJlYWN0IiwiX2ljb25zIiwiSWRlbnRpZmllciIsIkljb25CdXR0b24iLCJpY29uIiwiaWRlbnRpZmllckluZm8iLCJfbGFuZ3VhZ2VzIiwiX2xpdGVyYWxzIiwiX2lkZW50aWZpZXIiLCJjdXJyZW50VGFyZ2V0IiwiaXMiLCJmb3JtYXRDaGFuZ2UiLCJmb3JtYXQiLCJvbkNoYW5nZURlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJ0eXBlT3B0aW9ucyIsImZvcm1hdE9wdGlvbnMiLCJkZWZhdWx0VHlwZSIsImRlZmF1bHRGb3JtYXQiLCJoZWFkZXIiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJMYW5ndWFnZXMiLCJMaXRlcmFscyIsInN1cHBvcnRlZCIsIlNldCIsInNldExhbmd1YWdlcyIsInNpemUiLCJjbGljayIsImhhcyIsImFkZCIsImRlbGV0ZSIsImRlZmF1bHRMYW5nIiwidW5kZWZpbmVkIiwib3V0cHV0IiwibWFwIiwia2V5Iiwic3VidGl0bGVMYW5ndWFnZSIsInVwZGF0ZWQiLCJsaXRlcmFscyIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVuY3kiLCJ0b0xvd2VyQ2FzZSIsIkxpbmsiLCJocmVmIiwic3VidGl0bGVMaXRlcmFscyIsInB1cmUiLCJzdWJ0aXRsZURlcGVuZGVuY2llcyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2xhbmd1YWdlL2Zvcm0udHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9pZGVudGlmaWVyLnRzeCIsIi90cy92aWV3cy9wcm9tcHQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL3Byb21wdC9saXRlcmFscy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxD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