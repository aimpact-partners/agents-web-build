System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core","zod@3.24.2","@beyond-js/events@0.0.7/events","@beyond-js/reactive@2.0.5/model"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"],["zod","3.24.2"],["@beyond-js/events","0.0.7"],["@beyond-js/reactive","2.0.5"],["@beyond-js/http-suite","0.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep), dep => dependencies.set('zod@3.24.2', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/reactive@2.0.5/model', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/http-suite/api.0.1.0.js
var api_0_1_0_exports = {};
__export(api_0_1_0_exports, {
  Api: () => Api,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(api_0_1_0_exports);

// node_modules/@beyond-js/http-suite/api/api.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/reactive@2.0.5/model"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/http-suite@0.1.0/api"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/reactive/model", dependency_2]]);
var ims = /* @__PURE__ */new Map();
ims.set("./api", {
  hash: 500080337,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Api = void 0;
    var _fetcher = require2("./fetcher");
    var _core = require2("@beyond-js/kernel/core");
    class Api2 extends _core.Events {
      #url;
      get url() {
        return this.#url ?? "";
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
        this.#fetcher.on("action.received", specs => this.trigger("action.received", specs));
        this.#fetcher.on("stream.response", this.#getResponse);
      }
      #getResponse = () => {
        this.trigger("stream.response");
      };
      async action(method = "get", route, specs = {}) {
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
        return this.action("get", route, specs);
      }
      post(route, specs) {
        return this.action("post", route, specs);
      }
      put(route, specs) {
        return this.action("put", route, specs);
      }
      delete(route, specs) {
        return this.action("delete", route, specs);
      }
      stream(route, specs = {}) {
        return this.action("stream", route, specs);
      }
    }
    exports.Api = Api2;
  }
});
ims.set("./fetcher", {
  hash: 413944411,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Fetcher = void 0;
    var _model = require2("@beyond-js/reactive/model");
    var _stream = require2("./stream");
    class Fetcher extends _model.ReactiveModel {
      #bearer;
      streamer;
      formDataInstance;
      customHeaders = {
        "Content-Type": "application/json"
      };
      defaultHeaders = {
        "Content-Type": "application/json"
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
        if (token) headers.append("Authorization", `Bearer ${token}`);
        for (const [key, value] of Object.entries(mergedHeaders)) {
          if (key !== "Authorization" && key !== "bearer") {
            headers.append(key, value);
          }
        }
        if (multipart) {
          headers.delete("Content-Type");
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
        if (Object.entries(params).length === 0) return "";
        const parameters = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
          if (![NaN, void 0, ""].includes(value)) {
            parameters.append(key, value);
          }
        }
        return parameters;
      }
      processParams(params = {}, multipart = false, method) {
        if (method === "get") {
          return this.processGetParams(params).toString();
        }
        if (Object.entries(params).length === 0) return;
        return multipart ? this.createFormData(params) : JSON.stringify(params);
      }
      async execute(url, method = "get", params = {}, stream = false) {
        const multipart = params.multipart;
        const headers = this.getHeaders({
          bearer: params.bearer
        }, multipart);
        delete params.multipart;
        delete params.bearer;
        const specs = {
          method,
          headers,
          mode: "cors"
        };
        if (["post", "put", "DELETE"].includes(method)) {
          specs.body = this.processParams(params, multipart, method);
        } else if (method === "get") {
          const queryString = this.processParams(params, multipart, method);
          if (queryString) url += `?${queryString}`;
        }
        if (stream) return this.streamer.execute(url, specs);
        const response = await fetch(url, specs);
        return await response.json();
      }
      stream(url, params = {}) {
        return this.execute(url, "post", params, true);
      }
      get(url, params = {}) {
        return this.execute(url, "get", params);
      }
      post(url, params = {}) {
        return this.execute(url, "post", params);
      }
      delete(url, params = {}) {
        return this.execute(url, "DELETE", params);
      }
      put(url, params = {}) {
        return this.execute(url, "put", params);
      }
      clean() {
        this.streamer.clean();
      }
    }
    exports.Fetcher = Fetcher;
  }
});
ims.set("./stream", {
  hash: 104084100,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Stream = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Stream {
      #SEPARATORS = {
        METADATA: "\xFF",
        START: "\u{1F638}",
        END: "\u{1F58B}\uFE0F"
      };
      #metadata = {
        started: false,
        value: "",
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
      #response = "";
      get response() {
        return this.#response;
      }
      #executingPromise;
      #parent;
      #currentTool = {
        started: false,
        value: "",
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
        const regex = new RegExp(`${START}.*?${END}`, "gs");
        const cleanedString = this.#response.replace(regex, "");
        return cleanedString.trim();
      }
      clean() {
        this.#metadata = {
          started: false,
          value: "",
          parsed: {
            value: void 0
          }
        };
        this.#actions = [];
        this.#response = "";
        this.#executingPromise = void 0;
      }
      #processResponse = promise => {
        const metadata = this.#metadata;
        try {
          this.#metadata.parsed.value = JSON.parse(metadata.value);
        } catch (exc) {
          console.log(metadata);
          console.error(exc);
          this.#metadata.parsed.error = "Error parsing metadata";
        }
        promise?.resolve({
          value: this.#response,
          ...metadata.parsed.value
        });
        this.#metadata = {
          started: false,
          value: "",
          parsed: {
            value: void 0
          }
        };
        this.#response = void 0;
        this.#executingPromise = void 0;
      };
      #cleanCurrentTool() {
        this.#currentTool = {
          started: false,
          value: "",
          parsed: {
            value: void 0
          }
        };
      }
      async #handleMetadata(chunk, response) {
        this.#metadata.started = true;
        const split = chunk.split(this.#SEPARATORS.METADATA);
        this.#metadata.value += split[1];
        return split[0] ? split[0] : "";
      }
      handleStart(chunk, response) {
        const splitted = chunk.split(this.#SEPARATORS.START);
        this.#currentTool.started = true;
        chunk = "";
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
        while (true) {
          const {
            done,
            value
          } = await reader.read();
          let chunk = new TextDecoder().decode(value);
          if (done) return this.#processResponse(promise);
          if (chunk.includes(this.#SEPARATORS.METADATA)) {
            const response2 = await this.#handleMetadata(chunk, this.#response);
            this.#response += response2;
            this.#parent.triggerEvent("stream.response");
            continue;
          }
          if (this.#metadata.started) {
            this.#metadata.value += chunk;
            this.#parent.trigger("stream.response");
            this.#parent.trigger("action.received", this.#metadata.value);
            continue;
          }
          if (chunk.includes(this.#SEPARATORS.START)) {
            this.handleStart(chunk, this.#response);
          } else if (this.#currentTool.started && chunk.includes(this.#SEPARATORS.END)) {
            this.handleEnd(chunk, this.#response);
            this.#cleanCurrentTool();
          }
          this.#response += chunk;
          this.#parent.triggerEvent("action.received");
          this.#parent.triggerEvent("stream.response");
        }
      }
      async execute(url, specs) {
        this.#executingPromise = new _core.PendingPromise();
        this.#response = "";
        const response = await fetch(url, specs);
        if (!response.ok) {
          throw new Error("error in stream");
        }
        this.#read(response, this.#executingPromise);
        return this.#executingPromise;
      }
    }
    exports.Stream = Stream;
  }
});
ims.set("./types", {
  hash: 1121119127,
  creator: function (require2, exports) {
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
var Api;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Api") && (Api = require2 ? require2("./api").Api : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2h0dHAtc3VpdGUvYXBpLjAuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvaHR0cC1zdWl0ZS9hcGkvX19zb3VyY2VzL2FwaS9hcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9odHRwLXN1aXRlL2FwaS9fX3NvdXJjZXMvYXBpL2ZldGNoZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9odHRwLXN1aXRlL2FwaS9fX3NvdXJjZXMvYXBpL3N0cmVhbS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL2h0dHAtc3VpdGUvYXBpL19fc291cmNlcy9hcGkvdHlwZXMudHMiXSwibmFtZXMiOlsiYXBpXzBfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFwaSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfZmV0Y2hlciIsInJlcXVpcmUyIiwiX2NvcmUiLCJBcGkyIiwiRXZlbnRzIiwidXJsIiwiZmV0Y2hlciIsImFjdGlvbnMiLCJzdHJlYW1SZXNwb25zZSIsIm1ldGFkYXRhIiwic3RyaW5nQ29udGVudCIsImNvbnN0cnVjdG9yIiwiRmV0Y2hlciIsIm9uIiwic3BlY3MiLCJ0cmlnZ2VyIiwiZ2V0UmVzcG9uc2UiLCIjZ2V0UmVzcG9uc2UiLCJhY3Rpb24iLCJtZXRob2QiLCJyb3V0ZSIsImNsZWFuIiwiZ2V0VVJMIiwiYmVhcmVyIiwiZ2V0IiwicG9zdCIsInB1dCIsImRlbGV0ZSIsInN0cmVhbSIsIl9tb2RlbCIsIl9zdHJlYW0iLCJSZWFjdGl2ZU1vZGVsIiwic3RyZWFtZXIiLCJmb3JtRGF0YUluc3RhbmNlIiwiY3VzdG9tSGVhZGVycyIsImRlZmF1bHRIZWFkZXJzIiwiU3RyZWFtIiwicmVzcG9uc2UiLCJ0b2tlbiIsInNldEhlYWRlcnMiLCJoZWFkZXJzIiwiZ2V0SGVhZGVycyIsIm11bHRpcGFydCIsIm1lcmdlZEhlYWRlcnMiLCJIZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImFwcGVuZCIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImNyZWF0ZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJwcm9jZXNzR2V0UGFyYW1zIiwicGFyYW1zIiwibGVuZ3RoIiwicGFyYW1ldGVycyIsIlVSTFNlYXJjaFBhcmFtcyIsIk5hTiIsImluY2x1ZGVzIiwicHJvY2Vzc1BhcmFtcyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4ZWN1dGUiLCJtb2RlIiwiYm9keSIsInF1ZXJ5U3RyaW5nIiwiZmV0Y2giLCJqc29uIiwiU0VQQVJBVE9SUyIsIk1FVEFEQVRBIiwiU1RBUlQiLCJFTkQiLCJzdGFydGVkIiwicGFyc2VkIiwiZXhlY3V0aW5nUHJvbWlzZSIsInBhcmVudCIsImN1cnJlbnRUb29sIiwicmVnZXgiLCJSZWdFeHAiLCJjbGVhbmVkU3RyaW5nIiwicmVwbGFjZSIsInRyaW0iLCJwcm9jZXNzUmVzcG9uc2UiLCJwcm9taXNlIiwicGFyc2UiLCJleGMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNvbHZlIiwiY2xlYW5DdXJyZW50VG9vbCIsIiNjbGVhbkN1cnJlbnRUb29sIiwiaGFuZGxlTWV0YWRhdGEiLCIjaGFuZGxlTWV0YWRhdGEiLCJjaHVuayIsInNwbGl0IiwiaGFuZGxlU3RhcnQiLCJzcGxpdHRlZCIsInNwbGl0dGVkMiIsInB1c2giLCJoYW5kbGVFbmQiLCJyZWFkIiwiI3JlYWQiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJyZXNwb25zZTIiLCJ0cmlnZ2VyRXZlbnQiLCJQZW5kaW5nUHJvbWlzZSIsIm9rIiwiRXJyb3IiLCJkZWZpbmVQcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsaUJBQUE7QUFBQUMsUUFB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YSxpQkFBaUI7WUFDM0M7O1VBR0QsSUFBSSxLQUFLLENBQUF0RyxRQUFBLENBQVVpRSxPQUFBLEVBQVM7WUFDM0IsS0FBSyxDQUFBakUsUUFBQSxDQUFVdUMsS0FBQSxJQUFTZ0QsS0FBQTtZQUV4QixLQUFLLENBQUFuQixNQUFBLENBQVE5RCxPQUFBLENBQVEsaUJBQWlCO1lBQ3RDLEtBQUssQ0FBQThELE1BQUEsQ0FBUTlELE9BQUEsQ0FBUSxtQkFBbUIsS0FBSyxDQUFBTixRQUFBLENBQVV1QyxLQUFLO1lBQzVEOztVQUdELElBQUlnRCxLQUFBLENBQU1yQyxRQUFBLENBQVMsS0FBSyxDQUFBVyxVQUFBLENBQVlFLEtBQUssR0FBRztZQUMzQyxLQUFLMEIsV0FBQSxDQUFZRixLQUFBLEVBQU8sS0FBSyxDQUFBM0QsUUFBUztxQkFDNUIsS0FBSyxDQUFBeUMsV0FBQSxDQUFhSixPQUFBLElBQVdzQixLQUFBLENBQU1yQyxRQUFBLENBQVMsS0FBSyxDQUFBVyxVQUFBLENBQVlHLEdBQUcsR0FBRztZQUU3RSxLQUFLNkIsU0FBQSxDQUFVTixLQUFBLEVBQU8sS0FBSyxDQUFBM0QsUUFBUztZQUNwQyxLQUFLLENBQUF1RCxnQkFBQSxDQUFpQjs7VUFHdkIsS0FBSyxDQUFBdkQsUUFBQSxJQUFhMkQsS0FBQTtVQUdsQixLQUFLLENBQUFuQixNQUFBLENBQVFrQyxZQUFBLENBQWEsaUJBQWlCO1VBQzNDLEtBQUssQ0FBQWxDLE1BQUEsQ0FBUWtDLFlBQUEsQ0FBYSxpQkFBaUI7O01BRTdDO01BRUEsTUFBTS9DLFFBQVczRCxHQUFBLEVBQUtTLEtBQUEsRUFBSztRQUMxQixLQUFLLENBQUE4RCxnQkFBQSxHQUFvQixJQUFJMUUsS0FBQSxDQUFBOEcsY0FBQSxDQUFjO1FBQzNDLEtBQUssQ0FBQTNFLFFBQUEsR0FBWTtRQUNqQixNQUFNQSxRQUFBLEdBQXFCLE1BQU0rQixLQUFBLENBQU0vRCxHQUFBLEVBQUtTLEtBQUs7UUFFakQsSUFBSSxDQUFDdUIsUUFBQSxDQUFTNEUsRUFBQSxFQUFJO1VBQ2pCLE1BQU0sSUFBSUMsS0FBQSxDQUFNLGlCQUFpQjs7UUFHbEMsS0FBSyxDQUFBWCxJQUFBLENBQU1sRSxRQUFBLEVBQVUsS0FBSyxDQUFBdUMsZ0JBQWlCO1FBQzNDLE9BQU8sS0FBSyxDQUFBQSxnQkFBQTtNQUNiOztJQUNBOUUsT0FBQSxDQUFBc0MsTUFBQSxHQUFBQSxNQUFBOzs7Ozs7SUNsTEQ7O0lBRUFhLE1BQUEsQ0FBQWtFLGNBQUEsQ0FBQXJILE9BQUE7TUFDQWtELEtBQUE7SUFDQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=