import React from 'react';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';
import Router from './router';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
}

export default App;
