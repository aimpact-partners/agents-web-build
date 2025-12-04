System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.14/routing", "react@18.3.1", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/components", "@beyond-js/react-18-widgets@1.1.6/hooks", "@aimpact/platform@0.1.6/components/ui"], function (_export, _context) {
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
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_3 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactPlatform016Models) {
      dependency_4 = _aimpactPlatform016Models;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0114Routing) {
      dependency_6 = _beyondJsKernel0114Routing;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi108List) {
      dependency_8 = _pragmateUi108List;
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_10 = _beyondJsReact18Widgets116Hooks;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_11 = _aimpactPlatform016ComponentsUi;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWxzIiwiX21vZGVsIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwiY2F0ZWdvcnkiLCJwYXJhbXMiLCJpdGVtcyIsImNvbnN0cnVjdG9yIiwiQ2F0ZWdvcnkiLCJpZCIsInN0YXR1cyIsImRhdGEiLCJnZXRMaXN0IiwiRXJyb3IiLCJlbnRyaWVzIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYWRkQ2F0ZWdvcnkiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiX3JlYWN0IiwiX2NhdGVnb3J5IiwiX2xpc3QiLCJDYXRlZ29yaWVzTGlzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiTGlzdCIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJfY29tcG9uZW50cyIsIkxpbmsiLCJocmVmIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiX2RlZmF1bHQiLCJfaG9va3MiLCJfY2F0ZWdvcmllc0xpc3QiLCJfdWkiLCJfYmV5b25kX2NvbnRleHQiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdENvbnRyb2wiLCJsZW5ndGgiLCJOb25JdGVtIiwiUGFnZUhlYWRlciIsImhlYWRlciIsImFkZEVsZW1lbnQiLCJub25FbGVtZW50SW50cm8iLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJub25FbGVtZW50QnV0dG9uIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NhdGVnb3JpZXMtbGlzdC50c3giLCIvL3RzL3ZpZXdzL2NhdGVnb3J5LnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2VzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQTs7O1lBR0FDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUE7OztZQUdBQyxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCRCxJQUFBYyxPQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVcsTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxRQUFTO1lBQ1RDLE1BQU07WUFFTixJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFFLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBO1lBQ0FDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQUgsUUFBUyxHQUFHLElBQUlKLE9BQUEsQ0FBQVEsUUFBUSxFQUFFO2NBRS9CO2NBQ0EsSUFBSSxDQUFDZCxJQUFJLEVBQUU7WUFDWjtZQUVBLE1BQU1BLElBQUlBLENBQUNlLEVBQVU7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBTCxRQUFTLEVBQUVLLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUNKLE1BQU0sR0FBR0ksRUFBRTtnQkFDaEIsTUFBTTtrQkFBRUMsTUFBTTtrQkFBRUM7Z0JBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDUCxRQUFRLENBQUNRLE9BQU8sQ0FBQ0gsRUFBRSxDQUFDO2dCQUV4RCxJQUFJLENBQUNDLE1BQU0sRUFBRSxNQUFNLElBQUlHLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLENBQUFQLEtBQU0sR0FBR0ssSUFBSSxDQUFDRyxPQUFPO2dCQUMxQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUVBRyxXQUFXQSxDQUFBO2NBQ1ZqQixRQUFBLENBQUFrQixPQUFPLENBQUNDLFNBQVMsQ0FBQyxZQUFZLElBQUksQ0FBQ2hCLE1BQU0sNEJBQTRCLENBQUM7WUFDdkU7O1VBQ0FOLE9BQUEsQ0FBQVQsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVDRCxJQUFBZ0MsTUFBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUF3QyxTQUFBLEdBQUF4QyxPQUFBO1VBQ0EsSUFBQXlDLEtBQUEsR0FBQXpDLE9BQUE7VUFHTSxTQUFVMEMsY0FBY0EsQ0FBQztZQUFFckM7VUFBSyxDQUEyQjtZQUNoRSxPQUFPa0MsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsS0FBQSxDQUFBSSxJQUFJO2NBQUNDLFNBQVMsRUFBQyxzQkFBc0I7Y0FBQ3ZCLEtBQUssRUFBRWxCLEtBQUssQ0FBQ2tCLEtBQUs7Y0FBRXdCLE9BQU8sRUFBRVAsU0FBQSxDQUFBRztZQUFRLEVBQUk7VUFDeEY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQUosTUFBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUFnRCxXQUFBLEdBQUFoRCxPQUFBO1VBT08sTUFBTXlCLFFBQVEsR0FBNEJBLENBQUM7WUFBRUc7VUFBSSxDQUFFLEtBQUk7WUFDN0QsT0FDQ1csTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksV0FBQSxDQUFBQyxJQUFJO2NBQUNILFNBQVMsRUFBQyxVQUFVO2NBQUNJLElBQUksRUFBRSwwQkFBMEJ0QixJQUFJLENBQUNGLEVBQUU7WUFBRSxHQUNuRWEsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWlDLEdBQy9DUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLaEIsSUFBSSxDQUFDdUIsSUFBSSxDQUFNLEVBQ3BCWixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxZQUFJaEIsSUFBSSxDQUFDd0IsV0FBVyxDQUFLLENBQ3BCLENBQ0E7VUFFVCxDQUFDO1VBQUNwQyxPQUFBLENBQUFTLFFBQUEsR0FBQUEsUUFBQTtVQUFBLElBQUE0QixRQUFBLEdBQUFyQyxPQUFBLENBQUEyQixPQUFBLEdBRWFsQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CdkIsSUFBQXVCLFdBQUEsR0FBQWhELE9BQUE7VUFDQSxJQUFBdUMsTUFBQSxHQUFBdkMsT0FBQTtVQUNBLElBQUFzRCxNQUFBLEdBQUF0RCxPQUFBO1VBRUEsSUFBQXVELGVBQUEsR0FBQXZELE9BQUE7VUFDQSxJQUFBd0QsR0FBQSxHQUFBeEQsT0FBQTtVQUVBLElBQUF5RCxlQUFBLEdBQUF6RCxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBMkI7WUFDL0MsTUFBTSxDQUFDcUQsVUFBVSxFQUFFQyxLQUFLLENBQUMsR0FBRyxJQUFBTCxNQUFBLENBQUFNLFFBQVEsRUFBQ0gsZUFBQSxDQUFBSSxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUM5QixLQUFLLEVBQUUrQixRQUFRLENBQUMsR0FBRyxJQUFBeEIsTUFBQSxDQUFBeUIsUUFBUSxFQUFVM0QsS0FBSyxDQUFDMkIsS0FBSyxDQUFDO1lBRXhELElBQUFzQixNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDNUQsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjBELFFBQVEsQ0FBQzFELEtBQUssQ0FBQzJCLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUM7WUFFRixJQUFJLENBQUMwQixVQUFVLElBQUksQ0FBQzFCLEtBQUssRUFBRSxPQUFPTyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxXQUFBLENBQUFrQixPQUFPO2NBQUNDLE1BQU07WUFBQSxFQUFHO1lBRXBELE1BQU1DLFdBQVcsR0FBRy9ELEtBQUssQ0FBQ2tCLEtBQUssQ0FBQzhDLE1BQU0sR0FBRyxDQUFDLEdBQUdDLE9BQU8sR0FBR2YsZUFBQSxDQUFBYixjQUFjO1lBRXJFLE9BQ0NILE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFTLEdBQ3ZCUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDWSxHQUFBLENBQUFlLFVBQVUsUUFDVmhDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFjLEdBQzVCUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLZSxLQUFLLENBQUNhLE1BQU0sQ0FBTSxDQUVsQixDQUNNLEVBQ2JqQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0IsV0FBVztjQUFDL0QsS0FBSyxFQUFFQSxLQUFLO2NBQUVzRCxLQUFLLEVBQUVBO1lBQUssRUFBSSxDQUN0QztVQUVSO1VBRUEsTUFBTVcsT0FBTyxHQUFHQSxDQUFDO1lBQUVqRSxLQUFLO1lBQUVzRDtVQUFLLENBQUUsS0FBSTtZQUNwQyxTQUFTYyxVQUFVQSxDQUFBO2NBQ2xCcEUsS0FBSyxDQUFDK0IsV0FBVyxFQUFFO1lBQ3BCO1lBRUEsT0FDQ0csTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQXNCLEdBQ3BDUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBZ0IsR0FDOUJQLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLFlBQUllLEtBQUssQ0FBQ2UsZUFBZSxDQUFLLEVBQzlCbkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksV0FBQSxDQUFBMkIsTUFBTTtjQUFDQyxJQUFJLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTUwsVUFBVTtZQUFFLEdBQzlEZCxLQUFLLENBQUNvQixnQkFBZ0IsQ0FDZixDQUNKLENBQ0Q7VUFFUixDQUFDOzs7Ozs7Ozs7OztVQ2xERDs7VUFFQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFqRSxPQUFBO1lBQ0FrRSxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=