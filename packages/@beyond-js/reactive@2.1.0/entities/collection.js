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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJsaXN0IiwiZGF0YSIsImVudHJpZXMiLCJzaG91bGRVcGRhdGUiLCJ1cGRhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJzZXRJdGVtcyIsInRyaWdnZXIiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhciIsIndhcm4iLCJmb3JFYWNoIiwiaGFzIiwiaWQiLCJnZXQiLCJzZXQiLCJpbnN0YW5jZSIsInBhcmVudCIsImFkZEl0ZW1zIiwiZ2V0UHJvcGVydGllcyIsImdldEl0ZW1Qcm9wZXJ0aWVzIiwicHVzaCIsIm1hdGNoZXNGaWx0ZXJzIiwibmV3SXRlbSIsImRlbGV0ZSIsImlkcyIsInRvRGVsZXRlIiwiZXhpc3RpbmdJdGVtcyIsImZpbHRlciIsIkJvb2xlYW4iLCJkZWxldGVNYW55IiwiUHJvbWlzZSIsImFsbCIsInNraXBQcm92aWRlciIsImV2YWx1YXRlQ29uZGl0aW9uIiwicHJvcGVydHkiLCJjcml0ZXJpYSIsInJlZ2lzdHJ5VmFsdWUiLCJPYmplY3QiLCJldmVyeSIsIm9wZXJhdG9yIiwidmFsdWUiLCJpbmNsdWRlcyIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImV2YWx1YXRlQ29uZGl0aW9ucyIsImNvbmRpdGlvbnMiLCJsb2dpYyIsImNvbmRpdGlvbiIsIkFORCIsIk9SIiwia2V5IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBTUEsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBR087VUFBVSxNQUFPRSxVQUd0QixTQUFRRCxNQUFBLENBQUFFLGFBQStCO1lBQy9CQyxLQUFLLEdBQVcsQ0FBQztZQUNqQkMsSUFBSSxHQUFtQixJQUFJO1lBQ25DOzs7O1lBSUEsQ0FBQUMsYUFBYyxHQUFHLE1BQU07WUFDdkIsQ0FBQUMsWUFBYTtZQUViOzs7WUFHT0MsUUFBUUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDSixLQUFLO1lBQ25CO1lBRUE7OztZQUdPSyxPQUFPQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7WUFDQSxDQUFBSyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDckI7WUFDQSxDQUFBQyxRQUFTO1lBRVQsSUFBSUEsUUFBUUEsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdkI7WUFFQSxPQUFPQyxZQUFZLEdBQUcsSUFBSTtZQUUxQixDQUFBQyxJQUFLO1lBQ0wsSUFBSUMsSUFBSUEsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFELElBQUs7WUFDbkI7WUFFQSxDQUFBRSxHQUFJLEdBQW1CLElBQUlDLEdBQUcsRUFBRTtZQUNoQyxJQUFJRCxHQUFHQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNsQjtZQUNBLElBQUlFLEtBQUtBLENBQUE7Y0FDUCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMs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