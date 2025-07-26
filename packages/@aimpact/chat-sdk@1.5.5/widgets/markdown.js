System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "marked-mangle@1.1.10", "marked@15.0.12", "marked-gfm-heading-id@4.1.1", "katex@0.16.21", "highlight.js@11.11.1", "marked-highlight@2.2.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Markdown, useMarked, __beyond_pkg, hmr;
  _export({
    Markdown: void 0,
    useMarked: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_markedMangle2) {
      dependency_3 = _markedMangle2;
    }, function (_marked2) {
      dependency_4 = _marked2;
    }, function (_markedGfmHeadingId2) {
      dependency_5 = _markedGfmHeadingId2;
    }, function (_katex2) {
      dependency_6 = _katex2;
    }, function (_highlightJs) {
      dependency_7 = _highlightJs;
    }, function (_markedHighlight2) {
      dependency_8 = _markedHighlight2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/widgets/markdown"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['marked-mangle', dependency_3], ['marked', dependency_4], ['marked-gfm-heading-id', dependency_5], ['katex', dependency_6], ['highlight.js', dependency_7], ['marked-highlight', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/widgets/markdown');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 3669400498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Markdown = Markdown;
          var _react = require("react");
          var _useMarked = require("./use-marked");
          /*bundle */
          function Markdown({
            content,
            children,
            ...props
          }) {
            const {
              output
            } = (0, _useMarked.useMarked)(content ?? children);
            const attrs = {
              ...props
            };
            if (output === '') return null;
            return _react.default.createElement("div", {
              ...attrs,
              dangerouslySetInnerHTML: {
                __html: output
              }
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/

      ims.set('./use-marked', {
        hash: 2698766898,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedGfmHeadingId = require("marked-gfm-heading-id");
          var _katex = require("katex");
          var _highlight = require("highlight.js");
          var _markedHighlight = require("marked-highlight");
          // Import highlight.js
          // Import marked-highlight
          _marked.marked.use((0, _markedMangle.mangle)());
          const options = {
            prefix: 'my-prefix-'
          };
          _marked.marked.use((0, _markedGfmHeadingId.gfmHeadingId)(options));
          /*bundle*/
          function useMarked(content) {
            // const [output, setOutput] = React.useState<string>('');
            function render(content) {
              const options = {
                breaks: false // Disable line breaks for Markdown
              };
              _marked.marked.setOptions(options);
              _marked.marked.use((0, _markedHighlight.markedHighlight)({
                // async: true,
                langPrefix: 'language-',
                highlight(code, lang) {
                  const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                  return _highlight.default.highlight(code, {
                    language
                  }).value;
                }
              }));
              // 1. Temporarily replace inline and block math expressions with placeholders
              let placeholderCounter = 0;
              const mathPlaceholders = {};
              const placeholderPrefix = 'MATH_PLACEHOLDER_';
              content = content.replace(/\\\((.*?)\\\)/g, (match, mathContent) => {
                const placeholder = `${placeholderPrefix}${placeholderCounter++}`;
                mathPlaceholders[placeholder] = _katex.default.renderToString(mathContent, {
                  displayMode: false
                });
                return placeholder;
              });
              content = content.replace(/\\\[(.*?)\\\]/gs, (match, mathContent) => {
                const placeholder = `${placeholderPrefix}${placeholderCounter++}`;
                mathPlaceholders[placeholder] = _katex.default.renderToString(mathContent, {
                  displayMode: true
                });
                return placeholder;
              });
              // 2. Pass the content through marked
              let output = (0, _marked.marked)(content, {
                breaks: false
              });
              // 3. Replace placeholders with actual rendered KaTeX
              Object.keys(mathPlaceholders).forEach(placeholder => {
                output = output.replace(new RegExp(placeholder, 'g'), mathPlaceholders[placeholder]);
              });
              return output;
            }
            // React.useEffect(() => {}, [content]);
            return {
              ready: !!content,
              output: render(content ?? '')
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./markdown",
        "from": "Markdown",
        "name": "Markdown"
      }, {
        "im": "./use-marked",
        "from": "useMarked",
        "name": "useMarked"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Markdown') && _export("Markdown", Markdown = require ? require('./markdown').Markdown : value);
        (require || prop === 'useMarked') && _export("useMarked", useMarked = require ? require('./use-marked').useMarked : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwiY29udGVudCIsImNoaWxkcmVuIiwicHJvcHMiLCJvdXRwdXQiLCJ1c2VNYXJrZWQiLCJhdHRycyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfbWFya2VkTWFuZ2xlIiwiX21hcmtlZCIsIl9tYXJrZWRHZm1IZWFkaW5nSWQiLCJfa2F0ZXgiLCJfaGlnaGxpZ2h0IiwiX21hcmtlZEhpZ2hsaWdodCIsIm1hcmtlZCIsInVzZSIsIm1hbmdsZSIsIm9wdGlvbnMiLCJwcmVmaXgiLCJnZm1IZWFkaW5nSWQiLCJyZW5kZXIiLCJicmVha3MiLCJzZXRPcHRpb25zIiwibWFya2VkSGlnaGxpZ2h0IiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwicGxhY2Vob2xkZXJDb3VudGVyIiwibWF0aFBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyUHJlZml4IiwicmVwbGFjZSIsIm1hdGNoIiwibWF0aENvbnRlbnQiLCJwbGFjZWhvbGRlciIsInJlbmRlclRvU3RyaW5nIiwiZGlzcGxheU1vZGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIlJlZ0V4cCIsInJlYWR5Il0sInNvdXJjZXMiOlsiL3RzL21hcmtkb3duLnRzeCIsIi90cy91c2UtbWFya2VkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxVQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLFNBQVVFLFFBQVFBLENBQUM7WUFBRUMsT0FBTztZQUFFQyxRQUFRO1lBQUUsR0FBR0M7VUFB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