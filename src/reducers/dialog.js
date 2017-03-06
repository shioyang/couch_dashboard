import { OPEN_DIALIG, CLOSE_DIALIG, CHANGE_KEY_NAME } from '../actions/dialog'

const dialog = (state = { open: false, name: null, keyName: null }, action) => {
  switch(action.type){
    case OPEN_DIALIG:
      return Object.assign({}, state, {
        open: true,
        name: action.dialog.name,
        keyName: null
      })
    case CLOSE_DIALIG:
      return Object.assign({}, state, {
        open: false,
        name: null
      })
    case CHANGE_KEY_NAME:
      return Object.assign({}, state, {
        keyName: action.keyName
      })
    default:
      return state
  }
}

export default dialog