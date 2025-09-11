System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/icons", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AddButton, RemoveButton, DynamicButton, DynamicIconButton, useDynamicFieldContext, DynamicField, DynamicFieldContainer, TotalElements, __beyond_pkg, hmr;
  _export({
    AddButton: void 0,
    RemoveButton: void 0,
    DynamicButton: void 0,
    DynamicIconButton: void 0,
    useDynamicFieldContext: void 0,
    DynamicField: void 0,
    DynamicFieldContainer: void 0,
    TotalElements: void 0
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
          "vspecifier": "@aimpact/platform@0.1.6/shared/dynamic-field"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/components', dependency_2], ['pragmate-ui/icons', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/shared/dynamic-field');
      ims = new Map();
      /*****************************
      INTERNAL MODULE: ./actions/add
      *****************************/
      ims.set('./actions/add', {
        hash: 4126504715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AddButton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _wrapper = require("./wrapper");
          /*bundle*/ // AddButton.tsx

          const AddButton = ({
            template,
            children
          }) => {
            const {
              onAdd
            } = (0, _context.useDynamicFieldContext)();
            return _react.default.createElement(_wrapper.ActionWrapper, {
              onClick: onAdd
            }, children);
          };
          exports.AddButton = AddButton;
        }
      });

      /********************************
      INTERNAL MODULE: ./actions/remove
      ********************************/

      ims.set('./actions/remove', {
        hash: 1978015170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RemoveButton = void 0;
          var _react = require("react");
          var _context = require("../context");
          var _wrapper = require("./wrapper");
          /*bundle*/ // RemoveButton.tsx

          const RemoveButton = ({
            index,
            children
          }) => {
            const {
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            return _react.default.createElement(_wrapper.ActionWrapper, {
              onClick: () => onRemove(index)
            }, children);
          };
          exports.RemoveButton = RemoveButton;
        }
      });

      /*********************************
      INTERNAL MODULE: ./actions/wrapper
      *********************************/

      ims.set('./actions/wrapper', {
        hash: 3526438104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionWrapper = void 0;
          var _react = require("react");
          const ActionWrapper = ({
            children,
            onClick
          }) => {
            if (!_react.default.isValidElement(children)) {
              console.error('ActionWrapper: The child must be a valid React element.');
              return null;
            }
            return _react.default.cloneElement(children, {
              onClick
            });
          };
          exports.ActionWrapper = ActionWrapper;
        }
      });

      /***********************************
      INTERNAL MODULE: ./components/button
      ***********************************/

      ims.set('./components/button', {
        hash: 4211450496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicButton = DynamicButton;
          exports.DynamicIconButton = DynamicIconButton;
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function DynamicButton({
            children,
            action,
            index,
            onClick,
            ...props
          }) {
            const {
              onAdd,
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            const actions = {
              add: onAdd,
              remove: onRemove
            };
            const handleClick = () => {
              if (onClick) onClick();
              if (action && actions[action]) actions[action](index);
            };
            return _react.default.createElement(_components.Button, {
              ...props,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function DynamicIconButton({
            children,
            index,
            action,
            onClick,
            ...props
          }) {
            const {
              onAdd,
              onRemove
            } = (0, _context.useDynamicFieldContext)();
            const actions = {
              add: onAdd,
              remove: onRemove
            };
            const handleClick = () => {
              if (onClick) onClick();
              if (action && actions[action]) actions[action](index);
            };
            return _react.default.createElement(_icons.IconButton, {
              ...props,
              onClick: handleClick
            }, children);
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./components/template
      *************************************/

      ims.set('./components/template', {
        hash: 1394527578,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.defaultFieldTemplate = void 0;
          var React = require("react");
          const defaultFieldTemplate = children => {
            return React.Children.toArray(children).reduce((acc, child) => {
              if (React.isValidElement(child) && child.props.name) {
                acc[child.props.name] = '';
              }
              return acc;
            }, {});
          };
          exports.defaultFieldTemplate = defaultFieldTemplate;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 3988890539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDynamicFieldContext = exports.ModuleContext = void 0;
          var React = require("react");
          const ModuleContext = exports.ModuleContext = React.createContext({});
          const /*bundle*/useDynamicFieldContext = () => React.useContext(ModuleContext);
          exports.useDynamicFieldContext = useDynamicFieldContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./field/field
      *****************************/

      ims.set('./field/field', {
        hash: 1156756761,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicField = DynamicField;
          var _react = require("react");
          var _context = require("../context");
          var _row = require("../field/row");
          /*bundle*/ // DynamicField.tsx

          function DynamicField({
            children,
            index
          }) {
            const {
              onBlur,
              fields,
              onRemove,
              onUpdate,
              name,
              Empty
            } = (0, _context.useDynamicFieldContext)();
            const handleOnBlur = event => {
              if (!onBlur) return;
              const target = {
                name,
                value: fields
              };
              onBlur({
                target,
                currentTarget: target
              });
            };
            if (!fields.length) return _react.default.createElement(Empty, null);
            return _react.default.createElement("div", {
              className: "dynamic-form__container"
            }, fields.map((field, index) => _react.default.createElement(_row.FieldRow, {
              key: index,
              field: field,
              index: index,
              children: children,
              onRemove: onRemove,
              onBlur: handleOnBlur,
              onUpdate: onUpdate
            })));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./field/row
      ***************************/

      ims.set('./field/row', {
        hash: 1132438387,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FieldRow = void 0;
          var _react = require("react");
          // field-row.tsx

          const FieldRow = ({
            field,
            index,
            children,
            onRemove,
            onBlur,
            onUpdate
          }) => {
            const renderChild = child => {
              if (!_react.default.isValidElement(child)) return child;
              const onChange = e => onUpdate(index, e.currentTarget.name, e.currentTarget.value);
              return _react.default.cloneElement(child, {
                value: field[child.props.name] || '',
                onChange,
                onBlur,
                index
              });
            };
            const renderChildren = () => _react.default.Children.map(children, renderChild);
            return _react.default.createElement("div", {
              className: "dynamic-form__field",
              "data-index": index
            }, renderChildren());
          };
          exports.FieldRow = FieldRow;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./hooks/use-field-manager
      *****************************************/

      ims.set('./hooks/use-field-manager', {
        hash: 2163340745,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useFieldManager = useFieldManager;
          var _react = require("react");
          // use-field-manager.ts

          function useFieldManager(lazyInit, initialFields = []) {
            const initialValue = initialFields.length ? initialFields : lazyInit ? [{}] : [];
            const [fields, setFields] = (0, _react.useState)(initialValue);
            (0, _react.useEffect)(() => {
              setFields(initialFields);
            }, [initialFields]);
            const add = template => {
              const newFields = [...fields, {
                ...template
              }];
              setFields(newFields);
              return newFields;
            };
            const remove = index => {
              const newFields = fields.filter((_, i) => i !== index);
              setFields([...newFields]);
              return newFields;
            };
            const update = (index, name, newValue) => {
              const newFields = fields.map((field, i) => i === index ? {
                ...field,
                [name]: newValue
              } : field);
              setFields(newFields);
              return newFields;
            };
            return {
              fields,
              add,
              remove,
              update
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1897305872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DynamicFieldContainer = DynamicFieldContainer;
          var _react = require("react");
          var _context = require("./context");
          var _useFieldManager = require("./hooks/use-field-manager");
          var _template = require("./components/template");
          /*bundle*/ // DynamicField.tsx

          function DynamicFieldContainer({
            texts = {
              add: 'Add',
              remove: 'Remove'
            },
            children,
            value,
            name,
            lazyInit = false,
            onChange,
            empty,
            onBlur
          }) {
            const {
              fields,
              add,
              remove,
              update
            } = (0, _useFieldManager.useFieldManager)(lazyInit, value);
            const fieldTemplate = (0, _react.useMemo)(() => (0, _template.defaultFieldTemplate)(children), [children]);
            const executeOnChange = (newFields, name) => {
              if (!onChange) return;
              const target = {
                name,
                value: newFields
              };
              onChange({
                target,
                currentTarget: target,
                name
              });
            };
            const onAdd = () => {
              const newFields = add(fieldTemplate);
              executeOnChange(newFields, 'add');
            };
            const onRemove = index => {
              const newFields = remove(index);
              executeOnChange(newFields, 'remove');
            };
            const onUpdate = (index, name, value) => {
              const newFields = update(index, name, value);
              executeOnChange(newFields, 'change');
            };
            return _react.default.createElement(_context.ModuleContext.Provider, {
              value: {
                Empty: empty,
                onBlur,
                texts,
                fields,
                onAdd,
                onRemove,
                onUpdate,
                value: fields,
                name
              }
            }, children);
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./total-elements
      ********************************/

      ims.set('./total-elements', {
        hash: 2002400230,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalElements = TotalElements;
          var React = require("react");
          var _context = require("./context");
          /*bundle*/
          function TotalElements() {
            const {
              fields
            } = (0, _context.useDynamicFieldContext)();
            return React.createElement("span", {
              className: "pui-dynamic-field__total-elements"
            }, fields.length);
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1566740805,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./actions/add",
        "from": "AddButton",
        "name": "AddButton"
      }, {
        "im": "./actions/remove",
        "from": "RemoveButton",
        "name": "RemoveButton"
      }, {
        "im": "./components/button",
        "from": "DynamicButton",
        "name": "DynamicButton"
      }, {
        "im": "./components/button",
        "from": "DynamicIconButton",
        "name": "DynamicIconButton"
      }, {
        "im": "./context",
        "from": "useDynamicFieldContext",
        "name": "useDynamicFieldContext"
      }, {
        "im": "./field/field",
        "from": "DynamicField",
        "name": "DynamicField"
      }, {
        "im": "./index",
        "from": "DynamicFieldContainer",
        "name": "DynamicFieldContainer"
      }, {
        "im": "./total-elements",
        "from": "TotalElements",
        "name": "TotalElements"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AddButton') && _export("AddButton", AddButton = require ? require('./actions/add').AddButton : value);
        (require || prop === 'RemoveButton') && _export("RemoveButton", RemoveButton = require ? require('./actions/remove').RemoveButton : value);
        (require || prop === 'DynamicButton') && _export("DynamicButton", DynamicButton = require ? require('./components/button').DynamicButton : value);
        (require || prop === 'DynamicIconButton') && _export("DynamicIconButton", DynamicIconButton = require ? require('./components/button').DynamicIconButton : value);
        (require || prop === 'useDynamicFieldContext') && _export("useDynamicFieldContext", useDynamicFieldContext = require ? require('./context').useDynamicFieldContext : value);
        (require || prop === 'DynamicField') && _export("DynamicField", DynamicField = require ? require('./field/field').DynamicField : value);
        (require || prop === 'DynamicFieldContainer') && _export("DynamicFieldContainer", DynamicFieldContainer = require ? require('./index').DynamicFieldContainer : value);
        (require || prop === 'TotalElements') && _export("TotalElements", TotalElements = require ? require('./total-elements').TotalElements : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIkFkZEJ1dHRvbiIsInRlbXBsYXRlIiwiY2hpbGRyZW4iLCJvbkFkZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbldyYXBwZXIiLCJvbkNsaWNrIiwiZXhwb3J0cyIsIlJlbW92ZUJ1dHRvbiIsImluZGV4Iiwib25SZW1vdmUiLCJpc1ZhbGlkRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lRWxlbWVudCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiRHluYW1pY0J1dHRvbiIsImFjdGlvbiIsInByb3BzIiwiYWN0aW9ucyIsImFkZCIsInJlbW92ZSIsImhhbmRsZUNsaWNrIiwiQnV0dG9uIiwiRHluYW1pY0ljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJkZWZhdWx0RmllbGRUZW1wbGF0ZSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInJlZHVjZSIsImFjYyIsImNoaWxkIiwibmFtZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yb3ciLCJEeW5hbWljRmllbGQiLCJvbkJsdXIiLCJmaWVsZHMiLCJvblVwZGF0ZSIsIkVtcHR5IiwiaGFuZGxlT25CbHVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWVsZCIsIkZpZWxkUm93Iiwia2V5IiwicmVuZGVyQ2hpbGQiLCJvbkNoYW5nZSIsImUiLCJyZW5kZXJDaGlsZHJlbiIsInVzZUZpZWxkTWFuYWdlciIsImxhenlJbml0IiwiaW5pdGlhbEZpZWxkcyIsImluaXRpYWxWYWx1ZSIsInNldEZpZWxkcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmV3RmllbGRzIiwiZmlsdGVyIiwiXyIsImkiLCJ1cGRhdGUiLCJuZXdWYWx1ZSIsIl91c2VGaWVsZE1hbmFnZXIiLCJfdGVtcGxhdGUiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJ0ZXh0cyIsImVtcHR5IiwiZmllbGRUZW1wbGF0ZSIsInVzZU1lbW8iLCJleGVjdXRlT25DaGFuZ2UiLCJQcm92aWRlciIsIlRvdGFsRWxlbWVudHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi90cy9hY3Rpb25zL2FkZC50c3giLCIvdHMvYWN0aW9ucy9yZW1vdmUudHN4IiwiL3RzL2FjdGlvbnMvd3JhcHBlci50c3giLCIvdHMvY29tcG9uZW50cy9idXR0b24udHN4IiwiL3RzL2NvbXBvbmVudHMvdGVtcGxhdGUudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvZmllbGQvZmllbGQudHN4IiwiL3RzL2ZpZWxkL3Jvdy50c3giLCIvdHMvaG9va3MvdXNlLWZpZWxkLW1hbmFnZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90cy90b3RhbC1lbGVtZW50cy50c3giLCIvdHlwZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFPTyxXQVZQOztVQVVrQixNQUFNRyxTQUFTLEdBQUdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFRLENBQWtCLEtBQUk7WUFDOUUsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBTCxRQUFBLENBQUFNLHNCQUFzQixHQUFFO1lBRTFDLE9BQU9SLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNQLFFBQUEsQ0FBQVEsYUFBYTtjQUFDQyxPQUFPLEVBQUVMO1lBQUss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