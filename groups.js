System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/reactive@2.1.1/entities/collection", "@aimpact/chat-sdk@1.5.5/session", "@aimpact/platform@0.1.6/config", "@beyond-js/http-suite@0.1.1/api", "@beyond-js/reactive@2.1.1/entities/item"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, bimport, __Bundle, __pkg, ims, Groups, DataProvider, GroupItem, __beyond_pkg, hmr;
  _export({
    Groups: void 0,
    DataProvider: void 0,
    GroupItem: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
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
        const dependencies = new Map([["@aimpact/agents-client", "0.0.29"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/reactive", "2.1.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/scaffolding", "1.0.4"], ["@editorjs/editorjs", "2.30.8"], ["@firebase/auth", "1.9.1"], ["@radix-ui/primitive", "1.1.2"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-tabs", "1.1.12"], ["@radix-ui/themes", "3.2.1"], ["@tippyjs/react", "4.2.6"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["firebase", "11.5.0"], ["firebase-admin", "12.7.0"], ["framer-motion", "11.18.2"], ["highlight.js", "11.11.1"], ["i", "0.3.7"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["lucide-react", "0.542.0"], ["marked", "15.0.12"], ["marked-gfm-heading-id", "4.1.1"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["npm", "11.4.0"], ["openai", "4.92.1"], ["prismjs", "1.30.0"], ["radix-ui", "1.4.1"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-json-view-lite", "2.4.1"], ["react-select", "5.10.1"], ["react-simple-json-viewer", "0.0.4"], ["react-split", "2.0.14"], ["remark", "15.0.1"], ["remark-parse", "11.0.0"], ["remark-slate-transformer", "0.9.0"], ["remark-stringify", "11.0.0"], ["slate", "0.114.0"], ["slate-react", "0.114.2"], ["socket.io-client", "4.8.1"], ["split.js", "1.6.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["unified", "11.0.5"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["@aimpact/platform", "0.1.6"], ["@aimpact/platform", "0.1.6"]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29sbGVjdGlvbiIsInJlcXVpcmUiLCJfZGF0YVByb3ZpZGVyIiwiR3JvdXBzIiwiQ29sbGVjdGlvbiIsImNvbnN0cnVjdG9yIiwiZW50aXR5IiwiaXRlbSIsInByb3ZpZGVyIiwiRGF0YVByb3ZpZGVyIiwiZXhwb3J0cyIsIl9zZXNzaW9uIiwiX2NvbmZpZyIsIl9hcGkiLCJfZXJyb3IiLCJhcGkiLCJtb2RlbCIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWdlbnRzIiwic2V0TW9kZWwiLCJsb2FkIiwic3BlY3MiLCJ0b2tlbiIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsImJlYXJlciIsImlkIiwiY29kZSIsInJlc3BvbnNlIiwiZ2V0Iiwic3RhdHVzIiwiQ3VzdG9tRXJyb3IiLCJlcnJvciIsInRleHQiLCJkYXRhIiwicHVibGlzaCIsInBvc3QiLCJsaXN0IiwiZW5kcG9pbnQiLCJ1bmRlZmluZWQiLCJpdGVtcyIsImUiLCJjb25zb2xlIiwidGVzdCIsImludml0ZSIsInJlcyIsIkVycm9yIiwiY2FuY2VsSW52aXRhdGlvbiIsImRlbGV0ZSIsImVtYWlsIiwiam9pbiIsImFwcHJvdmUiLCJyZW1vdmVNZW1iZXIiLCJ1aWQiLCJyZWplY3QiLCJyZXF1ZXN0QWNjZXNzIiwibWVzc2FnZSIsIm5hbWUiLCJfaXRlbSIsIkdyb3VwSXRlbSIsIkl0ZW0iLCJoYXNBY2Nlc3MiLCJtZW1iZXJzIiwibWFuYWdlcnMiLCJwZW5kaW5ncyIsInJlZ2lzdGVyZWQiLCJNYXAiLCJpc0FkbWluIiwiYXV0aG9yaXplZFBlb3BsZSIsInBlb3BsZSIsImZpbHRlciIsImkiLCJhdXRob3JpemVkIiwicmVhZHkiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzb21lIiwicm9sZSIsImNoZWNrTWVtYmVyIiwicGVyc29uIiwiY3VycmVudFJvbGUiLCJpbnZpdGVkIiwicHVzaCIsInNldCIsImZvckVhY2giLCJwZW5kaW5nSW5kZXgiLCJmaW5kSW5kZXgiLCJwIiwicGVuZGluZ01lbWJlciIsInNwbGljZSIsInRyaWdnZXJFdmVudCIsImFyZ3MiLCJtZW1iZXIiLCJ0cmlnZ2VyIiwidG9Mb3dlckNhc2UiLCJhY2Nlc3MiXSwic291cmNlcyI6WyIvL2NvbGxlY3Rpb24udHMvIiwiLy9kYXRhLXByb3ZpZGVyLnRzLyIsIi8vZXJyb3IudHMvIiwiLy9pdGVtLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFdBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFBT0UsTUFBTyxTQUFRSCxXQUFBLENBQUFJLFVBQW1DO1lBQ3pFQyxZQUFZQyxNQUFNLEVBQUVDLElBQUk7Y0FDdkIsS0FBSyxDQUFDO2dCQUNMRCxNQUFNO2dCQUNOQyxJQUFJO2dCQUNKQyxRQUFRLEVBQUVOLGFBQUEsQ0FBQU87ZUFDVixDQUFDO1lBQ0g7O1VBQ0FDLE9BQUEsQ0FBQVAsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1hELElBQUFRLFFBQUEsR0FBQVYsT0FBQTtVQUNBLElBQUFXLE9BQUEsR0FBQVgsT0FBQTtVQUNBLElBQUFZLElBQUEsR0FBQVosT0FBQTtVQUdBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQVFPLFlBTFA7Ozs7VUFLa0IsTUFBT1EsWUFBWTtZQUNwQyxDQUFBTSxHQUFJO1lBQ0osQ0FBQUMsS0FBTTtZQUVOLENBQUFWLE1BQU87WUFFUEQsWUFBWVcsS0FBSztjQUNoQixJQUFJLENBQUMsQ0FBQUQsR0FBSSxHQUFHLElBQUlGLElBQUEsQ0FBQUksR0FBRyxDQUFDTCxPQUFBLENBQUFNLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQztjQUM5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