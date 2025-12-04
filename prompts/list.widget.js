System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "pragmate-ui@1.0.8/components", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "pragmate-ui@1.0.8/chips", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
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
    }, function (_aimpactPlatform016StoresBase) {
      dependency_5 = _aimpactPlatform016StoresBase;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_8 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_9 = _beyondJsReact18Widgets116Hooks;
    }, function (_pragmateUi108Chips) {
      dependency_10 = _pragmateUi108Chips;
    }, function (_pragmateUi108List) {
      dependency_11 = _pragmateUi108List;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['react', dependency_6], ['pragmate-ui/components', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/chips', dependency_10], ['pragmate-ui/list', dependency_11]]);
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
        hash: 1074632464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _beyond_context = require("beyond_context");
          var _base = require("@aimpact/platform/stores/base");
          class StoreManager extends _base.BaseStoreManager {
            #prompt;
            projectId;
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
                this.projectId = projectId;
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
        hash: 2208042613,
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
            }, texts.filters.functions)), _react.default.createElement(_components.Link, {
              href: `/prompts/management?projectId=${store.projectId}`,
              className: "btn btn-primary"
            }, texts.actions.add))), _react.default.createElement(_ui.Page.body, null, _react.default.createElement(ListControl, null))));
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
        hash: 2482882211,
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
              href: `/prompts/management?projectId=${store.projectId}&promptId=${data?.identifier}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsIl9tb2RlbHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYmFzZSIsIkJhc2VTdG9yZU1hbmFnZXIiLCJwcm9tcHQiLCJwcm9qZWN0SWQiLCJBcHBXcmFwcGVyIiwiY29sbGVjdGlvbiIsImZpbHRlciIsInNlYXJjaFF1ZXJ5Iiwic2VhcmNoVGltZW91dCIsImZpbHRlcmVkSXRlbXMiLCJpdGVtcyIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidHlwZSIsImNvbnNvbGUiLCJlcnJvciIsImFwcGx5RmlsdGVycyIsInNlYXJjaCIsInF1ZXJ5IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIml0ZW0iLCJuYW1lIiwiaW5jbHVkZXMiLCJpZGVudGlmaWVyIiwiZGVzY3JpcHRpb24iLCJ0cmlnZ2VyIiwiZmV0Y2hpbmciLCJnZXRQcm9tcHRzIiwicmVhZHkiLCJlIiwiX3JlYWN0IiwiUHJvbXB0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvbXB0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiRW1wdHkiLCJ0ZXh0cyIsImFkZEVsZW1lbnQiLCJhZGRQcm9tcHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiZW1wdHkiLCJpbnRybyIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImJ1dHRvbiIsIl91aSIsIl9ob29rcyIsIl9saXN0IiwiX2VtcHR5IiwiX2lucHV0IiwiY29udGV4dFZhbHVlIiwib25GaWx0ZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidXNlU3RvcmUiLCJMaXN0Q29udHJvbCIsImxlbmd0aCIsIlByb21wdHNMaXN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2UiLCJsYXlvdXQiLCJoZWFkZXIiLCJTZWFyY2hJbnB1dCIsIkJ1dHRvbkdyb3VwIiwib3JpZW50YXRpb24iLCJzaXplIiwic2VsZWN0ZWQiLCJvbkNoYW5nZSIsImZpbHRlcnMiLCJhbGwiLCJwcm9tcHRzIiwiZGVwZW5kZW5jaWVzIiwiZnVuY3Rpb25zIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwiYWRkIiwiYm9keSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2NoaXBzIiwiUHJvbXB0IiwiZGF0YSIsIkNoaXAiLCJpcyIsIl9kZWZhdWx0IiwiX2l0ZW0iLCJMaXN0IiwiY29udHJvbCIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uU3VibWl0IiwicGxhY2Vob2xkZXIiLCJsYWJlbCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2VzLnRzLyIsIi8vdHMvdmlld3MvcHJvbXB0cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvcHJvbXB0cy9saXN0LnRzeCIsIi8vdHMvdmlld3Mvc2VhcmNoL2lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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