System.register(["@beyond-js/kernel@0.1.12/bundle", "dotenv@16.4.7", "@aimpact/agents-client@0.0.29/endpoint", "@beyond-js/response@0.0.3/main", "@aimpact/agents-client@0.0.29/errors"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, kb, __beyond_pkg, hmr;
  _export("kb", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_dotenv) {
      dependency_1 = _dotenv;
    }, function (_aimpactAgentsClient0029Endpoint) {
      dependency_2 = _aimpactAgentsClient0029Endpoint;
    }, function (_beyondJsResponse003Main) {
      dependency_3 = _beyondJsResponse003Main;
    }, function (_aimpactAgentsClient0029Errors) {
      dependency_4 = _aimpactAgentsClient0029Errors;
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
          "vspecifier": "@aimpact/agents-client@0.0.29/kb"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['dotenv', dependency_1], ['@aimpact/agents-client/endpoint', dependency_2], ['@beyond-js/response/main', dependency_3], ['@aimpact/agents-client/errors', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1945690459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.kb = exports.KB = void 0;
          var dotenv = require("dotenv");
          var _endpoint = require("@aimpact/agents-client/endpoint");
          var _main = require("@beyond-js/response/main");
          var _errors = require("@aimpact/agents-client/errors");
          dotenv.config();
          class KB {
            async store(content, metadata) {
              try {
                const params = {
                  content,
                  metadata,
                  token: process.env.GCLOUD_INVOKER
                };
                const options = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                const specs = {
                  ...options,
                  body: JSON.stringify(params)
                };
                const URL = `${_endpoint.endpoint}/kb/texts`;
                const response = await fetch(URL, specs);
                return await response.json();
              } catch (exc) {
                return new _main.Response({
                  error: _errors.ErrorGenerator.internalServerError(exc)
                });
              }
            }
          }
          exports.KB = KB;
          /*bundle*/
          const kb = exports.kb = new KB();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "kb",
        "name": "kb"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'kb') && _export("kb", kb = require ? require('./index').kb : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwiX2VuZHBvaW50IiwiX21haW4iLCJfZXJyb3JzIiwiY29uZmlnIiwiS0IiLCJzdG9yZSIsImNvbnRlbnQiLCJtZXRhZGF0YSIsInBhcmFtcyIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIkdDTE9VRF9JTlZPS0VSIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJzcGVjcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVVJMIiwiZW5kcG9pbnQiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImV4YyIsIlJlc3BvbnNlIiwiZXJyb3IiLCJFcnJvckdlbmVyYXRvciIsImludGVybmFsU2VydmVyRXJyb3IiLCJleHBvcnRzIiwia2IiXSwic291cmNlcyI6WyIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLEtBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUVBRCxNQUFNLENBQUNLLE1BQU0sRUFBRTtVQUVULE1BQU9DLEVBQUU7WUFDZCxNQUFNQyxLQUFLQSxDQUFDQyxPQUFlLEVBQUVDLFFBQWdCO2NBQzVDLElBQUk7Z0JBQ0gsTUFBTUMsTUFBTSxHQUFHO2tCQUFFRixPQUFPO2tCQUFFQyxRQUFRO2tCQUFFRSxLQUFLLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQztnQkFBYyxDQUFFO2dCQUV2RSxNQUFNQyxPQUFPLEdBQUc7a0JBQ2ZDLE1BQU0sRUFBRSxNQUFNO2tCQUNkQyxPQUFPLEVBQUU7b0JBQUUsY0FBYyxFQUFFO2tCQUFrQjtpQkFDN0M7Z0JBQ0QsTUFBTUMsS0FBSyxHQUFHO2tCQUFFLEdBQUdILE9BQU87a0JBQUVJLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNYLE1BQU07Z0JBQUMsQ0FBRTtnQkFDMUQsTUFBTVksR0FBRyxHQUFHLEdBQUdwQixTQUFBLENBQUFxQixRQUFRLFdBQVc7Z0JBRWxDLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNILEdBQUcsRUFBRUosS0FBSyxDQUFDO2dCQUN4QyxPQUFPLE1BQU1NLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO2VBQzVCLENBQUMsT0FBT0MsR0FBRyxFQUFFO2dCQUNiLE9BQU8sSUFBSXhCLEtBQUEsQ0FBQXlCLFFBQVEsQ0FBQztrQkFBRUMsS0FBSyxFQUFFekIsT0FBQSxDQUFBMEIsY0FBYyxDQUFDQyxtQkFBbUIsQ0FBQ0osR0FBRztnQkFBQyxDQUFFLENBQUM7O1lBRXpFOztVQUNBSyxPQUFBLENBQUExQixFQUFBLEdBQUFBLEVBQUE7VUFFTTtVQUFXLE1BQU0yQixFQUFFLEdBQUFELE9BQUEsQ0FBQUMsRUFBQSxHQUFHLElBQUkzQixFQUFFLEVBQUUiLCJpZ25vcmVMaXN0IjpbXX0=