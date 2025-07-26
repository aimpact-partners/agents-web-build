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
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
        hash: 2738383204,
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
        hash: 1836939768,
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
        hash: 1415932055,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEQVRBIiwiZXhwb3J0cyIsImJveCIsIml0ZW1zIiwicHJvamVjdCIsImlkIiwibmFtZSIsImlkZW50aWZpZXIiLCJpcyIsImxpdGVyYWxzIiwicHVyZSIsImRlcGVuZGVuY2llcyIsImZvcm1hdCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsInVwZGF0ZWQiLCJ2YWx1ZSIsInVwZGF0ZSIsInByb21wdEFjdGl2aXRpZXMiLCJwcm9tcHRzIiwiU1lTVEVNIiwiSVBFIiwiU1VNTUFSWSIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiX2l0ZW0iLCJyZXF1aXJlIiwiX2NoYXQiLCJfbWVzc2FnZXMiLCJfbWVzc2FnZSIsIl91dWlkIiwiUGxheWdyb3VuZENoYXQiLCJJdGVtIiwicHJvbXB0Iiwic3lzdGVtIiwiYW5zd2VyIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJhcmdzIiwiZW50aXR5IiwicHJvcGVydGllcyIsIkNoYXRNZXNzYWdlcyIsInByb3ZpZGVyIiwiQ2hhdFByb3ZpZGVyIiwibWFwIiwiZ2V0Iiwib24iLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwiYmluZCIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInRyaWdnZXIiLCJmaWxlcyIsImludGVyYWN0aW9ucyIsImdldEludGVyYWN0aW9ucyIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VzIiwiaXRlbSIsInJlc3BvbnNlIiwicGFyc2VkIiwidGV4dCIsInR5cGUiLCJtb2RlbCIsImhpc3RvcnkiLCJyZXNwb25zZU1lc3NhZ2UiLCJleGVjdXRlIiwiX2NvbGxlY3Rpb24iLCJDb2xsZWN0aW9uIiwiX21vZGVsIiwiX3Byb21wdHMiLCJfYWN0aXZpdGllcyIsIl9nbG9iYWxMaXRlcmFscyIsIl9yZXNlcnZlZCIsIl9yZXNvbHZlciIsIl9wbGF5Z3JvdW5kIiwiX3NjaGVtYSIsIlBsYXlncm91bmQiLCJSZWFjdGl2ZU1vZGVsIiwiYWN0aXZpdGllcyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJyZXNlcnZlZExpdGVyYWxzIiwicmVzb2x2ZXIiLCJnbG9iYWxMaXRlcmFscyIsImNoYXQiLCJtb2RlbElkIiwibW9kZWxzIiwiZXJyb3JzIiwidG90YWxJbnRlcmFjdGlvbnMiLCJQbGF5Z3JvdW5kUHJvdmlkZXIiLCJQcm9tcHRzQ29sbGVjdGlvbiIsInByb21wdFNjaGVtYSIsImluaXRpYWxpemUiLCJnZXRNb2RlbHMiLCJ0aGVuIiwicmVhZHkiLCJjYXRjaCIsImUiLCJwdXNoIiwiZXJyb3IiLCJoYW5kbGVDaGF0UHJvbXB0IiwiaGFuZGxlQ2hhdEFuc3dlciIsImdsb2JhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwiUmVzZXJ2ZWRMaXRlcmFscyIsIkdsb2JhbExpdGVyYWxzIiwicmVzZXJ2ZWQiLCJuYW1lcyIsInVuZGVmaW5lZCIsIlByb21wdFJlc29sdmVyIiwic2V0IiwiU0NIRU1BIiwic2V0TGl0ZXJhbCIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJ0b3RhbCIsIm9yaWdpbmFsSW50ZXJhY3Rpb25zIiwic2xpY2UiLCJBcnJheSIsImZpbGwiLCJmZXRjaGluZyIsImRhdGEiLCJzY2hlbWEiLCJ0ZW1wZXJhdHVyZSIsInJlc3VsdCIsInJlY29yZEV4ZWN1dGlvbiIsInByb2Nlc3MiLCJhbmFseXplIiwicmVnaXN0ZXJMaXRlcmFscyIsImZpbHRlciIsImwiLCJpbmNsdWRlcyIsInByb2Nlc3NlZCIsImltcG9ydCIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImZpbmQiLCJpZHMiLCJ2YWx1ZXMiLCJhZGRJdGVtcyIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiX3RlbXBsYXRlcyIsIl9kZXBlbmRlbmNpZXMiLCJQUk9NUFRTX0RBVEEiLCJQUk9NUFRfVEVNUExBVEVTIiwic3VtbWFyeSIsImlwZSIsIl9wcm9tcHQiLCJ0ZW1wbGF0ZXMiLCJzb3J0IiwiY2FjaGUiLCJNYXAiLCJzeXN0ZW1Qcm9tcHQiLCJjdXN0b21MaXRlcmFscyIsIlByb21wdCIsInNldEl0ZW1zIiwibG9hZENhY2hlIiwiZ2xvYmFsVGhpcyIsImNhY2hlRGF0YSIsImhhcyIsInNhdmVDYWNoZSIsImdldFByb3BlcnRpZXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZSIsIl9saXRlcmFsIiwiVFlQRVMiLCJTVE9SQUdFX0tFWSIsImRlZmF1bHRJdGVtcyIsIkxpdGVyYWwiLCJhZGQiLCJsaXRlcmFsIiwiYWRkTWFueSIsIlNUQVRVU19SQU5LIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwiVkFMSURfU1RBVFVTRVMiLCJTZXQiLCJQUk9NUFQiLCJQUkVWSU9VUyIsImFzc2lzdGFudHMiLCJBTlNXRVIiLCJJTklUSUFMX1BST0dSRVNTX1NUQVRFIiwic3RhdHVzIiwicHJvZ3Jlc3MiLCJQUk9HUkVTUyIsImZvbnVkZWQiLCJpIiwicmV2ZXJzZSIsImxhc3RNZXNzYWdlIiwiZ2V0RGVmYXVsdE9iamVjdGl2ZXMiLCJtZXJnZU9iamVjdGl2ZXMiLCJjdXJyZW50IiwicHJldmlvdXMiLCJvbGRPYmplY3RpdmVzTWFwIiwicmVkdWNlIiwib2JqIiwibWVyZ2VkTWFwIiwib2xkT2JqIiwib2xkUmFuayIsIm5ld1JhbmsiLCJjdXJyZW50TmFtZXMiLCJvIiwiZnJvbSIsImdldFJlYWNoZWRPYmplY3RpdmVOYW1lcyIsIm9iamVjdGl2ZXMiLCJpcGVQcm9tcHQiLCJzaXplIiwiaXNWYWxpZFJlc3VsdCIsImxhc3QiLCJhdCIsIkVycm9yIiwib2xkUGFyc2VkIiwib3V0cHV0IiwibWVyZ2VkT2JqZWN0aXZlcyIsInJlYWNoZWQiLCJtZXJnZWQiLCJzdHJpY3QiLCJhbGVydCIsImhhbmRsZUVycm9yIiwid2luZG93IiwiTk9ERV9FTlYiLCJpc0FycmF5IiwiUHJvbXB0SGlzdG9yeSIsImV4ZWNTZXEiLCJkZXBzIiwibWF0Y2hBbGwiLCJtIiwicmVwbGFjZUFsbCIsImdldExpdGVyYWwiLCJub3RpZnkiLCJyZW1vdmVMaXRlcmFscyIsInNwbGljZSIsImluZGV4T2YiLCJlbnRyeSIsImlucHV0IiwiZXhwYW5kZWQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiX3Byb21wdEhpc3RvcnkiLCJkZXBlbmRlbmN5TmFtZXMiLCJwYXJzZWRQcm9tcHRzIiwicHJlZml4IiwicmVzb2x2ZSIsImlzRGVwZW5kZW5jeSIsIndhcm4iLCJ0b0FkZCIsInJlc29sdmVkIiwidmlzaXRlZCIsIndhbGsiLCJkZXBoIiwicmVwbGFjZSIsIl9tIiwicmF3SWQiLCJqb2luIiwiZGVwIiwicCIsInRvVXBwZXJDYXNlIiwidHJpbSIsImRlbGV0ZSIsImV4cGFuZGVkVmFsdWUiLCJmaW5hbFZhbHVlIiwicmVwbGFjZVN0cmluZyIsInN0ciIsIlJlZ0V4cCIsImlzR2xvYmFsIiwiaXNSZXNlcnZlZCIsImdsb2JhbExpdGVyYWwiLCJwYXJzZWRQcm9tcHQiLCJwbGFjZWhvbGRlcnMiLCJ1bmlxdWVQbGFjZWhvbGRlcnMiLCJfY29uZmlnIiwiX2FwaSIsIl9jb3JlIiwiYXBpIiwiQXBpIiwicGFyYW1zIiwiYXBpcyIsInBsYXlncm91bmQiLCJsb2FkIiwiYSIsInN0cmVhbU1lc3NhZ2UiLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJvbkZpbmlzaCIsIm9uRXJyb3IiLCJyZWplY3QiLCJzdHJlYW0iLCJtdWx0aXBhcnQiLCJwb3N0IiwiX3Nlc3Npb24iLCJzZXJ2ZXJBcGkiLCJsb2NhbEtleSIsImFnZW50cyIsInNwbGl0IiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImV4cGVjdGVkIiwiY29udHJhZGlzdGluY3Rpb24iLCJpbnRlZ3JhdGlvbiIsImVudW0iLCJyZXF1aXJlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYW55T2YiLCJJUEVTdGF0dXMiXSwic291cmNlcyI6WyIvL0hBUkRDT0RFRC50cy8iLCIvL2FjdGl2aXRpZXMudHMvIiwiLy9jaGF0L2luZGV4LnRzIiwiLy9jaGF0L21lc3NhZ2UudHMiLCIvL2NoYXQvbWVzc2FnZXMudHMiLCIvL2luZGV4LnRzLyIsIi8vcHJvbXB0cy9kYXRhL2RlcGVuZGVuY2llcy50cyIsIi8vcHJvbXB0cy9kYXRhL2luZGV4LnRzIiwiLy9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiLy9wcm9tcHRzL2luZGV4LnRzIiwiLy9wcm9tcHRzL2xpdGVyYWxzL2dsb2JhbC1saXRlcmFscy50cyIsIi8vcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiLy9wcm9tcHRzL2xpdGVyYWxzL3Jlc2VydmVkL2luZGV4LnRzIiwiLy9wcm9tcHRzL3Byb21wdC1oaXN0b3J5LnRzIiwiLy9wcm9tcHRzL3Byb21wdC50cyIsIi8vcHJvbXB0cy9yZXNvbHZlci50cyIsIi8vcHJvdmlkZXJzL2NoYXQudHMiLCIvL3Byb3ZpZGVycy9wbGF5Z3JvdW5kLnRzIiwiLy9zY2hlbWEudHMvIiwiLy90eXBlcy50cy8iXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFP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