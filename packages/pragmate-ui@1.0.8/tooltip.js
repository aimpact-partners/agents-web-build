System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVG9vbHRpcCIsImNoaWxkcmVuIiwiY29udGVudCIsInBsYWNlbWVudCIsInNldHRpbmdzIiwicmVmIiwiZGVmYXVsdCIsInVzZVJlZiIsInNob3dUb29sdGlwIiwic2V0U2hvd1Rvb2x0aXAiLCJ1c2VTdGF0ZSIsInBsYWNlbWVudHMiLCJpbmNsdWRlcyIsImhhbmRsZU1vdXNlRW50ZXIiLCJoYW5kbGVNb3VzZUxlYXZlIiwiZ2V0VG9vbHRpcFBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJvdHRvbSIsInJpZ2h0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiekluZGV4Il0sInNvdXJjZXMiOlsiLy9pbmRleC50c3gvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBU087VUFBVSxTQUFVQyxPQUFPQSxDQUFDO1lBQUNDLFFBQVE7WUFBRUMsT0FBTztZQUFFQyxTQUFTLEdBQUcsS0FBSztZQUFFQyxRQUFRLEdBQUc7VUFBRSxDQUFTO1lBQy9GLE1BQU1DLEdBQUcsR0FBR1AsTUFBQSxDQUFBUSxPQUFLLENBQUNDLE1BQU0sQ0FBa0IsSUFBSSxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR1gsTUFBQSxDQUFBUSxPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFM0QsTUFBTUMsVUFBVSxHQUFhLENBQzVCLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFFBQVEsRUFDUixjQUFjLEVBQ2QsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxDQUNWO1lBRUQsSUFBSSxDQUFDQSxVQUFVLENBQUNDLFFBQVEsQ0FBQ1QsU0FBUyxDQUFDLEVBQUVBLFNBQVMsR0FBRyxLQUFLO1lBRXRELE1BQU1VLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDN0JKLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQztZQUVELE1BQU1LLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7Y0FDN0JMLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDdEIsQ0FBQztZQUVELE1BQU1NLGtCQUFrQixHQUFHQSxDQUFBLEtBQUs7Y0FDL0IsUUFBUVosU0FBUztnQkFDaEIsS0FBSyxLQUFLO2tCQUNULE9BQU87b0JBQUVhLEdBQUcsRUFBRSxPQUFPO29CQUFFQyxJQUFJLEVBQUUsS0FBSztvQkFBRUMsU0FBUyxFQUFFO2tCQUFrQixDQUFFO2dCQUNwRSxLQUFLLFFBQVE7a0JBQ1osT0FBTztvQkFBRUMsTUFBTSxFQUFFLE9BQU87b0JBQUVGLElBQUksRUFBRSxLQUFLO29CQUFFQyxTQUFTLEVBQUU7a0JBQWtCLENBQUU7Z0JBQ3ZFLEtBQUssTUFBTTtrQkFDVixPQUFPO29CQUFFRCxJQUFJLEVBQUUsUUFBUTtvQkFBRUQsR0FBRyxFQUFFLEtBQUs7b0JBQUVFLFNBQVMsRUFBRTtrQkFBa0IsQ0FBRTtnQkFDckUsS0FBSyxPQUFPO2tCQUNYLE9BQU87b0JBQUVFLEtBQUssRUFBRSxRQUFRO29CQUFFSixHQUFHLEVBQUUsS0FBSztvQkFBRUUsU0FBUyxFQUFFO2tCQUFrQixDQUFFO2dCQUN0RTtrQkFDQyxPQUFPO29CQUFFRixHQUFHLEVBQUUsT0FBTztvQkFBRUMsSUFBSSxFQUFFLEtBQUs7b0JBQUVDLFNBQVMsRUFBRTtrQkFBa0IsQ0FBRTs7WUFFdEUsQ0FBQztZQUVELE9BQ0NwQixNQUFBLENBQUFRLE9BQUEsQ0FBQWUsYUFBQTtjQUFLQyxLQUFLLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxVQUFVO2dCQUFFQyxPQUFPLEVBQUU7Y0FBYztZQUFFLEdBQzVEMUIsTUFBQSxDQUFBUSxPQUFBLENBQUFlLGFBQUE7Y0FDQ2hCLEdBQUcsRUFBRUEsR0FBRztjQUNSb0IsU0FBUyxFQUFDLGFBQWE7Y0FDdkJDLFlBQVksRUFBRWIsZ0JBQWdCO2NBQzlCYyxZQUFZLEVBQUViO1lBQWdCLEdBRTdCYixRQUFRLENBQ0gsRUFDTk8sV0FBVyxJQUFJTixPQUFPLElBQ3RCSixNQUFBLENBQUFRLE9BQUEsQ0FBQWUsYUFBQTtjQUNDSSxTQUFTLEVBQUMscUJBQXFCO2NBQy9CSCxLQUFLLEVBQUU7Z0JBQ05DLFFBQVEsRUFBRSxVQUFVO2dCQUNwQkssTUFBTSxFQUFFLElBQUk7Z0JBQ1osR0FBR2Isa0JBQWtCOztZQUNyQixHQUVBYixPQUFPLENBRVQsQ0FDSTtVQUVSIiwiaWdub3JlTGlzdCI6W119