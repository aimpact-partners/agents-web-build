System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "@aimpact/platform@0.1.6/shared/components/floating-actions", "lucide-react@0.542.0", "@aimpact/platform@0.1.6/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, StoreManager, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
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
    }, function (_aimpactPlatform016StoresBase) {
      dependency_4 = _aimpactPlatform016StoresBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactPlatform016SharedComponentsFloatingActions) {
      dependency_6 = _aimpactPlatform016SharedComponentsFloatingActions;
    }, function (_lucideReact2) {
      dependency_7 = _lucideReact2;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_8 = _aimpactPlatform016SharedHooks;
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
          "vspecifier": "@aimpact/platform@0.1.6/components",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/stores/base', dependency_4], ['react', dependency_5], ['@aimpact/platform/shared/components/floating-actions', dependency_6], ['lucide-react', dependency_7], ['@aimpact/platform/shared/hooks', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "components-page",
        "vspecifier": "@aimpact/platform@0.1.6/components.widget",
        "is": "page",
        "route": "/ui/components",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/components.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 858749161,
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
              // Initialize component selection from URL params
              const urlParams = new URLSearchParams(window.location.search);
              const component = urlParams.get('component') || 'floating-actions';
              this.#store.setSelectedComponent(component);
              this.#store.setQueryString(`?component=${component}`);
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
        hash: 2784159418,
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
                properties: ['selectedComponent', 'queryString']
              });
            }
            setSelectedComponent(componentName) {
              this.set({
                selectedComponent: componentName
              });
            }
            setQueryString(queryString) {
              this.set({
                queryString: queryString
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/content
      *******************************/

      ims.set('./views/content', {
        hash: 1467701406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ComponentsContent = ComponentsContent;
          var _react = require("react");
          var _floatingActionsDemo = require("./demos/floating-actions-demo");
          function ComponentsContent(props) {
            const {
              selectedComponent
            } = props;
            const renderComponentContent = () => {
              switch (selectedComponent) {
                case 'floating-actions':
                  return _react.default.createElement(_floatingActionsDemo.FloatingActionsDemo, null);
                default:
                  return _react.default.createElement("div", {
                    className: "component-not-found"
                  }, _react.default.createElement("h3", null, "Component Not Found"), _react.default.createElement("p", null, "The selected component \"", selectedComponent, "\" is not available yet."));
              }
            };
            return _react.default.createElement("main", {
              className: "components-main"
            }, _react.default.createElement("header", {
              className: "main-header"
            }, _react.default.createElement("h1", null, "Component Testing & Preview"), _react.default.createElement("p", null, "Select a component from the sidebar to test its functionality and appearance.")), _react.default.createElement("div", {
              className: "main-content"
            }, renderComponentContent()));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/demos/floating-actions-demo
      ***************************************************/

      ims.set('./views/demos/floating-actions-demo', {
        hash: 1035701678,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FloatingActionsDemo = FloatingActionsDemo;
          var _react = require("react");
          var _floatingActions = require("@aimpact/platform/shared/components/floating-actions");
          var _lucideReact = require("lucide-react");
          function FloatingActionsDemo() {
            const actions = [{
              id: 'add',
              icon: _react.default.createElement(_lucideReact.Plus, {
                size: 20
              }),
              label: 'Add Item',
              tooltip: 'Create a new item',
              onClick: () => console.log('Add clicked')
            }, {
              id: 'edit',
              icon: _react.default.createElement(_lucideReact.Edit, {
                size: 20
              }),
              label: 'Edit',
              tooltip: 'Edit current item',
              onClick: () => console.log('Edit clicked')
            }, {
              id: 'delete',
              icon: _react.default.createElement(_lucideReact.Delete, {
                size: 20
              }),
              label: 'Delete',
              tooltip: 'Delete item',
              onClick: () => console.log('Delete clicked')
            }, {
              id: 'share',
              icon: _react.default.createElement(_lucideReact.Share, {
                size: 20
              }),
              label: 'Share',
              tooltip: 'Share item',
              onClick: () => console.log('Share clicked')
            }];
            return _react.default.createElement("div", {
              className: "component-demo"
            }, _react.default.createElement("h3", null, "Floating Actions Component"), _react.default.createElement("p", null, "A customizable floating action button that expands to show multiple action items."), _react.default.createElement("div", {
              className: "demo-controls"
            }, _react.default.createElement("h4", null, "Demo Controls"), _react.default.createElement("div", {
              className: "control-group"
            }, _react.default.createElement("label", null, "Position:"), _react.default.createElement("select", {
              defaultValue: "bottom-right",
              onChange: e => {
                const demo = document.querySelector('.floating-actions');
                if (demo) {
                  demo.className = `floating-actions ${e.target.value}`;
                }
              }
            }, _react.default.createElement("option", {
              value: "top-left"
            }, "Top Left"), _react.default.createElement("option", {
              value: "top-right"
            }, "Top Right"), _react.default.createElement("option", {
              value: "bottom-left"
            }, "Bottom Left"), _react.default.createElement("option", {
              value: "bottom-right"
            }, "Bottom Right")))), _react.default.createElement("div", {
              className: "demo-area"
            }, _react.default.createElement(_floatingActions.FloatingActions, {
              actions: actions,
              position: "bottom-right",
              onToggle: isOpen => console.log('Menu:', isOpen ? 'opened' : 'closed')
            })), _react.default.createElement("div", {
              className: "component-info"
            }, _react.default.createElement("h4", null, "Component Information"), _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("strong", null, "Type:"), " UI Component"), _react.default.createElement("li", null, _react.default.createElement("strong", null, "Category:"), " Navigation"), _react.default.createElement("li", null, _react.default.createElement("strong", null, "Props:"), " actions, position, isOpen, onToggle, className"), _react.default.createElement("li", null, _react.default.createElement("strong", null, "Features:"), " Multiple positions, smooth animations, responsive design"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1048841766,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _sidebar = require("./sidebar");
          var _content = require("./content");
          /*bundle*/
          function View({
            store
          }) {
            const [selectedComponent, setSelectedComponent] = (0, _react.useState)(store.selectedComponent);
            const [queryString, setQueryString] = (0, _react.useState)(store.queryString);
            (0, _hooks.useStore)(store);
            (0, _react.useEffect)(() => {
              const urlParams = new URLSearchParams(window.location.search);
              const component = urlParams.get('component') || 'floating-actions';
              setSelectedComponent(component);
              setQueryString(`?component=${component}`);
            }, []);
            const handleComponentSelect = componentName => {
              setSelectedComponent(componentName);
              const newQueryString = `?component=${componentName}`;
              setQueryString(newQueryString);
              store.setSelectedComponent(componentName);
              store.setQueryString(newQueryString);
              window.history.pushState({}, '', `/components${newQueryString}`);
            };
            return _react.default.createElement("div", {
              className: "components-page"
            }, _react.default.createElement(_sidebar.ComponentsSidebar, {
              selectedComponent: selectedComponent,
              queryString: queryString,
              onComponentSelect: handleComponentSelect
            }), _react.default.createElement(_content.ComponentsContent, {
              selectedComponent: selectedComponent
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/sidebar
      *******************************/

      ims.set('./views/sidebar', {
        hash: 3029244833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ComponentsSidebar = ComponentsSidebar;
          var _react = require("react");
          var _lucideReact = require("lucide-react");
          function ComponentsSidebar(props) {
            const {
              selectedComponent,
              queryString,
              onComponentSelect
            } = props;
            return _react.default.createElement("aside", {
              className: "components-sidebar"
            }, _react.default.createElement("div", {
              className: "sidebar-header"
            }, _react.default.createElement("h2", null, "Components"), _react.default.createElement("p", null, "Test and preview available components")), _react.default.createElement("nav", {
              className: "components-nav"
            }, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("button", {
              className: `nav-item ${selectedComponent === 'floating-actions' ? 'active' : ''}`,
              onClick: () => onComponentSelect('floating-actions')
            }, _react.default.createElement(_lucideReact.Layers, {
              size: 20
            }), _react.default.createElement("span", null, "Floating Actions"))), _react.default.createElement("li", null, _react.default.createElement("button", {
              className: "nav-item disabled",
              disabled: true,
              title: "Coming soon"
            }, _react.default.createElement(_lucideReact.Palette, {
              size: 20
            }), _react.default.createElement("span", null, "Color Picker"))), _react.default.createElement("li", null, _react.default.createElement("button", {
              className: "nav-item disabled",
              disabled: true,
              title: "Coming soon"
            }, _react.default.createElement(_lucideReact.Code, {
              size: 20
            }), _react.default.createElement("span", null, "Code Editor"))), _react.default.createElement("li", null, _react.default.createElement("button", {
              className: "nav-item disabled",
              disabled: true,
              title: "Coming soon"
            }, _react.default.createElement(_lucideReact.Settings, {
              size: 20
            }), _react.default.createElement("span", null, "Settings Panel"))))), _react.default.createElement("div", {
              className: "sidebar-footer"
            }, _react.default.createElement("p", null, "Current URL: ", _react.default.createElement("code", null, "/components", queryString))));
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
        (require || prop === 'StoreManager') && _export("StoreManager", StoreManager = require ? require('./store').StoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiY29tcG9uZW50IiwiZ2V0Iiwic2V0U2VsZWN0ZWRDb21wb25lbnQiLCJzZXRRdWVyeVN0cmluZyIsImhpZGUiLCJleHBvcnRzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwiY29tcG9uZW50TmFtZSIsInNldCIsInNlbGVjdGVkQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJfcmVhY3QiLCJfZmxvYXRpbmdBY3Rpb25zRGVtbyIsIkNvbXBvbmVudHNDb250ZW50IiwicHJvcHMiLCJyZW5kZXJDb21wb25lbnRDb250ZW50IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGbG9hdGluZ0FjdGlvbnNEZW1vIiwiY2xhc3NOYW1lIiwiX2Zsb2F0aW5nQWN0aW9ucyIsIl9sdWNpZGVSZWFjdCIsImFjdGlvbnMiLCJpZCIsImljb24iLCJQbHVzIiwic2l6ZSIsImxhYmVsIiwidG9vbHRpcCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiRWRpdCIsIkRlbGV0ZSIsIlNoYXJlIiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJlIiwiZGVtbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsInZhbHVlIiwiRmxvYXRpbmdBY3Rpb25zIiwicG9zaXRpb24iLCJvblRvZ2dsZSIsImlzT3BlbiIsIl9ob29rcyIsIl9zaWRlYmFyIiwiX2NvbnRlbnQiLCJ1c2VTdGF0ZSIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ29tcG9uZW50U2VsZWN0IiwibmV3UXVlcnlTdHJpbmciLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiQ29tcG9uZW50c1NpZGViYXIiLCJvbkNvbXBvbmVudFNlbGVjdCIsIkxheWVycyIsImRpc2FibGVkIiwidGl0bGUiLCJQYWxldHRlIiwiQ29kZSIsIlNldHRpbmdzIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvY29udGVudC50c3giLCIvL3RzL3ZpZXdzL2RlbW9zL2Zsb2F0aW5nLWFjdGlvbnMtZGVtby50c3giLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3Mvc2lkZWJhci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUVBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0g7Y0FDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsZUFBZSxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2NBQzdELE1BQU1DLFNBQVMsR0FBR0ws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