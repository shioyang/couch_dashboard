import fetch from 'isomorphic-fetch'
import { config } from '../config.js'
import { initialize } from 'redux-form'

// action types
export const REQUEST_DOC_DETAIL = 'REQUEST_DOC_DETAIL'
export const RECEIVE_DOC_DETAIL = 'RECEIVE_DOC_DETAIL'
export const FETCH_DOC_DETAIL = 'FETCH_DOC_DETAIL'
export const SAVE_DOC_DETAIL = 'SAVE_DOC_DETAIL'
export const CHANGE_KEY_NAME = 'CHANGE_KEY_NAME'
export const ADD_KEY_TO_DOC = 'ADD_KEY_TO_DOC'

// other constants
const url = config.server_url

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
    return fetch(url + '/doc/detail',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      dbname: db.name,
                      docId: doc._id
                    })
                  })
      .then(res => res.json())
      .then(json => {
        dispatch(receiveDocDetail(db, doc, json))
        dispatch(initialize('databaseListForm', json))
      })
  }
}

export function saveDocDetail(db, docDetail, values){
  return function(dispatch){
    dispatch(requestDocDetail(db))
    return fetch(url + '/doc/update',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      dbname: db.name,
                      docId: docDetail._id,
                      values: values
                    })
                  })
      .then(res => res.json())
      .then(json => (json.ok) ?
        dispatch(fetchDocDetail(db, docDetail)) :
        dispatch(receiveDocDetail(db, docDetail, json))
      )
  }
}

export function changeKeyName(keyName){
  return {
    type: CHANGE_KEY_NAME,
    keyName: keyName
  }
}

export function addKeyToDoc(){
  return {
    type: ADD_KEY_TO_DOC
  }
}