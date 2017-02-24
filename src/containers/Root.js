import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import dashboardApp from '../reducers'

import App from '../presentations/App'
import './Root.css'

let store = createStore(dashboardApp)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    )
  }
}