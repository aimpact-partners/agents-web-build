System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/config", "@beyond-js/http-suite@0.1.1/api", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_3 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactPlatform016Config) {
      dependency_4 = _aimpactPlatform016Config;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_5 = _beyondJsHttpSuite011Api;
    }, function (_react) {
      dependency_6 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
        hash: 2010128736,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImhpZGUiLCJleHBvcnRzIiwiX2NvbmZpZyIsIl9hcGkiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwicGxheWdyb3VuZCIsInNlYXJjaE1lZGlhV2lraSIsInF1ZXJ5IiwicmVzcG9uc2UiLCJnZXQiLCJzZWFyY2giLCJyZXNwb25zZURhdGEiLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsIm1lc3NhZ2UiLCJSZWFjdCIsInNldFF1ZXJ5IiwidXNlU3RhdGUiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJoYW5kbGVTZWFyY2giLCJ0cmltIiwiZXJyIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsImZvcm1hdFNuaXBwZXQiLCJzbmlwcGV0IiwicmVwbGFjZSIsImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleVByZXNzIiwicGxhY2Vob2xkZXIiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHQiLCJwYWdlaWQiLCJ0aXRsZSIsInNpemUiLCJ3b3JkY291bnQiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlLnRzIiwiLy90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxs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