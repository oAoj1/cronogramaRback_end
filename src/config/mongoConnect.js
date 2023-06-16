const mongoose = require('mongoose')

const uri = process.env.MONGO_CONNECT

mongoose.createConnect(uri)

let db = mongoose.connection

module.exports = db