System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/platform/models', dependency_3], ['@aimpact/platform/stores/base', dependency_4], ['pragmate-ui/components', dependency_5], ['pragmate-ui/form', dependency_6], ['react', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/list', dependency_10]]);
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
        hash: 2797710297,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Project = void 0;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          const Project = ({
            data
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("article", {
              className: "list__item flex-list"
            }, _react.default.createElement("section", {
              className: "list__item-content"
            }, _react.default.createElement("h2", null, data.name), _react.default.createElement("div", {
              className: "list__item_description"
            }, data.description)), _react.default.createElement("section", {
              className: "actions-container"
            }, _react.default.createElement(_components.Link, {
              href: `/prompts/list/${data.id}`,
              className: "btn btn-primary"
            }, texts.titlePrompts), _react.default.createElement(_components.Link, {
              href: `/agents/activity/list?projectId=${data.id}`,
              className: "btn btn-secondary"
            }, texts.titleAgents)));
          };
          exports.Project = Project;
          var _default = exports.default = Project;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfaW5kZXgiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJMaXN0U3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJtb2RlbCIsIlByb2plY3RzIiwiY3JlYXRlUHJvamVjdCIsImRhdGEiLCJwcm9qZWN0IiwiUHJvamVjdCIsInNldCIsInB1Ymxpc2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiQ2F0ZWdvcnlGb3JtIiwic2V0U2hvd0NhdGVnb3J5Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJjYW5jZWxDcmVhdGlvbiIsIm9uU3VibWl0IiwiY3JlYXRlQ2F0ZWdvcnkiLCJpZCIsImF0dHJzIiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRm9ybSIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsYWJlbCIsImlucHV0TmFtZSIsImlucHV0RGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uQ2xvc2UiLCJ2YXJpYW50IiwiYnV0dG9uU2F2ZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9ob29rcyIsIl9saXN0IiwiUmVhY3QiLCJfaXRlbSIsInJlYWR5IiwiY29udGV4dFZhbHVlIiwidXNlU3RvcmUiLCJQcm92aWRlciIsIlBhZ2UiLCJsYXlvdXQiLCJoZWFkZXIiLCJ0aXRsZSIsIkxpbmsiLCJocmVmIiwiYWRkUHJvamVjdEJ1dHRvbiIsImJvZHkiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwidGl0bGVQcm9tcHRzIiwidGl0bGVBZ2VudHMiLCJfZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NhdGVnb3J5LWZvcm0udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBRUgsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4Qzs7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S0FBSyxDQUFDd0YsS0FBSztjQUFFQyxPQUFPLEVBQUVmLEtBQUEsQ0FBQXJDLE9BQU87Y0FBRWUsU0FBUyxFQUFDO1lBQWUsRUFBRyxDQUM3RCxDQUNDLENBQ1U7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBLElBQUF2QixXQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQW9DLE1BQUEsR0FBQXBDLE9BQUE7VUFDQSxJQUFBcUMsUUFBQSxHQUFBckMsT0FBQTtVQU9PLE1BQU00QixPQUFPLEdBQTJCQSxDQUFDO1lBQUVGO1VBQUksQ0FBRSxLQUFJO1lBQzNELE1BQU07Y0FBRXNCO1lBQUssQ0FBRSxHQUFHLElBQUFYLFFBQUEsQ0FBQVksZ0JBQWdCLEdBQUU7WUFFcEMsT0FDQ2IsTUFBQSxDQUFBTSxPQUFBLENBQUFjLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQXNCLEdBQ3hDckIsTUFBQSxDQUFBTSxPQUFBLENBQUFjLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQW9CLEdBQ3RDckIsTUFBQSxDQUFBTSxPQUFBLENBQUFjLGFBQUEsYUFBSzlCLElBQUksQ0FBQ2MsSUFBSSxDQUFNLEVBQ3BCSixNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FBRS9CLElBQUksQ0FBQ2tCLFdBQVcsQ0FBTyxDQUN2RCxFQUNWUixNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBbUIsR0FDckNyQixNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdEIsV0FBQSxDQUFBc0QsSUFBSTtjQUFDQyxJQUFJLEVBQUUsaUJBQWlCL0QsSUFBSSxDQUFDMkIsRUFBRSxFQUFFO2NBQUVJLFNBQVMsRUFBQztZQUFpQixHQUNqRVQsS0FBSyxDQUFDK0MsWUFBWSxDQUNiLEVBQ1AzRCxNQUFBLENBQUFNLE9BQUEsQ0FBQWMsYUFBQSxDQUFDdEIsV0FBQSxDQUFBc0QsSUFBSTtjQUFDQyxJQUFJLEVBQUUsbUNBQW1DL0QsSUFBSSxDQUFDMkIsRUFBRSxFQUFFO2NBQUVJLFNBQVMsRUFBQztZQUFtQixHQUNyRlQsS0FBSyxDQUFDZ0QsV0FBVyxDQUNaLENBQ0UsQ0FDRDtVQUVaLENBQUM7VUFBQ2pGLE9BQUEsQ0FBQWEsT0FBQSxHQUFBQSxPQUFBO1VBQUEsSUFBQXFFLFFBQUEsR0FBQWxGLE9BQUEsQ0FBQTJCLE9BQUEsR0FFYWQsT0FBTyIsImlnbm9yZUxpc3QiOltdfQ==