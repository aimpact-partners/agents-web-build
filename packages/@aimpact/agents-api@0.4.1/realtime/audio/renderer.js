System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, AudioRenderer, __beyond_pkg, hmr;
  _export("AudioRenderer", void 0);
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/audio/renderer"
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
        hash: 1072960798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioRenderer = void 0;
          var _normalizeArray = require("./normalize-array");
          /*bundle*/
          const AudioRenderer = exports.AudioRenderer = {
            /**
             * Renders a point-in-time snapshot of an audio sample, usually frequency values
             * @param canvas
             * @param ctx
             * @param data
             * @param color
             * @param pointCount number of bars to render
             * @param barWidth width of bars in px
             * @param barSpacing spacing between bars in px
             * @param center vertically center the bars
             */
            drawBars: (canvas, ctx, data, color, pointCount = 0, barWidth = 0, barSpacing = 0, center = false) => {
              pointCount = Math.floor(Math.min(pointCount, (canvas.width - barSpacing) / (Math.max(barWidth, 1) + barSpacing)));
              if (!pointCount) {
                pointCount = Math.floor((canvas.width - barSpacing) / (Math.max(barWidth, 1) + barSpacing));
              }
              if (!barWidth) {
                barWidth = (canvas.width - barSpacing) / pointCount - barSpacing;
              }
              const points = (0, _normalizeArray.default)(data, pointCount, true);
              for (let i = 0; i < pointCount; i++) {
                const amplitude = Math.abs(points[i]);
                const height = Math.max(1, amplitude * canvas.height);
                const x = barSpacing + i * (barWidth + barSpacing);
                const y = center ? (canvas.height - height) / 2 : canvas.height - height;
                ctx.fillStyle = color;
                ctx.fillRect(x, y, barWidth, height);
              }
            }
          };
        }
      });

      /*********************************
      INTERNAL MODULE: ./normalize-array
      *********************************/

      ims.set('./normalize-array', {
        hash: 1576470418,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          const dataMap = new WeakMap();
          /**
           * Normalizes a Float32Array to Array(m): We use this to draw amplitudes on a graph
           * If we're rendering the same audio data, then we'll often be using
           * the same (data, m, downsamplePeaks) triplets so we give option to memoize
           */
          var _default = (data, m, downsamplePeaks = false, memoize = false) => {
            let cache, mKey, dKey;
            if (memoize) {
              mKey = m.toString();
              dKey = downsamplePeaks.toString();
              cache = dataMap.has(data) ? dataMap.get(data) : {};
              dataMap.set(data, cache);
              cache[mKey] = cache[mKey] || {};
              if (cache[mKey][dKey]) {
                return cache[mKey][dKey];
              }
            }
            const n = data.length;
            const result = new Array(m);
            if (m <= n) {
              // Downsampling
              result.fill(0);
              const count = new Array(m).fill(0);
              for (let i = 0; i < n; i++) {
                const index = Math.floor(i * (m / n));
                if (downsamplePeaks) {
                  // take highest result in the set
                  result[index] = Math.max(result[index], Math.abs(data[i]));
                } else {
                  result[index] += Math.abs(data[i]);
                }
                count[index]++;
              }
              if (!downsamplePeaks) {
                for (let i = 0; i < result.length; i++) {
                  result[i] = result[i] / count[i];
                }
              }
            } else {
              for (let i = 0; i < m; i++) {
                const index = i * (n - 1) / (m - 1);
                const low = Math.floor(index);
                const high = Math.ceil(index);
                const t = index - low;
                if (high >= n) {
                  result[i] = data[n - 1];
                } else {
                  result[i] = data[low] * (1 - t) + data[high] * t;
                }
              }
            }
            if (memoize) {
              cache[mKey][dKey] = result;
            }
            return result;
          };
          exports.default = _default;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioRenderer",
        "name": "AudioRenderer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioRenderer') && _export("AudioRenderer", AudioRenderer = require ? require('./index').AudioRenderer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbm9ybWFsaXplQXJyYXkiLCJyZXF1aXJlIiwiQXVkaW9SZW5kZXJlciIsImV4cG9ydHMiLCJkcmF3QmFycyIsImNhbnZhcyIsImN0eCIsImRhdGEiLCJjb2xvciIsInBvaW50Q291bnQiLCJiYXJXaWR0aCIsImJhclNwYWNpbmciLCJjZW50ZXIiLCJNYXRoIiwiZmxvb3IiLCJtaW4iLCJ3aWR0aCIsIm1heCIsInBvaW50cyIsImRlZmF1bHQiLCJpIiwiYW1wbGl0dWRlIiwiYWJzIiwiaGVpZ2h0IiwieCIsInkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRhdGFNYXAiLCJXZWFrTWFwIiwiX2RlZmF1bHQiLCJtIiwiZG93bnNhbXBsZVBlYWtzIiwibWVtb2l6ZSIsImNhY2hlIiwibUtleSIsImRLZXkiLCJ0b1N0cmluZyIsImhhcyIsImdldCIsInNldCIsIm4iLCJsZW5ndGgiLCJyZXN1bHQiLCJBcnJheSIsImZpbGwiLCJjb3VudCIsImluZGV4IiwibG93IiwiaGlnaCIsImNlaWwiLCJ0Il0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iLCIvL25vcm1hbGl6ZS1hcnJheS50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxlQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFXLE1BQU1DLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUc7WUFDdkM7Ozs7Ozs7Ozs7O1lBV0FFLFFBQVEsRUFBRUEsQ0FDVEMsTUFBeUIsRUFDekJDLEdBQTZCLEVBQzdCQyxJQUFrQixFQUNsQkMsS0FBYSxFQUNiQyxVQUFBLEdBQXFCLENBQUMsRUFDdEJDLFFBQUEsR0FBbUIsQ0FBQyxFQUNwQkMsVUFBQSxHQUFxQixDQUFDLEVBQ3RCQyxNQUFBLEdBQWtCLEtBQUssS0FDcEI7Y0FDSEgsVUFBVSxHQUFHSSxJQUFJLENBQUNDLEtBQUssQ0FDdEJELElBQUks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