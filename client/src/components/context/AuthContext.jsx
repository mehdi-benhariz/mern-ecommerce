import axios from 'axios';
import React,{createContext ,useEffect,useState } from 'react';
axios.defaults.withCredentials = true

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isLogged, setisLogged] = useState(null)
   
   useEffect(async() => {
       const res= await axios.get("/api/v1/userInfo")
       setisLogged({res});
   }, [])


    return ( 
        <AuthContext.Provider value={{isLogged,setisLogged}} >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;