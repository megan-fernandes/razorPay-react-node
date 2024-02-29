import React, { useState } from "react";

const ProductCard = (props: any) => {
  const { data } = props;
  //   console.log("DATA", data);
  const { name, description, amount, currency } = data;
  const [checkOutData, setcheckOutData] = useState({});

  function handleClick() {
    //checkout logic
    setcheckOutData({
      name: name,
      description: description,
      amount: amount,
      currency: currency,
    });
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
      <p>{JSON.stringify(checkOutData)}</p>
    </div>
  );
};

export default ProductCard;
