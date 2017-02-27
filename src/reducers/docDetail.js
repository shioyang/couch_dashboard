import { REQUEST_DOC_DETAIL, RECEIVE_DOC_DETAIL } from '../actions/docDetail'

const initial_docDetail = {
  isFetching: false,
  item: null
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
        item: action.docDetail
      })
    default:
      return state
  }
}

export default DocDetail