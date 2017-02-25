import { REQUEST_DOCS, RECEIVE_DOCS } from '../actions/docs'

const initial_docs = {
  isFetching: false,
  items: []
}

const Docs = function docs(state = initial_docs, action){
  switch(action){
    case REQUEST_DOCS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DOCS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.docs
      })
    default:
      return state
  }
}

export default Docs