const express = require("express");
const router = express.Router();
const addUser = require("./controllers/addUser");
const getAllUsers = require("./controllers/getAllUsers");
const getUser = require("./controllers/getUser");
const deleteUser = require("./controllers/deleteUser");
const deleteAllUsers = require("./controllers/deleteAllUsers");
const makeDeposit = require("./controllers/makeDeposit");
const updateUserCredit = require("./controllers/updateUserCredit");
const toWithdraw = require("./controllers/toWithdraw");
const transferMoney = require("./controllers/transferMoney");

// Add user
// { cash, credit } = req.body:
router.route("/add").post(addUser);

router.route("/all")
  .get(getAllUsers)
  .delete(deleteAllUsers);

// Show details of user
router.route("/:id").get(getUser);

// Delete user
router.route("/:id/delete").delete(deleteUser);

// Depositing
// { amount } => req.body
router.route("/:id/deposit").put(makeDeposit);

// Update credit
// { amount } => req.body
router.route("/:id/credit").put(updateUserCredit);

// Withdraw money
// { amount } => req.body
router.route("/:id/withdraw").put(toWithdraw);

// Transfer money
// { amount } => req.body
// { destId } => req.query;
router.route("/:id/transfer").put(transferMoney);

module.exports = router;
