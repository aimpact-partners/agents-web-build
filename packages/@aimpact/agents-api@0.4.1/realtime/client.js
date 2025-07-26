System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/ws-config", "@aimpact/agents-api@0.4.1/realtime/channel", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.1/realtime/client/base", "@aimpact/agents-api@0.4.1/realtime/utils"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, ClientSession, __beyond_pkg, hmr;
  _export("ClientSession", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041WsConfig) {
      dependency_1 = _aimpactAgentsApi041WsConfig;
    }, function (_aimpactAgentsApi041RealtimeChannel) {
      dependency_2 = _aimpactAgentsApi041RealtimeChannel;
    }, function (_beyondJsEvents007Events) {
      dependency_3 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi041RealtimeClientBase) {
      dependency_4 = _aimpactAgentsApi041RealtimeClientBase;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_5 = _aimpactAgentsApi041RealtimeUtils;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/ws-config', dependency_1], ['@aimpact/agents-api/realtime/channel', dependency_2], ['@beyond-js/events/events', dependency_3], ['@aimpact/agents-api/realtime/client/base', dependency_4], ['@aimpact/agents-api/realtime/utils', dependency_5]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./channel
      *************************/
      ims.set('./channel', {
        hash: 2749510134,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Channel = void 0;
          var _wsConfig = require("@aimpact/agents-api/ws-config");
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _events = require("@beyond-js/events/events");
          const SERVER_URL = _wsConfig.url;
          class Channel extends _events.Events {
            #channel;
            #created = false;
            get status() {
              const {
                status
              } = this.#channel;
              return status === 'open' && this.#created ? 'created' : status;
            }
            get error() {
              return this.#channel.error;
            }
            constructor() {
              super();
              this.#channel = new _channel.Channel({
                url: SERVER_URL
              });
              this.#channel.on('open', this.#onopen);
              this.#channel.on('close', this.#onclose);
              this.#channel.on('message', this.#onmessage);
            }
            #onopen = () => this.trigger('open');
            #onclose = () => this.trigger('close');
            #onmessage = message => {
              let event, data;
              try {
                const parsed = JSON.parse(message);
                ({
                  event,
                  data
                } = parsed);
                if (!event) {
                  console.warn(`Agent message seems to be invalid, event not defined:`, message);
                  return;
                }
              } catch (exc) {
                console.warn(`Unable to parse agent message:`, message, exc.message);
                return;
              }
              console.log(`Event "${event}" has been received:`, data);
              event === 'session.created' && (this.#created = true);
              this.trigger(event, data);
            };
            #cleanup() {
              this.#channel.off('open', this.#onopen);
              this.#channel.off('close', this.#onclose);
              this.#channel.off('message', this.#onmessage);
            }
            async connect() {
              return await this.#channel.connect();
            }
            async close() {
              this.#cleanup();
              return await this.#channel.close();
            }
            send(event, data) {
              this.#channel.send(JSON.stringify({
                event,
                data
              }));
            }
          }
          exports.Channel = Channel;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 314552738,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSession = void 0;
          var _base = require("@aimpact/agents-api/realtime/client/base");
          var _channel = require("./channel");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          /*bundle*/
          class ClientSession extends _base.ClientSessionBase {
            #channel;
            get status() {
              return this.#channel.status;
            }
            get error() {
              return this.#channel.error;
            }
            constructor(settings) {
              const channel = new _channel.Channel();
              super(channel, channel, settings);
              this.#channel = channel;
            }
            async connect() {
              const ok = await this.#channel.connect();
              ok && (await super.connect());
              return ok;
            }
            async close() {
              this.#channel.close();
              return await super.close();
            }
            async update(settings) {
              this.#channel.send('connect', settings);
            }
            listen(data) {
              const audio = _utils.RealtimeUtils.arrayBufferToBase64(data.mono);
              this.#channel.send('listen', {
                audio
              });
            }
          }
          exports.ClientSession = ClientSession;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ClientSession",
        "name": "ClientSession"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ClientSession') && _export("ClientSession", ClientSession = require ? require('./index').ClientSession : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfd3NDb25maWciLCJyZXF1aXJlIiwiX2NoYW5uZWwiLCJfZXZlbnRzIiwiU0VSVkVSX1VSTCIsInVybCIsIkNoYW5uZWwiLCJFdmVudHMiLCJjaGFubmVsIiwiY3JlYXRlZCIsInN0YXR1cyIsImVycm9yIiwiY29uc3RydWN0b3IiLCJvbiIsIm9ub3BlbiIsIm9uY2xvc2UiLCJvbm1lc3NhZ2UiLCIjb25vcGVuIiwidHJpZ2dlciIsIiNvbmNsb3NlIiwibWVzc2FnZSIsImV2ZW50IiwiZGF0YSIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJ3YXJuIiwiZXhjIiwibG9nIiwiY2xlYW51cCIsIiNjbGVhbnVwIiwib2ZmIiwiY29ubmVjdCIsImNsb3NlIiwic2VuZCIsInN0cmluZ2lmeSIsImV4cG9ydHMiLCJfYmFzZSIsIl91dGlscyIsIkNsaWVudFNlc3Npb24iLCJDbGllbnRTZXNzaW9uQmFzZSIsInNldHRpbmdzIiwib2siLCJ1cGRhdGUiLCJsaXN0ZW4iLCJhdWRpbyIsIlJlYWx0aW1lVXRpbHMiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwibW9ubyJdLCJzb3VyY2VzIjpbIi8vY2hhbm5lbC50cy8iLCIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxTQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxRQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFQSxNQUFNRyxVQUFVLEdBQUdKLFNBQUEsQ0FBQUssR0FBSztVQUVsQixNQUFPQyxPQUFRLFNBQVFILE9BQUEsQ0FBQUksTUFBTTtZQUNsQyxDQUFBQyxPQUFRO1lBQ1IsQ0FBQUMsT0FBUSxHQUFHLEtBQUs7WUFFaEIsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE1BQU07Z0JBQUVBO2NBQU0sQ0FBRSxHQUFH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QUFFQztjQUFJLENBQUUsQ0FBQyxDQUFDO1lBQ3BEOztVQUNBZSxPQUFBLENBQUEvQixPQUFBLEdBQUFBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEVELElBQUFnQyxLQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUMsUUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQXNDLE1BQUEsR0FBQXRDLE9BQUE7VUFFTztVQUFVLE1BQU91QyxhQUFjLFNBQVFGLEtBQUEsQ0FBQUcsaUJBQWlCO1lBQzlELENBQUFqQyxPQUFRO1lBRVIsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFGLE9BQVEsQ0FBQ0UsTUFBTTtZQUM1QjtZQUVBLElBQUlDLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBSCxPQUFRLENBQUNHLEtBQUs7WUFDM0I7WUFFQUMsWUFBWThCLFFBQXVDO2NBQ2xELE1BQU1sQyxPQUFPLEdBQUcsSUFBSU4sUUFBQSxDQUFBSSxPQUFPLEVBQUU7Y0FDN0IsS0FBSyxDQUFDRSxPQUFPLEVBQUVBLE9BQU8sRUFBRWtDLFFBQVEsQ0FBQztjQUVqQyxJQUFJLENBQUMsQ0FBQWxDLE9BQVEsR0FBR0EsT0FBTztZQUN4QjtZQUVBLE1BQU15QixPQUFPQSxDQUFBO2NBQ1osTUFBTVUsRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFuQyxPQUFRLENBQUN5QixPQUFPLEVBQUU7Y0FDeENVLEVBQUUsS0FBSyxNQUFNLEtBQUssQ0FBQ1YsT0FBTyxFQUFFLENBQUM7Y0FFN0IsT0FBT1UsRUFBRTtZQUNWO1lBRUEsTUFBTVQsS0FBS0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBMUIsT0FBUSxDQUFDMEIsS0FBSyxFQUFFO2NBQ3JCLE9BQU8sTUFBTSxLQUFLLENBQUNBLEtBQUssRUFBRTtZQUMzQjtZQUVBLE1BQU1VLE1BQU1BLENBQUNGLFFBQXlEO2NBQ3JFLElBQUksQ0FBQyxDQUFBbEMsT0FBUSxDQUFDMkIsSUFBSSxDQUFDLFNBQVMsRUFBRU8sUUFBUSxDQUFDO1lBQ3hDO1lBRUFHLE1BQU1BLENBQUN2QixJQUEyQztjQUNqRCxNQUFNd0IsS0FBSyxHQUFHUCxNQUFBLENBQUFRLGFBQWEsQ0FBQ0MsbUJBQW1CLENBQUMxQixJQUFJLENBQUMyQixJQUFJLENBQUM7Y0FDMUQsSUFBSSxDQUFDLENBQUF6QyxPQUFRLENBQUMyQixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUFFVztjQUFLLENBQUUsQ0FBQztZQUN4Qzs7VUFDQVQsT0FBQSxDQUFBRyxhQUFBLEdBQUFBLGFBQUEiLCJpZ25vcmVMaXN0IjpbXX0=