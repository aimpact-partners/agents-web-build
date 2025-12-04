System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@aimpact/platform@0.1.6/sidebar/manager", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@aimpact/platform@0.1.6/shared/icons", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/tooltip", "pragmate-ui@1.0.8/image", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/platform@0.1.6/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    ProfileIcon: void 0,
    Sidebar: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_aimpactPlatform016SidebarManager) {
      dependency_2 = _aimpactPlatform016SidebarManager;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_4 = _pragmateUi108Icons;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_5 = _aimpactPlatform016SharedIcons;
    }, function (_beyondJsKernel0114Routing) {
      dependency_6 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Components) {
      dependency_7 = _pragmateUi108Components;
    }, function (_pragmateUi108Tooltip) {
      dependency_8 = _pragmateUi108Tooltip;
    }, function (_pragmateUi108Image) {
      dependency_9 = _pragmateUi108Image;
    }, function (_aimpactChatSdk155Session) {
      dependency_10 = _aimpactChatSdk155Session;
    }, function (_aimpactPlatform016SharedComponents) {
      dependency_11 = _aimpactPlatform016SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/sidebar/ui"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/platform/sidebar/manager', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/platform/shared/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/components', dependency_7], ['pragmate-ui/tooltip', dependency_8], ['pragmate-ui/image', dependency_9], ['@aimpact/chat-sdk/session', dependency_10], ['@aimpact/platform/shared/components', dependency_11]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/sidebar/ui');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 117441730,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = ActivityBar;
          var _manager = require("@aimpact/platform/sidebar/manager");
          var _react = require("react");
          var _list = require("./list");
          function ActivityBar() {
            const topItems = Array.from(_manager.SidebarManager.items.values());
            const bottomItems = Array.from(_manager.SidebarManager.bottomItems.values());
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: "admin__aside"
            }, _react.default.createElement(_list.ListItems, {
              items: topItems,
              className: "aside__nav"
            }), _react.default.createElement(_list.ListItems, {
              items: bottomItems,
              className: "aside__footer"
            })));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./activity-bar/item/control
      *******************************************/

      ims.set('./activity-bar/item/control', {
        hash: 4091790057,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemControl = ItemControl;
          var _react = require("react");
          var _icons = require("@aimpact/platform/shared/icons");
          function ItemControl({
            item,
            isActive
          }) {
            const variant = `${isActive ? 'active' : 'nav'}`;
            const cls = `nav__item circle md`;
            if (item.control) {
              return _react.default.createElement(item.control, {
                icon: item.icon,
                variant: variant,
                className: cls
              });
            }
            const icon = item.icon;
            return _react.default.createElement(_icons.AppIconButton, {
              icon: icon,
              variant: variant,
              className: cls
            });
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./activity-bar/item/index
      *****************************************/

      ims.set('./activity-bar/item/index', {
        hash: 858719534,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBarLink = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _context = require("../../context");
          var _control = require("./control");
          const ActivityBarLink = ({
            item
          }) => {
            const {
              name,
              icon,
              href,
              Explorer,
              action,
              link
            } = item;
            const isLink = !Explorer && !action;
            const isActive = _routing.routing.uri.pathname.includes(href);
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const onClick = item.onClick ?? item.action;
              if (onClick) {
                return onClick(event);
              }
              toggleActionMenu(item);
            };
            let attrs = {
              className: ''
            };
            if (item.attributes) attrs = {
              ...item.attributes
            };
            if (isLink) attrs.href = href;
            const title = item.title ?? name;
            const Control = link === false ? 'span' : _components.Link;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title,
              placement: "right"
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick,
              className: "aside-item"
            }, _react.default.createElement(_control.ItemControl, {
              isActive: isActive,
              item: item
            })));
          };
          exports.ActivityBarLink = ActivityBarLink;
        }
      });

      /***********************************
      INTERNAL MODULE: ./activity-bar/list
      ***********************************/

      ims.set('./activity-bar/list', {
        hash: 2931086187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListItems = ListItems;
          var _react = require("react");
          var _item = require("./item");
          function ListItems({
            items,
            className
          }) {
            return _react.default.createElement("section", {
              className: className
            }, items.map((item, i) => {
              return _react.default.createElement(_item.ActivityBarLink, {
                item: item,
                key: i
              });
            }));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 214996964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSidebarContext = exports.SidebarContext = void 0;
          var _react = require("react");
          const SidebarContext = exports.SidebarContext = _react.default.createContext({});
          const useSidebarContext = () => _react.default.useContext(SidebarContext);
          exports.useSidebarContext = useSidebarContext;
        }
      });

      /********************************
      INTERNAL MODULE: ./icons/app-logo
      ********************************/

      ims.set('./icons/app-logo', {
        hash: 2475379901,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLogo = AppLogo;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/platform/shared/icons");
          var _image = require("pragmate-ui/image");
          /* bundle */
          function AppLogo() {
            const [ready, setReady] = _react.default.useState();
            const [logo, setLogo] = _react.default.useState({
              type: 'icon',
              icon: _icons2.ICONS['logo']
            });
            if (!ready) {
              return _react.default.createElement("div", {
                className: 'aside-item'
              }, _react.default.createElement(_image.Image, {
                src: '#'
              }));
            }
            const Control = logo.type === 'icon' ? _icons.Icon : _image.Image;
            const attrs = {};
            if (logo.type === 'img') attrs.src = logo.src;else if (logo.type === 'icon') attrs.icon = logo.icon;
            return _react.default.createElement("div", {
              className: 'aside-item'
            }, _react.default.createElement(_components.Link, {
              href: '/'
            }, _react.default.createElement(Control, {
              ...attrs,
              className: 'lg'
            })));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./icons/profile
      *******************************/

      ims.set('./icons/profile', {
        hash: 3126247349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _session = require("@aimpact/chat-sdk/session");
          /* bundle */
          const ProfileIcon = ({
            onClick
          }) => {
            const [loadError, setLoadError] = _react.default.useState(false);
            if (!_session.sessionWrapper.user) return;
            const userProps = _session.sessionWrapper.user.getProperties();
            const handleLoadError = () => setLoadError(true);
            return _react.default.createElement("div", {
              className: 'aside-item',
              onClick: onClick
            }, !loadError ? _react.default.createElement("img", {
              alt: 'user image profile',
              src: userProps.photoURL,
              onError: handleLoadError
            }) : _react.default.createElement(_icons.Icon, {
              className: 'lg',
              icon: 'user'
            }));
          };
          exports.ProfileIcon = ProfileIcon;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4063403436,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Sidebar = Sidebar;
          var _react = require("react");
          var _activityBar = require("./activity-bar");
          var _context = require("./context");
          /*bundle*/
          function Sidebar() {
            const [open, setOpen] = _react.default.useState(false);
            const [active, setActive] = _react.default.useState();
            const toggleActionMenu = module => {
              if (!active || active.id === module.id) setOpen(!open);
              setActive(module);
            };
            return _react.default.createElement(_context.SidebarContext.Provider, {
              value: {
                open,
                toggleActionMenu,
                active
              }
            }, _react.default.createElement("div", {
              className: "nav-wrapper"
            }, _react.default.createElement(_activityBar.default, null)));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./registry
      **************************/

      ims.set('./registry', {
        hash: 2502581069,
        creator: function (require, exports) {
          "use strict";

          var _manager = require("@aimpact/platform/sidebar/manager");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _components = require("@aimpact/platform/shared/components");
          (() => {
            _manager.SidebarManager.register('bottom', [{
              control: _components.ThemeSwitcher,
              title: 'Theme',
              id: 'themeSwitcher',
              link: false
            }, {
              icon: 'exit',
              id: 'logout',
              title: 'Logout',
              link: false,
              onClick: async event => {
                event.stopPropagation();
                await _session.sessionWrapper.logout();
                _routing.routing.pushState('/auth/login');
              }
            }]);
          })();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons/app-logo",
        "from": "AppLogo",
        "name": "AppLogo"
      }, {
        "im": "./icons/profile",
        "from": "ProfileIcon",
        "name": "ProfileIcon"
      }, {
        "im": "./index",
        "from": "Sidebar",
        "name": "Sidebar"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AppLogo') && _export("AppLogo", AppLogo = require ? require('./icons/app-logo').AppLogo : value);
        (require || prop === 'ProfileIcon') && _export("ProfileIcon", ProfileIcon = require ? require('./icons/profile').ProfileIcon : value);
        (require || prop === 'Sidebar') && _export("Sidebar", Sidebar = require ? require('./index').Sidebar : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFuYWdlciIsInJlcXVpcmUiLCJfcmVhY3QiLCJfbGlzdCIsIkFjdGl2aXR5QmFyIiwidG9wSXRlbXMiLCJBcnJheSIsImZyb20iLCJTaWRlYmFyTWFuYWdlciIsIml0ZW1zIiwidmFsdWVzIiwiYm90dG9tSXRlbXMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiSXRlbUNvbnRyb2wiLCJpdGVtIiwiaXNBY3RpdmUiLCJ2YXJpYW50IiwiY2xzIiwiY29udHJvbCIsImljb24iLCJBcHBJY29uQnV0dG9uIiwiX3JvdXRpbmciLCJfY29tcG9uZW50cyIsIl90b29sdGlwIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaXNMaW5rIiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJ0b2dnbGVBY3Rpb25NZW51IiwidXNlU2lkZWJhckNvbnRleHQiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImF0dHJzIiwiYXR0cmlidXRlcyIsInRpdGxlIiwiQ29udHJvbCIsIkxpbmsiLCJUb29sdGlwIiwiY29udGVudCIsInBsYWNlbWVudCIsImV4cG9ydHMiLCJfaXRlbSIsIm1hcCIsImkiLCJrZXkiLCJTaWRlYmFyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ljb25zMiIsIl9pbWFnZSIsIkFwcExvZ28iLCJyZWFkeSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJsb2dvIiwic2V0TG9nbyIsInR5cGUiLCJJQ09OUyIsIkltYWdlIiwic3JjIiwiSWNvbiIsIl9zZXNzaW9uIiwiUHJvZmlsZUljb24iLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ1c2VyUHJvcHMiLCJnZXRQcm9wZXJ0aWVzIiwiaGFuZGxlTG9hZEVycm9yIiwiYWx0IiwicGhvdG9VUkwiLCJvbkVycm9yIiwiX2FjdGl2aXR5QmFyIiwiU2lkZWJhciIsIm9wZW4iLCJzZXRPcGVuIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwibW9kdWxlIiwiaWQiLCJQcm92aWRlciIsInZhbHVlIiwicmVnaXN0ZXIiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZXMiOlsiLy90cy9hY3Rpdml0eS1iYXIvaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0eS1iYXIvaXRlbS9jb250cm9sLnRzeCIsIi8vdHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwiLy90cy9hY3Rpdml0eS1iYXIvbGlzdC50c3giLCIvL3RzL2NvbnRleHQudHMiLCIvL3RzL2ljb25zL2FwcC1sb2dvLnRzeCIsIi8vdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvcmVnaXN0cnkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUVjLFNBQVVHLFdBQVdBLENBQUE7WUFDbEMsTUFBTUMsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQ1AsUUFBQSxDQUFBUSxjQUFjLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxFQUFFLENBQUM7WUFDMUQsTUFBTUMsV0FBVyxHQUFHTCxLQUFLLENBQUNDLElBQUksQ0FBQ1AsUUFBQSxDQUFBUSxjQUFjLENBQUNHLFdBQVcsQ0FBQ0QsTUFBTSxFQUFFLENBQUM7WUFF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