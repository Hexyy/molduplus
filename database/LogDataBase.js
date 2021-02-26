const { Database } = require('g9db')
const db = new Database(require('../settings/ayarlar').ayarlar.mongoDB , 'moldup-logs')

module.exports.log = db