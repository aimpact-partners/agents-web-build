System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.2/icons", "@aimpact/chat-sdk@1.5.5/components/icons", "@aimpact/chat-sdk@1.5.5/voice", "pragmate-ui@1.0.2/empty", "@aimpact/chat-sdk@1.5.5/shared/hooks", "pragmate-ui@1.0.2/toast", "@aimpact/chat-sdk@1.5.5/audio-player", "wavesurfer.js@7.9.4", "pragmate-ui@1.0.2/image", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.2/alert", "pragmate-ui@1.0.2/components", "react-icons@5.5.0/bs", "dayjs@1.11.13", "@aimpact/chat-sdk@1.5.5/chat/messages/item", "@aimpact/chat-sdk@1.5.5/widgets/playable", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.2/collapsible", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
  _export("Messages", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_react2) {
      dependency_1 = _react2;
    }, function (_pragmateUi102Icons) {
      dependency_2 = _pragmateUi102Icons;
    }, function (_aimpactChatSdk155ComponentsIcons) {
      dependency_3 = _aimpactChatSdk155ComponentsIcons;
    }, function (_aimpactChatSdk155Voice) {
      dependency_4 = _aimpactChatSdk155Voice;
    }, function (_pragmateUi102Empty) {
      dependency_5 = _pragmateUi102Empty;
    }, function (_aimpactChatSdk155SharedHooks) {
      dependency_6 = _aimpactChatSdk155SharedHooks;
    }, function (_pragmateUi102Toast) {
      dependency_7 = _pragmateUi102Toast;
    }, function (_aimpactChatSdk155AudioPlayer) {
      dependency_8 = _aimpactChatSdk155AudioPlayer;
    }, function (_wavesurferJs) {
      dependency_9 = _wavesurferJs;
    }, function (_pragmateUi102Image) {
      dependency_10 = _pragmateUi102Image;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_11 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi102Alert) {
      dependency_12 = _pragmateUi102Alert;
    }, function (_pragmateUi102Components) {
      dependency_13 = _pragmateUi102Components;
    }, function (_reactIcons550Bs) {
      dependency_14 = _reactIcons550Bs;
    }, function (_dayjs2) {
      dependency_15 = _dayjs2;
    }, function (_aimpactChatSdk155ChatMessagesItem) {
      dependency_16 = _aimpactChatSdk155ChatMessagesItem;
    }, function (_aimpactChatSdk155WidgetsPlayable) {
      dependency_17 = _aimpactChatSdk155WidgetsPlayable;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_18 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi102Collapsible) {
      dependency_19 = _pragmateUi102Collapsible;
    }, function (_beyondJsKernel0112Styles) {
      dependency_20 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dayjs", "1.11.13"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "14.1.4"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["react-icons", "5.5.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['@aimpact/chat-sdk/voice', dependency_4], ['pragmate-ui/empty', dependency_5], ['@aimpact/chat-sdk/shared/hooks', dependency_6], ['pragmate-ui/toast', dependency_7], ['@aimpact/chat-sdk/audio-player', dependency_8], ['wavesurfer.js', dependency_9], ['pragmate-ui/image', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/alert', dependency_12], ['pragmate-ui/components', dependency_13], ['react-icons/bs', dependency_14], ['dayjs', dependency_15], ['@aimpact/chat-sdk/chat/messages/item', dependency_16], ['@aimpact/chat-sdk/widgets/playable', dependency_17], ['@aimpact/chat-sdk/widgets/markdown', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['@beyond-js/kernel/styles', dependency_20]]);
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
        hash: 2449423446,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _alert = require("pragmate-ui/alert");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _bs = require("react-icons/bs");
          var _context = require("../context");
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
        hash: 3670383924,
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
          var _systemActions = require("./system-actions");
          var _errorsRenderer = require("./errors-renderer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiX2Zvcm1hdEhvdXIiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicHJvY2Vzc2luZyIsInNwZWFraW5nIiwidGV4dElkIiwiaWQiLCJ1c2VTdG9yZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJmb3JtYXRIb3VyIiwidGltZXN0YW1wIiwiSWNvbkJ1dHRvbiIsIlBsYXllciIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1ZGlvIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfaW1hZ2UiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJJbWFnZSIsImFsdCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsInVzZUJpbmRlciIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfYnMiLCJFcnJvcnNSZW5kZXJlciIsIm9uUmV0cnkiLCJyZXRyeSIsImVycm9yIiwiQWxlcnQiLCJlcnJvcnMiLCJCdXR0b24iLCJCc0Fycm93Q291bnRlcmNsb2Nrd2lzZSIsImFjdGlvbnMiLCJfZGF5anMiLCJub3ciLCJkYXRlIiwiaXNTYW1lRGF5IiwiaXNTYW1lIiwiaG91ciIsImZvcm1hdCIsIl9pdGVtIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIl9lcnJvcnNSZW5kZXJlciIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvdXRwdXQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiYWN0aW9uIiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy9tZXNzYWdlL2Zvcm1hdC1ob3VyLnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7VUFFTyxNQUFNRyxlQUFlLEdBQUdBLENBQUEsS0FBSztZQUNuQyxPQUNDSixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBbUIsR0FDakNQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQU0sSUFBSTtjQUFDRCxTQUFTLEVBQUMsSUFBSTtjQUFDRSxJQUFJLEVBQUVOLE9BQUEsQ0FBQU8sS0FBSyxDQUFDLFlBQVk7WUFBQyxFQUFJLEVBQ2xEVixNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBRSxHQUNoQlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxFQUM3QlAsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBTUMsU0FBUyxFQUFDO1lBQUssRUFBUSxDQUN4QixDQUNEO1VBRVIsQ0FBQztVQUFDSSxPQUFBLENBQUFQLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiRixJQUFBSixNQUFBLEdBQUFDLE9BQUE7VUFZTyxNQUFNVyxtQkFBbUIsR0FBQUQsT0FBQSxDQUFBQyxtQkFBQSxHQUFHWixNQUFBLENBQUFLLE9BQUssQ0FBQ1EsYUFBYSxDQUFDLEVBQTBCLENBQUM7VUFD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