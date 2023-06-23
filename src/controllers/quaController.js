const quartas = require('../model/quaModel.js')

async function lerQuarta(req,res){
    try{
        const exibirQuarta = await quartas.find()
        res.status(200).json(exibirQuarta)

    }catch(error){
        console.log(error.message)
    }
}

async function criarQuarta(req,res){
    try{
        const novaQuarta = new quartas(req.body)
        const salvarNovaQuarta = await novaQuarta.save()

        if(salvarNovaQuarta){
            res.status(201).json(salvarNovaQuarta)
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarQuarta(req,res){
    try{
        const id = req.params.id
        const valor = {$set:req.body}
        const atualizarTarefa = await quartas.findByIdAndUpdate(id, valor)

        if(atualizarTarefa){
            res.status(200).send('Tarefa atualizada')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function deletarQuarta(req,res){
    try{
        const id = req.params.id
        const deletarTarefa = await quartas.findByIdAndDelete(id)

        if(deletarTarefa){
            res.status(200).send('Tarefa excluida!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function lerQuartaID(req,res){
    try{
        const id = req.params.id
        const exibirQuartaID = await quartas.findById(id)

        return res.status(200).send(exibirQuartaID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarPeriodoDia(req,res){
    try{
        const periodoDia = req.query.periodoDia
        quartas.find({'periodoDia': periodoDia})
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
        quartas.find({'tipoTarefa': tipoTarefa})
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

async function concluirTarefa(req,res){
    try{
        const id = req.params.id
        const concluirTarefa = await quartas.findOne({ _id: id })

        
        if(concluirTarefa.concluido){
            concluirTarefa.concluido = false
        }else{
            concluirTarefa.concluido = true
        }

        await concluirTarefa.save()
        .then(() => {
            res.json(concluirTarefa)
        })
        .catch(err => {
            console.log(err.message)
        })

    }catch(error){
        console.log(error.message)
    }

}

module.exports = {
    lerQuarta,
    criarQuarta,
    atualizarQuarta,
    deletarQuarta,
    lerQuartaID,
    filtrarPeriodoDia,
    filtrarTipoTarefa,
    concluirTarefa
}