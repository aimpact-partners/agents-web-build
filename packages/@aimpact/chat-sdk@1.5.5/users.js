System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/reactive@2.1.0/entities/item", "@beyond-js/kernel@0.1.12/core", "firebase@11.5.0/auth", "@beyond-js/http-suite@0.1.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, IChatUser, User, __beyond_pkg, hmr;
  _export({
    IChatUser: void 0,
    User: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactChatSdk155Startup) {
      dependency_1 = _aimpactChatSdk155Startup;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_2 = _beyondJsReactive210EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1150Auth) {
      dependency_4 = _firebase1150Auth;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/users"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/chat-sdk/startup', dependency_1], ['@beyond-js/reactive/entities/item', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['@beyond-js/http-suite/api', dependency_5]]);
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
        hash: 1551228273,
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
            #token;
            get token() {
              return _startup.sdkConfig.project === 'rvd' ? this.#token : this.firebaseToken;
            }
            set token(value) {
              if (value === this.#token) return;
              this.#token = value;
              this.trigger('token.changed');
            }
            #firebaseProvider;
            get firebaseToken() {
              return this.#firebaseProvider?.getCurrentToken();
            }
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
                properties: [...properties, 'displayName', 'id', 'email', 'photoURL', 'phoneNumber'],
                entity: 'User',
                provider: _provider.UserProvider
              });
              // this.initialize(specs);
            }
            set(specs) {
              const data = super.set(specs);
              if (specs.token) this.token = specs.token;
              return {
                ...data,
                token: this.token
              };
            }
            getProperties() {
              const data = super.getProperties();
              return {
                ...data,
                token: this.token
              };
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
        hash: 3101769485,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9zdGFydHVwIiwicmVxdWlyZSIsIl9pdGVtIiwiX2NvcmUiLCJfcHJvdmlkZXIiLCJVc2VyIiwiSXRlbSIsImxvZ2dlZCIsInByb21pc2VJbml0IiwiZmlyZWJhc2VVc2VyIiwidG9rZW4iLCJzZGtDb25maWciLCJwcm9qZWN0IiwiZmlyZWJhc2VUb2tlbiIsInRyaWdnZXIiLCJmaXJlYmFzZVByb3ZpZGVyIiwiZ2V0Q3VycmVudFRva2VuIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwic3BlY3MiLCJpZCIsInVuZGVmaW5lZCIsImVudGl0eSIsInByb3ZpZGVyIiwiVXNlclByb3ZpZGVyIiwic2V0IiwiZGF0YSIsImdldFByb3BlcnRpZXMiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsIlBlbmRpbmdQcm9taXNlIiwicmVzb2x2ZSIsImxvYWRlZCIsInNldEZpcmViYXNlVXNlciIsInVzZXIiLCJsb2dpbiIsImdldFByb3BlcnR5IiwicmVzcG9uc2UiLCJsb2FkIiwiZ2V0TW9kZWwiLCJ1c2VyTW9kZWwiLCJfYXBpIiwiYXBpIiwiQXBpIiwiYmVhcmVyIiwic3RhdHVzIiwicG9zdCIsIkVycm9yIl0sInNvdXJjZXMiOlsiL2ludGVyZmFjZS50cyIsIi9pdGVtLnRzIiwiL3Byb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUFBLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNIQSxJQUFBQyxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxTQUFBLEdBQUFILE9BQUE7VUFFTyxXQVBQOztVQU9pQixNQUFPSSxJQUFLLFNBQVFILEtBQUEsQ0FBQUksSUFBNkI7WUFDakUsQ0FBQUMsTUFBTztZQVNQLENBQUFDLFdBQVk7WUFDWixDQUFBQyxZQUFhO1lBQ2IsSUFBSUYsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBRyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU9WLFFBQUEsQ0FBQVcsU0FBUyxDQUFDQyxPQUFPLEtBQUssS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFBRixLQUFNLEdBQUcsSUFBSSxDQUFDRyxhQUFhO1lBQ3RFO1lBQ0EsSUFBSUgsS0FBS0EsQ0FBQ1gsS0FBSztjQUNkLElBQUlBLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQVcsS0FBTSxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBQSxLQUFNLEdBQUdYLEtBQUs7Y0FDbkIsSUFBSSxDQUFDZSxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzlCO1lBRUEsQ0FBQUMsZ0JBQWlCO1lBQ2pCLElBQUlGLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUUsZ0JBQWlCLEVBQUVDLGVBQWUsRUFBRTtZQUNqRDtZQUVBQyxZQUFZO2NBQUVDLFVBQVUsR0FBRyxFQUFFO2NBQUUsR0FBR0M7WUFBSyxDQUFFLEdBQUc7Y0FBRUQsVUFBVSxFQUFFLEVBQUU7Y0FBRUUsRUFBRSxFQUFFQztZQUFTLENBQUU7Y0FDNUU7Y0FDQSxLQUFLLENBQUM7Z0JBQ0xELEVBQUUsRUFBRUQsS0FBSyxDQUFDQyxFQUFFO2dCQUNaRixVQUFVLEVBQUUsQ0FBQyxHQUFHQSxVQUFVLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQztnQkFDcEZJLE1BQU0sRUFBRSxNQUFNO2dCQUNkQyxRQUFRLEVBQUVuQixTQUFBLENBQUFvQjtlQUNWLENBQUM7Y0FFRjtZQUNEO1lBQ0FDLEdBQUdBLENBQUNOLEtBQUs7Y0FDUixNQUFNTyxJQUFJLEdBQUcsS0FBSyxDQUFDRCxHQUFHLENBQUNOLEtBQUssQ0FBQztjQUM3QixJQUFJQSxLQUFLLENBQUNULEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUssR0FBR1MsS0FBSyxDQUFDVCxLQUFLO2NBQ3pDLE9BQU87Z0JBQUUsR0FBR2dCLElBQUk7Z0JBQUVoQixLQUFLLEVBQUUsSUFBSSxDQUFDQTtjQUFLLENBQUU7WUFDdEM7WUFFQWlCLGFBQWFBLENBQUE7Y0FDWixNQUFNRCxJQUFJLEdBQUcsS0FBSyxDQUFDQyxhQUFhLEVBQUU7Y0FDbEMsT0FBTztnQkFBRSxHQUFHRCxJQUFJO2dCQUFFaEIsS0FBSyxFQUFFLElBQUksQ0FBQ0E7Y0FBSyxDQUFFO1lBQ3RDO1lBQ0FrQixtQkFBbUJBLENBQUNMLFFBQVE7Y0FDM0IsSUFBSSxDQUFDLENBQUFSLGdCQUFpQixHQUFHUSxRQUFRO1lBQ2xDO1lBQ0FNLFVBQVUsR0FBRyxNQUFNVixLQUFLLElBQUc7Y0FDMUIsSUFBSSxJQUFJLENBQUMsQ0FBQVgsV0FBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7Y0FDL0MsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJTCxLQUFBLENBQUEyQixjQUFjLEVBQUU7Y0FFeEMsSUFBSSxDQUFDTCxHQUFHLENBQUNOLEtBQUssQ0FBQztjQUNmO2NBQ0EsSUFBSSxDQUFDLENBQUFYLFdBQVksQ0FBQ3VCLE9BQU8sRUFBRTtjQUMzQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO2NBRWxCLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUNqQyxDQUFDO1lBRURtQixlQUFlLEdBQUcsTUFBTUMsSUFBSSxJQUFHO2NBQzlCLElBQUksQ0FBQyxDQUFBekIsWUFBYSxHQUFHeUIsSUFBSTtZQUMxQixDQUFDO1lBRUQsTUFBTUMsS0FBS0EsQ0FBQ3RCLGFBQWE7Y0FDeEIsSUFBSSxJQUFJLENBQUMsQ0FBQU4sTUFBTyxFQUFFO2NBRWxCLE1BQU1ZLEtBQUssR0FBRztnQkFBRSxHQUFHLElBQUksQ0FBQ1EsYUFBYSxFQUFFO2dCQUFFUCxFQUFFLEVBQUUsSUFBSSxDQUFDZ0IsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFBRXZCO2NBQWEsQ0FBZTtjQUVqRyxNQUFNd0IsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDZCxRQUFRLENBQUNlLElBQUksQ0FBQ25CLEtBQUssQ0FBQztjQUVoRCxJQUFJLENBQUNNLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDWCxJQUFJLENBQUM7Y0FFdkI7Y0FDQSxJQUFJLENBQUMsQ0FBQW5CLE1BQU8sR0FBRyxJQUFJO2NBQ25CLElBQUksQ0FBQ08sT0FBTyxDQUFDLE9BQU8sQ0FBQztjQUNyQixPQUFPLElBQUk7WUFDWjtZQUVBLE9BQU95QixRQUFRQSxDQUFDcEIsS0FBSztjQUNwQixJQUFJbkIsUUFBQSxDQUFBVyxTQUFTLENBQUM2QixTQUFTLEVBQUUsT0FBTyxJQUFJeEMsUUFBQSxDQUFBVyxTQUFTLENBQUM2QixTQUFTLENBQUNyQixLQUFLLENBQUM7Y0FDOUQsT0FBTyxJQUFJZCxJQUFJLENBQUNjLEtBQUssQ0FBQztZQUN2Qjs7VUFDQXJCLE9BQUEsQ0FBQU8sSUFBQSxHQUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pHRCxJQUFBTCxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd0MsSUFBQSxHQUFBeEMsT0FBQTtVQUVNLE1BQU91QixZQUFZO1lBQ3hCLENBQUFrQixHQUFJO1lBRUp6QixZQUFBO2NBQ0MsSUFBSSxDQUFDLENBQUF5QixHQUFJLEdBQUcsSUFBSUQsSUFBQSxDQUFBRSxHQUFHLENBQUMzQyxRQUFBLENBQUFXLFNBQVMsQ0FBQytCLEdBQUcsQ0FBQztZQUNuQztZQUVBLE1BQU1KLElBQUlBLENBQUNuQixLQUFLO2NBQ2YsSUFBSSxDQUFDLENBQUF1QixHQUFJLENBQUNFLE1BQU0sQ0FBQ3pCLEtBQUssQ0FBQ04sYUFBYSxDQUFDO2NBRXJDLE1BQU07Z0JBQUVnQyxNQUFNO2dCQUFFbkI7Y0FBSSxDQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQWdCLEdBQUksQ0FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRTNCLEtBQUssQ0FBQztjQUVuRSxJQUFJLENBQUMwQixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRSxLQUFLLENBQUMseUJBQXlCLENBQUM7O2NBRzNDLE9BQU87Z0JBQUVGLE1BQU07Z0JBQUVuQjtjQUFJLENBQUU7WUFDeEI7O1VBQ0E1QixPQUFBLENBQUEwQixZQUFBLEdBQUFBLFlBQUEiLCJpZ25vcmVMaXN0IjpbXX0=