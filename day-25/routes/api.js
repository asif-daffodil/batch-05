const express = require("express")
const { allStudent, addStudent, singleStudent, updateStudent, deleteStudent } = require("../controllers/apiController")
const router = express.Router()

router.get("/all-student", allStudent)
router.post("/add-student", addStudent)
router.get("/single-student/:id", singleStudent)
router.put("/update-student/:id", updateStudent)
router.delete("/delete-student/:id", deleteStudent)
module.exports = router