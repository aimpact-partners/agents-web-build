System.register(["@beyond-js/kernel@0.1.14/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@aimpact/chat-sdk@1.5.5/components/icons", "@aimpact/chat-sdk@1.5.5/voice", "pragmate-ui@1.0.8/empty", "@aimpact/chat-sdk@1.5.5/shared/hooks", "pragmate-ui@1.0.8/toast", "@aimpact/chat-sdk@1.5.5/audio-player", "wavesurfer.js@7.10.1", "pragmate-ui@1.0.8/image", "@beyond-js/react-18-widgets@1.1.6/hooks", "react-icons@5.5.0/bs", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/components", "dayjs@1.11.18", "@aimpact/chat-sdk@1.5.5/chat/messages/item", "@aimpact/chat-sdk@1.5.5/widgets/playable", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/collapsible", "@beyond-js/kernel@0.1.14/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi108Icons) {
      dependency_2 = _pragmateUi108Icons;
    }, function (_aimpactChatSdk155ComponentsIcons) {
      dependency_3 = _aimpactChatSdk155ComponentsIcons;
    }, function (_aimpactChatSdk155Voice) {
      dependency_4 = _aimpactChatSdk155Voice;
    }, function (_pragmateUi108Empty) {
      dependency_5 = _pragmateUi108Empty;
    }, function (_aimpactChatSdk155SharedHooks) {
      dependency_6 = _aimpactChatSdk155SharedHooks;
    }, function (_pragmateUi108Toast) {
      dependency_7 = _pragmateUi108Toast;
    }, function (_aimpactChatSdk155AudioPlayer) {
      dependency_8 = _aimpactChatSdk155AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_9 = _wavesurferJs;
    }, function (_pragmateUi108Image) {
      dependency_10 = _pragmateUi108Image;
    }, function (_beyondJsReact18Widgets116Hooks) {
      dependency_11 = _beyondJsReact18Widgets116Hooks;
    }, function (_reactIcons550Bs) {
      dependency_12 = _reactIcons550Bs;
    }, function (_pragmateUi108Alert) {
      dependency_13 = _pragmateUi108Alert;
    }, function (_pragmateUi108Components) {
      dependency_14 = _pragmateUi108Components;
    }, function (_dayjs2) {
      dependency_15 = _dayjs2;
    }, function (_aimpactChatSdk155ChatMessagesItem) {
      dependency_16 = _aimpactChatSdk155ChatMessagesItem;
    }, function (_aimpactChatSdk155WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk155WidgetsPlayable;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Collapsible) {
      dependency_19 = _pragmateUi108Collapsible;
    }, function (_beyondJsKernel0114Styles) {
      dependency_20 = _beyondJsKernel0114Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.8"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["turndown", "7.2.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.5.5/messages"
        },
        "type": "code"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['@aimpact/chat-sdk/voice', dependency_4], ['pragmate-ui/empty', dependency_5], ['@aimpact/chat-sdk/shared/hooks', dependency_6], ['pragmate-ui/toast', dependency_7], ['@aimpact/chat-sdk/audio-player', dependency_8], ['wavesurfer.js', dependency_9], ['pragmate-ui/image', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['react-icons/bs', dependency_12], ['pragmate-ui/alert', dependency_13], ['pragmate-ui/components', dependency_14], ['dayjs', dependency_15], ['@aimpact/chat-sdk/chat/messages/item', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@beyond-js/kernel/styles', dependency_20]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.5.5/messages');
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./answering
      ***************************/
      ims.set('./answering', {
        hash: 373385579,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemAnswering = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/chat-sdk/components/icons");
          const SystemAnswering = () => {
            return _react.default.createElement("div", {
              className: "message answering"
            }, _react.default.createElement(_icons.Icon, {
              className: "lg",
              icon: _icons2.ICONS['ai-profile']
            }), _react.default.createElement("div", {
              className: ""
            }, _react.default.createElement("span", {
              className: "dot"
            }), _react.default.createElement("span", {
              className: "dot"
            }), _react.default.createElement("span", {
              className: "dot"
            })));
          };
          exports.SystemAnswering = SystemAnswering;
        }
      });

      /*************************
      INTERNAL MODULE: ./context
      *************************/

      ims.set('./context', {
        hash: 399049782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useChatMessagesContext = exports.ChatMessagesContext = void 0;
          var _react = require("react");
          const ChatMessagesContext = exports.ChatMessagesContext = _react.default.createContext({});
          const useChatMessagesContext = () => _react.default.useContext(ChatMessagesContext);
          exports.useChatMessagesContext = useChatMessagesContext;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 3659049754,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = Messages;
          var _react = require("react");
          var _message = require("./message");
          var _empty = require("pragmate-ui/empty");
          var _context = require("./context");
          /*bundle*/
          function Messages(props) {
            const {
              chat,
              player,
              showAvatar,
              messages,
              texts,
              current,
              systemIcon,
              setUpdateScroll
            } = props;
            const [currentMessage, setCurrentMessage] = _react.default.useState(current);
            const totalMessages = messages.length;
            // Show empty state if there are no messages
            if (!totalMessages) return _react.default.createElement(_empty.Empty, {
              text: texts.empty
            });
            // Render each message item
            const messageItems = messages.map((message, i) => _react.default.createElement(_message.MessageItemContainer, {
              key: `message-${i}`,
              message: message,
              setUpdateScroll: setUpdateScroll
            }));
            // Context value for child components
            const contextValue = {
              chat,
              player,
              showAvatar,
              messages,
              texts,
              currentMessage,
              setCurrentMessage,
              systemIcon,
              setUpdateScroll
            };
            return _react.default.createElement(_context.ChatMessagesContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", {
              className: "messages__list"
            }, messageItems));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./message/actions/index
      ***************************************/

      ims.set('./message/actions/index', {
        hash: 689636903,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageActions = MessageActions;
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _icons = require("pragmate-ui/icons");
          var _toast = require("pragmate-ui/toast");
          var _react = require("react");
          var _context = require("../../context");
          var _formatHour = require("../format-hour");
          function MessageActions({
            text,
            message,
            messageTokens,
            play = true
          }) {
            const {
              player,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const processing = player.speaking && player.textId === message.id;
            (0, _hooks.useStore)(player, ['on.finish', 'change']);
            (0, _hooks.useStore)(message);
            const onPlay = async event => {
              event.stopPropagation();
              setCurrentMessage(message.content);
              player.positionToCut = 0;
              player.textId = message.id;
              const parsedText = message.content.replaceAll(/[-\\*_#]+/g, '').trim();
              await player.play(parsedText, message.id);
            };
            const onPause = async ({
              listen
            }) => await player.stop();
            const copyMessage = async () => {
              await globalThis?.navigator.clipboard.writeText(text);
              _toast.toast.success('Message copied to clipboard');
            };
            const icon = processing ? 'stop' : 'play';
            const onClick = icon === 'play' ? onPlay : onPause;
            if (message.streaming) return null;
            return _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement("span", {
              className: "message__datetime"
            }, (0, _formatHour.formatHour)(message.timestamp)), _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "audio__actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: copyMessage,
              icon: "copy"
            }), play && _react.default.createElement(_icons.IconButton, {
              onClick: onClick,
              "data-listen": "api",
              icon: icon
            })), messageTokens && _react.default.createElement("div", {
              className: "tokens overline"
            }, messageTokens, " TOKENS")));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/audio-player
      *************************************************/

      ims.set('./message/components/audio-player', {
        hash: 1138068273,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Player = Player;
          var _react = require("react");
          function Player({
            message
          }) {
            const src = URL.createObjectURL(message.audio);
            const ref = _react.default.useRef(null);
            _react.default.useEffect(() => {
              const target = ref.current;
              target.addEventListener('loadedmetadata', () => {
                if (target.duration === Infinity) {
                  target.currentTime = 1e101;
                  target.ontimeupdate = () => {
                    target.ontimeupdate = null;
                    target.currentTime = 0;
                  };
                }
              });
            }, [src]);
            if (!src) return null;
            return _react.default.createElement("div", {
              className: "audio-player"
            }, _react.default.createElement("audio", {
              controls: true,
              preload: "metadata"
            }, _react.default.createElement("source", {
              src: src,
              type: "audio/mp3",
              ref: ref
            }), "Your browser does not support the audio element."));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./message/components/profile-icon
      *************************************************/

      ims.set('./message/components/profile-icon', {
        hash: 2429896100,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ProfileIcon = ProfileIcon;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          function ProfileIcon({
            role
          }) {
            const [loadError, setLoadError] = (0, _react.useState)(false);
            const {
              systemIcon,
              chat
            } = (0, _context.useChatMessagesContext)();
            const userProps = chat.user;
            const handleLoadError = () => setLoadError(true);
            const src = role === 'user' ? userProps.photoURL : systemIcon;
            return _react.default.createElement("picture", {
              className: "picture__container"
            }, userProps.photoURL && !loadError || role !== 'user' ? _react.default.createElement(_image.Image, {
              alt: "agent",
              src: src,
              onError: handleLoadError
            }) : _react.default.createElement(_react.default.Fragment, null, role === 'user' ? _react.default.createElement(_icons.Icon, {
              icon: "user"
            }) : _react.default.createElement(_image.Image, {
              alt: "user image profile",
              src: systemIcon,
              onError: handleLoadError
            })));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/components/text
      *****************************************/

      ims.set('./message/components/text', {
        hash: 1130764016,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageText = MessageText;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _context = require("../../context");
          var _audioPlayer = require("./audio-player");
          function MessageText({
            message,
            playable,
            fetching,
            autoplay = false
          }) {
            const ref = _react.default.useRef(null);
            const {
              texts,
              player,
              currentMessage,
              setCurrentMessage
            } = (0, _context.useChatMessagesContext)();
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            const [text, setText] = _react.default.useState(message.content ?? '');
            (0, _hooks.useBinder)([message], () => {
              setText(message.content ?? '');
            }, 'change');
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClickWord = event => setCurrentMessage(message);
            const canBePlayed = message && message.role !== 'user' && autoplay;
            const autoplayValue = message.id === currentMessage?.id && canBePlayed;
            return _react.default.createElement("div", {
              className: "message-text__container p2",
              ref: ref
            }, _react.default.createElement("div", null, text), message.audio && _react.default.createElement(_audioPlayer.Player, {
              message: message
            }));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./message/errors-renderer
      *****************************************/

      ims.set('./message/errors-renderer', {
        hash: 1703917569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _bs = require("react-icons/bs");
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          const ErrorsRenderer = ({
            message
          }) => {
            const {
              chat
            } = (0, _context.useChatMessagesContext)();
            (0, _hooks.useStore)(message, ['error.changed']);
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const onRetry = () => chat.retry(message.id);
            if (!message.error) return null;
            return _react.default.createElement("div", {
              className: "message__error"
            }, _react.default.createElement(_alert.Alert, {
              type: "error"
            }, _react.default.createElement("div", null, texts.errors.default), _react.default.createElement("div", {
              className: "error__actions"
            }, _react.default.createElement(_components.Button, {
              onClick: onRetry
            }, _react.default.createElement(_bs.BsArrowCounterclockwise, null), texts.actions.retry))));
          };
          exports.ErrorsRenderer = ErrorsRenderer;
        }
      });

      /*************************************
      INTERNAL MODULE: ./message/format-hour
      *************************************/

      ims.set('./message/format-hour', {
        hash: 3259612382,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.formatHour = void 0;
          var _dayjs = require("dayjs");
          const formatHour = timestamp => {
            const now = (0, _dayjs.default)();
            const date = (0, _dayjs.default)(timestamp);
            const isSameDay = date.isSame(now, 'day');
            const hour = date.format('h A');
            return isSameDay ? hour : `${date.format('ddd')} ${hour}`;
          };
          exports.formatHour = formatHour;
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 3252373422,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MessageItemContainer = MessageItemContainer;
          var _item = require("@aimpact/chat-sdk/chat/messages/item");
          var _playable = require("@aimpact/chat-sdk/widgets/playable");
          var _react = require("react");
          var _context = require("../context");
          var _actions = require("./actions");
          var _profileIcon = require("./components/profile-icon");
          var _errorsRenderer = require("./errors-renderer");
          var _systemActions = require("./system-actions");
          function MessageItemContainer({
            message,
            setUpdateScroll
          }) {
            const {
              showAvatar,
              texts,
              chat
            } = (0, _context.useChatMessagesContext)();
            const cls = `message__container message__container--${message.role}${showAvatar ? `has-avatar` : ''}`;
            const messageTokens = message.role === 'assistant' ? message.usage?.totalTokens : null;
            const ACTIONS = ['transcription', 'fetching-tool-data', 'kb-processed-response', 'function', 'kb-response'];
            const [, playableContent, actions] = (0, _playable.parseText)(message.id, message.content, ACTIONS);
            return _react.default.createElement("div", {
              className: cls,
              "data-id": message.id
            }, showAvatar && _react.default.createElement(_profileIcon.ProfileIcon, {
              role: message.role
            }), _react.default.createElement("section", {
              className: "message__content"
            }, _react.default.createElement(_systemActions.SystemActions, {
              actions: actions
            }), !message.error && _react.default.createElement(_item.Message, {
              message: message,
              setUpdateScroll: setUpdateScroll,
              texts: texts.message
            }), _react.default.createElement(_actions.MessageActions, {
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            }), _react.default.createElement(_errorsRenderer.ErrorsRenderer, {
              message: message
            })));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./message/system-actions/action
      ***********************************************/

      ims.set('./message/system-actions/action', {
        hash: 3020040988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Action = Action;
          var _react = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          function Action({
            last = false,
            texts,
            data: {
              type,
              data
            }
          }) {
            const mark = _markdown.useMarked;
            const {
              systemActions: actionsTexts
            } = texts;
            const Container = ({
              title,
              children
            }) => {
              const attrs = {
                className: `message-action ${type}${last ? ' last-action' : ''}`
              };
              const Container = last ? _collapsible.CollapsibleHeader : _react.default.Fragment;
              return _react.default.createElement("div", {
                ...attrs
              }, _react.default.createElement(Container, null, _react.default.createElement("header", null, _react.default.createElement("h4", null, title)), _react.default.createElement("section", {
                className: "detail__content"
              }, children)));
            };
            if (type === 'fetching-tool-data') {
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              });
            }
            if (type === 'kb-response') {
              const output = data.matches.map(item => _react.default.createElement("li", {
                key: item.id
              }, item.paragraph));
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              }, _react.default.createElement("ul", null, output));
            }
            if (type === 'kb-processed-response') {
              return _react.default.createElement(Container, {
                title: actionsTexts[type]
              }, _react.default.createElement("div", {
                dangerouslySetInnerHTML: {
                  __html: mark(data.response)
                }
              }));
            }
            if (type === 'transcription') {
              return _react.default.createElement(Container, {
                title: actionsTexts.transcription
              }, _react.default.createElement("p", null, data.transcription));
            }
            if (type === 'function' && data.name === 'kb') {
              try {
                const {
                  text
                } = JSON.parse(data.params);
                return _react.default.createElement(Container, {
                  title: actionsTexts.functions[data.name]
                }, _react.default.createElement("p", null, text));
              } catch (e) {
                console.error(e);
              }
            }
            return _react.default.createElement("div", {
              className: `message-action ${type}`
            }, type);
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./message/system-actions/index
      **********************************************/

      ims.set('./message/system-actions/index', {
        hash: 1485603025,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SystemActions = SystemActions;
          var _react = require("react");
          var _action = require("./action");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          function SystemActions({
            actions
          }) {
            if (!actions?.length) return null;
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            const last = actions[actions.length - 1];
            return _react.default.createElement("section", {
              className: "message-actions__container"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement(_action.Action, {
              data: last,
              last: true,
              texts: texts
            }), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("section", {
              className: "actions__log"
            }, actions.map((action, i) => _react.default.createElement(_action.Action, {
              texts: texts,
              key: `action-${i}`,
              data: action
            }))))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./message/use-message
      *************************************/

      ims.set('./message/use-message', {
        hash: 4237060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMessage = useMessage;
          var _react = require("react");
          var _context = require("../context");
          function useMessage(message) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [content, setContent] = _react.default.useState(message?.content ?? '');
            const {
              chat
            } = (0, _context.useChatMessagesContext)();
            _react.default.useEffect(() => {
              const onUpdate = () => {
                setFetching(true);
                setContent(message.content);
              };
              const onEnd = () => {
                setContent(message.content);
                setFetching(false);
              };
              chat.on(`message.${message.id}.updated`, onUpdate);
              chat.on(`message.${message.id}.ended`, onEnd);
              return () => {
                chat.off(`message.${message.id}.updated`, onUpdate);
                chat.off(`message.${message.id}.ended`, onEnd);
              };
            }, []);
            return {
              fetching,
              setFetching,
              content,
              setContent
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Messages",
        "name": "Messages"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./index').Messages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiX2Zvcm1hdEhvdXIiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicHJvY2Vzc2luZyIsInNwZWFraW5nIiwidGV4dElkIiwiaWQiLCJ1c2VTdG9yZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJmb3JtYXRIb3VyIiwidGltZXN0YW1wIiwiSWNvbkJ1dHRvbiIsIlBsYXllciIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1ZGlvIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfaW1hZ2UiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJJbWFnZSIsImFsdCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsInVzZUJpbmRlciIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX2JzIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJFcnJvcnNSZW5kZXJlciIsIm9uUmV0cnkiLCJyZXRyeSIsImVycm9yIiwiQWxlcnQiLCJlcnJvcnMiLCJCdXR0b24iLCJCc0Fycm93Q291bnRlcmNsb2Nrd2lzZSIsImFjdGlvbnMiLCJfZGF5anMiLCJub3ciLCJkYXRlIiwiaXNTYW1lRGF5IiwiaXNTYW1lIiwiaG91ciIsImZvcm1hdCIsIl9pdGVtIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfZXJyb3JzUmVuZGVyZXIiLCJfc3lzdGVtQWN0aW9ucyIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvdXRwdXQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiYWN0aW9uIiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy9tZXNzYWdlL2Zvcm1hdC1ob3VyLnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBRSxHQUNoQlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxDQUN4QixDQUNEO1VBRVIsQ0FBQztVQUFDSSxPQUFBLENBQUFQLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiRixJQUFBSixNQUFBLEdBQUFDLE9BQUE7VUFZTyxNQUFNVyxtQkFBbUIsR0FBQUQsT0FBQSxDQUFBQyxtQkFBQSxHQUFHWixNQUFBLENBQUFLLE9BQUssQ0FBQ1EsYUFBYSxDQUFDLEVBQTBCLENBQUM7VUFD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