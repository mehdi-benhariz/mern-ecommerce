import React,{useReducer,createContext ,useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
   const token = localStorage.getItem('Token')
   var isLogged = !!token;
   
   useEffect(() => {
     isLogged=!!token;
    }, [localStorage.getItem('token')])


    return ( 
        <AuthContext.Provider value={{isLogged,token}} >
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;