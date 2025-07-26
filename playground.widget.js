System.register(["@beyond-js/widgets@0.1.6/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/platform@0.1.6/models/playground", "@aimpact/platform@0.1.6/stores/base", "@aimpact/chat-sdk@1.5.5/chat-component.code", "pragmate-ui@1.0.2/empty", "@aimpact/platform@0.1.6/shared/hooks", "@radix-ui/react-icons@1.3.2", "@editorjs/editorjs@2.30.8", "@aimpact/platform@0.1.6/shared/icons", "clsx@2.1.1", "pragmate-ui@1.0.2/form", "framer-motion@11.18.2", "react-json-view-lite@2.4.1", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/collapsible", "pragmate-ui@1.0.2/components", "pragmate-ui@1.0.2/form/react-select", "pragmate-ui@1.0.2/modal", "pragmate-ui@1.0.2/alert", "@aimpact/platform@0.1.6/components/editor", "pragmate-ui@1.0.2/icons", "dayjs@1.11.13", "@aimpact/platform@0.1.6/components/ui", "@radix-ui/react-select@2.2.4", "@radix-ui/react-popover@1.1.13"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, useModuleContext, useSettingsContext, Controller, ChatContainer, ChatPanel, TabLink, Dependencies, View, ReservedPanel, ProgressPanel, SettingsView, ImportLibrary, Prompts, __beyond_pkg, hmr;
  _export({
    useModuleContext: void 0,
    useSettingsContext: void 0,
    Controller: void 0,
    ChatContainer: void 0,
    ChatPanel: void 0,
    TabLink: void 0,
    Dependencies: void 0,
    View: void 0,
    ReservedPanel: void 0,
    ProgressPanel: void 0,
    SettingsView: void 0,
    ImportLibrary: void 0,
    Prompts: void 0
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
    }, function (_aimpactPlatform016ModelsPlayground) {
      dependency_5 = _aimpactPlatform016ModelsPlayground;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_6 = _aimpactPlatform016StoresBase;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_7 = _aimpactChatSdk155ChatComponentCode;
    }, function (_pragmateUi102Empty) {
      dependency_8 = _pragmateUi102Empty;
    }, function (_aimpactPlatform016SharedHooks) {
      dependency_9 = _aimpactPlatform016SharedHooks;
    }, function (_radixUiReactIcons) {
      dependency_10 = _radixUiReactIcons;
    }, function (_editorjsEditorjs) {
      dependency_11 = _editorjsEditorjs;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_12 = _aimpactPlatform016SharedIcons;
    }, function (_clsx2) {
      dependency_13 = _clsx2;
    }, function (_pragmateUi102Form) {
      dependency_14 = _pragmateUi102Form;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_reactJsonViewLite2) {
      dependency_16 = _reactJsonViewLite2;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi102List) {
      dependency_18 = _pragmateUi102List;
    }, function (_pragmateUi102Collapsible) {
      dependency_19 = _pragmateUi102Collapsible;
    }, function (_pragmateUi102Components) {
      dependency_20 = _pragmateUi102Components;
    }, function (_pragmateUi102FormReactSelect) {
      dependency_21 = _pragmateUi102FormReactSelect;
    }, function (_pragmateUi102Modal) {
      dependency_22 = _pragmateUi102Modal;
    }, function (_pragmateUi102Alert) {
      dependency_23 = _pragmateUi102Alert;
    }, function (_aimpactPlatform016ComponentsEditor) {
      dependency_24 = _aimpactPlatform016ComponentsEditor;
    }, function (_pragmateUi102Icons) {
      dependency_25 = _pragmateUi102Icons;
    }, function (_dayjs2) {
      dependency_26 = _dayjs2;
    }, function (_aimpactPlatform016ComponentsUi) {
      dependency_27 = _aimpactPlatform016ComponentsUi;
    }, function (_radixUiReactSelect) {
      dependency_28 = _radixUiReactSelect;
    }, function (_radixUiReactPopover) {
      dependency_29 = _radixUiReactPopover;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/platform/models/playground', dependency_5], ['@aimpact/platform/stores/base', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['pragmate-ui/empty', dependency_8], ['@aimpact/platform/shared/hooks', dependency_9], ['@radix-ui/react-icons', dependency_10], ['@editorjs/editorjs', dependency_11], ['@aimpact/platform/shared/icons', dependency_12], ['clsx', dependency_13], ['pragmate-ui/form', dependency_14], ['framer-motion', dependency_15], ['react-json-view-lite', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['pragmate-ui/list', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/components', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['pragmate-ui/modal', dependency_22], ['pragmate-ui/alert', dependency_23], ['@aimpact/platform/components/editor', dependency_24], ['pragmate-ui/icons', dependency_25], ['dayjs', dependency_26], ['@aimpact/platform/components/ui', dependency_27], ['@radix-ui/react-select', dependency_28], ['@radix-ui/react-popover', dependency_29]]);
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
        hash: 734611292,
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 150902971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _playground = require("@aimpact/platform/models/playground");
          var _base = require("@aimpact/platform/stores/base");
          var _beyond_context = require("beyond_context");
          class StoreManager extends _base.BaseStoreManager {
            #model;
            imported;
            get model() {
              return this.#model;
            }
            get activities() {
              return this.#model?.activities;
            }
            get ready() {
              return this.#model.ready && super.ready;
            }
            get errors() {
              return this.#model.errors;
            }
            get system() {
              return this.#model.prompts.map.get('system');
            }
            get summary() {
              return this.#model.prompts.map.get('summary');
            }
            get ipe() {
              return this.#model.prompts.map.get('ipe');
            }
            constructor() {
              super(_beyond_context.module.specifier, {
                properties: ['imported']
              });
              this.initialize();
              // hmr.on('change', this.initialize);
            }
            initialize = () => {
              console.log('initialize');
              this.#model = new _playground.Playground();
              this.#model.on('change', () => {
                this.trigger('change');
              });
              this.#model.chat.on('change', () => {
                this.trigger('change');
              });
            };
            getValue(property) {
              return this.model.chat[property] ?? '';
            }
            async execute(action) {
              return;
              return await this.model.execute(action);
            }
            checkPrompt(prompt) {
              this.model.parse(prompt);
            }
            deleteMessage(id) {
              this.model.chat.messages.delete(id);
            }
            parse(prompt) {
              return this.model.parse(prompt);
            }
            async importActivity(language, activityId) {
              return this.model.import({
                language,
                activityId
              });
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/chat/index
      **********************************/

      ims.set('./views/chat/index', {
        hash: 207880448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatContainer = ChatContainer;
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("pragmate-ui/empty");
          var React = require("react");
          var _panel = require("./panel");
          /*bundle*/
          function ChatContainer({
            store
          }) {
            function EmptyChat() {
              return React.createElement(_empty.Empty, {
                text: "Your conversation will appear here",
                icon: "info"
              });
            }
            return React.createElement("div", {
              className: "chat-container"
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              empty: EmptyChat,
              model: store.model.chat
            }, React.createElement(_panel.ChatPanel, null), React.createElement(_chatComponent.AgentsChatInput, null)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/chat/panel/index
      ****************************************/

      ims.set('./views/chat/panel/index', {
        hash: 171171141,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatPanel = ChatPanel;
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("pragmate-ui/empty");
          var React = require("react");
          var _message = require("../../components/message");
          var _hooks = require("@aimpact/platform/shared/hooks");
          /*bundle*/
          function ChatPanel() {
            const {
              store: chatStore,
              ready
            } = (0, _chatComponent.useChatContext)();
            (0, _hooks.useStore)(chatStore, ['change', 'new.message', 'new.answer']);
            function EmptyChat() {
              return React.createElement(_empty.Empty, {
                text: "Your conversation will appear here",
                icon: "info"
              });
            }
            if (ready && chatStore.notFound) return '404';
            if (!chatStore.ready) return React.createElement(_empty.Empty, {
              text: "Loading...",
              icon: "info"
            });
            if (chatStore.messages.length === 0) return React.createElement(EmptyChat, null);
            return React.createElement("div", {
              className: "chat-panel"
            }, chatStore.messages.map((message, index) => {
              return React.createElement(_message.Message, {
                message: message,
                index: index,
                key: message.id
              });
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/block-editor
      ***********************************************/

      ims.set('./views/components/block-editor', {
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

      /************************************************
      INTERNAL MODULE: ./views/components/custom-prompt
      ************************************************/

      ims.set('./views/components/custom-prompt', {
        hash: 2940938204,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomPrompt = void 0;
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _icons = require("@aimpact/platform/shared/icons");
          var _clsx = require("clsx");
          var React = require("react");
          var _context = require("../../context");
          var _action = require("../modal/action");
          const CustomPrompt = ({
            item
          }) => {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              name,
              value,
              id,
              format
            } = item; // Destructure format
            (0, _hooks.useStore)(store.model, ['fetching.changed']);
            (0, _hooks.useStore)(item);
            let promptResult = store.model.globalLiterals.map.get(id);
            if (promptResult && typeof promptResult.value !== 'string') {
              promptResult = JSON.stringify(promptResult.value);
            }
            const onActionClick = async event => {
              // Ensure item has a valid format, defaulting to 'text'
              const executionItem = {
                ...item,
                format: item.format || 'text' // Default to 'text' if undefined
              }; // Cast to Prompt to satisfy the execute method's expected type
              store.model.execute(item);
            };
            return React.createElement("div", {
              className: (0, _clsx.default)('custom-prompt-container', {
                'is-fetching': store.model.fetching
              })
            }, React.createElement("header", {
              className: "prompt-header"
            }, React.createElement("h5", null, name), React.createElement("div", {
              className: "prompt-actions"
            }, React.createElement(_icons.AppIconButton, {
              "data-action": name,
              icon: "play",
              disabled: (format || 'text') === 'json_schema' && !item.promptSchema,
              variant: "primary",
              className: "circle",
              onClick: onActionClick
            }), React.createElement(_action.ModalAction, {
              icon: "edit",
              prompt: item,
              action: name
            }))), React.createElement("div", {
              className: "prompt-value"
            }, value ? React.createElement("span", null, value) : React.createElement("span", null, "This value is not set")));
          };
          exports.CustomPrompt = CustomPrompt;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/literal
      ******************************************/

      ims.set('./views/components/literal', {
        hash: 3304606232,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiteral = PromptLiteral;
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _form = require("pragmate-ui/form");
          var React = require("react");
          var _context = require("../../context");
          var _objectives = require("../settings/objectives");
          function PromptLiteral({
            item
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(item);
            const handleChange = event => {
              try {
                event?.stopPropagation?.();
                item.value = event.currentTarget.value;
                item.set({
                  value: event.currentTarget.value
                });
              } catch (e) {
                console.error(e);
              }
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

      /******************************************
      INTERNAL MODULE: ./views/components/message
      ******************************************/

      ims.set('./views/components/message', {
        hash: 1833516661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = Message;
          var React = require("react");
          var _reactIcons = require("@radix-ui/react-icons");
          var _framerMotion = require("framer-motion");
          var _context = require("../../context");
          var _hooks = require("@aimpact/platform/shared/hooks");
          // components/message/message.tsx

          function Message({
            message,
            index
          }) {
            const [visible, setVisible] = React.useState(true);
            const [editing, setEditing] = React.useState(false);
            const inputRef = React.useRef(null);
            const {
              store
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(message, ['change', 'content.changed']);
            const handleEditToggle = () => {
              setEditing(true);
              requestAnimationFrame(() => {
                inputRef.current?.focus();
              });
            };
            const handleKeyDown = e => {
              if (e.key === 'Enter') {
                setEditing(false);
              }
            };
            const handleDelete = () => {
              setVisible(false);
              store.deleteMessage(message.id);
            };
            const onChange = e => {
              message.content = e.target.value;
            };
            return React.createElement(_framerMotion.AnimatePresence, null, visible && React.createElement(_framerMotion.motion.div, {
              className: `message message--${message.role}`,
              "data-id": message.id,
              initial: {
                opacity: 1
              },
              exit: {
                opacity: 0,
                height: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0
              },
              transition: {
                duration: 0.3
              }
            }, React.createElement("div", {
              className: "message__role"
            }, message.role), editing ? React.createElement("input", {
              ref: inputRef,
              className: "message__input",
              value: message.content,
              onChange: onChange,
              onKeyDown: handleKeyDown
            }) : React.createElement("div", {
              className: "message__content"
            }, message.content), React.createElement("div", {
              className: "message__hover-actions"
            }, React.createElement("button", {
              className: "message__hover-action",
              onClick: handleEditToggle
            }, React.createElement(_reactIcons.Pencil1Icon, null)), React.createElement("button", {
              className: "message__hover-action",
              onClick: handleDelete
            }, React.createElement(_reactIcons.TrashIcon, null)))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/modal-action
      ***********************************************/

      ims.set('./views/components/modal-action', {
        hash: 1195244317,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalAction = ModalAction;
          var _react = require("react");
          function ModalAction({
            children,
            specs,
            Modal
          }) {
            const [showModal, setShowModal] = (0, _react.useState)(false);
            const toggle = () => setShowModal(prev => !prev);
            const handleClose = () => setShowModal(false);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
              onClick: toggle,
              style: {
                cursor: 'pointer'
              }
            }, children), showModal && _react.default.createElement(Modal, {
              ...specs,
              show: true,
              onClose: handleClose
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/prompt-result
      ************************************************/

      ims.set('./views/components/prompt-result', {
        hash: 3084373688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptResult = void 0;
          var React = require("react");
          var _reactJsonViewLite = require("react-json-view-lite");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          const PromptResult = ({
            prompt,
            value
          }) => {
            let result = value !== undefined ? value : prompt.result;
            let type = 'text';
            try {
              type = 'json';
              result = JSON.parse(result);
            } catch (e) {
              result = result;
            }
            if (type === 'json') {
              try {
                return React.createElement(_reactJsonViewLite.JsonView, {
                  data: result,
                  style: _reactJsonViewLite.defaultStyles
                });
              } catch (e) {
                return React.createElement("span", null, "Invalid JSON");
              }
            }
            return React.createElement(_markdown.Markdown, null, result);
          };
          exports.PromptResult = PromptResult;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/components/tab-link
      *******************************************/

      ims.set('./views/components/tab-link', {
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

      /*******************************************
      INTERNAL MODULE: ./views/components/textarea
      *******************************************/

      ims.set('./views/components/textarea', {
        hash: 153659708,
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

      /***********************************************
      INTERNAL MODULE: ./views/dependencies/dependency
      ***********************************************/

      ims.set('./views/dependencies/dependency', {
        hash: 2629258869,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dependency = void 0;
          var React = require("react");
          var _context = require("../../context");
          var _action = require("../modal/action");
          var _clsx = require("clsx");
          const Dependency = ({
            item
          }) => {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = React.useState(false);
            const {
              id,
              name
            } = item;
            const prompt = store.model.prompts.map.get(id);
            if (!prompt) {
              console.warn(`Prompt ${id} not found`);
              return null;
            }
            let promptResult = store.model.globalLiterals.map.get(id);
            if (promptResult && typeof promptResult.value !== 'string') {
              promptResult = JSON.stringify(promptResult.value);
            }
            return React.createElement("div", {
              className: (0, _clsx.default)('custom-prompt-container', {
                'is-fetching': fetching
              })
            }, React.createElement("header", {
              className: "prompt-header"
            }, React.createElement("h5", null, name), React.createElement("div", {
              className: "prompt-actions"
            }, React.createElement(_action.ModalAction, {
              icon: "edit",
              prompt: prompt,
              action: id
            }))), promptResult ? React.createElement("span", null, promptResult) : React.createElement("span", null, "This value is not set"));
          };
          exports.Dependency = Dependency;
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/dependencies/index
      ******************************************/

      ims.set('./views/dependencies/index', {
        hash: 1370431717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dependencies = Dependencies;
          var React = require("react");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _dependency = require("./dependency");
          var _collapsible = require("pragmate-ui/collapsible");
          /*bundle*/
          function Dependencies() {
            const {
              store
            } = (0, _context.useModuleContext)();
            return React.createElement("div", {
              className: "dependencies-container"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", null, "Dependencies")), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_list.List, {
              items: store.model.prompts.dependencies,
              control: _dependency.Dependency
            }))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1246298401,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _chat = require("./chat");
          var _settings = require("./settings");
          /*bundle*/
          function View({
            store
          }) {
            (0, _hooks.useStore)(store);
            if (!store.ready) return React.createElement(_components.Spinner, {
              active: true
            });
            if (store.ready && store.errors.length) {
              return React.createElement("div", null, React.createElement("h1", null, "Error"), React.createElement("p", null, store.errors.join(', ')));
            }
            return React.createElement(_context.ModuleContext.Provider, {
              value: {
                store
              }
            }, React.createElement("main", {
              className: "playground-page playground-panels"
            }, React.createElement(_settings.SettingsView, null), React.createElement(_chat.ChatContainer, {
              store: store
            })));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/literals/global
      ***************************************/

      ims.set('./views/literals/global', {
        hash: 729935759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GlobalLiterals = GlobalLiterals;
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _collapsible = require("pragmate-ui/collapsible");
          var React = require("react");
          var _context = require("../../context");
          var _literal = require("../components/literal");
          var _list = require("pragmate-ui/list");
          function GlobalLiterals() {
            const {
              store
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store.model.globalLiterals);
            return React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h6", null, "Global Literals")), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_list.List, {
              items: store.model.globalLiterals.items,
              control: _literal.PromptLiteral
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/literals/reserved
      *****************************************/

      ims.set('./views/literals/reserved', {
        hash: 2899587851,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReservedPanel = ReservedPanel;
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _reactJsonViewLite = require("react-json-view-lite");
          var _hooks = require("@aimpact/platform/shared/hooks");
          /*bundle*/
          function ReservedPanel() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const reserved = store.model.reservedLiterals;
            (0, _hooks.useStore)(reserved);
            (0, _hooks.useStore)(store.model.chat, ['new.message', 'new.answer', 'new.prompt', 'new.message']);
            const items = reserved.names.map(name => ({
              name,
              value: reserved[name]
            }));
            const Item = ({
              item
            }) => {
              let result = item.value;
              let type = 'text';
              if (typeof item.value === 'object') {
                try {
                  return React.createElement("div", {
                    key: item.name,
                    className: "list-item"
                  }, React.createElement("h6", null, item.name), React.createElement(_reactJsonViewLite.JsonView, {
                    data: result,
                    style: _reactJsonViewLite.defaultStyles
                  }));
                } catch (e) {
                  return React.createElement("span", null, "Invalid JSON");
                }
              }
              return React.createElement("div", {
                key: item.name,
                className: "list-item"
              }, React.createElement("h6", null, item.name), " ", result ? result : 'empty value');
            };
            return React.createElement("div", {
              className: "progress-container"
            }, React.createElement(_list.List, {
              items: items,
              control: Item
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/modal/action
      ************************************/

      ims.set('./views/modal/action', {
        hash: 1417103121,
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

      /************************************
      INTERNAL MODULE: ./views/modal/footer
      ************************************/

      ims.set('./views/modal/footer', {
        hash: 1419099577,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalPanelFooter = ModalPanelFooter;
          var React = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _components = require("pragmate-ui/components");
          var _provider = require("./provider");
          var _context = require("../../context");
          function ModalPanelFooter() {
            const {
              values,
              prompt,
              setErrors,
              setValues
            } = (0, _provider.usePromptModal)();
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = React.useState(false);
            const onSave = async () => {
              try {
                setFetching(true);
                let data = {};
                Object.keys(values).forEach(key => {
                  if (!!values[key]) {
                    data[key] = values[key];
                  }
                });
                await prompt.set(data);
                setTimeout(() => {
                  setFetching(false);
                  setValues({
                    ...prompt.getProperties(),
                    changed: false
                  });
                }, 500);
              } catch (e) {
                setErrors(e.message);
                console.error(e);
              }
            };
            const onFormatChange = event => {
              setValues(values => ({
                ...values,
                format: event.target.value
              }));
            };
            const disabled = !values.changed || prompt.fetching || prompt.processing || fetching;
            return React.createElement("footer", null, React.createElement("div", {
              className: "flex-container gap-1"
            }, React.createElement("div", {
              className: "flex-container gap-1"
            }, React.createElement("h6", null, "Format"), React.createElement(_reactSelect.ReactSelect, {
              name: "format",
              value: values.format,
              onChange: onFormatChange,
              options: [{
                label: 'json',
                value: 'json'
              }, {
                label: 'json_schema',
                value: 'json_schema'
              }, {
                label: 'text',
                value: 'text'
              }]
            })), React.createElement("div", null, React.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave,
              disabled: disabled
            }, "Save"))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/modal/index
      ***********************************/

      ims.set('./views/modal/index', {
        hash: 610470244,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptModal = PromptModal;
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _clsx = require("clsx");
          var _modal = require("pragmate-ui/modal");
          var React = require("react");
          var _context = require("../../context");
          var _literals = require("./literals");
          var _main = require("./main");
          var _panelHeader = require("./panel-header");
          var _provider = require("./provider");
          var _alert = require("pragmate-ui/alert");
          function PromptModal({
            show,
            onClose,
            prompt,
            executed
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [errors, setErrors] = React.useState();
            //first time opened
            const [ready, setReady] = React.useState(true);
            (0, _hooks.useStore)(prompt, ['change', 'value.changed', 'literals.changed', 'fetching.changed']);
            const [values, setValues] = React.useState({
              ...prompt.getProperties(),
              changed: false
            });
            const ref = React.useRef(null);
            const [tabActive, setTabActive] = React.useState('value');
            const handleTabClick = event => {
              const action = event.currentTarget.dataset.action;
              store.parse(prompt);
              if (action) {
                setReady(false);
                setTimeout(() => {
                  setReady(true);
                  setTabActive(action);
                }, 100);
              }
            };
            const className = `panels ${prompt.literals.keys.length ? 'has-literals' : ''}`;
            return React.createElement(_modal.Modal, {
              className: (0, _clsx.default)('modal-action', {
                'is-fetching': prompt.fetching
              }),
              show: show,
              onClose: onClose,
              closeBackdrop: false
            }, React.createElement(_provider.PromptModalContext.Provider, {
              value: {
                values,
                setValues,
                tabActive,
                setTabActive,
                prompt,
                setErrors,
                errors,
                changed: values.changed
              }
            }, React.createElement("div", {
              className: className,
              ref: ref
            }, prompt.literals.keys.length ? React.createElement("div", {
              className: "panel right-panel"
            }, React.createElement("h6", null, "Prompt Literals "), React.createElement(_literals.PromptLiterals, {
              prompt: prompt,
              literals: prompt.literals
            })) : null, React.createElement("div", {
              className: "panel left-panel"
            }, React.createElement(_panelHeader.ModalPanelHeader, {
              tabActive: tabActive,
              onTabClick: handleTabClick,
              prompt: prompt,
              executed: executed
            }), errors && React.createElement(_alert.Alert, {
              type: "error"
            }, errors), ready ? React.createElement(_main.MainModalPanel, {
              prompt: prompt,
              name: tabActive
            }) : null, ' '))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/modal/literals
      **************************************/

      ims.set('./views/modal/literals', {
        hash: 3410119076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiterals = PromptLiterals;
          var _collapsible = require("pragmate-ui/collapsible");
          var React = require("react");
          var _textarea = require("../components/textarea");
          var _context = require("../../context");
          function PromptLiterals({
            prompt
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
            const items = prompt.literals.keys.filter(literal => !store.model.globalLiterals.names.includes(literal));
            // console.log(3, items, prompt.literals.keys, store.model.globalLiterals.names);
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

      /**********************************
      INTERNAL MODULE: ./views/modal/main
      **********************************/

      ims.set('./views/modal/main', {
        hash: 2324665614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainModalPanel = MainModalPanel;
          var _editor = require("@aimpact/platform/components/editor");
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _footer = require("./footer");
          var _promptInteractions = require("./prompt-interactions");
          var _promptLiteralsUsed = require("./prompt-literals-used");
          var _provider = require("./provider");
          function MainModalPanel({
            prompt,
            name
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              values,
              setValues,
              tabActive,
              setTabActive
            } = (0, _provider.usePromptModal)();
            const originalValue = prompt[name] ?? '';
            (0, _hooks.useStore)(_editor.hmr, ['change']);
            const [value, setValue] = React.useState(typeof originalValue === 'string' ? originalValue : JSON.stringify(originalValue, null, 2));
            const handleTextChange = v => {
              if (v === value) return;
              setValue(v);
              setValues(values => ({
                ...values,
                [name]: v,
                changed: true
              }));
            };
            React.useEffect(() => {
              setValue(typeof originalValue === 'string' ? originalValue : JSON.stringify(originalValue, null, 2));
            }, [name]);
            console.log(0.2, prompt.parsed);
            return React.createElement("div", {
              className: "panel-main-content"
            }, React.createElement("section", null, React.createElement(_components.ConditionalContainer, {
              condition: name,
              options: {
                value: React.createElement(_editor.PromptEditor, {
                  format: "plain",
                  value: value,
                  onChange: handleTextChange
                }),
                expanded: React.createElement(_editor.PromptEditor, {
                  format: "plain",
                  value: value,
                  onChange: handleTextChange
                }),
                promptSchema: React.createElement(_editor.PromptEditor, {
                  format: "plain",
                  value: value,
                  onChange: handleTextChange
                }),
                parsed: React.createElement(_editor.PromptEditor, {
                  format: "plain",
                  value: prompt.parsed,
                  onChange: () => {}
                }),
                interactions: React.createElement(_promptInteractions.PromptInteractions, {
                  prompt: prompt
                }),
                literalsUsed: React.createElement(_promptLiteralsUsed.PromptLiteralsUsed, {
                  prompt: prompt
                })
              }
            })), React.createElement(_footer.ModalPanelFooter, null));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/modal/panel-header
      ******************************************/

      ims.set('./views/modal/panel-header', {
        hash: 2404479782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalPanelHeader = ModalPanelHeader;
          var React = require("react");
          var _tabLink = require("../components/tab-link");
          var _icons = require("pragmate-ui/icons");
          var _provider = require("./provider");
          function ModalPanelHeader({
            tabActive,
            onTabClick,
            prompt,
            executed
          }) {
            const {
              values
            } = (0, _provider.usePromptModal)();
            return React.createElement("header", {
              className: "panel-header"
            }, React.createElement("h6", {
              className: "p0 m0"
            }, prompt.name), React.createElement("div", null, React.createElement(_tabLink.TabLink, {
              action: "value",
              active: tabActive,
              onClick: onTabClick
            }, "Template"), React.createElement(_tabLink.TabLink, {
              action: "expanded",
              active: tabActive,
              onClick: onTabClick
            }, "Expanded"), React.createElement(_tabLink.TabLink, {
              action: "parsed",
              active: tabActive,
              onClick: onTabClick
            }, "Parsed"), values.format === 'json_schema' ? React.createElement(_tabLink.TabLink, {
              action: "promptSchema",
              active: tabActive,
              onClick: onTabClick
            }, "Schema") : null, executed ? React.createElement(React.Fragment, null, React.createElement(_tabLink.TabLink, {
              action: "interactions",
              active: tabActive,
              onClick: onTabClick
            }, "Interactions"), React.createElement(_tabLink.TabLink, {
              action: "literalsUsed",
              active: tabActive,
              onClick: onTabClick
            }, "Literals Used")) : null), executed ? React.createElement("div", null, React.createElement(_icons.IconButton, {
              icon: "play",
              variant: "primary",
              className: "circle"
            })) : null);
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/modal/prompt-interactions
      *************************************************/

      ims.set('./views/modal/prompt-interactions', {
        hash: 2716311468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptInteractions = PromptInteractions;
          var React = require("react");
          function PromptInteractions({
            prompt
          }) {
            if (!prompt.interactions || prompt.interactions.length === 0) {
              return React.createElement("div", null, "No interactions found.");
            }
            return React.createElement("div", null, React.createElement("h4", null, "Interactions"), React.createElement("ul", null, prompt.interactions.map((interaction, idx) => React.createElement("li", {
              key: idx
            }, JSON.stringify(interaction)))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/modal/prompt-literals-used
      **************************************************/

      ims.set('./views/modal/prompt-literals-used', {
        hash: 3317643645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiteralsUsed = PromptLiteralsUsed;
          var React = require("react");
          function PromptLiteralsUsed({
            prompt
          }) {
            const literals = prompt.literals?.keys || [];
            if (literals.length === 0) {
              return React.createElement("div", null, "No literals used.");
            }
            return React.createElement("div", null, React.createElement("h4", null, "Literals Used"), React.createElement("ul", null, literals.map(literal => React.createElement("li", {
              key: literal
            }, literal))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/modal/provider
      **************************************/

      ims.set('./views/modal/provider', {
        hash: 256392376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.usePromptModal = exports.PromptModalContext = void 0;
          var React = require("react");
          const PromptModalContext = exports.PromptModalContext = React.createContext({});
          const usePromptModal = () => React.useContext(PromptModalContext);
          exports.usePromptModal = usePromptModal;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/progress/history-item
      *********************************************/

      ims.set('./views/progress/history-item', {
        hash: 1384122093,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptHistoryItem = PromptHistoryItem;
          var _dayjs = require("dayjs");
          var React = require("react");
          var _promptResult = require("../components/prompt-result");
          function PromptHistoryItem({
            item,
            idx
          }) {
            const [content, setContent] = React.useState(item.output);
            const onChangeTab = event => {
              setContent(item[event.currentTarget.dataset.id]);
            };
            return React.createElement("div", {
              key: item.timestamp || idx,
              className: "prompt-history-entry"
            }, React.createElement("div", {
              className: "prompt-history-entry-header flex-container"
            }, React.createElement("span", null, (0, _dayjs.default)(item.timestamp).format('YYYY-MM-DD HH:mm:ss')), React.createElement("div", null, React.createElement("button", {
              "data-id": "output",
              onClick: onChangeTab
            }, "Details"), React.createElement("button", {
              "data-id": "specs",
              onClick: onChangeTab
            }, "Specs"))), React.createElement("div", {
              className: "prompt-history-entry-output",
              "data-id": "specs"
            }, React.createElement(_promptResult.PromptResult, {
              prompt: item,
              value: content
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/progress/history
      ****************************************/

      ims.set('./views/progress/history', {
        hash: 507699366,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptHistory = void 0;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _historyItem = require("./history-item");
          const PromptHistory = ({
            prompt
          }) => {
            if (!prompt.history || prompt.history.size === 0) {
              return React.createElement("span", null, "There is not executed history");
            }
            return React.createElement("div", {
              className: "prompt-history"
            }, React.createElement(_list.List, {
              as: "div",
              className: "prompt-history-list",
              items: Array.from(prompt.history.values()),
              control: _historyItem.PromptHistoryItem
            }));
          };
          exports.PromptHistory = PromptHistory;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/progress/index
      **************************************/

      ims.set('./views/progress/index', {
        hash: 1012524047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressPanel = ProgressPanel;
          var _collapsible = require("pragmate-ui/collapsible");
          var React = require("react");
          var _context = require("../../context");
          var _item = require("./item");
          /*bundle*/
          function ProgressPanel() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetchingAction, setFetchingAction] = React.useState(null);
            const onChange = event => store.model.chat[event.currentTarget.name] = event.currentTarget.value;
            return React.createElement("div", {
              className: "progress-container"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", null, "Progress")), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("ul", null, React.createElement(_item.ProgressItem, {
              item: store.model.prompts.map.get('summary')
            }), React.createElement(_item.ProgressItem, {
              item: store.model.prompts.map.get('ipe')
            })))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/progress/item
      *************************************/

      ims.set('./views/progress/item', {
        hash: 1540713359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressItem = void 0;
          var _hooks = require("@aimpact/platform/shared/hooks");
          var _clsx = require("clsx");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../context");
          var _history = require("./history");
          var _historyItem = require("./history-item");
          const ProgressItem = ({
            item
          }) => {
            const {
              store
            } = (0, _context.useModuleContext)();
            const {
              name,
              value,
              id
            } = item;
            const [view, setView] = React.useState('result');
            (0, _hooks.useStore)(store.model, ['fetching.changed']);
            const prompt = item;
            let promptResult = store.model.globalLiterals.map.get(id);
            if (promptResult && typeof promptResult.value !== 'string') {
              promptResult = JSON.stringify(promptResult.value);
            }
            const changeTab = () => setView(view === 'result' ? 'history' : 'result');
            const title = view === 'result' ? id : `${id} History`;
            const action = view === 'result' ? 'History' : 'Current';
            return React.createElement("div", {
              className: (0, _clsx.default)('custom-prompt-container', {
                'is-fetching': store.model.fetching
              })
            }, React.createElement("header", {
              className: "prompt-header"
            }, React.createElement("h5", null, title), React.createElement("div", {
              className: "prompt-actions"
            }, React.createElement("div", null, React.createElement(_components.Button, {
              bordered: true,
              variant: "primary",
              onClick: changeTab
            }, action)))), view === 'result' ? React.createElement("div", {
              className: "prompt-value"
            }, prompt.result ? React.createElement(_historyItem.PromptHistoryItem, {
              item: prompt.history.get(1),
              idx: 0
            }) : React.createElement("span", null, "This value is not set")) : React.createElement(_history.PromptHistory, {
              prompt: prompt
            }));
          };
          exports.ProgressItem = ProgressItem;
        }
      });

      /********************************
      INTERNAL MODULE: ./views/settings
      ********************************/

      ims.set('./views/settings', {
        hash: 1492827494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SettingsView = SettingsView;
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../context");
          var _tabLink = require("./components/tab-link");
          var _importLibrary = require("./settings/import-library");
          var _modelSelect = require("./settings/model-select");
          var _dependencies = require("./dependencies");
          var _global = require("./literals/global");
          var _progress = require("./progress");
          var _prompts = require("./settings/panels/prompts");
          var _reserved = require("./literals/reserved");
          /*bundle*/
          function SettingsView() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const modelOptions = [...store.model.models.map(model => ({
              value: model,
              label: model
            })), {
              value: 'mediawiki',
              label: 'MediaWiki'
            }];
            const [activeTab, setActiveTab] = React.useState('prompts');
            const handleTabClick = event => {
              const action = event.currentTarget.dataset.action;
              if (action) {
                setActiveTab(action);
              }
            };
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: "settings-panel"
            }, React.createElement("div", {
              className: "model-container"
            }, React.createElement("div", {
              className: "model-select-container"
            }, React.createElement(_modelSelect.ModelSelect, {
              options: modelOptions,
              onChange: value => store.model.model = value
            })), React.createElement(_importLibrary.ImportLibrary, null)), React.createElement("header", {
              className: "panel-header"
            }, React.createElement("div", {
              className: "main-tabs-container tabs-container"
            }, React.createElement(_tabLink.TabLink, {
              action: "prompts",
              active: activeTab,
              onClick: handleTabClick
            }, "Prompts"), React.createElement(_tabLink.TabLink, {
              action: "dependencies",
              active: activeTab,
              onClick: handleTabClick
            }, "Dependencies"), React.createElement(_tabLink.TabLink, {
              action: "global-literals",
              active: activeTab,
              onClick: handleTabClick
            }, "Global Literals"), React.createElement(_tabLink.TabLink, {
              action: "progress",
              active: activeTab,
              onClick: handleTabClick
            }, "Progress"), React.createElement(_tabLink.TabLink, {
              action: "reserved",
              active: activeTab,
              onClick: handleTabClick
            }, "Reserved"))), React.createElement("div", {
              className: "section-container"
            }, React.createElement(_components.ConditionalContainer, {
              condition: activeTab,
              options: {
                'global-literals': React.createElement(_global.GlobalLiterals, null),
                dependencies: React.createElement(_dependencies.Dependencies, null),
                progress: React.createElement(_progress.ProgressPanel, null),
                prompts: React.createElement(_prompts.Prompts, null),
                reserved: React.createElement(_reserved.ReservedPanel, null)
              }
            }))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/settings/import-library
      ***********************************************/

      ims.set('./views/settings/import-library', {
        hash: 774990161,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImportLibrary = ImportLibrary;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          var _list = require("pragmate-ui/list");
          var _clsx = require("clsx");
          var _ui = require("@aimpact/platform/components/ui");
          /*bundle*/
          function ImportLibrary() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [open, setOpen] = React.useState(false);
            const toggleModal = () => setOpen(!open);
            const [selectedLanguage, setSelectedLanguage] = React.useState('');
            const [selected, setSelected] = React.useState();
            const [processing, setProcessing] = React.useState(false);
            const onChange = event => {
              setSelectedLanguage(event.target.value);
            };
            const onImport = async () => {
              setProcessing(true);
              await store.importActivity(selectedLanguage, selected);
              setProcessing(false);
              setOpen(false);
            };
            const onSelect = event => setSelected(event.currentTarget.dataset.id);
            const Item = ({
              item
            }) => {
              return React.createElement("div", {
                className: (0, _clsx.clsx)('modal-card-item', {
                  'selected': selected === item.id
                }),
                "data-id": item.id,
                onClick: onSelect
              }, React.createElement("h6", null, item.name));
            };
            const disabled = {
              disabled: !selectedLanguage || !selected || processing
            };
            return React.createElement(React.Fragment, null, React.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, "Import"), open && React.createElement(_modal.Modal, {
              className: (0, _clsx.clsx)('modal-activities'),
              show: true,
              onClose: toggleModal
            }, React.createElement("header", {
              className: "modal-header"
            }, React.createElement("h4", null, "Import Activity Agent")), React.createElement("select", {
              id: "language-select",
              value: selectedLanguage,
              onChange: onChange
            }, React.createElement("option", {
              value: ""
            }, "Select Language"), React.createElement("option", {
              value: "es"
            }, "Espa\u00F1ol"), React.createElement("option", {
              value: "en"
            }, "English"), React.createElement("option", {
              value: "de"
            }, "German")), React.createElement(_list.List, {
              as: "div",
              className: "activity-list",
              items: store.activities,
              control: Item
            }), React.createElement("footer", null, React.createElement(_components.Button, {
              ...disabled,
              variant: "primary",
              onClick: onImport
            }, "Import")), React.createElement(_ui.ProcessContainer, {
              fetching: processing
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/settings/model-select
      *********************************************/

      ims.set('./views/settings/model-select', {
        hash: 779440866,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModelSelect = ModelSelect;
          var React = require("react");
          var Select = require("@radix-ui/react-select");
          var _reactIcons = require("@radix-ui/react-icons");
          // components/model-select/model-select.tsx

          function ModelSelect({
            options,
            onChange
          }) {
            const [value, setValue] = React.useState(options[0]?.value ?? '');
            const [open, setOpen] = React.useState(false);
            const containerRef = React.useRef(null);
            const hiddenAncestor = React.useRef(null);
            const firstItemRef = React.useRef(null);
            /** quita o repone aria-hidden en el ancestro justo al abrir/cerrar */
            const toggleAriaHidden = shouldHide => {
              if (!containerRef.current) return;
              const el = hiddenAncestor.current ?? containerRef.current.closest('[aria-hidden="true"]');
              if (!el) return;
              if (shouldHide) el.setAttribute('aria-hidden', 'true');else el.removeAttribute('aria-hidden');
              hiddenAncestor.current = el;
            };
            /** Radix ➜ estado abierto/cerrado */
            const handleOpenChange = isOpen => {
              setOpen(isOpen);
              toggleAriaHidden(!isOpen); // quita al abrir, repone al cerrar
              if (isOpen) {
                // enfocamos el primer ítem cuando el menú ya está en el DOM
                requestAnimationFrame(() => firstItemRef.current?.focus());
              }
            };
            const onChangeListener = value => {
              onChange?.(value);
              setValue(value);
            };
            return React.createElement("div", {
              ref: containerRef
            }, React.createElement(Select.Root, {
              value: value,
              onValueChange: onChangeListener,
              open: open,
              onOpenChange: handleOpenChange
            }, React.createElement(Select.Trigger, {
              className: "model-select__trigger",
              "aria-label": "Select a model"
            }, React.createElement(Select.Value, null), React.createElement(Select.Icon, {
              className: "model-select__icon"
            }, React.createElement(_reactIcons.ChevronDownIcon, null))), React.createElement(Select.Portal, {
              container: containerRef.current ?? undefined
            }, React.createElement(Select.Content, {
              className: "model-select__content",
              position: "popper"
            }, React.createElement(Select.Viewport, {
              className: "model-select__viewport"
            }, options.map((opt, idx) => React.createElement(Select.Item, {
              key: opt.value,
              value: opt.value,
              className: "model-select__item",
              ref: idx === 0 ? firstItemRef : undefined,
              tabIndex: -1
            }, React.createElement(Select.ItemText, null, React.createElement("div", {
              className: "model-select__item-content"
            }, React.createElement("span", {
              className: "model-select__item-label"
            }, opt.label), opt.description && React.createElement("span", {
              className: "model-select__item-description"
            }, opt.description))), React.createElement(Select.ItemIndicator, {
              className: "model-select__item-indicator"
            }, React.createElement(_reactIcons.CheckIcon, null)))))))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/settings/objectives
      *******************************************/

      ims.set('./views/settings/objectives', {
        hash: 3952409908,
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
              name: '',
              description: ''
            });
            const isFormValid = newObjective.name.trim() !== '' && newObjective.description.trim() !== '';
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
                  name: '',
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
              value: newObjective.name,
              onChange: e => setNewObjective({
                ...newObjective,
                name: e.target.value
              }),
              onKeyPress: handleKeyPress,
              placeholder: "Enter objective name"
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
            }, _react.default.createElement("h6", null, objective.name), _react.default.createElement("p", null, objective.description), _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "trash",
              onClick: () => handleRemoveObjective(index)
            }, "Remove")))));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/settings/panels/ai-settings
      ***************************************************/

      ims.set('./views/settings/panels/ai-settings', {
        hash: 1300192331,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AiSettings = void 0;
          var _react = require("react");
          var _reactIcons = require("@radix-ui/react-icons");
          var _toggleContainer = require("../toggle-container");
          const AiSettings = () => _react.default.createElement(_toggleContainer.ToggleContainer, {
            trigger: _react.default.createElement(_reactIcons.GearIcon, null)
          }, _react.default.createElement("h3", null, "Settings"));
          exports.AiSettings = AiSettings;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/settings/panels/prompts
      ***********************************************/

      ims.set('./views/settings/panels/prompts', {
        hash: 1805448974,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompts = Prompts;
          var React = require("react");
          var _context = require("../../../context");
          var _list = require("pragmate-ui/list");
          var _customPrompt = require("../../components/custom-prompt");
          var _collapsible = require("pragmate-ui/collapsible");
          var _hooks = require("@aimpact/platform/shared/hooks");
          /*bundle*/
          function Prompts() {
            const {
              store
            } = (0, _context.useModuleContext)();
            (0, _hooks.useStore)(store.model.prompts);
            return React.createElement("div", {
              className: "dependencies-container"
            }, React.createElement(_collapsible.CollapsibleContainer, {
              open: true
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("h3", null, "Prompt Templates")), React.createElement(_collapsible.CollapsibleContent, null, React.createElement(_list.List, {
              items: store.model.prompts.prompts,
              control: _customPrompt.CustomPrompt
            }))));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/settings/toggle-container
      *************************************************/

      ims.set('./views/settings/toggle-container', {
        hash: 451275438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ToggleContainer = void 0;
          var _react = require("react");
          var Popover = require("@radix-ui/react-popover");
          // components/toggle-container/toggle-container.tsx

          const ToggleContainer = ({
            trigger,
            children,
            triggerClassName,
            panelClassName,
            sideOffset = 8
          }) => _react.default.createElement(Popover.Root, null, _react.default.createElement(Popover.Trigger, {
            asChild: true
          }, _react.default.createElement("button", {
            type: "button",
            "aria-label": "Toggle panel",
            className: `toggle-container__trigger ${triggerClassName ?? ''}`
          }, trigger)), _react.default.createElement(Popover.Content, {
            className: `toggle-container__panel ${panelClassName ?? ''}`,
            sideOffset: sideOffset
          }, children, _react.default.createElement(Popover.Arrow, {
            className: "toggle-container__arrow"
          })));
          exports.ToggleContainer = ToggleContainer;
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
        "im": "./views/chat/index",
        "from": "ChatContainer",
        "name": "ChatContainer"
      }, {
        "im": "./views/chat/panel/index",
        "from": "ChatPanel",
        "name": "ChatPanel"
      }, {
        "im": "./views/components/tab-link",
        "from": "TabLink",
        "name": "TabLink"
      }, {
        "im": "./views/dependencies/index",
        "from": "Dependencies",
        "name": "Dependencies"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/literals/reserved",
        "from": "ReservedPanel",
        "name": "ReservedPanel"
      }, {
        "im": "./views/progress/index",
        "from": "ProgressPanel",
        "name": "ProgressPanel"
      }, {
        "im": "./views/settings",
        "from": "SettingsView",
        "name": "SettingsView"
      }, {
        "im": "./views/settings/import-library",
        "from": "ImportLibrary",
        "name": "ImportLibrary"
      }, {
        "im": "./views/settings/panels/prompts",
        "from": "Prompts",
        "name": "Prompts"
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
        (require || prop === 'ChatContainer') && _export("ChatContainer", ChatContainer = require ? require('./views/chat/index').ChatContainer : value);
        (require || prop === 'ChatPanel') && _export("ChatPanel", ChatPanel = require ? require('./views/chat/panel/index').ChatPanel : value);
        (require || prop === 'TabLink') && _export("TabLink", TabLink = require ? require('./views/components/tab-link').TabLink : value);
        (require || prop === 'Dependencies') && _export("Dependencies", Dependencies = require ? require('./views/dependencies/index').Dependencies : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ReservedPanel') && _export("ReservedPanel", ReservedPanel = require ? require('./views/literals/reserved').ReservedPanel : value);
        (require || prop === 'ProgressPanel') && _export("ProgressPanel", ProgressPanel = require ? require('./views/progress/index').ProgressPanel : value);
        (require || prop === 'SettingsView') && _export("SettingsView", SettingsView = require ? require('./views/settings').SettingsView : value);
        (require || prop === 'ImportLibrary') && _export("ImportLibrary", ImportLibrary = require ? require('./views/settings/import-library').ImportLibrary : value);
        (require || prop === 'Prompts') && _export("Prompts", Prompts = require ? require('./views/settings/panels/prompts').Prompts : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiU2V0dGluZ3NDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VTZXR0aW5nc0NvbnRleHQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsIl9wbGF5Z3JvdW5kIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwibW9kZWwiLCJpbXBvcnRlZCIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImVycm9ycyIsInN5c3RlbSIsInByb21wdHMiLCJtYXAiLCJnZXQiLCJzdW1tYXJ5IiwiaXBlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5Z3JvdW5kIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsImdldFZhbHVlIiwicHJvcGVydHkiLCJleGVjdXRlIiwiYWN0aW9uIiwiY2hlY2tQcm9tcHQiLCJwcm9tcHQiLCJwYXJzZSIsImRlbGV0ZU1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiZGVsZXRlIiwiaW1wb3J0QWN0aXZpdHkiLCJsYW5ndWFnZSIsImFjdGl2aXR5SWQiLCJpbXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIlJlYWN0IiwiX3BhbmVsIiwiQ2hhdENvbnRhaW5lciIsIkVtcHR5Q2hhdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eSIsInRleHQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImVtcHR5IiwiQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX21lc3NhZ2UiLCJfaG9va3MiLCJjaGF0U3RvcmUiLCJ1c2VDaGF0Q29udGV4dCIsInVzZVN0b3JlIiwibm90Rm91bmQiLCJsZW5ndGgiLCJtZXNzYWdlIiwiaW5kZXgiLCJNZXNzYWdlIiwia2V5IiwiX2VkaXRvcmpzIiwiZWRpdG9ySW5zdGFuY2UiLCJCbG9ja0VkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzYXZlZERhdGEiLCJkZWZhdWx0IiwiaG9sZGVyIiwicGxhY2Vob2xkZXIiLCJpbmxpbmVUb29sYmFyIiwiZGF0YSIsInBhcnNlVG9FZGl0b3JEYXRhIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJzYXZlIiwiY29udGVudCIsInBhcnNlRnJvbUVkaXRvckRhdGEiLCJkZXN0cm95IiwicmVmIiwicmF3IiwidGltZSIsIkRhdGUiLCJub3ciLCJibG9ja3MiLCJ0eXBlIiwidmVyc2lvbiIsImJsb2NrIiwiam9pbiIsIl9pY29ucyIsIl9jbHN4IiwiX2NvbnRleHQiLCJfYWN0aW9uIiwiQ3VzdG9tUHJvbXB0IiwiaXRlbSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1hdCIsInByb21wdFJlc3VsdCIsImdsb2JhbExpdGVyYWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImV4ZWN1dGlvbkl0ZW0iLCJmZXRjaGluZyIsIkFwcEljb25CdXR0b24iLCJkaXNhYmxlZCIsInByb21wdFNjaGVtYSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiTW9kYWxBY3Rpb24iLCJfZm9ybSIsIl9vYmplY3RpdmVzIiwiUHJvbXB0TGl0ZXJhbCIsImhhbmRsZUNoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJzZXQiLCJlIiwiZXJyb3IiLCJPYmplY3RpdmVzRmllbGQiLCJJbnB1dCIsImxhYmVsIiwiX3JlYWN0SWNvbnMiLCJfZnJhbWVyTW90aW9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsImVkaXRpbmciLCJzZXRFZGl0aW5nIiwiaW5wdXRSZWYiLCJoYW5kbGVFZGl0VG9nZ2xlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0IiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiZGl2Iiwicm9sZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiZXhpdCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25LZXlEb3duIiwiUGVuY2lsMUljb24iLCJUcmFzaEljb24iLCJjaGlsZHJlbiIsInNwZWNzIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ0b2dnbGUiLCJwcmV2IiwiaGFuZGxlQ2xvc2UiLCJGcmFnbWVudCIsInN0eWxlIiwiY3Vyc29yIiwib25DbG9zZSIsIl9yZWFjdEpzb25WaWV3TGl0ZSIsIl9tYXJrZG93biIsIlByb21wdFJlc3VsdCIsInJlc3VsdCIsIkpzb25WaWV3IiwiZGVmYXVsdFN0eWxlcyIsIk1hcmtkb3duIiwiVGFiTGluayIsImFjdGl2ZSIsImlzQWN0aXZlIiwiQ3VzdG9tVGV4dGFyZWEiLCJlcnJvck1lc3NhZ2UiLCJyb3dzIiwiZmV0Y2hpbmdBY3Rpb24iLCJyZXN0IiwiaW50ZXJuYWxJZCIsInVzZUlkIiwiZWZmZWN0aXZlSWQiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJoYW5kbGVGb2N1cyIsIm9uRm9jdXMiLCJoYW5kbGVCbHVyIiwib25CbHVyIiwid3JhcHBlckNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiYWN0dWFsUGxhY2Vob2xkZXIiLCJodG1sRm9yIiwiRGVwZW5kZW5jeSIsInNldEZldGNoaW5nIiwid2FybiIsIl9saXN0IiwiX2RlcGVuZGVuY3kiLCJfY29sbGFwc2libGUiLCJEZXBlbmRlbmNpZXMiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkxpc3QiLCJpdGVtcyIsImRlcGVuZGVuY2llcyIsImNvbnRyb2wiLCJfY29tcG9uZW50cyIsIl9jaGF0IiwiX3NldHRpbmdzIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiU2V0dGluZ3NWaWV3IiwiX2xpdGVyYWwiLCJHbG9iYWxMaXRlcmFscyIsIlJlc2VydmVkUGFuZWwiLCJyZXNlcnZlZCIsInJlc2VydmVkTGl0ZXJhbHMiLCJuYW1lcyIsIkl0ZW0iLCJfIiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwicHJldlNob3ciLCJQcm9tcHRNb2RhbCIsIl9yZWFjdFNlbGVjdCIsIl9wcm92aWRlciIsIk1vZGFsUGFuZWxGb290ZXIiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJzZXRWYWx1ZXMiLCJ1c2VQcm9tcHRNb2RhbCIsIm9uU2F2ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2V0VGltZW91dCIsImdldFByb3BlcnRpZXMiLCJjaGFuZ2VkIiwib25Gb3JtYXRDaGFuZ2UiLCJwcm9jZXNzaW5nIiwiUmVhY3RTZWxlY3QiLCJvcHRpb25zIiwiQnV0dG9uIiwiX21vZGFsIiwiX2xpdGVyYWxzIiwiX21haW4iLCJfcGFuZWxIZWFkZXIiLCJfYWxlcnQiLCJleGVjdXRlZCIsInNldFJlYWR5IiwidGFiQWN0aXZlIiwic2V0VGFiQWN0aXZlIiwiaGFuZGxlVGFiQ2xpY2siLCJkYXRhc2V0IiwibGl0ZXJhbHMiLCJjbG9zZUJhY2tkcm9wIiwiUHJvbXB0TW9kYWxDb250ZXh0IiwiUHJvbXB0TGl0ZXJhbHMiLCJNb2RhbFBhbmVsSGVhZGVyIiwib25UYWJDbGljayIsIkFsZXJ0IiwiTWFpbk1vZGFsUGFuZWwiLCJfdGV4dGFyZWEiLCJsaXRlcmFsSW5wdXRzIiwic2V0TGl0ZXJhbCIsImxpdGVyYWwiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJwdXNoIiwiX2VkaXRvciIsIl9mb290ZXIiLCJfcHJvbXB0SW50ZXJhY3Rpb25zIiwiX3Byb21wdExpdGVyYWxzVXNlZCIsIm9yaWdpbmFsVmFsdWUiLCJobXIiLCJzZXRWYWx1ZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJ2IiwicGFyc2VkIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJQcm9tcHRFZGl0b3IiLCJleHBhbmRlZCIsImludGVyYWN0aW9ucyIsIlByb21wdEludGVyYWN0aW9ucyIsImxpdGVyYWxzVXNlZCIsIlByb21wdExpdGVyYWxzVXNlZCIsIl90YWJMaW5rIiwiSWNvbkJ1dHRvbiIsImludGVyYWN0aW9uIiwiaWR4IiwiX2RheWpzIiwiX3Byb21wdFJlc3VsdCIsIlByb21wdEhpc3RvcnlJdGVtIiwic2V0Q29udGVudCIsIm9uQ2hhbmdlVGFiIiwidGltZXN0YW1wIiwiX2hpc3RvcnlJdGVtIiwiUHJvbXB0SGlzdG9yeSIsImhpc3RvcnkiLCJzaXplIiwiYXMiLCJBcnJheSIsImZyb20iLCJfaXRlbSIsIlByb2dyZXNzUGFuZWwiLCJzZXRGZXRjaGluZ0FjdGlvbiIsIlByb2dyZXNzSXRlbSIsIl9oaXN0b3J5IiwidmlldyIsInNldFZpZXciLCJjaGFuZ2VUYWIiLCJ0aXRsZSIsImJvcmRlcmVkIiwiX2ltcG9ydExpYnJhcnkiLCJfbW9kZWxTZWxlY3QiLCJfZGVwZW5kZW5jaWVzIiwiX2dsb2JhbCIsIl9wcm9ncmVzcyIsIl9wcm9tcHRzIiwiX3Jlc2VydmVkIiwibW9kZWxPcHRpb25zIiwibW9kZWxzIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiTW9kZWxTZWxlY3QiLCJJbXBvcnRMaWJyYXJ5IiwicHJvZ3Jlc3MiLCJQcm9tcHRzIiwiX3VpIiwic2V0T3BlbiIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldFByb2Nlc3NpbmciLCJvbkltcG9ydCIsIm9uU2VsZWN0IiwiY2xzeCIsIlByb2Nlc3NDb250YWluZXIiLCJTZWxlY3QiLCJjb250YWluZXJSZWYiLCJoaWRkZW5BbmNlc3RvciIsImZpcnN0SXRlbVJlZiIsInRvZ2dsZUFyaWFIaWRkZW4iLCJzaG91bGRIaWRlIiwiZWwiLCJjbG9zZXN0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlT3BlbkNoYW5nZSIsImlzT3BlbiIsIm9uQ2hhbmdlTGlzdGVuZXIiLCJSb290Iiwib25WYWx1ZUNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIlRyaWdnZXIiLCJWYWx1ZSIsIkljb24iLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJjb250YWluZXIiLCJDb250ZW50IiwicG9zaXRpb24iLCJWaWV3cG9ydCIsIm9wdCIsInRhYkluZGV4IiwiSXRlbVRleHQiLCJkZXNjcmlwdGlvbiIsIkl0ZW1JbmRpY2F0b3IiLCJDaGVja0ljb24iLCJvYmplY3RpdmVzIiwic2V0T2JqZWN0aXZlcyIsImlzRm9ybVZpc2libGUiLCJzZXRJc0Zvcm1WaXNpYmxlIiwibmV3T2JqZWN0aXZlIiwic2V0TmV3T2JqZWN0aXZlIiwiaXNGb3JtVmFsaWQiLCJ0cmltIiwiaGFuZGxlQWRkT2JqZWN0aXZlIiwidXBkYXRlZE9iamVjdGl2ZXMiLCJoYW5kbGVLZXlQcmVzcyIsImhhbmRsZVJlbW92ZU9iamVjdGl2ZSIsImkiLCJvbktleVByZXNzIiwib2JqZWN0aXZlIiwiX3RvZ2dsZUNvbnRhaW5lciIsIkFpU2V0dGluZ3MiLCJUb2dnbGVDb250YWluZXIiLCJHZWFySWNvbiIsIl9jdXN0b21Qcm9tcHQiLCJQb3BvdmVyIiwidHJpZ2dlckNsYXNzTmFtZSIsInBhbmVsQ2xhc3NOYW1lIiwic2lkZU9mZnNldCIsImFzQ2hpbGQiLCJBcnJvdyJdLCJzb3VyY2VzIjpbIi8vdHMvY29udGV4dC50c3giLCIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy92aWV3cy9jaGF0L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvY2hhdC9wYW5lbC9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvYmxvY2stZWRpdG9yLnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9jdXN0b20tcHJvbXB0LnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9saXRlcmFsLnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9tZXNzYWdlLnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9tb2RhbC1hY3Rpb24udHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL3Byb21wdC1yZXN1bHQudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL3RhYi1saW5rLnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy90ZXh0YXJlYS50c3giLCIvL3RzL3ZpZXdzL2RlcGVuZGVuY2llcy9kZXBlbmRlbmN5LnRzeCIsIi8vdHMvdmlld3MvZGVwZW5kZW5jaWVzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9saXRlcmFscy9nbG9iYWwudHN4IiwiLy90cy92aWV3cy9saXRlcmFscy9yZXNlcnZlZC50c3giLCIvL3RzL3ZpZXdzL21vZGFsL2FjdGlvbi50c3giLCIvL3RzL3ZpZXdzL21vZGFsL2Zvb3Rlci50c3giLCIvL3RzL3ZpZXdzL21vZGFsL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvbGl0ZXJhbHMudHN4IiwiLy90cy92aWV3cy9tb2RhbC9tYWluLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvcGFuZWwtaGVhZGVyLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvcHJvbXB0LWludGVyYWN0aW9ucy50c3giLCIvL3RzL3ZpZXdzL21vZGFsL3Byb21wdC1saXRlcmFscy11c2VkLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvcHJvdmlkZXIudHN4IiwiLy90cy92aWV3cy9wcm9ncmVzcy9oaXN0b3J5LWl0ZW0udHN4IiwiLy90cy92aWV3cy9wcm9ncmVzcy9oaXN0b3J5LnRzeCIsIi8vdHMvdmlld3MvcHJvZ3Jlc3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy9wcm9ncmVzcy9pdGVtLnRzeCIsIi8vdHMvdmlld3Mvc2V0dGluZ3MudHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9pbXBvcnQtbGlicmFyeS50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL21vZGVsLXNlbGVjdC50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL29iamVjdGl2ZXMudHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9wYW5lbHMvYWktc2V0dGluZ3MudHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9wYW5lbHMvcHJvbXB0cy50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL3RvZ2dsZS1jb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBY08sTUFBTUMsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUEsR0FBRyxJQUFBRixNQUFBLENBQUFJLGFBQWEsRUFBc0NDLFNBQVMsQ0FBQztVQUNuRixNQUFNQyxlQUFlLEdBQUFILE9BQUEsQ0FBQUcsZUFBQSxHQUFHLElBQUFOLE1BQUEsQ0FBQUksYUFBYSxFQUF3Q0MsU0FBUyxDQUFDO1VBRXZGO1VBQVcsTUFBTUUsZ0JBQWdCLEdBQUdBLENBQUEsS0FBSztZQUMvQyxNQUFNQyxPQUFPLEdBQUcsSUFB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