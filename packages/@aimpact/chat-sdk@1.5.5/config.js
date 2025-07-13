System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/chat-sdk",
        "version": "1.5.5",
        "languages": {
          "default": "en",
          "supported": ["en", "es", "pr"]
        },
        "environment": "development",
        "global.css": true,
        "local": "web",
        "layout": "main-layout",
        "params": {
          "project": "betterMind",
          "baseUrl": "https://dev.app.rvd.ai",
          "apis": {
            "chat": "https://chat-api-http-v2-rb5caohzgq-uc.a.run.app"
          }
        }
      });
    }
  };
});