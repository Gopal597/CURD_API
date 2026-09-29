const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const inventroySchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    supplier: {
      type: String,
      required: true,
    },

    purchasePrice: {
      type: Number,
      required: true,
    },

    sellingPrice: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    minimumStock: {
      type: Number,
      required: true,
      default: 10,
    },

    image: {
      type: String,
      required: false,
      default: "uploads/inventory.jpg",
    },

    warehouseLocation: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required:true
    },
  },
  {
    timestamps: true,
  },
);

const inventroyModel = mongoose.model("inventory", inventroySchema);
module.exports = inventroyModel;
