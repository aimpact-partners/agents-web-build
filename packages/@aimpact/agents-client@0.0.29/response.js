System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-client@0.0.29/errors", "@beyond-js/response@0.0.3/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AgentsClientResponse, __beyond_pkg, hmr;
  _export("AgentsClientResponse", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsClient0029Errors) {
      dependency_1 = _aimpactAgentsClient0029Errors;
    }, function (_beyondJsResponse003Main) {
      dependency_2 = _beyondJsResponse003Main;
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
          "vspecifier": "@aimpact/agents-client@0.0.29/response"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-client/errors', dependency_1], ['@beyond-js/response/main', dependency_2]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./response
      **************************/
      ims.set('./response', {
        hash: 3074179200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsClientResponse = void 0;
          var _main = require("@beyond-js/response/main");
          /*bundle*/
          class AgentsClientResponse extends _main.Response {
            constructor(params) {
              super(params);
            }
          }
          exports.AgentsClientResponse = AgentsClientResponse;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./response",
        "from": "AgentsClientResponse",
        "name": "AgentsClientResponse"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AgentsClientResponse') && _export("AgentsClientResponse", AgentsClientResponse = require ? require('./response').AgentsClientResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFpbiIsInJlcXVpcmUiLCJBZ2VudHNDbGllbnRSZXNwb25zZSIsIlJlc3BvbnNlIiwiY29uc3RydWN0b3IiLCJwYXJhbXMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3Jlc3BvbnNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLE1BQU9DLG9CQUEyQixTQUFRRixLQUFBLENBQUFHLFFBQTRDO1lBQ3RHQyxZQUFZQyxNQUF5RDtjQUNwRSxLQUFLLENBQUNBLE1BQU0sQ0FBQztZQUNkOztVQUNBQyxPQUFBLENBQUFKLG9CQUFBLEdBQUFBLG9CQUFBIiwiaWdub3JlTGlzdCI6W119