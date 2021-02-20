import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import SignIn from './components/pages/SingIn';
import SignUp from './components/pages/SignUp';
import Main from "./components/pages/Main";
import AuthContextProvider from "./components/context/AuthContext"
import Private from './components/pages/Private';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from './components/layout/Navbar';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <div className="App">
<AuthContextProvider>
<Switch>
<NavBar/>
   <Route exact path="/login" component={SignIn} />
   <Route exact path="/register" component={SignUp} />
   <Route  exact path="/" component={Main} />
   <ProtectedRoute   exact path="/private" component={Private} />
   <Route exact path="/product/:pid" component={ProductDetail}  />
   <Route component={ErrorPage}  />

</Switch>
</AuthContextProvider>

    </div>
  );
}

export default App;
