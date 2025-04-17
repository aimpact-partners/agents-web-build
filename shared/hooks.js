System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/kernel@0.1.12/texts"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, useStore, useTexts, __beyond_pkg, hmr;
  _export({
    useStore: void 0,
    useTexts: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsKernel0112Texts) {
      dependency_2 = _beyondJsKernel0112Texts;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/shared/hooks"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/kernel/texts', dependency_2]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/
      ims.set('./use-marked', {
        hash: 2598854385,
        creator: function (require, exports) {
          // import React from 'react';
          // import { mangle } from 'marked-mangle';
          // import { marked } from 'marked';
          // import { markedHighlight } from 'marked-highlight';
          // import hljs from 'highlight.js';
          // import * as DOMPurify from 'dompurify';
          // export /* bundle */ function useMarked() {
          // 	marked.use(mangle());
          // 	marked.use(
          // 		markedHighlight({
          // 			langPrefix: 'hljs language-',
          // 			highlight(code, lang) {
          // 				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          // 				return hljs.highlight(code, { language }).value;
          // 			}
          // 		})
          // 	);
          // 	React.useEffect(() => {
          // 		hljs.highlightAll();
          // 	}, []);
          // 	function markContent(content: string) {
          // 		if (!content) return '';
          // 		return marked(content, { headerIds: false, headerPrefix: false });
          // 	}
          // 	return markContent;
          // }
          "use strict";
        }
      });

      /***************************
      INTERNAL MODULE: ./use-store
      ***************************/

      ims.set('./use-store', {
        hash: 2233973773,
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
          function useStore(store, events = ['change']) {
            if (!Array.isArray(events)) {
              throw new Error('The events parameter must be an array of strings');
            }
            // We use a local counter to force re-render whenever the store emits any of the subscribed events.
            const [, setVersion] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const handler = () => {
                console.log('disparamos cambios');
                setVersion(v => v + 1);
              };
              // Subscribe to all specified events
              events.forEach(event => {
                store.on(event, handler);
              });
              // Cleanup: unsubscribe from all events
              return () => {
                events.forEach(event => {
                  store.off(event, handler);
                });
              };
            }, [store, events]);
            // Return the store directly so components can read from it.
            return store;
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-texts
      ***************************/

      ims.set('./use-texts', {
        hash: 1600604292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTexts = useTexts;
          var _react = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          /*bundle*/
          function useTexts(specifier, key) {
            const [ready, setReady] = _react.default.useState(false);
            const [texts, setTexts] = _react.default.useState({});
            _react.default.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                if (modelTexts.ready && key) {
                  if (!value.hasOwnProperty(key)) {
                    console.warn(`the key specified for texts was not found. Key passed: ${key}, module specifier: ${specifier}`);
                  }
                  //@ts-ignore
                  value = modelTexts.value[key];
                }
                setTexts(value);
                setReady(modelTexts.ready);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.off('change', triggerEvent); // Corrected 'on' to 'off'
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./use-store",
        "from": "useStore",
        "name": "useStore"
      }, {
        "im": "./use-texts",
        "from": "useTexts",
        "name": "useTexts"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'useStore') && _export("useStore", useStore = require ? require('./use-store').useStore : value);
        (require || prop === 'useTexts') && _export("useTexts", useTexts = require ? require('./use-texts').useTexts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwidXNlU3RvcmUiLCJzdG9yZSIsImV2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsIkVycm9yIiwic2V0VmVyc2lvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJ2IiwiZm9yRWFjaCIsImV2ZW50Iiwib24iLCJvZmYiLCJfdGV4dHMiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImtleSIsInJlYWR5Iiwic2V0UmVhZHkiLCJkZWZhdWx0IiwidGV4dHMiLCJzZXRUZXh0cyIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ2YWx1ZSIsImhhc093blByb3BlcnR5Iiwid2FybiIsImlzUmVhZHkiXSwic291cmNlcyI6WyIvdHMvdXNlLW1hcmtlZC50cyIsIi90cy91c2Utc3RvcmUudHMiLCIvdHMvdXNlLXRleHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBRUE7VUFDQTtVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFjTyxXQVBQOzs7Ozs7O1VBT2lCLFNBQVVDLFFBQVFBLENBQTJCQyxLQUFRLEVBQUVDLE1BQUEsR0FBbUIsQ0FBQyxRQUFRLENBQUM7WUFDcEcsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7Y0FDM0IsTUFBTSxJQUFJRyxLQUFLLENBQUMsa0RBQWtELENBQUM7O1lBR3BFO1lBQ0EsTUFBTSxHQUFHQyxVQUFVLENBQUMs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