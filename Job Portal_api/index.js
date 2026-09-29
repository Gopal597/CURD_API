require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const DBconnection = require("./src/config/dbcon");
DBconnection();
app.use(express.json())
const jobRoute = require("./src/router/jobportal.route");
app.use("/api", jobRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const port=process.env.PORT ||3000
app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})
