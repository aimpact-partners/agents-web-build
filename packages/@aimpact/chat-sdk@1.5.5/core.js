System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/model", "@beyond-js/http-suite@0.1.1/api", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/reactive@2.1.0/entities/collection", "@beyond-js/reactive@2.1.0/entities/item", "@beyond-js/kernel@0.1.12/core", "uuid@11.1.0"], function (_export, _context) {
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
    }, function (_beyondJsReactive210Model) {
      dependency_1 = _beyondJsReactive210Model;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_2 = _beyondJsHttpSuite011Api;
    }, function (_aimpactChatSdk155Session) {
      dependency_3 = _aimpactChatSdk155Session;
    }, function (_aimpactChatSdk155Startup) {
      dependency_4 = _aimpactChatSdk155Startup;
    }, function (_beyondJsReactive210EntitiesCollection) {
      dependency_5 = _beyondJsReactive210EntitiesCollection;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_6 = _beyondJsReactive210EntitiesItem;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_uuid2) {
      dependency_8 = _uuid2;
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
        hash: 254662399,
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
        hash: 2413900049,
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
              ...specs
            } = {}) {
              super({
                id,
                entity: 'Chat',
                ...specs,
                properties: ['id', 'autoplay', 'name', 'userId', 'system', 'parent', 'category', 'language', 'usage', 'user', 'children', 'knowledgeBoxId', 'metadata', 'transcribing'],
                provider: _provider.ChatProvider
              });
              this.#api = new _api.Api(_startup.sdkConfig.api);
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
                console.log(1, 'we are retrying', message);
                if (!message) {
                  throw new Error(`Message with id ${id} not found`);
                }
                // Clear any previous error
                message.set({
                  error: undefined
                });
                // Set as current message
                this.#currentMessage = message;
                // Create response message if it doesn't exist
                console.log(0.2, this.#response);
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
            async create() {
              const response = await this.#api.post('/chats', {
                id: this.id,
                name: 'My chat',
                projectId: '02d991dd-8d57-42f3-b155-8e7133482c19',
                uid: _session.sessionWrapper.user.id,
                metadata: {
                  prompt: 'topic-q&a'
                },
                language: {
                  default: 'es'
                }
              });
              this.set(response.data);
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
        hash: 474943464,
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
                properties: ['id', 'chatId', 'audio', 'userId', 'role', 'content', 'usage', 'timestamp', 'streaming', 'transcribing', 'actions', 'error']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImVycm9ycyIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsIm1ldGFEYXRhU3RhcnRlZCIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJzZXQiLCJzdHJlYW1pbmciLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIk1lc3NhZ2UiLCJyb2xlIiwiZXhlY3V0ZU1lc3NhZ2VDYWxsIiwicmV0cnkiLCJtZXNzYWdlIiwibG9nIiwiI2V4ZWN1dGVNZXNzYWdlQ2FsbCIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJwdXNoIiwicmVqZWN0Iiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwiYXVkaW8iLCJ0cmFuc2NyaWJpbmciLCJGaWxlIiwibXVsdGlwYXJ0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsImFkZFRlc3RNZXNzYWdlIiwiYmFzZVRleHQiLCJyZXBlYXRlZFRleHQiLCJyZXBlYXQiLCJ3b3JkcyIsInNwbGl0IiwiY3VycmVudENvbnRlbnQiLCJpbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9jYWxGaWVsZHMiLCJwYXJzZWRDb250ZW50IiwicHJldmlvdXMiLCJyZWFjdGl2ZVByb3BzIl0sInNvdXJjZXMiOlsiLy9jaGF0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiLy9jaGF0cy9jb2xsZWN0aW9uL3Byb3ZpZGVyLnRzIiwiLy9jaGF0LnRzLyIsIi8vbWVzc2FnZS50cy8iLCIvL2NoYXRzL2l0ZW0vaW5kZXgudHMiLCIvL2NoYXRzL2l0ZW0vcHJvdmlkZXIudHMiLCIvL2NoYXRzL21lc3NhZ2VzL2luZGV4LnRzIiwiLy9jaGF0cy9tZXNzYWdlcy9pdGVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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