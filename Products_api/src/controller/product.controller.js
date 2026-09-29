const Product = require("../models/product.model");
class productcontroller {
  async createproduct(req, res) {
    // console.log(req.file)
    try {
      const { name, description, price, category, brand, stock, status } =
        req.body;
      if (
        !name ||
        !description ||
        !price ||
        !category ||
        !brand ||
        !stock ||
        !status
      ) {
        return res.status(400).json({
          success: false,
          message: "All product data are required",
        });
      }
      const productdata = new Product({
        name,
        description,
        price,
        category,
        brand,
        stock,
        status,
      });
      if (req.file) {
        productdata.image = req.file.path;
      }
      const data = await productdata.save();
      return res.status(202).json({
        success: true,
        message: " product data created successfully",
        data: data,
      });
    } catch (error) {
      return res.status(402).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getproductdata(req, res) {
    try {
      const getproduct = await Product.find();
      if (getproduct.length === 0) {
        return res.status(302).json({
          success: true,
          message: "Alll product delete successfully",
        });
      }
      return res.status(202).json({
        success: true,
        message: "Product data fetch successfully",
        total: getproduct.length,
        data: getproduct,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getsingleproduct(req, res) {
    try {
      const id = req.params.id;
      const getsingle = await Product.findById(id);
      return res.status(202).json({
        success: true,
        message: "Get single productdata",
        data: getsingle,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
  async Updateproduct(req, res) {
    try {
      const id = req.params.id;
      const { name, description, price, category, brand, stock, status } =
        req.body;

      const update = await Product.findByIdAndUpdate(
        id,
        { name, description, price, category, brand, stock, status },
        { new: true },
      );
      return res.status(202).json({
        success: true,
        message: "Update product successfully",
        data: update,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
  async deleteproduct(req, res) {
    try {
      const id = req.params.id;
      const deletepro = await Product.findByIdAndDelete(id);
      return res.status(202).json({
        success: true,
        message: "Get single productdata",
        data: deletepro,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async searchProduct(req, res) {
    try {
      const { name } = req.query;
      const searching = await Product.find({
        name: { $regex: name, $options: "i" },
      });
      return res.status(200).json({
        success: true,
        message: "Search products successfully",
        data: searching,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async filterbycategory(req, res) {
    try {
      const { category } = req.params;
      const filter = await Product.find({
        category: { $regex: category, $options: "i" },
      });
        return res.status(200).json({
        success: true,
        message: "FilterCategory successfully",
        data: filter,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}
module.exports = new productcontroller();
