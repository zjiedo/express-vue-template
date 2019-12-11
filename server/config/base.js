const pkg = require('../../package.json')

module.exports = {
    app: {
        name: pkg.name,
        concatEmail: 'zjiedo@163.com'
    },
    ip: '127.0.0.1',
    port: '8000',
    devDb: {
        url: `mongodb://localhost:27017/${ pkg.name }-dev`,
        options: {
            autoIndex: false,
            autoReconnect: true,
            reconnectInterval: 500,
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    proDb: {
        url: `mongodb://localhost:27017/${ pkg.name }`,
        options: {
            autoIndex: false,
            autoReconnect: true,
            reconnectInterval: 500,
            poolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },

}

