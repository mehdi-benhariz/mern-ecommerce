import React ,{useContext} from "react"
import NavBar from "../layout/Navbar";

const Main = () => {
   const token =  localStorage.getItem('Token')
   
   return ( 
        <React.Fragment>
            <NavBar/>
        <div>this is the main page</div>
<p>{token?"there is a token":"there isn't a token "} </p>
        </React.Fragment>
     );
}
 
export default Main;