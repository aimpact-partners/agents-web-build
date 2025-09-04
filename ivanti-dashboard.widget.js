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
        hash: 3078498900,
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
        hash: 2765644944,
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
        hash: 3448037323,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInRhYiIsInVyaSIsInFzIiwiZ2V0Iiwic2V0QWN0aXZlU2VjdGlvbiIsImhpZGUiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm1vZHVsZSIsInNwZWNpZmllciIsInByb3BlcnRpZXMiLCJzZXQiLCJhcGlLZXkiLCJnZXRTdG9yZWRBcGlLZXkiLCJpdmFudGlVcmwiLCJjdXJyZW50T2JqZWN0VHlwZSIsImN1cnJlbnRSZWNJZCIsImFjdGl2ZVNlY3Rpb24iLCJsb2FkaW5nIiwicmVzcG9uc2UiLCJzdGF0dXNNZXNzYWdlIiwiZXJyb3IiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVBcGlLZXkiLCJzZXRJdGVtIiwic2V0QXBpS2V5Iiwic2VjdGlvbiIsInNldEN1cnJlbnRPYmplY3RUeXBlIiwib2JqZWN0VHlwZSIsInNldEN1cnJlbnRSZWNJZCIsInJlY0lkIiwic2V0TG9hZGluZyIsInNldFJlc3BvbnNlIiwic2V0U3RhdHVzTWVzc2FnZSIsIm1lc3NhZ2UiLCJpc0Vycm9yIiwiY2xlYXJTdGF0dXMiLCJhcGlGZXRjaCIsInVybCIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwidGV4dCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yTWVzc2FnZSIsInJlYWRBbGwiLCJtZXRob2QiLCJyZWFkQnlGaWx0ZXIiLCJmaWx0ZXJRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlYWRCeUlkIiwiZ2VuZXJhdGVTdW1tYXJ5IiwibW9kZWwiLCJwYXlsb2FkIiwicmVjaWQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdW1tYXJ5IiwidXBkYXRlSW5jaWRlbnQiLCJTeW1wdG9tIiwiZ2VuZXJhdGVLbm93bGVkZ2UiLCJ0aXRsZSIsInByb21wdCIsImRldGFpbCIsInJlc3BvbnNlRGF0YSIsImdlbmVyYXRlZFRpdGxlIiwiY3JlYXRlS25vd2xlZGdlIiwiY29sbGVjdGlvbiIsImNhdGVnb3J5IiwiZGV0YWlscyIsIkNvbGxlY3Rpb24iLCJDYXRlZ29yeSIsIlRpdGxlIiwiRGV0YWlscyIsIl9zdWJtZW51IiwiX25hdkxpbmsiLCJBc2lkZSIsIm9wZW5TdWJtZW51Iiwic2V0T3BlblN1Ym1lbnUiLCJ1c2VTdGF0ZSIsImhhbmRsZVN1Ym1lbnVUb2dnbGUiLCJpc09wZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiU3VibWVudSIsIm9uVG9nZ2xlIiwiTmF2TGluayIsImRhdGFUYXJnZXQiLCJocmVmIiwidGFyZ2V0IiwiX2FzaWRlIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0FjdGl2ZSIsImxpbmtVcmwiLCJMaW5rIiwib25DbGljayIsInRvZ2dsZVN1Ym1lbnUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiVG9vbHRpcCIsIngiLCJ5Iiwib25DbG9zZSIsInRvb2x0aXBSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbnMiLCJpc0NsaWNrSW5zaWRlVG9vbHRpcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVBY3Rpb24iLCJhY3Rpb24iLCJyZWYiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInpJbmRleCIsIl9ob29rcyIsIl9tYWluQ29udGVudCIsIl90b29sdGlwIiwiRGFzaGJvYXJkQ29udGVudCIsInRvb2x0aXAiLCJzZXRUb29sdGlwIiwidXNlU3RvcmUiLCJNYWluQ29udGVudCIsIm9uUm93Q2xpY2siLCJQcm92aWRlciIsIl9hcGlDb25maWd1cmF0aW9uIiwiX3JlYWRBbGwiLCJfcmVhZEJ5RmlsdGVyIiwiX3JlYWRCeUlkIiwiX3RpY2tldFN1bW1hcml6YXRpb24iLCJfa25vd2xlZGdlR2VuZXJhdGlvbiIsIl9yZXNwb25zZVNlY3Rpb24iLCJyZW5kZXJBY3RpdmVTZWN0aW9uIiwiQXBpQ29uZmlndXJhdGlvbiIsIlJlYWRBbGwiLCJSZWFkQnlGaWx0ZXIiLCJSZWFkQnlJZCIsIlRpY2tldFN1bW1hcml6YXRpb24iLCJLbm93bGVkZ2VHZW5lcmF0aW9uIiwiUmVzcG9uc2VTZWN0aW9uIiwicmVuZGVyUmVzcG9uc2UiLCJBcnJheSIsImlzQXJyYXkiLCJyZW5kZXJUYWJsZSIsInJlbmRlclNpbmdsZU9iamVjdCIsImRhdGFBcnJheSIsImxlbmd0aCIsImtleXMiLCJtYXAiLCJoZWFkZXIiLCJrZXkiLCJpdGVtIiwiaW5kZXgiLCJSZWNJZCIsImhhbmRsZVJvd0NsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRpY2tldFN1bW1hcml6YXRpb24iLCJoYW5kbGVLbm93bGVkZ2VHZW5lcmF0aW9uIiwiaGFuZGxlQXBpS2V5Q2hhbmdlIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwic2V0T2JqZWN0VHlwZSIsInNldFJlY0lkIiwic2V0TW9kZWwiLCJzZXRDb2xsZWN0aW9uIiwic2V0Q2F0ZWdvcnkiLCJzZXRUaXRsZSIsInNldERldGFpbHMiLCJoYW5kbGVHZW5lcmF0ZUtub3dsZWRnZSIsInJlc3VsdCIsImhhbmRsZUNyZWF0ZUtub3dsZWRnZSIsInJlbCIsIkJ1dHRvbiIsImRpc2FibGVkIiwicm93cyIsImhhbmRsZUZldGNoRGF0YSIsInZhcmlhbnQiLCJzZXRGaWx0ZXJRdWVyeSIsInNldFN1bW1hcnkiLCJoYW5kbGVHZW5lcmF0ZVN1bW1hcnkiLCJnZW5lcmF0ZWRTdW1tYXJ5IiwiaGFuZGxlVXBkYXRlSW5jaWRlbnQiXSwic291cmNlcyI6WyIvL3RzL2NvbnRleHQudHMiLCIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9hc2lkZS9hc2lkZS50c3giLCIvL3RzL3ZpZXdzL2FzaWRlL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNpZGUvbmF2LWxpbmsudHN4IiwiLy90cy92aWV3cy9hc2lkZS9zdWJtZW51LnRzeCIsIi8vdHlwZXMudHMvIiwiLy90cy92aWV3cy9jb21wb25lbnRzL3Rvb2x0aXAudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL21haW4tY29udGVudC50c3giLCIvL3RzL3ZpZXdzL3Jlc3BvbnNlLXNlY3Rpb24udHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy9hcGktY29uZmlndXJhdGlvbi50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL2tub3dsZWRnZS1nZW5lcmF0aW9uLnRzeCIsIi8vdHMvdmlld3Mvc2VjdGlvbnMvcmVhZC1hbGwudHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy9yZWFkLWJ5LWZpbHRlci50c3giLCIvL3RzL3ZpZXdzL3NlY3Rpb25zL3JlYWQtYnktaWQudHN4IiwiLy90cy92aWV3cy9zZWN0aW9ucy90aWNrZXQtc3VtbWFyaXphdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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