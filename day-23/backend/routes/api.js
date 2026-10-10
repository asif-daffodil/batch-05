const express = require("express")
const { allUser, addStudent, checkPass } = require("../controllers/apiController")
const router = express.Router()

router.get("/all-user", allUser)
router.post("/add-student", addStudent)
router.post("/check-pass", checkPass)

module.exports = router