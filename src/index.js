import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'reducers/main_reducer.js';
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
