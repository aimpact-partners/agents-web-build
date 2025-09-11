System.register(["@beyond-js/kernel@0.1.14/bundle", "@aimpact/agents-client@0.0.29/errors", "@aimpact/agents-client@0.0.29/models/open-ai/key", "@aimpact/agents-client@0.0.29/response", "openai@4.104.0"], function (_export, _context) {
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
    setters: [function (_beyondJsKernel0114Bundle) {
      dependency_0 = _beyondJsKernel0114Bundle;
    }, function (_aimpactAgentsClient0029Errors) {
      dependency_1 = _aimpactAgentsClient0029Errors;
    }, function (_aimpactAgentsClient0029ModelsOpenAiKey) {
      dependency_2 = _aimpactAgentsClient0029ModelsOpenAiKey;
    }, function (_aimpactAgentsClient0029Response) {
      dependency_3 = _aimpactAgentsClient0029Response;
    }, function (_openai2) {
      dependency_4 = _openai2;
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
          "vspecifier": "@aimpact/agents-client@0.0.29/models/open-ai/caller"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@aimpact/agents-client/errors', dependency_1], ['@aimpact/agents-client/models/open-ai/key', dependency_2], ['@aimpact/agents-client/response', dependency_3], ['openai', dependency_4]]);
      ims = new Map();
      /***********************
      INTERNAL MODULE: ./index
      ***********************/
      ims.set('./index', {
        hash: 207877550,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OpenAICaller = void 0;
          var _errors = require("@aimpact/agents-client/errors");
          var _key = require("@aimpact/agents-client/models/open-ai/key");
          var _response = require("@aimpact/agents-client/response");
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
                  return new _response.AgentsClientResponse({
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
              return new _response.AgentsClientResponse({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXJyb3JzIiwicmVxdWlyZSIsIl9rZXkiLCJfcmVzcG9uc2UiLCJfb3BlbmFpIiwiT3BlbkFJQ2FsbGVyIiwiaW5jcmVtZW50YWwiLCJwYXJhbXMiLCJtZXNzYWdlcyIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJ0b29scyIsImJyb3dzZXIiLCJzdG9yZSIsIm1ldGFkYXRhIiwidG9vbCIsImZvcm1hdCIsInJlc3BvbnNlRm9ybWF0Iiwic2NoZW1hIiwicmVzcG9uc2UiLCJ0eXBlIiwianNvbl9zY2hlbWEiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ1bmRlZmluZWQiLCJzdHJpY3QiLCJzdGljdCIsImFwaUtleSIsImtleSIsImdldCIsIm9wZW5haSIsImRlZmF1bHQiLCJkYW5nZXJvdXNseUFsbG93QnJvd3NlciIsInN0cmVhbSIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsImZ1bmN0aW9ucyIsInJlc3BvbnNlX2Zvcm1hdCIsImNvbnRlbnQiLCJwYXJ0IiwiY2hvaWNlIiwiY2hvaWNlcyIsImRlbHRhIiwiZnVuY3Rpb25fY2FsbCIsImFyZ3VtZW50cyIsImNodW5rIiwiZmluaXNoIiwiZmluaXNoX3JlYXNvbiIsInB1c2giLCJyb2xlIiwiZXJyb3IiLCJFcnJvckdlbmVyYXRvciIsImZ1bmN0aW9uRXhlY3V0aW9uRXJyb3IiLCJleGMiLCJjb25zb2xlIiwibGxtR2VuZXJhdGlvbkVycm9yIiwiZ2VuZXJhdGUiLCJNQVhfUkVUUklFUyIsIlJFVFJZX0lOVEVSVkFMIiwicmV0cmllcyIsIm1lc3NhZ2UiLCJBZ2VudHNDbGllbnRSZXNwb25zZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE9BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLElBQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLFNBQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLE9BQUEsR0FBQUgsT0FBQTtVQW1FTyxXQURQO1VBQ2lCLE1BQU9JLFlBQVk7WUFDbkM7Ozs7OztZQU1BLGNBQWNDLFdBQVdBLENBQUNDLE1BQTZCO2NBQ3RELE1BQU07Z0JBQUVDLFFBQVE7Z0JBQUVDLEtBQUs7Z0JBQUVDLFdBQVc7Z0JBQUVDLEtBQUs7Z0JBQUVDLE9BQU87Z0JBQUVDLEtBQUs7Z0JBQUVDO2NBQVEsQ0FBRSxHQUFHUCxNQUFNO2NBRWhGLElBQUlRLElBQUksR0FBOEIsS0FBSyxDQUFDO2NBRTVDO2NBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQUMsTUFBSztnQkFDcEIsTUFBTTtrQkFBRUEsTUFBTTtrQkFBRUMsY0FBYztrQkFBRUM7Z0JBQU0sQ0FBRSxHQUFHWCxNQUFNO2dCQUNqRCxJQUFJWSxRQUFRLEdBQW1CO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU0sQ0FBRTtnQkFDL0MsSUFBSUgsY0FBYyxLQUFLLE1BQU0sSUFBSUQsTUFBTSxLQUFLLE1BQU0sRUFBRUcsUUFBUSxHQUFHO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQWEsQ0FBRTtnQkFDdEYsSUFBSUgsY0FBYyxLQUFLLGFBQWEsSUFBSUQsTUFBTSxLQUFLLGFBQWEsRUFDL0RHLFFBQVEsR0FBRztrQkFDVkMsSUFBSSxFQUFFLGFBQWE7a0JBQ25CQyxXQUFXLEVBQUU7b0JBQ1pDLElBQUksRUFBRUosTUFBTSxDQUFDSSxJQUFJO29CQUNqQkMsV0FBVyxFQUFFTCxNQUFNLENBQUNLLFdBQVcsSUFBSUMsU0FBUztvQkFDNUNOLE1BQU0sRUFBRUEsTUFBTSxDQUFDQSxNQUFNO29CQUNyQk8sTUFBTSxFQUFFUCxNQUFNLENBQUNRLEtBQUssSUFBSTs7aUJBRXpCO2dCQUNGLE9BQU9QLFFBQVE7Y0FDaEIsQ0FBQyxFQUFDLENBQUU7Y0FFSixJQUFJO2dCQUNIO2dCQUNBLE1BQU1RLE1BQU0sR0FBRyxNQUFNekIsSUFBQSxDQUFBMEIsR0FBRyxDQUFDQyxHQUFHLEVBQUU7Z0JBQzlCLE1BQU1DLE1BQU0sR0FBRyxJQUFJMUIsT0FBQSxDQUFBMkIsT0FBTSxDQUFDO2tCQUFFSixNQUFNO2tCQUFFSyx1QkFBdUIsRUFBRSxDQUFDLENBQUNwQjtnQkFBTyxDQUFFLENBQUM7Z0JBQ3pFO2dCQUNBLE1BQU1xQixNQUFNLEdBQUcsTUFBTUgsTUFBTSxDQUFDSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO2tCQUNuRDNCLEtBQUs7a0JBQ0xDLFdBQVc7a0JBQ1hGLFFBQVE7a0JBQ1I2QixTQUFTLEVBQUUxQixLQUFLO2tCQUNoQnNCLE1BQU0sRUFBRSxJQUFJO2tCQUNaSyxlQUFlLEVBQUV0QixNQUFNO2tCQUN2QkgsS0FBSztrQkFDTEM7aUJBQ0EsQ0FBQztnQkFDRixJQUFJeUIsT0FBTyxHQUFHLEVBQUU7Z0JBRWhCO2dCQUNBLFdBQVcsTUFBTUMsSUFBSSxJQUFJUCxNQUFNLEVBQUU7a0JBQ2hDLE1BQU1RLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2tCQUU5QjtrQkFDQSxJQUFJRCxNQUFNLENBQUNFLEtBQUssRUFBRUMsYUFBYSxFQUFFO29CQUNoQyxJQUFJLENBQUM3QixJQUFJLEVBQUU7c0JBQ1Y7c0JBQ0EsTUFBTTt3QkFBRU87c0JBQUksQ0FBRSxHQUFHbUIsTUFBTSxDQUFDRSxLQUFLLENBQUNDLGFBQWE7c0JBQzNDN0IsSUFBSSxHQUFHO3dCQUFFTyxJQUFJO3dCQUFFZixNQUFNLEVBQUU7c0JBQUUsQ0FBRTs7b0JBRzVCO29CQUNBLE1BQU07c0JBQUVzQyxTQUFTLEVBQUV0QztvQkFBTSxDQUFFLEdBQUdrQyxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsYUFBYztvQkFDekQ3QixJQUFJLENBQUNSLE1BQU0sSUFBSUEsTUFBTTttQkFDckIsTUFBTTtvQkFDTjtvQkFDQSxNQUFNdUMsS0FBSyxHQUFHTCxNQUFNLENBQUNFLEtBQUssRUFBRUosT0FBTztvQkFDbkNBLE9BQU8sSUFBSU8sS0FBSyxHQUFHQSxLQUFLLEdBQUcsRUFBRTtvQkFDN0IsSUFBSUEsS0FBSyxFQUFFLE1BQU07c0JBQUVBO29CQUFLLENBQUU7O2tCQUczQixNQUFNQyxNQUFNLEdBQUdOLE1BQU0sQ0FBQ08sYUFBYTtrQkFDbkMsSUFBSUQsTUFBTSxFQUFFO29CQUNYLElBQUksQ0FBQ2hDLElBQUksRUFBRTtzQkFDVjtzQkFDQVAsUUFBUSxDQUFDeUMsSUFBSSxDQUFDO3dCQUFFQyxJQUFJLEVBQUUsV0FBVzt3QkFBRVg7c0JBQU8sQ0FBRSxDQUFDO3NCQUM3QyxNQUFNO3dCQUFFekIsUUFBUSxFQUFFOzBCQUFFeUIsT0FBTzswQkFBRS9CLFFBQVE7MEJBQUV1Qzt3QkFBTTtzQkFBRSxDQUFFO3FCQUNqRCxNQUFNO3NCQUNOO3NCQUNBLE1BQU07d0JBQUVoQztzQkFBSSxDQUFFO3NCQUNkLE1BQU07d0JBQUVJO3NCQUFRLENBQUUsR0FBR0osSUFBSTtzQkFFekI7c0JBQ0EsSUFBSSxDQUFDSSxRQUFRLEVBQUU7d0JBQ2Q7d0JBQ0EsTUFBTTswQkFBRUwsUUFBUSxFQUFFOzRCQUFFeUIsT0FBTzs0QkFBRS9CLFFBQVE7NEJBQUV1QyxNQUFNLEVBQUU7MEJBQVE7d0JBQUUsQ0FBRTt3QkFDM0Q7O3NCQUdEO3NCQUNBLElBQUk1QixRQUFRLEVBQUVvQixPQUFPLEVBQUU7d0JBQ3RCL0IsUUFBUSxDQUFDeUMsSUFBSSxDQUFDOzBCQUFFQyxJQUFJLEVBQUUsVUFBVTswQkFBRTVCLElBQUksRUFBRVAsSUFBSSxDQUFDTyxJQUFJOzBCQUFFaUIsT0FBTyxFQUFFcEIsUUFBUSxDQUFDb0I7d0JBQU8sQ0FBRSxDQUFDO3dCQUUvRTt3QkFDQTt3QkFDQSxPQUFPLElBQUksQ0FBQ2pDLFdBQVcsQ0FBQzswQkFBRSxHQUFHQyxNQUFNOzBCQUFFQzt3QkFBUSxDQUFFLENBQUM7dUJBQ2hELE1BQU07d0JBQ047d0JBQ0EsTUFBTTswQkFBRTJDLEtBQUssRUFBRW5ELE9BQUEsQ0FBQW9ELGNBQWMsQ0FBQ0Msc0JBQXNCLENBQUN0QyxJQUFJO3dCQUFDLENBQUU7OztvQkFHOUQ7OztlQUdGLENBQUMsT0FBT3VDLEdBQUcsRUFBRTtnQkFDYkMsT0FBTyxDQUFDSixLQUFLLENBQUNHLEdBQUcsQ0FBQztnQkFDbEIsTUFBTTtrQkFBRUgsS0FBSyxFQUFFbkQsT0FBQSxDQUFBb0QsY0FBYyxDQUFDSSxrQkFBa0I7Z0JBQUUsQ0FBRTs7WUFFdEQ7WUFFQTs7Ozs7WUFLQSxhQUFhQyxRQUFRQSxDQUFDbEQsTUFBNkI7Y0FDbEQsTUFBTTtnQkFBRUMsUUFBUTtnQkFBRUMsS0FBSztnQkFBRUMsV0FBVztnQkFBRUcsS0FBSztnQkFBRUM7Y0FBUSxDQUFFLEdBQUdQLE1BQU07Y0FFaEUsTUFBTW1ELFdBQVcsR0FBRyxDQUFDO2NBQ3JCLE1BQU1DLGNBQWMsR0FBRyxJQUFJO2NBRTNCLElBQUlDLE9BQU8sR0FBRyxDQUFDO2NBRWYsTUFBTWpDLE1BQU0sR0FBRyxNQUFNekIsSUFBQSxDQUFBMEIsR0FBRyxDQUFDQyxHQUFHLEVBQUU7Y0FDOUIsTUFBTUMsTUFBTSxHQUFHLElBQUkxQixPQUFBLENBQUEyQixPQUFNLENBQUM7Z0JBQUVKO2NBQU0sQ0FBRSxDQUFDO2NBRXJDO2NBQ0EsTUFBTVgsTUFBTSxHQUFHLENBQUMsTUFBSztnQkFDcEIsTUFBTTtrQkFBRUEsTUFBTTtrQkFBRUMsY0FBYztrQkFBRUM7Z0JBQU0sQ0FBRSxHQUFHWCxNQUFNO2dCQUNqRCxJQUFJWSxRQUFRLEdBQW1CO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQU0sQ0FBRTtnQkFDL0MsSUFBSUgsY0FBYyxLQUFLLE1BQU0sSUFBSUQsTUFBTSxLQUFLLE1BQU0sRUFBRUcsUUFBUSxHQUFHO2tCQUFFQyxJQUFJLEVBQUU7Z0JBQWEsQ0FBRTtnQkFDdEYsSUFBSUgsY0FBYyxLQUFLLGFBQWEsSUFBSUQsTUFBTSxLQUFLLGFBQWEsRUFDL0RHLFFBQVEsR0FBRztrQkFDVkMsSUFBSSxFQUFFLGFBQWE7a0JBQ25CQyxXQUFXLEVBQUU7b0JBQ1pDLElBQUksRUFBRUosTUFBTSxDQUFDSSxJQUFJO29CQUNqQkMsV0FBVyxFQUFFTCxNQUFNLENBQUNLLFdBQVcsSUFBSUMsU0FBUztvQkFDNUNOLE1BQU0sRUFBRUEsTUFBTSxDQUFDQSxNQUFNO29CQUNyQk8sTUFBTSxFQUFFUCxNQUFNLENBQUNRLEtBQUssSUFBSTs7aUJBRXpCO2dCQUNGLE9BQU9QLFFBQVE7Y0FDaEIsQ0FBQyxFQUFDLENBQUU7Y0FFSjtjQUNBLE9BQU95QyxPQUFPLEdBQUdGLFdBQVcsRUFBRTtnQkFDN0IsSUFBSTtrQkFDSCxNQUFNdkMsUUFBUSxHQUFHLE1BQU1XLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztvQkFDckQzQixLQUFLO29CQUNMQyxXQUFXO29CQUNYRixRQUFRO29CQUNSOEIsZUFBZSxFQUFFdEIsTUFBTTtvQkFDdkJILEtBQUs7b0JBQ0xDO21CQUNBLENBQUM7a0JBRUYsSUFBSTtvQkFBRXlCO2tCQUFPLENBQUUsR0FBR3BCLFFBQVEsQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ21CLE9BQU87a0JBQzdDdEIsT0FBTyxHQUFHQSxPQUFPLElBQUksRUFBRTtrQkFDdkIsT0FBTyxJQUFJcEMsU0FBQSxDQUFBMkQsb0JBQW9CLENBQUM7b0JBQUVDLElBQUksRUFBRTtzQkFBRXhCO29CQUFPO2tCQUFFLENBQUUsQ0FBQztpQkFDdEQsQ0FBQyxPQUFPZSxHQUFHLEVBQUU7a0JBQ2JDLE9BQU8sQ0FBQ0osS0FBSyxDQUFDRyxHQUFHLENBQUM7a0JBQ2xCTSxPQUFPLEVBQUU7a0JBQ1QsTUFBTSxJQUFJSSxPQUFPLENBQUNDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFPLEVBQUVOLGNBQWMsQ0FBQyxDQUFDOzs7Y0FJbkUsT0FBTyxJQUFJeEQsU0FBQSxDQUFBMkQsb0JBQW9CLENBQUM7Z0JBQUVYLEtBQUssRUFBRW5ELE9BQUEsQ0FBQW9ELGNBQWMsQ0FBQ0ksa0JBQWtCO2NBQUUsQ0FBRSxDQUFDO1lBQ2hGOztVQUNBVyxPQUFBLENBQUE5RCxZQUFBLEdBQUFBLFlBQUEiLCJpZ25vcmVMaXN0IjpbXX0=