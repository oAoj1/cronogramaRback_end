const segundas = require('../model/segModel.js')

async function lerSegunda(req,res){
    try{
        const exibirSegunda = await segundas.find()
        res.json(exibirSegunda)

    }catch(error){
        console.log(error.message)
    }

}

async function criarSegunda(req,res){
    try{
        const novaSegunda = new segundas(req.body)
        const salvarNovaSegunda = await novaSegunda.save()
        
        if(salvarNovaSegunda){
            return res.status(201).json(salvarNovaSegunda)
        }

    }catch(error){
        console.log(error.message)
    }
}

async function deletarSegunda(req,res){
    try{
        const id = req.params.id
        const deletarTarefa = await segundas.findByIdAndDelete(id)
        
        if(deletarTarefa){
            res.status(200).send('Tarefa excluida!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function atualizarSegunda(req,res){
    try{
        const id = req.params.id
        const value = {$set:req.body}
        const atualizarTarefa = await segundas.findByIdAndUpdate(id, value)
        
        if(atualizarTarefa){
            res.status(200).send('Tarefa atualizada!')
        }

    }catch(error){
        console.log(error.message)
    }
}

async function lerSegundaID(req,res){
    try{
        const id = req.params.id
        const exibirTarefaID = await segundas.findById(id)
        
        return res.status(200).json(exibirTarefaID)

    }catch(error){
        console.log(error.message)
    }
}

async function filtrarPeriodoDia(req,res){
    try{
        const periodoDia = req.query.periodoDia
        segundas.find({'periodoDia': periodoDia})
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
        segundas.find({'tipoTarefa':tipoTarefa})
            .then(tipo => {
                res.json(tipo)
            })
            .catch(err => {
                console.log(err.message)
            })

    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    lerSegunda,
    criarSegunda,
    deletarSegunda,
    atualizarSegunda,
    lerSegundaID,
    filtrarPeriodoDia,
    filtrarTipoTarefa
}