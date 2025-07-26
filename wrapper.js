System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/model", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210Model) {
      dependency_1 = _beyondJsReactive210Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_2 = _beyondJsKernel0112Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/wrapper"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4034436539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _collection = require("../prompts/collection");
          /*bundle*/
          class Wrapper extends _model.ReactiveModel {
            #ready;
            get isReady() {
              return this.#ready;
            }
            #prompts = new Map();
            get prompts() {
              return this.#prompts;
            }
            constructor() {
              super();
              this.load();
            }
            async load() {
              if (this.#ready) return this.#ready;
              this.ready = true;
            }
            async getPrompts({
              projectId
            }) {
              try {
                if (this.#prompts && this.#prompts.has(projectId)) {
                  return this.#prompts.get(projectId);
                }
                const prompts = new _collection.Prompts();
                await prompts.load({
                  id: projectId
                });
                this.#prompts.set(projectId, prompts);
                return prompts;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Wrapper = Wrapper;
          const _wrapper = new Wrapper();
          /*bundle*/
          const AppWrapper = exports.AppWrapper = _wrapper;
          globalThis.app = AppWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Wrapper",
        "name": "Wrapper"
      }, {
        "im": "./index",
        "from": "AppWrapper",
        "name": "AppWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Wrapper') && _export("Wrapper", Wrapper = require ? require('./index').Wrapper : value);
        (require || prop === 'AppWrapper') && _export("AppWrapper", AppWrapper = require ? require('./index').AppWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2NvbGxlY3Rpb24iLCJXcmFwcGVyIiwiUmVhY3RpdmVNb2RlbCIsInJlYWR5IiwiaXNSZWFkeSIsInByb21wdHMiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImxvYWQiLCJnZXRQcm9tcHRzIiwicHJvamVjdElkIiwiaGFzIiwiZ2V0IiwiUHJvbXB0cyIsImlkIiwic2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfd3JhcHBlciIsIkFwcFdyYXBwZXIiLCJnbG9iYWxUaGlzIiwiYXBwIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtVQUlPO1VBQVUsTUFBT0UsT0FBUSxTQUFRSCxNQUFBLENBQUFJLGFBQXVCO1lBQzlELENBQUFDLEtBQU07WUFDTixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTTtZQUNuQjtZQUVBLENBQUFFLE9BQVEsR0FBRyxJQUFJQyxHQUFHLEVBQW1CO1lBQ3JDLElBQUlELE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUFFLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLElBQUksRUFBRTtZQUNaO1lBRUEsTUFBTUEsSUFBSUEsQ0FBQTtjQUNULElBQUksSUFBSSxDQUFDLENBQUFMLEtBQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO2NBRW5DLElBQUksQ0FBQ0EsS0FBSyxHQUFHLElBQUk7WUFDbEI7WUFFQSxNQUFNTSxVQUFVQSxDQUFDO2NBQUVDO1lBQVMsQ0FBeUI7Y0FDcEQsSUFBSTtnQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBTCxPQUFRLElBQUksSUFBSSxDQUFDLENBQUFBLE9BQVEsQ0FBQ00sR0FBRyxDQUFDRCxTQUFTLENBQUMsRUFBRTtrQkFDbEQsT0FBTyxJQUFJLENBQUMsQ0FBQUwsT0FBUSxDQUFDTyxHQUFHLENBQUNGLFNBQVMsQ0FBQzs7Z0JBRXBDLE1BQU1MLE9BQU8sR0FBRyxJQUFJTCxXQUFBLENBQUFhLE9BQU8sRUFBRTtnQkFFN0IsTUFBTVIsT0FBTyxDQUFDRyxJQUFJLENBQUM7a0JBQUVNLEVBQUUsRUFBRUo7Z0JBQVMsQ0FBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsQ0FBQUwsT0FBUSxDQUFDVSxHQUFHLENBQUNMLFNBQVMsRUFBRUwsT0FBTyxDQUFDO2dCQUVyQyxPQUFPQSxPQUFPO2VBQ2QsQ0FBQyxPQUFPVyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCOztVQUNBRyxPQUFBLENBQUFsQixPQUFBLEdBQUFBLE9BQUE7VUFDRCxNQUFNbUIsUUFBUSxHQUFHLElBQUluQixPQUFPLEVBQUU7VUFDdkI7VUFBVyxNQUFNb0IsVUFBVSxHQUFBRixPQUFBLENBQUFFLFVBQUEsR0FBR0QsUUFBUTtVQUM3Q0UsVUFBVSxDQUFDQyxHQUFHLEdBQUdGLFVBQVUiLCJpZ25vcmVMaXN0IjpbXX0=