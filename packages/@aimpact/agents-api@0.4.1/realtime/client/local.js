System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/agents/base", "@aimpact/agents-api@0.4.1/realtime/client/base"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, ClientSession, __beyond_pkg, hmr;
  _export("ClientSession", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeAgentsBase) {
      dependency_1 = _aimpactAgentsApi041RealtimeAgentsBase;
    }, function (_aimpactAgentsApi041RealtimeClientBase) {
      dependency_2 = _aimpactAgentsApi041RealtimeClientBase;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/client/local"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/agents/base', dependency_1], ['@aimpact/agents-api/realtime/client/base', dependency_2]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1493256946,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ClientSession = void 0;
          var _base = require("@aimpact/agents-api/realtime/client/base");
          var _base2 = require("@aimpact/agents-api/realtime/agents/base");
          /*bundle*/
          class ClientSession extends _base.ClientSessionBase {
            #agent;
            get agent() {
              return this.#agent;
            }
            get status() {
              return this.#agent.status;
            }
            constructor(settings) {
              const key = localStorage.getItem('openai-key');
              if (!key) throw new Error('Open AI API key must be set as a localstorage item: `openai-key`');
              const agent = new _base2.BaseRealtimeAgent({
                key
              });
              super(agent, agent.session, settings);
              this.#agent = agent;
            }
            async connect() {
              super.connect();
              return await this.#agent.connect();
            }
            async close() {
              const output = await this.#agent.close();
              super.close();
              return output;
            }
            listen(data) {
              this.#agent.manager.listen(data.mono);
            }
          }
          exports.ClientSession = ClientSession;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "ClientSession",
        "name": "ClientSession"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ClientSession') && _export("ClientSession", ClientSession = require ? require('./index').ClientSession : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfYmFzZTIiLCJDbGllbnRTZXNzaW9uIiwiQ2xpZW50U2Vzc2lvbkJhc2UiLCJhZ2VudCIsInN0YXR1cyIsImNvbnN0cnVjdG9yIiwic2V0dGluZ3MiLCJrZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiRXJyb3IiLCJCYXNlUmVhbHRpbWVBZ2VudCIsInNlc3Npb24iLCJjb25uZWN0IiwiY2xvc2UiLCJvdXRwdXQiLCJsaXN0ZW4iLCJkYXRhIiwibWFuYWdlciIsIm1vbm8iLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLy9pbmRleC50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUNBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFBT0UsYUFBYyxTQUFRSCxLQUFBLENBQUFJLGlCQUFpQjtZQUM5RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUQsS0FBTSxDQUFDQyxNQUFNO1lBQzFCO1lBRUFDLFlBQVlDLFFBQXVDO2NBQ2xELE1BQU1DLEdBQUcsR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDO2NBQzlDLElBQUksQ0FBQ0YsR0FBRyxFQUFFLE1BQU0sSUFBSUcsS0FBSyxDQUFDLGtFQUFrRSxDQUFDO2NBRTdGLE1BQU1QLEtBQUssR0FBRyxJQUFJSCxNQUFBLENBQUFXLGlCQUFpQixDQUFDO2dCQUFFSjtjQUFHLENBQUUsQ0FBQztjQUM1QyxLQUFLLENBQUNKLEtBQUssRUFBRUEsS0FBSyxDQUFDUyxPQUFPLEVBQUVOLFFBQVEsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQUgsS0FBTSxHQUFHQSxLQUFLO1lBQ3BCO1lBRUEsTUFBTVUsT0FBT0EsQ0FBQTtjQUNaLEtBQUssQ0FBQ0EsT0FBTyxFQUFFO2NBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNVLE9BQU8sRUFBRTtZQUNuQztZQUVBLE1BQU1DLEtBQUtBLENBQUE7Y0FDVixNQUFNQyxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDVyxLQUFLLEVBQUU7Y0FDeEMsS0FBSyxDQUFDQSxLQUFLLEVBQUU7Y0FDYixPQUFPQyxNQUFNO1lBQ2Q7WUFFQUMsTUFBTUEsQ0FBQ0MsSUFBMkM7Y0FDakQsSUFBSSxDQUFDLENBQUFkLEtBQU0sQ0FBQ2UsT0FBTyxDQUFDRixNQUFNLENBQUNDLElBQUksQ0FBQ0UsSUFBSSxDQUFDO1lBQ3RDOztVQUNBQyxPQUFBLENBQUFuQixhQUFBLEdBQUFBLGFBQUEiLCJpZ25vcmVMaXN0IjpbXX0=