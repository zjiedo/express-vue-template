const path = require('path')
const babelpolyfill = require("babel-polyfill")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    
    entry: {
		app: ["babel-polyfill","./client/main.js"],
		vendor: [
			"vue",
			"vue-router",
			"vuex",
			"lodash",
		]
    },
    output: {
        path: path.resolve(__dirname, '..', 'server', 'public', 'app'),
        publicPath: '/app/',
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        rules: [
            {
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"]
			},
			// ES6/7 syntax and JSX transpiling out of the box
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: [/node_modules/, /vendor/]
			},
			{
				test: /\.gif$/,
				loader: "url-loader",
				options: {
					name: "images/[name]-[hash:6].[ext]",
					limit: 10000
				}
			},
			{
				test: /\.png$/,
				loader: "url-loader",
				options: {
					name: "images/[name]-[hash:6].[ext]",
					limit: 10000
				}
			},
			{
				test: /\.jpg$/,
				loader: "file-loader",
				options: {
					name: "images/[name]-[hash:6].[ext]"
				}
			},
			// required for font-awesome icons
			{
				test: /\.(woff2?|svg)$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					prefix: "font/"
				}
			},
			{
				test: /\.(ttf|eot)$/,
				loader: "file-loader",
				options: {
					prefix: "font/"
				}
            }
        ]
    },
    resolve: {
        extensions: [".vue", ".js", ".json"],
		mainFiles: ["index"],
		alias: {
			"images": path.resolve(__dirname, "..", "client", "images"),
			"vue$": "vue/dist/vue.common.js"
		}
        
    },
    plugins: [
        // make sure to include the plugin for the magic
		new VueLoaderPlugin()
	],
	performance: {
		hints: false
	}
    
}
