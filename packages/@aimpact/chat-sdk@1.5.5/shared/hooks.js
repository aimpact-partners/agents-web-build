System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useHmr, useMediaQuery, useStore, __beyond_pkg, hmr;
  _export({
    useHmr: void 0,
    useMediaQuery: void 0,
    useStore: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_2 = _beyondJsReact18Widgets104Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/shared/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/react-18-widgets/hooks', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./use-hmr
      *************************/
      ims.set('./use-hmr', {
        hash: 2839122136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useHmr = useHmr;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function useHmr(hmr) {
            const [update, setUpdate] = _react.default.useState({});
            (0, _hooks.useBinder)([hmr], () => {
              setUpdate({});
            });
            return [update, setUpdate];
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./use-media-query
      *********************************/

      ims.set('./use-media-query', {
        hash: 2034606327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMediaQuery = useMediaQuery;
          var _react = require("react");
          /*bundle*/
          function useMediaQuery() {
            const [size, setSize] = (0, _react.useState)('lg');
            const calculateSize = () => {
              const width = window.innerWidth;
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            };
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                const newSize = calculateSize();
                setSize(newSize);
              };
              // Set initial size
              handleResize();
              // Set up event listener for resizing
              window.addEventListener('resize', handleResize);
              // Clean up function
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
            return size;
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 4171293876,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStore = useStore;
          var _react = require("react");
          /*bundle*/ /**
                      * A generic React hook that subscribes to a reactive store.
                      * The store must implement `.on(event, handler)` and `.off(event, handler)`
                      * to manage subscriptions, and emit events to trigger re-renders.
                      * @param store The reactive store to subscribe to
                      * @param events Array of event names to subscribe to. Defaults to ['change']
                      */
          function useStore(store, events = ['change'], onListen) {
            if (!Array.isArray(events)) {
              throw new Error('The events parameter must be an array of strings');
            }
            // We use a local counter to force re-render whenever the store emits any of the subscribed events.
            const [, setVersion] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const handler = () => {
                setVersion(v => v + 1);
                onListen?.();
              };
              // Subscribe to all specified events
              events.forEach(event => store.on(event, handler));
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => store.off(event, handler));
              };
            }, [store, events]);
            // Return the store directly so components can read from it.
            return store;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-hmr",
        "from": "useHmr",
        "name": "useHmr"
      }, {
        "im": "./use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }, {
        "im": "./use-store",
        "from": "useStore",
        "name": "useStore"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useHmr') && _export("useHmr", useHmr = require ? require('./use-hmr').useHmr : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./use-media-query').useMediaQuery : value);
        (require || prop === 'useStore') && _export("useStore", useStore = require ? require('./use-store').useStore : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2hvb2tzIiwidXNlSG1yIiwiaG1yIiwidXBkYXRlIiwic2V0VXBkYXRlIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwidXNlTWVkaWFRdWVyeSIsInNpemUiLCJzZXRTaXplIiwiY2FsY3VsYXRlU2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsIm5ld1NpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVN0b3JlIiwic3RvcmUiLCJldmVudHMiLCJvbkxpc3RlbiIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwic2V0VmVyc2lvbiIsImhhbmRsZXIiLCJ2IiwiZm9yRWFjaCIsImV2ZW50Iiwib24iLCJvZmYiXSwic291cmNlcyI6WyIvdXNlLWhtci50c3giLCIvdXNlLW1lZGlhLXF1ZXJ5LnRzIiwiL3VzZS1zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFVLFNBQVVFLE1BQU1BLENBQUNDLEdBQUc7WUFDcEMsTUFBTSxDQUFDQyxNQUFNLEVBQUVDLFNBQVMsQ0FBQyxHQUFHTixNQUFBLENBQUFPLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU5QyxJQUFBTixNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDTCxHQUFHLENBQUMsRUFBRSxNQUFLO2NBQ3JCRSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDO1lBQ0YsT0FBTyxDQUFDRCxNQUFNLEVBQUVDLFNBQVMsQ0FBQztVQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBTixN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