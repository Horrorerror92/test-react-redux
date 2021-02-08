import React from 'react'
import { render } from 'react-dom'
import './index.module.css'
import App from './view/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const rootElement: HTMLElement | null = document.getElementById('root')

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const renderApp = () => render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  rootElement,
)

renderApp()


