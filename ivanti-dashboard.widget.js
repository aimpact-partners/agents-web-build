System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/stores/base", "pragmate-ui@1.0.8/components", "@aimpact/platform@0.1.6/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, StoreManager, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_4 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_5 = _aimpactPlatform016StoresBase;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_7 = _aimpactPlatform016SharedHooks;
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
          "vspecifier": "@aimpact/platform@0.1.6/ivanti-dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['pragmate-ui/components', dependency_6], ['@aimpact/platform/shared/hooks', dependency_7]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ivanti-dashboard-page",
        "vspecifier": "@aimpact/platform@0.1.6/ivanti-dashboard.widget",
        "is": "page",
        "route": "/ivanti-dashboard",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/ivanti-dashboard.widget');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 441924165,
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

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 3699553113,
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
              // Check if there's a tab parameter in the URL
              const tab = this.uri.qs.get('tab');
              if (tab) {
                // Set the active section based on the tab parameter
                this.#store.setActiveSection(tab);
              }
            }
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2640076270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          /*bundle*/
          class StoreManager extends _base.BaseStoreManager {
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['apiKey', 'ivantiUrl', 'currentObjectType', 'currentRecId', 'activeSection', 'loading', 'response', 'statusMessage', 'error']
              });
              // Initialize with default values
              this.set({
                apiKey: this.getStoredApiKey(),
                ivantiUrl: 'https://ivanti-api-connector-883367315651.us-central1.run.app',
                currentObjectType: 'incidents',
                currentRecId: '',
                activeSection: 'action-config',
                loading: false,
                response: null,
                statusMessage: '',
                error: ''
              });
            }
            getStoredApiKey() {
              if (typeof window !== 'undefined' && window.localStorage) {
                return localStorage.getItem('ivantiApiKey') || '';
              }
              return '';
            }
            storeApiKey(apiKey) {
              if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('ivantiApiKey', apiKey);
              }
            }
            setApiKey(apiKey) {
              this.storeApiKey(apiKey);
              this.set({
                apiKey
              });
            }
            setActiveSection(section) {
              this.set({
                activeSection: section
              });
            }
            setCurrentObjectType(objectType) {
              this.set({
                currentObjectType: objectType
              });
            }
            setCurrentRecId(recId) {
              this.set({
                currentRecId: recId
              });
            }
            setLoading(loading) {
              this.set({
                loading
              });
            }
            setResponse(response) {
              this.set({
                response
              });
            }
            setStatusMessage(message, isError = false) {
              this.set({
                statusMessage: message,
                error: isError ? message : ''
              });
            }
            clearStatus() {
              this.set({
                statusMessage: '',
                error: ''
              });
            }
            async apiFetch(url, options = {}, objectType) {
              this.setLoading(true);
              this.clearStatus();
              this.setResponse(null);
              const headers = {
                'Content-Type': 'application/json',
                ...options.headers
              };
              if (this.apiKey) {
                headers['Authorization'] = `Bearer ${this.apiKey}`;
              }
              try {
                const response = await fetch(url, {
                  ...options,
                  headers
                });
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status} - ${await response.text()}`);
                }
                if (response.status === 204) {
                  this.setStatusMessage('Request successful (204 No Content).');
                  this.setResponse(null);
                  return;
                }
                const data = await response.json();
                this.setStatusMessage('Request successful!');
                this.setResponse(data);
                if (objectType) {
                  this.setCurrentObjectType(objectType);
                }
              } catch (error) {
                console.error('API Fetch Error:', error);
                const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                this.setStatusMessage(`Error: ${errorMessage}`, true);
              } finally {
                this.setLoading(false);
              }
            }
            async readAll(objectType) {
              const url = `${this.ivantiUrl}/proxy/${objectType}`;
              await this.apiFetch(url, {
                method: 'GET'
              }, objectType);
            }
            async readByFilter(objectType, filterQuery) {
              const url = `${this.ivantiUrl}/proxy/${objectType}?$filter=${encodeURIComponent(filterQuery)}`;
              await this.apiFetch(url, {
                method: 'GET'
              }, objectType);
            }
            async readById(objectType, recId) {
              if (!recId) {
                this.setStatusMessage('Record ID (RecId) is required.', true);
                return;
              }
              const url = `${this.ivantiUrl}/proxy/${objectType}?recid=${recId}`;
              await this.apiFetch(url, {
                method: 'GET'
              }, objectType);
            }
            async generateSummary(recId, model, objectType) {
              if (!recId) {
                this.setStatusMessage('A Record RecId is required to generate a summary.', true);
                return '';
              }
              this.setLoading(true);
              this.clearStatus();
              try {
                const url = `${this.ivantiUrl}/summary`;
                const payload = {
                  model,
                  recid: recId,
                  objectType
                };
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiKey}`
                  },
                  body: JSON.stringify(payload)
                });
                if (!response.ok) {
                  throw new Error(`AI service error! ${response.status} - ${await response.text()}`);
                }
                const data = await response.json();
                if (data && data.data && data.data.summary) {
                  this.setStatusMessage('AI summary generated successfully.');
                  return data.data.summary;
                } else {
                  throw new Error('Invalid response format from AI service.');
                }
              } catch (error) {
                console.error('AI Generation Error:', error);
                const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                this.setStatusMessage(`Error: ${errorMessage}`, true);
                return '';
              } finally {
                this.setLoading(false);
              }
            }
            async updateIncident(recId, summary) {
              if (!recId) {
                this.setStatusMessage('Incident RecId is required for update.', true);
                return;
              }
              const url = `${this.ivantiUrl}/proxy/incidents/${recId}`;
              const body = JSON.stringify({
                Symptom: summary
              });
              await this.apiFetch(url, {
                method: 'PUT',
                body
              }, 'incidents');
            }
            async generateKnowledge(recId, title, model, objectType) {
              let payload;
              if (recId) {
                payload = {
                  model,
                  recid: recId,
                  objectType
                };
              } else if (title) {
                payload = {
                  model,
                  prompt: title,
                  objectType
                };
              } else {
                this.setStatusMessage('A Source RecId or a Title is required to generate knowledge details.', true);
                return {
                  title: '',
                  detail: ''
                };
              }
              this.setLoading(true);
              this.clearStatus();
              try {
                const url = `${this.ivantiUrl}/knowledge`;
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${this.apiKey}`
                  },
                  body: JSON.stringify(payload)
                });
                if (!response.ok) {
                  throw new Error(`AI service error! ${response.status} - ${await response.text()}`);
                }
                const responseData = await response.json();
                if (responseData.error || !responseData.data) {
                  throw new Error(responseData.error || 'Invalid response format from AI service.');
                }
                const {
                  title: generatedTitle,
                  detail
                } = responseData.data;
                this.setStatusMessage('AI details generated successfully.');
                return {
                  title: generatedTitle || '',
                  detail: detail || ''
                };
              } catch (error) {
                console.error('AI Generation Error:', error);
                const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                this.setStatusMessage(`Error: ${errorMessage}`, true);
                return {
                  title: '',
                  detail: ''
                };
              } finally {
                this.setLoading(false);
              }
            }
            async createKnowledge(collection, category, title, details) {
              const url = `${this.ivantiUrl}/proxy/FRS_Knowledge__Documents`;
              const body = JSON.stringify({
                Collection: collection,
                Category: category,
                Title: title,
                Details: details
              });
              await this.apiFetch(url, {
                method: 'POST',
                body
              }, 'FRS_Knowledge__Documents');
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/aside
      ***********************************/

      ims.set('./views/aside/aside', {
        hash: 2305642809,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Aside = Aside;
          var _react = require("react");
          var _submenu = require("./submenu");
          var _navLink = require("./nav-link");
          function Aside() {
            return _react.default.createElement("aside", {
              className: "dashboard-aside"
            }, _react.default.createElement("div", {
              className: "aside-container"
            }, _react.default.createElement("nav", {
              className: "main-nav"
            }, _react.default.createElement("ul", null, _react.default.createElement(_submenu.Submenu, {
              title: "Tickets"
            }, _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-read-all"
            }, "All"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-read-filter"
            }, "By Filter"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-read-recid"
            }, "By ID"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-update-incident"
            }, "Ticket Summarization")), _react.default.createElement(_submenu.Submenu, {
              title: "Knowledge"
            }, _react.default.createElement(_navLink.NavLink, {
              href: "https://dev.app.rvd.ai/kb/articles/list",
              target: "_blank"
            }, "Articles"), _react.default.createElement(_navLink.NavLink, {
              href: "https://dev.app.rvd.ai/kb/sections/list",
              target: "_blank"
            }, "Sections"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-create-knowledge"
            }, "Knowledge Generation")), _react.default.createElement(_submenu.Submenu, {
              title: "Self Service Agent"
            }, _react.default.createElement(_navLink.NavLink, {
              href: "/playground"
            }, "Edit"), _react.default.createElement(_navLink.NavLink, {
              href: "https://dev.app.rvd.ai/kb/sections/view/cf907813-3c11-4a51-9b58-74d056986b02",
              target: "_blank"
            }, "Test")), _react.default.createElement(_navLink.NavLink, {
              href: "/projects"
            }, "Projects"), _react.default.createElement(_navLink.NavLink, {
              href: "/prompts/list/1t3gr1ty-123a-4612-b6fd-59cb74211d0"
            }, "Prompts"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-config"
            }, "API Configuration")))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/index
      ***********************************/

      ims.set('./views/aside/index', {
        hash: 3425995240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "Aside", {
            enumerable: true,
            get: function () {
              return _aside.Aside;
            }
          });
          Object.defineProperty(exports, "NavLink", {
            enumerable: true,
            get: function () {
              return _navLink.NavLink;
            }
          });
          Object.defineProperty(exports, "Submenu", {
            enumerable: true,
            get: function () {
              return _submenu.Submenu;
            }
          });
          var _aside = require("./aside");
          var _submenu = require("./submenu");
          var _navLink = require("./nav-link");
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/aside/nav-link
      **************************************/

      ims.set('./views/aside/nav-link', {
        hash: 2076012885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NavLink = NavLink;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function NavLink({
            href,
            target,
            dataTarget,
            children
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const handleClick = e => {
              if (dataTarget) {
                e.preventDefault();
                store.setActiveSection(dataTarget);
              }
            };
            const isActive = dataTarget && store.activeSection === dataTarget;
            // Generate URL for dataTarget elements
            const linkUrl = dataTarget ? `/ivanti-dashboard?tab=${dataTarget}` : href || '#';
            return _react.default.createElement("li", null, _react.default.createElement(_components.Link, {
              href: linkUrl,
              target: target,
              "data-target": dataTarget,
              className: `nav-link ${isActive ? 'active' : ''}`,
              onClick: handleClick
            }, children));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/aside/submenu
      *************************************/

      ims.set('./views/aside/submenu', {
        hash: 736780089,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Submenu = Submenu;
          var _react = require("react");
          function Submenu({
            title,
            children
          }) {
            const [isOpen, setIsOpen] = (0, _react.useState)(false);
            const toggleSubmenu = () => {
              setIsOpen(!isOpen);
            };
            return _react.default.createElement("li", null, _react.default.createElement("div", {
              className: `nav-link has-submenu ${isOpen ? 'open' : ''}`,
              onClick: toggleSubmenu
            }, title), isOpen && _react.default.createElement("ul", {
              className: "submenu"
            }, children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/aside/types
      ***********************************/

      ims.set('./views/aside/types', {
        hash: 391710311,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2990158992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _aside = require("./aside");
          var _mainContent = require("./main-content");
          var _context = require("../context");
          function DashboardContent() {
            const {
              store
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store);
            return _react.default.createElement("div", {
              className: "ivanti-dashboard"
            }, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement("h1", {
              className: "dashboard-title"
            }, "MSP Agents Dashboard")), _react.default.createElement("div", {
              className: "dashboard-layout"
            }, _react.default.createElement(_aside.Aside, null), _react.default.createElement(_mainContent.MainContent, null)));
          }
          function View({
            store
          }) {
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                store
              }
            }, _react.default.createElement(DashboardContent, null));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/main-content
      ************************************/

      ims.set('./views/main-content', {
        hash: 32510557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainContent = MainContent;
          var _react = require("react");
          var _context = require("../context");
          var _apiConfiguration = require("./sections/api-configuration");
          var _readAll = require("./sections/read-all");
          var _readByFilter = require("./sections/read-by-filter");
          var _readById = require("./sections/read-by-id");
          var _ticketSummarization = require("./sections/ticket-summarization");
          var _knowledgeGeneration = require("./sections/knowledge-generation");
          var _responseSection = require("./response-section");
          function MainContent() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const renderActiveSection = () => {
              switch (store.activeSection) {
                case 'action-config':
                  return _react.default.createElement(_apiConfiguration.ApiConfiguration, null);
                case 'action-read-all':
                  return _react.default.createElement(_readAll.ReadAll, null);
                case 'action-read-filter':
                  return _react.default.createElement(_readByFilter.ReadByFilter, null);
                case 'action-read-recid':
                  return _react.default.createElement(_readById.ReadById, null);
                case 'action-update-incident':
                  return _react.default.createElement(_ticketSummarization.TicketSummarization, null);
                case 'action-create-knowledge':
                  return _react.default.createElement(_knowledgeGeneration.KnowledgeGeneration, null);
                default:
                  return _react.default.createElement(_apiConfiguration.ApiConfiguration, null);
              }
            };
            return _react.default.createElement("main", {
              className: "dashboard-main"
            }, _react.default.createElement("div", {
              className: "actions-container"
            }, renderActiveSection()), store.activeSection !== 'action-config' && _react.default.createElement(_responseSection.ResponseSection, null));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/response-section
      ****************************************/

      ims.set('./views/response-section', {
        hash: 784231064,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResponseSection = ResponseSection;
          var _react = require("react");
          var _context = require("../context");
          function ResponseSection() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const renderResponse = () => {
              if (store.loading) {
                return _react.default.createElement("div", {
                  className: "response-loading"
                }, _react.default.createElement("div", {
                  className: "loader"
                }), _react.default.createElement("p", null, "Fetching data..."));
              }
              if (store.error) {
                return _react.default.createElement("div", {
                  className: "response-error"
                }, _react.default.createElement("p", {
                  className: "text-red-400"
                }, store.error));
              }
              if (!store.response) {
                return _react.default.createElement("p", {
                  className: "text-gray-400"
                }, "Response data will be displayed here...");
              }
              if (store.response.value && Array.isArray(store.response.value)) {
                return renderTable(store.response.value);
              }
              if (typeof store.response === 'object') {
                return renderSingleObject(store.response);
              }
              return _react.default.createElement("p", null, store.response);
            };
            const renderTable = dataArray => {
              if (dataArray.length === 0) {
                return _react.default.createElement("p", {
                  className: "text-gray-400"
                }, "No records found.");
              }
              const headers = Object.keys(dataArray[0]);
              return _react.default.createElement("table", {
                className: "response-table"
              }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, headers.map(header => _react.default.createElement("th", {
                key: header,
                className: "table-header"
              }, header)))), _react.default.createElement("tbody", null, dataArray.map((item, index) => _react.default.createElement("tr", {
                key: index,
                className: item.RecId ? 'clickable-row' : '',
                onClick: () => item.RecId && handleRowClick(item.RecId)
              }, headers.map(header => _react.default.createElement("td", {
                key: header,
                className: "table-cell"
              }, typeof item[header] === 'object' ? JSON.stringify(item[header]) : item[header]))))));
            };
            const handleRowClick = recId => {
              store.setCurrentRecId(recId);
              // Show tooltip or handle row click action
            };
            const renderSingleObject = data => {
              return _react.default.createElement("div", null, data.RecId && _react.default.createElement("div", {
                className: "flex gap-4 mb-4"
              }, _react.default.createElement("button", {
                className: "btn btn-primary",
                onClick: () => handleTicketSummarization(data.RecId)
              }, "Ticket Summarization"), _react.default.createElement("button", {
                className: "btn btn-blue",
                onClick: () => handleKnowledgeGeneration(data.RecId)
              }, "Knowledge Generation")), _react.default.createElement("pre", {
                className: "whitespace-pre-wrap break-all"
              }, JSON.stringify(data, null, 2)));
            };
            const handleTicketSummarization = recId => {
              store.setActiveSection('action-update-incident');
              store.setCurrentRecId(recId);
            };
            const handleKnowledgeGeneration = recId => {
              store.setActiveSection('action-create-knowledge');
              store.setCurrentRecId(recId);
            };
            return _react.default.createElement("section", {
              className: "response-section"
            }, _react.default.createElement("div", {
              className: "response-header"
            }, _react.default.createElement("h2", {
              className: "response-title"
            }, "Responses"), store.loading && _react.default.createElement("div", {
              className: "loader"
            })), store.statusMessage && _react.default.createElement("div", {
              className: `status-message ${store.error ? 'error' : 'success'}`
            }, store.statusMessage), _react.default.createElement("div", {
              className: "response-output"
            }, renderResponse()));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/sections/api-configuration
      **************************************************/

      ims.set('./views/sections/api-configuration', {
        hash: 2436416137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApiConfiguration = ApiConfiguration;
          var _react = require("react");
          var _context = require("../../context");
          function ApiConfiguration() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const handleApiKeyChange = e => {
              store.setApiKey(e.target.value);
            };
            return _react.default.createElement("section", {
              className: "api-action"
            }, _react.default.createElement("h2", {
              className: "section-title"
            }, "API Configuration"), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "api-key",
              className: "form-label"
            }, "API Key"), _react.default.createElement("input", {
              type: "password",
              id: "api-key",
              className: "form-input",
              value: store.apiKey,
              onChange: handleApiKeyChange
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/sections/knowledge-generation
      *****************************************************/

      ims.set('./views/sections/knowledge-generation', {
        hash: 3154602453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeGeneration = KnowledgeGeneration;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function KnowledgeGeneration() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [objectType, setObjectType] = (0, _react.useState)('incidents');
            const [recId, setRecId] = (0, _react.useState)('');
            const [model, setModel] = (0, _react.useState)('falcon3:10b');
            const [collection, setCollection] = (0, _react.useState)('Other');
            const [category, setCategory] = (0, _react.useState)('Windows');
            const [title, setTitle] = (0, _react.useState)('');
            const [details, setDetails] = (0, _react.useState)('');
            // Update recId when store.currentRecId changes
            (0, _react.useEffect)(() => {
              if (store.currentRecId) {
                setRecId(store.currentRecId);
              }
            }, [store.currentRecId]);
            // Update objectType when store.currentObjectType changes
            (0, _react.useEffect)(() => {
              if (store.currentObjectType) {
                setObjectType(store.currentObjectType);
              }
            }, [store.currentObjectType]);
            const handleGenerateKnowledge = async () => {
              const result = await store.generateKnowledge(recId, title, model, objectType);
              if (result.title) setTitle(result.title);
              if (result.detail) setDetails(result.detail);
            };
            const handleCreateKnowledge = () => {
              store.createKnowledge(collection, category, title, details);
            };
            return _react.default.createElement("section", {
              className: "api-action"
            }, _react.default.createElement("div", {
              className: "section-header"
            }, _react.default.createElement("h2", {
              className: "section-title"
            }, "Knowledge Generation"), _react.default.createElement(_components.Link, {
              href: "/projects/1t3gr1ty-123a-4612-b6fd-59cb74211d0/prompts/view/itegrity.knowledgebase",
              rel: "noopener noreferrer",
              className: "btn btn-secondary btn-sm"
            }, "Edit Prompt")), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "knowledge-object-type",
              className: "form-label"
            }, "Object Type"), _react.default.createElement("select", {
              id: "knowledge-object-type",
              value: objectType,
              onChange: e => setObjectType(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "cis"
            }, "CIs"), _react.default.createElement("option", {
              value: "incidents"
            }, "Incidents"), _react.default.createElement("option", {
              value: "servicereqs"
            }, "Service Requests"), _react.default.createElement("option", {
              value: "changes"
            }, "Changes"))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "knowledge-recid",
              className: "form-label"
            }, "Source RecId (Optional)"), _react.default.createElement("input", {
              type: "text",
              id: "knowledge-recid",
              value: recId,
              onChange: e => setRecId(e.target.value),
              className: "form-input"
            })), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "ai-model-knowledge",
              className: "form-label"
            }, "AI Model"), _react.default.createElement("div", {
              className: "form-row"
            }, _react.default.createElement("select", {
              id: "ai-model-knowledge",
              value: model,
              onChange: e => setModel(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "falcon3:10b"
            }, "falcon3:10b")), _react.default.createElement("button", {
              onClick: handleGenerateKnowledge,
              className: "btn btn-blue",
              disabled: store.loading
            }, "Generate with AI"))), _react.default.createElement("div", {
              className: "form-row"
            }, _react.default.createElement("div", {
              className: "form-group form-group-half"
            }, _react.default.createElement("label", {
              htmlFor: "create-knowledge-collection",
              className: "form-label"
            }, "Collection"), _react.default.createElement("select", {
              id: "create-knowledge-collection",
              value: collection,
              onChange: e => setCollection(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", null, "Other"), _react.default.createElement("option", null, "Workplace and Facilities Management"), _react.default.createElement("option", null, "Company Policy & Procedure"), _react.default.createElement("option", null, "Customer Knowledge"), _react.default.createElement("option", null, "Internal Knowledge"), _react.default.createElement("option", null, "IT Knowledge"), _react.default.createElement("option", null, "Security Operations"), _react.default.createElement("option", null, "Service Desk"))), _react.default.createElement("div", {
              className: "form-group form-group-half"
            }, _react.default.createElement("label", {
              htmlFor: "create-knowledge-category",
              className: "form-label"
            }, "Category"), _react.default.createElement("select", {
              id: "create-knowledge-category",
              value: category,
              onChange: e => setCategory(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", null, "Windows"), _react.default.createElement("option", null, "Accessibility"), _react.default.createElement("option", null, "Backup"), _react.default.createElement("option", null, "Benefits Management"), _react.default.createElement("option", null, "Desktop Hardware"), _react.default.createElement("option", null, "Desktop Phone"), _react.default.createElement("option", null, "Desktop Software"), _react.default.createElement("option", null, "Documentation"), _react.default.createElement("option", null, "Employee Administration")))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "create-knowledge-title",
              className: "form-label"
            }, "Title"), _react.default.createElement("input", {
              type: "text",
              id: "create-knowledge-title",
              value: title,
              onChange: e => setTitle(e.target.value),
              className: "form-input"
            })), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "create-knowledge-details",
              className: "form-label"
            }, "Details"), _react.default.createElement("textarea", {
              id: "create-knowledge-details",
              rows: 4,
              value: details,
              onChange: e => setDetails(e.target.value),
              className: "form-textarea"
            })), _react.default.createElement("button", {
              onClick: handleCreateKnowledge,
              className: "btn btn-green btn-full",
              disabled: store.loading
            }, "Create Article"));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/sections/read-all
      *****************************************/

      ims.set('./views/sections/read-all', {
        hash: 3213118831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReadAll = ReadAll;
          var _react = require("react");
          var _context = require("../../context");
          function ReadAll() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [objectType, setObjectType] = (0, _react.useState)('incidents');
            const handleFetchData = () => {
              store.readAll(objectType);
            };
            return _react.default.createElement("section", {
              className: "api-action"
            }, _react.default.createElement("h2", {
              className: "section-title"
            }, "Read All"), _react.default.createElement("div", {
              className: "form-row"
            }, _react.default.createElement("select", {
              value: objectType,
              onChange: e => setObjectType(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "cis"
            }, "CIs"), _react.default.createElement("option", {
              value: "incidents"
            }, "Incidents"), _react.default.createElement("option", {
              value: "servicereqs"
            }, "Service Requests"), _react.default.createElement("option", {
              value: "changes"
            }, "Changes")), _react.default.createElement("button", {
              onClick: handleFetchData,
              className: "btn btn-primary",
              disabled: store.loading
            }, "Fetch Data")));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/sections/read-by-filter
      ***********************************************/

      ims.set('./views/sections/read-by-filter', {
        hash: 1774492004,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReadByFilter = ReadByFilter;
          var _react = require("react");
          var _context = require("../../context");
          function ReadByFilter() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [objectType, setObjectType] = (0, _react.useState)('incidents');
            const [filterQuery, setFilterQuery] = (0, _react.useState)("Status eq 'Active'");
            const handleFetchData = () => {
              store.readByFilter(objectType, filterQuery);
            };
            return _react.default.createElement("section", {
              className: "api-action"
            }, _react.default.createElement("h2", {
              className: "section-title"
            }, "Read by filter"), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "filter-type",
              className: "form-label"
            }, "Object Type"), _react.default.createElement("select", {
              id: "filter-type",
              value: objectType,
              onChange: e => setObjectType(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "cis"
            }, "CIs"), _react.default.createElement("option", {
              value: "incidents"
            }, "Incidents"), _react.default.createElement("option", {
              value: "servicereqs"
            }, "Service Requests"), _react.default.createElement("option", {
              value: "changes"
            }, "Changes"))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "filter-query",
              className: "form-label"
            }, "Filter Query ($filter)"), _react.default.createElement("select", {
              id: "filter-query",
              value: filterQuery,
              onChange: e => setFilterQuery(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "Status eq 'Active'"
            }, "Status eq 'Active'"), _react.default.createElement("option", {
              value: "Impact eq 'High'"
            }, "Impact eq 'High'"))), _react.default.createElement("button", {
              onClick: handleFetchData,
              className: "btn btn-primary btn-full",
              disabled: store.loading
            }, "Fetch Filtered Data"));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/sections/read-by-id
      *******************************************/

      ims.set('./views/sections/read-by-id', {
        hash: 2879680531,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReadById = ReadById;
          var _react = require("react");
          var _context = require("../../context");
          function ReadById() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [objectType, setObjectType] = (0, _react.useState)('incidents');
            const [recId, setRecId] = (0, _react.useState)('4241BE52402449668EFAD677E5FA7F54');
            const handleFetchData = () => {
              store.readById(objectType, recId);
            };
            return _react.default.createElement("section", {
              className: "api-action"
            }, _react.default.createElement("h2", {
              className: "section-title"
            }, "Read by Id"), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "recid-type",
              className: "form-label"
            }, "Object Type"), _react.default.createElement("select", {
              id: "recid-type",
              value: objectType,
              onChange: e => setObjectType(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "cis"
            }, "CIs"), _react.default.createElement("option", {
              value: "incidents"
            }, "Incidents"), _react.default.createElement("option", {
              value: "servicereqs"
            }, "Service Requests"), _react.default.createElement("option", {
              value: "changes"
            }, "Changes"))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "recid-value",
              className: "form-label"
            }, "Record ID (RecId)"), _react.default.createElement("input", {
              type: "text",
              id: "recid-value",
              value: recId,
              onChange: e => setRecId(e.target.value),
              className: "form-input"
            })), _react.default.createElement("button", {
              onClick: handleFetchData,
              className: "btn btn-primary btn-full",
              disabled: store.loading
            }, "Fetch by RecId"));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/sections/ticket-summarization
      *****************************************************/

      ims.set('./views/sections/ticket-summarization', {
        hash: 1200151652,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TicketSummarization = TicketSummarization;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function TicketSummarization() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [objectType, setObjectType] = (0, _react.useState)('incidents');
            const [recId, setRecId] = (0, _react.useState)('');
            const [model, setModel] = (0, _react.useState)('llama3.2:3b');
            const [summary, setSummary] = (0, _react.useState)('');
            // Update recId when store.currentRecId changes
            (0, _react.useEffect)(() => {
              if (store.currentRecId) {
                setRecId(store.currentRecId);
              }
            }, [store.currentRecId]);
            // Update objectType when store.currentObjectType changes
            (0, _react.useEffect)(() => {
              if (store.currentObjectType) {
                setObjectType(store.currentObjectType);
              }
            }, [store.currentObjectType]);
            const handleGenerateSummary = async () => {
              const generatedSummary = await store.generateSummary(recId, model, objectType);
              setSummary(generatedSummary);
            };
            const handleUpdateIncident = () => {
              store.updateIncident(recId, summary);
            };
            return _react.default.createElement("section", {
              className: "api-action"
            }, _react.default.createElement("div", {
              className: "section-header"
            }, _react.default.createElement("h2", {
              className: "section-title"
            }, "Ticket Summarization"), _react.default.createElement(_components.Link, {
              href: "/projects/1t3gr1ty-123a-4612-b6fd-59cb74211d0/prompts/view/itegrity.summary",
              rel: "noopener noreferrer",
              className: "btn btn-secondary btn-sm"
            }, "Edit Prompt")), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "summary-object-type",
              className: "form-label"
            }, "Object Type"), _react.default.createElement("select", {
              id: "summary-object-type",
              value: objectType,
              onChange: e => setObjectType(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "cis"
            }, "CIs"), _react.default.createElement("option", {
              value: "incidents"
            }, "Incidents"), _react.default.createElement("option", {
              value: "servicereqs"
            }, "Service Requests"), _react.default.createElement("option", {
              value: "changes"
            }, "Changes"))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "update-recid",
              className: "form-label"
            }, "Record RecId"), _react.default.createElement("input", {
              type: "text",
              id: "update-recid",
              value: recId,
              onChange: e => setRecId(e.target.value),
              className: "form-input"
            })), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "ai-model-incident",
              className: "form-label"
            }, "AI Model"), _react.default.createElement("div", {
              className: "form-row"
            }, _react.default.createElement("select", {
              id: "ai-model-incident",
              value: model,
              onChange: e => setModel(e.target.value),
              className: "form-select"
            }, _react.default.createElement("option", {
              value: "llama3.2:3b"
            }, "llama3.2:3b"), _react.default.createElement("option", {
              value: "mistral"
            }, "mistral"), _react.default.createElement("option", {
              value: "falcon3:3b"
            }, "falcon3:3b"), _react.default.createElement("option", {
              value: "falcon3:7b"
            }, "falcon3:7b"), _react.default.createElement("option", {
              value: "falcon3:10b"
            }, "falcon3:10b")), _react.default.createElement("button", {
              onClick: handleGenerateSummary,
              className: "btn btn-blue",
              disabled: store.loading
            }, "Generate with AI"))), _react.default.createElement("div", {
              className: "form-group"
            }, _react.default.createElement("label", {
              htmlFor: "update-summary",
              className: "form-label"
            }, "New Summary"), _react.default.createElement("textarea", {
              id: "update-summary",
              rows: 4,
              value: summary,
              onChange: e => setSummary(e.target.value),
              className: "form-textarea"
            })), _react.default.createElement("button", {
              onClick: handleUpdateIncident,
              className: "btn btn-green btn-full",
              disabled: store.loading
            }, "Update Incident"));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store",
        "from": "StoreManager",
        "name": "StoreManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0Iiwic2V0QWN0aXZlU2VjdGlvbiIsImhpZGUiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInByb3BlcnRpZXMiLCJzZXQiLCJhcGlLZXkiLCJnZXRTdG9yZWRBcGlLZXkiLCJpdmFudGlVcmwiLCJjdXJyZW50T2JqZWN0VHlwZSIsImN1cnJlbnRSZWNJZCIsImFjdGl2ZVNlY3Rpb24iLCJsb2FkaW5nIiwicmVzcG9uc2UiLCJzdGF0dXNNZXNzYWdlIiwiZXJyb3IiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVBcGlLZXkiLCJzZXRJdGVtIiwic2V0QXBpS2V5Iiwic2VjdGlvbiIsInNldEN1cnJlbnRPYmplY3RUeXBlIiwib2JqZWN0VHlwZSIsInNldEN1cnJlbnRSZWNJZCIsInJlY0lkIiwic2V0TG9hZGluZyIsInNldFJlc3BvbnNlIiwic2V0U3RhdHVzTWVzc2FnZSIsIm1lc3NhZ2UiLCJpc0Vycm9yIiwiY2xlYXJTdGF0dXMiLCJhcGlGZXRjaCIsInVybCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwidGV4dCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yTWVzc2FnZSIsInJlYWRBbGwiLCJtZXRob2QiLCJyZWFkQnlGaWx0ZXIiLCJmaWx0ZXJRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlYWRCeUlkIiwiZ2VuZXJhdGVTdW1tYXJ5IiwibW9kZWwiLCJwYXlsb2FkIiwicmVjaWQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdW1tYXJ5IiwidXBkYXRlSW5jaWRlbnQiLCJTeW1wdG9tIiwiZ2VuZXJhdGVLbm93bGVkZ2UiLCJ0aXRsZSIsInByb21wdCIsImRldGFpbCIsInJlc3BvbnNlRGF0YSIsImdlbmVyYXRlZFRpdGxlIiwiY3JlYXRlS25vd2xlZGdlIiwiY29sbGVjdGlvbiIsImNhdGVnb3J5IiwiZGV0YWlscyIsIkNvbGxlY3Rpb24iLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGV0YWlscyIsIl9zdWJtZW51IiwiX25hdkxpbmsiLCJBc2lkZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJTdWJtZW51IiwiTmF2TGluayIsImRhdGFUYXJnZXQiLCJocmVmIiwidGFyZ2V0IiwiX2FzaWRlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0FjdGl2ZSIsImxpbmtVcmwiLCJMaW5rIiwib25DbGljayIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlU3VibWVudSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaG9va3MiLCJfbWFpbkNvbnRlbnQiLCJEYXNoYm9hcmRDb250ZW50IiwidXNlU3RvcmUiLCJNYWluQ29udGVudCIsIlByb3ZpZGVyIiwiX2FwaUNvbmZpZ3VyYXRpb24iLCJfcmVhZEFsbCIsIl9yZWFkQnlGaWx0ZXIiLCJfcmVhZEJ5SWQiLCJfdGlja2V0U3VtbWFyaXphdGlvbiIsIl9rbm93bGVkZ2VHZW5lcmF0aW9uIiwiX3Jlc3BvbnNlU2VjdGlvbiIsInJlbmRlckFjdGl2ZVNlY3Rpb24iLCJBcGlDb25maWd1cmF0aW9uIiwiUmVhZEFsbCIsIlJlYWRCeUZpbHRlciIsIlJlYWRCeUlkIiwiVGlja2V0U3VtbWFyaXphdGlvbiIsIktub3dsZWRnZUdlbmVyYXRpb24iLCJSZXNwb25zZVNlY3Rpb24iLCJyZW5kZXJSZXNwb25zZSIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlclRhYmxlIiwicmVuZGVyU2luZ2xlT2JqZWN0IiwiZGF0YUFycmF5IiwibGVuZ3RoIiwia2V5cyIsIm1hcCIsImhlYWRlciIsImtleSIsIml0ZW0iLCJpbmRleCIsIlJlY0lkIiwiaGFuZGxlUm93Q2xpY2siLCJoYW5kbGVUaWNrZXRTdW1tYXJpemF0aW9uIiwiaGFuZGxlS25vd2xlZGdlR2VuZXJhdGlvbiIsImhhbmRsZUFwaUtleUNoYW5nZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInNldE9iamVjdFR5cGUiLCJzZXRSZWNJZCIsInNldE1vZGVsIiwic2V0Q29sbGVjdGlvbiIsInNldENhdGVnb3J5Iiwic2V0VGl0bGUiLCJzZXREZXRhaWxzIiwidXNlRWZmZWN0IiwiaGFuZGxlR2VuZXJhdGVLbm93bGVkZ2UiLCJyZXN1bHQiLCJoYW5kbGVDcmVhdGVLbm93bGVkZ2UiLCJyZWwiLCJkaXNhYmxlZCIsInJvd3MiLCJoYW5kbGVGZXRjaERhdGEiLCJzZXRGaWx0ZXJRdWVyeSIsInNldFN1bW1hcnkiLCJoYW5kbGVHZW5lcmF0ZVN1bW1hcnkiLCJnZW5lcmF0ZWRTdW1tYXJ5IiwiaGFuZGxlVXBkYXRlSW5jaWRlbnQiXSwic291cmNlcyI6WyIvL3RzL2NvbnRleHQudHMiLCIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9hc2lkZS9hc2lkZS50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNpZGUvbmF2LWxpbmsudHN4IiwiLy90cy92aWV3cy9hc2lkZS9zdWJtZW51LnRzeCIsIi8vdHlwZXMudHMvIiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL21haW4tY29udGVudC50c3giLCIvL3RzL3ZpZXdzL3Jlc3BvbnNlLXNlY3Rpb24udHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy9hcGktY29uZmlndXJhdGlvbi50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL2tub3dsZWRnZS1nZW5lcmF0aW9uLnRzeCIsIi8vdHMvdmlld3Mvc2VjdGlvbnMvcmVhZC1hbGwudHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy9yZWFkLWJ5LWZpbHRlci50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL3JlYWQtYnktaWQudHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy90aWNrZXQtc3VtbWFyaXphdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU9PLE1BQU1DLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUdGLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxhQUFhLENBQTBCLEVBQW9CLENBQUM7VUFFeEYsTUFBTUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTU4sTUFBQSxDQUFBSSxPQUFLLENBQUNHLFVBQVUsQ0FBQ0wsYUFBYSxDQUFDO1VBQUNDLE9BQUEsQ0FBQUcsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVHRFLElBQUFFLEtBQUEsR0FBQVAsT0FBQTtVQUNBLElBQUFRLE1BQUEsR0FBQVIsT0FBQTtVQUNBLElBQUFTLE1BQUEsR0FBQVQsT0FBQTtVQUVPO1VBQVUsTUFDWFUsVUFBVyxTQUFRSCxLQUFBLENBQUFJLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBR05DLFdBQVdBLENBQUE7Y0FDVixJQUFJ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