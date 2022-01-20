const mongoose = require("mongoose");
require("dotenv").config();

const MONGOOSE_URL = process.env.MONGODB_URL;

mongoose.connect(
  // "mongodb://localhost/bank-api",
  MONGOOSE_URL,
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);