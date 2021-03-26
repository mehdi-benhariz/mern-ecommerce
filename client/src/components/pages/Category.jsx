import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductCard from "../layout/ProductCard";

const Category = () => {
  const { products } = useContext(ProductContext);
  let { cId } = useParams();
  console.log({ cId });

  return (
    <div class="p-2">
      <h3 class="text-gray-700 font-semibold text-2xl">
        product for :
        <span class="text-gray-800 font-semibold text-2xl">category</span>{" "}
      </h3>
      <div>
        {products?.map((p, i) => {
          return <ProductCard key={i} product={p} />;
        })}{" "}
      </div>
    </div>
  );
};

export default Category;
