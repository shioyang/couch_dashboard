import React, { Component } from 'react'

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
        <App />
      </Provider>
    )
  }
}