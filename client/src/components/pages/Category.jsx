import React,{ useContext } from "react";
import {ProductContext} from "../context/ProductContext";
import {useParams} from "react-router-dom";
import ProductCard from "../layout/ProductCard";

const Category = () => {
  const {products} =useContext(ProductContext);
  let {cId} = useParams();

    return ( 
        <div>
            <h3>product for category</h3>
            <div>{products.map((p,i)=>{
                return <ProductCard key={i} product={p} />
            })} </div>
        </div>
     );
}
 
export default Category;