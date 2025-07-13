System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/base", "pragmate-ui@1.0.2/template/manager", "react@18.3.1", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/theme-switcher", "pragmate-ui@1.0.2/tooltip", "@beyond-js/react-18-widgets@1.0.4/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_pragmateUi102TemplateManager) {
      dependency_4 = _pragmateUi102TemplateManager;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_pragmateUi102Components) {
      dependency_6 = _pragmateUi102Components;
    }, function (_pragmateUi102ThemeSwitcher) {
      dependency_7 = _pragmateUi102ThemeSwitcher;
    }, function (_pragmateUi102Tooltip) {
      dependency_8 = _pragmateUi102Tooltip;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/pui/template/palette"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['pragmate-ui/template/manager', dependency_4], ['react', dependency_5], ['pragmate-ui/components', dependency_6], ['pragmate-ui/theme-switcher', dependency_7], ['pragmate-ui/tooltip', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "pui-template-view-widget",
        "vspecifier": "pragmate-ui@1.0.2/pui/template/palette"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/pui/template/palette');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2377775720,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            //@ts-ignore
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            load() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /**********************************
      INTERNAL MODULE: ./store/calculator
      **********************************/

      ims.set('./store/calculator', {
        hash: 1781491306,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.generatePalette = void 0;
          const hexToRgb = hex => {
            const bigint = parseInt(hex.replace('#', ''), 16);
            const r = bigint >> 16 & 255;
            const g = bigint >> 8 & 255;
            const b = bigint & 255;
            return [r, g, b];
          };
          const calcPercentageToBlack = rgb => {
            return Math.round(Math.min(...rgb) / 255 * 100);
          };
          const getPalettePosition = percentageToBlack => {
            const step = Math.ceil(100 / 14);
            return Math.ceil((100 - percentageToBlack) / step);
          };
          const rgbToHex = rgb => {
            const [r, g, b] = rgb;
            return '#' + [r, g, b].map(x => {
              const hex = x.toString(16);
              return hex.length === 1 ? '0' + hex : hex;
            }).join('');
          };
          const generatePalette = color => {
            let rgb = typeof color === 'string' ? hexToRgb(color) : color;
            const percentageToBlack = calcPercentageToBlack(rgb);
            const position = getPalettePosition(percentageToBlack);
            const palette = Array.from({
              length: 13
            }, (_, i) => {
              if (i === 0) return rgbToHex([0, 0, 0]);
              if (i === 12) return rgbToHex([255, 255, 255]);
              const factor = i / 12;
              const calc = (x, pos) => {
                let rounded = Math.round(x * factor);
                return rounded > 255 ? 255 : rounded;
              };
              const r = calc(rgb[0], 0);
              const g = calc(rgb[1], 1);
              const b = calc(rgb[2], 2);
              const newTone = [r, g, b];
              const MaxTone = Math.max(...newTone);
              if (i > 3) {
                const multiplier = i < 7 ? i < 5 ? 1.5 : 2 : 2.4;
                newTone[0] = Math.round(newTone[0] * multiplier) > 255 ? 255 : Math.round(newTone[0] * multiplier);
                newTone[1] = Math.round(newTone[1] * multiplier) > 255 ? 255 : Math.round(newTone[1] * multiplier);
                newTone[2] = Math.round(newTone[2] * multiplier) > 255 ? 255 : Math.round(newTone[2] * multiplier);
              }
              return rgbToHex(newTone);
            });
            if (position < 12) {
              //palette[position] = rgbToHex(rgb);
            }
            return palette;
          };
          exports.generatePalette = generatePalette;
          const rgbToHsl = ([r, g, b]) => {
            r /= 255;
            g /= 255;
            b /= 255;
            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h,
              s,
              l = (max + min) / 2;
            if (max === min) {
              h = s = 0;
            } else {
              const d = max - min;
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
                case g:
                  h = (b - r) / d + 2;
                  break;
                case b:
                  h = (r - g) / d + 4;
                  break;
              }
              h /= 6;
            }
            return [h * 360, s * 100, l * 100];
          };
          const hslToHex = (h, s, l) => {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0');
            };
            return `#${f(0)}${f(8)}${f(4)}`;
          };
          const generateHSLPalette = hsl => {
            const [h, s, l] = hsl;
            const step = 100 / 12;
            const palette = [];
            for (let i = 0; i <= 12; i++) {
              let newL = l + (step * i - l);
              newL = Math.min(100, Math.max(0, newL));
              palette.push(hslToHex(h, s, newL));
            }
            return palette;
          };
          const initialColor = [255, 165, 0];
          const initialHSL = rgbToHsl(initialColor);
          const palette = generateHSLPalette(initialHSL);
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2196189842,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _manager = require("pragmate-ui/template/manager");
          var _calculator = require("./calculator");
          globalThis.TplManager = _manager.TplManager;
          class StoreManager {
            #values;
            get values() {
              return this.#values;
            }
            #properties = ['primary', 'secondary', 'tertiary', 'error', 'success', 'warning', 'error'];
            get properties() {
              return this.#properties;
            }
            #tones = ['neutral'];
            get tones() {
              return this.#tones;
            }
            #colors = new Map();
            get colors() {
              return this.#colors;
            }
            get items() {
              return [...this.colors.entries()];
            }
            constructor() {
              this.properties.forEach((property, index) => {
                this.#colors.set(property, (0, _calculator.generatePalette)(_manager.TplManager.root[property]));
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/SurfacesPanel
      *************************************/

      ims.set('./views/SurfacesPanel', {
        hash: 2498928548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SurfacesPanel = SurfacesPanel;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          function SurfacesPanel() {
            // const surfaces = Object.keys(TplManager.root).filter(name => name.includes('surface'));
            const lightSurfaces = Array.from(_manager.TplManager.light.style).filter(ele => ele.startsWith('--surface'));
            const darkSurfaces = Array.from(_manager.TplManager.dark.style).filter(ele => ele.startsWith('--surface'));
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, "Light Surfaces"), _react.default.createElement("section", {
              className: 'surface__container surface__container--light'
            }, lightSurfaces.map((surface, i) => {
              return _react.default.createElement("div", {
                key: `surface.${surface}.${i}`,
                className: 'surface__item',
                style: {
                  backgroundColor: _manager.TplManager.light.style.getPropertyValue(surface)
                }
              }, surface);
            })), _react.default.createElement("h3", null, "Dark Surfaces"), _react.default.createElement("section", {
              className: 'surface__container surface__container--dark'
            }, darkSurfaces.map((surface, i) => {
              return _react.default.createElement("div", {
                key: `surface.${surface}.${i}`,
                className: 'surface__item',
                style: {
                  backgroundColor: _manager.TplManager.dark.style.getPropertyValue(surface)
                }
              }, surface);
            })), _react.default.createElement("hr", null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1147283378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _palettes = require("./palettes");
          var _SurfacesPanel = require("./SurfacesPanel");
          var _components = require("pragmate-ui/components");
          var _themeSwitcher = require("pragmate-ui/theme-switcher");
          /*bundle*/
          function View({
            store
          }) {
            const [view, setView] = _react.default.useState('palettes');
            const Views = {
              palettes: _palettes.Palettes,
              surfaces: _SurfacesPanel.SurfacesPanel
            };
            const onClick = event => {
              event.preventDefault();
              setView(event.currentTarget.dataset.view);
            };
            const Control = Views[view];
            return _react.default.createElement("main", {
              className: 'component__container'
            }, _react.default.createElement("h2", null, "Template tones"), _react.default.createElement("div", {
              className: 'contents'
            }, _react.default.createElement(_components.ButtonGroup, {
              selected: 0
            }, _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: 'primary',
              "data-view": 'palettes'
            }, "Palettes"), _react.default.createElement(_components.Button, {
              onClick: onClick,
              variant: 'primary',
              "data-view": 'surfaces'
            }, "Surfaces")), _react.default.createElement(_themeSwitcher.ThemeSwitcher, null)), _react.default.createElement(Control, {
              store: store
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/neutral-pallete
      ***************************************/

      ims.set('./views/neutral-pallete', {
        hash: 3951672452,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NeutralPalette = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _tooltip = require("pragmate-ui/tooltip");
          globalThis.tplManager = _manager.TplManager;
          const NeutralPalette = ({
            property,
            store
          }) => {
            const elements = Object.keys(_manager.TplManager.root).filter(i => i.startsWith(property));
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, property), _react.default.createElement("div", {
              className: `palette-container--neutral palette-${property}`
            }, elements.map((value, index) => {
              const color = _manager.TplManager.root[value];
              if (value === '') return null;
              return _react.default.createElement("div", {
                key: `${property}.${value}.${index}`
              }, _react.default.createElement("h5", null, value), _react.default.createElement(_tooltip.Tooltip, {
                key: `${property}.${value}.${index}`,
                content: color
              }, _react.default.createElement("div", {
                className: `palette__color-container color-${value}`,
                "data-color": color,
                "data-name": value,
                style: {
                  backgroundColor: color
                }
              })));
            })));
          };
          exports.NeutralPalette = NeutralPalette;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/palette
      *******************************/

      ims.set('./views/palette', {
        hash: 1269297561,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palette = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _tooltip = require("pragmate-ui/tooltip");
          globalThis.tplManager = _manager.TplManager;
          const Palette = ({
            property,
            store
          }) => {
            const values = ['', '0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '98', '100'];
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h4", null, property), _react.default.createElement("div", {
              className: `palette-container palette-${property}`
            }, values.map((value, index) => {
              const color = _manager.TplManager.root[`${property}${value}`];
              if (value === '') return null;
              return _react.default.createElement(_tooltip.Tooltip, {
                key: `${property}.${value}.${index}`,
                content: color
              }, _react.default.createElement("div", {
                className: `palette__color-container color-${value}`,
                "data-color": color,
                "data-name": `${property}${value}`,
                style: {
                  backgroundColor: color
                }
              }, value));
            })));
          };
          exports.Palette = Palette;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/palettes
      ********************************/

      ims.set('./views/palettes', {
        hash: 401120785,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Palettes = void 0;
          var _react = require("react");
          var _manager = require("pragmate-ui/template/manager");
          var _palette = require("./palette");
          var _neutralPallete = require("./neutral-pallete");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          globalThis.tplManager = _manager.TplManager;
          const Palettes = ({
            store
          }) => {
            (0, _hooks.useBinder)([_manager.TplManager], () => {
              const surfaces = Object.keys(_manager.TplManager.root).filter(name => name.includes('surface'));
              console.log('TplManager updated', _manager.TplManager.root.surface);
            });
            const output = store.properties.map((tone, i) => {
              return _react.default.createElement(_palette.Palette, {
                key: `${tone}.${i}`,
                property: tone,
                store: store
              });
            });
            const output2 = store.tones.map((tone, i) => {
              return _react.default.createElement(_neutralPallete.NeutralPalette, {
                key: `${tone}.${i}`,
                property: tone,
                store: store
              });
            });
            return _react.default.createElement(_react.default.Fragment, null, output, " ", output2);
          };
          exports.Palettes = Palettes;
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
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJoZXhUb1JnYiIsImhleCIsImJpZ2ludCIsInBhcnNlSW50IiwicmVwbGFjZSIsInIiLCJnIiwiYiIsImNhbGNQZXJjZW50YWdlVG9CbGFjayIsInJnYiIsIk1hdGgiLCJyb3VuZCIsIm1pbiIsImdldFBhbGV0dGVQb3NpdGlvbiIsInBlcmNlbnRhZ2VUb0JsYWNrIiwic3RlcCIsImNlaWwiLCJyZ2JUb0hleCIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImxlbmd0aCIsImpvaW4iLCJnZW5lcmF0ZVBhbGV0dGUiLCJjb2xvciIsInBvc2l0aW9uIiwicGFsZXR0ZSIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwiZmFjdG9yIiwiY2FsYyIsInBvcyIsInJvdW5kZWQiLCJuZXdUb25lIiwiTWF4VG9uZSIsIm1heCIsIm11bHRpcGxpZXIiLCJyZ2JUb0hzbCIsImgiLCJzIiwibCIsImQiLCJoc2xUb0hleCIsImEiLCJmIiwibiIsImsiLCJwYWRTdGFydCIsImdlbmVyYXRlSFNMUGFsZXR0ZSIsImhzbCIsIm5ld0wiLCJwdXNoIiwiaW5pdGlhbENvbG9yIiwiaW5pdGlhbEhTTCIsIl9tYW5hZ2VyIiwiX2NhbGN1bGF0b3IiLCJnbG9iYWxUaGlzIiwiVHBsTWFuYWdlciIsInZhbHVlcyIsInByb3BlcnRpZXMiLCJ0b25lcyIsImNvbG9ycyIsIk1hcCIsIml0ZW1zIiwiZW50cmllcyIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiaW5kZXgiLCJzZXQiLCJyb290IiwiX3JlYWN0IiwiU3VyZmFjZXNQYW5lbCIsImxpZ2h0U3VyZmFjZXMiLCJsaWdodCIsInN0eWxlIiwiZmlsdGVyIiwiZWxlIiwic3RhcnRzV2l0aCIsImRhcmtTdXJmYWNlcyIsImRhcmsiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN1cmZhY2UiLCJrZXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiX3BhbGV0dGVzIiwiX1N1cmZhY2VzUGFuZWwiLCJfY29tcG9uZW50cyIsIl90aGVtZVN3aXRjaGVyIiwidmlldyIsInNldFZpZXciLCJ1c2VTdGF0ZSIsIlZpZXdzIiwicGFsZXR0ZXMiLCJQYWxldHRlcyIsInN1cmZhY2VzIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIkNvbnRyb2wiLCJCdXR0b25Hcm91cCIsInNlbGVjdGVkIiwiQnV0dG9uIiwidmFyaWFudCIsIlRoZW1lU3dpdGNoZXIiLCJfdG9vbHRpcCIsInRwbE1hbmFnZXIiLCJOZXV0cmFsUGFsZXR0ZSIsImVsZW1lbnRzIiwiT2JqZWN0Iiwia2V5cyIsIkZyYWdtZW50IiwidmFsdWUiLCJUb29sdGlwIiwiY29udGVudCIsIlBhbGV0dGUiLCJfcGFsZXR0ZSIsIl9uZXV0cmFsUGFsbGV0ZSIsIl9ob29rcyIsInVzZUJpbmRlciIsIm5hbWUiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiLCJ0b25lIiwib3V0cHV0MiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2NhbGN1bGF0b3IudHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvdmlld3MvU3VyZmFjZXNQYW5lbC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL25ldXRyYWwtcGFsbGV0ZS50c3giLCIvdHMvdmlld3MvcGFsZXR0ZS50c3giLCIvdHMvdmlld3MvcGFsZXR0ZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7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QUFBeUksZUFBQSxHQUFBekksT0FBQTtVQUNBLElBQUEwSSxNQUFBLEdBQUExSSxPQUFBO1VBTUF1RSxVQUFVLENBQUN1RCxVQUFVLEdBQUd6RCxRQUFBLENBQUFHLFVBQVU7VUFFM0IsTUFBTXdDLFFBQVEsR0FBb0NBLENBQUM7WUFBRTNHO1VBQUssQ0FBRSxLQUFJO1lBQ3RFLElBQUFxSSxNQUFBLENBQUFDLFNBQVMsRUFBQyxDQUFDdEUsUUFBQSxDQUFBRyxVQUFVLENBQUMsRUFBRSxNQUFLO2NBQzVCLE1BQU15QyxRQUFRLEdBQUdnQixNQUFNLENBQUNDLElBQUksQ0FBQzdELFFBQUEsQ0FBQUcsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQ00sTUFBTSxDQUFDaUQsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztjQUN0RkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUxRSxRQUFBLENBQUFHLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDYyxPQUFPLENBQUM7WUFDM0QsQ0FBQyxDQUFDO1lBQ0YsTUFBTTZDLE1BQU0sR0FBRzNJLEtBQUssQ0FBQ3FFLFVBQVUsQ0FBQzNDLEdBQUcsQ0FBQyxDQUFDa0gsSUFBSSxFQUFFdEcsQ0FBQyxLQUFJO2NBQy9DLE9BQU8yQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUMsUUFBQSxDQUFBRCxPQUFPO2dCQUFDbkMsR0FBRyxFQUFFLEdBQUc2QyxJQUFJLElBQUl0RyxDQUFDLEVBQUU7Z0JBQUV1QyxRQUFRLEVBQUUrRCxJQUFJO2dCQUFFNUksS0FBSyxFQUFFQTtjQUFLLEVBQUk7WUFDdEUsQ0FBQyxDQUFDO1lBQ0YsTUFBTTZJLE9BQU8sR0FBRzdJLEtBQUssQ0FBQ3NFLEtBQUssQ0FBQzVDLEdBQUcsQ0FBQyxDQUFDa0gsSUFBSSxFQUFFdEcsQ0FBQyxLQUFJO2NBQzNDLE9BQU8yQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd0MsZUFBQSxDQUFBVixjQUFjO2dCQUFDM0IsR0FBRyxFQUFFLEdBQUc2QyxJQUFJLElBQUl0RyxDQUFDLEVBQUU7Z0JBQUV1QyxRQUFRLEVBQUUrRCxJQUFJO2dCQUFFNUksS0FBSyxFQUFFQTtjQUFLLEVBQUk7WUFDN0UsQ0FBQyxDQUFDO1lBRUYsT0FDQ2lGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBQyxhQUFBLENBQUFYLE1BQUEsQ0FBQVUsT0FBQSxDQUFBbUMsUUFBQSxRQUNFYSxNQUFNLEUsS0FBR0UsT0FBTyxDQUNmO1VBRUwsQ0FBQztVQUFDdEksT0FBQSxDQUFBb0csUUFBQSxHQUFBQSxRQUFBIiwiaWdub3JlTGlzdCI6W119