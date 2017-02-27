import { combineReducers } from 'redux'
import databases from './databases'
import docs from './docs'
import docDetail from './docDetail'

const rootReducer = combineReducers({
  databases,
  docs,
  docDetail
})

export default rootReducer