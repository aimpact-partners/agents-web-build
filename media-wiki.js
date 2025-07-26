System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/config", "@beyond-js/http-suite@0.1.1/api", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Config) {
      dependency_4 = _aimpactPlatform016Config;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/media-wiki"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/platform/config', dependency_4], ['@beyond-js/http-suite/api', dependency_5], ['react', dependency_6]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-med-wiki",
        "vspecifier": "@aimpact/platform@0.1.6/media-wiki",
        "is": "page",
        "route": "/media-wiki"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/media-wiki');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1927493790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1952546387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          class StoreManager {
            #api;
            constructor() {
              console.log(1, _config.default.params.apis.playground);
              this.#api = new _api.Api(_config.default.params.apis.playground);
            }
            async searchMediaWiki(query) {
              try {
                const response = await this.#api.get('/media-wiki', {
                  search: query
                });
                const responseData = response.data;
                return responseData;
              } catch (error) {
                throw new Error(`Failed to search MediaWiki: ${error instanceof Error ? error.message : 'Unknown error'}`);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4024777944,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          /*bundle*/
          function View({
            store
          }) {
            const [query, setQuery] = React.useState('');
            const [results, setResults] = React.useState([]);
            const [loading, setLoading] = React.useState(false);
            const [error, setError] = React.useState('');
            const handleSearch = async () => {
              if (!query.trim()) {
                setError('Please enter a search query');
                return;
              }
              setLoading(true);
              setError('');
              setResults([]);
              try {
                const response = await store.searchMediaWiki(query);
                setResults(response);
              } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred during search');
              } finally {
                setLoading(false);
              }
            };
            const handleKeyPress = event => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            };
            const formatSnippet = snippet => {
              // Remove HTML tags and decode HTML entities
              return snippet.replace(/<[^>]*>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#039;/g, "'").replace(/&#39;/g, "'").replace(/&apos;/g, "'");
            };
            const formatDate = timestamp => {
              return new Date(timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });
            };
            return React.createElement("div", {
              className: "media-wiki-container"
            }, React.createElement("div", {
              className: "search-section"
            }, React.createElement("h1", null, "MediaWiki Search"), React.createElement("div", {
              className: "search-input-container"
            }, React.createElement("input", {
              type: "text",
              value: query,
              onChange: e => setQuery(e.target.value),
              onKeyPress: handleKeyPress,
              placeholder: "Enter your search query...",
              className: "search-input",
              disabled: loading
            }), React.createElement("button", {
              onClick: handleSearch,
              disabled: loading || !query.trim(),
              className: "search-button"
            }, loading ? 'Searching...' : 'Search'))), error && React.createElement("div", {
              className: "error-message"
            }, error), results.length > 0 && React.createElement("div", {
              className: "results-section"
            }, React.createElement("h2", null, "Search Results (", results.length, ")"), React.createElement("div", {
              className: "results-list"
            }, results.map(result => React.createElement("div", {
              key: result.pageid,
              className: "result-item"
            }, React.createElement("h3", {
              className: "result-title"
            }, result.title), React.createElement("p", {
              className: "result-snippet"
            }, formatSnippet(result.snippet)), React.createElement("div", {
              className: "result-meta"
            }, React.createElement("span", {
              className: "result-pageid"
            }, "Page ID: ", result.pageid), React.createElement("span", {
              className: "result-size"
            }, "Size: ", result.size, " bytes"), React.createElement("span", {
              className: "result-wordcount"
            }, "Words: ", result.wordcount), React.createElement("span", {
              className: "result-timestamp"
            }, "Updated: ", formatDate(result.timestamp))))))), loading && React.createElement("div", {
              className: "loading-message"
            }, "Searching..."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9hcGkiLCJhcGkiLCJjb25zdHJ1Y3RvciIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsInBsYXlncm91bmQiLCJBcGkiLCJzZWFyY2hNZWRpYVdpa2kiLCJxdWVyeSIsInJlc3BvbnNlIiwiZ2V0Iiwic2VhcmNoIiwicmVzcG9uc2VEYXRhIiwiZGF0YSIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwiUmVhY3QiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiaGFuZGxlU2VhcmNoIiwidHJpbSIsImVyciIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJmb3JtYXRTbmlwcGV0Iiwic25pcHBldCIsInJlcGxhY2UiLCJmb3JtYXREYXRlIiwidGltZXN0YW1wIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25LZXlQcmVzcyIsInBsYWNlaG9sZGVyIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwicGFnZWlkIiwidGl0bGUiLCJzaXplIiwid29yZGNvdW50Il0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS50cyIsIi8vdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJj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