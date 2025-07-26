System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/utils", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.1/realtime/audio/player", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, ActiveConversation, ClientSessionBase, __beyond_pkg, hmr;
  _export({
    ActiveConversation: void 0,
    ClientSessionBase: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_1 = _aimpactAgentsApi041RealtimeUtils;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi041RealtimeAudioPlayer) {
      dependency_3 = _aimpactAgentsApi041RealtimeAudioPlayer;
    }, function (_beyondJsKernel0112Core) {
      dependency_4 = _beyondJsKernel0112Core;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/utils', dependency_1], ['@beyond-js/events/events', dependency_2], ['@aimpact/agents-api/realtime/audio/player', dependency_3], ['@beyond-js/kernel/core', dependency_4]]);
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./active-conversation
      *************************************/
      ims.set('./active-conversation', {
        hash: 3633841940,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActiveConversation = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          /*bundle*/
          class ActiveConversation {
            #session;
            #conversation;
            constructor(session) {
              this.#session = session;
            }
            async set(conversation) {
              this.#conversation = conversation;
            }
            #onItemAudioDelta(event, data) {
              const buffer = _utils.RealtimeUtils.base64ToArrayBuffer(data.delta);
              const delta = new Int16Array(buffer);
              delta && this.#conversation._process(event, data, delta);
              delta && this.#session.player.add16BitPCM(delta, data.item.id);
            }
            #onSpeechStarted(event, data) {
              this.#session.player.interrupt();
              this.#conversation._process(event, data);
            }
            process(event, data) {
              switch (event) {
                case 'conversation.item.created':
                  this.#conversation._process(event, data);
                  break;
                case 'conversation.item.audio.delta':
                  this.#onItemAudioDelta(event, data);
                  break;
                case 'user.speech.started':
                  this.#onSpeechStarted(event, data);
                  break;
              }
            }
          }
          exports.ActiveConversation = ActiveConversation;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4147255333,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSessionBase = void 0;
          var _events = require("@beyond-js/events/events");
          var _vad = require("./vad");
          var _activeConversation = require("./active-conversation");
          var _recorder = require("./recorder");
          var _player = require("@aimpact/agents-api/realtime/audio/player");
          var _router = require("./router");
          /*bundle*/
          class ClientSessionBase extends _events.Events {
            #conversation;
            get conversation() {
              return this.#conversation;
            }
            #router;
            get router() {
              return this.#router;
            }
            /**
             * Voice Audio Detection
             */
            #vad;
            get vad() {
              return this.#vad;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            #player;
            get player() {
              return this.#player;
            }
            get valid() {
              return !this.#recorder.error && !this.#player.error;
            }
            #listeners = {
              listen: this.listen.bind(this)
            };
            constructor(agent, session, settings) {
              super();
              this.#vad = new _vad.VoiceAudioDetection(this, settings.vad);
              this.#conversation = new _activeConversation.ActiveConversation(this);
              this.#player = new _player.StreamPlayer({
                samplerate: 24000
              });
              this.#recorder = new _recorder.Recorder();
              this.#router = new _router.Router(this, agent, session);
            }
            async connect() {
              this.#router.initialise();
              await this.#player.connect();
              this.#recorder.on('chunk', this.#listeners.listen);
              return true;
            }
            async close() {
              this.#router.release();
              this.#recorder.stop();
              this.#recorder.off('chunk', this.#listeners.listen);
              this.#player.disconnect();
            }
          }
          exports.ClientSessionBase = ClientSessionBase;
        }
      });

      /**************************
      INTERNAL MODULE: ./recorder
      **************************/

      ims.set('./recorder', {
        hash: 1714002639,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          class Recorder extends _core.Events {
            #device;
            get device() {
              return this.#device;
            }
            set device(device) {
              if (this.#device === device) return;
              if (this.#device && this.status !== 'stopped') {
                throw `Recorder is actually in "${this.status}" state. Stop it before changing the device`;
              }
              this.#device = device;
            }
            get status() {
              return this.#device?.recorder?.status;
            }
            get error() {
              return this.#device?.recorder?.error;
            }
            #onchunk = data => {
              if (!data) return;
              this.trigger('chunk', data);
            };
            async record() {
              const device = this.#device;
              if (!device) throw new Error(`Device hasn't been selected`);
              const config = {
                samplerate: 24000,
                chunks: {
                  size: 8192
                },
                debug: false
              };
              await device.record(config);
              if (device.recorder.error) {
                console.log('Recorder Error:', device.recorder.error);
                return;
              }
              device.recorder.on('chunk', this.#onchunk);
            }
            async pause() {
              const device = this.#device;
              if (!device) throw new Error(`Device hasn't been selected`);
              device.recorder.off('chunk', this.#onchunk);
              await device.recorder.pause();
            }
            async stop() {
              const device = this.#device;
              if (!device) return;
              device.recorder.off('chunk', this.#onchunk);
              if (['stopped', 'stopping', 'error'].includes(device.recorder?.status)) return;
              await device.recorder.stop();
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /************************
      INTERNAL MODULE: ./router
      ************************/

      ims.set('./router', {
        hash: 4197830608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Router = void 0;
          var EventSource;
          (function (EventSource) {
            EventSource[EventSource["AGENT"] = 0] = "AGENT";
            EventSource[EventSource["SESSION"] = 1] = "SESSION";
          })(EventSource || (EventSource = {}));
          var EventDestination;
          (function (EventDestination) {
            EventDestination[EventDestination["CONVERSATION"] = 0] = "CONVERSATION";
            EventDestination[EventDestination["CLIENT"] = 1] = "CLIENT";
          })(EventDestination || (EventDestination = {}));
          /**
           * The router routes the events from the agent (or the session of the agent), to
           * the client, or the conversation of the client.
           */
          class Router {
            #client;
            #agent;
            #session;
            /**
             * By default:
             * - The events received from the session (EventSource.SESSION) are routed to
             * the client, and the events.
             * - The events received from the agent are routed to active conversation.
             */
            #events = new Map([['open', {
              source: EventSource.SESSION,
              name: 'session.open'
            }], ['close', {
              source: EventSource.SESSION,
              name: 'session.close'
            }], ['session.ready', {
              source: EventSource.AGENT,
              destination: EventDestination.CLIENT
            }], ['session.created', {
              source: EventSource.AGENT,
              destination: EventDestination.CLIENT
            }], ['conversation.item.created', {
              source: EventSource.AGENT
            }], ['conversation.item.audio.delta', {
              source: EventSource.AGENT
            }], ['user.speech.started', {
              source: EventSource.AGENT
            }]]);
            #listeners = new Map();
            #initialised = false;
            get initialised() {
              return this.#initialised;
            }
            constructor(client, agent, session) {
              this.#client = client;
              this.#agent = agent;
              this.#session = session;
            }
            initialise() {
              if (this.#initialised) return;
              this.#initialised = true;
              this.#events.forEach((specs, event) => {
                const listener = data => {
                  const destination = (() => {
                    if (specs.destination !== void 0) return specs.destination;
                    // As specs.destination is not set, set the default
                    return specs.source === EventSource.SESSION ? EventDestination.CLIENT : EventDestination.CONVERSATION;
                  })();
                  // The event name can be renamed when triggered
                  const renamed = specs.name ? specs.name : event;
                  if (destination === EventDestination.CLIENT) {
                    this.#client.trigger(renamed, data);
                  } else if (destination === EventDestination.CONVERSATION) {
                    this.#client.conversation.process(renamed, data);
                  }
                };
                this.#listeners.set(event, listener);
                specs.source === EventSource.SESSION && this.#session.on(event, listener);
                specs.source === EventSource.AGENT && this.#agent.on(event, listener);
              });
            }
            release() {
              if (!this.#initialised) throw new Error(`Router hasn't been initialised`);
              this.#initialised = false;
              this.#events.forEach((specs, event) => {
                const listener = this.#listeners.get(event);
                specs.source === EventSource.SESSION && this.#session.off(event, listener);
                specs.source === EventSource.AGENT && this.#agent.off(event, listener);
              });
            }
          }
          exports.Router = Router;
        }
      });

      /*********************
      INTERNAL MODULE: ./vad
      *********************/

      ims.set('./vad', {
        hash: 963292677,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.VoiceAudioDetection = void 0;
          class VoiceAudioDetection {
            #session;
            #value;
            get activated() {
              return !!this.#value;
            }
            constructor(session, value) {
              this.#session = session;
              this.#value = value;
            }
            async fetch() {}
            /**
             * Switch between Manual <> VAD mode for communication
             */
            async active(value) {
              const {
                recorder
              } = this.#session;
              !value && recorder.status === 'recording' && (await recorder.pause());
              // agent.updateSession({
              // 	turn_detection: value === 'none' ? null : { type: 'server_vad' }
              // });
              // if (value === 'server_vad' && agent.connected) {
              // 	await recorder.record(data => client.appendInputAudio(data.mono));
              // }
            }
          }
          exports.VoiceAudioDetection = VoiceAudioDetection;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./active-conversation",
        "from": "ActiveConversation",
        "name": "ActiveConversation"
      }, {
        "im": "./index",
        "from": "ClientSessionBase",
        "name": "ClientSessionBase"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActiveConversation') && _export("ActiveConversation", ActiveConversation = require ? require('./active-conversation').ActiveConversation : value);
        (require || prop === 'ClientSessionBase') && _export("ClientSessionBase", ClientSessionBase = require ? require('./index').ClientSessionBase : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXRpbHMiLCJyZXF1aXJlIiwiQWN0aXZlQ29udmVyc2F0aW9uIiwic2Vzc2lvbiIsImNvbnZlcnNhdGlvbiIsImNvbnN0cnVjdG9yIiwic2V0Iiwib25JdGVtQXVkaW9EZWx0YSIsIiNvbkl0ZW1BdWRpb0RlbHRhIiwiZXZlbnQiLCJkYXRhIiwiYnVmZmVyIiwiUmVhbHRpbWVVdGlscyIsImJhc2U2NFRvQXJyYXlCdWZmZXIiLCJkZWx0YSIsIkludDE2QXJyYXkiLCJfcHJvY2VzcyIsInBsYXllciIsImFkZDE2Qml0UENNIiwiaXRlbSIsImlkIiwib25TcGVlY2hTdGFydGVkIiwiI29uU3BlZWNoU3RhcnRlZCIsImludGVycnVwdCIsInByb2Nlc3MiLCJleHBvcnRzIiwiX2V2ZW50cyIsIl92YWQiLCJfYWN0aXZlQ29udmVyc2F0aW9uIiwiX3JlY29yZGVyIiwiX3BsYXllciIsIl9yb3V0ZXIiLCJDbGllbnRTZXNzaW9uQmFzZSIsIkV2ZW50cyIsInJvdXRlciIsInZhZCIsInJlY29yZGVyIiwidmFsaWQiLCJlcnJvciIsImxpc3RlbmVycyIsImxpc3RlbiIsImJpbmQiLCJhZ2VudCIsInNldHRpbmdzIiwiVm9pY2VBdWRpb0RldGVjdGlvbiIsIlN0cmVhbVBsYXllciIsInNhbXBsZXJhdGUiLCJSZWNvcmRlciIsIlJvdXRlciIsImNvbm5lY3QiLCJpbml0aWFsaXNlIiwib24iLCJjbG9zZSIsInJlbGVhc2UiLCJzdG9wIiwib2ZmIiwiZGlzY29ubmVjdCIsIl9jb3JlIiwiZGV2aWNlIiwic3RhdHVzIiwib25jaHVuayIsInRyaWdnZXIiLCJyZWNvcmQiLCJFcnJvciIsImNvbmZpZyIsImNodW5rcyIsInNpemUiLCJkZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJwYXVzZSIsImluY2x1ZGVzIiwiRXZlbnRTb3VyY2UiLCJFdmVudERlc3RpbmF0aW9uIiwiY2xpZW50IiwiZXZlbnRzIiwiTWFwIiwic291cmNlIiwiU0VTU0lPTiIsIm5hbWUiLCJBR0VOVCIsImRlc3RpbmF0aW9uIiwiQ0xJRU5UIiwiaW5pdGlhbGlzZWQiLCJmb3JFYWNoIiwic3BlY3MiLCJsaXN0ZW5lciIsIkNPTlZFUlNBVElPTiIsInJlbmFtZWQiLCJnZXQiLCJ2YWx1ZSIsImFjdGl2YXRlZCIsImZldGNoIiwiYWN0aXZlIl0sInNvdXJjZXMiOlsiLy9hY3RpdmUtY29udmVyc2F0aW9uLnRzLyIsIi8vaW5kZXgudHMvIiwiLy9yZWNvcmRlci50cy8iLCIvL3JvdXRlci50cy8iLCIvL3ZhZC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQU9BLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUVPO1VBQVUsTUFBT0Msa0JBQWtCO1lBQ3pDLENBQUFDLE9BQVE7WUFDUixDQUFBQyxZQUFhO1lBRWJDLFlBQVlGLE9BQTBCO2NBQ3JDLElBQUksQ0FBQyxDQUFBQSxPQUFRLEdBQUdBLE9BQU87WUFDeEI7WUFFQSxNQUFNRyxHQUFHQSxDQUFDRixZQUEwQjtjQUNuQyxJQUFJLENBQUMsQ0FBQUEsWUFBYSxHQUFHQSxZQUFZO1lBQ2xDO1lBRUEsQ0FBQUcsZ0JBQWlCQyxDQUFDQyxLQUFzQyxFQUFFQyxJQUErQjtjQUN4RixNQUFNQyxNQUFNLEdBQUdYLE1BQUEsQ0FBQVksYUFBYSxDQUFDQyxtQkFBbUIsQ0FBQ0gsSUFBSSxDQUFDSSxLQUFLLENBQUM7Y0FDNUQsTUFBTUEsS0FBSyxHQUFHLElBQUlDLFVBQVUsQ0FBQ0osTUFBTSxDQUFDO2NBRXBDRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFWLFlBQWEsQ0FBQ1ksUUFBUSxDQUFDUCxLQUFLLEVBQUVDLElBQUksRUFBRUksS0FBSyxDQUFDO2NBQ3hEQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFYLE9BQVEsQ0FBQ2MsTUFBTSxDQUFDQyxXQUFXLENBQUNKLEtBQUssRUFBRUosSUFBSSxDQUFDUyxJQUFJLENBQUNDLEVBQUUsQ0FBQztZQUMvRDtZQUVBLENBQUFDLGVBQWdCQyxDQUFDYixLQUE0QixFQUFFQyxJQUE2QjtjQUMzRSxJQUFJLENBQUMsQ0FBQVAsT0FBUSxDQUFDYyxNQUFNLENBQUNNLFNBQVMsRUFBRTtjQUNoQyxJQUFJLENBQUMsQ0FBQW5CLFlBQWEsQ0FBQ1ksUUFBUSxDQUFDUCxLQUFLLEVBQUVDLElBQUksQ0FBQztZQUN6QztZQUVBYyxPQUFPQSxDQUFDZixLQUFhLEVBQUVDLElBQVM7Y0FDL0IsUUFBUUQsS0FBSztnQkFDWixLQUFLLDJCQUEyQjtrQkFDL0IsSUFBSSxDQUFDLENBQUFMLFlBQWEsQ0FBQ1ksUUFBUSxDQUFDUCxLQUFLLEVBQUVDLElBQUksQ0FBQztrQkFDeEM7Z0JBQ0QsS0FBSywrQkFBK0I7a0JBQ25DLElBQUksQ0FBQyxDQUFBSCxnQkFBaUIsQ0FBQ0UsS0FBSyxFQUFFQyxJQUFJLENBQUM7a0JBQ25DO2dCQUNELEtBQUsscUJBQXFCO2tCQUN6QixJQUFJLENBQUMsQ0FBQVcsZUFBZ0IsQ0FBQ1osS0FBSyxFQUFFQyxJQUFJLENBQUM7a0JBQ2xDOztZQUVIOztVQUNBZSxPQUFBLENBQUF2QixrQkFBQSxHQUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q0QsSUFBQXdCLE9BQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsSUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixtQkFBQSxHQUFBM0IsT0FBQTtVQUNBLElBQUE0QixTQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLE9BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsT0FBQSxHQUFBOUIsT0FBQTtVQUVPO1VBQVUsTUFBZ0IrQixpQkFBa0IsU0FBUU4sT0FBQSxDQUFBTyxNQUFNO1lBR2hFLENBQUE3QixZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxDQUFBOEIsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUE7OztZQUdBLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSTtZQUNqQjtZQUVBLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFuQixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxJQUFJb0IsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQUQsUUFBUyxDQUFDRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXJCLE1BQU8sQ0FBQ3FCLEtBQUs7WUFDcEQ7WUFFQSxDQUFBQyxTQUFVLEdBQUc7Y0FBRUMsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSTtZQUFDLENBQUU7WUFFL0NwQyxZQUFZcUMsS0FBYSxFQUFFdkMsT0FBZSxFQUFFd0MsUUFBdUM7Y0FDbEYsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFSLEdBQUksR0FBRyxJQUFJUixJQUFBLENBQUFpQixtQkFBbUIsQ0FBQyxJQUFJLEVBQUVELFFBQVEsQ0FBQ1IsR0FBRyxDQUFDO2NBQ3ZELElBQUksQ0FBQyxDQUFBL0IsWUFBYSxHQUFHLElBQUl3QixtQkFBQSxDQUFBMUIsa0JBQWtCLENBQUMsSUFBSSxDQUFDO2NBQ2pELElBQUksQ0FBQyxDQUFBZSxNQUFPLEdBQUcsSUFBSWEsT0FBQSxDQUFBZSxZQUFZLENBQUM7Z0JBQUVDLFVBQVUsRUFBRTtjQUFLLENBQUUsQ0FBQztjQUN0RCxJQUFJLENBQUMsQ0FBQVYsUUFBUyxHQUFHLElBQUlQLFNBQUEsQ0FBQWtCLFFBQVEsRUFBRTtjQUUvQixJQUFJLENBQUMsQ0FBQWIsTUFBTyxHQUFHLElBQUlILE9BQUEsQ0FBQWlCLE1BQU0sQ0FBQyxJQUFJLEVBQUVOLEtBQUssRUFBRXZDLE9BQU8sQ0FBQztZQUNoRDtZQUVBLE1BQU04QyxPQUFPQSxDQUFBO2NBQ1osSUFBSSxDQUFDLENBQUFmLE1BQU8sQ0FBQ2dCLFVBQVUsRUFBRTtjQUN6QixNQUFNLElBQUksQ0FBQyxDQUFBakMsTUFBTyxDQUFDZ0MsT0FBTyxFQUFFO2NBQzVCLElBQUksQ0FBQyxDQUFBYixRQUFTLENBQUNlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFaLFNBQVUsQ0FBQ0MsTUFBTSxDQUFDO2NBQ2xELE9BQU8sSUFBSTtZQUNaO1lBRUEsTUFBTVksS0FBS0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBbEIsTUFBTyxDQUFDbUIsT0FBTyxFQUFFO2NBQ3RCLElBQUksQ0FBQyxDQUFBakIsUUFBUyxDQUFDa0IsSUFBSSxFQUFFO2NBQ3JCLElBQUksQ0FBQyxDQUFBbEIsUUFBUyxDQUFDbUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQWhCLFNBQVUsQ0FBQ0MsTUFBTSxDQUFDO2NBQ25ELElBQUksQ0FBQyxDQUFBdkIsTUFBTyxDQUFDdUMsVUFBVSxFQUFFO1lBQzFCOztVQUdBL0IsT0FBQSxDQUFBTyxpQkFBQSxHQUFBQSxpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUQsSUFBQXlCLEtBQUEsR0FBQXhELE9BQUE7VUFFTSxNQUFPOEMsUUFBUyxTQUFRVSxLQUFBLENBQUF4QixNQUFNO1lBQ25DLENBQUF5QixNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxJQUFJQSxNQUFNQSxDQUFDQSxNQUFlO2NBQ3pCLElBQUksSUFBSSxDQUFDLENBQUFBLE1BQU8sS0FBS0EsTUFBTSxFQUFFO2NBQzdCLElBQUksSUFBSSxDQUFDLENBQUFBLE1BQU8sSUFBSSxJQUFJLENBQUNDLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBQzlDLE1BQU0sNEJBQTRCLElBQUksQ0FBQ0EsTUFBTSw2Q0FBNkM7O2NBRzNGLElBQUksQ0FBQyxDQUFBRCxNQUFPLEdBQUdBLE1BQU07WUFDdEI7WUFFQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUQsTUFBTyxFQUFFdEIsUUFBUSxFQUFFdUIsTUFBTTtZQUN0QztZQUVBLElBQUlyQixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQW9CLE1BQU8sRUFBRXRCLFFBQVEsRUFBRUUsS0FBSztZQUNyQztZQUVBLENBQUFzQixPQUFRLEdBQUlsRCxJQUE2QyxJQUFJO2NBQzVELElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQ1gsSUFBSSxDQUFDbUQsT0FBTyxDQUFDLE9BQU8sRUFBRW5ELElBQUksQ0FBQztZQUM1QixDQUFDO1lBRUQsTUFBTW9ELE1BQU1BLENBQUE7Y0FDWCxNQUFNSixNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUFBLE1BQU87Y0FDM0IsSUFBSSxDQUFDQSxNQUFNLEVBQUUsTUFBTSxJQUFJSyxLQUFLLENBQUMsNkJBQTZCLENBQUM7Y0FFM0QsTUFBTUMsTUFBTSxHQUFHO2dCQUFFbEIsVUFBVSxFQUFFLEtBQUs7Z0JBQUVtQixNQUFNLEVBQUU7a0JBQUVDLElBQUksRUFBRTtnQkFBSSxDQUFFO2dCQUFFQyxLQUFLLEVBQUU7Y0FBSyxDQUFFO2NBQzFFLE1BQU1ULE1BQU0sQ0FBQ0ksTUFBTSxDQUFDRSxNQUFNLENBQUM7Y0FDM0IsSUFBSU4sTUFBTSxDQUFDdEIsUUFBUSxDQUFDRSxLQUFLLEVBQUU7Z0JBQzFCOEIsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLEVBQUVYLE1BQU0sQ0FBQ3RCLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDO2dCQUNyRDs7Y0FHRG9CLE1BQU0sQ0FBQ3RCLFFBQVEsQ0FBQ2UsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQVMsT0FBUSxDQUFDO1lBQzNDO1lBRUEsTUFBTVUsS0FBS0EsQ0FBQTtjQUNWLE1BQU1aLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQUEsTUFBTztjQUMzQixJQUFJLENBQUNBLE1BQU0sRUFBRSxNQUFNLElBQUlLLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztjQUUzREwsTUFBTSxDQUFDdEIsUUFBUSxDQUFDbUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQUssT0FBUSxDQUFDO2NBQzNDLE1BQU1GLE1BQU0sQ0FBQ3RCLFFBQVEsQ0FBQ2tDLEtBQUssRUFBRTtZQUM5QjtZQUVBLE1BQU1oQixJQUFJQSxDQUFBO2NBQ1QsTUFBTUksTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBQSxNQUFPO2NBQzNCLElBQUksQ0FBQ0EsTUFBTSxFQUFFO2NBRWJBLE1BQU0sQ0FBQ3RCLFFBQVEsQ0FBQ21CLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFLLE9BQVEsQ0FBQztjQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQ1csUUFBUSxDQUFDYixNQUFNLENBQUN0QixRQUFRLEVBQUV1QixNQUFNLENBQUMsRUFBRTtjQUN4RSxNQUFNRCxNQUFNLENBQUN0QixRQUFRLENBQUNrQixJQUFJLEVBQUU7WUFDN0I7O1VBQ0E3QixPQUFBLENBQUFzQixRQUFBLEdBQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERELElBQUt5QixXQUdKO1VBSEQsV0FBS0EsV0FBVztZQUNmQSxXQUFBLENBQUFBLFdBQUEsd0JBQVM7WUFDVEEsV0FBQSxDQUFBQSxXQUFBLDRCQUFPO1VBQ1IsQ0FBQyxFQUhJQSxXQUFXLEtBQVhBLFdBQVc7VUFLaEIsSUFBS0MsZ0JBR0o7VUFIRCxXQUFLQSxnQkFBZ0I7WUFDcEJBLGdCQUFBLENBQUFBLGdCQUFBLHNDQUFnQjtZQUNoQkEsZ0JBQUEsQ0FBQUEsZ0JBQUEsMEJBQU07VUFDUCxDQUFDLEVBSElBLGdCQUFnQixLQUFoQkEsZ0JBQWdCO1VBV3JCOzs7O1VBSU0sTUFBT3pCLE1BQU07WUFDbEIsQ0FBQTBCLE1BQU87WUFDUCxDQUFBaEMsS0FBTTtZQUNOLENBQUF2QyxPQUFRO1lBRVI7Ozs7OztZQU1BLENBQUF3RSxNQUFPLEdBQXdELElBQUlDLEdBQUcsQ0FBQyxDQUN0RSxDQUFDLE1BQU0sRUFBRTtjQUFFQyxNQUFNLEVBQUVMLFdBQVcsQ0FBQ00sT0FBTztjQUFFQyxJQUFJLEVBQUU7WUFBYyxDQUFFLENBQUMsRUFDL0QsQ0FBQyxPQUFPLEVBQUU7Y0FBRUYsTUFBTSxFQUFFTCxXQUFXLENBQUNNLE9BQU87Y0FBRUMsSUFBSSxFQUFFO1lBQWUsQ0FBRSxDQUFDLEVBQ2pFLENBQUMsZUFBZSxFQUFFO2NBQUVGLE1BQU0sRUFBRUwsV0FBVyxDQUFDUSxLQUFLO2NBQUVDLFdBQVcsRUFBRVIsZ0JBQWdCLENBQUNTO1lBQU0sQ0FBRSxDQUFDLEVBQ3RGLENBQUMsaUJBQWlCLEVBQUU7Y0FBRUwsTUFBTSxFQUFFTCxXQUFXLENBQUNRLEtBQUs7Y0FBRUMsV0FBVyxFQUFFUixnQkFBZ0IsQ0FBQ1M7WUFBTSxDQUFFLENBQUMsRUFDeEYsQ0FBQywyQkFBMkIsRUFBRTtjQUFFTCxNQUFNLEVBQUVMLFdBQVcsQ0FBQ1E7WUFBSyxDQUFFLENBQUMsRUFDNUQsQ0FBQywrQkFBK0IsRUFBRTtjQUFFSCxNQUFNLEVBQUVMLFdBQVcsQ0FBQ1E7WUFBSyxDQUFFLENBQUMsRUFDaEUsQ0FBQyxxQkFBcUIsRUFBRTtjQUFFSCxNQUFNLEVBQUVMLFdBQVcsQ0FBQ1E7WUFBSyxDQUFFLENBQUMsQ0FDdEQsQ0FBQztZQUNGLENBQUF6QyxTQUFVLEdBQXFDLElBQUlxQyxHQUFHLEVBQUU7WUFFeEQsQ0FBQU8sV0FBWSxHQUFHLEtBQUs7WUFDcEIsSUFBSUEsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDLENBQUFBLFdBQVk7WUFDekI7WUFFQTlFLFlBQVlxRSxNQUF5QixFQUFFaEMsS0FBYSxFQUFFdkMsT0FBZTtjQUNwRSxJQUFJLENBQUMsQ0FBQXVFLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQWhDLEtBQU0sR0FBR0EsS0FBSztjQUNuQixJQUFJLENBQUMsQ0FBQXZDLE9BQVEsR0FBR0EsT0FBTztZQUN4QjtZQUVBK0MsVUFBVUEsQ0FBQTtjQUNULElBQUksSUFBSSxDQUFDLENBQUFpQyxXQUFZLEVBQUU7Y0FDdkIsSUFBSSxDQUFDLENBQUFBLFdBQVksR0FBRyxJQUFJO2NBRXhCLElBQUksQ0FBQyxDQUFBUixNQUFPLENBQUNTLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLEVBQUU1RSxLQUFLLEtBQUk7Z0JBQ3JDLE1BQU02RSxRQUFRLEdBQUk1RSxJQUFVLElBQUk7a0JBQy9CLE1BQU11RSxXQUFXLEdBQXFCLENBQUMsTUFBSztvQkFDM0MsSUFBSUksS0FBSyxDQUFDSixXQUFXLEtBQUssS0FBSyxDQUFDLEVBQUUsT0FBT0ksS0FBSyxDQUFDSixXQUFXO29CQUUxRDtvQkFDQSxPQUFPSSxLQUFLLENBQUNSLE1BQU0sS0FBS0wsV0FBVyxDQUFDTSxPQUFPLEdBQ3hDTCxnQkFBZ0IsQ0FBQ1MsTUFBTSxHQUN2QlQsZ0JBQWdCLENBQUNjLFlBQVk7a0JBQ2pDLENBQUMsRUFBQyxDQUFFO2tCQUVKO2tCQUNBLE1BQU1DLE9BQU8sR0FBR0gsS0FBSyxDQUFDTixJQUFJLEdBQUdNLEtBQUssQ0FBQ04sSUFBSSxHQUFHdEUsS0FBSztrQkFFL0MsSUFBSXdFLFdBQVcsS0FBS1IsZ0JBQWdCLENBQUNTLE1BQU0sRUFBRTtvQkFDNUMsSUFBSSxDQUFDLENBQUFSLE1BQU8sQ0FBQ2IsT0FBTyxDQUFDMkIsT0FBTyxFQUFFOUUsSUFBSSxDQUFDO21CQUNuQyxNQUFNLElBQUl1RSxXQUFXLEtBQUtSLGdCQUFnQixDQUFDYyxZQUFZLEVBQUU7b0JBQ3pELElBQUksQ0FBQyxDQUFBYixNQUFPLENBQUN0RSxZQUFZLENBQUNvQixPQUFPLENBQUNnRSxPQUFPLEVBQUU5RSxJQUFJLENBQUM7O2dCQUVsRCxDQUFDO2dCQUVELElBQUksQ0FBQyxDQUFBNkIsU0FBVSxDQUFDakMsR0FBRyxDQUFDRyxLQUFLLEVBQUU2RSxRQUFRLENBQUM7Z0JBQ3BDRCxLQUFLLENBQUNSLE1BQU0sS0FBS0wsV0FBVyxDQUFDTSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUEzRSxPQUFRLENBQUNnRCxFQUFFLENBQUMxQyxLQUFLLEVBQUU2RSxRQUFRLENBQUM7Z0JBQ3pFRCxLQUFLLENBQUNSLE1BQU0sS0FBS0wsV0FBVyxDQUFDUSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUF0QyxLQUFNLENBQUNTLEVBQUUsQ0FBQzFDLEtBQUssRUFBRTZFLFFBQVEsQ0FBQztjQUN0RSxDQUFDLENBQUM7WUFDSDtZQUVBakMsT0FBT0EsQ0FBQTtjQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQThCLFdBQVksRUFBRSxNQUFNLElBQUlwQixLQUFLLENBQUMsZ0NBQWdDLENBQUM7Y0FDekUsSUFBSSxDQUFDLENBQUFvQixXQUFZLEdBQUcsS0FBSztjQUV6QixJQUFJLENBQUMsQ0FBQVIsTUFBTyxDQUFDUyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxFQUFFNUUsS0FBSyxLQUFJO2dCQUNyQyxNQUFNNkUsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBL0MsU0FBVSxDQUFDa0QsR0FBRyxDQUFDaEYsS0FBSyxDQUFDO2dCQUUzQzRFLEtBQUssQ0FBQ1IsTUFBTSxLQUFLTCxXQUFXLENBQUNNLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQTNFLE9BQVEsQ0FBQ29ELEdBQUcsQ0FBQzlDLEtBQUssRUFBRTZFLFFBQVEsQ0FBQztnQkFDMUVELEtBQUssQ0FBQ1IsTUFBTSxLQUFLTCxXQUFXLENBQUNRLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQXRDLEtBQU0sQ0FBQ2EsR0FBRyxDQUFDOUMsS0FBSyxFQUFFNkUsUUFBUSxDQUFDO2NBQ3ZFLENBQUMsQ0FBQztZQUNIOztVQUNBN0QsT0FBQSxDQUFBdUIsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xHSyxNQUFPSixtQkFBbUI7WUFDL0IsQ0FBQXpDLE9BQVE7WUFFUixDQUFBdUYsS0FBTTtZQUVOLElBQUlDLFNBQVNBLENBQUE7Y0FDWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQUQsS0FBTTtZQUNyQjtZQUVBckYsWUFBWUYsT0FBMEIsRUFBRXVGLEtBQTJCO2NBQ2xFLElBQUksQ0FBQyxDQUFBdkYsT0FBUSxHQUFHQSxPQUFPO2NBQ3ZCLElBQUksQ0FBQyxDQUFBdUYsS0FBTSxHQUFHQSxLQUFLO1lBQ3BCO1lBRUEsTUFBTUUsS0FBS0EsQ0FBQSxHQUFJO1lBRWY7OztZQUdBLE1BQU1DLE1BQU1BLENBQUNILEtBQWM7Y0FDMUIsTUFBTTtnQkFBRXREO2NBQVEsQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBakMsT0FBUTtjQUNsQyxDQUFDdUYsS0FBSyxJQUFJdEQsUUFBUSxDQUFDdUIsTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNdkIsUUFBUSxDQUFDa0MsS0FBSyxFQUFFLENBQUM7Y0FFckU7Y0FDQTtjQUNBO2NBRUE7Y0FDQTtjQUNBO1lBQ0Q7O1VBQ0E3QyxPQUFBLENBQUFtQixtQkFBQSxHQUFBQSxtQkFBQSIsImlnbm9yZUxpc3QiOltdfQ==