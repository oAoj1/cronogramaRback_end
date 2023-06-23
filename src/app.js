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
