const express = require("express");
const {
  createCart,
  addProductToCart,
  removeProductFromCart,
  getSingleCart,
  payCart,
  deleteCart,
  getAll,
  getAllOwn,
} = require("../controllers/cart.controller");

const authenticationMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
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

/**
 * Description: Update product
 * Access : admin role required
 */
router.delete("/:cartId", authenticationMiddleware, deleteCart);

/**
 * Description: Update product
 * Access : admin role required
 */
router.get("/single-cart", authenticationMiddleware, getSingleCart);

/**
 * Description: Update product
 * Access : admin role required
 */
router.get("/", authenticationMiddleware, isAdmin, getAll);

/**
 * Description: Update product
 * Access : admin role required
 */
router.get("/me", authenticationMiddleware, getAllOwn);

/**
 * Description: Update product
 * Access : admin role required
 */
router.put("/payment/:cartId", authenticationMiddleware, payCart);
module.exports = router;
