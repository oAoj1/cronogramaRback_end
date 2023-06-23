const tercas = require('../model/terModel.js')

async function lerTerca(req,res){
    try{
        const exibirTerca = await tercas.find()
        res.status(200).json(exibirTerca)

    }catch(error){
        console.log(error.message)
    }
}

async function criarTerca(req,res){
    try{
        const novaTerca = new tercas(req.body)
        const salvarNovaTerca = await novaTerca.save()

        if(salvarNovaTerca){
            res.status(201).send(salvarNovaTerca)
        }
    }catch(error){
        console.log(error.message)
    }
}

async function deletarTerca(req,res){
    try{
        const id = req.params.id
        const deletarTarefa = await tercas.findByIdAndDelete(id)

        if(deletarTarefa){
            res.status(200).send('Tarefa excluida!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarTerca(req,res){
    try{
        const id = req.params.id
        const value = {$set:req.body}
        const atualizarTarefa = await tercas.findByIdAndUpdate(id, value)

        if(atualizarTarefa){
            res.status(200).send('Tarefa atualizada!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function lerTercaID(req,res){
    try{
        const id = req.params.id
        const exibirTercaID = await tercas.findById(id)

        return res.status(200).json(exibirTercaID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarPeriodoDia(req,res){
    try{
        const periodoDia = req.query.periodoDia
        tercas.find({'periodoDia': periodoDia})
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
        tercas.find({'tipoTarefa':tipoTarefa})
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
        const concluirTarefa = await tercas.findOne({ _id: id })

        
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
    lerTerca,
    criarTerca,
    deletarTerca,
    atualizarTerca,
    lerTercaID,
    filtrarPeriodoDia,
    filtrarTipoTarefa,
    concluirTarefa
}