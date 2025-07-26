System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, AudioAnalyzer, __beyond_pkg, hmr;
  _export("AudioAnalyzer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/player/analyzer"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./constants
      ***************************/
      ims.set('./constants', {
        hash: 2912939915,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.voiceFrequencyLabels = exports.voiceFrequencies = exports.noteFrequencyLabels = exports.noteFrequencies = void 0;
          /**
           * Constants for help with visualization
           * Helps map frequency ranges from Fast Fourier Transform
           * to human-interpretable ranges, notably music ranges and
           * human vocal ranges.
           */
          // Eighth octave frequencies
          const octave8Frequencies = [4186.01, 4434.92, 4698.63, 4978.03, 5274.04, 5587.65, 5919.91, 6271.93, 6644.88, 7040.0, 7458.62, 7902.13];
          // Labels for each of the above frequencies
          const octave8FrequencyLabels = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
          /**
           * All note frequencies from 1st to 8th octave
           * in format "A#8" (A#, 8th octave)
           */
          const noteFrequencies = exports.noteFrequencies = [];
          const noteFrequencyLabels = exports.noteFrequencyLabels = [];
          for (let i = 1; i <= 8; i++) {
            for (let f = 0; f < octave8Frequencies.length; f++) {
              const freq = octave8Frequencies[f];
              noteFrequencies.push(freq / Math.pow(2, 8 - i));
              noteFrequencyLabels.push(octave8FrequencyLabels[f] + i);
            }
          }
          /**
           * Subset of the note frequencies between 32 and 2000 Hz
           * 6 octave range: C1 to B6
           */
          const voiceFrequencyRange = [32.0, 2000.0];
          const voiceFrequencies = exports.voiceFrequencies = noteFrequencies.filter(freq => freq > voiceFrequencyRange[0] && freq < voiceFrequencyRange[1]);
          const voiceFrequencyLabels = exports.voiceFrequencyLabels = noteFrequencyLabels.filter((_, i) => noteFrequencies[i] > voiceFrequencyRange[0] && noteFrequencies[i] < voiceFrequencyRange[1]);
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3643216025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioAnalyzer = void 0;
          var _constants = require("./constants");
          /*bundle*/ /**
                      * Analyzes audio for visual output
                      */
          class AudioAnalyzer {
            fftResults;
            audio;
            context;
            analyser;
            sampleRate;
            audioBuffer;
            constructor(audioElement, audioBuffer = null) {
              this.fftResults = [];
              this.audio = audioElement;
              this.audioBuffer = audioBuffer;
              if (audioBuffer) {
                const {
                  length,
                  sampleRate
                } = audioBuffer;
                const offlineAudioContext = new OfflineAudioContext({
                  length,
                  sampleRate
                });
                const source = offlineAudioContext.createBufferSource();
                source.buffer = audioBuffer;
                const analyser = offlineAudioContext.createAnalyser();
                analyser.fftSize = 8192;
                analyser.smoothingTimeConstant = 0.1;
                source.connect(analyser);
                const renderQuantumInSeconds = 1 / 60;
                const durationInSeconds = length / sampleRate;
                const analyze = index => {
                  const suspendTime = renderQuantumInSeconds * index;
                  if (suspendTime < durationInSeconds) {
                    offlineAudioContext.suspend(suspendTime).then(() => {
                      const fftResult = new Float32Array(analyser.frequencyBinCount);
                      analyser.getFloatFrequencyData(fftResult);
                      this.fftResults.push(fftResult);
                      analyze(index + 1);
                    });
                  }
                  if (index === 1) {
                    offlineAudioContext.startRendering();
                  } else {
                    offlineAudioContext.resume();
                  }
                };
                source.start(0);
                analyze(1);
                this.context = offlineAudioContext;
                this.analyser = analyser;
                this.sampleRate = sampleRate;
              } else {
                const audioContext = new AudioContext();
                const track = audioContext.createMediaElementSource(audioElement);
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 8192;
                analyser.smoothingTimeConstant = 0.1;
                track.connect(analyser);
                analyser.connect(audioContext.destination);
                this.context = audioContext;
                this.analyser = analyser;
                this.sampleRate = this.context.sampleRate;
              }
            }
            /**
             * Retrieves frequency domain data from an AnalyserNode adjusted to a decibel range
             * returns human-readable formatting and labels
             */
            static getFrequencies(analyser, sampleRate, fftResult = null, analysisType = 'frequency', minDecibels = -100, maxDecibels = -30) {
              if (!fftResult) {
                fftResult = new Float32Array(analyser.frequencyBinCount);
                analyser.getFloatFrequencyData(fftResult);
              }
              const nyquistFrequency = sampleRate / 2;
              const frequencyStep = 1 / fftResult.length * nyquistFrequency;
              let outputValues;
              let frequencies;
              let labels;
              if (analysisType === 'music' || analysisType === 'voice') {
                const useFrequencies = analysisType === 'voice' ? _constants.voiceFrequencies : _constants.noteFrequencies;
                const aggregateOutput = Array(useFrequencies.length).fill(minDecibels);
                for (let i = 0; i < fftResult.length; i++) {
                  const frequency = i * frequencyStep;
                  const amplitude = fftResult[i];
                  for (let n = useFrequencies.length - 1; n >= 0; n--) {
                    if (frequency > useFrequencies[n]) {
                      aggregateOutput[n] = Math.max(aggregateOutput[n], amplitude);
                      break;
                    }
                  }
                }
                outputValues = aggregateOutput;
                frequencies = useFrequencies;
                labels = analysisType === 'voice' ? _constants.voiceFrequencyLabels : _constants.noteFrequencyLabels;
              } else {
                outputValues = Array.from(fftResult);
                frequencies = outputValues.map((_, i) => frequencyStep * i);
                labels = frequencies.map(f => `${f.toFixed(2)} Hz`);
              }
              const normalizedOutput = outputValues.map(v => {
                return Math.max(0, Math.min((v - minDecibels) / (maxDecibels - minDecibels), 1));
              });
              const values = new Float32Array(normalizedOutput);
              return {
                values,
                frequencies,
                labels
              };
            }
            /**
             * Gets the current frequency domain data from the playing audio track
             */
            getFrequencies(analysisType = 'frequency', minDecibels = -100, maxDecibels = -30) {
              let fftResult = null;
              if (this.audioBuffer && this.fftResults.length) {
                const pct = this.audio.currentTime / this.audio.duration;
                const index = Math.min(pct * this.fftResults.length | 0, this.fftResults.length - 1);
                fftResult = this.fftResults[index];
              }
              return AudioAnalyzer.getFrequencies(this.analyser, this.sampleRate, fftResult, analysisType, minDecibels, maxDecibels);
            }
            /**
             * Resume the internal AudioContext if it was suspended due to the lack of
             * user interaction when the AudioAnalyzer was instantiated.
             */
            async resumeIfSuspended() {
              if (this.context.state === 'suspended') {
                await this.context.resume();
              }
              return true;
            }
          }
          exports.AudioAnalyzer = AudioAnalyzer;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioAnalyzer",
        "name": "AudioAnalyzer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioAnalyzer') && _export("AudioAnalyzer", AudioAnalyzer = require ? require('./index').AudioAnalyzer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJvY3RhdmU4RnJlcXVlbmNpZXMiLCJvY3RhdmU4RnJlcXVlbmN5TGFiZWxzIiwibm90ZUZyZXF1ZW5jaWVzIiwiZXhwb3J0cyIsIm5vdGVGcmVxdWVuY3lMYWJlbHMiLCJpIiwiZiIsImxlbmd0aCIsImZyZXEiLCJwdXNoIiwiTWF0aCIsInBvdyIsInZvaWNlRnJlcXVlbmN5UmFuZ2UiLCJ2b2ljZUZyZXF1ZW5jaWVzIiwiZmlsdGVyIiwidm9pY2VGcmVxdWVuY3lMYWJlbHMiLCJfIiwiX2NvbnN0YW50cyIsInJlcXVpcmUiLCJBdWRpb0FuYWx5emVyIiwiZmZ0UmVzdWx0cyIsImF1ZGlvIiwiY29udGV4dCIsImFuYWx5c2VyIiwic2FtcGxlUmF0ZSIsImF1ZGlvQnVmZmVyIiwiY29uc3RydWN0b3IiLCJhdWRpb0VsZW1lbnQiLCJvZmZsaW5lQXVkaW9Db250ZXh0IiwiT2ZmbGluZUF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImJ1ZmZlciIsImNyZWF0ZUFuYWx5c2VyIiwiZmZ0U2l6ZSIsInNtb290aGluZ1RpbWVDb25zdGFudCIsImNvbm5lY3QiLCJyZW5kZXJRdWFudHVtSW5TZWNvbmRzIiwiZHVyYXRpb25JblNlY29uZHMiLCJhbmFseXplIiwiaW5kZXgiLCJzdXNwZW5kVGltZSIsInN1c3BlbmQiLCJ0aGVuIiwiZmZ0UmVzdWx0IiwiRmxvYXQzMkFycmF5IiwiZnJlcXVlbmN5QmluQ291bnQiLCJnZXRGbG9hdEZyZXF1ZW5jeURhdGEiLCJzdGFydFJlbmRlcmluZyIsInJlc3VtZSIsInN0YXJ0IiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwidHJhY2siLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJkZXN0aW5hdGlvbiIsImdldEZyZXF1ZW5jaWVzIiwiYW5hbHlzaXNUeXBlIiwibWluRGVjaWJlbHMiLCJtYXhEZWNpYmVscyIsIm55cXVpc3RGcmVxdWVuY3kiLCJmcmVxdWVuY3lTdGVwIiwib3V0cHV0VmFsdWVzIiwiZnJlcXVlbmNpZXMiLCJsYWJlbHMiLCJ1c2VGcmVxdWVuY2llcyIsImFnZ3JlZ2F0ZU91dHB1dCIsIkFycmF5IiwiZmlsbCIsImZyZXF1ZW5jeSIsImFtcGxpdHVkZSIsIm4iLCJtYXgiLCJmcm9tIiwibWFwIiwidG9GaXhlZCIsIm5vcm1hbGl6ZWRPdXRwdXQiLCJ2IiwibWluIiwidmFsdWVzIiwicGN0IiwiY3VycmVudFRpbWUiLCJkdXJhdGlvbiIsInJlc3VtZUlmU3VzcGVuZGVkIiwic3RhdGUiXSwic291cmNlcyI6WyIvL2NvbnN0YW50cy50cy8iLCIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOzs7Ozs7VUFPQTtVQUNBLE1BQU1BLGtCQUFrQixHQUFhLENBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUN6RztVQUVEO1VBQ0EsTUFBTUMsc0JBQXNCLEdBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztVQUUxRzs7OztVQUlPLE1BQU1DLGVBQWUsR0FBQUMsT0FBQSxDQUFBRCxlQUFBLEdBQWEsRUFBRTtVQUNwQyxNQUFNRSxtQkFBbUIsR0FBQUQsT0FBQSxDQUFBQyxtQkFBQSxHQUFhLEVBQUU7VUFDL0MsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksQ0FBQyxFQUFFQSxDQUFDLEVBQUUsRUFBRTtZQUM1QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENB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