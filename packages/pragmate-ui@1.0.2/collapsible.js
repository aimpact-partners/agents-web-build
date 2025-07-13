System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/base"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
  _export({
    Header: void 0,
    Item: void 0,
    Container: void 0,
    Accordion: void 0,
    CollapsibleContent: void 0,
    CollapsibleHeader: void 0,
    CollapsibleContainer: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi102Icons) {
      dependency_3 = _pragmateUi102Icons;
    }, function (_pragmateUi102Base) {
      dependency_4 = _pragmateUi102Base;
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
          "vspecifier": "pragmate-ui@1.0.2/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/collapsible');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./accordion
      ***************************/
      ims.set('./accordion', {
        hash: 2388911095,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AccordionContext = exports.Accordion = void 0;
          exports.Container = Container;
          exports.Header = Header;
          exports.Item = Item;
          exports.useAccordionContext = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const AccordionContext = exports.AccordionContext = _react.default.createContext({});
          const useAccordionContext = () => _react.default.useContext(AccordionContext);
          exports.useAccordionContext = useAccordionContext;
          /*bundle */
          function Header({
            disabled,
            children,
            index
          }) {
            const {
              setOpened,
              opened
            } = useAccordionContext();
            const onClick = event => {
              event.stopPropagation();
              event.currentTarget.classList.toggle('accordion-item__header-icon--opened');
              setOpened(index === opened ? false : index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            const icon = opened ? 'expandMore' : 'chevronRight';
            return _react.default.createElement("header", {
              ...attrs,
              className: "accordion-item__header"
            }, children, _react.default.createElement("div", {
              className: "accordion-item__header-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: icon,
              className: "accordion-item__icon-button circle"
            })));
          }
          /*bundle */
          function Item({
            disabled,
            children,
            title,
            index
          }) {
            const {
              opened
            } = useAccordionContext();
            let cls = `accordion-item${index === opened ? ` accordion-item--opened` : ``}`;
            if (disabled) cls += ` accordion-item--disabled`;
            return _react.default.createElement("article", {
              className: cls
            }, title && _react.default.createElement(Header, {
              disabled: disabled,
              index: index
            }, title), _react.default.createElement("div", {
              className: "accordion-item__content"
            }, children));
          }
          /*bundle */
          function Container({
            children,
            active = 0
          }) {
            const [opened, setOpened] = _react.default.useState(active);
            const onChange = event => {};
            const value = {
              onChange,
              opened,
              setOpened
            };
            _react.default.useEffect(() => setOpened(active), [active]);
            const output = [];
            _react.default.Children.map(children, (child, index) => {
              if (!child) return null;
              output.push(_react.default.cloneElement(child, {
                index,
                key: `item$.${index}`
              }));
            });
            return _react.default.createElement(AccordionContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "accordion"
            }, output));
          }
          /*bundle */
          const Accordion = exports.Accordion = {
            Header,
            Item,
            Container
          };
        }
      });

      /*************************
      INTERNAL MODULE: ./content
      *************************/

      ims.set('./content', {
        hash: 4052548813,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContent = CollapsibleContent;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContent({
            className,
            children
          }) {
            const {
              open,
              toggleable
            } = (0, _context.useCollapsibleContext)();
            const cls = `collapsible__content${className ? ` ${className}` : ''} ${open ? ' collapsible__content--opened' : ''}`;
            if (!toggleable) return null;
            return _react.default.createElement("section", {
              className: cls
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 4042704803,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCollapsibleContext = exports.CollapsibleContext = void 0;
          var _react = require("react");
          const CollapsibleContext = exports.CollapsibleContext = _react.default.createContext(null);
          const useCollapsibleContext = () => _react.default.useContext(CollapsibleContext);
          exports.useCollapsibleContext = useCollapsibleContext;
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1101998287,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function CollapsibleHeader({
            children,
            className,
            toggleTitle = true
          }) {
            const {
              setOpen,
              onToggle,
              open,
              toggleable
            } = (0, _context.useCollapsibleContext)();
            const onClick = async () => {
              if (!onToggle) {
                setOpen(!open);
                return;
              }
              if (await onToggle(!open)) setOpen(!open);
            };
            const cls = `collapsible__header ${className ? ` ${className}` : ''} ${open ? 'open' : ''}`;
            const clsButton = `collapsible__button circle ${open ? ' collapsible__button--opened' : ''}`;
            const attrs = {
              className: cls
            };
            if (toggleTitle) {
              attrs.onClick = onClick;
            }
            return _react.default.createElement("header", {
              ...attrs
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, children), toggleable && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              className: clsButton,
              icon: 'left'
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4233091753,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleContainer = CollapsibleContainer;
          var _react = require("react");
          var _context = require("./context");
          /*bundle */
          function CollapsibleContainer({
            children,
            onToggle,
            open = false,
            className,
            toggleable = true,
            data
          }) {
            open;
            const [opened, setOpen] = _react.default.useState(open);
            const value = {
              open: opened,
              setOpen,
              onToggle,
              toggleable,
              ...data
            };
            const cls = `collapsible__container ${className ? ` ${className}` : ''} `;
            _react.default.useEffect(() => {
              setOpen(open);
            }, [open]);
            return _react.default.createElement(_context.CollapsibleContext.Provider, {
              value: value
            }, _react.default.createElement("article", {
              className: cls
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1378472229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./accordion",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./accordion",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./accordion",
        "from": "Container",
        "name": "Container"
      }, {
        "im": "./accordion",
        "from": "Accordion",
        "name": "Accordion"
      }, {
        "im": "./content",
        "from": "CollapsibleContent",
        "name": "CollapsibleContent"
      }, {
        "im": "./header",
        "from": "CollapsibleHeader",
        "name": "CollapsibleHeader"
      }, {
        "im": "./index",
        "from": "CollapsibleContainer",
        "name": "CollapsibleContainer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Header') && _export("Header", Header = require ? require('./accordion').Header : value);
        (require || prop === 'Item') && _export("Item", Item = require ? require('./accordion').Item : value);
        (require || prop === 'Container') && _export("Container", Container = require ? require('./accordion').Container : value);
        (require || prop === 'Accordion') && _export("Accordion", Accordion = require ? require('./accordion').Accordion : value);
        (require || prop === 'CollapsibleContent') && _export("CollapsibleContent", CollapsibleContent = require ? require('./content').CollapsibleContent : value);
        (require || prop === 'CollapsibleHeader') && _export("CollapsibleHeader", CollapsibleHeader = require ? require('./header').CollapsibleHeader : value);
        (require || prop === 'CollapsibleContainer') && _export("CollapsibleContainer", CollapsibleContainer = require ? require('./index').CollapsibleContainer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsInB1c2giLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJQcm92aWRlciIsIkFjY29yZGlvbiIsIl9jb250ZXh0IiwiQ29sbGFwc2libGVDb250ZW50Iiwib3BlbiIsInRvZ2dsZWFibGUiLCJ1c2VDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUhlYWRlciIsInRvZ2dsZVRpdGxlIiwic2V0T3BlbiIsIm9uVG9nZ2xlIiwiY2xzQnV0dG9uIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJkYXRhIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvYWNjb3JkaW9uLnRzeCIsIi90cy9jb250ZW50LnRzeCIsIi90cy9jb250ZXh0LnRzeCIsIi90cy9oZWFkZXIudHN4IiwiL3RzL2luZGV4LnRzeCIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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