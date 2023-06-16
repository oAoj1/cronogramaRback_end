const express = require('express')
const router = express.Router()
const quiController = require('../controllers/quiController.js')

router.delete('/quinta/anotacoes/:id', quiController.deletarQuinta)
router.put('/quinta/anotacoes/:id', quiController.atualizarQuinta)
router.post('/quinta', quiController.criarQuinta)
router.get('/quinta', quiController.lerQuinta)
router.get('/quinta/periododia', quiController.filtrarPeriodoDia)
router.get('/quinta/tipotarefa', quiController.filtrarTipoTarefa)
router.get('/quinta/anotacoes', quiController.filtrarTipoTarefa)
router.put('/quinta/:id', quiController.atualizarQuinta)
router.get('/quinta/:id', quiController.lerQuintaID)
router.delete('/quinta/:id', quiController.deletarQuinta)

module.exports = router