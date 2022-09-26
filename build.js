/**
 * Copies the appropiate React scripts to the public directory
 */
import { copyFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

if (!process.env.NODE_ENV) throw new Error('NODE_ENV must be specified');

// correctly resolve path to node_modules
const require = createRequire(import.meta.url);

/**
 * Description of app dependencies
 * @type {Record<string, Record<string, URL>>}
 */
const scripts = {
	react: {
		development: new URL(
			'./umd/react.development.js',
			pathToFileURL(require.resolve('react'))
		),
		production: new URL(
			'./umd/react.production.min.js',
			pathToFileURL(require.resolve('react'))
		),
	},
	'react-dom': {
		development: new URL(
			'./umd/react-dom.development.js',
			pathToFileURL(require.resolve('react-dom'))
		),
		production: new URL(
			'./umd/react-dom.production.min.js',
			pathToFileURL(require.resolve('react-dom'))
		),
	},
	// Add more scripts here...
	/*
	'react-router-dom': {
		development: new URL(
			'./umd/react-router-dom.development.js',
			pathToFileURL(require.resolve('react-router-dom'))
		),
		production: new URL(
			'./umd/react-router-dom.production.min.js',
			pathToFileURL(require.resolve('react-router-dom'))
		),
	},
	*/
};

const jsDir = new URL('./public/assets/js/', import.meta.url);

try {
	await mkdir(jsDir, { recursive: true });
} catch (err) {
	if (err?.code !== 'EEXIST') throw err;
}

for (const script in scripts) {
	if (!(process.env.NODE_ENV in scripts[script]))
		throw new Error(
			`${script} didn't contain script for ${process.env.NODE_ENV}`
		);

	const from = scripts[script][process.env.NODE_ENV];

	const dest = new URL(script + '.js', jsDir);

	console.log('Copy');
	console.log(`\tFrom: ${from.toString()}`);
	console.log(`\tTo  : ${dest.toString()}`);

	await copyFile(scripts[script][process.env.NODE_ENV], dest);

	// attempt to copy sourcemap if it exists
	try {
		await copyFile(
			new URL(scripts[script][process.env.NODE_ENV].toString() + '.map'),
			new URL(dest.toString() + '.map')
		);
	} catch (err) {
		if (err?.code !== 'ENOENT') throw err;
	}
}
