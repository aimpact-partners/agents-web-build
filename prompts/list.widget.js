System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/routing", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
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
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_7 = _aimpactPlatform016StoresBase;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_9 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_10 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi108Components) {
      dependency_11 = _pragmateUi108Components;
    }, function (_pragmateUi108Chips) {
      dependency_12 = _pragmateUi108Chips;
    }, function (_pragmateUi108List) {
      dependency_13 = _pragmateUi108List;
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
          "vspecifier": "@aimpact/platform@0.1.6/prompts/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/platform/stores/base', dependency_7], ['react', dependency_8], ['@aimpact/platform/components/ui', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/chips', dependency_12], ['pragmate-ui/list', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "platform-prompt-list",
        "vspecifier": "@aimpact/platform@0.1.6/prompts/list.widget",
        "is": "page",
        "route": "/prompts/list/${id}",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/prompts/list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3781797263,
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
              this.#store.load(this.uri.vars.get('id'));
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2995103595,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _base = require("@aimpact/platform/stores/base");
          //@ts-ignore;

          class StoreManager extends _base.BaseStoreManager {
            #prompt;
            params;
            get prompt() {
              return _models.AppWrapper.prompt;
            }
            #collection;
            get collection() {
              return this.#collection;
            }
            #filter = 'items';
            #items;
            get items() {
              return this.#collection?.[this.#filter] ?? [];
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
            filter(type) {
              if (!this.#collection[type]) return console.error("This type doesn't exist:", type);
              this.#filter = type;
              this.trigger('change');
            }
            async load(projectId) {
              try {
                this.fetching = true;
                this.params = projectId;
                this.#collection = await _models.AppWrapper.getPrompts({
                  projectId
                });
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            addPrompt() {
              _routing.routing.pushState(`/projects/${this.params}/prompts/view/new`);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1895679512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePromptContext = exports.PromptContext = void 0;
          var _react = require("react");
          const PromptContext = exports.PromptContext = _react.default.createContext({});
          const usePromptContext = () => _react.default.useContext(PromptContext);
          exports.usePromptContext = usePromptContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1158589610,
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
          var _list = require("./prompts/list");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const ListControl = store.items.length < 1 ? NonItem : _list.PromptsList;
            const onFilter = event => {
              const {
                type
              } = event.currentTarget.dataset;
              store.filter(type);
            };
            return _react.default.createElement(_context.PromptContext.Provider, {
              value: {
                texts,
                store,
                fetching
              }
            }, _react.default.createElement("div", {
              className: "wrapper"
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[texts.projectsHeader, '/projects'], [texts.header, '']]
            }, _react.default.createElement("div", {
              className: "title__panel"
            }, _react.default.createElement("div", {
              className: "actions-buttons flex-container flex-end"
            }, _react.default.createElement(_components.ButtonGroup, {
              orientation: "column",
              size: "tall",
              selected: 0,
              onChange: onFilter
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "items"
            }, "All"), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "prompts"
            }, "Prompts"), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "dependencies"
            }, "Dependencies"), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "functions"
            }, "Functions"))), _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              onClick: () => store.addPrompt()
            }))), _react.default.createElement(ListControl, {
              store: store,
              texts: texts
            })));
          }
          const NonItem = ({
            store,
            texts
          }) => {
            function addElement() {
              store.addPrompt();
            }
            return _react.default.createElement("div", {
              className: "prompts-container"
            }, _react.default.createElement("div", {
              className: "list__item_non"
            }, _react.default.createElement("p", null, texts.nonElementIntro), _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              onClick: () => addElement()
            }, texts.nonElementButton)));
          };
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/interfaces
      **********************************/

      ims.set('./views/interfaces', {
        hash: 3016584157,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/item
      ************************************/

      ims.set('./views/prompts/item', {
        hash: 3709681964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Prompt = void 0;
          var _chips = require("pragmate-ui/chips");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          const Prompt = ({
            data
          }) => {
            const {
              store
            } = (0, _context.usePromptContext)();
            return _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: `/projects/${store.params}/prompts/view/${data?.identifier}`
            }, _react.default.createElement("div", {
              className: "list__item list__item--prompt"
            }, _react.default.createElement("section", null, _react.default.createElement("h2", null, data.name), _react.default.createElement("div", {
              className: "item-prompt__container direct-row"
            }, data.identifier), data.description && _react.default.createElement("div", {
              className: "item-prompt__container"
            }, data.description)), _react.default.createElement(_chips.Chip, {
              type: "primary"
            }, `#${data.is}`)));
          };
          exports.Prompt = Prompt;
          var _default = exports.default = Prompt;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/list
      ************************************/

      ims.set('./views/prompts/list', {
        hash: 3965648613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptsList = PromptsList;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _item = require("./item");
          function PromptsList({
            store
          }) {
            const [items, setItems] = _react.default.useState(store.items);
            (0, _hooks.useBinder)([store], () => setItems(store.items));
            return _react.default.createElement(_list.List, {
              className: "prompts-container",
              items: items,
              control: _item.default
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfYmV5b25kX2NvbnRleHQiLCJfcm91dGluZyIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsInByb21wdCIsInBhcmFtcyIsIkFwcFdyYXBwZXIiLCJjb2xsZWN0aW9uIiwiZmlsdGVyIiwiaXRlbXMiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInR5cGUiLCJjb25zb2xlIiwiZXJyb3IiLCJ0cmlnZ2VyIiwicHJvamVjdElkIiwiZmV0Y2hpbmciLCJnZXRQcm9tcHRzIiwicmVhZHkiLCJlIiwiYWRkUHJvbXB0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsIl9yZWFjdCIsIlByb21wdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVByb21wdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9saXN0IiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxpc3RDb250cm9sIiwibGVuZ3RoIiwiTm9uSXRlbSIsIlByb21wdHNMaXN0Iiwib25GaWx0ZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicHJvamVjdHNIZWFkZXIiLCJoZWFkZXIiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwic2l6ZSIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhZGRFbGVtZW50Iiwibm9uRWxlbWVudEludHJvIiwibm9uRWxlbWVudEJ1dHRvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NoaXBzIiwiUHJvbXB0IiwiZGF0YSIsIkxpbmsiLCJocmVmIiwiaWRlbnRpZmllciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkNoaXAiLCJpcyIsIl9kZWZhdWx0IiwiX2l0ZW0iLCJzZXRJdGVtcyIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2VzLnRzLyIsIi8vdHMvdmlld3MvcHJvbXB0cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FB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