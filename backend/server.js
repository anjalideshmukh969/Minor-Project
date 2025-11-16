require('dotenv').config();
const cookieParser = require("cookie-parser")
const express = require("express");
const connectDB = require('./src/config/database');
const authRoutes = require('./src/routes/auth.routes');

const app = express();
connectDB();

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : true}));

app.use("/api/auth", authRoutes)

let port = process.env.port || 4000;
app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})