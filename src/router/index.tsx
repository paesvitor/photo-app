import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import AlbumsScreen from "screens/Albums";
import AlbumScreen from "screens/Album";

// Components
function Router() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={AlbumsScreen} />
        <Route exact path="/album/:id" component={AlbumScreen} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
