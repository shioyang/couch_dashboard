import { REQUEST_DOC_DETAIL, RECEIVE_DOC_DETAIL, CHANGE_KEY_NAME, ADD_KEY_TO_DOC } from '../actions/docDetail'

const initial_docDetail = {
  isFetching: false,
  item: null,
  keyName: null
}

const DocDetail = function docDetail(state = initial_docDetail, action){
  switch(action.type){
    case REQUEST_DOC_DETAIL:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_DOC_DETAIL:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.docDetail,
        keyName: null
      })
    case CHANGE_KEY_NAME:
      return Object.assign({}, state, {
        keyName: action.keyName
      })
    case ADD_KEY_TO_DOC:
      let newState = Object.assign({}, state)
      newState.item[state.keyName] = ''
      newState.keyName = null
      return newState
    default:
      return state
  }
}

export default DocDetail