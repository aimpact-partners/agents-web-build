System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/stores/base", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "@aimpact/platform@0.1.6/shared/components/floating-actions", "lucide-react@0.542.0", "@beyond-js/react-18-widgets@1.1.6/hooks", "@beyond-js/kernel@0.1.14/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, StoreManager, ButtonsDemo, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    StoreManager: void 0,
    ButtonsDemo: void 0,
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
    }, function (_aimpactPlatform016StoresBase) {
      dependency_4 = _aimpactPlatform016StoresBase;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_6 = _pragmateUi108Components;
    }, function (_pragmateUi108Icons) {
      dependency_7 = _pragmateUi108Icons;
    }, function (_aimpactPlatform016SharedComponentsFloatingActions) {
      dependency_8 = _aimpactPlatform016SharedComponentsFloatingActions;
    }, function (_lucideReact2) {
      dependency_9 = _lucideReact2;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_10 = _beyondJsReact18Widgets116Hooks;
    }, function (_beyondJsKernel0114Routing) {
      dependency_11 = _beyondJsKernel0114Routing;
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
          "vspecifier": "@aimpact/platform@0.1.6/components",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/stores/base', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/icons', dependency_7], ['@aimpact/platform/shared/components/floating-actions', dependency_8], ['lucide-react', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@beyond-js/kernel/routing', dependency_11]]);
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
        hash: 3178390128,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ComponentsContent = ComponentsContent;
          var _react = require("react");
          var _floatingActionsDemo = require("./demos/floating-actions-demo");
          var _buttonsDemo = require("./demos/buttons-demo");
          function ComponentsContent(props) {
            const {
              selectedComponent
            } = props;
            const renderComponentContent = () => {
              switch (selectedComponent) {
                case 'floating-actions':
                  return _react.default.createElement(_floatingActionsDemo.FloatingActionsDemo, null);
                case 'buttons':
                  return _react.default.createElement(_buttonsDemo.ButtonsDemo, null);
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

      /******************************************
      INTERNAL MODULE: ./views/demos/buttons-demo
      ******************************************/

      ims.set('./views/demos/buttons-demo', {
        hash: 3047869885,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonsDemo = ButtonsDemo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ButtonsDemo() {
            const handleClick = () => {
              console.log('Button clicked!');
            };
            return _react.default.createElement("div", {
              className: "buttons-demo"
            }, _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Button Variants"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleClick
            }, "Primary Button"), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleClick,
              disabled: true
            }, "Primary Button"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              onClick: handleClick
            }, "Secondary Button"), _react.default.createElement(_components.Button, {
              variant: "outline",
              onClick: handleClick
            }, "Outline Button"), _react.default.createElement(_components.Button, {
              variant: "ghost",
              onClick: handleClick
            }, "Ghost Button"), _react.default.createElement(_components.Button, {
              variant: "link",
              onClick: handleClick
            }, "Link Button"), _react.default.createElement(_components.Button, {
              variant: "danger",
              onClick: handleClick
            }, "Danger Button"), _react.default.createElement(_components.Button, {
              variant: "success",
              onClick: handleClick
            }, "Success Button"), _react.default.createElement(_components.Button, {
              variant: "warning",
              onClick: handleClick
            }, "Warning Button"))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Button Sizes"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              size: "small",
              onClick: handleClick
            }, "Small"), _react.default.createElement(_components.Button, {
              variant: "primary",
              size: "medium",
              onClick: handleClick
            }, "Medium"), _react.default.createElement(_components.Button, {
              variant: "primary",
              size: "large",
              onClick: handleClick
            }, "Large"))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Button States"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleClick
            }, "Normal"), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: true,
              onClick: handleClick
            }, "Disabled"), _react.default.createElement(_components.Button, {
              variant: "primary",
              loading: true,
              onClick: handleClick
            }, "Loading"))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Button with Icons"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              icon: "plus",
              onClick: handleClick
            }, "Add Item"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              icon: "edit",
              onClick: handleClick
            }, "Edit"), _react.default.createElement(_components.Button, {
              variant: "danger",
              icon: "trash",
              onClick: handleClick
            }, "Delete"), _react.default.createElement(_components.Button, {
              variant: "outline",
              icon: "download",
              onClick: handleClick
            }, "Download"))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Icon Buttons"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "plus",
              variant: "primary",
              onClick: handleClick
            }), _react.default.createElement(_icons.IconButton, {
              icon: "edit",
              variant: "secondary",
              onClick: handleClick
            }), _react.default.createElement(_icons.IconButton, {
              icon: "trash",
              variant: "danger",
              onClick: handleClick
            }), _react.default.createElement(_icons.IconButton, {
              icon: "download",
              variant: "outline",
              onClick: handleClick
            }), _react.default.createElement(_icons.IconButton, {
              icon: "settings",
              variant: "ghost",
              onClick: handleClick
            }), _react.default.createElement(_icons.IconButton, {
              icon: "heart",
              variant: "link",
              onClick: handleClick
            }))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Button with Bordered Style"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: handleClick
            }, "Bordered Primary"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              bordered: true,
              onClick: handleClick
            }, "Bordered Secondary"), _react.default.createElement(_components.Button, {
              variant: "outline",
              bordered: true,
              onClick: handleClick
            }, "Bordered Outline"))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Full Width Buttons"), _react.default.createElement("div", {
              className: "button-group full-width"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              className: "btn-full",
              onClick: handleClick
            }, "Full Width Primary"), _react.default.createElement(_components.Button, {
              variant: "secondary",
              className: "btn-full",
              onClick: handleClick
            }, "Full Width Secondary"))), _react.default.createElement("div", {
              className: "demo-section"
            }, _react.default.createElement("h3", null, "Button Groups"), _react.default.createElement("div", {
              className: "button-group"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleClick
            }, "First"), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleClick
            }, "Second"), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: handleClick
            }, "Third"))));
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
        hash: 755449734,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _sidebar = require("./sidebar");
          var _content = require("./content");
          var _routing = require("@beyond-js/kernel/routing");
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
              _routing.routing.pushState(`/ui/components${newQueryString}`);
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
        hash: 2255146612,
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
              className: `nav-item ${selectedComponent === 'buttons' ? 'active' : ''}`,
              onClick: () => onComponentSelect('buttons')
            }, _react.default.createElement(_lucideReact.MousePointer, {
              size: 20
            }), _react.default.createElement("span", null, "Buttons"))))), _react.default.createElement("div", {
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
        "im": "./views/demos/buttons-demo",
        "from": "ButtonsDemo",
        "name": "ButtonsDemo"
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
        (require || prop === 'ButtonsDemo') && _export("ButtonsDemo", ButtonsDemo = require ? require('./views/demos/buttons-demo').ButtonsDemo : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiY29tcG9uZW50IiwiZ2V0Iiwic2V0U2VsZWN0ZWRDb21wb25lbnQiLCJzZXRRdWVyeVN0cmluZyIsImhpZGUiLCJleHBvcnRzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwiY29tcG9uZW50TmFtZSIsInNldCIsInNlbGVjdGVkQ29tcG9uZW50IiwicXVlcnlTdHJpbmciLCJfcmVhY3QiLCJfZmxvYXRpbmdBY3Rpb25zRGVtbyIsIl9idXR0b25zRGVtbyIsIkNvbXBvbmVudHNDb250ZW50IiwicHJvcHMiLCJyZW5kZXJDb21wb25lbnRDb250ZW50IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGbG9hdGluZ0FjdGlvbnNEZW1vIiwiQnV0dG9uc0RlbW8iLCJjbGFzc05hbWUiLCJfY29tcG9uZW50cyIsIl9pY29ucyIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsIkJ1dHRvbiIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzaXplIiwibG9hZGluZyIsImljb24iLCJJY29uQnV0dG9uIiwiYm9yZGVyZWQiLCJfZmxvYXRpbmdBY3Rpb25zIiwiX2x1Y2lkZVJlYWN0IiwiYWN0aW9ucyIsImlkIiwiUGx1cyIsImxhYmVsIiwidG9vbHRpcCIsIkVkaXQiLCJEZWxldGUiLCJTaGFyZSIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsImRlbW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZsb2F0aW5nQWN0aW9ucyIsInBvc2l0aW9uIiwib25Ub2dnbGUiLCJpc09wZW4iLCJfaG9va3MiLCJfc2lkZWJhciIsIl9jb250ZW50IiwiX3JvdXRpbmciLCJ1c2VTdGF0ZSIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwiaGFuZGxlQ29tcG9uZW50U2VsZWN0IiwibmV3UXVlcnlTdHJpbmciLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiQ29tcG9uZW50c1NpZGViYXIiLCJvbkNvbXBvbmVudFNlbGVjdCIsIkxheWVycyIsIk1vdXNlUG9pbnRlciJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUudHMiLCIvL3RzL3ZpZXdzL2NvbnRlbnQudHN4IiwiLy90cy92aWV3cy9kZW1vcy9idXR0b25zLWRlbW8udHN4IiwiLy90cy92aWV3cy9kZW1vcy9mbG9hdGluZy1hY3Rpb25zLWRlbW8udHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3NpZGViYXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFFQSxJQUFJRyxN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