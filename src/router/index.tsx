import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AlbumsScreen from "../screens/Albums";
import AlbumScreen from "screens/Album";

// Components
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AlbumsScreen} />
        <Route exact path="/album/:id" component={AlbumScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
