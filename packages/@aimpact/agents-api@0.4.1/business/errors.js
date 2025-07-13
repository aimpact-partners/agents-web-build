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
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
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
        hash: 758126814,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorCodes = void 0;
          /*bundle*/
          var ErrorCodes;
          (function (ErrorCodes) {
            ErrorCodes[ErrorCodes["internalServerError"] = 500] = "internalServerError";
            ErrorCodes[ErrorCodes["internalError"] = 500] = "internalError";
            ErrorCodes[ErrorCodes["userNotAuthorized"] = 403] = "userNotAuthorized";
            ErrorCodes[ErrorCodes["userNotAuthorizedOnGroup"] = 403] = "userNotAuthorizedOnGroup";
            ErrorCodes[ErrorCodes["teacherIsNotDraftCreator"] = 403] = "teacherIsNotDraftCreator";
            ErrorCodes[ErrorCodes["teacherNotInOrganization"] = 403] = "teacherNotInOrganization";
            ErrorCodes[ErrorCodes["classroomAccessForbidden"] = 403] = "classroomAccessForbidden";
            ErrorCodes[ErrorCodes["insufficientPermissions"] = 403] = "insufficientPermissions";
            ErrorCodes[ErrorCodes["invalidAccess"] = 404] = "invalidAccess";
            ErrorCodes[ErrorCodes["documentNotFound"] = 404] = "documentNotFound";
            ErrorCodes[ErrorCodes["documentNotSaved"] = 800] = "documentNotSaved";
            ErrorCodes[ErrorCodes["codeNotFound"] = 100] = "codeNotFound";
            ErrorCodes[ErrorCodes["joinWaitingToConfirm"] = 101] = "joinWaitingToConfirm";
            ErrorCodes[ErrorCodes["invitationNotValid"] = 102] = "invitationNotValid";
            ErrorCodes[ErrorCodes["invitationAlreadyExists"] = 103] = "invitationAlreadyExists";
            ErrorCodes[ErrorCodes["userAlreadyExistOnGroup"] = 104] = "userAlreadyExistOnGroup";
            ErrorCodes[ErrorCodes["userPendingRequestOnGroup"] = 105] = "userPendingRequestOnGroup";
            ErrorCodes[ErrorCodes["userInvitePendingOnGroup"] = 106] = "userInvitePendingOnGroup";
            ErrorCodes[ErrorCodes["documentAlreadyExist"] = 107] = "documentAlreadyExist";
            ErrorCodes[ErrorCodes["invalidParameters"] = 108] = "invalidParameters";
            ErrorCodes[ErrorCodes["projectNotFound"] = 109] = "projectNotFound";
            ErrorCodes[ErrorCodes["languageNotSupport"] = 110] = "languageNotSupport";
            ErrorCodes[ErrorCodes["promptLiteralsNotFound"] = 111] = "promptLiteralsNotFound";
            ErrorCodes[ErrorCodes["promptDependenciesNotFound"] = 112] = "promptDependenciesNotFound";
            ErrorCodes[ErrorCodes["promptOptionsNotFound"] = 113] = "promptOptionsNotFound";
            ErrorCodes[ErrorCodes["promptDependenciesError"] = 114] = "promptDependenciesError";
            ErrorCodes[ErrorCodes["promptOptionsError"] = 115] = "promptOptionsError";
            ErrorCodes[ErrorCodes["promptIsOptions"] = 116] = "promptIsOptions";
            ErrorCodes[ErrorCodes["userAlreadyExists"] = 117] = "userAlreadyExists";
            ErrorCodes[ErrorCodes["roleNotSupported"] = 118] = "roleNotSupported";
            ErrorCodes[ErrorCodes["unauthorizedUserForChat"] = 119] = "unauthorizedUserForChat";
            ErrorCodes[ErrorCodes["chatNotValid"] = 120] = "chatNotValid";
            ErrorCodes[ErrorCodes["chatWithoutLanguages"] = 121] = "chatWithoutLanguages";
            ErrorCodes[ErrorCodes["chatWithoutDefaultLanguage"] = 122] = "chatWithoutDefaultLanguage";
            ErrorCodes[ErrorCodes["chatWithoutAssociatedProject"] = 123] = "chatWithoutAssociatedProject";
            ErrorCodes[ErrorCodes["chatNotHasProjectUrlSet"] = 124] = "chatNotHasProjectUrlSet";
            ErrorCodes[ErrorCodes["notLanguagesToUpdate"] = 125] = "notLanguagesToUpdate";
            ErrorCodes[ErrorCodes["llmGenerationError"] = 126] = "llmGenerationError";
            ErrorCodes[ErrorCodes["functionExecutionError"] = 127] = "functionExecutionError";
            ErrorCodes[ErrorCodes["parsingIPE"] = 128] = "parsingIPE";
            ErrorCodes[ErrorCodes["processingIPE"] = 129] = "processingIPE";
            ErrorCodes[ErrorCodes["invalidAccessToken"] = 130] = "invalidAccessToken";
            ErrorCodes[ErrorCodes["insufficientCredits"] = 131] = "insufficientCredits";
            ErrorCodes[ErrorCodes["ipeKeyNotDefined"] = 132] = "ipeKeyNotDefined";
            ErrorCodes[ErrorCodes["mailTemplatesNotDefined"] = 133] = "mailTemplatesNotDefined";
            ErrorCodes[ErrorCodes["mailNotSend"] = 134] = "mailNotSend";
            ErrorCodes[ErrorCodes["invalidToDelete"] = 135] = "invalidToDelete";
            ErrorCodes[ErrorCodes["entityNotValid"] = 136] = "entityNotValid";
            ErrorCodes[ErrorCodes["noAdministratorsToNotify"] = 137] = "noAdministratorsToNotify";
          })(ErrorCodes || (exports.ErrorCodes = ErrorCodes = {}));
        }
      });

      /***************************
      INTERNAL MODULE: ./generator
      ***************************/

      ims.set('./generator', {
        hash: 2675620971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorGenerator = void 0;
          var _codes = require("./codes");
          var _manager = require("./manager");
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
            static userNotAuthorized() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.userNotAuthorized, `Forbidden: User not authorized for this action`);
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
            static classroomAccessForbidden(user, classroomId) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.classroomAccessForbidden, `User "${user}" does not have access to classroom "${classroomId}", or classroom not found`);
            }
            static joinWaitingToConfirm(email) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.joinWaitingToConfirm, `The join request of user "${email}" is waiting to be confirmed.`);
            }
            static invitationAlreadyExists(email, entity, id) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.invitationAlreadyExists, `There is already an invitation for "${email}" in the ${entity} "${id}".`);
            }
            static userAlreadyExistOnGroup(email, entity) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.userAlreadyExistOnGroup, `User "${email}" is already authorized in the ${entity}.`);
            }
            static mailTemplatesNotDefined(template) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.mailTemplatesNotDefined, `Could not send email to user. "${template}" not defined`);
            }
            static mailNotSend() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.mailNotSend, `Could not send email to user.`);
            }
            static invitationNotValid(email, entity) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.invitationNotValid, `The "${email}" invitation in the ${entity} is inactive or not exist.`);
            }
            static codeNotFound(code, entity) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.codeNotFound, `Code "${code}" not valid for ${entity}. Please check the code and try again.`);
            }
            static userNotAuthorizedOnGroup(group) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.userNotAuthorizedOnGroup, `User not authorized on ${group.entity.name} "${group.id}".`);
            }
            static entityNotValid(entity) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.entityNotValid, `Entity "${entity}" not valid for Code collection.`);
            }
            static noAdministratorsToNotify() {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.noAdministratorsToNotify, `No admins to notify free trial`);
            }
            static userPendingRequestOnGroup(userId, groupId) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.userPendingRequestOnGroup, `User "${userId}" has a pending request in the group "${groupId}"`);
            }
            static userInvitePendingOnGroup(userId, groupId) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.userInvitePendingOnGroup, `User "${userId}" has a pending invitation in the group "${groupId}"`);
            }
            static invalidToDelete(collection, id, entities) {
              return new _manager.BusinessErrorManager(_codes.ErrorCodes.invalidToDelete, `${collection} "${id}" cannot be deleted because it has associated data from the following entities: ${entities.join(', ')}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFcnJvckNvZGVzIiwiZXhwb3J0cyIsIl9jb2RlcyIsInJlcXVpcmUiLCJfbWFuYWdlciIsIkVycm9yR2VuZXJhdG9yIiwiaW50ZXJuYWxFcnJvciIsImxvZyIsIm1lc3NhZ2UiLCJleGMiLCJCdXNpbmVzc0Vycm9yTWFuYWdlciIsImRvY3VtZW50Tm90Rm91bmQiLCJjb2xsZWN0aW9uTmFtZSIsImRvY3VtZW50SWQiLCJkb2N1bWVudE5vdFNhdmVkIiwiZG9jdW1lbnRBbHJlYWR5RXhpc3QiLCJpbnZhbGlkUGFyYW1ldGVycyIsInBhcmFtZXRlcnMiLCJqb2luIiwicHJvamVjdE5vdEZvdW5kIiwiaWQiLCJ1c2VyTm90QXV0aG9yaXplZCIsImxhbmd1YWdlTm90U3VwcG9ydCIsInBhcmFtZXRlciIsInByb21wdE9wdGlvbnNFcnJvciIsImVycm9yIiwidGV4dCIsInByb21wdERlcGVuZGVuY2llc0Vycm9yIiwiZGVwZW5kZW5jeSIsInByb21wdExpdGVyYWxzTm90Rm91bmQiLCJpdGVtcyIsInByb21wdERlcGVuZGVuY2llc05vdEZvdW5kIiwicHJvbXB0T3B0aW9uc05vdEZvdW5kIiwidXNlckFscmVhZHlFeGlzdHMiLCJyb2xlTm90U3VwcG9ydGVkIiwicm9sZSIsInVuYXV0aG9yaXplZFVzZXJGb3JDaGF0IiwiY2hhdE5vdFZhbGlkIiwiY2hhdFdpdGhvdXRMYW5ndWFnZXMiLCJjaGF0V2l0aG91dERlZmF1bHRMYW5ndWFnZSIsImNoYXRXaXRob3V0QXNzb2NpYXRlZFByb2plY3QiLCJjaGF0Tm90SGFzUHJvamVjdFVybFNldCIsIm5vdExhbmd1YWdlc1RvVXBkYXRlIiwicHJvbXB0SXNPcHRpb25zIiwibGxtR2VuZXJhdGlvbkVycm9yIiwiZnVuY3Rpb25FeGVjdXRpb25FcnJvciIsInRvb2wiLCJuYW1lIiwicGFyc2luZ0lQRSIsInByb2Nlc3NpbmdJUEUiLCJpbnZhbGlkQWNjZXNzVG9rZW4iLCJpbnN1ZmZpY2llbnRDcmVkaXRzIiwiaXBlS2V5Tm90RGVmaW5lZCIsImNsYXNzcm9vbUFjY2Vzc0ZvcmJpZGRlbiIsInVzZXIiLCJjbGFzc3Jvb21JZCIsImpvaW5XYWl0aW5nVG9Db25maXJtIiwiZW1haWwiLCJpbnZpdGF0aW9uQWxyZWFkeUV4aXN0cyIsImVudGl0eSIsInVzZXJBbHJlYWR5RXhpc3RPbkdyb3VwIiwibWFpbFRlbXBsYXRlc05vdERlZmluZWQiLCJ0ZW1wbGF0ZSIsIm1haWxOb3RTZW5kIiwiaW52aXRhdGlvbk5vdFZhbGlkIiwiY29kZU5vdEZvdW5kIiwiY29kZSIsInVzZXJOb3RBdXRob3JpemVkT25Hcm91cCIsImdyb3VwIiwiZW50aXR5Tm90VmFsaWQiLCJub0FkbWluaXN0cmF0b3JzVG9Ob3RpZnkiLCJ1c2VyUGVuZGluZ1JlcXVlc3RPbkdyb3VwIiwidXNlcklkIiwiZ3JvdXBJZCIsInVzZXJJbnZpdGVQZW5kaW5nT25Hcm91cCIsImludmFsaWRUb0RlbGV0ZSIsImNvbGxlY3Rpb24iLCJlbnRpdGllcyIsIl9tYWluIiwiRXJyb3JNYW5hZ2VyIiwiaXMiXSwic291cmNlcyI6WyIvY29kZXMudHMiLCIvZ2VuZXJhdG9yLnRzIiwiL21hbmFnZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFPO1VBQVAsSUFBdUJBLFVBa0R0QjtVQWxERCxXQUF1QkEsVUFBVTtZQUNoQ0EsVUFBQSxDQUFBQSxVQUFBLHNEQUF5QjtZQUN6QkEsVUFBQSxDQUFBQSxVQUFBLDBDQUFtQjtZQUNuQkEsVUFBQSxDQUFBQSxVQUFBLGtEQUF1QjtZQUN2QkEsVUFBQSxDQUFBQSxVQUFBLGdFQUE4QjtZQUM5QkEsVUFBQSxDQUFBQSxVQUFBLGdFQUE4QjtZQUM5QkEsVUFBQSxDQUFBQSxVQUFBLGdFQUE4QjtZQUM5QkEsVUFBQSxDQUFBQSxVQUFBLGdFQUE4QjtZQUM5QkEsVUFBQSxDQUFBQSxVQUFBLDhEQUE2QjtZQUM3QkEs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