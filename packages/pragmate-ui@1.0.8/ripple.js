System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, RippleEffect, __beyond_pkg, hmr;
  _export("RippleEffect", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
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
          "vspecifier": "pragmate-ui@1.0.8/ripple"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/ripple');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 702158720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RippleEffect = void 0;
          /*bundle*/
          class RippleEffect {
            elements;
            constructor(elements = undefined) {
              if (elements) this.add(elements);
            }
            add(elements) {
              this.elements = Array.isArray(elements) ? elements : [elements];
              this.elements.forEach(element => {
                element.classList.add('ripple');
                element.addEventListener('mousedown', this.onClick);
              });
            }
            addRippleEffect(ref) {
              this.add(ref);
            }
            onClick = event => {
              const rect = event.target.getBoundingClientRect();
              const x = event.clientX - rect.left;
              const y = event.clientY - rect.top;
              const ripple = document.createElement('span');
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              event.target.appendChild(ripple);
              setTimeout(() => {
                ripple.remove();
              }, 1000);
            };
            cleanup() {
              this.elements.forEach(element => {
                element.removeEventListener('mousedown', this.onClick);
              });
              this.elements = [];
            }
          }
          exports.RippleEffect = RippleEffect;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "RippleEffect",
        "name": "RippleEffect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RippleEffect') && _export("RippleEffect", RippleEffect = require ? require('./index').RippleEffect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSaXBwbGVFZmZlY3QiLCJlbGVtZW50cyIsImNvbnN0cnVjdG9yIiwidW5kZWZpbmVkIiwiYWRkIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwib25DbGljayIsImFkZFJpcHBsZUVmZmVjdCIsInJlZiIsImV2ZW50IiwicmVjdCIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwibGVmdCIsInkiLCJjbGllbnRZIiwidG9wIiwicmlwcGxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbGVhbnVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQVUsTUFBT0EsWUFBWTtZQUMzQkMsUUFBUTtZQUVoQkMsWUFBWUQsUUFBQSxHQUE0Q0UsU0FBUztjQUNoRSxJQUFJRixRQUFRLEVBQUUsSUFBSSxDQUFDRyxHQUFHLENBQUNILFFBQVEsQ0FBQztZQUNqQztZQUVRRyxHQUFHQSxDQUFDSCxRQUFRO2NBQ25CLElBQUksQ0FBQ0EsUUFBUSxHQUFHSSxLQUFLLENBQUNDLE9BQU8sQ0FBQ0wsUUFBUSxDQUFDLEdBQUdBLFFBQVEsR0FBRyxDQUFDQSxRQUFRLENBQUM7Y0FDL0QsSUFBSSxDQUFDQSxRQUFRLENBQUNNLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO2dCQUMvQkEsT0FBTyxDQUFDQyxTQUFTLENBQUNMLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQy9CSSxPQUFPLENBQUNFLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUNwRCxDQUFDLENBQUM7WUFDSDtZQUVPQyxlQUFlQSxDQUFDQyxHQUFRO2NBQzlCLElBQUksQ0FBQ1QsR0FBRyxDQUFDUyxHQUFHLENBQUM7WUFDZDtZQUVRRixPQUFPLEdBQUlHLEtBQWlCLElBQUk7Y0FDdkMsTUFBTUMsSUFBSSxHQUFJRCxLQUFLLENBQUNFLE1BQXNCLENBQUNDLHFCQUFxQixFQUFFO2NBQ2xFLE1BQU1DLENBQUMsR0FBR0osS0FBSyxDQUFDSyxPQUFPLEdBQUdKLElBQUksQ0FBQ0ssSUFBSTtjQUNuQyxNQUFNQyxDQUFDLEdBQUdQLEtBQUssQ0FBQ1EsT0FBTyxHQUFHUCxJQUFJLENBQUNRLEdBQUc7Y0FDbEMsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDN0NGLE1BQU0sQ0FBQ0csS0FBSyxDQUFDUCxJQUFJLEdBQUcsR0FBR0YsQ0FBQyxJQUFJO2NBQzVCTSxNQUFNLENBQUNHLEtBQUssQ0FBQ0osR0FBRyxHQUFHLEdBQUdGLENBQUMsSUFBSTtjQUMxQlAsS0FBSyxDQUFDRSxNQUFzQixDQUFDWSxXQUFXLENBQUNKLE1BQU0sQ0FBQztjQUNqREssVUFBVSxDQUFDLE1BQUs7Z0JBQ2ZMLE1BQU0sQ0FBQ00sTUFBTSxFQUFFO2NBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBRU1DLE9BQU9BLENBQUE7Y0FDYixJQUFJLENBQUM5QixRQUFRLENBQUNNLE9BQU8sQ0FBQ0MsT0FBTyxJQUFHO2dCQUMvQkEsT0FBTyxDQUFDd0IsbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQztjQUN2RCxDQUFDLENBQUM7Y0FDRixJQUFJLENBQUNWLFFBQVEsR0FBRyxFQUFFO1lBQ25COztVQUNBZ0MsT0FBQSxDQUFBakMsWUFBQSxHQUFBQSxZQUFBIiwiaWdub3JlTGlzdCI6W119