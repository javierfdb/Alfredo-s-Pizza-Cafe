import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import {BrowserRouter} from 'react-router-dom'
import PizzaContextProvider from './context/pizzaContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PizzaContextProvider>
      <App />
     </PizzaContextProvider>
  </BrowserRouter>
)
