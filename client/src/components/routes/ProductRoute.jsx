import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Category from "../pages/Category";
import AddProduct from "../pages/AddProduct";
import ProductDetail from "../pages/ProductDetail";
import EditProduct from "../pages/EditProduct";

const ProductRoute = () => {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <Route exact path={`${path}/categorie/:cId`} component={Category} />
      <Route exact path={`${path}/add`} component={AddProduct} />
      <Route exact path={`${path}/edit/:pId`} component={EditProduct} />
      <Route exact path={`${path}/:pid`} component={ProductDetail} />
    </Switch>
  );
};

export default ProductRoute;
