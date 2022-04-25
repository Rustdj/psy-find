import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//store.dispatch({type: 'INC'}); // изменение состояния


ReactDOM.render (
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
