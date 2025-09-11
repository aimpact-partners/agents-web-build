System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "clsx@2.1.1", "pragmate-ui@1.0.8/breadcrumb", "pragmate-ui@1.0.8/spinner"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Divider, AppLoader, PageBody, PageHeader, PageLayout, Page, PageSkeleton, ProcessContainer, Range, SkeletonText, __beyond_pkg, hmr;
  _export({
    Divider: void 0,
    AppLoader: void 0,
    PageBody: void 0,
    PageHeader: void 0,
    PageLayout: void 0,
    Page: void 0,
    PageSkeleton: void 0,
    ProcessContainer: void 0,
    Range: void 0,
    SkeletonText: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_clsx2) {
      dependency_3 = _clsx2;
    }, function (_pragmateUi108Breadcrumb) {
      dependency_4 = _pragmateUi108Breadcrumb;
    }, function (_pragmateUi108Spinner) {
      dependency_5 = _pragmateUi108Spinner;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/components/ui"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['clsx', dependency_3], ['pragmate-ui/breadcrumb', dependency_4], ['pragmate-ui/spinner', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/components/ui');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./divider
      *************************/
      ims.set('./divider', {
        hash: 3217694445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Divider = void 0;
          var _react = require("react");
          /* bundle */
          const Divider = ({
            color,
            height,
            margin
          }) => {
            const styles = {
              borderBottom: `1px solid ${color}`,
              height,
              margin
            };
            return _react.default.createElement("div", {
              className: 'divider',
              style: styles
            });
          };
          exports.Divider = Divider;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 479206763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "AppLoader", {
            enumerable: true,
            get: function () {
              return _loader.AppLoader;
            }
          });
          Object.defineProperty(exports, "Divider", {
            enumerable: true,
            get: function () {
              return _divider.Divider;
            }
          });
          Object.defineProperty(exports, "Page", {
            enumerable: true,
            get: function () {
              return _page.Page;
            }
          });
          Object.defineProperty(exports, "PageBody", {
            enumerable: true,
            get: function () {
              return _body.PageBody;
            }
          });
          Object.defineProperty(exports, "PageHeader", {
            enumerable: true,
            get: function () {
              return _header.PageHeader;
            }
          });
          Object.defineProperty(exports, "PageLayout", {
            enumerable: true,
            get: function () {
              return _page.PageLayout;
            }
          });
          Object.defineProperty(exports, "PageSkeleton", {
            enumerable: true,
            get: function () {
              return _skeleton.PageSkeleton;
            }
          });
          Object.defineProperty(exports, "ProcessContainer", {
            enumerable: true,
            get: function () {
              return _processContainer.ProcessContainer;
            }
          });
          Object.defineProperty(exports, "Range", {
            enumerable: true,
            get: function () {
              return _range.Range;
            }
          });
          Object.defineProperty(exports, "SkeletonText", {
            enumerable: true,
            get: function () {
              return _skeletonText.SkeletonText;
            }
          });
          var _divider = require("./divider");
          var _loader = require("./loader");
          var _processContainer = require("./process-container");
          var _range = require("./range");
          var _skeletonText = require("./skeleton-text");
          var _page = require("./page");
          var _header = require("./page/header");
          var _body = require("./page/body");
          var _skeleton = require("./page/skeleton");
        }
      });

      /************************
      INTERNAL MODULE: ./loader
      ************************/

      ims.set('./loader', {
        hash: 1998167168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AppLoader = AppLoader;
          var _react = require("react");
          /*bundle*/
          function AppLoader() {
            return _react.default.createElement("div", {
              className: "process__loader"
            }, _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square"
            }), _react.default.createElement("div", {
              className: "square last"
            }), _react.default.createElement("div", {
              className: "square clear"
            }), _react.default.createElement("div", {
              className: "square "
            }), _react.default.createElement("div", {
              className: "square last"
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./page/body
      ***************************/

      ims.set('./page/body', {
        hash: 1422627034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageBody = PageBody;
          var _react = require("react");
          var _clsx = require("clsx");
          /*bundle*/
          function PageBody({
            children,
            className
          }) {
            return _react.default.createElement("div", {
              className: (0, _clsx.default)('page__body', className)
            }, children);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./page/header
      *****************************/

      ims.set('./page/header', {
        hash: 3209096755,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageHeader = PageHeader;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _clsx = require("clsx");
          /*bundle*/
          function PageHeader({
            children,
            breadcrumb,
            title,
            className
          }) {
            return _react.default.createElement("header", {
              className: (0, _clsx.default)('page__header', className)
            }, _react.default.createElement("div", {
              className: "page__header-title"
            }, title && _react.default.createElement("h2", {
              className: "page__header-title"
            }, title), breadcrumb && _react.default.createElement(_breadcrumb.BreadCrumb, {
              items: breadcrumb
            })), children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./page/index
      ****************************/

      ims.set('./page/index', {
        hash: 1252143628,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = void 0;
          exports.PageLayout = PageLayout;
          var _react = require("react");
          var _skeleton = require("./skeleton");
          var _body = require("./body");
          var _header = require("./header");
          var _clsx = require("clsx");
          /*bundle*/
          function PageLayout({
            children,
            ready,
            className
          }) {
            if (!ready) return _react.default.createElement(_skeleton.PageSkeleton, null);
            return _react.default.createElement("div", {
              className: (0, _clsx.default)('page-wrapper', className)
            }, children);
          }
          /*bundle*/
          const Page = exports.Page = {
            layout: PageLayout,
            body: _body.PageBody,
            header: _header.PageHeader
          };
        }
      });

      /*******************************
      INTERNAL MODULE: ./page/skeleton
      *******************************/

      ims.set('./page/skeleton', {
        hash: 11910752,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageSkeleton = void 0;
          var _react = require("react");
          var _header = require("./header");
          var _skeletonText = require("../skeleton-text");
          /* bundle */
          const PageSkeleton = () => {
            return _react.default.createElement("div", {
              className: "page-wrapper"
            }, _react.default.createElement(_header.PageHeader, {
              className: "flex-container flex"
            }, _react.default.createElement("div", null, _react.default.createElement("div", null, _react.default.createElement(_skeletonText.SkeletonText, {
              width: "100px",
              height: "10px"
            })), _react.default.createElement("div", {
              className: "pui-breadcrumb__container"
            }, _react.default.createElement(_skeletonText.SkeletonText, {
              width: "50px",
              height: "10px"
            }), _react.default.createElement("span", {
              className: "skeleton-text"
            }, "/"), _react.default.createElement(_skeletonText.SkeletonText, {
              width: "50px",
              height: "10px"
            })))), _react.default.createElement("main", {
              className: "page-main page-main--center"
            }, _react.default.createElement("div", {
              className: "spinner-container"
            }, _react.default.createElement("div", {
              className: "line-loader"
            }))));
          };
          exports.PageSkeleton = PageSkeleton;
        }
      });

      /***********************************
      INTERNAL MODULE: ./process-container
      ***********************************/

      ims.set('./process-container', {
        hash: 841653034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProcessContainer = ProcessContainer;
          var _react = require("react");
          var _clsx = require("clsx");
          var _loader = require("./loader");
          /*bundle */
          function ProcessContainer({
            children,
            className,
            fetching
          }) {
            if (!fetching) return null;
            const cls = (0, _clsx.default)('process-container', className);
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("div", {
              className: "page__container__fetching"
            }, _react.default.createElement("div", null, _react.default.createElement(_loader.AppLoader, null), children)));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./range
      ***********************/

      ims.set('./range', {
        hash: 4158015036,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Range = void 0;
          var _react = require("react");
          /* bundle */
          const Range = ({
            title,
            value,
            name,
            max,
            min,
            step,
            inputFunction,
            children
          }) => {
            const htmlFormString = name + 'Range';
            return _react.default.createElement("section", {
              className: 'range__container'
            }, _react.default.createElement("label", {
              htmlFor: htmlFormString
            }, _react.default.createElement("h3", null, title), _react.default.createElement("input", {
              value: value,
              name: name,
              onInput: inputFunction,
              type: 'range',
              max: max,
              min: min,
              step: step
            })), children);
          };
          exports.Range = Range;
        }
      });

      /*******************************
      INTERNAL MODULE: ./skeleton-text
      *******************************/

      ims.set('./skeleton-text', {
        hash: 1805149048,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SkeletonText = SkeletonText;
          var _react = require("react");
          /*bundle*/
          function SkeletonText(props) {
            return _react.default.createElement("span", {
              className: "skeleton-text",
              style: {
                display: 'inline-block',
                width: props.width || '100%',
                height: props.height || 'var(--skeleton-text-height)',
                background: props.color || 'var(--skeleton-text-color)',
                borderRadius: props.radio || 'var(--skeleton-text-radius)'
              }
            }, _react.default.createElement("span", {
              style: {
                display: 'block'
              }
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./divider",
        "from": "Divider",
        "name": "Divider"
      }, {
        "im": "./loader",
        "from": "AppLoader",
        "name": "AppLoader"
      }, {
        "im": "./page/body",
        "from": "PageBody",
        "name": "PageBody"
      }, {
        "im": "./page/header",
        "from": "PageHeader",
        "name": "PageHeader"
      }, {
        "im": "./page/index",
        "from": "PageLayout",
        "name": "PageLayout"
      }, {
        "im": "./page/index",
        "from": "Page",
        "name": "Page"
      }, {
        "im": "./page/skeleton",
        "from": "PageSkeleton",
        "name": "PageSkeleton"
      }, {
        "im": "./process-container",
        "from": "ProcessContainer",
        "name": "ProcessContainer"
      }, {
        "im": "./range",
        "from": "Range",
        "name": "Range"
      }, {
        "im": "./skeleton-text",
        "from": "SkeletonText",
        "name": "SkeletonText"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Divider') && _export("Divider", Divider = require ? require('./divider').Divider : value);
        (require || prop === 'AppLoader') && _export("AppLoader", AppLoader = require ? require('./loader').AppLoader : value);
        (require || prop === 'PageBody') && _export("PageBody", PageBody = require ? require('./page/body').PageBody : value);
        (require || prop === 'PageHeader') && _export("PageHeader", PageHeader = require ? require('./page/header').PageHeader : value);
        (require || prop === 'PageLayout') && _export("PageLayout", PageLayout = require ? require('./page/index').PageLayout : value);
        (require || prop === 'Page') && _export("Page", Page = require ? require('./page/index').Page : value);
        (require || prop === 'PageSkeleton') && _export("PageSkeleton", PageSkeleton = require ? require('./page/skeleton').PageSkeleton : value);
        (require || prop === 'ProcessContainer') && _export("ProcessContainer", ProcessContainer = require ? require('./process-container').ProcessContainer : value);
        (require || prop === 'Range') && _export("Range", Range = require ? require('./range').Range : value);
        (require || prop === 'SkeletonText') && _export("SkeletonText", SkeletonText = require ? require('./skeleton-text').SkeletonText : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImV4cG9ydHMiLCJfZGl2aWRlciIsIl9sb2FkZXIiLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9yYW5nZSIsIl9za2VsZXRvblRleHQiLCJfcGFnZSIsIl9oZWFkZXIiLCJfYm9keSIsIl9za2VsZXRvbiIsIkFwcExvYWRlciIsIl9jbHN4IiwiUGFnZUJvZHkiLCJjaGlsZHJlbiIsIl9icmVhZGNydW1iIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsIkJyZWFkQ3J1bWIiLCJpdGVtcyIsIlBhZ2VMYXlvdXQiLCJyZWFkeSIsIlBhZ2VTa2VsZXRvbiIsIlBhZ2UiLCJsYXlvdXQiLCJib2R5IiwiaGVhZGVyIiwiU2tlbGV0b25UZXh0Iiwid2lkdGgiLCJQcm9jZXNzQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJjbHMiLCJSYW5nZSIsInZhbHVlIiwibmFtZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJpbnB1dEZ1bmN0aW9uIiwiaHRtbEZvcm1TdHJpbmciLCJodG1sRm9yIiwib25JbnB1dCIsInR5cGUiLCJwcm9wcyIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iXSwic291cmNlcyI6WyIvdHMvZGl2aWRlci50c3giLCIvdHMvaW5kZXgudHMiLCIvdHMvbG9hZGVyLnRzeCIsIi90cy9wYWdlL2JvZHkudHN4IiwiL3RzL3BhZ2UvaGVhZGVyLnRzeCIsIi90cy9wYWdlL2luZGV4LnRzeCIsIi90cy9wYWdlL3NrZWxldG9uLnRzeCIsIi90cy9wcm9jZXNzLWNvbnRhaW5lci50c3giLCIvdHMvcmFuZ2UudHN4IiwiL3RzL3NrZWxldG9uLXRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxs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