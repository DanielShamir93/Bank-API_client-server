const mongoose = require("mongoose");

const DB_NAME = "Bank_API";
const MONGOOSE_URL = `mongodb+srv://danielshamir93:4sXk3nH6OKl5tG35@danieldb.rhwdk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(
  // "mongodb://localhost/bank-api",
  MONGOOSE_URL,
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);