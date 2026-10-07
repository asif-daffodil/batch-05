const students = [
    {id: 1, name: "Nayem"},
    {id: 2, name: "Shahed"},
    {id: 3, name: "Saikot"},
    {id: 4, name: "Saiful"},
    {id: 5, name: "Sajid"},
]

const allStudent = (req, res) => {
    res.status(200).json(students)
}

const addStudent = (req, res) => {
    res.send("Post method is working!")
}

module.exports = {
    allStudent,
    addStudent
}