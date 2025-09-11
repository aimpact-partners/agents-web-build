System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.14/routing", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactPlatform016StoresBase) {
      dependency_7 = _aimpactPlatform016StoresBase;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_10 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_11 = _beyondJsReact18Widgets116Hooks;
    }, function (_pragmateUi108Chips) {
      dependency_12 = _pragmateUi108Chips;
    }, function (_pragmateUi108List) {
      dependency_13 = _pragmateUi108List;
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
          "vspecifier": "@aimpact/platform@0.1.6/prompts/list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@aimpact/platform/stores/base', dependency_7], ['react', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/platform/components/ui', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/chips', dependency_12], ['pragmate-ui/list', dependency_13]]);
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
        hash: 995963009,
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
            #searchQuery = '';
            #searchTimeout = null;
            #filteredItems = [];
            get items() {
              return this.#filteredItems;
            }
            get searchQuery() {
              return this.#searchQuery;
            }
            constructor() {
              super(_beyond_context.module.specifier);
            }
            filter(type) {
              if (!this.#collection[type]) return console.error("This type doesn't exist:", type);
              this.#filter = type;
              this.applyFilters();
            }
            search(query) {
              this.#searchQuery = query;
              // Clear existing timeout
              if (this.#searchTimeout) {
                clearTimeout(this.#searchTimeout);
              }
              // Set new timeout for debounce
              this.#searchTimeout = setTimeout(() => {
                this.applyFilters();
              }, 300);
            }
            applyFilters() {
              if (!this.#collection) return;
              let items = this.#collection[this.#filter] ?? [];
              // Apply search filter
              if (this.#searchQuery.trim()) {
                const query = this.#searchQuery.toLowerCase().trim();
                items = items.filter(item => item.name?.toLowerCase().includes(query) || item.identifier?.toLowerCase().includes(query) || item.description?.toLowerCase().includes(query));
              }
              this.#filteredItems = items;
              this.trigger('change');
            }
            async load(projectId) {
              try {
                this.fetching = true;
                this.params = projectId;
                this.#collection = await _models.AppWrapper.getPrompts({
                  projectId
                });
                this.applyFilters();
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            addPrompt() {
              _routing.routing.pushState(`prompts/management?projectId=${this.params}`);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2437422293,
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
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 836779006,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          function Empty() {
            const {
              store,
              texts
            } = _react.default.useContext(_context.PromptContext);
            const addElement = () => store.addPrompt();
            return _react.default.createElement("div", {
              className: "prompts-container"
            }, _react.default.createElement("div", {
              className: "list__item_non"
            }, _react.default.createElement("p", null, texts.empty.intro), _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              onClick: addElement
            }, texts.empty.button)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4258795419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("./context");
          var _list = require("./prompts/list");
          var _empty = require("./empty");
          var _input = require("./search/input");
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
            const onFilter = event => {
              const {
                type
              } = event.currentTarget.dataset;
              store.filter(type);
            };
            (0, _hooks.useStore)(store);
            const ListControl = store.items.length < 1 ? _empty.Empty : _list.PromptsList;
            return _react.default.createElement(_context.PromptContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.Page.layout, {
              ready: ready
            }, _react.default.createElement(_ui.Page.header, null, _react.default.createElement("h2", null, texts.header), _react.default.createElement("div", {
              className: "actions-buttons flex-container flex-end"
            }, _react.default.createElement(_input.SearchInput, null), _react.default.createElement(_components.ButtonGroup, {
              orientation: "column",
              size: "tall",
              selected: 0,
              onChange: onFilter
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "items"
            }, texts.filters.all), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "prompts"
            }, texts.filters.prompts), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "dependencies"
            }, texts.filters.dependencies), _react.default.createElement(_components.Button, {
              variant: "primary",
              "data-type": "functions"
            }, texts.filters.functions)), _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              onClick: () => store.addPrompt()
            }))), _react.default.createElement(_ui.Page.body, null, _react.default.createElement(ListControl, null))));
          }
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
        hash: 3806264179,
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
              href: `/projects/${store.params}/prompts/management/${data?.identifier}`
            }, _react.default.createElement("div", {
              className: "list__item list__item--prompt"
            }, _react.default.createElement("div", {
              className: "item-prompt__tag"
            }, _react.default.createElement(_chips.Chip, {
              type: "secondary"
            }, `#${data.is}`)), _react.default.createElement("div", {
              className: "item-prompt__content"
            }, _react.default.createElement("h2", {
              className: "item-prompt__title"
            }, data.name), _react.default.createElement("div", {
              className: "item-prompt__identifier"
            }, data.identifier), data.description && _react.default.createElement("div", {
              className: "item-prompt__description"
            }, data.description))));
          };
          exports.Prompt = Prompt;
          var _default = exports.default = Prompt;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/list
      ************************************/

      ims.set('./views/prompts/list', {
        hash: 2354232592,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptsList = PromptsList;
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _context = require("../context");
          var _item = require("./item");
          function PromptsList() {
            const {
              store
            } = _react.default.useContext(_context.PromptContext);
            (0, _hooks.useStore)(store);
            return _react.default.createElement(_list.List, {
              className: "prompts-container",
              items: store.items,
              control: _item.default
            });
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/search/input
      ************************************/

      ims.set('./views/search/input', {
        hash: 4181419540,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SearchInput = SearchInput;
          var _react = require("react");
          var _context = require("../context");
          function SearchInput() {
            const {
              store,
              texts
            } = (0, _context.usePromptContext)();
            const [localValue, setLocalValue] = (0, _react.useState)(store.searchQuery);
            (0, _react.useEffect)(() => {
              setLocalValue(store.searchQuery);
            }, [store.searchQuery]);
            const handleChange = event => {
              const value = event.target.value;
              setLocalValue(value);
              store.search(value);
            };
            const handleSubmit = event => {
              event.preventDefault();
              store.search(localValue);
            };
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              className: "search-form"
            }, _react.default.createElement("input", {
              type: "text",
              value: localValue,
              onChange: handleChange,
              placeholder: texts.search.placeholder,
              "aria-label": texts.search.label,
              className: "search-input"
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfYmV5b25kX2NvbnRleHQiLCJfcm91dGluZyIsIl9iYXNlIiwiQmFzZVN0b3JlTWFuYWdlciIsInByb21wdCIsInBhcmFtcyIsIkFwcFdyYXBwZXIiLCJjb2xsZWN0aW9uIiwiZmlsdGVyIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hUaW1lb3V0IiwiZmlsdGVyZWRJdGVtcyIsIml0ZW1zIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ0eXBlIiwiY29uc29sZSIsImVycm9yIiwiYXBwbHlGaWx0ZXJzIiwic2VhcmNoIiwicXVlcnkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidHJpbSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsIm5hbWUiLCJpbmNsdWRlcyIsImlkZW50aWZpZXIiLCJkZXNjcmlwdGlvbiIsInRyaWdnZXIiLCJwcm9qZWN0SWQiLCJmZXRjaGluZyIsImdldFByb21wdHMiLCJyZWFkeSIsImUiLCJhZGRQcm9tcHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiX3JlYWN0IiwiUHJvbXB0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvbXB0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiRW1wdHkiLCJ0ZXh0cyIsImFkZEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZW1wdHkiLCJpbnRybyIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImJ1dHRvbiIsIl91aSIsIl9ob29rcyIsIl9saXN0IiwiX2VtcHR5IiwiX2lucHV0IiwiY29udGV4dFZhbHVlIiwib25GaWx0ZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidXNlU3RvcmUiLCJMaXN0Q29udHJvbCIsImxlbmd0aCIsIlByb21wdHNMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2UiLCJsYXlvdXQiLCJoZWFkZXIiLCJTZWFyY2hJbnB1dCIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJzaXplIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsImZpbHRlcnMiLCJhbGwiLCJwcm9tcHRzIiwiZGVwZW5kZW5jaWVzIiwiZnVuY3Rpb25zIiwiYm9keSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NoaXBzIiwiUHJvbXB0IiwiZGF0YSIsIkxpbmsiLCJocmVmIiwiQ2hpcCIsImlzIiwiX2RlZmF1bHQiLCJfaXRlbSIsIkxpc3QiLCJjb250cm9sIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwib25TdWJtaXQiLCJwbGFjZWhvbGRlciIsImxhYmVsIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3MvcHJvbXB0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9tcHRzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL3NlYXJjaC9pbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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