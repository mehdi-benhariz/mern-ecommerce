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

function App() {
  return (
    <div className="App">
<AuthContextProvider>
<Route exact path="/login" component={SignIn} />
   <Route exact path="/register" component={SignUp} />
   <Route  exact path="/" component={Main} />
   <ProtectedRoute   exact path="/private" component={Private} />
<Switch>

</Switch>
</AuthContextProvider>

    </div>
  );
}

export default App;
