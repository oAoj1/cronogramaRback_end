const mongoose = require('mongoose')

const segSchema = new mongoose.Schema({
    id:String,
    periodoDia:String,
    tipoTarefa:{type:String, required:true},
    nomeTarefa:{type:String, required:true},
    concluido:Boolean
})

const segundas = mongoose.model('segundas', segSchema)

module.exports = segundas