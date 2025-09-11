System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/texts", "@beyond-js/reactive@2.1.1/model", "@beyond-js/widgets@1.1.4/controller", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/entities/collection"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, BaseStoreManager, FormBaseStoreManager, ListStoreManager, ViewStoreManager, __beyond_pkg, hmr;
  _export({
    BaseStoreManager: void 0,
    FormBaseStoreManager: void 0,
    ListStoreManager: void 0,
    ViewStoreManager: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Texts) {
      dependency_1 = _beyondJsKernel0114Texts;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }, function (_beyondJsWidgets114Controller) {
      dependency_3 = _beyondJsWidgets114Controller;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_4 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_5 = _beyondJsReactive211EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/kernel/texts', dependency_1], ['@beyond-js/reactive/model', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-js/reactive/entities/item', dependency_4], ['@beyond-js/reactive/entities/collection', dependency_5]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./ts/base
      *************************/
      ims.set('./ts/base', {
        hash: 876572171,
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
              return this.#texts.ready && this.#globalTexts.ready && super.ready;
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
            triggerEvent = () => this.trigger('change');
          }
          exports.BaseStoreManager = BaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/form
      *************************/

      ims.set('./ts/form', {
        hash: 3774272479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FormBaseStoreManager = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _base = require("./base");
          /*bundle*/
          class FormBaseStoreManager extends _base.BaseStoreManager {
            #model;
            #modelClass;
            get model() {
              return this.#model;
            }
            get state() {
              return {
                ready: this.ready,
                fetching: this.fetching
              };
            }
            constructor(specifier, specs) {
              if (!specs.model) {
                throw new Error('FormBaseStoreManager: Model is required in constructor specs');
              }
              super(specifier, specs);
              this.#modelClass = specs.model;
            }
            async load(id) {
              try {
                this.fetching = true;
                if (!this.#modelClass) {
                  throw new Error('FormBaseStoreManager: Model class not provided');
                }
                // Create model instance
                this.#model = new this.#modelClass();
                // Validar que el modelo sea de tipo Item
                if (!(this.#model instanceof _item.Item)) {
                  throw new Error('FormBaseStoreManager: Model must be an instance of Item.');
                }
                // Si se proporciona un ID, pasarlo al modelo
                if (id) {
                  this.#model.set({
                    id
                  });
                }
                await this.#model.load();
                globalThis.store = this;
                super.ready = true;
              } catch (e) {
                console.error(e);
                throw e;
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.FormBaseStoreManager = FormBaseStoreManager;
        }
      });

      /*************************
      INTERNAL MODULE: ./ts/list
      *************************/

      ims.set('./ts/list', {
        hash: 3787609336,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ListStoreManager = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _base = require("./base");
          /*bundle*/
          class ListStoreManager extends _base.BaseStoreManager {
            #itemsSelected = new Map();
            get itemsSelected() {
              return this.#itemsSelected;
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
            constructor(specifier, specs = {}) {
              super(specifier, specs);
              if (specs.model) {
                this.#model = new specs.model();
              }
            }
            async load() {
              try {
                this.fetching = true;
                if (!this.model) {
                  console.warn('ListStoreManager: No model provided. Cannot load data.');
                  return;
                }
                // Validar que el modelo sea de tipo Collection
                if (!(this.model instanceof _collection.Collection)) {
                  console.warn('ListStoreManager: Model must be an instance of Collection.');
                  return;
                }
                await this.model.load();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGV4dHMiLCJyZXF1aXJlIiwiX21vZGVsIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsImxhbmd1YWdlcyIsInJlYWR5IiwiT2JqZWN0Iiwia2V5cyIsImdsb2JhbFRleHRzIiwibWFwIiwiaSIsImxhYmVsIiwibmFtZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsInNwZWNzIiwiQ3VycmVudFRleHRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImV4cG9ydHMiLCJfaXRlbSIsIl9iYXNlIiwiRm9ybUJhc2VTdG9yZU1hbmFnZXIiLCJtb2RlbCIsIm1vZGVsQ2xhc3MiLCJzdGF0ZSIsImZldGNoaW5nIiwiRXJyb3IiLCJsb2FkIiwiaWQiLCJJdGVtIiwic2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIl9jb2xsZWN0aW9uIiwiTGlzdFN0b3JlTWFuYWdlciIsIml0ZW1zU2VsZWN0ZWQiLCJNYXAiLCJpdGVtcyIsImxlbmd0aCIsInRvdGFsSXRlbXMiLCJ3YXJuIiwiQ29sbGVjdGlvbiIsIlZpZXdTdG9yZU1hbmFnZXIiLCJNb2RlbCIsIm9mZiIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbIi90cy9iYXNlLnRzIiwiL3RzL2Zvcm0udHMiLCIvdHMvbGlzdC50cyIsIi90cy92aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUtPO1VBQVUsTUFBT0UsZ0JBQXdDLFNBQVFELE1BQUEsQ0FBQUUsYUFBZ0I7WUFDdkZDLE9BQU87WUFFUCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEs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