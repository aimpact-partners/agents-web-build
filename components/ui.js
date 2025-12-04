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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiRGl2aWRlciIsImNvbG9yIiwiaGVpZ2h0IiwibWFyZ2luIiwic3R5bGVzIiwiYm9yZGVyQm90dG9tIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsImV4cG9ydHMiLCJfZGl2aWRlciIsIl9sb2FkZXIiLCJfcHJvY2Vzc0NvbnRhaW5lciIsIl9yYW5nZSIsIl9za2VsZXRvblRleHQiLCJfcGFnZSIsIl9oZWFkZXIiLCJfYm9keSIsIl9za2VsZXRvbiIsIkFwcExvYWRlciIsIl9jbHN4IiwiUGFnZUJvZHkiLCJjaGlsZHJlbiIsIl9icmVhZGNydW1iIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJ0aXRsZSIsIkJyZWFkQ3J1bWIiLCJpdGVtcyIsIlBhZ2VMYXlvdXQiLCJyZWFkeSIsIlBhZ2VTa2VsZXRvbiIsIlBhZ2UiLCJsYXlvdXQiLCJib2R5IiwiaGVhZGVyIiwiU2tlbGV0b25UZXh0Iiwid2lkdGgiLCJQcm9jZXNzQ29udGFpbmVyIiwiZmV0Y2hpbmciLCJjbHMiLCJSYW5nZSIsInZhbHVlIiwibmFtZSIsIm1heCIsIm1pbiIsInN0ZXAiLCJpbnB1dEZ1bmN0aW9uIiwiaHRtbEZvcm1TdHJpbmciLCJodG1sRm9yIiwib25JbnB1dCIsInR5cGUiLCJwcm9wcyIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicmFkaW8iXSwic291cmNlcyI6WyIvL3RzL2RpdmlkZXIudHN4IiwiLy90cy9pbmRleC50cyIsIi8vdHMvbG9hZGVyLnRzeCIsIi8vdHMvcGFnZS9ib2R5LnRzeCIsIi8vdHMvcGFnZS9oZWFkZXIudHN4IiwiLy90cy9wYWdlL2luZGV4LnRzeCIsIi8vdHMvcGFnZS9za2VsZXRvbi50c3giLCIvL3RzL3Byb2Nlc3MtY29udGFpbmVyLnRzeCIsIi8vdHMvcmFuZ2UudHN4IiwiLy90cy9za2VsZXRvbi10ZXh0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6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