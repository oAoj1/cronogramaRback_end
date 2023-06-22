const mongoose = require('mongoose')

const terSchema = new mongoose.Schema({
    id:String,
    periodoDia:String,
    tipoTarefa:{type:String, required:true},
    nomeTarefa:{type:String, required:true},
    concluido:Boolean
})

const tercas = mongoose.model('tercas', terSchema)

module.exports = tercas