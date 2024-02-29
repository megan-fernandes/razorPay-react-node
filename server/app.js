require("dotenv").config();
const express = require("express");
// var router = express.Router();
const app = express();
const cors = require("cors");

app.use(cors());
app.use("/", paymentRoute);

app.listen(3000, function () {
  console.log("Server is running on http://localhost:3000");
});
