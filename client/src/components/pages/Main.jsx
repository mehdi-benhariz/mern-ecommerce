import React ,{useContext} from "react"
import NavBar from "../layout/Navbar";
import {AuthContext} from "../context/AuthContext"

const Main = () => {
    const {isLogged} = useContext(AuthContext)
   return ( 
        <React.Fragment>
            <NavBar/>
        <div>this is the main page</div>
        </React.Fragment>
     );
}
 
export default Main;