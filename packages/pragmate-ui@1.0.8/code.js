System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "pragmate-ui@1.0.8/icons", "react@18.3.1", "prismjs@1.30.0", "pragmate-ui@1.0.8/toast"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CodeBox, Code, InlineCode, __beyond_pkg, hmr;
  _export({
    CodeBox: void 0,
    Code: void 0,
    InlineCode: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }, function (_pragmateUi108Toast) {
      dependency_5 = _pragmateUi108Toast;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["tippy.js", "6.3.7"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/code"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['pragmate-ui/icons', dependency_2], ['react', dependency_3], ['prismjs', dependency_4], ['pragmate-ui/toast', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/code');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./clipboard
      ***************************/
      ims.set('./clipboard', {
        hash: 1917992420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useClick = require("./use-click");
          function Clipboard({
            text
          }) {
            const [ref, onClick] = (0, _useClick.useClick)();
            return _react.default.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, _react.default.createElement(_icons.IconButton, {
              title: 'copy',
              icon: 'copy'
            }), _react.default.createElement("span", {
              className: 'action-copied'
            }, "Copied"));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./code-box
      **************************/

      ims.set('./code-box', {
        hash: 2123332791,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CodeBox = CodeBox;
          var _react = require("react");
          var _code = require("./code");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function CodeBox({
            title,
            language,
            children
          }) {
            return _react.default.createElement("div", {
              className: 'code__box'
            }, _react.default.createElement("header", null, _react.default.createElement("div", {
              className: 'tab active'
            }, title), _react.default.createElement(_clipboard.Clipboard, {
              text: children
            })), _react.default.createElement("section", {
              className: 'box__code'
            }, _react.default.createElement(_code.Code, {
              language: language,
              clipboard: false
            }, children)));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 1110291450,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var _react = require("react");
          var Prism = require("prismjs");
          var _clipboard = require("./clipboard");
          /*bundle*/
          function Code({
            language = 'typescript',
            children,
            clipboard = true
          }) {
            const createMarkup = () => {
              if (!children) {
                return {
                  __html: ''
                };
              }
              const html = Prism.highlight(children, Prism.languages.javascript, language);
              return {
                __html: html
              };
            };
            const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("pre", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            }), clipboard && _react.default.createElement(_clipboard.Clipboard, {
              text: children
            }));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./inline
      ************************/

      ims.set('./inline', {
        hash: 1462049212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InlineCode = InlineCode;
          var _react = require("react");
          /*bundle*/
          function InlineCode({
            children
          }) {
            return _react.default.createElement("code", {
              className: "inline__code"
            }, children);
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-click
      ***************************/

      ims.set('./use-click', {
        hash: 3962409993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClick = useClick;
          var _react = require("react");
          var _toast = require("pragmate-ui/toast");
          function useClick() {
            const ref = _react.default.useRef(null);
            const polyfill = text => {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              // Avoid scrolling to bottom
              textArea.style.top = '0';
              textArea.style.left = '0';
              textArea.style.position = 'fixed';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log('Fallback: Copying text command was ' + msg);
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
              }
            };
            const onClick = async event => {
              const target = event.currentTarget;
              _toast.toast.info('copied');
              const text = target.dataset.text;
              if (!navigator.clipboard) {
                return polyfill(text);
              }
              try {
                await navigator.clipboard.writeText(text);
                const span = ref.current.querySelector('.action-copied');
                span.classList.add('show');
                window.setTimeout(() => {
                  span.classList.add('hide');
                  window.setTimeout(() => span.classList.remove('show', 'hide'), 300);
                }, 500);
              } catch (e) {
                console.log('some error', e);
              }
            };
            return [ref, onClick];
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-box",
        "from": "CodeBox",
        "name": "CodeBox"
      }, {
        "im": "./code",
        "from": "Code",
        "name": "Code"
      }, {
        "im": "./inline",
        "from": "InlineCode",
        "name": "InlineCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CodeBox') && _export("CodeBox", CodeBox = require ? require('./code-box').CodeBox : value);
        (require || prop === 'Code') && _export("Code", Code = require ? require('./code').Code : value);
        (require || prop === 'InlineCode') && _export("InlineCode", InlineCode = require ? require('./inline').InlineCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWNvbnMiLCJyZXF1aXJlIiwiX3JlYWN0IiwiX3VzZUNsaWNrIiwiQ2xpcGJvYXJkIiwidGV4dCIsInJlZiIsIm9uQ2xpY2siLCJ1c2VDbGljayIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbkJ1dHRvbiIsInRpdGxlIiwiaWNvbiIsIl9jb2RlIiwiX2NsaXBib2FyZCIsIkNvZGVCb3giLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiQ29kZSIsImNsaXBib2FyZCIsIlByaXNtIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIklubGluZUNvZGUiLCJfdG9hc3QiLCJ1c2VSZWYiLCJwb2x5ZmlsbCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidG9wIiwibGVmdCIsInBvc2l0aW9uIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZm9jdXMiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ0b2FzdCIsImluZm8iLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiXSwic291cmNlcyI6WyIvL3RzL2NsaXBib2FyZC50c3giLCIvL3RzL2NvZGUtYm94LnRzeCIsIi8vdHMvY29kZS50c3giLCIvL3RzL2lubGluZS50c3giLCIvL3RzL3VzZS1jbGljay50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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