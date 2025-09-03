System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.8/icons", "@aimpact/chat-sdk@1.5.5/components/icons", "@aimpact/chat-sdk@1.5.5/voice", "pragmate-ui@1.0.8/empty", "@aimpact/chat-sdk@1.5.5/shared/hooks", "pragmate-ui@1.0.8/toast", "@aimpact/chat-sdk@1.5.5/audio-player", "wavesurfer.js@7.9.4", "pragmate-ui@1.0.8/image", "@beyond-js/react-18-widgets@1.0.4/hooks", "react-icons@5.5.0/bs", "pragmate-ui@1.0.8/alert", "pragmate-ui@1.0.8/components", "dayjs@1.11.13", "@aimpact/chat-sdk@1.5.5/chat/messages/item", "@aimpact/chat-sdk@1.5.5/widgets/playable", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/collapsible", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
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
    }, function (_beyondJsKernel0112Styles) {
      dependency_20 = _beyondJsKernel0112Styles;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiX2Zvcm1hdEhvdXIiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicHJvY2Vzc2luZyIsInNwZWFraW5nIiwidGV4dElkIiwiaWQiLCJ1c2VTdG9yZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJmb3JtYXRIb3VyIiwidGltZXN0YW1wIiwiSWNvbkJ1dHRvbiIsIlBsYXllciIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1ZGlvIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfaW1hZ2UiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJJbWFnZSIsImFsdCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsInVzZUJpbmRlciIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX2JzIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJFcnJvcnNSZW5kZXJlciIsIm9uUmV0cnkiLCJyZXRyeSIsImVycm9yIiwiQWxlcnQiLCJlcnJvcnMiLCJCdXR0b24iLCJCc0Fycm93Q291bnRlcmNsb2Nrd2lzZSIsImFjdGlvbnMiLCJfZGF5anMiLCJub3ciLCJkYXRlIiwiaXNTYW1lRGF5IiwiaXNTYW1lIiwiaG91ciIsImZvcm1hdCIsIl9pdGVtIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfZXJyb3JzUmVuZGVyZXIiLCJfc3lzdGVtQWN0aW9ucyIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvdXRwdXQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiYWN0aW9uIiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi8vdHMvYW5zd2VyaW5nLnRzeCIsIi8vdHMvY29udGV4dC50cyIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiLy90cy9tZXNzYWdlL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi8vdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi8vdHMvbWVzc2FnZS9lcnJvcnMtcmVuZGVyZXIudHN4IiwiLy90cy9tZXNzYWdlL2Zvcm1hdC1ob3VyLnRzeCIsIi8vdHMvbWVzc2FnZS9pbmRleC50c3giLCIvL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi8vdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvL3RzL21lc3NhZ2UvdXNlLW1lc3NhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRFYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQUUsR0FDaEJQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsQ0FDeEIsQ0FDRDtVQUVSLENBQUM7VUFBQ0ksT0FBQSxDQUFBUCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkYsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBWU8sTUFBTVcsbUJBQW1CLEdBQUFELE9BQUEsQ0FBQUMsbUJBQUEsR0FBR1osTUFBQSxDQUFBSyxPQUFLLENBQUNRLGFBQWEsQ0FBQyxF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