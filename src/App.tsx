import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
}

export default App;
