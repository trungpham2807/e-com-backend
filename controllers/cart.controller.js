const Cart = require("../models/Cart");

const Product = require("../models/Product");
const sendResponse = require("../helpers/sendResponse");

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
    //check if qty is a positive number
    if (qty < 0) {
      throw new Error("qty invalid");
    }
    //check if user already have a cart active
    const activeCart = await Cart.findOne({ status: "active" });
    if (activeCart) throw new Error("already have active cart");
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

cartController.addProductToCart = async (req, res, next) => {
  //INPUT: owner, productId and qty
  //Operation: find active cart => push new product to found
  // => Find by id and update by found
  const owner = req.currentUser._id; //safe
  const { productId } = req.body; // have input?product availabe?if duplicated ++
  let { qty } = req.body; //have input?qty Positive number?qty < stock?
  let result; //safe
  try {
    qty = parseInt(qty);
    const product = {
      productId,
      qty,
    };
    const cartToUpdate = await Cart.findOne({ owner, status: "active" });
    // if no cart should we create cart?
    cartToUpdate.products.push(product);
    result = await Cart.findByIdAndUpdate(cartToUpdate._id, cartToUpdate, {
      new: true,
    });
  } catch (error) {
    return next(error);
  }
  return sendResponse(
    res,
    200,
    true,
    result,
    false,
    "Successfully create shopping cart"
  );
};

cartController.X = async (req, res, next) => {
  try {
  } catch (error) {}
};
cartController.X = async (req, res, next) => {
  try {
  } catch (error) {}
};
cartController.X = async (req, res, next) => {
  try {
  } catch (error) {}
};
cartController.X = async (req, res, next) => {
  try {
  } catch (error) {}
};

module.exports = cartController;
