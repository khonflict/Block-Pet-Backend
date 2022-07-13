const Pet = require('../../models/Pet')

// Find pets //
const index = async (req, res) => {
    try {
        const pets = await Pet.find({})
        res.status(200).json(pets)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Create a pet //
const create = async (req, res) => {
    // console.log(req.body)
    try {
        const createdPet = await Pet.create(req.body)
        res.status(200).json(createdPet)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Update a pet //
const update = async (req, res) => {
    try {
        console.log('req', req.params.id)
        console.log('red.body', req.body)
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedPet)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

// Delete a pet //
const remove = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedPet)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    index,
    create,
    update,
    remove
}