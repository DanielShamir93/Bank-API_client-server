const User = require("../../../../db/models/userModel");

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, cash, credit } = req.body;
    const newUser = { firstName, lastName, cash, credit };
    const user = await User.create(newUser);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = addUser;
