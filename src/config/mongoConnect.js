const mongoose = require('mongoose')

mongoose.connect(toString(process.env.MONGO_CONNECT))

let db = mongoose.connection

module.exports = db