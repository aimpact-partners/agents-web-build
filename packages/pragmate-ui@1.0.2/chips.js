System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.2/ripple", "tippy.js@6.3.7", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi102Ripple) {
      dependency_3 = _pragmateUi102Ripple;
    }, function (_tippyJs) {
      dependency_4 = _tippyJs;
    }, function (_pragmateUi102Icons) {
      dependency_5 = _pragmateUi102Icons;
    }, function (_pragmateUi102Base) {
      dependency_6 = _pragmateUi102Base;
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
          "vspecifier": "pragmate-ui@1.0.2/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['tippy.js', dependency_4], ['pragmate-ui/icons', dependency_5], ['pragmate-ui/base', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/chips');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./chip
      **********************/
      ims.set('./chip', {
        hash: 4064505056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function Chip(props) {
            const {
              type,
              title,
              children,
              icon
            } = props;
            const properties = {
              ...props
            };
            const ref = _react.default.useRef(null);
            ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);
            _react.default.useEffect(() => {
              if (properties.onClick) {
                const ripple = new _ripple.RippleEffect();
                ripple.addRippleEffect(ref.current);
              }
              if (title) (0, _tippy.default)(ref.current);
            }, [properties.onClick, title]);
            if (title) properties['data-tippy-content'] = title;
            const variant = props.variant || props.type || 'default';
            let cls = `pui-chip pui-chip--${variant}`;
            if (properties.onClick) {
              cls += ` is-clickable`;
            }
            return _react.default.createElement("span", {
              ref: ref,
              className: cls,
              ...properties
            }, children, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3044580695,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chips = Chips;
          var _react = require("react");
          /*bundle*/
          function Chips(props) {
            const {
              children
            } = props;
            const properties = {
              ...props
            };
            ['items', 'type', 'variant'].forEach(key => delete properties[key]);
            // const cls = `${props.type ? `pui-chip__container--${props.type}` : ''}`;
            const variant = props.variant || props.type || 'default';
            const cls = `pui-chip__container pui-chip__container--${variant}`;
            properties.className = `pui-chip__container${properties.className ? ` ${properties.className}` : ''} ${cls}`;
            return _react.default.createElement("div", {
              ...properties
            }, _react.default.createElement("div", {
              className: 'content-chip'
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 710310839,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chip",
        "from": "Chip",
        "name": "Chip"
      }, {
        "im": "./index",
        "from": "Chips",
        "name": "Chips"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chip') && _export("Chip", Chip = require ? require('./chip').Chip : value);
        (require || prop === 'Chips') && _export("Chips", Chips = require ? require('./index').Chips : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl90aXBweSIsIl9pY29ucyIsIkNoaXAiLCJwcm9wcyIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwidmFyaWFudCIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uIiwiQ2hpcHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi8vdHMvY2hpcC50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHlwZXMudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBS087VUFBVSxTQUFVSSxJQUFJQSxDQUFDQyxLQUFnQjtZQUM1QyxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDO1lBQUksQ0FBRSxHQUFHSixLQUFLO1lBQzdDLE1BQU1LLFVBQVUsR0FBRztjQUFFLEdBQUdMO1lBQUssQ0FBRTtZQUMvQixNQUFNTSxHQUFHLEdBQUdaLE1BQUEsQ0FBQWEsT0FBSyxDQUFDQyxNQUFNLENBQWtCLElBQUksQ0FBQztZQUUvQyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdB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