const express = require("express")
const { allStudent, addStudent } = require("../controllers/apiController")
const router = express.Router()

router.get("/all-student", allStudent)
router.post("/add-student", addStudent)

module.exports = router