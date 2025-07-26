System.register(["@firebase/util@1.11.0","@firebase/component@0.6.13","@firebase/logger@0.4.4","idb@7.1.1","@firebase/app@0.11.3","tslib@2.8.1"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@firebase/util","1.11.0"],["@firebase/component","0.6.13"],["@firebase/logger","0.4.4"],["idb","7.1.1"],["@firebase/app","0.11.3"],["tslib","2.8.1"],["@firebase/auth","1.9.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@firebase/util@1.11.0', dep), dep => dependencies.set('@firebase/component@0.6.13', dep), dep => dependencies.set('@firebase/logger@0.4.4', dep), dep => dependencies.set('idb@7.1.1', dep), dep => dependencies.set('@firebase/app@0.11.3', dep), dep => dependencies.set('tslib@2.8.1', dep)],
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

// .beyond/uimport/temp/@firebase/auth.1.9.1.js
var auth_1_9_1_exports = {};
__export(auth_1_9_1_exports, {
  ActionCodeOperation: () => ActionCodeOperation,
  ActionCodeURL: () => ActionCodeURL,
  AuthCredential: () => AuthCredential,
  AuthErrorCodes: () => AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,
  EmailAuthCredential: () => EmailAuthCredential,
  EmailAuthProvider: () => EmailAuthProvider,
  FacebookAuthProvider: () => FacebookAuthProvider,
  FactorId: () => FactorId,
  GithubAuthProvider: () => GithubAuthProvider,
  GoogleAuthProvider: () => GoogleAuthProvider,
  OAuthCredential: () => OAuthCredential,
  OAuthProvider: () => OAuthProvider,
  OperationType: () => OperationType,
  PhoneAuthCredential: () => PhoneAuthCredential,
  PhoneAuthProvider: () => PhoneAuthProvider,
  PhoneMultiFactorGenerator: () => PhoneMultiFactorGenerator,
  ProviderId: () => ProviderId,
  RecaptchaVerifier: () => RecaptchaVerifier,
  SAMLAuthProvider: () => SAMLAuthProvider,
  SignInMethod: () => SignInMethod,
  TotpMultiFactorGenerator: () => TotpMultiFactorGenerator,
  TotpSecret: () => TotpSecret,
  TwitterAuthProvider: () => TwitterAuthProvider,
  applyActionCode: () => applyActionCode,
  beforeAuthStateChanged: () => beforeAuthStateChanged,
  browserLocalPersistence: () => browserLocalPersistence,
  browserPopupRedirectResolver: () => browserPopupRedirectResolver,
  browserSessionPersistence: () => browserSessionPersistence,
  checkActionCode: () => checkActionCode,
  confirmPasswordReset: () => confirmPasswordReset,
  connectAuthEmulator: () => connectAuthEmulator,
  createUserWithEmailAndPassword: () => createUserWithEmailAndPassword,
  debugErrorMap: () => debugErrorMap,
  deleteUser: () => deleteUser,
  fetchSignInMethodsForEmail: () => fetchSignInMethodsForEmail,
  getAdditionalUserInfo: () => getAdditionalUserInfo,
  getAuth: () => getAuth,
  getIdToken: () => getIdToken,
  getIdTokenResult: () => getIdTokenResult,
  getMultiFactorResolver: () => getMultiFactorResolver,
  getRedirectResult: () => getRedirectResult,
  inMemoryPersistence: () => inMemoryPersistence,
  indexedDBLocalPersistence: () => indexedDBLocalPersistence,
  initializeAuth: () => initializeAuth,
  initializeRecaptchaConfig: () => initializeRecaptchaConfig,
  isSignInWithEmailLink: () => isSignInWithEmailLink,
  linkWithCredential: () => linkWithCredential,
  linkWithPhoneNumber: () => linkWithPhoneNumber,
  linkWithPopup: () => linkWithPopup,
  linkWithRedirect: () => linkWithRedirect,
  multiFactor: () => multiFactor,
  onAuthStateChanged: () => onAuthStateChanged,
  onIdTokenChanged: () => onIdTokenChanged,
  parseActionCodeURL: () => parseActionCodeURL,
  prodErrorMap: () => prodErrorMap,
  reauthenticateWithCredential: () => reauthenticateWithCredential,
  reauthenticateWithPhoneNumber: () => reauthenticateWithPhoneNumber,
  reauthenticateWithPopup: () => reauthenticateWithPopup,
  reauthenticateWithRedirect: () => reauthenticateWithRedirect,
  reload: () => reload,
  revokeAccessToken: () => revokeAccessToken,
  sendEmailVerification: () => sendEmailVerification,
  sendPasswordResetEmail: () => sendPasswordResetEmail,
  sendSignInLinkToEmail: () => sendSignInLinkToEmail,
  setPersistence: () => setPersistence,
  signInAnonymously: () => signInAnonymously,
  signInWithCredential: () => signInWithCredential,
  signInWithCustomToken: () => signInWithCustomToken,
  signInWithEmailAndPassword: () => signInWithEmailAndPassword,
  signInWithEmailLink: () => signInWithEmailLink,
  signInWithPhoneNumber: () => signInWithPhoneNumber,
  signInWithPopup: () => signInWithPopup,
  signInWithRedirect: () => signInWithRedirect,
  signOut: () => signOut,
  unlink: () => unlink,
  updateCurrentUser: () => updateCurrentUser,
  updateEmail: () => updateEmail,
  updatePassword: () => updatePassword,
  updatePhoneNumber: () => updatePhoneNumber,
  updateProfile: () => updateProfile,
  useDeviceLanguage: () => useDeviceLanguage,
  validatePassword: () => validatePassword,
  verifyBeforeUpdateEmail: () => verifyBeforeUpdateEmail,
  verifyPasswordResetCode: () => verifyPasswordResetCode
});
module.exports = __toCommonJS(auth_1_9_1_exports);

// node_modules/@firebase/auth/dist/esm2017/index-e84cf44d.js
var import_app = require("@firebase/app@0.11.3");
var import_util = require("@firebase/util@1.11.0");
var import_logger = require("@firebase/logger@0.4.4");
var import_tslib = require("tslib@2.8.1");
var import_component = require("@firebase/component@0.6.13");
var FactorId = {
  PHONE: "phone",
  TOTP: "totp"
};
var ProviderId = {
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PASSWORD: "password",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var SignInMethod = {
  EMAIL_LINK: "emailLink",
  EMAIL_PASSWORD: "password",
  FACEBOOK: "facebook.com",
  GITHUB: "github.com",
  GOOGLE: "google.com",
  PHONE: "phone",
  TWITTER: "twitter.com"
};
var OperationType = {
  LINK: "link",
  REAUTHENTICATE: "reauthenticate",
  SIGN_IN: "signIn"
};
var ActionCodeOperation = {
  EMAIL_SIGNIN: "EMAIL_SIGNIN",
  PASSWORD_RESET: "PASSWORD_RESET",
  RECOVER_EMAIL: "RECOVER_EMAIL",
  REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
  VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
  VERIFY_EMAIL: "VERIFY_EMAIL"
};
function _debugErrorMap() {
  return {
    ["admin-restricted-operation"]: "This operation is restricted to administrators only.",
    ["argument-error"]: "",
    ["app-not-authorized"]: "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    ["app-not-installed"]: "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    ["captcha-check-failed"]: "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    ["code-expired"]: "The SMS code has expired. Please re-send the verification code to try again.",
    ["cordova-not-ready"]: "Cordova framework is not ready.",
    ["cors-unsupported"]: "This browser is not supported.",
    ["credential-already-in-use"]: "This credential is already associated with a different user account.",
    ["custom-token-mismatch"]: "The custom token corresponds to a different audience.",
    ["requires-recent-login"]: "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    ["dynamic-link-not-activated"]: "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    ["email-change-needs-verification"]: "Multi-factor users must always have a verified email.",
    ["email-already-in-use"]: "The email address is already in use by another account.",
    ["emulator-config-failed"]: 'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',
    ["expired-action-code"]: "The action code has expired.",
    ["cancelled-popup-request"]: "This operation has been cancelled due to another conflicting popup being opened.",
    ["internal-error"]: "An internal AuthError has occurred.",
    ["invalid-app-credential"]: "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    ["invalid-app-id"]: "The mobile app identifier is not registered for the current project.",
    ["invalid-user-token"]: "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    ["invalid-auth-event"]: "An internal AuthError has occurred.",
    ["invalid-verification-code"]: "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    ["invalid-continue-uri"]: "The continue URL provided in the request is invalid.",
    ["invalid-cordova-configuration"]: "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    ["invalid-custom-token"]: "The custom token format is incorrect. Please check the documentation.",
    ["invalid-dynamic-link-domain"]: "The provided dynamic link domain is not configured or authorized for the current project.",
    ["invalid-email"]: "The email address is badly formatted.",
    ["invalid-emulator-scheme"]: "Emulator URL must start with a valid scheme (http:// or https://).",
    ["invalid-api-key"]: "Your API key is invalid, please check you have copied it correctly.",
    ["invalid-cert-hash"]: "The SHA-1 certificate hash provided is invalid.",
    ["invalid-credential"]: "The supplied auth credential is incorrect, malformed or has expired.",
    ["invalid-message-payload"]: "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-multi-factor-session"]: "The request does not contain a valid proof of first factor successful sign-in.",
    ["invalid-oauth-provider"]: "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    ["invalid-oauth-client-id"]: "The OAuth client ID provided is either invalid or does not match the specified API key.",
    ["unauthorized-domain"]: "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    ["invalid-action-code"]: "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    ["wrong-password"]: "The password is invalid or the user does not have a password.",
    ["invalid-persistence-type"]: "The specified persistence type is invalid. It can only be local, session or none.",
    ["invalid-phone-number"]: "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    ["invalid-provider-id"]: "The specified provider ID is invalid.",
    ["invalid-recipient-email"]: "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    ["invalid-sender"]: "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    ["invalid-verification-id"]: "The verification ID used to create the phone auth credential is invalid.",
    ["invalid-tenant-id"]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"]: "Login blocked by user-provided method: {$originalMessage}",
    ["missing-android-pkg-name"]: "An Android Package Name must be provided if the Android App is required to be installed.",
    ["auth-domain-config-required"]: "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    ["missing-app-credential"]: "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    ["missing-verification-code"]: "The phone auth credential was created with an empty SMS verification code.",
    ["missing-continue-uri"]: "A continue URL must be provided in the request.",
    ["missing-iframe-start"]: "An internal AuthError has occurred.",
    ["missing-ios-bundle-id"]: "An iOS Bundle ID must be provided if an App Store ID is provided.",
    ["missing-or-invalid-nonce"]: "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    ["missing-password"]: "A non-empty password must be provided",
    ["missing-multi-factor-info"]: "No second factor identifier is provided.",
    ["missing-multi-factor-session"]: "The request is missing proof of first factor successful sign-in.",
    ["missing-phone-number"]: "To send verification codes, provide a phone number for the recipient.",
    ["missing-verification-id"]: "The phone auth credential was created with an empty verification ID.",
    ["app-deleted"]: "This instance of FirebaseApp has been deleted.",
    ["multi-factor-info-not-found"]: "The user does not have a second factor matching the identifier provided.",
    ["multi-factor-auth-required"]: "Proof of ownership of a second factor is required to complete sign-in.",
    ["account-exists-with-different-credential"]: "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    ["network-request-failed"]: "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    ["no-auth-event"]: "An internal AuthError has occurred.",
    ["no-such-provider"]: "User was not linked to an account with the given provider.",
    ["null-user"]: "A null user object was provided as the argument for an operation which requires a non-null user object.",
    ["operation-not-allowed"]: "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    ["operation-not-supported-in-this-environment"]: 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    ["popup-blocked"]: "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    ["popup-closed-by-user"]: "The popup has been closed by the user before finalizing the operation.",
    ["provider-already-linked"]: "User can only be linked to one identity for the given provider.",
    ["quota-exceeded"]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"]: "The redirect operation has been cancelled by the user before finalizing.",
    ["redirect-operation-pending"]: "A redirect sign-in operation is already pending.",
    ["rejected-credential"]: "The request contains malformed or mismatching credentials.",
    ["second-factor-already-in-use"]: "The second factor is already enrolled on this account.",
    ["maximum-second-factor-count-exceeded"]: "The maximum allowed number of second factors on a user has been exceeded.",
    ["tenant-id-mismatch"]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"]: "The operation has timed out.",
    ["user-token-expired"]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"]: "We have blocked all requests from this device due to unusual activity. Try again later.",
    ["unauthorized-continue-uri"]: "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    ["unsupported-first-factor"]: "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    ["unsupported-persistence-type"]: "The current environment does not support the specified persistence type.",
    ["unsupported-tenant-operation"]: "This operation is not supported in a multi-tenant context.",
    ["unverified-email"]: "The operation requires a verified email.",
    ["user-cancelled"]: "The user did not grant your application the permissions it requested.",
    ["user-not-found"]: "There is no user record corresponding to this identifier. The user may have been deleted.",
    ["user-disabled"]: "The user account has been disabled by an administrator.",
    ["user-mismatch"]: "The supplied credentials do not correspond to the previously signed in user.",
    ["user-signed-out"]: "",
    ["weak-password"]: "The password must be 6 characters long or more.",
    ["web-storage-unsupported"]: "This browser is not supported or 3rd party cookies and data may be disabled.",
    ["already-initialized"]: "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
    ["missing-recaptcha-token"]: "The reCAPTCHA token is missing when sending request to the backend.",
    ["invalid-recaptcha-token"]: "The reCAPTCHA token is invalid when sending request to the backend.",
    ["invalid-recaptcha-action"]: "The reCAPTCHA action is invalid when sending request to the backend.",
    ["recaptcha-not-enabled"]: "reCAPTCHA Enterprise integration is not enabled for this project.",
    ["missing-client-type"]: "The reCAPTCHA client type is missing when sending request to the backend.",
    ["missing-recaptcha-version"]: "The reCAPTCHA version is missing when sending request to the backend.",
    ["invalid-req-type"]: "Invalid request parameters.",
    ["invalid-recaptcha-version"]: "The reCAPTCHA version is invalid when sending request to the backend.",
    ["unsupported-password-policy-schema-version"]: "The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.",
    ["password-does-not-meet-requirements"]: "The password does not meet the requirements.",
    ["invalid-hosting-link-domain"]: "The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."
  };
}
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var debugErrorMap = _debugErrorMap;
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new import_util.ErrorFactory("auth", "Firebase", _prodErrorMap());
var AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
  ARGUMENT_ERROR: "auth/argument-error",
  APP_NOT_AUTHORIZED: "auth/app-not-authorized",
  APP_NOT_INSTALLED: "auth/app-not-installed",
  CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
  CODE_EXPIRED: "auth/code-expired",
  CORDOVA_NOT_READY: "auth/cordova-not-ready",
  CORS_UNSUPPORTED: "auth/cors-unsupported",
  CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
  CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
  DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
  DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
  EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
  EMAIL_EXISTS: "auth/email-already-in-use",
  EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
  EXPIRED_OOB_CODE: "auth/expired-action-code",
  EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
  INTERNAL_ERROR: "auth/internal-error",
  INVALID_API_KEY: "auth/invalid-api-key",
  INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
  INVALID_APP_ID: "auth/invalid-app-id",
  INVALID_AUTH: "auth/invalid-user-token",
  INVALID_AUTH_EVENT: "auth/invalid-auth-event",
  INVALID_CERT_HASH: "auth/invalid-cert-hash",
  INVALID_CODE: "auth/invalid-verification-code",
  INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
  INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
  INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
  INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
  INVALID_EMAIL: "auth/invalid-email",
  INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
  INVALID_IDP_RESPONSE: "auth/invalid-credential",
  INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential",
  INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
  INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
  INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
  INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
  INVALID_OOB_CODE: "auth/invalid-action-code",
  INVALID_ORIGIN: "auth/unauthorized-domain",
  INVALID_PASSWORD: "auth/wrong-password",
  INVALID_PERSISTENCE: "auth/invalid-persistence-type",
  INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
  INVALID_PROVIDER_ID: "auth/invalid-provider-id",
  INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
  INVALID_SENDER: "auth/invalid-sender",
  INVALID_SESSION_INFO: "auth/invalid-verification-id",
  INVALID_TENANT_ID: "auth/invalid-tenant-id",
  MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
  MFA_REQUIRED: "auth/multi-factor-auth-required",
  MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
  MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
  MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
  MISSING_CODE: "auth/missing-verification-code",
  MISSING_CONTINUE_URI: "auth/missing-continue-uri",
  MISSING_IFRAME_START: "auth/missing-iframe-start",
  MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
  MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
  MISSING_MFA_INFO: "auth/missing-multi-factor-info",
  MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
  MISSING_PHONE_NUMBER: "auth/missing-phone-number",
  MISSING_SESSION_INFO: "auth/missing-verification-id",
  MODULE_DESTROYED: "auth/app-deleted",
  NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
  NETWORK_REQUEST_FAILED: "auth/network-request-failed",
  NULL_USER: "auth/null-user",
  NO_AUTH_EVENT: "auth/no-auth-event",
  NO_SUCH_PROVIDER: "auth/no-such-provider",
  OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
  OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
  POPUP_BLOCKED: "auth/popup-blocked",
  POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
  PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
  QUOTA_EXCEEDED: "auth/quota-exceeded",
  REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
  REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
  REJECTED_CREDENTIAL: "auth/rejected-credential",
  SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
  TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
  TIMEOUT: "auth/timeout",
  TOKEN_EXPIRED: "auth/user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
  UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
  UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
  UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
  UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
  UNVERIFIED_EMAIL: "auth/unverified-email",
  USER_CANCELLED: "auth/user-cancelled",
  USER_DELETED: "auth/user-not-found",
  USER_DISABLED: "auth/user-disabled",
  USER_MISMATCH: "auth/user-mismatch",
  USER_SIGNED_OUT: "auth/user-signed-out",
  WEAK_PASSWORD: "auth/weak-password",
  WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
  ALREADY_INITIALIZED: "auth/already-initialized",
  RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "auth/missing-client-type",
  MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
  INVALID_REQ_TYPE: "auth/invalid-req-type",
  INVALID_HOSTING_LINK_DOMAIN: "auth/invalid-hosting-link-domain"
};
var logClient = new import_logger.Logger("@firebase/auth");
function _logWarn(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.WARN) {
    logClient.warn(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _logError(msg, ...args) {
  if (logClient.logLevel <= import_logger.LogLevel.ERROR) {
    logClient.error(`Auth (${import_app.SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
    [code]: message
  });
  const factory = new import_util.ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}
function _serverAppCurrentUserOperationNotSupportedError(auth) {
  return _errorWithCustomMessage(auth, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;
  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error");
    }
    throw _errorWithCustomMessage(auth, "argument-error", `Type of ${object.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
  }
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || (0, import_util.isBrowserExtension)() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = (0, import_util.isMobileCordova)() || (0, import_util.isReactNative)();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const {
    url
  } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    if (typeof globalThis !== "undefined" && globalThis.fetch) {
      return globalThis.fetch;
    }
    if (typeof fetch !== "undefined") {
      return fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    if (typeof globalThis !== "undefined" && globalThis.Headers) {
      return globalThis.Headers;
    }
    if (typeof Headers !== "undefined") {
      return Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    if (typeof globalThis !== "undefined" && globalThis.Response) {
      return globalThis.Response;
    }
    if (typeof Response !== "undefined") {
      return Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "missing-password",
  ["INVALID_LOGIN_CREDENTIALS"]: "invalid-credential",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]: "password-does-not-meet-requirements",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error",
  ["RECAPTCHA_NOT_ENABLED"]: "recaptcha-not-enabled",
  ["MISSING_RECAPTCHA_TOKEN"]: "missing-recaptcha-token",
  ["INVALID_RECAPTCHA_TOKEN"]: "invalid-recaptcha-token",
  ["INVALID_RECAPTCHA_ACTION"]: "invalid-recaptcha-action",
  ["MISSING_CLIENT_TYPE"]: "missing-client-type",
  ["MISSING_RECAPTCHA_VERSION"]: "missing-recaptcha-version",
  ["INVALID_RECAPTCHA_VERSION"]: "invalid-recaptcha-version",
  ["INVALID_REQ_TYPE"]: "invalid-req-type"
};
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }
  return request;
}
async function _performApiRequest(auth, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = (0, import_util.querystring)(Object.assign({
      key: auth.config.apiKey
    }, params)).slice(1);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/json";
    if (auth.languageCode) {
      headers["X-Firebase-Locale"] = auth.languageCode;
    }
    const fetchArgs = Object.assign({
      method,
      headers
    }, body);
    if (!(0, import_util.isCloudflareWorker)()) {
      fetchArgs.referrerPolicy = "no-referrer";
    }
    return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), fetchArgs);
  });
}
async function _performFetchWithErrorHandling(auth, customErrorMap, fetchFn) {
  auth._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth);
    const response = await Promise.race([fetchFn(), networkTimeout.promise]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
      } else {
        _fail(auth, authError);
      }
    }
  } catch (e) {
    if (e instanceof import_util.FirebaseError) {
      throw e;
    }
    _fail(auth, "network-request-failed", {
      "message": String(e)
    });
  }
}
async function _performSignInRequest(auth, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;
  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth.config, base);
}
function _parseEnforcementState(enforcementStateStr) {
  switch (enforcementStateStr) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
var NetworkTimeout = class {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(auth) {
    this.auth = auth;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
};
function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
function isV2(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.getResponse !== void 0;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.recaptchaEnforcementState = [];
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.recaptchaEnforcementState = response.recaptchaEnforcementState;
  }
  getProviderEnforcementState(providerStr) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
      return null;
    }
    for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
      if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
        return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
      }
    }
    return null;
  }
  isProviderEnabled(providerStr) {
    return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
  }
  isAnyProviderEnabled() {
    return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER") || this.isProviderEnabled("PHONE_PROVIDER");
  }
};
async function getRecaptchaParams(auth) {
  return (await _performApiRequest(auth, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
}
async function getRecaptchaConfig(auth, request) {
  return _performApiRequest(auth, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth, request));
}
async function deleteAccount(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:delete", request);
}
async function deleteLinkedAccounts(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function getAccountInfo(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {}
  return void 0;
}
function getIdToken(user, forceRefresh = false) {
  return (0, import_util.getModularInstance)(user).getIdToken(forceRefresh);
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = (0, import_util.base64Decode)(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof import_util.FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({
  code
}) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
        this.schedule(true);
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth, {
    idToken
  }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map(_a => {
    var {
        providerId
      } = _a,
      provider = (0, import_tslib.__rest)(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth, {}, async () => {
    const body = (0, import_util.querystring)({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const {
      tokenApiHost,
      apiKey
    } = auth.config;
    const url = _getFinalTarget(auth, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth._getAdditionalHeaders();
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
async function revokeToken(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth, request));
}
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  updateFromIdToken(idToken) {
    _assert(idToken.length !== 0, "internal-error");
    const expiresIn = _tokenExpiresIn(idToken);
    this.updateTokensAndExpiration(idToken, null, expiresIn);
  }
  async getToken(auth, forceRefresh = false) {
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    _assert(this.refreshToken, auth, "user-token-expired");
    if (this.refreshToken) {
      await this.refresh(auth, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth, oldToken) {
    const {
      accessToken,
      refreshToken,
      expiresIn
    } = await requestStsToken(auth, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const {
      refreshToken,
      accessToken,
      expirationTime
    } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", {
    appName
  });
}
var UserImpl = class {
  constructor(_a) {
    var {
        uid,
        auth,
        stsTokenManager
      } = _a,
      opt = (0, import_tslib.__rest)(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error");
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error");
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(userInfo => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth) {
    const newUser = new UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    if ((0, import_app._isFirebaseServerApp)(this.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
    }
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, {
      idToken
    }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map(userInfo => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const {
      uid,
      emailVerified,
      isAnonymous,
      providerData,
      stsTokenManager: plainObjectTokenManager
    } = object;
    _assert(uid && plainObjectTokenManager, auth, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth, "internal-error");
    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);
    _assert(typeof emailVerified === "boolean", auth, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth, "internal-error");
    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(userInfo => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  static async _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
  static async _fromGetAccountInfoResponse(auth, response, idToken) {
    const coreAccount = response.users[0];
    _assert(coreAccount.localId !== void 0, "internal-error");
    const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
    const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromIdToken(idToken);
    const user = new UserImpl({
      uid: coreAccount.localId,
      auth,
      stsTokenManager,
      isAnonymous
    });
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
    };
    Object.assign(user, updates);
    return user;
  }
};
var instanceCache = /* @__PURE__ */new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const {
      config,
      name: name2
    } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name2);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name2);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async persistence => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter(persistence => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {}
    }
    const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async persistence => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {}
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = (0, import_util.getUA)()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = (0, import_util.getUA)()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = (0, import_util.getUA)()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = (0, import_util.getUA)()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = (0, import_util.getUA)()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = (0, import_util.getUA)()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = (0, import_util.getUA)()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = (0, import_util.getUA)()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOS7Or8(ua = (0, import_util.getUA)()) {
  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}
function _isIOSStandalone(ua = (0, import_util.getUA)()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return (0, import_util.isIE)() && document.documentMode === 10;
}
function _isMobileBrowser(ua = (0, import_util.getUA)()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName((0, import_util.getUA)());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName((0, import_util.getUA)())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${import_app.SDK_VERSION}/${reportedFrameworks}`;
}
var AuthMiddlewareQueue = class {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = user => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {}
      }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: e === null || e === void 0 ? void 0 : e.message
      });
    }
  }
};
async function _getPasswordPolicy(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth, request));
}
var MINIMUM_MIN_PASSWORD_LENGTH = 6;
var PasswordPolicyImpl = class {
  constructor(response) {
    var _a, _b, _c, _d;
    const responseOptions = response.customStrengthOptions;
    this.customStrengthOptions = {};
    this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
    if (responseOptions.maxPasswordLength) {
      this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
    }
    if (responseOptions.containsLowercaseCharacter !== void 0) {
      this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
    }
    if (responseOptions.containsUppercaseCharacter !== void 0) {
      this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
    }
    if (responseOptions.containsNumericCharacter !== void 0) {
      this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
    }
    if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
      this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
    }
    this.enforcementState = response.enforcementState;
    if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
      this.enforcementState = "OFF";
    }
    this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
    this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
    this.schemaVersion = response.schemaVersion;
  }
  validatePassword(password) {
    var _a, _b, _c, _d, _e, _f;
    const status = {
      isValid: true,
      passwordPolicy: this
    };
    this.validatePasswordLengthOptions(password, status);
    this.validatePasswordCharacterOptions(password, status);
    status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
    status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
    status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
    status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
    status.isValid && (status.isValid = (_e = status.containsNumericCharacter) !== null && _e !== void 0 ? _e : true);
    status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
    return status;
  }
  validatePasswordLengthOptions(password, status) {
    const minPasswordLength = this.customStrengthOptions.minPasswordLength;
    const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
    if (minPasswordLength) {
      status.meetsMinPasswordLength = password.length >= minPasswordLength;
    }
    if (maxPasswordLength) {
      status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
    }
  }
  validatePasswordCharacterOptions(password, status) {
    this.updatePasswordCharacterOptionsStatuses(status, false, false, false, false);
    let passwordChar;
    for (let i = 0; i < password.length; i++) {
      passwordChar = password.charAt(i);
      this.updatePasswordCharacterOptionsStatuses(status, passwordChar >= "a" && passwordChar <= "z", passwordChar >= "A" && passwordChar <= "Z", passwordChar >= "0" && passwordChar <= "9", this.allowedNonAlphanumericCharacters.includes(passwordChar));
    }
  }
  updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
    if (this.customStrengthOptions.containsLowercaseLetter) {
      status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
    }
    if (this.customStrengthOptions.containsUppercaseLetter) {
      status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
    }
    if (this.customStrengthOptions.containsNumericCharacter) {
      status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
    }
    if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
      status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
    }
  }
};
var AuthImpl = class {
  constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.appCheckServiceProvider = appCheckServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {};
    this._projectPasswordPolicy = null;
    this._tenantPasswordPolicies = {};
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {}
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user, true);
  }
  async initializeCurrentUserFromIdToken(idToken) {
    try {
      const response = await getAccountInfo(this, {
        idToken
      });
      const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
      await this.directlySetCurrentUser(user);
    } catch (err) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
      await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      const idToken = this.app.settings.authIdToken;
      if (idToken) {
        return new Promise(resolve => {
          setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
        });
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(this._popupRedirectResolver, this, "argument-error");
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    const user = userExtern ? (0, import_util.getModularInstance)(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null, true);
  }
  setPersistence(persistence) {
    if ((0, import_app._isFirebaseServerApp)(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }
  async validatePassword(password) {
    if (!this._getPasswordPolicyInternal()) {
      await this._updatePasswordPolicy();
    }
    const passwordPolicy = this._getPasswordPolicyInternal();
    if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
      return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
    }
    return passwordPolicy.validatePassword(password);
  }
  _getPasswordPolicyInternal() {
    if (this.tenantId === null) {
      return this._projectPasswordPolicy;
    } else {
      return this._tenantPasswordPolicies[this.tenantId];
    }
  }
  async _updatePasswordPolicy() {
    const response = await _getPasswordPolicy(this);
    const passwordPolicy = new PasswordPolicyImpl(response);
    if (this.tenantId === null) {
      this._projectPasswordPolicy = passwordPolicy;
    } else {
      this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
    }
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new import_util.ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  authStateReady() {
    return new Promise((resolve, reject) => {
      if (this.currentUser) {
        resolve();
      } else {
        const unsubscribe = this.onAuthStateChanged(() => {
          unsubscribe();
          resolve();
        }, reject);
      }
    });
  }
  async revokeAccessToken(token) {
    if (this.currentUser) {
      const idToken = await this.currentUser.getIdToken();
      const request = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token,
        idToken
      };
      if (this.tenantId != null) {
        request.tenantId = this.tenantId;
      }
      await revokeToken(this, request);
    }
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {});
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {};
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    let isUnsubscribed = false;
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => {
      if (isUnsubscribed) {
        return;
      }
      cb(this.currentUser);
    });
    if (typeof nextOrObserver === "function") {
      const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    } else {
      const unsubscribe = subscription.addObserver(nextOrObserver);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    }
  }
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
    }
    if (user && this.isProactiveRefreshEnabled) {
      user._startProactiveRefresh();
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error");
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      ["X-Client-Version"]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers["X-Firebase-gmpid"] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers["X-Firebase-Client"] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers["X-Firebase-AppCheck"] = appCheckToken;
    }
    return headers;
  }
  async _getAppCheckToken() {
    var _a;
    if ((0, import_app._isFirebaseServerApp)(this.app) && this.app.settings.appCheckToken) {
      return this.app.settings.appCheckToken;
    }
    const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getToken());
    if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
      _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
    }
    return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
  }
};
function _castAuth(auth) {
  return (0, import_util.getModularInstance)(auth);
}
var Subscription = class {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = (0, import_util.createSubscribe)(observer => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error");
    return this.observer.next.bind(this.observer);
  }
};
var externalJSProvider = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function _setExternalJSProvider(p) {
  externalJSProvider = p;
}
function _loadJS(url) {
  return externalJSProvider.loadJS(url);
}
function _recaptchaV2ScriptUrl() {
  return externalJSProvider.recaptchaV2Script;
}
function _recaptchaEnterpriseScriptUrl() {
  return externalJSProvider.recaptchaEnterpriseScript;
}
function _gapiScriptUrl() {
  return externalJSProvider.gapiScript;
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var _SOLVE_TIME_MS = 500;
var _EXPIRATION_TIME_MS = 6e4;
var _WIDGET_ID_START = 1e12;
var MockReCaptcha = class {
  constructor(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = /* @__PURE__ */new Map();
  }
  render(container, parameters) {
    const id = this.counter;
    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));
    this.counter++;
    return id;
  }
  reset(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());
    this._widgets.delete(id);
  }
  getResponse(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || "";
  }
  async execute(optWidgetId) {
    var _a;
    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
    return "";
  }
};
var MockGreCAPTCHATopLevel = class {
  constructor() {
    this.enterprise = new MockGreCAPTCHA();
  }
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var MockGreCAPTCHA = class {
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var MockWidget = class {
  constructor(containerOrId, appName, params) {
    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;
    this.clickHandler = () => {
      this.execute();
    };
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, "argument-error", {
      appName
    });
    this.container = container;
    this.isVisible = this.params.size !== "invisible";
    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener("click", this.clickHandler);
    }
  }
  getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  }
  delete() {
    this.checkIfDeleted();
    this.deleted = true;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.container.removeEventListener("click", this.clickHandler);
  }
  execute() {
    this.checkIfDeleted();
    if (this.timerId) {
      return;
    }
    this.timerId = window.setTimeout(() => {
      this.responseToken = generateRandomAlphaNumericString(50);
      const {
        callback,
        "expired-callback": expiredCallback
      } = this.params;
      if (callback) {
        try {
          callback(this.responseToken);
        } catch (e) {}
      }
      this.timerId = window.setTimeout(() => {
        this.timerId = null;
        this.responseToken = null;
        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }
        if (this.isVisible) {
          this.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  }
  checkIfDeleted() {
    if (this.deleted) {
      throw new Error("reCAPTCHA mock was already deleted!");
    }
  }
};
function generateRandomAlphaNumericString(len) {
  const chars = [];
  const allowedChars = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }
  return chars.join("");
}
var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
var FAKE_TOKEN = "NO_RECAPTCHA";
var RecaptchaEnterpriseVerifier = class {
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  async verify(action = "verify", forceRefresh = false) {
    async function retrieveSiteKey(auth) {
      if (!forceRefresh) {
        if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
          return auth._agentRecaptchaConfig.siteKey;
        }
        if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== void 0) {
          return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
        }
      }
      return new Promise(async (resolve, reject) => {
        getRecaptchaConfig(auth, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
        }).then(response => {
          if (response.recaptchaKey === void 0) {
            reject(new Error("recaptcha Enterprise site key undefined"));
          } else {
            const config = new RecaptchaConfig(response);
            if (auth.tenantId == null) {
              auth._agentRecaptchaConfig = config;
            } else {
              auth._tenantRecaptchaConfigs[auth.tenantId] = config;
            }
            return resolve(config.siteKey);
          }
        }).catch(error => {
          reject(error);
        });
      });
    }
    function retrieveRecaptchaToken(siteKey, resolve, reject) {
      const grecaptcha = window.grecaptcha;
      if (isEnterprise(grecaptcha)) {
        grecaptcha.enterprise.ready(() => {
          grecaptcha.enterprise.execute(siteKey, {
            action
          }).then(token => {
            resolve(token);
          }).catch(() => {
            resolve(FAKE_TOKEN);
          });
        });
      } else {
        reject(Error("No reCAPTCHA enterprise script loaded."));
      }
    }
    if (this.auth.settings.appVerificationDisabledForTesting) {
      const mockRecaptcha = new MockGreCAPTCHATopLevel();
      return mockRecaptcha.execute("siteKey", {
        action: "verify"
      });
    }
    return new Promise((resolve, reject) => {
      retrieveSiteKey(this.auth).then(siteKey => {
        if (!forceRefresh && isEnterprise(window.grecaptcha)) {
          retrieveRecaptchaToken(siteKey, resolve, reject);
        } else {
          if (typeof window === "undefined") {
            reject(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let url = _recaptchaEnterpriseScriptUrl();
          if (url.length !== 0) {
            url += siteKey;
          }
          _loadJS(url).then(() => {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          }).catch(error => {
            reject(error);
          });
        }
      }).catch(error => {
        reject(error);
      });
    });
  }
};
async function injectRecaptchaFields(auth, request, action, isCaptchaResp = false, isFakeToken = false) {
  const verifier = new RecaptchaEnterpriseVerifier(auth);
  let captchaResponse;
  if (isFakeToken) {
    captchaResponse = FAKE_TOKEN;
  } else {
    try {
      captchaResponse = await verifier.verify(action);
    } catch (error) {
      captchaResponse = await verifier.verify(action, true);
    }
  }
  const newRequest = Object.assign({}, request);
  if (action === "mfaSmsEnrollment" || action === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in newRequest) {
      const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
      const recaptchaToken = newRequest.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneEnrollmentInfo": {
          phoneNumber,
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
        }
      });
    } else if ("phoneSignInInfo" in newRequest) {
      const recaptchaToken = newRequest.phoneSignInInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneSignInInfo": {
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
        }
      });
    }
    return newRequest;
  }
  if (!isCaptchaResp) {
    Object.assign(newRequest, {
      captchaResponse
    });
  } else {
    Object.assign(newRequest, {
      "captchaResp": captchaResponse
    });
  }
  Object.assign(newRequest, {
    "clientType": "CLIENT_TYPE_WEB"
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
  });
  return newRequest;
}
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
  var _a, _b;
  if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode");
      return actionMethod(authInstance, requestWithRecaptcha);
    } else {
      return actionMethod(authInstance, request).catch(async error => {
        if (error.code === `auth/${"missing-recaptcha-token"}`) {
          console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName, actionName === "getOobCode");
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return Promise.reject(error);
        }
      });
    }
  } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
    if ((_b = authInstance._getRecaptchaConfig()) === null || _b === void 0 ? void 0 : _b.isProviderEnabled("PHONE_PROVIDER")) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
      return actionMethod(authInstance, requestWithRecaptcha).catch(async error => {
        var _a2;
        if (((_a2 = authInstance._getRecaptchaConfig()) === null || _a2 === void 0 ? void 0 : _a2.getProviderEnforcementState("PHONE_PROVIDER")) === "AUDIT") {
          if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
            const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false, true);
            return actionMethod(authInstance, requestWithRecaptchaFields);
          }
        }
        return Promise.reject(error);
      });
    } else {
      const requestWithRecaptchaFields = await injectRecaptchaFields(authInstance, request, actionName, false, true);
      return actionMethod(authInstance, requestWithRecaptchaFields);
    }
  } else {
    return Promise.reject(recaptchaAuthProvider + " provider is not supported.");
  }
}
async function _initializeRecaptchaConfig(auth) {
  const authInternal = _castAuth(auth);
  const response = await getRecaptchaConfig(authInternal, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
  });
  const config = new RecaptchaConfig(response);
  if (authInternal.tenantId == null) {
    authInternal._agentRecaptchaConfig = config;
  } else {
    authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
  }
  if (config.isAnyProviderEnabled()) {
    const verifier = new RecaptchaEnterpriseVerifier(authInternal);
    void verifier.verify();
  }
}
function initializeAuth(app, deps) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    const auth2 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if ((0, import_util.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth2;
    } else {
      _fail(auth2, "already-initialized");
    }
  }
  const auth = provider.initialize({
    options: deps
  });
  return auth;
}
function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  }
  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function connectAuthEmulator(auth, url, options) {
  const authInternal = _castAuth(auth);
  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme");
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  const emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  const emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({
      disableWarnings
    })
  });
  if (!authInternal._canInitEmulator) {
    _assert(authInternal.config.emulator && authInternal.emulatorConfig, authInternal, "emulator-config-failed");
    _assert((0, import_util.deepEqual)(emulator, authInternal.config.emulator) && (0, import_util.deepEqual)(emulatorConfig, authInternal.emulatorConfig), authInternal, "emulator-config-failed");
    return;
  }
  authInternal.config.emulator = emulator;
  authInternal.emulatorConfig = emulatorConfig;
  authInternal.settings.appVerificationDisabledForTesting = true;
  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}
function extractProtocol(url) {
  const protocolEnd = url.indexOf(":");
  return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
  if (!authority) {
    return {
      host: "",
      port: null
    };
  }
  const hostAndPort = authority[2].split("@").pop() || "";
  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return {
      host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    const [host, port] = hostAndPort.split(":");
    return {
      host,
      port: parsePort(port)
    };
  }
}
function parsePort(portStr) {
  if (!portStr) {
    return null;
  }
  const port = Number(portStr);
  if (isNaN(port)) {
    return null;
  }
  return port;
}
function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement("p");
    const sty = el.style;
    el.innerText = "Running in emulator mode. Do not use with production credentials.";
    sty.position = "fixed";
    sty.width = "100%";
    sty.backgroundColor = "#ffffff";
    sty.border = ".1em solid #000000";
    sty.color = "#b50000";
    sty.bottom = "0px";
    sty.left = "0px";
    sty.margin = "0px";
    sty.zIndex = "10000";
    sty.textAlign = "center";
    el.classList.add("firebase-emulator-warning");
    document.body.appendChild(el);
  }
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", attachBanner);
    } else {
      attachBanner();
    }
  }
}
var AuthCredential = class {
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function resetPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:resetPassword", _addTidIfNecessary(auth, request));
}
async function updateEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function linkEmailPassword(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:signUp", request);
}
async function applyActionCode$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", _addTidIfNecessary(auth, request));
}
async function signInWithPassword(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth, request));
}
async function sendOobCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendOobCode", _addTidIfNecessary(auth, request));
}
async function sendEmailVerification$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendPasswordResetEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function sendSignInLinkToEmail$1(auth, request) {
  return sendOobCode(auth, request);
}
async function verifyAndChangeEmail(auth, request) {
  return sendOobCode(auth, request);
}
async function signInWithEmailLink$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
async function signInWithEmailLinkForLinking(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth, request));
}
var EmailAuthCredential = class extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  async _getIdTokenResponse(auth) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        return handleRecaptchaFlow(auth, request, "signInWithPassword", signInWithPassword, "EMAIL_PASSWORD_PROVIDER");
      case "emailLink":
        return signInWithEmailLink$1(auth, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  async _linkToIdToken(auth, idToken) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
        };
        return handleRecaptchaFlow(auth, request, "signUpPassword", linkEmailPassword, "EMAIL_PASSWORD_PROVIDER");
      case "emailLink":
        return signInWithEmailLinkForLinking(auth, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth, "internal-error");
    }
  }
  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }
};
async function signInWithIdp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error");
    }
    return cred;
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
        providerId,
        signInMethod
      } = obj,
      rest = (0, import_tslib.__rest)(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = (0, import_util.querystring)(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth, request));
}
async function signInWithPhoneNumber$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
}
async function linkWithPhoneNumber$1(auth, request) {
  const response = await _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"]: "user-not-found"
};
async function verifyPhoneNumberForExisting(auth, request) {
  const apiRequest = Object.assign(Object.assign({}, request), {
    operation: "REAUTH"
  });
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super("phone", "phone");
    this.params = params;
  }
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  _makeVerificationRequest() {
    const {
      temporaryProof,
      phoneNumber,
      verificationId,
      verificationCode
    } = this.params;
    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof,
        phoneNumber
      };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const {
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["link"];
  const doubleDeepLink = link ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(link))["deep_link_id"] : null;
  const iOSDeepLink = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = (0, import_util.querystringDecode)((0, import_util.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
};
var OAuthProvider = class extends BaseOAuthProvider {
  static credentialFromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    _assert("providerId" in obj && "signInMethod" in obj, "argument-error");
    return OAuthCredential._fromParams(obj);
  }
  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error");
    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  static credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  }
  static oauthCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken,
      oauthTokenSecret,
      pendingToken,
      nonce,
      providerId
    } = tokenResponse;
    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }
    if (!providerId) {
      return null;
    }
    try {
      return new OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce,
        pendingToken
      });
    } catch (e) {
      return null;
    }
  }
};
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthIdToken,
      oauthAccessToken
    } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var IDP_REQUEST_URI = "http://localhost";
var SAMLAuthCredential = class extends AuthCredential {
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const {
      providerId,
      signInMethod,
      pendingToken
    } = obj;
    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  static _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
  }
  buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  }
};
var SAML_PROVIDER_PREFIX = "saml.";
var SAMLAuthProvider = class extends FederatedAuthProvider {
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error");
    super(providerId);
  }
  static credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);
    _assert(credential, "argument-error");
    return credential;
  }
  static samlCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      pendingToken,
      providerId
    } = tokenResponse;
    if (!pendingToken || !providerId) {
      return null;
    }
    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  }
};
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      oauthAccessToken,
      oauthTokenSecret
    } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
async function signUp(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth, request));
}
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
async function signInAnonymously(auth) {
  var _a;
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  await authInternal._initializationPromise;
  if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
    return new UserCredentialImpl({
      user: authInternal.currentUser,
      providerId: null,
      operationType: "signIn"
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
var MultiFactorError = class extends import_util.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch(error => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }
    throw error;
  });
}
function providerDataAsNames(providerData) {
  return new Set(providerData.map(({
    providerId
  }) => providerId).filter(pid => !!pid));
}
async function unlink(user, providerId) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(true, userInternal, providerId);
  const {
    providerUserInfo
  } = await deleteLinkedAccounts(userInternal.auth, {
    idToken: await userInternal.getIdToken(),
    deleteProvider: [providerId]
  });
  const providersLeft = providerDataAsNames(providerUserInfo || []);
  userInternal.providerData = userInternal.providerData.filter(pd => providersLeft.has(pd.providerId));
  if (!providersLeft.has("phone")) {
    userInternal.phoneNumber = null;
  }
  await userInternal.auth._persistUserIfCurrent(userInternal);
  return userInternal;
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _assertLinkedStatus(expected, user, provider) {
  await _reloadWithoutSaving(user);
  const providerIds = providerDataAsNames(user.providerData);
  const code = expected === false ? "provider-already-linked" : "no-such-provider";
  _assert(providerIds.has(provider) === expected, user.auth, code);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const {
    auth
  } = user;
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth, "internal-error");
    const {
      sub: localId
    } = parsed;
    _assert(user.uid === localId, auth, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth, "user-mismatch");
    }
    throw e;
  }
}
async function _signInWithCredential(auth, credential, bypassAuthState = false) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);
  if (!bypassAuthState) {
    await auth._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
async function signInWithCredential(auth, credential) {
  return _signInWithCredential(_castAuth(auth), credential);
}
async function linkWithCredential(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, credential.providerId);
  return _link$1(userInternal, credential);
}
async function reauthenticateWithCredential(user, credential) {
  return _reauthenticate((0, import_util.getModularInstance)(user), credential);
}
async function signInWithCustomToken$1(auth, request) {
  return _performSignInRequest(auth, "POST", "/v1/accounts:signInWithCustomToken", _addTidIfNecessary(auth, request));
}
async function signInWithCustomToken(auth, customToken) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const response = await signInWithCustomToken$1(authInternal, {
    token: customToken,
    returnSecureToken: true
  });
  const cred = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(cred.user);
  return cred;
}
var MultiFactorInfoImpl = class {
  constructor(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }
  static _fromServerResponse(auth, enrollment) {
    if ("phoneInfo" in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    } else if ("totpInfo" in enrollment) {
      return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }
    return _fail(auth, "internal-error");
  }
};
var PhoneMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone", response);
    this.phoneNumber = response.phoneInfo;
  }
  static _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  }
};
var TotpMultiFactorInfoImpl = class extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp", response);
  }
  static _fromServerResponse(_auth, enrollment) {
    return new TotpMultiFactorInfoImpl(enrollment);
  }
};
function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;
  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri");
  _assert(typeof actionCodeSettings.dynamicLinkDomain === "undefined" || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain");
  _assert(typeof actionCodeSettings.linkDomain === "undefined" || actionCodeSettings.linkDomain.length > 0, auth, "invalid-hosting-link-domain");
  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.linkDomain = actionCodeSettings.linkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;
  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id");
    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }
  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name");
    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
async function recachePasswordPolicy(auth) {
  const authInternal = _castAuth(auth);
  if (authInternal._getPasswordPolicyInternal()) {
    await authInternal._updatePasswordPolicy();
  }
}
async function sendPasswordResetEmail(auth, email, actionCodeSettings) {
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "PASSWORD_RESET",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
  }
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendPasswordResetEmail$1, "EMAIL_PASSWORD_PROVIDER");
}
async function confirmPasswordReset(auth, oobCode, newPassword) {
  await resetPassword((0, import_util.getModularInstance)(auth), {
    oobCode,
    newPassword
  }).catch(async error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
}
async function applyActionCode(auth, oobCode) {
  await applyActionCode$1((0, import_util.getModularInstance)(auth), {
    oobCode
  });
}
async function checkActionCode(auth, oobCode) {
  const authModular = (0, import_util.getModularInstance)(auth);
  const response = await resetPassword(authModular, {
    oobCode
  });
  const operation = response.requestType;
  _assert(operation, authModular, "internal-error");
  switch (operation) {
    case "EMAIL_SIGNIN":
      break;
    case "VERIFY_AND_CHANGE_EMAIL":
      _assert(response.newEmail, authModular, "internal-error");
      break;
    case "REVERT_SECOND_FACTOR_ADDITION":
      _assert(response.mfaInfo, authModular, "internal-error");
    default:
      _assert(response.email, authModular, "internal-error");
  }
  let multiFactorInfo = null;
  if (response.mfaInfo) {
    multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
  }
  return {
    data: {
      email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.newEmail : response.email) || null,
      previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL" ? response.email : response.newEmail) || null,
      multiFactorInfo
    },
    operation
  };
}
async function verifyPasswordResetCode(auth, code) {
  const {
    data
  } = await checkActionCode((0, import_util.getModularInstance)(auth), code);
  return data.email;
}
async function createUserWithEmailAndPassword(auth, email, password) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const request = {
    returnSecureToken: true,
    email,
    password,
    clientType: "CLIENT_TYPE_WEB"
  };
  const signUpResponse = handleRecaptchaFlow(authInternal, request, "signUpPassword", signUp, "EMAIL_PASSWORD_PROVIDER");
  const response = await signUpResponse.catch(error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential.user);
  return userCredential;
}
function signInWithEmailAndPassword(auth, email, password) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  return signInWithCredential((0, import_util.getModularInstance)(auth), EmailAuthProvider.credential(email, password)).catch(async error => {
    if (error.code === `auth/${"password-does-not-meet-requirements"}`) {
      void recachePasswordPolicy(auth);
    }
    throw error;
  });
}
async function sendSignInLinkToEmail(auth, email, actionCodeSettings) {
  const authInternal = _castAuth(auth);
  const request = {
    requestType: "EMAIL_SIGNIN",
    email,
    clientType: "CLIENT_TYPE_WEB"
  };
  function setActionCodeSettings(request2, actionCodeSettings2) {
    _assert(actionCodeSettings2.handleCodeInApp, authInternal, "argument-error");
    if (actionCodeSettings2) {
      _setActionCodeSettingsOnRequest(authInternal, request2, actionCodeSettings2);
    }
  }
  setActionCodeSettings(request, actionCodeSettings);
  await handleRecaptchaFlow(authInternal, request, "getOobCode", sendSignInLinkToEmail$1, "EMAIL_PASSWORD_PROVIDER");
}
function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN";
}
async function signInWithEmailLink(auth, email, emailLink) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authModular = (0, import_util.getModularInstance)(auth);
  const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl());
  _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch");
  return signInWithCredential(authModular, credential);
}
async function createAuthUri(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:createAuthUri", _addTidIfNecessary(auth, request));
}
async function fetchSignInMethodsForEmail(auth, email) {
  const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : "http://localhost";
  const request = {
    identifier: email,
    continueUri
  };
  const {
    signinMethods
  } = await createAuthUri((0, import_util.getModularInstance)(auth), request);
  return signinMethods || [];
}
async function sendEmailVerification(user, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_EMAIL",
    idToken
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await sendEmailVerification$1(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings) {
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await user.getIdToken();
  const request = {
    requestType: "VERIFY_AND_CHANGE_EMAIL",
    idToken,
    newEmail
  };
  if (actionCodeSettings) {
    _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
  }
  const {
    email
  } = await verifyAndChangeEmail(userInternal.auth, request);
  if (email !== user.email) {
    await user.reload();
  }
}
async function updateProfile$1(auth, request) {
  return _performApiRequest(auth, "POST", "/v1/accounts:update", request);
}
async function updateProfile(user, {
  displayName,
  photoURL: photoUrl
}) {
  if (displayName === void 0 && photoUrl === void 0) {
    return;
  }
  const userInternal = (0, import_util.getModularInstance)(user);
  const idToken = await userInternal.getIdToken();
  const profileRequest = {
    idToken,
    displayName,
    photoUrl,
    returnSecureToken: true
  };
  const response = await _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
  userInternal.displayName = response.displayName || null;
  userInternal.photoURL = response.photoUrl || null;
  const passwordProvider = userInternal.providerData.find(({
    providerId
  }) => providerId === "password");
  if (passwordProvider) {
    passwordProvider.displayName = userInternal.displayName;
    passwordProvider.photoURL = userInternal.photoURL;
  }
  await userInternal._updateTokensIfNecessary(response);
}
function updateEmail(user, newEmail) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  return updateEmailOrPassword(userInternal, newEmail, null);
}
function updatePassword(user, newPassword) {
  return updateEmailOrPassword((0, import_util.getModularInstance)(user), null, newPassword);
}
async function updateEmailOrPassword(user, email, password) {
  const {
    auth
  } = user;
  const idToken = await user.getIdToken();
  const request = {
    idToken,
    returnSecureToken: true
  };
  if (email) {
    request.email = email;
  }
  if (password) {
    request.password = password;
  }
  const response = await _logoutIfInvalidated(user, updateEmailPassword(auth, request));
  await user._updateTokensIfNecessary(response, true);
}
function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;
  if (!idTokenResponse) {
    return null;
  }
  const {
    providerId
  } = idTokenResponse;
  const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse";
  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b["sign_in_provider"];
    if (signInProvider) {
      const filteredProviderId = signInProvider !== "anonymous" && signInProvider !== "custom" ? signInProvider : null;
      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }
  if (!providerId) {
    return null;
  }
  switch (providerId) {
    case "facebook.com":
      return new FacebookAdditionalUserInfo(isNewUser, profile);
    case "github.com":
      return new GithubAdditionalUserInfo(isNewUser, profile);
    case "google.com":
      return new GoogleAdditionalUserInfo(isNewUser, profile);
    case "twitter.com":
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);
    case "custom":
    case "anonymous":
      return new GenericAdditionalUserInfo(isNewUser, null);
    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}
var GenericAdditionalUserInfo = class {
  constructor(isNewUser, providerId, profile = {}) {
    this.isNewUser = isNewUser;
    this.providerId = providerId;
    this.profile = profile;
  }
};
var FederatedAdditionalUserInfoWithUsername = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile, username) {
    super(isNewUser, providerId, profile);
    this.username = username;
  }
};
var FacebookAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "facebook.com", profile);
  }
};
var GithubAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile) {
    super(isNewUser, "github.com", profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === "string" ? profile === null || profile === void 0 ? void 0 : profile.login : null);
  }
};
var GoogleAdditionalUserInfo = class extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "google.com", profile);
  }
};
var TwitterAdditionalUserInfo = class extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile, screenName) {
    super(isNewUser, "twitter.com", profile, screenName);
  }
};
function getAdditionalUserInfo(userCredential) {
  const {
    user,
    _tokenResponse
  } = userCredential;
  if (user.isAnonymous && !_tokenResponse) {
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }
  return _fromIdTokenResponse(_tokenResponse);
}
function setPersistence(auth, persistence) {
  return (0, import_util.getModularInstance)(auth).setPersistence(persistence);
}
function initializeRecaptchaConfig(auth) {
  return _initializeRecaptchaConfig(auth);
}
async function validatePassword(auth, password) {
  const authInternal = _castAuth(auth);
  return authInternal.validatePassword(password);
}
function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
function beforeAuthStateChanged(auth, callback, onAbort) {
  return (0, import_util.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return (0, import_util.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
function useDeviceLanguage(auth) {
  (0, import_util.getModularInstance)(auth).useDeviceLanguage();
}
function updateCurrentUser(auth, user) {
  return (0, import_util.getModularInstance)(auth).updateCurrentUser(user);
}
function signOut(auth) {
  return (0, import_util.getModularInstance)(auth).signOut();
}
function revokeAccessToken(auth, token) {
  const authInternal = _castAuth(auth);
  return authInternal.revokeAccessToken(token);
}
async function deleteUser(user) {
  return (0, import_util.getModularInstance)(user).delete();
}
var MultiFactorSessionImpl = class {
  constructor(type, credential, user) {
    this.type = type;
    this.credential = credential;
    this.user = user;
  }
  static _fromIdtoken(idToken, user) {
    return new MultiFactorSessionImpl("enroll", idToken, user);
  }
  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin", mfaPendingCredential);
  }
  toJSON() {
    const key = this.type === "enroll" ? "idToken" : "pendingCredential";
    return {
      multiFactorSession: {
        [key]: this.credential
      }
    };
  }
  static fromJSON(obj) {
    var _a, _b;
    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }
    return null;
  }
};
var MultiFactorResolverImpl = class {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);
    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));
    _assert(serverResponse.mfaPendingCredential, auth, "internal-error");
    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);
    return new MultiFactorResolverImpl(session, hints, async assertion => {
      const mfaResponse = await assertion._process(auth, session);
      delete serverResponse.mfaInfo;
      delete serverResponse.mfaPendingCredential;
      const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
        idToken: mfaResponse.idToken,
        refreshToken: mfaResponse.refreshToken
      });
      switch (error.operationType) {
        case "signIn":
          const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
          await auth._updateCurrentUser(userCredential.user);
          return userCredential;
        case "reauthenticate":
          _assert(error.user, auth, "internal-error");
          return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);
        default:
          _fail(auth, "internal-error");
      }
    });
  }
  async resolveSignIn(assertionExtern) {
    const assertion = assertionExtern;
    return this.signInResolver(assertion);
  }
};
function getMultiFactorResolver(auth, error) {
  var _a;
  const authModular = (0, import_util.getModularInstance)(auth);
  const errorInternal = error;
  _assert(error.customData.operationType, authModular, "argument-error");
  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error");
  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function startEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth, request));
}
function finalizeEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth, request));
}
function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaEnrollment:withdraw", _addTidIfNecessary(auth, request));
}
var MultiFactorUserImpl = class {
  constructor(user) {
    this.user = user;
    this.enrolledFactors = [];
    user._onReload(userInfo => {
      if (userInfo.mfaInfo) {
        this.enrolledFactors = userInfo.mfaInfo.map(enrollment => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
      }
    });
  }
  static _fromUser(user) {
    return new MultiFactorUserImpl(user);
  }
  async getSession() {
    return MultiFactorSessionImpl._fromIdtoken(await this.user.getIdToken(), this.user);
  }
  async enroll(assertionExtern, displayName) {
    const assertion = assertionExtern;
    const session = await this.getSession();
    const finalizeMfaResponse = await _logoutIfInvalidated(this.user, assertion._process(this.user.auth, session, displayName));
    await this.user._updateTokensIfNecessary(finalizeMfaResponse);
    return this.user.reload();
  }
  async unenroll(infoOrUid) {
    const mfaEnrollmentId = typeof infoOrUid === "string" ? infoOrUid : infoOrUid.uid;
    const idToken = await this.user.getIdToken();
    try {
      const idTokenResponse = await _logoutIfInvalidated(this.user, withdrawMfa(this.user.auth, {
        idToken,
        mfaEnrollmentId
      }));
      this.enrolledFactors = this.enrolledFactors.filter(({
        uid
      }) => uid !== mfaEnrollmentId);
      await this.user._updateTokensIfNecessary(idTokenResponse);
      await this.user.reload();
    } catch (e) {
      throw e;
    }
  }
};
var multiFactorUserCache = /* @__PURE__ */new WeakMap();
function multiFactor(user) {
  const userModular = (0, import_util.getModularInstance)(user);
  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }
  return multiFactorUserCache.get(userModular);
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async promise => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  async handleEvent(event) {
    const messageEvent = event;
    const {
      eventId,
      eventType,
      data
    } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async handler => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */new Set();
  }
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME = "firebaseLocalStorageDb";
var DB_VERSION = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db);
      }
    });
  });
}
async function _putObject(db, key, value) {
  const request = getObjectStore(db, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db, key) {
  const request = getObjectStore(db, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db = await this._openDb();
        return await op(db);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", {
        key
      }, this.serviceWorkerReceiverAvailable ? 800 : 50);
    } catch (_a) {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db = await _openDatabase();
      await _putObject(db, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {}
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _putObject(db, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries(db => getObject(db, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries(db => _deleteObject(db, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries(db => {
      const getAllRequest = getObjectStore(db, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */new Set();
    if (result.length !== 0) {
      for (const {
        fbase_key: key,
        value
      } of result) {
        keysInResult.add(key);
        if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
          this.notifyListeners(key, value);
          keys.push(key);
        }
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth, request));
}
function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
function finalizeSignInTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth, request));
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var ReCaptchaLoaderImpl = class {
  constructor() {
    var _a;
    this.hostLanguage = "";
    this.counter = 0;
    this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
  }
  load(auth, hl = "") {
    _assert(isHostLanguageValid(hl), auth, "argument-error");
    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }
    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"));
      }, NETWORK_TIMEOUT_DELAY.get());
      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);
        delete _window()[_JSLOAD_CALLBACK];
        const recaptcha = _window().grecaptcha;
        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"));
          return;
        }
        const render = recaptcha.render;
        recaptcha.render = (container, params) => {
          const widgetId = render(container, params);
          this.counter++;
          return widgetId;
        };
        this.hostLanguage = hl;
        resolve(recaptcha);
      };
      const url = `${_recaptchaV2ScriptUrl()}?${(0, import_util.querystring)({
        onload: _JSLOAD_CALLBACK,
        render: "explicit",
        hl
      })}`;
      _loadJS(url).catch(() => {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"));
      });
    });
  }
  clearedOneInstance() {
    this.counter--;
  }
  shouldResolveImmediately(hl) {
    var _a;
    return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }
};
function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}
var MockReCaptchaLoaderImpl = class {
  async load(auth) {
    return new MockReCaptcha(auth);
  }
  clearedOneInstance() {}
};
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
var DEFAULT_PARAMS = {
  theme: "light",
  type: "image"
};
var RecaptchaVerifier = class {
  constructor(authExtern, containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS)) {
    this.parameters = parameters;
    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = /* @__PURE__ */new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === "invisible";
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
    const container = typeof containerOrId === "string" ? document.getElementById(containerOrId) : containerOrId;
    _assert(container, this.auth, "argument-error");
    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState();
  }
  async verify() {
    this.assertNotDestroyed();
    const id = await this.render();
    const recaptcha = this.getAssertedRecaptcha();
    const response = recaptcha.getResponse(id);
    if (response) {
      return response;
    }
    return new Promise(resolve => {
      const tokenChange = token => {
        if (!token) {
          return;
        }
        this.tokenChangeListeners.delete(tokenChange);
        resolve(token);
      };
      this.tokenChangeListeners.add(tokenChange);
      if (this.isInvisible) {
        recaptcha.execute(id);
      }
    });
  }
  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      return Promise.reject(e);
    }
    if (this.renderPromise) {
      return this.renderPromise;
    }
    this.renderPromise = this.makeRenderPromise().catch(e => {
      this.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  _reset() {
    this.assertNotDestroyed();
    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  clear() {
    this.assertNotDestroyed();
    this.destroyed = true;
    this._recaptchaLoader.clearedOneInstance();
    if (!this.isInvisible) {
      this.container.childNodes.forEach(node => {
        this.container.removeChild(node);
      });
    }
  }
  validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error");
    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error");
    _assert(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
  }
  makeTokenCallback(existing) {
    return token => {
      this.tokenChangeListeners.forEach(listener => listener(token));
      if (typeof existing === "function") {
        existing(token);
      } else if (typeof existing === "string") {
        const globalFunc = _window()[existing];
        if (typeof globalFunc === "function") {
          globalFunc(token);
        }
      }
    };
  }
  assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error");
  }
  async makeRenderPromise() {
    await this.init();
    if (!this.widgetId) {
      let container = this.container;
      if (!this.isInvisible) {
        const guaranteedEmpty = document.createElement("div");
        container.appendChild(guaranteedEmpty);
        container = guaranteedEmpty;
      }
      this.widgetId = this.getAssertedRecaptcha().render(container, this.parameters);
    }
    return this.widgetId;
  }
  async init() {
    _assert(_isHttpOrHttps() && !_isWorker(), this.auth, "internal-error");
    await domReady();
    this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || void 0);
    const siteKey = await getRecaptchaParams(this.auth);
    _assert(siteKey, this.auth, "internal-error");
    this.parameters.sitekey = siteKey;
  }
  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error");
    return this.recaptcha;
  }
};
function domReady() {
  let resolver = null;
  return new Promise(resolve => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    resolver = () => resolve();
    window.addEventListener("load", resolver);
  }).catch(e => {
    if (resolver) {
      window.removeEventListener("load", resolver);
    }
    throw e;
  });
}
var ConfirmationResultImpl = class {
  constructor(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }
  confirm(verificationCode) {
    const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);
    return this.onConfirmation(authCredential);
  }
};
async function signInWithPhoneNumber(auth, phoneNumber, appVerifier) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const verificationId = await _verifyPhoneNumber(authInternal, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => signInWithCredential(authInternal, cred));
}
async function linkWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  await _assertLinkedStatus(false, userInternal, "phone");
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => linkWithCredential(userInternal, cred));
}
async function reauthenticateWithPhoneNumber(user, phoneNumber, appVerifier) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  const verificationId = await _verifyPhoneNumber(userInternal.auth, phoneNumber, (0, import_util.getModularInstance)(appVerifier));
  return new ConfirmationResultImpl(verificationId, cred => reauthenticateWithCredential(userInternal, cred));
}
async function _verifyPhoneNumber(auth, options, verifier) {
  var _a;
  if (!auth._getRecaptchaConfig()) {
    try {
      await _initializeRecaptchaConfig(auth);
    } catch (error) {
      console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    }
  }
  try {
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(session.type === "enroll", auth, "internal-error");
        const startPhoneMfaEnrollmentRequest = {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
          }
        };
        const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startEnrollPhoneMfa(authInstance, request);
        };
        const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(auth, startPhoneMfaEnrollmentRequest, "mfaSmsEnrollment", startEnrollPhoneMfaActionCallback, "PHONE_PROVIDER");
        const response = await startPhoneMfaEnrollmentResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(session.type === "signin", auth, "internal-error");
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(mfaEnrollmentId, auth, "missing-multi-factor-info");
        const startPhoneMfaSignInRequest = {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
          }
        };
        const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
            _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startSignInPhoneMfa(authInstance, request);
        };
        const startPhoneMfaSignInResponse = handleRecaptchaFlow(auth, startPhoneMfaSignInRequest, "mfaSmsSignIn", startSignInPhoneMfaActionCallback, "PHONE_PROVIDER");
        const response = await startPhoneMfaSignInResponse.catch(error => {
          return Promise.reject(error);
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const sendPhoneVerificationCodeRequest = {
        phoneNumber: phoneInfoOptions.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
      };
      const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
        if (request.captchaResponse === FAKE_TOKEN) {
          _assert((verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE, authInstance, "argument-error");
          const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
          return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
        }
        return sendPhoneVerificationCode(authInstance, request);
      };
      const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(auth, sendPhoneVerificationCodeRequest, "sendVerificationCode", sendPhoneVerificationCodeActionCallback, "PHONE_PROVIDER");
      const response = await sendPhoneVerificationCodeResponse.catch(error => {
        return Promise.reject(error);
      });
      return response.sessionInfo;
    }
  } finally {
    verifier === null || verifier === void 0 ? void 0 : verifier._reset();
  }
}
async function updatePhoneNumber(user, credential) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  await _link$1(userInternal, credential);
}
async function injectRecaptchaV2Token(auth, request, recaptchaV2Verifier) {
  _assert(recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error");
  const recaptchaV2Token = await recaptchaV2Verifier.verify();
  _assert(typeof recaptchaV2Token === "string", auth, "argument-error");
  const newRequest = Object.assign({}, request);
  if ("phoneEnrollmentInfo" in newRequest) {
    const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
    const captchaResponse = newRequest.phoneEnrollmentInfo.captchaResponse;
    const clientType = newRequest.phoneEnrollmentInfo.clientType;
    const recaptchaVersion = newRequest.phoneEnrollmentInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneEnrollmentInfo": {
        phoneNumber,
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else if ("phoneSignInInfo" in newRequest) {
    const captchaResponse = newRequest.phoneSignInInfo.captchaResponse;
    const clientType = newRequest.phoneSignInInfo.clientType;
    const recaptchaVersion = newRequest.phoneSignInInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneSignInInfo": {
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else {
    Object.assign(newRequest, {
      "recaptchaToken": recaptchaV2Token
    });
    return newRequest;
  }
}
var PhoneAuthProvider = class {
  constructor(auth) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth);
  }
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, (0, import_util.getModularInstance)(applicationVerifier));
  }
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }
    const {
      phoneNumber,
      temporaryProof
    } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth._popupRedirectResolver, auth, "argument-error");
  return auth._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
    this.params = params;
  }
  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const {
    auth,
    user
  } = params;
  _assert(user, auth, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = {
        resolve,
        reject
      };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const {
      urlResponse,
      sessionId,
      postBody,
      tenantId,
      error,
      type
    } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error");
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
async function signInWithPopup(auth, provider, resolver) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_createError(auth, "operation-not-supported-in-this-environment"));
  }
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  const action = new PopupOperation(authInternal, "signInViaPopup", provider, resolverInternal);
  return action.executeNotNull();
}
async function reauthenticateWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_createError(userInternal.auth, "operation-not-supported-in-this-environment"));
  }
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "reauthViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
async function linkWithPopup(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  const action = new PopupOperation(userInternal.auth, "linkViaPopup", provider, resolverInternal, userInternal);
  return action.executeNotNull();
}
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth, filter, provider, resolver, user) {
    super(auth, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch(e => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, isSupported => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {}
  cleanUp() {}
};
async function _getAndClearPendingRedirectStatus(resolver, auth) {
  const key = pendingRedirectKey(auth);
  const persistence = resolverPersistence(resolver);
  if (!(await persistence._isAvailable())) {
    return false;
  }
  const hasPendingRedirect = (await persistence._get(key)) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
async function _setPendingRedirectStatus(resolver, auth) {
  return resolverPersistence(resolver)._set(pendingRedirectKey(auth), "true");
}
function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}
function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}
async function _signInWithRedirect(auth, provider, resolver) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  _assertInstanceOf(auth, provider, FederatedAuthProvider);
  await authInternal._initializationPromise;
  const resolverInternal = _withDefaultResolver(authInternal, resolver);
  await _setPendingRedirectStatus(resolverInternal, authInternal);
  return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect");
}
function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}
async function _reauthenticateWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  if ((0, import_app._isFirebaseServerApp)(userInternal.auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(userInternal.auth));
  }
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect", eventId);
}
function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}
async function _linkWithRedirect(user, provider, resolver) {
  const userInternal = (0, import_util.getModularInstance)(user);
  _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);
  await userInternal.auth._initializationPromise;
  const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);
  await _assertLinkedStatus(false, userInternal, provider.providerId);
  await _setPendingRedirectStatus(resolverInternal, userInternal.auth);
  const eventId = await prepareUserForRedirect(userInternal);
  return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect", eventId);
}
async function getRedirectResult(auth, resolver) {
  await _castAuth(auth)._initializationPromise;
  return _getRedirectResult(auth, resolver, false);
}
async function _getRedirectResult(auth, resolverExtern, bypassAuthState = false) {
  if ((0, import_app._isFirebaseServerApp)(auth.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth));
  }
  const authInternal = _castAuth(auth);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
async function prepareUserForRedirect(user) {
  const eventId = _generateEventId(`${user.uid}:::`);
  user._redirectEventId = eventId;
  await user.auth._setRedirectUser(user);
  await user.auth._persistUserIfCurrent(user);
  return eventId;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = /* @__PURE__ */new Set();
    this.consumers = /* @__PURE__ */new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach(consumer => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join("-");
}
function isNullRedirectEvent({
  type,
  error
}) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth, request = {}) {
  return _performApiRequest(auth, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth) {
  if (auth.config.emulator) {
    return;
  }
  const {
    authorizedDomains
  } = await _getProjectConfig(auth);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {}
  }
  _fail(auth, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const {
    protocol,
    hostname
  } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth, "network-request-failed"));
        }
      };
      return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch(e => reject(e));
    }
  }).catch(error => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
function getIframeUrl(auth) {
  const config = auth.config;
  _assert(config.authDomain, auth, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: import_app.SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${(0, import_util.querystring)(params).slice(1)}`;
}
async function _openIframe(auth) {
  const context = await _loadGapi(auth);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, iframe => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  }
};
function _open(auth, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = (0, import_util.getUA)().toLowerCase();
  if (name2) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {}
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(auth, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth.config.authDomain, auth, "auth-domain-config-required");
  _assert(auth.config.apiKey, auth, "invalid-api-key");
  const params = {
    apiKey: auth.config.apiKey,
    appName: auth.name,
    authType,
    redirectUrl,
    v: import_app.SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth.languageCode);
    params.providerId = provider.providerId || "";
    if (!(0, import_util.isEmpty)(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter(scope => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth.tenantId) {
    params.tid = auth.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  const appCheckToken = await auth._getAppCheckToken();
  const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
  return `${getHandlerBase(auth)}?${(0, import_util.querystring)(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({
  config
}) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  async _openPopup(auth, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth, url, _generateEventId());
  }
  async _openRedirect(auth, provider, authType, eventId) {
    await this._originValidation(auth);
    const url = await _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
    _setWindowLocation(url);
    return new Promise(() => {});
  }
  _initialize(auth) {
    const key = auth._key();
    if (this.eventManagers[key]) {
      const {
        manager,
        promise: promise2
      } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise
    };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth) {
    const iframe = await _openIframe(auth);
    const manager = new AuthEventManager(auth);
    iframe.register("authEvent", iframeEvent => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
      };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth._key()] = {
      manager
    };
    this.iframes[auth._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, result => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth, "internal-error");
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth) {
    const key = auth._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone");
    this.credential = credential;
  }
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {}
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  static async generateSecret(session) {
    var _a;
    const mfaSession = session;
    _assert(typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined", "internal-error");
    const response = await startEnrollTotpMfa(mfaSession.user.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp");
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  static _fromSecret(secret, otp) {
    return new TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  static _fromEnrollmentId(enrollmentId, otp) {
    return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  async _finalizeEnroll(auth, idToken, displayName) {
    _assert(typeof this.secret !== "undefined", auth, "argument-error");
    return finalizeEnrollTotpMfa(auth, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  async _finalizeSignIn(auth, mfaPendingCredential) {
    _assert(this.enrollmentId !== void 0 && this.otp !== void 0, auth, "argument-error");
    const totpVerificationInfo = {
      verificationCode: this.otp
    };
    return finalizeSignInTotpMfa(auth, {
      mfaPendingCredential,
      mfaEnrollmentId: this.enrollmentId,
      totpVerificationInfo
    });
  }
};
var TotpSecret = class {
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
  generateQrCodeUrl(accountName, issuer) {
    var _a;
    let useDefaults = false;
    if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
      useDefaults = true;
    }
    if (useDefaults) {
      if (_isEmptyString(accountName)) {
        accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
      }
      if (_isEmptyString(issuer)) {
        issuer = this.auth.name;
      }
    }
    return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
  }
};
function _isEmptyString(input) {
  return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
}
var name = "@firebase/auth";
var version = "1.9.1";
var AuthInterop = class {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = /* @__PURE__ */new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return {
      accessToken
    };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged(user => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  (0, import_app._registerComponent)(new import_component.Component("auth", (container, {
    options: deps
  }) => {
    const app = container.getProvider("app").getImmediate();
    const heartbeatServiceProvider = container.getProvider("heartbeat");
    const appCheckServiceProvider = container.getProvider("app-check-internal");
    const {
      apiKey,
      authDomain
    } = app.options;
    _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", {
      appName: app.name
    });
    const config = {
      apiKey,
      authDomain,
      clientPlatform,
      apiHost: "identitytoolkit.googleapis.com",
      tokenApiHost: "securetoken.googleapis.com",
      apiScheme: "https",
      sdkClientVersion: _getClientVersion(clientPlatform)
    };
    const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);
    _initializeAuthInstance(authInstance, deps);
    return authInstance;
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  (0, import_app._registerComponent)(new import_component.Component("auth-internal", container => {
    const auth = _castAuth(container.getProvider("auth").getImmediate());
    return (auth2 => new AuthInterop(auth2))(auth);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  (0, import_app.registerVersion)(name, version, getVersionForPlatform(clientPlatform));
  (0, import_app.registerVersion)(name, version, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = (0, import_util.getExperimentalSetting)("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = url => async user => {
  const idTokenResult = user && (await user.getIdTokenResult());
  const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
  if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
    return;
  }
  const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
  if (lastPostedIdToken === idToken) {
    return;
  }
  lastPostedIdToken = idToken;
  await fetch(url, {
    method: idToken ? "POST" : "DELETE",
    headers: idToken ? {
      "Authorization": `Bearer ${idToken}`
    } : {}
  });
};
function getAuth(app = (0, import_app.getApp)()) {
  const provider = (0, import_app._getProvider)(app, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  const auth = initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
  const authTokenSyncPath = (0, import_util.getExperimentalSetting)("authTokenSyncURL");
  if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
    const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
    if (location.origin === authTokenSyncUrl.origin) {
      const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
      beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
      onIdTokenChanged(auth, user => mintCookie(user));
    }
  }
  const authEmulatorHost = (0, import_util.getDefaultEmulatorHost)("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }
  return auth;
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
_setExternalJSProvider({
  loadJS(url) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.setAttribute("src", url);
      el.onload = resolve;
      el.onerror = e => {
        const error = _createError("internal-error");
        error.customData = e;
        reject(error);
      };
      el.type = "text/javascript";
      el.charset = "UTF-8";
      getScriptParentElement().appendChild(el);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
registerAuth("Browser");

// node_modules/@firebase/auth/dist/esm2017/index.js
var import_app2 = require("@firebase/app@0.11.3");
var import_util2 = require("@firebase/util@1.11.0");
var import_logger2 = require("@firebase/logger@0.4.4");
var import_tslib2 = require("tslib@2.8.1");
var import_component2 = require("@firebase/component@0.6.13");
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
/**
 * @license
 * Copyright 2020 Google LLC.
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
 * Copyright 2021 Google LLC
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
 * Copyright 2022 Google LLC
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
 * Copyright 2023 Google LLC
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BmaXJlYmFzZS9hdXRoLjEuOS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tb2RlbC9lbnVtX21hcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9nLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYXNzZXJ0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbG9jYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9uYXZpZ2F0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9kZWxheS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2VtdWxhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZmV0Y2hfcHJvdmlkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9lcnJvcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vcmVjYXB0Y2hhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2FjY291bnQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC90aW1lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaWRfdG9rZW5fcmVzdWx0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvaW52YWxpZGF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcHJvYWN0aXZlX3JlZnJlc2gudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX21ldGFkYXRhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVsb2FkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vdG9rZW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci90b2tlbl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaW5zdGFudGlhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3BlcnNpc3RlbmNlL2luX21lbW9yeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZV91c2VyX21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmVyc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL21pZGRsZXdhcmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wYXNzd29yZF9wb2xpY3kvZ2V0X3Bhc3N3b3JkX3BvbGljeS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3Bhc3N3b3JkX3BvbGljeV9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9pbXBsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2xvYWRfanMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9tb2NrLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfZW50ZXJwcmlzZV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2luaXRpYWxpemUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9hdXRoX2NyZWRlbnRpYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfYW5kX3Bhc3N3b3JkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vZW1haWxfbGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2lkcC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Ntcy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9jcmVkZW50aWFscy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hY3Rpb25fY29kZV91cmwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2VtYWlsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mZWRlcmF0ZWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL29hdXRoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9mYWNlYm9vay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ29vZ2xlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9naXRodWIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvc2FtbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvdHdpdHRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3NpZ25fdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci91c2VyX2NyZWRlbnRpYWxfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2Fub255bW91cy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9lcnJvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Byb3ZpZGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2xpbmtfdW5saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvcmVhdXRoZW50aWNhdGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3VzdG9tX3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hY3Rpb25fY29kZV9zZXR0aW5ncy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9jcmVhdGVfYXV0aF91cmkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9wcm9maWxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWNjb3VudF9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvYWRkaXRpb25hbF91c2VyX2luZm8udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfc2Vzc2lvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9yZXNvbHZlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfdXNlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9icm93c2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2xvY2FsX3N0b3JhZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2Uvc2Vzc2lvbl9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3Byb21pc2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvcmVjZWl2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9ldmVudF9pZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9zZW5kZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvYXV0aF93aW5kb3cudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC93b3JrZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvaW5kZXhlZF9kYi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL21mYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2xvYWRlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX3ZlcmlmaWVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcHJvdmlkZXJzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hYnN0cmFjdF9wb3B1cF9yZWRpcmVjdF9vcGVyYXRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvc3RyYXRlZ2llcy9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9hdXRoX2V2ZW50X21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9wcm9qZWN0X2NvbmZpZy9nZXRfcHJvamVjdF9jb25maWcudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC92YWxpZGF0ZV9vcmlnaW4udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2dhcGkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvaWZyYW1lL2lmcmFtZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci91dGlsL3BvcHVwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvaGFuZGxlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wb3B1cF9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9hc3NlcnRpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWZhL2Fzc2VydGlvbnMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9hc3NlcnRpb25zL3RvdHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9maXJlYmFzZV9pbnRlcm5hbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL3JlZ2lzdGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL2Rpc3QvZXNtMjAxNy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhdXRoXzFfOV8xX2V4cG9ydHMiLCJfX2V4cG9ydCIsIkFjdGlvbkNvZGVPcGVyYXRpb24iLCJBY3Rpb25Db2RlVVJMIiwiQXV0aENyZWRlbnRpYWwiLCJBdXRoRXJyb3JDb2RlcyIsIkFVVEhfRVJST1JfQ09ERVNfTUFQX0RPX05PVF9VU0VfSU5URVJOQUxMWSIsIkVtYWlsQXV0aENyZWRlbnRpYWwiLCJFbWFpbEF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwiRmFjdG9ySWQiLCJHaXRodWJBdXRoUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJPQXV0aENyZWRlbnRpYWwiLCJPQXV0aFByb3ZpZGVyIiwiT3BlcmF0aW9uVHlwZSIsIlBob25lQXV0aENyZWRlbnRpYWwiLCJQaG9uZUF1dGhQcm92aWRlciIsIlBob25lTXVsdGlGYWN0b3JHZW5lcmF0b3IiLCJQcm92aWRlcklkIiwiUmVjYXB0Y2hhVmVyaWZpZXIiLCJTQU1MQXV0aFByb3ZpZGVyIiwiU2lnbkluTWV0aG9kIiwiVG90cE11bHRpRmFjdG9yR2VuZXJhdG9yIiwiVG90cFNlY3JldCIsIlR3aXR0ZXJBdXRoUHJvdmlkZXIiLCJhcHBseUFjdGlvbkNvZGUiLCJiZWZvcmVBdXRoU3RhdGVDaGFuZ2VkIiwiYnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJicm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiYnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsImNoZWNrQWN0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZFJlc2V0IiwiY29ubmVjdEF1dGhFbXVsYXRvciIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImRlYnVnRXJyb3JNYXAiLCJkZWxldGVVc2VyIiwiZmV0Y2hTaWduSW5NZXRob2RzRm9yRW1haWwiLCJnZXRBZGRpdGlvbmFsVXNlckluZm8iLCJnZXRBdXRoIiwiZ2V0SWRUb2tlbiIsImdldElkVG9rZW5SZXN1bHQiLCJnZXRNdWx0aUZhY3RvclJlc29sdmVyIiwiZ2V0UmVkaXJlY3RSZXN1bHQiLCJpbk1lbW9yeVBlcnNpc3RlbmNlIiwiaW5kZXhlZERCTG9jYWxQZXJzaXN0ZW5jZSIsImluaXRpYWxpemVBdXRoIiwiaW5pdGlhbGl6ZVJlY2FwdGNoYUNvbmZpZyIsImlzU2lnbkluV2l0aEVtYWlsTGluayIsImxpbmtXaXRoQ3JlZGVudGlhbCIsImxpbmtXaXRoUGhvbmVOdW1iZXIiLCJsaW5rV2l0aFBvcHVwIiwibGlua1dpdGhSZWRpcmVjdCIsIm11bHRpRmFjdG9yIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwib25JZFRva2VuQ2hhbmdlZCIsInBhcnNlQWN0aW9uQ29kZVVSTCIsInByb2RFcnJvck1hcCIsInJlYXV0aGVudGljYXRlV2l0aENyZWRlbnRpYWwiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQaG9uZU51bWJlciIsInJlYXV0aGVudGljYXRlV2l0aFBvcHVwIiwicmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJyZWxvYWQiLCJyZXZva2VBY2Nlc3NUb2tlbiIsInNlbmRFbWFpbFZlcmlmaWNhdGlvbiIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJzZW5kU2lnbkluTGlua1RvRW1haWwiLCJzZXRQZXJzaXN0ZW5jZSIsInNpZ25JbkFub255bW91c2x5Iiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbExpbmsiLCJzaWduSW5XaXRoUGhvbmVOdW1iZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduSW5XaXRoUmVkaXJlY3QiLCJzaWduT3V0IiwidW5saW5rIiwidXBkYXRlQ3VycmVudFVzZXIiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlUGhvbmVOdW1iZXIiLCJ1cGRhdGVQcm9maWxlIiwidXNlRGV2aWNlTGFuZ3VhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwidmVyaWZ5QmVmb3JlVXBkYXRlRW1haWwiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0Q29kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJQSE9ORSIsIlRPVFAiLCJGQUNFQk9PSyIsIkdJVEhVQiIsIkdPT0dMRSIsIlBBU1NXT1JEIiwiVFdJVFRFUiIsIkVNQUlMX0xJTksiLCJFTUFJTF9QQVNTV09SRCIsIkxJTksiLCJSRUFVVEhFTlRJQ0FURSIsIlNJR05fSU4iLCJFTUFJTF9TSUdOSU4iLCJQQVNTV09SRF9SRVNFVCIsIlJFQ09WRVJfRU1BSUwiLCJSRVZFUlRfU0VDT05EX0ZBQ1RPUl9BRERJVElPTiIsIlZFUklGWV9BTkRfQ0hBTkdFX0VNQUlMIiwiVkVSSUZZX0VNQUlMIiwiX2RlYnVnRXJyb3JNYXAiLCJfcHJvZEVycm9yTWFwIiwiX0RFRkFVTFRfQVVUSF9FUlJPUl9GQUNUT1JZIiwiaW1wb3J0X3V0aWwiLCJFcnJvckZhY3RvcnkiLCJBRE1JTl9PTkxZX09QRVJBVElPTiIsIkFSR1VNRU5UX0VSUk9SIiwiQVBQX05PVF9BVVRIT1JJWkVEIiwiQVBQX05PVF9JTlNUQUxMRUQiLCJDQVBUQ0hBX0NIRUNLX0ZBSUxFRCIsIkNPREVfRVhQSVJFRCIsIkNPUkRPVkFfTk9UX1JFQURZIiwiQ09SU19VTlNVUFBPUlRFRCIsIkNSRURFTlRJQUxfQUxSRUFEWV9JTl9VU0UiLCJDUkVERU5USUFMX01JU01BVENIIiwiQ1JFREVOVElBTF9UT09fT0xEX0xPR0lOX0FHQUlOIiwiREVQRU5ERU5UX1NES19JTklUX0JFRk9SRV9BVVRIIiwiRFlOQU1JQ19MSU5LX05PVF9BQ1RJVkFURUQiLCJFTUFJTF9DSEFOR0VfTkVFRFNfVkVSSUZJQ0FUSU9OIiwiRU1BSUxfRVhJU1RTIiwiRU1VTEFUT1JfQ09ORklHX0ZBSUxFRCIsIkVYUElSRURfT09CX0NPREUiLCJFWFBJUkVEX1BPUFVQX1JFUVVFU1QiLCJJTlRFUk5BTF9FUlJPUiIsIklOVkFMSURfQVBJX0tFWSIsIklOVkFMSURfQVBQX0NSRURFTlRJQUwiLCJJTlZBTElEX0FQUF9JRCIsIklOVkFMSURfQVVUSCIsIklOVkFMSURfQVVUSF9FVkVOVCIsIklOVkFMSURfQ0VSVF9IQVNIIiwiSU5WQUxJRF9DT0RFIiwiSU5WQUxJRF9DT05USU5VRV9VUkkiLCJJTlZBTElEX0NPUkRPVkFfQ09ORklHVVJBVElPTiIsIklOVkFMSURfQ1VTVE9NX1RPS0VOIiwiSU5WQUxJRF9EWU5BTUlDX0xJTktfRE9NQUlOIiwiSU5WQUxJRF9FTUFJTCIsIklOVkFMSURfRU1VTEFUT1JfU0NIRU1FIiwiSU5WQUxJRF9JRFBfUkVTUE9OU0UiLCJJTlZBTElEX0xPR0lOX0NSRURFTlRJQUxTIiwiSU5WQUxJRF9NRVNTQUdFX1BBWUxPQUQiLCJJTlZBTElEX01GQV9TRVNTSU9OIiwiSU5WQUxJRF9PQVVUSF9DTElFTlRfSUQiLCJJTlZBTElEX09BVVRIX1BST1ZJREVSIiwiSU5WQUxJRF9PT0JfQ09ERSIsIklOVkFMSURfT1JJR0lOIiwiSU5WQUxJRF9QQVNTV09SRCIsIklOVkFMSURfUEVSU0lTVEVOQ0UiLCJJTlZBTElEX1BIT05FX05VTUJFUiIsIklOVkFMSURfUFJPVklERVJfSUQiLCJJTlZBTElEX1JFQ0lQSUVOVF9FTUFJTCIsIklOVkFMSURfU0VOREVSIiwiSU5WQUxJRF9TRVNTSU9OX0lORk8iLCJJTlZBTElEX1RFTkFOVF9JRCIsIk1GQV9JTkZPX05PVF9GT1VORCIsIk1GQV9SRVFVSVJFRCIsIk1JU1NJTkdfQU5EUk9JRF9QQUNLQUdFX05BTUUiLCJNSVNTSU5HX0FQUF9DUkVERU5USUFMIiwiTUlTU0lOR19BVVRIX0RPTUFJTiIsIk1JU1NJTkdfQ09ERSIsIk1JU1NJTkdfQ09OVElOVUVfVVJJIiwiTUlTU0lOR19JRlJBTUVfU1RBUlQiLCJNSVNTSU5HX0lPU19CVU5ETEVfSUQiLCJNSVNTSU5HX09SX0lOVkFMSURfTk9OQ0UiLCJNSVNTSU5HX01GQV9JTkZPIiwiTUlTU0lOR19NRkFfU0VTU0lPTiIsIk1JU1NJTkdfUEhPTkVfTlVNQkVSIiwiTUlTU0lOR19TRVNTSU9OX0lORk8iLCJNT0RVTEVfREVTVFJPWUVEIiwiTkVFRF9DT05GSVJNQVRJT04iLCJORVRXT1JLX1JFUVVFU1RfRkFJTEVEIiwiTlVMTF9VU0VSIiwiTk9fQVVUSF9FVkVOVCIsIk5PX1NVQ0hfUFJPVklERVIiLCJPUEVSQVRJT05fTk9UX0FMTE9XRUQiLCJPUEVSQVRJT05fTk9UX1NVUFBPUlRFRCIsIlBPUFVQX0JMT0NLRUQiLCJQT1BVUF9DTE9TRURfQllfVVNFUiIsIlBST1ZJREVSX0FMUkVBRFlfTElOS0VEIiwiUVVPVEFfRVhDRUVERUQiLCJSRURJUkVDVF9DQU5DRUxMRURfQllfVVNFUiIsIlJFRElSRUNUX09QRVJBVElPTl9QRU5ESU5HIiwiUkVKRUNURURfQ1JFREVOVElBTCIsIlNFQ09ORF9GQUNUT1JfQUxSRUFEWV9FTlJPTExFRCIsIlNFQ09ORF9GQUNUT1JfTElNSVRfRVhDRUVERUQiLCJURU5BTlRfSURfTUlTTUFUQ0giLCJUSU1FT1VUIiwiVE9LRU5fRVhQSVJFRCIsIlRPT19NQU5ZX0FUVEVNUFRTX1RSWV9MQVRFUiIsIlVOQVVUSE9SSVpFRF9ET01BSU4iLCJVTlNVUFBPUlRFRF9GSVJTVF9GQUNUT1IiLCJVTlNVUFBPUlRFRF9QRVJTSVNURU5DRSIsIlVOU1VQUE9SVEVEX1RFTkFOVF9PUEVSQVRJT04iLCJVTlZFUklGSUVEX0VNQUlMIiwiVVNFUl9DQU5DRUxMRUQiLCJVU0VSX0RFTEVURUQiLCJVU0VSX0RJU0FCTEVEIiwiVVNFUl9NSVNNQVRDSCIsIlVTRVJfU0lHTkVEX09VVCIsIldFQUtfUEFTU1dPUkQiLCJXRUJfU1RPUkFHRV9VTlNVUFBPUlRFRCIsIkFMUkVBRFlfSU5JVElBTElaRUQiLCJSRUNBUFRDSEFfTk9UX0VOQUJMRUQiLCJNSVNTSU5HX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX1RPS0VOIiwiSU5WQUxJRF9SRUNBUFRDSEFfQUNUSU9OIiwiTUlTU0lOR19DTElFTlRfVFlQRSIsIk1JU1NJTkdfUkVDQVBUQ0hBX1ZFUlNJT04iLCJJTlZBTElEX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRVFfVFlQRSIsIklOVkFMSURfSE9TVElOR19MSU5LX0RPTUFJTiIsImxvZ0NsaWVudCIsImltcG9ydF9sb2dnZXIiLCJMb2dnZXIiLCJfbG9nV2FybiIsIm1zZyIsImFyZ3MiLCJsb2dMZXZlbCIsIkxvZ0xldmVsIiwiV0FSTiIsIndhcm4iLCJpbXBvcnRfYXBwIiwiU0RLX1ZFUlNJT04iLCJfbG9nRXJyb3IiLCJFUlJPUiIsImVycm9yIiwiX2ZhaWwiLCJhdXRoT3JDb2RlIiwicmVzdCIsImNyZWF0ZUVycm9ySW50ZXJuYWwiLCJfY3JlYXRlRXJyb3IiLCJfZXJyb3JXaXRoQ3VzdG9tTWVzc2FnZSIsImF1dGgiLCJjb2RlIiwibWVzc2FnZSIsImVycm9yTWFwIiwiT2JqZWN0IiwiYXNzaWduIiwiZmFjdG9yeSIsImNyZWF0ZSIsImFwcE5hbWUiLCJuYW1lIiwiX3NlcnZlckFwcEN1cnJlbnRVc2VyT3BlcmF0aW9uTm90U3VwcG9ydGVkRXJyb3IiLCJfYXNzZXJ0SW5zdGFuY2VPZiIsIm9iamVjdCIsImluc3RhbmNlIiwiY29uc3RydWN0b3JJbnN0YW5jZSIsImNvbnN0cnVjdG9yIiwiZnVsbFBhcmFtcyIsInNsaWNlIiwiX2Vycm9yRmFjdG9yeSIsIl9hc3NlcnQiLCJhc3NlcnRpb24iLCJkZWJ1Z0ZhaWwiLCJmYWlsdXJlIiwiRXJyb3IiLCJkZWJ1Z0Fzc2VydCIsIl9nZXRDdXJyZW50VXJsIiwic2VsZiIsIl9hIiwibG9jYXRpb24iLCJocmVmIiwiX2lzSHR0cE9ySHR0cHMiLCJfZ2V0Q3VycmVudFNjaGVtZSIsInByb3RvY29sIiwiX2lzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiaXNCcm93c2VyRXh0ZW5zaW9uIiwiX2dldFVzZXJMYW5ndWFnZSIsIm5hdmlnYXRvckxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwibGFuZ3VhZ2UiLCJEZWxheSIsInNob3J0RGVsYXkiLCJsb25nRGVsYXkiLCJpc01vYmlsZSIsImlzTW9iaWxlQ29yZG92YSIsImlzUmVhY3ROYXRpdmUiLCJnZXQiLCJNYXRoIiwibWluIiwiX2VtdWxhdG9yVXJsIiwiY29uZmlnIiwicGF0aCIsImVtdWxhdG9yIiwidXJsIiwic3RhcnRzV2l0aCIsIkZldGNoUHJvdmlkZXIiLCJpbml0aWFsaXplIiwiZmV0Y2hJbXBsIiwiaGVhZGVyc0ltcGwiLCJyZXNwb25zZUltcGwiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJoZWFkZXJzIiwiSGVhZGVycyIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJTRVJWRVJfRVJST1JfTUFQIiwiREVGQVVMVF9BUElfVElNRU9VVF9NUyIsIl9hZGRUaWRJZk5lY2Vzc2FyeSIsInJlcXVlc3QiLCJ0ZW5hbnRJZCIsIl9wZXJmb3JtQXBpUmVxdWVzdCIsIm1ldGhvZCIsImN1c3RvbUVycm9yTWFwIiwiX3BlcmZvcm1GZXRjaFdpdGhFcnJvckhhbmRsaW5nIiwiYm9keSIsInBhcmFtcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInF1ZXJ5c3RyaW5nIiwia2V5IiwiYXBpS2V5IiwiX2dldEFkZGl0aW9uYWxIZWFkZXJzIiwibGFuZ3VhZ2VDb2RlIiwiZmV0Y2hBcmdzIiwiaXNDbG91ZGZsYXJlV29ya2VyIiwicmVmZXJyZXJQb2xpY3kiLCJfZ2V0RmluYWxUYXJnZXQiLCJhcGlIb3N0IiwiZmV0Y2hGbiIsIl9jYW5Jbml0RW11bGF0b3IiLCJuZXR3b3JrVGltZW91dCIsIk5ldHdvcmtUaW1lb3V0IiwiUHJvbWlzZSIsInJhY2UiLCJwcm9taXNlIiwiY2xlYXJOZXR3b3JrVGltZW91dCIsImpzb24iLCJfbWFrZVRhZ2dlZEVycm9yIiwib2siLCJlcnJvck1lc3NhZ2UiLCJzZXJ2ZXJFcnJvckNvZGUiLCJzZXJ2ZXJFcnJvck1lc3NhZ2UiLCJzcGxpdCIsImF1dGhFcnJvciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImUiLCJGaXJlYmFzZUVycm9yIiwiU3RyaW5nIiwiX3BlcmZvcm1TaWduSW5SZXF1ZXN0Iiwic2VydmVyUmVzcG9uc2UiLCJfc2VydmVyUmVzcG9uc2UiLCJob3N0IiwiYmFzZSIsImFwaVNjaGVtZSIsIl9wYXJzZUVuZm9yY2VtZW50U3RhdGUiLCJlbmZvcmNlbWVudFN0YXRlU3RyIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImVycm9yUGFyYW1zIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImN1c3RvbURhdGEiLCJfdG9rZW5SZXNwb25zZSIsImlzVjIiLCJncmVjYXB0Y2hhIiwiZ2V0UmVzcG9uc2UiLCJpc0VudGVycHJpc2UiLCJlbnRlcnByaXNlIiwiUmVjYXB0Y2hhQ29uZmlnIiwic2l0ZUtleSIsInJlY2FwdGNoYUVuZm9yY2VtZW50U3RhdGUiLCJyZWNhcHRjaGFLZXkiLCJnZXRQcm92aWRlckVuZm9yY2VtZW50U3RhdGUiLCJwcm92aWRlclN0ciIsImxlbmd0aCIsInByb3ZpZGVyIiwiZW5mb3JjZW1lbnRTdGF0ZSIsImlzUHJvdmlkZXJFbmFibGVkIiwiaXNBbnlQcm92aWRlckVuYWJsZWQiLCJnZXRSZWNhcHRjaGFQYXJhbXMiLCJyZWNhcHRjaGFTaXRlS2V5IiwiZ2V0UmVjYXB0Y2hhQ29uZmlnIiwiZGVsZXRlQWNjb3VudCIsImRlbGV0ZUxpbmtlZEFjY291bnRzIiwiZ2V0QWNjb3VudEluZm8iLCJ1dGNUaW1lc3RhbXBUb0RhdGVTdHJpbmciLCJ1dGNUaW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIk51bWJlciIsImlzTmFOIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwidXNlciIsImZvcmNlUmVmcmVzaCIsImdldE1vZHVsYXJJbnN0YW5jZSIsInVzZXJJbnRlcm5hbCIsInRva2VuIiwiY2xhaW1zIiwiX3BhcnNlVG9rZW4iLCJleHAiLCJhdXRoX3RpbWUiLCJpYXQiLCJmaXJlYmFzZSIsInNpZ25JblByb3ZpZGVyIiwiYXV0aFRpbWUiLCJzZWNvbmRzU3RyaW5nVG9NaWxsaXNlY29uZHMiLCJpc3N1ZWRBdFRpbWUiLCJleHBpcmF0aW9uVGltZSIsInNpZ25JblNlY29uZEZhY3RvciIsInNlY29uZHMiLCJhbGdvcml0aG0iLCJwYXlsb2FkIiwic2lnbmF0dXJlIiwiZGVjb2RlZCIsImJhc2U2NERlY29kZSIsInBhcnNlIiwidG9TdHJpbmciLCJfdG9rZW5FeHBpcmVzSW4iLCJwYXJzZWRUb2tlbiIsIl9sb2dvdXRJZkludmFsaWRhdGVkIiwiYnlwYXNzQXV0aFN0YXRlIiwiaXNVc2VySW52YWxpZGF0ZWQiLCJjdXJyZW50VXNlciIsIlByb2FjdGl2ZVJlZnJlc2giLCJpc1J1bm5pbmciLCJ0aW1lcklkIiwiZXJyb3JCYWNrb2ZmIiwiX3N0YXJ0Iiwic2NoZWR1bGUiLCJfc3RvcCIsImdldEludGVydmFsIiwid2FzRXJyb3IiLCJpbnRlcnZhbCIsImV4cFRpbWUiLCJzdHNUb2tlbk1hbmFnZXIiLCJub3ciLCJtYXgiLCJpdGVyYXRpb24iLCJVc2VyTWV0YWRhdGEiLCJjcmVhdGVkQXQiLCJsYXN0TG9naW5BdCIsIl9pbml0aWFsaXplVGltZSIsImxhc3RTaWduSW5UaW1lIiwiY3JlYXRpb25UaW1lIiwiX2NvcHkiLCJtZXRhZGF0YSIsInRvSlNPTiIsIl9yZWxvYWRXaXRob3V0U2F2aW5nIiwiaWRUb2tlbiIsInVzZXJzIiwiY29yZUFjY291bnQiLCJfbm90aWZ5UmVsb2FkTGlzdGVuZXIiLCJuZXdQcm92aWRlckRhdGEiLCJwcm92aWRlclVzZXJJbmZvIiwiZXh0cmFjdFByb3ZpZGVyRGF0YSIsInByb3ZpZGVyRGF0YSIsIm1lcmdlUHJvdmlkZXJEYXRhIiwib2xkSXNBbm9ueW1vdXMiLCJpc0Fub255bW91cyIsIm5ld0lzQW5vbnltb3VzIiwicGFzc3dvcmRIYXNoIiwidXBkYXRlcyIsInVpZCIsImxvY2FsSWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwicGhvdG9VcmwiLCJlbWFpbFZlcmlmaWVkIiwiX3BlcnNpc3RVc2VySWZDdXJyZW50IiwiX25vdGlmeUxpc3RlbmVyc0lmQ3VycmVudCIsIm9yaWdpbmFsIiwibmV3RGF0YSIsImRlZHVwZWQiLCJmaWx0ZXIiLCJvIiwic29tZSIsIm4iLCJwcm92aWRlcklkIiwicHJvdmlkZXJzIiwibWFwIiwiaW1wb3J0X3RzbGliIiwiX19yZXN0IiwicmF3SWQiLCJyZXF1ZXN0U3RzVG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJ0b2tlbkFwaUhvc3QiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNJbiIsImV4cGlyZXNfaW4iLCJyZWZyZXNoX3Rva2VuIiwicmV2b2tlVG9rZW4iLCJTdHNUb2tlbk1hbmFnZXIiLCJpc0V4cGlyZWQiLCJ1cGRhdGVGcm9tU2VydmVyUmVzcG9uc2UiLCJ1cGRhdGVUb2tlbnNBbmRFeHBpcmF0aW9uIiwidXBkYXRlRnJvbUlkVG9rZW4iLCJnZXRUb2tlbiIsInJlZnJlc2giLCJjbGVhclJlZnJlc2hUb2tlbiIsIm9sZFRva2VuIiwiZXhwaXJlc0luU2VjIiwiZnJvbUpTT04iLCJtYW5hZ2VyIiwiX2Fzc2lnbiIsIl9jbG9uZSIsIl9wZXJmb3JtUmVmcmVzaCIsImFzc2VydFN0cmluZ09yVW5kZWZpbmVkIiwiVXNlckltcGwiLCJvcHQiLCJwcm9hY3RpdmVSZWZyZXNoIiwicmVsb2FkVXNlckluZm8iLCJyZWxvYWRMaXN0ZW5lciIsInVzZXJJbmZvIiwibmV3VXNlciIsIl9vblJlbG9hZCIsImNhbGxiYWNrIiwiX3N0YXJ0UHJvYWN0aXZlUmVmcmVzaCIsIl9zdG9wUHJvYWN0aXZlUmVmcmVzaCIsIl91cGRhdGVUb2tlbnNJZk5lY2Vzc2FyeSIsInJlbG9hZDIiLCJ0b2tlbnNSZWZyZXNoZWQiLCJkZWxldGUiLCJfaXNGaXJlYmFzZVNlcnZlckFwcCIsImFwcCIsIl9yZWRpcmVjdEV2ZW50SWQiLCJfZnJvbUpTT04iLCJfYiIsIl9jIiwiX2QiLCJfZSIsIl9mIiwiX2ciLCJfaCIsInBsYWluT2JqZWN0VG9rZW5NYW5hZ2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2Zyb21JZFRva2VuUmVzcG9uc2UiLCJpZFRva2VuUmVzcG9uc2UiLCJfZnJvbUdldEFjY291bnRJbmZvUmVzcG9uc2UiLCJpbnN0YW5jZUNhY2hlIiwiTWFwIiwiX2dldEluc3RhbmNlIiwiY2xzIiwiRnVuY3Rpb24iLCJzZXQiLCJJbk1lbW9yeVBlcnNpc3RlbmNlIiwidHlwZSIsInN0b3JhZ2UiLCJfaXNBdmFpbGFibGUiLCJfc2V0IiwidmFsdWUiLCJfZ2V0IiwiX3JlbW92ZSIsIl9hZGRMaXN0ZW5lciIsIl9rZXkiLCJfbGlzdGVuZXIiLCJfcmVtb3ZlTGlzdGVuZXIiLCJfcGVyc2lzdGVuY2VLZXlOYW1lIiwiUGVyc2lzdGVuY2VVc2VyTWFuYWdlciIsInBlcnNpc3RlbmNlIiwidXNlcktleSIsIm5hbWUyIiwiZnVsbFVzZXJLZXkiLCJmdWxsUGVyc2lzdGVuY2VLZXkiLCJib3VuZEV2ZW50SGFuZGxlciIsIl9vblN0b3JhZ2VFdmVudCIsImJpbmQiLCJzZXRDdXJyZW50VXNlciIsImdldEN1cnJlbnRVc2VyIiwiYmxvYiIsInJlbW92ZUN1cnJlbnRVc2VyIiwic2F2ZVBlcnNpc3RlbmNlRm9yUmVkaXJlY3QiLCJuZXdQZXJzaXN0ZW5jZSIsInBlcnNpc3RlbmNlSGllcmFyY2h5IiwiYXZhaWxhYmxlUGVyc2lzdGVuY2VzIiwiYWxsIiwic2VsZWN0ZWRQZXJzaXN0ZW5jZSIsInVzZXJUb01pZ3JhdGUiLCJtaWdyYXRpb25IaWVyYXJjaHkiLCJwIiwiX3Nob3VsZEFsbG93TWlncmF0aW9uIiwiX2dldEJyb3dzZXJOYW1lIiwidXNlckFnZW50IiwidWEiLCJpbmNsdWRlcyIsIl9pc0lFTW9iaWxlIiwiX2lzRmlyZWZveCIsIl9pc0JsYWNrQmVycnkiLCJfaXNXZWJPUyIsIl9pc1NhZmFyaSIsIl9pc0Nocm9tZUlPUyIsIl9pc0FuZHJvaWQiLCJyZSIsIm1hdGNoZXMiLCJtYXRjaCIsImdldFVBIiwidGVzdCIsIl9pc0lPUyIsIl9pc0lPUzdPcjgiLCJfaXNJT1NTdGFuZGFsb25lIiwid2luZG93Iiwic3RhbmRhbG9uZSIsIl9pc0lFMTAiLCJpc0lFIiwiZG9jdW1lbnQiLCJkb2N1bWVudE1vZGUiLCJfaXNNb2JpbGVCcm93c2VyIiwiX2dldENsaWVudFZlcnNpb24iLCJjbGllbnRQbGF0Zm9ybSIsImZyYW1ld29ya3MiLCJyZXBvcnRlZFBsYXRmb3JtIiwicmVwb3J0ZWRGcmFtZXdvcmtzIiwiam9pbiIsIkF1dGhNaWRkbGV3YXJlUXVldWUiLCJxdWV1ZSIsInB1c2hDYWxsYmFjayIsIm9uQWJvcnQiLCJ3cmFwcGVkQ2FsbGJhY2siLCJyZXNvbHZlIiwicmVzdWx0IiwicHVzaCIsImluZGV4IiwicnVuTWlkZGxld2FyZSIsIm5leHRVc2VyIiwib25BYm9ydFN0YWNrIiwiYmVmb3JlU3RhdGVDYWxsYmFjayIsInJldmVyc2UiLCJvcmlnaW5hbE1lc3NhZ2UiLCJfZ2V0UGFzc3dvcmRQb2xpY3kiLCJNSU5JTVVNX01JTl9QQVNTV09SRF9MRU5HVEgiLCJQYXNzd29yZFBvbGljeUltcGwiLCJyZXNwb25zZU9wdGlvbnMiLCJjdXN0b21TdHJlbmd0aE9wdGlvbnMiLCJtaW5QYXNzd29yZExlbmd0aCIsIm1heFBhc3N3b3JkTGVuZ3RoIiwiY29udGFpbnNMb3dlcmNhc2VDaGFyYWN0ZXIiLCJjb250YWluc0xvd2VyY2FzZUxldHRlciIsImNvbnRhaW5zVXBwZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNVcHBlcmNhc2VMZXR0ZXIiLCJjb250YWluc051bWVyaWNDaGFyYWN0ZXIiLCJjb250YWluc05vbkFscGhhbnVtZXJpY0NoYXJhY3RlciIsImFsbG93ZWROb25BbHBoYW51bWVyaWNDaGFyYWN0ZXJzIiwiZm9yY2VVcGdyYWRlT25TaWduaW4iLCJzY2hlbWFWZXJzaW9uIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJpc1ZhbGlkIiwicGFzc3dvcmRQb2xpY3kiLCJ2YWxpZGF0ZVBhc3N3b3JkTGVuZ3RoT3B0aW9ucyIsInZhbGlkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zIiwibWVldHNNaW5QYXNzd29yZExlbmd0aCIsIm1lZXRzTWF4UGFzc3dvcmRMZW5ndGgiLCJ1cGRhdGVQYXNzd29yZENoYXJhY3Rlck9wdGlvbnNTdGF0dXNlcyIsInBhc3N3b3JkQ2hhciIsImkiLCJjaGFyQXQiLCJBdXRoSW1wbCIsImhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciIsImFwcENoZWNrU2VydmljZVByb3ZpZGVyIiwiZW11bGF0b3JDb25maWciLCJvcGVyYXRpb25zIiwiYXV0aFN0YXRlU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uIiwiaWRUb2tlblN1YnNjcmlwdGlvbiIsImJlZm9yZVN0YXRlUXVldWUiLCJyZWRpcmVjdFVzZXIiLCJpc1Byb2FjdGl2ZVJlZnJlc2hFbmFibGVkIiwiRVhQRUNURURfUEFTU1dPUkRfUE9MSUNZX1NDSEVNQV9WRVJTSU9OIiwiX2lzSW5pdGlhbGl6ZWQiLCJfZGVsZXRlZCIsIl9pbml0aWFsaXphdGlvblByb21pc2UiLCJfcG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiX2FnZW50UmVjYXB0Y2hhQ29uZmlnIiwiX3RlbmFudFJlY2FwdGNoYUNvbmZpZ3MiLCJfcHJvamVjdFBhc3N3b3JkUG9saWN5IiwiX3RlbmFudFBhc3N3b3JkUG9saWNpZXMiLCJsYXN0Tm90aWZpZWRVaWQiLCJzZXR0aW5ncyIsImFwcFZlcmlmaWNhdGlvbkRpc2FibGVkRm9yVGVzdGluZyIsImNsaWVudFZlcnNpb24iLCJzZGtDbGllbnRWZXJzaW9uIiwiX2luaXRpYWxpemVXaXRoUGVyc2lzdGVuY2UiLCJwb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJwZXJzaXN0ZW5jZU1hbmFnZXIiLCJfc2hvdWxkSW5pdFByb2FjdGl2ZWx5IiwiX2luaXRpYWxpemUiLCJpbml0aWFsaXplQ3VycmVudFVzZXIiLCJhc3NlcnRlZFBlcnNpc3RlbmNlIiwiX2N1cnJlbnRVc2VyIiwiX3VwZGF0ZUN1cnJlbnRVc2VyIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyRnJvbUlkVG9rZW4iLCJkaXJlY3RseVNldEN1cnJlbnRVc2VyIiwiZXJyIiwiY29uc29sZSIsImF1dGhJZFRva2VuIiwidGhlbiIsInByZXZpb3VzbHlTdG9yZWRVc2VyIiwiZnV0dXJlQ3VycmVudFVzZXIiLCJuZWVkc1RvY2hlY2tNaWRkbGV3YXJlIiwiYXV0aERvbWFpbiIsImdldE9ySW5pdFJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwicmVkaXJlY3RVc2VyRXZlbnRJZCIsInN0b3JlZFVzZXJFdmVudElkIiwidHJ5UmVkaXJlY3RTaWduSW4iLCJfb3ZlcnJpZGVSZWRpcmVjdFJlc3VsdCIsInJlbG9hZEFuZFNldEN1cnJlbnRVc2VyT3JDbGVhciIsInJlZGlyZWN0UmVzb2x2ZXIiLCJfY29tcGxldGVSZWRpcmVjdEZuIiwiX3NldFJlZGlyZWN0VXNlciIsIl9kZWxldGUiLCJ1c2VyRXh0ZXJuIiwic2tpcEJlZm9yZVN0YXRlQ2FsbGJhY2tzIiwibm90aWZ5QXV0aExpc3RlbmVycyIsInJlZGlyZWN0UGVyc2lzdGVuY2VNYW5hZ2VyIiwiX2dldFJlY2FwdGNoYUNvbmZpZyIsIl9nZXRQYXNzd29yZFBvbGljeUludGVybmFsIiwiX3VwZGF0ZVBhc3N3b3JkUG9saWN5IiwiX2dldFBlcnNpc3RlbmNlIiwiX3VwZGF0ZUVycm9yTWFwIiwibmV4dE9yT2JzZXJ2ZXIiLCJjb21wbGV0ZWQiLCJyZWdpc3RlclN0YXRlTGlzdGVuZXIiLCJhdXRoU3RhdGVSZWFkeSIsInVuc3Vic2NyaWJlIiwidG9rZW5UeXBlIiwicmVkaXJlY3RNYW5hZ2VyIiwicmVzb2x2ZXIiLCJfcmVkaXJlY3RQZXJzaXN0ZW5jZSIsIl9yZWRpcmVjdFVzZXJGb3JJZCIsImlkIiwibmV4dCIsImN1cnJlbnRVaWQiLCJzdWJzY3JpcHRpb24iLCJjYiIsImlzVW5zdWJzY3JpYmVkIiwiYWRkT2JzZXJ2ZXIiLCJhY3Rpb24iLCJfbG9nRnJhbWV3b3JrIiwiZnJhbWV3b3JrIiwic29ydCIsIl9nZXRGcmFtZXdvcmtzIiwib3B0aW9ucyIsImFwcElkIiwiaGVhcnRiZWF0c0hlYWRlciIsImdldEltbWVkaWF0ZSIsIm9wdGlvbmFsIiwiZ2V0SGVhcnRiZWF0c0hlYWRlciIsImFwcENoZWNrVG9rZW4iLCJfZ2V0QXBwQ2hlY2tUb2tlbiIsImFwcENoZWNrVG9rZW5SZXN1bHQiLCJfY2FzdEF1dGgiLCJvYnNlcnZlciIsImNyZWF0ZVN1YnNjcmliZSIsImV4dGVybmFsSlNQcm92aWRlciIsImxvYWRKUyIsInJlY2FwdGNoYVYyU2NyaXB0IiwicmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdCIsImdhcGlTY3JpcHQiLCJfc2V0RXh0ZXJuYWxKU1Byb3ZpZGVyIiwiX2xvYWRKUyIsIl9yZWNhcHRjaGFWMlNjcmlwdFVybCIsIl9yZWNhcHRjaGFFbnRlcnByaXNlU2NyaXB0VXJsIiwiX2dhcGlTY3JpcHRVcmwiLCJfZ2VuZXJhdGVDYWxsYmFja05hbWUiLCJwcmVmaXgiLCJmbG9vciIsInJhbmRvbSIsIl9TT0xWRV9USU1FX01TIiwiX0VYUElSQVRJT05fVElNRV9NUyIsIl9XSURHRVRfSURfU1RBUlQiLCJNb2NrUmVDYXB0Y2hhIiwiY291bnRlciIsIl93aWRnZXRzIiwicmVuZGVyIiwiY29udGFpbmVyIiwicGFyYW1ldGVycyIsIk1vY2tXaWRnZXQiLCJyZXNldCIsIm9wdFdpZGdldElkIiwiZXhlY3V0ZSIsIk1vY2tHcmVDQVBUQ0hBVG9wTGV2ZWwiLCJNb2NrR3JlQ0FQVENIQSIsInJlYWR5IiwiX3NpdGVLZXkiLCJfb3B0aW9ucyIsIl9jb250YWluZXIiLCJfcGFyYW1ldGVycyIsImNvbnRhaW5lck9ySWQiLCJkZWxldGVkIiwicmVzcG9uc2VUb2tlbiIsImNsaWNrSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiaXNWaXNpYmxlIiwic2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja0lmRGVsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZVJhbmRvbUFscGhhTnVtZXJpY1N0cmluZyIsImV4cGlyZWRDYWxsYmFjayIsImxlbiIsImNoYXJzIiwiYWxsb3dlZENoYXJzIiwiUkVDQVBUQ0hBX0VOVEVSUFJJU0VfVkVSSUZJRVJfVFlQRSIsIkZBS0VfVE9LRU4iLCJSZWNhcHRjaGFFbnRlcnByaXNlVmVyaWZpZXIiLCJhdXRoRXh0ZXJuIiwidmVyaWZ5IiwicmV0cmlldmVTaXRlS2V5IiwiY2xpZW50VHlwZSIsInZlcnNpb24iLCJjYXRjaCIsInJldHJpZXZlUmVjYXB0Y2hhVG9rZW4iLCJtb2NrUmVjYXB0Y2hhIiwiaW5qZWN0UmVjYXB0Y2hhRmllbGRzIiwiaXNDYXB0Y2hhUmVzcCIsImlzRmFrZVRva2VuIiwidmVyaWZpZXIiLCJjYXB0Y2hhUmVzcG9uc2UiLCJuZXdSZXF1ZXN0IiwicGhvbmVFbnJvbGxtZW50SW5mbyIsInJlY2FwdGNoYVRva2VuIiwicGhvbmVTaWduSW5JbmZvIiwiaGFuZGxlUmVjYXB0Y2hhRmxvdyIsImF1dGhJbnN0YW5jZSIsImFjdGlvbk5hbWUiLCJhY3Rpb25NZXRob2QiLCJyZWNhcHRjaGFBdXRoUHJvdmlkZXIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYSIsImxvZyIsIl9hMiIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhRmllbGRzIiwiX2luaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJhdXRoSW50ZXJuYWwiLCJkZXBzIiwiX2dldFByb3ZpZGVyIiwiaXNJbml0aWFsaXplZCIsImF1dGgyIiwiaW5pdGlhbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiZGVlcEVxdWFsIiwiX2luaXRpYWxpemVBdXRoSW5zdGFuY2UiLCJoaWVyYXJjaHkiLCJkaXNhYmxlV2FybmluZ3MiLCJleHRyYWN0UHJvdG9jb2wiLCJwb3J0IiwiZXh0cmFjdEhvc3RBbmRQb3J0IiwicG9ydFN0ciIsImZyZWV6ZSIsImVtaXRFbXVsYXRvcldhcm5pbmciLCJwcm90b2NvbEVuZCIsImluZGV4T2YiLCJzdWJzdHIiLCJhdXRob3JpdHkiLCJleGVjIiwiaG9zdEFuZFBvcnQiLCJwb3AiLCJicmFja2V0ZWRJUHY2IiwicGFyc2VQb3J0IiwiYXR0YWNoQmFubmVyIiwiZWwiLCJjcmVhdGVFbGVtZW50Iiwic3R5Iiwic3R5bGUiLCJpbm5lclRleHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3R0b20iLCJsZWZ0IiwibWFyZ2luIiwiekluZGV4IiwidGV4dEFsaWduIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJpbmZvIiwicmVhZHlTdGF0ZSIsInNpZ25Jbk1ldGhvZCIsIl9nZXRJZFRva2VuUmVzcG9uc2UiLCJfYXV0aCIsIl9saW5rVG9JZFRva2VuIiwiX2lkVG9rZW4iLCJfZ2V0UmVhdXRoZW50aWNhdGlvblJlc29sdmVyIiwicmVzZXRQYXNzd29yZCIsInVwZGF0ZUVtYWlsUGFzc3dvcmQiLCJsaW5rRW1haWxQYXNzd29yZCIsImFwcGx5QWN0aW9uQ29kZSQxIiwic2lnbkluV2l0aFBhc3N3b3JkIiwic2VuZE9vYkNvZGUiLCJzZW5kRW1haWxWZXJpZmljYXRpb24kMSIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwkMSIsInNlbmRTaWduSW5MaW5rVG9FbWFpbCQxIiwidmVyaWZ5QW5kQ2hhbmdlRW1haWwiLCJzaWduSW5XaXRoRW1haWxMaW5rJDEiLCJzaWduSW5XaXRoRW1haWxMaW5rRm9yTGlua2luZyIsIl9lbWFpbCIsIl9wYXNzd29yZCIsIl90ZW5hbnRJZCIsIl9mcm9tRW1haWxBbmRQYXNzd29yZCIsIl9mcm9tRW1haWxBbmRDb2RlIiwib29iQ29kZSIsIm9iaiIsInJldHVyblNlY3VyZVRva2VuIiwic2lnbkluV2l0aElkcCIsIklEUF9SRVFVRVNUX1VSSSQxIiwicGVuZGluZ1Rva2VuIiwiX2Zyb21QYXJhbXMiLCJjcmVkIiwibm9uY2UiLCJvYXV0aFRva2VuIiwib2F1dGhUb2tlblNlY3JldCIsInNlY3JldCIsImJ1aWxkUmVxdWVzdCIsImF1dG9DcmVhdGUiLCJyZXF1ZXN0VXJpIiwicG9zdEJvZHkiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlIiwic2lnbkluV2l0aFBob25lTnVtYmVyJDEiLCJsaW5rV2l0aFBob25lTnVtYmVyJDEiLCJ0ZW1wb3JhcnlQcm9vZiIsIlZFUklGWV9QSE9ORV9OVU1CRVJfRk9SX0VYSVNUSU5HX0VSUk9SX01BUF8iLCJ2ZXJpZnlQaG9uZU51bWJlckZvckV4aXN0aW5nIiwiYXBpUmVxdWVzdCIsIm9wZXJhdGlvbiIsIl9mcm9tVmVyaWZpY2F0aW9uIiwidmVyaWZpY2F0aW9uSWQiLCJ2ZXJpZmljYXRpb25Db2RlIiwiX2Zyb21Ub2tlblJlc3BvbnNlIiwiX21ha2VWZXJpZmljYXRpb25SZXF1ZXN0Iiwic2Vzc2lvbkluZm8iLCJwYXJzZU1vZGUiLCJtb2RlIiwicGFyc2VEZWVwTGluayIsImxpbmsiLCJxdWVyeXN0cmluZ0RlY29kZSIsImV4dHJhY3RRdWVyeXN0cmluZyIsImRvdWJsZURlZXBMaW5rIiwiaU9TRGVlcExpbmsiLCJpT1NEb3VibGVEZWVwTGluayIsImFjdGlvbkxpbmsiLCJzZWFyY2hQYXJhbXMiLCJjb250aW51ZVVybCIsInBhcnNlTGluayIsIlBST1ZJREVSX0lEIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxXaXRoTGluayIsImVtYWlsTGluayIsImFjdGlvbkNvZGVVcmwiLCJFTUFJTF9QQVNTV09SRF9TSUdOX0lOX01FVEhPRCIsIkVNQUlMX0xJTktfU0lHTl9JTl9NRVRIT0QiLCJGZWRlcmF0ZWRBdXRoUHJvdmlkZXIiLCJkZWZhdWx0TGFuZ3VhZ2VDb2RlIiwiY3VzdG9tUGFyYW1ldGVycyIsInNldERlZmF1bHRMYW5ndWFnZSIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJjdXN0b21PQXV0aFBhcmFtZXRlcnMiLCJnZXRDdXN0b21QYXJhbWV0ZXJzIiwiQmFzZU9BdXRoUHJvdmlkZXIiLCJzY29wZXMiLCJhZGRTY29wZSIsInNjb3BlIiwiZ2V0U2NvcGVzIiwiY3JlZGVudGlhbEZyb21KU09OIiwiX2NyZWRlbnRpYWwiLCJyYXdOb25jZSIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwidXNlckNyZWRlbnRpYWwiLCJvYXV0aENyZWRlbnRpYWxGcm9tVGFnZ2VkT2JqZWN0IiwiY3JlZGVudGlhbEZyb21FcnJvciIsInRva2VuUmVzcG9uc2UiLCJvYXV0aElkVG9rZW4iLCJvYXV0aEFjY2Vzc1Rva2VuIiwiRkFDRUJPT0tfU0lHTl9JTl9NRVRIT0QiLCJjcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIkdPT0dMRV9TSUdOX0lOX01FVEhPRCIsIkdJVEhVQl9TSUdOX0lOX01FVEhPRCIsIklEUF9SRVFVRVNUX1VSSSIsIlNBTUxBdXRoQ3JlZGVudGlhbCIsIl9jcmVhdGUiLCJTQU1MX1BST1ZJREVSX1BSRUZJWCIsInNhbWxDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsIlRXSVRURVJfU0lHTl9JTl9NRVRIT0QiLCJzaWduVXAiLCJVc2VyQ3JlZGVudGlhbEltcGwiLCJvcGVyYXRpb25UeXBlIiwicHJvdmlkZXJJZEZvclJlc3BvbnNlIiwidXNlckNyZWQiLCJfZm9yT3BlcmF0aW9uIiwiTXVsdGlGYWN0b3JFcnJvciIsInNldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiX2Zyb21FcnJvckFuZE9wZXJhdGlvbiIsIl9wcm9jZXNzQ3JlZGVudGlhbFNhdmluZ01mYUNvbnRleHRJZk5lY2Vzc2FyeSIsImlkVG9rZW5Qcm92aWRlciIsInByb3ZpZGVyRGF0YUFzTmFtZXMiLCJTZXQiLCJwaWQiLCJfYXNzZXJ0TGlua2VkU3RhdHVzIiwiZGVsZXRlUHJvdmlkZXIiLCJwcm92aWRlcnNMZWZ0IiwicGQiLCJoYXMiLCJfbGluayQxIiwiZXhwZWN0ZWQiLCJwcm92aWRlcklkcyIsIl9yZWF1dGhlbnRpY2F0ZSIsInBhcnNlZCIsInN1YiIsIl9zaWduSW5XaXRoQ3JlZGVudGlhbCIsInNpZ25JbldpdGhDdXN0b21Ub2tlbiQxIiwiY3VzdG9tVG9rZW4iLCJNdWx0aUZhY3RvckluZm9JbXBsIiwiZmFjdG9ySWQiLCJtZmFFbnJvbGxtZW50SWQiLCJlbnJvbGxtZW50VGltZSIsImVucm9sbGVkQXQiLCJfZnJvbVNlcnZlclJlc3BvbnNlIiwiZW5yb2xsbWVudCIsIlBob25lTXVsdGlGYWN0b3JJbmZvSW1wbCIsIlRvdHBNdWx0aUZhY3RvckluZm9JbXBsIiwicGhvbmVJbmZvIiwiX3NldEFjdGlvbkNvZGVTZXR0aW5nc09uUmVxdWVzdCIsImFjdGlvbkNvZGVTZXR0aW5ncyIsImR5bmFtaWNMaW5rRG9tYWluIiwibGlua0RvbWFpbiIsImNhbkhhbmRsZUNvZGVJbkFwcCIsImhhbmRsZUNvZGVJbkFwcCIsImlPUyIsImJ1bmRsZUlkIiwiaU9TQnVuZGxlSWQiLCJhbmRyb2lkIiwicGFja2FnZU5hbWUiLCJhbmRyb2lkSW5zdGFsbEFwcCIsImluc3RhbGxBcHAiLCJhbmRyb2lkTWluaW11bVZlcnNpb25Db2RlIiwibWluaW11bVZlcnNpb24iLCJhbmRyb2lkUGFja2FnZU5hbWUiLCJyZWNhY2hlUGFzc3dvcmRQb2xpY3kiLCJyZXF1ZXN0VHlwZSIsIm5ld1Bhc3N3b3JkIiwiYXV0aE1vZHVsYXIiLCJuZXdFbWFpbCIsIm1mYUluZm8iLCJtdWx0aUZhY3RvckluZm8iLCJkYXRhIiwicHJldmlvdXNFbWFpbCIsInNpZ25VcFJlc3BvbnNlIiwic2V0QWN0aW9uQ29kZVNldHRpbmdzIiwicmVxdWVzdDIiLCJhY3Rpb25Db2RlU2V0dGluZ3MyIiwiY3JlYXRlQXV0aFVyaSIsImNvbnRpbnVlVXJpIiwiaWRlbnRpZmllciIsInNpZ25pbk1ldGhvZHMiLCJ1cGRhdGVQcm9maWxlJDEiLCJwcm9maWxlUmVxdWVzdCIsInBhc3N3b3JkUHJvdmlkZXIiLCJmaW5kIiwidXBkYXRlRW1haWxPclBhc3N3b3JkIiwicHJvZmlsZSIsInJhd1VzZXJJbmZvIiwiaXNOZXdVc2VyIiwia2luZCIsImZpbHRlcmVkUHJvdmlkZXJJZCIsIkdlbmVyaWNBZGRpdGlvbmFsVXNlckluZm8iLCJGYWNlYm9va0FkZGl0aW9uYWxVc2VySW5mbyIsIkdpdGh1YkFkZGl0aW9uYWxVc2VySW5mbyIsIkdvb2dsZUFkZGl0aW9uYWxVc2VySW5mbyIsIlR3aXR0ZXJBZGRpdGlvbmFsVXNlckluZm8iLCJzY3JlZW5OYW1lIiwiRmVkZXJhdGVkQWRkaXRpb25hbFVzZXJJbmZvV2l0aFVzZXJuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsIk11bHRpRmFjdG9yU2Vzc2lvbkltcGwiLCJfZnJvbUlkdG9rZW4iLCJfZnJvbU1mYVBlbmRpbmdDcmVkZW50aWFsIiwibWZhUGVuZGluZ0NyZWRlbnRpYWwiLCJtdWx0aUZhY3RvclNlc3Npb24iLCJwZW5kaW5nQ3JlZGVudGlhbCIsIk11bHRpRmFjdG9yUmVzb2x2ZXJJbXBsIiwic2Vzc2lvbiIsImhpbnRzIiwic2lnbkluUmVzb2x2ZXIiLCJfZnJvbUVycm9yIiwibWZhUmVzcG9uc2UiLCJfcHJvY2VzcyIsInJlc29sdmVTaWduSW4iLCJhc3NlcnRpb25FeHRlcm4iLCJlcnJvckludGVybmFsIiwic3RhcnRFbnJvbGxQaG9uZU1mYSIsImZpbmFsaXplRW5yb2xsUGhvbmVNZmEiLCJzdGFydEVucm9sbFRvdHBNZmEiLCJmaW5hbGl6ZUVucm9sbFRvdHBNZmEiLCJ3aXRoZHJhd01mYSIsIk11bHRpRmFjdG9yVXNlckltcGwiLCJlbnJvbGxlZEZhY3RvcnMiLCJfZnJvbVVzZXIiLCJnZXRTZXNzaW9uIiwiZW5yb2xsIiwiZmluYWxpemVNZmFSZXNwb25zZSIsInVuZW5yb2xsIiwiaW5mb09yVWlkIiwibXVsdGlGYWN0b3JVc2VyQ2FjaGUiLCJXZWFrTWFwIiwidXNlck1vZHVsYXIiLCJTVE9SQUdFX0FWQUlMQUJMRV9LRVkiLCJCcm93c2VyUGVyc2lzdGVuY2VDbGFzcyIsInN0b3JhZ2VSZXRyaWV2ZXIiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJfUE9MTElOR19JTlRFUlZBTF9NUyQxIiwiSUUxMF9MT0NBTF9TVE9SQUdFX1NZTkNfREVMQVkiLCJCcm93c2VyTG9jYWxQZXJzaXN0ZW5jZSIsImxvY2FsU3RvcmFnZSIsImV2ZW50IiwicG9sbCIsIm9uU3RvcmFnZUV2ZW50IiwibGlzdGVuZXJzIiwibG9jYWxDYWNoZSIsInBvbGxUaW1lciIsImZhbGxiYWNrVG9Qb2xsaW5nIiwiZm9yQWxsQ2hhbmdlZEtleXMiLCJrZXlzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImtleTIiLCJfb2xkVmFsdWUiLCJub3RpZnlMaXN0ZW5lcnMiLCJkZXRhY2hMaXN0ZW5lciIsInN0b3BQb2xsaW5nIiwidHJpZ2dlckxpc3RlbmVycyIsInN0b3JlZFZhbHVlMiIsInN0b3JlZFZhbHVlIiwibGlzdGVuZXIiLCJmcm9tIiwic3RhcnRQb2xsaW5nIiwic2V0SW50ZXJ2YWwiLCJTdG9yYWdlRXZlbnQiLCJjbGVhckludGVydmFsIiwiYXR0YWNoTGlzdGVuZXIiLCJCcm93c2VyU2Vzc2lvblBlcnNpc3RlbmNlIiwic2Vzc2lvblN0b3JhZ2UiLCJfYWxsU2V0dGxlZCIsInByb21pc2VzIiwiZnVsZmlsbGVkIiwicmVhc29uIiwiUmVjZWl2ZXIiLCJldmVudFRhcmdldCIsImhhbmRsZXJzTWFwIiwiaGFuZGxlRXZlbnQiLCJleGlzdGluZ0luc3RhbmNlIiwicmVjZWl2ZXJzIiwicmVjZWl2ZXIiLCJpc0xpc3RlbmluZ3RvIiwibmV3SW5zdGFuY2UiLCJtZXNzYWdlRXZlbnQiLCJldmVudElkIiwiZXZlbnRUeXBlIiwiaGFuZGxlcnMiLCJwb3J0cyIsInBvc3RNZXNzYWdlIiwiaGFuZGxlciIsIm9yaWdpbiIsIl9zdWJzY3JpYmUiLCJldmVudEhhbmRsZXIiLCJfdW5zdWJzY3JpYmUiLCJfZ2VuZXJhdGVFdmVudElkIiwiZGlnaXRzIiwiU2VuZGVyIiwidGFyZ2V0IiwicmVtb3ZlTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwib25NZXNzYWdlIiwiY2xvc2UiLCJfc2VuZCIsInRpbWVvdXQiLCJNZXNzYWdlQ2hhbm5lbCIsImNvbXBsZXRpb25UaW1lciIsInN0YXJ0IiwiYWNrVGltZXIiLCJwb3J0MiIsImZpbmFsbHkiLCJfd2luZG93IiwiX3NldFdpbmRvd0xvY2F0aW9uIiwiX2lzV29ya2VyIiwiX2dldEFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0cmF0aW9uIiwiYWN0aXZlIiwiX2dldFNlcnZpY2VXb3JrZXJDb250cm9sbGVyIiwiY29udHJvbGxlciIsIl9nZXRXb3JrZXJHbG9iYWxTY29wZSIsIkRCX05BTUUiLCJEQl9WRVJTSU9OIiwiREJfT0JKRUNUU1RPUkVfTkFNRSIsIkRCX0RBVEFfS0VZUEFUSCIsIkRCUHJvbWlzZSIsInRvUHJvbWlzZSIsImdldE9iamVjdFN0b3JlIiwiZGIiLCJpc1JlYWRXcml0ZSIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJfZGVsZXRlRGF0YWJhc2UiLCJpbmRleGVkREIiLCJkZWxldGVEYXRhYmFzZSIsIl9vcGVuRGF0YWJhc2UiLCJvcGVuIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiX3B1dE9iamVjdCIsInB1dCIsImdldE9iamVjdCIsIl9kZWxldGVPYmplY3QiLCJfUE9MTElOR19JTlRFUlZBTF9NUyIsIl9UUkFOU0FDVElPTl9SRVRSWV9DT1VOVCIsIkluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJwZW5kaW5nV3JpdGVzIiwic2VuZGVyIiwic2VydmljZVdvcmtlclJlY2VpdmVyQXZhaWxhYmxlIiwiYWN0aXZlU2VydmljZVdvcmtlciIsIl93b3JrZXJJbml0aWFsaXphdGlvblByb21pc2UiLCJpbml0aWFsaXplU2VydmljZVdvcmtlck1lc3NhZ2luZyIsIl9vcGVuRGIiLCJfd2l0aFJldHJpZXMiLCJvcCIsIm51bUF0dGVtcHRzIiwiaW5pdGlhbGl6ZVJlY2VpdmVyIiwiaW5pdGlhbGl6ZVNlbmRlciIsIl9vcmlnaW4iLCJfcG9sbCIsImtleVByb2Nlc3NlZCIsIl9kYXRhIiwicmVzdWx0cyIsIm5vdGlmeVNlcnZpY2VXb3JrZXIiLCJfd2l0aFBlbmRpbmdXcml0ZSIsIndyaXRlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsImtleXNJblJlc3VsdCIsImZiYXNlX2tleSIsImxvY2FsS2V5Iiwic3RhcnRTaWduSW5QaG9uZU1mYSIsImZpbmFsaXplU2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblRvdHBNZmEiLCJfSlNMT0FEX0NBTExCQUNLIiwiTkVUV09SS19USU1FT1VUX0RFTEFZIiwiUmVDYXB0Y2hhTG9hZGVySW1wbCIsImhvc3RMYW5ndWFnZSIsImxpYnJhcnlTZXBhcmF0ZWx5TG9hZGVkIiwibG9hZCIsImhsIiwiaXNIb3N0TGFuZ3VhZ2VWYWxpZCIsInNob3VsZFJlc29sdmVJbW1lZGlhdGVseSIsInJlY2FwdGNoYSIsIndpZGdldElkIiwib25sb2FkIiwiY2xlYXJlZE9uZUluc3RhbmNlIiwiTW9ja1JlQ2FwdGNoYUxvYWRlckltcGwiLCJSRUNBUFRDSEFfVkVSSUZJRVJfVFlQRSIsIkRFRkFVTFRfUEFSQU1TIiwidGhlbWUiLCJkZXN0cm95ZWQiLCJ0b2tlbkNoYW5nZUxpc3RlbmVycyIsInJlbmRlclByb21pc2UiLCJpc0ludmlzaWJsZSIsIm1ha2VUb2tlbkNhbGxiYWNrIiwiX3JlY2FwdGNoYUxvYWRlciIsInZhbGlkYXRlU3RhcnRpbmdTdGF0ZSIsImFzc2VydE5vdERlc3Ryb3llZCIsImdldEFzc2VydGVkUmVjYXB0Y2hhIiwidG9rZW5DaGFuZ2UiLCJtYWtlUmVuZGVyUHJvbWlzZSIsIl9yZXNldCIsImNsZWFyIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQ2hpbGQiLCJzaXRla2V5IiwiaGFzQ2hpbGROb2RlcyIsImV4aXN0aW5nIiwiZ2xvYmFsRnVuYyIsImluaXQiLCJndWFyYW50ZWVkRW1wdHkiLCJkb21SZWFkeSIsIkNvbmZpcm1hdGlvblJlc3VsdEltcGwiLCJvbkNvbmZpcm1hdGlvbiIsImNvbmZpcm0iLCJhdXRoQ3JlZGVudGlhbCIsImFwcFZlcmlmaWVyIiwiX3ZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVJbmZvT3B0aW9ucyIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVxdWVzdCIsInN0YXJ0RW5yb2xsUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInJlcXVlc3RXaXRoUmVjYXB0Y2hhVjIiLCJpbmplY3RSZWNhcHRjaGFWMlRva2VuIiwic3RhcnRQaG9uZU1mYUVucm9sbG1lbnRSZXNwb25zZSIsInBob25lU2Vzc2lvbkluZm8iLCJtdWx0aUZhY3RvckhpbnQiLCJtdWx0aUZhY3RvclVpZCIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXF1ZXN0Iiwic3RhcnRTaWduSW5QaG9uZU1mYUFjdGlvbkNhbGxiYWNrIiwic3RhcnRQaG9uZU1mYVNpZ25JblJlc3BvbnNlIiwicGhvbmVSZXNwb25zZUluZm8iLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVxdWVzdCIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVBY3Rpb25DYWxsYmFjayIsInNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVSZXNwb25zZSIsInJlY2FwdGNoYVYyVmVyaWZpZXIiLCJyZWNhcHRjaGFWMlRva2VuIiwicmVjYXB0Y2hhVmVyc2lvbiIsInZlcmlmeVBob25lTnVtYmVyIiwicGhvbmVPcHRpb25zIiwiYXBwbGljYXRpb25WZXJpZmllciIsIlBIT05FX1NJR05fSU5fTUVUSE9EIiwiX3dpdGhEZWZhdWx0UmVzb2x2ZXIiLCJyZXNvbHZlck92ZXJyaWRlIiwiSWRwQ3JlZGVudGlhbCIsIl9idWlsZElkcFJlcXVlc3QiLCJzZXNzaW9uSWQiLCJyZXR1cm5JZHBDcmVkZW50aWFsIiwiX3NpZ25JbiIsIl9yZWF1dGgiLCJfbGluayIsIkFic3RyYWN0UG9wdXBSZWRpcmVjdE9wZXJhdGlvbiIsInBlbmRpbmdQcm9taXNlIiwiZXZlbnRNYW5hZ2VyIiwib25FeGVjdXRpb24iLCJyZWdpc3RlckNvbnN1bWVyIiwib25BdXRoRXZlbnQiLCJ1cmxSZXNwb25zZSIsImdldElkcFRhc2siLCJvbkVycm9yIiwidW5yZWdpc3RlckFuZENsZWFuVXAiLCJ1bnJlZ2lzdGVyQ29uc3VtZXIiLCJjbGVhblVwIiwiX1BPTExfV0lORE9XX0NMT1NFX1RJTUVPVVQiLCJyZXNvbHZlckludGVybmFsIiwiUG9wdXBPcGVyYXRpb24iLCJleGVjdXRlTm90TnVsbCIsImF1dGhXaW5kb3ciLCJwb2xsSWQiLCJjdXJyZW50UG9wdXBBY3Rpb24iLCJjYW5jZWwiLCJfb3BlblBvcHVwIiwiYXNzb2NpYXRlZEV2ZW50IiwiX29yaWdpblZhbGlkYXRpb24iLCJfaXNJZnJhbWVXZWJTdG9yYWdlU3VwcG9ydGVkIiwiaXNTdXBwb3J0ZWQiLCJwb2xsVXNlckNhbmNlbGxhdGlvbiIsImNsb3NlZCIsIlBFTkRJTkdfUkVESVJFQ1RfS0VZIiwicmVkaXJlY3RPdXRjb21lTWFwIiwiUmVkaXJlY3RBY3Rpb24iLCJyZWFkeU91dGNvbWUiLCJoYXNQZW5kaW5nUmVkaXJlY3QiLCJfZ2V0QW5kQ2xlYXJQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJwZW5kaW5nUmVkaXJlY3RLZXkiLCJyZXNvbHZlclBlcnNpc3RlbmNlIiwiX3NldFBlbmRpbmdSZWRpcmVjdFN0YXR1cyIsIl9jbGVhclJlZGlyZWN0T3V0Y29tZXMiLCJfc2lnbkluV2l0aFJlZGlyZWN0IiwiX29wZW5SZWRpcmVjdCIsIl9yZWF1dGhlbnRpY2F0ZVdpdGhSZWRpcmVjdCIsInByZXBhcmVVc2VyRm9yUmVkaXJlY3QiLCJfbGlua1dpdGhSZWRpcmVjdCIsIl9nZXRSZWRpcmVjdFJlc3VsdCIsInJlc29sdmVyRXh0ZXJuIiwiRVZFTlRfRFVQTElDQVRJT05fQ0FDSEVfRFVSQVRJT05fTVMiLCJBdXRoRXZlbnRNYW5hZ2VyIiwiY2FjaGVkRXZlbnRVaWRzIiwiY29uc3VtZXJzIiwicXVldWVkUmVkaXJlY3RFdmVudCIsImhhc0hhbmRsZWRQb3RlbnRpYWxSZWRpcmVjdCIsImxhc3RQcm9jZXNzZWRFdmVudFRpbWUiLCJhdXRoRXZlbnRDb25zdW1lciIsImlzRXZlbnRGb3JDb25zdW1lciIsInNlbmRUb0NvbnN1bWVyIiwic2F2ZUV2ZW50VG9DYWNoZSIsIm9uRXZlbnQiLCJoYXNFdmVudEJlZW5IYW5kbGVkIiwiaGFuZGxlZCIsImNvbnN1bWVyIiwiaXNSZWRpcmVjdEV2ZW50IiwiaXNOdWxsUmVkaXJlY3RFdmVudCIsImV2ZW50SWRNYXRjaGVzIiwiZXZlbnRVaWQiLCJ2IiwiX2dldFByb2plY3RDb25maWciLCJJUF9BRERSRVNTX1JFR0VYIiwiSFRUUF9SRUdFWCIsIl92YWxpZGF0ZU9yaWdpbiIsImF1dGhvcml6ZWREb21haW5zIiwiZG9tYWluIiwibWF0Y2hEb21haW4iLCJjdXJyZW50VXJsIiwiaG9zdG5hbWUiLCJVUkwiLCJjZVVybCIsImVzY2FwZWREb21haW5QYXR0ZXJuIiwiUmVnRXhwIiwiTkVUV09SS19USU1FT1VUIiwicmVzZXRVbmxvYWRlZEdhcGlNb2R1bGVzIiwiYmVhY29uIiwiX19fanNsIiwiSCIsImhpbnQiLCJyIiwiTCIsIkNQIiwibG9hZEdhcGkiLCJsb2FkR2FwaUlmcmFtZSIsImdhcGkiLCJpZnJhbWVzIiwiZ2V0Q29udGV4dCIsIm9udGltZW91dCIsIklmcmFtZSIsImNiTmFtZSIsImNhY2hlZEdBcGlMb2FkZXIiLCJfbG9hZEdhcGkiLCJQSU5HX1RJTUVPVVQiLCJJRlJBTUVfUEFUSCIsIkVNVUxBVEVEX0lGUkFNRV9QQVRIIiwiSUZSQU1FX0FUVFJJQlVURVMiLCJ0b3AiLCJoZWlnaHQiLCJ0YWJpbmRleCIsIkVJRF9GUk9NX0FQSUhPU1QiLCJnZXRJZnJhbWVVcmwiLCJlaWQiLCJmdyIsIl9vcGVuSWZyYW1lIiwiY29udGV4dCIsImdhcGkyIiwid2hlcmUiLCJtZXNzYWdlSGFuZGxlcnNGaWx0ZXIiLCJDUk9TU19PUklHSU5fSUZSQU1FU19GSUxURVIiLCJhdHRyaWJ1dGVzIiwiZG9udGNsZWFyIiwiaWZyYW1lIiwicmVzdHlsZSIsInNldEhpZGVPbkxlYXZlIiwibmV0d29ya0Vycm9yIiwibmV0d29ya0Vycm9yVGltZXIiLCJjbGVhclRpbWVyQW5kUmVzb2x2ZSIsInBpbmciLCJCQVNFX1BPUFVQX09QVElPTlMiLCJyZXNpemFibGUiLCJzdGF0dXNiYXIiLCJ0b29sYmFyIiwiREVGQVVMVF9XSURUSCIsIkRFRkFVTFRfSEVJR0hUIiwiVEFSR0VUX0JMQU5LIiwiRklSRUZPWF9FTVBUWV9VUkwiLCJBdXRoUG9wdXAiLCJ3aW5kb3cyIiwiX29wZW4iLCJzY3JlZW4iLCJhdmFpbEhlaWdodCIsImF2YWlsV2lkdGgiLCJzY3JvbGxiYXJzIiwib3B0aW9uc1N0cmluZyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2N1bSIsIm9wZW5Bc05ld1dpbmRvd0lPUyIsIm5ld1dpbiIsImZvY3VzIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsIldJREdFVF9QQVRIIiwiRU1VTEFUT1JfV0lER0VUX1BBVEgiLCJGSVJFQkFTRV9BUFBfQ0hFQ0tfRlJBR01FTlRfSUQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfZ2V0UmVkaXJlY3RVcmwiLCJhdXRoVHlwZSIsInJlZGlyZWN0VXJsIiwiYWRkaXRpb25hbFBhcmFtcyIsImlzRW1wdHkiLCJ0aWQiLCJwYXJhbXNEaWN0IiwiYXBwQ2hlY2tUb2tlbkZyYWdtZW50IiwiZ2V0SGFuZGxlckJhc2UiLCJXRUJfU1RPUkFHRV9TVVBQT1JUX0tFWSIsIkJyb3dzZXJQb3B1cFJlZGlyZWN0UmVzb2x2ZXIiLCJldmVudE1hbmFnZXJzIiwib3JpZ2luVmFsaWRhdGlvblByb21pc2VzIiwicHJvbWlzZTIiLCJpbml0QW5kR2V0TWFuYWdlciIsInJlZ2lzdGVyIiwiaWZyYW1lRXZlbnQiLCJhdXRoRXZlbnQiLCJzZW5kIiwiTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2ZpbmFsaXplRW5yb2xsIiwiX2ZpbmFsaXplU2lnbkluIiwiUGhvbmVNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbUNyZWRlbnRpYWwiLCJwaG9uZVZlcmlmaWNhdGlvbkluZm8iLCJGQUNUT1JfSUQiLCJhc3NlcnRpb25Gb3JFbnJvbGxtZW50Iiwib25lVGltZVBhc3N3b3JkIiwiVG90cE11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9mcm9tU2VjcmV0IiwiYXNzZXJ0aW9uRm9yU2lnbkluIiwiZW5yb2xsbWVudElkIiwiX2Zyb21FbnJvbGxtZW50SWQiLCJnZW5lcmF0ZVNlY3JldCIsIm1mYVNlc3Npb24iLCJ0b3RwRW5yb2xsbWVudEluZm8iLCJfZnJvbVN0YXJ0VG90cE1mYUVucm9sbG1lbnRSZXNwb25zZSIsIm90cCIsInRvdHBWZXJpZmljYXRpb25JbmZvIiwiX21ha2VUb3RwVmVyaWZpY2F0aW9uSW5mbyIsInNlY3JldEtleSIsImhhc2hpbmdBbGdvcml0aG0iLCJjb2RlTGVuZ3RoIiwiY29kZUludGVydmFsU2Vjb25kcyIsImVucm9sbG1lbnRDb21wbGV0aW9uRGVhZGxpbmUiLCJ0b3RwU2Vzc2lvbkluZm8iLCJzaGFyZWRTZWNyZXRLZXkiLCJ2ZXJpZmljYXRpb25Db2RlTGVuZ3RoIiwicGVyaW9kU2VjIiwiZmluYWxpemVFbnJvbGxtZW50VGltZSIsImdlbmVyYXRlUXJDb2RlVXJsIiwiYWNjb3VudE5hbWUiLCJpc3N1ZXIiLCJ1c2VEZWZhdWx0cyIsIl9pc0VtcHR5U3RyaW5nIiwiaW5wdXQiLCJBdXRoSW50ZXJvcCIsImludGVybmFsTGlzdGVuZXJzIiwiZ2V0VWlkIiwiYXNzZXJ0QXV0aENvbmZpZ3VyZWQiLCJhZGRBdXRoVG9rZW5MaXN0ZW5lciIsInVwZGF0ZVByb2FjdGl2ZVJlZnJlc2giLCJyZW1vdmVBdXRoVG9rZW5MaXN0ZW5lciIsImdldFZlcnNpb25Gb3JQbGF0Zm9ybSIsInJlZ2lzdGVyQXV0aCIsIl9yZWdpc3RlckNvbXBvbmVudCIsImltcG9ydF9jb21wb25lbnQiLCJDb21wb25lbnQiLCJnZXRQcm92aWRlciIsInNldEluc3RhbnRpYXRpb25Nb2RlIiwic2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2siLCJfaW5zdGFuY2VJZGVudGlmaWVyIiwiX2luc3RhbmNlIiwiYXV0aEludGVybmFsUHJvdmlkZXIiLCJyZWdpc3RlclZlcnNpb24iLCJERUZBVUxUX0lEX1RPS0VOX01BWF9BR0UiLCJhdXRoSWRUb2tlbk1heEFnZSIsImdldEV4cGVyaW1lbnRhbFNldHRpbmciLCJsYXN0UG9zdGVkSWRUb2tlbiIsIm1pbnRDb29raWVGYWN0b3J5IiwiaWRUb2tlblJlc3VsdCIsImlkVG9rZW5BZ2UiLCJnZXRBcHAiLCJhdXRoVG9rZW5TeW5jUGF0aCIsImlzU2VjdXJlQ29udGV4dCIsImF1dGhUb2tlblN5bmNVcmwiLCJtaW50Q29va2llIiwiYXV0aEVtdWxhdG9ySG9zdCIsImdldERlZmF1bHRFbXVsYXRvckhvc3QiLCJnZXRTY3JpcHRQYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJvbmVycm9yIiwiY2hhcnNldCIsImltcG9ydF9hcHAyIiwicmVxdWlyZSIsImltcG9ydF91dGlsMiIs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