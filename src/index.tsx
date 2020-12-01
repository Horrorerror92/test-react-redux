import React from 'react';
import { render } from 'react-dom'
import './index.module.css';
import App from './view/index';

const rootElement: HTMLElement | null = document.getElementById('root')

const renderApp = () => render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)

renderApp()


