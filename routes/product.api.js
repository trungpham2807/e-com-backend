const express = require("express");
const { createProduct } = require("../controllers/product.controller");
const authenticationMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const router = express.Router();

const testFunc = (req, res, next) => {
  console.log(req.params.param1);
  res.send("product route work");
};

/**
 * Description: Get all product
 * Access : public
 */
router.get("/", testFunc);
/**
 * Description: Get single product by id
 * Access : public
 */

router.get("/:productId", testFunc);
/**
 * Description:  Create product
 * Access : Admin require
 */
router.post("/", authenticationMiddleware, isAdmin, createProduct);

/**
 * Description: Update product
 * Access : admin role required
 */
router.put("/:productId", testFunc);

/**
 * Description: Delete product
 * Access : authenticated user
 */
router.delete("/:productId");

module.exports = router;
