System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "pragmate-ui@1.0.8/icons", "wavesurfer.js@7.10.1"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_1 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_3 = _pragmateUi108Icons;
    }, function (_wavesurferJs) {
      dependency_4 = _wavesurferJs;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.8"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/audio-player"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['wavesurfer.js', dependency_4]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/audio-player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./context
      *************************/
      ims.set('./context', {
        hash: 1420102872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useComponentAudioContext = exports.ComponentAudioContext = void 0;
          var _react = require("react");
          const ComponentAudioContext = exports.ComponentAudioContext = (0, _react.createContext)({});
          const useComponentAudioContext = () => (0, _react.useContext)(ComponentAudioContext);
          exports.useComponentAudioContext = useComponentAudioContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./hooks/get-element-context
      *******************************************/

      ims.set('./hooks/get-element-context', {
        hash: 2925913507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getAudioContext = void 0;
          const getAudioContext = element => {
            return new Promise((resolve, reject) => {
              const audioContext = new AudioContext();
              const reader = new FileReader();
              reader.onload = () => {
                const buffer = reader.result;
                audioContext.decodeAudioData(buffer).then(() => {
                  resolve(); // Resolve when decoding is successful
                }).catch(error => {
                  reject(error); // Reject on decoding error
                });
              };
              reader.onerror = error => {
                reject(error); // Reject on file reading error
              };
              reader.readAsArrayBuffer(element); // Start reading the Blob
            });
          };
          exports.getAudioContext = getAudioContext;
        }
      });

      /*********************************
      INTERNAL MODULE: ./hooks/use-audio
      *********************************/

      ims.set('./hooks/use-audio', {
        hash: 1792914286,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAudio = useAudio;
          var _react = require("react");
          var _getElementContext = require("./get-element-context");
          function useAudio(src, convert) {
            const audioRef = _react.default.useRef(null);
            const [audio, setAudio] = _react.default.useState(null);
            const [buffer, setBuffer] = _react.default.useState();
            const [ready, setReady] = _react.default.useState();
            const [data, setData] = _react.default.useState({
              src
            });
            const [error, setError] = _react.default.useState(false);
            const ref = audioRef.current;
            _react.default.useEffect(() => {
              try {
                const isBlob = src instanceof Blob;
                if (!isBlob) {
                  return;
                }
                const audio = new Audio();
                const onLoadMetadata = () => {
                  data.duration = parseFloat(audio.duration.toFixed(2));
                  //@ts-ignore
                  data.fileName = src.name;
                  setData(data);
                  setAudio(audio);
                  (0, _getElementContext.getAudioContext)(src).then(() => {
                    setReady(true);
                  });
                };
                const onError = error => {
                  console.warn('error', error);
                  setError(true);
                };
                audio.addEventListener('loadedmetadata', onLoadMetadata);
                audio.addEventListener('error', onError);
                audio.src = URL.createObjectURL(src);
                audio.load();
                return;
              } catch (e) {
                console.error('capturado', e.message);
                setError(true);
              }
            }, [src]);
            return {
              ready,
              audioRef: ref,
              buffer,
              audio,
              data,
              error
            };
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1486404008,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var _react = require("react");
          var _useAudio = require("./hooks/use-audio");
          var _icons = require("pragmate-ui/icons");
          var _context = require("./context");
          var _timer = require("./timer");
          var _visualizer = require("./visualizer");
          var _preload = require("./preload");
          /*bundle*/
          function AudioPlayer({
            src,
            convert
          }) {
            const {
              ready,
              audioRef,
              error,
              audio,
              data,
              buffer
            } = (0, _useAudio.useAudio)(src, convert);
            const [playing, setPlaying] = _react.default.useState(false);
            const [currentTime, setCurrentTime] = _react.default.useState(0);
            if (!ready || error) return _react.default.createElement(_preload.Preload, null);
            const actions = {
              play: event => {
                event.stopPropagation();
                audio.play();
                setPlaying(true);
              },
              pause: event => {
                event.stopPropagation();
                audio.pause();
                setPlaying(false);
              },
              restart: event => {
                event.stopPropagation();
              }
            };
            const onClick = event => {
              const action = event.currentTarget.dataset.action;
              actions[action](event);
            };
            const action = playing ? 'pause' : 'play';
            const value = {
              audio,
              data,
              playing,
              buffer,
              setPlaying,
              currentTime,
              setCurrentTime
            };
            return _react.default.createElement(_context.ComponentAudioContext.Provider, {
              value: value
            }, _react.default.createElement("div", {
              className: "audio-player__container"
            }, _react.default.createElement(_icons.IconButton, {
              icon: action,
              "data-action": action,
              onClick: onClick
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement(_visualizer.Visualizer, null)), _react.default.createElement(_timer.Timer, null))));
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./preload
      *************************/

      ims.set('./preload', {
        hash: 258477212,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Preload({}) {
            return _react.default.createElement("div", {
              className: "player__container player__container--preload"
            }, _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "play"
            }), _react.default.createElement("div", {
              className: "audio__container"
            }, _react.default.createElement("div", {
              className: "audio__thumb"
            }, _react.default.createElement("div", {
              className: "range__preload"
            })), _react.default.createElement("div", {
              className: "timer__container"
            }, _react.default.createElement("span", {
              className: "timer__numbers"
            }, "00"), _react.default.createElement("div", {
              className: "timer__separator"
            }, ":"), _react.default.createElement("span", {
              className: "timer__numbers"
            }, "00"))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./progressbar
      *****************************/

      ims.set('./progressbar', {
        hash: 2365172175,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressBar = ProgressBar;
          var _react = require("react");
          var _context = require("./context");
          function ProgressBar() {
            const ref = (0, _react.useRef)(null);
            const {
              audio,
              setCurrentTime,
              setPlaying,
              data: {
                duration
              }
            } = (0, _context.useComponentAudioContext)();
            const [value, setValue] = (0, _react.useState)(0);
            (0, _react.useEffect)(() => {
              const timeUpdateListener = () => {
                const currentTime = audio.currentTime;
                setValue(currentTime);
              };
              const onEnded = event => {
                setPlaying(false);
                setValue(0.1);
                setCurrentTime(0.1);
              };
              audio.addEventListener('timeupdate', timeUpdateListener);
              audio.addEventListener('ended', onEnded);
              return () => {
                audio.removeEventListener('timeupdate', timeUpdateListener);
              };
            }, [audio, duration]);
            const onChange = event => {
              event.stopPropagation();
              const desiredTime = parseFloat(event.currentTarget.value);
              for (let i = 0; i < audio.buffered.length; i++) {
                if (audio.buffered.start(i) <= desiredTime && audio.buffered.end(i) >= desiredTime) {
                  audio.currentTime = desiredTime;
                  setValue(desiredTime);
                  return;
                }
              }
              console.warn('Desired time not in buffered range', audio.buffered.length);
            };
            return _react.default.createElement("input", {
              type: "range",
              name: "rang",
              onClick: onChange,
              onChange: onChange,
              title: "audio duration",
              value: value,
              ref: ref,
              max: duration
            });
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./timer
      ***********************/

      ims.set('./timer', {
        hash: 2388829827,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Timer = Timer;
          var _react = require("react");
          var _context = require("./context");
          function Timer() {
            const {
              data: {
                duration: time
              },
              audio
            } = (0, _context.useComponentAudioContext)();
            if ([Infinity, undefined].includes(time)) return null;
            const [timeToShow, setTimeToShow] = _react.default.useState(time);
            _react.default.useEffect(() => {
              audio.addEventListener('play', () => {
                setTimeToShow(audio.currentTime);
              });
              audio.addEventListener('pause', () => {
                setTimeToShow(time);
              });
              audio.addEventListener('stop', () => {
                setTimeToShow(time);
              });
              audio.addEventListener('timeupdate', () => {
                setTimeToShow(audio.currentTime);
              });
            }, []);
            let hours = Math.floor(timeToShow / 3600);
            let minutes = Math.floor(timeToShow % 3600 / 60);
            let seconds = Math.round(timeToShow % 60);
            const output = [];
            if (hours > 0) {
              output.push(_react.default.createElement("span", {
                key: "hours",
                className: "timer__numbers timer__numbers--hours"
              }, hours));
            }
            if (minutes < 10) minutes = '0' + minutes;
            output.push(_react.default.createElement(_react.default.Fragment, {
              key: "minutes"
            }, _react.default.createElement("span", {
              className: "timer__numbers timer__number--minutes"
            }, minutes ?? '00'), _react.default.createElement("span", {
              className: "timer__separator"
            }, ":")));
            if (seconds < 10) seconds = '0' + seconds;
            output.push(_react.default.createElement("span", {
              key: "seconds",
              className: "timer__numbers timer__number--seconds"
            }, seconds ?? '00'));
            return _react.default.createElement("section", {
              className: "timer__container"
            }, output);
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./types/IAudioInterface
      ***************************************/

      ims.set('./types/IAudioInterface', {
        hash: 377341658,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./visualizer
      ****************************/

      ims.set('./visualizer', {
        hash: 2343976179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Visualizer = Visualizer;
          var _react = require("react");
          var _context = require("./context");
          var _wavesurfer = require("wavesurfer.js");
          function Visualizer() {
            const {
              buffer,
              audio
            } = (0, _context.useComponentAudioContext)();
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              // const blobUrl = URL.createObjectURL(message.audio);
              const wavesurfer = _wavesurfer.default.create({
                container: ref.current,
                waveColor: '#f0f0f0',
                progressColor: '#007bff',
                barWidth: 2,
                barHeight: 1,
                cursorWidth: 0,
                height: 20,
                normalize: true,
                hideScrollbar: true,
                backend: 'MediaElement',
                // media: blobUrl,
                // Set a bar width
                // Optionally, specify the spacing between bars
                barGap: 1,
                // And the bar radius
                barRadius: 2
                // plugins: [WaveSurfer.cursor.create({ showTime: true })]
              });
              wavesurfer.load(audio.src);
              return () => {
                wavesurfer.destroy();
              };
            }, [{}]);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "element",
              ref: ref
            }));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./index').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiQ29tcG9uZW50QXVkaW9Db250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb21wb25lbnRBdWRpb0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiZ2V0QXVkaW9Db250ZXh0IiwiZWxlbWVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImJ1ZmZlciIsInJlc3VsdCIsImRlY29kZUF1ZGlvRGF0YSIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwib25lcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwiX2dldEVsZW1lbnRDb250ZXh0IiwidXNlQXVkaW8iLCJzcmMiLCJjb252ZXJ0IiwiYXVkaW9SZWYiLCJkZWZhdWx0IiwidXNlUmVmIiwiYXVkaW8iLCJzZXRBdWRpbyIsInVzZVN0YXRlIiwic2V0QnVmZmVyIiwicmVhZHkiLCJzZXRSZWFkeSIsImRhdGEiLCJzZXREYXRhIiwic2V0RXJyb3IiLCJyZWYiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwiaXNCbG9iIiwiQmxvYiIsIkF1ZGlvIiwib25Mb2FkTWV0YWRhdGEiLCJkdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZmlsZU5hbWUiLCJuYW1lIiwib25FcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvYWQiLCJlIiwibWVzc2FnZSIsIl91c2VBdWRpbyIsIl9pY29ucyIsIl9jb250ZXh0IiwiX3RpbWVyIiwiX3Zpc3VhbGl6ZXIiLCJfcHJlbG9hZCIsIkF1ZGlvUGxheWVyIiwicGxheWluZyIsInNldFBsYXlpbmciLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwiY3JlYXRlRWxlbWVudCIsIlByZWxvYWQiLCJhY3Rpb25zIiwicGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicGF1c2UiLCJyZXN0YXJ0Iiwib25DbGljayIsImFjdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwidmFsdWUiLCJQcm92aWRlciIsImNsYXNzTmFtZSIsIkljb25CdXR0b24iLCJpY29uIiwiVmlzdWFsaXplciIsIlRpbWVyIiwiZGlzYWJsZWQiLCJQcm9ncmVzc0JhciIsInNldFZhbHVlIiwidGltZVVwZGF0ZUxpc3RlbmVyIiwib25FbmRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNoYW5nZSIsImRlc2lyZWRUaW1lIiwiaSIsImJ1ZmZlcmVkIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJ0eXBlIiwidGl0bGUiLCJtYXgiLCJ0aW1lIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsInRpbWVUb1Nob3ciLCJzZXRUaW1lVG9TaG93IiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyIsInJvdW5kIiwib3V0cHV0IiwicHVzaCIsImtleSIsIkZyYWdtZW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfd2F2ZXN1cmZlciIsIndhdmVzdXJmZXIiLCJjcmVhdGUiLCJjb250YWluZXIiLCJ3YXZlQ29sb3IiLCJwcm9ncmVzc0NvbG9yIiwiYmFyV2lkdGgiLCJiYXJIZWlnaHQiLCJjdXJzb3JXaWR0aCIsImhlaWdodCIsIm5vcm1hbGl6ZSIsImhpZGVTY3JvbGxiYXIiLCJiYWNrZW5kIiwiYmFyR2FwIiwiYmFyUmFkaXVzIiwiZGVzdHJveSJdLCJzb3VyY2VzIjpbIi8vdHMvY29udGV4dC50c3giLCIvL3RzL2hvb2tzL2dldC1lbGVtZW50LWNvbnRleHQudHMiLCIvL3RzL2hvb2tzL3VzZS1hdWRpby50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvcHJlbG9hZC50c3giLCIvL3RzL3Byb2dyZXNzYmFyLnRzeCIsIi8vdHMvdGltZXIudHN4IiwiLy9JQXVkaW9JbnRlcmZhY2UudHMvIiwiLy90cy92aXN1YWxpemVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBWU8sTUFBTUMscUJBQXFCLEdBQUFDLE9BQUEsQ0FBQUQscUJBQUEsR0FBRyxJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBQyxFQUFtQixDQUFDO1VBQ2hFLE1BQU1DLHdCQUF3QixHQUFHQSxDQUFBLEtBQU0sSUFBQUwsTUFBQSxDQUFBTSxVQUFVLEVBQUNKLHFCQUFxQixDQUFDO1VBQUNDLE9BQUEsQ0FBQUUsd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYnpFLE1BQU1FLGVBQWUsR0FBSUMsT0FBYSxJQUFtQjtZQUMvRCxPQUFPLElBQUlDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sS0FBSTtjQUN0QyxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsWUFBWSxFQUFFO2NBQ3ZDLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFVLEVBQUU7Y0FFL0JELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLE1BQUs7Z0JBQ3BCLE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxDQUFDSSxNQUFxQjtnQkFDM0NOLFlBQVksQ0FDVk8sZUFBZSxDQUFDRixNQUFNLENBQUMsQ0FDdkJHLElBQUksQ0FBQyxNQUFLO2tCQUNWVixPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUNEVyxLQUFLLENBQUNDLEtBQUssSUFBRztrQkFDZFgsTUFBTSxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUM7Y0FDSixDQUFDO2NBRURSLE1BQU0sQ0FBQ1MsT0FBTyxHQUFHRCxLQUFLLElBQUc7Z0JBQ3hCWCxNQUFNLENBQUNXLEtBQUssQ0FBQyxDQUFDLENBQUM7Y0FDaEIsQ0FBQztjQUVEUixNQUFNLENBQUNVLGlCQUFpQixDQUFDaEIsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUM7VUFDSCxDQUFDO1VBQUNMLE9BQUEsQ0FBQUksZUFBQSxHQUFBQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCRixJQUFBUCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBd0Isa0JBQUEsR0FBQXhCLE9BQUE7VUFXTSxTQUFVeUIsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPO1lBQ3BDLE1BQU1DLFFBQVEsR0FBRzdCLE1BQUEsQ0FBQThCLE9BQUssQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNuQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdqQyxNQUFBLENBQUE4QixPQUFLLENBQUNJLFFBQVEsQ0FBb0IsSUFBSSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQ2pCLE1BQU0sRUFBRWtCLFNBQVMsQ0FBQyxHQUFHbkMsTUFBQSxDQUFBOEIsT0FBSyxDQUFDSSxRQUFRLEVBQWU7WUFDekQsTUFBTSxDQUFDRSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHckMsTUFBQSxDQUFBOEIsT0FBSyxDQUFDSSxRQUFRLEVBQVc7WUFDbkQsTUFBTSxDQUFDSSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHdkMsTUFBQSxDQUFBOEIsT0FBSyxDQUFDSSxRQUFRLENBQWtCO2NBQUVQO1lBQUcsQ0FBRSxDQUFDO1lBQ2hFLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFa0IsUUFBUSxDQUFDLEdBQUd4QyxNQUFBLENBQUE4QixPQUFLLENBQUNJLFFBQVEsQ0FBVSxLQUFLLENBQUM7WUFDeEQsTUFBTU8sR0FBRyxHQUFHWixRQUFRLENBQUNhLE9BQU87WUFFNUIxQyxNQUFBLENBQUE4QixPQUFLLENBQUNhLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCLElBQUk7Z0JBQ0gsTUFBTUMsTUFBTSxHQUFHakIsR0FBRyxZQUFZa0IsSUFBSTtnQkFDbEMsSUFBSSxDQUFDRCxNQUFNLEVBQUU7a0JBQ1o7O2dCQUdELE1BQU1aLEtBQUssR0FBRyxJQUFJYyxLQUFLLEVBQUU7Z0JBRXpCLE1BQU1DLGNBQWMsR0FBR0EsQ0FBQSxLQUFLO2tCQUMzQlQsSUFBSSxDQUFDVSxRQUFRLEdBQUdDLFVBQVUsQ0FBQ2pCLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2tCQUNyRDtrQkFDQVosSUFBSSxDQUFDYSxRQUFRLEdBQUd4QixHQUFHLENBQUN5QixJQUFJO2tCQUN4QmIsT0FBTyxDQUFDRCxJQUFJLENBQUM7a0JBQ2JMLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO2tCQUNmLElBQUFQLGtCQUFBLENBQUFsQixlQUFlLEVBQUNvQixHQUFHLENBQUMsQ0FBQ1AsSUFBSSxDQUFDLE1BQUs7b0JBQzlCaUIsUUFBUSxDQUFDLElBQUksQ0FBQztrQkFDZixDQUFDLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxNQUFNZ0IsT0FBTyxHQUFHL0IsS0FBSyxJQUFHO2tCQUN2QmdDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRWpDLEtBQUssQ0FBQztrQkFDNUJrQixRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNmLENBQUM7Z0JBQ0RSLEtBQUssQ0FBQ3dCLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFVCxjQUFjLENBQUM7Z0JBQ3hEZixLQUFLLENBQUN3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVILE9BQU8sQ0FBQztnQkFDeENyQixLQUFLLENBQUNMLEdBQUcsR0FBRzhCLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDL0IsR0FBRyxDQUFDO2dCQUNwQ0ssS0FBSyxDQUFDMkIsSUFBSSxFQUFFO2dCQUVaO2VBQ0EsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hOLE9BQU8sQ0FBQ2hDLEtBQUssQ0FBQyxXQUFXLEVBQUVzQyxDQUFDLENBQUNDLE9BQU8sQ0FBQztnQkFDckNyQixRQUFRLENBQUMsSUFBSSxDQUFDOztZQUVoQixDQUFDLEVBQUUsQ0FBQ2IsR0FBRyxDQUFDLENBQUM7WUFFVCxPQUFPO2NBQ05TLEtBQUs7Y0FDTFAsUUFBUSxFQUFFWSxHQUFHO2NBQ2J4QixNQUFNO2NBQ05lLEtBQUs7Y0FDTE0sSUFBSTtjQUNKaEI7YUFDQTtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQSxJQUFBdEIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZELFNBQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsTUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUErRCxRQUFBLEdBQUEvRCxPQUFBO1VBRUEsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBaUUsV0FBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFrRSxRQUFBLEdBQUFsRSxPQUFBO1VBRU87VUFBVSxTQUFVbUUsV0FBV0EsQ0FBQztZQUFFekMsR0FBRztZQUFFQztVQUFPLENBQUU7WUFDdEQsTUFBTTtjQUFFUSxLQUFLO2NBQUVQLFFBQVE7Y0FBRVAsS0FBSztjQUFFVSxLQUFLO2NBQUVNLElBQUk7Y0FBRXJCO1lBQU0sQ0FBRSxHQUFHLElBQUE2QyxTQUFBLENBQUFwQyxRQUFRLEVBQUNDLEdBQUcsRUFBRUMsT0FBTyxDQUFDO1lBQzlFLE1BQU0sQ0FBQ3lDLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd0RSxNQUFBLENBQUE4QixPQUFLLENBQUNJLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTSxDQUFDcUMsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3hFLE1BQUEsQ0FBQThCLE9BQUssQ0FBQ0ksUUFBUSxDQUFDLENBQUMsQ0FBQztZQUV2RCxJQUFJLENBQUNFLEtBQUssSUFBSWQsS0FBSyxFQUFFLE9BQU90QixNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBLENBQUNOLFFBQUEsQ0FBQU8sT0FBTyxPQUFHO1lBQ3ZDLE1BQU1DLE9BQU8sR0FBRztjQUNmQyxJQUFJLEVBQUVDLEtBQUssSUFBRztnQkFDYkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Z0JBQ3ZCOUMsS0FBSyxDQUFDNEMsSUFBSSxFQUFFO2dCQUNaTixVQUFVLENBQUMsSUFBSSxDQUFDO2NBQ2pCLENBQUM7Y0FDRFMsS0FBSyxFQUFFRixLQUFLLElBQUc7Z0JBQ2RBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2dCQUN2QjlDLEtBQUssQ0FBQytDLEtBQUssRUFBRTtnQkFDYlQsVUFBVSxDQUFDLEtBQUssQ0FBQztjQUNsQixDQUFDO2NBQ0RVLE9BQU8sRUFBRUgsS0FBSyxJQUFHO2dCQUNoQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDeEI7YUFDQTtZQUVELE1BQU1HLE9BQU8sR0FBR0osS0FBSyxJQUFHO2NBQ3ZCLE1BQU1LLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTTtjQUNqRFAsT0FBTyxDQUFDTyxNQUFNLENBQUMsQ0FBQ0wsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxNQUFNSyxNQUFNLEdBQUdiLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTTtZQUN6QyxNQUFNZ0IsS0FBSyxHQUFHO2NBQ2JyRCxLQUFLO2NBQ0xNLElBQUk7Y0FDSitCLE9BQU87Y0FDUHBELE1BQU07Y0FDTnFELFVBQVU7Y0FDVkMsV0FBVztjQUNYQzthQUNBO1lBQ0QsT0FDQ3hFLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUEsQ0FBQ1QsUUFBQSxDQUFBOUQscUJBQXFCLENBQUNvRixRQUFRO2NBQUNELEtBQUssRUFBRUE7WUFBSyxHQUMzQ3JGLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDdkYsTUFBQSxDQUFBOEIsT0FBQSxDQUFBMkMsYUFBQSxDQUFDVixNQUFBLENBQUF5QixVQUFVO2NBQUNDLElBQUksRUFBRVAsTUFBTTtjQUFBLGVBQWVBLE1BQU07Y0FBRUQsT0FBTyxFQUFFQTtZQUFPLEVBQUksRUFDbkVqRixNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBO2NBQUtjLFNBQVMsRUFBQztZQUFrQixHQUNoQ3ZGLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWMsR0FFNUJ2RixNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBLENBQUNQLFdBQUEsQ0FBQXdCLFVBQVUsT0FBRyxDQUNULEVBQ04xRixNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBLENBQUNSLE1BQUEsQ0FBQTBCLEtBQUssT0FBRyxDQUNKLENBQ0QsQ0FDMEI7VUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBLElBQUEzRixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBOEQsTUFBQSxHQUFBOUQsT0FBQTtVQUVNLFNBQVV5RSxPQUFPQSxDQUFDLEVBQUU7WUFDekIsT0FDQzFFLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQThDLEdBQzVEdkYsTUFBQSxDQUFBOEIsT0FBQSxDQUFBMkMsYUFBQSxDQUFDVixNQUFBLENBQUF5QixVQUFVO2NBQUNJLFFBQVE7Y0FBQ0gsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQ3pGLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDdkYsTUFBQSxDQUFBOEIsT0FBQSxDQUFBMkMsYUFBQTtjQUFLYyxTQUFTLEVBQUM7WUFBYyxHQUM1QnZGLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWdCLEVBQUcsQ0FDN0IsRUFDTnZGLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLEdBQ2hDdkYsTUFBQSxDQUFBOEIsT0FBQSxDQUFBMkMsYUFBQTtjQUFNYyxTQUFTLEVBQUM7WUFBZ0IsUUFBVSxFQUMxQ3ZGLE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBS2MsU0FBUyxFQUFDO1lBQWtCLE9BQVEsRUFDekN2RixNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBO2NBQU1jLFNBQVMsRUFBQztZQUFnQixRQUFVLENBQ3JDLENBQ0QsQ0FDRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBdkYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStELFFBQUEsR0FBQS9ELE9BQUE7VUFFTSxTQUFVNEYsV0FBV0EsQ0FBQTtZQUMxQixNQUFNcEQsR0FBRyxHQUFHLElBQUF6QyxNQUFBLENBQUErQixNQUFNLEVBQW1CLElBQUksQ0FBQztZQUMxQyxNQUFNO2NBQ0xDLEtBQUs7Y0FDTHdDLGNBQWM7Y0FDZEYsVUFBVTtjQUNWaEMsSUFBSSxFQUFFO2dCQUFDVTtjQUFRO1lBQUMsQ0FDaEIsR0FBRyxJQUFBZ0IsUUFBQSxDQUFBM0Qsd0JBQXdCLEdBQUU7WUFDOUIsTUFBTSxDQUFDZ0YsS0FBSyxFQUFFUyxRQUFRLENBQUMsR0FBRyxJQUFBOUYsTUFBQSxDQUFBa0MsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUVyQyxJQUFBbEMsTUFBQSxDQUFBMkMsU0FBUyxFQUFDLE1BQUs7Y0FDZCxNQUFNb0Qsa0JBQWtCLEdBQUdBLENBQUEsS0FBSztnQkFDL0IsTUFBTXhCLFdBQVcsR0FBR3ZDLEtBQUssQ0FBQ3VDLFdBQVc7Z0JBQ3JDdUIsUUFBUSxDQUFDdkIsV0FBVyxDQUFDO2NBQ3RCLENBQUM7Y0FDRCxNQUFNeUIsT0FBTyxHQUFHbkIsS0FBSyxJQUFHO2dCQUN2QlAsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDakJ3QixRQUFRLENBQUMsR0FBRyxDQUFDO2dCQUNidEIsY0FBYyxDQUFDLEdBQUcsQ0FBQztjQUNwQixDQUFDO2NBQ0R4QyxLQUFLLENBQUN3QixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUV1QyxrQkFBa0IsQ0FBQztjQUN4RC9ELEtBQUssQ0FBQ3dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRXdDLE9BQU8sQ0FBQztjQUV4QyxPQUFPLE1BQUs7Z0JBQ1hoRSxLQUFLLENBQUNpRSxtQkFBbUIsQ0FBQyxZQUFZLEVBQUVGLGtCQUFrQixDQUFDO2NBQzVELENBQUM7WUFDRixDQUFDLEVBQUUsQ0FBQy9ELEtBQUssRUFBRWdCLFFBQVEsQ0FBQyxDQUFDO1lBRXJCLE1BQU1rRCxRQUFRLEdBQUdyQixLQUFLLElBQUc7Y0FDeEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCLE1BQU1xQixXQUFXLEdBQUdsRCxVQUFVLENBQUM0QixLQUFLLENBQUNNLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO2NBRXpELEtBQUssSUFBSWUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcEUsS0FBSyxDQUFDcUUsUUFBUSxDQUFDQyxNQUFNLEVBQUVGLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxJQUFJcEUsS0FBSyxDQUFDcUUsUUFBUSxDQUFDRSxLQUFLLENBQUNILENBQUMsQ0FBQyxJQUFJRCxXQUFXLElBQUluRSxLQUFLLENBQUNxRSxRQUFRLENBQUNHLEdBQUcsQ0FBQ0osQ0FBQyxDQUFDLElBQUlELFdBQVcsRUFBRTtrQkFDbkZuRSxLQUFLLENBQUN1QyxXQUFXLEdBQUc0QixXQUFXO2tCQUUvQkwsUUFBUSxDQUFDSyxXQUFXLENBQUM7a0JBQ3JCOzs7Y0FHRjdDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLG9DQUFvQyxFQUFFdkIsS0FBSyxDQUFDcUUsUUFBUSxDQUFDQyxNQUFNLENBQUM7WUFDMUUsQ0FBQztZQUVELE9BQ0N0RyxNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBO2NBQ0NnQyxJQUFJLEVBQUMsT0FBTztjQUNackQsSUFBSSxFQUFDLE1BQU07Y0FDWDZCLE9BQU8sRUFBRWlCLFFBQVE7Y0FDakJBLFFBQVEsRUFBRUEsUUFBUTtjQUNsQlEsS0FBSyxFQUFDLGdCQUFnQjtjQUN0QnJCLEtBQUssRUFBRUEsS0FBSztjQUNaNUMsR0FBRyxFQUFFQSxHQUFHO2NBQ1JrRSxHQUFHLEVBQUUzRDtZQUFRLEVBQ1o7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQWhELE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUErRCxRQUFBLEdBQUEvRCxPQUFBO1VBRU0sU0FBVTBGLEtBQUtBLENBQUE7WUFDcEIsTUFBTTtjQUNMckQsSUFBSSxFQUFFO2dCQUFDVSxRQUFRLEVBQUU0RDtjQUFJLENBQUM7Y0FDdEI1RTtZQUFLLENBQ0wsR0FBRyxJQUFBZ0MsUUFBQSxDQUFBM0Qsd0JBQXdCLEdBQUU7WUFFOUIsSUFBSSxDQUFDd0csUUFBUSxFQUFFQyxTQUFTLENBQUMsQ0FBQ0MsUUFBUSxDQUFDSCxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUk7WUFDckQsTUFBTSxDQUFDSSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHakgsTUFBQSxDQUFBOEIsT0FBSyxDQUFDSSxRQUFRLENBQUMwRSxJQUFJLENBQUM7WUFFeEQ1RyxNQUFBLENBQUE4QixPQUFLLENBQUNhLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCWCxLQUFLLENBQUN3QixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBSztnQkFDbkN5RCxhQUFhLENBQUNqRixLQUFLLENBQUN1QyxXQUFXLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBQ0Z2QyxLQUFLLENBQUN3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSztnQkFDcEN5RCxhQUFhLENBQUNMLElBQUksQ0FBQztjQUNwQixDQUFDLENBQUM7Y0FDRjVFLEtBQUssQ0FBQ3dCLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFLO2dCQUNuQ3lELGFBQWEsQ0FBQ0wsSUFBSSxDQUFDO2NBQ3BCLENBQUMsQ0FBQztjQUNGNUUsS0FBSyxDQUFDd0IsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLE1BQUs7Z0JBQ3pDeUQsYUFBYSxDQUFDakYsS0FBSyxDQUFDdUMsV0FBVyxDQUFDO2NBQ2pDLENBQUMsQ0FBQztZQUNILENBQUMsRUFBRSxFQUFFLENBQUM7WUFDTixJQUFJMkMsS0FBSyxHQUFVQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osVUFBVSxHQUFHLElBQUksQ0FBQztZQUNoRCxJQUFJSyxPQUFPLEdBQVVGLElBQUksQ0FBQ0MsS0FBSyxDQUFFSixVQUFVLEdBQUcsSUFBSSxHQUFJLEVBQUUsQ0FBQztZQUN6RCxJQUFJTSxPQUFPLEdBQVVILElBQUksQ0FBQ0ksS0FBSyxDQUFDUCxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBRWhELE1BQU1RLE1BQU0sR0FBRyxFQUFFO1lBQ2pCLElBQUlOLEtBQUssR0FBRyxDQUFDLEVBQUU7Y0FDZE0sTUFBTSxDQUFDQyxJQUFJLENBQ1Z6SCxNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBO2dCQUFNaUQsR0FBRyxFQUFDLE9BQU87Z0JBQUNuQyxTQUFTLEVBQUM7Y0FBc0MsR0FDaEUyQixLQUFLLENBQ0EsQ0FDUDs7WUFFRixJQUFJRyxPQUFPLEdBQUcsRUFBRSxFQUFFQSxPQUFPLEdBQUcsR0FBRyxHQUFHQSxPQUFPO1lBQ3pDRyxNQUFNLENBQUNDLElBQUksQ0FDVnpILE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUEsQ0FBQ3pFLE1BQUEsQ0FBQThCLE9BQUssQ0FBQzZGLFFBQVE7Y0FBQ0QsR0FBRyxFQUFDO1lBQVMsR0FDNUIxSCxNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBO2NBQU1jLFNBQVMsRUFBQztZQUF1QyxHQUFFOEIsT0FBTyxJQUFJLElBQUksQ0FBUSxFQUNoRnJILE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBTWMsU0FBUyxFQUFDO1lBQWtCLE9BQVMsQ0FDM0IsQ0FDakI7WUFDRCxJQUFJK0IsT0FBTyxHQUFHLEVBQUUsRUFBRUEsT0FBTyxHQUFHLEdBQUcsR0FBR0EsT0FBTztZQUN6Q0UsTUFBTSxDQUFDQyxJQUFJLENBQ1Z6SCxNQUFBLENBQUE4QixPQUFBLENBQUEyQyxhQUFBO2NBQU1pRCxHQUFHLEVBQUMsU0FBUztjQUFDbkMsU0FBUyxFQUFDO1lBQXVDLEdBQ25FK0IsT0FBTyxJQUFJLElBQUksQ0FDVixDQUNQO1lBQ0QsT0FBT3RILE1BQUEsQ0FBQThCLE9BQUEsQ0FBQTJDLGFBQUE7Y0FBU2MsU0FBUyxFQUFDO1lBQWtCLEdBQUVpQyxNQUFNLENBQVc7VUFDaEU7Ozs7Ozs7Ozs7O1VDckRBOztVQUVBSSxNQUFBLENBQUFDLGNBQUEsQ0FBQTFILE9BQUE7WUFDQWtGLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQSxJQUFBckYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQStELFFBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBNkgsV0FBQSxHQUFBN0gsT0FBQTtVQUVNLFNBQVV5RixVQUFVQSxDQUFBO1lBQ3pCLE1BQU07Y0FBRXpFLE1BQU07Y0FBRWU7WUFBSyxDQUFFLEdBQUcsSUFBQWdDLFFBQUEsQ0FBQTNELHdCQUF3QixHQUFFO1lBQ3BELE1BQU1vQyxHQUFHLEdBQUd6QyxNQUFBLENBQUE4QixPQUFLLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDOUIvQixNQUFBLENBQUE4QixPQUFLLENBQUNhLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCO2NBQ0EsTUFBTW9GLFVBQVUsR0FBR0QsV0FBQSxDQUFBaEcsT0FBVSxDQUFDa0csTUFBTSxDQUFDO2dCQUNwQ0MsU0FBUyxFQUFFeEYsR0FBRyxDQUFDQyxPQUFPO2dCQUN0QndGLFNBQVMsRUFBRSxTQUFTO2dCQUNwQkMsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCQyxRQUFRLEVBQUUsQ0FBQztnQkFDWEMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFdBQVcsRUFBRSxDQUFDO2dCQUNkQyxNQUFNLEVBQUUsRUFBRTtnQkFDVkMsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZDLGFBQWEsRUFBRSxJQUFJO2dCQUNuQkMsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCO2dCQUNBO2dCQUVBO2dCQUNBQyxNQUFNLEVBQUUsQ0FBQztnQkFDVDtnQkFDQUMsU0FBUyxFQUFFO2dCQUVYO2VBQ0EsQ0FBQztjQUVGYixVQUFVLENBQUNwRSxJQUFJLENBQUMzQixLQUFLLENBQUNMLEdBQUcsQ0FBQztjQUMxQixPQUFPLE1BQUs7Z0JBQ1hvRyxVQUFVLENBQUNjLE9BQU8sRUFBRTtjQUNyQixDQUFDO1lBQ0YsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFUixPQUNDN0ksTUFBQSxDQUFBOEIsT0FBQSxDQUFBMkMsYUFBQSxDQUFBekUsTUFBQSxDQUFBOEIsT0FBQSxDQUFBNkYsUUFBQSxRQUNDM0gsTUFBQSxDQUFBOEIsT0FBQSxDQUFBMkMsYUFBQTtjQUFLYyxTQUFTLEVBQUMsU0FBUztjQUFDOUMsR0FBRyxFQUFFQTtZQUFHLEVBQUksQ0FDbkM7VUFFTCIsImlnbm9yZUxpc3QiOltdfQ==