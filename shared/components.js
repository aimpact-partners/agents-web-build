System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.2/icons", "@beyond-js/widgets@0.1.6/render", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/spinner", "pragmate-ui@1.0.2/image", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, bimport, __Bundle, __pkg, ims, AudioPlayer, ThemeSwitch, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, ThemeSwitcher, WelcomeBoard, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    ThemeSwitch: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    ThemeSwitcher: void 0,
    WelcomeBoard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi102Icons) {
      dependency_2 = _pragmateUi102Icons;
    }, function (_beyondJsWidgets016Render) {
      dependency_3 = _beyondJsWidgets016Render;
    }, function (_pragmateUi102Components) {
      dependency_4 = _pragmateUi102Components;
    }, function (_pragmateUi102Spinner) {
      dependency_5 = _pragmateUi102Spinner;
    }, function (_pragmateUi102Image) {
      dependency_6 = _pragmateUi102Image;
    }, function (_beyondJsKernel0112Styles) {
      dependency_7 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/shared/components"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/widgets/render', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/spinner', dependency_5], ['pragmate-ui/image', dependency_6], ['@beyond-js/kernel/styles', dependency_7]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/shared/components');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./AudioPlayer
      *****************************/
      ims.set('./AudioPlayer', {
        hash: 2007910221,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          /* bundle */ // audio_player.tsx

          function AudioPlayer({
            src,
            create = true
          }) {
            if (!src) {
              console.warn('not audio to process');
              return null;
            }
            src = create ? src : URL.createObjectURL(src);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: 'audio-player'
            }, _react.default.createElement("audio", {
              controls: true,
              preload: 'metadata'
            }, _react.default.createElement("source", {
              src: src,
              type: 'audio/mp3',
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./change-theme
      ******************************/

      ims.set('./change-theme', {
        hash: 1133681995,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitch = ThemeSwitch;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitch({
            fetching,
            text
          }) {
            const prefersDarkMode = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const [icon, setIcon] = (0, _react.useState)(prefersDarkMode ? 'sun' : 'moon');
            const [currentTheme, setCurrentTheme] = (0, _react.useState)(localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light'));
            const [printText, setPrintText] = (0, _react.useState)(text?.replace('%them', currentTheme));
            (0, _react.useEffect)(() => {
              document.documentElement.setAttribute('data-beyond-mode', currentTheme);
              localStorage.setItem('theme', currentTheme);
              _render.widgets.attributes.add('data-beyond-mode', currentTheme);
              setPrintText(text?.replace('%them', currentTheme));
            }, [currentTheme, text]);
            const handleChange = () => {
              const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
              setCurrentTheme(newTheme);
              setIcon(newTheme === 'dark' ? 'sun' : 'moon');
            };
            return _react.default.createElement("div", {
              className: "theme-switch__container",
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }), text && printText);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./confirmation-modal
      ************************************/

      ims.set('./confirmation-modal', {
        hash: 4087826673,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          const ConfirmationModal = exports.ConfirmationModal = _react.default.forwardRef((props, ref) => {
            const {
              content,
              cancel,
              submit
            } = props;
            return _react.default.createElement("dialog", {
              ref: ref,
              className: 'confirmation-modal'
            }, _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: cancel
            }), _react.default.createElement("header", null, _react.default.createElement("h1", null, "Atention!")), _react.default.createElement("p", null, content), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              icon: 'close-circle',
              variant: 'link outline',
              onClick: cancel
            }, "Cancel"), _react.default.createElement(_components.Button, {
              icon: 'save',
              variant: 'primary',
              onClick: submit
            }, "Submit")));
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./icon-button
      *****************************/

      ims.set('./icon-button', {
        hash: 1737455888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LabeledIconButton = void 0;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          const LabeledIconButton = exports.LabeledIconButton = _react.default.forwardRef((props, ref) => {
            const {
              icon,
              label,
              ...rest
            } = props;
            return _react.default.createElement(_components.Button, {
              ref: ref,
              label: _react.default.createElement("div", {
                className: 'icon-button'
              }, _react.default.createElement(_icons.Icon, {
                icon: icon
              }), label),
              ...rest
            });
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2171317613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = void 0;
          var _react = require("react");
          /* bundle */
          const Input = ({
            name,
            label,
            disabled,
            className,
            ...rest
          }) => {
            return _react.default.createElement("div", {
              className: `input-wrapper ${className} `
            }, _react.default.createElement("input", {
              name: name,
              disabled: disabled,
              ...rest,
              autoComplete: 'off'
            }), !disabled && _react.default.createElement("label", {
              htmlFor: name
            }, label));
          };
          exports.Input = Input;
        }
      });

      /*************************
      INTERNAL MODULE: ./loading
      *************************/

      ims.set('./loading', {
        hash: 477427642,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Loading = void 0;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          const Loading = () => {
            return _react.default.createElement("div", {
              className: "spinner-container"
            }, _react.default.createElement(_spinner.Spinner, {
              className: "spinner",
              type: "primary",
              active: true
            }));
          };
          exports.Loading = Loading;
        }
      });

      /**************************
      INTERNAL MODULE: ./pre-load
      **************************/

      ims.set('./pre-load', {
        hash: 3189844793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PreloadScreen = PreloadScreen;
          var _react = require("react");
          var _spinner = require("pragmate-ui/spinner");
          /* bundle */
          function PreloadScreen() {
            return _react.default.createElement("div", {
              className: 'preload-screen active'
            }, _react.default.createElement(_spinner.Spinner, {
              active: true
            }));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./theme-button
      ******************************/

      ims.set('./theme-button', {
        hash: 3254668438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          function ThemeSwitcher({
            fetching
          }) {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ?? defaultTheme;
            const [icon, setIcon] = _react.default.useState(userTheme === 'dark' ? 'sun' : 'moon');
            function handleChange(e) {
              e.preventDefault();
              const container = document.querySelector('html');
              const theme = icon === 'sun' ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              _render.widgets.attributes.add('data-beyond-mode', theme);
              setIcon(theme === 'dark' ? 'sun' : 'moon');
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            return _react.default.createElement("div", {
              className: 'sidebar-item theme-switcher',
              onClick: handleChange
            }, _react.default.createElement(_icons.Icon, {
              icon: icon,
              disabled: fetching,
              onClick: handleChange
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./welcome-board
      *******************************/

      ims.set('./welcome-board', {
        hash: 3618433111,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WelcomeBoard = WelcomeBoard;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          /*bundle*/
          function WelcomeBoard({
            image = 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/white-logo',
            title,
            description,
            children
          }) {
            return _react.default.createElement("div", {
              className: "board-container"
            }, _react.default.createElement("div", {
              className: "board-header__container"
            }, _react.default.createElement("div", {
              className: "logo__container"
            }, _react.default.createElement(_image.Image, {
              src: image
            }))), !!children && children, title | description && _react.default.createElement("div", {
              className: "board-content__container"
            }, !!title && _react.default.createElement("p", {
              className: "board-content__title h1"
            }, title), !!description && _react.default.createElement("p", {
              className: "board-content__description h4"
            }, description)));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./AudioPlayer",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }, {
        "im": "./change-theme",
        "from": "ThemeSwitch",
        "name": "ThemeSwitch"
      }, {
        "im": "./confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./icon-button",
        "from": "LabeledIconButton",
        "name": "LabeledIconButton"
      }, {
        "im": "./input",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./loading",
        "from": "Loading",
        "name": "Loading"
      }, {
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./theme-button",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }, {
        "im": "./welcome-board",
        "from": "WelcomeBoard",
        "name": "WelcomeBoard"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./AudioPlayer').AudioPlayer : value);
        (require || prop === 'ThemeSwitch') && _export("ThemeSwitch", ThemeSwitch = require ? require('./change-theme').ThemeSwitch : value);
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./confirmation-modal').ConfirmationModal : value);
        (require || prop === 'LabeledIconButton') && _export("LabeledIconButton", LabeledIconButton = require ? require('./icon-button').LabeledIconButton : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input').Input : value);
        (require || prop === 'Loading') && _export("Loading", Loading = require ? require('./loading').Loading : value);
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./theme-button').ThemeSwitcher : value);
        (require || prop === 'WelcomeBoard') && _export("WelcomeBoard", WelcomeBoard = require ? require('./welcome-board').WelcomeBoard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwiZmV0Y2hpbmciLCJ0ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmludFRleHQiLCJzZXRQcmludFRleHQiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdUaGVtZSIsIm9uQ2xpY2siLCJJY29uIiwiZGlzYWJsZWQiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJwcm9wcyIsImNvbnRlbnQiLCJjYW5jZWwiLCJzdWJtaXQiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSW5wdXQiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiaHRtbEZvciIsIl9zcGlubmVyIiwiTG9hZGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIl9pbWFnZSIsIldlbGNvbWVCb2FyZCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiSW1hZ2UiXSwic291cmNlcyI6WyIvL3RzL0F1ZGlvUGxheWVyLnRzeCIsIi8vdHMvY2hhbmdlLXRoZW1lLnRzeCIsIi8vdHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi8vdHMvaWNvbi1idXR0b24udHN4IiwiLy90cy9pbnB1dC50c3giLCIvL3RzL2xvYWRpbmcudHN4IiwiLy90cy9wcmUtbG9hZC50c3giLCIvL3RzL3RoZW1lLWJ1dHRvbi50c3giLCIvL3RzL3dlbGNvbWUtYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRU8sYUFIUDs7VUFHbUIsU0FBVUMsV0FBV0EsQ0FBQztZQUFFQyxHQUFHO1lBQUVDLE1BQU0sR0FBRztVQUFJLENBQUU7WUFDOUQsSUFBSSxDQUFDRCxHQUFHLEVBQUU7Y0FDVEUsT0FBTyxDQUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUM7Y0FDcEMsT0FBTyxJQUFJOztZQUdaSCxHQUFHLEdBQUdDLE1BQU0sR0FBR0QsR0FBRyxHQUFHSSxHQUFHLENBQUNDLGVBQWUsQ0FBQ0wsR0FBRyxDQUFDO1lBQzdDLE1BQU1NLEdBQUcsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFOUJYLE1BQUEsQ0FBQVUsT0FBSyxD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