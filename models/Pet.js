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
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    about: {
        type: String,
        requried: true
    },
    image: String,
    location: String,
  
}, {
    timestamps: true
})

module.exports = mongoose.model('Pet', petSchema)