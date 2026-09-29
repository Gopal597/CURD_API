const Inventory = require("../models/inventroy.model");
class inventoryController {
  async createInventory(req, res) {
    // console.log(req.body)
    try {
      const {
        itemName,
        sku,
        description,
        category,
        supplier,
        purchasePrice,
        sellingPrice,
        quantity,
        minimumStock,
        warehouseLocation,
        status,
      } = req.body;
      if (
        !itemName ||
        !sku ||
        !description ||
        !category ||
        !supplier ||
        !purchasePrice ||
        !sellingPrice ||
        !minimumStock ||
        !warehouseLocation ||
        !status ||
        !quantity
      ) {
        return res.status(400).json({
          success: false,
          message: "All Inventory data are requireds",
        });
      }

      const inventorydata = new Inventory({
        itemName,
        sku,
        description,
        category,
        supplier,
        purchasePrice,
        sellingPrice,
        quantity,
        minimumStock,
        warehouseLocation,
        status,
      });
      if (req.file) {
        inventorydata.image = req.file.path;
      }
      const data = await inventorydata.save();
      return res.status(202).json({
        success: true,
        message: "Inventory data created succesfully",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getinventroydata(req, res) {
    try {
      const getdata = await Inventory.find();
      return res.status(201).json({
        success: true,
        message: "fetch inventorydata successfully",
        total: getdata.length,
        data: getdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getsingleinventorydata(req, res) {
    try {
      const id = req.params.id;
      const getsingledata = await Inventory.findById(id);
      return res.status(201).json({
        success: true,
        message: "get single inventory data successfully",
        data: getsingledata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async Updateinventorydata(req, res) {
    try {
      const id = req.params.id;
      const {
        itemName,
        sku,
        description,
        category,
        supplier,
        purchasePrice,
        sellingPrice,
        quantity,
        minimumStock,
        warehouseLocation,
        status,
      } = req.body;
      const updatedata = await Inventory.findByIdAndUpdate(
        id,
        {
          itemName,
          sku,
          description,
          category,
          supplier,
          purchasePrice,
          sellingPrice,
          quantity,
          minimumStock,
          warehouseLocation,
          status,
        },
        { new: true },
      );
      return res.status(201).json({
        success: true,
        message: "Update inventory data successfully",
        data: updatedata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async deleteinventorydata(req, res) {
    try {
      const id = req.params.id;
      const deletedata = await Inventory.findByIdAndDelete(id);
      return res.status(201).json({
        success: true,
        message: "Delete Inventory data successfully",
        data: deletedata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async trackStock(req, res) {
  try {
    const data = await Inventory.find(
      {},
      {
        itemName: 1,
        sku: 1,
        quantity: 1,
        minimumStock: 1,
        status: 1
      }
    );
    return res.status(200).json({
      success: true,
      message: "Stock quantity tracked successfully",
      data: data
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
async Searchinginventory(req, res) {
    try {
      const { itemName } = req.query;
      const searchdata = await Inventory.find({
        itemName: { $regex: itemName, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Search inventory data successfully",
        data: searchdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
   async FilterByCategory(req, res) {
    try {
      const category = req.query.category;
      const filterdata = await Inventory.find({
        "category": { $regex: category, $options: "i" },
      });
      return res.status(201).json({
        success: true,
        message: "Filter inventory category successfully",
        data: filterdata,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new inventoryController();
