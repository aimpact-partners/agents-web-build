System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/platform",
        "version": "0.1.9",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "environment": "development",
        "global.css": true,
        "params": {
          "project": "better-mind",
          "apis": {
            "chat": "https://dev.agents.api.aimpact.partners",
            "ailearn": "https://dev.ailearn.api.aimpact.partners",
            "better-mind": "https://agents-api-883367315651.europe-west10.run.app",
            "playground": "https://platform-883367315651.us-central1.run.app",
            "agents": "https://agents-api-883367315651.europe-west10.run.app",
            "realtime": "wss://agents-api-883367315651.europe-west10.run.app"
          }
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});