System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/agents-client@0.0.29/endpoint", "@aimpact/agents-client@0.0.29/errors", "@aimpact/agents-client@0.0.29/response"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, IChatCreationParams, Chats, chats, __beyond_pkg, hmr;
  _export({
    IChatCreationParams: void 0,
    Chats: void 0,
    chats: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAgentsClient0029Endpoint) {
      dependency_1 = _aimpactAgentsClient0029Endpoint;
    }, function (_aimpactAgentsClient0029Errors) {
      dependency_2 = _aimpactAgentsClient0029Errors;
    }, function (_aimpactAgentsClient0029Response) {
      dependency_3 = _aimpactAgentsClient0029Response;
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
          "vspecifier": "@aimpact/agents-client@0.0.29/chat"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-client/endpoint', dependency_1], ['@aimpact/agents-client/errors', dependency_2], ['@aimpact/agents-client/response', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3805890636,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.chats = exports.Chats = void 0;
          var _endpoint = require("@aimpact/agents-client/endpoint");
          var _errors = require("@aimpact/agents-client/errors");
          var _response = require("@aimpact/agents-client/response");
          /*bundle*/
          class Chats {
            static async create(params) {
              const bulk = params instanceof Array ? 'bulk' : '';
              const url = `${_endpoint.endpoint}/chats` + bulk;
              const body = JSON.stringify(params);
              try {
                const options = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body
                };
                const response = await fetch(url, options);
                const {
                  data,
                  error
                } = await response.json();
                if (error) return new _response.AgentsClientResponse({
                  error
                });
                return new _response.AgentsClientResponse({
                  data
                });
              } catch (exc) {
                return new _response.AgentsClientResponse({
                  error: _errors.ErrorGenerator.internalServerError(exc)
                });
              }
            }
          }
          exports.Chats = Chats;
          /*bundle*/
          const chats = exports.chats = new Chats();
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IChatCreationParams",
        "name": "IChatCreationParams"
      }, {
        "im": "./index",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./index",
        "from": "chats",
        "name": "chats"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IChatCreationParams') && _export("IChatCreationParams", IChatCreationParams = require ? require('./index').IChatCreationParams : value);
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./index').Chats : value);
        (require || prop === 'chats') && _export("chats", chats = require ? require('./index').chats : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZW5kcG9pbnQiLCJyZXF1aXJlIiwiX2Vycm9ycyIsIl9yZXNwb25zZSIsIkNoYXRzIiwiY3JlYXRlIiwicGFyYW1zIiwiYnVsayIsIkFycmF5IiwidXJsIiwiZW5kcG9pbnQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJlcnJvciIsImpzb24iLCJBZ2VudHNDbGllbnRSZXNwb25zZSIsImV4YyIsIkVycm9yR2VuZXJhdG9yIiwiaW50ZXJuYWxTZXJ2ZXJFcnJvciIsImV4cG9ydHMiLCJjaGF0cyJdLCJzb3VyY2VzIjpbIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsU0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsU0FBQSxHQUFBRixPQUFBO1VBYU87VUFBVSxNQUFPRyxLQUFLO1lBQzVCLGFBQWFDLE1BQU1BLENBQ2xCQyxNQUFtRDtjQUVuRCxNQUFNQyxJQUFJLEdBQUdELE1BQU0sWUFBWUUsS0FBSyxHQUFHLE1BQU0sR0FBRyxFQUFFO2NBQ2xELE1BQU1DLEdBQUcsR0FBRyxHQUFHVCxTQUFBLENBQUFVLFFBQVEsUUFBUSxHQUFHSCxJQUFJO2NBQ3RDLE1BQU1JLElBQUksR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNQLE1BQU0sQ0FBQztjQUVuQyxJQUFJO2dCQUNILE1BQU1RLE9BQU8sR0FBRztrQkFBRUMsTUFBTSxFQUFFLE1BQU07a0JBQUVDLE9BQU8sRUFBRTtvQkFBRSxjQUFjLEVBQUU7a0JBQWtCLENBQUU7a0JBQUVMO2dCQUFJLENBQUU7Z0JBQ3pGLE1BQU1NLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNULEdBQUcsRUFBRUssT0FBTyxDQUFDO2dCQUMxQyxNQUFNO2tCQUFFSyxJQUFJO2tCQUFFQztnQkFBSyxDQUFFLEdBQUcsTUFBTUgsUUFBUSxDQUFDSSxJQUFJLEVBQUU7Z0JBQzdDLElBQUlELEtBQUssRUFBRSxPQUFPLElBQUlqQixTQUFBLENBQUFtQixvQkFBb0IsQ0FBQztrQkFBRUY7Z0JBQUssQ0FBRSxDQUFDO2dCQUVyRCxPQUFPLElBQUlqQixTQUFBLENBQUFtQixvQkFBb0IsQ0FBQztrQkFBRUg7Z0JBQUksQ0FBRSxDQUFDO2VBQ3pDLENBQUMsT0FBT0ksR0FBRyxFQUFFO2dCQUNiLE9BQU8sSUFBSXBCLFNBQUEsQ0FBQW1CLG9CQUFvQixDQUFDO2tCQUFFRixLQUFLLEVBQUVsQixPQUFBLENBQUFzQixjQUFjLENBQUNDLG1CQUFtQixDQUFDRixHQUFHO2dCQUFDLENBQUUsQ0FBQzs7WUFFckY7O1VBQ0FHLE9BQUEsQ0FBQXRCLEtBQUEsR0FBQUEsS0FBQTtVQUVNO1VBQVcsTUFBTXVCLEtBQUssR0FBQUQsT0FBQSxDQUFBQyxLQUFBLEdBQUcsSUFBSXZCLEtBQUssRUFBRSIsImlnbm9yZUxpc3QiOltdfQ==