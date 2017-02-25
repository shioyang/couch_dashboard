import { combineReducers } from 'redux'
import databases from './databases'
import docs from './docs'

const rootReducer = combineReducers({
  databases,
  docs
})

export default rootReducer