require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const DBconnection = require("./src/config/dbcon");
DBconnection();
app.use(express.json())
const studentRoute = require("./src/router/student.router");
app.use("/api", studentRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port=process.env.PORT ||3000
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
