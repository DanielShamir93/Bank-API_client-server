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
        res.status(200).send(`user: ${id} updated.`);
      } else {
        res.send("Amount must be positive.");
      }
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

module.exports = makeDeposit;
