System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/platform',
				version: '0.1.6-dev.11',
				languages: {
					default: 'en',
					supported: ['en', 'es']
				},
				environment: 'development',
				'global.css': true,
				params: {
					project: 'betterAgile',
					apis: {
						chat: 'https://dev.agents.api.aimpact.partners',
						ailearn: 'https://dev.ailearn.api.aimpact.partners',
						betterAgile: 'https://agents-api-883367315651.europe-west10.run.app'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
