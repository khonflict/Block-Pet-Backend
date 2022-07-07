const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true, 
        lowercase: true, 
        unique: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 5,
        required: true
    },
    active: Boolean,
    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Pet'
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)