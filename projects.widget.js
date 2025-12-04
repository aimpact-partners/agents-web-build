System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "pragmate-ui@1.0.8/list", "@aimpact/platform@0.1.6/shared/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_2 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactPlatform016Models) {
      dependency_3 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_4 = _aimpactPlatform016StoresBase;
    }, function (_pragmateUi108Components) {
      dependency_5 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_6 = _pragmateUi108Form;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_8 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_9 = _beyondJsReact18Widgets116Hooks;
    }, function (_pragmateUi108List) {
      dependency_10 = _pragmateUi108List;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_11 = _aimpactPlatform016SharedIcons;
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
          "vspecifier": "@aimpact/platform@0.1.6/projects",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/platform/models', dependency_3], ['@aimpact/platform/stores/base', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/form', dependency_6], ['react', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/list', dependency_10], ['@aimpact/platform/shared/icons', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-platform-projects",
        "vspecifier": "@aimpact/platform@0.1.6/projects.widget",
        "is": "page",
        "route": "/",
        "layout": "platform-layout"
      }]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 577445044,
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
            show() {
              this.#store.load(this.uri.qs.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3053935402,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.ListStoreManager {
            constructor() {
              super(_beyond_context.module.specifier, {
                model: _models.Projects
              });
              this.load();
            }
            async createProject(data) {
              try {
                const project = new _models.Project();
                project.set(data);
                await project.publish(data);
              } catch (e) {
                console.error(e, 'This error');
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/category-form
      *************************************/

      ims.set('./views/category-form', {
        hash: 2092483263,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CategoryForm = CategoryForm;
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _context = require("./context");
          function CategoryForm({
            data,
            setShowCategoryForm
          }) {
            const [name, setName] = _react.default.useState('');
            const [description, setDescription] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            function cancelCreation() {
              setShowCategoryForm(false);
            }
            async function onSubmit() {
              setFetching(true);
              await store.createCategory({
                id: data.id,
                project: data.name,
                name: name,
                description
              });
              setShowCategoryForm(false);
              setFetching(false);
              setName('');
              setDescription('');
            }
            const attrs = {
              disabled: fetching
            };
            return _react.default.createElement("div", {
              className: "form__categories"
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              type: "text",
              onChange: e => setName(e.target.value),
              label: texts.inputName
            }), _react.default.createElement(_form.Input, {
              type: "text",
              onChange: e => setDescription(e.target.value),
              label: texts.inputDescription
            }), _react.default.createElement("div", {
              className: "form__categories_buttons"
            }, _react.default.createElement(_components.Button, {
              className: "md",
              onClick: cancelCreation
            }, texts.buttonClose), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSubmit,
              ...attrs
            }, texts.buttonSave))));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2088316476,
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 775653262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("./context");
          var _item = require("./item");
          /*bundle*/
          function View({
            store
          }) {
            const {
              ready,
              texts
            } = store;
            const contextValue = {
              store,
              texts
            };
            (0, _hooks.useStore)(store);
            return React.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, React.createElement(_ui.Page.layout, {
              ready: ready
            }, React.createElement(_ui.Page.header, {
              title: texts.header
            }, React.createElement(_components.Link, {
              href: "/projects/management",
              className: "btn btn-primary"
            }, texts.addProjectButton)), React.createElement(_ui.Page.body, null, React.createElement(_list.List, {
              items: store.items,
              control: _item.default,
              className: "platform-list"
            }))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 2582074526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Project;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("@aimpact/platform/shared/icons");
          function Project({
            data
          }) {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("article", {
              className: "list__item flex-list"
            }, _react.default.createElement("section", {
              className: "list__item-content"
            }, _react.default.createElement("h3", null, data.name), _react.default.createElement("div", {
              className: "text-muted"
            }, data.description)), _react.default.createElement("section", {
              className: "actions-container"
            }, _react.default.createElement(_components.Link, {
              href: `/prompts/list/${data.id}`
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "prompts"
            }), texts.titlePrompts), _react.default.createElement(_components.Link, {
              href: `/agents/activity/list?projectId=${data.id}`
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "agents"
            }), texts.titleAgents)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfaW5kZXgiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJMaXN0U3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJtb2RlbCIsIlByb2plY3RzIiwiY3JlYXRlUHJvamVjdCIsImRhdGEiLCJwcm9qZWN0IiwiUHJvamVjdCIsInNldCIsInB1Ymxpc2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiQ2F0ZWdvcnlGb3JtIiwic2V0U2hvd0NhdGVnb3J5Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJjYW5jZWxDcmVhdGlvbiIsIm9uU3VibWl0IiwiY3JlYXRlQ2F0ZWdvcnkiLCJpZCIsImF0dHJzIiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRm9ybSIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsYWJlbCIsImlucHV0TmFtZSIsImlucHV0RGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uQ2xvc2UiLCJ2YXJpYW50IiwiYnV0dG9uU2F2ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9saXN0IiwiUmVhY3QiLCJfaXRlbSIsInJlYWR5IiwiY29udGV4dFZhbHVlIiwidXNlU3RvcmUiLCJQcm92aWRlciIsIlBhZ2UiLCJsYXlvdXQiLCJoZWFkZXIiLCJ0aXRsZSIsIkxpbmsiLCJocmVmIiwiYWRkUHJvamVjdEJ1dHRvbiIsImJvZHkiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiX2ljb25zIiwiQXBwSWNvbiIsImljb24iLCJ0aXRsZVByb21wdHMiLCJ0aXRsZUFnZW50cyJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NhdGVnb3J5LWZvcm0udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBRUEsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FFSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFD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SUFBSTtjQUFDQyxLQUFLLEVBQUV4RixLQUFLLENBQUN3RixLQUFLO2NBQUVDLE9BQU8sRUFBRWYsS0FBQSxDQUFBckMsT0FBTztjQUFFZSxTQUFTLEVBQUM7WUFBZSxFQUFHLENBQzdELENBQ0MsQ0FDVTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkEsSUFBQXZCLFdBQUEsR0FBQWxDLE9BQUE7VUFDQSxJQUFBb0MsTUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFxQyxRQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQStGLE1BQUEsR0FBQS9GLE9BQUE7VUFPYyxTQUFVNEIsT0FBT0EsQ0FBQztZQUFFRjtVQUFJLENBQWdCO1lBQ3JELE1BQU07Y0FBRXNCO1lBQUssQ0FBRSxHQUFHLElBQUFYLFFBQUEsQ0FBQVksZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ2IsTUFBQSxDQUFBTSxPQUFBLENBQUFjLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDckIsTUFBQSxDQUFBTSxPQUFBLENBQUFjLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDckIsTUFBQSxDQUFBTSxPQUFBLENBQUFjLGFBQUEsYUFBSzlCLElBQUksQ0FBQ2MsSUFBSSxDQUFNLEVBQ3BCSixNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBWSxHQUFFL0IsSUFBSSxDQUFDa0IsV0FBVyxDQUFPLENBQzNDLEVBQ1ZSLE1BQUEsQ0FBQU0sT0FBQSxDQUFBYyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFtQixHQUNyQ3JCLE1BQUEsQ0FBQU0sT0FBQSxDQUFBYyxhQUFBLENBQUN0QixXQUFBLENBQUFzRCxJQUFJO2NBQUNDLElBQUksRUFBRSxpQkFBaUIvRCxJQUFJLENBQUMyQixFQUFFO1lBQUUsR0FDckNqQixNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdUMsTUFBQSxDQUFBQyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFTLEVBQUcsRUFDekJqRCxLQUFLLENBQUNrRCxZQUFZLENBQ2IsRUFDUDlELE1BQUEsQ0FBQU0sT0FBQSxDQUFBYyxhQUFBLENBQUN0QixXQUFBLENBQUFzRCxJQUFJO2NBQUNDLElBQUksRUFBRSxtQ0FBbUMvRCxJQUFJLENBQUMyQixFQUFFO1lBQUUsR0FDdkRqQixNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdUMsTUFBQSxDQUFBQyxPQUFPO2NBQUNDLElBQUksRUFBQztZQUFRLEVBQUcsRUFDeEJqRCxLQUFLLENBQUNtRCxXQUFXLENBQ1osQ0FDRSxDQUNEO1VBRVoiLCJpZ25vcmVMaXN0IjpbXX0=