const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT)

let db = mongoose.connection

module.exports = db