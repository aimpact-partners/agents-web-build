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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEQVRBIiwiZXhwb3J0cyIsImJveCIsIml0ZW1zIiwicHJvamVjdCIsImlkIiwibmFtZSIsImlkZW50aWZpZXIiLCJpcyIsImxpdGVyYWxzIiwicHVyZSIsImRlcGVuZGVuY2llcyIsImZvcm1hdCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwic3VwcG9ydGVkIiwiZGVmYXVsdCIsInVwZGF0ZWQiLCJ2YWx1ZSIsInVwZGF0ZSIsInByb21wdEFjdGl2aXRpZXMiLCJwcm9tcHRzIiwiU1lTVEVNIiwiSVBFIiwiU1VNTUFSWSIsImRlYmF0ZSIsImV4ZXJjaXNlIiwiX2l0ZW0iLCJyZXF1aXJlIiwiX2NoYXQiLCJfbWVzc2FnZXMiLCJfbWVzc2FnZSIsIl91dWlkIiwiUGxheWdyb3VuZENoYXQiLCJJdGVtIiwicHJvbXB0Iiwic3lzdGVtIiwiYW5zd2VyIiwicGFyZW50IiwiY29uc3RydWN0b3IiLCJhcmdzIiwiZW50aXR5IiwicHJvcGVydGllcyIsIkNoYXRNZXNzYWdlcyIsInByb3ZpZGVyIiwiQ2hhdFByb3ZpZGVyIiwibWFwIiwiZ2V0Iiwib24iLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwiYmluZCIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInRyaWdnZXIiLCJmaWxlcyIsImludGVyYWN0aW9ucyIsImdldEludGVyYWN0aW9ucyIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50Iiwicm9sZSIsInJlZ2lzdGVyIiwicGFyYW1ldGVycyIsInNwZWNzIiwiZm9yRWFjaCIsInBhcmFtZXRlciIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2VzIiwiaXRlbSIsInJlc3BvbnNlIiwicGFyc2VkIiwidGV4dCIsInR5cGUiLCJtb2RlbCIsImhpc3RvcnkiLCJyZXNwb25zZU1lc3NhZ2UiLCJleGVjdXRlIiwiX2NvbGxlY3Rpb24iLCJDb2xsZWN0aW9uIiwiX21vZGVsIiwiX3Byb21wdHMiLCJfYWN0aXZpdGllcyIsIl9nbG9iYWxMaXRlcmFscyIsIl9yZXNlcnZlZCIsIl9yZXNvbHZlciIsIl9wbGF5Z3JvdW5kIiwiX3NjaGVtYSIsIlBsYXlncm91bmQiLCJSZWFjdGl2ZU1vZGVsIiwiYWN0aXZpdGllcyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJyZXNlcnZlZExpdGVyYWxzIiwicmVzb2x2ZXIiLCJnbG9iYWxMaXRlcmFscyIsImNoYXQiLCJtb2RlbElkIiwibW9kZWxzIiwiZXJyb3JzIiwidG90YWxJbnRlcmFjdGlvbnMiLCJQbGF5Z3JvdW5kUHJvdmlkZXIiLCJQcm9tcHRzQ29sbGVjdGlvbiIsInByb21wdFNjaGVtYSIsImluaXRpYWxpemUiLCJnZXRNb2RlbHMiLCJ0aGVuIiwicmVhZHkiLCJjYXRjaCIsImUiLCJwdXNoIiwiZXJyb3IiLCJoYW5kbGVDaGF0UHJvbXB0IiwiaGFuZGxlQ2hhdEFuc3dlciIsImdsb2JhbCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwiUmVzZXJ2ZWRMaXRlcmFscyIsIkdsb2JhbExpdGVyYWxzIiwicmVzZXJ2ZWQiLCJuYW1lcyIsInVuZGVmaW5lZCIsIlByb21wdFJlc29sdmVyIiwic2V0IiwiU0NIRU1BIiwic2V0TGl0ZXJhbCIsInRvdGFsTWVzc2FnZXMiLCJsZW5ndGgiLCJ0b3RhbCIsIm9yaWdpbmFsSW50ZXJhY3Rpb25zIiwic2xpY2UiLCJBcnJheSIsImZpbGwiLCJmZXRjaGluZyIsImRhdGEiLCJzY2hlbWEiLCJ0ZW1wZXJhdHVyZSIsInJlc3VsdCIsInJlY29yZEV4ZWN1dGlvbiIsInByb2Nlc3MiLCJhbmFseXplIiwicmVnaXN0ZXJMaXRlcmFscyIsImZpbHRlciIsImwiLCJpbmNsdWRlcyIsInByb2Nlc3NlZCIsImltcG9ydCIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImZpbmQiLCJpZHMiLCJ2YWx1ZXMiLCJhZGRJdGVtcyIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiX3RlbXBsYXRlcyIsIl9kZXBlbmRlbmNpZXMiLCJQUk9NUFRTX0RBVEEiLCJQUk9NUFRfVEVNUExBVEVTIiwic3VtbWFyeSIsImlwZSIsIl9wcm9tcHQiLCJ0ZW1wbGF0ZXMiLCJzb3J0IiwiY2FjaGUiLCJNYXAiLCJzeXN0ZW1Qcm9tcHQiLCJjdXN0b21MaXRlcmFscyIsIlByb21wdCIsInNldEl0ZW1zIiwibG9hZENhY2hlIiwiZ2xvYmFsVGhpcyIsImNhY2hlRGF0YSIsImhhcyIsInNhdmVDYWNoZSIsImdldFByb3BlcnRpZXMiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZSIsIl9saXRlcmFsIiwiVFlQRVMiLCJTVE9SQUdFX0tFWSIsImRlZmF1bHRJdGVtcyIsIkxpdGVyYWwiLCJhZGQiLCJsaXRlcmFsIiwiYWRkTWFueSIsIlNUQVRVU19SQU5LIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwiVkFMSURfU1RBVFVTRVMiLCJTZXQiLCJQUk9NUFQiLCJQUkVWSU9VUyIsImFzc2lzdGFudHMiLCJBTlNXRVIiLCJJTklUSUFMX1BST0dSRVNTX1NUQVRFIiwic3RhdHVzIiwicHJvZ3Jlc3MiLCJQUk9HUkVTUyIsImZvbnVkZWQiLCJpIiwicmV2ZXJzZSIsImxhc3RNZXNzYWdlIiwiZ2V0RGVmYXVsdE9iamVjdGl2ZXMiLCJtZXJnZU9iamVjdGl2ZXMiLCJjdXJyZW50IiwicHJldmlvdXMiLCJvbGRPYmplY3RpdmVzTWFwIiwicmVkdWNlIiwib2JqIiwibWVyZ2VkTWFwIiwib2xkT2JqIiwib2xkUmFuayIsIm5ld1JhbmsiLCJjdXJyZW50TmFtZXMiLCJvIiwiZnJvbSIsImdldFJlYWNoZWRPYmplY3RpdmVOYW1lcyIsIm9iamVjdGl2ZXMiLCJpcGVQcm9tcHQiLCJzaXplIiwiaXNWYWxpZFJlc3VsdCIsImxhc3QiLCJhdCIsIkVycm9yIiwib2xkUGFyc2VkIiwib3V0cHV0IiwibWVyZ2VkT2JqZWN0aXZlcyIsInJlYWNoZWQiLCJtZXJnZWQiLCJzdHJpY3QiLCJhbGVydCIsImhhbmRsZUVycm9yIiwid2luZG93IiwiTk9ERV9FTlYiLCJpc0FycmF5IiwiUHJvbXB0SGlzdG9yeSIsImV4ZWNTZXEiLCJkZXBzIiwibWF0Y2hBbGwiLCJtIiwicmVwbGFjZUFsbCIsImdldExpdGVyYWwiLCJub3RpZnkiLCJyZW1vdmVMaXRlcmFscyIsInNwbGljZSIsImluZGV4T2YiLCJlbnRyeSIsImlucHV0IiwiZXhwYW5kZWQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwibm93IiwiX3Byb21wdEhpc3RvcnkiLCJkZXBlbmRlbmN5TmFtZXMiLCJwYXJzZWRQcm9tcHRzIiwicHJlZml4IiwicmVzb2x2ZSIsImlzRGVwZW5kZW5jeSIsIndhcm4iLCJ0b0FkZCIsInJlc29sdmVkIiwidmlzaXRlZCIsIndhbGsiLCJkZXBoIiwicmVwbGFjZSIsIl9tIiwicmF3SWQiLCJqb2luIiwiZGVwIiwicCIsInRvVXBwZXJDYXNlIiwidHJpbSIsImRlbGV0ZSIsImV4cGFuZGVkVmFsdWUiLCJmaW5hbFZhbHVlIiwicmVwbGFjZVN0cmluZyIsInN0ciIsIlJlZ0V4cCIsImlzR2xvYmFsIiwiaXNSZXNlcnZlZCIsImdsb2JhbExpdGVyYWwiLCJwYXJzZWRQcm9tcHQiLCJwbGFjZWhvbGRlcnMiLCJ1bmlxdWVQbGFjZWhvbGRlcnMiLCJfY29uZmlnIiwiX2FwaSIsIl9jb3JlIiwiYXBpIiwiQXBpIiwicGFyYW1zIiwiYXBpcyIsInBsYXlncm91bmQiLCJsb2FkIiwiYSIsInN0cmVhbU1lc3NhZ2UiLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJvbkZpbmlzaCIsIm9uRXJyb3IiLCJyZWplY3QiLCJzdHJlYW0iLCJtdWx0aXBhcnQiLCJwb3N0IiwiX3Nlc3Npb24iLCJzZXJ2ZXJBcGkiLCJsb2NhbEtleSIsImFnZW50cyIsInNwbGl0IiwidG9rZW4iLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJmaXJlYmFzZVRva2VuIiwiYmVhcmVyIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImV4cGVjdGVkIiwiY29udHJhZGlzdGluY3Rpb24iLCJpbnRlZ3JhdGlvbiIsImVudW0iLCJyZXF1aXJlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYW55T2YiLCJJUEVTdGF0dXMiXSwic291cmNlcyI6WyIvSEFSRENPREVELnRzIiwiL2FjdGl2aXRpZXMudHMiLCIvY2hhdC9pbmRleC50cyIsIi9jaGF0L21lc3NhZ2UudHMiLCIvY2hhdC9tZXNzYWdlcy50cyIsIi9pbmRleC50cyIsIi9wcm9tcHRzL2RhdGEvZGVwZW5kZW5jaWVzLnRzIiwiL3Byb21wdHMvZGF0YS9pbmRleC50cyIsIi9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiL3Byb21wdHMvaW5kZXgudHMiLCIvcHJvbXB0cy9saXRlcmFscy9nbG9iYWwtbGl0ZXJhbHMudHMiLCIvcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiL3Byb21wdHMvbGl0ZXJhbHMvcmVzZXJ2ZWQvaW5kZXgudHMiLCIvcHJvbXB0cy9wcm9tcHQtaGlzdG9yeS50cyIsIi9wcm9tcHRzL3Byb21wdC50cyIsIi9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiL3Byb3ZpZGVycy9jaGF0LnRzIiwiL3Byb3ZpZGVycy9wbGF5Z3JvdW5kLnRzIiwiL3NjaGVtYS50cyIsIi90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQU8sTUFBTUEsSUFBSSxHQUFBQyxPQUFBLENB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