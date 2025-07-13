System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/entities/item", "uuid@11.1.0", "@beyond-js/reactive@2.1.0/entities/collection", "@beyond-js/reactive@2.1.0/model", "@aimpact/platform@0.1.6/config", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/kernel@0.1.12/core", "@aimpact/chat-sdk@1.5.5/session"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Playground, PromptsCollection, IPEStatus, __beyond_pkg, hmr;
  _export({
    Playground: void 0,
    PromptsCollection: void 0,
    IPEStatus: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_1 = _beyondJsReactive210EntitiesItem;
    }, function (_uuid2) {
      dependency_2 = _uuid2;
    }, function (_beyondJsReactive210EntitiesCollection) {
      dependency_3 = _beyondJsReactive210EntitiesCollection;
    }, function (_beyondJsReactive210Model) {
      dependency_4 = _beyondJsReactive210Model;
    }, function (_aimpactPlatform016Config) {
      dependency_5 = _aimpactPlatform016Config;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_6 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsKernel0112Core) {
      dependency_7 = _beyondJsKernel0112Core;
    }, function (_aimpactChatSdk155Session) {
      dependency_8 = _aimpactChatSdk155Session;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities/item', dependency_1], ['uuid', dependency_2], ['@beyond-js/reactive/entities/collection', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/platform/config', dependency_5], ['@beyond-js/http-suite/api', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@aimpact/chat-sdk/session', dependency_8]]);
      ims = new Map();
      /***************************
      INTERNAL MODULE: ./HARDCODED
      ***************************/
      ims.set('./HARDCODED', {
        hash: 4293573334,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DATA = void 0;
          const DATA = exports.DATA = {
            box: 'si funciona, pa que vos veais',
            items: [{
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.activity-character-talk-v2',
              name: 'activity-character-talk-v2',
              identifier: 'ailearn.activity-character-talk-v2',
              is: 'prompt',
              literals: {
                pure: ['ROLE'],
                dependencies: ['CONVERSATION-STANDARD-PROCEDURE', 'ACTIVITY-CHAT-KEY-INSTRUCTIONS-V2', 'EDUCATIONAL-CONTEXT', 'CONVERSATION-ATTACHED-DATA']
              },
              format: 'json',
              language: {
                languages: ['es', 'en', 'de'],
                supported: ['es', 'en', 'de'],
                default: 'es',
                updated: ['en', 'es', 'de']
              },
              value: 'Eres un docente interactuando en una actividad educativa con tu [ALUMNO], específicamente en una actividad de role-playing actuando en base al [ROL] que se te ha asignado. Tu función es ayudar al alumno a cumplir con los [OBJETIVOS DE LA ACTIVIDAD] para la actividad, para eso, sigue el [PROCEDIMIENTO] establecido.\n\nROL = [[[ \nActúa en base al siguiente rol: {ROLE}\n]]]\n\n[PROCEDIMIENTO] = [[[\n{CONVERSATION-STANDARD-PROCEDURE}\n* Presta atención también al desarrollo del rol del personaje y la inmersión del alumno, mientras comprende la perspectiva del personaje, priorizando la continuidad de la conversación en función de la narrativa construida.\n* Ayuda al alumno a explorar emociones, motivaciones y el contexto del personaje. Para fortalecer la práctica, anima al alumno a pensar cómo el personaje reaccionaría ante diferentes situaciones.\n* No hagas el trabajo por el alumno; guíalo para que pueda descubrir las respuestas por sí mismo a través de la interpretación del personaje.\n]]]\n\n{ACTIVITY-CHAT-KEY-INSTRUCTIONS-V2}\n\n{EDUCATIONAL-CONTEXT}\n\n{CONVERSATION-ATTACHED-DATA}\n\nEvita el pre-texto y post-texto y responde directamente en función del procedimiento indicado, sin añadir introducciones o conclusiones innecesarias.'
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.character-talk-ipe-v2',
              name: 'character-talk-ipe-v2',
              identifier: 'ailearn.character-talk-ipe-v2',
              format: 'json_schema',
              is: 'prompt',
              literals: {
                pure: ['ROLE'],
                dependencies: ['ITERATIVE-PROGRESS-EVALUATION-BEGIN-V2', 'EDUCATIONAL-CONTEXT', 'ITERATIVE-PROGRESS-EVALUATION-ENDING-V2']
              },
              language: {
                default: 'es',
                update: ['es'],
                updated: ['en', 'es'],
                languages: ['es', 'en', 'de']
              },
              value: '{ITERATIVE-PROGRESS-EVALUATION-BEGIN-V2}\n\nSe trata de una actividad didáctica realizada entre un alumno y su docente, específicamente en una actividad de role-playing donde el docente actúa con el siguiente rol: {ROLE}.\n\n{EDUCATIONAL-CONTEXT}\n\n{ITERATIVE-PROGRESS-EVALUATION-ENDING-v2}'
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.character-talk-summary',
              name: 'character-talk-summary',
              identifier: 'ailearn.character-talk-summary',
              format: 'text',
              is: 'prompt',
              value: '{HEADER-JSON}\n\n{CONVERSATION-SUMMARY-BEGIN}\n\nSe trata de una actividad didáctica realizada entre un alumno y su docente, específicamente en una actividad de role-playing donde el docente actúa con el siguiente rol: {ROLE}.\n\n{EDUCATIONAL-CONTEXT}\n\n{CONVERSATION-SUMMARY-ENDING}',
              literals: {
                pure: ['ROLE'],
                dependencies: ['HEADER-JSON', 'CONVERSATION-SUMMARY-BEGIN', 'EDUCATIONAL-CONTEXT', 'CONVERSATION-SUMMARY-ENDING']
              },
              language: {
                default: 'es',
                languages: ['es', 'de', 'en'],
                updated: ['en', 'es', 'de']
              }
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.conversation-standard-procedure',
              name: 'conversation-standard-procedure',
              identifier: 'ailearn.conversation-standard-procedure',
              format: 'text',
              is: 'dependency',
              value: '* Lee los [OBJETIVOS DE LA ACTIVIDAD] establecidos.\n* Analiza el [RESUMEN DE LA CONVERSACIÓN HASTA EL MOMENTO] y [PROGRESO DE LOS OBJETIVOS DEL ALUMNO EN LA ACTIVIDAD], prestando especial atención al progreso de cada uno de ellos según se han establecido los [OBJETIVOS DE LA ACTIVIDAD].\n* Identifica el siguiente paso que debería seguir el alumno para cumplir con cada objetivo, priorizando la continuidad de la conversación de acuerdo a los progresos alcanzados.\n* Cuando todos los objetivos estén cumplidos, sugiere cerrar la actividad. La actividad se cerrará cuando el alumno lo confirme.',
              literals: {
                pure: [],
                dependencies: []
              },
              language: {
                default: 'en',
                languages: ['en', 'es', 'de'],
                updated: ['en', 'es', 'de']
              }
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.activity-chat-key-instructions-v2',
              name: 'activity-chat-key-instructions-v2',
              identifier: 'ailearn.activity-chat-key-instructions-v2',
              format: 'text',
              is: 'dependency',
              value: '[INSTRUCCIONES CLAVE] = [[[\n* Siempre que sea posible, mantén las respuestas cortas, concisas, directas y usa un lenguaje simple.\n* Guía a tu alumno hacia la comprensión y el interés en la actividad, usando técnicas de enseñanza efectivas y motivación, tal como lo haría un educador excepcional.\n* Si el alumno se desvía de los objetivos de la conversación, pídele que vuelva al tema original.\n* Intenta ser proactivo, guiándolo constantemente y promueve su pensamiento crítico.\n* Haz cumplir el uso del español en tus respuestas. Si el estudiante habla en otro idioma, anímalo/a a volver al español.\n{INSTRUCTIONS}\n]]]',
              language: {
                default: 'es',
                languages: ['es', 'en', 'de'],
                supported: ['es', 'en', 'de'],
                updated: ['en', 'es', 'de']
              },
              literals: {
                dependencies: [],
                pure: ['ANWEISUNGEN']
              }
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.educational-context',
              name: 'educational-context',
              identifier: 'ailearn.educational-context',
              format: 'text',
              is: 'dependency',
              literals: {
                dependencies: [],
                pure: ['FORMAT', 'ENTITY', 'LEVEL']
              },
              language: {
                default: 'es',
                update: ['es'],
                languages: ['es', 'en', 'de'],
                updated: ['en', 'es']
              },
              value: '[Contexto del módulo] = [[[\n* Tipo de formación: {FORMAT}\n* Entidad académica: {ENTITY}\n* Grado o Nivel: {LEVEL}\n]]]'
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.conversation-attached-data',
              name: 'conversation-attached-data',
              identifier: 'ailearn.conversation-attached-data',
              format: 'text',
              is: 'dependency',
              value: '[ALUMNO] = [[[\n{USER}\n]]]\n\n[OBJETIVOS DE LA ACTIVIDAD] = [[[\n{OBJECTIVES}\n]]]\n\n[RESUMEN DE LA CONVERSACIÓN HASTA EL MOMENTO] = [[[\n{SUMMARY}\n]]]\n\n[PROGRESO DE LOS OBJETIVOS DEL ALUMNO EN LA ACTIVIDAD] = [[[\n{PROGRESS}\n]]]',
              literals: {
                dependencies: [],
                pure: ['USER', 'OBJECTIVES', 'SUMMARY', 'PROGRESS']
              },
              language: {
                default: 'en',
                languages: ['en', 'es', 'de'],
                updated: ['en', 'es', 'de']
              }
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.iterative-progress-evaluation-begin-v2',
              name: 'iterative-progress-evaluation-begin-v2',
              identifier: 'ailearn.iterative-progress-evaluation-begin-v2',
              format: 'text',
              is: 'dependency',
              literals: {
                pure: [],
                dependencies: []
              },
              language: {
                default: 'es',
                update: ['es'],
                languages: ['es', 'en', 'de'],
                updated: ['en', 'es', 'de']
              },
              value: 'Eres un docente analizando el progreso de una actividad educativa, entre un [ALUMNO] y su docente. Tu trabajo es evaluar la [ÚLTIMA INTERACCIÓN] entre el alumno y su docente para actualizar el progreso de cada objetivo, tomando como base el [PROGRESO PREVIO] que viene teniendo el alumno en la actividad.'
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.iterative-progress-evaluation-ending-v2',
              name: 'iterative-progress-evaluation-ending-v2',
              identifier: 'ailearn.iterative-progress-evaluation-ending-v2',
              is: 'dependency',
              format: 'text',
              literals: {
                dependencies: [],
                pure: ['USER', 'OBJECTIVES', 'SUMMARY', 'PROGRESS', 'PREVIOUS', 'PROMPT']
              },
              language: {
                default: 'es',
                update: ['es'],
                languages: ['es', 'en', 'de'],
                updated: ['en', 'es']
              },
              value: 'ALUMNO = [[[ {USER} ]]]\n\n[OBJETIVOS] = {OBJECTIVES}\n\n[RESUMEN DE LA CONVERSACIÓN PREVIA A ÚLTIMA INTERACCIÓN] = [[[\n{SUMMARY}\n]]]\n\n[PROGRESO DE LOS OBJETIVOS] = {PROGRESS}\n\n[ÚLTIMA ITERACIÓN]: [[[\n* Docente escribe: *\n{PREVIOUS}\n\n* El alumno responde: *\n{PROMPT}\n]]]\n\nUtiliza la siguiente cadena de razonamiento:\n1. Escribe cuáles de los objetivos están siendo alcanzados ("reached") por la última interacción entre el docente y el alumno.\n2. Haz un análisis del progreso de cada objetivo ("objectives"), sólo enfócate en los objetivos alcanzados según el paso anterior:\n2.1. Escribe cómo hubiese sido una interacción apropiada por parte del alumno para cada objetivo alcanzado por la interacción ("expected").\n2.2. Contrasta la expectativa del objetivo ("contradistinction") con el mensaje realizado por el alumno.\n2.3. Escribe cómo esta última iteración se debe integrar ("integration") con el [PROGRESO DE LOS OBJETIVOS] anteriores a esta iteración.\n2.4 Escribe cuál ha sido el progreso del objetivo ("progress") integrando los puntos anteriores (2.1, 2.2, 2.3).\n\nInstrucciones adicionales:\n* Si ninguno de los objetivos ha sido alcanzado por la última interacción con el alumno, la propiedad objectives debe ser: false.\n* Asegúrate de generar siempre las propiedades "progress" y "status" de cada objetivo. No menciones el estado del progreso en la propiedad "progress", sino en la propiedad "status".\n* Antes de generar un objetivo, asegúrate de que este esté presente en la propiedad "reached".'
            }, {
              identifier: 'ailearn.header-json',
              name: 'header-json',
              format: 'text',
              project: {
                identifier: 'ailearn',
                name: 'RDV.AI',
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0'
              },
              is: 'dependency',
              id: 'ailearn.header-json',
              value: 'Evita el pre-text y el post-text, no hagas comentarios, sugerencias o aclaraciones. Sólo escribe el contenido de un archivo .json según el esquema especificado abajo. Evita el uso de markdown.',
              literals: {
                pure: [],
                dependencies: []
              },
              language: {
                default: 'es',
                languages: ['es', 'en', 'de'],
                updated: ['en', 'es', 'de']
              }
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.conversation-summary-begin',
              name: 'conversation-summary-begin',
              identifier: 'ailearn.conversation-summary-begin',
              format: 'text',
              is: 'dependency',
              value: 'Eres un redactor especialista en realizar resúmenes de conversaciones. Tu tarea es realizar el resumen de la conversación entre el [ALUMNO] y su docente.\nCuentas con el [RESUMEN DE CONVERSACIÓN HASTA EL MOMENTO] previo a la última interacción entre el alumno y su docente, y debes integrar la última interacción para crear la nueva síntesis.',
              language: {
                default: 'en',
                languages: ['en', 'es', 'de'],
                updated: ['en', 'es', 'de']
              },
              literals: {
                pure: [],
                dependencies: []
              }
            }, {
              project: {
                id: 'a1l34rn1-453a-4612-b6fd-59cb742111d0',
                name: 'RDV.AI',
                identifier: 'ailearn'
              },
              id: 'ailearn.conversation-summary-ending',
              name: 'conversation-summary-ending',
              identifier: 'ailearn.conversation-summary-ending',
              format: 'text',
              is: 'dependency',
              value: '[ALUMNO] =[[[ {USER} ]]]\n\n[RESUMEN DE LA CONVERSACIÓN HASTA EL MOMENTO] = [[[\n{SUMMARY}\n]]]\n\n[{USER} DICE]: [[[\n{PROMPT}\n]]]\n\n[RESPUESTA]: [[[\n{ANSWER}\n]]]\n\nRealiza tu respuesta en formato JSON según la siguiente especificación:\n```json\n{"summary": string}\n```\n\nInstrucciones clave:\n  - La síntesis debe priorizar los eventos más antiguos y construir progresivamente hacia los más recientes, manteniendo la coherencia temporal.\n  - Concisión: No incluir todos los detalles, sino los puntos clave relevantes para evaluar el progreso.\n  - Iteración: En cada interacción, el resumen se amplía con la nueva información, sin redundancias ni retrocesos.\n\nEscribe el contenido JSON solicitado, no uses markdown. Recuerda hacer una síntesis breve, pero lo más completa posible.',
              literals: {
                dependencies: [],
                pure: ['USER', 'SUMMARY', 'USER', 'PROMPT', 'ANSWER']
              },
              language: {
                default: 'en',
                languages: ['en', 'es', 'de'],
                updated: ['en', 'es', 'de']
              }
            }]
          };
        }
      });

      /****************************
      INTERNAL MODULE: ./activities
      ****************************/

      ims.set('./activities', {
        hash: 567948460,
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
            }
          };
        }
      });

      /****************************
      INTERNAL MODULE: ./chat/index
      ****************************/

      ims.set('./chat/index', {
        hash: 578588720,
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
            #system;
            #answer;
            get answer() {
              return this.#answer;
            }
            #parent;
            #prompts;
            constructor(parent, prompts, args = {}) {
              super({
                entity: 'playground-chat',
                properties: ['id', 'name', 'userId', 'category', 'system', 'objectives', 'progress', 'summary', 'parent', 'knowledgeBoxId', {
                  name: 'messages',
                  value: _messages.ChatMessages
                }, 'usage', 'metadata'],
                //@ts-ignore
                id: 'playground-chat',
                provider: _chat.ChatProvider,
                ...args
              });
              this.#parent = parent;
              this.#prompts = prompts;
              this.#system = this.#prompts.map.get('system');
              this.#system.on('change', this.handleSystemMessage.bind(this));
              this.sendMessage = this.sendMessage.bind(this);
            }
            handleSystemMessage(message) {
              this.trigger('stream.response', message);
            }
            async sendMessage(message, files) {
              this.provider.on('stream.response', this.handleSystemMessage.bind(this));
              const interactions = this.#parent.getInteractions();
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
              const system = this.#parent.parse(this.#system);
              const response = await this.provider.sendMessage({
                prompt: system.parsed,
                text: message,
                type: 'chat',
                files,
                model: this.#parent.model,
                interactions
              });
              const responseMessage = new _message.ChatMessage({
                id: (0, _uuid.v4)(),
                content: response,
                role: 'assistant',
                register: true
              });
              this.trigger('new.answer', responseMessage.content);
              this.#answer = responseMessage.content;
              this.trigger('new.message', responseMessage);
              if (this.#parent.model !== 'mediawiki') {
                await this.#parent.execute(this.#parent.prompts.map.get('summary'));
                await this.#parent.execute(this.#parent.prompts.map.get('ipe'));
              }
            }
          }
          exports.PlaygroundChat = PlaygroundChat;
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
        hash: 428083390,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playground = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _chat = require("./chat");
          var _prompts = require("./prompts");
          var _activities = require("./activities");
          var _globalLiterals = require("./prompts/literals/global-literals");
          var _reserved = require("./prompts/literals/reserved");
          var _resolver = require("./prompts/resolver");
          var _playground = require("./providers/playground");
          var _schema = require("./schema");
          /*bundle*/
          class Playground extends _model.ReactiveModel {
            #provider;
            #prompts;
            #activities = Object.keys(_activities.promptActivities).map(key => _activities.promptActivities[key]);
            get activities() {
              return this.#activities;
            }
            #reservedLiterals;
            get reservedLiterals() {
              return this.#reservedLiterals;
            }
            #resolver;
            get resolver() {
              return this.#resolver;
            }
            #globalLiterals;
            get globalLiterals() {
              return this.#globalLiterals;
            }
            get prompts() {
              return this.#prompts;
            }
            #chat;
            get chat() {
              return this.#chat;
            }
            /**
             * Is defined to check if the model has data in localStorage
             */
            #modelId;
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
            #system;
            constructor() {
              super({
                properties: ['model', 'totalInteractions', 'temperature'],
                totalInteractions: 4
              });
              this.#provider = new _playground.PlaygroundProvider();
              const prompts = new _prompts.PromptsCollection({
                items: [{
                  id: 'ipe',
                  is: 'prompt',
                  name: 'IPE',
                  promptSchema: {},
                  value: ''
                }, {
                  id: 'summary',
                  is: 'prompt',
                  promptSchema: {},
                  name: 'SUMMARY',
                  value: ''
                }, {
                  id: 'system',
                  is: 'prompt',
                  name: 'SYSTEM',
                  value: 'You are a helpful assistant.'
                }]
              });
              this.#prompts = prompts;
              this.#chat = new _chat.PlaygroundChat(this, this.#prompts);
              this.initialize();
              this.#system = this.#prompts.map.get('system');
              this.#provider.getModels().then(models => {
                this.#models = models;
                this.model = models[0];
                this.ready = true;
              }).catch(e => {
                this.#errors.push(e.message);
                this.ready = true;
                this.trigger('change');
                console.error('llegamos aca', e);
              });
              this.#chat.on('new.prompt', this.handleChatPrompt.bind(this));
              this.#chat.on('new.answer', this.handleChatAnswer.bind(this));
            }
            initialize() {
              const key = `${this.#modelId}.globalLiterals`;
              let global = localStorage.getItem(key);
              global = global ? JSON.parse(global) : [];
              this.#reservedLiterals = new _reserved.ReservedLiterals({
                chat: this.#chat,
                parent: this
              });
              this.#globalLiterals = new _globalLiterals.GlobalLiterals({
                key,
                prompts: this.#prompts,
                items: global,
                reserved: this.#reservedLiterals.names
              });
              if (this.#resolver) {
                this.#resolver = undefined;
              }
              this.#resolver = new _resolver.PromptResolver({
                prompts: this.#prompts,
                globalLiterals: this.#globalLiterals,
                reservedLiterals: this.#reservedLiterals,
                global: ['system', 'ipe', 'summary']
              });
              this.#prompts.map.get('ipe').set({
                promptSchema: _schema.SCHEMA
              });
            }
            handleChatPrompt(prompt) {
              this.#globalLiterals.setLiteral('PROMPT', prompt);
              this.trigger('new.prompt', prompt);
            }
            handleChatAnswer(answer) {
              this.#globalLiterals.setLiteral('ANSWER', answer);
              this.trigger('new.answer', answer);
            }
            getInteractions() {
              const totalMessages = this.chat.messages.items.length;
              const total = this.totalInteractions > totalMessages ? totalMessages : this.totalInteractions;
              const originalInteractions = this.chat.messages.items.map(({
                role,
                content,
                id
              }) => ({
                role,
                content,
                id
              }));
              return originalInteractions.length >= total ? originalInteractions.slice(-total) : [...Array(total - originalInteractions.length).fill({
                role: '',
                content: ''
              }), ...originalInteractions];
            }
            async execute(prompt) {
              this.fetching = true;
              const interactions = this.getInteractions();
              const data = this.resolver.parse(prompt);
              const specs = {
                prompt: data.parsed,
                model: this.model,
                format: prompt.format,
                schema: prompt.promptSchema,
                type: 'instruction',
                temperature: this.temperature
                // interactions: interactions.map(({ id, role, content }) => ({ role, content }))
              };
              const result = await this.#provider.execute(specs);
              prompt.recordExecution(result, interactions, specs);
              this.#reservedLiterals.process(prompt, result);
              // prompt.parsed = result.choices[0].message.content;
              this.fetching = false;
            }
            analyze(prompt) {
              const {
                literals
              } = this.resolver.analyze(prompt.value);
              prompt.registerLiterals(literals.filter(l => !this.globalLiterals.names.includes(l)));
            }
            parse = prompt => {
              const processed = this.resolver.parse(prompt);
              prompt.set(processed);
              return processed;
            };
            async import({
              language,
              activityId
            }) {
              const activity = this.activities.find(activity => activity.id === activityId);
              if (!activity) return false;
              const {
                prompts
              } = activity;
              const ids = `${prompts.SYSTEM}, ${prompts.IPE},${prompts.SUMMARY}`;
              this.#modelId = activityId;
              const map = {
                [prompts.IPE]: 'ipe',
                [prompts.SUMMARY]: 'summary',
                [prompts.SYSTEM]: 'system'
              };
              const data = await this.#provider.import({
                language,
                ids
              });
              let dependencies = [];
              data.items.forEach(({
                literals,
                ...item
              }) => {
                const data = {
                  ...item,
                  literals: {
                    keys: literals,
                    values: {}
                  }
                };
                if (!map[item.id]) {
                  dependencies.push(data);
                  return;
                }
                this.#prompts.map.get(map[item.id]).set(data);
                return data;
              });
              this.#prompts.addItems(dependencies);
              this.initialize();
              this.trigger('change');
              return true;
            }
          }
          exports.Playground = Playground;
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
        hash: 3181881853,
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
              return this.items.filter(item => item.is !== 'dependency');
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
            get customLiterals() {
              return this.#customLiterals;
            }
          }
          exports.PromptsCollection = PromptsCollection;
        }
      });

      /**************************************************
      INTERNAL MODULE: ./prompts/literals/global-literals
      **************************************************/

      ims.set('./prompts/literals/global-literals', {
        hash: 2735623842,
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
        hash: 1982665344,
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
              this.#chat.messages.items.reverse().find(message => message.role === 'user')?.content;
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
        hash: 2871939203,
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
                input: this.value,
                parsed: this.parsed,
                expanded: this.expanded,
                literals: this.#literals.values,
                output,
                interactions,
                timestamp: Date.now()
              };
              this.set(entry);
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

      /********************************
      INTERNAL MODULE: ./prompts/prompt
      ********************************/

      ims.set('./prompts/prompt', {
        hash: 2036329137,
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
        hash: 1611842358,
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
              const walk = (text, deph = 0) => text.replace(/\{([A-Z0-9\-]+)\}/gi, (_m, rawId) => {
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
        hash: 2224857803,
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
              console.log(0.2, specs.ids, specs);
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

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 1625784401,
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
        "im": "./index",
        "from": "Playground",
        "name": "Playground"
      }, {
        "im": "./prompts/index",
        "from": "PromptsCollection",
        "name": "PromptsCollection"
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
        (require || prop === 'Playground') && _export("Playground", Playground = require ? require('./index').Playground : value);
        (require || prop === 'PromptsCollection') && _export("PromptsCollection", PromptsCollection = require ? require('./prompts/index').PromptsCollection : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEQVRBIiwiZXhwb3J0cyIsImJveCIsIml0ZW1zIiwicHJvamVjdCIsImlkIiwibmFtZSIsImlkZW50aWZpZXIiLCJpcyIsImxpdGVyYWxzIiwicHVyZSIsImRlcGVuZGVuY2llcyIsImZvcm1hdCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsInVwZGF0ZWQiLCJ2YWx1ZSIsInVwZGF0ZSIsInByb21wdEFjdGl2aXRpZXMiLCJwcm9tcHRzIiwiU1lTVEVNIiwiSVBFIiwiU1VNTUFSWSIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiX2l0ZW0iLCJyZXF1aXJlIiwiX2NoYXQiLCJfbWVzc2FnZXMiLCJfbWVzc2FnZSIsIl91dWlkIiwiUGxheWdyb3VuZENoYXQiLCJJdGVtIiwicHJvbXB0Iiwic3lzdGVtIiwiYW5zd2VyIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJhcmdzIiwiZW50aXR5IiwicHJvcGVydGllcyIsIkNoYXRNZXNzYWdlcyIsInByb3ZpZGVyIiwiQ2hhdFByb3ZpZGVyIiwibWFwIiwiZ2V0Iiwib24iLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwiYmluZCIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInRyaWdnZXIiLCJmaWxlcyIsImludGVyYWN0aW9ucyIsImdldEludGVyYWN0aW9ucyIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInBhcnNlIiwicmVzcG9uc2UiLCJwYXJzZWQiLCJ0ZXh0IiwidHlwZSIsIm1vZGVsIiwicmVzcG9uc2VNZXNzYWdlIiwiZXhlY3V0ZSIsIl9jb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsIml0ZW0iLCJfbW9kZWwiLCJfcHJvbXB0cyIsIl9hY3Rpdml0aWVzIiwiX2dsb2JhbExpdGVyYWxzIiwiX3Jlc2VydmVkIiwiX3Jlc29sdmVyIiwiX3BsYXlncm91bmQiLCJfc2NoZW1hIiwiUGxheWdyb3VuZCIsIlJlYWN0aXZlTW9kZWwiLCJhY3Rpdml0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInJlc2VydmVkTGl0ZXJhbHMiLCJyZXNvbHZlciIsImdsb2JhbExpdGVyYWxzIiwiY2hhdCIsIm1vZGVsSWQiLCJtb2RlbHMiLCJlcnJvcnMiLCJ0b3RhbEludGVyYWN0aW9ucyIsIlBsYXlncm91bmRQcm92aWRlciIsIlByb21wdHNDb2xsZWN0aW9uIiwicHJvbXB0U2NoZW1hIiwiaW5pdGlhbGl6ZSIsImdldE1vZGVscyIsInRoZW4iLCJyZWFkeSIsImNhdGNoIiwiZSIsInB1c2giLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVDaGF0UHJvbXB0IiwiaGFuZGxlQ2hhdEFuc3dlciIsImdsb2JhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwiUmVzZXJ2ZWRMaXRlcmFscyIsIkdsb2JhbExpdGVyYWxzIiwicmVzZXJ2ZWQiLCJuYW1lcyIsInVuZGVmaW5lZCIsIlByb21wdFJlc29sdmVyIiwic2V0IiwiU0NIRU1BIiwic2V0TGl0ZXJhbCIsInRvdGFsTWVzc2FnZXMiLCJtZXNzYWdlcyIsImxlbmd0aCIsInRvdGFsIiwib3JpZ2luYWxJbnRlcmFjdGlvbnMiLCJzbGljZSIsIkFycmF5IiwiZmlsbCIsImZldGNoaW5nIiwiZGF0YSIsInNjaGVtYSIsInRlbXBlcmF0dXJlIiwicmVzdWx0IiwicmVjb3JkRXhlY3V0aW9uIiwicHJvY2VzcyIsImFuYWx5emUiLCJyZWdpc3RlckxpdGVyYWxzIiwiZmlsdGVyIiwibCIsImluY2x1ZGVzIiwicHJvY2Vzc2VkIiwiaW1wb3J0IiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiZmluZCIsImlkcyIsInZhbHVlcyIsImFkZEl0ZW1zIiwiUFJPTVBUX0RFUEVOREVOQ0lFUyIsIkhFQURFUl9KU09OIiwiQ09OVkVSU0FUSU9OX1NVTU1BUllfQkVHSU4iLCJFRFVDQVRJT05BTF9DT05URVhUIiwiQ09OVkVSU0FUSU9OX1NVTU1BUllfRU5ESU5HIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fQkVHSU5fVjIiLCJJVEVSQVRJVkVfUFJPR1JFU1NfRVZBTFVBVElPTl9FTkRJTkdfVjIiLCJfdGVtcGxhdGVzIiwiX2RlcGVuZGVuY2llcyIsIlBST01QVFNfREFUQSIsIlBST01QVF9URU1QTEFURVMiLCJzdW1tYXJ5IiwiaXBlIiwiX3Byb21wdCIsInRlbXBsYXRlcyIsInNvcnQiLCJjYWNoZSIsIk1hcCIsInN5c3RlbVByb21wdCIsImN1c3RvbUxpdGVyYWxzIiwiUHJvbXB0Iiwic2V0SXRlbXMiLCJsb2FkQ2FjaGUiLCJnbG9iYWxUaGlzIiwiY2FjaGVEYXRhIiwiaGFzIiwic2F2ZUNhY2hlIiwiZ2V0UHJvcGVydGllcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzYXZlIiwiX2xpdGVyYWwiLCJUWVBFUyIsIlNUT1JBR0VfS0VZIiwiZGVmYXVsdEl0ZW1zIiwiTGl0ZXJhbCIsImFkZCIsImxvZyIsImxpdGVyYWwiLCJhZGRNYW55IiwiU1RBVFVTX1JBTksiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJWQUxJRF9TVEFUVVNFUyIsIlNldCIsIlBST01QVCIsIlBSRVZJT1VTIiwiYXNzaXN0YW50cyIsIkFOU1dFUiIsIklOSVRJQUxfUFJPR1JFU1NfU1RBVEUiLCJzdGF0dXMiLCJwcm9ncmVzcyIsIlBST0dSRVNTIiwiZm9udWRlZCIsImkiLCJyZXZlcnNlIiwibGFzdE1lc3NhZ2UiLCJnZXREZWZhdWx0T2JqZWN0aXZlcyIsIm1lcmdlT2JqZWN0aXZlcyIsImN1cnJlbnQiLCJwcmV2aW91cyIsIm9sZE9iamVjdGl2ZXNNYXAiLCJyZWR1Y2UiLCJvYmoiLCJtZXJnZWRNYXAiLCJvbGRPYmoiLCJvbGRSYW5rIiwibmV3UmFuayIsImN1cnJlbnROYW1lcyIsIm8iLCJmcm9tIiwiZ2V0UmVhY2hlZE9iamVjdGl2ZU5hbWVzIiwib2JqZWN0aXZlcyIsImlwZVByb21wdCIsImhpc3RvcnkiLCJzaXplIiwiaXNWYWxpZFJlc3VsdCIsImxhc3QiLCJhdCIsIkVycm9yIiwib2xkUGFyc2VkIiwib3V0cHV0IiwibWVyZ2VkT2JqZWN0aXZlcyIsInJlYWNoZWQiLCJtZXJnZWQiLCJzdHJpY3QiLCJhbGVydCIsImhhbmRsZUVycm9yIiwid2luZG93IiwiTk9ERV9FTlYiLCJpc0FycmF5IiwiUHJvbXB0SGlzdG9yeSIsImV4ZWNTZXEiLCJkZXBzIiwibWF0Y2hBbGwiLCJtIiwicmVwbGFjZUFsbCIsImdldExpdGVyYWwiLCJub3RpZnkiLCJyZW1vdmVMaXRlcmFscyIsInNwbGljZSIsImluZGV4T2YiLCJlbnRyeSIsImlucHV0IiwiZXhwYW5kZWQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiX3Byb21wdEhpc3RvcnkiLCJkZXBlbmRlbmN5TmFtZXMiLCJwYXJzZWRQcm9tcHRzIiwicHJlZml4IiwicmVzb2x2ZSIsImlzRGVwZW5kZW5jeSIsIndhcm4iLCJ0b0FkZCIsInJlc29sdmVkIiwidmlzaXRlZCIsIndhbGsiLCJkZXBoIiwicmVwbGFjZSIsIl9tIiwicmF3SWQiLCJqb2luIiwiZGVwIiwicCIsInRvVXBwZXJDYXNlIiwidHJpbSIsImRlbGV0ZSIsImV4cGFuZGVkVmFsdWUiLCJmaW5hbFZhbHVlIiwicmVwbGFjZVN0cmluZyIsInN0ciIsIlJlZ0V4cCIsImlzR2xvYmFsIiwiaXNSZXNlcnZlZCIsImdsb2JhbExpdGVyYWwiLCJwYXJzZWRQcm9tcHQiLCJwbGFjZWhvbGRlcnMiLCJ1bmlxdWVQbGFjZWhvbGRlcnMiLCJfY29uZmlnIiwiX2FwaSIsIl9jb3JlIiwiYXBpIiwiQXBpIiwicGFyYW1zIiwiYXBpcyIsInBsYXlncm91bmQiLCJsb2FkIiwiYSIsInN0cmVhbU1lc3NhZ2UiLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJvbkZpbmlzaCIsIm9uRXJyb3IiLCJyZWplY3QiLCJzdHJlYW0iLCJtdWx0aXBhcnQiLCJwb3N0IiwiX3Nlc3Npb24iLCJzZXJ2ZXJBcGkiLCJsb2NhbEtleSIsImFnZW50cyIsInNwbGl0IiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImV4cGVjdGVkIiwiY29udHJhZGlzdGluY3Rpb24iLCJpbnRlZ3JhdGlvbiIsImVudW0iLCJyZXF1aXJlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYW55T2YiLCJJUEVTdGF0dXMiXSwic291cmNlcyI6WyIvSEFSRENPREVELnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvY2hhdC9pbmRleC50cyIsIi9jaGF0L21lc3NhZ2UudHMiLCIvY2hhdC9tZXNzYWdlcy50cyIsIi9pbmRleC50cyIsIi9wcm9tcHRzL2RhdGEvZGVwZW5kZW5jaWVzLnRzIiwiL3Byb21wdHMvZGF0YS9pbmRleC50cyIsIi9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiL3Byb21wdHMvaW5kZXgudHMiLCIvcHJvbXB0cy9saXRlcmFscy9nbG9iYWwtbGl0ZXJhbHMudHMiLCIvcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiL3Byb21wdHMvbGl0ZXJhbHMvcmVzZXJ2ZWQvaW5kZXgudHMiLCIvcHJvbXB0cy9wcm9tcHQtaGlzdG9yeS50cyIsIi9wcm9tcHRzL3Byb21wdC50cyIsIi9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiL3Byb3ZpZGVycy9jaGF0LnRzIiwiL3Byb3ZpZGVycy9wbGF5Z3JvdW5kLnRzIiwiL3NjaGVtYS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsSUFBSSxHQUFBQyxPQUFBLENB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QUFLLEVBQUU7d0JBQ05oUSxJQUFJLEVBQUUsUUFBUTt3QkFDZCtQLFdBQVcsRUFDVjt1QkFDRDtzQkFDRGhVLElBQUksRUFBRTt3QkFDTGlFLElBQUksRUFBRSxRQUFRO3dCQUNkK1AsV0FBVyxFQUFFO3VCQUNiO3NCQUNERSxRQUFRLEVBQUU7d0JBQ1RqUSxJQUFJLEVBQUUsUUFBUTt3QkFDZCtQLFdBQVcsRUFDVjt1QkFDRDtzQkFDREcsaUJBQWlCLEVBQUU7d0JBQ2xCbFEsSUFBSSxFQUFFLFFBQVE7d0JBQ2QrUCxXQUFXLEVBQUU7dUJBQ2I7c0JBQ0RJLFdBQVcsRUFBRTt3QkFDWm5RLElBQUksRUFBRSxRQUFRO3dCQUNkK1AsV0FBVyxFQUNWO3VCQUNEO3NCQUNEdkgsUUFBUSxFQUFFO3dCQUNUeEksSUFBSSxFQUFFLFFBQVE7d0JBQ2QrUCxXQUFXLEVBQ1Y7dUJBQ0Q7c0JBQ0R4SCxNQUFNLEVBQUU7d0JBQ1B2SSxJQUFJLEVBQUUsUUFBUTt3QkFDZCtQLFdBQVcsRUFDVixnY0FBZ2M7d0JBQ2pjSyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGFBQWE7O3FCQUVqRDtvQkFDREMsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztvQkFDeEZDLG9CQUFvQixFQUFFOztpQkFFdkI7Z0JBQ0R2SyxPQUFPLEVBQUU7a0JBQ1IvRixJQUFJLEVBQUUsUUFBUTtrQkFDZCtQLFdBQVcsRUFBRTtpQkFDYjtnQkFDRHBGLEtBQUssRUFBRTtrQkFDTjRGLEtBQUssRUFBRSxDQUNOO29CQUNDdlEsSUFBSSxFQUFFLFFBQVE7b0JBQ2QrUCxXQUFXLEVBQ1Y7bUJBQ0QsRUFDRDtvQkFDQy9QLElBQUksRUFBRSxTQUFTO29CQUNmb1EsSUFBSSxFQUFFLENBQUMsS0FBSzttQkFDWixDQUNEO2tCQUNETCxXQUFXLEVBQUU7O2VBRWQ7Y0FDRE0sUUFBUSxFQUFFLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDO2NBQ3ZEQyxvQkFBb0IsRUFBRTs7V0FFdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEZNO1VBQVAsSUFBdUJFLFNBS3RCO1VBTEQsV0FBdUJBLFNBQVM7WUFDL0JBLFNBQUEsdUJBQW1CO1lBQ25CQSxTQUFBLDhCQUEwQjtZQUMxQkEsU0FBQSwyQkFBdUI7WUFDdkJBLFNBQUEsK0JBQTJCO1VBQzVCLENBQUMsRUFMc0JBLFNBQVMsS0FBQTlVLE9BQUEsQ0FBQThVLFNBQUEsR0FBVEEsU0FBUyIsImlnbm9yZUxpc3QiOltdfQ==