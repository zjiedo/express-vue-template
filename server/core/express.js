const path = require('path')
const express = require('express')

function initWebpack (app) {
	// Webpack middleware in development mode
	if (process.env.NODE_ENV !== "production") {
		let webpack = require("webpack")
		let wpConfig = require("../../build/webpack.dev.config")

		let compiler = webpack(wpConfig)
		let devMiddleware = require('webpack-dev-middleware') // eslint-disable-line
		app.use(devMiddleware(compiler, {
			noInfo: true,
			publicPath: wpConfig.output.publicPath,
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			//stats: 'errors-only'
			stats: {
				colors: true
			}
		}))

		let hotMiddleware = require('webpack-hot-middleware') // eslint-disable-line
		app.use(hotMiddleware(compiler,{
            noInfo: true
        }))
	}
}

function initViewEngine (app) {
    app.set('views',path.resolve(__dirname, '..', 'views'))
    app.set('view engine', 'pug')

    if(process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '..', './public/')))
    }
}
module.exports = ((db) => {
		let app = express()

    // 开发环境下，前端代码热更新
    initWebpack(app)
    
    // 初始化模板引擎，开放静态资源
    initViewEngine(app)

    // 设置路由
		require('../routes')(app)
		
		return app
})