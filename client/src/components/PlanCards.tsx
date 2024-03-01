import React from "react";
import axios from "axios";

const PlanCard = (props: any) => {
  const { planData } = props;
  const { id, item, period } = planData;
  const { amount, currency, description, name, type } = item;

  async function handleClick() {
    console.log("Inside Subscribe HandleClick");
    //create subscription with default values
    //billing cycles = 6
    //no.of subscriptions = 1
    const subscriptionData = {
      id,
      total_count: 6,
      quantity: 1,
      customer_notify: 1,
      addons: [
        {
          item: {
            name: "Delivery charges",
            amount: 300,
            currency: currency,
          },
        },
      ],
      notify_info: {
        notify_phone: "8431737314",
        notify_email: "gaurav.kumar@example.com",
      },
    };
    try {
      axios
        .post("http://localhost:3000/createSubscription", subscriptionData)
        .then((response) => {
          console.log(response); // Set the response data to the state
          const data = response.data;
          if (data.success) {
            window.location.href = data.url;
          }
        });
    } catch (error) {
      console.error("Error fetching subscription details:", error);
    }
  }

  return (
    <div className="w-[350px] p-5 mr-4 mb-4 justify-center bg-slate">
      <div className="space-y-1 pl-4">
        <h3 className="res-title text-lg font-medium text-[#02060CBF]">
          {name}
        </h3>
        <p>{description}</p>

        <h4 className="text-md font-medium text-[#02060CBF]">
          {amount / 100} {currency} / {period == "monthly" ? "month" : "week"}
        </h4>
        <p>
          {type} : {period}
        </p>
      </div>
      <div>
        <button onClick={() => handleClick()}>Subscribe Now</button>
        <div></div>
      </div>
    </div>
  );
};

export default PlanCard;
