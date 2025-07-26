System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/reactive@2.1.0/model", "pragmate-ui@1.0.2/base", "pragmate-ui@1.0.2/icons", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ContextMenuContainer, ContextMenuManager, ContextMenu, ContextItem, __beyond_pkg, hmr;
  _export({
    ContextMenuContainer: void 0,
    ContextMenuManager: void 0,
    ContextMenu: void 0,
    ContextItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }, function (_pragmateUi102Base) {
      dependency_3 = _pragmateUi102Base;
    }, function (_pragmateUi102Icons) {
      dependency_4 = _pragmateUi102Icons;
    }, function (_beyondJsKernel0112Styles) {
      dependency_5 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/context-menu"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/context-menu');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./container
      ***************************/
      ims.set('./container', {
        hash: 648905027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenuContainer = ContextMenuContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ContextMenuContainer({
            children
          }) {
            const [showContextMenu, toggleContextMenu] = _react.default.useState();
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              toggleContextMenu({
                x: event.clientX,
                y: event.clientY
              });
            };
            const closeContextMenu = () => toggleContextMenu(null);
            return _react.default.createElement(_context.ContextMenuContext.Provider, {
              value: {
                closeContextMenu,
                opened: !!showContextMenu,
                position: showContextMenu
              }
            }, _react.default.createElement("span", {
              className: 'context-menu__container',
              onClick: onClick
            }, children));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./context-menu
      ******************************/

      ims.set('./context-menu', {
        hash: 3144112597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenuManager = exports.ContextMenu = void 0;
          var _model = require("@beyond-js/reactive/model");
          class ContextMenu extends _model.ReactiveModel {
            _event;
            constructor() {
              super();
              this._event = null;
              this.init();
            }
            get event() {
              return this._event;
            }
            get currentTarget() {
              return this._event?.currentTarget || null;
            }
            get target() {
              return this._event?.target || null;
            }
            init() {
              globalThis.oncontextmenu = event => {
                this._event = event;
                const target = event.target; // Assuming target is always an HTMLElement
                const parentContext = target.closest('[data-context]');
                if (target.dataset.context || parentContext) {
                  event.preventDefault();
                  event.stopPropagation();
                  const contextEvent = target.dataset.context || parentContext?.dataset.context;
                  this.triggerEvent('closed');
                  if (contextEvent) {
                    this.triggerEvent(`fired.${contextEvent}`);
                  }
                  return;
                }
                if (target.classList.contains('ds-context-menu') || target.closest('.ds-context-menu')) {
                  this.triggerEvent('closed');
                }
              };
            }
          }
          exports.ContextMenu = ContextMenu;
          /*bundle */
          const ContextMenuManager = exports.ContextMenuManager = new ContextMenu();
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 197579782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContextMenuContext = exports.ContextMenuContext = void 0;
          var _react = require("react");
          const ContextMenuContext = exports.ContextMenuContext = _react.default.createContext({});
          const useContextMenuContext = () => _react.default.useContext(ContextMenuContext);
          exports.useContextMenuContext = useContextMenuContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 2944976739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1105731779,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextMenu = ContextMenu;
          var _react = require("react");
          var _context = require("./context");
          var _useContext = require("./use-context");
          /*bundle*/
          function ContextMenu({
            className,
            unmount,
            children
          }) {
            const container = document.createElement('span');
            const ref = (0, _react.useRef)(null);
            const {
              opened,
              position
            } = (0, _context.useContextMenuContext)();
            (0, _useContext.useContextMenu)(container, ref, position, unmount);
            if (!opened) {
              return null;
            }
            const styles = {
              position: 'absolute',
              top: `${position.y}px`,
              left: `${position.x}px`
            };
            const cls = `pui-context-menu ${className || ''}`;
            return _react.default.createElement("div", {
              style: styles,
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 2629990627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContextItem = ContextItem;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          /*bundle */
          function ContextItem({
            onClick,
            icon,
            label
          }) {
            const {
              closeContextMenu
            } = (0, _context.useContextMenuContext)();
            const onClickEvent = async event => {
              event.stopPropagation();
              await onClick(event);
              closeContextMenu();
            };
            return _react.default.createElement("li", {
              onClick: onClickEvent
            }, icon ? _react.default.createElement(_icons.Icon, {
              icon: icon
            }) : _react.default.createElement("span", null), label);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./use-context
      *****************************/

      ims.set('./use-context', {
        hash: 3365751087,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useContextMenu = useContextMenu;
          var _react = require("react");
          function useContextMenu(container, ref, position, unmount) {
            (0, _react.useEffect)(() => {
              const close = () => {
                document.removeEventListener('click', close);
                unmount(false);
              };
              const body = document.querySelector('body');
              if (!body) return;
              document.addEventListener('click', close);
              body.appendChild(container);
              const refCurrent = ref.current;
              if (!refCurrent) return;
              const {
                offsetWidth,
                offsetHeight
              } = refCurrent;
              const tWidth = offsetWidth + position.x;
              const tHeight = offsetHeight + position.y;
              if (tWidth > globalThis.innerWidth) {
                refCurrent.style.left = `${position.x - offsetWidth}px`;
              }
              if (tHeight > globalThis.innerHeight) {
                refCurrent.style.top = `${position.y - offsetHeight}px`;
              }
              return () => {
                document.removeEventListener('click', close);
                container.remove();
              };
            }, [position.x, position.y, container, ref, unmount]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./container",
        "from": "ContextMenuContainer",
        "name": "ContextMenuContainer"
      }, {
        "im": "./context-menu",
        "from": "ContextMenuManager",
        "name": "ContextMenuManager"
      }, {
        "im": "./index",
        "from": "ContextMenu",
        "name": "ContextMenu"
      }, {
        "im": "./item",
        "from": "ContextItem",
        "name": "ContextItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ContextMenuContainer') && _export("ContextMenuContainer", ContextMenuContainer = require ? require('./container').ContextMenuContainer : value);
        (require || prop === 'ContextMenuManager') && _export("ContextMenuManager", ContextMenuManager = require ? require('./context-menu').ContextMenuManager : value);
        (require || prop === 'ContextMenu') && _export("ContextMenu", ContextMenu = require ? require('./index').ContextMenu : value);
        (require || prop === 'ContextItem') && _export("ContextItem", ContextItem = require ? require('./item').ContextItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJDb250ZXh0TWVudUNvbnRhaW5lciIsImNoaWxkcmVuIiwic2hvd0NvbnRleHRNZW51IiwidG9nZ2xlQ29udGV4dE1lbnUiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvbkNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJjbG9zZUNvbnRleHRNZW51IiwiY3JlYXRlRWxlbWVudCIsIkNvbnRleHRNZW51Q29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJvcGVuZWQiLCJwb3NpdGlvbiIsImNsYXNzTmFtZSIsIl9tb2RlbCIsIkNvbnRleHRNZW51IiwiUmVhY3RpdmVNb2RlbCIsIl9ldmVudCIsImNvbnN0cnVjdG9yIiwiaW5pdCIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJnbG9iYWxUaGlzIiwib25jb250ZXh0bWVudSIsInBhcmVudENvbnRleHQiLCJjbG9zZXN0IiwiZGF0YXNldCIsImNvbnRleHQiLCJjb250ZXh0RXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImV4cG9ydHMiLCJDb250ZXh0TWVudU1hbmFnZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dE1lbnVDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3VzZUNvbnRleHQiLCJ1bm1vdW50IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0TWVudSIsInN0eWxlcyIsInRvcCIsImxlZnQiLCJjbHMiLCJzdHlsZSIsIl9pY29ucyIsIkNvbnRleHRJdGVtIiwiaWNvbiIsImxhYmVsIiwib25DbGlja0V2ZW50IiwiSWNvbiIsInVzZUVmZmVjdCIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwicmVmQ3VycmVudCIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInRXaWR0aCIsInRIZWlnaHQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW1vdmUiXSwic291cmNlcyI6WyIvL3RzL2NvbnRhaW5lci50c3giLCIvL3RzL2NvbnRleHQtbWVudS50cyIsIi8vdHMvY29udGV4dC50c3giLCIvL2RlZmluaXRpb25zLnRzLyIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9pdGVtLnRzeCIsIi8vdHMvdXNlLWNvbnRleHQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDTztVQUFVLFNBQ1JFLG9CQUFvQkEsQ0FBQztZQUFFQztVQUFRLENBQUU7WUFDekMsTUFBTSxDQUFDQyxlQUFlLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdOLE1BQUEsQ0FBQU8sT0FBSyxDQUFDQyxRQUFRLEVBQW1DO1lBRTlGLE1BQU1DLE9BQU8sR0FBR0MsS0FBSyxJQUFHO2NBQ3ZCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkQsS0FBSyxDQUFDRSxjQUFjLEVBQUU7Y0FDdEJOLGlCQUFpQixDQUFDO2dCQUFFTyxDQUFDLEVBQUVILEtBQUssQ0FBQ0ksT0FBTztnQkFBRUMsQ0FBQyxFQUFFTCxLQUFLLENBQUNNO2NBQU8sQ0FBRSxDQUFDO1lBQzFELENBQUM7WUFFRCxNQUFNQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNWCxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDdEQsT0FDQ04sTUFBQSxDQUFBTyxPQUFBLENBQUFXLGFBQUEsQ0FBQ2hCLFFBQUEs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