const express = require('express')
const router = express.Router()
const sexController = require('../controllers/sexController.js')

router.delete('/sexta/anotacoes/:id', sexController.deletarSexta)
router.put('/sexta/anotacoes/:id', sexController.atualizarSexta)
router.post('/sexta', sexController.criarSexta)
router.get('/sexta', sexController.lerSexta)
router.get('/sexta/periododia', sexController.filtrarPeriodoDia)
router.get('/sexta/tipotarefa', sexController.filtrarTipoTarefa)
router.get('/sexta/anotacoes', sexController.filtrarTipoTarefa)
router.put('/sexta/:id', sexController.atualizarSexta)
router.get('/sexta/:id', sexController.lerSextaID)
router.delete('/sexta/:id', sexController.deletarSexta)

module.exports = router