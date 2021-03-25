import React ,{useContext} from "react"
import ProductCard from "../layout/ProductCard"
import {ProductContext} from "../context/ProductContext"
const Main = () => {
    const {products} = useContext(ProductContext)
  console.log(products)
   return ( 
        <React.Fragment >
        <h2>this is the main page</h2>
        <input placeholder="What are you shopping for?" maxlength="300" autocomplete="on" type="text"
         class="py-4 w-2/3 outline-none shadow-md bg-white pl-2 rounded min-w-min"  />
       <div class="self-center bg-gray-300 grid grid-flow-row grid-cols-3" >
           <ProductCard/>
           {products?.map((p)=>{
               return(
                <ProductCard product={p} />
               )
       })}</div>
        </React.Fragment >
     );
}
 
export default Main;