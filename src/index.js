import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <h1>Project pivoted to <a href="https://github.com/thetensorgroup/tensorpaperscissors">Tensor Paper Scissors</a></h1>
  <Provider store={configureStore()}>
    <App />, 
  </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
