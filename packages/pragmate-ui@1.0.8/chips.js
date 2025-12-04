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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3JpcHBsZSIsIl9pY29ucyIsIkNoaXAiLCJwcm9wcyIsInR5cGUiLCJ0aXRsZSIsImNoaWxkcmVuIiwiaWNvbiIsInByb3BlcnRpZXMiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsInVzZVN0YXRlIiwiZm9yRWFjaCIsImtleSIsInVzZUVmZmVjdCIsIm9uQ2xpY2siLCJyaXBwbGUiLCJSaXBwbGVFZmZlY3QiLCJhZGRSaXBwbGVFZmZlY3QiLCJjdXJyZW50IiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJ2YXJpYW50IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiSWNvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJDaGlwcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiLy90cy9jaGlwLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBS087VUFBVSxTQUFVRyxJQUFJQSxDQUFDQyxLQUFnQjtZQUM1QyxNQUFNO2NBQUVDLElBQUk7Y0FBRUMsS0FBSztjQUFFQyxRQUFRO2NBQUVDO1lBQUksQ0FBRSxHQUFHSixLQUFLO1lBQzdDLE1BQU1LLFVBQVUsR0FBRztjQUFFLEdBQUdMO1lBQUssQ0FBRTtZ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