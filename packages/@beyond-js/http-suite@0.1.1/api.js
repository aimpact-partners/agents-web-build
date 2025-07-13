System.register(["@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/core", "@beyond-js/reactive@2.1.0/model"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, bimport, __Bundle, __pkg, ims, Api, __beyond_pkg, hmr;
  _export("Api", void 0);
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Core) {
      dependency_1 = _beyondJsKernel0112Core;
    }, function (_beyondJsReactive210Model) {
      dependency_2 = _beyondJsReactive210Model;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.12"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/reactive", "2.1.0"], ["socket.io-client", "4.7.2"], ["zod", "3.24.2"], ["@beyond-js/http-suite", "0.1.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/http-suite@0.1.1/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/reactive/model', dependency_2]]);
      ims = new Map();
      /*********************
      INTERNAL MODULE: ./api
      *********************/
      ims.set('./api', {
        hash: 4132351474,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Api = void 0;
          var _fetcher = require("./fetcher");
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class Api extends _core.Events {
            #url;
            get url() {
              return this.#url ?? '';
            }
            #fetcher;
            get actions() {
              return this.#fetcher.actions;
            }
            get streamResponse() {
              return this.#fetcher.streamResponse;
            }
            get metadata() {
              return this.#fetcher.metadata;
            }
            get stringContent() {
              return this.#fetcher.stringContent;
            }
            constructor(url) {
              super();
              this.#url = url;
              this.#fetcher = new _fetcher.Fetcher();
              this.#fetcher.on('stream.response', this.#getResponse);
              this.#fetcher.on('action.received', specs => this.trigger('action.received', specs));
              this.#fetcher.on('metadata.started', specs => this.trigger('metadata.started', specs));
            }
            #getResponse = () => {
              this.trigger('stream.response');
            };
            async action(method = 'get', route, specs = {}) {
              this.#fetcher.clean();
              return this.#fetcher[method](this.getURL(route), specs);
            }
            getURL(route) {
              return `${this.#url}${route}`;
            }
            bearer(bearer) {
              this.#fetcher.bearer(bearer);
              return this;
            }
            get(route, specs) {
              return this.action('get', route, specs);
            }
            post(route, specs) {
              return this.action('post', route, specs);
            }
            put(route, specs) {
              return this.action('put', route, specs);
            }
            delete(route, specs) {
              return this.action('delete', route, specs);
            }
            stream(route, specs = {}) {
              return this.action('stream', route, specs);
            }
          }
          exports.Api = Api;
        }
      });

      /***********************
      INTERNAL MODULE: ./error
      ***********************/

      ims.set('./error', {
        hash: 3982783585,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ApiError = void 0;
          class ApiError extends Error {
            original;
            constructor(message, cause) {
              super(message);
              this.name = 'ApiError';
              this.original = cause;
              if (cause instanceof Error) {
                // Extiende los datos del error original
                this.stack = cause.stack ? `${this.stack}\nCaused by: ${cause.stack}` : this.stack;
                // Opcional: puedes copiar más propiedades si lo deseas
                // this.message += ` (caused by: ${cause.message})`;
              }
            }
          }
          exports.ApiError = ApiError;
        }
      });

      /*************************
      INTERNAL MODULE: ./fetcher
      *************************/

      ims.set('./fetcher', {
        hash: 3767807342,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Fetcher = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _stream = require("./stream");
          class Fetcher extends _model.ReactiveModel {
            #bearer;
            streamer;
            formDataInstance;
            customHeaders = {
              'Content-Type': 'application/json'
            };
            defaultHeaders = {
              'Content-Type': 'application/json'
            };
            constructor() {
              super();
              this.streamer = new _stream.Stream(this);
            }
            get actions() {
              return this.streamer.actions;
            }
            get streamResponse() {
              return this.streamer.response;
            }
            get stringContent() {
              return this.streamer.stringContent;
            }
            get metadata() {
              return this.streamer.metadata;
            }
            bearer(token) {
              if (token) this.#bearer = token;
              return this;
            }
            setHeaders(headers) {
              this.customHeaders = {
                ...this.defaultHeaders,
                ...headers
              };
              return this;
            }
            getHeaders(specs = {}, multipart = false) {
              const mergedHeaders = {
                ...this.customHeaders,
                ...specs
              };
              const headers = new Headers();
              const token = mergedHeaders.Authorization || this.#bearer;
              if (token) headers.append('Authorization', `Bearer ${token}`);
              for (const [key, value] of Object.entries(mergedHeaders)) {
                if (key !== 'Authorization' && key !== 'bearer') {
                  headers.append(key, value);
                }
              }
              if (multipart) {
                headers.delete('Content-Type');
              }
              return headers;
            }
            createFormData(specs = {}) {
              this.formDataInstance = new FormData();
              for (const [key, value] of Object.entries(specs)) {
                this.formDataInstance.append(key, value);
              }
              return this.formDataInstance;
            }
            processGetParams(params = {}) {
              if (Object.entries(params).length === 0) return '';
              const parameters = new URLSearchParams();
              for (const [key, value] of Object.entries(params)) {
                if (![NaN, undefined, ''].includes(value)) {
                  parameters.append(key, value);
                }
              }
              return parameters;
            }
            processParams(params = {}, multipart = false, method) {
              if (method === 'get') {
                return this.processGetParams(params).toString();
              }
              if (Object.entries(params).length === 0) return;
              return multipart ? this.createFormData(params) : JSON.stringify(params);
            }
            async execute(url, method = 'get', params = {}, stream = false) {
              const multipart = params.multipart;
              const headers = this.getHeaders({
                bearer: params.bearer
              }, multipart);
              delete params.multipart;
              delete params.bearer;
              const specs = {
                method,
                headers,
                mode: 'cors'
              };
              if (['post', 'put', 'DELETE'].includes(method)) {
                specs.body = this.processParams(params, multipart, method);
              } else if (method === 'get') {
                const queryString = this.processParams(params, multipart, method);
                if (queryString) url += `?${queryString}`;
              }
              if (stream) return this.streamer.execute(url, specs);
              const response = await fetch(url, specs);
              return await response.json();
            }
            stream(url, params = {}) {
              return this.execute(url, 'post', params, true);
            }
            get(url, params = {}) {
              return this.execute(url, 'get', params);
            }
            post(url, params = {}) {
              return this.execute(url, 'post', params);
            }
            delete(url, params = {}) {
              return this.execute(url, 'DELETE', params);
            }
            put(url, params = {}) {
              return this.execute(url, 'put', params);
            }
            clean() {
              this.streamer.clean();
            }
          }
          exports.Fetcher = Fetcher;
        }
      });

      /************************
      INTERNAL MODULE: ./stream
      ************************/

      ims.set('./stream', {
        hash: 907269203,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Stream = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _error = require("./error");
          class Stream {
            #SEPARATORS = {
              METADATA: 'ÿ',
              START: '😸',
              END: '🖋️'
            };
            #metadata = {
              started: false,
              value: '',
              parsed: {
                value: void 0
              }
            };
            get metadata() {
              return this.#metadata.parsed;
            }
            #actions = [];
            get actions() {
              return this.#actions;
            }
            #response = '';
            get response() {
              return this.#response;
            }
            #executingPromise;
            #parent;
            #currentTool = {
              started: false,
              value: '',
              parsed: {
                value: void 0
              }
            };
            constructor(parent) {
              this.#parent = parent;
            }
            get stringContent() {
              const {
                START,
                END
              } = this.#SEPARATORS;
              if (!this.#response) return;
              const regex = new RegExp(`${START}.*?${END}`, 'gs');
              return this.#response.replace(regex, '').trim();
            }
            clean() {
              this.#metadata = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              this.#actions = [];
              this.#response = '';
              this.#executingPromise = undefined;
            }
            #processResponse = promise => {
              const metadata = this.#metadata;
              try {
                this.#metadata.parsed.value = JSON.parse(metadata.value);
              } catch (exc) {
                this.#metadata.parsed.error = 'Error parsing metadata';
                promise?.reject(new _error.ApiError('Failed to parse metadata', exc));
                return;
              }
              promise?.resolve({
                value: this.#response,
                ...metadata.parsed.value
              });
              this.#metadata = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
              this.#response = undefined;
              this.#executingPromise = undefined;
            };
            #cleanCurrentTool() {
              this.#currentTool = {
                started: false,
                value: '',
                parsed: {
                  value: void 0
                }
              };
            }
            async #handleMetadata(chunk, response) {
              this.#metadata.started = true;
              const split = chunk.split(this.#SEPARATORS.METADATA);
              this.#metadata.value += split[1];
              return split[0] ? split[0] : '';
            }
            handleStart(chunk, response) {
              const splitted = chunk.split(this.#SEPARATORS.START);
              this.#currentTool.started = true;
              chunk = '';
              if (splitted[1].includes(this.#SEPARATORS.END)) {
                const splitted2 = splitted[1].split(this.#SEPARATORS.END);
                this.#currentTool.value = splitted2[0];
                this.#actions.push(splitted2[0]);
                response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
              } else {
                response += splitted[0];
                this.#currentTool.value += splitted[1];
              }
              return response;
            }
            handleEnd(chunk, response) {
              const splitted = chunk.split(this.#SEPARATORS.END);
              this.#currentTool.value += splitted[0];
              this.#currentTool.started = false;
              this.#actions.push(this.#currentTool.value);
              this.#response += this.#SEPARATORS.START + this.#currentTool.value + this.#SEPARATORS.END;
              return splitted[1];
            }
            async #read(response, promise) {
              const reader = response.body?.getReader();
              if (!reader) {
                promise.reject(new _error.ApiError('Response body is not readable'));
                return;
              }
              try {
                // throw new Error('test 2');
                while (true) {
                  const {
                    done,
                    value
                  } = await reader.read();
                  if (done) {
                    this.#processResponse(promise);
                    return;
                  }
                  if (!value) continue;
                  let chunk = new TextDecoder().decode(value);
                  if (chunk.includes(this.#SEPARATORS.METADATA)) {
                    const cleaned = await this.#handleMetadata(chunk, this.#response);
                    this.#response += cleaned;
                    this.#parent.trigger('metadata.started', this.#metadata.value);
                    this.#parent.trigger('stream.response');
                    continue;
                  }
                  if (this.#metadata.started) {
                    this.#metadata.value += chunk;
                    this.#parent.trigger('stream.response');
                    this.#parent.trigger('action.received', this.#metadata.value);
                    continue;
                  }
                  if (chunk.includes(this.#SEPARATORS.START)) {
                    this.handleStart(chunk, this.#response);
                  } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
                    this.handleEnd(chunk, this.#response);
                    this.#cleanCurrentTool();
                  }
                  this.#response += chunk;
                  this.#parent.triggerEvent('action.received');
                  this.#parent.triggerEvent('stream.response');
                }
              } catch (e) {
                promise.reject(new _error.ApiError('Stream reading failed', e));
              }
            }
            async execute(url, specs) {
              this.#executingPromise = new _core.PendingPromise();
              this.#response = '';
              let response;
              try {
                response = await fetch(url, specs);
                if (!response.ok) {
                  throw new _error.ApiError(`Stream request failed with status ${response.status}`);
                }
                await this.#read(response, this.#executingPromise);
              } catch (e) {
                console.error('Stream execution failed', e);
                this.#executingPromise.reject(new _error.ApiError('Stream execution failed', e));
              }
              return this.#executingPromise;
            }
          }
          exports.Stream = Stream;
        }
      });

      /***********************
      INTERNAL MODULE: ./types
      ***********************/

      ims.set('./types', {
        hash: 573802250,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./api",
        "from": "Api",
        "name": "Api"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Api') && _export("Api", Api = require ? require('./api').Api : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsImdldFJlc3BvbnNlIiwic3BlY3MiLCJ0cmlnZ2VyIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiQXBpRXJyb3IiLCJFcnJvciIsIm9yaWdpbmFsIiwibWVzc2FnZSIsImNhdXNlIiwibmFtZSIsInN0YWNrIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJmZXRjaCIsImpzb24iLCJfZXJyb3IiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJwYXJzZWQiLCJleGVjdXRpbmdQcm9taXNlIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJyZWdleCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJ0cmltIiwicHJvY2Vzc1Jlc3BvbnNlIiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwiZXJyb3IiLCJyZWplY3QiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJjbGVhbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJzdGF0dXMiLCJjb25zb2xlIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvYXBpLnRzIiwiL2Vycm9yLnRzIiwiL2ZldGNoZXIudHMiLCIvc3RyZWFtLnRzIiwiL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLEtBQUEsR0FBQUQsT0FBQTtVQUVPO1VBQVUsTUFDWEUsR0FBSSxTQUFRRCxLQUFBLENBQUFFLE1BQU07WUFDdkIsQ0FBQUMsR0FBSTtZQUNKLElBQUlBLEdBQUdBLENBQUE7Y0FDTixPQUFPLElBQUksQ0FBQyxDQUFBQSxHQUFJLElBQUksRUFBRTtZQUN2QjtZQUNBLENBQUFDLE9BQVE7WUFFUixJQUFJQyxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUQsT0FBUSxDQUFDQyxPQUFP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