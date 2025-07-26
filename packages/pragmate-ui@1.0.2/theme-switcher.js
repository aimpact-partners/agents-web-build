System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.2/form", "pragmate-ui@1.0.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ThemeSwitcher, __beyond_pkg, hmr;
  _export("ThemeSwitcher", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi102Form) {
      dependency_3 = _pragmateUi102Form;
    }, function (_pragmateUi102Icons) {
      dependency_4 = _pragmateUi102Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/theme-switcher"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/form', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/theme-switcher');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1174528906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ThemeSwitcher = ThemeSwitcher;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function ThemeSwitcher() {
            const theme = globalThis?.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeStorage = localStorage.getItem('theme');
            const defaultTheme = theme ? 'dark' : 'light';
            const userTheme = themeStorage ? themeStorage === 'dark' : defaultTheme === 'dark';
            const [isDark, setIsDark] = _react.default.useState(userTheme);
            function handleChange({
              target
            }) {
              const container = document.querySelector('html');
              const theme = isDark ? 'light' : 'dark';
              container.setAttribute('data-beyond-mode', theme);
              localStorage.setItem('theme', theme);
              setIsDark(target.checked);
            }
            _react.default.useEffect(() => {
              if (!themeStorage) return;
              const container = document.querySelector('html');
              container.setAttribute('data-beyond-mode', themeStorage);
            }, []);
            const icon = isDark ? 'moon' : 'sun';
            return _react.default.createElement("div", {
              className: "theme"
            }, _react.default.createElement("div", {
              className: "container-theme"
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            }), _react.default.createElement(_form.Switch, {
              className: "checkbox",
              checked: isDark,
              onChange: handleChange
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ThemeSwitcher",
        "name": "ThemeSwitcher"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ThemeSwitcher') && _export("ThemeSwitcher", ThemeSwitcher = require ? require('./index').ThemeSwitcher : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zvcm0iLCJfaWNvbnMiLCJUaGVtZVN3aXRjaGVyIiwidGhlbWUiLCJnbG9iYWxUaGlzIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0aGVtZVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVmYXVsdFRoZW1lIiwidXNlclRoZW1lIiwiaXNEYXJrIiwic2V0SXNEYXJrIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwic2V0SXRlbSIsImNoZWNrZWQiLCJ1c2VFZmZlY3QiLCJpY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkljb24iLCJTd2l0Y2giLCJvbkNoYW5nZSJdLCJzb3VyY2VzIjpbIi8vdHMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsU0FBVUcsYUFBYUEsQ0FBQTtZQUN2QyxNQUFNQyxLQUFLLEdBQUdDLFVBQVUsRUFBRUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUNDLE9BQU87WUFDNUUsTUFBTUMsWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDbEQsTUFBTUMsWUFBWSxHQUFXUCxLQUFLLEdBQUcsTUFBTSxHQUFHLE9BQU87WUFDckQsTUFBTVEsU0FBUyxHQUFZSixZQUFZLEdBQUdBLFlBQVksS0FBSyxNQUFNLEdBQUdHLFlBQVksS0FBSyxNQUFNO1lBQzNGLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2YsTUFBQSxDQUFBZ0IsT0FBSyxDQUFDQyxRQUFRLENBQVVKLFNBQVMsQ0FBQztZQUU5RCxTQUFTSyxZQUFZQSxDQUFDO2NBQUNDO1lBQU0sQ0FBQztjQUM3QixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztjQUNoRCxNQUFNakIsS0FBSyxHQUFHUyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07Y0FDdkNNLFNBQVMsQ0FBQ0csWUFBWSxDQUFDLGtCQUFrQixFQUFFbEIsS0FBSyxDQUFDO2NBQ2pESyxZQUFZLENBQUNjLE9BQU8sQ0FBQyxPQUFPLEVBQUVuQixLQUFLLENBQUM7Y0FDcENVLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDTSxPQUFPLENBQUM7WUFDMUI7WUFFQXpCLE1BQUEsQ0FBQWdCLE9BQUssQ0FBQ1UsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSSxDQUFDakIsWUFBWSxFQUFFO2NBQ25CLE1BQU1XLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO2NBQ2hERixTQUFTLENBQUNHLFlBQVksQ0FBQyxrQkFBa0IsRUFBRWQsWUFBWSxDQUFDO1lBQ3pELENBQUMsRUFBRSxFQUFFLENBQUM7WUFFTixNQUFNa0IsSUFBSSxHQUFXYixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUs7WUFDNUMsT0FDQ2QsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBWSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFPLEdBQ3JCN0IsTUFBQSxDQUFBZ0IsT0FBQSxDQUFBWSxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQjdCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQVksYUFBQSxDQUFDekIsTUFBQSxDQUFBMkIsSUFBSTtjQUFDSCxJQUFJLEVBQUVBO1lBQUksRUFBSSxFQUNwQjNCLE1BQUEsQ0FBQWdCLE9BQUEsQ0FBQVksYUFBQSxDQUFDMUIsS0FBQSxDQUFBNkIsTUFBTTtjQUFDRixTQUFTLEVBQUMsVUFBVTtjQUFDSixPQUFPLEVBQUVYLE1BQU07Y0FBRWtCLFFBQVEsRUFBRWQ7WUFBWSxFQUFJLENBQ25FLENBQ0Q7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==