require("dotenv").config();
const express = require("express")
const cors = require("cors")

const blogRoutes = require("./routes/blogRoutes")
const aiRoutes = require("./routes/aiRoutes")

require("./db")

const app = express()

const allowedOrigins = [
  'http://localhost:5173',              
  'https://smartblogai.netlify.app'      
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

app.use("/api/blogs",blogRoutes)
app.use("/api/ai-suggestions",aiRoutes)

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server running on port-${PORT}`)
})