System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/business/errors", "@beyond-js/response@0.0.3/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, BusinessResponse, __beyond_pkg, hmr;
  _export("BusinessResponse", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041BusinessErrors) {
      dependency_1 = _aimpactAgentsApi041BusinessErrors;
    }, function (_beyondJsResponse003Main) {
      dependency_2 = _beyondJsResponse003Main;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/business/response"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/business/errors', dependency_1], ['@beyond-js/response/main', dependency_2]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./response
      **************************/
      ims.set('./response', {
        hash: 1719620038,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BusinessResponse = void 0;
          var _errors = require("@aimpact/agents-api/business/errors");
          var _main = require("@beyond-js/response/main");
          /*bundle*/
          class BusinessResponse extends _main.Response {
            constructor(params) {
              const error = (() => {
                const {
                  error
                } = params;
                if (!error) return;
                return error.is === 'chat-business-error' ? error : new _errors.BusinessErrorManager(error.code, error.text);
              })();
              super({
                data: params.data,
                error
              });
            }
          }
          exports.BusinessResponse = BusinessResponse;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./response",
        "from": "BusinessResponse",
        "name": "BusinessResponse"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BusinessResponse') && _export("BusinessResponse", BusinessResponse = require ? require('./response').BusinessResponse : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JzIiwicmVxdWlyZSIsIl9tYWluIiwiQnVzaW5lc3NSZXNwb25zZSIsIlJlc3BvbnNlIiwiY29uc3RydWN0b3IiLCJwYXJhbXMiLCJlcnJvciIsImlzIiwiQnVzaW5lc3NFcnJvck1hbmFnZXIiLCJjb2RlIiwidGV4dCIsImRhdGEiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL3Jlc3BvbnNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLGdCQUF1QixTQUFRRCxLQUFBLENBQUFFLFFBQW9DO1lBQzFGQyxZQUFZQyxNQUE2QztjQUN4RCxNQUFNQyxLQUFLLEdBQXlCLENBQUMsTUFBSztnQkFDekMsTUFBTTtrQkFBRUE7Z0JBQUssQ0FBRSxHQUFHRCxNQUFNO2dCQUN4QixJQUFJLENBQUNDLEtBQUssRUFBRTtnQkFFWixPQUE4QkEsS0FBTSxDQUFDQyxFQUFFLEtBQUsscUJBQXFCLEdBQ3hDRCxLQUFLLEdBQzNCLElBQUlQLE9BQUEsQ0FBQVMsb0JBQW9CLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxFQUFFSCxLQUFLLENBQUNJLElBQUksQ0FBQztjQUNwRCxDQUFDLEVBQUMsQ0FBRTtjQUVKLEtBQUssQ0FBQztnQkFBRUMsSUFBSSxFQUFFTixNQUFNLENBQUNNLElBQUk7Z0JBQUVMO2NBQUssQ0FBRSxDQUFDO1lBQ3BDOztVQUNBTSxPQUFBLENBQUFWLGdCQUFBLEdBQUFBLGdCQUFBIiwiaWdub3JlTGlzdCI6W119