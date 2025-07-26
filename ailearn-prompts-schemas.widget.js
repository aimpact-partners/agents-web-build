System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.1.0/model", "react@18.3.1", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/form", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi102Components) {
      dependency_8 = _pragmateUi102Components;
    }, function (_pragmateUi102Form) {
      dependency_9 = _pragmateUi102Form;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_10 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
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
          "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-schemas",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/platform/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-prompts-schemas",
        "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-schemas.widget",
        "is": "page",
        "route": "/ailearn/schemas/${schemaId}",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/ailearn-prompts-schemas.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 764152777,
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
              this.#store.load(this.uri.vars.get('schemaId'));
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
        hash: 3701934743,
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
            get id() {
              return this.#id;
            }
            get isNew() {
              return this.#id.includes('new');
            }
            #model;
            get model() {
              return this.#model;
            }
            #currentLanguage;
            get currentLanguage() {
              return this.#currentLanguage;
            }
            #language;
            get language() {
              return this.#language;
            }
            async load(id) {
              const errors = [];
              !id && errors.push('id');
              if (errors.length) {
                console.error('Parameters not found: ', errors.join(', '));
                return;
              }
              this.#id = id;
              this.ready = true;
            }
            async saveSchema(language, schema) {
              this.fetching = true;
              const response = await this.#model.publish({
                language,
                schema
              });
              this.fetching = false;
              if (this.isNew) {
                this.#id = response.data.id;
                _routing.routing.replaceState({}, '', `/ailearn/schemas/${this.#id}`);
                return;
              }
            }
            async getLanguage(lang) {
              this.fetching = true;
              this.#model = new _models.Schema({
                id: this.id
              });
              if (!this.isNew) {
                await this.#model.load(lang);
                if (this.#model.error) {
                  console.error(this.#model.error);
                  return;
                }
              }
              this.#currentLanguage = this.#model.language;
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
        hash: 2479767735,
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

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 3403894609,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormSchema = FormSchema;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("./context");
          function FormSchema() {
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
            const save = async event => {
              await store.saveSchema(store.currentLanguage, text);
            };
            const handleLanguageChange = async event => {
              setSelection(event.target.value === 'notValue' ? false : true);
              if (event.target.value === 'notValue') {
                updateValues('');
                return;
              }
              await store.getLanguage(event.target.value);
              updateValues(store.model.schema);
            };
            const disabled = !selection ? {
              disabled: true
            } : false || store.fetching;
            const options = [{
              value: 'notValue',
              label: 'Select...'
            }].concat(languagesOptions);
            return _react.default.createElement("div", {
              className: "div-section"
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
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4209416569,
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
          var _form = require("./form");
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
              breadcrumb: [['Home', '/'], ['RVD - Activities', `/ailearn/prompts`], [texts.pageTitle, '']]
            }), _react.default.createElement(_form.FormSchema, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX3JvdXRpbmciLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaWQiLCJpc05ldyIsImluY2x1ZGVzIiwibW9kZWwiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImVycm9ycyIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwicmVhZHkiLCJzYXZlU2NoZW1hIiwic2NoZW1hIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsInB1Ymxpc2giLCJkYXRhIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImdldExhbmd1YWdlIiwibGFuZyIsIlNjaGVtYSIsIl9yZWFjdCIsIlByb21wdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9tcHRzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2NvbnRleHQiLCJGb3JtU2NoZW1hIiwidGV4dCIsInRleHRzIiwic2V0VGV4dCIsImxhbmd1YWdlc09wdGlvbnMiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ1c2VTdGF0ZSIsInVwZGF0ZVZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhdmUiLCJldmVudCIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvcHRpb25zIiwibGFiZWwiLCJjb25jYXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZm9ybSIsInN1YnRpdGxlVGV4dCIsIlNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ0eXBlIiwib25DbGljayIsInZhcmlhbnQiLCJ0aXRsZSIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwibGFuZ3VhZ2VzIiwiZGUiLCJlcyIsImVuIiwiZnIiLCJpdCIsInB0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhZ2VUaXRsZSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2Zvcm0udHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtB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