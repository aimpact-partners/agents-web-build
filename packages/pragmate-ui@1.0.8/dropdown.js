System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "framer-motion@11.18.2", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/base"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, DropdownContainer, DropdownItem, DropdownMenu, DropdownToggle, useDropdownContext, Dropdown, IDropdownProps, IDropdownItemProps, __beyond_pkg, hmr;
  _export({
    DropdownContainer: void 0,
    DropdownItem: void 0,
    DropdownMenu: void 0,
    DropdownToggle: void 0,
    useDropdownContext: void 0,
    Dropdown: void 0,
    IDropdownProps: void 0,
    IDropdownItemProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_framerMotion2) {
      dependency_3 = _framerMotion2;
    }, function (_pragmateUi108Components) {
      dependency_4 = _pragmateUi108Components;
    }, function (_pragmateUi108Base) {
      dependency_5 = _pragmateUi108Base;
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
          "vspecifier": "pragmate-ui@1.0.8/dropdown"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['framer-motion', dependency_3], ['pragmate-ui/components', dependency_4], ['pragmate-ui/base', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/dropdown');
      ims = new Map();
      /*****************************************
      INTERNAL MODULE: ./components/animated-div
      *****************************************/
      ims.set('./components/animated-div', {
        hash: 744696097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var React = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            className
          } = {
            children: null,
            className: ''
          }) {
            return React.createElement(_framerMotion.motion.div, {
              className: className,
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.1
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./components/container
      **************************************/

      ims.set('./components/container', {
        hash: 4207993415,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownContainer = DropdownContainer;
          var _react = require("react");
          var _context = require("../context");
          var _useClickContainer = require("../hooks/use-click-container");
          /*bundle*/
          function DropdownContainer({
            children,
            className
          }) {
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              ref
            } = (0, _useClickContainer.useClickContainer)({
              toggleMenu,
              setToggleMenu
            });
            const cls = `pui-dropdown-container${className ? ` ${className}` : ''}${toggleMenu ? ' pui-dropdown-container--opened' : ''}`;
            return _react.default.createElement("div", {
              ref: ref,
              className: cls
            }, children);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/item
      *********************************/

      ims.set('./components/item', {
        hash: 2807941339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownItem = DropdownItem;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function DropdownItem(props) {
            const {
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const {
              children,
              className,
              onClick,
              as = _components.Link,
              tag = _components.Link
            } = props;
            const handleClick = async event => {
              event.stopPropagation();
              if (!!onClick && typeof onClick === 'function') await onClick(event);
              setToggleMenu(false);
            };
            const Control = tag ?? 'div';
            const cls = `pui-dropdown-menu__item${className ? ` ${className}` : ''}`;
            const properties = Object.assign({}, props);
            const toDelete = ['children', 'className', 'onClick', 'tag', 'id'];
            toDelete.forEach(key => delete properties[key]);
            return _react.default.createElement("li", null, _react.default.createElement(Control, {
              className: cls,
              onClick: handleClick,
              ...properties
            }, children));
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./components/menu
      *********************************/

      ims.set('./components/menu', {
        hash: 1155104003,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownMenu = DropdownMenu;
          var _react = require("react");
          var _context = require("../context");
          var _animatedDiv = require("./animated-div");
          /*bundle*/
          function DropdownMenu(props) {
            const {
              toggleMenu
            } = (0, _context.useDropdownContext)();
            if (!toggleMenu) return null;
            let cls = `pui-dropdown-menu  pui-dropdown-menu--opened`;
            return _react.default.createElement(_animatedDiv.AnimatedDiv, {
              className: cls
            }, _react.default.createElement("ul", {
              className: 'pui-dropdown-menu__list'
            }, props.children));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/toggle
      ***********************************/

      ims.set('./components/toggle', {
        hash: 2994452618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DropdownToggle = DropdownToggle;
          var React = require("react");
          var _context = require("../context");
          /*bundle*/
          function DropdownToggle({
            children,
            className
          }) {
            const cls = `pui-dropdown__toggle${className ? ` ${className}` : ''}`;
            const {
              toggleMenu,
              setToggleMenu
            } = (0, _context.useDropdownContext)();
            const onClick = event => {
              event.stopPropagation();
              setToggleMenu(!toggleMenu);
            };
            return React.createElement("div", {
              onClick: onClick,
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3840324528,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDropdownContext = exports.DropdownContext = void 0;
          var _react = require("react");
          const DropdownContext = exports.DropdownContext = _react.default.createContext(null);
          /*bundle */
          const useDropdownContext = () => (0, _react.useContext)(DropdownContext);
          exports.useDropdownContext = useDropdownContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./hooks/use-click-container
      *******************************************/

      ims.set('./hooks/use-click-container', {
        hash: 2744155022,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useClickContainer = useClickContainer;
          var _react = require("react");
          function useClickContainer({
            toggleMenu,
            setToggleMenu
          }) {
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const onClick = event => {
                const {
                  current
                } = ref;
                const {
                  target,
                  currentTarget
                } = event;
                const path = event.composedPath ? event.composedPath() : [];
                const pathTarget = path.length > 0 ? path[0] : null;
                const isSameNode = current === target || current === currentTarget || pathTarget === current;
                const isAChildren = current?.contains(pathTarget);
                if (toggleMenu && !isSameNode && !isAChildren) setToggleMenu(false);
              };
              globalThis.document.addEventListener('click', onClick);
              return () => globalThis.document.removeEventListener('click', onClick);
            }, [toggleMenu]);
            return {
              ref
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2450413676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dropdown = Dropdown;
          var _react = require("react");
          var _context = require("./context");
          var _container = require("./components/container");
          /*bundle*/
          function Dropdown({
            children,
            className
          }) {
            const [toggleMenu, setToggleMenu] = _react.default.useState(false);
            const value = {
              toggleMenu,
              setToggleMenu
            };
            return _react.default.createElement(_context.DropdownContext.Provider, {
              value: value
            }, _react.default.createElement(_container.DropdownContainer, {
              className: className
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 382438008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/container",
        "from": "DropdownContainer",
        "name": "DropdownContainer"
      }, {
        "im": "./components/item",
        "from": "DropdownItem",
        "name": "DropdownItem"
      }, {
        "im": "./components/menu",
        "from": "DropdownMenu",
        "name": "DropdownMenu"
      }, {
        "im": "./components/toggle",
        "from": "DropdownToggle",
        "name": "DropdownToggle"
      }, {
        "im": "./context",
        "from": "useDropdownContext",
        "name": "useDropdownContext"
      }, {
        "im": "./index",
        "from": "Dropdown",
        "name": "Dropdown"
      }, {
        "im": "./types",
        "from": "IDropdownProps",
        "name": "IDropdownProps"
      }, {
        "im": "./types",
        "from": "IDropdownItemProps",
        "name": "IDropdownItemProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'DropdownContainer') && _export("DropdownContainer", DropdownContainer = require ? require('./components/container').DropdownContainer : value);
        (require || prop === 'DropdownItem') && _export("DropdownItem", DropdownItem = require ? require('./components/item').DropdownItem : value);
        (require || prop === 'DropdownMenu') && _export("DropdownMenu", DropdownMenu = require ? require('./components/menu').DropdownMenu : value);
        (require || prop === 'DropdownToggle') && _export("DropdownToggle", DropdownToggle = require ? require('./components/toggle').DropdownToggle : value);
        (require || prop === 'useDropdownContext') && _export("useDropdownContext", useDropdownContext = require ? require('./context').useDropdownContext : value);
        (require || prop === 'Dropdown') && _export("Dropdown", Dropdown = require ? require('./index').Dropdown : value);
        (require || prop === 'IDropdownProps') && _export("IDropdownProps", IDropdownProps = require ? require('./types').IDropdownProps : value);
        (require || prop === 'IDropdownItemProps') && _export("IDropdownItemProps", IDropdownItemProps = require ? require('./types').IDropdownItemProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInkiLCJleGl0IiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfdXNlQ2xpY2tDb250YWluZXIiLCJEcm9wZG93bkNvbnRhaW5lciIsInRvZ2dsZU1lbnUiLCJzZXRUb2dnbGVNZW51IiwidXNlRHJvcGRvd25Db250ZXh0IiwicmVmIiwidXNlQ2xpY2tDb250YWluZXIiLCJjbHMiLCJkZWZhdWx0IiwiX2NvbXBvbmVudHMiLCJEcm9wZG93bkl0ZW0iLCJwcm9wcyIsIm9uQ2xpY2siLCJhcyIsIkxpbmsiLCJ0YWciLCJoYW5kbGVDbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiQ29udHJvbCIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0b0RlbGV0ZSIsImZvckVhY2giLCJrZXkiLCJfYW5pbWF0ZWREaXYiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93blRvZ2dsZSIsIkRyb3Bkb3duQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwicGF0aCIsImNvbXBvc2VkUGF0aCIsInBhdGhUYXJnZXQiLCJsZW5ndGgiLCJpc1NhbWVOb2RlIiwiaXNBQ2hpbGRyZW4iLCJjb250YWlucyIsImdsb2JhbFRoaXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2NvbnRhaW5lciIsIkRyb3Bkb3duIiwidXNlU3RhdGUiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL3RzL2NvbXBvbmVudHMvYW5pbWF0ZWQtZGl2LnRzeCIsIi8vdHMvY29tcG9uZW50cy9jb250YWluZXIudHN4IiwiLy90cy9jb21wb25lbnRzL2l0ZW0udHN4IiwiLy90cy9jb21wb25lbnRzL21lbnUudHN4IiwiLy90cy9jb21wb25lbnRzL3RvZ2dsZS50c3giLCIvL3RzL2NvbnRleHQudHN4IiwiLy90cy9ob29rcy91c2UtY2xpY2stY29udGFpbmVyLnRzeCIsIi8vdHMvaW5kZXgudHN4IiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBRU0sU0FBVUUsV0FBV0EsQ0FBQztZQUFFQyxRQUFRO1lBQUVDO1VBQVMsSUFBK0I7WUFBRUQsUUFBUSxFQUFFLElBQUk7WUFBRUMsU0FBUyxFQUFFO1VBQUUsQ0FBRTtZQUNoSCxPQUNDTCxLQUFBLENBQUFNLGFBQUEsQ0FBQ0osYUFBQSxDQUFBSyxNQUFNLENBQUNDLEdBQUc7Y0FDVkgsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCSSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRSxDQUFDO2dCQUNWQyxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREMsQ0FBQyxFQUFFO2VBQ0g7Y0FDREMsSUFBSSxFQUFFO2dCQUNMSCxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTtpQkFDVjtnQkFDREYsT0FBTyxFQUFFOztZQUNULEdBRUFOLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBVyxNQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxRQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0Isa0JBQUEsR0FBQWhCLE9B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