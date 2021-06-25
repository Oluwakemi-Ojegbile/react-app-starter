import React from "react";
import { Route, Switch } from "react-router-dom"

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        {/* <Route exact path="/" component={Login} /> */}
      
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="*" component={NotFound} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
