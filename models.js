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
        hash: 1920683235,
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
        hash: 377285054,
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
        hash: 1597977011,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _config = require("@aimpact/platform/config");
          class ChatProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project]);
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
        hash: 817430292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlaygroundProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _core = require("@beyond-js/kernel/core");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/platform/config");
          class PlaygroundProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis[_config.default.params.project]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfY2hhdCIsIl9tZXNzYWdlcyIsIl9tZXNzYWdlIiwiX3V1aWQiLCJQbGF5Z3JvdW5kQ2hhdCIsIkl0ZW0iLCJwcm9tcHQiLCJhbnN3ZXIiLCJwcm9tcHRzIiwiYXJncyIsInByb3BlcnRpZXMiLCJuYW1lIiwidmFsdWUiLCJDaGF0TWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwibWVzc2FnZSIsImxvZyIsInRyaWdnZXIiLCJzZW5kTWVzc2FnZSIsIm9uIiwiYmluZCIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInN5c3RlbSIsInJlc3BvbnNlTWVzc2FnZSIsImV4ZWN1dGUiLCJhY3Rpb24iLCJvYmplY3RpdmVzIiwic3VtbWFyeSIsInByb2dyZXNzIiwiX3Byb21wdHMiLCJfZGF0YSIsIl9nbG9iYWxMaXRlcmFscyIsIl9wbGF5Z3JvdW5kIiwiX3Jlc29sdmVyIiwiUGxheWdyb3VuZCIsImdsb2JhbExpdGVyYWxzIiwicmVzb2x2ZXIiLCJwcm9tcHRSZXN1bHRzIiwiTWFwIiwiUGxheWdyb3VuZFByb3ZpZGVyIiwiR2xvYmFsTGl0ZXJhbHMiLCJpdGVtcyIsImlzIiwiUFJPTVBUU19EQVRBIiwiUHJvbXB0c0NvbGxlY3Rpb24iLCJQcm9tcHRSZXNvbHZlciIsInVwZGF0ZVN5c3RlbSIsInVwZGF0ZWQiLCJyZXNvbHZlIiwic3lzdGVtUHJvbXB0IiwicmVzb2x2ZWQiLCJoYW5kbGVDaGF0UHJvbXB0IiwiaGFuZGxlQ2hhdEFuc3dlciIsInNldExpdGVyYWwiLCJtYXAiLCJKU09OIiwicGFyc2UiLCJzZXQiLCJhZGQiLCJFcnJvciIsImFuYWx5emUiLCJsaXRlcmFscyIsInJlZ2lzdGVyTGl0ZXJhbHMiLCJmaWx0ZXIiLCJsIiwibmFtZXMiLCJpbmNsdWRlcyIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiX3RlbXBsYXRlcyIsIl9kZXBlbmRlbmNpZXMiLCJQUk9NUFRfVEVNUExBVEVTIiwiaXBlIiwiX3Byb21wdCIsInRlbXBsYXRlcyIsImRlcGVuZGVuY2llcyIsImNhY2hlIiwiY3VzdG9tTGl0ZXJhbHMiLCJQcm9tcHQiLCJzZXRJdGVtcyIsImZpbmQiLCJsb2FkQ2FjaGUiLCJnbG9iYWxUaGlzIiwic2F2ZUNhY2hlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNhY2hlRGF0YSIsImhhcyIsImtleXMiLCJrZXkiLCJ2YWx1ZXMiLCJkYXRhIiwiZ2V0UHJvcGVydGllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzYXZlIiwiX2xpdGVyYWwiLCJUWVBFUyIsIlNUT1JBR0VfS0VZIiwiZGVmYXVsdEl0ZW1zIiwidHlwZSIsIkxpdGVyYWwiLCJ2YWxpZGF0ZUNhY2hlIiwiY2FjaGVkIiwicGFyc2VkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZGVmYXVsdE1hcCIsIm1lcmdlZCIsImNhY2hlZEl0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsInB1c2giLCJsaXRlcmFsIiwiZGVwcyIsIm1hdGNoQWxsIiwibSIsInJlcGxhY2VBbGwiLCJnZXRMaXRlcmFsIiwibm90aWZ5IiwidW5kZWZpbmVkIiwiZGVwZW5kZW5jeU5hbWVzIiwiU2V0IiwicGFyc2VkUHJvbXB0cyIsImlzRGVwZW5kZW5jeSIsInZpc2l0ZWQiLCJ3YWxrIiwidGV4dCIsImRlcGgiLCJyZXBsYWNlIiwiX20iLCJyYXdJZCIsImpvaW4iLCJkZXAiLCJwIiwiZGVsZXRlIiwiZXhwYW5kZWRWYWx1ZSIsImZpbmFsVmFsdWUiLCJyZXBsYWNlU3RyaW5nIiwic3RyIiwiUmVnRXhwIiwiZ2xvYmFsTGl0ZXJhbCIsInBhcnNlZFByb21wdCIsImV4cGFuZGVkIiwicGxhY2Vob2xkZXJzIiwidW5pcXVlUGxhY2Vob2xkZXJzIiwiX2NvcmUiLCJwcm9qZWN0IiwiYSIsInN0cmVhbU1lc3NhZ2UiLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJvbkZpbmlzaCIsIm9uRXJyb3IiLCJyZWplY3QiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9wcm92aWRlciIsIlByb2plY3RzIiwiUHJvamVjdCIsIkNvbGxlY3Rpb25Qcm92aWRlciIsIlByb21wdHMiLCJmdW5jdGlvbnMiLCJvdXRwdXQiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsIm1vZGVsIiwiUHJvbXB0VGVtcGxhdGUiLCJ2YWxpZCIsImlkZW50aWZpZXIiLCJkZXNjcmlwdGlvbiIsImZvcm1hdCIsInJlYWR5IiwibWV0aG9kIiwidXBkYXRlIiwidXBkYXRlTGFuZ3VhZ2VzIiwiQVBJIiwidG9vbHMiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJmZXRjaCIsImpzb24iLCJleGMiLCJsYW5ndWFnZXMiLCJib2R5IiwiYXNzaWduIiwiaGVhZGVycyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwibG9hZFRyYW5zbGF0ZSIsInNhdmVUcmFuc2xhdGUiLCJzdGF0dXMiLCJwcm9jZXNzIiwiU2NoZW1hIiwibGFuZyIsImNvZGUiLCJzY2hlbWEiLCJHVHJhbnNsYXRlIiwiaXNSZWFkeSIsInRyYW5zbGF0ZVRleHQiLCJHVFJBTlNMQVRFX0FQSV9LRVkiLCJ1cmwiLCJxIiwidGFyZ2V0Iiwib2siLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGVkVGV4dCIsIl9nVHJhbnNsYXRlIiwiQXBwR1RyYW5zbGF0ZSIsImFwcCIsIl91c2VycyIsIlVzZXIiLCJsb2dnZWQiLCJzY2hvb2xzIiwidW5kZXJhZ2UiLCJhZ2UiLCJ0ZXJtc0FjY2VwdGVkIiwidGVybXMiLCJhY2NlcHRlZCIsImhhc0FjY2VzcyIsImFjY2Vzc2liaWxpdHlNb2RlIiwib3V0ZGF0ZWQiLCJkZWJ1ZyIsImZpcmViYXNlVG9rZW4iLCJiZWFyZXIiLCJsb2dpbiIsInRva2VuIiwiYWNjZXB0VGVybXMiLCJiaXJ0aGRhdGUiLCJfc3RhcnR1cCIsIlVzZXJQcm92aWRlciIsInNka0NvbmZpZyIsIldyYXBwZXIiLCJnZXRQcm9tcHRzIiwiX3dyYXBwZXIiLCJBcHBXcmFwcGVyIl0sInNvdXJjZXMiOlsiL2NhdGVnb3JpZXMvY29sbGVjdGlvbi50cyIsIi9jYXRlZ29yaWVzL2l0ZW0tcHJvdmlkZXIudHMiLCIvY2F0ZWdvcmllcy9pdGVtLnRzIiwiL3BsYXlncm91bmQvY2hhdC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZS50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZXMudHMiLCIvcGxheWdyb3VuZC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvZGF0YS9kZXBlbmRlbmNpZXMudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvbGl0ZXJhbHMvZ2xvYmFsLWxpdGVyYWxzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9wcm9tcHQudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiL3BsYXlncm91bmQvcHJvdmlkZXJzL2NoYXQudHMiLCIvcGxheWdyb3VuZC9wcm92aWRlcnMvcGxheWdyb3VuZC50cyIsIi90eXBlcy50cyIsIi9wcm9qZWN0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL3Byb2plY3RzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvcHJvamVjdHMvaXRlbS1wcm92aWRlci50cyIsIi9wcm9qZWN0cy9pdGVtLnRzIiwiL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3Byb21wdHMvaXRlbS9pbmRleC50cyIsIi9wcm9tcHRzL2l0ZW0vbW9kZWwudHMiLCIvcHJvbXB0cy9sYW5ndWFnZS50cyIsIi9wcm9tcHRzL3Byb3ZpZGVyLnRzIiwiL3NjaGVtYXMvaXRlbS50cyIsIi9zY2hlbWFzL3Byb3ZpZGVyLnRzIiwiL3RyYW5zbGF0ZS9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvdXNlcnMvaXRlbS50cyIsIi91c2Vycy9wcm92aWRlci50cyIsIi93cmFwcGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGlu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