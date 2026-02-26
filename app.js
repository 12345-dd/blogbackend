require("dotenv").config();
const express = require("express")
const cors = require("cors")

const blogRoutes = require("./routes/blogRoutes")
const aiRoutes = require("./routes/aiRoutes")

require("./db")

const app = express()

app.use(express.json());
app.use(cors())

app.use("/api/blogs",blogRoutes)
app.use("/api/ai-suggestions",aiRoutes)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server running on port-${PORT}`)
})