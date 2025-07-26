System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/stores/base", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.2/alert", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/image", "react@18.3.1", "@aimpact/platform@0.1.6/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "framer-motion@11.18.2", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0,
    Languages: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_4 = _aimpactPlatform016StoresBase;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi102Alert) {
      dependency_7 = _pragmateUi102Alert;
    }, function (_pragmateUi102Components) {
      dependency_8 = _pragmateUi102Components;
    }, function (_pragmateUi102Image) {
      dependency_9 = _pragmateUi102Image;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactPlatform016Config) {
      dependency_11 = _aimpactPlatform016Config;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_12 = _beyondJsReact18Widgets104Hooks;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_beyondJsKernel0112Core) {
      dependency_14 = _beyondJsKernel0112Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/auth-login",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/stores/base', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['react', dependency_10], ['@aimpact/platform/config', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['framer-motion', dependency_13], ['@beyond-js/kernel/core', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "auth-login-page",
        "vspecifier": "@aimpact/platform@0.1.6/auth-login.widget",
        "is": "page",
        "route": "/auth/login",
        "layout": "auth-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/auth-login.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4218677241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _views = require("./views");
          var _store = require("./store");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            createStore(language) {
              return new _store.StoreManager();
            }
            get Widget() {
              return _views.View;
            }
            show() {
              console.log('show login page');
              // console.log('show login page');
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4031849099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            constructor() {
              super(_beyond_context.module.specifier);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/animations
      **********************************/

      ims.set('./views/animations', {
        hash: 265809797,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            default: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fade: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/container
      *********************************/

      ims.set('./views/container', {
        hash: 2253314213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginContainer = LoginContainer;
          var _session = require("@aimpact/chat-sdk/session");
          var _routing = require("@beyond-js/kernel/routing");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          function LoginContainer({
            texts
          }) {
            const [fetching, setFetching] = (0, _react.useState)('');
            const [error, setError] = (0, _react.useState)('');
            const onGoogle = async event => {
              try {
                setFetching('google');
                const response = await _session.sessionWrapper.auth.loginWith('google');
                if (!response) {
                  throw new Error();
                }
                _routing.routing.pushState('/');
              } catch (e) {
                if (e.message === 'POPUP_CLOSED_BY_USER') {
                  return;
                }
                setError(texts.errors.unknown);
                console.error(e.message);
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_image.Image, {
              className: "login-logo",
              src: "/assets/rvd/logo.png"
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: "form__title "
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_alert.Alert, {
              message: error,
              type: "error"
            }), _react.default.createElement("div", {
              className: "buttons__container"
            }, _react.default.createElement(_components.Button, {
              icon: "google",
              variant: "primary",
              onClick: onGoogle,
              loading: fetching == 'google',
              label: texts.googleSignInButton
            })));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2909994756,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _config = require("@aimpact/platform/config");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _framerMotion = require("framer-motion");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _animations = require("./animations");
          var _container = require("./container");
          var _languages = require("./languages");
          /*bundle*/
          function View({
            store
          }) {
            const [updates, setUpdates] = (0, _react.useState)(0);
            (0, _hooks.useBinder)([store], () => {
              setUpdates(performance.now());
            });
            if (!store.ready) return _react.default.createElement(_components.Spinner, {
              active: true,
              type: "primary"
            });
            const texts = store.texts;
            return _react.default.createElement(_framerMotion.motion.div, {
              ..._animations.animations.fade,
              className: "login-page-container"
            }, _react.default.createElement("section", {
              className: "login-card"
            }, _react.default.createElement("div", {
              className: "login-container"
            }, _react.default.createElement("div", {
              className: "login__header"
            }, _react.default.createElement(_languages.Languages, {
              texts: texts
            })), _react.default.createElement("div", {
              className: "login__content"
            }, _react.default.createElement("div", {
              className: "login-form__container"
            }, _react.default.createElement(_container.LoginContainer, {
              texts: texts
            })))), _react.default.createElement("div", {
              className: "app__version"
            }, texts.version, ": ", _config.default.version)));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./views/languages
      *********************************/

      ims.set('./views/languages', {
        hash: 2447902796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Languages = Languages;
          var _core = require("@beyond-js/kernel/core");
          var _image = require("pragmate-ui/image");
          var _react = require("react");
          /*bundle*/ // import { ThemeSwitch } from '@aimpact/ailearn-app/components/ui';

          function Languages({
            texts
          }) {
            const changeLanguage = event => {
              _core.languages.current = event.currentTarget.dataset.language;
            };
            return _react.default.createElement("ul", {
              className: "language-selection"
            }, _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "en",
              src: "/assets/english.png",
              alt: "english language",
              title: "english language"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "es",
              src: "/assets/spanish.png",
              alt: "spanish language",
              title: "ver en Espa\u00F1ol"
            })), _react.default.createElement("li", null, _react.default.createElement(_image.Image, {
              onClick: changeLanguage,
              "data-language": "de",
              src: "/assets/german.png",
              alt: "german language",
              title: "auf Deutsch anzeigen"
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/languages",
        "from": "Languages",
        "name": "Languages"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Languages') && _export("Languages", Languages = require ? require('./views/languages').Languages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhbmltYXRpb25zIiwiZGVmYXVsdCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZmFkZSIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3Nlc3Npb24iLCJfcm91dGluZyIsIl9hbGVydCIsIl9jb21wb25lbnRzIiwiX2ltYWdlIiwiX3JlYWN0IiwiTG9naW5Db250YWluZXIiLCJ0ZXh0cyIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJvbkdvb2dsZSIsImV2ZW50IiwicmVzcG9uc2UiLCJzZXNzaW9uV3JhcHBlciIsImF1dGgiLCJsb2dpbldpdGgiLCJFcnJvciIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlIiwibWVzc2FnZSIsImVycm9ycyIsInVua25vd24iLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJJbWFnZSIsImNsYXNzTmFtZSIsInNyYyIsImxvZ2luVGl0bGUiLCJzdWJ0aXRsZSIsIkFsZXJ0IiwidHlwZSIsIkJ1dHRvbiIsImljb24iLCJ2YXJpYW50Iiwib25DbGljayIsImxvYWRpbmciLCJsYWJlbCIsImdvb2dsZVNpZ25JbkJ1dHRvbiIsIl9jb25maWciLCJfaG9va3MiLCJfZnJhbWVyTW90aW9uIiwiX2FuaW1hdGlvbnMiLCJfY29udGFpbmVyIiwiX2xhbmd1YWdlcyIsInN0b3JlIiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJ1c2VCaW5kZXIiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlYWR5IiwiU3Bpbm5lciIsImFjdGl2ZSIsIm1vdGlvbiIsImRpdiIsIkxhbmd1YWdlcyIsInZlcnNpb24iLCJfY29yZSIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiY3VycmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiYWx0IiwidGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqREMsV0FBV0EsQ0FBQ0MsUUFBaUI7Y0FDNUIsT0FBTyxJQUFJSixNQUFBLENBQUFLLFlBQVksRUFBRTtZQUMxQjtZQUNBLElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO2NBQzlCO1lBQ0Q7O1VBQ0FDLE9BQUEsQ0FBQVYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCRCxJQUFBVyxLQUFBLEdBQUFkLE9BQUE7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