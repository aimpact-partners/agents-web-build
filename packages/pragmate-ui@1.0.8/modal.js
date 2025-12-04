System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/base", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, AlertModal, ConfirmModal, Modal, IModalProps, __beyond_pkg, hmr;
  _export({
    AlertModal: void 0,
    ConfirmModal: void 0,
    Modal: void 0,
    IModalProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Components) {
      dependency_2 = _pragmateUi108Components;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_pragmateUi108Base) {
      dependency_4 = _pragmateUi108Base;
    }, function (_beyondJsKernel0114Styles) {
      dependency_5 = _beyondJsKernel0114Styles;
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
          "vspecifier": "pragmate-ui@1.0.8/modal"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['@beyond-js/kernel/styles', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/modal');
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./alert
      ***********************/
      ims.set('./alert', {
        hash: 853535473,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertModal = AlertModal;
          var React = require("react");
          var _modal = require("./modal");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function AlertModal(props) {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              centered,
              button = {}
            } = props;
            const close = async () => {
              setState({
                fetching: true
              });
              if (props.onConfirm) await props.onConfirm();
              setState({
                fetching: false
              });
              if (props.onClose) props.onClose();
            };
            const btnAttrs = {
              className: `btn btn-primary${props.className ? ` ${props.className}` : ''}`,
              disabled: state.fetching,
              label: props.buttonLabel || 'Confirm',
              onClick: close,
              ...button
            };
            let cls = `pui-alert-dialog${centered ? ' pui-alert-dialog-centered' : ''}`;
            if (props.className) cls += ` ${props.className}`;
            return React.createElement(_modal.Modal, {
              show: true,
              className: cls,
              onClose: props.onClose
            }, React.createElement("div", {
              className: 'alert-dialog-content'
            }, title && React.createElement(_components.HtmlWrapper, null, title), text && React.createElement(_components.HtmlWrapper, null, text), props.children ? props.children : null), React.createElement("div", {
              className: 'pui-modal-actions'
            }, React.createElement(_components.Button, {
              ...btnAttrs
            })));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./children
      **************************/

      ims.set('./children', {
        hash: 1764852864,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = exports.Children = void 0;
          var _react = require("react");
          var React = _react;
          var _icons = require("pragmate-ui/icons");
          const ModalContext = exports.ModalContext = (0, _react.createContext)({});
          const useModalContext = () => (0, _react.useContext)(ModalContext);
          exports.useModalContext = useModalContext;
          const Children = ({
            children,
            close,
            dismiss
          }) => {
            const output = [];
            if (dismiss !== false) {
              output.push(React.createElement(_icons.IconButton, {
                className: 'close-icon',
                onClick: close,
                "data-dismiss": 'modal',
                "aria-label": 'Close',
                key: 'dismiss-button',
                icon: 'close'
              }));
            }
            const childrenWithProps = React.Children.map(children, child => {
              // checking isValidElement is the safe way and avoids a typescript error too
              if ((0, _react.isValidElement)(child)) {
                const specs = {};
                //TODO: check a official way to check the children type
                return (0, _react.cloneElement)(child, specs);
              }
              return child;
            });
            output.push(childrenWithProps);
            return React.createElement(ModalContext.Provider, {
              value: {
                close,
                dismiss
              }
            }, output);
          };
          exports.Children = Children;
        }
      });

      /*******************************
      INTERNAL MODULE: ./confirm/index
      *******************************/

      ims.set('./confirm/index', {
        hash: 1766706381,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmModal = void 0;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("../modal");
          var _useActionProperties = require("./use-action-properties");
          /*bundle*/
          const ConfirmModal = properties => {
            const [state, setState] = React.useState({
              fetching: false
            });
            const {
              text,
              title,
              onCancel,
              centered,
              onClose,
              show
            } = properties;
            let cls = `pui-confirm-dialog${centered ? ' pui-confirm-dialog-centered' : ''}`;
            if (properties.className) cls += ` ${properties.className}`;
            const props = Object.assign({}, properties);
            ['text', 'title', 'className', 'centering', 'btnCancel', 'btnConfirm', 'onCancel'].forEach(prop => delete props[prop]);
            const [confirmProps, cancelProps] = (0, _useActionProperties.useActionProperties)(properties, setState);
            const disabled = {};
            if (state.fetching) disabled.disabled = true;
            const handleClose = onClose ?? onCancel;
            return React.createElement(_modal.Modal, {
              show: show,
              className: cls,
              onClose: handleClose
            }, React.createElement("div", {
              className: 'pui-confirm-dialog-content'
            }, title && React.createElement("h3", null, title), text && React.createElement("div", {
              className: 'pui-confirm-dialog-content__text'
            }, text), properties.children), React.createElement("div", {
              className: 'pui-actions'
            }, React.createElement(_components.Button, {
              ...cancelProps,
              ...disabled
            }), React.createElement(_components.Button, {
              ...disabled,
              ...confirmProps
            })));
          };
          exports.ConfirmModal = ConfirmModal;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./confirm/use-action-properties
      ***********************************************/

      ims.set('./confirm/use-action-properties', {
        hash: 1933355049,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useActionProperties = useActionProperties;
          /**
           * useActionProperties function
           *
           * This function is designed to process and return action properties for the Button component
           * in the Pragmate UI library. It supports the current API structure of the Button component
           * while maintaining backward compatibility with an older configuration format.
           *
           * The function takes a `properties` object as an argument. If this object contains an `actions` property,
           * it directly returns the `confirm` and `cancel` actions defined within. This is aligned with the current API design.
           *
           * For backward compatibility, the function also handles the scenario where the `actions` property is not present.
           * In this case, it extracts and processes individual properties like `onCancel`, `onConfirm`, `btnConfirm`, and `btnCancel`
           * from the `properties` object. These are then used to construct and return `confirm` and `cancel` action objects
           * with appropriate labels, class names, variants, and onClick handlers.
           *
           * @param {object} properties - The properties object containing either a direct `actions` property
           *                              or individual properties for backward compatibility.
           * @returns An array containing two action objects: confirm and cancel.
           */
          function useActionProperties(properties, setState) {
            const onProcessConfirm = callback => {
              return async event => {
                event.stopPropagation();
                setState({
                  fetching: true
                });
                await callback(event);
                setState({
                  fetching: false
                });
              };
            };
            if (properties.actions) {
              const confirmProps = {
                ...properties.actions.confirm
              };
              const cancelProps = {
                ...properties.actions.cancel
              };
              if (!confirmProps.onClick && !properties.onConfirm) {
                throw new Error('ConfirmModal: No confirm function defined');
              }
              if (!cancelProps.onClick && !properties.onCancel) {
                throw new Error('ConfirmModal: No cancel function defined');
              }
              confirmProps.onClick = onProcessConfirm(confirmProps.onClick ?? properties.onConfirm);
              cancelProps.onClick = cancelProps.onClick ?? properties.onCancel;
              return [confirmProps, cancelProps];
            }
            const {
              onCancel,
              onConfirm,
              btnConfirm,
              btnCancel
            } = properties;
            const defaultConfirm = {
              label: 'Confirm',
              variant: 'primary',
              onClick: onProcessConfirm(onConfirm)
            };
            const defaultCancel = {
              label: 'Cancel',
              variant: 'primary',
              onClick: onCancel,
              bordered: true
            };
            const actions = {
              confirm: typeof btnConfirm === 'object' ? {
                ...defaultConfirm,
                ...btnConfirm
              } : defaultConfirm,
              cancel: typeof btnCancel === 'object' ? {
                ...defaultCancel,
                ...btnCancel
              } : defaultCancel
            };
            return [actions.confirm, actions.cancel];
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./modal
      ***********************/

      ims.set('./modal', {
        hash: 346464964,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Modal = Modal;
          var _react = require("react");
          var React = _react;
          var _children = require("./children");
          /*bundle*/
          function Modal(props) {
            const [state, setState] = (0, _react.useState)({
              show: props?.show ?? false,
              closeClicked: (props.closeClicked || props.closeBackdrop) ?? true,
              container: null
            });
            const modal = (0, _react.useRef)(null);
            React.useEffect(() => {
              setState({
                ...state,
                show: props.show
              });
            }, [props.show]);
            const close = async event => {
              if (event) event.stopPropagation();
              const body = document.querySelector('body');
              modal.current.classList.add('modal-hidden');
              globalThis.setTimeout(async () => {
                setState({
                  ...state,
                  show: false,
                  closeClicked: true
                });
                body.setAttribute('style', '');
                body.classList.remove('body-custom-modal-opened');
                const {
                  onClose
                } = props;
                if (!onClose || typeof onClose !== 'function') return;
                onClose(event);
              }, 200);
            };
            const onClickBackdrop = event => {
              event.stopPropagation();
              if (!state.closeClicked) return;
              close(event);
            };
            const show = state.show;
            let cls = 'pui-modal ';
            cls += props.className ? props.className : '';
            if (show) cls += ' show-modal';
            const output = [];
            if (show) {
              output.push(React.createElement("div", {
                key: 'modal-content-wrapper',
                className: 'modal-wrapper'
              }, React.createElement("div", {
                className: 'modal-content',
                onClick: event => {
                  event.stopPropagation();
                }
              }, React.createElement(_children.Children, {
                ...props,
                close: close,
                key: 'children-content'
              }, props.children))));
            }
            return React.createElement("div", {
              ref: modal,
              onClick: onClickBackdrop,
              className: cls
            }, output);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/alert
      *****************************/

      ims.set('./types/alert', {
        hash: 3453279328,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************
      INTERNAL MODULE: ./types/confirm
      *******************************/

      ims.set('./types/confirm', {
        hash: 3090985645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************
      INTERNAL MODULE: ./types/modal-props
      ***********************************/

      ims.set('./types/modal-props', {
        hash: 1658030921,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./alert",
        "from": "AlertModal",
        "name": "AlertModal"
      }, {
        "im": "./confirm/index",
        "from": "ConfirmModal",
        "name": "ConfirmModal"
      }, {
        "im": "./modal",
        "from": "Modal",
        "name": "Modal"
      }, {
        "im": "./types/modal-props",
        "from": "IModalProps",
        "name": "IModalProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AlertModal') && _export("AlertModal", AlertModal = require ? require('./alert').AlertModal : value);
        (require || prop === 'ConfirmModal') && _export("ConfirmModal", ConfirmModal = require ? require('./confirm/index').ConfirmModal : value);
        (require || prop === 'Modal') && _export("Modal", Modal = require ? require('./modal').Modal : value);
        (require || prop === 'IModalProps') && _export("IModalProps", IModalProps = require ? require('./types/modal-props').IModalProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIkFsZXJ0TW9kYWwiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImZldGNoaW5nIiwidGV4dCIsInRpdGxlIiwiY2VudGVyZWQiLCJidXR0b24iLCJjbG9zZSIsIm9uQ29uZmlybSIsIm9uQ2xvc2UiLCJidG5BdHRycyIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwibGFiZWwiLCJidXR0b25MYWJlbCIsIm9uQ2xpY2siLCJjbHMiLCJjcmVhdGVFbGVtZW50IiwiTW9kYWwiLCJzaG93IiwiSHRtbFdyYXBwZXIiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIl9yZWFjdCIsIl9pY29ucyIsIk1vZGFsQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidXNlTW9kYWxDb250ZXh0IiwidXNlQ29udGV4dCIsIkNoaWxkcmVuIiwiZGlzbWlzcyIsIm91dHB1dCIsInB1c2giLCJJY29uQnV0dG9uIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuV2l0aFByb3BzIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInNwZWNzIiwiY2xvbmVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl91c2VBY3Rpb25Qcm9wZXJ0aWVzIiwiQ29uZmlybU1vZGFsIiwicHJvcGVydGllcyIsIm9uQ2FuY2VsIiwiT2JqZWN0IiwiYXNzaWduIiwiZm9yRWFjaCIsInByb3AiLCJjb25maXJtUHJvcHMiLCJjYW5jZWxQcm9wcyIsInVzZUFjdGlvblByb3BlcnRpZXMiLCJoYW5kbGVDbG9zZSIsIm9uUHJvY2Vzc0NvbmZpcm0iLCJjYWxsYmFjayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJjYW5jZWwiLCJFcnJvciIsImJ0bkNvbmZpcm0iLCJidG5DYW5jZWwiLCJkZWZhdWx0Q29uZmlybSIsInZhcmlhbnQiLCJkZWZhdWx0Q2FuY2VsIiwiYm9yZGVyZWQiLCJfY2hpbGRyZW4iLCJjbG9zZUNsaWNrZWQiLCJjbG9zZUJhY2tkcm9wIiwiY29udGFpbmVyIiwibW9kYWwiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwib25DbGlja0JhY2tkcm9wIiwicmVmIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL3RzL2FsZXJ0LnRzeCIsIi8vdHMvY2hpbGRyZW4udHN4IiwiLy90cy9jb25maXJtL2luZGV4LnRzeCIsIi8vdHMvY29uZmlybS91c2UtYWN0aW9uLXByb3BlcnRpZXMudHN4IiwiLy90cy9tb2RhbC50c3giLCIvL2FsZXJ0LnRzLyIsIi8vY29uZmlybS50cy8iLCIvL21vZGFsLXByb3BzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxXQUFBLEdBQUFGLE9BQUE7VUFHTztVQUFVLFNBQ1JHLFVBQVVBLENBQUNDLEtBQXVCO1lBQzFDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxRQUFRLENBQUM7Y0FBRUMsUUFBUSxFQUFFO1lBQUssQ0FBRSxDQUFDO1lBQzdELE1BQU07Y0FBRUMsSUFBSTtjQUFFQyxLQUFLO2NBQUVDLFFBQVE7Y0FBRUMsTUFBTSxHQUFHO1lBQUUsQ0FBRSxHQUFHUixLQUFLO1lBQ3BELE1BQU1TLEtBQUssR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDeEJQLFFBQVEsQ0FBQztn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