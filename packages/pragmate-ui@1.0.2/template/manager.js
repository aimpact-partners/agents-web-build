System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, hslToHex, TplManager, getCSSCustomPropIndex, __beyond_pkg, hmr;
  _export({
    hslToHex: void 0,
    TplManager: void 0,
    getCSSCustomPropIndex: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210Model) {
      dependency_1 = _beyondJsReactive210Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/template/manager"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./colors/converters
      ***********************************/
      ims.set('./colors/converters', {
        hash: 3901188594,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.hexToRgb = hexToRgb;
          exports.hslToHex = hslToHex;
          exports.rgbToHex = rgbToHex;
          function hexToRgb(hex) {
            // Remove the '#' symbol if present
            hex = hex.replace(/^#/, '');
            // Convert the hexadecimal values to decimal
            const bigint = parseInt(hex, 16);
            // Extract the RGB components
            const r = bigint >> 16 & 255;
            const g = bigint >> 8 & 255;
            const b = bigint & 255;
            return {
              r,
              g,
              b
            };
          }
          function rgbToHex(r, g, b) {
            return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
          }
          /*bundle */
          function hslToHex(h, s, l) {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0'); // convert to Hex and prefix "0" if needed
            };
            return `#${f(0)}${f(8)}${f(4)}`;
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./colors/darken
      *******************************/

      ims.set('./colors/darken', {
        hash: 3264955651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.darkenHexColor = darkenHexColor;
          var _converters = require("./converters");
          function darkenHexColor(hex, percentage) {
            const {
              r,
              g,
              b
            } = (0, _converters.hexToRgb)(hex);
            const darkenAmount = Math.floor(255 * (percentage / 100));
            const newR = Math.max(0, r - darkenAmount);
            const newG = Math.max(0, g - darkenAmount);
            const newB = Math.max(0, b - darkenAmount);
            return (0, _converters.rgbToHex)(newR, newG, newB);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./colors/lighen
      *******************************/

      ims.set('./colors/lighen', {
        hash: 4269504386,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.lightenHexColor = lightenHexColor;
          var _converters = require("./converters");
          function lightenHexColor(hex, percentage) {
            const {
              r,
              g,
              b
            } = (0, _converters.hexToRgb)(hex);
            const lightenAmount = Math.floor(255 * (percentage / 100));
            const newR = Math.min(255, r + lightenAmount);
            const newG = Math.min(255, g + lightenAmount);
            const newB = Math.min(255, b + lightenAmount);
            return (0, _converters.rgbToHex)(newR, newG, newB);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1743232617,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TplManager = exports.TemplateManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _properties = require("./properties");
          class TemplateManager extends _model.ReactiveModel {
            #root;
            get root() {
              return this.#root;
            }
            #rootSelector;
            #theme;
            #stylesheet;
            #dark;
            get dark() {
              return this.#dark;
            }
            #light;
            get light() {
              return this.#light;
            }
            constructor() {
              super();
              this.#rootSelector = document.querySelector('html');
              this.#theme = this.#rootSelector.dataset.beyondMode ?? 'light';
              const properties = this.getCustomProperties(this.#theme);
              this.#root = properties;
              this.initialise();
            }
            getCustomProperties(theme) {
              const stylesheetHref = new URL('./styles.css', window.location.origin).href;
              const cssPropsObject = (0, _properties.getCSSCustomPropsObjectFromStylesheet)(stylesheetHref, theme);
              return cssPropsObject;
            }
            #getProperties() {
              const stylesheetHref = new URL('./styles.css', window.location.origin).href;
              const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.href.split('?')[0] === stylesheetHref);
              const rules = Array.from(stylesheet.cssRules);
              const filter = (rule, property) => rule instanceof CSSStyleRule && rule.selectorText === property;
              this.#dark = rules.find(rule => filter(rule, ':root[data-beyond-mode="dark"]'));
              this.#light = rules.find(rule => filter(rule, ':root[data-beyond-mode="light"]'));
              this.#stylesheet = stylesheet;
            }
            initialise() {
              this.#getProperties();
              const observe = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                  if (mutation.type === 'attributes' && mutation.attributeName === 'data-beyond-mode') {
                    this.#theme = this.#rootSelector.dataset.beyondMode ?? 'light';
                    this.#getProperties();
                    this.#root = this.getCustomProperties(this.#theme);
                    this.trigger('change');
                  }
                });
              });
              observe.observe(this.#rootSelector, {
                attributes: true
              });
            }
          }
          exports.TemplateManager = TemplateManager;
          /*bundle */
          const TplManager = exports.TplManager = new TemplateManager();
        }
      });

      /****************************
      INTERNAL MODULE: ./properties
      ****************************/

      ims.set('./properties', {
        hash: 1794570333,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toCamelCase = exports.getCSSCustomPropsObjectFromStylesheet = exports.getCSSCustomPropsObject = exports.getCSSCustomPropIndexFromStylesheet = exports.getCSSCustomPropIndex = void 0;
          /*
           Check if the stylesheet is internal or hosted on the current domain.
           If it isn't, attempting to access sheet.cssRules will throw a cross origin error.
           See https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet#Notes
           
           NOTE: One problem this could raise is hosting stylesheets on a CDN with a
           different domain. Those would be cross origin, so you can't access them.
          */
          const isSameDomain = styleSheet => {
            // Internal style blocks won't have an href value
            if (!styleSheet.href) {
              return true;
            }
            return styleSheet.href.indexOf(window.location.origin) === 0;
          };
          /*
             Determine if the given rule is a CSSStyleRule
             See: https://developer.mozilla.org/en-US/docs/Web/API/CSSRule#Type_constants
            */
          const isStyleRule = rule => rule.type === 1;
          /**
           * Get all custom properties on a page
           * @return array<array[string, string]>
           * ex; [["--color-accent", "#b9f500"], ["--color-text", "#252525"], ...]
           */
          /*bundle*/
          const getCSSCustomPropIndex = () => {
            // styleSheets is array-like, so we convert it to an array.
            // Filter out any stylesheets not on this domain
            return Array.from(document.styleSheets).filter(isSameDomain).reduce((finalArr, sheet) => {
              // cssRules is array-like, so we convert it to an array
              const ruleProps = Array.from(sheet.cssRules).filter(isStyleRule).reduce((propValArr, rule) => {
                const styleRule = rule; // Assert rule as CSSStyleRule
                //@ts-ignore
                const props = Array.from(styleRule.style).map(propName => [propName.trim(), styleRule.style.getPropertyValue(propName).trim()])
                // Discard any props that don't start with "--". Custom props are required to.
                .filter(([propName]) => propName.startsWith('--'));
                return propValArr.concat(props);
              }, []);
              return finalArr.concat(ruleProps);
            }, []);
          };
          exports.getCSSCustomPropIndex = getCSSCustomPropIndex;
          const toCamelCase = str => {
            return str.replace(/-([a-z0-9])/g, function (_, g1) {
              return /\d/.test(g1) ? g1 : g1.toUpperCase();
            });
          };
          exports.toCamelCase = toCamelCase;
          const getCSSCustomPropsObject = () => {
            const index = getCSSCustomPropIndex();
            const obj = {};
            index.forEach(([propName, value]) => {
              // Remove the leading "--" and convert to camel case
              const camelCasedPropName = toCamelCase(propName.slice(2));
              obj[camelCasedPropName] = value;
            });
            return obj;
          };
          exports.getCSSCustomPropsObject = getCSSCustomPropsObject;
          const getCSSCustomPropIndexFromStylesheet = (stylesheetHref, theme) => {
            // Find the specified stylesheet in the document's stylesheets collection
            const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.href.split('?')[0] === stylesheetHref);
            if (!stylesheet) {
              return [];
            }
            const getCustomPropForTheme = (propName, theme, styleSheet) => {
              const targetSelector = `:root[data-beyond-mode="${theme}"]`;
              for (const rule of Array.from(styleSheet.cssRules)) {
                if (rule instanceof CSSStyleRule && rule.selectorText === targetSelector) {
                  const styleRule = rule;
                  const propValue = styleRule.style.getPropertyValue(propName).trim();
                  return propValue;
                }
              }
              return null;
            };
            // cssRules is array-like, so we convert it to an array
            const ruleProps = Array.from(stylesheet.cssRules).filter(isStyleRule).reduce((propValArr, rule) => {
              const styleRule = rule; // Assert rule as CSSStyleRule
              //@ts-ignore
              const props = Array.from(styleRule.style).map(propName => {
                // getComputedStyle
                propName = propName.trim();
                // const value = getCustomPropForTheme(propName, theme, stylesheet);
                const value = styleRule.style.getPropertyValue(propName).trim();
                return [propName, value.trim()];
              })
              // Discard any props that don't start with "--". Custom props are required to.
              .filter(([propName]) => propName.startsWith('--'));
              return propValArr.concat(props);
            }, []);
            return ruleProps;
          };
          exports.getCSSCustomPropIndexFromStylesheet = getCSSCustomPropIndexFromStylesheet;
          const getCSSCustomPropsObjectFromStylesheet = (stylesheetHref, theme) => {
            const index = getCSSCustomPropIndexFromStylesheet(stylesheetHref, theme);
            const obj = {};
            index.forEach(([propName, value]) => {
              // Remove the leading "--" and convert to camel case
              const camelCasedPropName = toCamelCase(propName.slice(2));
              obj[camelCasedPropName] = value;
            });
            //@ts-ignore
            return obj;
          };
          // const cssCustomPropIndex: Array<[string, string]> = getCSSCustomPropIndex();
          // Add the swatches to the DOM
          exports.getCSSCustomPropsObjectFromStylesheet = getCSSCustomPropsObjectFromStylesheet;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./colors/converters",
        "from": "hslToHex",
        "name": "hslToHex"
      }, {
        "im": "./index",
        "from": "TplManager",
        "name": "TplManager"
      }, {
        "im": "./properties",
        "from": "getCSSCustomPropIndex",
        "name": "getCSSCustomPropIndex"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'hslToHex') && _export("hslToHex", hslToHex = require ? require('./colors/converters').hslToHex : value);
        (require || prop === 'TplManager') && _export("TplManager", TplManager = require ? require('./index').TplManager : value);
        (require || prop === 'getCSSCustomPropIndex') && _export("getCSSCustomPropIndex", getCSSCustomPropIndex = require ? require('./properties').getCSSCustomPropIndex : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJoZXhUb1JnYiIsImhleCIsInJlcGxhY2UiLCJiaWdpbnQiLCJwYXJzZUludCIsInIiLCJnIiwiYiIsInJnYlRvSGV4IiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhzbFRvSGV4IiwiaCIsInMiLCJsIiwiYSIsIk1hdGgiLCJtaW4iLCJmIiwibiIsImsiLCJjb2xvciIsIm1heCIsInJvdW5kIiwiX2NvbnZlcnRlcnMiLCJyZXF1aXJlIiwiZGFya2VuSGV4Q29sb3IiLCJwZXJjZW50YWdlIiwiZGFya2VuQW1vdW50IiwiZmxvb3IiLCJuZXdSIiwibmV3RyIsIm5ld0IiLCJsaWdodGVuSGV4Q29sb3IiLCJsaWdodGVuQW1vdW50IiwiX21vZGVsIiwiX3Byb3BlcnRpZXMiLCJUZW1wbGF0ZU1hbmFnZXIiLCJSZWFjdGl2ZU1vZGVsIiwicm9vdCIsInJvb3RTZWxlY3RvciIsInRoZW1lIiwic3R5bGVzaGVldCIsImRhcmsiLCJsaWdodCIsImNvbnN0cnVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsImJleW9uZE1vZGUiLCJwcm9wZXJ0aWVzIiwiZ2V0Q3VzdG9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJzdHlsZXNoZWV0SHJlZiIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiaHJlZiIsImNzc1Byb3BzT2JqZWN0IiwiZ2V0Q1NTQ3VzdG9tUHJvcHNPYmplY3RGcm9tU3R5bGVzaGVldCIsImdldFByb3BlcnRpZXMiLCIjZ2V0UHJvcGVydGllcyIsIkFycmF5IiwiZnJvbSIsInN0eWxlU2hlZXRzIiwiZmluZCIsInNoZWV0Iiwic3BsaXQiLCJydWxlcyIsImNzc1J1bGVzIiwiZmlsdGVyIiwicnVsZSIsInByb3BlcnR5IiwiQ1NTU3R5bGVSdWxlIiwic2VsZWN0b3JUZXh0Iiwib2JzZXJ2ZSIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJmb3JFYWNoIiwibXV0YXRpb24iLCJ0eXBlIiwiYXR0cmlidXRlTmFtZSIsInRyaWdnZXIiLCJhdHRyaWJ1dGVzIiwiZXhwb3J0cyIsIlRwbE1hbmFnZXIiLCJpc1NhbWVEb21haW4iLCJzdHlsZVNoZWV0IiwiaW5kZXhPZiIsImlzU3R5bGVSdWxlIiwiZ2V0Q1NTQ3VzdG9tUHJvcEluZGV4IiwicmVkdWNlIiwiZmluYWxBcnIiLCJydWxlUHJvcHMiLCJwcm9wVmFsQXJyIiwic3R5bGVSdWxlIiwicHJvcHMiLCJzdHlsZSIsIm1hcCIsInByb3BOYW1lIiwidHJpbSIsImdldFByb3BlcnR5VmFsdWUiLCJzdGFydHNXaXRoIiwiY29uY2F0IiwidG9DYW1lbENhc2UiLCJzdHIiLCJfIiwiZzEiLCJ0ZXN0IiwidG9VcHBlckNhc2UiLCJnZXRDU1NDdXN0b21Qcm9wc09iamVjdCIsImluZGV4Iiwib2JqIiwidmFsdWUiLCJjYW1lbENhc2VkUHJvcE5hbWUiLCJzbGljZSIsImdldENTU0N1c3RvbVByb3BJbmRleEZyb21TdHlsZXNoZWV0IiwiZ2V0Q3VzdG9tUHJvcEZvclRoZW1lIiwidGFyZ2V0U2VsZWN0b3IiLCJwcm9wVmFsdWUiXSwic291cmNlcyI6WyIvY29sb3JzL2NvbnZlcnRlcnMudHMiLCIvY29sb3JzL2Rhcmtlbi50cyIsIi9jb2xvcnMvbGlnaGVuLnRzIiwiL2luZGV4LnRzIiwiL3Byb3BlcnRpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFNLFNBQVVBLFFBQVFBLENBQUNDLEdBQVc7WUFDbkM7WUFDQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1lBRTNCO1lBQ0EsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNILEdBQUcsRUFBRSxFQUFFLENBQUM7WUFFaEM7WUFDQSxNQUFNSSxDQUFDLEdBQUlGLE1BQU0sSUFBSSxFQUFFLEdBQUksR0FBRztZQUM5QixNQUFNRyxDQUFDLEdBQUlILE1BQU0sSUFBSSxDQUFDLEdBQUksR0FBRztZQUM3QixNQUFNSSxDQUFDLEdBQUdKLE1BQU0sR0FBRyxHQUFHO1lBRXRCLE9BQU87Y0FBRUUsQ0FBQztjQUFFQyxDQUFDO2NBQUVDO1lBQUMsQ0FBRTtVQUNuQjtVQUVNLFNBQVVDLFFBQVFBLENBQUNILENBQVMsRUFBRUMsQ0FBUyxFQUFFQyxDQUFTO1lBQ3ZELE9BQU8sSUFBSSxDQUFFRixDQUFDLElBQUksRUFBRSxHQUFLQyxDQUFDLElBQUksQ0FBRSxHQUFHQyxDQUFDLEVBQUVFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtVQUN0RTtVQUVPO1VBQVcsU0FBVUMsUUFBUUEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLENBQUM7WUFDM0NBLENBQUMsSUFBSSxHQUFHO1lBQ1IsTUFBTUMsQ0FBQyxHQUFJRixDQUFDLEdBQUdHLElBQUksQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLEVBQUUsQ0FBQyxHQUFHQSxDQUFDLENBQUMsR0FBSSxHQUFHO1lBQ3hDLE1BQU1JLENBQUMsR0FBR0MsQ0FBQyxJQUFHO2NBQ2IsTUFBTUMsQ0FBQyxHQUFHLENBQUNELENBQUMsR0FBR1AsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO2NBQzNCLE1BQU1TLEtBQUssR0FBR1AsQ0FBQyxHQUFHQyxDQUFDLEdBQUdDLElBQUksQ0FBQ00sR0FBRyxDQUFDTixJQUFJLENBQUNDLEdBQUcsQ0FBQ0csQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUdBLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztjQUM3RCxPQUFPSixJQUFJLENBQUNPLEtBQUssQ0FBQyxHQUFHLEdBQUdGLEtBQUssQ0FBQyxDQUM1QlosUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUNaQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sSUFBSVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQU0sV0FBQSxHQUFBQyxPQUFBO1VBRU0sU0FBVUMsY0FBY0EsQ0FBQ3pCLEdBQVcsRUFBRTBCLFVBQWtCO1lBQzdELE1BQU07Y0FBRXRCLENBQUM7Y0FBRUMsQ0FBQztjQUFFQztZQUFDLENBQUUsR0FBRyxJQUFBaUIsV0FBQSxDQUFBeEIsUUFBUSxFQUFDQyxHQUFHLENBQUM7WUFFakMsTUFBTTJCLFlBQVksR0FBR1osSUFBSSxDQUFDYSxLQUFLLENBQUMsR0FBRyxJQUFJRixVQUFVLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFekQsTUFBTUcsSUFBSSxHQUFHZCxJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUFDLEVBQUVqQixDQUFDLEdBQUd1QixZQUFZLENBQUM7WUFDMUMsTUFBTUcsSUFBSSxHQUFHZixJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUFDLEVBQUVoQixDQUFDLEdBQUdzQixZQUFZLENBQUM7WUFDMUMsTUFBTUksSUFBSSxHQUFHaEIsSUFBSSxDQUFDTSxHQUFHLENBQUMsQ0FBQyxFQUFFZixDQUFDLEdBQUdxQixZQUFZLENBQUM7WUFFMUMsT0FBTyxJQUFBSixXQUFBLENBQUFoQixRQUFRLEVBQUNzQixJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFDO1VBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFSLFdBQUEsR0FBQUMsT0FBQTtVQUVNLFNBQVVRLGVBQWVBLENBQUNoQyxHQUFXLEVBQUUwQixVQUFrQjtZQUM5RCxNQUFNO2NBQUV0QixDQUFDO2NBQUVDLENBQUM7Y0FBRUM7WUFBQyxDQUFFLEdBQUcsSUFBQWlCLFdBQUEsQ0FBQXhCLFFBQVEsRUFBQ0MsR0FBRyxDQUFDO1lBRWpDLE1BQU1pQyxhQUFhLEdBQUdsQixJQUFJLENBQUNhLEtBQUssQ0FBQyxHQUFHLElBQUlGLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUUxRCxNQUFNRyxJQUFJLEdBQUdkLElBQUksQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsRUFBRVosQ0FBQyxHQUFHNkIsYUFBYSxDQUFDO1lBQzdDLE1BQU1ILElBQUksR0FBR2YsSUFBSSxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFWCxDQUFDLEdBQUc0QixhQUFhLENBQUM7WUFDN0MsTUFBTUYsSUFBSSxHQUFHaEIsSUFBSSxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFVixDQUFDLEdBQUcyQixhQUFhLENBQUM7WUFFN0MsT0FBTyxJQUFBVixXQUFBLENBQUFoQixRQUFRLEVBQUNzQixJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFDO1VBQ2xDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFHLE1BQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLFdBQUEsR0FBQVgsT0FBQTtVQUNNLE1BQU9ZLGVBQWdCLFNBQVFGLE1BQUEsQ0FBQUcsYUFBOEI7WUFDbEUsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBQ0EsQ0FBQUMsWUFBYTtZQUNiLENBQUFDLEtBQU07WUFDTixDQUFBQyxVQUFXO1lBQ1gsQ0FBQUMsSUFBSztZQUNMLElBQUlBLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBQSxJQUFLO1lBQ2xCO1lBQ0EsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUFDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FFUCxJQUFJLENBQUMsQ0FBQUwsWUFBYSxHQUFHTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Y0FDbkQsSUFBSSxDQUFDLENBQUFOLEtBQU0sR0FBRyxJQUFJLENBQUMsQ0FBQUQsWUFBYSxDQUFDUSxPQUFPLENBQUNDLFVBQVUsSUFBSSxPQUFPO2NBQzlELE1BQU1DLFVBQVUsR0FBRyxJQUFJLENBQUNDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUM7Y0FDeEQsSUFBSSxDQUFDLENBQUFGLElBQUssR0FBR1csVUFBVTtjQUN2QixJQUFJLENBQUNFLFVBQVUsRUFBRTtZQUNsQjtZQUVBRCxtQkFBbUJBLENBQUNWLEtBQUs7Y0FDeEIsTUFBTVksY0FBYyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxjQUFjLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQ0MsSUFBSTtjQUUzRSxNQUFNQyxjQUFjLEdBQUcsSUFBQXZCLFdBQUEsQ0FBQXdCLHFDQUFxQyxFQUFDUCxjQUFjLEVBQUVaLEtBQUssQ0FBQztjQUVuRixPQUFPa0IsY0FBYztZQUN0QjtZQUVBLENBQUFFLGFBQWNDLENBQUE7Y0FDYixNQUFNVCxjQUFjLEdBQUcsSUFBSUMsR0FBRyxDQUFDLGNBQWMsRUFBRUMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxJQUFJO2NBQzNFLE1BQU1oQixVQUFVLEdBQWtCcUIsS0FBSyxDQUFDQyxJQUFJLENBQUNsQixRQUFRLENBQUNtQixXQUFXLENBQUMsQ0FBQ0MsSUFBSSxDQUN0RUMsS0FBSyxJQUFJQSxLQUFLLENBQUNULElBQUksQ0FBQ1UsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLZixjQUFjLENBQ3BEO2NBQ0QsTUFBTWdCLEtBQUssR0FBR04sS0FBSyxDQUFDQyxJQUFJLENBQUN0QixVQUFVLENBQUM0QixRQUFRLENBQUM7Y0FDN0MsTUFBTUMsTUFBTSxHQUFHQSxDQUFDQyxJQUFJLEVBQUVDLFFBQVEsS0FBY0QsSUFBSSxZQUFZRSxZQUFZLElBQUlGLElBQUksQ0FBQ0csWUFBWSxLQUFLRixRQUFRO2NBRTFHLElBQUksQ0FBQyxDQUFBOUIsSUFBSyxHQUFHMEIsS0FBSyxDQUFDSCxJQUFJLENBQUNNLElBQUksSUFBSUQsTUFBTSxDQUFDQyxJQUFJLEVBQUUsZ0NBQWdDLENBQUMsQ0FBaUI7Y0FDL0YsSUFBSSxDQUFDLENBQUE1QixLQUFNLEdBQUd5QixLQUFLLENBQUNILElBQUksQ0FBQ00sSUFBSSxJQUFJRCxNQUFNLENBQUNDLElBQUksRUFBRSxpQ0FBaUMsQ0FBQyxDQUFpQjtjQUVqRyxJQUFJLENBQUMsQ0FBQTlCLFVBQVcsR0FBR0EsVUFBVTtZQUM5QjtZQUNBVSxVQUFVQSxDQUFBO2NBQ1QsSUFBSSxDQUFDLENBQUFTLGFBQWMsRUFBRTtjQUNyQixNQUFNZSxPQUFPLEdBQUcsSUFBSUMsZ0JBQWdCLENBQUNDLFNBQVMsSUFBRztnQkFDaERBLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLElBQUc7a0JBQzVCLElBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxLQUFLLFlBQVksSUFBSUQsUUFBUSxDQUFDRSxhQUFhLEtBQUssa0JBQWtCLEVBQUU7b0JBQ3BGLElBQUksQ0FBQyxDQUFBekMsS0FBTSxHQUFHLElBQUksQ0FBQyxDQUFBRCxZQUFhLENBQUNRLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJLE9BQU87b0JBQzlELElBQUksQ0FBQyxDQUFBWSxhQUFjLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxDQUFBdEIsSUFBSyxHQUFHLElBQUksQ0FBQ1ksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQztvQkFDbEQsSUFBSSxDQUFDMEMsT0FBTyxDQUFDLFFBQVEsQ0FBQzs7Z0JBRXhCLENBQUMsQ0FBQztjQUNILENBQUMsQ0FBQztjQUNGUCxPQUFPLENBQUNBLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQXBDLFlBQWEsRUFBRTtnQkFBRTRDLFVBQVUsRUFBRTtjQUFJLENBQUUsQ0FBQztZQUMxRDs7VUFDQUMsT0FBQSxDQUFBaEQsZUFBQSxHQUFBQSxlQUFBO1VBRU07VUFBWSxNQUFNaUQsVUFBVSxHQUFBRCxPQUFBLENBQUFDLFVBQUEsR0FBRyxJQUFJakQsZUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xFM0Q7Ozs7Ozs7O1VBUUEsTUFBTWtELFlBQVksR0FBSUMsVUFBeUIsSUFBYTtZQUMzRDtZQUNBLElBQUksQ0FBQ0EsVUFBVSxDQUFDOUIsSUFBSSxFQUFFO2NBQ3JCLE9BQU8sSUFBSTs7WUFHWixPQUFPOEIsVUFBVSxDQUFDOUIsSUFBSSxDQUFDK0IsT0FBTyxDQUFDbEMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7VUFDN0QsQ0FBQztVQUVEOzs7O1VBSUEsTUFBTWlDLFdBQVcsR0FBSWxCLElBQWEsSUFBY0EsSUFBSSxDQUFDUyxJQUFJLEtBQUssQ0FBQztVQUUvRDs7Ozs7VUFLTztVQUFXLE1BQU1VLHFCQUFxQixHQUFHQSxDQUFBLEtBQThCO1lBQzdFO1lBQ0E7WUFDQSxPQUFPNUIsS0FBSyxDQUFDQyxJQUFJLENBQUNsQixRQUFRLENBQUNtQixXQUFXLENBQUMsQ0FDckNNLE1BQU0sQ0FBQ2dCLFlBQVksQ0FBQyxDQUNwQkssTUFBTSxDQUFDLENBQUNDLFFBQWlDLEVBQUUxQixLQUFvQixLQUFJO2NBQ25FO2NBQ0EsTUFBTTJCLFNBQVMsR0FBNEIvQixLQUFLLENBQUNDLElBQUksQ0FBQ0csS0FBSyxDQUFDRyxRQUFRLENBQUMsQ0FDbkVDLE1BQU0sQ0FBQ21CLFdBQVcsQ0FBQyxDQUNuQkUsTUFBTSxDQUFDLENBQUNHLFVBQW1DLEVBQUV2QixJQUFhLEtBQUk7Z0JBQzlELE1BQU13QixTQUFTLEdBQUd4QixJQUFvQixDQUFDLENBQUM7Z0JBQ3hDO2dCQUNBLE1BQU15QixLQUFLLEdBQTRCbEMsS0FBSyxDQUFDQyxJQUFJLENBQUNnQyxTQUFTLENBQUNFLEtBQUssQ0FBQyxDQUNoRUMsR0FBRyxDQUFFQyxRQUFnQixJQUFLLENBQUNBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLEVBQUVMLFNBQVMsQ0FBQ0UsS0FBSyxDQUFDSSxnQkFBZ0IsQ0FBQ0YsUUFBUSxDQUFDLENBQUNDLElBQUksRUFBRSxDQUFDO2dCQUMvRjtnQkFBQSxDQUNDOUIsTUFBTSxDQUFDLENBQUMsQ0FBQzZCLFFBQVEsQ0FBQyxLQUFLQSxRQUFRLENBQUNHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFbkQsT0FBT1IsVUFBVSxDQUFDUyxNQUFNLENBQUNQLEtBQUssQ0FBQztjQUNoQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2NBRVAsT0FBT0osUUFBUSxDQUFDVyxNQUFNLENBQUNWLFNBQVMsQ0FBQztZQUNsQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1VBQ1IsQ0FBQztVQUFDVCxPQUFBLENBQUFNLHFCQUFBLEdBQUFBLHFCQUFBO1VBRUssTUFBTWMsV0FBVyxHQUFJQyxHQUFXLElBQVk7WUFDbEQsT0FBT0EsR0FBRyxDQUFDeEcsT0FBTyxDQUFDLGNBQWMsRUFBRSxVQUFVeUcsQ0FBQyxFQUFFQyxFQUFFO2NBQ2pELE9BQU8sSUFBSSxDQUFDQyxJQUFJLENBQUNELEVBQUUsQ0FBQyxHQUFHQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ0UsV0FBVyxFQUFFO1lBQzdDLENBQUMsQ0FBQztVQUNILENBQUM7VUFBQ3pCLE9BQUEsQ0FBQW9CLFdBQUEsR0FBQUEsV0FBQTtVQUVLLE1BQU1NLHVCQUF1QixHQUFHQSxDQUFBLEtBQWdDO1lBQ3RFLE1BQU1DLEtBQUssR0FBR3JCLHFCQUFxQixFQUFFO1lBQ3JDLE1BQU1zQixHQUFHLEdBQThCLEVBQUU7WUFFekNELEtBQUssQ0FBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUNxQixRQUFRLEVBQUVjLEtBQUssQ0FBQyxLQUFJO2NBQ25DO2NBQ0EsTUFBTUMsa0JBQWtCLEdBQUdWLFdBQVcsQ0FBQ0wsUUFBUSxDQUFDZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ3pESCxHQUFHLENBQUNFLGtCQUFrQixDQUFDLEdBQUdELEtBQUs7WUFDaEMsQ0FBQyxDQUFDO1lBRUYsT0FBT0QsR0FBRztVQUNYLENBQUM7VUFBQzVCLE9BQUEsQ0FBQTBCLHVCQUFBLEdBQUFBLHVCQUFBO1VBRUssTUFBTU0sbUNBQW1DLEdBQUdBLENBQUNoRSxjQUFzQixFQUFFWixLQUFhLEtBQTZCO1lBQ3JIO1lBQ0EsTUFBTUMsVUFBVSxHQUFHcUIsS0FBSyxDQUFDQyxJQUFJLENBQUNsQixRQUFRLENBQUNtQixXQUFXLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLElBQUlBLEtBQUssQ0FBQ1QsSUFBSSxDQUFDVSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUtmLGNBQWMsQ0FBQztZQUU5RyxJQUFJLENBQUNYLFVBQVUsRUFBRTtjQUNoQixPQUFPLEVBQUU7O1lBR1YsTUFBTTRFLHFCQUFxQixHQUFHQSxDQUFDbEIsUUFBZ0IsRUFBRTNELEtBQWEsRUFBRStDLFVBQXlCLEtBQW1CO2NBQzNHLE1BQU0rQixjQUFjLEdBQUcsMkJBQTJCOUUsS0FBSyxJQUFJO2NBRTNELEtBQUssTUFBTStCLElBQUksSUFBSVQsS0FBSyxDQUFDQyxJQUFJLENBQUN3QixVQUFVLENBQUNsQixRQUFRLENBQUMsRUFBRTtnQkFDbkQsSUFBSUUsSUFBSSxZQUFZRSxZQUFZLElBQUlGLElBQUksQ0FBQ0csWUFBWSxLQUFLNEMsY0FBYyxFQUFFO2tCQUN6RSxNQUFNdkIsU0FBUyxHQUFHeEIsSUFBb0I7a0JBQ3RDLE1BQU1nRCxTQUFTLEdBQUd4QixTQUFTLENBQUNFLEtBQUssQ0FBQ0ksZ0JBQWdCLENBQUNGLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7a0JBQ25FLE9BQU9tQixTQUFTOzs7Y0FJbEIsT0FBTyxJQUFJO1lBQ1osQ0FBQztZQUVEO1lBQ0EsTUFBTTFCLFNBQVMsR0FBNEIvQixLQUFLLENBQUNDLElBQUksQ0FBQ3RCLFVBQVUsQ0FBQzRCLFFBQVEsQ0FBQyxDQUN4RUMsTUFBTSxDQUFDbUIsV0FBVyxDQUFDLENBQ25CRSxNQUFNLENBQUMsQ0FBQ0csVUFBbUMsRUFBRXZCLElBQWEsS0FBSTtjQUM5RCxNQUFNd0IsU0FBUyxHQUFHeEIsSUFBb0IsQ0FBQyxDQUFDO2NBQ3hDO2NBQ0EsTUFBTXlCLEtBQUssR0FBNEJsQyxLQUFLLENBQUNDLElBQUksQ0FBQ2dDLFNBQVMsQ0FBQ0UsS0FBSyxDQUFDLENBQ2hFQyxHQUFHLENBQUVDLFFBQWdCLElBQUk7Z0JBQ3pCO2dCQUNBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUMxQjtnQkFDQSxNQUFNYSxLQUFLLEdBQUdsQixTQUFTLENBQUNFLEtBQUssQ0FBQ0ksZ0JBQWdCLENBQUNGLFFBQVEsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7Z0JBQy9ELE9BQU8sQ0FBQ0QsUUFBUSxFQUFFYyxLQUFLLENBQUNiLElBQUksRUFBRSxDQUFDO2NBQ2hDLENBQUM7Y0FDRDtjQUFBLENBQ0M5QixNQUFNLENBQUMsQ0FBQyxDQUFDNkIsUUFBUSxDQUFDLEtBQUtBLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2NBRW5ELE9BQU9SLFVBQVUsQ0FBQ1MsTUFBTSxDQUFDUCxLQUFLLENBQUM7WUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUVQLE9BQU9ILFNBQVM7VUFDakIsQ0FBQztVQUFDVCxPQUFBLENBQUFnQyxtQ0FBQSxHQUFBQSxtQ0FBQTtVQUVLLE1BQU16RCxxQ0FBcUMsR0FBR0EsQ0FDcERQLGNBQXNCLEVBQ3RCWixLQUFhLEtBQ2dDO1lBQzdDLE1BQU11RSxLQUFLLEdBQUdLLG1DQUFtQyxDQUFDaEUsY0FBYyxFQUFFWixLQUFLLENBQUM7WUFDeEUsTUFBTXdFLEdBQUcsR0FBOEIsRUFBRTtZQUV6Q0QsS0FBSyxDQUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQ3FCLFFBQVEsRUFBRWMsS0FBSyxDQUFDLEtBQUk7Y0FDbkM7Y0FDQSxNQUFNQyxrQkFBa0IsR0FBR1YsV0FBVyxDQUFDTCxRQUFRLENBQUNnQixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDekRILEdBQUcsQ0FBQ0Usa0JBQWtCLENBQUMsR0FBR0QsS0FBSztZQUNoQyxDQUFDLENBQUM7WUFDRjtZQUNBLE9BQU9ELEdBQUc7VUFDWCxDQUFDO1VBRUQ7VUFFQTtVQUFBNUIsT0FBQSxDQUFBekIscUNBQUEsR0FBQUEscUNBQUEiLCJpZ25vcmVMaXN0IjpbXX0=