const mongoose = require('mongoose')
const config = require('../config')
const logger = require('./logger')

module.exports = (() => {
    let db;

    mongoose.Promise = global.Promise;

    if(mongoose.connection.readyState !== 1) {
        db = mongoose.connect(config.db.url, config.db.options ,function mongoAfterConnect(err) {
			if (err) {
				logger.error("Could not connect to MongoDB!");
				return logger.error(err);
			}
        })
		

		mongoose.connection.on("error", function mongoConnectionError(err) {
			if (err.message.code === "ETIMEDOUT") {
				logger.warn("Mongo connection timeout!", err);
				setTimeout(() => {
					mongoose.connect(config.db.uri, config.db.options);
				}, 1000);
				return;
			}

			logger.error("Could not connect to MongoDB!");
			return logger.error(err);
		});


		mongoose.connection.once("open", function mongoAfterOpen() {
			logger.info("Mongo DB connected.");
		});
    } else {
        logger.info("Mongo already connected.");
        db = mongoose
    }

    return db;
   
})