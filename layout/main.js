System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/base", "@aimpact/platform@0.1.6/sidebar/manager", "react@18.3.1", "@aimpact/platform@0.1.6/sidebar/ui", "pragmate-ui@1.0.8/toast"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets116Base) {
      dependency_3 = _beyondJsReact18Widgets116Base;
    }, function (_aimpactPlatform016SidebarManager) {
      dependency_4 = _aimpactPlatform016SidebarManager;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactPlatform016SidebarUi) {
      dependency_6 = _aimpactPlatform016SidebarUi;
    }, function (_pragmateUi108Toast) {
      dependency_7 = _pragmateUi108Toast;
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
          "vspecifier": "@aimpact/platform@0.1.6/layout/main"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/platform/sidebar/manager', dependency_4], ['react', dependency_5], ['@aimpact/platform/sidebar/ui', dependency_6], ['pragmate-ui/toast', dependency_7]]);
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
        hash: 1155518409,
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
                href: '/',
                icon: 'folder'
              }, {
                id: 'playground',
                name: 'Playground',
                href: '/playground',
                icon: 'playground'
              }, {
                id: 'ivanti-dashboard',
                name: 'Ivanti Dashboard',
                href: '/ivanti-dashboard',
                icon: 'operations'
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
        hash: 2275748746,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Layout = Layout;
          var _react = require("react");
          var _ui = require("@aimpact/platform/sidebar/ui");
          var _toast = require("pragmate-ui/toast");
          function Layout() {
            return _react.default.createElement("div", {
              className: "admin__layout-container"
            }, _react.default.createElement("div", {
              className: "admin__main-container "
            }, _react.default.createElement(_ui.Sidebar, null), _react.default.createElement("main", {
              className: "layout__content"
            }, _react.default.createElement("beyond-layout-children", null), _react.default.createElement(_toast.Toasts, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJTaWRlYmFyTWFuYWdlciIsInJlZ2lzdGVyIiwiaWQiLCJuYW1lIiwiaHJlZiIsImljb24iLCJXaWRnZXQiLCJMYXlvdXQiLCJleHBvcnRzIiwiSUNPTlMiLCJwcm9wbXQiLCJ2aWV3Qm94IiwiX3JlYWN0IiwiX3VpIiwiX3RvYXN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJTaWRlYmFyIiwiVG9hc3RzIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9pY29ucy50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3Q0MsWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQ0EsSUFBSSxDQUFDO2NBQ1hKLFFBQUEsQ0FBQUssY0FBYyxDQUFDQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQzlCO2dCQUNDQyxFQUFFLEVBQUUsVUFBVTtnQkFDZEMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCQyxJQUFJLEVBQUUsR0FBRztnQkFDVEMsSUFBSSxFQUFFO2VBQ04sRUFDRDtnQkFDQ0gsRUFBRSxFQUFFLFlBQVk7Z0JBQ2hCQyxJQUFJLEVBQUUsWUFBWTtnQkFDbEJDLElBQUksRUFBRSxhQUFhO2dCQUNuQkMsSUFBSSxFQUFFO2VBQ04sRUFFRDtnQkFDQ0gsRUFBRSxFQUFFLGtCQUFrQjtnQkFDdEJDLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCQyxJQUFJLEVBQUUsbUJBQW1CO2dCQUN6QkMsSUFBSSxFQUFFO2VBQ04sQ0FDRCxDQUFDO1lBQ0g7WUFDQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1osTUFBQSxDQUFBYSxNQUFNO1lBQ2Q7O1VBQ0FDLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDTSxNQUFNYSxLQUFLLEdBQUFELE9BQUEsQ0FBQUMsS0FBQSxHQUFHO1lBQ3BCQyxNQUFNLEVBQUU7Y0FDUEMsT0FBTyxFQUFFLFdBQVc7Y0FDcEJOLElBQUksRUFBRTs7V0FFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNMRCxJQUFBTyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQW9CLEdBQUEsR0FBQXBCLE9BQUE7VUFDQSxJQUFBcUIsTUFBQSxHQUFBckIsT0FBQTtVQVNNLFNBQVVjLE1BQU1BLENBQUE7WUFDckIsT0FDQ0ssTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBd0IsR0FDdENMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNILEdBQUEsQ0FBQUssT0FBTyxPQUFHLEVBQ1hOLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFpQixHQUNoQ0wsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsZ0NBQTBCLEVBQzFCSixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRixNQUFBLENBQUFLLE1BQU0sT0FBRyxDQUNKLENBQ0YsQ0FDRDtVQUVSIiwiaWdub3JlTGlzdCI6W119