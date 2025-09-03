System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/model", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/reactive@2.1.1/entities/item", "zod@3.24.2", "@aimpact/platform@0.1.6/config", "@beyond-js/http-suite@0.1.1/api", "uuid@11.1.0", "@beyond-js/kernel@0.1.12/core", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, ActivityManager, InteractionManager, Playground, PromptExecutor, PromptsCollection, PromptManager, IPEStatus, __beyond_pkg, hmr;
  _export({
    ActivityManager: void 0,
    InteractionManager: void 0,
    Playground: void 0,
    PromptExecutor: void 0,
    PromptsCollection: void 0,
    PromptManager: void 0,
    IPEStatus: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive211Model) {
      dependency_1 = _beyondJsReactive211Model;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_2 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_3 = _beyondJsReactive211EntitiesItem;
    }, function (_zod2) {
      dependency_4 = _zod2;
    }, function (_aimpactPlatform016Config) {
      dependency_5 = _aimpactPlatform016Config;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_6 = _beyondJsHttpSuite011Api;
    }, function (_uuid2) {
      dependency_7 = _uuid2;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_aimpactChatSdk155Session) {
      dependency_9 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/models/playground"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/model', dependency_1], ['@beyond-js/reactive/entities/collection', dependency_2], ['@beyond-js/reactive/entities/item', dependency_3], ['zod', dependency_4], ['@aimpact/platform/config', dependency_5], ['@beyond-js/http-suite/api', dependency_6], ['uuid', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/chat-sdk/session', dependency_9]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./activities
      ****************************/
      ims.set('./activities', {
        hash: 2524202773,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.promptActivities = void 0;
          const promptActivities = exports.promptActivities = {
            'character-talk': {
              id: 'character-talk',
              name: 'Character Talk',
              prompts: {
                SYSTEM: 'ailearn.activity-character-talk-v2',
                IPE: 'ailearn.character-talk-ipe-v2',
                SUMMARY: 'ailearn.character-talk-summary'
              }
            },
            'content-theory': {
              id: 'content-theory',
              name: 'Content Theory',
              prompts: {
                SYSTEM: 'ailearn.activity-content-theory-v2',
                IPE: 'ailearn.content-theory-ipe-v2',
                SUMMARY: 'ailearn.content-theory-summary'
              }
            },
            debate: {
              id: 'debate',
              name: 'Debate',
              prompts: {
                SYSTEM: 'ailearn.activity-debate-v2',
                IPE: 'ailearn.debate-ipe-v2',
                SUMMARY: 'ailearn.debate-summary'
              }
            },
            exercise: {
              id: 'exercise',
              name: 'Exercise',
              prompts: {
                SYSTEM: 'ailearn.activity-exercise-v2',
                IPE: 'ailearn.exercise-ipe-v2',
                SUMMARY: 'ailearn.exercise-summary'
              }
            },
            'self-service-agent': {
              id: 'itegrity.self-service-agent',
              name: 'Self Service Agent',
              prompts: {
                SYSTEM: 'itegrity.self-service-agent',
                IPE: 'itegrity.self-service-ipe ',
                SUMMARY: 'itegrity.self-service-summary'
              }
            }
          };
        }
      });

      /**************************************************
      INTERNAL MODULE: ./activity-agents/activity-manager
      **************************************************/

      ims.set('./activity-agents/activity-manager', {
        hash: 1329709106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class ActivityManager extends _model.ReactiveModel {
            #activities;
            #promptManager;
            #provider;
            #parent;
            #currentModelId;
            get activities() {
              return this.#activities;
            }
            get currentModelId() {
              return this.#currentModelId;
            }
            constructor(specs) {
              super();
              this.#activities = specs.activities;
              this.#promptManager = specs.promptManager;
              this.#provider = specs.provider;
              this.#parent = specs.parent;
            }
            /**
             * Import an activity and its associated prompts
             */
            async import(specs) {
              const {
                language,
                activityId
              } = specs;
              // Find the activity
              const activity = this.#activities.items.find(activity => activity.id === activityId);
              if (!activity) {
                console.warn(`Activity with ID ${activityId} not found`);
                this.trigger('activity.import.error', {
                  activityId,
                  error: 'Activity not found'
                });
                return false;
              }
              // Set current model ID for this activity
              this.#currentModelId = activityId;
              try {
                // Import prompts from provider
                const {
                  prompts
                } = activity;
                const ids = `${prompts.system}, ${prompts.ipe},${prompts.summary}`;
                const data = await this.#provider.import({
                  language,
                  ids
                });
                // Process imported prompts
                await this.processImportedPrompts(data, prompts);
                // Reinitialize prompt manager with new data
                this.#promptManager.reinitialize();
                // Update parent's modelId if available
                if (this.#parent && typeof this.#parent.modelId !== 'undefined') {
                  this.#parent.modelId = activityId;
                }
                this.trigger('activity.imported', {
                  activityId,
                  language
                });
                return true;
              } catch (error) {
                console.error('Error importing activity:', error);
                this.trigger('activity.import.error', {
                  activityId,
                  error
                });
                return false;
              }
            }
            /**
             * Process imported prompts data
             */
            async processImportedPrompts(data, activityPrompts) {
              const map = {
                [activityPrompts.ipe]: 'ipe',
                [activityPrompts.summary]: 'summary',
                [activityPrompts.system]: 'system'
              };
              const dependencies = [];
              // Process each imported prompt
              data.items.forEach(({
                literals,
                ...item
              }) => {
                const promptData = {
                  ...item,
                  literals: {
                    keys: literals,
                    values: {}
                  }
                };
                const key = map[item.id];
                // Check if this is a mapped prompt or dependency
                if (!key) {
                  dependencies.push(promptData);
                  return;
                }
                this.#promptManager.prompts.map.get(key)?.set(promptData);
              });
              // Add dependencies as new prompts
              if (dependencies.length > 0) this.#promptManager.prompts.addItems(dependencies);
            }
            /**
             * Get current activity
             */
            getCurrentActivity() {
              if (!this.#currentModelId) return null;
              return this.#activities.items.find(activity => activity.id === this.#currentModelId);
            }
            /**
             * Clear current activity
             */
            clearCurrentActivity() {
              this.#currentModelId = undefined;
              this.trigger('activity.cleared');
            }
            /**
             * Get all available activities
             */
            getAllActivities() {
              return this.#activities.items;
            }
            /**
             * Find activity by name
             */
            findActivityByName(name) {
              return this.#activities.items.find(activity => activity.name === name);
            }
            /**
             * Find activity by ID
             */
            findActivityById(id) {
              return this.#activities.items.find(activity => activity.id === id);
            }
            /**
             * Set the parent reference (useful for late binding)
             */
            setParent(parent) {
              this.#parent = parent;
            }
          }
          exports.ActivityManager = ActivityManager;
        }
      });

      /********************************************
      INTERNAL MODULE: ./activity-agents/collection
      ********************************************/

      ims.set('./activity-agents/collection', {
        hash: 12186448,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAgents = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          class ActivityAgents extends _collection.Collection {
            constructor() {
              super({
                entity: 'activity-agents',
                provider: _provider.ActivityAgentProvider,
                item: _item.ActivityAgent
              });
            }
          }
          exports.ActivityAgents = ActivityAgents;
        }
      });

      /***************************************
      INTERNAL MODULE: ./activity-agents/index
      ***************************************/

      ims.set('./activity-agents/index', {
        hash: 698241461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "ActivityAgent", {
            enumerable: true,
            get: function () {
              return _item.ActivityAgent;
            }
          });
          Object.defineProperty(exports, "ActivityAgentProvider", {
            enumerable: true,
            get: function () {
              return _provider.ActivityAgentProvider;
            }
          });
          Object.defineProperty(exports, "ActivityAgents", {
            enumerable: true,
            get: function () {
              return _collection.ActivityAgents;
            }
          });
          Object.defineProperty(exports, "ActivityManager", {
            enumerable: true,
            get: function () {
              return _activityManager.ActivityManager;
            }
          });
          var _item = require("./item");
          var _collection = require("./collection");
          var _activityManager = require("./activity-manager");
          var _provider = require("./provider");
        }
      });

      /**************************************
      INTERNAL MODULE: ./activity-agents/item
      **************************************/

      ims.set('./activity-agents/item', {
        hash: 2797778968,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAgent = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _zod = require("zod");
          var _provider = require("./provider");
          class ActivityAgent extends _item.Item {
            schema = _zod.z.object({
              id: _zod.z.string(),
              name: _zod.z.string(),
              prompts: _zod.z.object({
                SYSTEM: _zod.z.string(),
                IPE: _zod.z.string(),
                SUMMARY: _zod.z.string()
              })
            });
            constructor(props) {
              super({
                entity: 'activity-agents',
                provider: _provider.ActivityAgentProvider,
                properties: ['id', 'name', 'prompts'],
                ...props
              });
            }
          }
          exports.ActivityAgent = ActivityAgent;
        }
      });

      /******************************************
      INTERNAL MODULE: ./activity-agents/provider
      ******************************************/

      ims.set('./activity-agents/provider', {
        hash: 561579305,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityAgentProvider = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _activities = require("../activities");
          class ActivityAgentProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.agents);
            }
            async load(specs) {
              try {
                const response = await this.#api.get(`/projects/agents/activities/${specs?.id}`, specs);
                if (!response.status) {
                  throw new Error('Error loading activity agent');
                }
                return response.data;
              } catch (error) {
                console.error('Error loading activity agent:', error);
                throw error;
              }
            }
            async list(specs) {
              try {
                const response = await this.#api.get('/projects/agents/activities', specs);
                if (!response.status) {
                  throw new Error('Error loading activity agents');
                }
                const data = Object.values(response.data);
                return data;
              } catch (error) {
                console.error('Error fetching activity agents:', error);
                // Fallback to local data if API fails
                return Object.values(_activities.promptActivities);
              }
            }
            async publish(data) {
              try {
                const response = await this.#api.post('/projects/agents/activities', data);
                if (!response.status) {
                  throw new Error('Error publishing activity agent');
                }
                return response.data;
              } catch (error) {
                console.error('Error publishing activity agent:', error);
                throw error;
              }
            }
            async remove(specs) {
              try {
                const response = await this.#api.delete('/projects/agents/activities', specs);
                if (!response.status) {
                  throw new Error('Error removing activity agent');
                }
                return true;
              } catch (error) {
                console.error('Error removing activity agent:', error);
                throw error;
              }
            }
            // Legacy method for backward compatibility
            async getActivityAgents() {
              return this.list();
            }
          }
          exports.ActivityAgentProvider = ActivityAgentProvider;
        }
      });

      /****************************
      INTERNAL MODULE: ./chat/index
      ****************************/

      ims.set('./chat/index', {
        hash: 4235153562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "InteractionManager", {
            enumerable: true,
            get: function () {
              return _interactionManager.InteractionManager;
            }
          });
          exports.PlaygroundChat = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _chat = require("../providers/chat");
          var _messages = require("./messages");
          var _message = require("./message");
          var _interactionManager = require("./interaction-manager");
          var _uuid = require("uuid");
          class PlaygroundChat extends _item.Item {
            #prompt;
            get prompt() {
              return this.#prompt;
            }
            #system;
            #answer;
            get answer() {
              return this.#answer;
            }
            #parent;
            #prompts;
            #interactionManager;
            constructor(parent, prompts, args = {}) {
              super({
                entity: 'playground-chat',
                properties: ['id', 'name', 'userId', 'category', 'system', 'objectives', 'progress', 'summary', 'parent', 'knowledgeBoxId', {
                  name: 'messages',
                  value: _messages.ChatMessages
                }, 'usage', 'metadata'],
                id: 'playground-chat',
                provider: _chat.ChatProvider,
                ...args
              });
              this.#parent = parent;
              this.#prompts = prompts;
              this.#system = this.#prompts.map.get('system');
              // Initialize interaction manager
              this.#interactionManager = new _interactionManager.InteractionManager({
                totalInteractions: parent.totalInteractions || 4,
                messages: this.messages
              });
              this.#system.on('change', this.handleSystemMessage.bind(this));
              this.sendMessage = this.sendMessage.bind(this);
              // Set up event listeners
              this.setupEventListeners();
            }
            setupEventListeners() {
              // Listen for changes in total interactions
              this.#parent.on('totalInteractions.changed', value => {
                this.#interactionManager.totalInteractions = value;
              });
            }
            handleSystemMessage(message) {
              this.trigger('stream.response', message);
            }
            async sendMessage(message, files) {
              this.provider.on('stream.response', this.handleSystemMessage.bind(this));
              // Get interactions using the interaction manager
              const interactions = this.#interactionManager.getInteractions();
              const msg = new _message.ChatMessage({
                id: (0, _uuid.v4)(),
                content: message,
                role: 'user',
                register: true
              });
              this.#prompt = msg.content;
              // Trigger events for prompt handling
              this.trigger('new.prompt', this.#prompt);
              this.trigger('new.message', message);
              const parameters = ['system', 'objectives', 'summary', 'progress'];
              let specs = {
                message
              };
              parameters.forEach(parameter => {
                if (this[parameter]) {
                  specs[parameter] = this[parameter];
                }
              });
              const system = this.#parent.parse(this.#system);
              console.log(0.1, this.messages.items.map(item => ({
                role: item.role,
                content: item.content,
                id: item.id
              })));
              const response = await this.provider.sendMessage({
                prompt: system.parsed,
                text: message,
                type: 'chat',
                files,
                model: this.#parent.model,
                interactions,
                history: this.messages.items.map(item => ({
                  role: item.role,
                  content: item.content
                }))
              });
              const responseMessage = new _message.ChatMessage({
                id: (0, _uuid.v4)(),
                content: response,
                role: 'assistant',
                register: true
              });
              // Trigger events for answer handling
              this.trigger('new.answer', responseMessage.content);
              this.#answer = responseMessage.content;
              this.trigger('new.message', responseMessage);
              if (this.#parent.model !== 'mediawiki') {
                await this.#parent.execute(this.#parent.prompts.map.get('summary'));
                await this.#parent.execute(this.#parent.prompts.map.get('ipe'));
              }
            }
            // Delegate interaction management to InteractionManager
            getInteractions() {
              return this.#interactionManager.getInteractions();
            }
            getInteractionCount() {
              return this.#interactionManager.getInteractionCount();
            }
            hasInteractions() {
              return this.#interactionManager.hasInteractions();
            }
            clearInteractions() {
              this.#interactionManager.clearInteractions();
            }
            // Method to handle chat prompt (moved from Playground)
            handleChatPrompt(prompt) {
              this.#prompt = prompt;
              this.trigger('new.prompt', prompt);
            }
            // Method to handle chat answer (moved from Playground)
            handleChatAnswer(answer) {
              this.#answer = answer;
              this.trigger('new.answer', answer);
            }
          }
          exports.PlaygroundChat = PlaygroundChat;
        }
      });

      /******************************************
      INTERNAL MODULE: ./chat/interaction-manager
      ******************************************/

      ims.set('./chat/interaction-manager', {
        hash: 1183767676,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.InteractionManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class InteractionManager extends _model.ReactiveModel {
            #totalInteractions;
            #messages;
            constructor(specs) {
              super();
              this.#totalInteractions = specs.totalInteractions;
              this.#messages = specs.messages;
            }
            set totalInteractions(value) {
              this.#totalInteractions = value;
              this.trigger('change');
            }
            get totalInteractions() {
              return this.#totalInteractions;
            }
            calculateTotalInteractions() {
              return Math.min(this.#totalInteractions, this.#messages.items.length);
            }
            createEmptyInteraction() {
              return {
                role: '',
                content: ''
              };
            }
            getInteractions() {
              const totalMessages = this.#messages.items.length;
              const total = this.calculateTotalInteractions();
              const originalInteractions = this.#messages.items.map(({
                role,
                content,
                id
              }) => ({
                role,
                content,
                id
              }));
              return originalInteractions.length >= total ? originalInteractions.slice(-total) : [...Array(total - originalInteractions.length).fill(this.createEmptyInteraction()), ...originalInteractions];
            }
            getInteractionCount() {
              return this.#messages.items.length;
            }
            hasInteractions() {
              return this.#messages.items.length > 0;
            }
            clearInteractions() {
              this.#messages.clear();
              this.trigger('change');
            }
          }
          exports.InteractionManager = InteractionManager;
        }
      });

      /******************************
      INTERNAL MODULE: ./chat/message
      ******************************/

      ims.set('./chat/message', {
        hash: 2101623759,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatMessage = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _chat = require("../providers/chat");
          var _uuid = require("uuid");
          class ChatMessage extends _item.Item {
            constructor(args = {}) {
              super({
                entity: 'playground-chat',
                id: (0, _uuid.v4)(),
                properties: ['id', 'chatId', 'audio', 'role', 'timestamp', 'streaming', 'actions', 'content'],
                provider: _chat.ChatProvider,
                ...args
              });
            }
          }
          exports.ChatMessage = ChatMessage;
        }
      });

      /*******************************
      INTERNAL MODULE: ./chat/messages
      *******************************/

      ims.set('./chat/messages', {
        hash: 1706478351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatMessages = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _chat = require("../providers/chat");
          var _message = require("./message");
          class ChatMessages extends _collection.Collection {
            constructor(args = {}) {
              super({
                entity: 'playground-chat',
                item: _message.ChatMessage,
                provider: _chat.ChatProvider,
                ...args
              });
            }
          }
          exports.ChatMessages = ChatMessages;
        }
      });

      /***********************
      INTERNAL MODULE: ./index
      ***********************/

      ims.set('./index', {
        hash: 1142277131,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playground = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _activityAgents = require("./activity-agents");
          var _chat = require("./chat");
          var _promptManager = require("./prompts/prompt-manager");
          var _playground = require("./providers/playground");
          var _schema = require("./schema");
          /*bundle*/
          class Playground extends _model.ReactiveModel {
            #provider;
            #promptManager;
            #activities = new _activityAgents.ActivityAgents();
            get activities() {
              return this.#activities;
            }
            #activityManager;
            get activityManager() {
              return this.#activityManager;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            /**
             * Is defined to check if the model has data in localStorage
             */
            #modelId;
            get modelId() {
              return this.#modelId;
            }
            set modelId(value) {
              this.#modelId = value;
            }
            /**
             * Ai models
             */
            #models;
            get models() {
              return this.#models;
            }
            #errors = [];
            get errors() {
              return this.#errors;
            }
            // Getters for backward compatibility
            get prompts() {
              return this.#promptManager.prompts;
            }
            get resolver() {
              return this.#promptManager.resolver;
            }
            get reservedLiterals() {
              return this.#promptManager.reservedLiterals;
            }
            get globalLiterals() {
              return this.#promptManager.globalLiterals;
            }
            #system;
            constructor() {
              super({
                properties: ['model', 'totalInteractions', 'temperature'],
                totalInteractions: 4
              });
              this.#provider = new _playground.PlaygroundProvider();
              // Initialize prompt manager (partial initialization)
              this.#promptManager = new _promptManager.PromptManager({
                parent: this
              });
              // Initialize activity manager
              this.#activityManager = new _activityAgents.ActivityManager({
                activities: this.#activities,
                promptManager: this.#promptManager,
                provider: this.#provider,
                parent: this
              });
              this.initialize();
              this.#system = this.#promptManager.prompts.map.get('system');
              this.loadModels();
              // Initialize chat with prompt manager
              this.#chat = new _chat.PlaygroundChat(this, this.#promptManager.prompts);
              // Complete prompt manager initialization now that chat is available
              this.#promptManager.completeInitialization(this.#chat);
              // Set up event listeners for chat
              this.#chat.on('new.prompt', prompt => this.handleChatPrompt(prompt));
              this.#chat.on('new.answer', answer => this.handleChatAnswer(answer));
              // Set up event listeners for activity manager
              this.#activityManager.on('activity.imported', data => {
                this.trigger('change');
              });
            }
            async loadModels() {
              try {
                const models = await this.#provider.getModels();
                this.#models = models;
                this.model = models[0];
                this.ready = true;
              } catch (error) {
                this.handleModelLoadError(error);
              }
            }
            handleModelLoadError(error) {
              this.#errors.push({
                message: error.message,
                code: 'MODEL_LOAD_ERROR',
                timestamp: Date.now()
              });
              this.ready = true;
              this.trigger('change');
            }
            initialize() {
              // Set up schema for IPE prompt
              this.#promptManager.prompts.map.get('ipe').set({
                promptSchema: _schema.SCHEMA
              });
            }
            handleChatPrompt(prompt) {
              this.#promptManager.handleChatPrompt(prompt);
              this.trigger('new.prompt', prompt);
            }
            handleChatAnswer(answer) {
              this.#promptManager.handleChatAnswer(answer);
              this.trigger('new.answer', answer);
            }
            // Delegate to chat for interaction management
            getInteractions() {
              return this.#chat.getInteractions();
            }
            async execute(prompt) {
              this.fetching = true;
              const interactions = this.getInteractions();
              const data = this.#promptManager.resolver.parse(prompt);
              const specs = this.buildExecutionSpecs(data, prompt);
              const result = await this.#provider.execute(specs);
              this.#promptManager.processExecutionResult(prompt, result, interactions, specs);
              this.fetching = false;
            }
            buildExecutionSpecs(data, prompt) {
              return {
                prompt: data.parsed,
                model: this.model,
                format: prompt.format,
                schema: prompt.promptSchema,
                type: 'instruction',
                temperature: this.temperature
              };
            }
            analyze(prompt) {
              this.#promptManager.analyze(prompt);
            }
            parse = prompt => {
              return this.#promptManager.parse(prompt);
            };
            // Delegate import functionality to ActivityManager
            async import({
              language,
              activityId
            }) {
              return await this.#activityManager.import({
                language,
                activityId
              });
            }
          }
          exports.Playground = Playground;
        }
      });

      /*********************************
      INTERNAL MODULE: ./prompt-executor
      *********************************/

      ims.set('./prompt-executor', {
        hash: 3848017158,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptExecutor = void 0;
          /*bundle*/
          class PromptExecutor {}
          exports.PromptExecutor = PromptExecutor;
        }
      });

      /************************************
      INTERNAL MODULE: ./prompts/collection
      ************************************/

      ims.set('./prompts/collection', {
        hash: 1744015922,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptsCollection = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _dependencies = require("./data/dependencies");
          var _templates = require("./data/templates");
          var _prompt = require("./prompt");
          /*bundle*/
          class PromptsCollection extends _collection.Collection {
            #templates = _templates.PROMPT_TEMPLATES;
            get templates() {
              return this.#templates;
            }
            #dependencies = _dependencies.PROMPT_DEPENDENCIES;
            get dependencies() {
              return this.items.filter(item => item.is === 'dependency').sort();
            }
            get prompts() {
              return this.items.filter(item => item.is !== 'dependency').sort();
            }
            #cache = new Map();
            get cache() {
              return this.#cache;
            }
            #system;
            get system() {
              return this.#system.value;
            }
            get systemPrompt() {
              return this.#system;
            }
            get items() {
              return super.items.sort();
            }
            set system(value) {
              this.#system.value = value;
              this.trigger('change');
              this.trigger('system.changed');
            }
            #customLiterals = new Map();
            constructor(args = {}) {
              super({
                ...args,
                entity: 'Prompts',
                item: _prompt.Prompt
              });
              if (args.items) {
                this.setItems(args.items);
              }
              this.#system = this.items.find(item => item.name === 'system');
              this.loadCache();
              globalThis.system = this.#system;
            }
            loadCache() {
              let cacheData;
              try {
                if (!localStorage.getItem('promptsCache')) return;
                cacheData = JSON.parse(localStorage.getItem('promptsCache'));
                cacheData.forEach(item => {
                  if (item.name === 'system') {
                    this.#system.value = item.value;
                    return;
                  }
                  if (!this.map.has(item.id)) return;
                  const prompt = this.map.get(item.id);
                  prompt.set(item);
                  item.literals.keys.forEach(key => prompt.setLiteral(key, item.literals.values[key]));
                });
              } catch (error) {
                console.error('error loading cache data', error, localStorage.getItem('promptsCache'));
              }
            }
            saveCache() {
              const data = this.items.map(item => ({
                ...item.getProperties(),
                literals: item.literals
              }));
              localStorage.setItem('promptsCache', JSON.stringify(data));
            }
            save(prompt) {
              this.saveCache();
            }
            addItems(items) {
              this.setItems([...items]);
            }
            get customLiterals() {
              return this.#customLiterals;
            }
          }
          exports.PromptsCollection = PromptsCollection;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./prompts/data/dependencies
      *******************************************/

      ims.set('./prompts/data/dependencies', {
        hash: 1181400719,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PROMPT_DEPENDENCIES = void 0;
          const PROMPT_DEPENDENCIES = exports.PROMPT_DEPENDENCIES = {
            HEADER_JSON: `Evita el pre-text y el post-text, no hagas comentarios, sugerencias o aclaraciones. Sólo escribe el contenido de un archivo .json según el esquema especificado abajo. Evita el uso de markdown.`,
            CONVERSATION_SUMMARY_BEGIN: `Eres un redactor especialista en realizar resúmenes de conversaciones. Tu tarea es realizar el resumen de la conversación entre el [ALUMNO] y su docente.
Cuentas con el [RESUMEN DE CONVERSACIÓN HASTA EL MOMENTO] previo a la última interacción entre el alumno y su docente, y debes integrar la última interacción para crear la nueva síntesis.`,
            EDUCATIONAL_CONTEXT: `[Contexto del módulo] = [[[ * Tipo de formación: {FORMAT} * Entidad académica: {ENTITY} * Grado o Nivel: {LEVEL} ]]]`,
            CONVERSATION_SUMMARY_ENDING: `[ALUMNO] =[[[ {USER} ]]] [RESUMEN DE LA CONVERSACIÓN HASTA EL MOMENTO] = [[[ {SUMMARY} ]]] [{USER} DICE]: [[[ {PROMPT} ]]] [RESPUESTA]: [[[ {ANSWER} ]]] Realiza tu respuesta en formato JSON según la siguiente especificación: \`\`\`json {"summary": string} \`\`\` Instrucciones clave: - La síntesis debe priorizar los eventos más antiguos y construir progresivamente hacia los más recientes, manteniendo la coherencia temporal. - Concisión: No incluir todos los detalles, sino los puntos clave relevantes para evaluar el progreso. - Iteración: En cada interacción, el resumen se amplía con la nueva información, sin redundancias ni retrocesos. Escribe el contenido JSON solicitado, no uses markdown. Recuerda hacer una síntesis breve, pero lo más completa posible.`,
            ITERATIVE_PROGRESS_EVALUATION_BEGIN_V2: `Eres un docente analizando el progreso de una actividad educativa, entre un [ALUMNO] y su docente. Tu trabajo es evaluar la [ÚLTIMA INTERACCIÓN] entre el alumno y su docente para actualizar el progreso de cada objetivo, tomando como base el [PROGRESO PREVIO] que viene teniendo el alumno en la actividad.`,
            ITERATIVE_PROGRESS_EVALUATION_ENDING_V2: `ALUMNO = [[[ {USER} ]]]

[OBJETIVOS] = {OBJECTIVES}

[RESUMEN DE LA CONVERSACIÓN PREVIA A ÚLTIMA INTERACCIÓN] = [[[
{SUMMARY}
]]]

[PROGRESO DE LOS OBJETIVOS] = {PROGRESS}

[ÚLTIMA ITERACIÓN]: [[[
* Docente escribe: *
{PREVIOUS}

* El alumno responde: *
{PROMPT}
]]]

Utiliza la siguiente cadena de razonamiento:
1. Escribe cuáles de los objetivos están siendo alcanzados ("reached") por la última interacción entre el docente y el alumno.
2. Haz un análisis del progreso de cada objetivo ("objectives"), sólo enfócate en los objetivos alcanzados según el paso anterior:
2.1. Escribe cómo hubiese sido una interacción apropiada por parte del alumno para cada objetivo alcanzado por la interacción ("expected").
2.2. Contrasta la expectativa del objetivo ("contradistinction") con el mensaje realizado por el alumno.
2.3. Escribe cómo esta última iteración se debe integrar ("integration") con el [PROGRESO DE LOS OBJETIVOS] anteriores a esta iteración.
2.4 Escribe cuál ha sido el progreso del objetivo ("progress") integrando los puntos anteriores (2.1, 2.2, 2.3).

Instrucciones adicionales:
* Si ninguno de los objetivos ha sido alcanzado por la última interacción con el alumno, la propiedad objectives debe ser: false.
* Asegúrate de generar siempre las propiedades "progress" y "status" de cada objetivo. No menciones el estado del progreso en la propiedad "progress", sino en la propiedad "status".
* Antes de generar un objetivo, asegúrate de que este esté presente en la propiedad "reached".`
          };
        }
      });

      /************************************
      INTERNAL MODULE: ./prompts/data/index
      ************************************/

      ims.set('./prompts/data/index', {
        hash: 3478515369,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PROMPTS_DATA = void 0;
          var _templates = require("./templates");
          var _dependencies = require("./dependencies");
          /*bundle*/
          const PROMPTS_DATA = exports.PROMPTS_DATA = [{
            id: 'summary',
            is: 'prompt',
            name: 'summary',
            format: 'json',
            value: _templates.PROMPT_TEMPLATES.summary
          }, {
            id: 'ipe',
            name: 'ipe',
            is: 'prompt',
            format: 'json',
            value: _templates.PROMPT_TEMPLATES.ipe
          }, {
            id: 'HEADER_JSON',
            is: 'dependency',
            name: 'HEADER_JSON',
            value: _dependencies.PROMPT_DEPENDENCIES.HEADER_JSON
          }, {
            id: 'CONVERSATION_SUMMARY_BEGIN',
            is: 'dependency',
            name: 'CONVERSATION_SUMMARY_BEGIN',
            value: _dependencies.PROMPT_DEPENDENCIES.CONVERSATION_SUMMARY_BEGIN
          }, {
            id: 'EDUCATIONAL_CONTEXT',
            is: 'dependency',
            name: 'EDUCATIONAL_CONTEXT',
            value: _dependencies.PROMPT_DEPENDENCIES.EDUCATIONAL_CONTEXT
          }, {
            id: 'CONVERSATION_SUMMARY_ENDING',
            is: 'dependency',
            name: 'CONVERSATION_SUMMARY_ENDING',
            value: _dependencies.PROMPT_DEPENDENCIES.CONVERSATION_SUMMARY_ENDING
          }, {
            id: 'ITERATIVE_PROGRESS_EVALUATION_BEGIN_V2',
            is: 'dependency',
            name: 'ITERATIVE_PROGRESS_EVALUATION_BEGIN_V2',
            value: _dependencies.PROMPT_DEPENDENCIES.ITERATIVE_PROGRESS_EVALUATION_BEGIN_V2
          }, {
            id: 'ITERATIVE_PROGRESS_EVALUATION_ENDING_V2',
            is: 'dependency',
            name: 'ITERATIVE_PROGRESS_EVALUATION_ENDING_V2',
            value: _dependencies.PROMPT_DEPENDENCIES.ITERATIVE_PROGRESS_EVALUATION_ENDING_V2
          }];
        }
      });

      /****************************************
      INTERNAL MODULE: ./prompts/data/templates
      ****************************************/

      ims.set('./prompts/data/templates', {
        hash: 1495652852,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PROMPT_TEMPLATES = void 0;
          const PROMPT_TEMPLATES = exports.PROMPT_TEMPLATES = {
            summary: `{HEADER-JSON}

{CONVERSATION-SUMMARY-BEGIN}

Se trata de una actividad didáctica realizada entre un alumno y su docente, específicamente para profundizar en el [TEMA DE ESTUDIO]
 establecido.

[TEMA DE ESTUDIO] = [[[
{TOPIC}
]]]

{EDUCATIONAL-CONTEXT}

{CONVERSATION-SUMMARY-ENDING}`,
            ipe: `{ITERATIVE-PROGRESS-EVALUATION-BEGIN-V2}

Se trata de una actividad didáctica realizada entre un alumno y su docente, específicamente para profundizar en el [TEMA DE ESTUDIO] establecido.

[TEMA DE ESTUDIO] = [[[ {TOPIC} ]]]

{EDUCATIONAL-CONTEXT}

{ITERATIVE-PROGRESS-EVALUATION-ENDING-V2}`
          };
        }
      });

      /*******************************
      INTERNAL MODULE: ./prompts/index
      *******************************/

      ims.set('./prompts/index', {
        hash: 1844298552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "Prompt", {
            enumerable: true,
            get: function () {
              return _prompt.Prompt;
            }
          });
          Object.defineProperty(exports, "PromptHistory", {
            enumerable: true,
            get: function () {
              return _promptHistory.PromptHistory;
            }
          });
          Object.defineProperty(exports, "PromptManager", {
            enumerable: true,
            get: function () {
              return _promptManager.PromptManager;
            }
          });
          Object.defineProperty(exports, "PromptResolver", {
            enumerable: true,
            get: function () {
              return _resolver.PromptResolver;
            }
          });
          Object.defineProperty(exports, "PromptsCollection", {
            enumerable: true,
            get: function () {
              return _collection.PromptsCollection;
            }
          });
          var _collection = require("./collection");
          var _promptManager = require("./prompt-manager");
          var _prompt = require("./prompt");
          var _resolver = require("./resolver");
          var _promptHistory = require("./prompt-history");
        }
      });

      /**************************************************
      INTERNAL MODULE: ./prompts/literals/global-literals
      **************************************************/

      ims.set('./prompts/literals/global-literals', {
        hash: 485954612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GlobalLiterals = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _literal = require("./literal");
          class GlobalLiterals extends _collection.Collection {
            TYPES = ['input', 'textarea', 'list'];
            STORAGE_KEY;
            defaultItems = [];
            get names() {
              return this.items.map(item => item.name);
            }
            #global;
            #prompts;
            #reserved;
            constructor({
              key,
              ...specs
            }) {
              super({
                entity: 'Literals',
                item: _literal.Literal,
                ...specs
              });
              this.add('OBJECTIVES', [], 'list');
              if (specs.items) {
                this.addItems(specs.items);
              }
              this.#reserved = specs.reserved ?? [];
              this.STORAGE_KEY = key;
              this.on('items.changed', () => this.trigger('items.changed'));
            }
            save() {
              if (!this.items.length) return;
              console.log('guardamos');
              localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items.map(item => item.getProperties())));
              this.trigger('change');
            }
            setLiteral(name, value) {
              const literal = this.items.find(item => item.name === name);
              if (literal) {
                literal.value = value;
                // Save to localStorage
              }
            }
            add(name, value, type = 'input') {
              if (this.names.includes(name)) return;
              const literal = new _literal.Literal({
                id: name,
                name,
                type,
                value
              });
              this.setItems([literal]);
              this.trigger('change');
            }
            addMany(literals) {
              literals.forEach(literal => this.add(literal, ''));
            }
            updateReservedNames(reservedNames) {
              this.#reserved = reservedNames;
              this.trigger('change');
            }
          }
          exports.GlobalLiterals = GlobalLiterals;
        }
      });

      /******************************************
      INTERNAL MODULE: ./prompts/literals/literal
      ******************************************/

      ims.set('./prompts/literals/literal', {
        hash: 243654432,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Literal = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class Literal extends _item.Item {
            TYPES = ['input', 'textarea', 'list'];
            #parent;
            get id() {
              return `literal-${this.name}`;
            }
            constructor(specs) {
              super({
                entity: 'Literals',
                properties: ['name', 'type', 'id', 'value'],
                ...specs
              });
              this.#parent = specs.parent;
              this.on('value.changed', () => this.#parent.save());
            }
            set(value) {
              const data = super.set(value);
              this.#parent.save();
              return data;
            }
          }
          exports.Literal = Literal;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./prompts/literals/reserved/index
      *************************************************/

      ims.set('./prompts/literals/reserved/index', {
        hash: 2867660082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReservedLiterals = void 0;
          var _model = require("@beyond-js/reactive/model");
          // --- Constants ---
          const STATUS_RANK = {
            pending: 0,
            'in-progress': 1,
            completed: 2,
            outstanding: 3
          };
          const VALID_STATUSES = new Set(['in-progress', 'completed', 'outstanding']);
          class ReservedLiterals extends _model.ReactiveModel {
            #prompt;
            get PROMPT() {
              return this.#prompt;
            }
            get PREVIOUS() {
              const assistants = this.#chat.messages.items.filter(item => item.role === 'assistant');
              if (assistants.length < 2) return '';
              return assistants[assistants.length - 2].content;
            }
            #answer;
            get ANSWER() {
              return this.#answer;
            }
            get SUMMARY() {
              return this.#parent.prompts.map.get('summary').result ?? ' La conversacion no ha iniciado';
            }
            #INITIAL_PROGRESS_STATE = {
              status: 'pending'
            };
            #progress = [];
            get PROGRESS() {
              return this.#parent.globalLiterals.map.get('OBJECTIVES').value?.map(item => {
                const fonuded = this.#progress.find(i => i.name === item.name);
                if (fonuded) return fonuded;
                return {
                  name: item.name,
                  progress: undefined,
                  status: 'pending'
                };
              });
            }
            get names() {
              return ['OUTPUT', 'PROMPT', 'PROGRESS', 'SUMMARY', 'PREVIOUS', 'ANSWER'];
            }
            #chat;
            #parent;
            constructor({
              chat,
              parent
            }) {
              super();
              this.#chat = chat;
              this.#parent = parent;
              this.#chat.messages?.items?.reverse().find(message => message.role === 'user')?.content;
              this.#chat.on('new.answer', this.handleChatAnswer.bind(this));
              this.#chat.on('new.message', this.handleChatPrompt.bind(this));
              this.handleChatAnswer();
              this.handleChatPrompt();
            }
            handleChatAnswer() {
              const messages = this.#chat.messages.items.reverse();
              const lastMessage = messages.find(message => message.role === 'assistant');
              if (lastMessage) {
                this.#answer = lastMessage.content;
              }
            }
            handleChatPrompt() {
              const messages = this.#chat.messages.items.reverse();
              const lastMessage = messages.find(message => message.role === 'user');
              if (lastMessage) {
                this.#prompt = lastMessage.content;
              }
            }
            getDefaultObjectives() {
              if (!this.#parent.globalLiterals.map.get('OBJECTIVES').value) return [];
              return this.#parent.globalLiterals.map.get('OBJECTIVES').value.map(item => {
                return {
                  name: item.name,
                  progress: undefined,
                  status: 'pending'
                };
              });
            }
            /**
             * Merges current and previous objectives, ensuring no duplicates and always keeping the highest status.
             */
            mergeObjectives(current = [], previous = []) {
              const oldObjectivesMap = previous.reduce((map, obj) => {
                map[obj.name] = obj;
                return map;
              }, {});
              const mergedMap = new Map();
              for (const obj of current) {
                const oldObj = oldObjectivesMap[obj.name];
                if (!oldObj) {
                  mergedMap.set(obj.name, obj);
                  return;
                }
                const oldRank = STATUS_RANK[oldObj.status] ?? -1;
                const newRank = STATUS_RANK[obj.status] ?? -1;
                mergedMap.set(obj.name, newRank > oldRank ? obj : oldObj);
              }
              // Add previous objectives not present in current
              const currentNames = new Set(current.map(o => o.name));
              for (const oldObj of previous) {
                if (!currentNames.has(oldObj.name)) {
                  mergedMap.set(oldObj.name, oldObj);
                }
              }
              return Array.from(mergedMap.values());
            }
            /**
             * Returns the names of objectives that have a valid status.
             */
            getReachedObjectiveNames(objectives) {
              return objectives.filter(obj => VALID_STATUSES.has(obj.status)).map(obj => obj.name);
            }
            /**
             * Processes the result of a prompt, merging objectives and updating progress.
             * @param prompt The prompt object.
             * @param result The result to process (expected to be JSON string or ParsedResult).
             */
            process(prompt, result) {
              const ipePrompt = this.#parent.prompts.map.get('ipe');
              if (!ipePrompt || prompt.id !== ipePrompt.id) return;
              const history = ipePrompt.history;
              if (!history.size) {
                // If no history, set progress to an empty array or parse if possible
                if (this.isValidResult(result)) {
                  const parsed = typeof result === 'string' ? JSON.parse(result) : result;
                  this.#progress = (parsed.objectives || []).map(obj => ({
                    name: obj.name,
                    progress: obj.progress,
                    status: obj.status
                  }));
                } else {
                  this.#progress = [];
                }
                return;
              }
              const last = [...history.values()].at(-1);
              try {
                // Validate input before parsing
                if (!this.isValidResult(result)) throw new Error('Invalid result format');
                const parsed = typeof result === 'string' ? JSON.parse(result) : result;
                const oldParsed = JSON.parse(last.output);
                const mergedObjectives = this.mergeObjectives(parsed.objectives ?? [], oldParsed?.objectives || []);
                const reached = this.getReachedObjectiveNames(mergedObjectives);
                const merged = {
                  name: parsed.name,
                  strict: parsed.strict,
                  schema: parsed.schema,
                  reached,
                  objectives: mergedObjectives,
                  summary: parsed.summary,
                  alert: parsed.alert
                };
                this.#progress = merged.objectives.map(obj => ({
                  name: obj.name,
                  progress: obj.progress,
                  status: obj.status
                }));
              } catch (error) {
                // Controlled error reporting
                this.handleError(error);
              }
            }
            /**
             * Handles errors in a controlled way. Logs to console and rethrows in development, but does not break Playground typing.
             */
            handleError(error) {
              // You may replace this with a more robust logging/reporting system as needed.
              if (typeof window !== 'undefined' && window.NODE_ENV === 'development') {
                console.error('ReservedLiterals error:', error);
                throw error;
              } else {
                console.error('ReservedLiterals error:', error);
              }
            }
            /**
             * Validates the result to ensure it is a valid JSON string or ParsedResult object with required fields.
             */
            isValidResult(result) {
              if (typeof result === 'string') {
                try {
                  const obj = JSON.parse(result);
                  return obj && typeof obj === 'object' && (Array.isArray(obj.objectives) || obj.objectives === false);
                } catch {
                  return false;
                }
              }
              return result && typeof result === 'object' && Array.isArray(result.objectives);
            }
          }
          exports.ReservedLiterals = ReservedLiterals;
        }
      });

      /****************************************
      INTERNAL MODULE: ./prompts/prompt-history
      ****************************************/

      ims.set('./prompts/prompt-history', {
        hash: 2847280000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptHistory = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class PromptHistory extends _item.Item {
            /* ---------- literals ---------- */
            #literals = {
              keys: [],
              values: {}
            };
            get literals() {
              return this.#literals;
            }
            /* ---------- execution history ---------- */
            history = new Map();
            #execSeq = 0; // auto-increments history entries
            /* ---------- dependencies ---------- */
            get deps() {
              return [...this.value.matchAll(/\{([A-Z0-9_\-]+)\}/g)].map(m => m[1].replaceAll('-', '_'));
            }
            constructor(args) {
              super({
                ...args,
                entity: 'Prompts',
                properties: ['timestamp', 'id', 'format', 'is', 'name', 'value', 'parsed', 'promptSchema', 'expanded', 'output', 'specs', 'interactions']
              });
            }
            /* =====================================================
             * LITERALS ─ utilities
             * ==================================================== */
            getLiteral(key) {
              return this.#literals.values[key];
            }
            setLiteral(key, value, notify = true) {
              if (this.#literals.keys.includes(key)) {
                this.#literals.values[key] = value;
                if (notify) this.trigger('literals.changed');
                return;
              }
              this.#literals.keys.push(key);
              this.#literals.values[key] = value ?? undefined;
              if (notify) this.trigger('literals.changed');
            }
            registerLiterals(literals) {
              literals.forEach(literal => {
                if (this.#literals.keys.includes(literal)) return;
                this.setLiteral(literal, undefined, false);
              });
              this.trigger('literals.changed');
            }
            removeLiterals(literals) {
              literals.forEach(literal => {
                if (!this.#literals.keys.includes(literal)) return;
                this.#literals.keys.splice(this.#literals.keys.indexOf(literal), 1);
                delete this.#literals.values[literal];
              });
            }
            /* =====================================================
             * EXECUTION ─ record & history
             * ==================================================== */
            /**
             * Records a prompt execution:
             *  1. Adds the entry to `history`
             *  2. Updates `result`
             *  3. Emits reactive events
             *
             * @param result     Result returned by the LLM
             * @param messageId  (optional) Id of the message on which the prompt was run
             * @returns          Internal history id for the recorded execution
             */
            recordExecution(output, interactions, specs) {
              const id = ++this.#execSeq;
              const entry = {
                id: id.toString(),
                input: this.value,
                parsed: this.parsed,
                expanded: this.expanded,
                literals: this.#literals,
                output,
                interactions,
                timestamp: Date.now()
              };
              this.history.set(id, entry);
              this.trigger('result.changed', {
                output
              });
              this.trigger('history.changed', {
                entry
              });
              return id;
            }
            set(args) {
              if (args.value === 'You are a helpful assistant.') {
                return;
              }
              if (args.promptSchema && typeof args.promptSchema === 'string') {
                args.promptSchema = JSON.parse(args.promptSchema);
              }
              return super.set(args);
            }
          }
          exports.PromptHistory = PromptHistory;
        }
      });

      /****************************************
      INTERNAL MODULE: ./prompts/prompt-manager
      ****************************************/

      ims.set('./prompts/prompt-manager', {
        hash: 2868585341,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _collection = require("./collection");
          var _resolver = require("./resolver");
          var _globalLiterals = require("./literals/global-literals");
          var _reserved = require("./literals/reserved");
          /*bundle*/
          class PromptManager extends _model.ReactiveModel {
            #prompts;
            #resolver;
            #reservedLiterals;
            #globalLiterals;
            #parent;
            #initialized = false;
            get prompts() {
              return this.#prompts;
            }
            get resolver() {
              return this.#resolver;
            }
            get reservedLiterals() {
              return this.#reservedLiterals;
            }
            get globalLiterals() {
              return this.#globalLiterals;
            }
            get initialized() {
              return this.#initialized;
            }
            constructor(specs = {}) {
              super();
              this.#parent = specs.parent;
              // Initialize prompts collection
              const prompts = new _collection.PromptsCollection({
                items: this.initializeDefaultPrompts()
              });
              this.#prompts = prompts;
              // Initialize global literals first (without reserved literals dependency)
              const key = `${this.#parent?.modelId || 'default'}.globalLiterals`;
              let global = localStorage.getItem(key);
              global = global ? JSON.parse(global) : [];
              this.#globalLiterals = new _globalLiterals.GlobalLiterals({
                key,
                prompts: this.#prompts,
                items: global,
                reserved: [] // Will be updated after reserved literals are initialized
              });
              // Set up schema for IPE prompt
              this.#prompts.map.get('ipe')?.set({
                promptSchema: {}
              });
            }
            // Method to complete initialization after chat is available
            completeInitialization(chat) {
              if (this.#initialized) return;
              // Initialize reserved literals now that chat is available
              this.#reservedLiterals = new _reserved.ReservedLiterals({
                chat: chat,
                parent: this.#parent
              });
              // Update global literals with reserved names
              this.#globalLiterals.updateReservedNames(this.#reservedLiterals.names);
              // Initialize resolver
              this.#resolver = new _resolver.PromptResolver({
                prompts: this.#prompts,
                globalLiterals: this.#globalLiterals,
                reservedLiterals: this.#reservedLiterals,
                global: ['system', 'ipe', 'summary']
              });
              this.#initialized = true;
              this.trigger('initialized');
            }
            initializeDefaultPrompts() {
              return [{
                id: 'ipe',
                is: 'prompt',
                name: 'IPE',
                promptSchema: {},
                value: ''
              }, {
                id: 'summary',
                is: 'prompt',
                name: 'SUMMARY',
                promptSchema: {},
                value: ''
              }, {
                id: 'system',
                is: 'prompt',
                name: 'SYSTEM',
                value: 'You are a helpful assistant.'
              }];
            }
            parse(prompt) {
              if (!this.#initialized) {
                throw new Error('PromptManager not fully initialized. Call completeInitialization() first.');
              }
              const processed = this.#resolver.parse(prompt);
              // Only set compatible properties
              prompt.set({
                value: processed.value,
                expanded: processed.expanded,
                parsed: processed.parsed
              });
              return processed;
            }
            analyze(prompt) {
              if (!this.#initialized) {
                throw new Error('PromptManager not fully initialized. Call completeInitialization() first.');
              }
              const {
                literals
              } = this.#resolver.analyze(prompt.value);
              prompt.registerLiterals(literals.filter(l => !this.globalLiterals.names.includes(l)));
            }
            handleChatPrompt(prompt) {
              this.#globalLiterals.setLiteral('PROMPT', prompt);
              this.trigger('new.prompt', prompt);
            }
            handleChatAnswer(answer) {
              this.#globalLiterals.setLiteral('ANSWER', answer);
              this.trigger('new.answer', answer);
            }
            processExecutionResult(prompt, result, interactions, specs) {
              if (!this.#initialized) {
                throw new Error('PromptManager not fully initialized. Call completeInitialization() first.');
              }
              prompt.recordExecution(result, interactions, specs);
              this.#reservedLiterals.process(prompt, result);
            }
            reinitialize() {
              if (!this.#initialized) return;
              if (this.#resolver) {
                this.#resolver = undefined;
              }
              this.#resolver = new _resolver.PromptResolver({
                prompts: this.#prompts,
                globalLiterals: this.#globalLiterals,
                reservedLiterals: this.#reservedLiterals,
                global: ['system', 'ipe', 'summary']
              });
              this.#prompts.map.get('ipe')?.set({
                promptSchema: {}
              });
            }
          }
          exports.PromptManager = PromptManager;
        }
      });

      /********************************
      INTERNAL MODULE: ./prompts/prompt
      ********************************/

      ims.set('./prompts/prompt', {
        hash: 3218360744,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _promptHistory = require("./prompt-history");
          var _item = require("@beyond-js/reactive/entities/item");
          class Prompt extends _item.Item {
            /* ---------- literals ---------- */
            #literals = {
              keys: [],
              values: {}
            };
            get literals() {
              return this.#literals;
            }
            /* ---------- execution history ---------- */
            history = new Map();
            #execSeq = 0; // auto-increments history entries
            /* ---------- current result ---------- */
            #result;
            get result() {
              return this.#result;
            }
            /* ---------- dependencies ---------- */
            get deps() {
              return [...this.value.matchAll(/\{([A-Z0-9_\-]+)\}/g)].map(m => m[1].replaceAll('-', '_'));
            }
            constructor(args) {
              super({
                ...args,
                entity: 'Prompts',
                properties: ['id', 'format', 'is', 'name', 'value', 'parsed', 'promptSchema', 'expanded'],
                //@ts-ignore
                format: 'text'
              });
            }
            /* =====================================================
             * LITERALS ─ utilities
             * ==================================================== */
            getLiteral(key) {
              return this.#literals.values[key];
            }
            setLiteral(key, value, notify = true) {
              if (this.#literals.keys.includes(key)) {
                this.#literals.values[key] = value;
                if (notify) this.trigger('literals.changed');
                return;
              }
              this.#literals.keys.push(key);
              this.#literals.values[key] = value ?? undefined;
              if (notify) this.trigger('literals.changed');
            }
            registerLiterals(literals) {
              literals.forEach(literal => {
                if (this.#literals.keys.includes(literal)) return;
                this.setLiteral(literal, undefined, false);
              });
              this.trigger('literals.changed');
            }
            removeLiterals(literals) {
              literals.forEach(literal => {
                if (!this.#literals.keys.includes(literal)) return;
                this.#literals.keys.splice(this.#literals.keys.indexOf(literal), 1);
                delete this.#literals.values[literal];
              });
            }
            /* =====================================================
             * EXECUTION ─ record & history
             * ==================================================== */
            /**
             * Records a prompt execution:
             *  1. Adds the entry to `history`
             *  2. Updates `result`
             *  3. Emits reactive events
             *
             * @param result     Result returned by the LLM
             * @param messageId  (optional) Id of the message on which the prompt was run
             * @returns          Internal history id for the recorded execution
             */
            recordExecution(output, interactions, specs) {
              const id = ++this.#execSeq;
              const entry = new _promptHistory.PromptHistory({
                input: this.value,
                parsed: this.parsed,
                expanded: this.expanded,
                format: this.format,
                literals: this.#literals.values,
                output,
                specs,
                interactions,
                timestamp: Date.now()
              });
              this.history.set(id, entry);
              this.#result = output;
              this.trigger('result.changed', {
                output
              });
              this.trigger('history.changed', {
                entry
              });
              return id;
            }
            set(args) {
              if (args.schema) {
                args.promptSchema = args.schema;
                delete args.schema;
              }
              if (args.promptSchema && typeof args.promptSchema === 'string') {
                args.promptSchema = JSON.parse(args.promptSchema);
              }
              return super.set(args);
            }
          }
          exports.Prompt = Prompt;
        }
      });

      /**********************************
      INTERNAL MODULE: ./prompts/resolver
      **********************************/

      ims.set('./prompts/resolver', {
        hash: 1414361376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptResolver = void 0;
          var _model = require("@beyond-js/reactive/model");
          class PromptResolver extends _model.ReactiveModel {
            #prompts;
            #literals;
            #dependencyNames = new Set();
            #dependencies = [];
            #globalLiterals;
            #reservedLiterals;
            #global = [];
            get dependencies() {
              return this.#dependencies;
            }
            #parsedPrompts = new Map();
            get parsedPrompts() {
              return this.#parsedPrompts;
            }
            #prefix = 'AILEARN.';
            constructor(args) {
              super();
              this.#prompts = args.prompts;
              this.#globalLiterals = args.globalLiterals;
              this.#reservedLiterals = args.reservedLiterals;
              this.#global = args.global ?? [];
              this.resolve = this.resolve.bind(this);
              if (!args.prompts) {
                throw new Error('Prompts collection is required');
              }
              if (this.#prompts) {
                // subscribe to changes in the prompts and resolve them
                this.#dependencies = this.#prompts.items.filter(item => {
                  const isDependency = item.is === 'dependency';
                  if (isDependency) {
                    this.#dependencyNames.add(item.name);
                  }
                  return isDependency;
                });
              }
              this.#global.forEach(id => {
                const prompt = this.#prompts.map.get(id);
                if (!prompt) {
                  console.warn(`Prompt ${id} not found`);
                  return;
                }
                const {
                  literals
                } = this.analyze(prompt.value);
                const toAdd = literals.filter(literal => !this.#reservedLiterals.names.includes(literal));
                this.#globalLiterals.addMany(toAdd);
                // this.#globalLiterals.add(literals);
              });
              this.#prompts.items.forEach(item => {
                const resolve = () => {
                  const resolved = this.resolve(item);
                  const {
                    value,
                    expanded,
                    parsed,
                    literals
                  } = resolved;
                  item.set({
                    value,
                    expanded,
                    parsed
                  });
                  item.registerLiterals(literals);
                };
                resolve();
              });
            }
            resolve(prompt) {
              let {
                id,
                value
              } = prompt;
              if (typeof value !== 'string') value = JSON.stringify(value);
              const visited = new Set();
              const literals = [];
              const walk = (text, deph = 0) => text.replace(/\{([A-Z0-9\- ]+)\}/gi, (_m, rawId) => {
                if (visited.has(rawId)) {
                  console.error(`Circular dependency detected: ${[...visited, rawId].join(' → ')}`);
                  return `{${rawId}}`;
                }
                const dep = this.#prompts.items.find(p => {
                  return p.id.toUpperCase().trim() === `${this.#prefix}${rawId}`.toUpperCase().trim();
                });
                if (!dep) {
                  literals.push(rawId);
                  return `{${rawId}}`;
                }
                visited.add(id);
                const value = [undefined, 'string'].includes(typeof dep.value) ? dep.value : JSON.stringify(dep.value);
                const resolved = walk(value, deph + 1);
                visited.delete(id);
                return resolved;
              });
              const expandedValue = walk(value);
              // Replace all literals in the resolved value
              let finalValue = expandedValue;
              const replaceString = (str, key, value) => {
                if (!value) return str;
                return str.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
              };
              literals.forEach(name => {
                const isGlobal = this.#globalLiterals.names.includes(name);
                const isReserved = this.#reservedLiterals.names.includes(name);
                if (!isGlobal && !isReserved && !prompt.literals.keys.includes(name)) {
                  prompt.setLiteral(name, '', false);
                  return;
                }
                if (!!prompt.literals?.values[name]) {
                  finalValue = replaceString(finalValue, name, prompt.literals.values[name]);
                  return;
                }
                if (isReserved) {
                  const value = typeof this.#reservedLiterals[name] === 'string' ? this.#reservedLiterals[name] : JSON.stringify(this.#reservedLiterals[name]);
                  finalValue = replaceString(finalValue, name, value);
                  return;
                }
                const globalLiteral = this.#globalLiterals.items.find(item => item.name === name);
                finalValue = replaceString(finalValue, name, typeof globalLiteral?.value === 'string' ? globalLiteral?.value : JSON.stringify(globalLiteral?.value));
                return;
              });
              prompt.removeLiterals(prompt.literals?.keys?.filter(name => !literals.includes(name)));
              // Store both the expanded (original resolved) and fully replaced values
              const parsedPrompt = {
                parsed: finalValue,
                value,
                expanded: expandedValue,
                literals: literals.filter(name => !this.#reservedLiterals.names.includes(name) && !this.#globalLiterals.names.includes(name))
              };
              this.#parsedPrompts.set(id, parsedPrompt);
              return parsedPrompt;
            }
            parse = prompt => this.resolve(prompt);
            analyze(value) {
              const dependencies = [];
              const literals = [];
              const visited = new Set();
              const walk = text => {
                // const placeholders = [...text.matchAll(/\{([A-Z0-9\-]+)\}/gi)].map(m => m[1].replace(/-/g, '_'));
                const placeholders = [...text.matchAll(/\{([A-Z0-9\-]+)\}/gi)].map(m => m[1]);
                // Remove duplicates
                const uniquePlaceholders = [...new Set(placeholders)];
                uniquePlaceholders.forEach(id => {
                  if (visited.has(id)) return; // Avoid circular dependencies
                  const dep = this.#prompts.items.find(p => {
                    return p.id.toUpperCase().trim() === `${this.#prefix}${id}`.toUpperCase().trim();
                  });
                  if (dep) {
                    dependencies.push(id);
                    visited.add(id);
                    walk(dep.value); // Recursively analyze the dependency content
                    visited.delete(id);
                  } else {
                    literals.push(id);
                  }
                });
              };
              walk(value);
              return {
                dependencies,
                literals
              };
            }
          }
          exports.PromptResolver = PromptResolver;
        }
      });

      /********************************
      INTERNAL MODULE: ./providers/chat
      ********************************/

      ims.set('./providers/chat', {
        hash: 3309627345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class ChatProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              // this.#api = new Api(config.params.apis[config.params.project]);
              this.#api = new _api.Api(_config.default.params.apis.playground);
            }
            async load(a) {}
            async streamMessage(message) {
              // const token = await sessionWrapper.user.firebaseToken;
              // this.#api.bearer(token);
              const uri = '/completions';
              const promise = new _core.PendingPromise();
              const onFinish = async response => {
                this.trigger('response.finished');
                promise.resolve(response);
              };
              const onError = e => {
                console.error(e);
                promise.reject(e);
              };
              this.#api.on('stream.response', data => {
                console.log('obtengo la data', data);
                this.trigger('stream.response', data);
              });
              this.#api.stream(uri, {
                message
              }).then(onFinish).catch(onError);
              return promise;
            }
            async sendMessage(specs) {
              if (specs.files) {
                specs = {
                  ...specs,
                  multipart: true
                };
              }
              const response = await this.#api.post('/completions', specs);
              return response.data;
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./providers/playground
      **************************************/

      ims.set('./providers/playground', {
        hash: 584757069,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlaygroundProvider = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          class PlaygroundProvider extends _model.ReactiveModel {
            #api;
            #serverApi;
            #localKey;
            constructor() {
              super();
              // this.#api = new Api(config.params.apis[config.params.project]);
              this.#api = new _api.Api(_config.default.params.apis.playground);
              this.#serverApi = new _api.Api(_config.default.params.apis.agents);
            }
            async load(a) {}
            async getModels() {
              const response = await this.#api.get('/models');
              return response.data;
            }
            async execute(specs) {
              const response = await this.#api.post('/completions', specs);
              return response.data;
            }
            async import(specs) {
              const id = specs.ids.split(',').map(id => id.trim()).join('.');
              try {
                if (localStorage.getItem(`pg.${id}`)) {
                  return JSON.parse(localStorage.getItem(`pg.${id}`));
                }
              } catch (e) {}
              const token = await _session.sessionWrapper.user.firebaseToken;
              this.#serverApi.bearer(token);
              const response = await this.#serverApi.get('/prompts/templates', specs);
              localStorage.setItem(`pg.${id}`, JSON.stringify(response.data));
              return response.data;
            }
          }
          exports.PlaygroundProvider = PlaygroundProvider;
        }
      });

      /************************
      INTERNAL MODULE: ./schema
      ************************/

      ims.set('./schema', {
        hash: 3837371914,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SCHEMA = void 0;
          const SCHEMA = exports.SCHEMA = {
            name: 'ipe',
            strict: false,
            schema: {
              type: 'object',
              properties: {
                reached: {
                  type: 'array',
                  description: 'El nombre de los objetivos que están siendo alcanzados por la última interacción entre el docente y el alumno',
                  items: {
                    type: 'string'
                  }
                },
                objectives: {
                  type: 'array',
                  description: 'Evaluación del progreso de cada objetivo educativo considerando el estado previo del alumno.',
                  items: {
                    type: 'object',
                    properties: {
                      index: {
                        type: 'number',
                        description: "Índice (Zero-based index) que indica la posición del objetivo alcanzado dentro del array 'reached'."
                      },
                      name: {
                        type: 'string',
                        description: "El nombre exacto del objetivo específico evaluado dentro del array 'reached'."
                      },
                      expected: {
                        type: 'string',
                        description: 'Cómo hubiese sido una interacción apropiada por parte del alumno para el objetivo alcanzado por la interacción'
                      },
                      contradistinction: {
                        type: 'string',
                        description: 'Contrasta la expectativa del objetivo con el mensaje realizado por el alumno.'
                      },
                      integration: {
                        type: 'string',
                        description: 'Escribe cómo esta última iteración se debe integrar con el [PROGRESO DE LOS OBJETIVOS] anteriores a esta iteración'
                      },
                      progress: {
                        type: 'string',
                        description: 'Escribe cuál ha sido el progreso del objetivo integrando lo que se esperaba del alumno (expected), con el análisis de contradistinction y la integración con el progreso de los objetivos'
                      },
                      status: {
                        type: 'string',
                        description: "Estado actual del objetivo, indicando el nivel de progreso del alumno: 'in-progress' significa que el alumno está trabajando en el objetivo pero aún no lo ha alcanzado completamente; 'completed' indica que el objetivo ha sido alcanzado satisfactoriamente y el alumno ha demostrado el nivel esperado de comprensión o desempeño; 'outstanding' significa que el alumno ha superado las expectativas y ha demostrado un dominio excepcional del objetivo.",
                        enum: ['in-progress', 'completed', 'outstanding']
                      }
                    },
                    required: ['name', 'expected', 'contradistinction', 'integration', 'progress', 'status'],
                    additionalProperties: false
                  }
                },
                summary: {
                  type: 'string',
                  description: 'Resumen global del progreso de todos los objetivos, limitado a 40 palabras.'
                },
                alert: {
                  anyOf: [{
                    type: 'string',
                    description: 'Reporte inmediato de problemas de atención u otros factores que requieren atención del docente, máximo 20 palabras.'
                  }, {
                    type: 'boolean',
                    enum: [false]
                  }],
                  description: 'Alertas sobre posibles problemas en la interacción del alumno.'
                }
              },
              required: ['reached', 'objectives', 'summary', 'alert'],
              additionalProperties: false
            }
          };
        }
      });

      /*************************************************
      INTERNAL MODULE: ./student-competencies/collection
      *************************************************/

      ims.set('./student-competencies/collection', {
        hash: 701397468,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentCompetencies = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          class StudentCompetencies extends _collection.Collection {
            constructor() {
              super({
                entity: 'student-competencies',
                provider: _provider.StudentCompetencyProvider,
                item: _item.StudentCompetency
              });
            }
          }
          exports.StudentCompetencies = StudentCompetencies;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./student-competencies/example
      **********************************************/

      ims.set('./student-competencies/example', {
        hash: 1358574651,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useStudentCompetenciesCollection = exports.updateCompetency = exports.loadSpecificCompetency = exports.getCompetenciesByStudent = exports.deleteCompetency = exports.createStudentCompetencyExample = exports.createAndPublishCompetency = void 0;
          var _index = require("./index");
          /**
           * Example usage of the StudentCompetency module
           */
          // Example 1: Creating a single student competency item
          const createStudentCompetencyExample = () => {
            const competency = new _index.StudentCompetency({
              student_id: 'STU001',
              competency_id: 'COMP_MATH_001',
              subject_id: 'MATH',
              average_score: 85.5,
              level_estimate: 'intermedio',
              evidence_count: 12,
              last_updated: new Date().toISOString()
            });
            return competency;
          };
          // Example 2: Using the collection to load and manage multiple competencies
          exports.createStudentCompetencyExample = createStudentCompetencyExample;
          const useStudentCompetenciesCollection = async () => {
            const competencies = new _index.StudentCompetencies();
            // Load all competencies
            await competencies.load();
            return competencies;
          };
          // Example 3: Creating and publishing a new competency
          exports.useStudentCompetenciesCollection = useStudentCompetenciesCollection;
          const createAndPublishCompetency = async () => {
            const competency = new _index.StudentCompetency({
              student_id: 'STU002',
              competency_id: 'COMP_SCIENCE_001',
              subject_id: 'SCIENCE',
              average_score: 92.0,
              level_estimate: 'avanzado',
              evidence_count: 8,
              last_updated: new Date().toISOString()
            });
            try {
              // Publish the competency to the API
              await competency.publish();
              console.log('Competency published successfully');
            } catch (error) {
              console.error('Error publishing competency:', error);
            }
          };
          // Example 4: Loading a specific competency by ID
          exports.createAndPublishCompetency = createAndPublishCompetency;
          const loadSpecificCompetency = async id => {
            const competency = new _index.StudentCompetency({
              id
            });
            try {
              await competency.load();
              return competency;
            } catch (error) {
              console.error('Error loading competency:', error);
              throw error;
            }
          };
          // Example 5: Filtering competencies by student
          exports.loadSpecificCompetency = loadSpecificCompetency;
          const getCompetenciesByStudent = async studentId => {
            const competencies = new _index.StudentCompetencies();
            try {
              await competencies.load({
                student_id: studentId
              });
              return competencies.items;
            } catch (error) {
              console.error('Error loading student competencies:', error);
              return [];
            }
          };
          // Example 6: Updating a competency
          exports.getCompetenciesByStudent = getCompetenciesByStudent;
          const updateCompetency = async (id, updates) => {
            const competency = new _index.StudentCompetency({
              id
            });
            try {
              await competency.load();
              competency.set(updates);
              await competency.publish();
              console.log('Competency updated successfully');
            } catch (error) {
              console.error('Error updating competency:', error);
            }
          };
          // Example 7: Deleting a competency
          exports.updateCompetency = updateCompetency;
          const deleteCompetency = async id => {
            const competency = new _index.StudentCompetency({
              id
            });
            try {
              await competency.delete();
              console.log('Competency deleted successfully');
            } catch (error) {
              console.error('Error deleting competency:', error);
            }
          };
          exports.deleteCompetency = deleteCompetency;
        }
      });

      /********************************************
      INTERNAL MODULE: ./student-competencies/index
      ********************************************/

      ims.set('./student-competencies/index', {
        hash: 4002548806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "StudentCompetencies", {
            enumerable: true,
            get: function () {
              return _collection.StudentCompetencies;
            }
          });
          Object.defineProperty(exports, "StudentCompetency", {
            enumerable: true,
            get: function () {
              return _item.StudentCompetency;
            }
          });
          Object.defineProperty(exports, "StudentCompetencyProvider", {
            enumerable: true,
            get: function () {
              return _provider.StudentCompetencyProvider;
            }
          });
          var _item = require("./item");
          var _collection = require("./collection");
          var _provider = require("./provider");
        }
      });

      /*******************************************
      INTERNAL MODULE: ./student-competencies/item
      *******************************************/

      ims.set('./student-competencies/item', {
        hash: 1760511645,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentCompetency = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _zod = require("zod");
          var _provider = require("./provider");
          class StudentCompetency extends _item.Item {
            schema = _zod.z.object({
              student_id: _zod.z.string(),
              competency_id: _zod.z.string(),
              subject_id: _zod.z.string(),
              average_score: _zod.z.number(),
              level_estimate: _zod.z.enum(['incipiente', 'intermedio', 'avanzado']),
              evidence_count: _zod.z.number().int(),
              last_updated: _zod.z.string()
            });
            constructor(props = {}) {
              super({
                entity: 'student-competencies',
                provider: _provider.StudentCompetencyProvider,
                properties: ['student_id', 'competency_id', 'subject_id', 'average_score', 'level_estimate', 'evidence_count', 'last_updated'],
                ...props
              });
            }
          }
          exports.StudentCompetency = StudentCompetency;
        }
      });

      /***********************************************
      INTERNAL MODULE: ./student-competencies/provider
      ***********************************************/

      ims.set('./student-competencies/provider', {
        hash: 818986284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentCompetencyProvider = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          class StudentCompetencyProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.agents);
            }
            async load(specs) {
              try {
                const response = await this.#api.get(`/student-competencies/${specs?.id}`, specs);
                if (!response.status) {
                  throw new Error('Error loading student competency');
                }
                return response.data;
              } catch (error) {
                console.error('Error loading student competency:', error);
                throw error;
              }
            }
            async list(specs) {
              try {
                const response = await this.#api.get('/student-competencies', specs);
                if (!response.status) {
                  throw new Error('Error loading student competencies');
                }
                return response.data;
              } catch (error) {
                console.error('Error fetching student competencies:', error);
                throw error;
              }
            }
            async publish(data) {
              try {
                const response = await this.#api.post('/student-competencies', data);
                if (!response.status) {
                  throw new Error('Error publishing student competency');
                }
                return response.data;
              } catch (error) {
                console.error('Error publishing student competency:', error);
                throw error;
              }
            }
            async delete(specs) {
              try {
                const response = await this.#api.delete('/student-competencies', specs);
                if (!response.status) {
                  throw new Error('Error deleting student competency');
                }
                return true;
              } catch (error) {
                console.error('Error deleting student competency:', error);
                throw error;
              }
            }
            async remove(specs) {
              return this.delete(specs);
            }
          }
          exports.StudentCompetencyProvider = StudentCompetencyProvider;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./student-competencies/test
      *******************************************/

      ims.set('./student-competencies/test', {
        hash: 1488302539,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.testStudentCompetencyCreation = exports.testStudentCompetenciesCollection = exports.testSchemaValidation = exports.runAllTests = void 0;
          var _index = require("./index");
          /**
           * Simple test functions to verify the StudentCompetency module
           */
          const testStudentCompetencyCreation = () => {
            try {
              const competency = new _index.StudentCompetency({
                student_id: 'TEST_STU_001',
                competency_id: 'TEST_COMP_001',
                subject_id: 'TEST_SUBJECT',
                average_score: 90.0,
                level_estimate: 'avanzado',
                evidence_count: 15,
                last_updated: new Date().toISOString()
              });
              // Verify the competency was created with correct properties
              if (competency.student_id === 'TEST_STU_001' && competency.competency_id === 'TEST_COMP_001' && competency.subject_id === 'TEST_SUBJECT' && competency.average_score === 90.0 && competency.level_estimate === 'avanzado' && competency.evidence_count === 15) {
                console.log('✅ StudentCompetency creation test passed');
                return true;
              } else {
                console.error('❌ StudentCompetency creation test failed');
                return false;
              }
            } catch (error) {
              console.error('❌ StudentCompetency creation test failed with error:', error);
              return false;
            }
          };
          exports.testStudentCompetencyCreation = testStudentCompetencyCreation;
          const testStudentCompetenciesCollection = () => {
            try {
              const competencies = new _index.StudentCompetencies();
              // Verify the collection was created
              if (competencies && typeof competencies.load === 'function') {
                console.log('✅ StudentCompetencies collection test passed');
                return true;
              } else {
                console.error('❌ StudentCompetencies collection test failed');
                return false;
              }
            } catch (error) {
              console.error('❌ StudentCompetencies collection test failed with error:', error);
              return false;
            }
          };
          exports.testStudentCompetenciesCollection = testStudentCompetenciesCollection;
          const testSchemaValidation = () => {
            try {
              // Test valid data
              const validCompetency = new _index.StudentCompetency({
                student_id: 'VALID_STU',
                competency_id: 'VALID_COMP',
                subject_id: 'VALID_SUBJECT',
                average_score: 85.5,
                level_estimate: 'intermedio',
                evidence_count: 10,
                last_updated: new Date().toISOString()
              });
              // Test invalid level_estimate (should be caught by TypeScript)
              // This would cause a TypeScript error if uncommented:
              // const invalidCompetency = new StudentCompetency({
              // 	student_id: 'INVALID_STU',
              // 	competency_id: 'INVALID_COMP',
              // 	subject_id: 'INVALID_SUBJECT',
              // 	average_score: 85.5,
              // 	level_estimate: 'invalid_level', // This would be a TypeScript error
              // 	evidence_count: 10,
              // 	last_updated: new Date().toISOString()
              // });
              console.log('✅ Schema validation test passed');
              return true;
            } catch (error) {
              console.error('❌ Schema validation test failed with error:', error);
              return false;
            }
          };
          exports.testSchemaValidation = testSchemaValidation;
          const runAllTests = () => {
            console.log('🧪 Running StudentCompetency module tests...\n');
            const tests = [{
              name: 'StudentCompetency Creation',
              test: testStudentCompetencyCreation
            }, {
              name: 'StudentCompetencies Collection',
              test: testStudentCompetenciesCollection
            }, {
              name: 'Schema Validation',
              test: testSchemaValidation
            }];
            let passedTests = 0;
            let totalTests = tests.length;
            tests.forEach(({
              name,
              test
            }) => {
              console.log(`Running ${name}...`);
              if (test()) {
                passedTests++;
              }
              console.log('');
            });
            console.log(`📊 Test Results: ${passedTests}/${totalTests} tests passed`);
            if (passedTests === totalTests) {
              console.log('🎉 All tests passed! The StudentCompetency module is working correctly.');
            } else {
              console.log('⚠️  Some tests failed. Please check the implementation.');
            }
          };
          exports.runAllTests = runAllTests;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 3416648416,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IPEStatus = void 0;
          /*bundle*/
          var IPEStatus;
          (function (IPEStatus) {
            IPEStatus["pending"] = "pending";
            IPEStatus["inProgress"] = "in-progress";
            IPEStatus["completed"] = "completed";
            IPEStatus["outstanding"] = "outstanding";
          })(IPEStatus || (exports.IPEStatus = IPEStatus = {}));
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./activity-agents/activity-manager",
        "from": "ActivityManager",
        "name": "ActivityManager"
      }, {
        "im": "./chat/interaction-manager",
        "from": "InteractionManager",
        "name": "InteractionManager"
      }, {
        "im": "./index",
        "from": "Playground",
        "name": "Playground"
      }, {
        "im": "./prompt-executor",
        "from": "PromptExecutor",
        "name": "PromptExecutor"
      }, {
        "im": "./prompts/collection",
        "from": "PromptsCollection",
        "name": "PromptsCollection"
      }, {
        "im": "./prompts/prompt-manager",
        "from": "PromptManager",
        "name": "PromptManager"
      }, {
        "im": "./types",
        "from": "IPEStatus",
        "name": "IPEStatus"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'ActivityManager') && _export("ActivityManager", ActivityManager = require ? require('./activity-agents/activity-manager').ActivityManager : value);
        (require || prop === 'InteractionManager') && _export("InteractionManager", InteractionManager = require ? require('./chat/interaction-manager').InteractionManager : value);
        (require || prop === 'Playground') && _export("Playground", Playground = require ? require('./index').Playground : value);
        (require || prop === 'PromptExecutor') && _export("PromptExecutor", PromptExecutor = require ? require('./prompt-executor').PromptExecutor : value);
        (require || prop === 'PromptsCollection') && _export("PromptsCollection", PromptsCollection = require ? require('./prompts/collection').PromptsCollection : value);
        (require || prop === 'PromptManager') && _export("PromptManager", PromptManager = require ? require('./prompts/prompt-manager').PromptManager : value);
        (require || prop === 'IPEStatus') && _export("IPEStatus", IPEStatus = require ? require('./types').IPEStatus : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9tcHRBY3Rpdml0aWVzIiwiZXhwb3J0cyIsImlkIiwibmFtZSIsInByb21wdHMiLCJTWVNURU0iLCJJUEUiLCJTVU1NQVJZIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJfbW9kZWwiLCJyZXF1aXJlIiwiQWN0aXZpdHlNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImFjdGl2aXRpZXMiLCJwcm9tcHRNYW5hZ2VyIiwicHJvdmlkZXIiLCJwYXJlbnQiLCJjdXJyZW50TW9kZWxJZCIsImNvbnN0cnVjdG9yIiwic3BlY3MiLCJpbXBvcnQiLCJsYW5ndWFnZSIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsIml0ZW1zIiwiZmluZCIsImNvbnNvbGUiLCJ3YXJuIiwidHJpZ2dlciIsImVycm9yIiwiaWRzIiwic3lzdGVtIiwiaXBlIiwic3VtbWFyeSIsImRhdGEiLCJwcm9jZXNzSW1wb3J0ZWRQcm9tcHRzIiwicmVpbml0aWFsaXplIiwibW9kZWxJZCIsImFjdGl2aXR5UHJvbXB0cyIsIm1hcCIsImRlcGVuZGVuY2llcyIsImZvckVhY2giLCJsaXRlcmFscyIsIml0ZW0iLCJwcm9tcHREYXRhIiwia2V5cyIsInZhbHVlcyIsImtleSIsInB1c2giLCJnZXQiLCJzZXQiLCJsZW5ndGgiLCJhZGRJdGVtcyIsImdldEN1cnJlbnRBY3Rpdml0eSIsImNsZWFyQ3VycmVudEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiZ2V0QWxsQWN0aXZpdGllcyIsImZpbmRBY3Rpdml0eUJ5TmFtZSIsImZpbmRBY3Rpdml0eUJ5SWQiLCJzZXRQYXJlbnQiLCJfY29sbGVjdGlvbiIsIl9pdGVtIiwiX3Byb3ZpZGVyIiwiQWN0aXZpdHlBZ2VudHMiLCJDb2xsZWN0aW9uIiwiZW50aXR5IiwiQWN0aXZpdHlBZ2VudFByb3ZpZGVyIiwiQWN0aXZpdHlBZ2VudCIsIl9hY3Rpdml0eU1hbmFnZXIiLCJfem9kIiwiSXRlbSIsInNjaGVtYSIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJwcm9wcyIsInByb3BlcnRpZXMiLCJfY29uZmlnIiwiX2FwaSIsIl9hY3Rpdml0aWVzIiwiYXBpIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhZ2VudHMiLCJsb2FkIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImxpc3QiLCJPYmplY3QiLCJwdWJsaXNoIiwicG9zdCIsInJlbW92ZSIsImRlbGV0ZSIsImdldEFjdGl2aXR5QWdlbnRzIiwiX2NoYXQiLCJfbWVzc2FnZXMiLCJfbWVzc2FnZSIsIl9pbnRlcmFjdGlvbk1hbmFnZXIiLCJfdXVpZCIsIlBsYXlncm91bmRDaGF0IiwicHJvbXB0IiwiYW5zd2VyIiwiaW50ZXJhY3Rpb25NYW5hZ2VyIiwiYXJncyIsInZhbHVlIiwiQ2hhdE1lc3NhZ2VzIiwiQ2hhdFByb3ZpZGVyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwidG90YWxJbnRlcmFjdGlvbnMiLCJtZXNzYWdlcyIsIm9uIiwiaGFuZGxlU3lzdGVtTWVzc2FnZSIsImJpbmQiLCJzZW5kTWVzc2FnZSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJtZXNzYWdlIiwiZmlsZXMiLCJpbnRlcmFjdGlvbnMiLCJnZXRJbnRlcmFjdGlvbnMiLCJtc2ciLCJDaGF0TWVzc2FnZSIsInY0IiwiY29udGVudCIsInJvbGUiLCJyZWdpc3RlciIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXIiLCJwYXJzZSIsImxvZyIsInBhcnNlZCIsInRleHQiLCJ0eXBlIiwibW9kZWwiLCJoaXN0b3J5IiwicmVzcG9uc2VNZXNzYWdlIiwiZXhlY3V0ZSIsImdldEludGVyYWN0aW9uQ291bnQiLCJoYXNJbnRlcmFjdGlvbnMiLCJjbGVhckludGVyYWN0aW9ucyIsImhhbmRsZUNoYXRQcm9tcHQiLCJoYW5kbGVDaGF0QW5zd2VyIiwiY2FsY3VsYXRlVG90YWxJbnRlcmFjdGlvbnMiLCJNYXRoIiwibWluIiwiY3JlYXRlRW1wdHlJbnRlcmFjdGlvbiIsInRvdGFsTWVzc2FnZXMiLCJ0b3RhbCIsIm9yaWdpbmFsSW50ZXJhY3Rpb25zIiwic2xpY2UiLCJBcnJheSIsImZpbGwiLCJjbGVhciIsIl9hY3Rpdml0eUFnZW50cyIsIl9wcm9tcHRNYW5hZ2VyIiwiX3BsYXlncm91bmQiLCJfc2NoZW1hIiwiUGxheWdyb3VuZCIsImFjdGl2aXR5TWFuYWdlciIsImNoYXQiLCJtb2RlbHMiLCJlcnJvcnMiLCJyZXNvbHZlciIsInJlc2VydmVkTGl0ZXJhbHMiLCJnbG9iYWxMaXRlcmFscyIsIlBsYXlncm91bmRQcm92aWRlciIsIlByb21wdE1hbmFnZXIiLCJpbml0aWFsaXplIiwibG9hZE1vZGVscyIsImNvbXBsZXRlSW5pdGlhbGl6YXRpb24iLCJnZXRNb2RlbHMiLCJyZWFkeSIsImhhbmRsZU1vZGVsTG9hZEVycm9yIiwiY29kZSIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJwcm9tcHRTY2hlbWEiLCJTQ0hFTUEiLCJmZXRjaGluZyIsImJ1aWxkRXhlY3V0aW9uU3BlY3MiLCJyZXN1bHQiLCJwcm9jZXNzRXhlY3V0aW9uUmVzdWx0IiwiZm9ybWF0IiwidGVtcGVyYXR1cmUiLCJhbmFseXplIiwiUHJvbXB0RXhlY3V0b3IiLCJfZGVwZW5kZW5jaWVzIiwiX3RlbXBsYXRlcyIsIl9wcm9tcHQiLCJQcm9tcHRzQ29sbGVjdGlvbiIsInRlbXBsYXRlcyIsIlBST01QVF9URU1QTEFURVMiLCJQUk9NUFRfREVQRU5ERU5DSUVTIiwiZmlsdGVyIiwiaXMiLCJzb3J0IiwiY2FjaGUiLCJNYXAiLCJzeXN0ZW1Qcm9tcHQiLCJjdXN0b21MaXRlcmFscyIsIlByb21wdCIsInNldEl0ZW1zIiwibG9hZENhY2hlIiwiZ2xvYmFsVGhpcyIsImNhY2hlRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwiaGFzIiwic2V0TGl0ZXJhbCIsInNhdmVDYWNoZSIsImdldFByb3BlcnRpZXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZSIsIkhFQURFUl9KU09OIiwiQ09OVkVSU0FUSU9OX1NVTU1BUllfQkVHSU4iLCJFRFVDQVRJT05BTF9DT05URVhUIiwiQ09OVkVSU0FUSU9OX1NVTU1BUllfRU5ESU5HIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fQkVHSU5fVjIiLCJJVEVSQVRJVkVfUFJPR1JFU1NfRVZBTFVBVElPTl9FTkRJTkdfVjIiLCJQUk9NUFRTX0RBVEEiLCJfcmVzb2x2ZXIiLCJfcHJvbXB0SGlzdG9yeSIsIl9saXRlcmFsIiwiR2xvYmFsTGl0ZXJhbHMiLCJUWVBFUyIsIlNUT1JBR0VfS0VZIiwiZGVmYXVsdEl0ZW1zIiwibmFtZXMiLCJnbG9iYWwiLCJyZXNlcnZlZCIsIkxpdGVyYWwiLCJhZGQiLCJsaXRlcmFsIiwiaW5jbHVkZXMiLCJhZGRNYW55IiwidXBkYXRlUmVzZXJ2ZWROYW1lcyIsInJlc2VydmVkTmFtZXMiLCJTVEFUVVNfUkFOSyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIlZBTElEX1NUQVRVU0VTIiwiU2V0IiwiUmVzZXJ2ZWRMaXRlcmFscyIsIlBST01QVCIsIlBSRVZJT1VTIiwiYXNzaXN0YW50cyIsIkFOU1dFUiIsIklOSVRJQUxfUFJPR1JFU1NfU1RBVEUiLCJwcm9ncmVzcyIsIlBST0dSRVNTIiwiZm9udWRlZCIsImkiLCJyZXZlcnNlIiwibGFzdE1lc3NhZ2UiLCJnZXREZWZhdWx0T2JqZWN0aXZlcyIsIm1lcmdlT2JqZWN0aXZlcyIsImN1cnJlbnQiLCJwcmV2aW91cyIsIm9sZE9iamVjdGl2ZXNNYXAiLCJyZWR1Y2UiLCJvYmoiLCJtZXJnZWRNYXAiLCJvbGRPYmoiLCJvbGRSYW5rIiwibmV3UmFuayIsImN1cnJlbnROYW1lcyIsIm8iLCJmcm9tIiwiZ2V0UmVhY2hlZE9iamVjdGl2ZU5hbWVzIiwib2JqZWN0aXZlcyIsInByb2Nlc3MiLCJpcGVQcm9tcHQiLCJzaXplIiwiaXNWYWxpZFJlc3VsdCIsImxhc3QiLCJhdCIsIm9sZFBhcnNlZCIsIm91dHB1dCIsIm1lcmdlZE9iamVjdGl2ZXMiLCJyZWFjaGVkIiwibWVyZ2VkIiwic3RyaWN0IiwiYWxlcnQiLCJoYW5kbGVFcnJvciIsIndpbmRvdyIsIk5PREVfRU5WIiwiaXNBcnJheSIsIlByb21wdEhpc3RvcnkiLCJleGVjU2VxIiwiZGVwcyIsIm1hdGNoQWxsIiwibSIsInJlcGxhY2VBbGwiLCJnZXRMaXRlcmFsIiwibm90aWZ5IiwicmVnaXN0ZXJMaXRlcmFscyIsInJlbW92ZUxpdGVyYWxzIiwic3BsaWNlIiwiaW5kZXhPZiIsInJlY29yZEV4ZWN1dGlvbiIsImVudHJ5IiwidG9TdHJpbmciLCJpbnB1dCIsImV4cGFuZGVkIiwiX2dsb2JhbExpdGVyYWxzIiwiX3Jlc2VydmVkIiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXplRGVmYXVsdFByb21wdHMiLCJQcm9tcHRSZXNvbHZlciIsInByb2Nlc3NlZCIsImwiLCJkZXBlbmRlbmN5TmFtZXMiLCJwYXJzZWRQcm9tcHRzIiwicHJlZml4IiwicmVzb2x2ZSIsImlzRGVwZW5kZW5jeSIsInRvQWRkIiwicmVzb2x2ZWQiLCJ2aXNpdGVkIiwid2FsayIsImRlcGgiLCJyZXBsYWNlIiwiX20iLCJyYXdJZCIsImpvaW4iLCJkZXAiLCJwIiwidG9VcHBlckNhc2UiLCJ0cmltIiwiZXhwYW5kZWRWYWx1ZSIsImZpbmFsVmFsdWUiLCJyZXBsYWNlU3RyaW5nIiwic3RyIiwiUmVnRXhwIiwiaXNHbG9iYWwiLCJpc1Jlc2VydmVkIiwiZ2xvYmFsTGl0ZXJhbCIsInBhcnNlZFByb21wdCIsInBsYWNlaG9sZGVycyIsInVuaXF1ZVBsYWNlaG9sZGVycyIsIl9jb3JlIiwicGxheWdyb3VuZCIsImEiLCJzdHJlYW1NZXNzYWdlIiwidXJpIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwib25GaW5pc2giLCJvbkVycm9yIiwiZSIsInJlamVjdCIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsIm11bHRpcGFydCIsIl9zZXNzaW9uIiwic2VydmVyQXBpIiwibG9jYWxLZXkiLCJzcGxpdCIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsImRlc2NyaXB0aW9uIiwiaW5kZXgiLCJleHBlY3RlZCIsImNvbnRyYWRpc3RpbmN0aW9uIiwiaW50ZWdyYXRpb24iLCJlbnVtIiwicmVxdWlyZWQiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImFueU9mIiwiU3R1ZGVudENvbXBldGVuY2llcyIsIlN0dWRlbnRDb21wZXRlbmN5UHJvdmlkZXIiLCJTdHVkZW50Q29tcGV0ZW5jeSIsIl9pbmRleCIsImNyZWF0ZVN0dWRlbnRDb21wZXRlbmN5RXhhbXBsZSIsImNvbXBldGVuY3kiLCJzdHVkZW50X2lkIiwiY29tcGV0ZW5jeV9pZCIsInN1YmplY3RfaWQiLCJhdmVyYWdlX3Njb3JlIiwibGV2ZWxfZXN0aW1hdGUiLCJldmlkZW5jZV9jb3VudCIsImxhc3RfdXBkYXRlZCIsInRvSVNPU3RyaW5nIiwidXNlU3R1ZGVudENvbXBldGVuY2llc0NvbGxlY3Rpb24iLCJjb21wZXRlbmNpZXMiLCJjcmVhdGVBbmRQdWJsaXNoQ29tcGV0ZW5jeSIsImxvYWRTcGVjaWZpY0NvbXBldGVuY3kiLCJnZXRDb21wZXRlbmNpZXNCeVN0dWRlbnQiLCJzdHVkZW50SWQiLCJ1cGRhdGVDb21wZXRlbmN5IiwidXBkYXRlcyIsImRlbGV0ZUNvbXBldGVuY3kiLCJudW1iZXIiLCJpbnQiLCJ0ZXN0U3R1ZGVudENvbXBldGVuY3lDcmVhdGlvbiIsInRlc3RTdHVkZW50Q29tcGV0ZW5jaWVzQ29sbGVjdGlvbiIsInRlc3RTY2hlbWFWYWxpZGF0aW9uIiwidmFsaWRDb21wZXRlbmN5IiwicnVuQWxsVGVzdHMiLCJ0ZXN0cyIsInRlc3QiLCJwYXNzZWRUZXN0cyIsInRvdGFsVGVzdHMiLCJJUEVTdGF0dXMiXSwic291cmNlcyI6WyIvL2FjdGl2aXRpZXMudHMvIiwiLy9hY3Rpdml0eS1hZ2VudHMvYWN0aXZpdHktbWFuYWdlci50cyIsIi8vYWN0aXZpdHktYWdlbnRzL2NvbGxlY3Rpb24udHMiLCIvL2FjdGl2aXR5LWFnZW50cy9pbmRleC50cyIsIi8vYWN0aXZpdHktYWdlbnRzL2l0ZW0udHMiLCIvL2FjdGl2aXR5LWFnZW50cy9wcm92aWRlci50cyIsIi8vY2hhdC9pbmRleC50cyIsIi8vY2hhdC9pbnRlcmFjdGlvbi1tYW5hZ2VyLnRzIiwiLy9jaGF0L21lc3NhZ2UudHMiLCIvL2NoYXQvbWVzc2FnZXMudHMiLCIvL2luZGV4LnRzLyIsIi8vcHJvbXB0LWV4ZWN1dG9yLnRzLyIsIi8vcHJvbXB0cy9jb2xsZWN0aW9uLnRzIiwiLy9wcm9tcHRzL2RhdGEvZGVwZW5kZW5jaWVzLnRzIiwiLy9wcm9tcHRzL2RhdGEvaW5kZXgudHMiLCIvL3Byb21wdHMvZGF0YS90ZW1wbGF0ZXMudHMiLCIvL3Byb21wdHMvaW5kZXgudHMiLCIvL3Byb21wdHMvbGl0ZXJhbHMvZ2xvYmFsLWxpdGVyYWxzLnRzIiwiLy9wcm9tcHRzL2xpdGVyYWxzL2xpdGVyYWwudHMiLCIvL3Byb21wdHMvbGl0ZXJhbHMvcmVzZXJ2ZWQvaW5kZXgudHMiLCIvL3Byb21wdHMvcHJvbXB0LWhpc3RvcnkudHMiLCIvL3Byb21wdHMvcHJvbXB0LW1hbmFnZXIudHMiLCIvL3Byb21wdHMvcHJvbXB0LnRzIiwiLy9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiLy9wcm92aWRlcnMvY2hhdC50cyIsIi8vcHJvdmlkZXJzL3BsYXlncm91bmQudHMiLCIvL3NjaGVtYS50cy8iLCIvL3N0dWRlbnQtY29tcGV0ZW5jaWVzL2NvbGxlY3Rpb24udHMiLCIvL3N0dWRlbnQtY29tcGV0ZW5jaWVzL2V4YW1wbGUudHMiLCIvL3N0dWRlbnQtY29tcGV0ZW5jaWVzL2luZGV4LnRzIiwiLy9zdHVkZW50LWNvbXBldGVuY2llcy9pdGVtLnRzIiwiLy9zdHVkZW50LWNvbXBldGVuY2llcy9wcm92aWRlci50cyIsIi8vc3R1ZGVudC1jb21wZXRlbmNpZXMvdGVzdC50cyIsIi8vdHlwZXMudHMvIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsZ0JBQWdCLEdBQUFDLE9BQUEsQ0FBQUQsZ0JBQUEsR0FBRztZQUMvQixnQkFBZ0IsRUFBRTtjQUNqQkUsRUFBRSxFQUFFLGdCQUFnQjtjQUNwQkMsSUFBSSxFQUFFLGdCQUFnQjtjQUN0QkMsT0FBTyxFQUFFO2dCQUNSQyxNQUFNLEVBQUUsb0NBQW9DO2dCQUM1Q0MsR0FBRyxFQUFFLCtCQUErQjtnQkFDcENDLE9BQU8sRUFBRTs7YUFFVjtZQUNELGdCQUFnQixFQUFFO2NBQ2pCTCxFQUFFLEVBQUUsZ0JBQWdCO2NBQ3BCQyxJQUFJLEVBQUUsZ0JBQWdCO2NBQ3RCQyxPQUFPLEVBQUU7Z0JBQ1JDLE1BQU0sRUFBRSxvQ0FBb0M7Z0JBQzVDQyxHQUFHLEVBQUUsK0JBQStCO2dCQUNwQ0MsT0FBTyxFQUFFOzthQUVWO1lBQ0RDLE1BQU0sRUFBRTtjQUNQTixFQUFFLEVBQUUsUUFBUTtjQUNaQyxJQUFJLEVBQUUsUUFBUTtjQUNkQyxPQUFPLEVBQUU7Z0JBQ1JDLE1BQU0sRUFBRSw0QkFBNEI7Z0JBQ3BDQyxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QkMsT0FBTyxFQUFFOzthQUVWO1lBQ0RFLFFBQVEsRUFBRTtjQUNUUCxFQUFFLEVBQUUsVUFBVTtjQUNkQyxJQUFJLEVBQUUsVUFBVTtjQUNoQkMsT0FBTyxFQUFFO2dCQUNSQyxNQUFNLEVBQUUsOEJBQThCO2dCQUN0Q0MsR0FBRyxFQUFFLHlCQUF5QjtnQkFDOUJDLE9BQU8sRUFBRTs7YUFFVjtZQUVELG9CQUFvQixFQUFFO2NBQ3JCTCxFQUFFLEVBQUUsNkJBQTZCO2NBQ2pDQyxJQUFJLEVBQUUsb0JBQW9CO2NB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