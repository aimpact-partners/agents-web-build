System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/spinner", "@beyond-js/kernel@0.1.14/routing", "pragmate-ui@1.0.8/ripple", "tippy.js@6.3.7"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, ButtonGroup, Button, IButtonProps, ConditionalContainer, useMediaQuery, HtmlWrapper, Link, ResponsiveContainer, Spinner, __beyond_pkg, hmr;
  _export({
    ButtonGroup: void 0,
    Button: void 0,
    IButtonProps: void 0,
    ConditionalContainer: void 0,
    useMediaQuery: void 0,
    HtmlWrapper: void 0,
    Link: void 0,
    ResponsiveContainer: void 0,
    Spinner: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Base) {
      dependency_3 = _pragmateUi108Base;
    }, function (_pragmateUi108Icons) {
      dependency_4 = _pragmateUi108Icons;
    }, function (_pragmateUi108Spinner) {
      dependency_5 = _pragmateUi108Spinner;
    }, function (_beyondJsKernel0114Routing) {
      dependency_6 = _beyondJsKernel0114Routing;
    }, function (_pragmateUi108Ripple) {
      dependency_7 = _pragmateUi108Ripple;
    }, function (_tippyJs) {
      dependency_8 = _tippyJs;
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
          "vspecifier": "pragmate-ui@1.0.8/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7], ['tippy.js', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/components');
      ims = new Map();
      /*******************************************
      INTERNAL MODULE: ./button-group/button-group
      *******************************************/
      ims.set('./button-group/button-group', {
        hash: 686490675,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ButtonGroup = ButtonGroup;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function ButtonGroup({
            orientation = 'row',
            children,
            onChange,
            ...props
          }) {
            const [selected, setSelected] = _react.default.useState(props.selected);
            let cls = `pui-button-group`;
            cls += orientation ? ` pui-button-group ${orientation}` : '';
            let disabled = !!props.disabled;
            _react.default.useEffect(() => {
              setSelected(props.selected);
            }, [props.selected]);
            const childrenWithProps = _react.default.Children.map(children, (child, index) => {
              if (_react.default.isValidElement(child)) {
                return _react.default.cloneElement(child, {
                  index,
                  disabled,
                  onClick: onChange
                }); // Passing the index as a prop
              }
            });
            return _react.default.createElement(_context.ButtonGroupContext.Provider, {
              value: {
                selected,
                setSelected
              }
            }, _react.default.createElement("div", {
              className: cls
            }, childrenWithProps));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./button-group/context
      **************************************/

      ims.set('./button-group/context', {
        hash: 2338960457,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useButtonGroupContext = exports.ButtonGroupContext = void 0;
          var _react = require("react");
          const ButtonGroupContext = exports.ButtonGroupContext = _react.default.createContext({});
          const useButtonGroupContext = () => _react.default.useContext(ButtonGroupContext);
          exports.useButtonGroupContext = useButtonGroupContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./button-group/type
      ***********************************/

      ims.set('./button-group/type', {
        hash: 3900894228,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./button/button
      *******************************/

      ims.set('./button/button', {
        hash: 3308566910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Button = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _spinner = require("pragmate-ui/spinner");
          var _context = require("../button-group/context");
          var _useRipple = require("../use-ripple");
          const {
            forwardRef
          } = _react.default;
          /*bundle*/
          const Button = exports.Button = forwardRef((props, reference) => {
            const {
              className,
              onClick,
              data,
              label,
              title,
              children,
              icon,
              loading,
              block,
              index,
              fetching = false,
              variant = 'default',
              bordered = false,
              sizing = 'md',
              disabled = false,
              ...otherProps
            } = props;
            const context = _react.default.useContext(_context.ButtonGroupContext);
            const [, setProcessing] = _react.default.useState(fetching || loading);
            // Crear una ref local
            const localRef = _react.default.useRef(null);
            // Usar useRipple solo para el efecto de ripple
            const ref = (0, _useRipple.useRipple)('', localRef);
            // Conectar la ref externa si existe
            _react.default.useImperativeHandle(reference, () => localRef.current, []);
            const usingContext = typeof context?.setSelected === 'function';
            const onClickButton = async event => {
              try {
                if (usingContext) {
                  context.setSelected(index);
                }
                if (onClick && typeof onClick === 'function') {
                  setProcessing(true);
                  //@ts-ignore
                  await onClick(event);
                  setProcessing(false);
                  return;
                }
              } finally {
                setProcessing(false);
              }
            };
            const properties = {
              ...otherProps,
              type: props.type ? props.type : 'button'
            };
            if (data) {
              Object.keys(data).forEach(entry => {
                properties[`data-${entry}`] = data[entry];
              });
            }
            let cls = `pui-button btn-${variant}`;
            cls += className ? ` ${className}` : '';
            cls += bordered ? ' outline' : '';
            cls += icon ? ' has-icon' : '';
            cls += block ? ' btn--block' : '';
            cls += sizing ? ` btn--${sizing}` : '';
            cls += loading || fetching ? ' btn--loading' : '';
            const clsLoading = `button-label ${loading || fetching ? 'button-label--loading' : ''}`;
            if (usingContext && context.selected === index) cls += ' pui-btn--active';
            if (usingContext) properties['data-index'] = index;
            return _react.default.createElement("button", {
              ref: ref,
              className: cls,
              onClick: onClickButton,
              disabled: loading || fetching || disabled,
              ...properties
            }, icon && _react.default.createElement(_icons.Icon, {
              icon: icon
            }), label || children && _react.default.createElement("div", {
              className: clsLoading
            }, label || children), (loading || fetching) && _react.default.createElement(_spinner.Spinner, {
              type: `on-${variant}`,
              active: true
            }));
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./button/interface
      **********************************/

      ims.set('./button/interface', {
        hash: 694968353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***************************************
      INTERNAL MODULE: ./conditional-container
      ***************************************/

      ims.set('./conditional-container', {
        hash: 1749837270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConditionalContainer = ConditionalContainer;
          /*bundle*/
          function ConditionalContainer({
            condition,
            options,
            placeholder,
            ternary
          }) {
            const evaluatedValue = typeof condition === 'function' ? condition() : condition;
            let Component;
            if (ternary && typeof evaluatedValue === 'boolean') {
              Component = evaluatedValue ? options.true : options.false;
            } else {
              Component = options[evaluatedValue] || placeholder;
            }
            return Component ? Component : null;
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./hooks/use-media-query
      ***************************************/

      ims.set('./hooks/use-media-query', {
        hash: 2034606327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMediaQuery = useMediaQuery;
          var _react = require("react");
          /*bundle*/
          function useMediaQuery() {
            const [size, setSize] = (0, _react.useState)('lg');
            const calculateSize = () => {
              const width = window.innerWidth;
              if (width < 576) {
                return 'xs';
              } else if (width >= 576 && width < 768) {
                return 'sm';
              } else if (width >= 768 && width < 992) {
                return 'md';
              } else {
                return 'lg';
              }
            };
            (0, _react.useEffect)(() => {
              const handleResize = () => {
                const newSize = calculateSize();
                setSize(newSize);
              };
              // Set initial size
              handleResize();
              // Set up event listener for resizing
              window.addEventListener('resize', handleResize);
              // Clean up function
              return () => {
                window.removeEventListener('resize', handleResize);
              };
            }, []);
            return size;
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./html-wrapper
      ******************************/

      ims.set('./html-wrapper', {
        hash: 4059971987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlWrapper = HtmlWrapper;
          var _react = require("react");
          /*bundle*/
          function HtmlWrapper({
            className,
            children,
            params = {},
            tag = 'span',
            as = 'span'
          }) {
            const Control = as || tag;
            const keys = Object.keys(params);
            keys.forEach(key => {
              const value = params[key];
              children = children.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            });
            return _react.default.createElement(Control, {
              className: className,
              dangerouslySetInnerHTML: {
                __html: children
              }
            });
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./link
      **********************/

      ims.set('./link', {
        hash: 1413814841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Link = Link;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          function Link({
            href,
            ...props
          }) {
            const isExternal = props.target === '_blank';
            const onClick = event => {
              if (!isExternal) event.preventDefault();
              event.stopPropagation();
              if (props.onClick && typeof props.onClick === 'function') {
                const result = props.onClick(event);
                if (result === false) return;
              }
              !isExternal && _routing.routing.pushState(href);
            };
            const properties = {
              ...props
            };
            ['href', 'onClick'].forEach(prop => delete properties[prop]);
            return _react.default.createElement("a", {
              ...properties,
              href: href,
              onClick: onClick,
              target: props.target
            }, props.children);
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./responsive-container
      **************************************/

      ims.set('./responsive-container', {
        hash: 285431686,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ResponsiveContainer = ResponsiveContainer;
          var _react = require("react");
          var _useMediaQuery = require("./hooks/use-media-query");
          /*bundle*/
          function ResponsiveContainer(props) {
            const size = (0, _useMediaQuery.useMediaQuery)();
            // Ordered sizes, from smallest to largest.
            const sizes = ['xs', 'sm', 'md', 'lg'];
            // Function to find the first available component for the current or larger screen size.
            const getComponent = currentSize => {
              const currentIndex = sizes.indexOf(currentSize);
              for (let i = currentIndex; i < sizes.length; i++) {
                const component = props[sizes[i]];
                if (component !== undefined && component !== null) {
                  return component;
                }
              }
              return null;
            };
            const Component = getComponent(size);
            // Return null if no matching component is found.
            if (!Component) {
              return null;
            }
            // Render the component matching the current or closest screen size.
            return _react.default.createElement(Component, null);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./spinner
      *************************/

      ims.set('./spinner', {
        hash: 3026278285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Spinner = void 0;
          var _react = require("react");
          ;
          const Component = (props, ref) => {
            let {
              color,
              className,
              size,
              type,
              active
            } = props;
            size = size ? size : 'xs';
            const types = ['on-primary', 'on-secondary', 'on-surface', 'on-error', 'primary', 'secondary', 'tertiary'];
            const clsType = types.includes(type) ? type : 'primary';
            const style = {};
            if (color) style.stroke = color;
            className = `${clsType}${className ? ` ${className}` : ''}`;
            let cls = `${className ? `${className} ` : ''}pragmate-element-spinner spinner--${size}`;
            if (active) cls += ' is-active';
            return _react.default.createElement("div", {
              className: cls,
              ref: ref
            }, _react.default.createElement("svg", {
              viewBox: '0 0 100 100'
            }, _react.default.createElement("circle", {
              cx: '50',
              cy: '50',
              r: '30',
              style: style
            })));
          };
          /*bundle*/
          const Spinner = exports.Spinner = (0, _react.forwardRef)(Component);
        }
      });

      /****************************
      INTERNAL MODULE: ./use-ripple
      ****************************/

      ims.set('./use-ripple', {
        hash: 3800109915,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useRipple = useRipple;
          var _react = require("react");
          var _ripple = require("pragmate-ui/ripple");
          var _tippy = require("tippy.js");
          function useRipple(title, ref) {
            ref = ref ?? _react.default.useRef(null);
            _react.default.useEffect(() => {
              const ripple = new _ripple.RippleEffect();
              ripple.addRippleEffect(ref.current);
              if (title) {
                (0, _tippy.default)(ref.current);
              }
            }, [title]);
            return ref;
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./button-group/button-group",
        "from": "ButtonGroup",
        "name": "ButtonGroup"
      }, {
        "im": "./button/button",
        "from": "Button",
        "name": "Button"
      }, {
        "im": "./button/interface",
        "from": "IButtonProps",
        "name": "IButtonProps"
      }, {
        "im": "./conditional-container",
        "from": "ConditionalContainer",
        "name": "ConditionalContainer"
      }, {
        "im": "./hooks/use-media-query",
        "from": "useMediaQuery",
        "name": "useMediaQuery"
      }, {
        "im": "./html-wrapper",
        "from": "HtmlWrapper",
        "name": "HtmlWrapper"
      }, {
        "im": "./link",
        "from": "Link",
        "name": "Link"
      }, {
        "im": "./responsive-container",
        "from": "ResponsiveContainer",
        "name": "ResponsiveContainer"
      }, {
        "im": "./spinner",
        "from": "Spinner",
        "name": "Spinner"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ButtonGroup') && _export("ButtonGroup", ButtonGroup = require ? require('./button-group/button-group').ButtonGroup : value);
        (require || prop === 'Button') && _export("Button", Button = require ? require('./button/button').Button : value);
        (require || prop === 'IButtonProps') && _export("IButtonProps", IButtonProps = require ? require('./button/interface').IButtonProps : value);
        (require || prop === 'ConditionalContainer') && _export("ConditionalContainer", ConditionalContainer = require ? require('./conditional-container').ConditionalContainer : value);
        (require || prop === 'useMediaQuery') && _export("useMediaQuery", useMediaQuery = require ? require('./hooks/use-media-query').useMediaQuery : value);
        (require || prop === 'HtmlWrapper') && _export("HtmlWrapper", HtmlWrapper = require ? require('./html-wrapper').HtmlWrapper : value);
        (require || prop === 'Link') && _export("Link", Link = require ? require('./link').Link : value);
        (require || prop === 'ResponsiveContainer') && _export("ResponsiveContainer", ResponsiveContainer = require ? require('./responsive-container').ResponsiveContainer : value);
        (require || prop === 'Spinner') && _export("Spinner", Spinner = require ? require('./spinner').Spinner : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImNscyIsImRpc2FibGVkIiwidXNlRWZmZWN0IiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwic2l6aW5nIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJzZXRQcm9jZXNzaW5nIiwibG9jYWxSZWYiLCJ1c2VSZWYiLCJyZWYiLCJ1c2VSaXBwbGUiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiY3VycmVudCIsInVzaW5nQ29udGV4dCIsIm9uQ2xpY2tCdXR0b24iLCJldmVudCIsInByb3BlcnRpZXMiLCJ0eXBlIiwia2V5cyIsImZvckVhY2giLCJlbnRyeSIsImNsc0xvYWRpbmciLCJJY29uIiwiU3Bpbm5lciIsImFjdGl2ZSIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsInBsYWNlaG9sZGVyIiwidGVybmFyeSIsImV2YWx1YXRlZFZhbHVlIiwiQ29tcG9uZW50IiwidHJ1ZSIsImZhbHNlIiwidXNlTWVkaWFRdWVyeSIsInNpemUiLCJzZXRTaXplIiwiY2FsY3VsYXRlU2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhhbmRsZVJlc2l6ZSIsIm5ld1NpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkh0bWxXcmFwcGVyIiwicGFyYW1zIiwidGFnIiwiYXMiLCJDb250cm9sIiwia2V5IiwicmVwbGFjZSIsIlJlZ0V4cCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiX3JvdXRpbmciLCJMaW5rIiwiaHJlZiIsImlzRXh0ZXJuYWwiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInJlc3VsdCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJwcm9wIiwiX3VzZU1lZGlhUXVlcnkiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwic2l6ZXMiLCJnZXRDb21wb25lbnQiLCJjdXJyZW50U2l6ZSIsImN1cnJlbnRJbmRleCIsImluZGV4T2YiLCJpIiwibGVuZ3RoIiwiY29tcG9uZW50IiwidW5kZWZpbmVkIiwiY29sb3IiLCJ0eXBlcyIsImNsc1R5cGUiLCJpbmNsdWRlcyIsInN0eWxlIiwic3Ryb2tlIiwidmlld0JveCIsImN4IiwiY3kiLCJyIiwiX3JpcHBsZSIsIl90aXBweSIsInJpcHBsZSIsIlJpcHBsZUVmZmVjdCIsImFkZFJpcHBsZUVmZmVjdCJdLCJzb3VyY2VzIjpbIi90cy9idXR0b24tZ3JvdXAvYnV0dG9uLWdyb3VwLnRzeCIsIi90cy9idXR0b24tZ3JvdXAvY29udGV4dC50c3giLCIvdHlwZS50cyIsIi90cy9idXR0b24vYnV0dG9uLnRzeCIsIi9pbnRlcmZhY2UudHMiLCIvdHMvY29uZGl0aW9uYWwtY29udGFpbmVyLnRzeCIsIi90cy9ob29rcy91c2UtbWVkaWEtcXVlcnkudHMiLCIvdHMvaHRtbC13cmFwcGVyLnRzeCIsIi90cy9saW5rLnRzeCIsIi90cy9yZXNwb25zaXZlLWNvbnRhaW5lci50c3giLCIvdHMvc3Bpbm5lci50c3giLCIvdHMvdXNlLXJpcHBsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsU0FBVUUsV0FBV0EsQ0FBQztZQUN0Q0MsV0FBVyxHQUFHLEtBQUs7WUFDbkJDLFFBQVE7WUFDUkMsUUFBUTtZQUNSLEdBQUdDO1VBQUssQ0FDVztZQUNuQixNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQVNKLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQ3RFLElBQUlJLEdBQUcsR0FBRyxrQkFBa0I7WUFDNUJBLEdBQUcsSUFBSVIsV0FBVyxHQUFHLHFCQUFxQkEsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUM1RCxJQUFJUyxRQUFRLEdBQUcsQ0FBQyxDQUFDTixLQUFLLENBQUNNLFFBQVE7WUFFL0JiLE1BQUEsQ0FBQVUsT0FBSyxDQUFDSSxTQUFTLENBQUMsTUFBSztjQUNwQkwsV0FBVyxDQUFDRixLQUFLLENBQUNDLFFBQVEsQ0FBQztZQUM1QixDQUFDLEVBQUUsQ0FBQ0QsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQztZQUVwQixNQUFNTyxpQkFBaUIsR0FBR2YsTUFBQSxDQUFBVSxPQUFLLENBQUNNLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDWixRQUFRLEVBQUUsQ0FBQ2EsS0FBSyxFQUFFQyxLQUFLLEtBQUk7Y0FDdkUsSUFBSW5CLE1BQUEsQ0FBQVUsT0FBSyxDQUFDVSxjQUFjLENB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