import React from 'react'
import { render } from 'react-dom'
import './index.module.css'
import App from './view/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const rootElement: HTMLElement | null = document.getElementById('root')

const devTools =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      )
    : applyMiddleware(thunk)

const store = createStore(rootReducer, devTools)

const renderApp = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </React.StrictMode>,
    rootElement
  )

renderApp()
