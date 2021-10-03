import { Switch, Route } from "react-router-dom";
import SignIn from "./components/pages/SingIn";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from "./components/layout/Navbar";
import Pannel from "./components/pages/user/Pannel";
import Footer from "./components/layout/Footer";
import ProductRoute from "./components/routes/ProductRoute";
import AdminRoute from "./components/routes/AdminRoute";
import Profile from "./components/pages/user/Profile";
import ReceiptRoute from "./components/routes/ReceiptRoute";
function App() {
  return (
    <div className="App bg-gray-200 h-full flex flex-col justify-between">
      <NavBar />
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={Main} />
        <Route exact path="/pannel" component={Pannel} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/product" component={ProductRoute} />
        <Route path="/adminPage" component={AdminRoute} />
        <Route path="/receipt" component={ReceiptRoute} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
