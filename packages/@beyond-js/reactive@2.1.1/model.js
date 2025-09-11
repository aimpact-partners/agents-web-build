System.register(["@beyond-js/kernel@0.1.14/bundle", "zod@3.25.76", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    ModelProperties: void 0,
    IReactiveModelOptions: void 0,
    SetPropertiesResult: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_zod2) {
      dependency_1 = _zod2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
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
          "vspecifier": "@beyond-js/reactive@2.1.1/model"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['zod', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 125977383,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactiveModel = void 0;
          var _zod = require("zod");
          var _events = require("@beyond-js/events/events");
          /*bundle */
          class ReactiveModel extends _events.Events {
            debounceTimeout;
            processing = false;
            processed = false;
            loaded = false;
            #ready = false;
            _reactiveProps = {};
            static isReactive() {
              return true;
            }
            get isReactive() {
              return true;
            }
            //TODO: Validate how to handle the properties
            properties = [];
            // properties of the object
            #isDraft = false;
            get isDraft() {
              return this.#isDraft;
            }
            #propertyNames = new Set();
            get ready() {
              return this.#ready;
            }
            set ready(value) {
              this.#ready = value;
              this.trigger("ready");
              this.trigger("change");
            }
            schema;
            #initialValues = {};
            get initialValues() {
              return this.#initialValues;
            }
            /**
             * Defines if the model has been modified since it was loaded.
             */
            get unpublished() {
              const properties = this.getProperties() ?? {};
              return Object.keys(properties).some(prop => {
                if (prop === "id") return false;
                if (Array.isArray(properties[prop])) {
                  if (properties[prop].length !== this.#initialValues[prop]?.length) return true;
                  return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
                }
                if (typeof properties[prop] === "object") {
                  if (this[prop] instanceof ReactiveModel) {
                    return this[prop].unpublished;
                  }
                  return JSON.stringify(properties[prop]) !== JSON.stringify(this.#initialValues[prop]);
                }
                return properties[prop] !== this.#initialValues[prop];
              });
            }
            /**
             * @deprecated Use `unpublished` instead.
             */
            get isUnpublished() {
              return this.unpublished;
            }
            constructor({
              properties,
              ...props
            } = {
              properties: []
            }) {
              super();
              const defaultProps = ["fetching", "fetched", "processing", "processed", "loaded"];
              if (properties) {
                this.properties = properties;
                this.defineReactiveProps(properties, props);
                if (Object.keys(props).length > 0) {
                  this.setInitialValues(props);
                }
              }
              this.defineReactiveProps(defaultProps, this.initialValues);
            }
            setInitialValues(specs) {
              if (!specs) return this.#initialValues;
              const values = {};
              this.properties.forEach(property => {
                if (typeof property !== "string") {
                  property = property;
                  values[property.name] = specs[property.name];
                  return;
                }
                // Explicitly check if the value exists in the specs object
                if (specs.hasOwnProperty(property)) {
                  values[property] = specs[property];
                } else {
                  values[property] = undefined; // Ensure compatibility with the expected type
                }
              });
              this.#isDraft = Object.keys(specs).length === 0;
              this.#initialValues = values;
              return this.#initialValues;
            }
            getProperty(key) {
              return this._reactiveProps[key]; // Type-safe access.
            }
            property = this.getProperty;
            defineReactiveProp(propKey, initialValue, model = false) {
              this._reactiveProps[propKey] = initialValue;
              Object.defineProperty(this, propKey, {
                get: () => {
                  return this._reactiveProps[propKey];
                },
                set: newVal => {
                  if (model) {
                    const instance = this._reactiveProps[propKey];
                    this.trigger(`${propKey}.changed`, {
                      value: newVal,
                      previous: instance.getProperties()
                    });
                    this.trigger("change");
                    this._reactiveProps[propKey].set(newVal);
                    return;
                  }
                  if (newVal !== undefined && newVal === this._reactiveProps[propKey]) return;
                  const previous = this._reactiveProps[propKey];
                  this._reactiveProps[propKey] = newVal;
                  this.trigger(`${propKey}.changed`, {
                    value: newVal,
                    previous
                  });
                  this.trigger("change");
                },
                enumerable: true,
                configurable: true
              });
            }
            /**
             *  Defines the reactive properties of the object.
             * The properties are defined as an array of strings or objects.
             * The objects must have a `name` property with the name of the property and a `value` property with the class of the object.
             * The `value` property can be a class or an object.
             * If the `value` property is a class, the class must extend the `ReactiveModel` class.
             *
             * @param props
             * @param values
             */
            defineReactiveProps(props, values) {
              for (let propKey of props) {
                const descriptor = Object.getOwnPropertyDescriptor(this, propKey);
                if (propKey === undefined) continue;
                if (typeof propKey !== "object") {
                  this.#propertyNames.add(propKey);
                  let initialValue = values?.[propKey] ?? descriptor?.value;
                  this.defineReactiveProp(propKey, initialValue);
                  continue;
                }
                const data = propKey;
                const name = data.name;
                let initialValue = values?.[name] ?? descriptor?.value;
                const specs = data.properties ?? {};
                if (typeof data.value !== "function" && typeof data.value !== "object") {
                  console.warn(`Invalid value type for  ${name}`);
                  continue;
                }
                const parameters = data.value.isCollection ? {
                  parent: this
                } : {
                  parent: this,
                  ...initialValue,
                  ...specs
                };
                const instance = new data.value(parameters);
                if (data.value.isCollection) {
                  instance.setItems(initialValue);
                }
                this.#propertyNames.add(name);
                this.defineReactiveProp(name, instance, true);
                continue;
              }
            }
            reactiveProps(props) {
              this.defineReactiveProps(props);
            }
            setProperty(propKey, value) {
              this._reactiveProps[propKey] = value;
            }
            validateProperty(propKey, value) {
              if (!this.schema) {
                return {
                  valid: true,
                  error: null
                };
              }
              if (!this.schema.shape[propKey]) {
                return {
                  valid: false,
                  error: new _zod.ZodError([{
                    path: [propKey],
                    message: `Property ${propKey} is not defined in the schema`,
                    code: "custom"
                  }])
                };
              }
              const propSchema = this.schema.shape[propKey];
              const result = propSchema.safeParse(value);
              if (!result.success) {
                return {
                  valid: false,
                  error: result.error
                };
              }
              return {
                valid: true,
                error: null
              };
            }
            isSameObject = (a, b) => JSON.stringify(a) === JSON.stringify(b);
            /**
             * Validates the provided properties against the model's Zod schema.
             * Only validates properties that are defined in the model's properties array.
             *
             * @param {Partial<T>} properties - The properties to validate
             * @returns {{ valid: boolean; errors: PropertyValidationErrors<T> }} An object containing:
             *   - `valid`: boolean indicating if all properties are valid
             *   - `errors`: object containing validation errors for each invalid property
             */
            validate(properties) {
              const keys = Object.keys(properties);
              const errors = {};
              const onValidate = prop => {
                if (!this.properties || !this.properties.includes(prop)) {
                  console.trace(`is not a property`, prop);
                  return;
                }
                const validated = this.validateProperty(prop, properties[prop]);
                if (!validated.valid) {
                  errors[prop] = validated.error;
                }
              };
              keys.forEach(onValidate);
              return {
                valid: !!Object.keys(errors).length,
                errors
              };
            }
            set(properties) {
              if (!properties) {
                console.warn("you are trying to set an empty object", this.constructor.name, properties);
                return {
                  updated: false
                };
              }
              const keys = Object.keys(properties);
              let updated = false;
              const errors = {};
              const onSet = prop => {
                if (!this.#propertyNames.has(prop)) {
                  // console.trace(`is not a property`, prop, this.constructor.name);
                  return;
                }
                const validated = this.validateProperty(prop, properties[prop]);
                if (!validated.valid) {
                  errors[prop] = validated;
                  return;
                }
                //@ts-ignore
                if (this.getProperty(prop)?.isReactive) {
                  const instance = this.getProperty(prop);
                  instance.set(properties[prop]);
                  if (instance.unpublished) updated = true;
                  return;
                }
                const isObject = typeof properties[prop] === "object";
                const isSameObject = isObject && this.isSameObject([prop], this[prop]);
                if (this[prop] === properties[prop] || isSameObject) return;
                this[prop] = properties[prop];
                updated = true;
              };
              keys.forEach(onSet);
              if (updated) {
                this.trigger("change");
                this.trigger("set.executed");
              }
              return {
                updated,
                errors
              };
            }
            /**
             * Gets all properties of the model, including nested reactive objects and collections.
             * For collections, it returns the item properties instead of the collection instance.
             *
             * @returns {Partial<T>} An object containing all properties of the model
             */
            getProperties() {
              const props = {};
              const loop = property => {
                let name = property;
                if (typeof property === "object" && property.value.isReactive) {
                  name = property.name;
                  /**
                   * If the property is a collection, we return the items.
                   */
                  props[String(name)] = property.value.isCollection ? this[name].getItemProperties() : this[name]?.getProperties();
                  return;
                }
                props[String(name)] = this[name];
              };
              this.properties.forEach(loop);
              return props;
            }
            /**
             * Reverts all properties of the model back to their initial values.
             * This is useful for discarding changes and restoring the model to its original state.
             */
            revert() {
              this.set(this.initialValues);
            }
            /**
             * Saves the current state of the model as the new initial state.
             * This marks the model as no longer being a draft and updates the initial values
             * to match the current state. Useful after successfully persisting changes.
             */
            saveChanges() {
              this.#initialValues = this.getProperties();
              this.#isDraft = false;
            }
            /**
             * Triggers an event after a specified delay.
             * @deprecated use trigger method instead.
             * @param {string} event - The name of the event to trigger.
             * @param {Record<string, any>} params - Additional parameters for the event, including an optional `delay` property.
             */
            triggerEvent = (event = "change", params = {}) => {
              this.trigger(event);
            };
          }
          exports.ReactiveModel = ReactiveModel;
        }
      });

      /*****************************
      INTERNAL MODULE: ./types/index
      *****************************/

      ims.set('./types/index', {
        hash: 2677658917,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ReactiveModel",
        "name": "ReactiveModel"
      }, {
        "im": "./types/index",
        "from": "ModelProperties",
        "name": "ModelProperties"
      }, {
        "im": "./types/index",
        "from": "IReactiveModelOptions",
        "name": "IReactiveModelOptions"
      }, {
        "im": "./types/index",
        "from": "SetPropertiesResult",
        "name": "SetPropertiesResult"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ReactiveModel') && _export("ReactiveModel", ReactiveModel = require ? require('./index').ReactiveModel : value);
        (require || prop === 'ModelProperties') && _export("ModelProperties", ModelProperties = require ? require('./types/index').ModelProperties : value);
        (require || prop === 'IReactiveModelOptions') && _export("IReactiveModelOptions", IReactiveModelOptions = require ? require('./types/index').IReactiveModelOptions : value);
        (require || prop === 'SetPropertiesResult') && _export("SetPropertiesResult", SetPropertiesResult = require ? require('./types/index').SetPropertiesResult : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyYW1ldGVycyIsImlzQ29sbGVjdGlvbiIsInBhcmVudCIsInNldEl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJnZXRJdGVtUHJvcGVydGllcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwidHJpZ2dlckV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLElBQUEsR0FBQUMsT0FBQTtVQWNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVcsTUFBT0UsYUFBaUIsU0FBUUQsT0FBQSxDQUFBRSxNQUFNO1lBQ3REQyxlQUFlO1lBQ2ZDLFVBQVUsR0FBWSxLQUFLO1lBQzNCQyxTQUFTLEdBQVksS0FBSztZQUUxQkMsTUFBTSxHQUFZLEtBQUs7WUFDdkIsQ0FBQUMsS0FBTSxHQUFZLEtBQUs7WUFFZkMsY0FBYyxHQUF5QixFQUEwQjtZQUN6RSxPQUFPQyxVQUFVQSxDQUFBO2NBQ2YsT0FBTyxJQUFJO1lBQ2I7WUFDQSxJQUFJQSxVQUFVQSxDQUFBO2NBQ1osT0FBTyxJQUFJO1lBQ2I7WUFDQTtZQUNVQyxVQUFVLEdBQXdCLEVBQUU7WUFDOUM7WUFDQSxDQUFBQyxPQUFRLEdBQVksS0FBSztZQUN6QixJQUFJQSxPQUFPQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUN0QjtZQUNBLENBQUFDLGFBQWMsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDMUIsSUFBSU4sS0FBS0EsQ0FBQTtjQUNQLE9BQU8sSUFBSSxDQUFDLENB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