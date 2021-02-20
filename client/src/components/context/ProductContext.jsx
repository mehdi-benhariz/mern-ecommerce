import axios from 'axios';
import React,{createContext ,useEffect,useState } from 'react';
axios.defaults.withCredentials = true

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [change, setchange] = useState(false)
    const update=()=>setchange(!change)

    return ( 
        <ProductContext.Provider value={{update}} >
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;