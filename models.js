System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/entities/collection", "@beyond-js/http-suite@0.1.0/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.0.5/model", "@beyond-js/reactive@2.0.5/entities/item", "uuid@11.1.0", "@aimpact/chat-sdk@1.4.4/startup", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/core", "@aimpact/agents-client@0.0.29/prompts", "@aimpact/chat-sdk@1.4.4/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Categories, Category, Playground, PromptsManager, Projects, Project, Prompts, IPromptSpecs, IPromptGenerationSpecs, ITool, IProject, ILiterals, IPromptParams, IUpdatePromptParams, Prompt, PromptTemplate, PromptTemplateLanguages, Schema, GTranslate, AppGTranslate, IChatUser, User, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Categories: void 0,
    Category: void 0,
    Playground: void 0,
    PromptsManager: void 0,
    Projects: void 0,
    Project: void 0,
    Prompts: void 0,
    IPromptSpecs: void 0,
    IPromptGenerationSpecs: void 0,
    ITool: void 0,
    IProject: void 0,
    ILiterals: void 0,
    IPromptParams: void 0,
    IUpdatePromptParams: void 0,
    Prompt: void 0,
    PromptTemplate: void 0,
    PromptTemplateLanguages: void 0,
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
        hash: 844197857,
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
        hash: 369293612,
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
        hash: 1597466502,
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
        hash: 1482400190,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./prompts/item/index
      ************************************/

      ims.set('./prompts/item/index', {
        hash: 2625626707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _model = require("./model");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _provider = require("../provider");
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
              this.#model = new _model.PromptTemplate(this.id);
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
              const id = this.#model.id;
              const response = id.includes('new') ? this.#model.set(specs) : this.#model.update(specs);
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

      /*****************************************
      INTERNAL MODULE: ./prompts/item/interfaces
      *****************************************/

      ims.set('./prompts/item/interfaces', {
        hash: 630350338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./prompts/item/model
      ************************************/

      ims.set('./prompts/item/model', {
        hash: 2576295282,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplate = void 0;
          var _config = require("@aimpact/platform/config");
          const API = `${_config.default.params.apis[_config.default.params.project]}/prompts/templates`;
          /*bundle*/
          class PromptTemplate {
            #id;
            get id() {
              return this.#id;
            }
            #project;
            get project() {
              return this.#project;
            }
            #identifier;
            get identifier() {
              return this.#identifier;
            }
            #name;
            get name() {
              return this.#name;
            }
            #is;
            get is() {
              return this.#is;
            }
            #format;
            get format() {
              return this.#format;
            }
            #value;
            get value() {
              return this.#value;
            }
            #language;
            get language() {
              return this.#language;
            }
            #tools;
            get tools() {
              return this.#tools;
            }
            #literals;
            get literals() {
              return this.#literals;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            constructor(identifier) {
              if (typeof identifier === 'string') {
                this.#id = identifier;
              } else {
                this.#project = identifier.project;
                this.#identifier = identifier.identifier;
              }
            }
            async get() {
              if (this.#value || this.#error) return; // Check if already got
              try {
                const endpoint = `${API}/${this.#identifier ?? this.#id}`;
                const options = {
                  method: 'GET'
                };
                const response = await fetch(endpoint, options);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  throw new Error(error);
                  return;
                }
                this.#value = data?.value;
                this.#literals = data?.literals;
                this.#identifier = data?.identifier;
                this.#name = data?.name;
                this.#is = data?.is;
                this.#format = data?.format;
                this.#language = data?.language;
              } catch (exc) {
                // this.#error = ErrorGenerator.internalServerError(exc);
                throw new Error(exc);
              }
            }
            async set(params) {
              const {
                projectId,
                name,
                format,
                is
              } = params;
              if (!projectId) {
                throw new Error('projectId is required');
                return;
              }
              if (!name) {
                throw new Error('name is required');
                return;
              }
              if (!is) {
                throw new Error('is is required');
                return;
              }
              if (!format) {
                throw new Error('format is required');
                return;
              }
              if (!params.language) {
                throw new Error('language is required');
                return;
              }
              if (!params.language.languages) {
                throw new Error('language.languages is required');
                return;
              }
              try {
                const language = {
                  default: params.language.languages[0],
                  languages: params.language.languages,
                  update: [params.language.languages[0]]
                };
                const body = JSON.stringify(Object.assign({}, params, {
                  language
                }));
                const specs = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body
                };
                const response = await fetch(API, specs);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  throw new Error(error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#tools = data?.tools;
                return data;
              } catch (exc) {
                throw new Error(exc);
              }
            }
            async update(params) {
              const {
                id
              } = params;
              if (!id) {
                throw new Error('id is required');
                return;
              }
              try {
                const endpoint = `${API}/${id}`;
                const body = JSON.stringify(Object.assign({}, params));
                const specs = {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body
                };
                const response = await fetch(endpoint, specs);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  throw new Error(error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#tools = data?.tools;
                return data;
              } catch (exc) {
                throw new Error(exc);
              }
            }
            async updateLanguages(language) {
              if (!language) {
                throw new Error('language is required');
                return;
              }
              try {
                const id = this.#identifier ?? this.#id;
                const endpoint = `${API}/${id}/languages/update`;
                const body = JSON.stringify({
                  language
                });
                const specs = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body
                };
                const response = await fetch(endpoint, specs);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  throw new Error(error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#literals = data?.literals;
                this.#project = data?.project;
                return data;
              } catch (exc) {
                throw new Error(exc);
              }
            }
          }
          exports.PromptTemplate = PromptTemplate;
        }
      });

      /**********************************
      INTERNAL MODULE: ./prompts/language
      **********************************/

      ims.set('./prompts/language', {
        hash: 3031690194,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateLanguages = void 0;
          var _config = require("@aimpact/platform/config");
          /*bundle*/
          class PromptTemplateLanguages {
            #specs;
            #API = `${_config.default.params.apis[_config.default.params.project]}/prompts/templates`;
            constructor(specs) {
              this.#specs = specs;
            }
            #identifier;
            get identifier() {
              return this.#identifier;
            }
            #value;
            get value() {
              return this.#value;
            }
            #language;
            get language() {
              return this.#language;
            }
            #literals;
            get literals() {
              return this.#literals;
            }
            #project;
            get project() {
              return this.#project;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            async get(language) {
              if (this.#value || this.#error) return; // Check if already got
              try {
                if (!language) {
                  // this.#error = ErrorGenerator.invalidParameters('language');
                  throw new Error('Invalid parameter language');
                  return;
                }
                const endpoint = `${this.#API}/${this.#specs.name}?language=${language}`;
                const options = {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                const response = await fetch(endpoint, options);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  throw new Error('Invalid parameter name');
                  return;
                }
                this.#value = data?.value;
                this.#identifier = data?.identifier;
                this.#language = data?.language;
                this.#literals = data?.literals;
                this.#project = data?.project;
              } catch (exc) {
                throw new Error('something went wrong');
              }
            }
            async set(params) {
              const {
                language,
                text
              } = params;
              if (!language) {
                throw new Error('Invalid parameter language');
                return;
              }
              if (!text) {
                throw new Error('Invalid parameter language');
                return;
              }
              try {
                const endpoint = `${this.#API}/${this.#specs.name}/translate`;
                const body = JSON.stringify({
                  language,
                  text
                });
                const specs = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body
                };
                const response = await fetch(endpoint, specs);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  throw new Error('Invalid parameter language');
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#literals = data?.literals;
                this.#project = data?.project;
                return data;
              } catch (exc) {
                throw new Error('Invalid parameter language');
              }
            }
          }
          exports.PromptTemplateLanguages = PromptTemplateLanguages;
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
        hash: 4062259888,
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
        hash: 546858751,
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
                const firebaseToken = await this.firebaseToken;
                this.#api.bearer(firebaseToken);
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
        "im": "./prompts/interfaces",
        "from": "IPromptSpecs",
        "name": "IPromptSpecs"
      }, {
        "im": "./prompts/interfaces",
        "from": "IPromptGenerationSpecs",
        "name": "IPromptGenerationSpecs"
      }, {
        "im": "./prompts/interfaces",
        "from": "ITool",
        "name": "ITool"
      }, {
        "im": "./prompts/interfaces",
        "from": "IProject",
        "name": "IProject"
      }, {
        "im": "./prompts/interfaces",
        "from": "ILiterals",
        "name": "ILiterals"
      }, {
        "im": "./prompts/interfaces",
        "from": "IPromptParams",
        "name": "IPromptParams"
      }, {
        "im": "./prompts/interfaces",
        "from": "IUpdatePromptParams",
        "name": "IUpdatePromptParams"
      }, {
        "im": "./prompts/item/index",
        "from": "Prompt",
        "name": "Prompt"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "IPromptSpecs",
        "name": "IPromptSpecs"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "IPromptGenerationSpecs",
        "name": "IPromptGenerationSpecs"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "ITool",
        "name": "ITool"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "IProject",
        "name": "IProject"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "ILiterals",
        "name": "ILiterals"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "IPromptParams",
        "name": "IPromptParams"
      }, {
        "im": "./prompts/item/interfaces",
        "from": "IUpdatePromptParams",
        "name": "IUpdatePromptParams"
      }, {
        "im": "./prompts/item/model",
        "from": "PromptTemplate",
        "name": "PromptTemplate"
      }, {
        "im": "./prompts/language",
        "from": "PromptTemplateLanguages",
        "name": "PromptTemplateLanguages"
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
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./prompts/interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./prompts/interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./prompts/interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./prompts/interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./prompts/interfaces').ILiterals : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./prompts/interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./prompts/interfaces').IUpdatePromptParams : value);
        (require || prop === 'Prompt') && _export("Prompt", Prompt = require ? require('./prompts/item/index').Prompt : value);
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./prompts/item/interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./prompts/item/interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./prompts/item/interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./prompts/item/interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./prompts/item/interfaces').ILiterals : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./prompts/item/interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./prompts/item/interfaces').IUpdatePromptParams : value);
        (require || prop === 'PromptTemplate') && _export("PromptTemplate", PromptTemplate = require ? require('./prompts/item/model').PromptTemplate : value);
        (require || prop === 'PromptTemplateLanguages') && _export("PromptTemplateLanguages", PromptTemplateLanguages = require ? require('./prompts/language').PromptTemplateLanguages : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfY2hhdCIsIl9tZXNzYWdlcyIsIl9tZXNzYWdlIiwiX3V1aWQiLCJQbGF5Z3JvdW5kQ2hhdCIsIkl0ZW0iLCJwcm9tcHQiLCJhbnN3ZXIiLCJwcm9tcHRzIiwiYXJncyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDaGF0TWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwibWVzc2FnZSIsImxvZyIsInRyaWdnZXIiLCJzZW5kTWVzc2FnZSIsIm9uIiwiYmluZCIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInN5c3RlbSIsInJlc3BvbnNlTWVzc2FnZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJvYmplY3RpdmVzIiwic3VtbWFyeSIsInByb2dyZXNzIiwiZ2V0UHJvcGVydGllcyIsIl9wbGF5Z3JvdW5kIiwiX3Byb21wdHMiLCJQbGF5Z3JvdW5kIiwiUGxheWdyb3VuZFByb3ZpZGVyIiwiUHJvbXB0c01hbmFnZXIiLCJpdGVtcyIsImxpdGVyYWxzIiwia2V5cyIsInZhbHVlcyIsImhhbmRsZUNoYXRQcm9tcHQiLCJoYW5kbGVDaGF0QW5zd2VyIiwic2V0TGl0ZXJhbCIsInByb21wdERhdGEiLCJwYXJzZWQiLCJFcnJvciIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiX2RlcGVuZGVuY2llcyIsIl90ZW1wbGF0ZXMiLCJfcHJvbXB0IiwidGVtcGxhdGVzIiwiUFJPTVBUX1RFTVBMQVRFUyIsImRlcGVuZGVuY2llcyIsImNhY2hlIiwiTWFwIiwiY3VzdG9tTGl0ZXJhbHMiLCJQcm9tcHQiLCJzZXRJdGVtcyIsImxvYWRDYWNoZSIsImNhY2hlRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTdW1tYXJ5Iiwic2V0UHJvZ3Jlc3MiLCJzYXZlQ2FjaGUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJjaGVja0RlcGVuZGVuY3kiLCJkZXBlbmRlbmN5IiwiZ2V0TGl0ZXJhbHMiLCJpc0RlcGVuZGVuY3kiLCJsaXRlcmFsIiwiU2V0IiwicmVwbGFjZSIsImFkZCIsImludGVybmFsIiwiaW50ZXJuYWxEZXBlbmRlbmNpZXMiLCJoYXMiLCJ0ZW1wbGF0ZSIsImRhdGEiLCJwbGFjZWhvbGRlciIsImluY2x1ZGVzIiwicmVzdWx0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJzZXQiLCJjbGVhciIsInRleHQiLCJtYXRjaCIsInAxIiwic2F2ZSIsImV4aXN0aW5nUHJvbXB0IiwibGl0ZXJhbFZhbHVlcyIsInVwZGF0ZWRWYWx1ZSIsInVwZGF0ZWRQcm9tcHQiLCJpcGUiLCJfY29yZSIsImEiLCJzdHJlYW1NZXNzYWdlIiwidXJpIiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwib25GaW5pc2giLCJyZXNvbHZlIiwib25FcnJvciIsInJlamVjdCIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsImRlZmluZVByb3BlcnR5IiwiX3Byb3ZpZGVyIiwiUHJvamVjdHMiLCJQcm9qZWN0IiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiUHJvbXB0cyIsImZ1bmN0aW9ucyIsImZpbHRlciIsIm91dHB1dCIsImlzIiwicHVzaCIsImRlZmF1bHRMYW5ndWFnZSIsImxhbmd1YWdlIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJQcm9tcHRUZW1wbGF0ZSIsInZhbGlkIiwiaWRlbnRpZmllciIsImRlc2NyaXB0aW9uIiwiZm9ybWF0IiwicmVhZHkiLCJtZXRob2QiLCJ1cGRhdGUiLCJ1cGRhdGVMYW5ndWFnZXMiLCJBUEkiLCJwcm9qZWN0IiwidG9vbHMiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJmZXRjaCIsImpzb24iLCJleGMiLCJsYW5ndWFnZXMiLCJib2R5IiwiYXNzaWduIiwiaGVhZGVycyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwibG9hZFRyYW5zbGF0ZSIsInNhdmVUcmFuc2xhdGUiLCJzdGF0dXMiLCJwcm9jZXNzIiwiU2NoZW1hIiwibGFuZyIsImNvZGUiLCJzY2hlbWEiLCJHVHJhbnNsYXRlIiwiaXNSZWFkeSIsInRyYW5zbGF0ZVRleHQiLCJHVFJBTlNMQVRFX0FQSV9LRVkiLCJ1cmwiLCJxIiwidGFyZ2V0Iiwib2siLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGVkVGV4dCIsIl9nVHJhbnNsYXRlIiwiQXBwR1RyYW5zbGF0ZSIsImdsb2JhbFRoaXMiLCJhcHAiLCJfdXNlcnMiLCJVc2VyIiwibG9nZ2VkIiwic2Nob29scyIsInVuZGVyYWdlIiwiYWdlIiwidGVybXNBY2NlcHRlZCIsInRlcm1zIiwiYWNjZXB0ZWQiLCJoYXNBY2Nlc3MiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsIm91dGRhdGVkIiwiZGVidWciLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwibG9naW4iLCJ0b2tlbiIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwiX3N0YXJ0dXAiLCJVc2VyUHJvdmlkZXIiLCJzZGtDb25maWciLCJXcmFwcGVyIiwiZ2V0UHJvbXB0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciJdLCJzb3VyY2VzIjpbIi9jYXRlZ29yaWVzL2NvbGxlY3Rpb24udHMiLCIvY2F0ZWdvcmllcy9pdGVtLXByb3ZpZGVyLnRzIiwiL2NhdGVnb3JpZXMvaXRlbS50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9jaGF0L21lc3NhZ2UudHMiLCIvcGxheWdyb3VuZC9jaGF0L21lc3NhZ2VzLnRzIiwiL3BsYXlncm91bmQvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RlcGVuZGVuY2llcy50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL3Byb21wdC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvdGVtcGxhdGVzLnRzIiwiL3BsYXlncm91bmQvcHJvdmlkZXJzL2NoYXQudHMiLCIvcGxheWdyb3VuZC9wcm92aWRlcnMvcGxheWdyb3VuZC50cyIsIi90eXBlcy50cyIsIi9wcm9qZWN0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL3Byb2plY3RzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvcHJvamVjdHMvaXRlbS1wcm92aWRlci50cyIsIi9wcm9qZWN0cy9pdGVtLnRzIiwiL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3Byb21wdHMvaXRlbS9pbmRleC50cyIsIi9wcm9tcHRzL2l0ZW0vbW9kZWwudHMiLCIvcHJvbXB0cy9sYW5ndWFnZS50cyIsIi9wcm9tcHRzL3Byb3ZpZGVyLnRzIiwiL3NjaGVtYXMvaXRlbS50cyIsIi9zY2hlbWFzL3Byb3ZpZGVyLnRzIiwiL3RyYW5zbGF0ZS9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvdXNlcnMvaXRlbS50cyIsIi91c2Vycy9wcm92aWRlci50cyIsIi93cmFwcGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsSUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBRU87VUFBVyxNQUFPSSxVQUFXLFNBQVFMLFdBQUEsQ0FBQU0sVUFBc0I7WUFDakUsQ0FBQUMsR0FBSTtZQUVKQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxNQUFNLEVBQUUsa0JBQWtCO2dCQUFFQyxJQUFJLEVBQUVSLEtBQUEsQ0FBQVM7Y0FBUSxDQUFFLENBQUM7Y0FDckQsSUFBSSxDQUFDLENBQUFKLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFTLEdBQUcsQ0FBQ1IsT0FBQSxDQUFBUyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUM7WUFDN0M7WUFFQSxNQUFNQyxJQUFJQSxDQUFBO2NBQ1QsSUFBSTtnQkFDSCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQVosR0FBSSxDQUFDYSxHQUFHLENBQUMscUJBQXFCLENBQUM7Z0JBQzNELE9BQU9ELFFBQVE7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