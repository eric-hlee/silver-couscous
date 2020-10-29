var path = require('path');

module.exports = {
	// change to .tsx if necessary
	entry: './src/App.js',
	output: {
		filename: './dist/bundle.js',
	},
	resolve: {
		// changed from extensions: [".js", ".jsx"]
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.(css|s[ac]ss)$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=10000',
			},
			// changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
			{
				test: /\.(t|j)sx?$/,
				use: { loader: 'ts-loader' },
				exclude: /node_modules/,
			},
			// addition - add source-map support
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'source-map-loader',
			},
		],
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	// addition - add source-map support
	devtool: 'source-map',
};
