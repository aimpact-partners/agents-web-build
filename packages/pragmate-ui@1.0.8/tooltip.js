System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
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
          "vspecifier": "pragmate-ui@1.0.8/tooltip"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2468365654,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = Tooltip;
          var _react = require("react");
          /*bundle*/
          function Tooltip({
            children,
            content,
            placement = 'top',
            settings = {}
          }) {
            const ref = _react.default.useRef(null);
            const [showTooltip, setShowTooltip] = _react.default.useState(false);
            const placements = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'];
            if (!placements.includes(placement)) placement = 'top';
            const handleMouseEnter = () => {
              setShowTooltip(true);
            };
            const handleMouseLeave = () => {
              setShowTooltip(false);
            };
            const getTooltipPosition = () => {
              switch (placement) {
                case 'top':
                  return {
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  };
                case 'bottom':
                  return {
                    bottom: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  };
                case 'left':
                  return {
                    left: '-120px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  };
                case 'right':
                  return {
                    right: '-120px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  };
                default:
                  return {
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  };
              }
            };
            return _react.default.createElement("div", {
              style: {
                position: 'relative',
                display: 'inline-block'
              }
            }, _react.default.createElement("span", {
              ref: ref,
              className: "pui-tooltip",
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave
            }, children), showTooltip && content && _react.default.createElement("div", {
              className: "floating-ui-tooltip",
              style: {
                position: 'absolute',
                zIndex: 9999,
                ...getTooltipPosition()
              }
            }, content));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Tooltip",
        "name": "Tooltip"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Tooltip') && _export("Tooltip", Tooltip = require ? require('./index').Tooltip : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVG9vbHRpcCIsImNoaWxkcmVuIiwiY29udGVudCIsInBsYWNlbWVudCIsInNldHRpbmdzIiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInNob3dUb29sdGlwIiwic2V0U2hvd1Rvb2x0aXAiLCJ1c2VTdGF0ZSIsInBsYWNlbWVudHMiLCJpbmNsdWRlcyIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZ2V0VG9vbHRpcFBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJvdHRvbSIsInJpZ2h0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiekluZGV4Il0sInNvdXJjZXMiOlsiL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQVNPO1VBQVUsU0FBVUMsT0FBT0EsQ0FBQztZQUFDQyxRQUFRO1lBQUVDLE9BQU87WUFBRUMsU0FBUyxHQUFHLEtBQUs7WUFBRUMsUUFBUSxHQUFHO1VBQUUsQ0FBUztZQUMvRixNQUFNQyxHQUFHLEdBQUdQLE1BQUEsQ0FBQVEsT0FBSyxDQUFDQyxNQUFNLENBQWtCLElBQUksQ0FBQztZQUMvQyxNQUFNLENBQUNDLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdYLE1BQUEsQ0FBQVEsT0FBSyxDQUFDSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRTNELE1BQU1DLFVBQVUsR0FBYSxDQUM1QixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxPQUFPLEVBQ1AsYUFBYSxFQUNiLFdBQVcsRUFDWCxRQUFRLEVBQ1IsY0FBYyxFQUNkLFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsQ0FDVjtZQUVELElBQUksQ0FBQ0EsVUFBVSxDQUFDQyxRQUFRLENBQUNULFNBQVMsQ0FBQyxFQUFFQSxTQUFTLEdBQUcsS0FBSztZQUV0RCxNQUFNVSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQzdCSixjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFFRCxNQUFNSyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO2NBQzdCTCxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7WUFFRCxNQUFNTSxrQkFBa0IsR0FBR0EsQ0FBQSxLQUFLO2NBQy9CLFFBQVFaLFNBQVM7Z0JBQ2hCLEtBQUssS0FBSztrQkFDVCxPQUFPO29CQUFFYSxHQUFHLEVBQUUsT0FBTztvQkFBRUMsSUFBSSxFQUFFLEtBQUs7b0JBQUVDLFNBQVMsRUFBRTtrQkFBa0IsQ0FBRTtnQkFDcEUsS0FBSyxRQUFRO2tCQUNaLE9BQU87b0JBQUVDLE1BQU0sRUFBRSxPQUFPO29CQUFFRixJQUFJLEVBQUUsS0FBSztvQkFBRUMsU0FBUyxFQUFFO2tCQUFrQixDQUFFO2dCQUN2RSxLQUFLLE1BQU07a0JBQ1YsT0FBTztvQkFBRUQsSUFBSSxFQUFFLFFBQVE7b0JBQUVELEdBQUcsRUFBRSxLQUFLO29CQUFFRSxTQUFTLEVBQUU7a0JBQWtCLENBQUU7Z0JBQ3JFLEtBQUssT0FBTztrQkFDWCxPQUFPO29CQUFFRSxLQUFLLEVBQUUsUUFBUTtvQkFBRUosR0FBRyxFQUFFLEtBQUs7b0JBQUVFLFNBQVMsRUFBRTtrQkFBa0IsQ0FBRTtnQkFDdEU7a0JBQ0MsT0FBTztvQkFBRUYsR0FBRyxFQUFFLE9BQU87b0JBQUVDLElBQUksRUFBRSxLQUFLO29CQUFFQyxTQUFTLEVBQUU7a0JBQWtCLENBQUU7O1lBRXRFLENBQUM7WUFFRCxPQUNDcEIsTUFBQSxDQUFBUSxPQUFBLENBQUFlLGFBQUE7Y0FBS0MsS0FBSyxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsVUFBVTtnQkFBRUMsT0FBTyxFQUFFO2NBQWM7WUFBRSxHQUM1RDFCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBZSxhQUFBO2NBQ0NoQixHQUFHLEVBQUVBLEdBQUc7Y0FDUm9CLFNBQVMsRUFBQyxhQUFhO2NBQ3ZCQyxZQUFZLEVBQUViLGdCQUFnQjtjQUM5QmMsWUFBWSxFQUFFYjtZQUFnQixHQUU3QmIsUUFBUSxDQUNILEVBQ05PLFdBQVcsSUFBSU4sT0FBTyxJQUN0QkosTUFBQSxDQUFBUSxPQUFBLENBQUFlLGFBQUE7Y0FDQ0ksU0FBUyxFQUFDLHFCQUFxQjtjQUMvQkgsS0FBSyxFQUFFO2dCQUNOQyxRQUFRLEVBQUUsVUFBVTtnQkFDcEJLLE1BQU0sRUFBRSxJQUFJO2dCQUNaLEdBQUdiLGtCQUFrQjs7WUFDckIsR0FFQWIsT0FBTyxDQUVULENBQ0k7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==