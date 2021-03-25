import axios from 'axios';
import React,{createContext ,useEffect,useState } from 'react';
import { API } from '../Api';
axios.defaults.withCredentials = true

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [change, setchange] = useState(false)
   const [products, setproducts] = useState([])
    const update=()=>setchange(!change)
    useEffect(async() => {
        let res = await API.getProducts();
        setproducts(res?.data);
    }, [change])

    return ( 
        <ProductContext.Provider value={{update,products}} >
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;