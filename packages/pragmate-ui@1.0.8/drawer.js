System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base", "framer-motion@11.18.2"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, CloseButton, useDrawerContext, Drawer, __beyond_pkg, hmr;
  _export({
    CloseButton: void 0,
    useDrawerContext: void 0,
    Drawer: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_pragmateUi108Base) {
      dependency_4 = _pragmateUi108Base;
    }, function (_framerMotion2) {
      dependency_5 = _framerMotion2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["tippy.js", "6.3.7"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/drawer"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['framer-motion', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/drawer');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./animations
      ****************************/
      ims.set('./animations', {
        hash: 114192017,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.animations = void 0;
          const animations = exports.animations = {
            slideDown: {
              initial: {
                y: '-50%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            default: {
              initial: {
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                y: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            },
            fadeInUpfadeOutLeft: {
              initial: {
                y: '-90%',
                opacity: 0
              },
              animate: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                x: '50%',
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }
            }
          };
        }
      });

      /******************************
      INTERNAL MODULE: ./close-button
      ******************************/

      ims.set('./close-button', {
        hash: 1994997619,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CloseButton = CloseButton;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle*/
          function CloseButton({
            className,
            onClick
          }) {
            const {
              onClose
            } = (0, _context.useDrawerContext)();
            const listener = event => {
              if (onClick) return onClick();
              onClose();
            };
            const cls = `pui-drawer-close-button circle${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_icons.IconButton, {
              className: cls,
              icon: 'close',
              onClick: listener
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3738712239,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDrawerContext = exports.DrawerContext = void 0;
          var _react = require("react");
          const DrawerContext = exports.DrawerContext = _react.default.createContext({
            open: false,
            onClose: () => {}
          });
          /*bundle*/
          const useDrawerContext = () => {
            const context = _react.default.useContext(DrawerContext);
            if (!context) {
              throw new Error('useDrawerContext must be used within a DrawerProvider');
            }
            return context;
          };
          exports.useDrawerContext = useDrawerContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2417431811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Drawer = Drawer;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          var _context = require("./context");
          const positionClasses = {
            left: 'pui-drawer-left',
            right: 'pui-drawer-right',
            top: 'pui-drawer-top',
            bottom: 'pui-drawer-bottom'
          };
          /*bundle*/
          function Drawer({
            className,
            position = 'left',
            open,
            onClose,
            children
          }) {
            let drawerClass = open ? `pui-drawer ${positionClasses[position]}` : 'pui-drawer hidden';
            if (className) drawerClass += ' ' + className;
            if (open) drawerClass += ` pui-drawer-open-${position}`;
            if (!open) return;
            const cls = `pui-drawer-container${className ? ` ${className}` : ''}`;
            const onClickContent = e => {
              e.stopPropagation();
            };
            return React.createElement(_context.DrawerContext.Provider, {
              value: {
                open,
                onClose
              }
            }, React.createElement(_framerMotion.motion.div, {
              className: cls,
              onClick: onClose
            }, React.createElement(_framerMotion.motion.div, {
              onClick: onClickContent,
              initial: {
                x: '+100vh',
                opacity: 0
              },
              animate: {
                x: 0,
                opacity: 1
              },
              exit: {
                x: '100vh',
                opacity: 0
              },
              transition: {
                duration: 0.3,
                ease: 'linear'
              },
              className: drawerClass
            }, React.createElement("div", {
              className: 'pui-drawer-content'
            }, children))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./close-button",
        "from": "CloseButton",
        "name": "CloseButton"
      }, {
        "im": "./context",
        "from": "useDrawerContext",
        "name": "useDrawerContext"
      }, {
        "im": "./index",
        "from": "Drawer",
        "name": "Drawer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CloseButton') && _export("CloseButton", CloseButton = require ? require('./close-button').CloseButton : value);
        (require || prop === 'useDrawerContext') && _export("useDrawerContext", useDrawerContext = require ? require('./context').useDrawerContext : value);
        (require || prop === 'Drawer') && _export("Drawer", Drawer = require ? require('./index').Drawer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25zIiwiZXhwb3J0cyIsInNsaWRlRG93biIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJleGl0IiwiZGVmYXVsdCIsImZhZGVJblVwZmFkZU91dExlZnQiLCJ4IiwiX3JlYWN0IiwicmVxdWlyZSIsIl9pY29ucyIsIl9jb250ZXh0IiwiQ2xvc2VCdXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwib25DbG9zZSIsInVzZURyYXdlckNvbnRleHQiLCJsaXN0ZW5lciIsImV2ZW50IiwiY2xzIiwiY3JlYXRlRWxlbWVudCIsIkljb25CdXR0b24iLCJpY29uIiwiRHJhd2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcGVuIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJFcnJvciIsIlJlYWN0IiwiX2ZyYW1lck1vdGlvbiIsInBvc2l0aW9uQ2xhc3NlcyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsIkRyYXdlciIsInBvc2l0aW9uIiwiY2hpbGRyZW4iLCJkcmF3ZXJDbGFzcyIsIm9uQ2xpY2tDb250ZW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJtb3Rpb24iLCJkaXYiLCJlYXNlIl0sInNvdXJjZXMiOlsiLy90cy9hbmltYXRpb25zLnRzeCIsIi8vdHMvY2xvc2UtYnV0dG9uLnRzeCIsIi8vdHMvY29udGV4dC50c3giLCIvL3RzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTyxNQUFNQSxVQUFVLEdBQUFDLE9BQUEsQ0FBQUQsVUFBQSxHQUFHO1lBQ3pCRSxTQUFTLEVBQUU7Y0FDVkMsT0FBTyxFQUFFO2dCQUFFQyxDQUFDLEVBQUUsTUFBTTtnQkFBRUMsT0FBTyxF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