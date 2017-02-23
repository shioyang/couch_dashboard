import { combineReducers } from 'redux'
import databases from './databases'

const dashboardApp = combineReducers({
  databases
})

export default dashboardApp