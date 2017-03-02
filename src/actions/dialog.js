// action types
export const OPEN_DIALIG = 'OPEN_DIALIG'
export const CLOSE_DIALIG = 'CLOSE_DIALIG'

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