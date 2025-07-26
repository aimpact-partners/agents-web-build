System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.2/base", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/spinner", "@beyond-js/kernel@0.1.12/routing", "pragmate-ui@1.0.2/ripple", "tippy.js@6.3.7"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi102Base) {
      dependency_3 = _pragmateUi102Base;
    }, function (_pragmateUi102Icons) {
      dependency_4 = _pragmateUi102Icons;
    }, function (_pragmateUi102Spinner) {
      dependency_5 = _pragmateUi102Spinner;
    }, function (_beyondJsKernel0112Routing) {
      dependency_6 = _beyondJsKernel0112Routing;
    }, function (_pragmateUi102Ripple) {
      dependency_7 = _pragmateUi102Ripple;
    }, function (_tippyJs) {
      dependency_8 = _tippyJs;
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
          "vspecifier": "pragmate-ui@1.0.2/components"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/base', dependency_3], ['pragmate-ui/icons', dependency_4], ['pragmate-ui/spinner', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['pragmate-ui/ripple', dependency_7], ['tippy.js', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/components');
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
        hash: 28591129,
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
            const ref = (0, _useRipple.useRipple)(title, reference);
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
            if (title) properties['data-tippy-content'] = title;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJCdXR0b25Hcm91cCIsIm9yaWVudGF0aW9uIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsInByb3BzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsImNscyIsImRpc2FibGVkIiwidXNlRWZmZWN0IiwiY2hpbGRyZW5XaXRoUHJvcHMiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiQnV0dG9uR3JvdXBDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNsYXNzTmFtZSIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQnV0dG9uR3JvdXBDb250ZXh0IiwidXNlQ29udGV4dCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zIiwiX3NwaW5uZXIiLCJfdXNlUmlwcGxlIiwiZm9yd2FyZFJlZiIsIkJ1dHRvbiIsInJlZmVyZW5jZSIsImRhdGEiLCJsYWJlbCIsInRpdGxlIiwiaWNvbiIsImxvYWRpbmciLCJibG9jayIsImZldGNoaW5nIiwidmFyaWFudCIsImJvcmRlcmVkIiwic2l6aW5nIiwib3RoZXJQcm9wcyIsImNvbnRleHQiLCJzZXRQcm9jZXNzaW5nIiwicmVmIiwidXNlUmlwcGxlIiwidXNpbmdDb250ZXh0Iiwib25DbGlja0J1dHRvbiIsImV2ZW50IiwicHJvcGVydGllcyIsInR5cGUiLCJrZXlzIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xzTG9hZGluZyIsIkljb24iLCJTcGlubmVyIiwiYWN0aXZlIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJ0ZXJuYXJ5IiwiZXZhbHVhdGVkVmFsdWUiLCJDb21wb25lbnQiLCJ0cnVlIiwiZmFsc2UiLCJ1c2VNZWRpYVF1ZXJ5Iiwic2l6ZSIsInNldFNpemUiLCJjYWxjdWxhdGVTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGFuZGxlUmVzaXplIiwibmV3U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiSHRtbFdyYXBwZXIiLCJwYXJhbXMiLCJ0YWciLCJhcyIsIkNvbnRyb2wiLCJrZXkiLCJyZXBsYWNlIiwiUmVnRXhwIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJfcm91dGluZyIsIkxpbmsiLCJocmVmIiwiaXNFeHRlcm5hbCIsInRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicmVzdWx0Iiwicm91dGluZyIsInB1c2hTdGF0ZSIsInByb3AiLCJfdXNlTWVkaWFRdWVyeSIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJzaXplcyIsImdldENvbXBvbmVudCIsImN1cnJlbnRTaXplIiwiY3VycmVudEluZGV4IiwiaW5kZXhPZiIsImkiLCJsZW5ndGgiLCJjb21wb25lbnQiLCJ1bmRlZmluZWQiLCJjb2xvciIsInR5cGVzIiwiY2xzVHlwZSIsImluY2x1ZGVzIiwic3R5bGUiLCJzdHJva2UiLCJ2aWV3Qm94IiwiY3giLCJjeSIsInIiLCJfcmlwcGxlIiwiX3RpcHB5IiwidXNlUmVmIiwicmlwcGxlIiwiUmlwcGxlRWZmZWN0IiwiYWRkUmlwcGxlRWZmZWN0IiwiY3VycmVudCJdLCJzb3VyY2VzIjpbIi8vdHMvYnV0dG9uLWdyb3VwL2J1dHRvbi1ncm91cC50c3giLCIvL3RzL2J1dHRvbi1ncm91cC9jb250ZXh0LnRzeCIsIi8vdHlwZS50cy8iLCIvL3RzL2J1dHRvbi9idXR0b24udHN4IiwiLy9pbnRlcmZhY2UudHMvIiwiLy90cy9jb25kaXRpb25hbC1jb250YWluZXIudHN4IiwiLy90cy9ob29rcy91c2UtbWVkaWEtcXVlcnkudHMiLCIvL3RzL2h0bWwtd3JhcHBlci50c3giLCIvL3RzL2xpbmsudHN4IiwiLy90cy9yZXNwb25zaXZlLWNvbnRhaW5lci50c3giLCIvL3RzL3NwaW5uZXIudHN4IiwiLy90cy91c2UtcmlwcGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxTQUFVRSxXQUFXQSxDQUFDO1lBQ3RDQyxXQUFXLEdBQUcsS0FBSztZQUNuQkMsUUFBUTtZQUNSQyxRQUFRO1lBQ1IsR0FBR0M7VUFBSyxDQUNXO1lBQ25CLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBU0osS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFDdEUsSUFBSUksR0FBRyxHQUFHLGtCQUFrQjtZQUM1QkEsR0FBRyxJQUFJUixXQUFXLEdBQUcscUJBQXFCQSxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzVELElBQUlTLFFBQVEsR0FBRyxDQUFDLENBQUNOLEtBQUssQ0FBQ00sUUFBUTtZQUUvQmIsTUFBQSxDQUFBVSxPQUFLLENBQUNJLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCTCxXQUFXLENBQUNGLEtBQUssQ0FBQ0MsUUFBUSxDQUFDO1lBQzVCLENBQUMsRUFBRSxDQUFDRCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBRXBCLE1BQU1PLGlCQUFpQixHQUFHZixNQUFBLENBQUFVLE9BQUssQ0FBQ00sUUFBUSxDQUFDQyxHQUFHLENBQUNaLFFBQVEsRUFBRSxDQUFDYSxLQUFLLEVBQUVDLEtBQUssS0FBSTtjQUN2RSxJQUFJbkIsTUFBQSxDQUFBVSxPQUFLLENBQUNVLGNBQWMsQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7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