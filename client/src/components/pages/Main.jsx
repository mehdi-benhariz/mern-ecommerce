import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../layout/ProductCard";
import { ProductContext } from "../context/ProductContext";
import {API} from "../Api"
const Main = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const [q, setq] = useState("");
   const [search, setsearch] = useState([])
  let productList = (q? search:products)?.map((p) => {
    return <ProductCard product={p} />;
  });
   useEffect(async() => {
     const res  =await API.searchProduct(q)
     console.log({res})
   }, [q])
  return (
    <React.Fragment>
      <div class="flex items-center justify-center">
        <input
          placeholder="What are you shopping for?"
          maxlength="300"
          autocomplete="on"
          type="text"
          class="py-4 w-2/3 outline-none shadow-md bg-white pl-2 rounded min-w-min mb-4"
          onChange={(e) => setq(e.target.value)}
        />
      </div>

      <div class=" bg-gray-300 grid grid-cols-3 px-3">
        {q ? <p></p> : productList}{" "}
      </div>
    </React.Fragment>
  );
};

export default Main;
