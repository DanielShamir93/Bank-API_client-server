const User = require("../../../../db/models/userModel");

const makeDeposit = async (req, res) => {
  try {
    if (req.body.hasOwnProperty("amount")) {
      const { amount } = req.body;
      const { id } = req.params;

      if (+amount > 0) {
        const doc = await User.findById(id).select("cash");
        doc.cash += +amount;
        doc.save();
        res.status(200).send(`${amount}$ were deposited.`);
      } else {
        res.send("Deposit must be positive.");
      }
    } else {
      res.send("No amount was sent.");
    }
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = makeDeposit;
