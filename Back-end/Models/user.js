const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { Schema } = mongoose;

const JWT_SECRET = "Hello World"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now
    }
})

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },
            JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );
    } catch (error) {
        console.error(error)
    }
}

const User = mongoose.model("user", userSchema)
module.exports = User