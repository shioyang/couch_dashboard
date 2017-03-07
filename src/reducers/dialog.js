import { OPEN_DIALIG, CLOSE_DIALIG, CHANGE_KEY_NAME } from '../actions/dialog'

const dialog = (state = { open: false, name: null }, action) => {
  switch(action.type){
    case OPEN_DIALIG:
      return Object.assign({}, state, {
        open: true,
        name: action.dialog.name
      })
    case CLOSE_DIALIG:
      return Object.assign({}, state, {
        open: false,
        name: null
      })
    default:
      return state
  }
}

export default dialog