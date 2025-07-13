System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/texts", "@beyond-js/reactive@2.1.0/model", "@beyond-js/widgets@0.1.6/controller", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.1.0/entities/collection"], function (_export, _context) {
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
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }, function (_beyondJsWidgets016Controller) {
      dependency_3 = _beyondJsWidgets016Controller;
    }, function (_beyondJsKernel0112Core) {
      dependency_4 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive210EntitiesCollection) {
      dependency_5 = _beyondJsReactive210EntitiesCollection;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
        hash: 4036898580,
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
            #model;
            get model() {
              return this.#model;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGV4dHMiLCJyZXF1aXJlIiwiX21vZGVsIiwiQmFzZVN0b3JlTWFuYWdlciIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidGV4dHMiLCJ2YWx1ZSIsIm1vZGVsIiwiZ2xvYmFsVGV4dHMiLCJyZWFkeSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsInNwZWNpZmllciIsInNwZWNzIiwiQ3VycmVudFRleHRzIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJzdG9yZSIsImV4cG9ydHMiLCJfY29yZSIsIkZvcm1CYXNlU3RvcmVNYW5hZ2VyIiwiaXRlbXNTZWxlY3RlZCIsIk1hcCIsInByb21pc2UiLCJ0ZXh0UmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsInJlc29sdmUiLCJsaXN0ZW5lciIsIkxpc3RTdG9yZU1hbmFnZXIiLCJpdGVtcyIsImxlbmd0aCIsInN0YXRlIiwiZmV0Y2hpbmciLCJ0b3RhbEl0ZW1zIiwibG9hZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJWaWV3U3RvcmVNYW5hZ2VyIiwiTW9kZWwiLCJpZCIsIm9mZiIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbIi90cy9iYXNlLnRzIiwiL3RzL2Zvcm0udHMiLCIvdHMvbGlzdC50cyIsIi90cy92aWV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUtPO1VBQVUsTUFBT0UsZ0JBQ3ZCLFNBQVFELE1BQUEsQ0FBQUUsYUFBa0M7WUFHMUNDLE9BQU87WUFFUCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ0MsS0FBSztZQUN6QjtZQUVBLENBQUFD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