System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/model", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/kernel@0.1.12/core", "uuid@11.1.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Chats, IChatProperties, IChat, Chat, Messages, Message, __beyond_pkg, hmr;
  _export({
    Chats: void 0,
    IChatProperties: void 0,
    IChat: void 0,
    Chat: void 0,
    Messages: void 0,
    Message: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_2 = _beyondJsHttpSuite011Api;
    }, function (_aimpactChatSdk155Session) {
      dependency_3 = _aimpactChatSdk155Session;
    }, function (_aimpactChatSdk155Startup) {
      dependency_4 = _aimpactChatSdk155Startup;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_5 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_6 = _beyondJsReactive211EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
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
          "vspecifier": "@aimpact/chat-sdk@1.5.5/core"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/chat-sdk/session', dependency_3], ['@aimpact/chat-sdk/startup', dependency_4], ['@beyond-js/reactive/entities/collection', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['uuid', dependency_8]]);
      ims = new Map();
      /****************************************
      INTERNAL MODULE: ./chats/collection/index
      ****************************************/
      ims.set('./chats/collection/index', {
        hash: 1436428000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chats = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/
          class Chats extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            #items = [];
            get items() {
              return this.#items;
            }
            async load() {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats`);
              if (!status) {
                throw new Error('error loading chat');
              }
              this.#items = data.items;
              return {
                status,
                data
              };
            }
            async addItem(item) {
              this.#items.unshift(item);
              this.triggerEvent('change');
            }
          }
          exports.Chats = Chats;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./chats/collection/provider
      *******************************************/

      ims.set('./chats/collection/provider', {
        hash: 1443553202,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatCollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          class ChatCollectionProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async list() {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats`);
              if (!status) {
                throw new Error('error loading chat');
              }
              return {
                status,
                data
              };
            }
          }
          exports.ChatCollectionProvider = ChatCollectionProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./chats/interfaces/chat
      ***************************************/

      ims.set('./chats/interfaces/chat', {
        hash: 3087653661,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************************
      INTERNAL MODULE: ./chats/interfaces/message
      ******************************************/

      ims.set('./chats/interfaces/message', {
        hash: 2579787146,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************
      INTERNAL MODULE: ./chats/item/index
      **********************************/

      ims.set('./chats/item/index', {
        hash: 1707958486,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Chat = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _core = require("@beyond-js/kernel/core");
          var _api = require("@beyond-js/http-suite/api");
          var _item2 = require("../messages/item");
          var _messages = require("../messages");
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _provider = require("./provider");
          var _uuid = require("uuid");
          /*bundle*/ // ChatItem

          class Chat extends _item.Item {
            #api;
            get api() {
              return this.#api;
            }
            #errors = [];
            get errors() {
              return this.#errors;
            }
            #currentMessage;
            #response;
            #messages;
            #metaDataStarted = false;
            get metaDataStarted() {
              return this.#metaDataStarted;
            }
            get messages() {
              return this.#messages;
            }
            constructor({
              id = undefined,
              server = undefined,
              ...specs
            } = {}) {
              super({
                id,
                entity: 'Chat',
                ...specs,
                properties: ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'user', 'children', 'knowledgeBoxId', 'metadata', 'transcribing'],
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(server || _startup.sdkConfig.api);
              globalThis.chat = this;
              if (!id) this.id = (0, _uuid.v4)();
              this.#listen();
              this.#messages = new _messages.Messages({
                chatId: this.id
              });
              this.#messages.on('new.message', () => {
                this.trigger('new.message');
              });
              // console.log(`chat is being exposed in console as chat`, id);
            }
            #listen = () => {
              this.#api.on('stream.response', this.#onListen);
              this.#api.on('metadata.started', () => {
                this.#metaDataStarted = true;
                if (this.#response) {
                  this.#response.set({
                    streaming: false
                  });
                }
                this.trigger('metadata.started');
              });
              this.#api.on('action.received', data => {
                if (data) {
                  try {
                    const parsed = JSON.parse(data);
                    this.trigger('action.received', parsed.metadata);
                  } catch (e) {
                    console.warn('the data coudnt be parsed', data);
                  }
                }
                try {
                  if (this.#api.actions) {
                    this.#api.actions.forEach(data => {
                      const action = JSON.parse(data);
                      if (action.type === 'transcription') {
                        this.#currentMessage.set({
                          content: action.data.transcription,
                          streaming: false
                        });
                        //once the transcription is received, we add the system message to the chat
                        if (this.#response && !this.#messages.has(this.#response.id)) this.messages.add(this.#response);
                      }
                    });
                  }
                  // const action = JSON.parse(this.#api.actions);
                } catch (e) {
                  console.error(e);
                }
              });
            };
            loadAll = async specs => {
              const response = await super.load(specs);
              const collection = this.#messages;
              collection.on('change', this.triggerEvent);
              if (response.messages?.length) {
                await collection.setEntries(response.messages);
              }
              this.ready = true;
              this.trigger('change');
              this.#messages = collection;
            };
            load = specs => this.loadAll(specs);
            #onListen = () => {
              if (!this.#response) return;
              this.#response.content = this.#api.streamResponse;
              this.#response.set({
                content: this.#api.stringContent,
                actions: this.#api.actions
              });
              // this.#response.publish();
              this.trigger('content.updated');
            };
            getData() {
              const properties = this.getProperties();
              properties.messages = this.#messages.getData();
              return properties;
            }
            async sendMessage(content) {
              try {
                this.fetching = true;
                const item = new _item2.Message({
                  chatId: this.id,
                  role: 'user',
                  content
                });
                this.#currentMessage = item;
                this.messages.add(item);
                // Create response message
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                this.messages.add(this.#response);
                // Execute the API call
                await this.#executeMessageCall(item);
                return item;
              } catch (e) {
                throw e;
              } finally {
                this.fetching = false;
              }
            }
            async retry(id) {
              try {
                // Get the message by index
                const message = this.#messages.get(id);
                // console.log(1, 'we are retrying', message);
                if (!message) {
                  throw new Error(`Message with id ${id} not found`);
                }
                // Clear any previous error
                // message.set({ error: undefined });
                // Set as current message
                this.#currentMessage = message;
                // Create response message if it doesn't exist
                // console.log(0.2, this.#response);
                if (!this.#response) {
                  this.#response = new _item2.Message({
                    chatId: this.id,
                    role: 'system',
                    streaming: true
                  });
                  this.messages.add(this.#response);
                } else {
                  // Reset response message
                  this.#response.set({
                    streaming: true,
                    error: undefined
                  });
                }
                // Execute the API call
                await this.#executeMessageCall(message);
              } catch (e) {
                console.error(`Error in retry method:`, e);
                throw e;
              }
            }
            async #executeMessageCall(item) {
              const token = await _session.sessionWrapper.user.firebaseToken;
              const uri = `/chats/${this.id}/messages`;
              const promise = new _core.PendingPromise();
              const onFinish = async response => {
                this.trigger('response.finished');
                if (this.#response) {
                  await this.#response.set({
                    streaming: false
                  });
                  this.#response = undefined;
                }
                promise.resolve();
              };
              const onError = e => {
                this.#errors.push(e);
                if (this.#response) {
                  this.#response.set({
                    error: e
                  });
                }
                promise.reject(e);
              };
              try {
                await this.#api.bearer(token).stream(uri, {
                  ...item.getProperties()
                }).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                onError(e);
                throw e;
              }
            }
            async sendAudio(message) {
              try {
                this.fetching = true;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const uri = `/chats/${this.id}/messages/audio`;
                const promise = new _core.PendingPromise();
                const item = new _item2.Message({
                  chatId: this.id,
                  audio: message,
                  role: 'user',
                  streaming: true,
                  transcribing: true
                });
                this.#currentMessage = item;
                const onFinish = async response => {
                  if (response) {
                    await this.#response.set({
                      streaming: false,
                      transcribing: false
                    });
                    this.trigger('response.finished');
                  }
                  promise.resolve(item);
                  // this.#offEvents();
                };
                const onError = e => {
                  this.#errors.push(e);
                  if (this.#response) {
                    this.#response.set({
                      error: e
                    });
                  }
                  promise.reject(e);
                };
                this.messages.add(item);
                this.#response = new _item2.Message({
                  chatId: this.id,
                  role: 'system',
                  streaming: true
                });
                const specs = {
                  ...item.getProperties(),
                  audio: new File([item.audio], 'audio.mp4', {
                    type: 'audio/mp4'
                  }),
                  multipart: true
                };
                this.#api.bearer(token).stream(uri, specs).then(onFinish).catch(onError);
                return promise;
              } catch (e) {
                throw new Error(e);
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async transcribe(audio) {
              try {
                const uri = `/audios/transcribe`;
                const token = await _session.sessionWrapper.user.firebaseToken;
                const response = await this.#api.bearer(token).post(uri, {
                  multipart: true,
                  audio: audio
                });
                return response;
              } catch (e) {
                //todo: how to handle other kind of errors
                throw e;
              }
            }
            getMessage(id) {
              return this.#messages.get(id);
            }
            response(data) {
              return {
                status: true,
                data
              };
            }
            async create(options) {
              const response = await this.#api.post('/chats', {
                id: this.id,
                name: options?.name || this.name || 'My chat',
                projectId: options?.projectId || '02d991dd-8d57-42f3-b155-8e7133482c19',
                uid: options?.userId || this.userId || _session.sessionWrapper.user.id,
                system: options?.system || this.system || '',
                parent: options?.parent || this.parent || '',
                category: options?.category || this.category || 'general',
                metadata: {
                  prompt: 'topic-q&a',
                  ...options?.metadata,
                  ...this.metadata
                },
                language: options?.language || this.language || {
                  default: 'es'
                }
              });
              this.set(response.data);
            }
            /**
             * Static factory method to create a new chat instance
             * Follows the Factory pattern for better object creation
             *
             * @param options - Configuration options for the chat
             * @returns Promise<Chat> - A new chat instance
             *
             * @example
             * ```typescript
             * // Create a basic chat
             * const chat = await Chat.create({
             *   name: 'My New Chat',
             *   language: { default: 'es' }
             * });
             *
             * // Create a chat with custom metadata
             * const chat = await Chat.create({
             *   name: 'Technical Discussion',
             *   system: 'You are a helpful technical assistant',
             *   metadata: { topic: 'programming', difficulty: 'advanced' }
             * });
             * ```
             */
            static async create(options = {}) {
              try {
                // Validate required session
                if (!_session.sessionWrapper.user?.id) {
                  throw new Error('User session is required to create a chat');
                }
                if (!options.projectId) {
                  throw new Error('Project ID is required to create a chat');
                }
                /**
                 * uid: user.uid,
                projectId: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: '',
                language: { default: 'es' },
                metadata: {}
                 */
                // Set default values
                const defaultOptions = {
                  name: 'New Chat',
                  userId: _session.sessionWrapper.user.id,
                  language: {
                    default: _core.languages.default
                  },
                  projectId: options.projectId,
                  metadata: {},
                  ...options
                };
                // Create chat instance
                const chat = new Chat({
                  id: (0, _uuid.v4)(),
                  ...defaultOptions
                });
                // Create the chat on the server
                await chat.create(defaultOptions);
                return chat;
              } catch (error) {
                throw new Error(`Failed to create chat: ${error.message}`);
              }
            }
          }
          exports.Chat = Chat;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/item/provider
      *************************************/

      ims.set('./chats/item/provider', {
        hash: 1034353935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          class ChatProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#api.bearer(token);
              const {
                status,
                data
              } = await this.#api.get(`/chats/${this.#parent.id}`);
              if (!status) {
                throw new Error('error loading chat');
              }
              return data;
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./chats/messages/index
      **************************************/

      ims.set('./chats/messages/index', {
        hash: 1230943583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Messages = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _item = require("./item");
          /*bundle*/ // import { MessageProvider } from '@aimpact/chat-api/provider';

          class Messages extends _model.ReactiveModel {
            item = _item.Message;
            #items = [];
            #map = new Map();
            get items() {
              return this.#items;
            }
            #id;
            constructor({
              chatId
            }) {
              super();
              this.#id = chatId;
            }
            setEntries(data) {
              this.#items = data.map(item => {
                const message = new _item.Message(item);
                this.#map.set(message.id, message);
                return message;
              });
            }
            get(id) {
              return this.#map.get(id);
            }
            add(item) {
              this.#items.push(item);
              this.#map.set(item.id, item);
              this.trigger('new.message');
            }
            addTestMessage() {
              const message = new _item.Message({
                chatId: this.#id,
                role: 'system',
                streaming: true
              });
              this.add(message);
              const baseText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
              const repeatedText = baseText.repeat(5);
              const words = repeatedText.split(' ');
              let currentContent = '';
              let index = 0;
              const interval = setInterval(() => {
                if (index >= words.length) {
                  clearInterval(interval);
                  return;
                }
                currentContent += words[index] + ' ';
                message.set({
                  content: currentContent
                });
                index++;
              }, 100); // Add a new word every 100ms
            }
            getData() {
              return this.#items.map(item => item.getProperties());
            }
            has(id) {
              return this.#map.has(id);
            }
          }
          exports.Messages = Messages;
        }
      });

      /*************************************
      INTERNAL MODULE: ./chats/messages/item
      *************************************/

      ims.set('./chats/messages/item', {
        hash: 2875222538,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Message = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _uuid = require("uuid");
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          /*bundle*/ // ChatItem

          class Message extends _model.ReactiveModel {
            #api;
            #response = '';
            //#endregion
            #chat;
            localFields = ['audio'];
            #parsedContent;
            get response() {
              return this.#response;
            }
            #type;
            get type() {
              return this.#type;
            }
            #previous;
            get previous() {
              return this.#previous;
            }
            set previous(value) {
              if (value === this.#previous) return;
              this.#previous = value;
              this.trigger('previous.changed');
            }
            constructor({
              id = undefined,
              chat,
              ...specs
            }) {
              super({
                id,
                ...specs,
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'usage', 'timestamp', 'streaming', 'transcribing', 'actions']
              });
              this.#chat = chat;
              if (!id) this.id = (0, _uuid.v4)();
              const api = new _api.Api(_startup.sdkConfig.api);
              this.#api = api;
              this.#type = specs.type ?? 'message';
              this.reactiveProps(['autoplay']);
              super.ready = true;
            }
          }
          //
          exports.Message = Message;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./chats/collection/index",
        "from": "Chats",
        "name": "Chats"
      }, {
        "im": "./chats/interfaces/chat",
        "from": "IChatProperties",
        "name": "IChatProperties"
      }, {
        "im": "./chats/interfaces/chat",
        "from": "IChat",
        "name": "IChat"
      }, {
        "im": "./chats/item/index",
        "from": "Chat",
        "name": "Chat"
      }, {
        "im": "./chats/messages/index",
        "from": "Messages",
        "name": "Messages"
      }, {
        "im": "./chats/messages/item",
        "from": "Message",
        "name": "Message"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Chats') && _export("Chats", Chats = require ? require('./chats/collection/index').Chats : value);
        (require || prop === 'IChatProperties') && _export("IChatProperties", IChatProperties = require ? require('./chats/interfaces/chat').IChatProperties : value);
        (require || prop === 'IChat') && _export("IChat", IChat = require ? require('./chats/interfaces/chat').IChat : value);
        (require || prop === 'Chat') && _export("Chat", Chat = require ? require('./chats/item/index').Chat : value);
        (require || prop === 'Messages') && _export("Messages", Messages = require ? require('./chats/messages/index').Messages : value);
        (require || prop === 'Message') && _export("Message", Message = require ? require('./chats/messages/item').Message : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImVycm9ycyIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsIm1ldGFEYXRhU3RhcnRlZCIsImlkIiwidW5kZWZpbmVkIiwic2VydmVyIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJzZXQiLCJzdHJlYW1pbmciLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIk1lc3NhZ2UiLCJyb2xlIiwiZXhlY3V0ZU1lc3NhZ2VDYWxsIiwicmV0cnkiLCJtZXNzYWdlIiwiI2V4ZWN1dGVNZXNzYWdlQ2FsbCIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJwdXNoIiwicmVqZWN0Iiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwiYXVkaW8iLCJ0cmFuc2NyaWJpbmciLCJGaWxlIiwibXVsdGlwYXJ0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwib3B0aW9ucyIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJ1c2VySWQiLCJzeXN0ZW0iLCJjYXRlZ29yeSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImRlZmF1bHRPcHRpb25zIiwibGFuZ3VhZ2VzIiwibWFwIiwiTWFwIiwiYWRkVGVzdE1lc3NhZ2UiLCJiYXNlVGV4dCIsInJlcGVhdGVkVGV4dCIsInJlcGVhdCIsIndvcmRzIiwic3BsaXQiLCJjdXJyZW50Q29udGVudCIsImluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJwcmV2aW91cyIsInJlYWN0aXZlUHJvcHMiXSwic291cmNlcyI6WyIvL2NoYXRzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvL2NoYXRzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvL2NoYXQudHMvIiwiLy9tZXNzYWdlLnRzLyIsIi8vY2hhdHMvaXRlbS9pbmRleC50cyIsIi8vY2hhdHMvaXRlbS9wcm92aWRlci50cyIsIi8vY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvL2NoYXRzL21lc3NhZ2VzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFBT0ksS0FBTSxTQUFRTCxNQUFBLENBQUFNLGFBQW9CO1lBQ3pELENBQUFDLEdBQUk7WUFFSkMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBRCxHQUFJLEdBQUcsSUFBSUwsSUFBQSxDQUFBTyxHQUFHLENBQUNMLFFBQUEsQ0FBQU0sU0FBUyxDQUFDSCxHQUFHLENBQUM7WUFDbkM7WUFFQSxDQUFBSSxLQUFNLEdBQVUsRUFBRTtZQUNsQixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLE1BQU1DLElBQUlBLENBQUE7Y0FDVCxNQUFNQyxLQUFLLEdBQUcsTUFBTVYsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtjQUNyRCxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDVSxNQUFNLENBQUNKLEtBQUssQ0FBQztjQUN2QixNQUFNO2dCQUFFSyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBWixHQUFJLENBQUNhLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDdEQsSUFBSSxDQUFDRixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBRXRDLElBQUksQ0FBQyxDQUFBVixLQUFNLEdBQUdRLElBQUksQ0FBQ1IsS0FBSztjQUV4QixPQUFPO2dCQUFFTyxNQUFNO2dCQUFFQztjQUFJLENBQUU7WUFDeEI7WUFFQSxNQUFNRyxPQUFPQSxDQUFDQyxJQUFJO2NBQ2pCLElBQUksQ0FBQyxDQUFBWixLQUFNLENBQUNhLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDO2NBQ3pCLElBQUksQ0FBQ0UsWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1Qjs7VUFDQUMsT0FBQSxDQUFBckIsS0FBQSxHQUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hDRCxJQUFBSCxJQUFBLEdBQUFELE9BQUE7VUFJQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDTSxNQUFPMEIsc0JBQXNCO1lBQ2xDLENBQUFwQixHQUFJO1lBQ0osQ0FBQXFCLE1BQU87WUFFUHBCLFlBQVlvQixNQUFhO2NBQ3hCLElBQUksQ0FBQyxDQUFBckIsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBQ2xDLElBQUksQ0FBQyxDQUFBcUIsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQTtjQUNULE1BQU1oQixLQUFLLEdBQUcsTUFBTVYsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQ0MsYUFBYTtjQUNyRCxJQUFJLENBQUMsQ0FBQVQsR0FBSSxDQUFDVSxNQUFNLENBQUNKLEtBQUssQ0FBQztjQUN2QixNQUFNO2dCQUFFSyxNQUFNO2dCQUFFQztjQUFJLENBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFBWixHQUFJLENBQUNhLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDdEQsSUFBSSxDQUFDRixNQUFNLEVBQUU7Z0JBQ1osTUFBTSxJQUFJRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBRXRDLE9BQU87Z0JBQUVILE1BQU07Z0JBQUVDO2NBQUksQ0FBRTtZQUN4Qjs7VUFDQU8sT0FBQSxDQUFBQyxzQkFBQSxHQUFBQSxzQkFBQTs7Ozs7Ozs7Ozs7VUN4QkQ7O1VBRUFHLE1BQUEsQ0FBQUMsY0FBQSxDQUFBTCxPQUFBO1lBQ0FNLEtBQUE7VUFDQTs7Ozs7Ozs7Ozs7VUNKQTs7VUFFQUYsTUFBQSxDQUFBQyxjQUFBLENBQUFMLE9BQUE7WUFDQU0sS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0pBLElBQUFDLEtBQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBaUMsS0FBQSxHQUFBakMsT0FBQTtVQUdBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFrQyxNQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQW1DLFNBQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBRSxRQUFBLEdBQUFGLE9BQUE7VUFFQSxJQUFBRyxRQUFBLEdBQUFILE9BQUE7VUFDQSxJQUFBb0MsU0FBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFxQyxLQUFBLEdBQUFyQyxPQUFBO1VBR08sV0FaUDs7VUFZaUIsTUFBT3NDLElBQUssU0FBUU4sS0FBQSxDQUFBTyxJQUFXO1lBbUIvQyxDQUFBakMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJO1lBQ2pCO1lBRUEsQ0FBQWtDLE1BQU8sR0FBVSxFQUFFO1lBQ25CLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUEsQ0FBQUMsY0FBZTtZQUNmLENBQUFDLFFBQVM7WUFDVCxDQUFBQyxRQUFTO1lBQ1QsQ0FBQUMsZUFBZ0IsR0FBWSxLQUFLO1lBQ2pDLElBQUlBLGVBQWVBLENBQUE7Y0FDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsZUFBZ0I7WUFDN0I7WUFDQSxJQUFJRCxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBcEMsWUFBWTtjQUFFc0MsRUFBRSxHQUFHQyxTQUFTO2NBQUVDLE1BQU0sR0FBR0QsU0FBUztjQUFFLEdBQUdFO1lBQUssQ0FBRSxHQUFHLEVBQUU7Y0FDaEUsS0FBSyxDQUFDO2dCQUNMSCxFQUFFO2dCQUNGSSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxHQUFHRCxLQUFLO2dCQUNSRSxVQUFVLEVBQUUsQ0FDWCxJQUFJLEVBQ0osVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLE9BQU8sRUFDUCxNQUFNLEVBQ04sVUFBVSxFQUNWLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsY0FBYyxDQUNkO2dCQUVEQyxRQUFRLEVBQUVmLFNBQUEsQ0FBQWdCO2VBQ1YsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBOUMsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDdUMsTUFBTSxJQUFJNUMsUUFBQSxDQUFBTSxTQUFTLENBQUNILEdBQUcsQ0FBQztjQUU1QytDLFVBQVUsQ0FBQ0MsSUFBSSxHQUFHLElBQUk7Y0FDdEIsSUFBSSxDQUFDVCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFLEdBQUcsSUFBQVIsS0FBQSxDQUFBa0IsRUFBSSxHQUFFO2NBQ3pCLElBQUksQ0FBQyxDQUFBQyxNQUFPLEVBQUU7Y0FFZCxJQUFJLENBQUMsQ0FBQWIsUUFBUyxHQUFHLElBQUlSLFNBQUEsQ0FBQXNCLFFBQVEsQ0FBQztnQkFBRUMsTUFBTSxFQUFFLElBQUksQ0FBQ2I7Y0FBRSxDQUFFLENBQUM7Y0FDbEQsSUFBSSxDQUFDLENBQUFGLFFBQVMsQ0FBQ2dCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsTUFBSztnQkFDckMsSUFBSSxDQUFDQyxPQUFPLENBQUMsYUFBYSxDQUFDO2NBQzVCLENBQUMsQ0FBQztjQUNGO1lBQ0Q7WUFFQSxDQUFBSixNQUFPLEdBQUdLLENBQUEsS0FBSztjQUNkLElBQUksQ0FBQyxDQUFBdkQsR0FBSSxDQUFDcUQsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBRyxRQUFTLENBQUM7Y0FDL0MsSUFBSSxDQUFDLENBQUF4RCxHQUFJLENBQUNxRCxFQUFFLENBQUMsa0JBQWtCLEVBQUUsTUFBSztnQkFDckMsSUFBSSxDQUFDLENBQUFmLGVBQWdCLEdBQUcsSUFBSTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsQ0FBQUYsUUFBUyxFQUFFO2tCQUNuQixJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDcUIsR0FBRyxDQUFDO29CQUFFQyxTQUFTLEVBQUU7a0JBQUssQ0FBRSxDQUFDOztnQkFHekMsSUFBSSxDQUFDSixPQUFPLENBQUMsa0JBQWtCLENBQUM7Y0FDakMsQ0FBQyxDQUFDO2NBRUYsSUFBSSxDQUFDLENBQUF0RCxHQUFJLENBQUNxRCxFQUFFLENBQUMsaUJBQWlCLEVBQUV6QyxJQUFJLElBQUc7Z0JBQ3RDLElBQUlBLElBQUksRUFBRTtrQkFDVCxJQUFJO29CQUNILE1BQU0rQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDakQsSUFBSSxDQUFDO29CQUMvQixJQUFJLENBQUMwQyxPQUFPLENBQUMsaUJBQWlCLEVBQUVLLE1BQU0sQ0FBQ0csUUFBUSxDQUFDO21CQUNoRCxDQUFDLE9BQU9DLENBQUMsRUFBRTtvQkFDWEMsT0FBTyxDQUFDQyxJQUFJLENBQUMsMkJBQTJCLEVBQUVyRCxJQUFJLENBQUM7OztnQkFHakQsSUFBSTtrQkFDSCxJQUFJLElBQUksQ0FBQyxDQUFBWixHQUFJLENBQUNrRSxPQUFPLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxDQUFBbEUsR0FBSSxDQUFDa0UsT0FBTyxDQUFDQyxPQUFPLENBQUN2RCxJQUFJLElBQUc7c0JBQ2hDLE1BQU13RCxNQUFNLEdBQUdSLElBQUksQ0FBQ0MsS0FBSyxDQUFDakQsSUFBSSxDQUFDO3NCQUMvQixJQUFJd0QsTUFBTSxDQUFDQyxJQUFJLEtBQUssZUFBZSxFQUFFO3dCQUNwQyxJQUFJLENBQUMsQ0FBQWxDLGNBQWUsQ0FBQ3NCLEdBQUcsQ0FBQzswQkFBRWEsT0FBTyxFQUFFRixNQUFNLENBQUN4RCxJQUFJLENBQUMyRCxhQUFhOzBCQUFFYixTQUFTLEVBQUU7d0JBQUssQ0FBRSxDQUFDO3dCQUNsRjt3QkFDQSxJQUFJLElBQUksQ0FBQyxDQUFBdEIsUUFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUFDLFFBQVMsQ0FBQ21DLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXBDLFFBQVMsQ0FBQ0csRUFBRSxDQUFDLEVBQzNELElBQUksQ0FBQ0YsUUFBUSxDQUFDb0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBckMsUUFBUyxDQUFDOztvQkFFcEMsQ0FBQyxDQUFDOztrQkFFSDtpQkFDQSxDQUFDLE9BQU8yQixDQUFDLEVBQUU7a0JBQ1hDLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDWCxDQUFDLENBQUM7O2NBRWxCLENBQUMsQ0FBQztZQUNILENBQUM7WUFFRFksT0FBTyxHQUFHLE1BQU1qQyxLQUFLLElBQUc7Y0FDdkIsTUFBTU4sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDL0IsSUFBSSxDQUFDcUMsS0FBSyxDQUFDO2NBQ3hDLE1BQU1rQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUF2QyxRQUFTO2NBQ2pDdUMsVUFBVSxDQUFDdkIsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNuQyxZQUFZLENBQUM7Y0FFMUMsSUFBSWtCLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFd0MsTUFBTSxFQUFFO2dCQUM5QixNQUFNRCxVQUFVLENBQUNFLFVBQVUsQ0FBQzFDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDOztjQUUvQyxJQUFJLENBQUMwQyxLQUFLLEdBQUcsSUFBSTtjQUNqQixJQUFJLENBQUN6QixPQUFPLENBQUMsUUFBUSxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBakIsUUFBUyxHQUFHdUMsVUFBVTtZQUM1QixDQUFDO1lBRUR2RSxJQUFJLEdBQUdxQyxLQUFLLElBQUksSUFBSSxDQUFDaUMsT0FBTyxDQUFDakMsS0FBSyxDQUFDO1lBQ25DLENBQUFjLFFBQVMsR0FBR3dCLENBQUEsS0FBSztjQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE1QyxRQUFTLEVBQUU7Y0FDckIsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ2tDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQXRFLEdBQUksQ0FBQ2lGLGNBQWM7Y0FFakQsSUFBSSxDQUFDLENBQUE3QyxRQUFTLENBQUNxQixHQUFHLENBQUM7Z0JBQUVhLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQXRFLEdBQUksQ0FBQ2tGLGFBQWE7Z0JBQUVoQixPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUFsRSxHQUFJLENBQUNrRTtjQUFPLENBQUUsQ0FBQztjQUVwRjtjQUNBLElBQUksQ0FBQ1osT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLENBQUM7WUFFRDZCLE9BQU9BLENBQUE7Y0FDTixNQUFNdkMsVUFBVSxHQUFHLElBQUksQ0FBQ3dDLGFBQWEsRUFBRTtjQUN2Q3hDLFVBQVUsQ0FBQ1AsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUM4QyxPQUFPLEVBQUU7Y0FDOUMsT0FBT3ZDLFVBQVU7WUFDbEI7WUFDQSxNQUFNeUMsV0FBV0EsQ0FBQ2YsT0FBZTtjQUNoQyxJQUFJO2dCQUNILElBQUksQ0FBQ2dCLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNdEUsSUFBSSxHQUFHLElBQUlZLE1BQUEsQ0FBQTJELE9BQU8sQ0FBQztrQkFBRW5DLE1BQU0sRUFBRSxJQUFJLENBQUNiLEVBQUU7a0JBQUVpRCxJQUFJLEVBQUUsTUFBTTtrQkFBRWxCO2dCQUFPLENBQUUsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLENBQUFuQyxjQUFlLEdBQUduQixJQUFJO2dCQUMzQixJQUFJLENBQUNxQixRQUFRLENBQUNvQyxHQUFHLENBQUN6RCxJQUFJLENBQUM7Z0JBRXZCO2dCQUNBLElBQUksQ0FBQyxDQUFBb0IsUUFBUyxHQUFHLElBQUlSLE1BQUEsQ0FBQTJELE9BQU8sQ0FBQztrQkFBRW5DLE1BQU0sRUFBRSxJQUFJLENBQUNiLEVBQUU7a0JBQUVpRCxJQUFJLEVBQUUsUUFBUTtrQkFBRTlCLFNBQVMsRUFBRTtnQkFBSSxDQUFFLENBQUM7Z0JBQ2xGLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ29DLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQXJDLFFBQVMsQ0FBQztnQkFFakM7Z0JBQ0EsTUFBTSxJQUFJLENBQUMsQ0FBQXFELGtCQUFtQixDQUFDekUsSUFBSSxDQUFDO2dCQUVwQyxPQUFPQSxJQUFJO2VBQ1gsQ0FBQyxPQUFPK0MsQ0FBQyxFQUFFO2dCQUNYLE1BQU1BLENBQUM7ZUFDUCxTQUFTO2dCQUNULElBQUksQ0FBQ3VCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1JLEtBQUtBLENBQUNuRCxFQUFFO2NBQ2IsSUFBSTtnQkFDSDtnQkFDQSxNQUFNb0QsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFBdEQsUUFBUyxDQUFDeEIsR0FBRyxDQUFDMEIsRUFBRSxDQUFDO2dCQUN0QztnQkFDQSxJQUFJLENBQUNvRCxPQUFPLEVBQUU7a0JBQ2IsTUFBTSxJQUFJN0UsS0FBSyxDQUFDLG1CQUFtQnlCLEVBQUUsWUFBWSxDQUFDOztnQkFHbkQ7Z0JBQ0E7Z0JBRUE7Z0JBQ0EsSUFBSSxDQUFDLENBQUFKLGNBQWUsR0FBR3dELE9BQU87Z0JBRTlCO2dCQUNBO2dCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQXZELFFBQVMsRUFBRTtrQkFDcEIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBRyxJQUFJUixNQUFBLENBQUEyRCxPQUFPLENBQUM7b0JBQUVuQyxNQUFNLEVBQUUsSUFBSSxDQUFDYixFQUFFO29CQUFFaUQsSUFBSSxFQUFFLFFBQVE7b0JBQUU5QixTQUFTLEVBQUU7a0JBQUksQ0FBRSxDQUFDO2tCQUNsRixJQUFJLENBQUNyQixRQUFRLENBQUNvQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUFyQyxRQUFTLENBQUM7aUJBQ2pDLE1BQU07a0JBQ047a0JBQ0EsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ3FCLEdBQUcsQ0FBQztvQkFBRUMsU0FBUyxFQUFFLElBQUk7b0JBQUVnQixLQUFLLEVBQUVsQztrQkFBUyxDQUFFLENBQUM7O2dCQUcxRDtnQkFDQSxNQUFNLElBQUksQ0FBQyxDQUFBaUQsa0JBQW1CLENBQUNFLE9BQU8sQ0FBQztlQUN2QyxDQUFDLE9BQU81QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDLHdCQUF3QixFQUFFWCxDQUFDLENBQUM7Z0JBQzFDLE1BQU1BLENBQUM7O1lBRVQ7WUFFQSxNQUFNLENBQUEwQixrQkFBbUJHLENBQUM1RSxJQUFhO2NBQ3RDLE1BQU1WLEtBQUssR0FBRyxNQUFNVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2NBQ3JELE1BQU1vRixHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUN0RCxFQUFFLFdBQVc7Y0FDeEMsTUFBTXVELE9BQU8sR0FBRyxJQUFJbkUsS0FBQSxDQUFBb0UsY0FBYyxFQUFRO2NBRTFDLE1BQU1DLFFBQVEsR0FBRyxNQUFPNUQsUUFBYyxJQUFJO2dCQUN6QyxJQUFJLENBQUNrQixPQUFPLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLENBQUFsQixRQUFTLEVBQUU7a0JBQ25CLE1BQU0sSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ3FCLEdBQUcsQ0FBQztvQkFBRUMsU0FBUyxFQUFFO2tCQUFLLENBQUUsQ0FBQztrQkFDOUMsSUFBSSxDQUFDLENBQUF0QixRQUFTLEdBQUdJLFNBQVM7O2dCQUUzQnNELE9BQU8sQ0FBQ0csT0FBTyxFQUFFO2NBQ2xCLENBQUM7Y0FFRCxNQUFNQyxPQUFPLEdBQUluQyxDQUFNLElBQUk7Z0JBQzFCLElBQUksQ0FBQyxDQUFBN0IsTUFBTyxDQUFDaUUsSUFBSSxDQUFDcEMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLElBQUksQ0FBQyxDQUFBM0IsUUFBUyxFQUFFO2tCQUNuQixJQUFJLENBQUMsQ0FBQUEsUUFBUyxDQUFDcUIsR0FBRyxDQUFDO29CQUFFaUIsS0FBSyxFQUFFWDtrQkFBQyxDQUFFLENBQUM7O2dCQUVqQytCLE9BQU8sQ0FBQ00sTUFBTSxDQUFDckMsQ0FBQyxDQUFDO2NBQ2xCLENBQUM7Y0FFRCxJQUFJO2dCQUNILE1BQU0sSUFBSSxDQUFDLENBQUEvRCxHQUFJLENBQ2JVLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQ2IrRixNQUFNLENBQUNSLEdBQUcsRUFBRTtrQkFBRSxHQUFHN0UsSUFBSSxDQUFDb0UsYUFBYTtnQkFBRSxDQUFFLENBQUMsQ0FDeENrQixJQUFJLENBQUNOLFFBQVEsQ0FBQyxDQUNkTyxLQUFLLENBQUNMLE9BQU8sQ0FBQztnQkFFaEIsT0FBT0osT0FBTztlQUNkLENBQUMsT0FBTy9CLENBQUMsRUFBRTtnQkFDWG1DLE9BQU8sQ0FBQ25DLENBQUMsQ0FBQztnQkFDVixNQUFNQSxDQUFDOztZQUVUO1lBRUEsTUFBTXlDLFNBQVNBLENBQUNiLE9BQWE7Y0FDNUIsSUFBSTtnQkFDSCxJQUFJLENBQUNMLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNaEYsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Z0JBQ3JELE1BQU1vRixHQUFHLEdBQUcsVUFBVSxJQUFJLENBQUN0RCxFQUFFLGlCQUFpQjtnQkFDOUMsTUFBTXVELE9BQU8sR0FBRyxJQUFJbkUsS0FBQSxDQUFBb0UsY0FBYyxFQUFXO2dCQUM3QyxNQUFNL0UsSUFBSSxHQUFHLElBQUlZLE1BQUEsQ0FBQTJELE9BQU8sQ0FBQztrQkFDeEJuQyxNQUFNLEVBQUUsSUFBSSxDQUFDYixFQUFFO2tCQUNma0UsS0FBSyxFQUFFZCxPQUFPO2tCQUNkSCxJQUFJLEVBQUUsTUFBTTtrQkFDWjlCLFNBQVMsRUFBRSxJQUFJO2tCQUNmZ0QsWUFBWSxFQUFFO2lCQUNkLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLENBQUF2RSxjQUFlLEdBQUduQixJQUFJO2dCQUMzQixNQUFNZ0YsUUFBUSxHQUFHLE1BQU81RCxRQUFjLElBQUk7a0JBQ3pDLElBQUlBLFFBQVEsRUFBRTtvQkFDYixNQUFNLElBQUksQ0FBQyxDQUFBQSxRQUFTLENBQUNxQixHQUFHLENBQUM7c0JBQUVDLFNBQVMsRUFBRSxLQUFLO3NCQUFFZ0QsWUFBWSxFQUFFO29CQUFLLENBQUUsQ0FBQztvQkFDbkUsSUFBSSxDQUFDcEQsT0FBTyxDQUFDLG1CQUFtQixDQUFDOztrQkFHbEN3QyxPQUFPLENBQUNHLE9BQU8sQ0FBQ2pGLElBQUksQ0FBQztrQkFDckI7Z0JBQ0QsQ0FBQztnQkFFRCxNQUFNa0YsT0FBTyxHQUFJbkMsQ0FBTSxJQUFJO2tCQUMxQixJQUFJLENBQUMsQ0FBQTdCLE1BQU8sQ0FBQ2lFLElBQUksQ0FBQ3BDLENBQUMsQ0FBQztrQkFDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQTNCLFFBQVMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ3FCLEdBQUcsQ0FBQztzQkFBRWlCLEtBQUssRUFBRVg7b0JBQUMsQ0FBRSxDQUFDOztrQkFFakMrQixPQUFPLENBQUNNLE1BQU0sQ0FBQ3JDLENBQUMsQ0FBQztnQkFDbEIsQ0FBQztnQkFDRCxJQUFJLENBQUMxQixRQUFRLENBQUNvQyxHQUFHLENBQUN6RCxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBb0IsUUFBUyxHQUFHLElBQUlSLE1BQUEsQ0FBQTJELE9BQU8sQ0FBQztrQkFBRW5DLE1BQU0sRUFBRSxJQUFJLENBQUNiLEVBQUU7a0JBQUVpRCxJQUFJLEVBQUUsUUFBUTtrQkFBRTlCLFNBQVMsRUFBRTtnQkFBSSxDQUFFLENBQUM7Z0JBQ2xGLE1BQU1oQixLQUFLLEdBQUc7a0JBQ2IsR0FBRzFCLElBQUksQ0FBQ29FLGFBQWEsRUFBRTtrQkFDdkJxQixLQUFLLEVBQUUsSUFBSUUsSUFBSSxDQUFDLENBQUMzRixJQUFJLENBQUN5RixLQUFLLENBQUMsRUFBRSxXQUFXLEVBQUU7b0JBQUVwQyxJQUFJLEVBQUU7a0JBQVcsQ0FBRSxDQUFDO2tCQUNqRXVDLFNBQVMsRUFBRTtpQkFDWDtnQkFFRCxJQUFJLENBQUMsQ0FBQTVHLEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQytGLE1BQU0sQ0FBQ1IsR0FBRyxFQUFFbkQsS0FBSyxDQUFDLENBQUM0RCxJQUFJLENBQUNOLFFBQVEsQ0FBQyxDQUFDTyxLQUFLLENBQUNMLE9BQU8sQ0FBQztnQkFFeEUsT0FBT0osT0FBTztlQUNkLENBQUMsT0FBTy9CLENBQUMsRUFBRTtnQkFDWCxNQUFNLElBQUlqRCxLQUFLLENBQUNpRCxDQUFDLENBQUM7Z0JBQ2xCQyxPQUFPLENBQUNVLEtBQUssQ0FBQ1gsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDdUIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTXVCLFVBQVVBLENBQUNKLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNWixHQUFHLEdBQUcsb0JBQW9CO2dCQUNoQyxNQUFNdkYsS0FBSyxHQUFHLE1BQU1WLFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUNDLGFBQWE7Z0JBQ3JELE1BQU0yQixRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXBDLEdBQUksQ0FBQ1UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQ3dHLElBQUksQ0FBQ2pCLEdBQUcsRUFBRTtrQkFBRWUsU0FBUyxFQUFFLElBQUk7a0JBQUVILEtBQUssRUFBRUE7Z0JBQUssQ0FBRSxDQUFDO2dCQUUzRixPQUFPckUsUUFBUTtlQUNmLENBQUMsT0FBTzJCLENBQUMsRUFBRTtnQkFDWDtnQkFDQSxNQUFNQSxDQUFDOztZQUVUO1lBRUFnRCxVQUFVQSxDQUFDeEUsRUFBVTtjQUNwQixPQUFPLElBQUksQ0FBQyxDQUFBRixRQUFTLENBQUN4QixHQUFHLENBQUMwQixFQUFFLENBQUM7WUFDOUI7WUFFQUgsUUFBUUEsQ0FBQ3hCLElBQUk7Y0FDWixPQUFPO2dCQUNORCxNQUFNLEVBQUUsSUFBSTtnQkFDWkM7ZUFDQTtZQUNGO1lBRUEsTUFBTW9HLE1BQU1BLENBQUNDLE9BQTRCO2NBQ3hDLE1BQU03RSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQXBDLEdBQUksQ0FBQzhHLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQy9DdkUsRUFBRSxFQUFFLElBQUksQ0FBQ0EsRUFBRTtnQkFDWDJFLElBQUksRUFBRUQsT0FBTyxFQUFFQyxJQUFJLElBQUksSUFBSSxDQUFDQSxJQUFJLElBQUksU0FBUztnQkFDN0NDLFNBQVMsRUFBRUYsT0FBTyxFQUFFRSxTQUFTLElBQUksc0NBQXNDO2dCQUN2RUMsR0FBRyxFQUFFSCxPQUFPLEVBQUVJLE1BQU0sSUFBSSxJQUFJLENBQUNBLE1BQU0sSUFBSXpILFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLENBQUMrQixFQUFFO2dCQUM3RCtFLE1BQU0sRUFBRUwsT0FBTyxFQUFFSyxNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLElBQUksRUFBRTtnQkFDNUNqRyxNQUFNLEVBQUU0RixPQUFPLEVBQUU1RixNQUFNLElBQUksSUFBSSxDQUFDQSxNQUFNLElBQUksRUFBRTtnQkFDNUNrRyxRQUFRLEVBQUVOLE9BQU8sRUFBRU0sUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxJQUFJLFNBQVM7Z0JBQ3pEekQsUUFBUSxFQUFFO2tCQUNUMEQsTUFBTSxFQUFFLFdBQVc7a0JBQ25CLEdBQUdQLE9BQU8sRUFBRW5ELFFBQVE7a0JBQ3BCLEdBQUcsSUFBSSxDQUFDQTtpQkFDUjtnQkFDRDJELFFBQVEsRUFBRVIsT0FBTyxFQUFFUSxRQUFRLElBQzFCLElBQUksQ0FBQ0EsUUFBUSxJQUFJO2tCQUNoQkMsT0FBTyxFQUFFOztlQUVYLENBQUM7Y0FDRixJQUFJLENBQUNqRSxHQUFHLENBQUNyQixRQUFRLENBQUN4QixJQUFJLENBQUM7WUFDeEI7WUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkEsYUFBYW9HLE1BQU1BLENBQUNDLE9BQUEsR0FBOEIsRUFBRTtjQUNuRCxJQUFJO2dCQUNIO2dCQUNBLElBQUksQ0FBQ3JILFFBQUEsQ0FBQVcsY0FBYyxDQUFDQyxJQUFJLEVBQUUrQixFQUFFLEVBQUU7a0JBQzdCLE1BQU0sSUFBSXpCLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQzs7Z0JBRTdELElBQUksQ0FBQ21HLE9BQU8sQ0FBQ0UsU0FBUyxFQUFFO2tCQUN2QixNQUFNLElBQUlyRyxLQUFLLENBQUMseUNBQXlDLENBQUM7O2dCQUczRDs7Ozs7OztnQkFPQTtnQkFDQSxNQUFNNkcsY0FBYyxHQUF1QjtrQkFDMUNULElBQUksRUFBRSxVQUFVO2tCQUNoQkcsTUFBTSxFQUFFekgsUUFBQSxDQUFBVyxjQUFjLENBQUNDLElBQUksQ0FBQytCLEVBQUU7a0JBQzlCa0YsUUFBUSxFQUFFO29CQUFFQyxPQUFPLEVBQUUvRixLQUFBLENBQUFpRyxTQUFTLENBQUNGO2tCQUFPLENBQUU7a0JBQ3hDUCxTQUFTLEVBQUVGLE9BQU8sQ0FBQ0UsU0FBUztrQkFDNUJyRCxRQUFRLEVBQUUsRUFBRTtrQkFDWixHQUFHbUQ7aUJBQ0g7Z0JBRUQ7Z0JBQ0EsTUFBTWpFLElBQUksR0FBRyxJQUFJaEIsSUFBSSxDQUFDO2tCQUNyQk8sRUFBRSxFQUFFLElBQUFSLEtBQUEsQ0FBQWtCLEVBQUksR0FBRTtrQkFDVixHQUFHMEU7aUJBQ0gsQ0FBQztnQkFFRjtnQkFDQSxNQUFNM0UsSUFBSSxDQUFDZ0UsTUFBTSxDQUFDVyxjQUFjLENBQUM7Z0JBRWpDLE9BQU8zRSxJQUFJO2VBQ1gsQ0FBQyxPQUFPMEIsS0FBSyxFQUFFO2dCQUNmLE1BQU0sSUFBSTVELEtBQUssQ0FBQywwQkFBMEI0RCxLQUFLLENBQUNpQixPQUFPLEVBQUUsQ0FBQzs7WUFFNUQ7O1VBQ0F4RSxPQUFBLENBQUFhLElBQUEsR0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzWkQsSUFBQXBDLFFBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLFFBQUEsR0FBQUgsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUdNLE1BQU9vRCxZQUFZO1lBQ3hCLENBQUE5QyxHQUFJO1lBQ0osQ0FBQXFCLE1BQU87WUFFUHBCLFlBQVlvQixNQUFZO2NBQ3ZCLElBQUksQ0FBQyxDQUFBckIsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQU8sR0FBRyxDQUFDTCxRQUFBLENBQUFNLFNBQVMsQ0FBQ0gsR0FBRyxDQUFDO2NBRWxDLElBQUksQ0FBQyxDQUFBcUIsTUFBTyxHQUFHQSxNQUFNO1lBQ3RCO1lBRUEsTUFBTWhCLElBQUlBLENBQUNxQyxLQUFLO2NBQ2YsTUFBTXBDLEtBQUssR0FBRyxNQUFNVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhO2NBRXJELElBQUksQ0FBQyxDQUFBVCxHQUFJLENBQUNVLE1BQU0sQ0FBQ0osS0FBSyxDQUFDO2NBRXZCLE1BQU07Z0JBQUVLLE1BQU07Z0JBQUVDO2NBQUksQ0FBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFaLEdBQUksQ0FBQ2EsR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUFRLE1BQU8sQ0FBQ2tCLEVBQUUsRUFBRSxDQUFDO2NBRXpFLElBQUksQ0FBQzVCLE1BQU0sRUFBRTtnQkFDWixNQUFNLElBQUlHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FHdEMsT0FBT0YsSUFBSTtZQUNaOztVQUNBTyxPQUFBLENBQUEyQixZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JELElBQUFyRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBZ0MsS0FBQSxHQUFBaEMsT0FBQTtVQUVPLFdBSlA7O1VBSWlCLE1BQU95RCxRQUFTLFNBQVExRCxNQUFBLENBQUFNLGFBQXVCO1lBQy9EaUIsSUFBSSxHQUFHVSxLQUFBLENBQUE2RCxPQUFPO1lBRWQsQ0FBQW5GLEtBQU0sR0FBYyxFQUFFO1lBQ3RCLENBQUF5SCxHQUFJLEdBQXlCLElBQUlDLEdBQUcsRUFBRTtZQUN0QyxJQUFJMUgsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBbUMsRUFBRztZQUNIdEMsWUFBWTtjQUFFbUQ7WUFBTSxDQUFFO2NBQ3JCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBYixFQUFHLEdBQUdhLE1BQU07WUFDbEI7WUFFQTBCLFVBQVVBLENBQUNsRSxJQUFJO2NBQ2QsSUFBSSxDQUFDLENBQUFSLEtBQU0sR0FBR1EsSUFBSSxDQUFDaUgsR0FBRyxDQUFDN0csSUFBSSxJQUFHO2dCQUM3QixNQUFNMkUsT0FBTyxHQUFHLElBQUlqRSxLQUFBLENBQUE2RCxPQUFPLENBQUN2RSxJQUFJLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxDQUFBNkcsR0FBSSxDQUFDcEUsR0FBRyxDQUFDa0MsT0FBTyxDQUFDcEQsRUFBRSxFQUFFb0QsT0FBTyxDQUFDO2dCQUNsQyxPQUFPQSxPQUFPO2NBQ2YsQ0FBQyxDQUFDO1lBQ0g7WUFFQTlFLEdBQUdBLENBQUMwQixFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQXNGLEdBQUksQ0FBQ2hILEdBQUcsQ0FBQzBCLEVBQUUsQ0FBQztZQUN6QjtZQUVBa0MsR0FBR0EsQ0FBQ3pELElBQUk7Y0FDUCxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDK0YsSUFBSSxDQUFDbkYsSUFBSSxDQUFDO2NBQ3RCLElBQUksQ0FBQyxDQUFBNkcsR0FBSSxDQUFDcEUsR0FBRyxDQUFDekMsSUFBSSxDQUFDdUIsRUFBRSxFQUFFdkIsSUFBSSxDQUFDO2NBQzVCLElBQUksQ0FBQ3NDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDNUI7WUFFQXlFLGNBQWNBLENBQUE7Y0FDYixNQUFNcEMsT0FBTyxHQUFHLElBQUlqRSxLQUFBLENBQUE2RCxPQUFPLENBQUM7Z0JBQUVuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUFiLEVBQUc7Z0JBQUVpRCxJQUFJLEVBQUUsUUFBUTtnQkFBRTlCLFNBQVMsRUFBRTtjQUFJLENBQUUsQ0FBQztjQUNsRixJQUFJLENBQUNlLEdBQUcsQ0FBQ2tCLE9BQU8sQ0FBQztjQUVqQixNQUFNcUMsUUFBUSxHQUFHLDJEQUEyRDtjQUM1RSxNQUFNQyxZQUFZLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQztjQUN2QyxNQUFNQyxLQUFLLEdBQUdGLFlBQVksQ0FBQ0csS0FBSyxDQUFDLEdBQUcsQ0FBQztjQUNyQyxJQUFJQyxjQUFjLEdBQUcsRUFBRTtjQUN2QixJQUFJQyxLQUFLLEdBQUcsQ0FBQztjQUViLE1BQU1DLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQUs7Z0JBQ2pDLElBQUlGLEtBQUssSUFBSUgsS0FBSyxDQUFDdEQsTUFBTSxFQUFFO2tCQUMxQjRELGFBQWEsQ0FBQ0YsUUFBUSxDQUFDO2tCQUN2Qjs7Z0JBR0RGLGNBQWMsSUFBSUYsS0FBSyxDQUFDRyxLQUFLLENBQUMsR0FBRyxHQUFHO2dCQUVwQzNDLE9BQU8sQ0FBQ2xDLEdBQUcsQ0FBQztrQkFBRWEsT0FBTyxFQUFFK0Q7Z0JBQWMsQ0FBRSxDQUFDO2dCQUN4Q0MsS0FBSyxFQUFFO2NBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVjtZQUVBbkQsT0FBT0EsQ0FBQTtjQUNOLE9BQU8sSUFBSSxDQUFDLENBQUEvRSxLQUFNLENBQUN5SCxHQUFHLENBQUM3RyxJQUFJLElBQUlBLElBQUksQ0FBQ29FLGFBQWEsRUFBRSxDQUFDO1lBQ3JEO1lBRUFaLEdBQUdBLENBQUNqQyxFQUFVO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQXNGLEdBQUksQ0FBQ3JELEdBQUcsQ0FBQ2pDLEVBQUUsQ0FBQztZQUN6Qjs7VUFDQXBCLE9BQUEsQ0FBQWdDLFFBQUEsR0FBQUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUQsSUFBQTFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFxQyxLQUFBLEdBQUFyQyxPQUFBO1VBQ0EsSUFBQUMsSUFBQSxHQUFBRCxPQUFBO1VBR0EsSUFBQUcsUUFBQSxHQUFBSCxPQUFBO1VBR08sV0FUUDs7VUFTaUIsTUFBTzZGLE9BQVEsU0FBUTlGLE1BQUEsQ0FBQU0sYUFBdUI7WUFNOUQsQ0FBQUMsR0FBSTtZQUNKLENBQUFvQyxRQUFTLEdBQVcsRUFBRTtZQUN0QjtZQUNBLENBQUFZLElBQUs7WUFLTDBGLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUV2QixDQUFBQyxhQUFjO1lBRWQsSUFBSXZHLFFBQVFBLENBQUE7Y0FDWCxPQUFPLElBQUksQ0FBQyxDQUFBQSxRQUFTO1lBQ3RCO1lBRUEsQ0FBQWlDLElBQUs7WUFDTCxJQUFJQSxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxJQUFJLENBQUMsQ0FBQUEsSUFBSztZQUNsQjtZQUVBLENBQUF1RSxRQUFTO1lBQ1QsSUFBSUEsUUFBUUEsQ0FBQTtjQUNYLE9BQU8sSUFBSSxDQUFDLENBQUFBLFFBQVM7WUFDdEI7WUFFQSxJQUFJQSxRQUFRQSxDQUFDbkgsS0FBSztjQUNqQixJQUFJQSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUFtSCxRQUFTLEVBQUU7Y0FDOUIsSUFBSSxDQUFDLENBQUFBLFFBQVMsR0FBR25ILEtBQUs7Y0FDdEIsSUFBSSxDQUFDNkIsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ2pDO1lBRUFyRCxZQUFZO2NBQUVzQyxFQUFFLEdBQUdDLFNBQVM7Y0FBRVEsSUFBSTtjQUFFLEdBQUdOO1lBQUssQ0FBMEI7Y0FDckUsS0FBSyxDQUFDO2dCQUNMSCxFQUFFO2dCQUNGLEdBQUdHLEtBQUs7Z0JBQ1JFLFVBQVUsRUFBRSxDQUNYLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULE9BQU8sRUFDUCxXQUFXLEVBQ1gsV0FBVyxFQUNYLGNBQWMsRUFDZCxTQUFTO2VBRVYsQ0FBQztjQUVGLElBQUksQ0FBQyxDQUFBSSxJQUFLLEdBQUdBLElBQUk7Y0FDakIsSUFBSSxDQUFDVCxFQUFFLEVBQUUsSUFBSSxDQUFDQSxFQUFFLEdBQUcsSUFBQVIsS0FBQSxDQUFBa0IsRUFBSSxHQUFFO2NBQ3pCLE1BQU1qRCxHQUFHLEdBQUcsSUFBSUwsSUFBQSxDQUFBTyxHQUFHLENBQUNMLFFBQUEsQ0FBQU0sU0FBUyxDQUFDSCxHQUFHLENBQUM7Y0FDbEMsSUFBSSxDQUFDLENBQUFBLEdBQUksR0FBR0EsR0FBRztjQUVmLElBQUksQ0FBQyxDQUFBcUUsSUFBSyxHQUFHM0IsS0FBSyxDQUFDMkIsSUFBSSxJQUFJLFNBQVM7Y0FFcEMsSUFBSSxDQUFDd0UsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Y0FDaEMsS0FBSyxDQUFDOUQsS0FBSyxHQUFHLElBQUk7WUFDbkI7O1VBRUQ7VUFBQTVELE9BQUEsQ0FBQW9FLE9BQUEsR0FBQUEsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==