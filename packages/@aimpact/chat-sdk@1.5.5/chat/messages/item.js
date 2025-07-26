System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@aimpact/chat-sdk@1.5.5/core", "@aimpact/chat-sdk@1.5.5/shared/hooks", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "react@18.3.1", "dayjs@1.11.13"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Message, __beyond_pkg, hmr;
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
    }, function (_dayjs) {
      dependency_6 = _dayjs;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.5/chat/messages/item"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['@aimpact/chat-sdk/core', dependency_2], ['@aimpact/chat-sdk/shared/hooks', dependency_3], ['@aimpact/chat-sdk/widgets/markdown', dependency_4], ['react', dependency_5], ['dayjs', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/chat/messages/item');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4171736576,
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
            setUpdateScroll
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG9va3MiLCJyZXF1aXJlIiwiX21hcmtkb3duIiwiUmVhY3QiLCJNZXNzYWdlIiwibWVzc2FnZSIsInNldFVwZGF0ZVNjcm9sbCIsInVzZVN0b3JlIiwidXNlRWZmZWN0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJjb250ZW50IiwicmVuZGVyQ29udGVudCIsInN0cmVhbWluZyIsIm1ldGFEYXRhU3RhcnRlZCIsImNyZWF0ZUVsZW1lbnQiLCJNYXJrZG93biIsImhpZ2hsaWdodExhc3RXb3JkIiwic3RyIiwid29yZHMiLCJ0cmltIiwic3BsaXQiLCJsZW5ndGgiLCJsYXN0V29yZCIsInBvcCIsImJhc2UiLCJqb2luIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0cmFuc2NyaWJpbmciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbIi8vdHMvaW5kZXgudHN4IiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsS0FBQSxHQUFBRixPQUFBO1VBR087VUFBVSxTQUFVRyxPQUFPQSxDQUFDO1lBQ2xDQyxPQUFPO1lBQ1BDO1VBQWUsQ0FLZjtZQUNBLElBQUFOLE1BQUEsQ0FBQU8sUUFBUSxFQUFDRixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFFdEZGLEtBQUssQ0FBQ0ssU0FBUyxDQUFDLE1BQUs7Y0FDcEJGLGVBQWUsQ0FBQ0csV0FBVyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztjQUVsQztZQUNELENBQUMsRUFBRSxDQUFDTCxPQUFPLENBQUNNLE9BQU8sRUFBRUwsZUFBZSxDQUFDLENBQUM7WUFFdEMsTUFBTU0sYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUIsSUFBSSxDQUFDUCxPQUFPLENBQUNRLFNBQVMsSUFBSVIsT0FBTyxDQUFDUyxlQUFlLEVBQUU7Z0JBQ2xELE9BQU9YLEtBQUEsQ0FBQVksYUFBQSxDQUFDYixTQUFBLENBQUFjLFFBQVE7a0JBQUNMLE9BQU8sRUFBRU4sT0FBTyxDQUFDTTtnQkFBTyxFQUFJOztjQUc5QyxTQUFTTSxpQkFBaUJBLENBQUNDLEdBQUc7Z0JBQzdCLElBQUksQ0FBQ0EsR0FBRyxJQUFJLE9BQU9BLEdBQUcsS0FBSyxRQUFRLEVBQUUsT0FBTyw0Q0FBNEM7Z0JBRXhGLE1BQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxJQUFJLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDckMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU8sNENBQTRDO2dCQUUzRSxNQUFNQyxRQUFRLEdBQUdKLEtBQUssQ0FBQ0ssR0FBRyxFQUFFO2dCQUM1QixNQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDTixJQUFJLEVBQUU7Z0JBRW5DLE9BQU8sR0FBR0ssSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsbUNBQW1DRixRQUFRLFlBQVk7Y0FDeEY7Y0FFQSxPQUNDcEIsS0FBQSxDQUFBWSxhQUFBLENBQUFaLEtBQUEsQ0FBQXdCLFFBQUEsUUFDQ3hCLEtBQUEsQ0FBQVksYUFBQTtnQkFBS2EsU0FBUyxFQUFDO2NBQWUsR0FDNUIsQ0FBQ3ZCLE9BQU8sQ0FBQ00sT0FBTyxLQUFLTixPQUFPLENBQUNRLFNBQVMsSUFBSVIsT0FBTyxDQUFDd0IsWUFBWSxDQUFDLEdBQy9EMUIsS0FBQSxDQUFBWSxhQUFBO2dCQUFLYSxTQUFTLEVBQUM7Y0FBd0IsR0FDdEN6QixLQUFBLENBQUFZLGFBQUE7Z0JBQUthLFNBQVMsRUFBQztjQUFRLEVBQUcsQ0FDckIsR0FFTnpCLEtBQUEsQ0FBQVksYUFBQSxDQUFDYixTQUFBLENBQUFjLFFBQVE7Z0JBQUNMLE9BQU8sRUFBRU0saUJBQWlCLENBQUNaLE9BQU8sQ0FBQ00sT0FBTztjQUFDLEVBQ3JELENBQ0ksQ0FFSjtZQUVMLENBQUM7WUFFRCxPQUFPUixLQUFBLENBQUFZLGFBQUE7Y0FBS2EsU0FBUyxFQUFDO1lBQWtCLEdBQUVoQixhQUFhLEVBQUUsQ0FBTztVQUNqRTs7Ozs7Ozs7Ozs7VUN4REE7O1VBRUFrQixNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=