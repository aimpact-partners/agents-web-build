System.register(["@beyond-js/kernel@0.1.12/bundle", "@aimpact/agents-api@0.4.1/business/errors", "@aimpact/agents-api@0.4.1/business/response", "@aimpact/agents-api@0.4.1/business/models/open-ai/key", "openai@4.92.1"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, MessagesType, AgentTool, IQueryExecutionParams, IResolvedTool, IIncrementalResponse, IncrementalResponseType, ResponseType, IIncrementalResponseMetadata, OpenAICaller, __beyond_pkg, hmr;
  _export({
    MessagesType: void 0,
    AgentTool: void 0,
    IQueryExecutionParams: void 0,
    IResolvedTool: void 0,
    IIncrementalResponse: void 0,
    IncrementalResponseType: void 0,
    ResponseType: void 0,
    IIncrementalResponseMetadata: void 0,
    OpenAICaller: void 0
  });
  return {
    setters: [function (_beyondJsKernel0112Bundle) {
      dependency_0 = _beyondJsKernel0112Bundle;
    }, function (_aimpactAgentsApi041BusinessErrors) {
      dependency_1 = _aimpactAgentsApi041BusinessErrors;
    }, function (_aimpactAgentsApi041BusinessResponse) {
      dependency_2 = _aimpactAgentsApi041BusinessResponse;
    }, function (_aimpactAgentsApi041BusinessModelsOpenAiKey) {
      dependency_3 = _aimpactAgentsApi041BusinessModelsOpenAiKey;
    }, function (_openai2) {
      dependency_4 = _openai2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/firestore-collection", "0.0.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/response", "0.0.3"], ["@google-cloud/storage", "7.15.2"], ["express", "4.21.2"], ["express-rate-limit", "7.2.0"], ["express-openapi-validator", "5.3.9"], ["firebase-admin", "12.7.0"], ["multer", "1.4.5-lts.1"], ["form-data", "4.0.2"], ["jsonwebtoken", "9.0.2"], ["ws", "8.18.1"], ["socket.io", "4.8.1"], ["node-fetch", "2.7.0"], ["dotenv", "16.4.7"], ["fluent-ffmpeg", "2.1.3"], ["dayjs", "1.11.13"], ["openai", "4.83.0"], ["uuid", "10.0.0"], ["find-up", "7.0.0"], ["postmark", "4.0.2"], ["socket.io-client", "4.8.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@beyond-js/bee", "0.0.6"], ["@beyond-js/local", "0.1.3"], ["@types/jsonwebtoken", "9.0.9"], ["@types/express", "5.0.0"], ["@types/node", "20.6.5"], ["@types/uuid", "9.0.8"], ["@types/ws", "8.5.14"], ["@types/react", "18.3.18"], ["@types/audioworklet", "0.0.71"], ["swagger-ui-express", "5.0.1"], ["yaml", "2.7.0"], ["@aimpact/agents-api", "0.4.1"], ["@aimpact/platform", "0.1.6"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/agents-api@0.4.1/business/models/open-ai/caller"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-api/business/errors', dependency_1], ['@aimpact/agents-api/business/response', dependency_2], ['@aimpact/agents-api/business/models/open-ai/key', dependency_3], ['openai', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 1450119598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OpenAICaller = void 0;
          var _errors = require("@aimpact/agents-api/business/errors");
          var _response = require("@aimpact/agents-api/business/response");
          var _key = require("@aimpact/agents-api/business/models/open-ai/key");
          var _openai = require("openai");
          /*bundle*/ // Define the OpenAICaller class for handling OpenAI API calls
          class OpenAICaller {
            /**
             * Processes responses from the OpenAI API incrementally.
             * This method handles both regular content and tools that need to be executed.
             * @param params - The parameters for the query execution.
             * @returns An async generator yielding incremental responses.
             */
            static async *incremental(params) {
              const {
                messages,
                model,
                temperature,
                tools,
                browser,
                store,
                metadata
              } = params;
              let tool = void 0;
              // Determine the response format based on provided parameters
              const format = (() => {
                const {
                  format,
                  responseFormat,
                  schema
                } = params;
                let response = {
                  type: 'text'
                };
                if (responseFormat === 'json' || format === 'json') response = {
                  type: 'json_object'
                };
                if (responseFormat === 'json_schema' || format === 'json_schema') response = {
                  type: 'json_schema',
                  json_schema: {
                    name: schema.name,
                    description: schema.description ?? undefined,
                    schema: schema.schema,
                    strict: schema.stict ?? null
                  }
                };
                return response;
              })();
              try {
                // Get the API key and initialize the OpenAI client
                const apiKey = await _key.key.get();
                const openai = new _openai.default({
                  apiKey,
                  dangerouslyAllowBrowser: !!browser
                });
                // Create a stream for chat completions
                const stream = await openai.chat.completions.create({
                  model,
                  temperature,
                  messages,
                  functions: tools,
                  stream: true,
                  response_format: format,
                  store,
                  metadata
                });
                let content = '';
                // Process the stream of responses incrementally
                for await (const part of stream) {
                  const choice = part.choices[0];
                  // Check if a function call is detected in the response
                  if (choice.delta?.function_call) {
                    if (!tool) {
                      // Initialize the tool if detected for the first time
                      const {
                        name
                      } = choice.delta.function_call;
                      tool = {
                        name,
                        params: ''
                      };
                    }
                    // Accumulate parameters for the tool function
                    const {
                      arguments: params
                    } = choice.delta.function_call;
                    tool.params += params;
                  } else {
                    // Accumulate content chunks for the regular message
                    const chunk = choice.delta?.content;
                    content += chunk ? chunk : '';
                    if (chunk) yield {
                      chunk
                    };
                  }
                  const finish = choice.finish_reason;
                  if (finish) {
                    if (!tool) {
                      // Regular message processing
                      messages.push({
                        role: 'assistant',
                        content
                      });
                      yield {
                        metadata: {
                          content,
                          messages,
                          finish
                        }
                      };
                    } else {
                      // Tool detected, yield to consumer for review and function execution
                      yield {
                        tool
                      };
                      const {
                        response
                      } = tool;
                      // Consumer can decide to pause processing here for user feedback
                      if (!response) {
                        // End processing gracefully to wait for user feedback
                        yield {
                          metadata: {
                            content,
                            messages,
                            finish: 'paused'
                          }
                        };
                        return;
                      }
                      // Function executed, add response to messages and optionally continue processing
                      if (response?.content) {
                        messages.push({
                          role: 'function',
                          name: tool.name,
                          content: response.content
                        });
                        // Continue processing the initial query after handling the tool
                        // by calling the incremental method recursively with updated messages.
                        yield* this.incremental({
                          ...params,
                          messages
                        });
                      } else {
                        // Handle the case where the function was not executed or was cancelled
                        yield {
                          error: _errors.ErrorGenerator.functionExecutionError(tool)
                        };
                      }
                    }
                    break;
                  }
                }
              } catch (exc) {
                console.error(exc);
                yield {
                  error: _errors.ErrorGenerator.llmGenerationError()
                };
              }
            }
            /**
             * Generates a single response from the OpenAI API.
             * @param params - The parameters for the query execution.
             * @returns A promise that resolves to the API response.
             */
            static async generate(params) {
              const {
                messages,
                model,
                temperature,
                store,
                metadata
              } = params;
              const MAX_RETRIES = 5;
              const RETRY_INTERVAL = 5000;
              let retries = 0;
              const apiKey = await _key.key.get();
              const openai = new _openai.default({
                apiKey
              });
              // Determine the response format based on provided parameters
              const format = (() => {
                const {
                  response,
                  responseFormat,
                  schema
                } = params;
                let format = {
                  type: 'text'
                };
                if (responseFormat === 'json' || response.format === 'json') format = {
                  type: 'json_object'
                };
                if (responseFormat === 'json_schema' || response.format === 'json_schema') {
                  format = {
                    type: 'json_schema',
                    json_schema: {
                      name: schema.name,
                      description: schema.description ?? undefined,
                      schema: schema.schema,
                      strict: schema.stict ?? null
                    }
                  };
                }
                return format;
              })();
              // Retry logic for API call
              while (retries < MAX_RETRIES) {
                try {
                  const response = await openai.chat.completions.create({
                    model,
                    temperature,
                    messages,
                    response_format: format,
                    store,
                    metadata
                  });
                  let {
                    content
                  } = response.choices[0].message;
                  content = content ?? '';
                  return new _response.BusinessResponse({
                    data: {
                      content
                    }
                  });
                } catch (exc) {
                  console.error(exc);
                  retries++;
                  await new Promise(resolve => setTimeout(resolve, RETRY_INTERVAL));
                }
              }
              return new _response.BusinessResponse({
                error: _errors.ErrorGenerator.llmGenerationError()
              });
            }
          }
          exports.OpenAICaller = OpenAICaller;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "MessagesType",
        "name": "MessagesType"
      }, {
        "im": "./index",
        "from": "AgentTool",
        "name": "AgentTool"
      }, {
        "im": "./index",
        "from": "IQueryExecutionParams",
        "name": "IQueryExecutionParams"
      }, {
        "im": "./index",
        "from": "IResolvedTool",
        "name": "IResolvedTool"
      }, {
        "im": "./index",
        "from": "IIncrementalResponse",
        "name": "IIncrementalResponse"
      }, {
        "im": "./index",
        "from": "IncrementalResponseType",
        "name": "IncrementalResponseType"
      }, {
        "im": "./index",
        "from": "ResponseType",
        "name": "ResponseType"
      }, {
        "im": "./index",
        "from": "IIncrementalResponseMetadata",
        "name": "IIncrementalResponseMetadata"
      }, {
        "im": "./index",
        "from": "OpenAICaller",
        "name": "OpenAICaller"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'MessagesType') && _export("MessagesType", MessagesType = require ? require('./index').MessagesType : value);
        (require || prop === 'AgentTool') && _export("AgentTool", AgentTool = require ? require('./index').AgentTool : value);
        (require || prop === 'IQueryExecutionParams') && _export("IQueryExecutionParams", IQueryExecutionParams = require ? require('./index').IQueryExecutionParams : value);
        (require || prop === 'IResolvedTool') && _export("IResolvedTool", IResolvedTool = require ? require('./index').IResolvedTool : value);
        (require || prop === 'IIncrementalResponse') && _export("IIncrementalResponse", IIncrementalResponse = require ? require('./index').IIncrementalResponse : value);
        (require || prop === 'IncrementalResponseType') && _export("IncrementalResponseType", IncrementalResponseType = require ? require('./index').IncrementalResponseType : value);
        (require || prop === 'ResponseType') && _export("ResponseType", ResponseType = require ? require('./index').ResponseType : value);
        (require || prop === 'IIncrementalResponseMetadata') && _export("IIncrementalResponseMetadata", IIncrementalResponseMetadata = require ? require('./index').IIncrementalResponseMetadata : value);
        (require || prop === 'OpenAICaller') && _export("OpenAICaller", OpenAICaller = require ? require('./index').OpenAICaller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JzIiwicmVxdWlyZSIsIl9yZXNwb25zZSIsIl9rZXkiLCJfb3BlbmFpIiwiT3BlbkFJQ2FsbGVyIiwiaW5jcmVtZW50YWwiLCJwYXJhbXMiLCJtZXNzYWdlcyIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJ0b29scyIsImJyb3dzZXIiLCJzdG9yZSIsIm1ldGFkYXRhIiwidG9vbCIsImZvcm1hdCIsInJlc3BvbnNlRm9ybWF0Iiwic2NoZW1hIiwicmVzcG9uc2UiLCJ0eXBlIiwianNvbl9zY2hlbWEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJzdHJpY3QiLCJzdGljdCIsImFwaUtleSIsImtleSIsImdldCIsIm9wZW5haSIsImRlZmF1bHQiLCJkYW5nZXJvdXNseUFsbG93QnJvd3NlciIsInN0cmVhbSIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsImZ1bmN0aW9ucyIsInJlc3BvbnNlX2Zvcm1hdCIsImNvbnRlbnQiLCJwYXJ0IiwiY2hvaWNlIiwiY2hvaWNlcyIsImRlbHRhIiwiZnVuY3Rpb25fY2FsbCIsImFyZ3VtZW50cyIsImNodW5rIiwiZmluaXNoIiwiZmluaXNoX3JlYXNvbiIsInB1c2giLCJyb2xlIiwiZXJyb3IiLCJFcnJvckdlbmVyYXRvciIsImZ1bmN0aW9uRXhlY3V0aW9uRXJyb3IiLCJleGMiLCJjb25zb2xlIiwibGxtR2VuZXJhdGlvbkVycm9yIiwiZ2VuZXJhdGUiLCJNQVhfUkVUUklFUyIsIlJFVFJZX0lOVEVSVkFMIiwicmV0cmllcyIsIm1lc3NhZ2UiLCJCdXNpbmVzc1Jlc3BvbnNlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFB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