System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model", "@aimpact/chat-sdk@1.4.4/users", "@beyond-js/kernel@0.1.12/core", "firebase@11.5.0/auth", "firebase@11.5.0/app"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, sessionWrapper, __beyond_pkg, hmr;
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
    }, function (_firebase1150App) {
      dependency_5 = _firebase1150App;
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
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@aimpact/chat-sdk/users', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['firebase/auth', dependency_4], ['firebase/app', dependency_5]]);
      ims = new Map();
      /**********************
      INTERNAL MODULE: ./auth
      **********************/
      ims.set('./auth', {
        hash: 1758461453,
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
            constructor(session, settings) {
              super();
              this.#session = session;
              this.#provider = new _provider.FirebaseProvider(settings.firebase, {
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
                    // this.#user as undefined does not log in.
                    this.#user = undefined;
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
                  this.#user = undefined;
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
        hash: 378245058,
        creator: function (require, exports) {
          // // Import the functions you need from the SDKs you need
          // import config from '@aimpact/chat-sdk/config';
          // import { getAnalytics } from 'firebase/analytics';
          // import { initializeApp } from 'firebase/app';
          // import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';
          // // TODO: Add SDKs for Firebase products that you want to use
          // // https://firebase.google.com/docs/web/setup#available-libraries
          // // Your web app's Firebase configuration
          // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          // const DEV = {
          // 	apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
          // 	authDomain: 'aimpact-partners-dev.firebaseapp.com',
          // 	databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
          // 	projectId: 'aimpact-partners-dev',
          // 	storageBucket: 'aimpact-partners-dev.appspot.com',
          // 	messagingSenderId: '1081434267674',
          // 	appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
          // 	measurementId: 'G-QLL5WFH89Y'
          // };
          // const BETA = {
          // 	apiKey: 'AIzaSyAEEozzwR0cguqynxvL1qB38i8liOCgtJc',
          // 	authDomain: 'aimpact-partners-prod.firebaseapp.com',
          // 	projectId: 'aimpact-partners-prod',
          // 	storageBucket: 'aimpact-partners-prod.appspot.com',
          // 	messagingSenderId: '741854278426',
          // 	appId: '1:741854278426:web:9ff2a50e705edcc501f2a3'
          // };
          // const CONFIG = {
          // 	local: DEV,
          // 	development: DEV,
          // 	testing: {
          // 		apiKey: 'AIzaSyDiwwiF_O_WZHyq7QrjnxqIg9EXz1vavV0',
          // 		authDomain: 'chat-api-test-393820.firebaseapp.com',
          // 		projectId: 'chat-api-test-393820',
          // 		storageBucket: 'chat-api-test-393820.appspot.com',
          // 		messagingSenderId: '1083395329827',
          // 		appId: '1:1083395329827:web:c6fead0e2d4124b4f90696'
          // 	},
          // 	quality: BETA,
          // 	production: BETA
          // };
          // const firebaseConfig = {
          // 	apiKey: 'AIzaSyCID7Abuob1R86qIAMyQ-zY0O0DXUtCRYs',
          // 	authDomain: 'agents-api-dev.firebaseapp.com',
          // 	projectId: 'agents-api-dev',
          // 	storageBucket: 'agents-api-dev.firebasestorage.app',
          // 	messagingSenderId: '883367315651',
          // 	appId: '1:883367315651:web:c683b5effb3c3f96e5fa76',
          // 	measurementId: 'G-8VBFZXEBQZ'
          // };
          // // Initialize Firebase
          // const app = initializeApp(firebaseConfig);
          // export const auth = getAuth(app);
          // export const analytics = getAnalytics(app);
          // export const googleProvider = new GoogleAuthProvider();
          // export const facebookProvider = new FacebookAuthProvider();
          "use strict";
        }
      });

      /***********************************
      INTERNAL MODULE: ./firebase/provider
      ***********************************/

      ims.set('./firebase/provider', {
        hash: 1670398072,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FirebaseProvider = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _app = require("firebase/app");
          var _auth = require("firebase/auth");
          class FirebaseProvider extends _model.ReactiveModel {
            #executions = 0;
            #auth;
            #app;
            #googleProvider = new _auth.GoogleAuthProvider();
            #onAuthStateChanged;
            constructor(config, {
              onAuthStateChanged: callback
            }) {
              super();
              // Inicializa Firebase App y Auth internamente
              this.#app = (0, _app.initializeApp)(config);
              this.#auth = (0, _auth.getAuth)(this.#app);
              this.#onAuthStateChanged = callback;
              // Observador de sesión
              (0, _auth.onAuthStateChanged)(this.#auth, this.onAuthStateChanged.bind(this));
            }
            onAuthStateChanged(user) {
              if (!this.#executions) {
                this.trigger('ready');
                this.#executions++;
              }
              const data = user ? this.getData(user) : null;
              this.#onAuthStateChanged?.(data);
            }
            async signInWithGoogle() {
              const response = await (0, _auth.signInWithPopup)(this.#auth, this.#googleProvider);
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
              return (0, _auth.signOut)(this.#auth);
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
        hash: 261302024,
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
              return !!this.#auth?.user;
            }
            #initialized = false;
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
            }
            settings(settings) {
              this.#initialized = true;
              this.#auth = new _auth.Auth(this, settings);
              this.#auth.on('ready', this.listenReady.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3VzZXJzIiwiX2NvcmUiLCJfYXV0aCIsIl9lcnJvciIsIl9jb25maWciLCJfcHJvdmlkZXIiLCJBdXRoIiwiUmVhY3RpdmVNb2RlbCIsInBlbmRpbmdMb2dpbiIsInVzZXIiLCJzZXNzaW9uIiwicHJvdmlkZXIiLCJjb25zdHJ1Y3RvciIsInNldHRpbmdzIiwiRmlyZWJhc2VQcm92aWRlciIsImZpcmViYXNlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYmluZCIsInNldFJlYWR5IiwiI3NldFJlYWR5IiwicmVhZHkiLCJ0cmlnZ2VyIiwiYXBwTG9naW4iLCJkYXRhIiwidWlkIiwiY29uc29sZSIsInRyYWNlIiwiQ3VzdG9tRXJyb3IiLCJQZW5kaW5nUHJvbWlzZSIsImdldEN1cnJlbnRUb2tlbiIsInRoZW4iLCJmaXJlYmFzZVRva2VuIiwic3BlY3MiLCJtb2RlbCIsImdldFVzZXJNb2RlbCIsImxvZ0luVmFsaWRhdGlvbiIsImNvdWxkTG9nIiwidW5kZWZpbmVkIiwicmVzb2x2ZSIsInN0YXR1cyIsImxvZ2luIiwiY2F0Y2giLCJlIiwibG9naW5XaXRoIiwibG9nIiwidXNlckRhdGEiLCJzaWduSW5XaXRoR29vZ2xlIiwiZXJyb3IiLCJlcnJvck1hcHBpbmdzIiwiY29kZSIsIkVycm9yIiwibWVzc2FnZSIsImlkIiwic2V0IiwiVXNlciIsImdldE1vZGVsIiwic2V0RmlyZWJhc2VQcm92aWRlciIsImluaXRpYWxpemUiLCJzZXRVc2VyIiwic2lnbk91dCIsInNldEZpcmViYXNlVXNlciIsInRyaWdnZXJFdmVudCIsImF1dGgiLCJsb2dvdXQiLCJleHBvcnRzIiwibmFtZSIsIl9hcHAiLCJleGVjdXRpb25zIiwiYXBwIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJjb25maWciLCJjYWxsYmFjayIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RGF0YSIsInJlc3BvbnNlIiwic2lnbkluV2l0aFBvcHVwIiwiZm9yY2VSZWZyZXNoIiwiY3VycmVudFVzZXIiLCJnZXRJZFRva2VuIiwiZW1haWwiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvbmVOdW1iZXIiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwiU2Vzc2lvbk1hbmFnZXIiLCJ1c2VySWQiLCJsb2dnZWQiLCJpbml0aWFsaXplZCIsInByb21pc2UiLCJpc1JlYWR5Iiwib24iLCJsaXN0ZW5SZWFkeSIsImNsZWFyIiwia2VlcEtleXMiLCJrZXlzVG9LZWVwIiwiU2V0IiwiT2JqZWN0Iiwia2V5cyIsImxvY2FsU3RvcmFnZSIsImZvckVhY2giLCJrZXkiLCJoYXMiLCJyZW1vdmVJdGVtIiwic2Vzc2lvbldyYXBwZXIiLCJnbG9iYWxUaGlzIiwicyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvYXV0aC50cyIsIi9lcnJvci50cyIsIi9maXJlYmFzZS9jb25maWcudHMiLCIvZmlyZWJhc2UvcHJvdmlkZXIudHMiLCIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxLQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxLQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBSSxNQUFBLEdBQUFKLE9BQUE7VUFDQSxJQUFBSyxPQUFBLEdBQUFMLE9BQUE7VUFDQSxJQUFBTSxTQUFBLEdBQUFOLE9BQUE7VUFHTSxNQUFPTyxJQUFLLFNBQVFSLE1BQUEsQ0FBQVMsYUFBbUI7WUFDNUMsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLElBQUs7WUFFTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEs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