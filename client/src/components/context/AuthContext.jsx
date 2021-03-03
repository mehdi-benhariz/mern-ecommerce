import axios from 'axios';
import React,{createContext ,useEffect,useState } from 'react';
import {API }from "../Api";

axios.defaults.withCredentials = true


export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isLogged, setisLogged] = useState(null)
    const [change, setchange] = useState(false)
    const update=()=>setchange(!change)
    
   useEffect(async() => {
       const res= await API.getUserInfo();
       setisLogged(res.data.isLogged);
   }, [change])


    return ( 
        <AuthContext.Provider value={{isLogged,setisLogged,update}} >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;