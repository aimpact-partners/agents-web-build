System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.0.4/hooks", "@beyond-js/events@0.0.7/events", "pragmate-ui@1.0.2/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Toasts, ToastTypes, IToast, toast, Toast, __beyond_pkg, hmr;
  _export({
    Toasts: void 0,
    ToastTypes: void 0,
    IToast: void 0,
    toast: void 0,
    Toast: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_3 = _beyondJsReact18Widgets104Hooks;
    }, function (_beyondJsEvents007Events) {
      dependency_4 = _beyondJsEvents007Events;
    }, function (_pragmateUi102Icons) {
      dependency_5 = _pragmateUi102Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["framer-motion", "11.11.11"], ["is-mobile", "4.0.0"], ["perfect-scrollbar", "1.5.6"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["@beyond-js/backend", "0.1.9"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.2"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.2/toast"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/react-18-widgets/hooks', dependency_3], ['@beyond-js/events/events', dependency_4], ['pragmate-ui/icons', dependency_5]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/toast');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/
      ims.set('./definitions', {
        hash: 3587947160,
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
        hash: 3785050156,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toasts = Toasts;
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _model = require("./model");
          var _toast = require("./toast");
          /*bundle*/
          function Toasts({
            position = {
              bottom: '1rem',
              right: '1rem'
            },
            className,
            ...props
          }) {
            const [items, setItems] = _react.default.useState([]);
            (0, _hooks.useBinder)([_model.toast], () => setItems(_model.toast.current), 'current.toast.changed');
            const elements = items.map(item => _react.default.createElement(_toast.Toast, {
              key: item.id,
              ...item,
              className: className,
              position: position
            }));
            return _react.default.createElement("div", {
              style: position,
              className: `pui-toast__container ${className}`,
              ...props
            }, elements);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 1944552155,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.toast = void 0;
          var _events = require("@beyond-js/events/events");
          class Toast extends _events.Events {
            #current;
            get current() {
              return this.#current;
            }
            set current(newValue) {
              this.#current = newValue;
              this.trigger('current.toast.changed');
            }
            constructor() {
              super();
              this.#current = [];
            }
            #generateUniqueId() {
              return crypto.getRandomValues(new Uint8Array(16)).toString();
            }
            #add(type, message, duration) {
              const newToast = {
                id: this.#generateUniqueId(),
                message,
                type,
                duration
              };
              this.#current = [...this.#current, newToast];
              this.trigger('current.toast.changed');
              return newToast.id;
            }
            remove(toastId) {
              this.#current = this.#current.filter(toast => toast.id !== toastId);
              this.trigger('current.toast.changed');
            }
            success(message, duration) {
              return this.#add('success', message, duration);
            }
            error(message, duration) {
              return this.#add('error', message, duration);
            }
            warning(message, duration) {
              return this.#add('warning', message, duration);
            }
            info(message, duration) {
              return this.#add('info', message, duration);
            }
            loading(message, duration) {
              return this.#add('loading', message, duration);
            }
          }
          /*bundle*/
          const toast = exports.toast = new Toast();
        }
      });

      /***********************
      INTERNAL MODULE: ./toast
      ***********************/

      ims.set('./toast', {
        hash: 655369133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Toast = Toast;
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _useToast = require("./use-toast");
          const DEFAULT_DURATION = 3000;
          /*bundle*/
          function Toast({
            type,
            message,
            duration,
            id
          }) {
            const toastRef = _react.default.useRef(null);
            duration = duration ?? DEFAULT_DURATION;
            (0, _useToast.useToastAnimation)(toastRef, duration, id);
            const icons = {
              error: 'triangle-exclamation',
              success: 'tickCircle',
              info: 'infoCircle',
              loading: 'refreshCircle',
              warning: 'warning'
            };
            return _react.default.createElement("article", {
              ref: toastRef,
              className: `toast ${type}`
            }, _react.default.createElement(_icons.Icon, {
              icon: icons[type],
              className: 'icon'
            }), _react.default.createElement("p", {
              className: 'message'
            }, message));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./use-toast
      ***************************/

      ims.set('./use-toast', {
        hash: 3446030186,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useToastAnimation = useToastAnimation;
          var _react = require("react");
          var _model = require("./model");
          const ANIMATION_MARGIN = 300;
          function useToastAnimation(ref, duration, id) {
            _react.default.useEffect(() => {
              if (ref.current) {
                ref.current.classList.add('enter');
              }
              return () => {
                if (ref.current) ref.current.classList.remove('enter');
              };
            }, [ref]);
            _react.default.useEffect(() => {
              const enterTimeout = setTimeout(() => {
                if (ref.current) {
                  ref.current.classList.remove('enter');
                  ref.current.classList.add('exit');
                }
              }, duration);
              const exitTimeout = setTimeout(() => {
                _model.toast.current = _model.toast.current.filter(item => item.id !== id);
              }, duration + ANIMATION_MARGIN);
              return () => {
                clearTimeout(enterTimeout);
                clearTimeout(exitTimeout);
              };
            }, [duration, id, ref]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Toasts",
        "name": "Toasts"
      }, {
        "im": "./model",
        "from": "ToastTypes",
        "name": "ToastTypes"
      }, {
        "im": "./model",
        "from": "IToast",
        "name": "IToast"
      }, {
        "im": "./model",
        "from": "toast",
        "name": "toast"
      }, {
        "im": "./toast",
        "from": "Toast",
        "name": "Toast"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Toasts') && _export("Toasts", Toasts = require ? require('./index').Toasts : value);
        (require || prop === 'ToastTypes') && _export("ToastTypes", ToastTypes = require ? require('./model').ToastTypes : value);
        (require || prop === 'IToast') && _export("IToast", IToast = require ? require('./model').IToast : value);
        (require || prop === 'toast') && _export("toast", toast = require ? require('./model').toast : value);
        (require || prop === 'Toast') && _export("Toast", Toast = require ? require('./toast').Toast : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9yZWFjdCIsInJlcXVpcmUiLCJfaG9va3MiLCJfbW9kZWwiLCJfdG9hc3QiLCJUb2FzdHMiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJpdGVtcyIsInNldEl0ZW1zIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidXNlQmluZGVyIiwidG9hc3QiLCJjdXJyZW50IiwiZWxlbWVudHMiLCJtYXAiLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsIlRvYXN0Iiwia2V5IiwiaWQiLCJzdHlsZSIsIl9ldmVudHMiLCJFdmVudHMiLCJuZXdWYWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImdlbmVyYXRlVW5pcXVlSWQiLCIjZ2VuZXJhdGVVbmlxdWVJZCIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsImFkZCIsIiNhZGQiLCJ0eXBlIiwibWVzc2FnZSIsImR1cmF0aW9uIiwibmV3VG9hc3QiLCJyZW1vdmUiLCJ0b2FzdElkIiwiZmlsdGVyIiwic3VjY2VzcyIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJsb2FkaW5nIiwiX2ljb25zIiwiX3VzZVRvYXN0IiwiREVGQVVMVF9EVVJBVElPTiIsInRvYXN0UmVmIiwidXNlUmVmIiwidXNlVG9hc3RBbmltYXRpb24iLCJpY29ucyIsInJlZiIsIkljb24iLCJpY29uIiwiQU5JTUFUSU9OX01BUkdJTiIsInVzZUVmZmVjdCIsImNsYXNzTGlzdCIsImVudGVyVGltZW91dCIsInNldFRpbWVvdXQiLCJleGl0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VzIjpbIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvbW9kZWwudHMiLCIvdHMvdG9hc3QudHN4IiwiL3RzL3VzZS10b2FzdC50c3giXSwic291cmNlc0NvbnRlbnQiOltu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