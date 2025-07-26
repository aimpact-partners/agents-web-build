System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/audio/player/worklet/bridge", "@aimpact/agents-api@0.4.1/realtime/audio/player/analyzer"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, StreamPlayer, __beyond_pkg, hmr;
  _export("StreamPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAudioPlayerWorkletBridge) {
      dependency_1 = _aimpactAgentsApi041RealtimeAudioPlayerWorkletBridge;
    }, function (_aimpactAgentsApi041RealtimeAudioPlayerAnalyzer) {
      dependency_2 = _aimpactAgentsApi041RealtimeAudioPlayerAnalyzer;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/player"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/audio/player/worklet/bridge', dependency_1], ['@aimpact/agents-api/realtime/audio/player/analyzer', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1932622764,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StreamPlayer = void 0;
          var _bridge = require("@aimpact/agents-api/realtime/audio/player/worklet/bridge");
          var _analyzer = require("@aimpact/agents-api/realtime/audio/player/analyzer");
          /*bundle*/ /**
                      * Plays audio streams received in raw PCM16 chunks from the browser
                      */
          class StreamPlayer {
            #context;
            #stream;
            #analyzer;
            #samplerate;
            #trackSampleOffsets = {};
            #interruptedTrackIds = {};
            #error;
            get error() {
              return this.#error;
            }
            constructor({
              samplerate = 44100
            } = {}) {
              this.#samplerate = samplerate;
            }
            /**
             * Connects the audio context and enables output to speakers
             * @returns
             */
            async connect() {
              const context = this.#context = new AudioContext({
                sampleRate: this.#samplerate
              });
              context.state === 'suspended' && (await context.resume());
              // Create an AudioWorkletNode for processing audio data
              const worklet = this.#stream = new _bridge.StreamWorkletBridge(context);
              await worklet.setup();
              if (worklet.error) {
                this.#error = worklet.error;
                return;
              }
              const analyzer = context.createAnalyser();
              analyzer.fftSize = 8192;
              analyzer.smoothingTimeConstant = 0.1;
              this.#analyzer = analyzer;
            }
            /**
             * @TODO: Disconnect player
             */
            disconnect() {}
            /**
             * Gets the current frequency domain data from the playing track
             */
            getFrequencies(analysisType = 'frequency', minDecibels = -100, maxDecibels = -30) {
              if (!this.#analyzer) throw new Error('Not connected, please call .connect() first');
              return _analyzer.AudioAnalyzer.getFrequencies(this.#analyzer, this.#samplerate, null, analysisType, minDecibels, maxDecibels);
            }
            #start() {
              this.#stream.create();
              this.#stream.connect(this.#context.destination);
              this.#stream.on('stop', this.#onstop);
              this.#stream.on('offset', this.#onoffset);
              this.#analyzer.disconnect();
              this.#stream.connect(this.#analyzer);
            }
            #onstop = () => {
              this.#stream.off('stop', this.#onstop);
              this.#stream.off('offset', this.#onoffset);
              this.#stream.disconnect();
            };
            #onoffset = data => {
              const {
                requestId,
                trackId,
                offset
              } = data;
              const currentTime = offset / this.#samplerate;
              this.#trackSampleOffsets[requestId] = {
                trackId,
                offset,
                currentTime
              };
            };
            /**
             * Adds 16BitPCM data to the currently playing audio stream
             * You can add chunks beyond the current play point and they will be queued for play
             */
            add16BitPCM(arrayBuffer, trackId = 'default') {
              if (this.#error) {
                throw new Error(`Cannot play audio as player is in an invalid state. Check the 'error' property.`);
              }
              if (!this.#stream) throw new Error(`Stream player not connected`);
              if (typeof trackId !== 'string') throw new Error(`trackId must be a string`);
              if (this.#interruptedTrackIds[trackId]) return;
              !this.#stream.node && this.#start();
              const buffer = (() => {
                if (arrayBuffer instanceof Int16Array) return arrayBuffer;
                if (arrayBuffer instanceof ArrayBuffer) return new Int16Array(arrayBuffer);
                throw new Error(`argument must be Int16Array or ArrayBuffer`);
              })();
              this.#stream.dispatch('write', {
                buffer,
                trackId
              });
              return buffer;
            }
            /**
             * Gets the offset (sample count) of the currently playing stream
             */
            async getTrackSampleOffset(interrupt = false) {
              if (!this.#stream.node) return null;
              const requestId = crypto.randomUUID();
              this.#stream.dispatch(interrupt ? 'interrupt' : 'offset', {
                requestId
              });
              let trackSampleOffset;
              while (!trackSampleOffset) {
                trackSampleOffset = this.#trackSampleOffsets[requestId];
                await new Promise(resolve => setTimeout(() => resolve(), 1));
              }
              const {
                trackId
              } = trackSampleOffset;
              interrupt && trackId && (this.#interruptedTrackIds[trackId] = true);
              return trackSampleOffset;
            }
            /**
             * Strips the current stream and returns the sample offset of the audio
             */
            async interrupt() {
              return this.getTrackSampleOffset(true);
            }
          }
          exports.StreamPlayer = StreamPlayer;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "StreamPlayer",
        "name": "StreamPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'StreamPlayer') && _export("StreamPlayer", StreamPlayer = require ? require('./index').StreamPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnJpZGdlIiwicmVxdWlyZSIsIl9hbmFseXplciIsIlN0cmVhbVBsYXllciIsImNvbnRleHQiLCJzdHJlYW0iLCJhbmFseXplciIsInNhbXBsZXJhdGUiLCJ0cmFja1NhbXBsZU9mZnNldHMiLCJpbnRlcnJ1cHRlZFRyYWNrSWRzIiwiZXJyb3IiLCJjb25zdHJ1Y3RvciIsImNvbm5lY3QiLCJBdWRpb0NvbnRleHQiLCJzYW1wbGVSYXRlIiwic3RhdGUiLCJyZXN1bWUiLCJ3b3JrbGV0IiwiU3RyZWFtV29ya2xldEJyaWRnZSIsInNldHVwIiwiY3JlYXRlQW5hbHlzZXIiLCJmZnRTaXplIiwic21vb3RoaW5nVGltZUNvbnN0YW50IiwiZGlzY29ubmVjdCIsImdldEZyZXF1ZW5jaWVzIiwiYW5hbHlzaXNUeXBlIiwibWluRGVjaWJlbHMiLCJtYXhEZWNpYmVscyIsIkVycm9yIiwiQXVkaW9BbmFseXplciIsInN0YXJ0IiwiI3N0YXJ0IiwiY3JlYXRlIiwiZGVzdGluYXRpb24iLCJvbiIsIm9uc3RvcCIsIm9ub2Zmc2V0IiwiI29uc3RvcCIsIm9mZiIsImRhdGEiLCJyZXF1ZXN0SWQiLCJ0cmFja0lkIiwib2Zmc2V0IiwiY3VycmVudFRpbWUiLCJhZGQxNkJpdFBDTSIsImFycmF5QnVmZmVyIiwibm9kZSIsImJ1ZmZlciIsIkludDE2QXJyYXkiLCJBcnJheUJ1ZmZlciIsImRpc3BhdGNoIiwiZ2V0VHJhY2tTYW1wbGVPZmZzZXQiLCJpbnRlcnJ1cHQiLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwidHJhY2tTYW1wbGVPZmZzZXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLFNB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