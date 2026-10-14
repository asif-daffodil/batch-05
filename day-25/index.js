const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type"]
}))
require("dotenv").config()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

const mongose = require("mongoose")
mongose.connect("mongodb://localhost:27017/ayets-batch-05").then(() => {
    console.log("Database connected successfully!");
})

const cookieParser = require("cookie-parser")
app.use(cookieParser())

const apiRouter = require("./routes/api")
app.use("/api", apiRouter)

const authRouter = require("./routes/auth")
app.use("/api", authRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})



