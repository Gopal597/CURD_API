require("dotenv").config();
const express = require("express");
const path = require("path");
const fs=require("fs")
const app = express();
const DBconnection = require("./src/conif/dbcon");
DBconnection();

app.use(express.json());
const productrouter = require("./src/router/product.router");
app.use("/api", productrouter);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
