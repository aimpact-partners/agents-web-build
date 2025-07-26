System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/agents-api@0.4.1/realtime/audio/recorder", "react@18.3.1", "@aimpact/agents-api@0.4.1/realtime/widgets/state", "@aimpact/agents-api@0.4.1/realtime/client", "@aimpact/agents-api@0.4.1/realtime/client/conversation"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAgentsApi041RealtimeAudioRecorder) {
      dependency_4 = _aimpactAgentsApi041RealtimeAudioRecorder;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAgentsApi041RealtimeWidgetsState) {
      dependency_6 = _aimpactAgentsApi041RealtimeWidgetsState;
    }, function (_aimpactAgentsApi041RealtimeClient) {
      dependency_7 = _aimpactAgentsApi041RealtimeClient;
    }, function (_aimpactAgentsApi041RealtimeClientConversation) {
      dependency_8 = _aimpactAgentsApi041RealtimeClientConversation;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/agents-api/realtime/audio/recorder', dependency_4], ['react', dependency_5], ['@aimpact/agents-api/realtime/widgets/state', dependency_6], ['@aimpact/agents-api/realtime/client', dependency_7], ['@aimpact/agents-api/realtime/client/conversation', dependency_8]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "beyondjs-agents-realtime-console",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/console",
        "is": "page",
        "route": "/console"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/agents-api@0.4.1/realtime/console');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1264794352,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _widget = require("./widget");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _widget.default;
            }
          }
          exports.Controller = Controller;
        }
      });

      /*************************
      INTERNAL MODULE: ./devices
      *************************/

      ims.set('./devices', {
        hash: 112979781,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectDevice = void 0;
          var _recorder = require("@aimpact/agents-api/realtime/audio/recorder");
          var _react = require("react");
          var _state = require("@aimpact/agents-api/realtime/widgets/state");
          const SelectDevice = ({
            client
          }) => {
            const state = new _state.State();
            state.define({
              available: [],
              selected: '',
              fetched: false,
              error: void 0
            });
            const {
              values
            } = state;
            (0, _react.useEffect)(() => {
              _recorder.devices.prepare().then(() => {
                values.available = [..._recorder.devices.values()];
                values.fetched = true;
                select(_recorder.devices.default?.id || '');
              }).catch(exc => {
                console.error(exc);
                values.error = `Error caught looking for devices`;
              });
            }, []);
            const select = id => {
              values.selected = id;
              const device = values.available.find(device => device.id === id);
              client.recorder.device = device;
            };
            const onchange = event => {
              select(event.target.value);
            };
            if (!values.fetched) return null;
            return _react.default.createElement("div", {
              className: "device-selection"
            }, _react.default.createElement("label", {
              htmlFor: "device-select"
            }, "Select Device:"), _react.default.createElement("select", {
              id: "device-select",
              value: values.selected,
              onChange: onchange
            }, values.available.map(device => _react.default.createElement("option", {
              key: device.id,
              value: device.id
            }, device.label))));
          };
          exports.SelectDevice = SelectDevice;
        }
      });

      /***********************
      INTERNAL MODULE: ./icons
      ***********************/

      ims.set('./icons', {
        hash: 3363004562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpeakerIcon = exports.PhoneIcon = exports.MicIcon = void 0;
          var _react = require("react");
          const PhoneIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
          }), isOff && _react.default.createElement("line", {
            x1: "1",
            y1: "1",
            x2: "23",
            y2: "23",
            stroke: "currentColor",
            strokeWidth: "2"
          }));
          exports.PhoneIcon = PhoneIcon;
          const MicIcon = ({
            isMuted
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("path", {
            d: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
          }), _react.default.createElement("path", {
            d: "M19 10v2a7 7 0 01-14 0v-2"
          }), _react.default.createElement("line", {
            x1: "12",
            y1: "19",
            x2: "12",
            y2: "23"
          }), _react.default.createElement("line", {
            x1: "8",
            y1: "23",
            x2: "16",
            y2: "23"
          }), isMuted && _react.default.createElement("line", {
            x1: "2",
            y1: "2",
            x2: "22",
            y2: "22",
            strokeLinecap: "round"
          }));
          exports.MicIcon = MicIcon;
          const SpeakerIcon = ({
            isOff
          }) => _react.default.createElement("svg", {
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "mx-auto"
          }, _react.default.createElement("polygon", {
            points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
          }), _react.default.createElement("path", {
            d: isOff ? '' : 'M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07'
          }), isOff && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("line", {
            x1: "23",
            y1: "9",
            x2: "17",
            y2: "15",
            strokeLinecap: "round"
          }), _react.default.createElement("line", {
            x1: "17",
            y1: "9",
            x2: "23",
            y2: "15",
            strokeLinecap: "round"
          })));
          exports.SpeakerIcon = SpeakerIcon;
        }
      });

      /************************
      INTERNAL MODULE: ./widget
      ************************/

      ims.set('./widget', {
        hash: 2565836037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Widget;
          var _react = require("react");
          var _client = require("@aimpact/agents-api/realtime/client");
          var _conversation = require("@aimpact/agents-api/realtime/client/conversation");
          var _state = require("@aimpact/agents-api/realtime/widgets/state");
          var _icons = require("./icons");
          var _devices = require("./devices");
          function Widget() {
            const refs = {
              conversation: (0, _react.useRef)(new _conversation.Conversation('123')),
              client: (0, _react.useRef)(new _client.ClientSession({
                vad: null
              }))
            };
            const state = new _state.State();
            state.define({
              muted: true,
              speaker: false,
              duration: 0
            });
            const {
              values
            } = state;
            const invalidate = (() => {
              const [id, invalidate] = (0, _react.useState)(0);
              return () => invalidate(id + 1);
            })();
            // Set current conversation
            const conversation = refs.conversation.current;
            const client = refs.client.current;
            client.conversation.set(conversation);
            (0, _react.useEffect)(() => {
              console.log('window.client:', client);
              window.client = client;
              client.on('session.open', invalidate);
              client.on('session.created', invalidate);
              client.on('session.ready', invalidate);
              client.on('session.close', invalidate);
              return () => {
                client.off('session.open', invalidate);
                client.off('session.created', invalidate);
                client.off('session.ready', invalidate);
                client.off('session.close', invalidate);
              };
            }, []);
            (0, _react.useEffect)(() => {
              let interval;
              const ready = () => {
                console.warn('ready');
                interval = setInterval(() => values.duration++, 1000);
              };
              const initiate = () => {
                const chatId = ``;
                console.log('client.update... send: conversation and firebaseToken', chatId);
                const token = ``;
                // Add error handling
                client.update({
                  conversation: {
                    id: chatId
                  },
                  token
                });
                interval = setInterval(() => values.duration++, 1000);
              };
              const end = () => {
                clearInterval(interval);
                values.duration = 0;
              };
              client.on('session.created', initiate);
              client.on('session.ready', ready);
              client.on('session.close', end);
              return () => {
                end();
                client.off('session.created', initiate);
                client.off('session.ready', ready);
                client.off('session.close', end);
              };
            }, []);
            const mins = Math.floor(values.duration / 60);
            const secs = values.duration % 60;
            const timer = `${mins}:${secs.toString().padStart(2, '0')}`;
            const handlers = {
              call: () => {
                if (client.status === 'closed') {
                  client.connect();
                  invalidate(); // To update calling state to 'connecting'
                }
                if (['open', 'created'].includes(client.status)) {
                  client.close();
                  invalidate(); // To update calling state to 'closing'
                }
              },
              onmic: () => {
                const muted = !values.muted;
                values.muted = muted;
                muted ? client.recorder.stop() : client.recorder.record();
              }
            };
            const {
              status,
              valid
            } = client;
            const active = ['connecting', 'open', 'created'].includes(status);
            if (!valid) {
              const {
                recorder,
                player
              } = client;
              const errors = [];
              if (recorder?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "recorder-error"
                }, "\u2022 Recorder is invalid: ", recorder.error.message));
              }
              if (player?.error) {
                errors.push(_react.default.createElement("div", {
                  key: "player-error"
                }, "\u2022 Audio player is invalid: ", player.error.message));
              }
              return _react.default.createElement("div", {
                className: "phone flex items-center justify-center min-h-screen bg-gray-100"
              }, _react.default.createElement("div", null, "Errors found:"), errors);
            }
            return _react.default.createElement("div", {
              className: "phone flex items-center justify-center min-h-screen bg-gray-100"
            }, _react.default.createElement("div", {
              className: "w-80 bg-white rounded-lg shadow-xl p-6"
            }, _react.default.createElement("div", {
              className: "text-center mb-8"
            }, _react.default.createElement("p", {
              className: "text-gray-500"
            }, status === 'closed' && 'Ready to call', status === 'connecting' && 'Calling.', status === 'open' && 'Calling...', status === 'closing' && 'Hunging up', status === 'created' && timer)), _react.default.createElement("div", {
              className: "grid grid-cols-3 gap-4 mb-6"
            }, _react.default.createElement("button", {
              type: "button",
              "aria-label": "Set mic on/off",
              onClick: handlers.onmic,
              disabled: !active,
              className: `p-4 rounded-full flex items-center justify-center transition-colors ${!active ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : values.muted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            }, _react.default.createElement(_icons.MicIcon, {
              isMuted: values.muted
            })), _react.default.createElement("button", {
              type: "button",
              "aria-label": "Call button",
              onClick: handlers.call,
              className: `p-4 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-green-500 text-white hover:bg-green-600'}`
            }, _react.default.createElement(_icons.PhoneIcon, {
              isOff: active
            })), _react.default.createElement("button", {
              type: "button",
              "aria-label": "Set speaker on/off",
              onClick: () => values.speaker = !values.speaker,
              disabled: !active,
              className: `p-4 rounded-full flex items-center justify-center transition-colors ${!active ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : values.speaker ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            }, _react.default.createElement(_icons.SpeakerIcon, {
              isOff: !values.speaker
            }))), _react.default.createElement(_devices.SelectDevice, {
              client: client
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfd2lkZ2V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJkZWZhdWx0IiwiZXhwb3J0cyIsIl9yZWNvcmRlciIsIl9yZWFjdCIsIl9zdGF0ZSIsIlNlbGVjdERldmljZSIsImNsaWVudCIsInN0YXRlIiwiU3RhdGUiLCJkZWZpbmUiLCJhdmFpbGFibGUiLCJzZWxlY3RlZCIsImZldGNoZWQiLCJlcnJvciIsInZhbHVlcyIsInVzZUVmZmVjdCIsImRldmljZXMiLCJwcmVwYXJlIiwidGhlbiIsInNlbGVjdCIsImlkIiwiY2F0Y2giLCJleGMiLCJjb25zb2xlIiwiZGV2aWNlIiwiZmluZCIsInJlY29yZGVyIiwib25jaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJvbkNoYW5nZSIsIm1hcCIsImtleSIsImxhYmVsIiwiUGhvbmVJY29uIiwiaXNPZmYiLCJ2aWV3Qm94Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJNaWNJY29uIiwiaXNNdXRlZCIsInN0cm9rZUxpbmVjYXAiLCJTcGVha2VySWNvbiIsInBvaW50cyIsIkZyYWdtZW50IiwiX2NsaWVudCIsIl9jb252ZXJzYXRpb24iLCJfaWNvbnMiLCJfZGV2aWNlcyIsInJlZnMiLCJjb252ZXJzYXRpb24iLCJ1c2VSZWYiLCJDb252ZXJzYXRpb24iLCJDbGllbnRTZXNzaW9uIiwidmFkIiwibXV0ZWQiLCJzcGVha2VyIiwiZHVyYXRpb24iLCJpbnZhbGlkYXRlIiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic2V0IiwibG9nIiwid2luZG93Iiwib24iLCJvZmYiLCJpbnRlcnZhbCIsInJlYWR5Iiwid2FybiIsInNldEludGVydmFsIiwiaW5pdGlhdGUiLCJjaGF0SWQiLCJ0b2tlbiIsInVwZGF0ZSIsImVuZCIsImNsZWFySW50ZXJ2YWwiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwic2VjcyIsInRpbWVyIiwidG9TdHJpbmciLCJwYWRTdGFydCIsImhhbmRsZXJzIiwiY2FsbCIsInN0YXR1cyIsImNvbm5lY3QiLCJpbmNsdWRlcyIsImNsb3NlIiwib25taWMiLCJzdG9wIiwicmVjb3JkIiwidmFsaWQiLCJhY3RpdmUiLCJwbGF5ZXIiLCJlcnJvcnMiLCJwdXNoIiwibWVzc2FnZSIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlcyI6WyIvL2NvbnRyb2xsZXIudHMvIiwiLy9kZXZpY2VzLnRzeC8iLCIvL2ljb25zLnRzeC8iLCIvL3dpZGdldC50c3gvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsT0FBQSxHQUFBRCxPQUFBO1VBRU87VUFBVSxNQUNYRSxVQUFXLFNBQVFILEtBQUEsQ0FBQUkseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxPQUFBLENBQUFJLE9BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBSixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEQsSUFBQUssU0FBQSxHQUFBUCxPQUFBO1VBQ0EsSUFBQVEsTUFBQSxHQUFBUixPQUFBO1VBQ0EsSUFBQVMsTUFBQSxHQUFBVCxPQUFBO1VBU08sTUFBTVUsWUFBWSxHQUFHQSxDQUFDO1lBQUVDO1VBQU0sQ0FBaUMsS0FBSTtZQUN6RSxNQUFNQyxLQUFLLEdBQWtCLElBQUlILE1BQUEsQ0FBQUksS0FBSyxFQUFFO1lBQ3hDRCxLQUFLLENBQUNFLE1BQU0sQ0FBQztjQUFFQyxTQUFTLEVBQUUsRUFBRTtjQUFFQyxRQUFRLEVBQUUsRUFB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QTtjQUNDK0UsSUFBSSxFQUFDLFFBQVE7Y0FBQSxjQUNGLGdCQUFnQjtjQUMzQkMsT0FBTyxFQUFFaEIsUUFBUSxDQUFDTSxLQUFLO2NBQ3ZCVyxRQUFRLEVBQUUsQ0FBQ1AsTUFBTTtjQUNqQnpFLFNBQVMsRUFBRSx1RUFDVixDQUFDeUUsTUFBTSxHQUNKLDhDQUE4QyxHQUM5QzNGLE1BQU0sQ0FBQ3FELEtBQUssR0FDWix5QkFBeUIsR0FDekIsNkNBQ0o7WUFBRSxHQUVGaEUsTUFBQSxDQUFBSCxPQUFBLENBQUErQixhQUFBLENBQUM0QixNQUFBLENBQUFSLE9BQU87Y0FBQ0MsT0FBTyxFQUFFdEMsTUFBTSxDQUFDcUQ7WUFBSyxFQUFJLENBQzFCLEVBQ1RoRSxNQUFBLENBQUFILE9BQUEsQ0FBQStCLGFBQUE7Y0FDQytFLElBQUksRUFBQyxRQUFRO2NBQUEsY0FDRixhQUFhO2NBQ3hCQyxPQUFPLEVBQUVoQixRQUFRLENBQUNDLElBQUk7Y0FDdEJoRSxTQUFTLEVBQUUsdUVBQ1Z5RSxNQUFNLEdBQ0gsd0NBQXdDLEdBQ3hDLDRDQUNKO1lBQUUsR0FFRnRHLE1BQUEsQ0FBQUgsT0FBQSxDQUFBK0IsYUFBQSxDQUFDNEIsTUFBQSxDQUFBckIsU0FBUztjQUFDQyxLQUFLLEVBQUVrRTtZQUFNLEVBQUksQ0FDcEIsRUFDVHRHLE1BQUEsQ0FBQUgsT0FBQSxDQUFBK0IsYUFBQTtjQUNDK0UsSUFBSSxFQUFDLFFBQVE7Y0FBQSxjQUNGLG9CQUFvQjtjQUMvQkMsT0FBTyxFQUFFQSxDQUFBLEtBQU9qRyxNQUFNLENBQUNzRCxPQUFPLEdBQUcsQ0FBQ3RELE1BQU0sQ0FBQ3NELE9BQVE7Y0FDakQ0QyxRQUFRLEVBQUUsQ0FBQ1AsTUFBTTtjQUNqQnpFLFNBQVMsRUFBRSx1RUFDVixDQUFDeUUsTUFBTSxHQUNKLDhDQUE4QyxHQUM5QzNGLE1BQU0sQ0FBQ3NELE9BQU8sR0FDZCwyQkFBMkIsR0FDM0IsNkNBQ0o7WUFBRSxHQUVGakUsTUFBQSxDQUFBSCxPQUFBLENBQUErQixhQUFBLENBQUM0QixNQUFBLENBQUFMLFdBQVc7Y0FBQ2YsS0FBSyxFQUFFLENBQUN6QixNQUFNLENBQUNzRDtZQUFPLEVBQUksQ0FDL0IsQ0FDSixFQUVOakUsTUFBQSxDQUFBSCxPQUFBLENBQUErQixhQUFBLENBQUM2QixRQUFBLENBQUF2RCxZQUFZO2NBQUNDLE1BQU0sRUFBRUE7WUFBTSxFQUFpQixDQUN4QyxDQUNEO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=