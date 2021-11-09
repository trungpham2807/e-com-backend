const sendResponse = require("../helpers/sendResponse");
const User = require("../models/User");

const userController = {};

userController.getAll = async (req, res) => {
  const result = await User.find();
  return sendResponse(
    res,
    200,
    true,
    result,
    false,
    "Successfully get all users"
  );
};
userController.createByEmailPassword = async (req, res, next) => {
  const { name, email, password } = req.body;
  let result;
  try {
    if (!name || !email || !password) throw new Error("missing input");
    const found = await User.findOne({ email });
    if (found) throw new Error("email already reg");
    result = await User.create({ name, email, password });
  } catch (error) {
    return sendResponse(res, 420, false, result, true, error.message);
  }
  return sendResponse(
    res,
    200,
    true,
    result,
    false,
    "Successfully get all users"
  );
};
userController.updateById = (req, res) => {
  res.send("find by id and update");
};
userController.deleteById = (req, res) => {
  res.send("delete by id and update");
};
/** TODO:
 * delete user
 * update user
 * get single user
 * More Security for password !!!
 *
 */

module.exports = userController;
