import { combineReducers } from 'redux'
import databases from './databases'
import docs from './docs'
import docDetail from './docDetail'
import { reducer as formReducer } from 'redux-form'
import dialog from './dialog'

const rootReducer = combineReducers({
  databases,
  docs,
  docDetail,
  form: formReducer,
  dialog
})

export default rootReducer