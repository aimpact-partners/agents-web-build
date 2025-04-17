System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1","@firebase/app@0.11.3","@firebase/installations@0.6.13"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.3"],["@firebase/installations","0.6.13"],["@firebase/analytics","0.10.12"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep), dep => dependencies.set('@firebase/component@0.6.13', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.11.3', dep), dep => dependencies.set('@firebase/installations@0.6.13', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all) __defProp(target, name2, {
    get: all[name2],
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
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@firebase/analytics.0.10.12.js
var analytics_0_10_12_exports = {};
__export(analytics_0_10_12_exports, {
  getAnalytics: () => getAnalytics,
  getGoogleAnalyticsClientId: () => getGoogleAnalyticsClientId,
  initializeAnalytics: () => initializeAnalytics,
  isSupported: () => isSupported,
  logEvent: () => logEvent,
  setAnalyticsCollectionEnabled: () => setAnalyticsCollectionEnabled,
  setConsent: () => setConsent,
  setCurrentScreen: () => setCurrentScreen,
  setDefaultEventParameters: () => setDefaultEventParameters,
  setUserId: () => setUserId,
  setUserProperties: () => setUserProperties,
  settings: () => settings
});
module.exports = __toCommonJS(analytics_0_10_12_exports);

// node_modules/@firebase/analytics/dist/esm/index.esm2017.js
var import_app = require("@firebase/app@0.11.3");
var import_logger = require("@firebase/logger@0.4.4");
var import_util = require("@firebase/util@1.11.0");
var import_component = require("@firebase/component@0.6.13");
var import_installations = require("@firebase/installations@0.6.13");
var ANALYTICS_TYPE = "analytics";
var GA_FID_KEY = "firebase_id";
var ORIGIN_KEY = "origin";
var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
var logger = new import_logger.Logger("@firebase/analytics");
var ERRORS = {
  ["already-exists"]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
  ["already-initialized"]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.",
  ["already-initialized-settings"]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
  ["interop-component-reg-failed"]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
  ["invalid-analytics-context"]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  ["indexeddb-unavailable"]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
  ["fetch-throttle"]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
  ["config-fetch-failed"]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
  ["no-api-key"]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
  ["no-app-id"]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
  ["no-client-id"]: 'The "client_id" field is empty.',
  ["invalid-gtag-resource"]: "Trusted Types detected an invalid gtag resource: {$gtagURL}."
};
var ERROR_FACTORY = new import_util.ErrorFactory("analytics", "Analytics", ERRORS);
function createGtagTrustedTypesScriptURL(url) {
  if (!url.startsWith(GTAG_URL)) {
    const err = ERROR_FACTORY.create("invalid-gtag-resource", {
      gtagURL: url
    });
    logger.warn(err.message);
    return "";
  }
  return url;
}
function promiseAllSettled(promises) {
  return Promise.all(promises.map(promise => promise.catch(e => e)));
}
function createTrustedTypesPolicy(policyName, policyOptions) {
  let trustedTypesPolicy;
  if (window.trustedTypes) {
    trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
  }
  return trustedTypesPolicy;
}
function insertScriptTag(dataLayerName2, measurementId) {
  const trustedTypesPolicy = createTrustedTypesPolicy("firebase-js-sdk-policy", {
    createScriptURL: createGtagTrustedTypesScriptURL
  });
  const script = document.createElement("script");
  const gtagScriptURL = `${GTAG_URL}?l=${dataLayerName2}&id=${measurementId}`;
  script.src = trustedTypesPolicy ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL) : gtagScriptURL;
  script.async = true;
  document.head.appendChild(script);
}
function getOrCreateDataLayer(dataLayerName2) {
  let dataLayer = [];
  if (Array.isArray(window[dataLayerName2])) {
    dataLayer = window[dataLayerName2];
  } else {
    window[dataLayerName2] = dataLayer;
  }
  return dataLayer;
}
async function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
  const correspondingAppId = measurementIdToAppId2[measurementId];
  try {
    if (correspondingAppId) {
      await initializationPromisesMap2[correspondingAppId];
    } else {
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      const foundConfig = dynamicConfigResults.find(config => config.measurementId === measurementId);
      if (foundConfig) {
        await initializationPromisesMap2[foundConfig.appId];
      }
    }
  } catch (e) {
    logger.error(e);
  }
  gtagCore("config", measurementId, gtagParams);
}
async function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
  try {
    let initializationPromisesToWaitFor = [];
    if (gtagParams && gtagParams["send_to"]) {
      let gaSendToList = gtagParams["send_to"];
      if (!Array.isArray(gaSendToList)) {
        gaSendToList = [gaSendToList];
      }
      const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
      for (const sendToId of gaSendToList) {
        const foundConfig = dynamicConfigResults.find(config => config.measurementId === sendToId);
        const initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
        if (initializationPromise) {
          initializationPromisesToWaitFor.push(initializationPromise);
        } else {
          initializationPromisesToWaitFor = [];
          break;
        }
      }
    }
    if (initializationPromisesToWaitFor.length === 0) {
      initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
    }
    await Promise.all(initializationPromisesToWaitFor);
    gtagCore("event", measurementId, gtagParams || {});
  } catch (e) {
    logger.error(e);
  }
}
function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
  async function gtagWrapper(command, ...args) {
    try {
      if (command === "event") {
        const [measurementId, gtagParams] = args;
        await gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams);
      } else if (command === "config") {
        const [measurementId, gtagParams] = args;
        await gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams);
      } else if (command === "consent") {
        const [consentAction, gtagParams] = args;
        gtagCore("consent", consentAction, gtagParams);
      } else if (command === "get") {
        const [measurementId, fieldName, callback] = args;
        gtagCore("get", measurementId, fieldName, callback);
      } else if (command === "set") {
        const [customParams] = args;
        gtagCore("set", customParams);
      } else {
        gtagCore(command, ...args);
      }
    } catch (e) {
      logger.error(e);
    }
  }
  return gtagWrapper;
}
function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
  let gtagCore = function (..._args) {
    window[dataLayerName2].push(arguments);
  };
  if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
    gtagCore = window[gtagFunctionName];
  }
  window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
  return {
    gtagCore,
    wrappedGtag: window[gtagFunctionName]
  };
}
function findGtagScriptOnPage(dataLayerName2) {
  const scriptTags = window.document.getElementsByTagName("script");
  for (const tag of Object.values(scriptTags)) {
    if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName2)) {
      return tag;
    }
  }
  return null;
}
var LONG_RETRY_FACTOR = 30;
var BASE_INTERVAL_MILLIS = 1e3;
var RetryData = class {
  constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
    this.throttleMetadata = throttleMetadata;
    this.intervalMillis = intervalMillis;
  }
  getThrottleMetadata(appId) {
    return this.throttleMetadata[appId];
  }
  setThrottleMetadata(appId, metadata) {
    this.throttleMetadata[appId] = metadata;
  }
  deleteThrottleMetadata(appId) {
    delete this.throttleMetadata[appId];
  }
};
var defaultRetryData = new RetryData();
function getHeaders(apiKey) {
  return new Headers({
    Accept: "application/json",
    "x-goog-api-key": apiKey
  });
}
async function fetchDynamicConfig(appFields) {
  var _a;
  const {
    appId,
    apiKey
  } = appFields;
  const request = {
    method: "GET",
    headers: getHeaders(apiKey)
  };
  const appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
  const response = await fetch(appUrl, request);
  if (response.status !== 200 && response.status !== 304) {
    let errorMessage = "";
    try {
      const jsonResponse = await response.json();
      if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
        errorMessage = jsonResponse.error.message;
      }
    } catch (_ignored) {}
    throw ERROR_FACTORY.create("config-fetch-failed", {
      httpStatus: response.status,
      responseMessage: errorMessage
    });
  }
  return response.json();
}
async function fetchDynamicConfigWithRetry(app, retryData = defaultRetryData, timeoutMillis) {
  const {
    appId,
    apiKey,
    measurementId
  } = app.options;
  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id");
  }
  if (!apiKey) {
    if (measurementId) {
      return {
        measurementId,
        appId
      };
    }
    throw ERROR_FACTORY.create("no-api-key");
  }
  const throttleMetadata = retryData.getThrottleMetadata(appId) || {
    backoffCount: 0,
    throttleEndTimeMillis: Date.now()
  };
  const signal = new AnalyticsAbortSignal();
  setTimeout(async () => {
    signal.abort();
  }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
  return attemptFetchDynamicConfigWithRetry({
    appId,
    apiKey,
    measurementId
  }, throttleMetadata, signal, retryData);
}
async function attemptFetchDynamicConfigWithRetry(appFields, {
  throttleEndTimeMillis,
  backoffCount
}, signal, retryData = defaultRetryData) {
  var _a;
  const {
    appId,
    measurementId
  } = appFields;
  try {
    await setAbortableTimeout(signal, throttleEndTimeMillis);
  } catch (e) {
    if (measurementId) {
      logger.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
      return {
        appId,
        measurementId
      };
    }
    throw e;
  }
  try {
    const response = await fetchDynamicConfig(appFields);
    retryData.deleteThrottleMetadata(appId);
    return response;
  } catch (e) {
    const error = e;
    if (!isRetriableError(error)) {
      retryData.deleteThrottleMetadata(appId);
      if (measurementId) {
        logger.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
        return {
          appId,
          measurementId
        };
      } else {
        throw e;
      }
    }
    const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503 ? (0, import_util.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : (0, import_util.calculateBackoffMillis)(backoffCount, retryData.intervalMillis);
    const throttleMetadata = {
      throttleEndTimeMillis: Date.now() + backoffMillis,
      backoffCount: backoffCount + 1
    };
    retryData.setThrottleMetadata(appId, throttleMetadata);
    logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
    return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
  }
}
function setAbortableTimeout(signal, throttleEndTimeMillis) {
  return new Promise((resolve, reject) => {
    const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
    const timeout = setTimeout(resolve, backoffMillis);
    signal.addEventListener(() => {
      clearTimeout(timeout);
      reject(ERROR_FACTORY.create("fetch-throttle", {
        throttleEndTimeMillis
      }));
    });
  });
}
function isRetriableError(e) {
  if (!(e instanceof import_util.FirebaseError) || !e.customData) {
    return false;
  }
  const httpStatus = Number(e.customData["httpStatus"]);
  return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
}
var AnalyticsAbortSignal = class {
  constructor() {
    this.listeners = [];
  }
  addEventListener(listener) {
    this.listeners.push(listener);
  }
  abort() {
    this.listeners.forEach(listener => listener());
  }
};
var defaultEventParametersForInit;
async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
  if (options && options.global) {
    gtagFunction("event", eventName, eventParams);
    return;
  } else {
    const measurementId = await initializationPromise;
    const params = Object.assign(Object.assign({}, eventParams), {
      "send_to": measurementId
    });
    gtagFunction("event", eventName, params);
  }
}
async function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
  if (options && options.global) {
    gtagFunction("set", {
      "screen_name": screenName
    });
    return Promise.resolve();
  } else {
    const measurementId = await initializationPromise;
    gtagFunction("config", measurementId, {
      update: true,
      "screen_name": screenName
    });
  }
}
async function setUserId$1(gtagFunction, initializationPromise, id, options) {
  if (options && options.global) {
    gtagFunction("set", {
      "user_id": id
    });
    return Promise.resolve();
  } else {
    const measurementId = await initializationPromise;
    gtagFunction("config", measurementId, {
      update: true,
      "user_id": id
    });
  }
}
async function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
  if (options && options.global) {
    const flatProperties = {};
    for (const key of Object.keys(properties)) {
      flatProperties[`user_properties.${key}`] = properties[key];
    }
    gtagFunction("set", flatProperties);
    return Promise.resolve();
  } else {
    const measurementId = await initializationPromise;
    gtagFunction("config", measurementId, {
      update: true,
      "user_properties": properties
    });
  }
}
async function internalGetGoogleAnalyticsClientId(gtagFunction, initializationPromise) {
  const measurementId = await initializationPromise;
  return new Promise((resolve, reject) => {
    gtagFunction("get", measurementId, "client_id", clientId => {
      if (!clientId) {
        reject(ERROR_FACTORY.create("no-client-id"));
      }
      resolve(clientId);
    });
  });
}
async function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
  const measurementId = await initializationPromise;
  window[`ga-disable-${measurementId}`] = !enabled;
}
var defaultConsentSettingsForInit;
function _setConsentDefaultForInit(consentSettings) {
  defaultConsentSettingsForInit = consentSettings;
}
function _setDefaultEventParametersForInit(customParams) {
  defaultEventParametersForInit = customParams;
}
async function validateIndexedDB() {
  if (!(0, import_util.isIndexedDBAvailable)()) {
    logger.warn(ERROR_FACTORY.create("indexeddb-unavailable", {
      errorInfo: "IndexedDB is not available in this environment."
    }).message);
    return false;
  } else {
    try {
      await (0, import_util.validateIndexedDBOpenable)();
    } catch (e) {
      logger.warn(ERROR_FACTORY.create("indexeddb-unavailable", {
        errorInfo: e === null || e === void 0 ? void 0 : e.toString()
      }).message);
      return false;
    }
  }
  return true;
}
async function _initializeAnalytics(app, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore, dataLayerName2, options) {
  var _a;
  const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
  dynamicConfigPromise.then(config => {
    measurementIdToAppId2[config.measurementId] = config.appId;
    if (app.options.measurementId && config.measurementId !== app.options.measurementId) {
      logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId}) does not match the measurement ID fetched from the server (${config.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
    }
  }).catch(e => logger.error(e));
  dynamicConfigPromisesList2.push(dynamicConfigPromise);
  const fidPromise = validateIndexedDB().then(envIsValid => {
    if (envIsValid) {
      return installations.getId();
    } else {
      return void 0;
    }
  });
  const [dynamicConfig, fid] = await Promise.all([dynamicConfigPromise, fidPromise]);
  if (!findGtagScriptOnPage(dataLayerName2)) {
    insertScriptTag(dataLayerName2, dynamicConfig.measurementId);
  }
  if (defaultConsentSettingsForInit) {
    gtagCore("consent", "default", defaultConsentSettingsForInit);
    _setConsentDefaultForInit(void 0);
  }
  gtagCore("js", new Date());
  const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
  configProperties[ORIGIN_KEY] = "firebase";
  configProperties.update = true;
  if (fid != null) {
    configProperties[GA_FID_KEY] = fid;
  }
  gtagCore("config", dynamicConfig.measurementId, configProperties);
  if (defaultEventParametersForInit) {
    gtagCore("set", defaultEventParametersForInit);
    _setDefaultEventParametersForInit(void 0);
  }
  return dynamicConfig.measurementId;
}
var AnalyticsService = class {
  constructor(app) {
    this.app = app;
  }
  _delete() {
    delete initializationPromisesMap[this.app.options.appId];
    return Promise.resolve();
  }
};
var initializationPromisesMap = {};
var dynamicConfigPromisesList = [];
var measurementIdToAppId = {};
var dataLayerName = "dataLayer";
var gtagName = "gtag";
var gtagCoreFunction;
var wrappedGtagFunction;
var globalInitDone = false;
function settings(options) {
  if (globalInitDone) {
    throw ERROR_FACTORY.create("already-initialized");
  }
  if (options.dataLayerName) {
    dataLayerName = options.dataLayerName;
  }
  if (options.gtagName) {
    gtagName = options.gtagName;
  }
}
function warnOnBrowserContextMismatch() {
  const mismatchedEnvMessages = [];
  if ((0, import_util.isBrowserExtension)()) {
    mismatchedEnvMessages.push("This is a browser extension environment.");
  }
  if (!(0, import_util.areCookiesEnabled)()) {
    mismatchedEnvMessages.push("Cookies are not available.");
  }
  if (mismatchedEnvMessages.length > 0) {
    const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(" ");
    const err = ERROR_FACTORY.create("invalid-analytics-context", {
      errorInfo: details
    });
    logger.warn(err.message);
  }
}
function factory(app, installations, options) {
  warnOnBrowserContextMismatch();
  const appId = app.options.appId;
  if (!appId) {
    throw ERROR_FACTORY.create("no-app-id");
  }
  if (!app.options.apiKey) {
    if (app.options.measurementId) {
      logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
    } else {
      throw ERROR_FACTORY.create("no-api-key");
    }
  }
  if (initializationPromisesMap[appId] != null) {
    throw ERROR_FACTORY.create("already-exists", {
      id: appId
    });
  }
  if (!globalInitDone) {
    getOrCreateDataLayer(dataLayerName);
    const {
      wrappedGtag,
      gtagCore
    } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
    wrappedGtagFunction = wrappedGtag;
    gtagCoreFunction = gtagCore;
    globalInitDone = true;
  }
  initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
  const analyticsInstance = new AnalyticsService(app);
  return analyticsInstance;
}
function getAnalytics(app = (0, import_app.getApp)()) {
  app = (0, import_util.getModularInstance)(app);
  const analyticsProvider = (0, import_app._getProvider)(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    return analyticsProvider.getImmediate();
  }
  return initializeAnalytics(app);
}
function initializeAnalytics(app, options = {}) {
  const analyticsProvider = (0, import_app._getProvider)(app, ANALYTICS_TYPE);
  if (analyticsProvider.isInitialized()) {
    const existingInstance = analyticsProvider.getImmediate();
    if ((0, import_util.deepEqual)(options, analyticsProvider.getOptions())) {
      return existingInstance;
    } else {
      throw ERROR_FACTORY.create("already-initialized");
    }
  }
  const analyticsInstance = analyticsProvider.initialize({
    options
  });
  return analyticsInstance;
}
async function isSupported() {
  if ((0, import_util.isBrowserExtension)()) {
    return false;
  }
  if (!(0, import_util.areCookiesEnabled)()) {
    return false;
  }
  if (!(0, import_util.isIndexedDBAvailable)()) {
    return false;
  }
  try {
    const isDBOpenable = await (0, import_util.validateIndexedDBOpenable)();
    return isDBOpenable;
  } catch (error) {
    return false;
  }
}
function setCurrentScreen(analyticsInstance, screenName, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch(e => logger.error(e));
}
async function getGoogleAnalyticsClientId(analyticsInstance) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  return internalGetGoogleAnalyticsClientId(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId]);
}
function setUserId(analyticsInstance, id, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch(e => logger.error(e));
}
function setUserProperties(analyticsInstance, properties, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch(e => logger.error(e));
}
function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch(e => logger.error(e));
}
function setDefaultEventParameters(customParams) {
  if (wrappedGtagFunction) {
    wrappedGtagFunction("set", customParams);
  } else {
    _setDefaultEventParametersForInit(customParams);
  }
}
function logEvent(analyticsInstance, eventName, eventParams, options) {
  analyticsInstance = (0, import_util.getModularInstance)(analyticsInstance);
  logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch(e => logger.error(e));
}
function setConsent(consentSettings) {
  if (wrappedGtagFunction) {
    wrappedGtagFunction("consent", "update", consentSettings);
  } else {
    _setConsentDefaultForInit(consentSettings);
  }
}
var name = "@firebase/analytics";
var version = "0.10.12";
function registerAnalytics() {
  (0, import_app._registerComponent)(new import_component.Component(ANALYTICS_TYPE, (container, {
    options: analyticsOptions
  }) => {
    const app = container.getProvider("app").getImmediate();
    const installations = container.getProvider("installations-internal").getImmediate();
    return factory(app, installations, analyticsOptions);
  }, "PUBLIC"));
  (0, import_app._registerComponent)(new import_component.Component("analytics-internal", internalFactory, "PRIVATE"));
  (0, import_app.registerVersion)(name, version);
  (0, import_app.registerVersion)(name, version, "esm2017");
  function internalFactory(container) {
    try {
      const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
      return {
        logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
      };
    } catch (e) {
      throw ERROR_FACTORY.create("interop-component-reg-failed", {
        reason: e
      });
    }
  }
}
registerAnalytics();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYW5hbHl0aWNzLjAuMTAuMTIuanMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvY29uc3RhbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2xvZ2dlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FuYWx5dGljcy9zcmMvaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9nZXQtY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2Z1bmN0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9pbml0aWFsaXplLWFuYWx5dGljcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9mYWN0b3J5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3Mvc3JjL2FwaS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYW5hbHl0aWNzL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhbmFseXRpY3NfMF8xMF8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJnZXRBbmFseXRpY3MiLCJnZXRHb29nbGVBbmFseXRpY3NDbGllbnRJZCIsImluaXRpYWxpemVBbmFseXRpY3MiLCJpc1N1cHBvcnRlZCIsImxvZ0V2ZW50Iiwic2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQiLCJzZXRDb25zZW50Iiwic2V0Q3VycmVudFNjcmVlbiIsInNldERlZmF1bHRFdmVudFBhcmFtZXRlcnMiLCJzZXRVc2VySWQiLCJzZXRVc2VyUHJvcGVydGllcyIsInNldHRpbmdzIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIkFOQUxZVElDU19UWVBFIiwiR0FfRklEX0tFWSIsIk9SSUdJTl9LRVkiLCJGRVRDSF9USU1FT1VUX01JTExJUyIsIkRZTkFNSUNfQ09ORklHX1VSTCIsIkdUQUdfVVJMIiwibG9nZ2VyIiwiaW1wb3J0X2xvZ2dlciIsIkxvZ2dlciIsIkVSUk9SUyIsIkVSUk9SX0ZBQ1RPUlkiLCJpbXBvcnRfdXRpbCIsIkVycm9yRmFjdG9yeSIsImNyZWF0ZUd0YWdUcnVzdGVkVHlwZXNTY3JpcHRVUkwiLCJ1cmwiLCJzdGFydHNXaXRoIiwiZXJyIiwiY3JlYXRlIiwiZ3RhZ1VSTCIsIndhcm4iLCJtZXNzYWdlIiwicHJvbWlzZUFsbFNldHRsZWQiLCJwcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJwcm9taXNlIiwiY2F0Y2giLCJlIiwiY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5IiwicG9saWN5TmFtZSIsInBvbGljeU9wdGlvbnMiLCJ0cnVzdGVkVHlwZXNQb2xpY3kiLCJ3aW5kb3ciLCJ0cnVzdGVkVHlwZXMiLCJjcmVhdGVQb2xpY3kiLCJpbnNlcnRTY3JpcHRUYWciLCJkYXRhTGF5ZXJOYW1lMiIsIm1lYXN1cmVtZW50SWQiLCJjcmVhdGVTY3JpcHRVUkwiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJndGFnU2NyaXB0VVJMIiwic3JjIiwiYXN5bmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJnZXRPckNyZWF0ZURhdGFMYXllciIsImRhdGFMYXllciIsIkFycmF5IiwiaXNBcnJheSIsImd0YWdPbkNvbmZpZyIsImd0YWdDb3JlIiwiaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcDIiLCJkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0MiIsIm1lYXN1cmVtZW50SWRUb0FwcElkMiIsImd0YWdQYXJhbXMiLCJjb3JyZXNwb25kaW5nQXBwSWQiLCJkeW5hbWljQ29uZmlnUmVzdWx0cyIsImZvdW5kQ29uZmlnIiwiZmluZCIsImNvbmZpZyIsImFwcElkIiwiZXJyb3IiLCJndGFnT25FdmVudCIsImluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IiLCJnYVNlbmRUb0xpc3QiLCJzZW5kVG9JZCIsImluaXRpYWxpemF0aW9uUHJvbWlzZSIsInB1c2giLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ3cmFwR3RhZyIsImd0YWdXcmFwcGVyIiwiY29tbWFuZCIsImFyZ3MiLCJjb25zZW50QWN0aW9uIiwiZmllbGROYW1lIiwiY2FsbGJhY2siLCJjdXN0b21QYXJhbXMiLCJ3cmFwT3JDcmVhdGVHdGFnIiwiZ3RhZ0Z1bmN0aW9uTmFtZSIsIl9hcmdzIiwiYXJndW1lbnRzIiwid3JhcHBlZEd0YWciLCJmaW5kR3RhZ1NjcmlwdE9uUGFnZSIsInNjcmlwdFRhZ3MiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRhZyIsImluY2x1ZGVzIiwiTE9OR19SRVRSWV9GQUNUT1IiLCJCQVNFX0lOVEVSVkFMX01JTExJUyIsIlJldHJ5RGF0YSIsImNvbnN0cnVjdG9yIiwidGhyb3R0bGVNZXRhZGF0YSIsImludGVydmFsTWlsbGlzIiwiZ2V0VGhyb3R0bGVNZXRhZGF0YSIsInNldFRocm90dGxlTWV0YWRhdGEiLCJtZXRhZGF0YSIsImRlbGV0ZVRocm90dGxlTWV0YWRhdGEiLCJkZWZhdWx0UmV0cnlEYXRhIiwiZ2V0SGVhZGVycyIsImFwaUtleSIsIkhlYWRlcnMiLCJBY2NlcHQiLCJmZXRjaER5bmFtaWNDb25maWciLCJhcHBGaWVsZHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVycyIsImFwcFVybCIsInJlcGxhY2UiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwianNvblJlc3BvbnNlIiwianNvbiIsIl9hIiwiX2lnbm9yZWQiLCJodHRwU3RhdHVzIiwicmVzcG9uc2VNZXNzYWdlIiwiZmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5IiwiYXBwIiwicmV0cnlEYXRhIiwidGltZW91dE1pbGxpcyIsIm9wdGlvbnMiLCJiYWNrb2ZmQ291bnQiLCJ0aHJvdHRsZUVuZFRpbWVNaWxsaXMiLCJEYXRlIiwibm93Iiwic2lnbmFsIiwiQW5hbHl0aWNzQWJvcnRTaWduYWwiLCJzZXRUaW1lb3V0IiwiYWJvcnQiLCJhdHRlbXB0RmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5Iiwic2V0QWJvcnRhYmxlVGltZW91dCIsImlzUmV0cmlhYmxlRXJyb3IiLCJiYWNrb2ZmTWlsbGlzIiwiTnVtYmVyIiwiY3VzdG9tRGF0YSIsImNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMiLCJkZWJ1ZyIsInJlc29sdmUiLCJyZWplY3QiLCJNYXRoIiwibWF4IiwidGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhclRpbWVvdXQiLCJGaXJlYmFzZUVycm9yIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJmb3JFYWNoIiwiZGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQiLCJsb2dFdmVudCQxIiwiZ3RhZ0Z1bmN0aW9uIiwiZXZlbnROYW1lIiwiZXZlbnRQYXJhbXMiLCJnbG9iYWwiLCJwYXJhbXMiLCJhc3NpZ24iLCJzZXRDdXJyZW50U2NyZWVuJDEiLCJzY3JlZW5OYW1lIiwidXBkYXRlIiwic2V0VXNlcklkJDEiLCJpZCIsInNldFVzZXJQcm9wZXJ0aWVzJDEiLCJwcm9wZXJ0aWVzIiwiZmxhdFByb3BlcnRpZXMiLCJrZXkiLCJrZXlzIiwiaW50ZXJuYWxHZXRHb29nbGVBbmFseXRpY3NDbGllbnRJZCIsImNsaWVudElkIiwic2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQkMSIsImVuYWJsZWQiLCJkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdCIsIl9zZXRDb25zZW50RGVmYXVsdEZvckluaXQiLCJjb25zZW50U2V0dGluZ3MiLCJfc2V0RGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQiLCJ2YWxpZGF0ZUluZGV4ZWREQiIsImlzSW5kZXhlZERCQXZhaWxhYmxlIiwiZXJyb3JJbmZvIiwidmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSIsInRvU3RyaW5nIiwiX2luaXRpYWxpemVBbmFseXRpY3MiLCJpbnN0YWxsYXRpb25zIiwiZHluYW1pY0NvbmZpZ1Byb21pc2UiLCJ0aGVuIiwiZmlkUHJvbWlzZSIsImVudklzVmFsaWQiLCJnZXRJZCIsImR5bmFtaWNDb25maWciLCJmaWQiLCJjb25maWdQcm9wZXJ0aWVzIiwiQW5hbHl0aWNzU2VydmljZSIsIl9kZWxldGUiLCJpbml0aWFsaXphdGlvblByb21pc2VzTWFwIiwiZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCIsIm1lYXN1cmVtZW50SWRUb0FwcElkIiwiZGF0YUxheWVyTmFtZSIsImd0YWdOYW1lIiwiZ3RhZ0NvcmVGdW5jdGlvbiIsIndyYXBwZWRHdGFnRnVuY3Rpb24iLCJnbG9iYWxJbml0RG9uZSIsIndhcm5PbkJyb3dzZXJDb250ZXh0TWlzbWF0Y2giLCJtaXNtYXRjaGVkRW52TWVzc2FnZXMiLCJpc0Jyb3dzZXJFeHRlbnNpb24iLCJhcmVDb29raWVzRW5hYmxlZCIsImRldGFpbHMiLCJpbmRleCIsImpvaW4iLCJmYWN0b3J5IiwiYW5hbHl0aWNzSW5zdGFuY2UiLCJpbXBvcnRfYXBwIiwiZ2V0QXBwIiwiZ2V0TW9kdWxhckluc3RhbmNlIiwiYW5hbHl0aWNzUHJvdmlkZXIiLCJfZ2V0UHJvdmlkZXIiLCJpc0luaXRpYWxpemVkIiwiZ2V0SW1tZWRpYXRlIiwiZXhpc3RpbmdJbnN0YW5jZSIsImRlZXBFcXVhbCIsImdldE9wdGlvbnMiLCJpbml0aWFsaXplIiwiaXNEQk9wZW5hYmxlIiwicmVnaXN0ZXJBbmFseXRpY3MiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiY29udGFpbmVyIiwiYW5hbHl0aWNzT3B0aW9ucyIsImdldFByb3ZpZGVyIiwiaW50ZXJuYWxGYWN0b3J5IiwicmVnaXN0ZXJWZXJzaW9uIiwibmFtZSIsInZlcnNpb24iLCJhbmFseXRpY3MiLCJyZWFzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHlCQUFBO0FBQUFDLFFBQUEsQ0FBQUQseUJBQUE7RUFBQUUsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsMEJBQUEsRUFBQUEsQ0FBQSxLQUFBQSwwQkFBQTtFQUFBQyxtQkFBQSxFQUFBQSxDQUFBLEtBQUFBLG1CQUFBO0VBQUFDLFdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxXQUFBO0VBQUFDLFFBQUEsRUFBQUEsQ0FBQSxLQUFBQSxRQUFBO0VBQUFDLDZCQUFBLEVBQUFBLENBQUEsS0FBQUEsNkJBQUE7RUFBQUMsVUFBQSxFQUFBQSxDQUFBLEtBQUFBLFVBQUE7RUFBQUMsZ0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxnQkFBQTtFQUFBQyx5QkFBQSxFQUFBQSxDQUFBLEtBQUFBLHlCQUFBO0VBQUFDLFNBQUEsRUFBQUEsQ0FBQSxLQUFBQSxTQUFBO0VBQUFDLGlCQUFBLEVBQUFBLENBQUEsS0FBQUEsaUJBQUE7RUFBQUMsUUFBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQWhCLHlCQUFBOzs7Ozs7OztBQ29CTyxJQUFNaUIsY0FBQSxHQUFpQjtBQUd2QixJQUFNQyxVQUFBLEdBQWE7QUFDbkIsSUFBTUMsVUFBQSxHQUFhO0FBRW5CLElBQU1DLG9CQUFBLEdBQXVCLEtBQUs7QUFFbEMsSUFBTUMsa0JBQUEsR0FDWDtBQUVLLElBQU1DLFFBQUEsR0FBVztBQ1pqQixJQUFNQyxNQUFBLEdBQVMsSUFBSUMsYUFBQSxDQUFBQyxNQUFBLENBQU8scUJBQXFCO0FDZXRELElBQU1DLE1BQUEsR0FBbUM7RUFDdkMsb0JBQ0U7RUFHRix5QkFDRTtFQUlGLGtDQUNFO0VBR0Ysa0NBQ0U7RUFDRiwrQkFDRTtFQUdGLDJCQUNFO0VBR0Ysb0JBQ0U7RUFFRix5QkFDRTtFQUNGLGdCQUNFO0VBRUYsZUFDRTtFQUVGLGtCQUErQjtFQUMvQiwyQkFDRTs7QUFnQkcsSUFBTUMsYUFBQSxHQUFnQixJQUFJQyxXQUFBLENBQUFDLFlBQUEsQ0FDL0IsYUFDQSxhQUNBSCxNQUFNO0FDeERGLFNBQVVJLGdDQUFnQ0MsR0FBQSxFQUFXO0VBQ3pELElBQUksQ0FBQ0EsR0FBQSxDQUFJQyxVQUFBLENBQVdWLFFBQVEsR0FBRztJQUM3QixNQUFNVyxHQUFBLEdBQU1OLGFBQUEsQ0FBY08sTUFBQSxDQUE2QztNQUNyRUMsT0FBQSxFQUFTSjtJQUNWO0lBQ0RSLE1BQUEsQ0FBT2EsSUFBQSxDQUFLSCxHQUFBLENBQUlJLE9BQU87SUFDdkIsT0FBTzs7RUFFVCxPQUFPTixHQUFBO0FBQ1Q7QUFRTSxTQUFVTyxrQkFDZEMsUUFBQSxFQUEyQjtFQUUzQixPQUFPQyxPQUFBLENBQVFDLEdBQUEsQ0FBSUYsUUFBQSxDQUFTRyxHQUFBLENBQUlDLE9BQUEsSUFBV0EsT0FBQSxDQUFRQyxLQUFBLENBQU1DLENBQUEsSUFBS0EsQ0FBQyxDQUFDLENBQUM7QUFDbkU7QUFTZ0IsU0FBQUMseUJBQ2RDLFVBQUEsRUFDQUMsYUFBQSxFQUFnRDtFQUloRCxJQUFJQyxrQkFBQTtFQUNKLElBQUlDLE1BQUEsQ0FBT0MsWUFBQSxFQUFjO0lBQ3ZCRixrQkFBQSxHQUFxQkMsTUFBQSxDQUFPQyxZQUFBLENBQWFDLFlBQUEsQ0FDdkNMLFVBQUEsRUFDQUMsYUFBYTs7RUFHakIsT0FBT0Msa0JBQUE7QUFDVDtBQU1nQixTQUFBSSxnQkFDZEMsY0FBQSxFQUNBQyxhQUFBLEVBQXFCO0VBRXJCLE1BQU1OLGtCQUFBLEdBQXFCSCx3QkFBQSxDQUN6QiwwQkFDQTtJQUNFVSxlQUFBLEVBQWlCMUI7RUFDbEI7RUFHSCxNQUFNMkIsTUFBQSxHQUFTQyxRQUFBLENBQVNDLGFBQUEsQ0FBYyxRQUFRO0VBSTlDLE1BQU1DLGFBQUEsR0FBZ0IsR0FBR3RDLFFBQUEsTUFBY2dDLGNBQUEsT0FBb0JDLGFBQUE7RUFDMURFLE1BQUEsQ0FBT0ksR0FBQSxHQUFvQ1osa0JBQUEsR0FDdkNBLGtCQUFBLEtBQXdDLFFBQXhDQSxrQkFBQSxLQUFrQixrQkFBbEJBLGtCQUFBLENBQTBDTyxlQUFBLENBQWdCSSxhQUFhLElBQ3hFQSxhQUFBO0VBRUpILE1BQUEsQ0FBT0ssS0FBQSxHQUFRO0VBQ2ZKLFFBQUEsQ0FBU0ssSUFBQSxDQUFLQyxXQUFBLENBQVlQLE1BQU07QUFDbEM7QUFNTSxTQUFVUSxxQkFBcUJYLGNBQUEsRUFBcUI7RUFFeEQsSUFBSVksU0FBQSxHQUF1QjtFQUMzQixJQUFJQyxLQUFBLENBQU1DLE9BQUEsQ0FBUWxCLE1BQUEsQ0FBT0ksY0FBQSxDQUFjLEdBQUc7SUFDeENZLFNBQUEsR0FBWWhCLE1BQUEsQ0FBT0ksY0FBQTtTQUNkO0lBQ0xKLE1BQUEsQ0FBT0ksY0FBQSxJQUFpQlksU0FBQTs7RUFFMUIsT0FBT0EsU0FBQTtBQUNUO0FBWUEsZUFBZUcsYUFDYkMsUUFBQSxFQUNBQywwQkFBQSxFQUNBQywwQkFBQSxFQUdBQyxxQkFBQSxFQUNBbEIsYUFBQSxFQUNBbUIsVUFBQSxFQUF1RDtFQUl2RCxNQUFNQyxrQkFBQSxHQUFxQkYscUJBQUEsQ0FBcUJsQixhQUFBO0VBQ2hELElBQUk7SUFDRixJQUFJb0Isa0JBQUEsRUFBb0I7TUFDdEIsTUFBTUosMEJBQUEsQ0FBMEJJLGtCQUFBO1dBQzNCO01BS0wsTUFBTUMsb0JBQUEsR0FBdUIsTUFBTXRDLGlCQUFBLENBQ2pDa0MsMEJBQXlCO01BRTNCLE1BQU1LLFdBQUEsR0FBY0Qsb0JBQUEsQ0FBcUJFLElBQUEsQ0FDdkNDLE1BQUEsSUFBVUEsTUFBQSxDQUFPeEIsYUFBQSxLQUFrQkEsYUFBYTtNQUVsRCxJQUFJc0IsV0FBQSxFQUFhO1FBQ2YsTUFBTU4sMEJBQUEsQ0FBMEJNLFdBQUEsQ0FBWUcsS0FBQTs7O1dBR3pDbkMsQ0FBQSxFQUFQO0lBQ0F0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDOztFQUVoQnlCLFFBQUEsQ0FBNkIsVUFBQWYsYUFBQSxFQUFlbUIsVUFBVTtBQUN4RDtBQVdBLGVBQWVRLFlBQ2JaLFFBQUEsRUFDQUMsMEJBQUEsRUFDQUMsMEJBQUEsRUFHQWpCLGFBQUEsRUFDQW1CLFVBQUEsRUFBdUQ7RUFFdkQsSUFBSTtJQUNGLElBQUlTLCtCQUFBLEdBQTBEO0lBSTlELElBQUlULFVBQUEsSUFBY0EsVUFBQSxDQUFXLFlBQVk7TUFDdkMsSUFBSVUsWUFBQSxHQUFrQ1YsVUFBQSxDQUFXO01BRWpELElBQUksQ0FBQ1AsS0FBQSxDQUFNQyxPQUFBLENBQVFnQixZQUFZLEdBQUc7UUFDaENBLFlBQUEsR0FBZSxDQUFDQSxZQUFZOztNQUk5QixNQUFNUixvQkFBQSxHQUF1QixNQUFNdEMsaUJBQUEsQ0FDakNrQywwQkFBeUI7TUFFM0IsV0FBV2EsUUFBQSxJQUFZRCxZQUFBLEVBQWM7UUFFbkMsTUFBTVAsV0FBQSxHQUFjRCxvQkFBQSxDQUFxQkUsSUFBQSxDQUN2Q0MsTUFBQSxJQUFVQSxNQUFBLENBQU94QixhQUFBLEtBQWtCOEIsUUFBUTtRQUU3QyxNQUFNQyxxQkFBQSxHQUNKVCxXQUFBLElBQWVOLDBCQUFBLENBQTBCTSxXQUFBLENBQVlHLEtBQUE7UUFDdkQsSUFBSU0scUJBQUEsRUFBdUI7VUFDekJILCtCQUFBLENBQWdDSSxJQUFBLENBQUtELHFCQUFxQjtlQUNyRDtVQUlMSCwrQkFBQSxHQUFrQztVQUNsQzs7OztJQVFOLElBQUlBLCtCQUFBLENBQWdDSyxNQUFBLEtBQVcsR0FBRztNQUVoREwsK0JBQUEsR0FBa0NNLE1BQUEsQ0FBT0MsTUFBQSxDQUN2Q25CLDBCQUF5Qjs7SUFNN0IsTUFBTS9CLE9BQUEsQ0FBUUMsR0FBQSxDQUFJMEMsK0JBQStCO0lBRWpEYixRQUFBLENBQVEsU0FBb0JmLGFBQUEsRUFBZW1CLFVBQUEsSUFBYyxFQUFFO1dBQ3BEN0IsQ0FBQSxFQUFQO0lBQ0F0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDOztBQUVsQjtBQVdBLFNBQVM4QyxTQUNQckIsUUFBQSxFQUtBQywwQkFBQSxFQUtBQywwQkFBQSxFQVFBQyxxQkFBQSxFQUF5RDtFQVF6RCxlQUFlbUIsWUFDYkMsT0FBQSxLQUNHQyxJQUFBLEVBQWU7SUFFbEIsSUFBSTtNQUVGLElBQUlELE9BQUEsS0FBNkIsU0FBRTtRQUNqQyxNQUFNLENBQUN0QyxhQUFBLEVBQWVtQixVQUFVLElBQUlvQixJQUFBO1FBRXBDLE1BQU1aLFdBQUEsQ0FDSlosUUFBQSxFQUNBQywwQkFBQSxFQUNBQywwQkFBQSxFQUNBakIsYUFBQSxFQUNBbUIsVUFBcUM7aUJBRTlCbUIsT0FBQSxLQUE4QixVQUFFO1FBQ3pDLE1BQU0sQ0FBQ3RDLGFBQUEsRUFBZW1CLFVBQVUsSUFBSW9CLElBQUE7UUFFcEMsTUFBTXpCLFlBQUEsQ0FDSkMsUUFBQSxFQUNBQywwQkFBQSxFQUNBQywwQkFBQSxFQUNBQyxxQkFBQSxFQUNBbEIsYUFBQSxFQUNBbUIsVUFBcUM7aUJBRTlCbUIsT0FBQSxLQUErQixXQUFFO1FBQzFDLE1BQU0sQ0FBQ0UsYUFBQSxFQUFlckIsVUFBVSxJQUFJb0IsSUFBQTtRQUVwQ3hCLFFBQUEsQ0FFRSxXQUFBeUIsYUFBQSxFQUNBckIsVUFBNkI7aUJBRXRCbUIsT0FBQSxLQUEyQixPQUFFO1FBQ3RDLE1BQU0sQ0FBQ3RDLGFBQUEsRUFBZXlDLFNBQUEsRUFBV0MsUUFBUSxJQUFJSCxJQUFBO1FBQzdDeEIsUUFBQSxDQUFRLE9BRU5mLGFBQUEsRUFDQXlDLFNBQUEsRUFDQUMsUUFBd0M7aUJBRWpDSixPQUFBLEtBQTJCLE9BQUU7UUFDdEMsTUFBTSxDQUFDSyxZQUFZLElBQUlKLElBQUE7UUFFdkJ4QixRQUFBLENBQVEsT0FBa0I0QixZQUE0QjthQUNqRDtRQUNMNUIsUUFBQSxDQUFTdUIsT0FBQSxFQUFTLEdBQUdDLElBQUk7O2FBRXBCakQsQ0FBQSxFQUFQO01BQ0F0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDOzs7RUFHbEIsT0FBTytDLFdBQUE7QUFDVDtBQWFNLFNBQVVPLGlCQUNkNUIsMEJBQUEsRUFDQUMsMEJBQUEsRUFHQUMscUJBQUEsRUFDQW5CLGNBQUEsRUFDQThDLGdCQUFBLEVBQXdCO0VBTXhCLElBQUk5QixRQUFBLEdBQWlCLFNBQUFBLENBQUEsR0FBYStCLEtBQUEsRUFBZ0I7SUFFL0NuRCxNQUFBLENBQU9JLGNBQUEsRUFBNkJpQyxJQUFBLENBQUtlLFNBQVM7RUFDckQ7RUFHQSxJQUNFcEQsTUFBQSxDQUFPa0QsZ0JBQUEsS0FDUCxPQUFPbEQsTUFBQSxDQUFPa0QsZ0JBQUEsTUFBc0IsWUFDcEM7SUFFQTlCLFFBQUEsR0FBV3BCLE1BQUEsQ0FBT2tELGdCQUFBOztFQUdwQmxELE1BQUEsQ0FBT2tELGdCQUFBLElBQW9CVCxRQUFBLENBQ3pCckIsUUFBQSxFQUNBQywwQkFBQSxFQUNBQywwQkFBQSxFQUNBQyxxQkFBb0I7RUFHdEIsT0FBTztJQUNMSCxRQUFBO0lBQ0FpQyxXQUFBLEVBQWFyRCxNQUFBLENBQU9rRCxnQkFBQTs7QUFFeEI7QUFNTSxTQUFVSSxxQkFDZGxELGNBQUEsRUFBcUI7RUFFckIsTUFBTW1ELFVBQUEsR0FBYXZELE1BQUEsQ0FBT1EsUUFBQSxDQUFTZ0Qsb0JBQUEsQ0FBcUIsUUFBUTtFQUNoRSxXQUFXQyxHQUFBLElBQU9sQixNQUFBLENBQU9DLE1BQUEsQ0FBT2UsVUFBVSxHQUFHO0lBQzNDLElBQ0VFLEdBQUEsQ0FBSTlDLEdBQUEsSUFDSjhDLEdBQUEsQ0FBSTlDLEdBQUEsQ0FBSStDLFFBQUEsQ0FBU3RGLFFBQVEsS0FDekJxRixHQUFBLENBQUk5QyxHQUFBLENBQUkrQyxRQUFBLENBQVN0RCxjQUFhLEdBQzlCO01BQ0EsT0FBT3FELEdBQUE7OztFQUdYLE9BQU87QUFDVDtBQzVXTyxJQUFNRSxpQkFBQSxHQUFvQjtBQUtqQyxJQUFNQyxvQkFBQSxHQUF1QjtBQUs3QixJQUFNQyxTQUFBLEdBQU4sTUFBZTtFQUNiQyxZQUNTQyxnQkFBQSxHQUEwRCxJQUMxREMsY0FBQSxHQUF5Qkosb0JBQUEsRUFBb0I7SUFEN0MsS0FBZ0JHLGdCQUFBLEdBQWhCQSxnQkFBQTtJQUNBLEtBQWNDLGNBQUEsR0FBZEEsY0FBQTs7RUFHVEMsb0JBQW9CbkMsS0FBQSxFQUFhO0lBQy9CLE9BQU8sS0FBS2lDLGdCQUFBLENBQWlCakMsS0FBQTs7RUFHL0JvQyxvQkFBb0JwQyxLQUFBLEVBQWVxQyxRQUFBLEVBQTBCO0lBQzNELEtBQUtKLGdCQUFBLENBQWlCakMsS0FBQSxJQUFTcUMsUUFBQTs7RUFHakNDLHVCQUF1QnRDLEtBQUEsRUFBYTtJQUNsQyxPQUFPLEtBQUtpQyxnQkFBQSxDQUFpQmpDLEtBQUE7O0FBRWhDO0FBRUQsSUFBTXVDLGdCQUFBLEdBQW1CLElBQUlSLFNBQUEsQ0FBUztBQU10QyxTQUFTUyxXQUFXQyxNQUFBLEVBQWM7RUFDaEMsT0FBTyxJQUFJQyxPQUFBLENBQVE7SUFDakJDLE1BQUEsRUFBUTtJQUNSLGtCQUFrQkY7RUFDbkI7QUFDSDtBQU1PLGVBQWVHLG1CQUNwQkMsU0FBQSxFQUFvQjs7RUFFcEIsTUFBTTtJQUFFN0MsS0FBQTtJQUFPeUM7RUFBTSxJQUFLSSxTQUFBO0VBQzFCLE1BQU1DLE9BQUEsR0FBdUI7SUFDM0JDLE1BQUEsRUFBUTtJQUNSQyxPQUFBLEVBQVNSLFVBQUEsQ0FBV0MsTUFBTTs7RUFFNUIsTUFBTVEsTUFBQSxHQUFTNUcsa0JBQUEsQ0FBbUI2RyxPQUFBLENBQVEsWUFBWWxELEtBQUs7RUFDM0QsTUFBTW1ELFFBQUEsR0FBVyxNQUFNQyxLQUFBLENBQU1ILE1BQUEsRUFBUUgsT0FBTztFQUM1QyxJQUFJSyxRQUFBLENBQVNFLE1BQUEsS0FBVyxPQUFPRixRQUFBLENBQVNFLE1BQUEsS0FBVyxLQUFLO0lBQ3RELElBQUlDLFlBQUEsR0FBZTtJQUNuQixJQUFJO01BRUYsTUFBTUMsWUFBQSxHQUFnQixNQUFNSixRQUFBLENBQVNLLElBQUEsQ0FBSTtNQUd6QyxLQUFJQyxFQUFBLEdBQUFGLFlBQUEsQ0FBYXRELEtBQUEsTUFBTyxRQUFBd0QsRUFBQSx1QkFBQUEsRUFBQSxDQUFBcEcsT0FBQSxFQUFTO1FBQy9CaUcsWUFBQSxHQUFlQyxZQUFBLENBQWF0RCxLQUFBLENBQU01QyxPQUFBOzthQUU3QnFHLFFBQUEsRUFBUCxDQUFpQjtJQUNuQixNQUFNL0csYUFBQSxDQUFjTyxNQUFBLENBQTJDO01BQzdEeUcsVUFBQSxFQUFZUixRQUFBLENBQVNFLE1BQUE7TUFDckJPLGVBQUEsRUFBaUJOO0lBQ2xCOztFQUVILE9BQU9ILFFBQUEsQ0FBU0ssSUFBQSxDQUFJO0FBQ3RCO0FBTU8sZUFBZUssNEJBQ3BCQyxHQUFBLEVBRUFDLFNBQUEsR0FBdUJ4QixnQkFBQSxFQUN2QnlCLGFBQUEsRUFBc0I7RUFFdEIsTUFBTTtJQUFFaEUsS0FBQTtJQUFPeUMsTUFBQTtJQUFRbEU7RUFBYSxJQUFLdUYsR0FBQSxDQUFJRyxPQUFBO0VBRTdDLElBQUksQ0FBQ2pFLEtBQUEsRUFBTztJQUNWLE1BQU1yRCxhQUFBLENBQWNPLE1BQUEsQ0FBTTs7RUFHNUIsSUFBSSxDQUFDdUYsTUFBQSxFQUFRO0lBQ1gsSUFBSWxFLGFBQUEsRUFBZTtNQUNqQixPQUFPO1FBQ0xBLGFBQUE7UUFDQXlCOzs7SUFHSixNQUFNckQsYUFBQSxDQUFjTyxNQUFBLENBQU07O0VBRzVCLE1BQU0rRSxnQkFBQSxHQUFxQzhCLFNBQUEsQ0FBVTVCLG1CQUFBLENBQ25EbkMsS0FBSyxLQUNGO0lBQ0hrRSxZQUFBLEVBQWM7SUFDZEMscUJBQUEsRUFBdUJDLElBQUEsQ0FBS0MsR0FBQSxDQUFHOztFQUdqQyxNQUFNQyxNQUFBLEdBQVMsSUFBSUMsb0JBQUEsQ0FBb0I7RUFFdkNDLFVBQUEsQ0FDRSxZQUFXO0lBRVRGLE1BQUEsQ0FBT0csS0FBQSxDQUFLO0VBQ2QsR0FDQVQsYUFBQSxLQUFrQixTQUFZQSxhQUFBLEdBQWdCNUgsb0JBQW9CO0VBR3BFLE9BQU9zSSxrQ0FBQSxDQUNMO0lBQUUxRSxLQUFBO0lBQU95QyxNQUFBO0lBQVFsRTtFQUFhLEdBQzlCMEQsZ0JBQUEsRUFDQXFDLE1BQUEsRUFDQVAsU0FBUztBQUViO0FBUUEsZUFBZVcsbUNBQ2I3QixTQUFBLEVBQ0E7RUFBRXNCLHFCQUFBO0VBQXVCRDtBQUFZLEdBQ3JDSSxNQUFBLEVBQ0FQLFNBQUEsR0FBdUJ4QixnQkFBQTs7RUFFdkIsTUFBTTtJQUFFdkMsS0FBQTtJQUFPekI7RUFBYSxJQUFLc0UsU0FBQTtFQUlqQyxJQUFJO0lBQ0YsTUFBTThCLG1CQUFBLENBQW9CTCxNQUFBLEVBQVFILHFCQUFxQjtXQUNoRHRHLENBQUEsRUFBUDtJQUNBLElBQUlVLGFBQUEsRUFBZTtNQUNqQmhDLE1BQUEsQ0FBT2EsSUFBQSxDQUNMLDZHQUN5Q21CLGFBQUEseUVBRXBDVixDQUFBLEtBQVcsUUFBWEEsQ0FBQSxLQUFDLGtCQUFEQSxDQUFBLENBQWFSLE9BQUEsR0FDYjtNQUVQLE9BQU87UUFBRTJDLEtBQUE7UUFBT3pCO01BQWE7O0lBRS9CLE1BQU1WLENBQUE7O0VBR1IsSUFBSTtJQUNGLE1BQU1zRixRQUFBLEdBQVcsTUFBTVAsa0JBQUEsQ0FBbUJDLFNBQVM7SUFHbkRrQixTQUFBLENBQVV6QixzQkFBQSxDQUF1QnRDLEtBQUs7SUFFdEMsT0FBT21ELFFBQUE7V0FDQXRGLENBQUEsRUFBUDtJQUNBLE1BQU1vQyxLQUFBLEdBQVFwQyxDQUFBO0lBQ2QsSUFBSSxDQUFDK0csZ0JBQUEsQ0FBaUIzRSxLQUFLLEdBQUc7TUFDNUI4RCxTQUFBLENBQVV6QixzQkFBQSxDQUF1QnRDLEtBQUs7TUFDdEMsSUFBSXpCLGFBQUEsRUFBZTtRQUNqQmhDLE1BQUEsQ0FBT2EsSUFBQSxDQUNMLDBHQUN5Q21CLGFBQUEseUVBQ2tDMEIsS0FBQSxLQUFLLFFBQUxBLEtBQUEsS0FBSyxrQkFBTEEsS0FBQSxDQUFPNUMsT0FBQSxHQUFVO1FBRTlGLE9BQU87VUFBRTJDLEtBQUE7VUFBT3pCO1FBQWE7YUFDeEI7UUFDTCxNQUFNVixDQUFBOzs7SUFJVixNQUFNZ0gsYUFBQSxHQUNKQyxNQUFBLEVBQU9yQixFQUFBLEdBQUF4RCxLQUFBLGFBQUFBLEtBQUEsdUJBQUFBLEtBQUEsQ0FBTzhFLFVBQUEsTUFBVSxRQUFBdEIsRUFBQSx1QkFBQUEsRUFBQSxDQUFFRSxVQUFVLE1BQU0sVUFDdEMvRyxXQUFBLENBQUFvSSxzQkFBQSxFQUNFZCxZQUFBLEVBQ0FILFNBQUEsQ0FBVTdCLGNBQUEsRUFDVkwsaUJBQWlCLFFBRW5CakYsV0FBQSxDQUFBb0ksc0JBQUEsRUFBdUJkLFlBQUEsRUFBY0gsU0FBQSxDQUFVN0IsY0FBYztJQUduRSxNQUFNRCxnQkFBQSxHQUFtQjtNQUN2QmtDLHFCQUFBLEVBQXVCQyxJQUFBLENBQUtDLEdBQUEsQ0FBRyxJQUFLUSxhQUFBO01BQ3BDWCxZQUFBLEVBQWNBLFlBQUEsR0FBZTs7SUFJL0JILFNBQUEsQ0FBVTNCLG1CQUFBLENBQW9CcEMsS0FBQSxFQUFPaUMsZ0JBQWdCO0lBQ3JEMUYsTUFBQSxDQUFPMEksS0FBQSxDQUFNLGlDQUFpQ0osYUFBQSxTQUFzQjtJQUVwRSxPQUFPSCxrQ0FBQSxDQUNMN0IsU0FBQSxFQUNBWixnQkFBQSxFQUNBcUMsTUFBQSxFQUNBUCxTQUFTOztBQUdmO0FBY0EsU0FBU1ksb0JBQ1BMLE1BQUEsRUFDQUgscUJBQUEsRUFBNkI7RUFFN0IsT0FBTyxJQUFJM0csT0FBQSxDQUFRLENBQUMwSCxPQUFBLEVBQVNDLE1BQUEsS0FBVTtJQUVyQyxNQUFNTixhQUFBLEdBQWdCTyxJQUFBLENBQUtDLEdBQUEsQ0FBSWxCLHFCQUFBLEdBQXdCQyxJQUFBLENBQUtDLEdBQUEsQ0FBRyxHQUFJLENBQUM7SUFFcEUsTUFBTWlCLE9BQUEsR0FBVWQsVUFBQSxDQUFXVSxPQUFBLEVBQVNMLGFBQWE7SUFHakRQLE1BQUEsQ0FBT2lCLGdCQUFBLENBQWlCLE1BQUs7TUFDM0JDLFlBQUEsQ0FBYUYsT0FBTztNQUVwQkgsTUFBQSxDQUNFeEksYUFBQSxDQUFjTyxNQUFBLENBQXNDO1FBQ2xEaUg7TUFDRCxFQUFDO0lBRU4sQ0FBQztFQUNILENBQUM7QUFDSDtBQU9BLFNBQVNTLGlCQUFpQi9HLENBQUEsRUFBUTtFQUNoQyxJQUFJLEVBQUVBLENBQUEsWUFBYWpCLFdBQUEsQ0FBQTZJLGFBQUEsS0FBa0IsQ0FBQzVILENBQUEsQ0FBRWtILFVBQUEsRUFBWTtJQUNsRCxPQUFPOztFQUlULE1BQU1wQixVQUFBLEdBQWFtQixNQUFBLENBQU9qSCxDQUFBLENBQUVrSCxVQUFBLENBQVcsYUFBYTtFQUVwRCxPQUNFcEIsVUFBQSxLQUFlLE9BQ2ZBLFVBQUEsS0FBZSxPQUNmQSxVQUFBLEtBQWUsT0FDZkEsVUFBQSxLQUFlO0FBRW5CO0lBVWFZLG9CQUFBLFNBQW9CO0VBQWpDdkMsWUFBQTtJQUNFLEtBQVMwRCxTQUFBLEdBQXNCOztFQUMvQkgsaUJBQWlCSSxRQUFBLEVBQW9CO0lBQ25DLEtBQUtELFNBQUEsQ0FBVW5GLElBQUEsQ0FBS29GLFFBQVE7O0VBRTlCbEIsTUFBQSxFQUFLO0lBQ0gsS0FBS2lCLFNBQUEsQ0FBVUUsT0FBQSxDQUFRRCxRQUFBLElBQVlBLFFBQUEsQ0FBUSxDQUFFOztBQUVoRDtBQ25TTSxJQUFJRSw2QkFBQTtBQVNKLGVBQWVDLFdBQ3BCQyxZQUFBLEVBQ0F6RixxQkFBQSxFQUNBMEYsU0FBQSxFQUNBQyxXQUFBLEVBQ0FoQyxPQUFBLEVBQThCO0VBRTlCLElBQUlBLE9BQUEsSUFBV0EsT0FBQSxDQUFRaUMsTUFBQSxFQUFRO0lBQzdCSCxZQUFBLENBQWdDLFNBQUFDLFNBQUEsRUFBV0MsV0FBVztJQUN0RDtTQUNLO0lBQ0wsTUFBTTFILGFBQUEsR0FBZ0IsTUFBTStCLHFCQUFBO0lBQzVCLE1BQU02RixNQUFBLEdBQU0xRixNQUFBLENBQUEyRixNQUFBLENBQUEzRixNQUFBLENBQUEyRixNQUFBLEtBQ1BILFdBQVc7TUFDZCxXQUFXMUg7SUFBYTtJQUUxQndILFlBQUEsQ0FBZ0MsU0FBQUMsU0FBQSxFQUFXRyxNQUFNOztBQUVyRDtBQVdPLGVBQWVFLG1CQUNwQk4sWUFBQSxFQUNBekYscUJBQUEsRUFDQWdHLFVBQUEsRUFDQXJDLE9BQUEsRUFBOEI7RUFFOUIsSUFBSUEsT0FBQSxJQUFXQSxPQUFBLENBQVFpQyxNQUFBLEVBQVE7SUFDN0JILFlBQUEsQ0FBWSxPQUFrQjtNQUFFLGVBQWVPO0lBQVUsQ0FBRTtJQUMzRCxPQUFPOUksT0FBQSxDQUFRMEgsT0FBQSxDQUFPO1NBQ2pCO0lBQ0wsTUFBTTNHLGFBQUEsR0FBZ0IsTUFBTStCLHFCQUFBO0lBQzVCeUYsWUFBQSxDQUFZLFVBQXFCeEgsYUFBQSxFQUFlO01BQzlDZ0ksTUFBQSxFQUFRO01BQ1IsZUFBZUQ7SUFDaEI7O0FBRUw7QUFRTyxlQUFlRSxZQUNwQlQsWUFBQSxFQUNBekYscUJBQUEsRUFDQW1HLEVBQUEsRUFDQXhDLE9BQUEsRUFBOEI7RUFFOUIsSUFBSUEsT0FBQSxJQUFXQSxPQUFBLENBQVFpQyxNQUFBLEVBQVE7SUFDN0JILFlBQUEsQ0FBWSxPQUFrQjtNQUFFLFdBQVdVO0lBQUUsQ0FBRTtJQUMvQyxPQUFPakosT0FBQSxDQUFRMEgsT0FBQSxDQUFPO1NBQ2pCO0lBQ0wsTUFBTTNHLGFBQUEsR0FBZ0IsTUFBTStCLHFCQUFBO0lBQzVCeUYsWUFBQSxDQUFZLFVBQXFCeEgsYUFBQSxFQUFlO01BQzlDZ0ksTUFBQSxFQUFRO01BQ1IsV0FBV0U7SUFDWjs7QUFFTDtBQVFPLGVBQWVDLG9CQUNwQlgsWUFBQSxFQUNBekYscUJBQUEsRUFDQXFHLFVBQUEsRUFDQTFDLE9BQUEsRUFBOEI7RUFFOUIsSUFBSUEsT0FBQSxJQUFXQSxPQUFBLENBQVFpQyxNQUFBLEVBQVE7SUFDN0IsTUFBTVUsY0FBQSxHQUE2QztJQUNuRCxXQUFXQyxHQUFBLElBQU9wRyxNQUFBLENBQU9xRyxJQUFBLENBQUtILFVBQVUsR0FBRztNQUV6Q0MsY0FBQSxDQUFlLG1CQUFtQkMsR0FBQSxNQUFTRixVQUFBLENBQVdFLEdBQUE7O0lBRXhEZCxZQUFBLENBQVksT0FBa0JhLGNBQWM7SUFDNUMsT0FBT3BKLE9BQUEsQ0FBUTBILE9BQUEsQ0FBTztTQUNqQjtJQUNMLE1BQU0zRyxhQUFBLEdBQWdCLE1BQU0rQixxQkFBQTtJQUM1QnlGLFlBQUEsQ0FBWSxVQUFxQnhILGFBQUEsRUFBZTtNQUM5Q2dJLE1BQUEsRUFBUTtNQUNSLG1CQUFtQkk7SUFDcEI7O0FBRUw7QUFRTyxlQUFlSSxtQ0FDcEJoQixZQUFBLEVBQ0F6RixxQkFBQSxFQUFzQztFQUV0QyxNQUFNL0IsYUFBQSxHQUFnQixNQUFNK0IscUJBQUE7RUFDNUIsT0FBTyxJQUFJOUMsT0FBQSxDQUFRLENBQUMwSCxPQUFBLEVBQVNDLE1BQUEsS0FBVTtJQUNyQ1ksWUFBQSxDQUFZLE9BRVZ4SCxhQUFBLEVBQ0EsYUFDQ3lJLFFBQUEsSUFBb0I7TUFDbkIsSUFBSSxDQUFDQSxRQUFBLEVBQVU7UUFDYjdCLE1BQUEsQ0FBT3hJLGFBQUEsQ0FBY08sTUFBQSxDQUFNLGVBQTZCOztNQUUxRGdJLE9BQUEsQ0FBUThCLFFBQVE7SUFDbEIsQ0FBQztFQUVMLENBQUM7QUFDSDtBQU9PLGVBQWVDLGdDQUNwQjNHLHFCQUFBLEVBQ0E0RyxPQUFBLEVBQWdCO0VBRWhCLE1BQU0zSSxhQUFBLEdBQWdCLE1BQU0rQixxQkFBQTtFQUM1QnBDLE1BQUEsQ0FBTyxjQUFjSyxhQUFBLE1BQW1CLENBQUMySSxPQUFBO0FBQzNDO0FBS08sSUFBSUMsNkJBQUE7QUFRTCxTQUFVQywwQkFDZEMsZUFBQSxFQUFpQztFQUVqQ0YsNkJBQUEsR0FBZ0NFLGVBQUE7QUFDbEM7QUFRTSxTQUFVQyxrQ0FDZHBHLFlBQUEsRUFBMkI7RUFFM0IyRSw2QkFBQSxHQUFnQzNFLFlBQUE7QUFDbEM7QUN6S0EsZUFBZXFHLGtCQUFBLEVBQWlCO0VBQzlCLElBQUksS0FBQzNLLFdBQUEsQ0FBQTRLLG9CQUFBLEVBQW9CLEdBQUk7SUFDM0JqTCxNQUFBLENBQU9hLElBQUEsQ0FDTFQsYUFBQSxDQUFjTyxNQUFBLENBQTZDO01BQ3pEdUssU0FBQSxFQUFXO0tBQ1osRUFBRXBLLE9BQU87SUFFWixPQUFPO1NBQ0Y7SUFDTCxJQUFJO01BQ0YsVUFBTVQsV0FBQSxDQUFBOEsseUJBQUEsRUFBeUI7YUFDeEI3SixDQUFBLEVBQVA7TUFDQXRCLE1BQUEsQ0FBT2EsSUFBQSxDQUNMVCxhQUFBLENBQWNPLE1BQUEsQ0FBNkM7UUFDekR1SyxTQUFBLEVBQVk1SixDQUFBLGFBQUFBLENBQUEsS0FBQyxrQkFBREEsQ0FBQSxDQUFhOEosUUFBQSxDQUFRO09BQ2xDLEVBQUV0SyxPQUFPO01BRVosT0FBTzs7O0VBR1gsT0FBTztBQUNUO0FBZU8sZUFBZXVLLHFCQUNwQjlELEdBQUEsRUFDQXRFLDBCQUFBLEVBR0FDLHFCQUFBLEVBQ0FvSSxhQUFBLEVBQ0F2SSxRQUFBLEVBQ0FoQixjQUFBLEVBQ0EyRixPQUFBLEVBQTJCOztFQUUzQixNQUFNNkQsb0JBQUEsR0FBdUJqRSwyQkFBQSxDQUE0QkMsR0FBRztFQUU1RGdFLG9CQUFBLENBQ0dDLElBQUEsQ0FBS2hJLE1BQUEsSUFBUztJQUNiTixxQkFBQSxDQUFxQk0sTUFBQSxDQUFPeEIsYUFBQSxJQUFpQndCLE1BQUEsQ0FBT0MsS0FBQTtJQUNwRCxJQUNFOEQsR0FBQSxDQUFJRyxPQUFBLENBQVExRixhQUFBLElBQ1p3QixNQUFBLENBQU94QixhQUFBLEtBQWtCdUYsR0FBQSxDQUFJRyxPQUFBLENBQVExRixhQUFBLEVBQ3JDO01BQ0FoQyxNQUFBLENBQU9hLElBQUEsQ0FDTCxvREFBb0QwRyxHQUFBLENBQUlHLE9BQUEsQ0FBUTFGLGFBQUEsZ0VBQ0N3QixNQUFBLENBQU94QixhQUFBLDBLQUdTOztFQUd2RixDQUFDLEVBQ0FYLEtBQUEsQ0FBTUMsQ0FBQSxJQUFLdEIsTUFBQSxDQUFPMEQsS0FBQSxDQUFNcEMsQ0FBQyxDQUFDO0VBRTdCMkIsMEJBQUEsQ0FBMEJlLElBQUEsQ0FBS3VILG9CQUFvQjtFQUVuRCxNQUFNRSxVQUFBLEdBQTBDVCxpQkFBQSxDQUFpQixFQUFHUSxJQUFBLENBQ2xFRSxVQUFBLElBQWE7SUFDWCxJQUFJQSxVQUFBLEVBQVk7TUFDZCxPQUFPSixhQUFBLENBQWNLLEtBQUEsQ0FBSztXQUNyQjtNQUNMLE9BQU87O0VBRVgsQ0FBQztFQUdILE1BQU0sQ0FBQ0MsYUFBQSxFQUFlQyxHQUFHLElBQUksTUFBTTVLLE9BQUEsQ0FBUUMsR0FBQSxDQUFJLENBQzdDcUssb0JBQUEsRUFDQUUsVUFBQSxDQUNEO0VBSUQsSUFBSSxDQUFDeEcsb0JBQUEsQ0FBcUJsRCxjQUFhLEdBQUc7SUFDeENELGVBQUEsQ0FBZ0JDLGNBQUEsRUFBZTZKLGFBQUEsQ0FBYzVKLGFBQWE7O0VBSTVELElBQUk0SSw2QkFBQSxFQUErQjtJQUNqQzdILFFBQUEsQ0FBOEIsc0JBQVc2SCw2QkFBNkI7SUFDdEVDLHlCQUFBLENBQTBCLE1BQVM7O0VBT3BDOUgsUUFBQSxDQUFpQixNQUFNLElBQUk4RSxJQUFBLENBQUksQ0FBRTtFQUdsQyxNQUFNaUUsZ0JBQUEsSUFBNEM1RSxFQUFBLEdBQUFRLE9BQUEsYUFBQUEsT0FBQSx1QkFBQUEsT0FBQSxDQUFTbEUsTUFBQSxNQUFVLFFBQUEwRCxFQUFBLGNBQUFBLEVBQUE7RUFHckU0RSxnQkFBQSxDQUFpQmxNLFVBQUEsSUFBYztFQUMvQmtNLGdCQUFBLENBQWlCOUIsTUFBQSxHQUFTO0VBRTFCLElBQUk2QixHQUFBLElBQU8sTUFBTTtJQUNmQyxnQkFBQSxDQUFpQm5NLFVBQUEsSUFBY2tNLEdBQUE7O0VBT2pDOUksUUFBQSxDQUFRLFVBQXFCNkksYUFBQSxDQUFjNUosYUFBQSxFQUFlOEosZ0JBQWdCO0VBRzFFLElBQUl4Qyw2QkFBQSxFQUErQjtJQUNqQ3ZHLFFBQUEsQ0FBUSxPQUFrQnVHLDZCQUE2QjtJQUN2RHlCLGlDQUFBLENBQWtDLE1BQVM7O0VBRzdDLE9BQU9hLGFBQUEsQ0FBYzVKLGFBQUE7QUFDdkI7SUNySWErSixnQkFBQSxTQUFnQjtFQUMzQnRHLFlBQW1COEIsR0FBQSxFQUFnQjtJQUFoQixLQUFHQSxHQUFBLEdBQUhBLEdBQUE7O0VBQ25CeUUsUUFBQSxFQUFPO0lBQ0wsT0FBT0MseUJBQUEsQ0FBMEIsS0FBSzFFLEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQTtJQUNsRCxPQUFPeEMsT0FBQSxDQUFRMEgsT0FBQSxDQUFPOztBQUV6QjtBQU9NLElBQUlzRCx5QkFBQSxHQUVQO0FBT0osSUFBSUMseUJBQUEsR0FFQTtBQVFKLElBQU1DLG9CQUFBLEdBQTREO0FBS2xFLElBQUlDLGFBQUEsR0FBd0I7QUFLNUIsSUFBSUMsUUFBQSxHQUFtQjtBQU12QixJQUFJQyxnQkFBQTtBQU1HLElBQUlDLG1CQUFBO0FBTVgsSUFBSUMsY0FBQSxHQUEwQjtBQThDeEIsU0FBVWxOLFNBQVNvSSxPQUFBLEVBQXdCO0VBQy9DLElBQUk4RSxjQUFBLEVBQWdCO0lBQ2xCLE1BQU1wTSxhQUFBLENBQWNPLE1BQUEsQ0FBTTs7RUFFNUIsSUFBSStHLE9BQUEsQ0FBUTBFLGFBQUEsRUFBZTtJQUN6QkEsYUFBQSxHQUFnQjFFLE9BQUEsQ0FBUTBFLGFBQUE7O0VBRTFCLElBQUkxRSxPQUFBLENBQVEyRSxRQUFBLEVBQVU7SUFDcEJBLFFBQUEsR0FBVzNFLE9BQUEsQ0FBUTJFLFFBQUE7O0FBRXZCO0FBT0EsU0FBU0ksNkJBQUEsRUFBNEI7RUFDbkMsTUFBTUMscUJBQUEsR0FBd0I7RUFDOUIsUUFBSXJNLFdBQUEsQ0FBQXNNLGtCQUFBLEVBQWtCLEdBQUk7SUFDeEJELHFCQUFBLENBQXNCMUksSUFBQSxDQUFLLDBDQUEwQzs7RUFFdkUsSUFBSSxLQUFDM0QsV0FBQSxDQUFBdU0saUJBQUEsRUFBaUIsR0FBSTtJQUN4QkYscUJBQUEsQ0FBc0IxSSxJQUFBLENBQUssNEJBQTRCOztFQUV6RCxJQUFJMEkscUJBQUEsQ0FBc0J6SSxNQUFBLEdBQVMsR0FBRztJQUNwQyxNQUFNNEksT0FBQSxHQUFVSCxxQkFBQSxDQUNidkwsR0FBQSxDQUFJLENBQUNMLE9BQUEsRUFBU2dNLEtBQUEsS0FBVSxJQUFJQSxLQUFBLEdBQVEsTUFBTWhNLE9BQUEsRUFBUyxFQUNuRGlNLElBQUEsQ0FBSyxHQUFHO0lBQ1gsTUFBTXJNLEdBQUEsR0FBTU4sYUFBQSxDQUFjTyxNQUFBLENBQWlEO01BQ3pFdUssU0FBQSxFQUFXMkI7SUFDWjtJQUNEN00sTUFBQSxDQUFPYSxJQUFBLENBQUtILEdBQUEsQ0FBSUksT0FBTzs7QUFFM0I7U0FNZ0JrTSxRQUNkekYsR0FBQSxFQUNBK0QsYUFBQSxFQUNBNUQsT0FBQSxFQUEyQjtFQUUzQitFLDRCQUFBLENBQTRCO0VBQzVCLE1BQU1oSixLQUFBLEdBQVE4RCxHQUFBLENBQUlHLE9BQUEsQ0FBUWpFLEtBQUE7RUFDMUIsSUFBSSxDQUFDQSxLQUFBLEVBQU87SUFDVixNQUFNckQsYUFBQSxDQUFjTyxNQUFBLENBQU07O0VBRTVCLElBQUksQ0FBQzRHLEdBQUEsQ0FBSUcsT0FBQSxDQUFReEIsTUFBQSxFQUFRO0lBQ3ZCLElBQUlxQixHQUFBLENBQUlHLE9BQUEsQ0FBUTFGLGFBQUEsRUFBZTtNQUM3QmhDLE1BQUEsQ0FBT2EsSUFBQSxDQUNMLHlLQUMrRTBHLEdBQUEsQ0FBSUcsT0FBQSxDQUFRMUYsYUFBQSxzRUFDbkI7V0FFckU7TUFDTCxNQUFNNUIsYUFBQSxDQUFjTyxNQUFBLENBQU07OztFQUc5QixJQUFJc0wseUJBQUEsQ0FBMEJ4SSxLQUFBLEtBQVUsTUFBTTtJQUM1QyxNQUFNckQsYUFBQSxDQUFjTyxNQUFBLENBQXNDO01BQ3hEdUosRUFBQSxFQUFJekc7SUFDTDs7RUFHSCxJQUFJLENBQUMrSSxjQUFBLEVBQWdCO0lBSW5COUosb0JBQUEsQ0FBcUIwSixhQUFhO0lBRWxDLE1BQU07TUFBRXBILFdBQUE7TUFBYWpDO0lBQVEsSUFBSzZCLGdCQUFBLENBQ2hDcUgseUJBQUEsRUFDQUMseUJBQUEsRUFDQUMsb0JBQUEsRUFDQUMsYUFBQSxFQUNBQyxRQUFRO0lBRVZFLG1CQUFBLEdBQXNCdkgsV0FBQTtJQUN0QnNILGdCQUFBLEdBQW1CdkosUUFBQTtJQUVuQnlKLGNBQUEsR0FBaUI7O0VBSW5CUCx5QkFBQSxDQUEwQnhJLEtBQUEsSUFBUzRILG9CQUFBLENBQ2pDOUQsR0FBQSxFQUNBMkUseUJBQUEsRUFDQUMsb0JBQUEsRUFDQWIsYUFBQSxFQUNBZ0IsZ0JBQUEsRUFDQUYsYUFBQSxFQUNBMUUsT0FBTztFQUdULE1BQU11RixpQkFBQSxHQUFzQyxJQUFJbEIsZ0JBQUEsQ0FBaUJ4RSxHQUFHO0VBRXBFLE9BQU8wRixpQkFBQTtBQUNUO0FDcEtnQixTQUFBdE8sYUFBYTRJLEdBQUEsT0FBbUIyRixVQUFBLENBQUFDLE1BQUEsRUFBTSxHQUFFO0VBQ3RENUYsR0FBQSxPQUFNbEgsV0FBQSxDQUFBK00sa0JBQUEsRUFBbUI3RixHQUFHO0VBRTVCLE1BQU04RixpQkFBQSxPQUEyQ0gsVUFBQSxDQUFBSSxZQUFBLEVBQy9DL0YsR0FBQSxFQUNBN0gsY0FBYztFQUdoQixJQUFJMk4saUJBQUEsQ0FBa0JFLGFBQUEsQ0FBYSxHQUFJO0lBQ3JDLE9BQU9GLGlCQUFBLENBQWtCRyxZQUFBLENBQVk7O0VBR3ZDLE9BQU8zTyxtQkFBQSxDQUFvQjBJLEdBQUc7QUFDaEM7U0FTZ0IxSSxvQkFDZDBJLEdBQUEsRUFDQUcsT0FBQSxHQUE2QixJQUFFO0VBRy9CLE1BQU0yRixpQkFBQSxPQUEyQ0gsVUFBQSxDQUFBSSxZQUFBLEVBQy9DL0YsR0FBQSxFQUNBN0gsY0FBYztFQUVoQixJQUFJMk4saUJBQUEsQ0FBa0JFLGFBQUEsQ0FBYSxHQUFJO0lBQ3JDLE1BQU1FLGdCQUFBLEdBQW1CSixpQkFBQSxDQUFrQkcsWUFBQSxDQUFZO0lBQ3ZELFFBQUluTixXQUFBLENBQUFxTixTQUFBLEVBQVVoRyxPQUFBLEVBQVMyRixpQkFBQSxDQUFrQk0sVUFBQSxDQUFVLENBQUUsR0FBRztNQUN0RCxPQUFPRixnQkFBQTtXQUNGO01BQ0wsTUFBTXJOLGFBQUEsQ0FBY08sTUFBQSxDQUFNOzs7RUFHOUIsTUFBTXNNLGlCQUFBLEdBQW9CSSxpQkFBQSxDQUFrQk8sVUFBQSxDQUFXO0lBQUVsRztFQUFPLENBQUU7RUFDbEUsT0FBT3VGLGlCQUFBO0FBQ1Q7QUFhTyxlQUFlbk8sWUFBQSxFQUFXO0VBQy9CLFFBQUl1QixXQUFBLENBQUFzTSxrQkFBQSxFQUFrQixHQUFJO0lBQ3hCLE9BQU87O0VBRVQsSUFBSSxLQUFDdE0sV0FBQSxDQUFBdU0saUJBQUEsRUFBaUIsR0FBSTtJQUN4QixPQUFPOztFQUVULElBQUksS0FBQ3ZNLFdBQUEsQ0FBQTRLLG9CQUFBLEVBQW9CLEdBQUk7SUFDM0IsT0FBTzs7RUFHVCxJQUFJO0lBQ0YsTUFBTTRDLFlBQUEsR0FBd0IsVUFBTXhOLFdBQUEsQ0FBQThLLHlCQUFBLEVBQXlCO0lBQzdELE9BQU8wQyxZQUFBO1dBQ0FuSyxLQUFBLEVBQVA7SUFDQSxPQUFPOztBQUVYO1NBYWdCeEUsaUJBQ2QrTixpQkFBQSxFQUNBbEQsVUFBQSxFQUNBckMsT0FBQSxFQUE4QjtFQUU5QnVGLGlCQUFBLE9BQW9CNU0sV0FBQSxDQUFBK00sa0JBQUEsRUFBbUJILGlCQUFpQjtFQUN4RG5ELGtCQUFBLENBQ0V5QyxtQkFBQSxFQUNBTix5QkFBQSxDQUEwQmdCLGlCQUFBLENBQWtCMUYsR0FBQSxDQUFJRyxPQUFBLENBQVFqRSxLQUFBLEdBQ3hEc0csVUFBQSxFQUNBckMsT0FBTyxFQUNQckcsS0FBQSxDQUFNQyxDQUFBLElBQUt0QixNQUFBLENBQU8wRCxLQUFBLENBQU1wQyxDQUFDLENBQUM7QUFDOUI7QUFVTyxlQUFlMUMsMkJBQ3BCcU8saUJBQUEsRUFBNEI7RUFFNUJBLGlCQUFBLE9BQW9CNU0sV0FBQSxDQUFBK00sa0JBQUEsRUFBbUJILGlCQUFpQjtFQUN4RCxPQUFPekMsa0NBQUEsQ0FDTCtCLG1CQUFBLEVBQ0FOLHlCQUFBLENBQTBCZ0IsaUJBQUEsQ0FBa0IxRixHQUFBLENBQUlHLE9BQUEsQ0FBUWpFLEtBQUEsQ0FBTztBQUVuRTtTQVVnQnJFLFVBQ2Q2TixpQkFBQSxFQUNBL0MsRUFBQSxFQUNBeEMsT0FBQSxFQUE4QjtFQUU5QnVGLGlCQUFBLE9BQW9CNU0sV0FBQSxDQUFBK00sa0JBQUEsRUFBbUJILGlCQUFpQjtFQUN4RGhELFdBQUEsQ0FDRXNDLG1CQUFBLEVBQ0FOLHlCQUFBLENBQTBCZ0IsaUJBQUEsQ0FBa0IxRixHQUFBLENBQUlHLE9BQUEsQ0FBUWpFLEtBQUEsR0FDeER5RyxFQUFBLEVBQ0F4QyxPQUFPLEVBQ1ByRyxLQUFBLENBQU1DLENBQUEsSUFBS3RCLE1BQUEsQ0FBTzBELEtBQUEsQ0FBTXBDLENBQUMsQ0FBQztBQUM5QjtTQU9nQmpDLGtCQUNkNE4saUJBQUEsRUFDQTdDLFVBQUEsRUFDQTFDLE9BQUEsRUFBOEI7RUFFOUJ1RixpQkFBQSxPQUFvQjVNLFdBQUEsQ0FBQStNLGtCQUFBLEVBQW1CSCxpQkFBaUI7RUFDeEQ5QyxtQkFBQSxDQUNFb0MsbUJBQUEsRUFDQU4seUJBQUEsQ0FBMEJnQixpQkFBQSxDQUFrQjFGLEdBQUEsQ0FBSUcsT0FBQSxDQUFRakUsS0FBQSxHQUN4RDJHLFVBQUEsRUFDQTFDLE9BQU8sRUFDUHJHLEtBQUEsQ0FBTUMsQ0FBQSxJQUFLdEIsTUFBQSxDQUFPMEQsS0FBQSxDQUFNcEMsQ0FBQyxDQUFDO0FBQzlCO0FBV2dCLFNBQUF0Qyw4QkFDZGlPLGlCQUFBLEVBQ0F0QyxPQUFBLEVBQWdCO0VBRWhCc0MsaUJBQUEsT0FBb0I1TSxXQUFBLENBQUErTSxrQkFBQSxFQUFtQkgsaUJBQWlCO0VBQ3hEdkMsK0JBQUEsQ0FDRXVCLHlCQUFBLENBQTBCZ0IsaUJBQUEsQ0FBa0IxRixHQUFBLENBQUlHLE9BQUEsQ0FBUWpFLEtBQUEsR0FDeERrSCxPQUFPLEVBQ1B0SixLQUFBLENBQU1DLENBQUEsSUFBS3RCLE1BQUEsQ0FBTzBELEtBQUEsQ0FBTXBDLENBQUMsQ0FBQztBQUM5QjtBQVNNLFNBQVVuQywwQkFBMEJ3RixZQUFBLEVBQTBCO0VBRWxFLElBQUk0SCxtQkFBQSxFQUFxQjtJQUN2QkEsbUJBQUEsQ0FBbUIsT0FBa0I1SCxZQUFZO1NBQzVDO0lBQ0xvRyxpQ0FBQSxDQUFrQ3BHLFlBQVk7O0FBRWxEO0FBd2RNLFNBQVU1RixTQUNka08saUJBQUEsRUFDQXhELFNBQUEsRUFDQUMsV0FBQSxFQUNBaEMsT0FBQSxFQUE4QjtFQUU5QnVGLGlCQUFBLE9BQW9CNU0sV0FBQSxDQUFBK00sa0JBQUEsRUFBbUJILGlCQUFpQjtFQUN4RDFELFVBQUEsQ0FDRWdELG1CQUFBLEVBQ0FOLHlCQUFBLENBQTBCZ0IsaUJBQUEsQ0FBa0IxRixHQUFBLENBQUlHLE9BQUEsQ0FBUWpFLEtBQUEsR0FDeERnRyxTQUFBLEVBQ0FDLFdBQUEsRUFDQWhDLE9BQU8sRUFDUHJHLEtBQUEsQ0FBTUMsQ0FBQSxJQUFLdEIsTUFBQSxDQUFPMEQsS0FBQSxDQUFNcEMsQ0FBQyxDQUFDO0FBQzlCO0FBa0JNLFNBQVVyQyxXQUFXNkwsZUFBQSxFQUFnQztFQUV6RCxJQUFJeUIsbUJBQUEsRUFBcUI7SUFDdkJBLG1CQUFBLENBQXlDLHFCQUFVekIsZUFBZTtTQUM3RDtJQUNMRCx5QkFBQSxDQUEwQkMsZUFBZTs7QUFFN0M7OztBQ3h0QkEsU0FBU2dELGtCQUFBLEVBQWlCO0VBQ3hCLElBQUFaLFVBQUEsQ0FBQWEsa0JBQUEsRUFDRSxJQUFJQyxnQkFBQSxDQUFBQyxTQUFBLENBQ0Z2TyxjQUFBLEVBQ0EsQ0FBQ3dPLFNBQUEsRUFBVztJQUFFeEcsT0FBQSxFQUFTeUc7RUFBZ0IsTUFBOEI7SUFFbkUsTUFBTTVHLEdBQUEsR0FBTTJHLFNBQUEsQ0FBVUUsV0FBQSxDQUFZLEtBQUssRUFBRVosWUFBQSxDQUFZO0lBQ3JELE1BQU1sQyxhQUFBLEdBQWdCNEMsU0FBQSxDQUNuQkUsV0FBQSxDQUFZLHdCQUF3QixFQUNwQ1osWUFBQSxDQUFZO0lBRWYsT0FBT1IsT0FBQSxDQUFRekYsR0FBQSxFQUFLK0QsYUFBQSxFQUFlNkMsZ0JBQWdCO0tBQ3BELFNBRUY7RUFHSCxJQUFBakIsVUFBQSxDQUFBYSxrQkFBQSxFQUNFLElBQUlDLGdCQUFBLENBQUFDLFNBQUEsQ0FBVSxzQkFBc0JJLGVBQUEsRUFBdUM7RUFHN0UsSUFBQW5CLFVBQUEsQ0FBQW9CLGVBQUEsRUFBZ0JDLElBQUEsRUFBTUMsT0FBTztFQUU3QixJQUFBdEIsVUFBQSxDQUFBb0IsZUFBQSxFQUFnQkMsSUFBQSxFQUFNQyxPQUFBLEVBQVMsU0FBa0I7RUFFakQsU0FBU0gsZ0JBQ1BILFNBQUEsRUFBNkI7SUFFN0IsSUFBSTtNQUNGLE1BQU1PLFNBQUEsR0FBWVAsU0FBQSxDQUFVRSxXQUFBLENBQVkxTyxjQUFjLEVBQUU4TixZQUFBLENBQVk7TUFDcEUsT0FBTztRQUNMek8sUUFBQSxFQUFVQSxDQUNSMEssU0FBQSxFQUNBQyxXQUFBLEVBQ0FoQyxPQUFBLEtBQ0czSSxRQUFBLENBQVMwUCxTQUFBLEVBQVdoRixTQUFBLEVBQVdDLFdBQUEsRUFBYWhDLE9BQU87O2FBRW5EcEcsQ0FBQSxFQUFQO01BQ0EsTUFBTWxCLGFBQUEsQ0FBY08sTUFBQSxDQUFvRDtRQUN0RStOLE1BQUEsRUFBUXBOO01BQ1Q7OztBQUdQO0FBRUF3TSxpQkFBQSxDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FnZW50cy9wbGF0Zm9ybS9zcmMvb3V0In0=