System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.0.5/entities/collection", "@beyond-js/http-suite@0.1.0/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.0.5/model", "@beyond-js/reactive@2.0.5/entities/item", "uuid@11.1.0", "@aimpact/chat-sdk@1.4.4/startup", "@aimpact/chat-sdk@1.4.4/session", "@beyond-js/kernel@0.1.12/core", "@aimpact/agents-client@0.0.29/prompts", "@aimpact/chat-sdk@1.4.4/users"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Categories, Category, Playground, PromptsCollection, Projects, Project, Prompts, IPromptSpecs, IPromptGenerationSpecs, ITool, IProject, ILiterals, IPromptParams, IUpdatePromptParams, Prompt, PromptTemplate, PromptTemplateLanguages, Schema, GTranslate, AppGTranslate, IChatUser, User, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Categories: void 0,
    Category: void 0,
    Playground: void 0,
    PromptsCollection: void 0,
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
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/chat-sdk", "1.4.4"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/reactive", "2.0.5"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["clsx", "2.1.1"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "11.2.0"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-split", "2.0.14"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
        hash: 3659989752,
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
              const response = await this.provider.sendMessage(this.system, specs);
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
        hash: 2966295189,
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
        hash: 3904184600,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playground = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _chat = require("./chat");
          var _prompts = require("./prompts");
          var _data = require("./prompts/data");
          var _globalLiterals = require("./prompts/literals/global-literals");
          var _playground = require("./providers/playground");
          var _resolver = require("./prompts/resolver");
          /*bundle*/
          class Playground extends _model.ReactiveModel {
            #chat;
            #provider;
            #prompts;
            #globalLiterals;
            #resolver;
            #promptResults = new Map();
            get promptResults() {
              return this.#promptResults;
            }
            get resolver() {
              return this.#resolver;
            }
            get globalLiterals() {
              return this.#globalLiterals;
            }
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
              this.#provider = new _playground.PlaygroundProvider();
              this.#globalLiterals = new _globalLiterals.GlobalLiterals();
              const items = [{
                id: 'system',
                is: 'prompt',
                name: 'system',
                value: 'You are a helpful assistant.'
              }, ..._data.PROMPTS_DATA];
              this.#prompts = new _prompts.PromptsCollection({
                items
              });
              this.#resolver = new _resolver.PromptResolver({
                prompts: this.#prompts,
                globalLiterals: this.#globalLiterals
              });
              this.#chat = new _chat.PlaygroundChat(this.#prompts);
              const updateSystem = () => {
                const updated = this.#resolver.resolve(this.#prompts.systemPrompt);
                this.#chat.system = updated.resolved;
              };
              this.#prompts.on('system.changed', updateSystem);
              this.#globalLiterals.on('change', updateSystem);
              this.#chat.on('new.prompt', this.handleChatPrompt.bind(this));
              this.#chat.on('new.answer', this.handleChatAnswer.bind(this));
            }
            handleChatPrompt(prompt) {
              this.#globalLiterals.setLiteral('PROMPT', prompt);
              this.trigger('new.prompt', prompt);
            }
            handleChatAnswer(answer) {
              this.#globalLiterals.setLiteral('ANSWER', answer);
              this.trigger('new.answer', answer);
            }
            async execute(name) {
              const prompt = this.#prompts.map.get(name);
              if (prompt) {
                const {
                  resolved
                } = this.#resolver.resolve(prompt);
                console.log(4, name);
                let response = await this.#provider.execute(resolved);
                try {
                  response = JSON.parse(response);
                } catch (e) {
                  // is not an error it's a string
                }
                // Store result in the promptResults map
                this.#promptResults.set(name, response);
                // Set the literal with the same name and value
                this.#globalLiterals.add(name, response);
                this.trigger('change');
              } else {
                throw new Error(`Prompt with name ${prompt} not found.`);
              }
            }
            analyze(prompt) {
              const {
                literals
              } = this.resolver.analyze(prompt.value);
              prompt.registerLiterals(literals.filter(l => !this.globalLiterals.names.includes(l)));
            }
          }
          exports.Playground = Playground;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./playground/prompts/data/dependencies
      ******************************************************/

      ims.set('./playground/prompts/data/dependencies', {
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

      /***********************************************
      INTERNAL MODULE: ./playground/prompts/data/index
      ***********************************************/

      ims.set('./playground/prompts/data/index', {
        hash: 1425719004,
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
            value: _templates.PROMPT_TEMPLATES.summary
          }, {
            id: 'ipe',
            name: 'ipe',
            is: 'prompt',
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

      /***************************************************
      INTERNAL MODULE: ./playground/prompts/data/templates
      ***************************************************/

      ims.set('./playground/prompts/data/templates', {
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

      /******************************************
      INTERNAL MODULE: ./playground/prompts/index
      ******************************************/

      ims.set('./playground/prompts/index', {
        hash: 382869719,
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
              return this.#dependencies;
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
              this.#system?.on('value.changed', () => {
                this.saveCache();
                console.log(100, this.items);
                this.trigger('system.changed');
              });
            }
            loadCache() {
              try {
                if (!localStorage.getItem('promptsCache')) return;
                const cacheData = JSON.parse(localStorage.getItem('promptsCache'));
                cacheData.forEach(item => {
                  if (item.name === 'system') {
                    this.#system.value = item.value;
                    return;
                  }
                  if (!this.map.has(item.id)) return;
                  const prompt = this.map.get(item.id);
                  item.literals.keys.forEach(key => prompt.setLiteral(key, item.literals.values[key]));
                });
              } catch (error) {
                console.error('error loading cache data', error);
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
            get customLiterals() {
              return this.#customLiterals;
            }
          }
          exports.PromptsCollection = PromptsCollection;
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./playground/prompts/literals/global-literals
      *************************************************************/

      ims.set('./playground/prompts/literals/global-literals', {
        hash: 3957391656,
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
            STORAGE_KEY = 'agents.playground.global.literals';
            defaultItems = [{
              id: 'topic',
              name: 'TOPIC',
              type: 'input'
            }, {
              id: 'objectives',
              name: 'OBJECTIVES',
              type: 'list'
            }, {
              id: 'PROMPT',
              name: 'PROMPT',
              type: 'input'
            }, {
              id: 'ANSWER',
              name: 'ANSWER',
              type: 'input'
            }];
            get names() {
              return this.items.map(item => item.name);
            }
            constructor() {
              super({
                entity: 'Literals',
                item: _literal.Literal
              });
              const items = this.validateCache();
              this.on('items.changed', () => {
                console.log('escuche el cambio de items');
              });
              this.setItems(items);
              this.save();
            }
            validateCache() {
              try {
                const cached = localStorage.getItem(this.STORAGE_KEY);
                if (!cached) return this.defaultItems;
                const parsed = JSON.parse(cached);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  // Create a map of default items by id
                  const defaultMap = new Map(this.defaultItems.map(item => [item.id, item]));
                  // Create a new array with all default items
                  const merged = [...this.defaultItems];
                  // For each cached item, either replace an existing default item or add it
                  parsed.forEach(cachedItem => {
                    const index = merged.findIndex(item => item.name === cachedItem.name);
                    if (index >= 0) {
                      merged[index] = cachedItem;
                    } else {
                      merged.push(cachedItem);
                    }
                  });
                  return merged;
                }
                return this.defaultItems;
              } catch (error) {
                console.error('Error reading from cache:', error);
                return this.defaultItems;
              }
            }
            save() {
              if (!this.items.length) return;
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
            add(name, value) {
              const literal = new _literal.Literal({
                id: name,
                name,
                type: 'input',
                value
              });
              this.setItems([literal]);
              this.trigger('change');
            }
          }
          exports.GlobalLiterals = GlobalLiterals;
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./playground/prompts/literals/literal
      *****************************************************/

      ims.set('./playground/prompts/literals/literal', {
        hash: 2634337874,
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

      /*******************************************
      INTERNAL MODULE: ./playground/prompts/prompt
      *******************************************/

      ims.set('./playground/prompts/prompt', {
        hash: 319090101,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Prompt = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          class Prompt extends _item.Item {
            #literals = {
              keys: [],
              values: {}
            };
            get literals() {
              return this.#literals;
            }
            /** tokens como {ROLE_INTRO} */
            get deps() {
              return [...this.value.matchAll(/\{([A-Z0-9_\-]+)\}/g)].map(m => m[1].replaceAll('-', '_'));
            }
            constructor(args) {
              super({
                ...args,
                entity: 'Prompts',
                properties: ['id', 'is', 'name', 'value']
              });
            }
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
          }
          exports.Prompt = Prompt;
        }
      });

      /*********************************************
      INTERNAL MODULE: ./playground/prompts/resolver
      *********************************************/

      ims.set('./playground/prompts/resolver', {
        hash: 2584465968,
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
            get dependencies() {
              return this.#dependencies;
            }
            #parsedPrompts = new Map();
            get parsedPrompts() {
              return this.#parsedPrompts;
            }
            constructor(args) {
              super();
              this.#prompts = args.prompts;
              this.#globalLiterals = args.globalLiterals;
              this.resolve = this.resolve.bind(this);
              this.#prompts.items.forEach(item => {
                item.on('value.changed', () => {
                  this.resolve(item);
                });
              });
              this.#dependencies = this.#prompts.items.filter(item => {
                const isDependency = item.is === 'dependency';
                if (isDependency) {
                  this.#dependencyNames.add(item.name);
                }
                return isDependency;
              });
              this.#prompts.items.forEach(item => {
                // console.log(this.resolve(item.value));
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
              const walk = (text, deph = 0) => text.replace(/\{([A-Z0-9\-]+)\}/gi, (_m, rawId) => {
                const id = rawId.replace(/-/g, '_'); // guion → underscore
                if (visited.has(id)) throw new Error(`Circular dependency detected: ${[...visited, id].join(' → ')}`);
                const dep = this.#prompts.items.find(p => p.name === id);
                if (!dep) {
                  literals.push(id);
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
                key = key.replace(/_/g, '-');
                return str.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
              };
              literals.forEach(name => {
                if (!this.#globalLiterals.names.includes(name) && !prompt.literals.keys.includes(name)) return;
                if (!!prompt.literals.values[name]) {
                  finalValue = replaceString(finalValue, name, prompt.literals.values[name]);
                  return;
                }
                const globalLiteral = this.#globalLiterals.items.find(item => item.name === name);
                finalValue = replaceString(finalValue, name, typeof globalLiteral?.value === 'string' ? globalLiteral?.value : JSON.stringify(globalLiteral?.value));
                return;
              });
              // Store both the expanded (original resolved) and fully replaced values
              const parsedPrompt = {
                resolved: finalValue,
                value,
                expanded: expandedValue,
                literals
              };
              this.#parsedPrompts.set(id, parsedPrompt);
              return parsedPrompt;
            }
            analyze(value) {
              const dependencies = [];
              const literals = [];
              const visited = new Set();
              const walk = text => {
                const placeholders = [...text.matchAll(/\{([A-Z0-9\-]+)\}/gi)].map(m => m[1].replace(/-/g, '_'));
                // Remove duplicates
                const uniquePlaceholders = [...new Set(placeholders)];
                uniquePlaceholders.forEach(id => {
                  if (visited.has(id)) return; // Avoid circular dependencies
                  const dep = this.#prompts.items.find(p => p.name === id);
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
        hash: 2287951050,
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
            async execute(prompt) {
              const response = await this.#api.post('/completions', {
                prompt,
                text: ''
              });
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
        hash: 2782334081,
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
              this.fetching = true;
              const firebaseToken = await this.firebaseToken;
              this.#api.bearer(firebaseToken);
              const specs = {};
              if (debug) specs.debug = true;
              const response = await this.#api.get('/users/me', specs);
              if (response.error && response.error?.code === 403) {
                throw new Error('ERROR_403');
              }
              if (response.error && response.error?.code === 503) {
                this.#outdated = true;
                return response;
              }
              this.#outdated = false;
              this.#data = response.data;
              if (!response.status) throw new Error('Error fetching terms');
              await this.set(response.data);
              this.trigger('user.loaded');
            }
            async login(firebaseToken) {
              try {
                this.fetching = true;
                this.#api.bearer(this.token);
                const response = await this.#api.post('/users/login', {
                  firebaseToken,
                  ...this.getProperties()
                });
                console.log(20, response);
                if (!response.status) throw new Error('Error fetching user data');
                const answer = this.set(response.data);
                if (this.token) {
                  await this.load();
                }
                this.#data = response.data;
                this.#logged = true;
                return true;
              } catch (e) {
                throw new Error(e);
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
        "from": "PromptsCollection",
        "name": "PromptsCollection"
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
        (require || prop === 'PromptsCollection') && _export("PromptsCollection", PromptsCollection = require ? require('./playground/prompts/index').PromptsCollection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfY2hhdCIsIl9tZXNzYWdlcyIsIl9tZXNzYWdlIiwiX3V1aWQiLCJQbGF5Z3JvdW5kQ2hhdCIsIkl0ZW0iLCJwcm9tcHQiLCJhbnN3ZXIiLCJwcm9tcHRzIiwiYXJncyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDaGF0TWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwibWVzc2FnZSIsImxvZyIsInRyaWdnZXIiLCJzZW5kTWVzc2FnZSIsIm9uIiwiYmluZCIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInN5c3RlbSIsInJlc3BvbnNlTWVzc2FnZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJvYmplY3RpdmVzIiwic3VtbWFyeSIsInByb2dyZXNzIiwiX3Byb21wdHMiLCJfZGF0YSIsIl9nbG9iYWxMaXRlcmFscyIsIl9wbGF5Z3JvdW5kIiwiX3Jlc29sdmVyIiwiUGxheWdyb3VuZCIsImdsb2JhbExpdGVyYWxzIiwicmVzb2x2ZXIiLCJwcm9tcHRSZXN1bHRzIiwiTWFwIiwiUGxheWdyb3VuZFByb3ZpZGVyIiwiR2xvYmFsTGl0ZXJhbHMiLCJpdGVtcyIsImlzIiwiUFJPTVBUU19EQVRBIiwiUHJvbXB0c0NvbGxlY3Rpb24iLCJQcm9tcHRSZXNvbHZlciIsInVwZGF0ZVN5c3RlbSIsInVwZGF0ZWQiLCJyZXNvbHZlIiwic3lzdGVtUHJvbXB0IiwicmVzb2x2ZWQiLCJoYW5kbGVDaGF0UHJvbXB0IiwiaGFuZGxlQ2hhdEFuc3dlciIsInNldExpdGVyYWwiLCJtYXAiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJhZGQiLCJFcnJvciIsImFuYWx5emUiLCJsaXRlcmFscyIsInJlZ2lzdGVyTGl0ZXJhbHMiLCJmaWx0ZXIiLCJsIiwibmFtZXMiLCJpbmNsdWRlcyIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiX3RlbXBsYXRlcyIsIl9kZXBlbmRlbmNpZXMiLCJQUk9NUFRfVEVNUExBVEVTIiwiaXBlIiwiX3Byb21wdCIsInRlbXBsYXRlcyIsImRlcGVuZGVuY2llcyIsImNhY2hlIiwiY3VzdG9tTGl0ZXJhbHMiLCJQcm9tcHQiLCJzZXRJdGVtcyIsImZpbmQiLCJsb2FkQ2FjaGUiLCJnbG9iYWxUaGlzIiwic2F2ZUNhY2hlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhY2hlRGF0YSIsImhhcyIsImtleXMiLCJrZXkiLCJ2YWx1ZXMiLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzYXZlIiwiX2xpdGVyYWwiLCJUWVBFUyIsIlNUT1JBR0VfS0VZIiwiZGVmYXVsdEl0ZW1zIiwidHlwZSIsIkxpdGVyYWwiLCJ2YWxpZGF0ZUNhY2hlIiwiY2FjaGVkIiwicGFyc2VkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGVmYXVsdE1hcCIsIm1lcmdlZCIsImNhY2hlZEl0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsInB1c2giLCJsaXRlcmFsIiwiZGVwcyIsIm1hdGNoQWxsIiwibSIsInJlcGxhY2VBbGwiLCJnZXRMaXRlcmFsIiwibm90aWZ5IiwidW5kZWZpbmVkIiwiZGVwZW5kZW5jeU5hbWVzIiwiU2V0IiwicGFyc2VkUHJvbXB0cyIsImlzRGVwZW5kZW5jeSIsInZpc2l0ZWQiLCJ3YWxrIiwidGV4dCIsImRlcGgiLCJyZXBsYWNlIiwiX20iLCJyYXdJZCIsImpvaW4iLCJkZXAiLCJwIiwiZGVsZXRlIiwiZXhwYW5kZWRWYWx1ZSIsImZpbmFsVmFsdWUiLCJyZXBsYWNlU3RyaW5nIiwic3RyIiwiUmVnRXhwIiwiZ2xvYmFsTGl0ZXJhbCIsInBhcnNlZFByb21wdCIsImV4cGFuZGVkIiwicGxhY2Vob2xkZXJzIiwidW5pcXVlUGxhY2Vob2xkZXJzIiwiX2NvcmUiLCJhIiwic3RyZWFtTWVzc2FnZSIsInVyaSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsIm9uRmluaXNoIiwib25FcnJvciIsInJlamVjdCIsInN0cmVhbSIsInRoZW4iLCJjYXRjaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3Byb3ZpZGVyIiwiUHJvamVjdHMiLCJQcm9qZWN0IiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiUHJvbXB0cyIsImZ1bmN0aW9ucyIsIm91dHB1dCIsImRlZmF1bHRMYW5ndWFnZSIsImxhbmd1YWdlIiwibW9kZWwiLCJQcm9tcHRUZW1wbGF0ZSIsInZhbGlkIiwiaWRlbnRpZmllciIsImRlc2NyaXB0aW9uIiwiZm9ybWF0IiwicmVhZHkiLCJtZXRob2QiLCJ1cGRhdGUiLCJ1cGRhdGVMYW5ndWFnZXMiLCJBUEkiLCJwcm9qZWN0IiwidG9vbHMiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJmZXRjaCIsImpzb24iLCJleGMiLCJsYW5ndWFnZXMiLCJib2R5IiwiYXNzaWduIiwiaGVhZGVycyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwibG9hZFRyYW5zbGF0ZSIsInNhdmVUcmFuc2xhdGUiLCJzdGF0dXMiLCJwcm9jZXNzIiwiU2NoZW1hIiwibGFuZyIsImNvZGUiLCJzY2hlbWEiLCJHVHJhbnNsYXRlIiwiaXNSZWFkeSIsInRyYW5zbGF0ZVRleHQiLCJHVFJBTlNMQVRFX0FQSV9LRVkiLCJ1cmwiLCJxIiwidGFyZ2V0Iiwib2siLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGVkVGV4dCIsIl9nVHJhbnNsYXRlIiwiQXBwR1RyYW5zbGF0ZSIsImFwcCIsIl91c2VycyIsIlVzZXIiLCJsb2dnZWQiLCJzY2hvb2xzIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsImhhc0FjY2VzcyIsImFjY2Vzc2liaWxpdHlNb2RlIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJsb2dpbiIsInRva2VuIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJfc3RhcnR1cCIsIlVzZXJQcm92aWRlciIsInNka0NvbmZpZyIsIldyYXBwZXIiLCJnZXRQcm9tcHRzIiwiX3dyYXBwZXIiLCJBcHBXcmFwcGVyIl0sInNvdXJjZXMiOlsiL2NhdGVnb3JpZXMvY29sbGVjdGlvbi50cyIsIi9jYXRlZ29yaWVzL2l0ZW0tcHJvdmlkZXIudHMiLCIvY2F0ZWdvcmllcy9pdGVtLnRzIiwiL3BsYXlncm91bmQvY2hhdC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZS50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZXMudHMiLCIvcGxheWdyb3VuZC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvZGF0YS9kZXBlbmRlbmNpZXMudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvbGl0ZXJhbHMvZ2xvYmFsLWxpdGVyYWxzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9wcm9tcHQudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiL3BsYXlncm91bmQvcHJvdmlkZXJzL2NoYXQudHMiLCIvcGxheWdyb3VuZC9wcm92aWRlcnMvcGxheWdyb3VuZC50cyIsIi90eXBlcy50cyIsIi9wcm9qZWN0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL3Byb2plY3RzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvcHJvamVjdHMvaXRlbS1wcm92aWRlci50cyIsIi9wcm9qZWN0cy9pdGVtLnRzIiwiL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3Byb21wdHMvaXRlbS9pbmRleC50cyIsIi9wcm9tcHRzL2l0ZW0vbW9kZWwudHMiLCIvcHJvbXB0cy9sYW5ndWFnZS50cyIsIi9wcm9tcHRzL3Byb3ZpZGVyLnRzIiwiL3NjaGVtYXMvaXRlbS50cyIsIi9zY2hlbWFzL3Byb3ZpZGVyLnRzIiwiL3RyYW5zbGF0ZS9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvdXNlcnMvaXRlbS50cyIsIi91c2Vycy9wcm92aWRlci50cyIsIi93cmFwcGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGlu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