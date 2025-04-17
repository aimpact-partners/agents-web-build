System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.0.5/model", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, View, NonItem, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_2 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Models) {
      dependency_3 = _aimpactPlatform016Models;
    }, function (_beyondJsKernel0112Routing) {
      dependency_4 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReactive205Model) {
      dependency_5 = _beyondJsReactive205Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_7 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_8 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_9 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7List) {
      dependency_10 = _pragmateUi100Beta7List;
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
          "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/platform/models', dependency_3], ['@beyond-js/kernel/routing', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['@aimpact/platform/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/list', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-prompt-list",
        "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-list.widget",
        "is": "page",
        "route": "/ailearn/prompts",
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
        hash: 3538419430,
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
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['Home', '/'], ['RVD - Activities', '']]
            }), _react.default.createElement("div", {
              className: "title__panel"
            }, _react.default.createElement("h1", null, "RVD Prompts"), _react.default.createElement("div", {
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
        hash: 3253279186,
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
              console.log(20, event);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJleHBvcnRzIiwicHJvbXB0cyIsIm1vZHVsZSIsImlkIiwibmFtZSIsImF1ZGllbmNlcyIsImdlbmVyYXRpdmUiLCJzY2hlbWFzIiwiaXBlIiwiSVBFIiwiYWdlbnQiLCJTdW1tYXJ5IiwiQXJ0aWNsZSIsImRlYmF0ZSIsIkFuc3dlcnMiLCJzcG9rZW4iLCJhc3Nlc3NtZW50IiwiQXNzZXNzbWVudCIsIl9tb2RlbHMiLCJfcm91dGluZyIsIl9tb2RlbCIsIl9wcm9tcHRzIiwiUmVhY3RpdmVNb2RlbCIsInR5cGUiLCJwcm9qZWN0SWQiLCJwcm9tcHQiLCJBcHBXcmFwcGVyIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiY2hhbmdlIiwiZmV0Y2hpbmciLCJyZWFkeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJhZGRQcm9tcHQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiX3JlYWN0IiwiUHJvbXB0Q29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlUHJvbXB0Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2xpc3QiLCJfbm9uSXRlbSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwic2V0VHlwZSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJTcGlubmVyIiwiYWN0aXZlIiwiTGlzdENvbnRyb2wiLCJsZW5ndGgiLCJOb25JdGVtIiwiUHJvbXB0c0xpc3QiLCJjaGFuZ2VWaWV3IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIlByb3ZpZGVyIiwidmFsdWUiLCJjbGFzc05hbWUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImRlZmluZVByb3BlcnR5IiwiYWRkRWxlbWVudCIsIm5vbkVsZW1lbnRJbnRybyIsIm5vbkVsZW1lbnRCdXR0b24iLCJQcm9tcHQiLCJkYXRhIiwibG9nIiwia2V5IiwibWFwIiwiYXVkaWVuY2UiLCJlbnRyaWVzIiwiTGluayIsIl9kZWZhdWx0IiwiX2l0ZW0iLCJzZXRJdGVtcyIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9wcm9tcHRzL2luZGV4LnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL2ludGVyZmFjZXMudHMiLCIvdHMvdmlld3Mvbm9uLWl0ZW0udHN4IiwiL3RzL3ZpZXdzL3Byb21wdHMvaXRlbS50c3giLCIvdHMvdmlld3MvcHJvbXB0cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcs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