System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.0/entities/collection", "@beyond-js/http-suite@0.1.1/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.1.0/model", "@beyond-js/reactive@2.1.0/entities/item", "@aimpact/agents-client@0.0.29/prompts", "@aimpact/chat-sdk@1.5.5/users", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Categories, Category, Projects, Project, Prompts, IPromptSpecs, IPromptGenerationSpecs, ITool, IProject, ILiterals, IPromptParams, IUpdatePromptParams, Prompt, PromptTemplate, PromptTemplateLanguages, Schema, GTranslate, AppGTranslate, IChatUser, User, Wrapper, AppWrapper, __beyond_pkg, hmr;
  _export({
    Categories: void 0,
    Category: void 0,
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
    }, function (_beyondJsReactive210EntitiesCollection) {
      dependency_1 = _beyondJsReactive210EntitiesCollection;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_2 = _beyondJsHttpSuite011Api;
    }, function (_aimpactPlatform016Config) {
      dependency_3 = _aimpactPlatform016Config;
    }, function (_beyondJsReactive210Model) {
      dependency_4 = _beyondJsReactive210Model;
    }, function (_beyondJsReactive210EntitiesItem) {
      dependency_5 = _beyondJsReactive210EntitiesItem;
    }, function (_aimpactAgentsClient0029Prompts) {
      dependency_6 = _aimpactAgentsClient0029Prompts;
    }, function (_aimpactChatSdk155Users) {
      dependency_7 = _aimpactChatSdk155Users;
    }, function (_aimpactChatSdk155Startup) {
      dependency_8 = _aimpactChatSdk155Startup;
    }, function (_beyondJsKernel0112Core) {
      dependency_9 = _beyondJsKernel0112Core;
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
          "vspecifier": "@aimpact/platform@0.1.6/models"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/platform/config', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5], ['@aimpact/agents-client/prompts', dependency_6], ['@aimpact/chat-sdk/users', dependency_7], ['@aimpact/chat-sdk/startup', dependency_8], ['@beyond-js/kernel/core', dependency_9]]);
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
        hash: 3819945267,
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
            get isAdmin() {
              return ['julio@beyondjs.com', 'felix@beyondjs.com', 'ebox@beyondjs.com'].includes(this.email);
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
        hash: 4034436539,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfcHJvdmlkZXIiLCJQcm9qZWN0cyIsIlByb2plY3QiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJkYXRhIiwiaXRlbXMiLCJJdGVtIiwiYXJncyIsInByb3BlcnRpZXMiLCJzZXQiLCJQcm9tcHRzIiwicHJvbXB0cyIsImRlcGVuZGVuY2llcyIsImZ1bmN0aW9ucyIsIlByb21wdCIsInNwZWNzIiwiZmlsdGVyIiwib3V0cHV0IiwiaXMiLCJwdXNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImRlZmF1bHRMYW5ndWFnZSIsImxhbmd1YWdlIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJQcm9tcHRUZW1wbGF0ZSIsInZhbGlkIiwiaWRlbnRpZmllciIsIm5hbWUiLCJsaXRlcmFscyIsImRlc2NyaXB0aW9uIiwiZm9ybWF0IiwicmVhZHkiLCJzYXZlIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJ1cGRhdGUiLCJ1cGRhdGVMYW5ndWFnZXMiLCJBUEkiLCJwcm9qZWN0IiwidG9vbHMiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJmZXRjaCIsImpzb24iLCJFcnJvciIsImV4YyIsImxhbmd1YWdlcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYXNzaWduIiwiaGVhZGVycyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwidGV4dCIsImxvYWRUcmFuc2xhdGUiLCJzYXZlVHJhbnNsYXRlIiwic3RhdHVzIiwicHJvY2VzcyIsIl9wcm9tcHRzIiwiU2NoZW1hIiwibGFuZyIsImxvZyIsImNvZGUiLCJzY2hlbWEiLCJHVHJhbnNsYXRlIiwiaXNSZWFkeSIsInRyYW5zbGF0ZVRleHQiLCJHVFJBTlNMQVRFX0FQSV9LRVkiLCJ1cmwiLCJxIiwidGFyZ2V0Iiwib2siLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGVkVGV4dCIsIl9nVHJhbnNsYXRlIiwiQXBwR1RyYW5zbGF0ZSIsImdsb2JhbFRoaXMiLCJhcHAiLCJfdXNlcnMiLCJVc2VyIiwibG9nZ2VkIiwic2Nob29scyIsInVuZGVyYWdlIiwiYWdlIiwidGVybXNBY2NlcHRlZCIsInRlcm1zIiwiYWNjZXB0ZWQiLCJoYXNBY2Nlc3MiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvdXRkYXRlZCIsImlzQWRtaW4iLCJlbWFpbCIsImRlYnVnIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInRyaWdnZXIiLCJsb2dpbiIsInRva2VuIiwiZ2V0UHJvcGVydGllcyIsImFuc3dlciIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwiX3N0YXJ0dXAiLCJVc2VyUHJvdmlkZXIiLCJzZGtDb25maWciLCJXcmFwcGVyIiwiTWFwIiwiZ2V0UHJvbXB0cyIsImhhcyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciJdLCJzb3VyY2VzIjpbIi9jYXRlZ29yaWVzL2NvbGxlY3Rpb24udHMiLCIvY2F0ZWdvcmllcy9pdGVtLXByb3ZpZGVyLnRzIiwiL2NhdGVnb3JpZXMvaXRlbS50cyIsIi9wcm9qZWN0cy9jb2xsZWN0aW9uL2luZGV4LnRzIiwiL3Byb2plY3RzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvcHJvamVjdHMvaXRlbS1wcm92aWRlci50cyIsIi9wcm9qZWN0cy9pdGVtLnRzIiwiL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3Byb21wdHMvaXRlbS9pbmRleC50cyIsIi9wcm9tcHRzL2l0ZW0vbW9kZWwudHMiLCIvcHJvbXB0cy9sYW5ndWFnZS50cyIsIi9wcm9tcHRzL3Byb3ZpZGVyLnRzIiwiL3NjaGVtYXMvaXRlbS50cyIsIi9zY2hlbWFzL3Byb3ZpZGVyLnRzIiwiL3RyYW5zbGF0ZS9pbmRleC50cyIsIi9pbnRlcmZhY2UudHMiLCIvdXNlcnMvaXRlbS50cyIsIi91c2Vycy9wcm92aWRlci50cyIsIi93cmFwcGVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxJQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxPQUFBLEdBQUFILE9BQUE7VUFFTztVQUFXLE1BQU9JLFVBQVcsU0FBUUwsV0FBQSxDQUFBTSxVQUFzQjtZQUNqRSxDQUFBQyxHQUFJO1lBRUpDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLE1BQU0sRUFBRSxrQkFBa0I7Z0JBQUVDLElBQUksRUFBRVIsS0FBQSxDQUFBUztjQUFRLENBQUUsQ0FBQztjQUNyRCxJQUFJLENBQUMsQ0FBQUosR0FBSSxHQUFHLElBQUlKLElBQUEsQ0FBQVMsR0FBRyxDQUFDUixPQUFBLENBQUFTLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQztZQUM3QztZ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