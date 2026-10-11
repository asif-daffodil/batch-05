const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: {
            value: true,
            message: "Name is required"
        }
    },
    gender: {
        type: String,
        required: {
            value: true,
            message: "Gender is required"
        }
    },
    city: {
        type: String,
        required: {
            value: true,
            message: "City is required"
        }
    }
}, {
    timestamps: true,
    collection: "students"
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student