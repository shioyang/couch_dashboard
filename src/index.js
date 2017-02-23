import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import dashboardApp from './reducers'

import App from './presentations/App'
import './index.css'

let store = createStore(dashboardApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
