System.register(["@beyond-js/kernel@0.1.14/bundle", "dotenv@16.6.1", "@aimpact/agents-client@0.0.29/endpoint", "@beyond-js/response@0.0.3/main", "@aimpact/agents-client@0.0.29/errors"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, kb, __beyond_pkg, hmr;
  _export("kb", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkb3RlbnYiLCJyZXF1aXJlIiwiX2VuZHBvaW50IiwiX21haW4iLCJfZXJyb3JzIiwiY29uZmlnIiwiS0IiLCJzdG9yZSIsImNvbnRlbnQiLCJtZXRhZGF0YSIsInBhcmFtcyIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIkdDTE9VRF9JTlZPS0VSIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJzcGVjcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVVJMIiwiZW5kcG9pbnQiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImV4YyIsIlJlc3BvbnNlIiwiZXJyb3IiLCJFcnJvckdlbmVyYXRvciIsImludGVybmFsU2VydmVyRXJyb3IiLCJleHBvcnRzIiwia2IiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFFQUQsTUFBTSxDQUFDSyxNQUFNLEVBQUU7VUFFVCxNQUFPQyxFQUFFO1lBQ2QsTUFBTUMsS0FBS0EsQ0FBQ0MsT0FBZSxFQUFFQyxRQUFnQjtjQUM1QyxJQUFJO2dCQUNILE1BQU1DLE1BQU0sR0FBRztrQkFBRUYsT0FBTztrQkFBRUMsUUFBUTtrQkFBRUUsS0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0M7Z0JBQWMsQ0FBRTtnQkFFdkUsTUFBTUMsT0FBTyxHQUFHO2tCQUNmQyxNQUFNLEVBQUUsTUFBTTtrQkFDZEMsT0FBTyxFQUFFO29CQUFFLGNBQWMsRUFBRTtrQkFBa0I7aUJBQzdDO2dCQUNELE1BQU1DLEtBQUssR0FBRztrQkFBRSxHQUFHSCxPQUFPO2tCQUFFSSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDWCxNQUFNO2dCQUFDLENBQUU7Z0JBQzFELE1BQU1ZLEdBQUcsR0FBRyxHQUFHcEIsU0FBQSxDQUFBcUIsUUFBUSxXQUFXO2dCQUVsQyxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDSCxHQUFHLEVBQUVKLEtBQUssQ0FBQztnQkFDeEMsT0FBTyxNQUFNTSxRQUFRLENBQUNFLElBQUksRUFBRTtlQUM1QixDQUFDLE9BQU9DLEdBQUcsRUFBRTtnQkFDYixPQUFPLElBQUl4QixLQUFBLENBQUF5QixRQUFRLENBQUM7a0JBQUVDLEtBQUssRUFBRXpCLE9BQUEsQ0FBQTBCLGNBQWMsQ0FBQ0MsbUJBQW1CLENBQUNKLEdBQUc7Z0JBQUMsQ0FBRSxDQUFDOztZQUV6RTs7VUFDQUssT0FBQSxDQUFBMUIsRUFBQSxHQUFBQSxFQUFBO1VBRU07VUFBVyxNQUFNMkIsRUFBRSxHQUFBRCxPQUFBLENBQUFDLEVBQUEsR0FBRyxJQUFJM0IsRUFBRSxFQUFFIiwiaWdub3JlTGlzdCI6W119