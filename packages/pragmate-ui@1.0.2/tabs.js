System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/kernel@0.1.12/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, TabsContainer, Panes, Tab, Tabs, __beyond_pkg, hmr;
  _export({
    TabsContainer: void 0,
    Panes: void 0,
    Tab: void 0,
    Tabs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_beyondJsKernel0112Routing) {
      dependency_3 = _beyondJsKernel0112Routing;
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
          "vspecifier": "pragmate-ui@1.0.2/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.2/tabs');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 3884495398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTabsContext = exports.TabsContext = void 0;
          var _react = require("react");
          const TabsContext = exports.TabsContext = _react.default.createContext({});
          const useTabsContext = () => _react.default.useContext(TabsContext);
          exports.useTabsContext = useTabsContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./definitions
      *****************************/

      ims.set('./definitions', {
        hash: 623591079,
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
        hash: 1102662752,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabsContainer = TabsContainer;
          var _routing = require("@beyond-js/kernel/routing");
          var _react = require("react");
          var _context = require("./context");
          /* bundle  */
          function TabsContainer({
            active = 0,
            onChange,
            className,
            current,
            children,
            tabs = [],
            panes,
            trackUrl
          }) {
            // Extract tab names from children
            if (trackUrl) {
              const tab = _routing.routing.uri.qs.get('tab');
              current = current ?? tab;
            }
            const activeIndex = tabs.includes(current) ? tabs.indexOf(current) : active;
            const [activeTab, setActiveTab] = _react.default.useState(activeIndex);
            const [currentTabName, setCurrentTabName] = _react.default.useState(current);
            // Update active tab if `current` prop changes
            const value = {
              panes,
              activeTab,
              setActiveTab,
              onChange,
              trackUrl,
              current: currentTabName,
              currentTabName,
              setCurrentTabName,
              names: tabs
            };
            const cls = `pui-tabs-container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_context.TabsContext.Provider, {
              value: value
            }, _react.default.createElement("section", {
              className: cls
            }, children));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./panes
      ***********************/

      ims.set('./panes', {
        hash: 1726352262,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Panes = Panes;
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Panes({
            children,
            className,
            items
          }) {
            const {
              activeTab
            } = (0, _context.useTabsContext)();
            if (items) {
              const Control = items[activeTab];
              return _react.default.createElement("section", {
                className: `tab-content ${className ? ` ${className}` : ''}`
              }, _react.default.createElement(Control, null));
            }
            const childrenArray = _react.default.Children.toArray(children);
            const Control = childrenArray[activeTab];
            const cls = `tab-content ${className ? ` ${className}` : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, Control);
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./tab
      *********************/

      ims.set('./tab', {
        hash: 588532965,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tab = Tab;
          var _react = require("react");
          var _context = require("./context");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle */
          function Tab(props) {
            const {
              children,
              index,
              disabled,
              className,
              name
            } = props;
            const {
              activeTab,
              setActiveTab,
              onChange,
              trackUrl
            } = (0, _context.useTabsContext)();
            let cls = `tab ${index === activeTab ? 'active' : ''} ${disabled ? ' is-disabled' : ''}`;
            if (className) cls += ' ' + className;
            const onClick = event => {
              // todo: this event must be removed
              if (trackUrl) {
                // Convert `routing.uri.qs.entries` to an object
                const queryParams = Object.fromEntries(_routing.routing.uri.qs.entries());
                // Update the `tab` parameter
                queryParams.tab = name;
                // Build the new query string
                const queryString = new URLSearchParams(queryParams).toString();
                // Update the URL without reloading the page
                _routing.routing.replaceState({}, '', `${_routing.routing.uri.pathname}?${queryString}`);
              }
              if (onChange) onChange(event, index);
              setActiveTab(index);
            };
            const attrs = {};
            if (!disabled) attrs.onClick = onClick;
            return _react.default.createElement("div", {
              className: cls,
              ...attrs,
              "data-name": name,
              "data-index": index
            }, children);
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./tabs
      **********************/

      ims.set('./tabs', {
        hash: 1755048068,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tabs = void 0;
          var _react = require("react");
          var _context = require("./context");
          var _useScroll = require("./use-scroll");
          var _tab = require("./tab");
          /*bundle*/
          const Tabs = ({
            children,
            className
          }) => {
            const {
              activeTab,
              names
            } = (0, _context.useTabsContext)();
            const ref = _react.default.useRef(null);
            const cls = `pui-tabs-menu tabs${className ? ` ${className}` : ''}`;
            const clone = (item, index) => {
              if (!_react.default.isValidElement(item) || item.type !== _tab.Tab) return item;
              const props = {
                ...item.props,
                index,
                key: index,
                name: names[index]
              };
              const tabChild = item;
              return _react.default.cloneElement(tabChild, props);
            };
            const output = _react.default.Children.map(children, clone);
            (0, _useScroll.useScroll)(ref, activeTab);
            return _react.default.createElement("header", {
              className: cls,
              ref: ref
            }, output);
          };
          exports.Tabs = Tabs;
        }
      });

      /****************************
      INTERNAL MODULE: ./use-scroll
      ****************************/

      ims.set('./use-scroll', {
        hash: 1668718188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useScroll = useScroll;
          var _react = require("react");
          function useScroll(tabRef, activeTab) {
            _react.default.useEffect(() => {
              const scrollToTab = index => {
                const tabElement = tabRef.current?.querySelectorAll('.tab')[index];
                if (tabElement) {
                  const container = tabRef.current;
                  const containerRect = container.getBoundingClientRect();
                  const tabRect = tabElement.getBoundingClientRect();
                  const scrollLeft = container.scrollLeft;
                  if (tabRect.left < containerRect.left) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.left - containerRect.left,
                      behavior: 'smooth'
                    });
                  } else if (tabRect.right > containerRect.right) {
                    container.scrollTo({
                      left: scrollLeft + tabRect.right - containerRect.right,
                      behavior: 'smooth'
                    });
                  }
                }
              };
              scrollToTab(activeTab);
            }, [activeTab]);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "TabsContainer",
        "name": "TabsContainer"
      }, {
        "im": "./panes",
        "from": "Panes",
        "name": "Panes"
      }, {
        "im": "./tab",
        "from": "Tab",
        "name": "Tab"
      }, {
        "im": "./tabs",
        "from": "Tabs",
        "name": "Tabs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TabsContainer') && _export("TabsContainer", TabsContainer = require ? require('./index').TabsContainer : value);
        (require || prop === 'Panes') && _export("Panes", Panes = require ? require('./panes').Panes : value);
        (require || prop === 'Tab') && _export("Tab", Tab = require ? require('./tab').Tab : value);
        (require || prop === 'Tabs') && _export("Tabs", Tabs = require ? require('./tabs').Tabs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JvdXRpbmciLCJfY29udGV4dCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInRhYnMiLCJwYW5lcyIsInRyYWNrVXJsIiwidGFiIiwicm91dGluZyIsInVyaSIsInFzIiwiZ2V0IiwiYWN0aXZlSW5kZXgiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRUYWJOYW1lIiwic2V0Q3VycmVudFRhYk5hbWUiLCJuYW1lcyIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiaXRlbXMiLCJDb250cm9sIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIlRhYiIsInByb3BzIiwiaW5kZXgiLCJkaXNhYmxlZCIsIm5hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJxdWVyeVBhcmFtcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsInF1ZXJ5U3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsImF0dHJzIiwiX3VzZVNjcm9sbCIsIl90YWIiLCJUYWJzIiwicmVmIiwidXNlUmVmIiwiY2xvbmUiLCJpdGVtIiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvdXRwdXQiLCJtYXAiLCJ1c2VTY3JvbGwiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi9kZWZpbml0aW9ucy50cyIsIi90cy9pbmRleC50c3giLCIvdHMvcGFuZXMudHN4IiwiL3RzL3RhYi50c3giLCIvdHMvdGFicy50c3giLCIvdHMvdXNlLXNjcm9sbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBYU8sTUFBTUMsV0FBVyxHQUFBQyxPQUFBLENBQUFELFdBQUEsR0FBR0YsTUFBQSxDQUFBSSxPQUFLLENBQUNDLGFBQWEsQ0FBQyxFQUFrQixDQUFDO1VBQzNELE1BQU1DLGNBQWMsR0FBR0EsQ0FBQSxLQUFNTixNQUFBLENBQUFJLE9BQUssQ0FBQ0csVUFBVSxDQUFDTCxXQUFXLENBQUM7VUFBQ0MsT0FBQSxDQUFBRyxjQUFBLEdBQUFBLGNBQUE7Ozs7Ozs7Ozs7O1VDZGxFOztVQUVBRSxNQUFBLENBQUFDLGNBQUEsQ0FBQU4sT0FBQTtZQUNBTyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsUUFBQSxHQUFBVixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBRU87VUFBYSxTQUFVWSxhQUFhQSxDQUFDO1lBQzNDQyxNQUFNLEdBQUcsQ0FBQztZQUNWQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLElBQUksR0FBRyxFQUFFO1lBQ1RDLEtBQUs7WUFDTEM7VUFBUSxDQUNhO1lBQ3JCO1lBRUEsSUFB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