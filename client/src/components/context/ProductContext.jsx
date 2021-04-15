import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/ProductApi";
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [change, setchange] = useState(false);
  const [products, setproducts] = useState([]);
  const update = () => setchange(!change);
  useEffect(async () => {
    let res = await getProducts();
    setproducts(res?.data);
  }, [change]);

  return (
    <ProductContext.Provider value={{ update, products }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
