System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/agents-api@0.4.1/realtime/channel"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;
  _export("Controller", void 0);
  return {
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_4 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactAgentsApi041RealtimeChannel) {
      dependency_5 = _aimpactAgentsApi041RealtimeChannel;
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
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/agents-api/realtime/channel', dependency_5]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "realtime-home-page",
        "vspecifier": "@aimpact/agents-api@0.4.1/realtime/home",
        "is": "page",
        "route": "/realtime-home"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/agents-api@0.4.1/realtime/home');
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./actions-panel
      *******************************/
      ims.set('./actions-panel', {
        hash: 434956266,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActionsPanel = ActionsPanel;
          var React = require("react");
          function ActionsPanel({
            isConnected,
            canPushToTalk,
            isRecording,
            connectConversation,
            disconnectConversation,
            startRecording,
            stopRecording
          }) {
            return React.createElement("div", {
              className: "content-actions"
            }, isConnected && canPushToTalk && React.createElement("button", {
              onMouseDown: startRecording,
              onMouseUp: stopRecording,
              className: isRecording ? 'alert' : 'regular'
            }, isRecording ? 'release to send' : 'push to talk'), React.createElement("div", {
              className: "spacer"
            }), React.createElement("button", {
              onClick: isConnected ? disconnectConversation : connectConversation,
              className: isConnected ? 'regular' : 'action'
            }, isConnected ? 'disconnect' : 'connect'));
          }
        }
      });

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

      /**********************************
      INTERNAL MODULE: ./conversation-log
      **********************************/

      ims.set('./conversation-log', {
        hash: 451772902,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationLog = ConversationLog;
          var React = require("react");
          function ConversationLog({
            items,
            deleteItem
          }) {
            return React.createElement("div", {
              className: "content-block conversation"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "conversation"), React.createElement("div", {
              className: "content-block-body",
              "data-conversation-content": true
            }, !items.length && `awaiting connection...`, items.map(conversationItem => React.createElement("div", {
              className: "conversation-item",
              key: conversationItem.id
            }, React.createElement("div", {
              className: `speaker ${conversationItem.role || ''}`
            }, React.createElement("div", null, (conversationItem.role || conversationItem.type).replaceAll('_', ' ')), React.createElement("div", {
              className: "close",
              onClick: () => deleteItem(conversationItem.id)
            }, "X")), React.createElement("div", {
              className: `speaker-content`
            }, conversationItem.formatted.output && React.createElement("div", null, conversationItem.formatted.output), conversationItem.formatted.tool && React.createElement("div", null, conversationItem.formatted.tool.name, "(", conversationItem.formatted.tool.arguments, ")"), conversationItem.formatted.transcript && React.createElement("div", null, conversationItem.formatted.transcript), conversationItem.formatted.file && React.createElement("audio", {
              src: conversationItem.formatted.file.url,
              controls: true
            }))))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./events-log
      ****************************/

      ims.set('./events-log', {
        hash: 4150742591,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EventsLog = EventsLog;
          var React = require("react");
          function EventsLog({
            events,
            expandedEvents,
            setExpandedEvents
          }) {
            return React.createElement("div", {
              className: "content-block events"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "events"), React.createElement("div", {
              className: "content-block-body"
            }, !events.length && `awaiting connection...`, events.map(event => {
              const isExpanded = !!expandedEvents[event.event_id];
              return React.createElement("div", {
                className: "event",
                key: event.event_id
              }, React.createElement("div", {
                className: "event-summary",
                onClick: () => {
                  setExpandedEvents(expanded => ({
                    ...expanded,
                    [event.event_id]: !isExpanded
                  }));
                }
              }, React.createElement("span", null, event.source, " - ", event.type)), isExpanded && React.createElement("div", {
                className: "event-details"
              }, JSON.stringify(event, null, 2)));
            })));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./header
      ************************/

      ims.set('./header', {
        hash: 1313151065,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var React = require("react");
          function Header({
            apiKey,
            resetAPIKey
          }) {
            return React.createElement("div", {
              className: "content-top"
            }, React.createElement("div", {
              className: "content-title"
            }, React.createElement("img", {
              src: "/openai-logomark.svg",
              alt: "OpenAI Logo"
            }), React.createElement("span", null, "Realtime Console")), React.createElement("div", {
              className: "content-api-key"
            }, React.createElement("button", {
              onClick: resetAPIKey
            }, "API Key: ", apiKey.slice(0, 3), "...")));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./memory-panel
      ******************************/

      ims.set('./memory-panel', {
        hash: 2416437136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MemoryPanel = MemoryPanel;
          var React = require("react");
          function MemoryPanel({
            memoryKv
          }) {
            return React.createElement("div", {
              className: "content-block kv"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "set_memory()"), React.createElement("div", {
              className: "content-block-body content-kv"
            }, JSON.stringify(memoryKv, null, 2)));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./weather-panel
      *******************************/

      ims.set('./weather-panel', {
        hash: 1557191404,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WeatherPanel = WeatherPanel;
          var React = require("react");
          function WeatherPanel({
            coords,
            marker
          }) {
            return React.createElement("div", {
              className: "content-block map"
            }, React.createElement("div", {
              className: "content-block-title"
            }, "get_weather()"), React.createElement("div", {
              className: "content-block-body"
            }, React.createElement("p", null, "Latitude: ", coords.lat), React.createElement("p", null, "Longitude: ", coords.lng), marker && React.createElement("div", null, React.createElement("p", null, "Location: ", marker.location || 'N/A'), marker.temperature && React.createElement("p", null, "Temperature: ", marker.temperature.value, " ", marker.temperature.units), marker.wind_speed && React.createElement("p", null, "Wind Speed: ", marker.wind_speed.value, " ", marker.wind_speed.units))));
          }
        }
      });

      /************************
      INTERNAL MODULE: ./widget
      ************************/

      ims.set('./widget', {
        hash: 2315923907,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var React = require("react");
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _index = require("../lib/wavtools/index.js");
          var _header = require("./header");
          var _eventsLog = require("./events-log");
          var _conversationLog = require("./conversation-log");
          var _actionsPanel = require("./actions-panel");
          var _weatherPanel = require("./weather-panel");
          var _memoryPanel = require("./memory-panel");
          const {
            useRef,
            useState,
            useEffect,
            useCallback
          } = React;
          const apiKey = localStorage.getItem('openai-key');
          const channel = new _channel.Channel({
            apiKey,
            dangerouslyAllowAPIKeyInBrowser: true
          });
          channel.connect();
          const Widget = () => {
            const LOCAL_RELAY_SERVER_URL = process.env.REACT_APP_LOCAL_RELAY_SERVER_URL || '';
            const [apiKey, setApiKey] = useState(LOCAL_RELAY_SERVER_URL ? '' : localStorage.getItem('tmp::voice_api_key') || prompt('OpenAI API Key') || '');
            const wavRecorderRef = useRef(new _index.WavRecorder({
              sampleRate: 24000
            }));
            const wavStreamPlayerRef = useRef(new _index.WavStreamPlayer({
              sampleRate: 24000
            }));
            const clientRef = useRef(new RealtimeClient(LOCAL_RELAY_SERVER_URL ? {
              url: LOCAL_RELAY_SERVER_URL
            } : {
              apiKey: apiKey,
              dangerouslyAllowAPIKeyInBrowser: true
            }));
            const [items, setItems] = useState([]);
            const [realtimeEvents, setRealtimeEvents] = useState([]);
            const [expandedEvents, setExpandedEvents] = useState({});
            const [isConnected, setIsConnected] = useState(false);
            const [canPushToTalk, setCanPushToTalk] = useState(true);
            const [isRecording, setIsRecording] = useState(false);
            const [memoryKv, setMemoryKv] = useState({});
            const [coords, setCoords] = useState({
              lat: 37.775593,
              lng: -122.418137
            });
            const [marker, setMarker] = useState(null);
            useEffect(() => {
              if (apiKey) {
                localStorage.setItem('tmp::voice_api_key', apiKey);
              }
            }, [apiKey]);
            const connectConversation = useCallback(async () => {
              const client = clientRef.current;
              const wavRecorder = wavRecorderRef.current;
              const wavStreamPlayer = wavStreamPlayerRef.current;
              setIsConnected(true);
              setRealtimeEvents([]);
              setItems(client.conversation.getItems());
              await wavRecorder.begin();
              await wavStreamPlayer.connect();
              await client.connect();
              client.sendUserMessageContent([{
                type: `input_text`,
                text: `Hello!`
              }]);
            }, []);
            const disconnectConversation = useCallback(async () => {
              setIsConnected(false);
              setRealtimeEvents([]);
              setItems([]);
              setMemoryKv({});
              setCoords({
                lat: 37.775593,
                lng: -122.418137
              });
              setMarker(null);
              const client = clientRef.current;
              client.disconnect();
              const wavRecorder = wavRecorderRef.current;
              await wavRecorder.end();
              const wavStreamPlayer = wavStreamPlayerRef.current;
              await wavStreamPlayer.interrupt();
            }, []);
            const resetAPIKey = useCallback(() => {
              const newApiKey = prompt('OpenAI API Key');
              if (newApiKey !== null) {
                localStorage.clear();
                setApiKey(newApiKey);
                window.location.reload();
              }
            }, []);
            return React.createElement("div", {
              "data-component": "ConsolePage"
            }, React.createElement(_header.Header, {
              apiKey: apiKey,
              resetAPIKey: resetAPIKey
            }), React.createElement("div", {
              className: "content-main"
            }, React.createElement("div", {
              className: "content-logs"
            }, React.createElement(_eventsLog.EventsLog, {
              events: realtimeEvents,
              expandedEvents: expandedEvents,
              setExpandedEvents: setExpandedEvents
            }), React.createElement(_conversationLog.ConversationLog, {
              items: items,
              deleteItem: id => clientRef.current.deleteItem(id)
            }), React.createElement(_actionsPanel.ActionsPanel, {
              isConnected: isConnected,
              canPushToTalk: canPushToTalk,
              isRecording: isRecording,
              connectConversation: connectConversation,
              disconnectConversation: disconnectConversation,
              startRecording: () => setIsRecording(true),
              stopRecording: () => setIsRecording(false)
            })), React.createElement("div", {
              className: "content-right"
            }, React.createElement(_weatherPanel.WeatherPanel, {
              coords: coords,
              marker: marker
            }), React.createElement(_memoryPanel.MemoryPanel, {
              memoryKv: memoryKv
            }))));
          };
          var _default = exports.default = Widget;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBY3Rpb25zUGFuZWwiLCJpc0Nvbm5lY3RlZCIsImNhblB1c2hUb1RhbGsiLCJpc1JlY29yZGluZyIsImNvbm5lY3RDb252ZXJzYXRpb24iLCJkaXNjb25uZWN0Q29udmVyc2F0aW9uIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwib25DbGljayIsIl9wYWdlIiwiX3dpZGdldCIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiZGVmYXVsdCIsImV4cG9ydHMiLCJDb252ZXJzYXRpb25Mb2ciLCJpdGVtcyIsImRlbGV0ZUl0ZW0iLCJsZW5ndGgiLCJtYXAiLCJjb252ZXJzYXRpb25JdGVtIiwia2V5IiwiaWQiLCJyb2xlIiwidHlwZSIsInJlcGxhY2VBbGwiLCJmb3JtYXR0ZWQiLCJvdXRwdXQiLCJ0b29sIiwibmFtZSIsImFyZ3VtZW50cyIsInRyYW5zY3JpcHQiLCJmaWxlIiwic3JjIiwidXJsIiwiY29udHJvbHMiLCJFdmVudHNMb2ciLCJldmVudHMiLCJleHBhbmRlZEV2ZW50cyIsInNldEV4cGFuZGVkRXZlbnRzIiwiZXZlbnQiLCJpc0V4cGFuZGVkIiwiZXZlbnRfaWQiLCJleHBhbmRlZCIsInNvdXJjZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJIZWFkZXIiLCJhcGlLZXkiLCJyZXNldEFQSUtleSIsImFsdCIsInNsaWNlIiwiTWVtb3J5UGFuZWwiLCJtZW1vcnlLdiIsIldlYXRoZXJQYW5lbCIsImNvb3JkcyIsIm1hcmtlciIsImxhdCIsImxuZyIsImxvY2F0aW9uIiwidGVtcGVyYXR1cmUiLCJ2YWx1ZSIsInVuaXRzIiwid2luZF9zcGVlZCIsIl9jaGFubmVsIiwiX2luZGV4IiwiX2hlYWRlciIsIl9ldmVudHNMb2ciLCJfY29udmVyc2F0aW9uTG9nIiwiX2FjdGlvbnNQYW5lbCIsIl93ZWF0aGVyUGFuZWwiLCJfbWVtb3J5UGFuZWwiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNoYW5uZWwiLCJDaGFubmVsIiwiZGFuZ2Vyb3VzbHlBbGxvd0FQSUtleUluQnJvd3NlciIsImNvbm5lY3QiLCJMT0NBTF9SRUxBWV9TRVJWRVJfVVJMIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9MT0NBTF9SRUxBWV9TRVJWRVJfVVJMIiwic2V0QXBpS2V5IiwicHJvbXB0Iiwid2F2UmVjb3JkZXJSZWYiLCJXYXZSZWNvcmRlciIsInNhbXBsZVJhdGUiLCJ3YXZTdHJlYW1QbGF5ZXJSZWYiLCJXYXZTdHJlYW1QbGF5ZXIiLCJjbGllbnRSZWYiLCJSZWFsdGltZUNsaWVudCIsInNldEl0ZW1zIiwicmVhbHRpbWVFdmVudHMiLCJzZXRSZWFsdGltZUV2ZW50cyIsInNldElzQ29ubmVjdGVkIiwic2V0Q2FuUHVzaFRvVGFsayIsInNldElzUmVjb3JkaW5nIiwic2V0TWVtb3J5S3YiLCJzZXRDb29yZHMiLCJzZXRNYXJrZXIiLCJzZXRJdGVtIiwiY2xpZW50IiwiY3VycmVudCIsIndhdlJlY29yZGVyIiwid2F2U3RyZWFtUGxheWVyIiwiY29udmVyc2F0aW9uIiwiZ2V0SXRlbXMiLCJiZWdpbiIsInNlbmRVc2VyTWVzc2FnZUNvbnRlbnQiLCJ0ZXh0IiwiZGlzY29ubmVjdCIsImVuZCIsImludGVycnVwdCIsIm5ld0FwaUtleSIsImNsZWFyIiwid2luZG93IiwicmVsb2FkIiwiX2RlZmF1bHQiXSwic291cmNlcyI6WyIvL2FjdGlvbnMtcGFuZWwudHN4LyIsIi8vY29udHJvbGxlci50cy8iLCIvL2NvbnZlcnNhdGlvbi1sb2cudHN4LyIsIi8vZXZlbnRzLWxvZy50c3gvIiwiLy9oZWFkZXIudHN4LyIsIi8vbWVtb3J5LXBhbmVsLnRzeC8iLCIvL3dlYXRoZXItcGFuZWwudHN4LyIsIi8vd2lkZ2V0LnRzeC8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQVlNLFNBQVVDLFlBQVlBLENBQUM7WUFDNUJDLFdBQVc7WUFDWEMsYUFBYTtZQUNiQyxXQUFXO1lBQ1hDLG1CQUFtQjtZQUNuQkMsc0JBQXNCO1lBQ3RCQyxjQUFjO1lBQ2RDO1VBQWEsQ0FDTTtZQUNuQixPQUNDVCxLQUFBLENBQUFVLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQzlCUixXQUFXLElBQUlDLGFBQWEsSUFDNUJKLEtBQUEsQ0FBQVUsYUFBQTtjQUNDRSxXQUFXLEVBQUVKLGNBQWM7Y0FDM0JLLFNBQVMsRUFBRUosYUFBYTtjQUN4QkUsU0FBUyxFQUFFTixXQUFXLEdBQUcsT0FBTyxHQUFHO1lBQVMsR0FFM0NBLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxjQUFjLENBRWxELEVBQ0RMLEtBQUEsQ0FBQVUsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBUSxFQUFHLEVBQzFCWCxLQUFBLENBQUFVLGFBQUE7Y0FDQ0ksT0FBTyxFQUFFWCxXQUFXLEdBQUdJLHNCQUFzQixHQUFHRCxtQkFBbUI7Y0FDbkVLLFNBQVMsRUFBRVIsV0FBVyxHQUFHLFNBQVMsR0FBRztZQUFRLEdBRTVDQSxXQUFXLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FDL0IsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBWSxLQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxPQUFBLEdBQUFmLE9BQUE7VUFFTztVQUFVLE1BQ1hnQixVQUFXLFNBQVFGLEtBQUEsQ0FBQUcseUJBQXlCO1lBQ2pELElBQUlDLE1BQU1BLENBQUE7Y0FDVCxPQUFPSCxPQUFBLENBQUFJLE9BQU07WUFDZDs7VUFDQUMsT0FBQSxDQUFBSixVQUFB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