const { Database } = require('g9db')
const db = new Database(require('../settings/ayarlar').ayarlar.mongoDB , 'moldup-karsilama')

module.exports.karsilama = db