import fetch from 'isomorphic-fetch'
import { config } from '../config.js'

// action types
export const REQUEST_DOC_DETAIL = 'REQUEST_DOC_DETAIL'
export const RECEIVE_DOC_DETAIL = 'RECEIVE_DOC_DETAIL'
export const FETCH_DOC_DETAIL = 'FETCH_DOC_DETAIL'

// other constants
const url = config.couch_url

// action creators
export function requestDocDetail(dbname, doc){
  return {
    type: REQUEST_DOC_DETAIL,
    dbname,
    doc
  }
}

export function receiveDocDetail(dbname, doc, json){
  return {
    type: RECEIVE_DOC_DETAIL,
    dbname,
    doc,
    docDetail: json,
    receivedAt: Date.now()
  }
}

export function fetchDocDetail(dbname, doc){
  return function(dispatch){
    dispatch(requestDocDetail(dbname))
    return fetch(url + '/' + dbname.name + '/' + doc.id,
                   {mode: 'cors', credentials: 'include'})
      .then(res => res.json())
      .then(json => dispatch(receiveDocDetail(dbname, doc, json)))
  }
}