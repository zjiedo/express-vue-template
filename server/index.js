require("babel-polyfill");
const moment = require('moment')

const logger = require('./core/logger')
const config = require('./config')

async function  init() {
	const db = await require('./core/mongo')()
	let app = require('./core/express')(db)

	app.listen(config.port ,config.ip, (err) => {
		logger.info(`-------------------------------------------------------`)
		logger.info(`------- server is start at  ${ moment().format('YYYY-MM-DD HH:mm:ss') } -------`)
		logger.info(`-------- server is running at  ${ config.ip + ':' + config.port } ---------`)
		logger.info(`-------------------------------------------------------`)
	})
}
init()


