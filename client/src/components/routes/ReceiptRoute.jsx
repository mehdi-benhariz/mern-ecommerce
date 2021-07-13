import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddReceipt from "../pages/receipt/AddReceipt";
import ReceiptDetail from "../pages/receipt/ReceiptDetail";
import ReceiptsPage from "../pages/receipt/ReceiptsPage";

const ProductRoute = () => {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <Route exact path={`${path}/`} component={ReceiptsPage} />
      <Route exact path={`${path}/add`} component={AddReceipt} />
      <Route exact path={`${path}/:rId`} component={ReceiptDetail} />
    </Switch>
  );
};

export default ProductRoute;
