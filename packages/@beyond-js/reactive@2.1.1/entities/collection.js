System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbSIsInJlcXVpcmUiLCJfbW9kZWwiLCJDb2xsZWN0aW9uIiwiUmVhY3RpdmVNb2RlbCIsInRvdGFsIiwibmV4dCIsIm5leHRQYXJhbU5hbWUiLCJkZWZhdWx0TGltaXQiLCJnZXRUb3RhbCIsImdldE5leHQiLCJlbnRpdHkiLCJwcm92aWRlciIsImlzQ29sbGVjdGlvbiIsIml0ZW0iLCJJdGVtIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJmaWx0ZXJzIiwicmVnaXN0cnkiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiUmVnaXN0cnlGYWN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJvbiIsIm9uTmV3UmVnaXN0cnkiLCJiaW5kIiwib25SZWdpc3RyeURlbGV0ZWQiLCJsb2FkIiwiYXJncyIsImxpbWl0Iiwid2hlcmUiLCJmZXRjaGluZyIsImxpc3QiLCJkYXRhIiwiZW50cmllcyIsInNob3VsZFVwZGF0ZSIsInVwZGF0ZSIsIkFycmF5IiwiaXNBcnJheSIsInNldEl0ZW1zIiwidHJpZ2dlciIsImVycm9yIiwiY29uc29sZSIsImNsZWFyIiwid2FybiIsImZvckVhY2giLCJoYXMiLCJpZCIsImdldCIsInNldCIsImluc3RhbmNlIiwicGFyZW50IiwiYWRkSXRlbXMiLCJnZXRQcm9wZXJ0aWVzIiwiZ2V0SXRlbVByb3BlcnRpZXMiLCJwdXNoIiwibWF0Y2hlc0ZpbHRlcnMiLCJuZXdJdGVtIiwiZGVsZXRlIiwiaWRzIiwidG9EZWxldGUiLCJleGlzdGluZ0l0ZW1zIiwiZmlsdGVyIiwiQm9vbGVhbiIsImRlbGV0ZU1hbnkiLCJQcm9taXNlIiwiYWxsIiwic2tpcFByb3ZpZGVyIiwiZXZhbHVhdGVDb25kaXRpb24iLCJwcm9wZXJ0eSIsImNyaXRlcmlhIiwicmVnaXN0cnlWYWx1ZSIsIk9iamVjdCIsImV2ZXJ5Iiwib3BlcmF0b3IiLCJ2YWx1ZSIsImluY2x1ZGVzIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwiZXZhbHVhdGVDb25kaXRpb25zIiwiY29uZGl0aW9ucyIsImxvZ2ljIiwiY29uZGl0aW9uIiwiQU5EIiwiT1IiLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvL2luZGV4LnRzLyIsIi8vdHlwZXMudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFHTztVQUFVLE1BQU9FLFVBR3RCLFNBQVFELE1BQUEsQ0FBQUUsYUFBK0I7WUFDaENDLEtBQUssR0FBVyxDQUFDO1lBQ2pCQyxJQUFJLEdBQW1CLElBQUk7WUFDbkM7Ozs7WUFJQSxDQUFBQyxhQUFjLEdBQUcsTUFBTTtZQUN2QixDQUFBQyxZQUFhO1lBRWI7OztZQUdPQyxRQUFRQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbEI7WUFFQTs7O1lBR09LLE9BQU9BLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNqQjtZQUNBLENBQUFLLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUFDLFFBQVM7WUFFVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLE9BQU9DLFlBQVksR0FBRyxJQUFJO1lBRTFCLENBQUFDLElBQUs7WUFDTCxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUQsSUFBSztZQUNsQjtZQUVBLENBQUFFLEdBQUksR0FBbUIsSUFBSUMsR0FBRyxFQUFFO1lBQ2hDLElBQUlELEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBQ0EsSUFBSUUsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBRixHQUFJLENBQUNHLE1BQU0sRUFBRSxDQUFDO1lBQy9CO1lBQ0EsQ0FBQUMsT0FBUTtZQUNSLENBQUFDLFFBQVM7WUFDVEMsWUFBWTtjQUNYWCxNQUFNO2NBQ05DLFFBQVE7Y0FDUkUsSUFBSTtjQUNKTixZQUFZLEdBQUcsRUFBRTtjQUNqQkQsYUFBYSxHQUFHO1lBQU0sQ0FDaUM7Y0FDdkQsS0FBSyxFQUFFO2NBRVAsSUFBSSxDQUFDLENBQUFJLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJQyxRQUFRLElBQUksT0FBT0EsUUFBUSxLQUFLLFVBQVUsRUFBRTtnQkFDL0MsTUFBTSxJQUFJVyxLQUFLLENBQUMsc0NBQXNDLENBQUM7O2NBRXhELElBQUlYLFFBQVEsRUFBRTtnQkFDYixJQUFJLENBQUMsQ0FBQUEsUUFBUyxHQUFHLElBQUlBLFFBQVEsQ0FBQyxJQUFJLENBQUM7O2NBRXBDLElBQUksQ0FBQyxDQUFBUyxRQUFTLEdBQUdyQixLQUFBLENBQUF3QixlQUFlLENBQUNDLFdBQVcsQ0FBSWQsTUFBTSxDQUFDO2NBRXZELElBQUksQ0FBQyxDQUFBVSxRQUFTLENBQUNLLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2NBQ3BFLElBQUksQ0FBQyxDQUFBUCxRQUFTLENBQUNLLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUNHLGlCQUFpQixDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Y0FDdEUsSUFBSSxDQUFDLENBQUFkLElBQUssR0FBR0EsSUFBSTtjQUVqQixJQUFJLENBQUMsQ0FBQU4sWUFBYSxHQUFHQSxZQUFZO2NBQ2pDLElBQUlELGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQUEsYUFBYyxHQUFHQSxhQUFhO1lBQ3ZEO1lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFzQ0E7Ozs7Ozs7OztZQVNBLE1BQU11QixJQUFJQSxDQUFDQyxJQUFBLEdBQXNCLEVBQUU7Y0FDbEM7Y0FDQSxJQUFJLE9BQU9BLElBQUksQ0FBQ0MsS0FBSyxLQUFLLFFBQVEsRUFBRUQsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUF4QixZQUFhO2NBQ25FLElBQUksSUFBSSxDQUFDRixJQUFJLEVBQUV5QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF4QixhQUFjLENBQUMsR0FBRyxJQUFJLENBQUNELElBQUk7Y0FDcEQsSUFBSSxDQUFDLENBQUFjLE9BQVEsR0FBR1csSUFBSSxDQUFDRSxLQUFLLElBQUksRUFBRTtjQUNoQyxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2NBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXRCLFFBQVMsSUFBSSxPQUFRLElBQUksQ0FBQyxDQUFBQSxRQUFpQyxDQUFDdUIsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDMUYsTUFBTSxJQUFJWixLQUFLLENBQUMsc0VBQXNFLENBQUM7O2NBR3hGLElBQUk7Z0JBQ0gsTUFBTWEsSUFBSSxHQUFHLE1BQU8sSUFBSSxDQUFDLENBQUF4QixRQUFpQyxDQUFDdUIsSUFBSSxDQUFDSixJQUFJLENBQUM7Z0JBQ3JFLElBQUlNLE9BQVk7Z0JBQ2hCLE1BQU1DLFlBQVksR0FBRyxDQUFDLENBQUNQLElBQUksQ0FBQ1EsTUFBTTtnQkFFbEMsSUFBSUMsS0FBSyxDQUFDQyxPQUFPLENBQUNMLElBQUksQ0FBQyxFQUFFO2tCQUN4QkMsT0FBTyxHQUFHRCxJQUFJO2tCQUNkLElBQUksQ0FBQy9CLEtBQUssR0FBRyxDQUFDO2tCQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUk7a0JBQ2hCLElBQUksQ0FBQ29DLFFBQVEsQ0FBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDNUIsTUFBTSxJQUFJRCxJQUFJLElBQUlJLEtBQUssQ0FBQ0MsT0FBTyxDQUFDTCxJQUFJLENBQUNsQixLQUFLLENBQUMsRUFBRTtrQkFDN0NtQixPQUFPLEdBQUdELElBQUksQ0FBQ2xCLEtBQUs7a0JBQ3BCLElBQUksT0FBT2tCLElBQUksQ0FBQy9CLEtBQUssS0FBSyxRQUFRLEVBQUUsSUFBSSxDQUFDQSxLQUFLLEdBQUcrQixJQUFJLENBQUMvQixLQUFLO2tCQUMzRCxJQUFJLE1BQU0sSUFBSStCLElBQUksRUFBRSxJQUFJLENBQUM5QixJQUFJLEdBQUc4QixJQUFJLENBQUM5QixJQUFJO2tCQUN6QyxJQUFJLENBQUNvQyxRQUFRLENBQUNMLE9BQU8sRUFBRSxDQUFDQyxZQUFZLENBQUM7aUJBQ3JDLE1BQU07a0JBQ04sTUFBTSxJQUFJZixLQUFLLENBQUMsZ0ZBQWdGLENBQUM7O2dCQUdsRyxJQUFJLENBQUNvQixPQUFPLENBQUMsTUFBTSxFQUFFO2tCQUNwQnpCLEtBQUssRUFBRW1CLE9BQU87a0JBQ2RoQyxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO2tCQUNqQkMsSUFBSSxFQUFFLElBQUksQ0FBQ0E7aUJBQ1gsQ0FBQztnQkFDRixPQUFPK0IsT0FBTztlQUNkLENBQUMsT0FBT08sS0FBSyxFQUFFO2dCQUNmQyxPQUFPLENBQUNELEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsS0FBSyxDQUFDO2dCQUMzQyxNQUFNQSxLQUFLO2VBQ1gsU0FBUztnQkFDVCxJQUFJLENBQUNWLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVVUSxRQUFRQSxDQUFDTixJQUFJLEVBQUVVLEtBQUssR0FBRyxLQUFLO2NBQ3JDLElBQUlBLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTlCLEdBQUksQ0FBQzhCLEtBQUssRUFBRTtjQUM1QixJQUFJLENBQUNWLElBQUksRUFBRTtjQUNYLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLENBQUNMLElBQUksQ0FBQyxFQUFFO2dCQUN6QjtnQkFDQVMsT0FBTyxDQUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUM7Z0JBQ3JDOztjQUVEWCxJQUFJLENBQUNZLE9BQU8sQ0FBQ2xDLElBQUksSUFBRztnQkFDbkIsSUFBSSxJQUFJLENBQUNFLEdBQUcsQ0FBQ2lDLEdBQUcsQ0FBQ25DLElBQUksQ0FBQ29DLEVBQUUsQ0FBQyxFQUFFO2tCQUN6QixJQUFJLENBQUNsQyxHQUFHLENBQUNtQyxHQUFHLENBQUNyQyxJQUFJLENBQUNvQyxFQUFZLENBQXNCLENBQUNFLEdBQUcsQ0FBQ3RDLElBQUksQ0FBQztrQkFDL0Q7O2dCQUVELE1BQU11QyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQXZDLElBQUssQ0FBQztrQkFBRXdDLE1BQU0sRUFBRSxJQUFJO2tCQUFFLEdBQUd4QztnQkFBSSxDQUFFLENBQUM7Z0JBQzFELElBQUksQ0FBQyxDQUFBRSxHQUFJLENBQUNvQyxHQUFHLENBQUN0QyxJQUFJLENBQUNvQyxFQUFFLEVBQUVHLFFBQVEsQ0FBQztjQUNqQyxDQUFDLENBQUM7WUFDSDtZQUVBRSxRQUFRQSxDQUFDbkIsSUFBUztjQUNqQixJQUFJLENBQUNNLFFBQVEsQ0FBQ04sSUFBSSxDQUFDO2NBQ25CLElBQUksQ0FBQ08sT0FBTyxDQUFDLGVBQWUsRUFBRTtnQkFBRXpCLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQUY7Y0FBSSxDQUFFLENBQUM7Y0FDbkQsSUFBSSxDQUFDMkIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBUyxHQUFHQSxDQUFDaEIsSUFBSTtjQUNQLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQztjQUVmLElBQUksQ0FBQ08sT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUN0QixPQUFPUCxJQUFJO1lBQ1o7WUFFQW9CLGFBQWFBLENBQUE7Y0FDWjtjQUNBLE9BQU87Z0JBQUV0QyxLQUFLLEVBQUUsSUFBSSxDQUFDQTtjQUFLLENBQUU7WUFDN0I7WUFFQXVDLGlCQUFpQkEsQ0FBQTtjQUNoQixNQUFNdkMsS0FBSyxHQUFHLEVBQUU7Y0FDaEIsS0FBSyxJQUFJSixJQUFJLElBQUksSUFBSSxDQUFDSSxLQUFLLEVBQUU7Z0JBQzVCQSxLQUFLLENBQUN3QyxJQUFJLENBQUU1QyxJQUE2QixDQUFDMEMsYUFBYSxFQUFFLENBQUM7O2NBRTNELE9BQU90QyxLQUFLO1lBQ2I7WUFDQTs7Ozs7O1lBTUFTLGFBQWFBLENBQUNOLFFBQTZCO2NBQzFDO2NBQ0EsSUFBSSxJQUFJLENBQUNzQyxjQUFjLENBQUN0QyxRQUFRLENBQUMsRUFBRTtnQkFDbEM7Z0JBQ0EsTUFBTXVDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFBOUMsSUFBSyxDQUFDTyxRQUFRLENBQUM7Z0JBRXhDO2dCQUNBLElBQUksQ0FBQyxDQUFBTCxHQUFJLENBQUNvQyxHQUFHLENBQUMvQixRQUFRLENBQUM2QixFQUFFLEVBQUVVLE9BQU8sQ0FBQztnQkFFbkM7Z0JBQ0EsSUFBSSxDQUFDakIsT0FBTyxDQUFDLGVBQWUsRUFBRTtrQkFBRTdCLElBQUksRUFBRThDO2dCQUFPLENBQUUsQ0FBQztnQkFDaEQsSUFBSSxDQUFDakIsT0FBTyxDQUFDLFFBQVEsQ0FBQzs7WUFFeEI7WUFFQSxNQUFNa0IsTUFBTUEsQ0FBQ0MsR0FBc0I7Y0FDbEMsTUFBTUMsUUFBUSxHQUFHdkIsS0FBSyxDQUFDQyxPQUFPLENBQUNxQixHQUFHLENBQUMsR0FBR0EsR0FBRyxHQUFHLENBQUNBLEdBQUcsQ0FBQztjQUNqRCxNQUFNRSxhQUFhLEdBQUdELFFBQVEsQ0FBQy9DLEdBQUcsQ0FBQ2tDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQ21DLEdBQUcsQ0FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQ2UsTUFBTSxDQUFDQyxPQUFPLENBQUM7Y0FFM0UsSUFBSSxJQUFJLENBQUMsQ0FBQXRELFFBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUN1RCxVQUFVLEtBQUssVUFBVSxFQUFFO2dCQUN0RSxNQUFNLElBQUksQ0FBQyxDQUFBdkQsUUFBUyxDQUFDdUQsVUFBVSxDQUFDSixRQUFRLENBQUM7O2NBRzFDLE9BQU8sTUFBTUssT0FBTyxDQUFDQyxHQUFHLENBQUNMLGFBQWEsQ0FBQ2hELEdBQUcsQ0FBQ0YsSUFBSSxJQUFJQSxJQUFJLENBQUMrQyxNQUFNLENBQUM7Z0JBQUVTLFlBQVksRUFBRTtjQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekY7WUFFQXpDLGlCQUFpQkEsQ0FBQ1IsUUFBNkI7Y0FDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBTCxHQUFJLENBQUNpQyxHQUFHLENBQUM1QixRQUFRLENBQUM2QixFQUFFLENBQUMsRUFBRTtjQUNqQyxJQUFJLENBQUMsQ0FBQWxDLEdBQUksQ0FBQzZDLE1BQU0sQ0FBQ3hDLFFBQVEsQ0FBQzZCLEVBQUUsQ0FBQztjQUU3QixJQUFJLENBQUNQLE9BQU8sQ0FBQyxRQUFRLENBQUM7Y0FDdEIsSUFBSSxDQUFDQSxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQzlCO1lBQ0E7Ozs7Ozs7WUFPUWdCLGNBQWNBLENBQUN0QyxRQUE2QjtjQUNuRCxNQUFNRCxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUFBLE9BQVEsRUFBRWEsS0FBSztjQUNwQyxJQUFJLENBQUNiLE9BQU8sRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO2NBRTNCO2NBQ0EsTUFBTW1ELGlCQUFpQixHQUFHQSxDQUFDQyxRQUFnQixFQUFFQyxRQUE2QixLQUFhO2dCQUN0RixNQUFNQyxhQUFhLEdBQUdyRCxRQUFRLENBQUNtRCxRQUFRLENBQUM7Z0JBQ3hDLE9BQU9HLE1BQU0sQ0FBQ3RDLE9BQU8sQ0FBQ29DLFFBQVEsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUVDLEtBQUssQ0FBQyxLQUFJO2tCQUMzRCxRQUFRRCxRQUFRO29CQUNmLEtBQUssUUFBUTtzQkFDWixPQUFPSCxhQUFhLEtBQUtJLEtBQUs7b0JBQy9CLEtBQUssS0FBSztzQkFDVCxPQUFPSixhQUFhLEtBQUtJLEtBQUs7b0JBQy9CLEtBQUssSUFBSTtzQkFDUixPQUFPdEMsS0FBSyxDQUFDQyxPQUFPLENBQUNxQyxLQUFLLENBQUMsSUFBSUEsS0FBSyxDQUFDQyxRQUFRLENBQUNMLGFBQWEsQ0FBQztvQkFDN0QsS0FBSyxPQUFPO3NCQUNYLE9BQU8sQ0FBQ2xDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDcUMsS0FBSyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFRLENBQUNMLGFBQWEsQ0FBQztvQkFDL0QsS0FBSyxVQUFVO3NCQUNkLE9BQU8sT0FBT0EsYUFBYSxLQUFLLFFBQVEsSUFBSUEsYUFBYSxDQUFDSyxRQUFRLENBQUNELEtBQUssQ0FBQztvQkFDMUUsS0FBSyxZQUFZO3NCQUNoQixPQUFPLE9BQU9KLGFBQWEsS0FBSyxRQUFRLElBQUlBLGFBQWEsQ0FBQ00sVUFBVSxDQUFDRixLQUFLLENBQUM7b0JBQzVFLEtBQUssVUFBVTtzQkFDZCxPQUFPLE9BQU9KLGFBQWEsS0FBSyxRQUFRLElBQUlBLGFBQWEsQ0FBQ08sUUFBUSxDQUFDSCxLQUFLLENBQUM7b0JBQzFFLEtBQUssSUFBSTtzQkFDUixPQUFPSixhQUFhLEdBQUdJLEtBQUs7b0JBQzdCLEtBQUssS0FBSztzQkFDVCxPQUFPSixhQUFhLElBQUlJLEtBQUs7b0JBQzlCLEtBQUssSUFBSTtzQkFDUixPQUFPSixhQUFhLEdBQUdJLEtBQUs7b0JBQzdCLEtBQUssS0FBSztzQkFDVCxPQUFPSixhQUFhLElBQUlJLEtBQUs7b0JBQzlCO3NCQUNDakMsT0FBTyxDQUFDRSxJQUFJLENBQUMsNEJBQTRCOEIsUUFBUSxFQUFFLENBQUM7c0JBQ3BELE9BQU8sS0FBSzs7Z0JBRWYsQ0FBQyxDQUFDO2NBQ0gsQ0FBQztjQUVEO2NBQ0EsTUFBTUssa0JBQWtCLEdBQUdBLENBQUNDLFVBQWlDLEVBQUVDLEtBQXVCLEtBQ3JGRCxVQUFVLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxTQUFTLElBQzFCVixNQUFNLENBQUN0QyxPQUFPLENBQUNnRCxTQUFTLENBQUMsQ0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQ0osUUFBUSxFQUFFQyxRQUFRLENBQUMsS0FBS0YsaUJBQWlCLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxDQUFDLENBQUMsQ0FDaEc7Y0FFRjtjQUNBLElBQUlyRCxPQUFPLENBQUNrRSxHQUFHLElBQUksQ0FBQ0osa0JBQWtCLENBQUM5RCxPQUFPLENBQUNrRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsT0FBTyxLQUFLO2NBRTFFO2NBQ0EsSUFBSWxFLE9BQU8sQ0FBQ21FLEVBQUUsSUFBSSxDQUFDTCxrQkFBa0IsQ0FBQzlELE9BQU8sQ0FBQ21FLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxPQUFPLEtBQUs7Y0FFdkU7Y0FDQSxPQUFPWixNQUFNLENBQUN0QyxPQUFPLENBQUNqQixPQUFPLENBQUMsQ0FDNUI2QyxNQUFNLENBQUMsQ0FBQyxDQUFDdUIsR0FBRyxDQUFDLEtBQUtBLEdBQUcsS0FBSyxLQUFLLElBQUlBLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FDaERaLEtBQUssQ0FBQyxDQUFDLENBQUNKLFFBQVEsRUFBRUMsUUFBUSxDQUFDLEtBQUtGLGlCQUFpQixDQUFDQyxRQUFRLEVBQUVDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pFOzs7Ozs7Ozs7Ozs7O1VDM1REOztVQUVBRSxNQUFBLENBQUFjLGNBQUEsQ0FBQUMsT0FBQTtZQUNBWixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=