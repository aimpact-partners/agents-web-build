System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/realtime/utils", "@beyond-js/events@0.0.7/events", "@aimpact/agents-api@0.4.1/realtime/interfaces/item", "@aimpact/agents-api@0.4.1/realtime/interfaces/agent-events", "@aimpact/agents-api@0.4.1/realtime/channel", "ws@8.18.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, IVoiceAudioDetection, BaseRealtimeAgent, ISessionSettings, AgentStatusType, __beyond_pkg, hmr;
  _export({
    IVoiceAudioDetection: void 0,
    BaseRealtimeAgent: void 0,
    ISessionSettings: void 0,
    AgentStatusType: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041RealtimeUtils) {
      dependency_1 = _aimpactAgentsApi041RealtimeUtils;
    }, function (_beyondJsEvents007Events) {
      dependency_2 = _beyondJsEvents007Events;
    }, function (_aimpactAgentsApi041RealtimeInterfacesItem) {
      dependency_3 = _aimpactAgentsApi041RealtimeInterfacesItem;
    }, function (_aimpactAgentsApi041RealtimeInterfacesAgentEvents) {
      dependency_4 = _aimpactAgentsApi041RealtimeInterfacesAgentEvents;
    }, function (_aimpactAgentsApi041RealtimeChannel) {
      dependency_5 = _aimpactAgentsApi041RealtimeChannel;
    }, function (_ws) {
      dependency_6 = _ws;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/realtime/agents/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/realtime/utils', dependency_1], ['@beyond-js/events/events', dependency_2], ['@aimpact/agents-api/realtime/interfaces/item', dependency_3], ['@aimpact/agents-api/realtime/interfaces/agent-events', dependency_4], ['@aimpact/agents-api/realtime/channel', dependency_5], ['ws', dependency_6]]);
      ims = new Map();
      /************************************
      INTERNAL MODULE: ./conversation/index
      ************************************/
      ims.set('./conversation/index', {
        hash: 177308811,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Conversation = void 0;
          var _items = require("./items");
          var _responses = require("./responses");
          var _speech = require("./speech");
          const LOG = false;
          class Conversation {
            #id;
            get id() {
              return this.#id;
            }
            #agent;
            get agent() {
              return this.#agent;
            }
            #speech;
            get speech() {
              return this.#speech;
            }
            #items;
            get items() {
              return this.#items;
            }
            #responses;
            get responses() {
              return this.#responses;
            }
            constructor(agent) {
              this.#agent = agent;
              this.#items = new _items.Items(this);
              this.#responses = new _responses.ConversationResponses(this);
              this.#speech = new _speech.Speech(this);
              const {
                session
              } = agent;
              session.on('conversation.created', this.onCreated.bind(this));
              session.on('input_audio_buffer.speech_started', this.onSpeechStarted.bind(this));
              session.on('input_audio_buffer.speech_stopped', this.onSpeechStopped.bind(this));
            }
            listen(chunk) {
              this.#speech.append(chunk);
            }
            log(...args) {
              LOG && console.log(...args);
            }
            onCreated(event) {
              this.log('[IMPLEMENTED] on[Conversation]Created event received:', event);
              this.#id = event.conversation.id;
            }
            onSpeechStarted(event) {
              this.log('[IMPLEMENTED] onSpeechStarted event received:', event);
              this.#speech.onStarted(event);
              this.#items.speechStarted(event);
            }
            onSpeechStopped(event, audio) {
              this.log('onSpeechStopped event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	this.trigger('error', { error: `input_audio_buffer.speech_stopped: Item "${event.item_id}" not found` });
              // 	return;
              // }
              // const item = this.#lookup.get(event.item_id);
              // item.speechStopped(event, audio);
            }
          }
          exports.Conversation = Conversation;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./conversation/item/audio
      *****************************************/

      ims.set('./conversation/item/audio', {
        hash: 1554683414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemAudio = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          var _events = require("@beyond-js/events/events");
          class ConversationItemAudio extends _events.Events {
            #frequency;
            get frequency() {
              return this.#frequency;
            }
            #value = new Int16Array(0);
            get value() {
              return this.#value;
            }
            constructor(frequency) {
              super();
              this.#frequency = frequency;
            }
            truncated(event) {
              const {
                audio_end_ms
              } = event;
              // Calculate the end index for truncating the audio based on the frequency
              const endIndex = Math.floor(audio_end_ms * this.#frequency / 1000);
              this.#value = this.#value.slice(0, endIndex); // Truncate the audio
            }
            #merge(audio) {
              const buffer = _utils.RealtimeUtils.base64ToArrayBuffer(audio);
              const append = new Int16Array(buffer);
              this.#value = _utils.RealtimeUtils.mergeInt16Arrays(this.#value, append);
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Populate formatted text if it comes out on creation
              if (event.item.type === 'message' && event.item.content) {
                event.item.content.forEach(content => {
                  if (content.type !== 'audio' && content.type !== 'input_audio') return;
                  content.audio && this.#merge(content.audio);
                });
              }
            }
            /**
             * When a new content part is added to an assistant message item during response generation.
             * @param event
             */
            contentPartAdded(event) {
              if (!event.part.audio) return;
              this.#merge(event.part.audio);
              this.trigger('audio.delta', {
                audio: event.part.audio
              });
            }
            audioDelta(event) {
              this.#merge(event.delta);
              this.trigger('audio.delta', {
                audio: event.delta
              });
            }
          }
          exports.ConversationItemAudio = ConversationItemAudio;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./conversation/item/content
      *******************************************/

      ims.set('./conversation/item/content', {
        hash: 4142015351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemContent = void 0;
          var _transcript = require("./transcript");
          var _audio = require("./audio");
          var _text = require("./text");
          var _events = require("@beyond-js/events/events");
          class ConversationItemContent extends _events.Events {
            #status = 'empty';
            get status() {
              return this.#status;
            }
            #text = new _text.ConversationItemText();
            get text() {
              return this.#text;
            }
            #audio = new _audio.ConversationItemAudio();
            get audio() {
              return this.#audio;
            }
            #transcript = new _transcript.ConversationItemTranscript();
            get transcript() {
              return this.#transcript;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Set the item status based on the type and role
              if (event.item.type !== 'message') return;
              this.#text.created(event);
              this.#audio.created(event);
              this.#status = event.item.role === 'user' ? 'completed' : 'in_progress';
            }
            /**
             * When a new content part is added to an assistant message item during response generation.
             * @param event
             */
            contentPartAdded(event) {
              this.#transcript.contentPartAdded(event);
              this.#text.contentPartAdded(event);
              this.#audio.contentPartAdded(event);
            }
            audioDelta(event) {
              this.#audio.audioDelta(event);
            }
            textDelta(event) {
              this.#text.textDelta(event);
            }
            audioTranscriptDelta(event) {
              this.#transcript.audioTranscriptDelta(event);
            }
            transcriptionCompleted(event) {
              this.#transcript.completed(event);
            }
            done(event) {
              this.#status = event.item.status;
            }
          }
          exports.ConversationItemContent = ConversationItemContent;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./conversation/item/index
      *****************************************/

      ims.set('./conversation/item/index', {
        hash: 1179085037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItem = void 0;
          var _tool = require("./tool");
          var _speech = require("./speech");
          var _content = require("./content");
          var _events = require("@beyond-js/events/events");
          class ConversationItem extends _events.Events {
            #id;
            get id() {
              return this.#id;
            }
            #type;
            get type() {
              return this.#type;
            }
            #role;
            get role() {
              return this.#role;
            }
            #audio;
            get audio() {
              return this.#audio;
            }
            #content = new _content.ConversationItemContent();
            get content() {
              return this.#content;
            }
            #transcript;
            get transcript() {
              return this.#transcript;
            }
            #tool;
            get tool() {
              return this.#tool;
            }
            #output;
            get output() {
              return this.#output;
            }
            #status;
            get status() {
              return this.#status;
            }
            #speech;
            #response;
            get response() {
              return this.#response;
            }
            constructor(id) {
              super();
              this.#id = id;
            }
            /**
             * When a new Item is created during Response generation.
             *
             * @param response
             * @param event
             */
            added(response, event) {
              this.#response = response;
              this.#status = event.item.status;
              this.#type = event.item.type;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Set the item status based on the type and role
              if (event.item.type === 'message') {
                if (event.item.role === 'user') {
                  this.#status = 'completed'; // Mark user message as completed
                } else {
                  this.#status = 'in_progress'; // Set status as in progress for other types
                }
              } else if (event.item.type === 'function_call') {
                this.#tool = new _tool.ConversationItemTool({
                  name: event.item.name,
                  caller: event.item.call_id,
                  arguments: ''
                });
                this.#status = 'in_progress';
              } else if (event.item.type === 'function_call_output') {
                this.#status = 'completed';
                this.#output = event.item.output;
              }
              this.#content.created(event);
            }
            contentPartAdded(event) {
              this.#content.contentPartAdded(event);
            }
            audioTranscriptDelta(event) {
              this.#content.audioTranscriptDelta(event);
            }
            done(event) {
              this.#status = event.item.status;
              this.#content.done(event);
            }
            truncated(event) {
              // Clear the transcript
              this.#transcript.clear();
              if (!this.#audio) {
                this.trigger('error', {
                  error: `item.truncated: Audio of item "${event.item_id}" not found`
                });
                return;
              }
              this.#audio.truncated(event);
            }
            speechStarted(event) {
              if (this.#speech) {
                this.trigger('error', {
                  error: `input_audio_buffer.speech_started: Item speech "${event.item_id}" already created`
                });
                return;
              }
              this.#speech = new _speech.ConversationItemSpeech(this.#audio, event.audio_start_ms);
            }
            speechStopped(event, audio) {
              if (!this.#audio) {
                this.trigger('error', {
                  error: `input_audio_buffer.speech_stopped: Audio of item "${event.item_id}" not found`
                });
                return;
              }
              // If there's no queued speech item, initialize it with the end time
              !this.#speech && (this.#speech = new _speech.ConversationItemSpeech(this.#audio, event.audio_end_ms));
              this.#speech.stopped(event, audio);
            }
            transcriptionCompleted(event) {
              // Assign transcript to the item
              this.#content.transcriptionCompleted(event);
              this.#transcript.completed(event);
            }
            audioDelta(event) {
              this.#content.audioDelta(event);
            }
            textDelta(event) {
              this.#content.textDelta(event);
            }
            functionCallArgumentsDelta(event) {
              if (!this.#tool) {
                this.trigger('error', {
                  error: `response.function_call_arguments.delta: Tool of item "${event.item_id}" not found`
                });
                return;
              }
              this.#tool.functionCallArgumentsDelta(event);
            }
          }
          exports.ConversationItem = ConversationItem;
        }
      });

      /******************************************
      INTERNAL MODULE: ./conversation/item/speech
      ******************************************/

      ims.set('./conversation/item/speech', {
        hash: 2299714669,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemSpeech = void 0;
          class ConversationItemSpeech {
            #input;
            #start;
            get start() {
              return this.#start;
            }
            #end;
            get end() {
              return this.#end;
            }
            #value;
            get value() {
              return this.#value;
            }
            constructor(input, start) {
              this.#input = input;
              this.#start = start;
            }
            stopped(event, audio) {
              this.#end = event.audio_end_ms;
              if (audio) {
                // Calculate start and end indices for slicing the audio buffer
                const start = Math.floor(this.#start * this.#input.frequency / 1000);
                const end = Math.floor(this.#end * this.#input.frequency / 1000);
                // Extract the audio segment and assign it to the speech item
                this.#value = this.#input.value.slice(start, end);
              }
            }
          }
          exports.ConversationItemSpeech = ConversationItemSpeech;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversation/item/text
      ****************************************/

      ims.set('./conversation/item/text', {
        hash: 3546706845,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemText = void 0;
          var _events = require("@beyond-js/events/events");
          class ConversationItemText extends _events.Events {
            #frequency;
            get frequency() {
              return this.#frequency;
            }
            #value = '';
            get value() {
              return this.#value;
            }
            constructor(frequency) {
              super();
              this.#frequency = frequency;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Populate formatted text if it comes out on creation
              if (event.item.type === 'message' && event.item.content) {
                event.item.content.forEach(content => {
                  if (content.type !== 'text' && content.type !== 'input_text') return;
                  this.#value += content.text;
                });
              }
            }
            /**
             * When a new content part is added to an assistant message item during response generation.
             * @param event
             */
            contentPartAdded(event) {
              if (event.part.type !== 'text') return;
              this.#value += event.part.text;
            }
            /**
             * Returned when the text value of a "text" content part is updated.
             * @param event
             */
            textDelta(event) {
              this.#value += event.delta;
              this.trigger('text.delta', {
                audio: event.delta
              });
            }
          }
          exports.ConversationItemText = ConversationItemText;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversation/item/tool
      ****************************************/

      ims.set('./conversation/item/tool', {
        hash: 2306001597,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemTool = void 0;
          class ConversationItemTool {
            #status;
            get status() {
              return this.#status;
            }
            #caller;
            get caller() {
              return this.#caller;
            }
            #name;
            get name() {
              return this.#name;
            }
            #arguments;
            get arguments() {
              return this.#arguments;
            }
            #output;
            get output() {
              return this.#output;
            }
            constructor(data) {
              this.#caller = data.caller;
              this.#name = data.name;
              this.#arguments = data.arguments;
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * @param event
             */
            created(event) {
              // Set the item status based on the type and role
              if (event.item.type === 'function_call') {
                this.#status = 'in_progress';
              } else if (event.item.type === 'function_call_output') {
                this.#status = 'completed';
                this.#output = event.item.output;
              }
            }
            functionCallArgumentsDelta(event) {
              this.#arguments += event.delta;
            }
          }
          exports.ConversationItemTool = ConversationItemTool;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./conversation/item/transcript
      **********************************************/

      ims.set('./conversation/item/transcript', {
        hash: 3006183769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationItemTranscript = void 0;
          var _events = require("@beyond-js/events/events");
          class ConversationItemTranscript extends _events.Events {
            #value = '';
            get value() {
              return this.#value;
            }
            #status = 'empty';
            get status() {
              return this.#status;
            }
            clear() {
              this.#value = '';
              this.#status = 'empty';
            }
            contentPartAdded(event) {
              if (event.part.type !== 'audio' || !event.part.transcript) return;
              this.#value += event.part.transcript;
            }
            completed(event) {
              this.#value = event.transcript ? event.transcript : ' ';
              this.#status = 'completed';
            }
            audioTranscriptDelta(event) {
              this.#value += event.delta;
            }
          }
          exports.ConversationItemTranscript = ConversationItemTranscript;
        }
      });

      /************************************
      INTERNAL MODULE: ./conversation/items
      ************************************/

      ims.set('./conversation/items', {
        hash: 609281227,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Items = void 0;
          var _item = require("./item");
          var _events = require("@beyond-js/events/events");
          const LOG = false;
          class Items extends _events.Events {
            #conversation;
            get #session() {
              return this.#conversation.agent.session;
            }
            #items = [];
            get items() {
              return this.#items;
            }
            #lookup = new Map();
            get lookup() {
              return this.#lookup;
            }
            has(id) {
              return this.#lookup.has(id);
            }
            get(id) {
              return this.#lookup.get(id);
            }
            delete(id) {
              if (!this.#lookup.has(id)) return false;
              const item = this.#lookup.get(id);
              this.#lookup.delete(id);
              this.#items.splice(this.#items.indexOf(item), 1);
            }
            #errors = [];
            get errors() {
              return this.#errors;
            }
            /**
             * Transcription runs asynchronously with Response creation,
             * so this event may come before or after the Response events.
             *
             * Realtime API models accept audio natively, and thus input transcription is a separate process
             * run on a separate ASR (Automatic Speech Recognition) model, currently always whisper-1.
             * Thus the transcript may diverge somewhat from the model's interpretation,
             * and should be treated as a rough guide.
             *
             * https://platform.openai.com/docs/api-reference/realtime-server-events/conversation/item/input_audio_transcription/completed
             */
            #orphans;
            log(...args) {
              LOG && console.log(...args);
            }
            constructor(conversation) {
              super();
              this.#conversation = conversation;
              const session = this.#session;
              session.on('conversation.item.created', this.onItemCreated.bind(this));
              session.on('conversation.item.truncated', this.onItemTruncated.bind(this));
              session.on('conversation.item.deleted', this.onItemDeleted.bind(this));
              session.on('conversation.item.input_audio_transcription.completed', this.onTranscriptionCompleted.bind(this));
              session.on('response.output_item.added', this.onResponseItemAdded.bind(this));
              session.on('response.content_part.added', this.onResponseContentPartAdded.bind(this));
              session.on('response.audio_transcript.delta', this.onResponseAudioTranscriptDelta.bind(this));
              session.on('response.audio.delta', this.onResponseAudioDelta.bind(this));
              session.on('response.text.delta', this.onResponseTextDelta.bind(this));
              session.on('response.function_call_arguments.delta', this.onResponseFunctionCallArgumentsDelta.bind(this));
              session.on('response.output_item.done', this.onResponseItemDone.bind(this));
            }
            create(item, previous, eventId) {
              const data = {
                type: 'conversation.item.create',
                event_id: eventId,
                previous_item_id: previous,
                item
              };
              this.#session.send('conversation.item.create', data);
            }
            send(message) {
              if (!message?.text && !message.audio) {
                throw new Error(`Invalid parameters. Message audio or text must be provided`);
              }
              const item = {
                id: null,
                type: 'message',
                role: 'user',
                // Has no effect on the conversation, here for consistency with the conversation.item.created
                status: 'completed',
                content: []
              };
              const content = message.text ? {
                type: 'input_text',
                text: message.text
              } : {
                type: 'input_audio',
                audio: message.audio
              };
              item.content.push(content);
              this.create(item);
              this.#conversation.responses.create();
            }
            speechStarted(event) {
              if (!this.#lookup.has(event.item_id)) {
                const error = `input_audio_buffer.speech_started: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.speechStarted(event);
            }
            /**
             * When a conversation item is created.
             * There are several scenarios that produce this event:
             *
             * 1. The server is generating a Response, which if successful will produce either one or two Items,
             *    which will be of type message (role assistant) or type function_call.
             *
             * 2. The input audio buffer has been committed, either by the client or the server (in server_vad mode).
             *    The server will take the content of the input audio buffer and add it to a new user message Item.
             *
             * 3. The client has sent a conversation.item.create event to add a new Item to the Conversation.
             *
             * @param event
             */
            onItemCreated(event) {
              this.log('[IMPLEMENTED] onItemCreated event received:', event);
              const item = (() => {
                // If the item is being created as a result of a response creation, then the
                // item is already in the items collections. Otherwise, it is required to create
                // an instance of the item
                if (this.#lookup.has(event.item.id)) return this.#lookup.get(event.item.id);
                const item = new _item.ConversationItem(event.item.id);
                this.#items.push(item);
                this.#lookup.set(item.id, item);
                return item;
              })();
              item.created(event);
              /**
               * Trigger event to notify the item creation
               */
              (() => {
                const {
                  agent
                } = this.#conversation;
                const id = item.id;
                const type = item.type;
                const role = item.role;
                const data = {
                  item: {
                    id,
                    type,
                    role
                  }
                };
                agent.trigger('conversation.item.created', data);
              })();
            }
            onItemTruncated(event) {
              this.log('onItemTruncated event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	this.trigger('error', { error: `item.truncated: Item "${event.item_id}" not found` });
              // 	return;
              // }
              // const item = this.#lookup.get(event.item_id);
              // item.truncated(event);
            }
            onItemDeleted(event) {
              this.log('onItemDeleted event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	this.trigger('error', { error: `item.deleted: Item "${event.item_id}" not found` });
              // 	return;
              // }
              // // Remove item from lookup table
              // this.delete(event.item_id);
            }
            onTranscriptionCompleted(event) {
              this.log('onTranscriptionCompleted event received:', event);
              // if (!this.#lookup.has(event.item_id)) {
              // 	// If the item doesn't exist yet, queue the transcript for later
              // 	const transcript = event.transcript || ' '; // Use a single space if transcript is empty
              // 	this.#orphans.transcripts.set(event.item_id, transcript);
              // 	return;
              // } else {
              // 	const item = this.#lookup.get(event.item_id);
              // 	item.transcriptionCompleted(event);
              // }
            }
            /**
             * When a new Item is created during Response generation.
             *
             * @param event
             * @returns
             */
            onResponseItemAdded(event) {
              this.log('[IMPLEMENTED] onItemAdded event received:', event);
              const {
                responses
              } = this.#conversation;
              if (!responses.has(event.response_id)) {
                const error = `response.output_item.added: Response "${event.response_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = new _item.ConversationItem(event.item.id);
              this.#lookup.set(item.id, item);
              this.#items.push(item);
              const response = responses.get(event.response_id);
              item.added(response, event);
            }
            onResponseContentPartAdded(event) {
              // this.log('[IMPLEMENTED] onContentPartAdded event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.content_part.added: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.contentPartAdded(event);
            }
            onResponseAudioTranscriptDelta(event) {
              // this.log('[IMPLEMENTED] onAudioTranscriptDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.audio_transcript.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.audioTranscriptDelta(event);
            }
            onResponseAudioDelta(event) {
              // this.log('[IMPLEMENTED] onAudioDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.audio.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.audioDelta(event);
              /**
               * Trigger event to notify the item creation
               */
              (() => {
                const {
                  agent
                } = this.#conversation;
                const id = item.id;
                const data = {
                  item: {
                    id
                  },
                  delta: event.delta
                };
                agent.trigger('conversation.item.audio.delta', data);
              })();
            }
            onResponseTextDelta(event) {
              this.log('[IMPLEMENTED] onTextDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.text.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.textDelta(event);
            }
            onResponseFunctionCallArgumentsDelta(event) {
              this.log('[IMPLEMENTED] onFunctionCallArgumentsDelta event received:', event);
              if (!this.#lookup.has(event.item_id)) {
                const error = `response.function_call_arguments.delta: Item "${event.item_id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item_id);
              item.functionCallArgumentsDelta(event);
            }
            onResponseItemDone(event) {
              this.log('[IMPLEMENTED] onItemDone event received:', event);
              if (!event.item) {
                const error = `response.output_item.done: Missing "item"`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              const item = this.#lookup.get(event.item.id);
              if (!this.#lookup.has(event.item.id)) {
                const error = `response.output_item.done: Item "${event.item.id}" not found`;
                this.#errors.push(error);
                this.trigger('error', {
                  error
                });
                return;
              }
              item.done(event);
            }
          }
          exports.Items = Items;
        }
      });

      /***************************************
      INTERNAL MODULE: ./conversation/progress
      ***************************************/

      ims.set('./conversation/progress', {
        hash: 805281290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentManagerConversationProgress = void 0;
          class AgentManagerConversationProgress {}
          exports.AgentManagerConversationProgress = AgentManagerConversationProgress;
        }
      });

      /***************************************
      INTERNAL MODULE: ./conversation/response
      ***************************************/

      ims.set('./conversation/response', {
        hash: 3649468987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationResponse = void 0;
          var _events = require("@beyond-js/events/events");
          class ConversationResponse extends _events.Events {
            #conversation;
            #id;
            get id() {
              return this.#id;
            }
            #status;
            get status() {
              return this.#status;
            }
            #usage = {
              inputTokens: 0,
              outputTokens: 0
            };
            get usage() {
              return this.#usage;
            }
            constructor(conversation) {
              super();
              this.#conversation = conversation;
            }
            created(event) {
              const {
                id,
                usage
              } = event.response;
              this.#id = id;
              this.#usage.inputTokens = usage?.input_tokens ? usage.input_tokens : 0;
              this.#usage.outputTokens = usage?.output_tokens ? usage.input_tokens : 0;
            }
          }
          exports.ConversationResponse = ConversationResponse;
        }
      });

      /****************************************
      INTERNAL MODULE: ./conversation/responses
      ****************************************/

      ims.set('./conversation/responses', {
        hash: 1467945702,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConversationResponses = void 0;
          var _response = require("./response");
          var _events = require("@beyond-js/events/events");
          class ConversationResponses extends _events.Events {
            #conversation;
            #lookup = new Map();
            get lookup() {
              return this.#lookup;
            }
            has(id) {
              return this.#lookup.has(id);
            }
            get(id) {
              return this.#lookup.get(id);
            }
            delete(id) {
              if (!this.#lookup.has(id)) return false;
              this.#lookup.delete(id);
            }
            constructor(conversation) {
              super();
              this.#conversation = conversation;
              const {
                session
              } = conversation.agent;
              session.on('response.created', this.created.bind(this));
            }
            // Create a response from the server
            create() {
              this.#conversation.speech.commit();
              const {
                agent
              } = this.#conversation;
              agent.session.send('response.create');
              return true;
            }
            created(event) {
              if (this.#lookup.has(event.response.id)) return;
              const response = new _response.ConversationResponse(this.#conversation);
              this.#lookup.set(event.response.id, response);
              response.created(event);
            }
          }
          exports.ConversationResponses = ConversationResponses;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./conversation/speech/current
      *********************************************/

      ims.set('./conversation/speech/current', {
        hash: 3376561255,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CurrentUserSpeech = void 0;
          class CurrentUserSpeech {
            #conversation;
            #length = 0;
            constructor(conversation) {
              this.#conversation = conversation;
            }
            commit() {
              const {
                agent
              } = this.#conversation;
              const {
                vad
              } = agent; // Voice audio detection
              vad && this.#length > 0 && agent.session.send('input_audio_buffer.commit');
              this.#length = 0;
            }
            append(chunk) {
              this.#length += chunk.byteLength;
            }
          }
          exports.CurrentUserSpeech = CurrentUserSpeech;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./conversation/speech/index
      *******************************************/

      ims.set('./conversation/speech/index', {
        hash: 4139490776,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Speech = void 0;
          var _storage = require("./storage");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          var _current = require("./current");
          class Speech {
            #conversation;
            #storage;
            #current;
            constructor(conversation) {
              this.#conversation = conversation;
              this.#storage = new _storage.SpeechStorage(conversation);
              this.#current = new _current.CurrentUserSpeech(conversation);
            }
            append(chunk) {
              if (chunk.byteLength === 0) return;
              const {
                session
              } = this.#conversation.agent;
              session.send('input_audio_buffer.append', {
                audio: _utils.RealtimeUtils.arrayBufferToBase64(chunk)
              });
              this.#current.append(chunk);
              this.#storage.append(chunk);
            }
            flush() {
              this.#storage.flush();
            }
            commit() {
              this.#current.commit();
            }
            onStarted(event) {
              /**
               * Trigger event to notify speech started detected
               */
              const {
                agent
              } = this.#conversation;
              const data = {
                item: {
                  id: event.item_id
                }
              };
              agent.trigger('user.speech.started', data);
            }
          }
          exports.Speech = Speech;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./conversation/speech/storage
      *********************************************/

      ims.set('./conversation/speech/storage', {
        hash: 442958824,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpeechStorage = void 0;
          var _utils = require("@aimpact/agents-api/realtime/utils");
          // Recommended buffer size for PCM audio in real-time applications, around 5MB.
          const BUFFER_SIZE_LIMIT = 5 * 1024 * 1024; // 5 MB in bytes
          class SpeechStorage {
            #conversation;
            #buffer = new Int16Array(0);
            #stream;
            #browser;
            #prepared = false;
            constructor(conversation) {
              this.#conversation = conversation;
              // Determine if running in the browser or Node.js
              this.#browser = !globalThis.process?.versions?.node;
              !this.#browser && this.#ready().catch(exc => console.log(exc));
            }
            async #ready() {
              const {
                Storage
              } = await bimport('@google-cloud/storage');
              const storage = new Storage();
              const bucket = storage.bucket('conversations-audios');
              const file = bucket.file(`conversation/${this.#conversation.id}.pcm`);
              // Initialize a writable stream to GCS
              this.#stream = file.createWriteStream({
                resumable: false,
                contentType: 'audio/L16' // PCM 16-bit audio format
              });
              this.#stream.on('error', this.#onerror);
              this.#stream.on('finish', this.#onfinish);
              this.#prepared = true;
            }
            #onerror = error => {
              // @TODO: Handle this error
              console.error('Error uploading audio to Google Cloud Storage:', error);
            };
            #onfinish = () => {
              this.#stream.off('error', this.#onerror);
              this.#stream.off('finish', this.#onfinish);
              this.#stream = void 0;
            };
            append(chunk) {
              if (this.#browser) return;
              this.#buffer = _utils.RealtimeUtils.mergeInt16Arrays(this.#buffer, chunk);
              // Check if the buffer has reached the size limit
              if (this.#buffer.byteLength >= BUFFER_SIZE_LIMIT) {
                this.flush();
              }
            }
            flush() {
              if (this.#browser) return;
              if (this.#buffer.byteLength === 0) return;
              if (!this.#prepared) {
                // Reset the buffer, some audio is going to be lost
                // This should never happen, it is related with the `ready` method
                this.#buffer = new Int16Array(0);
                console.warn(`Speech storage is not prepared`);
                return;
              }
              // Write the current buffer to the GCS file stream
              this.#stream.write(Buffer.from(this.#buffer.buffer), error => {
                if (error) {
                  // @TODO: Handle this error
                  console.error('Error writing buffer to stream:', error);
                }
              });
              // Reset the buffer
              this.#buffer = new Int16Array(0);
            }
            close() {
              if (this.#browser) return;
              // Flush any remaining buffer data before closing
              this.flush();
              // End the writable stream to Cloud Storage
              this.#stream.end();
            }
          }
          exports.SpeechStorage = SpeechStorage;
        }
      });

      /*************************************
      INTERNAL MODULE: ./conversation/system
      *************************************/

      ims.set('./conversation/system', {
        hash: 2033797971,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentSystem = void 0;
          class AgentSystem {}
          exports.AgentSystem = AgentSystem;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 2589585034,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BaseRealtimeAgent = void 0;
          var _session = require("./session");
          var _conversation = require("./conversation");
          var _events = require("@beyond-js/events/events");
          /*bundle*/
          class BaseRealtimeAgent extends _events.Events {
            /**
             * Voice Audio Detection
             */
            #vad;
            get vad() {
              return this.#vad;
            }
            set vad(value) {
              this.#vad = value;
            }
            #session;
            get session() {
              return this.#session;
            }
            #manager;
            get manager() {
              return this.#manager;
            }
            get status() {
              return this.#session.status;
            }
            constructor(settings) {
              super();
              this.#session = new _session.AgentSession(this, settings);
              this.#manager = new _conversation.Conversation(this);
            }
            triger(event, ...data) {
              return super.trigger(event, ...data);
            }
            async connect() {
              return await this.#session.connect();
            }
            async close() {
              return await this.#session.close();
            }
          }
          exports.BaseRealtimeAgent = BaseRealtimeAgent;
        }
      });

      /*************************
      INTERNAL MODULE: ./session
      *************************/

      ims.set('./session', {
        hash: 1479595166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AgentSession = void 0;
          var _channel = require("@aimpact/agents-api/realtime/channel");
          var _utils = require("@aimpact/agents-api/realtime/utils");
          var _events = require("@beyond-js/events/events");
          const defaults = {
            url: 'wss://api.openai.com/v1/realtime',
            model: 'gpt-4o-mini-realtime-preview'
          };
          class AgentSession extends _events.Events {
            #agent;
            #channel;
            get channel() {
              return this.#channel;
            }
            #id;
            #config;
            #sessionProps = ['modalities', 'instructions', 'voice', 'output_audio_format', 'tools', 'tool_choice', 'temperature', 'max_output_tokens', 'input_audio_format', 'input_audio_transcription', 'turn_detection'];
            get error() {
              return this.#channel.error;
            }
            #created = false;
            get created() {
              return this.#created;
            }
            get status() {
              const {
                status
              } = this.#channel;
              return status === 'open' && this.#created ? 'created' : status;
            }
            constructor(agent, settings) {
              super();
              if (!settings?.key) throw new Error('OpenAI API key must be specified');
              this.#agent = agent;
              const headers = (() => {
                const {
                  key
                } = settings;
                if (_channel.Channel.browser) {
                  return ['realtime', `openai-insecure-api-key.${key}`, 'openai-beta.realtime-v1'];
                } else {
                  return {
                    Authorization: `Bearer ${key}`,
                    'OpenAI-Beta': 'realtime=v1'
                  };
                }
              })();
              this.#channel = new _channel.Channel({
                url: `${defaults.url}?model=${defaults.model}`,
                headers
              });
              this.#channel.on('open', this.#onopen);
              this.#channel.on('close', this.#onclose);
              this.#channel.on('message', this.#onmessage);
            }
            /**
             * Connect with the server
             *
             * Take care that the session status is 'connected' after the 'session.created' event is received,
             * not when the socket is connected.
             */
            connect() {
              if (this.status !== 'closed') throw new Error(`Session status must be 'closed' before trying to connect it`);
              return new Promise(resolve => {
                let timer;
                const oncreated = event => {
                  clearTimeout(timer);
                  this.#created = true;
                  this.#config = this.#sessionConfig(event.session, this.#sessionProps);
                  this.off('session.created', oncreated);
                  // console.log('agent trigger: session.created');
                  this.#agent.trigger('session.created');
                  // @TODO: Session created. @TODO: handle session data (id, settings)
                  resolve(true);
                };
                this.on('session.created', oncreated);
                const ontimeout = () => {
                  // @TODO: Log that the session hasn't been created
                  this.#channel.close();
                  resolve(false);
                };
                // Wait some seconds to the session to be created
                timer = setTimeout(ontimeout, 4000);
                this.#channel.connect();
              });
            }
            #onopen = () => this.trigger('open');
            #onclose = () => {
              // @TODO: Add a logic to log and/or reconnect the channel when it unexpectedly closed
              this.#created = false;
              this.trigger('close');
            };
            #onmessage = data => {
              let message;
              try {
                message = JSON.parse(data);
              } catch (exc) {
                // @TODO: Log error messages
                console.warn(`Open AI message cannot be parsed: ${exc.message}`, exc);
                return;
              }
              if (!message.type) {
                // @TODO: Log error
                console.warn('Open AI message type is not defined:', message);
                return;
              }
              if (message.error) {
                console.error('message', message);
              }
              // console.log('server trigger', message.type);
              this.trigger(message.type, message);
              if (message.type === 'session.updated') {
                console.log('server trigger session.ready');
                this.trigger('session.ready', message);
                this.#agent.trigger('session.ready');
              }
            };
            send(event, data) {
              if (this.status !== 'created') throw new Error(`Session is not created`);
              data = data || {};
              if (typeof data !== 'object') throw new Error(`data must be an object`);
              const id = data.event_id ? data.event_id : _utils.RealtimeUtils.generateId('evt_');
              data = Object.assign({
                event_id: id,
                type: event
              }, data);
              this.#channel.send(JSON.stringify(data));
              return true;
            }
            destroy() {
              this.#channel.off('open', this.#onopen);
              this.#channel.off('close', this.#onclose);
              this.#channel.off('message', this.#onmessage);
              if (['open', 'connecting'].includes(this.#channel.status)) this.#channel.close();
            }
            update(value) {
              this.#config = Object.assign({}, this.#config, value);
              const event = {
                type: 'session.update',
                event_id: _utils.RealtimeUtils.generateId('evt_'),
                session: this.#config
              };
              // Be sure that the session is created before updating it
              const update = () => this.send('session.update', event);
              this.status === 'created' ? update() : this.#agent.on('session.created', update);
            }
            async close() {
              return await this.#channel.close();
            }
            #sessionConfig(obj, keys) {
              const props = {};
              keys.forEach(key => props[key] = obj[key]);
              return props;
            }
          }
          exports.AgentSession = AgentSession;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "IVoiceAudioDetection",
        "name": "IVoiceAudioDetection"
      }, {
        "im": "./index",
        "from": "BaseRealtimeAgent",
        "name": "BaseRealtimeAgent"
      }, {
        "im": "./session",
        "from": "ISessionSettings",
        "name": "ISessionSettings"
      }, {
        "im": "./session",
        "from": "AgentStatusType",
        "name": "AgentStatusType"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IVoiceAudioDetection') && _export("IVoiceAudioDetection", IVoiceAudioDetection = require ? require('./index').IVoiceAudioDetection : value);
        (require || prop === 'BaseRealtimeAgent') && _export("BaseRealtimeAgent", BaseRealtimeAgent = require ? require('./index').BaseRealtimeAgent : value);
        (require || prop === 'ISessionSettings') && _export("ISessionSettings", ISessionSettings = require ? require('./session').ISessionSettings : value);
        (require || prop === 'AgentStatusType') && _export("AgentStatusType", AgentStatusType = require ? require('./session').AgentStatusType : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRlbXMiLCJyZXF1aXJlIiwiX3Jlc3BvbnNlcyIsIl9zcGVlY2giLCJMT0ciLCJDb252ZXJzYXRpb24iLCJpZCIsImFnZW50Iiwic3BlZWNoIiwiaXRlbXMiLCJyZXNwb25zZXMiLCJjb25zdHJ1Y3RvciIsIkl0ZW1zIiwiQ29udmVyc2F0aW9uUmVzcG9uc2VzIiwiU3BlZWNoIiwic2Vzc2lvbiIsIm9uIiwib25DcmVhdGVkIiwiYmluZCIsIm9uU3BlZWNoU3RhcnRlZCIsIm9uU3BlZWNoU3RvcHBlZCIsImxpc3RlbiIsImNodW5rIiwiYXBwZW5kIiwibG9nIiwiYXJncyIsImNvbnNvbGUiLCJldmVudCIsImNvbnZlcnNhdGlvbiIsIm9uU3RhcnRlZCIsInNwZWVjaFN0YXJ0ZWQiLCJhdWRpbyIsImV4cG9ydHMiLCJfdXRpbHMiLCJfZXZlbnRzIiwiQ29udmVyc2F0aW9uSXRlbUF1ZGlvIiwiRXZlbnRzIiwiZnJlcXVlbmN5IiwidmFsdWUiLCJJbnQxNkFycmF5IiwidHJ1bmNhdGVkIiwiYXVkaW9fZW5kX21zIiwiZW5kSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJzbGljZSIsIm1lcmdlIiwiI21lcmdlIiwiYnVmZmVyIiwiUmVhbHRpbWVVdGlscyIsImJhc2U2NFRvQXJyYXlCdWZmZXIiLCJtZXJnZUludDE2QXJyYXlzIiwiY3JlYXRlZCIsIml0ZW0iLCJ0eXBlIiwiY29udGVudCIsImZvckVhY2giLCJjb250ZW50UGFydEFkZGVkIiwicGFydCIsInRyaWdnZXIiLCJhdWRpb0RlbHRhIiwiZGVsdGEiLCJfdHJhbnNjcmlwdCIsIl9hdWRpbyIsIl90ZXh0IiwiQ29udmVyc2F0aW9uSXRlbUNvbnRlbnQiLCJzdGF0dXMiLCJ0ZXh0IiwiQ29udmVyc2F0aW9uSXRlbVRleHQiLCJ0cmFuc2NyaXB0IiwiQ29udmVyc2F0aW9uSXRlbVRyYW5zY3JpcHQiLCJyb2xlIiwidGV4dERlbHRhIiwiYXVkaW9UcmFuc2NyaXB0RGVsdGEiLCJ0cmFuc2NyaXB0aW9uQ29tcGxldGVkIiwiY29tcGxldGVkIiwiZG9uZSIsIl90b29sIiwiX2NvbnRlbnQiLCJDb252ZXJzYXRpb25JdGVtIiwidG9vbCIsIm91dHB1dCIsInJlc3BvbnNlIiwiYWRkZWQiLCJDb252ZXJzYXRpb25JdGVtVG9vbCIsIm5hbWUiLCJjYWxsZXIiLCJjYWxsX2lkIiwiYXJndW1lbnRzIiwiY2xlYXIiLCJlcnJvciIsIml0ZW1faWQiLCJDb252ZXJzYXRpb25JdGVtU3BlZWNoIiwiYXVkaW9fc3RhcnRfbXMiLCJzcGVlY2hTdG9wcGVkIiwic3RvcHBlZCIsImZ1bmN0aW9uQ2FsbEFyZ3VtZW50c0RlbHRhIiwiaW5wdXQiLCJzdGFydCIsImVuZCIsImRhdGEiLCJfaXRlbSIsIiNzZXNzaW9uIiwibG9va3VwIiwiTWFwIiwiaGFzIiwiZ2V0IiwiZGVsZXRlIiwic3BsaWNlIiwiaW5kZXhPZiIsImVycm9ycyIsIm9ycGhhbnMiLCJvbkl0ZW1DcmVhdGVkIiwib25JdGVtVHJ1bmNhdGVkIiwib25JdGVtRGVsZXRlZCIsIm9uVHJhbnNjcmlwdGlvbkNvbXBsZXRlZCIsIm9uUmVzcG9uc2VJdGVtQWRkZWQiLCJvblJlc3BvbnNlQ29udGVudFBhcnRBZGRlZCIsIm9uUmVzcG9uc2VBdWRpb1RyYW5zY3JpcHREZWx0YSIsIm9uUmVzcG9uc2VBdWRpb0RlbHRhIiwib25SZXNwb25zZVRleHREZWx0YSIsIm9uUmVzcG9uc2VGdW5jdGlvbkNhbGxBcmd1bWVudHNEZWx0YSIsIm9uUmVzcG9uc2VJdGVtRG9uZSIsImNyZWF0ZSIsInByZXZpb3VzIiwiZXZlbnRJZCIsImV2ZW50X2lkIiwicHJldmlvdXNfaXRlbV9pZCIsInNlbmQiLCJtZXNzYWdlIiwiRXJyb3IiLCJwdXNoIiwic2V0IiwicmVzcG9uc2VfaWQiLCJBZ2VudE1hbmFnZXJDb252ZXJzYXRpb25Qcm9ncmVzcyIsIkNvbnZlcnNhdGlvblJlc3BvbnNlIiwidXNhZ2UiLCJpbnB1dFRva2VucyIsIm91dHB1dFRva2VucyIsImlucHV0X3Rva2VucyIsIm91dHB1dF90b2tlbnMiLCJfcmVzcG9uc2UiLCJjb21taXQiLCJDdXJyZW50VXNlclNwZWVjaCIsImxlbmd0aCIsInZhZCIsImJ5dGVMZW5ndGgiLCJfc3RvcmFnZSIsIl9jdXJyZW50Iiwic3RvcmFnZSIsImN1cnJlbnQiLCJTcGVlY2hTdG9yYWdlIiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsImZsdXNoIiwiQlVGRkVSX1NJWkVfTElNSVQiLCJzdHJlYW0iLCJicm93c2VyIiwicHJlcGFyZWQiLCJnbG9iYWxUaGlzIiwicHJvY2VzcyIsInZlcnNpb25zIiwibm9kZSIsInJlYWR5IiwiY2F0Y2giLCJleGMiLCIjcmVhZHkiLCJTdG9yYWdlIiwiYmltcG9ydCIsImJ1Y2tldCIsImZpbGUiLCJjcmVhdGVXcml0ZVN0cmVhbSIsInJlc3VtYWJsZSIsImNvbnRlbnRUeXBlIiwib25lcnJvciIsIm9uZmluaXNoIiwiI29uZmluaXNoIiwib2ZmIiwid2FybiIsIndyaXRlIiwiQnVmZmVyIiwiZnJvbSIsImNsb3NlIiwiQWdlbnRTeXN0ZW0iLCJfc2Vzc2lvbiIsIl9jb252ZXJzYXRpb24iLCJCYXNlUmVhbHRpbWVBZ2VudCIsIm1hbmFnZXIiLCJzZXR0aW5ncyIsIkFnZW50U2Vzc2lvbiIsInRyaWdlciIsImNvbm5lY3QiLCJfY2hhbm5lbCIsImRlZmF1bHRzIiwidXJsIiwibW9kZWwiLCJjaGFubmVsIiwiY29uZmlnIiwic2Vzc2lvblByb3BzIiwia2V5IiwiaGVhZGVycyIsIkNoYW5uZWwiLCJBdXRob3JpemF0aW9uIiwib25vcGVuIiwib25jbG9zZSIsIm9ubWVzc2FnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGltZXIiLCJvbmNyZWF0ZWQiLCJjbGVhclRpbWVvdXQiLCJzZXNzaW9uQ29uZmlnIiwib250aW1lb3V0Iiwic2V0VGltZW91dCIsIiNvbm9wZW4iLCIjb25jbG9zZSIsIkpTT04iLCJwYXJzZSIsImdlbmVyYXRlSWQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHJpbmdpZnkiLCJkZXN0cm95IiwiaW5jbHVkZXMiLCJ1cGRhdGUiLCIjc2Vzc2lvbkNvbmZpZyIsIm9iaiIsImtleXMiLCJwcm9wcyJdLCJzb3VyY2VzIjpbIi8vY29udmVyc2F0aW9uL2luZGV4LnRzIiwiLy9jb252ZXJzYXRpb24vaXRlbS9hdWRpby50cyIsIi8vY29udmVyc2F0aW9uL2l0ZW0vY29udGVudC50cyIsIi8vY29udmVyc2F0aW9uL2l0ZW0vaW5kZXgudHMiLCIvL2NvbnZlcnNhdGlvbi9pdGVtL3NwZWVjaC50cyIsIi8vY29udmVyc2F0aW9uL2l0ZW0vdGV4dC50cyIsIi8vY29udmVyc2F0aW9uL2l0ZW0vdG9vbC50cyIsIi8vY29udmVyc2F0aW9uL2l0ZW0vdHJhbnNjcmlwdC50cyIsIi8vY29udmVyc2F0aW9uL2l0ZW1zLnRzIiwiLy9jb252ZXJzYXRpb24vcHJvZ3Jlc3MudHMiLCIvL2NvbnZlcnNhdGlvbi9yZXNwb25zZS50cyIsIi8vY29udmVyc2F0aW9uL3Jlc3BvbnNlcy50cyIsIi8vY29udmVyc2F0aW9uL3NwZWVjaC9jdXJyZW50LnRzIiwiLy9jb252ZXJzYXRpb24vc3BlZWNoL2luZGV4LnRzIiwiLy9jb252ZXJzYXRpb24vc3BlZWNoL3N0b3JhZ2UudHMiLCIvL2NvbnZlcnNhdGlvbi9zeXN0ZW0udHMiLCIvL2luZGV4LnRzLyIsIi8vc2Vzc2lvbi50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBTUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsVUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsT0FBQSxHQUFBRixPQUFBO1VBRUEsTUFBTUcsR0FBRyxHQUFHLEtBQUs7VUFFWCxNQUFPQyxZQUFZO1lBQ3hCLENBQUFDLEVBQUc7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TyxDQUFDO2NBQ3ZDLElBQUksQ0FBQyxDQUFBUCxPQUFRLENBQUNuQixHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBMkIsT0FBUSxDQUFDO2NBQ3pDLElBQUksQ0FBQyxDQUFBUixPQUFRLENBQUNuQixHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBNEIsU0FBVSxDQUFDO2NBQzdDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUNrQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEzQixPQUFRLENBQUNqSSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQWlJLE9BQVEsQ0FBQ2QsS0FBSyxFQUFFO1lBQ2pGO1lBRUEwQyxNQUFNQSxDQUFDekwsS0FBOEI7Y0FDcEMsSUFBSSxDQUFDLENBQUE4SixNQUFPLEdBQUdzQixNQUFNLENBQUNDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUF2QixNQUFPLEVBQUU5SixLQUFLLENBQUM7Y0FDckQsTUFBTVgsS0FBSyxHQUE4QjtnQkFDeEMyQixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QndFLFFBQVEsRUFBRTdGLE1BQUEsQ0FBQWdCLGFBQWEsQ0FBQ3dLLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQzFDMU0sT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBcUw7ZUFDZDtjQUVEO2NBQ0EsTUFBTTJCLE1BQU0sR0FBR0EsQ0FBQSxLQUFNLElBQUksQ0FBQy9GLElBQUksQ0FBQyxnQkFBZ0IsRUFBRXJHLEtBQUssQ0FBQztjQUN2RCxJQUFJLENBQUN1QyxNQUFNLEtBQUssU0FBUyxHQUFHNkosTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUF4TixLQUFNLENBQUNTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRStNLE1BQU0sQ0FBQztZQUNqRjtZQUVBLE1BQU0xQyxLQUFLQSxDQUFBO2NBQ1YsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFBYyxPQUFRLENBQUNkLEtBQUssRUFBRTtZQUNuQztZQUVBLENBQUE2QixhQUFjYyxDQUF1QkMsR0FBTSxFQUFFQyxJQUFTO2NBQ3JELE1BQU1DLEtBQUssR0FBRyxFQUFnQjtjQUM5QkQsSUFBSSxDQUFDMUssT0FBTyxDQUFDOEksR0FBRyxJQUFLNkIsS0FBSyxDQUFDN0IsR0FBRyxDQUFDLEdBQUcyQixHQUFHLENBQUMzQixHQUFHLENBQUUsQ0FBQztjQUM1QyxPQUFPNkIsS0FBSztZQUNiOztVQUNBbk0sT0FBQSxDQUFBNEosWUFBQSxHQUFBQSxZQUFBIiwiaWdub3JlTGlzdCI6W119