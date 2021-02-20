import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import {Route,Redirect,useLocation} from "react-router-dom"

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {isLogged} = useContext(AuthContext);
    const {pathname} = useLocation()

    if(pathname==="/login" ||pathname==="/register"){
        return(isLogged ? (
                <Redirect
                to={{
                  pathname: "/",
                }}
              />
              ) : (
            <Route
            {...rest}
            render={(props) =>{
                <Component {...props} />
            }
            }
          />    
        ))
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