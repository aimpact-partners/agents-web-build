System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/chat-sdk@1.4.4/startup", "@beyond-js/reactive@2.0.5/entities/item", "@beyond-js/kernel@0.1.12/core", "firebase@11.5.0/auth", "@beyond-js/http-suite@0.1.0/api", "@aimpact/chat-sdk@1.4.4/config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactChatSdk144Startup) {
      dependency_1 = _aimpactChatSdk144Startup;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_2 = _beyondJsReactive205EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1150Auth) {
      dependency_4 = _firebase1150Auth;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_5 = _beyondJsHttpSuite010Api;
    }, function (_aimpactChatSdk144Config) {
      dependency_6 = _aimpactChatSdk144Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.4.4"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.4.4/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/startup', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['@aimpact/chat-sdk/config', dependency_6]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./interface
      ***************************/
      ims.set('./interface', {
        hash: 4186078931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 202721517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _provider = require("./provider");
          /*bundle*/ // AudioItem

          class User extends _item.Item {
            #logged;
            #promiseInit;
            #firebaseUser;
            get logged() {
              return this.#logged;
            }
            #firebaseProvider;
            get firebaseToken() {
              return this.#firebaseProvider?.getCurrentToken();
            }
            /**
             * todo: @carlos implement http request to get user data
             * @param specs
             */
            constructor({
              properties = [],
              ...specs
            } = {
              properties: [],
              id: undefined
            }) {
              //@ts-ignore
              super({
                id: specs.id,
                properties: [...properties, 'displayName', 'id', 'email', 'photoURL', 'phoneNumber', 'token'],
                entity: 'User',
                provider: _provider.UserProvider
              });
              // this.initialize(specs);
            }
            setFirebaseProvider(provider) {
              this.#firebaseProvider = provider;
            }
            initialize = async specs => {
              if (this.#promiseInit) return this.#promiseInit;
              this.#promiseInit = new _core.PendingPromise();
              this.set(specs);
              // await this.login(this.firebaseToken);
              this.#promiseInit.resolve();
              this.loaded = true;
              this.trigger('user.initialized');
            };
            setFirebaseUser = async user => {
              this.#firebaseUser = user;
            };
            async login(firebaseToken) {
              try {
                if (this.#logged) return;
                const specs = {
                  ...this.getProperties(),
                  id: this.getProperty('id'),
                  firebaseToken
                };
                const response = await this.provider.load(specs);
                this.set(response.data);
                // this.localUpdate(response.data.user);
                this.#logged = true;
                this.trigger('login');
                return true;
              } catch (e) {
                throw new Error(e);
              }
            }
            static getModel(specs) {
              if (_startup.sdkConfig.userModel) return new _startup.sdkConfig.userModel(specs);
              return new User(specs);
            }
          }
          exports.User = User;
        }
      });

      /**************************
      INTERNAL MODULE: ./provider
      **************************/

      ims.set('./provider', {
        hash: 152416306,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          console.log(100, _startup.sdkConfig.api);
          class UserProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            async load(specs) {
              this.#api.bearer(specs.firebaseToken);
              const {
                status,
                data
              } = await this.#api.post('/auth/login', specs);
              if (!status) {
                throw new Error('error loading user data');
              }
              return {
                status,
                data
              };
            }
          }
          exports.UserProvider = UserProvider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./interface",
        "from": "IChatUser",
        "name": "IChatUser"
      }, {
        "im": "./item",
        "from": "User",
        "name": "User"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IChatUser') && _export("IChatUser", IChatUser = require ? require('./interface').IChatUser : value);
        (require || prop === 'User') && _export("User", User = require ? require('./item').User : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9pdGVtIiwiX2NvcmUiLCJfcHJvdmlkZXIiLCJVc2VyIiwiSXRlbSIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwiZmlyZWJhc2VQcm92aWRlciIsImZpcmViYXNlVG9rZW4iLCJnZXRDdXJyZW50VG9rZW4iLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJzcGVjcyIsImlkIiwidW5kZWZpbmVkIiwiZW50aXR5IiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0IiwicmVzb2x2ZSIsImxvYWRlZCIsInRyaWdnZXIiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1c2VyIiwibG9naW4iLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydHkiLCJyZXNwb25zZSIsImxvYWQiLCJkYXRhIiwiZSIsIkVycm9yIiwiZ2V0TW9kZWwiLCJzZGtDb25maWciLCJ1c2VyTW9kZWwiLCJfYXBpIiwiY29uc29sZSIsImxvZyIsImFwaSIsIkFwaSIsImJlYXJlciIsInN0YXR1cyIsInBvc3QiXSwic291cmNlcyI6WyIvaW50ZXJmYWNlLnRzIiwiL2l0ZW0udHMiLCIvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEEsSUFBQUMsUUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsU0FBQSxHQUFBSCxPQUFBO1VBRU8sV0FQUDs7VUFPaUIsTUFBT0ksSUFBSyxTQUFRSCxLQUFBLENBQUFJLElBQTZCO1lBQ2pFLENBQUFDLE1BQU87WUFTUCxDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsWUFBYTtZQUNiLElBQUlGLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUcsZ0JBQWlCO1lBQ2pCLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUQsZ0JBQWlCLEVBQUVFLGVBQWUsRUFBRTtZQUNqRDtZQUVBOzs7O1lBSUFDLFlBQVk7Y0FBRUMsVUFBVSxHQUFHLEVBQUU7Y0FBRSxHQUFHQztZQUFLLENBQUUsR0FBRztjQUFFRCxVQUFVLEVBQUUsRUFBRTtjQUFFRSxFQUFFLEVBQUVDO1lBQVMsQ0FBRTtjQUM1RTtjQUNBLEtBQUssQ0FBQztnQkFDTEQsRUFBRSxFQUFFRCxLQUFLLENBQUNDLEVBQUU7Z0JBQ1pGLFVBQVUsRUFBRSxDQUFDLEdBQUdBLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQztnQkFDN0ZJLE1BQU0sRUFBRSxNQUFNO2dCQUNkQyxRQUFRLEVBQUVmLFNBQUEsQ0FBQWdCO2VBQ1YsQ0FBQztjQUVGO1lBQ0Q7WUFFQUMsbUJBQW1CQSxDQUFDRixRQUFRO2NBQzNCLElBQUksQ0FBQyxDQUFBVCxnQkFBaUIsR0FBR1MsUUFBUTtZQUNsQztZQUNBRyxVQUFVLEdBQUcsTUFBTVAsS0FBSyxJQUFHO2NBQzFCLElBQUksSUFBSSxDQUFDLENBQUFQLFdBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZO2NBQy9DLElBQUksQ0FBQyxDQUFBQSxXQUFZLEdBQUcsSUFBSUwsS0FBQSxDQUFBb0IsY0FBYyxFQUFFO2NBRXhDLElBQUksQ0FBQ0MsR0FBRyxDQUFDVCxLQUFLLENBQUM7Y0FDZjtjQUNBLElBQUksQ0FBQyxDQUFBUCxXQUFZLENBQUNpQixPQUFPLEVBQUU7Y0FDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtjQUVsQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNqQyxDQUFDO1lBRURDLGVBQWUsR0FBRyxNQUFNQyxJQUFJLElBQUc7Y0FDOUIsSUFBSSxDQUFDLENBQUFwQixZQUFhLEdBQUdvQixJQUFJO1lBQzFCLENBQUM7WUFFRCxNQUFNQyxLQUFLQSxDQUFDbkIsYUFBYTtjQUN4QixJQUFJO2dCQUNILElBQUksSUFBSSxDQUFDLENBQUFKLE1BQU8sRUFBRTtnQkFFbEIsTUFBTVEsS0FBSyxHQUFHO2tCQUFFLEdBQUcsSUFBSSxDQUFDZ0IsYUFBYSxFQUFFO2tCQUFFZixFQUFFLEVBQUUsSUFBSSxDQUFDZ0IsV0FBVyxDQUFDLElBQUksQ0FBQztrQkFBRXJCO2dCQUFhLENBQWU7Z0JBRWpHLE1BQU1zQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNkLFFBQVEsQ0FBQ2UsSUFBSSxDQUFDbkIsS0FBSyxDQUFDO2dCQUVoRCxJQUFJLENBQUNTLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDRSxJQUFJLENBQUM7Z0JBRXZCO2dCQUNBLElBQUksQ0FBQyxDQUFBNUIsTUFBTyxHQUFHLElBQUk7Z0JBQ25CLElBQUksQ0FBQ29CLE9BQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT1MsQ0FBQyxFQUFFO2dCQUNYLE1BQU0sSUFBSUMsS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRXBCO1lBRUEsT0FBT0UsUUFBUUEsQ0FBQ3ZCLEtBQUs7Y0FDcEIsSUFBSWYsUUFBQSxDQUFBdUMsU0FBUyxDQUFDQyxTQUFTLEVBQUUsT0FBTyxJQUFJeEMsUUFBQSxDQUFBdUMsU0FBUyxDQUFDQyxTQUFTLENBQUN6QixLQUFLLENBQUM7Y0FDOUQsT0FBTyxJQUFJVixJQUFJLENBQUNVLEtBQUssQ0FBQztZQUN2Qjs7VUFDQWpCLE9BQUEsQ0FBQU8sSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RGRCxJQUFBb0MsSUFBQSxHQUFBeEMsT0FBQTtVQUVBLElBQUFELFFBQUEsR0FBQUMsT0FBQTtVQUNBeUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFM0MsUUFBQSxDQUFBdUMsU0FBUyxDQUFDSyxHQUFHLENBQUM7VUFDekIsTUFBT3hCLFlBQVk7WUFDeEIsQ0FBQXdCLEdBQUk7WUFFSi9CLFlBQUE7Y0FDQyxJQUFJLENBQUMsQ0FBQStCLEdBQUksR0FBRyxJQUFJSCxJQUFBLENBQUFJLEdBQUcsQ0FBQzdDLFFBQUEsQ0FBQXVDLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDO1lBQ25DO1lBRUEsTUFBTVYsSUFBSUEsQ0FBQ25CLEtBQUs7Y0FDZixJQUFJLENBQUMsQ0FBQTZCLEdBQUksQ0FBQ0UsTUFBTSxDQUFDL0IsS0FBSyxDQUFDSixhQUFhLENBQUM7Y0FFckMsTUFBTTtnQkFBRW9DLE1BQU07Z0JBQUVaO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFTLEdBQUksQ0FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRWpDLEtBQUssQ0FBQztjQUVuRSxJQUFJLENBQUNnQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJVixLQUFLLENBQUMseUJBQXlCLENBQUM7O2NBRzNDLE9BQU87Z0JBQUVVLE1BQU07Z0JBQUVaO2NBQUksQ0FBRTtZQUN4Qjs7VUFDQXJDLE9BQUEsQ0FBQXNCLFlBQUEsR0FBQUEsWUFBQSIsImlnbm9yZUxpc3QiOltdfQ==