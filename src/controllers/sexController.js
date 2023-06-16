const sextas = require('../model/sexModel.js')

async function lerSexta(req,res){
    try{
        const exibirSexta = await sextas.find()
        return res.status(200).json(exibirSexta)
        
    }catch(error){
        console.log(error.message)
    }
}

async function criarSexta(req,res){
    try{
        const novaSexta = new sextas(req.body)
        const salvarNovaSexta = await novaSexta.save()

        if(salvarNovaSexta){
            res.status(201).send(salvarNovaSexta)
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarSexta(req,res){
    try{
        const id = req.params.id
        const value = {$set:req.body}
        const atualizarTarefa = await sextas.findByIdAndUpdate(id, value)

        if(atualizarTarefa){
            res.status(200).send('Tarefa atualizada')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function deletarSexta(req,res){
    try{
        const id = req.params.id
        const excluirTarefa = await sextas.findByIdAndDelete(id)

        if(excluirTarefa){
            res.status(200).send('Tarefa excluida!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function lerSextaID(req,res){
    try{
        const id = req.params.id
        const exibirSextaID = await sextas.findById(id)

        return res.status(200).json(exibirSextaID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarPeriodoDia(req,res){
    try{
        const periodoDia = req.query.periodoDia
        sextas.find({'periodoDia': periodoDia})
            .then(dia => {
                res.json(dia)
            })
            .catch(err => {
                console.log(err.message)
            })

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarTipoTarefa(req,res){
    try{
        const tipoTarefa = req.query.tipoTarefa
        sextas.find({'tipoTarefa': tipoTarefa})
            .then(tarefa => {
                res.json(tarefa)
            })
            .catch(err => {
                console.log(err.message)
            })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerSexta,
    criarSexta,
    atualizarSexta,
    deletarSexta,
    lerSextaID,
    filtrarPeriodoDia,
    filtrarTipoTarefa
}