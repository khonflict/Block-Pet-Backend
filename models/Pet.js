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
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    about: String,
    image: String,
    dob: Number,
    gotchaDate: Number,
    medication: String,
    vet: String,
    notes: String,
  
}, {
    timestamps: true
})

module.exports = mongoose.model('Pet', petSchema)