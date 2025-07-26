System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/response@0.0.3/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ErrorCodes, ErrorGenerator, AgentsClientErrorManager, __beyond_pkg, hmr;
  _export({
    ErrorCodes: void 0,
    ErrorGenerator: void 0,
    AgentsClientErrorManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsResponse003Main) {
      dependency_1 = _beyondJsResponse003Main;
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
          "vspecifier": "@aimpact/agents-client@0.0.29/errors"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/response/main', dependency_1]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./generator
      ***************************/
      ims.set('./generator', {
        hash: 950190459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorGenerator = exports.ErrorCodes = void 0;
          var _manager = require("./manager");
          /*bundle*/
          var ErrorCodes;
          (function (ErrorCodes) {
            ErrorCodes[ErrorCodes["internalServerError"] = 1] = "internalServerError";
            ErrorCodes[ErrorCodes["invalidParameters"] = 2] = "invalidParameters";
            ErrorCodes[ErrorCodes["userFetchError"] = 3] = "userFetchError";
            ErrorCodes[ErrorCodes["llmGenerationError"] = 4] = "llmGenerationError";
            ErrorCodes[ErrorCodes["agentsAPIError"] = 5] = "agentsAPIError";
            ErrorCodes[ErrorCodes["promptDependenciesError"] = 6] = "promptDependenciesError";
            ErrorCodes[ErrorCodes["functionExecutionError"] = 7] = "functionExecutionError";
            ErrorCodes[ErrorCodes["processingIPE"] = 8] = "processingIPE";
            ErrorCodes[ErrorCodes["parsingIPE"] = 9] = "parsingIPE";
          })(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
          /*bundle*/
          class ErrorGenerator {
            static internalServerError(exc) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.internalServerError, 'Internal server error', exc);
            }
            static userFetchError(error) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.userFetchError, error);
            }
            static llmGenerationError(exc) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.llmGenerationError, 'Error on LLM generation response', exc);
            }
            static invalidParameters(error, exc) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.llmGenerationError, `You must specify a ${error}`, exc);
            }
            static agentsAPIError(prompt, error) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.agentsAPIError, `Error getting prompt "${prompt}" from agents API [${error.code}]: ${error.text}`);
            }
            static promptDependenciesError() {
              return new _manager.AgentsClientErrorManager(ErrorCodes.promptDependenciesError, `Error getting prompt dependencies`);
            }
            static functionExecutionError(tool) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.functionExecutionError, `The response processing was canceled because the "${tool.name}" tool did not complete.`);
            }
            static parsingIPE(name) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.parsingIPE, `Error parsing IPE: "${name}"`);
            }
            static processingIPE(name) {
              return new _manager.AgentsClientErrorManager(ErrorCodes.processingIPE, `Error processing IPE: "${name}"`);
            }
          }
          exports.ErrorGenerator = ErrorGenerator;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 1560000256,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentsClientErrorManager = void 0;
          var _main = require("@beyond-js/response/main");
          /*bundle*/
          class AgentsClientErrorManager extends _main.ErrorManager {
            get is() {
              return 'agents-client';
            }
          }
          exports.AgentsClientErrorManager = AgentsClientErrorManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./generator",
        "from": "ErrorCodes",
        "name": "ErrorCodes"
      }, {
        "im": "./generator",
        "from": "ErrorGenerator",
        "name": "ErrorGenerator"
      }, {
        "im": "./manager",
        "from": "AgentsClientErrorManager",
        "name": "AgentsClientErrorManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ErrorCodes') && _export("ErrorCodes", ErrorCodes = require ? require('./generator').ErrorCodes : value);
        (require || prop === 'ErrorGenerator') && _export("ErrorGenerator", ErrorGenerator = require ? require('./generator').ErrorGenerator : value);
        (require || prop === 'AgentsClientErrorManager') && _export("AgentsClientErrorManager", AgentsClientErrorManager = require ? require('./manager').AgentsClientErrorManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbWFuYWdlciIsInJlcXVpcmUiLCJFcnJvckNvZGVzIiwiZXhwb3J0cyIsIkVycm9yR2VuZXJhdG9yIiwiaW50ZXJuYWxTZXJ2ZXJFcnJvciIsImV4YyIsIkFnZW50c0NsaWVudEVycm9yTWFuYWdlciIsInVzZXJGZXRjaEVycm9yIiwiZXJyb3IiLCJsbG1HZW5lcmF0aW9uRXJyb3IiLCJpbnZhbGlkUGFyYW1ldGVycyIsImFnZW50c0FQSUVycm9yIiwicHJvbXB0IiwiY29kZSIsInRleHQiLCJwcm9tcHREZXBlbmRlbmNpZXNFcnJvciIsImZ1bmN0aW9uRXhlY3V0aW9uRXJyb3IiLCJ0b29sIiwibmFtZSIsInBhcnNpbmdJUEUiLCJwcm9jZXNzaW5nSVBFIiwiX21haW4iLCJFcnJvck1hbmFnZXIiLCJpcyJdLCJzb3VyY2VzIjpbIi8vZ2VuZXJhdG9yLnRzLyIsIi8vbWFuYWdlci50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFQLElBQXVCQyxVQVV0QjtVQVZELFdBQXVCQSxVQUFVO1lBQ2hDQSxVQUFBLENBQUFBLFVBQUEsb0RBQXVCO1lBQ3ZCQSxVQUFBLENBQUFBLFVBQUEsZ0RBQWlCO1lBQ2pCQSxVQUFBLENBQUFBLFVBQUEsMENBQWM7WUFDZEEsVUFBQSxDQUFBQSxVQUFBLGtEQUFrQjtZQUNsQkEsVUFBQSxDQUFBQSxVQUFBLDBDQUFjO1lBQ2RBLFVBQUEsQ0FBQUEsVUFBQSw0REFBdUI7WUFDdkJBLFVBQUEsQ0FBQUEsVUFBQSwwREFBc0I7WUFDdEJBLFVBQUEsQ0FBQUEsVUFBQSx3Q0FBYTtZQUNiQSxVQUFBLENBQUFBLFVBQUEsa0NBQVU7VUFDWCxDQUFDLEVBVnNCQSxVQUFVLEtBQUFDLE9BQUEsQ0FBQUQsVUFBQSxHQUFWQSxVQUFVO1VBWTFCO1VBQVUsTUFBT0UsY0FBYztZQUNyQyxPQUFPQyxtQkFBbUJBLENBQUNDLEdBQVc7Y0FDckMsT0FBTyxJQUFJTixRQUFBLENBQUFPLHdCQUF3QixDQUFDTCxVQUFVLENBQUNHLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFQyxHQUFHLENBQUM7WUFDbEc7WUFFQSxPQUFPRSxjQUFjQSxDQUFDQyxLQUFhO2NBQ2xDLE9BQU8sSUFBSVQsUUFBQSxDQUFBTyx3QkFBd0IsQ0FBQ0wsVUFBVSxDQUFDTSxjQUFjLEVBQUVDLEtBQUssQ0FBQztZQUN0RTtZQUVBLE9BQU9DLGtCQUFrQkEsQ0FBQ0osR0FBVztjQUNwQyxPQUFPLElBQUlOLFFBQUEsQ0FBQU8sd0JBQXdCLENBQUNMLFVBQVUsQ0FBQ1Esa0JBQWtCLEVBQUUsa0NBQWtDLEVBQUVKLEdBQUcsQ0FBQztZQUM1RztZQUVBLE9BQU9LLGlCQUFpQkEsQ0FBQ0YsS0FBYSxFQUFFSCxHQUFXO2NBQ2xELE9BQU8sSUFBSU4sUUFBQSxDQUFBTyx3QkFBd0IsQ0FBQ0wsVUFBVSxDQUFDUSxrQkFBa0IsRUFBRSxzQkFBc0JELEtBQUssRUFBRSxFQUFFSCxHQUFHLENBQUM7WUFDdkc7WUFFQSxPQUFPTSxjQUFjQSxDQUFDQyxNQUFjLEVBQUVKLEtBQXFDO2NBQzFFLE9BQU8sSUFBSVQsUUFBQSxDQUFBTyx3QkFBd0IsQ0FDbENMLFVBQVUsQ0FBQ1UsY0FBYyxFQUN6Qix5QkFBeUJDLE1BQU0sc0JBQXNCSixLQUFLLENBQUNLLElBQUksTUFBTUwsS0FBSyxDQUFDTSxJQUFJLEVBQUUsQ0FDakY7WUFDRjtZQUVBLE9BQU9DLHVCQUF1QkEsQ0FBQTtjQUM3QixPQUFPLElBQUloQixRQUFBLENBQUFPLHdCQUF3QixDQUFDTCxVQUFVLENBQUNjLHVCQUF1QixFQUFFLG1DQUFtQyxDQUFDO1lBQzdHO1lBRUEsT0FBT0Msc0JBQXNCQSxDQUFDQyxJQUFzQjtjQUNuRCxPQUFPLElBQUlsQixRQUFBLENBQUFPLHdCQUF3QixDQUNsQ0wsVUFBVSxDQUFDZSxzQkFBc0IsRUFDakMscURBQXFEQyxJQUFJLENBQUNDLElBQUksMEJBQTBCLENBQ3hGO1lBQ0Y7WUFFQSxPQUFPQyxVQUFVQSxDQUFDRCxJQUFZO2NBQzdCLE9BQU8sSUFBSW5CLFFBQUEsQ0FBQU8sd0JBQXdCLENBQUNMLFVBQVUsQ0FBQ2tCLFVBQVUsRUFBRSx1QkFBdUJELElBQUksR0FBRyxDQUFDO1lBQzNGO1lBRUEsT0FBT0UsYUFBYUEsQ0FBQ0YsSUFBWTtjQUNoQyxPQUFPLElBQUluQixRQUFBLENBQUFPLHdCQUF3QixDQUFDTCxVQUFVLENBQUNtQixhQUFhLEVBQUUsMEJBQTBCRixJQUFJLEdBQUcsQ0FBQztZQUNqRzs7VUFDQWhCLE9BQUEsQ0FBQUMsY0FBQSxHQUFBQSxjQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hERCxJQUFBa0IsS0FBQSxHQUFBckIsT0FBQTtVQUVPO1VBQVUsTUFBT00sd0JBQXlCLFNBQVFlLEtBQUEsQ0FBQUMsWUFBWTtZQUNwRSxJQUFJQyxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxlQUFlO1lBQ3ZCOztVQUNBckIsT0FBQSxDQUFBSSx3QkFBQSxHQUFBQSx3QkFBQSIsImlnbm9yZUxpc3QiOltdfQ==