System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/platform@0.1.6/sidebar/manager", "react@18.3.1", "@aimpact/platform@0.1.6/sidebar/ui"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_aimpactPlatform016SidebarManager) {
      dependency_4 = _aimpactPlatform016SidebarManager;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactPlatform016SidebarUi) {
      dependency_6 = _aimpactPlatform016SidebarUi;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/platform/sidebar/manager', dependency_4], ['react', dependency_5], ['@aimpact/platform/sidebar/ui', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "platform-layout",
        "vspecifier": "@aimpact/platform@0.1.6/layout/main",
        "is": "layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/layout/main');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 430065014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _views = require("./views");
          var _manager = require("@aimpact/platform/sidebar/manager");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            constructor(args) {
              super(args);
              _manager.SidebarManager.register('top', [{
                id: 'projects',
                name: 'Projects',
                href: 'projects',
                icon: 'folder'
              }, {
                id: 'playground',
                name: 'Playground',
                href: 'playground',
                icon: 'playground'
              }]);
            }
            get Widget() {
              return _views.Layout;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 3419739596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          const ICONS = exports.ICONS = {
            propmt: {
              viewBox: '0 0 24 24',
              icon: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V7H20V6C20 5.44772 19.5523 5 19 5H5ZM4 18V9H20V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18ZM7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7.58579 14L6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071L9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L7.70711 11.2929Z"/>'
            }
          };
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3825242546,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var _react = require("react");
          var _ui = require("@aimpact/platform/sidebar/ui");
          function Layout() {
            return _react.default.createElement("div", {
              className: 'admin__layout-container'
            }, _react.default.createElement("div", {
              className: 'admin__main-container '
            }, _react.default.createElement(_ui.Sidebar, null), _react.default.createElement("main", {
              className: 'layout__content'
            }, _react.default.createElement("beyond-layout-children", null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJTaWRlYmFyTWFuYWdlciIsInJlZ2lzdGVyIiwiaWQiLCJuYW1lIiwiaHJlZiIsImljb24iLCJXaWRnZXQiLCJMYXlvdXQiLCJleHBvcnRzIiwiSUNPTlMiLCJwcm9wbXQiLCJ2aWV3Qm94IiwiX3JlYWN0IiwiX3VpIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJTaWRlYmFyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvaWNvbnMudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0NDLFlBQVlDLElBQUk7Y0FDZixLQUFLLENBQUNBLElBQUksQ0FBQztjQUNYSixRQUFBLENBQUFLLGNBQWMsQ0FBQ0MsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUM5QjtnQkFDQ0MsRUFBRSxFQUFFLFVBQVU7Z0JBQ2RDLElBQUksRUFBRSxVQUFVO2dCQUNoQkMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCQyxJQUFJLEVBQUU7ZUFDTixFQUNEO2dCQUNDSCxFQUFFLEVBQUUsWUFBWTtnQkFDaEJDLElBQUksRUFBRSxZQUFZO2dCQUNsQkMsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCQyxJQUFJLEVBQUU7ZUFDTixDQUNELENBQUM7WUFDSDtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPWixNQUFBLENBQUFhLE1BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBWixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJNLE1BQU1hLEtBQUssR0FBQUQsT0FBQSxDQUFBQyxLQUFBLEdBQUc7WUFDcEJDLE1BQU0sRUFBRTtjQUNQQyxPQUFPLEVBQUUsV0FBVztjQUNwQk4sSUFBSSxFQUFFOztXQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0xELElBQUFPLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsR0FBQSxHQUFBcEIsT0FBQTtVQVVNLFNBQVVjLE1BQU1BLENBQUE7WUFDckIsT0FDQ0ssTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDSixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNGLEdBQUEsQ0FBQUksT0FBTyxPQUFHLEVBQ1hMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQixHQUNoQ0osTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsZ0NBQTBCLENBQ3BCLENBQ0YsQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119