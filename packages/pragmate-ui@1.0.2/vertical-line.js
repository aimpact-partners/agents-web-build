System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "pragmate-ui@1.0.2/base", "react@18.3.1", "pragmate-ui@1.0.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, VerticalLine, __beyond_pkg, hmr;
  _export("VerticalLine", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_pragmateUi102Base) {
      dependency_2 = _pragmateUi102Base;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_pragmateUi102Icons) {
      dependency_4 = _pragmateUi102Icons;
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
          "vspecifier": "pragmate-ui@1.0.2/vertical-line"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['pragmate-ui/base', dependency_2], ['react', dependency_3], ['pragmate-ui/icons', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/vertical-line');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 2671738761,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 250329619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VerticalLine = VerticalLine;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          /* bundle */
          function VerticalLine({
            events,
            variant = 'primary'
          }) {
            let cls = variant ? `timeline-event__content--icon ${variant}` : 'timeline-event__content--icon';
            const output = events.map((event, index) => _react.default.createElement("div", {
              key: index,
              className: "timeline-event"
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_icons.Icon, {
              icon: event.icon
            })), _react.default.createElement("div", {
              className: "timeline-event__content--block"
            }, _react.default.createElement("header", {
              className: "item-header"
            }, _react.default.createElement("h3", {
              className: "item-header__h3"
            }, event.title), _react.default.createElement("span", {
              className: "item-header__span"
            }, event.date)), _react.default.createElement("p", {
              className: "block-description"
            }, event.description))));
            return _react.default.createElement("div", {
              className: "pui__vertical-line"
            }, _react.default.createElement("div", {
              className: "line"
            }), _react.default.createElement("div", {
              className: "container-timeline"
            }, output));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "VerticalLine",
        "name": "VerticalLine"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'VerticalLine') && _export("VerticalLine", VerticalLine = require ? require('./index').VerticalLine : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJWZXJ0aWNhbExpbmUiLCJldmVudHMiLCJ2YXJpYW50IiwiY2xzIiwib3V0cHV0IiwibWFwIiwiZXZlbnQiLCJpbmRleCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJ0aXRsZSIsImRhdGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VzIjpbIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUdPO1VBQVksU0FBVUUsWUFBWUEsQ0FBQztZQUFDQyxNQUFNO1lBQUVDLE9BQU8sR0FBRztVQUFTLENBQVM7WUFDOUUsSUFBSUMsR0FBRyxHQUFHRCxPQUFPLEdBQUcsaUNBQWlDQSxPQUFPLEVBQUUsR0FBRywrQkFBK0I7WUFFaEcsTUFBTUUsTUFBTSxHQUFHSCxNQUFNLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssS0FDdENWLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtDLEdBQUcsRUFBRUgsS0FBSztjQUFFSSxTQUFTLEVBQUM7WUFBZ0IsR0FDMUNkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBRVI7WUFBRyxHQUNsQk4sTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBYSxJQUFJO2NBQUNDLElBQUksRUFBRVAsS0FBSyxDQUFDTztZQUFJLEVBQUksQ0FDckIsRUFDTmhCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFnQyxHQUM5Q2QsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBUUUsU0FBUyxFQUFDO1lBQWEsR0FDOUJkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUlFLFNBQVMsRUFBQztZQUFpQixHQUFFTCxLQUFLLENBQUNRLEtBQUssQ0FBTSxFQUNsRGpCLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQU1FLFNBQVMsRUFBQztZQUFtQixHQUFFTCxLQUFLLENBQUNTLElBQUksQ0FBUSxDQUMvQyxFQUNUbEIsTUFBQSxDQUFBVyxPQUFBLENBQUFDLGFBQUE7Y0FBR0UsU0FBUyxFQUFDO1lBQW1CLEdBQUVMLEtBQUssQ0FBQ1UsV0FBVyxDQUFLLENBQ25ELENBRVAsQ0FBQztZQUNGLE9BQ0NuQixNQUFBLENBQUFXLE9BQUEsQ0FBQUMsYUFBQTtjQUFLRSxTQUFTLEVBQUM7WUFBb0IsR0FDbENkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFNLEVBQU8sRUFDNUJkLE1BQUEsQ0FBQVcsT0FBQSxDQUFBQyxhQUFBO2NBQUtFLFNBQVMsRUFBQztZQUFvQixHQUFFUCxNQUFNLENBQU8sQ0FDN0M7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==