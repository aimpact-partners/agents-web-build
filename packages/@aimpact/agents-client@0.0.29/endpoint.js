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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbnZpcm9ubWVudHMiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJiZXRhIiwicHJvZHVjdGlvbiIsIm92ZXJ3cml0ZSIsInBvcnQiLCJlbnZpcm9ubWVudCIsImV4cG9ydHMiLCJlbmRwb2ludCJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFNQSxNQUFNQSxZQUFZLEdBQStFO1lBQ2hHQyxXQUFXLEVBQUUseUNBQXlDO1lBQ3REQyxPQUFPLEVBQUUsMENBQTBDO1lBQ25EQyxJQUFJLEVBQUUsMENBQTBDO1lBQ2hEQyxVQUFVLEVBQUU7V0FDWjtVQUVNO1VBQVcsTUFBTUMsU0FBUyxHQUFHLFNBQUFBLENBQVU7WUFBRUMsSUFBSTtZQUFFQztVQUFXLENBQWE7WUFDN0VBLFdBQVcsR0FBRyxDQUFDQSxXQUFXLElBQUksQ0FBQ0QsSUFBSSxHQUFHLFlBQVksR0FBR0MsV0FBVztZQUNoRUMsT0FBQSxDQUFBQyxRQUFBLEdBQUFBLFFBQVEsR0FBR0gsSUFBSSxHQUFHLG9CQUFvQkEsSUFBSSxFQUFFLEdBQUdOLFlBQVksQ0FBQ08sV0FBVyxDQUFDO1VBQ3pFLENBQUM7VUFBQ0MsT0FBQSxDQUFBSCxTQUFBLEdBQUFBLFNBQUE7VUFFSztVQUFXLElBQUlJLFFBQVEsR0FBQUQsT0FBQSxDQUFBQyxRQUFBLEdBQUdULFlBQVksQ0FBQ0ksVUFBVSIsImlnbm9yZUxpc3QiOltdfQ==