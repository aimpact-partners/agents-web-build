System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "tippy.js@6.3.7"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Tooltip, __beyond_pkg, hmr;
  _export("Tooltip", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_tippyJs) {
      dependency_2 = _tippyJs;
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
          "vspecifier": "pragmate-ui@1.0.2/tooltip"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['tippy.js', dependency_2]]);
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./ITippySettings
      ********************************/
      ims.set('./ITippySettings', {
        hash: 3730348027,
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
        hash: 780162422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tooltip = Tooltip;
          var _react = require("react");
          var _tippy = require("tippy.js");
          /*bundle*/
          function Tooltip({
            children,
            content,
            placement = 'top',
            settings = {}
          }) {
            const ref = _react.default.useRef(null);
            const placements = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'auto', 'auto-start', 'auto-end'];
            if (!placements.includes(placement)) placement = 'top';
            const specs = {
              placement,
              content
            };
            _react.default.useEffect(() => {
              (0, _tippy.default)(ref.current, specs);
            }, []);
            return _react.default.createElement("span", {
              ref: ref,
              className: "pui-tooltip"
            }, children);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfdGlwcHkiLCJUb29sdGlwIiwiY2hpbGRyZW4iLCJjb250ZW50IiwicGxhY2VtZW50Iiwic2V0dGluZ3MiLCJyZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwicGxhY2VtZW50cyIsImluY2x1ZGVzIiwic3BlY3MiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi8vSVRpcHB5U2V0dGluZ3MudHMvIiwiLy9pbmRleC50c3gvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBUU87VUFBVSxTQUFVRSxPQUFPQSxDQUFDO1lBQUNDLFFBQVE7WUFBRUMsT0FBTztZQUFFQyxTQUFTLEdBQUcsS0FBSztZQUFFQyxRQUFRLEdBQUc7VUFBRSxDQUFTO1lBQy9GLE1BQU1DLEdBQUcsR0FBR1IsTUFBQSxDQUFBUyxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIsTUFBTUMsVUFBVSxHQUFhLENBQzVCLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULE9BQU8sRUFDUCxhQUFhLEVBQ2IsV0FBVyxFQUNYLFFBQVEsRUFDUixjQUFjLEVBQ2QsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxDQUNWO1lBRUQsSUFBSSxDQUFDQSxVQUFVLENBQUNDLFFBQVEsQ0FBQ04sU0FBUyxDQUFDLEVBQUVBLFNBQVMsR0FBRyxLQUFLO1lBQ3RELE1BQU1PLEtBQUssR0FBbUI7Y0FBQ1AsU0FBUztjQUFFRDtZQUFPLENBQUM7WUFDbERMLE1BQUEsQ0FBQVMsT0FBSyxDQUFDSyxTQUFTLENBQUMsTUFBSztjQUNwQixJQUFBWixNQUFBLENBQUFPLE9BQUssRUFBQ0QsR0FBRyxDQUFDTyxPQUFPLEVBQUVGLEtBQUssQ0FBQztZQUMxQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sT0FDQ2IsTUFBQSxDQUFBUyxPQUFBLENBQUFPLGFBQUE7Y0FBTVIsR0FBRyxFQUFFQSxHQUFHO2NBQUVTLFNBQVMsRUFBQztZQUFhLEdBQ3JDYixRQUFRLENBQ0g7VUFFVCIsImlnbm9yZUxpc3QiOltdfQ==