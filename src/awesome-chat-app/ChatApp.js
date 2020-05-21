import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import Wireframe from './components/Wireframe'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function ChatApp () {
  return (
    <Provider store={store}>
      <Wireframe />
    </Provider>
  )
}
