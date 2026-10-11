const User = require("../model/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signUp = async (req, res) => {
    const {fName, lName, gender, email, mobile, password} = req.body

    if (!fName, !lName, !gender, !email, !mobile, !password) {
        return res.status(406).json({
            success: false,
            message: "All fields are required"
        })
    }
    const encPass = await bcrypt.hash(password, +process.env.SALT)
    const data = await User.create({fName, lName, gender, email, mobile, password: encPass})

    res.status(201).json({
        success: true,
        message: "Registration Successfull",
        data
    })
}

const logIn = async (req, res) => {
    const {email, password} = req.body || {}

    if(!email || !password) {
        return res.status(406).json({
            success: false,
            message: "Both the email and password is required"
        })
    }

    const user = await User.findOne({email})
    if(!user) {
        return res.status(404).json({
            success: false,
            message: "Invalid email or password"
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) {
        return res.status(404).json({
            success: false,
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: "1d"})

    res.status(200).cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/"
    }).json({
        success: true,
        message: "Login successful",
    })

}

module.exports = {
    signUp,
    logIn
}