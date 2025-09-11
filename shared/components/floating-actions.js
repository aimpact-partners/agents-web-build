System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "lucide-react@0.542.0", "@aimpact/platform@0.1.6/shared/icons", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, FloatingActions, IFloatingAction, IFloatingActionsProps, __beyond_pkg, hmr;
  _export({
    FloatingActions: void 0,
    IFloatingAction: void 0,
    IFloatingActionsProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_lucideReact2) {
      dependency_2 = _lucideReact2;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_3 = _aimpactPlatform016SharedIcons;
    }, function (_beyondJsKernel0114Styles) {
      dependency_4 = _beyondJsKernel0114Styles;
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
          "vspecifier": "@aimpact/platform@0.1.6/shared/components/floating-actions"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['lucide-react', dependency_2], ['@aimpact/platform/shared/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/shared/components/floating-actions');
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./example-usage
      *******************************/
      ims.set('./example-usage', {
        hash: 213190643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ExampleUsage = ExampleUsage;
          exports.exampleWithStringIcons = exports.exampleWithReactNodeIcons = exports.exampleWithMixedIcons = void 0;
          var _react = require("react");
          var _floatingActions = require("./floating-actions");
          var _lucideReact = require("lucide-react");
          // Ejemplo de uso del componente FloatingActions con diferentes tipos de iconos

          // Ejemplo 1: Iconos como ReactNodes (componentes)
          const exampleWithReactNodeIcons = exports.exampleWithReactNodeIcons = [{
            id: 'add',
            icon: _react.default.createElement(_lucideReact.Plus, {
              size: 20
            }),
            label: 'Add Item',
            tooltip: 'Create a new item',
            onClick: () => console.log('Add clicked')
          }, {
            id: 'edit',
            icon: _react.default.createElement(_lucideReact.Edit, {
              size: 20
            }),
            label: 'Edit',
            tooltip: 'Edit current item',
            onClick: () => console.log('Edit clicked')
          }];
          // Ejemplo 2: Iconos como strings (nombres)
          const exampleWithStringIcons = exports.exampleWithStringIcons = [{
            id: 'add',
            icon: 'add',
            label: 'Add Item',
            tooltip: 'Create a new item',
            onClick: () => console.log('Add clicked')
          }, {
            id: 'edit',
            icon: 'edit',
            label: 'Edit',
            tooltip: 'Edit current item',
            onClick: () => console.log('Edit clicked')
          }];
          // Ejemplo 3: Mezcla de ambos tipos
          const exampleWithMixedIcons = exports.exampleWithMixedIcons = [{
            id: 'add',
            icon: _react.default.createElement(_lucideReact.Plus, {
              size: 20
            }),
            label: 'Add Item',
            tooltip: 'Create a new item',
            onClick: () => console.log('Add clicked')
          }, {
            id: 'edit',
            icon: 'edit',
            label: 'Edit',
            tooltip: 'Edit current item',
            onClick: () => console.log('Edit clicked')
          }, {
            id: 'delete',
            icon: _react.default.createElement(_lucideReact.Delete, {
              size: 20
            }),
            label: 'Delete',
            tooltip: 'Delete item',
            onClick: () => console.log('Delete clicked')
          }, {
            id: 'share',
            icon: 'share',
            label: 'Share',
            tooltip: 'Share item',
            onClick: () => console.log('Share clicked')
          }];
          // Uso del componente
          function ExampleUsage() {
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, "FloatingActions con iconos ReactNode"), _react.default.createElement(_floatingActions.FloatingActions, {
              actions: exampleWithReactNodeIcons,
              position: "bottom-right"
            }), _react.default.createElement("h3", null, "FloatingActions con iconos String"), _react.default.createElement(_floatingActions.FloatingActions, {
              actions: exampleWithStringIcons,
              position: "bottom-left"
            }), _react.default.createElement("h3", null, "FloatingActions con iconos mixtos"), _react.default.createElement(_floatingActions.FloatingActions, {
              actions: exampleWithMixedIcons,
              position: "top-right"
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./floating-actions
      **********************************/

      ims.set('./floating-actions', {
        hash: 1731398316,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FloatingActions = FloatingActions;
          var _react = require("react");
          var _icons = require("@aimpact/platform/shared/icons");
          /*bundle*/
          function FloatingActions(props) {
            const {
              actions,
              position = 'bottom-right',
              isOpen = false,
              onToggle,
              className = ''
            } = props;
            const [isExpanded, setIsExpanded] = (0, _react.useState)(isOpen);
            const handleToggle = (0, _react.useCallback)(() => {
              const newState = !isExpanded;
              setIsExpanded(newState);
              onToggle?.(newState);
            }, [isExpanded, onToggle]);
            const handleActionClick = (0, _react.useCallback)(action => {
              action.onClick?.();
              if (action.closeOnClick !== false) {
                setIsExpanded(false);
                onToggle?.(false);
              }
            }, [onToggle]);
            const renderIcon = icon => {
              if (typeof icon === 'string') {
                return _react.default.createElement(_icons.AppIcon, {
                  icon: icon
                });
              }
              return icon;
            };
            const renderActions = () => {
              return actions.map((action, index) => _react.default.createElement("button", {
                key: action.id || index,
                className: `floating-action-item ${isExpanded ? 'expanded' : ''}`,
                onClick: () => handleActionClick(action),
                style: {
                  '--delay': `${index * 0.1}s`
                },
                title: action.tooltip,
                disabled: action.disabled
              }, renderIcon(action.icon), isExpanded && action.label && _react.default.createElement("span", {
                className: "floating-action-label"
              }, action.label)));
            };
            return _react.default.createElement("div", {
              className: `floating-actions ${position} ${className}`
            }, _react.default.createElement("div", {
              className: "floating-actions-container"
            }, isExpanded && _react.default.createElement("div", {
              className: "floating-actions-list"
            }, renderActions()), _react.default.createElement("button", {
              className: `floating-action-toggle ${isExpanded ? 'expanded' : ''}`,
              onClick: handleToggle,
              "aria-label": isExpanded ? 'Close actions' : 'Open actions'
            }, _react.default.createElement("svg", {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: `toggle-icon ${isExpanded ? 'expanded' : ''}`
            }, isExpanded ? _react.default.createElement("path", {
              d: "M18 6L6 18M6 6l12 12"
            }) : _react.default.createElement("path", {
              d: "M12 5v14M5 12h14"
            })))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./floating-actions.types
      ****************************************/

      ims.set('./floating-actions.types', {
        hash: 2457575061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./floating-actions",
        "from": "FloatingActions",
        "name": "FloatingActions"
      }, {
        "im": "./floating-actions.types",
        "from": "IFloatingAction",
        "name": "IFloatingAction"
      }, {
        "im": "./floating-actions.types",
        "from": "IFloatingActionsProps",
        "name": "IFloatingActionsProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'FloatingActions') && _export("FloatingActions", FloatingActions = require ? require('./floating-actions').FloatingActions : value);
        (require || prop === 'IFloatingAction') && _export("IFloatingAction", IFloatingAction = require ? require('./floating-actions.types').IFloatingAction : value);
        (require || prop === 'IFloatingActionsProps') && _export("IFloatingActionsProps", IFloatingActionsProps = require ? require('./floating-actions.types').IFloatingActionsProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2Zsb2F0aW5nQWN0aW9ucyIsIl9sdWNpZGVSZWFjdCIsImV4YW1wbGVXaXRoUmVhY3ROb2RlSWNvbnMiLCJleHBvcnRzIiwiaWQiLCJpY29uIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJQbHVzIiwic2l6ZSIsImxhYmVsIiwidG9vbHRpcCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiRWRpdCIsImV4YW1wbGVXaXRoU3RyaW5nSWNvbnMiLCJleGFtcGxlV2l0aE1peGVkSWNvbnMiLCJEZWxldGUiLCJFeGFtcGxlVXNhZ2UiLCJGbG9hdGluZ0FjdGlvbnMiLCJhY3Rpb25zIiwicG9zaXRpb24iLCJfaWNvbnMiLCJwcm9wcyIsImlzT3BlbiIsIm9uVG9nZ2xlIiwiY2xhc3NOYW1lIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJ1c2VTdGF0ZSIsImhhbmRsZVRvZ2dsZSIsInVzZUNhbGxiYWNrIiwibmV3U3RhdGUiLCJoYW5kbGVBY3Rpb25DbGljayIsImFjdGlvbiIsImNsb3NlT25DbGljayIsInJlbmRlckljb24iLCJBcHBJY29uIiwicmVuZGVyQWN0aW9ucyIsIm1hcCIsImluZGV4Iiwia2V5Iiwic3R5bGUiLCJ0aXRsZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvdHMvZXhhbXBsZS11c2FnZS50c3giLCIvdHMvZmxvYXRpbmctYWN0aW9ucy50c3giLCIvZmxvYXRpbmctYWN0aW9ucy50eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q3hCLE9BQU87Z0JBQ3JCa0MsUUFBUSxFQUFFVixNQUFNLENBQUNVO2NBQVEsR0FFeEJSLFVBQVUsQ0FBQ0YsTUFBTSxDQUFDOUIsSUFBSSxDQUFDLEVBQ3ZCdUIsVUFBVSxJQUFJTyxNQUFNLENBQUN6QixLQUFLLElBQUlaLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2dCQUFNb0IsU0FBUyxFQUFDO2NBQXVCLEdBQUVRLE1BQU0sQ0FBQ3pCLEtBQUssQ0FBUSxDQUU3RixDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0NaLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtvQixTQUFTLEVBQUUsb0JBQW9CTCxRQUFRLElBQUlLLFNBQVM7WUFBRSxHQUMxRDdCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtvQixTQUFTLEVBQUM7WUFBNEIsR0FDekNDLFVBQVUsSUFBSTlCLE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQUtvQixTQUFTLEVBQUM7WUFBdUIsR0FBRVksYUFBYSxFQUFFLENBQU8sRUFDN0V6QyxNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUNDb0IsU0FBUyxFQUFFLDBCQUEwQkMsVUFBVSxHQUFHLFVBQVUsR0FBRyxFQUFFLEVBQUU7Y0FDbkVoQixPQUFPLEVBQUVtQixZQUFZO2NBQUEsY0FDVEgsVUFBVSxHQUFHLGVBQWUsR0FBRztZQUFjLEdBRXpEOUIsTUFBQSxDQUFBUSxPQUFBLENBQUFDLGFBQUE7Y0FDQ3VDLEtBQUssRUFBQyxJQUFJO2NBQ1ZDLE1BQU0sRUFBQyxJQUFJO2NBQ1hDLE9BQU8sRUFBQyxXQUFXO2NBQ25CQyxJQUFJLEVBQUMsTUFBTTtjQUNYQyxNQUFNLEVBQUMsY0FBYztjQUNyQkMsV0FBVyxFQUFDLEdBQUc7Y0FDZkMsYUFBYSxFQUFDLE9BQU87Y0FDckJDLGNBQWMsRUFBQyxPQUFPO2NBQ3RCMUIsU0FBUyxFQUFFLGVBQWVDLFVBQVUsR0FBRyxVQUFVLEdBQUcsRUFBRTtZQUFFLEdBRXZEQSxVQUFVLEdBQUc5QixNQUFBLENBQUFRLE9BQUEsQ0FBQUMsYUFBQTtjQUFNK0MsQ0FBQyxFQUFDO1lBQXNCLEVBQUcsR0FBR3hELE1BQUEsQ0FBQVEsT0FBQSxDQUFBQyxhQUFBO2NBQU0rQyxDQUFDLEVBQUM7WUFBa0IsRUFBRyxDQUMxRSxDQUNFLENBQ0osQ0FDRDtVQUVSOzs7Ozs7Ozs7OztVQy9FQTs7VUFFQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFyRCxPQUFBO1lBQ0FzRCxLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=