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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JzIiwicmVxdWlyZSIsIl9yZXNwb25zZSIsIl9rZXkiLCJfb3BlbmFpIiwiT3BlbkFJQ2FsbGVyIiwiaW5jcmVtZW50YWwiLCJwYXJhbXMiLCJtZXNzYWdlcyIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJ0b29scyIsImJyb3dzZXIiLCJzdG9yZSIsIm1ldGFkYXRhIiwidG9vbCIsImZvcm1hdCIsInJlc3BvbnNlRm9ybWF0Iiwic2NoZW1hIiwicmVzcG9uc2UiLCJ0eXBlIiwianNvbl9zY2hlbWEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJzdHJpY3QiLCJzdGljdCIsImFwaUtleSIsImtleSIsImdldCIsIm9wZW5haSIsImRlZmF1bHQiLCJkYW5nZXJvdXNseUFsbG93QnJvd3NlciIsInN0cmVhbSIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsImZ1bmN0aW9ucyIsInJlc3BvbnNlX2Zvcm1hdCIsImNvbnRlbnQiLCJwYXJ0IiwiY2hvaWNlIiwiY2hvaWNlcyIsImRlbHRhIiwiZnVuY3Rpb25fY2FsbCIsImFyZ3VtZW50cyIsImNodW5rIiwiZmluaXNoIiwiZmluaXNoX3JlYXNvbiIsInB1c2giLCJyb2xlIiwiZXJyb3IiLCJFcnJvckdlbmVyYXRvciIsImZ1bmN0aW9uRXhlY3V0aW9uRXJyb3IiLCJleGMiLCJjb25zb2xlIiwibGxtR2VuZXJhdGlvbkVycm9yIiwiZ2VuZXJhdGUiLCJNQVhfUkVUUklFUyIsIlJFVFJZX0lOVEVSVkFMIiwicmV0cmllcyIsIm1lc3NhZ2UiLCJCdXNpbmVzc1Jlc3BvbnNlIiwiZGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIvL2luZGV4LnRzLyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJ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