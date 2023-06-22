const express = require('express')
const router = express.Router()
const terController = require('../controllers/terController.js')

router.post('/terca/:id', terController.concluirTarefa)
router.delete('/terca/anotacoes/:id', terController.deletarTerca)
router.put('/terca/anotacoes/:id', terController.atualizarTerca)
router.get('/terca', terController.lerTerca)
router.get('/terca/periododia', terController.filtrarPeriodoDia)
router.get('/terca/tipotarefa', terController.filtrarTipoTarefa)
router.get('/terca/anotacoes', terController.filtrarTipoTarefa)
router.post('/terca',terController.criarTerca)
router.delete('/terca/:id', terController.deletarTerca)
router.put('/terca/:id', terController.atualizarTerca)
router.get('/terca/:id', terController.lerTercaID)

module.exports = router