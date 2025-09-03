System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@2.1.1/model"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_4 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/prompts/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@beyond-js/reactive/model', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "bynd-prompt-management",
        "vspecifier": "@aimpact/platform@0.1.6/prompts/management.widget",
        "is": "page",
        "route": "/prompts/management",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/prompts/management.widget');
      ims = new Map();
      /**********************************************
      INTERNAL MODULE: ./components/add-variable-form
      **********************************************/
      ims.set('./components/add-variable-form', {
        hash: 2407402930,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddVariableForm = void 0;
          var _react = require("react");
          var React = _react;
          var _moduleContext = require("../context/module-context");
          const AddVariableForm = () => {
            const {
              store
            } = (0, _moduleContext.useModuleContext)();
            const [newVariableName, setNewVariableName] = (0, _react.useState)('');
            const [newVariableValue, setNewVariableValue] = (0, _react.useState)('');
            const handleSubmit = () => {
              if (newVariableName.trim() && newVariableValue.trim()) {
                store.addVariable(newVariableName.trim(), newVariableValue.trim());
                setNewVariableName('');
                setNewVariableValue('');
              }
            };
            const handleKeyPress = e => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            };
            return React.createElement("div", {
              className: "prompt-playground__add-variable"
            }, React.createElement("input", {
              type: "text",
              value: newVariableName,
              onChange: e => setNewVariableName(e.target.value),
              onKeyPress: handleKeyPress,
              className: "prompt-playground__input",
              placeholder: "Nombre de la variable"
            }), React.createElement("input", {
              type: "text",
              value: newVariableValue,
              onChange: e => setNewVariableValue(e.target.value),
              onKeyPress: handleKeyPress,
              className: "prompt-playground__input",
              placeholder: "Valor"
            }));
          };
          exports.AddVariableForm = AddVariableForm;
        }
      });

      /**********************************
      INTERNAL MODULE: ./components/index
      **********************************/

      ims.set('./components/index', {
        hash: 760300769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "AddVariableForm", {
            enumerable: true,
            get: function () {
              return _addVariableForm.AddVariableForm;
            }
          });
          Object.defineProperty(exports, "ResultsPanel", {
            enumerable: true,
            get: function () {
              return _resultsPanel.ResultsPanel;
            }
          });
          Object.defineProperty(exports, "VariableItem", {
            enumerable: true,
            get: function () {
              return _variableItem.VariableItem;
            }
          });
          var _variableItem = require("./variable-item");
          var _addVariableForm = require("./add-variable-form");
          var _resultsPanel = require("./results-panel");
        }
      });

      /******************************************
      INTERNAL MODULE: ./components/results-panel
      ******************************************/

      ims.set('./components/results-panel', {
        hash: 3001010601,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResultsPanel = void 0;
          var React = require("react");
          var _context = require("../context");
          const ResultsPanel = () => {
            const {
              store
            } = (0, _context.useModuleContext)();
            if (store.isExecuting) {
              return React.createElement("div", {
                className: "prompt-playground__results-panel"
              }, React.createElement("div", {
                className: "prompt-playground__loading-state"
              }, React.createElement("div", {
                className: "prompt-playground__loading-spinner"
              }), React.createElement("p", {
                className: "prompt-playground__loading-text"
              }, "Procesando prompt...")));
            }
            if (store.hasError) {
              return React.createElement("div", {
                className: "prompt-playground__results-panel"
              }, React.createElement("div", {
                className: "prompt-playground__error-state"
              }, React.createElement("h3", {
                className: "prompt-playground__error-title"
              }, "Error"), React.createElement("p", {
                className: "prompt-playground__error-message"
              }, store.errorMessage || 'Ocurrió un error al procesar el prompt')));
            }
            if (store.results) {
              return React.createElement("div", {
                className: "prompt-playground__results-panel"
              }, React.createElement("div", {
                className: "prompt-playground__results-content"
              }, React.createElement("h3", {
                className: "prompt-playground__results-title"
              }, "Resultados"), React.createElement("div", {
                className: "prompt-playground__results-text"
              }, store.results)));
            }
            // Estado vacío por defecto
            return React.createElement("div", {
              className: "prompt-playground__results-panel"
            }, React.createElement("div", {
              className: "prompt-playground__empty-state"
            }, React.createElement("h3", {
              className: "prompt-playground__empty-title"
            }, "Resultados del Prompt"), React.createElement("p", {
              className: "prompt-playground__empty-description"
            }, "Aqu\u00ED se mostrar\u00E1n los resultados cuando ejecutes el prompt")));
          };
          exports.ResultsPanel = ResultsPanel;
        }
      });

      /******************************************
      INTERNAL MODULE: ./components/variable-item
      ******************************************/

      ims.set('./components/variable-item', {
        hash: 3716797828,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VariableItem = void 0;
          var React = require("react");
          var _moduleContext = require("../context/module-context");
          const VariableItem = ({
            name,
            value
          }) => {
            const {
              store
            } = (0, _moduleContext.useModuleContext)();
            const handleUpdate = newValue => {
              store.updateVariable(name, newValue);
            };
            const handleRemove = () => {
              store.removeVariable(name);
            };
            return React.createElement("div", {
              className: "prompt-playground__variable-item"
            }, React.createElement("span", {
              className: "prompt-playground__variable-name"
            }, name), React.createElement("input", {
              type: "text",
              value: value,
              onChange: e => handleUpdate(e.target.value),
              className: "prompt-playground__variable-value",
              placeholder: "Valor"
            }), React.createElement("button", {
              onClick: handleRemove,
              className: "prompt-playground__remove-variable",
              "aria-label": "Eliminar variable"
            }, "\u00D7"));
          };
          exports.VariableItem = VariableItem;
        }
      });

      /*******************************
      INTERNAL MODULE: ./context/index
      *******************************/

      ims.set('./context/index', {
        hash: 3837482568,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "ModuleProvider", {
            enumerable: true,
            get: function () {
              return _moduleContext.ModuleProvider;
            }
          });
          Object.defineProperty(exports, "useModuleContext", {
            enumerable: true,
            get: function () {
              return _moduleContext.useModuleContext;
            }
          });
          var _moduleContext = require("./module-context");
        }
      });

      /****************************************
      INTERNAL MODULE: ./context/module-context
      ****************************************/

      ims.set('./context/module-context', {
        hash: 3522407414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleProvider = void 0;
          var _react = require("react");
          var React = _react;
          const ModuleContext = (0, _react.createContext)(null);
          const ModuleProvider = ({
            store,
            children
          }) => {
            return React.createElement(ModuleContext.Provider, {
              value: {
                store
              }
            }, children);
          };
          exports.ModuleProvider = ModuleProvider;
          const useModuleContext = () => {
            const context = (0, _react.useContext)(ModuleContext);
            if (!context) {
              throw new Error('useModuleContext debe usarse dentro de ModuleProvider');
            }
            return context;
          };
          exports.useModuleContext = useModuleContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 209110941,
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
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.qs);
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4052336023,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            isStore = true;
            #variables = new Map();
            #isExecuting = false;
            #results = '';
            #hasError = false;
            #errorMessage = '';
            constructor() {
              super();
            }
            get variables() {
              return this.#variables;
            }
            get isExecuting() {
              return this.#isExecuting;
            }
            get results() {
              return this.#results;
            }
            get hasError() {
              return this.#hasError;
            }
            get errorMessage() {
              return this.#errorMessage;
            }
            addVariable(name, value) {
              this.#variables.set(name, value);
              this.trigger('change');
            }
            removeVariable(name) {
              this.#variables.delete(name);
              this.trigger('change');
            }
            updateVariable(name, value) {
              if (this.#variables.has(name)) {
                this.#variables.set(name, value);
                this.trigger('change');
              }
            }
            async executePrompt(promptText) {
              if (!promptText.trim()) return;
              this.#isExecuting = true;
              this.#hasError = false;
              this.#errorMessage = '';
              this.#results = '';
              this.trigger('change');
              try {
                // TODO: Implementar lógica de ejecución del prompt
                // Por ahora simulamos un delay
                await new Promise(resolve => setTimeout(resolve, 2000));
                // Simular resultado exitoso
                this.#results = 'Este es un resultado de ejemplo del prompt ejecutado.';
              } catch (error) {
                this.#hasError = true;
                this.#errorMessage = error instanceof Error ? error.message : 'Error desconocido';
              } finally {
                this.#isExecuting = false;
                this.trigger('change');
              }
            }
            load(qs) {
              console.log(qs);
              this.#variables = qs;
              this.trigger('change');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3817732144,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _promptPlaygroundContent = require("./prompt-playground-content");
          var _context = require("../context");
          /*bundle*/
          function View({
            store
          }) {
            return React.createElement(_context.ModuleProvider, {
              store: store
            }, React.createElement(_promptPlaygroundContent.PromptPlaygroundContent, null));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/prompt-playground-content
      *************************************************/

      ims.set('./views/prompt-playground-content', {
        hash: 2755645063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptPlaygroundContent = void 0;
          var _react = require("react");
          var React = _react;
          var _components = require("../components");
          var _context = require("../context");
          const PromptPlaygroundContent = () => {
            const [promptText, setPromptText] = (0, _react.useState)('');
            const {
              store
            } = (0, _context.useModuleContext)();
            const handleExecutePrompt = () => {
              store.executePrompt(promptText);
            };
            return React.createElement("div", {
              className: "prompt-playground"
            }, React.createElement("div", {
              className: "prompt-playground__left-panel"
            }, React.createElement("div", {
              className: "prompt-playground__section"
            }, React.createElement("h3", {
              className: "prompt-playground__section-title"
            }, "Variables"), Array.from(store.variables.entries()).length > 0 && React.createElement("div", {
              className: "prompt-playground__variables-list"
            }, Array.from(store.variables.entries()).map(([key, value]) => React.createElement(_components.VariableItem, {
              key: key,
              name: key,
              value: value
            }))), React.createElement(_components.AddVariableForm, null)), React.createElement("div", {
              className: "prompt-playground__section"
            }, React.createElement("h3", {
              className: "prompt-playground__section-title"
            }, "Prompt"), React.createElement("textarea", {
              value: promptText,
              onChange: e => setPromptText(e.target.value),
              className: "prompt-playground__prompt-textarea",
              placeholder: "Define tu prompt aqu\u00ED...",
              rows: 6
            }), React.createElement("button", {
              onClick: handleExecutePrompt,
              className: "prompt-playground__execute-button",
              disabled: !promptText.trim() || store.isExecuting
            }, store.isExecuting ? 'Ejecutando...' : 'Ejecutar Prompt'))), React.createElement(_components.ResultsPanel, null));
          };
          exports.PromptPlaygroundContent = PromptPlaygroundContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUmVhY3QiLCJfbW9kdWxlQ29udGV4dCIsIkFkZFZhcmlhYmxlRm9ybSIsInN0b3JlIiwidXNlTW9kdWxlQ29udGV4dCIsIm5ld1ZhcmlhYmxlTmFtZSIsInNldE5ld1ZhcmlhYmxlTmFtZSIsInVzZVN0YXRlIiwibmV3VmFyaWFibGVWYWx1ZSIsInNldE5ld1ZhcmlhYmxlVmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJ0cmltIiwiYWRkVmFyaWFibGUiLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJrZXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwicGxhY2Vob2xkZXIiLCJleHBvcnRzIiwiX3ZhcmlhYmxlSXRlbSIsIl9hZGRWYXJpYWJsZUZvcm0iLCJfcmVzdWx0c1BhbmVsIiwiX2NvbnRleHQiLCJSZXN1bHRzUGFuZWwiLCJpc0V4ZWN1dGluZyIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicmVzdWx0cyIsIlZhcmlhYmxlSXRlbSIsIm5hbWUiLCJoYW5kbGVVcGRhdGUiLCJuZXdWYWx1ZSIsInVwZGF0ZVZhcmlhYmxlIiwiaGFuZGxlUmVtb3ZlIiwicmVtb3ZlVmFyaWFibGUiLCJvbkNsaWNrIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNb2R1bGVQcm92aWRlciIsImNoaWxkcmVuIiwiUHJvdmlkZXIiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJsb2FkIiwidXJpIiwicXMiLCJoaWRlIiwiX21vZGVsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJ2YXJpYWJsZXMiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInNldCIsInRyaWdnZXIiLCJkZWxldGUiLCJoYXMiLCJleGVjdXRlUHJvbXB0IiwicHJvbXB0VGV4dCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJfcHJvbXB0UGxheWdyb3VuZENvbnRlbnQiLCJQcm9tcHRQbGF5Z3JvdW5kQ29udGVudCIsIl9jb21wb25lbnRzIiwic2V0UHJvbXB0VGV4dCIsImhhbmRsZUV4ZWN1dGVQcm9tcHQiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwibGVuZ3RoIiwibWFwIiwicm93cyIsImRpc2FibGVkIl0sInNvdXJjZXMiOlsiLy90cy9jb21wb25lbnRzL2FkZC12YXJpYWJsZS1mb3JtLnRzeCIsIi8vdHMvY29tcG9uZW50cy9pbmRleC50cyIsIi8vdHMvY29tcG9uZW50cy9yZXN1bHRzLXBhbmVsLnRzeCIsIi8vdHMvY29tcG9uZW50cy92YXJpYWJsZS1pdGVtLnRzeCIsIi8vdHMvY29udGV4dC9pbmRleC50cyIsIi8vdHMvY29udGV4dC9tb2R1bGUtY29udGV4dC50c3giLCIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3Byb21wdC1wbGF5Z3JvdW5kLWNvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFBK0IsSUFBQUMsS0FBQSxHQUFBRixNQUFBO1VBRS9CLElBQUFHLGNBQUEsR0FBQUYsT0FBQTtVQUVPLE1BQU1HLGVBQWUsR0FBYUEsQ0FBQSxLQUFLO1lBQzdDLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdB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Q0FBQWdCLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQWtDLGVBQWUsRUFHOUR1RSxLQUFLLENBQUNDLElBQUksQ0FBQ3RGLEtBQUssQ0FBQ2dFLFNBQVMsQ0FBQ3VCLE9BQU8sRUFBRSxDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQ2hEM0YsS0FBQSxDQUFBZ0IsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUMsR0FDaER1RSxLQUFLLENBQUNDLElBQUksQ0FBQ3RGLEtBQUssQ0FBQ2dFLFNBQVMsQ0FBQ3VCLE9BQU8sRUFBRSxDQUFDLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUM3RSxHQUFHLEVBQUVJLEtBQUssQ0FBQyxLQUN2RG5CLEtBQUEsQ0FBQWdCLGFBQUEsQ0FBQ3FFLFdBQUEsQ0FBQW5ELFlBQVk7Y0FBQ25CLEdBQUcsRUFBRUEsR0FBRztjQUFFb0IsSUFBSSxFQUFFcEIsR0FBRztjQUFFSSxLQUFLLEVBQUVBO1lBQUssRUFDL0MsQ0FBQyxDQUVILEVBR0RuQixLQUFBLENBQUFnQixhQUFBLENBQUNxRSxXQUFBLENBQUFuRixlQUFlLE9BQUcsQ0FDZCxFQUVORixLQUFBLENBQUFnQixhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0QixHQUMxQ2pCLEtBQUEsQ0FBQWdCLGFBQUE7Y0FBSUMsU0FBUyxFQUFDO1lBQWtDLFlBQVksRUFDNURqQixLQUFBLENBQUFnQixhQUFBO2NBQ0NHLEtBQUssRUFBRXdELFVBQVU7Y0FDakJ2RCxRQUFRLEVBQUVOLENBQUMsSUFBSXdFLGFBQWEsQ0FBQ3hFLENBQUMsQ0FBQ08sTUFBTSxDQUFDRixLQUFLLENBQUM7Y0FDNUNGLFNBQVMsRUFBQyxvQ0FBb0M7Y0FDOUNNLFdBQVcsRUFBQywrQkFBMEI7Y0FDdENzRSxJQUFJLEVBQUU7WUFBQyxFQUNOLEVBQ0Y3RixLQUFBLENBQUFnQixhQUFBO2NBQ0N5QixPQUFPLEVBQUU4QyxtQkFBbUI7Y0FDNUJ0RSxTQUFTLEVBQUMsbUNBQW1DO2NBQzdDNkUsUUFBUSxFQUFFLENBQUNuQixVQUFVLENBQUNoRSxJQUFJLEVBQUUsSUFBSVIsS0FBSyxDQUFDMkI7WUFBVyxHQUVoRDNCLEtBQUssQ0FBQzJCLFdBQVcsR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQ2hELENBQ0osQ0FDRCxFQUdOOUIsS0FBQSxDQUFBZ0IsYUFBQSxDQUFDcUUsV0FBQSxDQUFBeEQsWUFBWSxPQUFHLENBQ1g7VUFFUixDQUFDO1VBQUNMLE9BQUEsQ0FBQTRELHVCQUFBLEdBQUFBLHVCQUFBIiwiaWdub3JlTGlzdCI6W119