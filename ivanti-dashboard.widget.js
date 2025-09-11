System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/stores/base", "pragmate-ui@1.0.8/components", "@beyond-js/react-18-widgets@1.1.6/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, StoreManager, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0
  });
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_4 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_5 = _aimpactPlatform016StoresBase;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_7 = _beyondJsReact18Widgets116Hooks;
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
          "vspecifier": "@aimpact/platform@0.1.6/ivanti-dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/platform/stores/base', dependency_5], ['pragmate-ui/components', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7]]);
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
        hash: 662848167,
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
            const [openSubmenu, setOpenSubmenu] = (0, _react.useState)(null);
            const handleSubmenuToggle = (title, isOpen) => {
              if (isOpen) {
                setOpenSubmenu(title);
              } else {
                setOpenSubmenu(null);
              }
            };
            return _react.default.createElement("aside", {
              className: "dashboard-aside"
            }, _react.default.createElement("div", {
              className: "aside-container"
            }, _react.default.createElement("nav", {
              className: "main-nav"
            }, _react.default.createElement("ul", null, _react.default.createElement(_submenu.Submenu, {
              title: "Tickets",
              isOpen: openSubmenu === 'Tickets',
              onToggle: isOpen => handleSubmenuToggle('Tickets', isOpen)
            }, _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-read-all"
            }, "All"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-read-filter"
            }, "By Filter"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-read-recid"
            }, "By ID"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-update-incident"
            }, "Ticket Summarization")), _react.default.createElement(_submenu.Submenu, {
              title: "Knowledge",
              isOpen: openSubmenu === 'Knowledge',
              onToggle: isOpen => handleSubmenuToggle('Knowledge', isOpen)
            }, _react.default.createElement(_navLink.NavLink, {
              href: "https://dev.app.rvd.ai/kb/articles/list",
              target: "_blank"
            }, "Articles"), _react.default.createElement(_navLink.NavLink, {
              href: "https://dev.app.rvd.ai/kb/sections/list",
              target: "_blank"
            }, "Sections"), _react.default.createElement(_navLink.NavLink, {
              dataTarget: "action-create-knowledge"
            }, "Knowledge Generation")), _react.default.createElement(_submenu.Submenu, {
              title: "Self Service Agent",
              isOpen: openSubmenu === 'Self Service Agent',
              onToggle: isOpen => handleSubmenuToggle('Self Service Agent', isOpen)
            }, _react.default.createElement(_navLink.NavLink, {
              href: "/playground"
            }, "Edit"), _react.default.createElement(_navLink.NavLink, {
              href: "https://dev.app.rvd.ai/kb/sections/view/cf907813-3c11-4a51-9b58-74d056986b02",
              target: "_blank"
            }, "Test")), _react.default.createElement(_navLink.NavLink, {
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
        hash: 1371666498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Submenu = Submenu;
          var _react = require("react");
          function Submenu({
            title,
            children,
            isOpen = false,
            onToggle
          }) {
            const toggleSubmenu = () => {
              if (onToggle) {
                onToggle(!isOpen);
              }
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
        hash: 3652407565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/tooltip
      ******************************************/

      ims.set('./views/components/tooltip', {
        hash: 2408565424,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = Tooltip;
          var _react = require("react");
          var _context = require("../../context");
          function Tooltip({
            recId,
            objectType,
            x,
            y,
            onClose
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const tooltipRef = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              const handleClickOutside = event => {
                if (!tooltipRef.current) return;
                const target = event.target;
                console.log(event, 'handleClickOutside', tooltipRef.current, event.target, event.currentTarget, !tooltipRef.current.contains(event.target), tooltipRef.current === target);
                // Verificar si el click fue dentro del tooltip o en sus hijos
                const isClickInsideTooltip = tooltipRef.current.contains(target) || tooltipRef.current === target;
                if (!isClickInsideTooltip) {
                  onClose();
                }
              };
              document.addEventListener('onclick', handleClickOutside);
              return () => document.removeEventListener('onclick', handleClickOutside);
            }, [onClose]);
            const handleAction = action => {
              switch (action) {
                case 'view':
                  store.setActiveSection('action-read-recid');
                  store.setCurrentRecId(recId);
                  store.setCurrentObjectType(objectType);
                  break;
                case 'summarize':
                  store.setActiveSection('action-update-incident');
                  store.setCurrentRecId(recId);
                  store.setCurrentObjectType(objectType);
                  break;
                case 'knowledgify':
                  store.setActiveSection('action-create-knowledge');
                  store.setCurrentRecId(recId);
                  store.setCurrentObjectType(objectType);
                  break;
              }
              onClose();
            };
            return _react.default.createElement("div", {
              ref: tooltipRef,
              className: "tooltip",
              style: {
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                zIndex: 10
              }
            }, _react.default.createElement("div", {
              className: "tooltip-item",
              onClick: () => handleAction('view')
            }, "Read by Id"), _react.default.createElement("div", {
              className: "tooltip-item",
              onClick: () => handleAction('summarize')
            }, "Summary"), _react.default.createElement("div", {
              className: "tooltip-item",
              onClick: () => handleAction('knowledgify')
            }, "Knowledge"));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 961823254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _aside = require("./aside");
          var _mainContent = require("./main-content");
          var _tooltip = require("./components/tooltip");
          var _context = require("../context");
          function DashboardContent() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [tooltip, setTooltip] = (0, _react.useState)(null);
            (0, _hooks.useStore)(store);
            return _react.default.createElement("div", {
              className: "ivanti-dashboard"
            }, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement("h1", {
              className: "dashboard-title"
            }, "MSP Agents Dashboard")), _react.default.createElement("div", {
              className: "dashboard-layout"
            }, _react.default.createElement(_aside.Aside, null), _react.default.createElement(_mainContent.MainContent, {
              onRowClick: setTooltip
            })), tooltip && _react.default.createElement(_tooltip.Tooltip, {
              recId: tooltip.recId,
              objectType: tooltip.objectType,
              x: tooltip.x,
              y: tooltip.y,
              onClose: () => setTooltip(null)
            }));
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
        hash: 2261946853,
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
          function MainContent({
            onRowClick
          }) {
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
            }, renderActiveSection()), store.activeSection !== 'action-config' && _react.default.createElement(_responseSection.ResponseSection, {
              onRowClick: onRowClick
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/response-section
      ****************************************/

      ims.set('./views/response-section', {
        hash: 834216845,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResponseSection = ResponseSection;
          var _react = require("react");
          var _context = require("../context");
          function ResponseSection({
            onRowClick
          }) {
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
                onClick: e => item.RecId && handleRowClick(e, item.RecId, store.currentObjectType)
              }, headers.map(header => _react.default.createElement("td", {
                key: header,
                className: "table-cell"
              }, typeof item[header] === 'object' ? JSON.stringify(item[header]) : item[header]))))));
            };
            const handleRowClick = (e, recId, objectType) => {
              e.stopPropagation();
              onRowClick({
                recId,
                objectType,
                x: e.pageX,
                y: e.pageY
              });
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
        hash: 4016748389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.KnowledgeGeneration = KnowledgeGeneration;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
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
              href: "/prompts/management?projectId=1t3gr1ty-123a-4612-b6fd-59cb74211d0&itegrity.knowledgebase",
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
            }, "falcon3:10b")), _react.default.createElement(_components.Button, {
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
            })), _react.default.createElement(_components.Button, {
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
        hash: 1743537619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReadAll = ReadAll;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            }, "Changes")), _react.default.createElement(_components.Button, {
              onClick: handleFetchData,
              variant: "primary",
              disabled: store.loading
            }, "Fetch Data")));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/sections/read-by-filter
      ***********************************************/

      ims.set('./views/sections/read-by-filter', {
        hash: 956481240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReadByFilter = ReadByFilter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            }, "Impact eq 'High'"))), _react.default.createElement(_components.Button, {
              onClick: handleFetchData,
              variant: "primary",
              className: "btn-full",
              disabled: store.loading
            }, "Fetch Filtered Data"));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/sections/read-by-id
      *******************************************/

      ims.set('./views/sections/read-by-id', {
        hash: 3644570137,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReadById = ReadById;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            })), _react.default.createElement(_components.Button, {
              onClick: handleFetchData,
              variant: "primary",
              className: "btn-full",
              disabled: store.loading
            }, "Fetch by RecId"));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/sections/ticket-summarization
      *****************************************************/

      ims.set('./views/sections/ticket-summarization', {
        hash: 2211762578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TicketSummarization = TicketSummarization;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
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
              href: "/prompts/management?projectId=1t3gr1ty-123a-4612-b6fd-59cb74211d0&promptId=itegrity.summary",
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
            }, "falcon3:10b")), _react.default.createElement(_components.Button, {
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
            })), _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0Iiwic2V0QWN0aXZlU2VjdGlvbiIsImhpZGUiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInByb3BlcnRpZXMiLCJzZXQiLCJhcGlLZXkiLCJnZXRTdG9yZWRBcGlLZXkiLCJpdmFudGlVcmwiLCJjdXJyZW50T2JqZWN0VHlwZSIsImN1cnJlbnRSZWNJZCIsImFjdGl2ZVNlY3Rpb24iLCJsb2FkaW5nIiwicmVzcG9uc2UiLCJzdGF0dXNNZXNzYWdlIiwiZXJyb3IiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVBcGlLZXkiLCJzZXRJdGVtIiwic2V0QXBpS2V5Iiwic2VjdGlvbiIsInNldEN1cnJlbnRPYmplY3RUeXBlIiwib2JqZWN0VHlwZSIsInNldEN1cnJlbnRSZWNJZCIsInJlY0lkIiwic2V0TG9hZGluZyIsInNldFJlc3BvbnNlIiwic2V0U3RhdHVzTWVzc2FnZSIsIm1lc3NhZ2UiLCJpc0Vycm9yIiwiY2xlYXJTdGF0dXMiLCJhcGlGZXRjaCIsInVybCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwidGV4dCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yTWVzc2FnZSIsInJlYWRBbGwiLCJtZXRob2QiLCJyZWFkQnlGaWx0ZXIiLCJmaWx0ZXJRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlYWRCeUlkIiwiZ2VuZXJhdGVTdW1tYXJ5IiwibW9kZWwiLCJwYXlsb2FkIiwicmVjaWQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdW1tYXJ5IiwidXBkYXRlSW5jaWRlbnQiLCJTeW1wdG9tIiwiZ2VuZXJhdGVLbm93bGVkZ2UiLCJ0aXRsZSIsInByb21wdCIsImRldGFpbCIsInJlc3BvbnNlRGF0YSIsImdlbmVyYXRlZFRpdGxlIiwiY3JlYXRlS25vd2xlZGdlIiwiY29sbGVjdGlvbiIsImNhdGVnb3J5IiwiZGV0YWlscyIsIkNvbGxlY3Rpb24iLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGV0YWlscyIsIl9zdWJtZW51IiwiX25hdkxpbmsiLCJBc2lkZSIsIm9wZW5TdWJtZW51Iiwic2V0T3BlblN1Ym1lbnUiLCJ1c2VTdGF0ZSIsImhhbmRsZVN1Ym1lbnVUb2dnbGUiLCJpc09wZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiU3VibWVudSIsIm9uVG9nZ2xlIiwiTmF2TGluayIsImRhdGFUYXJnZXQiLCJocmVmIiwidGFyZ2V0IiwiX2FzaWRlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0FjdGl2ZSIsImxpbmtVcmwiLCJMaW5rIiwib25DbGljayIsInRvZ2dsZVN1Ym1lbnUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiVG9vbHRpcCIsIngiLCJ5Iiwib25DbG9zZSIsInRvb2x0aXBSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbnMiLCJpc0NsaWNrSW5zaWRlVG9vbHRpcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVBY3Rpb24iLCJhY3Rpb24iLCJyZWYiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInpJbmRleCIsIl9ob29rcyIsIl9tYWluQ29udGVudCIsIl90b29sdGlwIiwiRGFzaGJvYXJkQ29udGVudCIsInRvb2x0aXAiLCJzZXRUb29sdGlwIiwidXNlU3RvcmUiLCJNYWluQ29udGVudCIsIm9uUm93Q2xpY2siLCJQcm92aWRlciIsIl9hcGlDb25maWd1cmF0aW9uIiwiX3JlYWRBbGwiLCJfcmVhZEJ5RmlsdGVyIiwiX3JlYWRCeUlkIiwiX3RpY2tldFN1bW1hcml6YXRpb24iLCJfa25vd2xlZGdlR2VuZXJhdGlvbiIsIl9yZXNwb25zZVNlY3Rpb24iLCJyZW5kZXJBY3RpdmVTZWN0aW9uIiwiQXBpQ29uZmlndXJhdGlvbiIsIlJlYWRBbGwiLCJSZWFkQnlGaWx0ZXIiLCJSZWFkQnlJZCIsIlRpY2tldFN1bW1hcml6YXRpb24iLCJLbm93bGVkZ2VHZW5lcmF0aW9uIiwiUmVzcG9uc2VTZWN0aW9uIiwicmVuZGVyUmVzcG9uc2UiLCJBcnJheSIsImlzQXJyYXkiLCJyZW5kZXJUYWJsZSIsInJlbmRlclNpbmdsZU9iamVjdCIsImRhdGFBcnJheSIsImxlbmd0aCIsImtleXMiLCJtYXAiLCJoZWFkZXIiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJSZWNJZCIsImhhbmRsZVJvd0NsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRpY2tldFN1bW1hcml6YXRpb24iLCJoYW5kbGVLbm93bGVkZ2VHZW5lcmF0aW9uIiwiaGFuZGxlQXBpS2V5Q2hhbmdlIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwic2V0T2JqZWN0VHlwZSIsInNldFJlY0lkIiwic2V0TW9kZWwiLCJzZXRDb2xsZWN0aW9uIiwic2V0Q2F0ZWdvcnkiLCJzZXRUaXRsZSIsInNldERldGFpbHMiLCJoYW5kbGVHZW5lcmF0ZUtub3dsZWRnZSIsInJlc3VsdCIsImhhbmRsZUNyZWF0ZUtub3dsZWRnZSIsInJlbCIsIkJ1dHRvbiIsImRpc2FibGVkIiwicm93cyIsImhhbmRsZUZldGNoRGF0YSIsInZhcmlhbnQiLCJzZXRGaWx0ZXJRdWVyeSIsInNldFN1bW1hcnkiLCJoYW5kbGVHZW5lcmF0ZVN1bW1hcnkiLCJnZW5lcmF0ZWRTdW1tYXJ5IiwiaGFuZGxlVXBkYXRlSW5jaWRlbnQiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50cyIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FzaWRlL2FzaWRlLnRzeCIsIi90cy92aWV3cy9hc2lkZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNpZGUvbmF2LWxpbmsudHN4IiwiL3RzL3ZpZXdzL2FzaWRlL3N1Ym1lbnUudHN4IiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvdG9vbHRpcC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21haW4tY29udGVudC50c3giLCIvdHMvdmlld3MvcmVzcG9uc2Utc2VjdGlvbi50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvYXBpLWNvbmZpZ3VyYXRpb24udHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL2tub3dsZWRnZS1nZW5lcmF0aW9uLnRzeCIsIi90cy92aWV3cy9zZWN0aW9ucy9yZWFkLWFsbC50c3giLCIvdHMvdmlld3Mvc2VjdGlvbnMvcmVhZC1ieS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3JlYWQtYnktaWQudHN4IiwiL3RzL3ZpZXdzL3NlY3Rpb25zL3RpY2tldC1zdW1tYXJpemF0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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