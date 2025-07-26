System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Observer, State, __beyond_pkg, hmr;
  _export({
    Observer: void 0,
    State: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/widgets/state"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./observer
      **************************/
      ims.set('./observer', {
        hash: 2129659437,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Observer = void 0;
          var _react = require("react");
          /*bundle*/
          class Observer {
            #objects;
            #invalidate;
            constructor() {
              const [id, invalidate] = (0, _react.useState)(0);
              this.#invalidate = () => invalidate(id + 1);
            }
            static get instance() {
              const ref = (0, _react.useRef)(null);
              if (ref.current) return ref.current;
              const instance = ref.current = new Observer();
              (0, _react.useEffect)(() => {
                return () => {
                  instance.#clean();
                };
              }, []);
            }
            static set(object, event) {
              this.instance.#set(object, event);
            }
            #set(object, event) {
              // Observer alrady set
              if (this.#objects.get(object)?.get(event)) return;
              const listeners = (() => {
                if (this.#objects.has(object)) return this.#objects.get(object);
                const listeners = new Map();
                this.#objects.set(object, listeners);
                return listeners;
              })();
              const listener = () => this.#invalidate();
              listeners.set(event, listener);
              object.on(event, listener);
            }
            #clean() {
              this.#objects.forEach((listeners, object) => {
                listeners.forEach((listener, event) => {
                  object.off(event, listener);
                });
              });
            }
          }
          exports.Observer = Observer;
        }
      });

      /***********************
      INTERNAL MODULE: ./state
      ***********************/

      ims.set('./state', {
        hash: 2227409122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.State = void 0;
          var _react = require("react");
          /*bundle*/
          class State {
            #values = {};
            get values() {
              return this.#values;
            }
            /**
             * Define a property or an array of properties of the state object
             *
             * @param p1 Can be the name of the property or an object with the values of the properties
             * @param p2 The initial value if the value of p1 is the name of the property to be defined
             */
            define(p1, p2) {
              // Normalize as an array of properties regardless wether a property or a properties object is being defined
              const properties = typeof p1 === 'string' ? [p1, p2] : Object.entries(p1);
              properties.forEach(([name, initial]) => {
                if (this.#values.hasOwnProperty(name)) return;
                let [value, update] = (0, _react.useState)(initial);
                Object.defineProperty(this.#values, name, {
                  get: () => value,
                  set: updated => {
                    update(updated);
                    value = updated;
                  }
                });
              });
            }
          }
          exports.State = State;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./observer",
        "from": "Observer",
        "name": "Observer"
      }, {
        "im": "./state",
        "from": "State",
        "name": "State"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Observer') && _export("Observer", Observer = require ? require('./observer').Observer : value);
        (require || prop === 'State') && _export("State", State = require ? require('./state').State : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiT2JzZXJ2ZXIiLCJvYmplY3RzIiwiaW52YWxpZGF0ZSIsImNvbnN0cnVjdG9yIiwiaWQiLCJ1c2VTdGF0ZSIsImluc3RhbmNlIiwicmVmIiwidXNlUmVmIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImNsZWFuIiwic2V0Iiwib2JqZWN0IiwiZXZlbnQiLCIjc2V0IiwiZ2V0IiwibGlzdGVuZXJzIiwiaGFzIiwiTWFwIiwibGlzdGVuZXIiLCJvbiIsIiNjbGVhbiIsImZvckVhY2giLCJvZmYiLCJleHBvcnRzIiwiU3RhdGUiLCJ2YWx1ZXMiLCJkZWZpbmUiLCJwMSIsInAyIiwicHJvcGVydGllcyIsIk9iamVjdCIsImVudHJpZXMiLCJuYW1lIiwiaW5pdGlhbCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJ1cGRhdGUiLCJkZWZpbmVQcm9wZXJ0eSIsInVwZGF0ZWQiXSwic291cmNlcyI6WyIvL29ic2VydmVyLnRzLyIsIi8vc3RhdGUudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQU1PO1VBQVUsTUFBT0MsUUFBUTtZQUMvQixDQUFBQyxPQUFRO1lBQ1IsQ0FBQUMsVUFBVztZQUVYQyxZQUFBO2NBQ0MsTUFBTSxDQUFDQyxFQUFFLEVBQUVGLFVBQVUsQ0FBQyxHQUFHLElBQUFKLE1BQUEsQ0FBQU8sUUFBUSxFQUFDLENBQUMsQ0FBQztjQUNwQyxJQUFJLENBQUMsQ0FBQUgsVUFBVyxHQUFHLE1BQU1BLFVBQVUsQ0FBQ0UsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QztZQUVBLFdBQVdFLFFBQVFBLENBQUE7Y0FDbEIsTUFBTUMsR0FBRyxHQUFHLElBQUFULE1BQUEsQ0FBQVUsTUFBTSxFQUFXLElBQUksQ0FBQztjQUNsQyxJQUFJRCxHQUFHLENBQUNFLE9BQU8sRUFBRSxPQUFPRixHQUFHLENBQUNFLE9BQU87Y0FFbkMsTUFBTUgsUUFBUSxHQUFJQyxHQUFHLENBQUNFLE9BQU8sR0FBRyxJQUFJVCxRQUFRLEVBQUc7Y0FDL0MsSUFBQUYsTUFBQSxDQUFBWSxTQUFTLEVBQUMsTUFBSztnQkFDZCxPQUFPLE1BQUs7a0JBQ1hKLFFBQVEsQ0FBQyxDQUFBSyxLQUFNLEVBQUU7Z0JBQ2xCLENBQUM7Y0FDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ1A7WUFFQSxPQUFPQyxHQUFHQSxDQUFDQyxNQUFjLEVBQUVDLEtBQWE7Y0FDdkMsSUFBSSxDQUFDUixRQUFRLENBQUMsQ0FBQU0sR0FBSSxDQUFDQyxNQUFNLEVBQUVDLEtBQUssQ0FBQztZQUNsQztZQUVBLENBQUFGLEdBQUlHLENBQUNGLE1BQWMsRUFBRUMsS0FBYTtjQUNqQztjQUNBLElBQUksSUFBSSxDQUFDLENBQUFiLE9BQVEsQ0FBQ2UsR0FBRyxDQUFDSCxNQUFNLENBQUMsRUFBRUcsR0FBRyxDQUFDRixLQUFLLENBQUMsRUFBRTtjQUUzQyxNQUFNRyxTQUFTLEdBQUcsQ0FBQyxNQUFLO2dCQUN2QixJQUFJLElBQUksQ0FBQyxDQUFBaEIsT0FBUSxDQUFDaUIsR0FBRyxDQUFDTCxNQUFNLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBWixPQUFRLENBQUNlLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDO2dCQUUvRCxNQUFNSSxTQUFTLEdBQUcsSUFBSUUsR0FBRyxFQUFFO2dCQUMzQixJQUFJLENBQUMsQ0FBQWxCLE9BQVEsQ0FBQ1csR0FBRyxDQUFDQyxNQUFNLEVBQUVJLFNBQVMsQ0FBQztnQkFDcEMsT0FBT0EsU0FBUztjQUNqQixDQUFDLEVBQUMsQ0FBRTtjQUVKLE1BQU1HLFFBQVEsR0FBR0EsQ0FBQSxLQUFNLElBQUksQ0FBQyxDQUFBbEIsVUFBVyxFQUFFO2NBRXpDZSxTQUFTLENBQUNMLEdBQUcsQ0FBQ0UsS0FBSyxFQUFFTSxRQUFRLENBQUM7Y0FDOUJQLE1BQU0sQ0FBQ1EsRUFBRSxDQUFDUCxLQUFLLEVBQUVNLFFBQVEsQ0FBQztZQUMzQjtZQUVBLENBQUFULEtBQU1XLENBQUE7Y0FDTCxJQUFJLENBQUMsQ0FBQXJCLE9BQVEsQ0FBQ3NCLE9BQU8sQ0FBQyxDQUFDTixTQUFTLEVBQUVKLE1BQU0sS0FBSTtnQkFDM0NJLFNBQVMsQ0FBQ00sT0FBTyxDQUFDLENBQUNILFFBQVEsRUFBRU4sS0FBSyxLQUFJO2tCQUNyQ0QsTUFBTSxDQUFDVyxHQUFHLENBQUNWLEtBQUssRUFBRU0sUUFBUSxDQUFDO2dCQUM1QixDQUFDLENBQUM7Y0FDSCxDQUFDLENBQUM7WUFDSDs7VUFDQUssT0FBQSxDQUFBekIsUUFBQSxHQUFBQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hERCxJQUFBRixNQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLE1BQU8yQixLQUFLO1lBQzVCLENBQUFDLE1BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQW1CLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ2hDO1lBRUE7Ozs7OztZQU1BQyxNQUFNQSxDQUFDQyxFQUF1QixFQUFFQyxFQUFRO2NBQ3ZDO2NBQ0EsTUFBTUMsVUFBVSxHQUFvQixPQUFPRixFQUFFLEtBQUssUUFBUSxHQUFHLENBQUNBLEVBQUUsRUFBRUMsRUFBRSxDQUFDLEdBQUdFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDSixFQUFFLENBQUM7Y0FFMUZFLFVBQVUsQ0FBQ1IsT0FBTyxDQUFDLENBQUMsQ0FBQ1csSUFBSSxFQUFFQyxPQUFPLENBQUMsS0FBSTtnQkFDdEMsSUFBSSxJQUFJLENBQUMsQ0FBQVIsTUFBTyxDQUFDUyxjQUFjLENBQUNGLElBQUksQ0FBQyxFQUFFO2dCQUV2QyxJQUFJLENBQUNHLEtBQUssRUFBRUMsTUFBTSxDQUFDLEdBQUcsSUFBQXhDLE1BQUEsQ0FBQU8sUUFBUSxFQUFDOEIsT0FBTyxDQUFDO2dCQUV2Q0gsTUFBTSxDQUFDTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUFaLE1BQU8sRUFBRU8sSUFBSSxFQUFFO2tCQUN6Q2xCLEdBQUcsRUFBRUEsQ0FBQSxLQUFNcUIsS0FBSztrQkFDaEJ6QixHQUFHLEVBQUc0QixPQUFZLElBQUk7b0JBQ3JCRixNQUFNLENBQUNFLE9BQU8sQ0FBQztvQkFDZkgsS0FBSyxHQUFHRyxPQUFPO2tCQUNoQjtpQkFDQSxDQUFDO2NBQ0gsQ0FBQyxDQUFDO1lBQ0g7O1VBQ0FmLE9BQUEsQ0FBQUMsS0FBQSxHQUFBQSxLQUFBIiwiaWdub3JlTGlzdCI6W119