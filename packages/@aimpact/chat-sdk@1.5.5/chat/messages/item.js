System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/shared/hooks", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
  _export("Message", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_aimpactChatSdk155Core) {
      dependency_2 = _aimpactChatSdk155Core;
    }, function (_aimpactChatSdk155SharedHooks) {
      dependency_3 = _aimpactChatSdk155SharedHooks;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_4 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_react) {
      dependency_5 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/chat-sdk/core', dependency_2], ['@aimpact/chat-sdk/shared/hooks', dependency_3], ['@aimpact/chat-sdk/widgets/markdown', dependency_4], ['react', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 536474529,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var React = require("react");
          /*bundle*/
          function Message({
            message,
            setUpdateScroll,
            texts
          }) {
            (0, _hooks.useStore)(message, ['streaming', 'change', 'transcribing.changed', 'metadata.started']);
            React.useEffect(() => {
              setUpdateScroll(performance.now());
              // streaming text animation
            }, [message.content, setUpdateScroll]);
            const renderContent = () => {
              if (!message.streaming || message.metaDataStarted) {
                return React.createElement(_markdown.Markdown, {
                  content: message.content
                });
              }
              function highlightLastWord(str) {
                if (!str || typeof str !== 'string') return '<span class="streaming-content">...</span>';
                const words = str.trim().split(/\s+/);
                if (words.length === 0) return '<span class="streaming-content">...</span>';
                const lastWord = words.pop();
                const base = words.join(' ').trim();
                return `${base ? base + ' ' : ''}<span class="streaming-content">${lastWord}...</span>`;
              }
              return React.createElement(React.Fragment, null, React.createElement("div", {
                className: "message__data"
              }, !message.content && (message.streaming || message.transcribing) ? React.createElement("div", {
                className: "message__data__loading"
              }, React.createElement("div", {
                className: "loader"
              })) : React.createElement(_markdown.Markdown, {
                content: highlightLastWord(message.content)
              })));
            };
            return React.createElement("div", {
              className: "message__content"
            }, renderContent());
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3592763005,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Message') && _export("Message", Message = require ? require('./index').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX21hcmtkb3duIiwiUmVhY3QiLCJNZXNzYWdlIiwibWVzc2FnZSIsInNldFVwZGF0ZVNjcm9sbCIsInRleHRzIiwidXNlU3RvcmUiLCJ1c2VFZmZlY3QiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnRlbnQiLCJyZW5kZXJDb250ZW50Iiwic3RyZWFtaW5nIiwibWV0YURhdGFTdGFydGVkIiwiY3JlYXRlRWxlbWVudCIsIk1hcmtkb3duIiwiaGlnaGxpZ2h0TGFzdFdvcmQiLCJzdHIiLCJ3b3JkcyIsInRyaW0iLCJzcGxpdCIsImxlbmd0aCIsImxhc3RXb3JkIiwicG9wIiwiYmFzZSIsImpvaW4iLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInRyYW5zY3JpYmluZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxTQUFVRyxPQUFPQSxDQUFDO1lBQ2xDQyxPQUFPO1lBQ1BDLGVBQWU7WUFDZkM7VUFBSyxDQUtMO1lBQ0EsSUFBQVAsTUFBQSxDQUFBUSxRQUFRLEVBQUNILE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUV0RkYsS0FBSyxDQUFDTSxTQUFTLENBQUMsTUFBSztjQUNwQkgsZUFBZSxDQUFDSSxXQUFXLENBQUNDLEdBQUcsRUFBRSxDQUFDO2NBRWxDO1lBQ0QsQ0FBQyxFQUFFLENBQUNOLE9BQU8sQ0FBQ08sT0FBTyxFQUFFTixlQUFlLENBQUMsQ0FBQztZQUV0QyxNQUFNTyxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQixJQUFJLENBQUNSLE9BQU8sQ0FBQ1MsU0FBUyxJQUFJVCxPQUFPLENBQUNVLGVBQWUsRUFBRTtnQkFDbEQsT0FBT1osS0FBQSxDQUFBYSxhQUFBLENBQUNkLFNBQUEsQ0FBQWUsUUFBUTtrQkFBQ0wsT0FBTyxFQUFFUCxPQUFPLENBQUNPO2dCQUFPLEVBQUk7O2NBRzlDLFNBQVNNLGlCQUFpQkEsQ0FBQ0MsR0FBRztnQkFDN0IsSUFBSSxDQUFDQSxHQUFHLElBQUksT0FBT0EsR0FBRyxLQUFLLFFBQVEsRUFBRSxPQUFPLDRDQUE0QztnQkFFeEYsTUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNyQyxJQUFJRixLQUFLLENBQUNHLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBTyw0Q0FBNEM7Z0JBRTNFLE1BQU1DLFFBQVEsR0FBR0osS0FBSyxDQUFDSyxHQUFHLEVBQUU7Z0JBQzVCLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNOLElBQUksRUFBRTtnQkFFbkMsT0FBTyxHQUFHSyxJQUFJLEdBQUdBLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxtQ0FBbUNGLFFBQVEsWUFBWTtjQUN4RjtjQUVBLE9BQ0NyQixLQUFBLENBQUFhLGFBQUEsQ0FBQWIsS0FBQSxDQUFBeUIsUUFBQSxRQUNDekIsS0FBQSxDQUFBYSxhQUFBO2dCQUFLYSxTQUFTLEVBQUM7Y0FBZSxHQUM1QixDQUFDeEIsT0FBTyxDQUFDTyxPQUFPLEtBQUtQLE9BQU8sQ0FBQ1MsU0FBUyxJQUFJVCxPQUFPLENBQUN5QixZQUFZLENBQUMsR0FDL0QzQixLQUFBLENBQUFhLGFBQUE7Z0JBQUthLFNBQVMsRUFBQztjQUF3QixHQUN0QzFCLEtBQUEsQ0FBQWEsYUFBQTtnQkFBS2EsU0FBUyxFQUFDO2NBQVEsRUFBRyxDQUNyQixHQUVOMUIsS0FBQSxDQUFBYSxhQUFBLENBQUNkLFNBQUEsQ0FBQWUsUUFBUTtnQkFBQ0wsT0FBTyxFQUFFTSxpQkFBaUIsQ0FBQ2IsT0FBTyxDQUFDTyxPQUFPO2NBQUMsRUFDckQsQ0FDSSxDQUVKO1lBRUwsQ0FBQztZQUVELE9BQU9ULEtBQUEsQ0FBQWEsYUFBQTtjQUFLYSxTQUFTLEVBQUM7WUFBa0IsR0FBRWhCLGFBQWEsRUFBRSxDQUFPO1VBQ2pFOzs7Ozs7Ozs7OztVQ3hEQTs7VUFFQWtCLE1BQUEsQ0FBQUMsY0FBQSxDQUFBQyxPQUFBO1lBQ0FDLEtBQUE7VUFDQSIsImlnbm9yZUxpc3QiOltdfQ==