const mongoose = require('mongoose')

const uri = toString(process.env.MONGO_CONNECT)

mongoose.connect(uri)

let db = mongoose.connection

module.exports = db