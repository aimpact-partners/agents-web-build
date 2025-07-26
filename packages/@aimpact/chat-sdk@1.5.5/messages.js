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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiX2Zvcm1hdEhvdXIiLCJNZXNzYWdlQWN0aW9ucyIsIm1lc3NhZ2VUb2tlbnMiLCJwbGF5IiwicHJvY2Vzc2luZyIsInNwZWFraW5nIiwidGV4dElkIiwiaWQiLCJ1c2VTdG9yZSIsIm9uUGxheSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGVudCIsInBvc2l0aW9uVG9DdXQiLCJwYXJzZWRUZXh0IiwicmVwbGFjZUFsbCIsInRyaW0iLCJvblBhdXNlIiwibGlzdGVuIiwic3RvcCIsImNvcHlNZXNzYWdlIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRvYXN0Iiwic3VjY2VzcyIsIm9uQ2xpY2siLCJzdHJlYW1pbmciLCJmb3JtYXRIb3VyIiwidGltZXN0YW1wIiwiSWNvbkJ1dHRvbiIsIlBsYXllciIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1ZGlvIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfaW1hZ2UiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJJbWFnZSIsImFsdCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsInVzZUJpbmRlciIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX2FsZXJ0IiwiX2NvbXBvbmVudHMiLCJfYnMiLCJFcnJvcnNSZW5kZXJlciIsIm9uUmV0cnkiLCJyZXRyeSIsImVycm9yIiwiQWxlcnQiLCJlcnJvcnMiLCJCdXR0b24iLCJCc0Fycm93Q291bnRlcmNsb2Nrd2lzZSIsImFjdGlvbnMiLCJfZGF5anMiLCJub3ciLCJkYXRlIiwiaXNTYW1lRGF5IiwiaXNTYW1lIiwiaG91ciIsImZvcm1hdCIsIl9pdGVtIiwiX3BsYXlhYmxlIiwiX2FjdGlvbnMiLCJfcHJvZmlsZUljb24iLCJfc3lzdGVtQWN0aW9ucyIsIl9lcnJvcnNSZW5kZXJlciIsImNscyIsInVzYWdlIiwidG90YWxUb2tlbnMiLCJBQ1RJT05TIiwicGxheWFibGVDb250ZW50IiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvdXRwdXQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiYWN0aW9uIiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi8vdHMvYW5zd2VyaW5nLnRzeCIsIi8vdHMvY29udGV4dC50cyIsIi8vdHMvaW5kZXgudHN4IiwiLy90cy9tZXNzYWdlL2FjdGlvbnMvaW5kZXgudHN4IiwiLy90cy9tZXNzYWdlL2NvbXBvbmVudHMvYXVkaW8tcGxheWVyLnRzeCIsIi8vdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvL3RzL21lc3NhZ2UvY29tcG9uZW50cy90ZXh0LnRzeCIsIi8vdHMvbWVzc2FnZS9lcnJvcnMtcmVuZGVyZXIudHN4IiwiLy90cy9tZXNzYWdlL2Zvcm1hdC1ob3VyLnRzeCIsIi8vdHMvbWVzc2FnZS9pbmRleC50c3giLCIvL3RzL21lc3NhZ2Uvc3lzdGVtLWFjdGlvbnMvYWN0aW9uLnRzeCIsIi8vdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvL3RzL21lc3NhZ2UvdXNlLW1lc3NhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRU8sTUFBTUcsZUFBZSxHQUFHQSxDQUFBLEtBQUs7WUFDbkMsT0FDQ0osTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQW1CLEdBQ2pDUCxNQUFBLENBQUFLLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSixNQUFBLENBQUFNLElBQUk7Y0FBQ0QsU0FBUyxFQUFDLElBQUk7Y0FBQ0UsSUFBSSxFQUFFTixPQUFBLENBQUFPLEtBQUssQ0FBQyxZQUFZO1lBQUMsRUFBSSxFQUNsRFYsTUFBQSxDQUFBSyxPQUFBLENBQUFDLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQUUsR0FDaEJQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsRUFDN0JQLE1BQUEsQ0FBQUssT0FBQSxDQUFBQyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFLLEVBQVEsQ0FDeEIsQ0FDRDtVQUVSLENBQUM7VUFBQ0ksT0FBQSxDQUFBUCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkYsSUFBQUosTUFBQSxHQUFBQyxPQUFBO1VBWU8sTUFBTVcsbUJBQW1CLEdBQUFELE9BQUEsQ0FBQUMsbUJBQUEsR0FBR1osTUFBQSxDQUFBSyxPQUFLLENBQUNRLGFBQWEsQ0FBQyxF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