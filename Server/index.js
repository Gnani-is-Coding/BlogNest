const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const port = process.env.PORT || 5000
 
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_DB_URL).then(()=> console.log("Successfully, connected to DB")).catch((e) => console.log("Error:",e.message))

const BlogsRoute = require("./routes/BlogsRoutes")

app.use("/api/blogs", BlogsRoute)

app.listen(port, () => console.log(`server live at http://localhost:${port}`))

app.get("/", async (req,res) => {
    res.json("This is Backend")
})
