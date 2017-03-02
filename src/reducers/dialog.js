import { OPEN_DIALIG, CLOSE_DIALIG } from '../actions/dialog'

const dialog = (state = { open: false, name: null }, action) => {
  switch(action.type){
    case OPEN_DIALIG:
      return {
        open: true,
        name: action.dialog.name
      }
    case CLOSE_DIALIG:
      return {
        open: false,
        name: null
      }
    default:
      return state
  }
}

export default dialog