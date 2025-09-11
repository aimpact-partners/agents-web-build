System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/platform',
				version: '0.2.4',
				languages: {
					default: 'en',
					supported: ['en', 'es']
				},
				environment: 'development',
				'global.css': true,
				params: {
					apis: {
						playground: 'https://platform-883367315651.us-central1.run.app',
						agents: 'https://agents-api-883367315651.europe-west10.run.app',
						realtime: 'wss://agents-api-883367315651.europe-west10.run.app'
					},
					firebase: {
						apiKey: 'AIzaSyCID7Abuob1R86qIAMyQ-zY0O0DXUtCRYs',
						authDomain: 'agents-api-dev.firebaseapp.com',
						projectId: 'agents-api-dev',
						storageBucket: 'agents-api-dev.firebasestorage.app',
						messagingSenderId: '883367315651',
						appId: '1:883367315651:web:c683b5effb3c3f96e5fa76',
						measurementId: 'G-8VBFZXEBQZ'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
