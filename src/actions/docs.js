import fetch from 'isomorphic-fetch'
import { config } from '../config.js'

// action types
export const REQUEST_DOCS = 'REQUEST_DOCS'
export const RECEIVE_DOCS = 'RECEIVE_DOCS'
export const FETCH_DOCS = 'FETCH_DOCS'

// other constants
const url = config.couch_url

// action creators
export function requestDocs(dbname){
  return {
    type: REQUEST_DOCS,
    dbname
  }
}

export function receiveDocs(dbname, json){
  return {
    type: RECEIVE_DOCS,
    dbname,
    docs: json.rows,
    receivedAt: Date.now()
  }
}

export function fetchDocs(dbname){
  return function(dispatch){
    dispatch(requestDocs(dbname))
    return fetch(url + '/' + dbname.name + '/_all_docs',
                   {mode: 'cors', credentials: 'include'})
      .then(res => res.json())
      .then(json => dispatch(receiveDocs(dbname, json)))
  }
}