const mongoose = require('mongoose')

const sexSchema = new mongoose.Schema({
    id:String,
    periodoDia:String,
    tipoTarefa:{type:String, required:true},
    nomeTarefa:{type:String, required:true}
})

const sextas = mongoose.model('sextas', sexSchema)

module.exports = sextas