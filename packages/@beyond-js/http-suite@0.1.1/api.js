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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmV0Y2hlciIsInJlcXVpcmUiLCJfY29yZSIsIkFwaSIsIkV2ZW50cyIsInVybCIsImZldGNoZXIiLCJhY3Rpb25zIiwic3RyZWFtUmVzcG9uc2UiLCJtZXRhZGF0YSIsInN0cmluZ0NvbnRlbnQiLCJjb25zdHJ1Y3RvciIsIkZldGNoZXIiLCJvbiIsImdldFJlc3BvbnNlIiwic3BlY3MiLCJ0cmlnZ2VyIiwiI2dldFJlc3BvbnNlIiwiYWN0aW9uIiwibWV0aG9kIiwicm91dGUiLCJjbGVhbiIsImdldFVSTCIsImJlYXJlciIsImdldCIsInBvc3QiLCJwdXQiLCJkZWxldGUiLCJzdHJlYW0iLCJleHBvcnRzIiwiQXBpRXJyb3IiLCJFcnJvciIsIm9yaWdpbmFsIiwibWVzc2FnZSIsImNhdXNlIiwibmFtZSIsInN0YWNrIiwiX21vZGVsIiwiX3N0cmVhbSIsIlJlYWN0aXZlTW9kZWwiLCJzdHJlYW1lciIsImZvcm1EYXRhSW5zdGFuY2UiLCJjdXN0b21IZWFkZXJzIiwiZGVmYXVsdEhlYWRlcnMiLCJTdHJlYW0iLCJyZXNwb25zZSIsInRva2VuIiwic2V0SGVhZGVycyIsImhlYWRlcnMiLCJnZXRIZWFkZXJzIiwibXVsdGlwYXJ0IiwibWVyZ2VkSGVhZGVycyIsIkhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYXBwZW5kIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwiY3JlYXRlRm9ybURhdGEiLCJGb3JtRGF0YSIsInByb2Nlc3NHZXRQYXJhbXMiLCJwYXJhbXMiLCJsZW5ndGgiLCJwYXJhbWV0ZXJzIiwiVVJMU2VhcmNoUGFyYW1zIiwiTmFOIiwidW5kZWZpbmVkIiwiaW5jbHVkZXMiLCJwcm9jZXNzUGFyYW1zIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhlY3V0ZSIsIm1vZGUiLCJib2R5IiwicXVlcnlTdHJpbmciLCJmZXRjaCIsImpzb24iLCJfZXJyb3IiLCJTRVBBUkFUT1JTIiwiTUVUQURBVEEiLCJTVEFSVCIsIkVORCIsInN0YXJ0ZWQiLCJwYXJzZWQiLCJleGVjdXRpbmdQcm9taXNlIiwicGFyZW50IiwiY3VycmVudFRvb2wiLCJyZWdleCIsIlJlZ0V4cCIsInJlcGxhY2UiLCJ0cmltIiwicHJvY2Vzc1Jlc3BvbnNlIiwicHJvbWlzZSIsInBhcnNlIiwiZXhjIiwiZXJyb3IiLCJyZWplY3QiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJjbGVhbmVkIiwidHJpZ2dlckV2ZW50IiwiZSIsIlBlbmRpbmdQcm9taXNlIiwib2siLCJzdGF0dXMiLCJjb25zb2xlIiwiZGVmaW5lUHJvcGVydHkiXSwic291cmNlcyI6WyIvL2FwaS50cy8iLCIvL2Vycm9yLnRzLyIsIi8vZmV0Y2hlci50cy8iLCIvL3N0cmVhbS50cy8iLCIvL3R5cGVzLnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxRQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxLQUFBLEdBQUFELE9BQUE7VUFFTztVQUFVLE1BQ1hFLEdBQUksU0FBUUQsS0FBQSxDQUFBRSxNQUFNO1lBQ3ZCLENBQUFDLEdBQUk7WUFDSixJQUFJQSxHQUFHQSxDQUFBO2NBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQUEsR0FBSSxJQUFJLEVBQUU7WUFDdkI7WUFDQSxDQUFBQyxPQUFRO1lBRVIsSUFBSUMsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFELE9BQVEs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