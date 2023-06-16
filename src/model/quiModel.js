const mongoose = require('mongoose')

const quiSchema = new mongoose.Schema({
    id:String,
    periodoDia:String,
    tipoTarefa:{type:String, required:true},
    nomeTarefa:{type:String, required:true},
})

const quintas = mongoose.model('quintas', quiSchema)

module.exports = quintas