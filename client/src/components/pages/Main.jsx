import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../layout/ProductCard";
import { ProductContext } from "../context/ProductContext";
import { searchProduct } from "../api/ProductApi";

const Main = () => {
  const { products } = useContext(ProductContext);

  const [q, setq] = useState("");
  const [search, setsearch] = useState([]);
  let productList = (q !== "" ? search : products)?.map((p, i) => {
    return <ProductCard product={p} key={i} />;
  });
  async function fetchSearch() {
    const res = await searchProduct(q);
    if (res?.status === 200) setsearch(res.data);
  }
  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line
  }, [q]);

  return (
    <React.Fragment>
      <div class="flex items-center justify-center">
        <input
          placeholder="What are you shopping for?"
          maxLength="300"
          autoComplete="on"
          type="text"
          className="py-4 w-2/3 outline-none shadow-md bg-white pl-2 rounded min-w-min mb-4"
          onChange={(e) => setq(e.target.value)}
        />
      </div>

      <div class=" bg-gray-300 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-3">
        {productList?.length > 0 && productList}{" "}
      </div>
    </React.Fragment>
  );
};

export default Main;
