System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/ripple", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Chip, Chips, __beyond_pkg, hmr;
  _export({
    Chip: void 0,
    Chips: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Ripple) {
      dependency_3 = _pragmateUi108Ripple;
    }, function (_pragmateUi108Icons) {
      dependency_4 = _pragmateUi108Icons;
    }, function (_pragmateUi108Base) {
      dependency_5 = _pragmateUi108Base;
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
          "vspecifier": "pragmate-ui@1.0.8/chips"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/ripple', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/base', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/chips');
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./chip
      **********************/
      ims.set('./chip', {
        hash: 2908861372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chip = Chip;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
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
            const [showTooltip, setShowTooltip] = _react.default.useState(false);
            ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);
            _react.default.useEffect(() => {
              if (properties.onClick) {
                const ripple = new _ripple.RippleEffect();
                ripple.addRippleEffect(ref.current);
              }
            }, [properties.onClick]);
            const handleMouseEnter = () => {
              if (title) setShowTooltip(true);
            };
            const handleMouseLeave = () => {
              if (title) setShowTooltip(false);
            };
            const variant = props.variant || props.type || 'default';
            let cls = `pui-chip pui-chip--${variant}`;
            if (properties.onClick) {
              cls += ` is-clickable`;
            }
            return _react.default.createElement("div", {
              style: {
                position: 'relative',
                display: 'inline-block'
              }
            }, _react.default.createElement("span", {
              ref: ref,
              className: cls,
              ...properties,
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave
            }, children, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            })), showTooltip && title && _react.default.createElement("div", {
              className: "floating-ui-tooltip",
              style: {
                position: 'absolute',
                top: '-40px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999
              }
            }, title));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl9pY29ucyIsIkNoaXAiLCJwcm9wcyIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsInVzZVN0YXRlIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJ2YXJpYW50IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiSWNvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJDaGlwcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NoaXAudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxPQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFLTztVQUFVLFNBQVVHLElBQUlBLENBQUNDLEtBQWdCO1lBQzVDLE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUM7WUFBSSxDQUFFLEdBQUdKLEtBQUs7WUFDN0MsTUFBTUssVUFBVSxHQUFHO2NBQUUsR0FBR0w7WUFBSyxDQUFFO1lBQy9C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