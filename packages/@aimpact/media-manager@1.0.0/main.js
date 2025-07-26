System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/model", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, mediaDevice, __beyond_pkg, hmr;
  _export("mediaDevice", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210Model) {
      dependency_1 = _beyondJsReactive210Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_2 = _beyondJsKernel0112Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "2.1.0"], ["socket.io-client", "4.8.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/main"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/kernel/core', dependency_2]]);
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./desktop
      *************************/
      ims.set('./desktop', {
        hash: 1222938740,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DesktopMediaDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _files = require("./files");
          var _input = require("./input");
          var _xhr = require("./xhr");
          class MediaDevice extends _model.ReactiveModel {
            static instance;
            #selector;
            PLATFORM = 'DESKTOP';
            #stream;
            #constraints = {};
            #inputFile;
            #files;
            #promise;
            get isReady() {
              return true;
            }
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            async getUserMedia(constraints) {
              if (JSON.stringify(this.#constraints) === JSON.stringify(constraints)) return this.#stream;
              this.#constraints = constraints;
              this.#stream = await navigator.mediaDevices.getUserMedia(constraints);
              return this.#stream;
            }
            async activateCamera(constraints, selector) {
              const stream = await this.getUserMedia(constraints);
              this.#stream = stream;
              selector.srcObject = stream;
              this.#selector = selector;
            }
            static getInstance() {
              if (!MediaDevice.instance) {
                MediaDevice.instance = new MediaDevice();
              }
              return MediaDevice.instance;
            }
            desactivateCamera() {
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#constraints = undefined;
              this.#stream = undefined;
            }
            /**
             *
             * @param options
             * @returns
             */
            async getPicture() {
              const stream = await this.getUserMedia({
                video: true,
                audio: false
              });
              const imageCapture = new globalThis.ImageCapture(stream.getVideoTracks()[0]);
              const blob = await imageCapture.takePhoto();
              this.clean();
              return blob;
            }
            clean() {
              this.#constraints = {};
              if (!this.#stream) {
                return;
              }
              this.#stream.getTracks().forEach(track => {
                track.stop();
                this.#stream.removeTrack(track);
              });
              if (this.#selector) {
                this.#selector.srcObject = undefined;
                this.#selector = undefined;
              }
              this.#stream = undefined;
            }
            async getVideoStream() {
              return await this.getUserMedia({
                video: true,
                audio: false
              });
            }
            takePicture(options) {}
            openGallery(selector, specs = {}) {}
            upload(url, specs = {}) {
              const form = new FormData();
            }
            setInputFile(input) {
              this.#inputFile = new _input.InputFile(input, this.#files);
              return this.#inputFile;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                console.log(1, collection.entries);
                collection.entries.forEach(item => form.append(name, item));
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                console.log(1, this.#files.entries);
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          const DesktopMediaDevice = exports.DesktopMediaDevice = MediaDevice.getInstance();
        }
      });

      /******************************
      INTERNAL MODULE: ./file-manager
      ******************************/

      ims.set('./file-manager', {
        hash: 4123506600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getUrl = getUrl;
          var _core = require("@beyond-js/kernel/core");
          let promise;
          /**
           * REturns a valid url of the image loaded
           *
           * @platform mobile
           * @param data
           * @returns
           */
          function getUrl(data) {
            if (promise) return promise;
            promise = new _core.PendingPromise();
            const process = function processFile(entry) {
              entry.file(file => {
                const reader = new FileReader();
                reader.onloadend = a => {
                  promise.resolve(reader.result);
                  promise = undefined;
                };
                reader.readAsDataURL(file);
              });
            };
            globalThis.resolveLocalFileSystemURL(data, process);
            return promise;
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./files/index
      *****************************/

      ims.set('./files/index', {
        hash: 1266923743,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MediaFiles = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class MediaFiles extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            regExp = /[^\w\d.]/g;
            #errors = [];
            #promise;
            get errors() {
              return this.#errors;
            }
            _total = 0;
            get total() {
              return this._total;
            }
            set total(value) {
              if (value === this._total) return;
              this._total = value;
            }
            _items = new Map();
            get items() {
              return this._items;
            }
            get entries() {
              return [...this._items.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : 'any';
            }
            FILE_TYPE = Object.freeze({
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed'],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac' // FLAC files
              ]
            });
            #onload = event => {
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('load', this.#onload);
              }
              if (this.#specs.onload && typeof this.#specs.onload === 'function') {
                this.#specs.onload(event);
              }
            };
            #onloadend = (event, file) => {
              this.#loaded = this.#loaded + 1;
              file.src = event.target.result;
              this.#processFile(file);
              if (event.target?.removeEventListener) {
                event.target.removeEventListener('onloadend', this.#onloadend);
              }
              this.triggerEvent('file.loaded');
              if (this.#loaded === this._items.size) this.triggerEvent('loadend');
              if (this.#specs.onloadend && typeof this.#specs.onloadend === 'function') {
                this.#specs.onload(event);
              }
            };
            #processFile(file) {
              const name = file.name.replace(this.regExp, '');
              file = this._items.get(name);
              this._items.set(name, file);
            }
            #onerror = event => console.error(4, event);
            validate = file => {
              const isValid = !!this.FILE_TYPE[this.#type].find(item => item === file.type);
              if (!isValid) {
                this.#errors.push(file.name.replace(this.regExp, ''));
              }
              return isValid;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = await this.validate(file);
                if (!isValid) {
                  this.triggerEvent('error');
                  return;
                }
              }
              const reader = new FileReader();
              reader.onload = event => this.#onload(event);
              reader.onloadend = event => this.#onloadend(event, file);
              reader.onerror = event => this.#onerror(event);
              reader.readAsDataURL(file);
            };
            #validateLoad = () => {
              if (this.#loaded === this._items.size) {}
            };
            clean = () => {
              this._items = new Map();
              this.#loaded = 0;
            };
            /**
             * Read Local files uploaded from an input file
             *
             * @param fileList
             */
            readLocal = async fileList => {
              const promises = [];
              for (let i = 0; i < fileList.length; ++i) {
                const file = fileList[i];
                this._items.set(file.name.replace(this.regExp, ''), file);
                promises.push(this.#readFile(file));
              }
              await Promise.all(promises);
            };
            getMobileUrl(data) {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              const process = entry => {
                entry.file(file => {
                  const reader = new FileReader();
                  reader.onloadend = e => {
                    const imgBlob = new Blob([reader.result], {
                      type: file.type
                    });
                    const name = file.name.replace(this.regExp, '');
                    file.blob = imgBlob;
                    this._items.set(name, file);
                    //returns a valid element to show as image
                    this.#promise.resolve(URL.createObjectURL(imgBlob));
                    this.#promise = undefined;
                  };
                  this._items.set(file.name.replace(this.regExp, ''), file);
                  reader.readAsArrayBuffer(file);
                });
              };
              // cordova file plugin
              globalThis.resolveLocalFileSystemURL(data, process);
              return this.#promise;
            }
          }
          exports.MediaFiles = MediaFiles;
        }
      });

      /**************************
      INTERNAL MODULE: ./i-camera
      **************************/

      ims.set('./i-camera', {
        hash: 1945745868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3083892194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.mediaDevice = void 0;
          var _desktop = require("./desktop");
          var _mobile = require("./mobile");
          let media;
          function getMedia(clean = false) {
            if (clean) media = undefined;
            if (media) return media;
            const types = Object.freeze({
              MOBILE: 0,
              DESKTOP: 1
            });
            const deviceType = globalThis.cordova ? types.MOBILE : types.DESKTOP;
            const models = Object.freeze({
              1: _desktop.DesktopMediaDevice,
              0: _mobile.MobileMediaDevice
            });
            media = models[deviceType];
            return media;
          }
          const /*bundle*/mediaDevice = exports.mediaDevice = getMedia();
        }
      });

      /***********************
      INTERNAL MODULE: ./input
      ***********************/

      ims.set('./input', {
        hash: 2249157670,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InputFile = void 0;
          var _model = require("@beyond-js/reactive/model");
          class InputFile extends _model.ReactiveModel {
            #input = document.createElement('input');
            #errors;
            #selector;
            #files;
            get files() {
              return this.#files;
            }
            constructor(selector, files, specs = {}) {
              super();
              this.#selector = selector;
              this.#files = files;
              this.#files.on('error', this.getErrors);
              this.#files.on('loadend', this.filesLoaded);
              this.setAttributes(specs);
              if (selector) this.create();
            }
            filesLoaded = () => this.triggerEvent('loadend');
            pictureLoaded = () => this.triggerEvent('pictureLoaded');
            pictureLoading = () => this.triggerEvent('pictureLoading');
            // getErrors = () => (this.#errors = this.files.errors);
            getErrors = () => console.log('error');
            openDialog = () => {
              this.#input.click();
            };
            setAttributes = specs => {
              if (!specs) specs = {};
              let attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              for (let prop in attrs) {
                this.#input.setAttribute(prop, attrs[prop]);
              }
            };
            clean = async () => {
              return this.#files.clean();
              // await this.#mobileFiles.clean();
            };
            #onChangeInput = async event => {
              await this.clean();
              const target = event.currentTarget;
              this.#files.total = target.files.length;
              this.#files.readLocal(target.files);
            };
            create() {
              /**
               * Adds de click and change events into the input file
               */
              const addListeners = () => {
                if (!this.#selector) return;
                this.#selector.addEventListener('click', this.openDialog);
                this.#input.addEventListener('change', this.#onChangeInput);
              };
              this.#selector.after(this.#input);
              addListeners();
            }
          }
          exports.InputFile = InputFile;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 2938605133,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************
      INTERNAL MODULE: ./mobile
      ************************/

      ims.set('./mobile', {
        hash: 3878263831,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileMediaDevice = exports.MediaCameraDevice = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _files = require("./files");
          var _xhr = require("./xhr");
          class MediaCameraDevice extends _model.ReactiveModel {
            #source;
            #selector;
            PLATFORM = 'MOBILE';
            static instance;
            #files;
            #DEFAULT_OPTIONS = {
              // Some common settings are 20, 50, and 100
              quality: 80,
              destinationType: globalThis.Camera?.DestinationType?.FILE_URI,
              // In this app, dynamically set the picture source, Camera or photo gallery
              sourceType: 1,
              encodingType: globalThis.Camera?.EncodingType.JPEG,
              mediaType: globalThis.Camera?.MediaType.PICTURE,
              allowEdit: false,
              correctOrientation: true
            };
            constructor() {
              super();
              this.#files = new _files.MediaFiles(this, {});
            }
            #promise;
            get isReady() {
              return !!globalThis.Camera;
            }
            get source() {
              return this.#source;
            }
            #sourceType = 0;
            get sourceType() {
              return this.#sourceType;
            }
            set sourceType(value) {
              if (this.#sourceType === value) return;
              this.#sourceType = value;
            }
            #mediaType = globalThis.Camera?.MediaType.PICTURE; // default
            get mediaType() {
              return this.#mediaType;
            }
            set mediaType(value) {
              if (this.#mediaType === value) return;
              this.#mediaType = value;
            }
            set source(value) {
              this.#source = value;
            }
            onSuccess = async function successCallback(data) {
              const response = await this.#files.getMobileUrl(data);
              this.#promise.resolve(response);
              this.#promise = undefined;
            };
            onFail = message => {
              console.error('Failed because: ' + message);
              this.#promise.reject();
              this.#promise = undefined;
            };
            /**
             *
             * @param srcType number 1 = camera, 0 = photolibrary
             * @returns
             */
            setOptions = overwrites => {
              return {
                ...this.#DEFAULT_OPTIONS,
                ...overwrites
              };
            };
            getPicture = options => {
              if (this.#promise) return this.#promise;
              this.#promise = new _core.PendingPromise();
              navigator.camera?.getPicture(response => this.onSuccess(response), this.onFail, this.setOptions(options));
              return this.#promise;
            };
            openGallery(selector) {
              this.#selector = selector;
              return this.getPicture({
                sourceType: 0
              });
            }
            static getInstance() {
              if (!MediaCameraDevice.instance) {
                MediaCameraDevice.instance = new MediaCameraDevice();
              }
              return MediaCameraDevice.instance;
            }
            publish = async (url, params) => {
              try {
                const form = new FormData();
                const collection = this.#files;
                const name = collection.total > 1 ? `${params.name}[]` : params.name;
                collection.entries.forEach(item => {
                  form.append(name, item.blob, item.name);
                });
                for (let param in params) {
                  if (!params.hasOwnProperty(param)) continue;
                  form.append(param, params[param]);
                }
                const xhr = new _xhr.XHRLoader();
                const response = await xhr.upload(form, url);
                this.#files = new _files.MediaFiles(this, {});
                return response.json();
              } catch (error) {
                console.error(error);
              }
            };
          }
          exports.MediaCameraDevice = MediaCameraDevice;
          const MobileMediaDevice = exports.MobileMediaDevice = MediaCameraDevice.getInstance();
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 3466930214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class XHRLoader extends _model.ReactiveModel {
            promise;
            uploaded;
            progress;
            error;
            constructor() {
              super();
              this.promise = undefined;
              this.uploaded = false;
              this.progress = 0;
              this.error = false;
            }
            get uploading() {
              return !!this.promise;
            }
            get isUploaded() {
              return this.uploaded;
            }
            get uploadProgress() {
              return this.progress;
            }
            get hasError() {
              return this.error;
            }
            onProgress(event) {
              if (event.lengthComputable) {
                const percent = Math.round(event.loaded * 100 / event.total);
                this.progress = parseInt(percent.toString());
              }
              this.triggerEvent('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.triggerEvent('change');
              setTimeout(() => {
                this.promise = undefined;
                this.triggerEvent('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.triggerEvent('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.triggerEvent('change');
            }
            async upload(data, url) {
              try {
                const specs = {
                  method: 'post',
                  body: data
                };
                return fetch(url, specs);
              } catch (e) {
                console.error('error', e);
              }
            }
            abort() {
              if (this.promise) {
                this.promise.reject();
                this.triggerEvent('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "mediaDevice",
        "name": "mediaDevice"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'mediaDevice') && _export("mediaDevice", mediaDevice = require ? require('./index').mediaDevice : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2ZpbGVzIiwiX2lucHV0IiwiX3hociIsIk1lZGlhRGV2aWNlIiwiUmVhY3RpdmVNb2RlbCIsImluc3RhbmNlIiwic2VsZWN0b3IiLCJQTEFURk9STSIsInN0cmVhbSIsImNvbnN0cmFpbnRzIiwiaW5wdXRGaWxlIiwiZmlsZXMiLCJwcm9taXNlIiwiaXNSZWFkeSIsImNvbnN0cnVjdG9yIiwiTWVkaWFGaWxlcyIsImdldFVzZXJNZWRpYSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJhY3RpdmF0ZUNhbWVyYSIsInNyY09iamVjdCIsImdldEluc3RhbmNlIiwiZGVzYWN0aXZhdGVDYW1lcmEiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwicmVtb3ZlVHJhY2siLCJ1bmRlZmluZWQiLCJnZXRQaWN0dXJlIiwidmlkZW8iLCJhdWRpbyIsImltYWdlQ2FwdHVyZSIsImdsb2JhbFRoaXMiLCJJbWFnZUNhcHR1cmUiLCJnZXRWaWRlb1RyYWNrcyIsImJsb2IiLCJ0YWtlUGhvdG8iLCJjbGVhbiIsImdldFZpZGVvU3RyZWFtIiwidGFrZVBpY3R1cmUiLCJvcHRpb25zIiwib3BlbkdhbGxlcnkiLCJzcGVjcyIsInVwbG9hZCIsInVybCIsImZvcm0iLCJGb3JtRGF0YSIsInNldElucHV0RmlsZSIsImlucHV0IiwiSW5wdXRGaWxlIiwicHVibGlzaCIsInBhcmFtcyIsImNvbGxlY3Rpb24iLCJuYW1lIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZW50cmllcyIsIml0ZW0iLCJhcHBlbmQiLCJwYXJhbSIsImhhc093blByb3BlcnR5IiwieGhyIiwiWEhSTG9hZGVyIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJEZXNrdG9wTWVkaWFEZXZpY2UiLCJleHBvcnRzIiwiX2NvcmUiLCJnZXRVcmwiLCJkYXRhIiwiUGVuZGluZ1Byb21pc2UiLCJwcm9jZXNzIiwicHJvY2Vzc0ZpbGUiLCJlbnRyeSIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYSIsInJlc29sdmUiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCIsImxvYWRlZCIsInR5cGUiLCJyZWdFeHAiLCJlcnJvcnMiLCJfdG90YWwiLCJ2YWx1ZSIsIl9pdGVtcyIsIk1hcCIsIml0ZW1zIiwidmFsdWVzIiwicGFyZW50IiwiRklMRV9UWVBFIiwiT2JqZWN0IiwiZnJlZXplIiwiZG9jdW1lbnQiLCJpbWFnZSIsInppcCIsIm9ubG9hZCIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIiNvbmxvYWRlbmQiLCJzcmMiLCJ0cmlnZ2VyRXZlbnQiLCJzaXplIiwiI3Byb2Nlc3NGaWxlIiwicmVwbGFjZSIsImdldCIsInNldCIsIm9uZXJyb3IiLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJmaW5kIiwicHVzaCIsInJlYWRGaWxlIiwidmFsaWRhdGVMb2FkIiwiI3ZhbGlkYXRlTG9hZCIsInJlYWRMb2NhbCIsImZpbGVMaXN0IiwicHJvbWlzZXMiLCJpIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsImdldE1vYmlsZVVybCIsImUiLCJpbWdCbG9iIiwiQmxvYiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZGVmaW5lUHJvcGVydHkiLCJfZGVza3RvcCIsIl9tb2JpbGUiLCJtZWRpYSIsImdldE1lZGlhIiwidHlwZXMiLCJNT0JJTEUiLCJERVNLVE9QIiwiZGV2aWNlVHlwZSIsImNvcmRvdmEiLCJtb2RlbHMiLCJNb2JpbGVNZWRpYURldmljZSIsIm1lZGlhRGV2aWNlIiwiY3JlYXRlRWxlbWVudCIsIm9uIiwiZ2V0RXJyb3JzIiwiZmlsZXNMb2FkZWQiLCJzZXRBdHRyaWJ1dGVzIiwiY3JlYXRlIiwicGljdHVyZUxvYWRlZCIsInBpY3R1cmVMb2FkaW5nIiwib3BlbkRpYWxvZyIsImNsaWNrIiwiYXR0cnMiLCJzdHlsZSIsInByb3AiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUlucHV0IiwiY3VycmVudFRhcmdldCIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZnRlciIsIk1lZGlhQ2FtZXJhRGV2aWNlIiwic291cmNlIiwiREVGQVVMVF9PUFRJT05TIiwicXVhbGl0eSIsImRlc3RpbmF0aW9uVHlwZSIsIkNhbWVyYSIsIkRlc3RpbmF0aW9uVHlwZSIsIkZJTEVfVVJJIiwic291cmNlVHlwZSIsImVuY29kaW5nVHlwZSIsIkVuY29kaW5nVHlwZSIsIkpQRUciLCJtZWRpYVR5cGUiLCJNZWRpYVR5cGUiLCJQSUNUVVJFIiwiYWxsb3dFZGl0IiwiY29ycmVjdE9yaWVudGF0aW9uIiwib25TdWNjZXNzIiwic3VjY2Vzc0NhbGxiYWNrIiwib25GYWlsIiwibWVzc2FnZSIsInJlamVjdCIsInNldE9wdGlvbnMiLCJvdmVyd3JpdGVzIiwiY2FtZXJhIiwidXBsb2FkZWQiLCJwcm9ncmVzcyIsInVwbG9hZGluZyIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwiTWF0aCIsInJvdW5kIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwic2V0VGltZW91dCIsIm9uRXJyb3IiLCJvbkFib3J0IiwibWV0aG9kIiwiYm9keSIsImZldGNoIiwiYWJvcnQiXSwic291cmNlcyI6WyIvL2NvZGUvdHMvZGVza3RvcC50cyIsIi8vY29kZS90cy9maWxlLW1hbmFnZXIudHMiLCIvL2NvZGUvdHMvZmlsZXMvaW5kZXgudHMiLCIvL2ktY2FtZXJhLnRzLyIsIi8vY29kZS90cy9pbmRleC50cyIsIi8vY29kZS90cy9pbnB1dC50cyIsIi8vaW50ZXJmYWNlcy50cy8iLCIvL2NvZGUvdHMvbW9iaWxlLnRzIiwiLy9jb2RlL3RzL3hoci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251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