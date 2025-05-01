System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/routing", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/chips", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
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
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Chips) {
      dependency_12 = _pragmateUi100Beta7Chips;
    }, function (_pragmateUi100Beta7List) {
      dependency_13 = _pragmateUi100Beta7List;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfYmV5b25kX2NvbnRleHQiLCJfcm91dGluZyIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsInByb21wdCIsInBhcmFtcyIsIkFwcFdyYXBwZXIiLCJjb2xsZWN0aW9uIiwiZmlsdGVyIiwiaXRlbXMiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInR5cGUiLCJjb25zb2xlIiwiZXJyb3IiLCJ0cmlnZ2VyIiwicHJvamVjdElkIiwiZmV0Y2hpbmciLCJnZXRQcm9tcHRzIiwicmVhZHkiLCJlIiwiYWRkUHJvbXB0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsIl9yZWFjdCIsIlByb21wdENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZVByb21wdENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9saXN0IiwidGV4dHNSZWFkeSIsInRleHRzIiwidXNlVGV4dHMiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0RmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiU3Bpbm5lciIsImFjdGl2ZSIsIkxpc3RDb250cm9sIiwibGVuZ3RoIiwiTm9uSXRlbSIsIlByb21wdHNMaXN0Iiwib25GaWx0ZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicHJvamVjdHNIZWFkZXIiLCJoZWFkZXIiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwic2l6ZSIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhZGRFbGVtZW50Iiwibm9uRWxlbWVudEludHJvIiwibm9uRWxlbWVudEJ1dHRvbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NoaXBzIiwiUHJvbXB0IiwiZGF0YSIsIkxpbmsiLCJocmVmIiwiaWRlbnRpZmllciIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkNoaXAiLCJpcyIsIl9kZWZhdWx0IiwiX2l0ZW0iLCJzZXRJdGVtcyIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9wcm9tcHRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb21wdHMvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEs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