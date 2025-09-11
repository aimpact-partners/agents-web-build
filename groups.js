System.register(["@beyond-js/kernel@0.1.14/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/platform@0.1.6/config", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsReactive211EntitiesCollection) {
      dependency_1 = _beyondJsReactive211EntitiesCollection;
    }, function (_aimpactChatSdk155Session) {
      dependency_2 = _aimpactChatSdk155Session;
    }, function (_aimpactPlatform016Config) {
      dependency_3 = _aimpactPlatform016Config;
    }, function (_beyondJsHttpSuite011Api) {
      dependency_4 = _beyondJsHttpSuite011Api;
    }, function (_beyondJsReactive211EntitiesItem) {
      dependency_5 = _beyondJsReactive211EntitiesItem;
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
          "vspecifier": "@aimpact/platform@0.1.6/groups"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/reactive/entities/collection', dependency_1], ['@aimpact/chat-sdk/session', dependency_2], ['@aimpact/platform/config', dependency_3], ['@beyond-js/http-suite/api', dependency_4], ['@beyond-js/reactive/entities/item', dependency_5]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./collection
      ****************************/
      ims.set('./collection', {
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

      /*******************************
      INTERNAL MODULE: ./data-provider
      *******************************/

      ims.set('./data-provider', {
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

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
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

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
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
      __pkg.exports.descriptor = [{
        "im": "./collection",
        "from": "Groups",
        "name": "Groups"
      }, {
        "im": "./data-provider",
        "from": "DataProvider",
        "name": "DataProvider"
      }, {
        "im": "./item",
        "from": "GroupItem",
        "name": "GroupItem"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Groups') && _export("Groups", Groups = require ? require('./collection').Groups : value);
        (require || prop === 'DataProvider') && _export("DataProvider", DataProvider = require ? require('./data-provider').DataProvider : value);
        (require || prop === 'GroupItem') && _export("GroupItem", GroupItem = require ? require('./item').GroupItem : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJfZXJyb3IiLCJhcGkiLCJtb2RlbCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWdlbnRzIiwic2V0TW9kZWwiLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImlkIiwiY29kZSIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiQ3VzdG9tRXJyb3IiLCJlcnJvciIsInRleHQiLCJkYXRhIiwicHVibGlzaCIsInBvc3QiLCJsaXN0IiwiZW5kcG9pbnQiLCJ1bmRlZmluZWQiLCJpdGVtcyIsImUiLCJjb25zb2xlIiwidGVzdCIsImludml0ZSIsInJlcyIsIkVycm9yIiwiY2FuY2VsSW52aXRhdGlvbiIsImRlbGV0ZSIsImVtYWlsIiwiam9pbiIsImFwcHJvdmUiLCJyZW1vdmVNZW1iZXIiLCJ1aWQiLCJyZWplY3QiLCJyZXF1ZXN0QWNjZXNzIiwibWVzc2FnZSIsIm5hbWUiLCJfaXRlbSIsIkdyb3VwSXRlbSIsIkl0ZW0iLCJoYXNBY2Nlc3MiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsInJlZ2lzdGVyZWQiLCJNYXAiLCJpc0FkbWluIiwiYXV0aG9yaXplZFBlb3BsZSIsInBlb3BsZSIsImZpbHRlciIsImkiLCJhdXRob3JpemVkIiwicmVhZHkiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzb21lIiwicm9sZSIsImNoZWNrTWVtYmVyIiwicGVyc29uIiwiY3VycmVudFJvbGUiLCJpbnZpdGVkIiwicHVzaCIsInNldCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3MiXSwic291cmNlcyI6WyIvY29sbGVjdGlvbi50cyIsIi9kYXRhLXByb3ZpZGVyLnRzIiwiL2Vycm9yLnRzIiwiL2l0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxXQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQU9FLE1BQU8sU0FBUUgsV0FBQSxDQUFBSSxVQUFtQztZQUN6RUMsWUFBWUMsTUFBTSxFQUFFQyxJQUFJO2NBQ3ZCLEtBQUssQ0FBQztnQkFDTEQsTUFBTTtnQkFDTkMsSUFBSTtnQkFDSkMsUUFBUSxFQUFFTixhQUFBLENBQUFPO2VBQ1YsQ0FBQztZQUNIOztVQUNBQyxPQUFBLENBQUFQLE1BQUEsR0FBQUEsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYRCxJQUFBUSxRQUFBLEdBQUFWLE9BQUE7VUFDQSxJQUFBVyxPQUFBLEdBQUFYLE9BQUE7VUFDQSxJQUFBWSxJQUFBLEdBQUFaLE9BQUE7VUFHQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFRTyxZQUxQOzs7O1VBS2tCLE1BQU9RLFlBQVk7WUFDcEMsQ0FBQU0sR0FBSTtZQUNKLENBQUFDLEtBQU07WUFFTixDQUFBVixNQUFPO1lBRVBELFlBQVlXLEtBQUs7Y0FDaEIsSUFBSSxDQUFDLENBQUFELEdBQUksR0FBRyxJQUFJRixJQUFBLENBQUFJLEdBQUcsQ0FBQ0wsT0FBQSxDQUFBTSxPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUM7Y0FDOUMsSUFBSSxD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Q0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUN1QyxNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLENBQUN0QixLQUFLLEtBQUs1QixLQUFLLENBQUM0QixLQUFLLENBQUM7Z0JBQzlELElBQUksQ0FBQyxDQUFBZSxRQUFTLEdBQUcsSUFBSSxDQUFDLENBQUFBLFFBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFDLElBQUlBLENBQUMsQ0FBQ3RCLEtBQUssS0FBSzVCLEtBQUssQ0FBQzRCLEtBQUssQ0FBQztnQkFDcEUsSUFBSSxDQUFDK0MsWUFBWSxFQUFFOztZQUVyQjtZQUVBLE1BQU1oRCxNQUFNQSxDQUFBO2NBQ1gsTUFBTXBCLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQ3ZCLFFBQVEsQ0FBQzJDLE1BQU0sQ0FBQztnQkFBRXRCLEVBQUUsRUFBRSxJQUFJLENBQUNBO2NBQUUsQ0FBRSxDQUFDO2NBQzVELElBQUlFLFFBQVEsQ0FBQ0UsTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUNrRSxZQUFZLEVBQUU7O2NBRXBCLE9BQU9wRSxRQUFRO1lBQ2hCO1lBRUEsTUFBTXNCLElBQUlBLENBQUM7Y0FBRXZCO1lBQUksQ0FBRTtjQUNsQixNQUFNTyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM3QixRQUFRLENBQUM2QyxJQUFJLENBQUM7Z0JBQUV2QjtjQUFJLENBQUUsQ0FBQztjQUMvQyxJQUFJLENBQUM4RCxHQUFHLENBQUM7Z0JBQUU5RDtjQUFJLENBQUUsQ0FBQztjQUNsQixPQUFPTyxJQUFJO1lBQ1o7WUFFQSxNQUFNcUIsYUFBYUEsQ0FBQTtjQUNsQixNQUFNckIsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDN0IsUUFBUSxDQUFDa0QsYUFBYSxFQUFFO2NBRWhELElBQUlyQixJQUFJLENBQUNKLE1BQU0sQ0FBQ3NFLFdBQVcsRUFBRSxLQUFLLFlBQVksRUFBRTtnQkFDL0MsTUFBTSxJQUFJLENBQUNoRixJQUFJLENBQUM7a0JBQUVNLEVBQUUsRUFBRSxJQUFJLENBQUNBO2dCQUFFLENBQUUsQ0FBQztlQUNoQyxNQUFNO2dCQUNOLE1BQU0sSUFBSSxDQUFDK0QsR0FBRyxDQUFDO2tCQUFFWSxNQUFNLEVBQUVuRSxJQUFJLENBQUNKO2dCQUFNLENBQUUsQ0FBQzs7Y0FFeEMsSUFBSSxDQUFDMkQsR0FBRyxDQUFDdkQsSUFBSSxDQUFDO2NBQ2QsT0FBT0EsSUFBSTtZQUNaOztVQUNBM0IsT0FBQSxDQUFBb0QsU0FBQSxHQUFBQSxTQUFBIiwiaWdub3JlTGlzdCI6W119