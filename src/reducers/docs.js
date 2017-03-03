import { REQUEST_DOCS, RECEIVE_DOCS } from '../actions/docs'

const initial_docs = {
  isFetching: false,
  items: [],
  selectedDb: null
}

const Docs = function docs(state = initial_docs, action){
  switch(action.type){
    case REQUEST_DOCS:
      return Object.assign({}, state, {
        isFetching: true,
        selectedDb: action.db
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