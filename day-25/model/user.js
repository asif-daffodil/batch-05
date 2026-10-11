const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true,
        enum: ["male", "female"]
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobile: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    collection: "users"
})

const User = mongoose.model("User", userSchema)
module.exports = User