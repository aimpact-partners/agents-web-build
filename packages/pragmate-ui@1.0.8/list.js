System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "framer-motion@11.18.2", "pragmate-ui@1.0.8/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, List, __beyond_pkg, hmr;
  _export("List", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_framerMotion2) {
      dependency_2 = _framerMotion2;
    }, function (_pragmateUi108Base) {
      dependency_3 = _pragmateUi108Base;
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
          "vspecifier": "pragmate-ui@1.0.8/list"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['framer-motion', dependency_2], ['pragmate-ui/base', dependency_3]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./draggable
      ***************************/
      ims.set('./draggable', {
        hash: 2033348794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableList = DraggableList;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function DraggableList({
            specs,
            control,
            index,
            ...props
          }) {
            const [items, setItems] = _react.default.useState(props.items);
            const onReorder = items => {
              setItems(items);
              if (props.onReorder) props.onReorder(items);
            };
            const output = items.map((item, idx) => _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              key: `${item}`
            }, item));
            return _react.default.createElement(_framerMotion.Reorder.Group, {
              values: items,
              onReorder: onReorder
            }, output);
          }
        }
      });

      /*********************************
      INTERNAL MODULE: ./html-attributes
      *********************************/

      ims.set('./html-attributes', {
        hash: 1750835586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getAttributes = getAttributes;
          /**
           * A Set containing common HTML attributes that are used to control element behavior and information.
           * This Set is utilized to filter properties from objects to ensure only valid HTML attributes,
           * including accessibility attributes (those starting with 'aria-') and custom data attributes (those starting with 'data-'),
           * are included. These attributes can influence the HTML rendering and are recognized by web browsers.
           */
          const htmlAttributes = new Set(['id', 'class', 'style', 'title', 'data', 'value', 'href', 'src', 'alt', 'onclick', 'onchange', 'onmouseover', 'disabled', 'readonly', 'type', 'placeholder', 'name', 'method', 'action', 'checked', 'selected', 'width', 'height', 'maxlength', 'minlength', 'pattern', 'step', 'required', 'autocomplete', 'autofocus', 'multiple', 'form', 'size', 'srcset', 'for', 'tabindex', 'role', 'aria-label']);
          /**
           * Filters the properties of an object to include only those that are recognized HTML attributes, with the
           * capability to explicitly exclude certain attributes even if they are valid. The function checks for standard
           * attributes defined in the `htmlAttributes` set, and dynamically accepts any properties that begin with 'aria-'
           * or 'data-'. It excludes any properties listed in the `exclusions` array, regardless of their validity as HTML attributes.
           *
           * @param {Record<string, any>} props - The object containing properties that may or may not correspond to valid HTML attributes.
           * @param {string[]} exclusions - Array of property names to be excluded from the returned object, even if they are valid HTML attributes.
           * @returns {Record<string, any>} A new object containing only the properties that are valid HTML attributes and not listed in exclusions.
           */
          function getAttributes(props, exclusions = []) {
            const filtered = {};
            const exclusionSet = new Set(exclusions); // Convert exclusions array to a Set for efficient lookup
            for (const prop in props) {
              // Check for known attributes or attributes starting with 'aria-' or 'data-' and not in the exclusions list
              if ((htmlAttributes.has(prop) || prop.startsWith('aria-') || prop.startsWith('data-')) && !exclusionSet.has(prop)) {
                filtered[prop] = props[prop];
              }
            }
            return filtered;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2732568007,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          var _draggable = require("./draggable");
          var _item = require("./item");
          var _dragable = require("./item/dragable");
          var _framerMotion = require("framer-motion");
          /*bundle*/
          function List({
            items,
            children,
            control,
            empty,
            ...props
          }) {
            const {
              className,
              index = 'id',
              specs,
              draggable,
              childrenPosition = 'top',
              as = 'ul',
              // @deprecated
              container = 'ul'
            } = props;
            const Container = _framerMotion.motion[as];
            const onTop = childrenPosition === 'top';
            const ItemControl = draggable ? _dragable.DraggableItem : _item.ItemList;
            if (draggable) return _react.default.createElement(_draggable.DraggableList, {
              items: items,
              ...props
            });
            if (!Array.isArray(items)) {
              console.warn('Invalid "items" prop: Expected an array. Please review the component usage and ensure the "items" prop is correctly passed as an array.');
              return null;
            }
            if (control) {
              // console.warn(
              // 	'The "control" prop is deprecated and will be removed in future versions. Please use children to define the item components.',
              // );
            }
            if (items.length === 0 && empty) {
              const Control = empty;
              return _react.default.createElement(Control, null);
            }
            const renderItems = control ? items.map((item, idx) => {
              return _react.default.createElement(ItemControl, {
                index: index,
                key: idx,
                specs: specs,
                control: control,
                item: item,
                idx: idx
              });
            }) : items.map((item, idx) => _react.Children.map(children, child => (0, _react.isValidElement)(child) ? (0, _react.cloneElement)(child, {
              key: idx,
              index,
              specs,
              item,
              idx
            }) : child));
            const top = onTop && children ? children : null;
            const bottom = !onTop && children ? children : null;
            return _react.default.createElement(Container, {
              ...props,
              className: className
            }, top, renderItems, bottom);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./item/dragable
      *******************************/

      ims.set('./item/dragable', {
        hash: 3472479063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableItem = DraggableItem;
          var _framerMotion = require("framer-motion");
          var _react = require("react");
          var _ = require("./");
          function DraggableItem({
            as,
            ...props
          }) {
            const {
              item,
              idx
            } = props;
            const attrs = {
              as
            };
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              key: idx,
              ...attrs
            }, _react.default.createElement(_.ItemList, {
              ...props,
              item: item,
              idx: idx,
              as: 'span'
            }));
          }
        }
      });

      /***************************
      INTERNAL MODULE: ./item/html
      ***************************/

      ims.set('./item/html', {
        hash: 2640674525,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HTMLItem = HTMLItem;
          var _react = require("react");
          var _htmlAttributes = require("../html-attributes");
          function HTMLItem({
            as = 'li',
            children,
            ...props
          }) {
            const Control = as;
            const {
              item
            } = props;
            const attrs = (0, _htmlAttributes.getAttributes)(props, ['item', 'data']);
            return _react.default.createElement(Control, {
              ...attrs
            }, item);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./item/index
      ****************************/

      ims.set('./item/index', {
        hash: 1844515837,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemList = ItemList;
          var _react = require("react");
          var _html = require("./html");
          /**
           * Componente que renderiza un elemento de la lista.
           *
           * @template T - El tipo de los elementos en la lista.
           * @template U - Tipo de las propiedades adicionales opcionales (por defecto un objeto genérico).
           *
           * @param props - Las propiedades de `ItemList`.
           * @returns El elemento renderizado.
           */
          function ItemList({
            index,
            item,
            idx,
            as = 'li',
            control,
            specs = {}
          }) {
            const Control = typeof control === 'string' ? _html.HTMLItem : control;
            const elementProps = {
              key: item[index] || idx,
              index: idx,
              item,
              data: item,
              ...specs,
              as: typeof control === 'string' ? control : undefined
            };
            const element = _react.default.createElement(Control, elementProps);
            return element;
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 2311667739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "List",
        "name": "List"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'List') && _export("List", List = require ? require('./index').List : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkRyYWdnYWJsZUxpc3QiLCJzcGVjcyIsImNvbnRyb2wiLCJpbmRleCIsInByb3BzIiwiaXRlbXMiLCJzZXRJdGVtcyIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9uUmVvcmRlciIsIm91dHB1dCIsIm1hcCIsIml0ZW0iLCJpZHgiLCJjcmVhdGVFbGVtZW50IiwiUmVvcmRlciIsIkl0ZW0iLCJ2YWx1ZSIsImtleSIsIkdyb3VwIiwidmFsdWVzIiwiaHRtbEF0dHJpYnV0ZXMiLCJTZXQiLCJnZXRBdHRyaWJ1dGVzIiwiZXhjbHVzaW9ucyIsImZpbHRlcmVkIiwiZXhjbHVzaW9uU2V0IiwicHJvcCIsImhhcyIsInN0YXJ0c1dpdGgiLCJfZHJhZ2dhYmxlIiwiX2l0ZW0iLCJfZHJhZ2FibGUiLCJMaXN0IiwiY2hpbGRyZW4iLCJlbXB0eSIsImNsYXNzTmFtZSIsImRyYWdnYWJsZSIsImNoaWxkcmVuUG9zaXRpb24iLCJhcyIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsIm1vdGlvbiIsIm9uVG9wIiwiSXRlbUNvbnRyb2wiLCJEcmFnZ2FibGVJdGVtIiwiSXRlbUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJjb25zb2xlIiwid2FybiIsImxlbmd0aCIsIkNvbnRyb2wiLCJyZW5kZXJJdGVtcyIsIkNoaWxkcmVuIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInRvcCIsImJvdHRvbSIsIl8iLCJhdHRycyIsIl9odG1sQXR0cmlidXRlcyIsIkhUTUxJdGVtIiwiX2h0bWwiLCJlbGVtZW50UHJvcHMiLCJkYXRhIiwidW5kZWZpbmVkIiwiZWxlbWVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi8vdHMvZHJhZ2dhYmxlLnRzeCIsIi8vdHMvaHRtbC1hdHRyaWJ1dGVzLnRzIiwiLy90cy9pbmRleC50c3giLCIvL3RzL2l0ZW0vZHJhZ2FibGUudHN4IiwiLy90cy9pdGVtL2h0bWwudHN4IiwiLy90cy9pdGVtL2luZGV4LnRzeCIsIi8vdHlwZXMudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUdNLFNBQVVFLGFBQWFBLENBQWdDO1lBQzVEQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsS0FBSztZQUNMLEdBQUdDO1VBQUssQ0FDeUI7WUFDakMsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHVCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDSixLQUFLLENBQUNDLEtBQUssQ0FBQztZQUVyRCxNQUFNSSxTQUFTLEdBQUlKLEtBQVUsSUFBSTtjQUNoQ0MsUUFBUSxDQUFDRCxLQUFLLENBQUM7Y0FFZixJQUFJRCxLQUFLLENBQUNLLFNBQVMsRUFBRUwsS0FBSyxDQUFDSyxTQUFTLENBQUNKLEtBQUssQ0FBQztZQUM1QyxDQUFDO1lBRUQsTUFBTUssTUFBTSxHQUFnQkwsS0FBSyxDQUFDTSxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEtBQy9DaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFPLGFBQUEsQ0FBQ2YsYUFBQSxDQUFBZ0IsT0FBTyxDQUFDQyxJQUFJO2NBQUNDLEtBQUssRUFBRUwsSUFBSTtjQUFFTSxHQUFHLEVBQUUsR0FBR04sSUFBeUI7WUFBRSxHQUM1REEsSUFBNEIsQ0FFOUIsQ0FBQztZQUVGLE9BQ0NmLE1BQUEsQ0FBQVUsT0FBQSxDQUFBTyxhQUFBLENBQUNmLGFBQUEsQ0FBQWdCLE9BQU8sQ0FBQ0ksS0FBSztjQUFDQyxNQUFNLEVBQUVmLEtBQUs7Y0FBRUksU0FBUyxFQUFFQTtZQUFTLEdBQ2hEQyxNQUFNLENBQ1E7VUFFbEI7Ozs7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