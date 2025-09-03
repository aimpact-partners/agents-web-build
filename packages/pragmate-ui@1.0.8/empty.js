System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Empty, __beyond_pkg, hmr;
  _export("Empty", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_pragmateUi108Base) {
      dependency_4 = _pragmateUi108Base;
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
          "vspecifier": "pragmate-ui@1.0.8/empty"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/empty');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./empty
      ***********************/
      ims.set('./empty', {
        hash: 2550635151,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Empty(props) {
            const cls = `${props.className ?? ''} pui-empty-section`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "content"
            }, props.icon && _react.default.createElement(_icons.Icon, {
              className: "pui-empty__icon",
              icon: props.icon
            }), props.text && _react.default.createElement("h3", null, props.text), props.children && props.children));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./empty",
        "from": "Empty",
        "name": "Empty"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Empty') && _export("Empty", Empty = require ? require('./empty').Empty : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiRW1wdHkiLCJwcm9wcyIsImNscyIsImNsYXNzTmFtZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiaWNvbiIsIkljb24iLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlcyI6WyIvL3RzL2VtcHR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFRTztVQUFVLFNBQ1JFLEtBQUtBLENBQUNDLEtBQWtCO1lBQ2hDLE1BQU1DLEdBQUcsR0FBRyxHQUFHRCxLQUFLLENBQUNFLFNBQVMsSUFBSSxFQUFFLG9CQUFvQjtZQUV4RCxPQUNDTixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRixTQUFTLEVBQUVEO1lBQUcsR0FDbEJMLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBO2NBQUtGLFNBQVMsRUFBQztZQUFTLEdBQ3RCRixLQUFLLENBQUNLLElBQUksSUFBSVQsTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sTUFBQSxDQUFBUSxJQUFJO2NBQUNKLFNBQVMsRUFBQyxpQkFBaUI7Y0FBQ0csSUFBSSxFQUFFTCxLQUFLLENBQUNLO1lBQUksRUFBSSxFQUNwRUwsS0FBSyxDQUFDTyxJQUFJLElBQUlYLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLGFBQUtKLEtBQUssQ0FBQ08sSUFBSSxDQUFNLEVBQ25DUCxLQUFLLENBQUNRLFFBQVEsSUFBSVIsS0FBSyxDQUFDUSxRQUFRLENBQzVCLENBQ0Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==