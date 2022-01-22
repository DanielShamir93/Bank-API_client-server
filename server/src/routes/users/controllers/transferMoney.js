const User = require("../../../../db/models/userModel");

const transferMoney = async (req, res) => {
  try {
    if (req.body.hasOwnProperty("amount")) {
      const { amount } = req.body;
      const { id } = req.params;
      const { destId } = req.query;

      if (id === destId) {
        res.send(`Self transaction is not allowed.`);
        return;
      }

      if (+amount > 0) {
        const srcUser = await User.findById(id);
        const destUser = await User.findById(destId);

        if (+srcUser.credit + +srcUser.cash >= +amount) {
          // User who makes the transaction has enough money in the bank to withdraw
          if (+srcUser.cash >= +amount) {
            // User who makes the transaction has enough cash to withdraw
            srcUser.cash -= +amount;
            destUser.cash += +amount;
          } else {
            // User who makes the transaction needs to use credit to withdraw
            srcUser.credit += +srcUser.cash;
            srcUser.credit -= +amount;
            srcUser.cash = 0;
            destUser.cash += +amount;
          }
          srcUser.save();
          destUser.save();
          res.status(200).send(`Transaction of ${amount}$ was made.`);
        } else {
          res.send(`User does not have enough money.`);
        }
      } else {
        res.send("Transaction amount must be positive.");
      }
    } else {
      res.send("No amount was sent.");
    }
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = transferMoney;
