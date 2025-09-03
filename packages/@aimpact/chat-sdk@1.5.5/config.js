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
        "environment": "local",
        "global.css": true,
        "layout": "main-layout",
        "params": {
          "project": "betterMind"
        },
        "ssr": {},
        "backend": {}
      });
    }
  };
});