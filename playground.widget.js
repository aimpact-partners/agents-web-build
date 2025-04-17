System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models", "@aimpact/platform@0.1.6/stores/base", "@aimpact/platform@0.1.6/shared/icons", "@aimpact/chat-sdk@1.4.4/chat-component.code", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/dropdown", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/components", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/platform@0.1.6/shared/hooks", "lodash@4.17.21"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, useModuleContext, useSettingsContext, Controller, View, SettingsView, SystemPrompt, __beyond_pkg, hmr;
  _export({
    useModuleContext: void 0,
    useSettingsContext: void 0,
    Controller: void 0,
    View: void 0,
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_4 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactPlatform016Models) {
      dependency_5 = _aimpactPlatform016Models;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_6 = _aimpactPlatform016StoresBase;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_7 = _aimpactPlatform016SharedIcons;
    }, function (_aimpactChatSdk144ChatComponentCode) {
      dependency_8 = _aimpactChatSdk144ChatComponentCode;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_9 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_10 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7Dropdown) {
      dependency_11 = _pragmateUi100Beta7Dropdown;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_12 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Components) {
      dependency_13 = _pragmateUi100Beta7Components;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_14 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Form) {
      dependency_15 = _pragmateUi100Beta7Form;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_16 = _aimpactPlatform016SharedHooks;
    }, function (_lodash2) {
      dependency_17 = _lodash2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/platform/models', dependency_5], ['@aimpact/platform/stores/base', dependency_6], ['@aimpact/platform/shared/icons', dependency_7], ['@aimpact/chat-sdk/chat-component.code', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/icons', dependency_10], ['pragmate-ui/dropdown', dependency_11], ['pragmate-ui/collapsible', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/form', dependency_15], ['@aimpact/platform/shared/hooks', dependency_16], ['lodash', dependency_17]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-platform-playground",
        "vspecifier": "@aimpact/platform@0.1.6/playground.widget",
        "is": "page",
        "route": "/playground",
        "layout": "platform-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/platform@0.1.6/playground.widget');
      ims = new Map();
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
        hash: 831617963,
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
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/custom-prompt/index
      *******************************************/

      ims.set('./views/custom-prompt/index', {
        hash: 1276753998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomPrompt = void 0;
          var React = require("react");
          var _icons = require("@aimpact/platform/shared/icons");
          var _action = require("../modal/action");
          var _context = require("../../context");
          const CustomPrompt = ({
            label,
            name,
            value,
            onChange,
            fetchingAction
          }) => {
            const {
              store
            } = (0, _context.useModuleContext)();
            const prompt = store.model.prompts.get(name);
            const onActionClick = async event => {
              try {
                await store.execute(name);
              } catch (e) {
                console.error(e);
              } finally {}
            };
            return React.createElement("div", {
              className: "custom-prompt-container"
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
              action: name
            }))), store.model.chat[name] ? React.createElement("span", null, store.model.chat[name]) : React.createElement("span", null, "This value is not set"));
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
        hash: 205070700,
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
            }, React.createElement("div", {
              className: "playground-panels"
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
        hash: 4168409784,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalAction = ModalAction;
          var _icons = require("@aimpact/platform/shared/icons");
          var React = require("react");
          var _context = require("../../context");
          var _prompt = require("./prompt");
          function ModalAction({
            icon,
            action
          }) {
            const [show, setShow] = React.useState(false);
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              model
            } = store;
            const prompt = model.prompts.get(action);
            const toggleModal = () => setShow(prevShow => !prevShow);
            return React.createElement(React.Fragment, null, React.createElement(_icons.AppIconButton, {
              icon: icon,
              onClick: toggleModal,
              variant: "primary",
              className: "circle"
            }), show && React.createElement(_prompt.PromptModal, {
              show: show,
              onClose: toggleModal,
              prompt: prompt
            }));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/modal/literals
      **************************************/

      ims.set('./views/modal/literals', {
        hash: 1787729322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiterals = PromptLiterals;
          var React = require("react");
          var _textarea = require("../textarea");
          var _collapsible = require("pragmate-ui/collapsible");
          function PromptLiterals({
            literals,
            state,
            onChange
          }) {
            const literalInputs = [];
            literals.keys.forEach(literal => {
              const name = literal.replace(/_/g, '-');
              literalInputs.push(React.createElement(_collapsible.CollapsibleContainer, {
                key: literal,
                className: "ipe-item"
              }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h6", null, literal)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_textarea.CustomTextarea, {
                name: name,
                value: state[name],
                onChange: onChange
              }))));
            });
            return React.createElement(React.Fragment, null, literalInputs);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modal/prompt
      ************************************/

      ims.set('./views/modal/prompt', {
        hash: 650822989,
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
          function PromptModal({
            show,
            onClose,
            prompt
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [tabActive, setTabActive] = React.useState('edit');
            const [state, setState] = React.useState(() => {
              const initialValues = {
                text: prompt.value
              };
              prompt.literals.keys.forEach(literal => {
                const name = literal.replace(/_/g, '-');
                initialValues[name] = prompt.literals.values?.[name] || '';
              });
              return initialValues;
            });
            const [isFetching, setIsFetching] = React.useState(false);
            const handleTextChange = event => {
              setState(prevState => ({
                ...prevState,
                text: event.target.value
              }));
            };
            const handleInputChange = event => {
              const {
                name,
                value
              } = event.target;
              setState(prevState => ({
                ...prevState,
                [name]: value
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
            }, React.createElement("a", {
              className: `btn btn-primary outline ${tabActive === 'edit' ? 'active' : ''}`,
              "data-action": "edit",
              onClick: handleTabClick
            }, "Edit"), React.createElement("a", {
              className: `btn btn-primary outline ${tabActive === 'read' ? 'active' : ''}`,
              "data-action": "read",
              onClick: handleTabClick
            }, "Read")), tabActive === 'edit' ? React.createElement(_textarea.CustomTextarea, {
              value: state.text,
              onChange: handleTextChange,
              variant: "floating"
            }) : React.createElement("div", {
              className: "prompt__content"
            }, prompt.parsed)), React.createElement("div", {
              className: "panel right-panel"
            }, React.createElement(_literals.PromptLiterals, {
              literals: prompt.literals,
              state: state,
              onChange: handleInputChange
            }))), React.createElement("footer", null, React.createElement(_components.Button, {
              variant: "primary",
              icon: "save",
              onClick: handleSave,
              disabled: isFetching
            }, "Save")));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/objectives
      **********************************/

      ims.set('./views/objectives', {
        hash: 2634137259,
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
            }, objectives.map((objective, index) => _react.default.createElement("div", {
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

      /********************************
      INTERNAL MODULE: ./views/settings
      ********************************/

      ims.set('./views/settings', {
        hash: 3439337268,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SettingsView = SettingsView;
          var React = require("react");
          var _objectives = require("./objectives");
          var _context = require("../context");
          var _system = require("./system");
          var _customPrompt = require("./custom-prompt");
          var _form = require("pragmate-ui/form");
          /*bundle*/
          function SettingsView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetchingAction, setFetchingAction] = React.useState(null);
            const onChange = event => {
              store.model.chat[event.currentTarget.name] = event.currentTarget.value;
            };
            const value = {
              store,
              fetching: fetchingAction
            };
            return React.createElement(_context.SettingsContext.Provider, {
              value: value
            }, React.createElement("div", {
              className: "settings-panel"
            }, React.createElement(_form.Select, {
              label: "Model"
            }, React.createElement("option", null, "GPT 4o")), React.createElement(_system.SystemPrompt, null), React.createElement(_objectives.ObjectivesField, {
              name: "objectives",
              onChange: onChange,
              data: []
            }), React.createElement(_customPrompt.CustomPrompt, {
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

      /************************************
      INTERNAL MODULE: ./views/system/index
      ************************************/

      ims.set('./views/system/index', {
        hash: 1991190245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemPrompt = SystemPrompt;
          var React = require("react");
          var _textarea = require("../textarea");
          var _context = require("../../context");
          var _lodash = require("lodash");
          var _hooks = require("@aimpact/platform/shared/hooks");
          /*bundle*/
          function SystemPrompt() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetchingAction, setFetchingAction] = React.useState(null);
            (0, _hooks.useStore)(store, ['system.changed']);
            const debouncedOnChange = (0, _lodash.debounce)((name, value) => {
              const promptData = store.model.prompts.checkDependency(value);
              console.log(promptData);
              const {
                literals,
                dependencies
              } = promptData;
              store.model.prompts.system = value;
              // store.model.prompts.save(name, { text: value, literals, dependencies });
            }, 300);
            const onChange = event => {
              const {
                name,
                value
              } = event.currentTarget;
              debouncedOnChange(name, value);
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
        "im": "./views/settings",
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
        (require || prop === 'useModuleContext') && _export("useModuleContext", useModuleContext = require ? require('./context').useModuleContext : value);
        (require || prop === 'useSettingsContext') && _export("useSettingsContext", useSettingsContext = require ? require('./context').useSettingsContext : value);
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'SettingsView') && _export("SettingsView", SettingsView = require ? require('./views/settings').SettingsView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiU2V0dGluZ3NDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VTZXR0aW5nc0NvbnRleHQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsIl9tb2RlbHMiLCJfYmFzZSIsIl9iZXlvbmRfY29udGV4dCIsIkJhc2VTdG9yZU1hbmFnZXIiLCJtb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicHJvcGVydGllcyIsIlBsYXlncm91bmQiLCJjaGF0Iiwib24iLCJ0cmlnZ2VyIiwiZ2V0VmFsdWUiLCJwcm9wZXJ0eSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJSZWFjdCIsIl9pY29ucyIsIl9hY3Rpb24iLCJfY29udGV4dCIsIkN1c3RvbVByb21wdCIsImxhYmVsIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJmZXRjaGluZ0FjdGlvbiIsInByb21wdCIsInByb21wdHMiLCJnZXQiLCJvbkFjdGlvbkNsaWNrIiwiZXZlbnQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkFwcEljb25CdXR0b24iLCJpY29uIiwidmFyaWFudCIsIm9uQ2xpY2siLCJNb2RhbEFjdGlvbiIsIl90ZXh0YXJlYSIsIkFwcCIsInZhbHVlTm9ybWFsIiwic2V0VmFsdWVOb3JtYWwiLCJ1c2VTdGF0ZSIsInZhbHVlRmxvYXRpbmciLCJzZXRWYWx1ZUZsb2F0aW5nIiwidmFsdWVXaXRoRXJyb3IiLCJzZXRWYWx1ZVdpdGhFcnJvciIsInZhbHVlV2l0aEJ1dHRvbiIsInNldFZhbHVlV2l0aEJ1dHRvbiIsImhhbmRsZUNoYW5nZU5vcm1hbCIsInRhcmdldCIsImhhbmRsZUNoYW5nZUZsb2F0aW5nIiwiaGFuZGxlQ2hhbmdlRXJyb3IiLCJoYW5kbGVDaGFuZ2VXaXRoQnV0dG9uIiwiaGFuZGxlQ2xlYXJDbGljayIsImRlZmF1bHQiLCJDdXN0b21UZXh0YXJlYSIsImlkIiwicGxhY2Vob2xkZXIiLCJlcnJvck1lc3NhZ2UiLCJjaGlsZHJlbiIsInR5cGUiLCJkaXNhYmxlZCIsIl9jaGF0Q29tcG9uZW50IiwiX3NldHRpbmdzIiwiX2VtcHR5IiwiRW1wdHlDaGF0IiwiRW1wdHkiLCJ0ZXh0IiwiUHJvdmlkZXIiLCJTZXR0aW5nc1ZpZXciLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiZW1wdHkiLCJBZ2VudHNDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfcHJvbXB0Iiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwicHJldlNob3ciLCJGcmFnbWVudCIsIlByb21wdE1vZGFsIiwib25DbG9zZSIsIl9jb2xsYXBzaWJsZSIsIlByb21wdExpdGVyYWxzIiwibGl0ZXJhbHMiLCJzdGF0ZSIsImxpdGVyYWxJbnB1dHMiLCJrZXlzIiwiZm9yRWFjaCIsImxpdGVyYWwiLCJyZXBsYWNlIiwicHVzaCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwia2V5IiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJfY29tcG9uZW50cyIsIl9tb2RhbCIsIl9saXRlcmFscyIsInRhYkFjdGl2ZSIsInNldFRhYkFjdGl2ZSIsInNldFN0YXRlIiwiaW5pdGlhbFZhbHVlcyIsInZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiaGFuZGxlVGV4dENoYW5nZSIsInByZXZTdGF0ZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlVGFiQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImhhbmRsZVNhdmUiLCJzYXZlIiwiTW9kYWwiLCJwYXJzZWQiLCJCdXR0b24iLCJfZm9ybSIsIk9iamVjdGl2ZXNGaWVsZCIsImRhdGEiLCJvYmplY3RpdmVzIiwic2V0T2JqZWN0aXZlcyIsImlzRm9ybVZpc2libGUiLCJzZXRJc0Zvcm1WaXNpYmxlIiwibmV3T2JqZWN0aXZlIiwic2V0TmV3T2JqZWN0aXZlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlzRm9ybVZhbGlkIiwidHJpbSIsImhhbmRsZUFkZE9iamVjdGl2ZSIsInVwZGF0ZWRPYmplY3RpdmVzIiwiaGFuZGxlS2V5UHJlc3MiLCJoYW5kbGVSZW1vdmVPYmplY3RpdmUiLCJpbmRleCIsImZpbHRlciIsIl8iLCJpIiwibGVuZ3RoIiwiSWNvbkJ1dHRvbiIsIklucHV0Iiwib25LZXlQcmVzcyIsIm1hcCIsIm9iamVjdGl2ZSIsIl9vYmplY3RpdmVzIiwiX3N5c3RlbSIsIl9jdXN0b21Qcm9tcHQiLCJzZXRGZXRjaGluZ0FjdGlvbiIsImZldGNoaW5nIiwiU2VsZWN0IiwiU3lzdGVtUHJvbXB0IiwiX2xvZGFzaCIsIl9ob29rcyIsInVzZVN0b3JlIiwiZGVib3VuY2VkT25DaGFuZ2UiLCJkZWJvdW5jZSIsInByb21wdERhdGEiLCJjaGVja0RlcGVuZGVuY3kiLCJsb2ciLCJkZXBlbmRlbmNpZXMiLCJzeXN0ZW0iLCJyb3dzIiwicmVzdCIsImludGVybmFsSWQiLCJ1c2VJZCIsImVmZmVjdGl2ZUlkIiwiaXNGb2N1c2VkIiwic2V0SXNGb2N1c2VkIiwiaGFuZGxlRm9jdXMiLCJvbkZvY3VzIiwiaGFuZGxlQmx1ciIsIm9uQmx1ciIsIndyYXBwZXJDbGFzc2VzIiwiQm9vbGVhbiIsImpvaW4iLCJhY3R1YWxQbGFjZWhvbGRlciIsImh0bWxGb3IiXSwic291cmNlcyI6WyIvdHMvY29udGV4dC50c3giLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jdXN0b20tcHJvbXB0L2luZGV4LnRzeCIsIi90cy92aWV3cy9leGFtcGxlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9tb2RhbC9saXRlcmFscy50c3giLCIvdHMvdmlld3MvbW9kYWwvcHJvbXB0LnRzeCIsIi90cy92aWV3cy9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3Mvc3lzdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy90ZXh0YXJlYS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFjTyxNQUFNQyxhQUFhLEdBQUFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFHLElBQUFGLE1BQUEsQ0FBQUksYUFBYSxFQUFzQ0MsU0FBUyxDQUFDO1VBQ25GLE1BQU1DLGVBQWUsR0FBQUgsT0FBQSxDQUFBRyxlQUFBLEdBQUcsSUFBQU4sTUFBQSxDQUFBSSxhQUFhLEVBQXdDQyxTQUFTLENBQUM7VUFFdkY7VUFBVyxNQUFNRSxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFLO1lBQy9DLE1BQU1DLE9BQU8sR0FBRyxJQUFBUixNQUFBLENBQUFTLFVBQVUsRUFBQ1AsYUFBYSxDQUFDO1lBQ3pDLElBQUksQ0FBQ00sT0FBTyxFQUFFO2NBQ2IsTUFBTSxJQUFJRSxLQUFLLENBQUMsdURBQXVELENBQUM7O1lBRXpFLE9BQU9GLE9BQU87VUFDZixDQUFDO1VBQUNMLE9BQUEsQ0FBQUksZ0JBQUEsR0FBQUEsZ0JBQUE7VUFFSztVQUFXLE1BQU1JLGtCQUFrQixHQUFHQSxDQUFBLEtBQUs7WUFDakQsTUFBTUgsT0FBTyxHQUFHLElBQUFSLE1BQUEsQ0FBQVMsVUFB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