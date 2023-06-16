const mongoose = require('mongoose')

toString(mongoose.connect(process.env.MONGO_CONNECT))

let db = mongoose.connection

module.exports = db