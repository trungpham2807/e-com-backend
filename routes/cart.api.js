const express = require("express");
const {
  createCart,
  addProductToCart,
  removeProductFromCart,
} = require("../controllers/cart.controller");

const authenticationMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();

/**
 * Description: Update product
 * Access : admin role required
 */
router.post("/:productId", authenticationMiddleware, createCart);

/**
 * Description: Update product
 * Access : admin role required
 */
router.put("/add-product-cart", authenticationMiddleware, addProductToCart);

/**
 * Description: Update product
 * Access : admin role required
 */
router.delete(
  "/remove-product-cart/:cartId",
  authenticationMiddleware,
  removeProductFromCart
);

module.exports = router;
