require('dotenv').config()

/*  */

const cors = require('cors')
const express = require('express')
const db = require('./config/mongoConnect.js')

/*  */

/*  */

const segRoutes = require('./routes/segRoutes.js')
const terRoutes = require('./routes/terRoutes.js')
const quaRoutes = require('./routes/quaRoutes.js')
const quiRoutes = require('./routes/quiRoutes.js')
const sexRoutes = require('./routes/sexRoutes.js')

/*  */

/*  */

const app = express()
const json = express.json()
const port = process.env.PORT || 5555

/*  */

/*  */

db.once('open', () => console.log('MongoDB conectado!'))
db.on('error', () => console.log('Erro ao conectar com mongodb'))

/*  */

/*  */ 

app.use(cors(),json,segRoutes,terRoutes,quaRoutes,quiRoutes,sexRoutes)
app.listen(port, () => console.log(`Server ligado => http://localhost:${port}`))

/*  */

/*  */

var data = new Date()

app.get('/tempo/dia', (req,res) => {
    let diaHoje = data.getDay()

    if(diaHoje == 0){
        diaHoje = 'Domingo'
    }
    if(diaHoje == 1){
        diaHoje = 'Segunda-feira'
    }
    if(diaHoje == 2){
        diaHoje = 'Terça-feira'
    }
    if(diaHoje == 3){
        diaHoje = 'Quarta-feira'
    }
    if(diaHoje == 4){
        diaHoje = 'Quinta-feira'
    }
    if(diaHoje == 5){
        diaHoje = 'Sexta-feira'
    }
    if(diaHoje == 6){
        diaHoje = 'Sábado'
    }

    return res.send(diaHoje)

})

app.get('/tempo/data', (req,res) => {
    let dia = String(data.getDate()).padStart(2,'0')
    let mes = String(data.getMonth() + 1).padStart(2,'0')

    let dataCompleta = `${dia}/${mes}`

    return res.send(dataCompleta)

})

app.get('/tempo/periodoagora', (req,res) => {
    let hora = data.getHours()
    var periodoAgora = ''

    if(hora >= 0 && hora <= 5){
        periodoAgora = 'Madrugada'
        
    }else if(hora >= 6 && hora <= 11){
        periodoAgora = 'Manhã'
        
    }else if(hora >= 12 && hora <= 17){
        periodoAgora = 'Tarde'

    }else if(hora >= 18 && hora <= 23){
        periodoAgora = 'Noite'

    }

    res.send(periodoAgora)
    
})