System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@beyond-js/http-suite@0.1.1/api", "@aimpact/platform@0.1.6/config", "@beyond-js/reactive@2.1.1/model", "@aimpact/chat-sdk@1.5.5/session", "@beyond-js/reactive@2.1.1/entities/item", "@aimpact/chat-sdk@1.5.5/startup", "@aimpact/agents-client@0.0.29/prompts", "zod@3.24.2", "@beyond-js/kernel@0.1.12/core"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Categories, Category, Groups, DataProvider, GroupItem, LLMs, LLM, Projects, Project, Prompts, Executor, IPromptSpecs, IPromptGenerationSpecs, ITool, IProject, ILiterals, IPromptTemplateLanguages, IPromptParams, IUpdatePromptParams, PromptTemplate, Prompt, PromptLanguageTemplate, PromptResolver, Schema, GTranslate, AppGTranslate, IChatUser, Wrapper, AppWrapper, __beyond_pkg, hmr;
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
    AppWrapper: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
    }, function (_beyondJsKernel0112Core) {
      dependency_10 = _beyondJsKernel0112Core;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@beyond-js/http-suite/api', dependency_2], ['@aimpact/platform/config', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/reactive/entities/item', dependency_6], ['@aimpact/chat-sdk/startup', dependency_7], ['@aimpact/agents-client/prompts', dependency_8], ['zod', dependency_9], ['@beyond-js/kernel/core', dependency_10]]);
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

      /***********************************
      INTERNAL MODULE: ./groups/collection
      ***********************************/

      ims.set('./groups/collection', {
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

      /**************************************
      INTERNAL MODULE: ./groups/data-provider
      **************************************/

      ims.set('./groups/data-provider', {
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

      /******************************
      INTERNAL MODULE: ./groups/error
      ******************************/

      ims.set('./groups/error', {
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

      /*****************************
      INTERNAL MODULE: ./groups/item
      *****************************/

      ims.set('./groups/item', {
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

      /*********************************
      INTERNAL MODULE: ./llms/collection
      *********************************/

      ims.set('./llms/collection', {
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

      /***************************
      INTERNAL MODULE: ./llms/item
      ***************************/

      ims.set('./llms/item', {
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

      /*******************************
      INTERNAL MODULE: ./llms/provider
      *******************************/

      ims.set('./llms/provider', {
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

      /**********************************
      INTERNAL MODULE: ./prompts/executor
      **********************************/

      ims.set('./prompts/executor', {
        hash: 2809803722,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Executor = void 0;
          var _api = require("@beyond-js/http-suite/api");
          var _startup = require("@aimpact/chat-sdk/startup");
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

      /************************************
      INTERNAL MODULE: ./prompts/interfaces
      ************************************/

      ims.set('./prompts/interfaces', {
        hash: 273427614,
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

      /************************************************
      INTERNAL MODULE: ./prompts/item/language-template
      ************************************************/

      ims.set('./prompts/item/language-template', {
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

      /**********************************************
      INTERNAL MODULE: ./prompts/item/providers/index
      **********************************************/

      ims.set('./prompts/item/providers/index', {
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

      /*************************************************
      INTERNAL MODULE: ./prompts/item/providers/language
      *************************************************/

      ims.set('./prompts/item/providers/language', {
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

      /**********************************
      INTERNAL MODULE: ./prompts/provider
      **********************************/

      ims.set('./prompts/provider', {
        hash: 416670142,
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

      /**********************************
      INTERNAL MODULE: ./prompts/resolver
      **********************************/

      ims.set('./prompts/resolver', {
        hash: 311101058,
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
        "im": "./groups/collection",
        "from": "Groups",
        "name": "Groups"
      }, {
        "im": "./groups/data-provider",
        "from": "DataProvider",
        "name": "DataProvider"
      }, {
        "im": "./groups/item",
        "from": "GroupItem",
        "name": "GroupItem"
      }, {
        "im": "./llms/collection",
        "from": "LLMs",
        "name": "LLMs"
      }, {
        "im": "./llms/item",
        "from": "LLM",
        "name": "LLM"
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
        "im": "./prompts/executor",
        "from": "Executor",
        "name": "Executor"
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
        "from": "IPromptTemplateLanguages",
        "name": "IPromptTemplateLanguages"
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
        "from": "PromptTemplate",
        "name": "PromptTemplate"
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
        "im": "./prompts/item/language-template",
        "from": "PromptLanguageTemplate",
        "name": "PromptLanguageTemplate"
      }, {
        "im": "./prompts/resolver",
        "from": "PromptResolver",
        "name": "PromptResolver"
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
        (require || prop === 'Groups') && _export("Groups", Groups = require ? require('./groups/collection').Groups : value);
        (require || prop === 'DataProvider') && _export("DataProvider", DataProvider = require ? require('./groups/data-provider').DataProvider : value);
        (require || prop === 'GroupItem') && _export("GroupItem", GroupItem = require ? require('./groups/item').GroupItem : value);
        (require || prop === 'LLMs') && _export("LLMs", LLMs = require ? require('./llms/collection').LLMs : value);
        (require || prop === 'LLM') && _export("LLM", LLM = require ? require('./llms/item').LLM : value);
        (require || prop === 'Projects') && _export("Projects", Projects = require ? require('./projects/collection/index').Projects : value);
        (require || prop === 'Project') && _export("Project", Project = require ? require('./projects/item').Project : value);
        (require || prop === 'Prompts') && _export("Prompts", Prompts = require ? require('./prompts/collection').Prompts : value);
        (require || prop === 'Executor') && _export("Executor", Executor = require ? require('./prompts/executor').Executor : value);
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./prompts/interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./prompts/interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./prompts/interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./prompts/interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./prompts/interfaces').ILiterals : value);
        (require || prop === 'IPromptTemplateLanguages') && _export("IPromptTemplateLanguages", IPromptTemplateLanguages = require ? require('./prompts/interfaces').IPromptTemplateLanguages : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./prompts/interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./prompts/interfaces').IUpdatePromptParams : value);
        (require || prop === 'PromptTemplate') && _export("PromptTemplate", PromptTemplate = require ? require('./prompts/item/index').PromptTemplate : value);
        (require || prop === 'Prompt') && _export("Prompt", Prompt = require ? require('./prompts/item/index').Prompt : value);
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./prompts/item/interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./prompts/item/interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./prompts/item/interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./prompts/item/interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./prompts/item/interfaces').ILiterals : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./prompts/item/interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./prompts/item/interfaces').IUpdatePromptParams : value);
        (require || prop === 'PromptLanguageTemplate') && _export("PromptLanguageTemplate", PromptLanguageTemplate = require ? require('./prompts/item/language-template').PromptLanguageTemplate : value);
        (require || prop === 'PromptResolver') && _export("PromptResolver", PromptResolver = require ? require('./prompts/resolver').PromptResolver : value);
        (require || prop === 'Schema') && _export("Schema", Schema = require ? require('./schemas/item').Schema : value);
        (require || prop === 'GTranslate') && _export("GTranslate", GTranslate = require ? require('./translate/index').GTranslate : value);
        (require || prop === 'AppGTranslate') && _export("AppGTranslate", AppGTranslate = require ? require('./translate/index').AppGTranslate : value);
        (require || prop === 'IChatUser') && _export("IChatUser", IChatUser = require ? require('./users/interface').IChatUser : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfaXRlbSIsIl9hcGkiLCJfY29uZmlnIiwiQ2F0ZWdvcmllcyIsIkNvbGxlY3Rpb24iLCJhcGkiLCJjb25zdHJ1Y3RvciIsImVudGl0eSIsIml0ZW0iLCJDYXRlZ29yeSIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiY2hhdCIsImxpc3QiLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiZ2V0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImV4cG9ydHMiLCJfbW9kZWwiLCJJdGVtUHJvdmlkZXIiLCJSZWFjdGl2ZU1vZGVsIiwicGFyZW50IiwibG9hZCIsImlkIiwiX2l0ZW1Qcm92aWRlciIsInByb3ZpZGVyIiwicHVibGlzaCIsIm5ld0NhdGVnb3J5IiwicG9zdCIsInByb2plY3RJZCIsImdldExpc3QiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiRGF0YVByb3ZpZGVyIiwiX3Nlc3Npb24iLCJfZXJyb3IiLCJtb2RlbCIsImFnZW50cyIsInNldE1vZGVsIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImNvZGUiLCJzdGF0dXMiLCJDdXN0b21FcnJvciIsInRleHQiLCJkYXRhIiwiZW5kcG9pbnQiLCJ1bmRlZmluZWQiLCJpdGVtcyIsInRlc3QiLCJpbnZpdGUiLCJyZXMiLCJFcnJvciIsImNhbmNlbEludml0YXRpb24iLCJkZWxldGUiLCJlbWFpbCIsImpvaW4iLCJhcHByb3ZlIiwicmVtb3ZlTWVtYmVyIiwidWlkIiwicmVqZWN0IiwicmVxdWVzdEFjY2VzcyIsIm1lc3NhZ2UiLCJuYW1lIiwiR3JvdXBJdGVtIiwiSXRlbSIsImhhc0FjY2VzcyIsIm1lbWJlcnMiLCJtYW5hZ2VycyIsInBlbmRpbmdzIiwicmVnaXN0ZXJlZCIsIk1hcCIsImlzQWRtaW4iLCJhdXRob3JpemVkUGVvcGxlIiwicGVvcGxlIiwiZmlsdGVyIiwiaSIsImF1dGhvcml6ZWQiLCJyZWFkeSIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInNvbWUiLCJyb2xlIiwiY2hlY2tNZW1iZXIiLCJwZXJzb24iLCJjdXJyZW50Um9sZSIsImludml0ZWQiLCJwdXNoIiwic2V0IiwiZm9yRWFjaCIsInBlbmRpbmdJbmRleCIsImZpbmRJbmRleCIsInAiLCJwZW5kaW5nTWVtYmVyIiwic3BsaWNlIiwidHJpZ2dlckV2ZW50IiwiYXJncyIsIm1lbWJlciIsInRyaWdnZXIiLCJ0b0xvd2VyQ2FzZSIsImFjY2VzcyIsIl9wcm92aWRlciIsIkxMTXMiLCJMTE1Qcm92aWRlciIsIkxMTSIsInR5cGUiLCJwbGF5Z3JvdW5kIiwibWFwIiwiUHJvamVjdHMiLCJQcm9qZWN0IiwiQ29sbGVjdGlvblByb3ZpZGVyIiwiUHJvbXB0cyIsInByb21wdHMiLCJkZXBlbmRlbmNpZXMiLCJmdW5jdGlvbnMiLCJQcm9tcHRUZW1wbGF0ZSIsIm91dHB1dCIsImlzIiwiX3N0YXJ0dXAiLCJFeGVjdXRvciIsInNka0NvbmZpZyIsImV4ZWN1dGUiLCJleGVjdXRlUHJvbXB0IiwiZXhlY3V0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3Byb3ZpZGVycyIsIlByb21wdFRlbXBsYXRlUHJvdmlkZXIiLCJQcm9tcHQiLCJfbGFuZ3VhZ2UiLCJQcm9tcHRMYW5ndWFnZVRlbXBsYXRlIiwiUHJvbXB0VGVtcGxhdGVMYW5ndWFnZXNQcm92aWRlciIsInNldExhbmd1YWdlQW5kVGV4dCIsImxhbmd1YWdlIiwic2F2ZVRyYW5zbGF0ZSIsImxpdGVyYWxzIiwicHJvamVjdCIsImNyZWF0ZSIsImxhbmd1YWdlcyIsInVwZGF0ZSIsImJvZHkiLCJhc3NpZ24iLCJwdXQiLCJsb2FkTGFuZ3VhZ2UiLCJzYXZlTGFuZ3VhZ2UiLCJnZW5lcmF0ZUxhbmd1YWdlcyIsImlkZW50aWZpZXIiLCJwcm9jZXNzIiwiUHJvbXB0UmVzb2x2ZXIiLCJyZXNvbHZlIiwicHJvbXB0IiwicHJlZml4IiwibGl0ZXJhbFZhbHVlcyIsInN0cmluZ1ZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4cGFuZGVkIiwicGFyc2VkIiwidmlzaXRlZCIsIlNldCIsIndhbGsiLCJkZXB0aCIsInJlcGxhY2UiLCJfbWF0Y2giLCJyYXdJZCIsImhhcyIsImRlcGVuZGVuY3kiLCJmaW5kIiwidG9VcHBlckNhc2UiLCJ0cmltIiwiYWRkIiwiZGVwZW5kZW5jeVZhbHVlIiwicmVzb2x2ZWQiLCJsaXRlcmFsIiwiUmVnRXhwIiwicGFyc2VkUHJvbXB0IiwiQXJyYXkiLCJmcm9tIiwiYW5hbHl6ZSIsImxvZyIsInBsYWNlaG9sZGVycyIsIm1hdGNoQWxsIiwibSIsInVuaXF1ZVBsYWNlaG9sZGVycyIsIndhcm4iLCJfcHJvbXB0cyIsIlNjaGVtYSIsImxhbmciLCJzY2hlbWEiLCJHVHJhbnNsYXRlIiwiaXNSZWFkeSIsInRyYW5zbGF0ZVRleHQiLCJmb3JtYXQiLCJHVFJBTlNMQVRFX0FQSV9LRVkiLCJ1cmwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJxIiwidGFyZ2V0Iiwib2siLCJqc29uIiwidHJhbnNsYXRpb25zIiwidHJhbnNsYXRlZFRleHQiLCJfZ1RyYW5zbGF0ZSIsIkFwcEdUcmFuc2xhdGUiLCJnbG9iYWxUaGlzIiwiYXBwIiwiX3pvZCIsIlVzZXIiLCJ6Iiwib2JqZWN0Iiwic3RyaW5nIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsIm9wdGlvbmFsIiwicGhvbmVOdW1iZXIiLCJhZ2UiLCJudW1iZXIiLCJ0ZWFjaGVyIiwiYm9vbGVhbiIsImFjY2Vzc2liaWxpdHkiLCJyb2xlcyIsImFycmF5IiwicHJvcHMiLCJVc2VyUHJvdmlkZXIiLCJmaXJlYmFzZVRva2VuIiwiV3JhcHBlciIsImdldFByb21wdHMiLCJfd3JhcHBlciIsIkFwcFdyYXBwZXIiXSwic291cmNlcyI6WyIvL2NhdGVnb3JpZXMvY29sbGVjdGlvbi50cyIsIi8vY2F0ZWdvcmllcy9pdGVtLXByb3ZpZGVyLnRzIiwiLy9jYXRlZ29yaWVzL2l0ZW0udHMiLCIvL2dyb3Vwcy9jb2xsZWN0aW9uLnRzIiwiLy9ncm91cHMvZGF0YS1wcm92aWRlci50cyIsIi8vZ3JvdXBzL2Vycm9yLnRzIiwiLy9ncm91cHMvaXRlbS50cyIsIi8vbGxtcy9jb2xsZWN0aW9uLnRzIiwiLy9sbG1zL2l0ZW0udHMiLCIvL2xsbXMvcHJvdmlkZXIudHMiLCIvL3Byb2plY3RzL2NvbGxlY3Rpb24vaW5kZXgudHMiLCIvL3Byb2plY3RzL2NvbGxlY3Rpb24vcHJvdmlkZXIudHMiLCIvL3Byb2plY3RzL2l0ZW0tcHJvdmlkZXIudHMiLCIvL3Byb2plY3RzL2l0ZW0udHMiLCIvL3Byb21wdHMvY29sbGVjdGlvbi50cyIsIi8vcHJvbXB0cy9leGVjdXRvci50cyIsIi8vaW50ZXJmYWNlcy50cy8iLCIvL3Byb21wdHMvaXRlbS9pbmRleC50cyIsIi8vcHJvbXB0cy9pdGVtL2xhbmd1YWdlLXRlbXBsYXRlLnRzIiwiLy9wcm9tcHRzL2l0ZW0vcHJvdmlkZXJzL2luZGV4LnRzIiwiLy9wcm9tcHRzL2l0ZW0vcHJvdmlkZXJzL2xhbmd1YWdlLnRzIiwiLy9wcm9tcHRzL3Byb3ZpZGVyLnRzIiwiLy9wcm9tcHRzL3Jlc29sdmVyLnRzIiwiLy9zY2hlbWFzL2l0ZW0udHMiLCIvL3NjaGVtYXMvcHJvdmlkZXIudHMiLCIvL3RyYW5zbGF0ZS9pbmRleC50cyIsIi8vaW50ZXJmYWNlLnRzLyIsIi8vdXNlcnMvaXRlbS50cyIsIi8vdXNlcnMvcHJvdmlkZXIudHMiLCIvL3dyYXBwZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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