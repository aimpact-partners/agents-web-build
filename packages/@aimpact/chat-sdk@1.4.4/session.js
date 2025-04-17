System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.4.4/users", "@beyond-js/kernel@0.1.12/core", "firebase@11.5.0/auth", "@aimpact/chat-sdk@1.4.4/config", "firebase@11.5.0/analytics", "firebase@11.5.0/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
  _export("sessionWrapper", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
    }, function (_aimpactChatSdk144Users) {
      dependency_2 = _aimpactChatSdk144Users;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_firebase1150Auth) {
      dependency_4 = _firebase1150Auth;
    }, function (_aimpactChatSdk144Config) {
      dependency_5 = _aimpactChatSdk144Config;
    }, function (_firebase1150Analytics) {
      dependency_6 = _firebase1150Analytics;
    }, function (_firebase1150App) {
      dependency_7 = _firebase1150App;
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
          "vspecifier": "@aimpact/chat-sdk@1.4.4/session"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['@aimpact/chat-sdk/config', dependency_5], ['firebase/analytics', dependency_6], ['firebase/app', dependency_7]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 3965799308,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Auth = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _users = require("@aimpact/chat-sdk/users");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("firebase/auth");
          var _error = require("./error");
          var _config = require("./firebase/config");
          var _provider = require("./firebase/provider");
          class Auth extends _model.ReactiveModel {
            #pendingLogin;
            #user;
            get user() {
              return this.#user;
            }
            #session;
            #provider;
            get session() {
              return this.#session;
            }
            constructor(session) {
              super();
              this.#session = session;
              this.#provider = new _provider.FirebaseProvider({
                onAuthStateChanged: this.onAuthStateChanged.bind(this)
              });
            }
            #setReady() {
              this.ready = true;
              this.trigger('ready');
            }
            onAuthStateChanged(user) {
              if (!user) {
                this.#setReady();
                return;
              }
              /**
               * this code only must be executed when the page is laoded
               */
              if (!this.ready) {
                this.appLogin(user);
              }
            }
            appLogin = data => {
              if (this.#pendingLogin) {
                return this.#pendingLogin;
              }
              if (!data?.uid) {
                console.trace('INVALID_USER', 'No user id found in response', data);
                throw new _error.CustomError(1001, 'INVALID_USER');
              }
              // this.#provider.getCurrentToken().then(token=>{})
              this.#pendingLogin = new _core.PendingPromise();
              // const firebaseToken = await this.#provider.getCurrentToken();
              this.#provider.getCurrentToken().then(firebaseToken => {
                const specs = {
                  ...data,
                  firebaseToken
                };
                const model = this.getUserModel(specs);
                this.#user = model;
                const logInValidation = couldLog => {
                  if (!couldLog) {
                    console.error('Could not login', couldLog);
                  }
                  this.ready = true;
                  this.trigger('ready');
                  this.trigger('login');
                  this.#pendingLogin.resolve({
                    status: true,
                    model
                  });
                };
                model.login(firebaseToken).then(logInValidation).catch(e => {
                  console.error(e);
                  console.log(100, 'fallamos');
                  throw new _error.CustomError(1002, 'LOGIN_ERROR');
                });
              });
              return this.#pendingLogin;
            };
            async loginWith(provider) {
              try {
                if (provider !== 'google') {
                  console.log('Provider not supported');
                  return;
                }
                const userData = await this.#provider.signInWithGoogle();
                return this.appLogin(userData);
              } catch (error) {
                const errorMappings = {
                  'auth/account-exists-with-different-credential': 'ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL',
                  'auth/popup-closed-by-user': 'POPUP_CLOSED_BY_USER'
                };
                // Known error, throw a custom exception
                if (error.code in errorMappings) {
                  throw new _error.CustomError(1003, errorMappings[error.code]);
                }
                // Unexpected error, rethrow for logging/debugging
                throw new Error(`Unexpected error during Google sign-in: ${error.message}`);
              }
            }
            getUserModel(specs) {
              if (this.#user && this.#user.id === specs.id) {
                this.#user.set(specs);
                return this.#user;
              }
              if (this.#user) this.#user = undefined;
              //@ts-ignore
              this.#user = _users.User.getModel(specs);
              this.#user.setFirebaseProvider(this.#provider);
              this.#user.initialize(specs);
              return this.#user;
            }
            async setUser(data) {
              if (!data && this.#user) {
                this.#user = undefined;
                this.signOut();
              }
              if (data) {
                if (!data) return;
                if (this.#user && this.#user.id === data.uid) return;
                // const user = new SDKSettings.userModel({ id: data.uid });
                const user = await this.getUserModel({
                  id: data.uid
                });
                user.setFirebaseUser(data);
                /* TODO Review */
                await user.set(data);
                this.#user = user;
              }
              this.ready = true;
              this.triggerEvent('change');
            }
            signOut = async () => {
              this.#pendingLogin = undefined;
              this.#user = undefined;
              await (0, _auth.signOut)(_config.auth);
            };
            logout = this.signOut;
          }
          exports.Auth = Auth;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 3466124835,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            code;
            constructor(code, message) {
              super(message);
              this.code = code;
              this.name = 'CustomError';
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /*********************************
      INTERNAL MODULE: ./firebase/config
      *********************************/

      ims.set('./firebase/config', {
        hash: 1565981110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.facebookProvider = exports.auth = exports.analytics = void 0;
          var _analytics = require("firebase/analytics");
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          // TODO: Add SDKs for Firebase products that you want to use
          // https://firebase.google.com/docs/web/setup#available-libraries
          // Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          const DEV = {
            apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
            authDomain: 'aimpact-partners-dev.firebaseapp.com',
            databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
            projectId: 'aimpact-partners-dev',
            storageBucket: 'aimpact-partners-dev.appspot.com',
            messagingSenderId: '1081434267674',
            appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
            measurementId: 'G-QLL5WFH89Y'
          };
          const BETA = {
            apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
            authDomain: 'aimpact-partners-prod.firebaseapp.com',
            projectId: 'aimpact-partners-prod',
            storageBucket: 'aimpact-partners-prod.appspot.com',
            messagingSenderId: '741854278426',
            appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
          };
          const CONFIG = {
            local: DEV,
            development: DEV,
            testing: {
              apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
              authDomain: 'chat-api-test-393820.firebaseapp.com',
              projectId: 'chat-api-test-393820',
              storageBucket: 'chat-api-test-393820.appspot.com',
              messagingSenderId: '1083395329827',
              appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
            },
            quality: BETA,
            production: BETA
          };
          const firebaseConfig = {
            apiKey: 'AIzaSyCID7Abuob1R86qIAMyQ-zY0O0DXUtCRYs',
            authDomain: 'agents-api-dev.firebaseapp.com',
            projectId: 'agents-api-dev',
            storageBucket: 'agents-api-dev.firebasestorage.app',
            messagingSenderId: '883367315651',
            appId: '1:883367315651:web:c683b5effb3c3f96e5fa76',
            measurementId: 'G-8VBFZXEBQZ'
          };
          // Initialize Firebase
          const app = (0, _app.initializeApp)(firebaseConfig);
          const auth = exports.auth = (0, _auth.getAuth)(app);
          const analytics = exports.analytics = (0, _analytics.getAnalytics)(app);
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          const facebookProvider = exports.facebookProvider = new _auth.FacebookAuthProvider();
        }
      });

      /***********************************
      INTERNAL MODULE: ./firebase/provider
      ***********************************/

      ims.set('./firebase/provider', {
        hash: 3533665603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.googleProvider = exports.FirebaseProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _auth = require("firebase/auth");
          var _config = require("./config");
          const googleProvider = exports.googleProvider = new _auth.GoogleAuthProvider();
          class FirebaseProvider extends _model.ReactiveModel {
            #executions = 0;
            #auth;
            #onAuthStateChanged;
            constructor({
              onAuthStateChanged: callback
            }) {
              super();
              this.#auth = _config.auth;
              this.#onAuthStateChanged = callback;
              (0, _auth.onAuthStateChanged)(_config.auth, this.onAuthStateChanged.bind(this));
            }
            onAuthStateChanged(user) {
              if (!this.#executions) {
                this.trigger('ready');
                this.#executions++;
              }
              const data = user ? this.getData(user) : null;
              this.#onAuthStateChanged(data);
            }
            async signInWithGoogle() {
              const response = await (0, _auth.signInWithPopup)(_config.auth, googleProvider);
              return this.getData(response.user);
            }
            async getCurrentToken(forceRefresh = false) {
              const user = this.#auth.currentUser;
              if (!user) return null;
              try {
                return await user.getIdToken(forceRefresh);
              } catch (error) {
                console.error('Error retrieving token:', error);
                return null;
              }
            }
            logout() {
              return (0, _auth.signOut)(_config.auth);
            }
            getData(user) {
              return {
                id: user.uid,
                uid: user.uid,
                email: user.email ?? '',
                name: user.displayName ?? '',
                displayName: user.displayName ?? '',
                photoURL: user.photoURL ?? '',
                phoneNumber: user.phoneNumber ?? '',
                provider: user.providerData[0]?.providerId ?? 'unknown'
              };
            }
          }
          exports.FirebaseProvider = FirebaseProvider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1780847829,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.sessionWrapper = void 0;
          var _config = require("./firebase/config");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _auth = require("./auth");
          class SessionManager extends _model.ReactiveModel {
            get user() {
              return this.#auth.user;
            }
            get userId() {
              return _config.auth.currentUser ? _config.auth.currentUser.uid : null;
            }
            get logged() {
              return !!this.#auth.user;
            }
            #promise;
            get isReady() {
              return this.#promise;
            }
            #auth;
            get auth() {
              return this.#auth;
            }
            constructor() {
              super();
              this.#promise = new _core.PendingPromise();
              this.#auth = new _auth.Auth(this);
              this.#auth.on('ready', this.listenReady.bind(this));
              this.ready = true;
            }
            listenReady() {
              this.ready = true;
              this.#promise.resolve(this.ready);
              this.triggerEvent('change');
            }
            async logout() {
              try {
                await this.#auth.signOut();
                function clear(keepKeys) {
                  const keysToKeep = new Set(keepKeys);
                  Object.keys(localStorage).forEach(key => {
                    if (!keysToKeep.has(key)) {
                      localStorage.removeItem(key);
                    }
                  });
                }
                clear(['ailearn.home.tour']);
                this.triggerEvent('logout');
                return true;
              } catch (e) {
                console.error(e);
                return false;
              }
            }
          }
          /*bundle*/
          const sessionWrapper = exports.sessionWrapper = new SessionManager();
          globalThis.s = sessionWrapper;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2395231135,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "sessionWrapper",
        "name": "sessionWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'sessionWrapper') && _export("sessionWrapper", sessionWrapper = require ? require('./index').sessionWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3VzZXJzIiwiX2NvcmUiLCJfYXV0aCIsIl9lcnJvciIsIl9jb25maWciLCJfcHJvdmlkZXIiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJzZXNzaW9uIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsIkZpcmViYXNlUHJvdmlkZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJiaW5kIiwic2V0UmVhZHkiLCIjc2V0UmVhZHkiLCJyZWFkeSIsInRyaWdnZXIiLCJhcHBMb2dpbiIsImRhdGEiLCJ1aWQiLCJjb25zb2xlIiwidHJhY2UiLCJDdXN0b21FcnJvciIsIlBlbmRpbmdQcm9taXNlIiwiZ2V0Q3VycmVudFRva2VuIiwidGhlbiIsImZpcmViYXNlVG9rZW4iLCJzcGVjcyIsIm1vZGVsIiwiZ2V0VXNlck1vZGVsIiwibG9nSW5WYWxpZGF0aW9uIiwiY291bGRMb2ciLCJlcnJvciIsInJlc29sdmUiLCJzdGF0dXMiLCJsb2dpbiIsImNhdGNoIiwiZSIsImxvZyIsImxvZ2luV2l0aCIsInVzZXJEYXRhIiwic2lnbkluV2l0aEdvb2dsZSIsImVycm9yTWFwcGluZ3MiLCJjb2RlIiwiRXJyb3IiLCJtZXNzYWdlIiwiaWQiLCJzZXQiLCJ1bmRlZmluZWQiLCJVc2VyIiwiZ2V0TW9kZWwiLCJzZXRGaXJlYmFzZVByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsInNldFVzZXIiLCJzaWduT3V0Iiwic2V0RmlyZWJhc2VVc2VyIiwidHJpZ2dlckV2ZW50IiwiYXV0aCIsImxvZ291dCIsImV4cG9ydHMiLCJuYW1lIiwiX2FuYWx5dGljcyIsIl9hcHAiLCJERVYiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJCRVRBIiwiQ09ORklHIiwibG9jYWwiLCJkZXZlbG9wbWVudCIsInRlc3RpbmciLCJxdWFsaXR5IiwicHJvZHVjdGlvbiIsImZpcmViYXNlQ29uZmlnIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJhbmFseXRpY3MiLCJnZXRBbmFseXRpY3MiLCJnb29nbGVQcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZhY2Vib29rUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsImV4ZWN1dGlvbnMiLCJjYWxsYmFjayIsImdldERhdGEiLCJyZXNwb25zZSIsInNpZ25JbldpdGhQb3B1cCIsImZvcmNlUmVmcmVzaCIsImN1cnJlbnRVc2VyIiwiZ2V0SWRUb2tlbiIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob25lTnVtYmVyIiwicHJvdmlkZXJEYXRhIiwicHJvdmlkZXJJZCIsIlNlc3Npb25NYW5hZ2VyIiwidXNlcklkIiwibG9nZ2VkIiwicHJvbWlzZSIsImlzUmVhZHkiLCJvbiIsImxpc3RlblJlYWR5IiwiY2xlYXIiLCJrZWVwS2V5cyIsImtleXNUb0tlZXAiLCJTZXQiLCJPYmplY3QiLCJrZXlzIiwibG9jYWxTdG9yYWdlIiwiZm9yRWFjaCIsImtleSIsImhhcyIsInJlbW92ZUl0ZW0iLCJzZXNzaW9uV3JhcHBlciIsImdsb2JhbFRoaXMiLCJzIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi9hdXRoLnRzIiwiL2Vycm9yLnRzIiwiL2ZpcmViYXNlL2NvbmZpZy50cyIsIi9maXJlYmFzZS9wcm92aWRlci50cyIsIi9pbmRleC50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxL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SUFBSSxDQUFDLENBQUFrQyxJQUFLLEdBQUcsSUFBSTFELEtBQUEsQ0FBQUksSUFBSSxDQUFDLElBQUksQ0FBQztjQUMzQixJQUFJLENBQUMsQ0FBQXNELElBQUssQ0FBQ21ELEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNqRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDbkQsSUFBSSxDQUFDRyxLQUFLLEdBQUcsSUFBSTtZQUNsQjtZQUVBOEYsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQzlGLEtBQUssR0FBRyxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBMkYsT0FBUSxDQUFDekUsT0FBTyxDQUFDLElBQUksQ0FBQ2xCLEtBQUssQ0FBQztjQUNqQyxJQUFJLENBQUN5QyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBRUEsTUFBTUUsTUFBTUEsQ0FBQTtjQUNYLElBQUk7Z0JBQ0gsTUFBTSxJQUFJLENBQUMsQ0FBQUQsSUFBSyxDQUFDSCxPQUFPLEVBQUU7Z0JBRTFCLFNBQVN3RCxLQUFLQSxDQUFDQyxRQUFRO2tCQUN0QixNQUFNQyxVQUFVLEdBQUcsSUFBSUMsR0FBRyxDQUFDRixRQUFRLENBQUM7a0JBQ3BDRyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxJQUFHO29CQUN2QyxJQUFJLENBQUNOLFVBQVUsQ0FBQ08sR0FBRyxDQUFDRCxHQUFHLENBQUMsRUFBRTtzQkFDekJGLFlBQVksQ0FBQ0ksVUFBVSxDQUFDRixHQUFHLENBQUM7O2tCQUU5QixDQUFDLENBQUM7Z0JBQ0g7Z0JBQ0FSLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzVCLElBQUksQ0FBQ3RELFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBRTNCLE9BQU8sSUFBSTtlQUNYLENBQUMsT0FBT25CLENBQUMsRUFBRTtnQkFDWGpCLE9BQU8sQ0FBQ1ksS0FBSyxDQUFDSyxDQUFDLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzs7WUFFZDs7VUFHTTtVQUFXLE1BQU1vRixjQUFjLEdBQUE5RCxPQUFBLENBQUE4RCxjQUFBLEdBQUcsSUFBSWxCLGNBQWMsRUFBRTtVQUM3RG1CLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHRixjQUFjOzs7Ozs7Ozs7OztVQ3ZFN0I7O1VBRUFQLE1BQUEsQ0FBQVUsY0FBQSxDQUFBakUsT0FBQTtZQUNBa0UsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119