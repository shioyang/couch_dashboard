import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

// Redux
import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from '../presentations/App'
import './Root.css'

// material-ui: Needed for tap events
injectTapEventPlugin();

let store = configureStore();

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