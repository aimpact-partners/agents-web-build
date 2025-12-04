System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "@aimpact/platform@0.1.6/components/ui", "@beyond-js/react-18-widgets@1.1.6/hooks", "pragmate-ui@1.0.8/components", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/list"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, Controller, View, NonItem, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    NonItem: void 0
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
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_7 = _aimpactPlatform016ComponentsUi;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_8 = _beyondJsReact18Widgets116Hooks;
    }, function (_pragmateUi108Components) {
      dependency_9 = _pragmateUi108Components;
    }, function (_beyondJsKernel0114Routing) {
      dependency_10 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Collapsible) {
      dependency_11 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108List) {
      dependency_12 = _pragmateUi108List;
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
          "vspecifier": "@aimpact/platform@0.1.6/agents-agents-activity-list",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/models', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['react', dependency_6], ['@aimpact/platform/components/ui', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/kernel/routing', dependency_10], ['pragmate-ui/collapsible', dependency_11], ['pragmate-ui/list', dependency_12]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-prompt-list",
        "vspecifier": "@aimpact/platform@0.1.6/agents-agents-activity-list.widget",
        "is": "page",
        "route": "/agents/activity/list",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/agents-agents-activity-list.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 738383250,
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
              this.#store.load(this.uri.qs.get('projectId'));
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
        hash: 2855470230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          var _prompts = require("./prompts");
          class StoreManager extends _base.BaseStoreManager {
            #type;
            get typeValue() {
              return this.#type;
            }
            #projectId = `a1l34rn1-453a-4612-b6fd-59cb742111d0`; //default project id
            get projectId() {
              return this.#projectId;
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
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['type']
              });
            }
            change(type) {
              if (this.#type === type) return;
              this.#type = type;
              this.set({
                type
              });
            }
            async load(projectId) {
              try {
                this.fetching = true;
                this.change('generative');
                if (projectId) this.#projectId = projectId;
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
        hash: 1566406736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 899507503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/platform/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _nonItem = require("./non-item");
          var _list = require("./prompts/list");
          /*bundle*/
          function View({
            store
          }) {
            const {
              ready,
              texts,
              globalTexts
            } = store;
            const contextValue = {
              store,
              texts,
              fetching: store.fetching
            };
            (0, _hooks.useStore)(store);
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_ui.Page.layout, {
              ready: ready
            }, _react.default.createElement(_ui.Page.header, {
              title: globalTexts.modules.prompts
            }, _react.default.createElement("div", {
              className: "actions-buttons flex-container flex-end"
            }, _react.default.createElement(_components.Link, {
              href: `/prompts/management?projectId=${store.projectId}`,
              className: "btn btn-primary"
            }, "+ ", globalTexts.modules.prompts))), _react.default.createElement(_ui.Page.body, null, _react.default.createElement(_components.ConditionalContainer, {
              condition: store.items.length > 0,
              options: {
                true: _react.default.createElement(_list.PromptsList, null),
                false: _react.default.createElement(_nonItem.NonItem, null)
              }
            }))));
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
        hash: 2666416481,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NonItem = void 0;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          const NonItem = () => {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "prompts-container"
            }, _react.default.createElement("div", {
              className: "list__item_non"
            }, _react.default.createElement("p", null, texts.nonElementIntro), _react.default.createElement(_components.Link, {
              href: `/prompts/management?projectId=${store.projectId}`,
              className: "btn btn-primary"
            }, texts.nonElementButton)));
          };
          exports.NonItem = NonItem;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/item
      ************************************/

      ims.set('./views/prompts/item', {
        hash: 1918867943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = Prompt;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _collapsible = require("pragmate-ui/collapsible");
          function Prompt({
            data
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const handlePromptClick = event => {
              event.stopPropagation();
              const {
                prompt,
                type
              } = event.currentTarget.dataset;
              if (type === 'schemas') {
                _routing.routing.pushState(`/ailearn/schemas/ailearn.${prompt}`);
                return;
              }
              _routing.routing.pushState(`/prompts/management?projectId=${store.projectId}&promptId=ailearn.${prompt}`);
            };
            const renderAudienceSection = audience => _react.default.createElement("div", {
              key: `${data.id}.${audience.id}`,
              className: "item__body"
            }, _react.default.createElement("h5", {
              className: "audience-title"
            }, audience.name), _react.default.createElement("div", {
              className: "body-actions"
            }, Object.entries(audience.prompts).map(([id, prompt]) => _react.default.createElement(_components.Link, {
              key: `action-${id}`,
              "data-prompt": prompt,
              "data-type": audience.id,
              onClick: handlePromptClick
            }, id))));
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: "list__item",
              key: data.id
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "item__header"
            }, _react.default.createElement("h4", null, data.name)), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "flex-container"
            }, _react.default.createElement(_react.default.Fragment, null, Object.values(data.audiences).map(renderAudienceSection))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/prompts/list
      ************************************/

      ims.set('./views/prompts/list', {
        hash: 4268987559,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptsList = PromptsList;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          function PromptsList() {
            const {
              store
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store);
            return _react.default.createElement(_list.List, {
              items: store.items,
              control: _item.Prompt,
              className: "platform-list"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImV4cG9ydHMiLCJwcm9tcHRzIiwibW9kdWxlIiwiaWQiLCJuYW1lIiwiYXVkaWVuY2VzIiwiZ2VuZXJhdGl2ZSIsInNjaGVtYXMiLCJpcGUiLCJJUEUiLCJhZ2VudCIsIlN1bW1hcnkiLCJBcnRpY2xlIiwiZGViYXRlIiwiQW5zd2VycyIsInNwb2tlbiIsImFzc2Vzc21lbnQiLCJBc3Nlc3NtZW50IiwiX21vZGVscyIsIl9iYXNlIiwiX2JleW9uZF9jb250ZXh0IiwiX3Byb21wdHMiLCJCYXNlU3RvcmVNYW5hZ2VyIiwidHlwZSIsInR5cGVWYWx1ZSIsInByb2plY3RJZCIsInByb21wdCIsIkFwcFdyYXBwZXIiLCJjb2xsZWN0aW9uIiwiaXRlbXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsInByb3BlcnRpZXMiLCJjaGFuZ2UiLCJzZXQiLCJmZXRjaGluZyIsInJlYWR5IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9yZWFjdCIsIk1vZHVsZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ub25JdGVtIiwiX2xpc3QiLCJ0ZXh0cyIsImdsb2JhbFRleHRzIiwiY29udGV4dFZhbHVlIiwidXNlU3RvcmUiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIlBhZ2UiLCJsYXlvdXQiLCJoZWFkZXIiLCJ0aXRsZSIsIm1vZHVsZXMiLCJjbGFzc05hbWUiLCJMaW5rIiwiaHJlZiIsImJvZHkiLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsImxlbmd0aCIsIm9wdGlvbnMiLCJ0cnVlIiwiUHJvbXB0c0xpc3QiLCJmYWxzZSIsIk5vbkl0ZW0iLCJkZWZpbmVQcm9wZXJ0eSIsIm5vbkVsZW1lbnRJbnRybyIsIm5vbkVsZW1lbnRCdXR0b24iLCJfcm91dGluZyIsIl9jb2xsYXBzaWJsZSIsIlByb21wdCIsImRhdGEiLCJoYW5kbGVQcm9tcHRDbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwicmVuZGVyQXVkaWVuY2VTZWN0aW9uIiwiYXVkaWVuY2UiLCJrZXkiLCJlbnRyaWVzIiwibWFwIiwib25DbGljayIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJGcmFnbWVudCIsIl9pdGVtIiwiTGlzdCIsImNvbnRyb2wiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3Byb21wdHMvaW5kZXgudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9jb250ZXh0LnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL2ludGVyZmFjZXMudHMvIiwiLy90cy92aWV3cy9ub24taXRlbS50c3giLCIvL3RzL3ZpZXdzL3Byb21wdHMvaXRlbS50c3giLCIvL3RzL3ZpZXdzL3Byb21wdHMvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxN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