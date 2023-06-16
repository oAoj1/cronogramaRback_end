const mongoose = require('mongoose')

const uri = process.env.MONGO_CONNECT

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection

module.exports = db