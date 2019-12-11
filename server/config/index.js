const _ = require('lodash')

const baseConfig = require('./base')

class Env {
    isDev () {
        if( !process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return true
        }
    }
    isPro () {
        if( !process.env.NODE_ENV === 'production') {
            return true
        }
    }
}
let env = new Env() 

// 判断环境指定数据库路径
if (env.isDev) {
    baseConfig.db = baseConfig.devDb
} else {
    baseConfig.db = baseConfig.proDb
}

module.exports = _.defaultsDeep(baseConfig, env)