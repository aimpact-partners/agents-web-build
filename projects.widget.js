System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.1.1/model", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/form", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/platform@0.1.6/shared/hooks", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
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
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_pragmateUi108Form) {
      dependency_7 = _pragmateUi108Form;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_9 = _pragmateUi108Icons;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_10 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_12 = _aimpactPlatform016SharedHooks;
    }, function (_beyondJsKernel0112Routing) {
      dependency_13 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi108List) {
      dependency_14 = _pragmateUi108List;
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
          "vspecifier": "@aimpact/platform@0.1.6/projects",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/form', dependency_7], ['react', dependency_8], ['pragmate-ui/icons', dependency_9], ['@aimpact/platform/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/platform/shared/hooks', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/list', dependency_14]]);
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
        hash: 3038383450,
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
          var _hooks2 = require("@aimpact/platform/shared/hooks");
          var _context = require("./context");
          var _form = require("./form");
          var _projectsList = require("./projects-list");
          var _useContext = require("./use-context");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const {
              showForm,
              setShowForm
            } = (0, _useContext.useProjectContext)(store);
            const {
              ready
            } = store;
            (0, _hooks2.useStore)(store);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJjYXRlZ29yeSIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJQcm9qZWN0cyIsIkNhdGVnb3J5IiwibG9hZCIsImdsb2JhbFRoaXMiLCJyZWFkeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVQcm9qZWN0IiwiZGF0YSIsInByb2plY3QiLCJQcm9qZWN0Iiwic2V0IiwicHVibGlzaCIsImNyZWF0ZUNhdGVnb3J5IiwiX2NvbXBvbmVudHMiLCJfZm9ybSIsIl9yZWFjdCIsIl9jb250ZXh0IiwiQ2F0ZWdvcnlGb3JtIiwic2V0U2hvd0NhdGVnb3J5Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ0ZXh0cyIsInVzZVByb2plY3RzQ29udGV4dCIsImNhbmNlbENyZWF0aW9uIiwib25TdWJtaXQiLCJpZCIsImF0dHJzIiwiZGlzYWJsZWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiRm9ybSIsIklucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJsYWJlbCIsImlucHV0TmFtZSIsImlucHV0RGVzY3JpcHRpb24iLCJCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uQ2xvc2UiLCJ2YXJpYW50IiwiYnV0dG9uU2F2ZSIsIlByb2plY3RzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ljb25zIiwiRm9ybVByb2plY3QiLCJzZXRTaG93Rm9ybSIsIm5hdmlnYXRlQmFjayIsImhhbmRsZUNoYW5nZSIsInBsYWNlaG9sZGVyIiwiaW5wdXRQcm9qZWN0TmFtZSIsIlRleHRhcmVhIiwic3BhbkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Qcm9qZWN0IiwiSWNvbkJ1dHRvbiIsImljb24iLCJidXR0b25TdWJtaXQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdCIsIl9ob29rczIiLCJfcHJvamVjdHNMaXN0IiwiX3VzZUNvbnRleHQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzaG93Rm9ybSIsInVzZVByb2plY3RDb250ZXh0IiwidXNlU3RvcmUiLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29udHJvbCIsIlByb2plY3RzTGlzdCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiUGFnZUhlYWRlciIsImhlYWRlciIsIl9yb3V0aW5nIiwib25DbGlja0NoZWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwib25DbGlja0NhdGVnb3JpZXMiLCJMaW5rIiwidGl0bGVQcm9tcHRzIiwiX2RlZmF1bHQiLCJfbGlzdCIsIl9wcm9qZWN0IiwiRnJhZ21lbnQiLCJMaXN0IiwiY29udHJvbCIsInVzZUVmZmVjdCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NhdGVnb3J5LWZvcm0udHN4IiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9mb3JtLnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9wcm9qZWN0LnRzeCIsIi8vdHMvdmlld3MvcHJvamVjdHMtbGlzdC50c3giLCIvL3RzL3ZpZXdzL3VzZS1jb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6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