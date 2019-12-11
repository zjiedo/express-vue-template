const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
let baseConfig = require('./webpack.base.config')

baseConfig.entry.app.unshift("webpack-hot-middleware/client");

let config = require('../config')

module.exports = webpackMerge(baseConfig,{
    mode: 'development',
    devtool: '#inline-cheap-source-map',

    module: {
        rules:[
            {
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: ["style-loader", "css-loader", "postcss-loader","sass-loader"]
				}
			}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    performance: {
        hints: false
    }
})