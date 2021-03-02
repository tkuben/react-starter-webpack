import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import store from './redux/store'
import theme from './theme';

import App from './App'
import Dashboard from './Pages/dashboard'
import PageNotFound from './Pages/404'

const history = createBrowserHistory();

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  rootElement
)