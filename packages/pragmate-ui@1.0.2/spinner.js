System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Spinner, __beyond_pkg, hmr;
  _export("Spinner", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/spinner"
        },
        "type": "code",
        "name": "spinner"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/styles', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/spinner');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./spinner
      *************************/
      ims.set('./spinner', {
        hash: 3225295911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          /*bundle*/
          const Spinner = exports.Spinner = (0, _react.forwardRef)((props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = className ? `${className} pragmate-element-spinner` : 'pragmate-element-spinner';
            if (active) cls += ' is-active';
            const sizes = {
              xs: 30,
              md: 40,
              lg: 50,
              xl: 60
            };
            const circleSize = sizes[size] || 30;
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: '0 0 100 100'
            }, _react.default.createElement("circle", {
              cx: '50',
              cy: '50',
              r: circleSize,
              style: style
            })));
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3Bpbm5lciIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJjb2xvciIsImNsYXNzTmFtZSIsInNpemUiLCJ0eXBlIiwiYWN0aXZlIiwidHlwZXMiLCJjbHNUeXBlIiwiaW5jbHVkZXMiLCJzdHlsZSIsInN0cm9rZSIsImNscyIsInNpemVzIiwieHMiLCJtZCIsImxnIiwieGwiLCJjaXJjbGVTaXplIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiXSwic291cmNlcyI6WyIvL3RzL3NwaW5uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVFPO1VBQ1AsTUFBTUMsT0FBTyxHQUFBQyxPQUFBLENBQUFELE9BQUEsR0FBa0QsSUFBQUYsTUFBQSxDQUFBSSxVQUFVLEVBQ3hFLENBQUNDLEtBQWlCLEVBQUVDLEdBQThCLEtBQWlCO1lBQ2xFLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxTQUFTO2NBQUVDLElBQUk7Y0FBRUMsSUFBSTtjQUFFQztZQUFNLENBQUUsR0FBR04sS0FBSztZQUVwRCxNQUFNTyxLQUFLLEdBQUcsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDMUcsTUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNFLFFBQVEsQ0FBQ0osSUFBSSxDQUFDLEdBQUdBLElBQUksR0FBRyxTQUFTO1lBRXZELE1BQU1LLEtBQUssR0FBd0IsRUFBRTtZQUNyQyxJQUFJUixLQUFLLEVBQUVRLEtBQUssQ0FBQ0MsTUFBTSxHQUFHVCxLQUFLO1lBQy9CQyxTQUFTLEdBQUcsR0FBR0ssT0FBTyxHQUFHTCxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzNELElBQUlTLEdBQUcsR0FBV1QsU0FBUyxHQUFHLEdBQUdBLFNBQVMsMkJBQTJCLEdBQUcsMEJBQTBCO1lBQ2xHLElBQUlHLE1BQU0sRUFBRU0sR0FBRyxJQUFJLFlBQVk7WUFFL0IsTUFBTUMsS0FBSyxHQUFHO2NBQ2JDLEVBQUUsRUFBRSxFQUFFO2NBQ05DLEVBQUUsRUFBRSxFQUFFO2NBQ05DLEVBQUUsRUFBRSxFQUFFO2NBQ05DLEVBQUUsRUFBRTthQUNKO1lBQ0QsTUFBTUMsVUFBVSxHQUFHTCxLQUFLLENBQUNULElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFcEMsT0FDQ1QsTUFBQSxDQUFBd0IsT0FBQSxDQUFBQyxhQUFBO2NBQUtqQixTQUFTLEVBQUVTLEdBQUc7Y0FBRVgsR0FBRyxFQUFFQTtZQUFHLEdBQzVCTixNQUFBLENBQUF3QixPQUFBLENBQUFDLGFBQUE7Y0FBS0MsT0FBTyxFQUFDO1lBQWEsR0FDekIxQixNQUFBLENBQUF3QixPQUFBLENBQUFDLGFBQUE7Y0FBUUUsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsRUFBRSxFQUFDLElBQUk7Y0FBQ0MsQ0FBQyxFQUFFTixVQUFVO2NBQUVSLEtBQUssRUFBRUE7WUFBSyxFQUFJLENBQ2xELENBQ0Q7VUFFUixDQUFDLENBQ0QiLCJpZ25vcmVMaXN0IjpbXX0=