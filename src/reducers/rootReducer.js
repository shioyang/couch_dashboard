import { combineReducers } from 'redux'
import databases from './databases'
import docs from './docs'
import docDetail from './docDetail'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  databases,
  docs,
  docDetail,
  form: formReducer
})

export default rootReducer