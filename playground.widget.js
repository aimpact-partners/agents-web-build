System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "clsx@2.1.1", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "@aimpact/platform@0.1.6/shared/icons", "@aimpact/chat-sdk@1.4.4/chat-component.code", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, TabLink, useModuleContext, useSettingsContext, Controller, View, Dependencies, SettingsView, SystemPrompt, __beyond_pkg, hmr;
  _export({
    TabLink: void 0,
    useModuleContext: void 0,
    useSettingsContext: void 0,
    Controller: void 0,
    View: void 0,
    Dependencies: void 0,
    SettingsView: void 0,
    SystemPrompt: void 0
  });
  return {
    setters: [function (_beyondJsWidgets016Render) {
      dependency_0 = _beyondJsWidgets016Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_clsx2) {
      dependency_4 = _clsx2;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_5 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Models) {
      dependency_6 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_7 = _aimpactPlatform016StoresBase;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_8 = _aimpactPlatform016SharedIcons;
    }, function (_aimpactChatSdk144ChatComponentCode) {
      dependency_9 = _aimpactChatSdk144ChatComponentCode;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_10 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_12 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_13 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_14 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Form) {
      dependency_16 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_17 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/playground",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['clsx', dependency_4], ['@beyond-js/react-18-widgets/page', dependency_5], ['@aimpact/platform/models', dependency_6], ['@aimpact/platform/stores/base', dependency_7], ['@aimpact/platform/shared/icons', dependency_8], ['@aimpact/chat-sdk/chat-component.code', dependency_9], ['pragmate-ui/empty', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/modal', dependency_12], ['@beyond-js/react-18-widgets/hooks', dependency_13], ['pragmate-ui/collapsible', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/icons', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-platform-playground",
        "vspecifier": "@aimpact/platform@0.1.6/playground.widget",
        "is": "page",
        "route": "/playground",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/playground.widget');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./components/tab-link
      *************************************/
      ims.set('./components/tab-link', {
        hash: 1419572838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TabLink = TabLink;
          var React = require("react");
          var _clsx = require("clsx");
          /*bundle*/
          function TabLink({
            action,
            active,
            onClick,
            children
          }) {
            const isActive = active === action;
            const className = (0, _clsx.default)('tab-link outline', {
              active: isActive
            });
            return React.createElement("a", {
              className: className,
              "data-action": action,
              onClick: onClick
            }, children);
          }
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 581339492,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSettingsContext = exports.useModuleContext = exports.SettingsContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = (0, _react.createContext)(undefined);
          const SettingsContext = exports.SettingsContext = (0, _react.createContext)(undefined);
          /*bundle*/
          const useModuleContext = () => {
            const context = (0, _react.useContext)(ModuleContext);
            if (!context) {
              throw new Error('useModuleContext must be used within a ModuleProvider');
            }
            return context;
          };
          exports.useModuleContext = useModuleContext;
          /*bundle*/
          const useSettingsContext = () => {
            const context = (0, _react.useContext)(SettingsContext);
            if (!context) {
              throw new Error('useSettingsContext must be used within a SettingsProvider');
            }
            return context;
          };
          exports.useSettingsContext = useSettingsContext;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 1927493790,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {}
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2413185968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _models = require("@aimpact/platform/models");
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #model;
            get model() {
              return this.#model;
            }
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['system', 'objectives', 'summary', 'progress']
              });
              this.#model = new _models.Playground();
              this.#model.chat.on('change', () => {
                this.trigger('change');
              });
            }
            getValue(property) {
              return this.model.chat[property] ?? '';
            }
            async execute(action) {
              console.log(101, action);
              return await this.model.execute(action);
            }
            checkPrompt(prompt) {
              this.model.analyze(prompt);
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/custom-prompt/index
      *******************************************/

      ims.set('./views/custom-prompt/index', {
        hash: 2302446681,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomPrompt = void 0;
          var _icons = require("@aimpact/platform/shared/icons");
          var React = require("react");
          var _context = require("../../context");
          var _action = require("../modal/action");
          var _clsx = require("clsx");
          const CustomPrompt = ({
            name
          }) => {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = React.useState(false);
            const prompt = store.model.prompts.map.get(name);
            if (!prompt) {
              console.warn(`Prompt ${name} not found`);
              return null;
            }
            let promptResult = store.model.globalLiterals.map.get(name);
            if (promptResult && typeof promptResult.value !== 'string') {
              promptResult = JSON.stringify(promptResult.value);
            }
            const onActionClick = async event => {
              try {
                setFetching(true);
                await store.execute(name);
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return React.createElement("div", {
              className: (0, _clsx.default)('custom-prompt-container', {
                'is-fetching': fetching
              })
            }, React.createElement("header", {
              className: "prompt-header"
            }, React.createElement("h5", null, name), React.createElement("div", {
              className: "prompt-actions"
            }, React.createElement(_icons.AppIconButton, {
              "data-action": name,
              icon: "play",
              variant: "primary",
              className: "circle",
              onClick: onActionClick
            }), React.createElement(_action.ModalAction, {
              icon: "edit",
              prompt: prompt,
              action: name
            }))), promptResult ? React.createElement("span", null, promptResult) : React.createElement("span", null, "This value is not set"));
          };
          exports.CustomPrompt = CustomPrompt;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/example
      *******************************/

      ims.set('./views/example', {
        hash: 3133899605,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = App;
          var _react = require("react");
          var _textarea = require("./textarea");
          // --- Componente de Demostración (App) ---

          function App() {
            const [valueNormal, setValueNormal] = (0, _react.useState)('');
            const [valueFloating, setValueFloating] = (0, _react.useState)('');
            const [valueWithError, setValueWithError] = (0, _react.useState)('Texto con error');
            const [valueWithButton, setValueWithButton] = (0, _react.useState)('');
            const handleChangeNormal = event => setValueNormal(event.target.value);
            const handleChangeFloating = event => setValueFloating(event.target.value);
            const handleChangeError = event => setValueWithError(event.target.value);
            const handleChangeWithButton = event => setValueWithButton(event.target.value);
            const handleClearClick = () => setValueWithButton('');
            return _react.default.createElement("div", {
              className: "demo-container"
            }, ' ', _react.default.createElement("h1", null, "Demostraci\u00F3n de CustomTextarea Simplificado (SASS)"), _react.default.createElement(_textarea.CustomTextarea, {
              id: "textarea-normal",
              label: "Descripci\u00F3n (Est\u00E1ndar)",
              value: valueNormal,
              onChange: handleChangeNormal,
              placeholder: "Escribe tu descripci\u00F3n aqu\u00ED...",
              errorMessage: "",
              children: null
            }), _react.default.createElement(_textarea.CustomTextarea, {
              id: "textarea-floating",
              label: "Comentario (Flotante)",
              value: valueFloating,
              onChange: handleChangeFloating,
              variant: "floating",
              errorMessage: "",
              children: null
            }), _react.default.createElement(_textarea.CustomTextarea, {
              id: "textarea-error",
              label: "Biograf\u00EDa (con error)",
              value: valueWithError,
              onChange: handleChangeError,
              variant: "floating",
              errorMessage: "Este campo tiene un error de validaci\u00F3n.",
              children: null
            }), _react.default.createElement(_textarea.CustomTextarea, {
              id: "textarea-button",
              label: "Mensaje (con bot\u00F3n)",
              value: valueWithButton,
              onChange: handleChangeWithButton,
              variant: "floating"
            }, _react.default.createElement("button", {
              type: "button",
              onClick: handleClearClick,
              className: "clear-button" // Clase específica para el botón (estilada en SCSS)
              ,

              "aria-label": "Limpiar texto"
            }, "\u2715 ")), _react.default.createElement(_textarea.CustomTextarea, {
              id: "textarea-disabled",
              label: "Deshabilitado",
              value: "No puedes editar esto",
              onChange: () => {},
              variant: "floating",
              disabled: true,
              errorMessage: "",
              children: null
            }), _react.default.createElement(_textarea.CustomTextarea, {
              id: "textarea-custom-class",
              label: "Est\u00E1ndar con Clase Extra",
              value: valueNormal,
              onChange: handleChangeNormal,
              placeholder: "Tiene una clase extra...",
              className: "mi-clase-adicional",
              errorMessage: "",
              children: null
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 406065052,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _settings = require("./settings");
          var _context = require("../context");
          var _empty = require("pragmate-ui/empty");
          /*bundle*/
          function View({
            store
          }) {
            function EmptyChat() {
              return React.createElement(_empty.Empty, {
                text: "Your conversation will appear here",
                icon: "info"
              });
            }
            return React.createElement(_context.ModuleContext.Provider, {
              value: {
                store
              }
            }, React.createElement("main", {
              className: "playground-page playground-panels"
            }, React.createElement(_settings.SettingsView, null), React.createElement("div", {
              className: "chat-container"
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              empty: EmptyChat,
              model: store.model.chat
            }, React.createElement(_chatComponent.AgentsChatPanel, null), React.createElement(_chatComponent.AgentsChatInput, null)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modal/action
      ************************************/

      ims.set('./views/modal/action', {
        hash: 3802147820,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalAction = ModalAction;
          var _icons = require("@aimpact/platform/shared/icons");
          var React = require("react");
          var _context = require("../../context");
          var _ = require("./");
          function ModalAction({
            icon,
            prompt,
            action
          }) {
            const [show, setShow] = React.useState(false);
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              model
            } = store;
            const toggleModal = () => {
              store.checkPrompt(prompt);
              setShow(prevShow => !prevShow);
            };
            return React.createElement(React.Fragment, null, React.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: toggleModal,
              variant: "primary",
              className: "circle"
            }), show && React.createElement(_.PromptModal, {
              show: show,
              onClose: toggleModal,
              prompt: prompt
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/modal/index
      ***********************************/

      ims.set('./views/modal/index', {
        hash: 2908703916,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptModal = PromptModal;
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _context = require("../../context");
          var _textarea = require("../textarea");
          var _literals = require("./literals");
          var _globalLiterals = require("../settings/global-literals");
          var _tabLink = require("../../components/tab-link");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function PromptModal({
            show,
            onClose,
            prompt
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              resolver
            } = store.model;
            const [tabActive, setTabActive] = React.useState('template');
            const [updates, setUpdates] = React.useState(0);
            const updateState = () => {
              const result = resolver.resolve(prompt);
              const values = {
                template: result.value ?? '',
                expanded: result.expanded ?? '',
                resolved: result.resolved ?? ''
              };
              return {
                ...values
              };
            };
            const [state, setState] = React.useState(updateState);
            (0, _hooks.useBinder)([prompt], () => {
              setState(updateState());
              setUpdates(prev => prev + 1);
              // setUpdates(prev => prev + 1);
            }, 'literals.changed');
            const [isFetching, setIsFetching] = React.useState(false);
            const handleTextChange = event => {
              setState(prevState => ({
                ...prevState,
                text: event.target.value
              }));
            };
            const handleTabClick = event => {
              const action = event.currentTarget.dataset.action;
              if (action) {
                setTabActive(action);
              }
            };
            const handleSave = async () => {
              setIsFetching(true);
              try {
                await store.model.prompts.save(prompt.name, state);
                onClose();
              } finally {
                setIsFetching(false);
              }
            };
            return React.createElement(_modal.Modal, {
              className: `modal-action ${isFetching ? 'is-fetching' : ''}`,
              show: show,
              onClose: onClose
            }, React.createElement("div", {
              className: "panels"
            }, React.createElement("div", {
              className: "panel left-panel"
            }, React.createElement("header", {
              className: "panel-header"
            }, React.createElement(_tabLink.TabLink, {
              action: "template",
              active: tabActive,
              onClick: handleTabClick
            }, "Template"), React.createElement(_tabLink.TabLink, {
              action: "expanded",
              active: tabActive,
              onClick: handleTabClick
            }, "Expanded"), React.createElement(_tabLink.TabLink, {
              action: "resolved",
              active: tabActive,
              onClick: handleTabClick
            }, "Resolved")), ['template', 'expanded'].includes(tabActive) ? React.createElement(_textarea.CustomTextarea, {
              value: state[tabActive],
              onChange: handleTextChange,
              variant: "floating"
            }) : React.createElement("div", {
              className: "prompt__content"
            }, state.resolved)), React.createElement("div", {
              className: "panel right-panel"
            }, React.createElement(_globalLiterals.GlobalLiterals, null), React.createElement("h6", null, "Prompt Literals "), React.createElement(_literals.PromptLiterals, {
              prompt: prompt,
              literals: prompt.literals,
              state: state,
              setState: setState
            }))), React.createElement("footer", null, React.createElement(_components.Button, {
              variant: "primary",
              icon: "save",
              onClick: handleSave,
              disabled: isFetching
            }, "Save")));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/modal/literals
      **************************************/

      ims.set('./views/modal/literals', {
        hash: 2016842344,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiterals = PromptLiterals;
          var _collapsible = require("pragmate-ui/collapsible");
          var React = require("react");
          var _textarea = require("../textarea");
          var _context = require("../../context");
          function PromptLiterals({
            prompt,
            literals,
            state,
            setState
          }) {
            const literalInputs = [];
            const {
              store
            } = (0, _context.useModuleContext)();
            const onChange = event => {
              const {
                name,
                value
              } = event.target;
              prompt.setLiteral(name, value);
            };
            const items = literals.keys.filter(literal => !store.model.globalLiterals.names.includes(literal));
            items.forEach(literal => {
              const name = literal.replace(/_/g, '-');
              literalInputs.push(React.createElement(_collapsible.CollapsibleContainer, {
                key: literal,
                className: "ipe-item"
              }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h6", null, literal)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_textarea.CustomTextarea, {
                name: name,
                value: prompt.literals.values?.[name] ?? '',
                onChange: onChange
              }))));
            });
            return React.createElement(React.Fragment, null, literalInputs);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/settings/dependencies
      *********************************************/

      ims.set('./views/settings/dependencies', {
        hash: 496469173,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dependencies = Dependencies;
          var React = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _customPrompt = require("../custom-prompt");
          var _collapsible = require("pragmate-ui/collapsible");
          /*bundle*/
          function Dependencies() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const dependencies = store.model.prompts.dependencies;
            const Item = ({
              item
            }) => {
              return React.createElement(_customPrompt.CustomPrompt, {
                name: item.name,
                key: item.name
              });
            };
            return React.createElement("div", {
              className: "dependencies-container"
            }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", null, "Dependencies")), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_list.List, {
              items: store.model.prompts.items,
              control: Item
            }))));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/settings/global-literals
      ************************************************/

      ims.set('./views/settings/global-literals', {
        hash: 1179889129,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GlobalLiterals = GlobalLiterals;
          var React = require("react");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          var _literal = require("./literal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function GlobalLiterals() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [counter, setCounter] = React.useState(0);
            (0, _hooks.useBinder)([store.model.globalLiterals], () => setCounter(counter => counter + 1));
            const literalItems = store.model.globalLiterals.items.map(item => React.createElement(_literal.PromptLiteral, {
              key: `global-literal.${item.name}`,
              item: item
            }));
            return React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h6", null, "Global Literals")), React.createElement(_collapsible.CollapsibleContent, null, literalItems));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/settings/index
      **************************************/

      ims.set('./views/settings/index', {
        hash: 1882203618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SettingsView = SettingsView;
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _customPrompt = require("../custom-prompt");
          var _system = require("../system");
          var _globalLiterals = require("./global-literals");
          var _dependencies = require("./dependencies");
          var _tabLink = require("../../components/tab-link");
          /*bundle*/
          function SettingsView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetchingAction, setFetchingAction] = React.useState(null);
            const [activeTab, setActiveTab] = React.useState('global-literals');
            const onChange = event => store.model.chat[event.currentTarget.name] = event.currentTarget.value;
            const handleTabClick = event => {
              const action = event.currentTarget.dataset.action;
              if (action) {
                setActiveTab(action);
              }
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "settings-panel"
            }, React.createElement(_form.Select, {
              label: "Model"
            }, React.createElement("option", null, "GPT 4o")), React.createElement(_system.SystemPrompt, null), React.createElement("header", {
              className: "panel-header"
            }, React.createElement("div", {
              className: "tabs-container"
            }, React.createElement(_tabLink.TabLink, {
              action: "global-literals",
              active: activeTab,
              onClick: handleTabClick
            }, "Global Literals"), React.createElement(_tabLink.TabLink, {
              action: "dependencies",
              active: activeTab,
              onClick: handleTabClick
            }, "Dependencies"))), React.createElement("div", {
              className: "section-container"
            }, activeTab === 'global-literals' ? React.createElement(_globalLiterals.GlobalLiterals, null) : React.createElement(_dependencies.Dependencies, null)), React.createElement(_customPrompt.CustomPrompt, {
              label: "Summary",
              name: "summary",
              value: store.getValue('summary'),
              onChange: onChange,
              fetchingAction: fetchingAction === 'summary' ? 'summary' : undefined
            }), React.createElement(_customPrompt.CustomPrompt, {
              label: "Progress",
              name: "ipe",
              value: store.getValue('ipe'),
              onChange: onChange,
              fetchingAction: fetchingAction === 'ipe' ? 'ipe' : undefined
            }), React.createElement("div", {
              className: "p"
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/settings/literal
      ****************************************/

      ims.set('./views/settings/literal', {
        hash: 1380828998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiteral = PromptLiteral;
          var React = require("react");
          var _form = require("pragmate-ui/form");
          var _objectives = require("./objectives");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function PromptLiteral({
            item
          }) {
            const [counter, setCounter] = React.useState(0);
            (0, _hooks.useBinder)([item], () => setCounter(counter => counter + 1));
            const handleChange = event => {
              item.value = event.currentTarget.value;
              item.set({
                value: event.currentTarget.value
              });
              //onChange(item.name, event.currentTarget.value);
            };
            if (item.type === 'list') {
              return React.createElement("div", {
                className: "literal-item"
              }, React.createElement(_objectives.ObjectivesField, {
                name: item.name,
                data: item.value,
                onChange: handleChange
              }));
            }
            const value = item?.value && typeof item.value !== 'string' ? JSON.stringify(item.value) : item.value ?? '';
            return React.createElement("div", {
              className: "literal-item"
            }, React.createElement(_form.Input, {
              label: item.name,
              type: "text",
              name: item.name,
              value: value || '',
              onChange: handleChange
            }));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/settings/objectives
      *******************************************/

      ims.set('./views/settings/objectives', {
        hash: 2844526317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectivesField = ObjectivesField;
          var _form = require("pragmate-ui/form");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("pragmate-ui/icons");
          function ObjectivesField({
            name,
            data,
            onChange
          }) {
            const [objectives, setObjectives] = (0, _react.useState)(data || []);
            const [isFormVisible, setIsFormVisible] = (0, _react.useState)(false);
            const [newObjective, setNewObjective] = (0, _react.useState)({
              title: '',
              description: ''
            });
            const isFormValid = newObjective.title.trim() !== '' && newObjective.description.trim() !== '';
            const handleAddObjective = () => {
              if (isFormValid) {
                const updatedObjectives = [...objectives, newObjective];
                setObjectives(updatedObjectives);
                onChange({
                  target: {
                    name,
                    value: updatedObjectives
                  },
                  currentTarget: {
                    name,
                    value: updatedObjectives
                  },
                  value: updatedObjectives
                });
                setNewObjective({
                  title: '',
                  description: ''
                });
              }
            };
            const handleKeyPress = e => {
              if (e.key === 'Enter' && isFormValid) {
                handleAddObjective();
              }
            };
            const handleRemoveObjective = index => {
              const updatedObjectives = objectives.filter((_, i) => i !== index);
              setObjectives(updatedObjectives);
              onChange({
                target: {
                  name,
                  value: updatedObjectives
                },
                currentTarget: {
                  name,
                  value: updatedObjectives
                },
                value: updatedObjectives
              });
            };
            return _react.default.createElement("div", {
              className: "objectives-field"
            }, _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement("div", {
              className: "flex-container"
            }, _react.default.createElement("h5", null, objectives.length ? `Objectives (${objectives.length})` : 'There are no objectives'), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              variant: "link",
              icon: "add",
              onClick: () => setIsFormVisible(!isFormVisible),
              className: "add-objective-button circle"
            })))), isFormVisible && _react.default.createElement("div", {
              className: "objective-form"
            }, _react.default.createElement("div", {
              className: "form-header"
            }, _react.default.createElement("h6", null, "New Objective"), _react.default.createElement(_icons.IconButton, {
              icon: "close",
              onClick: () => setIsFormVisible(false)
            })), _react.default.createElement(_form.Input, {
              label: "Title",
              variant: "floating",
              value: newObjective.title,
              onChange: e => setNewObjective({
                ...newObjective,
                title: e.target.value
              }),
              onKeyPress: handleKeyPress,
              placeholder: "Enter objective title"
            }), _react.default.createElement(_form.Input, {
              variant: "floating",
              label: "Description",
              value: newObjective.description,
              onChange: e => setNewObjective({
                ...newObjective,
                description: e.target.value
              }),
              onKeyPress: handleKeyPress,
              placeholder: "Enter objective description"
            }), _react.default.createElement("div", {
              className: "form-actions"
            }, _react.default.createElement(_components.Button, {
              onClick: handleAddObjective,
              disabled: !isFormValid
            }, "Add Objective"))), _react.default.createElement("div", {
              className: "objectives-list"
            }, objectives?.map((objective, index) => _react.default.createElement("div", {
              key: index,
              className: "objective-item"
            }, _react.default.createElement("h6", null, objective.title), _react.default.createElement("p", null, objective.description), _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "trash",
              onClick: () => handleRemoveObjective(index)
            }, "Remove")))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/system/index
      ************************************/

      ims.set('./views/system/index', {
        hash: 1151223360,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemPrompt = SystemPrompt;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _textarea = require("../textarea");
          /*bundle*/
          function SystemPrompt() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetchingAction, setFetchingAction] = React.useState(null);
            const [updates, setUpdates] = React.useState(0);
            (0, _hooks.useBinder)([store.model.prompts], () => setUpdates(updates => updates + 1), ['system.changed']);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              store.model.prompts.system = value;
            };
            return React.createElement(_textarea.CustomTextarea, {
              onChange: onChange,
              value: store.model.prompts.system,
              label: "System prompt",
              className: "pg-textarea",
              name: "system",
              fetchingAction: fetchingAction === 'system' ? 'system' : undefined
            });
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/textarea
      ********************************/

      ims.set('./views/textarea', {
        hash: 179767620,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomTextarea = CustomTextarea;
          var _react = require("react");
          // Componente Textarea Personalizable Simplificado (Versión SASS)
          function CustomTextarea({
            id,
            label,
            value,
            onChange,
            placeholder = '',
            errorMessage,
            variant = 'standard',
            // 'standard' o 'floating'
            children,
            className = '',
            // Clases CSS adicionales para el contenedor principal
            rows = 4,
            name,
            fetchingAction,
            ...rest
          }) {
            const internalId = (0, _react.useId)();
            const effectiveId = id || internalId;
            const [isFocused, setIsFocused] = (0, _react.useState)(false);
            // --- Handlers ---
            const handleFocus = e => {
              setIsFocused(true);
              // Llama al onFocus original si existe
              if (rest.onFocus) {
                rest.onFocus(e);
              }
            };
            const handleBlur = e => {
              setIsFocused(false);
              // Llama al onBlur original si existe
              if (rest.onBlur) {
                rest.onBlur(e);
              }
            };
            // --- Clases CSS ---
            // Construye las clases del contenedor principal. Toda la estilización
            // interna dependerá de estas clases y de la estructura del SCSS.
            const wrapperClasses = ['custom-textarea-wrapper', `variant-${variant}`, errorMessage ? 'has-error' : '', rest.disabled ? 'is-disabled' : '', isFocused ? 'is-focused' : '', value ? 'has-value' : '', className // Clases personalizadas del usuario
            ].filter(Boolean).join(' '); // Filtra vacíos y une
            // El placeholder se ajusta para la animación flotante si es necesario
            const actualPlaceholder = variant === 'floating' && label ? ' ' : placeholder;
            return _react.default.createElement("div", {
              className: wrapperClasses
            }, _react.default.createElement("div", {
              className: "custom-textarea-inner-wrapper"
            }, label && _react.default.createElement("label", {
              htmlFor: effectiveId,
              className: "custom-textarea-label"
            }, label), _react.default.createElement("textarea", {
              id: effectiveId,
              name: name,
              value: value,
              onChange: onChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              placeholder: actualPlaceholder,
              className: "custom-textarea" // Clase única para el textarea
              ,

              rows: rows,
              disabled: rest.disabled || !!fetchingAction,
              ...rest
            }), children && _react.default.createElement("div", {
              className: "custom-textarea-children"
            }, children)), errorMessage && _react.default.createElement("p", {
              className: "custom-textarea-error"
            }, errorMessage));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./components/tab-link",
        "from": "TabLink",
        "name": "TabLink"
      }, {
        "im": "./context",
        "from": "useModuleContext",
        "name": "useModuleContext"
      }, {
        "im": "./context",
        "from": "useSettingsContext",
        "name": "useSettingsContext"
      }, {
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/settings/dependencies",
        "from": "Dependencies",
        "name": "Dependencies"
      }, {
        "im": "./views/settings/index",
        "from": "SettingsView",
        "name": "SettingsView"
      }, {
        "im": "./views/system/index",
        "from": "SystemPrompt",
        "name": "SystemPrompt"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'TabLink') && _export("TabLink", TabLink = require ? require('./components/tab-link').TabLink : value);
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./context').useModuleContext : value);
        (require || prop === 'useSettingsContext') && _export("useSettingsContext", useSettingsContext = require ? require('./context').useSettingsContext : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Dependencies') && _export("Dependencies", Dependencies = require ? require('./views/settings/dependencies').Dependencies : value);
        (require || prop === 'SettingsView') && _export("SettingsView", SettingsView = require ? require('./views/settings/index').SettingsView : value);
        (require || prop === 'SystemPrompt') && _export("SystemPrompt", SystemPrompt = require ? require('./views/system/index').SystemPrompt : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY2xzeCIsIlRhYkxpbmsiLCJhY3Rpb24iLCJhY3RpdmUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJpc0FjdGl2ZSIsImNsYXNzTmFtZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiX3JlYWN0IiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiU2V0dGluZ3NDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VTZXR0aW5nc0NvbnRleHQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsIl9tb2RlbHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicHJvcGVydGllcyIsIlBsYXlncm91bmQiLCJjaGF0Iiwib24iLCJ0cmlnZ2VyIiwiZ2V0VmFsdWUiLCJwcm9wZXJ0eSIsImV4ZWN1dGUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tQcm9tcHQiLCJwcm9tcHQiLCJhbmFseXplIiwiX2ljb25zIiwiX2NvbnRleHQiLCJfYWN0aW9uIiwiQ3VzdG9tUHJvbXB0IiwibmFtZSIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInByb21wdHMiLCJtYXAiLCJnZXQiLCJ3YXJuIiwicHJvbXB0UmVzdWx0IiwiZ2xvYmFsTGl0ZXJhbHMiLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJlIiwiZXJyb3IiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJNb2RhbEFjdGlvbiIsIl90ZXh0YXJlYSIsIkFwcCIsInZhbHVlTm9ybWFsIiwic2V0VmFsdWVOb3JtYWwiLCJ2YWx1ZUZsb2F0aW5nIiwic2V0VmFsdWVGbG9hdGluZyIsInZhbHVlV2l0aEVycm9yIiwic2V0VmFsdWVXaXRoRXJyb3IiLCJ2YWx1ZVdpdGhCdXR0b24iLCJzZXRWYWx1ZVdpdGhCdXR0b24iLCJoYW5kbGVDaGFuZ2VOb3JtYWwiLCJ0YXJnZXQiLCJoYW5kbGVDaGFuZ2VGbG9hdGluZyIsImhhbmRsZUNoYW5nZUVycm9yIiwiaGFuZGxlQ2hhbmdlV2l0aEJ1dHRvbiIsImhhbmRsZUNsZWFyQ2xpY2siLCJDdXN0b21UZXh0YXJlYSIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiZXJyb3JNZXNzYWdlIiwidHlwZSIsImRpc2FibGVkIiwiX2NoYXRDb21wb25lbnQiLCJfc2V0dGluZ3MiLCJfZW1wdHkiLCJFbXB0eUNoYXQiLCJFbXB0eSIsInRleHQiLCJQcm92aWRlciIsIlNldHRpbmdzVmlldyIsIkFnZW50c0NoYXRDb250YWluZXIiLCJlbXB0eSIsIkFnZW50c0NoYXRQYW5lbCIsIkFnZW50c0NoYXRJbnB1dCIsIl8iLCJzZXRTaG93IiwidG9nZ2xlTW9kYWwiLCJwcmV2U2hvdyIsIkZyYWdtZW50IiwiUHJvbXB0TW9kYWwiLCJvbkNsb3NlIiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfbGl0ZXJhbHMiLCJfZ2xvYmFsTGl0ZXJhbHMiLCJfdGFiTGluayIsIl9ob29rcyIsInJlc29sdmVyIiwidGFiQWN0aXZlIiwic2V0VGFiQWN0aXZlIiwidXBkYXRlcyIsInNldFVwZGF0ZXMiLCJ1cGRhdGVTdGF0ZSIsInJlc3VsdCIsInJlc29sdmUiLCJ2YWx1ZXMiLCJ0ZW1wbGF0ZSIsImV4cGFuZGVkIiwicmVzb2x2ZWQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQmluZGVyIiwicHJldiIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiaGFuZGxlVGV4dENoYW5nZSIsInByZXZTdGF0ZSIsImhhbmRsZVRhYkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJoYW5kbGVTYXZlIiwic2F2ZSIsIk1vZGFsIiwiaW5jbHVkZXMiLCJHbG9iYWxMaXRlcmFscyIsIlByb21wdExpdGVyYWxzIiwibGl0ZXJhbHMiLCJCdXR0b24iLCJfY29sbGFwc2libGUiLCJsaXRlcmFsSW5wdXRzIiwic2V0TGl0ZXJhbCIsIml0ZW1zIiwia2V5cyIsImZpbHRlciIsImxpdGVyYWwiLCJuYW1lcyIsImZvckVhY2giLCJyZXBsYWNlIiwicHVzaCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwia2V5IiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfbGlzdCIsIl9jdXN0b21Qcm9tcHQiLCJEZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJJdGVtIiwiaXRlbSIsIkxpc3QiLCJjb250cm9sIiwiX2xpdGVyYWwiLCJjb3VudGVyIiwic2V0Q291bnRlciIsImxpdGVyYWxJdGVtcyIsIlByb21wdExpdGVyYWwiLCJfZm9ybSIsIl9zeXN0ZW0iLCJfZGVwZW5kZW5jaWVzIiwiZmV0Y2hpbmdBY3Rpb24iLCJzZXRGZXRjaGluZ0FjdGlvbiIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsIlNlbGVjdCIsIlN5c3RlbVByb21wdCIsIl9vYmplY3RpdmVzIiwiaGFuZGxlQ2hhbmdlIiwic2V0IiwiT2JqZWN0aXZlc0ZpZWxkIiwiZGF0YSIsIklucHV0Iiwib2JqZWN0aXZlcyIsInNldE9iamVjdGl2ZXMiLCJpc0Zvcm1WaXNpYmxlIiwic2V0SXNGb3JtVmlzaWJsZSIsIm5ld09iamVjdGl2ZSIsInNldE5ld09iamVjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpc0Zvcm1WYWxpZCIsInRyaW0iLCJoYW5kbGVBZGRPYmplY3RpdmUiLCJ1cGRhdGVkT2JqZWN0aXZlcyIsImhhbmRsZUtleVByZXNzIiwiaGFuZGxlUmVtb3ZlT2JqZWN0aXZlIiwiaW5kZXgiLCJpIiwibGVuZ3RoIiwiSWNvbkJ1dHRvbiIsIm9uS2V5UHJlc3MiLCJvYmplY3RpdmUiLCJzeXN0ZW0iLCJyb3dzIiwicmVzdCIsImludGVybmFsSWQiLCJ1c2VJZCIsImVmZmVjdGl2ZUlkIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiaGFuZGxlRm9jdXMiLCJvbkZvY3VzIiwiaGFuZGxlQmx1ciIsIm9uQmx1ciIsIndyYXBwZXJDbGFzc2VzIiwiQm9vbGVhbiIsImpvaW4iLCJhY3R1YWxQbGFjZWhvbGRlciIsImh0bWxGb3IiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy90YWItbGluay50c3giLCIvdHMvY29udGV4dC50c3giLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jdXN0b20tcHJvbXB0L2luZGV4LnRzeCIsIi90cy92aWV3cy9leGFtcGxlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9tb2RhbC9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwvbGl0ZXJhbHMudHN4IiwiL3RzL3ZpZXdzL3NldHRpbmdzL2RlcGVuZGVuY2llcy50c3giLCIvdHMvdmlld3Mvc2V0dGluZ3MvZ2xvYmFsLWxpdGVyYWxzLnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy9pbmRleC50c3giLCIvdHMvdmlld3Mvc2V0dGluZ3MvbGl0ZXJhbC50c3giLCIvdHMvdmlld3Mvc2V0dGluZ3Mvb2JqZWN0aXZlcy50c3giLCIvdHMvdmlld3Mvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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