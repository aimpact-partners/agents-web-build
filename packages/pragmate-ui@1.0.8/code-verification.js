System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, InputCode, __beyond_pkg, hmr;
  _export("InputCode", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
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
          "vspecifier": "pragmate-ui@1.0.8/code-verification"
        },
        "type": "code",
        "name": "code-verification"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/code-verification');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./code-input
      ****************************/
      ims.set('./code-input', {
        hash: 3163548358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputCode = InputCode;
          var _react = require("react");
          var _input = require("./input");
          const defaultOnCodeFull = () => null;
          /**
           * It's a React component that takes a length prop and an onCodeFull prop. It renders an array of
           * inputs, each of which is limited to one character. When the user enters a character, the component
           * updates the state with the character and focuses the next input. When the user presses backspace,
           * the component removes the last character from the state and focuses the previous input. When the
           * user enters the last character, the component calls the onCodeFull prop with the code as a string.
           * @param {props}  - props
           */
          let copied = false;
          /*bundle*/
          function InputCode({
            length,
            onCodeFull,
            className,
            onlyNumber,
            reset,
            value = ''
          }) {
            // Initializes the code state only once based on the value and length props.
            // This operation will be carried out when the component mounts and will not react to prop changes afterward.
            const initializeCode = (value, length) => {
              const codeArray = new Array(length).fill('');
              for (let i = 0; i < length && i < value.length; i++) {
                codeArray[i] = value[i];
              }
              return codeArray;
            };
            const [code, setCode] = (0, _react.useState)(initializeCode(value, length));
            const [finalValue, setFinalValue] = _react.default.useState(value ?? '');
            const [isFull, setIsFull] = (0, _react.useState)(false);
            const [position, setPosition] = (0, _react.useState)();
            const refs = (0, _react.useRef)(Array(length));
            const onClean = event => {
              const {
                index
              } = event.currentTarget.dataset;
              globalThis.setTimeout(() => {
                if (event.which === 8 || event.key?.toLowerCase() === 'backspace') {
                  const current = [...code];
                  current[index] = '';
                  setCode(current);
                  setPosition(Number(index) - 1);
                }
              }, 0);
            };
            const preventDefault = event => {
              const {
                index
              } = event.currentTarget.dataset;
              const newValue = event.currentTarget.value;
              const current = [...code];
              if (newValue !== '') {
                setPosition(Number(index) + 1);
              }
              current[index] = event.currentTarget.value;
              setCode(value => {
                const i = [...value];
                i[index] = newValue;
                setFinalValue(i.join(''));
                return i;
              });
              const ready = current.every(item => item !== '');
              setIsFull(ready);
              /**
               * If the code is full, and then the user presses backspace, the code will be cleared.
               * so we call when the code is full and the user presses backspace to let the parent component know that the code is not full anymore.
               */
              if (ready || !ready && isFull) onCodeFull(current.join(''));
            };
            (0, _react.useEffect)(() => {
              if (finalValue.length === length) {
                setIsFull(true);
                onCodeFull(finalValue);
                return;
              }
              if (isFull && finalValue.length < length) {
                setIsFull(false);
                onCodeFull('');
              }
            }, [finalValue]);
            (0, _react.useEffect)(() => {
              setTimeout(() => refs.current[position]?.focus(), 100);
            }, [position]);
            const setFocus = () => {
              let empty = code.findIndex(item => item === '');
              if (empty === -1) empty = code.length - 1;
              refs.current[empty]?.focus();
            };
            const cls = className ? `${className} code-inputs` : 'code-inputs';
            (0, _react.useEffect)(() => {
              const onCopy = event => {
                event.stopPropagation();
                const pastedData = event.clipboardData.getData('text');
                const value = pastedData.substring(0, length).split('');
                setFinalValue(value.join(''));
                setCode(value);
              };
              refs.current[0]?.addEventListener('paste', onCopy);
              return () => {
                refs.current[0]?.removeEventListener('paste', onCopy);
              };
            }, []);
            const getItem = (_, i) => {
              const getRef = el => {
                refs.current[i] = el;
              };
              return _react.default.createElement(_input.default, {
                value: code[i] ?? '',
                index: i,
                key: i.toString(),
                ref: getRef,
                onKeyDown: onClean,
                onChange: preventDefault
              });
            };
            const output = [...Array(length)].map(getItem);
            return _react.default.createElement("div", {
              className: cls
            }, output);
          }
          InputCode.defaultPros = {
            onCodeFull: defaultOnCodeFull,
            length: 6
          };
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 3296864983,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _react = require("react");
          var _default = exports.default = _react.default.forwardRef(function Input(props, ref) {
            const className = _react.default.useMemo(() => {
              const propsClassName = props.className ?? '';
              const filledClassName = Boolean(String(props.value ?? '').length) ? 'filled' : '';
              return `box ${propsClassName} ${filledClassName}`;
            }, [props.value, props.className]);
            return _react.default.createElement("input", {
              ...props,
              maxLength: 1,
              "data-index": props.index,
              type: 'text',
              // inputMode='numeric'
              className: className,
              ref: ref
            });
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./code-input",
        "from": "InputCode",
        "name": "InputCode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'InputCode') && _export("InputCode", InputCode = require ? require('./code-input').InputCode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2lucHV0IiwiZGVmYXVsdE9uQ29kZUZ1bGwiLCJjb3BpZWQiLCJJbnB1dENvZGUiLCJsZW5ndGgiLCJvbkNvZGVGdWxsIiwiY2xhc3NOYW1lIiwib25seU51bWJlciIsInJlc2V0IiwidmFsdWUiLCJpbml0aWFsaXplQ29kZSIsImNvZGVBcnJheSIsIkFycmF5IiwiZmlsbCIsImkiLCJjb2RlIiwic2V0Q29kZSIsInVzZVN0YXRlIiwiZmluYWxWYWx1ZSIsInNldEZpbmFsVmFsdWUiLCJkZWZhdWx0IiwiaXNGdWxsIiwic2V0SXNGdWxsIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInJlZnMiLCJ1c2VSZWYiLCJvbkNsZWFuIiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJ3aGljaCIsImtleSIsInRvTG93ZXJDYXNlIiwiY3VycmVudCIsIk51bWJlciIsInByZXZlbnREZWZhdWx0IiwibmV3VmFsdWUiLCJqb2luIiwicmVhZHkiLCJldmVyeSIsIml0ZW0iLCJ1c2VFZmZlY3QiLCJmb2N1cyIsInNldEZvY3VzIiwiZW1wdHkiLCJmaW5kSW5kZXgiLCJjbHMiLCJvbkNvcHkiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXN0ZWREYXRhIiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJzdWJzdHJpbmciLCJzcGxpdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0SXRlbSIsIl8iLCJnZXRSZWYiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0b1N0cmluZyIsInJlZiIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwib3V0cHV0IiwibWFwIiwiZGVmYXVsdFByb3MiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJmb3J3YXJkUmVmIiwiSW5wdXQiLCJwcm9wcyIsInVzZU1lbW8iLCJwcm9wc0NsYXNzTmFtZSIsImZpbGxlZENsYXNzTmFtZSIsIkJvb2xlYW4iLCJTdHJpbmciLCJtYXhMZW5ndGgiLCJ0eXBlIl0sInNvdXJjZXMiOlsiLy90cy9jb2RlLWlucHV0LnRzeCIsIi8vdHMvaW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBU0EsTUFBTUUsaUJBQWlCLEdBQW1CQSxDQUFBLEtBQU0sSUFBSTtVQUVwRDs7Ozs7Ozs7VUFTQSxJQUFJQyxNQUFNLEdBQUcsS0FBSztVQUNYO1VBQVUsU0FBVUMsU0FBU0EsQ0FBQztZQUNwQ0MsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVEMsVUFBVTtZQUNWQyxLQUFLO1lBQ0xDLEtBQUssR0FBRztVQUFFLENBQ0Y7WUFFUjtZQUNBO1lBQ0EsTUFBTUMsY0FBYyxHQUFHQSxDQUFDRCxLQUFhLEVBQUVMLE1BQWMsS0FBYztjQUNsRSxNQUFNTyxTQUFTLEdBQUcsSUFBSUMsS0FBSyxDQUFDUixNQUFNLENBQUMsQ0FBQ1MsSUFBSSxDQUFDLEVBQUUsQ0FBQztjQUM1QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1YsTUFBTSxJQUFJVSxDQUFDLEdBQUdMLEtBQUssQ0FBQ0wsTUFBTSxFQUFFVSxDQUFDLEVBQUUsRUFBRTtnQkFDcERILFNBQVMsQ0FBQ0csQ0FBQyxDQUFDLEdBQUdMLEtBQUssQ0FBQ0ssQ0FBQyxDQUFDOztjQUV4QixPQUFPSCxTQUFTO1lBQ2pCLENBQUM7WUFFRCxNQUFNLENBQUNJLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUcsSUFBQWxCLE1BQUEsQ0FBQW1CLFFBQVEsRUFBV1AsY0FBYyxDQUFDRCxLQUFLLEVBQUVMLE1BQU0sQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQ2MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FB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