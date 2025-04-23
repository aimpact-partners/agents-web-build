System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/breadcrumb"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Divider, PageHeader, Range, __beyond_pkg, hmr;
  _export({
    Divider: void 0,
    PageHeader: void 0,
    Range: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta7Breadcrumb) {
      dependency_3 = _pragmateUi100Beta7Breadcrumb;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/breadcrumb', dependency_3]]);
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
        "im": "./page-header",
        "from": "PageHeader",
        "name": "PageHeader"
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
        (require || prop === 'PageHeader') && _export("PageHeader", PageHeader = require ? require('./page-header').PageHeader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImV4cG9ydHMiLCJfYnJlYWRjcnVtYiIsIlBhZ2VIZWFkZXIiLCJjaGlsZHJlbiIsImJyZWFkY3J1bWIiLCJCcmVhZENydW1iIiwiaXRlbXMiLCJSYW5nZSIsInRpdGxlIiwidmFsdWUiLCJuYW1lIiwibWF4IiwibWluIiwic3RlcCIsImlucHV0RnVuY3Rpb24iLCJodG1sRm9ybVN0cmluZyIsImh0bWxGb3IiLCJvbklucHV0IiwidHlwZSJdLCJzb3VyY2VzIjpbIi90cy9kaXZpZGVyLnRzeCIsIi90cy9wYWdlLWhlYWRlci50c3giLCIvdHMvcmFuZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQWEsTUFBTUMsT0FBTyxHQUFHQSxDQUFDO1lBQ3BDQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkM7VUFBTSxDQUtOLEtBQUk7WUFDSixNQUFNQyxNQUFNLEdBQUc7Y0FDZEMsWUFBWSxFQUFFLGFBQWFKLEtBQUssRUFBRTtjQUNsQ0MsTUFBTTtjQUNOQzthQUNBO1lBRUQsT0FBT0wsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDLFNBQVM7Y0FBQ0MsS0FBSyxFQUFFTDtZQUFNLEVBQUk7VUFDbEQsQ0FBQztVQUFDTSxPQUFBLENBQUFWLE9BQUEsR0FBQUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkYsSUFBQUYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVksV0FBQSxHQUFBWixPQUFBO1VBRU87VUFBVSxTQUFVYSxVQUFVQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBVSxDQUFFO1lBQzdELE9BQ0NoQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBYyxHQUM5Qk0sVUFBVSxJQUFJaEIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0ksV0FBQSxDQUFBSSxVQUFVO2NBQUNDLEtBQUssRUFBRUY7WUFBVSxFQUFJLEVBQy9DRCxRQUFRLENBQ0Q7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWQSxJQUFBZixNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFhLE1BQU1rQixLQUFLLEdBQUdBLENBQUM7WUFDbENDLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxJQUFJO1lBQ0pDLEdBQUc7WUFDSEMsR0FBRztZQUNIQyxJQUFJO1lBQ0pDLGFBQWE7WUFDYlg7VUFBUSxDQVVSLEtBQUk7WUFDSixNQUFNWSxjQUFjLEdBQUdMLElBQUksR0FBRyxPQUFPO1lBRXJDLE9BQ0N0QixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBa0IsR0FDcENWLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU9tQixPQUFPLEVBQUVEO1lBQWMsR0FDN0IzQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQSxhQUFLVyxLQUFLLENBQU0sRUFDaEJwQixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFPWSxLQUFLLEVBQUVBLEtBQUs7Y0FBRUMsSUFBSSxFQUFFQSxJQUFJO2NBQUVPLE9BQU8sRUFBRUgsYUFBYTtjQUFFSSxJQUFJLEVBQUMsT0FBTztjQUFDUCxHQUFHLEVBQUVBLEdBQUc7Y0FBRUMsR0FBRyxFQUFFQSxHQUFHO2NBQUVDLElBQUksRUFBRUE7WUFBSSxFQUFJLENBQ2pHLEVBQ1BWLFFBQVEsQ0FDQTtVQUVaLENBQUM7VUFBQ0gsT0FBQSxDQUFBTyxLQUFBLEdBQUFBLEtBQUEiLCJpZ25vcmVMaXN0IjpbXX0=