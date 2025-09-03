System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, AudioPlayer, __beyond_pkg, hmr;
  _export("AudioPlayer", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_1 = _beyondJsKernel0112Styles;
    }, function (_react) {
      dependency_2 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["pragmate-ui", "1.0.8"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/reactive", "2.1.0"], ["socket.io-client", "4.8.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/media-manager@1.0.0/player"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/media-manager@1.0.0/player');
      ims = new Map();
      /*************************
      INTERNAL MODULE: ./control
      *************************/
      ims.set('./control', {
        hash: 3146932,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudioPlayer = AudioPlayer;
          var React = require("react");
          /*bundle*/
          function AudioPlayer({
            src
          }) {
            const canPlayType = new Audio().canPlayType(src.type);
            const [data, setData] = React.useState({
              uri: undefined,
              type: undefined
            });
            const ref = React.useRef(null);
            const updateState = async () => {
              const audioElement = ref.current;
              try {
                audioElement.load(); // Load the audio file
                audioElement.play(); // Play the audio
              } catch (e) {}
            };
            React.useEffect(() => {
              let reader = new FileReader();
              reader.onload = e => {
                let base64URL = e.target.result;
                let BlobType = src.type.includes(';') ? src.type.substr(0, src.type.indexOf(';')) : src.type;
                setData({
                  uri: base64URL,
                  type: BlobType
                });
                setTimeout(() => {
                  updateState();
                }, 1000);
              };
              reader.readAsDataURL(src);
            }, []);
            const {
              uri,
              type
            } = data;
            return React.createElement("div", {
              className: "audio-player"
            }, React.createElement("audio", {
              controls: true,
              preload: "metadata",
              ref: ref
            }, React.createElement("source", {
              src: uri,
              type: type
            }), "Your browser does not support the audio element."));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./control",
        "from": "AudioPlayer",
        "name": "AudioPlayer"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'AudioPlayer') && _export("AudioPlayer", AudioPlayer = require ? require('./control').AudioPlayer : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJBdWRpb1BsYXllciIsInNyYyIsImNhblBsYXlUeXBlIiwiQXVkaW8iLCJ0eXBlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInVyaSIsInVuZGVmaW5lZCIsInJlZiIsInVzZVJlZiIsInVwZGF0ZVN0YXRlIiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsImxvYWQiLCJwbGF5IiwiZSIsInVzZUVmZmVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJiYXNlNjRVUkwiLCJ0YXJnZXQiLCJyZXN1bHQiLCJCbG9iVHlwZSIsImluY2x1ZGVzIiwic3Vic3RyIiwiaW5kZXhPZiIsInNldFRpbWVvdXQiLCJyZWFkQXNEYXRhVVJMIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbnRyb2xzIiwicHJlbG9hZCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLFNBQVVDLFdBQVdBLENBQUM7WUFBQ0M7VUFBRyxDQUFDO1lBQzNDLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxLQUFLLEVBQUUsQ0FBQ0QsV0FBVyxDQUFDRCxHQUFHLENBQUNHLElBQUksQ0FBQztZQUVyRCxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdSLEtBQUssQ0FBQ1MsUUFBUSxDQUFDO2NBQUNDLEdBQUcsRUFBRUMsU0FBUztjQUFFTCxJQUFJLEVBQUVLO1lBQVMsQ0FBQyxDQUFDO1lBRXpFLE1BQU1DLEdBQUcsR0FBR1osS0FBSyxDQUFDYSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE1BQU1DLFdBQVcsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDOUIsTUFBTUMsWUFBWSxHQUFHSCxHQUFHLENBQUNJLE9BQU87Y0FDaEMsSUFBSTtnQkFDSEQsWUFBWSxDQUFDRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQkYsWUFBWSxDQUFDRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2VBQ3JCLENBQUMsT0FBT0MsQ0FBQyxFQUFFO1lBQ2IsQ0FBQztZQUVEbkIsS0FBSyxDQUFDb0IsU0FBUyxDQUFDLE1BQUs7Y0FDcEIsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQVUsRUFBRTtjQUM3QkQsTUFBTSxDQUFDRSxNQUFNLEdBQUdKLENBQUMsSUFBRztnQkFDbkIsSUFBSUssU0FBUyxHQUFHTCxDQUFDLENBQUNNLE1BQU0sQ0FBQ0MsTUFBTTtnQkFDL0IsSUFBSUMsUUFBUSxHQUFHeEIsR0FBRyxDQUFDRyxJQUFJLENBQUNzQixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUd6QixHQUFHLENBQUNHLElBQUksQ0FBQ3VCLE1BQU0sQ0FBQyxDQUFDLEVBQUUxQixHQUFHLENBQUNHLElBQUksQ0FBQ3dCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHM0IsR0FBRyxDQUFDRyxJQUFJO2dCQUM1RkUsT0FBTyxDQUFDO2tCQUFDRSxHQUFHLEVBQUVjLFNBQVM7a0JBQUVsQixJQUFJLEVBQUVxQjtnQkFBUSxDQUFDLENBQUM7Z0JBQ3pDSSxVQUFVLENBQUMsTUFBSztrQkFDZmpCLFdBQVcsRUFBRTtnQkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDO2NBQ1QsQ0FBQztjQUVETyxNQUFNLENBQUNXLGFBQWEsQ0FBQzdCLEdBQUcsQ0FBQztZQUMxQixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRU4sTUFBTTtjQUFDTyxHQUFHO2NBQUVKO1lBQUksQ0FBQyxHQUFHQyxJQUFJO1lBRXhCLE9BQ0NQLEtBQUEsQ0FBQWlDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQWMsR0FDNUJsQyxLQUFBLENBQUFpQyxhQUFBO2NBQU9FLFFBQVE7Y0FBQ0MsT0FBTyxFQUFDLFVBQVU7Y0FBQ3hCLEdBQUcsRUFBRUE7WUFBRyxHQUMxQ1osS0FBQSxDQUFBaUMsYUFBQTtjQUFROUIsR0FBRyxFQUFFTyxHQUFHO2NBQUVKLElBQUksRUFBRUE7WUFBSSxFQUFJLEUsbURBRXpCLENBQ0g7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==