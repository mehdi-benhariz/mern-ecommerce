import { Switch, Route } from "react-router-dom";
import SignIn from "./components/pages/SingIn";
import SignUp from "./components/pages/SignUp";
import Main from "./components/pages/Main";
import ErrorPage from "./components/pages/ErrorPage";
import NavBar from "./components/layout/Navbar";
import ProductDetail from "./components/pages/ProductDetail";
import Pannel from "./components/pages/Pannel";
import Category from "./components/pages/Category";
import Footer from "./components/layout/Footer";
import AddProduct from "./components/pages/AddProduct";
import AdminPage from "./components/pages/AdminPage";
import EditProduct from "./components/pages/EditProduct";
function App() {
  return (
    <div className="App bg-gray-200 h-full flex flex-col justify-between">
      <NavBar />
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/" component={Main} />
        <Route exact path="/pannel" component={Pannel} />
        <Route exact path="/product/categorie/:cid" component={Category} />
        <Route exact path="/product/add" component={AddProduct} />
        <Route exact path="/product/edit/:pId" component={EditProduct} />
        <Route exact path="/product/:pid" component={ProductDetail} />
        <Route exact path="/adminPage" component={AdminPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
