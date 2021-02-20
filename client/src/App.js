import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/pages/SingIn';
import SignUp from './components/pages/SignUp';
import Main from "./components/pages/Main";
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from './components/layout/Navbar';
import ProductDetail from './components/pages/ProductDetail';
import Pannel from "./components/pages/Pannel";

function App() {
  return (
    <div className="App">
<Switch>
<NavBar/>
   <Route exact path="/login" component={SignIn} />
   <Route exact path="/register" component={SignUp} />
   <Route  exact path="/" component={Main} />
   <ProtectedRoute  exact path="/pannel" component={Pannel} />
   <Route exact path="/product/:pid" component={ProductDetail}  />
   <Route component={ErrorPage}  />

</Switch>
    </div>
  );
}

export default App;
