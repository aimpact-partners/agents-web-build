System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Collection, ICollectionProvider, ILoadSpecs, __beyond_pkg, hmr;
  _export({
    Collection: void 0,
    ICollectionProvider: void 0,
    ILoadSpecs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_1 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
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
          "vspecifier": "@beyond-js/reactive@2.1.1/entities/collection"
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
        hash: 328148202,
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
            #nextParamName = 'next';
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
              nextParamName = 'next'
            }) {
              super();
              this.#entity = entity;
              if (provider && typeof provider !== 'function') {
                throw new Error('Provider must be a class/constructor');
              }
              if (provider) {
                this.#provider = new provider(this);
              }
              this.#registry = _item.RegistryFactory.getInstance(entity);
              this.#registry.on('record.published', this.onNewRegistry.bind(this));
              this.#registry.on('record.deleted', this.onRegistryDeleted.bind(this));
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
              if (typeof args.limit !== 'number') args.limit = this.#defaultLimit;
              if (this.next) args[this.#nextParamName] = this.next;
              this.#filters = args.where ?? {};
              this.fetching = true;
              if (!this.#provider || typeof this.#provider.list !== 'function') {
                throw new Error('DataProvider is not defined or does not implement the list() method.');
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
                  if (typeof data.total === 'number') this.total = data.total;
                  if ('next' in data) this.next = data.next;
                  this.setItems(entries, !shouldUpdate);
                } else {
                  throw new Error('DataProvider.list() must return an array or an object with an "entries" array.');
                }
                this.trigger('load', {
                  items: entries,
                  total: this.total,
                  next: this.next
                });
                return entries;
              } catch (error) {
                console.error('Error loading data:', error);
                throw error;
              } finally {
                this.fetching = false;
              }
            }
            setItems(data, clear = false) {
              if (clear) this.#map.clear();
              if (!data) return;
              if (!Array.isArray(data)) {
                // console.trace(data);
                console.warn('Data must be an array');
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
              this.trigger('items.changed', {
                items: this.#map
              });
              this.trigger('change');
            }
            set(data) {
              super.set(data);
              this.trigger('change');
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
                this.trigger('items.changed', {
                  item: newItem
                });
                this.trigger('change');
              }
            }
            async delete(ids) {
              const toDelete = Array.isArray(ids) ? ids : [ids];
              const existingItems = toDelete.map(id => this.#map.get(id)).filter(Boolean);
              if (this.#provider && typeof this.#provider.deleteMany === 'function') {
                await this.#provider.deleteMany(toDelete);
              }
              return await Promise.all(existingItems.map(item => item.delete({
                skipProvider: true
              })));
            }
            onRegistryDeleted(registry) {
              if (!this.#map.has(registry.id)) return;
              this.#map.delete(registry.id);
              this.trigger('change');
              this.trigger('items.changed');
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
                    case 'equals':
                      return registryValue === value;
                    case 'not':
                      return registryValue !== value;
                    case 'in':
                      return Array.isArray(value) && value.includes(registryValue);
                    case 'notIn':
                      return !Array.isArray(value) || !value.includes(registryValue);
                    case 'contains':
                      return typeof registryValue === 'string' && registryValue.includes(value);
                    case 'startsWith':
                      return typeof registryValue === 'string' && registryValue.startsWith(value);
                    case 'endsWith':
                      return typeof registryValue === 'string' && registryValue.endsWith(value);
                    case 'gt':
                      return registryValue > value;
                    case 'gte':
                      return registryValue >= value;
                    case 'lt':
                      return registryValue < value;
                    case 'lte':
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
              if (filters.AND && !evaluateConditions(filters.AND, 'every')) return false;
              // Evaluate OR conditions
              if (filters.OR && !evaluateConditions(filters.OR, 'some')) return false;
              // Evaluate direct conditions (outside of AND/OR)
              return Object.entries(filters).filter(([key]) => key !== 'AND' && key !== 'OR').every(([property, criteria]) => evaluateCondition(property, criteria));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJmZXRjaGluZyIsImxpc3QiLCJkYXRhIiwiZW50cmllcyIsInNob3VsZFVwZGF0ZSIsInVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImNsZWFyIiwid2FybiIsImZvckVhY2giLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwicGFyZW50IiwiYWRkSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiaWRzIiwidG9EZWxldGUiLCJleGlzdGluZ0l0ZW1zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImRlbGV0ZU1hbnkiLCJQcm9taXNlIiwiYWxsIiwic2tpcFByb3ZpZGVyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImV2ZXJ5Iiwib3BlcmF0b3IiLCJ2YWx1ZSIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiZXZhbHVhdGVDb25kaXRpb25zIiwiY29uZGl0aW9ucyIsImxvZ2ljIiwiY29uZGl0aW9uIiwiQU5EIiwiT1IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiLCIvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUdPO1VBQVUsTUFBT0UsVUFHdEIsU0FBUUQsTUFBQSxDQUFBRSxhQUErQjtZQUNoQ0MsS0FBSyxHQUFXLENBQUM7WUFDakJDLElBQUksR0FBbUIsSUFBSTtZQUNuQzs7OztZQUlBLENBQUFDLGFBQWMsR0FBRyxNQUFNO1lBQ3ZCLENBQUFDLFlBQWE7WUFFYjs7O1lBR09DLFFBQVFBLENBQUE7Y0FDZCxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNsQjtZQUVBOzs7WUFHT0ssT0FBT0EsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2pCO1lBQ0EsQ0FBQUssTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUMsUUFBUztZQUVULElBQUlBLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsT0FBT0MsWUFBWSxHQUFHLElBQUk7WUFFMUIsQ0FBQUMsSUFBSztZQUNMLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLElBQUksQ0FBQyxDQUFBRCxJQUFLO1lBQ2xCO1lBRUEsQ0FBQUUsR0FBSSxHQUFtQixJQUFJQyxHQUFHLEVBQUU7WUFDaEMsSUFBSUQsR0FBR0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUFBLEdBQUk7WUFDakI7WUFDQSxJQUFJRSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxDQUFDLEdBQUcsSUFB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