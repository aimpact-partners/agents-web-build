System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, DropdownBottomMenu, __beyond_pkg, hmr;
  _export("DropdownBottomMenu", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Image) {
      dependency_3 = _pragmateUi108Image;
    }, function (_pragmateUi108Icons) {
      dependency_4 = _pragmateUi108Icons;
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
          "vspecifier": "pragmate-ui@1.0.8/dropdown-bottom-menu"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/image', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/dropdown-bottom-menu');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 3481600907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1436471338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownBottomMenu = DropdownBottomMenu;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _list = require("./list");
          /*bundle*/
          function DropdownBottomMenu({
            handleClick,
            show,
            items,
            children,
            isImage,
            title
          }) {
            const cls = show ? "pull-down-menu" : "pull-down-menu pull-down-menu__hide";
            const isItems = !!items && Array.isArray(items);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: cls
            }, (title || isImage) && _react.default.createElement("header", null, isImage && _react.default.createElement("div", {
              className: "image-menu"
            }, _react.default.createElement(_image.Image, {
              src: `${globalThis.baseDir}assets/dummy.svg`,
              alt: " "
            })), title && _react.default.createElement("span", null, title)), isItems && _react.default.createElement(_list.MenuList, {
              items: items
            }), children), show && _react.default.createElement("div", {
              onClick: handleClick,
              className: "background-black"
            }));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 4263323519,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuItem = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const MenuItem = ({
            item
          }) => {
            const {
              title,
              link,
              icon
            } = item;
            return _react.default.createElement("li", {
              className: "pull-down-menu__item"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement("a", {
              href: link
            }, title));
          };
          exports.MenuItem = MenuItem;
        }
      });

      /**********************
      INTERNAL MODULE: ./list
      **********************/

      ims.set('./list', {
        hash: 3770438484,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MenuList = void 0;
          var _react = require("react");
          var _item = require("./item");
          const MenuList = ({
            items
          }) => {
            const output = items.map(item => _react.default.createElement(_item.MenuItem, {
              key: item.icon,
              item: item
            }));
            return _react.default.createElement("ul", {
              className: "pull-down-menu__list"
            }, output);
          };
          exports.MenuList = MenuList;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "DropdownBottomMenu",
        "name": "DropdownBottomMenu"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownBottomMenu') && _export("DropdownBottomMenu", DropdownBottomMenu = require ? require('./index').DropdownBottomMenu : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaW1hZ2UiLCJfbGlzdCIsIkRyb3Bkb3duQm90dG9tTWVudSIsImhhbmRsZUNsaWNrIiwic2hvdyIsIml0ZW1zIiwiY2hpbGRyZW4iLCJpc0ltYWdlIiwidGl0bGUiLCJjbHMiLCJpc0l0ZW1zIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIkltYWdlIiwic3JjIiwiZ2xvYmFsVGhpcyIsImJhc2VEaXIiLCJhbHQiLCJNZW51TGlzdCIsIm9uQ2xpY2siLCJfaWNvbnMiLCJNZW51SXRlbSIsIml0ZW0iLCJsaW5rIiwiaWNvbiIsIkljb24iLCJocmVmIiwiX2l0ZW0iLCJvdXRwdXQiLCJtYXAiLCJrZXkiXSwic291cmNlcyI6WyIvL2RlZmluaXRpb25zLnRzLyIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9pdGVtLnRzeCIsIi8vdHMvbGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLFNBQVVHLGtCQUFrQkEsQ0FBQztZQUM1Q0MsV0FBVztZQUNYQyxJQUFJO1lBQ0pDLEtBQUs7WUFDTEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDO1VBQUssQ0FDVTtZQUNmLE1BQU1DLEdBQUcsR0FBV0wsSUFBSSxHQUNwQixnQkFBZ0IsR0FDaEIscUNBQXFDO1lBQ3pDLE1B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