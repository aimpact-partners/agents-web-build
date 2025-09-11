System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/http-suite@0.1.1/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/reactive@2.1.1/entities/item", "@aimpact/chat-sdk@1.5.5/startup", "@aimpact/agents-client@0.0.29/prompts", "zod@3.25.76", "@beyond-js/kernel@0.1.14/core", "uuid@11.1.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Categories, Category, Groups, DataProvider, GroupItem, LLMs, LLM, Projects, Project, Prompts, Executor, IPromptSpecs, IPromptGenerationSpecs, ITool, IProject, ILiterals, IPromptTemplateLanguages, IPromptParams, IUpdatePromptParams, PromptTemplate, Prompt, PromptLanguageTemplate, PromptResolver, Schema, GTranslate, AppGTranslate, IChatUser, Wrapper, AppWrapper, ActivityManager, InteractionManager, Playground, PromptExecutor, PromptsCollection, PromptManager, IPEStatus, ICategory, Wikis, IWiki, Wiki, __beyond_pkg, hmr;
  _export({
    Categories: void 0,
    Category: void 0,
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0,
    LLMs: void 0,
    LLM: void 0,
    Projects: void 0,
    Project: void 0,
    Prompts: void 0,
    Executor: void 0,
    IPromptSpecs: void 0,
    IPromptGenerationSpecs: void 0,
    ITool: void 0,
    IProject: void 0,
    ILiterals: void 0,
    IPromptTemplateLanguages: void 0,
    IPromptParams: void 0,
    IUpdatePromptParams: void 0,
    PromptTemplate: void 0,
    Prompt: void 0,
    PromptLanguageTemplate: void 0,
    PromptResolver: void 0,
    Schema: void 0,
    GTranslate: void 0,
    AppGTranslate: void 0,
    IChatUser: void 0,
    Wrapper: void 0,
    AppWrapper: void 0,
    ActivityManager: void 0,
    InteractionManager: void 0,
    Playground: void 0,
    PromptExecutor: void 0,
    PromptsCollection: void 0,
    PromptManager: void 0,
    IPEStatus: void 0,
    ICategory: void 0,
    Wikis: void 0,
    IWiki: void 0,
    Wiki: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_1 = _beyondJsReactive211EntitiesCollection;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_2 = _beyondJsHttpSuite011Api;
    }, function (_aimpactPlatform016Config) {
      dependency_3 = _aimpactPlatform016Config;
    }, function (_beyondJsReactive211Model) {
      dependency_4 = _beyondJsReactive211Model;
    }, function (_aimpactChatSdk155Session) {
      dependency_5 = _aimpactChatSdk155Session;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_6 = _beyondJsReactive211EntitiesItem;
    }, function (_aimpactChatSdk155Startup) {
      dependency_7 = _aimpactChatSdk155Startup;
    }, function (_aimpactAgentsClient0029Prompts) {
      dependency_8 = _aimpactAgentsClient0029Prompts;
    }, function (_zod2) {
      dependency_9 = _zod2;
    }, function (_beyondJsKernel0114Core) {
      dependency_10 = _beyondJsKernel0114Core;
    }, function (_uuid2) {
      dependency_11 = _uuid2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.1"], ["pragmate-ui", "1.0.10"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/react-18-widgets", "1.1.6"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.31.0"], ["@firebase/auth", "1.10.0"], ["@radix-ui/primitive", "1.1.3"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.13"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.18"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["firebase", "11.6.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.2"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["npm", "11.6.0"], ["openai", "4.104.0"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.3"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.5.0"], ["react-select", "5.10.2"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.10.1"], ["zod", "3.25.76"], ["@types/node", "24.3.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.24"], ["@types/react-dom", "18.3.7"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/platform/config', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@aimpact/chat-sdk/startup', dependency_7], ['@aimpact/agents-client/prompts', dependency_8], ['zod', dependency_9], ['@beyond-js/kernel/core', dependency_10], ['uuid', dependency_11]]);
      ims = new Map();
      /********************************************
      INTERNAL MODULE: ./core/categories/collection
      ********************************************/
      ims.set('./core/categories/collection', {
        hash: 2027685213,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
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

      /***********************************************
      INTERNAL MODULE: ./core/categories/item-provider
      ***********************************************/

      ims.set('./core/categories/item-provider', {
        hash: 1683346015,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
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

      /**************************************
      INTERNAL MODULE: ./core/categories/item
      **************************************/

      ims.set('./core/categories/item', {
        hash: 3988776809,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
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

      /****************************************
      INTERNAL MODULE: ./core/groups/collection
      ****************************************/

      ims.set('./core/groups/collection', {
        hash: 270024252,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Groups = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _dataProvider = require("./data-provider");
          /*bundle*/
          class Groups extends _collection.Collection {
            constructor(entity, item) {
              super({
                entity,
                item,
                provider: _dataProvider.DataProvider
              });
            }
          }
          exports.Groups = Groups;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./core/groups/data-provider
      *******************************************/

      ims.set('./core/groups/data-provider', {
        hash: 275961507,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DataProvider = void 0;
          var _session = require("@aimpact/chat-sdk/session");
          var _config = require("@aimpact/platform/config");
          var _api = require("@beyond-js/http-suite/api");
          var _error = require("./error");
          /*bundle */ /**
                       
                        
                       */
          class DataProvider {
            #api;
            #model;
            #entity;
            constructor(model) {
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#model = model;
              this.#entity = model.entity;
            }
            setModel(model) {
              this.#model = model;
            }
            async load(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const id = specs.id || specs.code;
              const response = await this.#api.get(`/${this.#entity}/${id}`);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
              }
              return response.data;
            }
            async publish(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/${this.#entity}`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async list(specs = {
              endpoint: undefined
            }) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const endpoint = specs.endpoint ? specs.endpoint : `/${this.#entity}`;
                delete specs.endpoint;
                const response = await this.#api.get(endpoint, specs);
                return response.data.items;
              } catch (e) {
                console.error(e);
              }
            }
            test() {
              //code
            }
            async invite(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const res = await this.#api.post(`/${this.#entity}/${this.#model.id}/invite`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async cancelInvitation(specs = {}) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const res = await this.#api.delete(`/${this.#entity}/${this.#model.id}/invite/user/${specs.email}`, specs);
                if (!res.status) {
                  throw new Error('error publishing organization');
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async join(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.post(`/${this.#entity}/join`, specs);
              if (!res.status) {
                if (res.error.code === 104) {
                  throw new Error('ALREADY_MEMBER');
                }
                if (res.error.code === 101) {
                  throw new Error('ALREADY_WAITING');
                }
                if (res.error.code === 100) {
                  throw new Error('INVALID_CODE');
                }
                throw new Error('ERROR_PUBLISHING');
              }
              return res;
            }
            async approve(specs = {}) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const response = await this.#api.post(`/${this.#entity}/${this.#model.id}/approve`, specs);
              if (!response.status) {
                throw new _error.CustomError(response.error.text, response.error.code);
                // throw new Error('Error approving the user');
              }
              return response;
            }
            async delete(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async removeMember(specs) {
              const token = await _session.sessionWrapper.user.token;
              this.#api.bearer(token);
              const res = await this.#api.delete(`/${this.#entity}/${specs.id}/user/${specs.uid}`);
              if (!res.status) {
                throw new _error.CustomError(res.error.text, res.error.code);
              }
              return res;
            }
            async reject(specs) {
              try {
                const token = await _session.sessionWrapper.user.token;
                this.#api.bearer(token);
                const res = await this.#api.delete(`/${this.#entity}/${specs.id}/join/user/${specs.uid}`, {});
                if (!res.status) {
                  throw new Error(`Error rejecting the user from the ${this.#entity}`);
                }
                return res;
              } catch (e) {
                console.error(e);
              }
            }
            async requestAccess() {
              const response = await this.#api.post(`/classrooms/${this.#model.id}/request`, {});
              return response.data;
            }
          }
          exports.DataProvider = DataProvider;
        }
      });

      /***********************************
      INTERNAL MODULE: ./core/groups/error
      ***********************************/

      ims.set('./core/groups/error', {
        hash: 2905388780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CustomError = void 0;
          class CustomError extends Error {
            message;
            code;
            constructor(message, code) {
              super(message); // Call the parent constructor (Error) with the message
              this.name = 'CustomError'; // Set the name of the error (optional)
              this.code = code; // Add a custom 'code' property
            }
          }
          exports.CustomError = CustomError;
        }
      });

      /**********************************
      INTERNAL MODULE: ./core/groups/item
      **********************************/

      ims.set('./core/groups/item', {
        hash: 3666591359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GroupItem = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _dataProvider = require("./data-provider");
          var _session = require("@aimpact/chat-sdk/session");
          /*bundle*/
          class GroupItem extends _item.Item {
            #hasAccess = false;
            get hasAccess() {
              return this.#hasAccess;
            }
            #members = [];
            get members() {
              return this.#members;
            }
            #managers = [];
            get managers() {
              return this.#managers;
            }
            #pendings = [];
            get pendings() {
              return this.#pendings;
            }
            #registered = new Map();
            #isAdmin;
            get isAdmin() {
              return this.#isAdmin;
            }
            get authorizedPeople() {
              return this.people.filter(i => i.authorized);
            }
            #ready = false;
            get ready() {
              return this.#ready;
            }
            constructor(entity, {
              properties,
              ...data
            }) {
              super({
                entity,
                ...data,
                provider: _dataProvider.DataProvider,
                properties: ['timeCreated', 'timeUpdated', 'name', 'access', 'address', 'description', 'people', 'joinSpecs', 'id', 'status', 'joined', ...properties]
              });
              this.provider.setModel(this);
            }
            async load(specs) {
              this.#pendings = [];
              this.#managers = [];
              this.#members = [];
              this.#registered = new Map();
              specs = typeof specs === 'number' || typeof specs === 'string' ? {
                id: specs
              } : specs;
              if (!specs || Object.keys(specs).length === 0) specs = {
                id: this.id
              };
              const data = await super.load(specs);
              if (!this.people) return;
              this.#hasAccess = true;
              // Sort people alphabetically by name (assuming each person has a 'name' property)
              this.people.sort((a, b) => a.name.localeCompare(b.name));
              const {
                people
              } = this;
              const isAdmin = people.some(i => i.role === 'manager' && i.uid === _session.sessionWrapper.user.id);
              this.#isAdmin = isAdmin;
              const checkMember = person => {
                // Use both uid and id for identification
                const currentRole = this.#registered.get(person.id);
                // Guard clause: If the role hasn't changed, do nothing
                if (!person.invited && person.role && currentRole === person.role) {
                  this.#pendings = this.#pendings.filter(i => i.id !== person.id);
                  return;
                }
                // If the person is already registered, remove them from their current role array
                if (isAdmin && !person.invited && currentRole) {
                  if (currentRole === 'manager') {
                    this.#managers = this.#managers.filter(i => i.id !== person.id);
                  } else {
                    this.#members = this.#members.filter(i => i.id !== person.id);
                  }
                }
                // Add the person to the appropriate role array
                this.#pendings = this.#pendings.filter(i => i.id !== person.id);
                if (isAdmin && (!person.authorized || person.invited)) {
                  this.#pendings.push(person);
                }
                if (person.role) {
                  person.role === 'manager' ? this.#managers.push(person) : this.#members.push(person);
                }
                // Update the registered map with the current role
                // this.#registered.set(personId, person.role);
                if (!person.invited) this.#registered.set(person.id, person.role);
              };
              this.#ready = true;
              people.forEach(checkMember);
              return data;
            }
            async approve(specs) {
              // Validate input
              if (!specs || !specs.uid) throw new Error('Invalid specifications provided.');
              const response = await this.provider.approve(specs);
              if (!response.status) {}
              const {
                uid
              } = specs;
              const id = uid || specs.id;
              // Find and remove the pending member with the specified id
              const pendingIndex = this.#pendings.findIndex(p => p.uid === id || p.id === id);
              this.#registered.set(this.#pendings[pendingIndex].id, specs.role);
              if (pendingIndex >= 0) {
                const [pendingMember] = this.#pendings.splice(pendingIndex, 1);
                pendingMember.authorized = true;
                // Add the pending member to the members list
                specs.role === 'member' ? this.#members.push(pendingMember) : this.#managers.push(pendingMember);
              }
              this.triggerEvent();
            }
            async removeMember(args) {
              const response = await this.provider.removeMember(args);
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== args.uid);
                this.#managers = this.#managers.filter(i => i.uid !== args.uid);
                this.#members = this.#members.filter(i => i.uid !== args.uid);
                this.triggerEvent();
              }
            }
            async reject(specs) {
              const response = await this.provider.reject({
                id: this.id,
                ...specs
              });
              if (response.status) {
                this.people = this.people.filter(i => i.uid !== specs.uid);
                this.#pendings = this.#pendings.filter(i => i.uid !== specs.uid);
                this.triggerEvent();
              }
            }
            async invite(specs) {
              const response = await this.provider.invite(specs);
              const member = {
                ...specs,
                invited: true
              };
              // this.#pendings.push(member);
              this.people.push(member);
              this.#pendings.push(member);
              this.trigger('change');
              return response;
            }
            async cancelInvitation(specs) {
              const response = await this.provider.cancelInvitation(specs);
              if (response.status) {
                this.people = this.people.filter(i => i.email !== specs.email);
                this.#pendings = this.#pendings.filter(i => i.email !== specs.email);
                this.triggerEvent();
              }
            }
            async delete() {
              const response = await this.provider.delete({
                id: this.id
              });
              if (response.status) {
                this.triggerEvent();
              }
              return response;
            }
            async join({
              code
            }) {
              const data = await this.provider.join({
                code
              });
              this.set({
                code
              });
              return data;
            }
            async requestAccess() {
              const data = await this.provider.requestAccess();
              if (data.status.toLowerCase() === 'authorized') {
                await this.load({
                  id: this.id
                });
              } else {
                await this.set({
                  access: data.status
                });
              }
              this.set(data);
              return data;
            }
          }
          exports.GroupItem = GroupItem;
        }
      });

      /**************************************
      INTERNAL MODULE: ./core/llms/collection
      **************************************/

      ims.set('./core/llms/collection', {
        hash: 4191440938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LLMs = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _provider = require("./provider");
          /*bundle*/
          class LLMs extends _collection.Collection {
            constructor(args) {
              super({
                entity: 'LLM',
                provider: _provider.LLMProvider,
                item: _item.LLM,
                type: 'llms',
                ...args
              });
            }
          }
          exports.LLMs = LLMs;
        }
      });

      /********************************
      INTERNAL MODULE: ./core/llms/item
      ********************************/

      ims.set('./core/llms/item', {
        hash: 2440706967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LLM = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _provider = require("./provider");
          /*bundle*/
          class LLM extends _item.Item {
            constructor(args) {
              super({
                ...args,
                entity: 'LLM',
                provider: _provider.LLMProvider,
                properties: ['id', 'name', 'backend', 'url']
              });
            }
          }
          exports.LLM = LLM;
        }
      });

      /************************************
      INTERNAL MODULE: ./core/llms/provider
      ************************************/

      ims.set('./core/llms/provider', {
        hash: 2783976400,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LLMProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _config = require("@aimpact/platform/config");
          class LLMProvider extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.playground);
            }
            async list(specs) {
              const response = await this.#api.get('/models');
              if (!response.status) {
                throw new Error(response.error || 'Error loading models');
              }
              return response.data.map(i => ({
                id: i,
                name: i
              }));
            }
            async load(specs) {
              throw new Error('Load method not implemented for LLM');
            }
            async publish(data) {
              throw new Error('Publish method not implemented for LLM');
            }
            async delete(specs) {
              throw new Error('Delete method not implemented for LLM');
            }
          }
          exports.LLMProvider = LLMProvider;
        }
      });

      /******************************************
      INTERNAL MODULE: ./core/projects/collection
      ******************************************/

      ims.set('./core/projects/collection', {
        hash: 698133166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Projects = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _collection2 = require("./collection/provider/collection");
          /*bundle*/
          class Projects extends _collection.Collection {
            constructor() {
              super({
                entity: 'Projects',
                item: _item.Project,
                provider: _collection2.CollectionProvider
              });
            }
          }
          exports.Projects = Projects;
        }
      });

      /**************************************************************
      INTERNAL MODULE: ./core/projects/collection/provider/collection
      **************************************************************/

      ims.set('./core/projects/collection/provider/collection', {
        hash: 628197475,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#parent = parent;
            }
            async list(specs) {
              const {
                status,
                data
              } = await this.#api.get('/projects');
              if (!status) throw new Error('Failed to load projects list');
              return data.items;
            }
            async publish(data) {
              const {
                status,
                data: response
              } = await this.#api.post('/projects', data);
              if (!status) throw new Error('Failed to create project');
              return response;
            }
            async remove(specs) {
              const {
                status
              } = await this.#api.delete(`/projects/${specs.id}`);
              if (!status) throw new Error('Failed to remove project');
              return true;
            }
          }
          exports.CollectionProvider = CollectionProvider;
        }
      });

      /********************************************************
      INTERNAL MODULE: ./core/projects/collection/provider/item
      ********************************************************/

      ims.set('./core/projects/collection/provider/item', {
        hash: 2921556712,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#parent = parent;
            }
            async load(specs) {
              const {
                status,
                data
              } = await this.#api.get(`/projects/${specs.id}`);
              if (!status) throw new Error('Failed to load project');
              return data;
            }
            async publish(data) {
              const {
                status,
                data: response
              } = await this.#api.post('/projects', data);
              if (!status) throw new Error('Failed to create project');
              return response;
            }
            async delete(specs) {
              const {
                status
              } = await this.#api.delete(`/projects/${specs.id}`);
              if (!status) throw new Error('Failed to delete project');
              return true;
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /************************************
      INTERNAL MODULE: ./core/projects/item
      ************************************/

      ims.set('./core/projects/item', {
        hash: 579620403,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Project = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _item2 = require("./collection/provider/item");
          /*bundle*/
          class Project extends _item.Item {
            constructor(args = {}) {
              super({
                entity: 'Projects',
                provider: _item2.ItemProvider,
                properties: ['description', 'name', 'id'],
                ...args
              });
            }
          }
          exports.Project = Project;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./core/prompts/collection
      *****************************************/

      ims.set('./core/prompts/collection', {
        hash: 14059532,
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
                item: _item.PromptTemplate,
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

      /***************************************
      INTERNAL MODULE: ./core/prompts/executor
      ***************************************/

      ims.set('./core/prompts/executor', {
        hash: 715015201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Executor = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          /*bundle*/
          class Executor {
            #api;
            constructor() {
              this.#api = new _api.Api(_startup.sdkConfig.api);
            }
            async execute(specs) {
              const response = await this.#api.post('/completions', specs);
              if (!response.status) {
                throw new Error(response.error || 'Error executing prompt');
              }
              return response.data;
            }
            static async executePrompt(specs) {
              // Crear instancia del executor y ejecutar
              const executor = new Executor();
              return await executor.execute(specs);
            }
          }
          exports.Executor = Executor;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./core/prompts/interfaces
      *****************************************/

      ims.set('./core/prompts/interfaces', {
        hash: 273427614,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************
      INTERNAL MODULE: ./core/prompts/item/index
      *****************************************/

      ims.set('./core/prompts/item/index', {
        hash: 690181285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplate = exports.Prompt = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _providers = require("./providers");
          /*bundle*/
          class PromptTemplate extends _item.Item {
            constructor(specs = {}) {
              super({
                ...specs,
                entity: 'PromptTemplate',
                provider: _providers.PromptTemplateProvider,
                properties: ['id', 'project', 'identifier', 'name', 'is', 'format', 'value', 'literals', 'language']
              });
            }
          }
          exports.PromptTemplate = PromptTemplate;
          /*bundle*/
          const Prompt = exports.Prompt = PromptTemplate;
        }
      });

      /**********************************************
      INTERNAL MODULE: ./core/prompts/item/interfaces
      **********************************************/

      ims.set('./core/prompts/item/interfaces', {
        hash: 630350338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./core/prompts/item/language-template
      *****************************************************/

      ims.set('./core/prompts/item/language-template', {
        hash: 819890613,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptLanguageTemplate = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _language = require("./providers/language");
          /*bundle*/
          class PromptLanguageTemplate extends _item.Item {
            #specs;
            constructor(specs) {
              super({
                ...specs,
                entity: 'PromptTemplateLanguages',
                provider: _language.PromptTemplateLanguagesProvider,
                properties: ['format', 'id', 'identifier', 'is', 'language', 'literals', 'name', 'project', 'value']
              });
              this.#specs = specs;
            }
            async setLanguageAndText(params) {
              const {
                language,
                text
              } = params;
              if (!language) {
                throw new Error('Invalid parameter language');
              }
              if (!text) {
                throw new Error('Invalid parameter text');
              }
              const data = await this.provider.saveTranslate(this.#specs.name, {
                language,
                text
              });
              this.set({
                value: data?.value,
                language: data?.language,
                literals: data?.literals,
                project: data?.project
              });
              return data;
            }
          }
          exports.PromptLanguageTemplate = PromptLanguageTemplate;
        }
      });

      /***************************************************
      INTERNAL MODULE: ./core/prompts/item/providers/index
      ***************************************************/

      ims.set('./core/prompts/item/providers/index', {
        hash: 2327607142,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/chat-sdk/startup");
          class PromptTemplateProvider extends _model.ReactiveModel {
            #api;
            #parent;
            constructor(parent) {
              super();
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async load(specs) {
              const id = specs?.id || this.#parent.id;
              const response = await this.#api.get(`/prompts/templates/${id}`);
              if (!response.status) {
                throw new Error(response.error || 'Error loading prompt template');
              }
              return response.data;
            }
            async publish(data) {
              const response = await this.#api.post('/prompts/templates', data);
              if (!response.status) {
                throw new Error(response.error || 'Error creating prompt template');
              }
              return response.data;
            }
            async delete(specs) {
              const id = specs?.id || this.#parent.id;
              const response = await this.#api.delete(`/prompts/templates/${id}`);
              if (!response.status) {
                throw new Error(response.error || 'Error deleting prompt template');
              }
              return true;
            }
            // Additional methods for specific functionality
            async create(params) {
              const language = {
                default: params.language.languages[0],
                languages: params.language.languages,
                update: [params.language.languages[0]]
              };
              const body = Object.assign({}, params, {
                language
              });
              return this.publish(body);
            }
            async update(params) {
              const {
                id
              } = params;
              if (!id) {
                throw new Error('id is required');
              }
              const response = await this.#api.put(`/prompts/templates/${id}`, params);
              if (!response.status) {
                throw new Error(response.error || 'Error updating prompt template');
              }
              return response.data;
            }
            async loadLanguage(id, language) {
              return await this.#api.get(`/prompts/templates/${id}?language=${language}`);
            }
            async saveLanguage(id, data) {
              return await this.#api.post(`/prompts/templates/${id}/languages`, data);
            }
            /**
             *  This method generate the prompt template in the language passed as parameter
             * @todo it must be called as /languages/generate not update
             * @param id
             * @param language
             * @returns
             */
            async generateLanguages(id, language) {
              if (!language) {
                throw new Error('language is required');
              }
              const response = await this.#api.post(`/prompts/templates/${id}/languages/update`, {
                language
              });
              if (!response.status) {
                throw new Error(response.error || 'Error updating languages');
              }
              return response.data;
            }
            async execute(specs) {
              const response = await this.#api.post('/completions', specs);
              return response.data;
            }
          }
          exports.PromptTemplateProvider = PromptTemplateProvider;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./core/prompts/item/providers/language
      ******************************************************/

      ims.set('./core/prompts/item/providers/language', {
        hash: 1922739841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateLanguagesProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
          class PromptTemplateLanguagesProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async load(specs) {
              const name = specs?.name || this.#parent['#specs']?.name;
              const language = specs?.language;
              if (!language) {
                throw new Error('Invalid parameter language');
              }
              const response = await this.#api.get(`/prompts/templates/${this.#parent.identifier}?language=${language}`);
              if (!response.status) {
                throw new Error(response.error || 'Invalid parameter name');
              }
              return response.data;
            }
            async delete(specs) {
              // This method is not used for PromptTemplateLanguages
              throw new Error('Delete not supported for PromptTemplateLanguages');
            }
            async publish() {
              const {
                language: {
                  default: language
                },
                value: text
              } = this.#parent;
              if (!language) {
                throw new Error('Invalid parameter language');
              }
              if (!text) {
                throw new Error('Invalid parameter text');
              }
              const response = await this.#api.post(`/prompts/templates/${this.#parent.identifier}/translate`, {
                language,
                text
              });
              if (!response.status) {
                throw new Error(response.error || 'Error saving translation');
              }
              return response.data;
            }
          }
          exports.PromptTemplateLanguagesProvider = PromptTemplateLanguagesProvider;
        }
      });

      /***************************************
      INTERNAL MODULE: ./core/prompts/provider
      ***************************************/

      ims.set('./core/prompts/provider', {
        hash: 2541391962,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#parent = parent;
            }
            async publish(data) {
              return await this.#api.post(`/prompts/templates`, data);
            }
            async update(data) {
              return await this.#api.post(`/prompts/templates`, data);
            }
            async load({
              id
            }) {
              5;
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

      /***************************************
      INTERNAL MODULE: ./core/prompts/resolver
      ***************************************/

      ims.set('./core/prompts/resolver', {
        hash: 4229213924,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptResolver = void 0;
          /*bundle*/
          class PromptResolver {
            static resolve(prompt, prompts, prefix = 'AILEARN.', literalValues = {}) {
              const {
                id,
                value
              } = prompt;
              if (typeof value !== 'string') {
                const stringValue = JSON.stringify(value);
                return {
                  value: stringValue,
                  expanded: stringValue,
                  parsed: stringValue,
                  literals: []
                };
              }
              const visited = new Set();
              const literals = new Set();
              const walk = (text, depth = 0) => {
                if (!text) {
                  console.warn('Text is empty', depth);
                  return text;
                }
                return text.replace(/\{([A-Z0-9\- ]+)\}/gi, (_match, rawId) => {
                  if (visited.has(rawId)) {
                    console.error(`Circular dependency detected: ${[...visited, rawId].join(' → ')}`);
                    return `{${rawId}}`;
                  }
                  const dependency = prompts.find(p => {
                    return p.id.toUpperCase().trim() === `${prefix}${rawId}`.toUpperCase().trim();
                  });
                  if (!dependency) {
                    literals.add(rawId);
                    return `{${rawId}}`;
                  }
                  visited.add(rawId);
                  const dependencyValue = typeof dependency.value === 'string' ? dependency.value : JSON.stringify(dependency.value);
                  const resolved = walk(dependencyValue, depth + 1);
                  visited.delete(rawId);
                  return resolved;
                });
              };
              const expanded = walk(value);
              // Replace literals with their values
              let parsed = expanded;
              Object.keys(literalValues).forEach(literal => {
                const value = literalValues[literal];
                if (value !== undefined && value !== null && value !== '') {
                  parsed = parsed.replace(new RegExp(`\\{${literal}\\}`, 'g'), value);
                }
              });
              const parsedPrompt = {
                parsed,
                value,
                expanded,
                literals: Array.from(literals)
              };
              return parsedPrompt;
            }
            static analyze(value, prompts, prefix = 'AILEARN.') {
              const dependencies = new Set();
              const literals = new Set();
              const visited = new Set();
              const walk = text => {
                console.log(1, text);
                const placeholders = [...text.matchAll(/\{([A-Z0-9\-]+)\}/gi)].map(m => m[1]);
                const uniquePlaceholders = [...new Set(placeholders)];
                uniquePlaceholders.forEach(id => {
                  if (visited.has(id)) return; // Avoid circular dependencies
                  // Check if the placeholder exists in the prompts array
                  const dependency = prompts.find(p => {
                    return p.id.toUpperCase().trim() === `${prefix}${id}`.toUpperCase().trim();
                  });
                  if (dependency) {
                    dependencies.add(id);
                    visited.add(id);
                    // Recursively analyze the dependency content
                    if (dependency.value) {
                      walk(dependency.value);
                    } else {
                      console.warn('Dependency value is empty', dependency.id);
                    }
                    visited.delete(id);
                  } else {
                    literals.add(id);
                  }
                });
              };
              walk(value);
              return {
                dependencies: Array.from(dependencies),
                literals: Array.from(literals)
              };
            }
          }
          exports.PromptResolver = PromptResolver;
        }
      });

      /***********************************
      INTERNAL MODULE: ./core/schemas/item
      ***********************************/

      ims.set('./core/schemas/item', {
        hash: 2172544918,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
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

      /***************************************
      INTERNAL MODULE: ./core/schemas/provider
      ***************************************/

      ims.set('./core/schemas/provider', {
        hash: 743319118,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#parent = parent;
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./core/translate/index
      **************************************/

      ims.set('./core/translate/index', {
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

      /**************************************
      INTERNAL MODULE: ./core/users/interface
      **************************************/

      ims.set('./core/users/interface', {
        hash: 4186078931,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*********************************
      INTERNAL MODULE: ./core/users/item
      *********************************/

      ims.set('./core/users/item', {
        hash: 3328850714,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.User = void 0;
          var _item = require("@beyond-js/reactive/entities/item");
          var _zod = require("zod");
          var _provider = require("./provider");
          class User extends _item.Item {
            schema = _zod.z.object({
              id: _zod.z.string(),
              displayName: _zod.z.string(),
              email: _zod.z.string().email(),
              photoURL: _zod.z.string().optional(),
              phoneNumber: _zod.z.string().optional(),
              age: _zod.z.number().optional(),
              teacher: _zod.z.boolean().optional(),
              accessibility: _zod.z.boolean().optional(),
              roles: _zod.z.array(_zod.z.string()).optional()
            });
            constructor(props = {}) {
              super({
                entity: 'users',
                provider: _provider.UserProvider,
                properties: ['id', 'displayName', 'email', 'photoURL', 'phoneNumber', 'age', 'teacher', 'accessibility', 'roles'],
                ...props
              });
            }
          }
          exports.User = User;
        }
      });

      /*************************************
      INTERNAL MODULE: ./core/users/provider
      *************************************/

      ims.set('./core/users/provider', {
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

      /************************************
      INTERNAL MODULE: ./core/wrapper/index
      ************************************/

      ims.set('./core/wrapper/index', {
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

      /***************************************
      INTERNAL MODULE: ./playground/activities
      ***************************************/

      ims.set('./playground/activities', {
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

      /*************************************************************
      INTERNAL MODULE: ./playground/activity-agents/activity-manager
      *************************************************************/

      ims.set('./playground/activity-agents/activity-manager', {
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

      /*******************************************************
      INTERNAL MODULE: ./playground/activity-agents/collection
      *******************************************************/

      ims.set('./playground/activity-agents/collection', {
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

      /**************************************************
      INTERNAL MODULE: ./playground/activity-agents/index
      **************************************************/

      ims.set('./playground/activity-agents/index', {
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

      /*************************************************
      INTERNAL MODULE: ./playground/activity-agents/item
      *************************************************/

      ims.set('./playground/activity-agents/item', {
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

      /*****************************************************
      INTERNAL MODULE: ./playground/activity-agents/provider
      *****************************************************/

      ims.set('./playground/activity-agents/provider', {
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

      /***************************************
      INTERNAL MODULE: ./playground/chat/index
      ***************************************/

      ims.set('./playground/chat/index', {
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

      /*****************************************************
      INTERNAL MODULE: ./playground/chat/interaction-manager
      *****************************************************/

      ims.set('./playground/chat/interaction-manager', {
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

      /*****************************************
      INTERNAL MODULE: ./playground/chat/message
      *****************************************/

      ims.set('./playground/chat/message', {
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

      /******************************************
      INTERNAL MODULE: ./playground/chat/messages
      ******************************************/

      ims.set('./playground/chat/messages', {
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

      /**********************************
      INTERNAL MODULE: ./playground/index
      **********************************/

      ims.set('./playground/index', {
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

      /********************************************
      INTERNAL MODULE: ./playground/prompt-executor
      ********************************************/

      ims.set('./playground/prompt-executor', {
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

      /***********************************************
      INTERNAL MODULE: ./playground/prompts/collection
      ***********************************************/

      ims.set('./playground/prompts/collection', {
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

      /*************************************************************
      INTERNAL MODULE: ./playground/prompts/literals/global-literals
      *************************************************************/

      ims.set('./playground/prompts/literals/global-literals', {
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

      /*****************************************************
      INTERNAL MODULE: ./playground/prompts/literals/literal
      *****************************************************/

      ims.set('./playground/prompts/literals/literal', {
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

      /************************************************************
      INTERNAL MODULE: ./playground/prompts/literals/reserved/index
      ************************************************************/

      ims.set('./playground/prompts/literals/reserved/index', {
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

      /***************************************************
      INTERNAL MODULE: ./playground/prompts/prompt-history
      ***************************************************/

      ims.set('./playground/prompts/prompt-history', {
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

      /***************************************************
      INTERNAL MODULE: ./playground/prompts/prompt-manager
      ***************************************************/

      ims.set('./playground/prompts/prompt-manager', {
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

      /*******************************************
      INTERNAL MODULE: ./playground/prompts/prompt
      *******************************************/

      ims.set('./playground/prompts/prompt', {
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

      /*********************************************
      INTERNAL MODULE: ./playground/prompts/resolver
      *********************************************/

      ims.set('./playground/prompts/resolver', {
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

      /*******************************************
      INTERNAL MODULE: ./playground/providers/chat
      *******************************************/

      ims.set('./playground/providers/chat', {
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

      /*************************************************
      INTERNAL MODULE: ./playground/providers/playground
      *************************************************/

      ims.set('./playground/providers/playground', {
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

      /***********************************
      INTERNAL MODULE: ./playground/schema
      ***********************************/

      ims.set('./playground/schema', {
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

      /************************************************************
      INTERNAL MODULE: ./playground/student-competencies/collection
      ************************************************************/

      ims.set('./playground/student-competencies/collection', {
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

      /*********************************************************
      INTERNAL MODULE: ./playground/student-competencies/example
      *********************************************************/

      ims.set('./playground/student-competencies/example', {
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

      /*******************************************************
      INTERNAL MODULE: ./playground/student-competencies/index
      *******************************************************/

      ims.set('./playground/student-competencies/index', {
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

      /******************************************************
      INTERNAL MODULE: ./playground/student-competencies/item
      ******************************************************/

      ims.set('./playground/student-competencies/item', {
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

      /**********************************************************
      INTERNAL MODULE: ./playground/student-competencies/provider
      **********************************************************/

      ims.set('./playground/student-competencies/provider', {
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

      /******************************************************
      INTERNAL MODULE: ./playground/student-competencies/test
      ******************************************************/

      ims.set('./playground/student-competencies/test', {
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

      /**********************************
      INTERNAL MODULE: ./playground/types
      **********************************/

      ims.set('./playground/types', {
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

      /********************************************
      INTERNAL MODULE: ./wiki/categories/collection
      ********************************************/

      ims.set('./wiki/categories/collection', {
        hash: 3410727695,
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
                entity: 'Categories',
                item: _item.Category
              });
              this.#api = new _api.Api(_config.default.params.apis.agents);
            }
            async list() {
              try {
                this.fetching = true;
                const response = await this.#api.get('/wiki/categories');
                return response;
              } catch (e) {
                console.error('Error fetching categories:', e);
              } finally {
                this.fetching = false;
              }
            }
            async search(query) {
              try {
                this.fetching = true;
                const response = await this.#api.get(`/wiki/categories/search?q=${encodeURIComponent(query)}`);
                return response;
              } catch (e) {
                console.error('Error searching categories:', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Categories = Categories;
        }
      });

      /***************************************
      INTERNAL MODULE: ./wiki/categories/index
      ***************************************/

      ims.set('./wiki/categories/index', {
        hash: 554344106,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          Object.defineProperty(exports, "Categories", {
            enumerable: true,
            get: function () {
              return _collection.Categories;
            }
          });
          Object.defineProperty(exports, "Category", {
            enumerable: true,
            get: function () {
              return _item.Category;
            }
          });
          Object.defineProperty(exports, "ItemProvider", {
            enumerable: true,
            get: function () {
              return _itemProvider.ItemProvider;
            }
          });
          var _item = require("./item");
          var _collection = require("./collection");
          var _itemProvider = require("./item-provider");
        }
      });

      /*******************************************
      INTERNAL MODULE: ./wiki/categories/interface
      *******************************************/

      ims.set('./wiki/categories/interface', {
        hash: 759950420,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************************************
      INTERNAL MODULE: ./wiki/categories/item-provider
      ***********************************************/

      ims.set('./wiki/categories/item-provider', {
        hash: 3840411924,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#parent = parent;
            }
            async load(params) {
              try {
                this.fetching = true;
                const response = await this.#api.get(`/wiki/categories/${params.id}`);
                return response;
              } catch (e) {
                console.error('Error loading category:', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /**************************************
      INTERNAL MODULE: ./wiki/categories/item
      **************************************/

      ims.set('./wiki/categories/item', {
        hash: 3239817817,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Category = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _item = require("@beyond-js/reactive/entities/item");
          var _itemProvider = require("./item-provider");
          /*bundle */
          class Category extends _item.Item {
            #api;
            constructor(props = {}) {
              super({
                entity: 'Categories',
                provider: _itemProvider.ItemProvider,
                properties: ['id', 'name', 'description', 'slug'],
                ...props
              });
              this.#api = new _api.Api(_config.default.params.apis.agents);
            }
            async publish(params) {
              try {
                this.fetching = true;
                const newCategory = await this.#api.post('/wiki/categories', {
                  ...params
                });
                return newCategory;
              } catch (e) {
                console.error('Error publishing category:', e);
              } finally {
                this.fetching = false;
              }
            }
            async update(params) {
              try {
                this.fetching = true;
                const updatedCategory = await this.#api.put(`/wiki/categories/${this.id}`, {
                  ...params
                });
                return updatedCategory;
              } catch (e) {
                console.error('Error updating category:', e);
              } finally {
                this.fetching = false;
              }
            }
            async delete() {
              try {
                this.fetching = true;
                await this.#api.delete(`/wiki/categories/${this.id}`);
              } catch (e) {
                console.error('Error deleting category:', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Category = Category;
        }
      });

      /*********************************
      INTERNAL MODULE: ./wiki/collection
      *********************************/

      ims.set('./wiki/collection', {
        hash: 261531549,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wikis = void 0;
          var _collection = require("@beyond-js/reactive/entities/collection");
          var _item = require("./item");
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          /*bundle */
          class Wikis extends _collection.Collection {
            #api;
            constructor() {
              super({
                entity: 'Wiki',
                item: _item.Wiki
              });
              this.#api = new _api.Api(_config.default.params.apis.agents);
            }
            async list() {
              try {
                this.fetching = true;
                const response = await this.#api.get('/wiki');
                return response;
              } catch (e) {
                console.error('Error fetching wikis:', e);
              } finally {
                this.fetching = false;
              }
            }
            async search(query) {
              try {
                this.fetching = true;
                const response = await this.#api.get(`/wiki/search?q=${encodeURIComponent(query)}`);
                return response;
              } catch (e) {
                console.error('Error searching wikis:', e);
              } finally {
                this.fetching = false;
              }
            }
            async getByCategory(categoryId) {
              try {
                this.fetching = true;
                const response = await this.#api.get(`/wiki/category/${categoryId}`);
                return response;
              } catch (e) {
                console.error('Error fetching wikis by category:', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Wikis = Wikis;
        }
      });

      /****************************
      INTERNAL MODULE: ./wiki/index
      ****************************/

      ims.set('./wiki/index', {
        hash: 1743342763,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          var _exportNames = {
            Wiki: true,
            Wikis: true,
            ItemProvider: true
          };
          Object.defineProperty(exports, "ItemProvider", {
            enumerable: true,
            get: function () {
              return _itemProvider.ItemProvider;
            }
          });
          Object.defineProperty(exports, "Wiki", {
            enumerable: true,
            get: function () {
              return _item.Wiki;
            }
          });
          Object.defineProperty(exports, "Wikis", {
            enumerable: true,
            get: function () {
              return _collection.Wikis;
            }
          });
          var _item = require("./item");
          var _collection = require("./collection");
          var _itemProvider = require("./item-provider");
          var _categories = require("./categories");
          Object.keys(_categories).forEach(function (key) {
            if (key === "default" || key === "__esModule") return;
            if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
            if (key in exports && exports[key] === _categories[key]) return;
            Object.defineProperty(exports, key, {
              enumerable: true,
              get: function () {
                return _categories[key];
              }
            });
          });
        }
      });

      /********************************
      INTERNAL MODULE: ./wiki/interface
      ********************************/

      ims.set('./wiki/interface', {
        hash: 4007491517,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /************************************
      INTERNAL MODULE: ./wiki/item-provider
      ************************************/

      ims.set('./wiki/item-provider', {
        hash: 459463672,
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
              this.#api = new _api.Api(_config.default.params.apis.agents);
              this.#parent = parent;
            }
            async load(params) {
              try {
                this.fetching = true;
                const response = await this.#api.get(`/wiki/${params.id}`);
                return response;
              } catch (e) {
                console.error('Error loading wiki:', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.ItemProvider = ItemProvider;
        }
      });

      /***************************
      INTERNAL MODULE: ./wiki/item
      ***************************/

      ims.set('./wiki/item', {
        hash: 3041347427,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wiki = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _config = require("@aimpact/platform/config");
          var _item = require("@beyond-js/reactive/entities/item");
          var _itemProvider = require("./item-provider");
          /*bundle */
          class Wiki extends _item.Item {
            #api;
            constructor(props = {}) {
              super({
                entity: 'Wiki',
                provider: _itemProvider.ItemProvider,
                properties: ['id', 'title', 'slug', 'content', 'summary', 'categories'],
                ...props
              });
              this.#api = new _api.Api(_config.default.params.apis.agents);
            }
            async publish(params) {
              try {
                this.fetching = true;
                const newWiki = await this.#api.post('/wiki', {
                  ...params
                });
                return newWiki;
              } catch (e) {
                console.error('Error publishing wiki:', e);
              } finally {
                this.fetching = false;
              }
            }
            async update(params) {
              try {
                this.fetching = true;
                const updatedWiki = await this.#api.put(`/wiki/${this.id}`, {
                  ...params
                });
                return updatedWiki;
              } catch (e) {
                console.error('Error updating wiki:', e);
              } finally {
                this.fetching = false;
              }
            }
            async delete() {
              try {
                this.fetching = true;
                await this.#api.delete(`/wiki/${this.id}`);
              } catch (e) {
                console.error('Error deleting wiki:', e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.Wiki = Wiki;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./core/categories/collection",
        "from": "Categories",
        "name": "Categories"
      }, {
        "im": "./core/categories/item",
        "from": "Category",
        "name": "Category"
      }, {
        "im": "./core/groups/collection",
        "from": "Groups",
        "name": "Groups"
      }, {
        "im": "./core/groups/data-provider",
        "from": "DataProvider",
        "name": "DataProvider"
      }, {
        "im": "./core/groups/item",
        "from": "GroupItem",
        "name": "GroupItem"
      }, {
        "im": "./core/llms/collection",
        "from": "LLMs",
        "name": "LLMs"
      }, {
        "im": "./core/llms/item",
        "from": "LLM",
        "name": "LLM"
      }, {
        "im": "./core/projects/collection",
        "from": "Projects",
        "name": "Projects"
      }, {
        "im": "./core/projects/item",
        "from": "Project",
        "name": "Project"
      }, {
        "im": "./core/prompts/collection",
        "from": "Prompts",
        "name": "Prompts"
      }, {
        "im": "./core/prompts/executor",
        "from": "Executor",
        "name": "Executor"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "IPromptSpecs",
        "name": "IPromptSpecs"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "IPromptGenerationSpecs",
        "name": "IPromptGenerationSpecs"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "ITool",
        "name": "ITool"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "IProject",
        "name": "IProject"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "ILiterals",
        "name": "ILiterals"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "IPromptTemplateLanguages",
        "name": "IPromptTemplateLanguages"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "IPromptParams",
        "name": "IPromptParams"
      }, {
        "im": "./core/prompts/interfaces",
        "from": "IUpdatePromptParams",
        "name": "IUpdatePromptParams"
      }, {
        "im": "./core/prompts/item/index",
        "from": "PromptTemplate",
        "name": "PromptTemplate"
      }, {
        "im": "./core/prompts/item/index",
        "from": "Prompt",
        "name": "Prompt"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "IPromptSpecs",
        "name": "IPromptSpecs"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "IPromptGenerationSpecs",
        "name": "IPromptGenerationSpecs"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "ITool",
        "name": "ITool"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "IProject",
        "name": "IProject"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "ILiterals",
        "name": "ILiterals"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "IPromptParams",
        "name": "IPromptParams"
      }, {
        "im": "./core/prompts/item/interfaces",
        "from": "IUpdatePromptParams",
        "name": "IUpdatePromptParams"
      }, {
        "im": "./core/prompts/item/language-template",
        "from": "PromptLanguageTemplate",
        "name": "PromptLanguageTemplate"
      }, {
        "im": "./core/prompts/resolver",
        "from": "PromptResolver",
        "name": "PromptResolver"
      }, {
        "im": "./core/schemas/item",
        "from": "Schema",
        "name": "Schema"
      }, {
        "im": "./core/translate/index",
        "from": "GTranslate",
        "name": "GTranslate"
      }, {
        "im": "./core/translate/index",
        "from": "AppGTranslate",
        "name": "AppGTranslate"
      }, {
        "im": "./core/users/interface",
        "from": "IChatUser",
        "name": "IChatUser"
      }, {
        "im": "./core/wrapper/index",
        "from": "Wrapper",
        "name": "Wrapper"
      }, {
        "im": "./core/wrapper/index",
        "from": "AppWrapper",
        "name": "AppWrapper"
      }, {
        "im": "./playground/activity-agents/activity-manager",
        "from": "ActivityManager",
        "name": "ActivityManager"
      }, {
        "im": "./playground/chat/interaction-manager",
        "from": "InteractionManager",
        "name": "InteractionManager"
      }, {
        "im": "./playground/index",
        "from": "Playground",
        "name": "Playground"
      }, {
        "im": "./playground/prompt-executor",
        "from": "PromptExecutor",
        "name": "PromptExecutor"
      }, {
        "im": "./playground/prompts/collection",
        "from": "PromptsCollection",
        "name": "PromptsCollection"
      }, {
        "im": "./playground/prompts/prompt-manager",
        "from": "PromptManager",
        "name": "PromptManager"
      }, {
        "im": "./playground/types",
        "from": "IPEStatus",
        "name": "IPEStatus"
      }, {
        "im": "./wiki/categories/collection",
        "from": "Categories",
        "name": "Categories"
      }, {
        "im": "./wiki/categories/interface",
        "from": "ICategory",
        "name": "ICategory"
      }, {
        "im": "./wiki/categories/item",
        "from": "Category",
        "name": "Category"
      }, {
        "im": "./wiki/collection",
        "from": "Wikis",
        "name": "Wikis"
      }, {
        "im": "./wiki/interface",
        "from": "IWiki",
        "name": "IWiki"
      }, {
        "im": "./wiki/item",
        "from": "Wiki",
        "name": "Wiki"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Categories') && _export("Categories", Categories = require ? require('./core/categories/collection').Categories : value);
        (require || prop === 'Category') && _export("Category", Category = require ? require('./core/categories/item').Category : value);
        (require || prop === 'Groups') && _export("Groups", Groups = require ? require('./core/groups/collection').Groups : value);
        (require || prop === 'DataProvider') && _export("DataProvider", DataProvider = require ? require('./core/groups/data-provider').DataProvider : value);
        (require || prop === 'GroupItem') && _export("GroupItem", GroupItem = require ? require('./core/groups/item').GroupItem : value);
        (require || prop === 'LLMs') && _export("LLMs", LLMs = require ? require('./core/llms/collection').LLMs : value);
        (require || prop === 'LLM') && _export("LLM", LLM = require ? require('./core/llms/item').LLM : value);
        (require || prop === 'Projects') && _export("Projects", Projects = require ? require('./core/projects/collection').Projects : value);
        (require || prop === 'Project') && _export("Project", Project = require ? require('./core/projects/item').Project : value);
        (require || prop === 'Prompts') && _export("Prompts", Prompts = require ? require('./core/prompts/collection').Prompts : value);
        (require || prop === 'Executor') && _export("Executor", Executor = require ? require('./core/prompts/executor').Executor : value);
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./core/prompts/interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./core/prompts/interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./core/prompts/interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./core/prompts/interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./core/prompts/interfaces').ILiterals : value);
        (require || prop === 'IPromptTemplateLanguages') && _export("IPromptTemplateLanguages", IPromptTemplateLanguages = require ? require('./core/prompts/interfaces').IPromptTemplateLanguages : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./core/prompts/interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./core/prompts/interfaces').IUpdatePromptParams : value);
        (require || prop === 'PromptTemplate') && _export("PromptTemplate", PromptTemplate = require ? require('./core/prompts/item/index').PromptTemplate : value);
        (require || prop === 'Prompt') && _export("Prompt", Prompt = require ? require('./core/prompts/item/index').Prompt : value);
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./core/prompts/item/interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./core/prompts/item/interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./core/prompts/item/interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./core/prompts/item/interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./core/prompts/item/interfaces').ILiterals : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./core/prompts/item/interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./core/prompts/item/interfaces').IUpdatePromptParams : value);
        (require || prop === 'PromptLanguageTemplate') && _export("PromptLanguageTemplate", PromptLanguageTemplate = require ? require('./core/prompts/item/language-template').PromptLanguageTemplate : value);
        (require || prop === 'PromptResolver') && _export("PromptResolver", PromptResolver = require ? require('./core/prompts/resolver').PromptResolver : value);
        (require || prop === 'Schema') && _export("Schema", Schema = require ? require('./core/schemas/item').Schema : value);
        (require || prop === 'GTranslate') && _export("GTranslate", GTranslate = require ? require('./core/translate/index').GTranslate : value);
        (require || prop === 'AppGTranslate') && _export("AppGTranslate", AppGTranslate = require ? require('./core/translate/index').AppGTranslate : value);
        (require || prop === 'IChatUser') && _export("IChatUser", IChatUser = require ? require('./core/users/interface').IChatUser : value);
        (require || prop === 'Wrapper') && _export("Wrapper", Wrapper = require ? require('./core/wrapper/index').Wrapper : value);
        (require || prop === 'AppWrapper') && _export("AppWrapper", AppWrapper = require ? require('./core/wrapper/index').AppWrapper : value);
        (require || prop === 'ActivityManager') && _export("ActivityManager", ActivityManager = require ? require('./playground/activity-agents/activity-manager').ActivityManager : value);
        (require || prop === 'InteractionManager') && _export("InteractionManager", InteractionManager = require ? require('./playground/chat/interaction-manager').InteractionManager : value);
        (require || prop === 'Playground') && _export("Playground", Playground = require ? require('./playground/index').Playground : value);
        (require || prop === 'PromptExecutor') && _export("PromptExecutor", PromptExecutor = require ? require('./playground/prompt-executor').PromptExecutor : value);
        (require || prop === 'PromptsCollection') && _export("PromptsCollection", PromptsCollection = require ? require('./playground/prompts/collection').PromptsCollection : value);
        (require || prop === 'PromptManager') && _export("PromptManager", PromptManager = require ? require('./playground/prompts/prompt-manager').PromptManager : value);
        (require || prop === 'IPEStatus') && _export("IPEStatus", IPEStatus = require ? require('./playground/types').IPEStatus : value);
        (require || prop === 'Categories') && _export("Categories", Categories = require ? require('./wiki/categories/collection').Categories : value);
        (require || prop === 'ICategory') && _export("ICategory", ICategory = require ? require('./wiki/categories/interface').ICategory : value);
        (require || prop === 'Category') && _export("Category", Category = require ? require('./wiki/categories/item').Category : value);
        (require || prop === 'Wikis') && _export("Wikis", Wikis = require ? require('./wiki/collection').Wikis : value);
        (require || prop === 'IWiki') && _export("IWiki", IWiki = require ? require('./wiki/interface').IWiki : value);
        (require || prop === 'Wiki') && _export("Wiki", Wiki = require ? require('./wiki/item').Wiki : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWdlbnRzIiwibGlzdCIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJnZXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIkl0ZW1Qcm92aWRlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJsb2FkIiwiaWQiLCJfaXRlbVByb3ZpZGVyIiwicHJvdmlkZXIiLCJwdWJsaXNoIiwibmV3Q2F0ZWdvcnkiLCJwb3N0IiwicHJvamVjdElkIiwiZ2V0TGlzdCIsIl9kYXRhUHJvdmlkZXIiLCJHcm91cHMiLCJEYXRhUHJvdmlkZXIiLCJfc2Vzc2lvbiIsIl9lcnJvciIsIm1vZGVsIiwic2V0TW9kZWwiLCJzcGVjcyIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwiY29kZSIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwidGV4dCIsImRhdGEiLCJlbmRwb2ludCIsInVuZGVmaW5lZCIsIml0ZW1zIiwidGVzdCIsImludml0ZSIsInJlcyIsIkVycm9yIiwiY2FuY2VsSW52aXRhdGlvbiIsImRlbGV0ZSIsImVtYWlsIiwiam9pbiIsImFwcHJvdmUiLCJyZW1vdmVNZW1iZXIiLCJ1aWQiLCJyZWplY3QiLCJyZXF1ZXN0QWNjZXNzIiwibWVzc2FnZSIsIm5hbWUiLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsImN1cnJlbnRSb2xlIiwiaW52aXRlZCIsInB1c2giLCJzZXQiLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciIsInRvTG93ZXJDYXNlIiwiYWNjZXNzIiwiX3Byb3ZpZGVyIiwiTExNcyIsIkxMTVByb3ZpZGVyIiwiTExNIiwidHlwZSIsInBsYXlncm91bmQiLCJtYXAiLCJfY29sbGVjdGlvbjIiLCJQcm9qZWN0cyIsIlByb2plY3QiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJyZW1vdmUiLCJfaXRlbTIiLCJQcm9tcHRzIiwicHJvbXB0cyIsImRlcGVuZGVuY2llcyIsImZ1bmN0aW9ucyIsIlByb21wdFRlbXBsYXRlIiwib3V0cHV0IiwiaXMiLCJfc3RhcnR1cCIsIkV4ZWN1dG9yIiwic2RrQ29uZmlnIiwiZXhlY3V0ZSIsImV4ZWN1dGVQcm9tcHQiLCJleGVjdXRvciIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcHJvdmlkZXJzIiwiUHJvbXB0VGVtcGxhdGVQcm92aWRlciIsIlByb21wdCIsIl9sYW5ndWFnZSIsIlByb21wdExhbmd1YWdlVGVtcGxhdGUiLCJQcm9tcHRUZW1wbGF0ZUxhbmd1YWdlc1Byb3ZpZGVyIiwic2V0TGFuZ3VhZ2VBbmRUZXh0IiwibGFuZ3VhZ2UiLCJzYXZlVHJhbnNsYXRlIiwibGl0ZXJhbHMiLCJwcm9qZWN0IiwiY3JlYXRlIiwibGFuZ3VhZ2VzIiwidXBkYXRlIiwiYm9keSIsImFzc2lnbiIsInB1dCIsImxvYWRMYW5ndWFnZSIsInNhdmVMYW5ndWFnZSIsImdlbmVyYXRlTGFuZ3VhZ2VzIiwiaWRlbnRpZmllciIsInByb2Nlc3MiLCJQcm9tcHRSZXNvbHZlciIsInJlc29sdmUiLCJwcm9tcHQiLCJwcmVmaXgiLCJsaXRlcmFsVmFsdWVzIiwic3RyaW5nVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZXhwYW5kZWQiLCJwYXJzZWQiLCJ2aXNpdGVkIiwiU2V0Iiwid2FsayIsImRlcHRoIiwid2FybiIsInJlcGxhY2UiLCJfbWF0Y2giLCJyYXdJZCIsImhhcyIsImRlcGVuZGVuY3kiLCJmaW5kIiwidG9VcHBlckNhc2UiLCJ0cmltIiwiYWRkIiwiZGVwZW5kZW5jeVZhbHVlIiwicmVzb2x2ZWQiLCJsaXRlcmFsIiwiUmVnRXhwIiwicGFyc2VkUHJvbXB0IiwiQXJyYXkiLCJmcm9tIiwiYW5hbHl6ZSIsImxvZyIsInBsYWNlaG9sZGVycyIsIm1hdGNoQWxsIiwibSIsInVuaXF1ZVBsYWNlaG9sZGVycyIsIl9wcm9tcHRzIiwiU2NoZW1hIiwibGFuZyIsInNjaGVtYSIsIkdUcmFuc2xhdGUiLCJpc1JlYWR5IiwidHJhbnNsYXRlVGV4dCIsImZvcm1hdCIsIkdUUkFOU0xBVEVfQVBJX0tFWSIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInEiLCJ0YXJnZXQiLCJvayIsImpzb24iLCJ0cmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGVkVGV4dCIsIl9nVHJhbnNsYXRlIiwiQXBwR1RyYW5zbGF0ZSIsImdsb2JhbFRoaXMiLCJhcHAiLCJfem9kIiwiVXNlciIsInoiLCJvYmplY3QiLCJzdHJpbmciLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwib3B0aW9uYWwiLCJwaG9uZU51bWJlciIsImFnZSIsIm51bWJlciIsInRlYWNoZXIiLCJib29sZWFuIiwiYWNjZXNzaWJpbGl0eSIsInJvbGVzIiwiYXJyYXkiLCJwcm9wcyIsIlVzZXJQcm92aWRlciIsImZpcmViYXNlVG9rZW4iLCJXcmFwcGVyIiwiZ2V0UHJvbXB0cyIsIl93cmFwcGVyIiwiQXBwV3JhcHBlciIsInByb21wdEFjdGl2aXRpZXMiLCJTWVNURU0iLCJJUEUiLCJTVU1NQVJZIiwiZGViYXRlIiwiZXhlcmNpc2UiLCJBY3Rpdml0eU1hbmFnZXIiLCJhY3Rpdml0aWVzIiwicHJvbXB0TWFuYWdlciIsImN1cnJlbnRNb2RlbElkIiwiaW1wb3J0IiwiYWN0aXZpdHlJZCIsImFjdGl2aXR5IiwiaWRzIiwic3lzdGVtIiwiaXBlIiwic3VtbWFyeSIsInByb2Nlc3NJbXBvcnRlZFByb21wdHMiLCJyZWluaXRpYWxpemUiLCJtb2RlbElkIiwiYWN0aXZpdHlQcm9tcHRzIiwicHJvbXB0RGF0YSIsInZhbHVlcyIsImtleSIsImFkZEl0ZW1zIiwiZ2V0Q3VycmVudEFjdGl2aXR5IiwiY2xlYXJDdXJyZW50QWN0aXZpdHkiLCJnZXRBbGxBY3Rpdml0aWVzIiwiZmluZEFjdGl2aXR5QnlOYW1lIiwiZmluZEFjdGl2aXR5QnlJZCIsInNldFBhcmVudCIsIkFjdGl2aXR5QWdlbnRzIiwiQWN0aXZpdHlBZ2VudFByb3ZpZGVyIiwiQWN0aXZpdHlBZ2VudCIsIl9hY3Rpdml0eU1hbmFnZXIiLCJfYWN0aXZpdGllcyIsImdldEFjdGl2aXR5QWdlbnRzIiwiX2NoYXQiLCJfbWVzc2FnZXMiLCJfbWVzc2FnZSIsIl9pbnRlcmFjdGlvbk1hbmFnZXIiLCJfdXVpZCIsIlBsYXlncm91bmRDaGF0IiwiYW5zd2VyIiwiaW50ZXJhY3Rpb25NYW5hZ2VyIiwiQ2hhdE1lc3NhZ2VzIiwiQ2hhdFByb3ZpZGVyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwidG90YWxJbnRlcmFjdGlvbnMiLCJtZXNzYWdlcyIsIm9uIiwiaGFuZGxlU3lzdGVtTWVzc2FnZSIsImJpbmQiLCJzZW5kTWVzc2FnZSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJmaWxlcyIsImludGVyYWN0aW9ucyIsImdldEludGVyYWN0aW9ucyIsIm1zZyIsIkNoYXRNZXNzYWdlIiwidjQiLCJjb250ZW50IiwicmVnaXN0ZXIiLCJwYXJhbWV0ZXJzIiwicGFyYW1ldGVyIiwicGFyc2UiLCJoaXN0b3J5IiwicmVzcG9uc2VNZXNzYWdlIiwiZ2V0SW50ZXJhY3Rpb25Db3VudCIsImhhc0ludGVyYWN0aW9ucyIsImNsZWFySW50ZXJhY3Rpb25zIiwiaGFuZGxlQ2hhdFByb21wdCIsImhhbmRsZUNoYXRBbnN3ZXIiLCJjYWxjdWxhdGVUb3RhbEludGVyYWN0aW9ucyIsIk1hdGgiLCJtaW4iLCJjcmVhdGVFbXB0eUludGVyYWN0aW9uIiwidG90YWxNZXNzYWdlcyIsInRvdGFsIiwib3JpZ2luYWxJbnRlcmFjdGlvbnMiLCJzbGljZSIsImZpbGwiLCJjbGVhciIsIl9hY3Rpdml0eUFnZW50cyIsIl9wcm9tcHRNYW5hZ2VyIiwiX3BsYXlncm91bmQiLCJfc2NoZW1hIiwiUGxheWdyb3VuZCIsImFjdGl2aXR5TWFuYWdlciIsImNoYXQiLCJtb2RlbHMiLCJlcnJvcnMiLCJyZXNvbHZlciIsInJlc2VydmVkTGl0ZXJhbHMiLCJnbG9iYWxMaXRlcmFscyIsIlBsYXlncm91bmRQcm92aWRlciIsIlByb21wdE1hbmFnZXIiLCJpbml0aWFsaXplIiwibG9hZE1vZGVscyIsImNvbXBsZXRlSW5pdGlhbGl6YXRpb24iLCJnZXRNb2RlbHMiLCJoYW5kbGVNb2RlbExvYWRFcnJvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJwcm9tcHRTY2hlbWEiLCJTQ0hFTUEiLCJidWlsZEV4ZWN1dGlvblNwZWNzIiwicmVzdWx0IiwicHJvY2Vzc0V4ZWN1dGlvblJlc3VsdCIsInRlbXBlcmF0dXJlIiwiUHJvbXB0RXhlY3V0b3IiLCJfZGVwZW5kZW5jaWVzIiwiX3RlbXBsYXRlcyIsIl9wcm9tcHQiLCJQcm9tcHRzQ29sbGVjdGlvbiIsInRlbXBsYXRlcyIsIlBST01QVF9URU1QTEFURVMiLCJQUk9NUFRfREVQRU5ERU5DSUVTIiwiY2FjaGUiLCJzeXN0ZW1Qcm9tcHQiLCJjdXN0b21MaXRlcmFscyIsInNldEl0ZW1zIiwibG9hZENhY2hlIiwiY2FjaGVEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldExpdGVyYWwiLCJzYXZlQ2FjaGUiLCJnZXRQcm9wZXJ0aWVzIiwic2V0SXRlbSIsInNhdmUiLCJIRUFERVJfSlNPTiIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0JFR0lOIiwiRURVQ0FUSU9OQUxfQ09OVEVYVCIsIkNPTlZFUlNBVElPTl9TVU1NQVJZX0VORElORyIsIklURVJBVElWRV9QUk9HUkVTU19FVkFMVUFUSU9OX0JFR0lOX1YyIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fRU5ESU5HX1YyIiwiUFJPTVBUU19EQVRBIiwiX3Jlc29sdmVyIiwiX3Byb21wdEhpc3RvcnkiLCJfbGl0ZXJhbCIsIkdsb2JhbExpdGVyYWxzIiwiVFlQRVMiLCJTVE9SQUdFX0tFWSIsImRlZmF1bHRJdGVtcyIsIm5hbWVzIiwiZ2xvYmFsIiwicmVzZXJ2ZWQiLCJMaXRlcmFsIiwiaW5jbHVkZXMiLCJhZGRNYW55IiwidXBkYXRlUmVzZXJ2ZWROYW1lcyIsInJlc2VydmVkTmFtZXMiLCJTVEFUVVNfUkFOSyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsIlZBTElEX1NUQVRVU0VTIiwiUmVzZXJ2ZWRMaXRlcmFscyIsIlBST01QVCIsIlBSRVZJT1VTIiwiYXNzaXN0YW50cyIsIkFOU1dFUiIsIklOSVRJQUxfUFJPR1JFU1NfU1RBVEUiLCJwcm9ncmVzcyIsIlBST0dSRVNTIiwiZm9udWRlZCIsInJldmVyc2UiLCJsYXN0TWVzc2FnZSIsImdldERlZmF1bHRPYmplY3RpdmVzIiwibWVyZ2VPYmplY3RpdmVzIiwiY3VycmVudCIsInByZXZpb3VzIiwib2xkT2JqZWN0aXZlc01hcCIsInJlZHVjZSIsIm9iaiIsIm1lcmdlZE1hcCIsIm9sZE9iaiIsIm9sZFJhbmsiLCJuZXdSYW5rIiwiY3VycmVudE5hbWVzIiwibyIsImdldFJlYWNoZWRPYmplY3RpdmVOYW1lcyIsIm9iamVjdGl2ZXMiLCJpcGVQcm9tcHQiLCJzaXplIiwiaXNWYWxpZFJlc3VsdCIsImxhc3QiLCJhdCIsIm9sZFBhcnNlZCIsIm1lcmdlZE9iamVjdGl2ZXMiLCJyZWFjaGVkIiwibWVyZ2VkIiwic3RyaWN0IiwiYWxlcnQiLCJoYW5kbGVFcnJvciIsIndpbmRvdyIsIk5PREVfRU5WIiwiaXNBcnJheSIsIlByb21wdEhpc3RvcnkiLCJleGVjU2VxIiwiZGVwcyIsInJlcGxhY2VBbGwiLCJnZXRMaXRlcmFsIiwibm90aWZ5IiwicmVnaXN0ZXJMaXRlcmFscyIsInJlbW92ZUxpdGVyYWxzIiwiaW5kZXhPZiIsInJlY29yZEV4ZWN1dGlvbiIsImVudHJ5IiwidG9TdHJpbmciLCJpbnB1dCIsIl9nbG9iYWxMaXRlcmFscyIsIl9yZXNlcnZlZCIsImluaXRpYWxpemVkIiwiaW5pdGlhbGl6ZURlZmF1bHRQcm9tcHRzIiwicHJvY2Vzc2VkIiwibCIsImRlcGVuZGVuY3lOYW1lcyIsInBhcnNlZFByb21wdHMiLCJpc0RlcGVuZGVuY3kiLCJ0b0FkZCIsImRlcGgiLCJfbSIsImRlcCIsImV4cGFuZGVkVmFsdWUiLCJmaW5hbFZhbHVlIiwicmVwbGFjZVN0cmluZyIsInN0ciIsImlzR2xvYmFsIiwiaXNSZXNlcnZlZCIsImdsb2JhbExpdGVyYWwiLCJfY29yZSIsInN0cmVhbU1lc3NhZ2UiLCJ1cmkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJvbkZpbmlzaCIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJtdWx0aXBhcnQiLCJzZXJ2ZXJBcGkiLCJsb2NhbEtleSIsInNwbGl0IiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImV4cGVjdGVkIiwiY29udHJhZGlzdGluY3Rpb24iLCJpbnRlZ3JhdGlvbiIsImVudW0iLCJyZXF1aXJlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYW55T2YiLCJTdHVkZW50Q29tcGV0ZW5jaWVzIiwiU3R1ZGVudENvbXBldGVuY3lQcm92aWRlciIsIlN0dWRlbnRDb21wZXRlbmN5IiwiX2luZGV4IiwiY3JlYXRlU3R1ZGVudENvbXBldGVuY3lFeGFtcGxlIiwiY29tcGV0ZW5jeSIsInN0dWRlbnRfaWQiLCJjb21wZXRlbmN5X2lkIiwic3ViamVjdF9pZCIsImF2ZXJhZ2Vfc2NvcmUiLCJsZXZlbF9lc3RpbWF0ZSIsImV2aWRlbmNlX2NvdW50IiwibGFzdF91cGRhdGVkIiwidG9JU09TdHJpbmciLCJ1c2VTdHVkZW50Q29tcGV0ZW5jaWVzQ29sbGVjdGlvbiIsImNvbXBldGVuY2llcyIsImNyZWF0ZUFuZFB1Ymxpc2hDb21wZXRlbmN5IiwibG9hZFNwZWNpZmljQ29tcGV0ZW5jeSIsImdldENvbXBldGVuY2llc0J5U3R1ZGVudCIsInN0dWRlbnRJZCIsInVwZGF0ZUNvbXBldGVuY3kiLCJ1cGRhdGVzIiwiZGVsZXRlQ29tcGV0ZW5jeSIsImludCIsInRlc3RTdHVkZW50Q29tcGV0ZW5jeUNyZWF0aW9uIiwidGVzdFN0dWRlbnRDb21wZXRlbmNpZXNDb2xsZWN0aW9uIiwidGVzdFNjaGVtYVZhbGlkYXRpb24iLCJ2YWxpZENvbXBldGVuY3kiLCJydW5BbGxUZXN0cyIsInRlc3RzIiwicGFzc2VkVGVzdHMiLCJ0b3RhbFRlc3RzIiwiSVBFU3RhdHVzIiwic2VhcmNoIiwicXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ1cGRhdGVkQ2F0ZWdvcnkiLCJXaWtpcyIsIldpa2kiLCJnZXRCeUNhdGVnb3J5IiwiY2F0ZWdvcnlJZCIsIl9jYXRlZ29yaWVzIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2V4cG9ydE5hbWVzIiwiZW51bWVyYWJsZSIsIm5ld1dpa2kiLCJ1cGRhdGVkV2lraSJdLCJzb3VyY2VzIjpbIi9jb3JlL2NhdGVnb3JpZXMvY29sbGVjdGlvbi50cyIsIi9jb3JlL2NhdGVnb3JpZXMvaXRlbS1wcm92aWRlci50cyIsIi9jb3JlL2NhdGVnb3JpZXMvaXRlbS50cyIsIi9jb3JlL2dyb3Vwcy9jb2xsZWN0aW9uLnRzIiwiL2NvcmUvZ3JvdXBzL2RhdGEtcHJvdmlkZXIudHMiLCIvY29yZS9ncm91cHMvZXJyb3IudHMiLCIvY29yZS9ncm91cHMvaXRlbS50cyIsIi9jb3JlL2xsbXMvY29sbGVjdGlvbi50cyIsIi9jb3JlL2xsbXMvaXRlbS50cyIsIi9jb3JlL2xsbXMvcHJvdmlkZXIudHMiLCIvY29yZS9wcm9qZWN0cy9jb2xsZWN0aW9uLnRzIiwiL2NvcmUvcHJvamVjdHMvY29sbGVjdGlvbi9wcm92aWRlci9jb2xsZWN0aW9uLnRzIiwiL2NvcmUvcHJvamVjdHMvY29sbGVjdGlvbi9wcm92aWRlci9pdGVtLnRzIiwiL2NvcmUvcHJvamVjdHMvaXRlbS50cyIsIi9jb3JlL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi9jb3JlL3Byb21wdHMvZXhlY3V0b3IudHMiLCIvaW50ZXJmYWNlcy50cyIsIi9jb3JlL3Byb21wdHMvaXRlbS9pbmRleC50cyIsIi9jb3JlL3Byb21wdHMvaXRlbS9sYW5ndWFnZS10ZW1wbGF0ZS50cyIsIi9jb3JlL3Byb21wdHMvaXRlbS9wcm92aWRlcnMvaW5kZXgudHMiLCIvY29yZS9wcm9tcHRzL2l0ZW0vcHJvdmlkZXJzL2xhbmd1YWdlLnRzIiwiL2NvcmUvcHJvbXB0cy9wcm92aWRlci50cyIsIi9jb3JlL3Byb21wdHMvcmVzb2x2ZXIudHMiLCIvY29yZS9zY2hlbWFzL2l0ZW0udHMiLCIvY29yZS9zY2hlbWFzL3Byb3ZpZGVyLnRzIiwiL2NvcmUvdHJhbnNsYXRlL2luZGV4LnRzIiwiL2ludGVyZmFjZS50cyIsIi9jb3JlL3VzZXJzL2l0ZW0udHMiLCIvY29yZS91c2Vycy9wcm92aWRlci50cyIsIi9jb3JlL3dyYXBwZXIvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9hY3Rpdml0aWVzLnRzIiwiL3BsYXlncm91bmQvYWN0aXZpdHktYWdlbnRzL2FjdGl2aXR5LW1hbmFnZXIudHMiLCIvcGxheWdyb3VuZC9hY3Rpdml0eS1hZ2VudHMvY29sbGVjdGlvbi50cyIsIi9wbGF5Z3JvdW5kL2FjdGl2aXR5LWFnZW50cy9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL2FjdGl2aXR5LWFnZW50cy9pdGVtLnRzIiwiL3BsYXlncm91bmQvYWN0aXZpdHktYWdlbnRzL3Byb3ZpZGVyLnRzIiwiL3BsYXlncm91bmQvY2hhdC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvaW50ZXJhY3Rpb24tbWFuYWdlci50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZS50cyIsIi9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZXMudHMiLCIvcGxheWdyb3VuZC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdC1leGVjdXRvci50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvZGF0YS9kZXBlbmRlbmNpZXMudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvbGl0ZXJhbHMvZ2xvYmFsLWxpdGVyYWxzLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9saXRlcmFscy9yZXNlcnZlZC9pbmRleC50cyIsIi9wbGF5Z3JvdW5kL3Byb21wdHMvcHJvbXB0LWhpc3RvcnkudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL3Byb21wdC1tYW5hZ2VyLnRzIiwiL3BsYXlncm91bmQvcHJvbXB0cy9wcm9tcHQudHMiLCIvcGxheWdyb3VuZC9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiL3BsYXlncm91bmQvcHJvdmlkZXJzL2NoYXQudHMiLCIvcGxheWdyb3VuZC9wcm92aWRlcnMvcGxheWdyb3VuZC50cyIsIi9wbGF5Z3JvdW5kL3NjaGVtYS50cyIsIi9wbGF5Z3JvdW5kL3N0dWRlbnQtY29tcGV0ZW5jaWVzL2NvbGxlY3Rpb24udHMiLCIvcGxheWdyb3VuZC9zdHVkZW50LWNvbXBldGVuY2llcy9leGFtcGxlLnRzIiwiL3BsYXlncm91bmQvc3R1ZGVudC1jb21wZXRlbmNpZXMvaW5kZXgudHMiLCIvcGxheWdyb3VuZC9zdHVkZW50LWNvbXBldGVuY2llcy9pdGVtLnRzIiwiL3BsYXlncm91bmQvc3R1ZGVudC1jb21wZXRlbmNpZXMvcHJvdmlkZXIudHMiLCIvcGxheWdyb3VuZC9zdHVkZW50LWNvbXBldGVuY2llcy90ZXN0LnRzIiwiL3BsYXlncm91bmQvdHlwZXMudHMiLCIvd2lraS9jYXRlZ29yaWVzL2NvbGxlY3Rpb24udHMiLCIvd2lraS9jYXRlZ29yaWVzL2luZGV4LnRzIiwiL3dpa2kvY2F0ZWdvcmllcy9pdGVtLXByb3ZpZGVyLnRzIiwiL3dpa2kvY2F0ZWdvcmllcy9pdGVtLnRzIiwiL3dpa2kvY29sbGVjdGlvbi50cyIsIi93aWtpL2luZGV4LnRzIiwiL3dpa2kvaXRlbS1wcm92aWRlci50cyIsIi93aWtpL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLElBQUEs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