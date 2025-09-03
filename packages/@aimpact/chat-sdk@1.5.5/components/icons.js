System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, ICONS, AppIcon, AppIconButton, AppButton, __beyond_pkg, hmr;
  _export({
    ICONS: void 0,
    AppIcon: void 0,
    AppIconButton: void 0,
    AppButton: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_pragmateUi108Components) {
      dependency_3 = _pragmateUi108Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.8"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/components/icons"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['pragmate-ui/components', dependency_3]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./icons
      ***********************/
      ims.set('./icons', {
        hash: 2819380220,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ICONS = void 0;
          /* bundle */
          const ICONS = exports.ICONS = {
            attachFile: `<g><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></g>`,
            'icon-menu': {
              viewBox: '0 0 24 24',
              icon: `<g><path id="Trazado_154" data-name="Trazado 154" d="M0,0H24V24H0Z" fill="none"/><path id="Trazado_158" data-name="Trazado 158" d="M3,18H16V16H3Zm0-5H13V11H3ZM3,6V8H16V6Zm18,9.59L17.42,12,21,8.41,19.59,7l-5,5,5,5Z"/></g>`
            },
            chat: {
              viewBox: `0 0 28 28`,
              icon: `<path  d="M23,2H4.333A2.34,2.34,0,0,0,2,4.333v21l4.667-4.667H23a2.34,2.34,0,0,0,2.333-2.333v-14A2.34,2.34,0,0,0,23,2Zm0,16.333H6.667L4.333,20.667V4.333H23Z" transform="translate(0.333 0.333)" />`
            },
            documents: {
              viewBox: '0 0 28 28',
              icon: `<path id="Unión_12" data-name="Unión 12" d="M2.534,24.078A2.542,2.542,0,0,1,0,21.543L.013,7.6a2.533,2.533,0,0,1,2.255-2.52V2.534A2.542,2.542,0,0,1,4.8,0H20.009a2.542,2.542,0,0,1,2.534,2.534v5.1a2.544,2.544,0,0,1,2.128,2.5V21.543a2.542,2.542,0,0,1-2.534,2.534Zm0-2.534h19.6V10.138H10.354L7.819,7.6H2.534ZM8.87,5.069,11.4,7.6h8.6V2.255H4.8V5.069Zm3.535,1.267V3.8h6.336V6.336Z" transform="translate(1.689 2.333)"/>`
            },
            arrowUpward: `<g><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>`,
            retry: `
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
`
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 733975510,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppButton = AppButton;
          exports.AppIcon = AppIcon;
          exports.AppIconButton = AppIconButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("./icons");
          /*bundle*/
          function AppIcon({
            icon
          }) {
            icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
            return _react.default.createElement(_icons.Icon, {
              icon: icon
            });
          }
          /*bundle*/
          function AppIconButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
          /*bundle */
          function AppButton(props) {
            const attrs = {
              ...props
            };
            delete attrs.children;
            if (props.icon) {
              let {
                icon
              } = props;
              icon = _icons2.ICONS.hasOwnProperty(icon) ? _icons2.ICONS[icon] : icon;
              attrs.icon = icon;
            }
            return _react.default.createElement(_components.Button, {
              ...attrs
            }, props.children);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./icons",
        "from": "ICONS",
        "name": "ICONS"
      }, {
        "im": "./index",
        "from": "AppIcon",
        "name": "AppIcon"
      }, {
        "im": "./index",
        "from": "AppIconButton",
        "name": "AppIconButton"
      }, {
        "im": "./index",
        "from": "AppButton",
        "name": "AppButton"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ICONS') && _export("ICONS", ICONS = require ? require('./icons').ICONS : value);
        (require || prop === 'AppIcon') && _export("AppIcon", AppIcon = require ? require('./index').AppIcon : value);
        (require || prop === 'AppIconButton') && _export("AppIconButton", AppIconButton = require ? require('./index').AppIconButton : value);
        (require || prop === 'AppButton') && _export("AppButton", AppButton = require ? require('./index').AppButton : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJQ09OUyIsImV4cG9ydHMiLCJhdHRhY2hGaWxlIiwidmlld0JveCIsImljb24iLCJjaGF0IiwiZG9jdW1lbnRzIiwiYXJyb3dVcHdhcmQiLCJyZXRyeSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBcHBJY29uIiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkljb24iLCJBcHBJY29uQnV0dG9uIiwicHJvcHMiLCJhdHRycyIsImNoaWxkcmVuIiwiSWNvbkJ1dHRvbiIsIkFwcEJ1dHRvbiIsIkJ1dHRvbiJdLCJzb3VyY2VzIjpbIi8vaWNvbnMudHMvIiwiLy9pbmRleC50c3gvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTztVQUFhLE1BQU1BLEtBQUssR0FBQUMsT0FBQSxDQUFBRCxLQUFBLEdBQUc7WUFDakNFLFVBQVUsRUFBRSx1UkFBdVI7WUFDblMsV0FBVyxFQUFFO2NBQ1pDLE9BQU8sRUFBRSxXQUFXO2NBQ3BCQyxJQUFJLEVBQUU7YUFDTjtZQUVEQyxJQUFJLEVBQUU7Y0FDTEYsT0FBTyxFQUFFLFdBQVc7Y0FDcEJDLElBQUksRUFBRTthQUNOO1lBQ0RFLFNBQVMsRUFBRTtjQUNWSCxPQUFPLEVBQUUsV0FBVztjQUNwQkMsSUFBSSxFQUFFO2FBQ047WUFDREcsV0FBVyxFQUFFLHNGQUFzRjtZQUNuR0MsS0FBSyxFQUFFOzs7V0FHUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25CRCxJQUFBQyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFFTztVQUFVLFNBQVVJLE9BQU9BLENBQUM7WUFBRVY7VUFBSSxDQUFFO1lBQzFDQSxJQUFJLEdBQUdTLE9BQUEsQ0FBQWIsS0FBSyxDQUFDZSxjQUFjLENBQUNYLElBQUksQ0FBQyxHQUFHUyxPQUFBLENBQUFiLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdBLElBQUk7WUFFdEQsT0FBT0ssTUFBQSxDQUFBTyxPQUFBLENBQUFDLGFBQUEsQ0FBQ04sTUFBQSxDQUFBTyxJQUFJO2NBQUNkLElBQUksRUFBRUE7WUFBSSxFQUFJO1VBQzVCO1VBRU87VUFBVSxTQUFVZSxhQUFhQSxDQUFDQyxLQUFLO1lBQzdDLE1BQU1DLEtBQUssR0FBRztjQUFFLEdBQUdEO1lBQUssQ0FBRTtZQUMxQixPQUFPQyxLQUFLLENBQUNDLFFBQVE7WUFDckIsSUFBSUYsS0FBSyxDQUFDaEIsSUFBSSxFQUFFO2NBQ2YsSUFBSTtnQkFBRUE7Y0FBSSxDQUFFLEdBQUdnQixLQUFLO2NBQ3BCaEIsSUFBSSxHQUFHUyxPQUFBLENBQUFiLEtBQUssQ0FBQ2UsY0FBYyxDQUFDWCxJQUFJLENBQUMsR0FBR1MsT0FBQSxDQUFBYixLQUFLLENBQUNJLElBQUksQ0FBQyxHQUFHQSxJQUFJO2NBQ3REaUIsS0FBSyxDQUFDakIsSUFBSSxHQUFHQSxJQUFJOztZQUdsQixPQUFPSyxNQUFBLENBQUFPLE9BQUEsQ0FBQUMsYUFBQSxDQUFDTixNQUFBLENBQUFZLFVBQVU7Y0FBQSxHQUFLRjtZQUFLLEVBQUk7VUFDakM7VUFFTztVQUFXLFNBQVVHLFNBQVNBLENBQUNKLEtBQUs7WUFDMUMsTUFBTUMsS0FBSyxHQUFHO2NBQUUsR0FBR0Q7WUFBSyxDQUFFO1lBQzFCLE9BQU9DLEtBQUssQ0FBQ0MsUUFBUTtZQUNyQixJQUFJRixLQUFLLENBQUNoQixJQUFJLEVBQUU7Y0FDZixJQUFJO2dCQUFFQTtjQUFJLENBQUUsR0FBR2dCLEtBQUs7Y0FDcEJoQixJQUFJLEdBQUdTLE9BQUEsQ0FBQWIsS0FBSyxDQUFDZSxjQUFjLENBQUNYLElBQUksQ0FBQyxHQUFHUyxPQUFBLENBQUFiLEtBQUssQ0FBQ0ksSUFBSSxDQUFDLEdBQUdBLElBQUk7Y0FDdERpQixLQUFLLENBQUNqQixJQUFJLEdBQUdBLElBQUk7O1lBR2xCLE9BQU9LLE1BQUEsQ0FBQU8sT0FBQSxDQUFBQyxhQUFBLENBQUNMLFdBQUEsQ0FBQWEsTUFBTTtjQUFBLEdBQUtKO1lBQUssR0FBR0QsS0FBSyxDQUFDRSxRQUFRLENBQVU7VUFDcEQiLCJpZ25vcmVMaXN0IjpbXX0=