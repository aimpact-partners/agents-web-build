System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-client@0.0.29/errors", "@aimpact/agents-client@0.0.29/models/open-ai/caller", "@aimpact/agents-client@0.0.29/response", "@aimpact/agents-client@0.0.29/endpoint"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, PromptTemplateExecutor, IPromptSpecs, IPromptGenerationSpecs, ITool, IProject, ILiterals, IPromptParams, IUpdatePromptParams, PromptTemplateLanguages, PromptTemplateProcessor, PromptTemplate, IToolSpecs, __beyond_pkg, hmr;
  _export({
    PromptTemplateExecutor: void 0,
    IPromptSpecs: void 0,
    IPromptGenerationSpecs: void 0,
    ITool: void 0,
    IProject: void 0,
    ILiterals: void 0,
    IPromptParams: void 0,
    IUpdatePromptParams: void 0,
    PromptTemplateLanguages: void 0,
    PromptTemplateProcessor: void 0,
    PromptTemplate: void 0,
    IToolSpecs: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsClient0029Errors) {
      dependency_1 = _aimpactAgentsClient0029Errors;
    }, function (_aimpactAgentsClient0029ModelsOpenAiCaller) {
      dependency_2 = _aimpactAgentsClient0029ModelsOpenAiCaller;
    }, function (_aimpactAgentsClient0029Response) {
      dependency_3 = _aimpactAgentsClient0029Response;
    }, function (_aimpactAgentsClient0029Endpoint) {
      dependency_4 = _aimpactAgentsClient0029Endpoint;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/response", "0.0.3"], ["@beyond-js/pending-promise", "0.0.4"], ["openai", "4.83.0"], ["dotenv", "16.4.7"], ["express", "4.21.2"], ["@types/express", "4.17.21"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/bee", "0.0.6"], ["@types/node", "16.18.126"], ["@aimpact/agents-client", "0.0.29"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-client@0.0.29/prompts"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-client/errors', dependency_1], ['@aimpact/agents-client/models/open-ai/caller', dependency_2], ['@aimpact/agents-client/response', dependency_3], ['@aimpact/agents-client/endpoint', dependency_4]]);
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./executor
      **************************/
      ims.set('./executor', {
        hash: 1852215236,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateExecutor = void 0;
          var _caller = require("@aimpact/agents-client/models/open-ai/caller");
          var _response = require("@aimpact/agents-client/response");
          var _processor = require("./processor");
          var _tools = require("./tools");
          /*bundle*/ /**
                      * The prompt executor is used both for Generative AI and for Conversational AI
                      * Both uses chat completions Open AI API
                      */
          class PromptTemplateExecutor {
            #messages;
            get messages() {
              return this.#messages;
            }
            #model;
            get model() {
              return this.#model;
            }
            #temperature;
            get temperature() {
              return this.#temperature;
            }
            #tools;
            #prompt;
            get prompt() {
              return this.#prompt;
            }
            #responseFormat;
            get responseFormat() {
              return this.#responseFormat;
            }
            #format;
            get format() {
              return this.#format;
            }
            #schema;
            get schema() {
              return this.#schema;
            }
            #store;
            get store() {
              return this.#store;
            }
            #metadata;
            get metadata() {
              return this.#metadata;
            }
            constructor(params) {
              this.#model = params.model;
              this.#temperature = params.temperature;
              this.#tools = params.tools;
              this.#responseFormat = params.responseFormat;
              this.#format = params.format ?? params.responseFormat;
              this.#store = params.store ?? null;
              this.#metadata = params.metadata ?? undefined;
              this.#messages = params.messages ? params.messages : [];
              this.#prompt = new _processor.PromptTemplateProcessor(params);
            }
            async #prepare() {
              const prompt = this.#prompt;
              await prompt.get();
              if (prompt.error) return {
                error: prompt.error
              };
              const {
                model,
                temperature
              } = this;
              const messages = this.#messages;
              // If messages is empty, the prompt is considered to be used for Generative AI.
              // If there are messages, then the prompt is considered the 'system' or 'assistant mission' in
              // a conversation with an AI assistant.
              messages.length ? messages.unshift({
                role: 'system',
                content: prompt.value
              }) : messages.push({
                role: 'user',
                content: prompt.value
              });
              const tools = new _tools.Tools(prompt.tools, this.#tools);
              const store = this.#store;
              const format = this.#format = prompt.format;
              const schema = this.#schema = prompt.schema;
              const metadata = this.#metadata;
              return {
                prompt,
                model,
                temperature,
                messages,
                tools,
                store,
                metadata,
                format,
                schema
              };
            }
            async execute() {
              const {
                error,
                prompt,
                messages,
                model,
                temperature,
                tools,
                format,
                schema,
                store,
                metadata
              } = await this.#prepare();
              if (error) return new _response.AgentsClientResponse({
                error
              });
              // Call Open AI to generate the response of the prompt
              // @todo Add code to support tools in cases of non-incremental executions
              let content;
              while (true) {
                const response = await _caller.OpenAICaller.generate({
                  model,
                  temperature,
                  messages,
                  tools: prompt.tools,
                  format,
                  schema,
                  store,
                  metadata
                });
                content = response.data.content;
                break;
              }
              return new _response.AgentsClientResponse({
                data: {
                  content
                }
              });
            }
            async *incremental() {
              const {
                error,
                prompt,
                messages,
                model,
                temperature,
                tools,
                format,
                schema,
                store,
                metadata
              } = await this.#prepare();
              if (error) return new _response.AgentsClientResponse({
                error
              });
              // Call Open AI to generate the response of the prompt
              // The iterator can return a tool call of a chunk
              // Keep iterating while the query returns a tool call
              while (true) {
                const iterator = _caller.OpenAICaller.incremental({
                  model,
                  temperature,
                  messages,
                  tools: prompt.tools,
                  format,
                  schema,
                  store,
                  metadata
                });
                for await (const data of iterator) {
                  yield data;
                }
                let tool;
                for await (const {
                  tool: resolvedTool,
                  chunk
                } of iterator) {
                  if (resolvedTool) {
                    tool = resolvedTool;
                    break;
                  }
                  yield {
                    chunk
                  };
                }
                if (!tool) return;
                // Notify the use of the tool
                // yield { fnc: '😸' + JSON.stringify({ type: 'tool', data: fnc }) + '🖋️' };
                // Add the tool to the messages array
                messages.push({
                  role: 'assistant',
                  content: null,
                  function_call: {
                    name: tool.name,
                    arguments: tool.params
                  }
                });
                // Execute the tool
                const response = await tools.execute(tool);
                // Notify the tool response
                // yield { fnc: '😸' + JSON.stringify({ type: 'kb-response', data: response }) + '🖋️' };
                // Add the tool response to the messages array
                messages.push({
                  role: 'function',
                  name: tool.name,
                  content: response
                });
              }
            }
          }
          exports.PromptTemplateExecutor = PromptTemplateExecutor;
        }
      });

      /****************************
      INTERNAL MODULE: ./interfaces
      ****************************/

      ims.set('./interfaces', {
        hash: 630350338,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**************************
      INTERNAL MODULE: ./language
      **************************/

      ims.set('./language', {
        hash: 3071659211,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateLanguages = void 0;
          var _endpoint = require("@aimpact/agents-client/endpoint");
          var _errors = require("@aimpact/agents-client/errors");
          /*bundle*/
          class PromptTemplateLanguages {
            #specs;
            #API = `${_endpoint.endpoint}/prompts/templates`;
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
                  this.#error = _errors.ErrorGenerator.invalidParameters('language');
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
                  this.#error = _errors.ErrorGenerator.agentsAPIError(this.#specs.name, error);
                  return;
                }
                this.#value = data?.value;
                this.#identifier = data?.identifier;
                this.#language = data?.language;
                this.#literals = data?.literals;
                this.#project = data?.project;
              } catch (exc) {
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
              }
            }
            async set(params) {
              const {
                language,
                text
              } = params;
              if (!language) {
                this.#error = _errors.ErrorGenerator.invalidParameters('language');
                return;
              }
              if (!text) {
                this.#error = _errors.ErrorGenerator.invalidParameters('text');
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
                  this.#error = _errors.ErrorGenerator.agentsAPIError(this.#specs.name, error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#literals = data?.literals;
                this.#project = data?.project;
                return data;
              } catch (exc) {
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
              }
            }
          }
          exports.PromptTemplateLanguages = PromptTemplateLanguages;
        }
      });

      /***************************
      INTERNAL MODULE: ./processor
      ***************************/

      ims.set('./processor', {
        hash: 4109470349,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplateProcessor = void 0;
          var _endpoint = require("@aimpact/agents-client/endpoint");
          var _errors = require("@aimpact/agents-client/errors");
          /*bundle*/
          class PromptTemplateProcessor {
            #specs;
            #API = `${_endpoint.endpoint}/prompts/templates`;
            constructor(specs) {
              this.#specs = specs;
            }
            #value;
            get value() {
              return this.#value;
            }
            #tools;
            get tools() {
              return this.#tools;
            }
            #format;
            get format() {
              return this.#format;
            }
            #schema;
            get schema() {
              return this.#schema;
            }
            #error;
            get error() {
              return this.#error;
            }
            get valid() {
              return !this.#error;
            }
            async get() {
              if (this.#value || this.#error) return; // Check if already got
              try {
                const {
                  language
                } = this.#specs;
                if (!language) {
                  this.#error = _errors.ErrorGenerator.invalidParameters('language');
                  return;
                }
                const body = JSON.stringify(this.#specs);
                const endpoint = `${this.#API}/${this.#specs.name}/process`;
                const options = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body
                };
                const response = await fetch(endpoint, options);
                const {
                  error,
                  data
                } = await response.json();
                if (error) {
                  this.#error = _errors.ErrorGenerator.agentsAPIError(this.#specs.name, error);
                  return;
                }
                this.#value = data?.value;
                this.#format = data?.format;
                this.#schema = data?.schema ? data?.schema : undefined;
                this.#tools = data?.tools;
              } catch (exc) {
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
              }
            }
          }
          exports.PromptTemplateProcessor = PromptTemplateProcessor;
        }
      });

      /************************
      INTERNAL MODULE: ./prompt
      ************************/

      ims.set('./prompt', {
        hash: 1955170020,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PromptTemplate = void 0;
          var _endpoint = require("@aimpact/agents-client/endpoint");
          var _errors = require("@aimpact/agents-client/errors");
          const API = `${_endpoint.endpoint}/prompts/templates`;
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
                  this.#error = _errors.ErrorGenerator.agentsAPIError(this.#name, error);
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
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
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
                this.#error = _errors.ErrorGenerator.invalidParameters('projectId');
                return;
              }
              if (!name) {
                this.#error = _errors.ErrorGenerator.invalidParameters('name');
                return;
              }
              if (!is) {
                this.#error = _errors.ErrorGenerator.invalidParameters('is');
                return;
              }
              if (!format) {
                this.#error = _errors.ErrorGenerator.invalidParameters('format');
                return;
              }
              if (!params.language) {
                this.#error = _errors.ErrorGenerator.invalidParameters('language');
                return;
              }
              if (!params.language.languages) {
                this.#error = _errors.ErrorGenerator.invalidParameters('language');
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
                  this.#error = _errors.ErrorGenerator.agentsAPIError(params.name, error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#tools = data?.tools;
                return data;
              } catch (exc) {
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
              }
            }
            async update(params) {
              const {
                id
              } = params;
              if (!id) {
                this.#error = _errors.ErrorGenerator.invalidParameters('id');
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
                  this.#error = _errors.ErrorGenerator.agentsAPIError(params.name, error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#tools = data?.tools;
                return data;
              } catch (exc) {
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
              }
            }
            async updateLanguages(language) {
              if (!language) {
                this.#error = _errors.ErrorGenerator.invalidParameters('language');
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
                  this.#error = _errors.ErrorGenerator.agentsAPIError(id, error);
                  return;
                }
                this.#value = data?.value;
                this.#language = data?.language;
                this.#literals = data?.literals;
                this.#project = data?.project;
                return data;
              } catch (exc) {
                this.#error = _errors.ErrorGenerator.internalServerError(exc);
              }
            }
          }
          exports.PromptTemplate = PromptTemplate;
        }
      });

      /***********************
      INTERNAL MODULE: ./tools
      ***********************/

      ims.set('./tools', {
        hash: 3498340109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Tools = void 0;
          class Tools {
            #specs; // The consumer can specify additional parameters
            #declarations; // The declarations for the tools as stored in the prompt template storage
            constructor(declarations, specs) {
              this.#declarations = declarations;
              this.#specs = specs;
            }
            async execute(resolved) {
              return '';
            }
          }
          exports.Tools = Tools;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./executor",
        "from": "PromptTemplateExecutor",
        "name": "PromptTemplateExecutor"
      }, {
        "im": "./interfaces",
        "from": "IPromptSpecs",
        "name": "IPromptSpecs"
      }, {
        "im": "./interfaces",
        "from": "IPromptGenerationSpecs",
        "name": "IPromptGenerationSpecs"
      }, {
        "im": "./interfaces",
        "from": "ITool",
        "name": "ITool"
      }, {
        "im": "./interfaces",
        "from": "IProject",
        "name": "IProject"
      }, {
        "im": "./interfaces",
        "from": "ILiterals",
        "name": "ILiterals"
      }, {
        "im": "./interfaces",
        "from": "IPromptParams",
        "name": "IPromptParams"
      }, {
        "im": "./interfaces",
        "from": "IUpdatePromptParams",
        "name": "IUpdatePromptParams"
      }, {
        "im": "./language",
        "from": "PromptTemplateLanguages",
        "name": "PromptTemplateLanguages"
      }, {
        "im": "./processor",
        "from": "PromptTemplateProcessor",
        "name": "PromptTemplateProcessor"
      }, {
        "im": "./prompt",
        "from": "PromptTemplate",
        "name": "PromptTemplate"
      }, {
        "im": "./tools",
        "from": "IToolSpecs",
        "name": "IToolSpecs"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'PromptTemplateExecutor') && _export("PromptTemplateExecutor", PromptTemplateExecutor = require ? require('./executor').PromptTemplateExecutor : value);
        (require || prop === 'IPromptSpecs') && _export("IPromptSpecs", IPromptSpecs = require ? require('./interfaces').IPromptSpecs : value);
        (require || prop === 'IPromptGenerationSpecs') && _export("IPromptGenerationSpecs", IPromptGenerationSpecs = require ? require('./interfaces').IPromptGenerationSpecs : value);
        (require || prop === 'ITool') && _export("ITool", ITool = require ? require('./interfaces').ITool : value);
        (require || prop === 'IProject') && _export("IProject", IProject = require ? require('./interfaces').IProject : value);
        (require || prop === 'ILiterals') && _export("ILiterals", ILiterals = require ? require('./interfaces').ILiterals : value);
        (require || prop === 'IPromptParams') && _export("IPromptParams", IPromptParams = require ? require('./interfaces').IPromptParams : value);
        (require || prop === 'IUpdatePromptParams') && _export("IUpdatePromptParams", IUpdatePromptParams = require ? require('./interfaces').IUpdatePromptParams : value);
        (require || prop === 'PromptTemplateLanguages') && _export("PromptTemplateLanguages", PromptTemplateLanguages = require ? require('./language').PromptTemplateLanguages : value);
        (require || prop === 'PromptTemplateProcessor') && _export("PromptTemplateProcessor", PromptTemplateProcessor = require ? require('./processor').PromptTemplateProcessor : value);
        (require || prop === 'PromptTemplate') && _export("PromptTemplate", PromptTemplate = require ? require('./prompt').PromptTemplate : value);
        (require || prop === 'IToolSpecs') && _export("IToolSpecs", IToolSpecs = require ? require('./tools').IToolSpecs : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2FsbGVyIiwicmVxdWlyZSIsIl9yZXNwb25zZSIsIl9wcm9jZXNzb3IiLCJfdG9vbHMiLCJQcm9tcHRUZW1wbGF0ZUV4ZWN1dG9yIiwibWVzc2FnZXMiLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwidG9vbHMiLCJwcm9tcHQiLCJyZXNwb25zZUZvcm1hdCIsImZvcm1hdCIsInNjaGVtYSIsInN0b3JlIiwibWV0YWRhdGEiLCJjb25zdHJ1Y3RvciIsInBhcmFtcyIsInVuZGVmaW5lZCIsIlByb21wdFRlbXBsYXRlUHJvY2Vzc29yIiwicHJlcGFyZSIsIiNwcmVwYXJlIiwiZ2V0IiwiZXJyb3IiLCJsZW5ndGgiLCJ1bnNoaWZ0Iiwicm9sZSIsImNvbnRlbnQiLCJ2YWx1ZSIsInB1c2giLCJUb29scyIsImV4ZWN1dGUiLCJBZ2VudHNDbGllbnRSZXNwb25zZSIsInJlc3BvbnNlIiwiT3BlbkFJQ2FsbGVyIiwiZ2VuZXJhdGUiLCJkYXRhIiwiaW5jcmVtZW50YWwiLCJpdGVyYXRvciIsInRvb2wiLCJyZXNvbHZlZFRvb2wiLCJjaHVuayIsImZ1bmN0aW9uX2NhbGwiLCJuYW1lIiwiYXJndW1lbnRzIiwiZXhwb3J0cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX2VuZHBvaW50IiwiX2Vycm9ycyIsIlByb21wdFRlbXBsYXRlTGFuZ3VhZ2VzIiwic3BlY3MiLCJBUEkiLCJlbmRwb2ludCIsImlkZW50aWZpZXIiLCJsYW5ndWFnZSIsImxpdGVyYWxzIiwicHJvamVjdCIsInZhbGlkIiwiRXJyb3JHZW5lcmF0b3IiLCJpbnZhbGlkUGFyYW1ldGVycyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJqc29uIiwiYWdlbnRzQVBJRXJyb3IiLCJleGMiLCJpbnRlcm5hbFNlcnZlckVycm9yIiwic2V0IiwidGV4dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbXB0VGVtcGxhdGUiLCJpZCIsImlzIiwicHJvamVjdElkIiwibGFuZ3VhZ2VzIiwiZGVmYXVsdCIsInVwZGF0ZSIsImFzc2lnbiIsInVwZGF0ZUxhbmd1YWdlcyIsImRlY2xhcmF0aW9ucyIsInJlc29sdmVkIl0sInNvdXJjZXMiOlsiL2V4ZWN1dG9yLnRzIiwiL2ludGVyZmFjZXMudHMiLCIvbGFuZ3VhZ2UudHMiLCIvcHJvY2Vzc29yLnRzIiwiL3Byb21wdC50cyIsIi90b29scy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBTUEsSUFBQUEsT0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsU0FBQSxHQUFBRCxPQUFBO1VBRUEsSUFBQUUsVUFBQSxHQUFBRixPQUFBO1VBRUEsSUFBQUcsTUFBQSxHQUFBSCxPQUFBO1VBaUJPLFdBSlA7Ozs7VUFJaUIsTUFBT0ksc0JBQXNCO1lBQzdDLENBQUFDLFFBQVM7WUFDVCxJQUFJQSxRQUFRQSxDQUFBO2NBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQUEsUUFBUztZQUN0QjtZQUVBLENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFDLFdBQVk7WUFDWixJQUFJQSxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsV0FBWTtZQUN6QjtZQUVBLENBQUFDLEtBQU07WUFFTixDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFFQSxDQUFBQyxjQUFlO1lBQ2YsSUFBSUEsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBQSxjQUFlO1lBQzVCO1lBRUEsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFP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