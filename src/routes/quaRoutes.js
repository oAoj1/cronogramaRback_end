const express = require('express')
const router = express.Router()
const quaController = require('../controllers/quaController.js')

router.delete('/quarta/anotacoes/:id', quaController.deletarQuarta)
router.put('/quarta/anotacoes/:id', quaController.atualizarQuarta)
router.get('/quarta', quaController.lerQuarta)
router.get('/quarta/periododia', quaController.filtrarPeriodoDia)
router.get('/quarta/tipotarefa', quaController.filtrarTipoTarefa)
router.post('/quarta', quaController.criarQuarta)
router.get('/quarta/anotacoes', quaController.filtrarTipoTarefa)
router.put('/quarta/:id', quaController.atualizarQuarta)
router.delete('/quarta/:id', quaController.deletarQuarta)
router.get('/quarta/:id', quaController.lerQuartaID)

module.exports = router