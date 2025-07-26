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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfcHJvdmlkZXIiLCJQcm9qZWN0cyIsIlByb2plY3QiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJkYXRhIiwiaXRlbXMiLCJJdGVtIiwiYXJncyIsInByb3BlcnRpZXMiLCJzZXQiLCJQcm9tcHRzIiwicHJvbXB0cyIsImRlcGVuZGVuY2llcyIsImZ1bmN0aW9ucyIsIlByb21wdCIsInNwZWNzIiwiZmlsdGVyIiwib3V0cHV0IiwiaXMiLCJwdXNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImRlZmF1bHRMYW5ndWFnZSIsImxhbmd1YWdlIiwibW9kZWwiLCJ1bmRlZmluZWQiLCJQcm9tcHRUZW1wbGF0ZSIsInZhbGlkIiwiaWRlbnRpZmllciIsIm5hbWUiLCJsaXRlcmFscyIsImRlc2NyaXB0aW9uIiwiZm9ybWF0IiwicmVhZHkiLCJzYXZlIiwibWV0aG9kIiwiaW5jbHVkZXMiLCJ1cGRhdGUiLCJ1cGRhdGVMYW5ndWFnZXMiLCJBUEkiLCJwcm9qZWN0IiwidG9vbHMiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJmZXRjaCIsImpzb24iLCJFcnJvciIsImV4YyIsImxhbmd1YWdlcyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYXNzaWduIiwiaGVhZGVycyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwidGV4dCIsImxvYWRUcmFuc2xhdGUiLCJzYXZlVHJhbnNsYXRlIiwic3RhdHVzIiwicHJvY2VzcyIsIl9wcm9tcHRzIiwiU2NoZW1hIiwibGFuZyIsImxvZyIsImNvZGUiLCJzY2hlbWEiLCJHVHJhbnNsYXRlIiwiaXNSZWFkeSIsInRyYW5zbGF0ZVRleHQiLCJHVFJBTlNMQVRFX0FQSV9LRVkiLCJ1cmwiLCJxIiwidGFyZ2V0Iiwib2siLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGVkVGV4dCIsIl9nVHJhbnNsYXRlIiwiQXBwR1RyYW5zbGF0ZSIsImdsb2JhbFRoaXMiLCJhcHAiLCJfdXNlcnMiLCJVc2VyIiwibG9nZ2VkIiwic2Nob29scyIsInVuZGVyYWdlIiwiYWdlIiwidGVybXNBY2NlcHRlZCIsInRlcm1zIiwiYWNjZXB0ZWQiLCJoYXNBY2Nlc3MiLCJhY2Nlc3NpYmlsaXR5TW9kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJvdXRkYXRlZCIsImlzQWRtaW4iLCJlbWFpbCIsImRlYnVnIiwiZmlyZWJhc2VUb2tlbiIsImJlYXJlciIsInRyaWdnZXIiLCJsb2dpbiIsInRva2VuIiwiZ2V0UHJvcGVydGllcyIsImFuc3dlciIsImFjY2VwdFRlcm1zIiwiYmlydGhkYXRlIiwiX3N0YXJ0dXAiLCJVc2VyUHJvdmlkZXIiLCJzZGtDb25maWciLCJXcmFwcGVyIiwiTWFwIiwiZ2V0UHJvbXB0cyIsImhhcyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciJdLCJzb3VyY2VzIjpbIi8vY2F0ZWdvcmllcy9jb2xsZWN0aW9uLnRzIiwiLy9jYXRlZ29yaWVzL2l0ZW0tcHJvdmlkZXIudHMiLCIvL2NhdGVnb3JpZXMvaXRlbS50cyIsIi8vcHJvamVjdHMvY29sbGVjdGlvbi9pbmRleC50cyIsIi8vcHJvamVjdHMvY29sbGVjdGlvbi9wcm92aWRlci50cyIsIi8vcHJvamVjdHMvaXRlbS1wcm92aWRlci50cyIsIi8vcHJvamVjdHMvaXRlbS50cyIsIi8vcHJvbXB0cy9jb2xsZWN0aW9uLnRzIiwiLy9pbnRlcmZhY2VzLnRzLyIsIi8vcHJvbXB0cy9pdGVtL2luZGV4LnRzIiwiLy9wcm9tcHRzL2l0ZW0vbW9kZWwudHMiLCIvL3Byb21wdHMvbGFuZ3VhZ2UudHMiLCIvL3Byb21wdHMvcHJvdmlkZXIudHMiLCIvL3NjaGVtYXMvaXRlbS50cyIsIi8vc2NoZW1hcy9wcm92aWRlci50cyIsIi8vdHJhbnNsYXRlL2luZGV4LnRzIiwiLy9pbnRlcmZhY2UudHMvIiwiLy91c2Vycy9pdGVtLnRzIiwiLy91c2Vycy9wcm92aWRlci50cyIsIi8vd3JhcHBlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsV0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsS0FBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsSUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsT0FBQSxHQUFBSCxPQUFBO1VBRU87VUFBVyxNQUFPSSxVQUFXLFNBQVFMLFdBQUEsQ0FBQU0sVUFBc0I7WUFDakUsQ0FBQUMsR0FBSTtZQUVKQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxNQUFNLEVBQUUsa0JBQWtCO2dCQUFFQyxJQUFJLEVBQUVSLEtBQUEsQ0FBQVM7Y0FBUSxDQUFFLENBQUM7Y0FDckQsSUFBSSxDQUFDLENBQUFKLEdBQUksR0FBRyxJQUFJSixJQUFBLENBQUFTLEdBQUcsQ0FBQ1IsT0FBQSxDQUFBUyxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxD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