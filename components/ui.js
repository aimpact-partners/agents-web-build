System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.2/breadcrumb", "clsx@2.1.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Divider, AppLoader, PageHeader, ProcessContainer, Range, __beyond_pkg, hmr;
  _export({
    Divider: void 0,
    AppLoader: void 0,
    PageHeader: void 0,
    ProcessContainer: void 0,
    Range: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi102Breadcrumb) {
      dependency_3 = _pragmateUi102Breadcrumb;
    }, function (_clsx2) {
      dependency_4 = _clsx2;
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
          "vspecifier": "@aimpact/platform@0.1.6/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/breadcrumb', dependency_3], ['clsx', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/components/ui');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./divider
      *************************/
      ims.set('./divider', {
        hash: 3217694445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Divider = void 0;
          var _react = require("react");
          /* bundle */
          const Divider = ({
            color,
            height,
            margin
          }) => {
            const styles = {
              borderBottom: `1px solid ${color}`,
              height,
              margin
            };
            return _react.default.createElement("div", {
              className: 'divider',
              style: styles
            });
          };
          exports.Divider = Divider;
        }
      });

      /************************
      INTERNAL MODULE: ./loader
      ************************/

      ims.set('./loader', {
        hash: 1998167168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLoader = AppLoader;
          var _react = require("react");
          /*bundle*/
          function AppLoader() {
            return _react.default.createElement("div", {
              className: "process__loader"
            }, _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square "
            }), _react.default.createElement("div", {
              className: "square last"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page-header
      *****************************/

      ims.set('./page-header', {
        hash: 124916222,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          /*bundle*/
          function PageHeader({
            children,
            breadcrumb
          }) {
            return _react.default.createElement("header", {
              className: 'page__header'
            }, breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: breadcrumb
            }), children);
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./process-container
      ***********************************/

      ims.set('./process-container', {
        hash: 841653034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _clsx = require("clsx");
          var _loader = require("./loader");
          /*bundle */
          function ProcessContainer({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = (0, _clsx.default)('process-container', className);
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./range
      ***********************/

      ims.set('./range', {
        hash: 4158015036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Range = void 0;
          var _react = require("react");
          /* bundle */
          const Range = ({
            title,
            value,
            name,
            max,
            min,
            step,
            inputFunction,
            children
          }) => {
            const htmlFormString = name + 'Range';
            return _react.default.createElement("section", {
              className: 'range__container'
            }, _react.default.createElement("label", {
              htmlFor: htmlFormString
            }, _react.default.createElement("h3", null, title), _react.default.createElement("input", {
              value: value,
              name: name,
              onInput: inputFunction,
              type: 'range',
              max: max,
              min: min,
              step: step
            })), children);
          };
          exports.Range = Range;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./divider",
        "from": "Divider",
        "name": "Divider"
      }, {
        "im": "./loader",
        "from": "AppLoader",
        "name": "AppLoader"
      }, {
        "im": "./page-header",
        "from": "PageHeader",
        "name": "PageHeader"
      }, {
        "im": "./process-container",
        "from": "ProcessContainer",
        "name": "ProcessContainer"
      }, {
        "im": "./range",
        "from": "Range",
        "name": "Range"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Divider') && _export("Divider", Divider = require ? require('./divider').Divider : value);
        (require || prop === 'AppLoader') && _export("AppLoader", AppLoader = require ? require('./loader').AppLoader : value);
        (require || prop === 'PageHeader') && _export("PageHeader", PageHeader = require ? require('./page-header').PageHeader : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./process-container').ProcessContainer : value);
        (require || prop === 'Range') && _export("Range", Range = require ? require('./range').Range : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImV4cG9ydHMiLCJBcHBMb2FkZXIiLCJfYnJlYWRjcnVtYiIsIlBhZ2VIZWFkZXIiLCJjaGlsZHJlbiIsImJyZWFkY3J1bWIiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJfY2xzeCIsIl9sb2FkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJjbHMiLCJSYW5nZSIsInRpdGxlIiwidmFsdWUiLCJuYW1lIiwibWF4IiwibWluIiwic3RlcCIsImlucHV0RnVuY3Rpb24iLCJodG1sRm9ybVN0cmluZyIsImh0bWxGb3IiLCJvbklucHV0IiwidHlwZSJdLCJzb3VyY2VzIjpbIi90cy9kaXZpZGVyLnRzeCIsIi90cy9sb2FkZXIudHN4IiwiL3RzL3BhZ2UtaGVhZGVyLnRzeCIsIi90cy9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcmFuZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU87VUFBYSxNQUFNQyxPQUFPLEdBQUdBLENBQUM7WUFDcENDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQztVQUFNLENBS04sS0FBSTtZQUNKLE1BQU1DLE1BQU0sR0FBRztjQUNkQyxZQUFZLEVBQUUsYUFBYUosS0FBSyxFQUFFO2NBQ2xDQyxNQUFNO2NBQ05DO2FBQ0E7WUFFRCxPQUFPTCxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUMsU0FBUztjQUFDQyxLQUFLLEVBQUVMO1lBQU0sRUFBSTtVQUNsRCxD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