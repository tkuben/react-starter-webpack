import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import './axios.js';
import store from 'Redux/store'
import theme from './theme';

import HomePage from 'Pages/HomePage'
import Dashboard from 'Pages/Dashboard'
import PageNotFound from 'Pages/404'

const history = createBrowserHistory();

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  rootElement
)