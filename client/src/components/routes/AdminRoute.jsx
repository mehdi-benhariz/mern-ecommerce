import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminPage from "../pages/AdminPage";

const AdminRoute = () => {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <Route exact path={`${path}/`} component={AdminPage} />
    </Switch>
  );
};

export default AdminRoute;
