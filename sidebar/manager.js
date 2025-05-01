System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, IActivityBarItem, SidebarManageRegistry, SidebarManager, __beyond_pkg, hmr;
  _export({
    IActivityBarItem: void 0,
    SidebarManageRegistry: void 0,
    SidebarManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205Model) {
      dependency_1 = _beyondJsReactive205Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.5.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/sidebar/manager"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1]]);
      ims = new Map();
      /**********************************
      INTERNAL MODULE: ./IActivityBarItem
      **********************************/
      ims.set('./IActivityBarItem', {
        hash: 2774377313,
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
        hash: 933268949,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SidebarManager = exports.SidebarManageRegistry = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class SidebarManageRegistry extends _model.ReactiveModel {
            #items = new Map();
            get items() {
              return this.#items;
            }
            get total() {
              return this.#items.size;
            }
            #bottomItems = new Map();
            get bottomItems() {
              return this.#bottomItems;
            }
            get topItems() {
              return this.#items;
            }
            register(position, specs) {
              for (const spec of specs) {
                if (this.#items.has(spec.id)) {
                  throw new Error(`Module "${spec.id}" already registered`);
                }
                if (position === 'bottom') {
                  this.#bottomItems.set(spec.id, spec);
                } else {
                  this.#items.set(spec.id, spec);
                }
              }
            }
            update(id, data, position) {
              if (this.#items.has(id)) {
                data = {
                  ...this.#items.get(id),
                  ...data
                };
              }
              this.#items.set(id, data);
              this.trigger('update.item');
            }
          }
          exports.SidebarManageRegistry = SidebarManageRegistry;
          /*bundle*/
          const SidebarManager = exports.SidebarManager = new SidebarManageRegistry();
          globalThis.n = SidebarManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./IActivityBarItem",
        "from": "IActivityBarItem",
        "name": "IActivityBarItem"
      }, {
        "im": "./index",
        "from": "SidebarManageRegistry",
        "name": "SidebarManageRegistry"
      }, {
        "im": "./index",
        "from": "SidebarManager",
        "name": "SidebarManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IActivityBarItem') && _export("IActivityBarItem", IActivityBarItem = require ? require('./IActivityBarItem').IActivityBarItem : value);
        (require || prop === 'SidebarManageRegistry') && _export("SidebarManageRegistry", SidebarManageRegistry = require ? require('./index').SidebarManageRegistry : value);
        (require || prop === 'SidebarManager') && _export("SidebarManager", SidebarManager = require ? require('./index').SidebarManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJNYXAiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwicmVnaXN0ZXIiLCJwb3NpdGlvbiIsInNwZWNzIiwic3BlYyIsImhhcyIsImlkIiwiRXJyb3IiLCJzZXQiLCJ1cGRhdGUiLCJkYXRhIiwiZ2V0IiwidHJpZ2dlciIsIlNpZGViYXJNYW5hZ2VyIiwiZ2xvYmFsVGhpcyIsIm4iXSwic291cmNlcyI6WyIvSUFjdGl2aXR5QmFySXRlbS50cyIsIi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUVBQSxNQUFBLENBQUFDLGNBQUEsQ0FBQUMsT0FBQTtZQUNBQyxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSkEsSUFBQUMsTUFBQSxHQUFBQyxPQUFBO1VBR087VUFBVSxNQUFPQyxxQkFBc0IsU0FBUUYsTUFBQSxDQUFBRyxhQUErQjtZQUNwRixDQUFBQyxLQUFNLEdBQUcsSUFBSUMsR0FBRyxFQUE0QjtZQUU1QyxJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNLENBQUNHLElBQUk7WUFDeEI7WUFFQSxDQUFBQyxXQUFZLEdBQUcsSUFBSUgsR0FBRyxFQUE0QjtZQUNsRCxJQUFJRyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBTCxLQUFNO1lBQ25CO1lBRUFNLFFBQVFBLENBQUNDLFFBQVEsRUFBRUMsS0FBeUI7Y0FDM0MsS0FBSyxNQUFNQyxJQUFJLElBQUlELEtBQUssRUFBRTtnQkFDekIsSUFBSSxJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDVSxHQUFHLENBQUNELElBQUksQ0FBQ0UsRUFBRSxDQUFDLEVBQUU7a0JBQzdCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLFdBQVdILElBQUksQ0FBQ0UsRUFBRSxzQkFBc0IsQ0FBQzs7Z0JBRTFELElBQUlKLFFBQVEsS0FBSyxRQUFRLEVBQUU7a0JBQzFCLElBQUksQ0FBQyxDQUFBSCxXQUFZLENBQUNTLEdBQUcsQ0FBQ0osSUFBSSxDQUFDRSxFQUFFLEVBQUVGLElBQUksQ0FBQztpQkFDcEMsTUFBTTtrQkFDTixJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDYSxHQUFHLENBQUNKLElBQUksQ0FBQ0UsRUFBRSxFQUFFRixJQUFJLENBQUM7OztZQUdqQztZQUVBSyxNQUFNQSxDQUFDSCxFQUFFLEVBQUVJLElBQUksRUFBRVIsUUFBUTtjQUN4QixJQUFJLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNVLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDLEVBQUU7Z0JBQ3hCSSxJQUFJLEdBQUc7a0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQWYsS0FBTSxDQUFDZ0IsR0FBRyxDQUFDTCxFQUFFLENBQUM7a0JBQUUsR0FBR0k7Z0JBQUksQ0FBRTs7Y0FFM0MsSUFBSSxDQUFDLENBQUFmLEtBQU0sQ0FBQ2EsR0FBRyxDQUFDRixFQUFFLEVBQUVJLElBQUksQ0FBQztjQUV6QixJQUFJLENBQUNFLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDNUI7O1VBQ0F2QixPQUFBLENBQUFJLHFCQUFBLEdBQUFBLHFCQUFBO1VBRU07VUFBVyxNQUFNb0IsY0FBYyxHQUFBeEIsT0FBQSxDQUFBd0IsY0FBQSxHQUFHLElBQUlwQixxQkFBcUIsRUFBRTtVQUNwRXFCLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHRixjQUFjIiwiaWdub3JlTGlzdCI6W119