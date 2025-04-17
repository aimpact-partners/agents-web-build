System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/routing", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/platform@0.1.6/components/ui"], function (_export, _context) {
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
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta7List) {
      dependency_8 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Components) {
      dependency_9 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_11 = _aimpactPlatform016ComponentsUi;
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
          "vspecifier": "@aimpact/platform@0.1.6/categories/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['react', dependency_7], ['pragmate-ui/list', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/platform/components/ui', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "platform-categories-list",
        "vspecifier": "@aimpact/platform@0.1.6/categories/list.widget",
        "is": "page",
        "route": "/project/${projectId}/categories/list/${id}",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/categories/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2712353428,
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
              this.#store.load(this.uri.vars.get('id'));
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
        hash: 2683426880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _model = require("@beyond-js/reactive/model");
          var _routing = require("@beyond-js/kernel/routing");
          class StoreManager extends _model.ReactiveModel {
            #category;
            params;
            get category() {
              return this.#category;
            }
            #items;
            get items() {
              return this.#items;
            }
            //TODO: eliminar lavacode
            constructor() {
              super();
              this.#category = new _models.Category();
              // TODO: mover a coleccion
              this.load();
            }
            async load(id) {
              try {
                if (this.#category?.id === id) return;
                this.params = id;
                const {
                  status,
                  data
                } = await this.category.getList(id);
                if (!status) throw new Error('Error loading Categories');
                this.#items = data.entries;
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
            }
            addCategory() {
              _routing.routing.pushState(`/project/${this.params}/categories/management/new`);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/categories-list
      ***************************************/

      ims.set('./views/categories-list', {
        hash: 3211327516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CategoriesList = CategoriesList;
          var _react = require("react");
          var _category = require("./category");
          var _list = require("pragmate-ui/list");
          function CategoriesList({
            store
          }) {
            return _react.default.createElement(_list.List, {
              className: 'categories-container',
              items: store.items,
              control: _category.default
            });
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/category
      ********************************/

      ims.set('./views/category', {
        hash: 397723645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Category = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          const Category = ({
            data
          }) => {
            return _react.default.createElement(_components.Link, {
              className: 'unstyled',
              href: `/categories/management/${data.id}`
            }, _react.default.createElement("div", {
              className: 'list__item list__item--category'
            }, _react.default.createElement("h2", null, data.name), _react.default.createElement("p", null, data.description)));
          };
          exports.Category = Category;
          var _default = exports.default = Category;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2920692679,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _categoriesList = require("./categories-list");
          var _ui = require("@aimpact/platform/components/ui");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!textsReady || !ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const ListControl = store.items.length < 1 ? NonItem : _categoriesList.CategoriesList;
            return _react.default.createElement("div", {
              className: 'wrapper'
            }, _react.default.createElement(_ui.PageHeader, null, _react.default.createElement("div", {
              className: "title__panel"
            }, _react.default.createElement("h2", null, texts.header))), _react.default.createElement(ListControl, {
              store: store,
              texts: texts
            }));
          }
          const NonItem = ({
            store,
            texts
          }) => {
            function addElement() {
              store.addCategory();
            }
            return _react.default.createElement("div", {
              className: 'categories-container'
            }, _react.default.createElement("div", {
              className: 'list__item_non'
            }, _react.default.createElement("p", null, texts.nonElementIntro), _react.default.createElement(_components.Button, {
              icon: 'add',
              variant: 'primary',
              onClick: () => addElement()
            }, texts.nonElementButton)));
          };
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 347875789,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX21vZGVsIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwiY2F0ZWdvcnkiLCJwYXJhbXMiLCJpdGVtcyIsImNvbnN0cnVjdG9yIiwiQ2F0ZWdvcnkiLCJpZCIsInN0YXR1cyIsImRhdGEiLCJnZXRMaXN0IiwiRXJyb3IiLCJlbnRyaWVzIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWRkQ2F0ZWdvcnkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiX3JlYWN0IiwiX2NhdGVnb3J5IiwiX2xpc3QiLCJDYXRlZ29yaWVzTGlzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTGlzdCIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJfY29tcG9uZW50cyIsIkxpbmsiLCJocmVmIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiX2RlZmF1bHQiLCJfaG9va3MiLCJfY2F0ZWdvcmllc0xpc3QiLCJfdWkiLCJfYmV5b25kX2NvbnRleHQiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdENvbnRyb2wiLCJsZW5ndGgiLCJOb25JdGVtIiwiUGFnZUhlYWRlciIsImhlYWRlciIsImFkZEVsZW1lbnQiLCJub25FbGVtZW50SW50cm8iLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJub25FbGVtZW50QnV0dG9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NhdGVnb3JpZXMtbGlzdC50c3giLCIvdHMvdmlld3MvY2F0ZWdvcnkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi9pbnRlcmZhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBOzs7WUFHQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQTs7O1lBR0FDLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJELElBQUFjLE9BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsTUFBQSxHQUFBbEIsT0FBQTtVQUNBLElBQUFtQixRQUFBLEdBQUFuQixPQUFBO1VBRU0sTUFB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