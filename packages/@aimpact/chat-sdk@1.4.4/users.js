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
        hash: 2081479864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9pdGVtIiwiX2NvcmUiLCJfcHJvdmlkZXIiLCJVc2VyIiwiSXRlbSIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwiZmlyZWJhc2VQcm92aWRlciIsImZpcmViYXNlVG9rZW4iLCJnZXRDdXJyZW50VG9rZW4iLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJzcGVjcyIsImlkIiwidW5kZWZpbmVkIiwiZW50aXR5IiwicHJvdmlkZXIiLCJVc2VyUHJvdmlkZXIiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsIlBlbmRpbmdQcm9taXNlIiwic2V0IiwicmVzb2x2ZSIsImxvYWRlZCIsInRyaWdnZXIiLCJzZXRGaXJlYmFzZVVzZXIiLCJ1c2VyIiwibG9naW4iLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydHkiLCJyZXNwb25zZSIsImxvYWQiLCJkYXRhIiwiZSIsIkVycm9yIiwiZ2V0TW9kZWwiLCJzZGtDb25maWciLCJ1c2VyTW9kZWwiLCJfYXBpIiwiYXBpIiwiQXBpIiwiYmVhcmVyIiwic3RhdHVzIiwicG9zdCJdLCJzb3VyY2VzIjpbIi9pbnRlcmZhY2UudHMiLCIvaXRlbS50cyIsIi9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIQSxJQUFBQyxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7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