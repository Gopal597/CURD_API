require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const Dbconnection = require("./src/config/dbcon");
Dbconnection();
const inventoryRoute = require("./src/router/inventroy.route");

app.use("/api", inventoryRoute);
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
