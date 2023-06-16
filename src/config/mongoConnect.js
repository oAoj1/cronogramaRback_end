const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://joao:123@cluster0.6nuspyb.mongodb.net/dias-semana')

let db = mongoose.connection

module.exports = db