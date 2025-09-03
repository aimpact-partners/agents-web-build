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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.8"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwiY29udGVudCIsImNoaWxkcmVuIiwicHJvcHMiLCJvdXRwdXQiLCJ1c2VNYXJrZWQiLCJhdHRycyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfbWFya2VkTWFuZ2xlIiwiX21hcmtlZCIsIl9tYXJrZWRHZm1IZWFkaW5nSWQiLCJfa2F0ZXgiLCJfaGlnaGxpZ2h0IiwiX21hcmtlZEhpZ2hsaWdodCIsIm1hcmtlZCIsInVzZSIsIm1hbmdsZSIsIm9wdGlvbnMiLCJwcmVmaXgiLCJnZm1IZWFkaW5nSWQiLCJyZW5kZXIiLCJicmVha3MiLCJzZXRPcHRpb25zIiwibWFya2VkSGlnaGxpZ2h0IiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwicGxhY2Vob2xkZXJDb3VudGVyIiwibWF0aFBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyUHJlZml4IiwicmVwbGFjZSIsIm1hdGNoIiwibWF0aENvbnRlbnQiLCJwbGFjZWhvbGRlciIsInJlbmRlclRvU3RyaW5nIiwiZGlzcGxheU1vZGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIlJlZ0V4cCIsInJlYWR5Il0sInNvdXJjZXMiOlsiLy90cy9tYXJrZG93bi50c3giLCIvL3RzL3VzZS1tYXJrZWQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFVBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsU0FBVUUsUUFBUUEsQ0FBQztZQUFFQyxPQUFPO1lBQUVDLFFBQVE7WUFBRSxHQUFHQztV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