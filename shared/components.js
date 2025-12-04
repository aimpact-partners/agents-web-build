System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@beyond-js/widgets@1.1.4/render", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/spinner", "@radix-ui/react-select@2.2.6", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, AudioPlayer, ThemeSwitch, ConfirmationModal, LabeledIconButton, Input, PreloadScreen, Select, ThemeSwitcher, WelcomeBoard, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    ThemeSwitch: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    PreloadScreen: void 0,
    Select: void 0,
    ThemeSwitcher: void 0,
    WelcomeBoard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_beyondJsWidgets114Render) {
      dependency_3 = _beyondJsWidgets114Render;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_pragmateUi108Spinner) {
      dependency_5 = _pragmateUi108Spinner;
    }, function (_radixUiReactSelect) {
      dependency_6 = _radixUiReactSelect;
    }, function (_radixUiReactIcons) {
      dependency_7 = _radixUiReactIcons;
    }, function (_pragmateUi108Image) {
      dependency_8 = _pragmateUi108Image;
    }, function (_beyondJsKernel0114Styles) {
      dependency_9 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@beyond-js/widgets/render', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@radix-ui/react-select', dependency_6], ['@radix-ui/react-icons', dependency_7], ['pragmate-ui/image', dependency_8], ['@beyond-js/kernel/styles', dependency_9]]);
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

      /************************
      INTERNAL MODULE: ./select
      ************************/

      ims.set('./select', {
        hash: 2720614689,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = void 0;
          var _react = require("react");
          var RadixSelect = require("@radix-ui/react-select");
          var _reactIcons = require("@radix-ui/react-icons");
          /* bundle */
          const Select = exports.Select = _react.default.forwardRef((props, ref) => {
            const {
              value,
              defaultValue,
              onValueChange,
              options,
              placeholder = 'Select an option...',
              disabled = false,
              className = '',
              name,
              label,
              renderItem,
              ...rest
            } = props;
            return _react.default.createElement("div", {
              className: `select-wrapper ${className}`
            }, label && _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(RadixSelect.Root, {
              value: value,
              defaultValue: defaultValue,
              onValueChange: onValueChange,
              disabled: disabled,
              ...rest
            }, _react.default.createElement(RadixSelect.Trigger, {
              ref: ref,
              className: "select-trigger",
              "aria-label": label
            }, _react.default.createElement(RadixSelect.Value, {
              placeholder: placeholder
            }), _react.default.createElement(RadixSelect.Icon, {
              className: "select-icon"
            }, _react.default.createElement(_reactIcons.ChevronDownIcon, null))), _react.default.createElement(RadixSelect.Portal, null, _react.default.createElement(RadixSelect.Content, {
              className: "select-content"
            }, _react.default.createElement(RadixSelect.ScrollUpButton, {
              className: "select-scroll-button"
            }, _react.default.createElement(_reactIcons.ChevronUpIcon, null)), _react.default.createElement(RadixSelect.Viewport, {
              className: "select-viewport"
            }, options.map(option => _react.default.createElement(RadixSelect.Item, {
              key: option.value,
              value: option.value,
              className: "select-item",
              disabled: option.disabled
            }, _react.default.createElement(RadixSelect.ItemText, null, renderItem ? renderItem(option) : option.component || option.label)))), _react.default.createElement(RadixSelect.ScrollDownButton, {
              className: "select-scroll-button"
            }, _react.default.createElement(_reactIcons.ChevronDownIcon, null))))));
          });
          Select.displayName = 'Select';
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
        "im": "./pre-load",
        "from": "PreloadScreen",
        "name": "PreloadScreen"
      }, {
        "im": "./select",
        "from": "Select",
        "name": "Select"
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
        (require || prop === 'PreloadScreen') && _export("PreloadScreen", PreloadScreen = require ? require('./pre-load').PreloadScreen : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select').Select : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwiZmV0Y2hpbmciLCJ0ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmludFRleHQiLCJzZXRQcmludFRleHQiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdUaGVtZSIsIm9uQ2xpY2siLCJJY29uIiwiZGlzYWJsZWQiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJwcm9wcyIsImNvbnRlbnQiLCJjYW5jZWwiLCJzdWJtaXQiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSW5wdXQiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiaHRtbEZvciIsIl9zcGlubmVyIiwiUHJlbG9hZFNjcmVlbiIsIlNwaW5uZXIiLCJhY3RpdmUiLCJSYWRpeFNlbGVjdCIsIl9yZWFjdEljb25zIiwiU2VsZWN0IiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJvblZhbHVlQ2hhbmdlIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwicmVuZGVySXRlbSIsIlJvb3QiLCJUcmlnZ2VyIiwiVmFsdWUiLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJDb250ZW50IiwiU2Nyb2xsVXBCdXR0b24iLCJDaGV2cm9uVXBJY29uIiwiVmlld3BvcnQiLCJtYXAiLCJvcHRpb24iLCJJdGVtIiwia2V5IiwiSXRlbVRleHQiLCJjb21wb25lbnQiLCJTY3JvbGxEb3duQnV0dG9uIiwiZGlzcGxheU5hbWUiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJ0aGVtZVN0b3JhZ2UiLCJkZWZhdWx0VGhlbWUiLCJ1c2VyVGhlbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiX2ltYWdlIiwiV2VsY29tZUJvYXJkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJJbWFnZSJdLCJzb3VyY2VzIjpbIi8vdHMvQXVkaW9QbGF5ZXIudHN4IiwiLy90cy9jaGFuZ2UtdGhlbWUudHN4IiwiLy90cy9jb25maXJtYXRpb24tbW9kYWwudHN4IiwiLy90cy9pY29uLWJ1dHRvbi50c3giLCIvL3RzL2lucHV0LnRzeCIsIi8vdHMvcHJlLWxvYWQudHN4IiwiLy90cy9zZWxlY3QudHN4IiwiLy90cy90aGVtZS1idXR0b24udHN4IiwiLy90cy93ZWxjb21lLWJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFFTyxhQUhQOztVQUdtQixT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