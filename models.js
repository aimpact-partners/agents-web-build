System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/http-suite@0.1.1/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/reactive@2.1.1/entities/item", "@aimpact/chat-sdk@1.5.5/startup", "@beyond-js/kernel@0.1.14/core", "@aimpact/agents-client@0.0.29/prompts", "zod@3.25.76", "uuid@11.1.0"], function (_export, _context) {
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
    }, function (_beyondJsKernel0114Core) {
      dependency_8 = _beyondJsKernel0114Core;
    }, function (_aimpactAgentsClient0029Prompts) {
      dependency_9 = _aimpactAgentsClient0029Prompts;
    }, function (_zod2) {
      dependency_10 = _zod2;
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/platform/config', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@aimpact/chat-sdk/startup', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@aimpact/agents-client/prompts', dependency_9], ['zod', dependency_10], ['uuid', dependency_11]]);
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
        hash: 1658492239,
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
                properties: ['id', 'project', 'projectId', 'identifier', 'name', 'is', 'format', 'value', 'literals', 'language']
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
        hash: 671870834,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateProvider = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _model = require("@beyond-js/reactive/model");
          var _startup = require("@aimpact/chat-sdk/startup");
          var _core = require("@beyond-js/kernel/core");
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
              const promise = new _core.PendingPromise();
              const response = await this.#api.post('/prompts/templates', data);
              if (!response.status) {
                throw new Error(response.error || 'Error creating prompt template');
              }
              return response;
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
        hash: 779812934,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateLanguagesProvider = void 0;
          var _startup = require("@aimpact/chat-sdk/startup");
          var _api = require("@beyond-js/http-suite/api");
          class PromptTemplateLanguagesProvider {
            #api;
            #parent;
            constructor(parent) {
              this.#api = new _api.Api(_startup.sdkConfig.api);
              this.#parent = parent;
            }
            async load(specs) {
              const name = specs?.name || this.#parent['#specs']?.name;
              const language = specs?.language || this.#parent.language?.default;
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
        hash: 3827837879,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWdlbnRzIiwibGlzdCIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJnZXQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZXhwb3J0cyIsIl9tb2RlbCIsIkl0ZW1Qcm92aWRlciIsIlJlYWN0aXZlTW9kZWwiLCJwYXJlbnQiLCJsb2FkIiwiaWQiLCJfaXRlbVByb3ZpZGVyIiwicHJvdmlkZXIiLCJwdWJsaXNoIiwibmV3Q2F0ZWdvcnkiLCJwb3N0IiwicHJvamVjdElkIiwiZ2V0TGlzdCIsIl9kYXRhUHJvdmlkZXIiLCJHcm91cHMiLCJEYXRhUHJvdmlkZXIiLCJfc2Vzc2lvbiIsIl9lcnJvciIsIm1vZGVsIiwic2V0TW9kZWwiLCJzcGVjcyIsInRva2VuIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwiYmVhcmVyIiwiY29kZSIsInN0YXR1cyIsIkN1c3RvbUVycm9yIiwidGV4dCIsImRhdGEiLCJlbmRwb2ludCIsInVuZGVmaW5lZCIsIml0ZW1zIiwidGVzdCIsImludml0ZSIsInJlcyIsIkVycm9yIiwiY2FuY2VsSW52aXRhdGlvbiIsImRlbGV0ZSIsImVtYWlsIiwiam9pbiIsImFwcHJvdmUiLCJyZW1vdmVNZW1iZXIiLCJ1aWQiLCJyZWplY3QiLCJyZXF1ZXN0QWNjZXNzIiwibWVzc2FnZSIsIm5hbWUiLCJHcm91cEl0ZW0iLCJJdGVtIiwiaGFzQWNjZXNzIiwibWVtYmVycyIsIm1hbmFnZXJzIiwicGVuZGluZ3MiLCJyZWdpc3RlcmVkIiwiTWFwIiwiaXNBZG1pbiIsImF1dGhvcml6ZWRQZW9wbGUiLCJwZW9wbGUiLCJmaWx0ZXIiLCJpIiwiYXV0aG9yaXplZCIsInJlYWR5IiwicHJvcGVydGllcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic29tZSIsInJvbGUiLCJjaGVja01lbWJlciIsInBlcnNvbiIsImN1cnJlbnRSb2xlIiwiaW52aXRlZCIsInB1c2giLCJzZXQiLCJmb3JFYWNoIiwicGVuZGluZ0luZGV4IiwiZmluZEluZGV4IiwicCIsInBlbmRpbmdNZW1iZXIiLCJzcGxpY2UiLCJ0cmlnZ2VyRXZlbnQiLCJhcmdzIiwibWVtYmVyIiwidHJpZ2dlciIsInRvTG93ZXJDYXNlIiwiYWNjZXNzIiwiX3Byb3ZpZGVyIiwiTExNcyIsIkxMTVByb3ZpZGVyIiwiTExNIiwidHlwZSIsInBsYXlncm91bmQiLCJtYXAiLCJfY29sbGVjdGlvbjIiLCJQcm9qZWN0cyIsIlByb2plY3QiLCJDb2xsZWN0aW9uUHJvdmlkZXIiLCJyZW1vdmUiLCJfaXRlbTIiLCJQcm9tcHRzIiwicHJvbXB0cyIsImRlcGVuZGVuY2llcyIsImZ1bmN0aW9ucyIsIlByb21wdFRlbXBsYXRlIiwib3V0cHV0IiwiaXMiLCJfc3RhcnR1cCIsIkV4ZWN1dG9yIiwic2RrQ29uZmlnIiwiZXhlY3V0ZSIsImV4ZWN1dGVQcm9tcHQiLCJleGVjdXRvciIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfcHJvdmlkZXJzIiwiUHJvbXB0VGVtcGxhdGVQcm92aWRlciIsIlByb21wdCIsIl9sYW5ndWFnZSIsIlByb21wdExhbmd1YWdlVGVtcGxhdGUiLCJQcm9tcHRUZW1wbGF0ZUxhbmd1YWdlc1Byb3ZpZGVyIiwic2V0TGFuZ3VhZ2VBbmRUZXh0IiwibGFuZ3VhZ2UiLCJzYXZlVHJhbnNsYXRlIiwibGl0ZXJhbHMiLCJwcm9qZWN0IiwiX2NvcmUiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJjcmVhdGUiLCJsYW5ndWFnZXMiLCJ1cGRhdGUiLCJib2R5IiwiYXNzaWduIiwicHV0IiwibG9hZExhbmd1YWdlIiwic2F2ZUxhbmd1YWdlIiwiZ2VuZXJhdGVMYW5ndWFnZXMiLCJpZGVudGlmaWVyIiwicHJvY2VzcyIsIlByb21wdFJlc29sdmVyIiwicmVzb2x2ZSIsInByb21wdCIsInByZWZpeCIsImxpdGVyYWxWYWx1ZXMiLCJzdHJpbmdWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHBhbmRlZCIsInBhcnNlZCIsInZpc2l0ZWQiLCJTZXQiLCJ3YWxrIiwiZGVwdGgiLCJ3YXJuIiwicmVwbGFjZSIsIl9tYXRjaCIsInJhd0lkIiwiaGFzIiwiZGVwZW5kZW5jeSIsImZpbmQiLCJ0b1VwcGVyQ2FzZSIsInRyaW0iLCJhZGQiLCJkZXBlbmRlbmN5VmFsdWUiLCJyZXNvbHZlZCIsImxpdGVyYWwiLCJSZWdFeHAiLCJwYXJzZWRQcm9tcHQiLCJBcnJheSIsImZyb20iLCJhbmFseXplIiwicGxhY2Vob2xkZXJzIiwibWF0Y2hBbGwiLCJtIiwidW5pcXVlUGxhY2Vob2xkZXJzIiwiX3Byb21wdHMiLCJTY2hlbWEiLCJsYW5nIiwibG9nIiwic2NoZW1hIiwiR1RyYW5zbGF0ZSIsImlzUmVhZHkiLCJ0cmFuc2xhdGVUZXh0IiwiZm9ybWF0IiwiR1RSQU5TTEFURV9BUElfS0VZIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicSIsInRhcmdldCIsIm9rIiwianNvbiIsInRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZWRUZXh0IiwiX2dUcmFuc2xhdGUiLCJBcHBHVHJhbnNsYXRlIiwiZ2xvYmFsVGhpcyIsImFwcCIsIl96b2QiLCJVc2VyIiwieiIsIm9iamVjdCIsInN0cmluZyIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJvcHRpb25hbCIsInBob25lTnVtYmVyIiwiYWdlIiwibnVtYmVyIiwidGVhY2hlciIsImJvb2xlYW4iLCJhY2Nlc3NpYmlsaXR5Iiwicm9sZXMiLCJhcnJheSIsInByb3BzIiwiVXNlclByb3ZpZGVyIiwiZmlyZWJhc2VUb2tlbiIsIldyYXBwZXIiLCJnZXRQcm9tcHRzIiwiX3dyYXBwZXIiLCJBcHBXcmFwcGVyIiwicHJvbXB0QWN0aXZpdGllcyIsIlNZU1RFTSIsIklQRSIsIlNVTU1BUlkiLCJkZWJhdGUiLCJleGVyY2lzZSIsIkFjdGl2aXR5TWFuYWdlciIsImFjdGl2aXRpZXMiLCJwcm9tcHRNYW5hZ2VyIiwiY3VycmVudE1vZGVsSWQiLCJpbXBvcnQiLCJhY3Rpdml0eUlkIiwiYWN0aXZpdHkiLCJpZHMiLCJzeXN0ZW0iLCJpcGUiLCJzdW1tYXJ5IiwicHJvY2Vzc0ltcG9ydGVkUHJvbXB0cyIsInJlaW5pdGlhbGl6ZSIsIm1vZGVsSWQiLCJhY3Rpdml0eVByb21wdHMiLCJwcm9tcHREYXRhIiwidmFsdWVzIiwia2V5IiwiYWRkSXRlbXMiLCJnZXRDdXJyZW50QWN0aXZpdHkiLCJjbGVhckN1cnJlbnRBY3Rpdml0eSIsImdldEFsbEFjdGl2aXRpZXMiLCJmaW5kQWN0aXZpdHlCeU5hbWUiLCJmaW5kQWN0aXZpdHlCeUlkIiwic2V0UGFyZW50IiwiQWN0aXZpdHlBZ2VudHMiLCJBY3Rpdml0eUFnZW50UHJvdmlkZXIiLCJBY3Rpdml0eUFnZW50IiwiX2FjdGl2aXR5TWFuYWdlciIsIl9hY3Rpdml0aWVzIiwiZ2V0QWN0aXZpdHlBZ2VudHMiLCJfY2hhdCIsIl9tZXNzYWdlcyIsIl9tZXNzYWdlIiwiX2ludGVyYWN0aW9uTWFuYWdlciIsIl91dWlkIiwiUGxheWdyb3VuZENoYXQiLCJhbnN3ZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXIiLCJDaGF0TWVzc2FnZXMiLCJDaGF0UHJvdmlkZXIiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJ0b3RhbEludGVyYWN0aW9ucyIsIm1lc3NhZ2VzIiwib24iLCJoYW5kbGVTeXN0ZW1NZXNzYWdlIiwiYmluZCIsInNlbmRNZXNzYWdlIiwic2V0dXBFdmVudExpc3RlbmVycyIsImZpbGVzIiwiaW50ZXJhY3Rpb25zIiwiZ2V0SW50ZXJhY3Rpb25zIiwibXNnIiwiQ2hhdE1lc3NhZ2UiLCJ2NCIsImNvbnRlbnQiLCJyZWdpc3RlciIsInBhcmFtZXRlcnMiLCJwYXJhbWV0ZXIiLCJwYXJzZSIsImhpc3RvcnkiLCJyZXNwb25zZU1lc3NhZ2UiLCJnZXRJbnRlcmFjdGlvbkNvdW50IiwiaGFzSW50ZXJhY3Rpb25zIiwiY2xlYXJJbnRlcmFjdGlvbnMiLCJoYW5kbGVDaGF0UHJvbXB0IiwiaGFuZGxlQ2hhdEFuc3dlciIsImNhbGN1bGF0ZVRvdGFsSW50ZXJhY3Rpb25zIiwiTWF0aCIsIm1pbiIsImNyZWF0ZUVtcHR5SW50ZXJhY3Rpb24iLCJ0b3RhbE1lc3NhZ2VzIiwidG90YWwiLCJvcmlnaW5hbEludGVyYWN0aW9ucyIsInNsaWNlIiwiZmlsbCIsImNsZWFyIiwiX2FjdGl2aXR5QWdlbnRzIiwiX3Byb21wdE1hbmFnZXIiLCJfcGxheWdyb3VuZCIsIl9zY2hlbWEiLCJQbGF5Z3JvdW5kIiwiYWN0aXZpdHlNYW5hZ2VyIiwiY2hhdCIsIm1vZGVscyIsImVycm9ycyIsInJlc29sdmVyIiwicmVzZXJ2ZWRMaXRlcmFscyIsImdsb2JhbExpdGVyYWxzIiwiUGxheWdyb3VuZFByb3ZpZGVyIiwiUHJvbXB0TWFuYWdlciIsImluaXRpYWxpemUiLCJsb2FkTW9kZWxzIiwiY29tcGxldGVJbml0aWFsaXphdGlvbiIsImdldE1vZGVscyIsImhhbmRsZU1vZGVsTG9hZEVycm9yIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsInByb21wdFNjaGVtYSIsIlNDSEVNQSIsImJ1aWxkRXhlY3V0aW9uU3BlY3MiLCJyZXN1bHQiLCJwcm9jZXNzRXhlY3V0aW9uUmVzdWx0IiwidGVtcGVyYXR1cmUiLCJQcm9tcHRFeGVjdXRvciIsIl9kZXBlbmRlbmNpZXMiLCJfdGVtcGxhdGVzIiwiX3Byb21wdCIsIlByb21wdHNDb2xsZWN0aW9uIiwidGVtcGxhdGVzIiwiUFJPTVBUX1RFTVBMQVRFUyIsIlBST01QVF9ERVBFTkRFTkNJRVMiLCJjYWNoZSIsInN5c3RlbVByb21wdCIsImN1c3RvbUxpdGVyYWxzIiwic2V0SXRlbXMiLCJsb2FkQ2FjaGUiLCJjYWNoZURhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0TGl0ZXJhbCIsInNhdmVDYWNoZSIsImdldFByb3BlcnRpZXMiLCJzZXRJdGVtIiwic2F2ZSIsIkhFQURFUl9KU09OIiwiQ09OVkVSU0FUSU9OX1NVTU1BUllfQkVHSU4iLCJFRFVDQVRJT05BTF9DT05URVhUIiwiQ09OVkVSU0FUSU9OX1NVTU1BUllfRU5ESU5HIiwiSVRFUkFUSVZFX1BST0dSRVNTX0VWQUxVQVRJT05fQkVHSU5fVjIiLCJJVEVSQVRJVkVfUFJPR1JFU1NfRVZBTFVBVElPTl9FTkRJTkdfVjIiLCJQUk9NUFRTX0RBVEEiLCJfcmVzb2x2ZXIiLCJfcHJvbXB0SGlzdG9yeSIsIl9saXRlcmFsIiwiR2xvYmFsTGl0ZXJhbHMiLCJUWVBFUyIsIlNUT1JBR0VfS0VZIiwiZGVmYXVsdEl0ZW1zIiwibmFtZXMiLCJnbG9iYWwiLCJyZXNlcnZlZCIsIkxpdGVyYWwiLCJpbmNsdWRlcyIsImFkZE1hbnkiLCJ1cGRhdGVSZXNlcnZlZE5hbWVzIiwicmVzZXJ2ZWROYW1lcyIsIlNUQVRVU19SQU5LIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwiVkFMSURfU1RBVFVTRVMiLCJSZXNlcnZlZExpdGVyYWxzIiwiUFJPTVBUIiwiUFJFVklPVVMiLCJhc3Npc3RhbnRzIiwiQU5TV0VSIiwiSU5JVElBTF9QUk9HUkVTU19TVEFURSIsInByb2dyZXNzIiwiUFJPR1JFU1MiLCJmb251ZGVkIiwicmV2ZXJzZSIsImxhc3RNZXNzYWdlIiwiZ2V0RGVmYXVsdE9iamVjdGl2ZXMiLCJtZXJnZU9iamVjdGl2ZXMiLCJjdXJyZW50IiwicHJldmlvdXMiLCJvbGRPYmplY3RpdmVzTWFwIiwicmVkdWNlIiwib2JqIiwibWVyZ2VkTWFwIiwib2xkT2JqIiwib2xkUmFuayIsIm5ld1JhbmsiLCJjdXJyZW50TmFtZXMiLCJvIiwiZ2V0UmVhY2hlZE9iamVjdGl2ZU5hbWVzIiwib2JqZWN0aXZlcyIsImlwZVByb21wdCIsInNpemUiLCJpc1ZhbGlkUmVzdWx0IiwibGFzdCIsImF0Iiwib2xkUGFyc2VkIiwibWVyZ2VkT2JqZWN0aXZlcyIsInJlYWNoZWQiLCJtZXJnZWQiLCJzdHJpY3QiLCJhbGVydCIsImhhbmRsZUVycm9yIiwid2luZG93IiwiTk9ERV9FTlYiLCJpc0FycmF5IiwiUHJvbXB0SGlzdG9yeSIsImV4ZWNTZXEiLCJkZXBzIiwicmVwbGFjZUFsbCIsImdldExpdGVyYWwiLCJub3RpZnkiLCJyZWdpc3RlckxpdGVyYWxzIiwicmVtb3ZlTGl0ZXJhbHMiLCJpbmRleE9mIiwicmVjb3JkRXhlY3V0aW9uIiwiZW50cnkiLCJ0b1N0cmluZyIsImlucHV0IiwiX2dsb2JhbExpdGVyYWxzIiwiX3Jlc2VydmVkIiwiaW5pdGlhbGl6ZWQiLCJpbml0aWFsaXplRGVmYXVsdFByb21wdHMiLCJwcm9jZXNzZWQiLCJsIiwiZGVwZW5kZW5jeU5hbWVzIiwicGFyc2VkUHJvbXB0cyIsImlzRGVwZW5kZW5jeSIsInRvQWRkIiwiZGVwaCIsIl9tIiwiZGVwIiwiZXhwYW5kZWRWYWx1ZSIsImZpbmFsVmFsdWUiLCJyZXBsYWNlU3RyaW5nIiwic3RyIiwiaXNHbG9iYWwiLCJpc1Jlc2VydmVkIiwiZ2xvYmFsTGl0ZXJhbCIsInN0cmVhbU1lc3NhZ2UiLCJ1cmkiLCJvbkZpbmlzaCIsIm9uRXJyb3IiLCJzdHJlYW0iLCJ0aGVuIiwiY2F0Y2giLCJtdWx0aXBhcnQiLCJzZXJ2ZXJBcGkiLCJsb2NhbEtleSIsInNwbGl0IiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImV4cGVjdGVkIiwiY29udHJhZGlzdGluY3Rpb24iLCJpbnRlZ3JhdGlvbiIsImVudW0iLCJyZXF1aXJlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiYW55T2YiLCJTdHVkZW50Q29tcGV0ZW5jaWVzIiwiU3R1ZGVudENvbXBldGVuY3lQcm92aWRlciIsIlN0dWRlbnRDb21wZXRlbmN5IiwiX2luZGV4IiwiY3JlYXRlU3R1ZGVudENvbXBldGVuY3lFeGFtcGxlIiwiY29tcGV0ZW5jeSIsInN0dWRlbnRfaWQiLCJjb21wZXRlbmN5X2lkIiwic3ViamVjdF9pZCIsImF2ZXJhZ2Vfc2NvcmUiLCJsZXZlbF9lc3RpbWF0ZSIsImV2aWRlbmNlX2NvdW50IiwibGFzdF91cGRhdGVkIiwidG9JU09TdHJpbmciLCJ1c2VTdHVkZW50Q29tcGV0ZW5jaWVzQ29sbGVjdGlvbiIsImNvbXBldGVuY2llcyIsImNyZWF0ZUFuZFB1Ymxpc2hDb21wZXRlbmN5IiwibG9hZFNwZWNpZmljQ29tcGV0ZW5jeSIsImdldENvbXBldGVuY2llc0J5U3R1ZGVudCIsInN0dWRlbnRJZCIsInVwZGF0ZUNvbXBldGVuY3kiLCJ1cGRhdGVzIiwiZGVsZXRlQ29tcGV0ZW5jeSIsImludCIsInRlc3RTdHVkZW50Q29tcGV0ZW5jeUNyZWF0aW9uIiwidGVzdFN0dWRlbnRDb21wZXRlbmNpZXNDb2xsZWN0aW9uIiwidGVzdFNjaGVtYVZhbGlkYXRpb24iLCJ2YWxpZENvbXBldGVuY3kiLCJydW5BbGxUZXN0cyIsInRlc3RzIiwicGFzc2VkVGVzdHMiLCJ0b3RhbFRlc3RzIiwiSVBFU3RhdHVzIiwic2VhcmNoIiwicXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ1cGRhdGVkQ2F0ZWdvcnkiLCJXaWtpcyIsIldpa2kiLCJnZXRCeUNhdGVnb3J5IiwiY2F0ZWdvcnlJZCIsIl9jYXRlZ29yaWVzIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2V4cG9ydE5hbWVzIiwiZW51bWVyYWJsZSIsIm5ld1dpa2kiLCJ1cGRhdGVkV2lraSJdLCJzb3VyY2VzIjpbIi8vY29yZS9jYXRlZ29yaWVzL2NvbGxlY3Rpb24udHMiLCIvL2NvcmUvY2F0ZWdvcmllcy9pdGVtLXByb3ZpZGVyLnRzIiwiLy9jb3JlL2NhdGVnb3JpZXMvaXRlbS50cyIsIi8vY29yZS9ncm91cHMvY29sbGVjdGlvbi50cyIsIi8vY29yZS9ncm91cHMvZGF0YS1wcm92aWRlci50cyIsIi8vY29yZS9ncm91cHMvZXJyb3IudHMiLCIvL2NvcmUvZ3JvdXBzL2l0ZW0udHMiLCIvL2NvcmUvbGxtcy9jb2xsZWN0aW9uLnRzIiwiLy9jb3JlL2xsbXMvaXRlbS50cyIsIi8vY29yZS9sbG1zL3Byb3ZpZGVyLnRzIiwiLy9jb3JlL3Byb2plY3RzL2NvbGxlY3Rpb24udHMiLCIvL2NvcmUvcHJvamVjdHMvY29sbGVjdGlvbi9wcm92aWRlci9jb2xsZWN0aW9uLnRzIiwiLy9jb3JlL3Byb2plY3RzL2NvbGxlY3Rpb24vcHJvdmlkZXIvaXRlbS50cyIsIi8vY29yZS9wcm9qZWN0cy9pdGVtLnRzIiwiLy9jb3JlL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi8vY29yZS9wcm9tcHRzL2V4ZWN1dG9yLnRzIiwiLy9pbnRlcmZhY2VzLnRzLyIsIi8vY29yZS9wcm9tcHRzL2l0ZW0vaW5kZXgudHMiLCIvL2NvcmUvcHJvbXB0cy9pdGVtL2xhbmd1YWdlLXRlbXBsYXRlLnRzIiwiLy9jb3JlL3Byb21wdHMvaXRlbS9wcm92aWRlcnMvaW5kZXgudHMiLCIvL2NvcmUvcHJvbXB0cy9pdGVtL3Byb3ZpZGVycy9sYW5ndWFnZS50cyIsIi8vY29yZS9wcm9tcHRzL3Byb3ZpZGVyLnRzIiwiLy9jb3JlL3Byb21wdHMvcmVzb2x2ZXIudHMiLCIvL2NvcmUvc2NoZW1hcy9pdGVtLnRzIiwiLy9jb3JlL3NjaGVtYXMvcHJvdmlkZXIudHMiLCIvL2NvcmUvdHJhbnNsYXRlL2luZGV4LnRzIiwiLy9pbnRlcmZhY2UudHMvIiwiLy9jb3JlL3VzZXJzL2l0ZW0udHMiLCIvL2NvcmUvdXNlcnMvcHJvdmlkZXIudHMiLCIvL2NvcmUvd3JhcHBlci9pbmRleC50cyIsIi8vcGxheWdyb3VuZC9hY3Rpdml0aWVzLnRzIiwiLy9wbGF5Z3JvdW5kL2FjdGl2aXR5LWFnZW50cy9hY3Rpdml0eS1tYW5hZ2VyLnRzIiwiLy9wbGF5Z3JvdW5kL2FjdGl2aXR5LWFnZW50cy9jb2xsZWN0aW9uLnRzIiwiLy9wbGF5Z3JvdW5kL2FjdGl2aXR5LWFnZW50cy9pbmRleC50cyIsIi8vcGxheWdyb3VuZC9hY3Rpdml0eS1hZ2VudHMvaXRlbS50cyIsIi8vcGxheWdyb3VuZC9hY3Rpdml0eS1hZ2VudHMvcHJvdmlkZXIudHMiLCIvL3BsYXlncm91bmQvY2hhdC9pbmRleC50cyIsIi8vcGxheWdyb3VuZC9jaGF0L2ludGVyYWN0aW9uLW1hbmFnZXIudHMiLCIvL3BsYXlncm91bmQvY2hhdC9tZXNzYWdlLnRzIiwiLy9wbGF5Z3JvdW5kL2NoYXQvbWVzc2FnZXMudHMiLCIvL3BsYXlncm91bmQvaW5kZXgudHMiLCIvL3BsYXlncm91bmQvcHJvbXB0LWV4ZWN1dG9yLnRzIiwiLy9wbGF5Z3JvdW5kL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi8vcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvZGVwZW5kZW5jaWVzLnRzIiwiLy9wbGF5Z3JvdW5kL3Byb21wdHMvZGF0YS9pbmRleC50cyIsIi8vcGxheWdyb3VuZC9wcm9tcHRzL2RhdGEvdGVtcGxhdGVzLnRzIiwiLy9wbGF5Z3JvdW5kL3Byb21wdHMvaW5kZXgudHMiLCIvL3BsYXlncm91bmQvcHJvbXB0cy9saXRlcmFscy9nbG9iYWwtbGl0ZXJhbHMudHMiLCIvL3BsYXlncm91bmQvcHJvbXB0cy9saXRlcmFscy9saXRlcmFsLnRzIiwiLy9wbGF5Z3JvdW5kL3Byb21wdHMvbGl0ZXJhbHMvcmVzZXJ2ZWQvaW5kZXgudHMiLCIvL3BsYXlncm91bmQvcHJvbXB0cy9wcm9tcHQtaGlzdG9yeS50cyIsIi8vcGxheWdyb3VuZC9wcm9tcHRzL3Byb21wdC1tYW5hZ2VyLnRzIiwiLy9wbGF5Z3JvdW5kL3Byb21wdHMvcHJvbXB0LnRzIiwiLy9wbGF5Z3JvdW5kL3Byb21wdHMvcmVzb2x2ZXIudHMiLCIvL3BsYXlncm91bmQvcHJvdmlkZXJzL2NoYXQudHMiLCIvL3BsYXlncm91bmQvcHJvdmlkZXJzL3BsYXlncm91bmQudHMiLCIvL3BsYXlncm91bmQvc2NoZW1hLnRzIiwiLy9wbGF5Z3JvdW5kL3N0dWRlbnQtY29tcGV0ZW5jaWVzL2NvbGxlY3Rpb24udHMiLCIvL3BsYXlncm91bmQvc3R1ZGVudC1jb21wZXRlbmNpZXMvZXhhbXBsZS50cyIsIi8vcGxheWdyb3VuZC9zdHVkZW50LWNvbXBldGVuY2llcy9pbmRleC50cyIsIi8vcGxheWdyb3VuZC9zdHVkZW50LWNvbXBldGVuY2llcy9pdGVtLnRzIiwiLy9wbGF5Z3JvdW5kL3N0dWRlbnQtY29tcGV0ZW5jaWVzL3Byb3ZpZGVyLnRzIiwiLy9wbGF5Z3JvdW5kL3N0dWRlbnQtY29tcGV0ZW5jaWVzL3Rlc3QudHMiLCIvL3BsYXlncm91bmQvdHlwZXMudHMiLCIvL3dpa2kvY2F0ZWdvcmllcy9jb2xsZWN0aW9uLnRzIiwiLy93aWtpL2NhdGVnb3JpZXMvaW5kZXgudHMiLCIvL3dpa2kvY2F0ZWdvcmllcy9pdGVtLXByb3ZpZGVyLnRzIiwiLy93aWtpL2NhdGVnb3JpZXMvaXRlbS50cyIsIi8vd2lraS9jb2xsZWN0aW9uLnRzIiwiLy93aWtpL2luZGV4LnRzIiwiLy93aWtpL2l0ZW0tcHJvdmlkZXIudHMiLCIvL3dpa2kvaXRlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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