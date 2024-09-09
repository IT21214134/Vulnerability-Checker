import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './IT21041716/store/index.js'


window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store ={store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
)
