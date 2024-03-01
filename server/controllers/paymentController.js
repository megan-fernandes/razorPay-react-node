const Razorpay = require("razorpay");
const shortid = require("shortid");
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

const createOrder = async (req, res) => {
  console.log("POST/createOrder");
  const { name, description, amount, currency } = req.body;
  console.log(name, description, amount, currency);

  const recepit_id = shortid.generate();
  try {
    const options = {
      amount: amount,
      currency: "INR",
      receipt: recepit_id,
    };

    razorpayInstance.orders.create(options, (err, order) => {
      if (!err) {
        res.status(200).send({
          success: true,
          msg: "Order Created",
          order_id: order.id,
          amount: amount,
          currency: currency,
          key_id: RAZORPAY_ID_KEY,
          product_name: name,
          description: description,
          contact: "8431737314",
          name: "Sandeep Sharma",
          email: "sandeep@gmail.com",
        });
      } else {
        res.status(400).send({ success: false, msg: "Something went wrong!" });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createOrder,
};
