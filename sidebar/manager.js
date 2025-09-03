System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
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
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9tb2RlbCIsInJlcXVpcmUiLCJTaWRlYmFyTWFuYWdlUmVnaXN0cnkiLCJSZWFjdGl2ZU1vZGVsIiwiaXRlbXMiLCJNYXAiLCJ0b3RhbCIsInNpemUiLCJib3R0b21JdGVtcyIsInRvcEl0ZW1zIiwicmVnaXN0ZXIiLCJwb3NpdGlvbiIsInNwZWNzIiwic3BlYyIsImhhcyIsImlkIiwiRXJyb3IiLCJzZXQiLCJ1cGRhdGUiLCJkYXRhIiwiZ2V0IiwidHJpZ2dlciIsIlNpZGViYXJNYW5hZ2VyIiwiZ2xvYmFsVGhpcyIsIm4iXSwic291cmNlcyI6WyIvL0lBY3Rpdml0eUJhckl0ZW0udHMvIiwiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQUEsTUFBQSxDQUFBQyxjQUFBLENBQUFDLE9BQUE7WUFDQUMsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLE1BQUEsR0FBQUMsT0FBQTtVQUdPO1VBQVUsTUFBT0MscUJBQXNCLFNBQVFGLE1BQUEsQ0FBQUcsYUFBK0I7WUFDcEYsQ0FBQUMsS0FBTSxHQUFHLElBQUlDLEdBQUcsRUFBNEI7WUFFNUMsSUFBSUQsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTSxDQUFDRyxJQUFJO1lBQ3hCO1lBRUEsQ0FBQUMsV0FBWSxHQUFHLElBQUlILEdBQUcsRUFBNEI7WUFDbEQsSUFBSUcsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQSxJQUFJQyxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUwsS0FBTTtZQUNuQjtZQUVBTSxRQUFRQSxDQUFDQyxRQUFRLEVBQUVDLEtBQXlCO2NBQzNDLEtBQUssTUFBTUMsSUFBSSxJQUFJRCxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1UsR0FBRyxDQUFDRCxJQUFJLENBQUNFLEVBQUUsQ0FBQyxFQUFFO2tCQUM3QixNQUFNLElBQUlDLEtBQUssQ0FBQyxXQUFXSCxJQUFJLENBQUNFLEVBQUUsc0JBQXNCLENBQUM7O2dCQUUxRCxJQUFJSixRQUFRLEtBQUssUUFBUSxFQUFFO2tCQUMxQixJQUFJLENBQUMsQ0FBQUgsV0FBWSxDQUFDUyxHQUFHLENBQUNKLElBQUksQ0FBQ0UsRUFBRSxFQUFFRixJQUFJLENBQUM7aUJBQ3BDLE1BQU07a0JBQ04sSUFBSSxDQUFDLENBQUFULEtBQU0sQ0FBQ2EsR0FBRyxDQUFDSixJQUFJLENBQUNFLEVBQUUsRUFBRUYsSUFBSSxDQUFDOzs7WUFHakM7WUFFQUssTUFBTUEsQ0FBQ0gsRUFBRSxFQUFFSSxJQUFJLEVBQUVSLFFBQVE7Y0FDeEIsSUFBSSxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDVSxHQUFHLENBQUNDLEVBQUUsQ0FBQyxFQUFFO2dCQUN4QkksSUFBSSxHQUFHO2tCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFmLEtBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ0wsRUFBRSxDQUFDO2tCQUFFLEdBQUdJO2dCQUFJLENBQUU7O2NBRTNDLElBQUksQ0FBQyxDQUFBZixLQUFNLENBQUNhLEdBQUcsQ0FBQ0YsRUFBRSxFQUFFSSxJQUFJLENBQUM7Y0FFekIsSUFBSSxDQUFDRSxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVCOztVQUNBdkIsT0FBQSxDQUFBSSxxQkFBQSxHQUFBQSxxQkFBQTtVQUVNO1VBQVcsTUFBTW9CLGNBQWMsR0FBQXhCLE9BQUEsQ0FBQXdCLGNBQUEsR0FBRyxJQUFJcEIscUJBQXFCLEVBQUU7VUFDcEVxQixVQUFVLENBQUNDLENBQUMsR0FBR0YsY0FBYyIsImlnbm9yZUxpc3QiOltdfQ==