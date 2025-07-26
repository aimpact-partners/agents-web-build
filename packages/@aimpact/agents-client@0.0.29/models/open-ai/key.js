System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, key, __beyond_pkg, hmr;
  _export("key", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/pending-promise", "0.0.4"], ["openai", "4.83.0"], ["dotenv", "16.4.7"], ["express", "4.21.2"], ["@types/express", "4.17.21"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/bee", "0.0.6"], ["@types/node", "16.18.126"], ["@aimpact/agents-client", "0.0.29"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-client@0.0.29/models/open-ai/key"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3406071007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.key = void 0;
          /*bundle*/
          const key = exports.key = new class OpenAIKey {
            #key;
            async get() {
              if (this.#key) return this.#key;
              const dotenv = await bimport('dotenv');
              dotenv.config();
              this.#key = process.env.OPEN_AI_KEY;
              return this.#key;
            }
            set(value) {
              if (!value) {
                console.error('value must be specified');
              }
              this.#key = value;
              return this.#key;
            }
          }();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "key",
        "name": "key"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'key') && _export("key", key = require ? require('./index').key : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJrZXkiLCJleHBvcnRzIiwiT3BlbkFJS2V5IiwiZ2V0IiwiZG90ZW52IiwiYmltcG9ydCIsImNvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJPUEVOX0FJX0tFWSIsInNldCIsInZhbHVlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU87VUFBVyxNQUFNQSxHQUFHLEdBQUFDLE9BQUEsQ0FBQUQsR0FBQSxHQUFHLElBQUssTUFBTUUsU0FBUztZQUNqRCxDQUFBRixHQUFJO1lBRUosTUFBTUcsR0FBR0EsQ0FBQTtjQUNSLElBQUksSUFBSSxDQUFDLENBQUFILEdBQUksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO2NBRS9CLE1BQU1JLE1BQU0sR0FBRyxNQUFNQyxPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3RDRCxNQUFNLENBQUNFLE1BQU0sRUFBRTtjQUVmLElBQUksQ0FBQyxDQUFBTixHQUFJLEdBQUdPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO2NBRW5DLE9BQU8sSUFBSSxDQUFDLENBQUFULEdBQUk7WUFDakI7WUFFQVUsR0FBR0EsQ0FBQ0MsS0FBYTtjQUNoQixJQUFJLENBQUNBLEtBQUssRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUMseUJBQXlCLENBQUM7O2NBR3pDLElBQUksQ0FBQyxDQUFBYixHQUFJLEdBQUdXLEtBQUs7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQVgsR0FBSTtZQUNqQjtXQUNBLENBQUMsQ0FBRSIsImlnbm9yZUxpc3QiOltdfQ==