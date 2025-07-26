System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/icons", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
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
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi102Components) {
      dependency_2 = _pragmateUi102Components;
    }, function (_pragmateUi102Icons) {
      dependency_3 = _pragmateUi102Icons;
    }, function (_beyondJsKernel0112Styles) {
      dependency_4 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2NvbnRleHQiLCJfd3JhcHBlciIsIkFkZEJ1dHRvbiIsInRlbXBsYXRlIiwiY2hpbGRyZW4iLCJvbkFkZCIsInVzZUR5bmFtaWNGaWVsZENvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFjdGlvbldyYXBwZXIiLCJvbkNsaWNrIiwiZXhwb3J0cyIsIlJlbW92ZUJ1dHRvbiIsImluZGV4Iiwib25SZW1vdmUiLCJpc1ZhbGlkRWxlbWVudCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lRWxlbWVudCIsIl9jb21wb25lbnRzIiwiX2ljb25zIiwiRHluYW1pY0J1dHRvbiIsImFjdGlvbiIsInByb3BzIiwiYWN0aW9ucyIsImFkZCIsInJlbW92ZSIsImhhbmRsZUNsaWNrIiwiQnV0dG9uIiwiRHluYW1pY0ljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJkZWZhdWx0RmllbGRUZW1wbGF0ZSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInJlZHVjZSIsImFjYyIsImNoaWxkIiwibmFtZSIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9yb3ciLCJEeW5hbWljRmllbGQiLCJvbkJsdXIiLCJmaWVsZHMiLCJvblVwZGF0ZSIsIkVtcHR5IiwiaGFuZGxlT25CbHVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnJlbnRUYXJnZXQiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWVsZCIsIkZpZWxkUm93Iiwia2V5IiwicmVuZGVyQ2hpbGQiLCJvbkNoYW5nZSIsImUiLCJyZW5kZXJDaGlsZHJlbiIsInVzZUZpZWxkTWFuYWdlciIsImxhenlJbml0IiwiaW5pdGlhbEZpZWxkcyIsImluaXRpYWxWYWx1ZSIsInNldEZpZWxkcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibmV3RmllbGRzIiwiZmlsdGVyIiwiXyIsImkiLCJ1cGRhdGUiLCJuZXdWYWx1ZSIsIl91c2VGaWVsZE1hbmFnZXIiLCJfdGVtcGxhdGUiLCJEeW5hbWljRmllbGRDb250YWluZXIiLCJ0ZXh0cyIsImVtcHR5IiwiZmllbGRUZW1wbGF0ZSIsInVzZU1lbW8iLCJleGVjdXRlT25DaGFuZ2UiLCJQcm92aWRlciIsIlRvdGFsRWxlbWVudHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi8vdHMvYWN0aW9ucy9hZGQudHN4IiwiLy90cy9hY3Rpb25zL3JlbW92ZS50c3giLCIvL3RzL2FjdGlvbnMvd3JhcHBlci50c3giLCIvL3RzL2NvbXBvbmVudHMvYnV0dG9uLnRzeCIsIi8vdHMvY29tcG9uZW50cy90ZW1wbGF0ZS50c3giLCIvL3RzL2NvbnRleHQudHMiLCIvL3RzL2ZpZWxkL2ZpZWxkLnRzeCIsIi8vdHMvZmllbGQvcm93LnRzeCIsIi8vdHMvaG9va3MvdXNlLWZpZWxkLW1hbmFnZXIudHN4IiwiLy90cy9pbmRleC50c3giLCIvL3RzL3RvdGFsLWVsZW1lbnRzLnRzeCIsIi8vdHlwZXMudHN4LyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsUUFBQSxHQUFBRixPQUFBO1VBT08sV0FWUDs7VUFVa0IsTUFBTUcsU0FBUyxHQUFHQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBUSxDQUFrQixLQUFJO1lBQzlFLE1BQU07Y0FBRUM7WUFBSyxDQUFFLEdBQUcsSUFBQUwsUUFBQSxDQUFBTSxzQkFBc0IsR0FBRTtZQUUxQyxPQUFPUixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDUCxRQUFBLENBQUFRLGFBQWE7Y0FBQ0MsT0FB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