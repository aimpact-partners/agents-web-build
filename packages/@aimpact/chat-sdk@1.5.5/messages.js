System.register(["@beyond-js/kernel@0.1.12/bundle", "react@18.3.1", "pragmate-ui@1.0.2/icons", "@aimpact/chat-sdk@1.5.5/components/icons", "@aimpact/chat-sdk@1.5.5/voice", "pragmate-ui@1.0.2/empty", "@aimpact/chat-sdk@1.5.5/shared/hooks", "pragmate-ui@1.0.2/toast", "@aimpact/chat-sdk@1.5.5/audio-player", "wavesurfer.js@7.9.4", "pragmate-ui@1.0.2/image", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@1.0.2/alert", "@aimpact/chat-sdk@1.5.5/chat/messages/item", "@aimpact/chat-sdk@1.5.5/widgets/playable", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.2/collapsible", "@beyond-js/kernel@0.1.12/styles"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, bimport, __Bundle, __pkg, ims, Messages, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk155ChatMessagesItem) {
      dependency_13 = _aimpactChatSdk155ChatMessagesItem;
    }, function (_aimpactChatSdk155WidgetsPlayable) {
      dependency_14 = _aimpactChatSdk155WidgetsPlayable;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_15 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi102Collapsible) {
      dependency_16 = _pragmateUi102Collapsible;
    }, function (_beyondJsKernel0112Styles) {
      dependency_17 = _beyondJsKernel0112Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["dompurify", "3.2.4"], ["firebase", "11.6.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.7"], ["prism-themes", "1.9.0"], ["prismjs", "1.30.0"], ["socket.io-client", "4.8.1"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["typescript", "5.8.2"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['react', dependency_1], ['pragmate-ui/icons', dependency_2], ['@aimpact/chat-sdk/components/icons', dependency_3], ['@aimpact/chat-sdk/voice', dependency_4], ['pragmate-ui/empty', dependency_5], ['@aimpact/chat-sdk/shared/hooks', dependency_6], ['pragmate-ui/toast', dependency_7], ['@aimpact/chat-sdk/audio-player', dependency_8], ['wavesurfer.js', dependency_9], ['pragmate-ui/image', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/alert', dependency_12], ['@aimpact/chat-sdk/chat/messages/item', dependency_13], ['@aimpact/chat-sdk/widgets/playable', dependency_14], ['@aimpact/chat-sdk/widgets/markdown', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@beyond-js/kernel/styles', dependency_17]]);
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
        hash: 3294865272,
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
            return _react.default.createElement("div", null, _react.default.createElement("div", {
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
            }, messageTokens, " TOKENS"));
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
        hash: 795451856,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorsRenderer = void 0;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _hooks = require("@aimpact/chat-sdk/shared/hooks");
          var _context = require("../context");
          const ErrorsRenderer = ({
            message
          }) => {
            (0, _hooks.useStore)(message, ['error.changed']);
            const {
              texts
            } = (0, _context.useChatMessagesContext)();
            if (!message.error) return null;
            const error = message.error;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_alert.Alert, {
              type: "error"
            }, texts.errors.default));
          };
          exports.ErrorsRenderer = ErrorsRenderer;
        }
      });

      /*******************************
      INTERNAL MODULE: ./message/index
      *******************************/

      ims.set('./message/index', {
        hash: 2496720538,
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
            // const { fetching } = useMessage(message);
            const {
              showAvatar,
              texts
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
            }), _react.default.createElement("section", {
              className: "message__actions"
            }, _react.default.createElement(_actions.MessageActions, {
              message: message,
              text: playableContent,
              messageTokens: messageTokens
            })), _react.default.createElement(_errorsRenderer.ErrorsRenderer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ljb25zIiwiX2ljb25zMiIsIlN5c3RlbUFuc3dlcmluZyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsImljb24iLCJJQ09OUyIsImV4cG9ydHMiLCJDaGF0TWVzc2FnZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNoYXRNZXNzYWdlc0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiX21lc3NhZ2UiLCJfZW1wdHkiLCJfY29udGV4dCIsIk1lc3NhZ2VzIiwicHJvcHMiLCJjaGF0IiwicGxheWVyIiwic2hvd0F2YXRhciIsIm1lc3NhZ2VzIiwidGV4dHMiLCJjdXJyZW50Iiwic3lzdGVtSWNvbiIsInNldFVwZGF0ZVNjcm9sbCIsImN1cnJlbnRNZXNzYWdlIiwic2V0Q3VycmVudE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJFbXB0eSIsInRleHQiLCJlbXB0eSIsIm1lc3NhZ2VJdGVtcyIsIm1hcCIsIm1lc3NhZ2UiLCJpIiwiTWVzc2FnZUl0ZW1Db250YWluZXIiLCJrZXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiX2hvb2tzIiwiX3RvYXN0IiwiTWVzc2FnZUFjdGlvbnMiLCJtZXNzYWdlVG9rZW5zIiwicGxheSIsInByb2Nlc3NpbmciLCJzcGVha2luZyIsInRleHRJZCIsImlkIiwidXNlU3RvcmUiLCJvblBsYXkiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRlbnQiLCJwb3NpdGlvblRvQ3V0IiwicGFyc2VkVGV4dCIsInJlcGxhY2VBbGwiLCJ0cmltIiwib25QYXVzZSIsImxpc3RlbiIsInN0b3AiLCJjb3B5TWVzc2FnZSIsImdsb2JhbFRoaXMiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJvbkNsaWNrIiwic3RyZWFtaW5nIiwiSWNvbkJ1dHRvbiIsIlBsYXllciIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImF1ZGlvIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImR1cmF0aW9uIiwiSW5maW5pdHkiLCJjdXJyZW50VGltZSIsIm9udGltZXVwZGF0ZSIsImNvbnRyb2xzIiwicHJlbG9hZCIsInR5cGUiLCJfaW1hZ2UiLCJQcm9maWxlSWNvbiIsInJvbGUiLCJsb2FkRXJyb3IiLCJzZXRMb2FkRXJyb3IiLCJ1c2VyUHJvcHMiLCJ1c2VyIiwiaGFuZGxlTG9hZEVycm9yIiwicGhvdG9VUkwiLCJJbWFnZSIsImFsdCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9hdWRpb1BsYXllciIsIk1lc3NhZ2VUZXh0IiwicGxheWFibGUiLCJmZXRjaGluZyIsImF1dG9wbGF5IiwicmVtb3ZlSGlnaGxpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2V0VGV4dCIsInVzZUJpbmRlciIsIm9uQ2xpY2tXb3JkIiwiY2FuQmVQbGF5ZWQiLCJhdXRvcGxheVZhbHVlIiwiX2FsZXJ0IiwiRXJyb3JzUmVuZGVyZXIiLCJlcnJvciIsIkFsZXJ0IiwiZXJyb3JzIiwiX2l0ZW0iLCJfcGxheWFibGUiLCJfYWN0aW9ucyIsIl9wcm9maWxlSWNvbiIsIl9zeXN0ZW1BY3Rpb25zIiwiX2Vycm9yc1JlbmRlcmVyIiwiY2xzIiwidXNhZ2UiLCJ0b3RhbFRva2VucyIsIkFDVElPTlMiLCJwbGF5YWJsZUNvbnRlbnQiLCJhY3Rpb25zIiwicGFyc2VUZXh0IiwiU3lzdGVtQWN0aW9ucyIsIk1lc3NhZ2UiLCJfbWFya2Rvd24iLCJfY29sbGFwc2libGUiLCJBY3Rpb24iLCJsYXN0IiwiZGF0YSIsIm1hcmsiLCJ1c2VNYXJrZWQiLCJzeXN0ZW1BY3Rpb25zIiwiYWN0aW9uc1RleHRzIiwiQ29udGFpbmVyIiwidGl0bGUiLCJjaGlsZHJlbiIsImF0dHJzIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvdXRwdXQiLCJtYXRjaGVzIiwiaXRlbSIsInBhcmFncmFwaCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVzcG9uc2UiLCJ0cmFuc2NyaXB0aW9uIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInBhcmFtcyIsImZ1bmN0aW9ucyIsImUiLCJjb25zb2xlIiwiX2FjdGlvbiIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiYWN0aW9uIiwidXNlTWVzc2FnZSIsInNldEZldGNoaW5nIiwic2V0Q29udGVudCIsIm9uVXBkYXRlIiwib25FbmQiLCJvbiIsIm9mZiJdLCJzb3VyY2VzIjpbIi90cy9hbnN3ZXJpbmcudHN4IiwiL3RzL2NvbnRleHQudHMiLCIvdHMvaW5kZXgudHN4IiwiL3RzL21lc3NhZ2UvYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL2F1ZGlvLXBsYXllci50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3Byb2ZpbGUtaWNvbi50c3giLCIvdHMvbWVzc2FnZS9jb21wb25lbnRzL3RleHQudHN4IiwiL3RzL21lc3NhZ2UvZXJyb3JzLXJlbmRlcmVyLnRzeCIsIi90cy9tZXNzYWdlL2luZGV4LnRzeCIsIi90cy9tZXNzYWdlL3N5c3RlbS1hY3Rpb25zL2FjdGlvbi50c3giLCIvdHMvbWVzc2FnZS9zeXN0ZW0tYWN0aW9ucy9pbmRleC50c3giLCIvdHMvbWVzc2FnZS91c2UtbWVzc2FnZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFB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