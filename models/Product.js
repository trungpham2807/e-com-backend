const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
