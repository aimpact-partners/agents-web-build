System.register(["@beyond-js/kernel@0.1.12/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, __beyond_pkg, hmr;
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
          "vspecifier": "@aimpact/media-manager@1.0.0/permissions"
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
        hash: 2277821615,
        creator: function (require, exports) {
          "use strict";

          //your code here
          // Initialize media stream
          let mediaStream = null;
          const initMedia = async () => {
            try {
              mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
              });
              // Handle media stream
              // e.g., attach the stream to an HTMLVideoElement or use it in WebRTC
            } catch (error) {
              console.error('Media stream initialization failed:', error);
            }
          };
          // Listen for PermissionStatus changes
          const monitorPermission = async permissionName => {
            const permissionStatus = await navigator.permissions.query({
              name: permissionName
            });
            // Initial status
            console.log(`${permissionName} permission is ${permissionStatus.state}`);
            // Listen for changes
            permissionStatus.onchange = () => {
              console.log(`${permissionName} permission changed to ${permissionStatus.state}`);
              if (permissionStatus.state === 'granted') {
                // Re-initialize media if required
                initMedia();
              }
              // Handle other states: 'denied', 'prompt'
            };
          };
        }
      });

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {};
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtZWRpYVN0cmVhbSIsImluaXRNZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJlcnJvciIsImNvbnNvbGUiLCJtb25pdG9yUGVybWlzc2lvbiIsInBlcm1pc3Npb25OYW1lIiwicGVybWlzc2lvblN0YXR1cyIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJuYW1lIiwibG9nIiwic3RhdGUiLCJvbmNoYW5nZSJdLCJzb3VyY2VzIjpbIi8vaW5kZXgudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTtVQUNBO1VBQ0EsSUFBSUEsV0FBVyxHQUF1QixJQUFJO1VBRTFDLE1BQU1DLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7WUFDNUIsSUFBSTtjQUNIRCxXQUFXLEdBQUcsTUFBTUUsU0FBUyxDQUFDQyxZQUFZLENBQUNDLFlBQVksQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLElBQUk7Z0JBQUVDLEtBQUssRUFBRTtjQUFJLENBQUMsQ0FBQztjQUVuRjtjQUNBO2FBQ0EsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7Y0FDZkMsT0FBTyxDQUFDRCxLQUFLLENBQUMscUNBQXFDLEVBQUVBLEtBQUssQ0FBQzs7VUFFN0QsQ0FBQztVQUVEO1VBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsTUFBT0MsY0FBOEIsSUFBSTtZQUNsRSxNQUFNQyxnQkFBZ0IsR0FBRyxNQUFNVCxTQUFTLENBQUNVLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO2NBQUNDLElBQUksRUFBRUo7WUFBYyxDQUFDLENBQUM7WUFFbEY7WUFDQUYsT0FBTyxDQUFDTyxHQUFHLENBQUMsR0FBR0wsY0FBYyxrQkFBa0JDLGdCQUFnQixDQUFDSyxLQUFLLEVBQUUsQ0FBQztZQUV4RTtZQUNBTCxnQkFBZ0IsQ0FBQ00sUUFBUSxHQUFHLE1BQUs7Y0FDaENULE9BQU8sQ0FBQ08sR0FBRyxDQUFDLEdBQUdMLGNBQWMsMEJBQTBCQyxnQkFBZ0IsQ0FBQ0ssS0FBSyxFQUFFLENBQUM7Y0FFaEYsSUFBSUwsZ0JBQWdCLENBQUNLLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3pDO2dCQUNBZixTQUFTLEVBQUU7O2NBRVo7WUFDRCxDQUFDO1VBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==