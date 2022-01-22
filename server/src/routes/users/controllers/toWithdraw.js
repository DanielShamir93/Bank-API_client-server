const User = require("../../../../db/models/userModel");

const toWithdraw = async (req, res) => {
  try {
    if (req.body.hasOwnProperty("amount")) {
      const { amount } = req.body;
      const { id } = req.params;
  
      if (+amount > 0) {
        const doc = await User.findById(id);
        if (+doc.credit + +doc.cash >= +amount) {
          // User has enough money in the bank to withdraw
          if (+doc.cash >= +amount) {
            // User has enough cash to withdraw
            doc.cash -= +amount;
          } else {
            // User needs to use credit to withdraw
            doc.credit += +doc.cash;
            doc.credit -= +amount;
            doc.cash = 0;
          }
          doc.save();
          res.status(200).send(`user: ${id} updated.`);
        } else {
          res.send(
            `User does not have enough money in the bank to withdraw ${amount}$.\nAccount status: cash: ${doc.cash}$, credit: ${doc.credit}$`
          );
        }
      } else {
        res.send("Withdraw amount must be positive.");
      }
    } else {
      res.send("No amount was sent.");
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
  
};

module.exports = toWithdraw;
