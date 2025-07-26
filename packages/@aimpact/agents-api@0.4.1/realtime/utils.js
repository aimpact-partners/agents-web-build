System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, RealtimeUtils, __beyond_pkg, hmr;
  _export("RealtimeUtils", void 0);
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/utils"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./utils
      ***********************/
      ims.set('./utils', {
        hash: 3651463802,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RealtimeUtils = void 0;
          /*bundle*/
          class RealtimeUtils {
            /**
             * Converts Float32Array of amplitude data to ArrayBuffer in Int16Array format
             *
             * @param {Float32Array} float32Array
             * @returns {ArrayBuffer}
             */
            static floatTo16BitPCM(float32Array) {
              const buffer = new ArrayBuffer(float32Array.length * 2);
              const view = new DataView(buffer);
              let offset = 0;
              for (let i = 0; i < float32Array.length; i++, offset += 2) {
                let s = Math.max(-1, Math.min(1, float32Array[i]));
                view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
              }
              return buffer;
            }
            /**
             * Converts a base64 string to an ArrayBuffer
             *
             * @param {string} base64
             * @returns {ArrayBuffer}
             */
            static base64ToArrayBuffer(base64) {
              const binaryString = globalThis.atob(base64);
              const len = binaryString.length;
              const bytes = new Uint8Array(len);
              for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
              }
              return bytes.buffer;
            }
            /**
             * Converts an ArrayBuffer, Int16Array or Float32Array to a base64 string
             *
             * @param {ArrayBuffer | Int16Array | Float32Array} arrayBuffer
             * @returns {string}
             */
            static arrayBufferToBase64(arrayBuffer) {
              if (arrayBuffer instanceof Float32Array) {
                arrayBuffer = this.floatTo16BitPCM(arrayBuffer);
              } else if (arrayBuffer instanceof Int16Array) {
                arrayBuffer = arrayBuffer.buffer;
              }
              let binary = '';
              let bytes = new Uint8Array(arrayBuffer);
              const chunkSize = 0x8000; // 32KB chunk size
              for (let i = 0; i < bytes.length; i += chunkSize) {
                let chunk = bytes.subarray(i, i + chunkSize);
                binary += String.fromCharCode.apply(null, chunk);
              }
              return globalThis.btoa(binary);
            }
            /**
             * Merge two Int16Arrays from Int16Arrays or ArrayBuffers
             *
             * @param {ArrayBuffer | Int16Array} left
             * @param {ArrayBuffer | Int16Array} right
             * @returns {Int16Array}
             */
            static mergeInt16Arrays(left, right) {
              if (left instanceof ArrayBuffer) {
                left = new Int16Array(left);
              }
              if (right instanceof ArrayBuffer) {
                right = new Int16Array(right);
              }
              if (!(left instanceof Int16Array) || !(right instanceof Int16Array)) {
                throw new Error(`Both items must be Int16Array`);
              }
              const newValues = new Int16Array(left.length + right.length);
              for (let i = 0; i < left.length; i++) {
                newValues[i] = left[i];
              }
              for (let j = 0; j < right.length; j++) {
                newValues[left.length + j] = right[j];
              }
              return newValues;
            }
            /**
             * Generates an id to send with events and messages
             *
             * @param {string} prefix
             * @param {number} [length]
             * @returns {string}
             */
            static generateId(prefix, length = 21) {
              // base58; non-repeating chars
              const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
              const str = Array(length - prefix.length).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
              return `${prefix}${str}`;
            }
          }
          exports.RealtimeUtils = RealtimeUtils;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./utils",
        "from": "RealtimeUtils",
        "name": "RealtimeUtils"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'RealtimeUtils') && _export("RealtimeUtils", RealtimeUtils = require ? require('./utils').RealtimeUtils : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFsdGltZVV0aWxzIiwiZmxvYXRUbzE2Qml0UENNIiwiZmxvYXQzMkFycmF5IiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJsZW5ndGgiLCJ2aWV3IiwiRGF0YVZpZXciLCJvZmZzZXQiLCJpIiwicyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJzZXRJbnQxNiIsImJhc2U2NFRvQXJyYXlCdWZmZXIiLCJiYXNlNjQiLCJiaW5hcnlTdHJpbmciLCJnbG9iYWxUaGlzIiwiYXRvYiIsImxlbiIsImJ5dGVzIiwiVWludDhBcnJheSIsImNoYXJDb2RlQXQiLCJhcnJheUJ1ZmZlclRvQmFzZTY0IiwiYXJyYXlCdWZmZXIiLCJGbG9hdDMyQXJyYXkiLCJJbnQxNkFycmF5IiwiYmluYXJ5IiwiY2h1bmtTaXplIiwiY2h1bmsiLCJzdWJhcnJheSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiYnRvYSIsIm1lcmdlSW50MTZBcnJheXMiLCJsZWZ0IiwicmlnaHQiLCJFcnJvciIsIm5ld1ZhbHVlcyIsImoiLCJnZW5lcmF0ZUlkIiwicHJlZml4IiwiY2hhcnMiLCJzdHIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJmbG9vciIsInJhbmRvbSIsImpvaW4iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy91dGlscy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBRU87VUFBVSxNQUFPQSxhQUFhO1lBQ3BDOzs7Ozs7WUFNQSxPQUFPQyxlQUFlQSxDQUFDQyxZQUEwQjtjQUNoRCxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsV0FBVyxDQUFDRixZQUFZLENBQUNHLE1BQU0sR0FBRyxDQUFDLENBQUM7Y0FDdkQsTUFBTUMsSUFBSSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDO2NBQ2pDLElBQUlLLE1BQU0sR0FBRyxDQUFDO2NBQ2QsS0FBSyxJQUFJQyxDQUFDLEdBQUcs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