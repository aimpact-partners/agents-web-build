System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@beyond-js/widgets@0.1.6/render", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/spinner", "@radix-ui/react-select@2.2.4", "@radix-ui/react-icons@1.3.2", "pragmate-ui@1.0.8/image", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, AudioPlayer, ThemeSwitch, ConfirmationModal, LabeledIconButton, Input, Loading, PreloadScreen, Select, ThemeSwitcher, WelcomeBoard, __beyond_pkg, hmr;
  _export({
    AudioPlayer: void 0,
    ThemeSwitch: void 0,
    ConfirmationModal: void 0,
    LabeledIconButton: void 0,
    Input: void 0,
    Loading: void 0,
    PreloadScreen: void 0,
    Select: void 0,
    ThemeSwitcher: void 0,
    WelcomeBoard: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_beyondJsWidgets016Render) {
      dependency_3 = _beyondJsWidgets016Render;
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
    }, function (_beyondJsKernel0112Styles) {
      dependency_9 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
        "im": "./loading",
        "from": "Loading",
        "name": "Loading"
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
        (require || prop === 'Loading') && _export("Loading", Loading = require ? require('./loading').Loading : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQXVkaW9QbGF5ZXIiLCJzcmMiLCJjcmVhdGUiLCJjb25zb2xlIiwid2FybiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlZiIsImRlZmF1bHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ0YXJnZXQiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb250cm9scyIsInByZWxvYWQiLCJ0eXBlIiwiX2ljb25zIiwiX3JlbmRlciIsIlRoZW1lU3dpdGNoIiwiZmV0Y2hpbmciLCJ0ZXh0IiwicHJlZmVyc0RhcmtNb2RlIiwiZ2xvYmFsVGhpcyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiaWNvbiIsInNldEljb24iLCJ1c2VTdGF0ZSIsImN1cnJlbnRUaGVtZSIsInNldEN1cnJlbnRUaGVtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwcmludFRleHQiLCJzZXRQcmludFRleHQiLCJyZXBsYWNlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwid2lkZ2V0cyIsImF0dHJpYnV0ZXMiLCJhZGQiLCJoYW5kbGVDaGFuZ2UiLCJuZXdUaGVtZSIsIm9uQ2xpY2siLCJJY29uIiwiZGlzYWJsZWQiLCJfY29tcG9uZW50cyIsIkNvbmZpcm1hdGlvbk1vZGFsIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJwcm9wcyIsImNvbnRlbnQiLCJjYW5jZWwiLCJzdWJtaXQiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwidmFyaWFudCIsIkxhYmVsZWRJY29uQnV0dG9uIiwibGFiZWwiLCJyZXN0IiwiSW5wdXQiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiaHRtbEZvciIsIl9zcGlubmVyIiwiTG9hZGluZyIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcmVsb2FkU2NyZWVuIiwiUmFkaXhTZWxlY3QiLCJfcmVhY3RJY29ucyIsIlNlbGVjdCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwib25WYWx1ZUNoYW5nZSIsIm9wdGlvbnMiLCJwbGFjZWhvbGRlciIsInJlbmRlckl0ZW0iLCJSb290IiwiVHJpZ2dlciIsIlZhbHVlIiwiQ2hldnJvbkRvd25JY29uIiwiUG9ydGFsIiwiQ29udGVudCIsIlNjcm9sbFVwQnV0dG9uIiwiQ2hldnJvblVwSWNvbiIsIlZpZXdwb3J0IiwibWFwIiwib3B0aW9uIiwiSXRlbSIsImtleSIsIkl0ZW1UZXh0IiwiY29tcG9uZW50IiwiU2Nyb2xsRG93bkJ1dHRvbiIsImRpc3BsYXlOYW1lIiwiVGhlbWVTd2l0Y2hlciIsInRoZW1lIiwidGhlbWVTdG9yYWdlIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIl9pbWFnZSIsIldlbGNvbWVCb2FyZCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNoaWxkcmVuIiwiSW1hZ2UiXSwic291cmNlcyI6WyIvL3RzL0F1ZGlvUGxheWVyLnRzeCIsIi8vdHMvY2hhbmdlLXRoZW1lLnRzeCIsIi8vdHMvY29uZmlybWF0aW9uLW1vZGFsLnRzeCIsIi8vdHMvaWNvbi1idXR0b24udHN4IiwiLy90cy9pbnB1dC50c3giLCIvL3RzL2xvYWRpbmcudHN4IiwiLy90cy9wcmUtbG9hZC50c3giLCIvL3RzL3NlbGVjdC50c3giLCIvL3RzL3RoZW1lLWJ1dHRvbi50c3giLCIvL3RzL3dlbGNvbWUtYm9hcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFB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