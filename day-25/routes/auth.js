const express = require('express')
const { signUp, logIn } = require('../controllers/authController')
const router = express.Router()

router.post("/sign-up", signUp)
router.post("/log-in", logIn)

module.exports = router