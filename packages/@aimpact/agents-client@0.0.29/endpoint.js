System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, overwrite, endpoint, __beyond_pkg, hmr;
  _export({
    overwrite: void 0,
    endpoint: void 0
  });
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
          "vspecifier": "@aimpact/agents-client@0.0.29/endpoint"
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
        hash: 385080480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.overwrite = exports.endpoint = void 0;
          const environments = {
            development: 'https://dev.agents.api.aimpact.partners',
            testing: 'https://test.agents.api.aimpact.partners',
            beta: 'https://beta.agents.api.aimpact.partners',
            production: 'https://agents.api.aimpact.partners'
          };
          /*bundle*/
          const overwrite = function ({
            port,
            environment
          }) {
            environment = !environment && !port ? 'production' : environment;
            exports.endpoint = endpoint = port ? `http://localhost:${port}` : environments[environment];
          };
          exports.overwrite = overwrite;
          /*bundle*/
          let endpoint = exports.endpoint = environments.production;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "overwrite",
        "name": "overwrite"
      }, {
        "im": "./index",
        "from": "endpoint",
        "name": "endpoint"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'overwrite') && _export("overwrite", overwrite = require ? require('./index').overwrite : value);
        (require || prop === 'endpoint') && _export("endpoint", endpoint = require ? require('./index').endpoint : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbnZpcm9ubWVudHMiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJiZXRhIiwicHJvZHVjdGlvbiIsIm92ZXJ3cml0ZSIsInBvcnQiLCJlbnZpcm9ubWVudCIsImV4cG9ydHMiLCJlbmRwb2ludCJdLCJzb3VyY2VzIjpbIi8vaW5kZXgudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQU1BLE1BQU1BLFlBQVksR0FBK0U7WUFDaEdDLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdERDLE9BQU8sRUFBRSwwQ0FBMEM7WUFDbkRDLElBQUksRUFBRSwwQ0FBMEM7WUFDaERDLFVBQVUsRUFBRTtXQUNaO1VBRU07VUFBVyxNQUFNQyxTQUFTLEdBQUcsU0FBQUEsQ0FBVTtZQUFFQyxJQUFJO1lBQUVDO1VBQVcsQ0FBYTtZQUM3RUEsV0FBVyxHQUFHLENBQUNBLFdBQVcsSUFBSSxDQUFDRCxJQUFJLEdBQUcsWUFBWSxHQUFHQyxXQUFXO1lBQ2hFQyxPQUFBLENBQUFDLFFBQUEsR0FBQUEsUUFBUSxHQUFHSCxJQUFJLEdBQUcsb0JBQW9CQSxJQUFJLEVBQUUsR0FBR04sWUFBWSxDQUFDTyxXQUFXLENBQUM7VUFDekUsQ0FBQztVQUFDQyxPQUFBLENBQUFILFNBQUEsR0FBQUEsU0FBQTtVQUVLO1VBQVcsSUFBSUksUUFBUSxHQUFBRCxPQUFBLENBQUFDLFFBQUEsR0FBR1QsWUFBWSxDQUFDSSxVQUFVIiwiaWdub3JlTGlzdCI6W119