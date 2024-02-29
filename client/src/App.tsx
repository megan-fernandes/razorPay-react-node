import * as React from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { products } from "./utils/constants";

function App() {
  const data = products;
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap gap-5">
        {data &&
          data.length > 0 &&
          data.map((product, index) => (
            <ProductCard key={index} data={product} />
          ))}
      </div>
    </>
  );
}

export default App;
