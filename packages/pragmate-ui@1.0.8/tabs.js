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
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["tippy.js", "6.3.7"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/tabs"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/routing', dependency_3]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/tabs');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiVGFic0NvbnRleHQiLCJleHBvcnRzIiwiZGVmYXVsdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VUYWJzQ29udGV4dCIsInVzZUNvbnRleHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JvdXRpbmciLCJfY29udGV4dCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJvbkNoYW5nZSIsImNsYXNzTmFtZSIsImN1cnJlbnQiLCJjaGlsZHJlbiIsInRhYnMiLCJwYW5lcyIsInRyYWNrVXJsIiwidGFiIiwicm91dGluZyIsInVyaSIsInFzIiwiZ2V0IiwiYWN0aXZlSW5kZXgiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJ1c2VTdGF0ZSIsImN1cnJlbnRUYWJOYW1lIiwic2V0Q3VycmVudFRhYk5hbWUiLCJuYW1lcyIsImNscyIsImNyZWF0ZUVsZW1lbnQiLCJQcm92aWRlciIsIlBhbmVzIiwiaXRlbXMiLCJDb250cm9sIiwiY2hpbGRyZW5BcnJheSIsIkNoaWxkcmVuIiwidG9BcnJheSIsIlRhYiIsInByb3BzIiwiaW5kZXgiLCJkaXNhYmxlZCIsIm5hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJxdWVyeVBhcmFtcyIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsInF1ZXJ5U3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsImF0dHJzIiwiX3VzZVNjcm9sbCIsIl90YWIiLCJUYWJzIiwicmVmIiwidXNlUmVmIiwiY2xvbmUiLCJpdGVtIiwiaXNWYWxpZEVsZW1lbnQiLCJ0eXBlIiwia2V5IiwidGFiQ2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvdXRwdXQiLCJtYXAiLCJ1c2VTY3JvbGwiLCJ0YWJSZWYiLCJ1c2VFZmZlY3QiLCJzY3JvbGxUb1RhYiIsInRhYkVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGFpbmVyIiwiY29udGFpbmVyUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRhYlJlY3QiLCJzY3JvbGxMZWZ0IiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJyaWdodCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udGV4dC50c3giLCIvL2RlZmluaXRpb25zLnRzLyIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9wYW5lcy50c3giLCIvL3RzL3RhYi50c3giLCIvL3RzL3RhYnMudHN4IiwiLy90cy91c2Utc2Nyb2xsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFhTyxNQUFNQyxXQUFXLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFHRixNQUFBLENBQUFJLE9BQUssQ0FBQ0MsYUFBYSxDQUFDLEVBQWtCLENBQUM7VUFDM0QsTUFBTUMsY0FBYyxHQUFHQSxDQUFBLEtBQU1OLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxVQUFVLENBQUNMLFdBQVcsQ0FBQztVQUFDQyxPQUFBLENBQUFHLGNBQUEsR0FBQUEsY0FBQTs7Ozs7Ozs7Ozs7VUNkbEU7O1VBRUFFLE1BQUEsQ0FBQUMsY0FBQSxDQUFBTixPQUFBO1lBQ0FPLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBQyxRQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBVyxRQUFBLEdBQUFYLE9BQUE7VUFFTztVQUFhLFNBQVVZLGFBQWFBLENBQUM7WUFDM0NDLE1BQU0sR0FBRyxDQUFDO1lBQ1ZDLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsSUFBSSxHQUFHLEVBQUU7WUFDVEMsS0FBSztZQUNMQztVQUFRLENBQ2E7WUFDckI7WUFFQSxJQUFJQSxRQUFRLEVBQUU7Y0FDYixNQUFNQyxHQUFHLEdBQUdYLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUNyQ1QsT0FBTyxHQUFHQSxPQUFPLElBQUlLLEdBQUc7O1lBR3pCLE1BQU1LLFdBQVcsR0FBR1IsSUFBSSxDQUFDUyxRQUFRLENBQUNYLE9BQU8sQ0FBQyxHQUFHRSxJQUFJLENBQUNVLE9BQU8sQ0FBQ1osT0FBTyxDQUFDLEdBQUdILE1BQU07WUFFM0UsTUFBTSxDQUFDZ0IsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBRy9CLE1BQUEsQ0FBQUksT0FBSyxDQUFDNEIsUUFBUSxDQUFDTCxXQUFXLENBQUM7WUFDN0QsTUFBTSxDQUFDTSxjQUFjLEVBQUVDLGlCQUFpQixDQUFDLEdBQUdsQyxNQUFBLENBQUFJLE9BQUssQ0FBQzRCLFFBQVEsQ0FBQ2YsT0FBTyxDQUFDO1lBQ25FO1lBRUEsTUFBTVAsS0FBSyxHQUFHO2NBQ2JVLEtBQUs7Y0FDTFUsU0FBUztjQUNUQyxZQUFZO2NBQ1poQixRQUFRO2NBQ1JNLFFBQVE7Y0FDUkosT0FBTyxFQUFFZ0IsY0FBYztjQUN2QkEsY0FBYztjQUNkQyxpQkFBaUI7Y0FDakJDLEtBQUssRUFBRWhCO2FBQ1A7WUFDRCxNQUFNaUIsR0FBRyxHQUFHLHFCQUFxQnBCLFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFFbkUsT0FDQ2hCLE1BQUEsQ0FBQUksT0FBQSxDQUFBaUMsYUFBQSxDQUFDekIsUUFBQSxDQUFBVixXQUFXLENBQUNvQyxRQUFRO2NBQUM1QixLQUFLLEVBQUVBO1lBQUssR0FDakNWLE1BQUEsQ0FBQUksT0FBQSxDQUFBaUMsYUFBQTtjQUFTckIsU0FBUyxFQUFFb0I7WUFBRyxHQUFHbEIsUUFBUSxDQUFXLENBQ3ZCO1VBRXpCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdDQSxJQUFBbEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBR087VUFBVSxTQUFVc0MsS0FBS0EsQ0FBQztZQUFFckIsUUFBUTtZQUFFRixTQUFTO1lBQUV3QjtVQUFLLENBQVU7WUFDdEUsTUFBTTtjQUFFVjtZQUFTLENBQUUsR0FBRyxJQUFBbEIsUUFBQSxDQUFBTixjQUFjLEdBQUU7WUFFdEMsSUFBSWtDLEtBQUssRUFBRTtjQUNWLE1BQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDVixTQUFTLENBQUM7Y0FDaEMsT0FDQzlCLE1BQUEsQ0FBQUksT0FBQSxDQUFBaUMsYUFBQTtnQkFBU3JCLFNBQVMsRUFBRSxlQUFlQSxTQUFTLEdBQUcsSUFBSUEsU0FBUyxFQUFFLEdBQUcsRUFBRTtjQUFFLEdBQ3BFaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFpQyxhQUFBLENBQUNJLE9BQU8sT0FBRyxDQUNGOztZQUlaLE1BQU1DLGFBQWEsR0FBRzFDLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUMsUUFBUSxDQUFDQyxPQUFPLENBQUMxQixRQUFRLENBQUM7WUFDdEQsTUFBTXVCLE9BQU8sR0FBR0MsYUFBYSxDQUFDWixTQUFTLENBQXVCO1lBQzlELE1BQU1NLEdBQUcsR0FBRyxlQUFlcEIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUU3RCxPQUFPaEIsTUFBQSxDQUFBSSxPQUFBLENBQUFpQyxhQUFBO2NBQVNyQixTQUFTLEVBQUVvQjtZQUFHLEdBQUdLLE9BQU8sQ0FBVztVQUNwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQXpDLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFXLFFBQUEsR0FBQVgsT0FBQTtVQUVBLElBQUFVLFFBQUEsR0FBQVYsT0FBQTtVQUVPO1VBQVcsU0FBVTRDLEdBQUdBLENBQUNDLEtBQWdCO1lBQy9DLE1BQU07Y0FBRTVCLFFBQVE7Y0FBRTZCLEtBQUs7Y0FBRUMsUUFBUTtjQUFFaEMsU0FBUztjQUFFaUM7WUFBSSxDQUFFLEdBQUdILEtBQUs7WUFDNUQsTUFBTTtjQUFFaEIsU0FBUztjQUFFQyxZQUFZO2NBQUVoQixRQUFRO2NBQUVNO1lBQVEsQ0FBRSxHQUFHLElBQUFULFFBQUEsQ0FBQU4sY0FBYyxHQUFFO1lBQ3hFLElBQUk4QixHQUFHLEdBQUcsT0FBT1csS0FBSyxLQUFLakIsU0FBUyxHQUFHLFFBQVEsR0FBRyxFQUFFLElBQUlrQixRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUN4RixJQUFJaEMsU0FBUyxFQUFFb0IsR0FBRyxJQUFJLEdBQUcsR0FBR3BCLFNBQVM7WUFDckMsTUFBTWtDLE9BQU8sR0FBSUMsS0FBWSxJQUFJO2NBQ2hDO2NBRUEsSUFBSTlCLFFBQVEsRUFBRTtnQkFDYjtnQkFDQSxNQUFNK0IsV0FBVyxHQUFHNUMsTUFBTSxDQUFDNkMsV0FBVyxDQUFDMUMsUUFBQSxDQUFBWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDNkIsT0FBTyxFQUFFLENBQUM7Z0JBRWhFO2dCQUNBRixXQUFXLENBQUM5QixHQUFHLEdBQUcyQixJQUFJO2dCQUV0QjtnQkFDQSxNQUFNTSxXQUFXLEdBQUcsSUFBSUMsZUFBZSxDQUFDSixXQUFXLENBQUMsQ0FBQ0ssUUFBUSxFQUFFO2dCQUUvRDtnQkFDQTlDLFFBQUEsQ0FBQVksT0FBTyxDQUFDbUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRy9DLFFBQUEsQ0FBQVksT0FBTyxDQUFDQyxHQUFHLENBQUNtQyxRQUFRLElBQUlKLFdBQVcsRUFBRSxDQUFDOztjQUd2RSxJQUFJeEMsUUFBUSxFQUFFQSxRQUFRLENBQUNvQyxLQUFLLEVBQUVKLEtBQUssQ0FBQztjQUNwQ2hCLFlBQVksQ0FBQ2dCLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBRUQsTUFBTWEsS0FBSyxHQUFrQyxFQUFFO1lBRS9DLElBQUksQ0FBQ1osUUFBUSxFQUFFWSxLQUFLLENBQUNWLE9BQU8sR0FBR0EsT0FBTztZQUV0QyxPQUNDbEQsTUFBQSxDQUFBSSxPQUFBLENBQUFpQyxhQUFBO2NBQUtyQixTQUFTLEVBQUVvQixHQUFHO2NBQUEsR0FBTXdCLEtBQUs7Y0FBQSxhQUFhWCxJQUFJO2NBQUEsY0FBY0Y7WUFBSyxHQUNoRTdCLFFBQVEsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBbEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQVcsUUFBQSxHQUFBWCxPQUFBO1VBQ0EsSUFBQTRELFVBQUEsR0FBQTVELE9BQUE7VUFDQSxJQUFBNkQsSUFBQSxHQUFBN0QsT0FBQTtVQUdPO1VBQVcsTUFBTThELElBQUksR0FBR0EsQ0FBQztZQUFFN0MsUUFBUTtZQUFFRjtVQUFTLENBQVUsS0FBSTtZQUNsRSxNQUFNO2NBQUVjLFNBQVM7Y0FBRUs7WUFBSyxDQUFFLEdBQUcsSUFBQXZCLFFBQUEsQ0FBQU4sY0FBYyxHQUFFO1lBQzdDLE1BQU0wRCxHQUFHLEdBQUdoRSxNQUFBLENBQUFJLE9BQUssQ0FBQzZELE1BQU0sQ0FBaUIsSUFBSSxDQUFDO1lBQzlDLE1BQU03QixHQUFHLEdBQUcscUJBQXFCcEIsU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuRSxNQUFNa0QsS0FBSyxHQUFHQSxDQUFDQyxJQUFJLEVBQUVwQixLQUFLLEtBQUk7Y0FDN0IsSUFBSSxDQUFDL0MsTUFBQSxDQUFBSSxPQUFLLENBQUNnRSxjQUFjLENBQUNELElBQUksQ0FBQyxJQUFLQSxJQUFJLENBQUNFLElBQWlCLEtBQUtQLElBQUEsQ0FBQWpCLEdBQUcsRUFBRSxPQUFPc0IsSUFBSTtjQUUvRSxNQUFNckIsS0FBSyxHQUFHO2dCQUFFLEdBQUlxQixJQUFJLENBQUNyQixLQUFtQjtnQkFBRUMsS0FBSztnQkFBRXVCLEdBQUcsRUFBRXZCLEtBQUs7Z0JBQUVFLElBQUksRUFBRWQsS0FBSyxDQUFDWSxLQUFLO2NBQUMsQ0FBRTtjQUNyRixNQUFNd0IsUUFBUSxHQUFHSixJQUFxQztjQUN0RCxPQUFPbkUsTUFBQSxDQUFBSSxPQUFLLENBQUNvRSxZQUFZLENBQUNELFFBQVEsRUFBRXpCLEtBQUssQ0FBQztZQUMzQyxDQUFDO1lBRUQsTUFBTTJCLE1BQU0sR0FBR3pFLE1BQUEsQ0FBQUksT0FBSyxDQUFDdUMsUUFBUSxDQUFDK0IsR0FBRyxDQUFDeEQsUUFBUSxFQUFFZ0QsS0FBSyxDQUFDO1lBQ2xELElBQUFMLFVBQUEsQ0FBQWMsU0FBUyxFQUFDWCxHQUFHLEVBQUVsQyxTQUFTLENBQUM7WUFFekIsT0FDQzlCLE1BQUEsQ0FBQUksT0FBQSxDQUFBaUMsYUFBQTtjQUFRckIsU0FBUyxFQUFFb0IsR0FBRztjQUFFNEIsR0FBRyxFQUFFQTtZQUFHLEdBQzlCUyxNQUFNLENBQ0M7VUFFWCxDQUFDO1VBQUN0RSxPQUFBLENBQUE0RCxJQUFBLEdBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJGLElBQUEvRCxNQUFBLEdBQUFDLE9BQUE7VUFFTSxTQUFVMEUsU0FBU0EsQ0FBQ0MsTUFBdUMsRUFBRTlDLFNBQWlCO1lBQ25GOUIsTUFBQSxDQUFBSSxPQUFLLENBQUN5RSxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxXQUFXLEdBQUkvQixLQUFhLElBQUk7Z0JBQ3JDLE1BQU1nQyxVQUFVLEdBQUdILE1BQU0sQ0FBQzNELE9BQU8sRUFBRStELGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDakMsS0FBSyxDQUFtQjtnQkFDcEYsSUFBSWdDLFVBQVUsRUFBRTtrQkFDZixNQUFNRSxTQUFTLEdBQUdMLE1BQU0sQ0FBQzNELE9BQXlCO2tCQUNsRCxNQUFNaUUsYUFBYSxHQUFHRCxTQUFTLENBQUNFLHFCQUFxQixFQUFFO2tCQUN2RCxNQUFNQyxPQUFPLEdBQUdMLFVBQVUsQ0FBQ0kscUJBQXFCLEVBQUU7a0JBQ2xELE1BQU1FLFVBQVUsR0FBR0osU0FBUyxDQUFDSSxVQUFVO2tCQUV2QyxJQUFJRCxPQUFPLENBQUNFLElBQUksR0FBR0osYUFBYSxDQUFDSSxJQUFJLEVBQUU7b0JBQ3RDTCxTQUFTLENBQUNNLFFBQVEsQ0FBQztzQkFBQ0QsSUFBSSxFQUFFRCxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsSUFBSSxHQUFHSixhQUFhLENBQUNJLElBQUk7c0JBQUVFLFFBQVEsRUFBRTtvQkFBUSxDQUFDLENBQUM7bUJBQzlGLE1BQU0sSUFBSUosT0FBTyxDQUFDSyxLQUFLLEdBQUdQLGFBQWEsQ0FBQ08sS0FBSyxFQUFFO29CQUMvQ1IsU0FBUyxDQUFDTSxRQUFRLENBQUM7c0JBQUNELElBQUksRUFBRUQsVUFBVSxHQUFHRCxPQUFPLENBQUNLLEtBQUssR0FBR1AsYUFBYSxDQUFDTyxLQUFLO3NCQUFFRCxRQUFRLEVBQUU7b0JBQVEsQ0FBQyxDQUFDOzs7Y0FHbkcsQ0FBQztjQUNEVixXQUFXLENBQUNoRCxTQUFTLENBQUM7WUFDdkIsQ0FBQyxFQUFFLENBQUNBLFNBQVMsQ0FBQyxDQUFDO1VBQ2hCIiwiaWdub3JlTGlzdCI6W119