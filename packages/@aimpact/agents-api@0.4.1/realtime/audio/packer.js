System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, WavPacker, __beyond_pkg, hmr;
  _export("WavPacker", void 0);
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/packer"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 2927522518,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WavPacker = void 0;
          /*bundle*/ /**
                      * Utility class for assembling PCM16 "audio/wav" data
                      */
          class WavPacker {
            /**
             * Converts Float32Array of amplitude data to ArrayBuffer in Int16Array format
             * @param float32Array - Array of float audio values
             * @returns ArrayBuffer with Int16 values
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
             * Concatenates two ArrayBuffers
             * @param leftBuffer - First buffer to concatenate
             * @param rightBuffer - Second buffer to concatenate
             * @returns Merged ArrayBuffer
             */
            static mergeBuffers(leftBuffer, rightBuffer) {
              const tmpArray = new Uint8Array(leftBuffer.byteLength + rightBuffer.byteLength);
              tmpArray.set(new Uint8Array(leftBuffer), 0);
              tmpArray.set(new Uint8Array(rightBuffer), leftBuffer.byteLength);
              return tmpArray.buffer;
            }
            /**
             * Packs data into an Int16 format
             * @private
             * @param size - 0 = 1x Int16, 1 = 2x Int16
             * @param arg - Value to pack
             * @returns Uint8Array representing packed data
             */
            _packData(size, arg) {
              return [new Uint8Array([arg & 0xff, arg >> 8 & 0xff]), new Uint8Array([arg & 0xff, arg >> 8 & 0xff, arg >> 16 & 0xff, arg >> 24 & 0xff])][size];
            }
            /**
             * Packs audio into "audio/wav" Blob
             * @param sampleRate - Sample rate of the audio
             * @param audio - Audio object containing bitsPerSample, channels, and data
             * @returns WavPackerAudioType containing blob, url, channelCount, sampleRate, and duration
             */
            pack(sampleRate, audio) {
              if (!audio?.bitsPerSample) {
                throw new Error(`Missing "bitsPerSample"`);
              } else if (!audio?.channels) {
                throw new Error(`Missing "channels"`);
              } else if (!audio?.data) {
                throw new Error(`Missing "data"`);
              }
              const {
                bitsPerSample,
                channels,
                data
              } = audio;
              const output = [
              // Header
              'RIFF', this._packData(1, 4 + (8 + 24) /* chunk 1 length */ + (8 + 8) /* chunk 2 length */), 'WAVE',
              // chunk 1
              'fmt ', this._packData(1, 16), this._packData(0, 1), this._packData(0, channels.length), this._packData(1, sampleRate), this._packData(1, sampleRate * channels.length * bitsPerSample / 8), this._packData(0, channels.length * bitsPerSample / 8), this._packData(0, bitsPerSample),
              // chunk 2
              'data', this._packData(1, channels[0].length * channels.length * bitsPerSample / 8), data];
              const blob = new Blob(output, {
                type: 'audio/mpeg'
              });
              const url = URL.createObjectURL(blob);
              return {
                blob,
                url,
                channelCount: channels.length,
                sampleRate,
                duration: data.byteLength / (channels.length * sampleRate * 2)
              };
            }
          }
          exports.WavPacker = WavPacker;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "WavPacker",
        "name": "WavPacker"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WavPacker') && _export("WavPacker", WavPacker = require ? require('./index').WavPacker : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJXYXZQYWNrZXIiLCJmbG9hdFRvMTZCaXRQQ00iLCJmbG9hdDMyQXJyYXkiLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsImxlbmd0aCIsInZpZXciLCJEYXRhVmlldyIsIm9mZnNldCIsImkiLCJzIiwiTWF0aCIsIm1heCIsIm1pbiIsInNldEludDE2IiwibWVyZ2VCdWZmZXJzIiwibGVmdEJ1ZmZlciIsInJpZ2h0QnVmZmVyIiwidG1wQXJyYXkiLCJVaW50OEFycmF5IiwiYnl0ZUxlbmd0aCIsInNldCIsIl9wYWNrRGF0YSIsInNpemUiLCJhcmciLCJwYWNrIiwic2FtcGxlUmF0ZSIsImF1ZGlvIiwiYml0c1BlclNhbXBsZSIsIkVycm9yIiwiY2hhbm5lbHMiLCJkYXRhIiwib3V0cHV0IiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2hhbm5lbENvdW50IiwiZHVyYXRpb24iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBY08sV0FIUDs7O1VBR2lCLE1BQU9BLFNBQVM7WUFDaEM7Ozs7O1lBS0EsT0FBT0MsZUFBZUEsQ0FBQ0MsWUFBMEI7Y0FDaEQsTUFBTUMsTUFBTSxHQUFHLElBQUlDLFdBQVcsQ0FBQ0YsWUFBWSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2NBQ3ZELE1BQU1DLElBQUksR0FBRyxJQUFJQyxRQUFRLENBQUNKLE1BQU0sQ0FBQztjQUNqQyxJQUFJSyxNQUFNLEdBQUcsQ0FBQztjQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUCxZQUFZLENBQUNHLE1BQU0sRUFBRUksQ0FBQyxFQUFFLEVBQUVELE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFELElBQUlFLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxHQUFH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