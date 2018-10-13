const { series, rimraf } = require('nps-utils');

module.exports = {
	scripts: {
		default: 'nps serve',
		serve: {
			script: series('node build.js', 'parcel src/index.html'),
			description: 'Starts the dev server',
		},
		build: {
			script: series(
				rimraf('.cache'),
				rimraf('dist/'),
				'node build.js',
				'parcel build src/index.html --public-url /me/'
			),
			description: 'Build and minify the site',
		},
		// deploy: {
		// 	script: series('nps build', 'node gh-pages.js'),
		// 	description: 'Push the build site to gh-pages',
		// },
	},
};
