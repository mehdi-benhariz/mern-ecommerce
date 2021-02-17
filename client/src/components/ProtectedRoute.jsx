import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import {Route,Redirect,useLocation} from "react-router-dom"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SingIn";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {isLogged} = useContext(AuthContext);
    const {pathname} = useLocation()
     console.log(pathname==="/login")
    if(pathname==="/login" ||pathname==="/register"){
        return(
            <Route
            {...rest}
            render={(props) =>{
              isLogged ? (
                <Redirect
                to={{
                  pathname: "/",
                }}
              />
              ) : (
                <Component {...props} />
              )
            }
            }
          />    
        )
    }else{
        return ( 
            <Route
            {...rest}
            render={(props) =>{
              isLogged ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              )
            }
            }
          />
         );
    }
    
}
 
export default ProtectedRoute;