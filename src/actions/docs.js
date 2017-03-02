import fetch from 'isomorphic-fetch'
import { config } from '../config.js'

// action types
export const REQUEST_DOCS = 'REQUEST_DOCS'
export const RECEIVE_DOCS = 'RECEIVE_DOCS'
export const FETCH_DOCS = 'FETCH_DOCS'

// other constants
const url = config.server_url

// action creators
export function requestDocs(db){
  return {
    type: REQUEST_DOCS,
    db
  }
}

export function receiveDocs(db, json){
  return {
    type: RECEIVE_DOCS,
    db,
    docs: json.rows,
    receivedAt: Date.now()
  }
}

export function fetchDocs(db){
  return function(dispatch){
    dispatch(requestDocs(db))
    return fetch(url + '/db/_all_docs',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ dbname: db.name })
                  })
      .then(res => res.json())
      .then(json => dispatch(receiveDocs(db, json)))
  }
}