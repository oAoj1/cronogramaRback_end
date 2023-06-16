const express = require('express')
const router = express.Router()
const segController = require('../controllers/segController.js')

router.delete('/segunda/anotacoes/:id', segController.deletarSegunda)
router.put('/segunda/anotacoes/:id', segController.atualizarSegunda)
router.post('/segunda', segController.criarSegunda)
router.get('/segunda', segController.lerSegunda)
router.get('/segunda/periododia', segController.filtrarPeriodoDia)
router.get('/segunda/tipotarefa', segController.filtrarTipoTarefa)
router.get('/segunda/anotacoes', segController.filtrarTipoTarefa)
router.get('/segunda/:id', segController.lerSegundaID)
router.put('/segunda/:id', segController.atualizarSegunda)
router.delete('/segunda/:id', segController.deletarSegunda)

module.exports = router