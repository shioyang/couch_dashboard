import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

const configureStore = (preloadedStore) => {
  return createStore(
    rootReducer,
    preloadedStore
  )
}

export default configureStore