System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/stores/base", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.0-beta.7/alert", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/image", "react@18.3.1", "@aimpact/platform@0.1.6/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "framer-motion@11.18.2", "@beyond-js/kernel@0.1.12/core", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, bimport, __Bundle, __pkg, ims, Controller, View, Languages, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk144Session) {
      dependency_5 = _aimpactChatSdk144Session;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi100Beta7Alert) {
      dependency_7 = _pragmateUi100Beta7Alert;
    }, function (_pragmateUi100Beta7Components) {
      dependency_8 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Image) {
      dependency_9 = _pragmateUi100Beta7Image;
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
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/stores/base', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/alert', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/image', dependency_9], ['react', dependency_10], ['@aimpact/platform/config', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['framer-motion', dependency_13], ['@beyond-js/kernel/core', dependency_14], ['pragmate-ui/form', dependency_15]]);
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
        hash: 1153618183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            get socialMedia() {
              return {
                webinar: 'https://www.youtube.com/@RVDAIRIVADAVIA24',
                tutorials: {
                  teacher: 'https://docs.google.com/presentation/d/e/2PACX-1vTOSXwuswJIIASahbfwxTPkP8XqxwkncfwYGAh0UBwc43olV5x_XIV8itDODn_V4jGZ_A9OLfP8zADF/pub?start=false&loop=false&delayms=3000',
                  student: 'https://docs.google.com/presentation/d/e/2PACX-1vT22YxUehxwR7OiGG-gBBcD1cDb6IxjG9RhveRAXTmQ1D2dH140-WWFRyq9w1P83Du-2jtWi8L-YNJ8/pub?start=false&loop=false&delayms=3000'
                },
                socialMedia: {
                  linkedin: 'https://www.linkedin.com/company/rvd-ai/',
                  tiktok: 'https://www.tiktok.com/@rvd.ai?_t=8fR9cDVO7M5&_r=1',
                  instagram: 'https://www.instagram.com/rvd.ai_ok/',
                  facebook: 'https://www.facebook.com/profile.php?id=61551072234638',
                  youtube: 'https://www.youtube.com/@RVDAIRIVADAVIA24'
                }
              };
            }
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
        hash: 1259096788,
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
                console.log(e);
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
              className: 'login-logo',
              src: '/assets/rvd/logo.png'
            }), _react.default.createElement("header", null, _react.default.createElement("h3", {
              className: 'form__title '
            }, texts.loginTitle), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_alert.Alert, {
              message: error,
              type: 'error'
            }), _react.default.createElement("div", {
              className: 'buttons__container'
            }, _react.default.createElement(_components.Button, {
              icon: 'google',
              variant: 'primary',
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

      /**********************************
      INTERNAL MODULE: ./views/login-form
      **********************************/

      ims.set('./views/login-form', {
        hash: 1749363032,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LoginForm = LoginForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _routing = require("@beyond-js/kernel/routing");
          var _session = require("@aimpact/chat-sdk/session");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          function LoginForm({
            texts,
            error,
            setError
          }) {
            const [values, setValues] = (0, _react.useState)({
              email: '',
              password: ''
            });
            const [fetching, setFetching] = (0, _react.useState)('');
            const formDisabled = {};
            const {
              email,
              password
            } = values;
            if (!email || !password) formDisabled.disabled = true;
            const handleChange = ({
              currentTarget: target
            }) => {
              const currentValue = {
                ...values
              };
              currentValue[target.name] = target.value;
              setValues(currentValue);
              setError('');
            };
            const onSubmit = async event => {
              setFetching('default');
              const {
                email,
                password
              } = values;
              try {
                event.preventDefault();
                const response = await _session.sessionWrapper.auth.login(email, password);
                if (!response.status) {
                  return setError(response.error);
                }
                setValues({
                  email: '',
                  password: ''
                });
                _routing.routing.pushState('/');
                return;
              } catch (e) {
                setError(texts.errorLogin);
              } finally {
                setFetching('');
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit,
              className: 'login-form-general__container'
            }, _react.default.createElement(_alert.Alert, {
              message: error,
              type: 'error'
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.emailLabel,
              type: 'text',
              name: 'email',
              value: email,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_form.Input, {
              placeholder: texts.passwordLabel,
              type: 'password',
              name: 'password',
              value: password,
              onChange: handleChange,
              required: true
            }), _react.default.createElement(_components.Button, {
              type: 'submit',
              variant: 'primary',
              ...formDisabled,
              onClick: onSubmit,
              loading: fetching == 'default',
              label: texts.signInButton
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJfc3RvcmUiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwibGFuZ3VhZ2UiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwic29jaWFsTWVkaWEiLCJ3ZWJpbmFyIiwidHV0b3JpYWxzIiwidGVhY2hlciIsInN0dWRlbnQiLCJsaW5rZWRpbiIsInRpa3RvayIsImluc3RhZ3JhbSIsImZhY2Vib29rIiwieW91dHViZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiYW5pbWF0aW9ucyIsImRlZmF1bHQiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsImZhZGUiLCJmYWRlSW5VcGZhZGVPdXRMZWZ0IiwieCIsIl9zZXNzaW9uIiwiX3JvdXRpbmciLCJfYWxlcnQiLCJfY29tcG9uZW50cyIsIl9pbWFnZSIsIl9yZWFjdCIsIkxvZ2luQ29udGFpbmVyIiwidGV4dHMiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25Hb29nbGUiLCJldmVudCIsInJlc3BvbnNlIiwic2Vzc2lvbldyYXBwZXIiLCJhdXRoIiwibG9naW5XaXRoIiwiRXJyb3IiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZSIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ1bmtub3duIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiSW1hZ2UiLCJjbGFzc05hbWUiLCJzcmMiLCJsb2dpblRpdGxlIiwic3VidGl0bGUiLCJBbGVydCIsInR5cGUiLCJCdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJsb2FkaW5nIiwibGFiZWwiLCJnb29nbGVTaWduSW5CdXR0b24iLCJfY29uZmlnIiwiX2hvb2tzIiwiX2ZyYW1lck1vdGlvbiIsIl9hbmltYXRpb25zIiwiX2NvbnRhaW5lciIsIl9sYW5ndWFnZXMiLCJzdG9yZSIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwidXNlQmluZGVyIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZWFkeSIsIlNwaW5uZXIiLCJhY3RpdmUiLCJtb3Rpb24iLCJkaXYiLCJMYW5ndWFnZXMiLCJ2ZXJzaW9uIiwiX2NvcmUiLCJjaGFuZ2VMYW5ndWFnZSIsImxhbmd1YWdlcyIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFsdCIsInRpdGxlIiwiX2Zvcm0iLCJMb2dpbkZvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURpc2FibGVkIiwiZGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJjdXJyZW50VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJzdGF0dXMiLCJlcnJvckxvZ2luIiwiRm9ybSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJlbWFpbExhYmVsIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInBhc3N3b3JkTGFiZWwiLCJzaWduSW5CdXR0b24iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hbmltYXRpb25zLnRzeCIsIi90cy92aWV3cy9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9sYW5ndWFnZXMudHN4IiwiL3RzL3ZpZXdzL2xvZ2luLWZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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