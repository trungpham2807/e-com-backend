const express = require("express");
const router = express.Router();
const authenticationMiddleware = require("../middlewares/auth.middleware");
const {
  getAll,
  createByEmailPassword,
  updateById,
  deleteById,
  loginWithEmailPassword,
  importantController,
} = require("../controllers/user.controller");

router.get("/", getAll);

router.post("/", createByEmailPassword);
router.post("/login", loginWithEmailPassword);
router.post("/haha", authenticationMiddleware, importantController);

router.put("/:id", authenticationMiddleware, updateById);

router.delete("/:id", authenticationMiddleware, deleteById);

module.exports = router;
