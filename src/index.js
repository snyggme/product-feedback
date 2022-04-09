import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import store from './store';
import './styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

const Root = ({ store }) => (
	<Provider store={store}>
    	<Router>
			<App />
		</Router>
  	</Provider>
)

root.render(
	<React.StrictMode>
  		<Root store={store} />
  	</React.StrictMode>
);
