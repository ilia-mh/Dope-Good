import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// CSS
import './global.css'
import './assets/css/library/animate.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.css';

// JS
import 'bootstrap/dist/js/bootstrap'
// import './assets/js/functions'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
