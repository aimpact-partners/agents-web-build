System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/platform@0.1.6/sidebar/manager", "react@18.3.1", "@aimpact/platform@0.1.6/sidebar/ui", "pragmate-ui@1.0.8/toast"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
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
    }, function (_pragmateUi108Toast) {
      dependency_7 = _pragmateUi108Toast;
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
        hash: 2912609641,
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
              }, {
                id: 'ivanti-dashboard',
                name: 'Ivanti Dashboard',
                href: 'ivanti-dashboard',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfbWFuYWdlciIsIkNvbnRyb2xsZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJTaWRlYmFyTWFuYWdlciIsInJlZ2lzdGVyIiwiaWQiLCJuYW1lIiwiaHJlZiIsImljb24iLCJXaWRnZXQiLCJMYXlvdXQiLCJleHBvcnRzIiwiSUNPTlMiLCJwcm9wbXQiLCJ2aWV3Qm94IiwiX3JlYWN0IiwiX3VpIiwiX3RvYXN0IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJTaWRlYmFyIiwiVG9hc3RzIl0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9pY29ucy50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3Q0MsWUFBWUMsSUFBSTtjQUNmLEtBQUssQ0FBQ0EsSUFBSSxDQUFDO2NBQ1hKLFFBQUEsQ0FBQUssY0FBYyxDQUFDQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQzlCO2dCQUNDQyxFQUFFLEVBQUUsVUFBVTtnQkFDZEMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEJDLElBQUksRUFBRTtlQUNOLEVBQ0Q7Z0JBQ0NILEVBQUUsRUFBRSxZQUFZO2dCQUNoQkMsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCQyxJQUFJLEVBQUUsWUFBWTtnQkFDbEJDLElBQUksRUFBRTtlQUNOLEVBRUQ7Z0JBQ0NILEVBQUUsRUFBRSxrQkFBa0I7Z0JBQ3RCQyxJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QkMsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEJDLElBQUksRUFBRTtlQUNOLENBQ0QsQ0FBQztZQUNIO1lBQ0EsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU9aLE1BQUEsQ0FBQWEsTUFBTTtZQUNkOztVQUNBQyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ00sTUFBTWEsS0FBSyxHQUFBRCxPQUFBLENBQUFDLEtBQUEsR0FBRztZQUNwQkMsTUFBTSxFQUFFO2NBQ1BDLE9BQU8sRUFBRSxXQUFXO2NBQ3BCTixJQUFJLEVBQUU7O1dBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEQsSUFBQU8sTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixHQUFBLEdBQUFwQixPQUFBO1VBQ0EsSUFBQXFCLE1BQUEsR0FBQXJCLE9BQUE7VUFTTSxTQUFVYyxNQUFNQSxDQUFBO1lBQ3JCLE9BQ0NLLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q0wsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXdCLEdBQ3RDTCxNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxHQUFBLENBQUFLLE9BQU8sT0FBRyxFQUNYTixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBaUIsR0FDaENMLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLGdDQUEwQixFQUMxQkosTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0YsTUFBQSxDQUFBSyxNQUFNLE9BQUcsQ0FDSixDQUNGLENBQ0Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==