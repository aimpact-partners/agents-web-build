System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/entities/collection", "@beyond-js/http-suite@0.1.0/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.0.5/model", "@beyond-js/reactive@2.0.5/entities/item", "uuid@11.1.0", "@aimpact/chat-sdk@1.4.4/startup", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/core", "@aimpact/agents-client@0.0.29/prompts", "@aimpact/chat-sdk@1.4.4/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Categories, Category, Playground, PromptsManager, Projects, Project, Prompts, Prompt, Schema, GTranslate, AppGTranslate, IChatUser, User, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Categories: void 0,
    Category: void 0,
    Playground: void 0,
    PromptsManager: void 0,
    Projects: void 0,
    Project: void 0,
    Prompts: void 0,
    Prompt: void 0,
    Schema: void 0,
    GTranslate: void 0,
    AppGTranslate: void 0,
    IChatUser: void 0,
    User: void 0,
    Wrapper: void 0,
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive205EntitiesCollection) {
      dependency_1 = _beyondJsReactive205EntitiesCollection;
    }, function (_beyondJsHttpSuite010Api) {
      dependency_2 = _beyondJsHttpSuite010Api;
    }, function (_aimpactPlatform016Config) {
      dependency_3 = _aimpactPlatform016Config;
    }, function (_beyondJsReactive205Model) {
      dependency_4 = _beyondJsReactive205Model;
    }, function (_beyondJsReactive205EntitiesItem) {
      dependency_5 = _beyondJsReactive205EntitiesItem;
    }, function (_uuid2) {
      dependency_6 = _uuid2;
    }, function (_aimpactChatSdk144Startup) {
      dependency_7 = _aimpactChatSdk144Startup;
    }, function (_aimpactChatSdk144Session) {
      dependency_8 = _aimpactChatSdk144Session;
    }, function (_beyondJsKernel0112Core) {
      dependency_9 = _beyondJsKernel0112Core;
    }, function (_aimpactAgentsClient0029Prompts) {
      dependency_10 = _aimpactAgentsClient0029Prompts;
    }, function (_aimpactChatSdk144Users) {
      dependency_11 = _aimpactChatSdk144Users;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["socket.io-client", "4.8.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/platform@0.1.6/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/platform/config', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['uuid', dependency_6], ['@aimpact/chat-sdk/startup', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/core', dependency_9], ['@aimpact/agents-client/prompts', dependency_10], ['@aimpact/chat-sdk/users', dependency_11]]);
      ims = new Map();
      /***************************************
      INTERNAL MODULE: ./categories/collection
      ***************************************/
      ims.set('./categories/collection', {
        hash: 2179020943,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Categories = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          /*bundle */
          class Categories extends _collection.Collection {
            #api;
            constructor() {
              super({
                entity: 'PromptCategories',
                item: _item.Category
              });
              this.#api = new _api.Api(_config.default.params.apis.chat);
            }
            async list() {
              try {
                this.fetching = true;
                const response = await this.#api.get('/prompts/categories');
                return response;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Categories = Categories;
        }
      });

      /******************************************
      INTERNAL MODULE: ./categories/item-provider
      ******************************************/

      ims.set('./categories/item-provider', {
        hash: 2143604304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _model = require("@beyond-js/reactive/model");
          class ItemProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
            async load(params) {
              try {
                this.fetching = true;
                const response = await this.#api.get(`/prompts/categories/${params.id}`);
                return response;
              } catch (e) {} finally {
                this.fetching = false;
              }
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /*********************************
      INTERNAL MODULE: ./categories/item
      *********************************/

      ims.set('./categories/item', {
        hash: 1458327076,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Category = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _model = require("@beyond-js/reactive/model");
          var _itemProvider = require("./item-provider");
          /*bundle */
          class Category extends _model.ReactiveModel {
            #api;
            constructor() {
              super({
                entity: 'PromptCategories',
                provider: _itemProvider.ItemProvider
              });
              this.#api = new _api.Api(_config.default.params.apis.chat);
            }
            async publish(params) {
              try {
                this.fetching = true;
                const newCategory = await this.#api.post('/prompts/categories', {
                  ...params,
                  projectId: params.id
                });
                return newCategory;
              } catch (e) {} finally {
                this.fetching = false;
              }
            }
            async getList(id) {
              return await this.#api.get(`/prompts/categories/project/${id}`);
            }
          }
          exports.Category = Category;
        }
      });

      /***************************************
      INTERNAL MODULE: ./playground/chat/index
      ***************************************/

      ims.set('./playground/chat/index', {
        hash: 2675138741,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlaygroundChat = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _chat = require("../providers/chat");
          var _messages = require("./messages");
          var _message = require("./message");
          var _uuid = require("uuid");
          class PlaygroundChat extends _item.Item {
            #prompt;
            get prompt() {
              return this.#prompt;
            }
            #answer;
            get answer() {
              return this.#answer;
            }
            #prompts;
            constructor(prompts, args = {}) {
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
              this.#prompts = prompts;
            }
            handleSystemMessage(message) {
              console.log('escuchamos', message);
              this.trigger('stream.response', message);
            }
            async sendMessage(message) {
              this.provider.on('stream.response', this.handleSystemMessage.bind(this));
              const msg = new _message.ChatMessage({
                id: (0, _uuid.v4)(),
                content: message,
                role: 'user',
                register: true
              });
              this.#prompt = msg.content;
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
              const response = await this.provider.sendMessage(this.#prompts.system, specs);
              const responseMessage = new _message.ChatMessage({
                id: (0, _uuid.v4)(),
                content: response,
                role: 'system',
                register: true
              });
              this.trigger('new.answer', responseMessage.content);
              this.#answer = responseMessage.content;
              this.trigger('new.message', responseMessage);
            }
            async execute(action) {
              return await this.provider.execute({
                action,
                system: this.system,
                objectives: this.objectives,
                summary: this.summary,
                progress: this.progress
              });
            }
          }
          exports.PlaygroundChat = PlaygroundChat;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./playground/chat/message
      *****************************************/

      ims.set('./playground/chat/message', {
        hash: 2283954461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatMessage = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _chat = require("../providers/chat");
          class ChatMessage extends _item.Item {
            constructor(args = {}) {
              super({
                entity: 'playground-chat',
                properties: ['id', 'chatId', 'audio', 'role', 'timestamp', 'streaming', 'actions', 'content'],
                provider: _chat.ChatProvider,
                ...args
              });
              console.log(9, this.getProperties(), this.properties);
            }
          }
          exports.ChatMessage = ChatMessage;
        }
      });

      /******************************************
      INTERNAL MODULE: ./playground/chat/messages
      ******************************************/

      ims.set('./playground/chat/messages', {
        hash: 1695722484,
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

      /**********************************
      INTERNAL MODULE: ./playground/index
      **********************************/

      ims.set('./playground/index', {
        hash: 1425677710,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playground = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@beyond-js/http-suite/api");
          var _chat = require("./chat");
          var _playground = require("./providers/playground");
          var _prompts = require("./prompts");
          /*bundle*/
          class Playground extends _model.ReactiveModel {
            #api;
            #chat;
            #provider;
            #prompts;
            get prompts() {
              return this.#prompts;
            }
            get chat() {
              return this.#chat;
            }
            constructor() {
              super({
                properties: ['prompt', 'text']
              });
              this.#api = new _api.Api('http://localhost:5000');
              this.#provider = new _playground.PlaygroundProvider();
              this.#prompts = new _prompts.PromptsManager({
                items: [{
                  name: 'system',
                  content: 'You are a helpful assistant.',
                  literals: {
                    keys: ['PROMPT', 'ANSWER'],
                    values: {}
                  }
                }]
              });
              this.#chat = new _chat.PlaygroundChat(this.#prompts);
              this.#chat.on('new.prompt', this.handleChatPrompt.bind(this));
              this.#chat.on('new.answer', this.handleChatAnswer.bind(this));
            }
            handleChatPrompt(prompt) {
              this.#prompts.setLiteral('PROMPT', prompt);
              this.trigger('new.prompt', prompt);
            }
            handleChatAnswer(answer) {
              this.#prompts.setLiteral('ANSWER', answer);
              this.trigger('new.answer', answer);
            }
            execute(prompt) {
              const promptData = this.#prompts.get(prompt);
              if (promptData) {
                this.#provider.execute(promptData.parsed);
              } else {
                throw new Error(`Prompt with name ${prompt} not found.`);
              }
            }
          }
          exports.Playground = Playground;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./playground/prompts/dependencies
      *************************************************/

      ims.set('./playground/prompts/dependencies', {
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

      /******************************************
      INTERNAL MODULE: ./playground/prompts/index
      ******************************************/

      ims.set('./playground/prompts/index', {
        hash: 2517054696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptsManager = void 0;
          var _dependencies = require("./dependencies");
          var _templates = require("./templates");
          var _prompt = require("./prompt");
          var _collection = require("@beyond-js/reactive/entities/collection");
          /*bundle*/
          class PromptsManager extends _collection.Collection {
            #templates = _templates.PROMPT_TEMPLATES;
            get templates() {
              return this.#templates;
            }
            #dependencies = _dependencies.PROMPT_DEPENDENCIES;
            get dependencies() {
              return this.#dependencies;
            }
            #cache = new Map();
            get cache() {
              return this.#cache;
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
              this.loadCache();
            }
            loadCache() {
              const cacheData = localStorage.getItem('promptsCache');
              if (cacheData) {
                // this.#cache = new Map(JSON.parse(cacheData));
              }
            }
            setSummary(summary) {
              this.#dependencies.summary = summary;
              this.trigger('change');
            }
            setProgress(progress) {
              this.#dependencies.progress = progress;
              this.trigger('change');
            }
            saveCache() {
              localStorage.setItem('promptsCache', JSON.stringify(Array.from(this.#cache.entries())));
            }
            checkDependency(dependency) {
              const dependencies = PromptsManager.getLiterals(dependency);
              const isDependency = literal => !!this.dependencies[literal];
              const literals = new Set();
              const items = new Set(); // dependencies
              dependencies.forEach(item => {
                const name = item.replace(/-/g, '_');
                if (!isDependency(name)) {
                  literals.add(name);
                  return;
                }
                items.add(name);
                const {
                  literals: internal,
                  dependencies: internalDependencies
                } = this.checkDependency(this.dependencies[name]);
                for (item of internal) {
                  literals.add(item);
                }
                for (item of internalDependencies) {
                  items.add(item);
                }
              });
              return {
                literals,
                dependencies: items
              };
            }
            get(name) {
              if (this.#cache.has(name)) {
                return this.#cache.get(name);
              }
              const template = this.#templates[name];
              if (!template) {
                return {
                  literals: {
                    keys: [],
                    values: {}
                  },
                  dependencies: [],
                  value: '',
                  name,
                  parsed: ''
                };
              }
              const data = this.checkDependency(template);
              let prompt = template;
              data.dependencies.forEach(dependency => {
                const placeholder = `{${dependency.replace(/_/g, '-')}`;
                if (prompt.includes(placeholder)) {
                  prompt = prompt.replace(placeholder, this.dependencies[dependency]);
                }
              });
              const result = {
                literals: {
                  keys: Array.from(data.literals),
                  values: Object.fromEntries(this.#customLiterals)
                },
                dependencies: Array.from(data.dependencies),
                value: prompt,
                name,
                parsed: prompt
              };
              this.#cache.set(name, result);
              this.saveCache();
              this.#cache.clear();
              return result;
            }
            static getLiterals(text) {
              const literals = new Set();
              text.replace(/\{([A-Z-]+)\}/g, (match, p1) => {
                literals.add(p1);
                return match;
              });
              return Array.from(literals);
            }
            save(name, data) {
              const existingPrompt = this.#cache.get(name);
              if (!existingPrompt) {
                console.log(1, name, data);
                throw new Error(`Prompt with name ${name} not found.`);
              }
              const literalValues = {};
              existingPrompt.literals.keys.forEach(literal => {
                const name = literal.replace(/_/g, '-');
                if (data[name]) {
                  literalValues[name] = data[name];
                } else if (this.#customLiterals.has(name)) {
                  literalValues[name] = this.#customLiterals.get(name);
                }
              });
              existingPrompt.literals.values = literalValues;
              const updatedValue = existingPrompt.value.replace(/\{([A-Z-]+)\}/g, (match, p1) => {
                const name = p1.replace(/-/g, '_');
                return literalValues[name] || match;
              });
              // Update the prompt with new data
              const updatedPrompt = {
                ...existingPrompt,
                value: data.text,
                parsed: updatedValue
              };
              this.#cache.set(name, updatedPrompt);
              this.saveCache();
            }
            setLiteral(name, value) {
              this.#customLiterals.set(name, value);
              this.trigger('change');
            }
            get customLiterals() {
              return this.#customLiterals;
            }
          }
          exports.PromptsManager = PromptsManager;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./playground/prompts/prompt
      *******************************************/

      ims.set('./playground/prompts/prompt', {
        hash: 4017561512,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class Prompt extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: 'Prompts',
                properties: ['id', 'name', 'literals', 'dependencies']
              });
            }
          }
          exports.Prompt = Prompt;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./playground/prompts/templates
      **********************************************/

      ims.set('./playground/prompts/templates', {
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

      /*******************************************
      INTERNAL MODULE: ./playground/providers/chat
      *******************************************/

      ims.set('./playground/providers/chat', {
        hash: 4172962325,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          class ChatProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api('http://localhost:5000');
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
            async sendMessage(prompt, specs) {
              const response = await this.#api.post('/completions', {
                prompt,
                text: specs.message
              });
              return response.data;
            }
          }
          exports.ChatProvider = ChatProvider;
        }
      });

      /*************************************************
      INTERNAL MODULE: ./playground/providers/playground
      *************************************************/

      ims.set('./playground/providers/playground', {
        hash: 2504940979,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlaygroundProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          class PlaygroundProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api('http://localhost:5000');
            }
            async load(a) {}
            async streamMessage(message) {
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
            async sendMessage(prompt, specs) {
              const response = await this.#api.post('/completions', {
                prompt,
                text: specs.message
              });
              return response.data;
            }
            async execute(specs) {
              console.log(1, specs);
              return;
              const response = await this.#api.post('/execute', specs);
              return response.data;
            }
          }
          exports.PlaygroundProvider = PlaygroundProvider;
        }
      });

      /**********************************
      INTERNAL MODULE: ./playground/types
      **********************************/

      ims.set('./playground/types', {
        hash: 3371013465,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*******************************************
      INTERNAL MODULE: ./projects/collection/index
      *******************************************/

      ims.set('./projects/collection/index', {
        hash: 3207995285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Projects = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("../item");
          var _provider = require("./provider");
          /*bundle */
          class Projects extends _collection.Collection {
            constructor() {
              super({
                entity: 'Projects',
                item: _item.Project,
                provider: _provider.CollectionProvider
              });
            }
          }
          exports.Projects = Projects;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./projects/collection/provider
      **********************************************/

      ims.set('./projects/collection/provider', {
        hash: 4111825149,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CollectionProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _model = require("@beyond-js/reactive/model");
          class CollectionProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
            async list() {
              const response = await this.#api.get('/projects');
              return response.data.items;
            }
          }
          exports.CollectionProvider = CollectionProvider;
        }
      });

      /****************************************
      INTERNAL MODULE: ./projects/item-provider
      ****************************************/

      ims.set('./projects/item-provider', {
        hash: 251616098,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _model = require("@beyond-js/reactive/model");
          class ItemProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /*******************************
      INTERNAL MODULE: ./projects/item
      *******************************/

      ims.set('./projects/item', {
        hash: 82669339,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Project = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _item = require("@beyond-js/reactive/entities/item");
          var _itemProvider = require("./item-provider");
          /*bundle */
          class Project extends _item.Item {
            #api;
            constructor(args = {}) {
              super({
                entity: 'Projects',
                provider: _itemProvider.ItemProvider,
                properties: ['description', 'name', 'id'],
                ...args
              });
              this.#api = new _api.Api(_config.default.params.apis.chat);
            }
            async publish(data) {
              return await this.#api.post('/projects', data);
            }
            set(data) {
              console.log(1, data);
              return super.set(data);
            }
          }
          exports.Project = Project;
        }
      });

      /************************************
      INTERNAL MODULE: ./prompts/collection
      ************************************/

      ims.set('./prompts/collection', {
        hash: 1620943941,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompts = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _provider = require("./provider");
          var _item = require("./item");
          /*bundle */
          class Prompts extends _collection.Collection {
            #prompts;
            get prompts() {
              return this.#prompts;
            }
            #dependencies;
            get dependencies() {
              return this.#dependencies;
            }
            #functions;
            get functions() {
              return this.#functions;
            }
            constructor() {
              super({
                entity: 'Prompts',
                item: _item.Prompt,
                provider: _provider.ItemProvider
              });
            }
            async load(specs) {
              this.fetching = true;
              const items = await super.load(specs);
              console.log(10, items);
              this.fetching = true;
              const prompts = [];
              const functions = [];
              const dependencies = [];
              items.filter(item => {
                const output = item.is === 'dependency' ? dependencies : item.is === 'function' ? functions : prompts;
                output.push(item);
              });
              this.#prompts = prompts;
              this.#functions = functions;
              this.#dependencies = dependencies;
              return items;
            }
          }
          exports.Prompts = Prompts;
        }
      });

      /************************************
      INTERNAL MODULE: ./prompts/interfaces
      ************************************/

      ims.set('./prompts/interfaces', {
        hash: 2786790480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /******************************
      INTERNAL MODULE: ./prompts/item
      ******************************/

      ims.set('./prompts/item', {
        hash: 1669864687,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _prompts = require("@aimpact/agents-client/prompts");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _provider = require("./provider");
          var _item = require("@beyond-js/reactive/entities/item");
          /*bundle */
          class Prompt extends _item.Item {
            #api;
            #projectId;
            get projectId() {
              return this.#projectId;
            }
            #error;
            get error() {
              return this.#error;
            }
            get defaultLanguage() {
              return this.language?.default;
            }
            #model;
            constructor({
              id = undefined,
              projectId = undefined,
              ...args
            } = {}) {
              super({
                id,
                entity: 'Prompts',
                provider: _provider.ItemProvider,
                ...args,
                properties: ['id', 'identifier', 'name', 'literals', 'description', 'language', 'format', 'is', 'text', 'value']
              });
              this.#projectId = projectId;
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#model = new _prompts.PromptTemplate(this.id);
            }
            async load() {
              await this.#model.get();
              if (!this.#model.valid) {
                this.#error = this.#model.error;
                return;
              }
              this.set({
                id: this.#model.id,
                identifier: this.#model.identifier,
                name: this.#model.name,
                literals: this.#model.literals,
                description: this.#model.description,
                language: this.#model.language,
                format: this.#model.format,
                is: this.#model.is,
                ready: true
              });
            }
            async save() {
              const method = this.#model.id.includes('new') ? 'set' : 'update';
              const specs = {
                id: method === 'update' ? this.id : undefined,
                projectId: this.projectId,
                name: this.name,
                is: this.is,
                format: this.format,
                language: this.language,
                literals: this.literals
              };
              const response = await this.#model[method](specs);
              if (this.#model.error) {
                return {
                  error: this.#model.error
                };
              }
              return {
                data: response
              };
            }
            async updateLanguages(language) {
              const response = await this.#model.updateLanguages(language);
              return response;
            }
          }
          exports.Prompt = Prompt;
        }
      });

      /**********************************
      INTERNAL MODULE: ./prompts/provider
      **********************************/

      ims.set('./prompts/provider', {
        hash: 794981569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProvider = void 0;
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          class ItemProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
            async publish(data) {
              return await this.#api.post(`/prompts/templates`, data);
            }
            async update(data) {
              return await this.#api.post(`/prompts/templates`, data);
            }
            async loadTranslate(id, language) {
              return await this.#api.get(`/prompts/templates/${id}?language=${language}`);
            }
            async saveTranslate(id, data) {
              return await this.#api.post(`/prompts/templates/${id}/translate`, data);
            }
            async load({
              id
            }) {
              return await this.#api.get(`/prompts/templates/${id}`);
            }
            async list({
              id
            }) {
              const response = await this.#api.get(`/prompts/templates/project/${id}`);
              if (!response.status) throw new Error('Error loading projects prompts', response.error);
              return response.data.items;
            }
            process(data) {
              return this.#api.post(`/prompts/templates/test/process-literal`, {
                ...data
              });
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /******************************
      INTERNAL MODULE: ./schemas/item
      ******************************/

      ims.set('./schemas/item', {
        hash: 1249401304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Schema = void 0;
          var _prompts = require("@aimpact/agents-client/prompts");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _model = require("@beyond-js/reactive/model");
          var _provider = require("./provider");
          /*bundle */
          class Schema extends _model.ReactiveModel {
            #api;
            #id;
            #model;
            #error;
            get error() {
              return this.#error;
            }
            constructor({
              id = undefined
            } = {}) {
              super({
                id,
                entity: 'Schemas',
                provider: _provider.ItemProvider,
                properties: ['id', 'language', 'schema']
              });
              this.#id = id;
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#model = new _prompts.PromptTemplate(this.#id);
            }
            async publish(data) {
              return await this.#api.post(`/schemas`, {
                id: this.#id,
                ...data
              });
            }
            async load(lang) {
              try {
                const response = await this.#api.get(`/schemas/${this.#id}?language=${lang}`);
                console.log('response', response);
                if (response.error && response.error.code === 404) {
                  this.set({
                    id: this.#model.id,
                    language: lang,
                    schema: '',
                    ready: true
                  });
                  return;
                }
                this.set({
                  id: this.#model.id,
                  language: response.data.language,
                  schema: response.data.schema,
                  ready: true
                });
              } catch (e) {
                console.log(123, e);
                return console.error(e);
              }
            }
          }
          exports.Schema = Schema;
        }
      });

      /**********************************
      INTERNAL MODULE: ./schemas/provider
      **********************************/

      ims.set('./schemas/provider', {
        hash: 987784848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ItemProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _model = require("@beyond-js/reactive/model");
          class ItemProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_config.default.params.apis.chat);
              this.#parent = parent;
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /*********************************
      INTERNAL MODULE: ./translate/index
      *********************************/

      ims.set('./translate/index', {
        hash: 665231727,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GTranslate = exports.AppGTranslate = void 0;
          var _model = require("@beyond-js/reactive/model");
          /*bundle*/
          class GTranslate extends _model.ReactiveModel {
            #ready;
            get isReady() {
              return this.#ready;
            }
            constructor() {
              super();
              this.load();
            }
            async load() {
              if (this.#ready) return this.#ready;
              this.ready = true;
            }
            async translateText(text, language, format = text) {
              const GTRANSLATE_API_KEY = 'AIzaSyDC284vANy8CUCyJiJUlZldMPxK_TUd-nc';
              const url = `https://translation.googleapis.com/language/translate/v2?key=${GTRANSLATE_API_KEY}`;
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  q: text,
                  target: language
                })
              });
              if (!response.ok) {
                throw new Error('Error al enviar la solicitud de traducción');
              }
              const data = await response.json();
              return data.data.translations[0].translatedText;
            }
          }
          exports.GTranslate = GTranslate;
          const _gTranslate = new GTranslate();
          /*bundle*/
          const AppGTranslate = exports.AppGTranslate = _gTranslate;
          globalThis.app = AppGTranslate;
        }
      });

      /*********************************
      INTERNAL MODULE: ./users/interface
      *********************************/

      ims.set('./users/interface', {
        hash: 4186078931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /****************************
      INTERNAL MODULE: ./users/item
      ****************************/

      ims.set('./users/item', {
        hash: 2936188632,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _users = require("@aimpact/chat-sdk/users");
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          /*bundle*/
          class User extends _users.User {
            #api;
            #logged = false;
            get logged() {
              return this.#logged;
            }
            get schools() {
              return {
                // items: [...this.#organizations.values()]
              };
            }
            #data;
            get underage() {
              return this.age < 18;
            }
            get termsAccepted() {
              return this.terms?.accepted;
            }
            #hasAccess = false;
            get data() {
              return this.#data;
            }
            get accessibilityMode() {
              return !!globalThis.localStorage.getItem('aimpact.accessibility.mode');
            }
            #outdated = false;
            get outdated() {
              return this.#outdated;
            }
            constructor(specs) {
              super({
                ...specs,
                entity: 'User',
                properties: ['id', 'birthdate', 'age', 'parents', 'children', 'teacher', 'accessibility', 'terms', 'displayName', 'coins', 'email', 'photoURL', 'phoneNumber', 'token', 'roles']
              });
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project]);
              // this.load();
              // this.on('user.initilized', this.load.bind(this));
            }
            async load({
              debug = false
            } = {}) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const specs = {};
                if (debug) specs.debug = true;
                const response = await this.#api.get('/users/me', specs);
                if (response.error && response.error?.code === 503) {
                  this.#outdated = true;
                  return response;
                }
                this.#outdated = false;
                this.#data = response.data;
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
                this.trigger('user.loaded');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async login(firebaseToken) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/login', {
                  firebaseToken,
                  ...this.getProperties()
                });
                if (!response.status) throw new Error('Error fetching user data');
                const answer = this.set(response.data);
                if (this.token) {
                  await this.load();
                }
                this.#data = response.data;
                this.#logged = true;
                return true;
              } catch (e) {
                console.error(e);
                return false;
              } finally {
                this.fetching = false;
              }
            }
            async acceptTerms(birthdate) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/terms', {
                  birthdate
                });
                this.#data = response.data;
                if (!response.status) throw new Error('Error fetching terms');
                await this.set(response.data);
                return true;
              } catch (e) {
                throw new Error('ERROR_ACCEPTING_TERMS');
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.User = User;
        }
      });

      /********************************
      INTERNAL MODULE: ./users/provider
      ********************************/

      ims.set('./users/provider', {
        hash: 1726294463,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserProvider = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          class UserProvider {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            async load(specs) {
              this.#api.bearer(specs.firebaseToken);
              const {
                status,
                data
              } = await this.#api.post('/auth/login', specs);
              if (!status) {
                throw new Error('error loading user data');
              }
              return {
                status,
                data
              };
            }
          }
          exports.UserProvider = UserProvider;
        }
      });

      /*******************************
      INTERNAL MODULE: ./wrapper/index
      *******************************/

      ims.set('./wrapper/index', {
        hash: 1365526583,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wrapper = exports.AppWrapper = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _collection = require("../prompts/collection");
          /*bundle*/
          class Wrapper extends _model.ReactiveModel {
            #ready;
            get isReady() {
              return this.#ready;
            }
            #prompts = new Map();
            get prompts() {
              return this.#prompts;
            }
            constructor() {
              super();
              this.load();
            }
            async load() {
              if (this.#ready) return this.#ready;
              this.ready = true;
            }
            async getPrompts({
              projectId
            }) {
              try {
                if (this.#prompts && this.#prompts.has(projectId)) {
                  return this.#prompts.get(projectId);
                }
                const prompts = new _collection.Prompts();
                await prompts.load({
                  id: projectId
                });
                this.#prompts.set(projectId, prompts);
                return prompts;
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.Wrapper = Wrapper;
          const _wrapper = new Wrapper();
          /*bundle*/
          const AppWrapper = exports.AppWrapper = _wrapper;
          globalThis.app = AppWrapper;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./categories/collection",
        "from": "Categories",
        "name": "Categories"
      }, {
        "im": "./categories/item",
        "from": "Category",
        "name": "Category"
      }, {
        "im": "./playground/index",
        "from": "Playground",
        "name": "Playground"
      }, {
        "im": "./playground/prompts/index",
        "from": "PromptsManager",
        "name": "PromptsManager"
      }, {
        "im": "./projects/collection/index",
        "from": "Projects",
        "name": "Projects"
      }, {
        "im": "./projects/item",
        "from": "Project",
        "name": "Project"
      }, {
        "im": "./prompts/collection",
        "from": "Prompts",
        "name": "Prompts"
      }, {
        "im": "./prompts/item",
        "from": "Prompt",
        "name": "Prompt"
      }, {
        "im": "./schemas/item",
        "from": "Schema",
        "name": "Schema"
      }, {
        "im": "./translate/index",
        "from": "GTranslate",
        "name": "GTranslate"
      }, {
        "im": "./translate/index",
        "from": "AppGTranslate",
        "name": "AppGTranslate"
      }, {
        "im": "./users/interface",
        "from": "IChatUser",
        "name": "IChatUser"
      }, {
        "im": "./users/item",
        "from": "User",
        "name": "User"
      }, {
        "im": "./wrapper/index",
        "from": "Wrapper",
        "name": "Wrapper"
      }, {
        "im": "./wrapper/index",
        "from": "AppWrapper",
        "name": "AppWrapper"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Categories') && _export("Categories", Categories = require ? require('./categories/collection').Categories : value);
        (require || prop === 'Category') && _export("Category", Category = require ? require('./categories/item').Category : value);
        (require || prop === 'Playground') && _export("Playground", Playground = require ? require('./playground/index').Playground : value);
        (require || prop === 'PromptsManager') && _export("PromptsManager", PromptsManager = require ? require('./playground/prompts/index').PromptsManager : value);
        (require || prop === 'Projects') && _export("Projects", Projects = require ? require('./projects/collection/index').Projects : value);
        (require || prop === 'Project') && _export("Project", Project = require ? require('./projects/item').Project : value);
        (require || prop === 'Prompts') && _export("Prompts", Prompts = require ? require('./prompts/collection').Prompts : value);
        (require || prop === 'Prompt') && _export("Prompt", Prompt = require ? require('./prompts/item').Prompt : value);
        (require || prop === 'Schema') && _export("Schema", Schema = require ? require('./schemas/item').Schema : value);
        (require || prop === 'GTranslate') && _export("GTranslate", GTranslate = require ? require('./translate/index').GTranslate : value);
        (require || prop === 'AppGTranslate') && _export("AppGTranslate", AppGTranslate = require ? require('./translate/index').AppGTranslate : value);
        (require || prop === 'IChatUser') && _export("IChatUser", IChatUser = require ? require('./users/interface').IChatUser : value);
        (require || prop === 'User') && _export("User", User = require ? require('./users/item').User : value);
        (require || prop === 'Wrapper') && _export("Wrapper", Wrapper = require ? require('./wrapper/index').Wrapper : value);
        (require || prop === 'AppWrapper') && _export("AppWrapper", AppWrapper = require ? require('./wrapper/index').AppWrapper : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfY2hhdCIsIl9tZXNzYWdlcyIsIl9tZXNzYWdlIiwiX3V1aWQiLCJQbGF5Z3JvdW5kQ2hhdCIsIkl0ZW0iLCJwcm9tcHQiLCJhbnN3ZXIiLCJwcm9tcHRzIiwiYXJncyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDaGF0TWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwibWVzc2FnZSIsImxvZyIsInRyaWdnZXIiLCJzZW5kTWVzc2FnZSIsIm9uIiwiYmluZCIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInN5c3RlbSIsInJlc3BvbnNlTWVzc2FnZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJvYmplY3RpdmVzIiwic3VtbWFyeSIsInByb2dyZXNzIiwiZ2V0UHJvcGVydGllcyIsIl9wbGF5Z3JvdW5kIiwiX3Byb21wdHMiLCJQbGF5Z3JvdW5kIiwiUGxheWdyb3VuZFByb3ZpZGVyIiwiUHJvbXB0c01hbmFnZXIiLCJpdGVtcyIsImxpdGVyYWxzIiwia2V5cyIsInZhbHVlcyIsImhhbmRsZUNoYXRQcm9tcHQiLCJoYW5kbGVDaGF0QW5zd2VyIiwic2V0TGl0ZXJhbCIsInByb21wdERhdGEiLCJwYXJzZWQiLCJFcnJvciIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiX2RlcGVuZGVuY2llcyIsIl90ZW1wbGF0ZXMiLCJfcHJvbXB0IiwidGVtcGxhdGVzIiwiUFJPTVBUX1RFTVBMQVRFUyIsImRlcGVuZGVuY2llcyIsImNhY2hlIiwiTWFwIiwiY3VzdG9tTGl0ZXJhbHMiLCJQcm9tcHQiLCJzZXRJdGVtcyIsImxvYWRDYWNoZSIsImNhY2hlRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTdW1tYXJ5Iiwic2V0UHJvZ3Jlc3MiLCJzYXZlQ2FjaGUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJjaGVja0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwiZ2V0TGl0ZXJhbHMiLCJpc0RlcGVuZGVuY3kiLCJsaXRlcmFsIiwiU2V0IiwicmVwbGFjZSIsImFkZCIsImludGVybmFsIiwiaW50ZXJuYWxEZXBlbmRlbmNpZXMiLCJoYXMiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJwbGFjZWhvbGRlciIsImluY2x1ZGVzIiwicmVzdWx0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJzZXQiLCJjbGVhciIsInRleHQiLCJtYXRjaCIsInAxIiwic2F2ZSIsImV4aXN0aW5nUHJvbXB0IiwibGl0ZXJhbFZhbHVlcyIsInVwZGF0ZWRWYWx1ZSIsInVwZGF0ZWRQcm9tcHQiLCJpcGUiLCJfY29yZSIsImEiLCJzdHJlYW1NZXNzYWdlIiwidXJpIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwib25GaW5pc2giLCJyZXNvbHZlIiwib25FcnJvciIsInJlamVjdCIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImRlZmluZVByb3BlcnR5IiwiX3Byb3ZpZGVyIiwiUHJvamVjdHMiLCJQcm9qZWN0IiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiUHJvbXB0cyIsImZ1bmN0aW9ucyIsImZpbHRlciIsIm91dHB1dCIsImlzIiwicHVzaCIsImRlZmF1bHRMYW5ndWFnZSIsImxhbmd1YWdlIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJQcm9tcHRUZW1wbGF0ZSIsInZhbGlkIiwiaWRlbnRpZmllciIsImRlc2NyaXB0aW9uIiwiZm9ybWF0IiwicmVhZHkiLCJtZXRob2QiLCJ1cGRhdGVMYW5ndWFnZXMiLCJ1cGRhdGUiLCJsb2FkVHJhbnNsYXRlIiwic2F2ZVRyYW5zbGF0ZSIsInN0YXR1cyIsInByb2Nlc3MiLCJTY2hlbWEiLCJsYW5nIiwiY29kZSIsInNjaGVtYSIsIkdUcmFuc2xhdGUiLCJpc1JlYWR5IiwidHJhbnNsYXRlVGV4dCIsIkdUUkFOU0xBVEVfQVBJX0tFWSIsInVybCIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJxIiwidGFyZ2V0Iiwib2siLCJqc29uIiwidHJhbnNsYXRpb25zIiwidHJhbnNsYXRlZFRleHQiLCJfZ1RyYW5zbGF0ZSIsIkFwcEdUcmFuc2xhdGUiLCJnbG9iYWxUaGlzIiwiYXBwIiwiX3VzZXJzIiwiVXNlciIsImxvZ2dlZCIsInNjaG9vbHMiLCJ1bmRlcmFnZSIsImFnZSIsInRlcm1zQWNjZXB0ZWQiLCJ0ZXJtcyIsImFjY2VwdGVkIiwiaGFzQWNjZXNzIiwiYWNjZXNzaWJpbGl0eU1vZGUiLCJvdXRkYXRlZCIsInByb2plY3QiLCJkZWJ1ZyIsImJlYXJlciIsInRva2VuIiwibG9naW4iLCJmaXJlYmFzZVRva2VuIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJfc3RhcnR1cCIsIlVzZXJQcm92aWRlciIsInNka0NvbmZpZyIsIldyYXBwZXIiLCJnZXRQcm9tcHRzIiwiX3dyYXBwZXIiLCJBcHBXcmFwcGVyIl0sInNvdXJjZXMiOlsiL2NhdGVnb3JpZXMvY29sbGVjdGlvbi50cyIsIi9jYXRlZ29yaWVzL2l0ZW0tcHJvdmlkZXIudHMiLCIvY2F0ZWdvcmllcy9pdGVtLnRzIiwiL3BsYXlncm91bmQvY2hhdC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZS50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZXMudHMiLCIvcGxheWdyb3VuZC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvZGVwZW5kZW5jaWVzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvcHJvbXB0LnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy90ZW1wbGF0ZXMudHMiLCIvcGxheWdyb3VuZC9wcm92aWRlcnMvY2hhdC50cyIsIi9wbGF5Z3JvdW5kL3Byb3ZpZGVycy9wbGF5Z3JvdW5kLnRzIiwiL3R5cGVzLnRzIiwiL3Byb2plY3RzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvcHJvamVjdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi9wcm9qZWN0cy9pdGVtLXByb3ZpZGVyLnRzIiwiL3Byb2plY3RzL2l0ZW0udHMiLCIvcHJvbXB0cy9jb2xsZWN0aW9uLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvcHJvbXB0cy9pdGVtLnRzIiwiL3Byb21wdHMvcHJvdmlkZXIudHMiLCIvc2NoZW1hcy9pdGVtLnRzIiwiL3NjaGVtYXMvcHJvdmlkZXIudHMiLCIvdHJhbnNsYXRlL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi91c2Vycy9pdGVtLnRzIiwiL3VzZXJzL3Byb3ZpZGVyLnRzIiwiL3dyYXBwZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLElBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQUVPO1VBQVcsTUFBT0ksVUFBVyxTQUFRTCxXQUFBLENBQUFNLFVBQXNCO1lBQ2pFLENBQUFDLEdBQUk7WUFFSkMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsTUFBTSxFQUFFLGtCQUFrQjtnQkFBRUMsSUFBSSxFQUFFUixLQUFBLENBQUFTO2NBQVEsQ0FBRSxDQUFDO2NBQ3JELElBQUksQ0FBQyxDQUFBSixHQUFJLEdBQUcsSUFBSUosSUFBQSxDQUFBUyxHQUFHLENBQUNSLE9BQUEsQ0FBQVMsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDO1lBQzdDO1lBRUEsTUFBTUMsSUFBSUEsQ0FBQTtjQUNULElBQUk7Z0JBQ0gsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUFaLEdBQUksQ0FBQ2EsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2dCQUMzRCxPQUFPRCxRQUFRO2VBQ2YsQ0FBQyxPQUFPRSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNILFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQU0sT0FBQSxDQUFBbkIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7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