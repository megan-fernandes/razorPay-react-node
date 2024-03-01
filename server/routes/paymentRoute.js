const express = require("express");
const payment_route = express();

const bodyParser = require("body-parser");
payment_route.use(bodyParser.json());
payment_route.use(bodyParser.urlencoded({ extended: false }));

const paymentController = require("../controllers/paymentController");
const subscriptionController = require("../controllers/subscriptionController");

payment_route.post("/createOrder", paymentController.createOrder);
payment_route.post(
  "/createSubscription",
  subscriptionController.createSubscription
);

module.exports = payment_route;
