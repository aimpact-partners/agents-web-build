System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/response@0.0.3/main"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ErrorCodes, ErrorGenerator, BusinessErrorManager, __beyond_pkg, hmr;
  _export({
    ErrorCodes: void 0,
    ErrorGenerator: void 0,
    BusinessErrorManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsResponse003Main) {
      dependency_1 = _beyondJsResponse003Main;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "6.12.0"], ["express", "4.21.2"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["busboy", "1.6.0"], ["form-data", "4.0.1"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.0"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.5"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.72.0"], ["uuid", "9.0.1"], ["find-up", "7.0.0"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/busboy", "1.5.3"], ["@types/jsonwebtoken", "9.0.7"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.13"], ["@types/react", "18.3.12"], ["@types/audioworklet", "0.0.64"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.6.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/business/errors"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/response/main', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./codes
      ***********************/
      ims.set('./codes', {
        hash: 2970214993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorCodes = void 0;
          /*bundle*/
          var ErrorCodes;
          (function (ErrorCodes) {
            ErrorCodes[ErrorCodes["internalError"] = 500] = "internalError";
            ErrorCodes[ErrorCodes["documentNotFound"] = 404] = "documentNotFound";
            ErrorCodes[ErrorCodes["documentNotSaved"] = 800] = "documentNotSaved";
            ErrorCodes[ErrorCodes["documentAlreadyExist"] = 801] = "documentAlreadyExist";
            ErrorCodes[ErrorCodes["invalidParameters"] = 802] = "invalidParameters";
            ErrorCodes[ErrorCodes["projectNotFound"] = 803] = "projectNotFound";
            ErrorCodes[ErrorCodes["languageNotSupport"] = 804] = "languageNotSupport";
            ErrorCodes[ErrorCodes["promptLiteralsNotFound"] = 805] = "promptLiteralsNotFound";
            ErrorCodes[ErrorCodes["promptDependenciesNotFound"] = 806] = "promptDependenciesNotFound";
            ErrorCodes[ErrorCodes["promptOptionsNotFound"] = 807] = "promptOptionsNotFound";
            ErrorCodes[ErrorCodes["promptDependenciesError"] = 808] = "promptDependenciesError";
            ErrorCodes[ErrorCodes["promptOptionsError"] = 809] = "promptOptionsError";
            ErrorCodes[ErrorCodes["promptIsOptions"] = 810] = "promptIsOptions";
            ErrorCodes[ErrorCodes["userAlreadyExists"] = 811] = "userAlreadyExists";
            ErrorCodes[ErrorCodes["roleNotSupported"] = 812] = "roleNotSupported";
            ErrorCodes[ErrorCodes["unauthorizedUserForChat"] = 813] = "unauthorizedUserForChat";
            ErrorCodes[ErrorCodes["chatNotValid"] = 814] = "chatNotValid";
            ErrorCodes[ErrorCodes["chatWithoutLanguages"] = 815] = "chatWithoutLanguages";
            ErrorCodes[ErrorCodes["chatWithoutDefaultLanguage"] = 816] = "chatWithoutDefaultLanguage";
            ErrorCodes[ErrorCodes["chatWithoutAssociatedProject"] = 817] = "chatWithoutAssociatedProject";
            ErrorCodes[ErrorCodes["chatNotHasProjectUrlSet"] = 818] = "chatNotHasProjectUrlSet";
            ErrorCodes[ErrorCodes["notLanguagesToUpdate"] = 819] = "notLanguagesToUpdate";
            ErrorCodes[ErrorCodes["llmGenerationError"] = 820] = "llmGenerationError";
            ErrorCodes[ErrorCodes["functionExecutionError"] = 821] = "functionExecutionError";
            ErrorCodes[ErrorCodes["parsingIPE"] = 822] = "parsingIPE";
            ErrorCodes[ErrorCodes["processingIPE"] = 823] = "processingIPE";
            ErrorCodes[ErrorCodes["invalidAccessToken"] = 824] = "invalidAccessToken";
            ErrorCodes[ErrorCodes["insufficientCredits"] = 825] = "insufficientCredits";
            ErrorCodes[ErrorCodes["ipeKeyNotDefined"] = 826] = "ipeKeyNotDefined";
          })(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
        }
      });

      /***************************
      INTERNAL MODULE: ./generator
      ***************************/

      ims.set('./generator', {
        hash: 1557598969,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorGenerator = void 0;
          var _manager = require("./manager");
          var _codes = require("./codes");
          /*bundle*/
          class ErrorGenerator {
            static internalError(log, message, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.internalError, `Internal server error [${log}]: ${message}`, exc);
            }
            static documentNotFound(collectionName, documentId, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.documentNotFound, `Error getting document id "${documentId}" from "${collectionName}" collection`, exc);
            }
            static documentNotSaved(collectionName, documentId, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.documentNotSaved, `Error storing document id "${documentId}" on "${collectionName}" collection`, exc);
            }
            static documentAlreadyExist(collectionName, documentId, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.documentAlreadyExist, `Error storing document id "${documentId}" on "${collectionName}" collection`, exc);
            }
            static invalidParameters(parameters) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.invalidParameters, `Invalid parameters: ${parameters.join(', ')}`);
            }
            static projectNotFound(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.projectNotFound, `Project "${id}" not found`);
            }
            static languageNotSupport(collectionName, parameter, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.languageNotSupport, `${collectionName} not support "${parameter}" language`, exc);
            }
            static promptOptionsError(error) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.promptOptionsError, error.text);
            }
            static promptDependenciesError(dependency, error) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.promptDependenciesError, `${error.text} on dependency: ${dependency}`);
            }
            static promptLiteralsNotFound(items) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.promptLiteralsNotFound, `Error/s found in at least one literals pure of the requested prompt, literals: ${items.join(', ')}`);
            }
            static promptDependenciesNotFound() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.promptDependenciesNotFound, `Error/s found in at least one dependency of the requested prompt`);
            }
            static promptOptionsNotFound() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.promptOptionsNotFound, `Error/s found in at least one dependency of the requested prompt`);
            }
            static userAlreadyExists(id, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.userAlreadyExists, `The user "${id}" is already registered in the application`, exc);
            }
            static roleNotSupported(role, exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.roleNotSupported, `Role not "${role}" supported`, exc);
            }
            static unauthorizedUserForChat(exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.unauthorizedUserForChat, `Unauthorized user to send messages in chat`, exc);
            }
            static chatNotValid(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.chatNotValid, `chatId "${id}" not valid`);
            }
            static chatWithoutLanguages(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.chatWithoutLanguages, `Chat "${id}" has no established language`);
            }
            static chatWithoutDefaultLanguage(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.chatWithoutDefaultLanguage, `Chat "${id}" has no established default language`);
            }
            static chatWithoutAssociatedProject(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.chatWithoutAssociatedProject, `Chat "${id}" does not have an established project`);
            }
            static chatNotHasProjectUrlSet(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.chatNotHasProjectUrlSet, `Chat ${id} does not have a project url set`);
            }
            static notLanguagesToUpdate(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.notLanguagesToUpdate, `Prompt ${id} does not have languages to set`);
            }
            static promptIsOptions(id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.promptIsOptions, `The prompt ${id} cannot be an options prompt`);
            }
            static llmGenerationError(exc) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.llmGenerationError, 'Error on LLM generation response', exc);
            }
            static functionExecutionError(tool) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.functionExecutionError, `The response processing was canceled because the "${tool.name}" tool did not complete.`);
            }
            static parsingIPE(name) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.parsingIPE, `Error parsing IPE: "${name}"`);
            }
            static processingIPE(name) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.processingIPE, `Error processing IPE: "${name}"`);
            }
            static invalidAccessToken() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.invalidAccessToken, `Invalid Access token or Access token not provided`);
            }
            static insufficientCredits() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.insufficientCredits, `insufficient credits`);
            }
            static ipeKeyNotDefined() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.ipeKeyNotDefined, `IPE key not defined`);
            }
          }
          exports.ErrorGenerator = ErrorGenerator;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 689306710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BusinessErrorManager = void 0;
          var _main = require("@beyond-js/response/main");
          /*bundle*/
          class BusinessErrorManager extends _main.ErrorManager {
            get is() {
              return 'agents-api';
            }
          }
          exports.BusinessErrorManager = BusinessErrorManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./codes",
        "from": "ErrorCodes",
        "name": "ErrorCodes"
      }, {
        "im": "./generator",
        "from": "ErrorGenerator",
        "name": "ErrorGenerator"
      }, {
        "im": "./manager",
        "from": "BusinessErrorManager",
        "name": "BusinessErrorManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ErrorCodes') && _export("ErrorCodes", ErrorCodes = require ? require('./codes').ErrorCodes : value);
        (require || prop === 'ErrorGenerator') && _export("ErrorGenerator", ErrorGenerator = require ? require('./generator').ErrorGenerator : value);
        (require || prop === 'BusinessErrorManager') && _export("BusinessErrorManager", BusinessErrorManager = require ? require('./manager').BusinessErrorManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFcnJvckNvZGVzIiwiZXhwb3J0cyIsIl9tYW5hZ2VyIiwicmVxdWlyZSIsIl9jb2RlcyIsIkVycm9yR2VuZXJhdG9yIiwiaW50ZXJuYWxFcnJvciIsImxvZyIsIm1lc3NhZ2UiLCJleGMiLCJCdXNpbmVzc0Vycm9yTWFuYWdlciIsImRvY3VtZW50Tm90Rm91bmQiLCJjb2xsZWN0aW9uTmFtZSIsImRvY3VtZW50SWQiLCJkb2N1bWVudE5vdFNhdmVkIiwiZG9jdW1lbnRBbHJlYWR5RXhpc3QiLCJpbnZhbGlkUGFyYW1ldGVycyIsInBhcmFtZXRlcnMiLCJqb2luIiwicHJvamVjdE5vdEZvdW5kIiwiaWQiLCJsYW5ndWFnZU5vdFN1cHBvcnQiLCJwYXJhbWV0ZXIiLCJwcm9tcHRPcHRpb25zRXJyb3IiLCJlcnJvciIsInRleHQiLCJwcm9tcHREZXBlbmRlbmNpZXNFcnJvciIsImRlcGVuZGVuY3kiLCJwcm9tcHRMaXRlcmFsc05vdEZvdW5kIiwiaXRlbXMiLCJwcm9tcHREZXBlbmRlbmNpZXNOb3RGb3VuZCIsInByb21wdE9wdGlvbnNOb3RGb3VuZCIsInVzZXJBbHJlYWR5RXhpc3RzIiwicm9sZU5vdFN1cHBvcnRlZCIsInJvbGUiLCJ1bmF1dGhvcml6ZWRVc2VyRm9yQ2hhdCIsImNoYXROb3RWYWxpZCIsImNoYXRXaXRob3V0TGFuZ3VhZ2VzIiwiY2hhdFdpdGhvdXREZWZhdWx0TGFuZ3VhZ2UiLCJjaGF0V2l0aG91dEFzc29jaWF0ZWRQcm9qZWN0IiwiY2hhdE5vdEhhc1Byb2plY3RVcmxTZXQiLCJub3RMYW5ndWFnZXNUb1VwZGF0ZSIsInByb21wdElzT3B0aW9ucyIsImxsbUdlbmVyYXRpb25FcnJvciIsImZ1bmN0aW9uRXhlY3V0aW9uRXJyb3IiLCJ0b29sIiwibmFtZSIsInBhcnNpbmdJUEUiLCJwcm9jZXNzaW5nSVBFIiwiaW52YWxpZEFjY2Vzc1Rva2VuIiwiaW5zdWZmaWNpZW50Q3JlZGl0cyIsImlwZUtleU5vdERlZmluZWQiLCJfbWFpbiIsIkVycm9yTWFuYWdlciIsImlzIl0sInNvdXJjZXMiOlsiL2NvZGVzLnRzIiwiL2dlbmVyYXRvci50cyIsIi9tYW5hZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFQLElBQXVCQSxVQThCdEI7VUE5QkQsV0FBdUJBLFVBQVU7WUFDaENBLFVBQUEsQ0FBQUEsVUFBQSwwQ0FBbUI7WUFDbkJBLFVBQUEsQ0FBQUEsVUFBQSxnREFBc0I7WUFDdEJBLFVBQUEsQ0FBQUEsVUFBQSxnREFBc0I7WUFDdEJBLFVBQUEsQ0FBQUEsVUFBQSx3REFBb0I7WUFDcEJBLFVBQUEsQ0FBQUEsVUFBQSxrREFBaUI7WUFDakJBLFVBQUEsQ0FBQUEsVUFBQSw4Q0FBZTtZQUNmQSxVQUFBLENBQUFBLFVBQUEsb0RBQWtCO1lBQ2xCQSxVQUFBLENBQUFBLFVBQUEsNERBQXNCO1lBQ3RCQSxVQUFBLENBQUFBLFVBQUEsb0VBQTBCO1lBQzFCQSxVQUFBLENBQUFBLFVBQUEsMERBQXFCO1lBQ3JCQSxVQUFBLENBQUFBLFVBQUEsOERBQXVCO1lBQ3ZCQSxVQUFBLENBQUFBLFVBQUEsb0RBQWtCO1lBQ2xCQSxVQUFBLENBQUFBLFVBQUEsOENBQWU7WUFDZkEsVUFBQSxDQUFBQSxVQUFBLGtEQUFpQjtZQUNqQkEsVUFBQSxDQUFBQSxVQUFBLGdEQUFnQjtZQUNoQkEsVUFBQSxDQUFBQSxVQUFBLDhEQUF1QjtZQUN2QkEsVUFBQSxDQUFBQSxVQUFBLHdDQUFZO1lBQ1pBLFVBQUEsQ0FBQUEsVUFBQSx3REFBb0I7WUFDcEJBLFVBQUEsQ0FBQUEsVUFBQSxvRUFBMEI7WUFDMUJBLFVBQUEsQ0FBQUEsVUFBQSx3RUFBNEI7WUFDNUJBLFVBQUEsQ0FBQUEsVUFBQSw4REFBdUI7WUFDdkJBLFVBQUEsQ0FBQUEsVUFBQSx3REFBb0I7WUFDcEJBLFVBQUEsQ0FBQUEsVUFBQSxvREFBa0I7WUFDbEJBLFVBQUEs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