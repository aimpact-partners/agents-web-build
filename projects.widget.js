System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.0.5/model", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/form", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_aimpactPlatform016Models) {
      dependency_4 = _aimpactPlatform016Models;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_pragmateUi100Beta7Components) {
      dependency_6 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Form) {
      dependency_7 = _pragmateUi100Beta7Form;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_9 = _pragmateUi100Beta7Icons;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_10 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsKernel0112Routing) {
      dependency_12 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/platform@0.1.6/projects",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/form', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/platform/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/list', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "aimpact-platform-projects",
        "vspecifier": "@aimpact/platform@0.1.6/projects.widget",
        "is": "page",
        "route": "/projects",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/projects.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3930574407,
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
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3072704303,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #category;
            get category() {
              return this.#category;
            }
            #items;
            get items() {
              return this.#model.items;
            }
            constructor() {
              super();
              this.#model = new _models.Projects();
              this.#category = new _models.Category();
              this.load();
              globalThis.store = this;
            }
            async load() {
              try {
                await this.model.load();
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
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
            async createCategory(data) {
              try {
                const category = new _models.Category();
                return await category.publish(data);
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
        hash: 1448129676,
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
            } = (0, _context.useProjectsContext)();
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
              className: 'form__categories'
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              type: 'text',
              onChange: e => setName(e.target.value),
              label: texts.inputName
            }), _react.default.createElement(_form.Input, {
              type: 'text',
              onChange: e => setDescription(e.target.value),
              label: texts.inputDescription
            }), _react.default.createElement("div", {
              className: 'form__categories_buttons'
            }, _react.default.createElement(_components.Button, {
              className: 'md',
              onClick: cancelCreation
            }, texts.buttonClose), _react.default.createElement(_components.Button, {
              variant: 'primary',
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
        hash: 3481670251,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProjectsContext = exports.ProjectsContext = void 0;
          var _react = require("react");
          const ProjectsContext = exports.ProjectsContext = _react.default.createContext({});
          const useProjectsContext = () => _react.default.useContext(ProjectsContext);
          exports.useProjectsContext = useProjectsContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./views/form
      ****************************/

      ims.set('./views/form', {
        hash: 3450918630,
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
          var _context = require("./context");
          function FormProject({
            store,
            setShowForm
          }) {
            const [name, setName] = _react.default.useState('');
            const [description, setDescription] = _react.default.useState('');
            const [fetching, setFetching] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useProjectsContext)();
            function navigateBack() {
              setShowForm(false);
            }
            const handleChange = e => {
              setDescription(e.target.value);
            };
            async function onSubmit() {
              setFetching(true);
              await store.createProject({
                name: name,
                description: description
              });
              setFetching(false);
            }
            const attrs = {
              disabled: fetching
            };
            return _react.default.createElement("article", {
              className: 'article__container'
            }, _react.default.createElement(_form.Form, {
              className: 'article-form__container',
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              type: 'text',
              onChange: e => setName(e.target.value),
              placeholder: texts.inputProjectName,
              label: texts.inputProjectName
            }), _react.default.createElement(_form.Textarea, {
              value: description,
              label: texts.spanDescription,
              placeholder: texts.descriptionProject,
              onChange: handleChange
            }), _react.default.createElement("div", {
              className: 'flex-container flex-space-between'
            }, _react.default.createElement(_icons.IconButton, {
              className: 'md',
              icon: 'backArrow',
              onClick: navigateBack
            }), _react.default.createElement(_components.Button, {
              variant: 'primary',
              onClick: onSubmit,
              ...attrs
            }, texts.buttonSubmit))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 775251690,
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
          var React = require("react");
          var _context = require("./context");
          var _form = require("./form");
          var _projectsList = require("./projects-list");
          var _useContext = require("./use-context");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            const {
              showForm,
              setShowForm
            } = (0, _useContext.useProjectContext)(store);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!textsReady || !ready) return React.createElement(_components.Spinner, {
              active: true
            });
            const Control = showForm ? _form.FormProject : _projectsList.ProjectsList;
            const contextValue = {
              store,
              texts,
              showForm,
              setShowForm
            };
            return React.createElement(_context.ProjectsContext.Provider, {
              value: contextValue
            }, React.createElement("div", {
              className: "wrapper"
            }, React.createElement(_ui.PageHeader, {
              className: "flex-container flex"
            }, React.createElement("h2", null, texts.header)), React.createElement(Control, {
              store: store,
              setShowForm: setShowForm,
              texts: texts
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/project
      *******************************/

      ims.set('./views/project', {
        hash: 3360073262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Project = void 0;
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          const Project = ({
            data
          }) => {
            const {
              texts
            } = (0, _context.useProjectsContext)();
            function onClickCheck(event) {
              event.stopPropagation();
              _routing.routing.pushState(`/prompts/list/${data.id}`);
            }
            function onClickCategories(event) {
              event.stopPropagation();
              _routing.routing.pushState(`/categories/list/${data.id}`);
            }
            return _react.default.createElement("article", null, _react.default.createElement("div", {
              className: "list__item"
            }, _react.default.createElement("div", {
              className: "list__item_specifier"
            }, _react.default.createElement(_components.Link, {
              className: "unstyled"
            }, _react.default.createElement("div", {
              className: "list__item_title"
            }, _react.default.createElement("h2", null, data.name), _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: "list",
              onClick: onClickCheck
            }, texts.titlePrompts)), _react.default.createElement("div", {
              className: "list__item_description"
            }, data.description)))));
          };
          exports.Project = Project;
          var _default = exports.default = Project;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/projects-list
      *************************************/

      ims.set('./views/projects-list', {
        hash: 1566406523,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProjectsList = ProjectsList;
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _project = require("./project");
          function ProjectsList({
            store,
            setShowForm,
            texts
          }) {
            function onClick() {
              setShowForm(true);
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("article", null, _react.default.createElement(_list.List, {
              items: store.items,
              control: _project.default,
              className: "platform-list"
            })));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/use-context
      ***********************************/

      ims.set('./views/use-context', {
        hash: 1477325154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useProjectContext = useProjectContext;
          var _react = require("react");
          function useProjectContext(store) {
            const [showForm, setShowForm] = (0, _react.useState)(false);
            (0, _react.useEffect)(() => {
              setShowForm(false);
            }, [store.items]);
            return {
              showForm,
              setShowForm
            };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJjYXRlZ29yeSIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJQcm9qZWN0cyIsIkNhdGVnb3J5IiwibG9hZCIsImdsb2JhbFRoaXMiLCJyZWFkeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVQcm9qZWN0IiwiZGF0YSIsInByb2plY3QiLCJQcm9qZWN0Iiwic2V0IiwicHVibGlzaCIsImNyZWF0ZUNhdGVnb3J5IiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiQ2F0ZWdvcnlGb3JtIiwic2V0U2hvd0NhdGVnb3J5Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0cyIsInVzZVByb2plY3RzQ29udGV4dCIsImNhbmNlbENyZWF0aW9uIiwib25TdWJtaXQiLCJpZCIsImF0dHJzIiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRm9ybSIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsYWJlbCIsImlucHV0TmFtZSIsImlucHV0RGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uQ2xvc2UiLCJ2YXJpYW50IiwiYnV0dG9uU2F2ZSIsIlByb2plY3RzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ljb25zIiwiRm9ybVByb2plY3QiLCJzZXRTaG93Rm9ybSIsIm5hdmlnYXRlQmFjayIsImhhbmRsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaW5wdXRQcm9qZWN0TmFtZSIsIlRleHRhcmVhIiwic3BhbkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Qcm9qZWN0IiwiSWNvbkJ1dHRvbiIsImljb24iLCJidXR0b25TdWJtaXQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9wcm9qZWN0c0xpc3QiLCJfdXNlQ29udGV4dCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2hvd0Zvcm0iLCJ1c2VQcm9qZWN0Q29udGV4dCIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJDb250cm9sIiwiUHJvamVjdHNMaXN0IiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJQYWdlSGVhZGVyIiwiaGVhZGVyIiwiX3JvdXRpbmciLCJvbkNsaWNrQ2hlY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJvbkNsaWNrQ2F0ZWdvcmllcyIsIkxpbmsiLCJ0aXRsZVByb21wdHMiLCJfZGVmYXVsdCIsIl9saXN0IiwiX3Byb2plY3QiLCJGcmFnbWVudCIsIkxpc3QiLCJjb250cm9sIiwidXNlRWZmZWN0Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2F0ZWdvcnktZm9ybS50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9mb3JtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcHJvamVjdC50c3giLCIvdHMvdmlld3MvcHJvamVjdHMtbGlzdC50c3giLCIvdHMvdmlld3MvdXNlLWNvbnRleHQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7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