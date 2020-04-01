import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AlbumsScreen from "../screens/Albums";

// Components
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AlbumsScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
