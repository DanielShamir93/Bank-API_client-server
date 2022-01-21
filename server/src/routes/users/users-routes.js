const express = require("express");
const router = express.Router();
const addUser = require("./controllers/addUser");
const getAllUsers = require("./controllers/getAllUsers");
const getUser = require("./controllers/getUser");
const deleteUser = require("./controllers/deleteUser");
const deleteAllUsers = require("./controllers/deleteAllUsers");
const makeDeposit = require("./controllers/makeDeposit");

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

module.exports = router;
