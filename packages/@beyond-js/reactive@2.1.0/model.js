System.register(["@beyond-js/kernel@0.1.12/bundle", "zod@3.24.2", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ReactiveModel, ModelProperties, IReactiveModelOptions, SetPropertiesResult, __beyond_pkg, hmr;
  _export({
    ReactiveModel: void 0,
    ModelProperties: void 0,
    IReactiveModelOptions: void 0,
    SetPropertiesResult: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_zod2) {
      dependency_1 = _zod2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
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
          "vspecifier": "@beyond-js/reactive@2.1.0/model"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfem9kIiwicmVxdWlyZSIsIl9ldmVudHMiLCJSZWFjdGl2ZU1vZGVsIiwiRXZlbnRzIiwiZGVib3VuY2VUaW1lb3V0IiwicHJvY2Vzc2luZyIsInByb2Nlc3NlZCIsImxvYWRlZCIsInJlYWR5IiwiX3JlYWN0aXZlUHJvcHMiLCJpc1JlYWN0aXZlIiwicHJvcGVydGllcyIsImlzRHJhZnQiLCJwcm9wZXJ0eU5hbWVzIiwiU2V0IiwidmFsdWUiLCJ0cmlnZ2VyIiwic2NoZW1hIiwiaW5pdGlhbFZhbHVlcyIsInVucHVibGlzaGVkIiwiZ2V0UHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpc1VucHVibGlzaGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImRlZmluZVJlYWN0aXZlUHJvcHMiLCJzZXRJbml0aWFsVmFsdWVzIiwic3BlY3MiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJ1bmRlZmluZWQiLCJnZXRQcm9wZXJ0eSIsImtleSIsImRlZmluZVJlYWN0aXZlUHJvcCIsInByb3BLZXkiLCJpbml0aWFsVmFsdWUiLCJtb2RlbCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwiaW5zdGFuY2UiLCJwcmV2aW91cyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJkZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiYWRkIiwiZGF0YSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyYW1ldGVycyIsImlzQ29sbGVjdGlvbiIsInBhcmVudCIsInNldEl0ZW1zIiwicmVhY3RpdmVQcm9wcyIsInNldFByb3BlcnR5IiwidmFsaWRhdGVQcm9wZXJ0eSIsInZhbGlkIiwiZXJyb3IiLCJzaGFwZSIsIlpvZEVycm9yIiwicGF0aCIsIm1lc3NhZ2UiLCJjb2RlIiwicHJvcFNjaGVtYSIsInJlc3VsdCIsInNhZmVQYXJzZSIsInN1Y2Nlc3MiLCJpc1NhbWVPYmplY3QiLCJhIiwiYiIsInZhbGlkYXRlIiwiZXJyb3JzIiwib25WYWxpZGF0ZSIsImluY2x1ZGVzIiwidHJhY2UiLCJ2YWxpZGF0ZWQiLCJ1cGRhdGVkIiwib25TZXQiLCJoYXMiLCJpc09iamVjdCIsImxvb3AiLCJTdHJpbmciLCJnZXRJdGVtUHJvcGVydGllcyIsInJldmVydCIsInNhdmVDaGFuZ2VzIiwidHJpZ2dlckV2ZW50IiwiZXZlbnQiLCJwYXJhbXMiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsSUFBQSxHQUFBQyxPQUFBO1VBY0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxNQUFPRSxhQUFpQixTQUFRRCxPQUFBLENBQUFFLE1BQU07WUFDdERDLGVBQWU7WUFDZkMsVUFBVSxHQUFZLEtBQUs7WUFDM0JDLFNBQVMsR0FBWSxLQUFLO1lBRTFCQyxNQUFNLEdBQVksS0FBSztZQUN2QixDQUFBQyxLQUFNLEdBQVksS0FBSztZQUVmQyxjQUFjLEdBQXlCLEVBQTBCO1lBQ3pFLE9BQU9DLFVBQVVBLENBQUE7Y0FDZixPQUFPLElBQUk7WUFDYjtZQUNBLElBQUlBLFVBQVVBLENBQUE7Y0FDWixPQUFPLElBQUk7WUFDYjtZQUNBO1lBQ1VDLFVBQVUsR0FBd0IsRUFBRTtZQUM5QztZQUNBLENBQUFDLE9BQVEsR0FBWSxLQUFLO1lBQ3pCLElBQUlBLE9BQU9BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3RCO1lBQ0EsQ0FBQUMsYUFBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUMxQixJQUFJTixLQUFLQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNwQjtZQUNBLElBQUlBLEtBQUtBLENBQUNPLEtBQWM7Y0FDdEIsSUFBSSxDQUFDLENBQUFQLEtBQU0sR0FBR08sS0FBSztjQUNuQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7Y0FDckIsSUFBSSxDQUFDQSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3hCO1lBRVVDLE1BQU07WUFDaEIsQ0FBQUMsYUFBYyxHQUFlLEVBQWdCO1lBRTdDLElBQUlBLGFBQWFBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxhQUFjO1lBQzVCO1lBRUE7OztZQUdBLElBQUlDLFdBQVdBLENBQUE7Y0FDYixNQUFNUixVQUFVLEdBQUcsSUFBSSxDQUFDUyxhQUFhLEVBQUUsSUFBSSxFQUFFO2NBQzdDLE9BQU9DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWCxVQUFVLENBQUMsQ0FBQ1ksSUFBSSxDQUFFQyxJQUFJLElBQUk7Z0JBQzNDLElBQUlBLElBQUksS0FBSyxJQUFJLEVBQUUsT0FBTyxLQUFLO2dCQUMvQixJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ2YsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQyxFQUFFO2tCQUNuQyxJQUFJYixVQUFVLENBQUNhLElBQUksQ0FBQyxDQUFDRyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUFULGFBQWMsQ0FBQ00sSUFBSSxDQUFDLEVBQUVHLE1BQU0sRUFDL0QsT0FBTyxJQUFJO2tCQUNiLE9BQ0VDLElBQUksQ0FBQ0MsU0FBUyxDQUFDbEIsVUFBVSxDQUFDYSxJQUFJLENBQUMsQ0FBQyxLQUNoQ0ksSUFBSSxDQUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUFYLGFBQWMsQ0FBQ00sSUFBSSxDQUFDLENBQUM7O2dCQUc3QyxJQUFJLE9BQU9iLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO2tCQUN4QyxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDLFlBQVl0QixhQUFhLEVBQUU7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDc0IsSUFBSSxDQUFDLENBQUNMLFdBQVc7O2tCQUcvQixPQUNFUyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2xCLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLENBQUMsS0FDaENJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBWCxhQUFjLENBQUNNLElBQUksQ0FBQyxDQUFDOztnQkFJN0MsT0FBT2IsVUFBVSxDQUFDYSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQU4sYUFBYyxDQUFDTSxJQUFJLENBQUM7Y0FDdkQsQ0FBQyxDQUFDO1lBQ0o7WUFDQTs7O1lBR0EsSUFBSU0sYUFBYUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDWCxXQUFXO1lBQ3pCO1lBRUFZLFlBQ0U7Y0FBRXBCLFVBQVU7Y0FBRSxHQUFHcUI7WUFBSyxJQUErQjtjQUNuRHJCLFVBQVUsRUFBRTthQUN3QjtjQUV0QyxLQUFLLEVBQUU7Y0FDUCxNQUFNc0IsWUFBWSxHQUFtQixDQUNuQyxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsUUFBUSxDQUNUO2NBRUQsSUFBSXRCLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUNBLFVBQVUsR0FBR0EsVUFBaUM7Z0JBQ25ELElBQUksQ0FBQ3VCLG1CQUFtQixDQUFDdkIsVUFBVSxFQUFFcUIsS0FBSyxDQUFDO2dCQUMzQyxJQUFJWCxNQUFNLENBQUNDLElBQUksQ0FBQ1UsS0FBSyxDQUFDLENBQUNMLE1BQU0sR0FBRyxDQUFDLEVBQUU7a0JBQ2pDLElBQUksQ0FBQ1EsZ0JBQWdCLENBQUNILEtBQW1CLENBQUM7OztjQUk5QyxJQUFJLENBQUNFLG1CQUFtQixDQUN0QkQsWUFBcUMsRUFDckMsSUFBSSxDQUFDZixhQUFhLENBQ25CO1lBQ0g7WUFFVWlCLGdCQUFnQkEsQ0FBQ0MsS0FBa0I7Y0FDM0MsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQWxCLGFBQWM7Y0FFdEMsTUFBTW1CLE1BQU0sR0FBRyxFQUF3QjtjQUV2QyxJQUFJLENBQUMxQixVQUFVLENBQUMyQixPQUFPLENBQUVDLFFBQVEsSUFBSTtnQkFDbkMsSUFBSSxPQUFPQSxRQUFRLEtBQUssUUFBUSxFQUFFO2tCQUNoQ0EsUUFBUSxHQUFHQSxRQUFxQztrQkFFaERGLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQyxJQUFJLENBQUMsR0FBR0osS0FBSyxDQUFDRyxRQUFRLENBQUNDLElBQUksQ0FBQztrQkFDNUM7O2dCQUVGO2dCQUNBLElBQUlKLEtBQUssQ0FBQ0ssY0FBYyxDQUFDRixRQUFRLENBQUMsRUFBRTtrQkFDbENGLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDLEdBQUdILEtBQUssQ0FBQ0csUUFBUSxDQUFlO2lCQUNqRCxNQUFNO2tCQUNMRixNQUFNLENBQUNFLFFBQVEsQ0FBQyxHQUFHRyxTQUFrQyxDQUFDLENBQUM7O2NBRTNELENBQUMsQ0FBQztjQUNGLElBQUksQ0FBQyxDQUFBOUIsT0FBUSxHQUFHUyxNQUFNLENBQUNDLElBQUksQ0FBQ2MsS0FBSyxDQUFDLENBQUNULE1BQU0sS0FBSyxDQUFDO2NBRS9DLElBQUksQ0FBQyxDQUFBVCxhQUFjLEdBQUdtQixNQUFNO2NBRTVCLE9BQU8sSUFBSSxDQUFDLENBQUFuQixhQUFjO1lBQzVCO1lBRUF5QixXQUFXQSxDQUFvQkMsR0FBTTtjQUNuQyxPQUFPLElBQUksQ0FBQ25DLGNBQWMsQ0FBQ21DLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkM7WUFFQUwsUUFBUSxHQUFHLElBQUksQ0FBQ0ksV0FBVztZQUVqQkUsa0JBQWtCQSxDQUMxQkMsT0FBZSxFQUNmQyxZQUFpQixFQUNqQkMsS0FBQSxHQUFpQixLQUFLO2NBRXRCLElBQUksQ0FBQ3ZDLGNBQWMsQ0FBQ3FDLE9BQU8sQ0FBQyxHQUFHQyxZQUFZO2NBRTNDMUIsTUFBTSxDQUFDNEIsY0FBYyxDQUFDLElBQUksRUFBRUgsT0FBaUIsRUFBRTtnQkFDN0NJLEdBQUcsRUFBRUEsQ0FBQSxLQUFLO2tCQUNSLE9BQU8sSUFBSSxDQUFDekMsY0FBYyxDQUFDcUMsT0FBTyxDQUFDO2dCQUNyQyxDQUFDO2dCQUNESyxHQUFHLEVBQUdDLE1BQU0sSUFBVTtrQkFDcEIsSUFBSUosS0FBSyxFQUFFO29CQUNULE1BQU1LLFFBQVEsR0FBRyxJQUFJLENBQUM1QyxjQUFjLENBQUNxQyxPQUFPLENBQUM7b0JBQzdDLElBQUksQ0FBQzlCLE9BQU8sQ0FBQyxHQUFHOEIsT0FBTyxVQUFVLEVBQUU7c0JBQ2pDL0IsS0FBSyxFQUFFcUMsTUFBTTtzQkFDYkUsUUFBUSxFQUFFRCxRQUFRLENBQUNqQyxhQUFhO3FCQUNqQyxDQUFDO29CQUNGLElBQUksQ0FBQ0osT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDdEIsSUFBSSxDQUFDUCxjQUFjLENBQUNxQyxPQUFPLENBQUMsQ0FBQ0ssR0FBRyxDQUFDQyxNQUFNLENBQUM7b0JBQ3hDOztrQkFHRixJQUFJQSxNQUFNLEtBQUtWLFNBQVMsSUFBSVUsTUFBTSxLQUFLLElBQUksQ0FBQzNDLGNBQWMsQ0FBQ3FDLE9BQU8sQ0FBQyxFQUNqRTtrQkFFRixNQUFNUSxRQUFRLEdBQUcsSUFBSSxDQUFDN0MsY0FBYyxDQUFDcUMsT0FBTyxDQUFDO2tCQUM3QyxJQUFJLENBQUNyQyxjQUFjLENBQUNxQyxPQUFPLENBQUMsR0FBR00sTUFBTTtrQkFFckMsSUFBSSxDQUFDcEMsT0FBTyxDQUFDLEdBQUc4QixPQUFPLFVBQVUsRUFBRTtvQkFBRS9CLEtBQUssRUFBRXFDLE1BQU07b0JBQUVFO2tCQUFRLENBQUUsQ0FBQztrQkFDL0QsSUFBSSxDQUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDeEIsQ0FBQztnQkFDRHVDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsWUFBWSxFQUFFO2VBQ2YsQ0FBQztZQUNKO1lBRUE7Ozs7Ozs7Ozs7WUFVVXRCLG1CQUFtQkEsQ0FBQ0YsS0FBNEIsRUFBRUssTUFBTztjQUNqRSxLQUFLLElBQUlTLE9BQU8sSUFBSWQsS0FBSyxFQUFFO2dCQUN6QixNQUFNeUIsVUFBVSxHQUFHcEMsTUFBTSxDQUFDcUMsd0JBQXdCLENBQ2hELElBQUksRUFDSlosT0FBaUIsQ0FDbEI7Z0JBRUQsSUFBSUEsT0FBTyxLQUFLSixTQUFTLEVBQUU7Z0JBRTNCLElBQUksT0FBT0ksT0FBTyxLQUFLLFFBQVEsRUFBRTtrQkFDL0IsSUFBSSxDQUFDLENBQUFqQyxhQUFjLENBQUM4QyxHQUFHLENBQUNiLE9BQU8sQ0FBQztrQkFDaEMsSUFBSUMsWUFBWSxHQUFHVixNQUFNLEdBQUdTLE9BQU8sQ0FBQyxJQUFJVyxVQUFVLEVBQUUxQyxLQUFLO2tCQUN6RCxJQUFJLENBQUM4QixrQkFBa0IsQ0FBQ0MsT0FBaUIsRUFBRUMsWUFBWSxDQUFDO2tCQUN4RDs7Z0JBR0YsTUFBTWEsSUFBSSxHQUFHZCxPQUFvQztnQkFDakQsTUFBTU4sSUFBSSxHQUFHb0IsSUFBSSxDQUFDcEIsSUFBYztnQkFDaEMsSUFBSU8sWUFBWSxHQUFHVixNQUFNLEdBQUdHLElBQUksQ0FBQyxJQUFJaUIsVUFBVSxFQUFFMUMsS0FBSztnQkFDdEQsTUFBTXFCLEtBQUssR0FBR3dCLElBQUksQ0FBQ2pELFVBQVUsSUFBSSxFQUFFO2dCQUVuQyxJQUFJLE9BQU9pRCxJQUFJLENBQUM3QyxLQUFLLEtBQUssVUFBVSxJQUFJLE9BQU82QyxJQUFJLENBQUM3QyxLQUFLLEtBQUssUUFBUSxFQUFFO2tCQUN0RThDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLDJCQUEyQnRCLElBQWMsRUFBRSxDQUFDO2tCQUN6RDs7Z0JBR0YsTUFBTXVCLFVBQVUsR0FBR0gsSUFBSSxDQUFDN0MsS0FBSyxDQUFDaUQsWUFBWSxHQUN0QztrQkFBRUMsTUFBTSxFQUFFO2dCQUFJLENBQUUsR0FDaEI7a0JBQUVBLE1BQU0sRUFBRSxJQUFJO2tCQUFFLEdBQUdsQixZQUFZO2tCQUFFLEdBQUdYO2dCQUFLLENBQUU7Z0JBQy9DLE1BQU1pQixRQUFRLEdBQUcsSUFBSU8sSUFBSSxDQUFDN0MsS0FBSyxDQUFDZ0QsVUFBVSxDQUFDO2dCQUUzQyxJQUFJSCxJQUFJLENBQUM3QyxLQUFLLENBQUNpRCxZQUFZLEVBQUU7a0JBQzNCWCxRQUFRLENBQUNhLFFBQVEsQ0FBQ25CLFlBQVksQ0FBQzs7Z0JBR2pDLElBQUksQ0FBQyxDQUFBbEMsYUFBYyxDQUFDOEMsR0FBRyxDQUFDbkIsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUNLLGtCQUFrQixDQUFDTCxJQUFJLEVBQUVhLFFBQVEsRUFBRSxJQUFJLENBQUM7Z0JBRTdDOztZQUVKO1lBRVVjLGFBQWFBLENBQUNuQyxLQUE0QjtjQUNsRCxJQUFJLENBQUNFLG1CQUFtQixDQUFDRixLQUFLLENBQUM7WUFDakM7WUFFQW9DLFdBQVdBLENBQUN0QixPQUFlLEVBQUUvQixLQUFVO2NBQ3JDLElBQUksQ0FBQ04sY0FBYyxDQUFDcUMsT0FBTyxDQUFDLEdBQUcvQixLQUFLO1lBQ3RDO1lBRVFzRCxnQkFBZ0JBLENBQUN2QixPQUFlLEVBQUUvQixLQUFVO2NBQ2xELElBQUksQ0FBQyxJQUFJLENBQUNFLE1BQU0sRUFBRTtnQkFDaEIsT0FBTztrQkFBRXFELEtBQUssRUFBRSxJQUFJO2tCQUFFQyxLQUFLLEVBQUU7Z0JBQUksQ0FBRTs7Y0FHckMsSUFBSSxDQUFDLElBQUksQ0FBQ3RELE1BQU0sQ0FBQ3VELEtBQUssQ0FBQzFCLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQixPQUFPO2tCQUNMd0IsS0FBSyxFQUFFLEtBQUs7a0JBQ1pDLEtBQUssRUFBRSxJQUFJeEUsSUFBQSxDQUFBMEUsUUFBUSxDQUFDLENBQ2xCO29CQUNFQyxJQUFJLEVBQUUsQ0FBQzVCLE9BQU8sQ0FBQztvQkFDZjZCLE9BQU8sRUFBRSxZQUFZN0IsT0FBTywrQkFBK0I7b0JBQzNEOEIsSUFBSSxFQUFFO21CQUNQLENBQ0Y7aUJBQ0Y7O2NBR0gsTUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQzVELE1BQU0sQ0FBQ3VELEtBQUssQ0FBQzFCLE9BQU8sQ0FBZTtjQUMzRCxNQUFNZ0MsTUFBTSxHQUFHRCxVQUFVLENBQUNFLFNBQVMsQ0FBQ2hFLEtBQUssQ0FBQztjQUUxQyxJQUFJLENBQUMrRCxNQUFNLENBQUNFLE9BQU8sRUFBRTtnQkFDbkIsT0FBTztrQkFBRVYsS0FBSyxFQUFFLEtBQUs7a0JBQUVDLEtBQUssRUFBRU8sTUFBTSxDQUFDUDtnQkFBSyxDQUFFOztjQUc5QyxPQUFPO2dCQUFFRCxLQUFLLEVBQUUsSUFBSTtnQkFBRUMsS0FBSyxFQUFFO2NBQUksQ0FBRTtZQUNyQztZQUNRVSxZQUFZLEdBQUdBLENBQUNDLENBQU0sRUFBRUMsQ0FBTSxLQUNwQ3ZELElBQUksQ0FBQ0MsU0FBUyxDQUFDcUQsQ0FBQyxDQUFDLEtBQUt0RCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3NELENBQUMsQ0FBQztZQUV6Qzs7Ozs7Ozs7O1lBU0FDLFFBQVFBLENBQUN6RSxVQUFVO2NBSWpCLE1BQU1XLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUNYLFVBQVUsQ0FBQztjQUNwQyxNQUFNMEUsTUFBTSxHQUFnQyxFQUFFO2NBQzlDLE1BQU1DLFVBQVUsR0FBSTlELElBQUksSUFBSTtnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQ2IsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDQSxVQUFVLENBQUM0RSxRQUFRLENBQUMvRCxJQUFJLENBQUMsRUFBRTtrQkFDdkRxQyxPQUFPLENBQUMyQixLQUFLLENBQUMsbUJBQW1CLEVBQUVoRSxJQUFJLENBQUM7a0JBQ3hDOztnQkFFRixNQUFNaUUsU0FBUyxHQUFHLElBQUksQ0FBQ3BCLGdCQUFnQixDQUFDN0MsSUFBSSxFQUFFYixVQUFVLENBQUNhLElBQUksQ0FBQyxDQUFDO2dCQUUvRCxJQUFJLENBQUNpRSxTQUFTLENBQUNuQixLQUFLLEVBQUU7a0JBQ3BCZSxNQUFNLENBQUM3RCxJQUFJLENBQUMsR0FBR2lFLFNBQVMsQ0FBQ2xCLEtBQUs7O2NBRWxDLENBQUM7Y0FDRGpELElBQUksQ0FBQ2dCLE9BQU8sQ0FBQ2dELFVBQVUsQ0FBQztjQUV4QixPQUFPO2dCQUFFaEIsS0FBSyxFQUFFLENBQUMsQ0FBQ2pELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDK0QsTUFBTSxDQUFDLENBQUMxRCxNQUFNO2dCQUFFMEQ7Y0FBTSxDQUFFO1lBQ3hEO1lBRUFsQyxHQUFHQSxDQUFDeEMsVUFBc0I7Y0FDeEIsSUFBSSxDQUFDQSxVQUFVLEVBQUU7Z0JBQ2ZrRCxPQUFPLENBQUNDLElBQUksQ0FDVix1Q0FBdUMsRUFDdkMsSUFBSSxDQUFDL0IsV0FBVyxDQUFDUyxJQUFJLEVBQ3JCN0IsVUFBVSxDQUNYO2dCQUNELE9BQU87a0JBQ0wrRSxPQUFPLEVBQUU7aUJBQ1Y7O2NBR0gsTUFBTXBFLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLENBQUNYLFVBQVUsQ0FBQztjQUNwQyxJQUFJK0UsT0FBTyxHQUFHLEtBQUs7Y0FDbkIsTUFBTUwsTUFBTSxHQUFnQyxFQUFFO2NBRTlDLE1BQU1NLEtBQUssR0FBSW5FLElBQUksSUFBSTtnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBWCxhQUFjLENBQUMrRSxHQUFHLENBQUNwRSxJQUFJLENBQUMsRUFBRTtrQkFDbEM7a0JBQ0E7O2dCQUdGLE1BQU1pRSxTQUFTLEdBQUcsSUFBSSxDQUFDcEIsZ0JBQWdCLENBQUM3QyxJQUFJLEVBQUViLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQ2lFLFNBQVMsQ0FBQ25CLEtBQUssRUFBRTtrQkFDcEJlLE1BQU0sQ0FBQzdELElBQUksQ0FBQyxHQUFHaUUsU0FBUztrQkFDeEI7O2dCQUdGO2dCQUNBLElBQUksSUFBSSxDQUFDOUMsV0FBVyxDQUFDbkIsSUFBSSxDQUFDLEVBQUVkLFVBQVUsRUFBRTtrQkFDdEMsTUFBTTJDLFFBQVEsR0FBRyxJQUFJLENBQUNWLFdBQVcsQ0FBQ25CLElBQUksQ0FBZ0M7a0JBRXRFNkIsUUFBUSxDQUFDRixHQUFHLENBQUN4QyxVQUFVLENBQUNhLElBQUksQ0FBQyxDQUFDO2tCQUM5QixJQUFJNkIsUUFBUSxDQUFDbEMsV0FBVyxFQUFFdUUsT0FBTyxHQUFHLElBQUk7a0JBRXhDOztnQkFHRixNQUFNRyxRQUFRLEdBQUcsT0FBT2xGLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLEtBQUssUUFBUTtnQkFDckQsTUFBTXlELFlBQVksR0FBR1ksUUFBUSxJQUFJLElBQUksQ0FBQ1osWUFBWSxDQUFDLENBQUN6RCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDO2dCQUV0RSxJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDLEtBQUtiLFVBQVUsQ0FBQ2EsSUFBSSxDQUFDLElBQUl5RCxZQUFZLEVBQUU7Z0JBRXJELElBQUksQ0FBQ3pELElBQUksQ0FBQyxHQUFHYixVQUFVLENBQUNhLElBQUksQ0FBRTtnQkFDOUJrRSxPQUFPLEdBQUcsSUFBSTtjQUNoQixDQUFDO2NBRURwRSxJQUFJLENBQUNnQixPQUFPLENBQUNxRCxLQUFLLENBQUM7Y0FDbkIsSUFBSUQsT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQzFFLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3RCLElBQUksQ0FBQ0EsT0FBTyxDQUFDLGNBQWMsQ0FBQzs7Y0FHOUIsT0FBTztnQkFBRTBFLE9BQU87Z0JBQUVMO2NBQU0sQ0FBRTtZQUM1QjtZQUVBOzs7Ozs7WUFNQWpFLGFBQWFBLENBQUE7Y0FDWCxNQUFNWSxLQUFLLEdBQUcsRUFBZ0I7Y0FFOUIsTUFBTThELElBQUksR0FBSXZELFFBQVEsSUFBSTtnQkFDeEIsSUFBSUMsSUFBSSxHQUFHRCxRQUFRO2dCQUVuQixJQUFJLE9BQU9BLFFBQVEsS0FBSyxRQUFRLElBQUlBLFFBQVEsQ0FBQ3hCLEtBQUssQ0FBQ0wsVUFBVSxFQUFFO2tCQUM3RDhCLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJO2tCQUNwQjs7O2tCQUdBUixLQUFLLENBQUMrRCxNQUFNLENBQUN2RCxJQUFJLENBQUMsQ0FBQyxHQUFHRCxRQUFRLENBQUN4QixLQUFLLENBQUNpRCxZQUFZLEdBQzdDLElBQUksQ0FBQ3hCLElBQUksQ0FBQyxDQUFDd0QsaUJBQWlCLEVBQUUsR0FDOUIsSUFBSSxDQUFDeEQsSUFBSSxDQUFDLEVBQUVwQixhQUFhLEVBQUU7a0JBQy9COztnQkFHRlksS0FBSyxDQUFDK0QsTUFBTSxDQUFDdkQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQztjQUNsQyxDQUFDO2NBQ0QsSUFBSSxDQUFDN0IsVUFBVSxDQUFDMkIsT0FBTyxDQUFDd0QsSUFBSSxDQUFDO2NBQzdCLE9BQU85RCxLQUFLO1lBQ2Q7WUFFQTs7OztZQUlBaUUsTUFBTUEsQ0FBQTtjQUNKLElBQUksQ0FBQzlDLEdBQUcsQ0FBQyxJQUFJLENBQUNqQyxhQUFhLENBQUM7WUFDOUI7WUFFQTs7Ozs7WUFLQWdGLFdBQVdBLENBQUE7Y0FDVCxJQUFJLENBQUMsQ0FBQWhGLGFBQWMsR0FBRyxJQUFJLENBQUNFLGFBQWEsRUFBRTtjQUMxQyxJQUFJLENBQUMsQ0FBQVIsT0FBUSxHQUFHLEtBQUs7WUFDdkI7WUFFQTs7Ozs7O1lBTUF1RixZQUFZLEdBQUdBLENBQ2JDLEtBQUEsR0FBZ0IsUUFBUSxFQUN4QkMsTUFBQSxHQUE4QixFQUFFLEtBQ3hCO2NBQ1IsSUFBSSxDQUFDckYsT0FBTyxDQUFDb0YsS0FBSyxDQUFDO1lBQ3JCLENBQUM7O1VBQ0ZFLE9BQUEsQ0FBQXBHLGFBQUEsR0FBQUEsYUFBQTs7Ozs7Ozs7Ozs7VUF4YUQ7O1VBRUFtQixNQUFBLENBQUE0QixjQUFBLENBQUFxRCxPQUFBO1lBQ0F2RixLQUFBO1VBQ0EiLCJpZ25vcmVMaXN0IjpbXX0=