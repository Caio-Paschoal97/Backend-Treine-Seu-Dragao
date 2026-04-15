const express = require('express');
const router = express.Router();
const treineSeuDragaoController = require('../controllers/treineSeuDragaoController');

router.get('/', treineSeuDragaoController.listEntries);
router.get('/:id', treineSeuDragaoController.getEntryById);
router.post('/', treineSeuDragaoController.createEntry);
router.put('/:id', treineSeuDragaoController.updateEntry);
router.delete('/:id', treineSeuDragaoController.deleteEntry);

module.exports = router;