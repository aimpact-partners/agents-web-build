System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/model", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item", "@beyond-js/kernel@0.1.14/core", "uuid@11.1.0"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
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
    }, function (_beyondJsKernel0114Core) {
      dependency_7 = _beyondJsKernel0114Core;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImVycm9ycyIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsIm1ldGFEYXRhU3RhcnRlZCIsImlkIiwidW5kZWZpbmVkIiwic2VydmVyIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJzZXQiLCJzdHJlYW1pbmciLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIk1lc3NhZ2UiLCJyb2xlIiwiZXhlY3V0ZU1lc3NhZ2VDYWxsIiwicmV0cnkiLCJtZXNzYWdlIiwiI2V4ZWN1dGVNZXNzYWdlQ2FsbCIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJwdXNoIiwicmVqZWN0Iiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwiYXVkaW8iLCJ0cmFuc2NyaWJpbmciLCJGaWxlIiwibXVsdGlwYXJ0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwib3B0aW9ucyIsIm5hbWUiLCJwcm9qZWN0SWQiLCJ1aWQiLCJ1c2VySWQiLCJzeXN0ZW0iLCJjYXRlZ29yeSIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsImRlZmF1bHRPcHRpb25zIiwibGFuZ3VhZ2VzIiwibWFwIiwiTWFwIiwiYWRkVGVzdE1lc3NhZ2UiLCJiYXNlVGV4dCIsInJlcGVhdGVkVGV4dCIsInJlcGVhdCIsIndvcmRzIiwic3BsaXQiLCJjdXJyZW50Q29udGVudCIsImluZGV4IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2NhbEZpZWxkcyIsInBhcnNlZENvbnRlbnQiLCJwcmV2aW91cyIsInJlYWN0aXZlUHJvcHMiXSwic291cmNlcyI6WyIvY2hhdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiL2NoYXQudHMiLCIvbWVzc2FnZS50cyIsIi9jaGF0cy9pdGVtL2luZGV4LnRzIiwiL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvY2hhdHMvbWVzc2FnZXMvaW5kZXgudHMiLCIvY2hhdHMvbWVzc2FnZXMvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251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