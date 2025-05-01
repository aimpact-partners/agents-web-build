System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@editorjs/editorjs@2.30.8", "clsx@2.1.1", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "@aimpact/platform@0.1.6/shared/icons", "@aimpact/chat-sdk@1.5.4/chat-component.code", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/modal", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/form", "pragmate-ui@1.0.0-beta.7/icons"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, TabLink, useModuleContext, useSettingsContext, Controller, View, Dependencies, SettingsView, SystemPrompt, __beyond_pkg, hmr;
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
    }, function (_editorjsEditorjs) {
      dependency_4 = _editorjsEditorjs;
    }, function (_clsx2) {
      dependency_5 = _clsx2;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_6 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Models) {
      dependency_7 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_8 = _aimpactPlatform016StoresBase;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_9 = _aimpactPlatform016SharedIcons;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_10 = _aimpactChatSdk154ChatComponentCode;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_11 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Components) {
      dependency_12 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_13 = _pragmateUi100Beta7Modal;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_14 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_15 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Form) {
      dependency_17 = _pragmateUi100Beta7Form;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_18 = _pragmateUi100Beta7Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.5.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@editorjs/editorjs', dependency_4], ['clsx', dependency_5], ['@beyond-js/react-18-widgets/page', dependency_6], ['@aimpact/platform/models', dependency_7], ['@aimpact/platform/stores/base', dependency_8], ['@aimpact/platform/shared/icons', dependency_9], ['@aimpact/chat-sdk/chat-component.code', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/modal', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/icons', dependency_18]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-platform-playground",
        "vspecifier": "@aimpact/platform@0.1.6/playground.widget",
        "is": "page",
        "route": "/playground",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/playground.widget');
      ims = new Map();
      /*****************************************
      INTERNAL MODULE: ./components/block-editor
      *****************************************/
      ims.set('./components/block-editor', {
        hash: 470518367,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BlockEditor = BlockEditor;
          var _react = require("react");
          var _editorjs = require("@editorjs/editorjs");
          let editorInstance = null;
          function BlockEditor({
            store,
            property
          }) {
            const editorRef = (0, _react.useRef)(null);
            (0, _react.useEffect)(() => {
              if (!editorRef.current) return;
              const savedData = store.getValue(property);
              editorInstance = new _editorjs.default({
                holder: editorRef.current,
                placeholder: 'Type your content here...',
                inlineToolbar: true,
                data: parseToEditorData(savedData),
                onChange: async () => {
                  const output = await editorInstance?.save();
                  const content = parseFromEditorData(output);
                  store.model.chat[property] = content;
                  store.trigger('change');
                }
              });
              return () => {
                editorInstance?.destroy();
                editorInstance = null;
              };
            }, [store, property]);
            return _react.default.createElement("div", {
              className: "editor-container"
            }, _react.default.createElement("div", {
              id: "editorjs",
              ref: editorRef
            }));
          }
          function parseToEditorData(raw) {
            // TODO: implement literal and dependency token parsing into EditorJS format
            return {
              time: Date.now(),
              blocks: [{
                type: 'paragraph',
                data: {
                  text: raw
                }
              }],
              version: '2.27.0'
            };
          }
          function parseFromEditorData(data) {
            return data.blocks.map(block => block.data.text).join('\n');
          }
        }
      });

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
        hash: 69636083,
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
        hash: 1894130214,
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
              prompt.value = event.currentTarget.value;
              console.log(99, prompt.value);
              setState(updateState());
              setUpdates(prev => prev + 1);
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
              onClose: onClose,
              closeBackdrop: false
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
        hash: 4208042337,
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
            }, React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", null, "Dependencies")), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_list.List, {
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
        hash: 852129555,
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
            return React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h6", null, "Global Literals")), React.createElement(_collapsible.CollapsibleContent, null, literalItems));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/settings/index
      **************************************/

      ims.set('./views/settings/index', {
        hash: 1683108948,
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
            }, "Dependencies"), React.createElement(_tabLink.TabLink, {
              action: "prompts",
              active: activeTab,
              onClick: handleTabClick
            }, "Prompts"))), React.createElement("div", {
              className: "section-container"
            }, activeTab === 'global-literals' ? React.createElement(_globalLiterals.GlobalLiterals, null) : activeTab === 'dependencies' ? React.createElement(_dependencies.Dependencies, null) : React.createElement(React.Fragment, null, React.createElement(_customPrompt.CustomPrompt, {
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
            }))), React.createElement("div", {
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
        hash: 1940470140,
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
              console.log(1, name, value);
              store.model.prompts.system = value;
            };
            return React.createElement(React.Fragment, null, React.createElement(_textarea.CustomTextarea, {
              onChange: onChange,
              value: store.model.prompts.system,
              label: "System prompt",
              className: "pg-textarea",
              name: "system",
              fetchingAction: fetchingAction === 'system' ? 'system' : undefined
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2VkaXRvcmpzIiwiZWRpdG9ySW5zdGFuY2UiLCJCbG9ja0VkaXRvciIsInN0b3JlIiwicHJvcGVydHkiLCJlZGl0b3JSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic2F2ZWREYXRhIiwiZ2V0VmFsdWUiLCJkZWZhdWx0IiwiaG9sZGVyIiwicGxhY2Vob2xkZXIiLCJpbmxpbmVUb29sYmFyIiwiZGF0YSIsInBhcnNlVG9FZGl0b3JEYXRhIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJzYXZlIiwiY29udGVudCIsInBhcnNlRnJvbUVkaXRvckRhdGEiLCJtb2RlbCIsImNoYXQiLCJ0cmlnZ2VyIiwiZGVzdHJveSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsInJlZiIsInJhdyIsInRpbWUiLCJEYXRlIiwibm93IiwiYmxvY2tzIiwidHlwZSIsInRleHQiLCJ2ZXJzaW9uIiwibWFwIiwiYmxvY2siLCJqb2luIiwiUmVhY3QiLCJfY2xzeCIsIlRhYkxpbmsiLCJhY3Rpb24iLCJhY3RpdmUiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJpc0FjdGl2ZSIsIk1vZHVsZUNvbnRleHQiLCJleHBvcnRzIiwiY3JlYXRlQ29udGV4dCIsInVuZGVmaW5lZCIsIlNldHRpbmdzQ29udGV4dCIsInVzZU1vZHVsZUNvbnRleHQiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkVycm9yIiwidXNlU2V0dGluZ3NDb250ZXh0IiwiX3BhZ2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJoaWRlIiwiX21vZGVscyIsIl9iYXNlIiwiX2JleW9uZF9jb250ZXh0IiwiQmFzZVN0b3JlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicHJvcGVydGllcyIsIlBsYXlncm91bmQiLCJvbiIsImV4ZWN1dGUiLCJjaGVja1Byb21wdCIsInByb21wdCIsImFuYWx5emUiLCJfaWNvbnMiLCJfY29udGV4dCIsIl9hY3Rpb24iLCJDdXN0b21Qcm9tcHQiLCJuYW1lIiwiZmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwicHJvbXB0cyIsImdldCIsImNvbnNvbGUiLCJ3YXJuIiwicHJvbXB0UmVzdWx0IiwiZ2xvYmFsTGl0ZXJhbHMiLCJ2YWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJlIiwiZXJyb3IiLCJBcHBJY29uQnV0dG9uIiwiaWNvbiIsInZhcmlhbnQiLCJNb2RhbEFjdGlvbiIsIl90ZXh0YXJlYSIsIkFwcCIsInZhbHVlTm9ybWFsIiwic2V0VmFsdWVOb3JtYWwiLCJ2YWx1ZUZsb2F0aW5nIiwic2V0VmFsdWVGbG9hdGluZyIsInZhbHVlV2l0aEVycm9yIiwic2V0VmFsdWVXaXRoRXJyb3IiLCJ2YWx1ZVdpdGhCdXR0b24iLCJzZXRWYWx1ZVdpdGhCdXR0b24iLCJoYW5kbGVDaGFuZ2VOb3JtYWwiLCJ0YXJnZXQiLCJoYW5kbGVDaGFuZ2VGbG9hdGluZyIsImhhbmRsZUNoYW5nZUVycm9yIiwiaGFuZGxlQ2hhbmdlV2l0aEJ1dHRvbiIsImhhbmRsZUNsZWFyQ2xpY2siLCJDdXN0b21UZXh0YXJlYSIsImxhYmVsIiwiZXJyb3JNZXNzYWdlIiwiZGlzYWJsZWQiLCJfY2hhdENvbXBvbmVudCIsIl9zZXR0aW5ncyIsIl9lbXB0eSIsIkVtcHR5Q2hhdCIsIkVtcHR5IiwiUHJvdmlkZXIiLCJTZXR0aW5nc1ZpZXciLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiZW1wdHkiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfIiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwicHJldlNob3ciLCJGcmFnbWVudCIsIlByb21wdE1vZGFsIiwib25DbG9zZSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2xpdGVyYWxzIiwiX2dsb2JhbExpdGVyYWxzIiwiX3RhYkxpbmsiLCJfaG9va3MiLCJyZXNvbHZlciIsInRhYkFjdGl2ZSIsInNldFRhYkFjdGl2ZSIsInVwZGF0ZXMiLCJzZXRVcGRhdGVzIiwidXBkYXRlU3RhdGUiLCJyZXN1bHQiLCJyZXNvbHZlIiwidmFsdWVzIiwidGVtcGxhdGUiLCJleHBhbmRlZCIsInJlc29sdmVkIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUJpbmRlciIsInByZXYiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsImhhbmRsZVRleHRDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwibG9nIiwiaGFuZGxlVGFiQ2xpY2siLCJkYXRhc2V0IiwiaGFuZGxlU2F2ZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsImluY2x1ZGVzIiwiR2xvYmFsTGl0ZXJhbHMiLCJQcm9tcHRMaXRlcmFscyIsImxpdGVyYWxzIiwiQnV0dG9uIiwiX2NvbGxhcHNpYmxlIiwibGl0ZXJhbElucHV0cyIsInNldExpdGVyYWwiLCJpdGVtcyIsImtleXMiLCJmaWx0ZXIiLCJsaXRlcmFsIiwibmFtZXMiLCJmb3JFYWNoIiwicmVwbGFjZSIsInB1c2giLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsImtleSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiX2xpc3QiLCJfY3VzdG9tUHJvbXB0IiwiRGVwZW5kZW5jaWVzIiwiZGVwZW5kZW5jaWVzIiwiSXRlbSIsIml0ZW0iLCJvcGVuIiwiTGlzdCIsImNvbnRyb2wiLCJfbGl0ZXJhbCIsImNvdW50ZXIiLCJzZXRDb3VudGVyIiwibGl0ZXJhbEl0ZW1zIiwiUHJvbXB0TGl0ZXJhbCIsIl9mb3JtIiwiX3N5c3RlbSIsIl9kZXBlbmRlbmNpZXMiLCJmZXRjaGluZ0FjdGlvbiIsInNldEZldGNoaW5nQWN0aW9uIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiU2VsZWN0IiwiU3lzdGVtUHJvbXB0IiwiX29iamVjdGl2ZXMiLCJoYW5kbGVDaGFuZ2UiLCJzZXQiLCJPYmplY3RpdmVzRmllbGQiLCJJbnB1dCIsIm9iamVjdGl2ZXMiLCJzZXRPYmplY3RpdmVzIiwiaXNGb3JtVmlzaWJsZSIsInNldElzRm9ybVZpc2libGUiLCJuZXdPYmplY3RpdmUiLCJzZXROZXdPYmplY3RpdmUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaXNGb3JtVmFsaWQiLCJ0cmltIiwiaGFuZGxlQWRkT2JqZWN0aXZlIiwidXBkYXRlZE9iamVjdGl2ZXMiLCJoYW5kbGVLZXlQcmVzcyIsImhhbmRsZVJlbW92ZU9iamVjdGl2ZSIsImluZGV4IiwiaSIsImxlbmd0aCIsIkljb25CdXR0b24iLCJvbktleVByZXNzIiwib2JqZWN0aXZlIiwic3lzdGVtIiwicm93cyIsInJlc3QiLCJpbnRlcm5hbElkIiwidXNlSWQiLCJlZmZlY3RpdmVJZCIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImhhbmRsZUZvY3VzIiwib25Gb2N1cyIsImhhbmRsZUJsdXIiLCJvbkJsdXIiLCJ3cmFwcGVyQ2xhc3NlcyIsIkJvb2xlYW4iLCJhY3R1YWxQbGFjZWhvbGRlciIsImh0bWxGb3IiXSwic291cmNlcyI6WyIvdHMvY29tcG9uZW50cy9ibG9jay1lZGl0b3IudHN4IiwiL3RzL2NvbXBvbmVudHMvdGFiLWxpbmsudHN4IiwiL3RzL2NvbnRleHQudHN4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY3VzdG9tLXByb21wdC9pbmRleC50c3giLCIvdHMvdmlld3MvZXhhbXBsZS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsL2FjdGlvbi50c3giLCIvdHMvdmlld3MvbW9kYWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsL2xpdGVyYWxzLnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy9kZXBlbmRlbmNpZXMudHN4IiwiL3RzL3ZpZXdzL3NldHRpbmdzL2dsb2JhbC1saXRlcmFscy50c3giLCIvdHMvdmlld3Mvc2V0dGluZ3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3NldHRpbmdzL2xpdGVyYWwudHN4IiwiL3RzL3ZpZXdzL3NldHRpbmdzL29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL3N5c3RlbS9pbmRleC50c3giLCIvdHMvdmlld3MvdGV4dGFyZWEudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxTQUFBLEdBQUFELE9BQUE7VUFPQSxJQUFJRSxjQUFjLEdBQW9CLElBQUk7VUFFcEMsU0FBVUMsV0FBV0EsQ0FBQztZQUFFQyxLQUFLO1lBQUVDO1VBQVEsQ0FBUztZQUNyRCxNQUFNQyxTQUFTLEdBQUcsSUFBQVAsTUFBQSxDQUFBUSxNQUFNLEVBQWlCLElBQUksQ0FBQztZQUU5QyxJQUFBUixNQUFBLENBQUFTLFNBQVMsRUFBQyxNQUFLO2NBQ2QsSUFBSSxDQUFDRixTQUFTLENBQUNHLE9BQU8sRUFBRTtjQUV4QixNQUFNQyxTQUFTLEdBQUdOLEtBQUssQ0FBQ08sUUFBUSxDQUFDTixRQUFRLENBQUM7Y0FFMUNILGNBQWMsR0FBRyxJQUFJRCxTQUFBLENBQUFXLE9BQVEsQ0FBQztnQkFDN0JDLE1BQU0sRUFBRVAsU0FBUyxDQUFDRyxPQUFPO2dCQUN6QkssV0FBVyxFQUFFLDJCQUEyQjtnQkFDeENDLGFBQWEsRUFBRSxJQUFJO2dCQUNuQkMsSUFBSSxFQUFFQyxpQkFBaUIsQ0FBQ1AsU0FBUyxDQUFDO2dCQUNsQ1EsUUFBUSxFQUFFLE1BQUFBLENBQUEsS0FBVztrQkFDcEIsTUFB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