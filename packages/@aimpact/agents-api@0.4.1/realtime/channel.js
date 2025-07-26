System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, bimport, __Bundle, __pkg, ims, ChannelStatusType, IChannelSettings, Channel, __beyond_pkg, hmr;
  _export({
    ChannelStatusType: void 0,
    IChannelSettings: void 0,
    Channel: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsEvents007Events) {
      dependency_1 = _beyondJsEvents007Events;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/channel"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/events/events', dependency_1]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2939146147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Channel = void 0;
          var _events = require("@beyond-js/events/events");
          /*bundle*/
          class Channel extends _events.Events {
            #settings;
            #ws;
            get ws() {
              return this.#ws;
            }
            // Determine if running in the browser or Node.js
            static get browser() {
              return !globalThis.process?.versions?.node;
            }
            get status() {
              if (!this.#ws) return 'closed';
              const {
                readyState: state
              } = this.#ws;
              if (this.#error) {
                return 'error';
              } else if (state === this.#ws.CONNECTING) {
                return 'connecting';
              } else if (state === this.#ws.OPEN) {
                return 'open';
              } else if (state === this.#ws.CLOSING) {
                return 'closing';
              } else if (state === this.#ws.CLOSED) {
                return 'closed';
              }
            }
            #error;
            get error() {
              return this.#error;
            }
            #listeners = {};
            constructor(settings) {
              super();
              if (!settings?.url) throw new Error(`Invalid settings. Attribute 'url' must be specified`);
              this.#settings = settings;
            }
            async #create() {
              if (Channel.browser) {
                // Browser WebSocket setup
                const WebSocket = globalThis.WebSocket;
                const {
                  url,
                  headers
                } = this.#settings;
                if (headers && !(headers instanceof Array)) {
                  throw new Error('Invalid headers specification. An array was expected when client is a browser');
                }
                this.#ws = new WebSocket(url, headers);
                // Define event handlers for the browser
                this.#listeners = {
                  open: () => this.trigger('open'),
                  message: event => this.trigger('message', event.data),
                  close: event => this.trigger('close', event.code, event.reason),
                  error: event => this.trigger('error', event)
                };
                // Attach listeners using addEventListener
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.addEventListener(event, listener);
                }
              } else {
                // Node.js WebSocket setup
                const {
                  WebSocket
                } = await bimport('ws');
                const {
                  url,
                  headers
                } = this.#settings;
                if (headers && headers instanceof Array) {
                  throw new Error('Invalid headers specification. An object was expected when running on node.js');
                }
                this.#ws = new WebSocket(url, {
                  headers
                });
                // Define event handlers for node.js
                this.#listeners = {
                  open: () => this.trigger('open'),
                  message: data => this.trigger('message', data),
                  close: (code, reason) => this.trigger('close', code, reason),
                  error: error => this.trigger('error', error)
                };
                // Attach listeners using .on
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.on(event, listener);
                }
              }
              // Attach to the close event to cleanup and remove the web socket instance
              // Socket can be reconnected by calling the `connect` method
              this.on('close', this.#onclose);
            }
            /**
             * Sends data through the WebSocket
             */
            send(data) {
              const {
                status
              } = this;
              if (status !== 'open') throw new Error(`Channel is not in an 'open' state. Actual state is '${status}'`);
              this.#ws.send(data);
            }
            /**
             * Removes all event listeners and closes the WebSocket.
             */
            #cleanup() {
              // Remove all listeners based on the environment
              if (Channel.browser) {
                // Browser: Remove listeners with removeEventListener
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.removeEventListener(event, listener);
                }
              } else {
                // Node.js: Remove listeners with off (for ws library in Node.js)
                for (const [event, listener] of Object.entries(this.#listeners)) {
                  this.#ws.off(event, listener);
                }
              }
            }
            #onclose = () => {
              this.#cleanup();
              this.#ws = void 0;
              this.off('close', this.#onclose);
            };
            async connect() {
              if (this.#ws) throw new Error(`Socket status must be 'closed' before attempting to connect`);
              await this.#create();
              const promise = new Promise(resolve => {
                const off = () => {
                  this.off('open', onopen);
                  this.off('error', onerror);
                  this.off('close', onclose);
                };
                const onopen = () => {
                  off();
                  resolve(true);
                };
                const onerror = (ws, error) => {
                  off();
                  this.#error = error;
                  resolve(false);
                };
                const onclose = (ws, code, reason) => {
                  off();
                  this.#ws = void 0;
                  if (this.#error) return;
                  this.#error = new Error(`WebSocket closed unexpectedly. Code: ${code}. Reason: ${reason}`);
                  resolve(false);
                };
                this.on('open', onopen);
                this.on('error', onerror);
                this.on('close', onclose);
              });
              return await promise;
            }
            /**
             * Closes the WebSocket connection and waits for the close event.
             */
            async close() {
              const ws = this.#ws;
              if (ws.readyState === WebSocket.CLOSED) {
                return; // Already closed
              }
              return new Promise(resolve => {
                // Listen for the close event
                const onclose = () => setTimeout(resolve, 0);
                // Attach the close listener
                this.on('close', onclose);
                // Initiate the closing handshake
                ws.close();
              });
            }
          }
          exports.Channel = Channel;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ChannelStatusType",
        "name": "ChannelStatusType"
      }, {
        "im": "./index",
        "from": "IChannelSettings",
        "name": "IChannelSettings"
      }, {
        "im": "./index",
        "from": "Channel",
        "name": "Channel"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ChannelStatusType') && _export("ChannelStatusType", ChannelStatusType = require ? require('./index').ChannelStatusType : value);
        (require || prop === 'IChannelSettings') && _export("IChannelSettings", IChannelSettings = require ? require('./index').IChannelSettings : value);
        (require || prop === 'Channel') && _export("Channel", Channel = require ? require('./index').Channel : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwicmVxdWlyZSIsIkNoYW5uZWwiLCJFdmVudHMiLCJzZXR0aW5ncyIsIndzIiwiYnJvd3NlciIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIiwidmVyc2lvbnMiLCJub2RlIiwic3RhdHVzIiwicmVhZHlTdGF0ZSIsInN0YXRlIiwiZXJyb3IiLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NJTkciLCJDTE9TRUQiLCJsaXN0ZW5lcnMiLCJjb25zdHJ1Y3RvciIsInVybCIsIkVycm9yIiwiY3JlYXRlIiwiI2NyZWF0ZSIsIldlYlNvY2tldCIsImhlYWRlcnMiLCJBcnJheSIsIm9wZW4iLCJ0cmlnZ2VyIiwibWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsImNsb3NlIiwiY29kZSIsInJlYXNvbiIsImxpc3RlbmVyIiwiT2JqZWN0IiwiZW50cmllcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW1wb3J0Iiwib24iLCJvbmNsb3NlIiwic2VuZCIsImNsZWFudXAiLCIjY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmYiLCIjb25jbG9zZSIsImNvbm5lY3QiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvbm9wZW4iLCJvbmVycm9yIiwic2V0VGltZW91dCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFDQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFjTztVQUFVLE1BQU9DLE9BQVEsU0FBUUYsT0FBQSxDQUFBRyxNQUFNO1lBQzdDLENBQUFDLFFBQVM7WUFFVCxDQUFBQyxFQUFHO1lBQ0gsSUFBSUEsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFBLEVBQUc7WUFDaEI7WUFFQTtZQUNBLFdBQVdDLE9BQU9BLENBQUE7Y0FDakIsT0FBTyxDQUFFQyxVQUFr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