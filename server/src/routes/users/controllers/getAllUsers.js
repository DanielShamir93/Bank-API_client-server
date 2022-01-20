const User = require("../../../../db/models/userModel");

const getAllUsers = async (req, res) => {
  try {
    console.log('wow')

    const users = await User.find({});
    console.log(users)
    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = getAllUsers;
