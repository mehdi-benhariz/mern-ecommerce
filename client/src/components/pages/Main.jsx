import React ,{useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import ProductCard from "../layout/ProductCard"
const Main = () => {
    const {isLogged} = useContext(AuthContext)
    const list = new Array(10)

   return ( 
        <span class="">
        <div>this is the main page</div>
        <input placeholder="What are you shopping for?" maxlength="300" autocomplete="off" type="text"
         class="py-4 w-2/3 outline-none shadow-md bg-white pl-2 rounded min-w-min"  />
       <div class="self-center bg-gray-300" >
           {list.map((p,i)=>{
           <ProductCard />
       })}</div>
        </span >
     );
}
 
export default Main;