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
        hash: 4231603902,
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
              this.#store.load(this.uri.vars.get('projectId'));
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
        hash: 2291745846,
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
                this.#projectId = projectId;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiZXhwb3J0cyIsInByb21wdHMiLCJtb2R1bGUiLCJpZCIsIm5hbWUiLCJhdWRpZW5jZXMiLCJnZW5lcmF0aXZlIiwic2NoZW1hcyIsImlwZSIsIklQRSIsImFnZW50IiwiU3VtbWFyeSIsIkFydGljbGUiLCJkZWJhdGUiLCJBbnN3ZXJzIiwic3Bva2VuIiwiYXNzZXNzbWVudCIsIkFzc2Vzc21lbnQiLCJfbW9kZWxzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJfcHJvbXB0cyIsIkJhc2VTdG9yZU1hbmFnZXIiLCJ0eXBlIiwidHlwZVZhbHVlIiwicHJvamVjdElkIiwicHJvbXB0IiwiQXBwV3JhcHBlciIsImNvbGxlY3Rpb24iLCJpdGVtcyIsIk9iamVjdCIsInZhbHVlcyIsImNvbnN0cnVjdG9yIiwic3BlY2lmaWVyIiwicHJvcGVydGllcyIsImNoYW5nZSIsInNldCIsImZldGNoaW5nIiwicmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImRlZmF1bHQiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX25vbkl0ZW0iLCJfbGlzdCIsInRleHRzIiwiZ2xvYmFsVGV4dHMiLCJjb250ZXh0VmFsdWUiLCJ1c2VTdG9yZSIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiUGFnZSIsImxheW91dCIsImhlYWRlciIsInRpdGxlIiwibW9kdWxlcyIsImNsYXNzTmFtZSIsIkxpbmsiLCJocmVmIiwiYm9keSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwibGVuZ3RoIiwib3B0aW9ucyIsInRydWUiLCJQcm9tcHRzTGlzdCIsImZhbHNlIiwiTm9uSXRlbSIsImRlZmluZVByb3BlcnR5Iiwibm9uRWxlbWVudEludHJvIiwibm9uRWxlbWVudEJ1dHRvbiIsIl9yb3V0aW5nIiwiX2NvbGxhcHNpYmxlIiwiUHJvbXB0IiwiZGF0YSIsImhhbmRsZVByb21wdENsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJyZW5kZXJBdWRpZW5jZVNlY3Rpb24iLCJhdWRpZW5jZSIsImtleSIsImVudHJpZXMiLCJtYXAiLCJvbkNsaWNrIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkZyYWdtZW50IiwiX2l0ZW0iLCJMaXN0IiwiY29udHJvbCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3Byb21wdHMvaW5kZXgudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvaW50ZXJmYWNlcy50cyIsIi90cy92aWV3cy9ub24taXRlbS50c3giLCIvdHMvdmlld3MvcHJvbXB0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9wcm9tcHRzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFB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