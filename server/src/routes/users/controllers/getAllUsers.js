const User = require("../../../../db/models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log("in getAllUsers route")
    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = getAllUsers;
