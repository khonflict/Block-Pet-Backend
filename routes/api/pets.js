const express = require('express')
const router = express.Router()
const petsCtrl = require('../../controllers/api/pets') 

// GET /api/v1/pets
router.get('/', petsCtrl.index)
// POST /api/v1/pets
router.post('/', petsCtrl.create)
// PUT /api/v1/pets/:id
router.put('/:id', petsCtrl.update)
// DELETE /api/v1/pets/:id
router.delete('/:id', petsCtrl.remove)


module.exports = router