const express = require("express");
const Route = express.Router();
const productcontroller = require("../controller/product.controller");
const upload = require("../utils/multer");
Route.post(
  "/create/product",
  upload.single("image"),
  productcontroller.createproduct,
);
Route.get("/products", productcontroller.getproductdata);
Route.get("/products/search", productcontroller.searchProduct);
Route.get("/products/:id", productcontroller.getsingleproduct);
Route.put("/products/update/:id", productcontroller.Updateproduct);
Route.delete("/products/delete/:id", productcontroller.deleteproduct);
Route.get("/products/category/:category", productcontroller.filterbycategory);

module.exports = Route;
