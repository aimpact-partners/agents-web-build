System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.1.1/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Recorder, __beyond_pkg, hmr;
  _export("Recorder", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive211Model) {
      dependency_2 = _beyondJsReactive211Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.8"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "2.1.0"], ["socket.io-client", "4.8.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/recorder"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2533696947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Recorder = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
          class Recorder extends _model.ReactiveModel {
            #initialised = false;
            #source;
            #stream;
            #startTime;
            #initPromise;
            #stopPromise;
            #audioContext;
            #recordingPromise;
            #mediaRecorder;
            #chunks = [];
            get chunks() {
              return this.#chunks;
            }
            #status;
            get status() {
              return this.#status;
            }
            #recording = false;
            get recording() {
              return this.#recording;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #analyser;
            get analyser() {
              return this.#analyser;
            }
            #speechRecognition;
            #transcription = '';
            get transcription() {
              return this.#transcription;
            }
            #promiseSpeech;
            #permissions;
            #permissionObserver;
            #permissionState;
            constructor() {
              super();
              this.init();
            }
            async hasPermissions() {
              try {
                await navigator.mediaDevices.getUserMedia({
                  audio: true
                });
                return true;
              } catch (e) {
                console.log('aja');
                this.#error = e;
                return false;
              }
            }
            async init() {
              try {
                const permissions = await navigator.permissions.query({
                  name: 'microphone'
                });
                this.#permissions = permissions.state === 'granted';
                this.#permissionObserver = permissions;
                this.#permissionState = permissions.state;
                permissions.onchange = this.#onChangeStatus.bind(this);
              } catch (e) {
                // the permissions.query microphone validation is not supported in safari and firefox
                // this.#permissions = await this.getPermissions();
              } finally {
                this.ready = true;
              }
            }
            #onChangeStatus() {
              this.#permissionState = this.#permissionObserver.state;
              this.trigger('change');
            }
            getSpeechRecognition() {
              //@ts-ignore
              this.#speechRecognition = new webkitSpeechRecognition();
              this.#speechRecognition.lang = 'es-ES';
              this.#speechRecognition.continuous = true;
              this.#speechRecognition.interimResults = true;
              // this.#speechRecognition.lang = 'en-US'; // Change this to the desired language
              this.#promiseSpeech = new _core.PendingPromise();
              this.#speechRecognition.onresult = event => {
                let interimTranscript = '';
                let finalTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                  if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                    this.#transcription = finalTranscript;
                    this.#promiseSpeech.resolve(this.#transcription);
                  } else {
                    interimTranscript += event.results[i][0].transcript;
                  }
                }
              };
              this.#speechRecognition.onerror = event => console.error('error in transcription');
              this.#speechRecognition.start();
            }
            #onDataAvailable = event => {
              if (event.data.size === 0) return;
              this.#chunks.push(event.data);
              this.trigger('dataavailable');
            };
            #startRecording = (stream, specs) => {
              this.#mediaRecorder = new MediaRecorder(stream);
              this.#stream = stream;
              // Create an AudioContext
              this.#audioContext = new (globalThis.AudioContext || globalThis.webkitAudioContext)();
              // Create an AnalyserNode
              this.#analyser = this.#audioContext.createAnalyser();
              // Create a source from the stream and connect it to the analyser
              this.#source = this.#audioContext.createMediaStreamSource(stream);
              if (specs.analyser) this.#source.connect(this.#analyser);
              //@ts-ignore
              if (specs.speechRecognition && 'webkitSpeechRecognition' in globalThis) {
                this.getSpeechRecognition();
              }
              this.#mediaRecorder.addEventListener('dataavailable', this.#onDataAvailable);
            };
            async initialise(specs = {}) {
              if (this.#initPromise) return await this.#initPromise;
              this.#initPromise = new _core.PendingPromise();
              globalThis?.navigator.mediaDevices.getUserMedia({
                audio: true
              }).then(stream => this.#startRecording(stream, specs)).catch(error => {
                this.#error = error.message;
                this.#initPromise.reject();
              }).finally(() => {
                this.#initialised = true;
                this.#initPromise.resolve();
              });
              return this.#initPromise;
            }
            record(specs = {
              analyser: true
            }) {
              try {
                if (this.#recordingPromise) return this.#recordingPromise;
                this.#recordingPromise = new _core.PendingPromise();
                if (this.#recording) {
                  throw new Error('Wait for recorder to be stopped and transcription ready');
                }
                this.#status = 'started';
                this.#recording = true;
                this.trigger('change');
                globalThis?.navigator.mediaDevices.getUserMedia({
                  audio: true
                }).then(async stream => {
                  this.#startRecording(stream, specs);
                  this.#recordingPromise.resolve();
                  this.#initialised = true;
                  this.#mediaRecorder?.start();
                }).catch(error => {
                  console.error(error);
                  this.#error = error.message;
                  this.#recordingPromise.reject();
                });
                return this.#recordingPromise;
              } catch (e) {} finally {}
            }
            stopStream = () => {
              //stopping the capturing request by stopping all the tracks on the active stream
              this.#stream.getTracks() //get all tracks from the stream
              .forEach(track => track.stop()); //stop each one
            };
            stop() {
              if (!this.#mediaRecorder) {
                console.warn('this.#mediaRecorder no initialize');
                return;
              }
              if (this.#stopPromise) return this.#stopPromise;
              this.#stopPromise = new _core.PendingPromise();
              if (!this.#recording) throw new Error('Recorder is not currently recording');
              this.#status = 'stopped';
              const stop = () => {
                this.#chunks = [];
                this.#recording = false;
                this.#mediaRecorder.addEventListener('stop', async () => {
                  const audio = new Blob(this.#chunks, {
                    type: this.#mediaRecorder.mimeType
                  });
                  //@ts-ignore
                  this.#audio = audio;
                  const onFinish = () => {
                    this.#stopPromise.resolve(audio);
                    this.#stopPromise = undefined;
                  };
                  if (this.#promiseSpeech) {
                    this.#promiseSpeech.then(onFinish);
                  } else {
                    if (this.#stopPromise) {
                      onFinish();
                    }
                  }
                  if (this.#recordingPromise) {
                    this.#recordingPromise.resolve(audio);
                    this.#recordingPromise = undefined;
                  }
                  this.stopStream();
                  this.#mediaRecorder = undefined;
                  this.#stream = undefined;
                  this.#initPromise = undefined;
                });
                this.#mediaRecorder?.stop();
                this.#speechRecognition?.stop();
                this.trigger('change');
              };
              this.#initialised ? stop() : this.record().then(stop);
              return this.#stopPromise;
            }
          }
          exports.Recorder = Recorder;
        }
      });

      /***************************
      INTERNAL MODULE: ./interface
      ***************************/

      ims.set('./interface', {
        hash: 939057662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Recorder",
        "name": "Recorder"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Recorder') && _export("Recorder", Recorder = require ? require('./index').Recorder : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJfbW9kZWwiLCJSZWNvcmRlciIsIlJlYWN0aXZlTW9kZWwiLCJpbml0aWFsaXNlZCIsInNvdXJjZSIsInN0cmVhbSIsInN0YXJ0VGltZSIsImluaXRQcm9taXNlIiwic3RvcFByb21pc2UiLCJhdWRpb0NvbnRleHQiLCJyZWNvcmRpbmdQcm9taXNlIiwibWVkaWFSZWNvcmRlciIsImNodW5rcyIsInN0YXR1cyIsInJlY29yZGluZyIsImVycm9yIiwidmFsaWQiLCJhdWRpbyIsImFuYWx5c2VyIiwic3BlZWNoUmVjb2duaXRpb24iLCJ0cmFuc2NyaXB0aW9uIiwicHJvbWlzZVNwZWVjaCIsInBlcm1pc3Npb25zIiwicGVybWlzc2lvbk9ic2VydmVyIiwicGVybWlzc2lvblN0YXRlIiwiY29uc3RydWN0b3IiLCJpbml0IiwiaGFzUGVybWlzc2lvbnMiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJlIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwibmFtZSIsInN0YXRlIiwib25jaGFuZ2UiLCJvbkNoYW5nZVN0YXR1cyIsImJpbmQiLCJyZWFkeSIsIiNvbkNoYW5nZVN0YXR1cyIsInRyaWdnZXIiLCJnZXRTcGVlY2hSZWNvZ25pdGlvbiIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwibGFuZyIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsIlBlbmRpbmdQcm9taXNlIiwib25yZXN1bHQiLCJldmVudCIsImludGVyaW1UcmFuc2NyaXB0IiwiZmluYWxUcmFuc2NyaXB0IiwiaSIsInJlc3VsdEluZGV4IiwicmVzdWx0cyIsImxlbmd0aCIsImlzRmluYWwiLCJ0cmFuc2NyaXB0IiwicmVzb2x2ZSIsIm9uZXJyb3IiLCJzdGFydCIsIm9uRGF0YUF2YWlsYWJsZSIsImRhdGEiLCJzaXplIiwicHVzaCIsInN0YXJ0UmVjb3JkaW5nIiwiI3N0YXJ0UmVjb3JkaW5nIiwic3BlY3MiLCJNZWRpYVJlY29yZGVyIiwiZ2xvYmFsVGhpcyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXRpYWxpc2UiLCJ0aGVuIiwiY2F0Y2giLCJtZXNzYWdlIiwicmVqZWN0IiwiZmluYWxseSIsInJlY29yZCIsIkVycm9yIiwic3RvcFN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJ3YXJuIiwiQmxvYiIsInR5cGUiLCJtaW1lVHlwZSIsIm9uRmluaXNoIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwic291cmNlcyI6WyIvL2luZGV4LnRzLyIsIi8vaW50ZXJmYWNlLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFHTztVQUFXLE1BRVpFLFFBQVMsU0FBUUQsTUFBQSxDQUFBRSxhQUF1QjtZQUM3QyxDQUFBQyxXQUFZLEdBQUcsS0FBSztZQUNwQixDQUFBQyxNQUFPO1lBQ1AsQ0FBQUMsTUFBTztZQUNQLENBQUFDLFNBQVU7WUFDVixDQUFBQyxXQUFZO1lBQ1osQ0FBQUMsV0FBWTtZQUNaLENBQUFDLFlBQWE7WUFDYixDQUFBQyxnQkFBaUI7WUFDakIsQ0FBQUMsYUFBYztZQUVkLENBQUFDLE1BQU8sR0FBVyxFQUFFO1lBQ3BCLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lB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