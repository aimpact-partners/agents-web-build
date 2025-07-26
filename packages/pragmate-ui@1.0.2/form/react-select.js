System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactSelect, __beyond_pkg, hmr;
  _export("ReactSelect", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "pragmate-ui@1.0.2/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/form/react-select');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1442099142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactSelect = ReactSelect;
          var _react = require("react");
          var _mobileSelect = require("./mobile-select");
          /*bundle*/ /**
                      * The component is deprecated is 'select' component instead.
                      * @deprecated
                      * @param props
                      * @returns
                      */
          function ReactSelect(props) {
            let properties = {
              ...props
            };
            delete properties.onChange;
            return _react.default.createElement(_mobileSelect.MobileSelect, {
              ...props
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./mobile-select
      *******************************/

      ims.set('./mobile-select', {
        hash: 1249938230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileSelect = MobileSelect;
          var React = require("react");
          function MobileSelect({
            label,
            options,
            placeholder,
            id,
            isDisabled,
            disabled,
            ...rest
          }) {
            const selectId = id ?? React.useId(); // genera id único
            return React.createElement("div", {
              className: "pui-mobile-select__container"
            }, React.createElement("label", {
              htmlFor: selectId,
              className: "sr-only"
            }, label), React.createElement("select", {
              id: selectId,
              "aria-label": label,
              disabled: isDisabled || disabled,
              ...rest,
              className: "pui-mobile-select"
            }, placeholder && React.createElement("option", {
              value: ""
            }, placeholder), options.map(({
              value,
              label
            }) => React.createElement("option", {
              key: value.toString(),
              value: value
            }, label))));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./observer
      **************************/

      ims.set('./observer', {
        hash: 3933443758,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StyleObserver = void 0;
          class StyleObserver {
            observer;
            constructor({
              callback
            }) {
              this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type !== 'childList') return;
                  callback(mutation.addedNodes);
                });
              });
            }
            startObserving(targetNode) {
              if (!targetNode) return;
              const config = {
                childList: true
              };
              this.observer.observe(targetNode, config);
            }
            stopObserving() {
              this.observer.disconnect();
            }
          }
          exports.StyleObserver = StyleObserver;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-styles
      ****************************/

      ims.set('./use-styles', {
        hash: 2902897892,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStyles = useStyles;
          var _react = require("react");
          var _observer = require("./observer");
          function useStyles() {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              if (!ref.current) return;
              const host = ref.current.getRootNode()?.host;
              if (!host) console.warn('is not inside a web component');
              if (!host.shadowRoot.insertedStyles) host.shadowRoot.insertedStyles = new Set();
              const headStyles = document.head.querySelectorAll('style[data-emotion]');
              // the callback name is used because it is the property parameter of the StyleObserver class
              const callback = nodes => {
                const insertedStyles = new Set();
                nodes.forEach(node => {
                  const styleContent = node?.textContent;
                  if (!(node instanceof HTMLStyleElement) || insertedStyles.has(styleContent)) return;
                  const clonedStyle = node.cloneNode(true);
                  host.shadowRoot.appendChild(clonedStyle);
                  insertedStyles.add(styleContent);
                });
              };
              const styleObserver = new _observer.StyleObserver({
                callback
              });
              const targetNode = document.head;
              styleObserver.startObserving(targetNode);
              callback(headStyles);
              return () => styleObserver.stopObserving();
            }, [ref.current]);
            return {
              ref
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactSelect",
        "name": "ReactSelect"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactSelect') && _export("ReactSelect", ReactSelect = require ? require('./index').ReactSelect : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vYmlsZVNlbGVjdCIsIlJlYWN0U2VsZWN0IiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk1vYmlsZVNlbGVjdCIsIlJlYWN0IiwibGFiZWwiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJpZCIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInJlc3QiLCJzZWxlY3RJZCIsInVzZUlkIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInZhbHVlIiwibWFwIiwia2V5IiwidG9TdHJpbmciLCJTdHlsZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsInR5cGUiLCJhZGRlZE5vZGVzIiwic3RhcnRPYnNlcnZpbmciLCJ0YXJnZXROb2RlIiwiY29uZmlnIiwiY2hpbGRMaXN0Iiwib2JzZXJ2ZSIsInN0b3BPYnNlcnZpbmciLCJkaXNjb25uZWN0IiwiZXhwb3J0cyIsIl9vYnNlcnZlciIsInVzZVN0eWxlcyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJob3N0IiwiZ2V0Um9vdE5vZGUiLCJjb25zb2xlIiwid2FybiIsInNoYWRvd1Jvb3QiLCJpbnNlcnRlZFN0eWxlcyIsIlNldCIsImhlYWRTdHlsZXMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZXMiLCJub2RlIiwic3R5bGVDb250ZW50IiwidGV4dENvbnRlbnQiLCJIVE1MU3R5bGVFbGVtZW50IiwiaGFzIiwiY2xvbmVkU3R5bGUiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImFkZCIsInN0eWxlT2JzZXJ2ZXIiXSwic291cmNlcyI6WyIvdHMvaW5kZXgudHN4IiwiL3RzL21vYmlsZS1zZWxlY3QudHN4IiwiL3RzL29ic2VydmVyLnRzIiwiL3RzL3VzZS1zdHlsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFRTyxXQU5QOzs7Ozs7VUFNaUIsU0FDUkUsV0FBV0EsQ0FBQ0MsS0FBSztZQUN6QixJQUFJQyxVQUFVLEdBQUc7Y0FBRSxHQUFHRDtZQUFLLENBQUU7WUFFN0IsT0FBT0MsVUFBVSxDQUFDQyxRQUFRO1lBRTFCLE9BQU9OLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNOLGFBQUEsQ0FBQU8sWUFBWTtjQUFBLEdBQUtMO1lBQUssRUFBSTtVQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQU0sS0FBQSxHQUFBVCxPQUFBO1VBZU0sU0FBVVEsWUFBWUEsQ0FBQztZQUFFRSxLQUFLO1lBQUVDLE9BQU87WUFBRUMsV0FBVztZQUFFQyxFQUFFO1lBQUVDLFVBQVU7WUFBRUMsUUFBUTtZQUFFLEdBQUdDO1VBQUksQ0FBVztZQUN2RyxNQUFNQyxRQUFRLEdBQUdKLEVBQUUsSUFBSUosS0FBSyxDQUFDUyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRXRDLE9BQ0NULEtBQUEsQ0FBQUYsYUFBQTtjQUFLWSxTQUFTLEVBQUM7WUFBOEIsR0FFNUNWLEtBQUEsQ0FBQUYsYUFBQTtjQUFPYSxPQUFPLEVBQUVILFFBQVE7Y0FBRUUsU0FBUyxFQUFDO1lBQVMsR0FDM0NULEtBQUssQ0FDQyxFQUVSRCxLQUFBLENBQUFGLGFBQUE7Y0FDQ00sRUFBRSxFQUFFSSxRQUFRO2NBQUEsY0FDQVAsS0FBSztjQUNqQkssUUFBUSxFQUFFRCxVQUFVLElBQUlDLFFBQVE7Y0FBQSxHQUM1QkMsSUFBSTtjQUNSRyxTQUFTLEVBQUM7WUFBbUIsR0FFNUJQLFdBQVcsSUFBSUgsS0FBQSxDQUFBRixhQUFBO2NBQVFjLEtBQUssRUFBQztZQUFFLEdBQUVULFdBQVcsQ0FBVSxFQUV0REQsT0FBTyxDQUFDVyxHQUFHLENBQUMsQ0FBQztjQUFFRCxLQUFLO2NBQUVYO1lBQUssQ0FBRSxLQUM3QkQsS0FBQSxDQUFBRixhQUFBO2NBQVFnQixHQUFHLEVBQUVGLEtBQUssQ0FBQ0csUUFBUSxFQUFFO2NBQUVILEtBQUssRUFBRUE7WUFBSyxHQUN6Q1gsS0FBSyxDQUVQLENBQUMsQ0FDTSxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNNLE1BQU9lLGFBQWE7WUFDakJDLFFBQVE7WUFFaEJDLFlBQVk7Y0FBRUM7WUFBUSxDQUEwQjtjQUMvQyxJQUFJLENBQUNGLFFBQVEsR0FBRyxJQUFJRyxnQkFBZ0IsQ0FBQ0MsU0FBUyxJQUFHO2dCQUNoREEsU0FBUyxDQUFDQyxPQUFPLENBQUVDLFFBQXdCLElBQUk7a0JBQzlDLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxLQUFLLFdBQVcsRUFBRTtrQkFDbkNMLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDRSxVQUFVLENBQUM7Z0JBQzlCLENBQUMsQ0FBQztjQUNILENBQUMsQ0FBQztZQUNIO1lBRUFDLGNBQWNBLENBQUNDLFVBQXVCO2NBQ3JDLElBQUksQ0FBQ0EsVUFBVSxFQUFFO2NBQ2pCLE1BQU1DLE1BQU0sR0FBRztnQkFBRUMsU0FBUyxFQUFFO2NBQUksQ0FBRTtjQUNsQyxJQUFJLENBQUNaLFFBQVEsQ0FBQ2EsT0FBTyxDQUFDSCxVQUFVLEVBQUVDLE1BQU0sQ0FBQztZQUMxQztZQUVBRyxhQUFhQSxDQUFBO2NBQ1osSUFBSSxDQUFDZCxRQUFRLENBQUNlLFVBQVUsRUFBRTtZQUMzQjs7VUFDQUMsT0FBQSxDQUFBakIsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBMUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTJDLFNBQUEsR0FBQTNDLE9BQUE7VUFDTSxTQUFVNEMsU0FBU0EsQ0FBQTtZQUN4QixNQUFNQyxHQUFHLEdBQUc5QyxNQUFBLENBQUFPLE9BQUssQ0FBQ3dDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUIvQyxNQUFBLENBQUFPLE9BQUssQ0FBQ3lDLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxPQUFPLEVBQUU7Y0FDbEIsTUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNHLE9BQU8sQ0FBQ0UsV0FBVyxFQUFFLEVBQUVELElBQUk7Y0FDNUMsSUFBSSxDQUFDQSxJQUFJLEVBQUVFLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLCtCQUErQixDQUFDO2NBQ3hELElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxVQUFVLENBQUNDLGNBQWMsRUFBRUwsSUFBSSxDQUFDSSxVQUFVLENBQUNDLGNBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7Y0FFL0UsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7Y0FDeEU7Y0FDQSxNQUFNL0IsUUFBUSxHQUFJZ0MsS0FBK0IsSUFBSTtnQkFDcEQsTUFBTU4sY0FBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtnQkFDaENLLEtBQUssQ0FBQzdCLE9BQU8sQ0FBQzhCLElBQUksSUFBRztrQkFDcEIsTUFBTUMsWUFBWSxHQUFHRCxJQUFJLEVBQUVFLFdBQVc7a0JBQ3RDLElBQUksRUFBRUYsSUFBSSxZQUFZRyxnQkFBZ0IsQ0FBQyxJQUFJVixjQUFjLENBQUNXLEdBQUcsQ0FBQ0gsWUFBWSxDQUFDLEVBQUU7a0JBRTdFLE1BQU1JLFdBQVcsR0FBR0wsSUFBSSxDQUFDTSxTQUFTLENBQUMsSUFBSSxDQUFDO2tCQUN4Q2xCLElBQUksQ0FBQ0ksVUFBVSxDQUFDZSxXQUFXLENBQUNGLFdBQVcsQ0FBQztrQkFDeENaLGNBQWMsQ0FBQ2UsR0FBRyxDQUFDUCxZQUFZLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQztjQUNILENBQUM7Y0FFRCxNQUFNUSxhQUFhLEdBQWtCLElBQUkzQixTQUFBLENBQUFsQixhQUFhLENBQUM7Z0JBQUVHO2NBQVEsQ0FBRSxDQUFDO2NBQ3BFLE1BQU1RLFVBQVUsR0FBb0JxQixRQUFRLENBQUNDLElBQUk7Y0FDakRZLGFBQWEsQ0FBQ25DLGNBQWMsQ0FBQ0MsVUFBVSxDQUFDO2NBQ3hDUixRQUFRLENBQUM0QixVQUFVLENBQUM7Y0FFcEIsT0FBTyxNQUFNYyxhQUFhLENBQUM5QixhQUFhLEVBQUU7WUFDM0MsQ0FBQyxFQUFFLENBQUNLLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUM7WUFFakIsT0FBTztjQUFFSDtZQUFHLENBQUU7VUFDZiIsImlnbm9yZUxpc3QiOltdfQ==