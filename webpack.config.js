const path = require('path');
const SRC_DIR = path.join(__dirname, '/client')
module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};