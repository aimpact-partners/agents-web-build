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
        hash: 3006128184,
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
            return React.createElement("div", null, React.createElement("header", {
              className: "prompt-header"
            }, React.createElement("h6", null, name), React.createElement("div", {
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
        hash: 3687108019,
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
              className: "add-objective-button"
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