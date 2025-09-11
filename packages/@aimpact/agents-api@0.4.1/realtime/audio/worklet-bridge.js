System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/core", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, WorkletBridge, WorkletNode, __beyond_pkg, hmr;
  _export({
    WorkletBridge: void 0,
    WorkletNode: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Core) {
      dependency_1 = _beyondJsKernel0114Core;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/worklet-bridge"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/events/events', dependency_2]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./dispatcher
      ****************************/
      ims.set('./dispatcher', {
        hash: 63950517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WorkletDispatcher = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _events = require("@beyond-js/events/events");
          class WorkletDispatcher extends _events.Events {
            #node;
            #autoincrement = 0;
            #timeout;
            #responses = new Map();
            constructor(node, timeout = 5000) {
              super();
              this.#node = node;
              this.#timeout = timeout;
              node.port.onmessage = this.#onmessage.bind(this);
            }
            dispatch(method, data) {
              const id = this.#autoincrement++;
              this.#node.port.postMessage({
                method,
                id,
                data
              });
              const promise = new _core.PendingPromise();
              this.#responses.set(id, promise);
              const timedout = () => {
                this.#responses.delete(id);
                promise.reject({
                  code: 0,
                  text: `Request method "${method}" has timed out`
                });
              };
              this.#responses.set(id, promise);
              setTimeout(timedout, this.#timeout);
              return promise;
            }
            #onmessage(e) {
              const {
                method,
                id,
                data
              } = e.data;
              if (method !== 'response') {
                this.#node.bridge._onmessage(e);
                return;
              }
              if (id === void 0) throw new Error(`Response id is undefined on method "${method}"`);
              if (!this.#responses.has(id)) return; // Request could have reached its time out limit
              const promise = this.#responses.get(id);
              this.#responses.delete(id);
              promise.resolve({
                data
              });
            }
          }
          exports.WorkletDispatcher = WorkletDispatcher;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1708850298,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WorkletBridge = void 0;
          var _events = require("@beyond-js/events/events");
          var _node = require("./node");
          /*bundle*/
          class WorkletBridge {
            #context;
            get context() {
              return this.#context;
            }
            #node;
            get node() {
              return this.#node;
            }
            #name;
            get name() {
              return this.#name;
            }
            #src;
            get src() {
              return this.#src;
            }
            #timeout;
            get timeout() {
              return this.#timeout;
            }
            #prepared = false;
            get prepared() {
              return this.#prepared;
            }
            #preparing = false;
            get preparing() {
              return this.#preparing;
            }
            #error;
            get error() {
              return this.#error;
            }
            #events;
            get _events() {
              return this.#events;
            }
            on(event, callback) {
              return this.#events.on(event, callback);
            }
            off(event, callback) {
              return this.#events.off(event, callback);
            }
            constructor(context, name, src, timeout = 1000) {
              this.#context = context;
              this.#name = name;
              this.#src = src;
              this.#timeout = timeout;
              this.#events = new _events.Events();
            }
            check() {
              if (!this.#prepared) throw new Error('Worklet not prepared. Call `setup` method before calling this method.');
              if (this.#error) throw new Error('Worklet is in an error state');
              if (!this.#node) throw new Error('Worklet node not created. Call the `create` method first');
              return true;
            }
            async setup() {
              if (this.#prepared || this.#preparing) throw new Error('Setup method already executed');
              if (this.#error) throw new Error('Setup method has already been executed with errors found');
              this.#preparing = true;
              try {
                // Load and register the AudioWorklet module
                !this.#prepared && (await this.#context.audioWorklet.addModule(this.#src));
                this.#prepared = true;
              } catch (exc) {
                console.log(`Error loading "${this.#name}" worklet:\n• ${exc.message}`);
                this.#error = exc;
                return exc;
              } finally {
                this.#preparing = false;
              }
            }
            create() {
              if (this.#node) throw new Error('Worklet node already created');
              this.#node = new _node.WorkletNode(this, this.#context, this.#name, this.#timeout);
            }
            connect(destination, output, input) {
              if (!this.check()) return;
              return this.#node.connect(destination, output, input);
            }
            disconnect() {
              if (!this.check()) return;
              const node = this.#node;
              this.#node = void 0;
              return node.disconnect();
            }
            _onmessage(e) {
              const {
                method,
                data
              } = e.data;
              if (!method || typeof method !== 'string') {
                const error = `Audio worklet "${this.#name}" ` + `has triggered an invalid event with an invalid or undefined method name. ` + `If for some reason in the future it would be required to receive events without ` + `the structure currently implemented, just make a change in this validation` + `Check the event data:`;
                console.error(error, e);
                return;
              }
              this.#events.trigger(method, data);
            }
            async dispatch(method, data) {
              if (!this.check()) return;
              return this.#node.dispatcher.dispatch(method, data);
            }
          }
          exports.WorkletBridge = WorkletBridge;
        }
      });

      /**********************
      INTERNAL MODULE: ./node
      **********************/

      ims.set('./node', {
        hash: 3643956726,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WorkletNode = void 0;
          var _dispatcher = require("./dispatcher");
          /*bundle*/
          class WorkletNode extends AudioWorkletNode {
            #bridge;
            get bridge() {
              return this.#bridge;
            }
            #dispatcher;
            get dispatcher() {
              return this.#dispatcher;
            }
            constructor(bridge, context, name, timeout = 1000) {
              super(context, name);
              this.#bridge = bridge;
              this.#dispatcher = new _dispatcher.WorkletDispatcher(this, timeout);
            }
          }
          exports.WorkletNode = WorkletNode;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "WorkletBridge",
        "name": "WorkletBridge"
      }, {
        "im": "./node",
        "from": "WorkletNode",
        "name": "WorkletNode"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WorkletBridge') && _export("WorkletBridge", WorkletBridge = require ? require('./index').WorkletBridge : value);
        (require || prop === 'WorkletNode') && _export("WorkletNode", WorkletNode = require ? require('./node').WorkletNode : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfZXZlbnRzIiwiV29ya2xldERpc3BhdGNoZXIiLCJFdmVudHMiLCJub2RlIiwiYXV0b2luY3JlbWVudCIsInRpbWVvdXQiLCJyZXNwb25zZXMiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInBvcnQiLCJvbm1lc3NhZ2UiLCJiaW5kIiwiZGlzcGF0Y2giLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJwb3N0TWVzc2FnZSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsInNldCIsInRpbWVkb3V0IiwiZGVsZXRlIiwicmVqZWN0IiwiY29kZSIsInRleHQiLCJzZXRUaW1lb3V0IiwiI29ubWVzc2FnZSIsImUiLCJicmlkZ2UiLCJfb25tZXNzYWdlIiwiRXJyb3IiLCJoYXMiLCJnZXQiLCJyZXNvbHZlIiwiZXhwb3J0cyIsIl9ub2RlIiwiV29ya2xldEJyaWRnZSIsImNvbnRleHQiLCJuYW1lIiwic3JjIiwicHJlcGFyZWQiLCJwcmVwYXJpbmciLCJlcnJvciIsImV2ZW50cyIsIm9uIiwiZXZlbnQiLCJjYWxsYmFjayIsIm9mZiIsImNoZWNrIiwic2V0dXAiLCJhdWRpb1dvcmtsZXQiLCJhZGRNb2R1bGUiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImNyZWF0ZSIsIldvcmtsZXROb2RlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwib3V0cHV0IiwiaW5wdXQiLCJkaXNjb25uZWN0IiwidHJpZ2dlciIsImRpc3BhdGNoZXIiLCJfZGlzcGF0Y2hlciIsIkF1ZGlvV29ya2xldE5vZGUiXSwic291cmNlcyI6WyIvZGlzcGF0Y2hlci50cyIsIi9pbmRleC50cyIsIi9ub2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQ0EsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFB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