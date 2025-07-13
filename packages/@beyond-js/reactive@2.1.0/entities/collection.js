System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/entities/item", "@beyond-js/reactive@2.1.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, ILoadSpecs, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0,
    ILoadSpecs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_1 = _beyondJsReactive210EntitiesItem;
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["uuid", "11.1.0"], ["zod", "3.24.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/local", "0.1.3"], ["react", "18.3.1"], ["@beyond-js/reactive", "2.1.0"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/reactive@2.1.0/entities/collection"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 50024398,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Collection = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class Collection extends _model.ReactiveModel {
            total = 0;
            next = null;
            /**
             * Name of the parameter used for pagination cursor (default: "next").
             * Can be configured via the constructor using `nextParamName`.
             */
            #nextParamName = "next";
            #defaultLimit;
            /**
             * Get the total number of items available (if provided by the provider).
             */
            getTotal() {
              return this.total;
            }
            /**
             * Get the value of next page (if provided by the provider).
             */
            getNext() {
              return this.next;
            }
            #entity;
            get entity() {
              return this.#entity;
            }
            #provider;
            get provider() {
              return this.#provider;
            }
            static isCollection = true;
            #item;
            get Item() {
              return this.#item;
            }
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            #filters;
            #registry;
            constructor({
              entity,
              provider,
              item,
              defaultLimit = 15,
              nextParamName = "next"
            }) {
              super();
              this.#entity = entity;
              if (provider && typeof provider !== "function") {
                throw new Error("Provider must be a class/constructor");
              }
              if (provider) {
                this.#provider = new provider(this);
              }
              this.#registry = _item.RegistryFactory.getInstance(entity);
              this.#registry.on("record.published", this.onNewRegistry.bind(this));
              this.#registry.on("record.deleted", this.onRegistryDeleted.bind(this));
              this.#item = item;
              this.#defaultLimit = defaultLimit;
              if (nextParamName) this.#nextParamName = nextParamName;
            }
            /**
             * Loads and processes data from an external source via the `DataProvider`.
             * This method uses the configured `provider` to fetch data and apply the specified filters.
             * Filtering parameters are defined in the `args` argument, and the specific filtering logic
             * is implemented by the `DataProvider`.
             *
             * ### Parameters:
             * - `args.where` (optional): Object defining search filters with the following structure:
             *   - `{ property: { operator: value } }`
             *   - Supported operators include:
             *     - `equals`: Exact match with the property value.
             *     - `not`: Value different from the specified value.
             *     - `in`: The property value matches one of the values in the array.
             *     - `notIn`: The property value does not match any of the values in the array.
             *     - `contains`: The property value contains the specified substring.
             *     - `startsWith`: The property value starts with the specified substring.
             *     - `endsWith`: The property value ends with the specified substring.
             *     - `gt` (greater than): The property value is greater than the specified value.
             *     - `gte` (greater than or equal): The property value is greater than or equal to the specified value.
             *     - `lt` (less than): The property value is less than the specified value.
             *     - `lte` (less than or equal): The property value is less than or equal to the specified value.
             *
             * - `args.orderBy` (optional): Object to define the sorting of results. Example:
             *   - `{ property: "asc" | "desc" }` where `"asc"` is ascending order and `"desc"` is descending order.
             *
             * - `args.skip` and `args.take` (optional): Parameters for in-memory pagination.
             *   - `skip`: Number of items to skip from the beginning.
             *   - `take`: Number of items to load after skipping the defined number in `skip`.
             *
             * ### Exceptions:
             * - Throws an error if the `DataProvider` is not defined or does not implement the `load` method.
             * - Throws an error if `DataProvider.load()` does not return an array.
             *
             * @param {Object} args - Object containing filtering and configuration parameters.
             * @returns {Promise<void>} - A promise that resolves when data loading and processing are complete.
             * @throws {Error} - If data cannot be loaded or processed.
             */
            /**
             * Load items from the configured provider.
             * If {@link ILoadSpecs.limit} is omitted, the collection's `defaultLimit`
             * (configured in the constructor) is used.
             *
             * Pagination is handled internally: if the collection has a pagination cursor ("next"),
             * it will be added to the request using the parameter name defined by `nextParamName`.
             * You do not need to pass the `next` parameter manually.
             */
            async load(args = {}) {
              // Ensure pagination defaults
              if (typeof args.limit !== "number") args.limit = this.#defaultLimit;
              if (this.next) args[this.#nextParamName] = this.next;
              this.#filters = args.where ?? {};
              if (!this.#provider || typeof this.#provider.list !== "function") {
                throw new Error("DataProvider is not defined or does not implement the list() method.");
              }
              try {
                const data = await this.#provider.list(args);
                let entries;
                const shouldUpdate = !!args.update;
                if (Array.isArray(data)) {
                  entries = data;
                  this.total = 0;
                  this.next = null;
                  this.setItems(entries, true);
                } else if (data && Array.isArray(data.items)) {
                  entries = data.items;
                  if (typeof data.total === "number") this.total = data.total;
                  if ("next" in data) this.next = data.next;
                  this.setItems(entries, !shouldUpdate);
                } else {
                  throw new Error('DataProvider.list() must return an array or an object with an "entries" array.');
                }
                this.trigger("load", {
                  items: entries,
                  total: this.total,
                  next: this.next
                });
                return entries;
              } catch (error) {
                console.error("Error loading data:", error);
                throw error;
              }
            }
            setItems(data, clear = false) {
              if (clear) this.#map.clear();
              if (!data) return;
              if (!Array.isArray(data)) {
                // console.trace(data);
                console.warn("Data must be an array");
                return;
              }
              data.forEach(item => {
                if (this.map.has(item.id)) {
                  this.map.get(item.id).set(item);
                  return;
                }
                const instance = new this.#item({
                  parent: this,
                  ...item
                });
                this.#map.set(item.id, instance);
              });
            }
            addItems(data) {
              this.setItems(data);
              this.trigger("items.changed", {
                items: this.#map
              });
              this.trigger("change");
            }
            set(data) {
              super.set(data);
              this.trigger("change");
              return data;
            }
            getProperties() {
              //@ts-ignore;
              return {
                items: this.items
              };
            }
            getItemProperties() {
              const items = [];
              for (let item of this.items) {
                items.push(item.getProperties());
              }
              return items;
            }
            /**
             * Validates a new registry against the collection's filters and, if it matches,
             * creates a new item with the registry data and adds it to the data map.
             *
             * @param {object} registry - The new registry data to be checked and potentially added.
             */
            onNewRegistry(registry) {
              // Check if the registry matches the filters
              if (this.matchesFilters(registry)) {
                // Create a new item instance with the registry data
                const newItem = new this.#item(registry);
                // Add the new item to the map, using its id as the key
                this.#map.set(registry.id, newItem);
                // Optionally trigger an event to notify that a new item was added
                this.trigger("items.changed", {
                  item: newItem
                });
                this.trigger("change");
              }
            }
            async delete(ids) {
              const toDelete = Array.isArray(ids) ? ids : [ids];
              const existingItems = toDelete.map(id => this.#map.get(id)).filter(Boolean);
              if (this.#provider && typeof this.#provider.deleteMany === "function") {
                await this.#provider.deleteMany(toDelete);
              }
              return await Promise.all(existingItems.map(item => item.delete({
                skipProvider: true
              })));
            }
            onRegistryDeleted(registry) {
              if (!this.#map.has(registry.id)) return;
              this.#map.delete(registry.id);
              this.trigger("change");
              this.trigger("items.changed");
            }
            /**
             * Validates if a registry matches the stored filters, including support for AND and OR logical operators.
             * The #filters object contains filtering criteria that are evaluated here.
             *
             * @param {object} registry - The data of the registry to be checked.
             * @returns {boolean} - Returns true if the registry matches all filter criteria; otherwise, false.
             */
            matchesFilters(registry) {
              const filters = this.#filters?.where;
              if (!filters) return true; // If no filters are set, assume it matches
              // Helper function to evaluate a single condition
              const evaluateCondition = (property, criteria) => {
                const registryValue = registry[property];
                return Object.entries(criteria).every(([operator, value]) => {
                  switch (operator) {
                    case "equals":
                      return registryValue === value;
                    case "not":
                      return registryValue !== value;
                    case "in":
                      return Array.isArray(value) && value.includes(registryValue);
                    case "notIn":
                      return !Array.isArray(value) || !value.includes(registryValue);
                    case "contains":
                      return typeof registryValue === "string" && registryValue.includes(value);
                    case "startsWith":
                      return typeof registryValue === "string" && registryValue.startsWith(value);
                    case "endsWith":
                      return typeof registryValue === "string" && registryValue.endsWith(value);
                    case "gt":
                      return registryValue > value;
                    case "gte":
                      return registryValue >= value;
                    case "lt":
                      return registryValue < value;
                    case "lte":
                      return registryValue <= value;
                    default:
                      console.warn(`Unknown filter operator: ${operator}`);
                      return false;
                  }
                });
              };
              // General function to evaluate conditions with logical operators
              const evaluateConditions = (conditions, logic) => conditions[logic](condition => Object.entries(condition).every(([property, criteria]) => evaluateCondition(property, criteria)));
              // Evaluate AND conditions
              if (filters.AND && !evaluateConditions(filters.AND, "every")) return false;
              // Evaluate OR conditions
              if (filters.OR && !evaluateConditions(filters.OR, "some")) return false;
              // Evaluate direct conditions (outside of AND/OR)
              return Object.entries(filters).filter(([key]) => key !== "AND" && key !== "OR").every(([property, criteria]) => evaluateCondition(property, criteria));
            }
          }
          exports.Collection = Collection;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3018774832,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Collection",
        "name": "Collection"
      }, {
        "im": "./types",
        "from": "ICollectionProvider",
        "name": "ICollectionProvider"
      }, {
        "im": "./types",
        "from": "ILoadSpecs",
        "name": "ILoadSpecs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Collection') && _export("Collection", Collection = require ? require('./index').Collection : value);
        (require || prop === 'ICollectionProvider') && _export("ICollectionProvider", ICollectionProvider = require ? require('./types').ICollectionProvider : value);
        (require || prop === 'ILoadSpecs') && _export("ILoadSpecs", ILoadSpecs = require ? require('./types').ILoadSpecs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsImVudHJpZXMiLCJzaG91bGRVcGRhdGUiLCJ1cGRhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRJdGVtcyIsInRyaWdnZXIiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhciIsIndhcm4iLCJmb3JFYWNoIiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsInBhcmVudCIsImFkZEl0ZW1zIiwiZ2V0UHJvcGVydGllcyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicHVzaCIsIm1hdGNoZXNGaWx0ZXJzIiwibmV3SXRlbSIsImRlbGV0ZSIsImlkcyIsInRvRGVsZXRlIiwiZXhpc3RpbmdJdGVtcyIsImZpbHRlciIsIkJvb2xlYW4iLCJkZWxldGVNYW55IiwiUHJvbWlzZSIsImFsbCIsInNraXBQcm92aWRlciIsImV2YWx1YXRlQ29uZGl0aW9uIiwicHJvcGVydHkiLCJjcml0ZXJpYSIsInJlZ2lzdHJ5VmFsdWUiLCJPYmplY3QiLCJldmVyeSIsIm9wZXJhdG9yIiwidmFsdWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFNQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLFVBR3RCLFNBQVFELE1BQUEsQ0FBQUUsYUFBK0I7WUFDL0JDLEtBQUssR0FBVyxDQUFDO1lBQ2pCQyxJQUFJLEdBQW1CLElBQUk7WUFDbkM7Ozs7WUFJQSxDQUFBQyxhQUFjLEdBQUcsTUFBTTtZQUN2QixDQUFBQyxZQUFhO1lBRWI7OztZQUdPQyxRQUFRQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbkI7WUFFQTs7O1lBR09LLE9BQU9BLENBQUE7Y0FDWixPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjtZQUNBLENBQUFLLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNyQjtZQUNBLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN2QjtZQUVBLE9BQU9DLFlBQVksR0FBRyxJQUFJO1lBRTFCLENBQUFDLElBQUs7WUFDTCxJQUFJQyxJQUFJQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUQsSUFBSztZQUNuQjtZQUVBLENBQUFFLEdBQUksR0FBbUIsSUFBSUMsR0FBRyxFQUFFO1lBQ2hDLElBQUlELEdBQUdBLENBQUE7Y0FDTCxPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2xCO1lBQ0EsSUFBSUUsS0FBS0EsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFB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