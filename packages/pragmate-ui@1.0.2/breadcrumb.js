System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/react-18-widgets@1.0.4/hooks", "uuid@11.1.0", "pragmate-ui@1.0.2/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel0112Routing) {
      dependency_3 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_4 = _beyondJsReact18Widgets104Hooks;
    }, function (_uuid2) {
      dependency_5 = _uuid2;
    }, function (_pragmateUi102Components) {
      dependency_6 = _pragmateUi102Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['uuid', dependency_5], ['pragmate-ui/components', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3543951005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _uuid = require("uuid");
          var _item = require("./item");
          /* bundle */
          function BreadCrumb({
            items,
            separator = '/',
            className,
            children,
            ...props
          }) {
            const [currentRouting, setCurrentRouting] = _react.default.useState(_routing.routing.uri.pathname);
            (0, _hooks.useBinder)([_routing.routing], () => setCurrentRouting(_routing.routing.uri.pathname));
            const total = items.length;
            const breadcrumbOutput = items.map(([label, link], index) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              total: total,
              index: index,
              separator: separator,
              link: link,
              label: label,
              last: total === index + 1,
              currentRouting: currentRouting
            }));
            let cls = `pui-breadcrumb__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              ...props
            }, breadcrumbOutput.length > 0 && _react.default.createElement("ul", {
              className: "pui-breadcrumb"
            }, breadcrumbOutput), children && _react.default.createElement("div", null, children));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2741562250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          function Item({
            link,
            label,
            last,
            currentRouting,
            index,
            total,
            separator = '>'
          }) {
            const isChecked = link === currentRouting || last ? 'breadcrumb__item--current' : 'breadcrumb__item';
            const isFunction = typeof link === 'function';
            const attrs = {};
            if (isFunction) {
              attrs.onClick = link;
            } else {
              attrs.href = link;
            }
            return _react.default.createElement("li", {
              key: `${link} ${label}`,
              className: "pui-breadcrumb-item__container"
            }, _react.default.createElement(_components.Link, {
              className: isChecked,
              ...attrs
            }, label, total > index + 1 && _react.default.createElement("span", {
              className: "pui-breadcrumb__separator"
            }, separator)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2303835339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "BreadCrumb",
        "name": "BreadCrumb"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BreadCrumb') && _export("BreadCrumb", BreadCrumb = require ? require('./index').BreadCrumb : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JvdXRpbmciLCJfaG9va3MiLCJfdXVpZCIsIl9pdGVtIiwiQnJlYWRDcnVtYiIsIml0ZW1zIiwic2VwYXJhdG9yIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImN1cnJlbnRSb3V0aW5nIiwic2V0Q3VycmVudFJvdXRpbmciLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJ1c2VCaW5kZXIiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJJdGVtIiwia2V5IiwidjQiLCJsYXN0IiwiY2xzIiwiX2NvbXBvbmVudHMiLCJpc0NoZWNrZWQiLCJpc0Z1bmN0aW9uIiwiYXR0cnMiLCJvbkNsaWNrIiwiaHJlZiIsIkxpbmsiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9pbmRleC50c3giLCIvdHMvaXRlbS50c3giLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFFQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxLQUFBLEdBQUFKLE9BQUE7VUFFTztVQUFZLFNBQVVLLFVBQVVBLENBQUM7WUFBRUMsS0FBSztZQUFFQyxTQUFTLEdBQUcsR0FBRztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFLLENBQVU7WUFDeEcsTUFBTSxDQUFDQyxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdi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