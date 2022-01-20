const mongoose = require("mongoose");

const MONGODB_URL = "mongodb+srv://danielshamir93:4sXk3nH6OKl5tG35@danieldb.rhwdk.mongodb.net/Bank_API?retryWrites=true&w=majority";

mongoose.connect(
  MONGODB_URL,
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);