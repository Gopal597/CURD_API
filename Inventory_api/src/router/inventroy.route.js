const express = require("express");
const Route = express.Router();
const upload = require("../utils/multer");
const inventoryController = require("../controller/inventory.controller");
Route.post(
  "/create/inventory",
  upload.single("image"),
  inventoryController.createInventory,
);
Route.get("/inventory", inventoryController.getinventroydata);
Route.get("/inventory/stock", inventoryController.trackStock);
Route.get("/inventory/search", inventoryController.Searchinginventory);
Route.get("/inventory/category", inventoryController.FilterByCategory);
Route.get("/inventory/:id", inventoryController.getsingleinventorydata);
Route.put(
  "/inventory/update/:id",
  upload.single("image"),
  inventoryController.Updateinventorydata,
);
Route.delete("/inventory/delete/:id", inventoryController.deleteinventorydata);

module.exports = Route;
