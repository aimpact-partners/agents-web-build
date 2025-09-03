System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "swiper@8.4.7", "swiper@8.4.7/modules", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, SwiperSlider, __beyond_pkg, hmr;
  _export("SwiperSlider", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_swiper) {
      dependency_3 = _swiper;
    }, function (_swiper847Modules) {
      dependency_4 = _swiper847Modules;
    }, function (_beyondJsReactive211Model) {
      dependency_5 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Styles) {
      dependency_6 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "0.1.6"], ["@floating-ui/dom", "1.7.3"], ["clsx", "2.1.1"], ["framer-motion", "11.11.11"], ["perfect-scrollbar", "1.5.6"], ["prismjs", "1.29.0"], ["tippy.js", "6.3.7"], ["swiper", "10.3.1"], ["@types/react", "18.3.12"], ["@types/react-dom", "18.3.1"], ["pragmate-ui", "1.0.8"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "pragmate-ui@1.0.8/swiper"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['swiper', dependency_3], ['swiper/modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('pragmate-ui@1.0.8/swiper');
      ims = new Map();
      /***********************************
      INTERNAL MODULE: ./components/footer
      ***********************************/
      ims.set('./components/footer', {
        hash: 4152585320,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperFooter = SwiperFooter;
          var _react = require("react");
          function SwiperFooter(props) {
            const {
              footer,
              controller,
              refs
            } = props;
            if (!footer) return null;
            return _react.default.createElement(_react.default.Fragment, null, !controller?.swiper.isEnd && _react.default.createElement("button", {
              className: "swiper-button-prev",
              onClick: props.functionNext
            }, "SKIP"), _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            }), _react.default.createElement("button", {
              className: "swiper-button-next ",
              onClick: controller?.next
            }, "Next"));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/navigation
      ***************************************/

      ims.set('./components/navigation', {
        hash: 1445369557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperNavigation = SwiperNavigation;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          function SwiperNavigation() {
            const {
              controller,
              navigation,
              refs: {
                prev,
                next
              }
            } = (0, _context.useSwiperContext)();
            if (!navigation) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_icons.IconButton, {
              ref: prev,
              icon: 'left',
              variant: 'primary',
              className: 'swiper__navigation-btn swiper-button-prev',
              onClick: controller?.prevSlide
            }), _react.default.createElement(_icons.IconButton, {
              icon: 'right',
              ref: next,
              variant: 'primary',
              onClick: controller?.nextSlide,
              className: 'swiper__navigation-btn  swiper-button-next'
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./components/pagination
      ***************************************/

      ims.set('./components/pagination', {
        hash: 1487697459,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Pagination = Pagination;
          var _react = require("react");
          var _context = require("../context");
          function Pagination() {
            const {
              pagination,
              refs
            } = (0, _context.useSwiperContext)();
            if (!pagination) return null;
            return _react.default.createElement("div", {
              ref: refs.pagination,
              className: "swiper-pagination"
            });
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 522084440,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperContext = exports.SwiperContext = void 0;
          var _react = require("react");
          const SwiperContext = exports.SwiperContext = _react.default.createContext({});
          const useSwiperContext = () => _react.default.useContext(SwiperContext);
          exports.useSwiperContext = useSwiperContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 4094575603,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SwiperSlider = SwiperSlider;
          var _react = require("react");
          var _footer = require("./components/footer");
          var _navigation = require("./components/navigation");
          var _slide = require("./slide");
          var _useSwiper = require("./use-swiper");
          var _context = require("./context");
          var _pagination = require("./components/pagination");
          /*bundle*/
          function SwiperSlider(props) {
            const {
              pagination,
              footer,
              navigation,
              children
            } = props;
            const {
              refs,
              state
            } = (0, _useSwiper.useSwiperSlider)(props);
            const {
              controller
            } = state;
            const contextValue = {
              footer,
              pagination,
              controller,
              navigation,
              refs
            };
            const cls = `swiper-container swiper ${props.className ? `${props.className} pui-swiper-slider` : 'pui-swiper-slider'};`;
            return _react.default.createElement(_context.SwiperContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              ref: refs.container,
              className: cls
            }, _react.default.createElement(_slide.SlideItems, {
              items: children
            }), _react.default.createElement(_pagination.Pagination, null), _react.default.createElement(_footer.SwiperFooter, null), _react.default.createElement(_navigation.SwiperNavigation, null)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./interfaces/options
      ************************************/

      ims.set('./interfaces/options', {
        hash: 1670442219,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          class Swiper {
            constructor(container, options) {
              // Swiper initialization code
            }
            // Swiper methods
            slideNext(speed, runCallbacks) {}
            slidePrev(speed, runCallbacks) {}
            slideTo(index, speed, runCallbacks) {}
            update() {}
            destroy(deleteInstance, cleanStyles) {}
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./interfaces/swiper-props
      *****************************************/

      ims.set('./interfaces/swiper-props', {
        hash: 3138111793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/index
      *****************************/

      ims.set('./slide/index', {
        hash: 721733334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SlideItems = SlideItems;
          var _react = require("react");
          var _slide = require("./slide");
          function SlideItems({
            items
          }) {
            const slides = items.map((slide, index) => _react.default.createElement(_slide.Slide, {
              key: index
            }, slide));
            return _react.default.createElement("div", {
              className: "swiper-wrapper"
            }, slides);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./slide/slide
      *****************************/

      ims.set('./slide/slide', {
        hash: 2855517027,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Slide = Slide;
          var _react = require("react");
          function Slide({
            children
          }) {
            return _react.default.createElement("div", {
              className: "swiper-slide"
            }, children);
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./state/controller
      **********************************/

      ims.set('./state/controller', {
        hash: 3431124586,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var Swiper = require("swiper");
          var _modules = require("swiper/modules");
          var _model = require("@beyond-js/reactive/model");
          const SwiperCasted = Swiper.Swiper;
          class Controller extends _model.ReactiveModel {
            #swiper;
            get swiper() {
              return this.#swiper;
            }
            #onEnd;
            #props;
            setSwiper = (element, props, ref) => {
              this.#props = props;
              let specs = {
                // slidesPerView: props.slidesPerView ?? 3,
                spaceBetween: props.spaceBetween ?? 10,
                modules: [_modules.Navigation, _modules.Pagination],
                ...props
              };
              Object.keys(specs).forEach(key => {
                if (['children'].includes(key)) delete specs[key];
              });
              if (!Swiper) {
                console.warn('Swiper keeps without been loaded');
                return;
              }
              if (props.pagination || props.footer) {
                specs.pagination = {
                  el: ref.pagination.current,
                  clickable: true,
                  type: props.typePagination ?? 'bullets',
                  dynamicBullets: props.dynamicBullets ?? false
                };
              }
              if (props.navigation) {
                specs.navigation = {
                  nextEl: ref.next.current,
                  prevEl: ref.prev.current
                };
              }
              this.#swiper = new SwiperCasted(element, specs);
              if (props.activeSlide) this.#swiper.slideTo(parseInt(props.activeSlide));
              const nextSlide = () => {
                if (this.#swiper) this.#swiper.slideNext();
              };
              const prevSlide = () => {
                if (this.#swiper) this.#swiper.slidePrev();
              };
              const slideTo = index => {
                if (this.#swiper) this.#swiper.slideTo(parseInt(index));
              };
              if (props.nextSlide && typeof props.nextSlide === 'function') props.nextSlide(nextSlide);
              if (props.prevSlide && typeof props.prevSlide === 'function') props.prevSlide(prevSlide);
              if (props.slideTo && typeof props.slideTo === 'function') props.slideTo(slideTo);
              this.#swiper.on('slideChange', () => {
                if (this.#swiper?.isEnd) {
                  this.#onEnd = true;
                  this.triggerEvent();
                } else {
                  this.#onEnd = false;
                  this.triggerEvent();
                }
              });
            };
            nextSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              if (this.#props.onNext) this.#props.onNext();else this.#swiper?.slideNext(500, false);
            };
            prevSlide = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slidePrev(500, false);
                return;
              }
              if (this.#props.onPrev) this.#props.onPrev();else this.#swiper?.slidePrev(500, false);
            };
            next = () => {
              if (!this.#swiper?.isEnd) {
                this.#swiper?.slideNext(500, false);
                return;
              }
              if (!this.#onEnd) return;
              this.#props.functionNext();
            };
          }
          exports.Controller = Controller;
        }
      });

      /*********************************
      INTERNAL MODULE: ./state/interface
      *********************************/

      ims.set('./state/interface', {
        hash: 3704574833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./use-swiper
      ****************************/

      ims.set('./use-swiper', {
        hash: 2195260495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSwiperSlider = void 0;
          var _react = require("react");
          var _controller = require("./state/controller");
          const useSwiperSlider = props => {
            /* const { props } = useSwiperContext(); */
            const refs = {
              next: _react.default.useRef(),
              container: _react.default.useRef(),
              pagination: _react.default.useRef(),
              prev: _react.default.useRef()
            };
            const {
              slideTo
            } = props;
            const {
              container,
              prev
            } = refs;
            const [state, setState] = _react.default.useState({});
            _react.default.useEffect(() => {
              const controller = new _controller.Controller();
              const onChange = () => setState({
                ...state,
                ready: true,
                swiper: controller.swiper,
                controller,
                lastIndex: controller.lastIndex
              });
              controller.on('change', onChange);
              if (!controller.destroyed) controller.setSwiper(container.current, props, refs);
              onChange();
              return () => controller.off('change', onChange);
            }, []);
            _react.default.useEffect(() => {
              if (!state.swiper || !slideTo) return;
              state.swiper.slideTo(slideTo);
            }, [slideTo]);
            return {
              refs,
              state,
              prev,
              container
            };
          };
          exports.useSwiperSlider = useSwiperSlider;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "SwiperSlider",
        "name": "SwiperSlider"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'SwiperSlider') && _export("SwiperSlider", SwiperSlider = require ? require('./index').SwiperSlider : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiU3dpcGVyRm9vdGVyIiwicHJvcHMiLCJmb290ZXIiLCJjb250cm9sbGVyIiwicmVmcyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJzd2lwZXIiLCJpc0VuZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJmdW5jdGlvbk5leHQiLCJyZWYiLCJwYWdpbmF0aW9uIiwibmV4dCIsIl9pY29ucyIsIl9jb250ZXh0IiwiU3dpcGVyTmF2aWdhdGlvbiIsIm5hdmlnYXRpb24iLCJwcmV2IiwidXNlU3dpcGVyQ29udGV4dCIsIkljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsIlBhZ2luYXRpb24iLCJTd2lwZXJDb250ZXh0IiwiZXhwb3J0cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2Zvb3RlciIsIl9uYXZpZ2F0aW9uIiwiX3NsaWRlIiwiX3VzZVN3aXBlciIsIl9wYWdpbmF0aW9uIiwiU3dpcGVyU2xpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInVzZVN3aXBlclNsaWRlciIsImNvbnRleHRWYWx1ZSIsImNscyIsIlByb3ZpZGVyIiwidmFsdWUiLCJjb250YWluZXIiLCJTbGlkZUl0ZW1zIiwiaXRlbXMiLCJTd2lwZXIiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJzbGlkZU5leHQiLCJzcGVlZCIsInJ1bkNhbGxiYWNrcyIsInNsaWRlUHJldiIsInNsaWRlVG8iLCJpbmRleCIsInVwZGF0ZSIsImRlc3Ryb3kiLCJkZWxldGVJbnN0YW5jZSIsImNsZWFuU3R5bGVzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzbGlkZXMiLCJtYXAiLCJzbGlkZSIsIlNsaWRlIiwia2V5IiwiX21vZHVsZXMiLCJfbW9kZWwiLCJTd2lwZXJDYXN0ZWQiLCJDb250cm9sbGVyIiwiUmVhY3RpdmVNb2RlbCIsIm9uRW5kIiwic2V0U3dpcGVyIiwiZWxlbWVudCIsInNwZWNzIiwic3BhY2VCZXR3ZWVuIiwibW9kdWxlcyIsIk5hdmlnYXRpb24iLCJrZXlzIiwiZm9yRWFjaCIsImluY2x1ZGVzIiwiY29uc29sZSIsIndhcm4iLCJlbCIsImN1cnJlbnQiLCJjbGlja2FibGUiLCJ0eXBlIiwidHlwZVBhZ2luYXRpb24iLCJkeW5hbWljQnVsbGV0cyIsIm5leHRFbCIsInByZXZFbCIsImFjdGl2ZVNsaWRlIiwicGFyc2VJbnQiLCJvbiIsInRyaWdnZXJFdmVudCIsIm9uTmV4dCIsIm9uUHJldiIsIl9jb250cm9sbGVyIiwidXNlUmVmIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwicmVhZHkiLCJsYXN0SW5kZXgiLCJkZXN0cm95ZWQiLCJvZmYiXSwic291cmNlcyI6WyIvL3RzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi8vdHMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLnRzeCIsIi8vdHMvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIi8vdHMvY29udGV4dC50c3giLCIvL3RzL2luZGV4LnRzeCIsIi8vdHMvaW50ZXJmYWNlcy9vcHRpb25zLnRzIiwiLy9zd2lwZXItcHJvcHMudHMvIiwiLy90cy9zbGlkZS9pbmRleC50c3giLCIvL3RzL3NsaWRlL3NsaWRlLnRzeCIsIi8vdHMvc3RhdGUvY29udHJvbGxlci50cyIsIi8vaW50ZXJmYWNlLnRzLyIsIi8vdHMvdXNlLXN3aXBlci50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDTSxTQUFVQyxZQUFZQSxDQUFDQyxLQUFLO1lBQ2pDLE1BQU07Y0FBQ0MsTUFBTTtjQUFFQyxVQUFVO2NBQUVDO1lBQUksQ0FBQyxH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