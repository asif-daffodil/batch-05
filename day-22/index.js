const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}))

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

app.listen(5000, () => {
    console.log("Server is running")
})
