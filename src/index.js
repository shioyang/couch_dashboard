import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Root from './containers/Root'

const App = () => (
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
