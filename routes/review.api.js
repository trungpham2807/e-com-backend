const express = require("express");
const {
getComment,
// getRating,
// createRating,
createComment,
} = require("../controllers/review.controller");

const authenticationMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/isAdmin.middleware");
const router = express.Router();

// Next have to change route => product to see
// router.get("/:cartId", authenticationMiddleware, getRating);
router.get("/:productId", authenticationMiddleware, getComment);

router.post("/:productId", authenticationMiddleware, isAdmin, createComment);
// router.post("/rating", authenticationMiddleware, isAdmin, createRating);




module.exports = router;
