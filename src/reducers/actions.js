// action types
export const SHOW_DOCUMENT_LIST = 'SHOW_DOCUMENT_LIST'

// other constants

// action creators
export function showDocumentListAction(name){
  return { type: SHOW_DOCUMENT_LIST, name }
}