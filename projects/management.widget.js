System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.14/routing", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_3 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactPlatform016Models) {
      dependency_4 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_5 = _aimpactPlatform016StoresBase;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_8 = _pragmateUi108Form;
    }, function (_pragmateUi108Icons) {
      dependency_9 = _pragmateUi108Icons;
    }, function (_beyondJsKernel0114Routing) {
      dependency_10 = _beyondJsKernel0114Routing;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_11 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_12 = _beyondJsReact18Widgets116Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/projects/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/form', dependency_8], ['pragmate-ui/icons', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['@aimpact/platform/components/ui', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-platform-projects-management",
        "vspecifier": "@aimpact/platform@0.1.6/projects/management.widget",
        "is": "page",
        "route": "/projects/management",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/projects/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1699450171,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _index = require("./views/index");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _index.View;
            }
            show() {}
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1262248637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.FormBaseStoreManager {
            constructor() {
              super(_beyond_context.module.specifier, {
                model: _models.Project
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 3251310977,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 1432154350,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormProject = FormProject;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _context = require("./context");
          function FormProject() {
            const [name, setName] = _react.default.useState('');
            const [description, setDescription] = _react.default.useState('');
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            function navigateBack() {
              _routing.routing.back();
            }
            const handleChange = e => {
              setDescription(e.target.value);
            };
            async function onSubmit() {
              try {
                store.fetching = true;
                store.model.set({
                  name,
                  description
                });
                await store.model.publish();
                // Navigate back to projects list after successful creation
                _routing.routing.back();
              } catch (e) {
                console.error(e, 'Error creating project');
              } finally {
                store.fetching = false;
              }
            }
            const attrs = {
              disabled: store.fetching
            };
            return _react.default.createElement("article", {
              className: "article__container"
            }, _react.default.createElement(_form.Form, {
              className: "article-form__container",
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              type: "text",
              onChange: e => setName(e.target.value),
              placeholder: texts.inputProjectName,
              label: texts.inputProjectName
            }), _react.default.createElement(_form.Textarea, {
              value: description,
              label: texts.spanDescription,
              placeholder: texts.descriptionProject,
              onChange: handleChange
            }), _react.default.createElement("div", {
              className: "flex-container flex-space-between"
            }, _react.default.createElement(_icons.IconButton, {
              className: "md",
              icon: "backArrow",
              onClick: navigateBack
            }), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSubmit,
              ...attrs
            }, store.fetching ? texts.loading : texts.buttonSubmit))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2096807951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _form = require("./form");
          /*bundle*/
          function View({
            store
          }) {
            const {
              ready,
              texts
            } = store;
            (0, _hooks.useStore)(store);
            if (!ready) return React.createElement(_components.Spinner, {
              active: true
            });
            const contextValue = {
              store,
              texts
            };
            return React.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, React.createElement("div", {
              className: "wrapper"
            }, React.createElement(_ui.PageHeader, {
              className: "flex-container flex"
            }, React.createElement("h2", null, texts.header)), React.createElement(_form.FormProject, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfaW5kZXgiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVscyIsIl9iYXNlIiwiX2JleW9uZF9jb250ZXh0IiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsIm1vZGVsIiwiUHJvamVjdCIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9pY29ucyIsIl9yb3V0aW5nIiwiX2NvbnRleHQiLCJGb3JtUHJvamVjdCIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidGV4dHMiLCJuYXZpZ2F0ZUJhY2siLCJyb3V0aW5nIiwiYmFjayIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZmV0Y2hpbmciLCJzZXQiLCJwdWJsaXNoIiwiY29uc29sZSIsImVycm9yIiwiYXR0cnMiLCJkaXNhYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJGb3JtIiwiSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImlucHV0UHJvamVjdE5hbWUiLCJsYWJlbCIsIlRleHRhcmVhIiwic3BhbkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Qcm9qZWN0IiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiQnV0dG9uIiwidmFyaWFudCIsImxvYWRpbmciLCJidXR0b25TdWJtaXQiLCJfdWkiLCJSZWFjdCIsIl9ob29rcyIsInJlYWR5IiwidXNlU3RvcmUiLCJTcGlubmVyIiwiYWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlSGVhZGVyIiwiaGVhZGVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQU9HLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDbkUsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUEsR0FBSTtZQUNSQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQVQsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBVSxPQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxLQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxlQUFBLEdBQUFmLE9BQUE7VUFJTSxNQUFPTyxZQUFhLFNBQVFPLEtBQUEsQ0FBQUUsb0JBQTRCO1lBQzdEQyxZQUFBO2NBQ0MsS0FBSyxDQUFDRixlQUFBLENBQUFHLE1BQU0sQ0FB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