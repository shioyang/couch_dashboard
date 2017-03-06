// action types
export const OPEN_DIALIG = 'OPEN_DIALIG'
export const CLOSE_DIALIG = 'CLOSE_DIALIG'
export const CHANGE_KEY_NAME = 'CHANGE_KEY_NAME'

// other constants

// action creators
export function openDialog(dialog){
  return {
    type: OPEN_DIALIG,
    dialog
  }
}

export function closeDialog(dialog){
  return {
    type: CLOSE_DIALIG,
    dialog
  }
}

export function changeKeyName(keyName){
  return {
    type: CHANGE_KEY_NAME,
    keyName: keyName
  }
}