const express = require("express")
const { login, userData, logout } = require("../controllers/apiController")
const isLogedIn = require("../middleware/isLogedIn")
const router = express.Router()

router.post("/login", login)
router.get("/user-data", isLogedIn, userData)
router.get("/logout", isLogedIn, logout)

module.exports = router