const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: String,
    age: String,
    adoption: String,
    medication: String,
    vet: String,
    image: String,
    notes: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Pet', petSchema)