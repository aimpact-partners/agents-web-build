System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/platform',
				version: '0.2.0',
				languages: {
					default: 'en',
					supported: ['en', 'es']
				},
				environment: 'local',
				'global.css': true,
				params: {
					project: 'better-mind',
					apis: {
						chat: 'https://agents-api-883367315651.europe-west10.run.app',
						ailearn: 'https://dev.ailearn.api.aimpact.partners',
						'better-mind': 'https://agents-api-883367315651.europe-west10.run.app',
						playground: 'http://localhost:5000',
						agents: 'https://agents-api-883367315651.europe-west10.run.app',
						realtime: 'wss://agents-api-883367315651.europe-west10.run.app'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
