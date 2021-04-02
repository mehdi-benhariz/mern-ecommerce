import React ,{useContext} from "react"
import ProductCard from "../layout/ProductCard"
import {ProductContext} from "../context/ProductContext"
const Main = () => {
    const {products} = useContext(ProductContext)
  console.log(products)
   return ( 
        <React.Fragment >
          <div class="flex items-center justify-center" >
          <input placeholder="What are you shopping for?" maxlength="300" autocomplete="on" type="text"
         class="py-4 w-2/3 outline-none shadow-md bg-white pl-2 rounded min-w-min mb-4"  />
          </div>

       <div class=" bg-gray-300 grid grid-cols-3 px-3" >
           {products?.map((p)=>{
               return(
                <ProductCard product={p} />
               )
       })}</div>
        </React.Fragment >
     );
}
 
export default Main;