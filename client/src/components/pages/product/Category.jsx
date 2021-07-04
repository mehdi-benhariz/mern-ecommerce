import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import ProductCard from "../../layout/ProductCard";
import { getProductByCat } from "../../api/ProductApi";

const Category = () => {
  const [products, setproducts] = useState([]);
  let { cId } = useParams();

  const getCat = async () => {
    let res = await getProductByCat(cId);
    if (res.status === 200) setproducts(res.data);
    else if (res.status === 400) setproducts([]);
    console.log(res);
  };
  useEffect(() => {
    getCat();
    return () => {
      setproducts([]);
    };
    // eslint-disable-next-line
  }, [cId]);
  return (
    <div class="p-2">
      <h3 class="text-gray-700 font-semibold text-2xl">
        product for :
        <span class="text-gray-800 font-semibold text-2xl">{cId} </span>{" "}
      </h3>
      <div>
        {products?.map((p, i) => {
          return <ProductCard key={i} product={p} />;
        })}{" "}
        {products.length === 0 && (
          <div className="grid place-items-center p-10	 ">
            <h4 className="text-2xl text-red-500  ">We are Sorry </h4>
            <p className="text-lg text-gray-700 ">
              it looks like there isn't any product for this category yet :( ...{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
