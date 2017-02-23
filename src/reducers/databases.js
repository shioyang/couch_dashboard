import { SHOW_DOCUMENT_LIST, showDocumentListAction } from '../actions'

const databases = (state = [{name: "host"}], action) => {
  switch(action.type){
    case SHOW_DOCUMENT_LIST:
    default:
      return state
  }
}

export default databases