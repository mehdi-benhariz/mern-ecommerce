import React ,{useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import ProductCard from "../layout/ProductCard"
const Main = () => {
    const {isLogged} = useContext(AuthContext)
    const list = new Array(10)

   return ( 
        <React.Fragment>
        <div>this is the main page</div>
       <div class="self-center bg-gray-300" >
           {list.map((p,i)=>{
           <ProductCard />
       })}</div>
        </React.Fragment>
     );
}
 
export default Main;