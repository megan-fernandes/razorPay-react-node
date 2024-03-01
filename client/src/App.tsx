import * as React from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { products, plans } from "./utils/constants";
import PlanCard from "./components/PlanCards";

function App() {
  const data = products;
  const planData = plans
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap gap-5">
        <h1>Products</h1>
        {data &&
          data.length > 0 &&
          data.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
      </div>
      <div className="flex flex-wrap gap-5">
        <h1>Plans for subscription</h1>
        {planData &&
          planData.length > 0 &&
          planData.map((product, index) => (
            <PlanCard key={index} planData={product} />
          ))}

      </div>
    </>
  );
}

export default App;
