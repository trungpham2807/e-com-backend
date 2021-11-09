const userController = {};

userController.getAll = (req, res) => {
  res.send("get all");
};
userController.createByEmailPassword = (req, res) => {
  res.send("create by email");
};
userController.updateById = (req, res) => {
  res.send("find by id and update");
};
userController.deleteById = (req, res) => {
  res.send("delete by id and update");
};

module.exports = userController;
