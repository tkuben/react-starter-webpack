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
import LoginPage from 'Pages/LoginPage'
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
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  rootElement
)