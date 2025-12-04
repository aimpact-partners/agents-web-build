System.register(["@beyond-js/widgets@1.1.4/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.6/page", "@aimpact/platform@0.1.6/models/playground", "@aimpact/platform@0.1.6/stores/base", "@aimpact/chat-sdk@1.5.5/chat-component.code", "pragmate-ui@1.0.8/empty", "@beyond-js/react-18-widgets@1.1.6/hooks", "@radix-ui/react-icons@1.3.2", "@editorjs/editorjs@2.31.0", "@aimpact/platform@0.1.6/shared/icons", "clsx@2.1.1", "pragmate-ui@1.0.8/form", "framer-motion@11.18.2", "react-json-view-lite@2.5.0", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/components", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/form/react-select", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/alert", "@aimpact/platform@0.1.6/components/editor", "pragmate-ui@1.0.8/icons", "dayjs@1.11.18", "@aimpact/platform@0.1.6/components/ui", "@radix-ui/react-select@2.2.6", "@radix-ui/react-popover@1.1.15"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, useModuleContext, useSettingsContext, Controller, ChatContainer, ChatPanel, SettingsContent, SettingsTabs, TabLink, Dependencies, View, ReservedPanel, ProgressPanel, SettingsView, ImportLibrary, Prompts, __beyond_pkg, hmr;
  _export({
    useModuleContext: void 0,
    useSettingsContext: void 0,
    Controller: void 0,
    ChatContainer: void 0,
    ChatPanel: void 0,
    SettingsContent: void 0,
    SettingsTabs: void 0,
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
    setters: [function (_beyondJsWidgets114Render) {
      dependency_0 = _beyondJsWidgets114Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_beyondJsReact18Widgets116Page) {
      dependency_4 = _beyondJsReact18Widgets116Page;
    }, function (_aimpactPlatform016ModelsPlayground) {
      dependency_5 = _aimpactPlatform016ModelsPlayground;
    }, function (_aimpactPlatform016StoresBase) {
      dependency_6 = _aimpactPlatform016StoresBase;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_7 = _aimpactChatSdk155ChatComponentCode;
    }, function (_pragmateUi108Empty) {
      dependency_8 = _pragmateUi108Empty;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_9 = _beyondJsReact18Widgets116Hooks;
    }, function (_radixUiReactIcons) {
      dependency_10 = _radixUiReactIcons;
    }, function (_editorjsEditorjs) {
      dependency_11 = _editorjsEditorjs;
    }, function (_aimpactPlatform016SharedIcons) {
      dependency_12 = _aimpactPlatform016SharedIcons;
    }, function (_clsx2) {
      dependency_13 = _clsx2;
    }, function (_pragmateUi108Form) {
      dependency_14 = _pragmateUi108Form;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_reactJsonViewLite2) {
      dependency_16 = _reactJsonViewLite2;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_17 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Components) {
      dependency_18 = _pragmateUi108Components;
    }, function (_pragmateUi108List) {
      dependency_19 = _pragmateUi108List;
    }, function (_pragmateUi108Collapsible) {
      dependency_20 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108FormReactSelect) {
      dependency_21 = _pragmateUi108FormReactSelect;
    }, function (_pragmateUi108Modal) {
      dependency_22 = _pragmateUi108Modal;
    }, function (_pragmateUi108Alert) {
      dependency_23 = _pragmateUi108Alert;
    }, function (_aimpactPlatform016ComponentsEditor) {
      dependency_24 = _aimpactPlatform016ComponentsEditor;
    }, function (_pragmateUi108Icons) {
      dependency_25 = _pragmateUi108Icons;
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
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['@beyond-js/react-18-widgets/page', dependency_4], ['@aimpact/platform/models/playground', dependency_5], ['@aimpact/platform/stores/base', dependency_6], ['@aimpact/chat-sdk/chat-component.code', dependency_7], ['pragmate-ui/empty', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@radix-ui/react-icons', dependency_10], ['@editorjs/editorjs', dependency_11], ['@aimpact/platform/shared/icons', dependency_12], ['clsx', dependency_13], ['pragmate-ui/form', dependency_14], ['framer-motion', dependency_15], ['react-json-view-lite', dependency_16], ['@aimpact/chat-sdk/widgets/markdown', dependency_17], ['pragmate-ui/components', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['pragmate-ui/modal', dependency_22], ['pragmate-ui/alert', dependency_23], ['@aimpact/platform/components/editor', dependency_24], ['pragmate-ui/icons', dependency_25], ['dayjs', dependency_26], ['@aimpact/platform/components/ui', dependency_27], ['@radix-ui/react-select', dependency_28], ['@radix-ui/react-popover', dependency_29]]);
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
        hash: 807052450,
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
              this.#model = new _playground.Playground();
              this.#model.on('change', () => this.trigger('change'));
              this.#model.chat.on('change', () => this.trigger('change'));
            };
            getValue(property) {
              return this.model.chat[property] ?? '';
            }
            async execute(action) {
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
        hash: 1806076494,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 827690014,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomPrompt = void 0;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            const onActionClick = async event => {
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
        hash: 299187618,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLiteral = PromptLiteral;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3098681303,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 1597856625,
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

      /***************************************************
      INTERNAL MODULE: ./views/components/settings-content
      ***************************************************/

      ims.set('./views/components/settings-content', {
        hash: 393728351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SettingsContent = SettingsContent;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _global = require("../literals/global");
          var _dependencies = require("../dependencies");
          var _progress = require("../progress");
          var _prompts = require("../settings/panels/prompts");
          var _reserved = require("../literals/reserved");
          /*bundle*/
          function SettingsContent({
            activeTab
          }) {
            const tabContent = {
              'global-literals': React.createElement(_global.GlobalLiterals, null),
              dependencies: React.createElement(_dependencies.Dependencies, null),
              progress: React.createElement(_progress.ProgressPanel, null),
              prompts: React.createElement(_prompts.Prompts, null),
              reserved: React.createElement(_reserved.ReservedPanel, null)
            };
            return React.createElement("div", {
              className: "section-container"
            }, React.createElement(_components.ConditionalContainer, {
              condition: activeTab,
              options: tabContent
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/settings-tabs
      ************************************************/

      ims.set('./views/components/settings-tabs', {
        hash: 4080615391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SettingsTabs = SettingsTabs;
          var React = require("react");
          var _tabLink = require("./tab-link");
          /*bundle*/
          function SettingsTabs({
            activeTab,
            onTabClick
          }) {
            const tabs = [{
              action: 'prompts',
              label: 'Prompts'
            }, {
              action: 'dependencies',
              label: 'Dependencies'
            }, {
              action: 'global-literals',
              label: 'Global Literals'
            }, {
              action: 'progress',
              label: 'Progress'
            }, {
              action: 'reserved',
              label: 'Reserved'
            }];
            return React.createElement("header", {
              className: "panel-header"
            }, React.createElement("div", {
              className: "main-tabs-container tabs-container"
            }, tabs.map(tab => React.createElement(_tabLink.TabLink, {
              key: tab.action,
              action: tab.action,
              active: activeTab,
              onClick: onTabClick
            }, tab.label))));
          }
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
        hash: 489648097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 626658043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GlobalLiterals = GlobalLiterals;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 2782902185,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 353520822,
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
        hash: 4202514274,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptModal = PromptModal;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3202735710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MainModalPanel = MainModalPanel;
          var _editor = require("@aimpact/platform/components/editor");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
              setValues
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
        hash: 2628114495,
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
        hash: 3081161112,
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
        hash: 1227905355,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProgressItem = void 0;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
              id
            } = item;
            const [view, setView] = React.useState('result');
            const prompt = item;
            (0, _hooks.useStore)(store.model, ['fetching.changed']);
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
              className: "prompt-history"
            }, prompt.result ? React.createElement("div", {
              className: "prompt-history-list"
            }, React.createElement(_historyItem.PromptHistoryItem, {
              item: prompt.history.get(1),
              idx: 0
            })) : React.createElement("span", null, "This value is not set")) : React.createElement(_history.PromptHistory, {
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
        hash: 4249704110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SettingsView = SettingsView;
          var React = require("react");
          var _context = require("../context");
          var _settingsTabs = require("./components/settings-tabs");
          var _settingsContent = require("./components/settings-content");
          var _importLibrary = require("./settings/import-library");
          var _modelSelect = require("./settings/model-select");
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
            })), React.createElement(_importLibrary.ImportLibrary, null)), React.createElement(_settingsTabs.SettingsTabs, {
              activeTab: activeTab,
              onTabClick: handleTabClick
            }), React.createElement(_settingsContent.SettingsContent, {
              activeTab: activeTab
            })));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/settings/import-library/activity-item
      *************************************************************/

      ims.set('./views/settings/import-library/activity-item', {
        hash: 844370034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityItem = void 0;
          var React = require("react");
          var _clsx = require("clsx");
          const ActivityItem = ({
            item,
            selected,
            onSelect
          }) => {
            return React.createElement("div", {
              className: (0, _clsx.clsx)('modal-card-item', {
                selected: selected === item.id
              }),
              "data-id": item.id,
              onClick: onSelect
            }, React.createElement("h6", null, item.name));
          };
          exports.ActivityItem = ActivityItem;
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/settings/import-library/import-modal
      ************************************************************/

      ims.set('./views/settings/import-library/import-modal', {
        hash: 1007674508,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImportModal = void 0;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _modal = require("pragmate-ui/modal");
          var _list = require("pragmate-ui/list");
          var _clsx = require("clsx");
          var _ui = require("@aimpact/platform/components/ui");
          var _context = require("../../../context");
          var _activityItem = require("./activity-item");
          const ImportModal = ({
            open,
            onClose,
            selectedLanguage,
            selected,
            processing,
            onLanguageChange,
            onSelect,
            onImport
          }) => {
            const {
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: !selectedLanguage || !selected || processing
            };
            if (!open) return null;
            return React.createElement(_modal.Modal, {
              className: (0, _clsx.clsx)('modal-activities'),
              show: true,
              onClose: onClose
            }, React.createElement("header", {
              className: "modal-header"
            }, React.createElement("h4", null, "Import Activity Agent")), store.model.activities.fetching ? React.createElement("div", {
              className: "modal-loading"
            }, React.createElement(_components.Spinner, {
              active: true
            })) : React.createElement(React.Fragment, null, React.createElement("select", {
              id: "language-select",
              value: selectedLanguage,
              onChange: onLanguageChange
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
              items: store.model.activities.items,
              control: props => React.createElement(_activityItem.ActivityItem, {
                ...props,
                selected: selected,
                onSelect: onSelect
              })
            })), React.createElement("footer", null, React.createElement(_components.Button, {
              ...disabled,
              variant: "primary",
              onClick: onImport
            }, "Import")), React.createElement(_ui.ProcessContainer, {
              fetching: processing
            }));
          };
          exports.ImportModal = ImportModal;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/settings/import-library/index
      *****************************************************/

      ims.set('./views/settings/import-library/index', {
        hash: 924801747,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ImportLibrary = ImportLibrary;
          var React = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _importModal = require("./import-modal");
          /*bundle*/
          function ImportLibrary() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [open, setOpen] = React.useState(false);
            const [selectedLanguage, setSelectedLanguage] = React.useState('');
            const [selected, setSelected] = React.useState();
            const [processing, setProcessing] = React.useState(false);
            (0, _hooks.useStore)(store.model.activities);
            const toggleModal = () => {
              store.model.activities.load();
              setOpen(!open);
            };
            const onLanguageChange = event => {
              setSelectedLanguage(event.target.value);
            };
            const onSelect = event => {
              setSelected(event.currentTarget.dataset.id);
            };
            const onImport = async () => {
              setProcessing(true);
              await store.importActivity(selectedLanguage, selected);
              setProcessing(false);
              setOpen(false);
            };
            return React.createElement(React.Fragment, null, React.createElement(_components.Button, {
              variant: "primary",
              onClick: toggleModal
            }, "Import"), React.createElement(_importModal.ImportModal, {
              open: open,
              onClose: toggleModal,
              selectedLanguage: selectedLanguage,
              selected: selected,
              processing: processing,
              onLanguageChange: onLanguageChange,
              onSelect: onSelect,
              onImport: onImport
            }));
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
        hash: 2558605996,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        "im": "./views/components/settings-content",
        "from": "SettingsContent",
        "name": "SettingsContent"
      }, {
        "im": "./views/components/settings-tabs",
        "from": "SettingsTabs",
        "name": "SettingsTabs"
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
        "im": "./views/settings/import-library/index",
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
        (require || prop === 'SettingsContent') && _export("SettingsContent", SettingsContent = require ? require('./views/components/settings-content').SettingsContent : value);
        (require || prop === 'SettingsTabs') && _export("SettingsTabs", SettingsTabs = require ? require('./views/components/settings-tabs').SettingsTabs : value);
        (require || prop === 'TabLink') && _export("TabLink", TabLink = require ? require('./views/components/tab-link').TabLink : value);
        (require || prop === 'Dependencies') && _export("Dependencies", Dependencies = require ? require('./views/dependencies/index').Dependencies : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'ReservedPanel') && _export("ReservedPanel", ReservedPanel = require ? require('./views/literals/reserved').ReservedPanel : value);
        (require || prop === 'ProgressPanel') && _export("ProgressPanel", ProgressPanel = require ? require('./views/progress/index').ProgressPanel : value);
        (require || prop === 'SettingsView') && _export("SettingsView", SettingsView = require ? require('./views/settings').SettingsView : value);
        (require || prop === 'ImportLibrary') && _export("ImportLibrary", ImportLibrary = require ? require('./views/settings/import-library/index').ImportLibrary : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiTW9kdWxlQ29udGV4dCIsImV4cG9ydHMiLCJjcmVhdGVDb250ZXh0IiwidW5kZWZpbmVkIiwiU2V0dGluZ3NDb250ZXh0IiwidXNlTW9kdWxlQ29udGV4dCIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRXJyb3IiLCJ1c2VTZXR0aW5nc0NvbnRleHQiLCJfcGFnZSIsIl9zdG9yZSIsIl92aWV3cyIsIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwiaGlkZSIsIl9wbGF5Z3JvdW5kIiwiX2Jhc2UiLCJfYmV5b25kX2NvbnRleHQiLCJCYXNlU3RvcmVNYW5hZ2VyIiwibW9kZWwiLCJpbXBvcnRlZCIsImFjdGl2aXRpZXMiLCJyZWFkeSIsImVycm9ycyIsInN5c3RlbSIsInByb21wdHMiLCJtYXAiLCJnZXQiLCJzdW1tYXJ5IiwiaXBlIiwiY29uc3RydWN0b3IiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbGl6ZSIsIlBsYXlncm91bmQiLCJvbiIsInRyaWdnZXIiLCJjaGF0IiwiZ2V0VmFsdWUiLCJwcm9wZXJ0eSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJjaGVja1Byb21wdCIsInByb21wdCIsInBhcnNlIiwiZGVsZXRlTWVzc2FnZSIsImlkIiwibWVzc2FnZXMiLCJkZWxldGUiLCJpbXBvcnRBY3Rpdml0eSIsImxhbmd1YWdlIiwiYWN0aXZpdHlJZCIsImltcG9ydCIsIl9jaGF0Q29tcG9uZW50IiwiX2VtcHR5IiwiUmVhY3QiLCJfcGFuZWwiLCJDaGF0Q29udGFpbmVyIiwiRW1wdHlDaGF0IiwiY3JlYXRlRWxlbWVudCIsIkVtcHR5IiwidGV4dCIsImljb24iLCJjbGFzc05hbWUiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiZW1wdHkiLCJDaGF0UGFuZWwiLCJBZ2VudHNDaGF0SW5wdXQiLCJfbWVzc2FnZSIsIl9ob29rcyIsImNoYXRTdG9yZSIsInVzZUNoYXRDb250ZXh0IiwidXNlU3RvcmUiLCJub3RGb3VuZCIsImxlbmd0aCIsIm1lc3NhZ2UiLCJpbmRleCIsIk1lc3NhZ2UiLCJrZXkiLCJfZWRpdG9yanMiLCJlZGl0b3JJbnN0YW5jZSIsIkJsb2NrRWRpdG9yIiwiZWRpdG9yUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNhdmVkRGF0YSIsImRlZmF1bHQiLCJob2xkZXIiLCJwbGFjZWhvbGRlciIsImlubGluZVRvb2xiYXIiLCJkYXRhIiwicGFyc2VUb0VkaXRvckRhdGEiLCJvbkNoYW5nZSIsIm91dHB1dCIsInNhdmUiLCJjb250ZW50IiwicGFyc2VGcm9tRWRpdG9yRGF0YSIsImRlc3Ryb3kiLCJyZWYiLCJyYXciLCJ0aW1lIiwiRGF0ZSIsIm5vdyIsImJsb2NrcyIsInR5cGUiLCJ2ZXJzaW9uIiwiYmxvY2siLCJqb2luIiwiX2ljb25zIiwiX2Nsc3giLCJfY29udGV4dCIsIl9hY3Rpb24iLCJDdXN0b21Qcm9tcHQiLCJpdGVtIiwibmFtZSIsInZhbHVlIiwiZm9ybWF0Iiwib25BY3Rpb25DbGljayIsImV2ZW50IiwiZmV0Y2hpbmciLCJBcHBJY29uQnV0dG9uIiwiZGlzYWJsZWQiLCJwcm9tcHRTY2hlbWEiLCJ2YXJpYW50Iiwib25DbGljayIsIk1vZGFsQWN0aW9uIiwiX2Zvcm0iLCJfb2JqZWN0aXZlcyIsIlByb21wdExpdGVyYWwiLCJoYW5kbGVDaGFuZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0Iiwic2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsIk9iamVjdGl2ZXNGaWVsZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbnB1dCIsImxhYmVsIiwiX3JlYWN0SWNvbnMiLCJfZnJhbWVyTW90aW9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsImVkaXRpbmciLCJzZXRFZGl0aW5nIiwiaW5wdXRSZWYiLCJoYW5kbGVFZGl0VG9nZ2xlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRGVsZXRlIiwidGFyZ2V0IiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiZGl2Iiwicm9sZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiZXhpdCIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25LZXlEb3duIiwiUGVuY2lsMUljb24iLCJUcmFzaEljb24iLCJjaGlsZHJlbiIsInNwZWNzIiwiTW9kYWwiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ0b2dnbGUiLCJwcmV2IiwiaGFuZGxlQ2xvc2UiLCJGcmFnbWVudCIsInN0eWxlIiwiY3Vyc29yIiwib25DbG9zZSIsIl9yZWFjdEpzb25WaWV3TGl0ZSIsIl9tYXJrZG93biIsIlByb21wdFJlc3VsdCIsInJlc3VsdCIsIkpzb25WaWV3IiwiZGVmYXVsdFN0eWxlcyIsIk1hcmtkb3duIiwiX2NvbXBvbmVudHMiLCJfZ2xvYmFsIiwiX2RlcGVuZGVuY2llcyIsIl9wcm9ncmVzcyIsIl9wcm9tcHRzIiwiX3Jlc2VydmVkIiwiU2V0dGluZ3NDb250ZW50IiwiYWN0aXZlVGFiIiwidGFiQ29udGVudCIsIkdsb2JhbExpdGVyYWxzIiwiZGVwZW5kZW5jaWVzIiwiRGVwZW5kZW5jaWVzIiwicHJvZ3Jlc3MiLCJQcm9ncmVzc1BhbmVsIiwiUHJvbXB0cyIsInJlc2VydmVkIiwiUmVzZXJ2ZWRQYW5lbCIsIkNvbmRpdGlvbmFsQ29udGFpbmVyIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsIl90YWJMaW5rIiwiU2V0dGluZ3NUYWJzIiwib25UYWJDbGljayIsInRhYnMiLCJ0YWIiLCJUYWJMaW5rIiwiYWN0aXZlIiwiaXNBY3RpdmUiLCJDdXN0b21UZXh0YXJlYSIsImVycm9yTWVzc2FnZSIsInJvd3MiLCJmZXRjaGluZ0FjdGlvbiIsInJlc3QiLCJpbnRlcm5hbElkIiwidXNlSWQiLCJlZmZlY3RpdmVJZCIsImlzRm9jdXNlZCIsInNldElzRm9jdXNlZCIsImhhbmRsZUZvY3VzIiwib25Gb2N1cyIsImhhbmRsZUJsdXIiLCJvbkJsdXIiLCJ3cmFwcGVyQ2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJhY3R1YWxQbGFjZWhvbGRlciIsImh0bWxGb3IiLCJEZXBlbmRlbmN5Iiwic2V0RmV0Y2hpbmciLCJ3YXJuIiwicHJvbXB0UmVzdWx0IiwiZ2xvYmFsTGl0ZXJhbHMiLCJfbGlzdCIsIl9kZXBlbmRlbmN5IiwiX2NvbGxhcHNpYmxlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiX2NoYXQiLCJfc2V0dGluZ3MiLCJTcGlubmVyIiwiUHJvdmlkZXIiLCJTZXR0aW5nc1ZpZXciLCJfbGl0ZXJhbCIsInJlc2VydmVkTGl0ZXJhbHMiLCJuYW1lcyIsIkl0ZW0iLCJfIiwic2V0U2hvdyIsInRvZ2dsZU1vZGFsIiwicHJldlNob3ciLCJQcm9tcHRNb2RhbCIsIl9yZWFjdFNlbGVjdCIsIl9wcm92aWRlciIsIk1vZGFsUGFuZWxGb290ZXIiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJzZXRWYWx1ZXMiLCJ1c2VQcm9tcHRNb2RhbCIsIm9uU2F2ZSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwic2V0VGltZW91dCIsImdldFByb3BlcnRpZXMiLCJjaGFuZ2VkIiwib25Gb3JtYXRDaGFuZ2UiLCJwcm9jZXNzaW5nIiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJfbW9kYWwiLCJfbGl0ZXJhbHMiLCJfbWFpbiIsIl9wYW5lbEhlYWRlciIsIl9hbGVydCIsImV4ZWN1dGVkIiwic2V0UmVhZHkiLCJ0YWJBY3RpdmUiLCJzZXRUYWJBY3RpdmUiLCJoYW5kbGVUYWJDbGljayIsImRhdGFzZXQiLCJsaXRlcmFscyIsImNsb3NlQmFja2Ryb3AiLCJQcm9tcHRNb2RhbENvbnRleHQiLCJQcm9tcHRMaXRlcmFscyIsIk1vZGFsUGFuZWxIZWFkZXIiLCJBbGVydCIsIk1haW5Nb2RhbFBhbmVsIiwiX3RleHRhcmVhIiwibGl0ZXJhbElucHV0cyIsInNldExpdGVyYWwiLCJsaXRlcmFsIiwiaW5jbHVkZXMiLCJyZXBsYWNlIiwicHVzaCIsIl9lZGl0b3IiLCJfZm9vdGVyIiwiX3Byb21wdEludGVyYWN0aW9ucyIsIl9wcm9tcHRMaXRlcmFsc1VzZWQiLCJvcmlnaW5hbFZhbHVlIiwiaG1yIiwic2V0VmFsdWUiLCJoYW5kbGVUZXh0Q2hhbmdlIiwidiIsIlByb21wdEVkaXRvciIsImV4cGFuZGVkIiwicGFyc2VkIiwiaW50ZXJhY3Rpb25zIiwiUHJvbXB0SW50ZXJhY3Rpb25zIiwibGl0ZXJhbHNVc2VkIiwiUHJvbXB0TGl0ZXJhbHNVc2VkIiwiSWNvbkJ1dHRvbiIsImludGVyYWN0aW9uIiwiaWR4IiwiX2RheWpzIiwiX3Byb21wdFJlc3VsdCIsIlByb21wdEhpc3RvcnlJdGVtIiwic2V0Q29udGVudCIsIm9uQ2hhbmdlVGFiIiwidGltZXN0YW1wIiwiX2hpc3RvcnlJdGVtIiwiUHJvbXB0SGlzdG9yeSIsImhpc3RvcnkiLCJzaXplIiwiYXMiLCJBcnJheSIsImZyb20iLCJfaXRlbSIsIlByb2dyZXNzSXRlbSIsIl9oaXN0b3J5IiwidmlldyIsInNldFZpZXciLCJjaGFuZ2VUYWIiLCJ0aXRsZSIsImJvcmRlcmVkIiwiX3NldHRpbmdzVGFicyIsIl9zZXR0aW5nc0NvbnRlbnQiLCJfaW1wb3J0TGlicmFyeSIsIl9tb2RlbFNlbGVjdCIsIm1vZGVsT3B0aW9ucyIsIm1vZGVscyIsInNldEFjdGl2ZVRhYiIsIk1vZGVsU2VsZWN0IiwiSW1wb3J0TGlicmFyeSIsIkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwib25TZWxlY3QiLCJjbHN4IiwiX3VpIiwiX2FjdGl2aXR5SXRlbSIsIkltcG9ydE1vZGFsIiwic2VsZWN0ZWRMYW5ndWFnZSIsIm9uTGFuZ3VhZ2VDaGFuZ2UiLCJvbkltcG9ydCIsInByb3BzIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9pbXBvcnRNb2RhbCIsInNldE9wZW4iLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwic2V0U2VsZWN0ZWQiLCJzZXRQcm9jZXNzaW5nIiwibG9hZCIsIlNlbGVjdCIsImNvbnRhaW5lclJlZiIsImhpZGRlbkFuY2VzdG9yIiwiZmlyc3RJdGVtUmVmIiwidG9nZ2xlQXJpYUhpZGRlbiIsInNob3VsZEhpZGUiLCJlbCIsImNsb3Nlc3QiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYW5kbGVPcGVuQ2hhbmdlIiwiaXNPcGVuIiwib25DaGFuZ2VMaXN0ZW5lciIsIlJvb3QiLCJvblZhbHVlQ2hhbmdlIiwib25PcGVuQ2hhbmdlIiwiVHJpZ2dlciIsIlZhbHVlIiwiSWNvbiIsIkNoZXZyb25Eb3duSWNvbiIsIlBvcnRhbCIsImNvbnRhaW5lciIsIkNvbnRlbnQiLCJwb3NpdGlvbiIsIlZpZXdwb3J0Iiwib3B0IiwidGFiSW5kZXgiLCJJdGVtVGV4dCIsImRlc2NyaXB0aW9uIiwiSXRlbUluZGljYXRvciIsIkNoZWNrSWNvbiIsIm9iamVjdGl2ZXMiLCJzZXRPYmplY3RpdmVzIiwiaXNGb3JtVmlzaWJsZSIsInNldElzRm9ybVZpc2libGUiLCJuZXdPYmplY3RpdmUiLCJzZXROZXdPYmplY3RpdmUiLCJpc0Zvcm1WYWxpZCIsInRyaW0iLCJoYW5kbGVBZGRPYmplY3RpdmUiLCJ1cGRhdGVkT2JqZWN0aXZlcyIsImhhbmRsZUtleVByZXNzIiwiaGFuZGxlUmVtb3ZlT2JqZWN0aXZlIiwiaSIsIm9uS2V5UHJlc3MiLCJvYmplY3RpdmUiLCJfdG9nZ2xlQ29udGFpbmVyIiwiQWlTZXR0aW5ncyIsIlRvZ2dsZUNvbnRhaW5lciIsIkdlYXJJY29uIiwiX2N1c3RvbVByb21wdCIsIlBvcG92ZXIiLCJ0cmlnZ2VyQ2xhc3NOYW1lIiwicGFuZWxDbGFzc05hbWUiLCJzaWRlT2Zmc2V0IiwiYXNDaGlsZCIsIkFycm93Il0sInNvdXJjZXMiOlsiLy90cy9jb250ZXh0LnRzeCIsIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUvaW5kZXgudHMiLCIvL3RzL3ZpZXdzL2NoYXQvaW5kZXgudHN4IiwiLy90cy92aWV3cy9jaGF0L3BhbmVsL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9ibG9jay1lZGl0b3IudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2N1c3RvbS1wcm9tcHQudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2xpdGVyYWwudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL21lc3NhZ2UudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL21vZGFsLWFjdGlvbi50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvcHJvbXB0LXJlc3VsdC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvc2V0dGluZ3MtY29udGVudC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvc2V0dGluZ3MtdGFicy50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvdGFiLWxpbmsudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL3RleHRhcmVhLnRzeCIsIi8vdHMvdmlld3MvZGVwZW5kZW5jaWVzL2RlcGVuZGVuY3kudHN4IiwiLy90cy92aWV3cy9kZXBlbmRlbmNpZXMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2xpdGVyYWxzL2dsb2JhbC50c3giLCIvL3RzL3ZpZXdzL2xpdGVyYWxzL3Jlc2VydmVkLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvYWN0aW9uLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvZm9vdGVyLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvaW5kZXgudHN4IiwiLy90cy92aWV3cy9tb2RhbC9saXRlcmFscy50c3giLCIvL3RzL3ZpZXdzL21vZGFsL21haW4udHN4IiwiLy90cy92aWV3cy9tb2RhbC9wYW5lbC1oZWFkZXIudHN4IiwiLy90cy92aWV3cy9tb2RhbC9wcm9tcHQtaW50ZXJhY3Rpb25zLnRzeCIsIi8vdHMvdmlld3MvbW9kYWwvcHJvbXB0LWxpdGVyYWxzLXVzZWQudHN4IiwiLy90cy92aWV3cy9tb2RhbC9wcm92aWRlci50c3giLCIvL3RzL3ZpZXdzL3Byb2dyZXNzL2hpc3RvcnktaXRlbS50c3giLCIvL3RzL3ZpZXdzL3Byb2dyZXNzL2hpc3RvcnkudHN4IiwiLy90cy92aWV3cy9wcm9ncmVzcy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3Byb2dyZXNzL2l0ZW0udHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL2ltcG9ydC1saWJyYXJ5L2FjdGl2aXR5LWl0ZW0udHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9pbXBvcnQtbGlicmFyeS9pbXBvcnQtbW9kYWwudHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9pbXBvcnQtbGlicmFyeS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL21vZGVsLXNlbGVjdC50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL29iamVjdGl2ZXMudHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9wYW5lbHMvYWktc2V0dGluZ3MudHN4IiwiLy90cy92aWV3cy9zZXR0aW5ncy9wYW5lbHMvcHJvbXB0cy50c3giLCIvL3RzL3ZpZXdzL3NldHRpbmdzL3RvZ2dsZS1jb250YWluZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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