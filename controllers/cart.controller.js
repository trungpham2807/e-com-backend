const Cart = require("../models/Cart");

const Product = require("../models/Product");
const sendResponse = require("../helpers/sendResponse");
const User = require("../models/User");

const cartController = {};

cartController.createCart = async (req, res, next) => {
  //create a cart with the first product
  let test;
  let result;
  try {
    //get inputs
    const owner = req.currentUser._id;
    const { productId } = req.params;
    let { qty } = req.body;
    qty = parseInt(qty);
    //check if input is enough
    if (!productId || typeof qty !== "number") {
      throw new Error("Missing info");
    }
    //check if product id is true
    const found = await Product.findById(productId);
    if (!found) {
      throw new Error("product not found");
    }
    //create product choice object
    const productChoice = { productId, qty };
    //create new cart object to be add to db
    const newCart = {
      owner,
      products: [productChoice],
    };
    //create new cart in model
    result = await Cart.create(newCart);
    //get info from owner-User ref  and products.productId-Product ref
    result = await result.populate([
      { path: "owner", select: ["name", "email"] },
      { path: "products.productId", select: "name" },
    ]);
  } catch (error) {
    return next(error);
  }
  return sendResponse(
    res,
    200,
    true,
    { result, test },
    false,
    "Successfully create shopping cart"
  );
};

module.exports = cartController;
