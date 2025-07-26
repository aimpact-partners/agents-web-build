System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/platform@0.1.6/sidebar/manager", "react@18.3.1", "pragmate-ui@1.0.2/icons", "@aimpact/platform@0.1.6/shared/icons", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/tooltip", "pragmate-ui@1.0.2/image", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/platform@0.1.6/shared/components"], function (_export, _context2) {
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
    }, function (_pragmateUi102Icons) {
      dependency_4 = _pragmateUi102Icons;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_5 = _aimpactPlatform016SharedIcons;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_7 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi102Components) {
      dependency_8 = _pragmateUi102Components;
    }, function (_pragmateUi102Tooltip) {
      dependency_9 = _pragmateUi102Tooltip;
    }, function (_pragmateUi102Image) {
      dependency_10 = _pragmateUi102Image;
    }, function (_aimpactChatSdk155Session) {
      dependency_11 = _aimpactChatSdk155Session;
    }, function (_aimpactPlatform016SharedComponents) {
      dependency_12 = _aimpactPlatform016SharedComponents;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFuYWdlciIsInJlcXVpcmUiLCJfcmVhY3QiLCJfbGlzdCIsIkFjdGl2aXR5QmFyIiwidG9wSXRlbXMiLCJBcnJheSIsImZyb20iLCJTaWRlYmFyTWFuYWdlciIsIml0ZW1zIiwidmFsdWVzIiwiYm90dG9tSXRlbXMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiTGlzdEl0ZW1zIiwiX2ljb25zIiwiSXRlbUNvbnRyb2wiLCJpdGVtIiwiaXNBY3RpdmUiLCJ2YXJpYW50IiwiY2xzIiwiY29udHJvbCIsImljb24iLCJBcHBJY29uQnV0dG9uIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfY29tcG9uZW50cyIsIl90b29sdGlwIiwiX2NvbnRleHQiLCJfY29udHJvbCIsIkFjdGl2aXR5QmFyTGluayIsIm5hbWUiLCJocmVmIiwiRXhwbG9yZXIiLCJhY3Rpb24iLCJsaW5rIiwiaXNMaW5rIiwic2V0SXNBY3RpdmUiLCJ1c2VTdGF0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImluY2x1ZGVzIiwidG9nZ2xlQWN0aW9uTWVudSIsInVzZVNpZGViYXJDb250ZXh0IiwidXNlQmluZGVyIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJhdHRycyIsImF0dHJpYnV0ZXMiLCJ0aXRsZSIsIkNvbnRyb2wiLCJMaW5rIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwbGFjZW1lbnQiLCJleHBvcnRzIiwiX2l0ZW0iLCJtYXAiLCJpIiwia2V5IiwiU2lkZWJhckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29uczIiLCJfaW1hZ2UiLCJBcHBMb2dvIiwicmVhZHkiLCJzZXRSZWFkeSIsImxvZ28iLCJzZXRMb2dvIiwidHlwZSIsIklDT05TIiwiSW1hZ2UiLCJzcmMiLCJJY29uIiwiX3Nlc3Npb24iLCJQcm9maWxlSWNvbiIsImxvYWRFcnJvciIsInNldExvYWRFcnJvciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInVzZXJQcm9wcyIsImdldFByb3BlcnRpZXMiLCJoYW5kbGVMb2FkRXJyb3IiLCJhbHQiLCJwaG90b1VSTCIsIm9uRXJyb3IiLCJfYWN0aXZpdHlCYXIiLCJTaWRlYmFyIiwib3BlbiIsInNldE9wZW4iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJtb2R1bGUiLCJpZCIsIlByb3ZpZGVyIiwidmFsdWUiLCJyZWdpc3RlciIsIlRoZW1lU3dpdGNoZXIiLCJsb2dvdXQiLCJwdXNoU3RhdGUiXSwic291cmNlcyI6WyIvL3RzL2FjdGl2aXR5LWJhci9pbmRleC50c3giLCIvL3RzL2FjdGl2aXR5LWJhci9pdGVtL2NvbnRyb2wudHN4IiwiLy90cy9hY3Rpdml0eS1iYXIvaXRlbS9pbmRleC50c3giLCIvL3RzL2FjdGl2aXR5LWJhci9saXN0LnRzeCIsIi8vdHMvY29udGV4dC50cyIsIi8vdHMvaWNvbnMvYXBwLWxvZ28udHN4IiwiLy90cy9pY29ucy9wcm9maWxlLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9yZWdpc3RyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFYyxTQUFVRyxXQUFXQSxDQUFBO1lBQ2xDLE1BQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUNQLFFBQUEsQ0FBQVEsY0FBYyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sRUFBRSxDQUFDO1lBQzFELE1BQU1DLFdBQVcsR0FBR0wsS0FBSyxDQUFDQyxJQUFJLENBQUNQLFFBQUEsQ0FBQVEsY0FB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