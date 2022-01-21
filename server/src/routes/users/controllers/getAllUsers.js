const User = require("../../../../db/models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select(["_id", "firstName", "lastName"]);
    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = getAllUsers;
