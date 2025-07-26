System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.1.0/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, View, NonItem, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    NonItem: void 0
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
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReactive210Model) {
      dependency_6 = _beyondJsReactive210Model;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_8 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi102Components) {
      dependency_10 = _pragmateUi102Components;
    }, function (_pragmateUi102List) {
      dependency_11 = _pragmateUi102List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['react', dependency_7], ['@aimpact/platform/components/ui', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-prompt-list",
        "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-list.widget",
        "is": "page",
        "route": "/",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/ailearn-prompts-list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2243078022,
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
              this.#store.load();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*******************************
      INTERNAL MODULE: ./prompts/index
      *******************************/

      ims.set('./prompts/index', {
        hash: 2564451892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.prompts = void 0;
          const prompts = exports.prompts = {
            module: {
              id: 'module',
              name: 'Module',
              audiences: {
                generative: {
                  id: 'generative',
                  name: 'Generative',
                  prompts: {
                    'Objective Suggestions': 'suggestions-objective',
                    'Apply Suggestions': 'suggestions-objective-refinements',
                    'Generate activities': 'suggestions-module'
                  }
                }
              }
            },
            schemas: {
              id: 'schemas',
              name: 'Schemas',
              audiences: {
                ipe: {
                  id: 'schemas',
                  name: 'Agent',
                  prompts: {
                    IPE: 'ipe'
                  }
                }
              }
            },
            'character-talk': {
              id: 'character-talk',
              name: 'Character Talk',
              audiences: {
                generative: {
                  id: 'generative',
                  name: 'Generative',
                  prompts: {
                    'Generate activity': 'suggestions-activity-character-talk-v1'
                  }
                },
                agent: {
                  id: 'agent',
                  name: 'Agent',
                  prompts: {
                    'Assistant mission': 'activity-character-talk-v2',
                    IPE: 'character-talk-ipe-v2',
                    Summary: 'character-talk-summary'
                  }
                }
              }
            },
            'content-theory': {
              id: 'content-theory',
              name: 'Content Theory',
              audiences: {
                generative: {
                  id: 'generative',
                  name: 'Generative',
                  prompts: {
                    'Generate activity': 'suggestions-activity-content-theory-v1',
                    Article: 'generate-activity-article',
                    'Article summary': 'generate-content-summary',
                    'Article adaptations': 'generate-activity-materials-dyslexia'
                  }
                },
                agent: {
                  id: 'agent',
                  name: 'Agent',
                  prompts: {
                    'Assistant mission': 'activity-content-theory-v2',
                    IPE: 'content-theory-ipe-v2',
                    Summary: 'content-theory-summary'
                  }
                }
              }
            },
            debate: {
              id: 'debate',
              name: 'Debate',
              audiences: {
                generative: {
                  id: 'generative',
                  name: 'Generative',
                  prompts: {
                    'Generate activity': 'suggestions-activity-debate-v1'
                  }
                },
                agent: {
                  id: 'agent',
                  name: 'Agent',
                  prompts: {
                    'Assistant mission': 'activity-debate-v2',
                    IPE: 'debate-ipe-v2',
                    Summary: 'debate-summary'
                  }
                }
              }
            },
            'multiple-choice': {
              id: 'multiple-choice',
              name: 'Multiple Choice',
              audiences: {
                generative: {
                  id: 'generative',
                  name: 'Generative',
                  prompts: {
                    'Generate activity': 'suggestions-activity-multiple-choice-v1',
                    'Generate activity based on article': 'suggestions-activity-multiple-choice-based-article-v1',
                    Answers: 'suggestions-answers'
                  }
                }
              }
            },
            spoken: {
              id: 'spoken',
              name: 'Spoken',
              audiences: {
                generative: {
                  id: 'generative',
                  name: 'Generative',
                  prompts: {
                    'Generate activity': 'suggestions-activity-spoken-v1'
                  }
                },
                assessment: {
                  id: 'assessment',
                  name: 'Assessment',
                  prompts: {
                    Assessment: 'activity-spoken'
                  }
                }
              }
            }
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3186738369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _routing = require("@beyond-js/kernel/routing");
          var _model = require("@beyond-js/reactive/model");
          var _prompts = require("./prompts");
          class StoreManager extends _model.ReactiveModel {
            #type;
            get type() {
              return this.#type;
            }
            get projectId() {
              return `a1l34rn1-453a-4612-b6fd-59cb742111d0`;
            }
            get prompt() {
              return _models.AppWrapper.prompt;
            }
            #collection;
            get collection() {
              return this.#collection;
            }
            get items() {
              return Object.values(_prompts.prompts);
            }
            change(type) {
              if (this.#type === type) return;
              this.#type = type;
            }
            async load() {
              try {
                this.fetching = true;
                this.change('generative');
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            addPrompt() {
              _routing.routing.pushState(`/ailearn/prompts/view/new`);
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
        hash: 1577663291,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _list = require("./prompts/list");
          var _nonItem = require("./non-item");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const [type, setType] = (0, _react.useState)(store.type);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
              setType(store.type);
              setFetching(store.fetching);
            });
            if (!textsReady || !ready) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            const ListControl = store.items.length < 1 ? _nonItem.NonItem : _list.PromptsList;
            const changeView = event => {
              event.stopPropagation();
              const {
                type
              } = event.currentTarget.dataset;
              store.change(type);
              setType(type);
            };
            return _react.default.createElement(_context.PromptContext.Provider, {
              value: {
                texts,
                store,
                fetching
              }
            }, _react.default.createElement("div", {
              className: "wrapper"
            }, _react.default.createElement("div", {
              className: "title__panel"
            }, _react.default.createElement("h1", null, "AILearn Prompts"), _react.default.createElement("div", {
              className: "top__buttons"
            }, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "primary",
              onClick: store.addPrompt
            }, "Prompt"))), _react.default.createElement(ListControl, {
              store: store,
              texts: texts
            })));
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

      /********************************
      INTERNAL MODULE: ./views/non-item
      ********************************/

      ims.set('./views/non-item', {
        hash: 1503105201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NonItem = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          /*bundle*/
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
              onClick: addElement
            }, texts.nonElementButton)));
          };
          exports.NonItem = NonItem;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/item
      ************************************/

      ims.set('./views/prompts/item', {
        hash: 1048138058,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = exports.Prompt = void 0;
          var _routing = require("@beyond-js/kernel/routing");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          const Prompt = ({
            data
          }) => {
            const onClick = event => {
              event.stopPropagation();
              const {
                prompt,
                type
              } = event.currentTarget.dataset;
              if (type === 'schemas') {
                _routing.routing.pushState(`/ailearn/schemas/ailearn.${prompt}`);
                return;
              }
              _routing.routing.pushState(`/ailearn/prompts/view/ailearn.${prompt}`);
            };
            return _react.default.createElement("div", {
              key: data.id,
              className: "list__item"
            }, _react.default.createElement("header", null, _react.default.createElement("h2", {
              className: "activity-title"
            }, data.name)), _react.default.createElement("div", {
              className: "audiences"
            }, Object.values(data.audiences).map(audience => _react.default.createElement("div", {
              key: `${data.id}.${audience.id}`,
              className: "audience-section"
            }, _react.default.createElement("h5", {
              className: "audience-title"
            }, audience.name), _react.default.createElement("div", {
              className: "actions-container"
            }, Object.entries(audience.prompts).map(([id, prompt]) => _react.default.createElement(_components.Link, {
              key: `action-${id}`,
              "data-prompt": prompt,
              "data-type": audience.id,
              onClick: onClick
            }, id)))))));
          };
          exports.Prompt = Prompt;
          var _default = exports.default = Prompt;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/list
      ************************************/

      ims.set('./views/prompts/list', {
        hash: 950548537,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_list.List, {
              items: store.items,
              control: _item.default,
              className: "platform-list"
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
      }, {
        "im": "./views/non-item",
        "from": "NonItem",
        "name": "NonItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'NonItem') && _export("NonItem", NonItem = require ? require('./views/non-item').NonItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwicHJvbXB0cyIsIm1vZHVsZSIsImlkIiwibmFtZSIsImF1ZGllbmNlcyIsImdlbmVyYXRpdmUiLCJzY2hlbWFzIiwiaXBlIiwiSVBFIiwiYWdlbnQiLCJTdW1tYXJ5IiwiQXJ0aWNsZSIsImRlYmF0ZSIsIkFuc3dlcnMiLCJzcG9rZW4iLCJhc3Nlc3NtZW50IiwiQXNzZXNzbWVudCIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIl9wcm9tcHRzIiwiUmVhY3RpdmVNb2RlbCIsInR5cGUiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJBcHBXcmFwcGVyIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiY2hhbmdlIiwiZmV0Y2hpbmciLCJyZWFkeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRQcm9tcHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiX3JlYWN0IiwiUHJvbXB0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvbXB0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2xpc3QiLCJfbm9uSXRlbSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0VHlwZSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdENvbnRyb2wiLCJsZW5ndGgiLCJOb25JdGVtIiwiUHJvbXB0c0xpc3QiLCJjaGFuZ2VWaWV3IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJkZWZpbmVQcm9wZXJ0eSIsImFkZEVsZW1lbnQiLCJub25FbGVtZW50SW50cm8iLCJub25FbGVtZW50QnV0dG9uIiwiUHJvbXB0IiwiZGF0YSIsImtleSIsIm1hcCIsImF1ZGllbmNlIiwiZW50cmllcyIsIkxpbmsiLCJfZGVmYXVsdCIsIl9pdGVtIiwic2V0SXRlbXMiLCJGcmFnbWVudCIsIkxpc3QiLCJjb250cm9sIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9wcm9tcHRzL2luZGV4LnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy9pbnRlcmZhY2VzLnRzLyIsIi8vdHMvdmlld3Mvbm9uLWl0ZW0udHN4IiwiLy90cy92aWV3cy9wcm9tcHRzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9wcm9tcHRzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFF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