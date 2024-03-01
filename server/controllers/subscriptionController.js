const Razorpay = require("razorpay");
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

const createSubscription = async (req, res) => {
  console.log("POST/createSubscription");
  const { id, total_count, quantity, addons, notify_info } = req.body;
  console.log("destructured: ", id, total_count, quantity, addons);

  const { amount, currency } = req.body;
  console.log(amount, currency);

  try {
    const options = {
      plan_id: id,
      total_count,
      quantity,
      addons,
      notify_info,
    };

    razorpayInstance.subscriptions.create(options, (err, subscription) => {
      if (!err) {
        res.status(200).send({
          success: true,
          msg: "Subscription Created",
          created_at: subscription.created_at,
          sub_id: subscription.id,
          plan_id: id,
          amount: amount,
          currency: currency,
          url: subscription.short_url,
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
  createSubscription,
};
