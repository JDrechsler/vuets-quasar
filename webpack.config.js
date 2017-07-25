var path = require('path')
var webpack = require('webpack')
var fs = require('fs')

module.exports = {
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		hotOnly: true,
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map',
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			compNamesFromWebpack: JSON.stringify(getCompList())
		})
	]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}

function getCompList(dir = "./src/components") {
	return fs.readdirSync(dir)
		.reduce((files, file) =>
			fs.statSync(path.join(dir, file)).isDirectory() ?
				files.concat(read(path.join(file))) :
				files.concat(path.join(file)),
		[])
}