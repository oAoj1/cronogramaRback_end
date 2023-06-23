const quintas = require('../model/quiModel.js')

async function lerQuinta(req,res){
    try{
        const exibirQuinta = await quintas.find()
        res.status(200).json(exibirQuinta)

    }catch(error){
        console.log(error.message)
    }
}

async function criarQuinta(req,res){
    try{
        const novaQuinta = new quintas(req.body)
        const salvarNovaQuinta = await novaQuinta.save()

        if(salvarNovaQuinta){
            res.status(201).json(salvarNovaQuinta)
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarQuinta(req,res){
    try{
        const id = req.params.id
        const value = {$set:req.body}
        const atualizarTarefa = await quintas.findByIdAndUpdate(id, value)

        if(atualizarTarefa){
            res.status(200).send('Tarefa atualizada!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function deletarQuinta(req,res){
    try{
        const id = req.params.id
        const deletarTarefa = await quintas.findByIdAndDelete(id)

        if(deletarTarefa){
            res.status(200).send('Tarefa deletada!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function lerQuintaID(req,res){
    try{
        const id = req.params.id
        const exibirQuintaID = await quintas.findById(id)

        return res.status(200).send(exibirQuintaID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarPeriodoDia(req,res){
    try{
        const periodoDia = req.query.periodoDia
        quintas.find({'periodoDia': periodoDia})
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
        quintas.find({'tipoTarefa':tipoTarefa})
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
        const concluirTarefa = await quintas.findOne({ _id: id })

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
    lerQuinta,
    criarQuinta,
    atualizarQuinta,
    deletarQuinta,
    lerQuintaID,
    filtrarPeriodoDia,
    filtrarTipoTarefa,
    concluirTarefa
}