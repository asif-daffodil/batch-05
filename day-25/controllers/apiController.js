const Student = require("../model/student")

const allStudent = (req, res) => {
    Student.find().then((data) => {
        res.status(200).json({
            success: true,
            message: "All students fetched successfully",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Failed to fetch students",
            error: err.message
        })
    })
}

const addStudent = (req, res) => {
    const {name, gender, city} = req.body

    if(!name || !gender || !city) {
        return res.status(400).json({
            success: false,
            message: "All the fileds are required"
        })
    }

    Student.create({name, gender, city}).then((data) => {
        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Failed to add student",
            error: err.message
        })
    })

}

const singleStudent = (req, res) => {
    const {id} = req.params

    if(!id) {
        return res.status(400).json({
            success: false,
            message: "Student id is required"
        })
    }

    Student.findById(id).then((data) => {
        if(!data) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Student fetched successfully",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Failed to fetch student",
            error: err.message
        })
    })
}

const updateStudent = (req, res) => {
    const {id} = req.params
    const {name, gender, city} = req.body

    if(!id) {
        return res.status(400).json({
            success: false,
            message: "Student id is required"
        })
    }

    if(!name || !gender || !city) {
        return res.status(400).json({
            success: false,
            message: "All the fields are required"
        })
    }

    Student.findByIdAndUpdate(id, {name, gender, city}, {new: true}).then((data) => {
        if(!data) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Failed to update student",
            error: err.message
        })
    })
}

const deleteStudent = (req, res) => {
    const {id} = req.params

    if(!id) {
        return res.status(400).json({
            success: false,
            message: "Student id is required"
        })
    }

    Student.findByIdAndDelete(id).then((data) => {
        if(!data) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Student deleted successfully",
            data: data
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: "Failed to delete student",
            error: err.message
        })
    })
}

module.exports = {
    allStudent,
    addStudent,
    singleStudent,
    updateStudent,
    deleteStudent
}