import React from "react";
import { Route, Switch } from "react-router-dom";

import Page from "./Page";

const Routes = () => (
  <Switch>
    <Route path="/">
      <Page />
    </Route>
  </Switch>
);

export default Routes;
