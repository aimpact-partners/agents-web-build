System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "uuid@11.1.0", "pragmate-ui@1.0.8/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, BreadCrumb, __beyond_pkg, hmr;
  _export("BreadCrumb", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_uuid2) {
      dependency_3 = _uuid2;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["tippy.js", "6.3.7"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/breadcrumb"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['uuid', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/breadcrumb');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1498626072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadCrumb = BreadCrumb;
          var _react = require("react");
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
            const total = items.length;
            const breadcrumbOutput = items.map(([label, link], index) => _react.default.createElement(_item.Item, {
              key: (0, _uuid.v4)(),
              total: total,
              index: index,
              separator: separator,
              link: link,
              label: label,
              last: total === index + 1
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
        hash: 4022200267,
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
            index,
            total,
            separator = '>'
          }) {
            const isChecked = last ? 'breadcrumb__item--current' : 'breadcrumb__item';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3V1aWQiLCJfaXRlbSIsIkJyZWFkQ3J1bWIiLCJpdGVtcyIsInNlcGFyYXRvciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0b3RhbCIsImxlbmd0aCIsImJyZWFkY3J1bWJPdXRwdXQiLCJtYXAiLCJsYWJlbCIsImxpbmsiLCJpbmRleCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiSXRlbSIsImtleSIsInY0IiwibGFzdCIsImNscyIsIl9jb21wb25lbnRzIiwiaXNDaGVja2VkIiwiaXNGdW5jdGlvbiIsImF0dHJzIiwib25DbGljayIsImhyZWYiLCJMaW5rIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiXSwic291cmNlcyI6WyIvL3RzL2luZGV4LnRzeCIsIi8vdHMvaXRlbS50c3giLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBR087VUFBWSxTQUFVRyxVQUFVQSxDQUFDO1lBQUVDLEtBQUs7WUFBRUMsU0FBUyxHQUFHLEdBQUc7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFBSyxDQUFVO1lBQ3hHLE1BQU1DLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxNQUFNO1lBQzFCLE1BQU1DLGdCQUFnQixHQUFHUCxLQUFLLENBQUNRLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBRUMsSUFBSSxDQUFDLEVBQUVDLEtBQUssS0FDdkRoQixNQUFBLENBQUFpQixPQUFBLENBQUFDLGFBQUEsQ0FBQ2YsS0FBQSxDQUFBZ0IsSUFBSTtjQUNKQyxHQUFHLEVBQUUsSUFBQWxCLEtBQUEsQ0FBQW1CLEVBQUksR0FBRTtjQUNYWCxLQUFLLEVBQUVBLEtBQUs7Y0FDWk0sS0FBSyxFQUFFQSxLQUFLO2NBQ1pWLFNBQVMsRUFBRUEsU0FBUztjQUNwQlMsSUFBSSxFQUFFQSxJQUFJO2NBQ1ZELEtBQUssRUFBRUEsS0FBSztjQUNaUSxJQUFJLEVBQUVaLEtBQUssS0FBS00sS0FBSyxHQUFHO1lBQUMsRUFFMUIsQ0FBQztZQUVGLElBQUlPLEdBQUcsR0FBRyw0QkFBNEJoQixTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBRXhFLE9BQ0NQLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQTtjQUFLWCxTQUFTLEVBQUVnQixHQUFHO2NBQUEsR0FBTWQ7WUFBSyxHQUM1QkcsZ0JBQWdCLENBQUNELE1BQU0sR0FBRyxDQUFDLElBQUlYLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQTtjQUFJWCxTQUFTLEVBQUM7WUFBZ0IsR0FBRUssZ0JBQWdCLENBQU0sRUFDckZKLFFBQVEsSUFBSVIsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBLGNBQU1WLFFBQVEsQ0FBTyxDQUM3QjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBUixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBdUIsV0FBQSxHQUFBdkIsT0FBQTtVQUdNLFNBQVVrQixJQUFJQSxDQUFDO1lBQUVKLElBQUk7WUFBRUQsS0FBSztZQUFFUSxJQUFJO1lBQUVOLEtBQUs7WUFBRU4sS0FBSztZQUFFSixTQUFTLEdBQUc7VUFBRyxDQUFTO1lBQy9FLE1BQU1tQixTQUFTLEdBQUdILElBQUksR0FBRywyQkFBMkIsR0FBRyxrQkFBa0I7WUFDekUsTUFBTUksVUFBVSxHQUFHLE9BQU9YLElBQUksS0FBSyxVQUFVO1lBQzdDLE1BQU1ZLEtBQUssR0FBRyxFQUF5RDtZQUN2RSxJQUFJRCxVQUFVLEVBQUU7Y0FDZkMsS0FBSyxDQUFDQyxPQUFPLEdBQUdiLElBQUk7YUFDcEIsTUFBTTtjQUNOWSxLQUFLLENBQUNFLElBQUksR0FBR2QsSUFBSTs7WUFHbEIsT0FDQ2YsTUFBQSxDQUFBaUIsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLEdBQUcsRUFBRSxHQUFHTCxJQUFJLElBQUlELEtBQUssRUFBRTtjQUFFUCxTQUFTLEVBQUM7WUFBZ0MsR0FDdEVQLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTSxXQUFBLENBQUFNLElBQUk7Y0FBQ3ZCLFNBQVMsRUFBRWtCLFNBQVM7Y0FBQSxHQUFNRTtZQUFLLEdBQ25DYixLQUFLLEVBQ0xKLEtBQUssR0FBR00sS0FBSyxHQUFHLENBQUMsSUFBSWhCLE1BQUEsQ0FBQWlCLE9BQUEsQ0FBQUMsYUFBQTtjQUFNWCxTQUFTLEVBQUM7WUFBMkIsR0FBRUQsU0FBUyxDQUFRLENBQzlFLENBQ0g7VUFFUDs7Ozs7Ozs7Ozs7VUN0QkE7O1VBRUF5QixNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=