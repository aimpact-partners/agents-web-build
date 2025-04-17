System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/platform@0.1.6/sidebar/manager", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/icons", "@aimpact/platform@0.1.6/shared/icons", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/tooltip", "pragmate-ui@1.0.0-beta.7/image", "@aimpact/chat-sdk@1.4.4/session", "@aimpact/platform@0.1.6/shared/components"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, bimport, __Bundle, __pkg, ims, AppLogo, ProfileIcon, Sidebar, __beyond_pkg, hmr;
  _export({
    AppLogo: void 0,
    ProfileIcon: void 0,
    Sidebar: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_aimpactPlatform016SidebarManager) {
      dependency_2 = _aimpactPlatform016SidebarManager;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_4 = _pragmateUi100Beta7Icons;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_5 = _aimpactPlatform016SharedIcons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_7 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_9 = _pragmateUi100Beta7Tooltip;
    }, function (_pragmateUi100Beta7Image) {
      dependency_10 = _pragmateUi100Beta7Image;
    }, function (_aimpactChatSdk144Session) {
      dependency_11 = _aimpactChatSdk144Session;
    }, function (_aimpactPlatform016SharedComponents) {
      dependency_12 = _aimpactPlatform016SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/platform/sidebar/manager', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4], ['@aimpact/platform/shared/icons', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/react-18-widgets/hooks', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/tooltip', dependency_9], ['pragmate-ui/image', dependency_10], ['@aimpact/chat-sdk/session', dependency_11], ['@aimpact/platform/shared/components', dependency_12]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/sidebar/ui');
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./activity-bar/index
      ************************************/
      ims.set('./activity-bar/index', {
        hash: 3769150833,
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
              className: "aside-bar"
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
        hash: 2291663589,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityBarLink = void 0;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const [isActive, setIsActive] = _react.default.useState(_routing.routing.uri.pathname.includes(href));
            const {
              toggleActionMenu
            } = (0, _context.useSidebarContext)();
            (0, _hooks.useBinder)([_routing.routing], () => setIsActive(_routing.routing.uri.pathname.includes(href)));
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
            if (isLink) attrs.href = '/' + href;
            const title = item.title ?? name;
            const Control = link === false ? 'span' : _components.Link;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title,
              placement: 'right'
            }, _react.default.createElement(Control, {
              ...attrs,
              onClick: onClick,
              className: 'aside-item'
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

      /**************************
      INTERNAL MODULE: ./explorer
      **************************/

      ims.set('./explorer', {
        hash: 2145033942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExplorerView = ExplorerView;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          function ExplorerView() {
            const {
              open,
              toggleActionMenu,
              active
            } = (0, _context.useSidebarContext)();
            const {
              pathname
            } = _routing.routing.uri;
            const cls = `explorer${open ? ' open' : ''}`;
            if (!active?.Explorer) return null;
            const {
              Explorer,
              href
            } = active;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("aside", {
              className: cls
            }, _react.default.createElement("div", {
              className: 'sidebar-content'
            }, _react.default.createElement(Explorer, null))), _react.default.createElement("div", {
              className: `toggle-explorer ${open === href ? 'open' : ''}`
            }, _react.default.createElement(_icons.IconButton, {
              className: 'lg',
              icon: 'expandMore',
              onClick: () => toggleActionMenu(href)
            })));
          }
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
        hash: 2740388888,
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
              className: 'nav-wrapper'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFuYWdlciIsInJlcXVpcmUiLCJfcmVhY3QiLCJfbGlzdCIsIkFjdGl2aXR5QmFyIiwidG9wSXRlbXMiLCJBcnJheSIsImZyb20iLCJTaWRlYmFyTWFuYWdlciIsIml0ZW1zIiwidmFsdWVzIiwiYm90dG9tSXRlbXMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiSXRlbUNvbnRyb2wiLCJpdGVtIiwiaXNBY3RpdmUiLCJ2YXJpYW50IiwiY2xzIiwiY29udHJvbCIsImljb24iLCJBcHBJY29uQnV0dG9uIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIl90b29sdGlwIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaXNMaW5rIiwic2V0SXNBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsInVzZVNpZGViYXJDb250ZXh0IiwidXNlQmluZGVyIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIkNvbnRyb2wiLCJMaW5rIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJleHBvcnRzIiwiX2l0ZW0iLCJtYXAiLCJpIiwia2V5IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkV4cGxvcmVyVmlldyIsIm9wZW4iLCJhY3RpdmUiLCJJY29uQnV0dG9uIiwiX2ljb25zMiIsIl9pbWFnZSIsIkFwcExvZ28iLCJyZWFkeSIsInNldFJlYWR5IiwibG9nbyIsInNldExvZ28iLCJ0eXBlIiwiSUNPTlMiLCJJbWFnZSIsInNyYyIsIkljb24iLCJfc2Vzc2lvbiIsIlByb2ZpbGVJY29uIiwibG9hZEVycm9yIiwic2V0TG9hZEVycm9yIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidXNlclByb3BzIiwiZ2V0UHJvcGVydGllcyIsImhhbmRsZUxvYWRFcnJvciIsImFsdCIsInBob3RvVVJMIiwib25FcnJvciIsIl9hY3Rpdml0eUJhciIsIlNpZGViYXIiLCJzZXRPcGVuIiwic2V0QWN0aXZlIiwibW9kdWxlIiwiaWQiLCJQcm92aWRlciIsInZhbHVlIiwicmVnaXN0ZXIiLCJUaGVtZVN3aXRjaGVyIiwibG9nb3V0IiwicHVzaFN0YXRlIl0sInNvdXJjZXMiOlsiL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vY29udHJvbC50c3giLCIvdHMvYWN0aXZpdHktYmFyL2l0ZW0vaW5kZXgudHN4IiwiL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi90cy9jb250ZXh0LnRzIiwiL3RzL2V4cGxvcmVyLnRzeCIsIi90cy9pY29ucy9hcHAtbG9nby50c3giLCIvdHMvaWNvbnMvcHJvZmlsZS50c3giLCIvdHMvaW5kZXgudHN4IiwiL3RzL3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRWMsU0FBVUcsV0FBV0EsQ0FBQTtZQUNsQyxNQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDUCxRQUFBLENBQUFRLGNBQWMsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEVBQUUsQ0FBQztZQUMxRCxNQUFNQyxXQUFXLEdBQUdMLEtBQUssQ0FBQ0MsSUFBSSxDQUFDUCxRQUFBLENBQUFRLGNBQWMsQ0FBQ0csV0FBVyxDQUFDRCxNQUFNLEVBQUUsQ0FBQztZQUVuRSxPQUNDUixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFBWCxNQUFBLENBQUFVLE9BQUEsQ0FBQUUsUUFBQSxRQUNDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFPRSxTQUFTLEVBQUM7WUFBVyxHQUkzQmIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsS0FBQSxDQUFBYSxTQUFTO2NBQUNQLEtBQUssRUFBRUosUUFBUTtjQUFFVSxTQUFTLEVBQUM7WUFBWSxFQUFHLEVBQ3JEYixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDVixLQUFBLENBQUFhLFNBQVM7Y0FBQ1AsS0FBSyxFQUFFRSxXQUFXO2NBQUVJLFNBQVMsRUFBQztZQUFlLEVBQUcsQ0FDcEQsQ0FDTjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBYixNQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBZ0IsTUFBQSxHQUFBaEIsT0FBQTtVQUVNLFNBQVVpQixXQUFXQSxDQUFDO1lBQUVDLElBQUk7WUFBRUM7VUFBUSxDQUFFO1lBQzdDLE1BQU1DLE9BQU8sR0FBRyxHQUFHRCxRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssRUFBRTtZQUNoRCxNQUFNRSxHQUFHLEdBQUcscUJBQXFCO1lBQ2pDLElBQUlILElBQUksQ0FBQ0ksT0FBTyxFQUFFO2NBQ2pCLE9BQU9yQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxJQUFJLENBQUNJLE9BQU87Z0JBQUNDLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO2dCQUFFSCxPQUFPLEVBQUVBLE9BQU87Z0JBQUVOLFNBQVMsRUFBRU87Y0FBRyxFQUFJOztZQUczRSxNQUFNRSxJQUFJLEdBQUdMLElBQUksQ0FBQ0ssSUFBSTtZQUV0QixPQUFPdEIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksTUFBQSxDQUFBUSxhQUFhO2NBQUNELElBQUksRUFBRUEsSUFBSTtjQUFFSCxPQUFPLEVBQUVBLE9BQU87Y0FBRU4sU0FBUyxFQUFFTztZQUFHLEVBQUk7VUFDdkU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEEsSUFBQXBCLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5QixRQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQTBCLE1BQUEsR0FBQTFCLE9BQUE7VUFDQSxJQUFBMkIsV0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixRQUFBLEdBQUE1QixPQUFBO1VBRUEsSUFBQTZCLFFBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQU1PLE1BQU0rQixlQUFlLEdBQUdBLENBQUM7WUFBRWI7VUFBSSxDQUFFLEtBQUk7WUFDM0MsTUFBTTtjQUFFYyxJQUFJO2NBQUVULElBQUk7Y0FBRVUsSUFBSTtjQUFFQyxRQUFRO2NBQUVDLE1BQU07Y0FBRUM7WUFBSSxDQUFFLEdBQUdsQixJQUF3QjtZQUM3RSxNQUFNbUIsTUFBTSxHQUFHLENBQUNILFFBQVEsSUFBSSxDQUFDQyxNQUFNO1lBQ25DLE1BQU0sQ0FBQ2hCLFFBQVEsRUFBRW1CLFdBQVcsQ0FBQyxHQUFHckMsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLENBQUNkLFFBQUEsQ0FBQWUsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDVixJQUFJLENBQUMsQ0FBQztZQUNuRixNQUFNO2NBQUVXO1lBQWdCLENBQUUsR0FBRyxJQUFBZixRQUFBLENBQUFnQixpQkFBaUIsR0FBRTtZQUVoRCxJQUFBbkIsTUFBQSxDQUFBb0IsU0FBUyxFQUFDLENBQUNyQixRQUFBLENBQUFlLE9BQU8sQ0FBQyxFQUFFLE1BQU1GLFdBQVcsQ0FBQ2IsUUFBQSxDQUFBZSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNWLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFNUUsTUFBTWMsT0FBTyxHQUFHQyxLQUFLLElBQUc7Y0FDdkJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsRUFBRTtjQUN0QixNQUFNSCxPQUFPLEdBQUc3QixJQUFJLENBQUM2QixPQUFPLElBQUk3QixJQUFJLENBQUNpQixNQUFNO2NBQzNDLElBQUlZLE9BQU8sRUFBRTtnQkFDWixPQUFPQSxPQUFPLENBQUNDLEtBQUssQ0FBQzs7Y0FHdEJKLGdCQUFnQixDQUFDMUIsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxJQUFJaUMsS0FBSyxHQUFnQjtjQUFFckMsU0FBUyxFQUFFO1lBQUUsQ0FBRTtZQUMxQyxJQUFJSSxJQUFJLENBQUNrQyxVQUFVLEVBQUVELEtBQUssR0FBRztjQUFFLEdBQUdqQyxJQUFJLENBQUNrQztZQUFVLENBQUU7WUFDbkQsSUFBSWYsTUFBTSxFQUFFYyxLQUFLLENBQUNsQixJQUFJLEdBQUcsR0FBRyxHQUFHQSxJQUFJO1lBQ25DLE1BQU1vQixLQUFLLEdBQUduQyxJQUFJLENBQUNtQyxLQUFLLElBQUlyQixJQUFJO1lBQ2hDLE1BQU1zQixPQUFPLEdBQUdsQixJQUFJLEtBQUssS0FBSyxHQUFHLE1BQU0sR0FBR1QsV0FBQSxDQUFBNEIsSUFBSTtZQUM5QyxPQUNDdEQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dCLFFBQUEsQ0FBQTRCLE9BQU87Y0FBQ0MsT0FBTyxFQUFFSixLQUFLO2NBQUVLLFNBQVMsRUFBQztZQUFPLEdBQ3pDekQsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBDLE9BQU87Y0FBQSxHQUFLSCxLQUFLO2NBQUVKLE9BQU8sRUFBRUEsT0FBTztjQUFFakMsU0FBUyxFQUFDO1lBQVksR0FDM0RiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNrQixRQUFBLENBQUFiLFdBQVc7Y0FBQ0UsUUFBUSxFQUFFQSxRQUFRO2NBQUVELElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ3RDLENBQ0Q7VUFFWixDQUFDO1VBQUN5QyxPQUFBLENBQUE1QixlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNGLElBQUE5QixNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBNEQsS0FBQSxHQUFBNUQsT0FBQTtVQUVNLFNBQVVlLFNBQVNBLENBQUM7WUFBRVAsS0FBSztZQUFFTTtVQUFTLENBQUU7WUFDN0MsT0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBU0UsU0FBUyxFQUFFQTtZQUFTLEdBQzNCTixLQUFLLENBQUNxRCxHQUFHLENBQUMsQ0FBQzNDLElBQUksRUFBRTRDLENBQUMsS0FBSTtjQUN0QixPQUFPN0QsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dELEtBQUEsQ0FBQTdCLGVBQWU7Z0JBQUNiLElBQUksRUFBRUEsSUFBSTtnQkFBRTZDLEdBQUcsRUFBRUQ7Y0FBQyxFQUFJO1lBQy9DLENBQUMsQ0FBQyxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEEsSUFBQTdELE1BQUEsR0FBQUQsT0FBQTtVQU9PLE1BQU1nRSxjQUFjLEdBQUFMLE9BQUEsQ0FBQUssY0FBQSxHQUFHL0QsTUFBQSxDQUFBVSxPQUFLLENBQUNzRCxhQUFhLENBQUMsRUFBcUIsQ0FBQztVQUNqRSxNQUFNcEIsaUJBQWlCLEdBQUdBLENBQUEsS0FBTTVDLE1BQUEsQ0FBQVUsT0FBSyxDQUFDdUQsVUFBVSxDQUFDRixjQUFjLENBQUM7VUFBQ0wsT0FBQSxDQUFBZCxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNSeEUsSUFBQTVDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUF5QixRQUFBLEdBQUF6QixPQUFBO1VBQ0EsSUFBQWdCLE1BQUEsR0FBQWhCLE9BQUE7VUFDQSxJQUFBNkIsUUFBQSxHQUFBN0IsT0FBQTtVQUVNLFNBQVVtRSxZQUFZQSxDQUFBO1lBQzNCLE1BQU07Y0FBRUMsSUFBSTtjQUFFeEIsZ0JBQWdCO2NBQUV5QjtZQUFNLENBQUUsR0FBRyxJQUFBeEMsUUFBQSxDQUFBZ0IsaUJBQWlCLEdBQUU7WUFFOUQsTUFBTTtjQUFFSDtZQUFRLENBQUUsR0FBR2pCLFFBQUEsQ0FBQWUsT0FBTyxDQUFDQyxHQUFHO1lBRWhDLE1BQU1wQixHQUFHLEdBQUcsV0FBVytDLElBQUksR0FBRyxPQUFPLEdBQUcsRUFBRSxFQUFFO1lBQzVDLElBQUksQ0FBQ0MsTUFBTSxFQUFFbkMsUUFBUSxFQUFFLE9BQU8sSUFBSTtZQUVsQyxNQUFNO2NBQUVBLFFBQVE7Y0FBRUQ7WUFBSSxDQUFFLEdBQUdvQyxNQUFNO1lBRWpDLE9BQ0NwRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFBWCxNQUFBLENBQUFVLE9BQUEsQ0FBQUUsUUFBQSxRQUNDWixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFPRSxTQUFTLEVBQUVPO1lBQUcsR0FDcEJwQixNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBaUIsR0FDL0JiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNzQixRQUFRLE9BQUcsQ0FDUCxDQUNDLEVBQ1JqQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUUsbUJBQW1Cc0QsSUFBSSxLQUFLbkMsSUFBSSxHQUFHLE1BQU0sR0FBRyxFQUFFO1lBQUUsR0FDL0RoQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSSxNQUFBLENBQUFzRCxVQUFVO2NBQUN4RCxTQUFTLEVBQUMsSUFBSTtjQUFDUyxJQUFJLEVBQUMsWUFBWTtjQUFDd0IsT0FBTyxFQUFFQSxDQUFBLEtBQU1ILGdCQUFnQixDQUFDWCxJQUFJO1lBQUMsRUFBSSxDQUNqRixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBLElBQUFoQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBMkIsV0FBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUFnQixNQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQXVFLE9BQUEsR0FBQXZFLE9BQUE7VUFFQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQVNPO1VBQVksU0FBVXlFLE9BQU9BLENBQUE7WUFDbkMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHMUUsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLEVBQVc7WUFDbkQsTUFBTSxDQUFDcUMsSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBRzVFLE1BQUEsQ0FBQVUsT0FBSyxDQUFDNEIsUUFBUSxDQUFRO2NBQzdDdUMsSUFBSSxFQUFFLE1BQU07Y0FDWnZELElBQUksRUFBRWdELE9BQUEsQ0FBQVEsS0FBSyxDQUFDLE1BQU07YUFDbEIsQ0FBQztZQUVGLElBQUksQ0FBQ0wsS0FBSyxFQUFFO2NBQ1gsT0FDQ3pFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2dCQUFLRSxTQUFTLEVBQUM7Y0FBWSxHQUMxQmIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRELE1BQUEsQ0FBQVEsS0FBSztnQkFBQ0MsR0FBRyxFQUFDO2NBQUcsRUFBRyxDQUNaOztZQUdSLE1BQU0zQixPQUFPLEdBQUdzQixJQUFJLENBQUNFLElBQUksS0FBSyxNQUFNLEdBQUc5RCxNQUFBLENBQUFrRSxJQUFJLEdBQUdWLE1BQUEsQ0FBQVEsS0FBSztZQUNuRCxNQUFNN0IsS0FBSyxHQUFXLEVBQUU7WUFFeEIsSUFBSXlCLElBQUksQ0FBQ0UsSUFBSSxLQUFLLEtBQUssRUFBRTNCLEtBQUssQ0FBQzhCLEdBQUcsR0FBR0wsSUFBSSxDQUFDSyxHQUFHLENBQUMsS0FDekMsSUFBSUwsSUFBSSxDQUFDRSxJQUFJLEtBQUssTUFBTSxFQUFFM0IsS0FBSyxDQUFDNUIsSUFBSSxHQUFHcUQsSUFBSSxDQUFDckQsSUFBSTtZQUVyRCxPQUNDdEIsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQVksR0FDMUJiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNlLFdBQUEsQ0FBQTRCLElBQUk7Y0FBQ3RCLElBQUksRUFBQztZQUFHLEdBQ2JoQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEMsT0FBTztjQUFBLEdBQUtILEtBQUs7Y0FBRXJDLFNBQVMsRUFBQztZQUFJLEVBQUcsQ0FDL0IsQ0FDRjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBYixNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBZ0IsTUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBRU87VUFBYSxNQUFNb0YsV0FBVyxHQUFHQSxDQUFDO1lBQUVyQztVQUFPLENBQUUsS0FBSTtZQUN2RCxNQUFNLENBQUNzQyxTQUFTLEVBQUVDLFlBQVksQ0FBQyxHQUFHckYsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZELElBQUksQ0FBQzRDLFFBQUEsQ0FBQUksY0FBYyxDQUFDQyxJQUFJLEVBQUU7WUFDMUIsTUFBTUMsU0FBUyxHQUFHTixRQUFBLENBQUFJLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDRSxhQUFhLEVBQUU7WUFDckQsTUFBTUMsZUFBZSxHQUFHQSxDQUFBLEtBQU1MLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFFaEQsT0FDQ3JGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQyxZQUFZO2NBQUNpQyxPQUFPLEVBQUVBO1lBQU8sR0FDMUMsQ0FBQ3NDLFNBQVMsR0FDVnBGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBO2NBQUtnRixHQUFHLEVBQUMsb0JBQW9CO2NBQUNYLEdBQUcsRUFBRVEsU0FBUyxDQUFDSSxRQUFRO2NBQUVDLE9BQU8sRUFBRUg7WUFBZSxFQUFJLEdBRW5GMUYsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksTUFBQSxDQUFBa0UsSUFBSTtjQUFDcEUsU0FBUyxFQUFDLElBQUk7Y0FBQ1MsSUFBSSxFQUFFO1lBQU0sRUFDakMsQ0FDSTtVQUVSLENBQUM7VUFBQ29DLE9BQUEsQ0FBQXlCLFdBQUEsR0FBQUEsV0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQkYsSUFBQW5GLE1BQUEsR0FBQUQsT0FBQTtVQUVBLElBQUErRixZQUFBLEdBQUEvRixPQUFBO1VBQ0EsSUFBQTZCLFFBQUEsR0FBQTdCLE9BQUE7VUFFTztVQUFVLFNBQVVnRyxPQUFPQSxDQUFBO1lBQ2pDLE1BQU0sQ0FBQzVCLElBQUksRUFBRTZCLE9BQU8sQ0FBQyxHQUFHaEcsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0sQ0FBQzhCLE1BQU0sRUFBRTZCLFNBQVMsQ0FBQyxHQUFHakcsTUFBQSxDQUFBVSxPQUFLLENBQUM0QixRQUFRLEVBQWdDO1lBQzFFLE1BQU1LLGdCQUFnQixHQUFJdUQsTUFBd0IsSUFBSTtjQUNyRCxJQUFJLENBQUM5QixNQUFNLElBQUlBLE1BQU0sQ0FBQytCLEVBQUUsS0FBS0QsTUFBTSxDQUFDQyxFQUFFLEVBQUVILE9BQU8sQ0FBQyxDQUFDN0IsSUFBSSxDQUFDO2NBQ3REOEIsU0FBUyxDQUFDQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUVELE9BQ0NsRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUIsUUFBQSxDQUFBbUMsY0FBYyxDQUFDcUMsUUFBUTtjQUFDQyxLQUFLLEVBQUU7Z0JBQUVsQyxJQUFJO2dCQUFFeEIsZ0JBQWdCO2dCQUFFeUI7Y0FBTTtZQUFFLEdBQ2pFcEUsTUFBQSxDQUFBVSxPQUFBLENBQUFDLGFBQUE7Y0FBS0UsU0FBUyxFQUFDO1lBQWEsR0FDM0JiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUNtRixZQUFBLENBQUFwRixPQUFXLE9BQUcsQ0FDVixDQUNtQjtVQUU1Qjs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBWixRQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBeUIsUUFBQSxHQUFBekIsT0FBQTtVQUNBLElBQUFtRixRQUFBLEdBQUFuRixPQUFBO1VBQ0EsSUFBQTJCLFdBQUEsR0FBQTNCLE9BQUE7VUFFQSxDQUFDLE1BQUs7WUFDTEQsUUFBQSxDQUFBUSxjQUFjLENBQUNnRyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQ2pDO2NBQ0NqRixPQUFPLEVBQUVLLFdBQUEsQ0FBQTZFLGFBQWE7Y0FDdEJuRCxLQUFLLEVBQUUsT0FBTztjQUNkK0MsRUFBRSxFQUFFLGVBQWU7Y0FDbkJoRSxJQUFJLEVBQUU7YUFDTixFQUNEO2NBQ0NiLElBQUksRUFBRSxNQUFNO2NBQ1o2RSxFQUFFLEVBQUUsUUFBUTtjQUNaL0MsS0FBSyxFQUFFLFFBQVE7Y0FDZmpCLElBQUksRUFBRSxLQUFLO2NBQ1hXLE9BQU8sRUFBRSxNQUFNQyxLQUFLLElBQUc7Z0JBQ3RCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtnQkFDdkIsTUFBTWtDLFFBQUEsQ0FBQUksY0FBYyxDQUFDa0IsTUFBTSxFQUFFO2dCQUM3QmhGLFFBQUEsQ0FBQWUsT0FBTyxDQUFDa0UsU0FBUyxDQUFDLGFBQWEsQ0FBQztjQUNqQzthQUNBLENBQ0QsQ0FBQztVQUNILENBQUMsRUFBQyxDQUFFIiwiaWdub3JlTGlzdCI6W119