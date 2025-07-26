System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/audio/packer", "@beyond-js/events@0.0.7/events", "@beyond-js/kernel@0.1.12/core", "@aimpact/agents-api@0.4.1/realtime/audio/recorder/worklet/bridge"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, IDevice, devices, IRecorderConfig, Recorder, __beyond_pkg, hmr;
  _export({
    IDevice: void 0,
    devices: void 0,
    IRecorderConfig: void 0,
    Recorder: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAudioPacker) {
      dependency_1 = _aimpactAgentsApi041RealtimeAudioPacker;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorderWorkletBridge) {
      dependency_4 = _aimpactAgentsApi041RealtimeAudioRecorderWorkletBridge;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/recorder"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/audio/packer', dependency_1], ['@beyond-js/events/events', dependency_2], ['@beyond-js/kernel/core', dependency_3], ['@aimpact/agents-api/realtime/audio/recorder/worklet/bridge', dependency_4]]);
      ims = new Map();
      /************************
      INTERNAL MODULE: ./chunks
      ************************/
      ims.set('./chunks', {
        hash: 2640714357,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RecorderChunks = void 0;
          var _packer = require("@aimpact/agents-api/realtime/audio/packer");
          class RecorderChunks {
            #buffer = {
              raw: new ArrayBuffer(0),
              mono: new ArrayBuffer(0)
            };
            #size;
            constructor(config) {
              this.#size = config?.size ?? 8192;
            }
            process({
              raw,
              mono
            }) {
              if (!this.#size) return {
                raw,
                mono
              };
              const buffer = this.#buffer;
              this.#buffer = {
                raw: _packer.WavPacker.mergeBuffers(buffer.raw, raw),
                mono: _packer.WavPacker.mergeBuffers(buffer.mono, mono)
              };
              if (this.#buffer.mono.byteLength >= this.#size) {
                const buffer = this.#buffer;
                this.#buffer = {
                  raw: new ArrayBuffer(0),
                  mono: new ArrayBuffer(0)
                };
                return buffer;
              }
            }
            pause() {
              this.#buffer.raw.byteLength && this.process(this.#buffer);
            }
          }
          exports.RecorderChunks = RecorderChunks;
        }
      });

      /************************
      INTERNAL MODULE: ./device
      ************************/

      ims.set('./device', {
        hash: 1032545960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Device = void 0;
          var _recorder = require("./recorder");
          class Device {
            #id;
            get id() {
              return this.#id;
            }
            #label;
            get label() {
              return this.#label;
            }
            #groupId;
            get groupId() {
              return this.#groupId;
            }
            #default;
            get default() {
              return this.#default;
            }
            #recorder;
            get recorder() {
              return this.#recorder;
            }
            constructor(device) {
              this.#id = device.deviceId;
              this.#label = device.label;
              this.#default = !!device.default;
              this.#groupId = device.groupId;
            }
            async record(config) {
              !this.#recorder && (this.#recorder = new _recorder.Recorder(this, config));
              await this.#recorder.record();
            }
            async pause() {
              if (!this.#recorder) throw new Error('Recorder has not been initialized');
              await this.#recorder.pause();
            }
            async stop() {
              if (!this.#recorder) throw new Error('Recorder has not been initialized');
              await this.#recorder.stop();
            }
          }
          exports.Device = Device;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2424296560,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.devices = void 0;
          var _permission = require("./permission");
          var _device = require("./device");
          /*bundle*/
          const devices = exports.devices = new class Devices extends Map {
            #available = false;
            get available() {
              return this.#available;
            }
            get default() {
              const devices = [...this.values()];
              const def = devices.find(device => device.default);
              return def ? def : devices[0];
            }
            constructor() {
              super();
              if (!navigator.mediaDevices || !('getUserMedia' in navigator.mediaDevices)) {
                this.#available = false;
                return;
              }
              navigator.mediaDevices.addEventListener('devicechange', async () => await this.prepare());
            }
            async prepare() {
              await _permission.permissions.request();
              if (_permission.permissions.state !== 'granted') return false;
              const devices = await (async () => {
                const devices = await navigator.mediaDevices.enumerateDevices();
                // The default device comes duplicated with another device in the same group
                // "Default - Internal Microphone (Built-in)" / "Internal Microphone (Built-in)"
                const def = devices.find(device => device.deviceId === 'default');
                // Only take the audioinputs devices and not the default device,
                // as we need to take the other device in the same group that the default device is
                const audioinputs = devices.filter(device => device.kind === 'audioinput' && device !== def);
                // Search for the other device in the same group as the default device
                // (this is going to be the real default device)
                const other = audioinputs.find(device => device.groupId === def.groupId);
                const replacement = other ? other : def;
                replacement.default = true;
                audioinputs.unshift(replacement);
                return audioinputs;
              })();
              devices.forEach(item => {
                const device = new _device.Device(item);
                this.set(item.deviceId, device);
              });
            }
          }();
        }
      });

      /****************************
      INTERNAL MODULE: ./permission
      ****************************/

      ims.set('./permission', {
        hash: 3084074630,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.permissions = void 0;
          var _events = require("@beyond-js/events/events");
          var _core = require("@beyond-js/kernel/core");
          const permissions = exports.permissions = new class MediaPermissions extends _events.Events {
            #ready;
            get ready() {
              if (this.#ready) return this.#ready;
              this.#ready = new _core.PendingPromise();
              // In some versions of TypeScript, the "microphone" permission is not
              // included by default in the allowed list of permission names.
              const name = 'microphone';
              const permission = navigator.permissions?.query({
                name
              });
              if (!(permission instanceof Promise)) {
                this.#ready.resolve();
                return;
              }
              permission.then(permission => {
                this.#permission = permission;
                permission.onchange = this.#onchange.bind(this);
                this.#ready.resolve();
              }).catch(error => {
                this.#ready.resolve();
              });
              return this.#ready;
            }
            #permission; // Actually not available in safari
            #state;
            get state() {
              return this.#state;
            }
            #error;
            get error() {
              return this.#error;
            }
            #set(state) {
              state !== this.#state && (this.#state = state) && this.trigger('change');
            }
            /**
             * Not available in Safari
             */
            #onchange(status) {
              this.#set(status.state);
            }
            async request() {
              await this.#ready;
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                if (!stream) return this.#set('denied');
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                return this.#set('granted');
              } catch (error) {
                this.#error = error;
                return this.#set('denied');
              }
            }
            release() {
              if (this.#permission) this.#permission.onchange = void 0;
            }
          }();
        }
      });

      /**************************
      INTERNAL MODULE: ./recorder
      **************************/

      ims.set('./recorder', {
        hash: 1741352668,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _bridge = require("@aimpact/agents-api/realtime/audio/recorder/worklet/bridge");
          var _events = require("@beyond-js/events/events");
          var _core = require("@beyond-js/kernel/core");
          var _chunks = require("./chunks");
          /*bundle*/ /**
                      * Records live stream of user audio as PCM16 "audio/wav" data
                      */
          class Recorder extends _events.Events {
            #worklet;
            #chunks;
            #device;
            get device() {
              return this.#device;
            }
            #config;
            get config() {
              return this.#config;
            }
            #status = 'stopped';
            get status() {
              return this.#status;
            }
            #error;
            get error() {
              return this.#error;
            }
            #ready;
            get ready() {
              if (this.#ready) return this.#ready;
              this.#ready = new _core.PendingPromise();
              this.#setup().then(() => this.#ready.resolve()).catch(error => {
                this.#error = error;
                this.#ready.resolve();
              });
              return this.#ready;
            }
            #context;
            constructor(device, config) {
              super();
              this.#device = device;
              this.#config = config;
              this.#config.samplerate = this.#config.samplerate ?? 44100;
              this.#chunks = new _chunks.RecorderChunks(config.chunks);
            }
            /**
             * Do not call it directly, access the .ready property instead
             * @returns
             */
            async #setup() {
              const context = {};
              try {
                const config = {
                  audio: {
                    deviceId: {
                      exact: this.#device.id
                    }
                  }
                };
                context.stream = await navigator.mediaDevices.getUserMedia(config);
              } catch (error) {
                this.#error = error;
                return;
              }
              // Set up AudioContext and connect the audio stream source
              context.context = new AudioContext({
                sampleRate: this.#config.samplerate
              });
              context.media = context.context.createMediaStreamSource(context.stream);
              // Create an AudioWorkletNode for processing audio data
              const worklet = this.#worklet = new _bridge.RecorderWorkletBridge(context.context);
              await worklet.setup();
              if (worklet.error) {
                this.#error = worklet.error;
                return;
              }
              worklet.create();
              const node = context.media.connect(worklet.node);
              const analyser = context.context.createAnalyser();
              analyser.fftSize = 8192;
              analyser.smoothingTimeConstant = 0.1;
              node.connect(analyser);
              if (this.#config.debug) {
                console.warn(`Warning: Output to speakers may affect sound quality, ` + `especially due to system audio feedback preventative measures. Use only for debugging`);
                analyser.connect(context.context.destination);
              }
              // Store references for future use
              this.#context = context;
            }
            #onchunk = ({
              raw,
              mono
            }) => {
              const chunk = this.#chunks.process({
                raw,
                mono
              });
              this.trigger('chunk', chunk);
            };
            async record() {
              await this.ready;
              if (!this.#worklet.check()) return;
              if (!['stopped', 'paused'].includes(this.#status)) {
                throw new Error(`Cannot start recording as it is not stopped or paused`);
              }
              this.#status = 'starting';
              try {
                const config = this.#config;
                await this.#worklet.dispatch('record', {
                  config
                });
                this.#status = 'recording';
              } catch (exc) {
                this.#status = 'stopped';
                throw exc;
              }
              this.#worklet.on('chunk', this.#onchunk);
            }
            async pause() {
              if (!this.#context) throw new Error(`Recorder not initialized`);
              if (!this.#worklet.check()) return;
              this.#worklet.off('chunk', this.#onchunk);
              this.#status = 'pausing';
              await this.#worklet.dispatch('pause');
              this.#status = 'paused';
              this.#chunks.pause();
            }
            async stop() {
              if (!this.#context) throw new Error(`Recorder not initialized`);
              if (!this.#worklet.check()) return;
              this.#worklet.off('chunk', this.#onchunk);
              this.#status = 'stopping';
              await this.#worklet.dispatch('stop');
              this.#status = 'stopped';
              // Stop all audio tracks to release the microphone
              const tracks = this.#context.stream.getTracks();
              tracks.forEach(track => track.stop());
            }
          }
          exports.Recorder = Recorder;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./device",
        "from": "IDevice",
        "name": "IDevice"
      }, {
        "im": "./index",
        "from": "devices",
        "name": "devices"
      }, {
        "im": "./recorder",
        "from": "IRecorderConfig",
        "name": "IRecorderConfig"
      }, {
        "im": "./recorder",
        "from": "Recorder",
        "name": "Recorder"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IDevice') && _export("IDevice", IDevice = require ? require('./device').IDevice : value);
        (require || prop === 'devices') && _export("devices", devices = require ? require('./index').devices : value);
        (require || prop === 'IRecorderConfig') && _export("IRecorderConfig", IRecorderConfig = require ? require('./recorder').IRecorderConfig : value);
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./recorder').Recorder : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFja2VyIiwicmVxdWlyZSIsIlJlY29yZGVyQ2h1bmtzIiwiYnVmZmVyIiwicmF3IiwiQXJyYXlCdWZmZXIiLCJtb25vIiwic2l6ZSIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJvY2VzcyIsIldhdlBhY2tlciIsIm1lcmdlQnVmZmVycyIsImJ5dGVMZW5ndGgiLCJwYXVzZSIsImV4cG9ydHMiLCJfcmVjb3JkZXIiLCJEZXZpY2UiLCJpZCIsImxhYmVsIiwiZ3JvdXBJZCIsImRlZmF1bHQiLCJyZWNvcmRlciIsImRldmljZSIsImRldmljZUlkIiwicmVjb3JkIiwiUmVjb3JkZXIiLCJFcnJvciIsInN0b3AiLCJfcGVybWlzc2lvbiIsIl9kZXZpY2UiLCJkZXZpY2VzIiwiRGV2aWNlcyIsIk1hcCIsImF2YWlsYWJsZSIsInZhbHVlcyIsImRlZiIsImZpbmQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicHJlcGFyZSIsInBlcm1pc3Npb25zIiwicmVxdWVzdCIsInN0YXRlIiwiZW51bWVyYXRlRGV2aWNlcyIsImF1ZGlvaW5wdXRzIiwiZmlsdGVyIiwia2luZCIsIm90aGVyIiwicmVwbGFjZW1lbnQiLCJ1bnNoaWZ0IiwiZm9yRWFjaCIsIml0ZW0iLCJzZXQiLCJfZXZlbnRzIiwiX2NvcmUiLCJNZWRpYVBlcm1pc3Npb25zIiwiRXZlbnRzIiwicmVhZHkiLCJQZW5kaW5nUHJvbWlzZSIsIm5hbWUiLCJwZXJtaXNzaW9uIiwicXVlcnkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJvbmNoYW5nZSIsImJpbmQiLCJjYXRjaCIsImVycm9yIiwiI3NldCIsInRyaWdnZXIiLCIjb25jaGFuZ2UiLCJzdGF0dXMiLCJzdHJlYW0iLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRyYWNrcyIsImdldFRyYWNrcyIsInRyYWNrIiwicmVsZWFzZSIsIl9icmlkZ2UiLCJfY2h1bmtzIiwid29ya2xldCIsImNodW5rcyIsInNldHVwIiwiY29udGV4dCIsInNhbXBsZXJhdGUiLCIjc2V0dXAiLCJleGFjdCIsIkF1ZGlvQ29udGV4dCIsInNhbXBsZVJhdGUiLCJtZWRpYSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiUmVjb3JkZXJXb3JrbGV0QnJpZGdlIiwiY3JlYXRlIiwibm9kZSIsImNvbm5lY3QiLCJhbmFseXNlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsInNtb290aGluZ1RpbWVDb25zdGFudCIsImRlYnVnIiwiY29uc29sZSIsIndhcm4iLCJkZXN0aW5hdGlvbiIsIm9uY2h1bmsiLCIjb25jaHVuayIsImNodW5rIiwiY2hlY2siLCJpbmNsdWRlcyIsImRpc3BhdGNoIiwiZXhjIiwib24iLCJvZmYiXSwic291cmNlcyI6WyIvL2NodW5rcy50cy8iLCIvL2RldmljZS50cy8iLCIvL2luZGV4LnRzLyIsIi8vcGVybWlzc2lvbi50cy8iLCIvL3JlY29yZGVyLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7VUFNTSxNQUFPQyxjQUFjO1lBQzFCLENBQUFDLE1BQU8sR0FBNEM7Y0FBRUMsR0FBRyxFQUFFLElBQUlDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Y0FBRUMsSUFBSSxFQUFFLElBQUlELFdBQVcsQ0FBQyxDQUFDO1lBQUMsQ0FBRTtZQUN4RyxDQUFBRSxJQUFLO1lBRUxDLFlBQVlDLE1BQXNCO2NBQ2pDLElBQUksQ0FBQyxDQUFBRixJQUFLLEdBQUdFLE1BQU0sRUFBRUYsSUFBSSxJQUFJLElBQUk7WUFDbEM7WUFFQUcsT0FBT0EsQ0FBQztjQUFFTixHQUFHO2NBQUVFO1lBQUksQ0FBMkM7Y0FDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBQyxJQUFLLEVBQUUsT0FBTztnQkFBRUgsR0FBRztnQkFBRUU7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