System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/model", "react@18.3.1", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Uploader, useUploader, XHRLoader, __beyond_pkg, hmr;
  _export({
    Uploader: void 0,
    useUploader: void 0,
    XHRLoader: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210Model) {
      dependency_1 = _beyondJsReactive210Model;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_beyondJsKernel0112Core) {
      dependency_3 = _beyondJsKernel0112Core;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/uploader"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['react', dependency_2], ['@beyond-js/kernel/core', dependency_3]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./adapters/base
      *******************************/
      ims.set('./adapters/base', {
        hash: 3656639161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseFilesList = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _regex = require("../common/regex");
          class BaseFilesList extends _model.ReactiveModel {
            #loaded = 0;
            #specs;
            #type;
            #accept = null;
            #errors = [];
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
            #map = new Map();
            get map() {
              return this.#map;
            }
            get items() {
              return [...this.#map.values()];
            }
            get entries() {
              return [...this.#map.values()];
            }
            constructor(parent, specs) {
              super();
              this.#specs = specs;
              this.#type = specs.type ? specs.type : 'any';
              // Permitir accept como string o string[]
              this.#accept = specs.accept || null;
            }
            // Registro extensible de tipos de archivo
            FILE_TYPE = {
              document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
              image: ['image/png', 'image/jpeg', 'image/gif'],
              json: ['application/json'],
              zip: ['application/x-zip-compressed'],
              audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac', 'audio/x-m4a']
            };
            registerFileType(category, mimes) {
              if (!this.FILE_TYPE[category]) this.FILE_TYPE[category] = [];
              this.FILE_TYPE[category].push(...mimes);
            }
            // Métodos onload/onloadend eliminados: la lógica ahora está en #readFile
            #onerror = event => console.error(4, event);
            validateFile = file => {
              const fileName = file.name.replace(_regex.INVALID_CHARS, '');
              // Validación por "accept"
              if (this.#accept) {
                const acceptList = Array.isArray(this.#accept) ? this.#accept : [this.#accept];
                const matchesAccept = acceptList.some(accept => {
                  return accept.startsWith('.') ? file.name.endsWith(accept) : file.type === accept;
                });
                if (!matchesAccept) {
                  this.#errors.push(`${fileName} (not allowed by accept rule)`);
                  this.trigger('validation:error', {
                    file,
                    reason: 'invalid-accept'
                  });
                  return false;
                }
              }
              // Validación por "type" predefinido si existe
              if (this.#type !== 'any' && this.FILE_TYPE[this.#type]) {
                const isValidType = this.FILE_TYPE[this.#type].includes(file.type);
                if (!isValidType) {
                  this.#errors.push(`${fileName} (invalid MIME type)`);
                  this.trigger('validation:error', {
                    file,
                    reason: 'invalid-type'
                  });
                  return false;
                }
              }
              // Validación por tamaño máximo
              if (this.#specs?.maxSize && file.size > this.#specs.maxSize) {
                const maxMb = (this.#specs.maxSize / (1024 * 1024)).toFixed(2);
                this.#errors.push(`${fileName} (exceeds max size of ${maxMb} MB)`);
                this.trigger('validation:error', {
                  file,
                  reason: 'max-size-exceeded'
                });
                return false;
              }
              return true;
            };
            #readFile = async file => {
              if (this.#type !== 'any') {
                const isValid = this.validateFile(file);
                if (!isValid) {
                  this.trigger('validation:error', {
                    file,
                    reason: 'invalid-type'
                  });
                  return;
                }
              }
              const name = file.name.replace(_regex.INVALID_CHARS, '');
              // Limpiar src anterior si existe
              const prev = this.#map.get(name);
              if (prev && prev.src) URL.revokeObjectURL(prev.src);
              const src = URL.createObjectURL(file);
              this.#map.set(name, {
                file,
                src
              });
              this.#loaded++;
              this.trigger('file:loaded', {
                file,
                src
              });
              // Revocar el objectURL tras emitir file:loaded si no se necesita la vista previa
              // URL.revokeObjectURL(src);
              if (this.#loaded === this.#map.size) {
                this.trigger('all:loaded', {
                  files: this.entries
                });
              }
            };
            #validateLoad = () => {
              if (this.#loaded === this.#map.size) {}
            };
            clean = () => {
              // Liberar los objectURL creados
              for (const item of this.#map.values()) {
                if (item.src) URL.revokeObjectURL(item.src);
              }
              this.#map = new Map();
              this.#loaded = 0;
              this.trigger('clean');
            };
            /**
             *
             * @param fileList
             */
            readLocal = async fileList => {
              this.fetching = true;
              await Promise.all(Array.from(fileList).map(file => this.#readFile(file)));
              this.fetching = false;
            };
          }
          exports.BaseFilesList = BaseFilesList;
        }
      });

      /********************************
      INTERNAL MODULE: ./adapters/index
      ********************************/

      ims.set('./adapters/index', {
        hash: 718904914,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.FilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _web = require("./web");
          class FilesUploader extends _model.ReactiveModel {
            static #instance;
            static getInstance(parent, specs) {
              if (this.#instance) return this.#instance;
              return new _web.WebFilesUploader(parent, specs);
            }
          }
          exports.FilesUploader = FilesUploader;
        }
      });

      /*********************************
      INTERNAL MODULE: ./adapters/mobile
      *********************************/

      ims.set('./adapters/mobile', {
        hash: 2114481926,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MobileFilesUploader = void 0;
          var _model = require("@beyond-js/reactive/model");
          class MobileFilesUploader extends _model.ReactiveModel {
            _loaded = 0;
            files = new Map();
            base64;
            _specs;
            _errors = [];
            constructor(specs) {
              super();
              this._specs = specs;
            }
            clean = () => {
              // Liberar los objectURL creados
              for (const value of this.files.values()) {
                if (value && typeof value === 'object' && value.objectUrl) {
                  URL.revokeObjectURL(value.objectUrl);
                }
              }
              this.files = new Map();
              this._loaded = 0;
            };
            /**
             * Valida el archivo usando la lógica de BaseFile (MIME y extensión)
             */
            validateFile = file => {
              const accept = this._specs?.accept || null;
              const type = this._specs?.type || 'any';
              const FILE_TYPE = {
                document: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/pdf'],
                image: ['image/png', 'image/jpeg', 'image/gif'],
                json: ['application/json'],
                zip: ['application/x-zip-compressed'],
                audio: ['audio/mpeg', 'audio/ogg', 'audio/wav', 'audio/webm', 'audio/aac', 'audio/flac', 'audio/x-m4a']
              };
              if (accept) {
                let acceptList = [];
                if (typeof accept === 'string') {
                  acceptList = [accept];
                } else if (Array.isArray(accept)) {
                  acceptList = accept;
                }
                const isValid = acceptList.some(a => {
                  if (a.startsWith('.')) return file.name.endsWith(a);else return file.type === a;
                });
                if (!isValid) this._errors.push(`${file.name} (no permitido por accept)`);
                return isValid;
              }
              if (!FILE_TYPE[type]) return true;
              const isValid = !!FILE_TYPE[type]?.find(item => item === file.type);
              if (!isValid) this._errors.push(`${file.name} (tipo no permitido)`);
              return isValid;
            };
            /**
             * data: { url: string (base64 o file url), name: string, type?: string }
             */
            getFiles = async data => {
              this.clean();
              this.base64 = data.url;
              this.trigger('loading');
              const [dir, filename] = data.name.split('com.jidadesarrollos.bovino/cache/');
              const fileType = data.type || '';
              const fileName = filename || data.name;
              // Validación de tipo MIME/extensión
              if (!this.validateFile({
                name: fileName,
                type: fileType
              })) {
                this._errors.push('Archivo no válido por tipo/aceptación');
                this.trigger('validation:error', {
                  file: {
                    name: fileName,
                    type: fileType
                  },
                  reason: 'invalid-type'
                });
                return;
              }
              let fileEntry = {
                name: fileName,
                type: fileType
              };
              // Si es base64, convertir a Blob y luego a objectURL
              if (typeof data.url === 'string' && data.url.startsWith('data:')) {
                try {
                  const arr = data.url.split(',');
                  const mime = arr[0].match(/:(.*?);/)[1];
                  const bstr = atob(arr[1]);
                  let n = bstr.length;
                  const u8arr = new Uint8Array(n);
                  while (n--) u8arr[n] = bstr.charCodeAt(n);
                  const blob = new Blob([u8arr], {
                    type: mime
                  });
                  const objectUrl = URL.createObjectURL(blob);
                  fileEntry = {
                    ...fileEntry,
                    blob,
                    objectUrl
                  };
                } catch (e) {
                  this._errors.push('Error convirtiendo base64 a Blob');
                  fileEntry = {
                    ...fileEntry,
                    src: data.url
                  };
                }
              } else {
                // Si ya viene como file url, dejarlo igual
                fileEntry = {
                  ...fileEntry,
                  src: data.url
                };
              }
              this.files.set(fileName, fileEntry);
              this.trigger('loadend');
            };
            get entries() {
              return this.files;
            }
            get total() {
              return this.files.size;
            }
            get errors() {
              return this._errors;
            }
          }
          exports.MobileFilesUploader = MobileFilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./adapters/web
      ******************************/

      ims.set('./adapters/web', {
        hash: 439184771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WebFilesUploader = void 0;
          var _base = require("./base");
          class WebFilesUploader extends _base.BaseFilesList {}
          exports.WebFilesUploader = WebFilesUploader;
        }
      });

      /******************************
      INTERNAL MODULE: ./common/regex
      ******************************/

      ims.set('./common/regex', {
        hash: 3542631021,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.INVALID_CHARS = void 0;
          // Expresiones regulares comunes para el uploader
          const INVALID_CHARS = exports.INVALID_CHARS = /[^\w\d.]/g;
        }
      });

      /******************************************
      INTERNAL MODULE: ./helpers/exif-orientation
      ******************************************/

      ims.set('./helpers/exif-orientation', {
        hash: 2609987882,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getExifOrientation = getExifOrientation;
          /**
           * Extracts the EXIF Orientation value from a JPEG image's binary data.
           *
           * The EXIF Orientation tag (0x0112) indicates the correct orientation of the image
           * (e.g. normal, rotated 90°, 180°, etc.). This is especially important for displaying
           * images taken on mobile devices where the physical rotation of the camera is stored
           * as metadata instead of modifying the pixel data.
           *
           * @param {ArrayBuffer} arrayBuffer - The binary content of a JPEG image.
           * @returns {number} A number from 1 to 8 representing the orientation according to the EXIF standard:
           *  - 1: Normal (no rotation)
           *  - 3: Rotated 180°
           *  - 6: Rotated 90° clockwise
           *  - 8: Rotated 90° counterclockwise
           *  - Other values may exist but are less commonly used.
           *  - Returns 1 if the orientation tag is not present, if the file is not a JPEG,
           *    or if parsing fails.
           *
           * @example
           * const buffer = await file.arrayBuffer();
           * const orientation = getExifOrientation(buffer);
           * if (orientation === 6) {
           *   // Rotate image 90° clockwise
           * }
           */
          function getExifOrientation(arrayBuffer) {
            const view = new DataView(arrayBuffer);
            if (view.getUint16(0, false) !== 0xffd8) return 1; // Not JPEG
            let offset = 2;
            const length = view.byteLength;
            while (offset < length) {
              if (view.getUint16(offset + 2, false) <= 8) return 1;
              const marker = view.getUint16(offset, false);
              offset += 2;
              if (marker === 0xffe1) {
                if (view.getUint32(offset += 2, false) !== 0x45786966) return 1; // "Exif"
                const little = view.getUint16(offset += 6, false) === 0x4949;
                offset += view.getUint32(offset + 4, little);
                const tags = view.getUint16(offset, little);
                offset += 2;
                for (let i = 0; i < tags; i++) {
                  if (view.getUint16(offset + i * 12, little) === 0x0112) {
                    return view.getUint16(offset + i * 12 + 8, little);
                  }
                }
              } else if ((marker & 0xff00) !== 0xff00) break;else offset += view.getUint16(offset, false);
            }
            return 1;
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./helpers/resize
      ********************************/

      ims.set('./helpers/resize', {
        hash: 4005661584,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.resizePicture = resizePicture;
          var _exifOrientation = require("./exif-orientation");
          /**
           * Resizes and re-encodes an image given its URL.
           *
           * This function downloads an image, detects its EXIF orientation metadata, applies basic rotation,
           * resizes it proportionally to fit within specified maxWidth and maxHeight, and returns a base64-encoded version
           * in the selected format.
           *
           * **Limitations:**
           * - Transparency is lost when using `image/jpeg` (default). Use `image/png` if you need transparency.
           * - Some browsers may not support `image/webp` or `OffscreenCanvas`.
           * - EXIF orientation support is limited to 1 (normal), 3, 6, and 8.
           * - The original format is not preserved unless explicitly set via `outputType`.
           *
           * @param {string} url - The image URL to load.
           * @param {IResizeSpecs} specs - Optional resizing and output settings.
           * @returns {Promise<IResizedImage>} A resized, re-encoded image result.
           */
          async function resizePicture(url, specs) {
            specs = specs || {};
            const maxWidth = specs.maxWidth || 800;
            const maxHeight = specs.maxHeight || maxWidth / (4 / 3);
            const quality = specs.quality || 0.8;
            // Default to JPEG if not provided
            const supportedTypes = ['image/jpeg', 'image/png', 'image/webp'];
            const outputType = supportedTypes.includes(specs.outputType) ? specs.outputType : 'image/jpeg';
            // Download the image as Blob and ArrayBuffer
            const response = await fetch(url);
            const blob = await response.blob();
            const arrayBuffer = await blob.arrayBuffer();
            // Extract EXIF orientation metadata
            const orientation = (0, _exifOrientation.getExifOrientation)(arrayBuffer);
            // Create image source (ImageBitmap or <img> element fallback)
            let imageBitmap;
            try {
              if ('createImageBitmap' in window) {
                imageBitmap = await createImageBitmap(blob, {
                  imageOrientation: 'none'
                });
              } else {
                throw new Error();
              }
            } catch {
              imageBitmap = await new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = url;
              });
            }
            let width = imageBitmap.width;
            let height = imageBitmap.height;
            // Proportional resize based on aspect ratio
            if (width < height && height > maxHeight) {
              width = Math.round(width * maxHeight / height);
              height = maxHeight;
            } else if (width >= height && width > maxWidth) {
              height = Math.round(height * maxWidth / width);
              width = maxWidth;
            }
            // Prepare canvas
            const useOffscreen = typeof OffscreenCanvas !== 'undefined';
            let canvas;
            canvas = useOffscreen ? new OffscreenCanvas(width, height) : document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (!ctx) throw new Error('Unable to get 2D context');
            // Apply basic EXIF rotation
            switch (orientation) {
              case 3:
                ctx.translate(width, height);
                ctx.rotate(Math.PI);
                break;
              case 6:
                [width, height] = [height, width];
                canvas.width = width;
                canvas.height = height;
                ctx.translate(width, 0);
                ctx.rotate(Math.PI / 2);
                break;
              case 8:
                [width, height] = [height, width];
                canvas.width = width;
                canvas.height = height;
                ctx.translate(0, height);
                ctx.rotate(-Math.PI / 2);
                break;
              default:
                if (orientation !== 1) {
                  console.warn(`Unsupported EXIF orientation: ${orientation}`);
                }
            }
            ctx.drawImage(imageBitmap, 0, 0, width, height);
            // Export canvas as base64-encoded image
            let src;
            if (canvas instanceof OffscreenCanvas && typeof canvas.convertToBlob === 'function') {
              const finalBlob = await canvas.convertToBlob({
                type: outputType,
                quality
              });
              src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.readAsDataURL(finalBlob);
              });
            } else {
              // Fallback para navegadores sin convertToBlob
              const dataUrl = canvas.toDataURL(outputType, quality);
              src = dataUrl;
            }
            return {
              src,
              width,
              height,
              orientation
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2568539766,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Uploader = void 0;
          var _draggable = require("./ui/draggable");
          var _model = require("@beyond-js/reactive/model");
          var _adapters = require("./adapters");
          var _types = require("./types");
          /*bundle*/ /**
                      * Clase central que permite gestionar archivos locales.
                      * No realiza subidas, solo gestiona selección, validación y vistas previas.
                      */
          class Uploader extends _model.ReactiveModel {
            #files;
            #fileInput = document.createElement('input');
            #draggable;
            #attrs;
            #selector;
            #specs;
            #errors;
            get files() {
              return this.#files;
            }
            get errors() {
              return this.#errors;
            }
            constructor(specs = {}) {
              super();
              if (!specs.input) specs.input = {};
              this.#specs = specs;
              this.#files = _adapters.FilesUploader.getInstance(this, specs);
              this.#draggable = new _draggable.DraggableUploader(this, this.#files);
              this.#files.on(_types.UploaderEvents.Change, this.#listenChanges);
              this.#files.on(_types.UploaderEvents.Error, this.getErrors);
              this.#files.on(_types.UploaderEvents.LoadEnd, this.filesLoaded);
              const params = {
                ...specs.input,
                multiple: specs.multiple ?? false
              };
              this.setAttributes(params);
            }
            #listenChanges = () => {
              this.fetching = this.#files.fetching;
              this.ready = this.#files.ready;
            };
            setAttributes = specs => {
              const attrs = {
                type: 'file',
                style: 'display:none',
                name: 'input_upload',
                ...specs
              };
              this.#fileInput.multiple = specs.multiple ?? false;
              for (let prop in attrs) {
                this.#fileInput.setAttribute(prop, attrs[prop]);
              }
              this.#attrs = attrs;
            };
            openDialog = () => this.#fileInput.click();
            filesLoaded = () => this.trigger(_types.UploaderEvents.LoadEnd);
            pictureLoaded = () => this.trigger(_types.UploaderEvents.PictureLoaded);
            pictureLoading = () => this.trigger(_types.UploaderEvents.PictureLoading);
            getErrors = () => this.#errors = this.files.errors;
            clean = async () => {
              await this.#files.clean();
              this.trigger(_types.UploaderEvents.Clean);
              this.trigger('change');
            };
            delete = async fileName => {
              await this.#files.map.delete(fileName);
              this.trigger(_types.UploaderEvents.Delete);
            };
            destroy = () => {
              if (this.#selector) this.#selector.removeEventListener('click', this.openDialog);
              this.#fileInput.removeEventListener('change', this.#onChangeInput);
              this.#draggable?.remove();
              this.#files.off(_types.UploaderEvents.Change, this.#listenChanges);
              this.#files.off(_types.UploaderEvents.Error, this.getErrors);
              this.#files.off(_types.UploaderEvents.LoadEnd, this.filesLoaded);
            };
            create = (selector, draggableSelector) => {
              this.#selector = selector;
              const addListeners = () => {
                if (!selector) return;
                selector.addEventListener('click', this.openDialog);
                this.#fileInput.addEventListener('change', this.#onChangeInput);
              };
              selector.after(this.#fileInput);
              addListeners();
              if (draggableSelector) this.#draggable.add(draggableSelector);
            };
            #onChangeInput = async event => {
              this.clean();
              this.fetching = true;
              this.trigger(_types.UploaderEvents.Change);
              const target = event.currentTarget;
              window.setTimeout(async () => {
                this.#files.total = target.files?.length || 0;
                await this.#files.readLocal(Array.from(target.files ?? []));
                this.fetching = false;
                this.trigger(_types.UploaderEvents.Change);
              }, 0);
            };
          }
          exports.Uploader = Uploader;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3360279170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UploaderEvents = void 0;
          // Tipos y eventos expuestos por el uploader (sin lógica de red)
          var UploaderEvents;
          (function (UploaderEvents) {
            UploaderEvents["LoadEnd"] = "loadend";
            UploaderEvents["PictureLoaded"] = "pictureLoaded";
            UploaderEvents["PictureLoading"] = "pictureLoading";
            UploaderEvents["Error"] = "error";
            UploaderEvents["Change"] = "change";
            UploaderEvents["Clean"] = "clean";
            UploaderEvents["Delete"] = "delete";
          })(UploaderEvents || (exports.UploaderEvents = UploaderEvents = {}));
        }
      });

      /******************************
      INTERNAL MODULE: ./ui/draggable
      ******************************/

      ims.set('./ui/draggable', {
        hash: 3273494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraggableUploader = void 0;
          class DraggableUploader {
            #parent;
            #files;
            #currentElement;
            #boundDrop;
            #boundDragOver;
            constructor(parent, files) {
              this.#parent = parent;
              this.#files = files;
              this.#boundDrop = this.onDrop.bind(this);
              this.#boundDragOver = this.onDragOver.bind(this);
            }
            onDrop = event => {
              event.preventDefault();
              const {
                dataTransfer
              } = event;
              if (!dataTransfer.items.length) {
                return;
              }
              const files = [];
              for (let i = 0; i < dataTransfer.items.length; ++i) {
                const file = dataTransfer.items[i].getAsFile();
                if (file) {
                  files.push(file);
                }
              }
              this.#files.readLocal(files);
            };
            /**
             * This event runs only when are files on the draggable area.
             * @param event
             */
            onDragOver = event => {
              event.preventDefault();
            };
            /**
             * Add the drag & drop events to the control
             * @param {HTMLElement} el - The element to make draggable (input, div, etc)
             */
            add(el) {
              if (this.#currentElement) this.remove();
              this.#currentElement = el;
              el.addEventListener('drop', this.#boundDrop);
              el.addEventListener('dragover', this.#boundDragOver);
            }
            /**
             * Remove the drag & drop events from the current element, if any
             */
            remove() {
              if (!this.#currentElement) return;
              this.#currentElement.removeEventListener('drop', this.#boundDrop);
              this.#currentElement.removeEventListener('dragover', this.#boundDragOver);
              this.#currentElement = undefined;
            }
          }
          exports.DraggableUploader = DraggableUploader;
        }
      });

      /*********************************
      INTERNAL MODULE: ./ui/use-uploader
      *********************************/

      ims.set('./ui/use-uploader', {
        hash: 4133165780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useUploader = useUploader;
          var React = require("react");
          var _types = require("../types");
          var _index = require("../index");
          /*bundle*/
          function useUploader(specs) {
            const triggerRef = React.useRef(null);
            const dropZoneRef = React.useRef(null);
            const [uploader] = React.useState(() => new _index.Uploader(specs));
            const [uploading, setUploading] = React.useState(false);
            const [progress, setProgress] = React.useState(0);
            const [errors, setErrors] = React.useState([]);
            const [count, setCount] = React.useState(0);
            React.useEffect(() => {
              if (!triggerRef.current) return;
              uploader.create(triggerRef.current, dropZoneRef.current ?? undefined);
              const handleChange = () => {
                setUploading(uploader.fetching);
                setCount(count => count + 1);
                setProgress(uploader.files.total > 0 ? Math.round(uploader.files.items.size / uploader.files.total * 100) : 0);
              };
              const handleError = () => {
                setErrors([...uploader.errors]);
              };
              uploader.on(_types.UploaderEvents.Change, handleChange);
              uploader.on(_types.UploaderEvents.Error, handleError);
              uploader.on(_types.UploaderEvents.LoadEnd, handleChange);
              return () => {
                uploader.destroy();
              };
            }, [uploader]);
            return {
              triggerRef,
              dropZoneRef,
              files: uploader.files.items,
              uploader,
              uploading,
              count,
              progress,
              errors,
              openDialog: uploader.openDialog,
              clean: uploader.clean
            };
          }
        }
      });

      /*********************
      INTERNAL MODULE: ./xhr
      *********************/

      ims.set('./xhr', {
        hash: 3314907754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.XHRLoader = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle */
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
            #bearer;
            bearer(bearer) {
              if (bearer) this.#bearer = bearer;
              return this;
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
              this.trigger('change');
            }
            onCompleted(event) {
              this.uploaded = true;
              this.promise.resolve();
              this.trigger('change');
              setTimeout(() => {
                this.promise = undefined;
                this.trigger('change');
              }, 100);
            }
            onError(event) {
              console.error('Error uploading picture', event);
              this.error = true;
              this.promise.reject();
              this.trigger('change');
            }
            onAbort() {
              this.promise.resolve(false);
              this.trigger('change');
            }
            getHeaders = specs => {
              let headers = new Headers();
              const bearer = specs.bearer || this.#bearer;
              if (bearer) {
                headers.append('Authorization', `Bearer ${bearer}`);
              }
              if (specs.bearer) delete specs.bearer;
              const keys = Object.keys(specs);
              keys.forEach(key => {
                if (key === 'bearer') return;
                headers.append(key, specs[key]);
              });
              return headers;
            };
            async upload(data, url) {
              try {
                let headers = this.getHeaders({});
                const specs = {
                  method: 'post',
                  headers,
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
                this.trigger('change');
              }
            }
          }
          exports.XHRLoader = XHRLoader;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Uploader",
        "name": "Uploader"
      }, {
        "im": "./ui/use-uploader",
        "from": "useUploader",
        "name": "useUploader"
      }, {
        "im": "./xhr",
        "from": "XHRLoader",
        "name": "XHRLoader"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Uploader') && _export("Uploader", Uploader = require ? require('./index').Uploader : value);
        (require || prop === 'useUploader') && _export("useUploader", useUploader = require ? require('./ui/use-uploader').useUploader : value);
        (require || prop === 'XHRLoader') && _export("XHRLoader", XHRLoader = require ? require('./xhr').XHRLoader : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX3JlZ2V4IiwiQmFzZUZpbGVzTGlzdCIsIlJlYWN0aXZlTW9kZWwiLCJsb2FkZWQiLCJzcGVjcyIsInR5cGUiLCJhY2NlcHQiLCJlcnJvcnMiLCJfdG90YWwiLCJ0b3RhbCIsInZhbHVlIiwibWFwIiwiTWFwIiwiaXRlbXMiLCJ2YWx1ZXMiLCJlbnRyaWVzIiwiY29uc3RydWN0b3IiLCJwYXJlbnQiLCJGSUxFX1RZUEUiLCJkb2N1bWVudCIsImltYWdlIiwianNvbiIsInppcCIsImF1ZGlvIiwicmVnaXN0ZXJGaWxlVHlwZSIsImNhdGVnb3J5IiwibWltZXMiLCJwdXNoIiwib25lcnJvciIsImV2ZW50IiwiY29uc29sZSIsImVycm9yIiwidmFsaWRhdGVGaWxlIiwiZmlsZSIsImZpbGVOYW1lIiwibmFtZSIsInJlcGxhY2UiLCJJTlZBTElEX0NIQVJTIiwiYWNjZXB0TGlzdCIsIkFycmF5IiwiaXNBcnJheSIsIm1hdGNoZXNBY2NlcHQiLCJzb21lIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidHJpZ2dlciIsInJlYXNvbiIsImlzVmFsaWRUeXBlIiwiaW5jbHVkZXMiLCJtYXhTaXplIiwic2l6ZSIsIm1heE1iIiwidG9GaXhlZCIsInJlYWRGaWxlIiwiaXNWYWxpZCIsInByZXYiLCJnZXQiLCJzcmMiLCJVUkwiLCJyZXZva2VPYmplY3RVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzZXQiLCJmaWxlcyIsInZhbGlkYXRlTG9hZCIsIiN2YWxpZGF0ZUxvYWQiLCJjbGVhbiIsIml0ZW0iLCJyZWFkTG9jYWwiLCJmaWxlTGlzdCIsImZldGNoaW5nIiwiUHJvbWlzZSIsImFsbCIsImZyb20iLCJleHBvcnRzIiwiX3dlYiIsIkZpbGVzVXBsb2FkZXIiLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwiV2ViRmlsZXNVcGxvYWRlciIsIk1vYmlsZUZpbGVzVXBsb2FkZXIiLCJfbG9hZGVkIiwiYmFzZTY0IiwiX3NwZWNzIiwiX2Vycm9ycyIsIm9iamVjdFVybCIsImEiLCJmaW5kIiwiZ2V0RmlsZXMiLCJkYXRhIiwidXJsIiwiZGlyIiwiZmlsZW5hbWUiLCJzcGxpdCIsImZpbGVUeXBlIiwiZmlsZUVudHJ5IiwiYXJyIiwibWltZSIsIm1hdGNoIiwiYnN0ciIsImF0b2IiLCJuIiwibGVuZ3RoIiwidThhcnIiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsImJsb2IiLCJCbG9iIiwiZSIsIl9iYXNlIiwiZ2V0RXhpZk9yaWVudGF0aW9uIiwiYXJyYXlCdWZmZXIiLCJ2aWV3IiwiRGF0YVZpZXciLCJnZXRVaW50MTYiLCJvZmZzZXQiLCJieXRlTGVuZ3RoIiwibWFya2VyIiwiZ2V0VWludDMyIiwibGl0dGxlIiwidGFncyIsImkiLCJfZXhpZk9yaWVudGF0aW9uIiwicmVzaXplUGljdHVyZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsInN1cHBvcnRlZFR5cGVzIiwib3V0cHV0VHlwZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvcmllbnRhdGlvbiIsImltYWdlQml0bWFwIiwid2luZG93IiwiY3JlYXRlSW1hZ2VCaXRtYXAiLCJpbWFnZU9yaWVudGF0aW9uIiwiRXJyb3IiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJ3aWR0aCIsImhlaWdodCIsIk1hdGgiLCJyb3VuZCIsInVzZU9mZnNjcmVlbiIsIk9mZnNjcmVlbkNhbnZhcyIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJjdHgiLCJnZXRDb250ZXh0IiwidHJhbnNsYXRlIiwicm90YXRlIiwiUEkiLCJ3YXJuIiwiZHJhd0ltYWdlIiwiY29udmVydFRvQmxvYiIsImZpbmFsQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZGF0YVVybCIsInRvRGF0YVVSTCIsIl9kcmFnZ2FibGUiLCJfYWRhcHRlcnMiLCJfdHlwZXMiLCJVcGxvYWRlciIsImZpbGVJbnB1dCIsImRyYWdnYWJsZSIsImF0dHJzIiwic2VsZWN0b3IiLCJpbnB1dCIsIkRyYWdnYWJsZVVwbG9hZGVyIiwib24iLCJVcGxvYWRlckV2ZW50cyIsIkNoYW5nZSIsImxpc3RlbkNoYW5nZXMiLCJnZXRFcnJvcnMiLCJMb2FkRW5kIiwiZmlsZXNMb2FkZWQiLCJwYXJhbXMiLCJtdWx0aXBsZSIsInNldEF0dHJpYnV0ZXMiLCIjbGlzdGVuQ2hhbmdlcyIsInJlYWR5Iiwic3R5bGUiLCJwcm9wIiwic2V0QXR0cmlidXRlIiwib3BlbkRpYWxvZyIsImNsaWNrIiwicGljdHVyZUxvYWRlZCIsIlBpY3R1cmVMb2FkZWQiLCJwaWN0dXJlTG9hZGluZyIsIlBpY3R1cmVMb2FkaW5nIiwiQ2xlYW4iLCJkZWxldGUiLCJEZWxldGUiLCJkZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlSW5wdXQiLCJyZW1vdmUiLCJvZmYiLCJjcmVhdGUiLCJkcmFnZ2FibGVTZWxlY3RvciIsImFkZExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZnRlciIsImFkZCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwiY3VycmVudEVsZW1lbnQiLCJib3VuZERyb3AiLCJib3VuZERyYWdPdmVyIiwib25Ecm9wIiwiYmluZCIsIm9uRHJhZ092ZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGFUcmFuc2ZlciIsImdldEFzRmlsZSIsImVsIiwidW5kZWZpbmVkIiwiUmVhY3QiLCJfaW5kZXgiLCJ1c2VVcGxvYWRlciIsInRyaWdnZXJSZWYiLCJ1c2VSZWYiLCJkcm9wWm9uZVJlZiIsInVwbG9hZGVyIiwidXNlU3RhdGUiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwic2V0RXJyb3JzIiwiY291bnQiLCJzZXRDb3VudCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVFcnJvciIsIlhIUkxvYWRlciIsInByb21pc2UiLCJ1cGxvYWRlZCIsImJlYXJlciIsImlzVXBsb2FkZWQiLCJ1cGxvYWRQcm9ncmVzcyIsImhhc0Vycm9yIiwib25Qcm9ncmVzcyIsImxlbmd0aENvbXB1dGFibGUiLCJwZXJjZW50IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsIm9uQ29tcGxldGVkIiwib25FcnJvciIsIm9uQWJvcnQiLCJnZXRIZWFkZXJzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsInVwbG9hZCIsIm1ldGhvZCIsImJvZHkiLCJhYm9ydCJdLCJzb3VyY2VzIjpbIi9hZGFwdGVycy9iYXNlLnRzIiwiL2FkYXB0ZXJzL2luZGV4LnRzIiwiL2FkYXB0ZXJzL21vYmlsZS50cyIsIi9hZGFwdGVycy93ZWIudHMiLCIvY29tbW9uL3JlZ2V4LnRzIiwiL2hlbHBlcnMvZXhpZi1vcmllbnRhdGlvbi50cyIsIi9oZWxwZXJzL3Jlc2l6ZS50cyIsIi9pbmRleC50cyIsIi90eXBlcy50cyIsIi91aS9kcmFnZ2FibGUudHMiLCIvdWkvdXNlLXVwbG9hZGVyLnRzIiwiL3hoci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQVFNLE1BQU9FLGFBQWMsU0FBUUgsTUFBQSxDQUFBSSxhQUFvQjtZQUN0RCxDQUFBQyxNQUFPLEdBQVcsQ0FBQztZQUVuQixDQUFBQyxLQUFNO1lBQ04sQ0FBQUMsSUFBSztZQUNMLENBQUFDLE1BQU8sR0FBNkIsSUFBSTtZQUN4QyxDQUFBQyxNQUFPLEdBQVUsRUFBRTtZQUNuQixJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNw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