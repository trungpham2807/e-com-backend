const sendResponse = require("../helpers/sendResponse");
const Product = require("../models/Product");

const productController = {};

productController.createProduct = async (req, res, next) => {
  console.log("to controller");
  const { name } = req.body;
  let { price, stock } = req.body;
  let result;
  try {
    if (!name || !price || !stock) {
      throw new Error("missing info when create product");
    }
    price = parseInt(price);
    stock = parseInt(stock);

    if (
      typeof price !== "number" ||
      price < 0 ||
      typeof stock !== "number" ||
      stock < 0
    ) {
      throw new Error("price or stock invalid");
    }

    const newProduct = {
      name,
      price,
      stock,
    };
    console.log("hahha", newProduct);
    result = await Product.create(newProduct);
  } catch (error) {
    return next(error);
  }

  return sendResponse(res, 200, true, result, false, "success");
};

module.exports = productController;
