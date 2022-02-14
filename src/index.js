import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

// CSS
// import './global.css'
// import './assets/css/library/animate.min.css'
// import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animations.css'
import './assets/scss/style.scss'


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
				<App />
		</Provider>
	</React.StrictMode>,
  document.getElementById('root')
);
