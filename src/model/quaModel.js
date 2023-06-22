const mongoose = require('mongoose')

const quaShcema = new mongoose.Schema({
    id:String,
    periodoDia:String,
    tipoTarefa:{type:String, required:true},
    nomeTarefa:{type:String, required:true},
    concluido:Boolean
})

const quartas = mongoose.model('quartas', quaShcema)

module.exports = quartas