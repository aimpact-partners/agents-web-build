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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiU2V0dGluZ3NDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VTZXR0aW5nc0NvbnRleHQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsIl9wbGF5Z3JvdW5kIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwibW9kZWwiLCJpbXBvcnRlZCIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImVycm9ycyIsInN5c3RlbSIsInByb21wdHMiLCJtYXAiLCJnZXQiLCJzdW1tYXJ5IiwiaXBlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJQbGF5Z3JvdW5kIiwib24iLCJ0cmlnZ2VyIiwiY2hhdCIsImdldFZhbHVlIiwicHJvcGVydHkiLCJleGVjdXRlIiwiYWN0aW9uIiwiY2hlY2tQcm9tcHQiLCJwcm9tcHQiLCJwYXJzZSIsImRlbGV0ZU1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiZGVsZXRlIiwiaW1wb3J0QWN0aXZpdHkiLCJsYW5ndWFnZSIsImFjdGl2aXR5SWQiLCJpbXBvcnQiLCJfY2hhdENvbXBvbmVudCIsIl9lbXB0eSIsIlJlYWN0IiwiX3BhbmVsIiwiQ2hhdENvbnRhaW5lciIsIkVtcHR5Q2hhdCIsImNyZWF0ZUVsZW1lbnQiLCJFbXB0eSIsInRleHQiLCJpY29uIiwiY2xhc3NOYW1lIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsImVtcHR5IiwiQ2hhdFBhbmVsIiwiQWdlbnRzQ2hhdElucHV0IiwiX21lc3NhZ2UiLCJfaG9va3MiLCJjaGF0U3RvcmUiLCJ1c2VDaGF0Q29udGV4dCIsInVzZVN0b3JlIiwibm90Rm91bmQiLCJsZW5ndGgiLCJtZXNzYWdlIiwiaW5kZXgiLCJNZXNzYWdlIiwia2V5IiwiX2VkaXRvcmpzIiwiZWRpdG9ySW5zdGFuY2UiLCJCbG9ja0VkaXRvciIsImVkaXRvclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzYXZlZERhdGEiLCJkZWZhdWx0IiwiaG9sZGVyIiwicGxhY2Vob2xkZXIiLCJpbmxpbmVUb29sYmFyIiwiZGF0YSIsInBhcnNlVG9FZGl0b3JEYXRhIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJzYXZlIiwiY29udGVudCIsInBhcnNlRnJvbUVkaXRvckRhdGEiLCJkZXN0cm95IiwicmVmIiwicmF3IiwidGltZSIsIkRhdGUiLCJub3ciLCJibG9ja3MiLCJ0eXBlIiwidmVyc2lvbiIsImJsb2NrIiwiam9pbiIsIl9pY29ucyIsIl9jbHN4IiwiX2NvbnRleHQiLCJfYWN0aW9uIiwiQ3VzdG9tUHJvbXB0IiwiaXRlbSIsIm5hbWUiLCJ2YWx1ZSIsImZvcm1hdCIsInByb21wdFJlc3VsdCIsImdsb2JhbExpdGVyYWxzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQWN0aW9uQ2xpY2siLCJldmVudCIsImV4ZWN1dGlvbkl0ZW0iLCJmZXRjaGluZyIsIkFwcEljb25CdXR0b24iLCJkaXNhYmxlZCIsInByb21wdFNjaGVtYSIsInZhcmlhbnQiLCJvbkNsaWNrIiwiTW9kYWxBY3Rpb24iLCJfZm9ybSIsIl9vYmplY3RpdmVzIiwiUHJvbXB0TGl0ZXJhbCIsImhhbmRsZUNoYW5nZSIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJzZXQiLCJlIiwiZXJyb3IiLCJPYmplY3RpdmVzRmllbGQiLCJJbnB1dCIsImxhYmVsIiwiX3JlYWN0SWNvbnMiLCJfZnJhbWVyTW90aW9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsImVkaXRpbmciLCJzZXRFZGl0aW5nIiwiaW5wdXRSZWYiLCJoYW5kbGVFZGl0VG9nZ2xlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0IiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiZGl2Iiwicm9sZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiZXhpdCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25LZXlEb3duIiwiUGVuY2lsMUljb24iLCJUcmFzaEljb24iLCJjaGlsZHJlbiIsInNwZWNzIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ0b2dnbGUiLCJwcmV2IiwiaGFuZGxlQ2xvc2UiLCJGcmFnbWVudCIsInN0eWxlIiwiY3Vyc29yIiwib25DbG9zZSIsIl9yZWFjdEpzb25WaWV3TGl0ZSIsIl9tYXJrZG93biIsIlByb21wdFJlc3VsdCIsInJlc3VsdCIsIkpzb25WaWV3IiwiZGVmYXVsdFN0eWxlcyIsIk1hcmtkb3duIiwiVGFiTGluayIsImFjdGl2ZSIsImlzQWN0aXZlIiwiQ3VzdG9tVGV4dGFyZWEiLCJlcnJvck1lc3NhZ2UiLCJyb3dzIiwiZmV0Y2hpbmdBY3Rpb24iLCJyZXN0IiwiaW50ZXJuYWxJZCIsInVzZUlkIiwiZWZmZWN0aXZlSWQiLCJpc0ZvY3VzZWQiLCJzZXRJc0ZvY3VzZWQiLCJoYW5kbGVGb2N1cyIsIm9uRm9jdXMiLCJoYW5kbGVCbHVyIiwib25CbHVyIiwid3JhcHBlckNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiYWN0dWFsUGxhY2Vob2xkZXIiLCJodG1sRm9yIiwiRGVwZW5kZW5jeSIsInNldEZldGNoaW5nIiwid2FybiIsIl9saXN0IiwiX2RlcGVuZGVuY3kiLCJfY29sbGFwc2libGUiLCJEZXBlbmRlbmNpZXMiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIkxpc3QiLCJpdGVtcyIsImRlcGVuZGVuY2llcyIsImNvbnRyb2wiLCJfY29tcG9uZW50cyIsIl9jaGF0IiwiX3NldHRpbmdzIiwiU3Bpbm5lciIsIlByb3ZpZGVyIiwiU2V0dGluZ3NWaWV3IiwiX2xpdGVyYWwiLCJHbG9iYWxMaXRlcmFscyIsIlJlc2VydmVkUGFuZWwiLCJyZXNlcnZlZCIsInJlc2VydmVkTGl0ZXJhbHMiLCJuYW1lcyIsIkl0ZW0iLCJfIiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwicHJldlNob3ciLCJQcm9tcHRNb2RhbCIsIl9yZWFjdFNlbGVjdCIsIl9wcm92aWRlciIsIk1vZGFsUGFuZWxGb290ZXIiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJzZXRWYWx1ZXMiLCJ1c2VQcm9tcHRNb2RhbCIsIm9uU2F2ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2V0VGltZW91dCIsImdldFByb3BlcnRpZXMiLCJjaGFuZ2VkIiwib25Gb3JtYXRDaGFuZ2UiLCJwcm9jZXNzaW5nIiwiUmVhY3RTZWxlY3QiLCJvcHRpb25zIiwiQnV0dG9uIiwiX21vZGFsIiwiX2xpdGVyYWxzIiwiX21haW4iLCJfcGFuZWxIZWFkZXIiLCJfYWxlcnQiLCJleGVjdXRlZCIsInNldFJlYWR5IiwidGFiQWN0aXZlIiwic2V0VGFiQWN0aXZlIiwiaGFuZGxlVGFiQ2xpY2siLCJkYXRhc2V0IiwibGl0ZXJhbHMiLCJjbG9zZUJhY2tkcm9wIiwiUHJvbXB0TW9kYWxDb250ZXh0IiwiUHJvbXB0TGl0ZXJhbHMiLCJNb2RhbFBhbmVsSGVhZGVyIiwib25UYWJDbGljayIsIkFsZXJ0IiwiTWFpbk1vZGFsUGFuZWwiLCJfdGV4dGFyZWEiLCJsaXRlcmFsSW5wdXRzIiwic2V0TGl0ZXJhbCIsImxpdGVyYWwiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJwdXNoIiwiX2VkaXRvciIsIl9mb290ZXIiLCJfcHJvbXB0SW50ZXJhY3Rpb25zIiwiX3Byb21wdExpdGVyYWxzVXNlZCIsIm9yaWdpbmFsVmFsdWUiLCJobXIiLCJzZXRWYWx1ZSIsImhhbmRsZVRleHRDaGFuZ2UiLCJ2IiwicGFyc2VkIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJQcm9tcHRFZGl0b3IiLCJleHBhbmRlZCIsImludGVyYWN0aW9ucyIsIlByb21wdEludGVyYWN0aW9ucyIsImxpdGVyYWxzVXNlZCIsIlByb21wdExpdGVyYWxzVXNlZCIsIl90YWJMaW5rIiwiSWNvbkJ1dHRvbiIsImludGVyYWN0aW9uIiwiaWR4IiwiX2RheWpzIiwiX3Byb21wdFJlc3VsdCIsIlByb21wdEhpc3RvcnlJdGVtIiwic2V0Q29udGVudCIsIm9uQ2hhbmdlVGFiIiwidGltZXN0YW1wIiwiX2hpc3RvcnlJdGVtIiwiUHJvbXB0SGlzdG9yeSIsImhpc3RvcnkiLCJzaXplIiwiYXMiLCJBcnJheSIsImZyb20iLCJfaXRlbSIsIlByb2dyZXNzUGFuZWwiLCJzZXRGZXRjaGluZ0FjdGlvbiIsIlByb2dyZXNzSXRlbSIsIl9oaXN0b3J5IiwidmlldyIsInNldFZpZXciLCJjaGFuZ2VUYWIiLCJ0aXRsZSIsImJvcmRlcmVkIiwiX2ltcG9ydExpYnJhcnkiLCJfbW9kZWxTZWxlY3QiLCJfZGVwZW5kZW5jaWVzIiwiX2dsb2JhbCIsIl9wcm9ncmVzcyIsIl9wcm9tcHRzIiwiX3Jlc2VydmVkIiwibW9kZWxPcHRpb25zIiwibW9kZWxzIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiTW9kZWxTZWxlY3QiLCJJbXBvcnRMaWJyYXJ5IiwicHJvZ3Jlc3MiLCJQcm9tcHRzIiwiX3VpIiwic2V0T3BlbiIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldFByb2Nlc3NpbmciLCJvbkltcG9ydCIsIm9uU2VsZWN0IiwiY2xzeCIsIlByb2Nlc3NDb250YWluZXIiLCJTZWxlY3QiLCJjb250YWluZXJSZWYiLCJoaWRkZW5BbmNlc3RvciIsImZpcnN0SXRlbVJlZiIsInRvZ2dsZUFyaWFIaWRkZW4iLCJzaG91bGRIaWRlIiwiZWwiLCJjbG9zZXN0Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlT3BlbkNoYW5nZSIsImlzT3BlbiIsIm9uQ2hhbmdlTGlzdGVuZXIiLCJSb290Iiwib25WYWx1ZUNoYW5nZSIsIm9uT3BlbkNoYW5nZSIsIlRyaWdnZXIiLCJWYWx1ZSIsIkljb24iLCJDaGV2cm9uRG93bkljb24iLCJQb3J0YWwiLCJjb250YWluZXIiLCJDb250ZW50IiwicG9zaXRpb24iLCJWaWV3cG9ydCIsIm9wdCIsInRhYkluZGV4IiwiSXRlbVRleHQiLCJkZXNjcmlwdGlvbiIsIkl0ZW1JbmRpY2F0b3IiLCJDaGVja0ljb24iLCJvYmplY3RpdmVzIiwic2V0T2JqZWN0aXZlcyIsImlzRm9ybVZpc2libGUiLCJzZXRJc0Zvcm1WaXNpYmxlIiwibmV3T2JqZWN0aXZlIiwic2V0TmV3T2JqZWN0aXZlIiwiaXNGb3JtVmFsaWQiLCJ0cmltIiwiaGFuZGxlQWRkT2JqZWN0aXZlIiwidXBkYXRlZE9iamVjdGl2ZXMiLCJoYW5kbGVLZXlQcmVzcyIsImhhbmRsZVJlbW92ZU9iamVjdGl2ZSIsImkiLCJvbktleVByZXNzIiwib2JqZWN0aXZlIiwiX3RvZ2dsZUNvbnRhaW5lciIsIkFpU2V0dGluZ3MiLCJUb2dnbGVDb250YWluZXIiLCJHZWFySWNvbiIsIl9jdXN0b21Qcm9tcHQiLCJQb3BvdmVyIiwidHJpZ2dlckNsYXNzTmFtZSIsInBhbmVsQ2xhc3NOYW1lIiwic2lkZU9mZnNldCIsImFzQ2hpbGQiLCJBcnJvdyJdLCJzb3VyY2VzIjpbIi90cy9jb250ZXh0LnRzeCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXQvcGFuZWwvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYmxvY2stZWRpdG9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2N1c3RvbS1wcm9tcHQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvbGl0ZXJhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9tZXNzYWdlLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL21vZGFsLWFjdGlvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9wcm9tcHQtcmVzdWx0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RhYi1saW5rLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL3RleHRhcmVhLnRzeCIsIi90cy92aWV3cy9kZXBlbmRlbmNpZXMvZGVwZW5kZW5jeS50c3giLCIvdHMvdmlld3MvZGVwZW5kZW5jaWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbGl0ZXJhbHMvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9saXRlcmFscy9yZXNlcnZlZC50c3giLCIvdHMvdmlld3MvbW9kYWwvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9tb2RhbC9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL21vZGFsL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC9saXRlcmFscy50c3giLCIvdHMvdmlld3MvbW9kYWwvbWFpbi50c3giLCIvdHMvdmlld3MvbW9kYWwvcGFuZWwtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2RhbC9wcm9tcHQtaW50ZXJhY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2RhbC9wcm9tcHQtbGl0ZXJhbHMtdXNlZC50c3giLCIvdHMvdmlld3MvbW9kYWwvcHJvdmlkZXIudHN4IiwiL3RzL3ZpZXdzL3Byb2dyZXNzL2hpc3RvcnktaXRlbS50c3giLCIvdHMvdmlld3MvcHJvZ3Jlc3MvaGlzdG9yeS50c3giLCIvdHMvdmlld3MvcHJvZ3Jlc3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3Byb2dyZXNzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy9pbXBvcnQtbGlicmFyeS50c3giLCIvdHMvdmlld3Mvc2V0dGluZ3MvbW9kZWwtc2VsZWN0LnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy9wYW5lbHMvYWktc2V0dGluZ3MudHN4IiwiL3RzL3ZpZXdzL3NldHRpbmdzL3BhbmVscy9wcm9tcHRzLnRzeCIsIi90cy92aWV3cy9zZXR0aW5ncy90b2dnbGUtY29udGFpbmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQWNPLE1BQU1DLGFBQWEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQUcsSUFBQUYsTUFBQSxDQUFBSSxhQUFhLEVBQXNDQyxTQUFTLENBQUM7VUFDbkYsTUFBTUMsZUFBZSxHQUFBSCxPQUFBLENBQUFHLGVBQUEsR0FBRyxJQUFBTixNQUFBLENBQUFJLGFBQWEsRUFBd0NDLFNBQVMsQ0FBQztVQUV2RjtVQUFXLE1BQU1FLGdCQUFnQixHQUFHQSxDQUFBLEtBQUs7WUFDL0MsTUFBTUMsT0FBTyxHQUFHLElBQUFSLE1BQUEsQ0FBQVMsVUFBVSxFQUFDUCxhQUFhLENBQUM7WUFD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