const mongoose = require('mongoose')

mongoose.connect(process.env.CONEXAO_MONGO)

let db = mongoose.connection

module.exports = db