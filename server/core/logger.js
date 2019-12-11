const { createLogger, format, transports } = require('winston')

const custom = { 
 levels: {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3
 }
};
const logger = createLogger({
    level: "debug",
    levels: custom.levels,
    format: format.json(),
    colorize: true,
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' })
    ]
})

logger.add(new transports.Console({
  format: format.combine(
    format.colorize(),
    format.simple()
  )
}));

module.exports = logger;