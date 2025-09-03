System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/components"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Dialog, __beyond_pkg, hmr;
  _export("Dialog", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/components/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/components', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/components/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 4250856443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dialog = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const {
            forwardRef
          } = _react.default;
          /*bundle */
          const Dialog = exports.Dialog = forwardRef(function Dialog({
            children,
            closable,
            onClose
          }, ref) {
            return _react.default.createElement("dialog", {
              ref: ref
            }, closable && _react.default.createElement(_icons.IconButton, {
              icon: 'close',
              className: 'close',
              onClick: onClose
            }), children);
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Dialog",
        "name": "Dialog"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Dialog') && _export("Dialog", Dialog = require ? require('./index').Dialog : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiZm9yd2FyZFJlZiIsImRlZmF1bHQiLCJEaWFsb2ciLCJleHBvcnRzIiwiY2hpbGRyZW4iLCJjbG9zYWJsZSIsIm9uQ2xvc2UiLCJyZWYiLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImljb24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZXMiOlsiLy90cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBRUEsTUFBTTtZQUFFRTtVQUFVLENBQUUsR0FBR0gsTUFBQSxDQUFBSSxPQUFLO1VBT3JCO1VBQVksTUFBTUMsTUFBTSxHQUFBQyxPQUFBLENBQUFELE1BQUEsR0FBR0YsVUFBVSxDQUFDLFNBQVNFLE1BQU1BLENBQzNEO1lBQUVFLFFBQVE7WUFBRUMsUUFBUTtZQUFFQztVQUFPLENBQVUsRUFDdkNDLEdBQWlDO1lBRWpDLE9BQ0NWLE1BQUEsQ0FBQUksT0FBQSxDQUFBTyxhQUFBO2NBQVFELEdBQUcsRUFBRUE7WUFBRyxHQUNkRixRQUFRLElBQUlSLE1BQUEsQ0FBQUksT0FBQSxDQUFBTyxhQUFBLENBQUNULE1BQUEsQ0FBQVUsVUFBVTtjQUFDQyxJQUFJLEVBQUMsT0FBTztjQUFDQyxTQUFTLEVBQUMsT0FBTztjQUFDQyxPQUFPLEVBQUVOO1lBQU8sRUFBSSxFQUMzRUYsUUFBUSxDQUNEO1VBRVgsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119