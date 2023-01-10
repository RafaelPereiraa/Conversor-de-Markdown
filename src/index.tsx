import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from 'root'

const app = ReactDOM.createRoot(
  document.querySelector('[data-js="app"]') as HTMLElement,
)

app.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
