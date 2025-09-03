System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/transversals", "@beyond-js/widgets@0.1.6/render", "@aimpact/agents-client@0.0.29/endpoint", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/routing", "@beyond-js/reactive@2.1.1/model", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/config", "@aimpact/chat-sdk@1.5.5/startup", "@aimpact/agents-api@0.4.1/ws-config"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, Transversal, __beyond_transversal, widgets, bundles;
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Transversals) {
      dependency_1 = _beyondJsKernel0112Transversals;
    }, function (_beyondJsWidgets016Render) {
      dependency_2 = _beyondJsWidgets016Render;
    }, function (_aimpactAgentsClient0029Endpoint) {
      dependency_3 = _aimpactAgentsClient0029Endpoint;
    }, function (_aimpactChatSdk155Session) {
      dependency_4 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_5 = _beyondJsKernel0112Routing;
    }, function (_beyondJsReactive211Model) {
      dependency_6 = _beyondJsReactive211Model;
    }, function (_aimpactPlatform016Models) {
      dependency_7 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016Config) {
      dependency_8 = _aimpactPlatform016Config;
    }, function (_aimpactChatSdk155Startup) {
      dependency_9 = _aimpactChatSdk155Startup;
    }, function (_aimpactAgentsApi041WsConfig) {
      dependency_10 = _aimpactAgentsApi041WsConfig;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));
      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));
      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@aimpact/agents-client/endpoint', dependency_3], ['@aimpact/chat-sdk/session', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/platform/models', dependency_7], ['@aimpact/platform/config', dependency_8], ['@aimpact/chat-sdk/startup', dependency_9], ['@aimpact/agents-api/ws-config', dependency_10]]);

      /*************
      BUNDLE: WIDGET
      *************/
      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "realtime-home-page",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/home",
        "is": "page",
        "route": "/realtime-home"
      }, {
        "name": "beyondjs-agents-realtime-console-original",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console-original",
        "is": "page",
        "route": "/console/henry"
      }, {
        "name": "beyondjs-agents-realtime-console",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console",
        "is": "page",
        "route": "/console"
      }, {
        "name": "beyondjs-agents-realtime-conversation",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/conversation",
        "is": "page",
        "route": "/conversation"
      }, {
        "name": "beyondjs-agents-realtime-recorder",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/recorder",
        "is": "page",
        "route": "/recorder"
      }, {
        "name": "chat-sdk-markdown-page",
        "vspecifier": "@aimpact/chat-sdk@1.5.5/tests/markdown",
        "is": "page",
        "route": "/chat/sdk/markdown",
        "layout": "general-layout"
      }, {
        "name": "chat-sdk-playable",
        "vspecifier": "@aimpact/chat-sdk@1.5.5/tests/playable",
        "is": "page",
        "route": "/chat/sdk/playable"
      }, {
        "name": "app-med-wiki",
        "vspecifier": "@aimpact/platform@0.1.6/media-wiki",
        "is": "page",
        "route": "/media-wiki"
      }, {
        "name": "app-platform-playground",
        "vspecifier": "@aimpact/platform@0.1.6/playground.widget",
        "is": "page",
        "route": "/playground",
        "layout": "platform-layout"
      }, {
        "name": "bynd-prompt-management",
        "vspecifier": "@aimpact/platform@0.1.6/prompts/management.widget",
        "is": "page",
        "route": "/prompts/management",
        "layout": "platform-layout"
      }, {
        "name": "auth-layout",
        "vspecifier": "@aimpact/platform@0.1.6/auth-layout",
        "is": "layout"
      }, {
        "name": "platform-layout",
        "vspecifier": "@aimpact/platform@0.1.6/layout/main",
        "is": "layout"
      }, {
        "name": "components-page",
        "vspecifier": "@aimpact/platform@0.1.6/components.widget",
        "is": "page",
        "route": "/ui/components",
        "layout": "platform-layout"
      }, {
        "name": "auth-login-page",
        "vspecifier": "@aimpact/platform@0.1.6/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }, {
        "name": "platform-categories-list",
        "vspecifier": "@aimpact/platform@0.1.6/categories/list.widget",
        "is": "page",
        "route": "/project/${projectId}/categories/list/${id}",
        "layout": "platform-layout"
      }, {
        "name": "aimpact-platform-projects",
        "vspecifier": "@aimpact/platform@0.1.6/projects.widget",
        "is": "page",
        "route": "/projects",
        "layout": "platform-layout"
      }, {
        "name": "ailearn-prompt-list",
        "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-list.widget",
        "is": "page",
        "route": "/",
        "layout": "platform-layout"
      }, {
        "name": "ailearn-prompts-schemas",
        "vspecifier": "@aimpact/platform@0.1.6/ailearn-prompts-schemas.widget",
        "is": "page",
        "route": "/ailearn/schemas/${schemaId}",
        "layout": "platform-layout"
      }, {
        "name": "platform-prompt-list",
        "vspecifier": "@aimpact/platform@0.1.6/prompts/list.widget",
        "is": "page",
        "route": "/prompts/list/${id}",
        "layout": "platform-layout"
      }, {
        "name": "prompts-view",
        "vspecifier": "@aimpact/platform@0.1.6/prompts-view.widget",
        "is": "page",
        "route": "/projects/${projectId}/prompts/view/${promptId}",
        "layout": "platform-layout"
      }, {
        "name": "home-page",
        "vspecifier": "@aimpact/platform@0.1.6/home",
        "is": "page",
        "route": "/home",
        "layout": "platform-layout"
      }, {
        "name": "ivanti-dashboard-page",
        "vspecifier": "@aimpact/platform@0.1.6/ivanti-dashboard.widget",
        "is": "page",
        "route": "/ivanti-dashboard",
        "layout": "platform-layout"
      }, {
        "name": "wiki-page",
        "vspecifier": "@aimpact/platform@0.1.6/wiki.widget",
        "is": "page",
        "route": "/wiki",
        "layout": "platform-layout"
      }]);
      bundles = [];
      /***********************************************
      MODULE: @aimpact/platform/agents-client/endpoint
      ***********************************************/
      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/agents-client/endpoint"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 602029904,
          creator: function (require, exports) {
            "use strict";

            var _endpoint = require("@aimpact/agents-client/endpoint");
            const environment = 'development';
            const specs = {
              environment
            }; // dev
            // const specs = { port: 5040, environment }; // local
            // console.log('environment', environment);
            (0, _endpoint.overwrite)(specs);
          }
        });
        return {
          dependencies: ['@aimpact/agents-client/endpoint']
        };
      }]);

      /*************************************
      MODULE: @aimpact/platform/core/routing
      *************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/core/routing"
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /**********************************
        INTERNAL MODULE: ./handlers/session
        **********************************/

        ims.set('./handlers/session', {
          hash: 1549369884,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.checkSession = checkSession;
            var _session = require("@aimpact/chat-sdk/session");
            const PUBLIC_ROUTES = ['/auth/login', '/auth/register', '/documents/access', '/auth/recovery'];
            const DEFAULT_ROUTE = '/auth/login';
            async function checkSession(uri, router, next) {
              const {
                pathname
              } = uri;
              await _session.sessionWrapper.isReady;
              if (PUBLIC_ROUTES.includes(pathname) && !_session.sessionWrapper.logged) return true;
              if (PUBLIC_ROUTES.includes(pathname) && _session.sessionWrapper.logged) return {
                pathname: '/'
              };
              if (_session.sessionWrapper.logged) return next();
              return {
                pathname: DEFAULT_ROUTE
              };
            }
          }
        });

        /******************************
        INTERNAL MODULE: ./router/index
        ******************************/

        ims.set('./router/index', {
          hash: 1464925128,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Router = void 0;
            class Router {
              get isDefault() {
                return this.#pathname === '/';
              }
              #pathname;
              get pathname() {
                return this.#pathname;
              }
              #data;
              get data() {
                return this.#data;
              }
              #handlers;
              constructor(handlers) {
                if (!Array.isArray(handlers)) {
                  throw new Error('handlers must be an array');
                }
                handlers.forEach(handler => {
                  if (typeof handler !== 'function') throw new Error('handlers must be an array of functions');
                });
                this.#handlers = handlers;
              }
              async process(index, uri) {
                const next = async newUri => {
                  newUri = newUri || uri;
                  if (index < this.#handlers.length - 1) {
                    return await this.process(index + 1, newUri);
                  }
                  // If there are no more handlers, just return the current URI.
                  return newUri;
                };
                if (!this.#handlers.length) return uri.uri;
                const response = await this.#handlers[index](uri, this, next);
                return response;
              }
              async validate(uri) {
                if (!this.#handlers.length) return uri;
                return this.process(0, uri);
                // return uri.uri;
              }
            }
            exports.Router = Router;
          }
        });

        /*************************
        INTERNAL MODULE: ./routing
        *************************/

        ims.set('./routing', {
          hash: 2268390062,
          creator: function (require, exports) {
            "use strict";

            var _routing = require("@beyond-js/kernel/routing");
            var _session = require("./handlers/session");
            var _router = require("./router");
            const router = new _router.Router([_session.checkSession]);
            _routing.routing.redirect = async function redirect(uri) {
              const response = await router.validate(uri);
              return response.uri ?? response.pathname;
            };
          }
        });
        return {
          dependencies: ['@aimpact/chat-sdk/session', '@beyond-js/kernel/routing']
        };
      }]);

      /***************************************
      MODULE: @aimpact/platform/initialize-app
      ***************************************/

      bundles.push([{
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/initialize-app",
          "multibundle": true
        },
        "type": "start"
      }, function (ims, exports) {
        const bimport = specifier => {
          const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
          return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
        };
        /***********************
        INTERNAL MODULE: ./index
        ***********************/

        ims.set('./index', {
          hash: 3590106671,
          creator: function (require, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
              value: true
            });
            exports.Startup = void 0;
            var _model = require("@beyond-js/reactive/model");
            var _session = require("@aimpact/chat-sdk/session");
            var _models = require("@aimpact/platform/models");
            var _config = require("@aimpact/platform/config");
            var _startup = require("@aimpact/chat-sdk/startup");
            var _wsConfig = require("@aimpact/agents-api/ws-config");
            //@ts-ignore

            const AILEARN = {
              apiKey: 'AIzaSyBYiZcPNBky2QvNdVwgCgU_v2B7feLtbQU',
              authDomain: 'aimpact-partners-dev.firebaseapp.com',
              databaseURL: 'https://aimpact-partners-dev-default-rtdb.firebaseio.com',
              projectId: 'aimpact-partners-dev',
              storageBucket: 'aimpact-partners-dev.appspot.com',
              messagingSenderId: '1081434267674',
              appId: '1:1081434267674:web:9396cc23e55385b5d171a3',
              measurementId: 'G-QLL5WFH89Y'
            };
            const BETTERAGILE = {
              apiKey: 'AIzaSyCID7Abuob1R86qIAMyQ-zY0O0DXUtCRYs',
              authDomain: 'agents-api-dev.firebaseapp.com',
              projectId: 'agents-api-dev',
              storageBucket: 'agents-api-dev.firebasestorage.app',
              messagingSenderId: '883367315651',
              appId: '1:883367315651:web:c683b5effb3c3f96e5fa76',
              measurementId: 'G-8VBFZXEBQZ'
            };
            class Startup extends _model.ReactiveModel {
              constructor() {
                super();
                this.#start();
                // SDKSettings.userModel = User;
              }
              #initSDK = async () => {
                //@ts-ignore
                const {
                  environment
                } = _config.default;
                _session.sessionWrapper.settings({
                  firebase: BETTERAGILE
                });
                (0, _wsConfig.setUrl)(_config.default.params.apis.realtime);
                console.log(_config.default.params.apis['better-mind']);
                await _startup.sdkConfig.initialize({
                  environment,
                  userModel: _models.User,
                  api: _config.default.params.apis['better-mind']
                });
              };
              #start = async () => {
                await this.#initSDK();
                const promises = [_session.sessionWrapper.isReady];
                await Promise.all(promises);
                // registerExtensions();
              };
              static setup() {
                const instance = new Startup();
              }
            }
            exports.Startup = Startup;
            Startup.setup();
          }
        });
        return {
          dependencies: ['@beyond-js/reactive/model', '@beyond-js/widgets/render', '@aimpact/chat-sdk/session', '@aimpact/platform/models', '@aimpact/platform/config', '@aimpact/chat-sdk/startup', '@aimpact/agents-api/ws-config']
        };
      }]);
      __beyond_transversal.initialise(bundles);
    }
  };
});