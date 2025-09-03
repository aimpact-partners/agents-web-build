System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/reactive@2.1.1/model", "@beyond-js/widgets@0.1.6/controller", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.1.1/entities/collection"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BaseStoreManager, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    BaseStoreManager: void 0,
    FormBaseStoreManager: void 0,
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Texts) {
      dependency_1 = _beyondJsKernel0112Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_beyondJsWidgets016Controller) {
      dependency_3 = _beyondJsWidgets016Controller;
    }, function (_beyondJsKernel0112Core) {
      dependency_4 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_5 = _beyondJsReactive211EntitiesCollection;
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
          "vspecifier": "@aimpact/platform@0.1.6/stores/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/texts', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-js/kernel/core', dependency_4], ['@beyond-js/reactive/entities/collection', dependency_5]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 526852362,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseStoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class BaseStoreManager extends _model.ReactiveModel {
            isStore;
            #texts;
            get texts() {
              return this.#texts.value;
            }
            get languages() {
              if (!this.ready) return [];
              return Object.keys(this.#globalTexts.value.languages).map(i => ({
                value: i,
                label: this.#globalTexts.value.languages[i]?.name
              }));
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              if (super.ready === value) return;
              super.ready = value;
              this.trigger('change');
            }
            constructor(specifier, specs = {}) {
              super(specs);
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.on('change', this.triggerEvent);
              this.#texts.fetch();
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/platform/i18n');
              this.#globalTexts.fetch();
              globalThis.store = this;
              this.#globalTexts.on('change', this.triggerEvent);
            }
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/form
      *************************/

      ims.set('./ts/form', {
        hash: 3974912281,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormBaseStoreManager = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/ //your code here

          class FormBaseStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            get texts() {
              return this.#texts.value;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              super.ready = value;
            }
            #promise;
            get textReady() {
              if (this.#promise) return this.#promise;
              const promise = new _core.PendingPromise();
              this.#promise = promise;
              if (this.#texts.ready && this.#globalTexts.ready) return promise.resolve(true);
              const listener = () => {
                if (this.#texts.ready && this.#globalTexts.ready) promise.resolve(true);
              };
              this.#texts.on('change', listener);
              this.#globalTexts.on('change', listener);
              return promise;
            }
            constructor({
              specifier
            }) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#texts.fetch();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
            }
          }
          exports.FormBaseStoreManager = FormBaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/list
      *************************/

      ims.set('./ts/list', {
        hash: 2172230810,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListStoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class ListStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            get texts() {
              return this.#texts.value;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            set ready(value) {
              if (value === super.ready) return;
              super.ready = value;
            }
            get items() {
              return this.model?.items?.length ? this.model.items : [];
            }
            #model;
            get model() {
              return this.#model;
            }
            get state() {
              return {
                ready: this.ready,
                fetching: this.fetching,
                items: this.items,
                totalItems: this.items?.length ?? 0
              };
            }
            constructor(specifier, model) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              if (model) {
                this.#model = new model();
              }
            }
            async load() {
              try {
                this.fetching = true;
                await this.model?.load();
                globalThis.store = this;
                super.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ListStoreManager = ListStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/view
      *************************/

      ims.set('./ts/view', {
        hash: 2514416063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ViewStoreManager = void 0;
          var _texts = require("@beyond-js/kernel/texts");
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class ViewStoreManager extends _model.ReactiveModel {
            isStore;
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
            }
            #texts;
            #Model;
            get texts() {
              return this.#texts.value;
            }
            #model;
            get model() {
              return this.#model;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            constructor(specifier, model) {
              super();
              this.#texts = new _texts.CurrentTexts(specifier);
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.fetch();
              globalThis.store = this;
              this.#Model = model;
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                super.ready = super.ready;
                this.fetching = true;
                if (!!this.#model && this.#model?.id !== id) {
                  this.#model.off('change', this.triggerEvent);
                  this.#model = undefined;
                }
                if (!this.#model) {
                  const specs = {
                    id
                  };
                  this.#model = new this.#Model(specs);
                }
                if (id) {
                  await this.#model.load(id);
                }
              } catch (e) {
                console.error(e);
              } finally {
                super.ready = true;
                this.fetching = false;
              }
            }
          }
          exports.ViewStoreManager = ViewStoreManager;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./ts/base",
        "from": "BaseStoreManager",
        "name": "BaseStoreManager"
      }, {
        "im": "./ts/form",
        "from": "FormBaseStoreManager",
        "name": "FormBaseStoreManager"
      }, {
        "im": "./ts/list",
        "from": "ListStoreManager",
        "name": "ListStoreManager"
      }, {
        "im": "./ts/view",
        "from": "ViewStoreManager",
        "name": "ViewStoreManager"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BaseStoreManager') && _export("BaseStoreManager", BaseStoreManager = require ? require('./ts/base').BaseStoreManager : value);
        (require || prop === 'FormBaseStoreManager') && _export("FormBaseStoreManager", FormBaseStoreManager = require ? require('./ts/form').FormBaseStoreManager : value);
        (require || prop === 'ListStoreManager') && _export("ListStoreManager", ListStoreManager = require ? require('./ts/list').ListStoreManager : value);
        (require || prop === 'ViewStoreManager') && _export("ViewStoreManager", ViewStoreManager = require ? require('./ts/view').ViewStoreManager : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGV4dHMiLCJyZXF1aXJlIiwiX21vZGVsIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsImxhbmd1YWdlcyIsInJlYWR5IiwiT2JqZWN0Iiwia2V5cyIsImdsb2JhbFRleHRzIiwibWFwIiwiaSIsImxhYmVsIiwibmFtZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsInNwZWNzIiwiQ3VycmVudFRleHRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImV4cG9ydHMiLCJfY29yZSIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInByb21pc2UiLCJ0ZXh0UmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJsaXN0ZW5lciIsIkxpc3RTdG9yZU1hbmFnZXIiLCJpdGVtcyIsIm1vZGVsIiwibGVuZ3RoIiwic3RhdGUiLCJmZXRjaGluZyIsInRvdGFsSXRlbXMiLCJsb2FkIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIlZpZXdTdG9yZU1hbmFnZXIiLCJNb2RlbCIsImlkIiwib2ZmIiwidW5kZWZpbmVkIl0sInNvdXJjZXMiOlsiLy90cy9iYXNlLnRzIiwiLy90cy9mb3JtLnRzIiwiLy90cy9saXN0LnRzIiwiLy90cy92aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUtPO1VBQVUsTUFBT0UsZ0JBQXdDLFNBQVFELE1BQUEsQ0FBQUUsYUFBZ0I7WUFDdkZDLE9BQU87WUFFUCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0MsS0FBSztZQUN6QjtZQUVBLElBQUlDLFNBQVNBLENBQUE7Y0FDWixJQUFJLENBQUMsSUFBSSxDQUFDQyxLQUFLLEVBQUUsT0FBTyxFQUFFO2NBQzFCLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBQyxXQUFZLENBQUNMLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLENBQUNLLEdBQUcsQ0FBQ0MsQ0FBQyxLQUFLO2dCQUMvRFAsS0FBSyxFQUFFTyxDQUFDO2dCQUNSQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUFILFdBQVksQ0FBQ0wsS0FBSyxDQUFDQyxTQUFTLENBQUNNLENBQUMsQ0FBQyxFQUFFRTtlQUM3QyxDQUFDLENBQUM7WUFDSjtZQUVBLENBQUFKLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDTCxLQUFLO1lBQy9CO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0csS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBRyxXQUFZLENBQUNILEtBQUs7WUFDcEQ7WUFFQSxJQUFJQSxLQUFLQSxDQUFDRixLQUFLO2NBQ2QsSUFBSSxLQUFLLENBQUNFLEtBQUssS0FBS0YsS0FBSyxFQUFFO2NBQzNCLEtBQUssQ0FBQ0UsS0FBSyxHQUFHRixLQUFLO2NBQ25CLElBQUksQ0FBQ1UsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUNBQyxZQUFZQyxTQUFTLEVBQUVDLEtBQUssR0FBRyxFQUFFO2NBQ2hDLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO2NBQ1osSUFBSSxDQUFDLENBQUFkLEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFxQixZQUFZLENBQUNGLFNBQVMsQ0FBQztjQUN6QyxJQUFJLENBQUMsQ0FBQWIsS0FBTSxDQUFDZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQWpCLEtBQU0sQ0FBQ2tCLEtBQUssRUFBRTtjQUNuQixJQUFJLENBQUMsQ0FBQVosV0FBWSxHQUFHLElBQUlaLE1BQUEsQ0FBQXFCLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztjQUM5RCxJQUFJLENBQUMsQ0FBQVQsV0FBWSxDQUFDWSxLQUFLLEVBQUU7Y0FFekJDLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Y0FFdkIsSUFBSSxDQUFDLENBQUFkLFdBQVksQ0FBQ1UsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUNsRDs7VUFDQUksT0FBQSxDQUFBeEIsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NELElBQUF5QixLQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR08sV0FOUDs7VUFNaUIsTUFBTzRCLG9CQUFxQixTQUFRM0IsTUFBQSxDQUFBRSxhQUFtQztZQUN2RkMsT0FBTztZQUVQLENBQUF5QixhQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQzFCLElBQUlELGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsYUFBYztZQUMzQjtZQUVBLENBQUF4QixLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0MsS0FBSztZQUN6QjtZQUVBLENBQUFLLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWSxDQUFDTCxLQUFLO1lBQy9CO1lBRUEsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFILEtBQU0sQ0FBQ0csS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBRyxXQUFZLENBQUNILEtBQUs7WUFDbkU7WUFFQSxJQUFJQSxLQUFLQSxDQUFDRixLQUFLO2NBQ2QsS0FBSyxDQUFDRSxLQUFLLEdBQUdGLEtBQUs7WUFDcEI7WUFFQSxDQUFBeUIsT0FBUTtZQUNSLElBQUlDLFNBQVNBLENBQUE7Y0FDWixJQUFJLElBQUksQ0FBQyxDQUFBRCxPQUFRLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtjQUV2QyxNQUFNQSxPQUFPLEdBQUcsSUFBSUosS0FBQSxDQUFBTSxjQUFjLEVBQVc7Y0FDN0MsSUFBSSxDQUFDLENBQUFGLE9BQVEsR0FBR0EsT0FBTztjQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBMUIsS0FBTSxDQUFDRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFHLFdBQVksQ0FBQ0gsS0FBSyxFQUFFLE9BQU91QixPQUFPLENBQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Y0FDOUUsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLENBQUE5QixLQUFNLENBQUNHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUcsV0FBWSxDQUFDSCxLQUFLLEVBQUV1QixPQUFPLENBQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Y0FDeEUsQ0FBQztjQUNELElBQUksQ0FBQyxDQUFBN0IsS0FBTSxDQUFDZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRWMsUUFBUSxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBeEIsV0FBWSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFYyxRQUFRLENBQUM7Y0FDeEMsT0FBT0osT0FBTztZQUNmO1lBQ0FkLFlBQVk7Y0FBRUM7WUFBUyxDQUFFO2NBQ3hCLEtBQUssRUFBRTtjQUVQLElBQUksQ0FBQyxDQUFBYixLQUFNLEdBQUcsSUFBSU4sTUFBQSxDQUFBcUIsWUFBWSxDQUFDRixTQUFTLENBQUM7Y0FDekMsSUFBSSxDQUFDLENBQUFiLEtBQU0sQ0FBQ2tCLEtBQUssRUFBRTtjQUNuQixJQUFJLENBQUMsQ0FBQWxCLEtBQU0sQ0FBQ2dCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFYLFdBQVksR0FBRyxJQUFJWixNQUFBLENBQUFxQixZQUFZLENBQUMsMkJBQTJCLENBQUM7Y0FDakUsSUFBSSxDQUFDLENBQUFULFdBQVksQ0FBQ1ksS0FBSyxFQUFFO2NBQ3pCLElBQUksQ0FBQyxDQUFBbEIsS0FBTSxDQUFDZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQVgsV0FBWSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1lBQ2xEOztVQUNBSSxPQUFBLENBQUFFLG9CQUFBLEdBQUFBLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pERCxJQUFBN0IsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPb0MsZ0JBQ3ZCLFNBQVFuQyxNQUFBLENBQUFFLGFBQWtDO1lBRzFDQyxPQUFPO1lBRVAsQ0FBQXlCLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSUQsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUEsQ0FBQXhCLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDQyxLQUFLO1lBQ3pCO1lBRUEsQ0FBQUssV0FBWTtZQUNaLElBQUlBLFdBQVdBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQyxDQUFBQSxXQUFZLENBQUNMLEtBQUs7WUFDL0I7WUFFQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUgsS0FBTSxDQUFDRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFHLFdBQVksQ0FBQ0gsS0FBSztZQUNuRTtZQUVBLElBQUlBLEtBQUtBLENBQUNGLEtBQUs7Y0FDZCxJQUFJQSxLQUFLLEtBQUssS0FBSyxDQUFDRSxLQUFLLEVBQUU7Y0FDM0IsS0FBSyxDQUFDQSxLQUFLLEdBQUdGLEtBQUs7WUFDcEI7WUFFQSxJQUFJK0IsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDQyxLQUFLLEVBQUVELEtBQUssRUFBRUUsTUFBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDRCxLQUFLLEdBQUcsRUFBRTtZQUN6RDtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPO2dCQUNOaEMsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztnQkFDakJpQyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxRQUFRO2dCQUN2QkosS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztnQkFDakJLLFVBQVUsRUFBRSxJQUFJLENBQUNMLEtBQUssRUFBRUUsTUFBTSxJQUFJO2VBQ2xDO1lBQ0Y7WUFDQXRCLFlBQVlDLFNBQWlCLEVBQUVvQixLQUFpQztjQUMvRCxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUMsQ0FBQWpDLEtBQU0sR0FBRyxJQUFJTixNQUFBLENBQUFxQixZQUFZLENBQUNGLFNBQVMsQ0FBQztjQUN6QyxJQUFJLENBQUMsQ0FBQVAsV0FBWSxHQUFHLElBQUlaLE1BQUEsQ0FBQXFCLFlBQVksQ0FBQywyQkFBMkIsQ0FBQztjQUNqRSxJQUFJLENBQUMsQ0FBQWYsS0FBTSxDQUFDZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUMzQyxJQUFJLENBQUMsQ0FBQVgsV0FBWSxDQUFDVSxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQ2pELElBQUksQ0FBQyxDQUFBWCxXQUFZLENBQUNZLEtBQUssRUFBRTtjQUN6QixJQUFJZSxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLENBQUFBLEtBQU0sR0FBRyxJQUFJQSxLQUFLLEVBQUU7O1lBRTNCO1lBRUEsTUFBTUssSUFBSUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSTtnQkFFcEIsTUFBTSxJQUFJLENBQUNILEtBQUssRUFBRUssSUFBSSxFQUFFO2dCQUN4Qm5CLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Z0JBQ3ZCLEtBQUssQ0FBQ2pCLEtBQUssR0FBRyxJQUFJO2VBQ2xCLENBQUMsT0FBT29DLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0gsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBZixPQUFBLENBQUFVLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdFRCxJQUFBckMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPK0MsZ0JBQW9CLFNBQVE5QyxNQUFBLENBQUFFLGFBQWtDO1lBQ3JGQyxPQUFPO1lBRVAsQ0FBQXlCLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSUQsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzNCO1lBRUEsQ0FBQXhCLEtBQU07WUFFTixDQUFBMkMsS0FBTTtZQUNOLElBQUkzQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDQyxLQUFLO1lBQ3pCO1lBRUEsQ0FBQWdDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLENBQUEzQixXQUFZO1lBQ1osSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVksQ0FBQ0wsS0FBSztZQUMvQjtZQUVBLElBQUlFLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBSCxLQUFNLENBQUNHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUcsV0FBWSxDQUFDSCxLQUFLO1lBQ25FO1lBQ0FTLFlBQVlDLFNBQVMsRUFBRW9CLEtBQWdDO2NBQ3RELEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBakMsS0FBTSxHQUFHLElBQUlOLE1BQUEsQ0FBQXFCLFlBQVksQ0FBQ0YsU0FBUyxDQUFDO2NBQ3pDLElBQUksQ0FBQyxDQUFBUCxXQUFZLEdBQUcsSUFBSVosTUFBQSxDQUFBcUIsWUFBWSxDQUFDLDJCQUEyQixDQUFDO2NBQ2pFLElBQUksQ0FBQyxDQUFBVCxXQUFZLENBQUNZLEtBQUssRUFBRTtjQUN6QkMsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUN2QixJQUFJLENBQUMsQ0FBQXVCLEtBQU0sR0FBR1YsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQWpDLEtBQU0sQ0FBQ2dCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Y0FDM0MsSUFBSSxDQUFDLENBQUFYLFdBQVksQ0FBQ1UsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztZQUNsRDtZQUVBLE1BQU1xQixJQUFJQSxDQUFDTSxFQUFFO2NBQ1osSUFBSTtnQkFDSCxLQUFLLENBQUN6QyxLQUFLLEdBQUcsS0FBSyxDQUFDQSxLQUFLO2dCQUN6QixJQUFJLENBQUNpQyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUFILEtBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFVyxFQUFFLEtBQUtBLEVBQUUsRUFBRTtrQkFDNUMsSUFBSSxDQUFDLENBQUFYLEtBQU0sQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM1QixZQUFZLENBQUM7a0JBQzVDLElBQUksQ0FBQyxDQUFBZ0IsS0FBTSxHQUFHYSxTQUFTOztnQkFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBYixLQUFNLEVBQUU7a0JBQ2pCLE1BQU1uQixLQUFLLEdBQUc7b0JBQUU4QjtrQkFBRSxDQUFFO2tCQUNwQixJQUFJLENBQUMsQ0FBQVgsS0FBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUFVLEtBQU0sQ0FBQzdCLEtBQUssQ0FBQzs7Z0JBR3JDLElBQUk4QixFQUFFLEVBQUU7a0JBQ1AsTUFBTSxJQUFJLENBQUMsQ0FBQVgsS0FBTSxDQUFDSyxJQUFJLENBQUNNLEVBQUUsQ0FBQzs7ZUFFM0IsQ0FBQyxPQUFPTCxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxLQUFLLENBQUNwQyxLQUFLLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDaUMsUUFBUSxHQUFHLEtBQUs7O1lBRXZCOztVQUNBZixPQUFBLENBQUFxQixnQkFBQSxHQUFBQSxnQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==