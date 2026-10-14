const bcrypt = require('bcrypt')

const users = [
    { "id": 1, "name": "Nayem" },
    { "id": 2, "name": "Shahed" },
    { "id": 3, "name": "Ashraful" },
]

const allUser = (req, res) => {
    res.status(200).json(users)
}

const addStudent = (req, res) => {
    const { name, city } = req.body
    res.cookie("student", `${name} lives in ${city}`, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    })
    res.status(201).json({ name, city })
}

const checkPass = async (req, res) => {
    const { pass } = req.body
    // const encPass = await bcrypt.hash(pass, +process.env.SALT) 
    const oldPass = "$2b$09$Dtq1/j6/OhzYuzF27aE.le.Ube2h22YLzrkt4ymKMlIGLYMwIgqy2"
    if(!(await bcrypt.compare(pass, oldPass))){
        return res.status(401).json({ message: "Invalid password" })
    }
    res.status(200).json({ message: "Password is correct" })
}

module.exports = {
    allUser,
    addStudent,
    checkPass
}