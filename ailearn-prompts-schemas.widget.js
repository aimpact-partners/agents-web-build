System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context2) {
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
    }, function (_beyondJsReactive205Model) {
      dependency_6 = _beyondJsReactive205Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_9 = _pragmateUi100Beta7Form;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_10 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.5.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX3JvdXRpbmciLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwiaWQiLCJpc05ldyIsImluY2x1ZGVzIiwibW9kZWwiLCJjdXJyZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImVycm9ycyIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwiZXJyb3IiLCJqb2luIiwicmVhZHkiLCJzYXZlU2NoZW1hIiwic2NoZW1hIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsInB1Ymxpc2giLCJkYXRhIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImdldExhbmd1YWdlIiwibGFuZyIsIlNjaGVtYSIsIl9yZWFjdCIsIlByb21wdHNDb250ZXh0IiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VQcm9tcHRzQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9mb3JtIiwiX2NvbnRleHQiLCJGb3JtU2NoZW1hIiwidGV4dCIsInRleHRzIiwic2V0VGV4dCIsImxhbmd1YWdlc09wdGlvbnMiLCJzZWxlY3Rpb24iLCJzZXRTZWxlY3Rpb24iLCJ1c2VTdGF0ZSIsInVwZGF0ZVZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhdmUiLCJldmVudCIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiZGlzYWJsZWQiLCJvcHRpb25zIiwibGFiZWwiLCJjb25jYXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZm9ybSIsInN1YnRpdGxlVGV4dCIsIlNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiVGV4dGFyZWEiLCJCdXR0b24iLCJ0eXBlIiwib25DbGljayIsInZhcmlhbnQiLCJ0aXRsZSIsIl91aSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwibGFuZ3VhZ2VzIiwiZGUiLCJlcyIsImVuIiwiZnIiLCJpdCIsInB0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhZ2VUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZm9ybS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFFQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENB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