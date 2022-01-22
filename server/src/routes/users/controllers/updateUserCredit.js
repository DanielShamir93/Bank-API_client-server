const User = require("../../../../db/models/userModel");

const updateUserCredit = async (req, res) => {
  try {
    if (req.body.hasOwnProperty("amount")) {
      const { amount } = req.body;
      const { id } = req.params;
  
      if (+amount > 0) {
        await User.findByIdAndUpdate(id, {
          credit: +amount,
        });
        res.status(200).send(`user: ${id} updated.\ncash = ${data.cash}`);
      } else {
        res.send("Credit amount must be positive.");
      }
    } else {
      res.send("No credit amount was sent.");
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
 
};

module.exports = updateUserCredit;