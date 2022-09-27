/**
 * Bundle react, react-dom, and other external dependencies that your app requires
 */
import { createRequire } from 'node:module';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

if (!process.env.NODE_ENV) throw new Error('Must specify NODE_ENV');

const require = createRequire(import.meta.url);

const packages = [
	{
		name: 'React',
		package: 'react',
		file: 'public/assets/bundle/react.js',
		exports: 'default',
	},
	{
		name: 'ReactDOM',
		package: 'react-dom',
		file: 'public/assets/bundle/react-dom.js',
		exports: 'default',
	},
	{
		name: 'ReactDOMClient',
		package: 'react-dom/client',
		file: 'public/assets/bundle/react-dom-client.js',
		exports: 'named',
	},
	{
		name: 'ReactHelmet',
		package: './lib/helmet.js',
		file: 'public/assets/bundle/react-helmet.js',
		exports: 'default',
	},
];

/**
 * @type {import('rollup').RollupOptions[]}
 */
const configs = [];

for (const pkg of packages)
	configs.push({
		input: require.resolve(pkg.package),
		output: {
			format: 'umd',
			file: pkg.file,
			name: pkg.name,
			sourcemap: true,
			exports: pkg.exports,
			globals: Object.fromEntries(packages.map((p) => [p.package, p.name])),
		},
		plugins: [
			commonjs(),
			nodeResolve({
				resolveOnly: (m) => !packages.some((p) => p.package === m),
			}),
			replace({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				preventAssignment: true,
			}),
			process.env.NODE_ENV === 'production' && terser(),
		],
	});

export default configs;
