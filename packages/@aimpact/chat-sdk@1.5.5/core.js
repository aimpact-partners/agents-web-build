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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbW9kZWwiLCJyZXF1aXJlIiwiX2FwaSIsIl9zZXNzaW9uIiwiX3N0YXJ0dXAiLCJDaGF0cyIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsInNka0NvbmZpZyIsIml0ZW1zIiwibG9hZCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInN0YXR1cyIsImRhdGEiLCJnZXQiLCJFcnJvciIsImFkZEl0ZW0iLCJpdGVtIiwidW5zaGlmdCIsInRyaWdnZXJFdmVudCIsImV4cG9ydHMiLCJDaGF0Q29sbGVjdGlvblByb3ZpZGVyIiwicGFyZW50IiwibGlzdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaXRlbSIsIl9jb3JlIiwiX2l0ZW0yIiwiX21lc3NhZ2VzIiwiX3Byb3ZpZGVyIiwiX3V1aWQiLCJDaGF0IiwiSXRlbSIsImVycm9ycyIsImN1cnJlbnRNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlcyIsIm1ldGFEYXRhU3RhcnRlZCIsImlkIiwidW5kZWZpbmVkIiwic3BlY3MiLCJlbnRpdHkiLCJwcm9wZXJ0aWVzIiwicHJvdmlkZXIiLCJDaGF0UHJvdmlkZXIiLCJnbG9iYWxUaGlzIiwiY2hhdCIsInY0IiwibGlzdGVuIiwiTWVzc2FnZXMiLCJjaGF0SWQiLCJvbiIsInRyaWdnZXIiLCIjbGlzdGVuIiwib25MaXN0ZW4iLCJzZXQiLCJzdHJlYW1pbmciLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJtZXRhZGF0YSIsImUiLCJjb25zb2xlIiwid2FybiIsImFjdGlvbnMiLCJmb3JFYWNoIiwiYWN0aW9uIiwidHlwZSIsImNvbnRlbnQiLCJ0cmFuc2NyaXB0aW9uIiwiaGFzIiwiYWRkIiwiZXJyb3IiLCJsb2FkQWxsIiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInNldEVudHJpZXMiLCJyZWFkeSIsIiNvbkxpc3RlbiIsInN0cmVhbVJlc3BvbnNlIiwic3RyaW5nQ29udGVudCIsImdldERhdGEiLCJnZXRQcm9wZXJ0aWVzIiwic2VuZE1lc3NhZ2UiLCJmZXRjaGluZyIsIk1lc3NhZ2UiLCJyb2xlIiwiZXhlY3V0ZU1lc3NhZ2VDYWxsIiwicmV0cnkiLCJtZXNzYWdlIiwibG9nIiwiI2V4ZWN1dGVNZXNzYWdlQ2FsbCIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9uRmluaXNoIiwicmVzb2x2ZSIsIm9uRXJyb3IiLCJwdXNoIiwicmVqZWN0Iiwic3RyZWFtIiwidGhlbiIsImNhdGNoIiwic2VuZEF1ZGlvIiwiYXVkaW8iLCJ0cmFuc2NyaWJpbmciLCJGaWxlIiwibXVsdGlwYXJ0IiwidHJhbnNjcmliZSIsInBvc3QiLCJnZXRNZXNzYWdlIiwiY3JlYXRlIiwibmFtZSIsInByb2plY3RJZCIsInVpZCIsInByb21wdCIsImxhbmd1YWdlIiwiZGVmYXVsdCIsIm1hcCIsIk1hcCIsImFkZFRlc3RNZXNzYWdlIiwiYmFzZVRleHQiLCJyZXBlYXRlZFRleHQiLCJyZXBlYXQiLCJ3b3JkcyIsInNwbGl0IiwiY3VycmVudENvbnRlbnQiLCJpbmRleCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9jYWxGaWVsZHMiLCJwYXJzZWRDb250ZW50IiwicHJldmlvdXMiLCJyZWFjdGl2ZVByb3BzIl0sInNvdXJjZXMiOlsiL2NoYXRzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvY2hhdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9jaGF0LnRzIiwiL21lc3NhZ2UudHMiLCIvY2hhdHMvaXRlbS9pbmRleC50cyIsIi9jaGF0cy9pdGVtL3Byb3ZpZGVyLnRzIiwiL2NoYXRzL21lc3NhZ2VzL2luZGV4LnRzIiwiL2NoYXRzL21lc3NhZ2VzL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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