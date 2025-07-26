System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/base", "clsx@2.1.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Header, Item, Container, Accordion, CollapsibleContent, CollapsibleHeader, CollapsibleContainer, __beyond_pkg, hmr;
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
    }, function (_clsx2) {
      dependency_5 = _clsx2;
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
          "vspecifier": "pragmate-ui@1.0.2/collapsible"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['pragmate-ui/base', dependency_4], ['clsx', dependency_5]]);
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
        hash: 3322904955,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollapsibleHeader = CollapsibleHeader;
          var _react = require("react");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          var _clsx = require("clsx");
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
            const cls = (0, _clsx.default)('collapsible__header', className, {
              open
            });
            const clsButton = (0, _clsx.default)('collapsible__button', 'collapsible__button--circle', {
              'collapsible__button--opened': open
            });
            return _react.default.createElement("header", {
              className: cls,
              onClick: onClick,
              "aria-expanded": open
            }, _react.default.createElement("div", {
              className: "collapsible__header-content"
            }, children), toggleable && _react.default.createElement(_icons.IconButton, {
              className: clsButton,
              icon: "left",
              "aria-label": open ? 'Collapse section' : 'Expand section',
              "aria-expanded": open
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiQWNjb3JkaW9uQ29udGV4dCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFjY29yZGlvbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiSGVhZGVyIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImluZGV4Iiwic2V0T3BlbmVkIiwib3BlbmVkIiwib25DbGljayIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImF0dHJzIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJJY29uQnV0dG9uIiwiSXRlbSIsInRpdGxlIiwiY2xzIiwiQ29udGFpbmVyIiwiYWN0aXZlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRWZmZWN0Iiwib3V0cHV0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsInB1c2giLCJjbG9uZUVsZW1lbnQiLCJrZXkiLCJQcm92aWRlciIsIkFjY29yZGlvbiIsIl9jb250ZXh0IiwiQ29sbGFwc2libGVDb250ZW50Iiwib3BlbiIsInRvZ2dsZWFibGUiLCJ1c2VDb2xsYXBzaWJsZUNvbnRleHQiLCJDb2xsYXBzaWJsZUNvbnRleHQiLCJfY2xzeCIsIkNvbGxhcHNpYmxlSGVhZGVyIiwidG9nZ2xlVGl0bGUiLCJzZXRPcGVuIiwib25Ub2dnbGUiLCJjbHNCdXR0b24iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsImRhdGEiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VzIjpbIi8vdHMvYWNjb3JkaW9uLnRzeCIsIi8vdHMvY29udGVudC50c3giLCIvL3RzL2NvbnRleHQudHN4IiwiLy90cy9oZWFkZXIudHN4IiwiLy90cy9pbmRleC50c3giLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFw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