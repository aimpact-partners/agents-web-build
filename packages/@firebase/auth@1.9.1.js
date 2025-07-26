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

// .beyond/uimport/@firebase/auth.1.9.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AZmlyZWJhc2UvYXV0aC4xLjkuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbW9kZWwvZW51bV9tYXBzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2Vycm9ycy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvZy50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2Fzc2VydC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2xvY2F0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvbmF2aWdhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZGVsYXkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9lbXVsYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2ZldGNoX3Byb3ZpZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvZXJyb3JzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3JlY2FwdGNoYS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2FjY291bnRfbWFuYWdlbWVudC9hY2NvdW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdGltZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2lkX3Rva2VuX3Jlc3VsdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2ludmFsaWRhdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3Byb2FjdGl2ZV9yZWZyZXNoLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9tZXRhZGF0YS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlbG9hZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL3Rva2VuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdG9rZW5fbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3VzZXJfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2luc3RhbnRpYXRvci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wZXJzaXN0ZW5jZS9pbl9tZW1vcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvcGVyc2lzdGVuY2VfdXNlcl9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3ZlcnNpb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcGFzc3dvcmRfcG9saWN5L2dldF9wYXNzd29yZF9wb2xpY3kudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9wYXNzd29yZF9wb2xpY3lfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9hdXRoL2F1dGhfaW1wbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9sb2FkX2pzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3JlY2FwdGNoYS9yZWNhcHRjaGFfbW9jay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9yZWNhcHRjaGEvcmVjYXB0Y2hhX2VudGVycHJpc2VfdmVyaWZpZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9pbml0aWFsaXplLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZW11bGF0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvYXV0aF9jcmVkZW50aWFsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYWNjb3VudF9tYW5hZ2VtZW50L2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2FuZF9wYXNzd29yZC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2VtYWlsX2xpbmsudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9pZHAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvb2F1dGgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zbXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvY3JlZGVudGlhbHMvcGhvbmUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYWN0aW9uX2NvZGVfdXJsLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9lbWFpbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmVkZXJhdGVkLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3Byb3ZpZGVycy9vYXV0aC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZmFjZWJvb2sudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL2dvb2dsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9wcm92aWRlcnMvZ2l0aHViLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2NyZWRlbnRpYWxzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3NhbWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcHJvdmlkZXJzL3R3aXR0ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9zaWduX3VwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3VzZXIvdXNlcl9jcmVkZW50aWFsX2ltcGwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9hbm9ueW1vdXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfZXJyb3IudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXRpbC9wcm92aWRlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvdXNlci9saW5rX3VubGluay50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL3JlYXV0aGVudGljYXRlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvY3JlZGVudGlhbC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvYXBpL2F1dGhlbnRpY2F0aW9uL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS9zdHJhdGVnaWVzL2N1c3RvbV90b2tlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvbWZhL21mYV9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWN0aW9uX2NvZGVfc2V0dGluZ3MudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9hbmRfcGFzc3dvcmQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9lbWFpbF9saW5rLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvYXV0aGVudGljYXRpb24vY3JlYXRlX2F1dGhfdXJpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZW1haWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvcHJvZmlsZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FjY291bnRfaW5mby50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91c2VyL2FkZGl0aW9uYWxfdXNlcl9pbmZvLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3Nlc3Npb24udHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfcmVzb2x2ZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hY2NvdW50X21hbmFnZW1lbnQvbWZhLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvbWZhX3VzZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvcGVyc2lzdGVuY2UvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcGVyc2lzdGVuY2UvYnJvd3Nlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9wZXJzaXN0ZW5jZS9sb2NhbF9zdG9yYWdlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL3Nlc3Npb25fc3RvcmFnZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9tZXNzYWdlY2hhbm5lbC9wcm9taXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21lc3NhZ2VjaGFubmVsL3JlY2VpdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvZXZlbnRfaWQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvbWVzc2FnZWNoYW5uZWwvc2VuZGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2F1dGhfd2luZG93LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3V0aWwvd29ya2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3BlcnNpc3RlbmNlL2luZGV4ZWRfZGIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2FwaS9hdXRoZW50aWNhdGlvbi9tZmEudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV9sb2FkZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcmVjYXB0Y2hhL3JlY2FwdGNoYV92ZXJpZmllci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3Byb3ZpZGVycy9waG9uZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL3Jlc29sdmVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvaWRwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3N0cmF0ZWdpZXMvYWJzdHJhY3RfcG9wdXBfcmVkaXJlY3Rfb3BlcmF0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL3N0cmF0ZWdpZXMvcG9wdXAudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvc3RyYXRlZ2llcy9yZWRpcmVjdC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9zdHJhdGVnaWVzL3JlZGlyZWN0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvYXV0aF9ldmVudF9tYW5hZ2VyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9hcGkvcHJvamVjdF9jb25maWcvZ2V0X3Byb2plY3RfY29uZmlnLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL3V0aWwvdmFsaWRhdGVfb3JpZ2luLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9nYXBpLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL2lmcmFtZS9pZnJhbWUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvdXRpbC9wb3B1cC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvY29yZS91dGlsL2hhbmRsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL3BsYXRmb3JtX2Jyb3dzZXIvcG9wdXBfcmVkaXJlY3QudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL21mYS9tZmFfYXNzZXJ0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9wbGF0Zm9ybV9icm93c2VyL21mYS9hc3NlcnRpb25zL3Bob25lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9tZmEvYXNzZXJ0aW9ucy90b3RwLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hdXRoL3NyYy9jb3JlL2F1dGgvZmlyZWJhc2VfaW50ZXJuYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2F1dGgvc3JjL2NvcmUvYXV0aC9yZWdpc3Rlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9zcmMvcGxhdGZvcm1fYnJvd3Nlci9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXV0aC9kaXN0L2VzbTIwMTcvaW5kZXguanMiXSwibmFtZXMiOlsiYXV0aF8xXzlfMV9leHBvcnRzIiwiX19leHBvcnQiLCJBY3Rpb25Db2RlT3BlcmF0aW9uIiwiQWN0aW9uQ29kZVVSTCIsIkF1dGhDcmVkZW50aWFsIiwiQXV0aEVycm9yQ29kZXMiLCJBVVRIX0VSUk9SX0NPREVTX01BUF9ET19OT1RfVVNFX0lOVEVSTkFMTFkiLCJFbWFpbEF1dGhDcmVkZW50aWFsIiwiRW1haWxBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsIkZhY3RvcklkIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiT0F1dGhDcmVkZW50aWFsIiwiT0F1dGhQcm92aWRlciIsIk9wZXJhdGlvblR5cGUiLCJQaG9uZUF1dGhDcmVkZW50aWFsIiwiUGhvbmVBdXRoUHJvdmlkZXIiLCJQaG9uZU11bHRpRmFjdG9yR2VuZXJhdG9yIiwiUHJvdmlkZXJJZCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwiU0FNTEF1dGhQcm92aWRlciIsIlNpZ25Jbk1ldGhvZCIsIlRvdHBNdWx0aUZhY3RvckdlbmVyYXRvciIsIlRvdHBTZWNyZXQiLCJUd2l0dGVyQXV0aFByb3ZpZGVyIiwiYXBwbHlBY3Rpb25Db2RlIiwiYmVmb3JlQXV0aFN0YXRlQ2hhbmdlZCIsImJyb3dzZXJMb2NhbFBlcnNpc3RlbmNlIiwiYnJvd3NlclBvcHVwUmVkaXJlY3RSZXNvbHZlciIsImJyb3dzZXJTZXNzaW9uUGVyc2lzdGVuY2UiLCJjaGVja0FjdGlvbkNvZGUiLCJjb25maXJtUGFzc3dvcmRSZXNldCIsImNvbm5lY3RBdXRoRW11bGF0b3IiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJkZWJ1Z0Vycm9yTWFwIiwiZGVsZXRlVXNlciIsImZldGNoU2lnbkluTWV0aG9kc0ZvckVtYWlsIiwiZ2V0QWRkaXRpb25hbFVzZXJJbmZvIiwiZ2V0QXV0aCIsImdldElkVG9rZW4iLCJnZXRJZFRva2VuUmVzdWx0IiwiZ2V0TXVsdGlGYWN0b3JSZXNvbHZlciIsImdldFJlZGlyZWN0UmVzdWx0IiwiaW5NZW1vcnlQZXJzaXN0ZW5jZSIsImluZGV4ZWREQkxvY2FsUGVyc2lzdGVuY2UiLCJpbml0aWFsaXplQXV0aCIsImluaXRpYWxpemVSZWNhcHRjaGFDb25maWciLCJpc1NpZ25JbldpdGhFbWFpbExpbmsiLCJsaW5rV2l0aENyZWRlbnRpYWwiLCJsaW5rV2l0aFBob25lTnVtYmVyIiwibGlua1dpdGhQb3B1cCIsImxpbmtXaXRoUmVkaXJlY3QiLCJtdWx0aUZhY3RvciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIm9uSWRUb2tlbkNoYW5nZWQiLCJwYXJzZUFjdGlvbkNvZGVVUkwiLCJwcm9kRXJyb3JNYXAiLCJyZWF1dGhlbnRpY2F0ZVdpdGhDcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoUGhvbmVOdW1iZXIiLCJyZWF1dGhlbnRpY2F0ZVdpdGhQb3B1cCIsInJlYXV0aGVudGljYXRlV2l0aFJlZGlyZWN0IiwicmVsb2FkIiwicmV2b2tlQWNjZXNzVG9rZW4iLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsIiwic2VuZFNpZ25JbkxpbmtUb0VtYWlsIiwic2V0UGVyc2lzdGVuY2UiLCJzaWduSW5Bbm9ueW1vdXNseSIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwic2lnbkluV2l0aEN1c3RvbVRva2VuIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxMaW5rIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbkluV2l0aFBvcHVwIiwic2lnbkluV2l0aFJlZGlyZWN0Iiwic2lnbk91dCIsInVubGluayIsInVwZGF0ZUN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob25lTnVtYmVyIiwidXBkYXRlUHJvZmlsZSIsInVzZURldmljZUxhbmd1YWdlIiwidmFsaWRhdGVQYXNzd29yZCIsInZlcmlmeUJlZm9yZVVwZGF0ZUVtYWlsIiwidmVyaWZ5UGFzc3dvcmRSZXNldENvZGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiUEhPTkUiLCJUT1RQIiwiRkFDRUJPT0siLCJHSVRIVUIiLCJHT09HTEUiLCJQQVNTV09SRCIsIlRXSVRURVIiLCJFTUFJTF9MSU5LIiwiRU1BSUxfUEFTU1dPUkQiLCJMSU5LIiwiUkVBVVRIRU5USUNBVEUiLCJTSUdOX0lOIiwiRU1BSUxfU0lHTklOIiwiUEFTU1dPUkRfUkVTRVQiLCJSRUNPVkVSX0VNQUlMIiwiUkVWRVJUX1NFQ09ORF9GQUNUT1JfQURESVRJT04iLCJWRVJJRllfQU5EX0NIQU5HRV9FTUFJTCIsIlZFUklGWV9FTUFJTCIsIl9kZWJ1Z0Vycm9yTWFwIiwiX3Byb2RFcnJvck1hcCIsIl9ERUZBVUxUX0FVVEhfRVJST1JfRkFDVE9SWSIsImltcG9ydF91dGlsIiwiRXJyb3JGYWN0b3J5IiwiQURNSU5fT05MWV9PUEVSQVRJT04iLCJBUkdVTUVOVF9FUlJPUiIsIkFQUF9OT1RfQVVUSE9SSVpFRCIsIkFQUF9OT1RfSU5TVEFMTEVEIiwiQ0FQVENIQV9DSEVDS19GQUlMRUQiLCJDT0RFX0VYUElSRUQiLCJDT1JET1ZBX05PVF9SRUFEWSIsIkNPUlNfVU5TVVBQT1JURUQiLCJDUkVERU5USUFMX0FMUkVBRFlfSU5fVVNFIiwiQ1JFREVOVElBTF9NSVNNQVRDSCIsIkNSRURFTlRJQUxfVE9PX09MRF9MT0dJTl9BR0FJTiIsIkRFUEVOREVOVF9TREtfSU5JVF9CRUZPUkVfQVVUSCIsIkRZTkFNSUNfTElOS19OT1RfQUNUSVZBVEVEIiwiRU1BSUxfQ0hBTkdFX05FRURTX1ZFUklGSUNBVElPTiIsIkVNQUlMX0VYSVNUUyIsIkVNVUxBVE9SX0NPTkZJR19GQUlMRUQiLCJFWFBJUkVEX09PQl9DT0RFIiwiRVhQSVJFRF9QT1BVUF9SRVFVRVNUIiwiSU5URVJOQUxfRVJST1IiLCJJTlZBTElEX0FQSV9LRVkiLCJJTlZBTElEX0FQUF9DUkVERU5USUFMIiwiSU5WQUxJRF9BUFBfSUQiLCJJTlZBTElEX0FVVEgiLCJJTlZBTElEX0FVVEhfRVZFTlQiLCJJTlZBTElEX0NFUlRfSEFTSCIsIklOVkFMSURfQ09ERSIsIklOVkFMSURfQ09OVElOVUVfVVJJIiwiSU5WQUxJRF9DT1JET1ZBX0NPTkZJR1VSQVRJT04iLCJJTlZBTElEX0NVU1RPTV9UT0tFTiIsIklOVkFMSURfRFlOQU1JQ19MSU5LX0RPTUFJTiIsIklOVkFMSURfRU1BSUwiLCJJTlZBTElEX0VNVUxBVE9SX1NDSEVNRSIsIklOVkFMSURfSURQX1JFU1BPTlNFIiwiSU5WQUxJRF9MT0dJTl9DUkVERU5USUFMUyIsIklOVkFMSURfTUVTU0FHRV9QQVlMT0FEIiwiSU5WQUxJRF9NRkFfU0VTU0lPTiIsIklOVkFMSURfT0FVVEhfQ0xJRU5UX0lEIiwiSU5WQUxJRF9PQVVUSF9QUk9WSURFUiIsIklOVkFMSURfT09CX0NPREUiLCJJTlZBTElEX09SSUdJTiIsIklOVkFMSURfUEFTU1dPUkQiLCJJTlZBTElEX1BFUlNJU1RFTkNFIiwiSU5WQUxJRF9QSE9ORV9OVU1CRVIiLCJJTlZBTElEX1BST1ZJREVSX0lEIiwiSU5WQUxJRF9SRUNJUElFTlRfRU1BSUwiLCJJTlZBTElEX1NFTkRFUiIsIklOVkFMSURfU0VTU0lPTl9JTkZPIiwiSU5WQUxJRF9URU5BTlRfSUQiLCJNRkFfSU5GT19OT1RfRk9VTkQiLCJNRkFfUkVRVUlSRUQiLCJNSVNTSU5HX0FORFJPSURfUEFDS0FHRV9OQU1FIiwiTUlTU0lOR19BUFBfQ1JFREVOVElBTCIsIk1JU1NJTkdfQVVUSF9ET01BSU4iLCJNSVNTSU5HX0NPREUiLCJNSVNTSU5HX0NPTlRJTlVFX1VSSSIsIk1JU1NJTkdfSUZSQU1FX1NUQVJUIiwiTUlTU0lOR19JT1NfQlVORExFX0lEIiwiTUlTU0lOR19PUl9JTlZBTElEX05PTkNFIiwiTUlTU0lOR19NRkFfSU5GTyIsIk1JU1NJTkdfTUZBX1NFU1NJT04iLCJNSVNTSU5HX1BIT05FX05VTUJFUiIsIk1JU1NJTkdfU0VTU0lPTl9JTkZPIiwiTU9EVUxFX0RFU1RST1lFRCIsIk5FRURfQ09ORklSTUFUSU9OIiwiTkVUV09SS19SRVFVRVNUX0ZBSUxFRCIsIk5VTExfVVNFUiIsIk5PX0FVVEhfRVZFTlQiLCJOT19TVUNIX1BST1ZJREVSIiwiT1BFUkFUSU9OX05PVF9BTExPV0VEIiwiT1BFUkFUSU9OX05PVF9TVVBQT1JURUQiLCJQT1BVUF9CTE9DS0VEIiwiUE9QVVBfQ0xPU0VEX0JZX1VTRVIiLCJQUk9WSURFUl9BTFJFQURZX0xJTktFRCIsIlFVT1RBX0VYQ0VFREVEIiwiUkVESVJFQ1RfQ0FOQ0VMTEVEX0JZX1VTRVIiLCJSRURJUkVDVF9PUEVSQVRJT05fUEVORElORyIsIlJFSkVDVEVEX0NSRURFTlRJQUwiLCJTRUNPTkRfRkFDVE9SX0FMUkVBRFlfRU5ST0xMRUQiLCJTRUNPTkRfRkFDVE9SX0xJTUlUX0VYQ0VFREVEIiwiVEVOQU5UX0lEX01JU01BVENIIiwiVElNRU9VVCIsIlRPS0VOX0VYUElSRUQiLCJUT09fTUFOWV9BVFRFTVBUU19UUllfTEFURVIiLCJVTkFVVEhPUklaRURfRE9NQUlOIiwiVU5TVVBQT1JURURfRklSU1RfRkFDVE9SIiwiVU5TVVBQT1JURURfUEVSU0lTVEVOQ0UiLCJVTlNVUFBPUlRFRF9URU5BTlRfT1BFUkFUSU9OIiwiVU5WRVJJRklFRF9FTUFJTCIsIlVTRVJfQ0FOQ0VMTEVEIiwiVVNFUl9ERUxFVEVEIiwiVVNFUl9ESVNBQkxFRCIsIlVTRVJfTUlTTUFUQ0giLCJVU0VSX1NJR05FRF9PVVQiLCJXRUFLX1BBU1NXT1JEIiwiV0VCX1NUT1JBR0VfVU5TVVBQT1JURUQiLCJBTFJFQURZX0lOSVRJQUxJWkVEIiwiUkVDQVBUQ0hBX05PVF9FTkFCTEVEIiwiTUlTU0lOR19SRUNBUFRDSEFfVE9LRU4iLCJJTlZBTElEX1JFQ0FQVENIQV9UT0tFTiIsIklOVkFMSURfUkVDQVBUQ0hBX0FDVElPTiIsIk1JU1NJTkdfQ0xJRU5UX1RZUEUiLCJNSVNTSU5HX1JFQ0FQVENIQV9WRVJTSU9OIiwiSU5WQUxJRF9SRUNBUFRDSEFfVkVSU0lPTiIsIklOVkFMSURfUkVRX1RZUEUiLCJJTlZBTElEX0hPU1RJTkdfTElOS19ET01BSU4iLCJsb2dDbGllbnQiLCJpbXBvcnRfbG9nZ2VyIiwiTG9nZ2VyIiwiX2xvZ1dhcm4iLCJtc2ciLCJhcmdzIiwibG9nTGV2ZWwiLCJMb2dMZXZlbCIsIldBUk4iLCJ3YXJuIiwiaW1wb3J0X2FwcCIsIlNES19WRVJTSU9OIiwiX2xvZ0Vycm9yIiwiRVJST1IiLCJlcnJvciIsIl9mYWlsIiwiYXV0aE9yQ29kZSIsInJlc3QiLCJjcmVhdGVFcnJvckludGVybmFsIiwiX2NyZWF0ZUVycm9yIiwiX2Vycm9yV2l0aEN1c3RvbU1lc3NhZ2UiLCJhdXRoIiwiY29kZSIsIm1lc3NhZ2UiLCJlcnJvck1hcCIsIk9iamVjdCIsImFzc2lnbiIsImZhY3RvcnkiLCJjcmVhdGUiLCJhcHBOYW1lIiwibmFtZSIsIl9zZXJ2ZXJBcHBDdXJyZW50VXNlck9wZXJhdGlvbk5vdFN1cHBvcnRlZEVycm9yIiwiX2Fzc2VydEluc3RhbmNlT2YiLCJvYmplY3QiLCJpbnN0YW5jZSIsImNvbnN0cnVjdG9ySW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImZ1bGxQYXJhbXMiLCJzbGljZSIsIl9lcnJvckZhY3RvcnkiLCJfYXNzZXJ0IiwiYXNzZXJ0aW9uIiwiZGVidWdGYWlsIiwiZmFpbHVyZSIsIkVycm9yIiwiZGVidWdBc3NlcnQiLCJfZ2V0Q3VycmVudFVybCIsInNlbGYiLCJfYSIsImxvY2F0aW9uIiwiaHJlZiIsIl9pc0h0dHBPckh0dHBzIiwiX2dldEN1cnJlbnRTY2hlbWUiLCJwcm90b2NvbCIsIl9pc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsImlzQnJvd3NlckV4dGVuc2lvbiIsIl9nZXRVc2VyTGFuZ3VhZ2UiLCJuYXZpZ2F0b3JMYW5ndWFnZSIsImxhbmd1YWdlcyIsImxhbmd1YWdlIiwiRGVsYXkiLCJzaG9ydERlbGF5IiwibG9uZ0RlbGF5IiwiaXNNb2JpbGUiLCJpc01vYmlsZUNvcmRvdmEiLCJpc1JlYWN0TmF0aXZlIiwiZ2V0IiwiTWF0aCIsIm1pbiIsIl9lbXVsYXRvclVybCIsImNvbmZpZyIsInBhdGgiLCJlbXVsYXRvciIsInVybCIsInN0YXJ0c1dpdGgiLCJGZXRjaFByb3ZpZGVyIiwiaW5pdGlhbGl6ZSIsImZldGNoSW1wbCIsImhlYWRlcnNJbXBsIiwicmVzcG9uc2VJbXBsIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXNwb25zZSIsIlJlc3BvbnNlIiwiU0VSVkVSX0VSUk9SX01BUCIsIkRFRkFVTFRfQVBJX1RJTUVPVVRfTVMiLCJfYWRkVGlkSWZOZWNlc3NhcnkiLCJyZXF1ZXN0IiwidGVuYW50SWQiLCJfcGVyZm9ybUFwaVJlcXVlc3QiLCJtZXRob2QiLCJjdXN0b21FcnJvck1hcCIsIl9wZXJmb3JtRmV0Y2hXaXRoRXJyb3JIYW5kbGluZyIsImJvZHkiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJxdWVyeXN0cmluZyIsImtleSIsImFwaUtleSIsIl9nZXRBZGRpdGlvbmFsSGVhZGVycyIsImxhbmd1YWdlQ29kZSIsImZldGNoQXJncyIsImlzQ2xvdWRmbGFyZVdvcmtlciIsInJlZmVycmVyUG9saWN5IiwiX2dldEZpbmFsVGFyZ2V0IiwiYXBpSG9zdCIsImZldGNoRm4iLCJfY2FuSW5pdEVtdWxhdG9yIiwibmV0d29ya1RpbWVvdXQiLCJOZXR3b3JrVGltZW91dCIsIlByb21pc2UiLCJyYWNlIiwicHJvbWlzZSIsImNsZWFyTmV0d29ya1RpbWVvdXQiLCJqc29uIiwiX21ha2VUYWdnZWRFcnJvciIsIm9rIiwiZXJyb3JNZXNzYWdlIiwic2VydmVyRXJyb3JDb2RlIiwic2VydmVyRXJyb3JNZXNzYWdlIiwic3BsaXQiLCJhdXRoRXJyb3IiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJlIiwiRmlyZWJhc2VFcnJvciIsIlN0cmluZyIsIl9wZXJmb3JtU2lnbkluUmVxdWVzdCIsInNlcnZlclJlc3BvbnNlIiwiX3NlcnZlclJlc3BvbnNlIiwiaG9zdCIsImJhc2UiLCJhcGlTY2hlbWUiLCJfcGFyc2VFbmZvcmNlbWVudFN0YXRlIiwiZW5mb3JjZW1lbnRTdGF0ZVN0ciIsImNsZWFyVGltZW91dCIsInRpbWVyIiwiXyIsInJlamVjdCIsInNldFRpbWVvdXQiLCJlcnJvclBhcmFtcyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJjdXN0b21EYXRhIiwiX3Rva2VuUmVzcG9uc2UiLCJpc1YyIiwiZ3JlY2FwdGNoYSIsImdldFJlc3BvbnNlIiwiaXNFbnRlcnByaXNlIiwiZW50ZXJwcmlzZSIsIlJlY2FwdGNoYUNvbmZpZyIsInNpdGVLZXkiLCJyZWNhcHRjaGFFbmZvcmNlbWVudFN0YXRlIiwicmVjYXB0Y2hhS2V5IiwiZ2V0UHJvdmlkZXJFbmZvcmNlbWVudFN0YXRlIiwicHJvdmlkZXJTdHIiLCJsZW5ndGgiLCJwcm92aWRlciIsImVuZm9yY2VtZW50U3RhdGUiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsImlzQW55UHJvdmlkZXJFbmFibGVkIiwiZ2V0UmVjYXB0Y2hhUGFyYW1zIiwicmVjYXB0Y2hhU2l0ZUtleSIsImdldFJlY2FwdGNoYUNvbmZpZyIsImRlbGV0ZUFjY291bnQiLCJkZWxldGVMaW5rZWRBY2NvdW50cyIsImdldEFjY291bnRJbmZvIiwidXRjVGltZXN0YW1wVG9EYXRlU3RyaW5nIiwidXRjVGltZXN0YW1wIiwiZGF0ZSIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsInVzZXIiLCJmb3JjZVJlZnJlc2giLCJnZXRNb2R1bGFySW5zdGFuY2UiLCJ1c2VySW50ZXJuYWwiLCJ0b2tlbiIsImNsYWltcyIsIl9wYXJzZVRva2VuIiwiZXhwIiwiYXV0aF90aW1lIiwiaWF0IiwiZmlyZWJhc2UiLCJzaWduSW5Qcm92aWRlciIsImF1dGhUaW1lIiwic2Vjb25kc1N0cmluZ1RvTWlsbGlzZWNvbmRzIiwiaXNzdWVkQXRUaW1lIiwiZXhwaXJhdGlvblRpbWUiLCJzaWduSW5TZWNvbmRGYWN0b3IiLCJzZWNvbmRzIiwiYWxnb3JpdGhtIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImRlY29kZWQiLCJiYXNlNjREZWNvZGUiLCJwYXJzZSIsInRvU3RyaW5nIiwiX3Rva2VuRXhwaXJlc0luIiwicGFyc2VkVG9rZW4iLCJfbG9nb3V0SWZJbnZhbGlkYXRlZCIsImJ5cGFzc0F1dGhTdGF0ZSIsImlzVXNlckludmFsaWRhdGVkIiwiY3VycmVudFVzZXIiLCJQcm9hY3RpdmVSZWZyZXNoIiwiaXNSdW5uaW5nIiwidGltZXJJZCIsImVycm9yQmFja29mZiIsIl9zdGFydCIsInNjaGVkdWxlIiwiX3N0b3AiLCJnZXRJbnRlcnZhbCIsIndhc0Vycm9yIiwiaW50ZXJ2YWwiLCJleHBUaW1lIiwic3RzVG9rZW5NYW5hZ2VyIiwibm93IiwibWF4IiwiaXRlcmF0aW9uIiwiVXNlck1ldGFkYXRhIiwiY3JlYXRlZEF0IiwibGFzdExvZ2luQXQiLCJfaW5pdGlhbGl6ZVRpbWUiLCJsYXN0U2lnbkluVGltZSIsImNyZWF0aW9uVGltZSIsIl9jb3B5IiwibWV0YWRhdGEiLCJ0b0pTT04iLCJfcmVsb2FkV2l0aG91dFNhdmluZyIsImlkVG9rZW4iLCJ1c2VycyIsImNvcmVBY2NvdW50IiwiX25vdGlmeVJlbG9hZExpc3RlbmVyIiwibmV3UHJvdmlkZXJEYXRhIiwicHJvdmlkZXJVc2VySW5mbyIsImV4dHJhY3RQcm92aWRlckRhdGEiLCJwcm92aWRlckRhdGEiLCJtZXJnZVByb3ZpZGVyRGF0YSIsIm9sZElzQW5vbnltb3VzIiwiaXNBbm9ueW1vdXMiLCJuZXdJc0Fub255bW91cyIsInBhc3N3b3JkSGFzaCIsInVwZGF0ZXMiLCJ1aWQiLCJsb2NhbElkIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsInBob3RvVXJsIiwiZW1haWxWZXJpZmllZCIsIl9wZXJzaXN0VXNlcklmQ3VycmVudCIsIl9ub3RpZnlMaXN0ZW5lcnNJZkN1cnJlbnQiLCJvcmlnaW5hbCIsIm5ld0RhdGEiLCJkZWR1cGVkIiwiZmlsdGVyIiwibyIsInNvbWUiLCJuIiwicHJvdmlkZXJJZCIsInByb3ZpZGVycyIsIm1hcCIsImltcG9ydF90c2xpYiIsIl9fcmVzdCIsInJhd0lkIiwicmVxdWVzdFN0c1Rva2VuIiwicmVmcmVzaFRva2VuIiwidG9rZW5BcGlIb3N0IiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsInJldm9rZVRva2VuIiwiU3RzVG9rZW5NYW5hZ2VyIiwiaXNFeHBpcmVkIiwidXBkYXRlRnJvbVNlcnZlclJlc3BvbnNlIiwidXBkYXRlVG9rZW5zQW5kRXhwaXJhdGlvbiIsInVwZGF0ZUZyb21JZFRva2VuIiwiZ2V0VG9rZW4iLCJyZWZyZXNoIiwiY2xlYXJSZWZyZXNoVG9rZW4iLCJvbGRUb2tlbiIsImV4cGlyZXNJblNlYyIsImZyb21KU09OIiwibWFuYWdlciIsIl9hc3NpZ24iLCJfY2xvbmUiLCJfcGVyZm9ybVJlZnJlc2giLCJhc3NlcnRTdHJpbmdPclVuZGVmaW5lZCIsIlVzZXJJbXBsIiwib3B0IiwicHJvYWN0aXZlUmVmcmVzaCIsInJlbG9hZFVzZXJJbmZvIiwicmVsb2FkTGlzdGVuZXIiLCJ1c2VySW5mbyIsIm5ld1VzZXIiLCJfb25SZWxvYWQiLCJjYWxsYmFjayIsIl9zdGFydFByb2FjdGl2ZVJlZnJlc2giLCJfc3RvcFByb2FjdGl2ZVJlZnJlc2giLCJfdXBkYXRlVG9rZW5zSWZOZWNlc3NhcnkiLCJyZWxvYWQyIiwidG9rZW5zUmVmcmVzaGVkIiwiZGVsZXRlIiwiX2lzRmlyZWJhc2VTZXJ2ZXJBcHAiLCJhcHAiLCJfcmVkaXJlY3RFdmVudElkIiwiX2Zyb21KU09OIiwiX2IiLCJfYyIsIl9kIiwiX2UiLCJfZiIsIl9nIiwiX2giLCJwbGFpbk9iamVjdFRva2VuTWFuYWdlciIsIkFycmF5IiwiaXNBcnJheSIsIl9mcm9tSWRUb2tlblJlc3BvbnNlIiwiaWRUb2tlblJlc3BvbnNlIiwiX2Zyb21HZXRBY2NvdW50SW5mb1Jlc3BvbnNlIiwiaW5zdGFuY2VDYWNoZSIsIk1hcCIsIl9nZXRJbnN0YW5jZSIsImNscyIsIkZ1bmN0aW9uIiwic2V0IiwiSW5NZW1vcnlQZXJzaXN0ZW5jZSIsInR5cGUiLCJzdG9yYWdlIiwiX2lzQXZhaWxhYmxlIiwiX3NldCIsInZhbHVlIiwiX2dldCIsIl9yZW1vdmUiLCJfYWRkTGlzdGVuZXIiLCJfa2V5IiwiX2xpc3RlbmVyIiwiX3JlbW92ZUxpc3RlbmVyIiwiX3BlcnNpc3RlbmNlS2V5TmFtZSIsIlBlcnNpc3RlbmNlVXNlck1hbmFnZXIiLCJwZXJzaXN0ZW5jZSIsInVzZXJLZXkiLCJuYW1lMiIsImZ1bGxVc2VyS2V5IiwiZnVsbFBlcnNpc3RlbmNlS2V5IiwiYm91bmRFdmVudEhhbmRsZXIiLCJfb25TdG9yYWdlRXZlbnQiLCJiaW5kIiwic2V0Q3VycmVudFVzZXIiLCJnZXRDdXJyZW50VXNlciIsImJsb2IiLCJyZW1vdmVDdXJyZW50VXNlciIsInNhdmVQZXJzaXN0ZW5jZUZvclJlZGlyZWN0IiwibmV3UGVyc2lzdGVuY2UiLCJwZXJzaXN0ZW5jZUhpZXJhcmNoeSIsImF2YWlsYWJsZVBlcnNpc3RlbmNlcyIsImFsbCIsInNlbGVjdGVkUGVyc2lzdGVuY2UiLCJ1c2VyVG9NaWdyYXRlIiwibWlncmF0aW9uSGllcmFyY2h5IiwicCIsIl9zaG91bGRBbGxvd01pZ3JhdGlvbiIsIl9nZXRCcm93c2VyTmFtZSIsInVzZXJBZ2VudCIsInVhIiwiaW5jbHVkZXMiLCJfaXNJRU1vYmlsZSIsIl9pc0ZpcmVmb3giLCJfaXNCbGFja0JlcnJ5IiwiX2lzV2ViT1MiLCJfaXNTYWZhcmkiLCJfaXNDaHJvbWVJT1MiLCJfaXNBbmRyb2lkIiwicmUiLCJtYXRjaGVzIiwibWF0Y2giLCJnZXRVQSIsInRlc3QiLCJfaXNJT1MiLCJfaXNJT1M3T3I4IiwiX2lzSU9TU3RhbmRhbG9uZSIsIndpbmRvdyIsInN0YW5kYWxvbmUiLCJfaXNJRTEwIiwiaXNJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiX2lzTW9iaWxlQnJvd3NlciIsIl9nZXRDbGllbnRWZXJzaW9uIiwiY2xpZW50UGxhdGZvcm0iLCJmcmFtZXdvcmtzIiwicmVwb3J0ZWRQbGF0Zm9ybSIsInJlcG9ydGVkRnJhbWV3b3JrcyIsImpvaW4iLCJBdXRoTWlkZGxld2FyZVF1ZXVlIiwicXVldWUiLCJwdXNoQ2FsbGJhY2siLCJvbkFib3J0Iiwid3JhcHBlZENhbGxiYWNrIiwicmVzb2x2ZSIsInJlc3VsdCIsInB1c2giLCJpbmRleCIsInJ1bk1pZGRsZXdhcmUiLCJuZXh0VXNlciIsIm9uQWJvcnRTdGFjayIsImJlZm9yZVN0YXRlQ2FsbGJhY2siLCJyZXZlcnNlIiwib3JpZ2luYWxNZXNzYWdlIiwiX2dldFBhc3N3b3JkUG9saWN5IiwiTUlOSU1VTV9NSU5fUEFTU1dPUkRfTEVOR1RIIiwiUGFzc3dvcmRQb2xpY3lJbXBsIiwicmVzcG9uc2VPcHRpb25zIiwiY3VzdG9tU3RyZW5ndGhPcHRpb25zIiwibWluUGFzc3dvcmRMZW5ndGgiLCJtYXhQYXNzd29yZExlbmd0aCIsImNvbnRhaW5zTG93ZXJjYXNlQ2hhcmFjdGVyIiwiY29udGFpbnNMb3dlcmNhc2VMZXR0ZXIiLCJjb250YWluc1VwcGVyY2FzZUNoYXJhY3RlciIsImNvbnRhaW5zVXBwZXJjYXNlTGV0dGVyIiwiY29udGFpbnNOdW1lcmljQ2hhcmFjdGVyIiwiY29udGFpbnNOb25BbHBoYW51bWVyaWNDaGFyYWN0ZXIiLCJhbGxvd2VkTm9uQWxwaGFudW1lcmljQ2hhcmFjdGVycyIsImZvcmNlVXBncmFkZU9uU2lnbmluIiwic2NoZW1hVmVyc2lvbiIsInBhc3N3b3JkIiwic3RhdHVzIiwiaXNWYWxpZCIsInBhc3N3b3JkUG9saWN5IiwidmFsaWRhdGVQYXNzd29yZExlbmd0aE9wdGlvbnMiLCJ2YWxpZGF0ZVBhc3N3b3JkQ2hhcmFjdGVyT3B0aW9ucyIsIm1lZXRzTWluUGFzc3dvcmRMZW5ndGgiLCJtZWV0c01heFBhc3N3b3JkTGVuZ3RoIiwidXBkYXRlUGFzc3dvcmRDaGFyYWN0ZXJPcHRpb25zU3RhdHVzZXMiLCJwYXNzd29yZENoYXIiLCJpIiwiY2hhckF0IiwiQXV0aEltcGwiLCJoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIiLCJhcHBDaGVja1NlcnZpY2VQcm92aWRlciIsImVtdWxhdG9yQ29uZmlnIiwib3BlcmF0aW9ucyIsImF1dGhTdGF0ZVN1YnNjcmlwdGlvbiIsIlN1YnNjcmlwdGlvbiIsImlkVG9rZW5TdWJzY3JpcHRpb24iLCJiZWZvcmVTdGF0ZVF1ZXVlIiwicmVkaXJlY3RVc2VyIiwiaXNQcm9hY3RpdmVSZWZyZXNoRW5hYmxlZCIsIkVYUEVDVEVEX1BBU1NXT1JEX1BPTElDWV9TQ0hFTUFfVkVSU0lPTiIsIl9pc0luaXRpYWxpemVkIiwiX2RlbGV0ZWQiLCJfaW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiX3BvcHVwUmVkaXJlY3RSZXNvbHZlciIsIl9hZ2VudFJlY2FwdGNoYUNvbmZpZyIsIl90ZW5hbnRSZWNhcHRjaGFDb25maWdzIiwiX3Byb2plY3RQYXNzd29yZFBvbGljeSIsIl90ZW5hbnRQYXNzd29yZFBvbGljaWVzIiwibGFzdE5vdGlmaWVkVWlkIiwic2V0dGluZ3MiLCJhcHBWZXJpZmljYXRpb25EaXNhYmxlZEZvclRlc3RpbmciLCJjbGllbnRWZXJzaW9uIiwic2RrQ2xpZW50VmVyc2lvbiIsIl9pbml0aWFsaXplV2l0aFBlcnNpc3RlbmNlIiwicG9wdXBSZWRpcmVjdFJlc29sdmVyIiwicGVyc2lzdGVuY2VNYW5hZ2VyIiwiX3Nob3VsZEluaXRQcm9hY3RpdmVseSIsIl9pbml0aWFsaXplIiwiaW5pdGlhbGl6ZUN1cnJlbnRVc2VyIiwiYXNzZXJ0ZWRQZXJzaXN0ZW5jZSIsIl9jdXJyZW50VXNlciIsIl91cGRhdGVDdXJyZW50VXNlciIsImluaXRpYWxpemVDdXJyZW50VXNlckZyb21JZFRva2VuIiwiZGlyZWN0bHlTZXRDdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJhdXRoSWRUb2tlbiIsInRoZW4iLCJwcmV2aW91c2x5U3RvcmVkVXNlciIsImZ1dHVyZUN1cnJlbnRVc2VyIiwibmVlZHNUb2NoZWNrTWlkZGxld2FyZSIsImF1dGhEb21haW4iLCJnZXRPckluaXRSZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsInJlZGlyZWN0VXNlckV2ZW50SWQiLCJzdG9yZWRVc2VyRXZlbnRJZCIsInRyeVJlZGlyZWN0U2lnbkluIiwiX292ZXJyaWRlUmVkaXJlY3RSZXN1bHQiLCJyZWxvYWRBbmRTZXRDdXJyZW50VXNlck9yQ2xlYXIiLCJyZWRpcmVjdFJlc29sdmVyIiwiX2NvbXBsZXRlUmVkaXJlY3RGbiIsIl9zZXRSZWRpcmVjdFVzZXIiLCJfZGVsZXRlIiwidXNlckV4dGVybiIsInNraXBCZWZvcmVTdGF0ZUNhbGxiYWNrcyIsIm5vdGlmeUF1dGhMaXN0ZW5lcnMiLCJyZWRpcmVjdFBlcnNpc3RlbmNlTWFuYWdlciIsIl9nZXRSZWNhcHRjaGFDb25maWciLCJfZ2V0UGFzc3dvcmRQb2xpY3lJbnRlcm5hbCIsIl91cGRhdGVQYXNzd29yZFBvbGljeSIsIl9nZXRQZXJzaXN0ZW5jZSIsIl91cGRhdGVFcnJvck1hcCIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGVkIiwicmVnaXN0ZXJTdGF0ZUxpc3RlbmVyIiwiYXV0aFN0YXRlUmVhZHkiLCJ1bnN1YnNjcmliZSIsInRva2VuVHlwZSIsInJlZGlyZWN0TWFuYWdlciIsInJlc29sdmVyIiwiX3JlZGlyZWN0UGVyc2lzdGVuY2UiLCJfcmVkaXJlY3RVc2VyRm9ySWQiLCJpZCIsIm5leHQiLCJjdXJyZW50VWlkIiwic3Vic2NyaXB0aW9uIiwiY2IiLCJpc1Vuc3Vic2NyaWJlZCIsImFkZE9ic2VydmVyIiwiYWN0aW9uIiwiX2xvZ0ZyYW1ld29yayIsImZyYW1ld29yayIsInNvcnQiLCJfZ2V0RnJhbWV3b3JrcyIsIm9wdGlvbnMiLCJhcHBJZCIsImhlYXJ0YmVhdHNIZWFkZXIiLCJnZXRJbW1lZGlhdGUiLCJvcHRpb25hbCIsImdldEhlYXJ0YmVhdHNIZWFkZXIiLCJhcHBDaGVja1Rva2VuIiwiX2dldEFwcENoZWNrVG9rZW4iLCJhcHBDaGVja1Rva2VuUmVzdWx0IiwiX2Nhc3RBdXRoIiwib2JzZXJ2ZXIiLCJjcmVhdGVTdWJzY3JpYmUiLCJleHRlcm5hbEpTUHJvdmlkZXIiLCJsb2FkSlMiLCJyZWNhcHRjaGFWMlNjcmlwdCIsInJlY2FwdGNoYUVudGVycHJpc2VTY3JpcHQiLCJnYXBpU2NyaXB0IiwiX3NldEV4dGVybmFsSlNQcm92aWRlciIsIl9sb2FkSlMiLCJfcmVjYXB0Y2hhVjJTY3JpcHRVcmwiLCJfcmVjYXB0Y2hhRW50ZXJwcmlzZVNjcmlwdFVybCIsIl9nYXBpU2NyaXB0VXJsIiwiX2dlbmVyYXRlQ2FsbGJhY2tOYW1lIiwicHJlZml4IiwiZmxvb3IiLCJyYW5kb20iLCJfU09MVkVfVElNRV9NUyIsIl9FWFBJUkFUSU9OX1RJTUVfTVMiLCJfV0lER0VUX0lEX1NUQVJUIiwiTW9ja1JlQ2FwdGNoYSIsImNvdW50ZXIiLCJfd2lkZ2V0cyIsInJlbmRlciIsImNvbnRhaW5lciIsInBhcmFtZXRlcnMiLCJNb2NrV2lkZ2V0IiwicmVzZXQiLCJvcHRXaWRnZXRJZCIsImV4ZWN1dGUiLCJNb2NrR3JlQ0FQVENIQVRvcExldmVsIiwiTW9ja0dyZUNBUFRDSEEiLCJyZWFkeSIsIl9zaXRlS2V5IiwiX29wdGlvbnMiLCJfY29udGFpbmVyIiwiX3BhcmFtZXRlcnMiLCJjb250YWluZXJPcklkIiwiZGVsZXRlZCIsInJlc3BvbnNlVG9rZW4iLCJjbGlja0hhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsImlzVmlzaWJsZSIsInNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tJZkRlbGV0ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2VuZXJhdGVSYW5kb21BbHBoYU51bWVyaWNTdHJpbmciLCJleHBpcmVkQ2FsbGJhY2siLCJsZW4iLCJjaGFycyIsImFsbG93ZWRDaGFycyIsIlJFQ0FQVENIQV9FTlRFUlBSSVNFX1ZFUklGSUVSX1RZUEUiLCJGQUtFX1RPS0VOIiwiUmVjYXB0Y2hhRW50ZXJwcmlzZVZlcmlmaWVyIiwiYXV0aEV4dGVybiIsInZlcmlmeSIsInJldHJpZXZlU2l0ZUtleSIsImNsaWVudFR5cGUiLCJ2ZXJzaW9uIiwiY2F0Y2giLCJyZXRyaWV2ZVJlY2FwdGNoYVRva2VuIiwibW9ja1JlY2FwdGNoYSIsImluamVjdFJlY2FwdGNoYUZpZWxkcyIsImlzQ2FwdGNoYVJlc3AiLCJpc0Zha2VUb2tlbiIsInZlcmlmaWVyIiwiY2FwdGNoYVJlc3BvbnNlIiwibmV3UmVxdWVzdCIsInBob25lRW5yb2xsbWVudEluZm8iLCJyZWNhcHRjaGFUb2tlbiIsInBob25lU2lnbkluSW5mbyIsImhhbmRsZVJlY2FwdGNoYUZsb3ciLCJhdXRoSW5zdGFuY2UiLCJhY3Rpb25OYW1lIiwiYWN0aW9uTWV0aG9kIiwicmVjYXB0Y2hhQXV0aFByb3ZpZGVyIiwicmVxdWVzdFdpdGhSZWNhcHRjaGEiLCJsb2ciLCJfYTIiLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYUZpZWxkcyIsIl9pbml0aWFsaXplUmVjYXB0Y2hhQ29uZmlnIiwiYXV0aEludGVybmFsIiwiZGVwcyIsIl9nZXRQcm92aWRlciIsImlzSW5pdGlhbGl6ZWQiLCJhdXRoMiIsImluaXRpYWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsImRlZXBFcXVhbCIsIl9pbml0aWFsaXplQXV0aEluc3RhbmNlIiwiaGllcmFyY2h5IiwiZGlzYWJsZVdhcm5pbmdzIiwiZXh0cmFjdFByb3RvY29sIiwicG9ydCIsImV4dHJhY3RIb3N0QW5kUG9ydCIsInBvcnRTdHIiLCJmcmVlemUiLCJlbWl0RW11bGF0b3JXYXJuaW5nIiwicHJvdG9jb2xFbmQiLCJpbmRleE9mIiwic3Vic3RyIiwiYXV0aG9yaXR5IiwiZXhlYyIsImhvc3RBbmRQb3J0IiwicG9wIiwiYnJhY2tldGVkSVB2NiIsInBhcnNlUG9ydCIsImF0dGFjaEJhbm5lciIsImVsIiwiY3JlYXRlRWxlbWVudCIsInN0eSIsInN0eWxlIiwiaW5uZXJUZXh0IiwicG9zaXRpb24iLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIiwiYm90dG9tIiwibGVmdCIsIm1hcmdpbiIsInpJbmRleCIsInRleHRBbGlnbiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiaW5mbyIsInJlYWR5U3RhdGUiLCJzaWduSW5NZXRob2QiLCJfZ2V0SWRUb2tlblJlc3BvbnNlIiwiX2F1dGgiLCJfbGlua1RvSWRUb2tlbiIsIl9pZFRva2VuIiwiX2dldFJlYXV0aGVudGljYXRpb25SZXNvbHZlciIsInJlc2V0UGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFBhc3N3b3JkIiwibGlua0VtYWlsUGFzc3dvcmQiLCJhcHBseUFjdGlvbkNvZGUkMSIsInNpZ25JbldpdGhQYXNzd29yZCIsInNlbmRPb2JDb2RlIiwic2VuZEVtYWlsVmVyaWZpY2F0aW9uJDEiLCJzZW5kUGFzc3dvcmRSZXNldEVtYWlsJDEiLCJzZW5kU2lnbkluTGlua1RvRW1haWwkMSIsInZlcmlmeUFuZENoYW5nZUVtYWlsIiwic2lnbkluV2l0aEVtYWlsTGluayQxIiwic2lnbkluV2l0aEVtYWlsTGlua0ZvckxpbmtpbmciLCJfZW1haWwiLCJfcGFzc3dvcmQiLCJfdGVuYW50SWQiLCJfZnJvbUVtYWlsQW5kUGFzc3dvcmQiLCJfZnJvbUVtYWlsQW5kQ29kZSIsIm9vYkNvZGUiLCJvYmoiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInNpZ25JbldpdGhJZHAiLCJJRFBfUkVRVUVTVF9VUkkkMSIsInBlbmRpbmdUb2tlbiIsIl9mcm9tUGFyYW1zIiwiY3JlZCIsIm5vbmNlIiwib2F1dGhUb2tlbiIsIm9hdXRoVG9rZW5TZWNyZXQiLCJzZWNyZXQiLCJidWlsZFJlcXVlc3QiLCJhdXRvQ3JlYXRlIiwicmVxdWVzdFVyaSIsInBvc3RCb2R5Iiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZSIsInNpZ25JbldpdGhQaG9uZU51bWJlciQxIiwibGlua1dpdGhQaG9uZU51bWJlciQxIiwidGVtcG9yYXJ5UHJvb2YiLCJWRVJJRllfUEhPTkVfTlVNQkVSX0ZPUl9FWElTVElOR19FUlJPUl9NQVBfIiwidmVyaWZ5UGhvbmVOdW1iZXJGb3JFeGlzdGluZyIsImFwaVJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZnJvbVZlcmlmaWNhdGlvbiIsInZlcmlmaWNhdGlvbklkIiwidmVyaWZpY2F0aW9uQ29kZSIsIl9mcm9tVG9rZW5SZXNwb25zZSIsIl9tYWtlVmVyaWZpY2F0aW9uUmVxdWVzdCIsInNlc3Npb25JbmZvIiwicGFyc2VNb2RlIiwibW9kZSIsInBhcnNlRGVlcExpbmsiLCJsaW5rIiwicXVlcnlzdHJpbmdEZWNvZGUiLCJleHRyYWN0UXVlcnlzdHJpbmciLCJkb3VibGVEZWVwTGluayIsImlPU0RlZXBMaW5rIiwiaU9TRG91YmxlRGVlcExpbmsiLCJhY3Rpb25MaW5rIiwic2VhcmNoUGFyYW1zIiwiY29udGludWVVcmwiLCJwYXJzZUxpbmsiLCJQUk9WSURFUl9JRCIsImNyZWRlbnRpYWwiLCJjcmVkZW50aWFsV2l0aExpbmsiLCJlbWFpbExpbmsiLCJhY3Rpb25Db2RlVXJsIiwiRU1BSUxfUEFTU1dPUkRfU0lHTl9JTl9NRVRIT0QiLCJFTUFJTF9MSU5LX1NJR05fSU5fTUVUSE9EIiwiRmVkZXJhdGVkQXV0aFByb3ZpZGVyIiwiZGVmYXVsdExhbmd1YWdlQ29kZSIsImN1c3RvbVBhcmFtZXRlcnMiLCJzZXREZWZhdWx0TGFuZ3VhZ2UiLCJzZXRDdXN0b21QYXJhbWV0ZXJzIiwiY3VzdG9tT0F1dGhQYXJhbWV0ZXJzIiwiZ2V0Q3VzdG9tUGFyYW1ldGVycyIsIkJhc2VPQXV0aFByb3ZpZGVyIiwic2NvcGVzIiwiYWRkU2NvcGUiLCJzY29wZSIsImdldFNjb3BlcyIsImNyZWRlbnRpYWxGcm9tSlNPTiIsIl9jcmVkZW50aWFsIiwicmF3Tm9uY2UiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInVzZXJDcmVkZW50aWFsIiwib2F1dGhDcmVkZW50aWFsRnJvbVRhZ2dlZE9iamVjdCIsImNyZWRlbnRpYWxGcm9tRXJyb3IiLCJ0b2tlblJlc3BvbnNlIiwib2F1dGhJZFRva2VuIiwib2F1dGhBY2Nlc3NUb2tlbiIsIkZBQ0VCT09LX1NJR05fSU5fTUVUSE9EIiwiY3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJHT09HTEVfU0lHTl9JTl9NRVRIT0QiLCJHSVRIVUJfU0lHTl9JTl9NRVRIT0QiLCJJRFBfUkVRVUVTVF9VUkkiLCJTQU1MQXV0aENyZWRlbnRpYWwiLCJfY3JlYXRlIiwiU0FNTF9QUk9WSURFUl9QUkVGSVgiLCJzYW1sQ3JlZGVudGlhbEZyb21UYWdnZWRPYmplY3QiLCJUV0lUVEVSX1NJR05fSU5fTUVUSE9EIiwic2lnblVwIiwiVXNlckNyZWRlbnRpYWxJbXBsIiwib3BlcmF0aW9uVHlwZSIsInByb3ZpZGVySWRGb3JSZXNwb25zZSIsInVzZXJDcmVkIiwiX2Zvck9wZXJhdGlvbiIsIk11bHRpRmFjdG9yRXJyb3IiLCJzZXRQcm90b3R5cGVPZiIsInByb3RvdHlwZSIsIl9mcm9tRXJyb3JBbmRPcGVyYXRpb24iLCJfcHJvY2Vzc0NyZWRlbnRpYWxTYXZpbmdNZmFDb250ZXh0SWZOZWNlc3NhcnkiLCJpZFRva2VuUHJvdmlkZXIiLCJwcm92aWRlckRhdGFBc05hbWVzIiwiU2V0IiwicGlkIiwiX2Fzc2VydExpbmtlZFN0YXR1cyIsImRlbGV0ZVByb3ZpZGVyIiwicHJvdmlkZXJzTGVmdCIsInBkIiwiaGFzIiwiX2xpbmskMSIsImV4cGVjdGVkIiwicHJvdmlkZXJJZHMiLCJfcmVhdXRoZW50aWNhdGUiLCJwYXJzZWQiLCJzdWIiLCJfc2lnbkluV2l0aENyZWRlbnRpYWwiLCJzaWduSW5XaXRoQ3VzdG9tVG9rZW4kMSIsImN1c3RvbVRva2VuIiwiTXVsdGlGYWN0b3JJbmZvSW1wbCIsImZhY3RvcklkIiwibWZhRW5yb2xsbWVudElkIiwiZW5yb2xsbWVudFRpbWUiLCJlbnJvbGxlZEF0IiwiX2Zyb21TZXJ2ZXJSZXNwb25zZSIsImVucm9sbG1lbnQiLCJQaG9uZU11bHRpRmFjdG9ySW5mb0ltcGwiLCJUb3RwTXVsdGlGYWN0b3JJbmZvSW1wbCIsInBob25lSW5mbyIsIl9zZXRBY3Rpb25Db2RlU2V0dGluZ3NPblJlcXVlc3QiLCJhY3Rpb25Db2RlU2V0dGluZ3MiLCJkeW5hbWljTGlua0RvbWFpbiIsImxpbmtEb21haW4iLCJjYW5IYW5kbGVDb2RlSW5BcHAiLCJoYW5kbGVDb2RlSW5BcHAiLCJpT1MiLCJidW5kbGVJZCIsImlPU0J1bmRsZUlkIiwiYW5kcm9pZCIsInBhY2thZ2VOYW1lIiwiYW5kcm9pZEluc3RhbGxBcHAiLCJpbnN0YWxsQXBwIiwiYW5kcm9pZE1pbmltdW1WZXJzaW9uQ29kZSIsIm1pbmltdW1WZXJzaW9uIiwiYW5kcm9pZFBhY2thZ2VOYW1lIiwicmVjYWNoZVBhc3N3b3JkUG9saWN5IiwicmVxdWVzdFR5cGUiLCJuZXdQYXNzd29yZCIsImF1dGhNb2R1bGFyIiwibmV3RW1haWwiLCJtZmFJbmZvIiwibXVsdGlGYWN0b3JJbmZvIiwiZGF0YSIsInByZXZpb3VzRW1haWwiLCJzaWduVXBSZXNwb25zZSIsInNldEFjdGlvbkNvZGVTZXR0aW5ncyIsInJlcXVlc3QyIiwiYWN0aW9uQ29kZVNldHRpbmdzMiIsImNyZWF0ZUF1dGhVcmkiLCJjb250aW51ZVVyaSIsImlkZW50aWZpZXIiLCJzaWduaW5NZXRob2RzIiwidXBkYXRlUHJvZmlsZSQxIiwicHJvZmlsZVJlcXVlc3QiLCJwYXNzd29yZFByb3ZpZGVyIiwiZmluZCIsInVwZGF0ZUVtYWlsT3JQYXNzd29yZCIsInByb2ZpbGUiLCJyYXdVc2VySW5mbyIsImlzTmV3VXNlciIsImtpbmQiLCJmaWx0ZXJlZFByb3ZpZGVySWQiLCJHZW5lcmljQWRkaXRpb25hbFVzZXJJbmZvIiwiRmFjZWJvb2tBZGRpdGlvbmFsVXNlckluZm8iLCJHaXRodWJBZGRpdGlvbmFsVXNlckluZm8iLCJHb29nbGVBZGRpdGlvbmFsVXNlckluZm8iLCJUd2l0dGVyQWRkaXRpb25hbFVzZXJJbmZvIiwic2NyZWVuTmFtZSIsIkZlZGVyYXRlZEFkZGl0aW9uYWxVc2VySW5mb1dpdGhVc2VybmFtZSIsInVzZXJuYW1lIiwibG9naW4iLCJNdWx0aUZhY3RvclNlc3Npb25JbXBsIiwiX2Zyb21JZHRva2VuIiwiX2Zyb21NZmFQZW5kaW5nQ3JlZGVudGlhbCIsIm1mYVBlbmRpbmdDcmVkZW50aWFsIiwibXVsdGlGYWN0b3JTZXNzaW9uIiwicGVuZGluZ0NyZWRlbnRpYWwiLCJNdWx0aUZhY3RvclJlc29sdmVySW1wbCIsInNlc3Npb24iLCJoaW50cyIsInNpZ25JblJlc29sdmVyIiwiX2Zyb21FcnJvciIsIm1mYVJlc3BvbnNlIiwiX3Byb2Nlc3MiLCJyZXNvbHZlU2lnbkluIiwiYXNzZXJ0aW9uRXh0ZXJuIiwiZXJyb3JJbnRlcm5hbCIsInN0YXJ0RW5yb2xsUGhvbmVNZmEiLCJmaW5hbGl6ZUVucm9sbFBob25lTWZhIiwic3RhcnRFbnJvbGxUb3RwTWZhIiwiZmluYWxpemVFbnJvbGxUb3RwTWZhIiwid2l0aGRyYXdNZmEiLCJNdWx0aUZhY3RvclVzZXJJbXBsIiwiZW5yb2xsZWRGYWN0b3JzIiwiX2Zyb21Vc2VyIiwiZ2V0U2Vzc2lvbiIsImVucm9sbCIsImZpbmFsaXplTWZhUmVzcG9uc2UiLCJ1bmVucm9sbCIsImluZm9PclVpZCIsIm11bHRpRmFjdG9yVXNlckNhY2hlIiwiV2Vha01hcCIsInVzZXJNb2R1bGFyIiwiU1RPUkFHRV9BVkFJTEFCTEVfS0VZIiwiQnJvd3NlclBlcnNpc3RlbmNlQ2xhc3MiLCJzdG9yYWdlUmV0cmlldmVyIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJnZXRJdGVtIiwiX1BPTExJTkdfSU5URVJWQUxfTVMkMSIsIklFMTBfTE9DQUxfU1RPUkFHRV9TWU5DX0RFTEFZIiwiQnJvd3NlckxvY2FsUGVyc2lzdGVuY2UiLCJsb2NhbFN0b3JhZ2UiLCJldmVudCIsInBvbGwiLCJvblN0b3JhZ2VFdmVudCIsImxpc3RlbmVycyIsImxvY2FsQ2FjaGUiLCJwb2xsVGltZXIiLCJmYWxsYmFja1RvUG9sbGluZyIsImZvckFsbENoYW5nZWRLZXlzIiwia2V5cyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJrZXkyIiwiX29sZFZhbHVlIiwibm90aWZ5TGlzdGVuZXJzIiwiZGV0YWNoTGlzdGVuZXIiLCJzdG9wUG9sbGluZyIsInRyaWdnZXJMaXN0ZW5lcnMiLCJzdG9yZWRWYWx1ZTIiLCJzdG9yZWRWYWx1ZSIsImxpc3RlbmVyIiwiZnJvbSIsInN0YXJ0UG9sbGluZyIsInNldEludGVydmFsIiwiU3RvcmFnZUV2ZW50IiwiY2xlYXJJbnRlcnZhbCIsImF0dGFjaExpc3RlbmVyIiwiQnJvd3NlclNlc3Npb25QZXJzaXN0ZW5jZSIsInNlc3Npb25TdG9yYWdlIiwiX2FsbFNldHRsZWQiLCJwcm9taXNlcyIsImZ1bGZpbGxlZCIsInJlYXNvbiIsIlJlY2VpdmVyIiwiZXZlbnRUYXJnZXQiLCJoYW5kbGVyc01hcCIsImhhbmRsZUV2ZW50IiwiZXhpc3RpbmdJbnN0YW5jZSIsInJlY2VpdmVycyIsInJlY2VpdmVyIiwiaXNMaXN0ZW5pbmd0byIsIm5ld0luc3RhbmNlIiwibWVzc2FnZUV2ZW50IiwiZXZlbnRJZCIsImV2ZW50VHlwZSIsImhhbmRsZXJzIiwicG9ydHMiLCJwb3N0TWVzc2FnZSIsImhhbmRsZXIiLCJvcmlnaW4iLCJfc3Vic2NyaWJlIiwiZXZlbnRIYW5kbGVyIiwiX3Vuc3Vic2NyaWJlIiwiX2dlbmVyYXRlRXZlbnRJZCIsImRpZ2l0cyIsIlNlbmRlciIsInRhcmdldCIsInJlbW92ZU1lc3NhZ2VIYW5kbGVyIiwibWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsIm9uTWVzc2FnZSIsImNsb3NlIiwiX3NlbmQiLCJ0aW1lb3V0IiwiTWVzc2FnZUNoYW5uZWwiLCJjb21wbGV0aW9uVGltZXIiLCJzdGFydCIsImFja1RpbWVyIiwicG9ydDIiLCJmaW5hbGx5IiwiX3dpbmRvdyIsIl9zZXRXaW5kb3dMb2NhdGlvbiIsIl9pc1dvcmtlciIsIl9nZXRBY3RpdmVTZXJ2aWNlV29ya2VyIiwic2VydmljZVdvcmtlciIsInJlZ2lzdHJhdGlvbiIsImFjdGl2ZSIsIl9nZXRTZXJ2aWNlV29ya2VyQ29udHJvbGxlciIsImNvbnRyb2xsZXIiLCJfZ2V0V29ya2VyR2xvYmFsU2NvcGUiLCJEQl9OQU1FIiwiREJfVkVSU0lPTiIsIkRCX09CSkVDVFNUT1JFX05BTUUiLCJEQl9EQVRBX0tFWVBBVEgiLCJEQlByb21pc2UiLCJ0b1Byb21pc2UiLCJnZXRPYmplY3RTdG9yZSIsImRiIiwiaXNSZWFkV3JpdGUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2RlbGV0ZURhdGFiYXNlIiwiaW5kZXhlZERCIiwiZGVsZXRlRGF0YWJhc2UiLCJfb3BlbkRhdGFiYXNlIiwib3BlbiIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIm9iamVjdFN0b3JlTmFtZXMiLCJjb250YWlucyIsIl9wdXRPYmplY3QiLCJwdXQiLCJnZXRPYmplY3QiLCJfZGVsZXRlT2JqZWN0IiwiX1BPTExJTkdfSU5URVJWQUxfTVMiLCJfVFJBTlNBQ1RJT05fUkVUUllfQ09VTlQiLCJJbmRleGVkREJMb2NhbFBlcnNpc3RlbmNlIiwicGVuZGluZ1dyaXRlcyIsInNlbmRlciIsInNlcnZpY2VXb3JrZXJSZWNlaXZlckF2YWlsYWJsZSIsImFjdGl2ZVNlcnZpY2VXb3JrZXIiLCJfd29ya2VySW5pdGlhbGl6YXRpb25Qcm9taXNlIiwiaW5pdGlhbGl6ZVNlcnZpY2VXb3JrZXJNZXNzYWdpbmciLCJfb3BlbkRiIiwiX3dpdGhSZXRyaWVzIiwib3AiLCJudW1BdHRlbXB0cyIsImluaXRpYWxpemVSZWNlaXZlciIsImluaXRpYWxpemVTZW5kZXIiLCJfb3JpZ2luIiwiX3BvbGwiLCJrZXlQcm9jZXNzZWQiLCJfZGF0YSIsInJlc3VsdHMiLCJub3RpZnlTZXJ2aWNlV29ya2VyIiwiX3dpdGhQZW5kaW5nV3JpdGUiLCJ3cml0ZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJrZXlzSW5SZXN1bHQiLCJmYmFzZV9rZXkiLCJsb2NhbEtleSIsInN0YXJ0U2lnbkluUGhvbmVNZmEiLCJmaW5hbGl6ZVNpZ25JblBob25lTWZhIiwiZmluYWxpemVTaWduSW5Ub3RwTWZhIiwiX0pTTE9BRF9DQUxMQkFDSyIsIk5FVFdPUktfVElNRU9VVF9ERUxBWSIsIlJlQ2FwdGNoYUxvYWRlckltcGwiLCJob3N0TGFuZ3VhZ2UiLCJsaWJyYXJ5U2VwYXJhdGVseUxvYWRlZCIsImxvYWQiLCJobCIsImlzSG9zdExhbmd1YWdlVmFsaWQiLCJzaG91bGRSZXNvbHZlSW1tZWRpYXRlbHkiLCJyZWNhcHRjaGEiLCJ3aWRnZXRJZCIsIm9ubG9hZCIsImNsZWFyZWRPbmVJbnN0YW5jZSIsIk1vY2tSZUNhcHRjaGFMb2FkZXJJbXBsIiwiUkVDQVBUQ0hBX1ZFUklGSUVSX1RZUEUiLCJERUZBVUxUX1BBUkFNUyIsInRoZW1lIiwiZGVzdHJveWVkIiwidG9rZW5DaGFuZ2VMaXN0ZW5lcnMiLCJyZW5kZXJQcm9taXNlIiwiaXNJbnZpc2libGUiLCJtYWtlVG9rZW5DYWxsYmFjayIsIl9yZWNhcHRjaGFMb2FkZXIiLCJ2YWxpZGF0ZVN0YXJ0aW5nU3RhdGUiLCJhc3NlcnROb3REZXN0cm95ZWQiLCJnZXRBc3NlcnRlZFJlY2FwdGNoYSIsInRva2VuQ2hhbmdlIiwibWFrZVJlbmRlclByb21pc2UiLCJfcmVzZXQiLCJjbGVhciIsImNoaWxkTm9kZXMiLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUNoaWxkIiwic2l0ZWtleSIsImhhc0NoaWxkTm9kZXMiLCJleGlzdGluZyIsImdsb2JhbEZ1bmMiLCJpbml0IiwiZ3VhcmFudGVlZEVtcHR5IiwiZG9tUmVhZHkiLCJDb25maXJtYXRpb25SZXN1bHRJbXBsIiwib25Db25maXJtYXRpb24iLCJjb25maXJtIiwiYXV0aENyZWRlbnRpYWwiLCJhcHBWZXJpZmllciIsIl92ZXJpZnlQaG9uZU51bWJlciIsInBob25lSW5mb09wdGlvbnMiLCJzdGFydFBob25lTWZhRW5yb2xsbWVudFJlcXVlc3QiLCJzdGFydEVucm9sbFBob25lTWZhQWN0aW9uQ2FsbGJhY2siLCJyZXF1ZXN0V2l0aFJlY2FwdGNoYVYyIiwiaW5qZWN0UmVjYXB0Y2hhVjJUb2tlbiIsInN0YXJ0UGhvbmVNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJwaG9uZVNlc3Npb25JbmZvIiwibXVsdGlGYWN0b3JIaW50IiwibXVsdGlGYWN0b3JVaWQiLCJzdGFydFBob25lTWZhU2lnbkluUmVxdWVzdCIsInN0YXJ0U2lnbkluUGhvbmVNZmFBY3Rpb25DYWxsYmFjayIsInN0YXJ0UGhvbmVNZmFTaWduSW5SZXNwb25zZSIsInBob25lUmVzcG9uc2VJbmZvIiwic2VuZFBob25lVmVyaWZpY2F0aW9uQ29kZVJlcXVlc3QiLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlQWN0aW9uQ2FsbGJhY2siLCJzZW5kUGhvbmVWZXJpZmljYXRpb25Db2RlUmVzcG9uc2UiLCJyZWNhcHRjaGFWMlZlcmlmaWVyIiwicmVjYXB0Y2hhVjJUb2tlbiIsInJlY2FwdGNoYVZlcnNpb24iLCJ2ZXJpZnlQaG9uZU51bWJlciIsInBob25lT3B0aW9ucyIsImFwcGxpY2F0aW9uVmVyaWZpZXIiLCJQSE9ORV9TSUdOX0lOX01FVEhPRCIsIl93aXRoRGVmYXVsdFJlc29sdmVyIiwicmVzb2x2ZXJPdmVycmlkZSIsIklkcENyZWRlbnRpYWwiLCJfYnVpbGRJZHBSZXF1ZXN0Iiwic2Vzc2lvbklkIiwicmV0dXJuSWRwQ3JlZGVudGlhbCIsIl9zaWduSW4iLCJfcmVhdXRoIiwiX2xpbmsiLCJBYnN0cmFjdFBvcHVwUmVkaXJlY3RPcGVyYXRpb24iLCJwZW5kaW5nUHJvbWlzZSIsImV2ZW50TWFuYWdlciIsIm9uRXhlY3V0aW9uIiwicmVnaXN0ZXJDb25zdW1lciIsIm9uQXV0aEV2ZW50IiwidXJsUmVzcG9uc2UiLCJnZXRJZHBUYXNrIiwib25FcnJvciIsInVucmVnaXN0ZXJBbmRDbGVhblVwIiwidW5yZWdpc3RlckNvbnN1bWVyIiwiY2xlYW5VcCIsIl9QT0xMX1dJTkRPV19DTE9TRV9USU1FT1VUIiwicmVzb2x2ZXJJbnRlcm5hbCIsIlBvcHVwT3BlcmF0aW9uIiwiZXhlY3V0ZU5vdE51bGwiLCJhdXRoV2luZG93IiwicG9sbElkIiwiY3VycmVudFBvcHVwQWN0aW9uIiwiY2FuY2VsIiwiX29wZW5Qb3B1cCIsImFzc29jaWF0ZWRFdmVudCIsIl9vcmlnaW5WYWxpZGF0aW9uIiwiX2lzSWZyYW1lV2ViU3RvcmFnZVN1cHBvcnRlZCIsImlzU3VwcG9ydGVkIiwicG9sbFVzZXJDYW5jZWxsYXRpb24iLCJjbG9zZWQiLCJQRU5ESU5HX1JFRElSRUNUX0tFWSIsInJlZGlyZWN0T3V0Y29tZU1hcCIsIlJlZGlyZWN0QWN0aW9uIiwicmVhZHlPdXRjb21lIiwiaGFzUGVuZGluZ1JlZGlyZWN0IiwiX2dldEFuZENsZWFyUGVuZGluZ1JlZGlyZWN0U3RhdHVzIiwicGVuZGluZ1JlZGlyZWN0S2V5IiwicmVzb2x2ZXJQZXJzaXN0ZW5jZSIsIl9zZXRQZW5kaW5nUmVkaXJlY3RTdGF0dXMiLCJfY2xlYXJSZWRpcmVjdE91dGNvbWVzIiwiX3NpZ25JbldpdGhSZWRpcmVjdCIsIl9vcGVuUmVkaXJlY3QiLCJfcmVhdXRoZW50aWNhdGVXaXRoUmVkaXJlY3QiLCJwcmVwYXJlVXNlckZvclJlZGlyZWN0IiwiX2xpbmtXaXRoUmVkaXJlY3QiLCJfZ2V0UmVkaXJlY3RSZXN1bHQiLCJyZXNvbHZlckV4dGVybiIsIkVWRU5UX0RVUExJQ0FUSU9OX0NBQ0hFX0RVUkFUSU9OX01TIiwiQXV0aEV2ZW50TWFuYWdlciIsImNhY2hlZEV2ZW50VWlkcyIsImNvbnN1bWVycyIsInF1ZXVlZFJlZGlyZWN0RXZlbnQiLCJoYXNIYW5kbGVkUG90ZW50aWFsUmVkaXJlY3QiLCJsYXN0UHJvY2Vzc2VkRXZlbnRUaW1lIiwiYXV0aEV2ZW50Q29uc3VtZXIiLCJpc0V2ZW50Rm9yQ29uc3VtZXIiLCJzZW5kVG9Db25zdW1lciIsInNhdmVFdmVudFRvQ2FjaGUiLCJvbkV2ZW50IiwiaGFzRXZlbnRCZWVuSGFuZGxlZCIsImhhbmRsZWQiLCJjb25zdW1lciIsImlzUmVkaXJlY3RFdmVudCIsImlzTnVsbFJlZGlyZWN0RXZlbnQiLCJldmVudElkTWF0Y2hlcyIsImV2ZW50VWlkIiwidiIsIl9nZXRQcm9qZWN0Q29uZmlnIiwiSVBfQUREUkVTU19SRUdFWCIsIkhUVFBfUkVHRVgiLCJfdmFsaWRhdGVPcmlnaW4iLCJhdXRob3JpemVkRG9tYWlucyIsImRvbWFpbiIsIm1hdGNoRG9tYWluIiwiY3VycmVudFVybCIsImhvc3RuYW1lIiwiVVJMIiwiY2VVcmwiLCJlc2NhcGVkRG9tYWluUGF0dGVybiIsIlJlZ0V4cCIsIk5FVFdPUktfVElNRU9VVCIsInJlc2V0VW5sb2FkZWRHYXBpTW9kdWxlcyIsImJlYWNvbiIsIl9fX2pzbCIsIkgiLCJoaW50IiwiciIsIkwiLCJDUCIsImxvYWRHYXBpIiwibG9hZEdhcGlJZnJhbWUiLCJnYXBpIiwiaWZyYW1lcyIsImdldENvbnRleHQiLCJvbnRpbWVvdXQiLCJJZnJhbWUiLCJjYk5hbWUiLCJjYWNoZWRHQXBpTG9hZGVyIiwiX2xvYWRHYXBpIiwiUElOR19USU1FT1VUIiwiSUZSQU1FX1BBVEgiLCJFTVVMQVRFRF9JRlJBTUVfUEFUSCIsIklGUkFNRV9BVFRSSUJVVEVTIiwidG9wIiwiaGVpZ2h0IiwidGFiaW5kZXgiLCJFSURfRlJPTV9BUElIT1NUIiwiZ2V0SWZyYW1lVXJsIiwiZWlkIiwiZnciLCJfb3BlbklmcmFtZSIsImNvbnRleHQiLCJnYXBpMiIsIndoZXJlIiwibWVzc2FnZUhhbmRsZXJzRmlsdGVyIiwiQ1JPU1NfT1JJR0lOX0lGUkFNRVNfRklMVEVSIiwiYXR0cmlidXRlcyIsImRvbnRjbGVhciIsImlmcmFtZSIsInJlc3R5bGUiLCJzZXRIaWRlT25MZWF2ZSIsIm5ldHdvcmtFcnJvciIsIm5ldHdvcmtFcnJvclRpbWVyIiwiY2xlYXJUaW1lckFuZFJlc29sdmUiLCJwaW5nIiwiQkFTRV9QT1BVUF9PUFRJT05TIiwicmVzaXphYmxlIiwic3RhdHVzYmFyIiwidG9vbGJhciIsIkRFRkFVTFRfV0lEVEgiLCJERUZBVUxUX0hFSUdIVCIsIlRBUkdFVF9CTEFOSyIsIkZJUkVGT1hfRU1QVFlfVVJMIiwiQXV0aFBvcHVwIiwid2luZG93MiIsIl9vcGVuIiwic2NyZWVuIiwiYXZhaWxIZWlnaHQiLCJhdmFpbFdpZHRoIiwic2Nyb2xsYmFycyIsIm9wdGlvbnNTdHJpbmciLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW0iLCJvcGVuQXNOZXdXaW5kb3dJT1MiLCJuZXdXaW4iLCJmb2N1cyIsImNsaWNrIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJXSURHRVRfUEFUSCIsIkVNVUxBVE9SX1dJREdFVF9QQVRIIiwiRklSRUJBU0VfQVBQX0NIRUNLX0ZSQUdNRU5UX0lEIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2dldFJlZGlyZWN0VXJsIiwiYXV0aFR5cGUiLCJyZWRpcmVjdFVybCIsImFkZGl0aW9uYWxQYXJhbXMiLCJpc0VtcHR5IiwidGlkIiwicGFyYW1zRGljdCIsImFwcENoZWNrVG9rZW5GcmFnbWVudCIsImdldEhhbmRsZXJCYXNlIiwiV0VCX1NUT1JBR0VfU1VQUE9SVF9LRVkiLCJCcm93c2VyUG9wdXBSZWRpcmVjdFJlc29sdmVyIiwiZXZlbnRNYW5hZ2VycyIsIm9yaWdpblZhbGlkYXRpb25Qcm9taXNlcyIsInByb21pc2UyIiwiaW5pdEFuZEdldE1hbmFnZXIiLCJyZWdpc3RlciIsImlmcmFtZUV2ZW50IiwiYXV0aEV2ZW50Iiwic2VuZCIsIk11bHRpRmFjdG9yQXNzZXJ0aW9uSW1wbCIsIl9maW5hbGl6ZUVucm9sbCIsIl9maW5hbGl6ZVNpZ25JbiIsIlBob25lTXVsdGlGYWN0b3JBc3NlcnRpb25JbXBsIiwiX2Zyb21DcmVkZW50aWFsIiwicGhvbmVWZXJpZmljYXRpb25JbmZvIiwiRkFDVE9SX0lEIiwiYXNzZXJ0aW9uRm9yRW5yb2xsbWVudCIsIm9uZVRpbWVQYXNzd29yZCIsIlRvdHBNdWx0aUZhY3RvckFzc2VydGlvbkltcGwiLCJfZnJvbVNlY3JldCIsImFzc2VydGlvbkZvclNpZ25JbiIsImVucm9sbG1lbnRJZCIsIl9mcm9tRW5yb2xsbWVudElkIiwiZ2VuZXJhdGVTZWNyZXQiLCJtZmFTZXNzaW9uIiwidG90cEVucm9sbG1lbnRJbmZvIiwiX2Zyb21TdGFydFRvdHBNZmFFbnJvbGxtZW50UmVzcG9uc2UiLCJvdHAiLCJ0b3RwVmVyaWZpY2F0aW9uSW5mbyIsIl9tYWtlVG90cFZlcmlmaWNhdGlvbkluZm8iLCJzZWNyZXRLZXkiLCJoYXNoaW5nQWxnb3JpdGhtIiwiY29kZUxlbmd0aCIsImNvZGVJbnRlcnZhbFNlY29uZHMiLCJlbnJvbGxtZW50Q29tcGxldGlvbkRlYWRsaW5lIiwidG90cFNlc3Npb25JbmZvIiwic2hhcmVkU2VjcmV0S2V5IiwidmVyaWZpY2F0aW9uQ29kZUxlbmd0aCIsInBlcmlvZFNlYyIsImZpbmFsaXplRW5yb2xsbWVudFRpbWUiLCJnZW5lcmF0ZVFyQ29kZVVybCIsImFjY291bnROYW1lIiwiaXNzdWVyIiwidXNlRGVmYXVsdHMiLCJfaXNFbXB0eVN0cmluZyIsImlucHV0IiwiQXV0aEludGVyb3AiLCJpbnRlcm5hbExpc3RlbmVycyIsImdldFVpZCIsImFzc2VydEF1dGhDb25maWd1cmVkIiwiYWRkQXV0aFRva2VuTGlzdGVuZXIiLCJ1cGRhdGVQcm9hY3RpdmVSZWZyZXNoIiwicmVtb3ZlQXV0aFRva2VuTGlzdGVuZXIiLCJnZXRWZXJzaW9uRm9yUGxhdGZvcm0iLCJyZWdpc3RlckF1dGgiLCJfcmVnaXN0ZXJDb21wb25lbnQiLCJpbXBvcnRfY29tcG9uZW50IiwiQ29tcG9uZW50IiwiZ2V0UHJvdmlkZXIiLCJzZXRJbnN0YW50aWF0aW9uTW9kZSIsInNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrIiwiX2luc3RhbmNlSWRlbnRpZmllciIsIl9pbnN0YW5jZSIsImF1dGhJbnRlcm5hbFByb3ZpZGVyIiwicmVnaXN0ZXJWZXJzaW9uIiwiREVGQVVMVF9JRF9UT0tFTl9NQVhfQUdFIiwiYXV0aElkVG9rZW5NYXhBZ2UiLCJnZXRFeHBlcmltZW50YWxTZXR0aW5nIiwibGFzdFBvc3RlZElkVG9rZW4iLCJtaW50Q29va2llRmFjdG9yeSIsImlkVG9rZW5SZXN1bHQiLCJpZFRva2VuQWdlIiwiZ2V0QXBwIiwiYXV0aFRva2VuU3luY1BhdGgiLCJpc1NlY3VyZUNvbnRleHQiLCJhdXRoVG9rZW5TeW5jVXJsIiwibWludENvb2tpZSIsImF1dGhFbXVsYXRvckhvc3QiLCJnZXREZWZhdWx0RW11bGF0b3JIb3N0IiwiZ2V0U2NyaXB0UGFyZW50RWxlbWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwib25lcnJvciIsImNoYXJzZXQiLCJpbXBvcnRfYXBwMiIsInJlcXVpcmUiLCJpbXBvcnRfdXRpbDIiLCJpbXBv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