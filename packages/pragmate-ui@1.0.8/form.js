System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.8/base", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, CheckboxGroup, Checkbox, Form, Error, Label, Input, Radio, Select, OptionSelect, Switch, Textarea, __beyond_pkg, hmr;
  _export({
    CheckboxGroup: void 0,
    Checkbox: void 0,
    Form: void 0,
    Error: void 0,
    Label: void 0,
    Input: void 0,
    Radio: void 0,
    Select: void 0,
    OptionSelect: void 0,
    Switch: void 0,
    Textarea: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Base) {
      dependency_2 = _pragmateUi108Base;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_beyondJsKernel0112Styles) {
      dependency_4 = _beyondJsKernel0112Styles;
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
          "vspecifier": "pragmate-ui@1.0.8/form"
        },
        "type": "code",
        "name": "form"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/base', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/form');
      ims = new Map();
      /********************************
      INTERNAL MODULE: ./checkbox/group
      ********************************/
      ims.set('./checkbox/group', {
        hash: 4232336252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CheckboxGroup = CheckboxGroup;
          var _react = require("react");
          var _index = require("./index");
          /*bundle*/
          function CheckboxGroup(props) {
            const {
              options
            } = props;
            const output = options.map((option, index) => {
              const key = `${option.name}-${index}`;
              const {
                label,
                ...rest
              } = option;
              return _react.default.createElement(_index.Checkbox, {
                key: key,
                label: label,
                ...rest
              });
            });
            const directions = {
              column: 'column',
              row: 'row'
            };
            const direction = props.direction ?? `row`;
            const cls = `pui-checkbox-group pui-checkbox-group--${directions[direction]}`; // `pui-checkbox-group $;
            return _react.default.createElement("div", {
              className: cls
            }, props.label && _react.default.createElement("span", {
              className: 'pui-label'
            }, props.label), _react.default.createElement("div", {
              className: 'pui-group__items-container'
            }, output));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./checkbox/index
      ********************************/

      ims.set('./checkbox/index', {
        hash: 599928777,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Checkbox = void 0;
          var _react = require("react");
          /*bundle*/
          const Checkbox = exports.Checkbox = (0, _react.forwardRef)(function (props, ref) {
            const {
              checked,
              disabled,
              className,
              onChange,
              label
            } = props;
            const handleChange = event => {
              event.stopPropagation();
              onChange && onChange(event);
            };
            let cls = `pui-checkbox ${className ? className : ''}`;
            cls += disabled ? ' disabled' : '';
            const properties = Object.assign({}, props);
            ['className', 'checked', 'name', 'onChange'].forEach(prop => {
              delete properties[prop];
            });
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const name = props.name ?? 'pui-checkbox--name';
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            return _react.default.createElement("div", {
              className: cls,
              onClick: handleChange
            }, _react.default.createElement("input", {
              ref: ref,
              type: 'checkbox',
              className: 'pui-checkbox--input',
              id: id,
              name: name,
              checked: checked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: 'pui-checkbox--label',
              htmlFor: id
            }, _react.default.createElement("span", null, _react.default.createElement("svg", {
              viewBox: '0 0 12 9'
            }, _react.default.createElement("polyline", {
              points: '1 5 4 8 11 1'
            }))), _react.default.createElement("span", null, label)));
          });
        }
      });

      /**********************
      INTERNAL MODULE: ./form
      **********************/

      ims.set('./form', {
        hash: 99719699,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Form = Form;
          var _react = require("react");
          /*bundle*/
          function Form(props) {
            const {
              onSubmit,
              ...restProps
            } = props;
            const handleSubmit = event => {
              event.preventDefault();
              event.stopPropagation();
              props.onSubmit(event);
            };
            return _react.default.createElement("form", {
              onSubmit: handleSubmit,
              ...restProps
            }, props.children);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/date
      ***************************************/

      ims.set('./input/components/date', {
        hash: 4016619854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Date = Date;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Date() {
            const {
              input,
              props,
              icon,
              isDate
            } = (0, _context.useInputContext)();
            if (!isDate) return null;
            const iconValue = icon ? icon : 'calendar';
            const showPicker = () => {
              if (props.disabled) return;
              input.current.showPicker();
            };
            return _react.default.createElement(_icons.Icon, {
              key: 'icon',
              icon: iconValue,
              className: 'pui-input__icon',
              onClick: showPicker
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/error
      ****************************************/

      ims.set('./input/components/error', {
        hash: 534355326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Error = Error;
          var _react = require("react");
          /*bundle*/
          function Error({
            show,
            message,
            className,
            children
          }) {
            if (!show) return null;
            const cls = `pui-input-error-label${className ? ` ${className}` : ''}`;
            return _react.default.createElement("span", {
              className: cls
            }, message, " ", children);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./input/components/icon-container
      *************************************************/

      ims.set('./input/components/icon-container', {
        hash: 168038464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconContainer = IconContainer;
          var _react = require("react");
          var _password = require("./password");
          var _context = require("../context");
          var _date = require("./date");
          var _icon = require("./icon");
          function IconContainer() {
            const {
              props
            } = (0, _context.useInputContext)();
            const types = {
              password: _password.Password,
              date: _date.Date,
              default: null,
              month: _date.Date,
              week: _date.Date,
              'datetime-local': _date.Date
            };
            const output = [];
            if (!!types[props.type]) {
              const Control = types[props.type];
              output.push(_react.default.createElement(Control, {
                key: "control"
              }));
            }
            ;
            if (!!props.icon) {
              output.push(_react.default.createElement(_icon.Icon, {
                key: "icon"
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, output);
          }
          ;
        }
      });

      /***************************************
      INTERNAL MODULE: ./input/components/icon
      ***************************************/

      ims.set('./input/components/icon', {
        hash: 2806631327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Icon = Icon;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function Icon() {
            const {
              props: {
                icon
              },
              isDate
            } = (0, _context.useInputContext)();
            if (!icon || isDate) return null;
            return _react.default.createElement(_icons.Icon, {
              icon: icon,
              className: "input-icon"
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/components/label
      ****************************************/

      ims.set('./input/components/label', {
        hash: 1837895848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Label = Label;
          var _react = require("react");
          var _context = require("../context");
          /*bundle */
          function Label({
            required,
            position,
            children
          } = {}) {
            const {
              name,
              id
            } = (0, _context.useInputContext)();
            const variants = {
              floating: 'floating-label',
              right: 'pui-input__label--right',
              bottom: 'pui-input__label--bottom',
              'bottom-right': 'pui-input__label--bottom-right'
            };
            let cls = `pui-input__label ${variants[position] ? ` ${variants[position]}` : ''}`;
            if (required) cls += ' is-required';
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("label", {
              htmlFor: id ?? name,
              className: cls
            }, _react.default.createElement("span", {
              className: 'label-content'
            }, " ", children)));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./input/components/password
      *******************************************/

      ims.set('./input/components/password', {
        hash: 1440208605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Password = Password;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          function Password() {
            const {
              state,
              setState
            } = (0, _context.useInputContext)();
            const changeType = event => {
              event.stopPropagation();
              setState({
                ...state,
                type: state.type === "password" ? "text" : "password"
              });
            };
            const attrs = {
              className: "icon-eye",
              onClick: changeType,
              icon: state.type === "password" ? "eye" : "eye-slash"
            };
            return _react.default.createElement(_icons.IconButton, {
              ...attrs
            });
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/context
      *******************************/

      ims.set('./input/context', {
        hash: 902539138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useInputContext = exports.InputContext = void 0;
          var React = require("react");
          const InputContext = exports.InputContext = React.createContext({});
          const useInputContext = () => React.useContext(InputContext);
          exports.useInputContext = useInputContext;
        }
      });

      /*******************************
      INTERNAL MODULE: ./input/control
      *******************************/

      ims.set('./input/control', {
        hash: 765945223,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ControlSelector = ControlSelector;
          var _react = require("react");
          var _context = require("./context");
          var _internalProps = require("./internal-props");
          var _iconContainer = require("./components/icon-container");
          function ControlSelector() {
            const {
              setState,
              state,
              value,
              setValue,
              props: {
                name,
                id,
                placeholder
              },
              props,
              input
            } = (0, _context.useInputContext)();
            let properties = {
              ...props
            };
            _internalProps.internalProps.forEach(prop => delete properties[prop]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              const currentValue = event.currentTarget.value;
              setValue(currentValue);
              setState({
                ...state,
                _hasError: false,
                value: currentValue
              });
            };
            const attrs = {
              id: id ?? name,
              placeholder: placeholder ?? '',
              value: value ?? ''
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", {
              ref: input,
              ...properties,
              name: name,
              onChange: handleChange,
              type: state.type,
              ...attrs
            }), _react.default.createElement(_iconContainer.IconContainer, null));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./input/index
      *****************************/

      ims.set('./input/index', {
        hash: 1920991899,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Input = Input;
          var _react = require("react");
          var _context = require("./context");
          var _label = require("./components/label");
          var _control = require("./control");
          var _error = require("./components/error");
          /*bundle*/ /**
                      *
                      * @param props
                      *
                      * 1. pattern property + existing error.
                      * 2. Controlled Input where the implementer defines the error.
                      * 3. Automated Input with multiple validations and error management.
                      *
                      * @returns
                      */
          function Input(props) {
            const {
              hasError,
              errorMessage,
              variant,
              className,
              label,
              children,
              icon,
              type
            } = props;
            const [value, setValue] = _react.default.useState(props.value ?? '');
            const [state, setState] = (0, _react.useState)({
              type
            });
            const input = (0, _react.useRef)(null);
            let cls = `pui-input${className ? ` ${className}` : ''}`;
            const dates = ['date', 'week', 'month', 'time', 'datetime-local'];
            const isDate = dates.includes(props.type);
            if (isDate) cls += ' pui-input--date';
            if (!!icon) cls += ' pui-input--icon';
            if (!!icon && variant === 'floating') cls += ' icon__floating';
            if (props.type === 'password') cls += ' pui-input--password';
            const variants = {
              unstyled: 'pui-input--unstyled',
              floating: 'pui-input--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
            const providerValue = {
              props,
              state,
              setState,
              value: props.value ?? value,
              setValue,
              input,
              icon,
              isDate
            };
            const labelSpecs = {
              required: props.required
            };
            const attrs = {};
            /**
             * todo: review it.
             */
            if (variant === 'floating') labelSpecs.position = variant;
            if (variant !== 'unstyled') attrs.className = cls;
            return _react.default.createElement(_context.InputContext.Provider, {
              value: providerValue
            }, _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(_control.ControlSelector, null), children, label && _react.default.createElement(_label.Label, {
              ...labelSpecs
            }, label), errorMessage && _react.default.createElement(_error.Error, {
              show: !!hasError,
              message: errorMessage
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./input/interfaces/index
      ****************************************/

      ims.set('./input/interfaces/index', {
        hash: 3145852206,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          ;
          ;
          ;
          ;
        }
      });

      /**************************************
      INTERNAL MODULE: ./input/internal-props
      **************************************/

      ims.set('./input/internal-props', {
        hash: 240084044,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.internalProps = void 0;
          /**
           * Internal props of the input component.
           * This array is used to filter the props passed to the input component.
           */
          const internalProps = exports.internalProps = ['className', 'hasError', 'errorMessage', 'children', 'icon', 'label', 'password', 'loading', 'variant', 'type', 'size', 'loading', 'error', 'sources', 'onError'];
          function generateAttributes(attrs, toRemove = []) {
            const propsToRemove = [...internalProps, ...toRemove];
            const properties = {
              ...attrs
            };
            propsToRemove.forEach(prop => delete properties[prop]);
            return properties;
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./model/manager
      *******************************/

      ims.set('./model/manager', {
        hash: 3171752923,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectorManager = void 0;
          class SelectorManager {
            static #instance;
            #selector;
            get selector() {
              return this.#selector;
            }
            constructor(selector) {}
            validate() {}
            static get(selector) {
              if (!this.#instance) {
                this.#instance = new SelectorManager(selector);
              }
              return this.#instance;
            }
          }
          exports.SelectorManager = SelectorManager;
        }
      });

      /***********************
      INTERNAL MODULE: ./radio
      ***********************/

      ims.set('./radio', {
        hash: 1700275994,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Radio = Radio;
          var _react = require("react");
          /*bundle*/
          function Radio(props) {
            const input = (0, _react.useRef)(null);
            const onClick = event => {
              event.stopPropagation();
              input.current.checked = true;
              if (!!props.onChange) props.onChange(event);
            };
            const properties = {
              ...props
            };
            delete properties.onChange;
            const cls = `pragmate-element-radio ${properties.className ? properties.className : ''}`;
            return _react.default.createElement("label", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("input", {
              ref: input,
              ...properties,
              type: 'radio',
              onChange: onClick
            }), properties.label && _react.default.createElement("span", null, properties.label));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./select/index
      ******************************/

      ims.set('./select/index', {
        hash: 912006739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Select = Select;
          var _react = require("react");
          var _option = require("./option");
          /*bundle */
          function Select(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            delete attributes.options;
            const value = ![undefined, null].includes(props.value) ?? '';
            let output = [];
            if (props.options) {
              props.options.forEach((item, key) => {
                output.push(_react.default.createElement(_option.OptionSelect, {
                  ...item,
                  key: key
                }));
              });
            }
            const ramdon = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            const id = props.id ?? `${name}-${performance.now()}.${ramdon}`;
            const cls = `pui-input-select`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("label", {
              htmlFor: id
            }, props.label), _react.default.createElement("select", {
              className: cls,
              ...attributes
            }, output, children));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./select/option
      *******************************/

      ims.set('./select/option', {
        hash: 2324332836,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OptionSelect = OptionSelect;
          var _react = require("react");
          /*bundle */
          function OptionSelect(props) {
            const {
              children
            } = props;
            const attributes = {
              ...props
            };
            delete attributes.children;
            return _react.default.createElement("option", {
              ...attributes
            }, children);
          }
        }
      });

      /************************
      INTERNAL MODULE: ./switch
      ************************/

      ims.set('./switch', {
        hash: 872227154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Switch = Switch;
          var _react = require("react");
          /* bundle */
          function Switch(props) {
            const {
              checked,
              onChange,
              variant = 'primary',
              disabled,
              sizing = 'md',
              className
            } = props;
            const [isChecked, setIsChecked] = _react.default.useState(!!checked);
            _react.default.useEffect(() => {
              if (isChecked === checked) return;
              setIsChecked(checked);
            }, [checked]);
            const handleChange = event => {
              event.stopPropagation();
              setIsChecked(event.currentTarget.checked);
              onChange && onChange(event);
            };
            let classNameSwitch = `pui-element-switch ${className ? className : ''}`;
            classNameSwitch += disabled ? ' disabled' : '';
            let cls = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
            cls += variant ? ` ${variant}` : '';
            cls += sizing ? ` ${sizing}` : '';
            const properties = {
              ...props
            };
            ['className', 'checked', 'onChange', 'variant', 'sizing', 'id'].forEach(prop => {
              delete properties[prop];
            });
            const id = props.id ?? props.name ?? 'pui-element-switch';
            return _react.default.createElement("div", {
              className: classNameSwitch
            }, _react.default.createElement("input", {
              className: 'pui-element-switch__checkbox',
              id: id,
              type: 'checkbox',
              checked: isChecked,
              onChange: handleChange,
              ...properties
            }), _react.default.createElement("label", {
              className: cls,
              htmlFor: id
            }, _react.default.createElement("span", {
              className: `label__btn--slider`
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./textarea/counter
      **********************************/

      ims.set('./textarea/counter', {
        hash: 1510952168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaCounter = TextareaCounter;
          var _react = require("react");
          function TextareaCounter({
            counter,
            length,
            maxlength
          }) {
            if (!counter) return null;
            let cls = 'pui-textarea-counter';
            if (maxlength && length > maxlength - 15) {
              cls += length > maxlength - 5 ? ' pui-textarea-counter--danger' : ' pui-textarea-counter--warning';
            }
            return _react.default.createElement("span", {
              className: cls
            }, length ?? 0);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/error
      ********************************/

      ims.set('./textarea/error', {
        hash: 2150596302,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TextareaError = TextareaError;
          var _react = require("react");
          function TextareaError({
            state,
            hasError,
            errorMessage,
            value
          }) {
            if (!state._hasError && !hasError) return null;
            if (hasError || value !== '') errorMessage = errorMessage ? errorMessage : state.errorMessage;
            return _react.default.createElement("span", {
              className: 'pui-element-input-error'
            }, errorMessage);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/index
      ********************************/

      ims.set('./textarea/index', {
        hash: 1666522646,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Textarea = Textarea;
          var _react = require("react");
          var _error = require("./error");
          var _counter = require("./counter");
          let previousHeight = 0;
          /*bundle*/
          function Textarea(props) {
            const input = props.ref ?? (0, _react.useRef)();
            const {
              counter,
              errorMessage,
              autoresize = true,
              value = ''
            } = props;
            const [state, setState] = (0, _react.useState)({
              value,
              errorMessage
            });
            _react.default.useEffect(() => {
              const textarea = input.current;
              textarea.style.height = 'auto';
              // Set new height based on scrollHeight
              textarea.style.height = `${textarea.scrollHeight}px`;
            }, [value]);
            const handleChange = event => {
              if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
              // const value = cleanExtraNewlines(event.target.value);
              const value = event.target.value;
              setState({
                ...state,
                _hasError: false,
                value
              });
            };
            let properties = {
              ...props
            };
            let cls = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
            cls += props.disabled ? ' disabled' : '';
            cls += props.hasError ? ' error' : '';
            ['className', 'hasError', 'counter', 'errorMessage', 'children', 'label', 'floating'].forEach(prop => delete properties[prop]);
            const variants = {
              unstyled: 'pui-textarea--unstyled',
              floating: 'pui-textarea--floating'
            };
            if (props.variant && variants[props.variant]) cls += ` ${variants[props.variant]}`;
            let clsLabel = '';
            if (props.required) cls += ' is-required';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("textarea", {
              ref: input,
              ...properties,
              name: props.name,
              onChange: handleChange,
              value: value,
              placeholder: props.placeholder ?? ' '
            }), props.children, _react.default.createElement(_error.TextareaError, {
              state: state,
              hasError: props.hasError,
              value: value,
              errorMessage: props.errorMessage
            }), props.label && _react.default.createElement("label", {
              className: clsLabel,
              htmlFor: props.id
            }, props.label), _react.default.createElement(_counter.TextareaCounter, {
              length: input?.current?.value.length,
              maxlength: props.maxLength,
              counter: counter
            }));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./textarea/types
      ********************************/

      ims.set('./textarea/types', {
        hash: 1171268489,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 4163527322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./checkbox/group",
        "from": "CheckboxGroup",
        "name": "CheckboxGroup"
      }, {
        "im": "./checkbox/index",
        "from": "Checkbox",
        "name": "Checkbox"
      }, {
        "im": "./form",
        "from": "Form",
        "name": "Form"
      }, {
        "im": "./input/components/error",
        "from": "Error",
        "name": "Error"
      }, {
        "im": "./input/components/label",
        "from": "Label",
        "name": "Label"
      }, {
        "im": "./input/index",
        "from": "Input",
        "name": "Input"
      }, {
        "im": "./radio",
        "from": "Radio",
        "name": "Radio"
      }, {
        "im": "./select/index",
        "from": "Select",
        "name": "Select"
      }, {
        "im": "./select/option",
        "from": "OptionSelect",
        "name": "OptionSelect"
      }, {
        "im": "./switch",
        "from": "Switch",
        "name": "Switch"
      }, {
        "im": "./textarea/index",
        "from": "Textarea",
        "name": "Textarea"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'CheckboxGroup') && _export("CheckboxGroup", CheckboxGroup = require ? require('./checkbox/group').CheckboxGroup : value);
        (require || prop === 'Checkbox') && _export("Checkbox", Checkbox = require ? require('./checkbox/index').Checkbox : value);
        (require || prop === 'Form') && _export("Form", Form = require ? require('./form').Form : value);
        (require || prop === 'Error') && _export("Error", Error = require ? require('./input/components/error').Error : value);
        (require || prop === 'Label') && _export("Label", Label = require ? require('./input/components/label').Label : value);
        (require || prop === 'Input') && _export("Input", Input = require ? require('./input/index').Input : value);
        (require || prop === 'Radio') && _export("Radio", Radio = require ? require('./radio').Radio : value);
        (require || prop === 'Select') && _export("Select", Select = require ? require('./select/index').Select : value);
        (require || prop === 'OptionSelect') && _export("OptionSelect", OptionSelect = require ? require('./select/option').OptionSelect : value);
        (require || prop === 'Switch') && _export("Switch", Switch = require ? require('./switch').Switch : value);
        (require || prop === 'Textarea') && _export("Textarea", Textarea = require ? require('./textarea/index').Textarea : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2luZGV4IiwiQ2hlY2tib3hHcm91cCIsInByb3BzIiwib3B0aW9ucyIsIm91dHB1dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4Iiwia2V5IiwibmFtZSIsImxhYmVsIiwicmVzdCIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQ2hlY2tib3giLCJkaXJlY3Rpb25zIiwiY29sdW1uIiwicm93IiwiZGlyZWN0aW9uIiwiY2xzIiwiY2xhc3NOYW1lIiwiZXhwb3J0cyIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImZvckVhY2giLCJwcm9wIiwicmFtZG9uIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaWQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm9uQ2xpY2siLCJ0eXBlIiwiaHRtbEZvciIsInZpZXdCb3giLCJwb2ludHMiLCJGb3JtIiwib25TdWJtaXQiLCJyZXN0UHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiX2ljb25zIiwiX2NvbnRleHQiLCJEYXRlIiwiaW5wdXQiLCJpY29uIiwiaXNEYXRlIiwidXNlSW5wdXRDb250ZXh0IiwiaWNvblZhbHVlIiwic2hvd1BpY2tlciIsImN1cnJlbnQiLCJJY29uIiwiRXJyb3IiLCJzaG93IiwibWVzc2FnZSIsIl9wYXNzd29yZCIsIl9kYXRlIiwiX2ljb24iLCJJY29uQ29udGFpbmVyIiwidHlwZXMiLCJwYXNzd29yZCIsIlBhc3N3b3JkIiwiZGF0ZSIsIm1vbnRoIiwid2VlayIsIkNvbnRyb2wiLCJwdXNoIiwiRnJhZ21lbnQiLCJMYWJlbCIsInJlcXVpcmVkIiwicG9zaXRpb24iLCJ2YXJpYW50cyIsImZsb2F0aW5nIiwicmlnaHQiLCJib3R0b20iLCJzdGF0ZSIsInNldFN0YXRlIiwiY2hhbmdlVHlwZSIsImF0dHJzIiwiSWNvbkJ1dHRvbiIsIlJlYWN0IiwiSW5wdXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaW50ZXJuYWxQcm9wcyIsIl9pY29uQ29udGFpbmVyIiwiQ29udHJvbFNlbGVjdG9yIiwidmFsdWUiLCJzZXRWYWx1ZSIsInBsYWNlaG9sZGVyIiwiaW50ZXJuYWxQcm9wcyIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJfaGFzRXJyb3IiLCJfbGFiZWwiLCJfY29udHJvbCIsIl9lcnJvciIsIklucHV0IiwiaGFzRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YXJpYW50IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJkYXRlcyIsImluY2x1ZGVzIiwidW5zdHlsZWQiLCJwcm92aWRlclZhbHVlIiwibGFiZWxTcGVjcyIsIlByb3ZpZGVyIiwiZ2VuZXJhdGVBdHRyaWJ1dGVzIiwidG9SZW1vdmUiLCJwcm9wc1RvUmVtb3ZlIiwiU2VsZWN0b3JNYW5hZ2VyIiwiaW5zdGFuY2UiLCJzZWxlY3RvciIsImNvbnN0cnVjdG9yIiwidmFsaWRhdGUiLCJnZXQiLCJSYWRpbyIsIl9vcHRpb24iLCJTZWxlY3QiLCJhdHRyaWJ1dGVzIiwidW5kZWZpbmVkIiwiaXRlbSIsIk9wdGlvblNlbGVjdCIsIlN3aXRjaCIsInNpemluZyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsInVzZUVmZmVjdCIsImNsYXNzTmFtZVN3aXRjaCIsIlRleHRhcmVhQ291bnRlciIsImNvdW50ZXIiLCJsZW5ndGgiLCJtYXhsZW5ndGgiLCJUZXh0YXJlYUVycm9yIiwiX2NvdW50ZXIiLCJwcmV2aW91c0hlaWdodCIsIlRleHRhcmVhIiwiYXV0b3Jlc2l6ZSIsInRleHRhcmVhIiwic3R5bGUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YXJnZXQiLCJjbHNMYWJlbCIsIm1heExlbmd0aCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9jaGVja2JveC9ncm91cC50c3giLCIvL3RzL2NoZWNrYm94L2luZGV4LnRzeCIsIi8vdHMvZm9ybS50c3giLCIvL3RzL2lucHV0L2NvbXBvbmVudHMvZGF0ZS50c3giLCIvL3RzL2lucHV0L2NvbXBvbmVudHMvZXJyb3IudHN4IiwiLy90cy9pbnB1dC9jb21wb25lbnRzL2ljb24tY29udGFpbmVyLnRzeCIsIi8vdHMvaW5wdXQvY29tcG9uZW50cy9pY29uLnRzeCIsIi8vdHMvaW5wdXQvY29tcG9uZW50cy9sYWJlbC50c3giLCIvL3RzL2lucHV0L2NvbXBvbmVudHMvcGFzc3dvcmQudHN4IiwiLy90cy9pbnB1dC9jb250ZXh0LnRzIiwiLy90cy9pbnB1dC9jb250cm9sLnRzeCIsIi8vdHMvaW5wdXQvaW5kZXgudHN4IiwiLy90cy9pbnB1dC9pbnRlcmZhY2VzL2luZGV4LnRzIiwiLy90cy9pbnB1dC9pbnRlcm5hbC1wcm9wcy50cyIsIi8vdHMvbW9kZWwvbWFuYWdlci50cyIsIi8vdHMvcmFkaW8udHN4IiwiLy90cy9zZWxlY3QvaW5kZXgudHN4IiwiLy90cy9zZWxlY3Qvb3B0aW9uLnRzeCIsIi8vdHMvc3dpdGNoLnRzeCIsIi8vdHMvdGV4dGFyZWEvY291bnRlci50c3giLCIvL3RzL3RleHRhcmVhL2Vycm9yLnRzeCIsIi8vdHMvdGV4dGFyZWEvaW5kZXgudHN4IiwiLy90eXBlcy50cy8iLCIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVP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