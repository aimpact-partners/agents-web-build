System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Preload, __beyond_pkg, hmr;
  _export("Preload", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "pragmate-ui@1.0.8/preload"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/preload');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 384493270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          /*bundle */
          function Preload(props) {
            const {
              width,
              height,
              color,
              stopAnimation,
              radio
            } = props;
            return _react.default.createElement("span", {
              className: 'pui-preload',
              style: {
                width: width || '100%',
                height: height || '14px',
                background: color || '',
                borderRadius: radio || ''
              }
            }, _react.default.createElement("span", {
              style: {
                display: stopAnimation ? 'none' : 'block'
              }
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Preload",
        "name": "Preload"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Preload') && _export("Preload", Preload = require ? require('./index').Preload : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiUHJlbG9hZCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsInN0b3BBbmltYXRpb24iLCJyYWRpbyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSJdLCJzb3VyY2VzIjpbIi8vdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBVU87VUFBVyxTQUFVQyxPQUFPQSxDQUFDQyxLQUFxQjtZQUN4RCxNQUFNO2NBQUVDLEtBQUs7Y0FBRUMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDLGFBQWE7Y0FBRUM7WUFBSyxDQUFFLEdBQUdMLEtBQUs7WUFFNUQsT0FDQ0gsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FDQ0MsU0FBUyxFQUFDLGFBQWE7Y0FDdkJDLEtBQUssRUFBRTtnQkFDTlIsS0FBSyxFQUFFQSxLQUFLLElBQUksTUFBTTtnQkFDdEJDLE1BQU0sRUFBRUEsTUFBTSxJQUFJLE1BQU07Z0JBQ3hCUSxVQUFVLEVBQUVQLEtBQUssSUFBSSxFQUFFO2dCQUN2QlEsWUFBWSxFQUFFTixLQUFLLElBQUk7O1lBQ3ZCLEdBRURSLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLEtBQUssRUFBRTtnQkFBRUcsT0FBTyxFQUFFUixhQUFhLEdBQUcsTUFBTSxHQUFHO2NBQU87WUFBRSxFQUFJLENBQ3hEO1VBRVQiLCJpZ25vcmVMaXN0IjpbXX0=