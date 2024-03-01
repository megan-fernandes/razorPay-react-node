import React from "react";
import axios from "axios";

const ProductCard = (props: any) => {
  const { data } = props;
  //   console.log("DATA", data);
  const { name, description, amount, currency } = data;

  function handleClick() {
    const updatedCheckOutData = {
      name,
      description,
      amount,
      currency,
    };

    try {
      axios
        .post("http://localhost:3000/createOrder", updatedCheckOutData)
        .then((response) => {
          console.log(response); // Set the response data to the state
          const data = response.data;
          if (data.success) {
            handleCheckout(data);
          }
        });
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  }

  async function handleCheckout(data: any) {
    console.log("HandleCheckout");
    try {
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: data.name,
        description: data.description,
        image: "https://dummyimage.com/600x400/000/fff",
        order_id: data.order_id,
        handler: function (response) {
          alert("Payment Succeeded");
          // window.open("/","_self")
        },
        prefill: {
          contact: data.contact,
          name: data.name,
          email: data.email,
        },
        notes: {
          description: data.description,
        },
        theme: {
          color: "#2300a3",
        },
      };
      const rzp1 = new window.Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert("Payment Failed");
      });
      rzp1.open();
    } catch (err) {
      console.log(err);
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
          {amount / 100} {currency}
        </h4>
      </div>
      <div>
        <button
          onClick={() => {
            console.log("check Click");
            handleClick();
          }}
        >
          Buy Now
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default ProductCard;
