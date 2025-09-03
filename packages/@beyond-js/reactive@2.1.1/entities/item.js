System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/model", "uuid@11.1.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Item, RegistryFactory, IItem, ItemId, IItemProps, IEntityProvider, IRecordProps, __beyond_pkg, hmr;
  _export({
    Item: void 0,
    RegistryFactory: void 0,
    IItem: void 0,
    ItemId: void 0,
    IItemProps: void 0,
    IEntityProvider: void 0,
    IRecordProps: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.1/entities/item"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['uuid', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 3782822724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _factory = require("./registry/factory");
          /*bundle*/
          class Item extends _model.ReactiveModel {
            #factory;
            #entity;
            get entity() {
              return this.#entity;
            }
            #registry;
            get __registryState() {
              return this.#registry.state;
            }
            #fetched;
            get fetched() {
              return this.#fetched;
            }
            #found = false;
            get found() {
              return this.#found;
            }
            _provider;
            get provider() {
              return this._provider;
            }
            get registry() {
              return this.#registry;
            }
            get __instanceId() {
              return this.#registry.instanceId;
            }
            #draft;
            get draft() {
              return this.#draft;
            }
            constructor({
              entity,
              provider,
              properties,
              ...args
            } = {}) {
              super({
                ...args,
                properties
              });
              // if (this.constructor.name === 'Assignment')
              if (!entity) throw new Error('Entity is required');
              if (provider && typeof provider !== 'function') {
                throw new Error(`Provider must be a class/constructor in object ${entity}`);
              }
              this.reactiveProps(['deleted']);
              this.#entity = entity;
              this.onSet = this.onSet.bind(this);
              /**
               * This event is triggered when the set method is executed.
               */
              this.on('set.executed', this.onSet);
              if (provider) {
                this._provider = new provider(this);
              }
              this.#factory = _factory.RegistryFactory.getInstance(entity);
              this.initialize(args);
            }
            /**
             *
             * @param param0
             */
            initialize({
              ...args
            }) {
              const registry = this.#factory.getItem(this.getProperty('id'), args);
              this.#registry = registry;
              const propertyValues = this.#registry.getValues();
              this.setInitialValues(propertyValues);
              // this.#registry.on('change', this.registryListener.bind(this));
              this.properties.forEach(property => {
                // TODO: capability to support object type properties.
                if (typeof property === 'string') {
                  this.on(`${property}.changed`, () => {
                    this.#registry.setValues({
                      [property]: this.getProperty(property)
                    });
                  });
                }
              });
            }
            set(values) {
              const response = super.set(values);
              return response;
            }
            onSet() {
              this.#registry?.setValues(this.getProperties());
            }
            _load(args) {}
            // Define optional methods with a default implementation that gives a warning message
            async load(args) {
              if (!this.provider || typeof this.provider.load !== 'function') {
                throw new Error(`DataProvider is not defined or does not implement the load() method in object ${this.constructor.name}`);
              }
              try {
                const response = await this.provider.load(args);
                const data = response;
                if (!data) {
                  this.#found = false;
                  throw new Error('Provider.load() did not return an item.');
                }
                this.#found = true;
                this.#fetched = true;
                this.set(data);
                this.setInitialValues(data);
                this.trigger('load', {
                  ...this.getProperties()
                });
                this.trigger('change');
                return response;
              } catch (e) {
                this.#found = false;
                throw e;
              }
            }
            async publish(data) {
              data = data ? data : this.getProperties();
              this.set({
                ...this.getProperties(),
                ...data
              });
              this.#registry.setValues(this.getProperties, true);
              super.saveChanges();
              if (this.provider && typeof this.provider.publish === 'function') {
                const updated = await this.provider.publish(data);
                if (!updated.status) {
                  throw new Error('Error saving item');
                }
                this.set(updated.data);
                return updated.data;
              }
              return this.getProperties();
            }
            async delete(options) {
              try {
                const id = this.getProperty('id');
                this.#registry.deleted = true;
                this.trigger('change');
                if (!options?.skipProvider && this.provider && typeof this.provider.delete === 'function') {
                  this.processing = true;
                  await this.provider.delete(id);
                }
                return true;
              } catch (e) {
                console.error(e);
                return false;
              } finally {
                this.processing = false;
              }
            }
          }
          exports.Item = Item;
        }
      });

      /**********************************
      INTERNAL MODULE: ./registry/factory
      **********************************/

      ims.set('./registry/factory', {
        hash: 1412870569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RegistryFactory = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _ = require("./");
          /*bundle */ /**
                       * Factory for managing multiple registry instances.
                       */
          class RegistryFactory extends _model.ReactiveModel {
            static #instances = new Map();
            items = new Map();
            #name;
            constructor(name, properties) {
              super({
                properties
              });
              this.#name = name;
              this.ready = true;
            }
            getItem(id, data) {
              if (!id || !this.items.has(id)) {
                const specs = data ? {
                  id,
                  ...data
                } : {
                  id,
                  properties: this.properties,
                  ...data
                };
                const registry = new _.Registry(this.#name, specs);
                registry.on('record.published', registry => {
                  this.trigger('record.published', registry);
                });
                /**
                 * If the register property is true, the registry is published and the event is triggered
                 * This is used to register the registry in the collection
                 */
                if (data.register) this.trigger('record.published', registry.getValues());
                registry.on('record.updated', registry => this.trigger('update.registry', registry));
                registry.on('record.deleted', registry => this.trigger('record.deleted', registry));
                id = registry.id;
                this.items.set(id, registry);
              }
              const item = this.items.get(id);
              // if (data) {
              // 	let specs = data;
              // 	if (!data.id) {
              // 		delete specs.id;
              // 	}
              // 	item.setValues(data);
              // }
              return item;
            }
            static getInstance(entity, data) {
              if (!this.#instances.has(entity)) {
                this.#instances.set(entity, new RegistryFactory(entity, data));
              }
              return this.#instances.get(entity);
            }
          }
          exports.RegistryFactory = RegistryFactory;
        }
      });

      /********************************
      INTERNAL MODULE: ./registry/index
      ********************************/

      ims.set('./registry/index', {
        hash: 1251785185,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Registry = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          class Registry extends _model.ReactiveModel {
            #id;
            #instanceId;
            #isDeleted = false;
            #draft = false;
            #state = "draft";
            get state() {
              return this.#state;
            }
            get draft() {
              return this.#draft;
            }
            set draft(value) {
              if (value === this.#draft) return;
              this.#draft = value;
              this.trigger("change");
            }
            get id() {
              return this.#id || this.#values.id;
            }
            get instanceId() {
              return this.#instanceId;
            }
            #values;
            get values() {
              return this.#values;
            }
            get deleted() {
              return this.#isDeleted;
            }
            set deleted(value) {
              if (value === this.#isDeleted) return;
              this.#isDeleted = value;
              this.trigger("record.deleted", this.#values);
              this.trigger("change");
            }
            #entity;
            constructor(entity, {
              properties,
              parent,
              register,
              ...data
            } = {}) {
              super({
                properties: properties || []
              });
              this.#entity = entity;
              const {
                id
              } = data;
              this.#instanceId = data?.instanceId ? data.instanceId : (0, _uuid.v4)();
              this.#id = id;
              this.#draft = !id;
              // Loop through data and ignore reactive objects
              this.#values = Object.entries(data).reduce((acc, [key, value]) => {
                if (typeof value === "object" && value?.isReactive) {
                  return acc;
                }
                acc[key] = value;
                return acc;
              }, {
                id: this.#id
              });
              this.#state = this.#id ? "published" : "draft";
              this.setValues(this.#values);
            }
            setValues(data, publish = false) {
              if (!data || Object.keys(data).length === 0) return false;
              const baseState = this.#state;
              let updated = false;
              for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                  const value = data[key];
                  if (value === this.#values[key]) continue;
                  this.#values[key] = value;
                  updated = true;
                }
              }
              if (!updated) return false;
              this.trigger("change", {
                values: this.#values
              });
              this.trigger("record.updated", {
                ...this.#values
              });
              // Solo dispara record.published si está en draft y publish = true
              if (publish && baseState === "draft") {
                this.#state = "published";
                this.trigger("record.published", {
                  ...this.#values
                });
              }
              return true;
            }
            getValues() {
              return {
                ...this.#values
              };
            }
          }
          exports.Registry = Registry;
        }
      });

      /**************************************
      INTERNAL MODULE: ./registry/types/index
      **************************************/

      ims.set('./registry/types/index', {
        hash: 1952711566,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3056830740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Item",
        "name": "Item"
      }, {
        "im": "./registry/factory",
        "from": "RegistryFactory",
        "name": "RegistryFactory"
      }, {
        "im": "./types",
        "from": "IItem",
        "name": "IItem"
      }, {
        "im": "./types",
        "from": "ItemId",
        "name": "ItemId"
      }, {
        "im": "./types",
        "from": "IItemProps",
        "name": "IItemProps"
      }, {
        "im": "./types",
        "from": "IEntityProvider",
        "name": "IEntityProvider"
      }, {
        "im": "./types",
        "from": "IRecordProps",
        "name": "IRecordProps"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Item') && _export("Item", Item = require ? require('./index').Item : value);
        (require || prop === 'RegistryFactory') && _export("RegistryFactory", RegistryFactory = require ? require('./registry/factory').RegistryFactory : value);
        (require || prop === 'IItem') && _export("IItem", IItem = require ? require('./types').IItem : value);
        (require || prop === 'ItemId') && _export("ItemId", ItemId = require ? require('./types').ItemId : value);
        (require || prop === 'IItemProps') && _export("IItemProps", IItemProps = require ? require('./types').IItemProps : value);
        (require || prop === 'IEntityProvider') && _export("IEntityProvider", IEntityProvider = require ? require('./types').IEntityProvider : value);
        (require || prop === 'IRecordProps') && _export("IRecordProps", IRecordProps = require ? require('./types').IRecordProps : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZhY3RvcnkiLCJJdGVtIiwiUmVhY3RpdmVNb2RlbCIsImZhY3RvcnkiLCJlbnRpdHkiLCJyZWdpc3RyeSIsIl9fcmVnaXN0cnlTdGF0ZSIsInN0YXRlIiwiZmV0Y2hlZCIsImZvdW5kIiwiX3Byb3ZpZGVyIiwicHJvdmlkZXIiLCJfX2luc3RhbmNlSWQiLCJpbnN0YW5jZUlkIiwiZHJhZnQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhcmdzIiwiRXJyb3IiLCJyZWFjdGl2ZVByb3BzIiwib25TZXQiLCJiaW5kIiwib24iLCJSZWdpc3RyeUZhY3RvcnkiLCJnZXRJbnN0YW5jZSIsImluaXRpYWxpemUiLCJnZXRJdGVtIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0eVZhbHVlcyIsImdldFZhbHVlcyIsInNldEluaXRpYWxWYWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJzZXRWYWx1ZXMiLCJzZXQiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImdldFByb3BlcnRpZXMiLCJfbG9hZCIsImxvYWQiLCJuYW1lIiwiZGF0YSIsInRyaWdnZXIiLCJlIiwicHVibGlzaCIsInNhdmVDaGFuZ2VzIiwidXBkYXRlZCIsInN0YXR1cyIsImRlbGV0ZSIsIm9wdGlvbnMiLCJpZCIsImRlbGV0ZWQiLCJza2lwUHJvdmlkZXIiLCJwcm9jZXNzaW5nIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl8iLCJpbnN0YW5jZXMiLCJNYXAiLCJpdGVtcyIsInJlYWR5IiwiaGFzIiwic3BlY3MiLCJSZWdpc3RyeSIsInJlZ2lzdGVyIiwiaXRlbSIsImdldCIsIl91dWlkIiwiaXNEZWxldGVkIiwidmFsdWUiLCJwYXJlbnQiLCJ2NCIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJrZXkiLCJpc1JlYWN0aXZlIiwia2V5cyIsImxlbmd0aCIsImJhc2VTdGF0ZSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlZmluZVByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iLCIvL3JlZ2lzdHJ5L2ZhY3RvcnkudHMiLCIvL3JlZ2lzdHJ5L2luZGV4LnRzIiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBRUEsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPRSxJQUFtRSxTQUFRSCxNQUFBLENBQUFJLGFBQWdCO1lBQ2xILENBQUFDLE9BQVE7WUFFUixDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxRQUFTO1lBRVQsSUFBSUMsZUFBZUEsQ0FBQTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBRCxRQUFTLENBQUNFLEtBQUs7WUFDNUI7WUFDQSxDQUFBQyxPQUFRO1lBQ1IsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxDQUFBQyxLQUFNLEdBQVksS0FBSztZQUN2QixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNVQyxTQUFTO1lBRW5CLElBQUlDLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN0QjtZQUNBLElBQUlMLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsSUFBSU8sWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFQLFFBQVMsQ0FBQ1EsVUFBVTtZQUNqQztZQUNBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FB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bEQsSUFBSSxDQUFDSCxJQUFJLElBQUlnQyxNQUFNLENBQUNNLElBQUksQ0FBQ3RDLElBQUksQ0FBQyxDQUFDdUMsTUFBTSxLQUFLLENBQUMsRUFBRSxPQUFPLEtBQUs7Y0FFekQsTUFBTUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFBMUUsS0FBTTtjQUM3QixJQUFJdUMsT0FBTyxHQUFHLEtBQUs7Y0FFbkIsS0FBSyxNQUFNK0IsR0FBRyxJQUFJcEMsSUFBSSxFQUFFO2dCQUN0QixJQUFJZ0MsTUFBTSxDQUFDUyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDM0MsSUFBSSxFQUFFb0MsR0FBRyxDQUFDLEVBQUU7a0JBQ25ELE1BQU1QLEtBQUssR0FBRzdCLElBQUksQ0FBQ29DLEdBQUcsQ0FBQztrQkFDdkIsSUFBSVAsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFBbkMsTUFBTyxDQUFDMEMsR0FBRyxDQUFDLEVBQUU7a0JBRWpDLElBQUksQ0FBQyxDQUFBMUMsTUFBTyxDQUFDMEMsR0FBRyxDQUFDLEdBQUdQLEtBQUs7a0JBQ3pCeEIsT0FBTyxHQUFHLElBQUk7OztjQUlsQixJQUFJLENBQUNBLE9BQU8sRUFBRSxPQUFPLEtBQUs7Y0FFMUIsSUFBSSxDQUFDSixPQUFPLENBQUMsUUFBUSxFQUFFO2dCQUFFUCxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFBO2NBQU8sQ0FBRSxDQUFDO2NBQ2hELElBQUksQ0FBQ08sT0FBTyxDQUFDLGdCQUFnQixFQUFFO2dCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFQO2NBQU8sQ0FBRSxDQUFDO2NBRW5EO2NBQ0EsSUFBSVMsT0FBTyxJQUFJcUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDcEMsSUFBSSxDQUFDLENBQUExRSxLQUFNLEdBQUcsV0FBVztnQkFDekIsSUFBSSxDQUFDbUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFO2tCQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFQO2dCQUFPLENBQUUsQ0FBQzs7Y0FHdkQsT0FBTyxJQUFJO1lBQ2I7WUFFQU4sU0FBU0EsQ0FBQTtjQUNQLE9BQU87Z0JBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQU07Y0FBTyxDQUFFO1lBQzVCOztVQUNEcUIsT0FBQSxDQUFBUSxRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7O1VGdkhEOztVQUVBUyxNQUFBLENBQUFZLGNBQUEsQ0FBQTdCLE9BQUE7WUFDQWMsS0FBQTtVQUNBOzs7Ozs7Ozs7OztVR0pBOztVQUVBRyxNQUFBLENBQUFZLGNBQUEsQ0FBQTdCLE9BQUE7WUFDQWMsS0FBQTtVQUNBIiwiaWdub3JlTGlzdCI6W119