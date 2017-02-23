import { combineReducers } from 'redux'
import { SHOW_DOCUMENT_LIST, showDocumentListAction } from '../actions'

function databases(state = [], action){
  switch(action.type){
    case SHOW_DOCUMENT_LIST:
      return {
        name: action.name
      }
    default:
      return state
  }
}

const dashboardApp = combineReducers({
  databases
})

export default dashboardApp