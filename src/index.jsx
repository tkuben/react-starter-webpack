import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'

import store from './redux/store'

import App from './App'
import Dashboard from './Pages/dashboard'
import PageNotFound from './Pages/404'

const history = createBrowserHistory();


const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>,
  rootElement
)