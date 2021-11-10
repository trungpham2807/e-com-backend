const express = require("express");
const router = express.Router();
const {
  getAll,
  createByEmailPassword,
  updateById,
  deleteById,
  loginWithEmailPassword,
} = require("../controllers/user.controller");

router.get("/", getAll);

router.post("/", createByEmailPassword);
router.post("/login", loginWithEmailPassword);

router.put("/:id", updateById);

router.delete("/:id", deleteById);

module.exports = router;
