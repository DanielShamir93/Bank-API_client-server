const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const usersRoutes = require("./src/routes/users/users-routes");
require("./src/db/mongoose");

const PORT = process.env.PORT || 5000;

const publicPath = path.join(__dirname, 'client/build');
app.use(express.static(publicPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);

app.all('*', (req, res) => {
  console.log(publicPath)
  res.sendFile(path.resolve(publicPath, 'index.html'));
});
// 404
// app.all("/*", (req, res) => {
//   res.status(404).send("Page not found.");
// });

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
