const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

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
    // favorites: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Pet'
    //     }
    // ],
    // active: Boolean,
}, {
    timestamps: true,
    toJSON: {
        // ret is the JSON'ed User Document
        transform: function(doc, ret) {
            // Prevents password from being returned to user
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    // This only hash passwords for newly created user
    this.password = await bcrypt.hash(this.password, saltRounds)
    return next()
})

module.exports = mongoose.model('User', userSchema)