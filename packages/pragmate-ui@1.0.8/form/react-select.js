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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["tippy.js", "6.3.7"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/form/react-select"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/form/react-select');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX21vYmlsZVNlbGVjdCIsIlJlYWN0U2VsZWN0IiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwib25DaGFuZ2UiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIk1vYmlsZVNlbGVjdCIsIlJlYWN0IiwibGFiZWwiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJpZCIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInJlc3QiLCJzZWxlY3RJZCIsInVzZUlkIiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInZhbHVlIiwibWFwIiwia2V5IiwidG9TdHJpbmciLCJTdHlsZU9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsInR5cGUiLCJhZGRlZE5vZGVzIiwic3RhcnRPYnNlcnZpbmciLCJ0YXJnZXROb2RlIiwiY29uZmlnIiwiY2hpbGRMaXN0Iiwib2JzZXJ2ZSIsInN0b3BPYnNlcnZpbmciLCJkaXNjb25uZWN0IiwiZXhwb3J0cyIsIl9vYnNlcnZlciIsInVzZVN0eWxlcyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJob3N0IiwiZ2V0Um9vdE5vZGUiLCJjb25zb2xlIiwid2FybiIsInNoYWRvd1Jvb3QiLCJpbnNlcnRlZFN0eWxlcyIsIlNldCIsImhlYWRTdHlsZXMiLCJkb2N1bWVudCIsImhlYWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9kZXMiLCJub2RlIiwic3R5bGVDb250ZW50IiwidGV4dENvbnRlbnQiLCJIVE1MU3R5bGVFbGVtZW50IiwiaGFzIiwiY2xvbmVkU3R5bGUiLCJjbG9uZU5vZGUiLCJhcHBlbmRDaGlsZCIsImFkZCIsInN0eWxlT2JzZXJ2ZXIiXSwic291cmNlcyI6WyIvL3RzL2luZGV4LnRzeCIsIi8vdHMvbW9iaWxlLXNlbGVjdC50c3giLCIvL3RzL29ic2VydmVyLnRzIiwiLy90cy91c2Utc3R5bGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBUU8sV0FOUDs7Ozs7O1VBTWlCLFNBQ1JFLFdBQVdBLENBQUNDLEtBQUs7WUFDekIsSUFBSUMsVUFBVSxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBRTdCLE9BQU9DLFVBQVUsQ0FBQ0MsUUFBUTtZQUUxQixPQUFPTixNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixhQUFBLENBQUFPLFlBQVk7Y0FBQSxHQUFLTDtZQUFLLEVBQUk7VUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFNLEtBQUEsR0FBQVQsT0FBQTtVQWVNLFNBQVVRLFlBQVlBLENBQUM7WUFBRUUsS0FBSztZQUFFQyxPQUFPO1lBQUVDLFdBQVc7WUFBRUMsRUFBRTtZQUFFQyxVQUFVO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztVQUFJLENBQVc7WUFDdkcsTUFBTUMsUUFBUSxHQUFHSixFQUFFLElBQUlKLEtBQUssQ0FBQ1MsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUV0QyxPQUNDVCxLQUFBLENBQUFGLGFBQUE7Y0FBS1ksU0FBUyxFQUFDO1lBQThCLEdBRTVDVixLQUFBLENBQUFGLGFBQUE7Y0FBT2EsT0FBTyxFQUFFSCxRQUFRO2NBQUVFLFNBQVMsRUFBQztZQUFTLEdBQzNDVCxLQUFLLENBQ0MsRUFFUkQsS0FBQSxDQUFBRixhQUFBO2NBQ0NNLEVBQUUsRUFBRUksUUFBUTtjQUFBLGNBQ0FQLEtBQUs7Y0FDakJLLFFBQVEsRUFBRUQsVUFBVSxJQUFJQyxRQUFRO2NBQUEsR0FDNUJDLElBQUk7Y0FDUkcsU0FBUyxFQUFDO1lBQW1CLEdBRTVCUCxXQUFXLElBQUlILEtBQUEsQ0FBQUYsYUFBQTtjQUFR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