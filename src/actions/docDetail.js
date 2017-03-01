import fetch from 'isomorphic-fetch'
import { config } from '../config.js'
import * as qs from 'qs'

// action types
export const REQUEST_DOC_DETAIL = 'REQUEST_DOC_DETAIL'
export const RECEIVE_DOC_DETAIL = 'RECEIVE_DOC_DETAIL'
export const FETCH_DOC_DETAIL = 'FETCH_DOC_DETAIL'

export const SAVE_DOC_DETAIL = 'SAVE_DOC_DETAIL'

// other constants
const url = config.couch_url

// action creators
export function requestDocDetail(db, doc){
  return {
    type: REQUEST_DOC_DETAIL,
    db,
    doc
  }
}

export function receiveDocDetail(db, doc, json){
  return {
    type: RECEIVE_DOC_DETAIL,
    db,
    doc,
    docDetail: json,
    receivedAt: Date.now()
  }
}

export function fetchDocDetail(db, doc){
  return function(dispatch){
    dispatch(requestDocDetail(db))
    return fetch(url + '/' + db.name + '/' + doc.id,
                   {mode: 'cors', credentials: 'include'})
      .then(res => res.json())
      .then(json => dispatch(receiveDocDetail(db, doc, json)))
  }
}

export function saveDocDetail(db, docDetail, values){
  return function(dispatch){
    dispatch(requestDocDetail(db))
    return fetch(url + '/' + db.name + '/' + docDetail._id,
                   {mode: 'cors', credentials: 'include',
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    // headers: {
                    //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    // },
                    body: qs.stringify(values) })
      .then(res => res.json())
      .then(json => dispatch(receiveDocDetail(db, docDetail, json)))
  }
}