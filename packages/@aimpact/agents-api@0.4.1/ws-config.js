System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, url, setUrl, __beyond_pkg, hmr;
  _export({
    url: void 0,
    setUrl: void 0
  });
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
          "vspecifier": "@aimpact/agents-api@0.4.1/ws-config"
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
        hash: 1923459413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.url = exports.setUrl = void 0;
          /*bundle*/
          let url = exports.url = void 0;
          /*bundle*/
          const setUrl = function (_url) {
            if (!_url) throw new Error(`Attribute 'url' must be specified`);
            exports.url = url = _url;
          };
          exports.setUrl = setUrl;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "url",
        "name": "url"
      }, {
        "im": "./index",
        "from": "setUrl",
        "name": "setUrl"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'url') && _export("url", url = require ? require('./index').url : value);
        (require || prop === 'setUrl') && _export("setUrl", setUrl = require ? require('./index').setUrl : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1cmwiLCJleHBvcnRzIiwic2V0VXJsIiwiX3VybCIsIkVycm9yIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU87VUFBVyxJQUFJQSxHQUFXLEdBQUFDLE9BQUEsQ0FBQUQsR0FBQTtVQUUxQjtVQUFXLE1BQU1FLE1BQU0sR0FBRyxTQUFBQSxDQUFVQyxJQUFZO1lBQ3RELElBQUksQ0FBQ0EsSUFBSSxFQUFFLE1BQU0sSUFBSUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDO1lBQy9ESCxPQUFBLENBQUFELEdBQUEsR0FBQUEsR0FBRyxHQUFHRyxJQUFJO1VBQ1gsQ0FBQztVQUFDRixPQUFBLENBQUFDLE1BQUEsR0FBQUEsTUFBQSIsImlnbm9yZUxpc3QiOltdfQ==